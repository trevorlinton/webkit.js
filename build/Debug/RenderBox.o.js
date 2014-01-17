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
H_BASE = parentModule["_malloc"](1088 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1088;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9RenderBoxD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiifi(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiifi"](index,a1,a2,a3,a4,a5);
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
function invoke_iiif(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiif"](index,a1,a2,a3);
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
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZTVN7WebCore16ShapeOutsideInfoE=env.__ZTVN7WebCore16ShapeOutsideInfoE|0;
  var __ZTVN7WebCore16InlineElementBoxE=env.__ZTVN7WebCore16InlineElementBoxE|0;
  var __ZN7WebCore9HTMLNames9buttonTagE=env.__ZN7WebCore9HTMLNames9buttonTagE|0;
  var __ZN7WebCore9HTMLNames11textareaTagE=env.__ZN7WebCore9HTMLNames11textareaTagE|0;
  var __ZN7WebCore9HTMLNames9selectTagE=env.__ZN7WebCore9HTMLNames9selectTagE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames9legendTagE=env.__ZN7WebCore9HTMLNames9legendTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE7infoMapEvE13staticInfoMap=(H_BASE+1040)|0;
  var __ZN7WebCore9RenderBox17s_hadOverflowClipE=(H_BASE+1080)|0;
  var __ZTVN7WebCore9RenderBoxE=(H_BASE+8)|0;
  var __ZGVZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE7infoMapEvE13staticInfoMap=(H_BASE+1088)|0;
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
  var invoke_iiiifi=env.invoke_iiiifi;
  var invoke_viiii=env.invoke_viiii;
  var invoke_viiiii=env.invoke_viiiii;
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
  var invoke_iiif=env.invoke_iiif;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore9RenderBox30computePercentageLogicalHeightERKNS_6LengthE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, d93 = +0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 160 | 0;
 i26 = i4 + 168 | 0;
 i27 = i4 + 176 | 0;
 i28 = i4 + 184 | 0;
 i29 = i4 + 192 | 0;
 i30 = i4 + 200 | 0;
 i31 = i4 + 208 | 0;
 i32 = i4 + 216 | 0;
 i33 = i4 + 224 | 0;
 i34 = i4 + 248 | 0;
 i35 = i4 + 256 | 0;
 i36 = i4 + 264 | 0;
 i37 = i4 + 272 | 0;
 i38 = i4 + 280 | 0;
 i39 = i2 | 0;
 i40 = __ZNK7WebCore12RenderObject15containingBlockEv(i39) | 0;
 i41 = i40 | 0;
 i42 = i40 + 20 | 0;
 i43 = HEAP32[i42 >> 2] | 0;
 L1 : do {
  if ((i43 & 768 | 0) == 768) {
   i44 = 0;
   i45 = i2;
   i46 = i40;
   i47 = 0;
   i48 = i41;
   i49 = i42;
   i50 = i43;
  } else {
   i51 = i2 + 4 | 0;
   i52 = i2 + 20 | 0;
   i53 = i19 | 0;
   i54 = i20 | 0;
   i55 = i18 | 0;
   i56 = i17 | 0;
   i57 = 0;
   i58 = i2;
   i59 = i40;
   i60 = 0;
   i61 = i41;
   i62 = i42;
   while (1) {
    i63 = i59 | 0;
    i64 = i59 | 0;
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i51 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) != 0) {
     if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i64) | 0)) {
      break;
     }
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 188 >> 2] & 511](i64) | 0) {
     break;
    }
    i64 = HEAP32[i59 + 20 >> 2] | 0;
    if ((i64 & 25165824 | 0) == 16777216) {
     break;
    }
    i65 = i59 + 36 | 0;
    i66 = HEAP32[i65 >> 2] | 0;
    i67 = (HEAP32[i66 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i67 | 0) == 3 | (i67 | 0) == 0) {
     i68 = (HEAP32[i66 + 4 >> 2] | 0) + 12 | 0;
    } else {
     i68 = (HEAP32[i66 + 4 >> 2] | 0) + 4 | 0;
    }
    if ((HEAP8[i68 + 5 | 0] | 0) != 0) {
     break;
    }
    if ((HEAP32[i52 >> 2] & 8192 | 0) != 0 ^ (i64 & 8192 | 0) != 0) {
     break;
    }
    i64 = HEAP32[i59 + 4 >> 2] | 0;
    do {
     if ((HEAP32[i62 >> 2] & 128 | 0) == 0) {
      if ((HEAP32[i64 + 12 >> 2] & 4 | 0) == 0) {
       i69 = 17;
       break;
      }
      i66 = HEAP32[i64 + 44 >> 2] | 0;
      i70 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
      if ((i66 | 0) == (i70 | 0)) {
       i69 = 18;
       break;
      }
      if ((HEAP32[i66 + 12 >> 2] | 0) != (HEAP32[i70 + 12 >> 2] | 0)) {
       i69 = 17;
       break;
      }
      if ((HEAP32[i66 + 16 >> 2] | 0) == (HEAP32[i70 + 16 >> 2] | 0)) {
       i69 = 18;
      } else {
       i69 = 17;
      }
     } else {
      i69 = 17;
     }
    } while (0);
    if ((i69 | 0) == 17) {
     i69 = 0;
     if ((HEAP32[(HEAP32[(HEAP32[i64 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i64 | 0)) {
      i69 = 18;
     } else {
      i71 = i57;
     }
    }
    if ((i69 | 0) == 18) {
     i69 = 0;
     i70 = i59 + 60 | 0;
     __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i19, i70, i67);
     __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i20, i70, (HEAP32[(HEAP32[i65 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     i70 = HEAP32[i53 >> 2] | 0;
     i66 = HEAP32[i54 >> 2] | 0;
     i72 = i59 | 0;
     i73 = i59;
     i74 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i73 >> 2] | 0) + 752 >> 2] & 511](i72) | 0;
     i75 = i59;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i75 >> 2] | 0) + 720 >> 2] & 127](i18, i72);
     i76 = HEAP32[i55 >> 2] | 0;
     i77 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i73 >> 2] | 0) + 756 >> 2] & 511](i72) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i75 >> 2] | 0) + 724 >> 2] & 127](i17, i72);
     i71 = i70 + i57 + i66 + i74 + i76 + i77 + (HEAP32[i56 >> 2] | 0) | 0;
    }
    i77 = __ZNK7WebCore12RenderObject15containingBlockEv(i61) | 0;
    __ZN7WebCore11RenderBlock26addPercentHeightDescendantERNS_9RenderBoxE(i77, i2);
    i76 = i77 | 0;
    i74 = i77 + 20 | 0;
    i66 = HEAP32[i74 >> 2] | 0;
    if ((i66 & 768 | 0) == 768) {
     i44 = i71;
     i45 = i63;
     i46 = i77;
     i47 = 1;
     i48 = i76;
     i49 = i74;
     i50 = i66;
     break L1;
    } else {
     i57 = i71;
     i58 = i63;
     i59 = i77;
     i60 = 1;
     i61 = i76;
     i62 = i74;
    }
   }
   i44 = i57;
   i45 = i58;
   i46 = i59;
   i47 = i60;
   i48 = i61;
   i49 = i62;
   i50 = HEAP32[i62 >> 2] | 0;
  }
 } while (0);
 i71 = i46 + 36 | 0;
 i17 = HEAP32[i71 >> 2] | 0;
 do {
  if ((i50 & 25165824 | 0) == 16777216) {
   i18 = i17 + 44 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) >>> 13 & 3;
   if ((i20 | 0) == 3 | (i20 | 0) == 0) {
    i78 = (HEAP32[i17 + 4 >> 2] | 0) + 12 | 0;
   } else {
    i78 = (HEAP32[i17 + 4 >> 2] | 0) + 4 | 0;
   }
   if ((HEAP8[i78 + 5 | 0] | 0) != 0) {
    i79 = 1;
    break;
   }
   i19 = i17 + 16 | 0;
   if ((HEAP8[(__ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i19 >> 2] | 0) + 4 | 0, i20) | 0) + 5 | 0] | 0) == 0) {
    i79 = 0;
    break;
   }
   i79 = (HEAP8[(__ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i19 >> 2] | 0) + 4 | 0, (HEAP32[i18 >> 2] | 0) >>> 13 & 3) | 0) + 5 | 0] | 0) != 0;
  } else {
   i79 = 0;
  }
 } while (0);
 i78 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 184 >> 2] & 511](i39) | 0;
 i39 = i2 + 20 | 0;
 L37 : do {
  if ((HEAP32[i39 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i49 >> 2] & 8192 | 0) != 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i45 >> 2] | 0) + 800 >> 2] & 127](i21, i45);
   i80 = i78;
   i81 = HEAP32[i21 >> 2] | 0;
   i69 = 140;
  } else {
   i50 = HEAP32[H_BASE + 1048 >> 2] | 0;
   L39 : do {
    if ((i50 | 0) != 0) {
     i18 = HEAP32[i50 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     i19 = HEAP32[i50 + 8 >> 2] | 0;
     i20 = i2;
     i68 = i20 + ~(i20 << 15) | 0;
     i20 = (i68 >>> 10 ^ i68) * 9 & -1;
     i68 = i20 >>> 6 ^ i20;
     i20 = i68 + ~(i68 << 11) | 0;
     i68 = i20 >>> 16 ^ i20;
     i20 = i19 & i68;
     i42 = i18 + (i20 << 3) | 0;
     i41 = HEAP32[i42 >> 2] | 0;
     i40 = (i41 | 0) == (i2 | 0);
     if (i40) {
      i82 = i42;
     } else {
      i43 = (i68 >>> 23) + ~i68 | 0;
      i56 = i43 << 12 ^ i43;
      i43 = i56 >>> 7 ^ i56;
      i56 = i43 << 2 ^ i43;
      i43 = i56 >>> 20 ^ i56 | 1;
      i56 = 0;
      i55 = i20;
      i54 = i41;
      while (1) {
       if ((i54 | 0) == 0) {
        break L39;
       }
       i53 = (i56 | 0) == 0 ? i43 : i56;
       i52 = i53 + i55 & i19;
       i51 = i18 + (i52 << 3) | 0;
       i74 = HEAP32[i51 >> 2] | 0;
       if ((i74 | 0) == (i2 | 0)) {
        i82 = i51;
        break;
       } else {
        i56 = i53;
        i55 = i52;
        i54 = i74;
       }
      }
     }
     if ((i82 | 0) == 0) {
      break;
     }
     if (i40) {
      i83 = i42;
     } else {
      i54 = (i68 >>> 23) + ~i68 | 0;
      i55 = i54 << 12 ^ i54;
      i54 = i55 >>> 7 ^ i55;
      i55 = i54 << 2 ^ i54;
      i54 = i55 >>> 20 ^ i55 | 1;
      i55 = 0;
      i56 = i20;
      i43 = i41;
      while (1) {
       if ((i43 | 0) == 0) {
        i84 = 0;
        i85 = i78;
        break L37;
       }
       i63 = (i55 | 0) == 0 ? i54 : i55;
       i65 = i63 + i56 & i19;
       i67 = i18 + (i65 << 3) | 0;
       i64 = HEAP32[i67 >> 2] | 0;
       if ((i64 | 0) == (i2 | 0)) {
        i83 = i67;
        break;
       } else {
        i55 = i63;
        i56 = i65;
        i43 = i64;
       }
      }
     }
     if ((i83 | 0) == 0) {
      i84 = 0;
      i85 = i78;
      break L37;
     }
     i80 = i78;
     i81 = HEAP32[i83 + 4 >> 2] | 0;
     i69 = 140;
     break L37;
    }
   } while (0);
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 188 >> 2] & 511](i48) | 0) {
    if (i47) {
     i69 = 141;
     break;
    }
    i50 = i46 | 0;
    i62 = HEAP32[H_BASE + 1064 >> 2] | 0;
    L60 : do {
     if ((i62 | 0) != 0) {
      i61 = HEAP32[i62 >> 2] | 0;
      if ((i61 | 0) == 0) {
       break;
      }
      i60 = HEAP32[i62 + 8 >> 2] | 0;
      i59 = i46;
      i58 = i59 + ~(i59 << 15) | 0;
      i59 = (i58 >>> 10 ^ i58) * 9 & -1;
      i58 = i59 >>> 6 ^ i59;
      i59 = i58 + ~(i58 << 11) | 0;
      i58 = i59 >>> 16 ^ i59;
      i59 = i60 & i58;
      i57 = i61 + (i59 << 3) | 0;
      i43 = HEAP32[i57 >> 2] | 0;
      i56 = (i43 | 0) == (i50 | 0);
      if (i56) {
       i86 = i57;
      } else {
       i55 = (i58 >>> 23) + ~i58 | 0;
       i18 = i55 << 12 ^ i55;
       i55 = i18 >>> 7 ^ i18;
       i18 = i55 << 2 ^ i55;
       i55 = i18 >>> 20 ^ i18 | 1;
       i18 = 0;
       i19 = i59;
       i54 = i43;
       while (1) {
        if ((i54 | 0) == 0) {
         break L60;
        }
        i41 = (i18 | 0) == 0 ? i55 : i18;
        i20 = i41 + i19 & i60;
        i68 = i61 + (i20 << 3) | 0;
        i42 = HEAP32[i68 >> 2] | 0;
        if ((i42 | 0) == (i50 | 0)) {
         i86 = i68;
         break;
        } else {
         i18 = i41;
         i19 = i20;
         i54 = i42;
        }
       }
      }
      if ((i86 | 0) == 0) {
       break;
      }
      if (i56) {
       i87 = i57;
      } else {
       i54 = (i58 >>> 23) + ~i58 | 0;
       i19 = i54 << 12 ^ i54;
       i54 = i19 >>> 7 ^ i19;
       i19 = i54 << 2 ^ i54;
       i54 = i19 >>> 20 ^ i19 | 1;
       i19 = 0;
       i18 = i59;
       i55 = i43;
       while (1) {
        if ((i55 | 0) == 0) {
         i84 = 0;
         i85 = 1;
         break L37;
        }
        i42 = (i19 | 0) == 0 ? i54 : i19;
        i20 = i42 + i18 & i60;
        i41 = i61 + (i20 << 3) | 0;
        i68 = HEAP32[i41 >> 2] | 0;
        if ((i68 | 0) == (i50 | 0)) {
         i87 = i41;
         break;
        } else {
         i19 = i42;
         i18 = i20;
         i55 = i68;
        }
       }
      }
      if ((i87 | 0) == 0) {
       i84 = 0;
       i85 = 1;
       break L37;
      }
      i80 = 1;
      i81 = HEAP32[i87 + 4 >> 2] | 0;
      i69 = 140;
      break L37;
     }
    } while (0);
    do {
     if ((HEAP32[i39 >> 2] & 65536 | 0) != 0) {
      i50 = HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] | 0;
      if ((i50 & 57344 | 0) != 16384) {
       if (((i50 >>> 13 & 7) - 3 | 0) >>> 0 >= 2 >>> 0) {
        break;
       }
      }
      i50 = HEAP32[i71 >> 2] | 0;
      i62 = (HEAP32[i50 + 44 >> 2] | 0) >>> 13 & 3;
      if ((i62 | 0) == 3 | (i62 | 0) == 0) {
       i88 = (HEAP32[i50 + 4 >> 2] | 0) + 12 | 0;
      } else {
       i88 = (HEAP32[i50 + 4 >> 2] | 0) + 4 | 0;
      }
      if ((HEAP8[i88 + 5 | 0] | 0) == 0) {
       i50 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i46 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0;
       i62 = (HEAP32[i50 + 44 >> 2] | 0) >>> 13 & 3;
       if ((i62 | 0) == 3 | (i62 | 0) == 0) {
        i89 = (HEAP32[i50 + 4 >> 2] | 0) + 12 | 0;
       } else {
        i89 = (HEAP32[i50 + 4 >> 2] | 0) + 4 | 0;
       }
       if ((HEAP8[i89 + 5 | 0] | 0) == 0) {
        break;
       }
      }
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i4;
      return;
     }
    } while (0);
    HEAP32[i1 >> 2] = -1;
    STACKTOP = i4;
    return;
   }
   i50 = (HEAP32[i17 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i50 | 0) == 3 | (i50 | 0) == 0) {
    i62 = HEAP32[i17 + 4 >> 2] | 0;
    i90 = i62 + 12 | 0;
    i91 = i62;
   } else {
    i62 = HEAP32[i17 + 4 >> 2] | 0;
    i90 = i62 + 4 | 0;
    i91 = i62;
   }
   if ((HEAP8[i90 + 5 | 0] | 0) == 3) {
    i62 = i46 | 0;
    if ((i50 | 0) == 3 | (i50 | 0) == 0) {
     i92 = i91 + 12 | 0;
    } else {
     i92 = i91 + 4 | 0;
    }
    if ((HEAP8[i92 + 6 | 0] & 1) == 0) {
     d93 = +(HEAP32[i92 >> 2] | 0);
    } else {
     d93 = +HEAPF32[i92 >> 2];
    }
    do {
     if (d93 < +2147483647) {
      if (d93 <= +-2147483648) {
       i94 = -2147483648;
       break;
      }
      i94 = ~~d93;
     } else {
      i94 = 2147483647;
     }
    } while (0);
    if ((HEAP32[(HEAP32[(HEAP32[i71 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
     i95 = i94;
    } else {
     i55 = i46 | 0;
     i18 = i46;
     i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 752 >> 2] & 511](i55) | 0;
     i61 = i46;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i61 >> 2] | 0) + 720 >> 2] & 127](i16, i55);
     i60 = HEAP32[i16 >> 2] | 0;
     i54 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 756 >> 2] & 511](i55) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i61 >> 2] | 0) + 724 >> 2] & 127](i15, i55);
     i95 = i94 - (i60 + i19 + i54 + (HEAP32[i15 >> 2] | 0)) | 0;
    }
    i54 = (i95 | 0) > 0 ? i95 : 0;
    HEAP32[i22 >> 2] = 0;
    i19 = (HEAP32[(HEAP32[i71 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    do {
     if ((i19 | 0) == 3 | (i19 | 0) == 0) {
      if ((HEAP32[i46 + 20 >> 2] & 65536 | 0) == 0) {
       i96 = 0;
       break;
      }
      i60 = i46 + 40 | 0;
      if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i60 >> 2] | 0) | 0) {
       i96 = 0;
       break;
      }
      if ((((HEAP32[(HEAP32[i71 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
       i96 = 0;
       break;
      }
      i96 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i60 >> 2] | 0, 0) | 0;
     } else {
      i96 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 908 >> 2] & 511](i62) | 0;
     }
    } while (0);
    HEAP32[i24 >> 2] = i54 - i96;
    __ZNK7WebCore9RenderBox40constrainContentBoxLogicalHeightByMinMaxENS_10LayoutUnitE(i23, i62, i24);
    i80 = i78;
    i81 = HEAP32[((HEAP32[i23 >> 2] | 0) > 0 ? i23 : i22) >> 2] | 0;
    i69 = 140;
    break;
   }
   if ((i50 | 0) == 3 | (i50 | 0) == 0) {
    i97 = i91 + 12 | 0;
   } else {
    i97 = i91 + 4 | 0;
   }
   i19 = HEAP8[i97 + 5 | 0] | 0;
   if (!(i19 << 24 >> 24 != 10 & i19 << 24 >> 24 != 2 | i79)) {
    i19 = i46 | 0;
    if ((i50 | 0) == 3 | (i50 | 0) == 0) {
     i98 = i91 + 12 | 0;
    } else {
     i98 = i91 + 4 | 0;
    }
    __ZNK7WebCore9RenderBox30computePercentageLogicalHeightERKNS_6LengthE(i25, i19, i98);
    i60 = HEAP32[i25 >> 2] | 0;
    if ((i60 | 0) == -1) {
     i69 = 141;
     break;
    }
    i55 = HEAP32[i71 >> 2] | 0;
    if ((HEAP32[(HEAP32[i55 + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
     i99 = i60;
     i100 = i55;
    } else {
     i55 = i46 | 0;
     i61 = i46;
     i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i61 >> 2] | 0) + 752 >> 2] & 511](i55) | 0;
     i43 = i46;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 720 >> 2] & 127](i14, i55);
     i59 = HEAP32[i14 >> 2] | 0;
     i58 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i61 >> 2] | 0) + 756 >> 2] & 511](i55) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 724 >> 2] & 127](i13, i55);
     i99 = i60 - (i59 + i18 + i58 + (HEAP32[i13 >> 2] | 0)) | 0;
     i100 = HEAP32[i71 >> 2] | 0;
    }
    i58 = (i99 | 0) > 0 ? i99 : 0;
    i18 = (HEAP32[i100 + 44 >> 2] | 0) >>> 13 & 3;
    do {
     if ((i18 | 0) == 3 | (i18 | 0) == 0) {
      if ((HEAP32[i46 + 20 >> 2] & 65536 | 0) == 0) {
       i101 = 0;
       break;
      }
      i59 = i46 + 40 | 0;
      if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i59 >> 2] | 0) | 0) {
       i101 = 0;
       break;
      }
      if ((((HEAP32[(HEAP32[i71 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
       i101 = 0;
       break;
      }
      i101 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i59 >> 2] | 0, 0) | 0;
     } else {
      i101 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 908 >> 2] & 511](i19) | 0;
     }
    } while (0);
    HEAP32[i27 >> 2] = i58 - i101;
    __ZNK7WebCore9RenderBox40constrainContentBoxLogicalHeightByMinMaxENS_10LayoutUnitE(i26, i19, i27);
    HEAP32[i28 >> 2] = 0;
    i80 = i78;
    i81 = HEAP32[((HEAP32[i26 >> 2] | 0) > 0 ? i26 : i28) >> 2] | 0;
    i69 = 140;
    break;
   }
   if ((i50 | 0) == 3 | (i50 | 0) == 0) {
    i102 = i91 + 12 | 0;
   } else {
    i102 = i91 + 4 | 0;
   }
   if (((HEAP8[i102 + 5 | 0] | 0) - 11 & 255) >>> 0 < 4 >>> 0) {
    if ((i50 | 0) == 3 | (i50 | 0) == 0) {
     i103 = i91 + 12 | 0;
    } else {
     i103 = i91 + 4 | 0;
    }
    i18 = (HEAP32[i2 + 4 >> 2] | 0) + 20 | 0;
    i62 = (HEAP32[(HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) != 0;
    HEAP32[i12 >> 2] = 0;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i29, i103, i12, HEAP32[(HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i62);
    i62 = HEAP32[i29 >> 2] | 0;
    if ((i62 | 0) == -1) {
     i69 = 141;
     break;
    }
    i18 = i46 | 0;
    i54 = HEAP32[i71 >> 2] | 0;
    if ((HEAP32[(HEAP32[i54 + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
     i104 = i62;
     i105 = i54;
    } else {
     i54 = i46 | 0;
     i59 = i46;
     i60 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 752 >> 2] & 511](i54) | 0;
     i55 = i46;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i55 >> 2] | 0) + 720 >> 2] & 127](i11, i54);
     i43 = HEAP32[i11 >> 2] | 0;
     i61 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 756 >> 2] & 511](i54) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i55 >> 2] | 0) + 724 >> 2] & 127](i10, i54);
     i104 = i62 - (i43 + i60 + i61 + (HEAP32[i10 >> 2] | 0)) | 0;
     i105 = HEAP32[i71 >> 2] | 0;
    }
    i61 = (i104 | 0) > 0 ? i104 : 0;
    i60 = (HEAP32[i105 + 44 >> 2] | 0) >>> 13 & 3;
    do {
     if ((i60 | 0) == 3 | (i60 | 0) == 0) {
      if ((HEAP32[i46 + 20 >> 2] & 65536 | 0) == 0) {
       i106 = 0;
       break;
      }
      i43 = i46 + 40 | 0;
      if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i43 >> 2] | 0) | 0) {
       i106 = 0;
       break;
      }
      if ((((HEAP32[(HEAP32[i71 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
       i106 = 0;
       break;
      }
      i106 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i43 >> 2] | 0, 0) | 0;
     } else {
      i106 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 908 >> 2] & 511](i18) | 0;
     }
    } while (0);
    HEAP32[i31 >> 2] = i61 - i106;
    __ZNK7WebCore9RenderBox40constrainContentBoxLogicalHeightByMinMaxENS_10LayoutUnitE(i30, i18, i31);
    HEAP32[i32 >> 2] = 0;
    i80 = i78;
    i81 = HEAP32[((HEAP32[i30 >> 2] | 0) > 0 ? i30 : i32) >> 2] | 0;
    i69 = 140;
    break;
   } else {
    if (!i79) {
     if ((HEAP32[i49 >> 2] & 768 | 0) != 768) {
      i69 = 141;
      break;
     }
     __ZNK7WebCore10RenderView23pageOrViewLogicalHeightEv(i36, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
     i80 = i78;
     i81 = HEAP32[i36 >> 2] | 0;
     i69 = 140;
     break;
    }
    _memset(i33 | 0, 0, 24) | 0;
    i60 = i46 | 0;
    i50 = HEAP32[(HEAP32[i46 >> 2] | 0) + 884 >> 2] | 0;
    i19 = (HEAP32[(HEAP32[i71 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i19 | 0) == 3 | (i19 | 0) == 0) {
     HEAP32[i34 >> 2] = HEAP32[i46 + 56 >> 2];
    } else {
     HEAP32[i34 >> 2] = HEAP32[i46 + 52 >> 2];
    }
    HEAP32[i35 >> 2] = 0;
    FUNCTION_TABLE_viiii[i50 & 31](i60, i34, i35, i33);
    i50 = i46 | 0;
    i19 = i46;
    i58 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 752 >> 2] & 511](i50) | 0;
    i43 = i46;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 720 >> 2] & 127](i9, i50);
    i62 = HEAP32[i9 >> 2] | 0;
    i54 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 756 >> 2] & 511](i50) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 724 >> 2] & 127](i8, i50);
    i50 = (HEAP32[i33 >> 2] | 0) - (i62 + i58 + i54 + (HEAP32[i8 >> 2] | 0)) | 0;
    i54 = (HEAP32[(HEAP32[i71 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    do {
     if ((i54 | 0) == 3 | (i54 | 0) == 0) {
      if ((HEAP32[i46 + 20 >> 2] & 65536 | 0) == 0) {
       i107 = 0;
       break;
      }
      i58 = i46 + 40 | 0;
      if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i58 >> 2] | 0) | 0) {
       i107 = 0;
       break;
      }
      if ((((HEAP32[(HEAP32[i71 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
       i107 = 0;
       break;
      }
      i107 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i58 >> 2] | 0, 0) | 0;
     } else {
      i107 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 908 >> 2] & 511](i60) | 0;
     }
    } while (0);
    i80 = i78;
    i81 = i50 - i107 | 0;
    i69 = 140;
    break;
   }
  }
 } while (0);
 if ((i69 | 0) == 140) {
  if ((i81 | 0) == -1) {
   i69 = 141;
  } else {
   i84 = i81;
   i85 = i80;
  }
 }
 if ((i69 | 0) == 141) {
  HEAP32[i1 >> 2] = -1;
  STACKTOP = i4;
  return;
 }
 HEAP32[i7 >> 2] = i84 - i44;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i37, i3, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 if (i85) {
  i85 = i2 | 0;
  i7 = i2;
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 752 >> 2] & 511](i85) | 0;
  i44 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i44 >> 2] | 0) + 720 >> 2] & 127](i6, i85);
  i2 = HEAP32[i6 >> 2] | 0;
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 756 >> 2] & 511](i85) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i44 >> 2] | 0) + 724 >> 2] & 127](i5, i85);
  i85 = i37 | 0;
  i44 = (HEAP32[i85 >> 2] | 0) - (i2 + i3 + i6 + (HEAP32[i5 >> 2] | 0)) | 0;
  HEAP32[i85 >> 2] = i44;
  HEAP32[i38 >> 2] = 0;
  HEAP32[i1 >> 2] = HEAP32[((i44 | 0) > 0 ? i37 : i38) >> 2];
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i37 >> 2];
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, d66 = +0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, d81 = +0, d82 = +0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i17;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = i21;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i24 = i23;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i27 = i26;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i41 = i4 | 0;
 i42 = i4 | 0;
 HEAP32[i42 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i3 >> 2];
 i3 = i1 | 0;
 i2 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 511](i3) | 0) {
  STACKTOP = i5;
  return;
 }
 i43 = i1 + 20 | 0;
 i44 = HEAP32[i43 >> 2] | 0;
 if ((i44 & 3072 | 0) == 1024) {
  STACKTOP = i5;
  return;
 }
 _memset(i17 | 0, 0, 7) | 0;
 do {
  if ((i44 & 25165824 | 0) == 16777216) {
   __ZNK7WebCore9RenderBox30computePositionedLogicalHeightERNS0_27LogicalExtentComputedValuesE(i1, i4);
   i45 = 88;
  } else {
   i46 = __ZNK7WebCore12RenderObject15containingBlockEv(i3) | 0;
   i47 = (HEAP32[i46 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i43 >> 2] & 8192 | 0) != 0;
   if (!i47) {
    i48 = ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i46 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0;
    i49 = i4 + 12 | 0;
    i50 = i4 + 8 | 0;
    __ZNK7WebCore9RenderBox28computeBlockDirectionMarginsEPKNS_11RenderBlockERNS_10LayoutUnitES5_(i1, i46, i48 ? i49 : i50, i48 ? i50 : i49);
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 184 >> 2] & 511](i3) | 0) {
    if (!i47) {
     break;
    }
    i49 = HEAP32[i46 + 36 >> 2] | 0;
    i50 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    i48 = (HEAP32[i49 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i48 | 0) == 0) {
     i51 = (i50 | 0) == 1;
    } else if ((i48 | 0) == 3) {
     i51 = (i50 | 0) == 1;
    } else if ((i48 | 0) == 1) {
     i51 = (i50 | 0) == 3;
    } else if ((i48 | 0) == 2) {
     i51 = (i50 | 0) == 3;
    } else {
     i51 = 0;
    }
    if ((HEAP32[i49 + 40 >> 2] & 1073741824 | 0) == 0) {
     i52 = i51 ^ 1;
    } else {
     i52 = i51;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 800 >> 2] & 127](i19, i1);
    HEAP32[i20 >> 2] = HEAP32[i42 >> 2];
    i49 = i4 + 12 | 0;
    i50 = i4 + 8 | 0;
    __ZNK7WebCore9RenderBox29computeInlineDirectionMarginsEPNS_11RenderBlockENS_10LayoutUnitES3_RS3_S4_(i1, i46, i19, i20, i52 ? i49 : i50, i52 ? i50 : i49);
    break;
   }
   i49 = i1 + 8 | 0;
   i50 = HEAP32[i49 >> 2] | 0;
   i48 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i50 >> 2] | 0) + 548 >> 2] & 511](i50 | 0) | 0;
   i50 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i49 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 56 >> 2] | 0) + 16 >> 2] | 0;
   if (i48) {
    i53 = (i50 & 32 | 0) != 0;
   } else {
    i53 = 1;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1004 >> 2] & 511](i1) | 0) {
    i54 = (i50 & 7 | 0) != 0 | i53;
   } else {
    i54 = 0;
   }
   i50 = HEAP32[H_BASE + 1064 >> 2] | 0;
   L32 : do {
    if ((i50 | 0) == 0) {
     i45 = 38;
    } else {
     i48 = HEAP32[i50 >> 2] | 0;
     if ((i48 | 0) == 0) {
      i45 = 38;
      break;
     }
     i55 = HEAP32[i50 + 8 >> 2] | 0;
     i56 = i1;
     i57 = i56 + ~(i56 << 15) | 0;
     i56 = (i57 >>> 10 ^ i57) * 9 & -1;
     i57 = i56 >>> 6 ^ i56;
     i56 = i57 + ~(i57 << 11) | 0;
     i57 = i56 >>> 16 ^ i56;
     i56 = i55 & i57;
     i58 = i48 + (i56 << 3) | 0;
     i59 = HEAP32[i58 >> 2] | 0;
     if ((i59 | 0) == (i1 | 0)) {
      i60 = i58;
     } else {
      i58 = (i57 >>> 23) + ~i57 | 0;
      i61 = i58 << 12 ^ i58;
      i58 = i61 >>> 7 ^ i61;
      i61 = i58 << 2 ^ i58;
      i58 = i61 >>> 20 ^ i61 | 1;
      i61 = 0;
      i62 = i56;
      i56 = i59;
      while (1) {
       if ((i56 | 0) == 0) {
        i45 = 38;
        break L32;
       }
       i59 = (i61 | 0) == 0 ? i58 : i61;
       i63 = i59 + i62 & i55;
       i64 = i48 + (i63 << 3) | 0;
       i65 = HEAP32[i64 >> 2] | 0;
       if ((i65 | 0) == (i1 | 0)) {
        i60 = i64;
        break;
       } else {
        i61 = i59;
        i62 = i63;
        i56 = i65;
       }
      }
     }
     if ((i60 | 0) == 0) {
      i45 = 38;
      break;
     }
     i56 = HEAP32[i49 >> 2] | 0;
     i62 = i56 | 0;
     i61 = i56;
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i61 >> 2] | 0) + 556 >> 2] & 511](i62) | 0)) {
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i61 >> 2] | 0) + 548 >> 2] & 511](i62) | 0)) {
       i45 = 38;
       break;
      }
     }
     i62 = HEAP32[H_BASE + 1064 >> 2] | 0;
     i61 = HEAP32[i62 + 8 >> 2] | 0;
     i56 = HEAP32[i62 >> 2] | 0;
     L45 : do {
      if ((i56 | 0) == 0) {
       d66 = +0;
      } else {
       i62 = i61 & i57;
       i48 = i56 + (i62 << 3) | 0;
       i55 = HEAP32[i48 >> 2] | 0;
       if ((i55 | 0) == (i1 | 0)) {
        i67 = i48;
       } else {
        i48 = (i57 >>> 23) + ~i57 | 0;
        i58 = i48 << 12 ^ i48;
        i48 = i58 >>> 7 ^ i58;
        i58 = i48 << 2 ^ i48;
        i48 = i58 >>> 20 ^ i58 | 1;
        i58 = 0;
        i65 = i62;
        i62 = i55;
        while (1) {
         if ((i62 | 0) == 0) {
          d66 = +0;
          break L45;
         }
         i55 = (i58 | 0) == 0 ? i48 : i58;
         i63 = i55 + i65 & i61;
         i59 = i56 + (i63 << 3) | 0;
         i64 = HEAP32[i59 >> 2] | 0;
         if ((i64 | 0) == (i1 | 0)) {
          i67 = i59;
          break;
         } else {
          i58 = i55;
          i65 = i63;
          i62 = i64;
         }
        }
       }
       if ((i67 | 0) == 0) {
        d66 = +0;
        break;
       }
       d66 = +(HEAP32[i67 + 4 >> 2] | 0);
      }
     } while (0);
     HEAPF32[i21 >> 2] = d66;
     HEAP8[i22 + 4 | 0] = 0;
     i56 = i22 + 5 | 0;
     HEAP8[i56] = 3;
     HEAP8[i22 + 6 | 0] = 1;
     i61 = HEAP32[i21 + 4 >> 2] | 0;
     HEAP32[i17 >> 2] = HEAP32[i21 >> 2];
     HEAP32[i17 + 4 >> 2] = i61;
     HEAP8[i56] = 0;
     i68 = 0;
     i69 = (i61 >>> 8 | 0 << 24) & 255;
    }
   } while (0);
   do {
    if ((i45 | 0) == 38) {
     if (i54) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 896 >> 2] & 127](i25, i1);
      HEAPF32[i23 >> 2] = +(HEAP32[i25 >> 2] | 0);
      HEAP8[i24 + 4 | 0] = 0;
      i50 = i24 + 5 | 0;
      HEAP8[i50] = 3;
      HEAP8[i24 + 6 | 0] = 1;
      i61 = HEAP32[i23 + 4 >> 2] | 0;
      HEAP32[i17 >> 2] = HEAP32[i23 >> 2];
      HEAP32[i17 + 4 >> 2] = i61;
      HEAP8[i50] = 0;
      i68 = 0;
      i69 = (i61 >>> 8 | 0 << 24) & 255;
      break;
     }
     i61 = HEAP32[i1 + 36 >> 2] | 0;
     i50 = (HEAP32[i61 + 44 >> 2] | 0) >>> 13 & 3;
     if ((i50 | 0) == 3 | (i50 | 0) == 0) {
      i70 = (HEAP32[i61 + 4 >> 2] | 0) + 12 | 0;
     } else {
      i70 = (HEAP32[i61 + 4 >> 2] | 0) + 4 | 0;
     }
     i61 = i70;
     i50 = HEAP32[i61 >> 2] | 0;
     i56 = HEAP32[i61 + 4 >> 2] | 0;
     HEAP32[i17 >> 2] = i50;
     HEAP32[i17 + 4 >> 2] = i56;
     if (!((i50 & 0 | 0) == 0 & (i56 & 65280 | 0) == 2560)) {
      i68 = 1;
      i69 = (i56 >>> 8 | 0 << 24) & 255;
      break;
     }
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i18);
     i68 = 1;
     i69 = HEAP8[i18 + 5 | 0] | 0;
    }
   } while (0);
   do {
    if (i69 << 24 >> 24 == 0) {
     i56 = HEAP32[i49 >> 2] | 0;
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i56 >> 2] | 0) + 548 >> 2] & 511](i56 | 0) | 0)) {
      i45 = 53;
      break;
     }
     i56 = HEAP32[i49 >> 2] | 0;
     if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i56 + 36 >> 2] | 0) + 20 >> 2] | 0) + 56 >> 2] | 0) + 16 >> 2] & 32 | 0) != 0) {
      i45 = 53;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i56 >> 2] | 0) + 552 >> 2] & 511](i56 | 0) | 0)) {
      i45 = 53;
      break;
     }
     i56 = HEAP32[i49 >> 2] | 0;
     i50 = i56;
     i61 = (HEAP32[(HEAP32[i56 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i61 | 0) == 3 | (i61 | 0) == 0) {
      __ZNK7WebCore9RenderBox13contentHeightEv(i28, i50);
      i71 = HEAP32[i28 >> 2] | 0;
     } else {
      i61 = HEAP32[i56 + 52 >> 2] | 0;
      i57 = i56;
      i62 = i56;
      i65 = i61 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i62 >> 2] | 0) + 744 >> 2] & 511](i57) | 0) | 0;
      i61 = i65 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i62 >> 2] | 0) + 748 >> 2] & 511](i57) | 0) | 0;
      i62 = i61 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i56 >> 2] | 0) + 908 >> 2] & 511](i50) | 0) | 0;
      i50 = i56;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i50 >> 2] | 0) + 712 >> 2] & 127](i6, i57);
      i56 = i62 - (HEAP32[i6 >> 2] | 0) | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i50 >> 2] | 0) + 716 >> 2] & 127](i7, i57);
      i57 = i56 - (HEAP32[i7 >> 2] | 0) | 0;
      HEAP32[i28 >> 2] = i57;
      i71 = i57;
     }
     i57 = i1 + 60 | 0;
     i56 = i1 + 36 | 0;
     __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i29, i57, (HEAP32[(HEAP32[i56 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     i50 = HEAP32[i29 >> 2] | 0;
     __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i30, i57, (HEAP32[(HEAP32[i56 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     i56 = HEAP32[i30 >> 2] | 0;
     i57 = i1 | 0;
     i62 = i1;
     i61 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i62 >> 2] | 0) + 752 >> 2] & 511](i57) | 0;
     i65 = i1;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i65 >> 2] | 0) + 720 >> 2] & 127](i9, i57);
     i58 = HEAP32[i9 >> 2] | 0;
     i48 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i62 >> 2] | 0) + 756 >> 2] & 511](i57) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i65 >> 2] | 0) + 724 >> 2] & 127](i8, i57);
     HEAPF32[i26 >> 2] = +(i71 - i50 - i56 - i61 - i58 - i48 - (HEAP32[i8 >> 2] | 0) | 0);
     HEAP8[i27 + 4 | 0] = 0;
     i48 = i27 + 5 | 0;
     HEAP8[i48] = 3;
     HEAP8[i27 + 6 | 0] = 1;
     i58 = HEAP32[i26 + 4 >> 2] | 0;
     HEAP32[i17 >> 2] = HEAP32[i26 >> 2];
     HEAP32[i17 + 4 >> 2] = i58;
     HEAP8[i48] = 0;
     i72 = (i58 >>> 16 | 0 << 16) & 255;
     i45 = 73;
    } else {
     i45 = 53;
    }
   } while (0);
   do {
    if ((i45 | 0) == 53) {
     if (!i68) {
      i72 = HEAP8[i18 + 6 | 0] | 0;
      i45 = 73;
      break;
     }
     i49 = i1 + 36 | 0;
     i58 = HEAP32[i49 >> 2] | 0;
     i48 = (HEAP32[i58 + 44 >> 2] | 0) >>> 13 & 3;
     if ((i48 | 0) == 3 | (i48 | 0) == 0) {
      i73 = (HEAP32[i58 + 4 >> 2] | 0) + 12 | 0;
     } else {
      i73 = (HEAP32[i58 + 4 >> 2] | 0) + 4 | 0;
     }
     __ZNK7WebCore9RenderBox25computeLogicalHeightUsingERKNS_6LengthE(i31, i1, i73);
     i58 = HEAP32[i31 >> 2] | 0;
     if ((i58 | 0) == -1) {
      i74 = HEAP32[i42 >> 2] | 0;
     } else {
      i74 = i58;
     }
     HEAP32[i12 >> 2] = i74;
     i58 = HEAP32[i49 >> 2] | 0;
     i49 = i58 + 44 | 0;
     i48 = (HEAP32[i49 >> 2] | 0) >>> 13 & 3;
     if ((i48 | 0) == 3 | (i48 | 0) == 0) {
      i61 = HEAP32[i58 + 4 >> 2] | 0;
      i75 = i61 + 44 | 0;
      i76 = i61;
     } else {
      i61 = HEAP32[i58 + 4 >> 2] | 0;
      i75 = i61 + 28 | 0;
      i76 = i61;
     }
     do {
      if ((HEAP8[i75 + 5 | 0] | 0) == 15) {
       i77 = i74;
      } else {
       if ((i48 | 0) == 3 | (i48 | 0) == 0) {
        i78 = i76 + 44 | 0;
       } else {
        i78 = i76 + 28 | 0;
       }
       __ZNK7WebCore9RenderBox25computeLogicalHeightUsingERKNS_6LengthE(i10, i1, i78);
       i61 = HEAP32[i10 >> 2] | 0;
       if ((i61 | 0) == -1) {
        i77 = i74;
        break;
       }
       i56 = HEAP32[((i61 | 0) < (i74 | 0) ? i10 : i12) >> 2] | 0;
       HEAP32[i12 >> 2] = i56;
       i77 = i56;
      }
     } while (0);
     i48 = (HEAP32[i49 >> 2] | 0) >>> 13 & 3;
     if ((i48 | 0) == 3 | (i48 | 0) == 0) {
      i79 = (HEAP32[i58 + 4 >> 2] | 0) + 36 | 0;
     } else {
      i79 = (HEAP32[i58 + 4 >> 2] | 0) + 20 | 0;
     }
     __ZNK7WebCore9RenderBox25computeLogicalHeightUsingERKNS_6LengthE(i11, i1, i79);
     i80 = HEAP32[((i77 | 0) < (HEAP32[i11 >> 2] | 0) ? i11 : i12) >> 2] | 0;
    }
   } while (0);
   do {
    if ((i45 | 0) == 73) {
     if ((i72 & 1) == 0) {
      d81 = +(HEAP32[i17 >> 2] | 0);
     } else {
      d81 = +HEAPF32[i17 >> 2];
     }
     i48 = i1 | 0;
     i56 = i1;
     i61 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i56 >> 2] | 0) + 752 >> 2] & 511](i48) | 0;
     i50 = i1;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i50 >> 2] | 0) + 720 >> 2] & 127](i14, i48);
     i57 = (HEAP32[i14 >> 2] | 0) + i61 | 0;
     i61 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i56 >> 2] | 0) + 756 >> 2] & 511](i48) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i50 >> 2] | 0) + 724 >> 2] & 127](i13, i48);
     d82 = d81 + +(i57 + i61 + (HEAP32[i13 >> 2] | 0) | 0);
     if (d82 >= +2147483647) {
      i80 = 2147483647;
      break;
     }
     if (d82 <= +-2147483648) {
      i80 = -2147483648;
      break;
     }
     i80 = ~~d82;
    }
   } while (0);
   HEAP32[i42 >> 2] = i80;
   if (!i47) {
    i45 = 88;
    break;
   }
   i61 = HEAP32[i46 + 36 >> 2] | 0;
   i57 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   i48 = (HEAP32[i61 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i48 | 0) == 0) {
    i83 = (i57 | 0) == 1;
   } else if ((i48 | 0) == 3) {
    i83 = (i57 | 0) == 1;
   } else if ((i48 | 0) == 1) {
    i83 = (i57 | 0) == 3;
   } else if ((i48 | 0) == 2) {
    i83 = (i57 | 0) == 3;
   } else {
    i83 = 0;
   }
   if ((HEAP32[i61 + 40 >> 2] & 1073741824 | 0) == 0) {
    i84 = i83 ^ 1;
   } else {
    i84 = i83;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 800 >> 2] & 127](i32, i1);
   HEAP32[i33 >> 2] = i80;
   i61 = i4 + 12 | 0;
   i57 = i4 + 8 | 0;
   __ZNK7WebCore9RenderBox29computeInlineDirectionMarginsEPNS_11RenderBlockENS_10LayoutUnitES3_RS3_S4_(i1, i46, i32, i33, i84 ? i61 : i57, i84 ? i57 : i61);
   i45 = 88;
  }
 } while (0);
 do {
  if ((i45 | 0) == 88) {
   i84 = i1 + 4 | 0;
   i33 = HEAP32[i84 >> 2] | 0;
   i32 = HEAP32[(HEAP32[i33 + 20 >> 2] | 0) + 8 >> 2] | 0;
   do {
    if ((HEAP8[i32 + 660 | 0] & 1) == 0) {
     i85 = 0;
    } else {
     i4 = HEAP8[i18 + 5 | 0] | 0;
     if (!((i4 << 24 >> 24 | 0) == 10 | (i4 << 24 >> 24 | 0) == 2)) {
      i85 = 0;
      break;
     }
     i4 = HEAP32[i32 + 692 >> 2] | 0;
     i80 = HEAP32[i43 >> 2] | 0;
     if ((i4 | 0) != (i33 | 0)) {
      if ((i80 & 128 | 0) != 0 | (i33 | 0) == 0) {
       i85 = 0;
       break;
      }
      if ((HEAP32[i33 + 12 >> 2] & 4 | 0) == 0) {
       i85 = 0;
       break;
      }
      i83 = HEAP32[i33 + 44 >> 2] | 0;
      i13 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
      if ((i83 | 0) != (i13 | 0)) {
       if ((HEAP32[i83 + 12 >> 2] | 0) != (HEAP32[i13 + 12 >> 2] | 0)) {
        i85 = 0;
        break;
       }
       if ((HEAP32[i83 + 16 >> 2] | 0) != (HEAP32[i13 + 16 >> 2] | 0)) {
        i85 = 0;
        break;
       }
      }
      i13 = i4 + 32 | 0;
      if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
       i86 = i13 | 0;
      } else {
       i86 = HEAP32[i13 >> 2] | 0;
      }
      i13 = HEAP32[(HEAP32[i86 >> 2] | 0) + 36 >> 2] | 0;
      i4 = (HEAP32[i13 + 44 >> 2] | 0) >>> 13 & 3;
      if ((i4 | 0) == 3 | (i4 | 0) == 0) {
       i87 = (HEAP32[i13 + 4 >> 2] | 0) + 12 | 0;
      } else {
       i87 = (HEAP32[i13 + 4 >> 2] | 0) + 4 | 0;
      }
      i13 = HEAP8[i87 + 5 | 0] | 0;
      if (!((i13 << 24 >> 24 | 0) == 10 | (i13 << 24 >> 24 | 0) == 2)) {
       i85 = 0;
       break;
      }
     }
     i85 = (i80 & 1024 | 0) == 0;
    }
   } while (0);
   if (!(__ZNK7WebCore9RenderBox19stretchesToViewportEv(i1) | 0 | i85)) {
    break;
   }
   i33 = i1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i33 >> 2] | 0) + 856 >> 2] & 127](i34, i1);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i33 >> 2] | 0) + 860 >> 2] & 127](i35, i1);
   i33 = (HEAP32[i35 >> 2] | 0) + (HEAP32[i34 >> 2] | 0) | 0;
   __ZNK7WebCore10RenderView23pageOrViewLogicalHeightEv(i36, HEAP32[(HEAP32[(HEAP32[(HEAP32[i84 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
   i32 = HEAP32[i84 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i32 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i32 | 0)) {
    i32 = (HEAP32[i36 >> 2] | 0) - i33 | 0;
    HEAP32[i37 >> 2] = i32;
    HEAP32[i42 >> 2] = HEAP32[((HEAP32[i42 >> 2] | 0) < (i32 | 0) ? i37 : i41) >> 2];
    break;
   } else {
    i32 = i1 + 8 | 0;
    i46 = HEAP32[i32 >> 2] | 0;
    __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i38, i46 + 60 | 0, (HEAP32[(HEAP32[i46 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
    i46 = HEAP32[i38 >> 2] | 0;
    i47 = HEAP32[i32 >> 2] | 0;
    __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i39, i47 + 60 | 0, (HEAP32[(HEAP32[i47 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
    i47 = HEAP32[i39 >> 2] | 0;
    i80 = HEAP32[i32 >> 2] | 0;
    i32 = i80;
    i13 = i80;
    i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 752 >> 2] & 511](i32) | 0;
    i83 = i80;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i83 >> 2] | 0) + 720 >> 2] & 127](i16, i32);
    i80 = HEAP32[i16 >> 2] | 0;
    i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 756 >> 2] & 511](i32) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i83 >> 2] | 0) + 724 >> 2] & 127](i15, i32);
    i32 = (HEAP32[i36 >> 2] | 0) - (i46 + i33 + i47 + i4 + i80 + i14 + (HEAP32[i15 >> 2] | 0)) | 0;
    HEAP32[i40 >> 2] = i32;
    HEAP32[i42 >> 2] = HEAP32[((HEAP32[i42 >> 2] | 0) < (i32 | 0) ? i40 : i41) >> 2];
    break;
   }
  }
 } while (0);
 if ((HEAP8[i18 + 5 | 0] | 0) != 10) {
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9RenderBox16positionForPointERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 216 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 112 | 0;
 i19 = i4 + 120 | 0;
 i20 = i4 + 136 | 0;
 i21 = i4 + 152 | 0;
 i22 = i4 + 160 | 0;
 i23 = i4 + 168 | 0;
 i24 = i4 + 176 | 0;
 i25 = i4 + 184 | 0;
 i26 = i4 + 192 | 0;
 i27 = i4 + 200 | 0;
 i28 = i2 + 28 | 0;
 i29 = i2 | 0;
 if ((HEAP32[i28 >> 2] | 0) == 0) {
  i30 = i2 + 20 | 0;
  i31 = HEAP32[i30 >> 2] | 0;
  do {
   if ((i31 & 128 | 0) == 0) {
    i32 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i32 | 0) == 0) {
     i33 = i31;
     i34 = 7;
     break;
    }
    if ((HEAP32[i32 + 12 >> 2] & 1048580 | 0) != 1048580) {
     i33 = i31;
     i34 = 7;
     break;
    }
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i32 >> 2] | 0) + 232 >> 2] & 511](i32) | 0) != 0) {
     break;
    }
    i33 = HEAP32[i30 >> 2] | 0;
    i34 = 7;
   } else {
    i33 = i31;
    i34 = 7;
   }
  } while (0);
  do {
   if ((i34 | 0) == 7) {
    if ((i33 & 128 | 0) != 0) {
     break;
    }
    i31 = i2 + 4 | 0;
    i32 = HEAP32[i31 >> 2] | 0;
    if ((i32 | 0) == 0) {
     break;
    }
    do {
     if ((HEAP32[i32 + 12 >> 2] & 1048580 | 0) == 1048580) {
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i32 >> 2] | 0) + 232 >> 2] & 511](i32) | 0) != 0) {
       i34 = 14;
       break;
      }
      i35 = HEAP32[i30 >> 2] | 0;
      i34 = 12;
     } else {
      i35 = i33;
      i34 = 12;
     }
    } while (0);
    do {
     if ((i34 | 0) == 12) {
      if ((i35 & 128 | 0) != 0) {
       i34 = 14;
       break;
      }
      i32 = HEAP32[i31 >> 2] | 0;
      if ((i32 | 0) == 0) {
       i34 = 14;
       break;
      }
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i32 >> 2] | 0) + 132 >> 2] & 511](i32) | 0) {
       __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i17, i32);
       break;
      }
      i36 = i16 | 0;
      HEAP32[i36 >> 2] = i32;
      i37 = i32 + 8 | 0;
      HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i17, i16, 1);
      i37 = HEAP32[i36 >> 2] | 0;
      if ((i37 | 0) == 0) {
       break;
      }
      i36 = i37 + 8 | 0;
      i37 = i36 | 0;
      i32 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
      HEAP32[i37 >> 2] = i32;
      if ((i32 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
     }
    } while (0);
    if ((i34 | 0) == 14) {
     HEAP32[i17 >> 2] = 0;
     HEAP32[i17 + 4 >> 2] = 0;
     i31 = i17 + 8 | 0;
     i36 = i31;
     i32 = HEAP32[i36 >> 2] | 0;
     HEAP32[i36 >> 2] = i32 & -8;
     HEAP8[i31] = i32 & 255 & -16;
    }
    __ZNK7WebCore12RenderObject21createVisiblePositionERKNS_8PositionE(i1, i29, i17);
    i32 = HEAP32[i17 >> 2] | 0;
    if ((i32 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i31 = i32 + 8 | 0;
    i32 = i31 | 0;
    i36 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
    HEAP32[i32 >> 2] = i36;
    if ((i36 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
    STACKTOP = i4;
    return;
   }
  } while (0);
  i16 = i17 | 0;
  HEAP32[i16 >> 2] = 0;
  HEAP32[i17 + 4 >> 2] = 0;
  i35 = i17 + 8 | 0;
  i33 = i35;
  i30 = HEAP32[i33 >> 2] | 0;
  HEAP32[i33 >> 2] = i30 & -8;
  HEAP8[i35] = i30 & 255 & -16;
  __ZNK7WebCore12RenderObject21createVisiblePositionERKNS_8PositionE(i1, i29, i17);
  i17 = HEAP32[i16 >> 2] | 0;
  if ((i17 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i16 = i17 + 8 | 0;
  i17 = i16 | 0;
  i30 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
  HEAP32[i17 >> 2] = i30;
  if ((i30 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  STACKTOP = i4;
  return;
 }
 i16 = i2;
 L50 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 184 >> 2] & 511](i29) | 0) {
   i30 = i2 + 20 | 0;
   i17 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i17 & 128 | 0) == 0) {
     i35 = HEAP32[i2 + 4 >> 2] | 0;
     if ((i35 | 0) == 0) {
      i38 = i17;
      break;
     }
     if ((HEAP32[i35 + 12 >> 2] & 1048580 | 0) != 1048580) {
      i38 = i17;
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 232 >> 2] & 511](i35) | 0) != 0) {
      break L50;
     }
     i38 = HEAP32[i30 >> 2] | 0;
    } else {
     i38 = i17;
    }
   } while (0);
   if ((i38 & 128 | 0) != 0) {
    break;
   }
   i17 = i2 + 4 | 0;
   if ((HEAP32[i17 >> 2] | 0) == 0) {
    break;
   }
   i35 = HEAP32[i2 + 52 >> 2] | 0;
   i33 = i2 | 0;
   i31 = i2;
   i36 = i35 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 744 >> 2] & 511](i33) | 0) | 0;
   i35 = i36 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 748 >> 2] & 511](i33) | 0) | 0;
   i36 = i35 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0) | 0;
   i35 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 712 >> 2] & 127](i14, i33);
   i32 = i36 - (HEAP32[i14 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 716 >> 2] & 127](i15, i33);
   i36 = i32 - (HEAP32[i15 >> 2] | 0) | 0;
   i32 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 744 >> 2] & 511](i33) | 0;
   i37 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 748 >> 2] & 511](i33) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 712 >> 2] & 127](i12, i33);
   i39 = HEAP32[i12 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 716 >> 2] & 127](i13, i33);
   i40 = i36 + i32 + i37 + i39 + (HEAP32[i13 >> 2] | 0) | 0;
   __ZNK7WebCore9RenderBox13contentHeightEv(i18, i2);
   i39 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 736 >> 2] & 511](i33) | 0;
   i37 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 740 >> 2] & 511](i33) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 704 >> 2] & 127](i10, i33);
   i31 = HEAP32[i10 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 708 >> 2] & 127](i11, i33);
   i33 = HEAP32[i3 >> 2] | 0;
   if (!((i33 | 0) < 0 | (i33 | 0) > (i40 | 0))) {
    i35 = HEAP32[i3 + 4 >> 2] | 0;
    if (!((i35 | 0) < 0 | (i35 | 0) > (i37 + i39 + i31 + (HEAP32[i11 >> 2] | 0) + (HEAP32[i18 >> 2] | 0) | 0))) {
     break;
    }
   }
   i31 = (i33 | 0) > ((i40 | 0) / 2 & -1 | 0);
   i40 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i40 & 128 | 0) == 0) {
     i33 = HEAP32[i17 >> 2] | 0;
     if ((i33 | 0) == 0) {
      i41 = i40;
      i34 = 44;
      break;
     }
     if ((HEAP32[i33 + 12 >> 2] & 1048580 | 0) != 1048580) {
      i41 = i40;
      i34 = 44;
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 232 >> 2] & 511](i33) | 0) != 0) {
      i42 = 0;
      break;
     }
     i41 = HEAP32[i30 >> 2] | 0;
     i34 = 44;
    } else {
     i41 = i40;
     i34 = 44;
    }
   } while (0);
   do {
    if ((i34 | 0) == 44) {
     if ((i41 & 128 | 0) != 0) {
      i42 = 0;
      break;
     }
     i42 = HEAP32[i17 >> 2] | 0;
    }
   } while (0);
   i17 = i42 | 0;
   i40 = (i42 | 0) == 0;
   if (i31) {
    do {
     if (i40) {
      HEAP32[i20 >> 2] = 0;
      HEAP32[i20 + 4 >> 2] = 0;
      i30 = i20 + 8 | 0;
      i33 = i30;
      i39 = HEAP32[i33 >> 2] | 0;
      HEAP32[i33 >> 2] = i39 & -8;
      HEAP8[i30] = i39 & 255 & -16;
     } else {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i42 >> 2] | 0) + 132 >> 2] & 511](i17) | 0) {
       __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i20, i17);
       break;
      }
      i39 = i7 | 0;
      HEAP32[i39 >> 2] = i17;
      i30 = i42 + 8 | 0;
      HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i20, i7, 2);
      i30 = HEAP32[i39 >> 2] | 0;
      if ((i30 | 0) == 0) {
       break;
      }
      i39 = i30 + 8 | 0;
      i30 = i39 | 0;
      i33 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i33;
      if ((i33 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
     }
    } while (0);
    __ZNK7WebCore12RenderObject21createVisiblePositionERKNS_8PositionE(i1, i29, i20);
    i31 = HEAP32[i20 >> 2] | 0;
    if ((i31 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i39 = i31 + 8 | 0;
    i31 = i39 | 0;
    i33 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
    HEAP32[i31 >> 2] = i33;
    if ((i33 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
    STACKTOP = i4;
    return;
   } else {
    do {
     if (i40) {
      HEAP32[i19 >> 2] = 0;
      HEAP32[i19 + 4 >> 2] = 0;
      i39 = i19 + 8 | 0;
      i33 = i39;
      i31 = HEAP32[i33 >> 2] | 0;
      HEAP32[i33 >> 2] = i31 & -8;
      HEAP8[i39] = i31 & 255 & -16;
     } else {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i42 >> 2] | 0) + 132 >> 2] & 511](i17) | 0) {
       __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i19, i17);
       break;
      }
      i31 = i8 | 0;
      HEAP32[i31 >> 2] = i17;
      i39 = i42 + 8 | 0;
      HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i19, i8, 1);
      i39 = HEAP32[i31 >> 2] | 0;
      if ((i39 | 0) == 0) {
       break;
      }
      i31 = i39 + 8 | 0;
      i39 = i31 | 0;
      i33 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
      HEAP32[i39 >> 2] = i33;
      if ((i33 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
     }
    } while (0);
    __ZNK7WebCore12RenderObject21createVisiblePositionERKNS_8PositionE(i1, i29, i19);
    i17 = HEAP32[i19 >> 2] | 0;
    if ((i17 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i40 = i17 + 8 | 0;
    i17 = i40 | 0;
    i31 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    HEAP32[i17 >> 2] = i31;
    if ((i31 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i19 = i3;
 i8 = HEAP32[i19 >> 2] | 0;
 i42 = HEAP32[i19 + 4 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 200 >> 2] & 511](i29) | 0) {
  i19 = i2 + 44 | 0;
  i43 = (HEAP32[i19 >> 2] | 0) + i8 | 0;
  i44 = (HEAP32[i19 + 4 >> 2] | 0) + i42 | 0;
 } else {
  i43 = i8;
  i44 = i42;
 }
 i42 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i42 | 0) != 0) {
   i28 = i21 | 0;
   i8 = i22 | 0;
   i19 = i23 | 0;
   i20 = i5 | 0;
   i7 = i6 | 0;
   i41 = i3 | 0;
   i18 = i3 + 4 | 0;
   i11 = 2147483647;
   i10 = 0;
   i13 = i42;
   L121 : while (1) {
    i12 = HEAP32[i13 + 20 >> 2] | 0;
    L123 : do {
     if ((i12 & 512 | 0) == 0) {
      i45 = i10;
      i46 = i11;
     } else {
      i47 = i13;
      do {
       if ((HEAP32[i13 + 28 >> 2] | 0) == 0) {
        if ((i12 & 1024 | 0) != 0) {
         break;
        }
        if ((HEAP32[i13 + 24 >> 2] & 32 | 0) == 0) {
         i45 = i10;
         i46 = i11;
         break L123;
        }
       }
      } while (0);
      if ((HEAP32[(HEAP32[i13 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
       i45 = i10;
       i46 = i11;
       break;
      }
      i15 = i13;
      i14 = i13;
      i38 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 736 >> 2] & 511](i15) | 0;
      i40 = i13;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i40 >> 2] | 0) + 704 >> 2] & 127](i21, i15);
      i31 = (HEAP32[i28 >> 2] | 0) + i38 | 0;
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 200 >> 2] & 511](i29) | 0) {
       i48 = 0;
      } else {
       i48 = HEAP32[i13 + 48 >> 2] | 0;
      }
      i38 = i31 + i48 | 0;
      __ZNK7WebCore9RenderBox13contentHeightEv(i22, i47);
      i31 = (HEAP32[i8 >> 2] | 0) + i38 | 0;
      i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 744 >> 2] & 511](i15) | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i40 >> 2] | 0) + 712 >> 2] & 127](i23, i15);
      i33 = (HEAP32[i19 >> 2] | 0) + i17 | 0;
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 200 >> 2] & 511](i29) | 0) {
       i49 = 0;
      } else {
       i49 = HEAP32[i13 + 44 >> 2] | 0;
      }
      i17 = i33 + i49 | 0;
      i33 = HEAP32[i13 + 52 >> 2] | 0;
      i39 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 744 >> 2] & 511](i15) | 0;
      i30 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 748 >> 2] & 511](i15) | 0;
      i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 908 >> 2] & 511](i47) | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i40 >> 2] | 0) + 712 >> 2] & 127](i5, i15);
      i37 = HEAP32[i20 >> 2] | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i40 >> 2] | 0) + 716 >> 2] & 127](i6, i15);
      i15 = i33 + i17 - i39 - i30 - i14 - i37 - (HEAP32[i7 >> 2] | 0) | 0;
      i37 = HEAP32[i41 >> 2] | 0;
      if ((i37 | 0) <= (i15 | 0) & (i37 | 0) >= (i17 | 0)) {
       i14 = HEAP32[i18 >> 2] | 0;
       if ((i14 | 0) <= (i38 | 0) & (i14 | 0) >= (i31 | 0)) {
        break L121;
       }
      }
      do {
       if ((i37 | 0) > (i15 | 0)) {
        i14 = HEAP32[i18 >> 2] | 0;
        if ((i14 | 0) < (i38 | 0)) {
         i50 = i15;
         i51 = i38;
         i52 = i14;
         break;
        }
        i50 = i15;
        i51 = (i14 | 0) > (i31 | 0) ? i31 : i14;
        i52 = i14;
       } else {
        i14 = HEAP32[i18 >> 2] | 0;
        i30 = (i14 | 0) < (i38 | 0);
        if ((i37 | 0) >= (i17 | 0)) {
         i50 = i37;
         i51 = i30 ? i38 : i31;
         i52 = i14;
         break;
        }
        if (i30) {
         i50 = i17;
         i51 = i38;
         i52 = i14;
         break;
        }
        i50 = i17;
        i51 = (i14 | 0) > (i31 | 0) ? i31 : i14;
        i52 = i14;
       }
      } while (0);
      i31 = i50 - i37 | 0;
      i17 = i51 - i52 | 0;
      i38 = (Math_imul(i17, i17) | 0) + (Math_imul(i31, i31) | 0) | 0;
      i31 = (i38 | 0) < (i11 | 0);
      i45 = i31 ? i47 : i10;
      i46 = i31 ? i38 : i11;
     }
    } while (0);
    i12 = HEAP32[i13 + 16 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i34 = 98;
     break;
    } else {
     i11 = i46;
     i10 = i45;
     i13 = i12;
    }
   }
   if ((i34 | 0) == 98) {
    if ((i45 | 0) == 0) {
     break;
    }
    i10 = HEAP32[(HEAP32[i45 >> 2] | 0) + 464 >> 2] | 0;
    i11 = i44 - (HEAP32[i45 + 48 >> 2] | 0) | 0;
    HEAP32[i26 >> 2] = i43 - (HEAP32[i45 + 44 >> 2] | 0);
    HEAP32[i26 + 4 >> 2] = i11;
    FUNCTION_TABLE_viii[i10 & 63](i1, i45, i26);
    STACKTOP = i4;
    return;
   }
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 200 >> 2] & 511](i13) | 0;
   i11 = HEAP32[(HEAP32[i13 >> 2] | 0) + 464 >> 2] | 0;
   if (i10) {
    i10 = (HEAP32[i18 >> 2] | 0) + i44 - (HEAP32[i13 + 48 >> 2] | 0) | 0;
    HEAP32[i24 >> 2] = (HEAP32[i41 >> 2] | 0) + i43 - (HEAP32[i13 + 44 >> 2] | 0);
    HEAP32[i24 + 4 >> 2] = i10;
    FUNCTION_TABLE_viii[i11 & 63](i1, i47, i24);
    STACKTOP = i4;
    return;
   } else {
    i10 = (HEAP32[i18 >> 2] | 0) - (HEAP32[i13 + 48 >> 2] | 0) | 0;
    HEAP32[i25 >> 2] = (HEAP32[i41 >> 2] | 0) - (HEAP32[i13 + 44 >> 2] | 0);
    HEAP32[i25 + 4 >> 2] = i10;
    FUNCTION_TABLE_viii[i11 & 63](i1, i47, i25);
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i25 = i2 + 20 | 0;
 i47 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i47 & 128 | 0) == 0) {
   i24 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i53 = i47;
    i34 = 105;
    break;
   }
   if ((HEAP32[i24 + 12 >> 2] & 1048580 | 0) != 1048580) {
    i53 = i47;
    i34 = 105;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 232 >> 2] & 511](i24) | 0) != 0) {
    i34 = 107;
    break;
   }
   i53 = HEAP32[i25 >> 2] | 0;
   i34 = 105;
  } else {
   i53 = i47;
   i34 = 105;
  }
 } while (0);
 do {
  if ((i34 | 0) == 105) {
   if ((i53 & 128 | 0) != 0) {
    i34 = 107;
    break;
   }
   i47 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i47 | 0) == 0) {
    i34 = 107;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i47 >> 2] | 0) + 132 >> 2] & 511](i47) | 0) {
    __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i27, i47);
    break;
   }
   i25 = i9 | 0;
   HEAP32[i25 >> 2] = i47;
   i24 = i47 + 8 | 0;
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i27, i9, 1);
   i24 = HEAP32[i25 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i25 = i24 + 8 | 0;
   i24 = i25 | 0;
   i47 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i47;
   if ((i47 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
  }
 } while (0);
 if ((i34 | 0) == 107) {
  HEAP32[i27 >> 2] = 0;
  HEAP32[i27 + 4 >> 2] = 0;
  i34 = i27 + 8 | 0;
  i9 = i34;
  i2 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i2 & -8;
  HEAP8[i34] = i2 & 255 & -16;
 }
 __ZNK7WebCore12RenderObject21createVisiblePositionERKNS_8PositionE(i1, i29, i27);
 i29 = HEAP32[i27 >> 2] | 0;
 if ((i29 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i27 = i29 + 8 | 0;
 i29 = i27 | 0;
 i1 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
 HEAP32[i29 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox34computePositionedLogicalWidthUsingENS_6LengthEPKNS_20RenderBoxModelObjectENS_13TextDirectionENS_10LayoutUnitES6_S1_S1_S1_S1_RNS0_27LogicalExtentComputedValuesE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, d83 = +0, i84 = 0, i85 = 0, i86 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i13 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i13 >> 2];
 i13 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i13 >> 2];
 i13 = i12 | 0;
 i14 = i12 + 8 | 0;
 i15 = i12 + 16 | 0;
 i16 = i12 + 24 | 0;
 i17 = i12 + 32 | 0;
 i18 = i12 + 40 | 0;
 i19 = i12 + 48 | 0;
 i20 = i12 + 56 | 0;
 i21 = i12 + 64 | 0;
 i22 = i12 + 72 | 0;
 i23 = i12 + 80 | 0;
 i24 = i12 + 88 | 0;
 i25 = i12 + 96 | 0;
 i26 = i12 + 104 | 0;
 i27 = i12 + 112 | 0;
 i28 = i12 + 120 | 0;
 i29 = i12 + 128 | 0;
 i30 = i12 + 136 | 0;
 i31 = i12 + 144 | 0;
 i32 = i12 + 152 | 0;
 i33 = i12 + 160 | 0;
 i34 = i12 + 168 | 0;
 i35 = i12 + 176 | 0;
 i36 = i12 + 184 | 0;
 i37 = i36;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i40 = i39;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i46 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i48 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i49 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i50 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i51 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i52 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i53 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i54 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i55 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i56 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i57 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i58 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i59 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i60 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i61 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i62 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i63 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i64 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i65 = i2 + 5 | 0;
 do {
  if (((HEAPU8[i65] | 0) - 6 | 0) >>> 0 < 4 >>> 0) {
   i66 = i2;
   i67 = HEAP32[i66 >> 2] | 0;
   i68 = HEAP32[i66 + 4 >> 2] | 0;
   HEAP32[i39 >> 2] = i67;
   HEAP32[i39 + 4 >> 2] = i68;
   if ((i67 & 0 | 0) == 0 & (i68 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i40);
   }
   HEAP32[i41 >> 2] = HEAP32[i5 >> 2];
   i68 = HEAP32[i6 >> 2] | 0;
   HEAP32[i42 >> 2] = i68;
   __ZNK7WebCore9RenderBox33computeIntrinsicLogicalWidthUsingENS_6LengthENS_10LayoutUnitES2_(i38, i1, i40, i41, i42);
   HEAPF32[i36 >> 2] = +((HEAP32[i38 >> 2] | 0) - i68 | 0);
   HEAP8[i37 + 4 | 0] = 0;
   i68 = i37 + 5 | 0;
   HEAP8[i68] = 3;
   HEAP8[i37 + 6 | 0] = 1;
   i67 = HEAP32[i36 + 4 >> 2] | 0;
   HEAP32[i66 >> 2] = HEAP32[i36 >> 2];
   HEAP32[i66 + 4 >> 2] = i67;
   HEAP8[i68] = 0;
   if ((HEAP8[i40 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i40);
  }
 } while (0);
 __ZNK7WebCore9RenderBox40containingBlockLogicalWidthForPositionedEPKNS_20RenderBoxModelObjectEPNS_12RenderRegionEb(i43, i1, i3, 0, 0);
 i40 = HEAP8[i65] | 0;
 if (i40 << 24 >> 24 == 0 | (i40 - 4 & 255) >>> 0 < 2 >>> 0) {
  i69 = 1;
 } else {
  i69 = ((i40 & 255) - 6 | 0) >>> 0 < 4 >>> 0;
 }
 i40 = (HEAP8[i7 + 5 | 0] | 0) == 0;
 i65 = (HEAP8[i8 + 5 | 0] | 0) == 0;
 i36 = i1 + 36 | 0;
 i37 = (HEAP32[(HEAP32[i36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0;
 i38 = i11 + 16 | 0;
 i42 = i11 + 20 | 0;
 i41 = i37 ? i38 : i42;
 i39 = i37 ? i42 : i38;
 i38 = i40 | i69;
 do {
  if (i38 | i65) {
   i42 = i43 | 0;
   HEAP32[i26 >> 2] = HEAP32[i42 >> 2];
   i37 = i1 + 4 | 0;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i51, i9, i26, HEAP32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i68 = i41 | 0;
   HEAP32[i68 >> 2] = HEAP32[i51 >> 2];
   HEAP32[i25 >> 2] = HEAP32[i42 >> 2];
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i52, i10, i25, HEAP32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i42 = HEAP32[i52 >> 2] | 0;
   HEAP32[i39 >> 2] = i42;
   i67 = HEAP32[i6 >> 2] | 0;
   i66 = HEAP32[i5 >> 2] | 0;
   i70 = i66 - ((HEAP32[i68 >> 2] | 0) + i42 + i67) | 0;
   i42 = i40 ^ 1;
   i68 = i69 ^ 1;
   if (!(i42 | i68 | i65)) {
    HEAP32[i24 >> 2] = i66;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i53, i8, i24, HEAP32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i71 = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i71 >> 2] | 0) + 488 >> 2] & 127](i54, i1);
    i72 = (HEAP32[i54 >> 2] | 0) - i67 | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i71 >> 2] | 0) + 484 >> 2] & 127](i55, i1);
    i71 = (HEAP32[i55 >> 2] | 0) - i67 | 0;
    i73 = i70 - (HEAP32[i53 >> 2] | 0) | 0;
    i74 = (i71 | 0) < (i73 | 0) ? i73 : i71;
    i71 = (i72 | 0) < (i74 | 0) ? i72 : i74;
    HEAP32[i11 >> 2] = i71;
    i75 = i73 - i71 | 0;
    i76 = i66;
    break;
   }
   i71 = i40 | i68;
   i68 = i65 ^ 1;
   if (!(i71 | i68)) {
    HEAP32[i23 >> 2] = i66;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i56, i7, i23, HEAP32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i73 = HEAP32[i56 >> 2] | 0;
    i74 = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i74 >> 2] | 0) + 488 >> 2] & 127](i57, i1);
    i72 = (HEAP32[i57 >> 2] | 0) - i67 | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i74 >> 2] | 0) + 484 >> 2] & 127](i58, i1);
    i74 = (HEAP32[i58 >> 2] | 0) - i67 | 0;
    i67 = i70 - i73 | 0;
    i77 = (i74 | 0) < (i67 | 0) ? i67 : i74;
    HEAP32[i11 >> 2] = (i72 | 0) < (i77 | 0) ? i72 : i77;
    i75 = i73;
    i76 = i66;
    break;
   }
   if (!(i69 | i42 | i65)) {
    HEAP32[i22 >> 2] = i66;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i59, i2, i22, HEAP32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i42 = HEAP32[i59 >> 2] | 0;
    if ((HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
     i78 = i42;
    } else {
     i73 = i1 | 0;
     i77 = i1;
     i72 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i77 >> 2] | 0) + 760 >> 2] & 511](i73) | 0;
     i74 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i77 >> 2] | 0) + 764 >> 2] & 511](i73) | 0;
     i77 = i1;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i77 >> 2] | 0) + 728 >> 2] & 127](i20, i73);
     i67 = HEAP32[i20 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i77 >> 2] | 0) + 732 >> 2] & 127](i21, i73);
     i78 = i42 - (i74 + i72 + i67 + (HEAP32[i21 >> 2] | 0)) | 0;
    }
    i67 = i11 | 0;
    HEAP32[i67 >> 2] = (i78 | 0) > 0 ? i78 : 0;
    HEAP32[i19 >> 2] = i66;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i60, i8, i19, HEAP32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i75 = i70 - (HEAP32[i67 >> 2] | 0) - (HEAP32[i60 >> 2] | 0) | 0;
    i76 = i66;
    break;
   }
   if (!(i71 | i65)) {
    HEAP32[i18 >> 2] = i66;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i61, i7, i18, HEAP32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i71 = HEAP32[i61 >> 2] | 0;
    HEAP32[i17 >> 2] = i66;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i62, i8, i17, HEAP32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i11 >> 2] = i70 - i71 - (HEAP32[i62 >> 2] | 0);
    i75 = i71;
    i76 = i66;
    break;
   }
   if (i38 | i68) {
    i75 = 0;
    i76 = i66;
    break;
   }
   HEAP32[i16 >> 2] = i66;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i63, i7, i16, HEAP32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i68 = HEAP32[i63 >> 2] | 0;
   HEAP32[i15 >> 2] = i66;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i64, i2, i15, HEAP32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i37 = HEAP32[i64 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
    i79 = i37;
   } else {
    i71 = i1 | 0;
    i70 = i1;
    i67 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i70 >> 2] | 0) + 760 >> 2] & 511](i71) | 0;
    i72 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i70 >> 2] | 0) + 764 >> 2] & 511](i71) | 0;
    i70 = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i70 >> 2] | 0) + 728 >> 2] & 127](i13, i71);
    i74 = HEAP32[i13 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i70 >> 2] | 0) + 732 >> 2] & 127](i14, i71);
    i79 = i37 - (i72 + i67 + i74 + (HEAP32[i14 >> 2] | 0)) | 0;
   }
   HEAP32[i11 >> 2] = (i79 | 0) > 0 ? i79 : 0;
   i75 = i68;
   i76 = i66;
  } else {
   i66 = HEAP32[i5 >> 2] | 0;
   HEAP32[i35 >> 2] = i66;
   i68 = i1 + 4 | 0;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i44, i7, i35, HEAP32[(HEAP32[(HEAP32[(HEAP32[i68 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i74 = HEAP32[i44 >> 2] | 0;
   HEAP32[i34 >> 2] = i66;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i45, i2, i34, HEAP32[(HEAP32[(HEAP32[(HEAP32[i68 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i67 = HEAP32[i45 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
    i80 = i67;
   } else {
    i72 = i1 | 0;
    i37 = i1;
    i71 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 760 >> 2] & 511](i72) | 0;
    i70 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 764 >> 2] & 511](i72) | 0;
    i37 = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i37 >> 2] | 0) + 728 >> 2] & 127](i32, i72);
    i42 = HEAP32[i32 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i37 >> 2] | 0) + 732 >> 2] & 127](i33, i72);
    i80 = i67 - (i70 + i71 + i42 + (HEAP32[i33 >> 2] | 0)) | 0;
   }
   i42 = (i80 | 0) > 0 ? i80 : 0;
   HEAP32[i11 >> 2] = i42;
   HEAP32[i31 >> 2] = i66;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i46, i8, i31, HEAP32[(HEAP32[(HEAP32[(HEAP32[i68 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i71 = i66 - (i42 + i74 + (HEAP32[i46 >> 2] | 0) + (HEAP32[i6 >> 2] | 0)) | 0;
   i42 = (HEAP8[i10 + 5 | 0] | 0) == 0;
   if ((HEAP8[i9 + 5 | 0] | 0) != 0) {
    i70 = i43 | 0;
    i67 = HEAP32[i70 >> 2] | 0;
    if (i42) {
     HEAP32[i29 >> 2] = i67;
     __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i48, i9, i29, HEAP32[(HEAP32[(HEAP32[(HEAP32[i68 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
     i72 = HEAP32[i48 >> 2] | 0;
     HEAP32[i41 >> 2] = i72;
     HEAP32[i39 >> 2] = i71 - i72;
     i75 = i74;
     i76 = i66;
     break;
    }
    HEAP32[i28 >> 2] = i67;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i49, i9, i28, HEAP32[(HEAP32[(HEAP32[(HEAP32[i68 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i67 = i41 | 0;
    HEAP32[i67 >> 2] = HEAP32[i49 >> 2];
    HEAP32[i27 >> 2] = HEAP32[i70 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i50, i10, i27, HEAP32[(HEAP32[(HEAP32[(HEAP32[i68 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i70 = HEAP32[i50 >> 2] | 0;
    HEAP32[i39 >> 2] = i70;
    if ((i4 | 0) != 0) {
     i75 = i74;
     i76 = i66;
     break;
    }
    i75 = i71 + i74 - i70 - (HEAP32[i67 >> 2] | 0) | 0;
    i76 = i66;
    break;
   }
   if (!i42) {
    HEAP32[i30 >> 2] = HEAP32[i43 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i47, i10, i30, HEAP32[(HEAP32[(HEAP32[(HEAP32[i68 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i68 = HEAP32[i47 >> 2] | 0;
    HEAP32[i39 >> 2] = i68;
    HEAP32[i41 >> 2] = i71 - i68;
    i75 = i74;
    i76 = i66;
    break;
   }
   if ((i71 | 0) > -1) {
    i68 = (i71 | 0) / 2 & -1;
    HEAP32[i41 >> 2] = i68;
    HEAP32[i39 >> 2] = i71 - i68;
    i75 = i74;
    i76 = i66;
    break;
   }
   i68 = i41 | 0;
   if ((i4 | 0) == 1) {
    HEAP32[i68 >> 2] = 0;
    HEAP32[i39 >> 2] = i71;
    i75 = i74;
    i76 = i66;
    break;
   } else {
    HEAP32[i68 >> 2] = i71;
    HEAP32[i39 >> 2] = 0;
    i75 = i74;
    i76 = i66;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i3 + 24 >> 2] & 4 | 0) != 0) {
   if ((HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0) {
    break;
   }
   i39 = HEAP32[i3 + 44 >> 2] | 0;
   i4 = HEAP32[i3 + 48 >> 2] | 0;
   if ((i39 | 0) == 0 | (i4 | 0) == 0 | (i39 | 0) == (i4 | 0)) {
    break;
   }
   i47 = (HEAP32[i41 >> 2] | 0) + i75 | 0;
   i30 = i4 + 32 | 0;
   do {
    if ((HEAP32[i4 + 56 >> 2] & 1 | 0) == 0) {
     i81 = 0;
    } else {
     i10 = HEAP32[i30 >> 2] | 0;
     i43 = (i10 & 2048 | 0) == 0;
     i50 = HEAP32[i4 + 16 >> 2] | 0;
     i27 = i50;
     do {
      if ((i10 & 1 | 0) == 0) {
       i82 = HEAP32[i50 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i50 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i82 = HEAP32[i50 + 36 >> 2] | 0;
        break;
       } else {
        i82 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i27) | 0;
        break;
       }
      }
     } while (0);
     i27 = HEAP32[i82 + 16 >> 2] | 0;
     i50 = (HEAP32[(HEAP32[i27 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
     if (i43) {
      i10 = HEAP32[i27 + 120 >> 2] | 0;
      if (i50) {
       if ((i10 & 1879048192) >>> 0 < 268435456 >>> 0) {
        i81 = 0;
        break;
       }
      }
      i81 = i10 >>> 1 & 67108863;
      break;
     } else {
      i10 = HEAP32[i27 + 104 >> 2] | 0;
      if (i50) {
       if ((i10 & 1879048192) >>> 0 < 268435456 >>> 0) {
        i81 = 0;
        break;
       }
      }
      i81 = i10 >>> 1 & 67108863;
      break;
     }
    }
   } while (0);
   d83 = +(i47 + i81 | 0) + (+HEAPF32[((HEAP32[i30 >> 2] & 2048 | 0) == 0 ? i4 + 24 | 0 : i4 + 20 | 0) >> 2] - +HEAPF32[((HEAP32[i39 + 32 >> 2] & 2048 | 0) == 0 ? i39 + 24 | 0 : i39 + 20 | 0) >> 2]);
   do {
    if (d83 < +2147483647) {
     if (d83 <= +-2147483648) {
      i84 = -2147483648;
      break;
     }
     i84 = ~~d83;
    } else {
     i84 = 2147483647;
    }
   } while (0);
   HEAP32[i11 + 4 >> 2] = i84;
   STACKTOP = i12;
   return;
  }
 } while (0);
 i84 = (HEAP32[i41 >> 2] | 0) + i75 | 0;
 i75 = i11 + 4 | 0;
 HEAP32[i75 >> 2] = i84;
 i41 = HEAP32[i11 >> 2] | 0;
 i11 = i1 + 20 | 0;
 i1 = HEAP32[i11 >> 2] & 8192;
 do {
  if ((HEAP32[i3 + 20 >> 2] & 8192 | 0) != 0 ^ (i1 | 0) != 0) {
   i81 = (HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if (!((i81 | 0) == 3 | (i81 | 0) == 1)) {
    break;
   }
   HEAP32[i75 >> 2] = i76 - i41 - i84;
   i81 = HEAP32[i3 >> 2] | 0;
   if ((HEAP32[i11 >> 2] & 8192 | 0) == 0) {
    i85 = FUNCTION_TABLE_ii[HEAP32[i81 + 740 >> 2] & 511](i3) | 0;
   } else {
    i85 = FUNCTION_TABLE_ii[HEAP32[i81 + 748 >> 2] & 511](i3) | 0;
   }
   HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + i85;
   STACKTOP = i12;
   return;
  }
 } while (0);
 i85 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i86 = FUNCTION_TABLE_ii[HEAP32[i85 + 736 >> 2] & 511](i3) | 0;
 } else {
  i86 = FUNCTION_TABLE_ii[HEAP32[i85 + 744 >> 2] & 511](i3) | 0;
 }
 HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + i86;
 STACKTOP = i12;
 return;
}
function __ZNK7WebCore9RenderBox37computePositionedLogicalWidthReplacedERNS0_27LogicalExtentComputedValuesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, d74 = +0, i75 = 0, i76 = 0, i77 = 0, i78 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 i20 = i3 + 128 | 0;
 i21 = i3 + 136 | 0;
 i22 = i3 + 144 | 0;
 i23 = i3 + 152 | 0;
 i24 = i3 + 160 | 0;
 i25 = i3 + 168 | 0;
 i26 = i3 + 176 | 0;
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
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i46 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i48 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i49 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i50 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i51 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i52 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i53 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i1 | 0, 0, 0) | 0;
 i54 = i53;
 __ZNK7WebCore9RenderBox40containingBlockLogicalWidthForPositionedEPKNS_20RenderBoxModelObjectEPNS_12RenderRegionEb(i24, i1, i54, 0, 1);
 __ZNK7WebCore9RenderBox40containingBlockLogicalWidthForPositionedEPKNS_20RenderBoxModelObjectEPNS_12RenderRegionEb(i25, i1, i54, 0, 0);
 i55 = i53 + 36 | 0;
 i56 = (HEAP32[(HEAP32[i55 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1;
 i57 = i1 + 20 | 0;
 i58 = (HEAP32[i57 >> 2] & 8192 | 0) != 0;
 i59 = i1 + 36 | 0;
 i60 = HEAP32[i59 >> 2] | 0;
 i61 = __ZNK7WebCore9LengthBox11logicalLeftENS_11WritingModeE((HEAP32[i60 + 16 >> 2] | 0) + 4 | 0, (HEAP32[i60 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i60 = HEAP32[i61 >> 2] | 0;
 i62 = HEAP32[i61 + 4 >> 2] | 0;
 HEAP32[i26 >> 2] = i60;
 HEAP32[i26 + 4 >> 2] = i62;
 if ((i60 & 0 | 0) == 0 & (i62 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i27);
 }
 i62 = HEAP32[i59 >> 2] | 0;
 i60 = __ZNK7WebCore9LengthBox12logicalRightENS_11WritingModeE((HEAP32[i62 + 16 >> 2] | 0) + 4 | 0, (HEAP32[i62 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i62 = HEAP32[i60 >> 2] | 0;
 i26 = HEAP32[i60 + 4 >> 2] | 0;
 HEAP32[i28 >> 2] = i62;
 HEAP32[i28 + 4 >> 2] = i26;
 if ((i62 & 0 | 0) == 0 & (i26 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i29);
 }
 i26 = HEAP32[i59 >> 2] | 0;
 i62 = HEAP32[i26 + 16 >> 2] | 0;
 i28 = i58 ? i62 + 36 | 0 : i62 + 52 | 0;
 i62 = HEAP32[i28 >> 2] | 0;
 i60 = HEAP32[i28 + 4 >> 2] | 0;
 HEAP32[i30 >> 2] = i62;
 HEAP32[i30 + 4 >> 2] = i60;
 if ((i62 & 0 | 0) == 0 & (i60 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i31);
  i63 = HEAP32[i59 >> 2] | 0;
 } else {
  i63 = i26;
 }
 i26 = HEAP32[i63 + 16 >> 2] | 0;
 i60 = i58 ? i26 + 44 | 0 : i26 + 60 | 0;
 i26 = HEAP32[i60 >> 2] | 0;
 i58 = HEAP32[i60 + 4 >> 2] | 0;
 HEAP32[i32 >> 2] = i26;
 HEAP32[i32 + 4 >> 2] = i58;
 if ((i26 & 0 | 0) == 0 & (i58 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i33);
  i64 = HEAP32[i59 >> 2] | 0;
 } else {
  i64 = i63;
 }
 i63 = (HEAP32[i64 + 40 >> 2] & 1073741824 | 0) != 0;
 i64 = i2 + 16 | 0;
 i59 = i2 + 20 | 0;
 i58 = i63 ? i64 : i59;
 i26 = i63 ? i59 : i64;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 892 >> 2] & 63](i34, i1, 0);
 i64 = i1 | 0;
 i59 = i1;
 i63 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 760 >> 2] & 511](i64) | 0;
 i60 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 764 >> 2] & 511](i64) | 0) + i63 | 0;
 i63 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i63 >> 2] | 0) + 728 >> 2] & 127](i22, i64);
 i59 = i60 + (HEAP32[i22 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i63 >> 2] | 0) + 732 >> 2] & 127](i23, i64);
 i64 = i59 + (HEAP32[i23 >> 2] | 0) + (HEAP32[i34 >> 2] | 0) | 0;
 i34 = i2 | 0;
 HEAP32[i34 >> 2] = i64;
 i23 = i24 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 i59 = i24 - i64 | 0;
 __ZN7WebCoreL27computeInlineStaticDistanceERNS_6LengthES1_PKNS_9RenderBoxEPKNS_20RenderBoxModelObjectENS_10LayoutUnitEPNS_12RenderRegionE(i27, i29, i1, i54, i24, 0);
 i24 = i27 + 5 | 0;
 i64 = (HEAP8[i24] | 0) == 0;
 do {
  if (i64) {
   i65 = 11;
  } else {
   if ((HEAP8[i29 + 5 | 0] | 0) == 0) {
    i65 = 11;
    break;
   }
   i63 = i31 + 5 | 0;
   if ((HEAP8[i31 + 5 | 0] | 0) != 0) {
    i66 = 0;
    i67 = i63;
    i65 = 25;
    break;
   }
   if ((HEAP8[i33 + 5 | 0] | 0) != 0) {
    i68 = i63;
    i69 = 1;
    i65 = 23;
    break;
   }
   HEAP32[i21 >> 2] = HEAP32[i23 >> 2];
   i22 = i1 + 4 | 0;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i35, i27, i21, HEAP32[(HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i60 = HEAP32[i35 >> 2] | 0;
   HEAP32[i20 >> 2] = HEAP32[i23 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i36, i29, i20, HEAP32[(HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i22 = i59 - i60 - (HEAP32[i36 >> 2] | 0) | 0;
   if ((i22 | 0) > 0) {
    i62 = (i22 | 0) / 2 & -1;
    HEAP32[i58 >> 2] = i62;
    HEAP32[i26 >> 2] = i22 - i62;
    i70 = i60;
    i71 = i63;
    break;
   }
   i62 = i58 | 0;
   if ((i56 | 0) == 0) {
    HEAP32[i62 >> 2] = i22;
    HEAP32[i26 >> 2] = 0;
    i70 = i60;
    i71 = i63;
    break;
   } else {
    HEAP32[i62 >> 2] = 0;
    HEAP32[i26 >> 2] = i22;
    i70 = i60;
    i71 = i63;
    break;
   }
  }
 } while (0);
 if ((i65 | 0) == 11) {
  i36 = i31 + 5 | 0;
  if ((HEAP8[i36] | 0) == 0) {
   HEAP8[i36] = 3;
   HEAP32[i30 >> 2] = 0;
   HEAP8[i31 + 6 | 0] = 0;
  }
  i30 = i33 + 5 | 0;
  if ((HEAP8[i30] | 0) == 0) {
   HEAP8[i30] = 3;
   HEAP32[i32 >> 2] = 0;
   HEAP8[i33 + 6 | 0] = 0;
  }
  i68 = i31 + 5 | 0;
  i69 = 0;
  i65 = 23;
 }
 do {
  if ((i65 | 0) == 23) {
   if (!i64) {
    i66 = i69;
    i67 = i68;
    i65 = 25;
    break;
   }
   i32 = i25 | 0;
   HEAP32[i19 >> 2] = HEAP32[i32 >> 2];
   i30 = i1 + 4 | 0;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i37, i31, i19, HEAP32[(HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i36 = i58 | 0;
   HEAP32[i36 >> 2] = HEAP32[i37 >> 2];
   HEAP32[i18 >> 2] = HEAP32[i32 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i38, i33, i18, HEAP32[(HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i32 = i26 | 0;
   HEAP32[i32 >> 2] = HEAP32[i38 >> 2];
   HEAP32[i17 >> 2] = HEAP32[i23 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i39, i29, i17, HEAP32[(HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i70 = i59 - (HEAP32[i39 >> 2] | 0) - (HEAP32[i36 >> 2] | 0) - (HEAP32[i32 >> 2] | 0) | 0;
   i71 = i68;
  }
 } while (0);
 do {
  if ((i65 | 0) == 25) {
   if ((HEAP8[i29 + 5 | 0] | 0) == 0) {
    i68 = i25 | 0;
    HEAP32[i16 >> 2] = HEAP32[i68 >> 2];
    i39 = i1 + 4 | 0;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i40, i31, i16, HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i58 >> 2] = HEAP32[i40 >> 2];
    HEAP32[i15 >> 2] = HEAP32[i68 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i41, i33, i15, HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i26 >> 2] = HEAP32[i41 >> 2];
    HEAP32[i14 >> 2] = HEAP32[i23 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i42, i27, i14, HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i70 = HEAP32[i42 >> 2] | 0;
    i71 = i67;
    break;
   }
   if (i66) {
    HEAP32[i13 >> 2] = HEAP32[i25 >> 2];
    i39 = i1 + 4 | 0;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i43, i33, i13, HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i68 = i26 | 0;
    HEAP32[i68 >> 2] = HEAP32[i43 >> 2];
    HEAP32[i12 >> 2] = HEAP32[i23 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i44, i27, i12, HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i17 = HEAP32[i44 >> 2] | 0;
    HEAP32[i11 >> 2] = HEAP32[i23 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i45, i29, i11, HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i58 >> 2] = i59 - i17 - (HEAP32[i45 >> 2] | 0) - (HEAP32[i68 >> 2] | 0);
    i70 = i17;
    i71 = i67;
    break;
   }
   i17 = i25 | 0;
   i68 = HEAP32[i17 >> 2] | 0;
   if ((HEAP8[i33 + 5 | 0] | 0) == 0) {
    HEAP32[i10 >> 2] = i68;
    i39 = i1 + 4 | 0;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i46, i31, i10, HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i38 = i58 | 0;
    HEAP32[i38 >> 2] = HEAP32[i46 >> 2];
    HEAP32[i9 >> 2] = HEAP32[i23 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i47, i27, i9, HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i18 = HEAP32[i47 >> 2] | 0;
    HEAP32[i8 >> 2] = HEAP32[i23 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i48, i29, i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i26 >> 2] = i59 - i18 - (HEAP32[i48 >> 2] | 0) - (HEAP32[i38 >> 2] | 0);
    i70 = i18;
    i71 = i67;
    break;
   }
   HEAP32[i7 >> 2] = i68;
   i68 = i1 + 4 | 0;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i49, i31, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i68 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i18 = i58 | 0;
   HEAP32[i18 >> 2] = HEAP32[i49 >> 2];
   HEAP32[i6 >> 2] = HEAP32[i17 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i50, i33, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i68 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i17 = i26 | 0;
   HEAP32[i17 >> 2] = HEAP32[i50 >> 2];
   HEAP32[i5 >> 2] = HEAP32[i23 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i51, i29, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i68 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i38 = HEAP32[i51 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i23 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i52, i27, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i68 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   if ((i56 | 0) != 0) {
    i70 = HEAP32[i52 >> 2] | 0;
    i71 = i67;
    break;
   }
   i70 = (HEAP32[i23 >> 2] | 0) - ((HEAP32[i34 >> 2] | 0) + i38 + (HEAP32[i18 >> 2] | 0) + (HEAP32[i17 >> 2] | 0)) | 0;
   i71 = i67;
  }
 } while (0);
 do {
  if ((HEAP32[i53 + 24 >> 2] & 4 | 0) == 0) {
   i65 = 53;
  } else {
   if ((HEAP32[(HEAP32[i55 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0) {
    i65 = 53;
    break;
   }
   i67 = HEAP32[i53 + 44 >> 2] | 0;
   i52 = HEAP32[i53 + 48 >> 2] | 0;
   if ((i67 | 0) == 0 | (i52 | 0) == 0 | (i67 | 0) == (i52 | 0)) {
    i65 = 53;
    break;
   }
   i56 = (HEAP32[i58 >> 2] | 0) + i70 | 0;
   i4 = i52 + 32 | 0;
   do {
    if ((HEAP32[i52 + 56 >> 2] & 1 | 0) == 0) {
     i72 = 0;
    } else {
     i51 = HEAP32[i4 >> 2] | 0;
     i5 = (i51 & 2048 | 0) == 0;
     i50 = HEAP32[i52 + 16 >> 2] | 0;
     i26 = i50;
     do {
      if ((i51 & 1 | 0) == 0) {
       i73 = HEAP32[i50 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i50 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i73 = HEAP32[i50 + 36 >> 2] | 0;
        break;
       } else {
        i73 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i26) | 0;
        break;
       }
      }
     } while (0);
     i26 = HEAP32[i73 + 16 >> 2] | 0;
     i50 = (HEAP32[(HEAP32[i26 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
     if (i5) {
      i51 = HEAP32[i26 + 120 >> 2] | 0;
      if (i50) {
       if ((i51 & 1879048192) >>> 0 < 268435456 >>> 0) {
        i72 = 0;
        break;
       }
      }
      i72 = i51 >>> 1 & 67108863;
      break;
     } else {
      i51 = HEAP32[i26 + 104 >> 2] | 0;
      if (i50) {
       if ((i51 & 1879048192) >>> 0 < 268435456 >>> 0) {
        i72 = 0;
        break;
       }
      }
      i72 = i51 >>> 1 & 67108863;
      break;
     }
    }
   } while (0);
   d74 = +(i56 + i72 | 0) + (+HEAPF32[((HEAP32[i4 >> 2] & 2048 | 0) == 0 ? i52 + 24 | 0 : i52 + 20 | 0) >> 2] - +HEAPF32[((HEAP32[i67 + 32 >> 2] & 2048 | 0) == 0 ? i67 + 24 | 0 : i67 + 20 | 0) >> 2]);
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
   HEAP32[i2 + 4 >> 2] = i75;
  }
 } while (0);
 if ((i65 | 0) == 53) {
  i75 = (HEAP32[i58 >> 2] | 0) + i70 | 0;
  i70 = HEAP32[i34 >> 2] | 0;
  i34 = HEAP32[i23 >> 2] | 0;
  i23 = HEAP32[i57 >> 2] & 8192;
  do {
   if ((HEAP32[i53 + 20 >> 2] & 8192 | 0) != 0 ^ (i23 | 0) != 0) {
    i57 = (HEAP32[(HEAP32[i55 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if (!((i57 | 0) == 3 | (i57 | 0) == 1)) {
     i65 = 59;
     break;
    }
    i57 = HEAP32[i53 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i76 = FUNCTION_TABLE_ii[HEAP32[i57 + 740 >> 2] & 511](i54) | 0;
    } else {
     i76 = FUNCTION_TABLE_ii[HEAP32[i57 + 748 >> 2] & 511](i54) | 0;
    }
    i77 = i34 - (i75 + i70) + i76 | 0;
   } else {
    i65 = 59;
   }
  } while (0);
  if ((i65 | 0) == 59) {
   i65 = HEAP32[i53 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i78 = FUNCTION_TABLE_ii[HEAP32[i65 + 736 >> 2] & 511](i54) | 0;
   } else {
    i78 = FUNCTION_TABLE_ii[HEAP32[i65 + 744 >> 2] & 511](i54) | 0;
   }
   i77 = i78 + i75 | 0;
  }
  HEAP32[i2 + 4 >> 2] = i77;
 }
 if ((HEAP8[i33 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i33);
 }
 if ((HEAP8[i71] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i31);
 }
 if ((HEAP8[i29 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i29);
 }
 if ((HEAP8[i24] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i27);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox27computeLogicalWidthInRegionERNS0_27LogicalExtentComputedValuesEPNS_12RenderRegionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, d66 = +0, d67 = +0, i68 = 0, d69 = +0, i70 = 0, i71 = 0, i72 = 0, i73 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i17;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
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
 STACKTOP = STACKTOP + 8 | 0;
 i29 = i28;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i40 = i1 + 36 | 0;
 i41 = (HEAP32[(HEAP32[i40 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i41 | 0) == 3 | (i41 | 0) == 0) {
  i42 = i1 + 52 | 0;
 } else {
  i42 = i1 + 56 | 0;
 }
 i41 = i2 | 0;
 HEAP32[i41 >> 2] = HEAP32[i42 >> 2];
 i42 = (HEAP32[(HEAP32[i40 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i42 | 0) == 3 | (i42 | 0) == 0) {
  i43 = i1 + 44 | 0;
 } else {
  i43 = i1 + 48 | 0;
 }
 HEAP32[i2 + 4 >> 2] = HEAP32[i43 >> 2];
 i43 = i2 + 16 | 0;
 i42 = HEAP32[i40 >> 2] | 0;
 i44 = i1 + 60 | 0;
 __ZNK7WebCore15LayoutBoxExtent5startENS_11WritingModeENS_13TextDirectionE(i15, i44, (HEAP32[i42 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i42 + 40 >> 2] | 0) >>> 30 & 1);
 i42 = i43 | 0;
 HEAP32[i42 >> 2] = HEAP32[i15 >> 2];
 i15 = i2 + 20 | 0;
 i45 = HEAP32[i40 >> 2] | 0;
 __ZNK7WebCore15LayoutBoxExtent3endENS_11WritingModeENS_13TextDirectionE(i16, i44, (HEAP32[i45 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i45 + 40 >> 2] | 0) >>> 30 & 1);
 i45 = i15 | 0;
 HEAP32[i45 >> 2] = HEAP32[i16 >> 2];
 i16 = i1 | 0;
 i44 = i1 + 20 | 0;
 i46 = HEAP32[i44 >> 2] | 0;
 if ((i46 & 25165824 | 0) == 16777216) {
  __ZNK7WebCore9RenderBox29computePositionedLogicalWidthERNS0_27LogicalExtentComputedValuesEPNS_12RenderRegionE(i1, i2, i3);
  STACKTOP = i4;
  return;
 }
 do {
  if ((i46 & 128 | 0) == 0) {
   i2 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore9FrameView10layoutRootEb(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, 1) | 0) != (i16 | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i46 = HEAP32[H_BASE + 1072 >> 2] | 0;
 L18 : do {
  if ((i46 | 0) != 0) {
   i2 = HEAP32[i46 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i47 = HEAP32[i46 + 8 >> 2] | 0;
   i48 = i1;
   i49 = i48 + ~(i48 << 15) | 0;
   i48 = (i49 >>> 10 ^ i49) * 9 & -1;
   i49 = i48 >>> 6 ^ i48;
   i48 = i49 + ~(i49 << 11) | 0;
   i49 = i48 >>> 16 ^ i48;
   i48 = i47 & i49;
   i50 = i2 + (i48 << 3) | 0;
   i51 = HEAP32[i50 >> 2] | 0;
   if ((i51 | 0) == (i1 | 0)) {
    i52 = i50;
   } else {
    i50 = (i49 >>> 23) + ~i49 | 0;
    i53 = i50 << 12 ^ i50;
    i50 = i53 >>> 7 ^ i53;
    i53 = i50 << 2 ^ i50;
    i50 = i53 >>> 20 ^ i53 | 1;
    i53 = 0;
    i54 = i48;
    i48 = i51;
    while (1) {
     if ((i48 | 0) == 0) {
      break L18;
     }
     i51 = (i53 | 0) == 0 ? i50 : i53;
     i55 = i51 + i54 & i47;
     i56 = i2 + (i55 << 3) | 0;
     i57 = HEAP32[i56 >> 2] | 0;
     if ((i57 | 0) == (i1 | 0)) {
      i52 = i56;
      break;
     } else {
      i53 = i51;
      i54 = i55;
      i48 = i57;
     }
    }
   }
   if ((i52 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[(HEAP32[(HEAP32[i40 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 64 | 0) == 0) {
     i48 = HEAP32[i1 + 8 >> 2] | 0;
     i54 = i48 | 0;
     i53 = i48;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i53 >> 2] | 0) + 556 >> 2] & 511](i54) | 0) {
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i53 >> 2] | 0) + 548 >> 2] & 511](i54) | 0)) {
      break L18;
     }
    }
   } while (0);
   i54 = HEAP32[H_BASE + 1072 >> 2] | 0;
   i53 = HEAP32[i54 + 8 >> 2] | 0;
   i48 = HEAP32[i54 >> 2] | 0;
   L32 : do {
    if ((i48 | 0) == 0) {
     i58 = 0;
    } else {
     i54 = i53 & i49;
     i2 = i48 + (i54 << 3) | 0;
     i47 = HEAP32[i2 >> 2] | 0;
     if ((i47 | 0) == (i1 | 0)) {
      i59 = i2;
     } else {
      i2 = (i49 >>> 23) + ~i49 | 0;
      i50 = i2 << 12 ^ i2;
      i2 = i50 >>> 7 ^ i50;
      i50 = i2 << 2 ^ i2;
      i2 = i50 >>> 20 ^ i50 | 1;
      i50 = 0;
      i57 = i54;
      i54 = i47;
      while (1) {
       if ((i54 | 0) == 0) {
        i58 = 0;
        break L32;
       }
       i47 = (i50 | 0) == 0 ? i2 : i50;
       i55 = i47 + i57 & i53;
       i51 = i48 + (i55 << 3) | 0;
       i56 = HEAP32[i51 >> 2] | 0;
       if ((i56 | 0) == (i1 | 0)) {
        i59 = i51;
        break;
       } else {
        i50 = i47;
        i57 = i55;
        i54 = i56;
       }
      }
     }
     if ((i59 | 0) == 0) {
      i58 = 0;
      break;
     }
     i58 = HEAP32[i59 + 4 >> 2] | 0;
    }
   } while (0);
   i48 = i1 | 0;
   i53 = i1;
   i49 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i53 >> 2] | 0) + 760 >> 2] & 511](i48) | 0;
   i54 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i53 >> 2] | 0) + 764 >> 2] & 511](i48) | 0;
   i53 = i1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i53 >> 2] | 0) + 728 >> 2] & 127](i13, i48);
   i57 = HEAP32[i13 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i53 >> 2] | 0) + 732 >> 2] & 127](i14, i48);
   HEAP32[i41 >> 2] = i49 + i58 + i54 + i57 + (HEAP32[i14 >> 2] | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i14 = i1 + 8 | 0;
 i58 = HEAP32[i14 >> 2] | 0;
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 548 >> 2] & 511](i58 | 0) | 0;
 i58 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 56 >> 2] | 0) + 16 >> 2] | 0;
 if (i13) {
  i60 = (i58 & 32 | 0) == 0;
 } else {
  i60 = 1;
 }
 i13 = i1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 1004 >> 2] & 511](i1) | 0) {
   i14 = HEAP32[i40 >> 2] | 0;
   if (!((i58 & 7 | 0) != 0 | i60)) {
    i61 = i14;
    i62 = 36;
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 892 >> 2] & 63](i19, i1, 0);
   HEAPF32[i17 >> 2] = +(HEAP32[i19 >> 2] | 0);
   HEAP8[i18 + 4 | 0] = 0;
   HEAP8[i18 + 5 | 0] = 3;
   HEAP8[i18 + 6 | 0] = 1;
   i63 = 1;
   i64 = i14;
  } else {
   i61 = HEAP32[i40 >> 2] | 0;
   i62 = 36;
  }
 } while (0);
 do {
  if ((i62 | 0) == 36) {
   i19 = (HEAP32[i61 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i19 | 0) == 3 | (i19 | 0) == 0) {
    i65 = (HEAP32[i61 + 4 >> 2] | 0) + 4 | 0;
   } else {
    i65 = (HEAP32[i61 + 4 >> 2] | 0) + 12 | 0;
   }
   i19 = i65;
   i60 = HEAP32[i19 >> 2] | 0;
   i58 = HEAP32[i19 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = i60;
   HEAP32[i17 + 4 >> 2] = i58;
   if (!((i60 & 0 | 0) == 0 & (i58 & 65280 | 0) == 2560)) {
    i63 = 0;
    i64 = i61;
    break;
   }
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i18);
   i63 = 0;
   i64 = i61;
  }
 } while (0);
 i61 = __ZNK7WebCore12RenderObject15containingBlockEv(i16) | 0;
 HEAP32[i20 >> 2] = 0;
 __ZNK7WebCore9RenderBox45containingBlockLogicalWidthForContentInRegionEPNS_12RenderRegionE(i21, i1, i3);
 i65 = HEAP32[((HEAP32[i21 >> 2] | 0) > 0 ? i21 : i20) >> 2] | 0;
 i20 = i61 | 0;
 i21 = HEAP32[i44 >> 2] | 0;
 i58 = (HEAP32[i61 + 20 >> 2] & 8192 | 0) != 0 ^ (i21 & 8192 | 0) != 0;
 do {
  if ((i21 & 1024 | 0) == 0) {
   i62 = 48;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 96 >> 2] & 511](i16) | 0) {
    i62 = 48;
    break;
   }
   i60 = i64 + 16 | 0;
   i19 = i64 + 44 | 0;
   i14 = i64 + 40 | 0;
   i59 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i60 >> 2] | 0) + 36 | 0, (HEAP32[i19 >> 2] | 0) >>> 13 & 3, (HEAP32[i14 >> 2] | 0) >>> 30 & 1) | 0;
   HEAP32[i12 >> 2] = i65;
   i52 = i1 + 4 | 0;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i22, i59, i12, HEAP32[(HEAP32[(HEAP32[(HEAP32[i52 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   HEAP32[i42 >> 2] = HEAP32[i22 >> 2];
   i59 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i60 >> 2] | 0) + 36 | 0, (HEAP32[i19 >> 2] | 0) >>> 13 & 3, (HEAP32[i14 >> 2] | 0) >>> 30 & 1) | 0;
   HEAP32[i11 >> 2] = i65;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i23, i59, i11, HEAP32[(HEAP32[(HEAP32[(HEAP32[i52 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   HEAP32[i45 >> 2] = HEAP32[i23 >> 2];
   if (!i63) {
    break;
   }
   d66 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i18, +0, 0);
   i52 = i1 | 0;
   i59 = i1;
   i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 760 >> 2] & 511](i52) | 0;
   i19 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 764 >> 2] & 511](i52) | 0) + i14 | 0;
   i14 = i1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 728 >> 2] & 127](i9, i52);
   i59 = i19 + (HEAP32[i9 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 732 >> 2] & 127](i10, i52);
   d67 = d66 + +(i59 + (HEAP32[i10 >> 2] | 0) | 0);
   do {
    if (d67 < +2147483647) {
     if (d67 <= +-2147483648) {
      i68 = -2147483648;
      break;
     }
     i68 = ~~d67;
    } else {
     i68 = 2147483647;
    }
   } while (0);
   HEAP32[i24 >> 2] = i68;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 484 >> 2] & 127](i25, i1);
   HEAP32[i41 >> 2] = HEAP32[((i68 | 0) < (HEAP32[i25 >> 2] | 0) ? i25 : i24) >> 2];
  }
 } while (0);
 do {
  if ((i62 | 0) == 48) {
   do {
    if (i63) {
     if ((HEAP8[i18 + 6 | 0] & 1) == 0) {
      d69 = +(HEAP32[i17 >> 2] | 0);
     } else {
      d69 = +HEAPF32[i17 >> 2];
     }
     i24 = i1 | 0;
     i25 = i1;
     i68 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 760 >> 2] & 511](i24) | 0;
     i10 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 764 >> 2] & 511](i24) | 0) + i68 | 0;
     i68 = i1;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i68 >> 2] | 0) + 728 >> 2] & 127](i7, i24);
     i25 = i10 + (HEAP32[i7 >> 2] | 0) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i68 >> 2] | 0) + 732 >> 2] & 127](i8, i24);
     d67 = d69 + +(i25 + (HEAP32[i8 >> 2] | 0) | 0);
     if (d67 >= +2147483647) {
      i70 = 2147483647;
      break;
     }
     if (d67 <= +-2147483648) {
      i70 = -2147483648;
      break;
     }
     i70 = ~~d67;
    } else {
     if (i58) {
      __ZNK7WebCore9RenderBox41perpendicularContainingBlockLogicalHeightEv(i26, i1);
      i71 = HEAP32[i26 >> 2] | 0;
     } else {
      i71 = i65;
     }
     i25 = (HEAP32[i64 + 44 >> 2] | 0) >>> 13 & 3;
     if ((i25 | 0) == 3 | (i25 | 0) == 0) {
      i72 = (HEAP32[i64 + 4 >> 2] | 0) + 4 | 0;
     } else {
      i72 = (HEAP32[i64 + 4 >> 2] | 0) + 12 | 0;
     }
     i25 = i72;
     i24 = HEAP32[i25 >> 2] | 0;
     i68 = HEAP32[i25 + 4 >> 2] | 0;
     HEAP32[i28 >> 2] = i24;
     HEAP32[i28 + 4 >> 2] = i68;
     if ((i24 & 0 | 0) == 0 & (i68 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i29);
     }
     HEAP32[i30 >> 2] = i71;
     __ZNK7WebCore9RenderBox32computeLogicalWidthInRegionUsingENS_8SizeTypeENS_6LengthENS_10LayoutUnitEPKNS_11RenderBlockEPNS_12RenderRegionE(i27, i1, 0, i29, i30, i61, i3);
     if ((HEAP8[i29 + 5 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i29);
     }
     HEAP32[i32 >> 2] = HEAP32[i27 >> 2];
     HEAP32[i33 >> 2] = i71;
     __ZNK7WebCore9RenderBox37constrainLogicalWidthInRegionByMinMaxENS_10LayoutUnitES1_PNS_11RenderBlockEPNS_12RenderRegionE(i31, i1, i32, i33, i61, i3);
     i70 = HEAP32[i31 >> 2] | 0;
    }
   } while (0);
   HEAP32[i41 >> 2] = i70;
   do {
    if (i58) {
     i62 = 67;
    } else {
     if ((HEAP32[i44 >> 2] & 1088 | 0) != 0) {
      i62 = 67;
      break;
     }
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 972 >> 2] & 511](i1) | 0) {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i61 >> 2] | 0) + 1024 >> 2] & 511](i61) | 0)) {
        i73 = i65;
        break;
       }
       __ZNK7WebCore9RenderBox41containingBlockAvailableLineWidthInRegionEPNS_12RenderRegionE(i36, i1, i3);
       i73 = HEAP32[i36 >> 2] | 0;
      } else {
       i73 = i65;
      }
     } while (0);
     i68 = (HEAP32[(HEAP32[i61 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ (HEAP32[(HEAP32[i40 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0;
     HEAP32[i37 >> 2] = i73;
     HEAP32[i38 >> 2] = HEAP32[i41 >> 2];
     __ZNK7WebCore9RenderBox29computeInlineDirectionMarginsEPNS_11RenderBlockENS_10LayoutUnitES3_RS3_S4_(i1, i61, i37, i38, i68 ? i15 : i43, i68 ? i43 : i15);
    }
   } while (0);
   if ((i62 | 0) == 67) {
    i68 = i64 + 16 | 0;
    i24 = i64 + 44 | 0;
    i25 = i64 + 40 | 0;
    i10 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i68 >> 2] | 0) + 36 | 0, (HEAP32[i24 >> 2] | 0) >>> 13 & 3, (HEAP32[i25 >> 2] | 0) >>> 30 & 1) | 0;
    HEAP32[i6 >> 2] = i65;
    i9 = i1 + 4 | 0;
    __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i34, i10, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i42 >> 2] = HEAP32[i34 >> 2];
    i10 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i68 >> 2] | 0) + 36 | 0, (HEAP32[i24 >> 2] | 0) >>> 13 & 3, (HEAP32[i25 >> 2] | 0) >>> 30 & 1) | 0;
    HEAP32[i5 >> 2] = i65;
    __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i35, i10, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i45 >> 2] = HEAP32[i35 >> 2];
   }
   if (!((i65 | 0) != 0 & (i58 ^ 1))) {
    break;
   }
   if ((i65 | 0) == ((HEAP32[i42 >> 2] | 0) + (HEAP32[i41 >> 2] | 0) + (HEAP32[i45 >> 2] | 0) | 0)) {
    break;
   }
   if ((HEAP32[i44 >> 2] & 1088 | 0) != 0) {
    break;
   }
   i9 = i61;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 556 >> 2] & 511](i20) | 0) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 548 >> 2] & 511](i20) | 0) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 244 >> 2] & 511](i20) | 0) {
    break;
   }
   i9 = i65 - (HEAP32[i41 >> 2] | 0) | 0;
   i10 = i61 + 36 | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 792 >> 2] & 63](i39, i1 | 0, HEAP32[i10 >> 2] | 0);
   i25 = i9 - (HEAP32[i39 >> 2] | 0) | 0;
   if ((HEAP32[(HEAP32[i10 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ (HEAP32[(HEAP32[i40 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0) {
    HEAP32[i42 >> 2] = i25;
    break;
   } else {
    HEAP32[i45 >> 2] = i25;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i18 + 5 | 0] | 0) != 10) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i18);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox30computePositionedLogicalHeightERNS0_27LogicalExtentComputedValuesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
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
 STACKTOP = STACKTOP + 8 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = i24;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i27 = i26;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i30 = i29;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
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
 STACKTOP = STACKTOP + 24 | 0;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i44 = i43;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i46 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
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
 i55 = i54;
 i56 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i57 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i58 = i1 | 0;
 i59 = i1 + 20 | 0;
 if ((HEAP32[i59 >> 2] & 2048 | 0) != 0) {
  __ZNK7WebCore9RenderBox38computePositionedLogicalHeightReplacedERNS0_27LogicalExtentComputedValuesE(i1, i2);
  STACKTOP = i3;
  return;
 }
 i60 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i58, 0, 0) | 0;
 i61 = i60;
 __ZNK7WebCore9RenderBox41containingBlockLogicalHeightForPositionedEPKNS_20RenderBoxModelObjectEb(i6, i1, i61, 1);
 i62 = i1 + 36 | 0;
 i63 = HEAP32[i62 >> 2] | 0;
 i64 = i1 | 0;
 i65 = i1;
 i66 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i65 >> 2] | 0) + 752 >> 2] & 511](i64) | 0;
 i67 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i67 >> 2] | 0) + 720 >> 2] & 127](i5, i64);
 i68 = (HEAP32[i5 >> 2] | 0) + i66 | 0;
 i66 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i65 >> 2] | 0) + 756 >> 2] & 511](i64) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i67 >> 2] | 0) + 724 >> 2] & 127](i4, i64);
 i64 = i68 + i66 + (HEAP32[i4 >> 2] | 0) | 0;
 i4 = i63 + 16 | 0;
 i66 = i63 + 44 | 0;
 i68 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i4 >> 2] | 0) + 36 | 0, (HEAP32[i66 >> 2] | 0) >>> 13 & 3) | 0;
 i67 = HEAP32[i68 >> 2] | 0;
 i65 = HEAP32[i68 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i67;
 HEAP32[i7 + 4 >> 2] = i65;
 if ((i67 & 0 | 0) == 0 & (i65 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i8);
 }
 i65 = __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i4 >> 2] | 0) + 36 | 0, (HEAP32[i66 >> 2] | 0) >>> 13 & 3) | 0;
 i67 = HEAP32[i65 >> 2] | 0;
 i68 = HEAP32[i65 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i67;
 HEAP32[i9 + 4 >> 2] = i68;
 if ((i67 & 0 | 0) == 0 & (i68 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
 }
 i68 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i4 >> 2] | 0) + 4 | 0, (HEAP32[i66 >> 2] | 0) >>> 13 & 3) | 0;
 i67 = HEAP32[i68 >> 2] | 0;
 i65 = HEAP32[i68 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = i67;
 HEAP32[i11 + 4 >> 2] = i65;
 if ((i67 & 0 | 0) == 0 & (i65 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i12);
 }
 i65 = __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i4 >> 2] | 0) + 4 | 0, (HEAP32[i66 >> 2] | 0) >>> 13 & 3) | 0;
 i4 = HEAP32[i65 >> 2] | 0;
 i67 = HEAP32[i65 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 HEAP32[i13 + 4 >> 2] = i67;
 if ((i4 & 0 | 0) == 0 & (i67 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i14);
  i4 = i14 + 5 | 0;
  i69 = HEAP8[i4] | 0;
  i70 = i4;
 } else {
  i69 = (i67 >>> 8 | 0 << 24) & 255;
  i70 = i14 + 5 | 0;
 }
 i67 = i12 + 5 | 0;
 if ((HEAP8[i67] | i69) << 24 >> 24 == 0) {
  i69 = HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 168 >> 2] | 0;
  i4 = i69 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i60 >> 2] | 0) + 752 >> 2] & 511](i61) | 0) | 0;
  i69 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i69 | 0) == 0 | (i69 | 0) == (i60 | 0)) {
   i71 = i4;
  } else {
   i65 = i4;
   i4 = i69;
   while (1) {
    i69 = i4 | 0;
    do {
     if ((HEAP32[i4 + 20 >> 2] & 512 | 0) == 0) {
      i72 = i65;
     } else {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 200 >> 2] & 511](i69) | 0) {
       i72 = i65;
       break;
      }
      i68 = (HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((i68 | 0) == 3 | (i68 | 0) == 0) {
       i73 = i4 + 48 | 0;
      } else {
       i73 = i4 + 44 | 0;
      }
      i72 = (HEAP32[i73 >> 2] | 0) + i65 | 0;
     }
    } while (0);
    i68 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i69, 0, 0) | 0;
    if ((i68 | 0) == 0 | (i68 | 0) == (i60 | 0)) {
     i71 = i72;
     break;
    } else {
     i65 = i72;
     i4 = i68;
    }
   }
  }
  HEAP8[i67] = 3;
  HEAPF32[i11 >> 2] = +(i71 | 0);
  HEAP8[i12 + 6 | 0] = 1;
 }
 i71 = i2 | 0;
 i4 = HEAP32[i71 >> 2] | 0;
 i72 = (HEAP32[i66 >> 2] | 0) >>> 13 & 3;
 if ((i72 | 0) == 3 | (i72 | 0) == 0) {
  i74 = (HEAP32[i63 + 4 >> 2] | 0) + 12 | 0;
 } else {
  i74 = (HEAP32[i63 + 4 >> 2] | 0) + 4 | 0;
 }
 i72 = i74;
 i74 = HEAP32[i72 >> 2] | 0;
 i65 = HEAP32[i72 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = i74;
 HEAP32[i15 + 4 >> 2] = i65;
 if ((i74 & 0 | 0) == 0 & (i65 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i16);
 }
 i65 = i6 | 0;
 HEAP32[i17 >> 2] = HEAP32[i65 >> 2];
 HEAP32[i18 >> 2] = i64;
 HEAP32[i19 >> 2] = i4;
 i6 = HEAP32[i11 >> 2] | 0;
 i74 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i20 >> 2] = i6;
 HEAP32[i20 + 4 >> 2] = i74;
 if ((i6 & 0 | 0) == 0 & (i74 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i21);
 }
 i74 = HEAP32[i13 >> 2] | 0;
 i6 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i22 >> 2] = i74;
 HEAP32[i22 + 4 >> 2] = i6;
 if ((i74 & 0 | 0) == 0 & (i6 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i23);
 }
 i6 = HEAP32[i7 >> 2] | 0;
 i74 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i24 >> 2] = i6;
 HEAP32[i24 + 4 >> 2] = i74;
 if ((i6 & 0 | 0) == 0 & (i74 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i25);
 }
 i74 = HEAP32[i9 >> 2] | 0;
 i6 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i26 >> 2] = i74;
 HEAP32[i26 + 4 >> 2] = i6;
 if ((i74 & 0 | 0) == 0 & (i6 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i27);
 }
 __ZNK7WebCore9RenderBox35computePositionedLogicalHeightUsingENS_6LengthEPKNS_20RenderBoxModelObjectENS_10LayoutUnitES5_S5_S1_S1_S1_S1_RNS0_27LogicalExtentComputedValuesE(i1, i16, i61, i17, i18, i19, i21, i23, i25, i27, i2);
 if ((HEAP8[i27 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i27);
 }
 if ((HEAP8[i25 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
 }
 if ((HEAP8[i23 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i23);
 }
 if ((HEAP8[i21 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i21);
 }
 if ((HEAP8[i16 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
 }
 i16 = (HEAP32[i66 >> 2] | 0) >>> 13 & 3;
 if ((i16 | 0) == 3 | (i16 | 0) == 0) {
  i21 = HEAP32[i63 + 4 >> 2] | 0;
  i75 = i21 + 44 | 0;
  i76 = i21;
 } else {
  i21 = HEAP32[i63 + 4 >> 2] | 0;
  i75 = i21 + 28 | 0;
  i76 = i21;
 }
 do {
  if ((HEAP8[i75 + 5 | 0] | 0) != 15) {
   _memset(i28 | 0, 0, 24) | 0;
   if ((i16 | 0) == 3 | (i16 | 0) == 0) {
    i77 = i76 + 44 | 0;
   } else {
    i77 = i76 + 28 | 0;
   }
   i21 = i77;
   i23 = HEAP32[i21 >> 2] | 0;
   i25 = HEAP32[i21 + 4 >> 2] | 0;
   HEAP32[i29 >> 2] = i23;
   HEAP32[i29 + 4 >> 2] = i25;
   if ((i23 & 0 | 0) == 0 & (i25 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i30);
   }
   HEAP32[i31 >> 2] = HEAP32[i65 >> 2];
   HEAP32[i32 >> 2] = i64;
   HEAP32[i33 >> 2] = i4;
   i25 = HEAP32[i11 >> 2] | 0;
   i23 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i34 >> 2] = i25;
   HEAP32[i34 + 4 >> 2] = i23;
   if ((i25 & 0 | 0) == 0 & (i23 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i35);
   }
   i23 = HEAP32[i13 >> 2] | 0;
   i25 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i36 >> 2] = i23;
   HEAP32[i36 + 4 >> 2] = i25;
   if ((i23 & 0 | 0) == 0 & (i25 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i37);
   }
   i25 = HEAP32[i7 >> 2] | 0;
   i23 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i38 >> 2] = i25;
   HEAP32[i38 + 4 >> 2] = i23;
   if ((i25 & 0 | 0) == 0 & (i23 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i39);
   }
   i23 = HEAP32[i9 >> 2] | 0;
   i25 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i40 >> 2] = i23;
   HEAP32[i40 + 4 >> 2] = i25;
   if ((i23 & 0 | 0) == 0 & (i25 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i41);
   }
   __ZNK7WebCore9RenderBox35computePositionedLogicalHeightUsingENS_6LengthEPKNS_20RenderBoxModelObjectENS_10LayoutUnitES5_S5_S1_S1_S1_S1_RNS0_27LogicalExtentComputedValuesE(i1, i30, i61, i31, i32, i33, i35, i37, i39, i41, i28);
   if ((HEAP8[i41 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i41);
   }
   if ((HEAP8[i39 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i39);
   }
   if ((HEAP8[i37 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i37);
   }
   if ((HEAP8[i35 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i35);
   }
   if ((HEAP8[i30 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i30);
   }
   i25 = HEAP32[i28 >> 2] | 0;
   if ((HEAP32[i71 >> 2] | 0) <= (i25 | 0)) {
    break;
   }
   HEAP32[i71 >> 2] = i25;
   HEAP32[i2 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
   HEAP32[i2 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
   HEAP32[i2 + 12 >> 2] = HEAP32[i28 + 12 >> 2];
  }
 } while (0);
 i28 = (HEAP32[i66 >> 2] | 0) >>> 13 & 3;
 if ((i28 | 0) == 3 | (i28 | 0) == 0) {
  i66 = HEAP32[i63 + 4 >> 2] | 0;
  i78 = i66 + 36 | 0;
  i79 = i66;
 } else {
  i66 = HEAP32[i63 + 4 >> 2] | 0;
  i78 = i66 + 20 | 0;
  i79 = i66;
 }
 do {
  if ((HEAP8[i78 + 5 | 0] | 0) == 10) {
   i80 = 82;
  } else {
   if ((HEAP8[i78 + 6 | 0] & 1) == 0) {
    if ((HEAP32[i78 >> 2] | 0) != 0) {
     i80 = 82;
     break;
    }
   } else {
    if (+HEAPF32[i78 >> 2] != +0) {
     i80 = 82;
     break;
    }
   }
   i81 = HEAP32[i71 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i80 | 0) == 82) {
   _memset(i42 | 0, 0, 24) | 0;
   if ((i28 | 0) == 3 | (i28 | 0) == 0) {
    i82 = i79 + 36 | 0;
   } else {
    i82 = i79 + 20 | 0;
   }
   i78 = i82;
   i66 = HEAP32[i78 >> 2] | 0;
   i63 = HEAP32[i78 + 4 >> 2] | 0;
   HEAP32[i43 >> 2] = i66;
   HEAP32[i43 + 4 >> 2] = i63;
   if ((i66 & 0 | 0) == 0 & (i63 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i44);
   }
   HEAP32[i45 >> 2] = HEAP32[i65 >> 2];
   HEAP32[i46 >> 2] = i64;
   HEAP32[i47 >> 2] = i4;
   i63 = HEAP32[i11 >> 2] | 0;
   i66 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i48 >> 2] = i63;
   HEAP32[i48 + 4 >> 2] = i66;
   if ((i63 & 0 | 0) == 0 & (i66 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i49);
   }
   i66 = HEAP32[i13 >> 2] | 0;
   i63 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i50 >> 2] = i66;
   HEAP32[i50 + 4 >> 2] = i63;
   if ((i66 & 0 | 0) == 0 & (i63 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i51);
   }
   i63 = HEAP32[i7 >> 2] | 0;
   i66 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i52 >> 2] = i63;
   HEAP32[i52 + 4 >> 2] = i66;
   if ((i63 & 0 | 0) == 0 & (i66 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i53);
   }
   i66 = HEAP32[i9 >> 2] | 0;
   i63 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i54 >> 2] = i66;
   HEAP32[i54 + 4 >> 2] = i63;
   if ((i66 & 0 | 0) == 0 & (i63 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i55);
   }
   __ZNK7WebCore9RenderBox35computePositionedLogicalHeightUsingENS_6LengthEPKNS_20RenderBoxModelObjectENS_10LayoutUnitES5_S5_S1_S1_S1_S1_RNS0_27LogicalExtentComputedValuesE(i1, i44, i61, i45, i46, i47, i49, i51, i53, i55, i42);
   if ((HEAP8[i55 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i55);
   }
   if ((HEAP8[i53 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i53);
   }
   if ((HEAP8[i51 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i51);
   }
   if ((HEAP8[i49 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i49);
   }
   if ((HEAP8[i44 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i44);
   }
   i63 = HEAP32[i71 >> 2] | 0;
   i66 = HEAP32[i42 >> 2] | 0;
   if ((i63 | 0) >= (i66 | 0)) {
    i81 = i63;
    break;
   }
   HEAP32[i71 >> 2] = i66;
   HEAP32[i2 + 4 >> 2] = HEAP32[i42 + 4 >> 2];
   HEAP32[i2 + 8 >> 2] = HEAP32[i42 + 8 >> 2];
   HEAP32[i2 + 12 >> 2] = HEAP32[i42 + 12 >> 2];
   i81 = i66;
  }
 } while (0);
 HEAP32[i71 >> 2] = i81 + i64;
 do {
  if ((HEAP32[i59 >> 2] & 805306368 | 0) != 0) {
   if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i58) | 0) == 0) {
    break;
   }
   if (!((HEAP32[i59 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i60 + 20 >> 2] & 8192 | 0) != 0)) {
    break;
   }
   if ((HEAP32[i60 + 24 >> 2] & 16 | 0) == 0) {
    break;
   }
   i64 = i2 + 4 | 0;
   i81 = HEAP32[i64 >> 2] | 0;
   i71 = i60;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i60 >> 2] | 0) + 864 >> 2] & 127](i56, i71);
   i42 = (HEAP32[(HEAP32[i62 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i42 | 0) == 3 | (i42 | 0) == 0) {
    i83 = i1 + 44 | 0;
   } else {
    i83 = i1 + 48 | 0;
   }
   HEAP32[i57 >> 2] = (HEAP32[i56 >> 2] | 0) - (HEAP32[i83 >> 2] | 0);
   i42 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i71, i57) | 0;
   if ((i42 | 0) == 0) {
    break;
   }
   i71 = __ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i60, i42, 0) | 0;
   if ((i71 | 0) == 0) {
    break;
   }
   HEAP32[i64 >> 2] = (HEAP32[i71 >> 2] | 0) + i81;
  }
 } while (0);
 if ((HEAP8[i70] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
 }
 if ((HEAP8[i67] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
 }
 if ((HEAP8[i10 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
 }
 if ((HEAP8[i8 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox29computePositionedLogicalWidthERNS0_27LogicalExtentComputedValuesEPNS_12RenderRegionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = i16;
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
 STACKTOP = STACKTOP + 8 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = i24;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i27 = i26;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i30 = i29;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i34 = i33;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i36 = i35;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i38 = i37;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i40 = i39;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i43 = i42;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
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
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i55 = i1 | 0;
 i56 = i1 + 20 | 0;
 if ((HEAP32[i56 >> 2] & 2048 | 0) != 0) {
  __ZNK7WebCore9RenderBox37computePositionedLogicalWidthReplacedERNS0_27LogicalExtentComputedValuesE(i1, i2);
  STACKTOP = i4;
  return;
 }
 i57 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i55, 0, 0) | 0;
 i58 = i57;
 __ZNK7WebCore9RenderBox40containingBlockLogicalWidthForPositionedEPKNS_20RenderBoxModelObjectEPNS_12RenderRegionEb(i7, i1, i58, i3, 1);
 i59 = (HEAP32[(HEAP32[i57 + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1;
 i60 = (HEAP32[i56 >> 2] & 8192 | 0) != 0;
 i61 = i1 | 0;
 i62 = i1;
 i63 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i62 >> 2] | 0) + 760 >> 2] & 511](i61) | 0;
 i64 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i62 >> 2] | 0) + 764 >> 2] & 511](i61) | 0) + i63 | 0;
 i63 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i63 >> 2] | 0) + 728 >> 2] & 127](i5, i61);
 i62 = i64 + (HEAP32[i5 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i63 >> 2] | 0) + 732 >> 2] & 127](i6, i61);
 i61 = i62 + (HEAP32[i6 >> 2] | 0) | 0;
 i6 = i1 + 36 | 0;
 i62 = HEAP32[i6 >> 2] | 0;
 i63 = HEAP32[i62 + 16 >> 2] | 0;
 i5 = i60 ? i63 + 36 | 0 : i63 + 52 | 0;
 i63 = HEAP32[i5 >> 2] | 0;
 i64 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i63;
 HEAP32[i8 + 4 >> 2] = i64;
 if ((i63 & 0 | 0) == 0 & (i64 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
  i65 = HEAP32[i6 >> 2] | 0;
 } else {
  i65 = i62;
 }
 i62 = HEAP32[i65 + 16 >> 2] | 0;
 i64 = i60 ? i62 + 44 | 0 : i62 + 60 | 0;
 i62 = HEAP32[i64 >> 2] | 0;
 i60 = HEAP32[i64 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i62;
 HEAP32[i10 + 4 >> 2] = i60;
 if ((i62 & 0 | 0) == 0 & (i60 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
  i66 = HEAP32[i6 >> 2] | 0;
 } else {
  i66 = i65;
 }
 i65 = __ZNK7WebCore9LengthBox11logicalLeftENS_11WritingModeE((HEAP32[i66 + 16 >> 2] | 0) + 4 | 0, (HEAP32[i66 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i66 = HEAP32[i65 >> 2] | 0;
 i60 = HEAP32[i65 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = i66;
 HEAP32[i12 + 4 >> 2] = i60;
 if ((i66 & 0 | 0) == 0 & (i60 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i13);
 }
 i60 = HEAP32[i6 >> 2] | 0;
 i66 = __ZNK7WebCore9LengthBox12logicalRightENS_11WritingModeE((HEAP32[i60 + 16 >> 2] | 0) + 4 | 0, (HEAP32[i60 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i60 = HEAP32[i66 >> 2] | 0;
 i65 = HEAP32[i66 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = i60;
 HEAP32[i14 + 4 >> 2] = i65;
 if ((i60 & 0 | 0) == 0 & (i65 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i15);
 }
 i65 = i7 | 0;
 __ZN7WebCoreL27computeInlineStaticDistanceERNS_6LengthES1_PKNS_9RenderBoxEPKNS_20RenderBoxModelObjectENS_10LayoutUnitEPNS_12RenderRegionE(i13, i15, i1, i58, HEAP32[i65 >> 2] | 0, i3);
 i7 = HEAP32[i6 >> 2] | 0;
 i60 = (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i60 | 0) == 3 | (i60 | 0) == 0) {
  i67 = (HEAP32[i7 + 4 >> 2] | 0) + 4 | 0;
 } else {
  i67 = (HEAP32[i7 + 4 >> 2] | 0) + 12 | 0;
 }
 i7 = i67;
 i67 = HEAP32[i7 >> 2] | 0;
 i60 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i16 >> 2] = i67;
 HEAP32[i16 + 4 >> 2] = i60;
 if ((i67 & 0 | 0) == 0 & (i60 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i17);
 }
 HEAP32[i18 >> 2] = HEAP32[i65 >> 2];
 HEAP32[i19 >> 2] = i61;
 i60 = HEAP32[i12 >> 2] | 0;
 i67 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i20 >> 2] = i60;
 HEAP32[i20 + 4 >> 2] = i67;
 if ((i60 & 0 | 0) == 0 & (i67 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i21);
 }
 i67 = HEAP32[i14 >> 2] | 0;
 i60 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i22 >> 2] = i67;
 HEAP32[i22 + 4 >> 2] = i60;
 if ((i67 & 0 | 0) == 0 & (i60 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i23);
 }
 i60 = HEAP32[i8 >> 2] | 0;
 i67 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i24 >> 2] = i60;
 HEAP32[i24 + 4 >> 2] = i67;
 if ((i60 & 0 | 0) == 0 & (i67 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i25);
 }
 i67 = HEAP32[i10 >> 2] | 0;
 i60 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i26 >> 2] = i67;
 HEAP32[i26 + 4 >> 2] = i60;
 if ((i67 & 0 | 0) == 0 & (i60 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i27);
 }
 __ZNK7WebCore9RenderBox34computePositionedLogicalWidthUsingENS_6LengthEPKNS_20RenderBoxModelObjectENS_13TextDirectionENS_10LayoutUnitES6_S1_S1_S1_S1_RNS0_27LogicalExtentComputedValuesE(i1, i17, i58, i59, i18, i19, i21, i23, i25, i27, i2);
 if ((HEAP8[i27 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i27);
 }
 if ((HEAP8[i25 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
 }
 if ((HEAP8[i23 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i23);
 }
 if ((HEAP8[i21 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i21);
 }
 if ((HEAP8[i17 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i17);
 }
 i17 = HEAP32[i6 >> 2] | 0;
 i21 = (HEAP32[i17 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i21 | 0) == 3 | (i21 | 0) == 0) {
  i23 = HEAP32[i17 + 4 >> 2] | 0;
  i68 = i23 + 28 | 0;
  i69 = i23;
 } else {
  i23 = HEAP32[i17 + 4 >> 2] | 0;
  i68 = i23 + 44 | 0;
  i69 = i23;
 }
 do {
  if ((HEAP8[i68 + 5 | 0] | 0) != 15) {
   _memset(i28 | 0, 0, 24) | 0;
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    i70 = i69 + 28 | 0;
   } else {
    i70 = i69 + 44 | 0;
   }
   i23 = i70;
   i17 = HEAP32[i23 >> 2] | 0;
   i25 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i29 >> 2] = i17;
   HEAP32[i29 + 4 >> 2] = i25;
   if ((i17 & 0 | 0) == 0 & (i25 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i30);
   }
   HEAP32[i31 >> 2] = HEAP32[i65 >> 2];
   HEAP32[i32 >> 2] = i61;
   i25 = HEAP32[i12 >> 2] | 0;
   i17 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i33 >> 2] = i25;
   HEAP32[i33 + 4 >> 2] = i17;
   if ((i25 & 0 | 0) == 0 & (i17 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i34);
   }
   i17 = HEAP32[i14 >> 2] | 0;
   i25 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i35 >> 2] = i17;
   HEAP32[i35 + 4 >> 2] = i25;
   if ((i17 & 0 | 0) == 0 & (i25 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i36);
   }
   i25 = HEAP32[i8 >> 2] | 0;
   i17 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i37 >> 2] = i25;
   HEAP32[i37 + 4 >> 2] = i17;
   if ((i25 & 0 | 0) == 0 & (i17 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i38);
   }
   i17 = HEAP32[i10 >> 2] | 0;
   i25 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i39 >> 2] = i17;
   HEAP32[i39 + 4 >> 2] = i25;
   if ((i17 & 0 | 0) == 0 & (i25 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i40);
   }
   __ZNK7WebCore9RenderBox34computePositionedLogicalWidthUsingENS_6LengthEPKNS_20RenderBoxModelObjectENS_13TextDirectionENS_10LayoutUnitES6_S1_S1_S1_S1_RNS0_27LogicalExtentComputedValuesE(i1, i30, i58, i59, i31, i32, i34, i36, i38, i40, i28);
   if ((HEAP8[i40 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i40);
   }
   if ((HEAP8[i38 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i38);
   }
   if ((HEAP8[i36 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i36);
   }
   if ((HEAP8[i34 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i34);
   }
   if ((HEAP8[i30 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i30);
   }
   i25 = i2 | 0;
   i17 = HEAP32[i28 >> 2] | 0;
   if ((HEAP32[i25 >> 2] | 0) <= (i17 | 0)) {
    break;
   }
   HEAP32[i25 >> 2] = i17;
   HEAP32[i2 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
   HEAP32[i2 + 16 >> 2] = HEAP32[i28 + 16 >> 2];
   HEAP32[i2 + 20 >> 2] = HEAP32[i28 + 20 >> 2];
  }
 } while (0);
 i28 = HEAP32[i6 >> 2] | 0;
 i30 = (HEAP32[i28 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i30 | 0) == 3 | (i30 | 0) == 0) {
  i34 = HEAP32[i28 + 4 >> 2] | 0;
  i71 = i34 + 20 | 0;
  i72 = i34;
 } else {
  i34 = HEAP32[i28 + 4 >> 2] | 0;
  i71 = i34 + 36 | 0;
  i72 = i34;
 }
 do {
  if ((HEAP8[i71 + 5 | 0] | 0) == 10) {
   i73 = 75;
  } else {
   if ((HEAP8[i71 + 6 | 0] & 1) == 0) {
    if ((HEAP32[i71 >> 2] | 0) != 0) {
     i73 = 75;
     break;
    }
   } else {
    if (+HEAPF32[i71 >> 2] != +0) {
     i73 = 75;
     break;
    }
   }
   if ((i30 | 0) == 3 | (i30 | 0) == 0) {
    i74 = i72 + 20 | 0;
   } else {
    i74 = i72 + 36 | 0;
   }
   if (((HEAPU8[i74 + 5 | 0] | 0) - 6 | 0) >>> 0 < 4 >>> 0) {
    i73 = 75;
    break;
   }
   i75 = HEAP32[i2 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i73 | 0) == 75) {
   _memset(i41 | 0, 0, 24) | 0;
   if ((i30 | 0) == 3 | (i30 | 0) == 0) {
    i76 = i72 + 20 | 0;
   } else {
    i76 = i72 + 36 | 0;
   }
   i74 = i76;
   i71 = HEAP32[i74 >> 2] | 0;
   i34 = HEAP32[i74 + 4 >> 2] | 0;
   HEAP32[i42 >> 2] = i71;
   HEAP32[i42 + 4 >> 2] = i34;
   if ((i71 & 0 | 0) == 0 & (i34 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i43);
   }
   HEAP32[i44 >> 2] = HEAP32[i65 >> 2];
   HEAP32[i45 >> 2] = i61;
   i34 = HEAP32[i12 >> 2] | 0;
   i71 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i46 >> 2] = i34;
   HEAP32[i46 + 4 >> 2] = i71;
   if ((i34 & 0 | 0) == 0 & (i71 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i47);
   }
   i71 = HEAP32[i14 >> 2] | 0;
   i34 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i48 >> 2] = i71;
   HEAP32[i48 + 4 >> 2] = i34;
   if ((i71 & 0 | 0) == 0 & (i34 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i49);
   }
   i34 = HEAP32[i8 >> 2] | 0;
   i71 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i50 >> 2] = i34;
   HEAP32[i50 + 4 >> 2] = i71;
   if ((i34 & 0 | 0) == 0 & (i71 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i51);
   }
   i71 = HEAP32[i10 >> 2] | 0;
   i34 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i52 >> 2] = i71;
   HEAP32[i52 + 4 >> 2] = i34;
   if ((i71 & 0 | 0) == 0 & (i34 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i53);
   }
   __ZNK7WebCore9RenderBox34computePositionedLogicalWidthUsingENS_6LengthEPKNS_20RenderBoxModelObjectENS_13TextDirectionENS_10LayoutUnitES6_S1_S1_S1_S1_RNS0_27LogicalExtentComputedValuesE(i1, i43, i58, i59, i44, i45, i47, i49, i51, i53, i41);
   if ((HEAP8[i53 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i53);
   }
   if ((HEAP8[i51 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i51);
   }
   if ((HEAP8[i49 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i49);
   }
   if ((HEAP8[i47 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i47);
   }
   if ((HEAP8[i43 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i43);
   }
   i34 = i2 | 0;
   i71 = HEAP32[i34 >> 2] | 0;
   i74 = HEAP32[i41 >> 2] | 0;
   if ((i71 | 0) >= (i74 | 0)) {
    i75 = i71;
    break;
   }
   HEAP32[i34 >> 2] = i74;
   HEAP32[i2 + 4 >> 2] = HEAP32[i41 + 4 >> 2];
   HEAP32[i2 + 16 >> 2] = HEAP32[i41 + 16 >> 2];
   HEAP32[i2 + 20 >> 2] = HEAP32[i41 + 20 >> 2];
   i75 = i74;
  }
 } while (0);
 HEAP32[i2 >> 2] = i75 + i61;
 do {
  if ((HEAP32[i56 >> 2] & 805306368 | 0) != 0) {
   if (!((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i55) | 0) != 0 & (i3 | 0) == 0)) {
    break;
   }
   i61 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i61 | 0) != 0) {
    if (((HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i61 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) == 0) {
     break;
    }
   }
   if ((HEAP32[i56 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i57 + 20 >> 2] & 8192 | 0) != 0) {
    break;
   }
   if ((HEAP32[i57 + 24 >> 2] & 16 | 0) == 0) {
    break;
   }
   i61 = i2 + 4 | 0;
   i75 = HEAP32[i61 >> 2] | 0;
   i41 = i57;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i57 >> 2] | 0) + 864 >> 2] & 127](i54, i41);
   i43 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i41, i54) | 0;
   if ((i43 | 0) == 0) {
    break;
   }
   i41 = __ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i57, i43, 0) | 0;
   if ((i41 | 0) == 0) {
    break;
   }
   HEAP32[i61 >> 2] = (HEAP32[i41 >> 2] | 0) + i75;
  }
 } while (0);
 if ((HEAP8[i15 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i15);
 }
 if ((HEAP8[i13 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
 }
 if ((HEAP8[i11 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
 }
 if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox38computePositionedLogicalHeightReplacedERNS0_27LogicalExtentComputedValuesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 i20 = i3 + 128 | 0;
 i21 = i3 + 136 | 0;
 i22 = i3 + 144 | 0;
 i23 = i3 + 152 | 0;
 i24 = i3 + 160 | 0;
 i25 = i3 + 168 | 0;
 i26 = i25;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i28 = i27;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i30 = i29;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i32 = i31;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i46 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i48 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i49 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i50 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i51 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i52 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i1 | 0, 0, 0) | 0;
 i53 = i52;
 __ZNK7WebCore9RenderBox41containingBlockLogicalHeightForPositionedEPKNS_20RenderBoxModelObjectEb(i23, i1, i53, 1);
 __ZNK7WebCore9RenderBox40containingBlockLogicalWidthForPositionedEPKNS_20RenderBoxModelObjectEPNS_12RenderRegionEb(i24, i1, i53, 0, 0);
 i54 = i1 + 36 | 0;
 i55 = HEAP32[i54 >> 2] | 0;
 i56 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i55 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i55 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i55 = HEAP32[i56 >> 2] | 0;
 i57 = HEAP32[i56 + 4 >> 2] | 0;
 HEAP32[i25 >> 2] = i55;
 HEAP32[i25 + 4 >> 2] = i57;
 if ((i55 & 0 | 0) == 0 & (i57 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i26);
 }
 i57 = HEAP32[i54 >> 2] | 0;
 i55 = __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i57 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i57 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i57 = HEAP32[i55 >> 2] | 0;
 i56 = HEAP32[i55 + 4 >> 2] | 0;
 HEAP32[i27 >> 2] = i57;
 HEAP32[i27 + 4 >> 2] = i56;
 if ((i57 & 0 | 0) == 0 & (i56 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i28);
 }
 i56 = i2 + 8 | 0;
 i57 = i2 + 12 | 0;
 i55 = HEAP32[i54 >> 2] | 0;
 i58 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i55 + 16 >> 2] | 0) + 4 | 0, (HEAP32[i55 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i55 = HEAP32[i58 >> 2] | 0;
 i59 = HEAP32[i58 + 4 >> 2] | 0;
 HEAP32[i29 >> 2] = i55;
 HEAP32[i29 + 4 >> 2] = i59;
 if ((i55 & 0 | 0) == 0 & (i59 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i30);
 }
 i59 = HEAP32[i54 >> 2] | 0;
 i54 = __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i59 + 16 >> 2] | 0) + 4 | 0, (HEAP32[i59 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i59 = HEAP32[i54 >> 2] | 0;
 i55 = HEAP32[i54 + 4 >> 2] | 0;
 HEAP32[i31 >> 2] = i59;
 HEAP32[i31 + 4 >> 2] = i55;
 if ((i59 & 0 | 0) == 0 & (i55 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i32);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 896 >> 2] & 127](i33, i1);
 i55 = i1 | 0;
 i59 = i1;
 i31 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 752 >> 2] & 511](i55) | 0;
 i54 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i54 >> 2] | 0) + 720 >> 2] & 127](i22, i55);
 i58 = (HEAP32[i22 >> 2] | 0) + i31 | 0;
 i31 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 756 >> 2] & 511](i55) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i54 >> 2] | 0) + 724 >> 2] & 127](i21, i55);
 i55 = i58 + i31 + (HEAP32[i21 >> 2] | 0) + (HEAP32[i33 >> 2] | 0) | 0;
 i33 = i2 | 0;
 HEAP32[i33 >> 2] = i55;
 i21 = i23 | 0;
 i23 = (HEAP32[i21 >> 2] | 0) - i55 | 0;
 i55 = i32 + 5 | 0;
 i31 = i30 + 5 | 0;
 i58 = HEAP8[i31] | 0;
 if ((i58 | HEAP8[i55]) << 24 >> 24 == 0) {
  i54 = HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 168 >> 2] | 0;
  i59 = i54 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i52 >> 2] | 0) + 752 >> 2] & 511](i53) | 0) | 0;
  i54 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i54 | 0) == 0 | (i54 | 0) == (i52 | 0)) {
   i60 = i59;
  } else {
   i22 = i59;
   i59 = i54;
   while (1) {
    i54 = i59 | 0;
    do {
     if ((HEAP32[i59 + 20 >> 2] & 512 | 0) == 0) {
      i61 = i22;
     } else {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 200 >> 2] & 511](i54) | 0) {
       i61 = i22;
       break;
      }
      i62 = (HEAP32[(HEAP32[i59 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((i62 | 0) == 3 | (i62 | 0) == 0) {
       i63 = i59 + 48 | 0;
      } else {
       i63 = i59 + 44 | 0;
      }
      i61 = (HEAP32[i63 >> 2] | 0) + i22 | 0;
     }
    } while (0);
    i62 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i54, 0, 0) | 0;
    if ((i62 | 0) == 0 | (i62 | 0) == (i52 | 0)) {
     i60 = i61;
     break;
    } else {
     i22 = i61;
     i59 = i62;
    }
   }
  }
  HEAP8[i31] = 3;
  HEAPF32[i29 >> 2] = +(i60 | 0);
  HEAP8[i30 + 6 | 0] = 1;
  i64 = 20;
 } else {
  if (i58 << 24 >> 24 == 0) {
   i65 = 1;
   i64 = 21;
  } else {
   i64 = 20;
  }
 }
 do {
  if ((i64 | 0) == 20) {
   if ((HEAP8[i55] | 0) == 0) {
    i65 = 0;
    i64 = 21;
    break;
   }
   i58 = i26 + 5 | 0;
   if ((HEAP8[i26 + 5 | 0] | 0) != 0) {
    i66 = 0;
    i67 = i58;
    i64 = 30;
    break;
   }
   if ((HEAP8[i28 + 5 | 0] | 0) != 0) {
    i66 = 1;
    i67 = i58;
    i64 = 30;
    break;
   }
   HEAP32[i13 >> 2] = HEAP32[i21 >> 2];
   i60 = i1 + 4 | 0;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i34, i30, i13, HEAP32[(HEAP32[(HEAP32[(HEAP32[i60 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i29 = HEAP32[i34 >> 2] | 0;
   HEAP32[i12 >> 2] = HEAP32[i21 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i35, i32, i12, HEAP32[(HEAP32[(HEAP32[(HEAP32[i60 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i60 = i23 - i29 - (HEAP32[i35 >> 2] | 0) | 0;
   i59 = (i60 | 0) / 2 & -1;
   HEAP32[i56 >> 2] = i59;
   HEAP32[i57 >> 2] = i60 - i59;
   i68 = i29;
   i69 = i58;
  }
 } while (0);
 do {
  if ((i64 | 0) == 21) {
   i35 = i26 + 5 | 0;
   if ((HEAP8[i35] | 0) == 0) {
    HEAP8[i35] = 3;
    HEAP32[i25 >> 2] = 0;
    HEAP8[i26 + 6 | 0] = 0;
   }
   i35 = i28 + 5 | 0;
   if ((HEAP8[i35] | 0) == 0) {
    HEAP8[i35] = 3;
    HEAP32[i27 >> 2] = 0;
    HEAP8[i28 + 6 | 0] = 0;
   }
   i35 = i26 + 5 | 0;
   if (!i65) {
    i66 = 0;
    i67 = i35;
    i64 = 30;
    break;
   }
   i12 = i24 | 0;
   HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
   i34 = i1 + 4 | 0;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i36, i26, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i13 = i56 | 0;
   HEAP32[i13 >> 2] = HEAP32[i36 >> 2];
   HEAP32[i5 >> 2] = HEAP32[i12 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i37, i28, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i12 = i57 | 0;
   HEAP32[i12 >> 2] = HEAP32[i37 >> 2];
   HEAP32[i4 >> 2] = HEAP32[i21 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i38, i32, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i68 = i23 - (HEAP32[i38 >> 2] | 0) - (HEAP32[i13 >> 2] | 0) - (HEAP32[i12 >> 2] | 0) | 0;
   i69 = i35;
  }
 } while (0);
 do {
  if ((i64 | 0) == 30) {
   if ((HEAP8[i55] | 0) == 0) {
    i38 = i24 | 0;
    HEAP32[i7 >> 2] = HEAP32[i38 >> 2];
    i4 = i1 + 4 | 0;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i39, i26, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i56 >> 2] = HEAP32[i39 >> 2];
    HEAP32[i8 >> 2] = HEAP32[i38 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i40, i28, i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i57 >> 2] = HEAP32[i40 >> 2];
    HEAP32[i9 >> 2] = HEAP32[i21 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i41, i30, i9, HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i68 = HEAP32[i41 >> 2] | 0;
    i69 = i67;
    break;
   }
   if (i66) {
    HEAP32[i10 >> 2] = HEAP32[i24 >> 2];
    i4 = i1 + 4 | 0;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i42, i28, i10, HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i38 = i57 | 0;
    HEAP32[i38 >> 2] = HEAP32[i42 >> 2];
    HEAP32[i11 >> 2] = HEAP32[i21 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i43, i30, i11, HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i37 = HEAP32[i43 >> 2] | 0;
    HEAP32[i14 >> 2] = HEAP32[i21 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i44, i32, i14, HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i56 >> 2] = i23 - i37 - (HEAP32[i44 >> 2] | 0) - (HEAP32[i38 >> 2] | 0);
    i68 = i37;
    i69 = i67;
    break;
   }
   i37 = i24 | 0;
   i38 = HEAP32[i37 >> 2] | 0;
   if ((HEAP8[i28 + 5 | 0] | 0) == 0) {
    HEAP32[i15 >> 2] = i38;
    i4 = i1 + 4 | 0;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i45, i26, i15, HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i5 = i56 | 0;
    HEAP32[i5 >> 2] = HEAP32[i45 >> 2];
    HEAP32[i16 >> 2] = HEAP32[i21 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i46, i30, i16, HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i36 = HEAP32[i46 >> 2] | 0;
    HEAP32[i17 >> 2] = HEAP32[i21 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i47, i32, i17, HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i57 >> 2] = i23 - i36 - (HEAP32[i47 >> 2] | 0) - (HEAP32[i5 >> 2] | 0);
    i68 = i36;
    i69 = i67;
    break;
   } else {
    HEAP32[i18 >> 2] = i38;
    i38 = i1 + 4 | 0;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i48, i26, i18, HEAP32[(HEAP32[(HEAP32[(HEAP32[i38 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i56 >> 2] = HEAP32[i48 >> 2];
    HEAP32[i19 >> 2] = HEAP32[i37 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i49, i28, i19, HEAP32[(HEAP32[(HEAP32[(HEAP32[i38 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i57 >> 2] = HEAP32[i49 >> 2];
    HEAP32[i20 >> 2] = HEAP32[i21 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i50, i30, i20, HEAP32[(HEAP32[(HEAP32[(HEAP32[i38 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i68 = HEAP32[i50 >> 2] | 0;
    i69 = i67;
    break;
   }
  }
 } while (0);
 i67 = i51 | 0;
 HEAP32[i67 >> 2] = (HEAP32[i56 >> 2] | 0) + i68;
 __ZN7WebCoreL33computeLogicalTopPositionedOffsetERNS_10LayoutUnitEPKNS_9RenderBoxES0_PKNS_20RenderBoxModelObjectES0_(i51, i1, HEAP32[i33 >> 2] | 0, i53, HEAP32[i21 >> 2] | 0);
 HEAP32[i2 + 4 >> 2] = HEAP32[i67 >> 2];
 if ((HEAP8[i55] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i32);
 }
 if ((HEAP8[i31] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i30);
 }
 if ((HEAP8[i28 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i28);
 }
 if ((HEAP8[i69] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i26);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox33computeReplacedLogicalHeightUsingENS_6LengthE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, d60 = +0, i61 = 0, i62 = 0, i63 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 160 | 0;
 i26 = i4 + 168 | 0;
 i27 = i4 + 176 | 0;
 i28 = i4 + 200 | 0;
 i29 = i4 + 208 | 0;
 i30 = i4 + 216 | 0;
 i31 = i4 + 224 | 0;
 i32 = i4 + 232 | 0;
 i33 = i4 + 240 | 0;
 i34 = i4 + 248 | 0;
 switch (HEAPU8[i3 + 5 | 0] | 0) {
 case 2:
 case 10:
  {
   i35 = i2 | 0;
   i36 = i2 + 20 | 0;
   if ((HEAP32[i36 >> 2] & 25165824 | 0) == 16777216) {
    i37 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i35, 0, 0) | 0;
   } else {
    i37 = __ZNK7WebCore12RenderObject15containingBlockEv(i35) | 0;
   }
   i35 = HEAP32[i37 + 20 >> 2] | 0;
   L13 : do {
    if ((i35 & 128 | 0) == 0) {
     i38 = i37;
     i39 = i35;
    } else {
     i40 = i37;
     i41 = i35;
     while (1) {
      if ((i41 & 768 | 0) == 768) {
       i38 = i40;
       i39 = i41;
       break L13;
      }
      i42 = __ZNK7WebCore12RenderObject15containingBlockEv(i40 | 0) | 0;
      i43 = i42 | 0;
      __ZN7WebCore11RenderBlock26addPercentHeightDescendantERNS_9RenderBoxE(i42, i2);
      i44 = HEAP32[i42 + 20 >> 2] | 0;
      if ((i44 & 128 | 0) == 0) {
       i38 = i43;
       i39 = i44;
       break;
      } else {
       i40 = i43;
       i41 = i44;
      }
     }
    }
   } while (0);
   do {
    if ((i39 & 25165824 | 0) == 16777216) {
     i35 = i38 + 36 | 0;
     i37 = HEAP32[i35 >> 2] | 0;
     if ((HEAP8[(HEAP32[i37 + 4 >> 2] | 0) + 17 | 0] | 0) != 0) {
      break;
     }
     i41 = HEAP32[i37 + 16 >> 2] | 0;
     if ((HEAP8[i41 + 25 | 0] | 0) == 0) {
      break;
     }
     if ((HEAP8[i41 + 33 | 0] | 0) == 0) {
      break;
     }
     _memset(i27 | 0, 0, 24) | 0;
     i41 = i38;
     i37 = HEAP32[(HEAP32[i38 >> 2] | 0) + 884 >> 2] | 0;
     i40 = (HEAP32[(HEAP32[i35 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i40 | 0) == 3 | (i40 | 0) == 0) {
      HEAP32[i28 >> 2] = HEAP32[i38 + 56 >> 2];
     } else {
      HEAP32[i28 >> 2] = HEAP32[i38 + 52 >> 2];
     }
     HEAP32[i29 >> 2] = 0;
     FUNCTION_TABLE_viiii[i37 & 31](i41, i28, i29, i27);
     i37 = i38;
     i40 = i38;
     i44 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 752 >> 2] & 511](i37) | 0;
     i43 = i38;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 720 >> 2] & 127](i11, i37);
     i42 = HEAP32[i11 >> 2] | 0;
     i45 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 756 >> 2] & 511](i37) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 724 >> 2] & 127](i10, i37);
     i46 = (HEAP32[i27 >> 2] | 0) - (i42 + i44 + i45 + (HEAP32[i10 >> 2] | 0)) | 0;
     i45 = (HEAP32[(HEAP32[i35 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     do {
      if ((i45 | 0) == 3 | (i45 | 0) == 0) {
       if ((HEAP32[i38 + 20 >> 2] & 65536 | 0) == 0) {
        i47 = 0;
        break;
       }
       i44 = i38 + 40 | 0;
       if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i44 >> 2] | 0) | 0) {
        i47 = 0;
        break;
       }
       if ((((HEAP32[(HEAP32[i35 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
        i47 = 0;
        break;
       }
       i47 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i44 >> 2] | 0, 0) | 0;
      } else {
       i47 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i38 >> 2] | 0) + 908 >> 2] & 511](i41) | 0;
      }
     } while (0);
     i41 = i46 - i47 | 0;
     if ((HEAP32[(HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
      i48 = i41;
     } else {
      i45 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 752 >> 2] & 511](i37) | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 720 >> 2] & 127](i9, i37);
      i44 = HEAP32[i9 >> 2] | 0;
      i42 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 756 >> 2] & 511](i37) | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 724 >> 2] & 127](i8, i37);
      i48 = i41 - (i44 + i45 + i42 + (HEAP32[i8 >> 2] | 0)) | 0;
     }
     HEAP32[i7 >> 2] = (i48 | 0) > 0 ? i48 : 0;
     __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i30, i3, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
     i42 = HEAP32[i30 >> 2] | 0;
     if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
      i49 = i42;
     } else {
      i45 = i2 | 0;
      i44 = i2;
      i41 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i44 >> 2] | 0) + 752 >> 2] & 511](i45) | 0;
      i50 = i2;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i50 >> 2] | 0) + 720 >> 2] & 127](i6, i45);
      i51 = HEAP32[i6 >> 2] | 0;
      i52 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i44 >> 2] | 0) + 756 >> 2] & 511](i45) | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i50 >> 2] | 0) + 724 >> 2] & 127](i5, i45);
      i49 = i42 - (i51 + i41 + i52 + (HEAP32[i5 >> 2] | 0)) | 0;
     }
     HEAP32[i1 >> 2] = (i49 | 0) > 0 ? i49 : 0;
     STACKTOP = i4;
     return;
    }
   } while (0);
   L42 : do {
    if ((HEAP32[i36 >> 2] & 25165824 | 0) == 16777216) {
     __ZNK7WebCore9RenderBox41containingBlockLogicalHeightForPositionedEPKNS_20RenderBoxModelObjectEb(i31, i2, i38, 1);
     i53 = HEAP32[i31 >> 2] | 0;
    } else {
     __ZNK7WebCore9RenderBox38containingBlockLogicalHeightForContentENS_26AvailableLogicalHeightTypeE(i32, i2, 1);
     i49 = HEAP32[i32 >> 2] | 0;
     if ((i38 | 0) == 0) {
      i53 = i49;
      break;
     } else {
      i54 = i38;
     }
     while (1) {
      i5 = i54 | 0;
      if ((HEAP32[i54 + 20 >> 2] & 768 | 0) == 768) {
       i53 = i49;
       break L42;
      }
      i6 = HEAP32[i54 + 36 >> 2] | 0;
      i30 = (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3;
      if ((i30 | 0) == 3 | (i30 | 0) == 0) {
       i7 = HEAP32[i6 + 4 >> 2] | 0;
       i55 = i7 + 12 | 0;
       i56 = i7;
      } else {
       i7 = HEAP32[i6 + 4 >> 2] | 0;
       i55 = i7 + 4 | 0;
       i56 = i7;
      }
      if ((HEAP8[i55 + 5 | 0] | 0) != 0) {
       if ((i30 | 0) == 3 | (i30 | 0) == 0) {
        i57 = i56 + 12 | 0;
       } else {
        i57 = i56 + 4 | 0;
       }
       i30 = HEAP8[i57 + 5 | 0] | 0;
       if (!((i30 << 24 >> 24 | 0) == 10 | (i30 << 24 >> 24 | 0) == 2)) {
        i53 = i49;
        break L42;
       }
      }
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i54 >> 2] | 0) + 188 >> 2] & 511](i5) | 0) {
       break;
      }
      __ZN7WebCore11RenderBlock26addPercentHeightDescendantERNS_9RenderBoxE(i54, i2);
      i30 = __ZNK7WebCore12RenderObject15containingBlockEv(i5) | 0;
      if ((i30 | 0) == 0) {
       i53 = i49;
       break L42;
      } else {
       i54 = i30 | 0;
      }
     }
     i37 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     i43 = HEAP32[(HEAP32[i2 >> 2] | 0) + 888 >> 2] | 0;
     if ((i37 | 0) == 3 | (i37 | 0) == 0) {
      FUNCTION_TABLE_vii[i43 & 127](i12, i2);
      i58 = HEAP32[i12 + 4 >> 2] | 0;
     } else {
      FUNCTION_TABLE_vii[i43 & 127](i13, i2);
      i58 = HEAP32[i13 >> 2] | 0;
     }
     i43 = i2 | 0;
     i37 = i2;
     i40 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 752 >> 2] & 511](i43) | 0;
     i35 = i2;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 720 >> 2] & 127](i15, i43);
     i46 = HEAP32[i15 >> 2] | 0;
     i30 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 756 >> 2] & 511](i43) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i35 >> 2] | 0) + 724 >> 2] & 127](i14, i43);
     HEAP32[i16 >> 2] = ((i49 | 0) < (i58 | 0) ? i58 : i49) - (i46 + i40 + i30 + (HEAP32[i14 >> 2] | 0));
     __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i3, i16, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
     STACKTOP = i4;
     return;
    }
   } while (0);
   HEAP32[i17 >> 2] = i53;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i33, i3, i17, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i17 = HEAP32[i33 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
    i59 = i17;
   } else {
    i33 = i2 | 0;
    i53 = i2;
    i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i53 >> 2] | 0) + 752 >> 2] & 511](i33) | 0;
    i14 = i2;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 720 >> 2] & 127](i19, i33);
    i58 = HEAP32[i19 >> 2] | 0;
    i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i53 >> 2] | 0) + 756 >> 2] & 511](i33) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 724 >> 2] & 127](i18, i33);
    i59 = i17 - (i58 + i16 + i19 + (HEAP32[i18 >> 2] | 0)) | 0;
   }
   HEAP32[i1 >> 2] = (i59 | 0) > 0 ? i59 : 0;
   STACKTOP = i4;
   return;
  }
 case 3:
  {
   if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
    d60 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d60 = +HEAPF32[i3 >> 2];
   }
   do {
    if (d60 < +2147483647) {
     if (d60 <= +-2147483648) {
      i61 = -2147483648;
      break;
     }
     i61 = ~~d60;
    } else {
     i61 = 2147483647;
    }
   } while (0);
   if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
    i62 = i61;
   } else {
    i59 = i2 | 0;
    i18 = i2;
    i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 752 >> 2] & 511](i59) | 0;
    i16 = i2;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 720 >> 2] & 127](i22, i59);
    i58 = HEAP32[i22 >> 2] | 0;
    i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 756 >> 2] & 511](i59) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 724 >> 2] & 127](i21, i59);
    i62 = i61 - (i58 + i19 + i22 + (HEAP32[i21 >> 2] | 0)) | 0;
   }
   HEAP32[i1 >> 2] = (i62 | 0) > 0 ? i62 : 0;
   STACKTOP = i4;
   return;
  }
 case 11:
 case 12:
 case 13:
 case 14:
  {
   HEAP32[i20 >> 2] = 0;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i34, i3, i20, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i20 = HEAP32[i34 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
    i63 = i20;
   } else {
    i34 = i2 | 0;
    i3 = i2;
    i62 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 752 >> 2] & 511](i34) | 0;
    i21 = i2;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 720 >> 2] & 127](i24, i34);
    i22 = HEAP32[i24 >> 2] | 0;
    i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 756 >> 2] & 511](i34) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 724 >> 2] & 127](i23, i34);
    i63 = i20 - (i22 + i62 + i24 + (HEAP32[i23 >> 2] | 0)) | 0;
   }
   HEAP32[i1 >> 2] = (i63 | 0) > 0 ? i63 : 0;
   STACKTOP = i4;
   return;
  }
 default:
  {
   i63 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   i23 = HEAP32[(HEAP32[i2 >> 2] | 0) + 888 >> 2] | 0;
   if ((i63 | 0) == 3 | (i63 | 0) == 0) {
    FUNCTION_TABLE_vii[i23 & 127](i25, i2);
    HEAP32[i1 >> 2] = HEAP32[i25 + 4 >> 2];
    STACKTOP = i4;
    return;
   } else {
    FUNCTION_TABLE_vii[i23 & 127](i26, i2);
    HEAP32[i1 >> 2] = HEAP32[i26 >> 2];
    STACKTOP = i4;
    return;
   }
  }
 }
}
function __ZNK7WebCore9RenderBox27availableLogicalHeightUsingERKNS_6LengthENS_26AvailableLogicalHeightTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, d55 = +0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 160 | 0;
 i25 = i5 + 168 | 0;
 i26 = i5 + 176 | 0;
 i27 = i5 + 184 | 0;
 i28 = i5 + 192 | 0;
 i29 = i2 | 0;
 i30 = i2;
 i31 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 188 >> 2] & 511](i29) | 0;
 i32 = HEAP8[i3 + 5 | 0] | 0;
 do {
  if (i31) {
   if (!((i32 << 24 >> 24 | 0) == 0 | (i32 << 24 >> 24 | 0) == 10 | (i32 << 24 >> 24 | 0) == 2)) {
    break;
   }
   i33 = HEAP32[H_BASE + 1064 >> 2] | 0;
   L4 : do {
    if ((i33 | 0) != 0) {
     i34 = HEAP32[i33 >> 2] | 0;
     if ((i34 | 0) == 0) {
      break;
     }
     i35 = HEAP32[i33 + 8 >> 2] | 0;
     i36 = i2;
     i37 = i36 + ~(i36 << 15) | 0;
     i36 = (i37 >>> 10 ^ i37) * 9 & -1;
     i37 = i36 >>> 6 ^ i36;
     i36 = i37 + ~(i37 << 11) | 0;
     i37 = i36 >>> 16 ^ i36;
     i36 = i35 & i37;
     i38 = i34 + (i36 << 3) | 0;
     i39 = HEAP32[i38 >> 2] | 0;
     i40 = (i39 | 0) == (i2 | 0);
     if (i40) {
      i41 = i38;
     } else {
      i42 = (i37 >>> 23) + ~i37 | 0;
      i43 = i42 << 12 ^ i42;
      i42 = i43 >>> 7 ^ i43;
      i43 = i42 << 2 ^ i42;
      i42 = i43 >>> 20 ^ i43 | 1;
      i43 = 0;
      i44 = i36;
      i45 = i39;
      while (1) {
       if ((i45 | 0) == 0) {
        break L4;
       }
       i46 = (i43 | 0) == 0 ? i42 : i43;
       i47 = i46 + i44 & i35;
       i48 = i34 + (i47 << 3) | 0;
       i49 = HEAP32[i48 >> 2] | 0;
       if ((i49 | 0) == (i2 | 0)) {
        i41 = i48;
        break;
       } else {
        i43 = i46;
        i44 = i47;
        i45 = i49;
       }
      }
     }
     if ((i41 | 0) == 0) {
      break;
     }
     L14 : do {
      if (i40) {
       i50 = i38;
       i51 = 14;
      } else {
       i45 = (i37 >>> 23) + ~i37 | 0;
       i44 = i45 << 12 ^ i45;
       i45 = i44 >>> 7 ^ i44;
       i44 = i45 << 2 ^ i45;
       i45 = i44 >>> 20 ^ i44 | 1;
       i44 = 0;
       i43 = i36;
       i42 = i39;
       while (1) {
        if ((i42 | 0) == 0) {
         break L14;
        }
        i49 = (i44 | 0) == 0 ? i45 : i44;
        i47 = i49 + i43 & i35;
        i46 = i34 + (i47 << 3) | 0;
        i48 = HEAP32[i46 >> 2] | 0;
        if ((i48 | 0) == (i2 | 0)) {
         i50 = i46;
         i51 = 14;
         break;
        } else {
         i44 = i49;
         i43 = i47;
         i42 = i48;
        }
       }
      }
     } while (0);
     do {
      if ((i51 | 0) == 14) {
       if ((i50 | 0) == 0) {
        break;
       }
       HEAP32[i1 >> 2] = HEAP32[i50 + 4 >> 2];
       STACKTOP = i5;
       return;
      }
     } while (0);
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i5;
     return;
    }
   } while (0);
   i33 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i33 | 0) == 3 | (i33 | 0) == 0) {
    i52 = i2 + 56 | 0;
   } else {
    i52 = i2 + 52 | 0;
   }
   i33 = HEAP32[i52 >> 2] | 0;
   i34 = i2 | 0;
   i35 = i2;
   i39 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 752 >> 2] & 511](i34) | 0;
   i36 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i36 >> 2] | 0) + 720 >> 2] & 127](i17, i34);
   i37 = HEAP32[i17 >> 2] | 0;
   i38 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 756 >> 2] & 511](i34) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i36 >> 2] | 0) + 724 >> 2] & 127](i16, i34);
   HEAP32[i1 >> 2] = i33 - i39 - i37 - i38 - (HEAP32[i16 >> 2] | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i16 = i3 + 5 | 0;
 if ((i32 << 24 >> 24 | 0) == 10 | (i32 << 24 >> 24 | 0) == 2) {
  do {
   if ((HEAP32[i2 + 20 >> 2] & 25165824 | 0) == 16777216) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 248 >> 2] & 511](i29) | 0) {
     break;
    }
    __ZNK7WebCore9RenderBox41containingBlockLogicalHeightForPositionedEPKNS_20RenderBoxModelObjectEb(i20, i2, __ZNK7WebCore12RenderObject15containingBlockEv(i29) | 0, 1);
    HEAP32[i15 >> 2] = HEAP32[i20 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i21, i3, i15, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i17 = HEAP32[i21 >> 2] | 0;
    if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
     i53 = i17;
    } else {
     i52 = i2 | 0;
     i50 = i2;
     i51 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i50 >> 2] | 0) + 752 >> 2] & 511](i52) | 0;
     i41 = i2;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i41 >> 2] | 0) + 720 >> 2] & 127](i14, i52);
     i31 = HEAP32[i14 >> 2] | 0;
     i38 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i50 >> 2] | 0) + 756 >> 2] & 511](i52) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i41 >> 2] | 0) + 724 >> 2] & 127](i13, i52);
     i53 = i17 - (i31 + i51 + i38 + (HEAP32[i13 >> 2] | 0)) | 0;
    }
    HEAP32[i1 >> 2] = (i53 | 0) > 0 ? i53 : 0;
    STACKTOP = i5;
    return;
   }
  } while (0);
  i54 = HEAP8[i16] | 0;
 } else {
  i54 = i32;
 }
 do {
  if ((i54 << 24 >> 24 | 0) == 10 | (i54 << 24 >> 24 | 0) == 2) {
   __ZNK7WebCore9RenderBox30computePercentageLogicalHeightERKNS_6LengthE(i22, i2, i3);
  } else if ((i54 << 24 >> 24 | 0) == 3) {
   if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
    d55 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d55 = +HEAPF32[i3 >> 2];
   }
   do {
    if (d55 < +2147483647) {
     if (d55 <= +-2147483648) {
      i56 = -2147483648;
      break;
     }
     i56 = ~~d55;
    } else {
     i56 = 2147483647;
    }
   } while (0);
   HEAP32[i22 >> 2] = i56;
  } else {
   if ((i54 - 11 & 255) >>> 0 < 4 >>> 0) {
    HEAP32[i12 >> 2] = 0;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i22, i3, i12, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    break;
   } else {
    HEAP32[i22 >> 2] = -1;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i22 >> 2] | 0;
 if ((i12 | 0) != -1) {
  i22 = i2 + 36 | 0;
  i3 = HEAP32[i22 >> 2] | 0;
  if ((HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
   i57 = i12;
   i58 = i3;
  } else {
   i3 = i2 | 0;
   i54 = i2;
   i56 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i54 >> 2] | 0) + 752 >> 2] & 511](i3) | 0;
   i32 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i32 >> 2] | 0) + 720 >> 2] & 127](i11, i3);
   i16 = HEAP32[i11 >> 2] | 0;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i54 >> 2] | 0) + 756 >> 2] & 511](i3) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i32 >> 2] | 0) + 724 >> 2] & 127](i10, i3);
   i57 = i12 - (i16 + i56 + i11 + (HEAP32[i10 >> 2] | 0)) | 0;
   i58 = HEAP32[i22 >> 2] | 0;
  }
  i10 = (i57 | 0) > 0 ? i57 : 0;
  i57 = (HEAP32[i58 + 44 >> 2] | 0) >>> 13 & 3;
  do {
   if ((i57 | 0) == 3 | (i57 | 0) == 0) {
    if ((HEAP32[i2 + 20 >> 2] & 65536 | 0) == 0) {
     i59 = 0;
     break;
    }
    i58 = i2 + 40 | 0;
    if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i58 >> 2] | 0) | 0) {
     i59 = 0;
     break;
    }
    if ((((HEAP32[(HEAP32[i22 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
     i59 = 0;
     break;
    }
    i59 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i58 >> 2] | 0, 0) | 0;
   } else {
    i59 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0;
   }
  } while (0);
  i22 = i10 - i59 | 0;
  HEAP32[i1 >> 2] = (i22 | 0) > 0 ? i22 : 0;
  STACKTOP = i5;
  return;
 }
 do {
  if ((HEAP32[i2 + 24 >> 2] & 16 | 0) != 0) {
   i22 = i2 + 20 | 0;
   if ((HEAP32[i22 >> 2] & 25165824 | 0) != 16777216) {
    break;
   }
   i59 = i2 + 36 | 0;
   i10 = HEAP32[i59 >> 2] | 0;
   if ((HEAP8[(HEAP32[i10 + 4 >> 2] | 0) + 17 | 0] | 0) != 0) {
    break;
   }
   i57 = HEAP32[i10 + 16 >> 2] | 0;
   if ((HEAP8[i57 + 25 | 0] | 0) == 0) {
    break;
   }
   if ((HEAP8[i57 + 33 | 0] | 0) == 0) {
    break;
   }
   _memset(i23 | 0, 0, 24) | 0;
   i57 = HEAP32[(HEAP32[i2 >> 2] | 0) + 884 >> 2] | 0;
   i58 = (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i58 | 0) == 3 | (i58 | 0) == 0) {
    HEAP32[i24 >> 2] = HEAP32[i2 + 56 >> 2];
   } else {
    HEAP32[i24 >> 2] = HEAP32[i2 + 52 >> 2];
   }
   HEAP32[i25 >> 2] = 0;
   FUNCTION_TABLE_viiii[i57 & 31](i2, i24, i25, i23);
   i57 = i2 | 0;
   i58 = i2;
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 752 >> 2] & 511](i57) | 0;
   i11 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 720 >> 2] & 127](i7, i57);
   i56 = HEAP32[i7 >> 2] | 0;
   i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 756 >> 2] & 511](i57) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 724 >> 2] & 127](i6, i57);
   i12 = (HEAP32[i23 >> 2] | 0) - (i56 + i10 + i16 + (HEAP32[i6 >> 2] | 0)) | 0;
   i16 = (HEAP32[(HEAP32[i59 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   do {
    if ((i16 | 0) == 3 | (i16 | 0) == 0) {
     if ((HEAP32[i22 >> 2] & 65536 | 0) == 0) {
      i60 = 0;
      break;
     }
     i10 = i2 + 40 | 0;
     if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i10 >> 2] | 0) | 0) {
      i60 = 0;
      break;
     }
     if ((((HEAP32[(HEAP32[i59 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
      i60 = 0;
      break;
     }
     i60 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i10 >> 2] | 0, 0) | 0;
    } else {
     i60 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0;
    }
   } while (0);
   i22 = i12 - i60 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
    i61 = i22;
   } else {
    i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 752 >> 2] & 511](i57) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 720 >> 2] & 127](i9, i57);
    i10 = HEAP32[i9 >> 2] | 0;
    i56 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 756 >> 2] & 511](i57) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 724 >> 2] & 127](i8, i57);
    i61 = i22 - (i10 + i16 + i56 + (HEAP32[i8 >> 2] | 0)) | 0;
   }
   HEAP32[i1 >> 2] = (i61 | 0) > 0 ? i61 : 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZNK7WebCore9RenderBox38containingBlockLogicalHeightForContentENS_26AvailableLogicalHeightTypeE(i26, i2, i4);
 if ((i4 | 0) == 0) {
  i4 = i2 + 60 | 0;
  i61 = i2 + 36 | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i27, i4, (HEAP32[(HEAP32[i61 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i28, i4, (HEAP32[(HEAP32[i61 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i61 = HEAP32[i27 >> 2] | 0;
  i27 = HEAP32[i28 >> 2] | 0;
  i28 = i2 | 0;
  i4 = i2;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 752 >> 2] & 511](i28) | 0;
  i9 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 720 >> 2] & 127](i19, i28);
  i2 = HEAP32[i19 >> 2] | 0;
  i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 756 >> 2] & 511](i28) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 724 >> 2] & 127](i18, i28);
  i28 = i26 | 0;
  i9 = (HEAP32[i28 >> 2] | 0) - (i27 + i61 + i8 + i2 + i19 + (HEAP32[i18 >> 2] | 0)) | 0;
  HEAP32[i28 >> 2] = i9;
  i62 = i9;
 } else {
  i62 = HEAP32[i26 >> 2] | 0;
 }
 HEAP32[i1 >> 2] = i62;
 STACKTOP = i5;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_iiiifi + 2;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_iiiifi + 4;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_vi + 14;
}
function __ZNK7WebCore9RenderBox40containingBlockLogicalWidthForPositionedEPKNS_20RenderBoxModelObjectEPNS_12RenderRegionEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, i23 = 0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 40 | 0;
 i11 = i2 | 0;
 i12 = i2 + 4 | 0;
 i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 i14 = i2 + 36 | 0;
 do {
  if ((HEAP32[(HEAP32[i14 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 25165824) {
   if ((HEAP32[(__ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i11, 0, 0) | 0) + 20 >> 2] & 768 | 0) != 768) {
    break;
   }
   if (!(__ZNK7WebCore9FrameView34fixedElementsLayoutRelativeToFrameEv(i13) | 0)) {
    break;
   }
   i15 = i13 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 20 >> 2] & 8192 | 0) == 0) {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i13 >> 2] | 0) + 164 >> 2] & 63](i7, i15, 0);
    i16 = HEAP32[i7 + 12 >> 2] | 0;
   } else {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i13 >> 2] | 0) + 164 >> 2] & 63](i8, i15, 0);
    i16 = HEAP32[i8 + 8 >> 2] | 0;
   }
   d17 = +(i16 | 0) / +__ZNK7WebCore5Frame16frameScaleFactorEv(HEAP32[i13 + 216 >> 2] | 0);
   do {
    if (d17 < +2147483647) {
     if (d17 <= +-2147483648) {
      i18 = -2147483648;
      break;
     }
     i18 = ~~d17;
    } else {
     i18 = 2147483647;
    }
   } while (0);
   HEAP32[i1 >> 2] = i18;
   STACKTOP = i6;
   return;
  }
 } while (0);
 i18 = HEAP32[i3 + 20 >> 2] | 0;
 do {
  if (i5) {
   if (!((i18 & 8192 | 0) != 0 ^ (HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0)) {
    break;
   }
   __ZNK7WebCore9RenderBox41containingBlockLogicalHeightForPositionedEPKNS_20RenderBoxModelObjectEb(i1, i2, i3, 0);
   STACKTOP = i6;
   return;
  }
 } while (0);
 i13 = i3 | 0;
 i16 = i3 + 20 | 0;
 if ((i18 & 512 | 0) != 0) {
  do {
   if ((HEAP32[i2 + 20 >> 2] & 805306368 | 0) != 0) {
    i18 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i11) | 0;
    if ((i18 | 0) == 0) {
     break;
    }
    i8 = i3;
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 252 >> 2] & 511](i13) | 0) {
      if ((HEAP32[(HEAP32[i14 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 25165824) {
       break;
      }
      __ZNK7WebCore9RenderBox18clientLogicalWidthEv(i1, HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
      STACKTOP = i6;
      return;
     }
    } while (0);
    i7 = i3;
    do {
     if ((i4 | 0) == 0) {
      if (!((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 248 >> 2] & 511](i13) | 0) ^ 1 | i5)) {
       __ZNK7WebCore16RenderFlowThread32contentLogicalWidthOfFirstRegionEv(i1, i3);
       STACKTOP = i6;
       return;
      }
      i12 = HEAP32[i2 + 8 >> 2] | 0;
      if ((i12 | 0) != 0) {
       if (((HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) == 0) {
        break;
       }
      }
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 864 >> 2] & 127](i9, i7);
      i12 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i7, i9) | 0;
      if ((i12 | 0) == 0) {
       break;
      }
      i19 = __ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i3, i12, 0) | 0;
      i20 = 30;
     } else {
      if ((HEAP32[i18 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i16 >> 2] & 8192 | 0) != 0) {
       break;
      }
      i12 = i3;
      i19 = __ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i12, __ZNK7WebCore9RenderBox25clampToStartAndEndRegionsEPNS_12RenderRegionE(i12, i4) | 0, 0) | 0;
      i20 = 30;
     }
    } while (0);
    do {
     if ((i20 | 0) == 30) {
      if ((i19 | 0) == 0) {
       break;
      }
      __ZNK7WebCore9RenderBox18clientLogicalWidthEv(i10, i3);
      i18 = (HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((i18 | 0) == 3 | (i18 | 0) == 0) {
       i21 = i3 + 52 | 0;
      } else {
       i21 = i3 + 56 | 0;
      }
      i18 = (HEAP32[i10 >> 2] | 0) + ((HEAP32[i19 + 4 >> 2] | 0) - (HEAP32[i21 >> 2] | 0)) | 0;
      HEAP32[i1 >> 2] = (i18 | 0) > 0 ? i18 : 0;
      STACKTOP = i6;
      return;
     }
    } while (0);
    __ZNK7WebCore9RenderBox18clientLogicalWidthEv(i1, i3);
    STACKTOP = i6;
    return;
   }
  } while (0);
  __ZNK7WebCore9RenderBox18clientLogicalWidthEv(i1, i3);
  STACKTOP = i6;
  return;
 }
 i21 = HEAP32[i3 + 44 >> 2] | 0;
 i19 = HEAP32[i3 + 48 >> 2] | 0;
 if ((i21 | 0) == 0 | (i19 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i10 = HEAP32[i21 + 32 >> 2] | 0;
 i20 = (i10 & 2048 | 0) == 0;
 d17 = +HEAPF32[(i20 ? i21 + 24 | 0 : i21 + 20 | 0) >> 2];
 do {
  if ((HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
   d22 = d17 + +HEAPF32[i21 + 28 >> 2];
   do {
    if ((HEAP32[i21 + 56 >> 2] & 2 | 0) == 0) {
     i23 = 0;
    } else {
     i4 = HEAP32[i21 + 16 >> 2] | 0;
     i16 = i4;
     do {
      if ((i10 & 1 | 0) == 0) {
       i24 = HEAP32[i4 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i4 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i24 = HEAP32[i4 + 36 >> 2] | 0;
        break;
       } else {
        i24 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i16) | 0;
        break;
       }
      }
     } while (0);
     i16 = HEAP32[i24 + 16 >> 2] | 0;
     i4 = (HEAP32[(HEAP32[i16 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
     if (i20) {
      i9 = HEAP32[i16 + 128 >> 2] | 0;
      if (i4) {
       if ((i9 & 1879048192) >>> 0 < 268435456 >>> 0) {
        i23 = 0;
        break;
       }
      }
      i23 = i9 >>> 1 & 67108863;
      break;
     } else {
      i9 = HEAP32[i16 + 112 >> 2] | 0;
      if (i4) {
       if ((i9 & 1879048192) >>> 0 < 268435456 >>> 0) {
        i23 = 0;
        break;
       }
      }
      i23 = i9 >>> 1 & 67108863;
      break;
     }
    }
   } while (0);
   d25 = d22 - +(i23 | 0);
   do {
    if (d25 < +2147483647) {
     if (d25 <= +-2147483648) {
      i26 = -2147483648;
      break;
     }
     i26 = ~~d25;
    } else {
     i26 = 2147483647;
    }
   } while (0);
   i9 = HEAP32[i19 + 32 >> 2] | 0;
   i4 = (i9 & 2048 | 0) == 0;
   d25 = +HEAPF32[(i4 ? i19 + 24 | 0 : i19 + 20 | 0) >> 2];
   do {
    if ((HEAP32[i19 + 56 >> 2] & 1 | 0) == 0) {
     i27 = 0;
    } else {
     i16 = HEAP32[i19 + 16 >> 2] | 0;
     i14 = i16;
     do {
      if ((i9 & 1 | 0) == 0) {
       i28 = HEAP32[i16 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i16 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i28 = HEAP32[i16 + 36 >> 2] | 0;
        break;
       } else {
        i28 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i14) | 0;
        break;
       }
      }
     } while (0);
     i14 = HEAP32[i28 + 16 >> 2] | 0;
     i16 = (HEAP32[(HEAP32[i14 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
     if (i4) {
      i2 = HEAP32[i14 + 120 >> 2] | 0;
      if (i16) {
       if ((i2 & 1879048192) >>> 0 < 268435456 >>> 0) {
        i27 = 0;
        break;
       }
      }
      i27 = i2 >>> 1 & 67108863;
      break;
     } else {
      i2 = HEAP32[i14 + 104 >> 2] | 0;
      if (i16) {
       if ((i2 & 1879048192) >>> 0 < 268435456 >>> 0) {
        i27 = 0;
        break;
       }
      }
      i27 = i2 >>> 1 & 67108863;
      break;
     }
    }
   } while (0);
   d22 = d25 + +(i27 | 0);
   if (d22 >= +2147483647) {
    i29 = i26;
    i30 = 2147483647;
    break;
   }
   if (d22 <= +-2147483648) {
    i29 = i26;
    i30 = -2147483648;
    break;
   }
   i29 = i26;
   i30 = ~~d22;
  } else {
   do {
    if ((HEAP32[i21 + 56 >> 2] & 1 | 0) == 0) {
     i31 = 0;
    } else {
     i4 = HEAP32[i21 + 16 >> 2] | 0;
     i9 = i4;
     do {
      if ((i10 & 1 | 0) == 0) {
       i32 = HEAP32[i4 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i4 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i32 = HEAP32[i4 + 36 >> 2] | 0;
        break;
       } else {
        i32 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i9) | 0;
        break;
       }
      }
     } while (0);
     i9 = HEAP32[i32 + 16 >> 2] | 0;
     i4 = (HEAP32[(HEAP32[i9 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
     if (i20) {
      i2 = HEAP32[i9 + 120 >> 2] | 0;
      if (i4) {
       if ((i2 & 1879048192) >>> 0 < 268435456 >>> 0) {
        i31 = 0;
        break;
       }
      }
      i31 = i2 >>> 1 & 67108863;
      break;
     } else {
      i2 = HEAP32[i9 + 104 >> 2] | 0;
      if (i4) {
       if ((i2 & 1879048192) >>> 0 < 268435456 >>> 0) {
        i31 = 0;
        break;
       }
      }
      i31 = i2 >>> 1 & 67108863;
      break;
     }
    }
   } while (0);
   d25 = d17 + +(i31 | 0);
   do {
    if (d25 < +2147483647) {
     if (d25 <= +-2147483648) {
      i33 = -2147483648;
      break;
     }
     i33 = ~~d25;
    } else {
     i33 = 2147483647;
    }
   } while (0);
   i2 = HEAP32[i19 + 32 >> 2] | 0;
   i4 = (i2 & 2048 | 0) == 0;
   d25 = +HEAPF32[(i4 ? i19 + 24 | 0 : i19 + 20 | 0) >> 2] + +HEAPF32[i19 + 28 >> 2];
   do {
    if ((HEAP32[i19 + 56 >> 2] & 2 | 0) == 0) {
     i34 = 0;
    } else {
     i9 = HEAP32[i19 + 16 >> 2] | 0;
     i16 = i9;
     do {
      if ((i2 & 1 | 0) == 0) {
       i35 = HEAP32[i9 + 36 >> 2] | 0;
      } else {
       if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i9 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
        i35 = HEAP32[i9 + 36 >> 2] | 0;
        break;
       } else {
        i35 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i16) | 0;
        break;
       }
      }
     } while (0);
     i16 = HEAP32[i35 + 16 >> 2] | 0;
     i9 = (HEAP32[(HEAP32[i16 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
     if (i4) {
      i14 = HEAP32[i16 + 128 >> 2] | 0;
      if (i9) {
       if ((i14 & 1879048192) >>> 0 < 268435456 >>> 0) {
        i34 = 0;
        break;
       }
      }
      i34 = i14 >>> 1 & 67108863;
      break;
     } else {
      i14 = HEAP32[i16 + 112 >> 2] | 0;
      if (i9) {
       if ((i14 & 1879048192) >>> 0 < 268435456 >>> 0) {
        i34 = 0;
        break;
       }
      }
      i34 = i14 >>> 1 & 67108863;
      break;
     }
    }
   } while (0);
   d22 = d25 - +(i34 | 0);
   if (d22 >= +2147483647) {
    i29 = 2147483647;
    i30 = i33;
    break;
   }
   if (d22 <= +-2147483648) {
    i29 = -2147483648;
    i30 = i33;
    break;
   }
   i29 = ~~d22;
   i30 = i33;
  }
 } while (0);
 i33 = i29 - i30 | 0;
 HEAP32[i1 >> 2] = (i33 | 0) > 0 ? i33 : 0;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore9RenderBox35computePositionedLogicalHeightUsingENS_6LengthEPKNS_20RenderBoxModelObjectENS_10LayoutUnitES5_S5_S1_S1_S1_S1_RNS0_27LogicalExtentComputedValuesE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 328 | 0;
 i13 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i13 >> 2];
 i13 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i13 >> 2];
 i13 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i13 >> 2];
 i13 = i12 | 0;
 i14 = i12 + 8 | 0;
 i15 = i12 + 16 | 0;
 i16 = i12 + 24 | 0;
 i17 = i12 + 32 | 0;
 i18 = i12 + 40 | 0;
 i19 = i12 + 48 | 0;
 i20 = i12 + 56 | 0;
 i21 = i12 + 64 | 0;
 i22 = i12 + 72 | 0;
 i23 = i12 + 80 | 0;
 i24 = i12 + 88 | 0;
 i25 = i12 + 96 | 0;
 i26 = i12 + 104 | 0;
 i27 = i12 + 112 | 0;
 i28 = i12 + 120 | 0;
 i29 = i12 + 128 | 0;
 i30 = i12 + 136 | 0;
 i31 = i12 + 144 | 0;
 i32 = i12 + 152 | 0;
 i33 = i12 + 160 | 0;
 i34 = i12 + 168 | 0;
 i35 = i12 + 176 | 0;
 i36 = i12 + 184 | 0;
 i37 = i12 + 192 | 0;
 i38 = i12 + 200 | 0;
 i39 = i12 + 208 | 0;
 i40 = i12 + 216 | 0;
 i41 = i12 + 224 | 0;
 i42 = i12 + 232 | 0;
 i43 = i12 + 240 | 0;
 i44 = i12 + 248 | 0;
 i45 = i12 + 256 | 0;
 i46 = i12 + 264 | 0;
 i47 = i12 + 272 | 0;
 i48 = i12 + 280 | 0;
 i49 = i12 + 288 | 0;
 i50 = i12 + 296 | 0;
 i51 = i12 + 304 | 0;
 i52 = i12 + 312 | 0;
 i53 = i12 + 320 | 0;
 i54 = HEAP32[i5 >> 2] | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - i54 | 0;
 __ZNK7WebCore9RenderBox40containingBlockLogicalWidthForPositionedEPKNS_20RenderBoxModelObjectEPNS_12RenderRegionEb(i36, i1, i3, 0, 0);
 i6 = i2 + 5 | 0;
 i55 = (HEAP8[i6] | 0) == 0;
 i56 = (HEAP8[i7 + 5 | 0] | 0) == 0;
 i57 = (HEAP8[i8 + 5 | 0] | 0) == 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 511](i1 | 0) | 0) {
  HEAP8[i6] = 3;
  HEAPF32[i2 >> 2] = +(i5 | 0);
  HEAP8[i2 + 6 | 0] = 1;
  i58 = 0;
 } else {
  i58 = i55;
 }
 i55 = i56 | i58;
 do {
  if (i55 | i57) {
   i6 = i36 | 0;
   HEAP32[i15 >> 2] = HEAP32[i6 >> 2];
   i59 = i1 + 4 | 0;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i44, i9, i15, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i60 = i11 + 8 | 0;
   HEAP32[i60 >> 2] = HEAP32[i44 >> 2];
   HEAP32[i14 >> 2] = HEAP32[i6 >> 2];
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i45, i10, i14, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i6 = HEAP32[i45 >> 2] | 0;
   HEAP32[i11 + 12 >> 2] = i6;
   i61 = HEAP32[i4 >> 2] | 0;
   i62 = i61 - ((HEAP32[i60 >> 2] | 0) + i6 + i54) | 0;
   i6 = i56 ^ 1;
   i60 = i58 ^ 1;
   if (!(i6 | i60 | i57)) {
    HEAP32[i13 >> 2] = i61;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i46, i8, i13, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i63 = i62 - i5 - (HEAP32[i46 >> 2] | 0) | 0;
    i64 = i5;
    i65 = i61;
    break;
   }
   i66 = i56 | i60;
   i60 = i57 ^ 1;
   if (!(i66 | i60)) {
    HEAP32[i18 >> 2] = i61;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i47, i7, i18, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i63 = HEAP32[i47 >> 2] | 0;
    i64 = i5;
    i65 = i61;
    break;
   }
   if (!(i58 | i6 | i57)) {
    HEAP32[i20 >> 2] = i61;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i48, i2, i20, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i6 = HEAP32[i48 >> 2] | 0;
    if ((HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
     i67 = i6;
    } else {
     i68 = i1 | 0;
     i69 = i1;
     i70 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i69 >> 2] | 0) + 752 >> 2] & 511](i68) | 0;
     i71 = i1;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i71 >> 2] | 0) + 720 >> 2] & 127](i23, i68);
     i72 = HEAP32[i23 >> 2] | 0;
     i73 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i69 >> 2] | 0) + 756 >> 2] & 511](i68) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i71 >> 2] | 0) + 724 >> 2] & 127](i22, i68);
     i67 = i6 - (i72 + i70 + i73 + (HEAP32[i22 >> 2] | 0)) | 0;
    }
    i73 = (i67 | 0) > 0 ? i67 : 0;
    HEAP32[i24 >> 2] = i61;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i49, i8, i24, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i63 = i62 - i73 - (HEAP32[i49 >> 2] | 0) | 0;
    i64 = i73;
    i65 = i61;
    break;
   }
   if (!(i66 | i57)) {
    HEAP32[i25 >> 2] = i61;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i50, i7, i25, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i66 = HEAP32[i50 >> 2] | 0;
    HEAP32[i26 >> 2] = i61;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i51, i8, i26, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i73 = i62 - i66 - (HEAP32[i51 >> 2] | 0) | 0;
    i63 = i66;
    i64 = (i73 | 0) > 0 ? i73 : 0;
    i65 = i61;
    break;
   }
   if (i55 | i60) {
    i63 = 0;
    i64 = 0;
    i65 = i61;
    break;
   }
   HEAP32[i32 >> 2] = i61;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i52, i2, i32, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i60 = HEAP32[i52 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
    i74 = i60;
   } else {
    i73 = i1 | 0;
    i66 = i1;
    i62 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i66 >> 2] | 0) + 752 >> 2] & 511](i73) | 0;
    i70 = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i70 >> 2] | 0) + 720 >> 2] & 127](i34, i73);
    i72 = HEAP32[i34 >> 2] | 0;
    i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i66 >> 2] | 0) + 756 >> 2] & 511](i73) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i70 >> 2] | 0) + 724 >> 2] & 127](i33, i73);
    i74 = i60 - (i72 + i62 + i6 + (HEAP32[i33 >> 2] | 0)) | 0;
   }
   HEAP32[i35 >> 2] = i61;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i53, i7, i35, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i63 = HEAP32[i53 >> 2] | 0;
   i64 = (i74 | 0) > 0 ? i74 : 0;
   i65 = i61;
  } else {
   i61 = HEAP32[i4 >> 2] | 0;
   HEAP32[i31 >> 2] = i61;
   i59 = i1 + 4 | 0;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i37, i2, i31, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i6 = HEAP32[i37 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
    i75 = i6;
   } else {
    i62 = i1 | 0;
    i72 = i1;
    i60 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i72 >> 2] | 0) + 752 >> 2] & 511](i62) | 0;
    i73 = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i73 >> 2] | 0) + 720 >> 2] & 127](i30, i62);
    i70 = HEAP32[i30 >> 2] | 0;
    i66 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i72 >> 2] | 0) + 756 >> 2] & 511](i62) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i73 >> 2] | 0) + 724 >> 2] & 127](i29, i62);
    i75 = i6 - (i70 + i60 + i66 + (HEAP32[i29 >> 2] | 0)) | 0;
   }
   i66 = (i75 | 0) > 0 ? i75 : 0;
   HEAP32[i28 >> 2] = i61;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i38, i7, i28, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i60 = HEAP32[i38 >> 2] | 0;
   HEAP32[i27 >> 2] = i61;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i39, i8, i27, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i70 = i61 - (i60 + i66 + (HEAP32[i39 >> 2] | 0) + i54) | 0;
   i6 = (HEAP8[i10 + 5 | 0] | 0) == 0;
   if ((HEAP8[i9 + 5 | 0] | 0) == 0) {
    if (i6) {
     i62 = (i70 | 0) / 2 & -1;
     HEAP32[i11 + 8 >> 2] = i62;
     HEAP32[i11 + 12 >> 2] = i70 - i62;
     i63 = i60;
     i64 = i66;
     i65 = i61;
     break;
    } else {
     HEAP32[i21 >> 2] = HEAP32[i36 >> 2];
     __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i40, i10, i21, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
     i62 = HEAP32[i40 >> 2] | 0;
     HEAP32[i11 + 12 >> 2] = i62;
     HEAP32[i11 + 8 >> 2] = i70 - i62;
     i63 = i60;
     i64 = i66;
     i65 = i61;
     break;
    }
   } else {
    i62 = i11 + 8 | 0;
    i73 = i36 | 0;
    i72 = HEAP32[i73 >> 2] | 0;
    if (i6) {
     HEAP32[i19 >> 2] = i72;
     __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i41, i9, i19, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
     i6 = HEAP32[i41 >> 2] | 0;
     HEAP32[i62 >> 2] = i6;
     HEAP32[i11 + 12 >> 2] = i70 - i6;
     i63 = i60;
     i64 = i66;
     i65 = i61;
     break;
    } else {
     HEAP32[i17 >> 2] = i72;
     __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i42, i9, i17, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
     HEAP32[i62 >> 2] = HEAP32[i42 >> 2];
     HEAP32[i16 >> 2] = HEAP32[i73 >> 2];
     __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i43, i10, i16, HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
     HEAP32[i11 + 12 >> 2] = HEAP32[i43 >> 2];
     i63 = i60;
     i64 = i66;
     i65 = i61;
     break;
    }
   }
  }
 } while (0);
 HEAP32[i11 >> 2] = i64;
 i43 = i11 + 4 | 0;
 HEAP32[i43 >> 2] = (HEAP32[i11 + 8 >> 2] | 0) + i63;
 __ZN7WebCoreL33computeLogicalTopPositionedOffsetERNS_10LayoutUnitEPKNS_9RenderBoxES0_PKNS_20RenderBoxModelObjectES0_(i43, i1, i64, i3, i65);
 STACKTOP = i12;
 return;
}
function __ZN7WebCore9RenderBox14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 | 0;
 i9 = i1 + 20 | 0;
 i10 = (HEAP32[i9 >> 2] & 8192 | 0) != 0;
 __ZN7WebCore22RenderLayerModelObject14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1 | 0, i2, i3);
 i11 = i1 + 36 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 if ((i13 & 29 | 0) == 0) {
  i14 = (i13 & 2 | 0) == 0;
 } else {
  i14 = 0;
 }
 i13 = (i3 | 0) == 0;
 L4 : do {
  if (!(i14 | i13)) {
   __ZN7WebCore11RenderBlock37removePercentHeightDescendantIfNeededERNS_9RenderBoxE(i1);
   i15 = HEAP32[i9 >> 2] | 0;
   if ((i15 & 25165824 | 0) != 16777216) {
    break;
   }
   i16 = i12 + 16 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i15 & 8192 | 0) == 0) {
    if ((HEAP8[i17 + 9 | 0] | 0) != 0) {
     break;
    }
    if ((HEAP8[i17 + 17 | 0] | 0) != 0) {
     break;
    }
   } else {
    if ((HEAP8[i17 + 25 | 0] | 0) != 0) {
     break;
    }
    if ((HEAP8[i17 + 33 | 0] | 0) != 0) {
     break;
    }
   }
   i17 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i3 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3) | 0;
   i15 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i16 >> 2] | 0) + 36 | 0, (HEAP32[i12 + 44 >> 2] | 0) >>> 13 & 3) | 0;
   i16 = HEAP8[i17 + 5 | 0] | 0;
   do {
    if (i16 << 24 >> 24 == (HEAP8[i15 + 5 | 0] | 0)) {
     if (((HEAP8[i15 + 4 | 0] ^ HEAP8[i17 + 4 | 0]) & 1) != 0) {
      break;
     }
     if (i16 << 24 >> 24 == 15) {
      break L4;
     }
     if ((HEAP8[i17 + 6 | 0] & 1) == 0) {
      d18 = +(HEAP32[i17 >> 2] | 0);
     } else {
      d18 = +HEAPF32[i17 >> 2];
     }
     if ((HEAP8[i15 + 6 | 0] & 1) == 0) {
      d19 = +(HEAP32[i15 >> 2] | 0);
     } else {
      d19 = +HEAPF32[i15 >> 2];
     }
     if (d18 == d19) {
      break L4;
     }
     if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i17, i15) | 0) {
      break L4;
     }
    }
   } while (0);
   i15 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i17 = i15 + 20 | 0;
   i16 = HEAP32[i17 >> 2] | 0;
   if ((i16 & 4 | 0) != 0) {
    break;
   }
   HEAP32[i17 >> 2] = i16 | 4;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i15 | 0, 1, 0);
  }
 } while (0);
 do {
  if (__ZN7WebCore11RenderBlock28hasPercentHeightContainerMapEv() | 0) {
   if ((HEAP32[i1 + 28 >> 2] | 0) == 0) {
    break;
   }
   if (!(i10 ^ (HEAP32[i9 >> 2] & 8192 | 0) != 0)) {
    break;
   }
   __ZN7WebCore11RenderBlock33clearPercentHeightDescendantsFromERNS_9RenderBoxE(i1);
  }
 } while (0);
 do {
  if (!((HEAP32[i9 >> 2] & 65536 | 0) == 0 | i13)) {
   i10 = i3 + 24 | 0;
   d19 = +HEAPF32[(HEAP32[i10 >> 2] | 0) + 80 >> 2];
   i14 = i12 + 24 | 0;
   d18 = +HEAPF32[(HEAP32[i14 >> 2] | 0) + 80 >> 2];
   if (d19 == d18) {
    break;
   }
   i15 = i1 + 40 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   i17 = (HEAP32[i16 + 12 >> 2] | 0) + (HEAP32[i16 + 112 >> 2] | 0) | 0;
   if ((i17 | 0) == 0) {
    i20 = i16;
   } else {
    i21 = (HEAP32[i16 + 16 >> 2] | 0) + (HEAP32[i16 + 116 >> 2] | 0) | 0;
    HEAP32[i5 >> 2] = ~~(d18 * (+(i17 | 0) / d19));
    HEAP32[i5 + 4 >> 2] = i21;
    __ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE(i16, i5, 0);
    i20 = HEAP32[i15 >> 2] | 0;
   }
   i15 = (HEAP32[i20 + 16 >> 2] | 0) + (HEAP32[i20 + 116 >> 2] | 0) | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i16 = ~~(+(i15 | 0) / +HEAPF32[(HEAP32[i10 >> 2] | 0) + 80 >> 2] * +HEAPF32[(HEAP32[i14 >> 2] | 0) + 80 >> 2]);
   HEAP32[i6 >> 2] = (HEAP32[i20 + 12 >> 2] | 0) + (HEAP32[i20 + 112 >> 2] | 0);
   HEAP32[i6 + 4 >> 2] = i16;
   __ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE(i20, i6, 0);
  }
 } while (0);
 do {
  if ((i2 - 2 | 0) >>> 0 < 3 >>> 0) {
   i6 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i22 = 0;
    i23 = i6;
   }
   while (1) {
    i6 = i23 + 20 | 0;
    i20 = HEAP32[i6 >> 2] | 0;
    if (i20 >>> 0 > 1073741823 >>> 0) {
     HEAP32[i6 >> 2] = i20 & 1073741823 | 1073741824;
    }
    i22 = i22 + 1 | 0;
    i23 = HEAP32[i23 + 8 >> 2] | 0;
    if (i22 >>> 0 > 3 >>> 0 | (i23 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i23 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((HEAP32[i9 >> 2] & 128 | 0) == 0) {
   if ((HEAP32[i23 + 12 >> 2] & 4 | 0) == 0) {
    i24 = 0;
    break;
   }
   i22 = HEAP32[i23 + 44 >> 2] | 0;
   i2 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i22 | 0) == (i2 | 0)) {
    i24 = 1;
    break;
   }
   if ((HEAP32[i22 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
    i24 = 0;
    break;
   }
   i24 = (HEAP32[i22 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
  } else {
   i24 = 0;
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i22 = HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i20 = (HEAP32[i22 + 692 >> 2] | 0) == (i23 | 0);
 do {
  if (i24) {
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i7, i12, 1);
   i23 = i22 + 672 | 0;
   i6 = i7;
   HEAP32[i23 >> 2] = HEAP32[i6 >> 2];
   HEAP8[i23 + 4 | 0] = HEAP8[i6 + 4 | 0] | 0;
   i25 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  } else {
   if (i20) {
    i25 = i22;
    break;
   }
   i26 = HEAP32[i11 >> 2] | 0;
   __ZN7WebCore9RenderBox38updateShapeOutsideInfoAfterStyleChangeERKNS_11RenderStyleEPS2_(i1, i26, i3);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i22 = HEAP32[(HEAP32[i25 + 1584 >> 2] | 0) + 36 >> 2] | 0;
 i7 = i22 + 40 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i23 = i12 + 40 | 0;
 i5 = HEAP32[i23 >> 2] | 0;
 do {
  if (((i5 ^ i6) & 1073741824 | 0) != 0) {
   if (!i20) {
    if ((HEAP8[i25 + 1948 | 0] & 1) != 0) {
     break;
    }
   }
   HEAP32[i7 >> 2] = i6 & -1073741825 | i5 & 1073741824;
   if (i24) {
    i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
    i16 = i13 + 32 | 0;
    if ((HEAP32[i13 + 12 >> 2] & 2048 | 0) == 0) {
     i27 = i16 | 0;
    } else {
     i27 = HEAP32[i16 >> 2] | 0;
    }
    i16 = (HEAP32[(HEAP32[i27 >> 2] | 0) + 36 >> 2] | 0) + 40 | 0;
    HEAP32[i16 >> 2] = HEAP32[i16 >> 2] & -1073741825 | HEAP32[i23 >> 2] & 1073741824;
   }
   i16 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i16 & 1 | 0) == 0) {
     HEAP32[i9 >> 2] = i16 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i8, 1, 0);
     if ((HEAP32[i9 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i8);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i8, 1, 1);
  }
 } while (0);
 i23 = i22 + 44 | 0;
 i27 = HEAP32[i23 >> 2] | 0;
 i5 = i12 + 44 | 0;
 i12 = HEAP32[i5 >> 2] | 0;
 do {
  if (((i12 ^ i27) & 24576 | 0) == 0) {
   i28 = 0;
  } else {
   if (!i20) {
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1949 | 0] & 1) != 0) {
     i28 = 0;
     break;
    }
   }
   i6 = i12 >>> 13 & 3;
   if ((i27 >>> 13 & 3 | 0) == (i6 | 0)) {
    i29 = i12;
   } else {
    HEAP32[i23 >> 2] = i6 << 13 | i27 & -24577;
    i29 = HEAP32[i5 >> 2] | 0;
   }
   i6 = i29 >>> 13 & 3;
   i7 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 20 | 0;
   HEAP32[i7 >> 2] = (((i6 | 0) == 0 | (i6 | 0) == 3) & 1) << 13 | HEAP32[i7 >> 2] & -8193;
   __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0, 1);
   if (i24) {
    i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
    i6 = HEAP32[i7 + 12 >> 2] | 0;
    i25 = i7 + 32 | 0;
    if ((i6 & 2048 | 0) == 0) {
     i30 = i25 | 0;
    } else {
     i30 = HEAP32[i25 >> 2] | 0;
    }
    i25 = (HEAP32[i5 >> 2] | 0) >>> 13 & 3;
    i16 = (HEAP32[(HEAP32[i30 >> 2] | 0) + 36 >> 2] | 0) + 44 | 0;
    i13 = HEAP32[i16 >> 2] | 0;
    if ((i13 >>> 13 & 3 | 0) == (i25 | 0)) {
     i31 = i7;
     i32 = i6;
    } else {
     HEAP32[i16 >> 2] = i25 << 13 | i13 & -24577;
     i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
     i31 = i13;
     i32 = HEAP32[i13 + 12 >> 2] | 0;
    }
    i13 = i31 + 32 | 0;
    if ((i32 & 2048 | 0) == 0) {
     i33 = i13 | 0;
    } else {
     i33 = HEAP32[i13 >> 2] | 0;
    }
    i13 = (HEAP32[i5 >> 2] | 0) >>> 13 & 3;
    i25 = (HEAP32[i33 >> 2] | 0) + 20 | 0;
    HEAP32[i25 >> 2] = (((i13 | 0) == 0 | (i13 | 0) == 3) & 1) << 13 | HEAP32[i25 >> 2] & -8193;
   }
   i25 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i25 & 1 | 0) == 0) {
     HEAP32[i9 >> 2] = i25 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i8, 1, 0);
     if ((HEAP32[i9 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i8);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i8, 1, 1);
   i28 = 1;
  }
 } while (0);
 __ZN7WebCore9FrameView32recalculateScrollbarOverlayStyleEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0);
 i8 = __ZNK7WebCore9FrameView10paginationEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0;
 if (!i28) {
  i26 = HEAP32[i11 >> 2] | 0;
  __ZN7WebCore9RenderBox38updateShapeOutsideInfoAfterStyleChangeERKNS_11RenderStyleEPS2_(i1, i26, i3);
  STACKTOP = i4;
  return;
 }
 i28 = i8 | 0;
 if ((HEAP32[i28 >> 2] | 0) == 0) {
  i26 = HEAP32[i11 >> 2] | 0;
  __ZN7WebCore9RenderBox38updateShapeOutsideInfoAfterStyleChangeERKNS_11RenderStyleEPS2_(i1, i26, i3);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore11RenderStyle33setColumnStylesFromPaginationModeERKNS_10Pagination4ModeE(i22, i28);
 i28 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 if ((HEAP32[i28 + 20 >> 2] & 4194304 | 0) == 0) {
  i26 = HEAP32[i11 >> 2] | 0;
  __ZN7WebCore9RenderBox38updateShapeOutsideInfoAfterStyleChangeERKNS_11RenderStyleEPS2_(i1, i26, i3);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore11RenderBlock25updateColumnInfoFromStyleEPNS_11RenderStyleE(i28 | 0, i22);
 i26 = HEAP32[i11 >> 2] | 0;
 __ZN7WebCore9RenderBox38updateShapeOutsideInfoAfterStyleChangeERKNS_11RenderStyleEPS2_(i1, i26, i3);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox32computeReplacedLogicalWidthUsingENS_6LengthE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, d44 = +0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i24;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i31 = i30;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i34 = i33;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i38 = i3 + 5 | 0;
 L1 : do {
  switch (HEAPU8[i38] | 0) {
  case 4:
  case 5:
  case 0:
  case 1:
  case 15:
   {
    break;
   }
  case 6:
  case 7:
   {
    i39 = i3;
    i40 = HEAP32[i39 >> 2] | 0;
    i41 = HEAP32[i39 + 4 >> 2] | 0;
    HEAP32[i24 >> 2] = i40;
    HEAP32[i24 + 4 >> 2] = i41;
    if ((i40 & 0 | 0) == 0 & (i41 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i25);
    }
    HEAP32[i26 >> 2] = 0;
    i41 = i2 | 0;
    i40 = i2;
    i39 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 760 >> 2] & 511](i41) | 0) + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 764 >> 2] & 511](i41) | 0) | 0;
    i42 = i2;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i42 >> 2] | 0) + 728 >> 2] & 127](i17, i41);
    i43 = i39 + (HEAP32[i17 >> 2] | 0) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i42 >> 2] | 0) + 732 >> 2] & 127](i18, i41);
    HEAP32[i27 >> 2] = i43 + (HEAP32[i18 >> 2] | 0);
    __ZNK7WebCore9RenderBox33computeIntrinsicLogicalWidthUsingENS_6LengthENS_10LayoutUnitES2_(i23, i2, i25, i26, i27);
    i43 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 760 >> 2] & 511](i41) | 0;
    i39 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 764 >> 2] & 511](i41) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i42 >> 2] | 0) + 728 >> 2] & 127](i15, i41);
    i40 = HEAP32[i15 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i42 >> 2] | 0) + 732 >> 2] & 127](i16, i41);
    HEAP32[i1 >> 2] = (HEAP32[i23 >> 2] | 0) - (i39 + i43 + i40 + (HEAP32[i16 >> 2] | 0));
    if ((HEAP8[i25 + 5 | 0] | 0) != 10) {
     STACKTOP = i4;
     return;
    }
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
    STACKTOP = i4;
    return;
   }
  case 3:
   {
    if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
     d44 = +(HEAP32[i3 >> 2] | 0);
    } else {
     d44 = +HEAPF32[i3 >> 2];
    }
    do {
     if (d44 < +2147483647) {
      if (d44 <= +-2147483648) {
       i45 = -2147483648;
       break;
      }
      i45 = ~~d44;
     } else {
      i45 = 2147483647;
     }
    } while (0);
    if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
     i46 = i45;
    } else {
     i40 = i2 | 0;
     i43 = i2;
     i39 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 760 >> 2] & 511](i40) | 0;
     i41 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 764 >> 2] & 511](i40) | 0;
     i43 = i2;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 728 >> 2] & 127](i19, i40);
     i42 = HEAP32[i19 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 732 >> 2] & 127](i20, i40);
     i46 = i45 - (i41 + i39 + i42 + (HEAP32[i20 >> 2] | 0)) | 0;
    }
    HEAP32[i1 >> 2] = (i46 | 0) > 0 ? i46 : 0;
    STACKTOP = i4;
    return;
   }
  case 11:
  case 12:
  case 13:
  case 14:
   {
    HEAP32[i14 >> 2] = 0;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i28, i3, i14, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i42 = HEAP32[i28 >> 2] | 0;
    if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
     i47 = i42;
    } else {
     i39 = i2 | 0;
     i41 = i2;
     i40 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i41 >> 2] | 0) + 760 >> 2] & 511](i39) | 0;
     i43 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i41 >> 2] | 0) + 764 >> 2] & 511](i39) | 0;
     i41 = i2;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i41 >> 2] | 0) + 728 >> 2] & 127](i12, i39);
     i48 = HEAP32[i12 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i41 >> 2] | 0) + 732 >> 2] & 127](i13, i39);
     i47 = i42 - (i43 + i40 + i48 + (HEAP32[i13 >> 2] | 0)) | 0;
    }
    HEAP32[i1 >> 2] = (i47 | 0) > 0 ? i47 : 0;
    STACKTOP = i4;
    return;
   }
  case 9:
  case 8:
  case 2:
  case 10:
   {
    i48 = i2 | 0;
    if ((HEAP32[i2 + 20 >> 2] & 25165824 | 0) == 16777216) {
     __ZNK7WebCore9RenderBox40containingBlockLogicalWidthForPositionedEPKNS_20RenderBoxModelObjectEPNS_12RenderRegionEb(i29, i2, __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i48, 0, 0) | 0, 0, 1);
    } else {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 800 >> 2] & 127](i29, i2);
    }
    i40 = HEAP32[(__ZNK7WebCore12RenderObject15containingBlockEv(i48) | 0) + 36 >> 2] | 0;
    i48 = (HEAP32[i40 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i48 | 0) == 3 | (i48 | 0) == 0) {
     i49 = (HEAP32[i40 + 4 >> 2] | 0) + 4 | 0;
    } else {
     i49 = (HEAP32[i40 + 4 >> 2] | 0) + 12 | 0;
    }
    i40 = i49;
    i48 = HEAP32[i40 >> 2] | 0;
    i43 = HEAP32[i40 + 4 >> 2] | 0;
    HEAP32[i30 >> 2] = i48;
    HEAP32[i30 + 4 >> 2] = i43;
    if ((i48 & 0 | 0) == 0 & (i43 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i31);
    }
    if (((HEAPU8[i38] | 0) - 6 | 0) >>> 0 < 4 >>> 0) {
     i43 = i3;
     i48 = HEAP32[i43 >> 2] | 0;
     i40 = HEAP32[i43 + 4 >> 2] | 0;
     HEAP32[i33 >> 2] = i48;
     HEAP32[i33 + 4 >> 2] = i40;
     if ((i48 & 0 | 0) == 0 & (i40 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i34);
     }
     HEAP32[i35 >> 2] = HEAP32[i29 >> 2];
     i40 = i2 | 0;
     i48 = i2;
     i43 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i48 >> 2] | 0) + 760 >> 2] & 511](i40) | 0;
     i42 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i48 >> 2] | 0) + 764 >> 2] & 511](i40) | 0) + i43 | 0;
     i43 = i2;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 728 >> 2] & 127](i10, i40);
     i39 = i42 + (HEAP32[i10 >> 2] | 0) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 732 >> 2] & 127](i11, i40);
     HEAP32[i36 >> 2] = i39 + (HEAP32[i11 >> 2] | 0);
     __ZNK7WebCore9RenderBox33computeIntrinsicLogicalWidthUsingENS_6LengthENS_10LayoutUnitES2_(i32, i2, i34, i35, i36);
     i39 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i48 >> 2] | 0) + 760 >> 2] & 511](i40) | 0;
     i42 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i48 >> 2] | 0) + 764 >> 2] & 511](i40) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 728 >> 2] & 127](i8, i40);
     i48 = HEAP32[i8 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 732 >> 2] & 127](i9, i40);
     HEAP32[i1 >> 2] = (HEAP32[i32 >> 2] | 0) - (i42 + i39 + i48 + (HEAP32[i9 >> 2] | 0));
     if ((HEAP8[i34 + 5 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i34);
     }
     if ((HEAP8[i31 + 5 | 0] | 0) != 10) {
      STACKTOP = i4;
      return;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i31);
     STACKTOP = i4;
     return;
    }
    i48 = HEAP32[i29 >> 2] | 0;
    do {
     if ((i48 | 0) <= 0) {
      i39 = HEAP8[i31 + 5 | 0] | 0;
      if ((i48 | 0) == 0) {
       if ((i39 << 24 >> 24 | 0) == 3 | (i39 << 24 >> 24 | 0) == 10 | (i39 << 24 >> 24 | 0) == 2) {
        break;
       }
      }
      if (i39 << 24 >> 24 != 10) {
       break L1;
      }
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i31);
      break L1;
     }
    } while (0);
    HEAP32[i7 >> 2] = i48;
    __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i37, i3, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i39 = HEAP32[i37 >> 2] | 0;
    if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
     i50 = i39;
    } else {
     i42 = i2 | 0;
     i40 = i2;
     i43 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 760 >> 2] & 511](i42) | 0;
     i41 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 764 >> 2] & 511](i42) | 0;
     i40 = i2;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i40 >> 2] | 0) + 728 >> 2] & 127](i5, i42);
     i51 = HEAP32[i5 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i40 >> 2] | 0) + 732 >> 2] & 127](i6, i42);
     i50 = i39 - (i41 + i43 + i51 + (HEAP32[i6 >> 2] | 0)) | 0;
    }
    HEAP32[i1 >> 2] = (i50 | 0) > 0 ? i50 : 0;
    if ((HEAP8[i31 + 5 | 0] | 0) != 10) {
     STACKTOP = i4;
     return;
    }
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i31);
    STACKTOP = i4;
    return;
   }
  default:
   {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i31 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i50 = HEAP32[(HEAP32[i2 >> 2] | 0) + 888 >> 2] | 0;
 if ((i31 | 0) == 3 | (i31 | 0) == 0) {
  FUNCTION_TABLE_vii[i50 & 127](i21, i2);
  HEAP32[i1 >> 2] = HEAP32[i21 >> 2];
  STACKTOP = i4;
  return;
 } else {
  FUNCTION_TABLE_vii[i50 & 127](i22, i2);
  HEAP32[i1 >> 2] = HEAP32[i22 + 4 >> 2];
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = i19 | 0;
 i21 = i19;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = i1 + 36 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 i25 = i1 | 0;
 i26 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 do {
  if ((HEAP32[i26 + 196 >> 2] | 0) == 0) {
   i27 = HEAP32[i26 + 192 >> 2] | 0;
   if (!((i27 | 0) != 0 & (i2 | 0) == 0)) {
    break;
   }
   i28 = i24 + 48 | 0;
   i29 = HEAP32[i28 >> 2] | 0;
   if ((i29 & 29360128 | 0) == 25165824) {
    break;
   }
   i30 = i1 + 40 | 0;
   i31 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i31 | 0) == 0) {
     i32 = i29;
    } else {
     i33 = HEAP32[i31 + 172 >> 2] | 0;
     if ((i33 | 0) == 0) {
      i32 = i29;
      break;
     }
     __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i9, i3);
     __ZNK7WebCore20TransformationMatrix7mapRectERKNS_7IntRectE(i8, i33, i9);
     i33 = HEAP32[i7 + 4 >> 2] | 0;
     i34 = i6 + 8 | 0;
     i35 = HEAP32[i34 >> 2] | 0;
     i36 = HEAP32[i34 + 4 >> 2] | 0;
     HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
     HEAP32[i3 + 4 >> 2] = i33;
     HEAP32[i3 + 8 >> 2] = i35;
     HEAP32[i3 + 12 >> 2] = i36;
     i32 = HEAP32[i28 >> 2] | 0;
    }
   } while (0);
   i28 = i32 >>> 22 & 7;
   do {
    if ((i28 | 0) == 3 | (i28 | 0) == 1) {
     i29 = HEAP32[i30 >> 2] | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     i31 = HEAP32[i29 + 92 >> 2] | 0;
     i36 = i3 | 0;
     HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + (HEAP32[i29 + 88 >> 2] | 0);
     i29 = i3 + 4 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + i31;
    }
   } while (0);
   i30 = i1 + 44 | 0;
   i28 = HEAP32[i30 + 4 >> 2] | 0;
   i31 = i3 | 0;
   i29 = (HEAP32[i31 >> 2] | 0) + (HEAP32[i30 >> 2] | 0) | 0;
   HEAP32[i31 >> 2] = i29;
   i30 = i3 + 4 | 0;
   i36 = (HEAP32[i30 >> 2] | 0) + i28 | 0;
   HEAP32[i30 >> 2] = i36;
   i28 = HEAP32[i27 + 40 >> 2] | 0;
   HEAP32[i31 >> 2] = i29 + (HEAP32[i27 + 36 >> 2] | 0);
   HEAP32[i30 >> 2] = i36 + i28;
   if ((HEAP8[i27 | 0] & 1) == 0) {
    STACKTOP = i5;
    return;
   }
   __ZN7WebCore10LayoutRect9intersectERKS0_(i3, i27 + 20 | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i32 = i1 + 20 | 0;
 if ((HEAP32[i32 >> 2] & 262144 | 0) != 0) {
  __ZNK7WebCore9RenderBox13reflectedRectERKNS_10LayoutRectE(i10, i1, i3);
  __ZN7WebCore10LayoutRect5uniteERKS0_(i3, i10);
 }
 if ((i1 | 0) == (i2 | 0)) {
  i10 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if (!((i10 | 0) == 3 | (i10 | 0) == 1)) {
   STACKTOP = i5;
   return;
  }
  i10 = (HEAP32[(HEAP32[i23 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if (!((i10 | 0) == 3 | (i10 | 0) == 1)) {
   STACKTOP = i5;
   return;
  }
  if ((HEAP32[i32 >> 2] & 8192 | 0) == 0) {
   i10 = i3 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i1 + 52 >> 2] | 0) - (HEAP32[i10 >> 2] | 0) - (HEAP32[i3 + 8 >> 2] | 0);
   STACKTOP = i5;
   return;
  } else {
   i10 = i3 + 4 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i1 + 56 >> 2] | 0) - (HEAP32[i10 >> 2] | 0) - (HEAP32[i3 + 12 >> 2] | 0);
   STACKTOP = i5;
   return;
  }
 }
 i10 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i25, i2, i11) | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i25 = i10 | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 248 >> 2] & 511](i25) | 0) {
   HEAP32[i12 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   __ZNK7WebCore16RenderFlowThread20getRegionRangeForBoxEPKNS_9RenderBoxERPNS_12RenderRegionES6_(i10, i1, i12, i13);
   i7 = HEAP32[i12 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 124 | 0;
   i7 = HEAP32[i6 + 4 >> 2] | 0;
   i9 = i3 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + (HEAP32[i6 >> 2] | 0);
   i6 = i3 + 4 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i7;
  }
 } while (0);
 i12 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i37 = 26;
 } else {
  if (((HEAP32[(HEAP32[i23 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
   i37 = 26;
  }
 }
 do {
  if ((i37 | 0) == 26) {
   i12 = HEAP32[i32 >> 2] | 0;
   if ((i12 & 25165824 | 0) == 16777216) {
    break;
   }
   i13 = (HEAP32[(HEAP32[i23 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if (!((i13 | 0) == 3 | (i13 | 0) == 1)) {
    break;
   }
   if ((i12 & 8192 | 0) == 0) {
    i12 = i3 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i1 + 52 >> 2] | 0) - (HEAP32[i12 >> 2] | 0) - (HEAP32[i3 + 8 >> 2] | 0);
    break;
   } else {
    i12 = i3 + 4 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i1 + 56 >> 2] | 0) - (HEAP32[i12 >> 2] | 0) - (HEAP32[i3 + 12 >> 2] | 0);
    break;
   }
  }
 } while (0);
 i23 = i3;
 i12 = i1 + 44 | 0;
 i13 = i1 + 48 | 0;
 i7 = (HEAP32[i23 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) | 0;
 i6 = (HEAP32[i23 + 4 >> 2] | 0) + (HEAP32[i13 >> 2] | 0) | 0;
 i9 = i24 + 48 | 0;
 i24 = (HEAP32[i9 >> 2] | 0) >>> 22 & 7;
 do {
  if ((HEAP32[i32 >> 2] & 32768 | 0) == 0) {
   i37 = 34;
  } else {
   i8 = HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 172 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i37 = 34;
    break;
   }
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i17, i3);
   __ZNK7WebCore20TransformationMatrix7mapRectERKNS_7IntRectE(i16, i8, i17);
   i8 = HEAP32[i15 + 4 >> 2] | 0;
   i26 = i14 + 8 | 0;
   i28 = HEAP32[i26 >> 2] | 0;
   i36 = HEAP32[i26 + 4 >> 2] | 0;
   HEAP32[i3 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i3 + 4 >> 2] = i8;
   HEAP32[i3 + 8 >> 2] = i28;
   HEAP32[i3 + 12 >> 2] = i36;
   i38 = (i24 | 0) == 6;
   i39 = (HEAP32[i23 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) | 0;
   i40 = (HEAP32[i23 + 4 >> 2] | 0) + (HEAP32[i13 >> 2] | 0) | 0;
  }
 } while (0);
 if ((i37 | 0) == 34) {
  i38 = (i24 | 0) == 6 | i4;
  i39 = i7;
  i40 = i6;
 }
 do {
  if ((i24 | 0) == 2) {
   i6 = HEAP32[i10 + 20 >> 2] & 25165824;
   if (!((i6 | 0) == 25165824 | (i6 | 0) == 8388608)) {
    i37 = 39;
    break;
   }
   if ((HEAP32[i10 + 24 >> 2] & 4 | 0) == 0) {
    i37 = 39;
    break;
   }
   __ZNK7WebCore12RenderInline31offsetForInFlowPositionedInlineEPKNS_9RenderBoxE(i18, i10, i1);
   i41 = (HEAP32[i18 >> 2] | 0) + i39 | 0;
   i42 = (HEAP32[i18 + 4 >> 2] | 0) + i40 | 0;
  } else {
   i37 = 39;
  }
 } while (0);
 do {
  if ((i37 | 0) == 39) {
   i18 = (HEAP32[i9 >> 2] | 0) >>> 22 & 7;
   do {
    if ((i18 | 0) == 3 | (i18 | 0) == 1) {
     i6 = HEAP32[i1 + 40 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i43 = i39;
      i44 = i40;
      break;
     }
     i43 = (HEAP32[i6 + 88 >> 2] | 0) + i39 | 0;
     i44 = (HEAP32[i6 + 92 >> 2] | 0) + i40 | 0;
    } else {
     i43 = i39;
     i44 = i40;
    }
   } while (0);
   if ((i24 | 0) == 6 | (i24 | 0) == 2) {
    i41 = i43;
    i42 = i44;
    break;
   }
   if ((HEAP32[i10 + 20 >> 2] & 4194304 | 0) == 0) {
    i41 = i43;
    i42 = i44;
    break;
   }
   if ((HEAP32[i10 + 24 >> 2] & 32 | 0) == 0) {
    i41 = i43;
    i42 = i44;
    break;
   }
   i18 = i3 + 8 | 0;
   i27 = HEAP32[i18 >> 2] | 0;
   i6 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i20 >> 2] = i43;
   HEAP32[i20 + 4 >> 2] = i44;
   i18 = i19 + 8 | 0;
   HEAP32[i18 >> 2] = i27;
   HEAP32[i18 + 4 >> 2] = i6;
   __ZNK7WebCore11RenderBlock20adjustRectForColumnsERNS_10LayoutRectE(i10, i21);
   i6 = HEAP32[i20 >> 2] | 0;
   i18 = HEAP32[i20 + 4 >> 2] | 0;
   i27 = i3;
   i7 = i19;
   HEAP32[i27 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   HEAP32[i27 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
   HEAP32[i27 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
   i41 = i6;
   i42 = i18;
  }
 } while (0);
 HEAP32[i23 >> 2] = i41;
 HEAP32[i23 + 4 >> 2] = i42;
 do {
  if ((HEAP32[i10 + 20 >> 2] & 65536 | 0) != 0) {
   __ZNK7WebCore9RenderBox40applyCachedClipAndScrollOffsetForRepaintERNS_10LayoutRectE(i10, i3);
   if ((HEAP32[i3 + 8 >> 2] | 0) < 1) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) >= 1) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((HEAP8[i11] & 1) == 0) {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 512 >> 2] & 31](i25, i2, i3, i38);
  STACKTOP = i5;
  return;
 } else {
  __ZNK7WebCore12RenderObject27offsetFromAncestorContainerEPS0_(i22, i2 | 0, i25);
  i25 = HEAP32[i22 + 4 >> 2] | 0;
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - (HEAP32[i22 >> 2] | 0);
  i22 = i3 + 4 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - i25;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore9RenderBox25repaintLayerRectsForImageEPKvPKNS_9FillLayerEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 52 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 _memset(i13 | 0, 0, 16) | 0;
 if ((i3 | 0) == 0) {
  i20 = 0;
  STACKTOP = i5;
  return i20 | 0;
 }
 i21 = i1 | 0;
 i22 = i1 + 36 | 0;
 i23 = i1 + 4 | 0;
 i24 = i6 | 0;
 i25 = i8 + 4 | 0;
 i26 = i16 | 0;
 i27 = i17 | 0;
 i28 = i9 | 0;
 i29 = i10 | 0;
 i30 = i11 | 0;
 i31 = i12 | 0;
 i32 = i13;
 i33 = i15 + 4 | 0;
 i34 = i13 + 8 | 0;
 i13 = i34;
 i35 = i15 + 12 | 0;
 i36 = i1 + 20 | 0;
 i37 = i7 + 4 | 0;
 i38 = i7 | 0;
 i39 = i1 + 52 | 0;
 i40 = i18;
 i41 = i18 + 48 | 0;
 i42 = i18;
 i43 = i18 + 8 | 0;
 i44 = i19 | 0;
 i45 = i19 + 4 | 0;
 i46 = i19 + 8 | 0;
 i47 = i19 + 12 | 0;
 i48 = 0;
 i49 = i3;
 L4 : while (1) {
  i3 = i49 + 4 | 0;
  i50 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i50 | 0) == 0) {
    i51 = i48;
   } else {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i50 >> 2] | 0) + 60 >> 2] & 511](i50) | 0) != (i2 | 0)) {
     i51 = i48;
     break;
    }
    i52 = HEAP32[i3 >> 2] | 0;
    if (!(FUNCTION_TABLE_iiif[HEAP32[(HEAP32[i52 >> 2] | 0) + 12 >> 2] & 1](i52, i21, +HEAPF32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]) | 0)) {
     i51 = i48;
     break;
    }
    L10 : do {
     if ((i48 | 0) == 0) {
      L12 : do {
       if (i4) {
        i52 = HEAP32[i23 >> 2] | 0;
        i53 = HEAP32[(HEAP32[i52 + 20 >> 2] | 0) + 8 >> 2] | 0;
        i54 = HEAP32[i53 + 692 >> 2] | 0;
        if ((i54 | 0) == (i52 | 0)) {
         i55 = i53;
        } else {
         if ((HEAP32[i36 >> 2] & 128 | 0) != 0 | (i52 | 0) == 0) {
          break;
         }
         if ((HEAP32[i52 + 12 >> 2] & 4 | 0) == 0) {
          break;
         }
         i53 = HEAP32[i52 + 44 >> 2] | 0;
         i52 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
         if ((i53 | 0) != (i52 | 0)) {
          if ((HEAP32[i53 + 12 >> 2] | 0) != (HEAP32[i52 + 12 >> 2] | 0)) {
           break;
          }
          if ((HEAP32[i53 + 16 >> 2] | 0) != (HEAP32[i52 + 16 >> 2] | 0)) {
           break;
          }
         }
         i52 = i54 + 32 | 0;
         if ((HEAP32[i54 + 12 >> 2] & 2048 | 0) == 0) {
          i56 = i52 | 0;
         } else {
          i56 = HEAP32[i52 >> 2] | 0;
         }
         i52 = HEAP32[(HEAP32[i56 >> 2] | 0) + 36 >> 2] | 0;
         __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i7, i52, 23);
         if ((HEAP8[i37] & 1) != 0) {
          if ((HEAP32[i38 >> 2] | 0) >>> 0 >= 16777216 >>> 0) {
           break;
          }
         }
         i54 = (HEAP32[i52 + 12 >> 2] | 0) + 4 | 0;
         while (1) {
          if ((HEAP32[i54 + 4 >> 2] | 0) != 0) {
           break L12;
          }
          i54 = HEAP32[i54 >> 2] | 0;
          if ((i54 | 0) == 0) {
           break;
          }
         }
         i55 = HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
        }
        i54 = HEAP32[i55 + 1584 >> 2] | 0;
        i52 = i54 | 0;
        i53 = i54 + 116 | 0;
        i57 = HEAP32[i53 >> 2] | 0;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i57 >> 2] | 0) + 184 >> 2] & 127](i6, i57 | 0);
        i57 = HEAP32[i24 >> 2] | 0;
        i58 = HEAP32[i53 >> 2] | 0;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i58 >> 2] | 0) + 184 >> 2] & 127](i8, i58 | 0);
        i58 = HEAP32[i25 >> 2] | 0;
        i53 = i54;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i53 >> 2] | 0) + 776 >> 2] & 127](i16, i52);
        i59 = -(HEAP32[i26 >> 2] | 0) | 0;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i53 >> 2] | 0) + 768 >> 2] & 127](i17, i52);
        i53 = -(HEAP32[i27 >> 2] | 0) | 0;
        i60 = HEAP32[i54 + 52 >> 2] | 0;
        i61 = i54 | 0;
        i62 = i54;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i62 >> 2] | 0) + 776 >> 2] & 127](i9, i61);
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i62 >> 2] | 0) + 780 >> 2] & 127](i10, i61);
        i63 = HEAP32[i28 >> 2] | 0;
        i64 = HEAP32[i29 >> 2] | 0;
        i65 = i54;
        i66 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i65 >> 2] | 0) + 744 >> 2] & 511](i61) | 0;
        i67 = i63 + i60 + i64 + i66 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i65 >> 2] | 0) + 748 >> 2] & 511](i61) | 0) | 0;
        i66 = HEAP32[i54 + 56 >> 2] | 0;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i62 >> 2] | 0) + 768 >> 2] & 127](i11, i61);
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i62 >> 2] | 0) + 772 >> 2] & 127](i12, i61);
        i62 = HEAP32[i30 >> 2] | 0;
        i54 = HEAP32[i31 >> 2] | 0;
        i64 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i65 >> 2] | 0) + 736 >> 2] & 511](i61) | 0;
        i60 = i62 + i66 + i54 + i64 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i65 >> 2] | 0) + 740 >> 2] & 511](i61) | 0) | 0;
        HEAP32[i32 >> 2] = i59;
        HEAP32[i33 >> 2] = i53;
        HEAP32[i13 >> 2] = (i67 | 0) < (i57 | 0) ? i57 : i67;
        HEAP32[i35 >> 2] = (i60 | 0) < (i58 | 0) ? i58 : i60;
        i68 = i52;
        break L10;
       }
      } while (0);
      i52 = HEAP32[i39 >> 2] | 0;
      i60 = HEAP32[i39 + 4 >> 2] | 0;
      HEAP32[i14 >> 2] = 0;
      HEAP32[i14 + 4 >> 2] = 0;
      HEAP32[i34 >> 2] = i52;
      HEAP32[i34 + 4 >> 2] = i60;
      i68 = i1;
     } else {
      i68 = i48;
     }
    } while (0);
    _memset(i40 | 0, 0, 49) | 0;
    __ZNK7WebCore20RenderBoxModelObject32calculateBackgroundImageGeometryEPKNS_22RenderLayerModelObjectEPKNS_9FillLayerERKNS_10LayoutRectERNS0_23BackgroundImageGeometryEPNS_13RenderElementE(i68 | 0, 0, i49, i15, i18, 0);
    i69 = i68 | 0;
    if ((HEAP8[i41] & 1) != 0) {
     i70 = 26;
     break L4;
    }
    i60 = HEAP32[i43 >> 2] | 0;
    i52 = HEAP32[i43 + 4 >> 2] | 0;
    i58 = HEAP32[i42 + 4 >> 2] | 0;
    HEAP32[i44 >> 2] = HEAP32[i42 >> 2];
    HEAP32[i45 >> 2] = i58;
    HEAP32[i46 >> 2] = i60;
    HEAP32[i47 >> 2] = i52;
    __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i69, i19, 0);
    if (!((HEAP32[i42 >> 2] | 0) == (HEAP32[i14 >> 2] | 0) & (HEAP32[i42 + 4 >> 2] | 0) == (HEAP32[i14 + 4 >> 2] | 0))) {
     i51 = i68;
     break;
    }
    if ((HEAP32[i43 >> 2] | 0) != (HEAP32[i34 >> 2] | 0)) {
     i51 = i68;
     break;
    }
    if ((HEAP32[i43 + 4 >> 2] | 0) == (HEAP32[i34 + 4 >> 2] | 0)) {
     i20 = 1;
     i70 = 35;
     break L4;
    } else {
     i51 = i68;
    }
   }
  } while (0);
  i3 = HEAP32[i49 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i20 = 0;
   i70 = 32;
   break;
  } else {
   i48 = i51;
   i49 = i3;
  }
 }
 if ((i70 | 0) == 35) {
  STACKTOP = i5;
  return i20 | 0;
 } else if ((i70 | 0) == 26) {
  __ZNK7WebCore12RenderObject7repaintEb(i69, 0);
  i20 = 1;
  STACKTOP = i5;
  return i20 | 0;
 } else if ((i70 | 0) == 32) {
  STACKTOP = i5;
  return i20 | 0;
 }
 return 0;
}
function __ZNK7WebCore9RenderBox41perpendicularContainingBlockLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, i38 = 0, i39 = 0, i40 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = HEAP32[H_BASE + 1048 >> 2] | 0;
 L1 : do {
  if ((i12 | 0) != 0) {
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i12 + 8 >> 2] | 0;
   i15 = i2;
   i16 = i15 + ~(i15 << 15) | 0;
   i15 = (i16 >>> 10 ^ i16) * 9 & -1;
   i16 = i15 >>> 6 ^ i15;
   i15 = i16 + ~(i16 << 11) | 0;
   i16 = i15 >>> 16 ^ i15;
   i15 = i14 & i16;
   i17 = i13 + (i15 << 3) | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   i19 = (i18 | 0) == (i2 | 0);
   if (i19) {
    i20 = i17;
   } else {
    i21 = (i16 >>> 23) + ~i16 | 0;
    i22 = i21 << 12 ^ i21;
    i21 = i22 >>> 7 ^ i22;
    i22 = i21 << 2 ^ i21;
    i21 = i22 >>> 20 ^ i22 | 1;
    i22 = 0;
    i23 = i15;
    i24 = i18;
    while (1) {
     if ((i24 | 0) == 0) {
      break L1;
     }
     i25 = (i22 | 0) == 0 ? i21 : i22;
     i26 = i25 + i23 & i14;
     i27 = i13 + (i26 << 3) | 0;
     i28 = HEAP32[i27 >> 2] | 0;
     if ((i28 | 0) == (i2 | 0)) {
      i20 = i27;
      break;
     } else {
      i22 = i25;
      i23 = i26;
      i24 = i28;
     }
    }
   }
   if ((i20 | 0) == 0) {
    break;
   }
   L11 : do {
    if (i19) {
     i29 = i17;
     i30 = 12;
    } else {
     i24 = (i16 >>> 23) + ~i16 | 0;
     i23 = i24 << 12 ^ i24;
     i24 = i23 >>> 7 ^ i23;
     i23 = i24 << 2 ^ i24;
     i24 = i23 >>> 20 ^ i23 | 1;
     i23 = 0;
     i22 = i15;
     i21 = i18;
     while (1) {
      if ((i21 | 0) == 0) {
       break L11;
      }
      i28 = (i23 | 0) == 0 ? i24 : i23;
      i26 = i28 + i22 & i14;
      i25 = i13 + (i26 << 3) | 0;
      i27 = HEAP32[i25 >> 2] | 0;
      if ((i27 | 0) == (i2 | 0)) {
       i29 = i25;
       i30 = 12;
       break;
      } else {
       i23 = i28;
       i22 = i26;
       i21 = i27;
      }
     }
    }
   } while (0);
   do {
    if ((i30 | 0) == 12) {
     if ((i29 | 0) == 0) {
      break;
     }
     HEAP32[i1 >> 2] = HEAP32[i29 + 4 >> 2];
     STACKTOP = i3;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 } while (0);
 i29 = i2 | 0;
 i20 = __ZNK7WebCore12RenderObject15containingBlockEv(i29) | 0;
 i12 = i20 | 0;
 i13 = HEAP32[H_BASE + 1064 >> 2] | 0;
 L23 : do {
  if ((i13 | 0) != 0) {
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i18 = HEAP32[i13 + 8 >> 2] | 0;
   i15 = i20;
   i16 = i15 + ~(i15 << 15) | 0;
   i15 = (i16 >>> 10 ^ i16) * 9 & -1;
   i16 = i15 >>> 6 ^ i15;
   i15 = i16 + ~(i16 << 11) | 0;
   i16 = i15 >>> 16 ^ i15;
   i15 = i18 & i16;
   i17 = i14 + (i15 << 3) | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   i21 = (i19 | 0) == (i12 | 0);
   if (i21) {
    i31 = i17;
   } else {
    i22 = (i16 >>> 23) + ~i16 | 0;
    i23 = i22 << 12 ^ i22;
    i22 = i23 >>> 7 ^ i23;
    i23 = i22 << 2 ^ i22;
    i22 = i23 >>> 20 ^ i23 | 1;
    i23 = 0;
    i24 = i15;
    i27 = i19;
    while (1) {
     if ((i27 | 0) == 0) {
      break L23;
     }
     i26 = (i23 | 0) == 0 ? i22 : i23;
     i28 = i26 + i24 & i18;
     i25 = i14 + (i28 << 3) | 0;
     i32 = HEAP32[i25 >> 2] | 0;
     if ((i32 | 0) == (i12 | 0)) {
      i31 = i25;
      break;
     } else {
      i23 = i26;
      i24 = i28;
      i27 = i32;
     }
    }
   }
   if ((i31 | 0) == 0) {
    break;
   }
   L33 : do {
    if (i21) {
     i33 = i17;
     i30 = 26;
    } else {
     i27 = (i16 >>> 23) + ~i16 | 0;
     i24 = i27 << 12 ^ i27;
     i27 = i24 >>> 7 ^ i24;
     i24 = i27 << 2 ^ i27;
     i27 = i24 >>> 20 ^ i24 | 1;
     i24 = 0;
     i23 = i15;
     i22 = i19;
     while (1) {
      if ((i22 | 0) == 0) {
       break L33;
      }
      i32 = (i24 | 0) == 0 ? i27 : i24;
      i28 = i32 + i23 & i18;
      i26 = i14 + (i28 << 3) | 0;
      i25 = HEAP32[i26 >> 2] | 0;
      if ((i25 | 0) == (i12 | 0)) {
       i33 = i26;
       i30 = 26;
       break;
      } else {
       i24 = i32;
       i23 = i28;
       i22 = i25;
      }
     }
    }
   } while (0);
   do {
    if ((i30 | 0) == 26) {
     if ((i33 | 0) == 0) {
      break;
     }
     HEAP32[i1 >> 2] = HEAP32[i33 + 4 >> 2];
     STACKTOP = i3;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 } while (0);
 i33 = i20 + 36 | 0;
 i30 = HEAP32[i33 >> 2] | 0;
 i12 = i30 + 44 | 0;
 i31 = (HEAP32[i12 >> 2] | 0) >>> 13 & 3;
 if ((i31 | 0) == 3 | (i31 | 0) == 0) {
  i34 = (HEAP32[i30 + 4 >> 2] | 0) + 12 | 0;
 } else {
  i34 = (HEAP32[i30 + 4 >> 2] | 0) + 4 | 0;
 }
 i30 = i34;
 i34 = HEAP32[i30 >> 2] | 0;
 i31 = HEAP32[i30 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i34;
 HEAP32[i8 + 4 >> 2] = i31;
 if ((i34 & 0 | 0) == 0 & (i31 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
  i34 = i9 + 5 | 0;
  i35 = HEAP8[i34] | 0;
  i36 = i34;
 } else {
  i35 = (i31 >>> 8 | 0 << 24) & 255;
  i36 = i9 + 5 | 0;
 }
 if (i35 << 24 >> 24 == 3) {
  if ((HEAP8[i9 + 6 | 0] & 1) == 0) {
   d37 = +(HEAP32[i8 >> 2] | 0);
  } else {
   d37 = +HEAPF32[i8 >> 2];
  }
  do {
   if (d37 < +2147483647) {
    if (d37 <= +-2147483648) {
     i38 = -2147483648;
     break;
    }
    i38 = ~~d37;
   } else {
    i38 = 2147483647;
   }
  } while (0);
  if ((HEAP32[(HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
   i39 = i38;
  } else {
   i33 = i20 | 0;
   i8 = i20;
   i35 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 511](i33) | 0;
   i31 = i20;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i31 >> 2] | 0) + 720 >> 2] & 127](i7, i33);
   i20 = HEAP32[i7 >> 2] | 0;
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 756 >> 2] & 511](i33) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i31 >> 2] | 0) + 724 >> 2] & 127](i6, i33);
   i39 = i38 - (i20 + i35 + i7 + (HEAP32[i6 >> 2] | 0)) | 0;
  }
  HEAP32[i1 >> 2] = (i39 | 0) > 0 ? i39 : 0;
 } else {
  i39 = (HEAP32[i12 >> 2] | 0) >>> 13 & 3;
  i12 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
  i2 = i12 | 0;
  if ((i39 | 0) == 3 | (i39 | 0) == 0) {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 164 >> 2] & 63](i4, i2, 0);
   i40 = HEAP32[i4 + 12 >> 2] | 0;
  } else {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 164 >> 2] & 63](i5, i2, 0);
   i40 = HEAP32[i5 + 8 >> 2] | 0;
  }
  HEAP32[i10 >> 2] = i40;
  i5 = __ZNK7WebCore12RenderObject15containingBlockEv(i29) | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 904 >> 2] & 63](i11, i5 | 0, 0);
  HEAP32[i1 >> 2] = HEAP32[((i40 | 0) < (HEAP32[i11 >> 2] | 0) ? i10 : i11) >> 2];
 }
 if ((HEAP8[i36] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9RenderBox30splitAnonymousBoxesAroundChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) == (i4 | 0)) {
  i5 = i2;
  return i5 | 0;
 }
 i6 = i1 | 0;
 i7 = 0;
 i8 = i2;
 i2 = i3;
 L4 : while (1) {
  i3 = i8;
  i9 = i2;
  while (1) {
   i10 = i9 | 0;
   if ((HEAP32[i9 + 28 >> 2] | 0) != (i3 | 0)) {
    i11 = i9 + 20 | 0;
    if ((HEAP32[i11 >> 2] & 128 | 0) != 0) {
     break;
    }
   }
   i12 = HEAP32[i9 + 8 >> 2] | 0;
   if ((i12 | 0) == (i4 | 0)) {
    i13 = 41;
    break L4;
   } else {
    i3 = i10;
    i9 = i12;
   }
  }
  i12 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 996 >> 2] & 15](i9, i6) | 0;
  i14 = i12 | 0;
  i15 = i12 + 20 | 0;
  HEAP32[i15 >> 2] = HEAP32[i15 >> 2] & -2097153 | HEAP32[i11 >> 2] & 2097152;
  i16 = HEAP32[i9 + 8 >> 2] | 0;
  i17 = i16 | 0;
  i18 = i16;
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 184 >> 2] & 511](i17) | 0) {
    i19 = i16;
    do {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i16 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
      i20 = i16 + 176 | 0;
      HEAP8[i20] = HEAP8[i20] | 4;
      i20 = i16 + 20 | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 & 1 | 0) != 0) {
       break;
      }
      HEAP32[i20 >> 2] = i21 | 1;
      __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i17, 1, 0);
      if ((HEAP32[i20 >> 2] & 32768 | 0) == 0) {
       break;
      }
      __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i17);
     }
    } while (0);
    __ZNK7WebCore11RenderTable14recalcSectionsEv(i19);
   } else {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 204 >> 2] & 511](i17) | 0)) {
     break;
    }
    __ZN7WebCore18RenderTableSection18setNeedsCellRecalcEv(i16);
   }
  } while (0);
  i18 = i16 + 20 | 0;
  i20 = HEAP32[i18 >> 2] | 0;
  do {
   if ((i20 & 1 | 0) == 0) {
    HEAP32[i18 >> 2] = i20 | 1;
    __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i17, 1, 0);
    if ((HEAP32[i18 >> 2] & 32768 | 0) == 0) {
     break;
    }
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i17);
   }
  } while (0);
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i17, 1, 1);
  __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i16, i14, HEAP32[i9 + 16 >> 2] | 0, 0);
  __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i9, i12 | 0, i3, 0, 0, 1);
  i18 = i9;
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 184 >> 2] & 511](i10) | 0) {
    i20 = i9;
    do {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i9 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
      i21 = i9 + 176 | 0;
      HEAP8[i21] = HEAP8[i21] | 4;
      i21 = HEAP32[i11 >> 2] | 0;
      if ((i21 & 1 | 0) != 0) {
       break;
      }
      HEAP32[i11 >> 2] = i21 | 1;
      __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i10, 1, 0);
      if ((HEAP32[i11 >> 2] & 32768 | 0) == 0) {
       break;
      }
      __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i10);
     }
    } while (0);
    __ZNK7WebCore11RenderTable14recalcSectionsEv(i20);
   } else {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 204 >> 2] & 511](i10) | 0)) {
     break;
    }
    __ZN7WebCore18RenderTableSection18setNeedsCellRecalcEv(i9);
   }
  } while (0);
  i9 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i9 & 1 | 0) == 0) {
    HEAP32[i11 >> 2] = i9 | 1;
    __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i10, 1, 0);
    if ((HEAP32[i11 >> 2] & 32768 | 0) == 0) {
     break;
    }
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i10);
   }
  } while (0);
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i10, 1, 1);
  i9 = i12;
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 184 >> 2] & 511](i14) | 0) {
    i18 = i12;
    do {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i12 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
      i3 = i12 + 176 | 0;
      HEAP8[i3] = HEAP8[i3] | 4;
      i3 = HEAP32[i15 >> 2] | 0;
      if ((i3 & 1 | 0) != 0) {
       break;
      }
      HEAP32[i15 >> 2] = i3 | 1;
      __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i14, 1, 0);
      if ((HEAP32[i15 >> 2] & 32768 | 0) == 0) {
       break;
      }
      __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i14);
     }
    } while (0);
    __ZNK7WebCore11RenderTable14recalcSectionsEv(i18);
   } else {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 204 >> 2] & 511](i14) | 0)) {
     break;
    }
    __ZN7WebCore18RenderTableSection18setNeedsCellRecalcEv(i12);
   }
  } while (0);
  i9 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i9 & 1 | 0) == 0) {
    HEAP32[i15 >> 2] = i9 | 1;
    __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i14, 1, 0);
    if ((HEAP32[i15 >> 2] & 32768 | 0) == 0) {
     break;
    }
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i14);
   }
  } while (0);
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i14, 1, 1);
  i15 = HEAP32[i12 + 8 >> 2] | 0;
  if ((i15 | 0) == (i4 | 0)) {
   i22 = i14;
   break;
  } else {
   i7 = 1;
   i8 = i14;
   i2 = i15;
  }
 }
 do {
  if ((i13 | 0) == 41) {
   if (i7) {
    i22 = i10;
    break;
   } else {
    i5 = i10;
   }
   return i5 | 0;
  }
 } while (0);
 i10 = i1 | 0;
 i7 = i1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 184 >> 2] & 511](i10) | 0) {
   i13 = i1;
   do {
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
     i2 = i1 + 176 | 0;
     HEAP8[i2] = HEAP8[i2] | 4;
     i2 = i1 + 20 | 0;
     i8 = HEAP32[i2 >> 2] | 0;
     if ((i8 & 1 | 0) != 0) {
      break;
     }
     HEAP32[i2 >> 2] = i8 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i10, 1, 0);
     if ((HEAP32[i2 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i10);
    }
   } while (0);
   __ZNK7WebCore11RenderTable14recalcSectionsEv(i13);
  } else {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 204 >> 2] & 511](i10) | 0)) {
    break;
   }
   __ZN7WebCore18RenderTableSection18setNeedsCellRecalcEv(i1);
  }
 } while (0);
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i1 & 1 | 0) == 0) {
   HEAP32[i7 >> 2] = i1 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i10, 1, 0);
   if ((HEAP32[i7 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i10);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i10, 1, 1);
 i5 = i22;
 return i5 | 0;
}
function __ZNK7WebCore9RenderBox29computeInlineDirectionMarginsEPNS_11RenderBlockENS_10LayoutUnitES3_RS3_S4_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i8 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i8 >> 2];
 i8 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i8 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i16;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = i18;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
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
 i28 = i2 + 36 | 0;
 i2 = HEAP32[i28 >> 2] | 0;
 i29 = i1 + 36 | 0;
 i30 = i2 + 44 | 0;
 i31 = i2 + 40 | 0;
 i2 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[(HEAP32[i29 >> 2] | 0) + 16 >> 2] | 0) + 36 | 0, (HEAP32[i30 >> 2] | 0) >>> 13 & 3, (HEAP32[i31 >> 2] | 0) >>> 30 & 1) | 0;
 i32 = HEAP32[i2 >> 2] | 0;
 i33 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i16 >> 2] = i32;
 HEAP32[i16 + 4 >> 2] = i33;
 if ((i32 & 0 | 0) == 0 & (i33 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i17);
 }
 i33 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[(HEAP32[i29 >> 2] | 0) + 16 >> 2] | 0) + 36 | 0, (HEAP32[i30 >> 2] | 0) >>> 13 & 3, (HEAP32[i31 >> 2] | 0) >>> 30 & 1) | 0;
 i30 = HEAP32[i33 >> 2] | 0;
 i29 = HEAP32[i33 + 4 >> 2] | 0;
 HEAP32[i18 >> 2] = i30;
 HEAP32[i18 + 4 >> 2] = i29;
 if ((i30 & 0 | 0) == 0 & (i29 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i19);
 }
 L7 : do {
  if ((HEAP32[i1 + 20 >> 2] & 1088 | 0) == 0) {
   i29 = (HEAP8[i17 + 5 | 0] | 0) == 0;
   i30 = (HEAP8[i19 + 5 | 0] | 0) == 0;
   do {
    if (i29) {
     if (!i30) {
      i34 = 16;
      break;
     }
     i18 = HEAP32[i4 >> 2] | 0;
     i33 = HEAP32[i3 >> 2] | 0;
     if ((i18 | 0) < (i33 | 0)) {
      i35 = i33;
      i36 = i18;
      i34 = 13;
     } else {
      i34 = 14;
     }
    } else {
     if (i30) {
      i34 = 14;
      break;
     }
     if ((HEAP32[(HEAP32[i28 >> 2] | 0) + 40 >> 2] & 122880 | 0) != 49152) {
      i34 = 16;
      break;
     }
     i35 = HEAP32[i3 >> 2] | 0;
     i36 = HEAP32[i4 >> 2] | 0;
     i34 = 13;
    }
   } while (0);
   do {
    if ((i34 | 0) == 13) {
     HEAP32[i8 >> 2] = i35;
     i30 = i1 + 4 | 0;
     __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i22, i17, i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
     HEAP32[i9 >> 2] = i35;
     __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i23, i19, i9, HEAP32[(HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
     i30 = i35 - i36 | 0;
     i18 = HEAP32[i22 >> 2] | 0;
     i33 = HEAP32[i23 >> 2] | 0;
     i32 = (i30 - i18 - i33 | 0) / 2 & -1;
     i16 = ((i32 | 0) > 0 ? i32 : 0) + i18 | 0;
     HEAP32[i5 >> 2] = i16;
     HEAP32[i6 >> 2] = i30 - i16 + i33;
     break L7;
    } else if ((i34 | 0) == 14) {
     i33 = HEAP32[i4 >> 2] | 0;
     i16 = HEAP32[i3 >> 2] | 0;
     if ((i33 | 0) >= (i16 | 0)) {
      i37 = 0;
      break;
     }
     HEAP32[i10 >> 2] = i16;
     __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i24, i17, i10, HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
     i30 = HEAP32[i24 >> 2] | 0;
     HEAP32[i5 >> 2] = i30;
     HEAP32[i6 >> 2] = i16 - i30 - i33;
     break L7;
    } else if ((i34 | 0) == 16) {
     i33 = HEAP32[i31 >> 2] | 0;
     if ((i33 & 1073864704 | 0) == 32768) {
      i37 = 1;
      break;
     }
     if ((i33 & 1073741824 | 0) == 0) {
      i37 = 0;
      break;
     }
     i37 = (i33 & 122880 | 0) == 40960;
    }
   } while (0);
   do {
    if (i29) {
     i33 = HEAP32[i4 >> 2] | 0;
     i30 = HEAP32[i3 >> 2] | 0;
     if ((i33 | 0) < (i30 | 0) | i37) {
      i38 = i30;
      i39 = i33;
      i34 = 23;
     } else {
      i40 = i30;
      i34 = 24;
     }
    } else {
     i30 = HEAP32[i3 >> 2] | 0;
     if (!i37) {
      i40 = i30;
      i34 = 24;
      break;
     }
     i38 = i30;
     i39 = HEAP32[i4 >> 2] | 0;
     i34 = 23;
    }
   } while (0);
   if ((i34 | 0) == 23) {
    HEAP32[i13 >> 2] = i38;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i25, i19, i13, HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i29 = HEAP32[i25 >> 2] | 0;
    HEAP32[i6 >> 2] = i29;
    HEAP32[i5 >> 2] = i38 - i29 - i39;
    break;
   } else if ((i34 | 0) == 24) {
    HEAP32[i14 >> 2] = i40;
    i29 = i1 + 4 | 0;
    __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i26, i17, i14, HEAP32[(HEAP32[(HEAP32[(HEAP32[i29 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i5 >> 2] = HEAP32[i26 >> 2];
    HEAP32[i15 >> 2] = i40;
    __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i27, i19, i15, HEAP32[(HEAP32[(HEAP32[(HEAP32[i29 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    HEAP32[i6 >> 2] = HEAP32[i27 >> 2];
    break;
   }
  } else {
   i29 = HEAP32[i3 >> 2] | 0;
   HEAP32[i12 >> 2] = i29;
   i30 = i1 + 4 | 0;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i20, i17, i12, HEAP32[(HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   HEAP32[i5 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i11 >> 2] = i29;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i21, i19, i11, HEAP32[(HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   HEAP32[i6 >> 2] = HEAP32[i21 >> 2];
  }
 } while (0);
 if ((HEAP8[i19 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i19);
 }
 if ((HEAP8[i17 + 5 | 0] | 0) != 10) {
  STACKTOP = i7;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i17);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore9RenderBox44percentageLogicalHeightIsResolvableFromBlockEPKNS_11RenderBlockEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i3 = i2;
 i2 = i1;
 while (1) {
  i4 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0;
  i1 = i2 | 0;
  i5 = i2 + 20 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  L3 : do {
   if ((i6 & 768 | 0) == 768) {
    i7 = i2;
    i8 = i1;
    i9 = i5;
    i10 = i6;
   } else {
    L5 : do {
     if (i4) {
      i11 = i2;
      i12 = i1;
      i13 = i5;
      i14 = i6;
      while (1) {
       do {
        if ((i14 & 128 | 0) == 0) {
         i15 = HEAP32[i11 + 4 >> 2] | 0;
         if ((i15 | 0) == 0) {
          break;
         }
         if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
          break;
         }
         i16 = HEAP32[i15 + 44 >> 2] | 0;
         i15 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
         if ((i16 | 0) == (i15 | 0)) {
          i17 = i11;
          i18 = i12;
          i19 = i13;
          break L5;
         }
         if ((HEAP32[i16 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i15 + 16 >> 2] | 0)) {
          i17 = i11;
          i18 = i12;
          i19 = i13;
          break L5;
         }
        }
       } while (0);
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 188 >> 2] & 511](i12) | 0) {
        i17 = i11;
        i18 = i12;
        i19 = i13;
        break L5;
       }
       if ((HEAP32[i13 >> 2] & 25165824 | 0) == 16777216) {
        i17 = i11;
        i18 = i12;
        i19 = i13;
        break L5;
       }
       i15 = HEAP32[i11 + 36 >> 2] | 0;
       i16 = (HEAP32[i15 + 44 >> 2] | 0) >>> 13 & 3;
       if ((i16 | 0) == 3 | (i16 | 0) == 0) {
        i20 = (HEAP32[i15 + 4 >> 2] | 0) + 12 | 0;
       } else {
        i20 = (HEAP32[i15 + 4 >> 2] | 0) + 4 | 0;
       }
       if ((HEAP8[i20 + 5 | 0] | 0) != 0) {
        i17 = i11;
        i18 = i12;
        i19 = i13;
        break L5;
       }
       i15 = __ZNK7WebCore12RenderObject15containingBlockEv(i12) | 0;
       i16 = i15 | 0;
       i21 = i15 + 20 | 0;
       i22 = HEAP32[i21 >> 2] | 0;
       if ((i22 & 768 | 0) == 768) {
        i7 = i15;
        i8 = i16;
        i9 = i21;
        i10 = i22;
        break L3;
       } else {
        i11 = i15;
        i12 = i16;
        i13 = i21;
        i14 = i22;
       }
      }
     } else {
      i14 = i2;
      i13 = i1;
      i12 = i5;
      i11 = i6;
      while (1) {
       do {
        if ((i11 & 128 | 0) == 0) {
         i22 = HEAP32[i14 + 4 >> 2] | 0;
         if ((i22 | 0) == 0) {
          break;
         }
         if ((HEAP32[i22 + 12 >> 2] & 4 | 0) == 0) {
          break;
         }
         i21 = HEAP32[i22 + 44 >> 2] | 0;
         i22 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
         if ((i21 | 0) == (i22 | 0)) {
          i17 = i14;
          i18 = i13;
          i19 = i12;
          break L5;
         }
         if ((HEAP32[i21 + 12 >> 2] | 0) != (HEAP32[i22 + 12 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i21 + 16 >> 2] | 0) == (HEAP32[i22 + 16 >> 2] | 0)) {
          i17 = i14;
          i18 = i13;
          i19 = i12;
          break L5;
         }
        }
       } while (0);
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 188 >> 2] & 511](i13) | 0) {
        i17 = i14;
        i18 = i13;
        i19 = i12;
        break L5;
       }
       if ((HEAP32[i12 >> 2] & 25165824 | 0) == 16777216) {
        i17 = i14;
        i18 = i13;
        i19 = i12;
        break L5;
       }
       i22 = HEAP32[i14 + 36 >> 2] | 0;
       i21 = (HEAP32[i22 + 44 >> 2] | 0) >>> 13 & 3;
       if ((i21 | 0) == 3 | (i21 | 0) == 0) {
        i23 = (HEAP32[i22 + 4 >> 2] | 0) + 12 | 0;
       } else {
        i23 = (HEAP32[i22 + 4 >> 2] | 0) + 4 | 0;
       }
       if ((HEAP8[i23 + 5 | 0] | 0) != 0) {
        i17 = i14;
        i18 = i13;
        i19 = i12;
        break L5;
       }
       if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i13) | 0)) {
        i17 = i14;
        i18 = i13;
        i19 = i12;
        break L5;
       }
       i22 = __ZNK7WebCore12RenderObject15containingBlockEv(i13) | 0;
       i21 = i22 | 0;
       i16 = i22 + 20 | 0;
       i15 = HEAP32[i16 >> 2] | 0;
       if ((i15 & 768 | 0) == 768) {
        i7 = i22;
        i8 = i21;
        i9 = i16;
        i10 = i15;
        break L3;
       } else {
        i14 = i22;
        i13 = i21;
        i12 = i16;
        i11 = i15;
       }
      }
     }
    } while (0);
    i7 = i17;
    i8 = i18;
    i9 = i19;
    i10 = HEAP32[i19 >> 2] | 0;
   }
  } while (0);
  do {
   if ((i10 & 25165824 | 0) == 16777216) {
    i6 = HEAP32[i7 + 36 >> 2] | 0;
    i5 = (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i5 | 0) == 3 | (i5 | 0) == 0) {
     i24 = (HEAP32[i6 + 4 >> 2] | 0) + 12 | 0;
    } else {
     i24 = (HEAP32[i6 + 4 >> 2] | 0) + 4 | 0;
    }
    if ((HEAP8[i24 + 5 | 0] | 0) != 0) {
     i25 = 1;
     break;
    }
    i5 = HEAP32[i6 + 16 >> 2] | 0;
    if ((HEAP8[i5 + 25 | 0] | 0) == 0) {
     i25 = 0;
     break;
    }
    i25 = (HEAP8[i5 + 33 | 0] | 0) != 0;
   } else {
    i25 = 0;
   }
  } while (0);
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 188 >> 2] & 511](i8) | 0) {
   i26 = 54;
   break;
  }
  i5 = HEAP32[i7 + 36 >> 2] | 0;
  i6 = (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3;
  if ((i6 | 0) == 3 | (i6 | 0) == 0) {
   i1 = HEAP32[i5 + 4 >> 2] | 0;
   i27 = i1 + 12 | 0;
   i28 = i1;
  } else {
   i1 = HEAP32[i5 + 4 >> 2] | 0;
   i27 = i1 + 4 | 0;
   i28 = i1;
  }
  if ((HEAP8[i27 + 5 | 0] | 0) == 3) {
   i26 = 55;
   break;
  }
  if ((i6 | 0) == 3 | (i6 | 0) == 0) {
   i29 = i28 + 12 | 0;
  } else {
   i29 = i28 + 4 | 0;
  }
  i6 = HEAP8[i29 + 5 | 0] | 0;
  if (i6 << 24 >> 24 != 10 & i6 << 24 >> 24 != 2 | i25) {
   i26 = 49;
   break;
  }
  i6 = __ZNK7WebCore12RenderObject15containingBlockEv(i8) | 0;
  i3 = (HEAP32[i9 >> 2] & 25165824 | 0) == 16777216;
  i2 = i6;
 }
 if ((i26 | 0) == 49) {
  i2 = HEAP32[i9 >> 2] | 0;
  if ((i2 & 512 | 0) == 0) {
   i30 = 0;
  } else {
   i30 = (i2 & 256 | 0) != 0;
  }
  if (i30 | i4 | i25) {
   return 1;
  } else {
   i25 = HEAP32[i7 + 4 >> 2] | 0;
   return (HEAP32[(HEAP32[(HEAP32[i25 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i25 | 0) & i3 | 0;
  }
 } else if ((i26 | 0) == 54) {
  return 1;
 } else if ((i26 | 0) == 55) {
  return 1;
 }
 return 0;
}
function __ZNK7WebCore9RenderBox32computeLogicalWidthInRegionUsingENS_8SizeTypeENS_6LengthENS_10LayoutUnitEPKNS_11RenderBlockEPNS_12RenderRegionE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i9 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 48 | 0;
 i16 = i8 + 56 | 0;
 i17 = i8 + 64 | 0;
 i18 = i8 + 72 | 0;
 i19 = i8 + 80 | 0;
 i20 = i19;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
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
 i29 = HEAP8[i4 + 5 | 0] | 0;
 i30 = ((i29 & 255) - 6 | 0) >>> 0 < 4 >>> 0;
 do {
  if (i29 << 24 >> 24 == 0 | (i29 - 4 & 255) >>> 0 < 2 >>> 0) {
   if (i30) {
    break;
   }
   i31 = HEAP32[i5 >> 2] | 0;
   i32 = i2 + 36 | 0;
   i33 = HEAP32[i32 >> 2] | 0;
   i34 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i33 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i33 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i33 + 40 >> 2] | 0) >>> 30 & 1) | 0;
   HEAP32[i9 >> 2] = i31;
   i33 = i2 + 4 | 0;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i11, i34, i9, HEAP32[(HEAP32[(HEAP32[(HEAP32[i33 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i34 = HEAP32[i11 >> 2] | 0;
   i35 = HEAP32[i32 >> 2] | 0;
   i36 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i35 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i35 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i35 + 40 >> 2] | 0) >>> 30 & 1) | 0;
   HEAP32[i10 >> 2] = i31;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i12, i36, i10, HEAP32[(HEAP32[(HEAP32[(HEAP32[i33 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i33 = HEAP32[i12 >> 2] | 0;
   i36 = i31 - i34 - i33 | 0;
   HEAP32[i23 >> 2] = i36;
   i31 = i2 + 20 | 0;
   if ((HEAP32[i31 >> 2] & 1024 | 0) == 0) {
    i37 = 13;
   } else {
    if (__ZNK7WebCore12RenderObject13isHTMLMarqueeEv(i2 | 0) | 0) {
     i37 = 13;
    } else {
     i38 = i36;
    }
   }
   do {
    if ((i37 | 0) == 13) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 972 >> 2] & 511](i2) | 0)) {
      i38 = i36;
      break;
     }
     if ((HEAP32[i31 >> 2] & 64 | 0) != 0) {
      i38 = i36;
      break;
     }
     if ((HEAP8[(HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] | 0) + 9 | 0] | 0) != 0) {
      i38 = i36;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 1024 >> 2] & 511](i6) | 0)) {
      i38 = i36;
      break;
     }
     HEAP32[i25 >> 2] = i34;
     HEAP32[i26 >> 2] = i33;
     __ZNK7WebCore9RenderBox31shrinkLogicalWidthToAvoidFloatsENS_10LayoutUnitES1_PKNS_11RenderBlockEPNS_12RenderRegionE(i24, i2, i25, i26, i6, i7);
     i35 = HEAP32[((HEAP32[i24 >> 2] | 0) < (i36 | 0) ? i24 : i23) >> 2] | 0;
     HEAP32[i23 >> 2] = i35;
     i38 = i35;
    }
   } while (0);
   do {
    if ((i3 | 0) == 0) {
     if (!(__ZNK7WebCore9RenderBox29sizesLogicalWidthToFitContentENS_8SizeTypeE(i2, 0) | 0)) {
      break;
     }
     i36 = i2;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i36 >> 2] | 0) + 484 >> 2] & 127](i27, i2);
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i36 >> 2] | 0) + 488 >> 2] & 127](i28, i2);
     i36 = (i38 | 0) < (HEAP32[i28 >> 2] | 0) ? i23 : i28;
     HEAP32[i1 >> 2] = HEAP32[((HEAP32[i27 >> 2] | 0) < (HEAP32[i36 >> 2] | 0) ? i36 : i27) >> 2];
     STACKTOP = i8;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = i38;
   STACKTOP = i8;
   return;
  } else {
   if (i30) {
    break;
   }
   HEAP32[i17 >> 2] = HEAP32[i5 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i18, i4, i17, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i36 = HEAP32[i18 >> 2] | 0;
   i33 = i2 | 0;
   i34 = i2;
   i32 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 760 >> 2] & 511](i33) | 0;
   i31 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 764 >> 2] & 511](i33) | 0) + i32 | 0;
   i32 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i32 >> 2] | 0) + 728 >> 2] & 127](i15, i33);
   i34 = i31 + (HEAP32[i15 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i32 >> 2] | 0) + 732 >> 2] & 127](i16, i33);
   i33 = i34 + (HEAP32[i16 >> 2] | 0) | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
    HEAP32[i1 >> 2] = i36 + i33;
    STACKTOP = i8;
    return;
   } else {
    HEAP32[i1 >> 2] = (i36 | 0) < (i33 | 0) ? i33 : i36;
    STACKTOP = i8;
    return;
   }
  }
 } while (0);
 i16 = i4;
 i4 = HEAP32[i16 >> 2] | 0;
 i15 = HEAP32[i16 + 4 >> 2] | 0;
 HEAP32[i19 >> 2] = i4;
 HEAP32[i19 + 4 >> 2] = i15;
 if ((i4 & 0 | 0) == 0 & (i15 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i20);
 }
 HEAP32[i21 >> 2] = HEAP32[i5 >> 2];
 i5 = i2 | 0;
 i15 = i2;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 760 >> 2] & 511](i5) | 0;
 i19 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 764 >> 2] & 511](i5) | 0) + i4 | 0;
 i4 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 728 >> 2] & 127](i13, i5);
 i15 = i19 + (HEAP32[i13 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 732 >> 2] & 127](i14, i5);
 HEAP32[i22 >> 2] = i15 + (HEAP32[i14 >> 2] | 0);
 __ZNK7WebCore9RenderBox33computeIntrinsicLogicalWidthUsingENS_6LengthENS_10LayoutUnitES2_(i1, i2, i20, i21, i22);
 if ((HEAP8[i20 + 5 | 0] | 0) != 10) {
  STACKTOP = i8;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i20);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore9RenderBox15paintFillLayersERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceENS_17CompositeOperatorEPNS_13RenderElementE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 56 | 0;
 i13 = i11 + 12 | 0;
 i14 = i11 | 0;
 HEAP32[i14 >> 2] = i13;
 i15 = i11 + 4 | 0;
 HEAP32[i15 >> 2] = 8;
 i16 = i11 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i12 >> 2] = i4;
 do {
  if ((i4 | 0) == 0) {
   i17 = HEAP32[i2 >> 2] | 0;
   i18 = 0;
  } else {
   i11 = i12;
   i19 = i1 | 0;
   i20 = i1 | 0;
   i21 = i1 + 36 | 0;
   i22 = i4;
   i23 = 0;
   i24 = 0;
   i25 = 8;
   L3 : while (1) {
    if ((i24 | 0) == (i25 | 0)) {
     i26 = i25 + 1 | 0;
     i27 = HEAP32[i14 >> 2] | 0;
     do {
      if (i27 >>> 0 > i12 >>> 0) {
       i28 = 8;
      } else {
       if ((i27 + (i25 << 2) | 0) >>> 0 <= i12 >>> 0) {
        i28 = 8;
        break;
       }
       i29 = i11 - i27 >> 2;
       i30 = i26 + (i25 >>> 2) | 0;
       i31 = i30 >>> 0 > 16 >>> 0 ? i30 : 16;
       i30 = i31 >>> 0 > i26 >>> 0 ? i31 : i26;
       do {
        if (i25 >>> 0 < i30 >>> 0) {
         if (i30 >>> 0 > 8 >>> 0) {
          if (i30 >>> 0 > 1073741823 >>> 0) {
           i28 = 22;
           break L3;
          }
          i31 = __ZN3WTF18fastMallocGoodSizeEj(i30 << 2) | 0;
          HEAP32[i15 >> 2] = i31 >>> 2;
          i32 = __ZN3WTF10fastMallocEj(i31) | 0;
          HEAP32[i14 >> 2] = i32;
          i33 = i32;
         } else {
          HEAP32[i14 >> 2] = i13;
          HEAP32[i15 >> 2] = 8;
          i33 = i13;
         }
         i32 = i27;
         _memcpy(i33 | 0, i32 | 0, i25 << 2) | 0;
         if ((i13 | 0) == (i27 | 0) | (i27 | 0) == 0) {
          break;
         }
         if ((HEAP32[i14 >> 2] | 0) == (i27 | 0)) {
          HEAP32[i14 >> 2] = 0;
          HEAP32[i15 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i32);
        }
       } while (0);
       i30 = HEAP32[i14 >> 2] | 0;
       i34 = i30 + (i29 << 2) | 0;
       i35 = i30;
      }
     } while (0);
     if ((i28 | 0) == 8) {
      i28 = 0;
      i30 = i26 + (i25 >>> 2) | 0;
      i32 = i30 >>> 0 > 16 >>> 0 ? i30 : 16;
      i30 = i32 >>> 0 > i26 >>> 0 ? i32 : i26;
      do {
       if (i25 >>> 0 < i30 >>> 0) {
        if (i30 >>> 0 > 8 >>> 0) {
         if (i30 >>> 0 > 1073741823 >>> 0) {
          i28 = 11;
          break L3;
         }
         i32 = __ZN3WTF18fastMallocGoodSizeEj(i30 << 2) | 0;
         HEAP32[i15 >> 2] = i32 >>> 2;
         i31 = __ZN3WTF10fastMallocEj(i32) | 0;
         HEAP32[i14 >> 2] = i31;
         i36 = i31;
        } else {
         HEAP32[i14 >> 2] = i13;
         HEAP32[i15 >> 2] = 8;
         i36 = i13;
        }
        i31 = i27;
        _memcpy(i36 | 0, i31 | 0, i25 << 2) | 0;
        if ((i13 | 0) == (i27 | 0) | (i27 | 0) == 0) {
         break;
        }
        if ((HEAP32[i14 >> 2] | 0) == (i27 | 0)) {
         HEAP32[i14 >> 2] = 0;
         HEAP32[i15 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i31);
       }
      } while (0);
      i34 = i12;
      i35 = HEAP32[i14 >> 2] | 0;
     }
     HEAP32[i35 + (HEAP32[i16 >> 2] << 2) >> 2] = HEAP32[i34 >> 2];
     i37 = HEAP32[i16 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i14 >> 2] | 0) + (i24 << 2) >> 2] = i22;
     i37 = HEAP32[i16 >> 2] | 0;
    }
    HEAP32[i16 >> 2] = i37 + 1;
    i27 = HEAP32[i12 >> 2] | 0;
    if (i23) {
     i38 = 1;
    } else {
     i38 = (HEAP32[i27 + 40 >> 2] & 8126464 | 0) != 0;
    }
    do {
     if (__ZNK7WebCore9FillLayer22clipOccludesNextLayersEb(i27, (i27 | 0) == (i4 | 0)) | 0) {
      if (!(__ZNK7WebCore9FillLayer14hasOpaqueImageEPKNS_13RenderElementE(HEAP32[i12 >> 2] | 0, i19) | 0)) {
       break;
      }
      i30 = HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] | 0;
      if (!(FUNCTION_TABLE_iiif[HEAP32[(HEAP32[i30 >> 2] | 0) + 12 >> 2] & 1](i30, i20, +HEAPF32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]) | 0)) {
       break;
      }
      if (!(__ZNK7WebCore9FillLayer11hasRepeatXYEv(HEAP32[i12 >> 2] | 0) | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[i12 >> 2] | 0) + 40 >> 2] & 8126464 | 0) == 0) {
       i28 = 40;
       break L3;
      }
     }
    } while (0);
    i27 = HEAP32[HEAP32[i12 >> 2] >> 2] | 0;
    HEAP32[i12 >> 2] = i27;
    if ((i27 | 0) == 0) {
     i28 = 40;
     break;
    }
    i22 = i27;
    i23 = i38;
    i24 = HEAP32[i16 >> 2] | 0;
    i25 = HEAP32[i15 >> 2] | 0;
   }
   if ((i28 | 0) == 22) {
    _WTFCrash();
   } else if ((i28 | 0) == 40) {
    i25 = HEAP32[i2 >> 2] | 0;
    if (!(i38 & (i25 | 0) != 0)) {
     i17 = i25;
     i18 = 0;
     break;
    }
    __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(i25, +1);
    i17 = i25;
    i18 = 1;
    break;
   } else if ((i28 | 0) == 11) {
    _WTFCrash();
   }
  }
 } while (0);
 i28 = HEAP32[i14 >> 2] | 0;
 i38 = HEAP32[i16 >> 2] | 0;
 if ((i38 | 0) != 0) {
  i12 = i1 | 0;
  i1 = i10 | 0;
  i4 = i10 + 4 | 0;
  i37 = i28 + (i38 << 2) | 0;
  while (1) {
   i37 = i37 - 4 | 0;
   i38 = HEAP32[i37 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   HEAP32[i4 >> 2] = 0;
   __ZN7WebCore20RenderBoxModelObject22paintFillLayerExtendedERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxERKNS_10LayoutSizeENS_17CompositeOperatorEPNS_13RenderElementE(i12, i2, i3, i38, i5, i6, 0, i10, i7, i8);
   if ((i37 | 0) == (i28 | 0)) {
    break;
   }
  }
 }
 if (i18) {
  __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(i17);
 }
 if ((HEAP32[i16 >> 2] | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
 }
 i16 = HEAP32[i14 >> 2] | 0;
 if ((i13 | 0) == (i16 | 0) | (i16 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 HEAP32[i14 >> 2] = 0;
 HEAP32[i15 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i16);
 STACKTOP = i9;
 return;
}
function __ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 L1 : do {
  if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
   i15 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i16 = HEAP32[i15 + 44 >> 2] | 0;
   i17 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i16 | 0) != (i17 | 0)) {
    if ((HEAP32[i16 + 12 >> 2] | 0) != (HEAP32[i17 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i16 + 16 >> 2] | 0) != (HEAP32[i17 + 16 >> 2] | 0)) {
     break;
    }
   }
   i17 = HEAP32[(HEAP32[(HEAP32[i15 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
   i15 = i17 + 32 | 0;
   if ((HEAP32[i17 + 12 >> 2] & 2048 | 0) == 0) {
    i18 = i15 | 0;
   } else {
    i18 = HEAP32[i15 >> 2] | 0;
   }
   i15 = HEAP32[i18 >> 2] | 0;
   i17 = i15;
   if ((i15 | 0) == 0) {
    break;
   }
   i16 = HEAP32[i15 + 36 >> 2] | 0;
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i4, i16, 23);
   if ((HEAP8[i4 + 4 | 0] & 1) != 0) {
    if ((HEAP32[i4 >> 2] | 0) >>> 0 >= 16777216 >>> 0) {
     break;
    }
   }
   i15 = (HEAP32[i16 + 12 >> 2] | 0) + 4 | 0;
   while (1) {
    if ((HEAP32[i15 + 4 >> 2] | 0) != 0) {
     break L1;
    }
    i15 = HEAP32[i15 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    }
   }
   if ((i17 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
    i19 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i19 | 0;
  }
 } while (0);
 i4 = i1 + 36 | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i10, HEAP32[i4 >> 2] | 0, 23);
 if ((HEAP8[i10 + 4 | 0] & 1) == 0) {
  i19 = 0;
  STACKTOP = i3;
  return i19 | 0;
 }
 if ((HEAP32[i10 >> 2] & -16777216 | 0) != -16777216) {
  i19 = 0;
  STACKTOP = i3;
  return i19 | 0;
 }
 i10 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) != 0) {
  i19 = 0;
  STACKTOP = i3;
  return i19 | 0;
 }
 i4 = HEAP32[i10 + 16 >> 2] | 0;
 i18 = i4 + 136 | 0;
 if ((HEAP8[i4 + 141 | 0] | 0) == 10) {
  i19 = 0;
  STACKTOP = i3;
  return i19 | 0;
 }
 do {
  if ((HEAP8[i4 + 142 | 0] & 1) == 0) {
   if ((HEAP32[i18 >> 2] | 0) == 0) {
    break;
   } else {
    i19 = 0;
   }
   STACKTOP = i3;
   return i19 | 0;
  } else {
   if (+HEAPF32[i18 >> 2] != +0) {
    i19 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i19 | 0;
  }
 } while (0);
 i18 = i4 + 152 | 0;
 if ((HEAP8[i4 + 157 | 0] | 0) == 10) {
  i19 = 0;
  STACKTOP = i3;
  return i19 | 0;
 }
 do {
  if ((HEAP8[i4 + 158 | 0] & 1) == 0) {
   if ((HEAP32[i18 >> 2] | 0) == 0) {
    break;
   } else {
    i19 = 0;
   }
   STACKTOP = i3;
   return i19 | 0;
  } else {
   if (+HEAPF32[i18 >> 2] != +0) {
    i19 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i19 | 0;
  }
 } while (0);
 i18 = i4 + 168 | 0;
 if ((HEAP8[i4 + 173 | 0] | 0) == 10) {
  i19 = 0;
  STACKTOP = i3;
  return i19 | 0;
 }
 do {
  if ((HEAP8[i4 + 174 | 0] & 1) == 0) {
   if ((HEAP32[i18 >> 2] | 0) == 0) {
    break;
   } else {
    i19 = 0;
   }
   STACKTOP = i3;
   return i19 | 0;
  } else {
   if (+HEAPF32[i18 >> 2] != +0) {
    i19 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i19 | 0;
  }
 } while (0);
 i18 = i4 + 184 | 0;
 if ((HEAP8[i4 + 189 | 0] | 0) == 10) {
  i19 = 0;
  STACKTOP = i3;
  return i19 | 0;
 }
 do {
  if ((HEAP8[i4 + 190 | 0] & 1) == 0) {
   if ((HEAP32[i18 >> 2] | 0) == 0) {
    break;
   } else {
    i19 = 0;
   }
   STACKTOP = i3;
   return i19 | 0;
  } else {
   if (+HEAPF32[i18 >> 2] != +0) {
    i19 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i19 | 0;
  }
 } while (0);
 i18 = i10 + 12 | 0;
 if ((HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] | 0) != 0) {
  i19 = 0;
  STACKTOP = i3;
  return i19 | 0;
 }
 i10 = i11;
 _memset(i10 | 0, 0, 16) | 0;
 i4 = (HEAP32[(HEAP32[i18 >> 2] | 0) + 44 >> 2] | 0) >>> 2 & 3;
 if ((i4 | 0) == 0) {
  i18 = i1 + 52 | 0;
  i15 = HEAP32[i18 >> 2] | 0;
  i16 = HEAP32[i18 + 4 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  i12 = i11 + 8 | 0;
  HEAP32[i12 >> 2] = i15;
  HEAP32[i12 + 4 >> 2] = i16;
 } else if ((i4 | 0) == 1) {
  __ZNK7WebCore9RenderBox14paddingBoxRectEv(i14, i1);
  i16 = i14;
  HEAP32[i10 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i10 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
  HEAP32[i10 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
  HEAP32[i10 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
 } else if ((i4 | 0) == 2) {
  i4 = i1 | 0;
  i16 = i1;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 744 >> 2] & 511](i4) | 0;
  i14 = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 712 >> 2] & 127](i7, i4);
  i12 = (HEAP32[i7 >> 2] | 0) + i10 | 0;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 736 >> 2] & 511](i4) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 704 >> 2] & 127](i8, i4);
  i7 = (HEAP32[i8 >> 2] | 0) + i10 | 0;
  i10 = HEAP32[i1 + 52 >> 2] | 0;
  i8 = i10 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 744 >> 2] & 511](i4) | 0) | 0;
  i10 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 748 >> 2] & 511](i4) | 0) | 0;
  i16 = i10 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 908 >> 2] & 511](i1) | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 712 >> 2] & 127](i5, i4);
  i10 = i16 - (HEAP32[i5 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 716 >> 2] & 127](i6, i4);
  i4 = i10 - (HEAP32[i6 >> 2] | 0) | 0;
  __ZNK7WebCore9RenderBox13contentHeightEv(i9, i1);
  i1 = HEAP32[i9 >> 2] | 0;
  HEAP32[i11 >> 2] = i12;
  HEAP32[i13 + 4 >> 2] = i7;
  HEAP32[i11 + 8 >> 2] = i4;
  HEAP32[i13 + 12 >> 2] = i1;
 }
 i19 = __ZNK7WebCore10LayoutRect8containsERKS0_(i13, i2) | 0;
 STACKTOP = i3;
 return i19 | 0;
}
function __ZNK7WebCore9RenderBox29sizesLogicalWidthToFitContentENS_8SizeTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = i1 | 0;
 i7 = i1 + 20 | 0;
 if ((HEAP32[i7 >> 2] & 64 | 0) != 0) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 96 >> 2] & 511](i6) | 0) {
   if (__ZNK7WebCore12RenderObject13isHTMLMarqueeEv(i6) | 0) {
    break;
   } else {
    i8 = 1;
   }
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 i9 = i1 + 36 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i2 | 0) == 2) {
   if ((i11 | 0) == 3 | (i11 | 0) == 0) {
    i12 = (HEAP32[i10 + 4 >> 2] | 0) + 28 | 0;
    break;
   } else {
    i12 = (HEAP32[i10 + 4 >> 2] | 0) + 44 | 0;
    break;
   }
  } else {
   if ((i11 | 0) == 3 | (i11 | 0) == 0) {
    i12 = (HEAP32[i10 + 4 >> 2] | 0) + 4 | 0;
    break;
   } else {
    i12 = (HEAP32[i10 + 4 >> 2] | 0) + 12 | 0;
    break;
   }
  }
 } while (0);
 i10 = i12;
 i12 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i12;
 HEAP32[i4 + 4 >> 2] = i11;
 if ((i12 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
  i12 = i5 + 5 | 0;
  i13 = HEAP8[i12] | 0;
  i14 = i12;
 } else {
  i13 = (i11 >>> 8 | 0 << 24) & 255;
  i14 = i5 + 5 | 0;
 }
 if (i13 << 24 >> 24 == 4) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i13 = i1 + 8 | 0;
 i11 = HEAP32[i13 >> 2] | 0;
 i12 = HEAP32[i11 + 36 >> 2] | 0;
 if ((HEAP32[i12 + 48 >> 2] & 7168 | 0) == 5120) {
  switch ((HEAP32[(HEAP32[(HEAP32[i12 + 20 >> 2] | 0) + 64 >> 2] | 0) + 20 >> 2] | 0) >>> 2 << 29 >> 29 | 0) {
  case -1:
  case -3:
  case 3:
  case 1:
  case 0:
   {
    i15 = 1;
    break;
   }
  default:
   {
    i16 = 17;
   }
  }
 } else {
  i16 = 17;
 }
 L27 : do {
  if ((i16 | 0) == 17) {
   i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 556 >> 2] & 511](i11 | 0) | 0;
   i4 = HEAP32[i13 >> 2] | 0;
   do {
    if (i12) {
     i10 = HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 20 >> 2] | 0;
     i2 = HEAP32[(HEAP32[i10 + 60 >> 2] | 0) + 20 >> 2] | 0;
     if (!(((i2 & 3) - 2 | 0) >>> 0 < 2 >>> 0 & (i2 & 12 | 0) == 0)) {
      i15 = 1;
      break L27;
     }
     i2 = (HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] | 0) >>> 17 & 7;
     if ((i2 | 0) == 4) {
      break;
     } else if ((i2 | 0) != 0) {
      i15 = 1;
      break L27;
     }
     if ((HEAP32[i10 + 292 >> 2] & 114688 | 0) != 65536) {
      i15 = 1;
      break L27;
     }
    }
   } while (0);
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 548 >> 2] & 511](i4 | 0) | 0) {
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 56 >> 2] | 0) + 16 >> 2] & 39 | 0) != 32) {
     i15 = 1;
     break;
    }
   }
   L37 : do {
    if ((HEAP8[i14] | 0) == 0) {
     i12 = HEAP32[i13 >> 2] | 0;
     i10 = i12 | 0;
     i2 = i12;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 548 >> 2] & 511](i10) | 0) {
      if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 20 >> 2] | 0) + 56 >> 2] | 0) + 16 >> 2] & 39 | 0) == 32) {
       break;
      }
     }
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 556 >> 2] & 511](i10) | 0) {
       i17 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 20 >> 2] | 0) + 60 >> 2] | 0) + 20 >> 2] | 0;
       if ((i17 & 12 | 0) != 0) {
        break;
       }
       if (((i17 & 3) - 2 | 0) >>> 0 >= 2 >>> 0) {
        break;
       }
       i17 = (HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] | 0) >>> 17 & 7;
       if ((i17 | 0) == 4) {
        break L37;
       } else if ((i17 | 0) != 0) {
        break;
       }
       if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 114688 | 0) == 65536) {
        break L37;
       }
      }
     } while (0);
     if ((HEAP32[i7 >> 2] & 128 | 0) != 0) {
      break;
     }
     i12 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     i10 = (HEAP32[i12 + 12 >> 2] & 16 | 0) == 0;
     i2 = HEAP32[i12 + 44 >> 2] | 0;
     if (!i10) {
      if ((HEAP32[i2 + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
       i15 = 1;
       break L27;
      }
     }
     i12 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
     if ((i2 | 0) == (i12 | 0)) {
      i15 = 1;
      break L27;
     }
     i17 = HEAP32[i2 + 12 >> 2] | 0;
     if ((i17 | 0) == (HEAP32[i12 + 12 >> 2] | 0)) {
      if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i12 + 16 >> 2] | 0)) {
       i15 = 1;
       break L27;
      }
     }
     i12 = HEAP32[__ZN7WebCore9HTMLNames9buttonTagE >> 2] | 0;
     if ((i2 | 0) == (i12 | 0)) {
      i15 = 1;
      break L27;
     }
     if ((i17 | 0) == (HEAP32[i12 + 12 >> 2] | 0)) {
      if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i12 + 16 >> 2] | 0)) {
       i15 = 1;
       break L27;
      }
     }
     if (!i10) {
      if ((i17 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0) + 12 >> 2] | 0)) {
       i15 = 1;
       break L27;
      }
     }
     i10 = HEAP32[__ZN7WebCore9HTMLNames9legendTagE >> 2] | 0;
     if ((i2 | 0) == (i10 | 0)) {
      i15 = 1;
      break L27;
     }
     if ((i17 | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0)) {
      i15 = 1;
      break L27;
     }
    }
   } while (0);
   i4 = (HEAP32[i7 >> 2] & 8192 | 0) != 0;
   i15 = i4 ^ (HEAP32[(__ZNK7WebCore12RenderObject15containingBlockEv(i6) | 0) + 20 >> 2] & 8192 | 0) != 0;
  }
 } while (0);
 if ((HEAP8[i14] | 0) != 10) {
  i8 = i15;
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 i8 = i15;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore9RenderBox17addLayoutOverflowERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 __ZNK7WebCore9RenderBox13clientBoxRectEv(i4, i1);
 if (__ZNK7WebCore10LayoutRect8containsERKS0_(i4, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 i6 = i5;
 i7 = i2;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 i7 = i1 | 0;
 i6 = i1 + 20 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 & 65536 | 0) != 0 | (i2 & 768 | 0) == 768) {
   i8 = i1 + 36 | 0;
   if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
    i9 = (i2 & 8192 | 0) != 0;
    i10 = (i2 & 8192 | 0) == 0;
   } else {
    i9 = 0;
    i10 = 0;
   }
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 556 >> 2] & 511](i7) | 0) {
     i11 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 60 >> 2] | 0) + 20 >> 2] & 3;
     if (!((i11 | 0) == 3 | (i11 | 0) == 1)) {
      i12 = i10;
      i13 = i9;
      break;
     }
     i11 = __ZNK7WebCore17RenderFlexibleBox16isHorizontalFlowEv(i1) | 0;
     i12 = i10 | i11 ^ 1;
     i13 = i11 | i9;
    } else {
     i12 = i10;
     i13 = i9;
    }
   } while (0);
   i11 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i11 & 4194304 | 0) == 0) {
     i14 = 17;
    } else {
     i15 = HEAP32[i8 >> 2] | 0;
     i16 = HEAP32[(HEAP32[(HEAP32[i15 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] | 0;
     if ((i16 & 24576 | 0) != 8192) {
      i14 = 17;
      break;
     }
     i17 = i16 >>> 11 & 3;
     if ((i17 | 0) == 2) {
      i18 = 0;
     } else {
      i16 = (HEAP32[i15 + 44 >> 2] | 0) >>> 13 & 3;
      i18 = (((i16 | 0) == 0 | (i16 | 0) == 3) ^ (i17 | 0) == 0) & 1;
     }
     if ((i11 >>> 13 & 1 | 0) == (i18 | 0)) {
      if (i12) {
       i19 = i13;
       i14 = 19;
       break;
      } else {
       i20 = i13;
       i14 = 18;
       break;
      }
     } else {
      i17 = i13 ^ 1;
      if (i12) {
       i20 = i17;
       i14 = 18;
       break;
      } else {
       i19 = i17;
       i14 = 19;
       break;
      }
     }
    }
   } while (0);
   if ((i14 | 0) == 17) {
    if (i12) {
     i20 = i13;
     i14 = 18;
    } else {
     i19 = i13;
     i14 = 19;
    }
   }
   if ((i14 | 0) == 18) {
    i11 = HEAP32[i5 + 4 >> 2] | 0;
    i8 = i5 + 12 | 0;
    i17 = (HEAP32[i8 >> 2] | 0) + i11 | 0;
    i16 = (HEAP32[i4 + 12 >> 2] | 0) + (HEAP32[i4 + 4 >> 2] | 0) | 0;
    i15 = ((i16 | 0) < (i17 | 0) ? i16 : i17) - i11 | 0;
    HEAP32[i8 >> 2] = (i15 | 0) > 0 ? i15 : 0;
    if (i20) {
     i14 = 21;
    } else {
     i14 = 20;
    }
   } else if ((i14 | 0) == 19) {
    i15 = i5 + 4 | 0;
    i8 = HEAP32[i15 >> 2] | 0;
    i11 = HEAP32[i4 + 4 >> 2] | 0;
    i17 = (i8 | 0) < (i11 | 0) ? i11 : i8;
    HEAP32[i15 >> 2] = i17;
    i15 = i5 + 12 | 0;
    i11 = i8 - i17 + (HEAP32[i15 >> 2] | 0) | 0;
    HEAP32[i15 >> 2] = (i11 | 0) > 0 ? i11 : 0;
    if (i19) {
     i14 = 21;
    } else {
     i14 = 20;
    }
   }
   if ((i14 | 0) == 20) {
    i11 = i5 | 0;
    i15 = HEAP32[i11 >> 2] | 0;
    i17 = HEAP32[i4 >> 2] | 0;
    i8 = (i15 | 0) < (i17 | 0) ? i17 : i15;
    HEAP32[i11 >> 2] = i8;
    i11 = i5 + 8 | 0;
    i17 = i15 - i8 + (HEAP32[i11 >> 2] | 0) | 0;
    HEAP32[i11 >> 2] = (i17 | 0) > 0 ? i17 : 0;
   } else if ((i14 | 0) == 21) {
    i17 = HEAP32[i5 >> 2] | 0;
    i11 = i5 + 8 | 0;
    i8 = (HEAP32[i11 >> 2] | 0) + i17 | 0;
    i15 = (HEAP32[i4 + 8 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0;
    i16 = ((i15 | 0) < (i8 | 0) ? i15 : i8) - i17 | 0;
    HEAP32[i11 >> 2] = (i16 | 0) > 0 ? i16 : 0;
   }
   if (__ZNK7WebCore10LayoutRect8containsERKS0_(i4, i5) | 0) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) < 1) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i5 + 12 >> 2] | 0) >= 1) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i14 = i1 + 88 | 0;
 do {
  if ((HEAP32[i14 >> 2] | 0) == 0) {
   i19 = __ZN3WTF10fastMallocEj(40) | 0;
   i20 = i1 + 52 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   i12 = HEAP32[i20 + 4 >> 2] | 0;
   HEAP32[i19 >> 2] = 1;
   i20 = i19 + 4 | 0;
   i18 = i4;
   HEAP32[i20 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i20 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i20 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i20 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   i18 = i19 + 20 | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i18 + 4 >> 2] = 0;
   i18 = i19 + 28 | 0;
   HEAP32[i18 >> 2] = i13;
   HEAP32[i18 + 4 >> 2] = i12;
   HEAP32[i19 + 36 >> 2] = 0;
   i12 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i19;
   if ((i12 | 0) == 0) {
    break;
   }
   i19 = i12 | 0;
   i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    HEAP32[i19 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i14 >> 2] | 0;
 i14 = HEAP32[i5 >> 2] | 0;
 i1 = (HEAP32[i5 + 8 >> 2] | 0) + i14 | 0;
 i18 = i4 + 4 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i12 = i4 + 12 | 0;
 i13 = (HEAP32[i12 >> 2] | 0) + i19 | 0;
 i20 = i5 + 4 | 0;
 i6 = (HEAP32[i5 + 12 >> 2] | 0) + (HEAP32[i20 >> 2] | 0) | 0;
 i5 = i4 + 8 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 i10 = i4 + 16 | 0;
 i4 = (HEAP32[i10 >> 2] | 0) + i9 | 0;
 i7 = (i19 | 0) < (i14 | 0) ? i19 : i14;
 HEAP32[i18 >> 2] = i7;
 i18 = HEAP32[i20 >> 2] | 0;
 i20 = (i9 | 0) < (i18 | 0) ? i9 : i18;
 HEAP32[i5 >> 2] = i20;
 HEAP32[i12 >> 2] = ((i1 | 0) < (i13 | 0) ? i13 : i1) - i7;
 HEAP32[i10 >> 2] = ((i6 | 0) < (i4 | 0) ? i4 : i6) - i20;
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL27computeInlineStaticDistanceERNS_6LengthES1_PKNS_9RenderBoxEPKNS_20RenderBoxModelObjectENS_10LayoutUnitEPNS_12RenderRegionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i7 = i1 + 5 | 0;
 if ((HEAP8[i7] | 0) != 0) {
  return;
 }
 i8 = i2 + 5 | 0;
 if ((HEAP8[i8] | 0) != 0) {
  return;
 }
 i9 = i3 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[(HEAP32[i10 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0) {
  i11 = HEAP32[(HEAP32[i3 + 40 >> 2] | 0) + 164 >> 2] | 0;
  i12 = (HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i13 = HEAP32[i4 >> 2] | 0;
  if ((i12 | 0) == 3 | (i12 | 0) == 0) {
   i14 = FUNCTION_TABLE_ii[HEAP32[i13 + 744 >> 2] & 511](i4) | 0;
  } else {
   i14 = FUNCTION_TABLE_ii[HEAP32[i13 + 736 >> 2] & 511](i4) | 0;
  }
  i13 = i11 - i14 | 0;
  i14 = HEAP32[i9 >> 2] | 0;
  i9 = i4 | 0;
  if ((i14 | 0) == 0 | (i14 | 0) == (i9 | 0)) {
   i15 = i13;
  } else {
   i11 = i13;
   i13 = i14;
   i14 = i6;
   while (1) {
    i12 = i13 | 0;
    do {
     if ((HEAP32[i13 + 20 >> 2] & 512 | 0) == 0) {
      i16 = i14;
      i17 = i11;
     } else {
      i18 = (HEAP32[(HEAP32[i13 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((i18 | 0) == 3 | (i18 | 0) == 0) {
       i19 = i13 + 44 | 0;
      } else {
       i19 = i13 + 48 | 0;
      }
      i18 = (HEAP32[i19 >> 2] | 0) + i11 | 0;
      if ((i14 | 0) == 0) {
       i16 = 0;
       i17 = i18;
       break;
      }
      if ((HEAP32[i13 + 24 >> 2] & 16 | 0) == 0) {
       i16 = i14;
       i17 = i18;
       break;
      }
      i20 = i13;
      i21 = __ZNK7WebCore9RenderBox25clampToStartAndEndRegionsEPNS_12RenderRegionE(i20, i14) | 0;
      i22 = __ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i20, i21, 0) | 0;
      if ((i22 | 0) == 0) {
       i16 = i21;
       i17 = i18;
       break;
      }
      i16 = i21;
      i17 = (HEAP32[i22 >> 2] | 0) + i18 | 0;
     }
    } while (0);
    i18 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i12, 0, 0) | 0;
    if ((i18 | 0) == 0 | (i18 | 0) == (i9 | 0)) {
     i15 = i17;
     break;
    } else {
     i11 = i17;
     i13 = i18;
     i14 = i16;
    }
   }
  }
  HEAP8[i7] = 3;
  HEAPF32[i1 >> 2] = +(i15 | 0);
  HEAP8[i1 + 6 | 0] = 1;
  return;
 }
 i1 = __ZNK7WebCore12RenderObject12enclosingBoxEv(i10 | 0) | 0;
 i10 = (HEAP32[(HEAP32[i3 + 40 >> 2] | 0) + 164 >> 2] | 0) + i5 | 0;
 i5 = (HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i23 = FUNCTION_TABLE_ii[HEAP32[i3 + 744 >> 2] & 511](i4) | 0;
 } else {
  i23 = FUNCTION_TABLE_ii[HEAP32[i3 + 736 >> 2] & 511](i4) | 0;
 }
 i3 = i10 + i23 | 0;
 i23 = i1 | 0;
 L33 : do {
  if ((i1 | 0) == 0) {
   i24 = i3;
  } else {
   i10 = i4 | 0;
   i5 = i1 + 36 | 0;
   i15 = i1 + 56 | 0;
   i7 = i1 + 52 | 0;
   i16 = i3;
   i14 = i23;
   i13 = i6;
   while (1) {
    i17 = i14 | 0;
    do {
     if ((HEAP32[i14 + 20 >> 2] & 512 | 0) == 0) {
      i25 = i13;
      i26 = i16;
     } else {
      i11 = (i14 | 0) != (i10 | 0);
      if (i11) {
       i9 = (HEAP32[(HEAP32[i14 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
       if ((i9 | 0) == 3 | (i9 | 0) == 0) {
        i27 = i14 + 44 | 0;
       } else {
        i27 = i14 + 48 | 0;
       }
       i28 = i16 - (HEAP32[i27 >> 2] | 0) | 0;
      } else {
       i28 = i16;
      }
      i9 = (i14 | 0) == (i23 | 0);
      if (i9) {
       i19 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
       if ((i19 | 0) == 3 | (i19 | 0) == 0) {
        i29 = i7;
       } else {
        i29 = i15;
       }
       i30 = i28 - (HEAP32[i29 >> 2] | 0) | 0;
      } else {
       i30 = i28;
      }
      if ((i13 | 0) == 0) {
       i25 = 0;
       i26 = i30;
       break;
      }
      if ((HEAP32[i14 + 24 >> 2] & 16 | 0) == 0) {
       i25 = i13;
       i26 = i30;
       break;
      }
      i19 = i14;
      i18 = __ZNK7WebCore9RenderBox25clampToStartAndEndRegionsEPNS_12RenderRegionE(i19, i13) | 0;
      i22 = __ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i19, i18, 0) | 0;
      if ((i22 | 0) == 0) {
       i25 = i18;
       i26 = i30;
       break;
      }
      if (i11) {
       i11 = (HEAP32[(HEAP32[i14 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
       if ((i11 | 0) == 3 | (i11 | 0) == 0) {
        i31 = i14 + 52 | 0;
       } else {
        i31 = i14 + 56 | 0;
       }
       i32 = i30 - (HEAP32[i31 >> 2] | 0) + (HEAP32[i22 >> 2] | 0) + (HEAP32[i22 + 4 >> 2] | 0) | 0;
      } else {
       i32 = i30;
      }
      if (!i9) {
       i25 = i18;
       i26 = i32;
       break;
      }
      i9 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((i9 | 0) == 3 | (i9 | 0) == 0) {
       i33 = i7;
      } else {
       i33 = i15;
      }
      i25 = i18;
      i26 = (HEAP32[i33 >> 2] | 0) + i32 - (HEAP32[i22 + 4 >> 2] | 0) | 0;
     }
    } while (0);
    if ((i14 | 0) == (i10 | 0)) {
     i24 = i26;
     break L33;
    }
    i22 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i17, 0, 0) | 0;
    if ((i22 | 0) == 0) {
     i24 = i26;
     break;
    } else {
     i16 = i26;
     i14 = i22;
     i13 = i25;
    }
   }
  }
 } while (0);
 HEAP8[i8] = 3;
 HEAPF32[i2 >> 2] = +(i24 | 0);
 HEAP8[i2 + 6 | 0] = 1;
 return;
}
function __ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 56 | 0;
 if ((i2 | 0) == 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 i12 = __ZNK7WebCore12RenderRegion19renderBoxRegionInfoEPKNS_9RenderBoxE(i2, i1) | 0;
 i13 = (i3 | 0) == 0;
 if ((i12 | 0) != 0 & i13) {
  i11 = i12;
  STACKTOP = i4;
  return i11 | 0;
 }
 i12 = i1 | 0;
 i3 = i1 + 20 | 0;
 if ((HEAP32[i3 >> 2] & 805306368 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i12) | 0;
 }
 i15 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 248 >> 2] & 511](i12) | 0 | (i14 | 0) == 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 if ((HEAP32[i3 >> 2] & 4197440 | 0) != 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 188 >> 2] & 511](i12) | 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 if ((HEAP32[i1 + 24 >> 2] & 16 | 0) == 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 132 >> 2] & 511](i12) | 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 i15 = i1 + 36 | 0;
 if (((HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i14 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 _memset(i5 | 0, 0, 24) | 0;
 __ZNK7WebCore9RenderBox27computeLogicalWidthInRegionERNS0_27LogicalExtentComputedValuesEPNS_12RenderRegionE(i1, i5, i2);
 i14 = __ZNK7WebCore12RenderObject15containingBlockEv(i12) | 0;
 i12 = i14 | 0;
 i16 = __ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i12, __ZNK7WebCore9RenderBox25clampToStartAndEndRegionsEPNS_12RenderRegionE(i12, i2) | 0, 0) | 0;
 i12 = i14 + 36 | 0;
 i17 = (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i17 | 0) == 3 | (i17 | 0) == 0) {
  i18 = i14 + 52 | 0;
 } else {
  i18 = i14 + 56 | 0;
 }
 i17 = HEAP32[i18 >> 2] | 0;
 i18 = (i16 | 0) != 0;
 if (i18) {
  i19 = HEAP32[i16 + 4 >> 2] | 0;
 } else {
  i19 = i17;
 }
 i20 = HEAP32[i5 + 16 >> 2] | 0;
 i21 = HEAP32[i15 >> 2] | 0;
 __ZNK7WebCore15LayoutBoxExtent5startENS_11WritingModeENS_13TextDirectionE(i6, i1 + 60 | 0, (HEAP32[i21 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i21 + 40 >> 2] | 0) >>> 30 & 1);
 i21 = i20 - (HEAP32[i6 >> 2] | 0) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i22 = HEAP32[i5 + 4 >> 2] | 0;
 i5 = (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i23 = i1 + 52 | 0;
 } else {
  i23 = i1 + 56 | 0;
 }
 i24 = i6 - (HEAP32[i23 >> 2] | 0) | 0;
 i23 = (HEAP32[i3 >> 2] & 25165824 | 0) == 16777216;
 if (i23) {
  if ((i5 | 0) == 3 | (i5 | 0) == 0) {
   i25 = i1 + 44 | 0;
  } else {
   i25 = i1 + 48 | 0;
  }
  i26 = i22 - (HEAP32[i25 >> 2] | 0) | 0;
 } else {
  i26 = i21;
 }
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i27 = i1 + 44 | 0;
 } else {
  i27 = i1 + 48 | 0;
 }
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i28 = i1 + 52 | 0;
 } else {
  i28 = i1 + 56 | 0;
 }
 i5 = i23 ? i19 - i17 - i6 - i22 + (HEAP32[i27 >> 2] | 0) + (HEAP32[i28 >> 2] | 0) | 0 : i21;
 do {
  if (i23) {
   i29 = i5;
   i30 = i26;
  } else {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 972 >> 2] & 511](i1) | 0)) {
    i29 = i5;
    i30 = i26;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 1024 >> 2] & 511](i14) | 0)) {
    i29 = i5;
    i30 = i26;
    break;
   }
   HEAP32[i8 >> 2] = i20;
   __ZN7WebCore11RenderBlock47computeStartPositionDeltaForChildAvoidingFloatsERKNS_9RenderBoxENS_10LayoutUnitEPNS_12RenderRegionE(i7, i14, i1, i8, i2);
   i21 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[(HEAP32[i12 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
    i29 = i21 + i5 | 0;
    i30 = i26;
    break;
   } else {
    i29 = i5;
    i30 = i21 + i26 | 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[(HEAP32[i12 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
  i31 = -(i29 + i24 | 0) | 0;
 } else {
  i31 = i30;
 }
 i30 = HEAP32[i15 >> 2] | 0;
 i15 = (HEAP32[i30 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i15 | 0) == 3 | (i15 | 0) == 0) {
  i32 = i1 + 52 | 0;
 } else {
  i32 = i1 + 56 | 0;
 }
 i15 = HEAP32[i32 >> 2] | 0;
 i32 = i31 + i6 | 0;
 if (i18) {
  if ((HEAP8[i16 + 8 | 0] & 1) == 0) {
   i33 = 43;
  } else {
   i34 = 1;
  }
 } else {
  i33 = 43;
 }
 do {
  if ((i33 | 0) == 43) {
   i16 = HEAP32[i30 + 40 >> 2] & 1073741824;
   if ((i16 | 0) != 0 & (i31 | 0) != 0) {
    i34 = 1;
    break;
   }
   i34 = (i15 | 0) != (i32 | 0) & (i16 | 0) == 0;
  }
 } while (0);
 if (i13) {
  HEAP32[i9 >> 2] = i31;
  HEAP32[i10 >> 2] = i6;
  i11 = __ZN7WebCore12RenderRegion22setRenderBoxRegionInfoEPKNS_9RenderBoxENS_10LayoutUnitES4_b(i2, i1, i9, i10, i34) | 0;
  STACKTOP = i4;
  return i11 | 0;
 } else {
  i10 = __ZN3WTF10fastMallocEj(16) | 0;
  HEAP32[i10 >> 2] = i31;
  HEAP32[i10 + 4 >> 2] = i6;
  HEAP8[i10 + 8 | 0] = i34 & 1;
  HEAP32[i10 + 12 >> 2] = 0;
  i11 = i10;
  STACKTOP = i4;
  return i11 | 0;
 }
 return 0;
}
function __ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i8 | 0;
 i10 = i8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i1 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i1 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i2 | 0;
 i19 = i2 + 20 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 i21 = i20 & 25165824;
 if ((i21 | 0) == 25165824 | (i21 | 0) == 8388608) {
  __ZNK7WebCore20RenderBoxModelObject23offsetForInFlowPositionEv(i7, i2 | 0);
  i21 = (HEAP32[i7 >> 2] | 0) + (HEAP32[i16 >> 2] | 0) | 0;
  HEAP32[i16 >> 2] = i21;
  i22 = (HEAP32[i7 + 4 >> 2] | 0) + (HEAP32[i17 >> 2] | 0) | 0;
  HEAP32[i17 >> 2] = i22;
  i23 = HEAP32[i19 >> 2] | 0;
  i24 = i21;
  i25 = i22;
 } else {
  i23 = i20;
  i24 = 0;
  i25 = 0;
 }
 L4 : do {
  if ((i23 & 3072 | 0) != 1024) {
   i20 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
   do {
    if (!((i20 | 0) == 6 | (i20 | 0) == 2)) {
     i22 = i3 + 20 | 0;
     if ((HEAP32[i22 >> 2] & 4194304 | 0) == 0) {
      break;
     }
     i21 = i3;
     i19 = i8;
     i7 = i2 + 44 | 0;
     HEAP32[i19 >> 2] = HEAP32[i7 >> 2];
     HEAP32[i19 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
     HEAP32[i19 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
     HEAP32[i19 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
     __ZNK7WebCore11RenderBlock45adjustStartEdgeForWritingModeIncludingColumnsERNS_10LayoutRectE(i21, i10);
     i7 = HEAP32[i9 + 4 >> 2] | 0;
     i19 = (HEAP32[i9 >> 2] | 0) + i24 | 0;
     HEAP32[i16 >> 2] = i19;
     i26 = i7 + i25 | 0;
     HEAP32[i17 >> 2] = i26;
     i7 = (HEAP32[i4 + 4 >> 2] | 0) + i26 | 0;
     HEAP32[i12 >> 2] = i19 + (HEAP32[i4 >> 2] | 0);
     HEAP32[i12 + 4 >> 2] = i7;
     __ZNK7WebCore11RenderBlock34flipForWritingModeIncludingColumnsERKNS_11LayoutPointE(i11, i21, i12);
     HEAP32[i14 >> 2] = i19;
     HEAP32[i14 + 4 >> 2] = i26;
     __ZNK7WebCore11RenderBlock34flipForWritingModeIncludingColumnsERKNS_11LayoutPointE(i13, i21, i14);
     i21 = i1;
     i26 = HEAP32[i13 + 4 >> 2] | 0;
     HEAP32[i21 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i21 + 4 >> 2] = i26;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 520 >> 2] & 63](i3, i1, i11);
     i26 = (HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     do {
      if ((i26 | 0) == 3 | (i26 | 0) == 1) {
       if ((HEAP32[i22 >> 2] & 8192 | 0) == 0) {
        i27 = (HEAP32[i3 + 52 >> 2] | 0) - (HEAP32[i16 >> 2] | 0) | 0;
        i28 = HEAP32[i17 >> 2] | 0;
        break;
       } else {
        i27 = HEAP32[i16 >> 2] | 0;
        i28 = (HEAP32[i3 + 56 >> 2] | 0) - (HEAP32[i17 >> 2] | 0) | 0;
        break;
       }
      } else {
       i27 = HEAP32[i21 >> 2] | 0;
       i28 = HEAP32[i21 + 4 >> 2] | 0;
      }
     } while (0);
     HEAP32[i21 >> 2] = i27;
     HEAP32[i21 + 4 >> 2] = i28;
     if ((i5 | 0) == 0) {
      break L4;
     }
     HEAP8[i5] = 1;
     break L4;
    }
   } while (0);
   i20 = __ZNK7WebCore12RenderObject15containingBlockEv(i18) | 0;
   i22 = HEAP32[i2 + 44 >> 2] | 0;
   i26 = HEAP32[i2 + 48 >> 2] | 0;
   do {
    if ((i20 | 0) == 0 | (i20 | 0) == (i2 | 0)) {
     i29 = i22;
     i30 = i26;
    } else {
     i19 = (HEAP32[(HEAP32[i20 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if (!((i19 | 0) == 3 | (i19 | 0) == 1)) {
      i29 = i22;
      i30 = i26;
      break;
     }
     if ((HEAP32[i20 + 20 >> 2] & 8192 | 0) == 0) {
      i29 = (HEAP32[i20 + 52 >> 2] | 0) - ((HEAP32[i2 + 52 >> 2] | 0) + i22) | 0;
      i30 = i26;
      break;
     } else {
      i29 = i22;
      i30 = (HEAP32[i20 + 56 >> 2] | 0) - ((HEAP32[i2 + 56 >> 2] | 0) + i26) | 0;
      break;
     }
    }
   } while (0);
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + i29;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + i30;
  }
 } while (0);
 i30 = i3 + 20 | 0;
 if ((HEAP32[i30 >> 2] & 65536 | 0) != 0) {
  i29 = (HEAP32[i3 + 40 >> 2] | 0) + 112 | 0;
  i18 = HEAP32[i29 + 4 >> 2] | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) - (HEAP32[i29 >> 2] | 0);
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) - i18;
 }
 do {
  if ((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 8388608) {
   i18 = HEAP32[i30 >> 2] | 0;
   i29 = i18 & 25165824;
   if (!((i29 | 0) == 25165824 | (i29 | 0) == 8388608)) {
    break;
   }
   if ((i18 & 768 | 0) == 256) {
    break;
   }
   if ((HEAP32[i3 + 24 >> 2] & 4 | 0) == 0) {
    break;
   }
   __ZNK7WebCore12RenderInline31offsetForInFlowPositionedInlineEPKNS_9RenderBoxE(i15, i3, i2);
   HEAP32[i16 >> 2] = (HEAP32[i15 >> 2] | 0) + (HEAP32[i16 >> 2] | 0);
   HEAP32[i17 >> 2] = (HEAP32[i15 + 4 >> 2] | 0) + (HEAP32[i17 >> 2] | 0);
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i17 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 248 >> 2] & 511](i3) | 0) & 1;
 HEAP8[i5] = HEAP8[i5] & 1 | i17;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore9RenderBox31shrinkLogicalWidthToAvoidFloatsENS_10LayoutUnitES1_PKNS_11RenderBlockEPNS_12RenderRegionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i8 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i8 >> 2];
 i8 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i8 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i7 + 72 | 0;
 i18 = i7 + 80 | 0;
 i19 = i7 + 88 | 0;
 i20 = i7 + 96 | 0;
 i21 = i7 + 104 | 0;
 i22 = i7 + 112 | 0;
 i23 = i7 + 128 | 0;
 i24 = i7 + 136 | 0;
 i25 = i7 + 144 | 0;
 i26 = i7 + 152 | 0;
 i27 = i7 + 160 | 0;
 i28 = i7 + 168 | 0;
 i29 = i7 + 176 | 0;
 i30 = i7 + 184 | 0;
 i31 = i7 + 192 | 0;
 i32 = i7 + 200 | 0;
 i33 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i33 | 0) == 3 | (i33 | 0) == 0) {
  i34 = i2 + 48 | 0;
 } else {
  i34 = i2 + 44 | 0;
 }
 i33 = HEAP32[i34 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i35 = 0;
  i36 = i33;
 } else {
  i34 = i22;
  i37 = i6 + 124 | 0;
  HEAP32[i34 >> 2] = HEAP32[i37 >> 2];
  HEAP32[i34 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
  HEAP32[i34 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
  HEAP32[i34 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
  __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i23, i6, i22);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i24, i2);
  i2 = (HEAP32[i23 >> 2] | 0) - (HEAP32[i24 >> 2] | 0) | 0;
  i35 = __ZNK7WebCore9RenderBox25clampToStartAndEndRegionsEPNS_12RenderRegionE(i5 | 0, i6) | 0;
  i36 = ((i2 | 0) > 0 ? i2 : 0) + i33 | 0;
 }
 __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i12, i5, i35);
 i33 = HEAP32[i12 >> 2] | 0;
 i12 = i5;
 i2 = HEAP32[(HEAP32[i12 >> 2] | 0) + 1068 >> 2] | 0;
 HEAP32[i9 >> 2] = i36;
 HEAP32[i10 >> 2] = i33;
 HEAP32[i11 >> 2] = 0;
 FUNCTION_TABLE_viiiii[i2 & 15](i8, i5, i9, i10, i11);
 __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i18, i5, i8, 0);
 __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i17, i5, i35);
 i8 = HEAP32[i17 >> 2] | 0;
 i17 = HEAP32[(HEAP32[i12 >> 2] | 0) + 1072 >> 2] | 0;
 HEAP32[i14 >> 2] = i36;
 HEAP32[i15 >> 2] = i8;
 HEAP32[i16 >> 2] = 0;
 FUNCTION_TABLE_viiiii[i17 & 15](i13, i5, i14, i15, i16);
 __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i19, i5, i13, 0);
 i13 = (HEAP32[i18 >> 2] | 0) - (HEAP32[i19 >> 2] | 0) | 0;
 i19 = HEAP32[i3 >> 2] | 0;
 i3 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i4 = ((i13 | 0) > 0 ? i13 : 0) - i19 - i1 | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i19 | 0) > 0) {
   i13 = HEAP32[i5 + 36 >> 2] | 0;
   if ((HEAP32[i13 + 40 >> 2] & 1073741824 | 0) == 0) {
    i18 = (HEAP32[i13 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i18 | 0) == 3 | (i18 | 0) == 0) {
     i38 = i5 + 52 | 0;
    } else {
     i38 = i5 + 56 | 0;
    }
    i18 = HEAP32[i38 >> 2] | 0;
    __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i20, i5, i35);
    i13 = i18 - (HEAP32[i20 >> 2] | 0) | 0;
    HEAP32[i25 >> 2] = i13;
    i39 = i13;
   } else {
    __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i25, i5, i35);
    i39 = HEAP32[i25 >> 2] | 0;
   }
   HEAP32[i27 >> 2] = i36;
   HEAP32[i28 >> 2] = 0;
   __ZNK7WebCore11RenderBlock26startOffsetForLineInRegionENS_10LayoutUnitEbPNS_12RenderRegionES1_(i26, i5, i27, 0, i35, i28);
   i13 = HEAP32[i26 >> 2] | 0;
   if ((i13 | 0) > (i19 + i39 | 0)) {
    i18 = i19 + i4 | 0;
    HEAP32[i3 >> 2] = i18;
    i40 = i18;
    break;
   } else {
    i18 = i13 - (HEAP32[i25 >> 2] | 0) + i4 | 0;
    HEAP32[i3 >> 2] = i18;
    i40 = i18;
    break;
   }
  } else {
   i40 = i4;
  }
 } while (0);
 if ((i1 | 0) <= 0) {
  STACKTOP = i7;
  return;
 }
 i4 = HEAP32[i5 + 36 >> 2] | 0;
 if ((HEAP32[i4 + 40 >> 2] & 1073741824 | 0) == 0) {
  __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i29, i5, i35);
  i41 = HEAP32[i29 >> 2] | 0;
 } else {
  i25 = (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3;
  if ((i25 | 0) == 3 | (i25 | 0) == 0) {
   i42 = i5 + 52 | 0;
  } else {
   i42 = i5 + 56 | 0;
  }
  i25 = HEAP32[i42 >> 2] | 0;
  __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i21, i5, i35);
  i42 = i25 - (HEAP32[i21 >> 2] | 0) | 0;
  HEAP32[i29 >> 2] = i42;
  i41 = i42;
 }
 HEAP32[i31 >> 2] = i36;
 HEAP32[i32 >> 2] = 0;
 __ZNK7WebCore11RenderBlock24endOffsetForLineInRegionENS_10LayoutUnitEbPNS_12RenderRegionES1_(i30, i5, i31, 0, i35, i32);
 i32 = HEAP32[i30 >> 2] | 0;
 if ((i32 | 0) > (i1 + i41 | 0)) {
  HEAP32[i3 >> 2] = i1 + i40;
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i3 >> 2] = i32 - (HEAP32[i29 >> 2] | 0) + i40;
  STACKTOP = i7;
  return;
 }
}
function __ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 184 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i6;
  return;
 }
 i16 = i1 | 0;
 i17 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 do {
  if ((HEAP32[i17 + 196 >> 2] | 0) == 0) {
   i18 = HEAP32[i17 + 192 >> 2] | 0;
   if (!((i18 | 0) != 0 & (i2 | 0) == 0)) {
    break;
   }
   i19 = (HEAP32[i18 + 36 >> 2] | 0) + (HEAP32[i1 + 44 >> 2] | 0) | 0;
   i20 = (HEAP32[i18 + 40 >> 2] | 0) + (HEAP32[i1 + 48 >> 2] | 0) | 0;
   i18 = i9 | 0;
   HEAP32[i18 >> 2] = i19;
   i21 = i9 + 4 | 0;
   HEAP32[i21 >> 2] = i20;
   i22 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
   do {
    if ((i22 | 0) == 3 | (i22 | 0) == 1) {
     i23 = HEAP32[i1 + 40 >> 2] | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     HEAP32[i18 >> 2] = (HEAP32[i23 + 88 >> 2] | 0) + i19;
     HEAP32[i21 >> 2] = (HEAP32[i23 + 92 >> 2] | 0) + i20;
    }
   } while (0);
   __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i9, 0);
   STACKTOP = i6;
   return;
  }
 } while (0);
 i9 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i16, i2, i10) | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i17 = i1 + 36 | 0;
 i20 = (HEAP32[(HEAP32[i17 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 25165824;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) == 0) {
   i24 = 12;
  } else {
   if ((HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 172 >> 2] | 0) == 0 | i20) {
    i24 = 12;
    break;
   }
   i25 = i4 & -2;
  }
 } while (0);
 if ((i24 | 0) == 12) {
  i25 = i20 & 1 | i4;
 }
 if ((i5 | 0) != 0) {
  HEAP8[i5] = i25 & 1;
 }
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0;
 i20 = i9 | 0;
 __ZNK7WebCore14TransformState11mappedPointEPb(i13, i3, 0);
 d26 = +_round(+(+HEAPF32[i13 >> 2]));
 do {
  if (d26 < +2147483647) {
   if (d26 <= +-2147483648) {
    i27 = -2147483648;
    break;
   }
   i27 = ~~d26;
  } else {
   i27 = 2147483647;
  }
 } while (0);
 d26 = +_round(+(+HEAPF32[i13 + 4 >> 2]));
 do {
  if (d26 < +2147483647) {
   if (d26 <= +-2147483648) {
    i28 = -2147483648;
    break;
   }
   i28 = ~~d26;
  } else {
   i28 = 2147483647;
  }
 } while (0);
 HEAP32[i12 >> 2] = i27;
 HEAP32[i12 + 4 >> 2] = i28;
 FUNCTION_TABLE_viiiii[i4 & 15](i11, i1, i20, i12, 0);
 do {
  if ((i25 & 2 | 0) == 0) {
   i29 = 0;
   i24 = 26;
  } else {
   if ((HEAP32[(HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) == 0) {
    i30 = (HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] | 0) >>> 9 & 1;
   } else {
    i30 = 1;
   }
   if (!(__ZNK7WebCore12RenderObject31shouldUseTransformFromContainerEPKS0_(i16, i20) | 0)) {
    i29 = i30;
    i24 = 26;
    break;
   }
   HEAPF64[i14 >> 3] = +1;
   _memset(i14 + 8 | 0, 0, 32) | 0;
   HEAPF64[i14 + 40 >> 3] = +1;
   _memset(i14 + 48 | 0, 0, 32) | 0;
   HEAPF64[i14 + 80 >> 3] = +1;
   _memset(i14 + 88 | 0, 0, 32) | 0;
   HEAPF64[i14 + 120 >> 3] = +1;
   __ZNK7WebCore12RenderObject25getTransformFromContainerEPKS0_RKNS_10LayoutSizeERNS_20TransformationMatrixE(i16, i20, i11, i14);
   __ZN7WebCore14TransformState14applyTransformERKNS_20TransformationMatrixENS0_21TransformAccumulationEPb(i3, i14, i30, 0);
   i31 = i30;
  }
 } while (0);
 if ((i24 | 0) == 26) {
  i24 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i7 + 4 >> 2] = i24;
  __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i7, i29);
  i31 = i29;
 }
 if ((HEAP8[i10] & 1) != 0) {
  __ZNK7WebCore12RenderObject27offsetFromAncestorContainerEPS0_(i15, i2 | 0, i20);
  i10 = -(HEAP32[i15 + 4 >> 2] | 0) | 0;
  HEAP32[i8 >> 2] = -(HEAP32[i15 >> 2] | 0);
  HEAP32[i8 + 4 >> 2] = i10;
  __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i8, i31);
  STACKTOP = i6;
  return;
 }
 i31 = i25 & -5;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 248 >> 2] & 511](i20) | 0) {
   if ((HEAP32[i9 + 20 >> 2] & 25165824 | 0) != 16777216) {
    break;
   }
   if (!(__ZNK7WebCore12RenderObject43fixedPositionedWithNamedFlowContainingBlockEv(i16) | 0)) {
    break;
   }
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 588 >> 2] & 15](i20, i9, i3, i31, i5);
   STACKTOP = i6;
   return;
  }
 } while (0);
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 588 >> 2] & 15](i20, i2, i3, i31, i5);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 64 | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i9 | 0) == 0 | (i9 | 0) == (i8 | 0))) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i5, i1, HEAP32[i2 + 32 >> 2] | 0, 0);
 i9 = HEAP32[i3 + 4 >> 2] | 0;
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
 i3 = i5 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i9;
 i9 = i2 | 0;
 i3 = __ZNK7WebCore9RenderBox33determineBackgroundBleedAvoidanceEPNS_15GraphicsContextE(i1, HEAP32[i9 >> 2] | 0) | 0;
 i10 = i1 | 0;
 if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 808 >> 2] & 15](i10, i3, 0) | 0)) {
  __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(i10, i2, i5, HEAP32[i1 + 36 >> 2] | 0, 0, 1, 1);
 }
 i11 = HEAP32[i9 >> 2] | 0;
 i12 = (i3 | 0) == 2;
 i13 = i1 + 36 | 0;
 if (i12) {
  __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i6, HEAP32[i13 >> 2] | 0, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 1, 1);
  __ZN7WebCore15GraphicsContext4saveEv(i11);
  __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE(HEAP32[i9 >> 2] | 0, i6);
  __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(HEAP32[i9 >> 2] | 0, +1);
  i14 = 1;
 } else {
  i14 = 0;
 }
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i7, i5);
 if ((HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) == 0) {
  i15 = 8;
 } else {
  if (__ZN7WebCore11RenderTheme5paintEPNS_12RenderObjectERKNS_9PaintInfoERKNS_7IntRectE(__ZNK7WebCore12RenderObject5themeEv(i8) | 0, i8, i2, i7) | 0) {
   i15 = 8;
  } else {
   i16 = 1;
  }
 }
 do {
  if ((i15 | 0) == 8) {
   if ((i3 | 0) == 3) {
    __ZN7WebCore20RenderBoxModelObject11paintBorderERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_24BackgroundBleedAvoidanceEbb(i10, i2, i5, HEAP32[i13 >> 2] | 0, 3, 1, 1);
   }
   __ZN7WebCore9RenderBox15paintBackgroundERKNS_9PaintInfoERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceE(i1, i2, i5, i3);
   if ((HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) == 0) {
    i16 = 0;
    break;
   }
   __ZN7WebCore11RenderTheme16paintDecorationsEPNS_12RenderObjectERKNS_9PaintInfoERKNS_7IntRectE(__ZNK7WebCore12RenderObject5themeEv(i8) | 0, i8, i2, i7) | 0;
   i16 = 0;
  }
 } while (0);
 __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(i10, i2, i5, HEAP32[i13 >> 2] | 0, 1, 1, 1);
 L19 : do {
  if ((i3 | 0) != 3) {
   i1 = HEAP32[i13 >> 2] | 0;
   if ((HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) == 0) {
    i17 = i1;
   } else {
    if (i16) {
     break;
    }
    if (!(__ZN7WebCore11RenderTheme15paintBorderOnlyEPNS_12RenderObjectERKNS_9PaintInfoERKNS_7IntRectE(__ZNK7WebCore12RenderObject5themeEv(i8) | 0, i8, i2, i7) | 0)) {
     break;
    }
    i17 = HEAP32[i13 >> 2] | 0;
   }
   i1 = HEAP32[i17 + 16 >> 2] | 0;
   i6 = (HEAP32[(HEAP32[i1 + 132 >> 2] | 0) + 8 >> 2] | 0) != 0;
   i18 = HEAP32[i1 + 104 >> 2] | 0;
   i19 = (i18 & 134217726 | 0) == 0;
   if (i19 | i6) {
    if (i19) {
     i15 = 20;
    }
   } else {
    if ((i18 & 2013265920 | 0) == 0) {
     i15 = 20;
    }
   }
   do {
    if ((i15 | 0) == 20) {
     i18 = HEAP32[i1 + 112 >> 2] | 0;
     i19 = (i18 & 134217726 | 0) == 0;
     if (i19 | i6) {
      if (!i19) {
       break;
      }
     } else {
      if ((i18 & 2013265920 | 0) != 0) {
       break;
      }
     }
     i18 = HEAP32[i1 + 120 >> 2] | 0;
     i19 = (i18 & 134217726 | 0) == 0;
     if (i19 | i6) {
      if (!i19) {
       break;
      }
     } else {
      if ((i18 & 2013265920 | 0) != 0) {
       break;
      }
     }
     i18 = HEAP32[i1 + 128 >> 2] | 0;
     i19 = (i18 & 134217726 | 0) == 0;
     if (i19 | i6) {
      if (i19) {
       break L19;
      } else {
       break;
      }
     } else {
      if ((i18 & 2013265920 | 0) == 0) {
       break L19;
      } else {
       break;
      }
     }
    }
   } while (0);
   __ZN7WebCore20RenderBoxModelObject11paintBorderERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_24BackgroundBleedAvoidanceEbb(i10, i2, i5, i17, i3, 1, 1);
  }
 } while (0);
 if (i12) {
  __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(HEAP32[i9 >> 2] | 0);
 }
 if (i14 << 24 >> 24 == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore15GraphicsContext7restoreEv(i11);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if ((i3 | 0) == 0) {
  i8 = i2 + 52 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  i10 = HEAP32[i8 + 4 >> 2] | 0;
  i8 = i1;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i8 + 4 >> 2] = 0;
  i8 = i1 + 8 | 0;
  HEAP32[i8 >> 2] = i9;
  HEAP32[i8 + 4 >> 2] = i10;
  STACKTOP = i5;
  return;
 }
 i10 = i2 | 0;
 i8 = i2 + 20 | 0;
 do {
  if ((HEAP32[i8 >> 2] & 805306368 | 0) != 0) {
   i9 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i10) | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   HEAP32[i6 >> 2] = 0;
   HEAP32[i7 >> 2] = 0;
   __ZNK7WebCore16RenderFlowThread20getRegionRangeForBoxEPKNS_9RenderBoxERPNS_12RenderRegionES6_(i9, i2, i6, i7);
   do {
    if ((HEAP32[i6 >> 2] | 0) != 0) {
     if ((HEAP32[i7 >> 2] | 0) == 0) {
      break;
     }
     i9 = __ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i2, i3, i4) | 0;
     if ((i9 | 0) == 0) {
      i11 = i2 + 52 | 0;
      i12 = HEAP32[i11 >> 2] | 0;
      i13 = HEAP32[i11 + 4 >> 2] | 0;
      i11 = i1;
      HEAP32[i11 >> 2] = 0;
      HEAP32[i11 + 4 >> 2] = 0;
      i11 = i1 + 8 | 0;
      HEAP32[i11 >> 2] = i12;
      HEAP32[i11 + 4 >> 2] = i13;
      STACKTOP = i5;
      return;
     }
     i13 = HEAP32[i9 + 4 >> 2] | 0;
     i11 = HEAP32[i9 >> 2] | 0;
     i12 = __ZNK7WebCore12RenderObject15containingBlockEv(i10) | 0;
     i14 = __ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i12 | 0, i3, 0) | 0;
     L15 : do {
      if ((i14 | 0) == 0) {
       i15 = i11;
      } else {
       i16 = i11;
       i17 = i3;
       i18 = i12;
       i19 = i14;
       while (1) {
        if ((HEAP8[i19 + 8 | 0] & 1) == 0) {
         i15 = i16;
         break L15;
        }
        i20 = HEAP32[i18 + 36 >> 2] | 0;
        if ((HEAP32[i20 + 40 >> 2] & 1073741824 | 0) == 0) {
         i21 = (HEAP32[i20 + 44 >> 2] | 0) >>> 13 & 3;
         if ((i21 | 0) == 3 | (i21 | 0) == 0) {
          i22 = i18 + 52 | 0;
         } else {
          i22 = i18 + 56 | 0;
         }
         i23 = i16 - (HEAP32[i22 >> 2] | 0) + (HEAP32[i19 + 4 >> 2] | 0) + (HEAP32[i19 >> 2] | 0) | 0;
        } else {
         i23 = (HEAP32[i19 >> 2] | 0) + i16 | 0;
        }
        i21 = __ZNK7WebCore12RenderObject15containingBlockEv(i18 | 0) | 0;
        i20 = i21 | 0;
        i24 = __ZNK7WebCore9RenderBox25clampToStartAndEndRegionsEPNS_12RenderRegionE(i20, i17) | 0;
        i25 = __ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i20, i24, 0) | 0;
        if ((i25 | 0) == 0) {
         i15 = i23;
         break;
        } else {
         i16 = i23;
         i17 = i24;
         i18 = i21;
         i19 = i25;
        }
       }
      }
     } while (0);
     if ((i4 | 0) == 1) {
      i14 = HEAP32[i9 + 12 >> 2] | 0;
      do {
       if ((i14 | 0) != 0) {
        i12 = i14 | 0;
        i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
        if ((i11 | 0) == 0) {
         __ZN3WTF8fastFreeEPv(i14);
         break;
        } else {
         HEAP32[i12 >> 2] = i11;
         break;
        }
       }
      } while (0);
      __ZN3WTF8fastFreeEPv(i9);
     }
     if ((HEAP32[i8 >> 2] & 8192 | 0) == 0) {
      i14 = HEAP32[i2 + 52 >> 2] | 0;
      HEAP32[i1 >> 2] = 0;
      HEAP32[i1 + 4 >> 2] = i15;
      HEAP32[i1 + 8 >> 2] = i14;
      HEAP32[i1 + 12 >> 2] = i13;
      STACKTOP = i5;
      return;
     } else {
      i14 = HEAP32[i2 + 56 >> 2] | 0;
      HEAP32[i1 >> 2] = i15;
      HEAP32[i1 + 4 >> 2] = 0;
      HEAP32[i1 + 8 >> 2] = i13;
      HEAP32[i1 + 12 >> 2] = i14;
      STACKTOP = i5;
      return;
     }
    }
   } while (0);
   i14 = i2 + 52 | 0;
   i11 = HEAP32[i14 >> 2] | 0;
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   i14 = i1;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i14 + 4 >> 2] = 0;
   i14 = i1 + 8 | 0;
   HEAP32[i14 >> 2] = i11;
   HEAP32[i14 + 4 >> 2] = i12;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i15 = i2 + 52 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 i8 = HEAP32[i15 + 4 >> 2] | 0;
 i15 = i1;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i15 + 4 >> 2] = 0;
 i15 = i1 + 8 | 0;
 HEAP32[i15 >> 2] = i2;
 HEAP32[i15 + 4 >> 2] = i8;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((i3 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i8 = i1 + 28 | 0;
 while (1) {
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i7 = 0;
   i10 = 31;
   break;
  }
  if ((HEAP32[i9 + 20 >> 2] & 512 | 0) == 0) {
   i8 = i9 + 16 | 0;
  } else {
   break;
  }
 }
 if ((i10 | 0) == 31) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i8 = i5 | 0;
 i1 = i5 + 4 | 0;
 i11 = i6;
 i12 = i2;
 i2 = i6 | 0;
 i13 = i6 + 4 | 0;
 i14 = i6 + 12 | 0;
 i15 = i6 + 8 | 0;
 i16 = i3 - 1 | 0;
 i3 = i9;
 L10 : while (1) {
  i9 = i3;
  i17 = i3 + 36 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  if ((HEAP32[i18 + 48 >> 2] & 29360128 | 0) == 0) {
   i10 = 8;
  } else {
   i19 = __ZNK7WebCore12RenderObject15containingBlockEv(i3) | 0;
   if ((i19 | 0) == (HEAP32[i3 + 8 >> 2] | 0)) {
    i10 = 8;
   } else {
    i20 = i3;
   }
  }
  do {
   if ((i10 | 0) == 8) {
    i10 = 0;
    if ((HEAP32[i18 + 40 >> 2] & 6144 | 0) != 0) {
     i20 = i3;
     break;
    }
    if ((HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 188 >> 2] | 0) != 0) {
     i20 = i3;
     break;
    }
    i19 = i3 + 52 | 0;
    if ((HEAP32[i19 >> 2] | 0) == 0) {
     i20 = i3;
     break;
    }
    i21 = i3 + 56 | 0;
    if ((HEAP32[i21 >> 2] | 0) == 0) {
     i20 = i3;
     break;
    }
    i22 = HEAP32[i3 + 40 >> 2] | 0;
    i23 = i22;
    if ((i22 | 0) != 0) {
     if ((HEAP32[i22 + 208 >> 2] | 0) != 0) {
      i20 = i3;
      break;
     }
     if ((HEAP32[(HEAP32[i18 + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
      i20 = i3;
      break;
     }
     i24 = i22 + 32 | 0;
     if ((HEAP32[(HEAP32[i24 >> 2] | 0) + 20 >> 2] & 131072 | 0) != 0) {
      i20 = i3;
      break;
     }
     if (__ZNK7WebCore11RenderLayer13isTransparentEv(i23) | 0) {
      i20 = i3;
      break;
     }
     if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i24 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
      i20 = i3;
      break;
     }
    }
    i24 = i3 + 44 | 0;
    i23 = HEAP32[i24 >> 2] | 0;
    i22 = HEAP32[i24 + 4 >> 2] | 0;
    if ((HEAP32[i3 + 20 >> 2] & 25165824 | 0) == 8388608) {
     __ZNK7WebCore20RenderBoxModelObject22relativePositionOffsetEv(i5, i3);
     i25 = (HEAP32[i8 >> 2] | 0) + i23 | 0;
     i26 = (HEAP32[i1 >> 2] | 0) + i22 | 0;
    } else {
     i25 = i23;
     i26 = i22;
    }
    HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
    HEAP32[i11 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
    HEAP32[i11 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
    i22 = (HEAP32[i2 >> 2] | 0) - i25 | 0;
    HEAP32[i2 >> 2] = i22;
    i23 = (HEAP32[i13 >> 2] | 0) - i26 | 0;
    HEAP32[i13 >> 2] = i23;
    if ((i23 | i22 | 0) < 0) {
     if ((HEAP32[(HEAP32[i17 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 0) {
      i7 = 0;
      i10 = 34;
      break L10;
     } else {
      i20 = i3;
      break;
     }
    }
    if (((HEAP32[i14 >> 2] | 0) + i23 | 0) > (HEAP32[i21 >> 2] | 0)) {
     i20 = i3;
     break;
    }
    if (((HEAP32[i15 >> 2] | 0) + i22 | 0) > (HEAP32[i19 >> 2] | 0)) {
     i20 = i3;
     break;
    }
    if (__ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE(i9, i6) | 0) {
     i7 = 1;
     i10 = 32;
     break L10;
    }
    if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 1e3 >> 2] & 15](i9, i6, i16) | 0) {
     i7 = 1;
     i10 = 33;
     break L10;
    } else {
     i20 = i3;
    }
   }
  } while (0);
  while (1) {
   i9 = HEAP32[i20 + 16 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i7 = 0;
    i10 = 29;
    break L10;
   }
   if ((HEAP32[i9 + 20 >> 2] & 512 | 0) == 0) {
    i20 = i9;
   } else {
    i3 = i9;
    continue L10;
   }
  }
 }
 if ((i10 | 0) == 29) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i10 | 0) == 32) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i10 | 0) == 33) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i10 | 0) == 34) {
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZNK7WebCore9RenderBox33determineBackgroundBleedAvoidanceEPNS_15GraphicsContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 56 | 0;
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i1 | 0;
 i9 = HEAP32[i1 + 36 >> 2] | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i4, i9, 23);
 if ((HEAP8[i4 + 4 | 0] & 1) == 0) {
  i10 = 4;
 } else {
  if ((HEAP32[i4 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
   i10 = 4;
  }
 }
 L6 : do {
  if ((i10 | 0) == 4) {
   i4 = (HEAP32[i9 + 12 >> 2] | 0) + 4 | 0;
   while (1) {
    if ((HEAP32[i4 + 4 >> 2] | 0) != 0) {
     break L6;
    }
    i11 = HEAP32[i4 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i7 = 0;
     break;
    } else {
     i4 = i11;
    }
   }
   STACKTOP = i3;
   return i7 | 0;
  }
 } while (0);
 i4 = HEAP32[i9 + 16 >> 2] | 0;
 i11 = (HEAP32[(HEAP32[i4 + 132 >> 2] | 0) + 8 >> 2] | 0) != 0;
 i12 = HEAP32[i4 + 104 >> 2] | 0;
 i13 = (i12 & 134217726 | 0) == 0;
 if (i13 | i11) {
  if (i13) {
   i10 = 10;
  }
 } else {
  if ((i12 & 2013265920 | 0) == 0) {
   i10 = 10;
  }
 }
 do {
  if ((i10 | 0) == 10) {
   i12 = HEAP32[i4 + 112 >> 2] | 0;
   i13 = (i12 & 134217726 | 0) == 0;
   if (i13 | i11) {
    if (!i13) {
     break;
    }
   } else {
    if ((i12 & 2013265920 | 0) != 0) {
     break;
    }
   }
   i12 = HEAP32[i4 + 120 >> 2] | 0;
   i13 = (i12 & 134217726 | 0) == 0;
   if (i13 | i11) {
    if (!i13) {
     break;
    }
   } else {
    if ((i12 & 2013265920 | 0) != 0) {
     break;
    }
   }
   i12 = HEAP32[i4 + 128 >> 2] | 0;
   i13 = (i12 & 134217726 | 0) == 0;
   if (i13 | i11) {
    if (i13) {
     i7 = 0;
    } else {
     break;
    }
    STACKTOP = i3;
    return i7 | 0;
   } else {
    if ((i12 & 2013265920 | 0) == 0) {
     i7 = 0;
    } else {
     break;
    }
    STACKTOP = i3;
    return i7 | 0;
   }
  }
 } while (0);
 i11 = i4 + 136 | 0;
 do {
  if ((HEAP8[i4 + 141 | 0] | 0) != 10) {
   if ((HEAP8[i4 + 142 | 0] & 1) == 0) {
    if ((HEAP32[i11 >> 2] | 0) != 0) {
     break;
    }
   } else {
    if (+HEAPF32[i11 >> 2] != +0) {
     break;
    }
   }
   i10 = i4 + 152 | 0;
   if ((HEAP8[i4 + 157 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i4 + 158 | 0] & 1) == 0) {
    if ((HEAP32[i10 >> 2] | 0) != 0) {
     break;
    }
   } else {
    if (+HEAPF32[i10 >> 2] != +0) {
     break;
    }
   }
   i10 = i4 + 168 | 0;
   if ((HEAP8[i4 + 173 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i4 + 174 | 0] & 1) == 0) {
    if ((HEAP32[i10 >> 2] | 0) != 0) {
     break;
    }
   } else {
    if (+HEAPF32[i10 >> 2] != +0) {
     break;
    }
   }
   i10 = i4 + 184 | 0;
   if ((HEAP8[i4 + 189 | 0] | 0) == 10) {
    break;
   }
   if ((HEAP8[i4 + 190 | 0] & 1) == 0) {
    if ((HEAP32[i10 >> 2] | 0) == 0) {
     i7 = 0;
    } else {
     break;
    }
    STACKTOP = i3;
    return i7 | 0;
   } else {
    if (+HEAPF32[i10 >> 2] != +0) {
     break;
    } else {
     i7 = 0;
    }
    STACKTOP = i3;
    return i7 | 0;
   }
  }
 } while (0);
 if (__ZNK7WebCore13RenderElement35borderImageIsLoadedAndCanBeRenderedEv(i8) | 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i5, i2, 1);
 d14 = +__ZNK7WebCore15AffineTransform6xScaleEv(i5);
 d15 = +__ZNK7WebCore15AffineTransform6yScaleEv(i5);
 i5 = i6 | 0;
 HEAPF32[i5 >> 2] = d14;
 i2 = i6 + 4 | 0;
 HEAPF32[i2 >> 2] = d15;
 if (d14 > +1) {
  HEAPF32[i5 >> 2] = +1;
 }
 if (d15 > +1) {
  HEAPF32[i2 >> 2] = +1;
 }
 i2 = i1 | 0;
 if (__ZNK7WebCore20RenderBoxModelObject28borderObscuresBackgroundEdgeERKNS_9FloatSizeE(i2, i6) | 0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 do {
  if ((HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) == 0) {
   if (!(__ZNK7WebCore20RenderBoxModelObject24borderObscuresBackgroundEv(i2) | 0)) {
    break;
   }
   if (__ZNK7WebCore9RenderBox27backgroundHasOpaqueTopLayerEv(i1) | 0) {
    i7 = 3;
   } else {
    break;
   }
   STACKTOP = i3;
   return i7 | 0;
  }
 } while (0);
 i7 = 2;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore9RenderBox15positionLineBoxERNS_16InlineElementBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 & 25165824 | 0) != 16777216) {
  if ((i7 & 2048 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  d8 = +_round(+(+HEAPF32[i2 + 20 >> 2]));
  do {
   if (d8 < +2147483647) {
    if (d8 <= +-2147483648) {
     i9 = 0;
     i10 = -2147483648;
     break;
    }
    i9 = 0;
    i10 = ~~d8;
   } else {
    i9 = 0;
    i10 = 2147483647;
   }
  } while (0);
  d8 = +_round(+(+HEAPF32[i2 + 24 >> 2]));
  do {
   if (d8 < +2147483647) {
    if (d8 <= +-2147483648) {
     i11 = -2147483648;
     i12 = 0;
     break;
    }
    i11 = ~~d8;
    i12 = 0;
   } else {
    i11 = 2147483647;
    i12 = 0;
   }
  } while (0);
  i7 = i1 + 44 | 0;
  HEAP32[i7 >> 2] = i12 | i10;
  HEAP32[i7 + 4 >> 2] = i11 | i9;
  i9 = i1 + 84 | 0;
  i11 = HEAP32[i9 >> 2] | 0;
  if ((i11 | 0) != 0) {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
    __ZN7WebCore9InlineBox16removeFromParentEv(i11 | 0);
    i7 = HEAP32[i9 >> 2] | 0;
    if ((i7 | 0) != 0) {
     i13 = i7;
     i14 = 33;
    }
   } else {
    i13 = i11;
    i14 = 33;
   }
   if ((i14 | 0) == 33) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
   }
   HEAP32[i9 >> 2] = 0;
  }
  HEAP32[i9 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i9 = i1 + 36 | 0;
 L24 : do {
  switch ((HEAP32[(HEAP32[i9 >> 2] | 0) + 48 >> 2] | 0) >>> 5 & 31 | 0) {
  case 0:
  case 19:
  case 17:
  case 7:
  case 5:
  case 21:
   {
    i13 = i2 | 0;
    i11 = __ZN7WebCore9InlineBox4rootEv(i13) | 0;
    i7 = __ZNK7WebCore13RootInlineBox9blockFlowEv(i11) | 0;
    HEAP32[i4 >> 2] = HEAP32[i11 + 80 >> 2];
    i11 = i2 + 32 | 0;
    HEAP32[i5 >> 2] = _round(+(+HEAPF32[((HEAP32[i11 >> 2] & 2048 | 0) == 0 ? i2 + 24 | 0 : i2 + 20 | 0) >> 2])) | 0;
    __ZN7WebCore15RenderBlockFlow31setStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitES3_(i7, i1, i4, i5);
    i7 = HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] | 0;
    do {
     if ((HEAP32[i11 >> 2] & 2048 | 0) == 0) {
      if ((HEAP8[i7 + 25 | 0] | 0) != 0) {
       i14 = 21;
       break L24;
      }
      if ((HEAP8[i7 + 33 | 0] | 0) != 0) {
       i14 = 21;
       break L24;
      }
     } else {
      if ((HEAP8[i7 + 9 | 0] | 0) == 0) {
       if ((HEAP8[i7 + 17 | 0] | 0) == 0) {
        break;
       } else {
        i14 = 21;
        break L24;
       }
      } else {
       __ZN7WebCore9InlineBox16removeFromParentEv(i13);
       break L24;
      }
     }
    } while (0);
    i13 = HEAP32[i6 >> 2] | 0;
    if ((i13 & 4 | 0) != 0) {
     i14 = 21;
     break L24;
    }
    HEAP32[i6 >> 2] = i13 | 4;
    i14 = 21;
    break;
   }
  default:
   {
    i13 = HEAP32[i1 + 40 >> 2] | 0;
    i7 = i2 + 32 | 0;
    d8 = +HEAPF32[((HEAP32[i7 >> 2] & 2048 | 0) == 0 ? i2 + 20 | 0 : i2 + 24 | 0) >> 2];
    do {
     if (d8 < +2147483647) {
      if (d8 <= +-2147483648) {
       i15 = -2147483648;
       break;
      }
      i15 = ~~d8;
     } else {
      i15 = 2147483647;
     }
    } while (0);
    HEAP32[i13 + 168 >> 2] = i15;
    i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] | 0;
    if ((HEAP32[i7 >> 2] & 2048 | 0) == 0) {
     if ((HEAP8[i11 + 9 | 0] | 0) != 0) {
      i14 = 21;
      break L24;
     }
     if ((HEAP8[i11 + 17 | 0] | 0) != 0) {
      i14 = 21;
      break L24;
     }
    } else {
     if ((HEAP8[i11 + 25 | 0] | 0) != 0) {
      i14 = 21;
      break L24;
     }
     if ((HEAP8[i11 + 33 | 0] | 0) != 0) {
      i14 = 21;
      break L24;
     }
    }
    i11 = HEAP32[i6 >> 2] | 0;
    if ((i11 & 4 | 0) != 0) {
     i14 = 21;
     break L24;
    }
    HEAP32[i6 >> 2] = i11 | 4;
    i14 = 21;
   }
  }
 } while (0);
 do {
  if ((i14 | 0) == 21) {
   __ZN7WebCore9InlineBox16removeFromParentEv(i2 | 0);
   if ((i2 | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9RenderBox15updateFromStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 __ZN7WebCore20RenderBoxModelObject15updateFromStyleEv(i1 | 0);
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i1 | 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + 20 | 0;
 i7 = (HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i5 | 0);
 i8 = i1 + 20 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 & 512 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = (i9 & 256 | 0) != 0;
 }
 if (i9 >>> 0 > 1073741823 >>> 0 | (i7 | i10) ^ 1) {
  i11 = i9;
 } else {
  i10 = i9 & 1073741823 | 1073741824;
  HEAP32[i8 >> 2] = i10;
  i11 = i10;
 }
 i10 = i2 + 48 | 0;
 if ((i11 & 25165824 | 0) == 16777216) {
  i12 = 0;
 } else {
  i12 = ((HEAP32[i10 >> 2] & 100663296 | 0) != 0) << 6;
 }
 i9 = i11 & -65 | i12;
 HEAP32[i8 >> 2] = i9;
 L10 : do {
  if ((HEAP32[i10 >> 2] & 7168 | 0) == 0 | i7) {
   i13 = i9;
  } else {
   if ((HEAP32[i1 + 24 >> 2] & 16 | 0) == 0) {
    i13 = i9;
    break;
   }
   do {
    if ((i9 & 128 | 0) != 0 | (i5 | 0) == 0) {
     i14 = i9;
    } else {
     if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
      i14 = i9;
      break;
     }
     i12 = HEAP32[i5 + 44 >> 2] | 0;
     i11 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
     if ((i12 | 0) != (i11 | 0)) {
      if ((HEAP32[i12 + 12 >> 2] | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
       i14 = i9;
       break;
      }
      if ((HEAP32[i12 + 16 >> 2] | 0) != (HEAP32[i11 + 16 >> 2] | 0)) {
       i14 = i9;
       break;
      }
     }
     i11 = HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0;
     i12 = HEAP32[(HEAP32[i11 + 692 >> 2] | 0) + 44 >> 2] | 0;
     i15 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
     if ((i12 | 0) != (i15 | 0)) {
      if ((HEAP32[i12 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
       i14 = i9;
       break;
      }
      if ((HEAP32[i12 + 16 >> 2] | 0) != (HEAP32[i15 + 16 >> 2] | 0)) {
       i14 = i9;
       break;
      }
     }
     i15 = __ZNK7WebCore8Document4bodyEv(i11) | 0;
     i11 = HEAP32[i8 >> 2] | 0;
     if ((i11 & 128 | 0) == 0) {
      i16 = HEAP32[i4 >> 2] | 0;
     } else {
      i16 = 0;
     }
     if ((i15 | 0) != (i16 | 0)) {
      i14 = i11;
      break;
     }
     i15 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
     i12 = i15 + 32 | 0;
     if ((HEAP32[i15 + 12 >> 2] & 2048 | 0) == 0) {
      i17 = i12 | 0;
     } else {
      i17 = HEAP32[i12 >> 2] | 0;
     }
     if ((HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 36 >> 2] | 0) + 48 >> 2] & 7168 | 0) == 0) {
      i13 = i11;
      break L10;
     } else {
      i14 = i11;
     }
    }
   } while (0);
   if ((HEAP8[H_BASE + 1080 | 0] & 1) == 0) {
    __ZNK7WebCore12RenderObject7repaintEb(i3, 0);
    i18 = HEAP32[i8 >> 2] | 0;
   } else {
    i18 = i14;
   }
   i11 = i18 | 65536;
   HEAP32[i8 >> 2] = i11;
   i13 = i11;
  }
 } while (0);
 i18 = i2 + 20 | 0;
 i2 = HEAP32[i18 >> 2] | 0;
 if ((HEAP32[(HEAP32[i2 + 72 >> 2] | 0) + 12 >> 2] | 0) != 0) {
  i19 = 131072;
  i20 = i13 & -131073;
  i21 = i20 | i19;
  HEAP32[i8 >> 2] = i21;
  i22 = HEAP32[i18 >> 2] | 0;
  i23 = i22 + 104 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  i25 = (i24 | 0) != 0;
  i26 = i25 & 1;
  i27 = i26 << 18;
  i28 = i21 & -262145;
  i29 = i27 | i28;
  HEAP32[i8 >> 2] = i29;
  return;
 }
 if ((HEAP32[i2 + 292 >> 2] & 512 | 0) != 0) {
  i19 = 131072;
  i20 = i13 & -131073;
  i21 = i20 | i19;
  HEAP32[i8 >> 2] = i21;
  i22 = HEAP32[i18 >> 2] | 0;
  i23 = i22 + 104 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  i25 = (i24 | 0) != 0;
  i26 = i25 & 1;
  i27 = i26 << 18;
  i28 = i21 & -262145;
  i29 = i27 | i28;
  HEAP32[i8 >> 2] = i29;
  return;
 }
 i19 = (+HEAPF32[i2 + 16 >> 2] > +0) << 17;
 i20 = i13 & -131073;
 i21 = i20 | i19;
 HEAP32[i8 >> 2] = i21;
 i22 = HEAP32[i18 >> 2] | 0;
 i23 = i22 + 104 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 i25 = (i24 | 0) != 0;
 i26 = i25 & 1;
 i27 = i26 << 18;
 i28 = i21 & -262145;
 i29 = i27 | i28;
 HEAP32[i8 >> 2] = i29;
 return;
}
function __ZNK7WebCore9RenderBox32hasUnsplittableScrollingOverflowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, i22 = 0;
 i2 = i1 | 0;
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = (i4 & 65536 | 0) == 0;
 do {
  if ((i4 & 8192 | 0) == 0) {
   if (i5) {
    i6 = 0;
    return i6 | 0;
   }
   i7 = HEAP32[i1 + 36 >> 2] | 0;
   i8 = HEAP32[i7 + 48 >> 2] | 0;
   if ((i8 & 7168 | 0) == 2048) {
    i9 = i7;
    break;
   }
   if (((i8 >>> 10 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    i9 = i7;
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  } else {
   if (i5) {
    i6 = 0;
    return i6 | 0;
   }
   i7 = HEAP32[i1 + 36 >> 2] | 0;
   i8 = HEAP32[i7 + 48 >> 2] | 0;
   if ((i8 & 57344 | 0) == 16384) {
    i9 = i7;
    break;
   }
   if (((i8 >>> 13 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    i9 = i7;
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i5 = i1 + 36 | 0;
 i1 = HEAP32[i9 + 44 >> 2] | 0;
 i4 = i1 >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  i7 = HEAP32[i9 + 4 >> 2] | 0;
  i10 = i7 + 12 | 0;
  i11 = i7;
 } else {
  i7 = HEAP32[i9 + 4 >> 2] | 0;
  i10 = i7 + 4 | 0;
  i11 = i7;
 }
 i7 = HEAP8[i10 + 5 | 0] | 0;
 do {
  if (!(i7 << 24 >> 24 == 0 | (i7 - 4 & 255) >>> 0 < 2 >>> 0)) {
   if (((i7 & 255) - 6 | 0) >>> 0 < 4 >>> 0) {
    break;
   } else {
    i6 = 1;
   }
   return i6 | 0;
  }
 } while (0);
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  i12 = i11 + 44 | 0;
 } else {
  i12 = i11 + 28 | 0;
 }
 i7 = HEAP8[i12 + 5 | 0] | 0;
 do {
  if (i7 << 24 >> 24 == 0 | (i7 - 4 & 255) >>> 0 < 2 >>> 0) {
   i13 = i9;
   i14 = i1;
  } else {
   if (((i7 & 255) - 6 | 0) >>> 0 < 4 >>> 0) {
    i13 = i9;
    i14 = i1;
    break;
   }
   if ((i4 | 0) == 3 | (i4 | 0) == 0) {
    i15 = i11 + 44 | 0;
   } else {
    i15 = i11 + 28 | 0;
   }
   if ((HEAP8[i15 + 5 | 0] | 0) == 15) {
    i13 = i9;
    i14 = i1;
    break;
   }
   if ((i4 | 0) == 3 | (i4 | 0) == 0) {
    i16 = i11 + 44 | 0;
   } else {
    i16 = i11 + 28 | 0;
   }
   i12 = HEAP8[i16 + 5 | 0] | 0;
   if (!((i12 << 24 >> 24 | 0) == 10 | (i12 << 24 >> 24 | 0) == 2)) {
    i6 = 1;
    return i6 | 0;
   }
   i12 = __ZNK7WebCore12RenderObject15containingBlockEv(i2) | 0;
   if (__ZN7WebCore9RenderBox44percentageLogicalHeightIsResolvableFromBlockEPKNS_11RenderBlockEb(i12, (HEAP32[i3 >> 2] & 25165824 | 0) == 16777216) | 0) {
    i6 = 1;
    return i6 | 0;
   } else {
    i12 = HEAP32[i5 >> 2] | 0;
    i13 = i12;
    i14 = HEAP32[i12 + 44 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i5 = i14 >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i14 = HEAP32[i13 + 4 >> 2] | 0;
  i17 = i14 + 36 | 0;
  i18 = i14;
 } else {
  i14 = HEAP32[i13 + 4 >> 2] | 0;
  i17 = i14 + 20 | 0;
  i18 = i14;
 }
 i14 = HEAP8[i17 + 5 | 0] | 0;
 if (i14 << 24 >> 24 == 0 | (i14 - 4 & 255) >>> 0 < 2 >>> 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (((i14 & 255) - 6 | 0) >>> 0 < 4 >>> 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i19 = i18 + 36 | 0;
 } else {
  i19 = i18 + 20 | 0;
 }
 i14 = HEAP8[i19 + 5 | 0] | 0;
 if ((i14 << 24 >> 24 | 0) == 15) {
  i6 = 0;
  return i6 | 0;
 } else if ((i14 << 24 >> 24 | 0) != 10) {
  i20 = 37;
 }
 do {
  if ((i20 | 0) == 37) {
   if ((HEAP8[i19 + 6 | 0] & 1) == 0) {
    d21 = +(HEAP32[i19 >> 2] | 0);
   } else {
    d21 = +HEAPF32[i19 >> 2];
   }
   if (d21 > +0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i22 = i18 + 36 | 0;
 } else {
  i22 = i18 + 20 | 0;
 }
 i18 = HEAP8[i22 + 5 | 0] | 0;
 if (!((i18 << 24 >> 24 | 0) == 10 | (i18 << 24 >> 24 | 0) == 2)) {
  i6 = 1;
  return i6 | 0;
 }
 i18 = __ZNK7WebCore12RenderObject15containingBlockEv(i2) | 0;
 i6 = __ZN7WebCore9RenderBox44percentageLogicalHeightIsResolvableFromBlockEPKNS_11RenderBlockEb(i18, (HEAP32[i3 >> 2] & 25165824 | 0) == 16777216) | 0;
 return i6 | 0;
}
function __ZNK7WebCore9RenderBox32layoutOverflowRectForPropagationEPNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 160 | 0;
 i9 = i2 + 52 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i1;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = i10;
 HEAP32[i9 + 4 >> 2] = i11;
 i11 = i2 + 20 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 & 65536 | 0) == 0) {
  i10 = HEAP32[i2 + 88 >> 2] | 0;
  if ((i10 | 0) == 0) {
   __ZNK7WebCore9RenderBox13clientBoxRectEv(i5, i2);
  } else {
   i12 = i5;
   i13 = i10 + 4 | 0;
   HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i12 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   HEAP32[i12 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
   HEAP32[i12 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
  }
  __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i5);
  i14 = HEAP32[i11 >> 2] | 0;
 } else {
  i14 = i9;
 }
 if ((i14 & 32768 | 0) == 0) {
  i15 = 8;
 } else {
  if ((HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 172 >> 2] | 0) == 0) {
   i15 = 8;
  } else {
   i16 = 1;
   i15 = 10;
  }
 }
 do {
  if ((i15 | 0) == 8) {
   i9 = i14 & 25165824;
   if ((i9 | 0) == 25165824 | (i9 | 0) == 8388608) {
    i16 = 0;
    i15 = 10;
    break;
   }
   i17 = i2 + 36 | 0;
  }
 } while (0);
 do {
  if ((i15 | 0) == 10) {
   i9 = i2 + 36 | 0;
   i5 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   do {
    if ((i5 | 0) == 3 | (i5 | 0) == 1) {
     if ((i14 & 8192 | 0) == 0) {
      i13 = i1 | 0;
      HEAP32[i13 >> 2] = (HEAP32[i2 + 52 >> 2] | 0) - (HEAP32[i13 >> 2] | 0) - (HEAP32[i1 + 8 >> 2] | 0);
      break;
     } else {
      i13 = i1 + 4 | 0;
      HEAP32[i13 >> 2] = (HEAP32[i2 + 56 >> 2] | 0) - (HEAP32[i13 >> 2] | 0) - (HEAP32[i1 + 12 >> 2] | 0);
      break;
     }
    }
   } while (0);
   if (i16) {
    __ZNK7WebCore11RenderLayer16currentTransformENS_11RenderStyle20ApplyTransformOriginE(i7, HEAP32[i2 + 40 >> 2] | 0, 0);
    __ZNK7WebCore20TransformationMatrix7mapRectERKNS_10LayoutRectE(i6, i7, i1);
    i5 = i1;
    i13 = i6;
    HEAP32[i5 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i5 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
    HEAP32[i5 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
    HEAP32[i5 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   }
   i13 = HEAP32[i11 >> 2] & 25165824;
   if ((i13 | 0) == 25165824 | (i13 | 0) == 8388608) {
    __ZNK7WebCore20RenderBoxModelObject23offsetForInFlowPositionEv(i8, i2 | 0);
    i13 = HEAP32[i8 + 4 >> 2] | 0;
    i5 = i1 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + (HEAP32[i8 >> 2] | 0);
    i5 = i1 + 4 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i13;
   }
   i13 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if (!((i13 | 0) == 3 | (i13 | 0) == 1)) {
    i17 = i9;
    break;
   }
   if ((HEAP32[i11 >> 2] & 8192 | 0) == 0) {
    i13 = i1 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i2 + 52 >> 2] | 0) - (HEAP32[i13 >> 2] | 0) - (HEAP32[i1 + 8 >> 2] | 0);
    i17 = i9;
    break;
   } else {
    i13 = i1 + 4 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i2 + 56 >> 2] | 0) - (HEAP32[i13 >> 2] | 0) - (HEAP32[i1 + 12 >> 2] | 0);
    i17 = i9;
    break;
   }
  }
 } while (0);
 i11 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
 i3 = (HEAP32[(HEAP32[i17 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i11 | 0) == (i3 | 0)) {
  STACKTOP = i4;
  return;
 }
 if ((i3 | 0) == 1 | (i11 | 0) == 1) {
  i17 = i1 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i2 + 52 >> 2] | 0) - (HEAP32[i17 >> 2] | 0) - (HEAP32[i1 + 8 >> 2] | 0);
  STACKTOP = i4;
  return;
 }
 if (!((i3 | 0) == 3 | (i11 | 0) == 3)) {
  STACKTOP = i4;
  return;
 }
 i11 = i1 + 4 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i2 + 56 >> 2] | 0) - (HEAP32[i11 >> 2] | 0) - (HEAP32[i1 + 12 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox33computeIntrinsicLogicalWidthUsingENS_6LengthENS_10LayoutUnitES2_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
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
 i17 = i6 + 80 | 0;
 i18 = i3 + 5 | 0;
 if ((HEAP8[i18] | 0) == 8) {
  i3 = HEAP32[i4 >> 2] | 0;
  i19 = i2 + 36 | 0;
  i20 = HEAP32[i19 >> 2] | 0;
  i21 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i20 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i20 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i20 + 40 >> 2] | 0) >>> 30 & 1) | 0;
  HEAP32[i7 >> 2] = i3;
  i20 = i2 + 4 | 0;
  __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i9, i21, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i20 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i7 = HEAP32[i9 >> 2] | 0;
  i9 = HEAP32[i19 >> 2] | 0;
  i19 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i9 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i9 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i9 + 40 >> 2] | 0) >>> 30 & 1) | 0;
  HEAP32[i8 >> 2] = i3;
  __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i10, i19, i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i20 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  HEAP32[i1 >> 2] = i3 - i7 - (HEAP32[i10 >> 2] | 0);
  STACKTOP = i6;
  return;
 }
 i10 = i15 | 0;
 HEAP32[i10 >> 2] = 0;
 i7 = i16 | 0;
 HEAP32[i7 >> 2] = 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 1008 >> 2] & 63](i2, i15, i16);
 i3 = HEAPU8[i18] | 0;
 if ((i3 | 0) == 6) {
  HEAP32[i1 >> 2] = (HEAP32[i5 >> 2] | 0) + (HEAP32[i10 >> 2] | 0);
  STACKTOP = i6;
  return;
 } else if ((i3 | 0) == 7) {
  HEAP32[i1 >> 2] = (HEAP32[i5 >> 2] | 0) + (HEAP32[i7 >> 2] | 0);
  STACKTOP = i6;
  return;
 } else if ((i3 | 0) == 9) {
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i10 >> 2] = i3 + (HEAP32[i10 >> 2] | 0);
  HEAP32[i7 >> 2] = i3 + (HEAP32[i7 >> 2] | 0);
  i3 = HEAP32[i4 >> 2] | 0;
  i4 = i2 + 36 | 0;
  i5 = HEAP32[i4 >> 2] | 0;
  i18 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i5 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i5 + 40 >> 2] | 0) >>> 30 & 1) | 0;
  HEAP32[i11 >> 2] = i3;
  i5 = i2 + 4 | 0;
  __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i13, i18, i11, HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i11 = HEAP32[i13 >> 2] | 0;
  i13 = HEAP32[i4 >> 2] | 0;
  i4 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i13 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i13 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i13 + 40 >> 2] | 0) >>> 30 & 1) | 0;
  HEAP32[i12 >> 2] = i3;
  __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i14, i4, i12, HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i5 = i3 - i11 - (HEAP32[i14 >> 2] | 0) | 0;
  HEAP32[i17 >> 2] = i5;
  i14 = (i5 | 0) < (HEAP32[i7 >> 2] | 0) ? i17 : i16;
  HEAP32[i1 >> 2] = HEAP32[((HEAP32[i10 >> 2] | 0) < (HEAP32[i14 >> 2] | 0) ? i14 : i15) >> 2];
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
}
function __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_16ShapeOutsideInfoENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EES4_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SC_SE_SG_SM_SJ_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_16ShapeOutsideInfoENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i2, i8, 0) | 0;
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
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
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
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = i4 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = i4;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 }
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_16ShapeOutsideInfoENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZNK7WebCore9RenderBox41containingBlockLogicalHeightForPositionedEPKNS_20RenderBoxModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 40 | 0;
 i10 = i9;
 i11 = i2 | 0;
 i12 = i2 + 4 | 0;
 i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 i14 = i2 + 36 | 0;
 do {
  if ((HEAP32[(HEAP32[i14 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 25165824) {
   if ((HEAP32[(__ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i11, 0, 0) | 0) + 20 >> 2] & 768 | 0) != 768) {
    break;
   }
   if (!(__ZNK7WebCore9FrameView34fixedElementsLayoutRelativeToFrameEv(i13) | 0)) {
    break;
   }
   i15 = i13 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 20 >> 2] & 8192 | 0) == 0) {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i13 >> 2] | 0) + 164 >> 2] & 63](i6, i15, 0);
    i16 = HEAP32[i6 + 8 >> 2] | 0;
   } else {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i13 >> 2] | 0) + 164 >> 2] & 63](i7, i15, 0);
    i16 = HEAP32[i7 + 12 >> 2] | 0;
   }
   d17 = +(i16 | 0) / +__ZNK7WebCore5Frame16frameScaleFactorEv(HEAP32[i13 + 216 >> 2] | 0);
   do {
    if (d17 < +2147483647) {
     if (d17 <= +-2147483648) {
      i18 = -2147483648;
      break;
     }
     i18 = ~~d17;
    } else {
     i18 = 2147483647;
    }
   } while (0);
   HEAP32[i1 >> 2] = i18;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i18 = HEAP32[i3 + 20 >> 2] | 0;
 do {
  if (i4) {
   if (!((i18 & 8192 | 0) != 0 ^ (HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0)) {
    break;
   }
   __ZNK7WebCore9RenderBox40containingBlockLogicalWidthForPositionedEPKNS_20RenderBoxModelObjectEPNS_12RenderRegionEb(i1, i2, i3, 0, 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i4 = i3 | 0;
 i13 = i3 + 20 | 0;
 if ((i18 & 512 | 0) == 0) {
  if ((HEAP32[i3 + 44 >> 2] | 0) == 0 | (HEAP32[i3 + 48 >> 2] | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  } else {
   __ZNK7WebCore12RenderInline16linesBoundingBoxEv(i10, i3);
   i10 = i9 + 8 | 0;
   i9 = HEAP32[i10 + 4 >> 2] | 0;
   i18 = 0;
   i16 = (HEAP32[i13 >> 2] & 8192 | 0) != 0;
   i7 = i16 ? i9 : HEAP32[i10 >> 2] | 0;
   i16 ? i18 : i9;
   i9 = i3;
   i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 752 >> 2] & 511](i3) | 0;
   HEAP32[i1 >> 2] = i7 - i18 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 756 >> 2] & 511](i3) | 0);
   STACKTOP = i5;
   return;
  }
 }
 __ZNK7WebCore9RenderBox19clientLogicalHeightEv(i8, i3);
 do {
  if ((HEAP32[i2 + 20 >> 2] & 805306368 | 0) != 0) {
   i9 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i11) | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i18 = i3;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 248 >> 2] & 511](i4) | 0)) {
    break;
   }
   if ((HEAP32[i9 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i13 >> 2] & 8192 | 0) != 0) {
    break;
   }
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 252 >> 2] & 511](i4) | 0) {
     if ((HEAP32[(HEAP32[i14 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 25165824) {
      break;
     }
     __ZNK7WebCore9RenderBox19clientLogicalHeightEv(i1, HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
     STACKTOP = i5;
     return;
    }
   } while (0);
   __ZNK7WebCore16RenderFlowThread33contentLogicalHeightOfFirstRegionEv(i1, i3);
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = i1 | 0;
 i5 = i1 + 20 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP8[H_BASE + 1080 | 0] = i6 >>> 16 & 1;
 do {
  if ((HEAP8[i1 + 24 | 0] | 0) < 0) {
   i7 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 23;
    break;
   }
   if ((i2 | 0) <= 1) {
    break;
   }
   i9 = i1 + 4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0;
   do {
    if ((HEAP32[i11 + 692 >> 2] | 0) == (i10 | 0)) {
     i8 = 10;
    } else {
     if ((i6 & 128 | 0) != 0 | (i10 | 0) == 0) {
      break;
     }
     if ((HEAP32[i10 + 12 >> 2] & 4 | 0) == 0) {
      break;
     }
     i12 = HEAP32[i10 + 44 >> 2] | 0;
     i13 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
     if ((i12 | 0) == (i13 | 0)) {
      i8 = 10;
      break;
     }
     if ((HEAP32[i12 + 12 >> 2] | 0) != (HEAP32[i13 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i13 + 16 >> 2] | 0)) {
      i8 = 10;
     }
    }
   } while (0);
   do {
    if ((i8 | 0) == 10) {
     __ZN7WebCore10RenderView19repaintRootContentsEv(HEAP32[i11 + 1584 >> 2] | 0);
     i10 = __ZNK7WebCore11RenderStyle26hasEntirelyFixedBackgroundEv(i7) | 0;
     if (!(i10 ^ (__ZNK7WebCore11RenderStyle26hasEntirelyFixedBackgroundEv(i3) | 0))) {
      break;
     }
     __ZN7WebCore21RenderLayerCompositor27rootFixedBackgroundsChangedEv(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0);
    }
   } while (0);
   if ((i2 | 0) != 8) {
    break;
   }
   i9 = i1 + 8 | 0;
   if ((HEAP32[i9 >> 2] | 0) == 0) {
    break;
   }
   i11 = i7 + 48 | 0;
   i10 = i3 + 48 | 0;
   if (((HEAP32[i10 >> 2] ^ HEAP32[i11 >> 2]) & 29360128 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
   do {
    if ((HEAP32[i11 >> 2] & 29360128 | 0) == 0) {
     __ZNK7WebCore12RenderObject7repaintEb(i4, 0);
    } else {
     i13 = (HEAP32[i10 >> 2] | 0) >>> 22 & 7;
     if (!((i13 | 0) == 6 | (i13 | 0) == 2)) {
      break;
     }
     i13 = HEAP32[i9 >> 2] | 0;
     i12 = i13 + 20 | 0;
     i14 = HEAP32[i12 >> 2] | 0;
     if ((i14 & 4 | 0) != 0) {
      break;
     }
     HEAP32[i12 >> 2] = i14 | 4;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i13 | 0, 1, 0);
    }
   } while (0);
   i9 = HEAP32[i5 >> 2] | 0;
   if ((i9 & 64 | 0) == 0 | (i9 & 25165824 | 0) == 16777216) {
    break;
   }
   i9 = (HEAP32[i10 >> 2] | 0) >>> 22 & 7;
   if (!((i9 | 0) == 6 | (i9 | 0) == 2)) {
    break;
   }
   __ZN7WebCore9RenderBox45removeFloatingOrPositionedChildFromBlockListsEv(i1);
  } else {
   i8 = 23;
  }
 } while (0);
 do {
  if ((i8 | 0) == 23) {
   if ((i6 & 128 | 0) != 0) {
    break;
   }
   i5 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i5 + 44 >> 2] | 0;
   i9 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i4 | 0) != (i9 | 0)) {
    if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i4 + 16 >> 2] | 0) != (HEAP32[i9 + 16 >> 2] | 0)) {
     break;
    }
   }
   __ZN7WebCore10RenderView19repaintRootContentsEv(HEAP32[(HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
  }
 } while (0);
 __ZN7WebCore22RenderLayerModelObject15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1 | 0, i2, i3);
 return;
}
function __ZNK7WebCore9RenderBox48computeReplacedLogicalWidthRespectingMinMaxWidthENS_10LayoutUnitENS_22ShouldComputePreferredE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = (i4 | 0) == 1;
 i4 = HEAP32[i2 + 36 >> 2] | 0;
 i13 = HEAP32[i4 + 44 >> 2] | 0;
 if (i12) {
  i14 = i13 >>> 13 & 3;
  if ((i14 | 0) == 3 | (i14 | 0) == 0) {
   i15 = (HEAP32[i4 + 4 >> 2] | 0) + 20 | 0;
  } else {
   i15 = (HEAP32[i4 + 4 >> 2] | 0) + 36 | 0;
  }
  i14 = HEAP8[i15 + 5 | 0] | 0;
  if ((i14 << 24 >> 24 | 0) == 10 | (i14 << 24 >> 24 | 0) == 2) {
   i16 = 10;
  } else {
   i16 = 6;
  }
 } else {
  i16 = 6;
 }
 do {
  if ((i16 | 0) == 6) {
   i14 = i13 >>> 13 & 3;
   if ((i14 | 0) == 3 | (i14 | 0) == 0) {
    i15 = HEAP32[i4 + 4 >> 2] | 0;
    i17 = i15 + 20 | 0;
    i18 = i15;
   } else {
    i15 = HEAP32[i4 + 4 >> 2] | 0;
    i17 = i15 + 36 | 0;
    i18 = i15;
   }
   if ((HEAP8[i17 + 5 | 0] | 0) == 15) {
    i16 = 10;
    break;
   }
   if ((i14 | 0) == 3 | (i14 | 0) == 0) {
    i19 = i18 + 20 | 0;
   } else {
    i19 = i18 + 36 | 0;
   }
   i14 = i19;
   i15 = HEAP32[i14 >> 2] | 0;
   i20 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = i15;
   HEAP32[i7 + 4 >> 2] = i20;
   if ((i15 & 0 | 0) == 0 & (i20 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i8);
   }
   __ZNK7WebCore9RenderBox32computeReplacedLogicalWidthUsingENS_6LengthE(i6, i2, i8);
   if ((HEAP8[i8 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
  }
 } while (0);
 if ((i16 | 0) == 10) {
  HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 }
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = HEAP32[i8 + 44 >> 2] | 0;
 if (i12) {
  i12 = i7 >>> 13 & 3;
  if ((i12 | 0) == 3 | (i12 | 0) == 0) {
   i21 = (HEAP32[i8 + 4 >> 2] | 0) + 28 | 0;
  } else {
   i21 = (HEAP32[i8 + 4 >> 2] | 0) + 44 | 0;
  }
  i12 = HEAP8[i21 + 5 | 0] | 0;
  if ((i12 << 24 >> 24 | 0) == 10 | (i12 << 24 >> 24 | 0) == 2) {
   i16 = 27;
  } else {
   i16 = 23;
  }
 } else {
  i16 = 23;
 }
 do {
  if ((i16 | 0) == 23) {
   i12 = i7 >>> 13 & 3;
   if ((i12 | 0) == 3 | (i12 | 0) == 0) {
    i21 = HEAP32[i8 + 4 >> 2] | 0;
    i22 = i21 + 28 | 0;
    i23 = i21;
   } else {
    i21 = HEAP32[i8 + 4 >> 2] | 0;
    i22 = i21 + 44 | 0;
    i23 = i21;
   }
   if ((HEAP8[i22 + 5 | 0] | 0) == 15) {
    i16 = 27;
    break;
   }
   if ((i12 | 0) == 3 | (i12 | 0) == 0) {
    i24 = i23 + 28 | 0;
   } else {
    i24 = i23 + 44 | 0;
   }
   i12 = i24;
   i21 = HEAP32[i12 >> 2] | 0;
   i19 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = i21;
   HEAP32[i10 + 4 >> 2] = i19;
   if ((i21 & 0 | 0) == 0 & (i19 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
   }
   __ZNK7WebCore9RenderBox32computeReplacedLogicalWidthUsingENS_6LengthE(i9, i2, i11);
   if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
  }
 } while (0);
 if ((i16 | 0) == 27) {
  HEAP32[i9 >> 2] = HEAP32[i3 >> 2];
 }
 i16 = (HEAP32[i9 >> 2] | 0) < (HEAP32[i3 >> 2] | 0) ? i9 : i3;
 HEAP32[i1 >> 2] = HEAP32[((HEAP32[i6 >> 2] | 0) < (HEAP32[i16 >> 2] | 0) ? i16 : i6) >> 2];
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore9RenderBox25applyVisualEffectOverflowERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i2 + 36 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = (HEAP32[i11 + 44 >> 2] | 0) >>> 13 & 3;
 i13 = (i12 | 0) == 1;
 i14 = (i12 | 0) == 3;
 i12 = i13 | i14;
 i15 = (HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0;
 i2 = i3 | 0;
 i16 = HEAP32[i2 >> 2] | 0;
 i17 = i3 + 8 | 0;
 i18 = i3 + 4 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = i3 + 12 | 0;
 i3 = i11 + 20 | 0;
 if ((HEAP32[(HEAP32[i3 >> 2] | 0) + 100 >> 2] | 0) == 0) {
  i21 = i11;
  i22 = i16;
  i23 = (HEAP32[i17 >> 2] | 0) + i16 | 0;
  i24 = i19;
  i25 = (HEAP32[i20 >> 2] | 0) + i19 | 0;
 } else {
  i19 = i5 | 0;
  HEAP32[i19 >> 2] = 0;
  i16 = i6 | 0;
  HEAP32[i16 >> 2] = 0;
  i26 = i7 | 0;
  HEAP32[i26 >> 2] = 0;
  i27 = i8 | 0;
  HEAP32[i27 >> 2] = 0;
  __ZNK7WebCore11RenderStyle15getShadowExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_S5_S5_(i11, HEAP32[(HEAP32[i3 >> 2] | 0) + 100 >> 2] | 0, i7, i6, i8, i5);
  i5 = HEAP32[i2 >> 2] | 0;
  i8 = (i13 | i14) ^ 1;
  if (i15 | i8) {
   i28 = HEAP32[i16 >> 2] | 0;
   i29 = (HEAP32[i19 >> 2] | 0) + i5 | 0;
  } else {
   i28 = -(HEAP32[i19 >> 2] | 0) | 0;
   i29 = i5 - (HEAP32[i16 >> 2] | 0) | 0;
  }
  i16 = HEAP32[i18 >> 2] | 0;
  if (i8 | i15 ^ 1) {
   i30 = HEAP32[i27 >> 2] | 0;
   i31 = (HEAP32[i26 >> 2] | 0) + i16 | 0;
  } else {
   i30 = -(HEAP32[i26 >> 2] | 0) | 0;
   i31 = i16 - (HEAP32[i27 >> 2] | 0) | 0;
  }
  i21 = HEAP32[i10 >> 2] | 0;
  i22 = i29;
  i23 = i28 + ((HEAP32[i17 >> 2] | 0) + i5) | 0;
  i24 = i31;
  i25 = i30 + ((HEAP32[i20 >> 2] | 0) + i16) | 0;
 }
 if (!(__ZNK7WebCore11RenderStyle21hasBorderImageOutsetsEv(i21) | 0)) {
  i32 = i22;
  i33 = i24;
  i34 = i23;
  i35 = i25;
  i36 = i34 - i32 | 0;
  i37 = i35 - i33 | 0;
  i38 = i1 | 0;
  HEAP32[i38 >> 2] = i32;
  i39 = i1 + 4 | 0;
  HEAP32[i39 >> 2] = i33;
  i40 = i1 + 8 | 0;
  HEAP32[i40 >> 2] = i36;
  i41 = i1 + 12 | 0;
  HEAP32[i41 >> 2] = i37;
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore11RenderStyle12imageOutsetsERKNS_14NinePieceImageE(i9, i21, (HEAP32[i21 + 16 >> 2] | 0) + 132 | 0);
 i21 = HEAP32[i2 >> 2] | 0;
 i2 = i12 ^ 1;
 if (i15 | i2) {
  i12 = i21 - (HEAP32[i9 + 12 >> 2] | 0) | 0;
  i42 = HEAP32[i9 + 4 >> 2] | 0;
  i43 = (i12 | 0) < (i22 | 0) ? i12 : i22;
 } else {
  i12 = i21 - (HEAP32[i9 + 4 >> 2] | 0) | 0;
  i42 = HEAP32[i9 + 12 >> 2] | 0;
  i43 = (i12 | 0) < (i22 | 0) ? i12 : i22;
 }
 i22 = (HEAP32[i17 >> 2] | 0) + i21 + i42 | 0;
 i42 = HEAP32[i18 >> 2] | 0;
 if (i2 | i15 ^ 1) {
  i15 = i42 - (HEAP32[i9 >> 2] | 0) | 0;
  i44 = HEAP32[i9 + 8 >> 2] | 0;
  i45 = (i15 | 0) < (i24 | 0) ? i15 : i24;
 } else {
  i15 = i42 - (HEAP32[i9 + 8 >> 2] | 0) | 0;
  i44 = HEAP32[i9 >> 2] | 0;
  i45 = (i15 | 0) < (i24 | 0) ? i15 : i24;
 }
 i24 = (HEAP32[i20 >> 2] | 0) + i42 + i44 | 0;
 i32 = i43;
 i33 = i45;
 i34 = (i23 | 0) < (i22 | 0) ? i22 : i23;
 i35 = (i25 | 0) < (i24 | 0) ? i24 : i25;
 i36 = i34 - i32 | 0;
 i37 = i35 - i33 | 0;
 i38 = i1 | 0;
 HEAP32[i38 >> 2] = i32;
 i39 = i1 + 4 | 0;
 HEAP32[i39 >> 2] = i33;
 i40 = i1 + 8 | 0;
 HEAP32[i40 >> 2] = i36;
 i41 = i1 + 12 | 0;
 HEAP32[i41 >> 2] = i37;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS1_10LayoutUnitEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS1_10LayoutUnitEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i8, 0) | 0;
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
 i11 = i10 + (i9 << 3) | 0;
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
    i24 = i10 + (i23 << 3) | 0;
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
   if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    HEAP32[i21 >> 2] = 0;
    HEAP32[i21 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   } else if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
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
  i28 = __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS1_10LayoutUnitEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_16ShapeOutsideInfoENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   if ((i17 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
   }
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i17 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = i7 + (i36 << 3) + 4 | 0;
    i11 = HEAP32[i1 >> 2] | 0;
    HEAP32[i1 >> 2] = 0;
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore9RenderBox15paintBackgroundERKNS_9PaintInfoERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i1 | 0;
 i11 = i1 + 4 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[(HEAP32[(HEAP32[i12 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
 if ((i13 | 0) == (i12 | 0)) {
  if ((HEAP32[i2 + 24 >> 2] & 16 | 0) != 0) {
   STACKTOP = i5;
   return;
  }
  i14 = __ZN7WebCore13RenderElement25rendererForRootBackgroundEv(i1 | 0) | 0;
  i15 = HEAP32[i14 + 36 >> 2] | 0;
  i16 = (HEAP32[i15 + 12 >> 2] | 0) + 4 | 0;
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i7, i15, 23);
  __ZNK7WebCore10RenderView14backgroundRectEPNS_9RenderBoxE(i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i1);
  __ZN7WebCore9RenderBox15paintFillLayersERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceENS_17CompositeOperatorEPNS_13RenderElementE(i1, i2, i7, i16, i8, 0, 2, i14);
  STACKTOP = i5;
  return;
 }
 i14 = i1 + 20 | 0;
 L8 : do {
  if (!((HEAP32[i14 >> 2] & 128 | 0) != 0 | (i12 | 0) == 0)) {
   if ((HEAP32[i12 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i12 + 44 >> 2] | 0;
   i16 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i8 | 0) != (i16 | 0)) {
    if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i16 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i8 + 16 >> 2] | 0) != (HEAP32[i16 + 16 >> 2] | 0)) {
     break;
    }
   }
   i16 = i13 + 32 | 0;
   if ((HEAP32[i13 + 12 >> 2] & 2048 | 0) == 0) {
    i17 = i16 | 0;
   } else {
    i17 = HEAP32[i16 >> 2] | 0;
   }
   i16 = HEAP32[i17 >> 2] | 0;
   i8 = i16;
   if ((i16 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i16 + 36 >> 2] | 0;
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i6, i7, 23);
   if ((HEAP8[i6 + 4 | 0] & 1) != 0) {
    if ((HEAP32[i6 >> 2] | 0) >>> 0 >= 16777216 >>> 0) {
     break;
    }
   }
   i16 = (HEAP32[i7 + 12 >> 2] | 0) + 4 | 0;
   while (1) {
    if ((HEAP32[i16 + 4 >> 2] | 0) != 0) {
     break L8;
    }
    i16 = HEAP32[i16 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break;
    }
   }
   if ((i8 | 0) != (HEAP32[i1 + 8 >> 2] | 0)) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i6 = HEAP32[i14 >> 2] | 0;
 if ((i6 & -1073741824 | 0) == 1073741824) {
  i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 440 >> 2] & 511](i10) | 0;
  i10 = HEAP32[i14 >> 2] & 1073741823 | (i17 ? -2147483648 : -1073741824);
  HEAP32[i14 >> 2] = i10;
  i18 = i10;
 } else {
  i18 = i6;
 }
 do {
  if ((i18 & -1073741824 | 0) == -2147483648) {
   if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 808 >> 2] & 15](i1 | 0, i4, 0) | 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i18 = i1 + 36 | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i9, HEAP32[i18 >> 2] | 0, 23);
 __ZN7WebCore9RenderBox15paintFillLayersERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceENS_17CompositeOperatorEPNS_13RenderElementE(i1, i2, i9, (HEAP32[(HEAP32[i18 >> 2] | 0) + 12 >> 2] | 0) + 4 | 0, i3, i4, 2, 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9RenderBox16pushContentsClipERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 80 | 0;
 i9 = i8 | 0;
 i10 = i8;
 i11 = i2 + 20 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0 | (i12 | 0) == 7 | (i12 | 0) == 11) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 944 >> 2] & 511](i1) | 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = (HEAP8[(HEAP32[i1 + 40 >> 2] | 0) + 20 | 0] & 32) == 0;
 }
 if (!(i12 | i14)) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 i14 = HEAP32[i11 >> 2] | 0;
 if ((i14 | 0) == 5) {
  HEAP32[i11 >> 2] = 6;
  i15 = 6;
 } else if ((i14 | 0) == 1) {
  HEAP32[i11 >> 2] = 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 952 >> 2] & 63](i1, i2, i3);
  HEAP32[i11 >> 2] = 2;
  i15 = 2;
 } else {
  i15 = i14;
 }
 if (i12) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 948 >> 2] & 63](i6, i1, i3);
 } else {
  FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 936 >> 2] & 3](i6, i1, i3, HEAP32[i2 + 32 >> 2] | 0, 0, i15);
 }
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i5, i6);
 i6 = i2 | 0;
 __ZN7WebCore15GraphicsContext4saveEv(HEAP32[i6 >> 2] | 0);
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i15 = HEAP32[i2 + 16 >> 2] | 0;
 i12 = i15 + 136 | 0;
 do {
  if ((HEAP8[i15 + 141 | 0] | 0) == 10) {
   i16 = 27;
  } else {
   if ((HEAP8[i15 + 142 | 0] & 1) == 0) {
    if ((HEAP32[i12 >> 2] | 0) != 0) {
     i16 = 27;
     break;
    }
   } else {
    if (+HEAPF32[i12 >> 2] != +0) {
     i16 = 27;
     break;
    }
   }
   i14 = i15 + 152 | 0;
   if ((HEAP8[i15 + 157 | 0] | 0) == 10) {
    i16 = 27;
    break;
   }
   if ((HEAP8[i15 + 158 | 0] & 1) == 0) {
    if ((HEAP32[i14 >> 2] | 0) != 0) {
     i16 = 27;
     break;
    }
   } else {
    if (+HEAPF32[i14 >> 2] != +0) {
     i16 = 27;
     break;
    }
   }
   i14 = i15 + 168 | 0;
   if ((HEAP8[i15 + 173 | 0] | 0) == 10) {
    i16 = 27;
    break;
   }
   if ((HEAP8[i15 + 174 | 0] & 1) == 0) {
    if ((HEAP32[i14 >> 2] | 0) != 0) {
     i16 = 27;
     break;
    }
   } else {
    if (+HEAPF32[i14 >> 2] != +0) {
     i16 = 27;
     break;
    }
   }
   i14 = i15 + 184 | 0;
   if ((HEAP8[i15 + 189 | 0] | 0) == 10) {
    i16 = 27;
    break;
   }
   if ((HEAP8[i15 + 190 | 0] & 1) == 0) {
    if ((HEAP32[i14 >> 2] | 0) == 0) {
     break;
    } else {
     i16 = 27;
     break;
    }
   } else {
    if (+HEAPF32[i14 >> 2] != +0) {
     i16 = 27;
     break;
    } else {
     break;
    }
   }
  }
 } while (0);
 if ((i16 | 0) == 27) {
  i16 = HEAP32[i6 >> 2] | 0;
  i15 = i1 + 52 | 0;
  i1 = HEAP32[i15 >> 2] | 0;
  i12 = HEAP32[i15 + 4 >> 2] | 0;
  i15 = i3;
  i3 = HEAP32[i15 + 4 >> 2] | 0;
  HEAP32[i9 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i9 + 4 >> 2] = i3;
  i3 = i8 + 8 | 0;
  HEAP32[i3 >> 2] = i1;
  HEAP32[i3 + 4 >> 2] = i12;
  __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEbb(i7, i2, i10, 1, 1);
  __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE(i16, i7);
 }
 __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(HEAP32[i6 >> 2] | 0, i5);
 i13 = 1;
 STACKTOP = i4;
 return i13 | 0;
}
function __ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i2 + 44 | 0;
 i10 = HEAP32[i2 + 56 >> 2] | 0;
 i11 = (i3 | 0) != 0;
 if (i11) {
  i12 = (HEAP32[i3 + 32 >> 2] & 4 | 0) == 0;
 } else {
  i12 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0;
 }
 i13 = HEAP32[i9 >> 2] | 0;
 i14 = HEAP32[i9 + 4 >> 2] | 0;
 if ((i4 | 0) == 0 ^ i12) {
  i15 = i13 - 1 + (HEAP32[i2 + 52 >> 2] | 0) | 0;
 } else {
  i15 = i13;
 }
 if (i11) {
  i11 = __ZN7WebCore9InlineBox4rootEv(i3) | 0;
  i3 = HEAP32[i11 + 72 >> 2] | 0;
  i16 = i3;
  i17 = (HEAP32[i11 + 76 >> 2] | 0) - i3 | 0;
 } else {
  i16 = i14;
  i17 = i10;
 }
 i10 = 1;
 i14 = i17 | 0;
 i3 = __ZNK7WebCore11RenderStyle11fontMetricsEv(HEAP32[i2 + 36 >> 2] | 0) | 0;
 i11 = _round(+(+HEAPF32[i3 + 4 >> 2])) | 0;
 i13 = (_round(+(+HEAPF32[i3 + 8 >> 2])) | 0) + i11 | 0;
 do {
  if ((i13 | 0) > (i17 | 0)) {
   i18 = 11;
  } else {
   if ((HEAP32[i2 + 20 >> 2] & 2048 | 0) != 0) {
    i19 = i14;
    i20 = i10;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 184 >> 2] & 511](i2 | 0) | 0) {
    i19 = i14;
    i20 = i10;
   } else {
    i18 = 11;
   }
  }
 } while (0);
 if ((i18 | 0) == 11) {
  i19 = i13 | 0;
  i20 = 1;
 }
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = (HEAP32[i2 + 44 >> 2] | 0) - (i20 + i15) + (HEAP32[i2 + 52 >> 2] | 0);
 }
 i5 = i15 - (HEAP32[i9 >> 2] | 0) | 0;
 i15 = i16 - (HEAP32[i9 + 4 >> 2] | 0) | 0;
 i9 = i5 | 0;
 i16 = i15 | 0;
 i13 = i2 + 20 | 0;
 do {
  if ((HEAP32[i13 >> 2] & 128 | 0) == 0) {
   i18 = i2 + 4 | 0;
   i10 = HEAP32[i18 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i21 = i16;
    i22 = i9;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 132 >> 2] & 511](i10) | 0)) {
    i21 = i16;
    i22 = i9;
    break;
   }
   if ((HEAP32[i13 >> 2] & 128 | 0) == 0) {
    i23 = HEAP32[i18 >> 2] | 0;
   } else {
    i23 = 0;
   }
   if (__ZN7WebCore14isTableElementEPNS_4NodeE(i23 | 0) | 0) {
    i21 = i16;
    i22 = i9;
    break;
   }
   i18 = i2 | 0;
   i10 = i2;
   i14 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 744 >> 2] & 511](i18) | 0) + i5 | 0;
   i17 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 712 >> 2] & 127](i7, i18);
   i11 = i14 + (HEAP32[i7 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 704 >> 2] & 127](i8, i18);
   i17 = (HEAP32[i8 >> 2] | 0) + i15 | 0;
   i21 = i17 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 736 >> 2] & 511](i18) | 0) | 0;
   i22 = i11 | 0;
  } else {
   i21 = i16;
   i22 = i9;
  }
 } while (0);
 if ((HEAP32[i13 >> 2] & 8192 | 0) == 0) {
  i13 = i1;
  HEAP32[i13 >> 2] = i21;
  HEAP32[i13 + 4 >> 2] = i22;
  i13 = i1 + 8 | 0;
  HEAP32[i13 >> 2] = i19;
  HEAP32[i13 + 4 >> 2] = i20;
  STACKTOP = i6;
  return;
 } else {
  i13 = i1;
  HEAP32[i13 >> 2] = i22;
  HEAP32[i13 + 4 >> 2] = i21;
  i21 = i1 + 8 | 0;
  HEAP32[i21 >> 2] = i20;
  HEAP32[i21 + 4 >> 2] = i19;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore9RenderBox38updateShapeOutsideInfoAfterStyleChangeERKNS_11RenderStyleEPS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, i18 = 0, i19 = 0, d20 = +0, d21 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7;
 i9 = i2 + 20 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i2 + 188 >> 2] | 0;
 i11 = (i3 | 0) != 0;
 if (i11) {
  i12 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 188 >> 2] | 0;
 } else {
  i12 = 0;
 }
 i13 = i2 + 192 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 i14 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i5 + 4 >> 2] = i14;
 if ((i2 & 0 | 0) == 0 & (i14 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 if (i11) {
  i11 = i3 + 20 | 0;
  i3 = HEAP32[i11 >> 2] | 0;
  i14 = i3 + 192 | 0;
  i2 = HEAP32[i14 >> 2] | 0;
  i13 = HEAP32[i14 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = i2;
  HEAP32[i7 + 4 >> 2] = i13;
  if ((i2 & 0 | 0) == 0 & (i13 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i8);
   i15 = HEAP32[i11 >> 2] | 0;
  } else {
   i15 = i3;
  }
  d16 = +HEAPF32[i15 + 208 >> 2];
 } else {
  HEAP32[i7 >> 2] = 0;
  HEAP8[i8 + 4 | 0] = 0;
  HEAP8[i8 + 5 | 0] = 3;
  HEAP8[i8 + 6 | 0] = 0;
  d16 = +0;
 }
 d17 = +HEAPF32[(HEAP32[i9 >> 2] | 0) + 208 >> 2];
 i9 = (i10 | 0) == (i12 | 0);
 do {
  if (i9) {
   i12 = HEAP8[i6 + 5 | 0] | 0;
   if (i12 << 24 >> 24 != (HEAP8[i8 + 5 | 0] | 0)) {
    i18 = 23;
    break;
   }
   if (((HEAP8[i8 + 4 | 0] ^ HEAP8[i6 + 4 | 0]) & 1) != 0) {
    i18 = 23;
    break;
   }
   do {
    if (i12 << 24 >> 24 == 15) {
     i19 = 1;
    } else {
     if ((HEAP8[i6 + 6 | 0] & 1) == 0) {
      d20 = +(HEAP32[i5 >> 2] | 0);
     } else {
      d20 = +HEAPF32[i5 >> 2];
     }
     if ((HEAP8[i8 + 6 | 0] & 1) == 0) {
      d21 = +(HEAP32[i7 >> 2] | 0);
     } else {
      d21 = +HEAPF32[i7 >> 2];
     }
     if (d20 == d21) {
      i19 = 1;
      break;
     }
     i19 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i6, i8) | 0;
    }
   } while (0);
   if (!(i19 & d17 == d16)) {
    i18 = 23;
   }
  } else {
   i18 = 23;
  }
 } while (0);
 do {
  if ((i18 | 0) == 23) {
   i19 = (i10 | 0) != 0;
   do {
    if (i19) {
     i7 = (__ZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE10ensureInfoERKS1_(i1) | 0) + 16 | 0;
     i5 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
     i18 = 27;
    } else {
     __ZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE10removeInfoERKS1_(i1);
     i18 = 27;
    }
   } while (0);
   if ((i18 | 0) == 27) {
    if (i9 & (i19 ^ 1)) {
     break;
    }
   }
   if ((HEAP32[i1 + 20 >> 2] & 64 | 0) == 0) {
    break;
   }
   __ZN7WebCore9RenderBox45removeFloatingOrPositionedChildFromBlockListsEv(i1);
  }
 } while (0);
 if ((HEAP8[i8 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
 }
 if ((HEAP8[i6 + 5 | 0] | 0) != 10) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, d32 = +0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 48 | 0;
 i9 = i5 + 80 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = i16 | 0;
 i18 = i16;
 i19 = HEAP32[i2 + 52 >> 2] | 0;
 i20 = HEAP32[i2 + 56 >> 2] | 0;
 i21 = i1 | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i1 + 4 | 0;
 HEAP32[i22 >> 2] = 0;
 i23 = i1 + 8 | 0;
 HEAP32[i23 >> 2] = i19;
 i19 = i1 + 12 | 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 | 0;
 __ZNK7WebCore12RenderObject29adjustRectForOutlineAndShadowERNS_10LayoutRectE(i20, i1);
 if ((i2 | 0) != (i3 | 0)) {
  i1 = i7;
  _memset(i1 | 0, 0, 32) | 0;
  d24 = +(HEAP32[i21 >> 2] | 0);
  d25 = +(HEAP32[i22 >> 2] | 0);
  d26 = +(HEAP32[i23 >> 2] | 0);
  d27 = +(HEAP32[i19 >> 2] | 0);
  i28 = (HEAPF32[tempDoublePtr >> 2] = d24, HEAP32[tempDoublePtr >> 2] | 0);
  i29 = i28 | 0;
  d30 = +d25;
  if ((i4 | 0) == 0) {
   HEAP32[i14 >> 2] = i29;
   HEAPF32[i14 + 4 >> 2] = d30;
   d31 = d24 + d26;
   HEAPF32[i13 + 8 >> 2] = d31;
   HEAPF32[i15 + 12 >> 2] = d25;
   d32 = d25 + d27;
   HEAPF32[i13 + 16 >> 2] = d31;
   HEAPF32[i15 + 20 >> 2] = d32;
   HEAPF32[i13 + 24 >> 2] = d24;
   HEAPF32[i15 + 28 >> 2] = d32;
   __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i12, i20, i15, i3, 0, 0);
   _memcpy(i1 | 0, i12 | 0, 32) | 0;
  } else {
   HEAP32[i10 >> 2] = i29;
   HEAPF32[i10 + 4 >> 2] = d30;
   i10 = i9 + 8 | 0;
   d30 = +d26;
   d26 = +d27;
   HEAPF32[i10 >> 2] = d30;
   HEAPF32[i10 + 4 >> 2] = d26;
   __ZNK7WebCore17RenderGeometryMap14mapToContainerERKNS_9FloatRectEPKNS_22RenderLayerModelObjectE(i8, i4, i11, i3);
   _memcpy(i1 | 0, i8 | 0, 32) | 0;
  }
  __ZNK7WebCore9FloatQuad11boundingBoxEv(i6, i7);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i18, i6);
  i6 = HEAP32[i17 + 4 >> 2] | 0;
  i18 = i16 + 8 | 0;
  i16 = HEAP32[i18 >> 2] | 0;
  i7 = HEAP32[i18 + 4 >> 2] | 0;
  HEAP32[i21 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i22 >> 2] = i6;
  HEAP32[i23 >> 2] = i16;
  HEAP32[i19 >> 2] = i7;
 }
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i33 = 0;
  i34 = 0;
  i35 = HEAP32[i21 >> 2] | 0;
  i36 = i35 + i33 | 0;
  HEAP32[i21 >> 2] = i36;
  i37 = HEAP32[i22 >> 2] | 0;
  i38 = i37 + i34 | 0;
  HEAP32[i22 >> 2] = i38;
  STACKTOP = i5;
  return;
 }
 i2 = i7 + 52 | 0;
 i33 = HEAP32[i2 >> 2] | 0;
 i34 = HEAP32[i2 + 4 >> 2] | 0;
 i35 = HEAP32[i21 >> 2] | 0;
 i36 = i35 + i33 | 0;
 HEAP32[i21 >> 2] = i36;
 i37 = HEAP32[i22 >> 2] | 0;
 i38 = i37 + i34 | 0;
 HEAP32[i22 >> 2] = i38;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9RenderBox8clipRectERKNS_11LayoutPointEPNS_12RenderRegionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i10 | 0;
 i12 = i10;
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
 __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i12, i2, i4, 0);
 i4 = (HEAP32[i3 >> 2] | 0) + (HEAP32[i11 >> 2] | 0) | 0;
 i17 = (HEAP32[i3 + 4 >> 2] | 0) + (HEAP32[i11 + 4 >> 2] | 0) | 0;
 i11 = i10 + 8 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 i3 = HEAP32[i11 + 4 >> 2] | 0;
 i11 = i1;
 HEAP32[i11 >> 2] = i4;
 HEAP32[i11 + 4 >> 2] = i17;
 i11 = i1 + 8 | 0;
 HEAP32[i11 >> 2] = i10;
 HEAP32[i11 + 4 >> 2] = i3;
 i11 = i2 + 36 | 0;
 i18 = HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0;
 i19 = i3;
 i3 = i10;
 if ((HEAP8[i18 + 9 | 0] | 0) == 0) {
  i20 = i18;
  i21 = i3;
 } else {
  HEAP32[i6 >> 2] = i3;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i13, i18 + 4 | 0, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i6 = HEAP32[i13 >> 2] | 0;
  HEAP32[i1 >> 2] = i4 + i6;
  i4 = i3 - i6 | 0;
  HEAP32[i1 + 8 >> 2] = i4;
  i20 = HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0;
  i21 = i4;
 }
 if ((HEAP8[i20 + 17 | 0] | 0) == 0) {
  i22 = i20;
 } else {
  i4 = HEAP32[i2 + 52 >> 2] | 0;
  HEAP32[i7 >> 2] = i4;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i14, i20 + 12 | 0, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  HEAP32[i1 + 8 >> 2] = (HEAP32[i14 >> 2] | 0) - i4 + i21;
  i22 = HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0;
 }
 if ((HEAP8[i22 + 25 | 0] | 0) == 0) {
  i23 = i22;
  i24 = i19;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i12 + 12 >> 2];
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i15, i22 + 20 | 0, i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i8 = HEAP32[i15 >> 2] | 0;
  HEAP32[i1 + 4 >> 2] = i17 + i8;
  i17 = i19 - i8 | 0;
  HEAP32[i1 + 12 >> 2] = i17;
  i23 = HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0;
  i24 = i17;
 }
 if ((HEAP8[i23 + 33 | 0] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = HEAP32[i2 + 56 >> 2] | 0;
 HEAP32[i9 >> 2] = i17;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i16, i23 + 28 | 0, i9, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 HEAP32[i1 + 12 >> 2] = (HEAP32[i16 >> 2] | 0) - i17 + i24;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 768 | 0) == 768) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 & 65536 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0;
 if ((i5 & 7168 | 0) == 2048) {
  i6 = 5;
 } else {
  if (((i5 >>> 10 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
   i6 = 5;
  } else {
   i7 = i3;
   i6 = 7;
  }
 }
 do {
  if ((i6 | 0) == 5) {
   i3 = i1;
   i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 836 >> 2] & 511](i1) | 0;
   i8 = HEAP32[i1 + 52 >> 2] | 0;
   i9 = i1 | 0;
   i10 = i1;
   i11 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 744 >> 2] & 511](i9) | 0) | 0;
   i8 = i11 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 748 >> 2] & 511](i9) | 0) | 0;
   if ((i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 908 >> 2] & 511](i1) | 0) | 0) != (i5 | 0)) {
    i12 = 0;
    break;
   }
   i7 = HEAP32[i2 >> 2] | 0;
   i6 = 7;
  }
 } while (0);
 do {
  if ((i6 | 0) == 7) {
   if ((i7 & 65536 | 0) == 0) {
    i12 = 1;
    break;
   }
   i5 = i1 + 36 | 0;
   i3 = HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] | 0;
   if ((i3 & 57344 | 0) != 16384) {
    if (((i3 >>> 13 & 7) - 3 | 0) >>> 0 >= 2 >>> 0) {
     i12 = 1;
     break;
    }
   }
   i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 840 >> 2] & 511](i1) | 0;
   i8 = HEAP32[i1 + 56 >> 2] | 0;
   i9 = i1 | 0;
   i10 = i1;
   i11 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 736 >> 2] & 511](i9) | 0) | 0;
   i8 = i11 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 740 >> 2] & 511](i9) | 0) | 0;
   do {
    if ((HEAP32[i2 >> 2] & 65536 | 0) == 0) {
     i13 = 0;
    } else {
     i9 = i1 + 40 | 0;
     if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i9 >> 2] | 0) | 0) {
      i13 = 0;
      break;
     }
     if ((((HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
      i13 = 0;
      break;
     }
     i13 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i9 >> 2] | 0, 0) | 0;
    }
   } while (0);
   i12 = (i8 - i13 | 0) == (i3 | 0);
  }
 } while (0);
 i13 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i13 & 65536 | 0) != 0) {
   i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0;
   do {
    if ((i2 & 7168 | 0) == 2048) {
     i14 = 0;
    } else {
     if (((i2 >>> 10 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
      i14 = 0;
      break;
     }
     if ((i2 & 57344 | 0) == 16384) {
      i14 = 0;
      break;
     }
     i14 = ((i2 >>> 13 & 7) - 3 | 0) >>> 0 > 1 >>> 0;
    }
   } while (0);
   if (i12 | i14) {
    break;
   } else {
    i4 = 1;
   }
   return i4 | 0;
  }
 } while (0);
 if ((i13 & 128 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i13 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i13, 0, 1) | 0;
 return i4 | 0;
}
function __ZNK7WebCore9RenderBox37constrainLogicalWidthInRegionByMinMaxENS_10LayoutUnitES1_PNS_11RenderBlockEPNS_12RenderRegionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i8 >> 2];
 i8 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i8 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = HEAP32[i2 + 36 >> 2] | 0;
 i17 = i16 + 44 | 0;
 i18 = (HEAP32[i17 >> 2] | 0) >>> 13 & 3;
 if ((i18 | 0) == 3 | (i18 | 0) == 0) {
  i19 = HEAP32[i16 + 4 >> 2] | 0;
  i20 = i19 + 28 | 0;
  i21 = i19;
 } else {
  i19 = HEAP32[i16 + 4 >> 2] | 0;
  i20 = i19 + 44 | 0;
  i21 = i19;
 }
 do {
  if ((HEAP8[i20 + 5 | 0] | 0) != 15) {
   if ((i18 | 0) == 3 | (i18 | 0) == 0) {
    i22 = i21 + 28 | 0;
   } else {
    i22 = i21 + 44 | 0;
   }
   i19 = i22;
   i23 = HEAP32[i19 >> 2] | 0;
   i24 = HEAP32[i19 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = i23;
   HEAP32[i9 + 4 >> 2] = i24;
   if ((i23 & 0 | 0) == 0 & (i24 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
   }
   HEAP32[i11 >> 2] = HEAP32[i4 >> 2];
   __ZNK7WebCore9RenderBox32computeLogicalWidthInRegionUsingENS_8SizeTypeENS_6LengthENS_10LayoutUnitEPKNS_11RenderBlockEPNS_12RenderRegionE(i8, i2, 2, i10, i11, i5, i6);
   i24 = i3 | 0;
   HEAP32[i24 >> 2] = HEAP32[((HEAP32[i8 >> 2] | 0) < (HEAP32[i24 >> 2] | 0) ? i8 : i3) >> 2];
   if ((HEAP8[i10 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
  }
 } while (0);
 i10 = (HEAP32[i17 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  i25 = (HEAP32[i16 + 4 >> 2] | 0) + 20 | 0;
 } else {
  i25 = (HEAP32[i16 + 4 >> 2] | 0) + 36 | 0;
 }
 i16 = i25;
 i25 = HEAP32[i16 >> 2] | 0;
 i10 = HEAP32[i16 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = i25;
 HEAP32[i13 + 4 >> 2] = i10;
 if ((i25 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i14);
 }
 HEAP32[i15 >> 2] = HEAP32[i4 >> 2];
 __ZNK7WebCore9RenderBox32computeLogicalWidthInRegionUsingENS_8SizeTypeENS_6LengthENS_10LayoutUnitEPKNS_11RenderBlockEPNS_12RenderRegionE(i12, i2, 1, i14, i15, i5, i6);
 HEAP32[i1 >> 2] = HEAP32[((HEAP32[i3 >> 2] | 0) < (HEAP32[i12 >> 2] | 0) ? i12 : i3) >> 2];
 if ((HEAP8[i14 + 5 | 0] | 0) != 10) {
  STACKTOP = i7;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore9RenderBox40applyCachedClipAndScrollOffsetForRepaintERNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i4;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i1 + 36 | 0;
 i9 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i9 | 0) == 3 | (i9 | 0) == 1) {
   i10 = i1 + 20 | 0;
   if ((HEAP32[i10 >> 2] & 8192 | 0) == 0) {
    i11 = i2 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i1 + 52 >> 2] | 0) - (HEAP32[i11 >> 2] | 0) - (HEAP32[i2 + 8 >> 2] | 0);
    i12 = i10;
    break;
   } else {
    i11 = i2 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i1 + 56 >> 2] | 0) - (HEAP32[i11 >> 2] | 0) - (HEAP32[i2 + 12 >> 2] | 0);
    i12 = i10;
    break;
   }
  } else {
   i12 = i1 + 20 | 0;
  }
 } while (0);
 i9 = i1 + 40 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) + 112 | 0;
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 i13 = i2 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - (HEAP32[i10 >> 2] | 0);
 i10 = i2 + 4 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - i11;
 do {
  if ((HEAP32[i12 >> 2] & 98304 | 0) == 98304) {
   if (!(__ZNK7WebCore11RenderLayer23usesCompositedScrollingEv(HEAP32[i9 >> 2] | 0) | 0)) {
    break;
   }
   i11 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if (!((i11 | 0) == 3 | (i11 | 0) == 1)) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i12 >> 2] & 8192 | 0) == 0) {
    HEAP32[i13 >> 2] = (HEAP32[i1 + 52 >> 2] | 0) - (HEAP32[i13 >> 2] | 0) - (HEAP32[i2 + 8 >> 2] | 0);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i10 >> 2] = (HEAP32[i1 + 56 >> 2] | 0) - (HEAP32[i10 >> 2] | 0) - (HEAP32[i2 + 12 >> 2] | 0);
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 i11 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i11 + 104 >> 2] | 0;
 i14 = HEAP32[i11 + 108 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 i5 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = i9;
 HEAP32[i5 + 4 >> 2] = i14;
 i14 = i7;
 i5 = i2;
 HEAP32[i14 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i14 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i14 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i14 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 __ZN7WebCore10LayoutRect9intersectERKS0_(i7, i6);
 HEAP32[i5 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 i14 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i14 | 0) == 3 | (i14 | 0) == 1)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i12 >> 2] & 8192 | 0) == 0) {
  HEAP32[i13 >> 2] = (HEAP32[i1 + 52 >> 2] | 0) - (HEAP32[i13 >> 2] | 0) - (HEAP32[i2 + 8 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = (HEAP32[i1 + 56 >> 2] | 0) - (HEAP32[i10 >> 2] | 0) - (HEAP32[i2 + 12 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS1_10LayoutUnitEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 i8 = __ZN3WTF10fastMallocEj(i2 << 3) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   HEAP32[i8 + (i9 << 3) >> 2] = 0;
   HEAP32[i8 + (i9 << 3) + 4 >> 2] = 0;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  i10 = 0;
  i11 = i1 + 16 | 0;
  HEAP32[i11 >> 2] = 0;
  i12 = i7;
  __ZN3WTF8fastFreeEPv(i12);
  return i10 | 0;
 } else {
  i13 = 0;
  i14 = 0;
 }
 while (1) {
  i8 = i7 + (i13 << 3) | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  i9 = i2;
  if ((i9 | 0) == (-1 | 0) | (i9 | 0) == 0) {
   i15 = i14;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i9 + ~(i9 << 15) | 0;
   i9 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i9 >>> 6 ^ i9;
   i9 = i18 + ~(i18 << 11) | 0;
   i18 = i9 >>> 16 ^ i9;
   i9 = i17 & i18;
   i19 = i16 + (i9 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L11 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i9;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i2 | 0)) {
       i30 = i28;
       break L11;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
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
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i8;
   i17 = i30;
   i2 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i2;
   i15 = (i8 | 0) == (i3 | 0) ? i30 : i14;
  }
  i2 = i13 + 1 | 0;
  if ((i2 | 0) == (i5 | 0)) {
   i10 = i15;
   break;
  } else {
   i13 = i2;
   i14 = i15;
  }
 }
 i11 = i1 + 16 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i7;
 __ZN3WTF8fastFreeEPv(i12);
 return i10 | 0;
}
function __ZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE10ensureInfoERKS1_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 if ((HEAP8[H_BASE + 1088 | 0] | 0) == 0) {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1040 >> 2] = i7;
  HEAP32[H_BASE + 1088 >> 2] = 1;
  HEAP32[H_BASE + 1092 >> 2] = 0;
  i8 = i7;
 } else {
  i8 = HEAP32[H_BASE + 1040 >> 2] | 0;
 }
 i7 = HEAP32[i8 + 8 >> 2] | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 i9 = i1;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 L5 : do {
  if ((i6 | 0) != 0) {
   i9 = i7 & i10;
   i11 = i6 + (i9 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == (i1 | 0)) {
    i13 = i11;
   } else {
    i11 = (i10 >>> 23) + ~i10 | 0;
    i14 = i11 << 12 ^ i11;
    i11 = i14 >>> 7 ^ i14;
    i14 = i11 << 2 ^ i11;
    i11 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i9;
    i9 = i12;
    while (1) {
     if ((i9 | 0) == 0) {
      break L5;
     }
     i12 = (i14 | 0) == 0 ? i11 : i14;
     i16 = i12 + i15 & i7;
     i17 = i6 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i1 | 0)) {
      i13 = i17;
      break;
     } else {
      i14 = i12;
      i15 = i16;
      i9 = i18;
     }
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i13 + 4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i19 = i9;
   }
   STACKTOP = i2;
   return i19 | 0;
  }
 } while (0);
 HEAP32[i4 >> 2] = i1;
 i13 = __ZN3WTF10fastMallocEj(40) | 0;
 HEAP32[i13 + 4 >> 2] = 0;
 HEAP32[i13 + 8 >> 2] = 0;
 HEAP32[i13 + 12 >> 2] = i1;
 HEAP32[i13 + 16 >> 2] = 0;
 HEAP32[i13 + 20 >> 2] = 0;
 HEAP32[i13 + 24 >> 2] = 0;
 HEAP32[i13 >> 2] = __ZTVN7WebCore16ShapeOutsideInfoE + 8;
 HEAP32[i13 + 28 >> 2] = 0;
 HEAP32[i13 + 32 >> 2] = 0;
 HEAP32[i13 + 36 >> 2] = 0;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i13;
 __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_16ShapeOutsideInfoENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EES4_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SC_SE_SG_SM_SJ_EEEEOT0_OT1_(i3, i8 | 0, i4, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i19 = HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0;
 STACKTOP = i2;
 return i19 | 0;
}
function __ZNK7WebCore9RenderBox25clampToStartAndEndRegionsEPNS_12RenderRegionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 64 | 0;
 i9 = i3 + 72 | 0;
 i10 = i3 + 80 | 0;
 i11 = i3 + 88 | 0;
 i12 = i3 + 96 | 0;
 i13 = i3 + 104 | 0;
 i14 = i1 + 20 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((i15 & 805306368 | 0) == 0) {
  i16 = 0;
  i17 = i15;
 } else {
  i15 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
  i16 = i15;
  i17 = HEAP32[i14 >> 2] | 0;
 }
 if ((i17 & 768 | 0) == 768) {
  i18 = i2;
  STACKTOP = i3;
  return i18 | 0;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 __ZNK7WebCore16RenderFlowThread20getRegionRangeForBoxEPKNS_9RenderBoxERPNS_12RenderRegionES6_(i16, i1, i8, i9);
 do {
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   i1 = i6;
   i16 = i2 + 124 | 0;
   HEAP32[i1 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i1 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
   HEAP32[i1 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
   HEAP32[i1 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
   __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i10, i2, i6);
   i16 = HEAP32[i8 >> 2] | 0;
   i1 = i5;
   i17 = i16 + 124 | 0;
   HEAP32[i1 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i1 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
   HEAP32[i1 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   HEAP32[i1 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
   __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i11, i16, i5);
   if ((HEAP32[i10 >> 2] | 0) >= (HEAP32[i11 >> 2] | 0)) {
    break;
   }
   i18 = HEAP32[i8 >> 2] | 0;
   STACKTOP = i3;
   return i18 | 0;
  }
 } while (0);
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  i18 = i2;
  STACKTOP = i3;
  return i18 | 0;
 } else {
  i18 = i4;
  i8 = i2 + 124 | 0;
  HEAP32[i18 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i18 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  HEAP32[i18 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
  HEAP32[i18 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
  __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i12, i2, i4);
  i4 = HEAP32[i9 >> 2] | 0;
  i8 = i7;
  i18 = i4 + 124 | 0;
  HEAP32[i8 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i8 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
  HEAP32[i8 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
  HEAP32[i8 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
  __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i13, i4, i7);
  STACKTOP = i3;
  return ((HEAP32[i12 >> 2] | 0) > (HEAP32[i13 >> 2] | 0) ? HEAP32[i9 >> 2] | 0 : i2) | 0;
 }
 return 0;
}
function __ZNK7WebCore9RenderBox41containingBlockAvailableLineWidthInRegionEPNS_12RenderRegionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 72 | 0;
 i14 = i4 + 80 | 0;
 i15 = i4 + 88 | 0;
 i16 = i4 + 96 | 0;
 i17 = i4 + 104 | 0;
 i18 = i4 + 112 | 0;
 i19 = i4 + 120 | 0;
 i20 = i4 + 128 | 0;
 i21 = __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0;
 i22 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i22 | 0) == 3 | (i22 | 0) == 0) {
  i23 = i2 + 48 | 0;
 } else {
  i23 = i2 + 44 | 0;
 }
 i22 = HEAP32[i23 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i24 = 0;
  i25 = i22;
 } else {
  i23 = i5;
  i26 = i3 + 124 | 0;
  HEAP32[i23 >> 2] = HEAP32[i26 >> 2];
  HEAP32[i23 + 4 >> 2] = HEAP32[i26 + 4 >> 2];
  HEAP32[i23 + 8 >> 2] = HEAP32[i26 + 8 >> 2];
  HEAP32[i23 + 12 >> 2] = HEAP32[i26 + 12 >> 2];
  __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i18, i3, i5);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i19, i2);
  i5 = (HEAP32[i18 >> 2] | 0) - (HEAP32[i19 >> 2] | 0) | 0;
  i24 = __ZNK7WebCore9RenderBox25clampToStartAndEndRegionsEPNS_12RenderRegionE(i21 | 0, i3) | 0;
  i25 = ((i5 | 0) > 0 ? i5 : 0) + i22 | 0;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 904 >> 2] & 63](i20, i2, 1);
 i2 = HEAP32[i20 >> 2] | 0;
 __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i10, i21, i24);
 i20 = HEAP32[i10 >> 2] | 0;
 i10 = i21;
 i22 = HEAP32[(HEAP32[i10 >> 2] | 0) + 1068 >> 2] | 0;
 HEAP32[i7 >> 2] = i25;
 HEAP32[i8 >> 2] = i20;
 HEAP32[i9 >> 2] = i2;
 FUNCTION_TABLE_viiiii[i22 & 15](i6, i21, i7, i8, i9);
 __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i16, i21, i6, 0);
 __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i15, i21, i24);
 i24 = HEAP32[i15 >> 2] | 0;
 i15 = HEAP32[(HEAP32[i10 >> 2] | 0) + 1072 >> 2] | 0;
 HEAP32[i12 >> 2] = i25;
 HEAP32[i13 >> 2] = i24;
 HEAP32[i14 >> 2] = i2;
 FUNCTION_TABLE_viiiii[i15 & 15](i11, i21, i12, i13, i14);
 __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i17, i21, i11, 0);
 i11 = (HEAP32[i16 >> 2] | 0) - (HEAP32[i17 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = (i11 | 0) > 0 ? i11 : 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9RenderBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 32 | 0;
 i12 = i1 + 44 | 0;
 i13 = (HEAP32[i12 + 4 >> 2] | 0) + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i14 = i8 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i12 >> 2] | 0) + (HEAP32[i5 >> 2] | 0);
 i5 = i8 + 4 | 0;
 HEAP32[i5 >> 2] = i13;
 i13 = HEAP32[i1 + 32 >> 2] | 0;
 L1 : do {
  if ((i13 | 0) != 0) {
   i12 = i13;
   while (1) {
    if ((HEAP32[i12 + 20 >> 2] & 32768 | 0) == 0) {
     if (FUNCTION_TABLE_iiiiiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 460 >> 2] & 3](i12, i2, i3, i4, i8, i6) | 0) {
      break;
     }
    }
    i12 = HEAP32[i12 + 12 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break L1;
    }
   }
   i12 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
   i15 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
   HEAP32[i9 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i14 >> 2] | 0);
   HEAP32[i9 + 4 >> 2] = i15;
   FUNCTION_TABLE_viii[i12 & 63](i1 | 0, i3, i9);
   i16 = 1;
   STACKTOP = i7;
   return i16 | 0;
  }
 } while (0);
 __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i10, i1, HEAP32[i4 + 64 >> 2] | 0, 0);
 i9 = HEAP32[i5 >> 2] | 0;
 i8 = i10 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + (HEAP32[i14 >> 2] | 0);
 i8 = i10 + 4 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + i9;
 i9 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((HEAP32[i9 + 40 >> 2] & 6144 | 0) == 0) {
   if (!((HEAP32[i9 + 44 >> 2] & 1920 | 0) != 0 & (i6 | 0) == 4)) {
    break;
   }
   if (!(__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i4, i10) | 0)) {
    break;
   }
   i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
   i13 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
   HEAP32[i11 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i14 >> 2] | 0);
   HEAP32[i11 + 4 >> 2] = i13;
   FUNCTION_TABLE_viii[i8 & 63](i1 | 0, i3, i11);
   if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
    i17 = HEAP32[i1 + 4 >> 2] | 0;
   } else {
    i17 = 0;
   }
   if (__ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_10LayoutRectE(i3, i17 | 0, i2, i4, i10) | 0) {
    break;
   } else {
    i16 = 1;
   }
   STACKTOP = i7;
   return i16 | 0;
  }
 } while (0);
 i16 = 0;
 STACKTOP = i7;
 return i16 | 0;
}
function __ZNK7WebCore9RenderBox13reflectedRectERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
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
 i13 = HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 104 >> 2] | 0;
 if ((i13 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 }
 i14 = i2 + 52 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = HEAP32[i14 + 4 >> 2] | 0;
 i14 = i3 | 0;
 i17 = HEAP32[i14 >> 2] | 0;
 i18 = i3 + 4 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = i3 + 8 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 i22 = HEAP32[i20 + 4 >> 2] | 0;
 i20 = HEAP32[i13 + 4 >> 2] | 0;
 if ((i20 | 0) == 2) {
  HEAP32[i9 >> 2] = i15;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i10, i13 + 8 | 0, i9, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i23 = -((HEAP32[i14 >> 2] | 0) + (HEAP32[i10 >> 2] | 0) + (HEAP32[i3 + 8 >> 2] | 0) | 0) | 0;
  i24 = i19;
 } else if ((i20 | 0) == 0) {
  i10 = i16;
  HEAP32[i5 >> 2] = i10;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i6, i13 + 8 | 0, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i23 = i17;
  i24 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i18 >> 2] | 0) - (HEAP32[i3 + 12 >> 2] | 0) + (i10 << 1 | 0 >>> 31) | 0;
 } else if ((i20 | 0) == 3) {
  i10 = i15;
  HEAP32[i11 >> 2] = i10;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i12, i13 + 8 | 0, i11, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i23 = (HEAP32[i12 >> 2] | 0) - (HEAP32[i14 >> 2] | 0) - (HEAP32[i3 + 8 >> 2] | 0) + (i10 << 1) | 0;
  i24 = i19;
 } else if ((i20 | 0) == 1) {
  HEAP32[i7 >> 2] = i16;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i8, i13 + 8 | 0, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i23 = i17;
  i24 = -((HEAP32[i18 >> 2] | 0) + (HEAP32[i8 >> 2] | 0) + (HEAP32[i3 + 12 >> 2] | 0) | 0) | 0;
 } else {
  i23 = i17;
  i24 = i19;
 }
 HEAP32[i1 >> 2] = i23;
 HEAP32[i1 + 4 >> 2] = i24;
 i24 = i1 + 8 | 0;
 HEAP32[i24 >> 2] = i21;
 HEAP32[i24 + 4 >> 2] = i22;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9RenderBox12imageChangedEPKvPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 i4 = i1 + 36 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[i5 + 16 >> 2] | 0) + 132 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = i5;
   i8 = 5;
  } else {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] & 511](i6) | 0) == (i2 | 0)) {
    break;
   }
   i7 = HEAP32[i4 >> 2] | 0;
   i8 = 5;
  }
 } while (0);
 do {
  if ((i8 | 0) == 5) {
   i6 = HEAP32[(HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 164 >> 2] | 0) + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i9 = i7;
   } else {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] & 511](i6) | 0) == (i2 | 0)) {
     break;
    }
    i9 = HEAP32[i4 >> 2] | 0;
   }
   if (!(__ZN7WebCore9RenderBox25repaintLayerRectsForImageEPKvPKNS_9FillLayerEb(i1, i2, (HEAP32[i9 + 12 >> 2] | 0) + 4 | 0, 1) | 0)) {
    __ZN7WebCore9RenderBox25repaintLayerRectsForImageEPKvPKNS_9FillLayerEb(i1, i2, (HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 116 | 0, 0) | 0;
   }
   if (!(__ZNK7WebCore12RenderObject12isCompositedEv(i3) | 0)) {
    return;
   }
   i6 = i1 + 40 | 0;
   L19 : do {
    if (__ZNK7WebCore11RenderLayer17hasCompositedMaskEv(HEAP32[i6 >> 2] | 0) | 0) {
     i5 = (HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 116 | 0;
     if ((i5 | 0) == 0) {
      break;
     } else {
      i10 = i5;
     }
     while (1) {
      i5 = HEAP32[i10 + 4 >> 2] | 0;
      if ((i5 | 0) != 0) {
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 511](i5) | 0) == (i2 | 0)) {
        break;
       }
      }
      i10 = HEAP32[i10 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break L19;
      }
     }
     __ZN7WebCore11RenderLayer14contentChangedENS_17ContentChangeTypeE(HEAP32[i6 >> 2] | 0, 1);
    }
   } while (0);
   i5 = (HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] | 0) + 4 | 0;
   if ((i5 | 0) == 0) {
    return;
   } else {
    i11 = i5;
   }
   while (1) {
    i5 = HEAP32[i11 + 4 >> 2] | 0;
    if ((i5 | 0) != 0) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 511](i5) | 0) == (i2 | 0)) {
      break;
     }
    }
    i5 = HEAP32[i11 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i8 = 28;
     break;
    } else {
     i11 = i5;
    }
   }
   if ((i8 | 0) == 28) {
    return;
   }
   __ZN7WebCore11RenderLayer14contentChangedENS_17ContentChangeTypeE(HEAP32[i6 >> 2] | 0, 2);
   return;
  }
 } while (0);
 __ZNK7WebCore12RenderObject7repaintEb(i3, 0);
 return;
}
function __ZN7WebCore10RenderView15pushLayoutStateERNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i8 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i1 + 192 | 0;
 do {
  if ((HEAP8[(HEAP32[i1 + 116 >> 2] | 0) + 224 | 0] & 1) != 0) {
   i11 = HEAP32[i10 >> 2] | 0;
   if ((HEAP8[i11 | 0] & 2) != 0) {
    break;
   }
   i12 = i2 + 20 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 & 4194304 | 0) != 0) {
    break;
   }
   if ((i13 & 805306368 | 0) == 0) {
    i14 = i11;
   } else {
    if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0) != 0) {
     break;
    }
    i14 = HEAP32[i10 >> 2] | 0;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   i11 = HEAP32[i2 + 24 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 120 >> 2] | 0) != (HEAP32[__ZN3WTF8nullAtomE >> 2] | 0)) {
    if ((i11 & 32 | 0) != 0) {
     break;
    }
   }
   i13 = i2 + 24 | 0;
   if ((i11 & 16 | 0) == 0) {
    i15 = i14;
   } else {
    if ((__ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i2) | 0) != 0) {
     break;
    }
    i15 = HEAP32[i10 >> 2] | 0;
   }
   if ((HEAP32[i15 + 16 >> 2] | 0) == 0) {
    i16 = 0;
    STACKTOP = i7;
    return i16 | 0;
   }
   if ((HEAP32[i13 >> 2] & 16 | 0) == 0) {
    i16 = 0;
    STACKTOP = i7;
    return i16 | 0;
   }
   if ((HEAP32[i12 >> 2] & 1088 | 0) == 0) {
    i16 = 0;
   } else {
    break;
   }
   STACKTOP = i7;
   return i16 | 0;
  }
 } while (0);
 __ZN7WebCore10RenderView35pushLayoutStateForCurrentFlowThreadERKNS_12RenderObjectE(i1, i2 | 0);
 i1 = __Znwj(88) | 0;
 i15 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i14 = i8 | 0;
 HEAP32[i14 >> 2] = i15;
 HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore11LayoutStateC1ENSt3__110unique_ptrIS0_NS1_14default_deleteIS0_EEEEPNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE(i1, i8, i2, i3, i9, i5, i6);
 i6 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore11LayoutStateD1Ev(i6);
  __ZdlPv(i6 | 0);
 }
 i6 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i1;
 if ((i6 | 0) == 0) {
  i16 = 1;
  STACKTOP = i7;
  return i16 | 0;
 }
 __ZN7WebCore11LayoutStateD1Ev(i6);
 __ZdlPv(i6 | 0);
 i16 = 1;
 STACKTOP = i7;
 return i16 | 0;
}
function __ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i1 | 0;
 i12 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i11, i2, i5) | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 i14 = i1 + 36 | 0;
 i15 = (HEAP32[(HEAP32[i14 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 25165824;
 if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) == 0) {
  i16 = 0;
 } else {
  i16 = (HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 172 >> 2] | 0) != 0;
 }
 if ((HEAP8[i5] & 1) == 0) {
  i17 = 0;
  i18 = 0;
  i19 = i12 | 0;
 } else {
  i20 = i12 | 0;
  __ZNK7WebCore12RenderObject27offsetFromAncestorContainerEPS0_(i6, i2 | 0, i20);
  i17 = -(HEAP32[i6 >> 2] | 0) | 0;
  i18 = -(HEAP32[i6 + 4 >> 2] | 0) | 0;
  i19 = i20;
 }
 HEAP8[i7] = 0;
 i20 = HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 FUNCTION_TABLE_viiiii[i20 & 15](i8, i1, i19, i9, i7);
 if ((HEAP32[(HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) == 0) {
  i21 = (HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) != 0;
 } else {
  i21 = 1;
 }
 if (__ZNK7WebCore12RenderObject31shouldUseTransformFromContainerEPKS0_(i11, i19) | 0) {
  HEAPF64[i10 >> 3] = +1;
  _memset(i10 + 8 | 0, 0, 32) | 0;
  HEAPF64[i10 + 40 >> 3] = +1;
  _memset(i10 + 48 | 0, 0, 32) | 0;
  HEAPF64[i10 + 80 >> 3] = +1;
  _memset(i10 + 88 | 0, 0, 32) | 0;
  HEAPF64[i10 + 120 >> 3] = +1;
  __ZNK7WebCore12RenderObject25getTransformFromContainerEPKS0_RKNS_10LayoutSizeERNS_20TransformationMatrixE(i11, i19, i8, i10);
  __ZN7WebCore20TransformationMatrix14translateRightEdd(i10, +(i17 | 0), +(i18 | 0)) | 0;
  __ZN7WebCore17RenderGeometryMap4pushEPKNS_12RenderObjectERKNS_20TransformationMatrixEbbbb(i3, i11, i10, i21, (HEAP8[i7] & 1) != 0, i15, i16);
 } else {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i17;
  i17 = i8 + 4 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + i18;
  __ZN7WebCore17RenderGeometryMap4pushEPKNS_12RenderObjectERKNS_10LayoutSizeEbbbb(i3, i11, i8, i21, (HEAP8[i7] & 1) != 0, i15, i16);
 }
 i13 = ((HEAP8[i5] & 1) == 0 ? i12 : i2 | 0) | 0;
 STACKTOP = i4;
 return i13 | 0;
}
function __ZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE10removeInfoERKS1_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 if ((HEAP8[H_BASE + 1088 | 0] | 0) == 0) {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i3 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1040 >> 2] = i3;
  HEAP32[H_BASE + 1088 >> 2] = 1;
  HEAP32[H_BASE + 1092 >> 2] = 0;
  i4 = i3;
 } else {
  i4 = HEAP32[H_BASE + 1040 >> 2] | 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = HEAP32[i4 + 4 >> 2] | 0;
  i5 = i2 << 3 | 0;
  i6 = 0;
  i7 = i2;
 } else {
  i2 = HEAP32[i4 + 8 >> 2] | 0;
  i8 = i1;
  i9 = i8 + ~(i8 << 15) | 0;
  i8 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i8 >>> 6 ^ i8;
  i8 = i9 + ~(i9 << 11) | 0;
  i9 = i8 >>> 16 ^ i8;
  i8 = i2 & i9;
  i10 = i3 + (i8 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L8 : do {
   if ((i11 | 0) == (i1 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i8;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L8;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i2;
     i19 = i3 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i1 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i1 = HEAP32[i4 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i1 << 3) | 0 : i12;
  i6 = i3;
  i7 = i1;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  return;
 }
 i7 = i5 + 4 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i4 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i4 + 12 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i6;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 if (!((i6 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_16ShapeOutsideInfoENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i4 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 return;
}
function __ZNK7WebCore9RenderBox26getBackgroundPaintedExtentERNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i5 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 52 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i11 = i1 + 52 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 i8 = i7 + 8 | 0;
 HEAP32[i8 >> 2] = i12;
 HEAP32[i8 + 4 >> 2] = i13;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i5, i7);
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i7;
 i7 = i5 + 8 | 0;
 i5 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 + 8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i4 + 12 >> 2] = i5;
 i5 = i1 + 36 | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i9, HEAP32[i5 >> 2] | 0, 23);
 do {
  if ((HEAP8[i9 + 4 | 0] & 1) != 0) {
   if ((HEAP32[i9 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
    break;
   }
   i7 = i2;
   i6 = i4;
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   i14 = 1;
   STACKTOP = i3;
   return i14 | 0;
  }
 } while (0);
 i9 = (HEAP32[i5 >> 2] | 0) + 12 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
   if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
    break;
   }
   _memset(i10 | 0, 0, 49) | 0;
   __ZNK7WebCore20RenderBoxModelObject32calculateBackgroundImageGeometryEPKNS_22RenderLayerModelObjectEPKNS_9FillLayerERKNS_10LayoutRectERNS0_23BackgroundImageGeometryEPNS_13RenderElementE(i1 | 0, 0, (HEAP32[i9 >> 2] | 0) + 4 | 0, i4, i10, 0);
   i6 = i10;
   i7 = i10 + 8 | 0;
   i13 = HEAP32[i6 + 4 >> 2] | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   i12 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i2 + 4 >> 2] = i13;
   HEAP32[i2 + 8 >> 2] = i8;
   HEAP32[i2 + 12 >> 2] = i12;
   i14 = (HEAP8[i10 + 48 | 0] & 1) == 0;
   STACKTOP = i3;
   return i14 | 0;
  }
 } while (0);
 i10 = i2;
 i2 = i4;
 HEAP32[i10 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i14 = 1;
 STACKTOP = i3;
 return i14 | 0;
}
function __ZNK7WebCore9RenderBox11borderRadiiEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = i4;
 i8 = i2 + 44 | 0;
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 i8 = i6 + 16 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 i2 = HEAP32[i7 + 104 >> 2] | 0;
 if ((HEAP32[(HEAP32[i7 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  if ((i2 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i9 = 0;
  } else {
   i9 = i2 >>> 1 & 67108863;
  }
  i10 = HEAP32[i7 + 120 >> 2] | 0;
  if ((i10 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i11 = 0;
   i12 = i9;
  } else {
   i13 = i9;
   i14 = i10;
   i15 = 7;
  }
 } else {
  i13 = i2 >>> 1 & 67108863;
  i14 = HEAP32[i7 + 120 >> 2] | 0;
  i15 = 7;
 }
 if ((i15 | 0) == 7) {
  i11 = i14 >>> 1 & 67108863;
  i12 = i13;
 }
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + i12;
 i13 = i4 + 4 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + i11;
 i13 = HEAP32[i8 >> 2] | 0;
 i8 = (HEAP32[(HEAP32[i13 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
 i14 = HEAP32[i13 + 112 >> 2] | 0;
 do {
  if (i8) {
   if ((i14 & 1879048192) >>> 0 >= 268435456 >>> 0) {
    i15 = 11;
    break;
   }
   i16 = i12;
   i17 = HEAP32[i13 + 128 >> 2] | 0;
   i15 = 12;
  } else {
   i15 = 11;
  }
 } while (0);
 if ((i15 | 0) == 11) {
  i7 = (i14 >>> 1 & 67108863) + i12 | 0;
  i12 = i7 >>> 0 < 2147483647 >>> 0 ? i7 : 2147483647;
  i7 = HEAP32[i13 + 128 >> 2] | 0;
  if (i8) {
   i16 = i12;
   i17 = i7;
   i15 = 12;
  } else {
   i18 = i12;
   i19 = i7;
   i15 = 13;
  }
 }
 if ((i15 | 0) == 12) {
  if ((i17 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i20 = 0;
   i21 = i16;
  } else {
   i18 = i16;
   i19 = i17;
   i15 = 13;
  }
 }
 if ((i15 | 0) == 13) {
  i20 = i19 >>> 1 & 67108863;
  i21 = i18;
 }
 i18 = i20 + i11 | 0;
 i11 = i4 + 8 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) - i21;
 i21 = i4 + 12 | 0;
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - (i18 >>> 0 < 2147483647 >>> 0 ? i18 : 2147483647);
 __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i5, i6, i4, 0, 1, 1);
 _memcpy(i1 | 0, i5 + 16 | 0, 32) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9RenderBox12maskClipRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 52 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = HEAP32[i2 + 36 >> 2] | 0;
 i11 = i10 + 20 | 0;
 i12 = (HEAP32[i11 >> 2] | 0) + 164 | 0;
 if ((HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0) != 0) {
  i13 = i2 + 52 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = HEAP32[i13 + 4 >> 2] | 0;
  __ZNK7WebCore11RenderStyle12imageOutsetsERKNS_14NinePieceImageE(i4, i10, i12);
  i12 = HEAP32[i4 + 12 >> 2] | 0;
  i10 = HEAP32[i4 >> 2] | 0;
  i13 = i12 + i14 + (HEAP32[i4 + 4 >> 2] | 0) | 0;
  i14 = i10 + i15 + (HEAP32[i4 + 8 >> 2] | 0) | 0;
  i4 = i1;
  HEAP32[i4 >> 2] = -i12;
  HEAP32[i4 + 4 >> 2] = -i10;
  i10 = i1 + 8 | 0;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i6 | 0;
 i10 = i5;
 _memset(i10 | 0, 0, 16) | 0;
 i13 = i2 + 52 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 i12 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i14 + 4 >> 2] = 0;
 i14 = i6 + 8 | 0;
 HEAP32[i14 >> 2] = i4;
 HEAP32[i14 + 4 >> 2] = i12;
 i12 = (HEAP32[i11 >> 2] | 0) + 116 | 0;
 if ((i12 | 0) != 0) {
  i11 = i8;
  i14 = i2 | 0;
  i2 = i8;
  i4 = i8 + 8 | 0;
  i6 = i9 | 0;
  i13 = i9 + 4 | 0;
  i15 = i9 + 8 | 0;
  i16 = i9 + 12 | 0;
  i17 = i12;
  while (1) {
   if ((HEAP32[i17 + 4 >> 2] | 0) != 0) {
    _memset(i11 | 0, 0, 49) | 0;
    __ZNK7WebCore20RenderBoxModelObject32calculateBackgroundImageGeometryEPKNS_22RenderLayerModelObjectEPKNS_9FillLayerERKNS_10LayoutRectERNS0_23BackgroundImageGeometryEPNS_13RenderElementE(i14, 0, i17, i7, i8, 0);
    i12 = HEAP32[i4 >> 2] | 0;
    i18 = HEAP32[i4 + 4 >> 2] | 0;
    i19 = HEAP32[i2 + 4 >> 2] | 0;
    HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
    HEAP32[i13 >> 2] = i19;
    HEAP32[i15 >> 2] = i12;
    HEAP32[i16 >> 2] = i18;
    __ZN7WebCore10LayoutRect5uniteERKS0_(i5, i9);
   }
   i17 = HEAP32[i17 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
  }
 }
 i17 = i1;
 HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i17 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i17 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i17 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox38containingBlockLogicalHeightForContentENS_26AvailableLogicalHeightTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = HEAP32[H_BASE + 1048 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i4 + 8 >> 2] | 0;
   i7 = i2;
   i8 = i7 + ~(i7 << 15) | 0;
   i7 = (i8 >>> 10 ^ i8) * 9 & -1;
   i8 = i7 >>> 6 ^ i7;
   i7 = i8 + ~(i8 << 11) | 0;
   i8 = i7 >>> 16 ^ i7;
   i7 = i6 & i8;
   i9 = i5 + (i7 << 3) | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = (i10 | 0) == (i2 | 0);
   if (i11) {
    i12 = i9;
   } else {
    i13 = (i8 >>> 23) + ~i8 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i7;
    i16 = i10;
    while (1) {
     if ((i16 | 0) == 0) {
      break L1;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i6;
     i19 = i5 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i2 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
   if ((i12 | 0) == 0) {
    break;
   }
   L11 : do {
    if (i11) {
     i21 = i9;
     i22 = 12;
    } else {
     i16 = (i8 >>> 23) + ~i8 | 0;
     i15 = i16 << 12 ^ i16;
     i16 = i15 >>> 7 ^ i15;
     i15 = i16 << 2 ^ i16;
     i16 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i14 = i7;
     i13 = i10;
     while (1) {
      if ((i13 | 0) == 0) {
       break L11;
      }
      i20 = (i15 | 0) == 0 ? i16 : i15;
      i18 = i20 + i14 & i6;
      i17 = i5 + (i18 << 3) | 0;
      i19 = HEAP32[i17 >> 2] | 0;
      if ((i19 | 0) == (i2 | 0)) {
       i21 = i17;
       i22 = 12;
       break;
      } else {
       i15 = i20;
       i14 = i18;
       i13 = i19;
      }
     }
    }
   } while (0);
   do {
    if ((i22 | 0) == 12) {
     if ((i21 | 0) == 0) {
      break;
     }
     HEAP32[i1 >> 2] = HEAP32[i21 + 4 >> 2];
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   return;
  }
 } while (0);
 i21 = __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 904 >> 2] & 63](i1, i21 | 0, i3);
 return;
}
function __ZNK7WebCore9RenderBox50computeReplacedLogicalHeightRespectingMinMaxHeightENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9;
 i11 = i2 + 36 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = (HEAP32[i12 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i13 | 0) == 3 | (i13 | 0) == 0) {
  i14 = (HEAP32[i12 + 4 >> 2] | 0) + 36 | 0;
 } else {
  i14 = (HEAP32[i12 + 4 >> 2] | 0) + 20 | 0;
 }
 i12 = i14;
 i14 = HEAP32[i12 >> 2] | 0;
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i14;
 HEAP32[i6 + 4 >> 2] = i13;
 if ((i14 & 0 | 0) == 0 & (i13 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 }
 __ZNK7WebCore9RenderBox33computeReplacedLogicalHeightUsingENS_6LengthE(i5, i2, i7);
 if ((HEAP8[i7 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 }
 i7 = HEAP32[i11 >> 2] | 0;
 i11 = (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i11 | 0) == 3 | (i11 | 0) == 0) {
  i13 = HEAP32[i7 + 4 >> 2] | 0;
  i15 = i13 + 44 | 0;
  i16 = i13;
 } else {
  i13 = HEAP32[i7 + 4 >> 2] | 0;
  i15 = i13 + 28 | 0;
  i16 = i13;
 }
 do {
  if ((HEAP8[i15 + 5 | 0] | 0) == 15) {
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
  } else {
   if ((i11 | 0) == 3 | (i11 | 0) == 0) {
    i17 = i16 + 44 | 0;
   } else {
    i17 = i16 + 28 | 0;
   }
   i13 = i17;
   i7 = HEAP32[i13 >> 2] | 0;
   i14 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = i7;
   HEAP32[i9 + 4 >> 2] = i14;
   if ((i7 & 0 | 0) == 0 & (i14 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
   }
   __ZNK7WebCore9RenderBox33computeReplacedLogicalHeightUsingENS_6LengthE(i8, i2, i10);
   if ((HEAP8[i10 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
  }
 } while (0);
 i10 = (HEAP32[i8 >> 2] | 0) < (HEAP32[i3 >> 2] | 0) ? i8 : i3;
 HEAP32[i1 >> 2] = HEAP32[((HEAP32[i5 >> 2] | 0) < (HEAP32[i10 >> 2] | 0) ? i10 : i5) >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9RenderBox17addVisualOverflowERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i1 + 52 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 i5 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = i8;
 HEAP32[i5 + 4 >> 2] = i9;
 if (__ZNK7WebCore10LayoutRect8containsERKS0_(i4, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i2 + 8 | 0;
 if ((HEAP32[i9 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 i5 = i2 + 12 | 0;
 if ((HEAP32[i5 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 88 | 0;
 do {
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   i7 = __ZN3WTF10fastMallocEj(40) | 0;
   __ZNK7WebCore9RenderBox13clientBoxRectEv(i6, i1);
   HEAP32[i7 >> 2] = 1;
   i10 = i7 + 4 | 0;
   i11 = i6;
   HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
   i11 = i7 + 20 | 0;
   i10 = i4;
   HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i11 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i11 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i11 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   HEAP32[i7 + 36 >> 2] = 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i10 | 0) == 0) {
    break;
   }
   i7 = i10 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    HEAP32[i7 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 i6 = (HEAP32[i9 >> 2] | 0) + i8 | 0;
 i9 = i4 + 20 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i11 = i4 + 28 | 0;
 i7 = (HEAP32[i11 >> 2] | 0) + i1 | 0;
 i10 = i2 + 4 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i10 >> 2] | 0) | 0;
 i5 = i4 + 24 | 0;
 i12 = HEAP32[i5 >> 2] | 0;
 i13 = i4 + 32 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + i12 | 0;
 i14 = (i1 | 0) < (i8 | 0) ? i1 : i8;
 HEAP32[i9 >> 2] = i14;
 i9 = HEAP32[i10 >> 2] | 0;
 i10 = (i12 | 0) < (i9 | 0) ? i12 : i9;
 HEAP32[i5 >> 2] = i10;
 HEAP32[i11 >> 2] = ((i6 | 0) < (i7 | 0) ? i7 : i6) - i14;
 HEAP32[i13 >> 2] = ((i2 | 0) < (i4 | 0) ? i4 : i2) - i10;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i2 + 36 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i11 | 0) == 3 | (i11 | 0) == 0) {
  i12 = (HEAP32[i10 + 4 >> 2] | 0) + 12 | 0;
 } else {
  i12 = (HEAP32[i10 + 4 >> 2] | 0) + 4 | 0;
 }
 __ZNK7WebCore9RenderBox27availableLogicalHeightUsingERKNS_6LengthENS_26AvailableLogicalHeightTypeE(i8, i2, i12, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i7 >> 2] = i3;
 i8 = HEAP32[i9 >> 2] | 0;
 i9 = i8 + 44 | 0;
 i12 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
 if ((i12 | 0) == 3 | (i12 | 0) == 0) {
  i10 = HEAP32[i8 + 4 >> 2] | 0;
  i13 = i10 + 44 | 0;
  i14 = i10;
 } else {
  i10 = HEAP32[i8 + 4 >> 2] | 0;
  i13 = i10 + 28 | 0;
  i14 = i10;
 }
 do {
  if ((HEAP8[i13 + 5 | 0] | 0) == 15) {
   i15 = i3;
  } else {
   if ((i12 | 0) == 3 | (i12 | 0) == 0) {
    i16 = i14 + 44 | 0;
   } else {
    i16 = i14 + 28 | 0;
   }
   __ZNK7WebCore9RenderBox25computeLogicalHeightUsingERKNS_6LengthE(i5, i2, i16);
   i10 = HEAP32[i5 >> 2] | 0;
   if ((i10 | 0) == -1) {
    i15 = i3;
    break;
   }
   i11 = HEAP32[((i10 | 0) < (i3 | 0) ? i5 : i7) >> 2] | 0;
   HEAP32[i7 >> 2] = i11;
   i15 = i11;
  }
 } while (0);
 i5 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i17 = (HEAP32[i8 + 4 >> 2] | 0) + 36 | 0;
  __ZNK7WebCore9RenderBox25computeLogicalHeightUsingERKNS_6LengthE(i6, i2, i17);
  i18 = i6 | 0;
  i19 = HEAP32[i18 >> 2] | 0;
  i20 = (i15 | 0) < (i19 | 0);
  i21 = i7;
  i22 = i20 ? i6 : i21;
  i23 = i22 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  i25 = i1 | 0;
  HEAP32[i25 >> 2] = i24;
  STACKTOP = i4;
  return;
 } else {
  i17 = (HEAP32[i8 + 4 >> 2] | 0) + 20 | 0;
  __ZNK7WebCore9RenderBox25computeLogicalHeightUsingERKNS_6LengthE(i6, i2, i17);
  i18 = i6 | 0;
  i19 = HEAP32[i18 >> 2] | 0;
  i20 = (i15 | 0) < (i19 | 0);
  i21 = i7;
  i22 = i20 ? i6 : i21;
  i23 = i22 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  i25 = i1 | 0;
  HEAP32[i25 >> 2] = i24;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore9RenderBox15paintMaskImagesERKNS_9PaintInfoERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = __ZNK7WebCore11RenderLayer17hasCompositedMaskEv(HEAP32[i1 + 40 >> 2] | 0) | 0;
 }
 i7 = __ZNK7WebCore9FrameView13paintBehaviorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0;
 do {
  if (i6) {
   if ((i7 & 4 | 0) != 0) {
    i8 = 6;
    break;
   }
   i9 = 0;
   i10 = i1 + 36 | 0;
   i11 = i2 | 0;
   i8 = 11;
  } else {
   i8 = 6;
  }
 } while (0);
 if ((i8 | 0) == 6) {
  i7 = i1 + 36 | 0;
  i6 = HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0;
  i12 = HEAP32[(HEAP32[i6 + 164 >> 2] | 0) + 8 >> 2] | 0;
  i13 = i6 + 116 | 0;
  if ((i12 | 0) == 0) {
   i14 = 1;
  } else {
   i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] & 511](i12) | 0;
  }
  if ((i13 | 0) == 0) {
   i15 = i14;
  } else {
   i15 = i14 & (__ZNK7WebCore9FillLayer15imagesAreLoadedEv(i13) | 0);
  }
  i13 = i2 | 0;
  __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(HEAP32[i13 >> 2] | 0, 7, 0);
  __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(HEAP32[i13 >> 2] | 0, +1);
  if (i15) {
   i9 = 1;
   i10 = i7;
   i11 = i13;
   i8 = 11;
  }
 }
 do {
  if ((i8 | 0) == 11) {
   HEAP32[i5 >> 2] = 0;
   HEAP8[i5 + 4 | 0] = 0;
   __ZN7WebCore9RenderBox15paintFillLayersERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceENS_17CompositeOperatorEPNS_13RenderElementE(i1, i2, i5, (HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0) + 116 | 0, i3, 0, 2, 0);
   i13 = HEAP32[i10 >> 2] | 0;
   __ZN7WebCore20RenderBoxModelObject19paintNinePieceImageEPNS_15GraphicsContextERKNS_10LayoutRectEPKNS_11RenderStyleERKNS_14NinePieceImageENS_17CompositeOperatorE(i1 | 0, HEAP32[i11 >> 2] | 0, i3, i13, (HEAP32[i13 + 20 >> 2] | 0) + 164 | 0, 2) | 0;
   if (i9) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(HEAP32[i2 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[H_BASE + 1056 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   i6 = i2;
   i7 = i6 + ~(i6 << 15) | 0;
   i6 = (i7 >>> 10 ^ i7) * 9 & -1;
   i7 = i6 >>> 6 ^ i6;
   i6 = i7 + ~(i7 << 11) | 0;
   i7 = i6 >>> 16 ^ i6;
   i6 = i5 & i7;
   i8 = i4 + (i6 << 3) | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = (i9 | 0) == (i2 | 0);
   if (i10) {
    i11 = i8;
   } else {
    i12 = (i7 >>> 23) + ~i7 | 0;
    i13 = i12 << 12 ^ i12;
    i12 = i13 >>> 7 ^ i13;
    i13 = i12 << 2 ^ i12;
    i12 = i13 >>> 20 ^ i13 | 1;
    i13 = 0;
    i14 = i6;
    i15 = i9;
    while (1) {
     if ((i15 | 0) == 0) {
      break L1;
     }
     i16 = (i13 | 0) == 0 ? i12 : i13;
     i17 = i16 + i14 & i5;
     i18 = i4 + (i17 << 3) | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == (i2 | 0)) {
      i11 = i18;
      break;
     } else {
      i13 = i16;
      i14 = i17;
      i15 = i19;
     }
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   L11 : do {
    if (i10) {
     i20 = i8;
     i21 = 12;
    } else {
     i15 = (i7 >>> 23) + ~i7 | 0;
     i14 = i15 << 12 ^ i15;
     i15 = i14 >>> 7 ^ i14;
     i14 = i15 << 2 ^ i15;
     i15 = i14 >>> 20 ^ i14 | 1;
     i14 = 0;
     i13 = i6;
     i12 = i9;
     while (1) {
      if ((i12 | 0) == 0) {
       break L11;
      }
      i19 = (i14 | 0) == 0 ? i15 : i14;
      i17 = i19 + i13 & i5;
      i16 = i4 + (i17 << 3) | 0;
      i18 = HEAP32[i16 >> 2] | 0;
      if ((i18 | 0) == (i2 | 0)) {
       i20 = i16;
       i21 = 12;
       break;
      } else {
       i14 = i19;
       i13 = i17;
       i12 = i18;
      }
     }
    }
   } while (0);
   do {
    if ((i21 | 0) == 12) {
     if ((i20 | 0) == 0) {
      break;
     }
     HEAP32[i1 >> 2] = HEAP32[i20 + 4 >> 2];
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   return;
  }
 } while (0);
 __ZNK7WebCore11RenderBlock21availableLogicalWidthEv(i1, __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0);
 return;
}
function __ZNK7WebCore9RenderBox13reflectionBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 i12 = HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 104 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i2 + 52 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = HEAP32[i13 + 4 >> 2] | 0;
 i13 = i1;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i13 + 4 >> 2] = 0;
 i13 = i1 + 8 | 0;
 HEAP32[i13 >> 2] = i14;
 HEAP32[i13 + 4 >> 2] = i15;
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 if ((i13 | 0) == 3) {
  i16 = i14;
  HEAP32[i10 >> 2] = i16;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i11, i12 + 8 | 0, i10, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  HEAP32[i1 >> 2] = (HEAP32[i11 >> 2] | 0) + i16;
  STACKTOP = i3;
  return;
 } else if ((i13 | 0) == 1) {
  i16 = i15;
  HEAP32[i6 >> 2] = i16;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i7, i12 + 8 | 0, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  HEAP32[i1 + 4 >> 2] = -((HEAP32[i7 >> 2] | 0) + i16 | 0);
  STACKTOP = i3;
  return;
 } else if ((i13 | 0) == 2) {
  i16 = i14;
  HEAP32[i8 >> 2] = i16;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i9, i12 + 8 | 0, i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  HEAP32[i1 >> 2] = -((HEAP32[i9 >> 2] | 0) + i16 | 0);
  STACKTOP = i3;
  return;
 } else if ((i13 | 0) == 0) {
  i13 = i15;
  HEAP32[i4 >> 2] = i13;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i5, i12 + 8 | 0, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  HEAP32[i1 + 4 >> 2] = (HEAP32[i5 >> 2] | 0) + i13;
  STACKTOP = i3;
  return;
 } else {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore9RenderBox20addOverflowFromChildEPS0_RKNS_10LayoutSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 248 >> 2] & 511](i2 | 0) | 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 + 20 | 0;
 do {
  if ((HEAP32[i7 >> 2] & 805306368 | 0) != 0) {
   i8 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN7WebCore16RenderFlowThread27addRegionsOverflowFromChildEPKNS_9RenderBoxES3_RKNS_10LayoutSizeE(i8, i1, i2, i3);
  }
 } while (0);
 i8 = i1 + 36 | 0;
 __ZNK7WebCore9RenderBox32layoutOverflowRectForPropagationEPNS_11RenderStyleE(i5, i2, HEAP32[i8 >> 2] | 0);
 i9 = i3 | 0;
 i10 = i3 + 4 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + (HEAP32[i9 >> 2] | 0);
 i11 = i5 + 4 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + i3;
 __ZN7WebCore9RenderBox17addLayoutOverflowERKNS_10LayoutRectE(i1, i5);
 if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i2 | 0) | 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 >> 2] & 65536 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[i8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 824 >> 2] & 127](i6, i2);
 i8 = (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3;
 i7 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i8 | 0) != (i7 | 0)) {
   if ((i7 | 0) == 1 | (i8 | 0) == 1) {
    i5 = i6 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i2 + 52 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) - (HEAP32[i6 + 8 >> 2] | 0);
    break;
   }
   if (!((i7 | 0) == 3 | (i8 | 0) == 3)) {
    break;
   }
   i5 = i6 + 4 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i2 + 56 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) - (HEAP32[i6 + 12 >> 2] | 0);
  }
 } while (0);
 i2 = HEAP32[i10 >> 2] | 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + (HEAP32[i9 >> 2] | 0);
 i9 = i6 + 4 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i2;
 __ZN7WebCore9RenderBox17addVisualOverflowERKNS_10LayoutRectE(i1, i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9RenderBox45removeFloatingOrPositionedChildFromBlockListsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  return;
 }
 i2 = i1 + 20 | 0;
 L4 : do {
  if ((HEAP32[i2 >> 2] & 64 | 0) != 0) {
   i3 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   } else {
    i4 = i3;
   }
   while (1) {
    i5 = HEAP32[i4 + 20 >> 2] | 0;
    if ((i5 & 768 | 0) != 256) {
     if ((HEAP32[i4 + 24 >> 2] & 32 | 0) != 0) {
      break;
     }
    }
    i3 = HEAP32[i4 + 8 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break L4;
    } else {
     i4 = i3;
    }
   }
   if ((i4 | 0) == 0) {
    break;
   } else {
    i6 = i4;
    i7 = 0;
    i8 = i5;
   }
   L12 : while (1) {
    i3 = i6;
    if ((i8 & 768 | 0) == 768) {
     i9 = i7;
     break;
    }
    if ((i7 | 0) == 0) {
     i10 = 11;
    } else {
     if (__ZNK7WebCore15RenderBlockFlow13containsFloatERNS_9RenderBoxE(i3, i1) | 0) {
      i10 = 11;
     } else {
      i11 = i7;
     }
    }
    if ((i10 | 0) == 11) {
     i10 = 0;
     i11 = i3;
    }
    i3 = HEAP32[i6 + 8 >> 2] | 0;
    if ((i3 | 0) == 0) {
     i9 = i11;
     break;
    } else {
     i12 = i3;
    }
    while (1) {
     i13 = HEAP32[i12 + 20 >> 2] | 0;
     if ((i13 & 768 | 0) != 256) {
      if ((HEAP32[i12 + 24 >> 2] & 32 | 0) != 0) {
       break;
      }
     }
     i3 = HEAP32[i12 + 8 >> 2] | 0;
     if ((i3 | 0) == 0) {
      i9 = i11;
      break L12;
     } else {
      i12 = i3;
     }
    }
    if ((i12 | 0) == 0) {
     i9 = i11;
     break;
    } else {
     i6 = i12;
     i7 = i11;
     i8 = i13;
    }
   }
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN7WebCore15RenderBlockFlow31markSiblingsWithFloatsForLayoutEPNS_9RenderBoxE(i9, i1);
   __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i9, i1, 0);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] & 25165824 | 0) != 16777216) {
  return;
 }
 __ZN7WebCore11RenderBlock22removePositionedObjectERNS_9RenderBoxE(i1);
 return;
}
function __ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i1 + 20 | 0;
   i8 = (HEAP32[i7 >> 2] & 8192 | 0) != 0;
   i9 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   i10 = (i9 | 0) == 1 | (i9 | 0) == 3;
   do {
    if ((i2 | 0) == 2) {
     if (i8) {
      i11 = i10 ? 3 : 2;
      break;
     } else {
      i11 = i10 & 1;
      break;
     }
    } else if ((i2 | 0) == 0) {
     if (i8) {
      i11 = i10 & 1;
      break;
     } else {
      i11 = i10 ? 3 : 2;
      break;
     }
    } else if ((i2 | 0) == 1) {
     if (i8) {
      i11 = i10 & 1 ^ 1;
      break;
     } else {
      i11 = i10 ? 2 : 3;
      break;
     }
    } else if ((i2 | 0) == 3) {
     if (i8) {
      i11 = i10 ? 2 : 3;
      break;
     } else {
      i11 = i10 & 1 ^ 1;
      break;
     }
    } else {
     i11 = 0;
    }
   } while (0);
   if (!(__ZN7WebCore11RenderLayer6scrollENS_15ScrollDirectionENS_17ScrollGranularityEf(i6, i11, i3, d4) | 0)) {
    break;
   }
   if ((i5 | 0) == 0) {
    i12 = 1;
    return i12 | 0;
   }
   if ((HEAP32[i7 >> 2] & 128 | 0) == 0) {
    i13 = HEAP32[i1 + 4 >> 2] | 0;
   } else {
    i13 = 0;
   }
   HEAP32[i5 >> 2] = i13;
   i12 = 1;
   return i12 | 0;
  }
 } while (0);
 do {
  if ((i5 | 0) != 0) {
   i13 = HEAP32[i5 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
    i14 = HEAP32[i1 + 4 >> 2] | 0;
   } else {
    i14 = 0;
   }
   if ((i13 | 0) == (i14 | 0)) {
    i12 = 1;
   } else {
    break;
   }
   return i12 | 0;
  }
 } while (0);
 i14 = __ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0;
 if ((i14 | 0) == 0) {
  i12 = 0;
  return i12 | 0;
 }
 if ((HEAP32[i14 + 20 >> 2] & 768 | 0) == 768) {
  i12 = 0;
  return i12 | 0;
 }
 i12 = FUNCTION_TABLE_iiiifi[HEAP32[(HEAP32[i14 >> 2] | 0) + 916 >> 2] & 7](i14 | 0, i2, i3, d4, i5) | 0;
 return i12 | 0;
}
function __ZNK7WebCore11RenderBlock26startOffsetForLineInRegionENS_10LayoutUnitEbPNS_12RenderRegionES1_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i8 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i8 >> 2];
 i8 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i7 + 72 | 0;
 i18 = i7 + 80 | 0;
 i19 = HEAP32[i2 + 36 >> 2] | 0;
 if ((HEAP32[i19 + 40 >> 2] & 1073741824 | 0) != 0) {
  i20 = HEAP32[i3 >> 2] | 0;
  i21 = HEAP32[i6 >> 2] | 0;
  __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i12, i2, i5);
  i22 = HEAP32[i12 >> 2] | 0;
  i12 = HEAP32[(HEAP32[i2 >> 2] | 0) + 1072 >> 2] | 0;
  HEAP32[i9 >> 2] = i20;
  HEAP32[i10 >> 2] = i22;
  HEAP32[i11 >> 2] = i21;
  FUNCTION_TABLE_viiiii[i12 & 15](i8, i2, i9, i10, i11);
  __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i1, i2, i8, i4);
  STACKTOP = i7;
  return;
 }
 i8 = (HEAP32[i19 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  i23 = i2 + 52 | 0;
 } else {
  i23 = i2 + 56 | 0;
 }
 i8 = HEAP32[i23 >> 2] | 0;
 i23 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i17, i2, i5);
 i5 = HEAP32[i17 >> 2] | 0;
 i17 = HEAP32[(HEAP32[i2 >> 2] | 0) + 1068 >> 2] | 0;
 HEAP32[i14 >> 2] = i23;
 HEAP32[i15 >> 2] = i5;
 HEAP32[i16 >> 2] = i3;
 FUNCTION_TABLE_viiiii[i17 & 15](i13, i2, i14, i15, i16);
 __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i18, i2, i13, i4);
 HEAP32[i1 >> 2] = i8 - (HEAP32[i18 >> 2] | 0);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore11RenderBlock24endOffsetForLineInRegionENS_10LayoutUnitEbPNS_12RenderRegionES1_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i8 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i8 >> 2];
 i8 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i7 + 72 | 0;
 i18 = i7 + 80 | 0;
 i19 = HEAP32[i2 + 36 >> 2] | 0;
 if ((HEAP32[i19 + 40 >> 2] & 1073741824 | 0) == 0) {
  i20 = HEAP32[i3 >> 2] | 0;
  i21 = HEAP32[i6 >> 2] | 0;
  __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i12, i2, i5);
  i22 = HEAP32[i12 >> 2] | 0;
  i12 = HEAP32[(HEAP32[i2 >> 2] | 0) + 1072 >> 2] | 0;
  HEAP32[i9 >> 2] = i20;
  HEAP32[i10 >> 2] = i22;
  HEAP32[i11 >> 2] = i21;
  FUNCTION_TABLE_viiiii[i12 & 15](i8, i2, i9, i10, i11);
  __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i1, i2, i8, i4);
  STACKTOP = i7;
  return;
 }
 i8 = (HEAP32[i19 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  i23 = i2 + 52 | 0;
 } else {
  i23 = i2 + 56 | 0;
 }
 i8 = HEAP32[i23 >> 2] | 0;
 i23 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i17, i2, i5);
 i5 = HEAP32[i17 >> 2] | 0;
 i17 = HEAP32[(HEAP32[i2 >> 2] | 0) + 1068 >> 2] | 0;
 HEAP32[i14 >> 2] = i23;
 HEAP32[i15 >> 2] = i5;
 HEAP32[i16 >> 2] = i3;
 FUNCTION_TABLE_viiiii[i17 & 15](i13, i2, i14, i15, i16);
 __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i18, i2, i13, i4);
 HEAP32[i1 >> 2] = i8 - (HEAP32[i18 >> 2] | 0);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore9RenderBox21clientBoxRectInRegionEPNS_12RenderRegionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 if ((i3 | 0) == 0) {
  __ZNK7WebCore9RenderBox13clientBoxRectEv(i1, i2);
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i5, i2, i3, 0);
 i3 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 i8 = i2 | 0;
 i9 = i2;
 i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 511](i8) | 0;
 i11 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 736 >> 2] & 511](i8) | 0) + i7 | 0;
 HEAP32[i6 >> 2] = i10 + i3;
 HEAP32[i6 + 4 >> 2] = i11;
 i11 = i5 + 8 | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 i3 = HEAP32[i11 + 4 >> 2] | 0;
 i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 511](i8) | 0;
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 748 >> 2] & 511](i8) | 0;
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0;
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 736 >> 2] & 511](i8) | 0;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 740 >> 2] & 511](i8) | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 65536 | 0) == 0) {
   i15 = 0;
  } else {
   i8 = i2 + 40 | 0;
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i8 >> 2] | 0) | 0) {
    i15 = 0;
    break;
   }
   if ((((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
    i15 = 0;
    break;
   }
   i15 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i8 >> 2] | 0, 0) | 0;
  }
 } while (0);
 HEAP32[i11 >> 2] = i6 - i10 - i7 - i12;
 HEAP32[i11 + 4 >> 2] = i3 - i13 - i14 - i15;
 i15 = i1;
 i1 = i5;
 HEAP32[i15 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i15 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i15 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 3) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS1_10LayoutUnitEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCoreL33computeLogicalTopPositionedOffsetERNS_10LayoutUnitEPKNS_9RenderBoxES0_PKNS_20RenderBoxModelObjectES0_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i6 | 0) == 3 | (i6 | 0) == 1) {
   if (!((HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i4 + 20 >> 2] & 8192 | 0) != 0)) {
    i7 = 4;
    break;
   }
   i8 = i4 + 36 | 0;
   i7 = 6;
  } else {
   i7 = 4;
  }
 } while (0);
 do {
  if ((i7 | 0) == 4) {
   i9 = i4 + 36 | 0;
   i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0;
   i11 = i10 >>> 13 & 3;
   if (!(((i6 | 0) == 1 | (i6 | 0) == 3) ^ ((i11 | 0) == 1 | (i11 | 0) == 3))) {
    i12 = i10;
    break;
   }
   if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i4 + 20 >> 2] & 8192 | 0) != 0) {
    i12 = i10;
   } else {
    i8 = i9;
    i7 = 6;
   }
  }
 } while (0);
 if ((i7 | 0) == 6) {
  i7 = i1 | 0;
  HEAP32[i7 >> 2] = i5 - i3 - (HEAP32[i7 >> 2] | 0);
  i12 = HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0;
 }
 i8 = i12 >>> 13 & 3;
 do {
  if ((i8 | 0) == 3 | (i8 | 0) == 1) {
   i12 = HEAP32[i2 + 20 >> 2] | 0;
   i7 = (i12 & 8192 | 0) != 0;
   if (i7 ^ (HEAP32[i4 + 20 >> 2] & 8192 | 0) != 0) {
    i13 = i12;
    break;
   }
   i12 = HEAP32[i4 >> 2] | 0;
   if (i7) {
    i7 = FUNCTION_TABLE_ii[HEAP32[i12 + 740 >> 2] & 511](i4) | 0;
    i3 = i1 | 0;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i7;
    return;
   } else {
    i7 = FUNCTION_TABLE_ii[HEAP32[i12 + 748 >> 2] & 511](i4) | 0;
    i12 = i1 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + i7;
    return;
   }
  } else {
   i13 = HEAP32[i2 + 20 >> 2] | 0;
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i13 & 8192 | 0) == 0) {
  i13 = FUNCTION_TABLE_ii[HEAP32[i2 + 744 >> 2] & 511](i4) | 0;
  i8 = i1 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + i13;
  return;
 } else {
  i13 = FUNCTION_TABLE_ii[HEAP32[i2 + 736 >> 2] & 511](i4) | 0;
  i4 = i1 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + i13;
  return;
 }
}
function __ZNK7WebCore9RenderBox19absoluteContentQuadEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = i2 | 0;
 i13 = i2;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 744 >> 2] & 511](i12) | 0;
 i15 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 127](i6, i12);
 i16 = (HEAP32[i6 >> 2] | 0) + i14 | 0;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 736 >> 2] & 511](i12) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 704 >> 2] & 127](i7, i12);
 i6 = (HEAP32[i7 >> 2] | 0) + i14 | 0;
 i14 = HEAP32[i2 + 52 >> 2] | 0;
 i7 = i14 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 744 >> 2] & 511](i12) | 0) | 0;
 i14 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 748 >> 2] & 511](i12) | 0) | 0;
 i13 = i14 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 127](i4, i12);
 i14 = i13 - (HEAP32[i4 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 716 >> 2] & 127](i5, i12);
 i12 = i14 - (HEAP32[i5 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox13contentHeightEv(i8, i2);
 d17 = +(i16 | 0);
 d18 = +(i6 | 0);
 d19 = +(HEAP32[i8 >> 2] | 0);
 d20 = +d17;
 d21 = +d18;
 HEAPF32[i10 >> 2] = d20;
 HEAPF32[i10 + 4 >> 2] = d21;
 d21 = d17 + +(i12 | 0);
 HEAPF32[i9 + 8 >> 2] = d21;
 HEAPF32[i11 + 12 >> 2] = d18;
 d20 = d18 + d19;
 HEAPF32[i9 + 16 >> 2] = d21;
 HEAPF32[i11 + 20 >> 2] = d20;
 HEAPF32[i9 + 24 >> 2] = d17;
 HEAPF32[i11 + 28 >> 2] = d20;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i1, i2 | 0, i11, 0, 0, 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox11scrollWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) != 0) {
  i5 = __ZNK7WebCore11RenderLayer11scrollWidthEv(HEAP32[i1 + 40 >> 2] | 0) | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i6 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0;
 i7 = HEAP32[i1 + 52 >> 2] | 0;
 i8 = i1 | 0;
 i9 = i1;
 i10 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 511](i8) | 0) | 0;
 i7 = i10 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 748 >> 2] & 511](i8) | 0) | 0;
 i10 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 908 >> 2] & 511](i1) | 0) | 0;
 i7 = HEAP32[i1 + 88 >> 2] | 0;
 i11 = (i7 | 0) == 0;
 if (i6) {
  if (i11) {
   __ZNK7WebCore9RenderBox13clientBoxRectEv(i4, i1);
  } else {
   i6 = i4;
   i12 = i7 + 4 | 0;
   HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i6 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i6 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i6 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
  }
  i12 = HEAP32[i4 >> 2] | 0;
  i4 = i12 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 511](i8) | 0) | 0;
  i5 = i10 - ((i4 | 0) < 0 ? i4 : 0) | 0;
  STACKTOP = i2;
  return i5 | 0;
 } else {
  if (i11) {
   __ZNK7WebCore9RenderBox13clientBoxRectEv(i3, i1);
  } else {
   i1 = i3;
   i11 = i7 + 4 | 0;
   HEAP32[i1 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i1 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i1 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i1 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  }
  i11 = (HEAP32[i3 + 8 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
  i3 = i11 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 511](i8) | 0) | 0;
  FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 511](i8) | 0;
  i5 = (i10 | 0) < (i3 | 0) ? i3 : i10;
  STACKTOP = i2;
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore9RenderBox18absoluteContentBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 56 | 0;
 i11 = i3 + 64 | 0;
 i12 = i2 | 0;
 i13 = i2;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 744 >> 2] & 511](i12) | 0;
 i15 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 127](i6, i12);
 i16 = (HEAP32[i6 >> 2] | 0) + i14 | 0;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 736 >> 2] & 511](i12) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 704 >> 2] & 127](i7, i12);
 i6 = (HEAP32[i7 >> 2] | 0) + i14 | 0;
 i14 = HEAP32[i2 + 52 >> 2] | 0;
 i7 = i14 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 744 >> 2] & 511](i12) | 0) | 0;
 i14 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 748 >> 2] & 511](i12) | 0) | 0;
 i13 = i14 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 127](i4, i12);
 i14 = i13 - (HEAP32[i4 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 716 >> 2] & 127](i5, i12);
 i12 = i14 - (HEAP32[i5 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox13contentHeightEv(i8, i2);
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i9 >> 2] = i16;
 HEAP32[i9 + 4 >> 2] = i6;
 HEAP32[i9 + 8 >> 2] = i12;
 HEAP32[i9 + 12 >> 2] = i5;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i1, i9);
 HEAPF32[i11 >> 2] = +0;
 HEAPF32[i11 + 4 >> 2] = +0;
 __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i10, i2 | 0, i11, 0);
 i11 = ~~+HEAPF32[i10 + 4 >> 2];
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + ~~+HEAPF32[i10 >> 2];
 i10 = i1 + 4 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i11;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox25computeLogicalHeightUsingERKNS_6LengthE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = HEAP8[i3 + 5 | 0] | 0;
 do {
  if ((i8 << 24 >> 24 | 0) == 10 | (i8 << 24 >> 24 | 0) == 2) {
   __ZNK7WebCore9RenderBox30computePercentageLogicalHeightERKNS_6LengthE(i1, i2, i3);
  } else if ((i8 << 24 >> 24 | 0) == 3) {
   if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
    d9 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d9 = +HEAPF32[i3 >> 2];
   }
   do {
    if (d9 < +2147483647) {
     if (d9 <= +-2147483648) {
      i10 = -2147483648;
      break;
     }
     i10 = ~~d9;
    } else {
     i10 = 2147483647;
    }
   } while (0);
   HEAP32[i1 >> 2] = i10;
  } else {
   if ((i8 - 11 & 255) >>> 0 < 4 >>> 0) {
    HEAP32[i7 >> 2] = 0;
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i3, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    break;
   } else {
    HEAP32[i1 >> 2] = -1;
    break;
   }
  }
 } while (0);
 i7 = i1 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == -1) {
  STACKTOP = i4;
  return;
 }
 i3 = i2 | 0;
 i8 = i2;
 i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 511](i3) | 0;
 i11 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 720 >> 2] & 127](i6, i3);
 i12 = (HEAP32[i6 >> 2] | 0) + i10 | 0;
 i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 756 >> 2] & 511](i3) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 724 >> 2] & 127](i5, i3);
 i3 = i12 + i10 + (HEAP32[i5 >> 2] | 0) | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
  i13 = i1 + i3 | 0;
 } else {
  i13 = (i1 | 0) < (i3 | 0) ? i3 : i1;
 }
 HEAP32[i7 >> 2] = i13;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox27computeContentLogicalHeightERKNS_6LengthE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 __ZNK7WebCore9RenderBox44computeContentAndScrollbarLogicalHeightUsingERKNS_6LengthE(i7, i2, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == -1) {
  HEAP32[i1 >> 2] = -1;
  STACKTOP = i4;
  return;
 }
 i7 = i2 + 36 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[(HEAP32[i8 + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
  i9 = i3;
  i10 = i8;
 } else {
  i8 = i2 | 0;
  i11 = i2;
  i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 752 >> 2] & 511](i8) | 0;
  i13 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 720 >> 2] & 127](i6, i8);
  i14 = HEAP32[i6 >> 2] | 0;
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 756 >> 2] & 511](i8) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 724 >> 2] & 127](i5, i8);
  i9 = i3 - (i14 + i12 + i6 + (HEAP32[i5 >> 2] | 0)) | 0;
  i10 = HEAP32[i7 >> 2] | 0;
 }
 i5 = (i9 | 0) > 0 ? i9 : 0;
 i9 = (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i9 | 0) == 3 | (i9 | 0) == 0) {
   if ((HEAP32[i2 + 20 >> 2] & 65536 | 0) == 0) {
    i15 = 0;
    break;
   }
   i10 = i2 + 40 | 0;
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i10 >> 2] | 0) | 0) {
    i15 = 0;
    break;
   }
   if ((((HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
    i15 = 0;
    break;
   }
   i15 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i10 >> 2] | 0, 0) | 0;
  } else {
   i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0;
  }
 } while (0);
 i2 = i5 - i15 | 0;
 HEAP32[i1 >> 2] = (i2 | 0) > 0 ? i2 : 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9RenderBox17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = i1 + 52 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 if ((i1 | 0) < 1 | (i8 | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 i7 = i5 | 0;
 i9 = i3;
 i3 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i7 + 4 >> 2] = i3;
 i3 = i5 + 8 | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = i8;
 i8 = i2 + 8 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  i1 = (HEAP32[i2 >> 2] | 0) + (i3 << 4) | 0;
  i7 = i5;
  HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i3 + 1 | 0;
 i1 = i2 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 do {
  if (i9 >>> 0 > i6 >>> 0) {
   i10 = 6;
  } else {
   if ((i9 + (i3 << 4) | 0) >>> 0 <= i6 >>> 0) {
    i10 = 6;
    break;
   }
   __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i7);
   i11 = HEAP32[i1 >> 2] | 0;
   i12 = i11 + (i5 - i9 >> 4 << 4) | 0;
   i13 = i11;
  }
 } while (0);
 if ((i10 | 0) == 6) {
  __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i7);
  i12 = i6;
  i13 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i13 + (HEAP32[i8 >> 2] << 4) | 0;
 i13 = i12;
 HEAP32[i1 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = i3;
 i3 = HEAP32[i8 + 4 >> 2] | 0;
 i9 = i1 + 52 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i6 + 4 >> 2] = i3;
 i3 = i5 + 8 | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = i10;
 i10 = i2 + 8 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  i1 = (HEAP32[i2 >> 2] | 0) + (i3 << 4) | 0;
  i6 = i5;
  HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11 + 1 | 0;
  HEAP32[i10 >> 2] = i12;
  STACKTOP = i4;
  return;
 }
 i6 = i3 + 1 | 0;
 i1 = i2 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i7 >>> 0) {
   i13 = 5;
  } else {
   if ((i8 + (i3 << 4) | 0) >>> 0 <= i7 >>> 0) {
    i13 = 5;
    break;
   }
   __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i6);
   i9 = HEAP32[i1 >> 2] | 0;
   i14 = i9 + (i5 - i8 >> 4 << 4) | 0;
   i15 = i9;
  }
 } while (0);
 if ((i13 | 0) == 5) {
  __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i6);
  i14 = i7;
  i15 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i15 + (HEAP32[i10 >> 2] << 4) | 0;
 i15 = i14;
 HEAP32[i1 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i11 + 1 | 0;
 HEAP32[i10 >> 2] = i12;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9RenderBox6layoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 28 >> 2] | 0;
 i6 = i1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i6);
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 i8 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i9 = HEAP32[i1 + 48 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 + 44 >> 2];
 HEAP32[i4 + 4 >> 2] = i9;
 HEAP32[i3 >> 2] = 0;
 i9 = __ZN7WebCore10RenderView15pushLayoutStateERNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE(i7, i1, i4, i3, 0, 0) | 0;
 if (((i8 | 0) == 1 | (i8 | 0) == 3) & i9) {
  i3 = i7 + 196 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  i10 = i5;
 } else {
  i10 = i5;
 }
 while (1) {
  if ((HEAP32[i10 + 20 >> 2] & 31 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 652 >> 2] & 31](i10);
  }
  i10 = HEAP32[i10 + 16 >> 2] | 0;
  if ((i10 | 0) == 0) {
   break;
  }
 }
 do {
  if (i9) {
   i10 = i7 + 192 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) + 12 | 0;
   i3 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i5 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i3;
   if ((i5 | 0) != 0) {
    __ZN7WebCore11LayoutStateD1Ev(i5);
    __ZdlPv(i5 | 0);
   }
   __ZN7WebCore10RenderView34popLayoutStateForCurrentFlowThreadEv(i7);
   if (!((i8 | 0) == 3 | (i8 | 0) == 1)) {
    break;
   }
   i5 = i7 + 196 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1;
  }
 } while (0);
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if (i1 >>> 0 > 1073741823 >>> 0) {
  HEAP32[i7 >> 2] = i1 & 1073741823 | 1073741824;
 }
 __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i6);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore9RenderBox28calculateAutoscrollDirectionERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 __ZNK7WebCore12RenderObject23absoluteBoundingBoxRectEb(i6, i2 | 0, 1);
 i8 = i2 + 4 | 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 i9 = i5 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 63](i5, i2 | 0, 0);
 i2 = HEAP32[i9 + 4 >> 2] | 0;
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + (HEAP32[i9 >> 2] | 0);
 i9 = i6 + 4 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i2;
 __ZNK7WebCore10ScrollView16contentsToWindowERKNS_7IntRectE(i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i6);
 i6 = i3;
 i8 = HEAP32[i6 >> 2] | 0;
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) < (i6 + 20 | 0)) {
  i10 = i8 - 20 | 0;
 } else {
  i10 = (i8 | 0) > (i6 - 20 + (HEAP32[i7 + 8 >> 2] | 0) | 0) ? i8 + 20 | 0 : i8;
 }
 i6 = HEAP32[i7 + 4 >> 2] | 0;
 if ((i2 | 0) < (i6 + 20 | 0)) {
  i11 = i2 - 20 | 0;
  i12 = i10 - i8 | 0;
  i13 = i3 + 4 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i11 - i14 | 0;
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = i12;
  i17 = i1 + 4 | 0;
  HEAP32[i17 >> 2] = i15;
  STACKTOP = i4;
  return;
 } else {
  i11 = (i2 | 0) > (i6 - 20 + (HEAP32[i7 + 12 >> 2] | 0) | 0) ? i2 + 20 | 0 : i2;
  i12 = i10 - i8 | 0;
  i13 = i3 + 4 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i11 - i14 | 0;
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = i12;
  i17 = i1 + 4 | 0;
  HEAP32[i17 >> 2] = i15;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore9RenderBox14paddingBoxRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i2 | 0;
 i12 = i2;
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 744 >> 2] & 511](i11) | 0;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 736 >> 2] & 511](i11) | 0;
 i15 = HEAP32[i2 + 52 >> 2] | 0;
 i16 = i15 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 744 >> 2] & 511](i11) | 0) | 0;
 i15 = i16 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 748 >> 2] & 511](i11) | 0) | 0;
 i12 = i15 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0) | 0;
 i15 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 127](i4, i11);
 i16 = i12 - (HEAP32[i4 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 716 >> 2] & 127](i5, i11);
 i4 = i16 - (HEAP32[i5 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 127](i6, i11);
 i5 = i4 + (HEAP32[i6 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 716 >> 2] & 127](i7, i11);
 i6 = i5 + (HEAP32[i7 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox13contentHeightEv(i8, i2);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 704 >> 2] & 127](i9, i11);
 i2 = (HEAP32[i9 >> 2] | 0) + (HEAP32[i8 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 708 >> 2] & 127](i10, i11);
 i11 = i2 + (HEAP32[i10 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = i13;
 HEAP32[i1 + 4 >> 2] = i14;
 HEAP32[i1 + 8 >> 2] = i6;
 HEAP32[i1 + 12 >> 2] = i11;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox29overflowRectForPaintRejectionEPNS_12RenderRegionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 824 >> 2] & 127](i1, i2);
 do {
  if ((i3 | 0) != 0) {
   i9 = HEAP32[i3 + 116 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   HEAP32[i5 >> 2] = 0;
   HEAP32[i6 >> 2] = 0;
   __ZNK7WebCore16RenderFlowThread20getRegionRangeForBoxEPKNS_9RenderBoxERPNS_12RenderRegionES6_(i9, i2, i5, i6);
   if ((HEAP32[i5 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderRegion24visualOverflowRectForBoxEPKNS_9RenderBoxE(i7, i3, i2);
   __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i7);
  }
 } while (0);
 i7 = i2 + 88 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] & 98304 | 0) != 98304) {
  STACKTOP = i4;
  return;
 }
 i3 = i2 + 40 | 0;
 if (!(__ZNK7WebCore11RenderLayer23usesCompositedScrollingEv(HEAP32[i3 >> 2] | 0) | 0)) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZNK7WebCore9RenderBox13clientBoxRectEv(i8, i2);
 } else {
  i2 = i8;
  i7 = i6 + 4 | 0;
  HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 }
 __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i8);
 i8 = (HEAP32[i3 >> 2] | 0) + 112 | 0;
 i3 = HEAP32[i8 + 4 >> 2] | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0);
 i8 = i1 + 4 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) - i3;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9RenderBox18findAutoscrollableEPNS_12RenderObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i1 | 0) == 0) {
  return 0;
 } else {
  i2 = i1;
 }
 while (1) {
  i3 = i2 + 20 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  if ((i1 & 512 | 0) == 0) {
   i4 = i1;
  } else {
   i5 = i2;
   if ((i1 & 768 | 0) == 768) {
    if (__ZN7WebCore9FrameView12isScrollableEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0) {
     i6 = 18;
     break;
    }
   } else {
    if (__ZNK7WebCore9RenderBox33canBeScrolledAndHasScrollableAreaEv(i5) | 0) {
     i6 = 17;
     break;
    }
   }
   i4 = HEAP32[i3 >> 2] | 0;
  }
  do {
   if ((i4 & 768 | 0) == 768) {
    i1 = i2 + 4 | 0;
    if ((__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
     i6 = 13;
     break;
    }
    i7 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
    i1 = i7 + 32 | 0;
    if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
     i8 = i1 | 0;
    } else {
     i8 = HEAP32[i1 >> 2] | 0;
    }
    i9 = HEAP32[i8 >> 2] | 0;
   } else {
    i6 = 13;
   }
  } while (0);
  if ((i6 | 0) == 13) {
   i6 = 0;
   i9 = HEAP32[i2 + 8 >> 2] | 0;
  }
  if ((i9 | 0) == 0) {
   i6 = 20;
   break;
  } else {
   i2 = i9;
  }
 }
 if ((i6 | 0) == 18) {
  i10 = HEAP32[i3 >> 2] | 0;
  i11 = i10 & 512;
  i12 = (i11 | 0) != 0;
  i13 = i12 ? i5 : 0;
  return i13 | 0;
 } else if ((i6 | 0) == 20) {
  return 0;
 } else if ((i6 | 0) == 17) {
  i10 = HEAP32[i3 >> 2] | 0;
  i11 = i10 & 512;
  i12 = (i11 | 0) != 0;
  i13 = i12 ? i5 : 0;
  return i13 | 0;
 }
 return 0;
}
function __ZNK7WebCore9RenderBox13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 32 | 0;
 i7 = i6 | 0;
 i8 = i6;
 d9 = +(HEAP32[i1 + 52 >> 2] | 0);
 d10 = +(HEAP32[i1 + 56 >> 2] | 0);
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAPF32[i6 + 8 >> 2] = d9;
 HEAPF32[i8 + 12 >> 2] = +0;
 HEAPF32[i6 + 16 >> 2] = d9;
 HEAPF32[i8 + 20 >> 2] = d10;
 HEAPF32[i6 + 24 >> 2] = +0;
 HEAPF32[i8 + 28 >> 2] = d10;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i5, i1 | 0, i8, 0, 0, i3);
 i3 = i2 + 8 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if ((i8 | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  _memcpy((HEAP32[i2 >> 2] | 0) + (i8 << 5) | 0, i5 | 0, 32) | 0;
  i11 = HEAP32[i3 >> 2] | 0;
  i12 = i11 + 1 | 0;
  HEAP32[i3 >> 2] = i12;
  STACKTOP = i4;
  return;
 }
 i1 = i8 + 1 | 0;
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i5 >>> 0) {
   i13 = 5;
  } else {
   if ((i7 + (i8 << 5) | 0) >>> 0 <= i5 >>> 0) {
    i13 = 5;
    break;
   }
   __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i1);
   i14 = HEAP32[i6 >> 2] | 0;
   i15 = i14 + (i5 - i7 >> 5 << 5) | 0;
   i16 = i14;
  }
 } while (0);
 if ((i13 | 0) == 5) {
  __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i1);
  i15 = i5;
  i16 = HEAP32[i6 >> 2] | 0;
 }
 _memcpy(i16 + (HEAP32[i3 >> 2] << 5) | 0, i15 | 0, 32) | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 i12 = i11 + 1 | 0;
 HEAP32[i3 >> 2] = i12;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox12scrollHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 if ((HEAP32[i4 >> 2] & 65536 | 0) != 0) {
  i5 = __ZNK7WebCore11RenderLayer12scrollHeightEv(HEAP32[i1 + 40 >> 2] | 0) | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i6 = HEAP32[i1 + 56 >> 2] | 0;
 i7 = i1 | 0;
 i8 = i1;
 i9 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 736 >> 2] & 511](i7) | 0) | 0;
 i6 = i9 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 740 >> 2] & 511](i7) | 0) | 0;
 do {
  if ((HEAP32[i4 >> 2] & 65536 | 0) == 0) {
   i10 = 0;
  } else {
   i9 = i1 + 40 | 0;
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i9 >> 2] | 0) | 0) {
    i10 = 0;
    break;
   }
   if ((((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
    i10 = 0;
    break;
   }
   i10 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i9 >> 2] | 0, 0) | 0;
  }
 } while (0);
 i4 = i6 - i10 | 0;
 i10 = HEAP32[i1 + 88 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZNK7WebCore9RenderBox13clientBoxRectEv(i3, i1);
 } else {
  i1 = i3;
  i6 = i10 + 4 | 0;
  HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 }
 i6 = (HEAP32[i3 + 12 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i3 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 736 >> 2] & 511](i7) | 0) | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 736 >> 2] & 511](i7) | 0;
 i5 = (i4 | 0) < (i3 | 0) ? i3 : i4;
 STACKTOP = i2;
 return i5 | 0;
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
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 511](i2) | 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 511](i2) | 0;
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
function __ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i1, i2, i4, 0);
 i4 = i1;
 i6 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
 i7 = (HEAP32[i4 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i3 = i2 | 0;
 i8 = i2;
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 744 >> 2] & 511](i3) | 0;
 i10 = i7 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 736 >> 2] & 511](i3) | 0) | 0;
 HEAP32[i4 >> 2] = i6 + i9;
 HEAP32[i4 + 4 >> 2] = i10;
 i10 = i1 + 8 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 i9 = HEAP32[i10 + 4 >> 2] | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 744 >> 2] & 511](i3) | 0;
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 748 >> 2] & 511](i3) | 0;
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 736 >> 2] & 511](i3) | 0;
 i12 = i4 - i6 - i7 | 0;
 i7 = i9 - i11 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 740 >> 2] & 511](i3) | 0) | 0;
 HEAP32[i10 >> 2] = i12;
 HEAP32[i10 + 4 >> 2] = i7;
 i10 = i2 + 40 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = __ZNK7WebCore11RenderLayer22verticalScrollbarWidthENS_29OverlayScrollbarSizeRelevancyE(i2, i5) | 0;
 i2 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i10 >> 2] | 0, i5) | 0;
 HEAP32[i1 + 8 >> 2] = i12 - i3;
 HEAP32[i1 + 12 >> 2] = i7 - i2;
 return;
}
function __ZNK7WebCore9RenderBox27backgroundHasOpaqueTopLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = i1 + 36 | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0;
 i7 = i6 + 4 | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i9 = HEAP32[i6 + 44 >> 2] | 0;
 if ((i9 & 12 | 0) != 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i10 = i1 | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) != 0) {
   if ((i9 & 3 | 0) == 1) {
    i8 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 do {
  if (__ZNK7WebCore9FillLayer14hasOpaqueImageEPKNS_13RenderElementE(i7, i4) | 0) {
   if (!(__ZNK7WebCore9FillLayer11hasRepeatXYEv(i7) | 0)) {
    break;
   }
   i9 = HEAP32[i6 + 8 >> 2] | 0;
   if (FUNCTION_TABLE_iiif[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 1](i9, i10, +HEAPF32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]) | 0) {
    i8 = 1;
   } else {
    break;
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 L16 : do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   i10 = i7;
   while (1) {
    if ((HEAP32[i10 + 4 >> 2] | 0) != 0) {
     break L16;
    }
    i10 = HEAP32[i10 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
   }
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i3, HEAP32[i5 >> 2] | 0, 23);
   if ((HEAP8[i3 + 4 | 0] & 1) == 0) {
    break;
   }
   if ((HEAP32[i3 >> 2] & -16777216 | 0) == -16777216) {
    i8 = 1;
   } else {
    break;
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 i8 = 0;
 STACKTOP = i2;
 return i8 | 0;
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
   i6 = 20;
   break;
  }
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 20) {
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
function __ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
   if ((HEAP8[(__ZNK7WebCore12RenderObject14enclosingLayerEv(i2 | 0) | 0) + 22 | 0] & 8) != 0) {
    break;
   }
   _memset(i1 | 0, 0, 16) | 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 824 >> 2] & 127](i5, i2);
 i6 = (HEAP32[i2 + 4 >> 2] | 0) + 20 | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  i9 = 0;
 } else {
  i10 = i7 + 52 | 0;
  i8 = HEAP32[i10 >> 2] | 0;
  i9 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = i5 | 0;
 i7 = (HEAP32[i10 >> 2] | 0) + i8 | 0;
 HEAP32[i10 >> 2] = i7;
 i8 = i5 + 4 | 0;
 i11 = (HEAP32[i8 >> 2] | 0) + i9 | 0;
 HEAP32[i8 >> 2] = i11;
 i9 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 176 >> 2] | 0;
 HEAP32[i10 >> 2] = i7 - i9;
 i7 = i5 + 8 | 0;
 i10 = i9 << 1;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i10;
 HEAP32[i8 >> 2] = i11 - i9;
 i9 = i5 + 12 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i10;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 512 >> 2] & 31](i2, i3, i5, 0);
 i3 = i1;
 i1 = i5;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9RenderBox38outermostBlockContainingFloatingObjectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  if ((HEAP32[i4 + 20 >> 2] & 768 | 0) != 256) {
   if ((HEAP32[i4 + 24 >> 2] & 32 | 0) != 0) {
    break;
   }
  }
  i2 = HEAP32[i4 + 8 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 22;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 22) {
  return i3 | 0;
 }
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i6 = i4;
  i7 = 0;
 }
 L13 : while (1) {
  i4 = i6;
  if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 768) {
   i3 = i7;
   i5 = 17;
   break;
  }
  if ((i7 | 0) == 0) {
   i5 = 9;
  } else {
   if (__ZNK7WebCore15RenderBlockFlow13containsFloatERNS_9RenderBoxE(i4, i1) | 0) {
    i5 = 9;
   } else {
    i8 = i7;
   }
  }
  if ((i5 | 0) == 9) {
   i5 = 0;
   i8 = i4;
  }
  i4 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i3 = i8;
   i5 = 18;
   break;
  } else {
   i9 = i4;
  }
  while (1) {
   if ((HEAP32[i9 + 20 >> 2] & 768 | 0) != 256) {
    if ((HEAP32[i9 + 24 >> 2] & 32 | 0) != 0) {
     break;
    }
   }
   i4 = HEAP32[i9 + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i3 = i8;
    i5 = 20;
    break L13;
   } else {
    i9 = i4;
   }
  }
  if ((i9 | 0) == 0) {
   i3 = i8;
   i5 = 19;
   break;
  } else {
   i6 = i9;
   i7 = i8;
  }
 }
 if ((i5 | 0) == 17) {
  return i3 | 0;
 } else if ((i5 | 0) == 18) {
  return i3 | 0;
 } else if ((i5 | 0) == 19) {
  return i3 | 0;
 } else if ((i5 | 0) == 20) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore9RenderBox19updateLogicalHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 48 | 0;
 _memset(i5 | 0, 0, 24) | 0;
 i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + 884 >> 2] | 0;
 i9 = i1 + 36 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) + 44 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) >>> 13 & 3;
 if ((i11 | 0) == 3 | (i11 | 0) == 0) {
  HEAP32[i6 >> 2] = HEAP32[i1 + 56 >> 2];
 } else {
  HEAP32[i6 >> 2] = HEAP32[i1 + 52 >> 2];
 }
 i11 = (HEAP32[i10 >> 2] | 0) >>> 13 & 3;
 if ((i11 | 0) == 3 | (i11 | 0) == 0) {
  HEAP32[i7 >> 2] = HEAP32[i1 + 48 >> 2];
 } else {
  HEAP32[i7 >> 2] = HEAP32[i1 + 44 >> 2];
 }
 FUNCTION_TABLE_viiii[i8 & 31](i1, i6, i7, i5);
 i7 = HEAP32[i5 >> 2] | 0;
 i6 = (HEAP32[i9 >> 2] | 0) + 44 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) >>> 13 & 3;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i7;
 } else {
  HEAP32[i1 + 52 >> 2] = i7;
 }
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 i8 = (HEAP32[i6 >> 2] | 0) >>> 13 & 3;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  HEAP32[i1 + 48 >> 2] = i7;
 } else {
  HEAP32[i1 + 44 >> 2] = i7;
 }
 i7 = i1 + 60 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) >>> 13 & 3;
 HEAP32[i3 >> 2] = HEAP32[i5 + 8 >> 2];
 __ZN7WebCore15LayoutBoxExtent9setBeforeENS_11WritingModeENS_10LayoutUnitE(i7, i1, i3);
 i3 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 HEAP32[i4 >> 2] = HEAP32[i5 + 12 >> 2];
 __ZN7WebCore15LayoutBoxExtent8setAfterENS_11WritingModeENS_10LayoutUnitE(i7, i3, i4);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore9RenderBox28computeBlockDirectionMarginsEPKNS_11RenderBlockERNS_10LayoutUnitES5_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 188 >> 2] & 511](i1 | 0) | 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i4 >> 2] = 0;
  STACKTOP = i5;
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 800 >> 2] & 127](i8, i1);
  i11 = i1 + 36 | 0;
  i12 = (HEAP32[i2 + 36 >> 2] | 0) + 44 | 0;
  i2 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] | 0) + 36 | 0, (HEAP32[i12 >> 2] | 0) >>> 13 & 3) | 0;
  i13 = i8 | 0;
  HEAP32[i6 >> 2] = HEAP32[i13 >> 2];
  i8 = i1 + 4 | 0;
  __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i9, i2, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  HEAP32[i3 >> 2] = HEAP32[i9 >> 2];
  i9 = __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] | 0) + 36 | 0, (HEAP32[i12 >> 2] | 0) >>> 13 & 3) | 0;
  HEAP32[i7 >> 2] = HEAP32[i13 >> 2];
  __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i10, i9, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  HEAP32[i4 >> 2] = HEAP32[i10 >> 2];
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore9RenderBox20fillAvailableMeasureENS_10LayoutUnitERS1_S2_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i2 + 36 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i12 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i12 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i12 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i7 >> 2] = i12;
 i3 = i2 + 4 | 0;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i9, i13, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 i9 = HEAP32[i11 >> 2] | 0;
 i11 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i9 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i9 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i9 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 HEAP32[i8 >> 2] = i12;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i10, i11, i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 HEAP32[i1 >> 2] = i12 - i3 - (HEAP32[i7 >> 2] | 0);
 STACKTOP = i6;
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
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 511](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 248 >> 2] & 511](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 >> 2] & 768 | 0) == 768) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 236 >> 2] & 511](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 240 >> 2] & 511](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 272 >> 2] & 511](i1) | 0) ^ 1;
 return i4 | 0;
}
function __ZNK7WebCore9RenderBox33canBeScrolledAndHasScrollableAreaEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 920 >> 2] & 511](i1) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 840 >> 2] & 511](i1) | 0;
 i5 = HEAP32[i1 + 56 >> 2] | 0;
 i6 = i1 | 0;
 i7 = i1;
 i8 = i5 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 736 >> 2] & 511](i6) | 0) | 0;
 i5 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 740 >> 2] & 511](i6) | 0) | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
   i9 = 0;
  } else {
   i8 = i1 + 40 | 0;
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i8 >> 2] | 0) | 0) {
    i9 = 0;
    break;
   }
   if ((((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
    i9 = 0;
    break;
   }
   i9 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i8 >> 2] | 0, 0) | 0;
  }
 } while (0);
 if ((i5 - i9 | 0) != (i4 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 836 >> 2] & 511](i1) | 0;
 i9 = HEAP32[i1 + 52 >> 2] | 0;
 i5 = i9 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 744 >> 2] & 511](i6) | 0) | 0;
 i9 = i5 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 748 >> 2] & 511](i6) | 0) | 0;
 i2 = (i9 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 908 >> 2] & 511](i1) | 0) | 0) != (i4 | 0);
 return i2 | 0;
}
function __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
  i8 = HEAP32[i3 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i9 = (i8 | 0) > 0;
  i10 = i7;
  i11 = i9 ? i3 : i10;
  i12 = i11 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i1 | 0;
  HEAP32[i14 >> 2] = i13;
  STACKTOP = i4;
  return;
 } else {
  i15 = i2 | 0;
  i16 = i2;
  i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 760 >> 2] & 511](i15) | 0;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 764 >> 2] & 511](i15) | 0;
  i16 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 728 >> 2] & 127](i5, i15);
  i2 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 732 >> 2] & 127](i6, i15);
  i15 = i3 | 0;
  i16 = (HEAP32[i15 >> 2] | 0) - (i18 + i17 + i2 + (HEAP32[i6 >> 2] | 0)) | 0;
  HEAP32[i15 >> 2] = i16;
  i8 = i16;
  HEAP32[i7 >> 2] = 0;
  i9 = (i8 | 0) > 0;
  i10 = i7;
  i11 = i9 ? i3 : i10;
  i12 = i11 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i1 | 0;
  HEAP32[i14 >> 2] = i13;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore9RenderBox41adjustContentBoxLogicalHeightForBoxSizingENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
  i8 = HEAP32[i3 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i9 = (i8 | 0) > 0;
  i10 = i7;
  i11 = i9 ? i3 : i10;
  i12 = i11 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i1 | 0;
  HEAP32[i14 >> 2] = i13;
  STACKTOP = i4;
  return;
 } else {
  i15 = i2 | 0;
  i16 = i2;
  i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 752 >> 2] & 511](i15) | 0;
  i18 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 720 >> 2] & 127](i6, i15);
  i2 = HEAP32[i6 >> 2] | 0;
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 756 >> 2] & 511](i15) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 724 >> 2] & 127](i5, i15);
  i15 = i3 | 0;
  i18 = (HEAP32[i15 >> 2] | 0) - (i2 + i17 + i6 + (HEAP32[i5 >> 2] | 0)) | 0;
  HEAP32[i15 >> 2] = i18;
  i8 = i18;
  HEAP32[i7 >> 2] = 0;
  i9 = (i8 | 0) > 0;
  i10 = i7;
  i11 = i9 ? i3 : i10;
  i12 = i11 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i1 | 0;
  HEAP32[i14 >> 2] = i13;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore9RenderBox40constrainContentBoxLogicalHeightByMinMaxENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 + 36 >> 2] | 0;
 i8 = i7 + 44 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) >>> 13 & 3;
 if ((i9 | 0) == 3 | (i9 | 0) == 0) {
  i10 = HEAP32[i7 + 4 >> 2] | 0;
  i11 = i10 + 44 | 0;
  i12 = i10;
 } else {
  i10 = HEAP32[i7 + 4 >> 2] | 0;
  i11 = i10 + 28 | 0;
  i12 = i10;
 }
 do {
  if ((HEAP8[i11 + 5 | 0] | 0) != 15) {
   if ((i9 | 0) == 3 | (i9 | 0) == 0) {
    i13 = i12 + 44 | 0;
   } else {
    i13 = i12 + 28 | 0;
   }
   __ZNK7WebCore9RenderBox27computeContentLogicalHeightERKNS_6LengthE(i5, i2, i13);
   i10 = HEAP32[i5 >> 2] | 0;
   if ((i10 | 0) == -1) {
    break;
   }
   i14 = i3 | 0;
   HEAP32[i14 >> 2] = HEAP32[((i10 | 0) < (HEAP32[i14 >> 2] | 0) ? i5 : i3) >> 2];
  }
 } while (0);
 i5 = (HEAP32[i8 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i15 = (HEAP32[i7 + 4 >> 2] | 0) + 36 | 0;
 } else {
  i15 = (HEAP32[i7 + 4 >> 2] | 0) + 20 | 0;
 }
 __ZNK7WebCore9RenderBox27computeContentLogicalHeightERKNS_6LengthE(i6, i2, i15);
 HEAP32[i1 >> 2] = HEAP32[((HEAP32[i3 >> 2] | 0) < (HEAP32[i6 >> 2] | 0) ? i6 : i3) >> 2];
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 484 >> 2] & 127](i9, i1);
 i12 = i1 | 0;
 i13 = i1;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 760 >> 2] & 511](i12) | 0;
 i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 764 >> 2] & 511](i12) | 0;
 i16 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 728 >> 2] & 127](i7, i12);
 i17 = HEAP32[i7 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 732 >> 2] & 127](i8, i12);
 HEAP32[i2 >> 2] = (HEAP32[i9 >> 2] | 0) - (i15 + i14 + i17 + (HEAP32[i8 >> 2] | 0));
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 488 >> 2] & 127](i10, i1);
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 760 >> 2] & 511](i12) | 0;
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 764 >> 2] & 511](i12) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 728 >> 2] & 127](i5, i12);
 i13 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 732 >> 2] & 127](i6, i12);
 HEAP32[i3 >> 2] = (HEAP32[i10 >> 2] | 0) - (i11 + i1 + i13 + (HEAP32[i6 >> 2] | 0));
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderStyle21hasBorderImageOutsetsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 132 >> 2] | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 + 76 | 0;
 if ((HEAP8[i2 + 81 | 0] | 0) == 10) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP8[i2 + 82 | 0] & 1) == 0) {
   if ((HEAP32[i1 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  } else {
   if (+HEAPF32[i1 >> 2] != +0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = i2 + 84 | 0;
 if ((HEAP8[i2 + 89 | 0] | 0) == 10) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP8[i2 + 90 | 0] & 1) == 0) {
   if ((HEAP32[i1 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  } else {
   if (+HEAPF32[i1 >> 2] != +0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = i2 + 92 | 0;
 if ((HEAP8[i2 + 97 | 0] | 0) == 10) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP8[i2 + 98 | 0] & 1) == 0) {
   if ((HEAP32[i1 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  } else {
   if (+HEAPF32[i1 >> 2] != +0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = i2 + 100 | 0;
 if ((HEAP8[i2 + 105 | 0] | 0) == 10) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP8[i2 + 106 | 0] & 1) == 0) {
  i3 = (HEAP32[i1 >> 2] | 0) != 0;
  return i3 | 0;
 } else {
  i3 = +HEAPF32[i1 >> 2] != +0;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore9RenderBox30constrainLogicalHeightByMinMaxENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 + 36 >> 2] | 0;
 i8 = i7 + 44 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) >>> 13 & 3;
 if ((i9 | 0) == 3 | (i9 | 0) == 0) {
  i10 = HEAP32[i7 + 4 >> 2] | 0;
  i11 = i10 + 44 | 0;
  i12 = i10;
 } else {
  i10 = HEAP32[i7 + 4 >> 2] | 0;
  i11 = i10 + 28 | 0;
  i12 = i10;
 }
 do {
  if ((HEAP8[i11 + 5 | 0] | 0) != 15) {
   if ((i9 | 0) == 3 | (i9 | 0) == 0) {
    i13 = i12 + 44 | 0;
   } else {
    i13 = i12 + 28 | 0;
   }
   __ZNK7WebCore9RenderBox25computeLogicalHeightUsingERKNS_6LengthE(i5, i2, i13);
   i10 = HEAP32[i5 >> 2] | 0;
   if ((i10 | 0) == -1) {
    break;
   }
   i14 = i3 | 0;
   HEAP32[i14 >> 2] = HEAP32[((i10 | 0) < (HEAP32[i14 >> 2] | 0) ? i5 : i3) >> 2];
  }
 } while (0);
 i5 = (HEAP32[i8 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i15 = (HEAP32[i7 + 4 >> 2] | 0) + 36 | 0;
 } else {
  i15 = (HEAP32[i7 + 4 >> 2] | 0) + 20 | 0;
 }
 __ZNK7WebCore9RenderBox25computeLogicalHeightUsingERKNS_6LengthE(i6, i2, i15);
 HEAP32[i1 >> 2] = HEAP32[((HEAP32[i3 >> 2] | 0) < (HEAP32[i6 >> 2] | 0) ? i6 : i3) >> 2];
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox20fillAvailableMeasureENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i3 = i2 + 36 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i10 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i10 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 HEAP32[i5 >> 2] = i9;
 i10 = i2 + 4 | 0;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i7, i11, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i5 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i3 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i7 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i7 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 HEAP32[i6 >> 2] = i9;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i8, i3, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 HEAP32[i1 >> 2] = i9 - i5 - (HEAP32[i8 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox13clientBoxRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i4 = i2;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 744 >> 2] & 511](i3) | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 736 >> 2] & 511](i3) | 0;
 i7 = HEAP32[i2 + 52 >> 2] | 0;
 i8 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 744 >> 2] & 511](i3) | 0) | 0;
 i7 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 748 >> 2] & 511](i3) | 0) | 0;
 i8 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0) | 0;
 i7 = HEAP32[i2 + 56 >> 2] | 0;
 i9 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 736 >> 2] & 511](i3) | 0) | 0;
 i7 = i9 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 740 >> 2] & 511](i3) | 0) | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 65536 | 0) == 0) {
   i10 = 0;
  } else {
   i3 = i2 + 40 | 0;
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i3 >> 2] | 0) | 0) {
    i10 = 0;
    break;
   }
   if ((((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
    i10 = 0;
    break;
   }
   i10 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i3 >> 2] | 0, 0) | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i5;
 HEAP32[i1 + 4 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = i8;
 HEAP32[i1 + 12 >> 2] = i7 - i10;
 return;
}
function __ZNK7WebCore9RenderBox19stretchesToViewportEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i3 + 664 >> 2] | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 i6 = (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i7 = (HEAP32[i5 + 4 >> 2] | 0) + 12 | 0;
 } else {
  i7 = (HEAP32[i5 + 4 >> 2] | 0) + 4 | 0;
 }
 if ((HEAP8[i7 + 5 | 0] | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 & 64 | 0) != 0 | (i1 & 25165824 | 0) == 16777216) {
  i4 = 0;
  return i4 | 0;
 }
 do {
  if ((HEAP32[i3 + 692 >> 2] | 0) != (i2 | 0)) {
   if ((i1 & 128 | 0) != 0 | (i2 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   i5 = HEAP32[i2 + 44 >> 2] | 0;
   i6 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(i3) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i7 >> 2] & 1024 | 0) == 0;
 return i4 | 0;
}
function __ZNK7WebCore9RenderBox12avoidsFloatsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 67584 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 do {
  if ((i4 & 128 | 0) == 0) {
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i6 + 44 >> 2] | 0;
   i6 = HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0;
   if ((i7 | 0) == (i6 | 0)) {
    i5 = 1;
    return i5 | 0;
   }
   if ((HEAP32[i7 + 12 >> 2] | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
    i5 = 1;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 if (__ZNK7WebCore12RenderObject8isLegendEv(i2) | 0) {
  i5 = 1;
  return i5 | 0;
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = 1;
  return i5 | 0;
 }
 if (((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 & 1088 | 0) != 0 | (i1 & 25165824 | 0) == 16777216) {
  i5 = 0;
  return i5 | 0;
 }
 i1 = i2 | 0;
 i3 = i2;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 556 >> 2] & 511](i1) | 0) {
  i5 = 1;
  return i5 | 0;
 }
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 548 >> 2] & 511](i1) | 0;
 return i5 | 0;
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
function __ZNK7WebCore9RenderBox39logicalVisualOverflowRectForPropagationEPNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 824 >> 2] & 127](i5, i2);
 i6 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
 i3 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i6 | 0) != (i3 | 0)) {
   if ((i3 | 0) == 1 | (i6 | 0) == 1) {
    i7 = i5 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i2 + 52 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) - (HEAP32[i5 + 8 >> 2] | 0);
    break;
   }
   if (!((i3 | 0) == 3 | (i6 | 0) == 3)) {
    break;
   }
   i7 = i5 + 4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i2 + 56 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) - (HEAP32[i5 + 12 >> 2] | 0);
  }
 } while (0);
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i6 = i1;
  i2 = i5;
  HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  STACKTOP = i4;
  return;
 } else {
  i2 = HEAP32[i5 + 12 >> 2] | 0;
  i6 = HEAP32[i5 + 8 >> 2] | 0;
  i3 = i1;
  i7 = HEAP32[i5 >> 2] | 0;
  HEAP32[i3 >> 2] = HEAP32[i5 + 4 >> 2];
  HEAP32[i3 + 4 >> 2] = i7;
  i7 = i1 + 8 | 0;
  HEAP32[i7 >> 2] = i2;
  HEAP32[i7 + 4 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore9RenderBox19clientLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2 + 36 | 0;
 i4 = (HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i4 | 0) == 3 | (i4 | 0) == 0)) {
  i4 = HEAP32[i2 + 52 >> 2] | 0;
  i5 = i2 | 0;
  i6 = i2;
  i7 = i4 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 744 >> 2] & 511](i5) | 0) | 0;
  i4 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 748 >> 2] & 511](i5) | 0) | 0;
  HEAP32[i1 >> 2] = i4 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0);
  return;
 }
 i4 = HEAP32[i2 + 56 >> 2] | 0;
 i5 = i2 | 0;
 i6 = i2;
 i7 = i4 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 736 >> 2] & 511](i5) | 0) | 0;
 i4 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 740 >> 2] & 511](i5) | 0) | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 65536 | 0) == 0) {
   i8 = 0;
  } else {
   i5 = i2 + 40 | 0;
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i5 >> 2] | 0) | 0) {
    i8 = 0;
    break;
   }
   if ((((HEAP32[(HEAP32[i3 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
    i8 = 0;
    break;
   }
   i8 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i5 >> 2] | 0, 0) | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i4 - i8;
 return;
}
function __ZNK7WebCore9RenderBox9offsetTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i2 | 0;
 i8 = __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0;
 i9 = i2 + 44 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 do {
  if ((i8 | 0) == 0 | (i8 | 0) == (i2 | 0)) {
   HEAP32[i4 >> 2] = i10;
   HEAP32[i4 + 4 >> 2] = i11;
  } else {
   i9 = i10;
   i12 = i11;
   i13 = i12;
   i14 = (HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if (!((i14 | 0) == 3 | (i14 | 0) == 1)) {
    HEAP32[i4 >> 2] = i10 & -1;
    HEAP32[i4 + 4 >> 2] = i12 | i11 & 0;
    break;
   }
   if ((HEAP32[i8 + 20 >> 2] & 8192 | 0) == 0) {
    HEAP32[i4 >> 2] = (HEAP32[i8 + 52 >> 2] | 0) - i9 - (HEAP32[i2 + 52 >> 2] | 0);
    HEAP32[i5 + 4 >> 2] = i13;
    break;
   } else {
    i12 = (HEAP32[i8 + 56 >> 2] | 0) + i13 - (HEAP32[i2 + 56 >> 2] | 0) - (HEAP32[i2 + 48 >> 2] << 1) | 0;
    HEAP32[i4 >> 2] = i9;
    HEAP32[i5 + 4 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore20RenderBoxModelObject38adjustedPositionRelativeToOffsetParentERKNS_11LayoutPointE(i6, i7, i5);
 HEAP32[i1 >> 2] = HEAP32[i6 + 4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox18clientLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2 + 36 | 0;
 i4 = (HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  i4 = HEAP32[i2 + 52 >> 2] | 0;
  i5 = i2 | 0;
  i6 = i2;
  i7 = i4 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 744 >> 2] & 511](i5) | 0) | 0;
  i4 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 748 >> 2] & 511](i5) | 0) | 0;
  HEAP32[i1 >> 2] = i4 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0);
  return;
 }
 i4 = HEAP32[i2 + 56 >> 2] | 0;
 i5 = i2 | 0;
 i6 = i2;
 i7 = i4 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 736 >> 2] & 511](i5) | 0) | 0;
 i4 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 740 >> 2] & 511](i5) | 0) | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 65536 | 0) == 0) {
   i8 = 0;
  } else {
   i5 = i2 + 40 | 0;
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i5 >> 2] | 0) | 0) {
    i8 = 0;
    break;
   }
   if ((((HEAP32[(HEAP32[i3 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
    i8 = 0;
    break;
   }
   i8 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i5 >> 2] | 0, 0) | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i4 - i8;
 return;
}
function __ZNK7WebCore9RenderBox10offsetLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i2 | 0;
 i8 = __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0;
 i9 = i2 + 44 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 do {
  if ((i8 | 0) == 0 | (i8 | 0) == (i2 | 0)) {
   HEAP32[i4 >> 2] = i10;
   HEAP32[i4 + 4 >> 2] = i11;
  } else {
   i9 = i10;
   i12 = i11;
   i13 = i12;
   i14 = (HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if (!((i14 | 0) == 3 | (i14 | 0) == 1)) {
    HEAP32[i4 >> 2] = i10 & -1;
    HEAP32[i4 + 4 >> 2] = i12 | i11 & 0;
    break;
   }
   if ((HEAP32[i8 + 20 >> 2] & 8192 | 0) == 0) {
    HEAP32[i4 >> 2] = (HEAP32[i8 + 52 >> 2] | 0) - i9 - (HEAP32[i2 + 52 >> 2] | 0);
    HEAP32[i5 + 4 >> 2] = i13;
    break;
   } else {
    i12 = (HEAP32[i8 + 56 >> 2] | 0) + i13 - (HEAP32[i2 + 56 >> 2] | 0) - (HEAP32[i2 + 48 >> 2] << 1) | 0;
    HEAP32[i4 >> 2] = i9;
    HEAP32[i5 + 4 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore20RenderBoxModelObject38adjustedPositionRelativeToOffsetParentERKNS_11LayoutPointE(i6, i7, i5);
 HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9RenderBox15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = HEAP32[H_BASE + 1064 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i7, i6) | 0;
 }
 i6 = HEAP32[H_BASE + 1072 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i6, i5) | 0;
 }
 i5 = HEAP32[H_BASE + 1056 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i5, i4) | 0;
 }
 i4 = HEAP32[H_BASE + 1048 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i4, i3) | 0;
 }
 __ZN7WebCore11RenderBlock37removePercentHeightDescendantIfNeededERNS_9RenderBoxE(i1);
 __ZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE10removeInfoERKS1_(i1);
 __ZN7WebCore20RenderBoxModelObject15willBeDestroyedEv(i1 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i3, i5, 23);
 if ((HEAP8[i3 + 4 | 0] & 1) == 0) {
  i6 = 3;
 } else {
  if ((HEAP32[i3 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
   i6 = 3;
  }
 }
 L3 : do {
  if ((i6 | 0) == 3) {
   i3 = (HEAP32[i5 + 12 >> 2] | 0) + 4 | 0;
   while (1) {
    if ((HEAP32[i3 + 4 >> 2] | 0) != 0) {
     break L3;
    }
    i7 = HEAP32[i3 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i8 = 0;
     break;
    } else {
     i3 = i7;
    }
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 511](i1 | 0) | 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i5 | 0)) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 _memset(i4 | 0, 0, 16) | 0;
 if (!(__ZNK7WebCore9RenderBox26getBackgroundPaintedExtentERNS_10LayoutRectE(i1, i4) | 0)) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i8 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1e3 >> 2] & 15](i1, i4, 4) | 0;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore9RenderBox18updateLogicalWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 _memset(i5 | 0, 0, 24) | 0;
 __ZNK7WebCore9RenderBox27computeLogicalWidthInRegionERNS0_27LogicalExtentComputedValuesEPNS_12RenderRegionE(i1, i5, 0);
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 36 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 + 44 | 0;
 i10 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  HEAP32[i1 + 52 >> 2] = i6;
 } else {
  HEAP32[i1 + 56 >> 2] = i6;
 }
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 i10 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  HEAP32[i1 + 44 >> 2] = i6;
 } else {
  HEAP32[i1 + 48 >> 2] = i6;
 }
 i6 = i1 + 60 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
 i9 = (HEAP32[i8 + 40 >> 2] | 0) >>> 30 & 1;
 HEAP32[i3 >> 2] = HEAP32[i5 + 16 >> 2];
 __ZN7WebCore15LayoutBoxExtent8setStartENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i6, i1, i9, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 i7 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
 i9 = (HEAP32[i3 + 40 >> 2] | 0) >>> 30 & 1;
 HEAP32[i4 >> 2] = HEAP32[i5 + 20 >> 2];
 __ZN7WebCore15LayoutBoxExtent6setEndENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i6, i7, i9, i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if (!(__ZN7WebCore11RenderLayer6scrollENS_15ScrollDirectionENS_17ScrollGranularityEf(i6, i2, i3, d4) | 0)) {
    break;
   }
   if ((i5 | 0) == 0) {
    i7 = 1;
    return i7 | 0;
   }
   if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
    i8 = HEAP32[i1 + 4 >> 2] | 0;
   } else {
    i8 = 0;
   }
   HEAP32[i5 >> 2] = i8;
   i7 = 1;
   return i7 | 0;
  }
 } while (0);
 do {
  if ((i5 | 0) != 0) {
   i8 = HEAP32[i5 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
    i9 = HEAP32[i1 + 4 >> 2] | 0;
   } else {
    i9 = 0;
   }
   if ((i8 | 0) == (i9 | 0)) {
    i7 = 1;
   } else {
    break;
   }
   return i7 | 0;
  }
 } while (0);
 i9 = __ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0;
 if ((i9 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 if ((HEAP32[i9 + 20 >> 2] & 768 | 0) == 768) {
  i7 = 0;
  return i7 | 0;
 }
 i7 = FUNCTION_TABLE_iiiifi[HEAP32[(HEAP32[i9 >> 2] | 0) + 912 >> 2] & 7](i9 | 0, i2, i3, d4, i5) | 0;
 return i7 | 0;
}
function __ZNK7WebCore9RenderBox43overrideContainingBlockContentLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[H_BASE + 1048 >> 2] | 0;
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = i2;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 L1 : do {
  if ((i5 | 0) != 0) {
   i3 = i4 & i6;
   i7 = i5 + (i3 << 3) | 0;
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
     i13 = i5 + (i12 << 3) | 0;
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
   HEAP32[i1 >> 2] = HEAP32[i9 + 4 >> 2];
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore9RenderBox42overrideContainingBlockContentLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[H_BASE + 1056 >> 2] | 0;
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = i2;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 L1 : do {
  if ((i5 | 0) != 0) {
   i3 = i4 & i6;
   i7 = i5 + (i3 << 3) | 0;
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
     i13 = i5 + (i12 << 3) | 0;
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
   HEAP32[i1 >> 2] = HEAP32[i9 + 4 >> 2];
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore9RenderBox39hasOverrideContainingBlockLogicalHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = HEAP32[H_BASE + 1048 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i1;
 i6 = i2 + ~(i2 << 15) | 0;
 i2 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i2 >>> 6 ^ i2;
 i2 = i6 + ~(i6 << 11) | 0;
 i6 = i2 >>> 16 ^ i2;
 i2 = i5 & i6;
 i7 = i4 + (i2 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == (i1 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i2;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i9 = 0;
     break L7;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i5;
    i16 = i4 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
  }
 } while (0);
 i3 = (i9 | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore9RenderBox38hasOverrideContainingBlockLogicalWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = HEAP32[H_BASE + 1056 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i1;
 i6 = i2 + ~(i2 << 15) | 0;
 i2 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i2 >>> 6 ^ i2;
 i2 = i6 + ~(i6 << 11) | 0;
 i6 = i2 >>> 16 ^ i2;
 i2 = i5 & i6;
 i7 = i4 + (i2 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == (i1 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i2;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i9 = 0;
     break L7;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i5;
    i16 = i4 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
  }
 } while (0);
 i3 = (i9 | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore9RenderBox28overrideLogicalContentHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[H_BASE + 1064 >> 2] | 0;
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = i2;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 L1 : do {
  if ((i5 | 0) != 0) {
   i3 = i4 & i6;
   i7 = i5 + (i3 << 3) | 0;
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
     i13 = i5 + (i12 << 3) | 0;
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
   HEAP32[i1 >> 2] = HEAP32[i9 + 4 >> 2];
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore9RenderBox27overrideLogicalContentWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[H_BASE + 1072 >> 2] | 0;
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = i2;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 L1 : do {
  if ((i5 | 0) != 0) {
   i3 = i4 & i6;
   i7 = i5 + (i3 << 3) | 0;
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
     i13 = i5 + (i12 << 3) | 0;
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
   HEAP32[i1 >> 2] = HEAP32[i9 + 4 >> 2];
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore9RenderBox17hasOverrideHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = HEAP32[H_BASE + 1064 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i1;
 i6 = i2 + ~(i2 << 15) | 0;
 i2 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i2 >>> 6 ^ i2;
 i2 = i6 + ~(i6 << 11) | 0;
 i6 = i2 >>> 16 ^ i2;
 i2 = i5 & i6;
 i7 = i4 + (i2 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == (i1 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i2;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i9 = 0;
     break L7;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i5;
    i16 = i4 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
  }
 } while (0);
 i3 = (i9 | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore9RenderBox16hasOverrideWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = HEAP32[H_BASE + 1072 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i1;
 i6 = i2 + ~(i2 << 15) | 0;
 i2 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i2 >>> 6 ^ i2;
 i2 = i6 + ~(i6 << 11) | 0;
 i6 = i2 >>> 16 ^ i2;
 i2 = i5 & i6;
 i7 = i4 + (i2 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == (i1 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i2;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i9 = 0;
     break L7;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i5;
    i16 = i4 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
  }
 } while (0);
 i3 = (i9 | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore9RenderBox13contentHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 56 >> 2] | 0;
 i7 = i2 | 0;
 i8 = i2;
 i9 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 736 >> 2] & 511](i7) | 0) | 0;
 i6 = i9 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 740 >> 2] & 511](i7) | 0) | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 65536 | 0) == 0) {
   i10 = 0;
  } else {
   i8 = i2 + 40 | 0;
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i8 >> 2] | 0) | 0) {
    i10 = 0;
    break;
   }
   if ((((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
    i10 = 0;
    break;
   }
   i10 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i8 >> 2] | 0, 0) | 0;
  }
 } while (0);
 i8 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 704 >> 2] & 127](i4, i7);
 i2 = i6 - i10 - (HEAP32[i4 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 708 >> 2] & 127](i5, i7);
 HEAP32[i1 >> 2] = i2 - (HEAP32[i5 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox27enclosingFloatPaintingLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 512 | 0) == 0) {
   i2 = i1 + 8 | 0;
   while (1) {
    i3 = HEAP32[i2 >> 2] | 0;
    if ((i3 | 0) == 0) {
     i4 = 0;
     i5 = 17;
     break;
    }
    if ((HEAP32[i3 + 20 >> 2] & 512 | 0) == 0) {
     i2 = i3 + 8 | 0;
    } else {
     break;
    }
   }
   if ((i5 | 0) == 17) {
    return i4 | 0;
   }
   if ((i3 | 0) == 0) {
    i4 = 0;
   } else {
    i6 = i3;
    break;
   }
   return i4 | 0;
  } else {
   i6 = i1;
  }
 } while (0);
 L10 : while (1) {
  i1 = HEAP32[i6 + 40 >> 2] | 0;
  if ((i1 | 0) != 0) {
   if ((HEAP8[i1 + 20 | 0] & 32) != 0) {
    i4 = i1;
    i5 = 16;
    break;
   }
  }
  i1 = i6 + 8 | 0;
  while (1) {
   i7 = HEAP32[i1 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i4 = 0;
    i5 = 13;
    break L10;
   }
   if ((HEAP32[i7 + 20 >> 2] & 512 | 0) == 0) {
    i1 = i7 + 8 | 0;
   } else {
    break;
   }
  }
  if ((i7 | 0) == 0) {
   i4 = 0;
   i5 = 14;
   break;
  } else {
   i6 = i7;
  }
 }
 if ((i5 | 0) == 14) {
  return i4 | 0;
 } else if ((i5 | 0) == 16) {
  return i4 | 0;
 } else if ((i5 | 0) == 13) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore9RenderBox26repaintDuringLayoutIfMovedERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2;
 i5 = i1 + 44 | 0;
 i6 = i5;
 if (!((HEAP32[i4 >> 2] | 0) != (HEAP32[i6 >> 2] | 0) | (HEAP32[i4 + 4 >> 2] | 0) != (HEAP32[i6 + 4 >> 2] | 0))) {
  STACKTOP = i3;
  return;
 }
 i6 = i3 | 0;
 i4 = i5;
 HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 i5 = i2;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 i5 = i1 | 0;
 __ZNK7WebCore12RenderObject7repaintEb(i5, 0);
 i2 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 872 >> 2] & 127](i1, 1);
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 __ZNK7WebCore12RenderObject7repaintEb(i5, 0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 872 >> 2] & 127](i1, 1);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore9RenderBox44computeContentAndScrollbarLogicalHeightUsingERKNS_6LengthE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP8[i3 + 5 | 0] | 0;
 if ((i6 << 24 >> 24 | 0) == 3) {
  if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
   d7 = +(HEAP32[i3 >> 2] | 0);
  } else {
   d7 = +HEAPF32[i3 >> 2];
  }
  do {
   if (d7 < +2147483647) {
    if (d7 <= +-2147483648) {
     i8 = -2147483648;
     break;
    }
    i8 = ~~d7;
   } else {
    i8 = 2147483647;
   }
  } while (0);
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i4;
  return;
 } else if ((i6 << 24 >> 24 | 0) == 10 | (i6 << 24 >> 24 | 0) == 2) {
  __ZNK7WebCore9RenderBox30computePercentageLogicalHeightERKNS_6LengthE(i1, i2, i3);
  STACKTOP = i4;
  return;
 } else {
  if ((i6 - 11 & 255) >>> 0 < 4 >>> 0) {
   HEAP32[i5 >> 2] = 0;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i3, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i1 >> 2] = -1;
   STACKTOP = i4;
   return;
  }
 }
}
function __ZNK7WebCore9RenderBox40adjustBorderBoxLogicalHeightForBoxSizingENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 | 0;
 i9 = i2;
 i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 752 >> 2] & 511](i8) | 0;
 i11 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 720 >> 2] & 127](i6, i8);
 i12 = (HEAP32[i6 >> 2] | 0) + i10 | 0;
 i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 756 >> 2] & 511](i8) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 724 >> 2] & 127](i5, i8);
 i8 = i12 + i10 + (HEAP32[i5 >> 2] | 0) | 0;
 HEAP32[i7 >> 2] = i8;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
  HEAP32[i1 >> 2] = (HEAP32[i3 >> 2] | 0) + i8;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = HEAP32[((HEAP32[i3 >> 2] | 0) < (i8 | 0) ? i7 : i3) >> 2];
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore9RenderBox23addVisualEffectOverflowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = i3;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 100 >> 2] | 0) == 0) {
   if (__ZNK7WebCore11RenderStyle21hasBorderImageOutsetsEv(i7) | 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i7 = i1 + 52 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i8;
 HEAP32[i4 + 4 >> 2] = i9;
 __ZNK7WebCore9RenderBox25applyVisualEffectOverflowERKNS_10LayoutRectE(i6, i1, i5);
 __ZN7WebCore9RenderBox17addVisualOverflowERKNS_10LayoutRectE(i1, i6);
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore16RenderFlowThread30addRegionsVisualEffectOverflowEPKNS_9RenderBoxE(i6, i1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore9RenderBox39adjustBorderBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 | 0;
 i9 = i2;
 i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 760 >> 2] & 511](i8) | 0;
 i11 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 764 >> 2] & 511](i8) | 0) + i10 | 0;
 i10 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 728 >> 2] & 127](i5, i8);
 i9 = i11 + (HEAP32[i5 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 732 >> 2] & 127](i6, i8);
 i8 = i9 + (HEAP32[i6 >> 2] | 0) | 0;
 HEAP32[i7 >> 2] = i8;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
  HEAP32[i1 >> 2] = i8 + (HEAP32[i3 >> 2] | 0);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = HEAP32[((HEAP32[i3 >> 2] | 0) < (i8 | 0) ? i7 : i3) >> 2];
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore9RenderBox16reflectionOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 104 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i9 = i7 + 8 | 0;
 i10 = i1 + 52 | 0;
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 if (((HEAP32[i7 + 4 >> 2] | 0) - 2 | 0) >>> 0 < 2 >>> 0) {
  HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i5, i9, i3, HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i8 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i8 | 0;
 } else {
  HEAP32[i4 >> 2] = i11;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i6, i9, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i8 = HEAP32[i6 >> 2] | 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 return 0;
}
function __ZNK7WebCore9RenderBox45containingBlockLogicalWidthForContentInRegionEPNS_12RenderRegionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((i3 | 0) == 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 800 >> 2] & 127](i1, i2);
  STACKTOP = i4;
  return;
 }
 i6 = __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0;
 i2 = i6 | 0;
 i7 = __ZNK7WebCore9RenderBox25clampToStartAndEndRegionsEPNS_12RenderRegionE(i2, i3) | 0;
 __ZNK7WebCore11RenderBlock21availableLogicalWidthEv(i5, i6);
 i3 = __ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i2, i7, 0) | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
  STACKTOP = i4;
  return;
 }
 i7 = (HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  i8 = i6 + 52 | 0;
 } else {
  i8 = i6 + 56 | 0;
 }
 i6 = (HEAP32[i5 >> 2] | 0) + ((HEAP32[i3 + 4 >> 2] | 0) - (HEAP32[i8 >> 2] | 0)) | 0;
 HEAP32[i1 >> 2] = (i6 | 0) > 0 ? i6 : 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9RenderBox46setOverrideContainingBlockContentLogicalHeightENS_10LayoutUnitE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[H_BASE + 1048 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1048 >> 2] = i8;
  i9 = i8;
 } else {
  i9 = i6;
 }
 HEAP32[i4 >> 2] = i1;
 __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS1_10LayoutUnitEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i5, i9 | 0, i4, i2);
 if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] = HEAP32[i2 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9RenderBox45setOverrideContainingBlockContentLogicalWidthENS_10LayoutUnitE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[H_BASE + 1056 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1056 >> 2] = i8;
  i9 = i8;
 } else {
  i9 = i6;
 }
 HEAP32[i4 >> 2] = i1;
 __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS1_10LayoutUnitEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i5, i9 | 0, i4, i2);
 if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] = HEAP32[i2 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox31offsetFromLogicalTopOfFirstPageEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   if ((HEAP32[i2 + 20 >> 2] & 805306368 | 0) == 0) {
    i7 = 5;
    break;
   }
   if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i5) | 0) == 0) {
    i7 = 5;
   }
  } else {
   if ((HEAP8[i6 | 0] & 2) == 0) {
    i7 = 5;
   }
  }
 } while (0);
 if ((i7 | 0) == 5) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i7 = __ZNK7WebCore12RenderObject15containingBlockEv(i5) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 864 >> 2] & 127](i4, i7);
 i7 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  i8 = i2 + 48 | 0;
 } else {
  i8 = i2 + 44 | 0;
 }
 HEAP32[i1 >> 2] = (HEAP32[i4 >> 2] | 0) + (HEAP32[i8 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9RenderBox34computeAndSetBlockDirectionMarginsEPKNS_11RenderBlockE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZNK7WebCore9RenderBox28computeBlockDirectionMarginsEPKNS_11RenderBlockERNS_10LayoutUnitES5_(i1, i2, i6, i7);
 i7 = i2 + 36 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i6 = i1 + 60 | 0;
 if ((i2 | 0) == 0) {
  i10 = HEAP32[i1 + 36 >> 2] | 0;
 } else {
  i10 = i2;
 }
 i2 = (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3;
 HEAP32[i4 >> 2] = HEAP32[i8 >> 2];
 __ZN7WebCore15LayoutBoxExtent9setBeforeENS_11WritingModeENS_10LayoutUnitE(i6, i2, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i11 = HEAP32[i1 + 36 >> 2] | 0;
 } else {
  i11 = i4;
 }
 i4 = (HEAP32[i11 + 44 >> 2] | 0) >>> 13 & 3;
 HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
 __ZN7WebCore15LayoutBoxExtent8setAfterENS_11WritingModeENS_10LayoutUnitE(i6, i4, i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9RenderBox31setOverrideLogicalContentHeightENS_10LayoutUnitE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[H_BASE + 1064 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1064 >> 2] = i8;
  i9 = i8;
 } else {
  i9 = i6;
 }
 HEAP32[i4 >> 2] = i1;
 __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS1_10LayoutUnitEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i5, i9 | 0, i4, i2);
 if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] = HEAP32[i2 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9RenderBox30setOverrideLogicalContentWidthENS_10LayoutUnitE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[H_BASE + 1072 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1072 >> 2] = i8;
  i9 = i8;
 } else {
  i9 = i6;
 }
 HEAP32[i4 >> 2] = i1;
 __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS1_10LayoutUnitEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i5, i9 | 0, i4, i2);
 if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] = HEAP32[i2 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i6;
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 i9 = (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i9 | 0) == 3 | (i9 | 0) == 0) {
  i10 = (HEAP32[i8 + 4 >> 2] | 0) + 4 | 0;
 } else {
  i10 = (HEAP32[i8 + 4 >> 2] | 0) + 12 | 0;
 }
 i8 = i10;
 i10 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i10;
 HEAP32[i6 + 4 >> 2] = i9;
 if ((i10 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 }
 __ZNK7WebCore9RenderBox32computeReplacedLogicalWidthUsingENS_6LengthE(i5, i2, i7);
 __ZNK7WebCore9RenderBox48computeReplacedLogicalWidthRespectingMinMaxWidthENS_10LayoutUnitENS_22ShouldComputePreferredE(i1, i2, i5, i3);
 if ((HEAP8[i7 + 5 | 0] | 0) != 10) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox21availableLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i6 = HEAP32[i2 + 52 >> 2] | 0;
  i7 = i2 | 0;
  i8 = i2;
  i9 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 744 >> 2] & 511](i7) | 0) | 0;
  i6 = i9 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 748 >> 2] & 511](i7) | 0) | 0;
  i8 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0) | 0;
  i6 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 712 >> 2] & 127](i4, i7);
  i9 = i8 - (HEAP32[i4 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 716 >> 2] & 127](i5, i7);
  HEAP32[i1 >> 2] = i9 - (HEAP32[i5 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  __ZNK7WebCore9RenderBox13contentHeightEv(i1, i2);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore9RenderBox15topLeftLocationEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0;
 i4 = i2 + 44 | 0;
 if ((i3 | 0) == 0 | (i3 | 0) == (i2 | 0)) {
  i5 = i1;
  i6 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 4 >> 2] = i6;
  return;
 }
 i6 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = i6;
 i7 = i5;
 i8 = i7;
 i9 = (HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i9 | 0) == 3 | (i9 | 0) == 1)) {
  i9 = i1;
  HEAP32[i9 >> 2] = i6 & -1;
  HEAP32[i9 + 4 >> 2] = i7 | i5 & 0;
  return;
 }
 if ((HEAP32[i3 + 20 >> 2] & 8192 | 0) == 0) {
  HEAP32[i1 >> 2] = (HEAP32[i3 + 52 >> 2] | 0) + i4 - (HEAP32[i2 + 52 >> 2] | 0) - (i4 << 1);
  HEAP32[i1 + 4 >> 2] = i8;
  return;
 } else {
  i5 = (HEAP32[i3 + 56 >> 2] | 0) + i8 - (HEAP32[i2 + 56 >> 2] | 0) - (HEAP32[i2 + 48 >> 2] << 1) | 0;
  HEAP32[i1 >> 2] = i4;
  HEAP32[i1 + 4 >> 2] = i5;
  return;
 }
}
function __ZNK7WebCore9RenderBox34flipForWritingModeIncludingColumnsERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0;
 do {
  if ((i4 & 4194304 | 0) != 0) {
   i6 = i5 >>> 13 & 3;
   if (!((i6 | 0) == 3 | (i6 | 0) == 1)) {
    break;
   }
   __ZNK7WebCore11RenderBlock34flipForWritingModeIncludingColumnsERKNS_11LayoutPointE(i1, i2, i3);
   return;
  }
 } while (0);
 i6 = i5 >>> 13 & 3;
 if (!((i6 | 0) == 3 | (i6 | 0) == 1)) {
  i6 = i3;
  i5 = i1;
  i7 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i5 + 4 >> 2] = i7;
  return;
 }
 if ((i4 & 8192 | 0) == 0) {
  i4 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = (HEAP32[i2 + 52 >> 2] | 0) - (HEAP32[i3 >> 2] | 0);
  HEAP32[i1 + 4 >> 2] = i4;
  return;
 } else {
  i4 = (HEAP32[i2 + 56 >> 2] | 0) - (HEAP32[i3 + 4 >> 2] | 0) | 0;
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i1 + 4 >> 2] = i4;
  return;
 }
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
function __ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5;
 i7 = HEAP32[i2 + 36 >> 2] | 0;
 i8 = (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  i9 = (HEAP32[i7 + 4 >> 2] | 0) + 12 | 0;
 } else {
  i9 = (HEAP32[i7 + 4 >> 2] | 0) + 4 | 0;
 }
 i7 = i9;
 i9 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i9;
 HEAP32[i5 + 4 >> 2] = i8;
 if ((i9 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 __ZNK7WebCore9RenderBox33computeReplacedLogicalHeightUsingENS_6LengthE(i4, i2, i6);
 __ZNK7WebCore9RenderBox50computeReplacedLogicalHeightRespectingMinMaxHeightENS_10LayoutUnitE(i1, i2, i4);
 if ((HEAP8[i6 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i7 | 0) == 0 | (i7 | 0) == (i1 | 0))) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] | 0) != 11) {
  STACKTOP = i4;
  return;
 }
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(HEAP32[i2 >> 2] | 0) | 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 + 52 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 i7 = i3;
 i3 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = i3;
 i3 = i5 + 8 | 0;
 HEAP32[i3 >> 2] = i8;
 HEAP32[i3 + 4 >> 2] = i9;
 __ZN7WebCore9RenderBox15paintMaskImagesERKNS_9PaintInfoERKNS_10LayoutRectE(i1, i2, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox46skipContainingBlockForPercentHeightCalculationEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) != 0) {
   if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i3) | 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 511](i3) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i3 & 25165824 | 0) == 16777216) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 i2 = (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i2 | 0) == 3 | (i2 | 0) == 0) {
  i6 = (HEAP32[i5 + 4 >> 2] | 0) + 12 | 0;
 } else {
  i6 = (HEAP32[i5 + 4 >> 2] | 0) + 4 | 0;
 }
 if ((HEAP8[i6 + 5 | 0] | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i1 + 20 >> 2] & 8192 | 0) != 0 ^ (i3 & 8192 | 0) != 0 ^ 1;
 return i4 | 0;
}
function __ZNK7WebCore9RenderBox24pixelSnappedClientHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 i3 = i1 | 0;
 i4 = i1;
 i5 = i2 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 736 >> 2] & 511](i3) | 0) | 0;
 i2 = i5 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 740 >> 2] & 511](i3) | 0) | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
   i6 = 0;
  } else {
   i5 = i1 + 40 | 0;
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i5 >> 2] | 0) | 0) {
    i6 = 0;
    break;
   }
   if ((((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
    i6 = 0;
    break;
   }
   i6 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i5 >> 2] | 0, 0) | 0;
  }
 } while (0);
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 736 >> 2] & 511](i3) | 0;
 return i2 - i6 | 0;
}
function __ZNK7WebCore9RenderBox31instrinsicScrollbarLogicalWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 & 65536 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 36 | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 48 >> 2] | 0;
 if ((i2 & 8192 | 0) != 0) {
  if ((i5 & 57344 | 0) != 16384) {
   i3 = 0;
   return i3 | 0;
  }
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 908 >> 2] & 511](i1) | 0;
  return i3 | 0;
 }
 if ((i5 & 7168 | 0) != 2048) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = i1 + 40 | 0;
 if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i5 >> 2] | 0) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((((HEAP32[(HEAP32[i4 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i5 >> 2] | 0, 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore9RenderBox22paintRootBoxFillLayersERKNS_9PaintInfoE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 24 >> 2] & 16 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i6 = __ZN7WebCore13RenderElement25rendererForRootBackgroundEv(i1 | 0) | 0;
 i7 = HEAP32[i6 + 36 >> 2] | 0;
 i8 = (HEAP32[i7 + 12 >> 2] | 0) + 4 | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i4, i7, 23);
 __ZNK7WebCore10RenderView14backgroundRectEPNS_9RenderBoxE(i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i1);
 __ZN7WebCore9RenderBox15paintFillLayersERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceENS_17CompositeOperatorEPNS_13RenderElementE(i1, i2, i4, i8, i5, 0, 2, i6);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox39logicalLayoutOverflowRectForPropagationEPNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore9RenderBox32layoutOverflowRectForPropagationEPNS_11RenderStyleE(i5, i2, i3);
 i2 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i2 | 0) == 3 | (i2 | 0) == 0) {
  i2 = i1;
  i3 = i5;
  HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
  STACKTOP = i4;
  return;
 } else {
  i3 = HEAP32[i5 + 12 >> 2] | 0;
  i2 = HEAP32[i5 + 8 >> 2] | 0;
  i6 = i1;
  i7 = HEAP32[i5 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i5 + 4 >> 2];
  HEAP32[i6 + 4 >> 2] = i7;
  i7 = i1 + 8 | 0;
  HEAP32[i7 >> 2] = i3;
  HEAP32[i7 + 4 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i1 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i1 | 0) == 3 | (i1 | 0) == 0) {
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  i4 = i3 + 12 | 0;
  i5 = i3;
 } else {
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  i4 = i3 + 4 | 0;
  i5 = i3;
 }
 i3 = HEAP8[i4 + 5 | 0] | 0;
 if ((i3 << 24 >> 24 | 0) == 10 | (i3 << 24 >> 24 | 0) == 2) {
  i6 = 1;
  return i6 | 0;
 }
 if ((i1 | 0) == 3 | (i1 | 0) == 0) {
  i7 = i5 + 36 | 0;
 } else {
  i7 = i5 + 20 | 0;
 }
 i3 = HEAP8[i7 + 5 | 0] | 0;
 if ((i3 << 24 >> 24 | 0) == 10 | (i3 << 24 >> 24 | 0) == 2) {
  i6 = 1;
  return i6 | 0;
 }
 if ((i1 | 0) == 3 | (i1 | 0) == 0) {
  i8 = i5 + 44 | 0;
 } else {
  i8 = i5 + 28 | 0;
 }
 i5 = HEAP8[i8 + 5 | 0] | 0;
 i6 = i5 << 24 >> 24 == 2 | i5 << 24 >> 24 == 10;
 return i6 | 0;
}
function __ZNK7WebCore9RenderBox21topLeftLocationOffsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0;
 i4 = HEAP32[i2 + 44 >> 2] | 0;
 i5 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i3 | 0) == 0 | (i3 | 0) == (i2 | 0)) {
  HEAP32[i1 >> 2] = i4;
  HEAP32[i1 + 4 >> 2] = i5;
  return;
 }
 i6 = HEAP32[i2 + 52 >> 2] | 0;
 i7 = HEAP32[i2 + 56 >> 2] | 0;
 i2 = (HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i2 | 0) == 3 | (i2 | 0) == 1) {
   if ((HEAP32[i3 + 20 >> 2] & 8192 | 0) == 0) {
    i8 = (HEAP32[i3 + 52 >> 2] | 0) - (i6 + i4) | 0;
    i9 = i5;
    break;
   } else {
    i8 = i4;
    i9 = (HEAP32[i3 + 56 >> 2] | 0) - (i7 + i5) | 0;
    break;
   }
  } else {
   i8 = i4;
   i9 = i5;
  }
 } while (0);
 HEAP32[i1 >> 2] = i8;
 HEAP32[i1 + 4 >> 2] = i9;
 return;
}
function __ZNK7WebCore9RenderBox21hasRelativeDimensionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 4 >> 2] | 0;
 i1 = HEAP8[i2 + 17 | 0] | 0;
 do {
  if ((i1 << 24 >> 24 | 0) == 10 | (i1 << 24 >> 24 | 0) == 2) {
   i3 = 1;
  } else {
   i4 = HEAP8[i2 + 9 | 0] | 0;
   if ((i4 << 24 >> 24 | 0) == 10 | (i4 << 24 >> 24 | 0) == 2) {
    i3 = 1;
    break;
   }
   i4 = HEAP8[i2 + 49 | 0] | 0;
   if ((i4 << 24 >> 24 | 0) == 10 | (i4 << 24 >> 24 | 0) == 2) {
    i3 = 1;
    break;
   }
   i4 = HEAP8[i2 + 33 | 0] | 0;
   if ((i4 << 24 >> 24 | 0) == 10 | (i4 << 24 >> 24 | 0) == 2) {
    i3 = 1;
    break;
   }
   i4 = HEAP8[i2 + 41 | 0] | 0;
   if ((i4 << 24 >> 24 | 0) == 10 | (i4 << 24 >> 24 | 0) == 2) {
    i3 = 1;
    break;
   }
   i4 = HEAP8[i2 + 25 | 0] | 0;
   i3 = i4 << 24 >> 24 == 2 | i4 << 24 >> 24 == 10;
  }
 } while (0);
 return i3 | 0;
}
function __ZNK7WebCore9RenderBox12clientHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i2 + 56 >> 2] | 0;
 i4 = i2 | 0;
 i5 = i2;
 i6 = i3 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 736 >> 2] & 511](i4) | 0) | 0;
 i3 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 740 >> 2] & 511](i4) | 0) | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 65536 | 0) == 0) {
   i7 = 0;
  } else {
   i4 = i2 + 40 | 0;
   if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i4 >> 2] | 0) | 0) {
    i7 = 0;
    break;
   }
   if ((((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
    i7 = 0;
    break;
   }
   i7 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i4 >> 2] | 0, 0) | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i3 - i7;
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
function __ZNK7WebCore9RenderBox26flipForWritingModeForChildEPKS0_RKNS_11LayoutPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i5 | 0) == 3 | (i5 | 0) == 1)) {
  i5 = i4;
  i6 = i1;
  i7 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i6 + 4 >> 2] = i7;
  return;
 }
 i7 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  i6 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = (HEAP32[i2 + 52 >> 2] | 0) + i7 - (HEAP32[i3 + 52 >> 2] | 0) - (HEAP32[i3 + 44 >> 2] << 1);
  HEAP32[i1 + 4 >> 2] = i6;
  return;
 } else {
  i6 = (HEAP32[i2 + 56 >> 2] | 0) + (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i3 + 56 >> 2] | 0) - (HEAP32[i3 + 48 >> 2] << 1) | 0;
  HEAP32[i1 >> 2] = i7;
  HEAP32[i1 + 4 >> 2] = i6;
  return;
 }
}
function __ZNK7WebCore9RenderBox34hasViewportPercentageLogicalHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i1 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i1 | 0) == 3 | (i1 | 0) == 0) {
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  i4 = i3 + 12 | 0;
  i5 = i3;
 } else {
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  i4 = i3 + 4 | 0;
  i5 = i3;
 }
 if (((HEAP8[i4 + 5 | 0] | 0) - 11 & 255) >>> 0 < 4 >>> 0) {
  i6 = 1;
  return i6 | 0;
 }
 if ((i1 | 0) == 3 | (i1 | 0) == 0) {
  i7 = i5 + 36 | 0;
 } else {
  i7 = i5 + 20 | 0;
 }
 if (((HEAP8[i7 + 5 | 0] | 0) - 11 & 255) >>> 0 < 4 >>> 0) {
  i6 = 1;
  return i6 | 0;
 }
 if ((i1 | 0) == 3 | (i1 | 0) == 0) {
  i8 = i5 + 44 | 0;
 } else {
  i8 = i5 + 28 | 0;
 }
 i6 = ((HEAP8[i8 + 5 | 0] | 0) - 11 & 255) >>> 0 < 4 >>> 0;
 return i6 | 0;
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
function __ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 36 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP8[(__ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i1 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i1 + 40 >> 2] | 0) >>> 30 & 1) | 0) + 5 | 0] | 0;
 if ((i3 << 24 >> 24 | 0) == 10 | (i3 << 24 >> 24 | 0) == 2) {
  i4 = 1;
  return i4 | 0;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP8[(__ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i3 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i3 + 40 >> 2] | 0) >>> 30 & 1) | 0) + 5 | 0] | 0;
 i4 = i2 << 24 >> 24 == 2 | i2 << 24 >> 24 == 10;
 return i4 | 0;
}
function __ZN7WebCore9RenderBoxC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1, i2, i3, i4) {
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
 __ZN7WebCore20RenderBoxModelObjectC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, i4);
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 44 | 0, 0, 32) | 0;
 HEAP32[i1 + 76 >> 2] = -1;
 HEAP32[i1 + 80 >> 2] = -1;
 HEAP32[i1 + 84 >> 2] = 0;
 HEAP32[i1 + 88 >> 2] = 0;
 i4 = i1 + 20 | 0;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | 512;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9RenderBox14paintFillLayerERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceENS_17CompositeOperatorEPNS_13RenderElementE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i10 + 4 >> 2] = 0;
 __ZN7WebCore20RenderBoxModelObject22paintFillLayerExtendedERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxERKNS_10LayoutSizeENS_17CompositeOperatorEPNS_13RenderElementE(i1 | 0, i2, i3, i4, i5, i6, 0, i10, i7, i8);
 STACKTOP = i9;
 return;
}
function __ZN7WebCore9RenderBoxC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1, i2, i3, i4) {
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
 __ZN7WebCore20RenderBoxModelObjectC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, i4);
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 44 | 0, 0, 32) | 0;
 HEAP32[i1 + 76 >> 2] = -1;
 HEAP32[i1 + 80 >> 2] = -1;
 HEAP32[i1 + 84 >> 2] = 0;
 HEAP32[i1 + 88 >> 2] = 0;
 i4 = i1 + 20 | 0;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | 512;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore9RenderBox18flipForWritingModeERKNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0;
 i4 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i4 | 0) == 3 | (i4 | 0) == 1)) {
  i4 = i3;
  i5 = i1;
  i6 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 4 >> 2] = i6;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  d7 = +HEAPF32[i3 + 4 >> 2];
  HEAPF32[i1 >> 2] = +(HEAP32[i2 + 52 >> 2] | 0) - +HEAPF32[i3 >> 2];
  HEAPF32[i1 + 4 >> 2] = d7;
  return;
 } else {
  d7 = +(HEAP32[i2 + 56 >> 2] | 0) - +HEAPF32[i3 + 4 >> 2];
  HEAPF32[i1 >> 2] = +HEAPF32[i3 >> 2];
  HEAPF32[i1 + 4 >> 2] = d7;
  return;
 }
}
function __ZNK7WebCore9RenderBox18flipForWritingModeERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i4 | 0) == 3 | (i4 | 0) == 1)) {
  i4 = i3;
  i5 = i1;
  i6 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 4 >> 2] = i6;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  i6 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = (HEAP32[i2 + 52 >> 2] | 0) - (HEAP32[i3 >> 2] | 0);
  HEAP32[i1 + 4 >> 2] = i6;
  return;
 } else {
  i6 = (HEAP32[i2 + 56 >> 2] | 0) - (HEAP32[i3 + 4 >> 2] | 0) | 0;
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i1 + 4 >> 2] = i6;
  return;
 }
}
function __ZNK7WebCore9RenderBox32visualOverflowRectForPropagationEPNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 824 >> 2] & 127](i1, i2);
 i4 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
 i3 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i4 | 0) == (i3 | 0)) {
  return;
 }
 if ((i3 | 0) == 1 | (i4 | 0) == 1) {
  i5 = i1 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i2 + 52 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) - (HEAP32[i1 + 8 >> 2] | 0);
  return;
 }
 if (!((i3 | 0) == 3 | (i4 | 0) == 3)) {
  return;
 }
 i4 = i1 + 4 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i2 + 56 >> 2] | 0) - (HEAP32[i4 >> 2] | 0) - (HEAP32[i1 + 12 >> 2] | 0);
 return;
}
function __ZNK7WebCore9RenderBox18flipForWritingModeERKNS_10LayoutSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i4 | 0) == 3 | (i4 | 0) == 1)) {
  i4 = i3;
  i5 = i1;
  i6 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 4 >> 2] = i6;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  i6 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = (HEAP32[i2 + 52 >> 2] | 0) - (HEAP32[i3 >> 2] | 0);
  HEAP32[i1 + 4 >> 2] = i6;
  return;
 } else {
  i6 = (HEAP32[i2 + 56 >> 2] | 0) - (HEAP32[i3 + 4 >> 2] | 0) | 0;
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i1 + 4 >> 2] = i6;
  return;
 }
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
function __ZN7WebCore9RenderBox32clearContainingBlockOverrideSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[H_BASE + 1056 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i5, i4) | 0;
 }
 i4 = HEAP32[H_BASE + 1048 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i4, i3) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9RenderBox17clearOverrideSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[H_BASE + 1064 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i5, i4) | 0;
 }
 i4 = HEAP32[H_BASE + 1072 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i4, i3) | 0;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore9RenderBox27isUnsplittableForPaginationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 2048 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if (__ZNK7WebCore9RenderBox32hasUnsplittableScrollingOverflowEv(i1) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 256 >> 2] & 511](i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore9RenderBox13clearOverflowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 88 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) == 0) {
  return;
 }
 i3 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore16RenderFlowThread20clearRegionsOverflowEPKNS_9RenderBoxE(i3, i1);
 return;
}
function __ZNK7WebCore9RenderBox16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 2048 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((i4 | 0) == 0) {
  i7 = (HEAP32[i1 + 56 >> 2] | 0) + (HEAP32[i1 + 60 >> 2] | 0) + (HEAP32[i1 + 68 >> 2] | 0) | 0;
 } else {
  i7 = (HEAP32[i1 + 52 >> 2] | 0) + (HEAP32[i1 + 64 >> 2] | 0) + (HEAP32[i1 + 72 >> 2] | 0) | 0;
 }
 if ((i2 | 0) == 0) {
  i6 = i7;
  return i6 | 0;
 }
 i6 = i7 - ((i7 | 0) / 2 & -1) | 0;
 return i6 | 0;
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
function __ZNK7WebCore9RenderBox18flipForWritingModeENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 1) {
  i6 = i2 + 52 | 0;
 } else if ((i5 | 0) == 3) {
  i6 = i2 + 56 | 0;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  STACKTOP = i4;
  return;
 }
 HEAP32[i1 >> 2] = (HEAP32[i6 >> 2] | 0) - (HEAP32[i3 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 25165824;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) == 0) {
   i5 = 4;
  } else {
   if ((HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 172 >> 2] | 0) == 0 | i4) {
    i5 = 4;
    break;
   }
   i6 = i2 & -2;
  }
 } while (0);
 if ((i5 | 0) == 4) {
  i6 = i4 & 1 | i2;
 }
 __ZNK7WebCore20RenderBoxModelObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1 | 0, i6, i3);
 return;
}
function __ZN7WebCore9RenderBox20deleteLineBoxWrapperEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 84 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
  __ZN7WebCore9InlineBox16removeFromParentEv(i3 | 0);
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) != 0) {
   i4 = i1;
   i5 = 4;
  }
 } else {
  i4 = i3;
  i5 = 4;
 }
 if ((i5 | 0) == 4) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZNK7WebCore9RenderBox19shrinkToAvoidFloatsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 20 | 0;
 do {
  if ((HEAP32[i2 >> 2] & 1024 | 0) != 0) {
   if (__ZNK7WebCore12RenderObject13isHTMLMarqueeEv(i1 | 0) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 972 >> 2] & 511](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 >> 2] & 64 | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 4 >> 2] | 0) + 9 | 0] | 0) == 0;
 return i3 | 0;
}
function __ZNK7WebCore9RenderBox25horizontalScrollbarHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 40 | 0;
 if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i3 >> 2] | 0) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i3 >> 2] | 0, 0) | 0;
 return i2 | 0;
}
function __ZNK7WebCore9RenderBox22verticalScrollbarWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 40 | 0;
 if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i3 >> 2] | 0) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 13 & 7) - 2 | 0) >>> 0 >= 2 >>> 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore11RenderLayer22verticalScrollbarWidthENS_29OverlayScrollbarSizeRelevancyE(HEAP32[i3 >> 2] | 0, 0) | 0;
 return i2 | 0;
}
function __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i3 | 0) == 3 | (i3 | 0) == 1)) {
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i1 + 52 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) - (HEAP32[i2 + 8 >> 2] | 0);
  return;
 } else {
  i3 = i2 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i1 + 56 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) - (HEAP32[i2 + 12 >> 2] | 0);
  return;
 }
}
function __ZNK7WebCore9RenderBox18flipForWritingModeERNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i3 | 0) == 3 | (i3 | 0) == 1)) {
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0) {
  i3 = i2 | 0;
  HEAPF32[i3 >> 2] = +(HEAP32[i1 + 52 >> 2] | 0) - (+HEAPF32[i3 >> 2] + +HEAPF32[i2 + 8 >> 2]);
  return;
 } else {
  i3 = i2 + 4 | 0;
  HEAPF32[i3 >> 2] = +(HEAP32[i1 + 56 >> 2] | 0) - (+HEAPF32[i3 >> 2] + +HEAPF32[i2 + 12 >> 2]);
  return;
 }
}
function __ZNK7WebCore9RenderBox23pixelSnappedClientWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 i3 = i1 | 0;
 i4 = i1;
 i5 = i2 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 744 >> 2] & 511](i3) | 0) | 0;
 i2 = i5 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 748 >> 2] & 511](i3) | 0) | 0;
 i5 = i2 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 908 >> 2] & 511](i1) | 0) | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 744 >> 2] & 511](i3) | 0;
 return i5 | 0;
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
function __ZNK7WebCore9RenderBox10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 if ((HEAP32[i2 + 20 >> 2] & 2048 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = (HEAP32[i2 + 56 >> 2] | 0) + (HEAP32[i2 + 60 >> 2] | 0) + (HEAP32[i2 + 68 >> 2] | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = (HEAP32[i2 + 52 >> 2] | 0) + (HEAP32[i2 + 64 >> 2] | 0) + (HEAP32[i2 + 72 >> 2] | 0);
  return;
 }
}
function __ZN7WebCore9RenderBox13setScrollLeftEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 i1 = (HEAP32[i5 + 16 >> 2] | 0) + (HEAP32[i5 + 116 >> 2] | 0) | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = i1;
 __ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE(i5, i4, 1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9RenderBox12setScrollTopEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 HEAP32[i4 >> 2] = (HEAP32[i5 + 12 >> 2] | 0) + (HEAP32[i5 + 112 >> 2] | 0);
 HEAP32[i4 + 4 >> 2] = i2;
 __ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE(i5, i4, 1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox34fixedElementLaysOutRelativeToFrameERKNS_9FrameViewE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 25165824) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[(__ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i1 | 0, 0, 0) | 0) + 20 >> 2] & 768 | 0) != 768) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore9FrameView34fixedElementsLayoutRelativeToFrameEv(i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore9RenderBox15popContentsClipERNS_9PaintInfoENS_10PaintPhaseERKNS_11LayoutPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore15GraphicsContext7restoreEv(HEAP32[i2 >> 2] | 0);
 if ((i3 | 0) == 1) {
  HEAP32[i2 + 20 >> 2] = 1;
  return;
 } else if ((i3 | 0) == 5) {
  i3 = i2 + 20 | 0;
  HEAP32[i3 >> 2] = 7;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 952 >> 2] & 63](i1, i2, i4);
  HEAP32[i3 >> 2] = 5;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore9RenderBox24clearRenderBoxRegionInfoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 248 >> 2] & 511](i2) | 0) {
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) == 0) {
  return;
 }
 i3 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore16RenderFlowThread25removeRenderBoxRegionInfoEPNS_9RenderBoxE(i3, i1);
 return;
}
function __ZNK7WebCore9RenderBox11clientWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 + 52 >> 2] | 0;
 i4 = i2 | 0;
 i5 = i2;
 i6 = i3 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 744 >> 2] & 511](i4) | 0) | 0;
 i3 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 748 >> 2] & 511](i4) | 0) | 0;
 HEAP32[i1 >> 2] = i3 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i2) | 0);
 return;
}
function __ZNK7WebCore9RenderBox30includeHorizontalScrollbarSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i1 + 40 >> 2] | 0) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7;
 if ((i3 | 0) == 2) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (i3 | 0) == 3;
 return i2 | 0;
}
function __ZNK7WebCore9RenderBox28includeVerticalScrollbarSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i1 + 40 >> 2] | 0) | 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 13 & 7;
 if ((i3 | 0) == 2) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (i3 | 0) == 3;
 return i2 | 0;
}
function __ZN7WebCore9RenderBox48clearOverrideContainingBlockContentLogicalHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[H_BASE + 1048 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i4, i3) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9RenderBoxD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore20RenderBoxModelObjectD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9RenderBox33clearOverrideLogicalContentHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[H_BASE + 1064 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i4, i3) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9RenderBox32clearOverrideLogicalContentWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[H_BASE + 1072 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i4, i3) | 0;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore9RenderBox13canAutoscrollEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 768) {
  i2 = __ZN7WebCore9FrameView12isScrollableEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0;
  return i2 | 0;
 } else {
  i2 = __ZNK7WebCore9RenderBox33canBeScrolledAndHasScrollableAreaEv(i1) | 0;
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore9RenderBox15createInlineBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __Znwj(36) | 0;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i3 + 16 >> 2] = i2;
 HEAPF32[i3 + 20 >> 2] = +0;
 HEAPF32[i3 + 24 >> 2] = +0;
 HEAPF32[i3 + 28 >> 2] = +0;
 HEAP32[i3 + 32 >> 2] = 18432;
 HEAP32[i3 >> 2] = __ZTVN7WebCore16InlineElementBoxE + 8;
 HEAP32[i1 >> 2] = i3;
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
function __ZN7WebCore9RenderBoxD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore20RenderBoxModelObjectD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore9RenderBoxD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore20RenderBoxModelObjectD2Ev(i1 | 0);
 return;
}
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore9RenderBox14dirtyLineBoxesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 84 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if (i2) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
  HEAP32[i3 >> 2] = 0;
  return;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 104 >> 2] & 31](i1 | 0);
  return;
 }
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
function iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 688 >> 2] & 127](i3, i1);
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 736 >> 2] & 511](i1 | 0) | 0;
 STACKTOP = i2;
 return HEAP32[i3 >> 2] | 0;
}
function __ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 684 >> 2] & 127](i3, i1);
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 744 >> 2] & 511](i1 | 0) | 0;
 STACKTOP = i2;
 return HEAP32[i3 >> 2] | 0;
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
function __ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 936 >> 2] & 3](i1, i2, i3, i4, i5, 0);
 return;
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
function __ZNK7WebCore9RenderBox23usesCompositedScrollingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 98304 | 0) != 98304) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore11RenderLayer23usesCompositedScrollingEv(HEAP32[i1 + 40 >> 2] | 0) | 0;
 return i2 | 0;
}
function __ZNK7WebCore9RenderBox10scrollLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 i2 = (HEAP32[i3 + 12 >> 2] | 0) + (HEAP32[i3 + 112 >> 2] | 0) | 0;
 return i2 | 0;
}
function viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9RenderBox9scrollTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 i2 = (HEAP32[i3 + 16 >> 2] | 0) + (HEAP32[i3 + 116 >> 2] | 0) | 0;
 return i2 | 0;
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
function __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i2 + 20 >> 2] & 32 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 1012 >> 2] & 31](i2);
 }
 HEAP32[i1 >> 2] = HEAP32[i2 + 76 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i2 + 20 >> 2] & 32 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 1012 >> 2] & 31](i2);
 }
 HEAP32[i1 >> 2] = HEAP32[i2 + 80 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 40 >> 2] | 0) + 112 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore11RenderLayer18panScrollFromPointERKNS_8IntPointE(i3, i2);
 return;
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
function __ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore11RenderLayer10autoscrollERKNS_8IntPointE(i3, i2);
 return;
}
function __ZN7WebCore11LayoutStateD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 12 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  __ZN7WebCore11LayoutStateD1Ev(i1);
  __ZdlPv(i1 | 0);
  return;
 }
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
function __ZNK7WebCore9RenderBox25cachedSizeForOverflowClipEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 40 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 + 104 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i3 + 108 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox20collapsedMarginAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
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
function __ZN7WebCore9RenderBox20updateLayerTransformEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) == 0) {
  return;
 }
 __ZN7WebCore11RenderLayer15updateTransformEv(HEAP32[i1 + 40 >> 2] | 0);
 return;
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
function dynCall_iiiifi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiifi[i1 & 7](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0) | 0;
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
function __ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
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
function __ZN7WebCore9RenderBox29computePreferredLogicalWidthsEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i1 | 0, 0, 1);
 return;
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
function __ZNK7WebCore20RenderBoxModelObject9borderEndEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle14borderEndWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
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
function __ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
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
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 511](i1) | 0) == 0 | 0;
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
function ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject15innerLineHeightEv(i1 | 0) | 0;
}
function dynCall_iiif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 return FUNCTION_TABLE_iiif[i1 & 1](i2 | 0, i3 | 0, +d4) | 0;
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
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 63](i2 | 0, i3 | 0, i4 | 0);
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
function __ZNK7WebCore9RenderBox13intrinsicSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore9RenderBox11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function b5(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(5);
 return 0;
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
function b10(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(10);
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
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore9RenderBox9marginTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 60 >> 2];
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
function b12(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(12);
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
function b0(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(0);
 return 0;
}
function b2(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(2);
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 511](i2 | 0) | 0;
}
function __ZN7WebCore9RenderBox24repaintOverhangingFloatsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
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
function b1(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(1);
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
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
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
function __ZNK7WebCore12RenderObject18canBeSelectionLeafEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b13(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(13);
 return 0;
}
function __ZNK7WebCore9RenderBox21isSelfCollapsingBlockEv(i1) {
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
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
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
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b6(i1) {
 i1 = i1 | 0;
 abort(6);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b9() {
 abort(9);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiifi = [b0,b0,__ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE,b0,__ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE,b0,b0,b0];
  var FUNCTION_TABLE_viiii = [b1,b1,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b1,__ZN7WebCore9RenderBox17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE,b1,__ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b1,__ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE,b1,__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb,b1,__ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb,b1,viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b1,__ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_viiiii = [b2,b2,__ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb,b2,__ZNK7WebCore9RenderBox10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE,b2,__ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE,b2,__ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb,b2,__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b3,__ZN7WebCore9RenderBox6layoutEv,b3,__ZN7WebCore12RenderObject17updateFromElementEv,b3,__ZN7WebCore9RenderBox15updateFromStyleEv,b3,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b3,__ZN7WebCore9RenderBox15willBeDestroyedEv,b3,__ZN7WebCore9RenderBox29computePreferredLogicalWidthsEv,b3,vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper,b3,__ZN7WebCore9RenderBox18updateLogicalWidthEv,b3,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b3,__ZN7WebCore9RenderBoxD2Ev,b3,__ZN7WebCore9RenderBoxD0Ev,b3,__ZN7WebCore9RenderBox19updateLogicalHeightEv,b3,__ZN7WebCore9RenderBox33markForPaginationRelayoutIfNeededEv
  ,b3,__ZN7WebCore9RenderBox14stopAutoscrollEv,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZNK7WebCore9RenderBox11marginRightEv,b4,__ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE,b4,__ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv,b4,__ZN7WebCore9RenderBox13setScrollLeftEi,b4,__ZNK7WebCore9RenderBox10offsetLeftEv,b4,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b4,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b4,__ZNK7WebCore9RenderBox31offsetFromLogicalTopOfFirstPageEv,b4,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b4,__ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv,b4,__ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv,b4,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv,b4,vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper
  ,b4,__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b4,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv,b4,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b4,vii___ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE__wrapper,b4,__ZN7WebCore9RenderBox15createInlineBoxEv,b4,__ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE,b4,__ZNK7WebCore9RenderBox13intrinsicSizeEv,b4,__ZN7WebCore9RenderBox12setScrollTopEi,b4,__ZNK7WebCore9RenderBox20collapsedMarginAfterEv,b4,__ZNK7WebCore9RenderBox9offsetTopEv,b4,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b4,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b4,__ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv,b4,__ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE
  ,b4,__ZNK7WebCore9RenderBox21availableLogicalWidthEv,b4,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv,b4,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b4,__ZNK7WebCore9RenderBox11offsetWidthEv,b4,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b4,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b4,__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv,b4,__ZNK7WebCore9RenderBox9marginTopEv,b4,__ZNK7WebCore9RenderBox18visualOverflowRectEv,b4,__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b4,vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv,b4,__ZNK7WebCore9RenderBox17borderBoundingBoxEv,b4,__ZN7WebCore9RenderBox24repaintOverhangingFloatsEb
  ,b4,__ZNK7WebCore9RenderBox12marginBottomEv,b4,__ZNK7WebCore9RenderBox10marginLeftEv,b4,__ZNK7WebCore9RenderBox12offsetHeightEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiiiiii = [b5,b5,__ZN7WebCore9RenderBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b5];
  var FUNCTION_TABLE_ii = [b6,b6,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b6,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b6,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b6,__ZNK7WebCore12RenderObject10isRubyTextEv,b6,__ZNK7WebCore12RenderObject6isRubyEv,b6,__ZNK7WebCore9RenderBox9scrollTopEv,b6,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b6,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b6,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b6,__ZNK7WebCore12RenderObject14isTableCaptionEv,b6,__ZNK7WebCore12RenderObject8isWidgetEv,b6,__ZNK7WebCore12RenderObject11isTextFieldEv,b6,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b6,__ZNK7WebCore13RenderElement13lastChildSlowEv
  ,b6,__ZNK7WebCore20RenderBoxModelObject11borderRightEv,b6,__ZNK7WebCore20RenderBoxModelObject9borderEndEv,b6,ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper,b6,__ZNK7WebCore9RenderBox10scrollLeftEv,b6,__ZNK7WebCore12RenderObject9isSVGRootEv,b6,__ZNK7WebCore12RenderObject7isFrameEv,b6,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b6,__ZNK7WebCore20RenderBoxModelObject12borderBottomEv,b6,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b6,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b6,__ZNK7WebCore12RenderObject7isMeterEv,b6,__ZNK7WebCore12RenderObject14isSVGContainerEv,b6,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b6,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b6,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv
  ,b6,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b6,__ZNK7WebCore12RenderObject7isQuoteEv,b6,__ZNK7WebCore12RenderObject10isListItemEv,b6,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b6,__ZNK7WebCore12RenderObject10isSVGImageEv,b6,__ZNK7WebCore9RenderBox17firstLineBaselineEv,b6,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b6,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b6,__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv,b6,__ZNK7WebCore12RenderObject16isRenderTableColEv,b6,__ZNK7WebCore12RenderObject7isVideoEv,b6,__ZNK7WebCore12RenderObject10isProgressEv,b6,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b6,__ZNK7WebCore12RenderObject13isCombineTextEv,b6,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv
  ,b6,__ZNK7WebCore12RenderObject5isWBREv,b6,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b6,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b6,__ZNK7WebCore13RenderElement14firstChildSlowEv,b6,__ZNK7WebCore9RenderBox22verticalScrollbarWidthEv,b6,__ZNK7WebCore12RenderObject10isTextAreaEv,b6,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b6,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b6,__ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv,b6,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b6,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b6,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b6,__ZNK7WebCore12RenderObject9isReplicaEv,b6,__ZNK7WebCore9RenderBox14hasControlClipEv,b6,__ZNK7WebCore12RenderObject7isMediaEv
  ,b6,__ZNK7WebCore12RenderObject10isSVGShapeEv,b6,__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv,b6,__ZNK7WebCore12RenderObject14isRenderButtonEv,b6,__ZNK7WebCore12RenderObject8isSliderEv,b6,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b6,__ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv,b6,__ZNK7WebCore12RenderObject8isCanvasEv,b6,__ZNK7WebCore12RenderObject10isMenuListEv,b6,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b6,ii___ZNK7WebCore13RenderElement13hoverAncestorEv__wrapper,b6,__ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv,b6,__ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv,b6,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper,b6,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b6,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper
  ,b6,__ZNK7WebCore12RenderObject13isSliderThumbEv,b6,__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv,b6,__ZNK7WebCore12RenderObject13isTextControlEv,b6,__ZNK7WebCore12RenderObject9isSVGTextEv,b6,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b6,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b6,__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv,b6,__ZNK7WebCore12RenderObject11isTableCellEv,b6,__ZNK7WebCore12RenderObject12isRenderGridEv,b6,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b6,__ZNK7WebCore12RenderObject9isListBoxEv,b6,__ZNK7WebCore12RenderObject9isSVGPathEv,b6,__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv,b6,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b6,__ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv
  ,b6,__ZNK7WebCore12RenderObject13isRenderImageEv,b6,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b6,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b6,__ZNK7WebCore9RenderBox11scrollWidthEv,b6,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b6,__ZNK7WebCore12RenderObject6lengthEv,b6,__ZNK7WebCore12RenderObject10isTableRowEv,b6,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject10isFrameSetEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderAfterEv,b6,__ZNK7WebCore9RenderBox13requiresLayerEv,b6,__ZNK7WebCore12RenderObject10isFieldsetEv,b6,__ZNK7WebCore12RenderObject11isSVGInlineEv,b6,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b6,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv
  ,b6,__ZNK7WebCore9RenderBox21hasRelativeDimensionsEv,b6,__ZNK7WebCore12RenderObject9isRubyRunEv,b6,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b6,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b6,__ZNK7WebCore12RenderObject10isRubyBaseEv,b6,__ZNK7WebCore12RenderObject14isRenderRegionEv,b6,__ZNK7WebCore9RenderBox12avoidsFloatsEv,b6,__ZNK7WebCore9RenderBox12scrollHeightEv,b6,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b6,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b6,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b6,__ZNK7WebCore20RenderBoxModelObject9borderTopEv,b6,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b6,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject7isImageEv
  ,b6,__ZNK7WebCore12RenderObject9isCounterEv,b6,__ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv,b6,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b6,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b6,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b6,__ZNK7WebCore20RenderBoxModelObject10borderLeftEv,b6,__ZNK7WebCore12RenderObject7isEmptyEv,b6,__ZNK7WebCore9RenderBox21isSelfCollapsingBlockEv,b6,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b6,__ZNK7WebCore12RenderObject12isListMarkerEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderStartEv,b6,__ZNK7WebCore12RenderObject7isTableEv,b6,__ZNK7WebCore12RenderObject14isTableSectionEv,b6,__ZNK7WebCore12RenderObject19virtualContinuationEv,b6,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_iiii = [b7,b7,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b7,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b7,iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper,b7,__ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE,b7,__ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,__ZNK7WebCore9RenderBox29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_,b8,__ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE,b8,__ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE,b8,__ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE,b8,__ZN7WebCore9RenderBox12imageChangedEPKvPKNS_7IntRectE,b8,__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE,b8,__ZNK7WebCore9RenderBox13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb,b8,viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE,b8,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b8,viii___ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2___wrapper,b8,__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b8,__ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE,b8,__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE
  ,b8,__ZN7WebCore9RenderBox11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE,b8,__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_,b8,__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE,b8,__ZN7WebCore9RenderBox14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b8,__ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE,b8,__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE,b8,__ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE,b8,__ZNK7WebCore9RenderBox13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE,b8,__ZN7WebCore9RenderBox16positionForPointERKNS_11LayoutPointE,b8,__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_v = [b9,b9,v____cxa_pure_virtual__wrapper,b9];
  var FUNCTION_TABLE_viiiiii = [b10,b10,__ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE,b10];
  var FUNCTION_TABLE_iii = [b11,b11,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b11,__ZNK7WebCore9RenderBox19inlineBlockBaselineENS_17LineDirectionModeE,b11,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b11,__ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE,b11,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b11,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b11,__ZNK7WebCore9RenderBox32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE,b11];
  var FUNCTION_TABLE_iiiiii = [b12,b12,__ZNK7WebCore9RenderBox16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE,b12,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b12,b12,b12];
  var FUNCTION_TABLE_iiif = [b13,b13];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiifi: dynCall_iiiifi, dynCall_viiii: dynCall_viiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_iiif: dynCall_iiif };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiifi": invoke_iiiifi, "invoke_viiii": invoke_viiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_iiif": invoke_iiif, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZTVN7WebCore16ShapeOutsideInfoE": __ZTVN7WebCore16ShapeOutsideInfoE, "__ZTVN7WebCore16InlineElementBoxE": __ZTVN7WebCore16InlineElementBoxE, "__ZN7WebCore9HTMLNames9buttonTagE": __ZN7WebCore9HTMLNames9buttonTagE, "__ZN7WebCore9HTMLNames11textareaTagE": __ZN7WebCore9HTMLNames11textareaTagE, "__ZN7WebCore9HTMLNames9selectTagE": __ZN7WebCore9HTMLNames9selectTagE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames9legendTagE": __ZN7WebCore9HTMLNames9legendTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiifi = Module["dynCall_iiiifi"] = asm["dynCall_iiiifi"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
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
var dynCall_iiif = Module["dynCall_iiif"] = asm["dynCall_iiif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore9RenderBox11marginRightEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore9RenderBox26getBackgroundPaintedExtentERNS_10LayoutRectE","__ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv","__ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZN7WebCoreL27computeInlineStaticDistanceERNS_6LengthES1_PKNS_9RenderBoxEPKNS_20RenderBoxModelObjectENS_10LayoutUnitEPNS_12RenderRegionE","__ZNK7WebCore9RenderBox18flipForWritingModeERKNS_10FloatPointE","__ZN7WebCore12RenderObject17updateFromElementEv","__ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv","__ZNK7WebCore9RenderBox44computeContentAndScrollbarLogicalHeightUsingERKNS_6LengthE","__ZNK7WebCore9RenderBox29overflowRectForPaintRejectionEPNS_12RenderRegionE","__ZN7WebCore9RenderBox15updateFromStyleEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZN7WebCore9RenderBoxC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj","__ZN7WebCore9RenderBox48clearOverrideContainingBlockContentLogicalHeightEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZNK7WebCore9RenderBox30computePositionedLogicalHeightERNS0_27LogicalExtentComputedValuesE","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZNK7WebCore11RenderStyle21hasBorderImageOutsetsEv","__ZNK7WebCore9RenderBox41perpendicularContainingBlockLogicalHeightEv","__ZNK7WebCore20RenderBoxModelObject11borderAfterEv","__ZNK7WebCore9RenderBox18absoluteContentBoxEv","__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZNK7WebCore9RenderBox46skipContainingBlockForPercentHeightCalculationEPKS0_","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore9RenderBox37computePositionedLogicalWidthReplacedERNS0_27LogicalExtentComputedValuesE","__ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE","__ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE","__ZNK7WebCore9RenderBox17hasOverrideHeightEv","__ZNK7WebCore9RenderBox48computeReplacedLogicalWidthRespectingMinMaxWidthENS_10LayoutUnitENS_22ShouldComputePreferredE","__ZNK7WebCore9RenderBox21clientBoxRectInRegionEPNS_12RenderRegionE","__ZNK7WebCore9RenderBox30constrainLogicalHeightByMinMaxENS_10LayoutUnitE","__ZNK7WebCore9RenderBox25applyVisualEffectOverflowERKNS_10LayoutRectE","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore9RenderBox39hasOverrideContainingBlockLogicalHeightEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore9RenderBox18flipForWritingModeERKNS_10LayoutSizeE","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZN7WebCore9RenderBoxD2Ev","__ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv","__ZN7WebCore9RenderBox14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore9RenderBox12marginBottomEv","__ZNK7WebCore9RenderBox11scrollWidthEv","__ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","__ZNK7WebCore9RenderBox13requiresLayerEv","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore9RenderBox13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE","__ZNK7WebCore9RenderBox21hasRelativeDimensionsEv","__ZNK7WebCore9RenderBox20fillAvailableMeasureENS_10LayoutUnitE","__ZNK7WebCore9RenderBox39logicalVisualOverflowRectForPropagationEPNS_11RenderStyleE","__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv","__ZNK7WebCore9RenderBox32layoutOverflowRectForPropagationEPNS_11RenderStyleE","__ZNK7WebCore9RenderBox21scrolledContentOffsetEv","__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv","__ZNK7WebCore9RenderBox40adjustBorderBoxLogicalHeightForBoxSizingENS_10LayoutUnitE","__ZN7WebCore9RenderBox32clearOverrideLogicalContentWidthEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZN7WebCore9RenderBox38updateShapeOutsideInfoAfterStyleChangeERKNS_11RenderStyleEPS2_","__ZNK7WebCore9RenderBox40applyCachedClipAndScrollOffsetForRepaintERNS_10LayoutRectE","__ZNK7WebCore12RenderObject7isImageEv","__ZN7WebCore9RenderBox17addLayoutOverflowERKNS_10LayoutRectE","__ZN7WebCore9RenderBox33clearOverrideLogicalContentHeightEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN7WebCore9RenderBox33markForPaginationRelayoutIfNeededEv","__ZNK7WebCore9RenderBox19shrinkToAvoidFloatsEv","__ZNK7WebCore9RenderBox12scrollHeightEv","__ZN7WebCore9RenderBox24repaintOverhangingFloatsEb","__ZN7WebCore9RenderBox15paintMaskImagesERKNS_9PaintInfoERKNS_10LayoutRectE","__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore9RenderBox9scrollTopEv","__ZNK7WebCore9RenderBox29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZNK7WebCore9RenderBox39logicalLayoutOverflowRectForPropagationEPNS_11RenderStyleE","__ZNK7WebCore9RenderBox19stretchesToViewportEv","__ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_16ShapeOutsideInfoENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_","__ZNK7WebCore9RenderBox10offsetLeftEv","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore9RenderBox25horizontalScrollbarHeightEv","__ZNK7WebCore9RenderBox19clientLogicalHeightEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZNK7WebCore9RenderBox21availableLogicalWidthEv","__ZNK7WebCore9RenderBox18clientLogicalWidthEv","__ZN7WebCore9RenderBox15positionLineBoxERNS_16InlineElementBoxE","__ZNK7WebCore9RenderBox25clampToStartAndEndRegionsEPNS_12RenderRegionE","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore9RenderBox15willBeDestroyedEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZN7WebCore9RenderBox46setOverrideContainingBlockContentLogicalHeightENS_10LayoutUnitE","__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv","__ZNK7WebCore9RenderBox28includeVerticalScrollbarSizeEv","__ZN7WebCore9RenderBox23addVisualEffectOverflowEv","__ZNK7WebCore9RenderBox20collapsedMarginAfterEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore9RenderBox39adjustBorderBoxLogicalWidthForBoxSizingENS_10LayoutUnitE","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject16isAnonymousBlockEv","__ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE","__ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb","__ZNK7WebCore9RenderBox9marginTopEv","__ZNK7WebCore9RenderBox22verticalScrollbarWidthEv","__ZN7WebCore9RenderBox12maskClipRectEv","__ZNK7WebCore9RenderBox27isUnsplittableForPaginationEv","__ZN7WebCore9RenderBox18findAutoscrollableEPNS_12RenderObjectE","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore9RenderBox16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE","__ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore9RenderBox13reflectedRectERKNS_10LayoutRectE","__ZNK7WebCore9RenderBox14hasControlClipEv","__ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS1_10LayoutUnitEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore9RenderBox15createInlineBoxEv","__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv","__ZNK7WebCore9RenderBox50computeReplacedLogicalHeightRespectingMinMaxHeightENS_10LayoutUnitE","__ZNK7WebCore9RenderBox13canAutoscrollEv","__ZNK7WebCore9RenderBox33determineBackgroundBleedAvoidanceEPNS_15GraphicsContextE","__ZN7WebCore9RenderBox14dirtyLineBoxesEb","__ZNK7WebCore9RenderBox16reflectionOffsetEv","__ZNK7WebCore9RenderBox12avoidsFloatsEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv","__ZN7WebCore9RenderBox20addOverflowFromChildEPS0_RKNS_10LayoutSizeE","__ZNK7WebCore9RenderBox17firstLineBaselineEv","__ZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE10ensureInfoERKS1_","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore9RenderBox11clientWidthEv","__ZNK7WebCore9RenderBox32visualOverflowRectForPropagationEPNS_11RenderStyleE","__ZNK7WebCore9RenderBox24pixelSnappedClientHeightEv","__ZNK7WebCore12RenderObject11isTableCellEv","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZNK7WebCore9RenderBox34fixedElementLaysOutRelativeToFrameERKNS_9FrameViewE","__ZNK7WebCore9RenderBox11offsetWidthEv","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore9RenderBox31instrinsicScrollbarLogicalWidthEv","__ZNK7WebCore9RenderBox28overrideLogicalContentHeightEv","__ZNK7WebCore11RenderBlock26startOffsetForLineInRegionENS_10LayoutUnitEbPNS_12RenderRegionES1_","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore20RenderBoxModelObject11borderStartEv","__ZN7WebCore9RenderBox17addVisualOverflowERKNS_10LayoutRectE","__ZN7WebCore9RenderBoxD0Ev","__ZNK7WebCore9RenderBox13reflectionBoxEv","__ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE","__ZNK7WebCore9RenderBox35computePositionedLogicalHeightUsingENS_6LengthEPKNS_20RenderBoxModelObjectENS_10LayoutUnitES5_S5_S1_S1_S1_S1_RNS0_27LogicalExtentComputedValuesE","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZNK7WebCore9RenderBox18flipForWritingModeERNS_9FloatRectE","__ZNK7WebCore9RenderBox27computeContentLogicalHeightERKNS_6LengthE","__ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE","__ZNK7WebCore9RenderBox31shrinkLogicalWidthToAvoidFloatsENS_10LayoutUnitES1_PKNS_11RenderBlockEPNS_12RenderRegionE","__ZN7WebCore9RenderBox16pushContentsClipERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore9RenderBox23usesCompositedScrollingEv","__ZNK7WebCore20RenderBoxModelObject10borderLeftEv","__ZNK7WebCore12RenderObject7isTableEv","__ZNK7WebCore9RenderBox30computePercentageLogicalHeightERKNS_6LengthE","__ZNK7WebCore9RenderBox18flipForWritingModeENS_10LayoutUnitE","_strlen","__ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE","__ZN7WebCoreL33computeLogicalTopPositionedOffsetERNS_10LayoutUnitEPKNS_9RenderBoxES0_PKNS_20RenderBoxModelObjectES0_","__ZNK7WebCore12RenderObject6isRubyEv","__ZNK7WebCore9RenderBox29sizesLogicalWidthToFitContentENS_8SizeTypeE","__ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv","__ZN7WebCore9RenderBox13setScrollLeftEi","__ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE","__ZNK7WebCore9RenderBox41adjustContentBoxLogicalHeightForBoxSizingENS_10LayoutUnitE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore9RenderBox33computeIntrinsicLogicalWidthUsingENS_6LengthENS_10LayoutUnitES2_","__ZNK7WebCore9RenderBox25cachedSizeForOverflowClipEv","__ZNK7WebCore20RenderBoxModelObject11borderRightEv","__ZNK7WebCore9RenderBox10scrollLeftEv","__ZN7WebCore9RenderBox17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore9RenderBox14paddingBoxRectEv","__ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_16ShapeOutsideInfoENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EES4_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SC_SE_SG_SM_SJ_EEEEOT0_OT1_","__ZN7WebCore9RenderBox24clearRenderBoxRegionInfoEv","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZN7WebCore9RenderBox38outermostBlockContainingFloatingObjectEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb","__ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore12RenderObject7isVideoEv","__ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE","__ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE","__ZNK7WebCore9RenderBox29computeInlineDirectionMarginsEPNS_11RenderBlockENS_10LayoutUnitES3_RS3_S4_","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZNK7WebCore9RenderBox33computeReplacedLogicalHeightUsingENS_6LengthE","__ZN7WebCore10RenderView15pushLayoutStateERNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore9RenderBox13contentHeightEv","__ZNK7WebCore9RenderBox38containingBlockLogicalHeightForContentENS_26AvailableLogicalHeightTypeE","__ZNK7WebCore9RenderBox13clientBoxRectEv","__ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore9RenderBox30includeHorizontalScrollbarSizeEv","__ZNK7WebCore9RenderBox13intrinsicSizeEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS1_10LayoutUnitENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_","__ZNK7WebCore9RenderBox27overrideLogicalContentWidthEv","__ZN7WebCore9RenderBox30setOverrideLogicalContentWidthENS_10LayoutUnitE","__ZNK7WebCore9RenderBox27availableLogicalHeightUsingERKNS_6LengthENS_26AvailableLogicalHeightTypeE","__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb","__ZN7WebCore9RenderBox30splitAnonymousBoxesAroundChildEPNS_12RenderObjectE","__ZNK7WebCore9RenderBox34flipForWritingModeIncludingColumnsERKNS_11LayoutPointE","__ZN7WebCore9RenderBox18updateLogicalWidthEv","__ZNK7WebCore9RenderBox16hasOverrideWidthEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv","__ZNK7WebCore9RenderBox32computeReplacedLogicalWidthUsingENS_6LengthE","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZN7WebCore9RenderBox11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore9RenderBox18flipForWritingModeERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore9RenderBox19renderBoxRegionInfoEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE","__ZNK7WebCore9RenderBox27backgroundHasOpaqueTopLayerEv","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore9RenderBox21topLeftLocationOffsetEv","__ZN7WebCore9RenderBox45setOverrideContainingBlockContentLogicalWidthENS_10LayoutUnitE","__ZNK7WebCore9RenderBox12clientHeightEv","__ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZN7WebCore9RenderBox31setOverrideLogicalContentHeightENS_10LayoutUnitE","__ZN7WebCore9RenderBox15popContentsClipERNS_9PaintInfoENS_10PaintPhaseERKNS_11LayoutPointE","__ZNK7WebCore9RenderBox15topLeftLocationEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZN7WebCore9RenderBox34computeAndSetBlockDirectionMarginsEPKNS_11RenderBlockE","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore20RenderBoxModelObject9borderTopEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZNK7WebCore9RenderBox32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE","__ZN7WebCore9RenderBox15paintFillLayersERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceENS_17CompositeOperatorEPNS_13RenderElementE","__ZN7WebCore9RenderBox25repaintLayerRectsForImageEPKvPKNS_9FillLayerEb","__ZNK7WebCore9RenderBox17borderBoundingBoxEv","__ZNK7WebCore12RenderObject19virtualContinuationEv","__ZN7WebCore9RenderBox44percentageLogicalHeightIsResolvableFromBlockEPKNS_11RenderBlockEb","__ZN7WebCore9RenderBox14stopAutoscrollEv","__ZNK7WebCore9RenderBox20fillAvailableMeasureENS_10LayoutUnitERS1_S2_","__ZNK7WebCore9RenderBox10marginLeftEv","__ZNK7WebCore9RenderBox12offsetHeightEv","__ZN7WebCore9RenderBox20deleteLineBoxWrapperEv","__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE","__ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE","__ZNK7WebCore9RenderBox28calculateAutoscrollDirectionERKNS_8IntPointE","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZN7WebCore9RenderBox8clipRectERKNS_11LayoutPointEPNS_12RenderRegionE","__ZN7WebCore9RenderBox6layoutEv","__ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv","__ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","_memcpy","__ZNK7WebCore9RenderBox32computeLogicalWidthInRegionUsingENS_8SizeTypeENS_6LengthENS_10LayoutUnitEPKNS_11RenderBlockEPNS_12RenderRegionE","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore9RenderBox11borderRadiiEv","__ZNK7WebCore9RenderBox31offsetFromLogicalTopOfFirstPageEv","__ZNK7WebCore20RenderBoxModelObject12borderBottomEv","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZNK7WebCore9RenderBox38hasOverrideContainingBlockLogicalWidthEv","__ZN7WebCore9RenderBoxC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj","__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE","__ZN7WebCore9RenderBox29computePreferredLogicalWidthsEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZN7WebCore9RenderBox12imageChangedEPKvPKNS_7IntRectE","__ZN7WebCore9RenderBox26repaintDuringLayoutIfMovedERKNS_10LayoutRectE","__ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv","__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv","__ZNK7WebCore9RenderBox40constrainContentBoxLogicalHeightByMinMaxENS_10LayoutUnitE","__ZNK7WebCore12RenderObject10isProgressEv","__ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE","__ZNK7WebCore9RenderBox34hasViewportPercentageLogicalHeightEv","__ZNK7WebCore9RenderBox19inlineBlockBaselineENS_17LineDirectionModeE","__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_","__ZNK7WebCore9RenderBox13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb","__ZN7WebCore9RenderBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZNK7WebCore9RenderBox19absoluteContentQuadEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZN7WebCore11LayoutStateD1Ev","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZNK7WebCore9RenderBox37constrainLogicalWidthInRegionByMinMaxENS_10LayoutUnitES1_PNS_11RenderBlockEPNS_12RenderRegionE","__ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE","__ZNK7WebCore9RenderBox25computeLogicalHeightUsingERKNS_6LengthE","__ZNK7WebCore9RenderBox45containingBlockLogicalWidthForContentInRegionEPNS_12RenderRegionE","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZNK7WebCore9RenderBox40containingBlockLogicalWidthForPositionedEPKNS_20RenderBoxModelObjectEPNS_12RenderRegionEb","__ZN7WebCore9RenderBox45removeFloatingOrPositionedChildFromBlockListsEv","__ZNK7WebCore9RenderBox41containingBlockAvailableLineWidthInRegionEPNS_12RenderRegionE","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore9RenderBox26flipForWritingModeForChildEPKS0_RKNS_11LayoutPointE","__ZNK7WebCore9RenderBox9offsetTopEv","__ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv","__ZNK7WebCore9RenderBox29computePositionedLogicalWidthERNS0_27LogicalExtentComputedValuesEPNS_12RenderRegionE","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv","__ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE","__ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE","__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE","__ZN7WebCore9RenderBox17clearOverrideSizeEv","_memset","__ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS1_10LayoutUnitEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE","__ZNK7WebCore9RenderBox10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE","__ZNK7WebCore9RenderBox32hasUnsplittableScrollingOverflowEv","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE10removeInfoERKS1_","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore9RenderBox23pixelSnappedClientWidthEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore9RenderBox13clearOverflowEv","__ZN7WebCore9RenderBox20updateLayerTransformEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZN7WebCore9RenderBox12setScrollTopEi","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZN7WebCore9RenderBox19updateLogicalHeightEv","__ZNK7WebCore20RenderBoxModelObject9borderEndEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore9RenderBox27computeLogicalWidthInRegionERNS0_27LogicalExtentComputedValuesEPNS_12RenderRegionE","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZNK7WebCore9RenderBox27enclosingFloatPaintingLayerEv","__ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE","__ZNK7WebCore9RenderBox18visualOverflowRectEv","__ZNK7WebCore9RenderBox34computePositionedLogicalWidthUsingENS_6LengthEPKNS_20RenderBoxModelObjectENS_13TextDirectionENS_10LayoutUnitES6_S1_S1_S1_S1_RNS0_27LogicalExtentComputedValuesE","__ZNK7WebCore9RenderBox43overrideContainingBlockContentLogicalHeightEv","__ZNK7WebCore9RenderBox38computePositionedLogicalHeightReplacedERNS0_27LogicalExtentComputedValuesE","__ZNK7WebCore9RenderBox42overrideContainingBlockContentLogicalWidthEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore11RenderBlock24endOffsetForLineInRegionENS_10LayoutUnitEbPNS_12RenderRegionES1_","__ZNK7WebCore9RenderBox28computeBlockDirectionMarginsEPKNS_11RenderBlockERNS_10LayoutUnitES5_","__ZN7WebCore9RenderBox14paintFillLayerERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceENS_17CompositeOperatorEPNS_13RenderElementE","__ZN7WebCore9RenderBox15paintBackgroundERKNS_9PaintInfoERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceE","__ZN7WebCore9RenderBox32clearContainingBlockOverrideSizeEv","__ZNK7WebCore12RenderObject9isCounterEv","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore9RenderBox22paintRootBoxFillLayersERKNS_9PaintInfoE","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZNK7WebCore9RenderBox21isSelfCollapsingBlockEv","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE","__ZNK7WebCore9RenderBox41containingBlockLogicalHeightForPositionedEPKNS_20RenderBoxModelObjectEb","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZNK7WebCore9RenderBox33canBeScrolledAndHasScrollableAreaEv","__ZN7WebCore9RenderBox16positionForPointERKNS_11LayoutPointE"]

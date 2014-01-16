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
H_BASE = parentModule["_malloc"](1224 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1224;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore10RenderViewC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore10RenderViewD1Ev;
/* memory initializer */ allocate([82,101,110,100,101,114,86,105,101,119,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  try {
    Module["dynCall_viiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZTVN7WebCore10RenderViewE=(H_BASE+48)|0;
  var __ZTVN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalINS_10LayoutUnitEPNS_14FloatingObjectEEEE4NodeEEE=(H_BASE+24)|0;
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
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_iiiifi=env.invoke_iiiifi;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore10RenderView12setSelectionEPNS_12RenderObjectEiS2_iNS0_20SelectionRepaintModeE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 512 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i7 + 32 | 0;
 i11 = i7 + 48 | 0;
 i12 = i7 + 64 | 0;
 i13 = i7 + 80 | 0;
 i14 = i7 + 96 | 0;
 i15 = i7 + 112 | 0;
 i16 = i7 + 128 | 0;
 i17 = i7 + 144 | 0;
 i18 = i7 + 160 | 0;
 i19 = i7 + 176 | 0;
 i20 = i7 + 192 | 0;
 i21 = i7 + 216 | 0;
 i22 = i7 + 240 | 0;
 i23 = i7 + 264 | 0;
 i24 = i7 + 288 | 0;
 i25 = i7 + 296 | 0;
 i26 = i7 + 304 | 0;
 i27 = i7 + 320 | 0;
 i28 = i7 + 328 | 0;
 i29 = i7 + 336 | 0;
 i30 = i7 + 352 | 0;
 i31 = i7 + 360 | 0;
 i32 = i7 + 368 | 0;
 i33 = i7 + 384 | 0;
 i34 = i7 + 392 | 0;
 i35 = i7 + 400 | 0;
 i36 = i7 + 416 | 0;
 i37 = i7 + 464 | 0;
 i38 = (i2 | 0) != 0;
 i39 = (i4 | 0) == 0;
 if (i38 & i39) {
  STACKTOP = i7;
  return;
 }
 i40 = (i4 | 0) != 0;
 if (!(i38 | i40 ^ 1)) {
  STACKTOP = i7;
  return;
 }
 i41 = i1 + 224 | 0;
 i42 = HEAP8[i41] & 1;
 i43 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 468 >> 2] | 0) + 84 >> 2] | 0) == 1;
 i44 = i43 & 1;
 HEAP8[i41] = i43 & 1;
 i43 = i1 + 120 | 0;
 i41 = HEAP32[i43 >> 2] | 0;
 i45 = HEAP32[i1 + 128 >> 2] | 0;
 do {
  if ((i41 | 0) == (i2 | 0) & (i45 | 0) == (i3 | 0)) {
   if ((HEAP32[i1 + 124 >> 2] | 0) != (i4 | 0)) {
    i46 = i3;
    break;
   }
   if ((HEAP32[i1 + 132 >> 2] | 0) != (i5 | 0) | (i42 | 0) != (i44 | 0)) {
    i46 = i3;
    break;
   }
   STACKTOP = i7;
   return;
  } else {
   i46 = i45;
  }
 } while (0);
 i45 = i1 + 128 | 0;
 i44 = i1 + 132 | 0;
 i42 = HEAP32[i44 >> 2] | 0;
 _memset(i20 | 0, 0, 20) | 0;
 _memset(i21 | 0, 0, 20) | 0;
 _memset(i22 | 0, 0, 20) | 0;
 _memset(i23 | 0, 0, 20) | 0;
 HEAP32[i24 >> 2] = i41;
 i47 = i1 + 124 | 0;
 i48 = HEAP32[i47 >> 2] | 0;
 do {
  if ((i48 | 0) == 0) {
   i49 = 0;
  } else {
   i50 = __ZNK7WebCore12RenderObject7childAtEj(i48, i42) | 0;
   if ((i50 | 0) != 0) {
    i49 = i50;
    break;
   }
   i49 = __ZNK7WebCore12RenderObject27nextInPreOrderAfterChildrenEv(i48) | 0;
  }
 } while (0);
 L16 : do {
  if ((i41 | 0) == 0 | (i41 | 0) == (i49 | 0)) {
   i51 = 0;
   i52 = i20 | 0;
   i53 = i20 + 4 | 0;
   i54 = i20 + 12 | 0;
  } else {
   i48 = i25 | 0;
   i50 = i20 | 0;
   i55 = i26 + 8 | 0;
   i56 = i26 | 0;
   i57 = (i6 | 0) == 0;
   i58 = i22 | 0;
   i59 = i29 | 0;
   i60 = (i49 | 0) != 0;
   i61 = i60 & 1;
   i62 = 0;
   i63 = i41;
   L19 : while (1) {
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i63 >> 2] | 0) + 536 >> 2] & 511](i63) | 0) {
      i64 = 15;
     } else {
      if ((i63 | 0) == (HEAP32[i43 >> 2] | 0)) {
       i64 = 15;
       break;
      }
      if ((i63 | 0) == (HEAP32[i47 >> 2] | 0)) {
       i64 = 15;
      } else {
       i65 = i63;
      }
     }
    } while (0);
    L24 : do {
     if ((i64 | 0) == 15) {
      i64 = 0;
      i66 = i63 + 20 | 0;
      if ((HEAP32[i66 >> 2] & 234881024 | 0) == 0) {
       i65 = i63;
       break;
      }
      i67 = __ZN3WTF10fastMallocEj(28) | 0;
      HEAP32[i67 >> 2] = i63;
      i68 = i67 + 4 | 0;
      HEAP32[i68 >> 2] = __ZNK7WebCore12RenderObject19containerForRepaintEv(i63) | 0;
      HEAP32[i67 + 8 >> 2] = (HEAP32[i66 >> 2] | 0) >>> 25 & 7;
      i66 = i67 + 12 | 0;
      if (__ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv(i63) | 0) {
       FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i63 >> 2] | 0) + 532 >> 2] & 31](i66, i63, HEAP32[i68 >> 2] | 0, 1);
      } else {
       _memset(i66 | 0, 0, 16) | 0;
      }
      HEAP32[i48 >> 2] = i67;
      __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_NS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i26, i50, i24, i25);
      do {
       if ((HEAP8[i55] & 1) == 0) {
        i67 = (HEAP32[i56 >> 2] | 0) + 4 | 0;
        i66 = HEAP32[i67 >> 2] | 0;
        i68 = HEAP32[i48 >> 2] | 0;
        HEAP32[i48 >> 2] = 0;
        HEAP32[i67 >> 2] = i68;
        if ((i66 | 0) == 0) {
         break;
        }
        __ZN3WTF8fastFreeEPv(i66);
       } else {
        i66 = HEAP32[i48 >> 2] | 0;
        if ((i66 | 0) == 0) {
         break;
        }
        __ZN3WTF8fastFreeEPv(i66);
       }
      } while (0);
      i66 = HEAP32[i24 >> 2] | 0;
      if (!i57) {
       i65 = i66;
       break;
      }
      i68 = __ZNK7WebCore12RenderObject15containingBlockEv(i66) | 0;
      HEAP32[i27 >> 2] = i68;
      if ((i68 | 0) == 0) {
       i65 = i66;
       break;
      } else {
       i69 = i68;
      }
      while (1) {
       if ((HEAP32[i69 + 20 >> 2] & 768 | 0) == 768) {
        i65 = i66;
        break L24;
       }
       HEAP32[i28 >> 2] = 0;
       __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS1_24RenderBlockSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i29, i58, i27, i28);
       i68 = (HEAP32[i59 >> 2] | 0) + 4 | 0;
       if ((HEAP32[i68 >> 2] | 0) != 0) {
        i65 = i66;
        break L24;
       }
       i67 = __ZN3WTF10fastMallocEj(60) | 0;
       i70 = HEAP32[i27 >> 2] | 0;
       i71 = i70 | 0;
       i72 = i67;
       HEAP32[i72 >> 2] = i71;
       i73 = i67 + 4 | 0;
       HEAP32[i73 >> 2] = __ZNK7WebCore12RenderObject19containerForRepaintEv(i71) | 0;
       HEAP32[i67 + 8 >> 2] = (HEAP32[i70 + 20 >> 2] | 0) >>> 25 & 7;
       i70 = i67 + 12 | 0;
       if (__ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv(i71) | 0) {
        __ZN7WebCore11RenderBlock27selectionGapRectsForRepaintEPKNS_22RenderLayerModelObjectE(i70, HEAP32[i72 >> 2] | 0, HEAP32[i73 >> 2] | 0);
       } else {
        _memset(i70 | 0, 0, 48) | 0;
       }
       i70 = HEAP32[i68 >> 2] | 0;
       HEAP32[i68 >> 2] = i67;
       if ((i70 | 0) != 0) {
        __ZN3WTF8fastFreeEPv(i70);
       }
       i70 = __ZNK7WebCore12RenderObject15containingBlockEv(i71) | 0;
       HEAP32[i27 >> 2] = i70;
       if ((i70 | 0) == 0) {
        i65 = i66;
        break;
       } else {
        i69 = i70;
       }
      }
     }
    } while (0);
    do {
     if ((i62 & 1) == 0) {
      i66 = __ZNK7WebCore12RenderObject14nextInPreOrderEv(i65) | 0;
      if ((i66 | 0) != 0) {
       i74 = i66;
       i75 = (i66 | 0) != (i49 | 0) | 0;
       i76 = 0;
       i64 = 46;
       break;
      }
      if (!i60) {
       i64 = 44;
       break L19;
      }
      i66 = __ZNK7WebCore12RenderObject18previousInPreOrderEv(i49) | 0;
      if ((i66 | 0) == 0) {
       i64 = 44;
       break L19;
      }
      i70 = HEAP32[i66 + 20 >> 2] | 0;
      if ((i70 & 512 | 0) == 0) {
       i77 = i66;
       i78 = i61;
       i64 = 45;
       break;
      }
      i74 = i66;
      i75 = i70 >>> 8 & 1 ^ 1;
      i76 = i61;
      i64 = 46;
     } else {
      i70 = __ZNK7WebCore12RenderObject18previousInPreOrderEv(i65) | 0;
      if ((i70 | 0) == 0) {
       i64 = 44;
       break L19;
      }
      i66 = HEAP32[i70 + 20 >> 2] | 0;
      if ((i66 & 512 | 0) == 0) {
       i77 = i70;
       i78 = i62;
       i64 = 45;
       break;
      }
      i74 = i70;
      i75 = i66 >>> 8 & 1 ^ 1;
      i76 = i62;
      i64 = 46;
     }
    } while (0);
    if ((i64 | 0) == 45) {
     i64 = 0;
     HEAP32[i24 >> 2] = i77;
     i62 = i78;
     i63 = i77;
     continue;
    } else if ((i64 | 0) == 46) {
     i64 = 0;
     HEAP32[i24 >> 2] = i74;
     if ((i75 & 1) == 0) {
      break;
     } else {
      i62 = i76;
      i63 = i74;
      continue;
     }
    }
   }
   if ((i64 | 0) == 44) {
    HEAP32[i24 >> 2] = 0;
   }
   i63 = i20 | 0;
   i62 = HEAP32[i63 >> 2] | 0;
   i61 = i20 + 4 | 0;
   i60 = HEAP32[i61 >> 2] | 0;
   i59 = i20 + 12 | 0;
   i58 = i62 + (i60 << 3) | 0;
   if ((HEAP32[i59 >> 2] | 0) == 0) {
    i51 = i58;
    i52 = i63;
    i53 = i61;
    i54 = i59;
    break;
   }
   L68 : do {
    if ((i60 | 0) == 0) {
     i79 = i62;
    } else {
     i57 = i62;
     while (1) {
      i48 = HEAP32[i57 >> 2] | 0;
      if (!((i48 | 0) == (-1 | 0) | (i48 | 0) == 0)) {
       i79 = i57;
       break L68;
      }
      i48 = i57 + 8 | 0;
      if ((i48 | 0) == (i58 | 0)) {
       i51 = i58;
       i52 = i63;
       i53 = i61;
       i54 = i59;
       break L16;
      } else {
       i57 = i48;
      }
     }
    }
   } while (0);
   if ((i79 | 0) == (i58 | 0)) {
    i51 = i58;
    i52 = i63;
    i53 = i61;
    i54 = i59;
    break;
   } else {
    i80 = i79;
   }
   while (1) {
    i62 = HEAP32[i80 >> 2] | 0;
    if ((HEAP32[i62 + 20 >> 2] & 234881024 | 0) != 0) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i62 >> 2] | 0) + 528 >> 2] & 127](i62, 0);
    }
    i62 = i80 + 8 | 0;
    if ((i62 | 0) == (i58 | 0)) {
     i51 = i58;
     i52 = i63;
     i53 = i61;
     i54 = i59;
     break L16;
    } else {
     i81 = i62;
    }
    while (1) {
     i62 = HEAP32[i81 >> 2] | 0;
     if (!((i62 | 0) == (-1 | 0) | (i62 | 0) == 0)) {
      break;
     }
     i62 = i81 + 8 | 0;
     if ((i62 | 0) == (i58 | 0)) {
      i51 = i58;
      i52 = i63;
      i53 = i61;
      i54 = i59;
      break L16;
     } else {
      i81 = i62;
     }
    }
    if ((i81 | 0) == (i58 | 0)) {
     i51 = i58;
     i52 = i63;
     i53 = i61;
     i54 = i59;
     break;
    } else {
     i80 = i81;
    }
   }
  }
 } while (0);
 HEAP32[i43 >> 2] = i2;
 HEAP32[i45 >> 2] = i3;
 HEAP32[i47 >> 2] = i4;
 HEAP32[i44 >> 2] = i5;
 do {
  if (i38 & (i2 | 0) == (i4 | 0)) {
   if ((HEAP32[i2 + 20 >> 2] & 234881024 | 0) == 134217728) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 528 >> 2] & 127](i2, 4);
  } else {
   do {
    if (i38) {
     if ((HEAP32[i2 + 20 >> 2] & 234881024 | 0) == 33554432) {
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 528 >> 2] & 127](i2, 1);
    }
   } while (0);
   if (!i40) {
    break;
   }
   if ((HEAP32[i4 + 20 >> 2] & 234881024 | 0) == 100663296) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 528 >> 2] & 127](i4, 3);
  }
 } while (0);
 HEAP32[i30 >> 2] = i2;
 do {
  if (i39) {
   i82 = 0;
  } else {
   i40 = __ZNK7WebCore12RenderObject7childAtEj(i4, i5) | 0;
   if ((i40 | 0) != 0) {
    i82 = i40;
    break;
   }
   i82 = __ZNK7WebCore12RenderObject27nextInPreOrderAfterChildrenEv(i4) | 0;
  }
 } while (0);
 i5 = (i2 | 0) == 0;
 i39 = (i82 | 0) == (i2 | 0);
 if (!(i5 | i39)) {
  i40 = i2;
  while (1) {
   do {
    if (!((i40 | 0) == (i2 | 0) | (i40 | 0) == (i4 | 0))) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 536 >> 2] & 511](i40) | 0)) {
      break;
     }
     if ((HEAP32[i40 + 20 >> 2] & 234881024 | 0) == 67108864) {
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i40 >> 2] | 0) + 528 >> 2] & 127](i40, 2);
    }
   } while (0);
   i40 = __ZNK7WebCore12RenderObject14nextInPreOrderEv(i40) | 0;
   if ((i40 | 0) == 0 | (i40 | 0) == (i82 | 0)) {
    break;
   }
  }
  HEAP32[i30 >> 2] = i40;
 }
 i40 = (i6 | 0) == 2;
 if (!i40) {
  __ZN7WebCore11RenderLayer29clearBlockSelectionGapsBoundsEv(HEAP32[i1 + 40 >> 2] | 0);
 }
 HEAP32[i30 >> 2] = i2;
 L111 : do {
  if (!(i5 | i39)) {
   i6 = i31 | 0;
   i38 = i21 | 0;
   i3 = i32 + 8 | 0;
   i81 = i32 | 0;
   i80 = i23 | 0;
   i79 = i35 | 0;
   i20 = (i82 | 0) != 0;
   i24 = i20 & 1;
   i74 = 0;
   i76 = i2;
   L113 : while (1) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i76 >> 2] | 0) + 536 >> 2] & 511](i76) | 0) {
     i64 = 83;
    } else {
     if ((i76 | 0) == (i2 | 0) | (i76 | 0) == (i4 | 0)) {
      i64 = 83;
     } else {
      i83 = i76;
     }
    }
    L117 : do {
     if ((i64 | 0) == 83) {
      i64 = 0;
      i75 = i76 + 20 | 0;
      if ((HEAP32[i75 >> 2] & 234881024 | 0) == 0) {
       i83 = i76;
       break;
      }
      i77 = __ZN3WTF10fastMallocEj(28) | 0;
      HEAP32[i77 >> 2] = i76;
      i78 = i77 + 4 | 0;
      HEAP32[i78 >> 2] = __ZNK7WebCore12RenderObject19containerForRepaintEv(i76) | 0;
      HEAP32[i77 + 8 >> 2] = (HEAP32[i75 >> 2] | 0) >>> 25 & 7;
      i75 = i77 + 12 | 0;
      if (__ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv(i76) | 0) {
       FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i76 >> 2] | 0) + 532 >> 2] & 31](i75, i76, HEAP32[i78 >> 2] | 0, 1);
      } else {
       _memset(i75 | 0, 0, 16) | 0;
      }
      HEAP32[i6 >> 2] = i77;
      __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_NS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i32, i38, i30, i31);
      do {
       if ((HEAP8[i3] & 1) == 0) {
        i77 = (HEAP32[i81 >> 2] | 0) + 4 | 0;
        i75 = HEAP32[i77 >> 2] | 0;
        i78 = HEAP32[i6 >> 2] | 0;
        HEAP32[i6 >> 2] = 0;
        HEAP32[i77 >> 2] = i78;
        if ((i75 | 0) == 0) {
         break;
        }
        __ZN3WTF8fastFreeEPv(i75);
       } else {
        i75 = HEAP32[i6 >> 2] | 0;
        if ((i75 | 0) == 0) {
         break;
        }
        __ZN3WTF8fastFreeEPv(i75);
       }
      } while (0);
      i75 = HEAP32[i30 >> 2] | 0;
      i78 = __ZNK7WebCore12RenderObject15containingBlockEv(i75) | 0;
      HEAP32[i33 >> 2] = i78;
      if ((i78 | 0) == 0) {
       i83 = i75;
       break;
      } else {
       i84 = i78;
      }
      while (1) {
       if ((HEAP32[i84 + 20 >> 2] & 768 | 0) == 768) {
        i83 = i75;
        break L117;
       }
       HEAP32[i34 >> 2] = 0;
       __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS1_24RenderBlockSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i35, i80, i33, i34);
       i78 = (HEAP32[i79 >> 2] | 0) + 4 | 0;
       if ((HEAP32[i78 >> 2] | 0) != 0) {
        i83 = i75;
        break L117;
       }
       i77 = __ZN3WTF10fastMallocEj(60) | 0;
       i65 = HEAP32[i33 >> 2] | 0;
       i49 = i65 | 0;
       i69 = i77;
       HEAP32[i69 >> 2] = i49;
       i27 = i77 + 4 | 0;
       HEAP32[i27 >> 2] = __ZNK7WebCore12RenderObject19containerForRepaintEv(i49) | 0;
       HEAP32[i77 + 8 >> 2] = (HEAP32[i65 + 20 >> 2] | 0) >>> 25 & 7;
       i65 = i77 + 12 | 0;
       if (__ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv(i49) | 0) {
        __ZN7WebCore11RenderBlock27selectionGapRectsForRepaintEPKNS_22RenderLayerModelObjectE(i65, HEAP32[i69 >> 2] | 0, HEAP32[i27 >> 2] | 0);
       } else {
        _memset(i65 | 0, 0, 48) | 0;
       }
       i65 = HEAP32[i78 >> 2] | 0;
       HEAP32[i78 >> 2] = i77;
       if ((i65 | 0) != 0) {
        __ZN3WTF8fastFreeEPv(i65);
       }
       i65 = __ZNK7WebCore12RenderObject15containingBlockEv(i49) | 0;
       HEAP32[i33 >> 2] = i65;
       if ((i65 | 0) == 0) {
        i83 = i75;
        break;
       } else {
        i84 = i65;
       }
      }
     }
    } while (0);
    do {
     if ((i74 & 1) == 0) {
      i75 = __ZNK7WebCore12RenderObject14nextInPreOrderEv(i83) | 0;
      if ((i75 | 0) != 0) {
       i85 = i75;
       i86 = (i75 | 0) != (i82 | 0) | 0;
       i87 = 0;
       i64 = 113;
       break;
      }
      if (!i20) {
       break L113;
      }
      i75 = __ZNK7WebCore12RenderObject18previousInPreOrderEv(i82) | 0;
      if ((i75 | 0) == 0) {
       break L113;
      }
      i65 = HEAP32[i75 + 20 >> 2] | 0;
      if ((i65 & 512 | 0) == 0) {
       i88 = i75;
       i89 = i24;
       i64 = 112;
       break;
      }
      i85 = i75;
      i86 = i65 >>> 8 & 1 ^ 1;
      i87 = i24;
      i64 = 113;
     } else {
      i65 = __ZNK7WebCore12RenderObject18previousInPreOrderEv(i83) | 0;
      if ((i65 | 0) == 0) {
       break L113;
      }
      i75 = HEAP32[i65 + 20 >> 2] | 0;
      if ((i75 & 512 | 0) == 0) {
       i88 = i65;
       i89 = i74;
       i64 = 112;
       break;
      }
      i85 = i65;
      i86 = i75 >>> 8 & 1 ^ 1;
      i87 = i74;
      i64 = 113;
     }
    } while (0);
    if ((i64 | 0) == 112) {
     i64 = 0;
     HEAP32[i30 >> 2] = i88;
     i74 = i89;
     i76 = i88;
     continue;
    } else if ((i64 | 0) == 113) {
     i64 = 0;
     HEAP32[i30 >> 2] = i85;
     if ((i86 & 1) == 0) {
      break L111;
     } else {
      i74 = i87;
      i76 = i85;
      continue;
     }
    }
   }
   HEAP32[i30 >> 2] = 0;
  }
 } while (0);
 if (i40) {
  i90 = HEAP32[i23 >> 2] | 0;
 } else {
  i40 = i1 + 116 | 0;
  __ZN7WebCore9FrameView21beginDeferredRepaintsEv(HEAP32[i40 >> 2] | 0);
  i1 = HEAP32[i52 >> 2] | 0;
  i30 = HEAP32[i53 >> 2] | 0;
  i85 = i1 + (i30 << 3) | 0;
  L161 : do {
   if ((HEAP32[i54 >> 2] | 0) == 0) {
    i91 = i85;
   } else {
    if ((i30 | 0) == 0) {
     i91 = i1;
     break;
    } else {
     i92 = i1;
    }
    while (1) {
     i87 = HEAP32[i92 >> 2] | 0;
     if (!((i87 | 0) == (-1 | 0) | (i87 | 0) == 0)) {
      i91 = i92;
      break L161;
     }
     i87 = i92 + 8 | 0;
     if ((i87 | 0) == (i85 | 0)) {
      i91 = i85;
      break;
     } else {
      i92 = i87;
     }
    }
   }
  } while (0);
  if ((i91 | 0) == (i51 | 0)) {
   i93 = i21 | 0;
   i94 = i21 + 4 | 0;
   i95 = i21 + 12 | 0;
  } else {
   i92 = i21 + 8 | 0;
   i1 = i21 | 0;
   i30 = i21 + 4 | 0;
   i54 = i21 | 0;
   i87 = i21 + 16 | 0;
   i86 = i21 + 12 | 0;
   i88 = i91;
   while (1) {
    i91 = HEAP32[i88 >> 2] | 0;
    i89 = HEAP32[i92 >> 2] | 0;
    i83 = HEAP32[i1 >> 2] | 0;
    i82 = i91;
    i84 = i82 + ~(i82 << 15) | 0;
    i82 = (i84 >>> 10 ^ i84) * 9 & -1;
    i84 = i82 >>> 6 ^ i82;
    i82 = i84 + ~(i84 << 11) | 0;
    i84 = i82 >>> 16 ^ i82;
    L172 : do {
     if ((i83 | 0) == 0) {
      i64 = 129;
     } else {
      i82 = i84 & i89;
      i33 = i83 + (i82 << 3) | 0;
      i34 = i33 | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == (i91 | 0)) {
       i96 = i33;
      } else {
       i31 = (i84 >>> 23) + ~i84 | 0;
       i32 = i31 << 12 ^ i31;
       i31 = i32 >>> 7 ^ i32;
       i32 = i31 << 2 ^ i31;
       i31 = i32 >>> 20 ^ i32 | 1;
       i32 = 0;
       i4 = i82;
       i2 = i35;
       while (1) {
        if ((i2 | 0) == 0) {
         i64 = 129;
         break L172;
        }
        i35 = (i32 | 0) == 0 ? i31 : i32;
        i39 = i35 + i4 & i89;
        i5 = i83 + (i39 << 3) | 0;
        i76 = HEAP32[i5 >> 2] | 0;
        if ((i76 | 0) == (i91 | 0)) {
         i96 = i5;
         break;
        } else {
         i32 = i35;
         i4 = i39;
         i2 = i76;
        }
       }
      }
      if ((i96 | 0) == 0) {
       i64 = 129;
       break;
      }
      i2 = HEAP32[i96 + 4 >> 2] | 0;
      i4 = HEAP32[i88 + 4 >> 2] | 0;
      if ((i2 | 0) == 0) {
       i97 = i4;
       i64 = 148;
       break;
      }
      i32 = i4 + 12 | 0;
      i31 = i32;
      i76 = i4 + 20 | 0;
      i39 = HEAP32[i76 + 4 >> 2] | 0;
      i35 = i2 + 12 | 0;
      i5 = i35;
      i74 = i2 + 20 | 0;
      i24 = HEAP32[i74 + 4 >> 2] | 0;
      do {
       if (!((HEAP32[i31 >> 2] | 0) != (HEAP32[i5 >> 2] | 0) | (HEAP32[i31 + 4 >> 2] | 0) != (HEAP32[i5 + 4 >> 2] | 0))) {
        if ((HEAP32[i76 >> 2] | 0) != (HEAP32[i74 >> 2] | 0)) {
         break;
        }
        if ((i39 | 0) != (i24 | 0)) {
         break;
        }
        if ((HEAP32[i4 + 8 >> 2] | 0) != (HEAP32[i2 + 8 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i43 >> 2] | 0) == (i91 | 0)) {
         if ((i46 | 0) != (HEAP32[i45 >> 2] | 0)) {
          break;
         }
        }
        if ((HEAP32[i47 >> 2] | 0) != (i91 | 0)) {
         break L172;
        }
        if ((i42 | 0) == (HEAP32[i44 >> 2] | 0)) {
         break L172;
        }
       }
      } while (0);
      i24 = HEAP32[i4 >> 2] | 0;
      i39 = HEAP32[i4 + 4 >> 2] | 0;
      __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i11, i32);
      __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i24, i39, i11, 0);
      i39 = HEAP32[i2 >> 2] | 0;
      i24 = HEAP32[i2 + 4 >> 2] | 0;
      __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i10, i35);
      __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i39, i24, i10, 0);
      i24 = HEAP32[i34 >> 2] | 0;
      L192 : do {
       if ((i24 | 0) == (i91 | 0)) {
        i98 = i33;
       } else {
        i39 = (i84 >>> 23) + ~i84 | 0;
        i74 = i39 << 12 ^ i39;
        i39 = i74 >>> 7 ^ i74;
        i74 = i39 << 2 ^ i39;
        i39 = i74 >>> 20 ^ i74 | 1;
        i74 = 0;
        i76 = i82;
        i5 = i24;
        while (1) {
         if ((i5 | 0) == 0) {
          i98 = 0;
          break L192;
         }
         i31 = (i74 | 0) == 0 ? i39 : i74;
         i20 = i31 + i76 & i89;
         i79 = i83 + (i20 << 3) | 0;
         i80 = HEAP32[i79 >> 2] | 0;
         if ((i80 | 0) == (i91 | 0)) {
          i98 = i79;
          break;
         } else {
          i74 = i31;
          i76 = i20;
          i5 = i80;
         }
        }
       }
      } while (0);
      i24 = HEAP32[i30 >> 2] | 0;
      i82 = (i98 | 0) == 0 ? i83 + (i24 << 3) | 0 : i98;
      if ((i82 | 0) == (i83 + (i24 << 3) | 0)) {
       break;
      }
      i24 = HEAP32[i82 + 4 >> 2] | 0;
      if ((i24 | 0) != 0) {
       __ZN3WTF8fastFreeEPv(i24);
      }
      HEAP32[i82 >> 2] = -1;
      HEAP32[i87 >> 2] = (HEAP32[i87 >> 2] | 0) + 1;
      i82 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
      HEAP32[i86 >> 2] = i82;
      i24 = HEAP32[i30 >> 2] | 0;
      if (!((i82 * 6 & -1 | 0) < (i24 | 0) & (i24 | 0) > 8)) {
       break;
      }
      __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i54, (i24 | 0) / 2 & -1, 0) | 0;
     }
    } while (0);
    if ((i64 | 0) == 129) {
     i64 = 0;
     i97 = HEAP32[i88 + 4 >> 2] | 0;
     i64 = 148;
    }
    if ((i64 | 0) == 148) {
     i64 = 0;
     i83 = HEAP32[i97 >> 2] | 0;
     i91 = HEAP32[i97 + 4 >> 2] | 0;
     __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i9, i97 + 12 | 0);
     __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i83, i91, i9, 0);
    }
    i91 = i88 + 8 | 0;
    L208 : do {
     if ((i91 | 0) == (i85 | 0)) {
      i99 = i85;
     } else {
      i83 = i91;
      while (1) {
       i89 = HEAP32[i83 >> 2] | 0;
       if (!((i89 | 0) == (-1 | 0) | (i89 | 0) == 0)) {
        i99 = i83;
        break L208;
       }
       i89 = i83 + 8 | 0;
       if ((i89 | 0) == (i85 | 0)) {
        i99 = i85;
        break;
       } else {
        i83 = i89;
       }
      }
     }
    } while (0);
    if ((i99 | 0) == (i51 | 0)) {
     i93 = i1;
     i94 = i30;
     i95 = i86;
     break;
    } else {
     i88 = i99;
    }
   }
  }
  i99 = HEAP32[i93 >> 2] | 0;
  i93 = HEAP32[i94 >> 2] | 0;
  i94 = i99 + (i93 << 3) | 0;
  L214 : do {
   if ((HEAP32[i95 >> 2] | 0) != 0) {
    L216 : do {
     if ((i93 | 0) == 0) {
      i100 = i99;
     } else {
      i88 = i99;
      while (1) {
       i86 = HEAP32[i88 >> 2] | 0;
       if (!((i86 | 0) == (-1 | 0) | (i86 | 0) == 0)) {
        i100 = i88;
        break L216;
       }
       i88 = i88 + 8 | 0;
       if ((i88 | 0) == (i94 | 0)) {
        break L214;
       }
      }
     }
    } while (0);
    if ((i100 | 0) == (i94 | 0)) {
     break;
    }
    i88 = i100;
    while (1) {
     i86 = HEAP32[i88 + 4 >> 2] | 0;
     i30 = HEAP32[i86 >> 2] | 0;
     i1 = HEAP32[i86 + 4 >> 2] | 0;
     __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i8, i86 + 12 | 0);
     __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i30, i1, i8, 0);
     i1 = i88 + 8 | 0;
     if ((i1 | 0) == (i94 | 0)) {
      break L214;
     } else {
      i101 = i1;
     }
     while (1) {
      i1 = HEAP32[i101 >> 2] | 0;
      if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
       break;
      }
      i1 = i101 + 8 | 0;
      if ((i1 | 0) == (i94 | 0)) {
       break L214;
      } else {
       i101 = i1;
      }
     }
     if ((i101 | 0) == (i94 | 0)) {
      break;
     } else {
      i88 = i101;
     }
    }
   }
  } while (0);
  i101 = HEAP32[i22 >> 2] | 0;
  i94 = HEAP32[i22 + 4 >> 2] | 0;
  i8 = i101 + (i94 << 3) | 0;
  L229 : do {
   if ((HEAP32[i22 + 12 >> 2] | 0) == 0) {
    i64 = 168;
   } else {
    L231 : do {
     if ((i94 | 0) == 0) {
      i102 = i101;
     } else {
      i100 = i101;
      while (1) {
       i99 = HEAP32[i100 >> 2] | 0;
       if (!((i99 | 0) == (-1 | 0) | (i99 | 0) == 0)) {
        i102 = i100;
        break L231;
       }
       i99 = i100 + 8 | 0;
       if ((i99 | 0) == (i8 | 0)) {
        i64 = 168;
        break L229;
       } else {
        i100 = i99;
       }
      }
     }
    } while (0);
    if ((i102 | 0) == (i8 | 0)) {
     i64 = 168;
     break;
    }
    i100 = i23 + 8 | 0;
    i99 = i23 | 0;
    i93 = i17;
    i95 = i36;
    i88 = i37;
    i1 = i13;
    i30 = i15;
    i86 = i23 + 4 | 0;
    i51 = i23 | 0;
    i85 = i23 + 16 | 0;
    i9 = i23 + 12 | 0;
    i97 = i102;
    while (1) {
     i54 = HEAP32[i97 >> 2] | 0;
     i87 = HEAP32[i100 >> 2] | 0;
     i98 = HEAP32[i99 >> 2] | 0;
     i10 = i54;
     i11 = i10 + ~(i10 << 15) | 0;
     i10 = (i11 >>> 10 ^ i11) * 9 & -1;
     i11 = i10 >>> 6 ^ i10;
     i10 = i11 + ~(i11 << 11) | 0;
     i11 = i10 >>> 16 ^ i10;
     L239 : do {
      if ((i98 | 0) == 0) {
       i64 = 176;
      } else {
       i10 = i11 & i87;
       i44 = i98 + (i10 << 3) | 0;
       i42 = i44 | 0;
       i47 = HEAP32[i42 >> 2] | 0;
       if ((i47 | 0) == (i54 | 0)) {
        i103 = i44;
       } else {
        i45 = (i11 >>> 23) + ~i11 | 0;
        i46 = i45 << 12 ^ i45;
        i45 = i46 >>> 7 ^ i46;
        i46 = i45 << 2 ^ i45;
        i45 = i46 >>> 20 ^ i46 | 1;
        i46 = 0;
        i43 = i10;
        i96 = i47;
        while (1) {
         if ((i96 | 0) == 0) {
          i64 = 176;
          break L239;
         }
         i47 = (i46 | 0) == 0 ? i45 : i46;
         i92 = i47 + i43 & i87;
         i91 = i98 + (i92 << 3) | 0;
         i83 = HEAP32[i91 >> 2] | 0;
         if ((i83 | 0) == (i54 | 0)) {
          i103 = i91;
          break;
         } else {
          i46 = i47;
          i43 = i92;
          i96 = i83;
         }
        }
       }
       if ((i103 | 0) == 0) {
        i64 = 176;
        break;
       }
       i96 = HEAP32[i103 + 4 >> 2] | 0;
       i43 = HEAP32[i97 + 4 >> 2] | 0;
       if ((i96 | 0) == 0) {
        i104 = i43;
        i64 = 189;
        break;
       }
       i46 = i43 + 12 | 0;
       _memcpy(i95 | 0, i46 | 0, 48) | 0;
       i45 = i96 + 12 | 0;
       _memcpy(i88 | 0, i45 | 0, 48) | 0;
       if (__ZN7WebCore8GapRectseqERKS0_(i36, i37) | 0) {
        if ((HEAP32[i43 + 8 >> 2] | 0) == (HEAP32[i96 + 8 >> 2] | 0)) {
         break;
        }
       }
       i83 = HEAP32[i43 >> 2] | 0;
       i92 = HEAP32[i43 + 4 >> 2] | 0;
       HEAP32[i1 >> 2] = HEAP32[i46 >> 2];
       HEAP32[i1 + 4 >> 2] = HEAP32[i46 + 4 >> 2];
       HEAP32[i1 + 8 >> 2] = HEAP32[i46 + 8 >> 2];
       HEAP32[i1 + 12 >> 2] = HEAP32[i46 + 12 >> 2];
       __ZN7WebCore10LayoutRect5uniteERKS0_(i13, i43 + 28 | 0);
       __ZN7WebCore10LayoutRect5uniteERKS0_(i13, i43 + 44 | 0);
       __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i12, i13);
       __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i83, i92, i12, 0);
       i92 = HEAP32[i96 >> 2] | 0;
       i83 = HEAP32[i96 + 4 >> 2] | 0;
       HEAP32[i30 >> 2] = HEAP32[i45 >> 2];
       HEAP32[i30 + 4 >> 2] = HEAP32[i45 + 4 >> 2];
       HEAP32[i30 + 8 >> 2] = HEAP32[i45 + 8 >> 2];
       HEAP32[i30 + 12 >> 2] = HEAP32[i45 + 12 >> 2];
       __ZN7WebCore10LayoutRect5uniteERKS0_(i15, i96 + 28 | 0);
       __ZN7WebCore10LayoutRect5uniteERKS0_(i15, i96 + 44 | 0);
       __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i14, i15);
       __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i92, i83, i14, 0);
       i83 = HEAP32[i42 >> 2] | 0;
       L252 : do {
        if ((i83 | 0) == (i54 | 0)) {
         i105 = i44;
        } else {
         i92 = (i11 >>> 23) + ~i11 | 0;
         i96 = i92 << 12 ^ i92;
         i92 = i96 >>> 7 ^ i96;
         i96 = i92 << 2 ^ i92;
         i92 = i96 >>> 20 ^ i96 | 1;
         i96 = 0;
         i45 = i10;
         i43 = i83;
         while (1) {
          if ((i43 | 0) == 0) {
           i105 = 0;
           break L252;
          }
          i46 = (i96 | 0) == 0 ? i92 : i96;
          i47 = i46 + i45 & i87;
          i91 = i98 + (i47 << 3) | 0;
          i89 = HEAP32[i91 >> 2] | 0;
          if ((i89 | 0) == (i54 | 0)) {
           i105 = i91;
           break;
          } else {
           i96 = i46;
           i45 = i47;
           i43 = i89;
          }
         }
        }
       } while (0);
       i83 = HEAP32[i86 >> 2] | 0;
       i10 = (i105 | 0) == 0 ? i98 + (i83 << 3) | 0 : i105;
       if ((i10 | 0) == (i98 + (i83 << 3) | 0)) {
        break;
       }
       i83 = HEAP32[i10 + 4 >> 2] | 0;
       if ((i83 | 0) != 0) {
        __ZN3WTF8fastFreeEPv(i83);
       }
       HEAP32[i10 >> 2] = -1;
       HEAP32[i85 >> 2] = (HEAP32[i85 >> 2] | 0) + 1;
       i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       HEAP32[i9 >> 2] = i10;
       i83 = HEAP32[i86 >> 2] | 0;
       if (!((i10 * 6 & -1 | 0) < (i83 | 0) & (i83 | 0) > 8)) {
        break;
       }
       __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS1_24RenderBlockSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i51, (i83 | 0) / 2 & -1, 0) | 0;
      }
     } while (0);
     if ((i64 | 0) == 176) {
      i64 = 0;
      i104 = HEAP32[i97 + 4 >> 2] | 0;
      i64 = 189;
     }
     if ((i64 | 0) == 189) {
      i64 = 0;
      i98 = HEAP32[i104 >> 2] | 0;
      i54 = HEAP32[i104 + 4 >> 2] | 0;
      i87 = i104 + 12 | 0;
      HEAP32[i93 >> 2] = HEAP32[i87 >> 2];
      HEAP32[i93 + 4 >> 2] = HEAP32[i87 + 4 >> 2];
      HEAP32[i93 + 8 >> 2] = HEAP32[i87 + 8 >> 2];
      HEAP32[i93 + 12 >> 2] = HEAP32[i87 + 12 >> 2];
      __ZN7WebCore10LayoutRect5uniteERKS0_(i17, i104 + 28 | 0);
      __ZN7WebCore10LayoutRect5uniteERKS0_(i17, i104 + 44 | 0);
      __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i16, i17);
      __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i98, i54, i16, 0);
     }
     i54 = i97 + 8 | 0;
     if ((i54 | 0) == (i8 | 0)) {
      i106 = i99;
      i107 = i86;
      i108 = i9;
      break L229;
     } else {
      i109 = i54;
     }
     while (1) {
      i54 = HEAP32[i109 >> 2] | 0;
      if (!((i54 | 0) == (-1 | 0) | (i54 | 0) == 0)) {
       break;
      }
      i54 = i109 + 8 | 0;
      if ((i54 | 0) == (i8 | 0)) {
       i106 = i99;
       i107 = i86;
       i108 = i9;
       break L229;
      } else {
       i109 = i54;
      }
     }
     if ((i109 | 0) == (i8 | 0)) {
      i106 = i99;
      i107 = i86;
      i108 = i9;
      break;
     } else {
      i97 = i109;
     }
    }
   }
  } while (0);
  if ((i64 | 0) == 168) {
   i106 = i23 | 0;
   i107 = i23 + 4 | 0;
   i108 = i23 + 12 | 0;
  }
  i64 = HEAP32[i106 >> 2] | 0;
  i106 = HEAP32[i107 >> 2] | 0;
  i107 = i64 + (i106 << 3) | 0;
  L275 : do {
   if ((HEAP32[i108 >> 2] | 0) != 0) {
    L277 : do {
     if ((i106 | 0) == 0) {
      i110 = i64;
     } else {
      i109 = i64;
      while (1) {
       i8 = HEAP32[i109 >> 2] | 0;
       if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
        i110 = i109;
        break L277;
       }
       i109 = i109 + 8 | 0;
       if ((i109 | 0) == (i107 | 0)) {
        break L275;
       }
      }
     }
    } while (0);
    if ((i110 | 0) == (i107 | 0)) {
     break;
    }
    i109 = i19;
    i8 = i110;
    while (1) {
     i16 = HEAP32[i8 + 4 >> 2] | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     i104 = HEAP32[i16 + 4 >> 2] | 0;
     i105 = i16 + 12 | 0;
     HEAP32[i109 >> 2] = HEAP32[i105 >> 2];
     HEAP32[i109 + 4 >> 2] = HEAP32[i105 + 4 >> 2];
     HEAP32[i109 + 8 >> 2] = HEAP32[i105 + 8 >> 2];
     HEAP32[i109 + 12 >> 2] = HEAP32[i105 + 12 >> 2];
     __ZN7WebCore10LayoutRect5uniteERKS0_(i19, i16 + 28 | 0);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i19, i16 + 44 | 0);
     __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i18, i19);
     __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i17, i104, i18, 0);
     i104 = i8 + 8 | 0;
     if ((i104 | 0) == (i107 | 0)) {
      break L275;
     } else {
      i111 = i104;
     }
     while (1) {
      i104 = HEAP32[i111 >> 2] | 0;
      if (!((i104 | 0) == (-1 | 0) | (i104 | 0) == 0)) {
       break;
      }
      i104 = i111 + 8 | 0;
      if ((i104 | 0) == (i107 | 0)) {
       break L275;
      } else {
       i111 = i104;
      }
     }
     if ((i111 | 0) == (i107 | 0)) {
      break;
     } else {
      i8 = i111;
     }
    }
   }
  } while (0);
  __ZN7WebCore9FrameView19endDeferredRepaintsEv(HEAP32[i40 >> 2] | 0);
  i90 = i64;
 }
 if ((i90 | 0) != 0) {
  i64 = HEAP32[i23 + 4 >> 2] | 0;
  if ((i64 | 0) > 0) {
   i23 = 0;
   while (1) {
    do {
     if ((HEAP32[i90 + (i23 << 3) >> 2] | 0) != -1) {
      i40 = HEAP32[i90 + (i23 << 3) + 4 >> 2] | 0;
      if ((i40 | 0) == 0) {
       break;
      }
      __ZN3WTF8fastFreeEPv(i40);
     }
    } while (0);
    i23 = i23 + 1 | 0;
    if ((i23 | 0) >= (i64 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i90);
 }
 i90 = HEAP32[i22 >> 2] | 0;
 if ((i90 | 0) != 0) {
  i64 = HEAP32[i22 + 4 >> 2] | 0;
  if ((i64 | 0) > 0) {
   i22 = 0;
   while (1) {
    do {
     if ((HEAP32[i90 + (i22 << 3) >> 2] | 0) != -1) {
      i23 = HEAP32[i90 + (i22 << 3) + 4 >> 2] | 0;
      if ((i23 | 0) == 0) {
       break;
      }
      __ZN3WTF8fastFreeEPv(i23);
     }
    } while (0);
    i22 = i22 + 1 | 0;
    if ((i22 | 0) >= (i64 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i90);
 }
 i90 = HEAP32[i21 >> 2] | 0;
 if ((i90 | 0) != 0) {
  i64 = HEAP32[i21 + 4 >> 2] | 0;
  if ((i64 | 0) > 0) {
   i21 = 0;
   while (1) {
    do {
     if ((HEAP32[i90 + (i21 << 3) >> 2] | 0) != -1) {
      i22 = HEAP32[i90 + (i21 << 3) + 4 >> 2] | 0;
      if ((i22 | 0) == 0) {
       break;
      }
      __ZN3WTF8fastFreeEPv(i22);
     }
    } while (0);
    i21 = i21 + 1 | 0;
    if ((i21 | 0) >= (i64 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i90);
 }
 i90 = HEAP32[i52 >> 2] | 0;
 if ((i90 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i52 = HEAP32[i53 >> 2] | 0;
 if ((i52 | 0) > 0) {
  i53 = 0;
  while (1) {
   do {
    if ((HEAP32[i90 + (i53 << 3) >> 2] | 0) != -1) {
     i64 = HEAP32[i90 + (i53 << 3) + 4 >> 2] | 0;
     if ((i64 | 0) == 0) {
      break;
     }
     __ZN3WTF8fastFreeEPv(i64);
    }
   } while (0);
   i53 = i53 + 1 | 0;
   if ((i53 | 0) >= (i52 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i90);
 STACKTOP = i7;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 278;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 282;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_iiiiii + 6;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_viiii + 22;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 274;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 280;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_viii + 62;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 96;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_ii + 276;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_viii + 64;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_iiiifi + 4;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_iiiifi + 2;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_viiiii + 14;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_viii + 52;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_viii + 50;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_viiiii + 18;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_viii + 60;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_viiii + 24;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_viiiii + 16;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_viiiii + 12;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_viii + 54;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_ii + 284;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_viiii + 20;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_viii + 58;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_iiiiiii + 6;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_iiiiiii + 4;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 1180 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 1184 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 1188 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 1192 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1196 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1208 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 1212 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1216 >> 2] = F_BASE_iiiii + 4;
}
function __ZNK7WebCore10RenderView15selectionBoundsEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, d49 = +0, d50 = +0, d51 = +0, d52 = +0, d53 = +0, d54 = +0, i55 = 0, i56 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 40 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 72 | 0;
 i11 = i4 + 80 | 0;
 i12 = i4 + 88 | 0;
 i13 = i4 + 104 | 0;
 i14 = i4 + 120 | 0;
 i15 = i4 + 136 | 0;
 i16 = i4 + 168 | 0;
 i17 = i16 | 0;
 i18 = i16;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = i19 | 0;
 i21 = i19;
 _memset(i6 | 0, 0, 20) | 0;
 i22 = i2 + 120 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 HEAP32[i7 >> 2] = i23;
 i24 = i2 + 124 | 0;
 i25 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i25 | 0) == 0) {
   i26 = 0;
  } else {
   i27 = __ZNK7WebCore12RenderObject7childAtEj(i25, HEAP32[i2 + 132 >> 2] | 0) | 0;
   if ((i27 | 0) != 0) {
    i26 = i27;
    break;
   }
   i26 = __ZNK7WebCore12RenderObject27nextInPreOrderAfterChildrenEv(i25) | 0;
  }
 } while (0);
 L5 : do {
  if ((i23 | 0) == 0 | (i23 | 0) == (i26 | 0)) {
   _memset(i13 | 0, 0, 16) | 0;
   i28 = i6 | 0;
   i29 = i6 + 4 | 0;
  } else {
   i25 = i8 | 0;
   i2 = i6 | 0;
   i27 = i9 + 8 | 0;
   i30 = i9 | 0;
   i31 = i12 | 0;
   i32 = i23;
   while (1) {
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i32 >> 2] | 0) + 536 >> 2] & 511](i32) | 0) {
      i33 = 10;
     } else {
      if ((i32 | 0) == (HEAP32[i22 >> 2] | 0)) {
       i33 = 10;
       break;
      }
      if ((i32 | 0) == (HEAP32[i24 >> 2] | 0)) {
       i33 = 10;
      } else {
       i34 = i32;
      }
     }
    } while (0);
    L13 : do {
     if ((i33 | 0) == 10) {
      i33 = 0;
      i35 = i32 + 20 | 0;
      if ((HEAP32[i35 >> 2] & 234881024 | 0) == 0) {
       i34 = i32;
       break;
      }
      i36 = __ZN3WTF10fastMallocEj(28) | 0;
      HEAP32[i36 >> 2] = i32;
      i37 = i36 + 4 | 0;
      HEAP32[i37 >> 2] = __ZNK7WebCore12RenderObject19containerForRepaintEv(i32) | 0;
      HEAP32[i36 + 8 >> 2] = (HEAP32[i35 >> 2] | 0) >>> 25 & 7;
      i35 = i36 + 12 | 0;
      if (__ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv(i32) | 0) {
       FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i32 >> 2] | 0) + 532 >> 2] & 31](i35, i32, HEAP32[i37 >> 2] | 0, i3);
      } else {
       _memset(i35 | 0, 0, 16) | 0;
      }
      HEAP32[i25 >> 2] = i36;
      __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_NS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i9, i2, i7, i8);
      do {
       if ((HEAP8[i27] & 1) == 0) {
        i36 = (HEAP32[i30 >> 2] | 0) + 4 | 0;
        i35 = HEAP32[i36 >> 2] | 0;
        i37 = HEAP32[i25 >> 2] | 0;
        HEAP32[i25 >> 2] = 0;
        HEAP32[i36 >> 2] = i37;
        if ((i35 | 0) == 0) {
         break;
        }
        __ZN3WTF8fastFreeEPv(i35);
       } else {
        i35 = HEAP32[i25 >> 2] | 0;
        if ((i35 | 0) == 0) {
         break;
        }
        __ZN3WTF8fastFreeEPv(i35);
       }
      } while (0);
      i35 = HEAP32[i7 >> 2] | 0;
      i37 = __ZNK7WebCore12RenderObject15containingBlockEv(i35) | 0;
      if ((i37 | 0) == 0) {
       i34 = i35;
       break;
      } else {
       i38 = i37;
      }
      while (1) {
       i37 = i38 | 0;
       i36 = i38 + 20 | 0;
       if ((HEAP32[i36 >> 2] & 768 | 0) == 768) {
        i34 = i35;
        break L13;
       }
       HEAP32[i10 >> 2] = i37;
       HEAP32[i11 >> 2] = 0;
       __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i12, i2, i10, i11);
       i39 = (HEAP32[i31 >> 2] | 0) + 4 | 0;
       if ((HEAP32[i39 >> 2] | 0) != 0) {
        i34 = i35;
        break L13;
       }
       i40 = __ZN3WTF10fastMallocEj(28) | 0;
       HEAP32[i40 >> 2] = i37;
       i41 = i40 + 4 | 0;
       HEAP32[i41 >> 2] = __ZNK7WebCore12RenderObject19containerForRepaintEv(i37) | 0;
       HEAP32[i40 + 8 >> 2] = (HEAP32[i36 >> 2] | 0) >>> 25 & 7;
       i36 = i40 + 12 | 0;
       if (__ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv(i37) | 0) {
        FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i38 >> 2] | 0) + 532 >> 2] & 31](i36, i37, HEAP32[i41 >> 2] | 0, i3);
       } else {
        _memset(i36 | 0, 0, 16) | 0;
       }
       i36 = HEAP32[i39 >> 2] | 0;
       HEAP32[i39 >> 2] = i40;
       if ((i36 | 0) != 0) {
        __ZN3WTF8fastFreeEPv(i36);
       }
       i36 = __ZNK7WebCore12RenderObject15containingBlockEv(i37) | 0;
       if ((i36 | 0) == 0) {
        i34 = i35;
        break;
       } else {
        i38 = i36;
       }
      }
     }
    } while (0);
    i32 = __ZNK7WebCore12RenderObject14nextInPreOrderEv(i34) | 0;
    HEAP32[i7 >> 2] = i32;
    if ((i32 | 0) == 0 | (i32 | 0) == (i26 | 0)) {
     break;
    }
   }
   i32 = i6 | 0;
   i31 = HEAP32[i32 >> 2] | 0;
   i2 = i6 + 4 | 0;
   i25 = HEAP32[i2 >> 2] | 0;
   i30 = (HEAP32[i6 + 12 >> 2] | 0) == 0;
   _memset(i13 | 0, 0, 16) | 0;
   i27 = i31 + (i25 << 3) | 0;
   if (i30) {
    i28 = i32;
    i29 = i2;
    break;
   }
   L40 : do {
    if ((i25 | 0) == 0) {
     i42 = i31;
    } else {
     i30 = i31;
     while (1) {
      i35 = HEAP32[i30 >> 2] | 0;
      if (!((i35 | 0) == (-1 | 0) | (i35 | 0) == 0)) {
       i42 = i30;
       break L40;
      }
      i35 = i30 + 8 | 0;
      if ((i35 | 0) == (i27 | 0)) {
       i28 = i32;
       i29 = i2;
       break L5;
      } else {
       i30 = i35;
      }
     }
    }
   } while (0);
   if ((i42 | 0) == (i27 | 0)) {
    i28 = i32;
    i29 = i2;
    break;
   }
   i31 = i14;
   i25 = i14 | 0;
   i30 = i14 + 4 | 0;
   i35 = i14 + 8 | 0;
   i36 = i14 + 12 | 0;
   i37 = i16 + 8 | 0;
   i40 = i18 + 12 | 0;
   i39 = i16 + 16 | 0;
   i41 = i18 + 20 | 0;
   i43 = i16 + 24 | 0;
   i44 = i18 + 28 | 0;
   i45 = i19 + 8 | 0;
   i46 = i42;
   while (1) {
    i47 = HEAP32[i46 + 4 >> 2] | 0;
    i48 = i47 + 12 | 0;
    HEAP32[i31 >> 2] = HEAP32[i48 >> 2];
    HEAP32[i31 + 4 >> 2] = HEAP32[i48 + 4 >> 2];
    HEAP32[i31 + 8 >> 2] = HEAP32[i48 + 8 >> 2];
    HEAP32[i31 + 12 >> 2] = HEAP32[i48 + 12 >> 2];
    i48 = HEAP32[i47 + 4 >> 2] | 0;
    if ((i48 | 0) != 0) {
     d49 = +(HEAP32[i25 >> 2] | 0);
     d50 = +(HEAP32[i30 >> 2] | 0);
     d51 = +(HEAP32[i35 >> 2] | 0);
     d52 = +(HEAP32[i36 >> 2] | 0);
     d53 = +d49;
     d54 = +d50;
     HEAPF32[i17 >> 2] = d53;
     HEAPF32[i17 + 4 >> 2] = d54;
     d54 = d49 + d51;
     HEAPF32[i37 >> 2] = d54;
     HEAPF32[i40 >> 2] = d50;
     d51 = d50 + d52;
     HEAPF32[i39 >> 2] = d54;
     HEAPF32[i41 >> 2] = d51;
     HEAPF32[i43 >> 2] = d49;
     HEAPF32[i44 >> 2] = d51;
     __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i15, i48 | 0, i18, 0, 0, 0);
     __ZNK7WebCore9FloatQuad11boundingBoxEv(i5, i15);
     __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i21, i5);
     i48 = HEAP32[i20 + 4 >> 2] | 0;
     i47 = HEAP32[i45 >> 2] | 0;
     i55 = HEAP32[i45 + 4 >> 2] | 0;
     HEAP32[i25 >> 2] = HEAP32[i20 >> 2];
     HEAP32[i30 >> 2] = i48;
     HEAP32[i35 >> 2] = i47;
     HEAP32[i36 >> 2] = i55;
    }
    __ZN7WebCore10LayoutRect5uniteERKS0_(i13, i14);
    i55 = i46 + 8 | 0;
    if ((i55 | 0) == (i27 | 0)) {
     i28 = i32;
     i29 = i2;
     break L5;
    } else {
     i56 = i55;
    }
    while (1) {
     i55 = HEAP32[i56 >> 2] | 0;
     if (!((i55 | 0) == (-1 | 0) | (i55 | 0) == 0)) {
      break;
     }
     i55 = i56 + 8 | 0;
     if ((i55 | 0) == (i27 | 0)) {
      i28 = i32;
      i29 = i2;
      break L5;
     } else {
      i56 = i55;
     }
    }
    if ((i56 | 0) == (i27 | 0)) {
     i28 = i32;
     i29 = i2;
     break;
    } else {
     i46 = i56;
    }
   }
  }
 } while (0);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i1, i13);
 i13 = HEAP32[i28 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i28 = HEAP32[i29 >> 2] | 0;
 if ((i28 | 0) > 0) {
  i29 = 0;
  while (1) {
   do {
    if ((HEAP32[i13 + (i29 << 3) >> 2] | 0) != -1) {
     i1 = HEAP32[i13 + (i29 << 3) + 4 >> 2] | 0;
     if ((i1 | 0) == 0) {
      break;
     }
     __ZN3WTF8fastFreeEPv(i1);
    }
   } while (0);
   i29 = i29 + 1 | 0;
   if ((i29 | 0) >= (i28 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10RenderView6layoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, d19 = +0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 | 0;
 i7 = i1 + 4 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) + 20 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0;
 i10 = HEAP8[i9 + 660 | 0] | 0;
 do {
  if ((i10 & 1) == 0) {
   if ((HEAP8[i9 + 661 | 0] & 1) != 0) {
    i11 = i10;
    break;
   }
   i12 = i1 + 184 | 0;
   if ((HEAP32[i12 >> 2] | 0) == 0) {
    i11 = i10;
    break;
   }
   HEAP32[i12 >> 2] = 0;
   HEAP8[i1 + 188 | 0] = 1;
   i11 = HEAP8[(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] | 0;
  } else {
   i11 = i10;
  }
 } while (0);
 do {
  if ((i11 & 1) != 0) {
   if (!(__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i1 + 116 >> 2] | 0) + 216 >> 2] | 0) | 0)) {
    break;
   }
   i10 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i10 | 0) == 3 | (i10 | 0) == 0) {
    i13 = i1 + 52 | 0;
   } else {
    i13 = i1 + 56 | 0;
   }
   i10 = HEAP32[i13 >> 2] | 0;
   HEAP32[i1 + 80 >> 2] = i10;
   HEAP32[i1 + 76 >> 2] = i10;
  }
 } while (0);
 i13 = HEAP8[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] | 0;
 i11 = i1 + 116 | 0;
 do {
  if ((i13 & 1) == 0) {
   i14 = i13;
   i15 = 14;
  } else {
   if (__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 216 >> 2] | 0) | 0) {
    break;
   }
   i14 = HEAP8[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] | 0;
   i15 = 14;
  }
 } while (0);
 L17 : do {
  if ((i15 | 0) == 14) {
   i13 = HEAP32[i1 + 52 >> 2] | 0;
   if ((i14 & 1) == 0) {
    i15 = 16;
   } else {
    if (__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 216 >> 2] | 0) | 0) {
     i16 = 0;
    } else {
     i15 = 16;
    }
   }
   if ((i15 | 0) == 16) {
    __ZNK7WebCore10ScrollView10layoutSizeEv(i4, HEAP32[i11 >> 2] | 0);
    i10 = HEAP32[i4 >> 2] | 0;
    if (__ZNK7WebCore10ScrollView14useFixedLayoutEv(HEAP32[i11 >> 2] | 0) | 0) {
     d17 = +Math_ceil(+(i10 | 0) * +HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
    } else {
     d17 = +(i10 | 0);
    }
    i16 = ~~d17;
   }
   if ((i13 | 0) == (i16 | 0)) {
    i13 = HEAP32[i1 + 56 >> 2] | 0;
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) == 0) {
     i15 = 23;
    } else {
     if (__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 216 >> 2] | 0) | 0) {
      i18 = 0;
     } else {
      i15 = 23;
     }
    }
    if ((i15 | 0) == 23) {
     __ZNK7WebCore10ScrollView10layoutSizeEv(i3, HEAP32[i11 >> 2] | 0);
     i10 = HEAP32[i3 + 4 >> 2] | 0;
     if (__ZNK7WebCore10ScrollView14useFixedLayoutEv(HEAP32[i11 >> 2] | 0) | 0) {
      d19 = +Math_ceil(+(i10 | 0) * +HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
     } else {
      d19 = +(i10 | 0);
     }
     i18 = ~~d19;
    }
    if ((i13 | 0) == (i18 | 0)) {
     break;
    }
   }
   i13 = i1 + 20 | 0;
   i10 = HEAP32[i13 >> 2] | 0;
   if ((i10 & 4 | 0) == 0) {
    HEAP32[i13 >> 2] = i10 | 4;
   }
   i10 = i1 + 28 | 0;
   while (1) {
    i13 = HEAP32[i10 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L17;
    }
    if ((HEAP32[i13 + 20 >> 2] & 512 | 0) == 0) {
     i10 = i13 + 16 | 0;
    } else {
     i20 = i13;
     break;
    }
   }
   L46 : while (1) {
    i10 = i20;
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 992 >> 2] & 511](i10) | 0) {
      i15 = 60;
     } else {
      if (__ZNK7WebCore9RenderBox34hasViewportPercentageLogicalHeightEv(i10) | 0) {
       i15 = 60;
       break;
      }
      i13 = HEAP32[i20 + 36 >> 2] | 0;
      i8 = (HEAP32[i13 + 44 >> 2] | 0) >>> 13 & 3;
      if ((i8 | 0) == 3 | (i8 | 0) == 0) {
       i9 = HEAP32[i13 + 4 >> 2] | 0;
       i21 = i9 + 12 | 0;
       i22 = i9;
      } else {
       i9 = HEAP32[i13 + 4 >> 2] | 0;
       i21 = i9 + 4 | 0;
       i22 = i9;
      }
      i9 = HEAP8[i21 + 5 | 0] | 0;
      if ((i9 << 24 >> 24 | 0) == 10 | (i9 << 24 >> 24 | 0) == 2) {
       i15 = 60;
       break;
      }
      if ((i8 | 0) == 3 | (i8 | 0) == 0) {
       i23 = i22 + 36 | 0;
      } else {
       i23 = i22 + 20 | 0;
      }
      i9 = HEAP8[i23 + 5 | 0] | 0;
      if ((i9 << 24 >> 24 | 0) == 10 | (i9 << 24 >> 24 | 0) == 2) {
       i15 = 60;
       break;
      }
      if ((i8 | 0) == 3 | (i8 | 0) == 0) {
       i24 = i22 + 44 | 0;
      } else {
       i24 = i22 + 28 | 0;
      }
      i9 = HEAP8[i24 + 5 | 0] | 0;
      if ((i9 << 24 >> 24 | 0) == 10 | (i9 << 24 >> 24 | 0) == 2) {
       i15 = 60;
       break;
      }
      if ((i8 | 0) == 3 | (i8 | 0) == 0) {
       i25 = i22 + 12 | 0;
      } else {
       i25 = i22 + 4 | 0;
      }
      if (((HEAP8[i25 + 5 | 0] | 0) - 11 & 255) >>> 0 < 4 >>> 0) {
       i15 = 60;
       break;
      }
      if ((i8 | 0) == 3 | (i8 | 0) == 0) {
       i26 = i22 + 36 | 0;
      } else {
       i26 = i22 + 20 | 0;
      }
      if (((HEAP8[i26 + 5 | 0] | 0) - 11 & 255) >>> 0 < 4 >>> 0) {
       i15 = 60;
       break;
      }
      if ((i8 | 0) == 3 | (i8 | 0) == 0) {
       i27 = i22 + 44 | 0;
      } else {
       i27 = i22 + 28 | 0;
      }
      if (((HEAP8[i27 + 5 | 0] | 0) - 11 & 255) >>> 0 < 4 >>> 0) {
       i15 = 60;
       break;
      }
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 324 >> 2] & 511](i20) | 0) {
       i15 = 60;
      } else {
       i28 = i20;
      }
     }
    } while (0);
    do {
     if ((i15 | 0) == 60) {
      i15 = 0;
      i10 = i20 + 20 | 0;
      i8 = HEAP32[i10 >> 2] | 0;
      if ((i8 & 4 | 0) != 0) {
       i28 = i20;
       break;
      }
      HEAP32[i10 >> 2] = i8 | 4;
      i28 = i20;
     }
    } while (0);
    while (1) {
     i8 = HEAP32[i28 + 16 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break L17;
     }
     if ((HEAP32[i8 + 20 >> 2] & 512 | 0) == 0) {
      i28 = i8;
     } else {
      i20 = i8;
      continue L46;
     }
    }
   }
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] & 31 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i20 = __Znwj(88) | 0;
 i28 = i20;
 HEAP8[i20] = 0;
 _memset(i20 + 4 | 0, 0, 84) | 0;
 i20 = i1 + 192 | 0;
 i27 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = i28;
 if ((i27 | 0) == 0) {
  i29 = i28;
 } else {
  __ZN7WebCore11LayoutStateD1Ev(i27);
  __ZdlPv(i27 | 0);
  i29 = HEAP32[i20 >> 2] | 0;
 }
 i27 = __ZN7WebCore10RenderView21initializeLayoutStateERNS_11LayoutStateE(i1, i29) | 0;
 HEAP8[i1 + 188 | 0] = 0;
 i29 = i1 + 208 | 0;
 i28 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i28 | 0) == 0) {
   i15 = 72;
  } else {
   i22 = HEAP32[i28 + 16 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i15 = 72;
    break;
   }
   if ((HEAP32[i22 + 12 >> 2] | 0) == 0) {
    i15 = 72;
    break;
   }
   if ((HEAP32[i28 + 12 >> 2] | 0) == 0) {
    i15 = 72;
    break;
   }
   __ZN7WebCore10RenderView39layoutContentInAutoLogicalHeightRegionsERKNS_11LayoutStateE(i1, 0);
  }
 } while (0);
 do {
  if ((i15 | 0) == 72) {
   __ZN7WebCore11RenderBlock6layoutEv(i1 | 0);
   i28 = HEAP32[i29 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   i22 = HEAP32[i28 + 16 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   if ((HEAP32[i22 + 12 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadController28layoutRenderNamedFlowThreadsEv(i28);
  }
 } while (0);
 __ZN7WebCore10RenderView39layoutContentToComputeOverflowInRegionsERKNS_11LayoutStateE(i1, 0);
 i15 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 if ((i15 | 0) != 0) {
  __ZN7WebCore11LayoutStateD1Ev(i15);
  __ZdlPv(i15 | 0);
 }
 __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i6);
 if (!i27) {
  STACKTOP = i2;
  return;
 }
 do {
  if ((HEAP32[i29 >> 2] | 0) == 0) {
   __ZN7WebCore20FlowThreadController6createEPNS_10RenderViewE(i5, i1);
   i27 = HEAP32[i29 >> 2] | 0;
   i6 = i5 | 0;
   i15 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i29 >> 2] = i15;
   if ((i27 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i27);
   __ZN3WTF8fastFreeEPv(i27);
   i27 = HEAP32[i6 >> 2] | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i27);
   __ZN3WTF8fastFreeEPv(i27);
  }
 } while (0);
 HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] = 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10RenderView19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i7 | 0) == 0 | (i7 | 0) == (i1 | 0))) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i8 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 L4 : do {
  if ((i8 | 0) != 0) {
   i9 = i8;
   while (1) {
    i10 = (HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0;
    i11 = i9 + 32 | 0;
    if (i10) {
     i12 = i11 | 0;
    } else {
     i12 = HEAP32[i11 >> 2] | 0;
    }
    if ((HEAP32[i12 >> 2] | 0) == 0) {
     break L4;
    }
    if (i10) {
     i13 = i11 | 0;
    } else {
     i13 = HEAP32[i11 >> 2] | 0;
    }
    i11 = __ZNK7WebCore12RenderObject14enclosingLayerEv(HEAP32[i13 >> 2] | 0) | 0;
    if (__ZNK7WebCore11RenderLayer18cannotBlitToWindowEv(i11) | 0) {
     i14 = 11;
     break;
    }
    i10 = __ZNK7WebCore11RenderLayer35enclosingCompositingLayerForRepaintENS_16IncludeSelfOrNotE(i11, 0) | 0;
    if ((i10 | 0) != 0) {
     if (!(__ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(HEAP32[i10 + 208 >> 2] | 0) | 0)) {
      i14 = 14;
      break;
     }
    }
    i9 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
    if ((i9 | 0) == 0) {
     break L4;
    }
   }
   if ((i14 | 0) == 11) {
    __ZN7WebCore9FrameView21setCannotBlitToWindowEv(HEAP32[i1 + 116 >> 2] | 0);
    break;
   } else if ((i14 | 0) == 14) {
    __ZN7WebCore9FrameView21setCannotBlitToWindowEv(HEAP32[i1 + 116 >> 2] | 0);
    break;
   }
  }
 } while (0);
 if ((__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 24 >> 2] & 16 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = 0;
   i16 = 1;
  } else {
   i13 = i14 + 32 | 0;
   if ((HEAP32[i14 + 12 >> 2] & 2048 | 0) == 0) {
    i17 = i13 | 0;
   } else {
    i17 = HEAP32[i13 >> 2] | 0;
   }
   i13 = HEAP32[i17 >> 2] | 0;
   i12 = i13;
   if ((i13 | 0) == 0) {
    i15 = 0;
    i16 = 1;
    break;
   }
   i8 = HEAP32[i13 + 20 >> 2] | 0;
   do {
    if ((i8 & 512 | 0) == 0) {
     i18 = 0;
    } else {
     if ((HEAP32[i13 + 44 >> 2] | 0) != 0) {
      i18 = 0;
      break;
     }
     if ((HEAP32[i13 + 48 >> 2] | 0) != 0) {
      i18 = 0;
      break;
     }
     if ((HEAP32[i13 + 52 >> 2] | 0) < (HEAP32[i1 + 52 >> 2] | 0)) {
      i18 = 0;
      break;
     }
     i18 = (HEAP32[i13 + 56 >> 2] | 0) >= (HEAP32[i1 + 56 >> 2] | 0);
    }
   } while (0);
   i9 = HEAP32[i13 + 36 >> 2] | 0;
   if ((HEAP32[i9 + 40 >> 2] & 6144 | 0) != 0) {
    i15 = i18;
    i16 = 1;
    break;
   }
   i10 = HEAP32[i9 + 20 >> 2] | 0;
   if (+HEAPF32[i10 + 4 >> 2] != +1) {
    i15 = i18;
    i16 = 1;
    break;
   }
   if ((HEAP32[(HEAP32[i10 + 72 >> 2] | 0) + 12 >> 2] | 0) != 0) {
    i15 = i18;
    i16 = 1;
    break;
   }
   if ((i8 & 32768 | 0) != 0) {
    if ((HEAP32[(HEAP32[i13 + 40 >> 2] | 0) + 208 >> 2] | 0) != 0) {
     i15 = i18;
     i16 = 1;
     break;
    }
   }
   i15 = i18;
   i16 = (HEAP32[(HEAP32[(HEAP32[(__ZN7WebCore13RenderElement25rendererForRootBackgroundEv(i12) | 0) + 36 >> 2] | 0) + 12 >> 2] | 0) + 44 >> 2] & 12 | 0) == 12;
  }
 } while (0);
 i18 = i1 + 200 | 0;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) == 0) {
   i14 = __ZN3WTF10fastMallocEj(296) | 0;
   __ZN7WebCore21RenderLayerCompositorC1ERNS_10RenderViewE(i14, i1);
   i10 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i14;
   if ((i10 | 0) == 0) {
    i19 = i14;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
   i19 = HEAP32[i18 >> 2] | 0;
  } else {
   i19 = i17;
  }
 } while (0);
 i17 = __ZNK7WebCore21RenderLayerCompositor33mainFrameBackingIsTiledWithMarginEv(i19) | 0;
 i19 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i19 | 0) == 0) {
  i20 = 0;
 } else {
  i20 = +HEAPF32[i19 + 112 >> 2] < +1;
 }
 if (!(i17 | i15 ^ 1 | i16 | i20)) {
  STACKTOP = i3;
  return;
 }
 i20 = i1 + 116 | 0;
 i16 = __ZNK7WebCore9FrameView13isTransparentEv(HEAP32[i20 >> 2] | 0) | 0;
 i15 = HEAP32[i20 >> 2] | 0;
 if (i16) {
  __ZN7WebCore9FrameView21setCannotBlitToWindowEv(i15);
  STACKTOP = i3;
  return;
 }
 if (i17) {
  __ZNK7WebCore9FrameView23documentBackgroundColorEv(i4, i15);
 } else {
  __ZNK7WebCore9FrameView19baseBackgroundColorEv(i4, i15);
 }
 i15 = i2 | 0;
 i17 = HEAP32[i15 >> 2] | 0;
 if ((HEAP32[i4 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i6, i2 + 4 | 0);
  __ZN7WebCore15GraphicsContext9clearRectERKNS_9FloatRectE(i17, i6);
  STACKTOP = i3;
  return;
 } else {
  i6 = __ZNK7WebCore15GraphicsContext18compositeOperationEv(i17) | 0;
  __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(HEAP32[i15 >> 2] | 0, 1, 0);
  i17 = HEAP32[i15 >> 2] | 0;
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i5, i2 + 4 | 0);
  __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i17, i5, i4, (HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
  __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(HEAP32[i15 >> 2] | 0, i6, 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore10RenderView21initializeLayoutStateERNS_11LayoutStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i2 | 0;
 HEAP8[i10] = HEAP8[i10] & -2;
 i11 = __ZNK7WebCore8Document20seamlessParentIFrameEv(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = 0;
   i13 = 0;
   i14 = 0;
  } else {
   i15 = __ZNK7WebCore4Node9renderBoxEv(i11 | 0) | 0;
   if ((i15 | 0) == 0) {
    i12 = 0;
    i13 = 0;
    i14 = 0;
    break;
   }
   i16 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i12 = 0;
    i13 = i15;
    i14 = 0;
    break;
   }
   if ((HEAP32[i1 + 184 >> 2] | 0) != 0) {
    i12 = 0;
    i13 = i15;
    i14 = i16;
    break;
   }
   i12 = ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i15 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) == 0;
   i13 = i15;
   i14 = i16;
  }
 } while (0);
 i11 = HEAP32[(i12 ? i14 + 60 | 0 : i1 + 184 | 0) >> 2] | 0;
 HEAP32[i2 + 60 >> 2] = i11;
 if (i12) {
  i17 = (HEAPU8[i14 | 0] | 0) >>> 2;
 } else {
  i17 = HEAP8[i1 + 188 | 0] | 0;
 }
 i16 = (i11 | 0) != 0;
 HEAP8[i10] = (i16 & 1) << 1 | (HEAP8[i10] & -7 | i17 << 2 & 4);
 if (!(i16 & i12)) {
  i18 = 0;
  STACKTOP = i3;
  return i18 | 0;
 }
 i12 = (HEAP32[(HEAP32[i13 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i16 = i14 + 44 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i10 = HEAP32[i16 + 4 >> 2] | 0;
 i16 = HEAP32[i13 + 44 >> 2] | 0;
 i11 = i13 | 0;
 i15 = i13;
 i19 = HEAP32[i15 >> 2] | 0;
 if ((i12 | 0) == 3 | (i12 | 0) == 1) {
  i12 = FUNCTION_TABLE_ii[HEAP32[i19 + 748 >> 2] & 511](i11) | 0;
  i20 = i13;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 716 >> 2] & 127](i7, i11);
  i21 = (HEAP32[i7 >> 2] | 0) + i12 | 0;
  i12 = HEAP32[i13 + 48 >> 2] | 0;
  i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 740 >> 2] & 511](i11) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 708 >> 2] & 127](i9, i11);
  i22 = (HEAP32[i9 >> 2] | 0) + i7 | 0;
  i23 = i21;
  i24 = i12;
 } else {
  i12 = FUNCTION_TABLE_ii[HEAP32[i19 + 744 >> 2] & 511](i11) | 0;
  i19 = i13;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 127](i6, i11);
  i21 = (HEAP32[i6 >> 2] | 0) + i12 | 0;
  i12 = HEAP32[i13 + 48 >> 2] | 0;
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 736 >> 2] & 511](i11) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 127](i8, i11);
  i22 = (HEAP32[i8 >> 2] | 0) + i6 | 0;
  i23 = i21;
  i24 = i12;
 }
 i12 = i2 + 64 | 0;
 i2 = (HEAP32[i14 + 68 >> 2] | 0) - (i24 + i10 + i22) | 0;
 HEAP32[i12 >> 2] = (HEAP32[i14 + 64 >> 2] | 0) - (i16 + i17 + i23);
 HEAP32[i12 + 4 >> 2] = i2;
 if ((HEAP32[i13 + 20 >> 2] & 805306368 | 0) == 0) {
  i18 = 0;
  STACKTOP = i3;
  return i18 | 0;
 }
 if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i13 | 0) | 0) == 0) {
  i18 = 0;
  STACKTOP = i3;
  return i18 | 0;
 }
 i2 = i1 + 208 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   __ZN7WebCore20FlowThreadController6createEPNS_10RenderViewE(i4, i1);
   i12 = HEAP32[i2 >> 2] | 0;
   i23 = i4 | 0;
   i17 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   HEAP32[i2 >> 2] = i17;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i12);
   __ZN3WTF8fastFreeEPv(i12);
   i12 = HEAP32[i23 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i12);
   __ZN3WTF8fastFreeEPv(i12);
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 i13 = i2 + 208 | 0;
 do {
  if ((HEAP32[i13 >> 2] | 0) == 0) {
   __ZN7WebCore20FlowThreadController6createEPNS_10RenderViewE(i5, i2);
   i1 = HEAP32[i13 >> 2] | 0;
   i12 = i5 | 0;
   i23 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i13 >> 2] = i23;
   if ((i1 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   i1 = HEAP32[i12 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
  }
 } while (0);
 HEAP32[i4 + 4 >> 2] = HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2];
 i18 = 1;
 STACKTOP = i3;
 return i18 | 0;
}
function __ZNK7WebCore10RenderView16repaintSelectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 56 | 0;
 i7 = i2 + 88 | 0;
 i8 = i2 + 96 | 0;
 i9 = i2 + 112 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i10 = i1 + 124 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = 0;
  } else {
   i13 = __ZNK7WebCore12RenderObject7childAtEj(i11, HEAP32[i1 + 132 >> 2] | 0) | 0;
   if ((i13 | 0) != 0) {
    i12 = i13;
    break;
   }
   i12 = __ZNK7WebCore12RenderObject27nextInPreOrderAfterChildrenEv(i11) | 0;
  }
 } while (0);
 i11 = i1 + 120 | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 if ((i1 | 0) == 0 | (i1 | 0) == (i12 | 0)) {
  STACKTOP = i2;
  return;
 }
 i13 = i6 | 0;
 i14 = i6 + 4 | 0;
 i15 = i6 + 8 | 0;
 i16 = i6 + 12 | 0;
 i6 = i5 | 0;
 i17 = i8 + 8 | 0;
 i18 = i9 | 0;
 i19 = i9 + 4 | 0;
 i20 = i9 + 8 | 0;
 i21 = i9 + 12 | 0;
 i9 = i21;
 i22 = i16;
 i23 = i1;
 while (1) {
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 536 >> 2] & 511](i23) | 0) {
    i24 = 9;
   } else {
    if ((i23 | 0) == (HEAP32[i11 >> 2] | 0)) {
     i24 = 9;
     break;
    }
    if ((i23 | 0) == (HEAP32[i10 >> 2] | 0)) {
     i24 = 9;
    }
   }
  } while (0);
  L13 : do {
   if ((i24 | 0) == 9) {
    i24 = 0;
    i1 = i23 + 20 | 0;
    if ((HEAP32[i1 >> 2] & 234881024 | 0) == 0) {
     break;
    }
    HEAP32[i13 >> 2] = i23;
    i25 = __ZNK7WebCore12RenderObject19containerForRepaintEv(i23) | 0;
    HEAP32[i14 >> 2] = i25;
    HEAP32[i15 >> 2] = (HEAP32[i1 >> 2] | 0) >>> 25 & 7;
    if (__ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv(i23) | 0) {
     FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i23 >> 2] | 0) + 532 >> 2] & 31](i16, i23, i25, 1);
     i26 = HEAP32[i13 >> 2] | 0;
     i27 = HEAP32[i14 >> 2] | 0;
    } else {
     _memset(i22 | 0, 0, 16) | 0;
     i26 = i23;
     i27 = i25;
    }
    __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i4, i16);
    __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i26, i27, i4, 0);
    i25 = __ZNK7WebCore12RenderObject15containingBlockEv(i23) | 0;
    HEAP32[i7 >> 2] = i25;
    if ((i25 | 0) == 0) {
     break;
    } else {
     i28 = i25;
    }
    while (1) {
     if ((HEAP32[i28 + 20 >> 2] & 768 | 0) == 768) {
      break L13;
     }
     __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i8, i6, i7, i7);
     if ((HEAP8[i17] & 1) == 0) {
      break L13;
     }
     i25 = HEAP32[i7 >> 2] | 0;
     i1 = i25 | 0;
     HEAP32[i18 >> 2] = i1;
     i29 = __ZNK7WebCore12RenderObject19containerForRepaintEv(i1) | 0;
     HEAP32[i19 >> 2] = i29;
     HEAP32[i20 >> 2] = (HEAP32[i25 + 20 >> 2] | 0) >>> 25 & 7;
     if (__ZN7WebCore12RenderObject33canUpdateSelectionOnRootLineBoxesEv(i1) | 0) {
      FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i25 >> 2] | 0) + 532 >> 2] & 31](i21, i1, i29, 1);
      i30 = HEAP32[i18 >> 2] | 0;
      i31 = HEAP32[i19 >> 2] | 0;
     } else {
      _memset(i9 | 0, 0, 16) | 0;
      i30 = i1;
      i31 = i29;
     }
     __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i3, i21);
     __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i30, i31, i3, 0);
     i28 = __ZNK7WebCore12RenderObject15containingBlockEv(i1) | 0;
     HEAP32[i7 >> 2] = i28;
     if ((i28 | 0) == 0) {
      break;
     }
    }
   }
  } while (0);
  i23 = __ZNK7WebCore12RenderObject14nextInPreOrderEv(i23) | 0;
  if ((i23 | 0) == 0 | (i23 | 0) == (i12 | 0)) {
   break;
  }
 }
 i12 = HEAP32[i5 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10RenderView39layoutContentInAutoLogicalHeightRegionsERKNS_11LayoutStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 208 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   __ZN7WebCore20FlowThreadController6createEPNS_10RenderViewE(i5, i1);
   i7 = HEAP32[i6 >> 2] | 0;
   i8 = i5 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i6 >> 2] = i9;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 i5 = i1 | 0;
 do {
  if (!(__ZN7WebCore20FlowThreadController30updateFlowThreadsNeedingLayoutEv(HEAP32[i6 >> 2] | 0) | 0)) {
   __ZN7WebCore11RenderBlock6layoutEv(i5);
   i7 = HEAP32[i6 >> 2] | 0;
   L8 : do {
    if ((i7 | 0) == 0) {
     i10 = i4;
     i11 = 12;
    } else {
     i8 = HEAP32[i7 + 16 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
        break;
       }
       __ZN7WebCore20FlowThreadController28layoutRenderNamedFlowThreadsEv(i7);
       i9 = i4;
       if ((HEAP32[i6 >> 2] | 0) == 0) {
        i10 = i9;
        i11 = 12;
        break L8;
       } else {
        i12 = i9;
        break L8;
       }
      }
     } while (0);
     i12 = i4;
    }
   } while (0);
   do {
    if ((i11 | 0) == 12) {
     __ZN7WebCore20FlowThreadController6createEPNS_10RenderViewE(i4, i1);
     i7 = HEAP32[i6 >> 2] | 0;
     i8 = i4 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     HEAP32[i6 >> 2] = i9;
     if ((i7 | 0) == 0) {
      i12 = i10;
      break;
     }
     __ZN7WebCore20FlowThreadControllerD1Ev(i7);
     __ZN3WTF8fastFreeEPv(i7);
     i7 = HEAP32[i8 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i12 = i10;
      break;
     }
     __ZN7WebCore20FlowThreadControllerD1Ev(i7);
     __ZN3WTF8fastFreeEPv(i7);
     i12 = i10;
    }
   } while (0);
   if (__ZN7WebCore20FlowThreadController37updateFlowThreadsNeedingTwoStepLayoutEv(HEAP32[i6 >> 2] | 0) | 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZN7WebCore11RenderBlock6layoutEv(i5);
 i10 = HEAP32[i6 >> 2] | 0;
 L22 : do {
  if ((i10 | 0) == 0) {
   i13 = i3;
   i11 = 22;
  } else {
   i12 = HEAP32[i10 + 16 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     if ((HEAP32[i12 + 12 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore20FlowThreadController28layoutRenderNamedFlowThreadsEv(i10);
     i4 = i3;
     if ((HEAP32[i6 >> 2] | 0) == 0) {
      i13 = i4;
      i11 = 22;
      break L22;
     } else {
      i14 = i4;
      break L22;
     }
    }
   } while (0);
   i14 = i3;
  }
 } while (0);
 do {
  if ((i11 | 0) == 22) {
   __ZN7WebCore20FlowThreadController6createEPNS_10RenderViewE(i3, i1);
   i10 = HEAP32[i6 >> 2] | 0;
   i12 = i3 | 0;
   i4 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i6 >> 2] = i4;
   if ((i10 | 0) == 0) {
    i14 = i13;
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i10);
   __ZN3WTF8fastFreeEPv(i10);
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i14 = i13;
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i10);
   __ZN3WTF8fastFreeEPv(i10);
   i14 = i13;
  }
 } while (0);
 __ZN7WebCore20FlowThreadController37updateFlowThreadsIntoConstrainedPhaseEv(HEAP32[i6 >> 2] | 0);
 if ((HEAP32[i1 + 20 >> 2] & 31 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore11RenderBlock6layoutEv(i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore20FlowThreadController28layoutRenderNamedFlowThreadsEv(i5);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore10RenderView20repaintViewRectangleERKNS_10LayoutRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
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
 i15 = i4 + 96 | 0;
 i16 = i15 | 0;
 i17 = i15;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = i1 + 4 | 0;
 i20 = HEAP32[(HEAP32[(HEAP32[i19 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i20 + 660 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) <= 0) {
  STACKTOP = i4;
  return;
 }
 i21 = __ZNK7WebCore8Document12ownerElementEv(i20) | 0;
 if ((i21 | 0) == 0) {
  i20 = HEAP32[i1 + 116 >> 2] | 0;
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i14, i2);
  __ZN7WebCore9FrameView23repaintContentRectangleERKNS_7IntRectEb(i20, i14, i3);
  STACKTOP = i4;
  return;
 }
 i14 = __ZNK7WebCore4Node9renderBoxEv(i21 | 0) | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i21 = i5 | 0;
 i20 = i5;
 i22 = i1 + 116 | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i19 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) == 0) {
   i23 = 10;
  } else {
   if (!(__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i22 >> 2] | 0) + 216 >> 2] | 0) | 0)) {
    i23 = 10;
    break;
   }
   i24 = i1 + 52 | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   i26 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i16 + 4 >> 2] = 0;
   i24 = i15 + 8 | 0;
   HEAP32[i24 >> 2] = i25;
   HEAP32[i24 + 4 >> 2] = i26;
  }
 } while (0);
 if ((i23 | 0) == 10) {
  __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i20, HEAP32[i22 >> 2] | 0, 0);
  i22 = HEAP32[i21 + 4 >> 2] | 0;
  HEAP32[i15 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i17 + 4 >> 2] = i22;
  i22 = i5 + 8 | 0;
  i5 = HEAP32[i22 + 4 >> 2] | 0;
  HEAP32[i15 + 8 >> 2] = HEAP32[i22 >> 2];
  HEAP32[i17 + 12 >> 2] = i5;
 }
 i5 = i18;
 i22 = i2;
 HEAP32[i5 >> 2] = HEAP32[i22 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
 __ZN7WebCore10LayoutRect9intersectERKS0_(i18, i17);
 i17 = HEAP32[i16 + 4 >> 2] | 0;
 i22 = i18 | 0;
 HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - (HEAP32[i16 >> 2] | 0);
 i16 = i18 + 4 | 0;
 HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) - i17;
 i17 = i14 | 0;
 i5 = i14;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 744 >> 2] & 511](i17) | 0;
 i15 = i14;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 127](i12, i17);
 i21 = (HEAP32[i12 >> 2] | 0) + i2 | 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 736 >> 2] & 511](i17) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 704 >> 2] & 127](i13, i17);
 i5 = (HEAP32[i13 >> 2] | 0) + i2 | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i6, i14);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 127](i7, i17);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 716 >> 2] & 127](i8, i17);
 __ZNK7WebCore9RenderBox12clientHeightEv(i9, i14);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 704 >> 2] & 127](i10, i17);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 708 >> 2] & 127](i11, i17);
 HEAP32[i22 >> 2] = i21 + (HEAP32[i22 >> 2] | 0);
 HEAP32[i16 >> 2] = i5 + (HEAP32[i16 >> 2] | 0);
 __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i14 | 0, i18, i3);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_NS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
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
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i22 = i4 | 0;
 i4 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
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
  i22 = __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
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
function __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS1_24RenderBlockSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS1_24RenderBlockSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7;
 i6 = i8 + ~(i8 << 15) | 0;
 i8 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i8 >>> 6 ^ i8;
 i8 = i6 + ~(i6 << 11) | 0;
 i6 = i8 >>> 16 ^ i8;
 i8 = i6 & i5;
 i10 = i9 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = i7;
  } else {
   i14 = (i6 >>> 23) + ~i6 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i8;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i20 = 8;
     break;
    }
    i21 = (i19 | 0) == -1 ? i18 : i16;
    i22 = (i15 | 0) == 0 ? i14 : i15;
    i23 = i22 + i17 & i5;
    i24 = i9 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i15 = i22;
     i16 = i21;
     i17 = i23;
     i18 = i24;
     i19 = i25;
    }
   }
   if ((i20 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i20 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i12 = i24;
     i13 = i7;
     break;
    }
    i19 = i21;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i12 = i21;
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = i12 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i2 + 12 | 0;
 i13 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i13;
 i3 = i2 + 4 | 0;
 i21 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i21 | 0)) {
  i26 = i12;
  i27 = i21;
 } else {
  if ((i21 | 0) == 0) {
   i28 = 8;
  } else {
   i7 = i21 << 1;
   i28 = (i13 * 6 & -1 | 0) < (i7 | 0) ? i21 : i7;
  }
  i7 = __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS1_24RenderBlockSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i28, i12) | 0;
  i26 = i7;
  i27 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7;
 i6 = i8 + ~(i8 << 15) | 0;
 i8 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i8 >>> 6 ^ i8;
 i8 = i6 + ~(i6 << 11) | 0;
 i6 = i8 >>> 16 ^ i8;
 i8 = i6 & i5;
 i10 = i9 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = i7;
  } else {
   i14 = (i6 >>> 23) + ~i6 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i8;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i20 = 8;
     break;
    }
    i21 = (i19 | 0) == -1 ? i18 : i16;
    i22 = (i15 | 0) == 0 ? i14 : i15;
    i23 = i22 + i17 & i5;
    i24 = i9 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i15 = i22;
     i16 = i21;
     i17 = i23;
     i18 = i24;
     i19 = i25;
    }
   }
   if ((i20 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i20 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i12 = i24;
     i13 = i7;
     break;
    }
    i19 = i21;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i12 = i21;
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = i12 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i2 + 12 | 0;
 i13 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i13;
 i3 = i2 + 4 | 0;
 i21 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i21 | 0)) {
  i26 = i12;
  i27 = i21;
 } else {
  if ((i21 | 0) == 0) {
   i28 = 8;
  } else {
   i7 = i21 << 1;
   i28 = (i13 * 6 & -1 | 0) < (i7 | 0) ? i21 : i7;
  }
  i7 = __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i28, i12) | 0;
  i26 = i7;
  i27 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS1_24RenderBlockSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
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
   if ((i17 | 0) == 0) {
    i36 = i13;
   } else {
    __ZN3WTF8fastFreeEPv(i17);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    __ZN3WTF8fastFreeEPv(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
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
   if ((i17 | 0) == 0) {
    i36 = i13;
   } else {
    __ZN3WTF8fastFreeEPv(i17);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    __ZN3WTF8fastFreeEPv(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 9) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  i13 = __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore10RenderView39layoutContentToComputeOverflowInRegionsERKNS_11LayoutStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 208 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[i6 + 16 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i7 + 12 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore20FlowThreadController34updateFlowThreadsIntoOverflowPhaseEv(HEAP32[i5 >> 2] | 0);
 i7 = i1 + 20 | 0;
 do {
  if ((HEAP32[i7 >> 2] & 31 | 0) != 0) {
   __ZN7WebCore11RenderBlock6layoutEv(i1 | 0);
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i6 + 16 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadController28layoutRenderNamedFlowThreadsEv(i6);
  }
 } while (0);
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   __ZN7WebCore20FlowThreadController6createEPNS_10RenderViewE(i3, i1);
   i6 = HEAP32[i5 >> 2] | 0;
   i8 = i3 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i5 >> 2] = i9;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
   i6 = HEAP32[i8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 __ZN7WebCore20FlowThreadController31updateFlowThreadsIntoFinalPhaseEv(HEAP32[i5 >> 2] | 0);
 do {
  if ((HEAP32[i7 >> 2] & 31 | 0) != 0) {
   __ZN7WebCore11RenderBlock6layoutEv(i1 | 0);
   i3 = HEAP32[i5 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i3 + 16 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadController28layoutRenderNamedFlowThreadsEv(i3);
  }
 } while (0);
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   __ZN7WebCore20FlowThreadController6createEPNS_10RenderViewE(i4, i1);
   i7 = HEAP32[i5 >> 2] | 0;
   i3 = i4 | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i5 >> 2] = i6;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 __ZN7WebCore20FlowThreadController40updateFlowThreadsIntoMeasureContentPhaseEv(HEAP32[i5 >> 2] | 0);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i5 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
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
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
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
   HEAP32[i30 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZNK7WebCore10RenderView14backgroundRectEPNS_9RenderBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i8 | 0;
 i10 = i8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = i2 + 20 | 0;
 if ((HEAP32[i14 >> 2] & 4194304 | 0) != 0) {
  i15 = __ZNK7WebCore11RenderBlock10columnInfoEv(i2 | 0) | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = HEAP32[i15 + 16 >> 2] | 0;
  i18 = Math_imul(i17 >>> 0 < 2147483647 >>> 0 ? i17 : 2147483647, HEAP32[i15 + 20 >> 2] | 0) | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i15 = i11 + 8 | 0;
  HEAP32[i15 >> 2] = i16;
  HEAP32[i13 + 12 >> 2] = i18;
  if ((HEAP32[i14 >> 2] & 8192 | 0) == 0) {
   HEAP32[i12 >> 2] = 0;
   HEAP32[i12 + 4 >> 2] = 0;
   HEAP32[i15 >> 2] = i18;
   HEAP32[i15 + 4 >> 2] = i16;
  }
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i3, i13);
  i13 = i1;
  i3 = i11;
  HEAP32[i13 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i13 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
  HEAP32[i13 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
  HEAP32[i13 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
  STACKTOP = i4;
  return;
 }
 i3 = i7;
 i13 = i2 | 0;
 i11 = HEAP32[i2 + 88 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i16 = i2 | 0;
  i15 = i2;
  i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 744 >> 2] & 511](i16) | 0;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 736 >> 2] & 511](i16) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i5, i13);
  __ZNK7WebCore9RenderBox12clientHeightEv(i6, i13);
  i16 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i7 >> 2] = i2;
  HEAP32[i7 + 4 >> 2] = i18;
  HEAP32[i7 + 8 >> 2] = i16;
  HEAP32[i7 + 12 >> 2] = i5;
 } else {
  i5 = i11 + 4 | 0;
  HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
  HEAP32[i3 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
  HEAP32[i3 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i13, i7);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i10, i7);
 i7 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i1 + 4 >> 2] = i7;
 i7 = i8 + 8 | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i1 + 12 >> 2] = i8;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore10RenderView21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i1 + 36 | 0;
 i11 = (HEAP32[(HEAP32[i10 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i11 | 0) == 3) {
  i12 = i1 + 116 | 0;
  __ZNK7WebCore10ScrollView10layoutSizeEv(i6, HEAP32[i12 >> 2] | 0);
  i13 = HEAP32[i6 + 4 >> 2] | 0;
  if (__ZNK7WebCore10ScrollView14useFixedLayoutEv(HEAP32[i12 >> 2] | 0) | 0) {
   d14 = +Math_ceil(+(i13 | 0) * +HEAPF32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
  } else {
   d14 = +(i13 | 0);
  }
  i13 = i3 + 4 | 0;
  HEAP32[i13 >> 2] = ~~d14 - (HEAP32[i13 >> 2] | 0) - (HEAP32[i3 + 12 >> 2] | 0);
 } else if ((i11 | 0) == 1) {
  i11 = i1 + 116 | 0;
  __ZNK7WebCore10ScrollView10layoutSizeEv(i7, HEAP32[i11 >> 2] | 0);
  i13 = HEAP32[i7 >> 2] | 0;
  if (__ZNK7WebCore10ScrollView14useFixedLayoutEv(HEAP32[i11 >> 2] | 0) | 0) {
   d15 = +Math_ceil(+(i13 | 0) * +HEAPF32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
  } else {
   d15 = +(i13 | 0);
  }
  i13 = i3 | 0;
  HEAP32[i13 >> 2] = ~~d15 - (HEAP32[i13 >> 2] | 0) - (HEAP32[i3 + 8 >> 2] | 0);
 }
 if (i4) {
  __ZNK7WebCore9FrameView28scrollOffsetForFixedPositionEv(i8, HEAP32[i1 + 116 >> 2] | 0);
  i4 = HEAP32[i8 + 4 >> 2] | 0;
  i13 = i3 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + (HEAP32[i8 >> 2] | 0);
  i8 = i3 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + i4;
 }
 if ((i2 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[i2 + 172 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore20TransformationMatrix7mapRectERKNS_10LayoutRectE(i9, i1, i3);
 i1 = i3;
 i3 = i9;
 HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore10RenderView18updateLogicalWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 4 | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
   if (!(__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i1 + 116 >> 2] | 0) + 216 >> 2] | 0) | 0)) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i6 = i1 + 36 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i7 | 0) == 3 | (i7 | 0) == 0) {
   i8 = i1 + 116 | 0;
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
    if (__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 216 >> 2] | 0) | 0) {
     i9 = 0;
     break;
    }
   }
   __ZNK7WebCore10ScrollView10layoutSizeEv(i4, HEAP32[i8 >> 2] | 0);
   i10 = HEAP32[i4 >> 2] | 0;
   if (__ZNK7WebCore10ScrollView14useFixedLayoutEv(HEAP32[i8 >> 2] | 0) | 0) {
    d11 = +Math_ceil(+(i10 | 0) * +HEAPF32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
   } else {
    d11 = +(i10 | 0);
   }
   i9 = ~~d11;
  } else {
   i10 = i1 + 116 | 0;
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
    if (__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i10 >> 2] | 0) + 216 >> 2] | 0) | 0) {
     i9 = 0;
     break;
    }
   }
   __ZNK7WebCore10ScrollView10layoutSizeEv(i3, HEAP32[i10 >> 2] | 0);
   i8 = HEAP32[i3 + 4 >> 2] | 0;
   if (__ZNK7WebCore10ScrollView14useFixedLayoutEv(HEAP32[i10 >> 2] | 0) | 0) {
    d12 = +Math_ceil(+(i8 | 0) * +HEAPF32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
   } else {
    d12 = +(i8 | 0);
   }
   i9 = ~~d12;
  }
 } while (0);
 i3 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  HEAP32[i1 + 52 >> 2] = i9;
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 + 56 >> 2] = i9;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore10RenderView13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1, i2, i3) {
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
 i9 = HEAP32[i1 + 40 >> 2] | 0;
 i1 = HEAP32[i9 + 104 >> 2] | 0;
 i10 = HEAP32[i9 + 108 >> 2] | 0;
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
function __ZNK7WebCore10RenderView12documentRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 64 | 0;
 i10 = i3 + 80 | 0;
 i11 = i6;
 i12 = i2 | 0;
 i13 = HEAP32[i2 + 88 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = i2 | 0;
  i15 = i2;
  i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 744 >> 2] & 511](i14) | 0;
  i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 736 >> 2] & 511](i14) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, i12);
  __ZNK7WebCore9RenderBox12clientHeightEv(i5, i12);
  i14 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i6 >> 2] = i16;
  HEAP32[i6 + 4 >> 2] = i17;
  HEAP32[i6 + 8 >> 2] = i14;
  HEAP32[i6 + 12 >> 2] = i4;
 } else {
  i4 = i13 + 4 | 0;
  HEAP32[i11 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i11 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
  HEAP32[i11 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
  HEAP32[i11 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i12, i6);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i8, i6);
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i7, i8);
 if ((HEAP32[i2 + 20 >> 2] & 131072 | 0) == 0) {
  __ZN7WebCore7IntRectC1ERKNS_9FloatRectE(i1, i7);
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore11RenderLayer16currentTransformENS_11RenderStyle20ApplyTransformOriginE(i10, HEAP32[i2 + 40 >> 2] | 0, 0);
 __ZNK7WebCore20TransformationMatrix7mapRectERKNS_9FloatRectE(i9, i10, i7);
 i10 = i7;
 i2 = i9;
 HEAP32[i10 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 __ZN7WebCore7IntRectC1ERKNS_9FloatRectE(i1, i7);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore10RenderView17viewLogicalHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 36 | 0;
 i6 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i6 = i1 + 116 | 0;
  do {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
    if (__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 216 >> 2] | 0) | 0) {
     i7 = 0;
    } else {
     break;
    }
    STACKTOP = i2;
    return i7 | 0;
   }
  } while (0);
  __ZNK7WebCore10ScrollView10layoutSizeEv(i3, HEAP32[i6 >> 2] | 0);
  i8 = HEAP32[i3 + 4 >> 2] | 0;
  if (__ZNK7WebCore10ScrollView14useFixedLayoutEv(HEAP32[i6 >> 2] | 0) | 0) {
   d9 = +Math_ceil(+(i8 | 0) * +HEAPF32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
  } else {
   d9 = +(i8 | 0);
  }
  i7 = ~~d9;
  STACKTOP = i2;
  return i7 | 0;
 } else {
  i8 = i1 + 116 | 0;
  do {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
    if (__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 216 >> 2] | 0) | 0) {
     i7 = 0;
    } else {
     break;
    }
    STACKTOP = i2;
    return i7 | 0;
   }
  } while (0);
  __ZNK7WebCore10ScrollView10layoutSizeEv(i4, HEAP32[i8 >> 2] | 0);
  i1 = HEAP32[i4 >> 2] | 0;
  if (__ZNK7WebCore10ScrollView14useFixedLayoutEv(HEAP32[i8 >> 2] | 0) | 0) {
   d10 = +Math_ceil(+(i1 | 0) * +HEAPF32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
  } else {
   d10 = +(i1 | 0);
  }
  i7 = ~~d10;
  STACKTOP = i2;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore10RenderViewD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 56;
 i2 = HEAP32[i1 + 212 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore20FlowThreadControllerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 204 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore25CustomFilterGlobalContextD1Ev(i2);
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 200 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 i2 = i1 + 192 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore11LayoutStateD1Ev(i5);
  __ZdlPv(i5 | 0);
 }
 i5 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore15RenderBlockFlowD2Ev(i6);
  return;
 }
 __ZN7WebCore9TimerBaseD2Ev(i5 + 24 | 0);
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i5 + 8 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 * 24 & -1) >> 2] | 0) != -1) {
      i7 = HEAP32[i2 + (i4 * 24 & -1) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      __ZN3WTF8fastFreeEPv(i7);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZdlPv(i5);
 i6 = i1 | 0;
 __ZN7WebCore15RenderBlockFlowD2Ev(i6);
 return;
}
function __ZN7WebCore10RenderViewD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 56;
 i2 = HEAP32[i1 + 212 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore20FlowThreadControllerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 204 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore25CustomFilterGlobalContextD1Ev(i2);
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 200 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 i2 = i1 + 192 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore11LayoutStateD1Ev(i5);
  __ZdlPv(i5 | 0);
 }
 i5 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore15RenderBlockFlowD2Ev(i6);
  return;
 }
 __ZN7WebCore9TimerBaseD2Ev(i5 + 24 | 0);
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i5 + 8 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 * 24 & -1) >> 2] | 0) != -1) {
      i7 = HEAP32[i2 + (i4 * 24 & -1) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      __ZN3WTF8fastFreeEPv(i7);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZdlPv(i5);
 i6 = i1 | 0;
 __ZN7WebCore15RenderBlockFlowD2Ev(i6);
 return;
}
function __ZNK7WebCore10RenderView13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0, d7 = +0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((i3 | 0) != 0) {
  HEAP8[i3] = 0;
 }
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i5, (HEAP32[i1 + 40 >> 2] | 0) + 104 | 0);
 d6 = +HEAPF32[i5 >> 2];
 d7 = +HEAPF32[i5 + 4 >> 2];
 i5 = i2 + 8 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == (HEAP32[i2 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i1 + 1 | 0);
  i3 = HEAP32[i2 >> 2] | 0;
  i8 = HEAP32[i5 >> 2] | 0;
  i9 = i3 + (i8 << 5) | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  d10 = d6 + +0;
  HEAPF32[i3 + (i8 << 5) + 8 >> 2] = d10;
  HEAPF32[i3 + (i8 << 5) + 12 >> 2] = +0;
  d11 = d7 + +0;
  HEAPF32[i3 + (i8 << 5) + 16 >> 2] = d10;
  HEAPF32[i3 + (i8 << 5) + 20 >> 2] = d11;
  HEAPF32[i3 + (i8 << 5) + 24 >> 2] = +0;
  HEAPF32[i3 + (i8 << 5) + 28 >> 2] = d11;
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i12 + 1 | 0;
  HEAP32[i5 >> 2] = i13;
  STACKTOP = i4;
  return;
 } else {
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8 + (i1 << 5) | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  d11 = d6 + +0;
  HEAPF32[i8 + (i1 << 5) + 8 >> 2] = d11;
  HEAPF32[i8 + (i1 << 5) + 12 >> 2] = +0;
  d6 = d7 + +0;
  HEAPF32[i8 + (i1 << 5) + 16 >> 2] = d11;
  HEAPF32[i8 + (i1 << 5) + 20 >> 2] = d6;
  HEAPF32[i8 + (i1 << 5) + 24 >> 2] = +0;
  HEAPF32[i8 + (i1 << 5) + 28 >> 2] = d6;
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i12 + 1 | 0;
  HEAP32[i5 >> 2] = i13;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore10RenderView18visualOverflowRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i7 = HEAP32[i2 + 88 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if ((HEAP8[(HEAP32[i2 + 116 >> 2] | 0) + 170 | 0] & 1) == 0) {
  if (i8) {
   i9 = i2 + 52 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   i9 = i1;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i9 + 4 >> 2] = 0;
   i9 = i1 + 8 | 0;
   HEAP32[i9 >> 2] = i10;
   HEAP32[i9 + 4 >> 2] = i11;
   STACKTOP = i3;
   return;
  } else {
   i11 = i1;
   i9 = i7 + 20 | 0;
   HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i11 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i11 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i11 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   STACKTOP = i3;
   return;
  }
 } else {
  if (i8) {
   i8 = i2 | 0;
   i9 = i2;
   i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 511](i8) | 0;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 736 >> 2] & 511](i8) | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i4, i6);
   __ZNK7WebCore9RenderBox12clientHeightEv(i5, i6);
   i6 = HEAP32[i4 >> 2] | 0;
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i1 >> 2] = i2;
   HEAP32[i1 + 4 >> 2] = i11;
   HEAP32[i1 + 8 >> 2] = i6;
   HEAP32[i1 + 12 >> 2] = i4;
   STACKTOP = i3;
   return;
  } else {
   i4 = i1;
   i1 = i7 + 4 | 0;
   HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
   HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
   HEAP32[i4 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
   HEAP32[i4 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
   STACKTOP = i3;
   return;
  }
 }
}
function __ZNK7WebCore10RenderView19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i6 = i5 | 0;
 i7 = i5 + 128 | 0;
 i8 = i5 + 136 | 0;
 i9 = i5 + 144 | 0;
 do {
  if ((i2 | 0) == 0) {
   if ((i4 & 2 | 0) == 0) {
    break;
   }
   i10 = i1 | 0;
   if (!(__ZNK7WebCore12RenderObject31shouldUseTransformFromContainerEPKS0_(i10, 0) | 0)) {
    break;
   }
   HEAPF64[i6 >> 3] = +1;
   _memset(i6 + 8 | 0, 0, 32) | 0;
   HEAPF64[i6 + 40 >> 3] = +1;
   _memset(i6 + 48 | 0, 0, 32) | 0;
   HEAPF64[i6 + 80 >> 3] = +1;
   _memset(i6 + 88 | 0, 0, 32) | 0;
   HEAPF64[i6 + 120 >> 3] = +1;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   __ZNK7WebCore12RenderObject25getTransformFromContainerEPKS0_RKNS_10LayoutSizeERNS_20TransformationMatrixE(i10, 0, i7, i6);
   __ZN7WebCore14TransformState14applyTransformERKNS_20TransformationMatrixENS0_21TransformAccumulationEPb(i3, i6, 0, 0);
  }
 } while (0);
 if ((i4 & 1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore9FrameView28scrollOffsetForFixedPositionEv(i9, HEAP32[i1 + 116 >> 2] | 0);
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i8, 0);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore10RenderView22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 144 | 0;
 __ZNK7WebCore9FrameView28scrollOffsetForFixedPositionEv(i6, HEAP32[i1 + 116 >> 2] | 0);
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 do {
  if ((i2 | 0) == 0) {
   i6 = i1 | 0;
   if (!(__ZNK7WebCore12RenderObject31shouldUseTransformFromContainerEPKS0_(i6, 0) | 0)) {
    break;
   }
   HEAPF64[i7 >> 3] = +1;
   _memset(i7 + 8 | 0, 0, 32) | 0;
   HEAPF64[i7 + 40 >> 3] = +1;
   _memset(i7 + 48 | 0, 0, 32) | 0;
   HEAPF64[i7 + 80 >> 3] = +1;
   _memset(i7 + 88 | 0, 0, 32) | 0;
   HEAPF64[i7 + 120 >> 3] = +1;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   __ZNK7WebCore12RenderObject25getTransformFromContainerEPKS0_RKNS_10LayoutSizeERNS_20TransformationMatrixE(i6, 0, i8, i7);
   __ZN7WebCore17RenderGeometryMap8pushViewEPKNS_10RenderViewERKNS_10LayoutSizeEPKNS_20TransformationMatrixE(i3, i1, i5, i7);
   STACKTOP = i4;
   return 0;
  }
 } while (0);
 __ZN7WebCore17RenderGeometryMap8pushViewEPKNS_10RenderViewERKNS_10LayoutSizeEPKNS_20TransformationMatrixE(i3, i1, i5, 0);
 STACKTOP = i4;
 return 0;
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
function __ZNK7WebCore10RenderView20unscaledDocumentRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i2 + 88 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = i2 | 0;
  i10 = i2;
  i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 744 >> 2] & 511](i9) | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 736 >> 2] & 511](i9) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, i7);
  __ZNK7WebCore9RenderBox12clientHeightEv(i5, i7);
  i9 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[i6 + 4 >> 2] = i11;
  HEAP32[i6 + 8 >> 2] = i9;
  HEAP32[i6 + 12 >> 2] = i4;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i7, i6);
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i1, i6);
  STACKTOP = i3;
  return;
 } else {
  i4 = i6;
  i9 = i8 + 4 | 0;
  HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i4 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i4 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i4 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i7, i6);
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i1, i6);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore10RenderView23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 144 | 0;
 if ((i2 & 1 | 0) != 0) {
  __ZNK7WebCore9FrameView28scrollOffsetForFixedPositionEv(i6, HEAP32[i1 + 116 >> 2] | 0);
  HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i5, 0);
 }
 if ((i2 & 2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i1 | 0;
 if (!(__ZNK7WebCore12RenderObject31shouldUseTransformFromContainerEPKS0_(i2, 0) | 0)) {
  STACKTOP = i4;
  return;
 }
 HEAPF64[i7 >> 3] = +1;
 _memset(i7 + 8 | 0, 0, 32) | 0;
 HEAPF64[i7 + 40 >> 3] = +1;
 _memset(i7 + 48 | 0, 0, 32) | 0;
 HEAPF64[i7 + 80 >> 3] = +1;
 _memset(i7 + 88 | 0, 0, 32) | 0;
 HEAPF64[i7 + 120 >> 3] = +1;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 __ZNK7WebCore12RenderObject25getTransformFromContainerEPKS0_RKNS_10LayoutSizeERNS_20TransformationMatrixE(i2, 0, i8, i7);
 __ZN7WebCore14TransformState14applyTransformERKNS_20TransformationMatrixENS0_21TransformAccumulationEPb(i3, i7, 0, 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10RenderView41repaintRectangleInViewAndCompositedLayersERKNS_10LayoutRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) <= 0) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore10RenderView20repaintViewRectangleERKNS_10LayoutRectEb(i1, i2, i3);
 i3 = i1 + 200 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = __ZN3WTF10fastMallocEj(296) | 0;
   __ZN7WebCore21RenderLayerCompositorC1ERNS_10RenderViewE(i7, i1);
   i8 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i7;
   if ((i8 | 0) == 0) {
    i9 = i7;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
   i9 = HEAP32[i3 >> 2] | 0;
  } else {
   i9 = i6;
  }
 } while (0);
 if ((HEAP8[i9 + 88 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i5, i2);
 __ZN7WebCore21RenderLayerCompositor23repaintCompositedLayersEPKNS_7IntRectE(i9, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8GapRectseqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1;
 i4 = i2;
 if (!((HEAP32[i3 >> 2] | 0) == (HEAP32[i4 >> 2] | 0) & (HEAP32[i3 + 4 >> 2] | 0) == (HEAP32[i4 + 4 >> 2] | 0))) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = i1 + 8 | 0;
 i3 = i2 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i3 = i1 + 16 | 0;
 i4 = i2 + 16 | 0;
 if (!((HEAP32[i3 >> 2] | 0) == (HEAP32[i4 >> 2] | 0) & (HEAP32[i3 + 4 >> 2] | 0) == (HEAP32[i4 + 4 >> 2] | 0))) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = i1 + 24 | 0;
 i3 = i2 + 24 | 0;
 if ((HEAP32[i4 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i3 = i1 + 32 | 0;
 i4 = i2 + 32 | 0;
 if (!((HEAP32[i3 >> 2] | 0) == (HEAP32[i4 >> 2] | 0) & (HEAP32[i3 + 4 >> 2] | 0) == (HEAP32[i4 + 4 >> 2] | 0))) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = i1 + 40 | 0;
 i1 = i2 + 40 | 0;
 if ((HEAP32[i4 >> 2] | 0) != (HEAP32[i1 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (HEAP32[i4 + 4 >> 2] | 0) == (HEAP32[i1 + 4 >> 2] | 0);
 return i5 | 0;
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
function __ZNK7WebCore10RenderView8viewRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i4;
 i7 = i2 + 116 | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
   if (!(__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i7 >> 2] | 0) + 216 >> 2] | 0) | 0)) {
    break;
   }
   i8 = i2 + 52 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   i8 = i1;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   i8 = i1 + 8 | 0;
   HEAP32[i8 >> 2] = i9;
   HEAP32[i8 + 4 >> 2] = i10;
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i6, HEAP32[i7 >> 2] | 0, 0);
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 + 4 >> 2] = i7;
 i7 = i4 + 8 | 0;
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i1 + 12 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10RenderView15calcColumnWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i3, i1 | 0);
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 i6 = (HEAP32[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] | 0) >>> 11 & 3;
 do {
  if ((i6 | 0) != 2) {
   i7 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
   if (((i7 | 0) == 0 | (i7 | 0) == 3) ^ (i6 | 0) == 0) {
    i8 = i5;
   } else {
    break;
   }
   i9 = i1 | 0;
   i10 = i4 | 0;
   HEAP32[i10 >> 2] = i8;
   __ZN7WebCore11RenderBlock29setDesiredColumnCountAndWidthEiNS_10LayoutUnitE(i9, 1, i4);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i6 = HEAP32[(__ZNK7WebCore9FrameView10paginationEv(HEAP32[i1 + 116 >> 2] | 0) | 0) + 8 >> 2] | 0;
 i8 = (i6 | 0) == 0 ? i5 : i6;
 i9 = i1 | 0;
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i8;
 __ZN7WebCore11RenderBlock29setDesiredColumnCountAndWidthEiNS_10LayoutUnitE(i9, 1, i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10RenderViewC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 __ZN7WebCore15RenderBlockFlowC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1 | 0, i2, i5);
 HEAP32[i1 >> 2] = H_BASE + 56;
 HEAP32[i1 + 116 >> 2] = __ZNK7WebCore8Document4viewEv(i2) | 0;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 + 128 >> 2] = -1;
 HEAP32[i1 + 132 >> 2] = -1;
 i2 = i1 + 20 | 0;
 _memset(i1 + 136 | 0, 0, 37) | 0;
 _memset(i1 + 176 | 0, 0, 13) | 0;
 _memset(i1 + 192 | 0, 0, 34) | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -1281 | 256;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i1 | 0, 1, 0);
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -25165825 | 16777216;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10RenderViewC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 __ZN7WebCore15RenderBlockFlowC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1 | 0, i2, i5);
 HEAP32[i1 >> 2] = H_BASE + 56;
 HEAP32[i1 + 116 >> 2] = __ZNK7WebCore8Document4viewEv(i2) | 0;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 + 128 >> 2] = -1;
 HEAP32[i1 + 132 >> 2] = -1;
 i2 = i1 + 20 | 0;
 _memset(i1 + 136 | 0, 0, 37) | 0;
 _memset(i1 + 176 | 0, 0, 13) | 0;
 _memset(i1 + 192 | 0, 0, 34) | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -1281 | 256;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i1 | 0, 1, 0);
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -25165825 | 16777216;
 STACKTOP = i4;
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
function __ZN7WebCore10RenderView22imageQualityControllerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 180 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 i3 = __Znwj(88) | 0;
 __ZN7WebCore22ImageQualityControllerC1ERKNS_10RenderViewE(i3, i1);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  i4 = i3;
  return i4 | 0;
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 24 | 0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i6 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i6 * 24 & -1) >> 2] | 0) != -1) {
      i7 = HEAP32[i3 + (i6 * 24 & -1) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      __ZN3WTF8fastFreeEPv(i7);
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZdlPv(i1);
 i4 = HEAP32[i2 >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore10RenderView19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP32[i2 + 72 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
 i7 = i6 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore13HitTestResult12setInnerNodeEPNS_4NodeE(i2, i7);
 if ((HEAP32[i2 + 76 >> 2] | 0) == 0) {
  __ZN7WebCore13HitTestResult21setInnerNonSharedNodeEPNS_4NodeE(i2, i7);
 }
 i7 = i3;
 i3 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i5 + 4 >> 2] = i3;
 __ZNK7WebCore11RenderBlock17offsetForContentsERNS_11LayoutPointE(i1 | 0, i5);
 i1 = i2 + 88 | 0;
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 + 4 >> 2] = i2;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore10RenderView20computeLogicalHeightENS_10LayoutUnitES1_RNS_9RenderBox27LogicalExtentComputedValuesE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
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
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
   if (!(__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i1 + 116 >> 2] | 0) + 216 >> 2] | 0) | 0)) {
    break;
   }
   i7 = HEAP32[i2 >> 2] | 0;
   i8 = i4 | 0;
   HEAP32[i8 >> 2] = i7;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i7 = __ZNK7WebCore10RenderView17viewLogicalHeightEv(i1) | 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i7;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore10RenderView30repaintViewAndCompositedLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((HEAP32[i2 + 208 >> 2] | 0) == 0) {
  __ZNK7WebCore12RenderObject7repaintEb(i1 | 0, 0);
 } else {
  __ZN7WebCore11RenderLayer22setBackingNeedsRepaintENS_13GraphicsLayer17ShouldClipToLayerE(i2, 0);
 }
 i2 = i1 + 200 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = __ZN3WTF10fastMallocEj(296) | 0;
   __ZN7WebCore21RenderLayerCompositorC1ERNS_10RenderViewE(i4, i1);
   i5 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i5 | 0) == 0) {
    i6 = i4;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
   i6 = HEAP32[i2 >> 2] | 0;
  } else {
   i6 = i3;
  }
 } while (0);
 if ((HEAP8[i6 + 88 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor23repaintCompositedLayersEPKNS_7IntRectE(i6, 0);
 return;
}
function __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERKNS_15HitTestLocationERNS_13HitTestResultE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if (__ZN7WebCore11RenderLayer7hitTestERKNS_14HitTestRequestERKNS_15HitTestLocationERNS_13HitTestResultE(HEAP32[i1 + 40 >> 2] | 0, i2, i3, i4) | 0) {
  i7 = 1;
  STACKTOP = i5;
  return i7 | 0;
 }
 if ((HEAP32[i2 >> 2] & 512 | 0) == 0) {
  i7 = 0;
  STACKTOP = i5;
  return i7 | 0;
 }
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i6 + 4 >> 2] = i1;
 i1 = __ZN7WebCore10ScrollView16scrollbarAtPointERKNS_8IntPointE(i2, i6) | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  STACKTOP = i5;
  return i7 | 0;
 }
 __ZN7WebCore13HitTestResult12setScrollbarEPNS_9ScrollbarE(i4, i1);
 i7 = 1;
 STACKTOP = i5;
 return i7 | 0;
}
function __ZN7WebCore10RenderView8addChildEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 do {
  if ((i2 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 248 >> 2] & 511](i2) | 0) {
    break;
   }
   i4 = __ZNK7WebCore8Document20seamlessParentIFrameEv(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = __ZNK7WebCore4Node9renderBoxEv(i4 | 0) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i4 = i5 + 20 | 0;
   if ((HEAP32[i4 >> 2] & 805306368 | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i5 | 0) | 0) == 0) {
    break;
   }
   i5 = i2 + 20 | 0;
   HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -805306369 | HEAP32[i4 >> 2] & 805306368;
  }
 } while (0);
 __ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2_(i1 | 0, i2, i3);
 return;
}
function __ZNK7WebCore10RenderView23pageOrViewLogicalHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
  HEAP32[i1 >> 2] = HEAP32[i2 + 184 >> 2];
  return;
 }
 do {
  if ((HEAP32[i2 + 20 >> 2] & 4194304 | 0) != 0) {
   i3 = HEAP32[i2 + 36 >> 2] | 0;
   i4 = (HEAP32[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] | 0) >>> 11 & 3;
   if ((i4 | 0) == 2) {
    break;
   }
   i5 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
   if (!(((i5 | 0) == 0 | (i5 | 0) == 3) ^ (i4 | 0) == 0)) {
    break;
   }
   i4 = HEAP32[(__ZNK7WebCore9FrameView10paginationEv(HEAP32[i2 + 116 >> 2] | 0) | 0) + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   HEAP32[i1 >> 2] = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = __ZNK7WebCore10RenderView17viewLogicalHeightEv(i2) | 0;
 return;
}
function __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if (__ZN7WebCore11RenderLayer7hitTestERKNS_14HitTestRequestERKNS_15HitTestLocationERNS_13HitTestResultE(HEAP32[i1 + 40 >> 2] | 0, i2, i3 | 0, i3) | 0) {
  i6 = 1;
  STACKTOP = i4;
  return i6 | 0;
 }
 if ((HEAP32[i2 >> 2] & 512 | 0) == 0) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 i1 = __ZN7WebCore10ScrollView16scrollbarAtPointERKNS_8IntPointE(i2, i5) | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 __ZN7WebCore13HitTestResult12setScrollbarEPNS_9ScrollbarE(i3, i1);
 i6 = 1;
 STACKTOP = i4;
 return i6 | 0;
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
function __ZN7WebCore10RenderView5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i1 + 116 | 0;
 do {
  if ((HEAP32[(__ZNK7WebCore9FrameView10paginationEv(HEAP32[i7 >> 2] | 0) | 0) >> 2] | 0) != 0) {
   i8 = HEAP32[i2 + 28 >> 2] | 0;
   if (!((i8 | 0) == 0 | (i8 | 0) == (i1 | 0))) {
    break;
   }
   i8 = HEAP32[i2 >> 2] | 0;
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i5, i2 + 4 | 0);
   __ZNK7WebCore9FrameView19baseBackgroundColorEv(i6, HEAP32[i7 >> 2] | 0);
   __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i8, i5, i6, 0);
  }
 } while (0);
 __ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2, i3);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore10RenderView10viewHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 116 | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
   if (__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 216 >> 2] | 0) | 0) {
    i5 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i5 | 0;
  }
 } while (0);
 __ZNK7WebCore10ScrollView10layoutSizeEv(i3, HEAP32[i4 >> 2] | 0);
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 if (__ZNK7WebCore10ScrollView14useFixedLayoutEv(HEAP32[i4 >> 2] | 0) | 0) {
  d7 = +Math_ceil(+(i6 | 0) * +HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
 } else {
  d7 = +(i6 | 0);
 }
 i5 = ~~d7;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore10RenderView9viewWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 116 | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
   if (__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 216 >> 2] | 0) | 0) {
    i5 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i5 | 0;
  }
 } while (0);
 __ZNK7WebCore10ScrollView10layoutSizeEv(i3, HEAP32[i4 >> 2] | 0);
 i6 = HEAP32[i3 >> 2] | 0;
 if (__ZNK7WebCore10ScrollView14useFixedLayoutEv(HEAP32[i4 >> 2] | 0) | 0) {
  d7 = +Math_ceil(+(i6 | 0) * +HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
 } else {
  d7 = +(i6 | 0);
 }
 i5 = ~~d7;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalINS_10LayoutUnitEPNS_14FloatingObjectEEEE4NodeEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 16 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(HEAP32[i5 >> 2] | 0);
    __ZdlPv(i5);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i7 = i1;
 __ZN3WTF8fastFreeEPv(i7);
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
function __ZNK7WebCore10RenderView22availableLogicalHeightENS_26AvailableLogicalHeightTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i6 & 4194304 | 0) != 0) {
  HEAP32[i1 >> 2] = HEAP32[(__ZNK7WebCore11RenderBlock10columnInfoEv(i2 | 0) | 0) + 20 >> 2];
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i2 + 116 >> 2] | 0;
 i2 = i7 | 0;
 if ((i6 & 8192 | 0) == 0) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 164 >> 2] & 127](i5, i2, 0);
  i8 = HEAP32[i5 + 8 >> 2] | 0;
 } else {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 164 >> 2] & 127](i4, i2, 0);
  i8 = HEAP32[i4 + 12 >> 2] | 0;
 }
 HEAP32[i1 >> 2] = i8;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10RenderView13intervalArenaEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 212 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(28) | 0;
   HEAP32[i1 + 4 >> 2] = 1;
   HEAP32[i1 >> 2] = H_BASE + 32;
   HEAP32[i1 + 8 >> 2] = 0;
   HEAP32[i1 + 12 >> 2] = 16384;
   HEAP32[i1 + 16 >> 2] = 0;
   HEAP32[i1 + 20 >> 2] = 0;
   HEAP32[i1 + 24 >> 2] = 0;
   i3 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i1;
   if ((i3 | 0) == 0) {
    break;
   }
   i1 = i3 + 4 | 0;
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i1 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZN7WebCore10RenderView20flowThreadControllerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 208 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   __ZN7WebCore20FlowThreadController6createEPNS_10RenderViewE(i3, i1);
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = i3 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i4 >> 2] = i7;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore20FlowThreadControllerD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 STACKTOP = i2;
 return HEAP32[i4 >> 2] | 0;
}
function __ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalINS_10LayoutUnitEPNS_14FloatingObjectEEEE4NodeEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 16 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(HEAP32[i5 >> 2] | 0);
    __ZdlPv(i5);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore10RenderView21setMaximalOutlineSizeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 176 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 i2 = i1 + 200 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = __ZN3WTF10fastMallocEj(296) | 0;
   __ZN7WebCore21RenderLayerCompositorC1ERNS_10RenderViewE(i4, i1);
   i5 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i5 | 0) == 0) {
    i6 = i4;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
   i6 = HEAP32[i2 >> 2] | 0;
  } else {
   i6 = i3;
  }
 } while (0);
 __ZN7WebCore21RenderLayerCompositor31setCompositingLayersNeedRebuildEb(i6, 1);
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
function __ZN7WebCore10RenderView18setBestTruncatedAtEiPNS_20RenderBoxModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i1 + 144 | 0;
 i8 = i1 + 172 | 0;
 if ((HEAP8[i8] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 if (i4) {
  HEAP8[i8] = 1;
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 700 >> 2] & 127](i6, i3);
 i3 = HEAP32[i6 + 8 >> 2] | 0;
 i6 = i1 + 152 | 0;
 if ((i3 | 0) <= (HEAP32[i6 >> 2] | 0)) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i6 >> 2] = i3;
 HEAP32[i7 >> 2] = i2;
 STACKTOP = i5;
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
function __ZNK7WebCore10RenderView29rootBackgroundIsEntirelyFixedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i1 | 0;
 } else {
  i4 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore12RenderObject26hasEntirelyFixedBackgroundEv(__ZN7WebCore13RenderElement25rendererForRootBackgroundEv(i1) | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore10RenderView15pushLayoutStateERNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore16RenderFlowThread25pushFlowThreadLayoutStateERKNS_12RenderObjectE(i4, i2);
  }
 } while (0);
 i3 = __Znwj(88) | 0;
 __ZN7WebCore11LayoutStateC1ERNS_12RenderObjectE(i3, i2);
 i2 = i1 + 192 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore11LayoutStateD1Ev(i1);
 __ZdlPv(i1 | 0);
 return;
}
function __ZNK7WebCore10RenderView34shouldDisableLayoutStateForSubtreeEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  if ((HEAP32[i4 + 20 >> 2] & 4587520 | 0) != 0) {
   i3 = 1;
   i5 = 7;
   break;
  }
  i2 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i4, 0, 0) | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 6;
   break;
  } else {
   i4 = i2 | 0;
  }
 }
 if ((i5 | 0) == 7) {
  return i3 | 0;
 } else if ((i5 | 0) == 6) {
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
function __ZN7WebCore10RenderView14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15RenderBlockFlow14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1 | 0, i2, i3);
 i3 = i1 + 208 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore20FlowThreadController14styleDidChangeEv(HEAP32[i3 >> 2] | 0);
 return;
}
function __ZN7WebCore10RenderView10compositorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 200 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 i3 = __ZN3WTF10fastMallocEj(296) | 0;
 __ZN7WebCore21RenderLayerCompositorC1ERNS_10RenderViewE(i3, i1);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  i4 = i3;
  return i4 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 i4 = HEAP32[i2 >> 2] | 0;
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
function __ZN7WebCore10RenderView25customFilterGlobalContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 204 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = i1;
  return i3 | 0;
 }
 i1 = __Znwj(12) | 0;
 __ZN7WebCore25CustomFilterGlobalContextC1Ev(i1);
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i4 | 0) == 0) {
  i3 = i1;
  return i3 | 0;
 }
 __ZN7WebCore25CustomFilterGlobalContextD1Ev(i4);
 __ZdlPv(i4);
 i3 = HEAP32[i2 >> 2] | 0;
 return i3 | 0;
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
function iiiiiii___ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function viiii___ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore10RenderView13layoutContentERKNS_11LayoutStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 __ZN7WebCore11RenderBlock6layoutEv(i1 | 0);
 i2 = i1 + 208 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore20FlowThreadController28layoutRenderNamedFlowThreadsEv(HEAP32[i2 >> 2] | 0);
 return;
}
function __ZNK7WebCore10RenderView12viewportSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i4, HEAP32[i2 + 116 >> 2] | 0, 1);
 i2 = i4 + 8 | 0;
 i4 = i1;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i4 + 4 >> 2] = i1;
 STACKTOP = i3;
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
function __ZNK7WebCore10RenderView38checkTwoPassLayoutForAutoHeightRegionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   i1 = HEAP32[i2 + 16 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i3 = 0;
    break;
   }
   if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = (HEAP32[i2 + 12 >> 2] | 0) != 0;
  }
 } while (0);
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
function viiii___ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
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
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
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
function __ZNK7WebCore10RenderView13shouldRepaintERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) < 1) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 12 >> 2] | 0) > 0;
 return i3 | 0;
}
function __ZN7WebCore10RenderView35pushLayoutStateForCurrentFlowThreadERKNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore16RenderFlowThread25pushFlowThreadLayoutStateERKNS_12RenderObjectE(i1, i2);
 return;
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
function __ZNK7WebCore10RenderView23shouldUsePrintingLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(HEAP32[(HEAP32[i1 + 116 >> 2] | 0) + 216 >> 2] | 0) | 0;
 return i2 | 0;
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
function __ZNK7WebCore10RenderView12getSelectionERPNS_12RenderObjectERiS3_S4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP32[i2 >> 2] = HEAP32[i1 + 120 >> 2];
 HEAP32[i3 >> 2] = HEAP32[i1 + 128 >> 2];
 HEAP32[i4 >> 2] = HEAP32[i1 + 124 >> 2];
 HEAP32[i5 >> 2] = HEAP32[i1 + 132 >> 2];
 return;
}
function __ZN7WebCore10RenderView19repaintRootContentsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((HEAP32[i2 + 208 >> 2] | 0) == 0) {
  __ZNK7WebCore12RenderObject7repaintEb(i1 | 0, 0);
  return;
 } else {
  __ZN7WebCore11RenderLayer22setBackingNeedsRepaintENS_13GraphicsLayer17ShouldClipToLayerE(i2, 0);
  return;
 }
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
function __ZNK7WebCore10RenderView25hasRenderNamedFlowThreadsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 12 >> 2] | 0) != 0;
 return i3 | 0;
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
function viiiii___ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore10RenderView34popLayoutStateForCurrentFlowThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore16RenderFlowThread24popFlowThreadLayoutStateEv(i1);
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
function __ZN7WebCore10RenderView14clearSelectionEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderLayer25repaintBlockSelectionGapsEv(HEAP32[i1 + 40 >> 2] | 0);
 __ZN7WebCore10RenderView12setSelectionEPNS_12RenderObjectEiS2_iNS0_20SelectionRepaintModeE(i1, 0, -1, 0, -1, 1);
 return;
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
function viii___ZNK7WebCore11RenderBlock29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore11RenderBlock29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_(i1 | 0, i2 | 0, i3 | 0);
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
function __ZN7WebCore10RenderView13setIsInWindowEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 200 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor13setIsInWindowEb(i3, i2);
 return;
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
function __ZNK7WebCore10RenderView15usesCompositingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 200 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i2 + 88 | 0] & 1) != 0;
 return i3 | 0;
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
function dynCall_iiiifi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiifi[i1 & 7](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0) | 0;
}
function __ZNK7WebCore10RenderView17selectionStartEndERiS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i2 >> 2] = HEAP32[i1 + 128 >> 2];
 HEAP32[i3 >> 2] = HEAP32[i1 + 132 >> 2];
 return;
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
function vii___ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0___wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0_(i1 | 0, i2 | 0);
}
function __ZNK7WebCore10RenderView15requiresColumnsEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (HEAP32[(__ZNK7WebCore9FrameView10paginationEv(HEAP32[i1 + 116 >> 2] | 0) | 0) >> 2] | 0) != 0 | 0;
}
function iii___ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb(i1 | 0, i2 | 0) | 0;
}
function __ZNK7WebCore10RenderView14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return (HEAP32[i2 + 20 >> 2] & 512 | 0) != 0 | 0;
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
function __ZNK7WebCore10RenderView14paginationUnitEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(__ZNK7WebCore9FrameView10paginationEv(HEAP32[i1 + 116 >> 2] | 0) | 0) + 4 | 0] & 1 ^ 1) & 255 | 0;
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
function vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore15RenderBlockFlow24canHaveGeneratedChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15RenderBlockFlow24canHaveGeneratedChildrenEv(i1 | 0) | 0;
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
function __ZNK7WebCore10RenderView8printingEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0 | 0;
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
function ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv(i1 | 0) | 0;
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
function vi___ZN7WebCore11RenderBlock29computePreferredLogicalWidthsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock29computePreferredLogicalWidthsEv(i1 | 0);
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
function __ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
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
function vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject15innerLineHeightEv(i1 | 0) | 0;
}
function __ZNK7WebCore10RenderView10zoomFactorEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[(HEAP32[i1 + 116 >> 2] | 0) + 216 >> 2] | 0) + 480 >> 2]);
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
function ii___ZNK7WebCore11RenderBlock12avoidsFloatsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock12avoidsFloatsEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox12scrollHeightEv(i1 | 0) | 0;
}
function vi___ZN7WebCore15RenderBlockFlow11deleteLinesEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow11deleteLinesEv(i1 | 0);
}
function ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox10scrollLeftEv(i1 | 0) | 0;
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
function b11(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(11);
}
function __ZNK7WebCore9RenderBox10marginLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 72 >> 2];
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
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore9RenderBox9marginTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 60 >> 2];
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore10RenderViewD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10RenderViewD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function b13(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(13);
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
function b2(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(2);
 return 0;
}
function __ZN7WebCore11RenderBlock17scrollbarsChangedEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
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
function __ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper() {
 __ZN7WebCore9RenderBox15createInlineBoxEv();
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
 return 0;
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
function __ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b14(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(14);
}
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function __ZNK7WebCore10RenderView10renderNameEv(i1) {
 i1 = i1 | 0;
 return H_BASE + 8 | 0;
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
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
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
function __ZNK7WebCore10RenderView13requiresLayerEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function b12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(12);
 return 0;
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZNK7WebCore10RenderView19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb,b0,viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper,b0,viiiii___ZN7WebCore15RenderBlockFlow22clipOutFloatingObjectsERNS_11RenderBlockEPKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE__wrapper,b0,viiiii___ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b0,viiiii___ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b0,viiiii___ZNK7WebCore15RenderBlockFlow29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1___wrapper,b0,__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE,b0,viiiii___ZNK7WebCore15RenderBlockFlow30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1___wrapper,b0,viiiii___ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b__wrapper,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiiiiii = [b1,b1,viiiiiiiiii___ZN7WebCore15RenderBlockFlow19inlineSelectionGapsERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE__wrapper,b1];
  var FUNCTION_TABLE_iiiifi = [b2,b2,iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b2,iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b3,vi___ZN7WebCore15RenderBlockFlow19updateLogicalHeightEv__wrapper,b3,__ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalINS_10LayoutUnitEPNS_14FloatingObjectEEEE4NodeEED0Ev,b3,__ZN7WebCore12RenderObject17updateFromElementEv,b3,vi___ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv__wrapper,b3,vi___ZN7WebCore15RenderBlockFlow11deleteLinesEv__wrapper,b3,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b3,__ZN7WebCore10RenderViewD2Ev,b3,vi___ZN7WebCore11RenderBlock29computePreferredLogicalWidthsEv__wrapper,b3,vi___ZN7WebCore11RenderBlock23addOverflowFromChildrenEv__wrapper,b3,__ZN7WebCore10RenderView6layoutEv,b3,vi___ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv__wrapper,b3,vi___ZN7WebCore15RenderBlockFlow15willBeDestroyedEv__wrapper,b3,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv
  ,b3,vi___ZN7WebCore15RenderBlockFlow16insertedIntoTreeEv__wrapper,b3,vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper,b3,vi___ZN7WebCore11RenderBlock17updateFirstLetterEv__wrapper,b3,__ZN7WebCore9RenderBox14stopAutoscrollEv,b3,__ZN7WebCore10RenderView15calcColumnWidthEv,b3,__ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalINS_10LayoutUnitEPNS_14FloatingObjectEEEE4NodeEED1Ev,b3,__ZN7WebCore10RenderViewD0Ev,b3,__ZN7WebCore10RenderView18updateLogicalWidthEv,b3,vi___ZN7WebCore15RenderBlockFlow29addOverflowFromInlineChildrenEv__wrapper,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZNK7WebCore10RenderView18visualOverflowRectEv,b4,vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper,b4,vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper,b4,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b4,__ZN7WebCore15RenderBlockFlow26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b4,vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper,b4,__ZNK7WebCore15RenderBlockFlow21collapsedMarginBeforeEv,b4,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b4,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b4,vii___ZN7WebCore15RenderBlockFlow19createRootInlineBoxEv__wrapper,b4,vii___ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b4,vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper,b4,vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper
  ,b4,vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper,b4,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b4,__ZNK7WebCore9RenderBox9marginTopEv,b4,vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper,b4,vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper,b4,vii___ZNK7WebCore11RenderBlock21availableLogicalWidthEv__wrapper,b4,vii___ZN7WebCore11RenderBlock15updateDragStateEb__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv,b4,__ZNK7WebCore9RenderBox13intrinsicSizeEv,b4,__ZNK7WebCore15RenderBlockFlow20collapsedMarginAfterEv,b4,vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper,b4,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b4,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b4,vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper,b4,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper
  ,b4,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv,b4,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv,b4,__ZNK7WebCore9RenderBox11marginRightEv,b4,vii___ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0___wrapper,b4,__ZNK7WebCore9RenderBox11offsetWidthEv,b4,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b4,vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b4,vii___ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b4,vii___ZN7WebCore15RenderBlockFlow24repaintOverhangingFloatsEb__wrapper,b4,vii___ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE__wrapper,b4,__ZNK7WebCore9RenderBox10marginLeftEv,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv,b4,__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv
  ,b4,__ZNK7WebCore9RenderBox17borderBoundingBoxEv,b4,__ZNK7WebCore9RenderBox12marginBottomEv,b4,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b4,__ZNK7WebCore9RenderBox12offsetHeightEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiiiiii = [b5,b5,iiiiiii___ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5,iiiiiii___ZN7WebCore15RenderBlockFlow21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5,iiiiiii___ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5];
  var FUNCTION_TABLE_ii = [b6,b6,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b6,ii___ZNK7WebCore11RenderBlock14firstLineBlockEv__wrapper,b6,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b6,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b6,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b6,__ZNK7WebCore12RenderObject10isRubyTextEv,b6,__ZNK7WebCore12RenderObject6isRubyEv,b6,ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper,b6,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b6,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b6,__ZNK7WebCore10RenderView10renderNameEv,b6,ii___ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv__wrapper,b6,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b6,__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv
  ,b6,__ZNK7WebCore12RenderObject8isWidgetEv,b6,__ZNK7WebCore12RenderObject11isTextFieldEv,b6,__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv,b6,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderRightEv,b6,__ZNK7WebCore10RenderView13requiresLayerEv,b6,__ZNK7WebCore12RenderObject10isMenuListEv,b6,ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper,b6,__ZNK7WebCore12RenderObject9isSVGRootEv,b6,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b6,__ZNK7WebCore20RenderBoxModelObject12borderBottomEv,b6,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b6,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b6,ii___ZNK7WebCore15RenderBlockFlow15canHaveChildrenEv__wrapper,b6,__ZNK7WebCore12RenderObject7isMeterEv
  ,b6,__ZNK7WebCore12RenderObject14isSVGContainerEv,b6,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b6,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b6,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b6,__ZNK7WebCore12RenderObject7isQuoteEv,b6,__ZNK7WebCore12RenderObject10isListItemEv,b6,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b6,__ZNK7WebCore12RenderObject10isSVGImageEv,b6,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b6,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b6,ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject16isRenderTableColEv,b6,__ZNK7WebCore12RenderObject7isVideoEv,b6,__ZNK7WebCore12RenderObject10isProgressEv,b6,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv
  ,b6,__ZNK7WebCore12RenderObject13isCombineTextEv,b6,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b6,__ZNK7WebCore12RenderObject5isWBREv,b6,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b6,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b6,__ZNK7WebCore13RenderElement14firstChildSlowEv,b6,ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper,b6,ii___ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b6,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b6,__ZNK7WebCore12RenderObject7isFrameEv,b6,ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper,b6,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b6,ii___ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv__wrapper,b6,__ZNK7WebCore15RenderBlockFlow14containsFloatsEv
  ,b6,__ZNK7WebCore12RenderObject9isReplicaEv,b6,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b6,__ZNK7WebCore9RenderBox14hasControlClipEv,b6,__ZNK7WebCore12RenderObject7isMediaEv,b6,__ZNK7WebCore12RenderObject10isSVGShapeEv,b6,__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv,b6,__ZNK7WebCore11RenderBlock19virtualContinuationEv,b6,__ZNK7WebCore12RenderObject14isRenderButtonEv,b6,__ZNK7WebCore12RenderObject8isSliderEv,b6,ii___ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv__wrapper,b6,__ZNK7WebCore12RenderObject10isRubyBaseEv,b6,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b6,ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper,b6,ii___ZNK7WebCore11RenderBlock12avoidsFloatsEv__wrapper,b6,__ZNK7WebCore10RenderView14paginationUnitEv
  ,b6,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b6,ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper,b6,__ZNK7WebCore12RenderObject14isTableCaptionEv,b6,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b6,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper,b6,__ZNK7WebCore12RenderObject13isSliderThumbEv,b6,__ZNK7WebCore12RenderObject13isTextControlEv,b6,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b6,__ZNK7WebCore12RenderObject9isSVGTextEv,b6,__ZNK7WebCore12RenderObject10isTextAreaEv,b6,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b6,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b6,__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv,b6,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b6,__ZNK7WebCore12RenderObject11isTableCellEv
  ,b6,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b6,__ZNK7WebCore12RenderObject12isRenderGridEv,b6,ii___ZNK7WebCore15RenderBlockFlow24canHaveGeneratedChildrenEv__wrapper,b6,__ZNK7WebCore12RenderObject9isListBoxEv,b6,__ZNK7WebCore12RenderObject9isSVGPathEv,b6,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b6,ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper,b6,__ZNK7WebCore13RenderElement13lastChildSlowEv,b6,__ZNK7WebCore12RenderObject13isRenderImageEv,b6,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b6,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b6,ii___ZNK7WebCore11RenderBlock14hasLineIfEmptyEv__wrapper,b6,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b6,__ZNK7WebCore12RenderObject6lengthEv,b6,__ZNK7WebCore12RenderObject10isTableRowEv
  ,b6,__ZNK7WebCore12RenderObject10isFrameSetEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderAfterEv,b6,__ZNK7WebCore12RenderObject10isFieldsetEv,b6,__ZNK7WebCore12RenderObject11isSVGInlineEv,b6,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b6,ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b6,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b6,ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper,b6,__ZNK7WebCore12RenderObject9isRubyRunEv,b6,__ZNK7WebCore20RenderBoxModelObject9borderEndEv,b6,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b6,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b6,__ZNK7WebCore12RenderObject14isRenderRegionEv,b6,ii___ZNK7WebCore11RenderBlock13hoverAncestorEv__wrapper
  ,b6,ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper,b6,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b6,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b6,__ZNK7WebCore20RenderBoxModelObject9borderTopEv,b6,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject7isImageEv,b6,__ZNK7WebCore12RenderObject9isCounterEv,b6,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b6,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b6,ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper,b6,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b6,__ZNK7WebCore12RenderObject8isCanvasEv,b6,__ZNK7WebCore20RenderBoxModelObject10borderLeftEv,b6,ii___ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv__wrapper,b6,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv
  ,b6,__ZNK7WebCore12RenderObject12isListMarkerEv,b6,__ZNK7WebCore12RenderObject7isEmptyEv,b6,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderStartEv,b6,__ZNK7WebCore12RenderObject7isTableEv,b6,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject14isTableSectionEv,b6,ii___ZNK7WebCore15RenderBlockFlow8hasLinesEv__wrapper,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_iiii = [b7,b7,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b7,iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper,b7,__ZNK7WebCore10RenderView14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b7,iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper,b7,__ZNK7WebCore10RenderView22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,viii___ZN7WebCore15RenderBlockFlow15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper,b8,viii___ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b8,viii___ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE__wrapper,b8,viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper,b8,__ZNK7WebCore10RenderView23mapAbsoluteToLocalPointEjRNS_14TransformStateE,b8,__ZN7WebCore10RenderView5paintERNS_9PaintInfoERKNS_11LayoutPointE,b8,viii___ZNK7WebCore11RenderBlock29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2___wrapper,b8,__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE,b8,viii___ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore10RenderView19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE,b8,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b8,__ZN7WebCore11RenderBlock17scrollbarsChangedEbb,b8,__ZNK7WebCore10RenderView22availableLogicalHeightENS_26AvailableLogicalHeightTypeE,b8,__ZN7WebCore10RenderView19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE
  ,b8,viii___ZN7WebCore15RenderBlockFlow16positionForPointERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore10RenderView8addChildEPNS_12RenderObjectES2_,b8,__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE,b8,__ZNK7WebCore10RenderView13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE,b8,__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE,b8,__ZNK7WebCore10RenderView13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb,b8,viii___ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2___wrapper,b8,__ZN7WebCore10RenderView14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b8,__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE,b8,viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE__wrapper,b8,viii___ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore15RenderBlockFlow32moveAllChildrenIncludingFloatsToEPNS_11RenderBlockEb__wrapper,b8,__ZN7WebCore10RenderViewC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE,b8,viii___ZN7WebCore15RenderBlockFlow19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE__wrapper
  ,b8,viii___ZN7WebCore15RenderBlockFlow15computeOverflowENS_10LayoutUnitEb__wrapper,b8,viii___ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE__wrapper,b8,__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8,b8,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_v = [b9,b9,v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper,b9];
  var FUNCTION_TABLE_iiiii = [b10,b10,iiiii___ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5___wrapper,b10,iiiii___ZN7WebCore15RenderBlockFlow21relayoutForPaginationEbNS_10LayoutUnitERNS_21LayoutStateMaintainerE__wrapper,b10,b10,b10];
  var FUNCTION_TABLE_viiiiii = [b11,b11,viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper,b11];
  var FUNCTION_TABLE_iii = [b12,b12,iii___ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE__wrapper,b12,__ZNK7WebCore10RenderView15requiresColumnsEi,b12,iii___ZNK7WebCore15RenderBlockFlow19inlineBlockBaselineENS_17LineDirectionModeE__wrapper,b12,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b12,iii___ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb__wrapper,b12,__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb,b12,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b12,iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper,b12,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b12,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b12,b12,b12,b12,b12,b12,b12,b12
  ,b12,b12,b12];
  var FUNCTION_TABLE_iiiiii = [b13,b13,iiiiii___ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b13,iiiiii___ZN7WebCore15RenderBlockFlow13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE__wrapper,b13,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b13];
  var FUNCTION_TABLE_viiii = [b14,b14,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b14,__ZNK7WebCore10RenderView20computeLogicalHeightENS_10LayoutUnitES1_RNS_9RenderBox27LogicalExtentComputedValuesE,b14,viiii___ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b14,viiii___ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b14,viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper,b14,__ZNK7WebCore10RenderView21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb,b14,__ZNK7WebCore15RenderBlockFlow31adjustInlineDirectionLineBoundsEiRfS1_,b14,viiii___ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b14,__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb,b14,viiii___ZN7WebCore15RenderBlockFlow11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb__wrapper,b14,__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b14,viiii___ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3___wrapper,b14,b14,b14,b14
  ,b14,b14,b14];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_iiiifi: dynCall_iiiifi, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_iiiifi": invoke_iiiifi, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
var dynCall_iiiifi = Module["dynCall_iiiifi"] = asm["dynCall_iiiifi"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore9RenderBox11marginRightEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore10RenderView18visualOverflowRectEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","__ZNK7WebCore10RenderView8printingEv","__ZNK7WebCore15RenderBlockFlow14containsFloatsEv","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZNK7WebCore10RenderView10renderNameEv","__ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE","__ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalINS_10LayoutUnitEPNS_14FloatingObjectEEEE4NodeEED0Ev","__ZN7WebCore15RenderBlockFlow26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZNK7WebCore15RenderBlockFlow21collapsedMarginBeforeEv","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore10RenderView15pushLayoutStateERNS_12RenderObjectE","__ZN7WebCore10RenderView10compositorEv","__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZNK7WebCore20RenderBoxModelObject11borderRightEv","__ZNK7WebCore10RenderView13requiresLayerEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZNK7WebCore10RenderView25hasRenderNamedFlowThreadsEv","__ZNK7WebCore12RenderObject10isMenuListEv","__ZN7WebCore10RenderView39layoutContentToComputeOverflowInRegionsERKNS_11LayoutStateE","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__ZNK7WebCore10RenderView19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb","__ZNK7WebCore9RenderBox12offsetHeightEv","__ZNK7WebCore20RenderBoxModelObject12borderBottomEv","__ZN7WebCore10RenderView15calcColumnWidthEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZN7WebCore10RenderView18setBestTruncatedAtEiPNS_20RenderBoxModelObjectEb","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore10RenderView20unscaledDocumentRectEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore10RenderView20computeLogicalHeightENS_10LayoutUnitES1_RNS_9RenderBox27LogicalExtentComputedValuesE","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore10RenderView38checkTwoPassLayoutForAutoHeightRegionsEv","__ZNK7WebCore11RenderBlock19virtualContinuationEv","__ZNK7WebCore10RenderView23mapAbsoluteToLocalPointEjRNS_14TransformStateE","__ZN7WebCore10RenderView5paintERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZN7WebCore10RenderView39layoutContentInAutoLogicalHeightRegionsERKNS_11LayoutStateE","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZNK7WebCore9RenderBox9marginTopEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZN7WebCore10RenderViewD0Ev","__ZNK7WebCore10RenderView17viewLogicalHeightEv","__ZN7WebCore10RenderView12setSelectionEPNS_12RenderObjectEiS2_iNS0_20SelectionRepaintModeE","__ZNK7WebCore10RenderView14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZN7WebCore10RenderView35pushLayoutStateForCurrentFlowThreadERKNS_12RenderObjectE","__ZNK7WebCore12RenderObject7isFrameEv","__ZNK7WebCore9RenderBox19contentLogicalWidthEv","__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv","__ZN7WebCore11LayoutStateD1Ev","__ZN7WebCore10RenderView19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore10RenderViewD2Ev","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZN7WebCore10RenderView13setIsInWindowEb","__ZNK7WebCore12RenderObject9isReplicaEv","__ZN7WebCore10RenderView21initializeLayoutStateERNS_11LayoutStateE","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZN7WebCore11RenderBlock17scrollbarsChangedEbb","__ZNK7WebCore10RenderView22availableLogicalHeightENS_26AvailableLogicalHeightTypeE","__ZNK7WebCore9RenderBox14hasControlClipEv","__ZNK7WebCore10RenderView29rootBackgroundIsEntirelyFixedEv","__ZN7WebCore10RenderView6layoutEv","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore15RenderBlockFlow31adjustInlineDirectionLineBoundsEiRfS1_","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZN7WebCore10RenderView30repaintViewAndCompositedLayersEv","__ZNK7WebCore10RenderView10zoomFactorEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore9RenderBox13intrinsicSizeEv","__ZN7WebCore10RenderView19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore15RenderBlockFlow20collapsedMarginAfterEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZNK7WebCore10RenderView17selectionStartEndERiS1_","__ZNK7WebCore10RenderView14paginationUnitEv","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb","__ZNK7WebCore10RenderView8viewRectEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZN7WebCore16PODFreeListArenaINS_15PODRedBlackTreeINS_11PODIntervalINS_10LayoutUnitEPNS_14FloatingObjectEEEE4NodeEED1Ev","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZN7WebCore10RenderView25customFilterGlobalContextEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv","__ZN7WebCore10RenderView8addChildEPNS_12RenderObjectES2_","__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","_memset","__ZNK7WebCore12RenderObject11isTableCellEv","_memcpy","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZN7WebCore10RenderViewC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZNK7WebCore10RenderView15usesCompositingEv","__ZNK7WebCore12RenderObject9isListBoxEv","__ZN7WebCore10RenderView20flowThreadControllerEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore10RenderView13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE","__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZNK7WebCore10RenderView12getSelectionERPNS_12RenderObjectERiS3_S4_","__ZN7WebCore10RenderView13layoutContentERKNS_11LayoutStateE","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZN7WebCore10RenderView22imageQualityControllerEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZNK7WebCore10RenderView22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE","__ZNK7WebCore10RenderView13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb","__ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERKNS_15HitTestLocationERNS_13HitTestResultE","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore9RenderBox11offsetWidthEv","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore10RenderView21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb","__ZNK7WebCore20RenderBoxModelObject11borderAfterEv","__ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore10RenderView12viewportSizeEv","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZN7WebCore10RenderView14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE","__ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS1_24RenderBlockSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZNK7WebCore10RenderView16repaintSelectionEv","__ZNK7WebCore10RenderView15selectionBoundsEb","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZNK7WebCore9RenderBox12marginBottomEv","__ZNK7WebCore20RenderBoxModelObject9borderEndEv","__ZN7WebCore10RenderView41repaintRectangleInViewAndCompositedLayersERKNS_10LayoutRectEb","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZN7WebCore10RenderView19repaintRootContentsEv","__ZN7WebCore10RenderView34popLayoutStateForCurrentFlowThreadEv","__ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_NS_6OwnPtrINS1_19RenderSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS3_NS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv","__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore20RenderBoxModelObject9borderTopEv","__ZNK7WebCore10RenderView14backgroundRectEPNS_9RenderBoxE","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZNK7WebCore10RenderView9viewWidthEv","__ZN7WebCore10RenderView14clearSelectionEv","__ZNK7WebCore10RenderView12documentRectEv","__ZNK7WebCore12RenderObject7isImageEv","__ZNK7WebCore12RenderObject9isCounterEv","__ZNK7WebCore10RenderView20repaintViewRectangleERKNS_10LayoutRectEb","__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore10RenderView15requiresColumnsEi","__ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore10RenderView18updateLogicalWidthEv","__ZNK7WebCore10RenderView10viewHeightEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore10RenderView13shouldRepaintERKNS_10LayoutRectE","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZN7WebCore10RenderView21setMaximalOutlineSizeEi","__ZNK7WebCore10RenderView23shouldUsePrintingLayoutEv","__ZNK7WebCore9RenderBox17borderBoundingBoxEv","__ZNK7WebCore20RenderBoxModelObject10borderLeftEv","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS1_24RenderBlockSelectionInfoEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN7WebCore8GapRectseqERKS0_","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore10RenderView23pageOrViewLogicalHeightEv","__ZNK7WebCore20RenderBoxModelObject11borderStartEv","__ZNK7WebCore12RenderObject7isTableEv","__ZN7WebCore9RenderBox14stopAutoscrollEv","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZNK7WebCore9RenderBox10marginLeftEv","__ZN7WebCore10RenderView13intervalArenaEv","__ZNK7WebCore10RenderView34shouldDisableLayoutStateForSubtreeEPNS_12RenderObjectE","__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv"]

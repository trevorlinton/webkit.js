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
H_BASE = parentModule["_malloc"](1232 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1232;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15RenderTableCellC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore15RenderTableCellC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE;
/* memory initializer */ allocate([82,101,110,100,101,114,84,97,98,108,101,67,101,108,108,0,82,101,110,100,101,114,84,97,98,108,101,67,101,108,108,32,40,97,110,111,110,121,109,111,117,115,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames10nowrapAttrE=env.__ZN7WebCore9HTMLNames10nowrapAttrE|0;
  var __ZN7WebCore11MathMLNames6mtdTagE=env.__ZN7WebCore11MathMLNames6mtdTagE|0;
  var __ZN7WebCore9HTMLNames5tdTagE=env.__ZN7WebCore9HTMLNames5tdTagE|0;
  var __ZN7WebCore9HTMLNames5thTagE=env.__ZN7WebCore9HTMLNames5thTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore15RenderTableCellE=(H_BASE+56)|0;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _qsort=env._qsort;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15RenderTableCell21paintCollapsedBordersERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 216 | 0;
 i15 = i1 | 0;
 i16 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i16 | 0) == 0 | (i16 | 0) == (i15 | 0))) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i16 = HEAP32[i2 + 8 >> 2] | 0;
 i17 = HEAP32[i2 + 16 >> 2] | 0;
 i18 = __ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(i15, HEAP32[i2 + 20 >> 2] | 0) | 0;
 i19 = i16 - i18 | 0;
 i16 = (i18 << 1) + i17 | 0;
 i17 = i1 + 44 | 0;
 i18 = (HEAP32[i17 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
 i20 = (HEAP32[i17 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 i17 = HEAP32[i1 + 56 >> 2] | 0;
 i21 = i1 + 8 | 0;
 i22 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
 i23 = i22;
 i24 = HEAP32[i22 + 36 >> 2] | 0;
 i22 = (HEAP32[i24 + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i22 | 0) == 0) {
   i25 = __ZNK7WebCore11RenderTable17outerBorderBeforeEv(i23) | 0;
  } else if ((i22 | 0) == 3) {
   i25 = __ZNK7WebCore11RenderTable16outerBorderAfterEv(i23) | 0;
  } else {
   if ((HEAP32[i24 + 40 >> 2] & 1073741824 | 0) == 0) {
    i25 = __ZNK7WebCore11RenderTable14outerBorderEndEv(i23) | 0;
    break;
   } else {
    i25 = __ZNK7WebCore11RenderTable16outerBorderStartEv(i23) | 0;
    break;
   }
  }
 } while (0);
 if ((i20 - i25 | 0) >= (i16 + i19 | 0)) {
  STACKTOP = i4;
  return;
 }
 i16 = i17 + i20 | 0;
 i25 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
 i23 = i25;
 i24 = HEAP32[i25 + 36 >> 2] | 0;
 i25 = (HEAP32[i24 + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i25 | 0) == 0) {
   i26 = __ZNK7WebCore11RenderTable16outerBorderAfterEv(i23) | 0;
  } else if ((i25 | 0) == 3) {
   i26 = __ZNK7WebCore11RenderTable17outerBorderBeforeEv(i23) | 0;
  } else {
   if ((HEAP32[i24 + 40 >> 2] & 1073741824 | 0) == 0) {
    i26 = __ZNK7WebCore11RenderTable16outerBorderStartEv(i23) | 0;
    break;
   } else {
    i26 = __ZNK7WebCore11RenderTable14outerBorderEndEv(i23) | 0;
    break;
   }
  }
 } while (0);
 if ((i26 + i16 | 0) <= (i19 | 0)) {
  STACKTOP = i4;
  return;
 }
 i19 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 172 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i19) | 0) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i21 >> 2] | 0;
 i26 = HEAP32[i2 + 36 >> 2] | 0;
 i23 = i26 + 44 | 0;
 i24 = (HEAP32[i23 >> 2] | 0) >>> 13 & 3;
 if ((i24 | 0) == 3 | (i24 | 0) == 0) {
  i25 = HEAP32[i2 + 8 >> 2] | 0;
  if ((HEAP32[i26 + 40 >> 2] & 1073741824 | 0) == 0) {
   i27 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i25, i1, 3) | 0;
  } else {
   i27 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i25, i1, 2) | 0;
  }
  i25 = i27;
  i28 = HEAP32[i25 >> 2] | 0;
  i29 = HEAP32[i25 + 4 >> 2] | 0;
 } else {
  i25 = HEAP32[i2 + 8 >> 2] | 0;
  if ((i24 | 0) == 1) {
   i30 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i25, i1, 1) | 0;
  } else {
   i30 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i25, i1, 0) | 0;
  }
  i25 = i30;
  i28 = HEAP32[i25 >> 2] | 0;
  i29 = HEAP32[i25 + 4 >> 2] | 0;
 }
 i25 = (HEAP32[i23 >> 2] | 0) >>> 13 & 3;
 if ((i25 | 0) == 3 | (i25 | 0) == 0) {
  i30 = HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0;
  if ((HEAP32[i26 + 40 >> 2] & 1073741824 | 0) == 0) {
   i31 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i30, i1, 2) | 0;
  } else {
   i31 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i30, i1, 3) | 0;
  }
  i30 = i31;
  i32 = HEAP32[i30 >> 2] | 0;
  i33 = HEAP32[i30 + 4 >> 2] | 0;
 } else {
  i30 = HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0;
  if ((i25 | 0) == 1) {
   i34 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i30, i1, 0) | 0;
  } else {
   i34 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i30, i1, 1) | 0;
  }
  i30 = i34;
  i32 = HEAP32[i30 >> 2] | 0;
  i33 = HEAP32[i30 + 4 >> 2] | 0;
 }
 i30 = (HEAP32[i23 >> 2] | 0) >>> 13 & 3;
 if ((i30 | 0) == 3 | (i30 | 0) == 0) {
  i34 = HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0;
  if ((i30 | 0) == 3 | (i30 | 0) == 1) {
   i35 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i34, i1, 1) | 0;
  } else {
   i35 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i34, i1, 0) | 0;
  }
  i34 = i35;
  i36 = HEAP32[i34 >> 2] | 0;
  i37 = HEAP32[i34 + 4 >> 2] | 0;
 } else {
  i34 = HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0;
  if ((HEAP32[i26 + 40 >> 2] & 1073741824 | 0) == 0) {
   i38 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i34, i1, 3) | 0;
  } else {
   i38 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i34, i1, 2) | 0;
  }
  i34 = i38;
  i36 = HEAP32[i34 >> 2] | 0;
  i37 = HEAP32[i34 + 4 >> 2] | 0;
 }
 i34 = (HEAP32[i23 >> 2] | 0) >>> 13 & 3;
 if ((i34 | 0) == 3 | (i34 | 0) == 0) {
  i38 = HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0;
  if ((i34 | 0) == 3 | (i34 | 0) == 1) {
   i39 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i38, i1, 0) | 0;
  } else {
   i39 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i38, i1, 1) | 0;
  }
  i38 = i39;
  i40 = HEAP32[i38 >> 2] | 0;
  i41 = HEAP32[i38 + 4 >> 2] | 0;
 } else {
  i38 = HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0;
  if ((HEAP32[i26 + 40 >> 2] & 1073741824 | 0) == 0) {
   i42 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i38, i1, 2) | 0;
  } else {
   i42 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i38, i1, 3) | 0;
  }
  i38 = i42;
  i40 = HEAP32[i38 >> 2] | 0;
  i41 = HEAP32[i38 + 4 >> 2] | 0;
 }
 if ((i37 & 234881024) >>> 0 > 16777216 >>> 0) {
  i43 = i37 >>> 1 & 8388607;
 } else {
  i43 = 0;
 }
 if ((i41 & 234881024) >>> 0 > 16777216 >>> 0) {
  i44 = i41 >>> 1 & 8388607;
 } else {
  i44 = 0;
 }
 if ((i29 & 234881024) >>> 0 > 16777216 >>> 0) {
  i45 = i29 >>> 1 & 8388607;
 } else {
  i45 = 0;
 }
 if ((i33 & 234881024) >>> 0 > 16777216 >>> 0) {
  i46 = i33 >>> 1 & 8388607;
 } else {
  i46 = 0;
 }
 HEAP32[i5 >> 2] = i45;
 HEAP32[i6 >> 2] = i45;
 HEAP32[i7 >> 2] = i46;
 HEAP32[i8 >> 2] = i46;
 HEAP32[i9 >> 2] = i43;
 HEAP32[i10 >> 2] = i43;
 HEAP32[i11 >> 2] = i44;
 HEAP32[i12 >> 2] = i44;
 i38 = HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0;
 i42 = HEAP32[i38 + 36 >> 2] | 0;
 i39 = (HEAP32[i42 + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i39 | 0) == 3 | (i39 | 0) == 0) {
   i34 = HEAP32[i38 + 8 >> 2] | 0;
   if ((i39 | 0) == 3 | (i39 | 0) == 1) {
    i47 = __ZNK7WebCore11RenderTable9cellBelowEPKNS_15RenderTableCellE(i34, i1) | 0;
    break;
   } else {
    i47 = __ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE(i34, i1) | 0;
    break;
   }
  } else {
   i34 = HEAP32[i38 + 8 >> 2] | 0;
   if ((HEAP32[i42 + 40 >> 2] & 1073741824 | 0) == 0) {
    i47 = __ZNK7WebCore11RenderTable9cellAfterEPKNS_15RenderTableCellE(i34, i1) | 0;
    break;
   } else {
    i47 = __ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE(i34, i1) | 0;
    break;
   }
  }
 } while (0);
 i42 = (i47 | 0) == 0;
 i47 = HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0;
 i38 = HEAP32[i47 + 36 >> 2] | 0;
 i39 = (HEAP32[i38 + 44 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i39 | 0) == 3 | (i39 | 0) == 0) {
   i34 = HEAP32[i47 + 8 >> 2] | 0;
   if ((HEAP32[i38 + 40 >> 2] & 1073741824 | 0) == 0) {
    i48 = __ZNK7WebCore11RenderTable9cellAfterEPKNS_15RenderTableCellE(i34, i1) | 0;
    break;
   } else {
    i48 = __ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE(i34, i1) | 0;
    break;
   }
  } else {
   i34 = HEAP32[i47 + 8 >> 2] | 0;
   if ((i39 | 0) == 1) {
    i48 = __ZNK7WebCore11RenderTable9cellBelowEPKNS_15RenderTableCellE(i34, i1) | 0;
    break;
   } else {
    i48 = __ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE(i34, i1) | 0;
    break;
   }
  }
 } while (0);
 i39 = (i48 | 0) == 0;
 i48 = (HEAP32[i23 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i48 | 0) == 3 | (i48 | 0) == 0) {
   i47 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
   if ((i48 | 0) == 3 | (i48 | 0) == 1) {
    i49 = __ZNK7WebCore11RenderTable9cellBelowEPKNS_15RenderTableCellE(i47, i1) | 0;
    break;
   } else {
    i49 = __ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE(i47, i1) | 0;
    break;
   }
  } else {
   i47 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP32[i26 + 40 >> 2] & 1073741824 | 0) == 0) {
    i49 = __ZNK7WebCore11RenderTable9cellAfterEPKNS_15RenderTableCellE(i47, i1) | 0;
    break;
   } else {
    i49 = __ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE(i47, i1) | 0;
    break;
   }
  }
 } while (0);
 if ((i49 | 0) == 0) {
  i50 = i42;
 } else {
  if (i42) {
   i51 = __ZN7WebCore15RenderTableCell29alignLeftRightBorderPaintRectERiS1_(i49, i5, i7) | 0;
  } else {
   i51 = 0;
  }
  if ((HEAP32[i1 + 116 >> 2] & 1073741824 | 0) == 0) {
   i52 = 1;
  } else {
   i52 = (__ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i1) | 0) >>> 0 < 2 >>> 0;
  }
  i50 = i51 & i52;
 }
 i52 = (HEAP32[i23 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i52 | 0) == 3 | (i52 | 0) == 0) {
   i51 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
   if ((i52 | 0) == 3 | (i52 | 0) == 1) {
    i53 = __ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE(i51, i1) | 0;
    break;
   } else {
    i53 = __ZNK7WebCore11RenderTable9cellBelowEPKNS_15RenderTableCellE(i51, i1) | 0;
    break;
   }
  } else {
   i51 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP32[i26 + 40 >> 2] & 1073741824 | 0) == 0) {
    i53 = __ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE(i51, i1) | 0;
    break;
   } else {
    i53 = __ZNK7WebCore11RenderTable9cellAfterEPKNS_15RenderTableCellE(i51, i1) | 0;
    break;
   }
  }
 } while (0);
 if ((i53 | 0) != 0) {
  __ZN7WebCore15RenderTableCell29alignLeftRightBorderPaintRectERiS1_(i53, i6, i8) | 0;
 }
 i53 = (HEAP32[i23 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i53 | 0) == 3 | (i53 | 0) == 0) {
   i52 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP32[i26 + 40 >> 2] & 1073741824 | 0) == 0) {
    i54 = __ZNK7WebCore11RenderTable9cellAfterEPKNS_15RenderTableCellE(i52, i1) | 0;
    break;
   } else {
    i54 = __ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE(i52, i1) | 0;
    break;
   }
  } else {
   i52 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
   if ((i53 | 0) == 1) {
    i54 = __ZNK7WebCore11RenderTable9cellBelowEPKNS_15RenderTableCellE(i52, i1) | 0;
    break;
   } else {
    i54 = __ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE(i52, i1) | 0;
    break;
   }
  }
 } while (0);
 i53 = (i54 | 0) == 0;
 if (i53 | i39 ^ 1) {
  i55 = i53 & i39;
 } else {
  i55 = __ZN7WebCore15RenderTableCell29alignTopBottomBorderPaintRectERiS1_(i54, i9, i11) | 0;
 }
 i54 = (HEAP32[i23 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i54 | 0) == 3 | (i54 | 0) == 0) {
   i23 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP32[i26 + 40 >> 2] & 1073741824 | 0) == 0) {
    i56 = __ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE(i23, i1) | 0;
    break;
   } else {
    i56 = __ZNK7WebCore11RenderTable9cellAfterEPKNS_15RenderTableCellE(i23, i1) | 0;
    break;
   }
  } else {
   i23 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
   if ((i54 | 0) == 1) {
    i56 = __ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE(i23, i1) | 0;
    break;
   } else {
    i56 = __ZNK7WebCore11RenderTable9cellBelowEPKNS_15RenderTableCellE(i23, i1) | 0;
    break;
   }
  }
 } while (0);
 if ((i56 | 0) == 0) {
  i57 = 1;
 } else {
  i57 = __ZN7WebCore15RenderTableCell29alignTopBottomBorderPaintRectERiS1_(i56, i10, i12) | 0;
 }
 i56 = i45 >>> 1;
 i1 = i18 - i56 | 0;
 i54 = i43 >>> 1;
 i26 = i20 - i54 | 0;
 i23 = i56 + i3 + ((i46 + 1 | 0) >>> 1) | 0;
 i39 = i54 + i17 + ((i44 + 1 | 0) >>> 1) | 0;
 i17 = i37 >>> 24 & 15;
 if ((i17 | 0) == 2) {
  i58 = 5;
 } else if ((i17 | 0) == 4) {
  i58 = 3;
 } else {
  i58 = i17;
 }
 i53 = i41 >>> 24 & 15;
 if ((i53 | 0) == 2) {
  i59 = 5;
 } else if ((i53 | 0) == 4) {
  i59 = 3;
 } else {
  i59 = i53;
 }
 i52 = i29 >>> 24 & 15;
 if ((i52 | 0) == 2) {
  i60 = 5;
 } else if ((i52 | 0) == 4) {
  i60 = 3;
 } else {
  i60 = i52;
 }
 i51 = i33 >>> 24 & 15;
 if ((i51 | 0) == 2) {
  i61 = 5;
 } else if ((i51 | 0) == 4) {
  i61 = 3;
 } else {
  i61 = i51;
 }
 if (i58 >>> 0 > 1 >>> 0) {
  i62 = i50 & (i37 | 0) > -1;
 } else {
  i62 = 0;
 }
 i50 = i59 >>> 0 > 1 >>> 0;
 i49 = (i41 | 0) > -1;
 i42 = i50 & i49;
 if (i60 >>> 0 > 1 >>> 0) {
  i63 = i55 & (i29 | 0) > -1;
 } else {
  i63 = 0;
 }
 if (i61 >>> 0 > 1 >>> 0) {
  i64 = i57 & (i33 | 0) > -1;
 } else {
  i64 = 0;
 }
 HEAP32[i13 >> 2] = 0;
 HEAP32[i13 + 4 >> 2] = 0;
 HEAP32[i13 + 36 >> 2] = 0;
 HEAP32[i13 + 40 >> 2] = 0;
 HEAP32[i13 + 72 >> 2] = 0;
 HEAP32[i13 + 76 >> 2] = 0;
 HEAP32[i13 + 108 >> 2] = 0;
 HEAP32[i13 + 112 >> 2] = 0;
 i57 = i13 + 144 | 0;
 HEAP32[i57 >> 2] = 0;
 i55 = (i37 & 1879048192 | 0) == 0 | i62 ^ 1;
 do {
  if ((i17 | 0) == 6) {
   if (i55) {
    i65 = 0;
    break;
   }
   i48 = i3 + i18 + ((HEAP32[i7 >> 2] | 0) / 2 & -1) | 0;
   i47 = i18 - ((HEAP32[i5 >> 2] | 0) / 2 & -1) | 0;
   i38 = i13;
   HEAP32[i38 >> 2] = i36;
   HEAP32[i38 + 4 >> 2] = i37;
   HEAP32[i13 + 8 >> 2] = 0;
   HEAP8[i13 + 12 | 0] = i62 & 1;
   HEAP32[i13 + 16 >> 2] = i47;
   HEAP32[i13 + 24 >> 2] = i48;
   HEAP32[i13 + 20 >> 2] = i26;
   HEAP32[i13 + 28 >> 2] = i54 + i20 + (i43 & 1);
   HEAP32[i13 + 32 >> 2] = i58;
   HEAP32[i57 >> 2] = 1;
   i65 = 1;
  } else {
   if (i55) {
    i65 = 0;
    break;
   }
   i48 = i13;
   HEAP32[i48 >> 2] = i36;
   HEAP32[i48 + 4 >> 2] = i37;
   HEAP32[i13 + 8 >> 2] = 0;
   HEAP8[i13 + 12 | 0] = i62 & 1;
   HEAP32[i13 + 16 >> 2] = i1;
   HEAP32[i13 + 24 >> 2] = i23 + i1;
   HEAP32[i13 + 20 >> 2] = i26;
   HEAP32[i13 + 28 >> 2] = i26 + i43;
   HEAP32[i13 + 32 >> 2] = i58;
   HEAP32[i57 >> 2] = 1;
   i65 = 1;
  }
 } while (0);
 do {
  if ((i53 | 0) == 6) {
   i58 = i44 >>> 1;
   if ((i41 & 1879048192 | 0) == 0 | i42 ^ 1) {
    i66 = i65;
    break;
   }
   i43 = i3 + i18 + ((HEAP32[i8 >> 2] | 0) / 2 & -1) | 0;
   i62 = i18 - ((HEAP32[i6 >> 2] | 0) / 2 & -1) | 0;
   i37 = i13 + (i65 * 36 & -1) | 0;
   HEAP32[i37 >> 2] = i40;
   HEAP32[i37 + 4 >> 2] = i41;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 8 >> 2] = 2;
   HEAP8[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 12 | 0] = i42 & 1;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 16 >> 2] = i62;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 24 >> 2] = i43;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 20 >> 2] = i16 - i58;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 28 >> 2] = i58 + i16 + (i44 & 1);
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 32 >> 2] = i59;
   i58 = (HEAP32[i57 >> 2] | 0) + 1 | 0;
   HEAP32[i57 >> 2] = i58;
   i66 = i58;
  } else {
   i58 = i39 + i26 | 0;
   if ((i41 & 1879048192 | 0) == 0 | i50 & i49 ^ 1) {
    i66 = i65;
    break;
   }
   i43 = i13 + (i65 * 36 & -1) | 0;
   HEAP32[i43 >> 2] = i40;
   HEAP32[i43 + 4 >> 2] = i41;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 8 >> 2] = 2;
   HEAP8[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 12 | 0] = i42 & 1;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 16 >> 2] = i1;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 24 >> 2] = i23 + i1;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 20 >> 2] = i58 - i44;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 28 >> 2] = i58;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 32 >> 2] = i59;
   i58 = (HEAP32[i57 >> 2] | 0) + 1 | 0;
   HEAP32[i57 >> 2] = i58;
   i66 = i58;
  }
 } while (0);
 do {
  if ((i52 | 0) == 6) {
   i59 = HEAP32[i11 >> 2] | 0;
   if ((i29 & 1879048192 | 0) == 0 | i63 ^ 1) {
    i67 = i66;
    break;
   }
   i44 = i20 - ((HEAP32[i9 >> 2] | 0) / 2 & -1) | 0;
   i42 = i13 + (i66 * 36 & -1) | 0;
   HEAP32[i42 >> 2] = i28;
   HEAP32[i42 + 4 >> 2] = i29;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 8 >> 2] = 3;
   HEAP8[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 12 | 0] = i63 & 1;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 16 >> 2] = i1;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 24 >> 2] = i56 + i18 + (i45 & 1);
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 20 >> 2] = i44;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 28 >> 2] = ((i59 | 0) / 2 & -1) + i16 + ((i59 | 0) % 2 & -1);
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 32 >> 2] = i60;
   i59 = (HEAP32[i57 >> 2] | 0) + 1 | 0;
   HEAP32[i57 >> 2] = i59;
   i67 = i59;
  } else {
   if ((i29 & 1879048192 | 0) == 0 | i63 ^ 1) {
    i67 = i66;
    break;
   }
   i59 = i13 + (i66 * 36 & -1) | 0;
   HEAP32[i59 >> 2] = i28;
   HEAP32[i59 + 4 >> 2] = i29;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 8 >> 2] = 3;
   HEAP8[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 12 | 0] = i63 & 1;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 16 >> 2] = i1;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 24 >> 2] = i1 + i45;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 20 >> 2] = i26;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 28 >> 2] = i39 + i26;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 32 >> 2] = i60;
   i59 = (HEAP32[i57 >> 2] | 0) + 1 | 0;
   HEAP32[i57 >> 2] = i59;
   i67 = i59;
  }
 } while (0);
 do {
  if ((i51 | 0) == 6) {
   i60 = i3 + i18 | 0;
   i45 = i46 >>> 1;
   i63 = HEAP32[i12 >> 2] | 0;
   if ((i33 & 1879048192 | 0) == 0 | i64 ^ 1) {
    break;
   }
   i29 = i20 - ((HEAP32[i10 >> 2] | 0) / 2 & -1) | 0;
   i28 = i13 + (i67 * 36 & -1) | 0;
   HEAP32[i28 >> 2] = i32;
   HEAP32[i28 + 4 >> 2] = i33;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 8 >> 2] = 1;
   HEAP8[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 12 | 0] = i64 & 1;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 16 >> 2] = i60 - i45;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 24 >> 2] = i45 + i60 + (i46 & 1);
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 20 >> 2] = i29;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 28 >> 2] = ((i63 | 0) / 2 & -1) + i16 + ((i63 | 0) % 2 & -1);
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 32 >> 2] = i61;
   HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
  } else {
   i63 = i23 + i1 | 0;
   if ((i33 & 1879048192 | 0) == 0 | i64 ^ 1) {
    break;
   }
   i29 = i13 + (i67 * 36 & -1) | 0;
   HEAP32[i29 >> 2] = i32;
   HEAP32[i29 + 4 >> 2] = i33;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 8 >> 2] = 1;
   HEAP8[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 12 | 0] = i64 & 1;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 16 >> 2] = i63 - i46;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 24 >> 2] = i63;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 20 >> 2] = i26;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 28 >> 2] = i39 + i26;
   HEAP32[i13 + ((HEAP32[i57 >> 2] | 0) * 36 & -1) + 32 >> 2] = i61;
   HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
  }
 } while (0);
 i61 = __ZN7WebCore20RenderBoxModelObject20shouldAntialiasLinesEPNS_15GraphicsContextE(i19) | 0;
 i26 = HEAP32[i57 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i4;
  return;
 } else {
  i68 = 0;
 }
 while (1) {
  if ((HEAP32[i13 + (i68 * 36 & -1) + 4 >> 2] & 1879048192 | 0) != 0) {
   i69 = i13 + (i68 * 36 & -1) + 12 | 0;
   if ((HEAP8[i69] & 1) != 0) {
    break;
   }
  }
  i39 = i68 + 1 | 0;
  if (i39 >>> 0 < i26 >>> 0) {
   i68 = i39;
  } else {
   i70 = 183;
   break;
  }
 }
 if ((i70 | 0) == 183) {
  STACKTOP = i4;
  return;
 }
 HEAP8[i69] = 0;
 if (0) {
  STACKTOP = i4;
  return;
 }
 i69 = i14 | 0;
 i26 = i14 + 4 | 0;
 i39 = i68;
 L235 : while (1) {
  i68 = HEAP32[i13 + (i39 * 36 & -1) + 4 >> 2] | 0;
  if ((i68 & 234881024) >>> 0 > 16777216 >>> 0) {
   i71 = i68 >>> 1 & 8388607;
  } else {
   i71 = 0;
  }
  i46 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 172 >> 2] | 0) + 4 >> 2] | 0;
  if ((i46 & 234881024) >>> 0 > 16777216 >>> 0) {
   i72 = i46 >>> 1 & 8388607;
  } else {
   i72 = 0;
  }
  do {
   if ((i71 | 0) == (i72 | 0)) {
    if (((i46 ^ i68) & 2130706432 | 0) != 0) {
     break;
    }
    i64 = HEAP32[i13 + (i39 * 36 & -1) + 16 >> 2] | 0;
    i33 = HEAP32[i13 + (i39 * 36 & -1) + 20 >> 2] | 0;
    i32 = HEAP32[i13 + (i39 * 36 & -1) + 24 >> 2] | 0;
    i67 = HEAP32[i13 + (i39 * 36 & -1) + 28 >> 2] | 0;
    i1 = HEAP32[i13 + (i39 * 36 & -1) + 8 >> 2] | 0;
    HEAP32[i69 >> 2] = HEAP32[i13 + (i39 * 36 & -1) >> 2];
    HEAP8[i26] = i68 & 1;
    __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i15, i19, i64, i33, i32, i67, i1, i14, HEAP32[i13 + (i39 * 36 & -1) + 32 >> 2] | 0, 0, 0, i61);
   }
  } while (0);
  i68 = HEAP32[i57 >> 2] | 0;
  if ((i68 | 0) == 0) {
   i70 = 181;
   break;
  } else {
   i73 = 0;
  }
  while (1) {
   if ((HEAP32[i13 + (i73 * 36 & -1) + 4 >> 2] & 1879048192 | 0) != 0) {
    i74 = i13 + (i73 * 36 & -1) + 12 | 0;
    if ((HEAP8[i74] & 1) != 0) {
     break;
    }
   }
   i46 = i73 + 1 | 0;
   if (i46 >>> 0 < i68 >>> 0) {
    i73 = i46;
   } else {
    i70 = 185;
    break L235;
   }
  }
  HEAP8[i74] = 0;
  if (0) {
   i70 = 182;
   break;
  } else {
   i39 = i73;
  }
 }
 if ((i70 | 0) == 181) {
  STACKTOP = i4;
  return;
 } else if ((i70 | 0) == 182) {
  STACKTOP = i4;
  return;
 } else if ((i70 | 0) == 185) {
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore15RenderTableCell25computeCollapsedEndBorderENS_23IncludeBorderColorOrNotE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
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
 i28 = i2 + 8 | 0;
 i29 = HEAP32[(HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
 i30 = i29;
 i31 = i2 + 116 | 0;
 i32 = HEAP32[i31 >> 2] | 0;
 if ((i32 & 1073741824 | 0) == 0) {
  i33 = 1;
 } else {
  i33 = __ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i2) | 0;
 }
 i34 = (i32 & 536870911) - 1 + i33 | 0;
 i33 = HEAP32[i29 + 116 >> 2] | 0;
 i32 = i29 + 108 | 0;
 i35 = 0;
 i36 = 0;
 while (1) {
  if (i36 >>> 0 >= i33 >>> 0) {
   break;
  }
  i37 = (HEAP32[(HEAP32[i32 >> 2] | 0) + (i36 << 2) >> 2] | 0) + i35 | 0;
  if ((i37 - 1 | 0) >>> 0 < i34 >>> 0) {
   i35 = i37;
   i36 = i36 + 1 | 0;
  } else {
   break;
  }
 }
 i35 = (i36 | 0) == (i33 - 1 | 0);
 i33 = (i3 | 0) != 0;
 if (i33) {
  i3 = HEAP32[(HEAP32[i28 >> 2] | 0) + 36 >> 2] | 0;
  i36 = __ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE(205, (HEAP32[i3 + 40 >> 2] | 0) >>> 30 & 1, (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3) | 0;
  i3 = HEAP32[(HEAP32[i28 >> 2] | 0) + 36 >> 2] | 0;
  i34 = __ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE(197, (HEAP32[i3 + 40 >> 2] | 0) >>> 30 & 1, (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3) | 0;
  i3 = i2 + 36 | 0;
  i32 = __ZNK7WebCore11RenderStyle9borderEndEv(HEAP32[i3 >> 2] | 0) | 0;
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i5, HEAP32[i3 >> 2] | 0, i34);
  i38 = HEAP32[i5 >> 2] | 0;
  i39 = HEAP8[i5 + 4 | 0] & 1;
  i40 = i36;
  i41 = i34;
  i42 = i3;
  i43 = i32;
 } else {
  i32 = i2 + 36 | 0;
  i3 = __ZNK7WebCore11RenderStyle9borderEndEv(HEAP32[i32 >> 2] | 0) | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP8[i5 + 4 | 0] = 0;
  i38 = 0;
  i39 = 0;
  i40 = 0;
  i41 = 0;
  i42 = i32;
  i43 = i3;
 }
 HEAP32[i1 >> 2] = i38;
 i38 = i1 + 4 | 0;
 i3 = HEAP32[i38 >> 2] & -2 | i39;
 HEAP32[i38 >> 2] = i3;
 i39 = i43 + 4 | 0;
 i32 = HEAP32[i39 >> 2] | 0;
 i5 = ((i32 & 134217726 | 0) == 0 | (i32 & 2013265920 | 0) == 0 ? 0 : i32 & 16777214) | i3 & -16777215;
 HEAP32[i38 >> 2] = i5;
 i3 = (HEAP32[i39 >> 2] | 0) >>> 27 << 24 & 251658240 | i5 & -2130706433 | 1610612736;
 HEAP32[i38 >> 2] = i3;
 if ((HEAP32[i39 >> 2] & 1 | 0) == 0) {
  i44 = 0;
 } else {
  i44 = ((HEAP32[i43 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
 }
 HEAP32[i38 >> 2] = i44 | i3 & 1879048191;
 do {
  if (!i35) {
   i3 = __ZNK7WebCore11RenderTable9cellAfterEPKNS_15RenderTableCellE(i30, i2) | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i44 = i3 + 36 | 0;
   i3 = __ZNK7WebCore11RenderStyle11borderStartEv(HEAP32[i44 >> 2] | 0) | 0;
   if (i33) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i7, HEAP32[i44 >> 2] | 0, i40);
    i45 = HEAP32[i7 >> 2] | 0;
    i46 = HEAP8[i7 + 4 | 0] & 1;
   } else {
    HEAP32[i7 >> 2] = 0;
    HEAP8[i7 + 4 | 0] = 0;
    i45 = 0;
    i46 = 0;
   }
   HEAP32[i6 >> 2] = i45;
   i44 = i6 + 4 | 0;
   i38 = HEAP32[i3 + 4 >> 2] | 0;
   i43 = i38 >>> 27 << 24 & 251658240 | (((i38 & 134217726 | 0) == 0 | (i38 & 2013265920 | 0) == 0 ? 0 : i38 & 16777214) | i46) | 1610612736;
   HEAP32[i44 >> 2] = i43;
   if ((i38 & 1 | 0) == 0) {
    i47 = 0;
   } else {
    i47 = ((HEAP32[i3 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i44 >> 2] = i47 | i43;
   i43 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i6) | 0) < 0;
   i44 = i43 ? i6 : i1;
   if ((HEAP32[i44 + 4 >> 2] & 251658240 | 0) == 16777216) {
    i43 = i1;
    HEAP32[i43 >> 2] = 0;
    HEAP32[i43 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i43 = i44;
    i44 = HEAP32[i43 >> 2] | 0;
    i3 = HEAP32[i43 + 4 >> 2] | 0;
    i43 = i1;
    HEAP32[i43 >> 2] = i44;
    HEAP32[i43 + 4 >> 2] = i3;
    if (!((i44 & 0 | 0) == 0 & (i3 & 1879048192 | 0) == 0)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i6 = HEAP32[i31 >> 2] | 0;
 i47 = i6 & 536870911;
 i46 = HEAP32[(HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
 if ((i6 & 1073741824 | 0) == 0) {
  i48 = 1;
 } else {
  i48 = __ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i2) | 0;
 }
 i6 = i47 - 1 + i48 | 0;
 i48 = HEAP32[i46 + 116 >> 2] | 0;
 i45 = i46 + 108 | 0;
 i46 = 0;
 i7 = 0;
 while (1) {
  if (i7 >>> 0 >= i48 >>> 0) {
   break;
  }
  i3 = (HEAP32[(HEAP32[i45 >> 2] | 0) + (i7 << 2) >> 2] | 0) + i46 | 0;
  if ((i3 - 1 | 0) >>> 0 < i6 >>> 0) {
   i46 = i3;
   i7 = i7 + 1 | 0;
  } else {
   break;
  }
 }
 i46 = HEAP32[i28 >> 2] | 0;
 i6 = HEAP32[i46 + 8 >> 2] | 0;
 i45 = ((HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 40 >> 2] ^ HEAP32[(HEAP32[i42 >> 2] | 0) + 40 >> 2]) & 1073741824 | 0) == 0;
 if ((i47 | 0) != 0 | i45) {
  if ((i7 | 0) == ((HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 116 >> 2] | 0) - 1 | 0) & i45) {
   i49 = 28;
  } else {
   i50 = 0;
  }
 } else {
  i49 = 28;
 }
 do {
  if ((i49 | 0) == 28) {
   i45 = __ZNK7WebCore14RenderTableRow22borderAdjoiningEndCellEPKNS_15RenderTableCellE(i46, i2) | 0;
   if (i33) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i9, HEAP32[(HEAP32[i28 >> 2] | 0) + 36 >> 2] | 0, i41);
    i51 = HEAP32[i9 >> 2] | 0;
    i52 = HEAP8[i9 + 4 | 0] & 1;
   } else {
    HEAP32[i9 >> 2] = 0;
    HEAP8[i9 + 4 | 0] = 0;
    i51 = 0;
    i52 = 0;
   }
   HEAP32[i8 >> 2] = i51;
   i6 = i8 + 4 | 0;
   i7 = HEAP32[i45 + 4 >> 2] | 0;
   i47 = i7 >>> 27 << 24 | (((i7 & 134217726 | 0) == 0 | (i7 & 2013265920 | 0) == 0 ? 0 : i7 & 16777214) | i52) | 1342177280;
   HEAP32[i6 >> 2] = i47;
   if ((i7 & 1 | 0) == 0) {
    i53 = 0;
   } else {
    i53 = ((HEAP32[i45 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i6 >> 2] = i53 | i47;
   i47 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i8) | 0) < 0;
   i6 = i47 ? i8 : i1;
   if ((HEAP32[i6 + 4 >> 2] & 251658240 | 0) == 16777216) {
    i47 = i1;
    HEAP32[i47 >> 2] = 0;
    HEAP32[i47 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i47 = i6;
   i6 = HEAP32[i47 >> 2] | 0;
   i45 = HEAP32[i47 + 4 >> 2] | 0;
   i47 = i1;
   HEAP32[i47 >> 2] = i6;
   HEAP32[i47 + 4 >> 2] = i45;
   if ((i6 & 0 | 0) == 0 & (i45 & 1879048192 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i45 = __ZNK7WebCore18RenderTableSection22borderAdjoiningEndCellEPKNS_15RenderTableCellE(HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0, i2) | 0;
   if (i33) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i11, HEAP32[(HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0, i41);
    i54 = HEAP32[i11 >> 2] | 0;
    i55 = HEAP8[i11 + 4 | 0] & 1;
   } else {
    HEAP32[i11 >> 2] = 0;
    HEAP8[i11 + 4 | 0] = 0;
    i54 = 0;
    i55 = 0;
   }
   HEAP32[i10 >> 2] = i54;
   i6 = i10 + 4 | 0;
   i7 = HEAP32[i45 + 4 >> 2] | 0;
   i42 = i7 >>> 27 << 24 & 251658240 | (((i7 & 134217726 | 0) == 0 | (i7 & 2013265920 | 0) == 0 ? 0 : i7 & 16777214) | i55) | 1073741824;
   HEAP32[i6 >> 2] = i42;
   if ((i7 & 1 | 0) == 0) {
    i56 = 0;
   } else {
    i56 = ((HEAP32[i45 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i6 >> 2] = i56 | i42;
   i42 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i10) | 0) < 0;
   i6 = i42 ? i10 : i1;
   if ((HEAP32[i6 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i47 >> 2] = 0;
    HEAP32[i47 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i42 = i6;
    i6 = HEAP32[i42 >> 2] | 0;
    i45 = HEAP32[i42 + 4 >> 2] | 0;
    HEAP32[i47 >> 2] = i6;
    HEAP32[i47 + 4 >> 2] = i45;
    if (!((i6 & 0 | 0) == 0 & (i45 & 1879048192 | 0) == 0)) {
     i50 = 1;
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i10 = HEAP32[i31 >> 2] | 0;
 if ((i10 & 1073741824 | 0) == 0) {
  i57 = 1;
 } else {
  i57 = __ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i2) | 0;
 }
 i56 = i29 + 176 | 0;
 do {
  if ((HEAP8[i56] & 2) != 0) {
   i55 = __ZNK7WebCore11RenderTable14slowColElementEjPbS1_(i30, (i10 & 536870911) - 1 + i57 | 0, i12, i13) | 0;
   if ((i55 | 0) == 0) {
    break;
   }
   i54 = i55 + 36 | 0;
   if ((HEAP32[(HEAP32[i54 >> 2] | 0) + 48 >> 2] & 31 | 0) == 12) {
    if ((HEAP8[i13] & 1) == 0) {
     break;
    }
    i11 = __ZNK7WebCore14RenderTableCol28borderAdjoiningCellEndBorderEPKNS_15RenderTableCellE(i55, i2) | 0;
    if (i33) {
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i15, HEAP32[i54 >> 2] | 0, i41);
     i58 = HEAP32[i15 >> 2] | 0;
     i59 = HEAP8[i15 + 4 | 0] & 1;
    } else {
     HEAP32[i15 >> 2] = 0;
     HEAP8[i15 + 4 | 0] = 0;
     i58 = 0;
     i59 = 0;
    }
    HEAP32[i14 >> 2] = i58;
    i28 = i14 + 4 | 0;
    i8 = HEAP32[i11 + 4 >> 2] | 0;
    i53 = i8 >>> 27 << 24 & 251658240 | (((i8 & 134217726 | 0) == 0 | (i8 & 2013265920 | 0) == 0 ? 0 : i8 & 16777214) | i59) | 536870912;
    HEAP32[i28 >> 2] = i53;
    if ((i8 & 1 | 0) == 0) {
     i60 = 0;
    } else {
     i60 = ((HEAP32[i11 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
    }
    HEAP32[i28 >> 2] = i60 | i53;
    i53 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i14) | 0) < 0;
    i28 = i53 ? i14 : i1;
    if ((HEAP32[i28 + 4 >> 2] & 251658240 | 0) == 16777216) {
     i53 = i1;
     HEAP32[i53 >> 2] = 0;
     HEAP32[i53 + 4 >> 2] = 0;
     STACKTOP = i4;
     return;
    } else {
     i53 = i28;
     i28 = HEAP32[i53 >> 2] | 0;
     i11 = HEAP32[i53 + 4 >> 2] | 0;
     i53 = i1;
     HEAP32[i53 >> 2] = i28;
     HEAP32[i53 + 4 >> 2] = i11;
     if (!((i28 & 0 | 0) == 0 & (i11 & 1879048192 | 0) == 0)) {
      break;
     }
     STACKTOP = i4;
     return;
    }
   }
   i11 = __ZNK7WebCore14RenderTableCol28borderAdjoiningCellEndBorderEPKNS_15RenderTableCellE(i55, i2) | 0;
   if (i33) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i17, HEAP32[i54 >> 2] | 0, i41);
    i61 = HEAP32[i17 >> 2] | 0;
    i62 = HEAP8[i17 + 4 | 0] & 1;
   } else {
    HEAP32[i17 >> 2] = 0;
    HEAP8[i17 + 4 | 0] = 0;
    i61 = 0;
    i62 = 0;
   }
   HEAP32[i16 >> 2] = i61;
   i54 = i16 + 4 | 0;
   i28 = HEAP32[i11 + 4 >> 2] | 0;
   i53 = i28 >>> 27 << 24 | (((i28 & 134217726 | 0) == 0 | (i28 & 2013265920 | 0) == 0 ? 0 : i28 & 16777214) | i62) | 805306368;
   HEAP32[i54 >> 2] = i53;
   if ((i28 & 1 | 0) == 0) {
    i63 = 0;
   } else {
    i63 = ((HEAP32[i11 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i54 >> 2] = i63 | i53;
   i53 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i16) | 0) < 0;
   i54 = i53 ? i16 : i1;
   if ((HEAP32[i54 + 4 >> 2] & 251658240 | 0) == 16777216) {
    i53 = i1;
    HEAP32[i53 >> 2] = 0;
    HEAP32[i53 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i53 = i54;
   i54 = HEAP32[i53 >> 2] | 0;
   i11 = HEAP32[i53 + 4 >> 2] | 0;
   i53 = i1;
   HEAP32[i53 >> 2] = i54;
   HEAP32[i53 + 4 >> 2] = i11;
   if ((i54 & 0 | 0) == 0 & (i11 & 1879048192 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i55 + 16 >> 2] | 0) != 0) {
    break;
   }
   i11 = __ZNK7WebCore14RenderTableCol20enclosingColumnGroupEv(i55) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i55 = __ZNK7WebCore14RenderTableCol28borderAdjoiningCellEndBorderEPKNS_15RenderTableCellE(i11, i2) | 0;
   if (i33) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i19, HEAP32[i11 + 36 >> 2] | 0, i41);
    i64 = HEAP32[i19 >> 2] | 0;
    i65 = HEAP8[i19 + 4 | 0] & 1;
   } else {
    HEAP32[i19 >> 2] = 0;
    HEAP8[i19 + 4 | 0] = 0;
    i64 = 0;
    i65 = 0;
   }
   HEAP32[i18 >> 2] = i64;
   i11 = i18 + 4 | 0;
   i54 = HEAP32[i55 + 4 >> 2] | 0;
   i28 = i54 >>> 27 << 24 & 251658240 | (((i54 & 134217726 | 0) == 0 | (i54 & 2013265920 | 0) == 0 ? 0 : i54 & 16777214) | i65) | 536870912;
   HEAP32[i11 >> 2] = i28;
   if ((i54 & 1 | 0) == 0) {
    i66 = 0;
   } else {
    i66 = ((HEAP32[i55 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i11 >> 2] = i66 | i28;
   i28 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i18) | 0) < 0;
   i11 = i28 ? i18 : i1;
   if ((HEAP32[i11 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i53 >> 2] = 0;
    HEAP32[i53 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i28 = i11;
    i11 = HEAP32[i28 >> 2] | 0;
    i55 = HEAP32[i28 + 4 >> 2] | 0;
    HEAP32[i53 >> 2] = i11;
    HEAP32[i53 + 4 >> 2] = i55;
    if (!((i11 & 0 | 0) == 0 & (i55 & 1879048192 | 0) == 0)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 do {
  if (i35) {
   i49 = 111;
  } else {
   i18 = HEAP32[i31 >> 2] | 0;
   i66 = i18 & 536870911;
   if ((i18 & 1073741824 | 0) == 0) {
    i67 = 1;
   } else {
    i67 = __ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i2) | 0;
   }
   if ((HEAP8[i56] & 2) == 0) {
    if (i50) {
     break;
    }
    STACKTOP = i4;
    return;
   }
   i18 = __ZNK7WebCore11RenderTable14slowColElementEjPbS1_(i30, i67 + i66 | 0, i12, i13) | 0;
   if ((i18 | 0) == 0) {
    i49 = 111;
    break;
   }
   i66 = i18 + 36 | 0;
   i65 = HEAP32[(HEAP32[i66 >> 2] | 0) + 48 >> 2] & 31;
   if ((i65 | 0) == 12) {
    if ((HEAP8[i12] & 1) == 0) {
     i49 = 111;
     break;
    }
    i64 = __ZNK7WebCore14RenderTableCol25borderAdjoiningCellBeforeEPKNS_15RenderTableCellE(i18, i2) | 0;
    if (i33) {
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i21, HEAP32[i66 >> 2] | 0, i40);
     i68 = HEAP32[i21 >> 2] | 0;
     i69 = HEAP8[i21 + 4 | 0] & 1;
    } else {
     HEAP32[i21 >> 2] = 0;
     HEAP8[i21 + 4 | 0] = 0;
     i68 = 0;
     i69 = 0;
    }
    HEAP32[i20 >> 2] = i68;
    i19 = i20 + 4 | 0;
    i16 = HEAP32[i64 + 4 >> 2] | 0;
    i63 = i16 >>> 27 << 24 & 251658240 | (((i16 & 134217726 | 0) == 0 | (i16 & 2013265920 | 0) == 0 ? 0 : i16 & 16777214) | i69) | 536870912;
    HEAP32[i19 >> 2] = i63;
    if ((i16 & 1 | 0) == 0) {
     i70 = 0;
    } else {
     i70 = ((HEAP32[i64 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
    }
    HEAP32[i19 >> 2] = i70 | i63;
    i63 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i20) | 0) < 0;
    i19 = i63 ? i20 : i1;
    if ((HEAP32[i19 + 4 >> 2] & 251658240 | 0) == 16777216) {
     i63 = i1;
     HEAP32[i63 >> 2] = 0;
     HEAP32[i63 + 4 >> 2] = 0;
     STACKTOP = i4;
     return;
    } else {
     i63 = i19;
     i19 = HEAP32[i63 >> 2] | 0;
     i64 = HEAP32[i63 + 4 >> 2] | 0;
     i63 = i1;
     HEAP32[i63 >> 2] = i19;
     HEAP32[i63 + 4 >> 2] = i64;
     if (!((i19 & 0 | 0) == 0 & (i64 & 1879048192 | 0) == 0 | i50 ^ 1)) {
      break;
     }
     STACKTOP = i4;
     return;
    }
   } else if ((i65 | 0) != 13) {
    i49 = 111;
    break;
   }
   i65 = __ZNK7WebCore14RenderTableCol25borderAdjoiningCellBeforeEPKNS_15RenderTableCellE(i18, i2) | 0;
   if (i33) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i23, HEAP32[i66 >> 2] | 0, i40);
    i71 = HEAP32[i23 >> 2] | 0;
    i72 = HEAP8[i23 + 4 | 0] & 1;
   } else {
    HEAP32[i23 >> 2] = 0;
    HEAP8[i23 + 4 | 0] = 0;
    i71 = 0;
    i72 = 0;
   }
   HEAP32[i22 >> 2] = i71;
   i66 = i22 + 4 | 0;
   i64 = HEAP32[i65 + 4 >> 2] | 0;
   i19 = i64 >>> 27 << 24 | (((i64 & 134217726 | 0) == 0 | (i64 & 2013265920 | 0) == 0 ? 0 : i64 & 16777214) | i72) | 805306368;
   HEAP32[i66 >> 2] = i19;
   if ((i64 & 1 | 0) == 0) {
    i73 = 0;
   } else {
    i73 = ((HEAP32[i65 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i66 >> 2] = i73 | i19;
   i19 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i22) | 0) < 0;
   i66 = i19 ? i22 : i1;
   if ((HEAP32[i66 + 4 >> 2] & 251658240 | 0) == 16777216) {
    i19 = i1;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i19 = i66;
   i66 = HEAP32[i19 >> 2] | 0;
   i65 = HEAP32[i19 + 4 >> 2] | 0;
   i19 = i1;
   HEAP32[i19 >> 2] = i66;
   HEAP32[i19 + 4 >> 2] = i65;
   if ((i66 & 0 | 0) == 0 & (i65 & 1879048192 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i18 + 12 >> 2] | 0) != 0) {
    if (i50) {
     break;
    }
    STACKTOP = i4;
    return;
   }
   i65 = __ZNK7WebCore14RenderTableCol20enclosingColumnGroupEv(i18) | 0;
   if ((i65 | 0) == 0) {
    i49 = 111;
    break;
   }
   i18 = __ZNK7WebCore14RenderTableCol30borderAdjoiningCellStartBorderEPKNS_15RenderTableCellE(i65, i2) | 0;
   if (i33) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i25, HEAP32[i65 + 36 >> 2] | 0, i40);
    i74 = HEAP32[i25 >> 2] | 0;
    i75 = HEAP8[i25 + 4 | 0] & 1;
   } else {
    HEAP32[i25 >> 2] = 0;
    HEAP8[i25 + 4 | 0] = 0;
    i74 = 0;
    i75 = 0;
   }
   HEAP32[i24 >> 2] = i74;
   i65 = i24 + 4 | 0;
   i66 = HEAP32[i18 + 4 >> 2] | 0;
   i64 = i66 >>> 27 << 24 & 251658240 | (((i66 & 134217726 | 0) == 0 | (i66 & 2013265920 | 0) == 0 ? 0 : i66 & 16777214) | i75) | 536870912;
   HEAP32[i65 >> 2] = i64;
   if ((i66 & 1 | 0) == 0) {
    i76 = 0;
   } else {
    i76 = ((HEAP32[i18 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i65 >> 2] = i76 | i64;
   i64 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i24) | 0) < 0;
   i65 = i64 ? i24 : i1;
   if ((HEAP32[i65 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i64 = i65;
    i65 = HEAP32[i64 >> 2] | 0;
    i18 = HEAP32[i64 + 4 >> 2] | 0;
    HEAP32[i19 >> 2] = i65;
    HEAP32[i19 + 4 >> 2] = i18;
    if (!((i65 & 0 | 0) == 0 & (i18 & 1879048192 | 0) == 0 | i50 ^ 1)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 do {
  if ((i49 | 0) == 111) {
   if (i50) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i50 = __ZNK7WebCore11RenderTable27tableEndBorderAdjoiningCellEPKNS_15RenderTableCellE(i30, i2) | 0;
 if (i33) {
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i27, HEAP32[i29 + 36 >> 2] | 0, i41);
  i77 = HEAP32[i27 >> 2] | 0;
  i78 = HEAP8[i27 + 4 | 0] & 1;
 } else {
  HEAP32[i27 >> 2] = 0;
  HEAP8[i27 + 4 | 0] = 0;
  i77 = 0;
  i78 = 0;
 }
 HEAP32[i26 >> 2] = i77;
 i77 = i26 + 4 | 0;
 i27 = HEAP32[i50 + 4 >> 2] | 0;
 i41 = i27 >>> 27 << 24 | (((i27 & 134217726 | 0) == 0 | (i27 & 2013265920 | 0) == 0 ? 0 : i27 & 16777214) | i78) | 268435456;
 HEAP32[i77 >> 2] = i41;
 if ((i27 & 1 | 0) == 0) {
  i79 = 0;
 } else {
  i79 = ((HEAP32[i50 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
 }
 HEAP32[i77 >> 2] = i79 | i41;
 i41 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i26) | 0) < 0;
 i79 = i41 ? i26 : i1;
 if ((HEAP32[i79 + 4 >> 2] & 251658240 | 0) == 16777216) {
  i80 = 0;
  i81 = 0;
  i82 = 0;
  i83 = 0;
  i84 = i1;
  i85 = i81 | i83;
  i86 = i80 | i82;
  i87 = i84 | 0;
  HEAP32[i87 >> 2] = i85;
  i88 = i84 + 4 | 0;
  HEAP32[i88 >> 2] = i86;
  STACKTOP = i4;
  return;
 }
 i26 = i79;
 i79 = HEAP32[i26 >> 2] | 0;
 i41 = HEAP32[i26 + 4 >> 2] | 0;
 i80 = i41 & 0;
 i81 = i79 & -1;
 i82 = i41 & -1;
 i83 = i79 & 0;
 i84 = i1;
 i85 = i81 | i83;
 i86 = i80 | i82;
 i87 = i84 | 0;
 HEAP32[i87 >> 2] = i85;
 i88 = i84 + 4 | 0;
 HEAP32[i88 >> 2] = i86;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15RenderTableCell27computeCollapsedStartBorderENS_23IncludeBorderColorOrNotE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
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
 i28 = i2 + 8 | 0;
 i29 = HEAP32[i28 >> 2] | 0;
 i30 = HEAP32[(HEAP32[i29 + 8 >> 2] | 0) + 8 >> 2] | 0;
 i31 = i30;
 i32 = (i3 | 0) != 0;
 if (i32) {
  i3 = HEAP32[i29 + 36 >> 2] | 0;
  i29 = __ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE(205, (HEAP32[i3 + 40 >> 2] | 0) >>> 30 & 1, (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3) | 0;
  i3 = HEAP32[(HEAP32[i28 >> 2] | 0) + 36 >> 2] | 0;
  i33 = __ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE(197, (HEAP32[i3 + 40 >> 2] | 0) >>> 30 & 1, (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3) | 0;
  i3 = i2 + 36 | 0;
  i34 = __ZNK7WebCore11RenderStyle11borderStartEv(HEAP32[i3 >> 2] | 0) | 0;
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i5, HEAP32[i3 >> 2] | 0, i29);
  i35 = HEAP32[i5 >> 2] | 0;
  i36 = HEAP8[i5 + 4 | 0] & 1;
  i37 = i29;
  i38 = i33;
  i39 = i3;
  i40 = i34;
 } else {
  i34 = i2 + 36 | 0;
  i3 = __ZNK7WebCore11RenderStyle11borderStartEv(HEAP32[i34 >> 2] | 0) | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP8[i5 + 4 | 0] = 0;
  i35 = 0;
  i36 = 0;
  i37 = 0;
  i38 = 0;
  i39 = i34;
  i40 = i3;
 }
 HEAP32[i1 >> 2] = i35;
 i35 = i1 + 4 | 0;
 i3 = HEAP32[i35 >> 2] & -2 | i36;
 HEAP32[i35 >> 2] = i3;
 i36 = i40 + 4 | 0;
 i34 = HEAP32[i36 >> 2] | 0;
 i5 = ((i34 & 134217726 | 0) == 0 | (i34 & 2013265920 | 0) == 0 ? 0 : i34 & 16777214) | i3 & -16777215;
 HEAP32[i35 >> 2] = i5;
 i3 = (HEAP32[i36 >> 2] | 0) >>> 27 << 24 & 251658240 | i5 & -2130706433 | 1610612736;
 HEAP32[i35 >> 2] = i3;
 if ((HEAP32[i36 >> 2] & 1 | 0) == 0) {
  i41 = 0;
 } else {
  i41 = ((HEAP32[i40 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
 }
 HEAP32[i35 >> 2] = i41 | i3 & 1879048191;
 i3 = __ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE(i31, i2) | 0;
 i41 = (i3 | 0) != 0;
 do {
  if (i41) {
   i35 = i3 + 36 | 0;
   i40 = __ZNK7WebCore11RenderStyle9borderEndEv(HEAP32[i35 >> 2] | 0) | 0;
   if (i32) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i7, HEAP32[i35 >> 2] | 0, i38);
    i42 = HEAP32[i7 >> 2] | 0;
    i43 = HEAP8[i7 + 4 | 0] & 1;
   } else {
    HEAP32[i7 >> 2] = 0;
    HEAP8[i7 + 4 | 0] = 0;
    i42 = 0;
    i43 = 0;
   }
   HEAP32[i6 >> 2] = i42;
   i35 = i6 + 4 | 0;
   i36 = HEAP32[i40 + 4 >> 2] | 0;
   i5 = i36 >>> 27 << 24 & 251658240 | (((i36 & 134217726 | 0) == 0 | (i36 & 2013265920 | 0) == 0 ? 0 : i36 & 16777214) | i43) | 1610612736;
   HEAP32[i35 >> 2] = i5;
   if ((i36 & 1 | 0) == 0) {
    i44 = 0;
   } else {
    i44 = ((HEAP32[i40 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i35 >> 2] = i44 | i5;
   i5 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i6, i1) | 0) < 0;
   i35 = i5 ? i1 : i6;
   if ((HEAP32[i35 + 4 >> 2] & 251658240 | 0) == 16777216) {
    i5 = i1;
    HEAP32[i5 >> 2] = 0;
    HEAP32[i5 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i5 = i35;
    i35 = HEAP32[i5 >> 2] | 0;
    i40 = HEAP32[i5 + 4 >> 2] | 0;
    i5 = i1;
    HEAP32[i5 >> 2] = i35;
    HEAP32[i5 + 4 >> 2] = i40;
    if (!((i35 & 0 | 0) == 0 & (i40 & 1879048192 | 0) == 0)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i6 = i2 + 116 | 0;
 i44 = HEAP32[i6 >> 2] | 0;
 i43 = i44 & 536870911;
 i42 = HEAP32[(HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
 if ((i44 & 1073741824 | 0) == 0) {
  i45 = 1;
 } else {
  i45 = __ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i2) | 0;
 }
 i44 = i43 - 1 + i45 | 0;
 i45 = HEAP32[i42 + 116 >> 2] | 0;
 i7 = i42 + 108 | 0;
 i42 = 0;
 i3 = 0;
 while (1) {
  if (i3 >>> 0 >= i45 >>> 0) {
   break;
  }
  i40 = (HEAP32[(HEAP32[i7 >> 2] | 0) + (i3 << 2) >> 2] | 0) + i42 | 0;
  if ((i40 - 1 | 0) >>> 0 < i44 >>> 0) {
   i42 = i40;
   i3 = i3 + 1 | 0;
  } else {
   break;
  }
 }
 i42 = HEAP32[i28 >> 2] | 0;
 i44 = HEAP32[i42 + 8 >> 2] | 0;
 i7 = (HEAP32[(HEAP32[i44 + 36 >> 2] | 0) + 40 >> 2] ^ HEAP32[(HEAP32[i39 >> 2] | 0) + 40 >> 2]) & 1073741824;
 if ((i7 | i43 | 0) == 0) {
  i46 = 22;
 } else {
  if ((i3 | 0) == ((HEAP32[(HEAP32[i44 + 8 >> 2] | 0) + 116 >> 2] | 0) - 1 | 0) & (i7 | 0) != 0) {
   i46 = 22;
  } else {
   i47 = 0;
  }
 }
 do {
  if ((i46 | 0) == 22) {
   i7 = __ZNK7WebCore14RenderTableRow24borderAdjoiningStartCellEPKNS_15RenderTableCellE(i42, i2) | 0;
   if (i32) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i9, HEAP32[(HEAP32[i28 >> 2] | 0) + 36 >> 2] | 0, i37);
    i48 = HEAP32[i9 >> 2] | 0;
    i49 = HEAP8[i9 + 4 | 0] & 1;
   } else {
    HEAP32[i9 >> 2] = 0;
    HEAP8[i9 + 4 | 0] = 0;
    i48 = 0;
    i49 = 0;
   }
   HEAP32[i8 >> 2] = i48;
   i44 = i8 + 4 | 0;
   i3 = HEAP32[i7 + 4 >> 2] | 0;
   i43 = i3 >>> 27 << 24 | (((i3 & 134217726 | 0) == 0 | (i3 & 2013265920 | 0) == 0 ? 0 : i3 & 16777214) | i49) | 1342177280;
   HEAP32[i44 >> 2] = i43;
   if ((i3 & 1 | 0) == 0) {
    i50 = 0;
   } else {
    i50 = ((HEAP32[i7 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i44 >> 2] = i50 | i43;
   i43 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i8) | 0) < 0;
   i44 = i43 ? i8 : i1;
   if ((HEAP32[i44 + 4 >> 2] & 251658240 | 0) == 16777216) {
    i43 = i1;
    HEAP32[i43 >> 2] = 0;
    HEAP32[i43 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i43 = i44;
   i44 = HEAP32[i43 >> 2] | 0;
   i7 = HEAP32[i43 + 4 >> 2] | 0;
   i43 = i1;
   HEAP32[i43 >> 2] = i44;
   HEAP32[i43 + 4 >> 2] = i7;
   if ((i44 & 0 | 0) == 0 & (i7 & 1879048192 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i7 = __ZNK7WebCore18RenderTableSection24borderAdjoiningStartCellEPKNS_15RenderTableCellE(HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0, i2) | 0;
   if (i32) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i11, HEAP32[(HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0, i37);
    i51 = HEAP32[i11 >> 2] | 0;
    i52 = HEAP8[i11 + 4 | 0] & 1;
   } else {
    HEAP32[i11 >> 2] = 0;
    HEAP8[i11 + 4 | 0] = 0;
    i51 = 0;
    i52 = 0;
   }
   HEAP32[i10 >> 2] = i51;
   i44 = i10 + 4 | 0;
   i3 = HEAP32[i7 + 4 >> 2] | 0;
   i39 = i3 >>> 27 << 24 & 251658240 | (((i3 & 134217726 | 0) == 0 | (i3 & 2013265920 | 0) == 0 ? 0 : i3 & 16777214) | i52) | 1073741824;
   HEAP32[i44 >> 2] = i39;
   if ((i3 & 1 | 0) == 0) {
    i53 = 0;
   } else {
    i53 = ((HEAP32[i7 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i44 >> 2] = i53 | i39;
   i39 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i10) | 0) < 0;
   i44 = i39 ? i10 : i1;
   if ((HEAP32[i44 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i43 >> 2] = 0;
    HEAP32[i43 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i39 = i44;
    i44 = HEAP32[i39 >> 2] | 0;
    i7 = HEAP32[i39 + 4 >> 2] | 0;
    HEAP32[i43 >> 2] = i44;
    HEAP32[i43 + 4 >> 2] = i7;
    if (!((i44 & 0 | 0) == 0 & (i7 & 1879048192 | 0) == 0)) {
     i47 = 1;
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i10 = i30 + 176 | 0;
 do {
  if ((HEAP8[i10] & 2) != 0) {
   i53 = __ZNK7WebCore11RenderTable14slowColElementEjPbS1_(i31, HEAP32[i6 >> 2] & 536870911, i12, i13) | 0;
   if ((i53 | 0) == 0) {
    break;
   }
   i52 = i53 + 36 | 0;
   if ((HEAP32[(HEAP32[i52 >> 2] | 0) + 48 >> 2] & 31 | 0) == 12) {
    if ((HEAP8[i12] & 1) == 0) {
     break;
    }
    i51 = __ZNK7WebCore14RenderTableCol30borderAdjoiningCellStartBorderEPKNS_15RenderTableCellE(i53, i2) | 0;
    if (i32) {
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i15, HEAP32[i52 >> 2] | 0, i37);
     i54 = HEAP32[i15 >> 2] | 0;
     i55 = HEAP8[i15 + 4 | 0] & 1;
    } else {
     HEAP32[i15 >> 2] = 0;
     HEAP8[i15 + 4 | 0] = 0;
     i54 = 0;
     i55 = 0;
    }
    HEAP32[i14 >> 2] = i54;
    i11 = i14 + 4 | 0;
    i28 = HEAP32[i51 + 4 >> 2] | 0;
    i8 = i28 >>> 27 << 24 & 251658240 | (((i28 & 134217726 | 0) == 0 | (i28 & 2013265920 | 0) == 0 ? 0 : i28 & 16777214) | i55) | 536870912;
    HEAP32[i11 >> 2] = i8;
    if ((i28 & 1 | 0) == 0) {
     i56 = 0;
    } else {
     i56 = ((HEAP32[i51 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
    }
    HEAP32[i11 >> 2] = i56 | i8;
    i8 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i14) | 0) < 0;
    i11 = i8 ? i14 : i1;
    if ((HEAP32[i11 + 4 >> 2] & 251658240 | 0) == 16777216) {
     i8 = i1;
     HEAP32[i8 >> 2] = 0;
     HEAP32[i8 + 4 >> 2] = 0;
     STACKTOP = i4;
     return;
    } else {
     i8 = i11;
     i11 = HEAP32[i8 >> 2] | 0;
     i51 = HEAP32[i8 + 4 >> 2] | 0;
     i8 = i1;
     HEAP32[i8 >> 2] = i11;
     HEAP32[i8 + 4 >> 2] = i51;
     if (!((i11 & 0 | 0) == 0 & (i51 & 1879048192 | 0) == 0)) {
      break;
     }
     STACKTOP = i4;
     return;
    }
   }
   i51 = __ZNK7WebCore14RenderTableCol30borderAdjoiningCellStartBorderEPKNS_15RenderTableCellE(i53, i2) | 0;
   if (i32) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i17, HEAP32[i52 >> 2] | 0, i37);
    i57 = HEAP32[i17 >> 2] | 0;
    i58 = HEAP8[i17 + 4 | 0] & 1;
   } else {
    HEAP32[i17 >> 2] = 0;
    HEAP8[i17 + 4 | 0] = 0;
    i57 = 0;
    i58 = 0;
   }
   HEAP32[i16 >> 2] = i57;
   i52 = i16 + 4 | 0;
   i11 = HEAP32[i51 + 4 >> 2] | 0;
   i8 = i11 >>> 27 << 24 | (((i11 & 134217726 | 0) == 0 | (i11 & 2013265920 | 0) == 0 ? 0 : i11 & 16777214) | i58) | 805306368;
   HEAP32[i52 >> 2] = i8;
   if ((i11 & 1 | 0) == 0) {
    i59 = 0;
   } else {
    i59 = ((HEAP32[i51 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i52 >> 2] = i59 | i8;
   i8 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i16) | 0) < 0;
   i52 = i8 ? i16 : i1;
   if ((HEAP32[i52 + 4 >> 2] & 251658240 | 0) == 16777216) {
    i8 = i1;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i8 = i52;
   i52 = HEAP32[i8 >> 2] | 0;
   i51 = HEAP32[i8 + 4 >> 2] | 0;
   i8 = i1;
   HEAP32[i8 >> 2] = i52;
   HEAP32[i8 + 4 >> 2] = i51;
   if ((i52 & 0 | 0) == 0 & (i51 & 1879048192 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i53 + 12 >> 2] | 0) != 0) {
    break;
   }
   i51 = __ZNK7WebCore14RenderTableCol20enclosingColumnGroupEv(i53) | 0;
   if ((i51 | 0) == 0) {
    break;
   }
   i53 = __ZNK7WebCore14RenderTableCol30borderAdjoiningCellStartBorderEPKNS_15RenderTableCellE(i51, i2) | 0;
   if (i32) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i19, HEAP32[i51 + 36 >> 2] | 0, i37);
    i60 = HEAP32[i19 >> 2] | 0;
    i61 = HEAP8[i19 + 4 | 0] & 1;
   } else {
    HEAP32[i19 >> 2] = 0;
    HEAP8[i19 + 4 | 0] = 0;
    i60 = 0;
    i61 = 0;
   }
   HEAP32[i18 >> 2] = i60;
   i51 = i18 + 4 | 0;
   i52 = HEAP32[i53 + 4 >> 2] | 0;
   i11 = i52 >>> 27 << 24 & 251658240 | (((i52 & 134217726 | 0) == 0 | (i52 & 2013265920 | 0) == 0 ? 0 : i52 & 16777214) | i61) | 536870912;
   HEAP32[i51 >> 2] = i11;
   if ((i52 & 1 | 0) == 0) {
    i62 = 0;
   } else {
    i62 = ((HEAP32[i53 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i51 >> 2] = i62 | i11;
   i11 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i18) | 0) < 0;
   i51 = i11 ? i18 : i1;
   if ((HEAP32[i51 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i11 = i51;
    i51 = HEAP32[i11 >> 2] | 0;
    i53 = HEAP32[i11 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = i51;
    HEAP32[i8 + 4 >> 2] = i53;
    if (!((i51 & 0 | 0) == 0 & (i53 & 1879048192 | 0) == 0)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 do {
  if (i41) {
   if ((HEAP8[i10] & 2) == 0) {
    if (i47) {
     break;
    }
    STACKTOP = i4;
    return;
   }
   i18 = __ZNK7WebCore11RenderTable14slowColElementEjPbS1_(i31, (HEAP32[i6 >> 2] & 536870911) - 1 | 0, i12, i13) | 0;
   if ((i18 | 0) == 0) {
    i46 = 101;
    break;
   }
   i62 = i18 + 36 | 0;
   i61 = HEAP32[(HEAP32[i62 >> 2] | 0) + 48 >> 2] & 31;
   if ((i61 | 0) == 12) {
    if ((HEAP8[i13] & 1) == 0) {
     i46 = 101;
     break;
    }
    i60 = __ZNK7WebCore14RenderTableCol24borderAdjoiningCellAfterEPKNS_15RenderTableCellE(i18, i2) | 0;
    if (i32) {
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i21, HEAP32[i62 >> 2] | 0, i38);
     i63 = HEAP32[i21 >> 2] | 0;
     i64 = HEAP8[i21 + 4 | 0] & 1;
    } else {
     HEAP32[i21 >> 2] = 0;
     HEAP8[i21 + 4 | 0] = 0;
     i63 = 0;
     i64 = 0;
    }
    HEAP32[i20 >> 2] = i63;
    i19 = i20 + 4 | 0;
    i16 = HEAP32[i60 + 4 >> 2] | 0;
    i59 = i16 >>> 27 << 24 & 251658240 | (((i16 & 134217726 | 0) == 0 | (i16 & 2013265920 | 0) == 0 ? 0 : i16 & 16777214) | i64) | 536870912;
    HEAP32[i19 >> 2] = i59;
    if ((i16 & 1 | 0) == 0) {
     i65 = 0;
    } else {
     i65 = ((HEAP32[i60 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
    }
    HEAP32[i19 >> 2] = i65 | i59;
    i59 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i20, i1) | 0) < 0;
    i19 = i59 ? i1 : i20;
    if ((HEAP32[i19 + 4 >> 2] & 251658240 | 0) == 16777216) {
     i59 = i1;
     HEAP32[i59 >> 2] = 0;
     HEAP32[i59 + 4 >> 2] = 0;
     STACKTOP = i4;
     return;
    } else {
     i59 = i19;
     i19 = HEAP32[i59 >> 2] | 0;
     i60 = HEAP32[i59 + 4 >> 2] | 0;
     i59 = i1;
     HEAP32[i59 >> 2] = i19;
     HEAP32[i59 + 4 >> 2] = i60;
     if (!((i19 & 0 | 0) == 0 & (i60 & 1879048192 | 0) == 0 | i47 ^ 1)) {
      break;
     }
     STACKTOP = i4;
     return;
    }
   } else if ((i61 | 0) != 13) {
    i46 = 101;
    break;
   }
   i61 = __ZNK7WebCore14RenderTableCol24borderAdjoiningCellAfterEPKNS_15RenderTableCellE(i18, i2) | 0;
   if (i32) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i23, HEAP32[i62 >> 2] | 0, i38);
    i66 = HEAP32[i23 >> 2] | 0;
    i67 = HEAP8[i23 + 4 | 0] & 1;
   } else {
    HEAP32[i23 >> 2] = 0;
    HEAP8[i23 + 4 | 0] = 0;
    i66 = 0;
    i67 = 0;
   }
   HEAP32[i22 >> 2] = i66;
   i62 = i22 + 4 | 0;
   i60 = HEAP32[i61 + 4 >> 2] | 0;
   i19 = i60 >>> 27 << 24 | (((i60 & 134217726 | 0) == 0 | (i60 & 2013265920 | 0) == 0 ? 0 : i60 & 16777214) | i67) | 805306368;
   HEAP32[i62 >> 2] = i19;
   if ((i60 & 1 | 0) == 0) {
    i68 = 0;
   } else {
    i68 = ((HEAP32[i61 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i62 >> 2] = i68 | i19;
   i19 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i22, i1) | 0) < 0;
   i62 = i19 ? i1 : i22;
   if ((HEAP32[i62 + 4 >> 2] & 251658240 | 0) == 16777216) {
    i19 = i1;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i19 = i62;
   i62 = HEAP32[i19 >> 2] | 0;
   i61 = HEAP32[i19 + 4 >> 2] | 0;
   i19 = i1;
   HEAP32[i19 >> 2] = i62;
   HEAP32[i19 + 4 >> 2] = i61;
   if ((i62 & 0 | 0) == 0 & (i61 & 1879048192 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i18 + 16 >> 2] | 0) != 0) {
    if (i47) {
     break;
    }
    STACKTOP = i4;
    return;
   }
   i61 = __ZNK7WebCore14RenderTableCol20enclosingColumnGroupEv(i18) | 0;
   if ((i61 | 0) == 0) {
    i46 = 101;
    break;
   }
   i18 = __ZNK7WebCore14RenderTableCol28borderAdjoiningCellEndBorderEPKNS_15RenderTableCellE(i61, i2) | 0;
   if (i32) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i25, HEAP32[i61 + 36 >> 2] | 0, i38);
    i69 = HEAP32[i25 >> 2] | 0;
    i70 = HEAP8[i25 + 4 | 0] & 1;
   } else {
    HEAP32[i25 >> 2] = 0;
    HEAP8[i25 + 4 | 0] = 0;
    i69 = 0;
    i70 = 0;
   }
   HEAP32[i24 >> 2] = i69;
   i61 = i24 + 4 | 0;
   i62 = HEAP32[i18 + 4 >> 2] | 0;
   i60 = i62 >>> 27 << 24 & 251658240 | (((i62 & 134217726 | 0) == 0 | (i62 & 2013265920 | 0) == 0 ? 0 : i62 & 16777214) | i70) | 536870912;
   HEAP32[i61 >> 2] = i60;
   if ((i62 & 1 | 0) == 0) {
    i71 = 0;
   } else {
    i71 = ((HEAP32[i18 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i61 >> 2] = i71 | i60;
   i60 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i24, i1) | 0) < 0;
   i61 = i60 ? i1 : i24;
   if ((HEAP32[i61 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i60 = i61;
    i61 = HEAP32[i60 >> 2] | 0;
    i18 = HEAP32[i60 + 4 >> 2] | 0;
    HEAP32[i19 >> 2] = i61;
    HEAP32[i19 + 4 >> 2] = i18;
    if (!((i61 & 0 | 0) == 0 & (i18 & 1879048192 | 0) == 0 | i47 ^ 1)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  } else {
   i46 = 101;
  }
 } while (0);
 do {
  if ((i46 | 0) == 101) {
   if (i47) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i47 = __ZNK7WebCore11RenderTable29tableStartBorderAdjoiningCellEPKNS_15RenderTableCellE(i31, i2) | 0;
 if (i32) {
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i27, HEAP32[i30 + 36 >> 2] | 0, i37);
  i72 = HEAP32[i27 >> 2] | 0;
  i73 = HEAP8[i27 + 4 | 0] & 1;
 } else {
  HEAP32[i27 >> 2] = 0;
  HEAP8[i27 + 4 | 0] = 0;
  i72 = 0;
  i73 = 0;
 }
 HEAP32[i26 >> 2] = i72;
 i72 = i26 + 4 | 0;
 i27 = HEAP32[i47 + 4 >> 2] | 0;
 i37 = i27 >>> 27 << 24 | (((i27 & 134217726 | 0) == 0 | (i27 & 2013265920 | 0) == 0 ? 0 : i27 & 16777214) | i73) | 268435456;
 HEAP32[i72 >> 2] = i37;
 if ((i27 & 1 | 0) == 0) {
  i74 = 0;
 } else {
  i74 = ((HEAP32[i47 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
 }
 HEAP32[i72 >> 2] = i74 | i37;
 i37 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i26) | 0) < 0;
 i74 = i37 ? i26 : i1;
 if ((HEAP32[i74 + 4 >> 2] & 251658240 | 0) == 16777216) {
  i75 = 0;
  i76 = 0;
  i77 = 0;
  i78 = 0;
  i79 = i1;
  i80 = i76 | i78;
  i81 = i75 | i77;
  i82 = i79 | 0;
  HEAP32[i82 >> 2] = i80;
  i83 = i79 + 4 | 0;
  HEAP32[i83 >> 2] = i81;
  STACKTOP = i4;
  return;
 }
 i26 = i74;
 i74 = HEAP32[i26 >> 2] | 0;
 i37 = HEAP32[i26 + 4 >> 2] | 0;
 i75 = i37 & 0;
 i76 = i74 & -1;
 i77 = i37 & -1;
 i78 = i74 & 0;
 i79 = i1;
 i80 = i76 | i78;
 i81 = i75 | i77;
 i82 = i79 | 0;
 HEAP32[i82 >> 2] = i80;
 i83 = i79 + 4 | 0;
 HEAP32[i83 >> 2] = i81;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15RenderTableCell28computeCollapsedBeforeBorderENS_23IncludeBorderColorOrNotE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
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
 i22 = i2 + 8 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 i24 = HEAP32[(HEAP32[i23 + 8 >> 2] | 0) + 8 >> 2] | 0;
 i25 = i24;
 i26 = (i3 | 0) != 0;
 if (i26) {
  i3 = HEAP32[i23 + 36 >> 2] | 0;
  i23 = __ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE(193, (HEAP32[i3 + 40 >> 2] | 0) >>> 30 & 1, (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3) | 0;
  i3 = HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] | 0;
  i27 = __ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE(189, (HEAP32[i3 + 40 >> 2] | 0) >>> 30 & 1, (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3) | 0;
  i3 = i2 + 36 | 0;
  i28 = __ZNK7WebCore11RenderStyle12borderBeforeEv(HEAP32[i3 >> 2] | 0) | 0;
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i5, HEAP32[i3 >> 2] | 0, i23);
  i29 = HEAP32[i5 >> 2] | 0;
  i30 = HEAP8[i5 + 4 | 0] & 1;
  i31 = i23;
  i32 = i27;
  i33 = i28;
 } else {
  i28 = __ZNK7WebCore11RenderStyle12borderBeforeEv(HEAP32[i2 + 36 >> 2] | 0) | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP8[i5 + 4 | 0] = 0;
  i29 = 0;
  i30 = 0;
  i31 = 0;
  i32 = 0;
  i33 = i28;
 }
 HEAP32[i1 >> 2] = i29;
 i29 = i1 + 4 | 0;
 i28 = HEAP32[i29 >> 2] & -2 | i30;
 HEAP32[i29 >> 2] = i28;
 i30 = HEAP32[i33 + 4 >> 2] | 0;
 i5 = i30 >>> 27 << 24 & 251658240 | (((i30 & 134217726 | 0) == 0 | (i30 & 2013265920 | 0) == 0 ? 0 : i30 & 16777214) | i28 & -2147483647) | 1610612736;
 HEAP32[i29 >> 2] = i5;
 if ((i30 & 1 | 0) == 0) {
  i34 = 0;
 } else {
  i34 = ((HEAP32[i33 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
 }
 HEAP32[i29 >> 2] = i34 | i5 & 1879048191;
 i5 = __ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE(i25, i2) | 0;
 i34 = (i5 | 0) != 0;
 do {
  if (i34) {
   i29 = i5 + 36 | 0;
   i33 = __ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i29 >> 2] | 0) | 0;
   if (i26) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i7, HEAP32[i29 >> 2] | 0, i32);
    i35 = HEAP32[i7 >> 2] | 0;
    i36 = HEAP8[i7 + 4 | 0] & 1;
   } else {
    HEAP32[i7 >> 2] = 0;
    HEAP8[i7 + 4 | 0] = 0;
    i35 = 0;
    i36 = 0;
   }
   HEAP32[i6 >> 2] = i35;
   i29 = i6 + 4 | 0;
   i30 = HEAP32[i33 + 4 >> 2] | 0;
   i28 = i30 >>> 27 << 24 & 251658240 | (((i30 & 134217726 | 0) == 0 | (i30 & 2013265920 | 0) == 0 ? 0 : i30 & 16777214) | i36) | 1610612736;
   HEAP32[i29 >> 2] = i28;
   if ((i30 & 1 | 0) == 0) {
    i37 = 0;
   } else {
    i37 = ((HEAP32[i33 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i29 >> 2] = i37 | i28;
   i28 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i6, i1) | 0) < 0;
   i29 = i28 ? i1 : i6;
   if ((HEAP32[i29 + 4 >> 2] & 251658240 | 0) == 16777216) {
    i28 = i1;
    HEAP32[i28 >> 2] = 0;
    HEAP32[i28 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i28 = i29;
    i29 = HEAP32[i28 >> 2] | 0;
    i33 = HEAP32[i28 + 4 >> 2] | 0;
    i28 = i1;
    HEAP32[i28 >> 2] = i29;
    HEAP32[i28 + 4 >> 2] = i33;
    if (!((i29 & 0 | 0) == 0 & (i33 & 1879048192 | 0) == 0)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i6 = __ZNK7WebCore11RenderStyle12borderBeforeEv(HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] | 0) | 0;
 if (i26) {
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i9, HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] | 0, i31);
  i38 = HEAP32[i9 >> 2] | 0;
  i39 = HEAP8[i9 + 4 | 0] & 1;
 } else {
  HEAP32[i9 >> 2] = 0;
  HEAP8[i9 + 4 | 0] = 0;
  i38 = 0;
  i39 = 0;
 }
 HEAP32[i8 >> 2] = i38;
 i38 = i8 + 4 | 0;
 i9 = HEAP32[i6 + 4 >> 2] | 0;
 i37 = i9 >>> 27 << 24 | (((i9 & 134217726 | 0) == 0 | (i9 & 2013265920 | 0) == 0 ? 0 : i9 & 16777214) | i39) | 1342177280;
 HEAP32[i38 >> 2] = i37;
 if ((i9 & 1 | 0) == 0) {
  i40 = 0;
 } else {
  i40 = ((HEAP32[i6 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
 }
 HEAP32[i38 >> 2] = i40 | i37;
 i37 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i8) | 0) < 0;
 i40 = i37 ? i8 : i1;
 if ((HEAP32[i40 + 4 >> 2] & 251658240 | 0) == 16777216) {
  i8 = i1;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i8 + 4 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i8 = i40;
 i40 = HEAP32[i8 >> 2] | 0;
 i37 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = i1;
 HEAP32[i8 >> 2] = i40;
 HEAP32[i8 + 4 >> 2] = i37;
 if ((i40 & 0 | 0) == 0 & (i37 & 1879048192 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if (i34) {
   i37 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 8 >> 2] | 0;
   i40 = HEAP32[i22 >> 2] | 0;
   i38 = HEAP32[((i37 | 0) == (HEAP32[i40 + 8 >> 2] | 0) ? i40 + 12 | 0 : i37 + 32 | 0) >> 2] | 0;
   if ((i38 | 0) == 0) {
    break;
   }
   i37 = i38 + 20 | 0;
   if ((HEAP32[i37 >> 2] & 768 | 0) == 256) {
    i41 = HEAP32[(HEAP32[i38 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i41 = HEAP32[i38 + 36 >> 2] | 0;
   }
   i40 = __ZNK7WebCore11RenderStyle11borderAfterEv(i41) | 0;
   if (i26) {
    if ((HEAP32[i37 >> 2] & 768 | 0) == 256) {
     i42 = HEAP32[(HEAP32[i38 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i42 = HEAP32[i38 + 36 >> 2] | 0;
    }
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i11, i42, i32);
    i43 = HEAP32[i11 >> 2] | 0;
    i44 = HEAP8[i11 + 4 | 0] & 1;
   } else {
    HEAP32[i11 >> 2] = 0;
    HEAP8[i11 + 4 | 0] = 0;
    i43 = 0;
    i44 = 0;
   }
   HEAP32[i10 >> 2] = i43;
   i38 = i10 + 4 | 0;
   i37 = HEAP32[i40 + 4 >> 2] | 0;
   i6 = i37 >>> 27 << 24 | (((i37 & 134217726 | 0) == 0 | (i37 & 2013265920 | 0) == 0 ? 0 : i37 & 16777214) | i44) | 1342177280;
   HEAP32[i38 >> 2] = i6;
   if ((i37 & 1 | 0) == 0) {
    i45 = 0;
   } else {
    i45 = ((HEAP32[i40 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i38 >> 2] = i45 | i6;
   i6 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i10, i1) | 0) < 0;
   i38 = i6 ? i1 : i10;
   if ((HEAP32[i38 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i6 = i38;
    i38 = HEAP32[i6 >> 2] | 0;
    i40 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = i38;
    HEAP32[i8 + 4 >> 2] = i40;
    if (!((i38 & 0 | 0) == 0 & (i40 & 1879048192 | 0) == 0)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i10 = HEAP32[i22 >> 2] | 0;
 i22 = HEAP32[i10 + 8 >> 2] | 0;
 i45 = i22;
 do {
  if ((HEAP32[i10 + 92 >> 2] & 2147483647 | 0) == 0) {
   i44 = i22 + 36 | 0;
   i43 = __ZNK7WebCore11RenderStyle12borderBeforeEv(HEAP32[i44 >> 2] | 0) | 0;
   if (i26) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i13, HEAP32[i44 >> 2] | 0, i31);
    i46 = HEAP32[i13 >> 2] | 0;
    i47 = HEAP8[i13 + 4 | 0] & 1;
   } else {
    HEAP32[i13 >> 2] = 0;
    HEAP8[i13 + 4 | 0] = 0;
    i46 = 0;
    i47 = 0;
   }
   HEAP32[i12 >> 2] = i46;
   i44 = i12 + 4 | 0;
   i11 = HEAP32[i43 + 4 >> 2] | 0;
   i42 = i11 >>> 27 << 24 & 251658240 | (((i11 & 134217726 | 0) == 0 | (i11 & 2013265920 | 0) == 0 ? 0 : i11 & 16777214) | i47) | 1073741824;
   HEAP32[i44 >> 2] = i42;
   if ((i11 & 1 | 0) == 0) {
    i48 = 0;
   } else {
    i48 = ((HEAP32[i43 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i44 >> 2] = i48 | i42;
   i42 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i12) | 0) < 0;
   i44 = i42 ? i12 : i1;
   if ((HEAP32[i44 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i42 = i44;
   i44 = HEAP32[i42 >> 2] | 0;
   i43 = HEAP32[i42 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = i44;
   HEAP32[i8 + 4 >> 2] = i43;
   if ((i44 & 0 | 0) == 0 & (i43 & 1879048192 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i43 = __ZNK7WebCore11RenderTable12sectionAboveEPKNS_18RenderTableSectionENS_22SkipEmptySectionsValueE(i25, i45, 1) | 0;
   if ((i43 | 0) == 0) {
    break;
   }
   i44 = i43 + 36 | 0;
   i42 = __ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i44 >> 2] | 0) | 0;
   if (i26) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i15, HEAP32[i44 >> 2] | 0, i32);
    i49 = HEAP32[i15 >> 2] | 0;
    i50 = HEAP8[i15 + 4 | 0] & 1;
   } else {
    HEAP32[i15 >> 2] = 0;
    HEAP8[i15 + 4 | 0] = 0;
    i49 = 0;
    i50 = 0;
   }
   HEAP32[i14 >> 2] = i49;
   i44 = i14 + 4 | 0;
   i11 = HEAP32[i42 + 4 >> 2] | 0;
   i41 = i11 >>> 27 << 24 & 251658240 | (((i11 & 134217726 | 0) == 0 | (i11 & 2013265920 | 0) == 0 ? 0 : i11 & 16777214) | i50) | 1073741824;
   HEAP32[i44 >> 2] = i41;
   if ((i11 & 1 | 0) == 0) {
    i51 = 0;
   } else {
    i51 = ((HEAP32[i42 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i44 >> 2] = i51 | i41;
   i41 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i14, i1) | 0) < 0;
   i44 = i41 ? i1 : i14;
   if ((HEAP32[i44 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i41 = i44;
    i44 = HEAP32[i41 >> 2] | 0;
    i42 = HEAP32[i41 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = i44;
    HEAP32[i8 + 4 >> 2] = i42;
    if (!((i44 & 0 | 0) == 0 & (i42 & 1879048192 | 0) == 0)) {
     i52 = i43;
     i53 = 57;
     break;
    }
    STACKTOP = i4;
    return;
   }
  } else {
   i52 = i45;
   i53 = 57;
  }
 } while (0);
 do {
  if ((i53 | 0) == 57) {
   if ((i52 | 0) == 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((HEAP8[i24 + 176 | 0] & 2) != 0) {
   i52 = __ZNK7WebCore11RenderTable14slowColElementEjPbS1_(i25, HEAP32[i2 + 116 >> 2] & 536870911, 0, 0) | 0;
   if ((i52 | 0) == 0) {
    break;
   }
   i53 = i52 + 36 | 0;
   i45 = __ZNK7WebCore11RenderStyle12borderBeforeEv(HEAP32[i53 >> 2] | 0) | 0;
   if (i26) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i17, HEAP32[i53 >> 2] | 0, i31);
    i54 = HEAP32[i17 >> 2] | 0;
    i55 = HEAP8[i17 + 4 | 0] & 1;
   } else {
    HEAP32[i17 >> 2] = 0;
    HEAP8[i17 + 4 | 0] = 0;
    i54 = 0;
    i55 = 0;
   }
   HEAP32[i16 >> 2] = i54;
   i53 = i16 + 4 | 0;
   i14 = HEAP32[i45 + 4 >> 2] | 0;
   i51 = i14 >>> 27 << 24 | (((i14 & 134217726 | 0) == 0 | (i14 & 2013265920 | 0) == 0 ? 0 : i14 & 16777214) | i55) | 805306368;
   HEAP32[i53 >> 2] = i51;
   if ((i14 & 1 | 0) == 0) {
    i56 = 0;
   } else {
    i56 = ((HEAP32[i45 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i53 >> 2] = i56 | i51;
   i51 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i16) | 0) < 0;
   i53 = i51 ? i16 : i1;
   if ((HEAP32[i53 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i51 = i53;
   i53 = HEAP32[i51 >> 2] | 0;
   i45 = HEAP32[i51 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = i53;
   HEAP32[i8 + 4 >> 2] = i45;
   if ((i53 & 0 | 0) == 0 & (i45 & 1879048192 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i45 = __ZNK7WebCore14RenderTableCol20enclosingColumnGroupEv(i52) | 0;
   if ((i45 | 0) == 0) {
    break;
   }
   i52 = i45 + 36 | 0;
   i45 = __ZNK7WebCore11RenderStyle12borderBeforeEv(HEAP32[i52 >> 2] | 0) | 0;
   if (i26) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i19, HEAP32[i52 >> 2] | 0, i31);
    i57 = HEAP32[i19 >> 2] | 0;
    i58 = HEAP8[i19 + 4 | 0] & 1;
   } else {
    HEAP32[i19 >> 2] = 0;
    HEAP8[i19 + 4 | 0] = 0;
    i57 = 0;
    i58 = 0;
   }
   HEAP32[i18 >> 2] = i57;
   i52 = i18 + 4 | 0;
   i53 = HEAP32[i45 + 4 >> 2] | 0;
   i51 = i53 >>> 27 << 24 & 251658240 | (((i53 & 134217726 | 0) == 0 | (i53 & 2013265920 | 0) == 0 ? 0 : i53 & 16777214) | i58) | 536870912;
   HEAP32[i52 >> 2] = i51;
   if ((i53 & 1 | 0) == 0) {
    i59 = 0;
   } else {
    i59 = ((HEAP32[i45 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i52 >> 2] = i59 | i51;
   i51 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i18) | 0) < 0;
   i52 = i51 ? i18 : i1;
   if ((HEAP32[i52 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i51 = i52;
    i52 = HEAP32[i51 >> 2] | 0;
    i45 = HEAP32[i51 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = i52;
    HEAP32[i8 + 4 >> 2] = i45;
    if (!((i52 & 0 | 0) == 0 & (i45 & 1879048192 | 0) == 0)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i18 = i24 + 36 | 0;
 i24 = __ZNK7WebCore11RenderStyle12borderBeforeEv(HEAP32[i18 >> 2] | 0) | 0;
 if (i26) {
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i21, HEAP32[i18 >> 2] | 0, i31);
  i60 = HEAP32[i21 >> 2] | 0;
  i61 = HEAP8[i21 + 4 | 0] & 1;
 } else {
  HEAP32[i21 >> 2] = 0;
  HEAP8[i21 + 4 | 0] = 0;
  i60 = 0;
  i61 = 0;
 }
 HEAP32[i20 >> 2] = i60;
 i60 = i20 + 4 | 0;
 i21 = HEAP32[i24 + 4 >> 2] | 0;
 i31 = i21 >>> 27 << 24 | (((i21 & 134217726 | 0) == 0 | (i21 & 2013265920 | 0) == 0 ? 0 : i21 & 16777214) | i61) | 268435456;
 HEAP32[i60 >> 2] = i31;
 if ((i21 & 1 | 0) == 0) {
  i62 = 0;
 } else {
  i62 = ((HEAP32[i24 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
 }
 HEAP32[i60 >> 2] = i62 | i31;
 i31 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i20) | 0) < 0;
 i62 = i31 ? i20 : i1;
 if ((HEAP32[i62 + 4 >> 2] & 251658240 | 0) == 16777216) {
  i63 = 0;
  i64 = 0;
  i65 = 0;
  i66 = 0;
  i67 = i64 | i66;
  i68 = i63 | i65;
  i69 = i8 | 0;
  HEAP32[i69 >> 2] = i67;
  i70 = i8 + 4 | 0;
  HEAP32[i70 >> 2] = i68;
  STACKTOP = i4;
  return;
 }
 i1 = i62;
 i62 = HEAP32[i1 >> 2] | 0;
 i20 = HEAP32[i1 + 4 >> 2] | 0;
 i63 = i20 & 0;
 i64 = i62 & -1;
 i65 = i20 & -1;
 i66 = i62 & 0;
 i67 = i64 | i66;
 i68 = i63 | i65;
 i69 = i8 | 0;
 HEAP32[i69 >> 2] = i67;
 i70 = i8 + 4 | 0;
 HEAP32[i70 >> 2] = i68;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15RenderTableCell27computeCollapsedAfterBorderENS_23IncludeBorderColorOrNotE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
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
 i22 = i2 + 8 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 i24 = HEAP32[(HEAP32[i23 + 8 >> 2] | 0) + 8 >> 2] | 0;
 i25 = i24;
 i26 = (i3 | 0) != 0;
 if (i26) {
  i3 = HEAP32[i23 + 36 >> 2] | 0;
  i23 = __ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE(193, (HEAP32[i3 + 40 >> 2] | 0) >>> 30 & 1, (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3) | 0;
  i3 = HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] | 0;
  i27 = __ZN7WebCore11CSSProperty29resolveDirectionAwarePropertyENS_13CSSPropertyIDENS_13TextDirectionENS_11WritingModeE(189, (HEAP32[i3 + 40 >> 2] | 0) >>> 30 & 1, (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3) | 0;
  i3 = i2 + 36 | 0;
  i28 = __ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i3 >> 2] | 0) | 0;
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i5, HEAP32[i3 >> 2] | 0, i27);
  i29 = HEAP32[i5 >> 2] | 0;
  i30 = HEAP8[i5 + 4 | 0] & 1;
  i31 = i23;
  i32 = i27;
  i33 = i28;
 } else {
  i28 = __ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i2 + 36 >> 2] | 0) | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP8[i5 + 4 | 0] = 0;
  i29 = 0;
  i30 = 0;
  i31 = 0;
  i32 = 0;
  i33 = i28;
 }
 HEAP32[i1 >> 2] = i29;
 i29 = i1 + 4 | 0;
 i28 = HEAP32[i29 >> 2] & -2 | i30;
 HEAP32[i29 >> 2] = i28;
 i30 = HEAP32[i33 + 4 >> 2] | 0;
 i5 = i30 >>> 27 << 24 & 251658240 | (((i30 & 134217726 | 0) == 0 | (i30 & 2013265920 | 0) == 0 ? 0 : i30 & 16777214) | i28 & -2147483647) | 1610612736;
 HEAP32[i29 >> 2] = i5;
 if ((i30 & 1 | 0) == 0) {
  i34 = 0;
 } else {
  i34 = ((HEAP32[i33 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
 }
 HEAP32[i29 >> 2] = i34 | i5 & 1879048191;
 i5 = __ZNK7WebCore11RenderTable9cellBelowEPKNS_15RenderTableCellE(i25, i2) | 0;
 i34 = (i5 | 0) != 0;
 do {
  if (i34) {
   i29 = i5 + 36 | 0;
   i33 = __ZNK7WebCore11RenderStyle12borderBeforeEv(HEAP32[i29 >> 2] | 0) | 0;
   if (i26) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i7, HEAP32[i29 >> 2] | 0, i31);
    i35 = HEAP32[i7 >> 2] | 0;
    i36 = HEAP8[i7 + 4 | 0] & 1;
   } else {
    HEAP32[i7 >> 2] = 0;
    HEAP8[i7 + 4 | 0] = 0;
    i35 = 0;
    i36 = 0;
   }
   HEAP32[i6 >> 2] = i35;
   i29 = i6 + 4 | 0;
   i30 = HEAP32[i33 + 4 >> 2] | 0;
   i28 = i30 >>> 27 << 24 & 251658240 | (((i30 & 134217726 | 0) == 0 | (i30 & 2013265920 | 0) == 0 ? 0 : i30 & 16777214) | i36) | 1610612736;
   HEAP32[i29 >> 2] = i28;
   if ((i30 & 1 | 0) == 0) {
    i37 = 0;
   } else {
    i37 = ((HEAP32[i33 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i29 >> 2] = i37 | i28;
   i28 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i6) | 0) < 0;
   i29 = i28 ? i6 : i1;
   if ((HEAP32[i29 + 4 >> 2] & 251658240 | 0) == 16777216) {
    i28 = i1;
    HEAP32[i28 >> 2] = 0;
    HEAP32[i28 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i28 = i29;
    i29 = HEAP32[i28 >> 2] | 0;
    i33 = HEAP32[i28 + 4 >> 2] | 0;
    i28 = i1;
    HEAP32[i28 >> 2] = i29;
    HEAP32[i28 + 4 >> 2] = i33;
    if (!((i29 & 0 | 0) == 0 & (i33 & 1879048192 | 0) == 0)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i6 = __ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] | 0) | 0;
 if (i26) {
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i9, HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] | 0, i32);
  i38 = HEAP32[i9 >> 2] | 0;
  i39 = HEAP8[i9 + 4 | 0] & 1;
 } else {
  HEAP32[i9 >> 2] = 0;
  HEAP8[i9 + 4 | 0] = 0;
  i38 = 0;
  i39 = 0;
 }
 HEAP32[i8 >> 2] = i38;
 i38 = i8 + 4 | 0;
 i9 = HEAP32[i6 + 4 >> 2] | 0;
 i37 = i9 >>> 27 << 24 | (((i9 & 134217726 | 0) == 0 | (i9 & 2013265920 | 0) == 0 ? 0 : i9 & 16777214) | i39) | 1342177280;
 HEAP32[i38 >> 2] = i37;
 if ((i9 & 1 | 0) == 0) {
  i40 = 0;
 } else {
  i40 = ((HEAP32[i6 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
 }
 HEAP32[i38 >> 2] = i40 | i37;
 i37 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i8) | 0) < 0;
 i40 = i37 ? i8 : i1;
 if ((HEAP32[i40 + 4 >> 2] & 251658240 | 0) == 16777216) {
  i8 = i1;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i8 + 4 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i8 = i40;
 i40 = HEAP32[i8 >> 2] | 0;
 i37 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = i1;
 HEAP32[i8 >> 2] = i40;
 HEAP32[i8 + 4 >> 2] = i37;
 if ((i40 & 0 | 0) == 0 & (i37 & 1879048192 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if (i34) {
   i37 = i5 + 8 | 0;
   i40 = __ZNK7WebCore11RenderStyle12borderBeforeEv(HEAP32[(HEAP32[i37 >> 2] | 0) + 36 >> 2] | 0) | 0;
   if (i26) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i11, HEAP32[(HEAP32[i37 >> 2] | 0) + 36 >> 2] | 0, i31);
    i41 = HEAP32[i11 >> 2] | 0;
    i42 = HEAP8[i11 + 4 | 0] & 1;
   } else {
    HEAP32[i11 >> 2] = 0;
    HEAP8[i11 + 4 | 0] = 0;
    i41 = 0;
    i42 = 0;
   }
   HEAP32[i10 >> 2] = i41;
   i37 = i10 + 4 | 0;
   i38 = HEAP32[i40 + 4 >> 2] | 0;
   i6 = i38 >>> 27 << 24 | (((i38 & 134217726 | 0) == 0 | (i38 & 2013265920 | 0) == 0 ? 0 : i38 & 16777214) | i42) | 1342177280;
   HEAP32[i37 >> 2] = i6;
   if ((i38 & 1 | 0) == 0) {
    i43 = 0;
   } else {
    i43 = ((HEAP32[i40 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i37 >> 2] = i43 | i6;
   i6 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i10) | 0) < 0;
   i37 = i6 ? i10 : i1;
   if ((HEAP32[i37 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i6 = i37;
    i37 = HEAP32[i6 >> 2] | 0;
    i40 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = i37;
    HEAP32[i8 + 4 >> 2] = i40;
    if (!((i37 & 0 | 0) == 0 & (i40 & 1879048192 | 0) == 0)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i10 = HEAP32[i22 >> 2] | 0;
 i22 = HEAP32[i10 + 8 >> 2] | 0;
 i43 = i22;
 i42 = HEAP32[i10 + 92 >> 2] & 2147483647;
 i10 = i2 + 116 | 0;
 if ((HEAP32[i10 >> 2] | 0) < 0) {
  i44 = __ZNK7WebCore15RenderTableCell19parseRowSpanFromDOMEv(i2) | 0;
 } else {
  i44 = 1;
 }
 do {
  if ((i44 + i42 | 0) >>> 0 < (HEAP32[i22 + 100 >> 2] | 0) >>> 0) {
   i45 = i43;
   i46 = 52;
  } else {
   i2 = i22 + 36 | 0;
   i41 = __ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i2 >> 2] | 0) | 0;
   if (i26) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i13, HEAP32[i2 >> 2] | 0, i32);
    i47 = HEAP32[i13 >> 2] | 0;
    i48 = HEAP8[i13 + 4 | 0] & 1;
   } else {
    HEAP32[i13 >> 2] = 0;
    HEAP8[i13 + 4 | 0] = 0;
    i47 = 0;
    i48 = 0;
   }
   HEAP32[i12 >> 2] = i47;
   i2 = i12 + 4 | 0;
   i11 = HEAP32[i41 + 4 >> 2] | 0;
   i5 = i11 >>> 27 << 24 & 251658240 | (((i11 & 134217726 | 0) == 0 | (i11 & 2013265920 | 0) == 0 ? 0 : i11 & 16777214) | i48) | 1073741824;
   HEAP32[i2 >> 2] = i5;
   if ((i11 & 1 | 0) == 0) {
    i49 = 0;
   } else {
    i49 = ((HEAP32[i41 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i2 >> 2] = i49 | i5;
   i5 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i12) | 0) < 0;
   i2 = i5 ? i12 : i1;
   if ((HEAP32[i2 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i5 = i2;
   i2 = HEAP32[i5 >> 2] | 0;
   i41 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = i2;
   HEAP32[i8 + 4 >> 2] = i41;
   if ((i2 & 0 | 0) == 0 & (i41 & 1879048192 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i41 = __ZNK7WebCore11RenderTable12sectionBelowEPKNS_18RenderTableSectionENS_22SkipEmptySectionsValueE(i25, i43, 1) | 0;
   if ((i41 | 0) == 0) {
    break;
   }
   i2 = i41 + 36 | 0;
   i5 = __ZNK7WebCore11RenderStyle12borderBeforeEv(HEAP32[i2 >> 2] | 0) | 0;
   if (i26) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i15, HEAP32[i2 >> 2] | 0, i31);
    i50 = HEAP32[i15 >> 2] | 0;
    i51 = HEAP8[i15 + 4 | 0] & 1;
   } else {
    HEAP32[i15 >> 2] = 0;
    HEAP8[i15 + 4 | 0] = 0;
    i50 = 0;
    i51 = 0;
   }
   HEAP32[i14 >> 2] = i50;
   i2 = i14 + 4 | 0;
   i11 = HEAP32[i5 + 4 >> 2] | 0;
   i34 = i11 >>> 27 << 24 & 251658240 | (((i11 & 134217726 | 0) == 0 | (i11 & 2013265920 | 0) == 0 ? 0 : i11 & 16777214) | i51) | 1073741824;
   HEAP32[i2 >> 2] = i34;
   if ((i11 & 1 | 0) == 0) {
    i52 = 0;
   } else {
    i52 = ((HEAP32[i5 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i2 >> 2] = i52 | i34;
   i34 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i14) | 0) < 0;
   i2 = i34 ? i14 : i1;
   if ((HEAP32[i2 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i34 = i2;
    i2 = HEAP32[i34 >> 2] | 0;
    i5 = HEAP32[i34 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = i2;
    HEAP32[i8 + 4 >> 2] = i5;
    if (!((i2 & 0 | 0) == 0 & (i5 & 1879048192 | 0) == 0)) {
     i45 = i41;
     i46 = 52;
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 do {
  if ((i46 | 0) == 52) {
   if ((i45 | 0) == 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((HEAP8[i24 + 176 | 0] & 2) != 0) {
   i45 = __ZNK7WebCore11RenderTable14slowColElementEjPbS1_(i25, HEAP32[i10 >> 2] & 536870911, 0, 0) | 0;
   if ((i45 | 0) == 0) {
    break;
   }
   i46 = i45 + 36 | 0;
   i14 = __ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i46 >> 2] | 0) | 0;
   if (i26) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i17, HEAP32[i46 >> 2] | 0, i32);
    i53 = HEAP32[i17 >> 2] | 0;
    i54 = HEAP8[i17 + 4 | 0] & 1;
   } else {
    HEAP32[i17 >> 2] = 0;
    HEAP8[i17 + 4 | 0] = 0;
    i53 = 0;
    i54 = 0;
   }
   HEAP32[i16 >> 2] = i53;
   i46 = i16 + 4 | 0;
   i52 = HEAP32[i14 + 4 >> 2] | 0;
   i51 = i52 >>> 27 << 24 | (((i52 & 134217726 | 0) == 0 | (i52 & 2013265920 | 0) == 0 ? 0 : i52 & 16777214) | i54) | 805306368;
   HEAP32[i46 >> 2] = i51;
   if ((i52 & 1 | 0) == 0) {
    i55 = 0;
   } else {
    i55 = ((HEAP32[i14 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i46 >> 2] = i55 | i51;
   i51 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i16) | 0) < 0;
   i46 = i51 ? i16 : i1;
   if ((HEAP32[i46 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i51 = i46;
   i46 = HEAP32[i51 >> 2] | 0;
   i14 = HEAP32[i51 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = i46;
   HEAP32[i8 + 4 >> 2] = i14;
   if ((i46 & 0 | 0) == 0 & (i14 & 1879048192 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i14 = __ZNK7WebCore14RenderTableCol20enclosingColumnGroupEv(i45) | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i45 = i14 + 36 | 0;
   i14 = __ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i45 >> 2] | 0) | 0;
   if (i26) {
    __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i19, HEAP32[i45 >> 2] | 0, i32);
    i56 = HEAP32[i19 >> 2] | 0;
    i57 = HEAP8[i19 + 4 | 0] & 1;
   } else {
    HEAP32[i19 >> 2] = 0;
    HEAP8[i19 + 4 | 0] = 0;
    i56 = 0;
    i57 = 0;
   }
   HEAP32[i18 >> 2] = i56;
   i45 = i18 + 4 | 0;
   i46 = HEAP32[i14 + 4 >> 2] | 0;
   i51 = i46 >>> 27 << 24 & 251658240 | (((i46 & 134217726 | 0) == 0 | (i46 & 2013265920 | 0) == 0 ? 0 : i46 & 16777214) | i57) | 536870912;
   HEAP32[i45 >> 2] = i51;
   if ((i46 & 1 | 0) == 0) {
    i58 = 0;
   } else {
    i58 = ((HEAP32[i14 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
   }
   HEAP32[i45 >> 2] = i58 | i51;
   i51 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i18) | 0) < 0;
   i45 = i51 ? i18 : i1;
   if ((HEAP32[i45 + 4 >> 2] & 251658240 | 0) == 16777216) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 0;
    STACKTOP = i4;
    return;
   } else {
    i51 = i45;
    i45 = HEAP32[i51 >> 2] | 0;
    i14 = HEAP32[i51 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = i45;
    HEAP32[i8 + 4 >> 2] = i14;
    if (!((i45 & 0 | 0) == 0 & (i14 & 1879048192 | 0) == 0)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i18 = i24 + 36 | 0;
 i24 = __ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i18 >> 2] | 0) | 0;
 if (i26) {
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i21, HEAP32[i18 >> 2] | 0, i32);
  i59 = HEAP32[i21 >> 2] | 0;
  i60 = HEAP8[i21 + 4 | 0] & 1;
 } else {
  HEAP32[i21 >> 2] = 0;
  HEAP8[i21 + 4 | 0] = 0;
  i59 = 0;
  i60 = 0;
 }
 HEAP32[i20 >> 2] = i59;
 i59 = i20 + 4 | 0;
 i21 = HEAP32[i24 + 4 >> 2] | 0;
 i32 = i21 >>> 27 << 24 | (((i21 & 134217726 | 0) == 0 | (i21 & 2013265920 | 0) == 0 ? 0 : i21 & 16777214) | i60) | 268435456;
 HEAP32[i59 >> 2] = i32;
 if ((i21 & 1 | 0) == 0) {
  i61 = 0;
 } else {
  i61 = ((HEAP32[i24 >> 2] | 0) >>> 0 < 16777216 >>> 0) << 31;
 }
 HEAP32[i59 >> 2] = i61 | i32;
 i32 = (__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i20) | 0) < 0;
 i61 = i32 ? i20 : i1;
 if ((HEAP32[i61 + 4 >> 2] & 251658240 | 0) == 16777216) {
  i62 = 0;
  i63 = 0;
  i64 = 0;
  i65 = 0;
  i66 = i63 | i65;
  i67 = i62 | i64;
  i68 = i8 | 0;
  HEAP32[i68 >> 2] = i66;
  i69 = i8 + 4 | 0;
  HEAP32[i69 >> 2] = i67;
  STACKTOP = i4;
  return;
 }
 i1 = i61;
 i61 = HEAP32[i1 >> 2] | 0;
 i20 = HEAP32[i1 + 4 >> 2] | 0;
 i62 = i20 & 0;
 i63 = i61 & -1;
 i64 = i20 & -1;
 i65 = i61 & 0;
 i66 = i63 | i65;
 i67 = i62 | i64;
 i68 = i8 | 0;
 HEAP32[i68 >> 2] = i66;
 i69 = i8 + 4 | 0;
 HEAP32[i69 >> 2] = i67;
 STACKTOP = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 276;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 274;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 282;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_iiiiii + 6;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 284;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viiiii + 14;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_viiii + 22;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 278;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 280;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 60;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_viiiii + 12;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_viii + 50;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_viii + 58;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 96;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_viii + 62;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_viiii + 20;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_iiiifi + 4;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_iiiifi + 2;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_viii + 56;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_viii + 52;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_viiiii + 18;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_viiii + 24;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_viiiii + 16;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_viii + 54;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_iiiiiii + 6;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_iiiiiii + 4;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1180 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 1184 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 1188 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1192 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 1196 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1208 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 1212 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1216 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 1220 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1224 >> 2] = F_BASE_iiiii + 4;
}
function __ZN7WebCore15RenderTableCell26paintBackgroundsBehindCellERNS_9PaintInfoERKNS_11LayoutPointEPNS_13RenderElementE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, d43 = +0, d44 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = HEAP32[i2 + 28 >> 2] | 0;
 if ((i13 | 0) != (i1 | 0) & (i13 | 0) != 0 | (i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i13 = i1 | 0;
 i14 = i1 + 36 | 0;
 i15 = HEAP32[(HEAP32[i14 >> 2] | 0) + 40 >> 2] | 0;
 if ((i15 & 6144 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i16 = i1 + 8 | 0;
 i17 = (HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0;
 do {
  if ((HEAP32[(HEAP32[i17 >> 2] | 0) + 44 >> 2] & 8 | 0) == 0) {
   if ((i15 & 1 | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 28 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i15 = i3;
 i3 = HEAP32[i15 >> 2] | 0;
 i18 = HEAP32[i15 + 4 >> 2] | 0;
 i15 = (i13 | 0) == (i4 | 0);
 if (i15) {
  i19 = i3;
  i20 = i18;
 } else {
  i13 = i1 + 44 | 0;
  i19 = (HEAP32[i13 >> 2] | 0) + i3 | 0;
  i20 = (HEAP32[i13 + 4 >> 2] | 0) + i18 | 0;
 }
 i18 = i4 + 36 | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i6, HEAP32[i18 >> 2] | 0, 23);
 i13 = (HEAP32[(HEAP32[i18 >> 2] | 0) + 12 >> 2] | 0) + 4 | 0;
 i18 = i13;
 while (1) {
  if ((HEAP32[i18 + 4 >> 2] | 0) != 0) {
   break;
  }
  i3 = HEAP32[i18 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i21 = 11;
   break;
  } else {
   i18 = i3;
  }
 }
 do {
  if ((i21 | 0) == 11) {
   if ((HEAP8[i6 + 4 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if ((HEAP32[i4 + 20 >> 2] & 32768 | 0) == 0) {
   i21 = 15;
  } else {
   if (!i15) {
    if ((HEAP32[i16 >> 2] | 0) != (i4 | 0)) {
     i21 = 15;
     break;
    }
   }
   i18 = HEAP32[(HEAP32[i17 >> 2] | 0) + 44 >> 2] & 8;
   i3 = i2 | 0;
   i22 = HEAP32[i3 >> 2] | 0;
   i23 = i18 >>> 3 & 255;
   if ((i18 | 0) == 0) {
    i24 = i23;
    i25 = i22;
    break;
   }
   __ZN7WebCore15GraphicsContext4saveEv(i22);
   i18 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0;
   do {
    if ((i18 & 8 | 0) == 0) {
     i26 = HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] | 0;
     i27 = HEAP32[i26 + 104 >> 2] | 0;
     if ((HEAP32[(HEAP32[i26 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
      if ((i27 & 1879048192) >>> 0 < 268435456 >>> 0) {
       i28 = 0;
       i29 = i18;
       break;
      }
     }
     i28 = i27 >>> 1 & 67108863;
     i29 = i18;
    } else {
     i27 = __ZNK7WebCore15RenderTableCell14borderHalfLeftEb(i1, 0) | 0;
     i28 = i27;
     i29 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0;
    }
   } while (0);
   i18 = i28 + i19 | 0;
   do {
    if ((i29 & 8 | 0) == 0) {
     i27 = HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] | 0;
     i26 = HEAP32[i27 + 120 >> 2] | 0;
     if ((HEAP32[(HEAP32[i27 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
      if ((i26 & 1879048192) >>> 0 < 268435456 >>> 0) {
       i30 = 0;
       i31 = i29;
       break;
      }
     }
     i30 = i26 >>> 1 & 67108863;
     i31 = i29;
    } else {
     i26 = __ZNK7WebCore15RenderTableCell13borderHalfTopEb(i1, 0) | 0;
     i30 = i26;
     i31 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0;
    }
   } while (0);
   i26 = i30 + i20 | 0;
   i27 = HEAP32[i1 + 52 >> 2] | 0;
   do {
    if ((i31 & 8 | 0) == 0) {
     i32 = HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] | 0;
     i33 = HEAP32[i32 + 104 >> 2] | 0;
     if ((HEAP32[(HEAP32[i32 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
      if ((i33 & 1879048192) >>> 0 < 268435456 >>> 0) {
       i34 = 0;
       i35 = i31;
       break;
      }
     }
     i34 = i33 >>> 1 & 67108863;
     i35 = i31;
    } else {
     i33 = __ZNK7WebCore15RenderTableCell14borderHalfLeftEb(i1, 0) | 0;
     i34 = i33;
     i35 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0;
    }
   } while (0);
   i33 = i27 - i34 | 0;
   do {
    if ((i35 & 8 | 0) == 0) {
     i32 = HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] | 0;
     i36 = HEAP32[i32 + 112 >> 2] | 0;
     if ((HEAP32[(HEAP32[i32 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
      if ((i36 & 1879048192) >>> 0 < 268435456 >>> 0) {
       i37 = 0;
       i38 = i35;
       break;
      }
     }
     i37 = i36 >>> 1 & 67108863;
     i38 = i35;
    } else {
     i36 = __ZNK7WebCore15RenderTableCell15borderHalfRightEb(i1, 0) | 0;
     i37 = i36;
     i38 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0;
    }
   } while (0);
   i27 = i33 - i37 | 0;
   i36 = HEAP32[i1 + 56 >> 2] | 0;
   do {
    if ((i38 & 8 | 0) == 0) {
     i32 = HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] | 0;
     i39 = HEAP32[i32 + 120 >> 2] | 0;
     if ((HEAP32[(HEAP32[i32 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
      if ((i39 & 1879048192) >>> 0 < 268435456 >>> 0) {
       i40 = 0;
       i41 = i38;
       break;
      }
     }
     i40 = i39 >>> 1 & 67108863;
     i41 = i38;
    } else {
     i39 = __ZNK7WebCore15RenderTableCell13borderHalfTopEb(i1, 0) | 0;
     i40 = i39;
     i41 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0;
    }
   } while (0);
   i33 = i36 - i40 | 0;
   do {
    if ((i41 & 8 | 0) == 0) {
     i39 = HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] | 0;
     i32 = HEAP32[i39 + 128 >> 2] | 0;
     if ((HEAP32[(HEAP32[i39 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
      if ((i32 & 1879048192) >>> 0 < 268435456 >>> 0) {
       i42 = 0;
       break;
      }
     }
     i42 = i32 >>> 1 & 67108863;
    } else {
     i42 = __ZNK7WebCore15RenderTableCell16borderHalfBottomEb(i1, 0) | 0;
    }
   } while (0);
   i36 = HEAP32[i3 >> 2] | 0;
   d43 = +(+(i18 | 0));
   d44 = +(+(i26 | 0));
   HEAPF32[i8 >> 2] = d43;
   HEAPF32[i8 + 4 >> 2] = d44;
   i32 = i7 + 8 | 0;
   d44 = +(+(i27 | 0));
   d43 = +(+(i33 - i42 | 0));
   HEAPF32[i32 >> 2] = d44;
   HEAPF32[i32 + 4 >> 2] = d43;
   __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i36, i9);
   i24 = i23;
   i25 = i22;
  }
 } while (0);
 if ((i21 | 0) == 15) {
  i24 = 0;
  i25 = HEAP32[i2 >> 2] | 0;
 }
 i21 = HEAP32[i1 + 52 >> 2] | 0;
 i9 = HEAP32[i1 + 56 >> 2] | 0;
 HEAP32[i11 >> 2] = i19;
 HEAP32[i11 + 4 >> 2] = i20;
 i20 = i10 + 8 | 0;
 HEAP32[i20 >> 2] = i21;
 HEAP32[i20 + 4 >> 2] = i9;
 __ZN7WebCore9RenderBox15paintFillLayersERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceENS_17CompositeOperatorEPNS_13RenderElementE(i1 | 0, i2, i6, i13, i12, 0, 2, i4);
 if (i24 << 24 >> 24 == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore15GraphicsContext7restoreEv(i25);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore15RenderTableCell29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i2 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 44 >> 2] & 8 | 0) != 0) {
   if ((HEAP8[i8 + 176 | 0] & 4) != 0) {
    break;
   }
   i9 = (HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0;
   i10 = HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 12 >> 2] | 0;
   i11 = HEAP32[i10 + 64 >> 2] | 0;
   if ((i11 & 2013265920 | 0) == 0) {
    i12 = 0;
    i13 = 0;
   } else {
    i12 = HEAP32[i10 + 68 >> 2] | 0;
    i13 = i11 >>> 1 & 65535;
   }
   i11 = i12 + i13 | 0;
   i10 = (i11 | 0) > 0 ? i11 & 65535 : 0;
   i11 = __ZNK7WebCore15RenderTableCell14borderHalfLeftEb(i2, 1) | 0;
   i14 = (i11 | 0) < (i10 | 0) ? i10 : i11;
   i11 = __ZNK7WebCore15RenderTableCell15borderHalfRightEb(i2, 1) | 0;
   i15 = (i11 | 0) < (i10 | 0) ? i10 : i11;
   i11 = __ZNK7WebCore15RenderTableCell13borderHalfTopEb(i2, 1) | 0;
   i16 = (i11 | 0) < (i10 | 0) ? i10 : i11;
   i11 = __ZNK7WebCore15RenderTableCell16borderHalfBottomEb(i2, 1) | 0;
   i17 = (i11 | 0) < (i10 | 0) ? i10 : i11;
   i11 = (i14 | 0) == 0;
   i10 = i9 ^ 1;
   if (i11 | i10) {
    if ((i15 | 0) == 0 | i9) {
     i18 = i16;
     i19 = i17;
    } else {
     i20 = 8;
    }
   } else {
    i20 = 8;
   }
   do {
    if ((i20 | 0) == 8) {
     i21 = __ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0, i2) | 0;
     if ((i21 | 0) == 0) {
      i18 = i16;
      i19 = i17;
      break;
     }
     i22 = __ZNK7WebCore15RenderTableCell13borderHalfTopEb(i21, 1) | 0;
     i23 = __ZNK7WebCore15RenderTableCell16borderHalfBottomEb(i21, 1) | 0;
     i18 = (i16 | 0) < (i22 | 0) ? i22 : i16;
     i19 = (i17 | 0) < (i23 | 0) ? i23 : i17;
    }
   } while (0);
   if (i11 | i9) {
    if ((i15 | 0) == 0 | i10) {
     i24 = i18;
     i25 = i19;
    } else {
     i20 = 12;
    }
   } else {
    i20 = 12;
   }
   do {
    if ((i20 | 0) == 12) {
     i17 = __ZNK7WebCore11RenderTable9cellAfterEPKNS_15RenderTableCellE(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0, i2) | 0;
     if ((i17 | 0) == 0) {
      i24 = i18;
      i25 = i19;
      break;
     }
     i16 = __ZNK7WebCore15RenderTableCell13borderHalfTopEb(i17, 1) | 0;
     i23 = __ZNK7WebCore15RenderTableCell16borderHalfBottomEb(i17, 1) | 0;
     i24 = (i18 | 0) < (i16 | 0) ? i16 : i18;
     i25 = (i19 | 0) < (i23 | 0) ? i23 : i19;
    }
   } while (0);
   do {
    if ((i24 | 0) == 0) {
     i26 = i14;
     i27 = i15;
    } else {
     i10 = __ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0, i2) | 0;
     if ((i10 | 0) == 0) {
      i26 = i14;
      i27 = i15;
      break;
     }
     i9 = __ZNK7WebCore15RenderTableCell14borderHalfLeftEb(i10, 1) | 0;
     i11 = __ZNK7WebCore15RenderTableCell15borderHalfRightEb(i10, 1) | 0;
     i26 = (i14 | 0) < (i9 | 0) ? i9 : i14;
     i27 = (i15 | 0) < (i11 | 0) ? i11 : i15;
    }
   } while (0);
   do {
    if ((i25 | 0) == 0) {
     i28 = i26;
     i29 = i27;
    } else {
     i15 = __ZNK7WebCore11RenderTable9cellBelowEPKNS_15RenderTableCellE(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0, i2) | 0;
     if ((i15 | 0) == 0) {
      i28 = i26;
      i29 = i27;
      break;
     }
     i14 = __ZNK7WebCore15RenderTableCell14borderHalfLeftEb(i15, 1) | 0;
     i11 = __ZNK7WebCore15RenderTableCell15borderHalfRightEb(i15, 1) | 0;
     i28 = (i26 | 0) < (i14 | 0) ? i14 : i26;
     i29 = (i27 | 0) < (i11 | 0) ? i11 : i27;
    }
   } while (0);
   i11 = i2 | 0;
   i14 = HEAP32[i2 + 88 >> 2] | 0;
   i15 = (i14 | 0) == 0;
   if (i15) {
    i30 = 0;
    i31 = (i28 | 0) < 0 ? 0 : i28;
   } else {
    i9 = -(HEAP32[i14 + 20 >> 2] | 0) | 0;
    i30 = HEAP32[i14 + 24 >> 2] | 0;
    i31 = (i28 | 0) < (i9 | 0) ? i9 : i28;
   }
   i9 = -i30 | 0;
   i10 = (i24 | 0) < (i9 | 0) ? i9 : i24;
   i9 = (HEAP32[i2 + 52 >> 2] | 0) + i29 | 0;
   if (i15) {
    i32 = 0;
    i33 = i2 + 52 | 0;
   } else {
    i32 = HEAP32[i14 + 20 >> 2] | 0;
    i33 = i14 + 28 | 0;
   }
   i23 = (HEAP32[i33 >> 2] | 0) + i32 | 0;
   i16 = (HEAP32[i2 + 56 >> 2] | 0) + i25 | 0;
   if (i15) {
    i34 = 0;
    i35 = i2 + 52 | 0;
   } else {
    i34 = HEAP32[i14 + 24 >> 2] | 0;
    i35 = i14 + 28 | 0;
   }
   i14 = (HEAP32[i35 + 4 >> 2] | 0) + i34 | 0;
   i15 = i5 | 0;
   HEAP32[i15 >> 2] = -i31;
   i17 = i5 + 4 | 0;
   HEAP32[i17 >> 2] = -i10;
   HEAP32[i5 + 8 >> 2] = ((i9 | 0) < (i23 | 0) ? i23 : i9) + i31;
   HEAP32[i5 + 12 >> 2] = ((i16 | 0) < (i14 | 0) ? i14 : i16) + i10;
   i16 = (HEAP32[i2 + 4 >> 2] | 0) + 20 | 0;
   i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i36 = 0;
    i37 = 0;
   } else {
    i9 = i14 + 52 | 0;
    i36 = HEAP32[i9 >> 2] | 0;
    i37 = HEAP32[i9 + 4 >> 2] | 0;
   }
   i9 = i36 - i31 | 0;
   HEAP32[i15 >> 2] = i9;
   i14 = i37 - i10 | 0;
   HEAP32[i17 >> 2] = i14;
   if ((i2 | 0) != (i3 | 0)) {
    i10 = HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
    if ((HEAP32[i10 + 196 >> 2] | 0) == 0) {
     if (!((HEAP32[i10 + 192 >> 2] | 0) != 0 & (i3 | 0) == 0)) {
      i20 = 34;
     }
    } else {
     i20 = 34;
    }
    do {
     if ((i20 | 0) == 34) {
      i10 = HEAP32[i6 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      i16 = i10 + 44 | 0;
      i10 = HEAP32[i16 + 4 >> 2] | 0;
      HEAP32[i15 >> 2] = i9 - (HEAP32[i16 >> 2] | 0);
      HEAP32[i17 >> 2] = i14 - i10;
     }
    } while (0);
    __ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i11, i3, i5, 0);
   }
   i14 = i1;
   i17 = i5;
   HEAP32[i14 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i14 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
   HEAP32[i14 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   HEAP32[i14 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1, i2 | 0, i3);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15RenderTableCell23logicalWidthFromColumnsEPNS_14RenderTableColENS_6LengthE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, d41 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i8;
 L1 : do {
  if ((HEAP32[i2 + 116 >> 2] & 1073741824 | 0) == 0) {
   i10 = i9 + 5 | 0;
   i11 = i9 + 6 | 0;
   i12 = i8;
   i13 = i8;
   i14 = i1;
   i15 = 5;
  } else {
   i16 = __ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i2) | 0;
   if ((i16 | 0) == 0) {
    i17 = 0;
    break;
   }
   i18 = i9 + 5 | 0;
   i19 = i9 + 6 | 0;
   i20 = i8;
   i21 = i8;
   i22 = i4;
   i23 = i1;
   i24 = i4 + 5 | 0;
   if (i16 >>> 0 > 1 >>> 0) {
    i25 = i3;
    i26 = 0;
    i27 = 1;
   } else {
    i10 = i18;
    i11 = i19;
    i12 = i20;
    i13 = i21;
    i14 = i23;
    i15 = 5;
    break;
   }
   while (1) {
    i28 = HEAP32[i25 + 36 >> 2] | 0;
    i29 = (HEAP32[i28 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i29 | 0) == 3 | (i29 | 0) == 0) {
     i30 = (HEAP32[i28 + 4 >> 2] | 0) + 4 | 0;
    } else {
     i30 = (HEAP32[i28 + 4 >> 2] | 0) + 12 | 0;
    }
    i28 = i30;
    i29 = HEAP32[i28 >> 2] | 0;
    i31 = HEAP32[i28 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = i29;
    HEAP32[i8 + 4 >> 2] = i31;
    if ((i29 & 0 | 0) == 0 & (i31 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
     i32 = HEAP8[i18] | 0;
    } else {
     i32 = (i31 >>> 8 | 0 << 24) & 255;
    }
    if (i32 << 24 >> 24 == 3) {
     if ((HEAP8[i19] & 1) == 0) {
      d33 = +(HEAP32[i20 >> 2] | 0);
     } else {
      d33 = +HEAPF32[i21 >> 2];
     }
     i31 = __ZNK7WebCore14RenderTableCol10nextColumnEv(i25) | 0;
     i34 = (i31 | 0) == 0 ? 2 : 0;
     i35 = ~~(+(i26 | 0) + d33);
     i36 = i31;
     i37 = HEAP8[i18] | 0;
    } else {
     i31 = HEAP32[i22 + 4 >> 2] | 0;
     HEAP32[i23 >> 2] = HEAP32[i22 >> 2];
     HEAP32[i23 + 4 >> 2] = i31;
     HEAP8[i24] = 0;
     i34 = 1;
     i35 = i26;
     i36 = i25;
     i37 = i32;
    }
    if (i37 << 24 >> 24 == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
    }
    if ((i34 | 0) == 2) {
     i38 = i35;
     i15 = 35;
     break L1;
    } else if ((i34 | 0) == 1) {
     break;
    }
    i31 = i27 + 1 | 0;
    if (i31 >>> 0 > i16 >>> 0) {
     i38 = i35;
     i15 = 35;
     break L1;
    } else {
     i25 = i36;
     i26 = i35;
     i27 = i31;
    }
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 L27 : do {
  if ((i15 | 0) == 5) {
   i27 = i3;
   i35 = 0;
   i26 = 1;
   while (1) {
    i36 = HEAP32[i27 + 36 >> 2] | 0;
    i25 = (HEAP32[i36 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i25 | 0) == 3 | (i25 | 0) == 0) {
     i39 = (HEAP32[i36 + 4 >> 2] | 0) + 4 | 0;
    } else {
     i39 = (HEAP32[i36 + 4 >> 2] | 0) + 12 | 0;
    }
    i36 = i39;
    i25 = HEAP32[i36 >> 2] | 0;
    i34 = HEAP32[i36 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = i25;
    HEAP32[i8 + 4 >> 2] = i34;
    if ((i25 & 0 | 0) == 0 & (i34 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
     i40 = HEAP8[i10] | 0;
    } else {
     i40 = (i34 >>> 8 | 0 << 24) & 255;
    }
    if (i40 << 24 >> 24 != 3) {
     break;
    }
    if ((HEAP8[i11] & 1) == 0) {
     d41 = +(HEAP32[i12 >> 2] | 0);
    } else {
     d41 = +HEAPF32[i13 >> 2];
    }
    i34 = ~~(+(i35 | 0) + d41);
    i25 = __ZNK7WebCore14RenderTableCol10nextColumnEv(i27) | 0;
    if ((HEAP8[i10] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
    }
    if ((i25 | 0) == 0) {
     i38 = i34;
     i15 = 35;
     break L27;
    }
    i36 = i26 + 1 | 0;
    if (i36 >>> 0 > 1 >>> 0) {
     i38 = i34;
     i15 = 35;
     break L27;
    } else {
     i27 = i25;
     i35 = i34;
     i26 = i36;
    }
   }
   i26 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i14 + 4 >> 2] = i26;
   HEAP8[i10] = 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if ((i15 | 0) == 35) {
   if ((i38 | 0) <= 0) {
    i17 = i38;
    break;
   }
   i10 = i2 | 0;
   i14 = i2;
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 760 >> 2] & 511](i10) | 0;
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 764 >> 2] & 511](i10) | 0;
   i14 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 728 >> 2] & 127](i6, i10);
   i13 = HEAP32[i6 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 732 >> 2] & 127](i7, i10);
   i10 = i38 - i8 - i9 - i13 - (HEAP32[i7 >> 2] | 0) | 0;
   HEAP32[i1 >> 2] = (i10 | 0) > 0 ? i10 : 0;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 3;
   HEAP8[i1 + 6 | 0] = 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = i17;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP8[i1 + 5 | 0] = 3;
 HEAP8[i1 + 6 | 0] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderTableCell6layoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 __ZN7WebCore11RenderBlock17updateFirstLetterEv(i1 | 0);
 i11 = i1 | 0;
 i12 = __ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv(i11) | 0;
 if ((i12 | 0) == -1) {
  i13 = i1 | 0;
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 752 >> 2] & 511](i13) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 720 >> 2] & 127](i7, i13);
  i13 = (HEAP32[i7 >> 2] | 0) + i14 | 0;
  __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i8, i1 | 0);
  i15 = i13 + (HEAP32[i8 >> 2] | 0) | 0;
 } else {
  i15 = i12;
 }
 i12 = i1 + 116 | 0;
 i8 = (HEAP32[i12 >> 2] & 536870912 | 0) != 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE(i11, i8, i9);
 switch ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 16 & 15 | 0) {
 case 5:
 case 4:
 case 3:
 case 2:
 case 0:
 case 9:
  {
   break;
  }
 default:
  {
   i16 = HEAP32[i12 >> 2] | 0;
   i17 = i16 & -536870913;
   HEAP32[i12 >> 2] = i17;
   STACKTOP = i2;
   return;
  }
 }
 i9 = i1 + 8 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i13 = HEAP32[i8 + 8 >> 2] | 0;
 i14 = HEAP32[i8 + 92 >> 2] & 2147483647;
 if ((HEAP32[i13 + 100 >> 2] | 0) >>> 0 <= i14 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if ((HEAP32[(HEAP32[i13 + 92 >> 2] | 0) + (i14 * 28 & -1) + 16 >> 2] | 0) == 0) {
  i16 = HEAP32[i12 >> 2] | 0;
  i17 = i16 & -536870913;
  HEAP32[i12 >> 2] = i17;
  STACKTOP = i2;
  return;
 }
 i14 = __ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv(i11) | 0;
 if ((i14 | 0) == -1) {
  i13 = i1 | 0;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 752 >> 2] & 511](i13) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 720 >> 2] & 127](i3, i13);
  i13 = (HEAP32[i3 >> 2] | 0) + i8 | 0;
  __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i4, i1 | 0);
  i18 = i13 + (HEAP32[i4 >> 2] | 0) | 0;
 } else {
  i18 = i14;
 }
 i14 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i14 + 8 >> 2] | 0;
 i4 = HEAP32[i14 + 92 >> 2] & 2147483647;
 if ((HEAP32[i9 + 100 >> 2] | 0) >>> 0 <= i4 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if ((i18 | 0) <= (HEAP32[(HEAP32[i9 + 92 >> 2] | 0) + (i4 * 28 & -1) + 16 >> 2] | 0)) {
  i16 = HEAP32[i12 >> 2] | 0;
  i17 = i16 & -536870913;
  HEAP32[i12 >> 2] = i17;
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 120 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 i18 = __ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv(i11) | 0;
 if ((i18 | 0) == -1) {
  i14 = i1 | 0;
  i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 752 >> 2] & 511](i14) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 720 >> 2] & 127](i5, i14);
  i14 = (HEAP32[i5 >> 2] | 0) + i13 | 0;
  __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i6, i1 | 0);
  i19 = i14 + (HEAP32[i6 >> 2] | 0) | 0;
 } else {
  i19 = i18;
 }
 i18 = i19 - i15 | 0;
 i15 = i9 - ((i18 | 0) > 0 ? i18 : 0) | 0;
 HEAP32[i4 >> 2] = (i15 | 0) > 0 ? i15 : 0;
 i15 = i1 | 0;
 i4 = i1 + 20 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 & 1 | 0) == 0) {
   HEAP32[i4 >> 2] = i1 | 1;
   if ((i1 & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i15);
  }
 } while (0);
 i15 = (HEAP32[i12 >> 2] & 536870912 | 0) != 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE(i11, i15, i10);
 i16 = HEAP32[i12 >> 2] | 0;
 i17 = i16 & -536870913;
 HEAP32[i12 >> 2] = i17;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15RenderTableCell29alignTopBottomBorderPaintRectERiS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 + 36 >> 2] | 0;
 i7 = i6 + 44 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i8 | 0) == 3 | (i8 | 0) == 0) {
   i9 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i8 | 0) == 3 | (i8 | 0) == 1) {
    i10 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i9, i1, 1) | 0;
    break;
   } else {
    i10 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i9, i1, 0) | 0;
    break;
   }
  } else {
   i9 = HEAP32[i5 + 8 >> 2] | 0;
   if ((HEAP32[i6 + 40 >> 2] & 1073741824 | 0) == 0) {
    i10 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i9, i1, 3) | 0;
    break;
   } else {
    i10 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i9, i1, 2) | 0;
    break;
   }
  }
 } while (0);
 i5 = i10;
 i10 = HEAP32[i5 + 4 >> 2] | 0;
 i8 = i10 & 234881024;
 i9 = 16777216;
 if (i8 >>> 0 > i9 >>> 0 | i8 >>> 0 == i9 >>> 0 & (HEAP32[i5 >> 2] & 0) >>> 0 > 0 >>> 0) {
  i11 = (i10 >>> 1 | 0 << 31) & 8388607;
 } else {
  i11 = 0;
 }
 i10 = (HEAP32[i7 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i10 | 0) == 3 | (i10 | 0) == 0) {
   i7 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
   if ((i10 | 0) == 3 | (i10 | 0) == 1) {
    i12 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i7, i1, 0) | 0;
    break;
   } else {
    i12 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i7, i1, 1) | 0;
    break;
   }
  } else {
   i7 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP32[i6 + 40 >> 2] & 1073741824 | 0) == 0) {
    i12 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i7, i1, 2) | 0;
    break;
   } else {
    i12 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i7, i1, 3) | 0;
    break;
   }
  }
 } while (0);
 i6 = i12;
 i12 = HEAP32[i6 + 4 >> 2] | 0;
 i4 = i12 & 234881024;
 i10 = 16777216;
 if (i4 >>> 0 > i10 >>> 0 | i4 >>> 0 == i10 >>> 0 & (HEAP32[i6 >> 2] & 0) >>> 0 > 0 >>> 0) {
  i13 = (i12 >>> 1 | 0 << 31) & 8388607;
 } else {
  i13 = 0;
 }
 i12 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = (i12 | 0) < (i11 | 0) ? i11 : i12;
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = (i12 | 0) < (i13 | 0) ? i13 : i12;
 if ((HEAP32[i1 + 116 >> 2] | 0) >= 0) {
  i14 = 1;
  return i14 | 0;
 }
 i14 = (__ZNK7WebCore15RenderTableCell19parseRowSpanFromDOMEv(i1) | 0) >>> 0 < 2 >>> 0;
 return i14 | 0;
}
function __ZN7WebCore15RenderTableCell29alignLeftRightBorderPaintRectERiS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 + 36 >> 2] | 0;
 i7 = i6 + 44 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i8 | 0) == 3 | (i8 | 0) == 0) {
   i9 = HEAP32[i5 + 8 >> 2] | 0;
   if ((HEAP32[i6 + 40 >> 2] & 1073741824 | 0) == 0) {
    i10 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i9, i1, 3) | 0;
    break;
   } else {
    i10 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i9, i1, 2) | 0;
    break;
   }
  } else {
   i9 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i8 | 0) == 1) {
    i10 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i9, i1, 1) | 0;
    break;
   } else {
    i10 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i9, i1, 0) | 0;
    break;
   }
  }
 } while (0);
 i8 = i10;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 i5 = i10 & 234881024;
 i9 = 16777216;
 if (i5 >>> 0 > i9 >>> 0 | i5 >>> 0 == i9 >>> 0 & (HEAP32[i8 >> 2] & 0) >>> 0 > 0 >>> 0) {
  i11 = (i10 >>> 1 | 0 << 31) & 8388607;
 } else {
  i11 = 0;
 }
 i10 = (HEAP32[i7 >> 2] | 0) >>> 13 & 3;
 do {
  if ((i10 | 0) == 3 | (i10 | 0) == 0) {
   i7 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP32[i6 + 40 >> 2] & 1073741824 | 0) == 0) {
    i12 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i7, i1, 2) | 0;
    break;
   } else {
    i12 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i7, i1, 3) | 0;
    break;
   }
  } else {
   i7 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
   if ((i10 | 0) == 1) {
    i12 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i7, i1, 0) | 0;
    break;
   } else {
    i12 = __ZN7WebCore18RenderTableSection21cachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideE(i7, i1, 1) | 0;
    break;
   }
  }
 } while (0);
 i10 = i12;
 i12 = HEAP32[i10 + 4 >> 2] | 0;
 i4 = i12 & 234881024;
 i6 = 16777216;
 if (i4 >>> 0 > i6 >>> 0 | i4 >>> 0 == i6 >>> 0 & (HEAP32[i10 >> 2] & 0) >>> 0 > 0 >>> 0) {
  i13 = (i12 >>> 1 | 0 << 31) & 8388607;
 } else {
  i13 = 0;
 }
 i12 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = (i12 | 0) < (i11 | 0) ? i11 : i12;
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = (i12 | 0) < (i13 | 0) ? i13 : i12;
 if ((HEAP32[i1 + 116 >> 2] & 1073741824 | 0) == 0) {
  i14 = 1;
  return i14 | 0;
 }
 i14 = (__ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i1) | 0) >>> 0 < 2 >>> 0;
 return i14 | 0;
}
function __ZN7WebCore15RenderTableCell19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i8 | 0) == 0 | (i8 | 0) == (i1 | 0))) {
  STACKTOP = i4;
  return;
 }
 i8 = (HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0;
 i9 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 8 | 0) == 0) {
   if ((HEAP32[i9 + 40 >> 2] & 1 | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 28 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i10 = HEAP32[i1 + 52 >> 2] | 0;
 i11 = HEAP32[i1 + 56 >> 2] | 0;
 i12 = i3;
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i6 + 4 >> 2] = i13;
 i13 = i5 + 8 | 0;
 HEAP32[i13 >> 2] = i10;
 HEAP32[i13 + 4 >> 2] = i11;
 i11 = i1 | 0;
 i13 = i1 + 36 | 0;
 __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(i11, i2, i7, i9, 0, 1, 1);
 __ZN7WebCore15RenderTableCell26paintBackgroundsBehindCellERNS_9PaintInfoERKNS_11LayoutPointEPNS_13RenderElementE(i1, i2, i3, i1 | 0);
 __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(i11, i2, i7, HEAP32[i13 >> 2] | 0, 1, 1, 1);
 i1 = HEAP32[i13 >> 2] | 0;
 i13 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = (HEAP32[(HEAP32[i13 + 132 >> 2] | 0) + 8 >> 2] | 0) != 0;
 i9 = HEAP32[i13 + 104 >> 2] | 0;
 i10 = (i9 & 134217726 | 0) == 0;
 if (i10 | i3) {
  if (i10) {
   i14 = 8;
  }
 } else {
  if ((i9 & 2013265920 | 0) == 0) {
   i14 = 8;
  }
 }
 do {
  if ((i14 | 0) == 8) {
   i9 = HEAP32[i13 + 112 >> 2] | 0;
   i10 = (i9 & 134217726 | 0) == 0;
   if (i10 | i3) {
    if (!i10) {
     break;
    }
   } else {
    if ((i9 & 2013265920 | 0) != 0) {
     break;
    }
   }
   i9 = HEAP32[i13 + 120 >> 2] | 0;
   i10 = (i9 & 134217726 | 0) == 0;
   if (i10 | i3) {
    if (!i10) {
     break;
    }
   } else {
    if ((i9 & 2013265920 | 0) != 0) {
     break;
    }
   }
   i9 = HEAP32[i13 + 128 >> 2] | 0;
   i10 = (i9 & 134217726 | 0) == 0;
   if (i10 | i3) {
    if (!i10) {
     break;
    }
    STACKTOP = i4;
    return;
   } else {
    if ((i9 & 2013265920 | 0) != 0) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 8 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore20RenderBoxModelObject11paintBorderERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_24BackgroundBleedAvoidanceEbb(i11, i2, i7, i1, 0, 1, 1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderTableCell14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, i15 = 0;
 __ZN7WebCore15RenderBlockFlow14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1 | 0, i2, i3);
 i2 = i1 + 20 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if (i4 >>> 0 <= 1073741823 >>> 0) {
  HEAP32[i2 >> 2] = i4 & 1073741823 | 1073741824;
 }
 i4 = i1 + 8 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 L4 : do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i5 | 0) == 0 | (i3 | 0) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 4 >> 2] | 0;
   i7 = i6 + 12 | 0;
   i8 = HEAP32[i3 + 4 >> 2] | 0;
   i9 = i8 + 12 | 0;
   i10 = HEAP8[i6 + 17 | 0] | 0;
   do {
    if (i10 << 24 >> 24 == (HEAP8[i8 + 17 | 0] | 0)) {
     if (((HEAP8[i8 + 16 | 0] ^ HEAP8[i6 + 16 | 0]) & 1) != 0) {
      i11 = i2;
      i12 = i5;
      break;
     }
     if (i10 << 24 >> 24 == 15) {
      break L4;
     }
     if ((HEAP8[i6 + 18 | 0] & 1) == 0) {
      d13 = +(HEAP32[i7 >> 2] | 0);
     } else {
      d13 = +HEAPF32[i7 >> 2];
     }
     if ((HEAP8[i8 + 18 | 0] & 1) == 0) {
      d14 = +(HEAP32[i9 >> 2] | 0);
     } else {
      d14 = +HEAPF32[i9 >> 2];
     }
     if (d13 == d14) {
      break L4;
     }
     if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i7, i9) | 0) {
      break L4;
     }
     i15 = HEAP32[i4 >> 2] | 0;
     i11 = i15;
     i12 = HEAP32[i15 + 8 >> 2] | 0;
    } else {
     i11 = i2;
     i12 = i5;
    }
   } while (0);
   __ZN7WebCore18RenderTableSection23rowLogicalHeightChangedEj(i12, HEAP32[i11 + 92 >> 2] & 2147483647);
  }
 } while (0);
 i11 = (i3 | 0) != 0;
 do {
  if (i11) {
   if (((HEAP32[i3 + 48 >> 2] ^ HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2]) & 983040 | 0) == 0) {
    break;
   }
   HEAP32[i1 + 120 >> 2] = 0;
   HEAP32[i1 + 124 >> 2] = 0;
  }
 } while (0);
 i12 = HEAP32[i4 >> 2] | 0;
 if ((i12 | 0) == 0) {
  return;
 }
 i4 = HEAP32[(HEAP32[i12 + 8 >> 2] | 0) + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i12 = HEAP32[i4 + 20 >> 2] | 0;
 if ((i12 & 1 | 0) != 0) {
  return;
 }
 if ((i12 & 4 | 0) != 0 | i11 ^ 1) {
  return;
 }
 if (__ZNK7WebCore10BorderDataeqERKS0_((HEAP32[i3 + 16 >> 2] | 0) + 100 | 0, (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0) + 100 | 0) | 0) {
  return;
 }
 i1 = i4 + 176 | 0;
 HEAP8[i1] = HEAP8[i1] & -2;
 i1 = i4 + 164 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  return;
 }
 i3 = i4 + 168 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i4 + 160 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZNK7WebCore15RenderTableCell19collectBorderValuesERN3WTF6VectorINS_20CollapsedBorderValueELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
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
 __ZNK7WebCore15RenderTableCell27computeCollapsedStartBorderENS_23IncludeBorderColorOrNotE(i9, i1, 1);
 i16 = i1 + 8 | 0;
 i17 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
 i18 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = i18;
 __ZN7WebCore18RenderTableSection24setCachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideENS_20CollapsedBorderValueE(i17, i1, 2, i7);
 __ZN7WebCoreL14addBorderStyleERN3WTF6VectorINS_20CollapsedBorderValueELj0ENS0_15CrashOnOverflowEEES2_(i2, i9);
 __ZNK7WebCore15RenderTableCell25computeCollapsedEndBorderENS_23IncludeBorderColorOrNotE(i11, i1, 1);
 i9 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
 i7 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i6 + 4 >> 2] = i7;
 __ZN7WebCore18RenderTableSection24setCachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideENS_20CollapsedBorderValueE(i9, i1, 3, i6);
 __ZN7WebCoreL14addBorderStyleERN3WTF6VectorINS_20CollapsedBorderValueELj0ENS0_15CrashOnOverflowEEES2_(i2, i11);
 __ZNK7WebCore15RenderTableCell28computeCollapsedBeforeBorderENS_23IncludeBorderColorOrNotE(i13, i1, 1);
 i11 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
 i6 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i5 + 4 >> 2] = i6;
 __ZN7WebCore18RenderTableSection24setCachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideENS_20CollapsedBorderValueE(i11, i1, 0, i5);
 __ZN7WebCoreL14addBorderStyleERN3WTF6VectorINS_20CollapsedBorderValueELj0ENS0_15CrashOnOverflowEEES2_(i2, i13);
 __ZNK7WebCore15RenderTableCell27computeCollapsedAfterBorderENS_23IncludeBorderColorOrNotE(i15, i1, 1);
 i13 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
 i16 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i4 + 4 >> 2] = i16;
 __ZN7WebCore18RenderTableSection24setCachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideENS_20CollapsedBorderValueE(i13, i1, 1, i4);
 __ZN7WebCoreL14addBorderStyleERN3WTF6VectorINS_20CollapsedBorderValueELj0ENS0_15CrashOnOverflowEEES2_(i2, i15);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15RenderTableCell14borderHalfLeftEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 8 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
 i10 = (HEAP32[i9 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 1) {
  __ZNK7WebCore15RenderTableCell27computeCollapsedAfterBorderENS_23IncludeBorderColorOrNotE(i6, i1, 0);
  i11 = HEAP32[i6 + 4 >> 2] | 0;
  if ((i11 & 1879048192 | 0) == 0) {
   i12 = 0;
   STACKTOP = i3;
   return i12 | 0;
  }
  if ((i11 & 234881024) >>> 0 > 16777216 >>> 0) {
   i13 = i11 >>> 1 & 8388607;
  } else {
   i13 = 0;
  }
  i11 = (HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i12 = (((((i11 | 0) == 1 | (i11 | 0) == 3) ^ i2) & 1) + i13 | 0) >>> 1;
  STACKTOP = i3;
  return i12 | 0;
 } else if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  if ((HEAP32[i9 + 40 >> 2] & 1073741824 | 0) == 0) {
   __ZNK7WebCore15RenderTableCell25computeCollapsedEndBorderENS_23IncludeBorderColorOrNotE(i5, i1, 0);
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i9 & 1879048192 | 0) == 0) {
    i12 = 0;
    STACKTOP = i3;
    return i12 | 0;
   }
   if ((i9 & 234881024) >>> 0 > 16777216 >>> 0) {
    i14 = i9 >>> 1 & 8388607;
   } else {
    i14 = 0;
   }
   i12 = ((((HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ i2) & 1 ^ 1) + i14 | 0) >>> 1;
   STACKTOP = i3;
   return i12 | 0;
  } else {
   __ZNK7WebCore15RenderTableCell27computeCollapsedStartBorderENS_23IncludeBorderColorOrNotE(i4, i1, 0);
   i14 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i14 & 1879048192 | 0) == 0) {
    i12 = 0;
    STACKTOP = i3;
    return i12 | 0;
   }
   if ((i14 & 234881024) >>> 0 > 16777216 >>> 0) {
    i15 = i14 >>> 1 & 8388607;
   } else {
    i15 = 0;
   }
   i12 = ((((HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ i2) & 1) + i15 | 0) >>> 1;
   STACKTOP = i3;
   return i12 | 0;
  }
 } else {
  __ZNK7WebCore15RenderTableCell28computeCollapsedBeforeBorderENS_23IncludeBorderColorOrNotE(i7, i1, 0);
  i1 = HEAP32[i7 + 4 >> 2] | 0;
  if ((i1 & 1879048192 | 0) == 0) {
   i12 = 0;
   STACKTOP = i3;
   return i12 | 0;
  }
  if ((i1 & 234881024) >>> 0 > 16777216 >>> 0) {
   i16 = i1 >>> 1 & 8388607;
  } else {
   i16 = 0;
  }
  i1 = (HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i12 = (((((i1 | 0) == 1 | (i1 | 0) == 3) ^ i2) & 1 ^ 1) + i16 | 0) >>> 1;
  STACKTOP = i3;
  return i12 | 0;
 }
 return 0;
}
function __ZNK7WebCore15RenderTableCell15borderHalfRightEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 8 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
 i10 = (HEAP32[i9 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  if ((HEAP32[i9 + 40 >> 2] & 1073741824 | 0) == 0) {
   __ZNK7WebCore15RenderTableCell27computeCollapsedStartBorderENS_23IncludeBorderColorOrNotE(i5, i1, 0);
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i9 & 1879048192 | 0) == 0) {
    i11 = 0;
    STACKTOP = i3;
    return i11 | 0;
   }
   if ((i9 & 234881024) >>> 0 > 16777216 >>> 0) {
    i12 = i9 >>> 1 & 8388607;
   } else {
    i12 = 0;
   }
   i11 = ((((HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ i2) & 1) + i12 | 0) >>> 1;
   STACKTOP = i3;
   return i11 | 0;
  } else {
   __ZNK7WebCore15RenderTableCell25computeCollapsedEndBorderENS_23IncludeBorderColorOrNotE(i4, i1, 0);
   i12 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i12 & 1879048192 | 0) == 0) {
    i11 = 0;
    STACKTOP = i3;
    return i11 | 0;
   }
   if ((i12 & 234881024) >>> 0 > 16777216 >>> 0) {
    i13 = i12 >>> 1 & 8388607;
   } else {
    i13 = 0;
   }
   i11 = ((((HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ i2) & 1 ^ 1) + i13 | 0) >>> 1;
   STACKTOP = i3;
   return i11 | 0;
  }
 } else if ((i10 | 0) == 1) {
  __ZNK7WebCore15RenderTableCell28computeCollapsedBeforeBorderENS_23IncludeBorderColorOrNotE(i6, i1, 0);
  i10 = HEAP32[i6 + 4 >> 2] | 0;
  if ((i10 & 1879048192 | 0) == 0) {
   i11 = 0;
   STACKTOP = i3;
   return i11 | 0;
  }
  if ((i10 & 234881024) >>> 0 > 16777216 >>> 0) {
   i14 = i10 >>> 1 & 8388607;
  } else {
   i14 = 0;
  }
  i10 = (HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i11 = (((((i10 | 0) == 1 | (i10 | 0) == 3) ^ i2) & 1 ^ 1) + i14 | 0) >>> 1;
  STACKTOP = i3;
  return i11 | 0;
 } else {
  __ZNK7WebCore15RenderTableCell27computeCollapsedAfterBorderENS_23IncludeBorderColorOrNotE(i7, i1, 0);
  i1 = HEAP32[i7 + 4 >> 2] | 0;
  if ((i1 & 1879048192 | 0) == 0) {
   i11 = 0;
   STACKTOP = i3;
   return i11 | 0;
  }
  if ((i1 & 234881024) >>> 0 > 16777216 >>> 0) {
   i15 = i1 >>> 1 & 8388607;
  } else {
   i15 = 0;
  }
  i1 = (HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i11 = (((((i1 | 0) == 1 | (i1 | 0) == 3) ^ i2) & 1) + i15 | 0) >>> 1;
  STACKTOP = i3;
  return i11 | 0;
 }
 return 0;
}
function __ZNK7WebCore15RenderTableCell16borderHalfBottomEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 8 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
 i10 = (HEAP32[i9 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3) {
  __ZNK7WebCore15RenderTableCell28computeCollapsedBeforeBorderENS_23IncludeBorderColorOrNotE(i4, i1, 0);
  i11 = HEAP32[i4 + 4 >> 2] | 0;
  if ((i11 & 1879048192 | 0) == 0) {
   i12 = 0;
   STACKTOP = i3;
   return i12 | 0;
  }
  if ((i11 & 234881024) >>> 0 > 16777216 >>> 0) {
   i13 = i11 >>> 1 & 8388607;
  } else {
   i13 = 0;
  }
  i11 = (HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i12 = (((((i11 | 0) == 1 | (i11 | 0) == 3) ^ i2) & 1 ^ 1) + i13 | 0) >>> 1;
  STACKTOP = i3;
  return i12 | 0;
 } else if ((i10 | 0) == 0) {
  __ZNK7WebCore15RenderTableCell27computeCollapsedAfterBorderENS_23IncludeBorderColorOrNotE(i5, i1, 0);
  i10 = HEAP32[i5 + 4 >> 2] | 0;
  if ((i10 & 1879048192 | 0) == 0) {
   i12 = 0;
   STACKTOP = i3;
   return i12 | 0;
  }
  if ((i10 & 234881024) >>> 0 > 16777216 >>> 0) {
   i14 = i10 >>> 1 & 8388607;
  } else {
   i14 = 0;
  }
  i10 = (HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i12 = (((((i10 | 0) == 1 | (i10 | 0) == 3) ^ i2) & 1) + i14 | 0) >>> 1;
  STACKTOP = i3;
  return i12 | 0;
 } else {
  if ((HEAP32[i9 + 40 >> 2] & 1073741824 | 0) == 0) {
   __ZNK7WebCore15RenderTableCell27computeCollapsedStartBorderENS_23IncludeBorderColorOrNotE(i7, i1, 0);
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i9 & 1879048192 | 0) == 0) {
    i12 = 0;
    STACKTOP = i3;
    return i12 | 0;
   }
   if ((i9 & 234881024) >>> 0 > 16777216 >>> 0) {
    i15 = i9 >>> 1 & 8388607;
   } else {
    i15 = 0;
   }
   i12 = ((((HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ i2) & 1) + i15 | 0) >>> 1;
   STACKTOP = i3;
   return i12 | 0;
  } else {
   __ZNK7WebCore15RenderTableCell25computeCollapsedEndBorderENS_23IncludeBorderColorOrNotE(i6, i1, 0);
   i1 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i1 & 1879048192 | 0) == 0) {
    i12 = 0;
    STACKTOP = i3;
    return i12 | 0;
   }
   if ((i1 & 234881024) >>> 0 > 16777216 >>> 0) {
    i16 = i1 >>> 1 & 8388607;
   } else {
    i16 = 0;
   }
   i12 = ((((HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ i2) & 1 ^ 1) + i16 | 0) >>> 1;
   STACKTOP = i3;
   return i12 | 0;
  }
 }
 return 0;
}
function __ZNK7WebCore15RenderTableCell13borderHalfTopEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 8 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
 i10 = (HEAP32[i9 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 0) {
  __ZNK7WebCore15RenderTableCell28computeCollapsedBeforeBorderENS_23IncludeBorderColorOrNotE(i5, i1, 0);
  i11 = HEAP32[i5 + 4 >> 2] | 0;
  if ((i11 & 1879048192 | 0) == 0) {
   i12 = 0;
   STACKTOP = i3;
   return i12 | 0;
  }
  if ((i11 & 234881024) >>> 0 > 16777216 >>> 0) {
   i13 = i11 >>> 1 & 8388607;
  } else {
   i13 = 0;
  }
  i11 = (HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i12 = (((((i11 | 0) == 1 | (i11 | 0) == 3) ^ i2) & 1 ^ 1) + i13 | 0) >>> 1;
  STACKTOP = i3;
  return i12 | 0;
 } else if ((i10 | 0) == 3) {
  __ZNK7WebCore15RenderTableCell27computeCollapsedAfterBorderENS_23IncludeBorderColorOrNotE(i4, i1, 0);
  i10 = HEAP32[i4 + 4 >> 2] | 0;
  if ((i10 & 1879048192 | 0) == 0) {
   i12 = 0;
   STACKTOP = i3;
   return i12 | 0;
  }
  if ((i10 & 234881024) >>> 0 > 16777216 >>> 0) {
   i14 = i10 >>> 1 & 8388607;
  } else {
   i14 = 0;
  }
  i10 = (HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i12 = (((((i10 | 0) == 1 | (i10 | 0) == 3) ^ i2) & 1) + i14 | 0) >>> 1;
  STACKTOP = i3;
  return i12 | 0;
 } else {
  if ((HEAP32[i9 + 40 >> 2] & 1073741824 | 0) == 0) {
   __ZNK7WebCore15RenderTableCell25computeCollapsedEndBorderENS_23IncludeBorderColorOrNotE(i7, i1, 0);
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i9 & 1879048192 | 0) == 0) {
    i12 = 0;
    STACKTOP = i3;
    return i12 | 0;
   }
   if ((i9 & 234881024) >>> 0 > 16777216 >>> 0) {
    i15 = i9 >>> 1 & 8388607;
   } else {
    i15 = 0;
   }
   i12 = ((((HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ i2) & 1 ^ 1) + i15 | 0) >>> 1;
   STACKTOP = i3;
   return i12 | 0;
  } else {
   __ZNK7WebCore15RenderTableCell27computeCollapsedStartBorderENS_23IncludeBorderColorOrNotE(i6, i1, 0);
   i1 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i1 & 1879048192 | 0) == 0) {
    i12 = 0;
    STACKTOP = i3;
    return i12 | 0;
   }
   if ((i1 & 234881024) >>> 0 > 16777216 >>> 0) {
    i16 = i1 >>> 1 & 8388607;
   } else {
    i16 = 0;
   }
   i12 = ((((HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ i2) & 1) + i16 | 0) >>> 1;
   STACKTOP = i3;
   return i12 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore15RenderTableCell23computeIntrinsicPaddingEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 120 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 + 124 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i1 + 36 >> 2] | 0;
 i12 = (HEAP32[i11 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i12 | 0) == 3 | (i12 | 0) == 0) {
  i13 = i1 + 56 | 0;
 } else {
  i13 = i1 + 52 | 0;
 }
 i12 = (HEAP32[i13 >> 2] | 0) - i8 - i10 | 0;
 L5 : do {
  switch ((HEAP32[i11 + 48 >> 2] | 0) >>> 16 & 15 | 0) {
  case 1:
   {
    i14 = (i2 - i12 | 0) / 2 & -1;
    break;
   }
  case 7:
   {
    i14 = i2 - i12 | 0;
    break;
   }
  case 2:
  case 3:
  case 4:
  case 5:
  case 9:
  case 0:
   {
    i13 = __ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv(i1 | 0) | 0;
    i15 = i1 | 0;
    if ((i13 | 0) == -1) {
     i16 = i1;
     i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 752 >> 2] & 511](i15) | 0;
     i18 = i1;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 720 >> 2] & 127](i4, i15);
     i19 = (HEAP32[i4 >> 2] | 0) + i17 | 0;
     __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i5, i1 | 0);
     i20 = i19 + (HEAP32[i5 >> 2] | 0) | 0;
     i21 = i16;
     i22 = i18;
    } else {
     i20 = i13;
     i21 = i1;
     i22 = i1;
    }
    i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 752 >> 2] & 511](i15) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 720 >> 2] & 127](i6, i15);
    if ((i20 | 0) <= ((HEAP32[i6 >> 2] | 0) + i13 | 0)) {
     i14 = 0;
     break L5;
    }
    i13 = HEAP32[i1 + 8 >> 2] | 0;
    i15 = HEAP32[i13 + 8 >> 2] | 0;
    i18 = HEAP32[i13 + 92 >> 2] & 2147483647;
    if ((HEAP32[i15 + 100 >> 2] | 0) >>> 0 > i18 >>> 0) {
     i14 = i8 - i20 + (HEAP32[(HEAP32[i15 + 92 >> 2] | 0) + (i18 * 28 & -1) + 16 >> 2] | 0) | 0;
     break L5;
    } else {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    break;
   }
  default:
   {
    i14 = 0;
   }
  }
 } while (0);
 i20 = i2 - i12 - i14 | 0;
 HEAP32[i7 >> 2] = i14;
 HEAP32[i9 >> 2] = i20;
 if ((i14 | 0) == (i8 | 0) & (i20 | 0) == (i10 | 0)) {
  STACKTOP = i3;
  return;
 }
 i10 = i1 + 20 | 0;
 i20 = HEAP32[i10 >> 2] | 0;
 if ((i20 & 1 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i10 >> 2] = i20 | 1;
 if ((i20 & 32768 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i1 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL14addBorderStyleERN3WTF6VectorINS_20CollapsedBorderValueELj0ENS0_15CrashOnOverflowEEES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 & 1879048192 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L4 : do {
  if ((i6 | 0) == 0) {
   i7 = 0;
  } else {
   i8 = i1 | 0;
   i9 = 0;
   while (1) {
    if (i6 >>> 0 <= i9 >>> 0) {
     i10 = 5;
     break;
    }
    i11 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i9 << 3) + 4 >> 2] | 0;
    if ((i11 & 234881024) >>> 0 > 16777216 >>> 0) {
     i12 = i11 >>> 1 & 8388607;
    } else {
     i12 = 0;
    }
    if ((i4 & 234881024) >>> 0 > 16777216 >>> 0) {
     i13 = i4 >>> 1 & 8388607;
    } else {
     i13 = 0;
    }
    if ((i12 | 0) == (i13 | 0)) {
     if (((i4 ^ i11) & 2130706432 | 0) == 0) {
      i10 = 23;
      break;
     }
    }
    i11 = i9 + 1 | 0;
    if (i11 >>> 0 < i6 >>> 0) {
     i9 = i11;
    } else {
     i7 = i6;
     break L4;
    }
   }
   if ((i10 | 0) == 5) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i10 | 0) == 23) {
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 if ((i7 | 0) != (HEAP32[i1 + 4 >> 2] | 0)) {
  i6 = i2;
  i4 = (HEAP32[i1 >> 2] | 0) + (i7 << 3) | 0;
  i13 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i4 + 4 >> 2] = i13;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  STACKTOP = i3;
  return;
 }
 i13 = i7 + 1 | 0;
 i4 = i1 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if (i6 >>> 0 > i2 >>> 0) {
   i10 = 17;
  } else {
   if ((i6 + (i7 << 3) | 0) >>> 0 <= i2 >>> 0) {
    i10 = 17;
    break;
   }
   __ZN3WTF6VectorIN7WebCore20CollapsedBorderValueELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i13);
   i12 = HEAP32[i4 >> 2] | 0;
   i14 = i12 + (i2 - i6 >> 3 << 3) | 0;
   i15 = i12;
  }
 } while (0);
 if ((i10 | 0) == 17) {
  __ZN3WTF6VectorIN7WebCore20CollapsedBorderValueELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i13);
  i14 = i2;
  i15 = HEAP32[i4 >> 2] | 0;
 }
 i4 = i14;
 i14 = i15 + (HEAP32[i5 >> 2] << 3) | 0;
 i15 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i14 + 4 >> 2] = i15;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15RenderTableCell29computePreferredLogicalWidthsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i5 + 176 | 0] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i5);
 }
 __ZN7WebCore11RenderBlock29computePreferredLogicalWidthsEv(i1 | 0);
 i5 = i1 + 20 | 0;
 if ((HEAP32[i5 >> 2] & 128 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 4 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] & 7;
 if ((i7 | 0) == 4 | (i7 | 0) == 1) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore15RenderTableCell22styleOrColLogicalWidthEv(i3, i1);
 if ((HEAP32[i5 >> 2] & 128 | 0) == 0) {
  i8 = HEAP32[i6 >> 2] | 0;
 } else {
  i8 = 0;
 }
 i6 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i8, __ZN7WebCore9HTMLNames10nowrapAttrE) | 0) >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i9 = i3 + 5 | 0;
  } else {
   i8 = i6 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) + 2 | 0;
   HEAP32[i8 >> 2] = i5;
   i7 = i3 + 5 | 0;
   if ((HEAP8[i7] | 0) == 3) {
    i10 = i1 + 76 | 0;
    if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
     d11 = +(HEAP32[i3 >> 2] | 0);
    } else {
     d11 = +HEAPF32[i3 >> 2];
    }
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
    HEAP32[i4 >> 2] = i12;
    i13 = i10 | 0;
    HEAP32[i13 >> 2] = HEAP32[((i12 | 0) < (HEAP32[i13 >> 2] | 0) ? i10 : i4) >> 2];
    i14 = HEAP32[i8 >> 2] | 0;
   } else {
    i14 = i5;
   }
   i13 = i14 - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i9 = i7;
    break;
   } else {
    HEAP32[i8 >> 2] = i13;
    i9 = i7;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i9] | 0) != 10) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore15RenderTableCell22styleOrColLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
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
 HEAP32[i4 >> 2] = i10;
 HEAP32[i4 + 4 >> 2] = i9;
 if ((i10 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
  i10 = i5 + 5 | 0;
  i11 = HEAP8[i10] | 0;
  i12 = i10;
 } else {
  i11 = (i9 >>> 8 | 0 << 24) & 255;
  i12 = i5 + 5 | 0;
 }
 if (i11 << 24 >> 24 != 0) {
  i11 = i1;
  i9 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i11 + 4 >> 2] = i9;
  HEAP8[i12] = 0;
  STACKTOP = i3;
  return;
 }
 i9 = HEAP32[(HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP8[i9 + 176 | 0] & 2) != 0) {
   i11 = __ZNK7WebCore11RenderTable14slowColElementEjPbS1_(i9, HEAP32[i2 + 116 >> 2] & 536870911, 0, 0) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i4 >> 2] | 0;
   i8 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = i10;
   HEAP32[i6 + 4 >> 2] = i8;
   if ((i10 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
   }
   __ZNK7WebCore15RenderTableCell23logicalWidthFromColumnsEPNS_14RenderTableColENS_6LengthE(i1, i2, i11, i7);
   if ((HEAP8[i7 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
   }
   if ((HEAP8[i12] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i5 = i1;
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i12] = 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore10BorderDataeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 + 4 >> 2] ^ HEAP32[i1 + 4 >> 2];
 if ((i3 & 2147483646 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 & 1 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i2 + 12 >> 2] ^ HEAP32[i1 + 12 >> 2];
 if ((i3 & 2147483646 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != (HEAP32[i2 + 8 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 & 1 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i2 + 20 >> 2] ^ HEAP32[i1 + 20 >> 2];
 if ((i3 & 2147483646 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 16 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 & 1 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i2 + 28 >> 2] ^ HEAP32[i1 + 28 >> 2];
 if ((i3 & 2147483646 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 24 >> 2] | 0) != (HEAP32[i2 + 24 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 & 1 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != (i5 | 0)) {
   if (__ZNK7WebCore18NinePieceImageDataeqERKS0_(i3, i5) | 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (!(__ZNK7WebCore10LengthSizeeqERKS0_(i1 + 36 | 0, i2 + 36 | 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(__ZNK7WebCore10LengthSizeeqERKS0_(i1 + 52 | 0, i2 + 52 | 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(__ZNK7WebCore10LengthSizeeqERKS0_(i1 + 68 | 0, i2 + 68 | 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore10LengthSizeeqERKS0_(i1 + 84 | 0, i2 + 84 | 0) | 0;
 return i4 | 0;
}
function __ZN7WebCore15RenderTableCellC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore15RenderBlockFlowC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1 | 0, i2, i5);
 HEAP32[i1 >> 2] = H_BASE + 64;
 i5 = i1 + 116 | 0;
 i2 = HEAP32[i5 >> 2] & -1073741824 | 536870911;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 i3 = i1 + 20 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 & 128 | 0) == 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    i7 = 0;
    i8 = i6;
    i9 = i2;
    break;
   }
   i10 = ((__ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i1) | 0) != 1) << 30;
   i7 = i10;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = HEAP32[i5 >> 2] | 0;
  } else {
   i7 = 0;
   i8 = i6;
   i9 = i2;
  }
 } while (0);
 i2 = i9 & -1073741825 | i7;
 HEAP32[i5 >> 2] = i2;
 if ((i8 & 128 | 0) != 0) {
  i11 = 0;
  i12 = i2;
  i13 = i12 & 2147483647;
  i14 = i13 | i11;
  HEAP32[i5 >> 2] = i14;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
  i11 = 0;
  i12 = i2;
  i13 = i12 & 2147483647;
  i14 = i13 | i11;
  HEAP32[i5 >> 2] = i14;
  STACKTOP = i4;
  return;
 }
 i2 = ((__ZNK7WebCore15RenderTableCell19parseRowSpanFromDOMEv(i1) | 0) != 1) << 31;
 i11 = i2;
 i12 = HEAP32[i5 >> 2] | 0;
 i13 = i12 & 2147483647;
 i14 = i13 | i11;
 HEAP32[i5 >> 2] = i14;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderTableCellC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore15RenderBlockFlowC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1 | 0, i2, i5);
 HEAP32[i1 >> 2] = H_BASE + 64;
 i5 = i1 + 116 | 0;
 i2 = HEAP32[i5 >> 2] & -1073741824 | 536870911;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 i3 = i1 + 20 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 & 128 | 0) == 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    i7 = 0;
    i8 = i6;
    i9 = i2;
    break;
   }
   i10 = ((__ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i1) | 0) != 1) << 30;
   i7 = i10;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = HEAP32[i5 >> 2] | 0;
  } else {
   i7 = 0;
   i8 = i6;
   i9 = i2;
  }
 } while (0);
 i2 = i9 & -1073741825 | i7;
 HEAP32[i5 >> 2] = i2;
 if ((i8 & 128 | 0) != 0) {
  i11 = 0;
  i12 = i2;
  i13 = i12 & 2147483647;
  i14 = i13 | i11;
  HEAP32[i5 >> 2] = i14;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
  i11 = 0;
  i12 = i2;
  i13 = i12 & 2147483647;
  i14 = i13 | i11;
  HEAP32[i5 >> 2] = i14;
  STACKTOP = i4;
  return;
 }
 i2 = ((__ZNK7WebCore15RenderTableCell19parseRowSpanFromDOMEv(i1) | 0) != 1) << 31;
 i11 = i2;
 i12 = HEAP32[i5 >> 2] | 0;
 i13 = i12 & 2147483647;
 i14 = i13 | i11;
 HEAP32[i5 >> 2] = i14;
 STACKTOP = i4;
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
   i6 = 25;
   break;
  }
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 25) {
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
function __ZN7WebCore15RenderTableCell23colSpanOrRowSpanChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 & 128 | 0) == 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    i4 = 0;
    i5 = i3;
    break;
   }
   i6 = ((__ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i1) | 0) != 1) << 30;
   i4 = i6;
   i5 = HEAP32[i2 >> 2] | 0;
  } else {
   i4 = 0;
   i5 = i3;
  }
 } while (0);
 i3 = i1 + 116 | 0;
 i6 = HEAP32[i3 >> 2] & -1073741825 | i4;
 HEAP32[i3 >> 2] = i6;
 do {
  if ((i5 & 128 | 0) == 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    i7 = 0;
    i8 = i6;
    i9 = i5;
    break;
   }
   i4 = ((__ZNK7WebCore15RenderTableCell19parseRowSpanFromDOMEv(i1) | 0) != 1) << 31;
   i7 = i4;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = HEAP32[i2 >> 2] | 0;
  } else {
   i7 = 0;
   i8 = i6;
   i9 = i5;
  }
 } while (0);
 HEAP32[i3 >> 2] = i8 & 2147483647 | i7;
 i7 = i1 | 0;
 do {
  if ((i9 & 1 | 0) == 0) {
   HEAP32[i2 >> 2] = i9 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i7, 1, 0);
   if ((HEAP32[i2 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i7);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i7, 1, 1);
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i7 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderTableSection18setNeedsCellRecalcEv(i1);
 return;
}
function __ZNK7WebCore15RenderTableCell19parseRowSpanFromDOMEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = HEAP32[i3 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
 do {
  if ((i1 | 0) != (i4 | 0)) {
   i5 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i5 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
    if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
   if ((i1 | 0) == (i6 | 0)) {
    break;
   }
   if ((i5 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore11MathMLNames6mtdTagE >> 2] | 0;
   do {
    if ((i1 | 0) != (i6 | 0)) {
     if ((i5 | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
      i7 = 1;
      return i7 | 0;
     }
     if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
      break;
     } else {
      i7 = 1;
     }
     return i7 | 0;
    }
   } while (0);
   if ((HEAP32[i2 >> 2] & 128 | 0) == 0) {
    i8 = i3;
   } else {
    i8 = 0;
   }
   i6 = __ZNK7WebCore13MathMLElement7rowSpanEv(i8) | 0;
   i7 = i6 >>> 0 > 2147483646 >>> 0 ? 2147483646 : i6;
   return i7 | 0;
  }
 } while (0);
 if ((HEAP32[i2 >> 2] & 128 | 0) == 0) {
  i9 = i3;
 } else {
  i9 = 0;
 }
 i3 = __ZNK7WebCore20HTMLTableCellElement7rowSpanEv(i9) | 0;
 i7 = i3 >>> 0 > 2147483646 >>> 0 ? 2147483646 : i3;
 return i7 | 0;
}
function __ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = HEAP32[i3 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
 do {
  if ((i1 | 0) != (i4 | 0)) {
   i5 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i5 | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
    if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames5thTagE >> 2] | 0;
   if ((i1 | 0) == (i6 | 0)) {
    break;
   }
   if ((i5 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore11MathMLNames6mtdTagE >> 2] | 0;
   do {
    if ((i1 | 0) != (i6 | 0)) {
     if ((i5 | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
      i7 = 1;
      return i7 | 0;
     }
     if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
      break;
     } else {
      i7 = 1;
     }
     return i7 | 0;
    }
   } while (0);
   if ((HEAP32[i2 >> 2] & 128 | 0) == 0) {
    i8 = i3;
   } else {
    i8 = 0;
   }
   i6 = __ZNK7WebCore13MathMLElement7colSpanEv(i8) | 0;
   i7 = i6 >>> 0 > 536870910 >>> 0 ? 536870910 : i6;
   return i7 | 0;
  }
 } while (0);
 if ((HEAP32[i2 >> 2] & 128 | 0) == 0) {
  i9 = i3;
 } else {
  i9 = 0;
 }
 i3 = __ZNK7WebCore20HTMLTableCellElement7colSpanEv(i9) | 0;
 i7 = i3 >>> 0 > 536870910 >>> 0 ? 536870910 : i3;
 return i7 | 0;
}
function __ZNK7WebCore10LengthSizeeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 i3 = i1 | 0;
 i4 = i2 | 0;
 i5 = HEAP8[i1 + 5 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 5 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 4 | 0] ^ HEAP8[i1 + 4 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d7 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d7 = +HEAPF32[i1 >> 2];
   }
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d8 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d8 = +HEAPF32[i2 >> 2];
   }
   if (d7 == d8) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i3, i4) | 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i4 = i1 + 8 | 0;
 i3 = i2 + 8 | 0;
 i5 = HEAP8[i1 + 13 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 13 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 12 | 0] ^ HEAP8[i1 + 12 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (i5 << 24 >> 24 == 15) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP8[i1 + 14 | 0] & 1) == 0) {
  d9 = +(HEAP32[i4 >> 2] | 0);
 } else {
  d9 = +HEAPF32[i4 >> 2];
 }
 if ((HEAP8[i2 + 14 | 0] & 1) == 0) {
  d10 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d10 = +HEAPF32[i3 >> 2];
 }
 if (d9 == d10) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i3) | 0;
 return i6 | 0;
}
function __ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = (i2 & 1879048192 | 0) != 0;
 do {
  if ((i3 & 1879048192 | 0) == 0) {
   i4 = i1 & 1;
  } else {
   if (!i1) {
    i4 = -1;
    break;
   }
   i5 = i3 >>> 24 & 15;
   i6 = i2 >>> 24 & 15;
   i7 = (i6 | 0) == 1;
   if ((i5 | 0) == 1) {
    i4 = (i7 ^ 1) << 31 >> 31;
    break;
   }
   if (i7) {
    i4 = 1;
    break;
   }
   i7 = (i6 | 0) == 0;
   if ((i5 | 0) == 0) {
    i4 = i7 & 1 ^ 1;
    break;
   }
   if (i7) {
    i4 = -1;
    break;
   }
   i7 = (i2 & 234881024) >>> 0 > 16777216 >>> 0;
   if (i7) {
    i8 = i2 >>> 1 & 8388607;
   } else {
    i8 = 0;
   }
   i9 = (i3 & 234881024) >>> 0 > 16777216 >>> 0;
   if (i9) {
    i10 = i3 >>> 1 & 8388607;
   } else {
    i10 = 0;
   }
   if ((i8 | 0) == (i10 | 0)) {
    if ((i6 | 0) != (i5 | 0)) {
     i4 = i6 >>> 0 < i5 >>> 0 ? -1 : 1;
     break;
    }
    i5 = i2 >>> 28 & 7;
    i6 = i3 >>> 28 & 7;
    if ((i5 | 0) == (i6 | 0)) {
     i4 = 0;
     break;
    }
    i4 = i5 >>> 0 < i6 >>> 0 ? -1 : 1;
    break;
   }
   if (i7) {
    i11 = i2 >>> 1 & 8388607;
   } else {
    i11 = 0;
   }
   if (i9) {
    i12 = i3 >>> 1 & 8388607;
   } else {
    i12 = 0;
   }
   i4 = i11 >>> 0 < i12 >>> 0 ? -1 : 1;
  }
 } while (0);
 return i4 | 0;
}
function __ZN7WebCore15RenderTableCell19setCellLogicalWidthEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 36 | 0;
 i4 = (HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  i5 = i1 + 52 | 0;
 } else {
  i5 = i1 + 56 | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 i5 = i1 | 0;
 i4 = i1 + 20 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 & 1 | 0) == 0) {
   HEAP32[i4 >> 2] = i6 | 1;
   if ((i6 & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i5);
  }
 } while (0);
 i6 = i1 + 8 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i7 = i4 + 20 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 & 4 | 0) == 0) {
  HEAP32[i7 >> 2] = i8 | 4;
  i9 = HEAP32[i6 >> 2] | 0;
 } else {
  i9 = i4;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i9 + 8 >> 2] | 0) + 8 >> 2] | 0) + 20 >> 2] & 1 | 0) == 0) {
   if (!(__ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv(i5) | 0)) {
    break;
   }
   __ZNK7WebCore12RenderObject7repaintEb(i5, 0);
  }
 } while (0);
 i5 = (HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  HEAP32[i1 + 52 >> 2] = i2;
 } else {
  HEAP32[i1 + 56 >> 2] = i2;
 }
 i2 = i1 + 116 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 536870912;
 return;
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
function __ZNK7WebCore15RenderTableCell13paddingBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i4;
 i7 = HEAP32[i2 + 36 >> 2] | 0;
 i8 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i7 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i9;
 if ((i7 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i5, i2 | 0, i6);
 if ((HEAP8[i6 + 5 | 0] | 0) != 10) {
  i10 = i5 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i2 + 120 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13 + i11 | 0;
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 i10 = i5 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i2 + 120 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i13 + i11 | 0;
 i15 = i1 | 0;
 HEAP32[i15 >> 2] = i14;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15RenderTableCell12paddingAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i4;
 i7 = HEAP32[i2 + 36 >> 2] | 0;
 i8 = __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i7 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i9;
 if ((i7 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i5, i2 | 0, i6);
 if ((HEAP8[i6 + 5 | 0] | 0) != 10) {
  i10 = i5 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i2 + 124 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13 + i11 | 0;
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 i10 = i5 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i2 + 124 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i13 + i11 | 0;
 i15 = i1 | 0;
 HEAP32[i15 >> 2] = i14;
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
function __ZN3WTF6VectorIN7WebCore20CollapsedBorderValueELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
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
 i1 = i2 + (i6 << 3) | 0;
 if (i5 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i6;
   i8 = i7;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   i9 = i6 + 8 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 8 | 0;
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
function __ZN7WebCore15RenderTableCell9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] | 0;
 if ((i8 & 6144 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] | 0) != 11) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 8 | 0) == 0) {
   if ((i8 & 1 | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 28 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i8 = HEAP32[i1 + 52 >> 2] | 0;
 i9 = HEAP32[i1 + 56 >> 2] | 0;
 i10 = i3;
 i3 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i6 + 4 >> 2] = i3;
 i3 = i5 + 8 | 0;
 HEAP32[i3 >> 2] = i8;
 HEAP32[i3 + 4 >> 2] = i9;
 __ZN7WebCore9RenderBox15paintMaskImagesERKNS_9PaintInfoERKNS_10LayoutRectE(i1 | 0, i2, i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderTableCell17scrollbarsChangedEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i1 | 0;
 i5 = i1 + 36 | 0;
 i6 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i7 = __ZNK7WebCore9RenderBox25horizontalScrollbarHeightEv(i4) | 0;
 } else {
  i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 908 >> 2] & 511](i4) | 0;
 }
 if ((i7 | 0) == 0) {
  return;
 }
 i4 = (HEAP32[i1 + 20 >> 2] & 8192 | 0) != 0;
 if (!((i4 ^ 1 | i2) & (i4 | i3))) {
  return;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i3 + 48 >> 2] & 983040 | 0) != 65536) {
  i5 = i1 + 124 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i7;
  return;
 }
 i5 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i8 = i1 + 56 | 0;
 } else {
  i8 = i1 + 52 | 0;
 }
 i5 = HEAP32[i8 >> 2] | 0;
 i8 = i1 + 120 | 0;
 i3 = i1 + 124 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - i5 + (i5 - i7) + (HEAP32[i3 >> 2] | 0) | 0;
 i7 = (i1 | 0) / 2 & -1;
 HEAP32[i8 >> 2] = i7;
 HEAP32[i3 >> 2] = i1 - i7;
 return;
}
function __ZN7WebCore15RenderTableCell44setOverrideLogicalContentHeightFromRowHeightENS_10LayoutUnitE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 i7 = i1 | 0;
 i8 = i1;
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 511](i7) | 0;
 i10 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 720 >> 2] & 127](i5, i7);
 i11 = HEAP32[i5 >> 2] | 0;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 756 >> 2] & 511](i7) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 724 >> 2] & 127](i4, i7);
 i7 = (HEAP32[i2 >> 2] | 0) - (i11 + i9 + i5 + (HEAP32[i4 >> 2] | 0)) | 0;
 HEAP32[i6 >> 2] = (i7 | 0) > 0 ? i7 : 0;
 __ZN7WebCore9RenderBox31setOverrideLogicalContentHeightENS_10LayoutUnitE(i1 | 0, i6);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15RenderTableCell28hasStartBorderAdjoiningTableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 i3 = i2 & 536870911;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
 if ((i2 & 1073741824 | 0) == 0) {
  i6 = 1;
 } else {
  i6 = __ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i1) | 0;
 }
 i2 = i3 - 1 + i6 | 0;
 i6 = HEAP32[i5 + 116 >> 2] | 0;
 i7 = i5 + 108 | 0;
 i5 = 0;
 i8 = 0;
 while (1) {
  if (i8 >>> 0 >= i6 >>> 0) {
   break;
  }
  i9 = (HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 << 2) >> 2] | 0) + i5 | 0;
  if ((i9 - 1 | 0) >>> 0 < i2 >>> 0) {
   i5 = i9;
   i8 = i8 + 1 | 0;
  } else {
   break;
  }
 }
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
 i4 = (HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 40 >> 2] ^ HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2]) & 1073741824;
 if ((i4 | i3 | 0) == 0) {
  return 1;
 } else {
  return (i8 | 0) == ((HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 116 >> 2] | 0) - 1 | 0) & (i4 | 0) != 0 | 0;
 }
 return 0;
}
function __ZNK7WebCore15RenderTableCell26hasEndBorderAdjoiningTableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 i3 = i2 & 536870911;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
 if ((i2 & 1073741824 | 0) == 0) {
  i6 = 1;
 } else {
  i6 = __ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i1) | 0;
 }
 i2 = i3 - 1 + i6 | 0;
 i6 = HEAP32[i5 + 116 >> 2] | 0;
 i7 = i5 + 108 | 0;
 i5 = 0;
 i8 = 0;
 while (1) {
  if (i8 >>> 0 >= i6 >>> 0) {
   break;
  }
  i9 = (HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 << 2) >> 2] | 0) + i5 | 0;
  if ((i9 - 1 | 0) >>> 0 < i2 >>> 0) {
   i5 = i9;
   i8 = i8 + 1 | 0;
  } else {
   break;
  }
 }
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
 i4 = ((HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 40 >> 2] ^ HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2]) & 1073741824 | 0) == 0;
 if ((i3 | 0) != 0 | i4) {
  return (i8 | 0) == ((HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 116 >> 2] | 0) - 1 | 0) & i4 | 0;
 } else {
  return 1;
 }
 return 0;
}
function __ZN7WebCore15RenderTableCell24updateColAndRowSpanFlagsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 & 128 | 0) == 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    i4 = 0;
    i5 = i3;
    break;
   }
   i6 = ((__ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i1) | 0) != 1) << 30;
   i4 = i6;
   i5 = HEAP32[i2 >> 2] | 0;
  } else {
   i4 = 0;
   i5 = i3;
  }
 } while (0);
 i3 = i1 + 116 | 0;
 i2 = HEAP32[i3 >> 2] & -1073741825 | i4;
 HEAP32[i3 >> 2] = i2;
 if ((i5 & 128 | 0) != 0) {
  i7 = 0;
  i8 = i2;
  i9 = i8 & 2147483647;
  i10 = i9 | i7;
  HEAP32[i3 >> 2] = i10;
  return;
 }
 if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
  i7 = 0;
  i8 = i2;
  i9 = i8 & 2147483647;
  i10 = i9 | i7;
  HEAP32[i3 >> 2] = i10;
  return;
 }
 i2 = ((__ZNK7WebCore15RenderTableCell19parseRowSpanFromDOMEv(i1) | 0) != 1) << 31;
 i7 = i2;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 & 2147483647;
 i10 = i9 | i7;
 HEAP32[i3 >> 2] = i10;
 return;
}
function __ZNK7WebCore15RenderTableCell12paddingRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i4;
 i7 = i2 + 36 | 0;
 i8 = (HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] | 0) + 76 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 HEAP32[i4 + 4 >> 2] = i10;
 if ((i9 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i5, i2 | 0, i6);
 if ((HEAP8[i6 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 }
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  HEAP32[i1 >> 2] = (HEAP32[((HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 24576 | 0) == 16384 ? i2 + 124 | 0 : i2 + 120 | 0) >> 2] | 0) + i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore15RenderTableCell11paddingLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i4;
 i7 = i2 + 36 | 0;
 i8 = (HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] | 0) + 68 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 HEAP32[i4 + 4 >> 2] = i10;
 if ((i9 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i5, i2 | 0, i6);
 if ((HEAP8[i6 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 }
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  HEAP32[i1 >> 2] = (HEAP32[((HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 24576 | 0) == 16384 ? i2 + 120 | 0 : i2 + 124 | 0) >> 2] | 0) + i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore15RenderTableCell13paddingBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i4;
 i7 = i2 + 36 | 0;
 i8 = (HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] | 0) + 92 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 HEAP32[i4 + 4 >> 2] = i10;
 if ((i9 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i5, i2 | 0, i6);
 if ((HEAP8[i6 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 }
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = (HEAP32[((HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 24576 | 0) == 0 ? i2 + 124 | 0 : i2 + 120 | 0) >> 2] | 0) + i6;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore15RenderTableCell10paddingTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i4;
 i7 = i2 + 36 | 0;
 i8 = (HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] | 0) + 84 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 HEAP32[i4 + 4 >> 2] = i10;
 if ((i9 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i5, i2 | 0, i6);
 if ((HEAP8[i6 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 }
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = (HEAP32[((HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 24576 | 0) == 0 ? i2 + 120 | 0 : i2 + 124 | 0) >> 2] | 0) + i6;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore15RenderTableCell21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  return;
 }
 i5 = i3 + 4 | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 if ((HEAP32[i6 + 196 >> 2] | 0) == 0) {
  if (!((HEAP32[i6 + 192 >> 2] | 0) != 0 & (i2 | 0) == 0)) {
   i7 = 4;
  }
 } else {
  i7 = 4;
 }
 do {
  if ((i7 | 0) == 4) {
   i6 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i8 = i6 + 44 | 0;
   i6 = HEAP32[i8 + 4 >> 2] | 0;
   i9 = i3 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - (HEAP32[i8 >> 2] | 0);
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i6;
  }
 } while (0);
 __ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1 | 0, i2, i3, i4);
 return;
}
function __ZNK7WebCore15RenderTableCell12borderBeforeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 8 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 8 | 0) == 0) {
  i5 = (__ZNK7WebCore11RenderStyle17borderBeforeWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore15RenderTableCell28computeCollapsedBeforeBorderENS_23IncludeBorderColorOrNotE(i3, i1, 0);
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i1 & 1879048192 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((i1 & 234881024) >>> 0 > 16777216 >>> 0) {
  i6 = i1 >>> 1 & 8388607;
 } else {
  i6 = 0;
 }
 i1 = (HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i5 = ((((i1 | 0) == 1 | (i1 | 0) == 3) & 1 ^ 1) + i6 | 0) >>> 1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore15RenderTableCell11borderAfterEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 8 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 8 | 0) == 0) {
  i5 = (__ZNK7WebCore11RenderStyle16borderAfterWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore15RenderTableCell27computeCollapsedAfterBorderENS_23IncludeBorderColorOrNotE(i3, i1, 0);
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i1 & 1879048192 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((i1 & 234881024) >>> 0 > 16777216 >>> 0) {
  i6 = i1 >>> 1 & 8388607;
 } else {
  i6 = 0;
 }
 i1 = (HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i5 = ((((i1 | 0) == 1 | (i1 | 0) == 3) & 1) + i6 | 0) >>> 1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore15RenderTableCell32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i5 = __ZN3WTF10fastMallocEj(128) | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
  i7 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i7 = HEAP32[i2 + 36 >> 2] | 0;
 }
 __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i4, i7, 14);
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore15RenderBlockFlowC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i5, i6, i3);
 HEAP32[i5 >> 2] = H_BASE + 64;
 HEAP32[i5 + 116 >> 2] = 536870911;
 HEAP32[i5 + 120 >> 2] = 0;
 HEAP32[i5 + 124 >> 2] = 0;
 __ZN7WebCore13RenderElement15initializeStyleEv(i5);
 STACKTOP = i1;
 return i5 | 0;
}
function __ZN7WebCore15RenderTableCell33createAnonymousWithParentRendererEPKNS_12RenderObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = __ZN3WTF10fastMallocEj(128) | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i7 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i7 = HEAP32[i1 + 36 >> 2] | 0;
 }
 __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i4, i7, 14);
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore15RenderBlockFlowC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i5, i6, i3);
 HEAP32[i5 >> 2] = H_BASE + 64;
 HEAP32[i5 + 116 >> 2] = 536870911;
 HEAP32[i5 + 120 >> 2] = 0;
 HEAP32[i5 + 124 >> 2] = 0;
 __ZN7WebCore13RenderElement15initializeStyleEv(i5);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore15RenderTableCell11borderStartEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 8 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 8 | 0) == 0) {
  i5 = (__ZNK7WebCore11RenderStyle16borderStartWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore15RenderTableCell27computeCollapsedStartBorderENS_23IncludeBorderColorOrNotE(i3, i1, 0);
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i1 & 1879048192 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((i1 & 234881024) >>> 0 > 16777216 >>> 0) {
  i6 = i1 >>> 1 & 8388607;
 } else {
  i6 = 0;
 }
 i5 = (((HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1) + i6 | 0) >>> 1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore15RenderTableCell9borderEndEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 8 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 8 | 0) == 0) {
  i5 = (__ZNK7WebCore11RenderStyle14borderEndWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore15RenderTableCell25computeCollapsedEndBorderENS_23IncludeBorderColorOrNotE(i3, i1, 0);
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i1 & 1879048192 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((i1 & 234881024) >>> 0 > 16777216 >>> 0) {
  i6 = i1 >>> 1 & 8388607;
 } else {
  i6 = 0;
 }
 i5 = (((HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1 ^ 1) + i6 | 0) >>> 1;
 STACKTOP = i2;
 return i5 | 0;
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
function __ZNK7WebCore15RenderTableCell20cellBaselinePositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv(i2 | 0) | 0;
 if ((i6 | 0) == -1) {
  i7 = i2 | 0;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 752 >> 2] & 511](i7) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 720 >> 2] & 127](i4, i7);
  i7 = (HEAP32[i4 >> 2] | 0) + i8 | 0;
  __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i5, i2 | 0);
  HEAP32[i1 >> 2] = i7 + (HEAP32[i5 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore15RenderTableCell21collapsedBeforeBorderENS_23IncludeBorderColorOrNotE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore15RenderTableCell28computeCollapsedBeforeBorderENS_23IncludeBorderColorOrNotE(i1, i2, i3);
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0;
 i6 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 __ZN7WebCore18RenderTableSection24setCachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideENS_20CollapsedBorderValueE(i3, i2, 0, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15RenderTableCell20collapsedStartBorderENS_23IncludeBorderColorOrNotE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore15RenderTableCell27computeCollapsedStartBorderENS_23IncludeBorderColorOrNotE(i1, i2, i3);
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0;
 i6 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 __ZN7WebCore18RenderTableSection24setCachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideENS_20CollapsedBorderValueE(i3, i2, 2, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15RenderTableCell20collapsedAfterBorderENS_23IncludeBorderColorOrNotE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore15RenderTableCell27computeCollapsedAfterBorderENS_23IncludeBorderColorOrNotE(i1, i2, i3);
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0;
 i6 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 __ZN7WebCore18RenderTableSection24setCachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideENS_20CollapsedBorderValueE(i3, i2, 1, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15RenderTableCell18collapsedEndBorderENS_23IncludeBorderColorOrNotE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore15RenderTableCell25computeCollapsedEndBorderENS_23IncludeBorderColorOrNotE(i1, i2, i3);
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0;
 i6 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 __ZN7WebCore18RenderTableSection24setCachedCollapsedBorderEPKNS_15RenderTableCellENS_19CollapsedBorderSideENS_20CollapsedBorderValueE(i3, i2, 3, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15RenderTableCell16borderHalfBeforeEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore15RenderTableCell28computeCollapsedBeforeBorderENS_23IncludeBorderColorOrNotE(i4, i1, 0);
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i5 & 1879048192 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((i5 & 234881024) >>> 0 > 16777216 >>> 0) {
  i7 = i5 >>> 1 & 8388607;
 } else {
  i7 = 0;
 }
 i5 = (HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i6 = (((((i5 | 0) == 1 | (i5 | 0) == 3) ^ i2) & 1 ^ 1) + i7 | 0) >>> 1;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZNK7WebCore15RenderTableCell15borderHalfAfterEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore15RenderTableCell27computeCollapsedAfterBorderENS_23IncludeBorderColorOrNotE(i4, i1, 0);
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i5 & 1879048192 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((i5 & 234881024) >>> 0 > 16777216 >>> 0) {
  i7 = i5 >>> 1 & 8388607;
 } else {
  i7 = 0;
 }
 i5 = (HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i6 = (((((i5 | 0) == 1 | (i5 | 0) == 3) ^ i2) & 1) + i7 | 0) >>> 1;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCoreL27compareBorderValuesForQSortEPKvS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1;
 i4 = i2;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 & 234881024) >>> 0 > 16777216 >>> 0) {
  i6 = i5 >>> 1 & 8388607;
 } else {
  i6 = 0;
 }
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 & 234881024) >>> 0 > 16777216 >>> 0) {
  i7 = i1 >>> 1 & 8388607;
 } else {
  i7 = 0;
 }
 do {
  if ((i6 | 0) == (i7 | 0)) {
   if (((i1 ^ i5) & 2130706432 | 0) == 0) {
    i8 = 0;
   } else {
    break;
   }
   return i8 | 0;
  }
 } while (0);
 i8 = __ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_(i3, i4) | 0;
 return i8 | 0;
}
function __ZNK7WebCore15RenderTableCell15borderHalfStartEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore15RenderTableCell27computeCollapsedStartBorderENS_23IncludeBorderColorOrNotE(i4, i1, 0);
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i5 & 1879048192 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((i5 & 234881024) >>> 0 > 16777216 >>> 0) {
  i7 = i5 >>> 1 & 8388607;
 } else {
  i7 = 0;
 }
 i6 = ((((HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ i2) & 1) + i7 | 0) >>> 1;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZNK7WebCore15RenderTableCell13borderHalfEndEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore15RenderTableCell25computeCollapsedEndBorderENS_23IncludeBorderColorOrNotE(i4, i1, 0);
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i5 & 1879048192 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((i5 & 234881024) >>> 0 > 16777216 >>> 0) {
  i7 = i5 >>> 1 & 8388607;
 } else {
  i7 = 0;
 }
 i6 = ((((HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ i2) & 1 ^ 1) + i7 | 0) >>> 1;
 STACKTOP = i3;
 return i6 | 0;
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
function __ZNK7WebCore15RenderTableCell12borderBottomEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 8 | 0) != 0) {
  i2 = __ZNK7WebCore15RenderTableCell16borderHalfBottomEb(i1, 0) | 0;
  return i2 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i3 + 128 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i3 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = i1 >>> 1 & 67108863;
 return i2 | 0;
}
function __ZNK7WebCore15RenderTableCell11borderRightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 8 | 0) != 0) {
  i2 = __ZNK7WebCore15RenderTableCell15borderHalfRightEb(i1, 0) | 0;
  return i2 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i3 + 112 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i3 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = i1 >>> 1 & 67108863;
 return i2 | 0;
}
function __ZNK7WebCore15RenderTableCell10borderLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 8 | 0) != 0) {
  i2 = __ZNK7WebCore15RenderTableCell14borderHalfLeftEb(i1, 0) | 0;
  return i2 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i3 + 104 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i3 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = i1 >>> 1 & 67108863;
 return i2 | 0;
}
function __ZNK7WebCore15RenderTableCell9borderTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 8 | 0) != 0) {
  i2 = __ZNK7WebCore15RenderTableCell13borderHalfTopEb(i1, 0) | 0;
  return i2 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i3 + 120 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i3 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = i1 >>> 1 & 67108863;
 return i2 | 0;
}
function __ZN7WebCore15RenderTableCellC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 116 >> 2] = 536870911;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderTableCellC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 116 >> 2] = 536870911;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
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
function __ZNK7WebCore15RenderTableCell19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb(i1, i2 | 0, i3, i4, i5);
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i5 + 48 >> 2] | 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 + 44 >> 2] | 0);
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i2;
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
function __ZNK7WebCore15RenderTableCell10renderNameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
  i2 = H_BASE + 24 | 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = H_BASE + 8 | 0;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] & 1048580 | 0) != 1048580) {
  i2 = H_BASE + 8 | 0;
  return i2 | 0;
 }
 i1 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 232 >> 2] & 511](i3) | 0) != 0;
 i2 = i1 ? H_BASE + 24 | 0 : H_BASE + 8 | 0;
 return i2 | 0;
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
function __ZN7WebCore15RenderTableCell21willBeRemovedFromTreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore13RenderElement21willBeRemovedFromTreeEv(i1 | 0);
 i2 = i1 + 8 | 0;
 __ZN7WebCore18RenderTableSection18setNeedsCellRecalcEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0);
 __ZN7WebCore18RenderTableSection28removeCachedCollapsedBordersEPKNS_15RenderTableCellE(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0, i1);
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
function iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 return __ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0) | 0;
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
function viii___ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
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
function viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE(i1 | 0, i2 | 0, i3 | 0);
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
function __ZN7WebCore15RenderTableCell16sortBorderValuesERN3WTF6VectorINS_20CollapsedBorderValueELj0ENS1_15CrashOnOverflowEEE(i1) {
 i1 = i1 | 0;
 _qsort(HEAP32[i1 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0, 8, F_BASE_iii + 22 | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15RenderTableCell5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2, i3);
 return;
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
function vii___ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0___wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0_(i1 | 0, i2 | 0);
}
function v___ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE__wrapper() {
 __ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE();
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
function __ZNK7WebCore15RenderTableCell36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
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
function v___ZN7WebCore15RenderBlockFlow16positionForPointERKNS_11LayoutPointE__wrapper() {
 __ZN7WebCore15RenderBlockFlow16positionForPointERKNS_11LayoutPointE();
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
function vi___ZN7WebCore15RenderBlockFlow19updateLogicalHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow19updateLogicalHeightEv(i1 | 0);
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
function __ZNK7WebCore11RenderBlock19virtualContinuationEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
}
function vi___ZN7WebCore15RenderBlockFlow16insertedIntoTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow16insertedIntoTreeEv(i1 | 0);
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
function __ZN7WebCore15RenderTableCellD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlowD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox12scrollHeightEv(i1 | 0) | 0;
}
function vi___ZN7WebCore15RenderBlockFlow11deleteLinesEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlow11deleteLinesEv(i1 | 0);
}
function vi___ZN7WebCore11RenderBlock15calcColumnWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock15calcColumnWidthEv(i1 | 0);
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
function __ZN7WebCore15RenderTableCellD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15RenderBlockFlowD2Ev(i1 | 0);
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
function __ZN7WebCore15RenderTableCell18updateLogicalWidthEv(i1) {
 i1 = i1 | 0;
 return;
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
function __ZNK7WebCore15RenderTableCell11isTableCellEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function b12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(12);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 7]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
  var FUNCTION_TABLE_viiiii = [b0,b0,viiiii___ZN7WebCore15RenderBlockFlow22clipOutFloatingObjectsERNS_11RenderBlockEPKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE__wrapper,b0,viiiii___ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b0,__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE,b0,viiiii___ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b0,viiiii___ZNK7WebCore15RenderBlockFlow29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1___wrapper,b0,viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b0,__ZNK7WebCore15RenderTableCell19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb,b0,viiiii___ZNK7WebCore15RenderBlockFlow30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1___wrapper,b0,viiiii___ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b__wrapper,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiiiiii = [b1,b1,viiiiiiiiii___ZN7WebCore15RenderBlockFlow19inlineSelectionGapsERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE__wrapper,b1];
  var FUNCTION_TABLE_iiiifi = [b2,b2,iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b2,iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b3,vi___ZN7WebCore15RenderBlockFlow19updateLogicalHeightEv__wrapper,b3,__ZN7WebCore15RenderTableCellD1Ev,b3,__ZN7WebCore15RenderTableCell21willBeRemovedFromTreeEv,b3,__ZN7WebCore12RenderObject17updateFromElementEv,b3,vi___ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv__wrapper,b3,vi___ZN7WebCore15RenderBlockFlow11deleteLinesEv__wrapper,b3,vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper,b3,vi___ZN7WebCore15RenderBlockFlow16insertedIntoTreeEv__wrapper,b3,vi___ZN7WebCore11RenderBlock23addOverflowFromChildrenEv__wrapper,b3,vi___ZN7WebCore15RenderBlockFlow15willBeDestroyedEv__wrapper,b3,__ZN7WebCore15RenderTableCell29computePreferredLogicalWidthsEv,b3,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b3,vi___ZN7WebCore11RenderBlock15calcColumnWidthEv__wrapper
  ,b3,vi___ZN7WebCore11RenderBlock17updateFirstLetterEv__wrapper,b3,__ZN7WebCore9RenderBox14stopAutoscrollEv,b3,__ZN7WebCore15RenderTableCell18updateLogicalWidthEv,b3,vi___ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv__wrapper,b3,__ZN7WebCore15RenderTableCell6layoutEv,b3,__ZN7WebCore15RenderTableCellD0Ev,b3,vi___ZN7WebCore15RenderBlockFlow29addOverflowFromInlineChildrenEv__wrapper,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper,b4,vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper,b4,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b4,__ZN7WebCore15RenderBlockFlow26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b4,vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper,b4,__ZNK7WebCore15RenderBlockFlow21collapsedMarginBeforeEv,b4,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b4,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b4,vii___ZN7WebCore15RenderBlockFlow19createRootInlineBoxEv__wrapper,b4,vii___ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE__wrapper,b4,__ZNK7WebCore15RenderTableCell12paddingRightEv,b4,vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper,b4,vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper,b4,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper
  ,b4,__ZNK7WebCore15RenderTableCell13paddingBottomEv,b4,__ZNK7WebCore9RenderBox9marginTopEv,b4,vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper,b4,vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper,b4,vii___ZN7WebCore15RenderBlockFlow24repaintOverhangingFloatsEb__wrapper,b4,vii___ZN7WebCore11RenderBlock15updateDragStateEb__wrapper,b4,__ZNK7WebCore15RenderTableCell11paddingLeftEv,b4,__ZNK7WebCore9RenderBox13intrinsicSizeEv,b4,__ZNK7WebCore15RenderTableCell10paddingTopEv,b4,__ZNK7WebCore15RenderBlockFlow20collapsedMarginAfterEv,b4,vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper,b4,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b4,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b4,vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv
  ,b4,vii___ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0___wrapper,b4,__ZNK7WebCore9RenderBox18visualOverflowRectEv,b4,__ZNK7WebCore9RenderBox11marginRightEv,b4,__ZNK7WebCore15RenderTableCell12paddingAfterEv,b4,vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper,b4,__ZNK7WebCore9RenderBox11offsetWidthEv,b4,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b4,vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper,b4,vii___ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv__wrapper,b4,__ZNK7WebCore9RenderBox10marginLeftEv,b4,vii___ZNK7WebCore11RenderBlock21availableLogicalWidthEv__wrapper,b4,vii___ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE__wrapper,b4,__ZNK7WebCore15RenderTableCell13paddingBeforeEv,b4,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b4,__ZNK7WebCore9RenderBox17borderBoundingBoxEv
  ,b4,__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv,b4,__ZNK7WebCore9RenderBox12marginBottomEv,b4,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b4,__ZNK7WebCore9RenderBox12offsetHeightEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiiiiii = [b5,b5,iiiiiii___ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5,iiiiiii___ZN7WebCore15RenderBlockFlow21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5,iiiiiii___ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5];
  var FUNCTION_TABLE_ii = [b6,b6,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b6,ii___ZNK7WebCore11RenderBlock14firstLineBlockEv__wrapper,b6,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b6,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b6,__ZNK7WebCore12RenderObject10isRubyTextEv,b6,__ZNK7WebCore12RenderObject6isRubyEv,b6,ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper,b6,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b6,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b6,ii___ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv__wrapper,b6,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b6,__ZNK7WebCore12RenderObject14isTableCaptionEv,b6,__ZNK7WebCore12RenderObject8isWidgetEv,b6,__ZNK7WebCore12RenderObject11isTextFieldEv
  ,b6,__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv,b6,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b6,__ZNK7WebCore15RenderTableCell10renderNameEv,b6,__ZNK7WebCore12RenderObject10isMenuListEv,b6,ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper,b6,__ZNK7WebCore12RenderObject9isSVGRootEv,b6,__ZNK7WebCore15RenderTableCell12borderBeforeEv,b6,__ZNK7WebCore15RenderTableCell11borderAfterEv,b6,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b6,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b6,ii___ZNK7WebCore15RenderBlockFlow15canHaveChildrenEv__wrapper,b6,__ZNK7WebCore15RenderTableCell10borderLeftEv,b6,__ZNK7WebCore12RenderObject7isMeterEv,b6,__ZNK7WebCore12RenderObject14isSVGContainerEv,b6,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper
  ,b6,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b6,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b6,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b6,__ZNK7WebCore12RenderObject7isQuoteEv,b6,__ZNK7WebCore12RenderObject10isListItemEv,b6,__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv,b6,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b6,__ZNK7WebCore12RenderObject10isSVGImageEv,b6,__ZNK7WebCore15RenderTableCell9borderEndEv,b6,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b6,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b6,__ZNK7WebCore12RenderObject16isRenderTableColEv,b6,__ZNK7WebCore12RenderObject7isVideoEv,b6,__ZNK7WebCore12RenderObject10isProgressEv,b6,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv
  ,b6,__ZNK7WebCore12RenderObject13isCombineTextEv,b6,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b6,__ZNK7WebCore12RenderObject5isWBREv,b6,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b6,__ZNK7WebCore15RenderTableCell11isTableCellEv,b6,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b6,__ZNK7WebCore13RenderElement14firstChildSlowEv,b6,ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper,b6,ii___ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b6,__ZNK7WebCore12RenderObject7isFrameEv,b6,ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper,b6,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b6,ii___ZNK7WebCore11RenderBlock14paginationUnitEv__wrapper,b6,ii___ZNK7WebCore15RenderBlockFlow8hasLinesEv__wrapper
  ,b6,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b6,__ZNK7WebCore15RenderBlockFlow14containsFloatsEv,b6,__ZNK7WebCore12RenderObject9isReplicaEv,b6,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b6,__ZNK7WebCore9RenderBox14hasControlClipEv,b6,__ZNK7WebCore15RenderTableCell11borderStartEv,b6,__ZNK7WebCore12RenderObject7isMediaEv,b6,__ZNK7WebCore12RenderObject10isSVGShapeEv,b6,__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv,b6,__ZNK7WebCore11RenderBlock19virtualContinuationEv,b6,__ZNK7WebCore12RenderObject14isRenderButtonEv,b6,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b6,__ZNK7WebCore12RenderObject8isSliderEv,b6,ii___ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv__wrapper,b6,__ZNK7WebCore12RenderObject10isRubyBaseEv
  ,b6,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b6,ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper,b6,ii___ZNK7WebCore11RenderBlock12avoidsFloatsEv__wrapper,b6,__ZNK7WebCore12RenderObject8isCanvasEv,b6,__ZNK7WebCore15RenderTableCell11borderRightEv,b6,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b6,ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper,b6,ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper,b6,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b6,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper,b6,__ZNK7WebCore12RenderObject13isSliderThumbEv,b6,__ZNK7WebCore12RenderObject13isTextControlEv,b6,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b6,__ZNK7WebCore12RenderObject9isSVGTextEv,b6,__ZNK7WebCore12RenderObject10isTextAreaEv
  ,b6,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b6,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b6,ii___ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv__wrapper,b6,ii___ZNK7WebCore15RenderBlockFlow24canHaveGeneratedChildrenEv__wrapper,b6,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b6,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b6,__ZNK7WebCore12RenderObject12isRenderGridEv,b6,__ZNK7WebCore12RenderObject9isListBoxEv,b6,__ZNK7WebCore12RenderObject9isSVGPathEv,b6,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b6,ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject13isRenderImageEv,b6,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b6,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b6,ii___ZNK7WebCore11RenderBlock14hasLineIfEmptyEv__wrapper
  ,b6,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b6,__ZNK7WebCore12RenderObject6lengthEv,b6,__ZNK7WebCore12RenderObject10isTableRowEv,b6,__ZNK7WebCore12RenderObject10isFrameSetEv,b6,__ZNK7WebCore9RenderBox13requiresLayerEv,b6,__ZNK7WebCore12RenderObject10isFieldsetEv,b6,__ZNK7WebCore12RenderObject11isSVGInlineEv,b6,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b6,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b6,ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b6,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b6,__ZNK7WebCore13RenderElement13lastChildSlowEv,b6,ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper,b6,__ZNK7WebCore12RenderObject9isRubyRunEv
  ,b6,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b6,__ZNK7WebCore15RenderTableCell9borderTopEv,b6,__ZNK7WebCore12RenderObject7isTableEv,b6,__ZNK7WebCore12RenderObject14isRenderRegionEv,b6,ii___ZNK7WebCore11RenderBlock13hoverAncestorEv__wrapper,b6,ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper,b6,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b6,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b6,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b6,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject7isImageEv,b6,__ZNK7WebCore12RenderObject9isCounterEv,b6,ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper,b6,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b6,__ZNK7WebCore15RenderTableCell12borderBottomEv
  ,b6,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b6,ii___ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv__wrapper,b6,__ZNK7WebCore12RenderObject12isListMarkerEv,b6,__ZNK7WebCore12RenderObject7isEmptyEv,b6,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b6,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject14isTableSectionEv,b6,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_iiii = [b7,b7,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b7,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b7,iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b7,iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper,b7,__ZNK7WebCore15RenderTableCell36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,viii___ZN7WebCore15RenderBlockFlow15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper,b8,viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b8,viii___ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore15RenderBlockFlow15computeOverflowENS_10LayoutUnitEb__wrapper,b8,viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper,b8,__ZN7WebCore15RenderTableCellC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE,b8,__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE,b8,__ZNK7WebCore15RenderTableCell29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE,b8,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b8,__ZN7WebCore15RenderTableCell5paintERNS_9PaintInfoERKNS_11LayoutPointE,b8,__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE,b8,__ZN7WebCore15RenderTableCell9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE,b8,__ZN7WebCore15RenderTableCellC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE,b8,viii___ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper
  ,b8,__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE,b8,viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper,b8,viii___ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2___wrapper,b8,viii___ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper,b8,__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE,b8,__ZN7WebCore15RenderTableCell17scrollbarsChangedEbb,b8,viii___ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE__wrapper,b8,viii___ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore15RenderBlockFlow32moveAllChildrenIncludingFloatsToEPNS_11RenderBlockEb__wrapper,b8,viii___ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2___wrapper,b8,viii___ZNK7WebCore11RenderBlock29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2___wrapper,b8,viii___ZN7WebCore15RenderBlockFlow19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore15RenderTableCell19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE,b8,__ZN7WebCore15RenderTableCell14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE
  ,b8,viii___ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE__wrapper,b8,__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE,b8];
  var FUNCTION_TABLE_v = [b9,b9,v___ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE__wrapper,b9,v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper,b9,v___ZN7WebCore15RenderBlockFlow16positionForPointERKNS_11LayoutPointE__wrapper,b9];
  var FUNCTION_TABLE_iiiii = [b10,b10,iiiii___ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5___wrapper,b10,iiiii___ZN7WebCore15RenderBlockFlow21relayoutForPaginationEbNS_10LayoutUnitERNS_21LayoutStateMaintainerE__wrapper,b10,b10,b10];
  var FUNCTION_TABLE_viiiiii = [b11,b11,viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper,b11];
  var FUNCTION_TABLE_iii = [b12,b12,iii___ZNK7WebCore11RenderBlock15requiresColumnsEi__wrapper,b12,iii___ZNK7WebCore15RenderBlockFlow19inlineBlockBaselineENS_17LineDirectionModeE__wrapper,b12,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b12,iii___ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb__wrapper,b12,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b12,iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper,b12,__ZNK7WebCore15RenderTableCell32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE,b12,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b12,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b12,__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb,b12,__ZN7WebCoreL27compareBorderValuesForQSortEPKvS1_,b12,b12,b12,b12,b12,b12
  ,b12,b12,b12];
  var FUNCTION_TABLE_iiiiii = [b13,b13,iiiiii___ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b13,iiiiii___ZN7WebCore15RenderBlockFlow13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE__wrapper,b13,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b13];
  var FUNCTION_TABLE_viiii = [b14,b14,__ZNK7WebCore15RenderTableCell21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb,b14,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b14,viiii___ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b14,viiii___ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b14,viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper,b14,__ZNK7WebCore15RenderBlockFlow31adjustInlineDirectionLineBoundsEiRfS1_,b14,viiii___ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b14,__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb,b14,viiii___ZN7WebCore15RenderBlockFlow11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb__wrapper,b14,viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper,b14,__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b14,viiii___ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3___wrapper,b14,b14,b14,b14
  ,b14,b14,b14];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_iiiifi: dynCall_iiiifi, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_iiiifi": invoke_iiiifi, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_qsort": _qsort, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames10nowrapAttrE": __ZN7WebCore9HTMLNames10nowrapAttrE, "__ZN7WebCore11MathMLNames6mtdTagE": __ZN7WebCore11MathMLNames6mtdTagE, "__ZN7WebCore9HTMLNames5tdTagE": __ZN7WebCore9HTMLNames5tdTagE, "__ZN7WebCore9HTMLNames5thTagE": __ZN7WebCore9HTMLNames5thTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore9RenderBox11marginRightEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZNK7WebCore15RenderTableCell21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb","__ZNK7WebCore15RenderTableCell28computeCollapsedBeforeBorderENS_23IncludeBorderColorOrNotE","__ZN7WebCore15RenderBlockFlow26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZNK7WebCore15RenderBlockFlow21collapsedMarginBeforeEv","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZN7WebCore15RenderTableCell21willBeRemovedFromTreeEv","__ZNK7WebCore15RenderTableCell19parseRowSpanFromDOMEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZNK7WebCore15RenderTableCell10renderNameEv","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore15RenderTableCell12paddingRightEv","__ZNK7WebCore15RenderTableCell12borderBeforeEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZN7WebCore15RenderTableCell16sortBorderValuesERN3WTF6VectorINS_20CollapsedBorderValueELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore15RenderTableCell10borderLeftEv","__ZNK7WebCore15RenderTableCell13paddingBeforeEv","__ZNK7WebCore15RenderTableCell22styleOrColLogicalWidthEv","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE","__ZNK7WebCore12RenderObject7isImageEv","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore15RenderTableCell12borderBottomEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore15RenderTableCell15borderHalfStartEb","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZN7WebCore15RenderTableCell21paintCollapsedBordersERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore15RenderTableCell9borderEndEv","__ZNK7WebCore15RenderTableCell16borderHalfBottomEb","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore15RenderTableCell21collapsedBeforeBorderENS_23IncludeBorderColorOrNotE","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZN7WebCore15RenderTableCell19setCellLogicalWidthEi","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZN7WebCore15RenderTableCellC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore15RenderTableCell26hasEndBorderAdjoiningTableEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZNK7WebCore15RenderTableCell11isTableCellEv","__ZNK7WebCore15RenderTableCell32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZNK7WebCore9RenderBox9marginTopEv","__ZNK7WebCore15RenderTableCell15borderHalfRightEb","__ZNK7WebCore15RenderTableCell29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv","__ZNK7WebCore15RenderTableCell13borderHalfEndEb","__ZNK7WebCore15RenderTableCell28hasStartBorderAdjoiningTableEv","__ZN7WebCore15RenderTableCell33createAnonymousWithParentRendererEPKNS_12RenderObjectE","__ZNK7WebCore9RenderBox13requiresLayerEv","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv","__ZNK7WebCore15RenderTableCell16borderHalfBeforeEb","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZNK7WebCore15RenderBlockFlow14containsFloatsEv","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZNK7WebCore15RenderTableCell20collapsedStartBorderENS_23IncludeBorderColorOrNotE","__ZNK7WebCore15RenderBlockFlow31adjustInlineDirectionLineBoundsEiRfS1_","__ZNK7WebCore9RenderBox14hasControlClipEv","__ZNK7WebCore15RenderTableCell11borderStartEv","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore15RenderTableCell11paddingLeftEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv","__ZNK7WebCore11RenderBlock19virtualContinuationEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZNK7WebCore9RenderBox13intrinsicSizeEv","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore15RenderTableCell15borderHalfAfterEb","__ZNK7WebCore9RenderBox11offsetWidthEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore15RenderBlockFlow20collapsedMarginAfterEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZN7WebCore15RenderTableCell18updateLogicalWidthEv","__ZNK7WebCore15RenderTableCell36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE","__ZN3WTF6VectorIN7WebCore20CollapsedBorderValueELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore12RenderObject8isCanvasEv","__ZN7WebCore15RenderTableCell29alignTopBottomBorderPaintRectERiS1_","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZN7WebCore15RenderTableCellD1Ev","__ZN7WebCore15RenderTableCell44setOverrideLogicalContentHeightFromRowHeightENS_10LayoutUnitE","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZN7WebCoreL14compareBordersERKNS_20CollapsedBorderValueES2_","__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore15RenderTableCell11borderAfterEv","__ZNK7WebCore15RenderTableCell20collapsedAfterBorderENS_23IncludeBorderColorOrNotE","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore15RenderTableCell20cellBaselinePositionEv","__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE","__ZN7WebCore15RenderTableCell23colSpanOrRowSpanChangedEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","_memset","__ZN7WebCore15RenderTableCell9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore15RenderTableCell29computePreferredLogicalWidthsEv","__ZN7WebCore15RenderTableCellC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE","_memcpy","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore15RenderTableCell27computeCollapsedStartBorderENS_23IncludeBorderColorOrNotE","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE","__ZNK7WebCore9RenderBox18visualOverflowRectEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore15RenderTableCell23logicalWidthFromColumnsEPNS_14RenderTableColENS_6LengthE","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore15RenderTableCell19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore15RenderTableCell18collapsedEndBorderENS_23IncludeBorderColorOrNotE","__ZNK7WebCore9RenderBox10marginLeftEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZN7WebCore15RenderTableCell5paintERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore15RenderTableCell19collectBorderValuesERN3WTF6VectorINS_20CollapsedBorderValueELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE","__ZNK7WebCore15RenderTableCell25computeCollapsedEndBorderENS_23IncludeBorderColorOrNotE","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore10BorderDataeqERKS0_","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZNK7WebCore9RenderBox20contentLogicalHeightEv","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZNK7WebCore9RenderBox12marginBottomEv","__ZN7WebCore15RenderTableCell29alignLeftRightBorderPaintRectERiS1_","__ZNK7WebCore15RenderTableCell13borderHalfTopEb","__ZN7WebCore15RenderTableCell23computeIntrinsicPaddingEi","__ZN7WebCore15RenderTableCell17scrollbarsChangedEbb","__ZN7WebCore15RenderTableCell24updateColAndRowSpanFlagsEv","__ZNK7WebCore15RenderTableCell9borderTopEv","__ZNK7WebCore12RenderObject7isTableEv","__ZNK7WebCore15RenderTableCell27computeCollapsedAfterBorderENS_23IncludeBorderColorOrNotE","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZNK7WebCore15RenderTableCell13paddingBottomEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZNK7WebCore15RenderTableCell10paddingTopEv","__ZN7WebCore15RenderTableCell26paintBackgroundsBehindCellERNS_9PaintInfoERKNS_11LayoutPointEPNS_13RenderElementE","__ZNK7WebCore15RenderTableCell14borderHalfLeftEb","__ZNK7WebCore12RenderObject9isCounterEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore10LengthSizeeqERKS0_","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZNK7WebCore9RenderBox17borderBoundingBoxEv","__ZN7WebCore15RenderTableCell6layoutEv","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZN7WebCore15RenderTableCell19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore15RenderTableCell12paddingAfterEv","__ZN7WebCore15RenderTableCellD0Ev","__ZN7WebCore9RenderBox14stopAutoscrollEv","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZN7WebCoreL27compareBorderValuesForQSortEPKvS1_","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore9RenderBox12offsetHeightEv","__ZN7WebCore15RenderTableCell14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore15RenderTableCell11borderRightEv","__ZN7WebCoreL14addBorderStyleERN3WTF6VectorINS_20CollapsedBorderValueELj0ENS0_15CrashOnOverflowEEES2_","__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE"]

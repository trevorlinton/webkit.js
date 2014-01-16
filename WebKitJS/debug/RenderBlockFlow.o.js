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
var __ZN7WebCore15RenderBlockFlow10MarginInfoC1ERS0_NS_10LayoutUnitES3_;
var __ZN7WebCore15RenderBlockFlowC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore15RenderBlockFlowC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore15RenderBlockFlowD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE7infoMapEvE13staticInfoMap=(H_BASE+1216)|0;
  var __ZTVN7WebCore15RenderBlockFlowE=(H_BASE+8)|0;
  var __ZGVZN7WebCore10MappedInfoINS_9RenderBoxENS_16ShapeOutsideInfoEE7infoMapEvE13staticInfoMap=(H_BASE+1232)|0;
  var __ZTVN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataE=(H_BASE+1192)|0;
  var __ZN7WebCore11RenderBlock30s_canPropagateFloatIntoSiblingE=(H_BASE+1224)|0;
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
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15RenderBlockFlow11clearFloatsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 56 | 0;
 i9 = i2 + 64 | 0;
 i10 = i2 + 80 | 0;
 i11 = i2 + 104 | 0;
 i12 = i2 + 112 | 0;
 i13 = i2 + 120 | 0;
 i14 = i2 + 128 | 0;
 i15 = i2 + 136 | 0;
 i16 = i2 + 144 | 0;
 i17 = i2 + 152 | 0;
 i18 = i2 + 160 | 0;
 i19 = i2 + 168 | 0;
 i20 = i2 + 176 | 0;
 i21 = i2 + 184 | 0;
 i22 = i2 + 192 | 0;
 i23 = i2 + 200 | 0;
 i24 = i1 + 96 | 0;
 i25 = HEAP32[i24 >> 2] | 0;
 i26 = i1 + 20 | 0;
 if ((i25 | 0) != 0) {
  HEAP8[i25 + 56 | 0] = (HEAP32[i26 >> 2] | 0) >>> 13 & 1;
 }
 _memset(i7 | 0, 0, 20) | 0;
 i25 = i1 | 0;
 do {
  if ((HEAP32[i26 >> 2] & 2097152 | 0) == 0) {
   i27 = HEAP32[i24 >> 2] | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   i28 = HEAP32[i27 + 20 >> 2] | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   i27 = i7 | 0;
   i29 = i28;
   while (1) {
    i28 = HEAP32[i29 >> 2] | 0;
    if ((HEAP32[i28 + 28 >> 2] & 8 | 0) == 0) {
     HEAP32[i8 >> 2] = HEAP32[i28 >> 2];
     __ZN3WTF9HashTableIPN7WebCore9RenderBoxES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i9, i27, i8, i8);
    }
    i29 = HEAP32[i29 + 8 >> 2] | 0;
    if ((i29 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 972 >> 2] & 511](i1 | 0) | 0) {
   i30 = 15;
  } else {
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i8 | 0)) {
    i30 = 15;
    break;
   }
   i8 = HEAP32[i26 >> 2] | 0;
   if ((i8 & 768 | 0) == 768) {
    i30 = 15;
    break;
   }
   if ((i8 & 64 | 0) != 0 | (i8 & 25165824 | 0) == 16777216) {
    i30 = 15;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 188 >> 2] & 511](i25) | 0) {
    i30 = 15;
    break;
   }
   _memset(i10 | 0, 0, 20) | 0;
   i8 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     if ((HEAP32[i26 >> 2] & 2097152 | 0) == 0) {
      __ZN7WebCore15FloatingObjects5clearEv(i8);
      break;
     } else {
      __ZN7WebCore15FloatingObjects21moveAllToFloatInfoMapERN3WTF7HashMapIPNS_9RenderBoxENSt3__110unique_ptrINS_14FloatingObjectENS5_14default_deleteIS7_EEEENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EENSD_ISA_EEEE(i8, i10);
      break;
     }
    }
   } while (0);
   i8 = HEAP32[i1 + 8 >> 2] | 0;
   L26 : do {
    if ((i8 | 0) != 0) {
     if ((HEAP32[i8 + 24 >> 2] & 32 | 0) == 0) {
      break;
     }
     i9 = i8;
     i29 = HEAP32[i1 + 12 >> 2] | 0;
     L29 : do {
      if ((i29 | 0) == 0) {
       i31 = 0;
       i32 = 0;
       i33 = 0;
      } else {
       i27 = 0;
       i28 = i29;
       while (1) {
        i34 = i28 + 20 | 0;
        i35 = HEAP32[i34 >> 2] | 0;
        do {
         if ((i35 & 64 | 0) != 0 | (i35 & 25165824 | 0) == 16777216) {
          i36 = i35;
         } else {
          if ((i35 & 512 | 0) == 0 | (i35 & 768 | 0) == 256) {
           i36 = i35;
           break;
          }
          if ((HEAP32[i28 + 24 >> 2] & 32 | 0) == 0) {
           i36 = i35;
           break;
          }
          if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 972 >> 2] & 511](i28) | 0)) {
           i31 = i27;
           i32 = i28;
           i33 = 1;
           break L29;
          }
          i36 = HEAP32[i34 >> 2] | 0;
         }
        } while (0);
        i34 = (i36 & 64 | 0) != 0 | i27;
        i35 = HEAP32[i28 + 12 >> 2] | 0;
        if ((i35 | 0) == 0) {
         i31 = i34;
         i32 = 0;
         i33 = 0;
         break;
        } else {
         i27 = i34;
         i28 = i35;
        }
       }
      }
     } while (0);
     i29 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i29 | 0) == 3 | (i29 | 0) == 0) {
      i37 = i1 + 48 | 0;
     } else {
      i37 = i1 + 44 | 0;
     }
     i29 = HEAP32[i37 >> 2] | 0;
     do {
      if (i31) {
       i30 = 47;
      } else {
       i28 = HEAP32[i8 + 96 >> 2] | 0;
       do {
        if ((i28 | 0) == 0) {
         i38 = 0;
        } else {
         i27 = HEAP32[i28 + 20 >> 2] | 0;
         if ((i27 | 0) == 0) {
          i38 = 0;
          break;
         }
         i35 = i8 + 20 | 0;
         i34 = i27;
         i27 = 0;
         while (1) {
          i39 = HEAP32[i34 >> 2] | 0;
          i40 = HEAP32[i39 + 28 >> 2] | 0;
          if ((i40 & 16 | 0) == 0 | (i40 & 3 | 0) == 0) {
           i41 = i27;
          } else {
           if ((HEAP32[i35 >> 2] & 8192 | 0) == 0) {
            i42 = (HEAP32[i39 + 16 >> 2] | 0) + (HEAP32[i39 + 8 >> 2] | 0) | 0;
           } else {
            i42 = (HEAP32[i39 + 20 >> 2] | 0) + (HEAP32[i39 + 12 >> 2] | 0) | 0;
           }
           i41 = (i27 | 0) < (i42 | 0) ? i42 : i27;
          }
          i39 = HEAP32[i34 + 8 >> 2] | 0;
          if ((i39 | 0) == 0) {
           i38 = i41;
           break;
          } else {
           i34 = i39;
           i27 = i41;
          }
         }
        }
       } while (0);
       if ((i38 | 0) <= (i29 | 0) | i33 ^ 1) {
        break;
       }
       if (__ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv(i32) | 0) {
        i30 = 47;
       }
      }
     } while (0);
     if ((i30 | 0) == 47) {
      i28 = i8;
      i27 = HEAP32[i8 >> 2] | 0;
      if ((HEAP32[i8 + 20 >> 2] & 8192 | 0) == 0) {
       i34 = FUNCTION_TABLE_ii[HEAP32[i27 + 736 >> 2] & 511](i28) | 0;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 704 >> 2] & 127](i4, i28);
       HEAP32[i11 >> 2] = (HEAP32[i4 >> 2] | 0) + i34;
      } else {
       i34 = FUNCTION_TABLE_ii[HEAP32[i27 + 744 >> 2] & 511](i28) | 0;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 712 >> 2] & 127](i3, i28);
       HEAP32[i11 >> 2] = (HEAP32[i3 >> 2] | 0) + i34;
      }
      HEAP32[i12 >> 2] = i29;
      __ZN7WebCore15RenderBlockFlow18addIntrudingFloatsEPS0_NS_10LayoutUnitES2_(i1, i9, i11, i12);
     }
     do {
      if (i33) {
       i34 = (HEAP32[(HEAP32[i32 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
       if ((i34 | 0) == 3 | (i34 | 0) == 0) {
        i43 = i32 + 48 | 0;
       } else {
        i43 = i32 + 44 | 0;
       }
       i44 = i32;
       i45 = 0;
       i46 = i29 - (HEAP32[i43 >> 2] | 0) | 0;
      } else {
       i34 = i8 | 0;
       i28 = i8;
       i27 = HEAP32[i8 >> 2] | 0;
       if ((HEAP32[i8 + 20 >> 2] & 8192 | 0) == 0) {
        i35 = FUNCTION_TABLE_ii[HEAP32[i27 + 736 >> 2] & 511](i28) | 0;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 704 >> 2] & 127](i6, i28);
        i44 = i34;
        i45 = (HEAP32[i6 >> 2] | 0) + i35 | 0;
        i46 = i29;
        break;
       } else {
        i35 = FUNCTION_TABLE_ii[HEAP32[i27 + 744 >> 2] & 511](i28) | 0;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 712 >> 2] & 127](i5, i28);
        i44 = i34;
        i45 = (HEAP32[i5 >> 2] | 0) + i35 | 0;
        i46 = i29;
        break;
       }
      }
     } while (0);
     i29 = i44;
     i9 = HEAP32[i44 + 96 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i35 = HEAP32[i9 + 20 >> 2] | 0;
       if ((i35 | 0) == 0) {
        i47 = 0;
       } else {
        i34 = i44 + 20 | 0;
        i28 = i35;
        i35 = 0;
        while (1) {
         i27 = HEAP32[i28 >> 2] | 0;
         i39 = HEAP32[i27 + 28 >> 2] | 0;
         if ((i39 & 16 | 0) == 0 | (i39 & 3 | 0) == 0) {
          i48 = i35;
         } else {
          if ((HEAP32[i34 >> 2] & 8192 | 0) == 0) {
           i49 = (HEAP32[i27 + 16 >> 2] | 0) + (HEAP32[i27 + 8 >> 2] | 0) | 0;
          } else {
           i49 = (HEAP32[i27 + 20 >> 2] | 0) + (HEAP32[i27 + 12 >> 2] | 0) | 0;
          }
          i48 = (i35 | 0) < (i49 | 0) ? i49 : i35;
         }
         i27 = HEAP32[i28 + 8 >> 2] | 0;
         if ((i27 | 0) == 0) {
          i47 = i48;
          break;
         } else {
          i28 = i27;
          i35 = i48;
         }
        }
       }
       if ((i47 | 0) <= (i46 | 0)) {
        break;
       }
       HEAP32[i13 >> 2] = i45;
       HEAP32[i14 >> 2] = i46;
       __ZN7WebCore15RenderBlockFlow18addIntrudingFloatsEPS0_NS_10LayoutUnitES2_(i1, i29, i13, i14);
      }
     } while (0);
     if ((HEAP32[i26 >> 2] & 2097152 | 0) == 0) {
      i29 = i7 + 12 | 0;
      i9 = HEAP32[i29 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      i35 = HEAP32[i24 >> 2] | 0;
      if ((HEAP32[i35 + 12 >> 2] | 0) < (i9 | 0)) {
       __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i1, 0, 1);
       break;
      }
      i9 = HEAP32[i35 + 20 >> 2] | 0;
      if ((i9 | 0) != 0) {
       i35 = i9;
       i9 = 0;
       while (1) {
        if (i9) {
         break L26;
        }
        HEAP32[i23 >> 2] = HEAP32[HEAP32[i35 >> 2] >> 2];
        __ZN3WTF7HashSetIPN7WebCore9RenderBoxENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i7, i23) | 0;
        i35 = HEAP32[i35 + 8 >> 2] | 0;
        i9 = (HEAP32[i29 >> 2] | 0) == 0;
        if ((i35 | 0) == 0) {
         break;
        }
       }
       if (i9) {
        break;
       }
      }
      __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i1, 0, 1);
      break;
     }
     HEAP32[i15 >> 2] = 2147483647;
     HEAP32[i16 >> 2] = -2147483648;
     i35 = HEAP32[i24 >> 2] | 0;
     do {
      if ((i35 | 0) == 0) {
       i50 = 2147483647;
       i51 = -2147483648;
      } else {
       i29 = HEAP32[i35 + 20 >> 2] | 0;
       if ((i29 | 0) == 0) {
        i50 = 2147483647;
        i51 = -2147483648;
        break;
       }
       i28 = i17 | 0;
       i34 = i22;
       i27 = i21;
       i39 = i15;
       i40 = i16;
       i52 = i20;
       i53 = i19;
       i54 = i29;
       i29 = 2147483647;
       i55 = -2147483648;
       while (1) {
        i56 = HEAP32[i54 >> 2] | 0;
        HEAP32[i18 >> 2] = HEAP32[i56 >> 2];
        __ZN3WTF7HashMapIPN7WebCore9RenderBoxENSt3__110unique_ptrINS1_14FloatingObjectENS4_14default_deleteIS6_EEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSC_IS9_EEE4takeERKS3_(i17, i10, i18);
        i57 = HEAP32[i26 >> 2] | 0;
        i58 = (i57 & 8192 | 0) == 0;
        if (i58) {
         i59 = (HEAP32[i56 + 16 >> 2] | 0) + (HEAP32[i56 + 8 >> 2] | 0) | 0;
        } else {
         i59 = (HEAP32[i56 + 20 >> 2] | 0) + (HEAP32[i56 + 12 >> 2] | 0) | 0;
        }
        HEAP32[i19 >> 2] = i59;
        i60 = HEAP32[i28 >> 2] | 0;
        do {
         if ((i60 | 0) == 0) {
          HEAP32[i15 >> 2] = 0;
          i61 = (i55 | 0) < (i59 | 0) ? i59 : i55;
          HEAP32[i16 >> 2] = i61;
          HEAP32[i28 >> 2] = 0;
          i62 = i61;
          i63 = 0;
         } else {
          if (i58) {
           i61 = i60 + 16 | 0;
           i64 = (HEAP32[i61 >> 2] | 0) + (HEAP32[i60 + 8 >> 2] | 0) | 0;
           i65 = i61;
           i66 = i60 + 20 | 0;
          } else {
           i61 = i60 + 20 | 0;
           i64 = (HEAP32[i61 >> 2] | 0) + (HEAP32[i60 + 12 >> 2] | 0) | 0;
           i65 = i60 + 16 | 0;
           i66 = i61;
          }
          HEAP32[i20 >> 2] = i64;
          do {
           if ((HEAP32[(i58 ? i56 + 20 | 0 : i56 + 16 | 0) >> 2] | 0) == (HEAP32[(i58 ? i66 : i65) >> 2] | 0)) {
            i61 = i56 + 8 | 0;
            i67 = i56 + 12 | 0;
            i68 = i60 + 8 | 0;
            i69 = i60 + 12 | 0;
            if ((HEAP32[(i58 ? i67 : i61) >> 2] | 0) != (HEAP32[(i58 ? i69 : i68) >> 2] | 0)) {
             i30 = 83;
             break;
            }
            if ((i59 | 0) == (i64 | 0)) {
             i70 = i29;
             i71 = i55;
            } else {
             i72 = (i64 | 0) < (i59 | 0) ? i52 : i53;
             i73 = HEAP32[((HEAP32[i72 >> 2] | 0) < (i29 | 0) ? i72 : i39) >> 2] | 0;
             HEAP32[i15 >> 2] = i73;
             i72 = (i59 | 0) < (i64 | 0) ? i52 : i53;
             i74 = HEAP32[((i55 | 0) < (HEAP32[i72 >> 2] | 0) ? i72 : i40) >> 2] | 0;
             HEAP32[i16 >> 2] = i74;
             i70 = i73;
             i71 = i74;
            }
            i74 = HEAP32[(i58 ? i61 : i67) >> 2] | 0;
            HEAP32[i21 >> 2] = i74;
            i67 = HEAP32[(i58 ? i68 : i69) >> 2] | 0;
            HEAP32[i22 >> 2] = i67;
            if ((i74 | 0) == (i67 | 0)) {
             i75 = i70;
             i76 = i71;
             break;
            }
            i69 = (i67 | 0) < (i74 | 0) ? i34 : i27;
            i68 = HEAP32[((HEAP32[i69 >> 2] | 0) < (i70 | 0) ? i69 : i39) >> 2] | 0;
            HEAP32[i15 >> 2] = i68;
            i69 = (i74 | 0) < (i67 | 0) ? i34 : i27;
            i67 = HEAP32[((i71 | 0) < (HEAP32[i69 >> 2] | 0) ? i69 : i40) >> 2] | 0;
            HEAP32[i16 >> 2] = i67;
            i75 = i68;
            i76 = i67;
           } else {
            i30 = 83;
           }
          } while (0);
          if ((i30 | 0) == 83) {
           i30 = 0;
           HEAP32[i15 >> 2] = 0;
           i67 = (i59 | 0) < (i64 | 0) ? i64 : i59;
           i68 = (i55 | 0) < (i67 | 0) ? i67 : i55;
           HEAP32[i16 >> 2] = i68;
           i75 = 0;
           i76 = i68;
          }
          i68 = HEAP32[i60 + 4 >> 2] | 0;
          do {
           if ((i68 | 0) != 0) {
            if ((i57 & 1 | 0) != 0) {
             break;
            }
            FUNCTION_TABLE_vii[HEAP32[(HEAP32[i68 >> 2] | 0) + 100 >> 2] & 127](i68 | 0, 1);
           }
          } while (0);
          HEAP32[i28 >> 2] = 0;
          if ((i60 | 0) == 0) {
           i62 = i76;
           i63 = i75;
           break;
          }
          __ZN3WTF8fastFreeEPv(i60);
          i62 = i76;
          i63 = i75;
         }
        } while (0);
        i60 = HEAP32[i54 + 8 >> 2] | 0;
        if ((i60 | 0) == 0) {
         i50 = i63;
         i51 = i62;
         break;
        } else {
         i54 = i60;
         i29 = i63;
         i55 = i62;
        }
       }
      }
     } while (0);
     i35 = HEAP32[i10 >> 2] | 0;
     i9 = HEAP32[i10 + 4 >> 2] | 0;
     i55 = i35 + (i9 << 3) | 0;
     L139 : do {
      if ((HEAP32[i10 + 12 >> 2] | 0) == 0) {
       i77 = i50;
       i78 = i51;
      } else {
       L141 : do {
        if ((i9 | 0) == 0) {
         i79 = i35;
        } else {
         i29 = i35;
         while (1) {
          i54 = HEAP32[i29 >> 2] | 0;
          if (!((i54 | 0) == (-1 | 0) | (i54 | 0) == 0)) {
           i79 = i29;
           break L141;
          }
          i54 = i29 + 8 | 0;
          if ((i54 | 0) == (i55 | 0)) {
           i77 = i50;
           i78 = i51;
           break L139;
          } else {
           i29 = i54;
          }
         }
        }
       } while (0);
       if ((i79 | 0) == (i55 | 0)) {
        i77 = i50;
        i78 = i51;
        break;
       } else {
        i80 = i79;
        i81 = i50;
        i82 = i51;
       }
       while (1) {
        i29 = HEAP32[i80 + 4 >> 2] | 0;
        if ((HEAP32[i29 + 28 >> 2] & 8 | 0) == 0) {
         HEAP32[i15 >> 2] = 0;
         if ((HEAP32[i26 >> 2] & 8192 | 0) == 0) {
          i83 = (HEAP32[i29 + 16 >> 2] | 0) + (HEAP32[i29 + 8 >> 2] | 0) | 0;
         } else {
          i83 = (HEAP32[i29 + 20 >> 2] | 0) + (HEAP32[i29 + 12 >> 2] | 0) | 0;
         }
         i29 = (i82 | 0) < (i83 | 0) ? i83 : i82;
         HEAP32[i16 >> 2] = i29;
         i84 = 0;
         i85 = i29;
        } else {
         i84 = i81;
         i85 = i82;
        }
        i29 = i80 + 8 | 0;
        if ((i29 | 0) == (i55 | 0)) {
         i77 = i84;
         i78 = i85;
         break L139;
        } else {
         i86 = i29;
        }
        while (1) {
         i29 = HEAP32[i86 >> 2] | 0;
         if (!((i29 | 0) == (-1 | 0) | (i29 | 0) == 0)) {
          break;
         }
         i29 = i86 + 8 | 0;
         if ((i29 | 0) == (i55 | 0)) {
          i77 = i84;
          i78 = i85;
          break L139;
         } else {
          i86 = i29;
         }
        }
        if ((i86 | 0) == (i55 | 0)) {
         i77 = i84;
         i78 = i85;
         break;
        } else {
         i80 = i86;
         i81 = i84;
         i82 = i85;
        }
       }
      }
     } while (0);
     if ((i77 | 0) >= (i78 | 0)) {
      break;
     }
     i55 = HEAP32[i1 + 108 >> 2] | 0;
     i35 = i55;
     L161 : do {
      if ((i55 | 0) == 0 | (i78 | 0) == 2147483647) {
       i87 = i35;
      } else {
       i9 = i35;
       i29 = i35;
       while (1) {
        if ((HEAP32[i9 + 84 >> 2] | 0) < (i78 | 0)) {
         i87 = i29;
         break L161;
        }
        i54 = HEAP32[i9 + 48 >> 2] | 0;
        if ((i54 | 0) == 0) {
         i87 = i9;
         break;
        } else {
         i29 = i9;
         i9 = i54;
        }
       }
      }
     } while (0);
     if ((i87 | 0) == 0) {
      break;
     } else {
      i88 = i87;
     }
     while (1) {
      i35 = HEAP32[i88 + 84 >> 2] | 0;
      if (!((i35 | 0) >= (i77 | 0) | (i35 | 0) < 0)) {
       break L26;
      }
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i88 >> 2] | 0) + 100 >> 2] & 127](i88 | 0, 1);
      i88 = HEAP32[i88 + 48 >> 2] | 0;
      if ((i88 | 0) == 0) {
       break;
      }
     }
    }
   } while (0);
   i8 = HEAP32[i10 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i35 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i35 | 0) > 0) {
    i55 = 0;
    while (1) {
     do {
      if ((HEAP32[i8 + (i55 << 3) >> 2] | 0) != -1) {
       i9 = i8 + (i55 << 3) + 4 | 0;
       i29 = HEAP32[i9 >> 2] | 0;
       HEAP32[i9 >> 2] = 0;
       if ((i29 | 0) == 0) {
        break;
       }
       __ZN3WTF8fastFreeEPv(i29);
      }
     } while (0);
     i55 = i55 + 1 | 0;
     if ((i55 | 0) >= (i35 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 do {
  if ((i30 | 0) == 15) {
   i10 = HEAP32[i24 >> 2] | 0;
   if ((i10 | 0) != 0) {
    __ZN7WebCore15FloatingObjects5clearEv(i10);
   }
   if ((HEAP32[i7 + 12 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i1, 0, 1);
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15RenderBlockFlow15collapseMarginsERNS_9RenderBoxERNS0_10MarginInfoE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 72 | 0;
 i14 = i5 + 80 | 0;
 i15 = i5 + 88 | 0;
 i16 = i5 + 96 | 0;
 i17 = i5 + 104 | 0;
 i18 = i5 + 112 | 0;
 i19 = i5 + 120 | 0;
 i20 = i5 + 128 | 0;
 i21 = i3 + 8 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 i23 = (i22 | 0) == 0;
 do {
  if (i23) {
   i24 = 6;
  } else {
   i25 = HEAP32[i3 + 36 >> 2] | 0;
   if (((HEAP32[i25 + 44 >> 2] ^ HEAP32[(HEAP32[i22 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    i24 = 6;
    break;
   }
   i26 = (HEAP32[i3 + 24 >> 2] & 32 | 0) == 0;
   i27 = (HEAP32[(HEAP32[i25 + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728;
   if (i26 | i27) {
    i28 = i27 | i26 ^ 1;
    break;
   }
   i26 = HEAP32[i3 + 100 >> 2] | 0;
   if ((i26 | 0) == 0) {
    i28 = 0;
    break;
   }
   i28 = (HEAP8[i26 + 32 | 0] & 1) != 0;
  }
 } while (0);
 do {
  if ((i24 | 0) == 6) {
   if ((HEAP32[i3 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0) {
    i28 = 0;
    break;
   }
   i26 = (HEAP32[i3 + 24 >> 2] & 32 | 0) == 0;
   i27 = (HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 536870912;
   if (i26 | i27) {
    i28 = i27 | i26 ^ 1;
    break;
   }
   i26 = HEAP32[i3 + 100 >> 2] | 0;
   if ((i26 | 0) == 0) {
    i28 = 0;
    break;
   }
   i28 = (HEAP8[i26 + 32 | 0] & 2) != 0;
  }
 } while (0);
 do {
  if (i23) {
   i24 = 15;
  } else {
   i26 = HEAP32[i3 + 36 >> 2] | 0;
   if (((HEAP32[i26 + 44 >> 2] ^ HEAP32[(HEAP32[i22 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    i24 = 15;
    break;
   }
   i27 = (HEAP32[i3 + 24 >> 2] & 32 | 0) == 0;
   i25 = (HEAP32[(HEAP32[i26 + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 536870912;
   if (i27 | i25) {
    i29 = i25 | i27 ^ 1;
    break;
   }
   i27 = HEAP32[i3 + 100 >> 2] | 0;
   if ((i27 | 0) == 0) {
    i29 = 0;
    break;
   }
   i29 = (HEAP8[i27 + 32 | 0] & 2) != 0;
  }
 } while (0);
 do {
  if ((i24 | 0) == 15) {
   if ((HEAP32[i3 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0) {
    i29 = 0;
    break;
   }
   i22 = (HEAP32[i3 + 24 >> 2] & 32 | 0) == 0;
   i23 = (HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728;
   if (i22 | i23) {
    i29 = i23 | i22 ^ 1;
    break;
   }
   i22 = HEAP32[i3 + 100 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i29 = 0;
    break;
   }
   i29 = (HEAP8[i22 + 32 | 0] & 1) != 0;
  }
 } while (0);
 i22 = i3;
 i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 852 >> 2] & 511](i3) | 0;
 if (i28) {
  i30 = 1;
 } else {
  i30 = i29 & i23;
 }
 __ZNK7WebCore15RenderBlockFlow20marginValuesForChildERNS_9RenderBoxE(i12, i2, i3);
 i28 = HEAP32[i12 >> 2] | 0;
 i27 = HEAP32[i12 + 4 >> 2] | 0;
 if (i23) {
  i25 = HEAP32[i12 + 8 >> 2] | 0;
  i26 = HEAP32[i12 + 12 >> 2] | 0;
  i31 = (i28 | 0) < (i25 | 0) ? i25 : i28;
  i32 = (i27 | 0) < (i26 | 0) ? i26 : i27;
 } else {
  i31 = i28;
  i32 = i27;
 }
 i26 = i2 | 0;
 i25 = __ZNK7WebCore11RenderBlock20hasMarginBeforeQuirkERKNS_9RenderBoxE(i26, i3) | 0;
 i33 = i4 | 0;
 i34 = HEAP8[i33] | 0;
 L29 : do {
  if ((i34 & 18) == 18) {
   do {
    if (!i30) {
     i35 = i33 + 1 | 0;
     i36 = HEAP8[i35] | 0;
     if ((i36 & 2) != 0) {
      break;
     }
     if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0) {
      if ((i34 & 8) == 0 | i25 ^ 1) {
       i24 = 28;
      } else {
       i37 = i36;
      }
     } else {
      i24 = 28;
     }
     if ((i24 | 0) == 28) {
      i36 = i2 + 100 | 0;
      i38 = HEAP32[i36 >> 2] | 0;
      do {
       if ((i38 | 0) == 0) {
        i39 = i8;
        _llvm_lifetime_start(4, 0, i39 | 0);
        __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i7, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
        HEAP32[i8 >> 2] = 0;
        i40 = HEAP32[((HEAP32[i7 >> 2] | 0) < 0 ? i8 : i7) >> 2] | 0;
        _llvm_lifetime_end(4, 0, i39 | 0);
        i39 = HEAP32[i36 >> 2] | 0;
        HEAP32[i13 >> 2] = (i31 | 0) < (i40 | 0) ? i40 : i31;
        if ((i39 | 0) != 0) {
         i41 = i39;
         i24 = 31;
         break;
        }
        __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i6, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
        i39 = HEAP32[i6 >> 2] | 0;
        i42 = (i39 | 0) > 0 ? 0 : -i39 | 0;
       } else {
        i39 = HEAP32[i38 + 4 >> 2] | 0;
        HEAP32[i13 >> 2] = (i31 | 0) < (i39 | 0) ? i39 : i31;
        i41 = i38;
        i24 = 31;
       }
      } while (0);
      if ((i24 | 0) == 31) {
       i42 = HEAP32[i41 + 8 >> 2] | 0;
      }
      HEAP32[i14 >> 2] = (i32 | 0) < (i42 | 0) ? i42 : i32;
      __ZN7WebCore15RenderBlockFlow24setMaxMarginBeforeValuesENS_10LayoutUnitES1_(i2, i13, i14);
      i37 = HEAP8[i35] | 0;
     }
     if ((i37 & 1) != 0 | i25 | (i31 | 0) == (i32 | 0)) {
      i43 = i37;
     } else {
      i38 = i2 + 92 | 0;
      HEAP32[i38 >> 2] = HEAP32[i38 >> 2] & -33554433;
      i38 = HEAP8[i35] | 1;
      HEAP8[i35] = i38;
      i43 = i38;
     }
     if ((i43 & 1) != 0 | i25 ^ 1) {
      break L29;
     }
     __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i15, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     if ((HEAP32[i15 >> 2] | 0) != 0) {
      break L29;
     }
     i38 = i2 + 92 | 0;
     HEAP32[i38 >> 2] = HEAP32[i38 >> 2] | 33554432;
     break L29;
    }
   } while (0);
   if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728) {
    break;
   }
   i38 = i2 + 100 | 0;
   i36 = HEAP32[i38 >> 2] | 0;
   do {
    if ((i36 | 0) == 0) {
     i39 = __ZN3WTF10fastMallocEj(36) | 0;
     __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i39, i2);
     i40 = HEAP32[i38 >> 2] | 0;
     HEAP32[i38 >> 2] = i39;
     if ((i40 | 0) == 0) {
      i44 = i39;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] & 63](i40);
     i44 = HEAP32[i38 >> 2] | 0;
    } else {
     i44 = i36;
    }
   } while (0);
   i36 = i44 + 32 | 0;
   HEAP8[i36] = HEAP8[i36] | 1;
  }
 } while (0);
 if (i30) {
  i44 = i33 + 1 | 0;
  HEAP8[i44] = HEAP8[i44] | 2;
  HEAP32[i4 + 4 >> 2] = 0;
  HEAP32[i4 + 8 >> 2] = 0;
 }
 i44 = HEAP8[i33] | 0;
 if ((i44 & 24) != 24 | (i31 | 0) == (i32 | 0)) {
  i45 = i44;
 } else {
  i15 = i44 & -65 | (i25 & 1) << 6;
  HEAP8[i33] = i15;
  i45 = i15;
 }
 i15 = i2 + 36 | 0;
 i25 = (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i25 | 0) == 3 | (i25 | 0) == 0) {
  i46 = i2 + 56 | 0;
 } else {
  i46 = i2 + 52 | 0;
 }
 i25 = HEAP32[i46 >> 2] | 0;
 i46 = i1 | 0;
 HEAP32[i46 >> 2] = i25;
 i44 = i3 | 0;
 i43 = HEAP32[i3 + 12 >> 2] | 0;
 if ((i45 & 16) == 0) {
  i47 = 0;
 } else {
  i47 = (i45 & 2) != 0;
 }
 i45 = (i43 | 0) == 0;
 do {
  if (i47 | i45) {
   i48 = 0;
  } else {
   if ((HEAP32[i43 + 20 >> 2] & 768 | 0) == 256) {
    i48 = 0;
    break;
   }
   if ((HEAP32[i43 + 24 >> 2] & 32 | 0) == 0) {
    i48 = 0;
    break;
   }
   i37 = i43;
   if (!(__ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv(i43) | 0)) {
    i48 = 0;
    break;
   }
   i14 = HEAP32[i43 + 8 >> 2] | 0;
   i13 = i14;
   do {
    if ((i14 | 0) == 0) {
     i49 = 0;
    } else {
     i42 = HEAP32[i43 + 36 >> 2] | 0;
     if ((HEAP32[i42 + 48 >> 2] & 3145728 | 0) == 0) {
      i49 = 0;
      break;
     }
     i41 = i43;
     i6 = (HEAP32[i42 + 44 >> 2] | 0) >>> 13 & 3;
     if ((i6 | 0) == 3 | (i6 | 0) == 0) {
      HEAP32[i9 >> 2] = HEAP32[i43 + 56 >> 2];
     } else {
      HEAP32[i9 >> 2] = HEAP32[i43 + 52 >> 2];
     }
     __ZN7WebCore15RenderBlockFlow13getClearDeltaERNS_9RenderBoxENS_10LayoutUnitE(i10, i13, i41, i9);
     if ((HEAP32[i10 >> 2] | 0) == 0) {
      i49 = 0;
      break;
     }
     __ZNK7WebCore15RenderBlockFlow20marginValuesForChildERNS_9RenderBoxE(i11, i37, i41);
     i49 = HEAP32[i11 >> 2] | 0;
    }
   } while (0);
   i37 = (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i37 | 0) == 3 | (i37 | 0) == 0) {
    i50 = i2 + 56 | 0;
   } else {
    i50 = i2 + 52 | 0;
   }
   i13 = (HEAP32[i50 >> 2] | 0) - i49 | 0;
   if ((i37 | 0) == 3 | (i37 | 0) == 0) {
    HEAP32[i2 + 56 >> 2] = i13;
    i48 = i49;
    break;
   } else {
    HEAP32[i2 + 52 >> 2] = i13;
    i48 = i49;
    break;
   }
  }
 } while (0);
 do {
  if (i23) {
   if (i30) {
    i51 = i25;
    break;
   }
   if ((HEAP8[i33 + 1 | 0] & 2) != 0) {
    i51 = i25;
    break;
   }
   i49 = i4 + 4 | 0;
   i50 = HEAP32[i49 >> 2] | 0;
   i11 = (i50 | 0) < (i28 | 0) ? i28 : i50;
   i50 = i4 + 8 | 0;
   i10 = HEAP32[i50 >> 2] | 0;
   i9 = (i10 | 0) < (i27 | 0) ? i27 : i10;
   HEAP32[i49 >> 2] = i11;
   HEAP32[i50 >> 2] = i9;
   i10 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i10 | 0) > (i11 | 0)) {
    HEAP32[i49 >> 2] = i10;
   }
   i10 = HEAP32[i12 + 12 >> 2] | 0;
   if ((i10 | 0) > (i9 | 0)) {
    HEAP32[i50 >> 2] = i10;
   }
   if ((HEAP8[i33] & 18) == 18) {
    i51 = i25;
    break;
   }
   i10 = (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i10 | 0) == 3 | (i10 | 0) == 0) {
    i52 = i2 + 56 | 0;
   } else {
    i52 = i2 + 52 | 0;
   }
   i10 = i11 - i9 + (HEAP32[i52 >> 2] | 0) | 0;
   HEAP32[i46 >> 2] = i10;
   i51 = i10;
  } else {
   i10 = HEAP32[i3 + 36 >> 2] | 0;
   i9 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i24 = 84;
    } else {
     if (((HEAP32[i10 + 44 >> 2] ^ HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
      i24 = 84;
      break;
     }
     if ((HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 67108864) {
      i24 = 87;
     } else {
      i24 = 99;
     }
    }
   } while (0);
   do {
    if ((i24 | 0) == 84) {
     if ((HEAP32[i3 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0) {
      i24 = 99;
      break;
     }
     if ((HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 268435456) {
      i24 = 87;
     } else {
      i24 = 99;
     }
    }
   } while (0);
   L101 : do {
    if ((i24 | 0) == 87) {
     if ((HEAP8[i33] & 18) == 18) {
      i53 = 0;
     } else {
      i53 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i4 + 8 >> 2] | 0) | 0;
     }
     i10 = HEAP32[i15 >> 2] | 0;
     i9 = (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3;
     if ((i9 | 0) == 3 | (i9 | 0) == 0) {
      i54 = i2 + 56 | 0;
     } else {
      i54 = i2 + 52 | 0;
     }
     i9 = (HEAP32[i54 >> 2] | 0) + i53 | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 784 >> 2] & 127](i16, i3 | 0, i10);
     i10 = i9 + (HEAP32[i16 >> 2] | 0) | 0;
     i9 = (HEAP32[i15 >> 2] | 0) + 44 | 0;
     i11 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
     if ((i11 | 0) == 3 | (i11 | 0) == 0) {
      HEAP32[i2 + 56 >> 2] = i10;
     } else {
      HEAP32[i2 + 52 >> 2] = i10;
     }
     i10 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
     if ((i10 | 0) == 3 | (i10 | 0) == 0) {
      i55 = i2 + 56 | 0;
     } else {
      i55 = i2 + 52 | 0;
     }
     i10 = HEAP32[i55 >> 2] | 0;
     HEAP32[i46 >> 2] = i10;
     i56 = i10;
     i57 = i33 + 1 | 0;
    } else if ((i24 | 0) == 99) {
     i10 = i33 + 1 | 0;
     if ((HEAP8[i10] & 2) != 0) {
      i56 = i25;
      i57 = i10;
      break;
     }
     i9 = HEAP8[i33] | 0;
     do {
      if ((i9 & 16) != 0) {
       if ((i9 & 2) != 0) {
        i56 = i25;
        i57 = i10;
        break L101;
       }
       if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) != 0) {
        break;
       }
       if ((i9 & 72) == 72) {
        i56 = i25;
        i57 = i10;
        break L101;
       }
      }
     } while (0);
     i9 = (HEAP32[i15 >> 2] | 0) + 44 | 0;
     i35 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
     if ((i35 | 0) == 3 | (i35 | 0) == 0) {
      i58 = i2 + 56 | 0;
     } else {
      i58 = i2 + 52 | 0;
     }
     i11 = HEAP32[i4 + 4 >> 2] | 0;
     i50 = HEAP32[i4 + 8 >> 2] | 0;
     i49 = ((i11 | 0) < (i31 | 0) ? i31 : i11) + (HEAP32[i58 >> 2] | 0) - ((i50 | 0) < (i32 | 0) ? i32 : i50) | 0;
     if ((i35 | 0) == 3 | (i35 | 0) == 0) {
      HEAP32[i2 + 56 >> 2] = i49;
     } else {
      HEAP32[i2 + 52 >> 2] = i49;
     }
     i49 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
     if ((i49 | 0) == 3 | (i49 | 0) == 0) {
      i59 = i2 + 56 | 0;
     } else {
      i59 = i2 + 52 | 0;
     }
     i49 = HEAP32[i59 >> 2] | 0;
     HEAP32[i46 >> 2] = i49;
     i56 = i49;
     i57 = i10;
    }
   } while (0);
   HEAP8[i57] = HEAP8[i57] & -3 | (i29 & 1) << 1;
   if (i29) {
    HEAP32[i4 + 4 >> 2] = 0;
    HEAP32[i4 + 8 >> 2] = 0;
    i51 = i56;
    break;
   }
   i49 = HEAP32[i12 + 8 >> 2] | 0;
   HEAP32[i4 + 4 >> 2] = i49;
   i9 = HEAP32[i12 + 12 >> 2] | 0;
   HEAP32[i4 + 8 >> 2] = i9;
   if ((i49 | 0) == (i9 | 0)) {
    i51 = i56;
    break;
   }
   i9 = ((__ZNK7WebCore11RenderBlock19hasMarginAfterQuirkERKNS_9RenderBoxE(i26, i3) | 0) & 1) << 7;
   HEAP8[i33] = HEAP8[i33] & 127 | i9;
   i51 = i56;
  }
 } while (0);
 i56 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 do {
  if ((HEAP8[i56 | 0] & 2) == 0) {
   i60 = i51;
  } else {
   if (!((HEAP32[i56 + 60 >> 2] | 0) != 0 & (i51 | 0) > (i25 | 0))) {
    i60 = i51;
    break;
   }
   HEAP32[i17 >> 2] = i25;
   if (!(__ZNK7WebCore15RenderBlockFlow11hasNextPageENS_10LayoutUnitENS0_16PageBoundaryRuleE(i2, i17, 0) | 0)) {
    i60 = i51;
    break;
   }
   HEAP32[i19 >> 2] = i25;
   __ZNK7WebCore15RenderBlockFlow18nextPageLogicalTopENS_10LayoutUnitENS0_16PageBoundaryRuleE(i18, i2, i19, 0);
   i33 = HEAP32[((HEAP32[i18 >> 2] | 0) < (i51 | 0) ? i18 : i1) >> 2] | 0;
   HEAP32[i46 >> 2] = i33;
   i26 = (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i26 | 0) == 3 | (i26 | 0) == 0) {
    i61 = i2 + 56 | 0;
   } else {
    i61 = i2 + 52 | 0;
   }
   i4 = i33 - i51 + (HEAP32[i61 >> 2] | 0) | 0;
   if ((i26 | 0) == 3 | (i26 | 0) == 0) {
    HEAP32[i2 + 56 >> 2] = i4;
    i60 = i33;
    break;
   } else {
    HEAP32[i2 + 52 >> 2] = i4;
    i60 = i33;
    break;
   }
  }
 } while (0);
 if (i45) {
  STACKTOP = i5;
  return;
 }
 i45 = i43 + 20 | 0;
 i61 = HEAP32[i45 >> 2] | 0;
 if ((i61 & 768 | 0) == 256) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i43 + 24 >> 2] & 32 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((i61 & 64 | 0) != 0 | (i61 & 25165824 | 0) == 16777216) {
  STACKTOP = i5;
  return;
 }
 i61 = i43;
 i51 = (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i51 | 0) == 3 | (i51 | 0) == 0) {
  i62 = i2 + 56 | 0;
 } else {
  i62 = i2 + 52 | 0;
 }
 i46 = HEAP32[i62 >> 2] | 0;
 if ((i51 | 0) == 3 | (i51 | 0) == 0) {
  HEAP32[i2 + 56 >> 2] = i60;
 } else {
  HEAP32[i2 + 52 >> 2] = i60;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 1024 >> 2] & 511](i61) | 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 972 >> 2] & 511](i43) | 0) {
    break;
   }
   i51 = (HEAP32[(HEAP32[i43 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i51 | 0) == 3 | (i51 | 0) == 0) {
    i63 = i43 + 48 | 0;
   } else {
    i63 = i43 + 44 | 0;
   }
   i51 = HEAP32[i63 >> 2] | 0;
   i62 = HEAP32[i43 + 96 >> 2] | 0;
   do {
    if ((i62 | 0) == 0) {
     i64 = 0;
    } else {
     i1 = HEAP32[i62 + 20 >> 2] | 0;
     if ((i1 | 0) == 0) {
      i64 = 0;
      break;
     } else {
      i65 = i1;
      i66 = 0;
     }
     while (1) {
      i1 = HEAP32[i65 >> 2] | 0;
      i18 = HEAP32[i1 + 28 >> 2] | 0;
      if ((i18 & 16 | 0) == 0 | (i18 & 3 | 0) == 0) {
       i67 = i66;
      } else {
       if ((HEAP32[i45 >> 2] & 8192 | 0) == 0) {
        i68 = (HEAP32[i1 + 16 >> 2] | 0) + (HEAP32[i1 + 8 >> 2] | 0) | 0;
       } else {
        i68 = (HEAP32[i1 + 20 >> 2] | 0) + (HEAP32[i1 + 12 >> 2] | 0) | 0;
       }
       i67 = (i66 | 0) < (i68 | 0) ? i68 : i66;
      }
      i1 = HEAP32[i65 + 8 >> 2] | 0;
      if ((i1 | 0) == 0) {
       i64 = i67;
       break;
      } else {
       i65 = i1;
       i66 = i67;
      }
     }
    }
   } while (0);
   if ((i64 + i51 | 0) <= (i60 | 0)) {
    break;
   }
   __ZN7WebCore15RenderBlockFlow20addOverhangingFloatsERS0_b(i20, i2, i61, 0);
  }
 } while (0);
 i61 = (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i61 | 0) == 3 | (i61 | 0) == 0) {
  HEAP32[i2 + 56 >> 2] = i46;
 } else {
  HEAP32[i2 + 52 >> 2] = i46;
 }
 if (!((i48 | 0) > 0 & (i60 | 0) < (i25 | 0))) {
  STACKTOP = i5;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 1024 >> 2] & 511](i2) | 0)) {
  STACKTOP = i5;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 972 >> 2] & 511](i3) | 0) {
  STACKTOP = i5;
  return;
 }
 i22 = HEAP32[i2 + 96 >> 2] | 0;
 do {
  if ((i22 | 0) == 0) {
   i69 = 0;
  } else {
   i25 = HEAP32[i22 + 20 >> 2] | 0;
   if ((i25 | 0) == 0) {
    i69 = 0;
    break;
   }
   i48 = i2 + 20 | 0;
   i46 = i25;
   i25 = 0;
   while (1) {
    i61 = HEAP32[i46 >> 2] | 0;
    i15 = HEAP32[i61 + 28 >> 2] | 0;
    if ((i15 & 16 | 0) == 0 | (i15 & 3 | 0) == 0) {
     i70 = i25;
    } else {
     if ((HEAP32[i48 >> 2] & 8192 | 0) == 0) {
      i71 = (HEAP32[i61 + 16 >> 2] | 0) + (HEAP32[i61 + 8 >> 2] | 0) | 0;
     } else {
      i71 = (HEAP32[i61 + 20 >> 2] | 0) + (HEAP32[i61 + 12 >> 2] | 0) | 0;
     }
     i70 = (i25 | 0) < (i71 | 0) ? i71 : i25;
    }
    i61 = HEAP32[i46 + 8 >> 2] | 0;
    if ((i61 | 0) == 0) {
     i69 = i70;
     break;
    } else {
     i46 = i61;
     i25 = i70;
    }
   }
  }
 } while (0);
 if ((i69 | 0) <= (i60 | 0)) {
  STACKTOP = i5;
  return;
 }
 i60 = i3 + 20 | 0;
 i3 = HEAP32[i60 >> 2] | 0;
 if ((i3 & 1 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i60 >> 2] = i3 | 1;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i44, 1, 0);
 if ((HEAP32[i60 >> 2] & 32768 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i44);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 328 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 80 | 0;
 i13 = i4 + 96 | 0;
 i14 = i4 + 104 | 0;
 i15 = i4 + 152 | 0;
 i16 = i4 + 160 | 0;
 i17 = i4 + 168 | 0;
 i18 = i4 + 176 | 0;
 i19 = i4 + 184 | 0;
 i20 = i4 + 192 | 0;
 i21 = i4 + 200 | 0;
 i22 = i4 + 208 | 0;
 i23 = i4 + 216 | 0;
 i24 = i4 + 224 | 0;
 i25 = i4 + 232 | 0;
 i26 = i4 + 240 | 0;
 i27 = i4 + 248 | 0;
 i28 = i4 + 256 | 0;
 i29 = i4 + 264 | 0;
 i30 = i4 + 272 | 0;
 i31 = i4 + 280 | 0;
 i32 = i4 + 288 | 0;
 i33 = i4 + 304 | 0;
 i34 = i4 + 312 | 0;
 i35 = i34 | 0;
 i36 = i34;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP8[i13] = i2 & 1;
 i38 = i1 | 0;
 do {
  if (!i2) {
   if (!(__ZN7WebCore11RenderBlock16simplifiedLayoutEv(i38) | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i2 = i1 | 0;
 i39 = i1 | 0;
 __ZN7WebCore15LayoutRepainterC1ERNS_13RenderElementEb(i14, i2, __ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv(i39) | 0);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1140 >> 2] & 511](i38) | 0) {
  HEAP8[i13] = 1;
 }
 __ZN7WebCore15RenderBlockFlow11clearFloatsEv(i1);
 i40 = i1 | 0;
 i41 = i1 + 36 | 0;
 i42 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i42 | 0) == 3 | (i42 | 0) == 0) {
  i43 = i1 + 56 | 0;
 } else {
  i43 = i1 + 52 | 0;
 }
 i44 = HEAP32[i43 >> 2] | 0;
 if ((i42 | 0) == 3 | (i42 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = 0;
 } else {
  HEAP32[i1 + 52 >> 2] = 0;
 }
 HEAP8[i15] = 0;
 HEAP8[i16] = 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1064 >> 2] & 31](i38, i3, i15, i16);
 i42 = HEAP32[i41 >> 2] | 0;
 i43 = i1 + 4 | 0;
 i45 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i43 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 i46 = i1 + 44 | 0;
 i47 = HEAP32[i46 >> 2] | 0;
 i48 = i1 + 48 | 0;
 i49 = HEAP32[i48 >> 2] | 0;
 i50 = i1 + 20 | 0;
 if ((HEAP32[i50 >> 2] & 4587520 | 0) == 0) {
  i51 = (HEAP32[i42 + 44 >> 2] | 0) >>> 13 & 3;
  i52 = ((i51 | 0) == 1 | (i51 | 0) == 3) & 1;
 } else {
  i52 = 1;
 }
 i51 = i3 | 0;
 i3 = HEAP32[i51 >> 2] | 0;
 i53 = (HEAP8[i15] & 1) != 0;
 i15 = __ZNK7WebCore11RenderBlock10columnInfoEv(i38) | 0;
 i54 = i17 | 0;
 HEAP32[i54 >> 2] = i45;
 i55 = i17 + 4 | 0;
 i56 = HEAP8[i55] & -16 | i52;
 HEAP32[i8 >> 2] = i47;
 HEAP32[i8 + 4 >> 2] = i49;
 HEAP32[i7 >> 2] = i3;
 i3 = __ZN7WebCore10RenderView15pushLayoutStateERNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE(i45, i40, i8, i7, i53, i15) | 0;
 i15 = i56 | (i3 & 1) << 3;
 HEAP8[i55] = i15;
 if (i52 << 24 >> 24 == 0 | i3 ^ 1) {
  i57 = i15;
 } else {
  i15 = i45 + 196 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  i57 = HEAP8[i55] | 0;
 }
 HEAP8[i55] = i57 | 2;
 __ZN7WebCore11RenderBlock43prepareShapesAndPaginationBeforeBlockLayoutERb(i38, i13);
 if ((HEAP8[i13] & 1) == 0) {
  do {
   if ((HEAP32[i1 + 24 >> 2] & 32 | 0) == 0) {
    i58 = 0;
   } else {
    i57 = HEAP32[i2 + 100 >> 2] | 0;
    if ((i57 | 0) == 0) {
     i58 = 0;
     break;
    }
    if ((HEAP32[i57 + 28 >> 2] | 0) == 0) {
     i58 = 0;
     break;
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 992 >> 2] & 511](i40) | 0)) {
     i58 = 0;
     break;
    }
    i57 = HEAP32[i50 >> 2] | 0;
    if ((i57 & 512 | 0) == 0) {
     i58 = 1;
     break;
    }
    i58 = (i57 >>> 8 & 1 ^ 1) & 255;
   }
  } while (0);
  HEAP8[i13] = i58;
 }
 i58 = i1;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 188 >> 2] & 511](i39) | 0)) {
  __ZN7WebCore15RenderBlockFlow19initMaxMarginValuesEv(i1);
  i2 = i42 + 16 | 0;
  i57 = i42 + 44 | 0;
  i15 = i1 + 92 | 0;
  i45 = (HEAP8[(__ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i2 >> 2] | 0) + 36 | 0, (HEAP32[i57 >> 2] | 0) >>> 13 & 3) | 0) + 4 | 0] & 1) << 25;
  HEAP32[i15 >> 2] = i45 | HEAP32[i15 >> 2] & -33554433;
  i45 = (HEAP8[(__ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i2 >> 2] | 0) + 36 | 0, (HEAP32[i57 >> 2] | 0) >>> 13 & 3) | 0) + 4 | 0] & 1) << 26;
  HEAP32[i15 >> 2] = i45 | HEAP32[i15 >> 2] & -67108865;
  HEAP32[i18 >> 2] = 0;
  __ZN7WebCore11RenderBlock18setPaginationStrutENS_10LayoutUnitE(i38, i18);
 }
 i18 = i19 | 0;
 HEAP32[i18 >> 2] = 0;
 i15 = i20 | 0;
 HEAP32[i15 >> 2] = 0;
 i45 = i21 | 0;
 HEAP32[i45 >> 2] = 0;
 i57 = i1 + 28 | 0;
 do {
  if ((HEAP32[i57 >> 2] | 0) == 0) {
   if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i39) | 0) {
    break;
   }
   HEAP32[i50 >> 2] = HEAP32[i50 >> 2] | 2097152;
  }
 } while (0);
 i2 = (HEAP8[i13] & 1) != 0;
 if ((HEAP32[i50 >> 2] & 2097152 | 0) == 0) {
  __ZN7WebCore15RenderBlockFlow19layoutBlockChildrenEbRNS_10LayoutUnitE(i1, i2, i21);
 } else {
  __ZN7WebCore15RenderBlockFlow20layoutInlineChildrenEbRNS_10LayoutUnitES2_(i1, i2, i19, i20);
 }
 i20 = i1 | 0;
 i19 = i1;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 756 >> 2] & 511](i20) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 724 >> 2] & 127](i5, i20);
 i21 = (HEAP32[i5 >> 2] | 0) + i2 | 0;
 i2 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i2 | 0) == 3 | (i2 | 0) == 0) {
  i59 = __ZNK7WebCore9RenderBox25horizontalScrollbarHeightEv(i40) | 0;
 } else {
  i59 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 908 >> 2] & 511](i40) | 0;
 }
 i2 = i21 + i59 | 0;
 i59 = i1 + 96 | 0;
 i21 = HEAP32[i59 >> 2] | 0;
 do {
  if ((i21 | 0) == 0) {
   i60 = 0;
  } else {
   i5 = HEAP32[i21 + 20 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i60 = 0;
    break;
   } else {
    i61 = i5;
    i62 = 0;
   }
   while (1) {
    i5 = HEAP32[i61 >> 2] | 0;
    i3 = HEAP32[i5 + 28 >> 2] | 0;
    if ((i3 & 16 | 0) == 0 | (i3 & 3 | 0) == 0) {
     i63 = i62;
    } else {
     if ((HEAP32[i50 >> 2] & 8192 | 0) == 0) {
      i64 = (HEAP32[i5 + 16 >> 2] | 0) + (HEAP32[i5 + 8 >> 2] | 0) | 0;
     } else {
      i64 = (HEAP32[i5 + 20 >> 2] | 0) + (HEAP32[i5 + 12 >> 2] | 0) | 0;
     }
     i63 = (i62 | 0) < (i64 | 0) ? i64 : i62;
    }
    i5 = HEAP32[i61 + 8 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i60 = i63;
     break;
    } else {
     i61 = i5;
     i62 = i63;
    }
   }
  }
 } while (0);
 i63 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i63 | 0) == 3 | (i63 | 0) == 0) {
  i65 = i1 + 56 | 0;
 } else {
  i65 = i1 + 52 | 0;
 }
 do {
  if ((i60 | 0) > ((HEAP32[i65 >> 2] | 0) - i2 | 0)) {
   if (!(__ZNK7WebCore11RenderBlock33expandsToEncloseOverhangingFloatsEv(i38) | 0)) {
    break;
   }
   i63 = HEAP32[i59 >> 2] | 0;
   do {
    if ((i63 | 0) == 0) {
     i66 = 0;
    } else {
     i62 = HEAP32[i63 + 20 >> 2] | 0;
     if ((i62 | 0) == 0) {
      i66 = 0;
      break;
     } else {
      i67 = i62;
      i68 = 0;
     }
     while (1) {
      i62 = HEAP32[i67 >> 2] | 0;
      i61 = HEAP32[i62 + 28 >> 2] | 0;
      if ((i61 & 16 | 0) == 0 | (i61 & 3 | 0) == 0) {
       i69 = i68;
      } else {
       if ((HEAP32[i50 >> 2] & 8192 | 0) == 0) {
        i70 = (HEAP32[i62 + 16 >> 2] | 0) + (HEAP32[i62 + 8 >> 2] | 0) | 0;
       } else {
        i70 = (HEAP32[i62 + 20 >> 2] | 0) + (HEAP32[i62 + 12 >> 2] | 0) | 0;
       }
       i69 = (i68 | 0) < (i70 | 0) ? i70 : i68;
      }
      i62 = HEAP32[i67 + 8 >> 2] | 0;
      if ((i62 | 0) == 0) {
       i66 = i69;
       break;
      } else {
       i67 = i62;
       i68 = i69;
      }
     }
    }
   } while (0);
   i63 = i66 + i2 | 0;
   i62 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i62 | 0) == 3 | (i62 | 0) == 0) {
    HEAP32[i1 + 56 >> 2] = i63;
    break;
   } else {
    HEAP32[i1 + 52 >> 2] = i63;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 1160 >> 2] | 0;
 i66 = (HEAP8[i16] & 1) != 0;
 HEAP32[i22 >> 2] = HEAP32[i51 >> 2];
 if (FUNCTION_TABLE_iiiii[i2 & 7](i1, i66, i22, i17) | 0) {
  STACKTOP = i4;
  return;
 }
 if (__ZN7WebCore15RenderBlockFlow21relayoutToAvoidWidowsERNS_21LayoutStateMaintainerE(i1, i17) | 0) {
  STACKTOP = i4;
  return;
 }
 i17 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i17 | 0) == 3 | (i17 | 0) == 0) {
  i71 = i1 + 56 | 0;
 } else {
  i71 = i1 + 52 | 0;
 }
 i17 = HEAP32[i71 >> 2] | 0;
 i71 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 752 >> 2] & 511](i20) | 0;
 i20 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i20 | 0) == 3 | (i20 | 0) == 0) {
  __ZNK7WebCore9RenderBox12clientHeightEv(i6, i40);
 } else {
  __ZNK7WebCore9RenderBox11clientWidthEv(i6, i40);
 }
 i20 = (HEAP32[i6 >> 2] | 0) + i71 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 248 >> 2] & 511](i39) | 0) {
  HEAP32[i23 >> 2] = i20;
  __ZN7WebCore16RenderFlowThread22applyBreakAfterContentENS_10LayoutUnitE(i1, i23);
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 880 >> 2] & 63](i1);
 i23 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i23 | 0) == 3 | (i23 | 0) == 0) {
  i72 = i1 + 56 | 0;
 } else {
  i72 = i1 + 52 | 0;
 }
 i23 = HEAP32[i72 >> 2] | 0;
 L103 : do {
  if ((i17 | 0) > (i23 | 0)) {
   if ((HEAP32[i45 >> 2] | 0) <= (i23 | 0)) {
    break;
   }
   if ((HEAP32[i50 >> 2] & 2097152 | 0) != 0) {
    break;
   }
   i72 = HEAP32[i57 >> 2] | 0;
   if ((i72 | 0) == 0) {
    break;
   } else {
    i73 = i72;
   }
   while (1) {
    if ((HEAP32[i73 + 20 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[i73 + 24 >> 2] & 32 | 0) != 0) {
      break;
     }
    }
    i72 = HEAP32[i73 + 16 >> 2] | 0;
    if ((i72 | 0) == 0) {
     break L103;
    } else {
     i73 = i72;
    }
   }
   if ((i73 | 0) == 0) {
    break;
   } else {
    i74 = i73;
   }
   while (1) {
    i72 = i74;
    i58 = HEAP32[i74 + 20 >> 2] | 0;
    do {
     if (!((i58 & 64 | 0) != 0 | (i58 & 25165824 | 0) == 16777216)) {
      i71 = HEAP32[i74 + 96 >> 2] | 0;
      do {
       if ((i71 | 0) == 0) {
        i75 = 0;
       } else {
        i6 = HEAP32[i71 + 20 >> 2] | 0;
        if ((i6 | 0) == 0) {
         i75 = 0;
         break;
        } else {
         i76 = i6;
         i77 = 0;
        }
        while (1) {
         i6 = HEAP32[i76 >> 2] | 0;
         i19 = HEAP32[i6 + 28 >> 2] | 0;
         if ((i19 & 16 | 0) == 0 | (i19 & 3 | 0) == 0) {
          i78 = i77;
         } else {
          if ((i58 & 8192 | 0) == 0) {
           i79 = (HEAP32[i6 + 16 >> 2] | 0) + (HEAP32[i6 + 8 >> 2] | 0) | 0;
          } else {
           i79 = (HEAP32[i6 + 20 >> 2] | 0) + (HEAP32[i6 + 12 >> 2] | 0) | 0;
          }
          i78 = (i77 | 0) < (i79 | 0) ? i79 : i77;
         }
         i6 = HEAP32[i76 + 8 >> 2] | 0;
         if ((i6 | 0) == 0) {
          i75 = i78;
          break;
         } else {
          i76 = i6;
          i77 = i78;
         }
        }
       }
      } while (0);
      i71 = (HEAP32[(HEAP32[i74 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((i71 | 0) == 3 | (i71 | 0) == 0) {
       i80 = i74 + 48 | 0;
      } else {
       i80 = i74 + 44 | 0;
      }
      if (((HEAP32[i80 >> 2] | 0) + i75 | 0) <= (i23 | 0)) {
       break;
      }
      __ZN7WebCore15RenderBlockFlow20addOverhangingFloatsERS0_b(i24, i1, i72, 0);
     }
    } while (0);
    i72 = HEAP32[i74 + 16 >> 2] | 0;
    if ((i72 | 0) == 0) {
     break L103;
    } else {
     i81 = i72;
    }
    while (1) {
     if ((HEAP32[i81 + 20 >> 2] & 768 | 0) != 256) {
      if ((HEAP32[i81 + 24 >> 2] & 32 | 0) != 0) {
       break;
      }
     }
     i72 = HEAP32[i81 + 16 >> 2] | 0;
     if ((i72 | 0) == 0) {
      break L103;
     } else {
      i81 = i72;
     }
    }
    if ((i81 | 0) == 0) {
     break;
    } else {
     i74 = i81;
    }
   }
  }
 } while (0);
 i81 = (i44 | 0) != (i23 | 0);
 do {
  if (i81) {
   HEAP8[i13] = 1;
   i82 = 1;
  } else {
   if ((HEAP8[i13] & 1) != 0) {
    i82 = 1;
    break;
   }
   i23 = HEAP32[i43 >> 2] | 0;
   i82 = (HEAP32[(HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i23 | 0);
  }
 } while (0);
 __ZN7WebCore11RenderBlock23layoutPositionedObjectsEbb(i38, i82, 0);
 __ZN7WebCore11RenderBlock28updateShapesAfterBlockLayoutEb(i38, i81);
 i81 = HEAP32[(HEAP32[i1 >> 2] | 0) + 1048 >> 2] | 0;
 HEAP32[i25 >> 2] = i20;
 FUNCTION_TABLE_viii[i81 & 127](i1, i25, 0);
 i25 = HEAP8[i55] | 0;
 if ((i25 & 2) != 0) {
  do {
   if ((i25 & 8) == 0) {
    i83 = i25;
   } else {
    i81 = HEAP32[i54 >> 2] | 0;
    i20 = i81 + 192 | 0;
    i82 = (HEAP32[i20 >> 2] | 0) + 12 | 0;
    i13 = HEAP32[i82 >> 2] | 0;
    HEAP32[i82 >> 2] = 0;
    i82 = HEAP32[i20 >> 2] | 0;
    HEAP32[i20 >> 2] = i13;
    if ((i82 | 0) != 0) {
     __ZN7WebCore11LayoutStateD1Ev(i82);
     __ZdlPv(i82 | 0);
    }
    __ZN7WebCore10RenderView34popLayoutStateForCurrentFlowThreadEv(i81);
    i81 = HEAP8[i55] | 0;
    if ((i81 & 1) == 0) {
     i83 = i81;
     break;
    }
    i81 = (HEAP32[i54 >> 2] | 0) + 196 | 0;
    HEAP32[i81 >> 2] = (HEAP32[i81 >> 2] | 0) - 1;
    i83 = HEAP8[i55] | 0;
   }
  } while (0);
  HEAP8[i55] = i83 | 4;
 }
 __ZN7WebCore15RenderBlockFlow24fitBorderToLinesIfNeededEv(i1);
 i83 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i43 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 if ((HEAP32[i83 + 60 >> 2] | 0) != 0) {
  i43 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i43 | 0) == 3 | (i43 | 0) == 0) {
   HEAP32[i27 >> 2] = HEAP32[i48 >> 2];
  } else {
   HEAP32[i27 >> 2] = HEAP32[i46 >> 2];
  }
  __ZNK7WebCore11LayoutState17pageLogicalOffsetEPNS_9RenderBoxENS_10LayoutUnitE(i26, i83, i40, i27);
  __ZN7WebCore11RenderBlock20setPageLogicalOffsetENS_10LayoutUnitE(i38, i26);
 }
 __ZN7WebCore9RenderBox20updateLayerTransformEv(i40);
 __ZN7WebCore11RenderBlock27updateScrollInfoAfterLayoutEv(i38);
 do {
  if (!(__ZN7WebCore15LayoutRepainter18repaintAfterLayoutEv(i14) | 0)) {
   if ((HEAP32[i18 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i42 + 40 >> 2] & 6144 | 0) != 0) {
    if ((HEAP8[(__ZNK7WebCore12RenderObject14enclosingLayerEv(i39) | 0) + 22 | 0] & 8) == 0) {
     break;
    }
   }
   i26 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   i27 = i1;
   i83 = HEAP32[(HEAP32[i27 >> 2] | 0) + 824 >> 2] | 0;
   if ((i26 | 0) == 3 | (i26 | 0) == 0) {
    FUNCTION_TABLE_vii[i83 & 127](i9, i40);
    i84 = HEAP32[i9 >> 2] | 0;
   } else {
    FUNCTION_TABLE_vii[i83 & 127](i10, i40);
    i84 = HEAP32[i10 + 4 >> 2] | 0;
   }
   HEAP32[i28 >> 2] = i84;
   i83 = (HEAP32[(HEAP32[i41 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   i26 = HEAP32[(HEAP32[i27 >> 2] | 0) + 824 >> 2] | 0;
   if ((i83 | 0) == 3 | (i83 | 0) == 0) {
    FUNCTION_TABLE_vii[i26 & 127](i11, i40);
    i85 = (HEAP32[i11 + 8 >> 2] | 0) + (HEAP32[i11 >> 2] | 0) | 0;
   } else {
    FUNCTION_TABLE_vii[i26 & 127](i12, i40);
    i85 = (HEAP32[i12 + 12 >> 2] | 0) + (HEAP32[i12 + 4 >> 2] | 0) | 0;
   }
   HEAP32[i29 >> 2] = i85;
   i26 = HEAP32[i50 >> 2] | 0;
   if ((i26 & 65536 | 0) == 0) {
    i86 = i26;
    i87 = i84;
    i88 = i85;
   } else {
    __ZNK7WebCore9RenderBox25logicalLeftLayoutOverflowEv(i30, i40);
    i26 = HEAP32[((HEAP32[i30 >> 2] | 0) < (i84 | 0) ? i30 : i28) >> 2] | 0;
    HEAP32[i28 >> 2] = i26;
    __ZNK7WebCore9RenderBox26logicalRightLayoutOverflowEv(i31, i40);
    i83 = HEAP32[((i85 | 0) < (HEAP32[i31 >> 2] | 0) ? i31 : i29) >> 2] | 0;
    HEAP32[i29 >> 2] = i83;
    i86 = HEAP32[i50 >> 2] | 0;
    i87 = i26;
    i88 = i83;
   }
   _memset(i32 | 0, 0, 16) | 0;
   i83 = HEAP32[i18 >> 2] | 0;
   if ((i86 & 8192 | 0) == 0) {
    i26 = (HEAP32[i15 >> 2] | 0) - i83 | 0;
    HEAP32[i32 >> 2] = i83;
    HEAP32[i32 + 4 >> 2] = i87;
    HEAP32[i32 + 8 >> 2] = i26;
    HEAP32[i32 + 12 >> 2] = i88 - i87;
   } else {
    i26 = (HEAP32[i15 >> 2] | 0) - i83 | 0;
    HEAP32[i32 >> 2] = i87;
    HEAP32[i32 + 4 >> 2] = i83;
    HEAP32[i32 + 8 >> 2] = i88 - i87;
    HEAP32[i32 + 12 >> 2] = i26;
   }
   __ZNK7WebCore11RenderBlock20adjustRectForColumnsERNS_10LayoutRectE(i38, i32);
   i26 = __ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(i39, 5) | 0;
   i83 = i32 | 0;
   HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) - i26;
   i27 = i32 + 8 | 0;
   i46 = i26 << 1;
   i48 = (HEAP32[i27 >> 2] | 0) + i46 | 0;
   HEAP32[i27 >> 2] = i48;
   i43 = i32 + 4 | 0;
   HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) - i26;
   i26 = i32 + 12 | 0;
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + i46;
   if ((HEAP32[i50 >> 2] & 65536 | 0) == 0) {
    i89 = i48;
   } else {
    __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i33, i40);
    i48 = HEAP32[i33 + 4 >> 2] | 0;
    HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) - (HEAP32[i33 >> 2] | 0);
    HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) - i48;
    i48 = i1 + 52 | 0;
    i43 = HEAP32[i48 >> 2] | 0;
    i83 = HEAP32[i48 + 4 >> 2] | 0;
    HEAP32[i35 >> 2] = 0;
    HEAP32[i35 + 4 >> 2] = 0;
    i48 = i34 + 8 | 0;
    HEAP32[i48 >> 2] = i43;
    HEAP32[i48 + 4 >> 2] = i83;
    __ZN7WebCore10LayoutRect9intersectERKS0_(i32, i36);
    i89 = HEAP32[i27 >> 2] | 0;
   }
   if ((i89 | 0) < 1) {
    break;
   }
   if ((HEAP32[i26 >> 2] | 0) < 1) {
    break;
   }
   __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i39, i32, 0);
   if ((HEAP32[i50 >> 2] & 262144 | 0) == 0) {
    break;
   }
   __ZNK7WebCore9RenderBox13reflectedRectERKNS_10LayoutRectE(i37, i40, i32);
   __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i39, i37, 0);
  }
 } while (0);
 __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i39);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlow16layoutBlockChildERNS_9RenderBoxERNS0_10MarginInfoERNS_10LayoutUnitES6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i12 | 0;
 i14 = i12;
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
 STACKTOP = STACKTOP + 8 | 0;
 i28 = i27;
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
 i33 = i1 + 100 | 0;
 i34 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i34 | 0) == 0) {
   i35 = i9;
   _llvm_lifetime_start(4, 0, i35 | 0);
   __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i8, i1 + 60 | 0, (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   HEAP32[i9 >> 2] = 0;
   i36 = HEAP32[((HEAP32[i8 >> 2] | 0) < 0 ? i9 : i8) >> 2] | 0;
   _llvm_lifetime_end(4, 0, i35 | 0);
   i35 = HEAP32[i33 >> 2] | 0;
   if ((i35 | 0) != 0) {
    i37 = i35;
    i38 = i36;
    i39 = 4;
    break;
   }
   __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i7, i1 + 60 | 0, (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   i35 = HEAP32[i7 >> 2] | 0;
   i40 = (i35 | 0) > 0 ? 0 : -i35 | 0;
   i41 = i36;
  } else {
   i37 = i34;
   i38 = HEAP32[i34 + 4 >> 2] | 0;
   i39 = 4;
  }
 } while (0);
 if ((i39 | 0) == 4) {
  i40 = HEAP32[i37 + 8 >> 2] | 0;
  i41 = i38;
 }
 i38 = i1 | 0;
 __ZN7WebCore9RenderBox34computeAndSetBlockDirectionMarginsEPKNS_11RenderBlockE(i2, i38);
 i37 = i10 | 0;
 HEAP32[i37 >> 2] = 0;
 __ZN7WebCore15RenderBlockFlow26estimateLogicalTopPositionERNS_9RenderBoxERKNS0_10MarginInfoERNS_10LayoutUnitE(i11, i1, i2, i3, i10);
 i10 = i2 + 44 | 0;
 i34 = i12;
 i12 = i10;
 HEAP32[i34 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i34 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i34 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i34 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 i12 = i1 + 20 | 0;
 i34 = HEAP32[((HEAP32[i12 >> 2] & 8192 | 0) == 0 ? i2 + 44 | 0 : i2 + 48 | 0) >> 2] | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i15 >> 2] = i7;
 __ZN7WebCore11RenderBlock21setLogicalTopForChildERNS_9RenderBoxENS_10LayoutUnitENS0_20ApplyLayoutDeltaModeE(i38, i2, i15, 0);
 __ZNK7WebCore11RenderBlock30estimateRegionRangeForBoxChildERKNS_9RenderBoxE(i38, i2);
 i15 = i2 | 0;
 i11 = i2 + 24 | 0;
 if ((HEAP32[i11 >> 2] & 32 | 0) == 0) {
  i42 = 0;
 } else {
  i42 = i2;
 }
 i33 = i2;
 do {
  if ((i7 | 0) == (i34 | 0)) {
   i39 = 11;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 972 >> 2] & 511](i2) | 0 | (i42 | 0) == 0) {
    i39 = 11;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i42 >> 2] | 0) + 1024 >> 2] & 511](i42) | 0) {
    i39 = 24;
   } else {
    i39 = 11;
   }
  }
 } while (0);
 do {
  if ((i39 | 0) == 11) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 972 >> 2] & 511](i2) | 0) {
    if (__ZNK7WebCore9RenderBox19shrinkToAvoidFloatsEv(i2) | 0) {
     i39 = 13;
    } else {
     i43 = 0;
    }
   } else {
    i39 = 13;
   }
   if ((i39 | 0) == 13) {
    i8 = HEAP32[i1 + 96 >> 2] | 0;
    do {
     if ((i8 | 0) == 0) {
      i44 = 0;
     } else {
      i9 = HEAP32[i8 + 20 >> 2] | 0;
      if ((i9 | 0) == 0) {
       i44 = 0;
       break;
      } else {
       i45 = i9;
       i46 = 0;
      }
      while (1) {
       i9 = HEAP32[i45 >> 2] | 0;
       i36 = HEAP32[i9 + 28 >> 2] | 0;
       if ((i36 & 16 | 0) == 0 | (i36 & 3 | 0) == 0) {
        i47 = i46;
       } else {
        if ((HEAP32[i12 >> 2] & 8192 | 0) == 0) {
         i48 = (HEAP32[i9 + 16 >> 2] | 0) + (HEAP32[i9 + 8 >> 2] | 0) | 0;
        } else {
         i48 = (HEAP32[i9 + 20 >> 2] | 0) + (HEAP32[i9 + 12 >> 2] | 0) | 0;
        }
        i47 = (i46 | 0) < (i48 | 0) ? i48 : i46;
       }
       i9 = HEAP32[i45 + 8 >> 2] | 0;
       if ((i9 | 0) == 0) {
        i44 = i47;
        break;
       } else {
        i45 = i9;
        i46 = i47;
       }
      }
     }
    } while (0);
    HEAP32[i16 >> 2] = i44;
    i43 = (HEAP32[((HEAP32[i4 >> 2] | 0) < (i44 | 0) ? i16 : i4) >> 2] | 0) > (i7 | 0);
   }
   if ((i42 | 0) == 0) {
    i49 = 0;
    break;
   }
   if (i43) {
    i39 = 24;
   } else {
    i39 = 25;
   }
  }
 } while (0);
 if ((i39 | 0) == 24) {
  __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i42, 0, 1);
  i39 = 25;
 }
 do {
  if ((i39 | 0) == 25) {
   i43 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i43 | 0) == 0) {
    i49 = 1;
    break;
   }
   if (((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i43 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    i49 = 1;
    break;
   }
   i43 = HEAP32[i42 + 96 >> 2] | 0;
   do {
    if ((i43 | 0) == 0) {
     i50 = 0;
    } else {
     i16 = HEAP32[i43 + 20 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i50 = 0;
      break;
     }
     i44 = i42 + 20 | 0;
     i47 = i16;
     i16 = 0;
     while (1) {
      i46 = HEAP32[i47 >> 2] | 0;
      i45 = HEAP32[i46 + 28 >> 2] | 0;
      if ((i45 & 16 | 0) == 0 | (i45 & 3 | 0) == 0) {
       i51 = i16;
      } else {
       if ((HEAP32[i44 >> 2] & 8192 | 0) == 0) {
        i52 = (HEAP32[i46 + 16 >> 2] | 0) + (HEAP32[i46 + 8 >> 2] | 0) | 0;
       } else {
        i52 = (HEAP32[i46 + 20 >> 2] | 0) + (HEAP32[i46 + 12 >> 2] | 0) | 0;
       }
       i51 = (i16 | 0) < (i52 | 0) ? i52 : i16;
      }
      i46 = HEAP32[i47 + 8 >> 2] | 0;
      if ((i46 | 0) == 0) {
       i50 = i51;
       break;
      } else {
       i47 = i46;
       i16 = i51;
      }
     }
    }
   } while (0);
   i43 = i50 + i34 | 0;
   HEAP32[i17 >> 2] = i43;
   i16 = i4 | 0;
   HEAP32[i16 >> 2] = HEAP32[((HEAP32[i16 >> 2] | 0) < (i43 | 0) ? i17 : i4) >> 2];
   i49 = 1;
  }
 } while (0);
 i4 = i2 | 0;
 i17 = i2 + 20 | 0;
 i34 = HEAP32[i17 >> 2] | 0;
 if ((i34 & 31 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 976 >> 2] & 63](i2);
  i53 = HEAP32[i17 >> 2] | 0;
 } else {
  i53 = i34;
 }
 i34 = (i53 & 1048576 | 0) != 0;
 if ((i53 & 31 | 0) == 0) {
  i54 = 1;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 652 >> 2] & 63](i2);
  i54 = 0;
 }
 i53 = i3 | 0;
 i50 = HEAP8[i53] | 0;
 __ZN7WebCore15RenderBlockFlow15collapseMarginsERNS_9RenderBoxERNS0_10MarginInfoE(i18, i1, i2, i3);
 HEAP32[i20 >> 2] = i41;
 HEAP32[i21 >> 2] = i40;
 i40 = HEAP32[i18 >> 2] | 0;
 HEAP32[i22 >> 2] = i40;
 __ZN7WebCore15RenderBlockFlow19clearFloatsIfNeededERNS_9RenderBoxERNS0_10MarginInfoENS_10LayoutUnitES5_S5_(i19, i1, i2, i3, i20, i21, i22);
 i22 = i1 + 4 | 0;
 i21 = (HEAP8[HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0] & 2) != 0;
 if (i21) {
  i20 = i19 | 0;
  i18 = HEAP32[i20 >> 2] | 0;
  HEAP32[i24 >> 2] = i18;
  HEAP32[i25 >> 2] = HEAP32[i37 >> 2];
  __ZN7WebCore15RenderBlockFlow29adjustBlockChildForPaginationENS_10LayoutUnitES1_RNS_9RenderBoxEb(i23, i1, i24, i25, i2, (i40 | 0) == (i18 | 0) & (i50 & 16) != 0);
  i50 = HEAP32[i23 >> 2] | 0;
  HEAP32[i20 >> 2] = i50;
  i55 = i50;
 } else {
  i55 = HEAP32[i19 >> 2] | 0;
 }
 HEAP32[i26 >> 2] = i55;
 __ZN7WebCore11RenderBlock21setLogicalTopForChildERNS_9RenderBoxENS_10LayoutUnitENS0_20ApplyLayoutDeltaModeE(i38, i2, i26, 0);
 do {
  if ((i55 | 0) == (i7 | 0)) {
   if ((HEAP32[i17 >> 2] & 31 | 0) != 0) {
    i39 = 49;
    break;
   }
   if (!(i21 & i49)) {
    break;
   }
   i26 = HEAP32[i42 + 100 >> 2] | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   if ((HEAP32[i26 + 20 >> 2] | 0) > -1) {
    i39 = 49;
   }
  } else {
   i39 = 49;
  }
 } while (0);
 do {
  if ((i39 | 0) == 49) {
   do {
    if (__ZNK7WebCore9RenderBox19shrinkToAvoidFloatsEv(i2) | 0) {
     i7 = HEAP32[i17 >> 2] | 0;
     if ((i7 & 4 | 0) != 0) {
      break;
     }
     HEAP32[i17 >> 2] = i7 | 4;
    }
   } while (0);
   do {
    if (i49) {
     do {
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 972 >> 2] & 511](i2) | 0)) {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i42 >> 2] | 0) + 1024 >> 2] & 511](i42) | 0)) {
        break;
       }
       __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i42, 0, 1);
      }
     } while (0);
     if ((HEAP32[i17 >> 2] & 31 | 0) != 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 976 >> 2] & 63](i2);
    }
   } while (0);
   if ((HEAP32[i17 >> 2] & 31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 652 >> 2] & 63](i15);
  }
 } while (0);
 do {
  if (__ZNK7WebCore11RenderBlock28updateRegionRangeForBoxChildERKNS_9RenderBoxE(i38, i2) | 0) {
   i7 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i7 & 1 | 0) == 0) {
     i55 = i7 | 1;
     HEAP32[i17 >> 2] = i55;
     if ((i7 & 32768 | 0) == 0) {
      i56 = i55;
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
     i56 = HEAP32[i17 >> 2] | 0;
    } else {
     i56 = i7;
    }
   } while (0);
   if ((i56 & 31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 652 >> 2] & 63](i15);
  }
 } while (0);
 do {
  if ((HEAP8[i53] & 16) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 852 >> 2] & 511](i2) | 0) {
    break;
   }
   HEAP8[i53] = HEAP8[i53] & -17;
  }
 } while (0);
 __ZN7WebCore11RenderBlock36determineLogicalLeftPositionForChildERNS_9RenderBoxENS0_20ApplyLayoutDeltaModeE(i38, i2, 0);
 i53 = i10;
 i10 = HEAP32[i53 >> 2] | 0;
 i15 = HEAP32[i53 + 4 >> 2] | 0;
 i53 = HEAP32[i13 >> 2] | 0;
 i56 = HEAP32[i13 + 4 >> 2] | 0;
 i13 = i10 - i53 | 0;
 i7 = i15 - i56 | 0;
 if ((HEAP32[i11 >> 2] & 16 | 0) == 0) {
  i57 = 0;
 } else {
  i57 = i2;
 }
 HEAP32[i27 >> 2] = i13;
 HEAP32[i27 + 4 >> 2] = i7;
 __ZN7WebCore11RenderBlock30relayoutShapeDescendantIfMovedEPS0_NS_10LayoutSizeE(i38, i57, i28);
 i28 = i1 + 36 | 0;
 i57 = HEAP32[i28 >> 2] | 0;
 i38 = i57 + 44 | 0;
 i27 = (HEAP32[i38 >> 2] | 0) >>> 13 & 3;
 if ((i27 | 0) == 3 | (i27 | 0) == 0) {
  i58 = i1 + 56 | 0;
 } else {
  i58 = i1 + 52 | 0;
 }
 i11 = HEAP32[i12 >> 2] & 8192;
 i55 = (HEAP32[((i11 | 0) == 0 ? i2 + 52 | 0 : i2 + 56 | 0) >> 2] | 0) + (HEAP32[i58 >> 2] | 0) | 0;
 if ((i27 | 0) == 3 | (i27 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i55;
 } else {
  HEAP32[i1 + 52 >> 2] = i55;
 }
 i55 = HEAP32[i2 + 36 >> 2] | 0;
 i27 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i27 | 0) == 0) {
   i39 = 79;
  } else {
   if (((HEAP32[i55 + 44 >> 2] ^ HEAP32[(HEAP32[i27 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    i39 = 79;
    break;
   }
   if ((HEAP32[(HEAP32[i55 + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 268435456) {
    i39 = 82;
   }
  }
 } while (0);
 do {
  if ((i39 | 0) == 79) {
   if ((HEAP32[i17 >> 2] & 8192 | 0) != 0 ^ (i11 | 0) != 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i55 + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 67108864) {
    i39 = 82;
   }
  }
 } while (0);
 if ((i39 | 0) == 82) {
  i55 = (HEAP32[i38 >> 2] | 0) >>> 13 & 3;
  if ((i55 | 0) == 3 | (i55 | 0) == 0) {
   i59 = i1 + 56 | 0;
  } else {
   i59 = i1 + 52 | 0;
  }
  i55 = HEAP32[i59 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 788 >> 2] & 127](i29, i2 | 0, i57);
  i57 = (HEAP32[i29 >> 2] | 0) + i55 | 0;
  i55 = (HEAP32[(HEAP32[i28 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i55 | 0) == 3 | (i55 | 0) == 0) {
   HEAP32[i1 + 56 >> 2] = i57;
  } else {
   HEAP32[i1 + 52 >> 2] = i57;
  }
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
 }
 do {
  if (i49) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i42 >> 2] | 0) + 1024 >> 2] & 511](i42) | 0)) {
    break;
   }
   __ZN7WebCore15RenderBlockFlow20addOverhangingFloatsERS0_b(i30, i1, i42, i54);
   i57 = i5 | 0;
   HEAP32[i57 >> 2] = HEAP32[((HEAP32[i57 >> 2] | 0) < (HEAP32[i30 >> 2] | 0) ? i30 : i5) >> 2];
  }
 } while (0);
 do {
  if ((i10 | 0) != (i53 | 0) | (i15 | 0) != (i56 | 0)) {
   i5 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i30 = i5 + 52 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + i13;
    i30 = i5 + 56 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + i7;
   }
   if (!i34) {
    i39 = 100;
    break;
   }
   if ((HEAP32[i12 >> 2] & 1 | 0) != 0) {
    break;
   }
   if (!(__ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv(i4) | 0)) {
    break;
   }
   __ZN7WebCore9RenderBox26repaintDuringLayoutIfMovedERKNS_10LayoutRectE(i2, i14);
  } else {
   if (!i34) {
    i39 = 100;
   }
  }
 } while (0);
 do {
  if ((i39 | 0) == 100) {
   if (!(__ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv(i4) | 0)) {
    break;
   }
   __ZNK7WebCore12RenderObject7repaintEb(i4, 0);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 872 >> 2] & 127](i2, 1);
  }
 } while (0);
 if (!i21) {
  STACKTOP = i6;
  return;
 }
 i21 = (HEAP32[(HEAP32[i28 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i21 | 0) == 3 | (i21 | 0) == 0) {
  i21 = i1 + 56 | 0;
  HEAP32[i32 >> 2] = HEAP32[i21 >> 2];
  i60 = i21;
 } else {
  HEAP32[i32 >> 2] = HEAP32[i1 + 52 >> 2];
  i60 = i1 + 56 | 0;
 }
 __ZN7WebCore15RenderBlockFlow15applyAfterBreakERNS_9RenderBoxENS_10LayoutUnitERNS0_10MarginInfoE(i31, i1, i2, i32, i3);
 i3 = HEAP32[i31 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i60 >> 2] | 0)) {
  STACKTOP = i6;
  return;
 }
 i31 = (HEAP32[(HEAP32[i28 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i31 | 0) == 3 | (i31 | 0) == 0) {
  HEAP32[i60 >> 2] = i3;
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i1 + 52 >> 2] = i3;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow17positionNewFloatsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
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
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
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
 i26 = i1 + 96 | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 if ((i27 | 0) == 0) {
  i28 = 0;
  STACKTOP = i2;
  return i28 | 0;
 }
 if ((HEAP32[i27 + 12 >> 2] | 0) == 0) {
  i28 = 0;
  STACKTOP = i2;
  return i28 | 0;
 }
 i29 = i27 + 24 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 if ((HEAP32[(HEAP32[i30 >> 2] | 0) + 28 >> 2] & 16 | 0) != 0) {
  i28 = 0;
  STACKTOP = i2;
  return i28 | 0;
 }
 i31 = HEAP32[i27 + 20 >> 2] | 0;
 i27 = i30;
 while (1) {
  if ((i27 | 0) == (i31 | 0)) {
   i32 = 0;
   i33 = i31;
   break;
  }
  i34 = HEAP32[((i27 | 0) == 0 ? i29 : i27 + 4 | 0) >> 2] | 0;
  i35 = HEAP32[i34 >> 2] | 0;
  if ((HEAP32[i35 + 28 >> 2] & 16 | 0) == 0) {
   i27 = i34;
  } else {
   i36 = 7;
   break;
  }
 }
 if ((i36 | 0) == 7) {
  i32 = i35;
  i33 = HEAP32[i34 + 8 >> 2] | 0;
 }
 i34 = i1 + 36 | 0;
 i35 = (HEAP32[(HEAP32[i34 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i35 | 0) == 3 | (i35 | 0) == 0) {
  i37 = i1 + 56 | 0;
 } else {
  i37 = i1 + 52 | 0;
 }
 i35 = HEAP32[i37 >> 2] | 0;
 if ((i32 | 0) == 0) {
  i38 = i35;
 } else {
  i37 = HEAP32[((HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0 ? i32 + 8 | 0 : i32 + 12 | 0) >> 2] | 0;
  i38 = (i37 | 0) < (i35 | 0) ? i35 : i37;
 }
 if ((i33 | 0) == 0) {
  i28 = 1;
  STACKTOP = i2;
  return i28 | 0;
 }
 i37 = i1 | 0;
 i35 = i4;
 i32 = i7 | 0;
 i36 = i5;
 i27 = i1 + 20 | 0;
 i29 = i8 | 0;
 i31 = i3 | 0;
 i30 = i6 + 4 | 0;
 i39 = i9 | 0;
 i40 = i10 | 0;
 i41 = i1 + 4 | 0;
 i42 = i12 | 0;
 i43 = i11 | 0;
 i44 = i18 | 0;
 i45 = i19 | 0;
 i46 = i20 | 0;
 i47 = i21 | 0;
 i48 = i13 | 0;
 i49 = i14 | 0;
 i50 = i15 | 0;
 i51 = i22 | 0;
 i52 = i23 | 0;
 i53 = i24 | 0;
 i54 = i25 | 0;
 i55 = i33;
 i33 = i38;
 while (1) {
  i38 = HEAP32[i55 >> 2] | 0;
  i56 = i38 | 0;
  do {
   if ((__ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i56 >> 2] | 0) | 0) == (i37 | 0)) {
    i57 = HEAP32[i56 >> 2] | 0;
    i58 = HEAP32[i34 >> 2] | 0;
    i59 = i57 | 0;
    i60 = i57;
    i61 = HEAP32[i60 >> 2] | 0;
    if ((HEAP32[i58 + 40 >> 2] & 1073741824 | 0) == 0) {
     FUNCTION_TABLE_viii[HEAP32[i61 + 796 >> 2] & 127](i3, i59, i58);
    } else {
     FUNCTION_TABLE_viii[HEAP32[i61 + 792 >> 2] & 127](i3, i59, i58);
    }
    i58 = i57 + 44 | 0;
    HEAP32[i35 >> 2] = HEAP32[i58 >> 2];
    HEAP32[i35 + 4 >> 2] = HEAP32[i58 + 4 >> 2];
    HEAP32[i35 + 8 >> 2] = HEAP32[i58 + 8 >> 2];
    HEAP32[i35 + 12 >> 2] = HEAP32[i58 + 12 >> 2];
    i58 = i57 | 0;
    i61 = HEAP32[(HEAP32[i57 + 36 >> 2] | 0) + 48 >> 2] | 0;
    if ((i61 & 1048576 | 0) == 0) {
     i62 = i33;
    } else {
     i63 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i63 | 0) == 0) {
       i64 = 0;
      } else {
       i65 = HEAP32[i63 + 20 >> 2] | 0;
       if ((i65 | 0) == 0) {
        i64 = 0;
        break;
       } else {
        i66 = i65;
        i67 = 0;
       }
       while (1) {
        i65 = HEAP32[i66 >> 2] | 0;
        if ((HEAP32[i65 + 28 >> 2] & 17 | 0) == 17) {
         if ((HEAP32[i27 >> 2] & 8192 | 0) == 0) {
          i68 = (HEAP32[i65 + 16 >> 2] | 0) + (HEAP32[i65 + 8 >> 2] | 0) | 0;
         } else {
          i68 = (HEAP32[i65 + 20 >> 2] | 0) + (HEAP32[i65 + 12 >> 2] | 0) | 0;
         }
         i69 = (i67 | 0) < (i68 | 0) ? i68 : i67;
        } else {
         i69 = i67;
        }
        i65 = HEAP32[i66 + 8 >> 2] | 0;
        if ((i65 | 0) == 0) {
         i64 = i69;
         break;
        } else {
         i66 = i65;
         i67 = i69;
        }
       }
      }
     } while (0);
     i62 = (i64 | 0) < (i33 | 0) ? i33 : i64;
    }
    if ((i61 & 2097152 | 0) == 0) {
     i70 = i62;
    } else {
     i63 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i63 | 0) == 0) {
       i71 = 0;
      } else {
       i65 = HEAP32[i63 + 20 >> 2] | 0;
       if ((i65 | 0) == 0) {
        i71 = 0;
        break;
       } else {
        i72 = i65;
        i73 = 0;
       }
       while (1) {
        i65 = HEAP32[i72 >> 2] | 0;
        if ((HEAP32[i65 + 28 >> 2] & 18 | 0) == 18) {
         if ((HEAP32[i27 >> 2] & 8192 | 0) == 0) {
          i74 = (HEAP32[i65 + 16 >> 2] | 0) + (HEAP32[i65 + 8 >> 2] | 0) | 0;
         } else {
          i74 = (HEAP32[i65 + 20 >> 2] | 0) + (HEAP32[i65 + 12 >> 2] | 0) | 0;
         }
         i75 = (i73 | 0) < (i74 | 0) ? i74 : i73;
        } else {
         i75 = i73;
        }
        i65 = HEAP32[i72 + 8 >> 2] | 0;
        if ((i65 | 0) == 0) {
         i71 = i75;
         break;
        } else {
         i72 = i65;
         i73 = i75;
        }
       }
      }
     } while (0);
     i70 = (i71 | 0) < (i62 | 0) ? i62 : i71;
    }
    HEAP32[i32 >> 2] = i70;
    __ZNK7WebCore15RenderBlockFlow30computeLogicalLocationForFloatEPKNS_14FloatingObjectENS_10LayoutUnitE(i6, i1, i38, i7);
    i63 = HEAP32[i36 >> 2] | 0;
    if ((HEAP32[i27 >> 2] & 8192 | 0) == 0) {
     HEAP32[i38 + 12 >> 2] = i63;
    } else {
     HEAP32[i38 + 8 >> 2] = i63;
    }
    HEAP32[i29 >> 2] = (HEAP32[i31 >> 2] | 0) + i63;
    __ZN7WebCore11RenderBlock22setLogicalLeftForChildERNS_9RenderBoxENS_10LayoutUnitENS0_20ApplyLayoutDeltaModeE(i37, i57, i8, 1);
    i63 = HEAP32[i30 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i60 >> 2] | 0) + 784 >> 2] & 127](i10, i59, HEAP32[i34 >> 2] | 0);
    HEAP32[i39 >> 2] = (HEAP32[i40 >> 2] | 0) + i63;
    __ZN7WebCore11RenderBlock21setLogicalTopForChildERNS_9RenderBoxENS_10LayoutUnitENS0_20ApplyLayoutDeltaModeE(i37, i57, i9, 1);
    __ZNK7WebCore11RenderBlock30estimateRegionRangeForBoxChildERKNS_9RenderBoxE(i37, i57);
    do {
     if ((HEAP8[HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i41 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0] & 2) == 0) {
      if ((HEAP32[i57 + 20 >> 2] & 31 | 0) == 0) {
       i76 = i63;
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 652 >> 2] & 63](i58);
      i76 = i63;
     } else {
      i61 = i57 | 0;
      i65 = i57 + 20 | 0;
      i77 = HEAP32[i65 >> 2] | 0;
      if ((i77 & 31 | 0) == 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 976 >> 2] & 63](i57);
       i78 = HEAP32[i65 >> 2] | 0;
      } else {
       i78 = i77;
      }
      if ((i78 & 31 | 0) != 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 652 >> 2] & 63](i58);
      }
      HEAP32[i42 >> 2] = i63;
      __ZN7WebCore15RenderBlockFlow26adjustForUnsplittableChildERNS_9RenderBoxENS_10LayoutUnitEb(i11, i1, i57, i12, 1);
      do {
       if ((HEAP32[i57 + 24 >> 2] & 16 | 0) == 0) {
        i79 = 0;
        i80 = 0;
       } else {
        i77 = i57;
        if ((i57 | 0) == 0) {
         i79 = 0;
         i80 = 0;
         break;
        }
        __ZNK7WebCore11RenderBlock15paginationStrutEv(i13, i77);
        if ((HEAP32[i48 >> 2] | 0) == 0) {
         i79 = i77;
         i80 = 1;
         break;
        }
        __ZNK7WebCore11RenderBlock15paginationStrutEv(i14, i77);
        HEAP32[i43 >> 2] = (HEAP32[i49 >> 2] | 0) + (HEAP32[i43 >> 2] | 0);
        HEAP32[i50 >> 2] = 0;
        __ZN7WebCore11RenderBlock18setPaginationStrutENS_10LayoutUnitE(i77, i15);
        i79 = i77;
        i80 = 1;
       }
      } while (0);
      i77 = HEAP32[i43 >> 2] | 0;
      do {
       if ((i77 | 0) == (i63 | 0)) {
        i81 = i63;
       } else {
        HEAP32[i38 + 24 >> 2] = i77 - i63;
        HEAP32[i44 >> 2] = i77;
        __ZNK7WebCore15RenderBlockFlow30computeLogicalLocationForFloatEPKNS_14FloatingObjectENS_10LayoutUnitE(i17, i1, i38, i18);
        i82 = HEAP32[i16 >> 2] | 0;
        i83 = HEAP32[i16 + 4 >> 2] | 0;
        HEAP32[i5 >> 2] = i82;
        HEAP32[i5 + 4 >> 2] = i83;
        i84 = i82;
        i82 = i83;
        if ((HEAP32[i27 >> 2] & 8192 | 0) == 0) {
         HEAP32[i38 + 12 >> 2] = i84;
        } else {
         HEAP32[i38 + 8 >> 2] = i84;
        }
        HEAP32[i45 >> 2] = (HEAP32[i31 >> 2] | 0) + i84;
        __ZN7WebCore11RenderBlock22setLogicalLeftForChildERNS_9RenderBoxENS_10LayoutUnitENS0_20ApplyLayoutDeltaModeE(i37, i57, i19, 1);
        FUNCTION_TABLE_viii[HEAP32[(HEAP32[i60 >> 2] | 0) + 784 >> 2] & 127](i21, i59, HEAP32[i34 >> 2] | 0);
        HEAP32[i46 >> 2] = (HEAP32[i47 >> 2] | 0) + i82;
        __ZN7WebCore11RenderBlock21setLogicalTopForChildERNS_9RenderBoxENS_10LayoutUnitENS0_20ApplyLayoutDeltaModeE(i37, i57, i20, 1);
        do {
         if (i80) {
          i84 = i79 + 20 | 0;
          i83 = HEAP32[i84 >> 2] | 0;
          if ((i83 & 4 | 0) != 0) {
           break;
          }
          HEAP32[i84 >> 2] = i83 | 4;
         }
        } while (0);
        if ((HEAP32[i65 >> 2] & 31 | 0) == 0) {
         i81 = i82;
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 652 >> 2] & 63](i58);
        i81 = i82;
       }
      } while (0);
      if (!(__ZNK7WebCore11RenderBlock28updateRegionRangeForBoxChildERKNS_9RenderBoxE(i37, i57) | 0)) {
       i76 = i81;
       break;
      }
      i77 = HEAP32[i65 >> 2] | 0;
      do {
       if ((i77 & 1 | 0) == 0) {
        i83 = i77 | 1;
        HEAP32[i65 >> 2] = i83;
        if ((i77 & 32768 | 0) == 0) {
         i85 = i83;
         break;
        }
        __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i61);
        i85 = HEAP32[i65 >> 2] | 0;
       } else {
        i85 = i77;
       }
      } while (0);
      if ((i85 & 31 | 0) == 0) {
       i76 = i81;
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 652 >> 2] & 63](i58);
      i76 = i81;
     }
    } while (0);
    if ((HEAP32[i27 >> 2] & 8192 | 0) == 0) {
     HEAP32[i38 + 8 >> 2] = i76;
    } else {
     HEAP32[i38 + 12 >> 2] = i76;
    }
    i58 = i57 + 56 | 0;
    i63 = i57 + 52 | 0;
    i77 = HEAP32[((HEAP32[i27 >> 2] & 8192 | 0) == 0 ? i63 : i58) >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i60 >> 2] | 0) + 784 >> 2] & 127](i22, i59, HEAP32[i34 >> 2] | 0);
    i65 = (HEAP32[i51 >> 2] | 0) + i77 | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i60 >> 2] | 0) + 788 >> 2] & 127](i23, i59, HEAP32[i34 >> 2] | 0);
    i77 = i65 + (HEAP32[i52 >> 2] | 0) | 0;
    if ((HEAP32[i27 >> 2] & 8192 | 0) == 0) {
     HEAP32[i38 + 16 >> 2] = i77;
    } else {
     HEAP32[i38 + 20 >> 2] = i77;
    }
    __ZN7WebCore15FloatingObjects15addPlacedObjectEPNS_14FloatingObjectE(HEAP32[i26 >> 2] | 0, i38);
    L110 : do {
     if (__ZN7WebCore16ShapeOutsideInfo12isEnabledForERKNS_9RenderBoxE(i57) | 0) {
      if ((HEAP8[H_BASE + 1232 | 0] | 0) == 0) {
       i77 = __ZN3WTF10fastMallocEj(20) | 0;
       i65 = i77;
       _memset(i77 | 0, 0, 20) | 0;
       HEAP32[H_BASE + 1216 >> 2] = i65;
       HEAP32[H_BASE + 1232 >> 2] = 1;
       HEAP32[H_BASE + 1236 >> 2] = 0;
       i86 = i65;
      } else {
       i86 = HEAP32[H_BASE + 1216 >> 2] | 0;
      }
      i65 = HEAP32[i86 + 8 >> 2] | 0;
      i77 = HEAP32[i86 >> 2] | 0;
      i61 = i57;
      i83 = i61 + ~(i61 << 15) | 0;
      i61 = (i83 >>> 10 ^ i83) * 9 & -1;
      i83 = i61 >>> 6 ^ i61;
      i61 = i83 + ~(i83 << 11) | 0;
      i83 = i61 >>> 16 ^ i61;
      if ((i77 | 0) == 0) {
       break;
      }
      i61 = i65 & i83;
      i84 = i77 + (i61 << 3) | 0;
      i87 = HEAP32[i84 >> 2] | 0;
      if ((i87 | 0) == (i57 | 0)) {
       i88 = i84;
      } else {
       i84 = (i83 >>> 23) + ~i83 | 0;
       i83 = i84 << 12 ^ i84;
       i84 = i83 >>> 7 ^ i83;
       i83 = i84 << 2 ^ i84;
       i84 = i83 >>> 20 ^ i83 | 1;
       i83 = 0;
       i89 = i61;
       i61 = i87;
       while (1) {
        if ((i61 | 0) == 0) {
         break L110;
        }
        i87 = (i83 | 0) == 0 ? i84 : i83;
        i90 = i87 + i89 & i65;
        i91 = i77 + (i90 << 3) | 0;
        i92 = HEAP32[i91 >> 2] | 0;
        if ((i92 | 0) == (i57 | 0)) {
         i88 = i91;
         break;
        } else {
         i83 = i87;
         i89 = i90;
         i61 = i92;
        }
       }
      }
      if ((i88 | 0) == 0) {
       break;
      }
      i61 = HEAP32[i88 + 4 >> 2] | 0;
      if ((i61 | 0) == 0) {
       break;
      }
      if ((HEAP32[i27 >> 2] & 8192 | 0) == 0) {
       i93 = i63;
       i94 = i58;
      } else {
       i93 = i58;
       i94 = i63;
      }
      HEAP32[i53 >> 2] = HEAP32[i94 >> 2];
      HEAP32[i54 >> 2] = HEAP32[i93 >> 2];
      __ZN7WebCore9ShapeInfoINS_9RenderBoxEE12setShapeSizeENS_10LayoutUnitES3_(i61 | 0, i24, i25);
     }
    } while (0);
    if (!(__ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv(i57 | 0) | 0)) {
     i95 = i70;
     break;
    }
    __ZN7WebCore9RenderBox26repaintDuringLayoutIfMovedERKNS_10LayoutRectE(i57, i4);
    i95 = i70;
   } else {
    i95 = i33;
   }
  } while (0);
  i38 = HEAP32[i55 + 8 >> 2] | 0;
  if ((i38 | 0) == 0) {
   i28 = 1;
   break;
  } else {
   i55 = i38;
   i33 = i95;
  }
 }
 STACKTOP = i2;
 return i28 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 278;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 282;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_iiiiii + 6;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 284;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viiii + 24;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viiiii + 12;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 274;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 280;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_viii + 56;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_viiiii + 14;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_viii + 52;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_viii + 60;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 276;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_viii + 66;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_viiii + 26;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_vii + 96;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_iiiifi + 4;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_iiiifi + 2;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_viii + 64;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_viii + 54;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_viiiii + 18;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_viii + 62;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_viiiii + 16;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_viii + 50;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_viiii + 22;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_viii + 58;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_iiiiiii + 6;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_iiiiiii + 4;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_vi + 28;
}
function __ZNK7WebCore15RenderBlockFlow30computeLogicalLocationForFloatEPKNS_14FloatingObjectENS_10LayoutUnitE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 448 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
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
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 i26 = i5 + 160 | 0;
 i27 = i5 + 168 | 0;
 i28 = i5 + 176 | 0;
 i29 = i5 + 184 | 0;
 i30 = i5 + 192 | 0;
 i31 = i5 + 200 | 0;
 i32 = i5 + 208 | 0;
 i33 = i5 + 216 | 0;
 i34 = i5 + 224 | 0;
 i35 = i5 + 232 | 0;
 i36 = i5 + 240 | 0;
 i37 = i5 + 248 | 0;
 i38 = i5 + 256 | 0;
 i39 = i5 + 264 | 0;
 i40 = i5 + 272 | 0;
 i41 = i5 + 280 | 0;
 i42 = i5 + 288 | 0;
 i43 = i5 + 296 | 0;
 i44 = i5 + 312 | 0;
 i45 = i5 + 320 | 0;
 i46 = i5 + 328 | 0;
 i47 = i5 + 336 | 0;
 i48 = i5 + 344 | 0;
 i49 = i5 + 352 | 0;
 i50 = i5 + 360 | 0;
 i51 = i5 + 368 | 0;
 i52 = i5 + 376 | 0;
 i53 = i5 + 384 | 0;
 i54 = i5 + 392 | 0;
 i55 = i5 + 400 | 0;
 i56 = i5 + 408 | 0;
 i57 = i5 + 416 | 0;
 i58 = i5 + 424 | 0;
 i59 = i5 + 432 | 0;
 i60 = i5 + 440 | 0;
 i61 = HEAP32[i3 >> 2] | 0;
 i62 = i2 | 0;
 i63 = i4 | 0;
 i4 = HEAP32[i63 >> 2] | 0;
 HEAP32[i36 >> 2] = i4;
 __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i38, i62, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i62, i36) | 0);
 i36 = __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(i62) | 0;
 do {
  if ((i36 | 0) == 0) {
   HEAP32[i20 >> 2] = i4;
   __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i46, i62, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i62, i20) | 0);
   i64 = HEAP32[i46 >> 2] | 0;
   i65 = i4;
   i66 = i2 + 20 | 0;
   i67 = i3 + 20 | 0;
   i68 = i3 + 16 | 0;
  } else {
   i69 = i2 + 20 | 0;
   i70 = (HEAP32[i69 >> 2] & 8192 | 0) == 0;
   i71 = i3 + 16 | 0;
   i72 = i3 + 20 | 0;
   i73 = HEAP32[(i70 ? i72 : i71) >> 2] | 0;
   i74 = HEAP32[(i70 ? i61 + 52 | 0 : i61 + 56 | 0) >> 2] | 0;
   i70 = i61 | 0;
   i75 = i61;
   i76 = i2 + 36 | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i75 >> 2] | 0) + 784 >> 2] & 127](i39, i70, HEAP32[i76 >> 2] | 0);
   i77 = (HEAP32[i39 >> 2] | 0) + i74 | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i75 >> 2] | 0) + 788 >> 2] & 127](i40, i70, HEAP32[i76 >> 2] | 0);
   i70 = i77 + (HEAP32[i40 >> 2] | 0) | 0;
   HEAP32[i42 >> 2] = i73;
   HEAP32[i42 + 4 >> 2] = i70;
   __ZNK7WebCore15ShapeInsideInfo31computeFirstFitPositionForFloatENS_10LayoutSizeE(i41, i36, i42);
   i73 = HEAP32[i41 >> 2] | 0;
   HEAP32[i63 >> 2] = i73;
   i77 = (HEAP32[(HEAP32[i76 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i77 | 0) == 3 | (i77 | 0) == 0) {
    i78 = i2 + 56 | 0;
   } else {
    i78 = i2 + 52 | 0;
   }
   if ((HEAP32[i78 >> 2] | 0) > (i73 | 0)) {
    if ((i77 | 0) == 3 | (i77 | 0) == 0) {
     i79 = i2 + 56 | 0;
    } else {
     i79 = i2 + 52 | 0;
    }
    i77 = HEAP32[i79 >> 2] | 0;
    HEAP32[i63 >> 2] = i77;
    i80 = i77;
   } else {
    i80 = i73;
   }
   HEAP32[i44 >> 2] = i80;
   HEAP32[i45 >> 2] = i70;
   __ZNK7WebCore9ShapeInfoINS_11RenderBlockEE22computeSegmentsForLineENS_10LayoutUnitES3_(i43, i36 | 0, i44, i45);
   i70 = i43 + 8 | 0;
   i73 = HEAP32[i70 >> 2] | 0;
   if ((i73 | 0) == 0) {
    i81 = 0;
   } else if ((i73 | 0) == 1) {
    i73 = HEAP32[i43 >> 2] | 0;
    i77 = i38 | 0;
    i76 = HEAP32[i77 >> 2] | 0;
    i75 = (HEAP32[i73 + 4 >> 2] | 0) + i76 | 0;
    HEAP32[i77 >> 2] = (HEAP32[i73 >> 2] | 0) + i76;
    i82 = i75;
    i83 = 12;
   } else {
    i82 = 0;
    i83 = 12;
   }
   if ((i83 | 0) == 12) {
    HEAP32[i70 >> 2] = 0;
    i81 = i82;
   }
   i70 = i43 | 0;
   i75 = HEAP32[i70 >> 2] | 0;
   if ((i75 | 0) == 0) {
    i64 = i81;
    i65 = i80;
    i66 = i69;
    i67 = i72;
    i68 = i71;
    break;
   }
   HEAP32[i70 >> 2] = 0;
   HEAP32[i43 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i75);
   i64 = i81;
   i65 = i80;
   i66 = i69;
   i67 = i72;
   i68 = i71;
  }
 } while (0);
 i80 = HEAP32[i66 >> 2] | 0;
 i81 = HEAP32[((i80 & 8192 | 0) == 0 ? i67 : i68) >> 2] | 0;
 i43 = i38 | 0;
 i38 = i64 - (HEAP32[i43 >> 2] | 0) | 0;
 i82 = (i38 | 0) < (i81 | 0) ? i38 : i81;
 if ((i80 & 805306368 | 0) == 0) {
  i84 = 0;
 } else {
  i84 = (__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0) != 0;
 }
 if ((HEAP32[(HEAP32[i61 + 36 >> 2] | 0) + 48 >> 2] & 100663296 | 0) != 33554432) {
  i61 = i54 | 0;
  HEAP32[i61 >> 2] = 1;
  i80 = i55 | 0;
  HEAP32[i80 >> 2] = 1;
  i81 = i2 + 96 | 0;
  i38 = HEAP32[i81 >> 2] | 0;
  do {
   if ((i38 | 0) == 0) {
    i85 = i64;
   } else {
    if ((HEAP32[i38 + 52 >> 2] | 0) == 0) {
     i85 = i64;
     break;
    }
    HEAP32[i24 >> 2] = i64;
    HEAP32[i25 >> 2] = i65;
    __ZN7WebCore15FloatingObjects37logicalRightOffsetForPositioningFloatENS_10LayoutUnitES1_PS1_(i23, i38, i24, i25, i55);
    i85 = HEAP32[i23 >> 2] | 0;
   }
  } while (0);
  HEAP32[i26 >> 2] = i85;
  __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i56, i62, i26, 0);
  i26 = i30 | 0;
  i85 = i57 | 0;
  i23 = i34 | 0;
  i25 = i58 | 0;
  i24 = i32 | 0;
  i38 = i33 | 0;
  i83 = i31 | 0;
  i45 = i28 | 0;
  i44 = i29 | 0;
  i36 = i27 | 0;
  i79 = i35 | 0;
  i78 = i59 | 0;
  i41 = i37 | 0;
  i42 = i60 | 0;
  i40 = i82;
  i39 = i64;
  i3 = i65;
  i4 = HEAP32[i56 >> 2] | 0;
  L31 : while (1) {
   i86 = i3;
   i87 = i4;
   while (1) {
    i56 = HEAP32[i43 >> 2] | 0;
    i46 = HEAP32[i81 >> 2] | 0;
    do {
     if ((i46 | 0) == 0) {
      i88 = i56;
     } else {
      if ((HEAP32[i46 + 48 >> 2] | 0) == 0) {
       i88 = i56;
       break;
      }
      HEAP32[i45 >> 2] = i56;
      HEAP32[i44 >> 2] = i86;
      __ZN7WebCore15FloatingObjects36logicalLeftOffsetForPositioningFloatENS_10LayoutUnitES1_PS1_(i27, i46, i28, i29, i54);
      i88 = HEAP32[i36 >> 2] | 0;
     }
    } while (0);
    HEAP32[i26 >> 2] = i88;
    __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i57, i62, i30, 0);
    if ((i87 - (HEAP32[i85 >> 2] | 0) | 0) >= (i40 | 0)) {
     break L31;
    }
    i89 = (HEAP32[((HEAP32[i80 >> 2] | 0) < (HEAP32[i61 >> 2] | 0) ? i55 : i54) >> 2] | 0) + i86 | 0;
    HEAP32[i63 >> 2] = i89;
    i46 = HEAP32[i81 >> 2] | 0;
    do {
     if ((i46 | 0) == 0) {
      i90 = i39;
     } else {
      if ((HEAP32[i46 + 52 >> 2] | 0) == 0) {
       i90 = i39;
       break;
      }
      HEAP32[i24 >> 2] = i39;
      HEAP32[i38 >> 2] = i89;
      __ZN7WebCore15FloatingObjects37logicalRightOffsetForPositioningFloatENS_10LayoutUnitES1_PS1_(i31, i46, i32, i33, i55);
      i90 = HEAP32[i83 >> 2] | 0;
     }
    } while (0);
    HEAP32[i23 >> 2] = i90;
    __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i58, i62, i34, 0);
    i91 = HEAP32[i25 >> 2] | 0;
    if (i84) {
     break;
    } else {
     i86 = i89;
     i87 = i91;
    }
   }
   HEAP32[i79 >> 2] = i89;
   __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i59, i62, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i62, i35) | 0);
   i46 = HEAP32[i78 >> 2] | 0;
   HEAP32[i41 >> 2] = i89;
   __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i60, i62, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i62, i37) | 0);
   i56 = HEAP32[i42 >> 2] | 0;
   HEAP32[i43 >> 2] = i56;
   i20 = HEAP32[((HEAP32[i66 >> 2] & 8192 | 0) == 0 ? i67 : i68) >> 2] | 0;
   i71 = i46 - i56 | 0;
   i40 = (i71 | 0) < (i20 | 0) ? i71 : i20;
   i39 = i46;
   i3 = i89;
   i4 = i91;
  }
  i92 = i87 - (HEAP32[((HEAP32[i66 >> 2] & 8192 | 0) == 0 ? i67 : i68) >> 2] | 0) | 0;
  i93 = i86;
  i94 = i1 | 0;
  HEAP32[i94 >> 2] = i92;
  i95 = i1 + 4 | 0;
  HEAP32[i95 >> 2] = i93;
  STACKTOP = i5;
  return;
 }
 i86 = i47 | 0;
 HEAP32[i86 >> 2] = 1;
 i87 = i48 | 0;
 HEAP32[i87 >> 2] = 1;
 i91 = HEAP32[i43 >> 2] | 0;
 i4 = i2 + 96 | 0;
 i89 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i89 | 0) == 0) {
   i96 = i91;
  } else {
   if ((HEAP32[i89 + 48 >> 2] | 0) == 0) {
    i96 = i91;
    break;
   }
   HEAP32[i11 >> 2] = i91;
   HEAP32[i12 >> 2] = i65;
   __ZN7WebCore15FloatingObjects36logicalLeftOffsetForPositioningFloatENS_10LayoutUnitES1_PS1_(i10, i89, i11, i12, i47);
   i96 = HEAP32[i10 >> 2] | 0;
  }
 } while (0);
 HEAP32[i13 >> 2] = i96;
 __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i49, i62, i13, 0);
 i13 = i9 | 0;
 i96 = i50 | 0;
 i10 = i17 | 0;
 i12 = i51 | 0;
 i11 = i15 | 0;
 i89 = i16 | 0;
 i91 = i14 | 0;
 i3 = i7 | 0;
 i39 = i8 | 0;
 i40 = i6 | 0;
 i42 = i18 | 0;
 i37 = i52 | 0;
 i60 = i19 | 0;
 i41 = i53 | 0;
 i78 = i82;
 i82 = i64;
 i64 = i65;
 i65 = HEAP32[i49 >> 2] | 0;
 L52 : while (1) {
  i97 = i64;
  i98 = i65;
  while (1) {
   i49 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i49 | 0) == 0) {
     i99 = i82;
    } else {
     if ((HEAP32[i49 + 52 >> 2] | 0) == 0) {
      i99 = i82;
      break;
     }
     HEAP32[i3 >> 2] = i82;
     HEAP32[i39 >> 2] = i97;
     __ZN7WebCore15FloatingObjects37logicalRightOffsetForPositioningFloatENS_10LayoutUnitES1_PS1_(i6, i49, i7, i8, i48);
     i99 = HEAP32[i40 >> 2] | 0;
    }
   } while (0);
   HEAP32[i13 >> 2] = i99;
   __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i50, i62, i9, 0);
   if (((HEAP32[i96 >> 2] | 0) - i98 | 0) >= (i78 | 0)) {
    break L52;
   }
   i100 = (HEAP32[((HEAP32[i87 >> 2] | 0) < (HEAP32[i86 >> 2] | 0) ? i48 : i47) >> 2] | 0) + i97 | 0;
   HEAP32[i63 >> 2] = i100;
   i49 = HEAP32[i43 >> 2] | 0;
   i35 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i35 | 0) == 0) {
     i101 = i49;
    } else {
     if ((HEAP32[i35 + 48 >> 2] | 0) == 0) {
      i101 = i49;
      break;
     }
     HEAP32[i11 >> 2] = i49;
     HEAP32[i89 >> 2] = i100;
     __ZN7WebCore15FloatingObjects36logicalLeftOffsetForPositioningFloatENS_10LayoutUnitES1_PS1_(i14, i35, i15, i16, i47);
     i101 = HEAP32[i91 >> 2] | 0;
    }
   } while (0);
   HEAP32[i10 >> 2] = i101;
   __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i51, i62, i17, 0);
   i102 = HEAP32[i12 >> 2] | 0;
   if (i84) {
    break;
   } else {
    i97 = i100;
    i98 = i102;
   }
  }
  HEAP32[i42 >> 2] = i100;
  __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i52, i62, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i62, i18) | 0);
  i35 = HEAP32[i37 >> 2] | 0;
  HEAP32[i60 >> 2] = i100;
  __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i53, i62, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i62, i19) | 0);
  i49 = HEAP32[i41 >> 2] | 0;
  HEAP32[i43 >> 2] = i49;
  i59 = HEAP32[((HEAP32[i66 >> 2] & 8192 | 0) == 0 ? i67 : i68) >> 2] | 0;
  i79 = i35 - i49 | 0;
  i78 = (i79 | 0) < (i59 | 0) ? i79 : i59;
  i82 = i35;
  i64 = i100;
  i65 = i102;
 }
 i102 = i2 | 0;
 i65 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i100 = HEAP32[i2 >> 2] | 0;
 if ((i65 | 0) == 3 | (i65 | 0) == 0) {
  i65 = FUNCTION_TABLE_ii[HEAP32[i100 + 744 >> 2] & 511](i102) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i21, i102);
  i103 = (HEAP32[i21 >> 2] | 0) + i65 | 0;
 } else {
  i65 = FUNCTION_TABLE_ii[HEAP32[i100 + 736 >> 2] & 511](i102) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i22, i102);
  i103 = (HEAP32[i22 >> 2] | 0) + i65 | 0;
 }
 i65 = (HEAP32[i43 >> 2] | 0) - i103 | 0;
 i92 = (i65 | 0) < (i98 | 0) ? i98 : i65;
 i93 = i97;
 i94 = i1 | 0;
 HEAP32[i94 >> 2] = i92;
 i95 = i1 + 4 | 0;
 HEAP32[i95 >> 2] = i93;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow31adjustLinePositionForPaginationEPNS_13RootInlineBoxERNS_10LayoutUnitEPNS_16RenderFlowThreadE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, d38 = +0, d39 = +0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 80 | 0;
 i15 = i5 + 88 | 0;
 i16 = i5 + 96 | 0;
 i17 = i5 + 104 | 0;
 i18 = i5 + 112 | 0;
 i19 = i5 + 128 | 0;
 i20 = i5 + 136 | 0;
 i21 = i5 + 144 | 0;
 i22 = i5 + 152 | 0;
 i23 = i22 | 0;
 i24 = i22;
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
 i35 = HEAP32[i2 + 72 >> 2] | 0;
 i36 = HEAP32[i2 + 76 >> 2] | 0;
 i37 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i37 | 0) == 0) {
  if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
   d38 = +HEAPF32[i2 + 24 >> 2];
   d39 = +HEAPF32[i2 + 28 >> 2];
   HEAPF32[i18 >> 2] = +(i35 | 0);
   HEAPF32[i18 + 4 >> 2] = d38;
   HEAPF32[i18 + 8 >> 2] = +(i36 - i35 | 0);
   HEAPF32[i18 + 12 >> 2] = d39;
  } else {
   d39 = +HEAPF32[i2 + 28 >> 2];
   HEAPF32[i18 >> 2] = +HEAPF32[i2 + 20 >> 2];
   HEAPF32[i18 + 4 >> 2] = +(i35 | 0);
   HEAPF32[i18 + 8 >> 2] = d39;
   HEAPF32[i18 + 12 >> 2] = +(i36 - i35 | 0);
  }
  __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i24, i18);
 } else {
  i18 = i22;
  i35 = i37 + 20 | 0;
  HEAP32[i18 >> 2] = HEAP32[i35 >> 2];
  HEAP32[i18 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
  HEAP32[i18 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
  HEAP32[i18 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
 }
 i35 = HEAP32[i24 + 4 >> 2] | 0;
 if ((HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 20 >> 2] & 8192 | 0) == 0) {
  i18 = HEAP32[i22 >> 2] | 0;
  i37 = i22 + 8 | 0;
  i22 = HEAP32[i37 >> 2] | 0;
  i36 = HEAP32[i24 + 12 >> 2] | 0;
  HEAP32[i23 >> 2] = i35;
  HEAP32[i23 + 4 >> 2] = i18;
  HEAP32[i37 >> 2] = i36;
  HEAP32[i37 + 4 >> 2] = i22;
  i40 = i18;
  i41 = i22;
 } else {
  i40 = i35;
  i41 = HEAP32[i24 + 12 >> 2] | 0;
 }
 i35 = i2 + 80 | 0;
 i22 = HEAP32[i35 >> 2] | 0;
 i18 = i24 + 4 | 0;
 i37 = (i40 | 0) < (i22 | 0) ? i40 : i22;
 HEAP32[i25 >> 2] = i37;
 i22 = HEAP32[i2 + 84 >> 2] | 0;
 i36 = i24 + 12 | 0;
 i24 = i41 + i40 | 0;
 i40 = (i22 | 0) < (i24 | 0) ? i24 : i22;
 i22 = i40 - i37 | 0;
 i24 = i1 + 36 | 0;
 i41 = HEAP32[(HEAP32[i24 >> 2] | 0) + 24 >> 2] | 0;
 i23 = i13;
 i42 = i13 | 0;
 i43 = i13;
 i44 = HEAP32[i41 + 88 >> 2] | 0;
 if ((i44 & 2 | 0) == 0) {
  i45 = HEAP16[i41 + 86 >> 1] | 0;
 } else {
  i45 = 1;
 }
 if ((i44 & 1 | 0) == 0) {
  i46 = HEAP16[i41 + 84 >> 1] | 0;
 } else {
  i46 = 1;
 }
 i41 = i45 >>> 0 < i46 >>> 0 ? i46 : i45;
 if (i41 >>> 0 > 1 >>> 0) {
  i45 = i2;
  i46 = 1;
  while (1) {
   i44 = HEAP32[i45 + 48 >> 2] | 0;
   if ((i44 | 0) == 0) {
    i47 = i45;
    break;
   }
   i48 = i44;
   i44 = i46 + 1 | 0;
   if (i44 >>> 0 < i41 >>> 0) {
    i45 = i48;
    i46 = i44;
   } else {
    i47 = i48;
    break;
   }
  }
  i46 = HEAP32[i47 + 72 >> 2] | 0;
  i45 = HEAP32[i47 + 76 >> 2] | 0;
  i41 = HEAP32[i47 + 36 >> 2] | 0;
  if ((i41 | 0) == 0) {
   if ((HEAP32[i47 + 32 >> 2] & 2048 | 0) == 0) {
    d39 = +HEAPF32[i47 + 24 >> 2];
    d38 = +HEAPF32[i47 + 28 >> 2];
    HEAPF32[i12 >> 2] = +(i46 | 0);
    HEAPF32[i12 + 4 >> 2] = d39;
    HEAPF32[i12 + 8 >> 2] = +(i45 - i46 | 0);
    HEAPF32[i12 + 12 >> 2] = d38;
   } else {
    d38 = +HEAPF32[i47 + 28 >> 2];
    HEAPF32[i12 >> 2] = +HEAPF32[i47 + 20 >> 2];
    HEAPF32[i12 + 4 >> 2] = +(i46 | 0);
    HEAPF32[i12 + 8 >> 2] = d38;
    HEAPF32[i12 + 12 >> 2] = +(i45 - i46 | 0);
   }
   __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i43, i12);
  } else {
   i12 = i41 + 20 | 0;
   HEAP32[i23 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i23 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i23 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i23 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
  }
  i12 = HEAP32[i43 + 4 >> 2] | 0;
  if ((HEAP32[(HEAP32[i47 + 16 >> 2] | 0) + 20 >> 2] & 8192 | 0) == 0) {
   i23 = HEAP32[i13 >> 2] | 0;
   i41 = i13 + 8 | 0;
   i13 = HEAP32[i43 + 12 >> 2] | 0;
   i43 = HEAP32[i41 >> 2] | 0;
   HEAP32[i42 >> 2] = i12;
   HEAP32[i42 + 4 >> 2] = i23;
   HEAP32[i41 >> 2] = i13;
   HEAP32[i41 + 4 >> 2] = i43;
   i49 = i23;
  } else {
   i49 = i12;
  }
  i12 = HEAP32[i47 + 80 >> 2] | 0;
  i50 = (i49 | 0) < (i12 | 0) ? i49 : i12;
 } else {
  i50 = i37;
 }
 i12 = i40 - i50 | 0;
 i50 = i8;
 _llvm_lifetime_start(4, 0, i50 | 0);
 i40 = i1 + 20 | 0;
 do {
  if ((HEAP32[i40 >> 2] & 805306368 | 0) == 0) {
   i51 = 29;
  } else {
   i49 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
   if ((i49 | 0) == 0) {
    i51 = 29;
    break;
   }
   i47 = HEAP32[(HEAP32[i49 >> 2] | 0) + 1184 >> 2] | 0;
   i23 = i1 | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 864 >> 2] & 127](i10, i23);
   HEAP32[i9 >> 2] = (HEAP32[i10 >> 2] | 0) + i37;
   HEAP32[i11 >> 2] = i12;
   FUNCTION_TABLE_viiii[i47 & 31](i49, i23, i9, i11);
  }
 } while (0);
 do {
  if ((i51 | 0) == 29) {
   i11 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 4 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   HEAP32[i8 >> 2] = i12;
   i9 = i11 + 24 | 0;
   i11 = i9 | 0;
   HEAP32[i11 >> 2] = HEAP32[((i12 | 0) < (HEAP32[i11 >> 2] | 0) ? i9 : i8) >> 2];
  }
 } while (0);
 _llvm_lifetime_end(4, 0, i50 | 0);
 i50 = i3 | 0;
 i3 = (HEAP32[i50 >> 2] | 0) + i37 | 0;
 HEAP32[i25 >> 2] = i3;
 i37 = i2 + 92 | 0;
 HEAP32[i37 >> 2] = 0;
 i8 = i2 + 56 | 0;
 HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -8388609;
 do {
  if ((HEAP32[i40 >> 2] & 805306368 | 0) == 0) {
   i51 = 33;
  } else {
   i12 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
   if ((i12 | 0) == 0) {
    i51 = 33;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 864 >> 2] & 127](i7, i1 | 0);
   HEAP32[i6 >> 2] = (HEAP32[i7 >> 2] | 0) + i3;
   __ZN7WebCore16RenderFlowThread26pageLogicalHeightForOffsetENS_10LayoutUnitE(i26, i12, i6);
  }
 } while (0);
 if ((i51 | 0) == 33) {
  HEAP32[i26 >> 2] = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2];
 }
 if ((i4 | 0) == 0) {
  i52 = 1;
 } else {
  i52 = (HEAP8[i4 + 292 | 0] & 4) != 0;
 }
 i4 = i26 | 0;
 i26 = HEAP32[i4 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 do {
  if (i52) {
   if ((HEAP32[i36 >> 2] | 0) <= (i26 | 0)) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i27 >> 2] = i3;
 if (!(__ZNK7WebCore15RenderBlockFlow11hasNextPageENS_10LayoutUnitENS0_16PageBoundaryRuleE(i1, i27, 0) | 0)) {
  STACKTOP = i5;
  return;
 }
 i27 = i1 | 0;
 i26 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 864 >> 2] & 127](i14, i27);
 i36 = (HEAP32[i14 >> 2] | 0) + i3 | 0;
 do {
  if ((HEAP32[i40 >> 2] & 805306368 | 0) == 0) {
   i51 = 43;
  } else {
   i14 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
   if ((i14 | 0) == 0) {
    i51 = 43;
    break;
   }
   HEAP32[i15 >> 2] = i36;
   __ZN7WebCore16RenderFlowThread35pageRemainingLogicalHeightForOffsetENS_10LayoutUnitENS_15RenderBlockFlow16PageBoundaryRuleE(i28, i14, i15, 0);
   i53 = i28 | 0;
  }
 } while (0);
 if ((i51 | 0) == 43) {
  i15 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2] | 0;
  i14 = i28 | 0;
  HEAP32[i14 >> 2] = i15 - ((i36 | 0) % (i15 | 0) & -1);
  i53 = i14;
 }
 i14 = __ZNK7WebCore15RenderBlockFlow9lineCountEPKNS_13RootInlineBoxEPb(i1, i2, 0) | 0;
 i15 = HEAP32[i53 >> 2] | 0;
 i36 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i15 | 0) >= (i22 | 0)) {
   if ((i36 | 0) != 0) {
    i6 = HEAP32[i36 + 20 >> 2] | 0;
    if ((i6 | 0) > -1 & (i6 | 0) == (i14 | 0)) {
     break;
    }
   }
   if ((i15 | 0) != (HEAP32[i4 >> 2] | 0)) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i1 + 104 >> 2] | 0) == (i2 | 0)) {
    STACKTOP = i5;
    return;
   }
   HEAP32[i8 >> 2] = HEAP32[i8 >> 2] | 8388608;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i15 = i1 + 100 | 0;
 do {
  if ((i36 | 0) != 0) {
   i6 = i36 + 20 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if (!((i7 | 0) > -1 & (i7 | 0) == (i14 | 0))) {
    break;
   }
   HEAP32[i6 >> 2] = -1;
   i6 = HEAP32[i15 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 + 32 | 0;
   HEAP8[i7] = HEAP8[i7] | 4;
  }
 } while (0);
 do {
  if (!i52) {
   HEAP32[i29 >> 2] = i3;
   HEAP32[i30 >> 2] = i22;
   if (__ZNK7WebCore15RenderBlockFlow38pushToNextPageWithMinimumLogicalHeightERNS_10LayoutUnitES1_S1_(i1, i28, i29, i30) | 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i30 = HEAP32[i4 >> 2] | 0;
 if ((i22 | 0) > (i30 | 0)) {
  i4 = i22 - i30 | 0;
  i29 = (HEAP32[i18 >> 2] | 0) - (HEAP32[i35 >> 2] | 0) | 0;
  i35 = (i29 | 0) > 0 ? i29 : 0;
  HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) - ((i35 | 0) < (i4 | 0) ? i35 : i4);
 }
 HEAP32[i31 >> 2] = 0;
 i4 = (i3 | 0) > 0;
 i35 = i25;
 i25 = (HEAP32[(i4 ? i35 : i31) >> 2] | 0) + i22 | 0;
 L93 : do {
  if (i52) {
   HEAP32[i32 >> 2] = i30;
  } else {
   i31 = (HEAP32[i53 >> 2] | 0) + i3 | 0;
   do {
    if ((HEAP32[i40 >> 2] & 805306368 | 0) != 0) {
     i29 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 864 >> 2] & 127](i17, i27);
     HEAP32[i16 >> 2] = i31 + (HEAP32[i17 >> 2] | 0);
     __ZN7WebCore16RenderFlowThread26pageLogicalHeightForOffsetENS_10LayoutUnitE(i32, i29, i16);
     break L93;
    }
   } while (0);
   HEAP32[i32 >> 2] = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2];
  }
 } while (0);
 i16 = i22 - (HEAP32[i53 >> 2] | 0) | 0;
 do {
  if ((HEAP32[i40 >> 2] & 805306368 | 0) != 0) {
   i22 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i17 = HEAP32[(HEAP32[i22 >> 2] | 0) + 1180 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 864 >> 2] & 127](i20, i27);
   HEAP32[i19 >> 2] = (HEAP32[i20 >> 2] | 0) + i3;
   HEAP32[i21 >> 2] = i16;
   FUNCTION_TABLE_viiii[i17 & 31](i22, i27, i19, i21);
  }
 } while (0);
 if ((HEAP32[i1 + 104 >> 2] | 0) == (i2 | 0)) {
  if ((i25 | 0) < (HEAP32[i32 >> 2] | 0)) {
   i51 = 69;
  } else {
   i51 = 67;
  }
 } else {
  i51 = 67;
 }
 do {
  if ((i51 | 0) == 67) {
   i32 = HEAP32[(HEAP32[i24 >> 2] | 0) + 24 >> 2] | 0;
   if ((HEAP32[i32 + 88 >> 2] & 2 | 0) != 0) {
    break;
   }
   if ((HEAP16[i32 + 86 >> 1] | 0) >= (i14 | 0)) {
    i51 = 69;
   }
  }
 } while (0);
 do {
  if ((i51 | 0) == 69) {
   if ((HEAP32[i40 >> 2] & 25165824 | 0) == 16777216) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 188 >> 2] & 511](i1 | 0) | 0) {
    break;
   }
   HEAP32[i34 >> 2] = 0;
   HEAP32[i33 >> 2] = (HEAP32[(i4 ? i35 : i34) >> 2] | 0) + (HEAP32[i53 >> 2] | 0);
   __ZN7WebCore11RenderBlock18setPaginationStrutENS_10LayoutUnitE(i27, i33);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i33 = HEAP32[i53 >> 2] | 0;
 HEAP32[i50 >> 2] = i33 + (HEAP32[i50 >> 2] | 0);
 HEAP32[i37 >> 2] = i33;
 HEAP32[i8 >> 2] = HEAP32[i8 >> 2] | 8388608;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow13getClearDeltaERNS_9RenderBoxENS_10LayoutUnitE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
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
 i24 = i5 + 144 | 0;
 i25 = i5 + 160 | 0;
 i26 = i5 + 168 | 0;
 i27 = i5 + 176 | 0;
 i28 = i5 + 184 | 0;
 i29 = i5 + 200 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 1024 >> 2] & 511](i2) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i30 = i3 + 36 | 0;
 i31 = (HEAP32[(HEAP32[i30 >> 2] | 0) + 48 >> 2] | 0) >>> 20 & 3;
 i32 = (i31 | 0) == 0;
 do {
  if ((i31 | 0) == 1) {
   i33 = HEAP32[i2 + 96 >> 2] | 0;
   if ((i33 | 0) == 0) {
    i34 = 0;
    break;
   }
   i35 = HEAP32[i33 + 20 >> 2] | 0;
   if ((i35 | 0) == 0) {
    i34 = 0;
    break;
   }
   i33 = i2 + 20 | 0;
   i36 = i35;
   i35 = 0;
   while (1) {
    i37 = HEAP32[i36 >> 2] | 0;
    if ((HEAP32[i37 + 28 >> 2] & 17 | 0) == 17) {
     if ((HEAP32[i33 >> 2] & 8192 | 0) == 0) {
      i38 = (HEAP32[i37 + 16 >> 2] | 0) + (HEAP32[i37 + 8 >> 2] | 0) | 0;
     } else {
      i38 = (HEAP32[i37 + 20 >> 2] | 0) + (HEAP32[i37 + 12 >> 2] | 0) | 0;
     }
     i39 = (i35 | 0) < (i38 | 0) ? i38 : i35;
    } else {
     i39 = i35;
    }
    i37 = HEAP32[i36 + 8 >> 2] | 0;
    if ((i37 | 0) == 0) {
     i34 = i39;
     break;
    } else {
     i36 = i37;
     i35 = i39;
    }
   }
  } else if ((i31 | 0) == 3) {
   i35 = HEAP32[i2 + 96 >> 2] | 0;
   if ((i35 | 0) == 0) {
    i34 = 0;
    break;
   }
   i36 = HEAP32[i35 + 20 >> 2] | 0;
   if ((i36 | 0) == 0) {
    i34 = 0;
    break;
   }
   i35 = i2 + 20 | 0;
   i33 = i36;
   i36 = 0;
   while (1) {
    i37 = HEAP32[i33 >> 2] | 0;
    i40 = HEAP32[i37 + 28 >> 2] | 0;
    if ((i40 & 16 | 0) == 0 | (i40 & 3 | 0) == 0) {
     i41 = i36;
    } else {
     if ((HEAP32[i35 >> 2] & 8192 | 0) == 0) {
      i42 = (HEAP32[i37 + 16 >> 2] | 0) + (HEAP32[i37 + 8 >> 2] | 0) | 0;
     } else {
      i42 = (HEAP32[i37 + 20 >> 2] | 0) + (HEAP32[i37 + 12 >> 2] | 0) | 0;
     }
     i41 = (i36 | 0) < (i42 | 0) ? i42 : i36;
    }
    i37 = HEAP32[i33 + 8 >> 2] | 0;
    if ((i37 | 0) == 0) {
     i34 = i41;
     break;
    } else {
     i33 = i37;
     i36 = i41;
    }
   }
  } else if ((i31 | 0) == 2) {
   i36 = HEAP32[i2 + 96 >> 2] | 0;
   if ((i36 | 0) == 0) {
    i34 = 0;
    break;
   }
   i33 = HEAP32[i36 + 20 >> 2] | 0;
   if ((i33 | 0) == 0) {
    i34 = 0;
    break;
   }
   i36 = i2 + 20 | 0;
   i35 = i33;
   i33 = 0;
   while (1) {
    i37 = HEAP32[i35 >> 2] | 0;
    if ((HEAP32[i37 + 28 >> 2] & 18 | 0) == 18) {
     if ((HEAP32[i36 >> 2] & 8192 | 0) == 0) {
      i43 = (HEAP32[i37 + 16 >> 2] | 0) + (HEAP32[i37 + 8 >> 2] | 0) | 0;
     } else {
      i43 = (HEAP32[i37 + 20 >> 2] | 0) + (HEAP32[i37 + 12 >> 2] | 0) | 0;
     }
     i44 = (i33 | 0) < (i43 | 0) ? i43 : i33;
    } else {
     i44 = i33;
    }
    i37 = HEAP32[i35 + 8 >> 2] | 0;
    if ((i37 | 0) == 0) {
     i34 = i44;
     break;
    } else {
     i35 = i37;
     i33 = i44;
    }
   }
  } else {
   i34 = 0;
  }
 } while (0);
 if (i32) {
  i45 = 33;
 } else {
  i32 = i34 - (HEAP32[i4 >> 2] | 0) | 0;
  i34 = (i32 | 0) > 0 ? i32 : 0;
  if ((i34 | 0) == 0) {
   i45 = 33;
  } else {
   i46 = i34;
  }
 }
 L45 : do {
  if ((i45 | 0) == 33) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 972 >> 2] & 511](i3) | 0)) {
    i46 = 0;
    break;
   }
   i34 = HEAP32[i4 >> 2] | 0;
   i32 = i2 | 0;
   i44 = i2 + 20 | 0;
   i43 = i3 + 56 | 0;
   i31 = i3 + 52 | 0;
   i41 = i18 | 0;
   i42 = i10 | 0;
   i39 = i2;
   i38 = i7 | 0;
   i33 = i8 | 0;
   i35 = i9 | 0;
   i36 = i15 | 0;
   i37 = i12 | 0;
   i40 = i13 | 0;
   i47 = i14 | 0;
   i48 = i16 | 0;
   i49 = i17 | 0;
   i50 = i21 | 0;
   i51 = i19 | 0;
   i52 = i20 | 0;
   i53 = i3 + 44 | 0;
   i54 = i23 | 0;
   i55 = i24 + 12 | 0;
   i56 = i3;
   i57 = i3;
   i58 = i27 | 0;
   i59 = i24;
   i60 = i28;
   i61 = i25 | 0;
   i62 = i3 + 72 | 0;
   i63 = i26 | 0;
   i64 = i3 + 64 | 0;
   i65 = i2 + 96 | 0;
   i66 = i29 | 0;
   i67 = i22 | 0;
   i68 = i3 + 48 | 0;
   i69 = i24 + 8 | 0;
   i70 = i34;
   while (1) {
    i71 = HEAP32[((HEAP32[i44 >> 2] & 8192 | 0) == 0 ? i31 : i43) >> 2] | 0;
    HEAP32[i41 >> 2] = i70;
    i72 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i32, i18) | 0;
    __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i10, i32, i72);
    i73 = HEAP32[i42 >> 2] | 0;
    i74 = HEAP32[(HEAP32[i39 >> 2] | 0) + 1068 >> 2] | 0;
    HEAP32[i38 >> 2] = i70;
    HEAP32[i33 >> 2] = i73;
    HEAP32[i35 >> 2] = i71;
    FUNCTION_TABLE_viiiii[i74 & 31](i6, i32, i7, i8, i9);
    __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i16, i32, i6, 0);
    __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i15, i32, i72);
    i72 = HEAP32[i36 >> 2] | 0;
    i74 = HEAP32[(HEAP32[i39 >> 2] | 0) + 1072 >> 2] | 0;
    HEAP32[i37 >> 2] = i70;
    HEAP32[i40 >> 2] = i72;
    HEAP32[i47 >> 2] = i71;
    FUNCTION_TABLE_viiiii[i74 & 31](i11, i32, i12, i13, i14);
    __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i17, i32, i11, 0);
    i74 = (HEAP32[i48 >> 2] | 0) - (HEAP32[i49 >> 2] | 0) | 0;
    i71 = (i74 | 0) > 0 ? i74 : 0;
    HEAP32[i50 >> 2] = i70;
    i74 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i32, i21) | 0;
    __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i19, i32, i74);
    __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i20, i32, i74);
    i74 = (HEAP32[i51 >> 2] | 0) - (HEAP32[i52 >> 2] | 0) | 0;
    if ((i71 | 0) == (((i74 | 0) > 0 ? i74 : 0) | 0)) {
     i45 = 36;
     break;
    }
    HEAP32[i54 >> 2] = HEAP32[((HEAP32[i44 >> 2] & 8192 | 0) == 0 ? i53 : i68) >> 2];
    __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i24, i3, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i32, i23) | 0, 1);
    i75 = (HEAP32[i44 >> 2] & 8192 | 0) == 0 ? HEAP32[i55 >> 2] | 0 : HEAP32[i69 >> 2] | 0;
    i74 = (HEAP32[(HEAP32[i30 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i74 | 0) == 3 | (i74 | 0) == 0) {
     i76 = i31;
    } else {
     i76 = i43;
    }
    i74 = HEAP32[i76 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 776 >> 2] & 127](i25, i3);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 780 >> 2] & 127](i26, i3);
    i72 = (HEAP32[(HEAP32[i30 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i72 | 0) == 3 | (i72 | 0) == 0) {
     i77 = i68;
    } else {
     i77 = i53;
    }
    i73 = HEAP32[i77 >> 2] | 0;
    if ((i72 | 0) == 3 | (i72 | 0) == 0) {
     HEAP32[i68 >> 2] = i70;
    } else {
     HEAP32[i53 >> 2] = i70;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 876 >> 2] & 63](i3);
    HEAP32[i58 >> 2] = HEAP32[((HEAP32[i44 >> 2] & 8192 | 0) == 0 ? i53 : i68) >> 2];
    __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i28, i3, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i32, i27) | 0, 1);
    HEAP32[i59 >> 2] = HEAP32[i60 >> 2];
    HEAP32[i59 + 4 >> 2] = HEAP32[i60 + 4 >> 2];
    HEAP32[i59 + 8 >> 2] = HEAP32[i60 + 8 >> 2];
    HEAP32[i59 + 12 >> 2] = HEAP32[i60 + 12 >> 2];
    i78 = (HEAP32[i44 >> 2] & 8192 | 0) == 0 ? HEAP32[i55 >> 2] | 0 : HEAP32[i69 >> 2] | 0;
    i72 = (HEAP32[i30 >> 2] | 0) + 44 | 0;
    i79 = (HEAP32[i72 >> 2] | 0) >>> 13 & 3;
    if ((i79 | 0) == 3 | (i79 | 0) == 0) {
     HEAP32[i68 >> 2] = i73;
    } else {
     HEAP32[i53 >> 2] = i73;
    }
    i73 = (HEAP32[i72 >> 2] | 0) >>> 13 & 3;
    if ((i73 | 0) == 3 | (i73 | 0) == 0) {
     HEAP32[i31 >> 2] = i74;
    } else {
     HEAP32[i43 >> 2] = i74;
    }
    HEAP32[i62 >> 2] = HEAP32[i61 >> 2];
    HEAP32[i64 >> 2] = HEAP32[i63 >> 2];
    if ((i78 | 0) <= (i71 | 0)) {
     break;
    }
    i71 = HEAP32[i65 >> 2] | 0;
    if ((i71 | 0) == 0) {
     HEAP32[i66 >> 2] = i70;
     i80 = i70;
    } else {
     HEAP32[i67 >> 2] = i70;
     __ZN7WebCore15FloatingObjects39findNextFloatLogicalBottomBelowForBlockENS_10LayoutUnitE(i29, i71, i22);
     i80 = HEAP32[i66 >> 2] | 0;
    }
    if ((i80 | 0) < (i34 | 0)) {
     i46 = 0;
     break L45;
    } else {
     i70 = i80;
    }
   }
   if ((i45 | 0) == 36) {
    HEAP32[i1 >> 2] = i70 - i34;
    STACKTOP = i5;
    return;
   }
   do {
    if ((i75 | 0) != (i78 | 0)) {
     i66 = i3 + 20 | 0;
     i67 = HEAP32[i66 >> 2] | 0;
     if ((i67 & 4 | 0) != 0) {
      break;
     }
     HEAP32[i66 >> 2] = i67 | 4;
    }
   } while (0);
   HEAP32[i1 >> 2] = i70 - i34;
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = i46;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow19inlineSelectionGapsERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, d80 = +0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i12 = i11 | 0;
 i13 = i11 + 8 | 0;
 i14 = i11 + 16 | 0;
 i15 = i11 + 24 | 0;
 i16 = i11 + 32 | 0;
 i17 = i11 + 40 | 0;
 i18 = i11 + 48 | 0;
 i19 = i11 + 56 | 0;
 i20 = i11 + 64 | 0;
 i21 = i11 + 80 | 0;
 i22 = i11 + 88 | 0;
 i23 = i11 + 96 | 0;
 i24 = i11 + 104 | 0;
 i25 = i11 + 112 | 0;
 i26 = i11 + 128 | 0;
 i27 = i11 + 144 | 0;
 i28 = i11 + 192 | 0;
 i29 = i11 + 200 | 0;
 i30 = i11 + 208 | 0;
 i31 = i11 + 216 | 0;
 i32 = i11 + 224 | 0;
 i33 = i11 + 232 | 0;
 i34 = i11 + 240 | 0;
 i35 = i11 + 248 | 0;
 _memset(i1 | 0, 0, 48) | 0;
 i36 = i2 + 20 | 0;
 i37 = (HEAP32[i36 >> 2] | 0) >>> 25 & 7;
 i38 = (i37 | 0) == 1;
 i39 = (i37 | 0) == 4;
 i40 = i38 | i39;
 i41 = HEAP32[i2 + 112 >> 2] | 0;
 do {
  if ((i41 | 0) == 0) {
   i42 = i2 + 104 | 0;
   if ((HEAP32[i42 >> 2] | 0) == 0) {
    i43 = 5;
   } else {
    i44 = i42;
   }
  } else {
   if ((HEAP32[i41 >> 2] | 0) == 0) {
    i43 = 5;
    break;
   }
   i44 = i2 + 104 | 0;
  }
 } while (0);
 if ((i43 | 0) == 5) {
  if (!((i37 | 0) == 4 | (i37 | 0) == 1)) {
   STACKTOP = i11;
   return;
  }
  __ZN7WebCore20blockDirectionOffsetERNS_11RenderBlockERKNS_10LayoutSizeE(i14, i3, i5);
  i37 = i2 + 36 | 0;
  i41 = (HEAP32[(HEAP32[i37 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i41 | 0) == 3 | (i41 | 0) == 0) {
   i45 = i2 + 56 | 0;
  } else {
   i45 = i2 + 52 | 0;
  }
  HEAP32[i6 >> 2] = (HEAP32[i14 >> 2] | 0) + (HEAP32[i45 >> 2] | 0);
  i45 = i2 | 0;
  i14 = (HEAP32[(HEAP32[i37 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i14 | 0) == 3 | (i14 | 0) == 0) {
   HEAP32[i16 >> 2] = HEAP32[i2 + 56 >> 2];
  } else {
   HEAP32[i16 >> 2] = HEAP32[i2 + 52 >> 2];
  }
  __ZN7WebCore11RenderBlock26logicalLeftSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i15, i45, i3, i16, i9);
  HEAP32[i7 >> 2] = HEAP32[i15 >> 2];
  i15 = (HEAP32[(HEAP32[i37 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i15 | 0) == 3 | (i15 | 0) == 0) {
   HEAP32[i18 >> 2] = HEAP32[i2 + 56 >> 2];
  } else {
   HEAP32[i18 >> 2] = HEAP32[i2 + 52 >> 2];
  }
  __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i17, i45, i3, i18, i9);
  HEAP32[i8 >> 2] = HEAP32[i17 >> 2];
  STACKTOP = i11;
  return;
 }
 while (1) {
  i46 = HEAP32[i44 >> 2] | 0;
  if ((i46 | 0) == 0) {
   i47 = 0;
   break;
  }
  if ((HEAP32[i46 + 32 >> 2] & 8192 | 0) != 0) {
   i43 = 19;
   break;
  }
  i44 = i46 + 52 | 0;
 }
 L27 : do {
  if ((i43 | 0) == 19) {
   if ((i46 | 0) == 0) {
    i47 = 0;
    break;
   }
   i44 = i12 | 0;
   i17 = i13 | 0;
   i18 = (i38 | i39) ^ 1;
   i45 = i2 | 0;
   i15 = i6 | 0;
   i37 = i21 | 0;
   i16 = i7 | 0;
   i14 = i22 | 0;
   i41 = i8 | 0;
   i42 = i23 | 0;
   i48 = i19 | 0;
   i49 = i24 | 0;
   i50 = i1 + 16 | 0;
   i51 = i25 | 0;
   i52 = i25 + 4 | 0;
   i53 = i25 + 8 | 0;
   i54 = i25 + 12 | 0;
   i55 = i5 + 4 | 0;
   i56 = i5 | 0;
   i57 = (i10 | 0) == 0;
   i58 = i28 | 0;
   i59 = i29 | 0;
   i60 = i27 | 0;
   i61 = i1 | 0;
   i62 = i27 + 16 | 0;
   i63 = i27 + 32 | 0;
   i64 = i1 + 32 | 0;
   i65 = i26 | 0;
   i66 = i10 + 4 | 0;
   i67 = i10 + 12 | 0;
   i68 = i26 + 8 | 0;
   i69 = i26 + 4 | 0;
   i70 = i10 + 8 | 0;
   i71 = i10 + 16 | 0;
   i72 = i26 + 12 | 0;
   i73 = i5;
   i74 = 0;
   i75 = i46;
   while (1) {
    i76 = i75;
    i77 = i75 + 32 | 0;
    if ((HEAP32[i77 >> 2] & 8192 | 0) == 0) {
     i47 = i74;
     break L27;
    }
    __ZNK7WebCore13RootInlineBox37selectionTopAdjustedForPrecedingBlockEv(i19, i76);
    __ZNK7WebCore13RootInlineBox15selectionBottomEv(i12, i76);
    __ZNK7WebCore13RootInlineBox37selectionTopAdjustedForPrecedingBlockEv(i13, i76);
    i78 = (HEAP32[i44 >> 2] | 0) - (HEAP32[i17 >> 2] | 0) | 0;
    i79 = (i78 | 0) > 0 ? i78 : 0;
    do {
     if ((i74 | 0) == 0 & i18) {
      i78 = (HEAP32[i36 >> 2] | 0) >>> 25 & 7;
      if ((i78 | 0) == 1 | (i78 | 0) == 4) {
       break;
      }
      HEAP32[i37 >> 2] = HEAP32[i15 >> 2];
      HEAP32[i14 >> 2] = HEAP32[i16 >> 2];
      HEAP32[i42 >> 2] = HEAP32[i41 >> 2];
      HEAP32[i49 >> 2] = HEAP32[i48 >> 2];
      __ZN7WebCore11RenderBlock17blockSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeENS_10LayoutUnitES8_S8_S8_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i20, i45, i3, i4, i5, i21, i22, i23, i24, i9, i10);
      __ZN7WebCore10LayoutRect5uniteERKS0_(i50, i20);
     }
    } while (0);
    d80 = +HEAPF32[((HEAP32[i77 >> 2] & 2048 | 0) == 0 ? i75 + 24 | 0 : i75 + 20 | 0) >> 2];
    do {
     if (d80 < +2147483647) {
      if (d80 <= +-2147483648) {
       i81 = -2147483648;
       break;
      }
      i81 = ~~d80;
     } else {
      i81 = 2147483647;
     }
    } while (0);
    i77 = HEAP32[i48 >> 2] | 0;
    d80 = +HEAPF32[i75 + 28 >> 2];
    do {
     if (d80 < +2147483647) {
      if (d80 <= +-2147483648) {
       i82 = -2147483648;
       break;
      }
      i82 = ~~d80;
     } else {
      i82 = 2147483647;
     }
    } while (0);
    HEAP32[i51 >> 2] = i81;
    HEAP32[i52 >> 2] = i77;
    HEAP32[i53 >> 2] = i82;
    HEAP32[i54 >> 2] = i77 + i79;
    if ((HEAP32[i36 >> 2] & 8192 | 0) == 0) {
     i83 = HEAP32[i55 >> 2] | 0;
     i84 = HEAP32[i56 >> 2] | 0;
    } else {
     i83 = HEAP32[i73 >> 2] | 0;
     i84 = HEAP32[i73 + 4 >> 2] | 0;
    }
    HEAP32[i51 >> 2] = i81 + i83;
    HEAP32[i52 >> 2] = i77 + i84;
    __ZN7WebCore11RenderBlock25logicalRectToPhysicalRectERKNS_11LayoutPointERKNS_10LayoutRectE(i26, i3, i4, i25);
    do {
     if (i57) {
      i43 = 41;
     } else {
      i78 = (HEAP32[i36 >> 2] & 8192 | 0) == 0;
      if (!i78) {
       i85 = HEAP32[i69 >> 2] | 0;
       i86 = HEAP32[i70 >> 2] | 0;
       if ((i85 | 0) >= ((HEAP32[i71 >> 2] | 0) + i86 | 0)) {
        break;
       }
       if (((HEAP32[i72 >> 2] | 0) + i85 | 0) > (i86 | 0)) {
        i43 = 41;
        break;
       }
       if (!i78) {
        break;
       }
      }
      i78 = HEAP32[i65 >> 2] | 0;
      i86 = HEAP32[i66 >> 2] | 0;
      if ((i78 | 0) >= ((HEAP32[i67 >> 2] | 0) + i86 | 0)) {
       break;
      }
      if (((HEAP32[i68 >> 2] | 0) + i78 | 0) > (i86 | 0)) {
       i43 = 41;
      }
     }
    } while (0);
    if ((i43 | 0) == 41) {
     i43 = 0;
     HEAP32[i58 >> 2] = HEAP32[i48 >> 2];
     HEAP32[i59 >> 2] = i79;
     __ZN7WebCore13RootInlineBox16lineSelectionGapERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeENS_10LayoutUnitES9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i27, i76, i3, i4, i5, i28, i29, i9, i10);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i61, i60);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i50, i62);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i64, i63);
    }
    i77 = HEAP32[i75 + 52 >> 2] | 0;
    if ((i77 | 0) == 0) {
     i47 = i76;
     break;
    } else {
     i74 = i76;
     i75 = i77;
    }
   }
  }
 } while (0);
 if (i40 & (i47 | 0) == 0) {
  i87 = HEAP32[i2 + 108 >> 2] | 0;
 } else {
  i87 = i47;
 }
 if ((i87 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 if ((((HEAP32[i36 >> 2] | 0) >>> 25 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
  STACKTOP = i11;
  return;
 }
 __ZN7WebCore20blockDirectionOffsetERNS_11RenderBlockERKNS_10LayoutSizeE(i30, i3, i5);
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i31, i87);
 HEAP32[i6 >> 2] = (HEAP32[i31 >> 2] | 0) + (HEAP32[i30 >> 2] | 0);
 i30 = i2 | 0;
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i33, i87);
 __ZN7WebCore11RenderBlock26logicalLeftSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i32, i30, i3, i33, i9);
 HEAP32[i7 >> 2] = HEAP32[i32 >> 2];
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i35, i87);
 __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i34, i30, i3, i35, i9);
 HEAP32[i8 >> 2] = HEAP32[i34 >> 2];
 STACKTOP = i11;
 return;
}
function __ZN7WebCore15RenderBlockFlow20addOverhangingFloatsERS0_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i3 | 0;
 i15 = i3 + 20 | 0;
 do {
  if ((HEAP32[i15 >> 2] & 65536 | 0) == 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 1024 >> 2] & 511](i3) | 0)) {
    break;
   }
   i16 = HEAP32[i3 + 4 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i16 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i16 | 0)) {
    break;
   }
   if ((HEAP32[i15 >> 2] & 4194304 | 0) != 0) {
    break;
   }
   i16 = i3 | 0;
   i17 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i18 = HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] | 0;
   if (((i18 ^ HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    break;
   }
   i17 = i18 >>> 13 & 3;
   if ((i17 | 0) == 3 | (i17 | 0) == 0) {
    i19 = i3 + 48 | 0;
   } else {
    i19 = i3 + 44 | 0;
   }
   i18 = HEAP32[i19 >> 2] | 0;
   if ((i17 | 0) == 3 | (i17 | 0) == 0) {
    i20 = i3 + 44 | 0;
   } else {
    i20 = i3 + 48 | 0;
   }
   i17 = HEAP32[i20 >> 2] | 0;
   i21 = HEAP32[(HEAP32[i3 + 96 >> 2] | 0) + 20 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i22 = 0;
   } else {
    i23 = i2 + 20 | 0;
    i24 = 2147483647 - i18 | 0;
    i25 = i2 | 0;
    i26 = i2 + 36 | 0;
    i27 = i2 + 52 | 0;
    i28 = i2 + 96 | 0;
    i29 = i10 | 0;
    i30 = i7 | 0;
    i31 = i9 | 0;
    i32 = i13 | 0;
    i33 = i13 + 4 | 0;
    i34 = i8 | 0;
    i35 = i6 | 0;
    i36 = i2 + 56 | 0;
    i37 = i21;
    i21 = 0;
    while (1) {
     i38 = HEAP32[i37 >> 2] | 0;
     i39 = HEAP32[i23 >> 2] & 8192;
     if ((i39 | 0) == 0) {
      i40 = (HEAP32[i38 + 16 >> 2] | 0) + (HEAP32[i38 + 8 >> 2] | 0) | 0;
     } else {
      i40 = (HEAP32[i38 + 20 >> 2] | 0) + (HEAP32[i38 + 12 >> 2] | 0) | 0;
     }
     i41 = ((i24 | 0) < (i40 | 0) ? i24 : i40) + i18 | 0;
     i42 = (i21 | 0) < (i41 | 0) ? i41 : i21;
     i43 = (HEAP32[(HEAP32[i26 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i43 | 0) == 3 | (i43 | 0) == 0) {
      i44 = i36;
     } else {
      i44 = i27;
     }
     L27 : do {
      if ((i41 | 0) > (HEAP32[i44 >> 2] | 0)) {
       i43 = HEAP32[i38 >> 2] | 0;
       i45 = HEAP32[i28 >> 2] | 0;
       L29 : do {
        if ((i45 | 0) != 0) {
         i46 = HEAP32[i45 >> 2] | 0;
         if ((i46 | 0) == 0) {
          break;
         }
         i47 = HEAP32[i45 + 8 >> 2] | 0;
         i48 = i43;
         i49 = i48 + ~(i48 << 15) | 0;
         i48 = (i49 >>> 10 ^ i49) * 9 & -1;
         i49 = i48 >>> 6 ^ i48;
         i48 = i49 + ~(i49 << 11) | 0;
         i49 = i48 >>> 16 ^ i48;
         i48 = (i49 >>> 23) + ~i49 | 0;
         i50 = i48 << 12 ^ i48;
         i48 = i50 >>> 7 ^ i50;
         i50 = i48 << 2 ^ i48;
         i48 = i50 >>> 20 ^ i50 | 1;
         i50 = i49;
         i49 = 0;
         while (1) {
          i51 = i50 & i47;
          i52 = i46 + (i51 << 2) | 0;
          i53 = HEAP32[i52 >> 2] | 0;
          i54 = i53;
          if ((i54 | 0) == 0) {
           break L29;
          } else if ((i54 | 0) != (-1 | 0)) {
           if ((HEAP32[HEAP32[i53 >> 2] >> 2] | 0) == (i43 | 0)) {
            break;
           }
          }
          i53 = (i49 | 0) == 0 ? i48 : i49;
          i50 = i53 + i51 | 0;
          i49 = i53;
         }
         if ((i52 | 0) != 0) {
          break L27;
         }
        }
       } while (0);
       i45 = (i39 | 0) != 0;
       i49 = -(i45 ? i17 : i18) | 0;
       i50 = -(i45 ? i18 : i17) | 0;
       i45 = __ZNK7WebCore9RenderBox27enclosingFloatPaintingLayerEv(i43) | 0;
       if ((i45 | 0) == (__ZNK7WebCore9RenderBox27enclosingFloatPaintingLayerEv(i25) | 0)) {
        i45 = i38 + 28 | 0;
        HEAP32[i45 >> 2] = HEAP32[i45 >> 2] & -5;
        i55 = 1;
       } else {
        i55 = 0;
       }
       i45 = HEAP32[i28 >> 2] | 0;
       do {
        if ((i45 | 0) == 0) {
         i48 = __ZN3WTF10fastMallocEj(64) | 0;
         __ZN7WebCore15FloatingObjectsC1ERKNS_15RenderBlockFlowE(i48, i2);
         i46 = HEAP32[i28 >> 2] | 0;
         HEAP32[i28 >> 2] = i48;
         if ((i46 | 0) == 0) {
          i56 = i48;
          break;
         }
         __ZN7WebCore15FloatingObjectsD1Ev(i46);
         __ZN3WTF8fastFreeEPv(i46);
         i56 = HEAP32[i28 >> 2] | 0;
        } else {
         i56 = i45;
        }
       } while (0);
       HEAP32[i11 >> 2] = i49;
       HEAP32[i11 + 4 >> 2] = i50;
       __ZNK7WebCore14FloatingObject18copyToNewContainerENS_10LayoutSizeEbb(i10, i38, i12, i55, 1);
       __ZN7WebCore15FloatingObjects3addENSt3__110unique_ptrINS_14FloatingObjectENS1_14default_deleteIS3_EEEE(i56, i10) | 0;
       i45 = HEAP32[i29 >> 2] | 0;
       HEAP32[i29 >> 2] = 0;
       if ((i45 | 0) == 0) {
        break;
       }
       __ZN3WTF8fastFreeEPv(i45);
      } else {
       i45 = i38 + 28 | 0;
       do {
        if (i4) {
         if ((HEAP32[i45 >> 2] & 4 | 0) != 0) {
          break;
         }
         i43 = i38 | 0;
         if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(HEAP32[i43 >> 2] | 0) | 0) {
          break;
         }
         if (!(__ZNK7WebCore12RenderObject14isDescendantOfEPKS0_(HEAP32[i43 >> 2] | 0, i14) | 0)) {
          break;
         }
         i46 = __ZNK7WebCore9RenderBox27enclosingFloatPaintingLayerEv(HEAP32[i43 >> 2] | 0) | 0;
         if ((i46 | 0) != (__ZNK7WebCore9RenderBox27enclosingFloatPaintingLayerEv(i16) | 0)) {
          break;
         }
         HEAP32[i45 >> 2] = HEAP32[i45 >> 2] | 4;
        }
       } while (0);
       if ((HEAP32[i45 >> 2] & 8 | 0) == 0) {
        break;
       }
       i50 = i38 | 0;
       i49 = HEAP32[i50 >> 2] | 0;
       i46 = HEAP32[i38 + 8 >> 2] | 0;
       if ((HEAP32[i23 >> 2] & 8192 | 0) == 0) {
        FUNCTION_TABLE_viii[HEAP32[(HEAP32[i49 >> 2] | 0) + 784 >> 2] & 127](i7, i49 | 0, HEAP32[i26 >> 2] | 0);
        i57 = HEAP32[i30 >> 2] | 0;
       } else {
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i49 >> 2] | 0) + 776 >> 2] & 127](i6, i49);
        i57 = HEAP32[i35 >> 2] | 0;
       }
       i43 = HEAP32[i38 + 12 >> 2] | 0;
       i48 = HEAP32[i50 >> 2] | 0;
       if ((HEAP32[i23 >> 2] & 8192 | 0) == 0) {
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i48 >> 2] | 0) + 768 >> 2] & 127](i9, i48);
        i58 = HEAP32[i31 >> 2] | 0;
       } else {
        FUNCTION_TABLE_viii[HEAP32[(HEAP32[i48 >> 2] | 0) + 784 >> 2] & 127](i8, i48 | 0, HEAP32[i26 >> 2] | 0);
        i58 = HEAP32[i34 >> 2] | 0;
       }
       HEAP32[i32 >> 2] = i57 + i46;
       HEAP32[i33 >> 2] = i58 + i43;
       __ZN7WebCore9RenderBox20addOverflowFromChildEPS0_RKNS_10LayoutSizeE(i16, i49, i13);
      }
     } while (0);
     i38 = HEAP32[i37 + 8 >> 2] | 0;
     if ((i38 | 0) == 0) {
      i22 = i42;
      break;
     } else {
      i37 = i38;
      i21 = i42;
     }
    }
   }
   HEAP32[i1 >> 2] = i22;
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 | 0;
 __ZN7WebCore11RenderBlock14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i7, i2, i3);
 i3 = i1 + 20 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if ((i8 & 64 | 0) != 0 | (i8 & 25165824 | 0) == 16777216) {
  i9 = 0;
 } else {
  i9 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 972 >> 2] & 511](i7) | 0) ^ 1;
 }
 do {
  if ((i2 | 0) == 8) {
   if ((HEAP8[H_BASE + 1224 | 0] & 1) == 0 | i9) {
    break;
   }
   i8 = i1 + 8 | 0;
   if ((HEAP32[i8 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP32[i3 >> 2] & 4194304 | 0) != 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1024 >> 2] & 511](i1) | 0)) {
    break;
   }
   i10 = HEAP32[i1 + 96 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i11 = 0;
    } else {
     i12 = HEAP32[i10 + 20 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i11 = 0;
      break;
     } else {
      i13 = i12;
      i14 = 0;
     }
     while (1) {
      i12 = HEAP32[i13 >> 2] | 0;
      i15 = HEAP32[i12 + 28 >> 2] | 0;
      if ((i15 & 16 | 0) == 0 | (i15 & 3 | 0) == 0) {
       i16 = i14;
      } else {
       if ((HEAP32[i3 >> 2] & 8192 | 0) == 0) {
        i17 = (HEAP32[i12 + 16 >> 2] | 0) + (HEAP32[i12 + 8 >> 2] | 0) | 0;
       } else {
        i17 = (HEAP32[i12 + 20 >> 2] | 0) + (HEAP32[i12 + 12 >> 2] | 0) | 0;
       }
       i16 = (i14 | 0) < (i17 | 0) ? i17 : i14;
      }
      i12 = HEAP32[i13 + 8 >> 2] | 0;
      if ((i12 | 0) == 0) {
       i11 = i16;
       break;
      } else {
       i13 = i12;
       i14 = i16;
      }
     }
    }
   } while (0);
   i12 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i12 | 0) == 3 | (i12 | 0) == 0) {
    i18 = i1 + 56 | 0;
   } else {
    i18 = i1 + 52 | 0;
   }
   if ((i11 | 0) <= (HEAP32[i18 >> 2] | 0)) {
    break;
   }
   i12 = HEAP32[i8 >> 2] | 0;
   L27 : do {
    if ((i12 | 0) == 0) {
     i19 = 0;
    } else {
     i15 = i12;
     while (1) {
      if ((HEAP32[i15 + 20 >> 2] & 768 | 0) != 256) {
       if ((HEAP32[i15 + 24 >> 2] & 32 | 0) != 0) {
        break;
       }
      }
      i20 = HEAP32[i15 + 8 >> 2] | 0;
      if ((i20 | 0) == 0) {
       i19 = 0;
       break L27;
      } else {
       i15 = i20;
      }
     }
     i19 = i15;
    }
   } while (0);
   i12 = i10 + 20 | 0;
   i8 = i5 + 4 | 0;
   i20 = i1;
   i21 = i19;
   L35 : while (1) {
    i22 = i21;
    while (1) {
     if ((i22 | 0) == 0) {
      break L35;
     }
     i23 = i22 + 20 | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     if ((i24 & 768 | 0) == 768) {
      break L35;
     }
     i25 = i22 + 8 | 0;
     if ((HEAP32[i25 >> 2] | 0) == 0) {
      i22 = 0;
     } else {
      break;
     }
    }
    L42 : do {
     if ((i24 & 4194304 | 0) == 0) {
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 1024 >> 2] & 511](i22) | 0)) {
       i26 = i20;
       break;
      }
      i15 = i22 + 96 | 0;
      i27 = HEAP32[i15 >> 2] | 0;
      do {
       if ((i27 | 0) == 0) {
        i28 = 0;
       } else {
        i29 = HEAP32[i27 + 20 >> 2] | 0;
        if ((i29 | 0) == 0) {
         i28 = 0;
         break;
        } else {
         i30 = i29;
         i31 = 0;
        }
        while (1) {
         i29 = HEAP32[i30 >> 2] | 0;
         i32 = HEAP32[i29 + 28 >> 2] | 0;
         if ((i32 & 16 | 0) == 0 | (i32 & 3 | 0) == 0) {
          i33 = i31;
         } else {
          if ((HEAP32[i23 >> 2] & 8192 | 0) == 0) {
           i34 = (HEAP32[i29 + 16 >> 2] | 0) + (HEAP32[i29 + 8 >> 2] | 0) | 0;
          } else {
           i34 = (HEAP32[i29 + 20 >> 2] | 0) + (HEAP32[i29 + 12 >> 2] | 0) | 0;
          }
          i33 = (i31 | 0) < (i34 | 0) ? i34 : i31;
         }
         i29 = HEAP32[i30 + 8 >> 2] | 0;
         if ((i29 | 0) == 0) {
          i28 = i33;
          break;
         } else {
          i30 = i29;
          i31 = i33;
         }
        }
       }
      } while (0);
      i29 = i22 + 36 | 0;
      i32 = (HEAP32[(HEAP32[i29 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((i32 | 0) == 3 | (i32 | 0) == 0) {
       i35 = i22 + 56 | 0;
      } else {
       i35 = i22 + 52 | 0;
      }
      if ((i28 | 0) <= (HEAP32[i35 >> 2] | 0)) {
       i26 = i20;
       break;
      }
      i32 = HEAP32[i12 >> 2] | 0;
      if ((i32 | 0) == 0) {
       i26 = i20;
       break;
      }
      i36 = i22 + 52 | 0;
      i37 = i22 + 56 | 0;
      i38 = i32;
      i32 = i27;
      while (1) {
       i39 = HEAP32[HEAP32[i38 >> 2] >> 2] | 0;
       do {
        if ((i32 | 0) != 0) {
         if ((HEAP32[i23 >> 2] & 4194304 | 0) != 0) {
          break;
         }
         if ((HEAP32[i25 >> 2] | 0) == 0) {
          break;
         }
         __ZNK3WTF11ListHashSetINSt3__110unique_ptrIN7WebCore14FloatingObjectENS1_14default_deleteIS4_EEEELj4ENS3_27FloatingObjectHashFunctionsEE4findIRNS3_9RenderBoxENS3_28FloatingObjectHashTranslatorEEENS_24ListHashSetConstIteratorIS7_Lj4ES8_EERKT_(i5, i32 | 0, i39);
         i40 = HEAP32[i8 >> 2] | 0;
         if ((i40 | 0) == 0) {
          break;
         }
         i41 = HEAP32[i40 >> 2] | 0;
         if ((HEAP32[i23 >> 2] & 8192 | 0) == 0) {
          i42 = (HEAP32[i41 + 16 >> 2] | 0) + (HEAP32[i41 + 8 >> 2] | 0) | 0;
         } else {
          i42 = (HEAP32[i41 + 20 >> 2] | 0) + (HEAP32[i41 + 12 >> 2] | 0) | 0;
         }
         i41 = (HEAP32[(HEAP32[i29 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
         if ((i41 | 0) == 3 | (i41 | 0) == 0) {
          i43 = i37;
         } else {
          i43 = i36;
         }
         if ((i42 | 0) > (HEAP32[i43 >> 2] | 0)) {
          i26 = i22;
          break L42;
         }
        }
       } while (0);
       i39 = HEAP32[i38 + 8 >> 2] | 0;
       if ((i39 | 0) == 0) {
        i26 = i20;
        break L42;
       }
       i38 = i39;
       i32 = HEAP32[i15 >> 2] | 0;
      }
     } else {
      i26 = i20;
     }
    } while (0);
    i22 = HEAP32[i25 >> 2] | 0;
    if ((i22 | 0) == 0) {
     i20 = i26;
     i21 = 0;
     continue;
    } else {
     i44 = i22;
    }
    while (1) {
     if ((HEAP32[i44 + 20 >> 2] & 768 | 0) != 256) {
      if ((HEAP32[i44 + 24 >> 2] & 32 | 0) != 0) {
       break;
      }
     }
     i22 = HEAP32[i44 + 8 >> 2] | 0;
     if ((i22 | 0) == 0) {
      i20 = i26;
      i21 = 0;
      continue L35;
     } else {
      i44 = i22;
     }
    }
    i20 = i26;
    i21 = i44;
   }
   __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i20, 0, 1);
   __ZN7WebCore15RenderBlockFlow31markSiblingsWithFloatsForLayoutEPNS_9RenderBoxE(i20, 0);
  }
 } while (0);
 i44 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i44 | 0) != 0) {
   i26 = HEAP32[i44 + 28 >> 2] | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   __ZN7WebCore23RenderNamedFlowFragment11createStyleERKNS_11RenderStyleE(i6, HEAP32[i1 + 36 >> 2] | 0);
   __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i26 | 0, i6);
  }
 } while (0);
 if ((i2 | 0) <= 1) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore11RenderBlock24invalidateLineLayoutPathEv(i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlow21relayoutForPaginationEbNS_10LayoutUnitERNS_21LayoutStateMaintainerE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
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
 i17 = i1 + 20 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i18 & 4194304 | 0) == 0) {
  i19 = 0;
  STACKTOP = i5;
  return i19 | 0;
 }
 i20 = i1 | 0;
 i21 = i1 + 88 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 if ((i18 & 2097152 | 0) == 0) {
  __ZN7WebCore11RenderBlock28addOverflowFromBlockChildrenEv(i1 | 0);
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 1056 >> 2] & 63](i1);
 }
 i18 = HEAP32[i21 >> 2] | 0;
 i23 = (i18 | 0) == 0;
 if ((HEAP32[i17 >> 2] & 8192 | 0) == 0) {
  if (i23) {
   i24 = i1 | 0;
   i25 = i1;
   i26 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 744 >> 2] & 511](i24) | 0;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 736 >> 2] & 511](i24) | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i10, i20);
   __ZNK7WebCore9RenderBox12clientHeightEv(i11, i20);
   i27 = i26;
   i28 = HEAP32[i10 >> 2] | 0;
  } else {
   i27 = HEAP32[i18 + 4 >> 2] | 0;
   i28 = HEAP32[i18 + 12 >> 2] | 0;
  }
  i29 = i27 + i28 | 0;
 } else {
  if (i23) {
   i23 = i1 | 0;
   i28 = i1;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 744 >> 2] & 511](i23) | 0;
   i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 736 >> 2] & 511](i23) | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i12, i20);
   __ZNK7WebCore9RenderBox12clientHeightEv(i13, i20);
   i30 = i27;
   i31 = HEAP32[i13 >> 2] | 0;
  } else {
   i30 = HEAP32[i18 + 8 >> 2] | 0;
   i31 = HEAP32[i18 + 16 >> 2] | 0;
  }
  i29 = i30 + i31 | 0;
 }
 i31 = i1 | 0;
 i30 = i1;
 i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 752 >> 2] & 511](i31) | 0;
 i13 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 720 >> 2] & 127](i9, i31);
 i27 = i29 - i18 - (HEAP32[i9 >> 2] | 0) | 0;
 i9 = i1 | 0;
 i18 = __ZNK7WebCore11RenderBlock10columnInfoEv(i9) | 0;
 i29 = HEAP32[i3 >> 2] | 0;
 L20 : do {
  if (i2) {
   i32 = 32;
  } else {
   i3 = HEAP32[i18 + 4 >> 2] | 0;
   do {
    if (((HEAP32[i18 + 28 >> 2] | 0) + 1 | 0) < (i3 | 0)) {
     if ((i27 | 0) <= (Math_imul(i3, i29) | 0)) {
      i33 = i29;
      break;
     }
     i12 = HEAP32[i18 + 24 >> 2] | 0;
     d34 = +Math_ceil(+(i27 | 0) / +(i3 | 0));
     do {
      if (d34 < +2147483647) {
       if (d34 <= +-2147483648) {
        i35 = -2147483648;
        break;
       }
       i35 = ~~d34;
      } else {
       i35 = 2147483647;
      }
     } while (0);
     i33 = (i12 | 0) < (i35 | 0) ? i35 : i12;
    } else {
     if ((i29 | 0) != 0) {
      i32 = 33;
      break L20;
     }
     i23 = HEAP32[i18 + 32 >> 2] | 0;
     i28 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
     i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 752 >> 2] & 511](i31) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 720 >> 2] & 127](i7, i31);
     HEAP32[i15 >> 2] = i10 + i27 + (HEAP32[i7 >> 2] | 0);
     __ZNK7WebCore11LayoutState17pageLogicalOffsetEPNS_9RenderBoxENS_10LayoutUnitE(i14, i28, i20, i15);
     i28 = (HEAP32[i14 >> 2] | 0) - (HEAP32[i18 + 36 >> 2] | 0) | 0;
     i10 = (i23 | 0) < (i28 | 0) ? i28 : i23;
     i23 = HEAP32[i18 + 24 >> 2] | 0;
     i33 = (i23 | 0) < (i10 | 0) ? i10 : i23;
    }
   } while (0);
   if ((i33 | 0) == 0 | (i33 | 0) == (i29 | 0)) {
    i32 = 32;
    break;
   }
   i3 = i4 + 4 | 0;
   i23 = HEAP8[i3] | 0;
   if ((i23 & 2) != 0) {
    do {
     if ((i23 & 8) == 0) {
      i36 = i23;
     } else {
      i10 = i4 | 0;
      i28 = HEAP32[i10 >> 2] | 0;
      i26 = i28 + 192 | 0;
      i11 = (HEAP32[i26 >> 2] | 0) + 12 | 0;
      i24 = HEAP32[i11 >> 2] | 0;
      HEAP32[i11 >> 2] = 0;
      i11 = HEAP32[i26 >> 2] | 0;
      HEAP32[i26 >> 2] = i24;
      if ((i11 | 0) != 0) {
       __ZN7WebCore11LayoutStateD1Ev(i11);
       __ZdlPv(i11 | 0);
      }
      __ZN7WebCore10RenderView34popLayoutStateForCurrentFlowThreadEv(i28);
      i28 = HEAP8[i3] | 0;
      if ((i28 & 1) == 0) {
       i36 = i28;
       break;
      }
      i28 = (HEAP32[i10 >> 2] | 0) + 196 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) - 1;
      i36 = HEAP8[i3] | 0;
     }
    } while (0);
    HEAP8[i3] = i36 | 4;
   }
   HEAP32[i17 >> 2] = HEAP32[i17 >> 2] | 1048576;
   i23 = HEAP32[(HEAP32[i1 >> 2] | 0) + 1020 >> 2] | 0;
   HEAP32[i16 >> 2] = i33;
   FUNCTION_TABLE_viii[i23 & 127](i1, 0, i16);
   i37 = 1;
  }
 } while (0);
 if ((i32 | 0) == 32) {
  if ((i29 | 0) == 0) {
   i32 = 34;
  } else {
   i32 = 33;
  }
 }
 if ((i32 | 0) == 33) {
  HEAP32[i18 + 16 >> 2] = ~~+Math_ceil(+(i27 | 0) / +(i29 | 0));
  HEAP32[i18 + 20 >> 2] = i29;
  i32 = 34;
 }
 do {
  if ((i32 | 0) == 34) {
   if ((__ZNK7WebCore11RenderBlock11columnCountEPNS_10ColumnInfoE(i9, i18) | 0) == 0) {
    i29 = HEAP32[i21 >> 2] | 0;
    HEAP32[i21 >> 2] = i22;
    if ((i29 | 0) == 0) {
     i19 = 0;
     STACKTOP = i5;
     return i19 | 0;
    }
    i27 = i29 | 0;
    i16 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF8fastFreeEPv(i29);
     i19 = 0;
     STACKTOP = i5;
     return i19 | 0;
    } else {
     HEAP32[i27 >> 2] = i16;
     i19 = 0;
     STACKTOP = i5;
     return i19 | 0;
    }
   } else {
    i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 752 >> 2] & 511](i31) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 720 >> 2] & 127](i6, i31);
    i27 = (HEAP32[i6 >> 2] | 0) + i16 + (HEAP32[i18 + 20 >> 2] | 0) | 0;
    i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 756 >> 2] & 511](i31) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 724 >> 2] & 127](i8, i31);
    i29 = HEAP32[i8 >> 2] | 0;
    i33 = i1 + 36 | 0;
    i17 = (HEAP32[(HEAP32[i33 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i17 | 0) == 3 | (i17 | 0) == 0) {
     i38 = __ZNK7WebCore9RenderBox25horizontalScrollbarHeightEv(i20) | 0;
    } else {
     i38 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 908 >> 2] & 511](i20) | 0;
    }
    i17 = i27 + i16 + i29 + i38 | 0;
    i29 = (HEAP32[(HEAP32[i33 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i29 | 0) == 3 | (i29 | 0) == 0) {
     HEAP32[i1 + 56 >> 2] = i17;
    } else {
     HEAP32[i1 + 52 >> 2] = i17;
    }
    __ZN7WebCore9RenderBox13clearOverflowEv(i20);
    i37 = 0;
    break;
   }
  }
 } while (0);
 if ((i22 | 0) == 0) {
  i19 = i37;
  STACKTOP = i5;
  return i19 | 0;
 }
 i20 = i22 | 0;
 i1 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i22);
  i19 = i37;
  STACKTOP = i5;
  return i19 | 0;
 } else {
  HEAP32[i20 >> 2] = i1;
  i19 = i37;
  STACKTOP = i5;
  return i19 | 0;
 }
 return 0;
}
function __ZN7WebCore15RenderBlockFlow19clearFloatsIfNeededERNS_9RenderBoxERNS0_10MarginInfoENS_10LayoutUnitES5_S5_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
 i9 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
 i9 = i7;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 32 | 0;
 i13 = i8 + 40 | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 HEAP32[i10 >> 2] = i14;
 __ZN7WebCore15RenderBlockFlow13getClearDeltaERNS_9RenderBoxENS_10LayoutUnitE(i9, i2, i3, i10);
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  HEAP32[i1 >> 2] = i14;
  STACKTOP = i8;
  return;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 852 >> 2] & 511](i3) | 0) {
   i9 = HEAP32[i3 + 8 >> 2] | 0;
   i7 = (i9 | 0) == 0;
   do {
    if (i7) {
     i15 = 9;
    } else {
     i16 = HEAP32[i3 + 36 >> 2] | 0;
     if (((HEAP32[i16 + 44 >> 2] ^ HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
      i15 = 9;
      break;
     }
     i17 = (HEAP32[i3 + 24 >> 2] & 32 | 0) == 0;
     i18 = (HEAP32[(HEAP32[i16 + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728;
     if (i17 | i18) {
      i19 = i18 | i17 ^ 1;
      i15 = 13;
      break;
     }
     i17 = HEAP32[i3 + 100 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i15 = 14;
      break;
     }
     if ((HEAP8[i17 + 32 | 0] & 1) == 0) {
      i15 = 14;
     } else {
      i15 = 23;
     }
    }
   } while (0);
   do {
    if ((i15 | 0) == 9) {
     if ((HEAP32[i3 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0) {
      i15 = 14;
      break;
     }
     i17 = (HEAP32[i3 + 24 >> 2] & 32 | 0) == 0;
     i18 = (HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 536870912;
     if (i17 | i18) {
      i19 = i18 | i17 ^ 1;
      i15 = 13;
      break;
     }
     i17 = HEAP32[i3 + 100 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i15 = 14;
      break;
     }
     if ((HEAP8[i17 + 32 | 0] & 2) == 0) {
      i15 = 14;
     } else {
      i15 = 23;
     }
    }
   } while (0);
   if ((i15 | 0) == 13) {
    if (i19) {
     i15 = 23;
    } else {
     i15 = 14;
    }
   }
   L27 : do {
    if ((i15 | 0) == 14) {
     do {
      if (i7) {
       i15 = 19;
      } else {
       i17 = HEAP32[i3 + 36 >> 2] | 0;
       if (((HEAP32[i17 + 44 >> 2] ^ HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
        i15 = 19;
        break;
       }
       i18 = (HEAP32[i3 + 24 >> 2] & 32 | 0) == 0;
       i16 = (HEAP32[(HEAP32[i17 + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 536870912;
       if (i18 | i16) {
        i20 = i16 | i18 ^ 1;
        i15 = 25;
        break;
       }
       i18 = HEAP32[i3 + 100 >> 2] | 0;
       if ((i18 | 0) == 0) {
        i15 = 24;
        break;
       }
       i16 = (HEAP8[i18 + 32 | 0] & 2) == 0;
       __ZNK7WebCore15RenderBlockFlow20marginValuesForChildERNS_9RenderBoxE(i11, i2, i3);
       if (!i16) {
        i15 = 27;
        break L27;
       }
      }
     } while (0);
     do {
      if ((i15 | 0) == 19) {
       if ((HEAP32[i3 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0) {
        i15 = 24;
        break;
       }
       i16 = (HEAP32[i3 + 24 >> 2] & 32 | 0) == 0;
       i18 = (HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728;
       if (i16 | i18) {
        i20 = i18 | i16 ^ 1;
        i15 = 25;
        break;
       }
       i16 = HEAP32[i3 + 100 >> 2] | 0;
       if ((i16 | 0) == 0) {
        i15 = 24;
        break;
       }
       i18 = (HEAP8[i16 + 32 | 0] & 1) == 0;
       __ZNK7WebCore15RenderBlockFlow20marginValuesForChildERNS_9RenderBoxE(i11, i2, i3);
       if (!i18) {
        i15 = 27;
        break L27;
       }
      }
     } while (0);
     if ((i15 | 0) == 25) {
      __ZNK7WebCore15RenderBlockFlow20marginValuesForChildERNS_9RenderBoxE(i11, i2, i3);
      if (i20) {
       i15 = 27;
       break;
      }
     } else if ((i15 | 0) == 24) {
      __ZNK7WebCore15RenderBlockFlow20marginValuesForChildERNS_9RenderBoxE(i11, i2, i3);
     }
     i18 = HEAP32[i11 >> 2] | 0;
     i16 = HEAP32[i11 + 8 >> 2] | 0;
     HEAP32[i4 + 4 >> 2] = (i18 | 0) < (i16 | 0) ? i16 : i18;
     i18 = HEAP32[i11 + 4 >> 2] | 0;
     i16 = HEAP32[i11 + 12 >> 2] | 0;
     HEAP32[i4 + 8 >> 2] = (i18 | 0) < (i16 | 0) ? i16 : i18;
     i21 = 0;
    } else if ((i15 | 0) == 23) {
     __ZNK7WebCore15RenderBlockFlow20marginValuesForChildERNS_9RenderBoxE(i11, i2, i3);
     i15 = 27;
    }
   } while (0);
   if ((i15 | 0) == 27) {
    HEAP32[i4 + 4 >> 2] = 0;
    HEAP32[i4 + 8 >> 2] = 0;
    i21 = 2;
   }
   i9 = i4 | 0;
   i7 = i9 + 1 | 0;
   HEAP8[i7] = HEAP8[i7] & -3 | i21;
   i7 = (HEAP8[i9] & 4) != 0;
   i18 = HEAP32[i3 + 16 >> 2] | 0;
   if ((i18 | 0) == 0 | i7 ^ 1) {
    i22 = i7;
   } else {
    i16 = i7;
    i7 = i18;
    while (1) {
     i18 = HEAP32[i7 + 20 >> 2] | 0;
     if ((i18 & 64 | 0) != 0 | (i18 & 25165824 | 0) == 16777216) {
      i23 = i16;
     } else {
      i23 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 852 >> 2] & 511](i7) | 0) & i16;
     }
     i18 = HEAP32[i7 + 16 >> 2] | 0;
     if ((i18 | 0) == 0 | i23 ^ 1) {
      i22 = i23;
      break;
     } else {
      i16 = i23;
      i7 = i18;
     }
    }
   }
   if (i22) {
    HEAP8[i9] = HEAP8[i9] & -5;
   }
   i7 = (HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i7 | 0) == 3 | (i7 | 0) == 0) {
    i24 = i3 + 48 | 0;
   } else {
    i24 = i3 + 44 | 0;
   }
   i7 = (HEAP32[i11 + 4 >> 2] | 0) + (HEAP32[i24 >> 2] | 0) | 0;
   i16 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i16 | 0) == 3 | (i16 | 0) == 0) {
    HEAP32[i2 + 56 >> 2] = i7;
    break;
   } else {
    HEAP32[i2 + 52 >> 2] = i7;
    break;
   }
  } else {
   i7 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i7 | 0) == 3 | (i7 | 0) == 0) {
    i25 = i2 + 56 | 0;
   } else {
    i25 = i2 + 52 | 0;
   }
   i16 = (HEAP32[i25 >> 2] | 0) + i10 | 0;
   if ((i7 | 0) == 3 | (i7 | 0) == 0) {
    HEAP32[i2 + 56 >> 2] = i16;
    break;
   } else {
    HEAP32[i2 + 52 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i25 = i4 | 0;
 do {
  if ((HEAP8[i25] & 18) == 18) {
   HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i13 >> 2] = HEAP32[i6 >> 2];
   __ZN7WebCore15RenderBlockFlow24setMaxMarginBeforeValuesENS_10LayoutUnitES1_(i2, i12, i13);
   HEAP8[i25] = HEAP8[i25] & -17;
   if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728) {
    break;
   }
   i4 = HEAP32[i2 + 100 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i24 = i4 + 32 | 0;
   HEAP8[i24] = HEAP8[i24] & -2;
  }
 } while (0);
 HEAP32[i1 >> 2] = i10 + i14;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, d35 = +0, i36 = 0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 56 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 __ZN7WebCore15RenderBlockFlow15ensureLineBoxesEv(i2);
 i15 = HEAP32[i2 + 104 >> 2] | 0;
 if ((i15 | 0) == 0) {
  __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i2 | 0, 0, 1);
  STACKTOP = i4;
  return;
 }
 i16 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i17 = (i16 - 2 | 0) >>> 0 < 2 >>> 0;
 i18 = i3 + 4 | 0;
 i19 = i5 | 0;
 i20 = i3 | 0;
 i21 = i6 | 0;
 i22 = 0;
 i23 = 0;
 i24 = i15;
 L5 : while (1) {
  i15 = i24;
  L7 : do {
   if ((__ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i24) | 0) == 0) {
    i25 = i23;
    i26 = i22;
   } else {
    i27 = (i23 | 0) == 0 ? i15 : i23;
    do {
     if (!i17) {
      if ((HEAP32[i24 + 56 >> 2] & 8388608 | 0) == 0) {
       break;
      }
      i28 = HEAP32[i18 >> 2] | 0;
      i29 = HEAP32[i24 + 80 >> 2] | 0;
      if ((i28 | 0) < (i29 | 0)) {
       i30 = 0;
       i31 = i27;
       i32 = i22;
       break L5;
      }
      if (!((i16 | 0) == 3 | (i16 | 0) == 1)) {
       break;
      }
      if ((i28 | 0) == (i29 | 0)) {
       i30 = 0;
       i31 = i27;
       i32 = i22;
       break L5;
      }
     }
    } while (0);
    i29 = HEAP32[i18 >> 2] | 0;
    __ZNK7WebCore13RootInlineBox15selectionBottomEv(i5, i15);
    if ((i29 | 0) >= (HEAP32[i19 >> 2] | 0)) {
     if (!((i16 | 0) == 3 | (i16 | 0) == 1)) {
      i25 = i27;
      i26 = i15;
      break;
     }
     i29 = HEAP32[i18 >> 2] | 0;
     __ZNK7WebCore13RootInlineBox15selectionBottomEv(i6, i15);
     if ((i29 | 0) != (HEAP32[i21 >> 2] | 0)) {
      i25 = i27;
      i26 = i15;
      break;
     }
    }
    L19 : do {
     if (i17) {
      i29 = i24;
      while (1) {
       i29 = HEAP32[i29 + 52 >> 2] | 0;
       if ((i29 | 0) == 0) {
        break L19;
       }
       if ((__ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i29) | 0) != 0) {
        break;
       }
      }
      if ((HEAP32[i29 + 56 >> 2] & 8388608 | 0) == 0) {
       break;
      }
      i28 = HEAP32[i18 >> 2] | 0;
      i33 = HEAP32[i29 + 80 >> 2] | 0;
      if ((i28 | 0) > (i33 | 0)) {
       i25 = i27;
       i26 = i15;
       break L7;
      }
      if ((i16 | 0) == 3 | (i16 | 0) == 1) {
       break;
      }
      if ((i28 | 0) == (i33 | 0)) {
       i25 = i27;
       i26 = i15;
       break L7;
      }
     }
    } while (0);
    i33 = __ZN7WebCore13RootInlineBox38closestLeafChildForLogicalLeftPositionEib(i15, HEAP32[i20 >> 2] | 0, 0) | 0;
    if ((i33 | 0) == 0) {
     i25 = i27;
     i26 = i15;
    } else {
     i30 = i33;
     i31 = i27;
     i32 = i15;
     break L5;
    }
   }
  } while (0);
  i15 = HEAP32[i24 + 52 >> 2] | 0;
  if ((i15 | 0) == 0) {
   i30 = 0;
   i31 = i25;
   i32 = i26;
   break;
  } else {
   i22 = i26;
   i23 = i25;
   i24 = i15;
  }
 }
 i24 = i2 | 0;
 __ZNK7WebCore6Editor8behaviorEv(i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 464 >> 2] | 0);
 i25 = (HEAP32[i7 >> 2] | 0) != 1;
 i7 = (i32 | 0) == 0;
 if (i25 | (i30 | 0) != 0 | i7) {
  i34 = i30;
 } else {
  i34 = __ZN7WebCore13RootInlineBox38closestLeafChildForLogicalLeftPositionEib(i32, HEAP32[i3 >> 2] | 0, 0) | 0;
 }
 if ((i34 | 0) == 0) {
  do {
   if (!i7) {
    if ((__ZNK7WebCore13RootInlineBox24getLogicalEndBoxWithNodeERPNS_9InlineBoxE(i32, i13) | 0) == 0) {
     break;
    }
    __ZNK7WebCore15RenderBlockFlow14positionForBoxEPNS_9InlineBoxEb(i14, i2, HEAP32[i13 >> 2] | 0, 0);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i14, 1);
    i30 = HEAP32[i14 >> 2] | 0;
    if ((i30 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i23 = i30 + 8 | 0;
    i30 = i23 | 0;
    i26 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    HEAP32[i30 >> 2] = i26;
    if ((i26 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    STACKTOP = i4;
    return;
   }
  } while (0);
  __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i24, 0, 1);
  STACKTOP = i4;
  return;
 }
 do {
  if (i25) {
   __ZNK7WebCore13RootInlineBox12selectionTopEv(i8, i31);
   d35 = +HEAPF32[((HEAP32[i31 + 32 >> 2] & 2048 | 0) == 0 ? i31 + 20 | 0 : i31 + 24 | 0) >> 2];
   do {
    if (d35 < +2147483647) {
     if (d35 <= +-2147483648) {
      i36 = -2147483648;
      break;
     }
     i36 = ~~d35;
    } else {
     i36 = 2147483647;
    }
   } while (0);
   HEAP32[i9 >> 2] = i36;
   i24 = HEAP32[((i36 | 0) < (HEAP32[i8 >> 2] | 0) ? i9 : i8) >> 2] | 0;
   i14 = HEAP32[i18 >> 2] | 0;
   if ((i14 | 0) >= (i24 | 0)) {
    if (!((i16 | 0) == 3 | (i16 | 0) == 1)) {
     break;
    }
    if ((i14 | 0) != (i24 | 0)) {
     break;
    }
   }
   i24 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i31 | 0) | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 20 >> 2] & 511](i24) | 0) {
    i14 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i24) | 0;
    i37 = (i14 | 0) == 0 ? i24 : i14;
   } else {
    i37 = i24;
   }
   __ZNK7WebCore15RenderBlockFlow14positionForBoxEPNS_9InlineBoxEb(i10, i2, i37, 1);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i10, 1);
   i24 = HEAP32[i10 >> 2] | 0;
   if ((i24 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i14 = i24 + 8 | 0;
   i24 = i14 | 0;
   i13 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i10 = HEAP32[i3 >> 2] | 0;
 i3 = __ZNK7WebCore13RootInlineBox25blockDirectionPointInLineEv(__ZN7WebCore9InlineBox4rootEv(i34) | 0) | 0;
 HEAP32[i11 >> 2] = i10;
 HEAP32[i12 + 4 >> 2] = i3;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  HEAP32[i11 >> 2] = i3;
  HEAP32[i11 + 4 >> 2] = i10;
 }
 i10 = HEAP32[i34 + 16 >> 2] | 0;
 if ((HEAP32[i10 + 20 >> 2] & 2048 | 0) == 0) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 464 >> 2] & 127](i1, i10, i12);
  STACKTOP = i4;
  return;
 } else {
  __ZN7WebCore43positionForPointRespectingEditingBoundariesERNS_11RenderBlockERNS_9RenderBoxERKNS_11LayoutPointE(i1, i2 | 0, i10, i12);
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore15RenderBlockFlow20marginValuesForChildERNS_9RenderBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
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
 if ((HEAP32[i3 + 24 >> 2] & 32 | 0) == 0) {
  i23 = 0;
 } else {
  i23 = i3;
 }
 i24 = HEAP32[i3 + 8 >> 2] | 0;
 L4 : do {
  if ((i24 | 0) == 0) {
   i25 = 17;
  } else {
   i26 = i3 + 36 | 0;
   i27 = HEAP32[(HEAP32[i26 >> 2] | 0) + 44 >> 2] | 0;
   if (((i27 ^ HEAP32[(HEAP32[i24 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    i25 = 17;
    break;
   }
   if ((i23 | 0) == 0) {
    i28 = i3 + 60 | 0;
    __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i17, i28, i27 >>> 13 & 3);
    i27 = HEAP32[i17 >> 2] | 0;
    __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i18, i28, (HEAP32[(HEAP32[i26 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
    i29 = HEAP32[i18 >> 2] | 0;
    i30 = i27;
    i25 = 31;
    break;
   }
   i27 = i23 + 100 | 0;
   i26 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i26 | 0) == 0) {
     i28 = i10;
     _llvm_lifetime_start(4, 0, i28 | 0);
     __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i9, i23 + 60 | 0, (HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     HEAP32[i10 >> 2] = 0;
     i31 = HEAP32[((HEAP32[i9 >> 2] | 0) < 0 ? i10 : i9) >> 2] | 0;
     _llvm_lifetime_end(4, 0, i28 | 0);
     i28 = HEAP32[i27 >> 2] | 0;
     if ((i28 | 0) != 0) {
      i32 = i28;
      i33 = i31;
      i25 = 9;
      break;
     }
     __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i8, i23 + 60 | 0, (HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     i28 = HEAP32[i8 >> 2] | 0;
     i34 = (i28 | 0) > 0 ? 0 : -i28 | 0;
     i35 = HEAP32[i27 >> 2] | 0;
     i36 = i31;
    } else {
     i32 = i26;
     i33 = HEAP32[i26 + 4 >> 2] | 0;
     i25 = 9;
    }
   } while (0);
   if ((i25 | 0) == 9) {
    i34 = HEAP32[i32 + 8 >> 2] | 0;
    i35 = i32;
    i36 = i33;
   }
   do {
    if ((i35 | 0) == 0) {
     i26 = i7;
     _llvm_lifetime_start(4, 0, i26 | 0);
     __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i6, i23 + 60 | 0, (HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     HEAP32[i7 >> 2] = 0;
     i31 = HEAP32[((HEAP32[i6 >> 2] | 0) < 0 ? i7 : i6) >> 2] | 0;
     _llvm_lifetime_end(4, 0, i26 | 0);
     i26 = HEAP32[i27 >> 2] | 0;
     if ((i26 | 0) != 0) {
      i37 = i26;
      i38 = i31;
      break;
     }
     __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i5, i23 + 60 | 0, (HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     i26 = HEAP32[i5 >> 2] | 0;
     i39 = (i26 | 0) > 0 ? 0 : -i26 | 0;
     i40 = i31;
     i41 = i36;
     i42 = i34;
     break L4;
    } else {
     i37 = i35;
     i38 = HEAP32[i35 + 12 >> 2] | 0;
    }
   } while (0);
   i39 = HEAP32[i37 + 16 >> 2] | 0;
   i40 = i38;
   i41 = i36;
   i42 = i34;
  }
 } while (0);
 L22 : do {
  if ((i25 | 0) == 17) {
   if ((HEAP32[i3 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0) {
    i34 = i3 | 0;
    i36 = i3;
    i38 = i2 + 36 | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i36 >> 2] | 0) + 784 >> 2] & 127](i21, i34, HEAP32[i38 >> 2] | 0);
    i37 = HEAP32[i21 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i36 >> 2] | 0) + 788 >> 2] & 127](i22, i34, HEAP32[i38 >> 2] | 0);
    i29 = HEAP32[i22 >> 2] | 0;
    i30 = i37;
    i25 = 31;
    break;
   }
   if ((i23 | 0) == 0) {
    i37 = i3 + 60 | 0;
    i38 = i3 + 36 | 0;
    __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i19, i37, (HEAP32[(HEAP32[i38 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
    i34 = HEAP32[i19 >> 2] | 0;
    __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i20, i37, (HEAP32[(HEAP32[i38 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
    i29 = HEAP32[i20 >> 2] | 0;
    i30 = i34;
    i25 = 31;
    break;
   }
   i34 = i23 + 100 | 0;
   i38 = HEAP32[i34 >> 2] | 0;
   do {
    if ((i38 | 0) == 0) {
     i37 = i12;
     _llvm_lifetime_start(4, 0, i37 | 0);
     __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i11, i23 + 60 | 0, (HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     HEAP32[i12 >> 2] = 0;
     i36 = HEAP32[((HEAP32[i11 >> 2] | 0) < 0 ? i12 : i11) >> 2] | 0;
     _llvm_lifetime_end(4, 0, i37 | 0);
     i37 = HEAP32[i34 >> 2] | 0;
     if ((i37 | 0) != 0) {
      i43 = i37;
      i44 = i36;
      i25 = 22;
      break;
     }
     __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i13, i23 + 60 | 0, (HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     i37 = HEAP32[i13 >> 2] | 0;
     i45 = (i37 | 0) > 0 ? 0 : -i37 | 0;
     i46 = HEAP32[i34 >> 2] | 0;
     i47 = i36;
    } else {
     i43 = i38;
     i44 = HEAP32[i38 + 12 >> 2] | 0;
     i25 = 22;
    }
   } while (0);
   if ((i25 | 0) == 22) {
    i45 = HEAP32[i43 + 16 >> 2] | 0;
    i46 = i43;
    i47 = i44;
   }
   do {
    if ((i46 | 0) == 0) {
     i38 = i15;
     _llvm_lifetime_start(4, 0, i38 | 0);
     __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i14, i23 + 60 | 0, (HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     HEAP32[i15 >> 2] = 0;
     i36 = HEAP32[((HEAP32[i14 >> 2] | 0) < 0 ? i15 : i14) >> 2] | 0;
     _llvm_lifetime_end(4, 0, i38 | 0);
     i38 = HEAP32[i34 >> 2] | 0;
     if ((i38 | 0) != 0) {
      i48 = i38;
      i49 = i36;
      break;
     }
     __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i16, i23 + 60 | 0, (HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     i38 = HEAP32[i16 >> 2] | 0;
     i39 = (i38 | 0) > 0 ? 0 : -i38 | 0;
     i40 = i36;
     i41 = i47;
     i42 = i45;
     break L22;
    } else {
     i48 = i46;
     i49 = HEAP32[i46 + 4 >> 2] | 0;
    }
   } while (0);
   i39 = HEAP32[i48 + 8 >> 2] | 0;
   i40 = i49;
   i41 = i47;
   i42 = i45;
  }
 } while (0);
 do {
  if ((i25 | 0) == 31) {
   if ((i30 | 0) == 0) {
    i50 = 0;
    i51 = 0;
   } else {
    i45 = (i30 | 0) > 0;
    i50 = i45 ? 0 : -i30 | 0;
    i51 = i45 ? i30 : 0;
   }
   if ((i29 | 0) == 0) {
    i39 = 0;
    i40 = 0;
    i41 = i51;
    i42 = i50;
    break;
   }
   i45 = (i29 | 0) > 0;
   i39 = i45 ? 0 : -i29 | 0;
   i40 = i45 ? i29 : 0;
   i41 = i51;
   i42 = i50;
  }
 } while (0);
 HEAP32[i1 >> 2] = i41;
 HEAP32[i1 + 4 >> 2] = i42;
 HEAP32[i1 + 8 >> 2] = i40;
 HEAP32[i1 + 12 >> 2] = i39;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlow29adjustBlockChildForPaginationENS_10LayoutUnitES1_RNS_9RenderBoxEb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
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
 i23 = i7 + 120 | 0;
 i24 = i7 + 128 | 0;
 i25 = i5 | 0;
 if ((HEAP32[i5 + 24 >> 2] & 16 | 0) == 0) {
  i26 = 0;
 } else {
  i26 = i5;
 }
 i27 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i27 | 0) == (i4 | 0)) {
   i28 = i27;
  } else {
   i3 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i3 | 0) == 3 | (i3 | 0) == 0) {
    HEAP32[i2 + 56 >> 2] = i4;
   } else {
    HEAP32[i2 + 52 >> 2] = i4;
   }
   HEAP32[i15 >> 2] = i4;
   __ZN7WebCore11RenderBlock21setLogicalTopForChildERNS_9RenderBoxENS_10LayoutUnitENS0_20ApplyLayoutDeltaModeE(i2 | 0, i5, i15, 0);
   do {
    if (__ZNK7WebCore9RenderBox19shrinkToAvoidFloatsEv(i5) | 0) {
     i3 = i5 + 20 | 0;
     i29 = HEAP32[i3 >> 2] | 0;
     if ((i29 & 4 | 0) != 0) {
      break;
     }
     HEAP32[i3 >> 2] = i29 | 4;
    }
   } while (0);
   do {
    if ((i26 | 0) == 0) {
     i30 = i5 + 20 | 0;
    } else {
     do {
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 972 >> 2] & 511](i5) | 0)) {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 1024 >> 2] & 511](i26) | 0)) {
        break;
       }
       __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i26, 0, 1);
      }
     } while (0);
     i29 = i5 + 20 | 0;
     if ((HEAP32[i29 >> 2] & 31 | 0) != 0) {
      i30 = i29;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 976 >> 2] & 63](i5);
     i30 = i29;
    }
   } while (0);
   if ((HEAP32[i30 >> 2] & 31 | 0) == 0) {
    i28 = i4;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 652 >> 2] & 63](i25);
   i28 = i4;
  }
 } while (0);
 HEAP32[i16 >> 2] = i28;
 __ZN7WebCore15RenderBlockFlow16applyBeforeBreakERNS_9RenderBoxENS_10LayoutUnitE(i1, i2, i5, i16);
 i16 = i1 | 0;
 i1 = HEAP32[i16 >> 2] | 0;
 i4 = i2 + 20 | 0;
 do {
  if ((HEAP32[i4 >> 2] & 805306368 | 0) == 0) {
   i31 = 21;
  } else {
   i25 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0;
   if ((i25 | 0) == 0) {
    i31 = 21;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i9, i2 | 0);
   HEAP32[i8 >> 2] = (HEAP32[i9 >> 2] | 0) + i1;
   __ZN7WebCore16RenderFlowThread26pageLogicalHeightForOffsetENS_10LayoutUnitE(i17, i25, i8);
   i32 = HEAP32[i17 >> 2] | 0;
  }
 } while (0);
 if ((i31 | 0) == 21) {
  i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2] | 0;
  HEAP32[i17 >> 2] = i8;
  i32 = i8;
 }
 do {
  if ((i32 | 0) != 0) {
   i8 = i2 | 0;
   i17 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 864 >> 2] & 127](i10, i8);
   i9 = (HEAP32[i10 >> 2] | 0) + i1 | 0;
   do {
    if ((HEAP32[i4 >> 2] & 805306368 | 0) == 0) {
     i31 = 26;
    } else {
     i25 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0;
     if ((i25 | 0) == 0) {
      i31 = 26;
      break;
     }
     HEAP32[i11 >> 2] = i9;
     __ZN7WebCore16RenderFlowThread35pageRemainingLogicalHeightForOffsetENS_10LayoutUnitENS_15RenderBlockFlow16PageBoundaryRuleE(i18, i25, i11, 0);
    }
   } while (0);
   if ((i31 | 0) == 26) {
    i25 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2] | 0;
    HEAP32[i18 >> 2] = i25 - ((i9 | 0) % (i25 | 0) & -1);
   }
   i25 = (HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i25 | 0) == 3 | (i25 | 0) == 0) {
    i33 = i5 + 56 | 0;
   } else {
    i33 = i5 + 52 | 0;
   }
   i25 = (HEAP32[i33 >> 2] | 0) - (HEAP32[i18 >> 2] | 0) | 0;
   if ((i25 | 0) <= 0) {
    break;
   }
   if ((HEAP32[i4 >> 2] & 805306368 | 0) == 0) {
    break;
   }
   i30 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   i15 = HEAP32[(HEAP32[i30 >> 2] | 0) + 1180 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 864 >> 2] & 127](i13, i8);
   HEAP32[i12 >> 2] = (HEAP32[i13 >> 2] | 0) + i1;
   HEAP32[i14 >> 2] = i25;
   FUNCTION_TABLE_viiii[i15 & 31](i30, i8, i12, i14);
  }
 } while (0);
 HEAP32[i20 >> 2] = i1;
 __ZN7WebCore15RenderBlockFlow26adjustForUnsplittableChildERNS_9RenderBoxENS_10LayoutUnitEb(i19, i2, i5, i20, 0);
 i20 = HEAP32[i19 >> 2] | 0;
 i19 = i20 - i1 | 0;
 do {
  if ((i20 | 0) == (i1 | 0)) {
   if ((i26 | 0) == 0) {
    i34 = i1;
    break;
   }
   __ZNK7WebCore11RenderBlock15paginationStrutEv(i21, i26);
   if ((HEAP32[i21 >> 2] | 0) == 0) {
    i34 = i1;
    break;
   }
   __ZNK7WebCore11RenderBlock15paginationStrutEv(i22, i26);
   i5 = HEAP32[i22 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i34 = i1;
   } else {
    i35 = i5;
    i31 = 39;
   }
  } else {
   i35 = i19;
   i31 = 39;
  }
 } while (0);
 L51 : do {
  if ((i31 | 0) == 39) {
   do {
    if ((i28 | 0) == (i1 | 0) & i6) {
     if ((HEAP32[i4 >> 2] & 25165824 | 0) == 16777216) {
      break;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 511](i2 | 0) | 0) {
      break;
     }
     HEAP32[i23 >> 2] = i28 + i35;
     __ZN7WebCore11RenderBlock18setPaginationStrutENS_10LayoutUnitE(i2 | 0, i23);
     if ((i26 | 0) == 0) {
      i34 = i28;
      break L51;
     }
     HEAP32[i24 >> 2] = 0;
     __ZN7WebCore11RenderBlock18setPaginationStrutENS_10LayoutUnitE(i26, i24);
     i34 = i28;
     break L51;
    }
   } while (0);
   i8 = i1 + i35 | 0;
   HEAP32[i16 >> 2] = i8;
   i34 = i8;
  }
 } while (0);
 i16 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i16 | 0) == 3 | (i16 | 0) == 0) {
  i36 = i2 + 56 | 0;
 } else {
  i36 = i2 + 52 | 0;
 }
 i35 = i34 - i28 + (HEAP32[i36 >> 2] | 0) | 0;
 if ((i16 | 0) == 3 | (i16 | 0) == 0) {
  HEAP32[i2 + 56 >> 2] = i35;
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i2 + 52 >> 2] = i35;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow26adjustForUnsplittableChildERNS_9RenderBoxENS_10LayoutUnitEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
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
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 i20 = i6 + 104 | 0;
 i21 = i6 + 112 | 0;
 i22 = i2 | 0;
 i23 = i2 + 4 | 0;
 i24 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 i25 = HEAP32[i24 + 4 >> 2] | 0;
 if ((i25 | 0) == 0) {
  i26 = 3;
 } else {
  if ((HEAP32[i25 + 40 >> 2] | 0) == 0) {
   i27 = 0;
   i28 = 1;
  } else {
   i26 = 3;
  }
 }
 if ((i26 | 0) == 3) {
  i27 = (HEAP32[i24 + 60 >> 2] | 0) != 0;
  i28 = 0;
 }
 i24 = i2 + 20 | 0;
 do {
  if ((HEAP32[i24 >> 2] & 805306368 | 0) == 0) {
   i29 = 0;
   i30 = 0;
   i31 = 0;
  } else {
   i25 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i22) | 0;
   if ((i25 | 0) == 0) {
    i29 = 0;
    i30 = 0;
    i31 = 0;
    break;
   }
   i29 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 252 >> 2] & 511](i25 | 0) | 0;
   i30 = i25;
   i31 = 1;
  }
 } while (0);
 L10 : do {
  if (!(__ZNK7WebCore9RenderBox27isUnsplittableForPaginationEv(i3) | 0)) {
   if (i28) {
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 1536 | 0) == 1024) {
     break;
    }
   }
   do {
    if (i27) {
     i25 = HEAP32[i3 + 36 >> 2] | 0;
     i32 = (HEAP32[i25 + 52 >> 2] & 48 | 0) == 32;
     if (!(i32 | i29 ^ 1)) {
      i33 = i25;
      i26 = 14;
      break;
     }
     if (i32) {
      break L10;
     }
    } else {
     if (!i29) {
      break;
     }
     i33 = HEAP32[i3 + 36 >> 2] | 0;
     i26 = 14;
    }
   } while (0);
   if ((i26 | 0) == 14) {
    if ((HEAP32[(HEAP32[i33 + 20 >> 2] | 0) + 292 >> 2] & 96 | 0) == 64) {
     break;
    }
   }
   HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
   STACKTOP = i6;
   return;
  }
 } while (0);
 i33 = i2 | 0;
 i29 = HEAP32[i24 >> 2] | 0;
 i27 = HEAP32[((i29 & 8192 | 0) == 0 ? i3 + 52 | 0 : i3 + 56 | 0) >> 2] | 0;
 if (i5) {
  i5 = i3 | 0;
  i28 = i3;
  i3 = i2 + 36 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i28 >> 2] | 0) + 784 >> 2] & 127](i15, i5, HEAP32[i3 >> 2] | 0);
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i28 >> 2] | 0) + 788 >> 2] & 127](i16, i5, HEAP32[i3 >> 2] | 0);
  i34 = (HEAP32[i16 >> 2] | 0) + (HEAP32[i15 >> 2] | 0) | 0;
  i35 = HEAP32[i24 >> 2] | 0;
 } else {
  i34 = 0;
  i35 = i29;
 }
 i29 = i34 + i27 | 0;
 i27 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i35 & 805306368 | 0) == 0) {
   i26 = 21;
  } else {
   i4 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i22) | 0;
   if ((i4 | 0) == 0) {
    i26 = 21;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i8, i33);
   HEAP32[i7 >> 2] = (HEAP32[i8 >> 2] | 0) + i27;
   __ZN7WebCore16RenderFlowThread26pageLogicalHeightForOffsetENS_10LayoutUnitE(i17, i4, i7);
  }
 } while (0);
 if ((i26 | 0) == 21) {
  HEAP32[i17 >> 2] = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2];
 }
 if (i31) {
  i36 = (HEAP8[i30 + 292 | 0] & 4) != 0;
 } else {
  i36 = 1;
 }
 i30 = i9;
 _llvm_lifetime_start(4, 0, i30 | 0);
 do {
  if ((HEAP32[i24 >> 2] & 805306368 | 0) == 0) {
   i26 = 28;
  } else {
   i31 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i22) | 0;
   if ((i31 | 0) == 0) {
    i26 = 28;
    break;
   }
   i7 = HEAP32[(HEAP32[i31 >> 2] | 0) + 1184 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i11, i33);
   HEAP32[i10 >> 2] = (HEAP32[i11 >> 2] | 0) + i27;
   HEAP32[i12 >> 2] = i29;
   FUNCTION_TABLE_viiii[i7 & 31](i31, i33, i10, i12);
  }
 } while (0);
 do {
  if ((i26 | 0) == 28) {
   i12 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 4 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   HEAP32[i9 >> 2] = i29;
   i10 = i12 + 24 | 0;
   i12 = i10 | 0;
   HEAP32[i12 >> 2] = HEAP32[((i29 | 0) < (HEAP32[i12 >> 2] | 0) ? i10 : i9) >> 2];
  }
 } while (0);
 _llvm_lifetime_end(4, 0, i30 | 0);
 i30 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i30 | 0) != 0) {
   if (i36 & (i29 | 0) > (i30 | 0)) {
    break;
   }
   HEAP32[i18 >> 2] = i27;
   if (!(__ZNK7WebCore15RenderBlockFlow11hasNextPageENS_10LayoutUnitENS0_16PageBoundaryRuleE(i2, i18, 0) | 0)) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i13, i33);
   i17 = (HEAP32[i13 >> 2] | 0) + i27 | 0;
   do {
    if ((HEAP32[i24 >> 2] & 805306368 | 0) == 0) {
     i26 = 36;
    } else {
     i9 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i22) | 0;
     if ((i9 | 0) == 0) {
      i26 = 36;
      break;
     }
     HEAP32[i14 >> 2] = i17;
     __ZN7WebCore16RenderFlowThread35pageRemainingLogicalHeightForOffsetENS_10LayoutUnitENS_15RenderBlockFlow16PageBoundaryRuleE(i19, i9, i14, 0);
     i37 = HEAP32[i19 >> 2] | 0;
    }
   } while (0);
   if ((i26 | 0) == 36) {
    i9 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2] | 0;
    i10 = i9 - ((i17 | 0) % (i9 | 0) & -1) | 0;
    HEAP32[i19 >> 2] = i10;
    i37 = i10;
   }
   i10 = i19 | 0;
   if ((i37 | 0) >= (i29 | 0)) {
    HEAP32[i1 >> 2] = i27;
    STACKTOP = i6;
    return;
   }
   do {
    if (!i36) {
     HEAP32[i20 >> 2] = i27;
     HEAP32[i21 >> 2] = i29;
     if (__ZNK7WebCore15RenderBlockFlow38pushToNextPageWithMinimumLogicalHeightERNS_10LayoutUnitES1_S1_(i2, i19, i20, i21) | 0) {
      break;
     }
     HEAP32[i1 >> 2] = i27;
     STACKTOP = i6;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = (HEAP32[i10 >> 2] | 0) + i27;
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = i27;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore15RenderBlockFlow14positionForBoxEPNS_9InlineBoxEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i12 = i1 + 8 | 0;
  i13 = i12;
  i14 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = i14 & -8;
  HEAP8[i12] = i14 & 255 & -16;
  STACKTOP = i5;
  return;
 }
 i14 = i3 + 16 | 0;
 i12 = HEAP32[i14 >> 2] | 0;
 i13 = i12 + 20 | 0;
 i15 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i15 & 128 | 0) == 0) {
   i16 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = i15;
    i18 = 8;
    break;
   }
   if ((HEAP32[i16 + 12 >> 2] & 1048580 | 0) != 1048580) {
    i17 = i15;
    i18 = 8;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 232 >> 2] & 511](i16) | 0) != 0) {
    break;
   }
   i17 = HEAP32[i13 >> 2] | 0;
   i18 = 8;
  } else {
   i17 = i15;
   i18 = 8;
  }
 } while (0);
 do {
  if ((i18 | 0) == 8) {
   if ((i17 & 128 | 0) != 0) {
    break;
   }
   if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
    break;
   }
   i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 511](i3) | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   i16 = i13 + 20 | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   i20 = (i19 & 128 | 0) == 0;
   if (i15) {
    do {
     if (i20) {
      i15 = HEAP32[i13 + 4 >> 2] | 0;
      if ((i15 | 0) == 0) {
       i21 = i19;
       i18 = 46;
       break;
      }
      if ((HEAP32[i15 + 12 >> 2] & 1048580 | 0) != 1048580) {
       i21 = i19;
       i18 = 46;
       break;
      }
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 232 >> 2] & 511](i15) | 0) != 0) {
       i22 = 0;
       break;
      }
      i21 = HEAP32[i16 >> 2] | 0;
      i18 = 46;
     } else {
      i21 = i19;
      i18 = 46;
     }
    } while (0);
    do {
     if ((i18 | 0) == 46) {
      if ((i21 & 128 | 0) != 0) {
       i22 = 0;
       break;
      }
      i15 = HEAP32[i13 + 4 >> 2] | 0;
      if ((i15 | 0) == 0) {
       i22 = 0;
       break;
      }
      i23 = i15 + 8 | 0;
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
      i22 = i15;
     }
    } while (0);
    i15 = HEAP32[i3 + 44 >> 2] | 0;
    if (i4) {
     i24 = i15;
    } else {
     i24 = (HEAPU16[i3 + 48 >> 1] | 0) + i15 | 0;
    }
    i15 = i10 | 0;
    HEAP32[i15 >> 2] = i22;
    HEAP32[i11 >> 2] = i24;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1, i10, i11);
    i23 = HEAP32[i15 >> 2] | 0;
    if ((i23 | 0) == 0) {
     STACKTOP = i5;
     return;
    }
    i15 = i23 + 8 | 0;
    i23 = i15 | 0;
    i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    HEAP32[i23 >> 2] = i25;
    if ((i25 | 0) >= 1) {
     STACKTOP = i5;
     return;
    }
    if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
     STACKTOP = i5;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    STACKTOP = i5;
    return;
   }
   do {
    if (i20) {
     i15 = HEAP32[i13 + 4 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i26 = i19;
      i18 = 31;
      break;
     }
     if ((HEAP32[i15 + 12 >> 2] & 1048580 | 0) != 1048580) {
      i26 = i19;
      i18 = 31;
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 232 >> 2] & 511](i15) | 0) != 0) {
      i27 = 0;
      break;
     }
     i26 = HEAP32[i16 >> 2] | 0;
     i18 = 31;
    } else {
     i26 = i19;
     i18 = 31;
    }
   } while (0);
   do {
    if ((i18 | 0) == 31) {
     if ((i26 & 128 | 0) != 0) {
      i27 = 0;
      break;
     }
     i19 = HEAP32[i13 + 4 >> 2] | 0;
     if ((i19 | 0) == 0) {
      i27 = 0;
      break;
     }
     i16 = i19 + 8 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     i27 = i19;
    }
   } while (0);
   i13 = HEAP32[i14 >> 2] | 0;
   i19 = HEAP32[i13 >> 2] | 0;
   if (i4) {
    i28 = FUNCTION_TABLE_ii[HEAP32[i19 + 564 >> 2] & 511](i13) | 0;
   } else {
    i28 = FUNCTION_TABLE_ii[HEAP32[i19 + 568 >> 2] & 511](i13) | 0;
   }
   i13 = i6 | 0;
   HEAP32[i13 >> 2] = i27;
   HEAP32[i7 >> 2] = i28;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1, i6, i7);
   i19 = HEAP32[i13 >> 2] | 0;
   if ((i19 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i13 = i19 + 8 | 0;
   i19 = i13 | 0;
   i16 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    STACKTOP = i5;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i7 = i2 + 20 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 & 128 | 0) == 0) {
   i28 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i29 = i6;
    i18 = 15;
    break;
   }
   if ((HEAP32[i28 + 12 >> 2] & 1048580 | 0) != 1048580) {
    i29 = i6;
    i18 = 15;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 232 >> 2] & 511](i28) | 0) != 0) {
    i30 = 0;
    break;
   }
   i29 = HEAP32[i7 >> 2] | 0;
   i18 = 15;
  } else {
   i29 = i6;
   i18 = 15;
  }
 } while (0);
 do {
  if ((i18 | 0) == 15) {
   if ((i29 & 128 | 0) != 0) {
    i30 = 0;
    break;
   }
   i6 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i30 = i6;
    break;
   }
   i7 = i6 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i30 = i6;
  }
 } while (0);
 i29 = i2 | 0;
 i18 = HEAP32[i2 >> 2] | 0;
 if (i4) {
  i31 = FUNCTION_TABLE_ii[HEAP32[i18 + 564 >> 2] & 511](i29) | 0;
 } else {
  i31 = FUNCTION_TABLE_ii[HEAP32[i18 + 568 >> 2] & 511](i29) | 0;
 }
 i29 = i8 | 0;
 HEAP32[i29 >> 2] = i30;
 HEAP32[i9 >> 2] = i31;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i1, i8, i9);
 i9 = HEAP32[i29 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i29 = i9 + 8 | 0;
 i9 = i29 | 0;
 i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow10MarginInfoC2ERS0_NS_10LayoutUnitES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i1 | 0;
 HEAP8[i9] = HEAP8[i9] & 15 | 16;
 i10 = i9 + 1 | 0;
 HEAP8[i10] = HEAP8[i10] & -4;
 i11 = i1 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i1 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 i1 = i2 + 36 | 0;
 i13 = HEAP32[i1 >> 2] | 0;
 i14 = i2 | 0;
 i15 = i2 + 20 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i16 & 768 | 0) == 768) {
   i17 = 11;
  } else {
   i18 = HEAP32[i2 + 4 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i18 | 0)) {
    i17 = 11;
    break;
   }
   if ((i16 & 25165824 | 0) == 16777216 | (i16 & 64 | 0) != 0) {
    i17 = 11;
    break;
   }
   i18 = i2;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 188 >> 2] & 511](i14) | 0) {
    i17 = 11;
    break;
   }
   i19 = HEAP32[i15 >> 2] | 0;
   if ((i19 & 65536 | 0) != 0 | (i19 & 3072 | 0) == 3072) {
    i17 = 11;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 248 >> 2] & 511](i14) | 0) {
    i17 = 11;
    break;
   }
   i18 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i17 = 11;
    break;
   }
   if (((HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i18 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    i17 = 11;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 556 >> 2] & 511](i18 | 0) | 0) {
    i17 = 11;
    break;
   }
   i18 = i13 + 20 | 0;
   i19 = (HEAP32[(HEAP32[i18 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
   if ((HEAP8[i19] & 3) != 3) {
    i17 = 11;
    break;
   }
   i20 = ((HEAP32[i19 >> 2] | 0) >>> 4 & 1 ^ 1) & 255;
   i19 = i20 | HEAP8[i9] & -2;
   HEAP8[i9] = i19;
   if (i20 << 24 >> 24 == 0) {
    i21 = 0;
    i22 = i19;
    break;
   }
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    i21 = 0;
    i22 = i19;
    break;
   }
   i21 = ((HEAP32[(HEAP32[i18 >> 2] | 0) + 292 >> 2] & 201326592 | 0) != 67108864) << 1;
   i22 = i19;
  }
 } while (0);
 if ((i17 | 0) == 11) {
  i17 = HEAP8[i9] & -2;
  HEAP8[i9] = i17;
  i21 = 0;
  i22 = i17;
 }
 i17 = i22 & -3 | i21;
 HEAP8[i9] = i17;
 do {
  if ((i22 & 1) == 0) {
   i23 = 0;
  } else {
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    i23 = 0;
    break;
   }
   i21 = (HEAP32[i13 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    i3 = HEAP32[i13 + 4 >> 2] | 0;
    i24 = i3 + 12 | 0;
    i25 = i3;
   } else {
    i3 = HEAP32[i13 + 4 >> 2] | 0;
    i24 = i3 + 4 | 0;
    i25 = i3;
   }
   if ((HEAP8[i24 + 5 | 0] | 0) != 0) {
    i23 = 0;
    break;
   }
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    i26 = i25 + 12 | 0;
   } else {
    i26 = i25 + 4 | 0;
   }
   if ((HEAP8[i26 + 6 | 0] & 1) == 0) {
    d27 = +(HEAP32[i26 >> 2] | 0);
   } else {
    d27 = +HEAPF32[i26 >> 2];
   }
   if (d27 != +0) {
    i23 = 0;
    break;
   }
   i23 = ((HEAP32[(HEAP32[i13 + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) != 268435456) << 2;
  }
 } while (0);
 HEAP8[i9] = i17 & -5 | i23;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 511](i14) | 0) {
   i28 = 8;
  } else {
   if ((HEAP32[i15 >> 2] & 128 | 0) != 0) {
    i28 = 0;
    break;
   }
   i23 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i28 = 0;
    break;
   }
   if ((HEAP32[i23 + 12 >> 2] & 4 | 0) == 0) {
    i28 = 0;
    break;
   }
   i17 = HEAP32[i23 + 44 >> 2] | 0;
   i23 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i17 | 0) == (i23 | 0)) {
    i28 = 8;
    break;
   }
   if ((HEAP32[i17 + 12 >> 2] | 0) != (HEAP32[i23 + 12 >> 2] | 0)) {
    i28 = 0;
    break;
   }
   i28 = ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i23 + 16 >> 2] | 0)) << 3;
  }
 } while (0);
 i15 = HEAP8[i9] | 0;
 i14 = i15 & -9 | i28;
 HEAP8[i9] = i14;
 do {
  if ((i15 & 2) == 0) {
   i29 = 0;
  } else {
   if ((HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728) {
    i29 = 2;
    break;
   }
   i28 = HEAP32[i2 + 100 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i29 = 0;
    break;
   }
   i29 = HEAP8[i28 + 32 | 0] << 1 & 2;
  }
 } while (0);
 HEAP8[i10] = HEAP8[i10] & -3 | i29;
 do {
  if ((i15 & 2) == 0) {
   i30 = 0;
   i31 = i14;
  } else {
   i29 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[(HEAP32[i29 + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728) {
    i30 = 0;
    i31 = i14;
    break;
   }
   i10 = HEAP32[i2 + 100 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i28 = i7;
    _llvm_lifetime_start(4, 0, i28 | 0);
    __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i6, i2 + 60 | 0, (HEAP32[i29 + 44 >> 2] | 0) >>> 13 & 3);
    HEAP32[i7 >> 2] = 0;
    i29 = HEAP32[((HEAP32[i6 >> 2] | 0) < 0 ? i7 : i6) >> 2] | 0;
    _llvm_lifetime_end(4, 0, i28 | 0);
    i30 = i29;
    i31 = HEAP8[i9] | 0;
    break;
   }
   if ((HEAP8[i10 + 32 | 0] & 1) != 0) {
    i30 = 0;
    i31 = i14;
    break;
   }
   i30 = HEAP32[i10 + 4 >> 2] | 0;
   i31 = i14;
  }
 } while (0);
 HEAP32[i11 >> 2] = i30;
 if ((i31 & 2) == 0) {
  i32 = 0;
  HEAP32[i12 >> 2] = i32;
  STACKTOP = i5;
  return;
 }
 i31 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[(HEAP32[i31 + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728) {
  i32 = 0;
  HEAP32[i12 >> 2] = i32;
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[i2 + 100 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i8, i2 + 60 | 0, (HEAP32[i31 + 44 >> 2] | 0) >>> 13 & 3);
  i31 = HEAP32[i8 >> 2] | 0;
  i32 = (i31 | 0) > 0 ? 0 : -i31 | 0;
  HEAP32[i12 >> 2] = i32;
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i1 + 32 | 0] & 1) != 0) {
  i32 = 0;
  HEAP32[i12 >> 2] = i32;
  STACKTOP = i5;
  return;
 }
 i32 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i12 >> 2] = i32;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow10MarginInfoC1ERS0_NS_10LayoutUnitES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i1 | 0;
 HEAP8[i9] = HEAP8[i9] & 15 | 16;
 i10 = i9 + 1 | 0;
 HEAP8[i10] = HEAP8[i10] & -4;
 i11 = i1 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i1 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 i1 = i2 + 36 | 0;
 i13 = HEAP32[i1 >> 2] | 0;
 i14 = i2 | 0;
 i15 = i2 + 20 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i16 & 768 | 0) == 768) {
   i17 = 11;
  } else {
   i18 = HEAP32[i2 + 4 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i18 | 0)) {
    i17 = 11;
    break;
   }
   if ((i16 & 25165824 | 0) == 16777216 | (i16 & 64 | 0) != 0) {
    i17 = 11;
    break;
   }
   i18 = i2;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 188 >> 2] & 511](i14) | 0) {
    i17 = 11;
    break;
   }
   i19 = HEAP32[i15 >> 2] | 0;
   if ((i19 & 65536 | 0) != 0 | (i19 & 3072 | 0) == 3072) {
    i17 = 11;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 248 >> 2] & 511](i14) | 0) {
    i17 = 11;
    break;
   }
   i18 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i17 = 11;
    break;
   }
   if (((HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i18 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    i17 = 11;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 556 >> 2] & 511](i18 | 0) | 0) {
    i17 = 11;
    break;
   }
   i18 = i13 + 20 | 0;
   i19 = (HEAP32[(HEAP32[i18 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
   if ((HEAP8[i19] & 3) != 3) {
    i17 = 11;
    break;
   }
   i20 = ((HEAP32[i19 >> 2] | 0) >>> 4 & 1 ^ 1) & 255;
   i19 = i20 | HEAP8[i9] & -2;
   HEAP8[i9] = i19;
   if (i20 << 24 >> 24 == 0) {
    i21 = 0;
    i22 = i19;
    break;
   }
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    i21 = 0;
    i22 = i19;
    break;
   }
   i21 = ((HEAP32[(HEAP32[i18 >> 2] | 0) + 292 >> 2] & 201326592 | 0) != 67108864) << 1;
   i22 = i19;
  }
 } while (0);
 if ((i17 | 0) == 11) {
  i17 = HEAP8[i9] & -2;
  HEAP8[i9] = i17;
  i21 = 0;
  i22 = i17;
 }
 i17 = i22 & -3 | i21;
 HEAP8[i9] = i17;
 do {
  if ((i22 & 1) == 0) {
   i23 = 0;
  } else {
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    i23 = 0;
    break;
   }
   i21 = (HEAP32[i13 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    i3 = HEAP32[i13 + 4 >> 2] | 0;
    i24 = i3 + 12 | 0;
    i25 = i3;
   } else {
    i3 = HEAP32[i13 + 4 >> 2] | 0;
    i24 = i3 + 4 | 0;
    i25 = i3;
   }
   if ((HEAP8[i24 + 5 | 0] | 0) != 0) {
    i23 = 0;
    break;
   }
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    i26 = i25 + 12 | 0;
   } else {
    i26 = i25 + 4 | 0;
   }
   if ((HEAP8[i26 + 6 | 0] & 1) == 0) {
    d27 = +(HEAP32[i26 >> 2] | 0);
   } else {
    d27 = +HEAPF32[i26 >> 2];
   }
   if (d27 != +0) {
    i23 = 0;
    break;
   }
   i23 = ((HEAP32[(HEAP32[i13 + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) != 268435456) << 2;
  }
 } while (0);
 HEAP8[i9] = i17 & -5 | i23;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 511](i14) | 0) {
   i28 = 8;
  } else {
   if ((HEAP32[i15 >> 2] & 128 | 0) != 0) {
    i28 = 0;
    break;
   }
   i23 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i28 = 0;
    break;
   }
   if ((HEAP32[i23 + 12 >> 2] & 4 | 0) == 0) {
    i28 = 0;
    break;
   }
   i17 = HEAP32[i23 + 44 >> 2] | 0;
   i23 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i17 | 0) == (i23 | 0)) {
    i28 = 8;
    break;
   }
   if ((HEAP32[i17 + 12 >> 2] | 0) != (HEAP32[i23 + 12 >> 2] | 0)) {
    i28 = 0;
    break;
   }
   i28 = ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i23 + 16 >> 2] | 0)) << 3;
  }
 } while (0);
 i15 = HEAP8[i9] | 0;
 i14 = i15 & -9 | i28;
 HEAP8[i9] = i14;
 do {
  if ((i15 & 2) == 0) {
   i29 = 0;
  } else {
   if ((HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728) {
    i29 = 2;
    break;
   }
   i28 = HEAP32[i2 + 100 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i29 = 0;
    break;
   }
   i29 = HEAP8[i28 + 32 | 0] << 1 & 2;
  }
 } while (0);
 HEAP8[i10] = HEAP8[i10] & -3 | i29;
 do {
  if ((i15 & 2) == 0) {
   i30 = 0;
   i31 = i14;
  } else {
   i29 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[(HEAP32[i29 + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728) {
    i30 = 0;
    i31 = i14;
    break;
   }
   i10 = HEAP32[i2 + 100 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i28 = i7;
    _llvm_lifetime_start(4, 0, i28 | 0);
    __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i6, i2 + 60 | 0, (HEAP32[i29 + 44 >> 2] | 0) >>> 13 & 3);
    HEAP32[i7 >> 2] = 0;
    i29 = HEAP32[((HEAP32[i6 >> 2] | 0) < 0 ? i7 : i6) >> 2] | 0;
    _llvm_lifetime_end(4, 0, i28 | 0);
    i30 = i29;
    i31 = HEAP8[i9] | 0;
    break;
   }
   if ((HEAP8[i10 + 32 | 0] & 1) != 0) {
    i30 = 0;
    i31 = i14;
    break;
   }
   i30 = HEAP32[i10 + 4 >> 2] | 0;
   i31 = i14;
  }
 } while (0);
 HEAP32[i11 >> 2] = i30;
 if ((i31 & 2) == 0) {
  i32 = 0;
  HEAP32[i12 >> 2] = i32;
  STACKTOP = i5;
  return;
 }
 i31 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[(HEAP32[i31 + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728) {
  i32 = 0;
  HEAP32[i12 >> 2] = i32;
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[i2 + 100 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i8, i2 + 60 | 0, (HEAP32[i31 + 44 >> 2] | 0) >>> 13 & 3);
  i31 = HEAP32[i8 >> 2] | 0;
  i32 = (i31 | 0) > 0 ? 0 : -i31 | 0;
  HEAP32[i12 >> 2] = i32;
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i1 + 32 | 0] & 1) != 0) {
  i32 = 0;
  HEAP32[i12 >> 2] = i32;
  STACKTOP = i5;
  return;
 }
 i32 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i12 >> 2] = i32;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow26estimateLogicalTopPositionERNS_9RenderBoxERKNS0_10MarginInfoERNS_10LayoutUnitE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 40 | 0;
 i12 = i6 + 48 | 0;
 i13 = i6 + 56 | 0;
 i14 = i6 + 64 | 0;
 i15 = i6 + 72 | 0;
 i16 = i6 + 80 | 0;
 i17 = i6 + 88 | 0;
 i18 = i6 + 96 | 0;
 i19 = i6 + 104 | 0;
 i20 = i6 + 112 | 0;
 i21 = i6 + 120 | 0;
 i22 = i6 + 128 | 0;
 i23 = i6 + 136 | 0;
 i24 = i6 + 144 | 0;
 i25 = i2 + 36 | 0;
 i26 = (HEAP32[(HEAP32[i25 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i26 | 0) == 3 | (i26 | 0) == 0) {
  i26 = HEAP32[i2 + 56 >> 2] | 0;
  HEAP32[i1 >> 2] = i26;
  i27 = i26;
 } else {
  i26 = HEAP32[i2 + 52 >> 2] | 0;
  HEAP32[i1 >> 2] = i26;
  i27 = i26;
 }
 do {
  if ((HEAP8[i4 | 0] & 18) == 18) {
   i28 = i27;
  } else {
   i26 = i7 | 0;
   HEAP32[i26 >> 2] = 0;
   i29 = i8 | 0;
   HEAP32[i29 >> 2] = 0;
   HEAP8[i9] = 0;
   i30 = i3 + 20 | 0;
   if ((HEAP32[i30 >> 2] & 1 | 0) == 0) {
    __ZNK7WebCore15RenderBlockFlow20marginValuesForChildERNS_9RenderBoxE(i10, i2, i3);
    i31 = HEAP32[i10 >> 2] | 0;
    HEAP32[i11 >> 2] = i31;
    HEAP32[i26 >> 2] = HEAP32[((i31 | 0) > 0 ? i11 : i7) >> 2];
    i31 = HEAP32[i10 + 4 >> 2] | 0;
    HEAP32[i12 >> 2] = i31;
    HEAP32[i29 >> 2] = HEAP32[((i31 | 0) > 0 ? i12 : i8) >> 2];
    i31 = HEAP32[i3 + 8 >> 2] | 0;
    do {
     if ((i31 | 0) == 0) {
      i32 = 12;
     } else {
      i33 = HEAP32[i3 + 36 >> 2] | 0;
      if (((HEAP32[i33 + 44 >> 2] ^ HEAP32[(HEAP32[i31 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
       i32 = 12;
       break;
      }
      i34 = (HEAP32[i3 + 24 >> 2] & 32 | 0) == 0;
      i35 = (HEAP32[(HEAP32[i33 + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728;
      if (i34 | i35) {
       i36 = i35 | i34 ^ 1;
       break;
      }
      i34 = HEAP32[i3 + 100 >> 2] | 0;
      if ((i34 | 0) == 0) {
       i36 = 0;
       break;
      }
      i36 = (HEAP8[i34 + 32 | 0] & 1) != 0;
     }
    } while (0);
    do {
     if ((i32 | 0) == 12) {
      if ((HEAP32[i30 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0) {
       i36 = 0;
       break;
      }
      i31 = (HEAP32[i3 + 24 >> 2] & 32 | 0) == 0;
      i34 = (HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 536870912;
      if (i31 | i34) {
       i36 = i34 | i31 ^ 1;
       break;
      }
      i31 = HEAP32[i3 + 100 >> 2] | 0;
      if ((i31 | 0) == 0) {
       i36 = 0;
       break;
      }
      i36 = (HEAP8[i31 + 32 | 0] & 2) != 0;
     }
    } while (0);
    i30 = i36 & 1;
    HEAP8[i9] = i30;
    i37 = i30;
   } else {
    __ZNK7WebCore15RenderBlockFlow28marginBeforeEstimateForChildERNS_9RenderBoxERNS_10LayoutUnitES4_Rb(i2, i3, i7, i8, i9);
    i37 = HEAP8[i9] | 0;
   }
   if ((i37 & 1) != 0) {
    i28 = i27;
    break;
   }
   i30 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = i30;
   i31 = (i30 | 0) < (HEAP32[i26 >> 2] | 0) ? i7 : i13;
   i30 = HEAP32[i4 + 8 >> 2] | 0;
   HEAP32[i14 >> 2] = i30;
   i34 = (HEAP32[i31 >> 2] | 0) - (HEAP32[((i30 | 0) < (HEAP32[i29 >> 2] | 0) ? i8 : i14) >> 2] | 0) + i27 | 0;
   HEAP32[i1 >> 2] = i34;
   i28 = i34;
  }
 } while (0);
 i27 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 i14 = i27 | 0;
 do {
  if ((HEAP8[i14] & 2) == 0) {
   i38 = i28;
  } else {
   if ((HEAP32[i27 + 60 >> 2] | 0) == 0) {
    i38 = i28;
    break;
   }
   i8 = (HEAP32[(HEAP32[i25 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i8 | 0) == 3 | (i8 | 0) == 0) {
    i39 = i2 + 56 | 0;
   } else {
    i39 = i2 + 52 | 0;
   }
   if ((i28 | 0) <= (HEAP32[i39 >> 2] | 0)) {
    i38 = i28;
    break;
   }
   if ((i8 | 0) == 3 | (i8 | 0) == 0) {
    HEAP32[i15 >> 2] = HEAP32[i2 + 56 >> 2];
   } else {
    HEAP32[i15 >> 2] = HEAP32[i2 + 52 >> 2];
   }
   if (!(__ZNK7WebCore15RenderBlockFlow11hasNextPageENS_10LayoutUnitENS0_16PageBoundaryRuleE(i2, i15, 0) | 0)) {
    i38 = i28;
    break;
   }
   i8 = (HEAP32[(HEAP32[i25 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i8 | 0) == 3 | (i8 | 0) == 0) {
    HEAP32[i17 >> 2] = HEAP32[i2 + 56 >> 2];
   } else {
    HEAP32[i17 >> 2] = HEAP32[i2 + 52 >> 2];
   }
   __ZNK7WebCore15RenderBlockFlow18nextPageLogicalTopENS_10LayoutUnitENS0_16PageBoundaryRuleE(i16, i2, i17, 0);
   i8 = HEAP32[((HEAP32[i16 >> 2] | 0) < (i28 | 0) ? i16 : i1) >> 2] | 0;
   HEAP32[i1 >> 2] = i8;
   i38 = i8;
  }
 } while (0);
 i16 = i1 | 0;
 HEAP32[i19 >> 2] = i38;
 __ZN7WebCore15RenderBlockFlow13getClearDeltaERNS_9RenderBoxENS_10LayoutUnitE(i18, i2, i3, i19);
 i19 = (HEAP32[i18 >> 2] | 0) + i38 | 0;
 HEAP32[i16 >> 2] = i19;
 HEAP32[i5 >> 2] = i19;
 if ((HEAP8[i14] & 2) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i21 >> 2] = i19;
 __ZN7WebCore15RenderBlockFlow16applyBeforeBreakERNS_9RenderBoxENS_10LayoutUnitE(i20, i2, i3, i21);
 HEAP32[i23 >> 2] = HEAP32[i20 >> 2];
 __ZN7WebCore15RenderBlockFlow26adjustForUnsplittableChildERNS_9RenderBoxENS_10LayoutUnitEb(i22, i2, i3, i23, 0);
 i23 = HEAP32[i22 >> 2] | 0;
 HEAP32[i16 >> 2] = i23;
 if ((HEAP32[i3 + 20 >> 2] & 1 | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i3 + 24 >> 2] & 16 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore11RenderBlock15paginationStrutEv(i24, i3);
 HEAP32[i16 >> 2] = (HEAP32[i24 >> 2] | 0) + i23;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore15RenderBlockFlow19layoutBlockChildrenEbRNS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 72 | 0;
 i14 = i1 | 0;
 __ZN7WebCore11RenderBlock45dirtyForLayoutFromPercentageHeightDescendantsEv(i14);
 i15 = i1 | 0;
 i16 = i1;
 i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 752 >> 2] & 511](i15) | 0;
 i18 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 720 >> 2] & 127](i7, i15);
 i19 = (HEAP32[i7 >> 2] | 0) + i17 | 0;
 i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 756 >> 2] & 511](i15) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 724 >> 2] & 127](i6, i15);
 i15 = (HEAP32[i6 >> 2] | 0) + i17 | 0;
 i17 = i1 | 0;
 i6 = i1 + 36 | 0;
 i18 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i18 | 0) == 3 | (i18 | 0) == 0) {
  i20 = __ZNK7WebCore9RenderBox25horizontalScrollbarHeightEv(i17) | 0;
 } else {
  i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 908 >> 2] & 511](i17) | 0;
 }
 i17 = i15 + i20 | 0;
 i20 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i20 | 0) == 3 | (i20 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i19;
 } else {
  HEAP32[i1 + 52 >> 2] = i19;
 }
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 8 >> 2] | 0) == (i1 | 0)) {
  __ZN7WebCore15RenderBlockFlow17layoutLineGridBoxEv(i1);
 }
 HEAP32[i9 >> 2] = i19;
 HEAP32[i10 >> 2] = i17;
 __ZN7WebCore15RenderBlockFlow10MarginInfoC2ERS0_NS_10LayoutUnitES3_(i8, i1, i9, i10);
 i10 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1088 >> 2] & 31](i14, i2) | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i3 >> 2] = 0;
 i9 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i21 = i12 | 0;
  HEAP32[i21 >> 2] = i19;
  i22 = i13 | 0;
  HEAP32[i22 >> 2] = i17;
  __ZN7WebCore15RenderBlockFlow22handleAfterSideOfBlockENS_10LayoutUnitES1_RNS0_10MarginInfoE(i1, i12, i13, i8);
  STACKTOP = i4;
  return;
 }
 i20 = i1 + 20 | 0;
 i15 = i1 + 52 | 0;
 i18 = i5 | 0;
 i16 = i8 | 0;
 i7 = i8 + 4 | 0;
 i23 = i8 + 8 | 0;
 i24 = i1 + 56 | 0;
 i25 = i9;
 while (1) {
  i9 = i25;
  i26 = HEAP32[i25 + 16 >> 2] | 0;
  do {
   if ((i10 | 0) != (i25 | 0)) {
    __ZN7WebCore11RenderBlock37updateBlockChildDirtyBitsBeforeLayoutEbRNS_9RenderBoxE(i14, i2, i9);
    i27 = i25 + 20 | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    if ((i28 & 25165824 | 0) == 16777216) {
     __ZN7WebCore11RenderBlock22insertPositionedObjectERNS_9RenderBoxE(__ZNK7WebCore12RenderObject15containingBlockEv(i25) | 0, i9);
     i29 = HEAP32[(HEAP32[i25 + 36 >> 2] | 0) + 16 >> 2] | 0;
     do {
      if ((HEAP32[i20 >> 2] & 8192 | 0) == 0) {
       if ((HEAP8[i29 + 9 | 0] | 0) != 0) {
        i30 = 0;
        break;
       }
       i30 = (HEAP8[i29 + 17 | 0] | 0) == 0;
      } else {
       if ((HEAP8[i29 + 25 | 0] | 0) != 0) {
        i30 = 0;
        break;
       }
       i30 = (HEAP8[i29 + 33 | 0] | 0) == 0;
      }
     } while (0);
     i29 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i29 | 0) == 3 | (i29 | 0) == 0) {
      i31 = i24;
     } else {
      i31 = i15;
     }
     i29 = HEAP32[i31 >> 2] | 0;
     HEAP32[i18 >> 2] = i29;
     __ZN7WebCore15RenderBlockFlow34updateStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitE(i1, i9, i5);
     if ((HEAP8[i16] & 18) == 18) {
      i32 = i29;
     } else {
      i32 = (HEAP32[i7 >> 2] | 0) + i29 - (HEAP32[i23 >> 2] | 0) | 0;
     }
     i29 = (HEAP32[i25 + 40 >> 2] | 0) + 168 | 0;
     if ((HEAP32[i29 >> 2] | 0) == (i32 | 0)) {
      break;
     }
     HEAP32[i29 >> 2] = i32;
     if (!i30) {
      break;
     }
     i29 = HEAP32[i27 >> 2] | 0;
     if ((i29 & 4 | 0) != 0) {
      break;
     }
     HEAP32[i27 >> 2] = i29 | 4;
     break;
    }
    if ((i28 & 64 | 0) == 0) {
     __ZN7WebCore15RenderBlockFlow16layoutBlockChildERNS_9RenderBoxERNS0_10MarginInfoERNS_10LayoutUnitES6_(i1, i9, i8, i11, i3);
     break;
    }
    __ZN7WebCore15RenderBlockFlow20insertFloatingObjectERNS_9RenderBoxE(i1, i9) | 0;
    if ((HEAP8[i16] & 18) == 18) {
     i33 = 0;
    } else {
     i33 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i23 >> 2] | 0) | 0;
    }
    i29 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i29 | 0) == 3 | (i29 | 0) == 0) {
     i34 = i24;
    } else {
     i34 = i15;
    }
    i35 = (HEAP32[i34 >> 2] | 0) + i33 | 0;
    if ((i29 | 0) == 3 | (i29 | 0) == 0) {
     HEAP32[i24 >> 2] = i35;
    } else {
     HEAP32[i15 >> 2] = i35;
    }
    __ZN7WebCore15RenderBlockFlow17positionNewFloatsEv(i1) | 0;
    i35 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i35 | 0) == 3 | (i35 | 0) == 0) {
     i36 = i24;
    } else {
     i36 = i15;
    }
    i29 = (HEAP32[i36 >> 2] | 0) - i33 | 0;
    if ((i35 | 0) == 3 | (i35 | 0) == 0) {
     HEAP32[i24 >> 2] = i29;
     break;
    } else {
     HEAP32[i15 >> 2] = i29;
     break;
    }
   }
  } while (0);
  if ((i26 | 0) == 0) {
   break;
  } else {
   i25 = i26;
  }
 }
 i21 = i12 | 0;
 HEAP32[i21 >> 2] = i19;
 i22 = i13 | 0;
 HEAP32[i22 >> 2] = i17;
 __ZN7WebCore15RenderBlockFlow22handleAfterSideOfBlockENS_10LayoutUnitES1_RNS0_10MarginInfoE(i1, i12, i13, i8);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 & 1048576 | 0) == 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1024 >> 2] & 511](i1) | 0) {
    i6 = HEAP32[i4 >> 2] | 0;
    break;
   } else {
    return;
   }
  } else {
   i6 = i5;
  }
 } while (0);
 i5 = i1 | 0;
 do {
  if ((i6 & 4 | 0) == 0) {
   HEAP32[i4 >> 2] = i6 | 4;
   if (i3) {
    break;
   }
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i5, 1, 0);
  }
 } while (0);
 i5 = (i2 | 0) != 0;
 if (i5) {
  __ZN7WebCore15RenderBlockFlow20removeFloatingObjectERNS_9RenderBoxE(i1, i2);
 }
 if ((HEAP32[i4 >> 2] & 2097152 | 0) != 0) {
  return;
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i7 = i4;
 }
 while (1) {
  if ((HEAP32[i7 + 20 >> 2] & 768 | 0) != 256) {
   if ((HEAP32[i7 + 24 >> 2] & 16 | 0) != 0) {
    break;
   }
  }
  i4 = HEAP32[i7 + 16 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i8 = 51;
   break;
  } else {
   i7 = i4;
  }
 }
 if ((i8 | 0) == 51) {
  return;
 }
 if ((i7 | 0) == 0) {
  return;
 }
 i4 = i2;
 i1 = i4 + ~(i4 << 15) | 0;
 i4 = (i1 >>> 10 ^ i1) * 9 & -1;
 i1 = i4 >>> 6 ^ i4;
 i4 = i1 + ~(i1 << 11) | 0;
 i1 = i4 >>> 16 ^ i4;
 i4 = (i1 >>> 23) + ~i1 | 0;
 i6 = i4 << 12 ^ i4;
 i4 = i6 >>> 7 ^ i6;
 i6 = i4 << 2 ^ i4;
 i4 = i6 >>> 20 ^ i6 | 1;
 if (i5) {
  i9 = i7;
 } else {
  i5 = i7;
  L31 : while (1) {
   i7 = HEAP32[i5 + 20 >> 2] | 0;
   do {
    if (!((i7 & 64 | 0) != 0 | (i7 & 25165824 | 0) == 16777216)) {
     if ((HEAP32[i5 + 24 >> 2] & 32 | 0) != 0) {
      i6 = i5;
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 1024 >> 2] & 511](i6) | 0)) {
       if (!(__ZNK7WebCore9RenderBox19shrinkToAvoidFloatsEv(i5) | 0)) {
        break;
       }
      }
      __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i6, 0, i3);
      break;
     }
     if (!(__ZNK7WebCore9RenderBox19shrinkToAvoidFloatsEv(i5) | 0)) {
      break;
     }
     i6 = i5 + 20 | 0;
     i10 = HEAP32[i6 >> 2] | 0;
     if ((i10 & 1048580 | 0) != 1048576) {
      break;
     }
     HEAP32[i6 >> 2] = i10 | 4;
     if (i3) {
      break;
     }
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i5, 1, 0);
    }
   } while (0);
   i7 = HEAP32[i5 + 16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 57;
    break;
   } else {
    i11 = i7;
   }
   while (1) {
    if ((HEAP32[i11 + 20 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[i11 + 24 >> 2] & 16 | 0) != 0) {
      break;
     }
    }
    i7 = HEAP32[i11 + 16 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i8 = 59;
     break L31;
    } else {
     i11 = i7;
    }
   }
   if ((i11 | 0) == 0) {
    i8 = 58;
    break;
   } else {
    i5 = i11;
   }
  }
  if ((i8 | 0) == 57) {
   return;
  } else if ((i8 | 0) == 58) {
   return;
  } else if ((i8 | 0) == 59) {
   return;
  }
 }
 L55 : while (1) {
  do {
   if ((HEAP32[i9 + 24 >> 2] & 32 | 0) == 0) {
    if (!(__ZNK7WebCore9RenderBox19shrinkToAvoidFloatsEv(i9) | 0)) {
     break;
    }
    i11 = i9 + 20 | 0;
    i5 = HEAP32[i11 >> 2] | 0;
    if ((i5 & 1048580 | 0) != 1048576) {
     break;
    }
    HEAP32[i11 >> 2] = i5 | 4;
    if (i3) {
     break;
    }
    __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i9, 1, 0);
   } else {
    i5 = i9;
    i11 = HEAP32[i9 + 96 >> 2] | 0;
    L59 : do {
     if ((i11 | 0) == 0) {
      i8 = 24;
     } else {
      i7 = HEAP32[i11 >> 2] | 0;
      if ((i7 | 0) == 0) {
       i8 = 24;
       break;
      }
      i10 = HEAP32[i11 + 8 >> 2] | 0;
      i6 = i1;
      i12 = 0;
      while (1) {
       i13 = i6 & i10;
       i14 = i7 + (i13 << 2) | 0;
       i15 = HEAP32[i14 >> 2] | 0;
       i16 = i15;
       if ((i16 | 0) == 0) {
        i8 = 24;
        break L59;
       } else if ((i16 | 0) != (-1 | 0)) {
        if ((HEAP32[HEAP32[i15 >> 2] >> 2] | 0) == (i2 | 0)) {
         break;
        }
       }
       i15 = (i12 | 0) == 0 ? i4 : i12;
       i6 = i15 + i13 | 0;
       i12 = i15;
      }
      if ((i14 | 0) == 0) {
       i8 = 24;
      }
     }
    } while (0);
    if ((i8 | 0) == 24) {
     i8 = 0;
     if (!(__ZNK7WebCore9RenderBox19shrinkToAvoidFloatsEv(i9) | 0)) {
      break;
     }
    }
    __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i5, i2, i3);
   }
  } while (0);
  i11 = HEAP32[i9 + 16 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i8 = 54;
   break;
  } else {
   i17 = i11;
  }
  while (1) {
   if ((HEAP32[i17 + 20 >> 2] & 768 | 0) != 256) {
    if ((HEAP32[i17 + 24 >> 2] & 16 | 0) != 0) {
     break;
    }
   }
   i11 = HEAP32[i17 + 16 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i8 = 55;
    break L55;
   } else {
    i17 = i11;
   }
  }
  if ((i17 | 0) == 0) {
   i8 = 56;
   break;
  } else {
   i9 = i17;
  }
 }
 if ((i8 | 0) == 54) {
  return;
 } else if ((i8 | 0) == 55) {
  return;
 } else if ((i8 | 0) == 56) {
  return;
 }
}
function __ZNK7WebCore15RenderBlockFlow18adjustForBorderFitENS_10LayoutUnitERS1_S2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i1 + 36 | 0;
 if ((HEAP32[(HEAP32[i15 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i16 = i1 + 20 | 0;
 do {
  if ((HEAP32[i16 >> 2] & 2097152 | 0) == 0) {
   i17 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i18 = HEAP32[i2 >> 2] | 0;
   i19 = i3 | 0;
   i20 = i11;
   i21 = i4 | 0;
   i22 = i12;
   i23 = i10 | 0;
   i24 = i17;
   while (1) {
    i17 = HEAP32[i24 + 20 >> 2] | 0;
    L27 : do {
     if (!((i17 & 64 | 0) != 0 | (i17 & 25165824 | 0) == 16777216)) {
      do {
       if ((HEAP32[i24 + 24 >> 2] & 32 | 0) != 0) {
        if ((i17 & 65536 | 0) != 0) {
         break;
        }
        HEAP32[i23 >> 2] = i18 + (HEAP32[i24 + 44 >> 2] | 0);
        __ZNK7WebCore15RenderBlockFlow18adjustForBorderFitENS_10LayoutUnitERS1_S2_(i24, i10, i3, i4);
        break L27;
       }
      } while (0);
      if ((HEAP32[(HEAP32[i24 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
       break;
      }
      i25 = i24 + 44 | 0;
      i26 = i18 + (HEAP32[i25 >> 2] | 0) | 0;
      HEAP32[i11 >> 2] = i26;
      HEAP32[i19 >> 2] = HEAP32[((i26 | 0) < (HEAP32[i19 >> 2] | 0) ? i20 : i3) >> 2];
      i26 = i18 + (HEAP32[i25 >> 2] | 0) + (HEAP32[i24 + 52 >> 2] | 0) | 0;
      HEAP32[i12 >> 2] = i26;
      HEAP32[i21 >> 2] = HEAP32[((HEAP32[i21 >> 2] | 0) < (i26 | 0) ? i22 : i4) >> 2];
     }
    } while (0);
    i24 = HEAP32[i24 + 16 >> 2] | 0;
    if ((i24 | 0) == 0) {
     break;
    }
   }
  } else {
   __ZN7WebCore15RenderBlockFlow15ensureLineBoxesEv(i1);
   i24 = HEAP32[i1 + 104 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i22 = HEAP32[i2 >> 2] | 0;
   i21 = i4 | 0;
   i18 = i9;
   i20 = i3 | 0;
   i19 = i8;
   i23 = i24;
   while (1) {
    i24 = HEAP32[i23 + 40 >> 2] | 0;
    if ((i24 | 0) != 0) {
     d27 = +HEAPF32[i24 + 20 >> 2];
     do {
      if (d27 < +2147483647) {
       if (d27 <= +-2147483648) {
        i28 = -2147483648;
        break;
       }
       i28 = ~~d27;
      } else {
       i28 = 2147483647;
      }
     } while (0);
     i24 = i22 + i28 | 0;
     HEAP32[i8 >> 2] = i24;
     HEAP32[i20 >> 2] = HEAP32[((i24 | 0) < (HEAP32[i20 >> 2] | 0) ? i19 : i3) >> 2];
    }
    i24 = HEAP32[i23 + 44 >> 2] | 0;
    if ((i24 | 0) != 0) {
     d27 = +Math_ceil(+HEAPF32[((HEAP32[i24 + 32 >> 2] & 2048 | 0) == 0 ? i24 + 24 | 0 : i24 + 20 | 0) >> 2] + +HEAPF32[i24 + 28 >> 2]);
     do {
      if (d27 < +2147483647) {
       if (d27 <= +-2147483648) {
        i29 = -2147483648;
        break;
       }
       i29 = ~~d27;
      } else {
       i29 = 2147483647;
      }
     } while (0);
     i24 = i22 + i29 | 0;
     HEAP32[i9 >> 2] = i24;
     HEAP32[i21 >> 2] = HEAP32[((HEAP32[i21 >> 2] | 0) < (i24 | 0) ? i18 : i4) >> 2];
    }
    i23 = HEAP32[i23 + 52 >> 2] | 0;
    if ((i23 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i9 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[i9 + 20 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i7 | 0;
 i29 = i3 | 0;
 i8 = i13;
 i28 = i4 | 0;
 i2 = i14;
 i12 = i6 | 0;
 i11 = i1;
 while (1) {
  i1 = HEAP32[i11 >> 2] | 0;
  if ((HEAP32[i1 + 28 >> 2] & 4 | 0) != 0) {
   i10 = HEAP32[i1 + 8 >> 2] | 0;
   i23 = i1 | 0;
   i1 = HEAP32[i23 >> 2] | 0;
   if ((HEAP32[i16 >> 2] & 8192 | 0) == 0) {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 784 >> 2] & 127](i7, i1 | 0, HEAP32[i15 >> 2] | 0);
    i30 = HEAP32[i9 >> 2] | 0;
   } else {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 776 >> 2] & 127](i6, i1);
    i30 = HEAP32[i12 >> 2] | 0;
   }
   i1 = HEAP32[i23 >> 2] | 0;
   i23 = i30 + i10 - (HEAP32[i1 + 44 >> 2] | 0) | 0;
   HEAP32[i13 >> 2] = i23;
   i10 = (HEAP32[i1 + 52 >> 2] | 0) + i23 | 0;
   HEAP32[i14 >> 2] = i10;
   HEAP32[i29 >> 2] = HEAP32[((i23 | 0) < (HEAP32[i29 >> 2] | 0) ? i8 : i3) >> 2];
   HEAP32[i28 >> 2] = HEAP32[((HEAP32[i28 >> 2] | 0) < (i10 | 0) ? i2 : i4) >> 2];
  }
  i11 = HEAP32[i11 + 8 >> 2] | 0;
  if ((i11 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 i12 = i6 + 48 | 0;
 i13 = i6 + 56 | 0;
 i14 = i6 + 64 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = i1 + 96 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i19 = 0;
  STACKTOP = i6;
  return i19 | 0;
 }
 i20 = i5;
 i5 = HEAP32[i20 >> 2] | 0;
 i21 = HEAP32[i20 + 4 >> 2] | 0;
 i20 = i1 + 20 | 0;
 if ((HEAP32[i20 >> 2] & 768 | 0) == 768) {
  i22 = HEAP32[i1 + 116 >> 2] | 0;
  i23 = i9 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i22 >> 2] | 0) + 164 >> 2] & 127](i9, i22 | 0, 0);
  i24 = (HEAP32[i23 >> 2] | 0) + i5 | 0;
  i25 = (HEAP32[i23 + 4 >> 2] | 0) + i21 | 0;
  i26 = HEAP32[i17 >> 2] | 0;
 } else {
  i24 = i5;
  i25 = i21;
  i26 = i18;
 }
 i18 = HEAP32[i26 + 20 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i19 = 0;
  STACKTOP = i6;
  return i19 | 0;
 }
 i21 = i26 + 24 | 0;
 i26 = i1 + 36 | 0;
 i5 = i8 | 0;
 i17 = i11 | 0;
 i23 = i1 + 52 | 0;
 i22 = i13 | 0;
 i9 = i14;
 i27 = i15 + 4 | 0;
 i28 = i1 + 56 | 0;
 i29 = i12 | 0;
 i30 = i10 | 0;
 i31 = i7 | 0;
 i32 = 0;
 L10 : while (1) {
  i33 = HEAP32[((i32 | 0) == 0 ? i21 : i32 + 4 | 0) >> 2] | 0;
  i34 = HEAP32[i33 >> 2] | 0;
  do {
   if ((HEAP32[i34 + 28 >> 2] & 4 | 0) != 0) {
    i35 = i34 | 0;
    if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(HEAP32[i35 >> 2] | 0) | 0) {
     break;
    }
    i36 = i34 + 8 | 0;
    i37 = HEAP32[i36 >> 2] | 0;
    i38 = HEAP32[i35 >> 2] | 0;
    if ((HEAP32[i20 >> 2] & 8192 | 0) == 0) {
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i38 >> 2] | 0) + 784 >> 2] & 127](i8, i38 | 0, HEAP32[i26 >> 2] | 0);
     i39 = HEAP32[i5 >> 2] | 0;
    } else {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i38 >> 2] | 0) + 776 >> 2] & 127](i7, i38);
     i39 = HEAP32[i31 >> 2] | 0;
    }
    i38 = HEAP32[i35 >> 2] | 0;
    i40 = HEAP32[i38 + 44 >> 2] | 0;
    i41 = i34 + 12 | 0;
    i42 = HEAP32[i41 >> 2] | 0;
    if ((HEAP32[i20 >> 2] & 8192 | 0) == 0) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i38 >> 2] | 0) + 768 >> 2] & 127](i11, i38);
     i43 = HEAP32[i17 >> 2] | 0;
    } else {
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i38 >> 2] | 0) + 784 >> 2] & 127](i10, i38 | 0, HEAP32[i26 >> 2] | 0);
     i43 = HEAP32[i30 >> 2] | 0;
    }
    i38 = HEAP32[i35 >> 2] | 0;
    i44 = i37 + i24 + i39 - i40 | 0;
    i40 = i42 + i25 + i43 - (HEAP32[i38 + 48 >> 2] | 0) | 0;
    i42 = HEAP32[i26 >> 2] | 0;
    i37 = (HEAP32[i42 + 44 >> 2] | 0) >>> 13 & 3;
    do {
     if ((i37 | 0) == 3 | (i37 | 0) == 1) {
      if ((HEAP32[i20 >> 2] & 8192 | 0) == 0) {
       i45 = (HEAP32[i23 >> 2] | 0) + i44 - (HEAP32[i38 + 52 >> 2] | 0) | 0;
       i46 = HEAP32[i36 >> 2] | 0;
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i38 >> 2] | 0) + 784 >> 2] & 127](i13, i38 | 0, i42);
       HEAP32[i9 >> 2] = i45 - ((HEAP32[i22 >> 2] | 0) + i46 << 1);
       HEAP32[i27 >> 2] = i40;
       break;
      } else {
       i46 = (HEAP32[i28 >> 2] | 0) + i40 - (HEAP32[i38 + 56 >> 2] | 0) | 0;
       i45 = HEAP32[i41 >> 2] | 0;
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i38 >> 2] | 0) + 784 >> 2] & 127](i12, i38 | 0, i42);
       i47 = i46 - ((HEAP32[i29 >> 2] | 0) + i45 << 1) | 0;
       HEAP32[i9 >> 2] = i44;
       HEAP32[i27 >> 2] = i47;
       break;
      }
     } else {
      HEAP32[i14 >> 2] = i44;
      HEAP32[i14 + 4 >> 2] = i40;
     }
    } while (0);
    if (__ZN7WebCore12RenderObject7hitTestERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestFilterE(HEAP32[i35 >> 2] | 0, i2, i3, i4, i15, 0) | 0) {
     break L10;
    }
   }
  } while (0);
  if ((i33 | 0) == (i18 | 0)) {
   i19 = 0;
   i48 = 23;
   break;
  } else {
   i32 = i33;
  }
 }
 if ((i48 | 0) == 23) {
  STACKTOP = i6;
  return i19 | 0;
 }
 i48 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 i32 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i27 >> 2] | 0) | 0;
 HEAP32[i16 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i9 >> 2] | 0);
 HEAP32[i16 + 4 >> 2] = i32;
 FUNCTION_TABLE_viii[i48 & 127](i1 | 0, i3, i16);
 i19 = 1;
 STACKTOP = i6;
 return i19 | 0;
}
function __ZNK7WebCore15RenderBlockFlow28marginBeforeEstimateForChildERNS_9RenderBoxERNS_10LayoutUnitES4_Rb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 48 | 0;
 i13 = i6 + 56 | 0;
 i14 = i1 | 0;
 i15 = i1 + 4 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0) {
   if (!(__ZNK7WebCore11RenderBlock19hasMarginAfterQuirkERKNS_9RenderBoxE(i1 | 0, i2) | 0)) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 188 >> 2] & 511](i14) | 0) {
    STACKTOP = i6;
    return;
   }
   if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
    break;
   }
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i17 = HEAP32[i16 + 44 >> 2] | 0;
   i16 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i17 | 0) == (i16 | 0)) {
    STACKTOP = i6;
    return;
   }
   if ((HEAP32[i17 + 12 >> 2] | 0) != (HEAP32[i16 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i17 + 16 >> 2] | 0) != (HEAP32[i16 + 16 >> 2] | 0)) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 i15 = i2 + 36 | 0;
 i14 = (HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] | 0) >>> 26 & 3;
 if ((i14 | 0) == 1) {
  STACKTOP = i6;
  return;
 } else if ((i14 | 0) == 2) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i4 >> 2] = 0;
  HEAP8[i5] = 1;
  STACKTOP = i6;
  return;
 } else {
  i14 = i1 | 0;
  i16 = i2 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 784 >> 2] & 127](i9, i16, HEAP32[i1 + 36 >> 2] | 0);
  i1 = i3 | 0;
  i17 = HEAP32[i9 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[((HEAP32[i1 >> 2] | 0) < (i17 | 0) ? i9 : i3) >> 2];
  i9 = -i17 | 0;
  HEAP32[i10 >> 2] = i9;
  i17 = i4 | 0;
  HEAP32[i17 >> 2] = HEAP32[((HEAP32[i17 >> 2] | 0) < (i9 | 0) ? i10 : i4) >> 2];
  if ((HEAP32[i2 + 24 >> 2] & 32 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i10 = i2;
  if ((HEAP32[i2 + 20 >> 2] & 2097152 | 0) != 0) {
   STACKTOP = i6;
   return;
  }
  i9 = HEAP32[i2 + 8 >> 2] | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  if (((HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
   STACKTOP = i6;
   return;
  }
  i9 = i2;
  i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 752 >> 2] & 511](i16) | 0;
  i17 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 720 >> 2] & 127](i7, i16);
  HEAP32[i12 >> 2] = (HEAP32[i7 >> 2] | 0) + i15;
  i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 756 >> 2] & 511](i16) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 724 >> 2] & 127](i8, i16);
  HEAP32[i13 >> 2] = (HEAP32[i8 >> 2] | 0) + i15;
  __ZN7WebCore15RenderBlockFlow10MarginInfoC2ERS0_NS_10LayoutUnitES3_(i11, i10, i12, i13);
  if ((HEAP8[i11 | 0] & 2) == 0) {
   STACKTOP = i6;
   return;
  }
  i11 = i2 + 28 | 0;
  while (1) {
   i18 = HEAP32[i11 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i19 = 30;
    break;
   }
   i20 = i18;
   i21 = HEAP32[i18 + 20 >> 2] | 0;
   if ((i21 & 64 | 0) != 0 | (i21 & 25165824 | 0) == 16777216) {
    i11 = i18 + 16 | 0;
   } else {
    break;
   }
  }
  if ((i19 | 0) == 30) {
   STACKTOP = i6;
   return;
  }
  i19 = i18 + 36 | 0;
  if ((HEAP32[(HEAP32[i19 >> 2] | 0) + 48 >> 2] & 3145728 | 0) != 0) {
   STACKTOP = i6;
   return;
  }
  do {
   if ((i21 & 31 | 0) != 0) {
    __ZN7WebCore9RenderBox34computeAndSetBlockDirectionMarginsEPKNS_11RenderBlockE(i20, i14);
    if ((HEAP32[i18 + 24 >> 2] & 16 | 0) == 0) {
     break;
    }
    i11 = HEAP32[i19 >> 2] | 0;
    i2 = i18 + 92 | 0;
    i13 = (HEAP8[(__ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i11 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i11 + 44 >> 2] | 0) >>> 13 & 3) | 0) + 4 | 0] & 1) << 25;
    HEAP32[i2 >> 2] = i13 | HEAP32[i2 >> 2] & -33554433;
    i13 = HEAP32[i19 >> 2] | 0;
    i11 = (HEAP8[(__ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i13 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i13 + 44 >> 2] | 0) >>> 13 & 3) | 0) + 4 | 0] & 1) << 26;
    HEAP32[i2 >> 2] = i11 | HEAP32[i2 >> 2] & -67108865;
   }
  } while (0);
  __ZNK7WebCore15RenderBlockFlow28marginBeforeEstimateForChildERNS_9RenderBoxERNS_10LayoutUnitES4_Rb(i10, i20, i3, i4, i5);
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow15applyAfterBreakERNS_9RenderBoxENS_10LayoutUnitERNS0_10MarginInfoE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i2 | 0;
 i14 = i2 + 4 | 0;
 i15 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 i16 = HEAP32[i15 + 4 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i17 = 3;
 } else {
  if ((HEAP32[i16 + 40 >> 2] | 0) == 0) {
   i18 = 0;
   i19 = 1;
  } else {
   i17 = 3;
  }
 }
 if ((i17 | 0) == 3) {
  i18 = (HEAP32[i15 + 60 >> 2] | 0) != 0;
  i19 = 0;
 }
 do {
  if ((HEAP32[i2 + 20 >> 2] & 805306368 | 0) == 0) {
   i20 = 0;
   i21 = 0;
  } else {
   i15 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i13) | 0;
   if ((i15 | 0) == 0) {
    i20 = 0;
    i21 = 0;
    break;
   }
   i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 252 >> 2] & 511](i15 | 0) | 0;
   i21 = i15;
  }
 } while (0);
 if (i19) {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 384 | 0) == 128) {
   i17 = 15;
  } else {
   i17 = 9;
  }
 } else {
  i17 = 9;
 }
 L12 : do {
  if ((i17 | 0) == 9) {
   do {
    if (i18) {
     i13 = HEAP32[i3 + 36 >> 2] | 0;
     i15 = (HEAP32[i13 + 52 >> 2] & 12 | 0) == 4;
     if (!(i15 | i20 ^ 1)) {
      i22 = i13;
      break;
     }
     if (i15) {
      i17 = 15;
      break L12;
     } else {
      break L12;
     }
    } else {
     if (!i20) {
      break L12;
     }
     i22 = HEAP32[i3 + 36 >> 2] | 0;
    }
   } while (0);
   if ((HEAP32[(HEAP32[i22 + 20 >> 2] | 0) + 292 >> 2] & 6 | 0) == 2) {
    i17 = 15;
   }
  }
 } while (0);
 L20 : do {
  if ((i17 | 0) == 15) {
   i22 = __ZNK7WebCore12RenderObject15containingBlockEv(i3 | 0) | 0;
   i18 = i3 + 4 | 0;
   L22 : do {
    if ((i22 | 0) != 0) {
     i15 = i22;
     while (1) {
      if ((i15 | 0) == (HEAP32[(HEAP32[(HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0)) {
       break L22;
      }
      i13 = i15 | 0;
      i16 = i15 + 20 | 0;
      if ((HEAP32[i16 >> 2] & 4194304 | 0) != 0) {
       break L22;
      }
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 248 >> 2] & 511](i13) | 0) {
       break L22;
      }
      i23 = HEAP32[i16 >> 2] | 0;
      if ((i23 & 64 | 0) != 0 | (i23 & 25165824 | 0) == 16777216) {
       break L20;
      }
      i15 = __ZNK7WebCore12RenderObject15containingBlockEv(i13) | 0;
      if ((i15 | 0) == 0) {
       break;
      }
     }
    }
   } while (0);
   i18 = HEAP32[i4 >> 2] | 0;
   HEAP32[i7 >> 2] = i18;
   if (!(__ZNK7WebCore15RenderBlockFlow11hasNextPageENS_10LayoutUnitENS0_16PageBoundaryRuleE(i2, i7, 1) | 0)) {
    break;
   }
   i22 = i5 + 4 | 0;
   if ((HEAP8[i5 | 0] & 18) == 18) {
    i24 = 0;
    i25 = i5 + 8 | 0;
   } else {
    i15 = i5 + 8 | 0;
    i24 = (HEAP32[i22 >> 2] | 0) - (HEAP32[i15 >> 2] | 0) | 0;
    i25 = i15;
   }
   HEAP32[i22 >> 2] = 0;
   HEAP32[i25 >> 2] = 0;
   if (i19) {
    i22 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
    HEAP32[i8 >> 2] = i18;
    __ZN7WebCore11LayoutState20addForcedColumnBreakEPNS_9RenderBoxENS_10LayoutUnitE(i22, i3, i8);
   }
   do {
    if (i20) {
     i22 = i9 | 0;
     HEAP32[i22 >> 2] = 0;
     i15 = i2 | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i11, i15);
     HEAP32[i10 >> 2] = (HEAP32[i11 >> 2] | 0) + i24 + i18;
     if (!(__ZN7WebCore16RenderFlowThread20addForcedRegionBreakEPKNS_11RenderBlockENS_10LayoutUnitEPNS_9RenderBoxEbPS4_(i21, i15, i10, i3, 0, i9) | 0)) {
      break;
     }
     HEAP32[i1 >> 2] = i18 + i24 + (HEAP32[i22 >> 2] | 0);
     STACKTOP = i6;
     return;
    }
   } while (0);
   HEAP32[i12 >> 2] = i18;
   __ZNK7WebCore15RenderBlockFlow18nextPageLogicalTopENS_10LayoutUnitENS0_16PageBoundaryRuleE(i1, i2, i12, 1);
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i6;
 return;
}
function __ZN7WebCore15RenderBlockFlow11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 96 | 0;
 i14 = i13;
 i15 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i16 = HEAP32[i15 + 20 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i15 = i12;
 i17 = i2;
 i18 = i2 + 20 | 0;
 i2 = i12 + 20 | 0;
 i19 = i3 | 0;
 i20 = i1 + 20 | 0;
 i21 = i1 + 36 | 0;
 i22 = i7 | 0;
 i23 = i3 + 4 | 0;
 i3 = i9 | 0;
 i24 = i1 + 52 | 0;
 i25 = i11 | 0;
 i26 = i13;
 i27 = i14 + 4 | 0;
 i28 = i1 + 56 | 0;
 i1 = i10 | 0;
 i29 = i8 | 0;
 i30 = i6 | 0;
 i31 = i16;
 while (1) {
  i16 = HEAP32[i31 >> 2] | 0;
  do {
   if ((HEAP32[i16 + 28 >> 2] & 4 | 0) != 0) {
    i32 = i16 | 0;
    if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(HEAP32[i32 >> 2] | 0) | 0) {
     break;
    }
    _memcpy(i15 | 0, i17 | 0, 48) | 0;
    if (i4) {
     i33 = HEAP32[i18 >> 2] | 0;
    } else {
     i33 = 0;
    }
    HEAP32[i2 >> 2] = i33;
    i34 = HEAP32[i19 >> 2] | 0;
    i35 = i16 + 8 | 0;
    i36 = HEAP32[i35 >> 2] | 0;
    i37 = HEAP32[i32 >> 2] | 0;
    if ((HEAP32[i20 >> 2] & 8192 | 0) == 0) {
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i37 >> 2] | 0) + 784 >> 2] & 127](i7, i37 | 0, HEAP32[i21 >> 2] | 0);
     i38 = HEAP32[i22 >> 2] | 0;
    } else {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i37 >> 2] | 0) + 776 >> 2] & 127](i6, i37);
     i38 = HEAP32[i30 >> 2] | 0;
    }
    i37 = HEAP32[i32 >> 2] | 0;
    i39 = i36 + i34 + i38 - (HEAP32[i37 + 44 >> 2] | 0) | 0;
    i34 = HEAP32[i23 >> 2] | 0;
    i36 = i16 + 12 | 0;
    i40 = HEAP32[i36 >> 2] | 0;
    if ((HEAP32[i20 >> 2] & 8192 | 0) == 0) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i37 >> 2] | 0) + 768 >> 2] & 127](i9, i37);
     i41 = HEAP32[i3 >> 2] | 0;
    } else {
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i37 >> 2] | 0) + 784 >> 2] & 127](i8, i37 | 0, HEAP32[i21 >> 2] | 0);
     i41 = HEAP32[i29 >> 2] | 0;
    }
    i37 = HEAP32[i32 >> 2] | 0;
    i42 = i40 + i34 + i41 - (HEAP32[i37 + 48 >> 2] | 0) | 0;
    i34 = HEAP32[i21 >> 2] | 0;
    i40 = (HEAP32[i34 + 44 >> 2] | 0) >>> 13 & 3;
    do {
     if ((i40 | 0) == 3 | (i40 | 0) == 1) {
      if ((HEAP32[i20 >> 2] & 8192 | 0) == 0) {
       i43 = (HEAP32[i24 >> 2] | 0) + i39 - (HEAP32[i37 + 52 >> 2] | 0) | 0;
       i44 = HEAP32[i35 >> 2] | 0;
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i37 >> 2] | 0) + 784 >> 2] & 127](i11, i37 | 0, i34);
       HEAP32[i26 >> 2] = i43 - ((HEAP32[i25 >> 2] | 0) + i44 << 1);
       HEAP32[i27 >> 2] = i42;
       break;
      } else {
       i44 = (HEAP32[i28 >> 2] | 0) + i42 - (HEAP32[i37 + 56 >> 2] | 0) | 0;
       i43 = HEAP32[i36 >> 2] | 0;
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i37 >> 2] | 0) + 784 >> 2] & 127](i10, i37 | 0, i34);
       i45 = i44 - ((HEAP32[i1 >> 2] | 0) + i43 << 1) | 0;
       HEAP32[i26 >> 2] = i39;
       HEAP32[i27 >> 2] = i45;
       break;
      }
     } else {
      HEAP32[i13 >> 2] = i39;
      HEAP32[i13 + 4 >> 2] = i42;
     }
    } while (0);
    i42 = HEAP32[i32 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i42 >> 2] | 0) + 648 >> 2] & 127](i42 | 0, i12, i14);
    if (i4) {
     break;
    }
    HEAP32[i2 >> 2] = 2;
    i42 = HEAP32[i32 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i42 >> 2] | 0) + 648 >> 2] & 127](i42 | 0, i12, i14);
    HEAP32[i2 >> 2] = 3;
    i42 = HEAP32[i32 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i42 >> 2] | 0) + 648 >> 2] & 127](i42 | 0, i12, i14);
    HEAP32[i2 >> 2] = 4;
    i42 = HEAP32[i32 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i42 >> 2] | 0) + 648 >> 2] & 127](i42 | 0, i12, i14);
    HEAP32[i2 >> 2] = 5;
    i42 = HEAP32[i32 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i42 >> 2] | 0) + 648 >> 2] & 127](i42 | 0, i12, i14);
   }
  } while (0);
  i31 = HEAP32[i31 + 8 >> 2] | 0;
  if ((i31 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore15RenderBlockFlow19inlineBlockBaselineENS_17LineDirectionModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 3;
 } else {
  if (((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
   i10 = 3;
  }
 }
 do {
  if ((i10 | 0) == 3) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 511](i1 | 0) | 0) {
    break;
   } else {
    i11 = -1;
   }
   STACKTOP = i3;
   return i11 | 0;
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] & 2097152 | 0) == 0) {
  i11 = __ZNK7WebCore11RenderBlock19inlineBlockBaselineENS_17LineDirectionModeE(i1 | 0, i2) | 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i10 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   if ((HEAP32[i1 + 104 >> 2] | 0) == 0) {
    break;
   }
   i9 = i1 + 108 | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   i13 = i1 | 0;
   do {
    if ((i12 | 0) == (HEAP32[i1 + 104 >> 2] | 0)) {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i14 = HEAP32[i1 + 36 >> 2] | 0;
      i15 = i12;
      break;
     } else {
      i16 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i13) | 0;
      i14 = i16;
      i15 = HEAP32[i9 >> 2] | 0;
      break;
     }
    } else {
     i14 = HEAP32[i1 + 36 >> 2] | 0;
     i15 = i12;
    }
   } while (0);
   d17 = +HEAPF32[((HEAP32[i15 + 32 >> 2] & 2048 | 0) == 0 ? i15 + 20 | 0 : i15 + 24 | 0) >> 2];
   i12 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i14) | 0;
   i13 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 56 >> 2] & 32 | 0) == 0;
   i16 = i12 + 4 | 0;
   i18 = _round(+(+HEAPF32[i16 >> 2])) | 0;
   if (i13) {
    i19 = i18;
   } else {
    i13 = i12 + 8 | 0;
    i12 = (_round(+(+HEAPF32[i13 >> 2])) | 0) + i18 | 0;
    i18 = _round(+(+HEAPF32[i16 >> 2])) | 0;
    i19 = i12 + (((_round(+(+HEAPF32[i13 >> 2])) | 0) + i18 | 0) / -2 & -1) | 0;
   }
   i11 = ~~(d17 + +(i19 | 0));
   STACKTOP = i3;
   return i11 | 0;
  } else {
   if ((HEAP32[i10 >> 2] | 0) == 0) {
    break;
   }
   i18 = i1 | 0;
   i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 752 >> 2] & 511](i18) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 720 >> 2] & 127](i4, i18);
   i18 = (HEAP32[i4 >> 2] | 0) + i13 | 0;
   i13 = i1 | 0;
   __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i5, i13, 0, 0, 1);
   i12 = (HEAP32[i10 + 4 >> 2] | 0) - 1 | 0;
   i16 = i18 + (Math_imul(i12 >>> 0 < 2147483647 >>> 0 ? i12 : 2147483647, HEAP32[i5 >> 2] | 0) | 0) | 0;
   i11 = i16 + (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 816 >> 2] & 7](i13, 0, 0, 0, 1) | 0) | 0;
   STACKTOP = i3;
   return i11 | 0;
  }
 } while (0);
 i5 = i1 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1040 >> 2] & 511](i5) | 0)) {
  i11 = -1;
  STACKTOP = i3;
  return i11 | 0;
 }
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
  i20 = HEAP32[i1 + 36 >> 2] | 0;
 } else {
  i20 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1 | 0) | 0;
 }
 i10 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i20) | 0;
 i20 = i10 + 4 | 0;
 i4 = _round(+(+HEAPF32[i20 >> 2])) | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i6, i5, 1, i2, 1);
 i5 = _round(+(+HEAPF32[i20 >> 2])) | 0;
 i20 = _round(+(+HEAPF32[i10 + 8 >> 2])) | 0;
 i10 = (((HEAP32[i6 >> 2] | 0) - (i20 + i5) | 0) / 2 & -1) + i4 | 0;
 i4 = i1 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i2 = FUNCTION_TABLE_ii[HEAP32[i5 + 736 >> 2] & 511](i4) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 704 >> 2] & 127](i7, i4);
  i21 = (HEAP32[i7 >> 2] | 0) + i2 | 0;
 } else {
  i2 = FUNCTION_TABLE_ii[HEAP32[i5 + 748 >> 2] & 511](i4) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 716 >> 2] & 127](i8, i4);
  i21 = (HEAP32[i8 >> 2] | 0) + i2 | 0;
 }
 i11 = i10 + i21 | 0;
 STACKTOP = i3;
 return i11 | 0;
}
function __ZN7WebCore15RenderBlockFlow18addIntrudingFloatsEPS0_NS_10LayoutUnitES2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i10;
 i12 = i2 + 96 | 0;
 if ((HEAP32[i12 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore15LayoutBoxExtent11logicalLeftENS_11WritingModeE(i6, i1 + 60 | 0, (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 i13 = i3 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) + (HEAP32[i13 >> 2] | 0) | 0;
 HEAP32[i13 >> 2] = i3;
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i12 = i1 + 20 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i4 = i1 + 96 | 0;
 i14 = i2 | 0;
 i15 = i1 + 8 | 0;
 i16 = i8 | 0;
 i17 = i2 | 0;
 i18 = i2;
 i2 = i9 | 0;
 i19 = i7 | 0;
 i20 = i13;
 while (1) {
  i13 = HEAP32[i20 >> 2] | 0;
  if ((HEAP32[i12 >> 2] & 8192 | 0) == 0) {
   i21 = (HEAP32[i13 + 16 >> 2] | 0) + (HEAP32[i13 + 8 >> 2] | 0) | 0;
  } else {
   i21 = (HEAP32[i13 + 20 >> 2] | 0) + (HEAP32[i13 + 12 >> 2] | 0) | 0;
  }
  L13 : do {
   if ((i21 | 0) > (i6 | 0)) {
    i22 = HEAP32[i4 >> 2] | 0;
    L15 : do {
     if ((i22 | 0) == 0) {
      i23 = __ZN3WTF10fastMallocEj(64) | 0;
      __ZN7WebCore15FloatingObjectsC1ERKNS_15RenderBlockFlowE(i23, i1);
      i24 = HEAP32[i4 >> 2] | 0;
      HEAP32[i4 >> 2] = i23;
      if ((i24 | 0) == 0) {
       break;
      }
      __ZN7WebCore15FloatingObjectsD1Ev(i24);
      __ZN3WTF8fastFreeEPv(i24);
     } else {
      i24 = HEAP32[i22 >> 2] | 0;
      if ((i24 | 0) == 0) {
       break;
      }
      i23 = HEAP32[i22 + 8 >> 2] | 0;
      i25 = HEAP32[i13 >> 2] | 0;
      i26 = i25;
      i27 = i26 + ~(i26 << 15) | 0;
      i26 = (i27 >>> 10 ^ i27) * 9 & -1;
      i27 = i26 >>> 6 ^ i26;
      i26 = i27 + ~(i27 << 11) | 0;
      i27 = i26 >>> 16 ^ i26;
      i26 = (i27 >>> 23) + ~i27 | 0;
      i28 = i26 << 12 ^ i26;
      i26 = i28 >>> 7 ^ i28;
      i28 = i26 << 2 ^ i26;
      i26 = i28 >>> 20 ^ i28 | 1;
      i28 = i27;
      i27 = 0;
      while (1) {
       i29 = i28 & i23;
       i30 = i24 + (i29 << 2) | 0;
       i31 = HEAP32[i30 >> 2] | 0;
       i32 = i31;
       if ((i32 | 0) == 0) {
        break L15;
       } else if ((i32 | 0) != (-1 | 0)) {
        if ((HEAP32[HEAP32[i31 >> 2] >> 2] | 0) == (i25 | 0)) {
         break;
        }
       }
       i31 = (i27 | 0) == 0 ? i26 : i27;
       i28 = i31 + i29 | 0;
       i27 = i31;
      }
      if ((i30 | 0) != 0) {
       break L13;
      }
     }
    } while (0);
    i22 = (i14 | 0) == (HEAP32[i15 >> 2] | 0);
    if ((HEAP32[i12 >> 2] & 8192 | 0) == 0) {
     if (i22) {
      HEAP32[i16 >> 2] = 0;
      i33 = 0;
     } else {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 768 >> 2] & 127](i8, i17);
      i33 = HEAP32[i16 >> 2] | 0;
     }
     i34 = i6;
     i35 = i3 - i33 | 0;
    } else {
     if (i22) {
      HEAP32[i19 >> 2] = 0;
      i36 = 0;
     } else {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 776 >> 2] & 127](i7, i17);
      i36 = HEAP32[i19 >> 2] | 0;
     }
     i34 = i3 - i36 | 0;
     i35 = i6;
    }
    i22 = HEAP32[i4 >> 2] | 0;
    HEAP32[i10 >> 2] = i34;
    HEAP32[i10 + 4 >> 2] = i35;
    __ZNK7WebCore14FloatingObject18copyToNewContainerENS_10LayoutSizeEbb(i9, i13, i11, 0, 0);
    __ZN7WebCore15FloatingObjects3addENSt3__110unique_ptrINS_14FloatingObjectENS1_14default_deleteIS3_EEEE(i22, i9) | 0;
    i22 = HEAP32[i2 >> 2] | 0;
    HEAP32[i2 >> 2] = 0;
    if ((i22 | 0) == 0) {
     break;
    }
    __ZN3WTF8fastFreeEPv(i22);
   }
  } while (0);
  i20 = HEAP32[i20 + 8 >> 2] | 0;
  if ((i20 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow17layoutLineGridBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 64 | 0;
 i6 = i2 + 72 | 0;
 i7 = i1 + 36 | 0;
 i8 = i1 + 100 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = (i9 | 0) == 0;
 if ((HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 24 >> 2] | 0) + 120 >> 2] | 0) == (HEAP32[__ZN3WTF8nullAtomE >> 2] | 0)) {
  do {
   if (i10) {
    i11 = __ZN3WTF10fastMallocEj(36) | 0;
    __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i11, i1);
    i12 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = i11;
    if ((i12 | 0) == 0) {
     i13 = i11;
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
    i13 = HEAP32[i8 >> 2] | 0;
   } else {
    i13 = i9;
   }
  } while (0);
  i12 = i13 + 24 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  if ((i13 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  STACKTOP = i2;
  return;
 }
 do {
  if (i10) {
   i13 = __ZN3WTF10fastMallocEj(36) | 0;
   __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i13, i1);
   i12 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i13;
   if ((i12 | 0) == 0) {
    i14 = i13;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
   i14 = HEAP32[i8 >> 2] | 0;
  } else {
   i14 = i9;
  }
 } while (0);
 i9 = i14 + 24 | 0;
 i14 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i14 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
 }
 i14 = __Znwj(104) | 0;
 i9 = i14;
 __ZN7WebCore13RootInlineBoxC1ERNS_15RenderBlockFlowE(i9, i1);
 i10 = i14 + 56 | 0;
 HEAP32[i10 >> 2] = HEAP32[i10 >> 2] | 12;
 i10 = i14 + 32 | 0;
 HEAP32[i10 >> 2] = HEAP32[i10 >> 2] | 2;
 i10 = HEAP32[i14 + 40 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i14 = i10;
  while (1) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 72 >> 2] & 63](i14);
   i14 = HEAP32[i14 + 4 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
  }
 }
 _memset(i3 | 0, 0, 20) | 0;
 _memset(i4 | 0, 0, 40) | 0;
 i14 = (HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i14 | 0) == 3 | (i14 | 0) == 0) {
  HEAP32[i5 >> 2] = HEAP32[i1 + 56 >> 2];
 } else {
  HEAP32[i5 >> 2] = HEAP32[i1 + 52 >> 2];
 }
 __ZN7WebCore13RootInlineBox26alignBoxesInBlockDirectionENS_10LayoutUnitERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEERNS_21VerticalPositionCacheE(i6, i9, i5, i3, i4);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = __ZN3WTF10fastMallocEj(36) | 0;
   __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i6, i1);
   i14 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i6;
   if ((i14 | 0) == 0) {
    i15 = i6;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
   i15 = HEAP32[i8 >> 2] | 0;
  } else {
   i15 = i5;
  }
 } while (0);
 i5 = i15 + 24 | 0;
 i15 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i9;
 if ((i15 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
 }
 i15 = HEAP32[i4 + 20 >> 2] | 0;
 if ((i15 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i4 >> 2] | 0;
 if ((i15 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i3 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i3 = 0;
  while (1) {
   do {
    if ((HEAP32[i15 + (i3 * 36 & -1) >> 2] | 0) != -1) {
     i9 = i15 + (i3 * 36 & -1) + 12 | 0;
     if ((HEAP32[i9 >> 2] | 0) != 0) {
      HEAP32[i9 >> 2] = 0;
     }
     i9 = i15 + (i3 * 36 & -1) + 4 | 0;
     i5 = HEAP32[i9 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     HEAP32[i9 >> 2] = 0;
     HEAP32[i15 + (i3 * 36 & -1) + 8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i5);
    }
   } while (0);
   i3 = i3 + 1 | 0;
   if ((i3 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15RenderBlockFlow16applyBeforeBreakERNS_9RenderBoxENS_10LayoutUnitE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i2 | 0;
 i13 = i2 + 4 | 0;
 i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 i15 = HEAP32[i14 + 4 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i16 = 3;
 } else {
  if ((HEAP32[i15 + 40 >> 2] | 0) == 0) {
   i17 = 0;
   i18 = 1;
  } else {
   i16 = 3;
  }
 }
 if ((i16 | 0) == 3) {
  i17 = (HEAP32[i14 + 60 >> 2] | 0) != 0;
  i18 = 0;
 }
 do {
  if ((HEAP32[i2 + 20 >> 2] & 805306368 | 0) == 0) {
   i19 = 0;
   i20 = 0;
  } else {
   i14 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i12) | 0;
   if ((i14 | 0) == 0) {
    i19 = 0;
    i20 = 0;
    break;
   }
   i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 252 >> 2] & 511](i14 | 0) | 0;
   i20 = i14;
  }
 } while (0);
 if (i18) {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 96 | 0) == 32) {
   i16 = 15;
  } else {
   i16 = 9;
  }
 } else {
  i16 = 9;
 }
 L12 : do {
  if ((i16 | 0) == 9) {
   do {
    if (i17) {
     i12 = HEAP32[i3 + 36 >> 2] | 0;
     i14 = (HEAP32[i12 + 52 >> 2] & 3 | 0) == 1;
     if (!(i14 | i19 ^ 1)) {
      i21 = i12;
      break;
     }
     if (i14) {
      i16 = 15;
      break L12;
     } else {
      break L12;
     }
    } else {
     if (!i19) {
      break L12;
     }
     i21 = HEAP32[i3 + 36 >> 2] | 0;
    }
   } while (0);
   if ((HEAP32[(HEAP32[i21 + 20 >> 2] | 0) + 292 >> 2] & 24 | 0) == 8) {
    i16 = 15;
   }
  }
 } while (0);
 L20 : do {
  if ((i16 | 0) == 15) {
   i21 = __ZNK7WebCore12RenderObject15containingBlockEv(i3 | 0) | 0;
   i17 = i3 + 4 | 0;
   L22 : do {
    if ((i21 | 0) != 0) {
     i14 = i21;
     while (1) {
      if ((i14 | 0) == (HEAP32[(HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0)) {
       break L22;
      }
      i12 = i14 | 0;
      i15 = i14 + 20 | 0;
      if ((HEAP32[i15 >> 2] & 4194304 | 0) != 0) {
       break L22;
      }
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 248 >> 2] & 511](i12) | 0) {
       break L22;
      }
      i22 = HEAP32[i15 >> 2] | 0;
      if ((i22 & 64 | 0) != 0 | (i22 & 25165824 | 0) == 16777216) {
       break L20;
      }
      i14 = __ZNK7WebCore12RenderObject15containingBlockEv(i12) | 0;
      if ((i14 | 0) == 0) {
       break;
      }
     }
    }
   } while (0);
   i17 = HEAP32[i4 >> 2] | 0;
   HEAP32[i6 >> 2] = i17;
   if (!(__ZNK7WebCore15RenderBlockFlow11hasNextPageENS_10LayoutUnitENS0_16PageBoundaryRuleE(i2, i6, 1) | 0)) {
    break;
   }
   if (i18) {
    i21 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
    HEAP32[i7 >> 2] = i17;
    __ZN7WebCore11LayoutState20addForcedColumnBreakEPNS_9RenderBoxENS_10LayoutUnitE(i21, i3, i7);
   }
   do {
    if (i19) {
     i21 = i8 | 0;
     HEAP32[i21 >> 2] = 0;
     i14 = i2 | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i10, i14);
     HEAP32[i9 >> 2] = i17 + (HEAP32[i10 >> 2] | 0);
     if (!(__ZN7WebCore16RenderFlowThread20addForcedRegionBreakEPKNS_11RenderBlockENS_10LayoutUnitEPNS_9RenderBoxEbPS4_(i20, i14, i9, i3, 1, i8) | 0)) {
      break;
     }
     HEAP32[i1 >> 2] = (HEAP32[i21 >> 2] | 0) + i17;
     STACKTOP = i5;
     return;
    }
   } while (0);
   HEAP32[i11 >> 2] = i17;
   __ZNK7WebCore15RenderBlockFlow18nextPageLogicalTopENS_10LayoutUnitENS0_16PageBoundaryRuleE(i1, i2, i11, 1);
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, i27 = 0, d28 = +0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZN7WebCore15RenderBlockFlow15ensureLineBoxesEv(i1);
 i7 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i3 | 0;
 i8 = i3 + 4 | 0;
 i3 = i5 | 0;
 i9 = i5 + 4 | 0;
 i10 = i5 + 8 | 0;
 i11 = i5 + 12 | 0;
 i12 = i2 + 8 | 0;
 i13 = i2 + 4 | 0;
 i14 = i2 | 0;
 i15 = i6;
 i16 = i6;
 i17 = i7;
 while (1) {
  i7 = HEAP32[i17 + 72 >> 2] | 0;
  i18 = i17 | 0;
  d19 = +HEAPF32[i17 + 24 >> 2];
  do {
   if (d19 < +2147483647) {
    if (d19 <= +-2147483648) {
     i20 = -2147483648;
     break;
    }
    i20 = ~~d19;
   } else {
    i20 = 2147483647;
   }
  } while (0);
  i21 = (i7 | 0) < (i20 | 0) ? i20 : i7;
  i22 = HEAP32[i17 + 76 >> 2] | 0;
  i23 = i17 + 32 | 0;
  if ((HEAP32[i23 >> 2] & 2048 | 0) == 0) {
   d24 = +HEAPF32[i17 + 28 >> 2];
  } else {
   d24 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i18);
  }
  d25 = d19 + d24;
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
  i7 = (i26 | 0) < (i22 | 0) ? i26 : i22;
  d25 = +(HEAP32[i1 >> 2] | 0) + +HEAPF32[i17 + 20 >> 2];
  do {
   if (d25 < +2147483647) {
    if (d25 <= +-2147483648) {
     i27 = -2147483648;
     break;
    }
    i27 = ~~d25;
   } else {
    i27 = 2147483647;
   }
  } while (0);
  i22 = (HEAP32[i8 >> 2] | 0) + i21 | 0;
  if ((HEAP32[i23 >> 2] & 2048 | 0) == 0) {
   d28 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i18);
  } else {
   d28 = +HEAPF32[i17 + 28 >> 2];
  }
  do {
   if (d28 < +2147483647) {
    if (d28 <= +-2147483648) {
     i29 = -2147483648;
     break;
    }
    i29 = ~~d28;
   } else {
    i29 = 2147483647;
   }
  } while (0);
  i18 = i7 - i21 | 0;
  HEAP32[i3 >> 2] = i27;
  HEAP32[i9 >> 2] = i22;
  HEAP32[i10 >> 2] = i29;
  HEAP32[i11 >> 2] = i18;
  do {
   if (!((i29 | 0) < 1 | (i18 | 0) < 1)) {
    __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i6, i5);
    i23 = HEAP32[i12 >> 2] | 0;
    if ((i23 | 0) != (HEAP32[i13 >> 2] | 0)) {
     i30 = (HEAP32[i14 >> 2] | 0) + (i23 << 4) | 0;
     HEAP32[i30 >> 2] = HEAP32[i16 >> 2];
     HEAP32[i30 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
     HEAP32[i30 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
     HEAP32[i30 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     break;
    }
    i30 = i23 + 1 | 0;
    i31 = HEAP32[i14 >> 2] | 0;
    do {
     if (i31 >>> 0 > i6 >>> 0) {
      i32 = 26;
     } else {
      if ((i31 + (i23 << 4) | 0) >>> 0 <= i6 >>> 0) {
       i32 = 26;
       break;
      }
      __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i30);
      i33 = HEAP32[i14 >> 2] | 0;
      i34 = i33 + (i15 - i31 >> 4 << 4) | 0;
      i35 = i33;
     }
    } while (0);
    if ((i32 | 0) == 26) {
     i32 = 0;
     __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i30);
     i34 = i6;
     i35 = HEAP32[i14 >> 2] | 0;
    }
    i31 = i35 + (HEAP32[i12 >> 2] << 4) | 0;
    i23 = i34;
    HEAP32[i31 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i31 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
    HEAP32[i31 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
    HEAP32[i31 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
  } while (0);
  i17 = HEAP32[i17 + 52 >> 2] | 0;
  if ((i17 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9ShapeInfoINS_9RenderBoxEE12setShapeSizeENS_10LayoutUnitES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 511](i1) | 0;
 if ((i13 | 0) == 4) {
  i14 = i1 + 12 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15 | 0;
  i17 = i15;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 752 >> 2] & 511](i16) | 0;
  i19 = i15;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 720 >> 2] & 127](i8, i16);
  i15 = HEAP32[i8 >> 2] | 0;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 756 >> 2] & 511](i16) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 724 >> 2] & 127](i7, i16);
  i16 = i3 | 0;
  i19 = (HEAP32[i16 >> 2] | 0) - (i15 + i18 + i8 + (HEAP32[i7 >> 2] | 0)) | 0;
  HEAP32[i16 >> 2] = i19;
  i16 = HEAP32[i14 >> 2] | 0;
  i14 = i16 | 0;
  i7 = i16;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 760 >> 2] & 511](i14) | 0;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 764 >> 2] & 511](i14) | 0;
  i7 = i16;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 728 >> 2] & 127](i5, i14);
  i16 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 732 >> 2] & 127](i6, i14);
  i14 = i2 | 0;
  i7 = (HEAP32[i14 >> 2] | 0) - (i18 + i8 + i16 + (HEAP32[i6 >> 2] | 0)) | 0;
  HEAP32[i14 >> 2] = i7;
  i20 = i7;
  i21 = i19;
 } else if ((i13 | 0) == 3) {
  i19 = i1 + 12 | 0;
  i7 = HEAP32[i19 >> 2] | 0;
  i14 = i7 | 0;
  i6 = i7;
  i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 752 >> 2] & 511](i14) | 0;
  i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 756 >> 2] & 511](i14) | 0;
  i14 = i3 | 0;
  i6 = (HEAP32[i14 >> 2] | 0) - (i16 + i7) | 0;
  HEAP32[i14 >> 2] = i6;
  i14 = HEAP32[i19 >> 2] | 0;
  i19 = i14 | 0;
  i7 = i14;
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 760 >> 2] & 511](i19) | 0;
  i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 764 >> 2] & 511](i19) | 0;
  i19 = i2 | 0;
  i7 = (HEAP32[i19 >> 2] | 0) - (i16 + i14) | 0;
  HEAP32[i19 >> 2] = i7;
  i20 = i7;
  i21 = i6;
 } else if ((i13 | 0) == 1) {
  i13 = i1 + 12 | 0;
  i6 = HEAP32[i13 >> 2] | 0;
  i7 = i6 | 0;
  i19 = i6;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i19 >> 2] | 0) + 784 >> 2] & 127](i11, i7, 0);
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i19 >> 2] | 0) + 788 >> 2] & 127](i12, i7, 0);
  i7 = i3 | 0;
  i19 = (HEAP32[i12 >> 2] | 0) + (HEAP32[i11 >> 2] | 0) + (HEAP32[i7 >> 2] | 0) | 0;
  HEAP32[i7 >> 2] = i19;
  i7 = HEAP32[i13 >> 2] | 0;
  i13 = i7 | 0;
  i11 = i7;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 792 >> 2] & 127](i9, i13, 0);
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 796 >> 2] & 127](i10, i13, 0);
  i13 = i2 | 0;
  i11 = (HEAP32[i10 >> 2] | 0) + (HEAP32[i9 >> 2] | 0) + (HEAP32[i13 >> 2] | 0) | 0;
  HEAP32[i13 >> 2] = i11;
  i20 = i11;
  i21 = i19;
 } else {
  i20 = HEAP32[i2 >> 2] | 0;
  i21 = HEAP32[i3 >> 2] | 0;
 }
 i3 = i1 + 20 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == (i20 | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) != (i21 | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i2 = i1 + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 }
 i1 = i3;
 HEAP32[i1 >> 2] = i20;
 HEAP32[i1 + 4 >> 2] = i21;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlow22handleAfterSideOfBlockENS_10LayoutUnitES1_RNS0_10MarginInfoE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
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
 i9 = i4 | 0;
 HEAP8[i9] = HEAP8[i9] | 32;
 i10 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   if ((HEAP32[i10 + 20 >> 2] & 768 | 0) == 256) {
    break;
   }
   if ((HEAP32[i10 + 24 >> 2] & 32 | 0) == 0) {
    break;
   }
   i11 = i10;
   if (!(__ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv(i10) | 0)) {
    break;
   }
   i12 = i1 + 36 | 0;
   i13 = (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i13 | 0) == 3 | (i13 | 0) == 0) {
    i14 = i1 + 56 | 0;
   } else {
    i14 = i1 + 52 | 0;
   }
   i13 = HEAP32[i14 >> 2] | 0;
   i15 = HEAP32[i10 + 8 >> 2] | 0;
   i16 = i15;
   do {
    if ((i15 | 0) == 0) {
     i17 = 0;
    } else {
     i18 = HEAP32[i10 + 36 >> 2] | 0;
     if ((HEAP32[i18 + 48 >> 2] & 3145728 | 0) == 0) {
      i17 = 0;
      break;
     }
     i19 = i10;
     i20 = (HEAP32[i18 + 44 >> 2] | 0) >>> 13 & 3;
     if ((i20 | 0) == 3 | (i20 | 0) == 0) {
      HEAP32[i6 >> 2] = HEAP32[i10 + 56 >> 2];
     } else {
      HEAP32[i6 >> 2] = HEAP32[i10 + 52 >> 2];
     }
     __ZN7WebCore15RenderBlockFlow13getClearDeltaERNS_9RenderBoxENS_10LayoutUnitE(i7, i16, i19, i6);
     if ((HEAP32[i7 >> 2] | 0) == 0) {
      i17 = 0;
      break;
     }
     __ZNK7WebCore15RenderBlockFlow20marginValuesForChildERNS_9RenderBoxE(i8, i11, i19);
     i17 = HEAP32[i8 >> 2] | 0;
    }
   } while (0);
   i11 = i13 - i17 | 0;
   i16 = (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i16 | 0) == 3 | (i16 | 0) == 0) {
    HEAP32[i1 + 56 >> 2] = i11;
    break;
   } else {
    HEAP32[i1 + 52 >> 2] = i11;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i9 + 1 | 0] & 2) == 0) {
   i17 = HEAP8[i9] | 0;
   if ((i17 & 36) == 36 | (i17 & 18) == 18) {
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0) {
    if ((i17 & -120) << 24 >> 24 == -120) {
     break;
    }
   }
   i17 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i17 | 0) == 3 | (i17 | 0) == 0) {
    i21 = i1 + 56 | 0;
   } else {
    i21 = i1 + 52 | 0;
   }
   i8 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i4 + 8 >> 2] | 0) + (HEAP32[i21 >> 2] | 0) | 0;
   if ((i17 | 0) == 3 | (i17 | 0) == 0) {
    HEAP32[i1 + 56 >> 2] = i8;
    break;
   } else {
    HEAP32[i1 + 52 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i21 = (HEAP32[i1 + 36 >> 2] | 0) + 44 | 0;
 i9 = (HEAP32[i21 >> 2] | 0) >>> 13 & 3;
 if ((i9 | 0) == 3 | (i9 | 0) == 0) {
  i22 = i1 + 56 | 0;
 } else {
  i22 = i1 + 52 | 0;
 }
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8 + (HEAP32[i22 >> 2] | 0) | 0;
 if ((i9 | 0) == 3 | (i9 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i3;
 } else {
  HEAP32[i1 + 52 >> 2] = i3;
 }
 i3 = (HEAP32[i21 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i23 = i1 + 56 | 0;
 } else {
  i23 = i1 + 52 | 0;
 }
 i21 = HEAP32[i23 >> 2] | 0;
 i23 = i8 + (HEAP32[i2 >> 2] | 0) | 0;
 i2 = (i21 | 0) < (i23 | 0) ? i23 : i21;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i2;
  __ZN7WebCore15RenderBlockFlow24setCollapsedBottomMarginERKNS0_10MarginInfoE(i1, i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 + 52 >> 2] = i2;
  __ZN7WebCore15RenderBlockFlow24setCollapsedBottomMarginERKNS0_10MarginInfoE(i1, i4);
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow20insertFloatingObjectERNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i1 + 96 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = __ZN3WTF10fastMallocEj(64) | 0;
   __ZN7WebCore15FloatingObjectsC1ERKNS_15RenderBlockFlowE(i11, i1);
   i12 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN7WebCore15FloatingObjectsD1Ev(i12);
   __ZN3WTF8fastFreeEPv(i12);
  } else {
   __ZNK3WTF11ListHashSetINSt3__110unique_ptrIN7WebCore14FloatingObjectENS1_14default_deleteIS4_EEEELj4ENS3_27FloatingObjectHashFunctionsEE4findIRNS3_9RenderBoxENS3_28FloatingObjectHashTranslatorEEENS_24ListHashSetConstIteratorIS7_Lj4ES8_EERKT_(i4, i10 | 0, i2);
   i12 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i12 >> 2] | 0;
   STACKTOP = i3;
   return i13 | 0;
  }
 } while (0);
 __ZN7WebCore14FloatingObject6createERNS_9RenderBoxE(i5, i2);
 i4 = i2 | 0;
 i10 = i2 + 20 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 24 >> 2] & 16 | 0) == 0) {
   i14 = i12;
   i15 = 16;
  } else {
   do {
    if ((i12 & 31 | 0) == 0) {
     if ((HEAP8[HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0] & 4) == 0) {
      i16 = i12;
      break;
     }
     if ((i12 & 4 | 0) != 0) {
      i16 = i12;
      break;
     }
     i11 = i12 | 4;
     HEAP32[i10 >> 2] = i11;
     i16 = i11;
    } else {
     i16 = i12;
    }
   } while (0);
   i11 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
   if ((HEAP32[i11 + 8 >> 2] | 0) == 0) {
    if ((HEAP8[i11 | 0] & 2) == 0) {
     i14 = i16;
     i15 = 16;
     break;
    }
    if ((HEAP32[i11 + 60 >> 2] | 0) == 0) {
     i14 = i16;
     i15 = 16;
     break;
    }
   }
   i11 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i14 = i16;
    i15 = 16;
    break;
   }
   if (((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i11 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    i14 = i16;
    i15 = 16;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 876 >> 2] & 63](i2);
   __ZN7WebCore9RenderBox34computeAndSetBlockDirectionMarginsEPKNS_11RenderBlockE(i2, i1 | 0);
  }
 } while (0);
 do {
  if ((i15 | 0) == 16) {
   if ((i14 & 31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 652 >> 2] & 63](i4);
  }
 } while (0);
 i4 = i5 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i14 = i1 + 20 | 0;
 i15 = HEAP32[((HEAP32[i14 >> 2] & 8192 | 0) == 0 ? i2 + 56 | 0 : i2 + 52 | 0) >> 2] | 0;
 i16 = i2 | 0;
 i12 = i2;
 i2 = i1 + 36 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 792 >> 2] & 127](i6, i16, HEAP32[i2 >> 2] | 0);
 i1 = (HEAP32[i6 >> 2] | 0) + i15 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 796 >> 2] & 127](i7, i16, HEAP32[i2 >> 2] | 0);
 i2 = i1 + (HEAP32[i7 >> 2] | 0) | 0;
 if ((HEAP32[i14 >> 2] & 8192 | 0) == 0) {
  HEAP32[i5 + 20 >> 2] = i2;
 } else {
  HEAP32[i5 + 16 >> 2] = i2;
 }
 i2 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i8 | 0;
 HEAP32[i5 >> 2] = i9;
 i9 = __ZN7WebCore15FloatingObjects3addENSt3__110unique_ptrINS_14FloatingObjectENS1_14default_deleteIS3_EEEE(i2, i8) | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i8 | 0) == 0) {
  i13 = i9;
  STACKTOP = i3;
  return i13 | 0;
 }
 __ZN3WTF8fastFreeEPv(i8);
 i13 = i9;
 STACKTOP = i3;
 return i13 | 0;
}
function __ZN7WebCoreL21getHeightForLineCountERKNS_15RenderBlockFlowEibRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  i8 = -1;
  STACKTOP = i5;
  return i8 | 0;
 }
 if ((HEAP32[i1 + 20 >> 2] & 2097152 | 0) != 0) {
  i9 = i1 + 104 | 0;
  while (1) {
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i8 = -1;
    i11 = 31;
    break;
   }
   i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
   HEAP32[i4 >> 2] = i12;
   if ((i12 | 0) == (i2 | 0)) {
    break;
   } else {
    i9 = i10 + 52 | 0;
   }
  }
  if ((i11 | 0) == 31) {
   STACKTOP = i5;
   return i8 | 0;
  }
  i9 = HEAP32[i10 + 76 >> 2] | 0;
  if (i3) {
   i10 = i1 | 0;
   i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 740 >> 2] & 511](i10) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 708 >> 2] & 127](i6, i10);
   i13 = (HEAP32[i6 >> 2] | 0) + i12 | 0;
  } else {
   i13 = 0;
  }
  i8 = i13 + i9 | 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 i9 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i8 = -1;
  STACKTOP = i5;
  return i8 | 0;
 } else {
  i14 = 0;
  i15 = i9;
 }
 L19 : while (1) {
  i9 = i15;
  do {
   if ((HEAP32[i15 + 24 >> 2] & 32 | 0) == 0) {
    i16 = HEAP32[i15 + 20 >> 2] | 0;
    i11 = 22;
   } else {
    i13 = HEAP32[i15 + 20 >> 2] | 0;
    if ((i13 & 64 | 0) != 0 | (i13 & 25165824 | 0) == 16777216) {
     i16 = i13;
     i11 = 22;
     break;
    }
    if ((i13 & 768 | 0) == 256) {
     i17 = HEAP32[(HEAP32[i15 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i17 = HEAP32[i15 + 36 >> 2] | 0;
    }
    if ((HEAP32[i17 + 48 >> 2] & 31 | 0) == 3) {
     i16 = i13;
     i11 = 22;
     break;
    }
    if ((HEAP8[(HEAP32[(HEAP32[i15 + 36 >> 2] | 0) + 4 >> 2] | 0) + 17 | 0] | 0) != 0) {
     i16 = i13;
     i11 = 22;
     break;
    }
    i18 = __ZN7WebCoreL21getHeightForLineCountERKNS_15RenderBlockFlowEibRi(i15, i2, 0, i4) | 0;
    if ((i18 | 0) == -1) {
     i19 = i14;
    } else {
     i11 = 19;
     break L19;
    }
   }
  } while (0);
  do {
   if ((i11 | 0) == 22) {
    i11 = 0;
    if ((i16 & 64 | 0) != 0 | (i16 & 25165824 | 0) == 16777216) {
     i19 = i14;
     break;
    }
    if ((i16 & 768 | 0) == 256) {
     i20 = HEAP32[(HEAP32[i15 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i20 = HEAP32[i15 + 36 >> 2] | 0;
    }
    i19 = (HEAP32[i20 + 48 >> 2] & 31 | 0) == 3 ? i14 : i9;
   }
  } while (0);
  i9 = HEAP32[i15 + 16 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i11 = 28;
   break;
  } else {
   i14 = i19;
   i15 = i9;
  }
 }
 if ((i11 | 0) == 19) {
  i14 = (HEAP32[i15 + 48 >> 2] | 0) + i18 | 0;
  if (i3) {
   i3 = i1 | 0;
   i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 740 >> 2] & 511](i3) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 708 >> 2] & 127](i7, i3);
   i21 = (HEAP32[i7 >> 2] | 0) + i18 | 0;
  } else {
   i21 = 0;
  }
  i8 = i14 + i21 | 0;
  STACKTOP = i5;
  return i8 | 0;
 } else if ((i11 | 0) == 28) {
  if (!((i19 | 0) != 0 & (i2 | 0) == 0)) {
   i8 = -1;
   STACKTOP = i5;
   return i8 | 0;
  }
  i8 = (HEAP32[i19 + 56 >> 2] | 0) + (HEAP32[i19 + 48 >> 2] | 0) | 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPN7WebCore9RenderBoxENS_12KeyValuePairIS3_NSt3__110unique_ptrINS1_14FloatingObjectENS5_14default_deleteIS7_EEEEEENS_24KeyValuePairKeyExtractorISB_EENS_7PtrHashIS3_EENS_7HashMapIS3_SA_SF_NS_10HashTraitsIS3_EENSH_ISA_EEE18KeyValuePairTraitsESI_E6rehashEiPSB_(i1, i2, i3) {
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
    __ZN3WTF8fastFreeEPv(i17);
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
    __ZN3WTF8fastFreeEPv(i11);
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
function __ZNK7WebCore15RenderBlockFlow38pushToNextPageWithMinimumLogicalHeightERNS_10LayoutUnitES1_S1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 i3 = i2 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) + i13 | 0;
 i14 = i1 + 20 | 0;
 do {
  if ((HEAP32[i14 >> 2] & 805306368 | 0) == 0) {
   i15 = 3;
  } else {
   i16 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
   if ((i16 | 0) == 0) {
    i15 = 3;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 864 >> 2] & 127](i7, i1 | 0);
   HEAP32[i6 >> 2] = i2 + (HEAP32[i7 >> 2] | 0);
   __ZN7WebCore16RenderFlowThread26pageLogicalHeightForOffsetENS_10LayoutUnitE(i10, i16, i6);
   i17 = HEAP32[i10 >> 2] | 0;
  }
 } while (0);
 if ((i15 | 0) == 3) {
  i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2] | 0;
  HEAP32[i10 >> 2] = i6;
  i17 = i6;
 }
 i6 = i10 | 0;
 if ((i17 | 0) == 0) {
  i18 = 1;
  STACKTOP = i5;
  return i18 | 0;
 }
 i10 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i7 = i1 + 4 | 0;
 i2 = i12 | 0;
 i16 = i1 | 0;
 i19 = i1 | 0;
 i20 = i1;
 i21 = i8 | 0;
 i22 = i9 | 0;
 i23 = i17;
 while (1) {
  if ((i10 | 0) <= (i23 | 0)) {
   i18 = 1;
   i15 = 16;
   break;
  }
  HEAP32[i4 >> 2] = (HEAP32[i3 >> 2] | 0) + i13;
  if (!(__ZNK7WebCore15RenderBlockFlow11hasNextPageENS_10LayoutUnitENS0_16PageBoundaryRuleE(i1, i11, 0) | 0)) {
   i18 = 0;
   i15 = 17;
   break;
  }
  i17 = (HEAP32[i6 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
  HEAP32[i3 >> 2] = i17;
  i24 = i17 + i13 | 0;
  do {
   if ((HEAP32[i14 >> 2] & 805306368 | 0) == 0) {
    i15 = 11;
   } else {
    i17 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i16) | 0;
    if ((i17 | 0) == 0) {
     i15 = 11;
     break;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 864 >> 2] & 127](i9, i19);
    HEAP32[i21 >> 2] = i24 + (HEAP32[i22 >> 2] | 0);
    __ZN7WebCore16RenderFlowThread26pageLogicalHeightForOffsetENS_10LayoutUnitE(i12, i17, i8);
    i25 = HEAP32[i2 >> 2] | 0;
   }
  } while (0);
  if ((i15 | 0) == 11) {
   i15 = 0;
   i24 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2] | 0;
   HEAP32[i2 >> 2] = i24;
   i25 = i24;
  }
  HEAP32[i6 >> 2] = i25;
  if ((i25 | 0) == 0) {
   i18 = 0;
   i15 = 18;
   break;
  } else {
   i23 = i25;
  }
 }
 if ((i15 | 0) == 16) {
  STACKTOP = i5;
  return i18 | 0;
 } else if ((i15 | 0) == 17) {
  STACKTOP = i5;
  return i18 | 0;
 } else if ((i15 | 0) == 18) {
  STACKTOP = i5;
  return i18 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPN7WebCore9RenderBoxES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore9RenderBoxES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
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
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
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
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
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
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore9RenderBoxES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZNK7WebCore15RenderBlockFlow9lineCountEPKNS_13RootInlineBoxEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 20 >> 2] & 2097152 | 0) != 0) {
  i7 = 0;
  i8 = i1 + 104 | 0;
  while (1) {
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i6 = i7;
    i10 = 29;
    break;
   }
   i11 = i7 + 1 | 0;
   if ((i9 | 0) == (i2 | 0)) {
    break;
   } else {
    i7 = i11;
    i8 = i9 + 52 | 0;
   }
  }
  if ((i10 | 0) == 29) {
   STACKTOP = i4;
   return i6 | 0;
  }
  if ((i3 | 0) == 0) {
   i6 = i11;
   STACKTOP = i4;
   return i6 | 0;
  }
  HEAP8[i3] = 1;
  i6 = i11;
  STACKTOP = i4;
  return i6 | 0;
 }
 i11 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 } else {
  i12 = i11;
 }
 while (1) {
  if ((HEAP32[i12 + 20 >> 2] & 768 | 0) != 256) {
   if ((HEAP32[i12 + 24 >> 2] & 32 | 0) != 0) {
    break;
   }
  }
  i11 = HEAP32[i12 + 16 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i6 = 0;
   i10 = 33;
   break;
  } else {
   i12 = i11;
  }
 }
 if ((i10 | 0) == 33) {
  STACKTOP = i4;
  return i6 | 0;
 }
 if ((i12 | 0) == 0) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 } else {
  i13 = 0;
  i14 = i12;
 }
 L29 : while (1) {
  i12 = i14;
  i11 = HEAP32[i14 + 20 >> 2] | 0;
  do {
   if ((i11 & 64 | 0) != 0 | (i11 & 25165824 | 0) == 16777216) {
    i15 = i13;
   } else {
    if ((i11 & 768 | 0) == 256) {
     i16 = HEAP32[(HEAP32[i14 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i16 = HEAP32[i14 + 36 >> 2] | 0;
    }
    if ((HEAP32[i16 + 48 >> 2] & 31 | 0) == 3) {
     i15 = i13;
     break;
    }
    if ((HEAP8[(HEAP32[(HEAP32[i14 + 36 >> 2] | 0) + 4 >> 2] | 0) + 17 | 0] | 0) != 0) {
     i15 = i13;
     break;
    }
    HEAP8[i5] = 0;
    i17 = (__ZNK7WebCore15RenderBlockFlow9lineCountEPKNS_13RootInlineBoxEPb(i12, i2, i5) | 0) + i13 | 0;
    if ((HEAP8[i5] & 1) == 0) {
     i15 = i17;
    } else {
     i10 = 20;
     break L29;
    }
   }
  } while (0);
  i12 = HEAP32[i14 + 16 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i6 = i15;
   i10 = 37;
   break;
  } else {
   i18 = i12;
  }
  while (1) {
   if ((HEAP32[i18 + 20 >> 2] & 768 | 0) != 256) {
    if ((HEAP32[i18 + 24 >> 2] & 32 | 0) != 0) {
     break;
    }
   }
   i12 = HEAP32[i18 + 16 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i6 = i15;
    i10 = 39;
    break L29;
   } else {
    i18 = i12;
   }
  }
  if ((i18 | 0) == 0) {
   i6 = i15;
   i10 = 38;
   break;
  } else {
   i13 = i15;
   i14 = i18;
  }
 }
 if ((i10 | 0) == 20) {
  if ((i3 | 0) == 0) {
   i6 = i17;
   STACKTOP = i4;
   return i6 | 0;
  }
  HEAP8[i3] = 1;
  i6 = i17;
  STACKTOP = i4;
  return i6 | 0;
 } else if ((i10 | 0) == 37) {
  STACKTOP = i4;
  return i6 | 0;
 } else if ((i10 | 0) == 38) {
  STACKTOP = i4;
  return i6 | 0;
 } else if ((i10 | 0) == 39) {
  STACKTOP = i4;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore15RenderBlockFlow24repaintOverhangingFloatsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 20 | 0;
 if ((HEAP32[i3 >> 2] & 4194304 | 0) != 0) {
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1024 >> 2] & 511](i1) | 0)) {
  return;
 }
 i4 = i1 + 96 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 0;
  } else {
   i7 = HEAP32[i5 + 20 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i6 = 0;
    break;
   } else {
    i8 = i7;
    i9 = 0;
   }
   while (1) {
    i7 = HEAP32[i8 >> 2] | 0;
    i10 = HEAP32[i7 + 28 >> 2] | 0;
    if ((i10 & 16 | 0) == 0 | (i10 & 3 | 0) == 0) {
     i11 = i9;
    } else {
     if ((HEAP32[i3 >> 2] & 8192 | 0) == 0) {
      i12 = (HEAP32[i7 + 16 >> 2] | 0) + (HEAP32[i7 + 8 >> 2] | 0) | 0;
     } else {
      i12 = (HEAP32[i7 + 20 >> 2] | 0) + (HEAP32[i7 + 12 >> 2] | 0) | 0;
     }
     i11 = (i9 | 0) < (i12 | 0) ? i12 : i9;
    }
    i7 = HEAP32[i8 + 8 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i6 = i11;
     break;
    } else {
     i8 = i7;
     i9 = i11;
    }
   }
  }
 } while (0);
 i11 = i1 + 36 | 0;
 i9 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i9 | 0) == 3 | (i9 | 0) == 0) {
  i13 = i1 + 56 | 0;
 } else {
  i13 = i1 + 52 | 0;
 }
 if ((i6 | 0) <= (HEAP32[i13 >> 2] | 0)) {
  return;
 }
 i13 = i1 | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 i9 = (i6 | 0) == 0;
 if (i9) {
  i14 = i5;
 } else {
  i5 = i6 + 196 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  i14 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i14 + 20 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i14 = i1 + 52 | 0;
  i5 = i1 + 56 | 0;
  i1 = i4;
  while (1) {
   i4 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[i3 >> 2] & 8192 | 0) == 0) {
    i15 = (HEAP32[i4 + 16 >> 2] | 0) + (HEAP32[i4 + 8 >> 2] | 0) | 0;
   } else {
    i15 = (HEAP32[i4 + 20 >> 2] | 0) + (HEAP32[i4 + 12 >> 2] | 0) | 0;
   }
   i8 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i8 | 0) == 3 | (i8 | 0) == 0) {
    i16 = i5;
   } else {
    i16 = i14;
   }
   do {
    if ((i15 | 0) > (HEAP32[i16 >> 2] | 0)) {
     i8 = i4 | 0;
     if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(HEAP32[i8 >> 2] | 0) | 0) {
      break;
     }
     if ((HEAP32[i4 + 28 >> 2] & 4 | 0) == 0) {
      if (!i2) {
       break;
      }
      if (!(__ZNK7WebCore12RenderObject14isDescendantOfEPKS0_(HEAP32[i8 >> 2] | 0, i13) | 0)) {
       break;
      }
     }
     __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i8 >> 2] | 0, 0);
     i12 = HEAP32[i8 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 872 >> 2] & 127](i12, 0);
    }
   } while (0);
   i1 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
  }
 }
 if (i9) {
  return;
 }
 i9 = i6 + 196 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore15RenderBlockFlow7newLineENS_6EClearE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 __ZN7WebCore15RenderBlockFlow17positionNewFloatsEv(i1) | 0;
 do {
  if ((i2 | 0) == 3) {
   i3 = HEAP32[i1 + 96 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i4 = 0;
    break;
   }
   i5 = HEAP32[i3 + 20 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 0;
    break;
   }
   i3 = i1 + 20 | 0;
   i6 = i5;
   i5 = 0;
   while (1) {
    i7 = HEAP32[i6 >> 2] | 0;
    i8 = HEAP32[i7 + 28 >> 2] | 0;
    if ((i8 & 16 | 0) == 0 | (i8 & 3 | 0) == 0) {
     i9 = i5;
    } else {
     if ((HEAP32[i3 >> 2] & 8192 | 0) == 0) {
      i10 = (HEAP32[i7 + 16 >> 2] | 0) + (HEAP32[i7 + 8 >> 2] | 0) | 0;
     } else {
      i10 = (HEAP32[i7 + 20 >> 2] | 0) + (HEAP32[i7 + 12 >> 2] | 0) | 0;
     }
     i9 = (i5 | 0) < (i10 | 0) ? i10 : i5;
    }
    i7 = HEAP32[i6 + 8 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i4 = i9;
     break;
    } else {
     i6 = i7;
     i5 = i9;
    }
   }
  } else if ((i2 | 0) == 2) {
   i5 = HEAP32[i1 + 96 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 0;
    break;
   }
   i6 = HEAP32[i5 + 20 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i4 = 0;
    break;
   }
   i5 = i1 + 20 | 0;
   i3 = i6;
   i6 = 0;
   while (1) {
    i7 = HEAP32[i3 >> 2] | 0;
    if ((HEAP32[i7 + 28 >> 2] & 18 | 0) == 18) {
     if ((HEAP32[i5 >> 2] & 8192 | 0) == 0) {
      i11 = (HEAP32[i7 + 16 >> 2] | 0) + (HEAP32[i7 + 8 >> 2] | 0) | 0;
     } else {
      i11 = (HEAP32[i7 + 20 >> 2] | 0) + (HEAP32[i7 + 12 >> 2] | 0) | 0;
     }
     i12 = (i6 | 0) < (i11 | 0) ? i11 : i6;
    } else {
     i12 = i6;
    }
    i7 = HEAP32[i3 + 8 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i4 = i12;
     break;
    } else {
     i3 = i7;
     i6 = i12;
    }
   }
  } else if ((i2 | 0) == 1) {
   i6 = HEAP32[i1 + 96 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i4 = 0;
    break;
   }
   i3 = HEAP32[i6 + 20 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i4 = 0;
    break;
   }
   i6 = i1 + 20 | 0;
   i5 = i3;
   i3 = 0;
   while (1) {
    i7 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i7 + 28 >> 2] & 17 | 0) == 17) {
     if ((HEAP32[i6 >> 2] & 8192 | 0) == 0) {
      i13 = (HEAP32[i7 + 16 >> 2] | 0) + (HEAP32[i7 + 8 >> 2] | 0) | 0;
     } else {
      i13 = (HEAP32[i7 + 20 >> 2] | 0) + (HEAP32[i7 + 12 >> 2] | 0) | 0;
     }
     i14 = (i3 | 0) < (i13 | 0) ? i13 : i3;
    } else {
     i14 = i3;
    }
    i7 = HEAP32[i5 + 8 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i4 = i14;
     break;
    } else {
     i5 = i7;
     i3 = i14;
    }
   }
  } else {
   i4 = 0;
  }
 } while (0);
 i14 = i1 + 56 | 0;
 if ((HEAP32[i14 >> 2] | 0) >= (i4 | 0)) {
  return;
 }
 i13 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i13 | 0) == 3 | (i13 | 0) == 0) {
  HEAP32[i14 >> 2] = i4;
  return;
 } else {
  HEAP32[i1 + 52 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow24setCollapsedBottomMarginERKNS0_10MarginInfoE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i2 | 0;
 i11 = HEAP8[i10] | 0;
 if ((i11 & 36) != 36 | (i11 & 18) == 18) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i10 + 1 | 0] & 2) != 0) {
  if ((HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 536870912) {
   STACKTOP = i3;
   return;
  }
  i11 = i1 + 100 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i12 | 0) == 0) {
    i13 = __ZN3WTF10fastMallocEj(36) | 0;
    __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i13, i1);
    i14 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = i13;
    if ((i14 | 0) == 0) {
     i15 = i13;
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
    i15 = HEAP32[i11 >> 2] | 0;
   } else {
    i15 = i12;
   }
  } while (0);
  i12 = i15 + 32 | 0;
  HEAP8[i12] = HEAP8[i12] | 2;
  STACKTOP = i3;
  return;
 }
 i12 = i1 + 100 | 0;
 i15 = HEAP32[i12 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i11 = i5;
  _llvm_lifetime_start(4, 0, i11 | 0);
  __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i4, i1 + 60 | 0, (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  HEAP32[i5 >> 2] = 0;
  i14 = HEAP32[((HEAP32[i4 >> 2] | 0) < 0 ? i5 : i4) >> 2] | 0;
  _llvm_lifetime_end(4, 0, i11 | 0);
  i16 = i14;
  i17 = HEAP32[i12 >> 2] | 0;
 } else {
  i16 = HEAP32[i15 + 12 >> 2] | 0;
  i17 = i15;
 }
 i15 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = (i16 | 0) < (i15 | 0) ? i15 : i16;
 if ((i17 | 0) == 0) {
  __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i6, i1 + 60 | 0, (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i16 = HEAP32[i6 >> 2] | 0;
  i18 = (i16 | 0) > 0 ? 0 : -i16 | 0;
 } else {
  i18 = HEAP32[i17 + 16 >> 2] | 0;
 }
 i17 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i8 >> 2] = (i18 | 0) < (i17 | 0) ? i17 : i18;
 __ZN7WebCore15RenderBlockFlow23setMaxMarginAfterValuesENS_10LayoutUnitES1_(i1, i7, i8);
 do {
  if ((HEAP8[i10] | 0) >= 0) {
   i8 = i1 + 92 | 0;
   HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -67108865;
   if ((HEAP8[i10] | 0) < 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i9, i1 + 60 | 0, (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i1 + 92 | 0;
 HEAP32[i9 >> 2] = HEAP32[i9 >> 2] | 67108864;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15RenderBlockFlow22clipOutFloatingObjectsERNS_11RenderBlockEPKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 48 | 0;
 i13 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i14 = HEAP32[i13 + 20 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i13 = i5 | 0;
 i15 = i1 + 20 | 0;
 i16 = i1 + 36 | 0;
 i1 = i8 | 0;
 i17 = i5 + 4 | 0;
 i5 = i10 | 0;
 i18 = i11 | 0;
 i19 = i11 + 4 | 0;
 i20 = i11 + 8 | 0;
 i21 = i11 + 12 | 0;
 i22 = i2 | 0;
 i2 = i4 | 0;
 i23 = i4 + 4 | 0;
 i4 = i3 | 0;
 i3 = i9 | 0;
 i24 = i7 | 0;
 i25 = i14;
 while (1) {
  i14 = HEAP32[i25 >> 2] | 0;
  i26 = HEAP32[i13 >> 2] | 0;
  i27 = HEAP32[i14 + 8 >> 2] | 0;
  i28 = i14 | 0;
  i29 = HEAP32[i28 >> 2] | 0;
  if ((HEAP32[i15 >> 2] & 8192 | 0) == 0) {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i29 >> 2] | 0) + 784 >> 2] & 127](i8, i29 | 0, HEAP32[i16 >> 2] | 0);
   i30 = HEAP32[i1 >> 2] | 0;
  } else {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 776 >> 2] & 127](i7, i29);
   i30 = HEAP32[i24 >> 2] | 0;
  }
  i29 = HEAP32[i17 >> 2] | 0;
  i31 = HEAP32[i14 + 12 >> 2] | 0;
  i14 = HEAP32[i28 >> 2] | 0;
  if ((HEAP32[i15 >> 2] & 8192 | 0) == 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 768 >> 2] & 127](i10, i14);
   i32 = HEAP32[i5 >> 2] | 0;
  } else {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i14 >> 2] | 0) + 784 >> 2] & 127](i9, i14 | 0, HEAP32[i16 >> 2] | 0);
   i32 = HEAP32[i3 >> 2] | 0;
  }
  i14 = HEAP32[i28 >> 2] | 0;
  i28 = HEAP32[i14 + 52 >> 2] | 0;
  i33 = HEAP32[i14 + 56 >> 2] | 0;
  HEAP32[i18 >> 2] = i27 + i26 + i30;
  HEAP32[i19 >> 2] = i31 + i29 + i32;
  HEAP32[i20 >> 2] = i28;
  HEAP32[i21 >> 2] = i33;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i22, i11);
  i33 = HEAP32[i23 >> 2] | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + (HEAP32[i2 >> 2] | 0);
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + i33;
  i33 = HEAP32[i4 >> 2] | 0;
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i12, i11);
  __ZN7WebCore15GraphicsContext7clipOutERKNS_7IntRectE(i33, i12);
  i25 = HEAP32[i25 + 8 >> 2] | 0;
  if ((i25 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i6;
 return;
}
function __ZN7WebCore15RenderBlockFlow15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 i3 = i1 + 92 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 134217728;
 i3 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 28 >> 2] | 0) == 0) {
    break;
   }
   i4 = i3 + 28 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore12RenderObject7destroyEv(i5 | 0);
   }
   HEAP32[i4 >> 2] = 0;
  }
 } while (0);
 i3 = i1 | 0;
 i4 = i1 + 4 | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   i5 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   if ((HEAP32[i5 + 20 >> 2] & 768 | 0) == 256) {
    i6 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i6 = HEAP32[i5 + 36 >> 2] | 0;
   }
   if ((HEAP32[i6 + 48 >> 2] & 31 | 0) != 3) {
    break;
   }
   __ZN7WebCore11RenderBlock27moveRunInToOriginalPositionERNS_12RenderObjectE(i2, i5);
  }
 } while (0);
 __ZN7WebCore13RenderElement23destroyLeftoverChildrenEv(i1 | 0);
 i6 = i1 | 0;
 i5 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i6) | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i5 | 0);
  __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i6, 0);
 }
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   i6 = i1 + 104 | 0;
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    i5 = HEAP32[i1 + 8 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 644 >> 2] & 127](i5, i3);
    break;
   }
   if (__ZNK7WebCore12RenderObject17isSelectionBorderEv(i3) | 0) {
    __ZN7WebCore10RenderView14clearSelectionEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
   }
   if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i3) | 0)) {
    break;
   }
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i7 = i5;
   }
   while (1) {
    i5 = i7 + 40 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    if ((i6 | 0) != 0) {
     i8 = i6;
     while (1) {
      __ZN7WebCore9InlineBox16removeFromParentEv(i8);
      i8 = HEAP32[i5 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
     }
    }
    i7 = HEAP32[i7 + 52 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore17RenderLineBoxList15deleteLineBoxesEv(i1 + 104 | 0);
 __ZN7WebCore11RenderBlock36removeFromDelayedUpdateScrollInfoSetEv(i2);
 __ZN7WebCore9RenderBox15willBeDestroyedEv(i1 | 0);
 return;
}
function __ZN7WebCore15RenderBlockFlow32moveAllChildrenIncludingFloatsToEPNS_11RenderBlockEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i1 | 0, i2 | 0, HEAP32[i1 + 28 >> 2] | 0, 0, 0, i3);
 i3 = i1 + 96 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i2 + 96 | 0;
 i6 = i1;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   i7 = __ZN3WTF10fastMallocEj(64) | 0;
   __ZN7WebCore15FloatingObjectsC1ERKNS_15RenderBlockFlowE(i7, i2);
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN7WebCore15FloatingObjectsD1Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i5 | 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  i8 = HEAP32[i1 >> 2] | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  L13 : do {
   if ((i7 | 0) == 0) {
    i9 = 14;
   } else {
    i10 = HEAP32[i7 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i9 = 14;
     break;
    }
    i11 = HEAP32[i7 + 8 >> 2] | 0;
    i12 = i8;
    i13 = i12 + ~(i12 << 15) | 0;
    i12 = (i13 >>> 10 ^ i13) * 9 & -1;
    i13 = i12 >>> 6 ^ i12;
    i12 = i13 + ~(i13 << 11) | 0;
    i13 = i12 >>> 16 ^ i12;
    i12 = (i13 >>> 23) + ~i13 | 0;
    i14 = i12 << 12 ^ i12;
    i12 = i14 >>> 7 ^ i14;
    i14 = i12 << 2 ^ i12;
    i12 = i14 >>> 20 ^ i14 | 1;
    i14 = i13;
    i13 = 0;
    while (1) {
     i15 = i14 & i11;
     i16 = i10 + (i15 << 2) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     i18 = i17;
     if ((i18 | 0) == 0) {
      i9 = 14;
      break L13;
     } else if ((i18 | 0) != (-1 | 0)) {
      if ((HEAP32[HEAP32[i17 >> 2] >> 2] | 0) == (i8 | 0)) {
       break;
      }
     }
     i17 = (i13 | 0) == 0 ? i12 : i13;
     i14 = i17 + i15 | 0;
     i13 = i17;
    }
    if ((i16 | 0) == 0) {
     i9 = 14;
    }
   }
  } while (0);
  do {
   if ((i9 | 0) == 14) {
    i9 = 0;
    __ZNK7WebCore14FloatingObject11unsafeCloneEv(i5, i1);
    __ZN7WebCore15FloatingObjects3addENSt3__110unique_ptrINS_14FloatingObjectENS1_14default_deleteIS3_EEEE(i7, i5) | 0;
    i8 = HEAP32[i3 >> 2] | 0;
    HEAP32[i3 >> 2] = 0;
    if ((i8 | 0) == 0) {
     break;
    }
    __ZN3WTF8fastFreeEPv(i8);
   }
  } while (0);
  i2 = HEAP32[i2 + 8 >> 2] | 0;
  if ((i2 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i4;
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
function __ZN3WTF7HashMapIPN7WebCore9RenderBoxENSt3__110unique_ptrINS1_14FloatingObjectENS4_14default_deleteIS6_EEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSC_IS9_EEE4takeERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  i7 = i6 << 3 | 0;
  i8 = 0;
  i9 = i6;
 } else {
  i6 = HEAP32[i2 + 8 >> 2] | 0;
  i10 = HEAP32[i3 >> 2] | 0;
  i3 = i10;
  i11 = i3 + ~(i3 << 15) | 0;
  i3 = (i11 >>> 10 ^ i11) * 9 & -1;
  i11 = i3 >>> 6 ^ i3;
  i3 = i11 + ~(i11 << 11) | 0;
  i11 = i3 >>> 16 ^ i3;
  i3 = i11 & i6;
  i12 = i5 + (i3 << 3) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  L4 : do {
   if ((i13 | 0) == (i10 | 0)) {
    i14 = i12;
   } else {
    i15 = (i11 >>> 23) + ~i11 | 0;
    i16 = i15 << 12 ^ i15;
    i15 = i16 >>> 7 ^ i16;
    i16 = i15 << 2 ^ i15;
    i15 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i17 = i3;
    i18 = i13;
    while (1) {
     if ((i18 | 0) == 0) {
      i14 = 0;
      break L4;
     }
     i19 = (i16 | 0) == 0 ? i15 : i16;
     i20 = i19 + i17 & i6;
     i21 = i5 + (i20 << 3) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i10 | 0)) {
      i14 = i21;
      break;
     } else {
      i16 = i19;
      i17 = i20;
      i18 = i22;
     }
    }
   }
  } while (0);
  i10 = HEAP32[i2 + 4 >> 2] | 0;
  i7 = (i14 | 0) == 0 ? i5 + (i10 << 3) | 0 : i14;
  i8 = i5;
  i9 = i10;
 }
 i10 = i2 + 4 | 0;
 if ((i7 | 0) == (i8 + (i9 << 3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i9 = i7 + 4 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i5 = i2 | 0;
 do {
  if ((i7 | 0) != ((HEAP32[i4 >> 2] | 0) + (HEAP32[i10 >> 2] << 3) | 0)) {
   HEAP32[i9 >> 2] = 0;
   HEAP32[i7 >> 2] = -1;
   i14 = i2 + 16 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   i14 = i2 + 12 | 0;
   i6 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i6;
   i14 = HEAP32[i10 >> 2] | 0;
   if (!((i6 * 6 & -1 | 0) < (i14 | 0) & (i14 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPN7WebCore9RenderBoxENS_12KeyValuePairIS3_NSt3__110unique_ptrINS1_14FloatingObjectENS5_14default_deleteIS7_EEEEEENS_24KeyValuePairKeyExtractorISB_EENS_7PtrHashIS3_EENS_7HashMapIS3_SA_SF_NS_10HashTraitsIS3_EENSH_ISA_EEE18KeyValuePairTraitsESI_E6rehashEiPSB_(i5, (i14 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i8;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore9RenderBoxES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
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
function __ZNK7WebCore15RenderBlockFlow11lineAtIndexEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 20 >> 2] & 2097152 | 0) != 0) {
  i4 = HEAP32[i1 + 104 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i3 = 0;
   return i3 | 0;
  } else {
   i5 = i2;
   i6 = i4;
  }
  while (1) {
   if ((i5 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i6 + 52 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i3 = 0;
    i7 = 32;
    break;
   } else {
    i5 = i5 - 1 | 0;
    i6 = i4;
   }
  }
  if ((i7 | 0) == 32) {
   return i3 | 0;
  }
  i3 = i6;
  return i3 | 0;
 }
 i6 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i8 = i6;
 }
 while (1) {
  if ((HEAP32[i8 + 20 >> 2] & 768 | 0) != 256) {
   if ((HEAP32[i8 + 24 >> 2] & 32 | 0) != 0) {
    break;
   }
  }
  i6 = HEAP32[i8 + 16 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i3 = 0;
   i7 = 35;
   break;
  } else {
   i8 = i6;
  }
 }
 if ((i7 | 0) == 35) {
  return i3 | 0;
 }
 if ((i8 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i9 = i8;
 }
 L28 : while (1) {
  i8 = i9;
  i6 = HEAP32[i9 + 20 >> 2] | 0;
  do {
   if (!((i6 & 64 | 0) != 0 | (i6 & 25165824 | 0) == 16777216)) {
    if ((i6 & 768 | 0) == 256) {
     i10 = HEAP32[(HEAP32[i9 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i10 = HEAP32[i9 + 36 >> 2] | 0;
    }
    if ((HEAP32[i10 + 48 >> 2] & 31 | 0) == 3) {
     break;
    }
    if ((HEAP8[(HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 4 >> 2] | 0) + 17 | 0] | 0) != 0) {
     break;
    }
    i1 = __ZNK7WebCore15RenderBlockFlow11lineAtIndexEi(i8, i2) | 0;
    if ((i1 | 0) != 0) {
     i3 = i1;
     i7 = 26;
     break L28;
    }
   }
  } while (0);
  i8 = HEAP32[i9 + 16 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i3 = 0;
   i7 = 33;
   break;
  } else {
   i11 = i8;
  }
  while (1) {
   if ((HEAP32[i11 + 20 >> 2] & 768 | 0) != 256) {
    if ((HEAP32[i11 + 24 >> 2] & 32 | 0) != 0) {
     break;
    }
   }
   i8 = HEAP32[i11 + 16 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i3 = 0;
    i7 = 34;
    break L28;
   } else {
    i11 = i8;
   }
  }
  if ((i11 | 0) == 0) {
   i3 = 0;
   i7 = 30;
   break;
  } else {
   i9 = i11;
  }
 }
 if ((i7 | 0) == 26) {
  return i3 | 0;
 } else if ((i7 | 0) == 34) {
  return i3 | 0;
 } else if ((i7 | 0) == 30) {
  return i3 | 0;
 } else if ((i7 | 0) == 33) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore15RenderBlockFlow31markSiblingsWithFloatsForLayoutEPNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i3 + 20 | 0;
 i3 = (i2 | 0) == 0;
 i5 = i4;
 while (1) {
  i4 = HEAP32[i5 + 20 >> 2] | 0;
  do {
   if ((i4 & 768 | 0) != 256) {
    if ((HEAP32[i5 + 24 >> 2] & 32 | 0) == 0) {
     break;
    }
    if ((i4 & 64 | 0) != 0 | (i4 & 25165824 | 0) == 16777216) {
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 972 >> 2] & 511](i5) | 0) {
     break;
    }
    i6 = i5;
    i7 = HEAP32[i1 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    i8 = i5 + 96 | 0;
    i9 = i7;
    while (1) {
     i7 = HEAP32[HEAP32[i9 >> 2] >> 2] | 0;
     L17 : do {
      if (i3 | (i7 | 0) == (i2 | 0)) {
       i10 = HEAP32[i8 >> 2] | 0;
       if ((i10 | 0) == 0) {
        break;
       }
       i11 = HEAP32[i10 >> 2] | 0;
       if ((i11 | 0) == 0) {
        break;
       }
       i12 = HEAP32[i10 + 8 >> 2] | 0;
       i10 = i7;
       i13 = i10 + ~(i10 << 15) | 0;
       i10 = (i13 >>> 10 ^ i13) * 9 & -1;
       i13 = i10 >>> 6 ^ i10;
       i10 = i13 + ~(i13 << 11) | 0;
       i13 = i10 >>> 16 ^ i10;
       i10 = (i13 >>> 23) + ~i13 | 0;
       i14 = i10 << 12 ^ i10;
       i10 = i14 >>> 7 ^ i14;
       i14 = i10 << 2 ^ i10;
       i10 = i14 >>> 20 ^ i14 | 1;
       i14 = i13;
       i13 = 0;
       while (1) {
        i15 = i14 & i12;
        i16 = i11 + (i15 << 2) | 0;
        i17 = HEAP32[i16 >> 2] | 0;
        i18 = i17;
        if ((i18 | 0) == 0) {
         break L17;
        } else if ((i18 | 0) != (-1 | 0)) {
         if ((HEAP32[HEAP32[i17 >> 2] >> 2] | 0) == (i7 | 0)) {
          break;
         }
        }
        i17 = (i13 | 0) == 0 ? i10 : i13;
        i14 = i17 + i15 | 0;
        i13 = i17;
       }
       if ((i16 | 0) == 0) {
        break;
       }
       __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i6, i7, 1);
      }
     } while (0);
     i9 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
    }
   }
  } while (0);
  i5 = HEAP32[i5 + 16 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore15RenderBlockFlow18nextPageLogicalTopENS_10LayoutUnitENS0_16PageBoundaryRuleE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
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
 i12 = HEAP32[i3 >> 2] | 0;
 i3 = i2 + 20 | 0;
 do {
  if ((HEAP32[i3 >> 2] & 805306368 | 0) == 0) {
   i13 = 3;
  } else {
   i14 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0;
   if ((i14 | 0) == 0) {
    i13 = 3;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i9, i2 | 0);
   HEAP32[i8 >> 2] = (HEAP32[i9 >> 2] | 0) + i12;
   __ZN7WebCore16RenderFlowThread26pageLogicalHeightForOffsetENS_10LayoutUnitE(i10, i14, i8);
   i15 = HEAP32[i10 >> 2] | 0;
  }
 } while (0);
 if ((i13 | 0) == 3) {
  i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2] | 0;
  HEAP32[i10 >> 2] = i8;
  i15 = i8;
 }
 if ((i15 | 0) == 0) {
  HEAP32[i1 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i6, i2 | 0);
 i15 = (HEAP32[i6 >> 2] | 0) + i12 | 0;
 do {
  if ((HEAP32[i3 >> 2] & 805306368 | 0) == 0) {
   i13 = 9;
  } else {
   i6 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0;
   if ((i6 | 0) == 0) {
    i13 = 9;
    break;
   }
   HEAP32[i7 >> 2] = i15;
   __ZN7WebCore16RenderFlowThread35pageRemainingLogicalHeightForOffsetENS_10LayoutUnitENS_15RenderBlockFlow16PageBoundaryRuleE(i11, i6, i7, 1);
  }
 } while (0);
 if ((i13 | 0) == 9) {
  i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2] | 0;
  HEAP32[i11 >> 2] = (i13 - ((i15 | 0) % (i13 | 0) & -1) | 0) % (i13 | 0) & -1;
 }
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = (HEAP32[((HEAP32[i11 >> 2] | 0) != 0 ? i11 : i10) >> 2] | 0) + i12;
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i1 >> 2] = (HEAP32[i11 >> 2] | 0) + i12;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow20removeFloatingObjectERNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 96 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK3WTF11ListHashSetINSt3__110unique_ptrIN7WebCore14FloatingObjectENS1_14default_deleteIS4_EEEELj4ENS3_27FloatingObjectHashFunctionsEE4findIRNS3_9RenderBoxENS3_28FloatingObjectHashTranslatorEEENS_24ListHashSetConstIteratorIS7_Lj4ES8_EERKT_(i4, i6 | 0, i2);
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 & 2097152 | 0) != 0) {
   i6 = (i2 & 8192 | 0) == 0;
   i7 = i4 + 12 | 0;
   i8 = i4 + 8 | 0;
   i9 = HEAP32[(i6 ? i8 : i7) >> 2] | 0;
   if (i6) {
    i10 = (HEAP32[i4 + 16 >> 2] | 0) + (HEAP32[i8 >> 2] | 0) | 0;
   } else {
    i10 = (HEAP32[i4 + 20 >> 2] | 0) + (HEAP32[i7 >> 2] | 0) | 0;
   }
   if ((i10 | 0) < 0 | (i10 | 0) < (i9 | 0) | (i9 | 0) == 2147483647) {
    i11 = 2147483647;
   } else {
    i7 = i9 + 1 | 0;
    i11 = (i10 | 0) < (i7 | 0) ? i7 : i10;
   }
   i7 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     if ((i2 & 1 | 0) != 0) {
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 100 >> 2] & 127](i7 | 0, 1);
    }
   } while (0);
   if ((i11 | 0) <= 0) {
    break;
   }
   i7 = HEAP32[i1 + 108 >> 2] | 0;
   i9 = i7;
   L21 : do {
    if ((i7 | 0) == 0 | (i11 | 0) == 2147483647) {
     i12 = i9;
    } else {
     i8 = i9;
     i6 = i9;
     while (1) {
      if ((HEAP32[i8 + 84 >> 2] | 0) < (i11 | 0)) {
       i12 = i6;
       break L21;
      }
      i13 = HEAP32[i8 + 48 >> 2] | 0;
      if ((i13 | 0) == 0) {
       i12 = i8;
       break;
      } else {
       i6 = i8;
       i8 = i13;
      }
     }
    }
   } while (0);
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i12;
   }
   while (1) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 100 >> 2] & 127](i14 | 0, 1);
    i14 = HEAP32[i14 + 48 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore15FloatingObjects6removeEPNS_14FloatingObjectE(HEAP32[i5 >> 2] | 0, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15RenderBlockFlow24fitBorderToLinesIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
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
 if ((HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 64 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i14 = i1 | 0;
 if (__ZNK7WebCore9RenderBox16hasOverrideWidthEv(i14) | 0) {
  STACKTOP = i2;
  return;
 }
 i15 = i6 | 0;
 HEAP32[i15 >> 2] = 2147483647;
 i16 = i7 | 0;
 HEAP32[i16 >> 2] = -2147483648;
 __ZNK7WebCore9RenderBox11clientWidthEv(i3, i14);
 i17 = i1 | 0;
 i18 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 712 >> 2] & 127](i4, i17);
 i19 = (HEAP32[i3 >> 2] | 0) - (HEAP32[i4 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 716 >> 2] & 127](i5, i17);
 i4 = i19 - (HEAP32[i5 >> 2] | 0) | 0;
 HEAP32[i8 >> 2] = 0;
 __ZNK7WebCore15RenderBlockFlow18adjustForBorderFitENS_10LayoutUnitERS1_S2_(i1, i8, i6, i7);
 i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 744 >> 2] & 511](i17) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 712 >> 2] & 127](i10, i17);
 i17 = (HEAP32[i10 >> 2] | 0) + i8 | 0;
 HEAP32[i9 >> 2] = i17;
 i8 = i17 + i4 | 0;
 HEAP32[i11 >> 2] = i8;
 i10 = i9;
 i9 = (i17 | 0) < (HEAP32[i15 >> 2] | 0) ? i6 : i10;
 i6 = i11;
 i11 = HEAP32[((HEAP32[i9 >> 2] | 0) < (i8 | 0) ? i9 : i6) >> 2] | 0;
 HEAP32[i15 >> 2] = i11;
 i15 = (HEAP32[i16 >> 2] | 0) < (i8 | 0) ? i7 : i6;
 i6 = HEAP32[((i17 | 0) < (HEAP32[i15 >> 2] | 0) ? i15 : i10) >> 2] | 0;
 HEAP32[i16 >> 2] = i6;
 i16 = i6 - i11 | 0;
 if ((i16 | 0) == (i4 | 0)) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i12 >> 2] = i16;
 __ZN7WebCore9RenderBox30setOverrideLogicalContentWidthENS_10LayoutUnitE(i14, i12);
 i12 = HEAP32[(HEAP32[i1 >> 2] | 0) + 1020 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 FUNCTION_TABLE_viii[i12 & 127](i1, 0, i13);
 __ZN7WebCore9RenderBox32clearOverrideLogicalContentWidthEv(i14);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15RenderBlockFlow15clearTruncationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  return;
 }
 do {
  if ((HEAP32[i1 + 20 >> 2] & 2097152 | 0) != 0) {
   i2 = i1 + 92 | 0;
   if ((HEAP32[i2 >> 2] & 268435456 | 0) == 0) {
    break;
   }
   __ZN7WebCore15RenderBlockFlow15ensureLineBoxesEv(i1);
   HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -268435457;
   i2 = HEAP32[i1 + 104 >> 2] | 0;
   if ((i2 | 0) == 0) {
    return;
   } else {
    i3 = i2;
   }
   while (1) {
    __ZN7WebCore13RootInlineBox15clearTruncationEv(i3);
    i3 = HEAP32[i3 + 52 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break;
    }
   }
   return;
  }
 } while (0);
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i4 = i3;
 }
 while (1) {
  if ((HEAP32[i4 + 20 >> 2] & 768 | 0) != 256) {
   if ((HEAP32[i4 + 24 >> 2] & 32 | 0) != 0) {
    break;
   }
  }
  i3 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i5 = 27;
   break;
  } else {
   i4 = i3;
  }
 }
 if ((i5 | 0) == 27) {
  return;
 }
 if ((i4 | 0) == 0) {
  return;
 } else {
  i6 = i4;
 }
 L25 : while (1) {
  i4 = i6;
  i3 = HEAP32[i6 + 20 >> 2] | 0;
  do {
   if (!((i3 & 64 | 0) != 0 | (i3 & 25165824 | 0) == 16777216)) {
    if ((i3 & 768 | 0) == 256) {
     i7 = HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i7 = HEAP32[i6 + 36 >> 2] | 0;
    }
    if ((HEAP32[i7 + 48 >> 2] & 31 | 0) == 3) {
     break;
    }
    if ((HEAP8[(HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 4 >> 2] | 0) + 17 | 0] | 0) != 0) {
     break;
    }
    __ZN7WebCore15RenderBlockFlow15clearTruncationEv(i4);
   }
  } while (0);
  i4 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i5 = 26;
   break;
  } else {
   i8 = i4;
  }
  while (1) {
   if ((HEAP32[i8 + 20 >> 2] & 768 | 0) != 256) {
    if ((HEAP32[i8 + 24 >> 2] & 32 | 0) != 0) {
     break;
    }
   }
   i4 = HEAP32[i8 + 16 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = 25;
    break L25;
   } else {
    i8 = i4;
   }
  }
  if ((i8 | 0) == 0) {
   i5 = 30;
   break;
  } else {
   i6 = i8;
  }
 }
 if ((i5 | 0) == 25) {
  return;
 } else if ((i5 | 0) == 26) {
  return;
 } else if ((i5 | 0) == 30) {
  return;
 }
}
function __ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 3;
 } else {
  if (((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
   i5 = 3;
  }
 }
 do {
  if ((i5 | 0) == 3) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 511](i1 | 0) | 0) {
    break;
   } else {
    i6 = -1;
   }
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] & 2097152 | 0) == 0) {
  i6 = __ZNK7WebCore11RenderBlock17firstLineBaselineEv(i1 | 0) | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i5 | 0) != 0) {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i6 = -1;
   STACKTOP = i2;
   return i6 | 0;
  }
  i5 = i1 | 0;
  i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 752 >> 2] & 511](i5) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 720 >> 2] & 127](i3, i5);
  i5 = (HEAP32[i3 >> 2] | 0) + i4 | 0;
  i6 = i5 + (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 816 >> 2] & 7](i1 | 0, 0, 0, 0, 1) | 0) | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 104 >> 2] | 0) == 0) {
  i6 = -1;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = i1 + 104 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 d7 = +HEAPF32[((HEAP32[i4 + 32 >> 2] & 2048 | 0) == 0 ? i4 + 20 | 0 : i4 + 24 | 0) >> 2];
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
  i8 = HEAP32[i1 + 36 >> 2] | 0;
 } else {
  i8 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1 | 0) | 0;
 }
 i1 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i8) | 0;
 i8 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 56 >> 2] & 32 | 0) == 0;
 i5 = i1 + 4 | 0;
 i4 = _round(+(+HEAPF32[i5 >> 2])) | 0;
 if (i8) {
  i9 = i4;
 } else {
  i8 = i1 + 8 | 0;
  i1 = (_round(+(+HEAPF32[i8 >> 2])) | 0) + i4 | 0;
  i4 = _round(+(+HEAPF32[i5 >> 2])) | 0;
  i9 = i1 + (((_round(+(+HEAPF32[i8 >> 2])) | 0) + i4 | 0) / -2 & -1) | 0;
 }
 i6 = ~~(d7 + +(i9 | 0));
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore15RenderBlockFlow11hasNextPageENS_10LayoutUnitENS0_16PageBoundaryRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) == 0) {
  i11 = 1;
  STACKTOP = i4;
  return i11 | 0;
 }
 i12 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
 if ((i12 | 0) == 0) {
  i11 = 1;
  STACKTOP = i4;
  return i11 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 864 >> 2] & 127](i6, i1 | 0);
 i13 = (HEAP32[i2 >> 2] | 0) + (HEAP32[i6 >> 2] | 0) | 0;
 i6 = i1 | 0;
 HEAP32[i7 >> 2] = i13;
 i1 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i12, i6, i7, 1, 0) | 0;
 if ((i1 | 0) == 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 if (!(__ZNK7WebCore12RenderRegion12isLastRegionEv(i1) | 0)) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  __ZNK7WebCore16RenderFlowThread20getRegionRangeForBoxEPKNS_9RenderBoxERPNS_12RenderRegionES6_(i12, i6, i9, i10);
  i11 = (i1 | 0) != (HEAP32[i10 >> 2] | 0);
  STACKTOP = i4;
  return i11 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1192 >> 2] & 511](i1) | 0) {
  i11 = 1;
  STACKTOP = i4;
  return i11 | 0;
 }
 if ((HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 1 | 0) != 0) {
  i11 = 1;
  STACKTOP = i4;
  return i11 | 0;
 }
 if ((i3 | 0) != 1) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 i3 = i5;
 i10 = i1 + 124 | 0;
 HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i8, i1, i5);
 i11 = (i13 | 0) == (HEAP32[i8 >> 2] | 0);
 STACKTOP = i4;
 return i11 | 0;
}
function __ZN7WebCore15RenderBlockFlow37createRenderNamedFlowFragmentIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = i1 + 4 | 0;
 if (!(__ZNK7WebCore8Document17cssRegionsEnabledEv(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 100 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP32[i7 + 28 >> 2] | 0) == 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 152 >> 2] & 511](i4) | 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 36 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 switch (HEAP32[i7 + 48 >> 2] & 31 | 0) {
 case 1:
 case 5:
 case 14:
 case 15:
 case 2:
  {
   break;
  }
 default:
  {
   STACKTOP = i2;
   return;
  }
 }
 if ((HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 288 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = __ZN3WTF10fastMallocEj(192) | 0;
 i8 = i7;
 i9 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore23RenderNamedFlowFragment11createStyleERKNS_11RenderStyleE(i3, HEAP32[i4 >> 2] | 0);
 __ZN7WebCore23RenderNamedFlowFragmentC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i8, i9, i3);
 __ZN7WebCore13RenderElement15initializeStyleEv(i7);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i3 = __ZN3WTF10fastMallocEj(36) | 0;
   __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i3, i1);
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i3;
   if ((i9 | 0) == 0) {
    i10 = i3;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
   i10 = HEAP32[i6 >> 2] | 0;
  } else {
   i10 = i7;
  }
 } while (0);
 i7 = i10 + 28 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i10 | 0);
 }
 HEAP32[i7 >> 2] = i8;
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i8 + 28 >> 2] | 0;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 127](i1 | 0, i11 | 0, 0);
 STACKTOP = i2;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore9RenderBoxENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
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
  i10 = i3 + (i2 << 2) | 0;
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
     i19 = i3 + (i18 << 2) | 0;
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
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
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
 __ZN3WTF9HashTableIPN7WebCore9RenderBoxES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore15RenderBlockFlow24setMaxMarginBeforeValuesENS_10LayoutUnitES1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 + 100 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = i7;
   _llvm_lifetime_start(4, 0, i10 | 0);
   i11 = i1 + 60 | 0;
   i12 = i1 + 36 | 0;
   __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i6, i11, (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   HEAP32[i7 >> 2] = 0;
   i13 = HEAP32[((HEAP32[i6 >> 2] | 0) < 0 ? i7 : i6) >> 2] | 0;
   _llvm_lifetime_end(4, 0, i10 | 0);
   i10 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i10 | 0) == (i13 | 0)) {
     __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i5, i11, (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     i14 = HEAP32[i5 >> 2] | 0;
     if ((HEAP32[i3 >> 2] | 0) != (((i14 | 0) > 0 ? 0 : -i14 | 0) | 0)) {
      break;
     }
     STACKTOP = i4;
     return;
    }
   } while (0);
   i12 = __ZN3WTF10fastMallocEj(36) | 0;
   __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i12, i1);
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i12;
   if ((i11 | 0) == 0) {
    i15 = i12;
    i16 = i10;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
   i15 = HEAP32[i8 >> 2] | 0;
   i16 = i10;
  } else {
   i15 = i9;
   i16 = HEAP32[i2 >> 2] | 0;
  }
 } while (0);
 HEAP32[i15 + 4 >> 2] = i16;
 HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] = HEAP32[i3 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlow23setMaxMarginAfterValuesENS_10LayoutUnitES1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 + 100 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = i7;
   _llvm_lifetime_start(4, 0, i10 | 0);
   i11 = i1 + 60 | 0;
   i12 = i1 + 36 | 0;
   __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i6, i11, (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   HEAP32[i7 >> 2] = 0;
   i13 = HEAP32[((HEAP32[i6 >> 2] | 0) < 0 ? i7 : i6) >> 2] | 0;
   _llvm_lifetime_end(4, 0, i10 | 0);
   i10 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i10 | 0) == (i13 | 0)) {
     __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i5, i11, (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
     i14 = HEAP32[i5 >> 2] | 0;
     if ((HEAP32[i3 >> 2] | 0) != (((i14 | 0) > 0 ? 0 : -i14 | 0) | 0)) {
      break;
     }
     STACKTOP = i4;
     return;
    }
   } while (0);
   i12 = __ZN3WTF10fastMallocEj(36) | 0;
   __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i12, i1);
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i12;
   if ((i11 | 0) == 0) {
    i15 = i12;
    i16 = i10;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
   i15 = HEAP32[i8 >> 2] | 0;
   i16 = i10;
  } else {
   i15 = i9;
   i16 = HEAP32[i2 >> 2] | 0;
  }
 } while (0);
 HEAP32[i15 + 12 >> 2] = i16;
 HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] = HEAP32[i3 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlow21addOverflowFromFloatsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = HEAP32[i8 + 20 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i1 | 0;
 i10 = i1 + 20 | 0;
 i11 = i1 + 36 | 0;
 i1 = i4 | 0;
 i12 = i6 | 0;
 i13 = i7 | 0;
 i14 = i7 + 4 | 0;
 i15 = i5 | 0;
 i16 = i3 | 0;
 i17 = i9;
 while (1) {
  i9 = HEAP32[i17 >> 2] | 0;
  if ((HEAP32[i9 + 28 >> 2] & 8 | 0) != 0) {
   i18 = i9 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   i20 = HEAP32[i9 + 8 >> 2] | 0;
   if ((HEAP32[i10 >> 2] & 8192 | 0) == 0) {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i19 >> 2] | 0) + 784 >> 2] & 127](i4, i19 | 0, HEAP32[i11 >> 2] | 0);
    i21 = HEAP32[i1 >> 2] | 0;
   } else {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 776 >> 2] & 127](i3, i19);
    i21 = HEAP32[i16 >> 2] | 0;
   }
   i22 = HEAP32[i9 + 12 >> 2] | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   if ((HEAP32[i10 >> 2] & 8192 | 0) == 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 768 >> 2] & 127](i6, i9);
    i23 = HEAP32[i12 >> 2] | 0;
   } else {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 784 >> 2] & 127](i5, i9 | 0, HEAP32[i11 >> 2] | 0);
    i23 = HEAP32[i15 >> 2] | 0;
   }
   HEAP32[i13 >> 2] = i21 + i20;
   HEAP32[i14 >> 2] = i23 + i22;
   __ZN7WebCore9RenderBox20addOverflowFromChildEPS0_RKNS_10LayoutSizeE(i8, i19, i7);
  }
  i17 = HEAP32[i17 + 8 >> 2] | 0;
  if ((i17 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15RenderBlockFlow34updateStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 switch ((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 5 & 31 | 0) {
 case 0:
 case 19:
 case 17:
 case 7:
 case 5:
 case 21:
  {
   i12 = HEAP32[i3 >> 2] | 0;
   HEAP32[i7 >> 2] = i12;
   HEAP32[i9 >> 2] = i12;
   __ZN7WebCore15RenderBlockFlow25startAlignedOffsetForLineENS_10LayoutUnitEb(i8, i1, i9, 0);
   __ZN7WebCore15RenderBlockFlow31setStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitES3_(i1, i2, i7, i8);
   STACKTOP = i4;
   return;
  }
 default:
  {}
 }
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i10 >> 2] = i8;
 i3 = i1 | 0;
 HEAP32[i6 >> 2] = i8;
 i8 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i3, i6) | 0;
 i6 = HEAP32[i1 + 36 >> 2] | 0;
 if ((HEAP32[i6 + 40 >> 2] & 1073741824 | 0) == 0) {
  i7 = (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3;
  if ((i7 | 0) == 3 | (i7 | 0) == 0) {
   i13 = i1 + 52 | 0;
  } else {
   i13 = i1 + 56 | 0;
  }
  i7 = HEAP32[i13 >> 2] | 0;
  __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i5, i3, i8);
  HEAP32[i11 >> 2] = i7 - (HEAP32[i5 >> 2] | 0);
 } else {
  __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i11, i3, i8);
 }
 __ZN7WebCore15RenderBlockFlow31setStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitES3_(i1, i2, i10, i11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlow31setStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) != 0) {
   if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0) == 0) {
    break;
   }
   i10 = i1 | 0;
   __ZNK7WebCore11RenderBlock21startOffsetForContentEv(i8, i10);
   HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
   i11 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i10, i7) | 0;
   i12 = HEAP32[i1 + 36 >> 2] | 0;
   if ((HEAP32[i12 + 40 >> 2] & 1073741824 | 0) == 0) {
    i13 = (HEAP32[i12 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i13 | 0) == 3 | (i13 | 0) == 0) {
     i14 = i1 + 52 | 0;
    } else {
     i14 = i1 + 56 | 0;
    }
    i13 = HEAP32[i14 >> 2] | 0;
    __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i6, i10, i11);
    i12 = i13 - (HEAP32[i6 >> 2] | 0) | 0;
    HEAP32[i9 >> 2] = i12;
    i15 = i12;
   } else {
    __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i9, i10, i11);
    i15 = HEAP32[i9 >> 2] | 0;
   }
   i11 = i4 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i8 >> 2] | 0) - i15 + (HEAP32[i11 >> 2] | 0);
  }
 } while (0);
 HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 164 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11RenderBlock21startOffsetForContentEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i2 + 36 >> 2] | 0;
 if ((HEAP32[i9 + 40 >> 2] & 1073741824 | 0) != 0) {
  i10 = i2 | 0;
  i11 = HEAP32[i2 >> 2] | 0;
  if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
   i12 = FUNCTION_TABLE_ii[HEAP32[i11 + 736 >> 2] & 511](i10) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i5, i10);
   HEAP32[i1 >> 2] = (HEAP32[i5 >> 2] | 0) + i12;
   STACKTOP = i3;
   return;
  } else {
   i12 = FUNCTION_TABLE_ii[HEAP32[i11 + 744 >> 2] & 511](i10) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i4, i10);
   HEAP32[i1 >> 2] = (HEAP32[i4 >> 2] | 0) + i12;
   STACKTOP = i3;
   return;
  }
 }
 i12 = (HEAP32[i9 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i12 | 0) == 3 | (i12 | 0) == 0) {
  i13 = i2 + 52 | 0;
 } else {
  i13 = i2 + 56 | 0;
 }
 i12 = HEAP32[i13 >> 2] | 0;
 i13 = i2 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  i4 = FUNCTION_TABLE_ii[HEAP32[i9 + 736 >> 2] & 511](i13) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i7, i13);
  i14 = (HEAP32[i7 >> 2] | 0) + i4 | 0;
 } else {
  i4 = FUNCTION_TABLE_ii[HEAP32[i9 + 744 >> 2] & 511](i13) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i6, i13);
  i14 = (HEAP32[i6 >> 2] | 0) + i4 | 0;
 }
 __ZNK7WebCore11RenderBlock21availableLogicalWidthEv(i8, i2);
 HEAP32[i1 >> 2] = i12 - i14 - (HEAP32[i8 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15RenderBlockFlow17layoutSimpleLinesERNS_10LayoutUnitES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 __ZN7WebCore16SimpleLineLayout6createERNS_15RenderBlockFlowE(i8, i1);
 i9 = i8 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 112 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i8;
 do {
  if ((i11 | 0) == 0) {
   HEAP32[i9 >> 2] = 0;
  } else {
   __ZN3WTF8fastFreeEPv(i11);
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 i9 = HEAP32[i10 >> 2] | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i7, i1 | 0, 0, 0, 1);
 i10 = HEAP32[i9 >> 2] | 0;
 i9 = Math_imul(i10 >>> 0 < 2147483647 >>> 0 ? i10 : 2147483647, HEAP32[i7 >> 2] | 0) | 0;
 i7 = i1 | 0;
 i10 = i1;
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 752 >> 2] & 511](i7) | 0;
 i8 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 720 >> 2] & 127](i6, i7);
 i12 = (HEAP32[i6 >> 2] | 0) + i11 | 0;
 HEAP32[i2 >> 2] = i12;
 i2 = i12 + i9 | 0;
 HEAP32[i3 >> 2] = i2;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 756 >> 2] & 511](i7) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 724 >> 2] & 127](i5, i7);
 i7 = i3 + i2 + (HEAP32[i5 >> 2] | 0) | 0;
 i5 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i7;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 + 52 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
}
function __ZNK3WTF11ListHashSetINSt3__110unique_ptrIN7WebCore14FloatingObjectENS1_14default_deleteIS4_EEEELj4ENS3_27FloatingObjectHashFunctionsEE4findIRNS3_9RenderBoxENS3_28FloatingObjectHashTranslatorEEENS_24ListHashSetConstIteratorIS7_Lj4ES8_EERKT_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   i6 = i5 << 2 | 0;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = i3;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   i8 = (i9 >>> 23) + ~i9 | 0;
   i10 = i8 << 12 ^ i8;
   i8 = i10 >>> 7 ^ i10;
   i10 = i8 << 2 ^ i8;
   i8 = i10 >>> 20 ^ i10 | 1;
   i10 = i9;
   i9 = 0;
   while (1) {
    i11 = i10 & i5;
    i12 = i4 + (i11 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = i13;
    if ((i14 | 0) == 0) {
     i15 = 5;
     break;
    } else if ((i14 | 0) != (-1 | 0)) {
     if ((HEAP32[HEAP32[i13 >> 2] >> 2] | 0) == (i3 | 0)) {
      i15 = 8;
      break;
     }
    }
    i13 = (i9 | 0) == 0 ? i8 : i9;
    i10 = i13 + i11 | 0;
    i9 = i13;
   }
   if ((i15 | 0) == 8) {
    i9 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = (i12 | 0) == 0 ? i4 + (i9 << 2) | 0 : i12;
    i7 = i9;
    break;
   } else if ((i15 | 0) == 5) {
    i9 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = i4 + (i9 << 2) | 0;
    i7 = i9;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == (i4 + (i7 << 2) | 0)) {
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = 0;
  return;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i7;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow19initMaxMarginValuesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i1 + 100 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i11 = i5;
 _llvm_lifetime_start(4, 0, i11 | 0);
 i12 = i1 + 60 | 0;
 i13 = i1 + 36 | 0;
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i4, i12, (HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 HEAP32[i5 >> 2] = 0;
 i1 = HEAP32[((HEAP32[i4 >> 2] | 0) < 0 ? i5 : i4) >> 2] | 0;
 _llvm_lifetime_end(4, 0, i11 | 0);
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i3, i12, (HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 i11 = HEAP32[i3 >> 2] | 0;
 i3 = i7;
 _llvm_lifetime_start(4, 0, i3 | 0);
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i6, i12, (HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 HEAP32[i7 >> 2] = 0;
 i4 = HEAP32[((HEAP32[i6 >> 2] | 0) < 0 ? i7 : i6) >> 2] | 0;
 _llvm_lifetime_end(4, 0, i3 | 0);
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i8, i12, (HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i10 + 4 >> 2] = i1;
 HEAP32[i10 + 8 >> 2] = (i11 | 0) > 0 ? 0 : -i11 | 0;
 HEAP32[i10 + 12 >> 2] = i4;
 HEAP32[i10 + 16 >> 2] = (i13 | 0) > 0 ? 0 : -i13 | 0;
 i13 = (HEAP32[i9 >> 2] | 0) + 32 | 0;
 HEAP8[i13] = HEAP8[i13] & -2;
 i13 = (HEAP32[i9 >> 2] | 0) + 32 | 0;
 HEAP8[i13] = HEAP8[i13] & -3;
 STACKTOP = i2;
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
function __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i1, i2) {
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
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i10 = i9;
 _llvm_lifetime_start(4, 0, i10 | 0);
 i11 = i2 + 60 | 0;
 i12 = i2 + 36 | 0;
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i8, i11, (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 HEAP32[i9 >> 2] = 0;
 i2 = HEAP32[((HEAP32[i8 >> 2] | 0) < 0 ? i9 : i8) >> 2] | 0;
 _llvm_lifetime_end(4, 0, i10 | 0);
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i7, i11, (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 i10 = HEAP32[i7 >> 2] | 0;
 i7 = i6;
 _llvm_lifetime_start(4, 0, i7 | 0);
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i5, i11, (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 HEAP32[i6 >> 2] = 0;
 i8 = HEAP32[((HEAP32[i5 >> 2] | 0) < 0 ? i6 : i5) >> 2] | 0;
 _llvm_lifetime_end(4, 0, i7 | 0);
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i4, i11, (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 i12 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = (i10 | 0) > 0 ? 0 : -i10 | 0;
 HEAP32[i1 + 12 >> 2] = i8;
 HEAP32[i1 + 16 >> 2] = (i12 | 0) > 0 ? 0 : -i12 | 0;
 HEAP32[i1 + 20 >> 2] = -1;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i12 = i1 + 32 | 0;
 HEAP8[i12] = HEAP8[i12] & -8;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15RenderBlockFlow26markLinesDirtyInBlockRangeENS_10LayoutUnitES1_PNS_13RootInlineBoxE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
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
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) >= (i2 | 0)) {
  STACKTOP = i5;
  return;
 }
 i3 = HEAP32[i1 + 108 >> 2] | 0;
 i1 = i3;
 L4 : do {
  if ((i3 | 0) == 0 | (i2 | 0) == 2147483647) {
   i7 = i1;
  } else {
   i8 = i1;
   i9 = i1;
   while (1) {
    if ((HEAP32[i8 + 84 >> 2] | 0) < (i2 | 0)) {
     i7 = i9;
     break L4;
    }
    i10 = HEAP32[i8 + 48 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i7 = i8;
     break;
    } else {
     i9 = i8;
     i8 = i10;
    }
   }
  }
 } while (0);
 if ((i7 | 0) == 0 | (i7 | 0) == (i4 | 0)) {
  STACKTOP = i5;
  return;
 } else {
  i11 = i7;
 }
 while (1) {
  i7 = HEAP32[i11 + 84 >> 2] | 0;
  if (!((i7 | 0) >= (i6 | 0) | (i7 | 0) < 0)) {
   i12 = 11;
   break;
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 100 >> 2] & 127](i11 | 0, 1);
  i7 = HEAP32[i11 + 48 >> 2] | 0;
  i2 = i7;
  if ((i7 | 0) == 0 | (i2 | 0) == (i4 | 0)) {
   i12 = 12;
   break;
  } else {
   i11 = i2;
  }
 }
 if ((i12 | 0) == 11) {
  STACKTOP = i5;
  return;
 } else if ((i12 | 0) == 12) {
  STACKTOP = i5;
  return;
 }
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
function __ZNK7WebCore9RenderBox26logicalRightLayoutOverflowEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  i8 = HEAP32[i2 + 88 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = i2 | 0;
   i10 = i2;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 744 >> 2] & 511](i9) | 0;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 736 >> 2] & 511](i9) | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i4, i2);
   __ZNK7WebCore9RenderBox12clientHeightEv(i5, i2);
   i12 = i11;
   i13 = HEAP32[i4 >> 2] | 0;
  } else {
   i12 = HEAP32[i8 + 4 >> 2] | 0;
   i13 = HEAP32[i8 + 12 >> 2] | 0;
  }
  HEAP32[i1 >> 2] = i12 + i13;
  STACKTOP = i3;
  return;
 } else {
  i13 = HEAP32[i2 + 88 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i12 = i2 | 0;
   i8 = i2;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 744 >> 2] & 511](i12) | 0;
   i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 736 >> 2] & 511](i12) | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i6, i2);
   __ZNK7WebCore9RenderBox12clientHeightEv(i7, i2);
   i14 = i4;
   i15 = HEAP32[i7 >> 2] | 0;
  } else {
   i14 = HEAP32[i13 + 8 >> 2] | 0;
   i15 = HEAP32[i13 + 16 >> 2] | 0;
  }
  HEAP32[i1 >> 2] = i14 + i15;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow23updateMinimumPageHeightENS_10LayoutUnitES1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) != 0) {
   i9 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 1184 >> 2] | 0;
   i11 = i1 | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 864 >> 2] & 127](i7, i11);
   HEAP32[i6 >> 2] = (HEAP32[i2 >> 2] | 0) + (HEAP32[i7 >> 2] | 0);
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
   FUNCTION_TABLE_viiii[i10 & 31](i9, i11, i6, i8);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 4 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i5 >> 2] = i1;
 i3 = i8 + 24 | 0;
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = HEAP32[((i1 | 0) < (HEAP32[i8 >> 2] | 0) ? i3 : i5) >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlow21relayoutToAvoidWidowsERNS_21LayoutStateMaintainerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((HEAP32[i5 + 20 >> 2] | 0) <= -1) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i5 = i2 + 4 | 0;
 i7 = HEAP8[i5] | 0;
 if ((i7 & 2) != 0) {
  do {
   if ((i7 & 8) == 0) {
    i8 = i7;
   } else {
    i9 = i2 | 0;
    i10 = HEAP32[i9 >> 2] | 0;
    i11 = i10 + 192 | 0;
    i12 = (HEAP32[i11 >> 2] | 0) + 12 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    i12 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = i13;
    if ((i12 | 0) != 0) {
     __ZN7WebCore11LayoutStateD1Ev(i12);
     __ZdlPv(i12 | 0);
    }
    __ZN7WebCore10RenderView34popLayoutStateForCurrentFlowThreadEv(i10);
    i10 = HEAP8[i5] | 0;
    if ((i10 & 1) == 0) {
     i8 = i10;
     break;
    }
    i10 = (HEAP32[i9 >> 2] | 0) + 196 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - 1;
    i8 = HEAP8[i5] | 0;
   }
  } while (0);
  HEAP8[i5] = i8 | 4;
 }
 i8 = i1 + 20 | 0;
 HEAP32[i8 >> 2] = HEAP32[i8 >> 2] | 1048576;
 i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + 1020 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 FUNCTION_TABLE_viii[i8 & 127](i1, 0, i4);
 i6 = 1;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZNK7WebCore15RenderBlockFlow31flipFloatForWritingModeForChildEPKNS_14FloatingObjectERKNS_11LayoutPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 i9 = (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i9 | 0) == 3 | (i9 | 0) == 1)) {
  i9 = i4;
  i10 = i1;
  i11 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i10 + 4 >> 2] = i11;
  STACKTOP = i5;
  return;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  i10 = HEAP32[i3 >> 2] | 0;
  i9 = (HEAP32[i2 + 52 >> 2] | 0) + i11 - (HEAP32[i10 + 52 >> 2] | 0) | 0;
  i12 = HEAP32[i3 + 8 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 784 >> 2] & 127](i7, i10 | 0, i8);
  i10 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = i9 - ((HEAP32[i7 >> 2] | 0) + i12 << 1);
  HEAP32[i1 + 4 >> 2] = i10;
  STACKTOP = i5;
  return;
 } else {
  i10 = HEAP32[i3 >> 2] | 0;
  i12 = (HEAP32[i2 + 56 >> 2] | 0) + (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i10 + 56 >> 2] | 0) | 0;
  i4 = HEAP32[i3 + 12 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 784 >> 2] & 127](i6, i10 | 0, i8);
  i8 = i12 - ((HEAP32[i6 >> 2] | 0) + i4 << 1) | 0;
  HEAP32[i1 >> 2] = i11;
  HEAP32[i1 + 4 >> 2] = i8;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore15RenderBlockFlow23pageLogicalTopForOffsetENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 20 >> 2] | 0;
 i7 = (i6 & 8192 | 0) == 0;
 i8 = i2 + 4 | 0;
 i9 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 i10 = HEAP32[(i7 ? i9 + 64 | 0 : i9 + 68 | 0) >> 2] | 0;
 i11 = (HEAP32[i3 >> 2] | 0) + (HEAP32[(i7 ? i9 + 44 | 0 : i9 + 48 | 0) >> 2] | 0) | 0;
 do {
  if ((i6 & 805306368 | 0) == 0) {
   i12 = i9;
  } else {
   i7 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0;
   if ((i7 | 0) == 0) {
    i12 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
    break;
   }
   HEAP32[i5 >> 2] = i11;
   __ZN7WebCore16RenderFlowThread23pageLogicalTopForOffsetENS_10LayoutUnitE(i1, i7, i5);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i5 = HEAP32[i12 + 60 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = i11 - ((i11 - i10 | 0) % (i5 | 0) & -1);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 do {
  if ((HEAP8[i1 + 24 | 0] | 0) < 0) {
   i4 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = 11;
    break;
   }
   i6 = i1 + 20 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 & 64 | 0) != 0 | (i7 & 25165824 | 0) == 16777216) {
    i8 = 0;
   } else {
    i8 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 972 >> 2] & 511](i1 | 0) | 0) & 1 ^ 1;
   }
   HEAP8[H_BASE + 1224 | 0] = i8;
   if (!((HEAP32[i1 + 8 >> 2] | 0) != 0 & (i2 | 0) == 8)) {
    break;
   }
   i7 = i3 + 48 | 0;
   if (((HEAP32[i7 >> 2] ^ HEAP32[i4 + 48 >> 2]) & 29360128 | 0) == 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1024 >> 2] & 511](i1) | 0)) {
    break;
   }
   i4 = HEAP32[i6 >> 2] | 0;
   if ((i4 & 64 | 0) != 0 | (i4 & 25165824 | 0) == 16777216) {
    break;
   }
   i4 = (HEAP32[i7 >> 2] | 0) >>> 22 & 7;
   if (!((i4 | 0) == 6 | (i4 | 0) == 2)) {
    break;
   }
   __ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb(i1, 0, 1);
  } else {
   i5 = 11;
  }
 } while (0);
 if ((i5 | 0) == 11) {
  HEAP8[H_BASE + 1224 | 0] = 0;
 }
 __ZN7WebCore11RenderBlock15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1 | 0, i2, i3);
 return;
}
function __ZN7WebCore15RenderBlockFlow21adjustPositionedBlockERNS_9RenderBoxERKNS0_10MarginInfoE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0) {
   if ((HEAP8[i6 + 9 | 0] | 0) != 0) {
    i7 = 0;
    break;
   }
   i7 = (HEAP8[i6 + 17 | 0] | 0) == 0;
  } else {
   if ((HEAP8[i6 + 25 | 0] | 0) != 0) {
    i7 = 0;
    break;
   }
   i7 = (HEAP8[i6 + 33 | 0] | 0) == 0;
  }
 } while (0);
 i6 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i8 = i1 + 56 | 0;
 } else {
  i8 = i1 + 52 | 0;
 }
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 __ZN7WebCore15RenderBlockFlow34updateStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitE(i1, i2, i5);
 if ((HEAP8[i3 | 0] & 18) == 18) {
  i9 = i6;
 } else {
  i9 = (HEAP32[i3 + 4 >> 2] | 0) + i6 - (HEAP32[i3 + 8 >> 2] | 0) | 0;
 }
 i3 = (HEAP32[i2 + 40 >> 2] | 0) + 168 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i9 | 0)) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i3 >> 2] = i9;
 if (!i7) {
  STACKTOP = i4;
  return;
 }
 i7 = i2 + 20 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 & 4 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i7 >> 2] = i2 | 4;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9RenderBox25logicalLeftLayoutOverflowEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  i8 = HEAP32[i2 + 88 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = i2 | 0;
   i10 = i2;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 744 >> 2] & 511](i9) | 0;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 736 >> 2] & 511](i9) | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i4, i2);
   __ZNK7WebCore9RenderBox12clientHeightEv(i5, i2);
   i12 = i11;
  } else {
   i12 = HEAP32[i8 + 4 >> 2] | 0;
  }
  HEAP32[i1 >> 2] = i12;
  STACKTOP = i3;
  return;
 } else {
  i12 = HEAP32[i2 + 88 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i8 = i2 | 0;
   i11 = i2;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 744 >> 2] & 511](i8) | 0;
   i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 736 >> 2] & 511](i8) | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i6, i2);
   __ZNK7WebCore9RenderBox12clientHeightEv(i7, i2);
   i13 = i5;
  } else {
   i13 = HEAP32[i12 + 8 >> 2] | 0;
  }
  HEAP32[i1 >> 2] = i13;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow19updateLogicalHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 __ZN7WebCore9RenderBox19updateLogicalHeightEv(i1 | 0);
 i5 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i5 + 28 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i7 = i1 + 56 | 0;
 } else {
  i7 = i1 + 52 | 0;
 }
 i5 = HEAP32[i7 >> 2] | 0;
 i7 = i1 | 0;
 i8 = i1;
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 752 >> 2] & 511](i7) | 0;
 i10 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 720 >> 2] & 127](i4, i7);
 i1 = HEAP32[i4 >> 2] | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 756 >> 2] & 511](i7) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 724 >> 2] & 127](i3, i7);
 i7 = i5 - i9 - i1 - i4 - (HEAP32[i3 >> 2] | 0) | 0;
 i3 = (i7 | 0) > 0 ? i7 : 0;
 i7 = (HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  HEAP32[i6 + 56 >> 2] = i3;
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 + 52 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow19hasOverhangingFloatERNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = i1 + 20 | 0;
 if ((HEAP32[i7 >> 2] & 4194304 | 0) != 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZNK3WTF11ListHashSetINSt3__110unique_ptrIN7WebCore14FloatingObjectENS1_14default_deleteIS4_EEEELj4ENS3_27FloatingObjectHashFunctionsEE4findIRNS3_9RenderBoxENS3_28FloatingObjectHashTranslatorEEENS_24ListHashSetConstIteratorIS7_Lj4ES8_EERKT_(i4, i5 | 0, i2);
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i7 >> 2] & 8192 | 0) == 0) {
  i8 = (HEAP32[i4 + 16 >> 2] | 0) + (HEAP32[i4 + 8 >> 2] | 0) | 0;
 } else {
  i8 = (HEAP32[i4 + 20 >> 2] | 0) + (HEAP32[i4 + 12 >> 2] | 0) | 0;
 }
 i4 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  i9 = i1 + 56 | 0;
 } else {
  i9 = i1 + 52 | 0;
 }
 i6 = (i8 | 0) > (HEAP32[i9 >> 2] | 0);
 STACKTOP = i3;
 return i6 | 0;
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
function __ZNK7WebCore15RenderBlockFlow35pageRemainingLogicalHeightForOffsetENS_10LayoutUnitENS0_16PageBoundaryRuleE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i6, i2 | 0);
 i8 = i3 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) + (HEAP32[i8 >> 2] | 0) | 0;
 HEAP32[i8 >> 2] = i3;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 805306368 | 0) != 0) {
   i8 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = i3;
   __ZN7WebCore16RenderFlowThread35pageRemainingLogicalHeightForOffsetENS_10LayoutUnitENS_15RenderBlockFlow16PageBoundaryRuleE(i1, i8, i7, i4);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2] | 0;
 i2 = i7 - ((i3 | 0) % (i7 | 0) & -1) | 0;
 if ((i4 | 0) == 1) {
  i9 = (i2 | 0) % (i7 | 0) & -1;
 } else {
  i9 = i2;
 }
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore15RenderBlockFlow37logicalRightOffsetForPositioningFloatENS_10LayoutUnitES1_bPS1_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
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
 i12 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i2 + 96 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i13 = i12;
  } else {
   if ((HEAP32[i4 + 52 >> 2] | 0) == 0) {
    i13 = i12;
    break;
   }
   HEAP32[i9 >> 2] = i12;
   HEAP32[i10 >> 2] = HEAP32[i3 >> 2];
   __ZN7WebCore15FloatingObjects37logicalRightOffsetForPositioningFloatENS_10LayoutUnitES1_PS1_(i8, i4, i9, i10, i6);
   i13 = HEAP32[i8 >> 2] | 0;
  }
 } while (0);
 HEAP32[i11 >> 2] = i13;
 __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i1, i2 | 0, i11, i5);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore15RenderBlockFlow31mustDiscardMarginBeforeForChildERKNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 36 >> 2] | 0;
   if (((HEAP32[i4 + 44 >> 2] ^ HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    break;
   }
   i5 = (HEAP32[i2 + 24 >> 2] & 32 | 0) == 0;
   i6 = (HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728;
   if (i5 | i6) {
    i7 = i6 | i5 ^ 1;
    return i7 | 0;
   }
   i5 = HEAP32[i2 + 100 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i7 = 0;
    return i7 | 0;
   }
   i7 = (HEAP8[i5 + 32 | 0] & 1) != 0;
   return i7 | 0;
  }
 } while (0);
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i1 + 20 >> 2] & 8192 | 0) != 0) {
  i7 = 0;
  return i7 | 0;
 }
 i1 = (HEAP32[i2 + 24 >> 2] & 32 | 0) == 0;
 i3 = (HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 536870912;
 if (i1 | i3) {
  i7 = i3 | i1 ^ 1;
  return i7 | 0;
 }
 i1 = HEAP32[i2 + 100 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 i7 = (HEAP8[i1 + 32 | 0] & 2) != 0;
 return i7 | 0;
}
function __ZNK7WebCore15RenderBlockFlow30mustDiscardMarginAfterForChildERKNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 36 >> 2] | 0;
   if (((HEAP32[i4 + 44 >> 2] ^ HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    break;
   }
   i5 = (HEAP32[i2 + 24 >> 2] & 32 | 0) == 0;
   i6 = (HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 536870912;
   if (i5 | i6) {
    i7 = i6 | i5 ^ 1;
    return i7 | 0;
   }
   i5 = HEAP32[i2 + 100 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i7 = 0;
    return i7 | 0;
   }
   i7 = (HEAP8[i5 + 32 | 0] & 2) != 0;
   return i7 | 0;
  }
 } while (0);
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i1 + 20 >> 2] & 8192 | 0) != 0) {
  i7 = 0;
  return i7 | 0;
 }
 i1 = (HEAP32[i2 + 24 >> 2] & 32 | 0) == 0;
 i3 = (HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728;
 if (i1 | i3) {
  i7 = i3 | i1 ^ 1;
  return i7 | 0;
 }
 i1 = HEAP32[i2 + 100 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 i7 = (HEAP8[i1 + 32 | 0] & 1) != 0;
 return i7 | 0;
}
function __ZNK7WebCore15RenderBlockFlow36logicalLeftOffsetForPositioningFloatENS_10LayoutUnitES1_bPS1_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
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
 i12 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i2 + 96 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i13 = i12;
  } else {
   if ((HEAP32[i4 + 48 >> 2] | 0) == 0) {
    i13 = i12;
    break;
   }
   HEAP32[i9 >> 2] = i12;
   HEAP32[i10 >> 2] = HEAP32[i3 >> 2];
   __ZN7WebCore15FloatingObjects36logicalLeftOffsetForPositioningFloatENS_10LayoutUnitES1_PS1_(i8, i4, i9, i10, i6);
   i13 = HEAP32[i8 >> 2] | 0;
  }
 } while (0);
 HEAP32[i11 >> 2] = i13;
 __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i1, i2 | 0, i11, i5);
 STACKTOP = i7;
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
function __ZNK7WebCore15RenderBlockFlow30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
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
 i10 = HEAP32[i2 + 96 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   if ((HEAP32[i10 + 52 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
   __ZN7WebCore15FloatingObjects18logicalRightOffsetENS_10LayoutUnitES1_S1_(i1, i10, i7, i8, i9);
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore15RenderBlockFlow29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
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
 i10 = HEAP32[i2 + 96 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   if ((HEAP32[i10 + 48 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i8 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
   __ZN7WebCore15FloatingObjects17logicalLeftOffsetENS_10LayoutUnitES1_S1_(i1, i10, i7, i8, i9);
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore15RenderBlockFlow24lowestFloatLogicalBottomENS_14FloatingObject4TypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = HEAP32[i2 + 96 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i5 = HEAP32[i4 + 20 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
 } else {
  i4 = i3 & 3;
  i3 = i2 + 20 | 0;
  i2 = i5;
  i5 = 0;
  while (1) {
   i7 = HEAP32[i2 >> 2] | 0;
   i8 = HEAP32[i7 + 28 >> 2] | 0;
   do {
    if ((i8 & 16 | 0) == 0) {
     i9 = i5;
    } else {
     if ((i4 & i8 | 0) == 0) {
      i9 = i5;
      break;
     }
     if ((HEAP32[i3 >> 2] & 8192 | 0) == 0) {
      i10 = (HEAP32[i7 + 16 >> 2] | 0) + (HEAP32[i7 + 8 >> 2] | 0) | 0;
     } else {
      i10 = (HEAP32[i7 + 20 >> 2] | 0) + (HEAP32[i7 + 12 >> 2] | 0) | 0;
     }
     i9 = (i5 | 0) < (i10 | 0) ? i10 : i5;
    }
   } while (0);
   i7 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i6 = i9;
    break;
   } else {
    i2 = i7;
    i5 = i9;
   }
  }
 }
 HEAP32[i1 >> 2] = i6;
 return;
}
function __ZN7WebCore15RenderBlockFlow12setPageBreakENS_10LayoutUnitES1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 1180 >> 2] | 0;
 i10 = i1 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 864 >> 2] & 127](i6, i10);
 HEAP32[i5 >> 2] = (HEAP32[i2 >> 2] | 0) + (HEAP32[i6 >> 2] | 0);
 HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
 FUNCTION_TABLE_viiii[i9 & 31](i8, i10, i5, i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlow15ensureLineBoxesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 92 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | -1073741824;
 i5 = i1 + 112 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i6);
 i6 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i6 & 29 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i4 >> 2] = 0;
  __ZN7WebCore15RenderBlockFlow15layoutLineBoxesEbRNS_10LayoutUnitES2_(i1, 0, i3, i4);
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 880 >> 2] & 63](i1);
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore15RenderBlockFlow15layoutLineBoxesEbRNS_10LayoutUnitES2_(i1, 0, i3, i4);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 880 >> 2] & 63](i1);
 if ((i6 & 2 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i1 | 0);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore15RenderBlockFlow13containsFloatERNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = i2;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 i3 = (i6 >>> 23) + ~i6 | 0;
 i7 = i3 << 12 ^ i3;
 i3 = i7 >>> 7 ^ i7;
 i7 = i3 << 2 ^ i3;
 i3 = i7 >>> 20 ^ i7 | 1;
 i7 = i6;
 i6 = 0;
 while (1) {
  i8 = i7 & i5;
  i9 = i1 + (i8 << 2) | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i10;
  if ((i11 | 0) == 0) {
   i12 = 0;
   break;
  } else if ((i11 | 0) != (-1 | 0)) {
   if ((HEAP32[HEAP32[i10 >> 2] >> 2] | 0) == (i2 | 0)) {
    i12 = i9;
    break;
   }
  }
  i9 = (i6 | 0) == 0 ? i3 : i6;
  i7 = i9 + i8 | 0;
  i6 = i9;
 }
 i4 = (i12 | 0) != 0;
 return i4 | 0;
}
function __ZN7WebCore15RenderBlockFlow34marginOffsetForSelfCollapsingBlockEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i7;
 do {
  if ((i7 | 0) != 0) {
   i9 = HEAP32[i2 + 36 >> 2] | 0;
   if ((HEAP32[i9 + 48 >> 2] & 3145728 | 0) == 0) {
    break;
   }
   i10 = i2 | 0;
   i11 = (HEAP32[i9 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i11 | 0) == 3 | (i11 | 0) == 0) {
    HEAP32[i4 >> 2] = HEAP32[i2 + 56 >> 2];
   } else {
    HEAP32[i4 >> 2] = HEAP32[i2 + 52 >> 2];
   }
   __ZN7WebCore15RenderBlockFlow13getClearDeltaERNS_9RenderBoxENS_10LayoutUnitE(i5, i8, i10, i4);
   if ((HEAP32[i5 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore15RenderBlockFlow20marginValuesForChildERNS_9RenderBoxE(i6, i2, i10);
   HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15RenderBlockFlow15computeOverflowENS_10LayoutUnitEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i1 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 __ZN7WebCore11RenderBlock15computeOverflowENS_10LayoutUnitEb(i6, i5, i3);
 if ((HEAP32[i1 + 20 >> 2] & 4194304 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if (!i3) {
   i5 = HEAP32[i1 + 4 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i5 | 0)) {
    break;
   }
   if (__ZNK7WebCore11RenderBlock33expandsToEncloseOverhangingFloatsEv(i6) | 0) {
    break;
   }
   if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i1 | 0) | 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore15RenderBlockFlow21addOverflowFromFloatsEv(i1);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15RenderBlockFlow26pageLogicalHeightForOffsetENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 805306368 | 0) != 0) {
   i7 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i6, i2 | 0);
   HEAP32[i5 >> 2] = (HEAP32[i6 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
   __ZN7WebCore16RenderFlowThread26pageLogicalHeightForOffsetENS_10LayoutUnitE(i1, i7, i5);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 60 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlow20layoutInlineChildrenEbRNS_10LayoutUnitES2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i1 + 92 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i6 >>> 0 < 1073741824 >>> 0) {
  i7 = __ZN7WebCore16SimpleLineLayout9canUseForERKNS_15RenderBlockFlowE(i1) | 0;
  i8 = HEAP32[i5 >> 2] & 1073741823 | (i7 ? 1073741824 : -2147483648);
  HEAP32[i5 >> 2] = i8;
  i9 = i8;
 } else {
  i9 = i6;
 }
 if ((i9 & -1073741824 | 0) == 1073741824) {
  __ZN7WebCore17RenderLineBoxList15deleteLineBoxesEv(i1 + 104 | 0);
  __ZN7WebCore10RenderText37deleteLineBoxesBeforeSimpleLineLayoutEv(HEAP32[i1 + 28 >> 2] | 0);
  __ZN7WebCore15RenderBlockFlow17layoutSimpleLinesERNS_10LayoutUnitES2_(i1, i3, i4);
  return;
 }
 i9 = i1 + 112 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN7WebCore15RenderBlockFlow15layoutLineBoxesEbRNS_10LayoutUnitES2_(i1, i2, i3, i4);
 return;
}
function __ZN7WebCore15RenderBlockFlow19adjustFloatingBlockERKNS0_10MarginInfoE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((HEAP8[i2 | 0] & 18) == 18) {
  i3 = 0;
 } else {
  i3 = (HEAP32[i2 + 4 >> 2] | 0) - (HEAP32[i2 + 8 >> 2] | 0) | 0;
 }
 i2 = i1 + 36 | 0;
 i4 = (HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  i5 = i1 + 56 | 0;
 } else {
  i5 = i1 + 52 | 0;
 }
 i6 = (HEAP32[i5 >> 2] | 0) + i3 | 0;
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i6;
 } else {
  HEAP32[i1 + 52 >> 2] = i6;
 }
 __ZN7WebCore15RenderBlockFlow17positionNewFloatsEv(i1) | 0;
 i6 = (HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i7 = i1 + 56 | 0;
 } else {
  i7 = i1 + 52 | 0;
 }
 i2 = (HEAP32[i7 >> 2] | 0) - i3 | 0;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i2;
  return;
 } else {
  HEAP32[i1 + 52 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow26removeFloatingObjectsBelowEPNS_14FloatingObjectEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1024 >> 2] & 511](i1) | 0)) {
  return;
 }
 i4 = i1 + 96 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + 24 | 0;
 i7 = i1 + 20 | 0;
 i1 = i5 + 12 | 0;
 while (1) {
  i5 = HEAP32[HEAP32[i6 >> 2] >> 2] | 0;
  if ((i5 | 0) == (i2 | 0)) {
   i8 = 10;
   break;
  }
  if ((HEAP32[i5 + 28 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[((HEAP32[i7 >> 2] & 8192 | 0) == 0 ? i5 + 8 | 0 : i5 + 12 | 0) >> 2] | 0) < (i3 | 0)) {
    i8 = 8;
    break;
   }
  }
  __ZN7WebCore15FloatingObjects6removeEPNS_14FloatingObjectE(HEAP32[i4 >> 2] | 0, i5);
  if ((HEAP32[i1 >> 2] | 0) == 0) {
   i8 = 11;
   break;
  }
 }
 if ((i8 | 0) == 8) {
  return;
 } else if ((i8 | 0) == 10) {
  return;
 } else if ((i8 | 0) == 11) {
  return;
 }
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
function __ZN7WebCore15RenderBlockFlow21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0;
 i7 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = __ZNK7WebCore17RenderLineBoxList7hitTestEPNS_20RenderBoxModelObjectERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 + 104 | 0, i1 | 0, i2, i3, i4, i5, i6) | 0;
  return i8 | 0;
 } else {
  i8 = __ZN7WebCore16SimpleLineLayout11hitTestFlowERKNS_15RenderBlockFlowERKNS0_6LayoutERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i7, i2, i3, i4, i5, i6) | 0;
  return i8 | 0;
 }
 return 0;
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
function __ZN7WebCore15RenderBlockFlow25setMustDiscardMarginAfterEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 536870912) {
  return;
 }
 i3 = i1 + 100 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   if (!i2) {
    return;
   }
   i5 = __ZN3WTF10fastMallocEj(36) | 0;
   __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i5, i1);
   i6 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i6 | 0) == 0) {
    i7 = i5;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 i4 = i7 + 32 | 0;
 HEAP8[i4] = HEAP8[i4] & -3 | (i2 & 1) << 1;
 return;
}
function __ZN7WebCore15RenderBlockFlow26setMustDiscardMarginBeforeEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728) {
  return;
 }
 i3 = i1 + 100 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   if (!i2) {
    return;
   }
   i5 = __ZN3WTF10fastMallocEj(36) | 0;
   __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i5, i1);
   i6 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i6 | 0) == 0) {
    i7 = i5;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 i4 = i7 + 32 | 0;
 HEAP8[i4] = HEAP8[i4] & -2 | i2 & 1;
 return;
}
function __ZN7WebCore15RenderBlockFlow26setRenderNamedFlowFragmentEPNS_23RenderNamedFlowFragmentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 100 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(36) | 0;
   __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i5, i1);
   i6 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i6 | 0) == 0) {
    i7 = i5;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 i4 = i7 + 28 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i4 >> 2] = i2;
  return;
 }
 __ZN7WebCore12RenderObject7destroyEv(i7 | 0);
 HEAP32[i4 >> 2] = i2;
 return;
}
function __ZNK7WebCore15RenderBlockFlow24containsNonZeroBidiLevelEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 L3 : while (1) {
  i2 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i4) | 0;
  if ((i2 | 0) != 0) {
   i1 = i2;
   while (1) {
    if ((HEAP32[i1 + 32 >> 2] & 252 | 0) != 0) {
     i3 = 1;
     i5 = 8;
     break L3;
    }
    i1 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i1) | 0;
    if ((i1 | 0) == 0) {
     break;
    }
   }
  }
  i1 = HEAP32[i4 + 52 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i5 = 9;
   break;
  } else {
   i4 = i1;
  }
 }
 if ((i5 | 0) == 8) {
  return i3 | 0;
 } else if ((i5 | 0) == 9) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore15RenderBlockFlowD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 112 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 100 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore11RenderBlockD2Ev(i4);
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 __ZN7WebCore15FloatingObjectsD1Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i4 = i1 | 0;
 __ZN7WebCore11RenderBlockD2Ev(i4);
 i5 = i1;
 __ZN3WTF8fastFreeEPv(i5);
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
function __ZNK7WebCore15RenderBlockFlow32mustSeparateMarginBeforeForChildERKNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (((HEAP32[i3 + 44 >> 2] ^ HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    break;
   }
   i5 = (HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 67108864;
   return i5 | 0;
  }
 } while (0);
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i1 + 20 >> 2] & 8192 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 268435456;
 return i5 | 0;
}
function __ZNK7WebCore15RenderBlockFlow31mustSeparateMarginAfterForChildERKNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (((HEAP32[i3 + 44 >> 2] ^ HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    break;
   }
   i5 = (HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 268435456;
   return i5 | 0;
  }
 } while (0);
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i1 + 20 >> 2] & 8192 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 67108864;
 return i5 | 0;
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
function __ZNK7WebCore15RenderBlockFlow35nextFloatLogicalBottomBelowForBlockENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 96 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  __ZN7WebCore15FloatingObjects39findNextFloatLogicalBottomBelowForBlockENS_10LayoutUnitE(i1, i6, i5);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlowD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 112 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 100 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore11RenderBlockD2Ev(i4);
  return;
 }
 __ZN7WebCore15FloatingObjectsD1Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i4 = i1 | 0;
 __ZN7WebCore11RenderBlockD2Ev(i4);
 return;
}
function __ZN7WebCore15RenderBlockFlowD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 112 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 100 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore11RenderBlockD2Ev(i4);
  return;
 }
 __ZN7WebCore15FloatingObjectsD1Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i4 = i1 | 0;
 __ZN7WebCore11RenderBlockD2Ev(i4);
 return;
}
function __ZNK7WebCore15RenderBlockFlow27nextFloatLogicalBottomBelowENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 96 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  __ZN7WebCore15FloatingObjects31findNextFloatLogicalBottomBelowENS_10LayoutUnitE(i1, i6, i5);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore15RenderBlockFlowC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 __ZN7WebCore11RenderBlockC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 32);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i5 = i1 + 20 | 0;
 _memset(i1 + 96 | 0, 0, 20) | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 2097152;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlowC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 __ZN7WebCore11RenderBlockC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 32);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i5 = i1 + 20 | 0;
 _memset(i1 + 96 | 0, 0, 20) | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 2097152;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlowC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 __ZN7WebCore11RenderBlockC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 32);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i5 = i1 + 20 | 0;
 _memset(i1 + 96 | 0, 0, 20) | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 2097152;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlowC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 __ZN7WebCore11RenderBlockC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 32);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i5 = i1 + 20 | 0;
 _memset(i1 + 96 | 0, 0, 20) | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 2097152;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15RenderBlockFlow26setBreakAtLineToAvoidWidowEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 100 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(36) | 0;
   __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i5, i1);
   i6 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i6 | 0) == 0) {
    i7 = i5;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
   i7 = HEAP32[i3 >> 2] | 0;
  } else {
   i7 = i4;
  }
 } while (0);
 HEAP32[i7 + 20 >> 2] = i2;
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
function __ZN7WebCore15RenderBlockFlow11deleteLinesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1024 >> 2] & 511](i1) | 0) {
  __ZN7WebCore15FloatingObjects24clearLineBoxTreePointersEv(HEAP32[i1 + 96 >> 2] | 0);
 }
 i2 = i1 + 112 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore17RenderLineBoxList17deleteLineBoxTreeEv(i1 + 104 | 0);
  i4 = i1 | 0;
  __ZN7WebCore11RenderBlock11deleteLinesEv(i4);
  return;
 } else {
  HEAP32[i2 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
  i4 = i1 | 0;
  __ZN7WebCore11RenderBlock11deleteLinesEv(i4);
  return;
 }
}
function __ZNK7WebCore15RenderBlockFlow28namedFlowFragmentNeedsUpdateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 24 >> 2] & 32 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 28 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 992 >> 2] & 511](i1 | 0) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 & 512 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (i3 & 256 | 0) == 0;
 return i2 | 0;
}
function __ZN7WebCore15RenderBlockFlow23ensureRareBlockFlowDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 100 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 i3 = __ZN3WTF10fastMallocEj(36) | 0;
 __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i3, i1);
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
function __ZN7WebCore15RenderBlockFlow19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK7WebCore17RenderLineBoxList5paintEPNS_20RenderBoxModelObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1 + 104 | 0, i1 | 0, i2, i3);
  return;
 } else {
  __ZN7WebCore16SimpleLineLayout9paintFlowERKNS_15RenderBlockFlowERKNS0_6LayoutERNS_9PaintInfoERKNS_11LayoutPointE(i1, i4, i2, i3);
  return;
 }
}
function __ZN7WebCore15RenderBlockFlow16positionForPointERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i2 + 100 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i4 + 28 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderRegion16positionForPointERKNS_11LayoutPointE(i1, i5 | 0, i3);
   return;
  }
 } while (0);
 __ZN7WebCore11RenderBlock16positionForPointERKNS_11LayoutPointE(i1, i2 | 0, i3);
 return;
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
function viiii___ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
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
function __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore15RenderBlockFlow28materializeRareBlockFlowDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN3WTF10fastMallocEj(36) | 0;
 __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_(i2, i1);
 i3 = i1 + 100 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 return;
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
function __ZN7WebCore15RenderBlockFlow21createFloatingObjectsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN3WTF10fastMallocEj(64) | 0;
 __ZN7WebCore15FloatingObjectsC1ERKNS_15RenderBlockFlowE(i2, i1);
 i3 = i1 + 96 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore15FloatingObjectsD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore15RenderBlockFlow23mustDiscardMarginBeforeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 201326592 | 0) == 134217728) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i3 + 32 | 0] & 1) != 0;
 return i2 | 0;
}
function __ZNK7WebCore15RenderBlockFlow22mustDiscardMarginAfterEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 805306368 | 0) == 536870912) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i3 + 32 | 0] & 2) != 0;
 return i2 | 0;
}
function __ZNK7WebCore15RenderBlockFlow24canHaveGeneratedChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 28 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = __ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv(i1 | 0) | 0;
 return i3 | 0;
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
function __ZN7WebCore15RenderBlockFlow18heightForLineCountEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = __ZN7WebCoreL21getHeightForLineCountERKNS_15RenderBlockFlowEibRi(i1, i2, 1, i4) | 0;
 STACKTOP = i3;
 return i5 | 0;
}
function viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiiii___ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function __ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1200;
 i2 = i1 + 24 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
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
function __ZNK7WebCore15RenderBlockFlow8hasLinesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = (HEAP32[i1 + 104 >> 2] | 0) != 0;
  return i3 | 0;
 } else {
  i3 = (HEAP32[i2 >> 2] | 0) != 0;
  return i3 | 0;
 }
 return 0;
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
function iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore15RenderBlockFlow37deleteLineBoxesBeforeSimpleLineLayoutEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderLineBoxList15deleteLineBoxesEv(i1 + 104 | 0);
 __ZN7WebCore10RenderText37deleteLineBoxesBeforeSimpleLineLayoutEv(HEAP32[i1 + 28 >> 2] | 0);
 return;
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
function viii___ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
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
function __ZN7WebCore15RenderBlockFlow31clearDidBreakAtLineToAvoidWidowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 32 | 0;
 HEAP8[i1] = HEAP8[i1] & -5;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore15RenderBlockFlow15canHaveChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return 1;
 } else {
  return (HEAP32[i2 + 28 >> 2] | 0) == 0 | 0;
 }
 return 0;
}
function __ZN7WebCore15RenderBlockFlow29setDidBreakAtLineToAvoidWidowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 32 | 0;
 HEAP8[i1] = HEAP8[i1] | 4;
 return;
}
function __ZN7WebCore15RenderBlockFlow16insertedIntoTreeEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement16insertedIntoTreeEv(i1 | 0);
 __ZN7WebCore15RenderBlockFlow37createRenderNamedFlowFragmentIfNeededEv(i1);
 return;
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
function __ZN7WebCore15RenderBlockFlow21removeFloatingObjectsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore15FloatingObjects5clearEv(i2);
 return;
}
function __ZNK7WebCore15RenderBlockFlow34clearShouldBreakAtLineToAvoidWidowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 + 20 >> 2] = -1;
 return;
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
function __ZNK7WebCore20RenderBoxModelObject12borderBeforeEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle17borderBeforeWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
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
function vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox9offsetTopEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore11RenderBlock13hoverAncestorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock13hoverAncestorEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore11RenderBlock10renderNameEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock10renderNameEv(i1 | 0) | 0;
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
function vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox18updateLogicalWidthEv(i1 | 0);
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
function __ZN7WebCore11RenderBlock17scrollbarsChangedEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function vi___ZN7WebCore11RenderBlock6layoutEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock6layoutEv(i1 | 0);
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
  var FUNCTION_TABLE_viiiii = [b0,b0,viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper,b0,__ZN7WebCore15RenderBlockFlow22clipOutFloatingObjectsERNS_11RenderBlockEPKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE,b0,viiiii___ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b0,__ZNK7WebCore15RenderBlockFlow29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1_,b0,__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE,b0,viiiii___ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b0,viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b0,__ZNK7WebCore15RenderBlockFlow30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1_,b0,viiiii___ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b__wrapper,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiiiiii = [b1,b1,__ZN7WebCore15RenderBlockFlow19inlineSelectionGapsERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE,b1];
  var FUNCTION_TABLE_iiiifi = [b2,b2,iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b2,iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b3,__ZN7WebCore15RenderBlockFlow19updateLogicalHeightEv,b3,__ZN7WebCore12RenderObject17updateFromElementEv,b3,vi___ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv__wrapper,b3,__ZN7WebCore15RenderBlockFlow11deleteLinesEv,b3,vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper,b3,__ZN7WebCore15RenderBlockFlowD0Ev,b3,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b3,vi___ZN7WebCore11RenderBlock29computePreferredLogicalWidthsEv__wrapper,b3,vi___ZN7WebCore11RenderBlock23addOverflowFromChildrenEv__wrapper,b3,__ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataD1Ev,b3,vi___ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv__wrapper,b3,__ZN7WebCore15RenderBlockFlow15willBeDestroyedEv,b3,__ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataD0Ev
  ,b3,vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper,b3,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b3,__ZN7WebCore15RenderBlockFlow16insertedIntoTreeEv,b3,__ZN7WebCore15RenderBlockFlowD2Ev,b3,vi___ZN7WebCore11RenderBlock15calcColumnWidthEv__wrapper,b3,vi___ZN7WebCore11RenderBlock6layoutEv__wrapper,b3,__ZN7WebCore9RenderBox14stopAutoscrollEv,b3,vi___ZN7WebCore15RenderBlockFlow29addOverflowFromInlineChildrenEv__wrapper,b3,vi___ZN7WebCore11RenderBlock17updateFirstLetterEv__wrapper,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper,b4,vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper,b4,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b4,__ZN7WebCore15RenderBlockFlow26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b4,vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper,b4,__ZNK7WebCore15RenderBlockFlow21collapsedMarginBeforeEv,b4,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b4,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b4,vii___ZN7WebCore15RenderBlockFlow19createRootInlineBoxEv__wrapper,b4,vii___ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b4,vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper,b4,vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper,b4,vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper
  ,b4,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv,b4,__ZNK7WebCore9RenderBox9marginTopEv,b4,vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper,b4,vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper,b4,vii___ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0___wrapper,b4,vii___ZN7WebCore11RenderBlock15updateDragStateEb__wrapper,b4,__ZNK7WebCore9RenderBox13intrinsicSizeEv,b4,vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper,b4,__ZNK7WebCore15RenderBlockFlow20collapsedMarginAfterEv,b4,vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper,b4,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b4,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b4,vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper,b4,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper
  ,b4,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv,b4,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv,b4,__ZNK7WebCore9RenderBox18visualOverflowRectEv,b4,__ZNK7WebCore9RenderBox11marginRightEv,b4,__ZNK7WebCore9RenderBox11offsetWidthEv,b4,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b4,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b4,vii___ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b4,__ZN7WebCore15RenderBlockFlow24repaintOverhangingFloatsEb,b4,vii___ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE__wrapper,b4,__ZNK7WebCore9RenderBox10marginLeftEv,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv,b4,__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv,b4,__ZNK7WebCore9RenderBox17borderBoundingBoxEv
  ,b4,__ZNK7WebCore9RenderBox12marginBottomEv,b4,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b4,__ZNK7WebCore9RenderBox12offsetHeightEv,b4,vii___ZNK7WebCore11RenderBlock21availableLogicalWidthEv__wrapper,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiiiiii = [b5,b5,iiiiiii___ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5,__ZN7WebCore15RenderBlockFlow21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b5,iiiiiii___ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5];
  var FUNCTION_TABLE_ii = [b6,b6,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b6,ii___ZNK7WebCore11RenderBlock14firstLineBlockEv__wrapper,b6,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b6,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b6,__ZNK7WebCore12RenderObject10isRubyTextEv,b6,__ZNK7WebCore12RenderObject6isRubyEv,b6,ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper,b6,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b6,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b6,ii___ZNK7WebCore11RenderBlock13hoverAncestorEv__wrapper,b6,__ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv,b6,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b6,__ZNK7WebCore12RenderObject14isTableCaptionEv,b6,__ZNK7WebCore12RenderObject8isWidgetEv
  ,b6,__ZNK7WebCore12RenderObject11isTextFieldEv,b6,__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv,b6,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderRightEv,b6,__ZNK7WebCore12RenderObject10isMenuListEv,b6,ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper,b6,__ZNK7WebCore12RenderObject9isSVGRootEv,b6,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b6,__ZNK7WebCore20RenderBoxModelObject12borderBottomEv,b6,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b6,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b6,__ZNK7WebCore15RenderBlockFlow15canHaveChildrenEv,b6,__ZNK7WebCore12RenderObject14isSVGContainerEv,b6,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b6,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv
  ,b6,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b6,__ZNK7WebCore12RenderObject7isQuoteEv,b6,__ZNK7WebCore12RenderObject10isListItemEv,b6,__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv,b6,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b6,__ZNK7WebCore12RenderObject10isSVGImageEv,b6,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b6,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b6,__ZNK7WebCore12RenderObject16isRenderTableColEv,b6,__ZNK7WebCore12RenderObject7isVideoEv,b6,__ZNK7WebCore12RenderObject10isProgressEv,b6,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b6,__ZNK7WebCore12RenderObject13isCombineTextEv,b6,ii___ZNK7WebCore11RenderBlock10renderNameEv__wrapper,b6,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv
  ,b6,__ZNK7WebCore12RenderObject5isWBREv,b6,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b6,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b6,__ZNK7WebCore13RenderElement14firstChildSlowEv,b6,ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper,b6,ii___ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b6,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b6,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b6,__ZNK7WebCore12RenderObject7isFrameEv,b6,ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper,b6,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b6,ii___ZNK7WebCore11RenderBlock14paginationUnitEv__wrapper,b6,__ZNK7WebCore15RenderBlockFlow8hasLinesEv,b6,ii___ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv__wrapper
  ,b6,__ZNK7WebCore15RenderBlockFlow14containsFloatsEv,b6,__ZNK7WebCore12RenderObject9isReplicaEv,b6,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b6,__ZNK7WebCore9RenderBox14hasControlClipEv,b6,__ZNK7WebCore12RenderObject7isMediaEv,b6,__ZNK7WebCore12RenderObject10isSVGShapeEv,b6,__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv,b6,__ZNK7WebCore11RenderBlock19virtualContinuationEv,b6,__ZNK7WebCore12RenderObject14isRenderButtonEv,b6,__ZNK7WebCore12RenderObject8isSliderEv,b6,ii___ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv__wrapper,b6,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b6,ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper,b6,ii___ZNK7WebCore11RenderBlock12avoidsFloatsEv__wrapper,b6,ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper
  ,b6,ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper,b6,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b6,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper,b6,__ZNK7WebCore12RenderObject13isSliderThumbEv,b6,__ZNK7WebCore12RenderObject13isTextControlEv,b6,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b6,__ZNK7WebCore12RenderObject9isSVGTextEv,b6,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b6,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b6,__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv,b6,__ZNK7WebCore12RenderObject11isTableCellEv,b6,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b6,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b6,__ZNK7WebCore12RenderObject12isRenderGridEv,b6,__ZNK7WebCore15RenderBlockFlow24canHaveGeneratedChildrenEv
  ,b6,__ZNK7WebCore12RenderObject9isListBoxEv,b6,__ZNK7WebCore12RenderObject9isSVGPathEv,b6,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b6,ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper,b6,__ZNK7WebCore13RenderElement13lastChildSlowEv,b6,__ZNK7WebCore12RenderObject13isRenderImageEv,b6,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b6,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b6,ii___ZNK7WebCore11RenderBlock14hasLineIfEmptyEv__wrapper,b6,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b6,__ZNK7WebCore12RenderObject6lengthEv,b6,__ZNK7WebCore12RenderObject10isTableRowEv,b6,__ZNK7WebCore12RenderObject10isFrameSetEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderAfterEv,b6,__ZNK7WebCore9RenderBox13requiresLayerEv
  ,b6,__ZNK7WebCore12RenderObject10isFieldsetEv,b6,__ZNK7WebCore12RenderObject11isSVGInlineEv,b6,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b6,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b6,ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b6,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b6,ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper,b6,__ZNK7WebCore12RenderObject9isRubyRunEv,b6,__ZNK7WebCore20RenderBoxModelObject9borderEndEv,b6,__ZNK7WebCore12RenderObject10isRubyBaseEv,b6,__ZNK7WebCore12RenderObject14isRenderRegionEv,b6,ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper,b6,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b6,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv
  ,b6,__ZNK7WebCore12RenderObject10isTextAreaEv,b6,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b6,__ZNK7WebCore20RenderBoxModelObject9borderTopEv,b6,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b6,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject7isImageEv,b6,__ZNK7WebCore12RenderObject9isCounterEv,b6,ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper,b6,__ZNK7WebCore12RenderObject7isMeterEv,b6,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b6,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b6,__ZNK7WebCore12RenderObject8isCanvasEv,b6,__ZNK7WebCore20RenderBoxModelObject10borderLeftEv,b6,ii___ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv__wrapper,b6,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv
  ,b6,__ZNK7WebCore12RenderObject12isListMarkerEv,b6,__ZNK7WebCore12RenderObject7isEmptyEv,b6,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderStartEv,b6,__ZNK7WebCore12RenderObject7isTableEv,b6,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject14isTableSectionEv,b6,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_iiii = [b7,b7,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b7,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b7,iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper,b7,iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper,b7,iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,__ZN7WebCore15RenderBlockFlow15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE,b8,viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b8,viii___ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b8,viii___ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE__wrapper,b8,viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper,b8,__ZN7WebCore15RenderBlockFlow14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b8,__ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE,b8,viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b8,__ZN7WebCore11RenderBlock17scrollbarsChangedEbb,b8,__ZN7WebCore15RenderBlockFlow16positionForPointERKNS_11LayoutPointE,b8,__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE,b8,viii___ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b8,__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE
  ,b8,viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper,b8,viii___ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2___wrapper,b8,viii___ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper,b8,__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE,b8,viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore15RenderBlockFlowC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE,b8,viii___ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE,b8,__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE,b8,__ZN7WebCore15RenderBlockFlowC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE,b8,__ZN7WebCore15RenderBlockFlow32moveAllChildrenIncludingFloatsToEPNS_11RenderBlockEb,b8,viii___ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2___wrapper,b8,viii___ZNK7WebCore11RenderBlock29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2___wrapper,b8,viii___ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE__wrapper,b8,__ZN7WebCore15RenderBlockFlow19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE
  ,b8,viii___ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore15RenderBlockFlow15computeOverflowENS_10LayoutUnitEb,b8,viii___ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8,b8,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_v = [b9,b9,v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper,b9];
  var FUNCTION_TABLE_iiiii = [b10,b10,iiiii___ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5___wrapper,b10,__ZN7WebCore15RenderBlockFlow21relayoutForPaginationEbNS_10LayoutUnitERNS_21LayoutStateMaintainerE,b10,b10,b10];
  var FUNCTION_TABLE_viiiiii = [b11,b11,viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper,b11];
  var FUNCTION_TABLE_iii = [b12,b12,iii___ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE__wrapper,b12,iii___ZNK7WebCore11RenderBlock15requiresColumnsEi__wrapper,b12,__ZNK7WebCore15RenderBlockFlow19inlineBlockBaselineENS_17LineDirectionModeE,b12,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b12,iii___ZNK7WebCore15RenderBlockFlow20textAlignmentForLineEb__wrapper,b12,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b12,iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper,b12,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b12,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b12,__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb,b12,b12,b12,b12,b12,b12,b12,b12
  ,b12,b12,b12];
  var FUNCTION_TABLE_iiiiii = [b13,b13,iiiiii___ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b13,__ZN7WebCore15RenderBlockFlow13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE,b13,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b13];
  var FUNCTION_TABLE_viiii = [b14,b14,viiii___ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3___wrapper,b14,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b14,__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb,b14,__ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE,b14,viiii___ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b14,viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper,b14,__ZNK7WebCore15RenderBlockFlow31adjustInlineDirectionLineBoundsEiRfS1_,b14,viiii___ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b14,viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b14,__ZN7WebCore15RenderBlockFlow10MarginInfoC2ERS0_NS_10LayoutUnitES3_,b14,__ZN7WebCore15RenderBlockFlow11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb,b14,__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b14,viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper,b14,b14
  ,b14,b14,b14];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_iiiifi: dynCall_iiiifi, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_iiiifi": invoke_iiiifi, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15RenderBlockFlow26markLinesDirtyInBlockRangeENS_10LayoutUnitES1_PNS_13RootInlineBoxE","__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZNK7WebCore15RenderBlockFlow23mustDiscardMarginBeforeEv","__ZN7WebCore15RenderBlockFlow18addIntrudingFloatsEPS0_NS_10LayoutUnitES2_","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZN7WebCore15RenderBlockFlow11deleteLinesEv","__ZN7WebCore15RenderBlockFlow19hasOverhangingFloatERNS_9RenderBoxE","__ZN7WebCore15RenderBlockFlow23ensureRareBlockFlowDataEv","__ZNK7WebCore15RenderBlockFlow35nextFloatLogicalBottomBelowForBlockENS_10LayoutUnitE","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZN7WebCore15RenderBlockFlow14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZN7WebCore15RenderBlockFlow19updateLogicalHeightEv","__ZNK7WebCore15RenderBlockFlow31mustDiscardMarginBeforeForChildERKNS_9RenderBoxE","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore15RenderBlockFlow17firstLineBaselineEv","__ZN7WebCore15RenderBlockFlow26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZNK7WebCore15RenderBlockFlow21collapsedMarginBeforeEv","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCoreL21getHeightForLineCountERKNS_15RenderBlockFlowEibRi","__ZNK7WebCore15RenderBlockFlow38pushToNextPageWithMinimumLogicalHeightERNS_10LayoutUnitES1_S1_","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv","__ZNK7WebCore15RenderBlockFlow32mustSeparateMarginBeforeForChildERKNS_9RenderBoxE","__ZN7WebCore15RenderBlockFlow26setRenderNamedFlowFragmentEPNS_23RenderNamedFlowFragmentE","__ZNK7WebCore20RenderBoxModelObject11borderRightEv","__ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataD0Ev","__ZN7WebCore15RenderBlockFlow26removeFloatingObjectsBelowEPNS_14FloatingObjectEi","_strlen","__ZN7WebCore15RenderBlockFlow31markSiblingsWithFloatsForLayoutEPNS_9RenderBoxE","__ZN7WebCore15RenderBlockFlow18heightForLineCountEi","__ZNK7WebCore15RenderBlockFlow26pageLogicalHeightForOffsetENS_10LayoutUnitE","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore12RenderObject6isRubyEv","__ZN7WebCore15RenderBlockFlow21removeFloatingObjectsEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore20RenderBoxModelObject12borderBottomEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZN7WebCore15RenderBlockFlowD0Ev","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZN7WebCore15RenderBlockFlow13getClearDeltaERNS_9RenderBoxENS_10LayoutUnitE","__ZN7WebCore15RenderBlockFlow15computeOverflowENS_10LayoutUnitEb","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE","__ZNK7WebCore15RenderBlockFlow30computeLogicalLocationForFloatEPKNS_14FloatingObjectENS_10LayoutUnitE","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZN3WTF7HashMapIPN7WebCore9RenderBoxENSt3__110unique_ptrINS1_14FloatingObjectENS4_14default_deleteIS6_EEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENSC_IS9_EEE4takeERKS3_","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZN7WebCore15RenderBlockFlow19clearFloatsIfNeededERNS_9RenderBoxERNS0_10MarginInfoENS_10LayoutUnitES5_S5_","__ZN7WebCore15RenderBlockFlow16positionForPointERKNS_11LayoutPointE","__ZN7WebCore15RenderBlockFlow22handleAfterSideOfBlockENS_10LayoutUnitES1_RNS0_10MarginInfoE","__ZN7WebCore15RenderBlockFlow37createRenderNamedFlowFragmentIfNeededEv","__ZN7WebCore15RenderBlockFlow11clearFloatsEv","__ZN7WebCore15RenderBlockFlow21relayoutToAvoidWidowsERNS_21LayoutStateMaintainerE","__ZNK7WebCore15RenderBlockFlow22mustDiscardMarginAfterEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore15RenderBlockFlow19inlineBlockBaselineENS_17LineDirectionModeE","__ZNK7WebCore15RenderBlockFlow23pageLogicalTopForOffsetENS_10LayoutUnitE","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZN7WebCore15RenderBlockFlow20insertFloatingObjectERNS_9RenderBoxE","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZNK7WebCore9RenderBox18visualOverflowRectEv","__ZN7WebCore15RenderBlockFlow34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZN7WebCore15RenderBlockFlow15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject16isAnonymousBlockEv","__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZN7WebCore15RenderBlockFlow31clearDidBreakAtLineToAvoidWidowEv","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZN7WebCore15RenderBlockFlow11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb","__ZN7WebCore15RenderBlockFlow17layoutSimpleLinesERNS_10LayoutUnitES2_","__ZN7WebCore15RenderBlockFlow7newLineENS_6EClearE","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZN7WebCore15RenderBlockFlow22clipOutFloatingObjectsERNS_11RenderBlockEPKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZN7WebCore10RenderView15pushLayoutStateERNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE","__ZNK7WebCore15RenderBlockFlow14containsFloatsEv","__ZN7WebCore15RenderBlockFlow19layoutBlockChildrenEbRNS_10LayoutUnitE","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZNK7WebCore15RenderBlockFlow15canHaveChildrenEv","__ZN7WebCore15RenderBlockFlow19inlineSelectionGapsERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv","__ZNK7WebCore12RenderObject7isMediaEv","__ZN7WebCore11LayoutStateD1Ev","__ZN7WebCore15RenderBlockFlow15clearTruncationEv","__ZN7WebCore15RenderBlockFlow21createFloatingObjectsEv","__ZNK7WebCore15RenderBlockFlow8hasLinesEv","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZN7WebCore15RenderBlockFlow21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZN7WebCore15RenderBlockFlow21adjustPositionedBlockERNS_9RenderBoxERKNS0_10MarginInfoE","__ZNK7WebCore9RenderBox11marginRightEv","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZN7WebCore11RenderBlock17scrollbarsChangedEbb","__ZN7WebCore9ShapeInfoINS_9RenderBoxEE12setShapeSizeENS_10LayoutUnitES3_","__ZNK7WebCore15RenderBlockFlow31adjustInlineDirectionLineBoundsEiRfS1_","__ZNK7WebCore9RenderBox14hasControlClipEv","__ZNK7WebCore9RenderBox26logicalRightLayoutOverflowEv","__ZN7WebCore15RenderBlockFlow23updateMinimumPageHeightENS_10LayoutUnitES1_","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv","__ZNK7WebCore15RenderBlockFlow29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1_","__ZN7WebCore15RenderBlockFlow28materializeRareBlockFlowDataEv","__ZNK7WebCore11RenderBlock19virtualContinuationEv","__ZNK7WebCore15RenderBlockFlow24containsNonZeroBidiLevelEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv","__ZNK7WebCore9RenderBox13intrinsicSizeEv","__ZNK3WTF11ListHashSetINSt3__110unique_ptrIN7WebCore14FloatingObjectENS1_14default_deleteIS4_EEEELj4ENS3_27FloatingObjectHashFunctionsEE4findIRNS3_9RenderBoxENS3_28FloatingObjectHashTranslatorEEENS_24ListHashSetConstIteratorIS7_Lj4ES8_EERKT_","__ZN7WebCore15RenderBlockFlow24fitBorderToLinesIfNeededEv","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__ZN7WebCore15RenderBlockFlow21addOverflowFromFloatsEv","__ZN3WTF9HashTableIPN7WebCore9RenderBoxES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore15RenderBlockFlow17layoutLineGridBoxEv","__ZN7WebCore15RenderBlockFlow26setBreakAtLineToAvoidWidowEi","__ZN7WebCore15RenderBlockFlow31adjustLinePositionForPaginationEPNS_13RootInlineBoxERNS_10LayoutUnitEPNS_16RenderFlowThreadE","__ZN7WebCore15RenderBlockFlow15ensureLineBoxesEv","__ZN3WTF9HashTableIPN7WebCore9RenderBoxES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZNK7WebCore15RenderBlockFlow34clearShouldBreakAtLineToAvoidWidowEv","__ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataC2ERKS0_","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZN7WebCore15RenderBlockFlow31setStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitES3_","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZN7WebCore15RenderBlockFlow15willBeDestroyedEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZN7WebCore15RenderBlockFlow34marginOffsetForSelfCollapsingBlockEv","__ZN7WebCore15RenderBlockFlow15applyAfterBreakERNS_9RenderBoxENS_10LayoutUnitERNS0_10MarginInfoE","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZNK7WebCore15RenderBlockFlow13containsFloatERNS_9RenderBoxE","__ZN7WebCore15RenderBlockFlow20layoutInlineChildrenEbRNS_10LayoutUnitES2_","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore15RenderBlockFlow14positionForBoxEPNS_9InlineBoxEb","__ZNK7WebCore15RenderBlockFlow31flipFloatForWritingModeForChildEPKNS_14FloatingObjectERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZN7WebCore15RenderBlockFlow23RenderBlockFlowRareDataD1Ev","__ZNK7WebCore15RenderBlockFlow36logicalLeftOffsetForPositioningFloatENS_10LayoutUnitES1_bPS1_","__ZN7WebCore15RenderBlockFlow37markAllDescendantsWithFloatsForLayoutEPNS_9RenderBoxEb","__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE","__ZNK7WebCore15RenderBlockFlow24canHaveGeneratedChildrenEv","_memset","__ZNK7WebCore15RenderBlockFlow31mustSeparateMarginAfterForChildERKNS_9RenderBoxE","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZNK7WebCore12RenderObject11isTableCellEv","__ZN7WebCore15RenderBlockFlow26setMustDiscardMarginBeforeEb","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZN7WebCore15RenderBlockFlow25setMustDiscardMarginAfterEb","__ZNK7WebCore12RenderObject9isListBoxEv","__ZN7WebCore15RenderBlockFlow16layoutBlockChildERNS_9RenderBoxERNS0_10MarginInfoERNS_10LayoutUnitES6_","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE","__ZN7WebCore15RenderBlockFlow19initMaxMarginValuesEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore15RenderBlockFlow30mustDiscardMarginAfterForChildERKNS_9RenderBoxE","__ZN7WebCore15RenderBlockFlow12setPageBreakENS_10LayoutUnitES1_","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZN3WTF7HashSetIPN7WebCore9RenderBoxENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore15RenderBlockFlow29adjustBlockChildForPaginationENS_10LayoutUnitES1_RNS_9RenderBoxEb","__ZN7WebCore15RenderBlockFlow20removeFloatingObjectERNS_9RenderBoxE","__ZN7WebCore15RenderBlockFlow24setMaxMarginBeforeValuesENS_10LayoutUnitES1_","__ZNK7WebCore20RenderBoxModelObject9borderEndEv","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZN7WebCore15RenderBlockFlow34updateStaticInlinePositionForChildERNS_9RenderBoxENS_10LayoutUnitE","__ZNK7WebCore12RenderObject10isTableRowEv","__ZN7WebCore15RenderBlockFlow13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE","__ZNK7WebCore15RenderBlockFlow18adjustForBorderFitENS_10LayoutUnitERS1_S2_","__ZNK7WebCore9RenderBox11offsetWidthEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore15RenderBlockFlow28marginBeforeEstimateForChildERNS_9RenderBoxERNS_10LayoutUnitES4_Rb","__ZN7WebCore15RenderBlockFlow16insertedIntoTreeEv","__ZNK7WebCore20RenderBoxModelObject11borderAfterEv","__ZNK7WebCore9RenderBox10marginLeftEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore9RenderBox13requiresLayerEv","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore11RenderBlock21startOffsetForContentEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZN7WebCore15RenderBlockFlow24setCollapsedBottomMarginERKNS0_10MarginInfoE","__ZN7WebCore15RenderBlockFlow23setMaxMarginAfterValuesENS_10LayoutUnitES1_","__ZN7WebCore15RenderBlockFlowD2Ev","__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE","__ZN7WebCore15RenderBlockFlow26adjustForUnsplittableChildERNS_9RenderBoxENS_10LayoutUnitEb","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZNK7WebCore9RenderBox12marginBottomEv","__ZN3WTF9HashTableIPN7WebCore9RenderBoxENS_12KeyValuePairIS3_NSt3__110unique_ptrINS1_14FloatingObjectENS5_14default_deleteIS7_EEEEEENS_24KeyValuePairKeyExtractorISB_EENS_7PtrHashIS3_EENS_7HashMapIS3_SA_SF_NS_10HashTraitsIS3_EENSH_ISA_EEE18KeyValuePairTraitsESI_E6rehashEiPSB_","__ZNK7WebCore15RenderBlockFlow27nextFloatLogicalBottomBelowENS_10LayoutUnitE","__ZN7WebCore15RenderBlockFlowC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore15RenderBlockFlow11hasNextPageENS_10LayoutUnitENS0_16PageBoundaryRuleE","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore15RenderBlockFlow30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1_","__ZN7WebCore15RenderBlockFlow26estimateLogicalTopPositionERNS_9RenderBoxERKNS0_10MarginInfoERNS_10LayoutUnitE","__ZN7WebCore15RenderBlockFlow37deleteLineBoxesBeforeSimpleLineLayoutEv","__ZN7WebCore15RenderBlockFlow10MarginInfoC2ERS0_NS_10LayoutUnitES3_","__ZN7WebCore15RenderBlockFlow19adjustFloatingBlockERKNS0_10MarginInfoE","__ZNK7WebCore9RenderBox9marginTopEv","__ZN7WebCore15RenderBlockFlow17positionNewFloatsEv","__ZN7WebCore15RenderBlockFlow11layoutBlockEbNS_10LayoutUnitE","__ZN7WebCore15RenderBlockFlowC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZNK7WebCore15RenderBlockFlow18nextPageLogicalTopENS_10LayoutUnitENS0_16PageBoundaryRuleE","__ZNK7WebCore15RenderBlockFlow20collapsedMarginAfterEv","__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore15RenderBlockFlow15collapseMarginsERNS_9RenderBoxERNS0_10MarginInfoE","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore20RenderBoxModelObject9borderTopEv","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZN7WebCore15RenderBlockFlow34positionForPointWithInlineChildrenERKNS_11LayoutPointE","__ZN7WebCore15RenderBlockFlow24repaintOverhangingFloatsEb","__ZNK7WebCore15RenderBlockFlow37logicalRightOffsetForPositioningFloatENS_10LayoutUnitES1_bPS1_","__ZNK7WebCore12RenderObject7isImageEv","__ZN7WebCore15RenderBlockFlow32moveAllChildrenIncludingFloatsToEPNS_11RenderBlockEb","__ZN7WebCore15RenderBlockFlow20addOverhangingFloatsERS0_b","__ZNK7WebCore12RenderObject9isCounterEv","__ZNK7WebCore15RenderBlockFlow35pageRemainingLogicalHeightForOffsetENS_10LayoutUnitENS0_16PageBoundaryRuleE","__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZN7WebCore15RenderBlockFlow21relayoutForPaginationEbNS_10LayoutUnitERNS_21LayoutStateMaintainerE","__ZNK7WebCore9RenderBox25logicalLeftLayoutOverflowEv","__ZN7WebCore15RenderBlockFlow16applyBeforeBreakERNS_9RenderBoxENS_10LayoutUnitE","__ZNK7WebCore15RenderBlockFlow20marginValuesForChildERNS_9RenderBoxE","__ZNK7WebCore9RenderBox12offsetHeightEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZN7WebCore15RenderBlockFlow19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore20RenderBoxModelObject10borderLeftEv","__ZNK7WebCore9RenderBox17borderBoundingBoxEv","__ZNK7WebCore15RenderBlockFlow11lineAtIndexEi","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore15RenderBlockFlow28namedFlowFragmentNeedsUpdateEv","__ZNK7WebCore20RenderBoxModelObject11borderStartEv","__ZNK7WebCore12RenderObject7isTableEv","__ZNK7WebCore15RenderBlockFlow9lineCountEPKNS_13RootInlineBoxEPb","__ZN7WebCore9RenderBox14stopAutoscrollEv","_memcpy","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZN7WebCore15RenderBlockFlow29setDidBreakAtLineToAvoidWidowEv","__ZNK7WebCore15RenderBlockFlow24lowestFloatLogicalBottomENS_14FloatingObject4TypeE","__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv"]

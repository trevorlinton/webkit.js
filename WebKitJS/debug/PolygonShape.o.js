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
H_BASE = parentModule["_malloc"](120 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 120;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
  var __ZTVN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEEE=(H_BASE+40)|0;
  var __ZTVN7WebCore12PolygonShapeE=(H_BASE+72)|0;
  var __ZTVN7WebCore17OffsetPolygonEdgeE=(H_BASE+8)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _cos=env._cos;
  var _malloc=env._malloc;
  var _atan2=env._atan2;
  var _free=env._free;
  var _fflush=env._fflush;
  var _sin=env._sin;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNSt3__16__sortIRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEvT0_S9_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 480 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 224 | 0;
 i11 = i4 + 240 | 0;
 i12 = i4 + 256 | 0;
 i13 = i4 + 272 | 0;
 i14 = i4 + 288 | 0;
 i15 = i4 + 304 | 0;
 i16 = i4 + 320 | 0;
 i17 = i4 + 336 | 0;
 i18 = i4 + 352 | 0;
 i19 = i4 + 368 | 0;
 i20 = i4 + 464 | 0;
 i21 = i4 + 160 | 0;
 i22 = i4 + 176 | 0;
 i23 = i4 + 192 | 0;
 i24 = i4 + 208 | 0;
 i25 = i4 + 384 | 0;
 i26 = i4 + 400 | 0;
 i27 = i4 + 432 | 0;
 i28 = i4 + 448 | 0;
 i29 = i4 + 416 | 0;
 i30 = i4 + 80 | 0;
 i31 = i4 + 96 | 0;
 i32 = i4 + 112 | 0;
 i33 = i4 + 128 | 0;
 i34 = i4 + 144 | 0;
 i35 = i1;
 i1 = i2;
 L1 : while (1) {
  i2 = i1;
  i36 = i1 - 16 | 0;
  i37 = i36;
  i38 = i35;
  L3 : while (1) {
   i39 = i38;
   i40 = i2 - i39 | 0;
   i41 = i40 >> 4;
   switch (i41 | 0) {
   case 3:
    {
     i42 = 6;
     break L1;
     break;
    }
   case 5:
    {
     i42 = 15;
     break L1;
     break;
    }
   case 4:
    {
     i42 = 14;
     break L1;
     break;
    }
   case 2:
    {
     i42 = 4;
     break L1;
     break;
    }
   case 0:
   case 1:
    {
     i42 = 84;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i40 | 0) < 496) {
    i42 = 21;
    break L1;
   }
   i43 = (i41 | 0) / 2 & -1;
   i44 = i38 + (i43 << 4) | 0;
   do {
    if ((i40 | 0) > 15984) {
     i45 = (i41 | 0) / 4 & -1;
     i46 = i38 + (i45 << 4) | 0;
     i47 = i38 + (i45 + i43 << 4) | 0;
     _llvm_lifetime_start(16, 0, i21 | 0);
     _llvm_lifetime_start(16, 0, i22 | 0);
     _llvm_lifetime_start(16, 0, i23 | 0);
     _llvm_lifetime_start(16, 0, i24 | 0);
     i45 = __ZNSt3__17__sort4IRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEjT0_S9_S9_S9_T_(i38, i46, i44, i47, i3) | 0;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i36, i47) | 0)) {
      i48 = i45;
      break;
     }
     i49 = i47;
     HEAP32[i24 >> 2] = HEAP32[i49 >> 2];
     HEAP32[i24 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
     HEAP32[i24 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
     HEAP32[i24 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
     HEAP32[i49 >> 2] = HEAP32[i37 >> 2];
     HEAP32[i49 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
     HEAP32[i49 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
     HEAP32[i49 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
     HEAP32[i37 >> 2] = HEAP32[i24 >> 2];
     HEAP32[i37 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
     HEAP32[i37 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
     HEAP32[i37 + 12 >> 2] = HEAP32[i24 + 12 >> 2];
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i47, i44) | 0)) {
      i48 = i45 + 1 | 0;
      break;
     }
     i47 = i44;
     HEAP32[i22 >> 2] = HEAP32[i47 >> 2];
     HEAP32[i22 + 4 >> 2] = HEAP32[i47 + 4 >> 2];
     HEAP32[i22 + 8 >> 2] = HEAP32[i47 + 8 >> 2];
     HEAP32[i22 + 12 >> 2] = HEAP32[i47 + 12 >> 2];
     HEAP32[i47 >> 2] = HEAP32[i49 >> 2];
     HEAP32[i47 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
     HEAP32[i47 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
     HEAP32[i47 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
     HEAP32[i49 >> 2] = HEAP32[i22 >> 2];
     HEAP32[i49 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
     HEAP32[i49 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
     HEAP32[i49 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i44, i46) | 0)) {
      i48 = i45 + 2 | 0;
      break;
     }
     i49 = i46;
     HEAP32[i21 >> 2] = HEAP32[i49 >> 2];
     HEAP32[i21 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
     HEAP32[i21 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
     HEAP32[i21 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
     HEAP32[i49 >> 2] = HEAP32[i47 >> 2];
     HEAP32[i49 + 4 >> 2] = HEAP32[i47 + 4 >> 2];
     HEAP32[i49 + 8 >> 2] = HEAP32[i47 + 8 >> 2];
     HEAP32[i49 + 12 >> 2] = HEAP32[i47 + 12 >> 2];
     HEAP32[i47 >> 2] = HEAP32[i21 >> 2];
     HEAP32[i47 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
     HEAP32[i47 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
     HEAP32[i47 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i46, i38) | 0)) {
      i48 = i45 + 3 | 0;
      break;
     }
     i46 = i38;
     HEAP32[i23 >> 2] = HEAP32[i46 >> 2];
     HEAP32[i23 + 4 >> 2] = HEAP32[i46 + 4 >> 2];
     HEAP32[i23 + 8 >> 2] = HEAP32[i46 + 8 >> 2];
     HEAP32[i23 + 12 >> 2] = HEAP32[i46 + 12 >> 2];
     HEAP32[i46 >> 2] = HEAP32[i49 >> 2];
     HEAP32[i46 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
     HEAP32[i46 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
     HEAP32[i46 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
     HEAP32[i49 >> 2] = HEAP32[i23 >> 2];
     HEAP32[i49 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
     HEAP32[i49 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
     HEAP32[i49 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
     i48 = i45 + 4 | 0;
    } else {
     _llvm_lifetime_start(16, 0, i30 | 0);
     _llvm_lifetime_start(16, 0, i31 | 0);
     _llvm_lifetime_start(16, 0, i32 | 0);
     _llvm_lifetime_start(16, 0, i33 | 0);
     _llvm_lifetime_start(16, 0, i34 | 0);
     i45 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i44, i38) | 0;
     i49 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i36, i44) | 0;
     if (!i45) {
      if (!i49) {
       i48 = 0;
       break;
      }
      i45 = i44;
      HEAP32[i34 >> 2] = HEAP32[i45 >> 2];
      HEAP32[i34 + 4 >> 2] = HEAP32[i45 + 4 >> 2];
      HEAP32[i34 + 8 >> 2] = HEAP32[i45 + 8 >> 2];
      HEAP32[i34 + 12 >> 2] = HEAP32[i45 + 12 >> 2];
      HEAP32[i45 >> 2] = HEAP32[i37 >> 2];
      HEAP32[i45 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
      HEAP32[i45 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
      HEAP32[i45 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
      HEAP32[i37 >> 2] = HEAP32[i34 >> 2];
      HEAP32[i37 + 4 >> 2] = HEAP32[i34 + 4 >> 2];
      HEAP32[i37 + 8 >> 2] = HEAP32[i34 + 8 >> 2];
      HEAP32[i37 + 12 >> 2] = HEAP32[i34 + 12 >> 2];
      if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i44, i38) | 0)) {
       i48 = 1;
       break;
      }
      i46 = i38;
      HEAP32[i32 >> 2] = HEAP32[i46 >> 2];
      HEAP32[i32 + 4 >> 2] = HEAP32[i46 + 4 >> 2];
      HEAP32[i32 + 8 >> 2] = HEAP32[i46 + 8 >> 2];
      HEAP32[i32 + 12 >> 2] = HEAP32[i46 + 12 >> 2];
      HEAP32[i46 >> 2] = HEAP32[i45 >> 2];
      HEAP32[i46 + 4 >> 2] = HEAP32[i45 + 4 >> 2];
      HEAP32[i46 + 8 >> 2] = HEAP32[i45 + 8 >> 2];
      HEAP32[i46 + 12 >> 2] = HEAP32[i45 + 12 >> 2];
      HEAP32[i45 >> 2] = HEAP32[i32 >> 2];
      HEAP32[i45 + 4 >> 2] = HEAP32[i32 + 4 >> 2];
      HEAP32[i45 + 8 >> 2] = HEAP32[i32 + 8 >> 2];
      HEAP32[i45 + 12 >> 2] = HEAP32[i32 + 12 >> 2];
      i48 = 2;
      break;
     }
     i45 = i38;
     if (i49) {
      HEAP32[i30 >> 2] = HEAP32[i45 >> 2];
      HEAP32[i30 + 4 >> 2] = HEAP32[i45 + 4 >> 2];
      HEAP32[i30 + 8 >> 2] = HEAP32[i45 + 8 >> 2];
      HEAP32[i30 + 12 >> 2] = HEAP32[i45 + 12 >> 2];
      HEAP32[i45 >> 2] = HEAP32[i37 >> 2];
      HEAP32[i45 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
      HEAP32[i45 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
      HEAP32[i45 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
      HEAP32[i37 >> 2] = HEAP32[i30 >> 2];
      HEAP32[i37 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
      HEAP32[i37 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
      HEAP32[i37 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
      i48 = 1;
      break;
     }
     HEAP32[i31 >> 2] = HEAP32[i45 >> 2];
     HEAP32[i31 + 4 >> 2] = HEAP32[i45 + 4 >> 2];
     HEAP32[i31 + 8 >> 2] = HEAP32[i45 + 8 >> 2];
     HEAP32[i31 + 12 >> 2] = HEAP32[i45 + 12 >> 2];
     i49 = i44;
     HEAP32[i45 >> 2] = HEAP32[i49 >> 2];
     HEAP32[i45 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
     HEAP32[i45 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
     HEAP32[i45 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
     HEAP32[i49 >> 2] = HEAP32[i31 >> 2];
     HEAP32[i49 + 4 >> 2] = HEAP32[i31 + 4 >> 2];
     HEAP32[i49 + 8 >> 2] = HEAP32[i31 + 8 >> 2];
     HEAP32[i49 + 12 >> 2] = HEAP32[i31 + 12 >> 2];
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i36, i44) | 0)) {
      i48 = 1;
      break;
     }
     HEAP32[i33 >> 2] = HEAP32[i49 >> 2];
     HEAP32[i33 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
     HEAP32[i33 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
     HEAP32[i33 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
     HEAP32[i49 >> 2] = HEAP32[i37 >> 2];
     HEAP32[i49 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
     HEAP32[i49 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
     HEAP32[i49 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
     HEAP32[i37 >> 2] = HEAP32[i33 >> 2];
     HEAP32[i37 + 4 >> 2] = HEAP32[i33 + 4 >> 2];
     HEAP32[i37 + 8 >> 2] = HEAP32[i33 + 8 >> 2];
     HEAP32[i37 + 12 >> 2] = HEAP32[i33 + 12 >> 2];
     i48 = 2;
    }
   } while (0);
   do {
    if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i38, i44) | 0) {
     i50 = i36;
     i51 = i48;
    } else {
     i43 = i36;
     while (1) {
      i52 = i43 - 16 | 0;
      if ((i38 | 0) == (i52 | 0)) {
       break;
      }
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i52, i44) | 0) {
       i42 = 63;
       break;
      } else {
       i43 = i52;
      }
     }
     if ((i42 | 0) == 63) {
      i42 = 0;
      i43 = i38;
      HEAP32[i29 >> 2] = HEAP32[i43 >> 2];
      HEAP32[i29 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
      HEAP32[i29 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
      HEAP32[i29 + 12 >> 2] = HEAP32[i43 + 12 >> 2];
      i41 = i52;
      HEAP32[i43 >> 2] = HEAP32[i41 >> 2];
      HEAP32[i43 + 4 >> 2] = HEAP32[i41 + 4 >> 2];
      HEAP32[i43 + 8 >> 2] = HEAP32[i41 + 8 >> 2];
      HEAP32[i43 + 12 >> 2] = HEAP32[i41 + 12 >> 2];
      HEAP32[i41 >> 2] = HEAP32[i29 >> 2];
      HEAP32[i41 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
      HEAP32[i41 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
      HEAP32[i41 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
      i50 = i52;
      i51 = i48 + 1 | 0;
      break;
     }
     i41 = i38 + 16 | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i38, i36) | 0) {
      i53 = i41;
     } else {
      i43 = i41;
      while (1) {
       if ((i43 | 0) == (i36 | 0)) {
        i42 = 94;
        break L1;
       }
       i54 = i43 + 16 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i38, i43) | 0) {
        break;
       } else {
        i43 = i54;
       }
      }
      i41 = i43;
      HEAP32[i28 >> 2] = HEAP32[i41 >> 2];
      HEAP32[i28 + 4 >> 2] = HEAP32[i41 + 4 >> 2];
      HEAP32[i28 + 8 >> 2] = HEAP32[i41 + 8 >> 2];
      HEAP32[i28 + 12 >> 2] = HEAP32[i41 + 12 >> 2];
      HEAP32[i41 >> 2] = HEAP32[i37 >> 2];
      HEAP32[i41 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
      HEAP32[i41 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
      HEAP32[i41 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
      HEAP32[i37 >> 2] = HEAP32[i28 >> 2];
      HEAP32[i37 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
      HEAP32[i37 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
      HEAP32[i37 + 12 >> 2] = HEAP32[i28 + 12 >> 2];
      i53 = i54;
     }
     if ((i53 | 0) == (i36 | 0)) {
      i42 = 81;
      break L1;
     } else {
      i55 = i36;
      i56 = i53;
     }
     while (1) {
      i41 = i56;
      while (1) {
       i57 = i41 + 16 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i38, i41) | 0) {
        i58 = i55;
        break;
       } else {
        i41 = i57;
       }
      }
      while (1) {
       i58 = i58 - 16 | 0;
       if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i38, i58) | 0)) {
        break;
       }
      }
      if (i41 >>> 0 >= i58 >>> 0) {
       i38 = i41;
       continue L3;
      }
      i40 = i41;
      HEAP32[i27 >> 2] = HEAP32[i40 >> 2];
      HEAP32[i27 + 4 >> 2] = HEAP32[i40 + 4 >> 2];
      HEAP32[i27 + 8 >> 2] = HEAP32[i40 + 8 >> 2];
      HEAP32[i27 + 12 >> 2] = HEAP32[i40 + 12 >> 2];
      i49 = i58;
      HEAP32[i40 >> 2] = HEAP32[i49 >> 2];
      HEAP32[i40 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
      HEAP32[i40 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
      HEAP32[i40 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
      HEAP32[i49 >> 2] = HEAP32[i27 >> 2];
      HEAP32[i49 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
      HEAP32[i49 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
      HEAP32[i49 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
      i55 = i58;
      i56 = i57;
     }
    }
   } while (0);
   i43 = i38 + 16 | 0;
   L46 : do {
    if (i43 >>> 0 < i50 >>> 0) {
     i49 = i50;
     i40 = i43;
     i45 = i51;
     i46 = i44;
     while (1) {
      i47 = i40;
      while (1) {
       i59 = i47 + 16 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i47, i46) | 0) {
        i47 = i59;
       } else {
        i60 = i49;
        break;
       }
      }
      while (1) {
       i60 = i60 - 16 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i60, i46) | 0) {
        break;
       }
      }
      if (i47 >>> 0 > i60 >>> 0) {
       i61 = i47;
       i62 = i45;
       i63 = i46;
       break L46;
      }
      i41 = i47;
      HEAP32[i26 >> 2] = HEAP32[i41 >> 2];
      HEAP32[i26 + 4 >> 2] = HEAP32[i41 + 4 >> 2];
      HEAP32[i26 + 8 >> 2] = HEAP32[i41 + 8 >> 2];
      HEAP32[i26 + 12 >> 2] = HEAP32[i41 + 12 >> 2];
      i64 = i60;
      HEAP32[i41 >> 2] = HEAP32[i64 >> 2];
      HEAP32[i41 + 4 >> 2] = HEAP32[i64 + 4 >> 2];
      HEAP32[i41 + 8 >> 2] = HEAP32[i64 + 8 >> 2];
      HEAP32[i41 + 12 >> 2] = HEAP32[i64 + 12 >> 2];
      HEAP32[i64 >> 2] = HEAP32[i26 >> 2];
      HEAP32[i64 + 4 >> 2] = HEAP32[i26 + 4 >> 2];
      HEAP32[i64 + 8 >> 2] = HEAP32[i26 + 8 >> 2];
      HEAP32[i64 + 12 >> 2] = HEAP32[i26 + 12 >> 2];
      i49 = i60;
      i40 = i59;
      i45 = i45 + 1 | 0;
      i46 = (i46 | 0) == (i47 | 0) ? i60 : i46;
     }
    } else {
     i61 = i43;
     i62 = i51;
     i63 = i44;
    }
   } while (0);
   do {
    if ((i61 | 0) == (i63 | 0)) {
     i65 = i62;
    } else {
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i63, i61) | 0)) {
      i65 = i62;
      break;
     }
     i44 = i61;
     HEAP32[i25 >> 2] = HEAP32[i44 >> 2];
     HEAP32[i25 + 4 >> 2] = HEAP32[i44 + 4 >> 2];
     HEAP32[i25 + 8 >> 2] = HEAP32[i44 + 8 >> 2];
     HEAP32[i25 + 12 >> 2] = HEAP32[i44 + 12 >> 2];
     i43 = i63;
     HEAP32[i44 >> 2] = HEAP32[i43 >> 2];
     HEAP32[i44 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
     HEAP32[i44 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
     HEAP32[i44 + 12 >> 2] = HEAP32[i43 + 12 >> 2];
     HEAP32[i43 >> 2] = HEAP32[i25 >> 2];
     HEAP32[i43 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
     HEAP32[i43 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
     HEAP32[i43 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
     i65 = i62 + 1 | 0;
    }
   } while (0);
   if ((i65 | 0) == 0) {
    i66 = __ZNSt3__127__insertion_sort_incompleteIRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEbT0_S9_T_(i38, i61, i3) | 0;
    i43 = i61 + 16 | 0;
    if (__ZNSt3__127__insertion_sort_incompleteIRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEbT0_S9_T_(i43, i1, i3) | 0) {
     i42 = 75;
     break;
    }
    if (i66) {
     i38 = i43;
     continue;
    }
   }
   i43 = i61;
   if ((i43 - i39 | 0) >= (i2 - i43 | 0)) {
    i42 = 79;
    break;
   }
   __ZNSt3__16__sortIRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEvT0_S9_T_(i38, i61, i3);
   i38 = i61 + 16 | 0;
  }
  if ((i42 | 0) == 75) {
   i42 = 0;
   if (i66) {
    i42 = 82;
    break;
   } else {
    i35 = i38;
    i1 = i61;
    continue;
   }
  } else if ((i42 | 0) == 79) {
   i42 = 0;
   __ZNSt3__16__sortIRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEvT0_S9_T_(i61 + 16 | 0, i1, i3);
   i35 = i38;
   i1 = i61;
   continue;
  }
 }
 if ((i42 | 0) == 6) {
  i61 = i38 + 16 | 0;
  i35 = i15;
  _llvm_lifetime_start(16, 0, i35 | 0);
  i15 = i16;
  _llvm_lifetime_start(16, 0, i15 | 0);
  i16 = i17;
  _llvm_lifetime_start(16, 0, i16 | 0);
  i17 = i18;
  _llvm_lifetime_start(16, 0, i17 | 0);
  i18 = i19;
  _llvm_lifetime_start(16, 0, i18 | 0);
  i19 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i61, i38) | 0;
  i66 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i36, i61) | 0;
  if (!i19) {
   if (!i66) {
    STACKTOP = i4;
    return;
   }
   i19 = i61;
   HEAP32[i18 >> 2] = HEAP32[i19 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
   HEAP32[i19 >> 2] = HEAP32[i37 >> 2];
   HEAP32[i19 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
   HEAP32[i19 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
   HEAP32[i19 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
   HEAP32[i37 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i37 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i37 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i37 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i61, i38) | 0)) {
    STACKTOP = i4;
    return;
   }
   i18 = i38;
   HEAP32[i16 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i16 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i16 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i16 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   HEAP32[i18 >> 2] = HEAP32[i19 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
   HEAP32[i19 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i19 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
   HEAP32[i19 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
   HEAP32[i19 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
   STACKTOP = i4;
   return;
  }
  i16 = i38;
  if (i66) {
   HEAP32[i35 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i35 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
   HEAP32[i35 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
   HEAP32[i35 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
   HEAP32[i16 >> 2] = HEAP32[i37 >> 2];
   HEAP32[i16 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
   HEAP32[i16 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
   HEAP32[i16 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
   HEAP32[i37 >> 2] = HEAP32[i35 >> 2];
   HEAP32[i37 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
   HEAP32[i37 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
   HEAP32[i37 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
   STACKTOP = i4;
   return;
  }
  HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i15 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
  HEAP32[i15 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
  HEAP32[i15 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
  i35 = i61;
  HEAP32[i16 >> 2] = HEAP32[i35 >> 2];
  HEAP32[i16 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
  HEAP32[i16 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
  HEAP32[i16 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
  HEAP32[i35 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i35 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
  HEAP32[i35 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
  HEAP32[i35 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i36, i61) | 0)) {
   STACKTOP = i4;
   return;
  }
  HEAP32[i17 >> 2] = HEAP32[i35 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
  HEAP32[i17 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
  HEAP32[i35 >> 2] = HEAP32[i37 >> 2];
  HEAP32[i35 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
  HEAP32[i35 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
  HEAP32[i35 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
  HEAP32[i37 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i37 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
  HEAP32[i37 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
  HEAP32[i37 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
  STACKTOP = i4;
  return;
 } else if ((i42 | 0) == 15) {
  i17 = i38 + 16 | 0;
  i35 = i38 + 32 | 0;
  i61 = i38 + 48 | 0;
  i15 = i11;
  _llvm_lifetime_start(16, 0, i15 | 0);
  i11 = i12;
  _llvm_lifetime_start(16, 0, i11 | 0);
  i12 = i13;
  _llvm_lifetime_start(16, 0, i12 | 0);
  i13 = i14;
  _llvm_lifetime_start(16, 0, i13 | 0);
  __ZNSt3__17__sort4IRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEjT0_S9_S9_S9_T_(i38, i17, i35, i61, i3) | 0;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i36, i61) | 0)) {
   STACKTOP = i4;
   return;
  }
  i14 = i61;
  HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
  HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
  HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
  HEAP32[i14 >> 2] = HEAP32[i37 >> 2];
  HEAP32[i14 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
  HEAP32[i14 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
  HEAP32[i14 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
  HEAP32[i37 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i37 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
  HEAP32[i37 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
  HEAP32[i37 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i61, i35) | 0)) {
   STACKTOP = i4;
   return;
  }
  i61 = i35;
  HEAP32[i11 >> 2] = HEAP32[i61 >> 2];
  HEAP32[i11 + 4 >> 2] = HEAP32[i61 + 4 >> 2];
  HEAP32[i11 + 8 >> 2] = HEAP32[i61 + 8 >> 2];
  HEAP32[i11 + 12 >> 2] = HEAP32[i61 + 12 >> 2];
  HEAP32[i61 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i61 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
  HEAP32[i61 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
  HEAP32[i61 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
  HEAP32[i14 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i14 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
  HEAP32[i14 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
  HEAP32[i14 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i35, i17) | 0)) {
   STACKTOP = i4;
   return;
  }
  i35 = i17;
  HEAP32[i15 >> 2] = HEAP32[i35 >> 2];
  HEAP32[i15 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
  HEAP32[i15 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
  HEAP32[i15 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
  HEAP32[i35 >> 2] = HEAP32[i61 >> 2];
  HEAP32[i35 + 4 >> 2] = HEAP32[i61 + 4 >> 2];
  HEAP32[i35 + 8 >> 2] = HEAP32[i61 + 8 >> 2];
  HEAP32[i35 + 12 >> 2] = HEAP32[i61 + 12 >> 2];
  HEAP32[i61 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i61 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
  HEAP32[i61 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
  HEAP32[i61 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i17, i38) | 0)) {
   STACKTOP = i4;
   return;
  }
  i17 = i38;
  HEAP32[i12 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i12 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
  HEAP32[i12 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
  HEAP32[i12 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
  HEAP32[i17 >> 2] = HEAP32[i35 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
  HEAP32[i17 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
  HEAP32[i35 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i35 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
  HEAP32[i35 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
  HEAP32[i35 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
  STACKTOP = i4;
  return;
 } else if ((i42 | 0) == 21) {
  i12 = i10;
  i35 = i38 + 32 | 0;
  i17 = i38 + 16 | 0;
  i15 = i5;
  _llvm_lifetime_start(16, 0, i15 | 0);
  i5 = i6;
  _llvm_lifetime_start(16, 0, i5 | 0);
  i6 = i7;
  _llvm_lifetime_start(16, 0, i6 | 0);
  i7 = i8;
  _llvm_lifetime_start(16, 0, i7 | 0);
  i8 = i9;
  _llvm_lifetime_start(16, 0, i8 | 0);
  i9 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i17, i38) | 0;
  i61 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i35, i17) | 0;
  do {
   if (i9) {
    i11 = i38;
    if (i61) {
     HEAP32[i15 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i15 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
     HEAP32[i15 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
     HEAP32[i15 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
     i14 = i35;
     HEAP32[i11 >> 2] = HEAP32[i14 >> 2];
     HEAP32[i11 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
     HEAP32[i11 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
     HEAP32[i11 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
     HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i14 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
     HEAP32[i14 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
     HEAP32[i14 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
     break;
    }
    HEAP32[i5 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i5 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
    HEAP32[i5 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
    HEAP32[i5 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
    i14 = i17;
    HEAP32[i11 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i11 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
    HEAP32[i11 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
    HEAP32[i11 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
    HEAP32[i14 >> 2] = HEAP32[i5 >> 2];
    HEAP32[i14 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
    HEAP32[i14 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
    HEAP32[i14 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i35, i17) | 0)) {
     break;
    }
    HEAP32[i7 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i7 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
    HEAP32[i7 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
    HEAP32[i7 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
    i11 = i35;
    HEAP32[i14 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i14 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
    HEAP32[i14 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
    HEAP32[i14 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
    HEAP32[i11 >> 2] = HEAP32[i7 >> 2];
    HEAP32[i11 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
    HEAP32[i11 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
    HEAP32[i11 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
   } else {
    if (!i61) {
     break;
    }
    i11 = i17;
    HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i8 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
    HEAP32[i8 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
    HEAP32[i8 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
    i14 = i35;
    HEAP32[i11 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i11 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
    HEAP32[i11 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
    HEAP32[i11 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
    HEAP32[i14 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i14 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
    HEAP32[i14 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
    HEAP32[i14 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i17, i38) | 0)) {
     break;
    }
    i14 = i38;
    HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i6 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
    HEAP32[i6 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
    HEAP32[i6 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
    HEAP32[i14 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i14 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
    HEAP32[i14 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
    HEAP32[i14 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
    HEAP32[i11 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i11 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
    HEAP32[i11 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
    HEAP32[i11 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   }
  } while (0);
  _llvm_lifetime_end(16, 0, i15 | 0);
  _llvm_lifetime_end(16, 0, i5 | 0);
  _llvm_lifetime_end(16, 0, i6 | 0);
  _llvm_lifetime_end(16, 0, i7 | 0);
  _llvm_lifetime_end(16, 0, i8 | 0);
  i8 = i38 + 48 | 0;
  if ((i8 | 0) == (i1 | 0)) {
   STACKTOP = i4;
   return;
  } else {
   i67 = i35;
   i68 = i8;
  }
  while (1) {
   if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i68, i67) | 0) {
    i8 = i68;
    HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i12 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
    HEAP32[i12 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
    HEAP32[i12 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
    i8 = i67;
    i35 = i68;
    while (1) {
     i7 = i35;
     i69 = i8;
     HEAP32[i7 >> 2] = HEAP32[i69 >> 2];
     HEAP32[i7 + 4 >> 2] = HEAP32[i69 + 4 >> 2];
     HEAP32[i7 + 8 >> 2] = HEAP32[i69 + 8 >> 2];
     HEAP32[i7 + 12 >> 2] = HEAP32[i69 + 12 >> 2];
     if ((i8 | 0) == (i38 | 0)) {
      break;
     }
     i7 = i8 - 16 | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i10, i7) | 0) {
      i35 = i8;
      i8 = i7;
     } else {
      break;
     }
    }
    HEAP32[i69 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i69 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
    HEAP32[i69 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
    HEAP32[i69 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
   }
   i8 = i68 + 16 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i67 = i68;
    i68 = i8;
   }
  }
  STACKTOP = i4;
  return;
 } else if ((i42 | 0) == 14) {
  __ZNSt3__17__sort4IRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEjT0_S9_S9_S9_T_(i38, i38 + 16 | 0, i38 + 32 | 0, i36, i3) | 0;
  STACKTOP = i4;
  return;
 } else if ((i42 | 0) == 4) {
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i36, i38) | 0)) {
   STACKTOP = i4;
   return;
  }
  i36 = i20;
  i20 = i38;
  HEAP32[i36 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i36 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
  HEAP32[i36 + 8 >> 2] = HEAP32[i20 + 8 >> 2];
  HEAP32[i36 + 12 >> 2] = HEAP32[i20 + 12 >> 2];
  HEAP32[i20 >> 2] = HEAP32[i37 >> 2];
  HEAP32[i20 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
  HEAP32[i20 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
  HEAP32[i20 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
  HEAP32[i37 >> 2] = HEAP32[i36 >> 2];
  HEAP32[i37 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
  HEAP32[i37 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
  HEAP32[i37 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
  STACKTOP = i4;
  return;
 } else if ((i42 | 0) == 81) {
  STACKTOP = i4;
  return;
 } else if ((i42 | 0) == 82) {
  STACKTOP = i4;
  return;
 } else if ((i42 | 0) == 84) {
  STACKTOP = i4;
  return;
 } else if ((i42 | 0) == 94) {
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore12PolygonShape31firstIncludedIntervalLogicalTopENS_10LayoutUnitERKNS_10LayoutSizeERS1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, d24 = +0, i25 = 0, d26 = +0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, d124 = +0, d125 = +0, d126 = +0, d127 = +0, d128 = +0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, d135 = +0, d136 = +0, i137 = 0, d138 = +0, d139 = +0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, d147 = +0, d148 = +0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 376 | 0;
 i6 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 96 | 0;
 i12 = i5 + 128 | 0;
 i13 = i5 + 160 | 0;
 i14 = i5 + 192 | 0;
 i15 = i5 + 224 | 0;
 i16 = i5 + 256 | 0;
 i17 = i5 + 288 | 0;
 i18 = i5 + 320 | 0;
 i19 = i5 + 352 | 0;
 i20 = i5 + 360 | 0;
 i21 = i20 | 0;
 i22 = i20;
 d23 = +(HEAP32[i2 >> 2] | 0);
 i2 = i3 + 4 | 0;
 d24 = +(HEAP32[i2 >> 2] | 0);
 i25 = i3 | 0;
 d26 = +(HEAP32[i25 >> 2] | 0);
 i3 = __ZNK7WebCore12PolygonShape18shapePaddingBoundsEv(i1) | 0;
 i1 = i3 + 8 | 0;
 d27 = +HEAPF32[i3 + 12 >> 2];
 i28 = i3 + 16 | 0;
 if (d26 > +HEAPF32[i28 >> 2]) {
  i29 = 0;
  STACKTOP = i5;
  return i29 | 0;
 }
 d30 = d27 < d23 ? d23 : d27;
 d31 = d27 + +HEAPF32[i3 + 20 >> 2];
 if (d24 + d30 > d31) {
  i29 = 0;
  STACKTOP = i5;
  return i29 | 0;
 }
 i32 = i7 | 0;
 HEAP32[i32 >> 2] = 0;
 i33 = i7 + 4 | 0;
 HEAP32[i33 >> 2] = 0;
 i34 = i7 + 8 | 0;
 HEAP32[i34 >> 2] = 0;
 __ZNK7WebCore12FloatPolygon16overlappingEdgesEffRN3WTF6VectorIPKNS_16FloatPolygonEdgeELj0ENS1_15CrashOnOverflowEEE(i3, d23, d31, i7) | 0;
 d31 = d26 * +.5;
 d26 = d24 * +.5;
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = 0;
 i35 = i8 + 4 | 0;
 HEAP32[i35 >> 2] = 0;
 i36 = i8 + 8 | 0;
 HEAP32[i36 >> 2] = 0;
 if ((HEAP32[i34 >> 2] | 0) == 0) {
  i37 = 0;
  i38 = 0;
 } else {
  i39 = i9 | 0;
  i40 = i9 + 4 | 0;
  i41 = i9 + 8 | 0;
  i42 = i12 | 0;
  i43 = i12 + 4 | 0;
  i44 = i12 + 8 | 0;
  i45 = i12 + 12 | 0;
  i46 = i12 + 16 | 0;
  i47 = i12 + 20 | 0;
  i48 = i12 + 24 | 0;
  i49 = i13 | 0;
  i50 = i13 + 4 | 0;
  i51 = i13 + 8 | 0;
  i52 = i13 + 12 | 0;
  i53 = i13 + 16 | 0;
  i54 = i13 + 20 | 0;
  i55 = i13 + 24 | 0;
  i56 = i13 + 4 | 0;
  i57 = i13 + 12 | 0;
  i58 = i15 | 0;
  i59 = i15 + 4 | 0;
  i60 = i15 + 8 | 0;
  i61 = i15 + 12 | 0;
  i62 = i15 + 16 | 0;
  i63 = i15 + 20 | 0;
  i64 = i15 + 24 | 0;
  i65 = i15 + 4 | 0;
  i66 = i15 + 12 | 0;
  i67 = i17 | 0;
  i68 = i17 + 4 | 0;
  i69 = i17 + 8 | 0;
  i70 = i17 + 12 | 0;
  i71 = i17 + 16 | 0;
  i72 = i17 + 20 | 0;
  i73 = i17 + 24 | 0;
  i74 = i17 + 4 | 0;
  i75 = i17 + 12 | 0;
  i76 = i16 | 0;
  i77 = i16 + 4 | 0;
  i78 = i16 + 8 | 0;
  i79 = i16 + 12 | 0;
  i80 = i16 + 16 | 0;
  i81 = i16 + 20 | 0;
  i82 = i16 + 24 | 0;
  i83 = i16 + 4 | 0;
  i84 = i16 + 12 | 0;
  i85 = i14 | 0;
  i86 = i14 + 4 | 0;
  i87 = i14 + 8 | 0;
  i88 = i14 + 12 | 0;
  i89 = i14 + 16 | 0;
  i90 = i14 + 20 | 0;
  i91 = i14 + 24 | 0;
  i92 = i14 + 4 | 0;
  i93 = i14 + 12 | 0;
  i94 = i10 | 0;
  i95 = i10 + 4 | 0;
  i96 = i10 + 8 | 0;
  i97 = i10 + 12 | 0;
  i98 = i10 + 16 | 0;
  i99 = i10 + 20 | 0;
  i100 = i10 + 24 | 0;
  i101 = i11 | 0;
  i102 = i11 + 4 | 0;
  i103 = i11 + 8 | 0;
  i104 = i11 + 12 | 0;
  i105 = i11 + 16 | 0;
  i106 = i11 + 20 | 0;
  i107 = i11 + 24 | 0;
  i108 = i11 + 4 | 0;
  i109 = i11 + 12 | 0;
  i110 = 0;
  while (1) {
   i111 = HEAP32[(HEAP32[i32 >> 2] | 0) + (i110 << 2) >> 2] | 0;
   i112 = HEAP32[i111 + 16 >> 2] | 0;
   i113 = i111 + 12 | 0;
   i114 = HEAP32[i112 + 36 >> 2] | 0;
   i115 = (HEAP32[i112 + 28 >> 2] | 0) + (((((HEAP32[i113 >> 2] | 0) - 1 + i114 | 0) >>> 0) % (i114 >>> 0) & -1) * 20 & -1) | 0;
   i114 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i115 >> 2] | 0) + 8 >> 2] & 15](i115) | 0;
   i115 = i111;
   i112 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i115 >> 2] | 0) + 8 >> 2] & 15](i111) | 0;
   i116 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i115 >> 2] | 0) + 12 >> 2] & 15](i111) | 0;
   HEAP32[i39 >> 2] = 0;
   HEAP32[i40 >> 2] = 0;
   HEAP32[i41 >> 2] = 0;
   i117 = i116 + 4 | 0;
   i118 = i112 + 4 | 0;
   if (+HEAPF32[i117 >> 2] > +HEAPF32[i118 >> 2]) {
    if (+HEAPF32[i116 >> 2] < +HEAPF32[i112 >> 2]) {
     i119 = 11;
    } else {
     i119 = 8;
    }
   } else {
    if (+HEAPF32[i112 >> 2] < +HEAPF32[i116 >> 2]) {
     i119 = 11;
    } else {
     i119 = 8;
    }
   }
   do {
    if ((i119 | 0) == 8) {
     i119 = 0;
     HEAP32[i94 >> 2] = H_BASE + 16;
     i120 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i115 >> 2] | 0) + 8 >> 2] & 15](i111) | 0;
     d24 = +HEAPF32[i120 + 4 >> 2] - d26;
     HEAPF32[i95 >> 2] = d31 + +HEAPF32[i120 >> 2];
     HEAPF32[i96 >> 2] = d24;
     i120 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i115 >> 2] | 0) + 12 >> 2] & 15](i111) | 0;
     d24 = +HEAPF32[i120 + 4 >> 2] - d26;
     HEAPF32[i97 >> 2] = d31 + +HEAPF32[i120 >> 2];
     HEAPF32[i98 >> 2] = d24;
     HEAP32[i99 >> 2] = HEAP32[i113 >> 2];
     HEAP32[i100 >> 2] = 0;
     __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i9, i10);
     i120 = HEAP32[i41 >> 2] | 0;
     i121 = HEAP32[i40 >> 2] | 0;
     HEAP32[i101 >> 2] = H_BASE + 16;
     i122 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i115 >> 2] | 0) + 8 >> 2] & 15](i111) | 0;
     d24 = d26 + +HEAPF32[i122 + 4 >> 2];
     HEAPF32[i102 >> 2] = +HEAPF32[i122 >> 2] - d31;
     HEAPF32[i103 >> 2] = d24;
     i122 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i115 >> 2] | 0) + 12 >> 2] & 15](i111) | 0;
     d24 = d26 + +HEAPF32[i122 + 4 >> 2];
     HEAPF32[i104 >> 2] = +HEAPF32[i122 >> 2] - d31;
     HEAPF32[i105 >> 2] = d24;
     HEAP32[i106 >> 2] = HEAP32[i113 >> 2];
     HEAP32[i107 >> 2] = 0;
     if ((i120 | 0) == (i121 | 0)) {
      __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i9, i11);
      break;
     } else {
      i121 = HEAP32[i39 >> 2] | 0;
      HEAP32[i121 + (i120 * 28 & -1) >> 2] = H_BASE + 16;
      i122 = i121 + (i120 * 28 & -1) + 4 | 0;
      i123 = HEAP32[i108 + 4 >> 2] | 0;
      HEAP32[i122 >> 2] = HEAP32[i108 >> 2];
      HEAP32[i122 + 4 >> 2] = i123;
      i123 = i121 + (i120 * 28 & -1) + 12 | 0;
      i122 = HEAP32[i109 + 4 >> 2] | 0;
      HEAP32[i123 >> 2] = HEAP32[i109 >> 2];
      HEAP32[i123 + 4 >> 2] = i122;
      HEAP32[i121 + (i120 * 28 & -1) + 20 >> 2] = HEAP32[i106 >> 2];
      HEAP32[i121 + (i120 * 28 & -1) + 24 >> 2] = HEAP32[i107 >> 2];
      HEAP32[i41 >> 2] = i120 + 1;
      break;
     }
    } else if ((i119 | 0) == 11) {
     i119 = 0;
     HEAP32[i42 >> 2] = H_BASE + 16;
     i120 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i115 >> 2] | 0) + 8 >> 2] & 15](i111) | 0;
     d24 = d26 + +HEAPF32[i120 + 4 >> 2];
     HEAPF32[i43 >> 2] = d31 + +HEAPF32[i120 >> 2];
     HEAPF32[i44 >> 2] = d24;
     i120 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i115 >> 2] | 0) + 12 >> 2] & 15](i111) | 0;
     d24 = d26 + +HEAPF32[i120 + 4 >> 2];
     HEAPF32[i45 >> 2] = d31 + +HEAPF32[i120 >> 2];
     HEAPF32[i46 >> 2] = d24;
     HEAP32[i47 >> 2] = HEAP32[i113 >> 2];
     HEAP32[i48 >> 2] = 0;
     __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i9, i12);
     i120 = HEAP32[i41 >> 2] | 0;
     i121 = HEAP32[i40 >> 2] | 0;
     HEAP32[i49 >> 2] = H_BASE + 16;
     i122 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i115 >> 2] | 0) + 8 >> 2] & 15](i111) | 0;
     d24 = +HEAPF32[i122 + 4 >> 2] - d26;
     HEAPF32[i50 >> 2] = +HEAPF32[i122 >> 2] - d31;
     HEAPF32[i51 >> 2] = d24;
     i122 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i115 >> 2] | 0) + 12 >> 2] & 15](i111) | 0;
     d24 = +HEAPF32[i122 + 4 >> 2] - d26;
     HEAPF32[i52 >> 2] = +HEAPF32[i122 >> 2] - d31;
     HEAPF32[i53 >> 2] = d24;
     HEAP32[i54 >> 2] = HEAP32[i113 >> 2];
     HEAP32[i55 >> 2] = 0;
     if ((i120 | 0) == (i121 | 0)) {
      __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i9, i13);
      break;
     } else {
      i121 = HEAP32[i39 >> 2] | 0;
      HEAP32[i121 + (i120 * 28 & -1) >> 2] = H_BASE + 16;
      i122 = i121 + (i120 * 28 & -1) + 4 | 0;
      i123 = HEAP32[i56 + 4 >> 2] | 0;
      HEAP32[i122 >> 2] = HEAP32[i56 >> 2];
      HEAP32[i122 + 4 >> 2] = i123;
      i123 = i121 + (i120 * 28 & -1) + 12 | 0;
      i122 = HEAP32[i57 + 4 >> 2] | 0;
      HEAP32[i123 >> 2] = HEAP32[i57 >> 2];
      HEAP32[i123 + 4 >> 2] = i122;
      HEAP32[i121 + (i120 * 28 & -1) + 20 >> 2] = HEAP32[i54 >> 2];
      HEAP32[i121 + (i120 * 28 & -1) + 24 >> 2] = HEAP32[i55 >> 2];
      HEAP32[i41 >> 2] = i120 + 1;
      break;
     }
    }
   } while (0);
   d24 = +HEAPF32[i114 >> 2];
   i113 = i114 + 4 | 0;
   d27 = +HEAPF32[i113 >> 2];
   i111 = i112 | 0;
   d124 = +HEAPF32[i111 >> 2];
   d125 = +HEAPF32[i116 >> 2];
   L24 : do {
    if ((d124 - d24) * (+HEAPF32[i117 >> 2] - d27) - (+HEAPF32[i118 >> 2] - d27) * (d125 - d24) < +0) {
     do {
      if (d125 > d124 | d24 > d124) {
       if (d125 < d124 | d24 < d124) {
        break;
       }
       HEAP32[i58 >> 2] = H_BASE + 16;
       d126 = +HEAPF32[i118 >> 2] - d26;
       HEAPF32[i59 >> 2] = +HEAPF32[i111 >> 2] - d31;
       HEAPF32[i60 >> 2] = d126;
       d126 = d26 + +HEAPF32[i118 >> 2];
       HEAPF32[i61 >> 2] = +HEAPF32[i111 >> 2] - d31;
       HEAPF32[i62 >> 2] = d126;
       HEAP32[i63 >> 2] = -1;
       HEAP32[i64 >> 2] = 1;
       i115 = HEAP32[i41 >> 2] | 0;
       if ((i115 | 0) == (HEAP32[i40 >> 2] | 0)) {
        __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i9, i15);
        break;
       } else {
        i120 = HEAP32[i39 >> 2] | 0;
        HEAP32[i120 + (i115 * 28 & -1) >> 2] = H_BASE + 16;
        i121 = i120 + (i115 * 28 & -1) + 4 | 0;
        i122 = HEAP32[i65 + 4 >> 2] | 0;
        HEAP32[i121 >> 2] = HEAP32[i65 >> 2];
        HEAP32[i121 + 4 >> 2] = i122;
        i122 = i120 + (i115 * 28 & -1) + 12 | 0;
        i121 = HEAP32[i66 + 4 >> 2] | 0;
        HEAP32[i122 >> 2] = HEAP32[i66 >> 2];
        HEAP32[i122 + 4 >> 2] = i121;
        HEAP32[i120 + (i115 * 28 & -1) + 20 >> 2] = HEAP32[i63 >> 2];
        HEAP32[i120 + (i115 * 28 & -1) + 24 >> 2] = HEAP32[i64 >> 2];
        HEAP32[i41 >> 2] = i115 + 1;
        break;
       }
      } else {
       HEAP32[i85 >> 2] = H_BASE + 16;
       d126 = +HEAPF32[i118 >> 2] - d26;
       HEAPF32[i86 >> 2] = d31 + +HEAPF32[i111 >> 2];
       HEAPF32[i87 >> 2] = d126;
       d126 = d26 + +HEAPF32[i118 >> 2];
       HEAPF32[i88 >> 2] = d31 + +HEAPF32[i111 >> 2];
       HEAPF32[i89 >> 2] = d126;
       HEAP32[i90 >> 2] = -1;
       HEAP32[i91 >> 2] = 1;
       i115 = HEAP32[i41 >> 2] | 0;
       if ((i115 | 0) == (HEAP32[i40 >> 2] | 0)) {
        __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i9, i14);
        break;
       } else {
        i120 = HEAP32[i39 >> 2] | 0;
        HEAP32[i120 + (i115 * 28 & -1) >> 2] = H_BASE + 16;
        i121 = i120 + (i115 * 28 & -1) + 4 | 0;
        i122 = HEAP32[i92 + 4 >> 2] | 0;
        HEAP32[i121 >> 2] = HEAP32[i92 >> 2];
        HEAP32[i121 + 4 >> 2] = i122;
        i122 = i120 + (i115 * 28 & -1) + 12 | 0;
        i121 = HEAP32[i93 + 4 >> 2] | 0;
        HEAP32[i122 >> 2] = HEAP32[i93 >> 2];
        HEAP32[i122 + 4 >> 2] = i121;
        HEAP32[i120 + (i115 * 28 & -1) + 20 >> 2] = HEAP32[i90 >> 2];
        HEAP32[i120 + (i115 * 28 & -1) + 24 >> 2] = HEAP32[i91 >> 2];
        HEAP32[i41 >> 2] = i115 + 1;
        break;
       }
      }
     } while (0);
     d126 = +HEAPF32[i117 >> 2];
     d127 = +HEAPF32[i118 >> 2];
     do {
      if (d126 <= d127) {
       if (+HEAPF32[i113 >> 2] > d127) {
        break;
       }
       HEAP32[i76 >> 2] = H_BASE + 16;
       d128 = d26 + +HEAPF32[i118 >> 2];
       HEAPF32[i77 >> 2] = +HEAPF32[i111 >> 2] - d31;
       HEAPF32[i78 >> 2] = d128;
       d128 = d26 + +HEAPF32[i118 >> 2];
       HEAPF32[i79 >> 2] = d31 + +HEAPF32[i111 >> 2];
       HEAPF32[i80 >> 2] = d128;
       HEAP32[i81 >> 2] = -1;
       HEAP32[i82 >> 2] = 1;
       i115 = HEAP32[i41 >> 2] | 0;
       if ((i115 | 0) == (HEAP32[i40 >> 2] | 0)) {
        __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i9, i16);
        i129 = 0;
        i119 = 33;
        break L24;
       } else {
        i120 = HEAP32[i39 >> 2] | 0;
        HEAP32[i120 + (i115 * 28 & -1) >> 2] = H_BASE + 16;
        i121 = i120 + (i115 * 28 & -1) + 4 | 0;
        i122 = HEAP32[i83 + 4 >> 2] | 0;
        HEAP32[i121 >> 2] = HEAP32[i83 >> 2];
        HEAP32[i121 + 4 >> 2] = i122;
        i122 = i120 + (i115 * 28 & -1) + 12 | 0;
        i121 = HEAP32[i84 + 4 >> 2] | 0;
        HEAP32[i122 >> 2] = HEAP32[i84 >> 2];
        HEAP32[i122 + 4 >> 2] = i121;
        HEAP32[i120 + (i115 * 28 & -1) + 20 >> 2] = HEAP32[i81 >> 2];
        HEAP32[i120 + (i115 * 28 & -1) + 24 >> 2] = HEAP32[i82 >> 2];
        i120 = i115 + 1 | 0;
        HEAP32[i41 >> 2] = i120;
        i130 = 0;
        i131 = i120;
        break L24;
       }
      }
     } while (0);
     if (d126 < d127) {
      i129 = 0;
      i119 = 33;
      break;
     }
     if (+HEAPF32[i113 >> 2] < d127) {
      i129 = 0;
      i119 = 33;
      break;
     }
     HEAP32[i67 >> 2] = H_BASE + 16;
     d128 = +HEAPF32[i118 >> 2] - d26;
     HEAPF32[i68 >> 2] = +HEAPF32[i111 >> 2] - d31;
     HEAPF32[i69 >> 2] = d128;
     d128 = +HEAPF32[i118 >> 2] - d26;
     HEAPF32[i70 >> 2] = d31 + +HEAPF32[i111 >> 2];
     HEAPF32[i71 >> 2] = d128;
     HEAP32[i72 >> 2] = -1;
     HEAP32[i73 >> 2] = 1;
     i120 = HEAP32[i41 >> 2] | 0;
     if ((i120 | 0) == (HEAP32[i40 >> 2] | 0)) {
      __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i9, i17);
      i129 = 0;
      i119 = 33;
      break;
     } else {
      i115 = HEAP32[i39 >> 2] | 0;
      HEAP32[i115 + (i120 * 28 & -1) >> 2] = H_BASE + 16;
      i121 = i115 + (i120 * 28 & -1) + 4 | 0;
      i122 = HEAP32[i74 + 4 >> 2] | 0;
      HEAP32[i121 >> 2] = HEAP32[i74 >> 2];
      HEAP32[i121 + 4 >> 2] = i122;
      i122 = i115 + (i120 * 28 & -1) + 12 | 0;
      i121 = HEAP32[i75 + 4 >> 2] | 0;
      HEAP32[i122 >> 2] = HEAP32[i75 >> 2];
      HEAP32[i122 + 4 >> 2] = i121;
      HEAP32[i115 + (i120 * 28 & -1) + 20 >> 2] = HEAP32[i72 >> 2];
      HEAP32[i115 + (i120 * 28 & -1) + 24 >> 2] = HEAP32[i73 >> 2];
      i115 = i120 + 1 | 0;
      HEAP32[i41 >> 2] = i115;
      i130 = 0;
      i131 = i115;
      break;
     }
    } else {
     i129 = 0;
     i119 = 33;
    }
   } while (0);
   while (1) {
    if ((i119 | 0) == 33) {
     i119 = 0;
     i130 = i129;
     i131 = HEAP32[i41 >> 2] | 0;
    }
    if (i130 >>> 0 >= i131 >>> 0) {
     break;
    }
    i111 = HEAP32[i39 >> 2] | 0;
    i118 = i111 + (i130 * 28 & -1) | 0;
    i113 = i118;
    d124 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i113 >> 2] | 0) + 8 >> 2] & 15](i118) | 0) + 4 >> 2];
    d24 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i113 >> 2] | 0) + 12 >> 2] & 15](i118) | 0) + 4 >> 2];
    do {
     if ((d124 < d24 ? d24 : d124) >= d30) {
      i118 = HEAP32[i36 >> 2] | 0;
      if ((i118 | 0) == (HEAP32[i35 >> 2] | 0)) {
       __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i8, i111 + (i130 * 28 & -1) | 0);
       break;
      } else {
       i113 = HEAP32[i7 >> 2] | 0;
       HEAP32[i113 + (i118 * 28 & -1) >> 2] = H_BASE + 16;
       i117 = i111 + (i130 * 28 & -1) + 4 | 0;
       i116 = i113 + (i118 * 28 & -1) + 4 | 0;
       i112 = HEAP32[i117 + 4 >> 2] | 0;
       HEAP32[i116 >> 2] = HEAP32[i117 >> 2];
       HEAP32[i116 + 4 >> 2] = i112;
       i112 = i111 + (i130 * 28 & -1) + 12 | 0;
       i116 = i113 + (i118 * 28 & -1) + 12 | 0;
       i117 = HEAP32[i112 + 4 >> 2] | 0;
       HEAP32[i116 >> 2] = HEAP32[i112 >> 2];
       HEAP32[i116 + 4 >> 2] = i117;
       HEAP32[i113 + (i118 * 28 & -1) + 20 >> 2] = HEAP32[i111 + (i130 * 28 & -1) + 20 >> 2];
       HEAP32[i113 + (i118 * 28 & -1) + 24 >> 2] = HEAP32[i111 + (i130 * 28 & -1) + 24 >> 2];
       HEAP32[i36 >> 2] = i118 + 1;
       break;
      }
     }
    } while (0);
    i129 = i130 + 1 | 0;
    i119 = 33;
   }
   i111 = HEAP32[i39 >> 2] | 0;
   if ((i131 | 0) != 0) {
    i118 = i111 + (i131 * 28 & -1) | 0;
    i113 = i111;
    while (1) {
     FUNCTION_TABLE_vi[HEAP32[HEAP32[i113 >> 2] >> 2] & 15](i113);
     i113 = i113 + 28 | 0;
     if ((i113 | 0) == (i118 | 0)) {
      break;
     }
    }
    HEAP32[i41 >> 2] = 0;
   }
   if ((i111 | 0) != 0) {
    HEAP32[i39 >> 2] = 0;
    HEAP32[i40 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i111);
   }
   i110 = i110 + 1 | 0;
   if (i110 >>> 0 >= (HEAP32[i34 >> 2] | 0) >>> 0) {
    break;
   }
  }
  i37 = HEAP32[i36 >> 2] | 0;
  i38 = HEAP32[i35 >> 2] | 0;
 }
 HEAP32[i18 >> 2] = H_BASE + 16;
 d30 = d23 + d26;
 HEAPF32[i18 + 4 >> 2] = +HEAPF32[i1 >> 2] + +0;
 HEAPF32[i18 + 8 >> 2] = d30;
 HEAPF32[i18 + 12 >> 2] = +HEAPF32[i1 >> 2] + +HEAPF32[i28 >> 2] + +0;
 HEAPF32[i18 + 16 >> 2] = d30;
 i28 = i18 + 20 | 0;
 HEAP32[i28 >> 2] = -1;
 i1 = i18 + 24 | 0;
 HEAP32[i1 >> 2] = 2;
 if ((i37 | 0) == (i38 | 0)) {
  __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i8, i18);
  i132 = HEAP32[i36 >> 2] | 0;
 } else {
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i8 + (i37 * 28 & -1) >> 2] = H_BASE + 16;
  i38 = i18 + 4 | 0;
  i110 = i8 + (i37 * 28 & -1) + 4 | 0;
  i40 = HEAP32[i38 + 4 >> 2] | 0;
  HEAP32[i110 >> 2] = HEAP32[i38 >> 2];
  HEAP32[i110 + 4 >> 2] = i40;
  i40 = i18 + 12 | 0;
  i18 = i8 + (i37 * 28 & -1) + 12 | 0;
  i110 = HEAP32[i40 + 4 >> 2] | 0;
  HEAP32[i18 >> 2] = HEAP32[i40 >> 2];
  HEAP32[i18 + 4 >> 2] = i110;
  HEAP32[i8 + (i37 * 28 & -1) + 20 >> 2] = HEAP32[i28 >> 2];
  HEAP32[i8 + (i37 * 28 & -1) + 24 >> 2] = HEAP32[i1 >> 2];
  i1 = i37 + 1 | 0;
  HEAP32[i36 >> 2] = i1;
  i132 = i1;
 }
 i1 = i19 | 0;
 HEAPF32[i1 >> 2] = +0;
 i37 = i19 + 4 | 0;
 HEAPF32[i37 >> 2] = +0;
 do {
  if ((i132 | 0) == 1) {
   i133 = 0;
   i134 = 1;
   i119 = 89;
  } else {
   i8 = i132 - 1 | 0;
   i28 = HEAP32[i7 >> 2] | 0;
   i110 = i20 + 8 | 0;
   i18 = i22 + 4 | 0;
   i40 = i20;
   i38 = i6 | 0;
   i39 = i6 + 4 | 0;
   i41 = i6 + 8 | 0;
   d30 = +0;
   d124 = +0;
   i131 = 0;
   i130 = 0;
   L78 : while (1) {
    i129 = i130 + 1 | 0;
    if (i129 >>> 0 < i132 >>> 0) {
     i73 = i28 + (i130 * 28 & -1) | 0;
     i72 = i132 >>> 0 > i130 >>> 0;
     i75 = i28 + (i130 * 28 & -1) + 24 | 0;
     i74 = i28 + (i130 * 28 & -1) + 20 | 0;
     d24 = d30;
     d127 = d124;
     i17 = i131;
     i9 = i129;
     while (1) {
      if (!i72) {
       i119 = 57;
       break L78;
      }
      do {
       if (__ZNK7WebCore10VertexPair12intersectionERKS0_RNS_10FloatPointE(i73, i28 + (i9 * 28 & -1) | 0, i19) | 0) {
        d126 = +HEAPF32[i1 >> 2] - d31;
        d125 = +HEAPF32[i37 >> 2] - d26;
        d27 = +(HEAP32[i25 >> 2] | 0);
        d128 = +(HEAP32[i2 >> 2] | 0);
        d135 = +d126;
        d136 = +d125;
        HEAPF32[i21 >> 2] = d135;
        HEAPF32[i21 + 4 >> 2] = d136;
        d136 = +d27;
        d27 = +d128;
        HEAPF32[i110 >> 2] = d136;
        HEAPF32[i110 + 4 >> 2] = d27;
        if ((HEAP32[i75 >> 2] | 0) != 2) {
         if (i132 >>> 0 <= i9 >>> 0) {
          i119 = 61;
          break L78;
         }
         if ((HEAP32[i28 + (i9 * 28 & -1) + 24 >> 2] | 0) != 2 & d125 < d23) {
          i137 = i17;
          d138 = d127;
          d139 = d24;
          break;
         }
        }
        if (!(d125 < d24 | i17 ^ 1)) {
         if (!(d125 == d24 & d126 < d127)) {
          i137 = 1;
          d138 = d127;
          d139 = d24;
          break;
         }
        }
        if (!(__ZNK7WebCore12FloatPolygon8containsERKNS_10FloatPointE(i3, i19) | 0)) {
         i137 = i17;
         d138 = d127;
         d139 = d24;
         break;
        }
        i71 = HEAP32[i74 >> 2] | 0;
        if (i132 >>> 0 <= i9 >>> 0) {
         i119 = 67;
         break L78;
        }
        i70 = HEAP32[i28 + (i9 * 28 & -1) + 20 >> 2] | 0;
        HEAP32[i38 >> 2] = 0;
        HEAP32[i39 >> 2] = 0;
        HEAP32[i41 >> 2] = 0;
        L96 : do {
         if (__ZNK7WebCore12FloatPolygon16overlappingEdgesEffRN3WTF6VectorIPKNS_16FloatPolygonEdgeELj0ENS1_15CrashOnOverflowEEE(i3, d125, d125 + d128, i6) | 0) {
          i69 = HEAP32[i41 >> 2] | 0;
          if ((i69 | 0) == 0) {
           i140 = 1;
           break;
          } else {
           i141 = 0;
           i142 = i69;
          }
          while (1) {
           i69 = HEAP32[(HEAP32[i38 >> 2] | 0) + (i141 << 2) >> 2] | 0;
           i68 = HEAP32[i69 + 12 >> 2] | 0;
           if ((i68 | 0) == (i71 | 0) | (i68 | 0) == (i70 | 0)) {
            i143 = i142;
           } else {
            if (__ZNK7WebCore10VertexPair12overlapsRectERKNS_9FloatRectE(i69 | 0, i22) | 0) {
             i144 = 0;
             i119 = 74;
             break L96;
            }
            i143 = HEAP32[i41 >> 2] | 0;
           }
           i69 = i141 + 1 | 0;
           if (i69 >>> 0 < i143 >>> 0) {
            i141 = i69;
            i142 = i143;
           } else {
            i145 = 1;
            i146 = i143;
            i119 = 75;
            break;
           }
          }
         } else {
          i144 = 1;
          i119 = 74;
         }
        } while (0);
        if ((i119 | 0) == 74) {
         i119 = 0;
         i145 = i144;
         i146 = HEAP32[i41 >> 2] | 0;
         i119 = 75;
        }
        do {
         if ((i119 | 0) == 75) {
          i119 = 0;
          if ((i146 | 0) == 0) {
           i140 = i145;
           break;
          }
          HEAP32[i41 >> 2] = 0;
          i140 = i145;
         }
        } while (0);
        i70 = HEAP32[i38 >> 2] | 0;
        if ((i70 | 0) != 0) {
         HEAP32[i38 >> 2] = 0;
         HEAP32[i39 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i70);
        }
        if (!i140) {
         i137 = i17;
         d138 = d127;
         d139 = d24;
         break;
        }
        i137 = 1;
        d138 = +HEAPF32[i40 >> 2];
        d139 = +HEAPF32[i18 >> 2];
       } else {
        i137 = i17;
        d138 = d127;
        d139 = d24;
       }
      } while (0);
      i70 = i9 + 1 | 0;
      if (i70 >>> 0 < i132 >>> 0) {
       d24 = d139;
       d127 = d138;
       i17 = i137;
       i9 = i70;
      } else {
       d147 = d139;
       d148 = d138;
       i149 = i137;
       break;
      }
     }
    } else {
     d147 = d30;
     d148 = d124;
     i149 = i131;
    }
    if (i129 >>> 0 < i8 >>> 0) {
     d30 = d147;
     d124 = d148;
     i131 = i149;
     i130 = i129;
    } else {
     i119 = 82;
     break;
    }
   }
   if ((i119 | 0) == 57) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i119 | 0) == 61) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i119 | 0) == 67) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i119 | 0) == 82) {
    if (i149) {
     d124 = +Math_ceil(d147);
     do {
      if (d124 < +2147483647) {
       if (d124 <= +-2147483648) {
        i150 = -2147483648;
        break;
       }
       i150 = ~~d124;
      } else {
       i150 = 2147483647;
      }
     } while (0);
     HEAP32[i4 >> 2] = i150;
     i151 = i149;
    } else {
     i151 = 0;
    }
    if ((i132 | 0) != 0) {
     i133 = i151;
     i134 = i132;
     i119 = 89;
     break;
    }
    i152 = HEAP32[i7 >> 2] | 0;
    i153 = i151;
    break;
   }
  }
 } while (0);
 if ((i119 | 0) == 89) {
  i119 = HEAP32[i7 >> 2] | 0;
  i151 = i119 + (i134 * 28 & -1) | 0;
  i134 = i119;
  while (1) {
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i134 >> 2] >> 2] & 15](i134);
   i134 = i134 + 28 | 0;
   if ((i134 | 0) == (i151 | 0)) {
    break;
   }
  }
  HEAP32[i36 >> 2] = 0;
  i152 = i119;
  i153 = i133;
 }
 if ((i152 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i35 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i152);
 }
 if ((HEAP32[i34 >> 2] | 0) != 0) {
  HEAP32[i34 >> 2] = 0;
 }
 i34 = HEAP32[i32 >> 2] | 0;
 if ((i34 | 0) == 0) {
  i29 = i153;
  STACKTOP = i5;
  return i29 | 0;
 }
 HEAP32[i32 >> 2] = 0;
 HEAP32[i33 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i34);
 i29 = i153;
 STACKTOP = i5;
 return i29 | 0;
}
function __ZNSt3__127__insertion_sort_incompleteIRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEbT0_S9_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 224 | 0;
 i11 = i4 + 240 | 0;
 switch (i2 - i1 >> 4 | 0) {
 case 5:
  {
   i12 = i1 + 16 | 0;
   i13 = i1 + 32 | 0;
   i14 = i1 + 48 | 0;
   i15 = i2 - 16 | 0;
   i16 = i4 + 80 | 0;
   _llvm_lifetime_start(16, 0, i16 | 0);
   i17 = i4 + 96 | 0;
   _llvm_lifetime_start(16, 0, i17 | 0);
   i18 = i4 + 112 | 0;
   _llvm_lifetime_start(16, 0, i18 | 0);
   i19 = i4 + 128 | 0;
   _llvm_lifetime_start(16, 0, i19 | 0);
   __ZNSt3__17__sort4IRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEjT0_S9_S9_S9_T_(i1, i12, i13, i14, i3) | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i15, i14) | 0)) {
    i20 = 1;
    STACKTOP = i4;
    return i20 | 0;
   }
   i21 = i14;
   HEAP32[i19 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i19 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
   HEAP32[i19 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
   HEAP32[i19 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
   i22 = i15;
   HEAP32[i21 >> 2] = HEAP32[i22 >> 2];
   HEAP32[i21 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
   HEAP32[i21 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
   HEAP32[i21 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
   HEAP32[i22 >> 2] = HEAP32[i19 >> 2];
   HEAP32[i22 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
   HEAP32[i22 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
   HEAP32[i22 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i14, i13) | 0)) {
    i20 = 1;
    STACKTOP = i4;
    return i20 | 0;
   }
   i14 = i13;
   HEAP32[i17 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
   HEAP32[i17 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   HEAP32[i14 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i14 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
   HEAP32[i14 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
   HEAP32[i14 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
   HEAP32[i21 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i21 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
   HEAP32[i21 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   HEAP32[i21 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i13, i12) | 0)) {
    i20 = 1;
    STACKTOP = i4;
    return i20 | 0;
   }
   i13 = i12;
   HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i16 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   HEAP32[i16 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
   HEAP32[i16 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   HEAP32[i14 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i14 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
   HEAP32[i14 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
   HEAP32[i14 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i12, i1) | 0)) {
    i20 = 1;
    STACKTOP = i4;
    return i20 | 0;
   }
   i12 = i1;
   HEAP32[i18 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
   HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i12 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   HEAP32[i12 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
   HEAP32[i12 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   HEAP32[i13 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   i20 = 1;
   STACKTOP = i4;
   return i20 | 0;
  }
 case 0:
 case 1:
  {
   i20 = 1;
   STACKTOP = i4;
   return i20 | 0;
  }
 case 3:
  {
   i18 = i1 + 16 | 0;
   i13 = i2 - 16 | 0;
   i12 = i4 + 144 | 0;
   _llvm_lifetime_start(16, 0, i12 | 0);
   i16 = i4 + 160 | 0;
   _llvm_lifetime_start(16, 0, i16 | 0);
   i14 = i4 + 176 | 0;
   _llvm_lifetime_start(16, 0, i14 | 0);
   i17 = i4 + 192 | 0;
   _llvm_lifetime_start(16, 0, i17 | 0);
   i21 = i4 + 208 | 0;
   _llvm_lifetime_start(16, 0, i21 | 0);
   i19 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i18, i1) | 0;
   i22 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i13, i18) | 0;
   if (!i19) {
    if (!i22) {
     i20 = 1;
     STACKTOP = i4;
     return i20 | 0;
    }
    i19 = i18;
    HEAP32[i21 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i21 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
    HEAP32[i21 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
    HEAP32[i21 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
    i15 = i13;
    HEAP32[i19 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i19 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
    HEAP32[i19 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
    HEAP32[i19 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
    HEAP32[i15 >> 2] = HEAP32[i21 >> 2];
    HEAP32[i15 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
    HEAP32[i15 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
    HEAP32[i15 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i18, i1) | 0)) {
     i20 = 1;
     STACKTOP = i4;
     return i20 | 0;
    }
    i21 = i1;
    HEAP32[i14 >> 2] = HEAP32[i21 >> 2];
    HEAP32[i14 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
    HEAP32[i14 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
    HEAP32[i14 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
    HEAP32[i21 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i21 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
    HEAP32[i21 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
    HEAP32[i21 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
    HEAP32[i19 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i19 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
    HEAP32[i19 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
    HEAP32[i19 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
    i20 = 1;
    STACKTOP = i4;
    return i20 | 0;
   }
   i14 = i1;
   if (i22) {
    HEAP32[i12 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i12 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
    HEAP32[i12 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
    HEAP32[i12 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
    i22 = i13;
    HEAP32[i14 >> 2] = HEAP32[i22 >> 2];
    HEAP32[i14 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
    HEAP32[i14 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
    HEAP32[i14 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
    HEAP32[i22 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i22 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
    HEAP32[i22 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
    HEAP32[i22 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
    i20 = 1;
    STACKTOP = i4;
    return i20 | 0;
   }
   HEAP32[i16 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i16 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
   HEAP32[i16 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
   HEAP32[i16 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   i12 = i18;
   HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i14 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i14 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i14 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
   HEAP32[i12 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i12 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
   HEAP32[i12 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
   HEAP32[i12 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i13, i18) | 0)) {
    i20 = 1;
    STACKTOP = i4;
    return i20 | 0;
   }
   HEAP32[i17 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i17 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
   i18 = i13;
   HEAP32[i12 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i12 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i12 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i12 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   HEAP32[i18 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
   i20 = 1;
   STACKTOP = i4;
   return i20 | 0;
  }
 case 4:
  {
   __ZNSt3__17__sort4IRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEjT0_S9_S9_S9_T_(i1, i1 + 16 | 0, i1 + 32 | 0, i2 - 16 | 0, i3) | 0;
   i20 = 1;
   STACKTOP = i4;
   return i20 | 0;
  }
 case 2:
  {
   i17 = i2 - 16 | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i17, i1) | 0)) {
    i20 = 1;
    STACKTOP = i4;
    return i20 | 0;
   }
   i18 = i10;
   i10 = i1;
   HEAP32[i18 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   i12 = i17;
   HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
   HEAP32[i12 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i12 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i12 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i12 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   i20 = 1;
   STACKTOP = i4;
   return i20 | 0;
  }
 default:
  {
   i18 = i1 + 32 | 0;
   i12 = i1 + 16 | 0;
   i10 = i5;
   _llvm_lifetime_start(16, 0, i10 | 0);
   i5 = i6;
   _llvm_lifetime_start(16, 0, i5 | 0);
   i6 = i7;
   _llvm_lifetime_start(16, 0, i6 | 0);
   i7 = i8;
   _llvm_lifetime_start(16, 0, i7 | 0);
   i8 = i9;
   _llvm_lifetime_start(16, 0, i8 | 0);
   i9 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i12, i1) | 0;
   i17 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i18, i12) | 0;
   do {
    if (i9) {
     i13 = i1;
     if (i17) {
      HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
      HEAP32[i10 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
      HEAP32[i10 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
      HEAP32[i10 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
      i16 = i18;
      HEAP32[i13 >> 2] = HEAP32[i16 >> 2];
      HEAP32[i13 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
      HEAP32[i13 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
      HEAP32[i13 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
      HEAP32[i16 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i16 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
      HEAP32[i16 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
      HEAP32[i16 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
      break;
     }
     HEAP32[i5 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i5 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
     HEAP32[i5 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
     HEAP32[i5 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
     i16 = i12;
     HEAP32[i13 >> 2] = HEAP32[i16 >> 2];
     HEAP32[i13 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
     HEAP32[i13 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
     HEAP32[i13 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
     HEAP32[i16 >> 2] = HEAP32[i5 >> 2];
     HEAP32[i16 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
     HEAP32[i16 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
     HEAP32[i16 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i18, i12) | 0)) {
      break;
     }
     HEAP32[i7 >> 2] = HEAP32[i16 >> 2];
     HEAP32[i7 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
     HEAP32[i7 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
     HEAP32[i7 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
     i13 = i18;
     HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i16 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
     HEAP32[i16 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
     HEAP32[i16 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
     HEAP32[i13 >> 2] = HEAP32[i7 >> 2];
     HEAP32[i13 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
     HEAP32[i13 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
     HEAP32[i13 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
    } else {
     if (!i17) {
      break;
     }
     i13 = i12;
     HEAP32[i8 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i8 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
     HEAP32[i8 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
     HEAP32[i8 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
     i16 = i18;
     HEAP32[i13 >> 2] = HEAP32[i16 >> 2];
     HEAP32[i13 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
     HEAP32[i13 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
     HEAP32[i13 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
     HEAP32[i16 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i16 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
     HEAP32[i16 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
     HEAP32[i16 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i12, i1) | 0)) {
      break;
     }
     i16 = i1;
     HEAP32[i6 >> 2] = HEAP32[i16 >> 2];
     HEAP32[i6 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
     HEAP32[i6 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
     HEAP32[i6 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
     HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i16 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
     HEAP32[i16 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
     HEAP32[i16 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
     HEAP32[i13 >> 2] = HEAP32[i6 >> 2];
     HEAP32[i13 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
     HEAP32[i13 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
     HEAP32[i13 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
    }
   } while (0);
   _llvm_lifetime_end(16, 0, i10 | 0);
   _llvm_lifetime_end(16, 0, i5 | 0);
   _llvm_lifetime_end(16, 0, i6 | 0);
   _llvm_lifetime_end(16, 0, i7 | 0);
   _llvm_lifetime_end(16, 0, i8 | 0);
   i8 = i1 + 48 | 0;
   if ((i8 | 0) == (i2 | 0)) {
    i20 = 1;
    STACKTOP = i4;
    return i20 | 0;
   }
   i7 = i11;
   i6 = i18;
   i18 = 0;
   i5 = i8;
   while (1) {
    if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i5, i6) | 0) {
     i8 = i5;
     HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
     HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
     HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
     i8 = i6;
     i10 = i5;
     while (1) {
      i12 = i10;
      i23 = i8;
      HEAP32[i12 >> 2] = HEAP32[i23 >> 2];
      HEAP32[i12 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
      HEAP32[i12 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
      HEAP32[i12 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
      if ((i8 | 0) == (i1 | 0)) {
       break;
      }
      i12 = i8 - 16 | 0;
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i11, i12) | 0) {
       i10 = i8;
       i8 = i12;
      } else {
       break;
      }
     }
     HEAP32[i23 >> 2] = HEAP32[i7 >> 2];
     HEAP32[i23 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
     HEAP32[i23 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
     HEAP32[i23 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
     i8 = i18 + 1 | 0;
     if ((i8 | 0) == 8) {
      break;
     } else {
      i24 = i8;
     }
    } else {
     i24 = i18;
    }
    i8 = i5 + 16 | 0;
    if ((i8 | 0) == (i2 | 0)) {
     i20 = 1;
     i25 = 48;
     break;
    } else {
     i6 = i5;
     i18 = i24;
     i5 = i8;
    }
   }
   if ((i25 | 0) == 48) {
    STACKTOP = i4;
    return i20 | 0;
   }
   i20 = (i5 + 16 | 0) == (i2 | 0);
   STACKTOP = i4;
   return i20 | 0;
  }
 }
 return 0;
}
function __ZNSt3__16__sortIRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEvT0_SA_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0;
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
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = i16;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = i18;
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
 STACKTOP = STACKTOP + 8 | 0;
 i29 = i28;
 i30 = i1;
 i1 = i2;
 L1 : while (1) {
  i2 = i1;
  i31 = i1 - 8 | 0;
  i32 = i31;
  i33 = i30;
  L3 : while (1) {
   i34 = i33;
   i35 = i2 - i34 | 0;
   i36 = i35 >> 3;
   switch (i36 | 0) {
   case 5:
    {
     i37 = 11;
     break L1;
     break;
    }
   case 3:
    {
     i37 = 6;
     break L1;
     break;
    }
   case 4:
    {
     i37 = 7;
     break L1;
     break;
    }
   case 2:
    {
     i37 = 4;
     break L1;
     break;
    }
   case 0:
   case 1:
    {
     i37 = 65;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i35 | 0) < 248) {
    i37 = 13;
    break L1;
   }
   i38 = (i36 | 0) / 2 & -1;
   i39 = i33 + (i38 << 3) | 0;
   if ((i35 | 0) > 7992) {
    i35 = (i36 | 0) / 4 & -1;
    i40 = __ZNSt3__17__sort5IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_SA_SA_T_(i33, i33 + (i35 << 3) | 0, i39, i33 + (i35 + i38 << 3) | 0, i31, i3) | 0;
   } else {
    i40 = __ZNSt3__17__sort3IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_T_(i33, i39, i31, i3) | 0;
   }
   i38 = HEAP32[i3 >> 2] | 0;
   i35 = i33;
   i36 = HEAP32[i35 + 4 >> 2] | 0;
   HEAP32[i12 >> 2] = HEAP32[i35 >> 2];
   HEAP32[i12 + 4 >> 2] = i36;
   do {
    if (FUNCTION_TABLE_iii[i38 & 7](i13, i39) | 0) {
     i41 = i31;
     i42 = i40;
    } else {
     i36 = i31;
     while (1) {
      i43 = i36 - 8 | 0;
      if ((i33 | 0) == (i43 | 0)) {
       break;
      }
      i44 = HEAP32[i3 >> 2] | 0;
      i45 = i43;
      i46 = HEAP32[i45 + 4 >> 2] | 0;
      HEAP32[i22 >> 2] = HEAP32[i45 >> 2];
      HEAP32[i22 + 4 >> 2] = i46;
      if (FUNCTION_TABLE_iii[i44 & 7](i23, i39) | 0) {
       i37 = 36;
       break;
      } else {
       i36 = i43;
      }
     }
     if ((i37 | 0) == 36) {
      i37 = 0;
      i36 = HEAP32[i35 >> 2] | 0;
      i44 = HEAP32[i35 + 4 >> 2] | 0;
      i46 = HEAP32[i45 + 4 >> 2] | 0;
      HEAP32[i35 >> 2] = HEAP32[i45 >> 2];
      HEAP32[i35 + 4 >> 2] = i46;
      HEAP32[i45 >> 2] = i36;
      HEAP32[i45 + 4 >> 2] = i44;
      i41 = i43;
      i42 = i40 + 1 | 0;
      break;
     }
     i44 = i33 + 8 | 0;
     i36 = HEAP32[i3 >> 2] | 0;
     i46 = HEAP32[i35 + 4 >> 2] | 0;
     HEAP32[i14 >> 2] = HEAP32[i35 >> 2];
     HEAP32[i14 + 4 >> 2] = i46;
     if (FUNCTION_TABLE_iii[i36 & 7](i15, i31) | 0) {
      i47 = i44;
     } else {
      i36 = i44;
      while (1) {
       if ((i36 | 0) == (i31 | 0)) {
        i37 = 59;
        break L1;
       }
       i44 = HEAP32[i3 >> 2] | 0;
       i46 = HEAP32[i35 + 4 >> 2] | 0;
       HEAP32[i16 >> 2] = HEAP32[i35 >> 2];
       HEAP32[i16 + 4 >> 2] = i46;
       i48 = i36 + 8 | 0;
       if (FUNCTION_TABLE_iii[i44 & 7](i17, i36) | 0) {
        break;
       } else {
        i36 = i48;
       }
      }
      i44 = i36;
      i46 = HEAP32[i44 >> 2] | 0;
      i49 = HEAP32[i44 + 4 >> 2] | 0;
      i50 = HEAP32[i32 + 4 >> 2] | 0;
      HEAP32[i44 >> 2] = HEAP32[i32 >> 2];
      HEAP32[i44 + 4 >> 2] = i50;
      HEAP32[i32 >> 2] = i46;
      HEAP32[i32 + 4 >> 2] = i49;
      i47 = i48;
     }
     if ((i47 | 0) == (i31 | 0)) {
      i37 = 60;
      break L1;
     } else {
      i51 = i31;
      i52 = i47;
     }
     while (1) {
      i49 = i52;
      while (1) {
       i46 = HEAP32[i3 >> 2] | 0;
       i50 = HEAP32[i35 + 4 >> 2] | 0;
       HEAP32[i18 >> 2] = HEAP32[i35 >> 2];
       HEAP32[i18 + 4 >> 2] = i50;
       i53 = i49 + 8 | 0;
       if (FUNCTION_TABLE_iii[i46 & 7](i19, i49) | 0) {
        i54 = i51;
        break;
       } else {
        i49 = i53;
       }
      }
      while (1) {
       i46 = HEAP32[i3 >> 2] | 0;
       i50 = HEAP32[i35 + 4 >> 2] | 0;
       HEAP32[i20 >> 2] = HEAP32[i35 >> 2];
       HEAP32[i20 + 4 >> 2] = i50;
       i54 = i54 - 8 | 0;
       if (!(FUNCTION_TABLE_iii[i46 & 7](i21, i54) | 0)) {
        break;
       }
      }
      if (i49 >>> 0 >= i54 >>> 0) {
       i33 = i49;
       continue L3;
      }
      i46 = i49;
      i50 = HEAP32[i46 >> 2] | 0;
      i44 = HEAP32[i46 + 4 >> 2] | 0;
      i55 = i54;
      i56 = HEAP32[i55 + 4 >> 2] | 0;
      HEAP32[i46 >> 2] = HEAP32[i55 >> 2];
      HEAP32[i46 + 4 >> 2] = i56;
      HEAP32[i55 >> 2] = i50;
      HEAP32[i55 + 4 >> 2] = i44;
      i51 = i54;
      i52 = i53;
     }
    }
   } while (0);
   i35 = i33 + 8 | 0;
   L33 : do {
    if (i35 >>> 0 < i41 >>> 0) {
     i38 = i41;
     i36 = i35;
     i44 = i42;
     i55 = i39;
     while (1) {
      i50 = i36;
      while (1) {
       i56 = HEAP32[i3 >> 2] | 0;
       i57 = i50;
       i46 = HEAP32[i57 + 4 >> 2] | 0;
       HEAP32[i24 >> 2] = HEAP32[i57 >> 2];
       HEAP32[i24 + 4 >> 2] = i46;
       i58 = i50 + 8 | 0;
       if (FUNCTION_TABLE_iii[i56 & 7](i25, i55) | 0) {
        i50 = i58;
       } else {
        i59 = i38;
        break;
       }
      }
      while (1) {
       i49 = HEAP32[i3 >> 2] | 0;
       i59 = i59 - 8 | 0;
       i60 = i59;
       i56 = HEAP32[i60 + 4 >> 2] | 0;
       HEAP32[i26 >> 2] = HEAP32[i60 >> 2];
       HEAP32[i26 + 4 >> 2] = i56;
       if (FUNCTION_TABLE_iii[i49 & 7](i27, i55) | 0) {
        break;
       }
      }
      if (i50 >>> 0 > i59 >>> 0) {
       i61 = i50;
       i62 = i44;
       i63 = i55;
       break L33;
      }
      i49 = HEAP32[i57 >> 2] | 0;
      i56 = HEAP32[i57 + 4 >> 2] | 0;
      i46 = HEAP32[i60 + 4 >> 2] | 0;
      HEAP32[i57 >> 2] = HEAP32[i60 >> 2];
      HEAP32[i57 + 4 >> 2] = i46;
      HEAP32[i60 >> 2] = i49;
      HEAP32[i60 + 4 >> 2] = i56;
      i38 = i59;
      i36 = i58;
      i44 = i44 + 1 | 0;
      i55 = (i55 | 0) == (i50 | 0) ? i59 : i55;
     }
    } else {
     i61 = i35;
     i62 = i42;
     i63 = i39;
    }
   } while (0);
   do {
    if ((i61 | 0) == (i63 | 0)) {
     i64 = i62;
    } else {
     i39 = HEAP32[i3 >> 2] | 0;
     i35 = i63;
     i55 = HEAP32[i35 + 4 >> 2] | 0;
     HEAP32[i28 >> 2] = HEAP32[i35 >> 2];
     HEAP32[i28 + 4 >> 2] = i55;
     if (!(FUNCTION_TABLE_iii[i39 & 7](i29, i61) | 0)) {
      i64 = i62;
      break;
     }
     i39 = i61;
     i55 = HEAP32[i39 >> 2] | 0;
     i44 = HEAP32[i39 + 4 >> 2] | 0;
     i36 = HEAP32[i35 + 4 >> 2] | 0;
     HEAP32[i39 >> 2] = HEAP32[i35 >> 2];
     HEAP32[i39 + 4 >> 2] = i36;
     HEAP32[i35 >> 2] = i55;
     HEAP32[i35 + 4 >> 2] = i44;
     i64 = i62 + 1 | 0;
    }
   } while (0);
   if ((i64 | 0) == 0) {
    i65 = __ZNSt3__127__insertion_sort_incompleteIRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEbT0_SA_T_(i33, i61, i3) | 0;
    i44 = i61 + 8 | 0;
    if (__ZNSt3__127__insertion_sort_incompleteIRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEbT0_SA_T_(i44, i1, i3) | 0) {
     i37 = 48;
     break;
    }
    if (i65) {
     i33 = i44;
     continue;
    }
   }
   i44 = i61;
   if ((i44 - i34 | 0) >= (i2 - i44 | 0)) {
    i37 = 52;
    break;
   }
   __ZNSt3__16__sortIRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEvT0_SA_T_(i33, i61, i3);
   i33 = i61 + 8 | 0;
  }
  if ((i37 | 0) == 48) {
   i37 = 0;
   if (i65) {
    i37 = 57;
    break;
   } else {
    i30 = i33;
    i1 = i61;
    continue;
   }
  } else if ((i37 | 0) == 52) {
   i37 = 0;
   __ZNSt3__16__sortIRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEvT0_SA_T_(i61 + 8 | 0, i1, i3);
   i30 = i33;
   i1 = i61;
   continue;
  }
 }
 if ((i37 | 0) == 11) {
  __ZNSt3__17__sort5IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_SA_SA_T_(i33, i33 + 8 | 0, i33 + 16 | 0, i33 + 24 | 0, i31, i3) | 0;
  STACKTOP = i4;
  return;
 } else if ((i37 | 0) == 6) {
  __ZNSt3__17__sort3IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_T_(i33, i33 + 8 | 0, i31, i3) | 0;
  STACKTOP = i4;
  return;
 } else if ((i37 | 0) == 13) {
  i31 = i5;
  i61 = i6;
  i30 = i33 + 16 | 0;
  __ZNSt3__17__sort3IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_T_(i33, i33 + 8 | 0, i30, i3) | 0;
  i65 = i33 + 24 | 0;
  if ((i65 | 0) == (i1 | 0)) {
   STACKTOP = i4;
   return;
  } else {
   i66 = i30;
   i67 = i65;
  }
  while (1) {
   i65 = HEAP32[i3 >> 2] | 0;
   i30 = i67;
   i64 = HEAP32[i30 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i30 >> 2];
   HEAP32[i5 + 4 >> 2] = i64;
   if (FUNCTION_TABLE_iii[i65 & 7](i31, i66) | 0) {
    i65 = HEAP32[i30 >> 2] | 0;
    i64 = HEAP32[i30 + 4 >> 2] | 0;
    i30 = i66;
    i62 = i67;
    while (1) {
     i68 = i30;
     i29 = i62;
     i28 = HEAP32[i68 + 4 >> 2] | 0;
     HEAP32[i29 >> 2] = HEAP32[i68 >> 2];
     HEAP32[i29 + 4 >> 2] = i28;
     if ((i30 | 0) == (i33 | 0)) {
      break;
     }
     i28 = HEAP32[i3 >> 2] | 0;
     HEAP32[i6 >> 2] = i65;
     HEAP32[i6 + 4 >> 2] = i64;
     i29 = i30 - 8 | 0;
     if (FUNCTION_TABLE_iii[i28 & 7](i61, i29) | 0) {
      i62 = i30;
      i30 = i29;
     } else {
      break;
     }
    }
    HEAP32[i68 >> 2] = i65;
    HEAP32[i68 + 4 >> 2] = i64;
   }
   i30 = i67 + 8 | 0;
   if ((i30 | 0) == (i1 | 0)) {
    break;
   } else {
    i66 = i67;
    i67 = i30;
   }
  }
  STACKTOP = i4;
  return;
 } else if ((i37 | 0) == 7) {
  i67 = i33 + 8 | 0;
  i66 = i33 + 16 | 0;
  __ZNSt3__17__sort3IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_T_(i33, i67, i66, i3) | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  i68 = HEAP32[i32 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i32 >> 2];
  HEAP32[i7 + 4 >> 2] = i68;
  if (!(FUNCTION_TABLE_iii[i1 & 7](i7, i66) | 0)) {
   STACKTOP = i4;
   return;
  }
  i7 = i66;
  i66 = HEAP32[i7 >> 2] | 0;
  i1 = HEAP32[i7 + 4 >> 2] | 0;
  i68 = HEAP32[i32 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i32 >> 2];
  HEAP32[i7 + 4 >> 2] = i68;
  HEAP32[i32 >> 2] = i66;
  HEAP32[i32 + 4 >> 2] = i1;
  i1 = HEAP32[i3 >> 2] | 0;
  i66 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i8 + 4 >> 2] = i66;
  if (!(FUNCTION_TABLE_iii[i1 & 7](i8, i67) | 0)) {
   STACKTOP = i4;
   return;
  }
  i8 = i67;
  i67 = HEAP32[i8 >> 2] | 0;
  i1 = HEAP32[i8 + 4 >> 2] | 0;
  i66 = HEAP32[i7 >> 2] | 0;
  i68 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = i66;
  HEAP32[i8 + 4 >> 2] = i68;
  HEAP32[i7 >> 2] = i67;
  HEAP32[i7 + 4 >> 2] = i1;
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i9 >> 2] = i66;
  HEAP32[i9 + 4 >> 2] = i68;
  if (!(FUNCTION_TABLE_iii[i1 & 7](i9, i33) | 0)) {
   STACKTOP = i4;
   return;
  }
  i9 = i33;
  i1 = HEAP32[i9 >> 2] | 0;
  i68 = HEAP32[i9 + 4 >> 2] | 0;
  i66 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i9 + 4 >> 2] = i66;
  HEAP32[i8 >> 2] = i1;
  HEAP32[i8 + 4 >> 2] = i68;
  STACKTOP = i4;
  return;
 } else if ((i37 | 0) == 4) {
  i68 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i32 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i32 >> 2];
  HEAP32[i10 + 4 >> 2] = i3;
  if (!(FUNCTION_TABLE_iii[i68 & 7](i11, i33) | 0)) {
   STACKTOP = i4;
   return;
  }
  i11 = i33;
  i33 = HEAP32[i11 >> 2] | 0;
  i68 = HEAP32[i11 + 4 >> 2] | 0;
  i3 = HEAP32[i32 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i32 >> 2];
  HEAP32[i11 + 4 >> 2] = i3;
  HEAP32[i32 >> 2] = i33;
  HEAP32[i32 + 4 >> 2] = i68;
  STACKTOP = i4;
  return;
 } else if ((i37 | 0) == 57) {
  STACKTOP = i4;
  return;
 } else if ((i37 | 0) == 59) {
  STACKTOP = i4;
  return;
 } else if ((i37 | 0) == 60) {
  STACKTOP = i4;
  return;
 } else if ((i37 | 0) == 65) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCoreL21computeXIntersectionsERKNS_12FloatPolygonEfbRN3WTF6VectorINS_13ShapeIntervalIfEELj0ENS3_15CrashOnOverflowEEE(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, d44 = +0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, d52 = +0, i53 = 0, i54 = 0, i55 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 48 | 0;
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i8 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i8 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 do {
  if (__ZNK7WebCore12FloatPolygon16overlappingEdgesEffRN3WTF6VectorIPKNS_16FloatPolygonEdgeELj0ENS1_15CrashOnOverflowEEE(i1, d2, d2, i8) | 0) {
   i14 = i9 | 0;
   HEAP32[i14 >> 2] = 0;
   i15 = i9 + 4 | 0;
   HEAP32[i15 >> 2] = 0;
   i16 = i9 + 8 | 0;
   HEAP32[i16 >> 2] = 0;
   HEAPF32[i10 + 4 >> 2] = +0;
   HEAPF32[i10 + 8 >> 2] = +0;
   if ((HEAP32[i13 >> 2] | 0) == 0) {
    break;
   }
   i17 = i10 + 12 | 0;
   i18 = i10;
   i19 = i10;
   i20 = 0;
   i21 = 0;
   i22 = 0;
   while (1) {
    do {
     if (__ZN7WebCoreL20computeXIntersectionEPKNS_16FloatPolygonEdgeEfRNS_16EdgeIntersectionE(HEAP32[(HEAP32[i11 >> 2] | 0) + (i20 << 2) >> 2] | 0, d2, i10) | 0) {
      if ((HEAP32[i17 >> 2] | 0) == 3) {
       i23 = i21;
       i24 = i22;
       break;
      }
      if ((i21 | 0) != (HEAP32[i15 >> 2] | 0)) {
       i25 = i22 + (i21 << 4) | 0;
       HEAP32[i25 >> 2] = HEAP32[i19 >> 2];
       HEAP32[i25 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
       HEAP32[i25 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
       HEAP32[i25 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
       i25 = i21 + 1 | 0;
       HEAP32[i16 >> 2] = i25;
       i23 = i25;
       i24 = i22;
       break;
      }
      i25 = i21 + 1 | 0;
      do {
       if (i22 >>> 0 > i10 >>> 0) {
        i26 = 10;
       } else {
        if ((i22 + (i21 << 4) | 0) >>> 0 <= i10 >>> 0) {
         i26 = 10;
         break;
        }
        __ZN3WTF6VectorIN7WebCore16EdgeIntersectionELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i25);
        i27 = HEAP32[i14 >> 2] | 0;
        i28 = i27 + (i18 - i22 >> 4 << 4) | 0;
        i29 = i27;
       }
      } while (0);
      if ((i26 | 0) == 10) {
       i26 = 0;
       __ZN3WTF6VectorIN7WebCore16EdgeIntersectionELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i9, i25);
       i28 = i10;
       i29 = HEAP32[i14 >> 2] | 0;
      }
      i27 = HEAP32[i16 >> 2] | 0;
      i30 = i29 + (i27 << 4) | 0;
      i31 = i28;
      HEAP32[i30 >> 2] = HEAP32[i31 >> 2];
      HEAP32[i30 + 4 >> 2] = HEAP32[i31 + 4 >> 2];
      HEAP32[i30 + 8 >> 2] = HEAP32[i31 + 8 >> 2];
      HEAP32[i30 + 12 >> 2] = HEAP32[i31 + 12 >> 2];
      i31 = i27 + 1 | 0;
      HEAP32[i16 >> 2] = i31;
      i23 = i31;
      i24 = i29;
     } else {
      i23 = i21;
      i24 = i22;
     }
    } while (0);
    i31 = i20 + 1 | 0;
    if (i31 >>> 0 < (HEAP32[i13 >> 2] | 0) >>> 0) {
     i20 = i31;
     i21 = i23;
     i22 = i24;
    } else {
     break;
    }
   }
   L20 : do {
    if (i23 >>> 0 >= 2 >>> 0) {
     HEAP32[i7 >> 2] = F_BASE_iii + 2;
     __ZNSt3__16__sortIRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEvT0_S9_T_(i24, i24 + (i23 << 4) | 0, i7);
     i22 = i1 + 4 | 0;
     i21 = i6;
     i20 = i4 + 8 | 0;
     i18 = i4 | 0;
     i19 = i6;
     i17 = i21 + 4 | 0;
     i31 = i4 + 4 | 0;
     i27 = i6;
     i30 = 0;
     i32 = 0;
     i33 = 0;
     L22 : while (1) {
      i34 = i24 + (i33 << 4) | 0;
      i35 = i33 + 1 | 0;
      do {
       if (i35 >>> 0 < i23 >>> 0) {
        if (+HEAPF32[i24 + (i33 << 4) + 4 >> 2] != +HEAPF32[i24 + (i35 << 4) + 4 >> 2]) {
         i26 = 20;
         break;
        }
        i36 = HEAP32[i24 + (i33 << 4) + 12 >> 2] | 0;
        if ((i36 - 1 | 0) >>> 0 >= 2 >>> 0) {
         i26 = 20;
         break;
        }
        i37 = (i36 | 0) == (HEAP32[i24 + (i35 << 4) + 12 >> 2] | 0) ? i33 + 2 | 0 : i35;
        i38 = i32;
        i39 = i30;
       } else {
        i26 = 20;
       }
      } while (0);
      L28 : do {
       if ((i26 | 0) == 20) {
        i26 = 0;
        i25 = i24 + (i33 << 4) + 12 | 0;
        i36 = HEAP32[i25 >> 2] | 0;
        do {
         if ((i36 | 0) != 0) {
          if ((i36 - 1 | 0) >>> 0 >= 2 >>> 0) {
           i37 = i35;
           i38 = i32;
           i39 = i30;
           break L28;
          }
          i40 = HEAP32[i34 >> 2] | 0;
          i41 = i40 + 16 | 0;
          i42 = HEAP32[i41 >> 2] | 0;
          i43 = i40;
          do {
           if ((i36 | 0) == 1) {
            d44 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 8 >> 2] & 15](i40) | 0) + 4 >> 2];
            if (d44 < +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 12 >> 2] & 15](i40) | 0) + 4 >> 2]) {
             i26 = 26;
             break;
            }
            if ((HEAP32[i25 >> 2] | 0) == 2) {
             i26 = 25;
            } else {
             i26 = 33;
            }
           } else {
            i26 = 25;
           }
          } while (0);
          if ((i26 | 0) == 25) {
           i26 = 0;
           d44 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 8 >> 2] & 15](i40) | 0) + 4 >> 2];
           if (d44 > +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 12 >> 2] & 15](i40) | 0) + 4 >> 2]) {
            i26 = 26;
           } else {
            i26 = 33;
           }
          }
          if ((i26 | 0) == 26) {
           i26 = 0;
           i45 = HEAP32[i41 >> 2] | 0;
           i46 = HEAP32[i45 + 36 >> 2] | 0;
           i47 = HEAP32[(HEAP32[i45 + 28 >> 2] | 0) + (((((HEAP32[i40 + 12 >> 2] | 0) - 1 + i46 | 0) >>> 0) % (i46 >>> 0) & -1) * 20 & -1) + 4 >> 2] | 0;
           i46 = HEAP32[i42 >> 2] | 0;
           i45 = HEAP32[i46 + 8 >> 2] | 0;
           if (i45 >>> 0 <= i47 >>> 0) {
            i26 = 27;
            break L22;
           }
           i48 = HEAP32[i46 >> 2] | 0;
           if (i45 >>> 0 <= (HEAP32[i40 + 4 >> 2] | 0) >>> 0) {
            i26 = 29;
            break L22;
           }
           i46 = HEAP32[i40 + 8 >> 2] | 0;
           if (i45 >>> 0 <= i46 >>> 0) {
            i26 = 31;
            break L22;
           }
           i49 = HEAP32[i48 + (i47 << 3) + 4 >> 2] | 0;
           i50 = i48 + (i46 << 3) | 0;
          } else if ((i26 | 0) == 33) {
           i26 = 0;
           i46 = HEAP32[i40 + 4 >> 2] | 0;
           i48 = HEAP32[i42 >> 2] | 0;
           i47 = HEAP32[i48 + 8 >> 2] | 0;
           if (i47 >>> 0 <= i46 >>> 0) {
            i26 = 34;
            break L22;
           }
           i45 = HEAP32[i48 >> 2] | 0;
           if (i47 >>> 0 <= (HEAP32[i40 + 8 >> 2] | 0) >>> 0) {
            i26 = 36;
            break L22;
           }
           i48 = HEAP32[i41 >> 2] | 0;
           i51 = HEAP32[(HEAP32[i48 + 28 >> 2] | 0) + (((((HEAP32[i40 + 12 >> 2] | 0) + 1 | 0) >>> 0) % ((HEAP32[i48 + 36 >> 2] | 0) >>> 0) & -1) * 20 & -1) + 8 >> 2] | 0;
           if (i47 >>> 0 <= i51 >>> 0) {
            i26 = 38;
            break L22;
           }
           i49 = HEAP32[i45 + (i46 << 3) + 4 >> 2] | 0;
           i50 = i45 + (i51 << 3) | 0;
          }
          d44 = (HEAP32[tempDoublePtr >> 2] = i49, +HEAPF32[tempDoublePtr >> 2]);
          d52 = +HEAPF32[i50 + 4 >> 2];
          if (d52 == d2) {
           if (i3) {
            if (d44 > d2) {
             break;
            } else {
             i37 = i35;
             i38 = i32;
             i39 = i30;
             break L28;
            }
           } else {
            if (d44 < d2) {
             break;
            } else {
             i37 = i35;
             i38 = i32;
             i39 = i30;
             break L28;
            }
           }
          }
          if (d44 != d2) {
           break;
          }
          if (i3) {
           if (d52 > d2) {
            break;
           } else {
            i37 = i35;
            i38 = i32;
            i39 = i30;
            break L28;
           }
          } else {
           if (d52 < d2) {
            break;
           } else {
            i37 = i35;
            i38 = i32;
            i39 = i30;
            break L28;
           }
          }
         }
        } while (0);
        if ((HEAP32[i22 >> 2] | 0) == 0) {
         i25 = HEAP32[i34 >> 2] | 0;
         i36 = i25;
         d52 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i36 >> 2] | 0) + 12 >> 2] & 15](i25) | 0) + 4 >> 2];
         i51 = d52 > +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i36 >> 2] | 0) + 8 >> 2] & 15](i25) | 0) + 4 >> 2];
         i53 = (i51 ? 1 : -1) + i30 | 0;
        } else {
         i53 = i30;
        }
        i51 = i32 ^ 1;
        if (!((i53 | 0) == 0 | i51)) {
         i37 = i35;
         i38 = i32;
         i39 = i53;
         break;
        }
        d52 = +HEAPF32[i24 + (i33 << 4) + 4 >> 2];
        if (i32) {
         i25 = _llvm_uadd_with_overflow_i32(HEAP32[i20 >> 2] | 0, -1 | 0) | 0;
         if (!tempRet0) {
          i26 = 61;
          break L22;
         }
         HEAPF32[(HEAP32[i18 >> 2] | 0) + (i25 << 3) + 4 >> 2] = d52;
         i37 = i35;
         i38 = i51;
         i39 = i53;
         break;
        }
        HEAPF32[i19 >> 2] = d52;
        HEAPF32[i17 >> 2] = d52;
        i25 = HEAP32[i20 >> 2] | 0;
        if ((i25 | 0) != (HEAP32[i31 >> 2] | 0)) {
         i36 = (HEAP32[i18 >> 2] | 0) + (i25 << 3) | 0;
         i45 = HEAP32[i6 + 4 >> 2] | 0;
         HEAP32[i36 >> 2] = HEAP32[i6 >> 2];
         HEAP32[i36 + 4 >> 2] = i45;
         HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
         i37 = i35;
         i38 = i51;
         i39 = i53;
         break;
        }
        i45 = i25 + 1 | 0;
        i36 = HEAP32[i18 >> 2] | 0;
        do {
         if (i36 >>> 0 > i21 >>> 0) {
          i26 = 57;
         } else {
          if ((i36 + (i25 << 3) | 0) >>> 0 <= i21 >>> 0) {
           i26 = 57;
           break;
          }
          __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i45);
          i46 = HEAP32[i18 >> 2] | 0;
          i54 = i46 + (i27 - i36 >> 3 << 3) | 0;
          i55 = i46;
         }
        } while (0);
        if ((i26 | 0) == 57) {
         i26 = 0;
         __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i45);
         i54 = i21;
         i55 = HEAP32[i18 >> 2] | 0;
        }
        i36 = i54;
        i25 = i55 + (HEAP32[i20 >> 2] << 3) | 0;
        i46 = HEAP32[i36 + 4 >> 2] | 0;
        HEAP32[i25 >> 2] = HEAP32[i36 >> 2];
        HEAP32[i25 + 4 >> 2] = i46;
        HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
        i37 = i35;
        i38 = i51;
        i39 = i53;
       }
      } while (0);
      if (i37 >>> 0 < i23 >>> 0) {
       i30 = i39;
       i32 = i38;
       i33 = i37;
      } else {
       break L20;
      }
     }
     if ((i26 | 0) == 27) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i26 | 0) == 29) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i26 | 0) == 31) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i26 | 0) == 34) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i26 | 0) == 36) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i26 | 0) == 38) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i26 | 0) == 61) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   if ((i23 | 0) != 0) {
    HEAP32[i16 >> 2] = 0;
   }
   if ((i24 | 0) == 0) {
    i26 = 67;
    break;
   }
   HEAP32[i14 >> 2] = 0;
   HEAP32[i15 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i24);
   i26 = 67;
  } else {
   i26 = 67;
  }
 } while (0);
 do {
  if ((i26 | 0) == 67) {
   if ((HEAP32[i13 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[i13 >> 2] = 0;
  }
 } while (0);
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13ShapeIntervalIfE22subtractShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, d28 = +0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, d35 = +0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, d47 = +0, d48 = +0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9;
 i11 = i1 + 8 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = i2 + 8 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = HEAP32[i1 >> 2] | 0;
 L4 : do {
  if ((i12 | 0) == (i14 | 0)) {
   i16 = HEAP32[i2 >> 2] | 0;
   i17 = 0;
   while (1) {
    if (i17 >>> 0 >= i12 >>> 0) {
     break;
    }
    if (+HEAPF32[i15 + (i17 << 3) >> 2] != +HEAPF32[i16 + (i17 << 3) >> 2]) {
     break L4;
    }
    if (+HEAPF32[i15 + (i17 << 3) + 4 >> 2] == +HEAPF32[i16 + (i17 << 3) + 4 >> 2]) {
     i17 = i17 + 1 | 0;
    } else {
     break L4;
    }
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i17 = i1 | 0;
 if ((i14 | 0) == 0) {
  i14 = i15 + (i12 << 3) | 0;
  i12 = i3 + 8 | 0;
  i1 = i3 + 4 | 0;
  i16 = i3 | 0;
  i18 = i15;
  i19 = HEAP32[i12 >> 2] | 0;
  while (1) {
   if ((i19 | 0) == (HEAP32[i1 >> 2] | 0)) {
    i20 = i19 + 1 | 0;
    i21 = HEAP32[i16 >> 2] | 0;
    do {
     if (i21 >>> 0 > i18 >>> 0) {
      i22 = 13;
     } else {
      if ((i21 + (i19 << 3) | 0) >>> 0 <= i18 >>> 0) {
       i22 = 13;
       break;
      }
      __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i20);
      i23 = HEAP32[i16 >> 2] | 0;
      i24 = i23 + (i18 - i21 >> 3 << 3) | 0;
      i25 = i23;
     }
    } while (0);
    if ((i22 | 0) == 13) {
     i22 = 0;
     __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i20);
     i24 = i18;
     i25 = HEAP32[i16 >> 2] | 0;
    }
    i21 = i24;
    i23 = i25 + (HEAP32[i12 >> 2] << 3) | 0;
    i26 = HEAP32[i21 + 4 >> 2] | 0;
    HEAP32[i23 >> 2] = HEAP32[i21 >> 2];
    HEAP32[i23 + 4 >> 2] = i26;
   } else {
    i26 = i18;
    i23 = (HEAP32[i16 >> 2] | 0) + (i19 << 3) | 0;
    i21 = HEAP32[i26 + 4 >> 2] | 0;
    HEAP32[i23 >> 2] = HEAP32[i26 >> 2];
    HEAP32[i23 + 4 >> 2] = i21;
   }
   i19 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
   HEAP32[i12 >> 2] = i19;
   i18 = i18 + 8 | 0;
   if ((i18 | 0) == (i14 | 0)) {
    break;
   }
  }
  STACKTOP = i4;
  return;
 }
 i14 = i2 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 i18 = i15;
 i19 = HEAP32[i18 >> 2] | 0;
 i12 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i19;
 HEAP32[i5 + 4 >> 2] = i12;
 i12 = i2;
 d27 = +HEAPF32[i12 >> 2];
 d28 = +HEAPF32[i12 + 4 >> 2];
 i12 = i5;
 i18 = i6 + 4 | 0;
 i16 = i3 + 8 | 0;
 i25 = i3 + 4 | 0;
 i24 = i3 | 0;
 i1 = i5;
 i21 = i9;
 i23 = i10 + 4 | 0;
 i26 = i9;
 i29 = i7;
 i30 = i8 + 4 | 0;
 i31 = i7;
 i32 = i2;
 i2 = i15;
 d33 = d27;
 d27 = d28;
 d28 = (HEAP32[tempDoublePtr >> 2] = i19, +HEAPF32[tempDoublePtr >> 2]);
 while (1) {
  if (d33 > d28) {
   i22 = 20;
  } else {
   if (d27 < +HEAPF32[i18 >> 2]) {
    i22 = 20;
   } else {
    i34 = 0;
    i22 = 51;
   }
  }
  L32 : do {
   if ((i22 | 0) == 20) {
    i22 = 0;
    d35 = +HEAPF32[i18 >> 2];
    if (!(d28 > d33 | d35 < d27)) {
     do {
      if (d33 > d28) {
       HEAPF32[i29 >> 2] = d28;
       HEAPF32[i30 >> 2] = d33;
       i19 = HEAP32[i16 >> 2] | 0;
       if ((i19 | 0) != (HEAP32[i25 >> 2] | 0)) {
        i15 = (HEAP32[i24 >> 2] | 0) + (i19 << 3) | 0;
        i36 = HEAP32[i7 + 4 >> 2] | 0;
        HEAP32[i15 >> 2] = HEAP32[i7 >> 2];
        HEAP32[i15 + 4 >> 2] = i36;
        HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
        break;
       }
       i36 = i19 + 1 | 0;
       i15 = HEAP32[i24 >> 2] | 0;
       do {
        if (i15 >>> 0 > i8 >>> 0) {
         i22 = 26;
        } else {
         if ((i15 + (i19 << 3) | 0) >>> 0 <= i8 >>> 0) {
          i22 = 26;
          break;
         }
         __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i36);
         i37 = HEAP32[i24 >> 2] | 0;
         i38 = i37 + (i31 - i15 >> 3 << 3) | 0;
         i39 = i37;
        }
       } while (0);
       if ((i22 | 0) == 26) {
        i22 = 0;
        __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i36);
        i38 = i8;
        i39 = HEAP32[i24 >> 2] | 0;
       }
       i15 = i38;
       i19 = i39 + (HEAP32[i16 >> 2] << 3) | 0;
       i37 = HEAP32[i15 + 4 >> 2] | 0;
       HEAP32[i19 >> 2] = HEAP32[i15 >> 2];
       HEAP32[i19 + 4 >> 2] = i37;
       HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
      }
     } while (0);
     if (+HEAPF32[i18 >> 2] <= d27) {
      i34 = 1;
      i22 = 51;
      break;
     }
     HEAPF32[i12 >> 2] = d27;
     i40 = i2;
     i22 = 54;
     break;
    }
    do {
     if (d35 < d33) {
      if (d28 >= d33) {
       i40 = i2;
       i22 = 54;
       break L32;
      }
     } else {
      i37 = d28 < d33;
      if (d28 > d27) {
       if (i37) {
        break;
       } else {
        i40 = i2;
        i22 = 54;
        break L32;
       }
      }
      if (!i37) {
       HEAPF32[i12 >> 2] = d27;
       i40 = i2;
       i22 = 54;
       break L32;
      }
      HEAPF32[i21 >> 2] = d28;
      HEAPF32[i23 >> 2] = d33;
      i37 = HEAP32[i16 >> 2] | 0;
      if ((i37 | 0) != (HEAP32[i25 >> 2] | 0)) {
       i19 = (HEAP32[i24 >> 2] | 0) + (i37 << 3) | 0;
       i15 = HEAP32[i9 + 4 >> 2] | 0;
       HEAP32[i19 >> 2] = HEAP32[i9 >> 2];
       HEAP32[i19 + 4 >> 2] = i15;
       HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
       i34 = 0;
       i22 = 51;
       break L32;
      }
      i15 = i37 + 1 | 0;
      i19 = HEAP32[i24 >> 2] | 0;
      do {
       if (i19 >>> 0 > i10 >>> 0) {
        i22 = 39;
       } else {
        if ((i19 + (i37 << 3) | 0) >>> 0 <= i10 >>> 0) {
         i22 = 39;
         break;
        }
        __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i15);
        i41 = HEAP32[i24 >> 2] | 0;
        i42 = i41 + (i26 - i19 >> 3 << 3) | 0;
        i43 = i41;
       }
      } while (0);
      if ((i22 | 0) == 39) {
       i22 = 0;
       __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i15);
       i42 = i10;
       i43 = HEAP32[i24 >> 2] | 0;
      }
      i19 = i42;
      i37 = i43 + (HEAP32[i16 >> 2] << 3) | 0;
      i36 = HEAP32[i19 + 4 >> 2] | 0;
      HEAP32[i37 >> 2] = HEAP32[i19 >> 2];
      HEAP32[i37 + 4 >> 2] = i36;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
      i34 = 0;
      i22 = 51;
      break L32;
     }
    } while (0);
    i36 = HEAP32[i16 >> 2] | 0;
    if ((i36 | 0) != (HEAP32[i25 >> 2] | 0)) {
     i37 = (HEAP32[i24 >> 2] | 0) + (i36 << 3) | 0;
     i19 = HEAP32[i5 + 4 >> 2] | 0;
     HEAP32[i37 >> 2] = HEAP32[i5 >> 2];
     HEAP32[i37 + 4 >> 2] = i19;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     i34 = 0;
     i22 = 51;
     break;
    }
    i19 = i36 + 1 | 0;
    i37 = HEAP32[i24 >> 2] | 0;
    do {
     if (i37 >>> 0 > i6 >>> 0) {
      i22 = 48;
     } else {
      if ((i37 + (i36 << 3) | 0) >>> 0 <= i6 >>> 0) {
       i22 = 48;
       break;
      }
      __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i19);
      i41 = HEAP32[i24 >> 2] | 0;
      i44 = i41 + (i1 - i37 >> 3 << 3) | 0;
      i45 = i41;
     }
    } while (0);
    if ((i22 | 0) == 48) {
     i22 = 0;
     __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i19);
     i44 = i6;
     i45 = HEAP32[i24 >> 2] | 0;
    }
    i37 = i44;
    i36 = i45 + (HEAP32[i16 >> 2] << 3) | 0;
    i41 = HEAP32[i37 + 4 >> 2] | 0;
    HEAP32[i36 >> 2] = HEAP32[i37 >> 2];
    HEAP32[i36 + 4 >> 2] = i41;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    i34 = 0;
    i22 = 51;
   }
  } while (0);
  do {
   if ((i22 | 0) == 51) {
    i22 = 0;
    i20 = i2 + 8 | 0;
    if ((i20 | 0) == ((HEAP32[i17 >> 2] | 0) + (HEAP32[i11 >> 2] << 3) | 0)) {
     if (i34) {
      i40 = i20;
      i22 = 54;
      break;
     } else {
      i46 = i32;
      d47 = d33;
      d48 = d27;
      i49 = i20;
      break;
     }
    } else {
     i41 = i20;
     i36 = HEAP32[i41 + 4 >> 2] | 0;
     HEAP32[i5 >> 2] = HEAP32[i41 >> 2];
     HEAP32[i5 + 4 >> 2] = i36;
     if (i34) {
      i40 = i20;
      i22 = 54;
      break;
     } else {
      i46 = i32;
      d47 = d33;
      d48 = d27;
      i49 = i20;
      break;
     }
    }
   }
  } while (0);
  do {
   if ((i22 | 0) == 54) {
    i22 = 0;
    i20 = i32 + 8 | 0;
    if ((i20 | 0) == ((HEAP32[i14 >> 2] | 0) + (HEAP32[i13 >> 2] << 3) | 0)) {
     i46 = i20;
     d47 = d33;
     d48 = d27;
     i49 = i40;
     break;
    }
    i36 = i20;
    d35 = +HEAPF32[i36 >> 2];
    i46 = i20;
    d47 = d35;
    d48 = +HEAPF32[i36 + 4 >> 2];
    i49 = i40;
   }
  } while (0);
  if ((i49 | 0) == ((HEAP32[i17 >> 2] | 0) + (HEAP32[i11 >> 2] << 3) | 0)) {
   i22 = 77;
   break;
  }
  if ((i46 | 0) == ((HEAP32[i14 >> 2] | 0) + (HEAP32[i13 >> 2] << 3) | 0)) {
   break;
  }
  i32 = i46;
  i2 = i49;
  d33 = d47;
  d27 = d48;
  d28 = +HEAPF32[i12 >> 2];
 }
 if ((i22 | 0) == 77) {
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i16 >> 2] | 0;
 if ((i12 | 0) == (HEAP32[i25 >> 2] | 0)) {
  i2 = i12 + 1 | 0;
  i46 = HEAP32[i24 >> 2] | 0;
  do {
   if (i46 >>> 0 > i6 >>> 0) {
    i22 = 63;
   } else {
    if ((i46 + (i12 << 3) | 0) >>> 0 <= i6 >>> 0) {
     i22 = 63;
     break;
    }
    __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i2);
    i32 = HEAP32[i24 >> 2] | 0;
    i50 = i32 + (i1 - i46 >> 3 << 3) | 0;
    i51 = i32;
   }
  } while (0);
  if ((i22 | 0) == 63) {
   __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i2);
   i50 = i6;
   i51 = HEAP32[i24 >> 2] | 0;
  }
  i6 = i50;
  i50 = i51 + (HEAP32[i16 >> 2] << 3) | 0;
  i51 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i50 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i50 + 4 >> 2] = i51;
 } else {
  i51 = (HEAP32[i24 >> 2] | 0) + (i12 << 3) | 0;
  i12 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i51 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i51 + 4 >> 2] = i12;
 }
 i12 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i12;
 i51 = i49 + 8 | 0;
 i49 = (HEAP32[i17 >> 2] | 0) + (HEAP32[i11 >> 2] << 3) | 0;
 if ((i51 | 0) == (i49 | 0)) {
  STACKTOP = i4;
  return;
 } else {
  i52 = i51;
  i53 = i12;
 }
 while (1) {
  if ((i53 | 0) == (HEAP32[i25 >> 2] | 0)) {
   i12 = i53 + 1 | 0;
   i51 = HEAP32[i24 >> 2] | 0;
   do {
    if (i51 >>> 0 > i52 >>> 0) {
     i22 = 71;
    } else {
     if ((i51 + (i53 << 3) | 0) >>> 0 <= i52 >>> 0) {
      i22 = 71;
      break;
     }
     __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i12);
     i11 = HEAP32[i24 >> 2] | 0;
     i54 = i11 + (i52 - i51 >> 3 << 3) | 0;
     i55 = i11;
    }
   } while (0);
   if ((i22 | 0) == 71) {
    i22 = 0;
    __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i12);
    i54 = i52;
    i55 = HEAP32[i24 >> 2] | 0;
   }
   i51 = i54;
   i11 = i55 + (HEAP32[i16 >> 2] << 3) | 0;
   i17 = HEAP32[i51 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i51 >> 2];
   HEAP32[i11 + 4 >> 2] = i17;
  } else {
   i17 = i52;
   i11 = (HEAP32[i24 >> 2] | 0) + (i53 << 3) | 0;
   i51 = HEAP32[i17 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i11 + 4 >> 2] = i51;
  }
  i53 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
  HEAP32[i16 >> 2] = i53;
  i52 = i52 + 8 | 0;
  if ((i52 | 0) == (i49 | 0)) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore12PolygonShape18shapePaddingBoundsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, d52 = +0, d53 = +0, d54 = +0, d55 = +0, d56 = +0, i57 = 0, d58 = +0, d59 = +0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, d64 = +0, d65 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 88 | 0;
 d9 = +HEAPF32[i1 + 12 >> 2];
 do {
  if (d9 != +0) {
   if ((HEAP8[i1 + 40 | 0] & 1) != 0) {
    break;
   }
   i10 = i1 + 76 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i12 = i11;
    STACKTOP = i2;
    return i12 | 0;
   }
   i11 = HEAP32[i1 + 20 >> 2] | 0;
   i13 = i5;
   i14 = __ZN3WTF10fastMallocEj(12) | 0;
   i15 = i14;
   i16 = i14;
   HEAP32[i16 >> 2] = 0;
   i17 = i14 + 4 | 0;
   HEAP32[i17 >> 2] = 0;
   i18 = i14 + 8 | 0;
   HEAP32[i18 >> 2] = 0;
   HEAPF32[i5 >> 2] = +0;
   HEAPF32[i13 + 4 >> 2] = +0;
   i14 = i1 + 52 | 0;
   if ((HEAP32[i14 >> 2] | 0) != 0) {
    i19 = i1 + 44 | 0;
    i20 = i4 | 0;
    i21 = i4 + 4 | 0;
    i22 = i6 | 0;
    i23 = i6 + 4 | 0;
    i24 = i6 + 8 | 0;
    i25 = i6 + 12 | 0;
    i26 = i6 + 16 | 0;
    i27 = i6 + 20 | 0;
    i28 = i6 + 24 | 0;
    i29 = i3 | 0;
    i30 = i3 + 4 | 0;
    i31 = i7 | 0;
    i32 = i7 + 4 | 0;
    i33 = i7 + 8 | 0;
    i34 = i7 + 12 | 0;
    i35 = i7 + 16 | 0;
    i36 = i7 + 20 | 0;
    i37 = i7 + 24 | 0;
    i38 = i7 | 0;
    i39 = i6 | 0;
    i40 = i5;
    i41 = i7 + 12 | 0;
    i42 = i6 + 4 | 0;
    i43 = 0;
    while (1) {
     i44 = HEAP32[i19 >> 2] | 0;
     i45 = i44 + (i43 * 20 & -1) | 0;
     i46 = HEAP32[i44 + (i43 * 20 & -1) + 16 >> 2] | 0;
     i47 = i44 + (i43 * 20 & -1) + 12 | 0;
     i44 = HEAP32[i46 + 36 >> 2] | 0;
     i48 = (((HEAP32[i47 >> 2] | 0) - 1 + i44 | 0) >>> 0) % (i44 >>> 0) & -1;
     i44 = HEAP32[i46 + 28 >> 2] | 0;
     i46 = i44 + (i48 * 20 & -1) | 0;
     i49 = i45;
     i50 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 12 >> 2] & 15](i45) | 0;
     i51 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 8 >> 2] & 15](i45) | 0;
     d52 = +HEAPF32[i50 >> 2] - +HEAPF32[i51 >> 2];
     d53 = +HEAPF32[i50 + 4 >> 2] - +HEAPF32[i51 + 4 >> 2];
     HEAPF32[i20 >> 2] = d52;
     HEAPF32[i21 >> 2] = d53;
     do {
      if (d52 != +0) {
       if (d53 != +0) {
        d54 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i4);
        d55 = (+-0 - +HEAPF32[i21 >> 2]) / d54;
        d56 = +HEAPF32[i20 >> 2] / d54;
        break;
       } else {
        d55 = +0;
        d56 = d52 > +0 ? +1 : +-1;
        break;
       }
      } else {
       d55 = d53 > +0 ? +-1 : +1;
       d56 = +0;
      }
     } while (0);
     d53 = d9 * d55;
     d52 = d9 * d56;
     HEAP32[i22 >> 2] = H_BASE + 16;
     i51 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 8 >> 2] & 15](i45) | 0;
     d54 = d52 + +HEAPF32[i51 + 4 >> 2];
     HEAPF32[i23 >> 2] = d53 + +HEAPF32[i51 >> 2];
     HEAPF32[i24 >> 2] = d54;
     i51 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 12 >> 2] & 15](i45) | 0;
     d54 = d52 + +HEAPF32[i51 + 4 >> 2];
     HEAPF32[i25 >> 2] = d53 + +HEAPF32[i51 >> 2];
     HEAPF32[i26 >> 2] = d54;
     HEAP32[i27 >> 2] = HEAP32[i47 >> 2];
     HEAP32[i28 >> 2] = 0;
     i51 = i46;
     i50 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i51 >> 2] | 0) + 12 >> 2] & 15](i46) | 0;
     i57 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i51 >> 2] | 0) + 8 >> 2] & 15](i46) | 0;
     d54 = +HEAPF32[i50 >> 2] - +HEAPF32[i57 >> 2];
     d53 = +HEAPF32[i50 + 4 >> 2] - +HEAPF32[i57 + 4 >> 2];
     HEAPF32[i29 >> 2] = d54;
     HEAPF32[i30 >> 2] = d53;
     do {
      if (d54 != +0) {
       if (d53 != +0) {
        d52 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i3);
        d58 = (+-0 - +HEAPF32[i30 >> 2]) / d52;
        d59 = +HEAPF32[i29 >> 2] / d52;
        break;
       } else {
        d58 = +0;
        d59 = d54 > +0 ? +1 : +-1;
        break;
       }
      } else {
       d58 = d53 > +0 ? +-1 : +1;
       d59 = +0;
      }
     } while (0);
     d53 = d9 * d58;
     d54 = d9 * d59;
     HEAP32[i31 >> 2] = H_BASE + 16;
     i47 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i51 >> 2] | 0) + 8 >> 2] & 15](i46) | 0;
     d52 = d54 + +HEAPF32[i47 + 4 >> 2];
     HEAPF32[i32 >> 2] = d53 + +HEAPF32[i47 >> 2];
     HEAPF32[i33 >> 2] = d52;
     i47 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i51 >> 2] | 0) + 12 >> 2] & 15](i46) | 0;
     d52 = d54 + +HEAPF32[i47 + 4 >> 2];
     HEAPF32[i34 >> 2] = d53 + +HEAPF32[i47 >> 2];
     HEAPF32[i35 >> 2] = d52;
     HEAP32[i36 >> 2] = HEAP32[i44 + (i48 * 20 & -1) + 12 >> 2];
     HEAP32[i37 >> 2] = 0;
     do {
      if (__ZNK7WebCore10VertexPair12intersectionERKS0_RNS_10FloatPointE(i38, i39, i13) | 0) {
       i47 = HEAP32[i18 >> 2] | 0;
       if ((i47 | 0) != (HEAP32[i17 >> 2] | 0)) {
        i57 = (HEAP32[i16 >> 2] | 0) + (i47 << 3) | 0;
        i50 = HEAP32[i5 + 4 >> 2] | 0;
        HEAP32[i57 >> 2] = HEAP32[i5 >> 2];
        HEAP32[i57 + 4 >> 2] = i50;
        HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
        break;
       }
       i50 = i47 + 1 | 0;
       i57 = HEAP32[i16 >> 2] | 0;
       do {
        if (i57 >>> 0 > i13 >>> 0) {
         i60 = 22;
        } else {
         if ((i57 + (i47 << 3) | 0) >>> 0 <= i13 >>> 0) {
          i60 = 22;
          break;
         }
         __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i50);
         i61 = HEAP32[i16 >> 2] | 0;
         i62 = i61 + (i40 - i57 >> 3 << 3) | 0;
         i63 = i61;
        }
       } while (0);
       if ((i60 | 0) == 22) {
        i60 = 0;
        __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i50);
        i62 = i13;
        i63 = HEAP32[i16 >> 2] | 0;
       }
       i57 = i62;
       i47 = i63 + (HEAP32[i18 >> 2] << 3) | 0;
       i61 = HEAP32[i57 + 4 >> 2] | 0;
       HEAP32[i47 >> 2] = HEAP32[i57 >> 2];
       HEAP32[i47 + 4 >> 2] = i61;
       HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
      } else {
       i61 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i51 >> 2] | 0) + 8 >> 2] & 15](i46) | 0;
       i47 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 8 >> 2] & 15](i45) | 0;
       i57 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 12 >> 2] & 15](i45) | 0;
       d52 = +HEAPF32[i61 >> 2];
       d53 = +HEAPF32[i61 + 4 >> 2];
       if ((+HEAPF32[i47 >> 2] - d52) * (+HEAPF32[i57 + 4 >> 2] - d53) - (+HEAPF32[i47 + 4 >> 2] - d53) * (+HEAPF32[i57 >> 2] - d52) >= +0) {
        break;
       }
       __ZN7WebCoreL9appendArcERN3WTF6VectorINS_10FloatPointELj0ENS0_15CrashOnOverflowEEERKS2_fS7_S7_b(i15, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 8 >> 2] & 15](i45) | 0, d9, i41, i42, 1);
      }
     } while (0);
     i43 = i43 + 1 | 0;
     if (i43 >>> 0 >= (HEAP32[i14 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
   i14 = HEAP32[i18 >> 2] | 0;
   L40 : do {
    if ((i14 | 0) != 0) {
     i43 = 0;
     i42 = i14;
     while (1) {
      i41 = HEAP32[i16 >> 2] | 0;
      i13 = i41 + (i43 << 3) | 0;
      d52 = +HEAPF32[i13 >> 2];
      do {
       if (d52 < +2147483647) {
        if (d52 <= +-2147483648) {
         d64 = +-2147483648;
         break;
        }
        d64 = +(~~d52 | 0);
       } else {
        d64 = +2147483648;
       }
      } while (0);
      if (i42 >>> 0 <= i43 >>> 0) {
       break;
      }
      i50 = i41 + (i43 << 3) + 4 | 0;
      d52 = +HEAPF32[i50 >> 2];
      do {
       if (d52 < +2147483647) {
        if (d52 <= +-2147483648) {
         d65 = +-2147483648;
         break;
        }
        d65 = +(~~d52 | 0);
       } else {
        d65 = +2147483648;
       }
      } while (0);
      HEAPF32[i13 >> 2] = d64;
      HEAPF32[i50 >> 2] = d65;
      i43 = i43 + 1 | 0;
      i42 = HEAP32[i18 >> 2] | 0;
      if (i43 >>> 0 >= i42 >>> 0) {
       break L40;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    }
   } while (0);
   i18 = __Znwj(56) | 0;
   i16 = i8 | 0;
   HEAP32[i16 >> 2] = i15;
   __ZN7WebCore12FloatPolygonC1EN3WTF10PassOwnPtrINS1_6VectorINS_10FloatPointELj0ENS1_15CrashOnOverflowEEEEENS_8WindRuleE(i18, i8, i11);
   i14 = HEAP32[i16 >> 2] | 0;
   if ((i14 | 0) != 0) {
    i16 = i14 + 8 | 0;
    if ((HEAP32[i16 >> 2] | 0) != 0) {
     HEAP32[i16 >> 2] = 0;
    }
    i16 = i14 | 0;
    i42 = HEAP32[i16 >> 2] | 0;
    if ((i42 | 0) != 0) {
     HEAP32[i16 >> 2] = 0;
     HEAP32[i14 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i42);
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
   i14 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i18;
   if ((i14 | 0) == 0) {
    i12 = i18;
    STACKTOP = i2;
    return i12 | 0;
   }
   __ZN7WebCore12FloatPolygonD2Ev(i14);
   __ZdlPv(i14);
   i12 = HEAP32[i10 >> 2] | 0;
   STACKTOP = i2;
   return i12 | 0;
  }
 } while (0);
 i12 = i1 + 16 | 0;
 STACKTOP = i2;
 return i12 | 0;
}
function __ZNK7WebCore12PolygonShape17shapeMarginBoundsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, d52 = +0, d53 = +0, d54 = +0, d55 = +0, d56 = +0, i57 = 0, d58 = +0, d59 = +0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, d64 = +0, d65 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 88 | 0;
 d9 = +HEAPF32[i1 + 8 >> 2];
 do {
  if (d9 != +0) {
   if ((HEAP8[i1 + 40 | 0] & 1) != 0) {
    break;
   }
   i10 = i1 + 72 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i12 = i11;
    STACKTOP = i2;
    return i12 | 0;
   }
   i11 = HEAP32[i1 + 20 >> 2] | 0;
   i13 = i5;
   i14 = __ZN3WTF10fastMallocEj(12) | 0;
   i15 = i14;
   i16 = i14;
   HEAP32[i16 >> 2] = 0;
   i17 = i14 + 4 | 0;
   HEAP32[i17 >> 2] = 0;
   i18 = i14 + 8 | 0;
   HEAP32[i18 >> 2] = 0;
   HEAPF32[i5 >> 2] = +0;
   HEAPF32[i13 + 4 >> 2] = +0;
   i14 = i1 + 52 | 0;
   if ((HEAP32[i14 >> 2] | 0) != 0) {
    i19 = i1 + 44 | 0;
    i20 = i4 | 0;
    i21 = i4 + 4 | 0;
    i22 = i6 | 0;
    i23 = i6 + 4 | 0;
    i24 = i6 + 8 | 0;
    i25 = i6 + 12 | 0;
    i26 = i6 + 16 | 0;
    i27 = i6 + 20 | 0;
    i28 = i6 + 24 | 0;
    i29 = i3 | 0;
    i30 = i3 + 4 | 0;
    i31 = i7 | 0;
    i32 = i7 + 4 | 0;
    i33 = i7 + 8 | 0;
    i34 = i7 + 12 | 0;
    i35 = i7 + 16 | 0;
    i36 = i7 + 20 | 0;
    i37 = i7 + 24 | 0;
    i38 = i7 | 0;
    i39 = i6 | 0;
    i40 = i5;
    i41 = i7 + 12 | 0;
    i42 = i6 + 4 | 0;
    i43 = 0;
    while (1) {
     i44 = HEAP32[i19 >> 2] | 0;
     i45 = i44 + (i43 * 20 & -1) | 0;
     i46 = HEAP32[i44 + (i43 * 20 & -1) + 16 >> 2] | 0;
     i47 = i44 + (i43 * 20 & -1) + 12 | 0;
     i44 = HEAP32[i46 + 36 >> 2] | 0;
     i48 = (((HEAP32[i47 >> 2] | 0) - 1 + i44 | 0) >>> 0) % (i44 >>> 0) & -1;
     i44 = HEAP32[i46 + 28 >> 2] | 0;
     i46 = i44 + (i48 * 20 & -1) | 0;
     i49 = i45;
     i50 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 12 >> 2] & 15](i45) | 0;
     i51 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 8 >> 2] & 15](i45) | 0;
     d52 = +HEAPF32[i50 >> 2] - +HEAPF32[i51 >> 2];
     d53 = +HEAPF32[i50 + 4 >> 2] - +HEAPF32[i51 + 4 >> 2];
     HEAPF32[i20 >> 2] = d52;
     HEAPF32[i21 >> 2] = d53;
     do {
      if (d52 != +0) {
       if (d53 != +0) {
        d54 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i4);
        d55 = (+-0 - +HEAPF32[i21 >> 2]) / d54;
        d56 = +HEAPF32[i20 >> 2] / d54;
        break;
       } else {
        d55 = +0;
        d56 = d52 > +0 ? +1 : +-1;
        break;
       }
      } else {
       d55 = d53 > +0 ? +-1 : +1;
       d56 = +0;
      }
     } while (0);
     d53 = d9 * (+-0 - d55);
     d52 = d9 * (+-0 - d56);
     HEAP32[i22 >> 2] = H_BASE + 16;
     i51 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 8 >> 2] & 15](i45) | 0;
     d54 = d52 + +HEAPF32[i51 + 4 >> 2];
     HEAPF32[i23 >> 2] = d53 + +HEAPF32[i51 >> 2];
     HEAPF32[i24 >> 2] = d54;
     i51 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 12 >> 2] & 15](i45) | 0;
     d54 = d52 + +HEAPF32[i51 + 4 >> 2];
     HEAPF32[i25 >> 2] = d53 + +HEAPF32[i51 >> 2];
     HEAPF32[i26 >> 2] = d54;
     HEAP32[i27 >> 2] = HEAP32[i47 >> 2];
     HEAP32[i28 >> 2] = 0;
     i51 = i46;
     i50 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i51 >> 2] | 0) + 12 >> 2] & 15](i46) | 0;
     i57 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i51 >> 2] | 0) + 8 >> 2] & 15](i46) | 0;
     d54 = +HEAPF32[i50 >> 2] - +HEAPF32[i57 >> 2];
     d53 = +HEAPF32[i50 + 4 >> 2] - +HEAPF32[i57 + 4 >> 2];
     HEAPF32[i29 >> 2] = d54;
     HEAPF32[i30 >> 2] = d53;
     do {
      if (d54 != +0) {
       if (d53 != +0) {
        d52 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i3);
        d58 = (+-0 - +HEAPF32[i30 >> 2]) / d52;
        d59 = +HEAPF32[i29 >> 2] / d52;
        break;
       } else {
        d58 = +0;
        d59 = d54 > +0 ? +1 : +-1;
        break;
       }
      } else {
       d58 = d53 > +0 ? +-1 : +1;
       d59 = +0;
      }
     } while (0);
     d53 = d9 * (+-0 - d58);
     d54 = d9 * (+-0 - d59);
     HEAP32[i31 >> 2] = H_BASE + 16;
     i47 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i51 >> 2] | 0) + 8 >> 2] & 15](i46) | 0;
     d52 = d54 + +HEAPF32[i47 + 4 >> 2];
     HEAPF32[i32 >> 2] = d53 + +HEAPF32[i47 >> 2];
     HEAPF32[i33 >> 2] = d52;
     i47 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i51 >> 2] | 0) + 12 >> 2] & 15](i46) | 0;
     d52 = d54 + +HEAPF32[i47 + 4 >> 2];
     HEAPF32[i34 >> 2] = d53 + +HEAPF32[i47 >> 2];
     HEAPF32[i35 >> 2] = d52;
     HEAP32[i36 >> 2] = HEAP32[i44 + (i48 * 20 & -1) + 12 >> 2];
     HEAP32[i37 >> 2] = 0;
     do {
      if (__ZNK7WebCore10VertexPair12intersectionERKS0_RNS_10FloatPointE(i38, i39, i13) | 0) {
       i47 = HEAP32[i18 >> 2] | 0;
       if ((i47 | 0) != (HEAP32[i17 >> 2] | 0)) {
        i57 = (HEAP32[i16 >> 2] | 0) + (i47 << 3) | 0;
        i50 = HEAP32[i5 + 4 >> 2] | 0;
        HEAP32[i57 >> 2] = HEAP32[i5 >> 2];
        HEAP32[i57 + 4 >> 2] = i50;
        HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
        break;
       }
       i50 = i47 + 1 | 0;
       i57 = HEAP32[i16 >> 2] | 0;
       do {
        if (i57 >>> 0 > i13 >>> 0) {
         i60 = 22;
        } else {
         if ((i57 + (i47 << 3) | 0) >>> 0 <= i13 >>> 0) {
          i60 = 22;
          break;
         }
         __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i50);
         i61 = HEAP32[i16 >> 2] | 0;
         i62 = i61 + (i40 - i57 >> 3 << 3) | 0;
         i63 = i61;
        }
       } while (0);
       if ((i60 | 0) == 22) {
        i60 = 0;
        __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i50);
        i62 = i13;
        i63 = HEAP32[i16 >> 2] | 0;
       }
       i57 = i62;
       i47 = i63 + (HEAP32[i18 >> 2] << 3) | 0;
       i61 = HEAP32[i57 + 4 >> 2] | 0;
       HEAP32[i47 >> 2] = HEAP32[i57 >> 2];
       HEAP32[i47 + 4 >> 2] = i61;
       HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
      } else {
       __ZN7WebCoreL9appendArcERN3WTF6VectorINS_10FloatPointELj0ENS0_15CrashOnOverflowEEERKS2_fS7_S7_b(i15, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 8 >> 2] & 15](i45) | 0, d9, i41, i42, 0);
      }
     } while (0);
     i43 = i43 + 1 | 0;
     if (i43 >>> 0 >= (HEAP32[i14 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
   i14 = HEAP32[i18 >> 2] | 0;
   L39 : do {
    if ((i14 | 0) != 0) {
     i43 = 0;
     i42 = i14;
     while (1) {
      i41 = HEAP32[i16 >> 2] | 0;
      i13 = i41 + (i43 << 3) | 0;
      d52 = +HEAPF32[i13 >> 2];
      do {
       if (d52 < +2147483647) {
        if (d52 <= +-2147483648) {
         d64 = +-2147483648;
         break;
        }
        d64 = +(~~d52 | 0);
       } else {
        d64 = +2147483648;
       }
      } while (0);
      if (i42 >>> 0 <= i43 >>> 0) {
       break;
      }
      i50 = i41 + (i43 << 3) + 4 | 0;
      d52 = +HEAPF32[i50 >> 2];
      do {
       if (d52 < +2147483647) {
        if (d52 <= +-2147483648) {
         d65 = +-2147483648;
         break;
        }
        d65 = +(~~d52 | 0);
       } else {
        d65 = +2147483648;
       }
      } while (0);
      HEAPF32[i13 >> 2] = d64;
      HEAPF32[i50 >> 2] = d65;
      i43 = i43 + 1 | 0;
      i42 = HEAP32[i18 >> 2] | 0;
      if (i43 >>> 0 >= i42 >>> 0) {
       break L39;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    }
   } while (0);
   i18 = __Znwj(56) | 0;
   i16 = i8 | 0;
   HEAP32[i16 >> 2] = i15;
   __ZN7WebCore12FloatPolygonC1EN3WTF10PassOwnPtrINS1_6VectorINS_10FloatPointELj0ENS1_15CrashOnOverflowEEEEENS_8WindRuleE(i18, i8, i11);
   i14 = HEAP32[i16 >> 2] | 0;
   if ((i14 | 0) != 0) {
    i16 = i14 + 8 | 0;
    if ((HEAP32[i16 >> 2] | 0) != 0) {
     HEAP32[i16 >> 2] = 0;
    }
    i16 = i14 | 0;
    i42 = HEAP32[i16 >> 2] | 0;
    if ((i42 | 0) != 0) {
     HEAP32[i16 >> 2] = 0;
     HEAP32[i14 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i42);
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
   i14 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i18;
   if ((i14 | 0) == 0) {
    i12 = i18;
    STACKTOP = i2;
    return i12 | 0;
   }
   __ZN7WebCore12FloatPolygonD2Ev(i14);
   __ZdlPv(i14);
   i12 = HEAP32[i10 >> 2] | 0;
   STACKTOP = i2;
   return i12 | 0;
  }
 } while (0);
 i12 = i1 + 16 | 0;
 STACKTOP = i2;
 return i12 | 0;
}
function __ZN7WebCoreL34computeOverlappingEdgeXProjectionsERKNS_12FloatPolygonEffRN3WTF6VectorINS_13ShapeIntervalIfEELj0ENS3_15CrashOnOverflowEEE(i1, d2, d3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, d28 = +0, i29 = 0, i30 = 0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, d35 = +0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 40 | 0;
 i10 = i9;
 i11 = i7 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i7 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i7 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 L1 : do {
  if (__ZNK7WebCore12FloatPolygon16overlappingEdgesEffRN3WTF6VectorIPKNS_16FloatPolygonEdgeELj0ENS1_15CrashOnOverflowEEE(i1, d2, d3, i7) | 0) {
   i14 = i8 + 4 | 0;
   HEAPF32[i14 >> 2] = +0;
   HEAPF32[i8 + 8 >> 2] = +0;
   if ((HEAP32[i13 >> 2] | 0) == 0) {
    i15 = i4 | 0;
    i16 = i4 + 8 | 0;
   } else {
    i17 = i9;
    i18 = i10 + 4 | 0;
    i19 = i4 + 8 | 0;
    i20 = i4 + 4 | 0;
    i21 = i4 | 0;
    i22 = i9;
    i23 = 0;
    while (1) {
     i24 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i23 << 2) >> 2] | 0;
     i25 = i24 | 0;
     i26 = i24;
     d27 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 8 >> 2] & 15](i25) | 0) + 4 >> 2];
     d28 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 12 >> 2] & 15](i25) | 0) + 4 >> 2];
     do {
      if ((d28 < d27 ? d28 : d27) < d2) {
       __ZN7WebCoreL20computeXIntersectionEPKNS_16FloatPolygonEdgeEfRNS_16EdgeIntersectionE(i24, d2, i8) | 0;
       i29 = i14;
      } else {
       i30 = i24;
       d31 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] & 15](i24) | 0) + 4 >> 2];
       i32 = d31 < +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 12 >> 2] & 15](i24) | 0) + 4 >> 2];
       i33 = HEAP32[i30 >> 2] | 0;
       if (i32) {
        i29 = FUNCTION_TABLE_ii[HEAP32[i33 + 8 >> 2] & 15](i24) | 0;
        break;
       } else {
        i29 = FUNCTION_TABLE_ii[HEAP32[i33 + 12 >> 2] & 15](i24) | 0;
        break;
       }
      }
     } while (0);
     d27 = +HEAPF32[i29 >> 2];
     d28 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 8 >> 2] & 15](i25) | 0) + 4 >> 2];
     d31 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 12 >> 2] & 15](i25) | 0) + 4 >> 2];
     do {
      if ((d28 < d31 ? d31 : d28) > d3) {
       __ZN7WebCoreL20computeXIntersectionEPKNS_16FloatPolygonEdgeEfRNS_16EdgeIntersectionE(i24, d3, i8) | 0;
       i34 = i14;
      } else {
       i33 = i24;
       d35 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 8 >> 2] & 15](i24) | 0) + 4 >> 2];
       i32 = d35 > +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 12 >> 2] & 15](i24) | 0) + 4 >> 2];
       i30 = HEAP32[i33 >> 2] | 0;
       if (i32) {
        i34 = FUNCTION_TABLE_ii[HEAP32[i30 + 8 >> 2] & 15](i24) | 0;
        break;
       } else {
        i34 = FUNCTION_TABLE_ii[HEAP32[i30 + 12 >> 2] & 15](i24) | 0;
        break;
       }
      }
     } while (0);
     d28 = +HEAPF32[i34 >> 2];
     i24 = d27 > d28;
     d31 = i24 ? d28 : d27;
     d35 = i24 ? d27 : d28;
     do {
      if (d35 > d31) {
       HEAPF32[i17 >> 2] = d31;
       HEAPF32[i18 >> 2] = d35;
       i24 = HEAP32[i19 >> 2] | 0;
       if ((i24 | 0) != (HEAP32[i20 >> 2] | 0)) {
        i25 = (HEAP32[i21 >> 2] | 0) + (i24 << 3) | 0;
        i26 = HEAP32[i9 + 4 >> 2] | 0;
        HEAP32[i25 >> 2] = HEAP32[i9 >> 2];
        HEAP32[i25 + 4 >> 2] = i26;
        HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
        break;
       }
       i26 = i24 + 1 | 0;
       i25 = HEAP32[i21 >> 2] | 0;
       do {
        if (i25 >>> 0 > i10 >>> 0) {
         i36 = 20;
        } else {
         if ((i25 + (i24 << 3) | 0) >>> 0 <= i10 >>> 0) {
          i36 = 20;
          break;
         }
         __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i26);
         i30 = HEAP32[i21 >> 2] | 0;
         i37 = i30 + (i22 - i25 >> 3 << 3) | 0;
         i38 = i30;
        }
       } while (0);
       if ((i36 | 0) == 20) {
        i36 = 0;
        __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i26);
        i37 = i10;
        i38 = HEAP32[i21 >> 2] | 0;
       }
       i25 = i37;
       i24 = i38 + (HEAP32[i19 >> 2] << 3) | 0;
       i30 = HEAP32[i25 + 4 >> 2] | 0;
       HEAP32[i24 >> 2] = HEAP32[i25 >> 2];
       HEAP32[i24 + 4 >> 2] = i30;
       HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
      }
     } while (0);
     i30 = i23 + 1 | 0;
     if (i30 >>> 0 < (HEAP32[i13 >> 2] | 0) >>> 0) {
      i23 = i30;
     } else {
      i15 = i21;
      i16 = i19;
      break;
     }
    }
   }
   i19 = HEAP32[i15 >> 2] | 0;
   i21 = i19 + (HEAP32[i16 >> 2] << 3) | 0;
   HEAP32[i6 >> 2] = F_BASE_iii + 4;
   __ZNSt3__16__sortIRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEvT0_SA_T_(i19, i21, i6);
   i21 = HEAP32[i16 >> 2] | 0;
   if (i21 >>> 0 > 1 >>> 0) {
    i39 = 1;
    i40 = i21;
   } else {
    break;
   }
   L35 : while (1) {
    i21 = i39 - 1 | 0;
    i19 = i39 + 1 | 0;
    L37 : do {
     if ((i39 | 0) == 2147483647) {
      i23 = i40;
      while (1) {
       i22 = HEAP32[i15 >> 2] | 0;
       if (i23 >>> 0 <= i21 >>> 0) {
        i36 = 51;
        break L35;
       }
       d35 = +HEAPF32[i22 + 17179869180 >> 2];
       if (d35 < +HEAPF32[i22 + (i21 << 3) >> 2]) {
        i41 = i23;
        break L37;
       }
       i20 = i22 + (i21 << 3) + 4 | 0;
       d31 = +HEAPF32[i20 >> 2];
       if (+HEAPF32[i22 + 17179869176 >> 2] > d31) {
        i41 = i23;
        break L37;
       }
       HEAPF32[i20 >> 2] = d31 < d35 ? d35 : d31;
       i20 = HEAP32[i15 >> 2] | 0;
       i22 = i20 + (i19 << 3) | 0;
       i18 = HEAP32[i16 >> 2] | 0;
       i17 = i20 + (i18 << 3) | 0;
       if ((i18 | 0) == (i19 | 0)) {
        i42 = i19;
       } else {
        i18 = i17;
        i14 = i20 + ((i17 - i22 >> 3) + 2147483647 << 3) | 0;
        while (1) {
         i18 = i18 - 8 | 0;
         i14 = i14 - 8 | 0;
         i17 = i18;
         i20 = i14;
         i30 = HEAP32[i17 + 4 >> 2] | 0;
         HEAP32[i20 >> 2] = HEAP32[i17 >> 2];
         HEAP32[i20 + 4 >> 2] = i30;
         if ((i18 | 0) == (i22 | 0)) {
          break;
         }
        }
        i42 = HEAP32[i16 >> 2] | 0;
       }
       i23 = i42 - 1 | 0;
       HEAP32[i16 >> 2] = i23;
       if ((i23 | 0) >= 0) {
        break L1;
       }
      }
     } else {
      i23 = i40;
      while (1) {
       i26 = HEAP32[i15 >> 2] | 0;
       if (i23 >>> 0 <= i21 >>> 0) {
        i36 = 52;
        break L35;
       }
       d31 = +HEAPF32[i26 + (i39 << 3) + 4 >> 2];
       if (d31 < +HEAPF32[i26 + (i21 << 3) >> 2]) {
        i41 = i23;
        break L37;
       }
       i22 = i26 + (i21 << 3) + 4 | 0;
       d35 = +HEAPF32[i22 >> 2];
       if (+HEAPF32[i26 + (i39 << 3) >> 2] > d35) {
        i41 = i23;
        break L37;
       }
       HEAPF32[i22 >> 2] = d35 < d31 ? d31 : d35;
       i22 = HEAP32[i15 >> 2] | 0;
       i26 = HEAP32[i16 >> 2] | 0;
       i18 = i22 + (i26 << 3) | 0;
       if ((i19 | 0) == (i26 | 0)) {
        i43 = i19;
       } else {
        i26 = i22 + (i19 << 3) | 0;
        i14 = i22 + (i39 << 3) | 0;
        while (1) {
         i22 = i26;
         i30 = i14;
         i20 = HEAP32[i22 + 4 >> 2] | 0;
         HEAP32[i30 >> 2] = HEAP32[i22 >> 2];
         HEAP32[i30 + 4 >> 2] = i20;
         i20 = i26 + 8 | 0;
         if ((i20 | 0) == (i18 | 0)) {
          break;
         } else {
          i26 = i20;
          i14 = i14 + 8 | 0;
         }
        }
        i43 = HEAP32[i16 >> 2] | 0;
       }
       i23 = i43 - 1 | 0;
       HEAP32[i16 >> 2] = i23;
       if (i39 >>> 0 >= i23 >>> 0) {
        break L1;
       }
      }
     }
    } while (0);
    if (i19 >>> 0 < i41 >>> 0) {
     i39 = i19;
     i40 = i41;
    } else {
     break L1;
    }
   }
   if ((i36 | 0) == 51) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i36 | 0) == 52) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
 }
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13ShapeIntervalIfE19uniteShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 L1 : do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i2 >> 2] | 0;
   i7 = HEAP32[i2 + 8 >> 2] | 0;
  } else {
   i8 = i2 + 8 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i1 >> 2] | 0;
   L3 : do {
    if ((i5 | 0) == (i9 | 0)) {
     i11 = HEAP32[i2 >> 2] | 0;
     i12 = 0;
     while (1) {
      if (i12 >>> 0 >= i5 >>> 0) {
       i6 = i11;
       i7 = i5;
       break L1;
      }
      if (+HEAPF32[i10 + (i12 << 3) >> 2] != +HEAPF32[i11 + (i12 << 3) >> 2]) {
       break L3;
      }
      if (+HEAPF32[i10 + (i12 << 3) + 4 >> 2] == +HEAPF32[i11 + (i12 << 3) + 4 >> 2]) {
       i12 = i12 + 1 | 0;
      } else {
       break;
      }
     }
    }
   } while (0);
   i12 = i1 | 0;
   if ((i9 | 0) == 0) {
    i11 = i10 + (i5 << 3) | 0;
    i13 = i3 + 8 | 0;
    i14 = i3 + 4 | 0;
    i15 = i3 | 0;
    i16 = i10;
    i17 = HEAP32[i13 >> 2] | 0;
    while (1) {
     if ((i17 | 0) == (HEAP32[i14 >> 2] | 0)) {
      i18 = i17 + 1 | 0;
      i19 = HEAP32[i15 >> 2] | 0;
      do {
       if (i19 >>> 0 > i16 >>> 0) {
        i20 = 24;
       } else {
        if ((i19 + (i17 << 3) | 0) >>> 0 <= i16 >>> 0) {
         i20 = 24;
         break;
        }
        __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i18);
        i21 = HEAP32[i15 >> 2] | 0;
        i22 = i21 + (i16 - i19 >> 3 << 3) | 0;
        i23 = i21;
       }
      } while (0);
      if ((i20 | 0) == 24) {
       i20 = 0;
       __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i18);
       i22 = i16;
       i23 = HEAP32[i15 >> 2] | 0;
      }
      i19 = i22;
      i21 = i23 + (HEAP32[i13 >> 2] << 3) | 0;
      i24 = HEAP32[i19 + 4 >> 2] | 0;
      HEAP32[i21 >> 2] = HEAP32[i19 >> 2];
      HEAP32[i21 + 4 >> 2] = i24;
     } else {
      i24 = i16;
      i21 = (HEAP32[i15 >> 2] | 0) + (i17 << 3) | 0;
      i19 = HEAP32[i24 + 4 >> 2] | 0;
      HEAP32[i21 >> 2] = HEAP32[i24 >> 2];
      HEAP32[i21 + 4 >> 2] = i19;
     }
     i17 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
     HEAP32[i13 >> 2] = i17;
     i16 = i16 + 8 | 0;
     if ((i16 | 0) == (i11 | 0)) {
      break;
     }
    }
    return;
   }
   i11 = i2 | 0;
   i16 = i3 + 8 | 0;
   i17 = i3 + 4 | 0;
   i13 = i3 | 0;
   i15 = i10;
   i14 = HEAP32[i11 >> 2] | 0;
   i9 = i10;
   i19 = i5;
   L26 : while (1) {
    i21 = (i15 | 0) == (i9 + (i19 << 3) | 0);
    i24 = HEAP32[i11 >> 2] | 0;
    i25 = HEAP32[i8 >> 2] | 0;
    if (i21) {
     if ((i14 | 0) == (i24 + (i25 << 3) | 0)) {
      i20 = 54;
      break;
     }
    }
    do {
     if ((i14 | 0) == (i24 + (i25 << 3) | 0)) {
      i20 = 34;
     } else {
      if (!i21) {
       if (+HEAPF32[i15 >> 2] < +HEAPF32[i14 >> 2]) {
        i20 = 34;
        break;
       }
      }
      i26 = i14;
      i27 = i15;
      i28 = i14 + 8 | 0;
     }
    } while (0);
    if ((i20 | 0) == 34) {
     i20 = 0;
     i26 = i15;
     i27 = i15 + 8 | 0;
     i28 = i14;
    }
    i21 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i21 | 0) == 0) {
      i20 = 41;
     } else {
      i25 = _llvm_uadd_with_overflow_i32(i21 | 0, -1 | 0) | 0;
      if (!tempRet0) {
       i20 = 38;
       break L26;
      }
      i24 = i25;
      i25 = HEAP32[i13 >> 2] | 0;
      i18 = i25 + (i24 << 3) + 4 | 0;
      d29 = +HEAPF32[i18 >> 2];
      if (d29 < +HEAPF32[i26 >> 2]) {
       i20 = 41;
       break;
      }
      d30 = +HEAPF32[i26 + 4 >> 2];
      if (+HEAPF32[i25 + (i24 << 3) >> 2] > d30) {
       i20 = 41;
       break;
      }
      HEAPF32[i18 >> 2] = d29 < d30 ? d30 : d29;
     }
    } while (0);
    do {
     if ((i20 | 0) == 41) {
      i20 = 0;
      if ((i21 | 0) != (HEAP32[i17 >> 2] | 0)) {
       i18 = i26;
       i24 = (HEAP32[i13 >> 2] | 0) + (i21 << 3) | 0;
       i25 = HEAP32[i18 + 4 >> 2] | 0;
       HEAP32[i24 >> 2] = HEAP32[i18 >> 2];
       HEAP32[i24 + 4 >> 2] = i25;
       HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
       break;
      }
      i25 = i21 + 1 | 0;
      i24 = HEAP32[i13 >> 2] | 0;
      do {
       if (i24 >>> 0 > i26 >>> 0) {
        i20 = 46;
       } else {
        if ((i24 + (i21 << 3) | 0) >>> 0 <= i26 >>> 0) {
         i20 = 46;
         break;
        }
        __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i25);
        i18 = HEAP32[i13 >> 2] | 0;
        i31 = i18 + (i26 - i24 >> 3 << 3) | 0;
        i32 = i18;
       }
      } while (0);
      if ((i20 | 0) == 46) {
       i20 = 0;
       __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i25);
       i31 = i26;
       i32 = HEAP32[i13 >> 2] | 0;
      }
      i24 = i31;
      i18 = i32 + (HEAP32[i16 >> 2] << 3) | 0;
      i33 = HEAP32[i24 + 4 >> 2] | 0;
      HEAP32[i18 >> 2] = HEAP32[i24 >> 2];
      HEAP32[i18 + 4 >> 2] = i33;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     }
    } while (0);
    i15 = i27;
    i14 = i28;
    i9 = HEAP32[i12 >> 2] | 0;
    i19 = HEAP32[i4 >> 2] | 0;
   }
   if ((i20 | 0) == 38) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i20 | 0) == 54) {
    return;
   }
  }
 } while (0);
 i4 = i6 + (i7 << 3) | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = i3 + 8 | 0;
 i28 = i3 + 4 | 0;
 i27 = i3 | 0;
 i32 = i6;
 i6 = HEAP32[i7 >> 2] | 0;
 while (1) {
  if ((i6 | 0) == (HEAP32[i28 >> 2] | 0)) {
   i31 = i6 + 1 | 0;
   i26 = HEAP32[i27 >> 2] | 0;
   do {
    if (i26 >>> 0 > i32 >>> 0) {
     i20 = 14;
    } else {
     if ((i26 + (i6 << 3) | 0) >>> 0 <= i32 >>> 0) {
      i20 = 14;
      break;
     }
     __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i31);
     i5 = HEAP32[i27 >> 2] | 0;
     i34 = i5 + (i32 - i26 >> 3 << 3) | 0;
     i35 = i5;
    }
   } while (0);
   if ((i20 | 0) == 14) {
    i20 = 0;
    __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i31);
    i34 = i32;
    i35 = HEAP32[i27 >> 2] | 0;
   }
   i26 = i34;
   i5 = i35 + (HEAP32[i7 >> 2] << 3) | 0;
   i2 = HEAP32[i26 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i5 + 4 >> 2] = i2;
  } else {
   i2 = i32;
   i5 = (HEAP32[i27 >> 2] | 0) + (i6 << 3) | 0;
   i26 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i5 + 4 >> 2] = i26;
  }
  i6 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
  HEAP32[i7 >> 2] = i6;
  i32 = i32 + 8 | 0;
  if ((i32 | 0) == (i4 | 0)) {
   break;
  }
 }
 return;
}
function __ZNSt3__17__sort4IRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEjT0_S9_S9_S9_T_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i7 = i6 + 80 | 0;
 i8 = i6 + 96 | 0;
 i9 = i6 + 112 | 0;
 i10 = i6 | 0;
 _llvm_lifetime_start(16, 0, i10 | 0);
 i11 = i6 + 16 | 0;
 _llvm_lifetime_start(16, 0, i11 | 0);
 i12 = i6 + 32 | 0;
 _llvm_lifetime_start(16, 0, i12 | 0);
 i13 = i6 + 48 | 0;
 _llvm_lifetime_start(16, 0, i13 | 0);
 i14 = i6 + 64 | 0;
 _llvm_lifetime_start(16, 0, i14 | 0);
 i15 = FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 7](i2, i1) | 0;
 i16 = FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 7](i3, i2) | 0;
 do {
  if (i15) {
   i17 = i1;
   if (i16) {
    HEAP32[i10 >> 2] = HEAP32[i17 >> 2];
    HEAP32[i10 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
    HEAP32[i10 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
    HEAP32[i10 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
    i18 = i3;
    HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
    HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
    HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
    HEAP32[i18 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i18 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
    HEAP32[i18 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
    HEAP32[i18 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
    i19 = 1;
    break;
   }
   HEAP32[i11 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i11 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
   HEAP32[i11 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   HEAP32[i11 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
   i18 = i2;
   HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   HEAP32[i18 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
   if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 7](i3, i2) | 0)) {
    i19 = 1;
    break;
   }
   HEAP32[i13 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   i17 = i3;
   HEAP32[i18 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
   HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
   HEAP32[i17 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   i19 = 2;
  } else {
   if (!i16) {
    i19 = 0;
    break;
   }
   i17 = i2;
   HEAP32[i14 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i14 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
   HEAP32[i14 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   HEAP32[i14 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
   i18 = i3;
   HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   HEAP32[i18 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 7](i2, i1) | 0)) {
    i19 = 1;
    break;
   }
   i18 = i1;
   HEAP32[i12 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i12 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i12 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i12 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   HEAP32[i18 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
   HEAP32[i17 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i17 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
   i19 = 2;
  }
 } while (0);
 _llvm_lifetime_end(16, 0, i10 | 0);
 _llvm_lifetime_end(16, 0, i11 | 0);
 _llvm_lifetime_end(16, 0, i12 | 0);
 _llvm_lifetime_end(16, 0, i13 | 0);
 _llvm_lifetime_end(16, 0, i14 | 0);
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 7](i4, i3) | 0)) {
  i20 = i19;
  STACKTOP = i6;
  return i20 | 0;
 }
 i14 = i9;
 i9 = i3;
 HEAP32[i14 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i14 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i14 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i14 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 i13 = i4;
 HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 7](i3, i2) | 0)) {
  i20 = i19 + 1 | 0;
  STACKTOP = i6;
  return i20 | 0;
 }
 i3 = i7;
 i7 = i2;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i9 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 7](i2, i1) | 0)) {
  i20 = i19 + 2 | 0;
  STACKTOP = i6;
  return i20 | 0;
 }
 i2 = i8;
 i8 = i1;
 HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i20 = i19 + 3 | 0;
 STACKTOP = i6;
 return i20 | 0;
}
function __ZNK7WebCore12PolygonShape20getIncludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
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
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 80 | 0;
 i12 = i11;
 i13 = __ZNK7WebCore12PolygonShape18shapePaddingBoundsEv(i1) | 0;
 if ((HEAP8[i13 + 24 | 0] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 d14 = +(i1 | 0);
 d15 = +((HEAP32[i3 >> 2] | 0) + i1 | 0);
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = 0;
 i3 = i6 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 i2 = i6 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 i16 = i7 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i7 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i7 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 __ZN7WebCoreL21computeXIntersectionsERKNS_12FloatPolygonEfbRN3WTF6VectorINS_13ShapeIntervalIfEELj0ENS3_15CrashOnOverflowEEE(i13, d14, 1, i6);
 __ZN7WebCoreL21computeXIntersectionsERKNS_12FloatPolygonEfbRN3WTF6VectorINS_13ShapeIntervalIfEELj0ENS3_15CrashOnOverflowEEE(i13, d15, 0, i7);
 i19 = i8 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i8 + 4 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i8 + 8 | 0;
 HEAP32[i21 >> 2] = 0;
 __ZN7WebCore13ShapeIntervalIfE23intersectShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_(i6, i7, i8);
 i7 = i9 | 0;
 HEAP32[i7 >> 2] = 0;
 i6 = i9 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i22 = i9 + 8 | 0;
 HEAP32[i22 >> 2] = 0;
 __ZN7WebCoreL34computeOverlappingEdgeXProjectionsERKNS_12FloatPolygonEffRN3WTF6VectorINS_13ShapeIntervalIfEELj0ENS3_15CrashOnOverflowEEE(i13, d14, d15, i9);
 i13 = i10 | 0;
 HEAP32[i13 >> 2] = 0;
 i23 = i10 + 4 | 0;
 HEAP32[i23 >> 2] = 0;
 i24 = i10 + 8 | 0;
 HEAP32[i24 >> 2] = 0;
 __ZN7WebCore13ShapeIntervalIfE22subtractShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_(i8, i9, i10);
 do {
  if ((HEAP32[i24 >> 2] | 0) != 0) {
   i10 = i11;
   i9 = i12 + 4 | 0;
   i8 = i4 + 8 | 0;
   i25 = i4 + 4 | 0;
   i26 = i4 | 0;
   i27 = i11;
   i28 = 0;
   while (1) {
    i29 = HEAP32[i13 >> 2] | 0;
    d15 = +HEAPF32[i29 + (i28 << 3) >> 2];
    d14 = +HEAPF32[i29 + (i28 << 3) + 4 >> 2];
    do {
     if (d15 < +2147483647) {
      if (d15 <= +-2147483648) {
       i30 = -2147483648;
       break;
      }
      i30 = ~~d15;
     } else {
      i30 = 2147483647;
     }
    } while (0);
    HEAP32[i10 >> 2] = i30;
    do {
     if (d14 < +2147483647) {
      if (d14 <= +-2147483648) {
       i31 = -2147483648;
       break;
      }
      i31 = ~~d14;
     } else {
      i31 = 2147483647;
     }
    } while (0);
    HEAP32[i9 >> 2] = i31;
    i29 = HEAP32[i8 >> 2] | 0;
    if ((i29 | 0) == (HEAP32[i25 >> 2] | 0)) {
     i32 = i29 + 1 | 0;
     i33 = HEAP32[i26 >> 2] | 0;
     do {
      if (i33 >>> 0 > i12 >>> 0) {
       i34 = 14;
      } else {
       if ((i33 + (i29 << 3) | 0) >>> 0 <= i12 >>> 0) {
        i34 = 14;
        break;
       }
       __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i32);
       i35 = HEAP32[i26 >> 2] | 0;
       i36 = i35 + (i27 - i33 >> 3 << 3) | 0;
       i37 = i35;
      }
     } while (0);
     if ((i34 | 0) == 14) {
      i34 = 0;
      __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i32);
      i36 = i12;
      i37 = HEAP32[i26 >> 2] | 0;
     }
     i33 = i36;
     i35 = i37 + (HEAP32[i8 >> 2] << 3) | 0;
     i38 = HEAP32[i33 + 4 >> 2] | 0;
     HEAP32[i35 >> 2] = HEAP32[i33 >> 2];
     HEAP32[i35 + 4 >> 2] = i38;
    } else {
     i38 = (HEAP32[i26 >> 2] | 0) + (i29 << 3) | 0;
     i35 = HEAP32[i11 + 4 >> 2] | 0;
     HEAP32[i38 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i38 + 4 >> 2] = i35;
    }
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    i28 = i28 + 1 | 0;
    i39 = HEAP32[i24 >> 2] | 0;
    if (i28 >>> 0 >= i39 >>> 0) {
     break;
    }
   }
   if ((i39 | 0) == 0) {
    break;
   }
   HEAP32[i24 >> 2] = 0;
  }
 } while (0);
 i24 = HEAP32[i13 >> 2] | 0;
 if ((i24 | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i23 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i24);
 }
 if ((HEAP32[i22 >> 2] | 0) != 0) {
  HEAP32[i22 >> 2] = 0;
 }
 i22 = HEAP32[i7 >> 2] | 0;
 if ((i22 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i6 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i22);
 }
 if ((HEAP32[i21 >> 2] | 0) != 0) {
  HEAP32[i21 >> 2] = 0;
 }
 i21 = HEAP32[i19 >> 2] | 0;
 if ((i21 | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
  HEAP32[i20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i21);
 }
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i16 >> 2] | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
  HEAP32[i17 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i18);
 }
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore12PolygonShape20getExcludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
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
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 80 | 0;
 i12 = i11;
 i13 = __ZNK7WebCore12PolygonShape17shapeMarginBoundsEv(i1) | 0;
 if ((HEAP8[i13 + 24 | 0] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 d14 = +(i1 | 0);
 d15 = +((HEAP32[i3 >> 2] | 0) + i1 | 0);
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = 0;
 i3 = i6 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 i2 = i6 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 i16 = i7 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i7 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i7 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 __ZN7WebCoreL21computeXIntersectionsERKNS_12FloatPolygonEfbRN3WTF6VectorINS_13ShapeIntervalIfEELj0ENS3_15CrashOnOverflowEEE(i13, d14, 1, i6);
 __ZN7WebCoreL21computeXIntersectionsERKNS_12FloatPolygonEfbRN3WTF6VectorINS_13ShapeIntervalIfEELj0ENS3_15CrashOnOverflowEEE(i13, d15, 0, i7);
 i19 = i8 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i8 + 4 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i8 + 8 | 0;
 HEAP32[i21 >> 2] = 0;
 __ZN7WebCore13ShapeIntervalIfE19uniteShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_(i6, i7, i8);
 i7 = i9 | 0;
 HEAP32[i7 >> 2] = 0;
 i6 = i9 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i22 = i9 + 8 | 0;
 HEAP32[i22 >> 2] = 0;
 __ZN7WebCoreL34computeOverlappingEdgeXProjectionsERKNS_12FloatPolygonEffRN3WTF6VectorINS_13ShapeIntervalIfEELj0ENS3_15CrashOnOverflowEEE(i13, d14, d15, i9);
 i13 = i10 | 0;
 HEAP32[i13 >> 2] = 0;
 i23 = i10 + 4 | 0;
 HEAP32[i23 >> 2] = 0;
 i24 = i10 + 8 | 0;
 HEAP32[i24 >> 2] = 0;
 __ZN7WebCore13ShapeIntervalIfE19uniteShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_(i8, i9, i10);
 do {
  if ((HEAP32[i24 >> 2] | 0) != 0) {
   i10 = i11;
   i9 = i12 + 4 | 0;
   i8 = i4 + 8 | 0;
   i25 = i4 + 4 | 0;
   i26 = i4 | 0;
   i27 = i11;
   i28 = 0;
   while (1) {
    i29 = (HEAP32[i13 >> 2] | 0) + (i28 << 3) | 0;
    d15 = +HEAPF32[i29 >> 2];
    d14 = +HEAPF32[i29 + 4 >> 2];
    do {
     if (d15 < +2147483647) {
      if (d15 <= +-2147483648) {
       i30 = -2147483648;
       break;
      }
      i30 = ~~d15;
     } else {
      i30 = 2147483647;
     }
    } while (0);
    HEAP32[i10 >> 2] = i30;
    do {
     if (d14 < +2147483647) {
      if (d14 <= +-2147483648) {
       i31 = -2147483648;
       break;
      }
      i31 = ~~d14;
     } else {
      i31 = 2147483647;
     }
    } while (0);
    HEAP32[i9 >> 2] = i31;
    i29 = HEAP32[i8 >> 2] | 0;
    if ((i29 | 0) == (HEAP32[i25 >> 2] | 0)) {
     i32 = i29 + 1 | 0;
     i33 = HEAP32[i26 >> 2] | 0;
     do {
      if (i33 >>> 0 > i12 >>> 0) {
       i34 = 14;
      } else {
       if ((i33 + (i29 << 3) | 0) >>> 0 <= i12 >>> 0) {
        i34 = 14;
        break;
       }
       __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i32);
       i35 = HEAP32[i26 >> 2] | 0;
       i36 = i35 + (i27 - i33 >> 3 << 3) | 0;
       i37 = i35;
      }
     } while (0);
     if ((i34 | 0) == 14) {
      i34 = 0;
      __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i32);
      i36 = i12;
      i37 = HEAP32[i26 >> 2] | 0;
     }
     i33 = i36;
     i35 = i37 + (HEAP32[i8 >> 2] << 3) | 0;
     i38 = HEAP32[i33 + 4 >> 2] | 0;
     HEAP32[i35 >> 2] = HEAP32[i33 >> 2];
     HEAP32[i35 + 4 >> 2] = i38;
    } else {
     i38 = (HEAP32[i26 >> 2] | 0) + (i29 << 3) | 0;
     i35 = HEAP32[i11 + 4 >> 2] | 0;
     HEAP32[i38 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i38 + 4 >> 2] = i35;
    }
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    i28 = i28 + 1 | 0;
    i39 = HEAP32[i24 >> 2] | 0;
    if (i28 >>> 0 >= i39 >>> 0) {
     break;
    }
   }
   if ((i39 | 0) == 0) {
    break;
   }
   HEAP32[i24 >> 2] = 0;
  }
 } while (0);
 i24 = HEAP32[i13 >> 2] | 0;
 if ((i24 | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i23 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i24);
 }
 if ((HEAP32[i22 >> 2] | 0) != 0) {
  HEAP32[i22 >> 2] = 0;
 }
 i22 = HEAP32[i7 >> 2] | 0;
 if ((i22 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i6 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i22);
 }
 if ((HEAP32[i21 >> 2] | 0) != 0) {
  HEAP32[i21 >> 2] = 0;
 }
 i21 = HEAP32[i19 >> 2] | 0;
 if ((i21 | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
  HEAP32[i20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i21);
 }
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i16 >> 2] | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
  HEAP32[i17 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i18);
 }
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13ShapeIntervalIfE23intersectShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i2 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = HEAP32[i1 >> 2] | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == (i10 | 0)) {
   i13 = 0;
   while (1) {
    if (i13 >>> 0 >= i8 >>> 0) {
     break;
    }
    if (+HEAPF32[i11 + (i13 << 3) >> 2] != +HEAPF32[i12 + (i13 << 3) >> 2]) {
     break L7;
    }
    if (+HEAPF32[i11 + (i13 << 3) + 4 >> 2] == +HEAPF32[i12 + (i13 << 3) + 4 >> 2]) {
     i13 = i13 + 1 | 0;
    } else {
     break L7;
    }
   }
   i13 = i11 + (i8 << 3) | 0;
   i14 = i3 + 8 | 0;
   i15 = i3 + 4 | 0;
   i16 = i3 | 0;
   i17 = i11;
   i18 = HEAP32[i14 >> 2] | 0;
   while (1) {
    if ((i18 | 0) == (HEAP32[i15 >> 2] | 0)) {
     i19 = i18 + 1 | 0;
     i20 = HEAP32[i16 >> 2] | 0;
     do {
      if (i20 >>> 0 > i17 >>> 0) {
       i21 = 12;
      } else {
       if ((i20 + (i18 << 3) | 0) >>> 0 <= i17 >>> 0) {
        i21 = 12;
        break;
       }
       __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i19);
       i22 = HEAP32[i16 >> 2] | 0;
       i23 = i22 + (i17 - i20 >> 3 << 3) | 0;
       i24 = i22;
      }
     } while (0);
     if ((i21 | 0) == 12) {
      i21 = 0;
      __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i19);
      i23 = i17;
      i24 = HEAP32[i16 >> 2] | 0;
     }
     i20 = i23;
     i22 = i24 + (HEAP32[i14 >> 2] << 3) | 0;
     i25 = HEAP32[i20 + 4 >> 2] | 0;
     HEAP32[i22 >> 2] = HEAP32[i20 >> 2];
     HEAP32[i22 + 4 >> 2] = i25;
    } else {
     i25 = i17;
     i22 = (HEAP32[i16 >> 2] | 0) + (i18 << 3) | 0;
     i20 = HEAP32[i25 + 4 >> 2] | 0;
     HEAP32[i22 >> 2] = HEAP32[i25 >> 2];
     HEAP32[i22 + 4 >> 2] = i20;
    }
    i18 = (HEAP32[i14 >> 2] | 0) + 1 | 0;
    HEAP32[i14 >> 2] = i18;
    i17 = i17 + 8 | 0;
    if ((i17 | 0) == (i13 | 0)) {
     break;
    }
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i24 = i1 | 0;
 i1 = i2 | 0;
 i2 = +HEAPF32[i11 >> 2] < +HEAPF32[i12 >> 2];
 i23 = i5;
 i8 = i6 + 4 | 0;
 i10 = i3 + 8 | 0;
 i13 = i3 + 4 | 0;
 i17 = i3 | 0;
 i18 = i5;
 i14 = i2 ? i11 + 8 | 0 : i11;
 i16 = i2 ? i11 : i12;
 i11 = i2 ? i12 : i12 + 8 | 0;
 L27 : while (1) {
  i12 = i16 + 4 | 0;
  i2 = i16 | 0;
  i15 = i14;
  i20 = i11;
  while (1) {
   i22 = (i15 | 0) == ((HEAP32[i24 >> 2] | 0) + (HEAP32[i7 >> 2] << 3) | 0);
   i25 = HEAP32[i1 >> 2] | 0;
   i26 = HEAP32[i9 >> 2] | 0;
   if (i22) {
    if ((i20 | 0) == (i25 + (i26 << 3) | 0)) {
     break L27;
    }
   }
   do {
    if ((i20 | 0) == (i25 + (i26 << 3) | 0)) {
     i21 = 23;
    } else {
     if (!i22) {
      if (+HEAPF32[i15 >> 2] < +HEAPF32[i20 >> 2]) {
       i21 = 23;
       break;
      }
     }
     i27 = i20;
     i28 = i15;
     i29 = i20 + 8 | 0;
    }
   } while (0);
   if ((i21 | 0) == 23) {
    i21 = 0;
    i27 = i15;
    i28 = i15 + 8 | 0;
    i29 = i20;
   }
   d30 = +HEAPF32[i12 >> 2];
   d31 = +HEAPF32[i27 >> 2];
   if (d30 < d31) {
    i14 = i28;
    i16 = i27;
    i11 = i29;
    continue L27;
   }
   d32 = +HEAPF32[i2 >> 2];
   i22 = i27 + 4 | 0;
   d33 = +HEAPF32[i22 >> 2];
   if (d32 > d33) {
    i14 = i28;
    i16 = i27;
    i11 = i29;
    continue L27;
   }
   HEAPF32[i23 >> 2] = d32 < d31 ? d31 : d32;
   HEAPF32[i8 >> 2] = d33 < d30 ? d33 : d30;
   i26 = HEAP32[i10 >> 2] | 0;
   if ((i26 | 0) == (HEAP32[i13 >> 2] | 0)) {
    i25 = i26 + 1 | 0;
    i19 = HEAP32[i17 >> 2] | 0;
    do {
     if (i19 >>> 0 > i6 >>> 0) {
      i21 = 31;
     } else {
      if ((i19 + (i26 << 3) | 0) >>> 0 <= i6 >>> 0) {
       i21 = 31;
       break;
      }
      __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i25);
      i34 = HEAP32[i17 >> 2] | 0;
      i35 = i34 + (i18 - i19 >> 3 << 3) | 0;
      i36 = i34;
     }
    } while (0);
    if ((i21 | 0) == 31) {
     i21 = 0;
     __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i25);
     i35 = i6;
     i36 = HEAP32[i17 >> 2] | 0;
    }
    i19 = i35;
    i34 = i36 + (HEAP32[i10 >> 2] << 3) | 0;
    i37 = HEAP32[i19 + 4 >> 2] | 0;
    HEAP32[i34 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i34 + 4 >> 2] = i37;
   } else {
    i37 = (HEAP32[i17 >> 2] | 0) + (i26 << 3) | 0;
    i34 = HEAP32[i5 + 4 >> 2] | 0;
    HEAP32[i37 >> 2] = HEAP32[i5 >> 2];
    HEAP32[i37 + 4 >> 2] = i34;
   }
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   if (+HEAPF32[i22 >> 2] > +HEAPF32[i12 >> 2]) {
    i14 = i28;
    i16 = i27;
    i11 = i29;
    continue L27;
   } else {
    i15 = i28;
    i20 = i29;
   }
  }
 }
 STACKTOP = i4;
 return;
}
function __ZNSt3__127__insertion_sort_incompleteIRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEbT0_SA_T_(i1, i2, i3) {
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
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11;
 switch (i2 - i1 >> 3 | 0) {
 case 3:
  {
   __ZNSt3__17__sort3IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_T_(i1, i1 + 8 | 0, i2 - 8 | 0, i3) | 0;
   i13 = 1;
   STACKTOP = i4;
   return i13 | 0;
  }
 case 2:
  {
   i14 = HEAP32[i3 >> 2] | 0;
   i15 = i2 - 8 | 0;
   i16 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i8 + 4 >> 2] = i16;
   if (!(FUNCTION_TABLE_iii[i14 & 7](i8, i1) | 0)) {
    i13 = 1;
    STACKTOP = i4;
    return i13 | 0;
   }
   i8 = i1;
   i14 = HEAP32[i8 >> 2] | 0;
   i16 = HEAP32[i8 + 4 >> 2] | 0;
   i17 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i8 + 4 >> 2] = i17;
   HEAP32[i15 >> 2] = i14;
   HEAP32[i15 + 4 >> 2] = i16;
   i13 = 1;
   STACKTOP = i4;
   return i13 | 0;
  }
 case 4:
  {
   i16 = i1 + 8 | 0;
   i15 = i1 + 16 | 0;
   __ZNSt3__17__sort3IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_T_(i1, i16, i15, i3) | 0;
   i14 = HEAP32[i3 >> 2] | 0;
   i17 = i2 - 8 | 0;
   i8 = HEAP32[i17 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i5 + 4 >> 2] = i8;
   if (!(FUNCTION_TABLE_iii[i14 & 7](i5, i15) | 0)) {
    i13 = 1;
    STACKTOP = i4;
    return i13 | 0;
   }
   i5 = i15;
   i15 = HEAP32[i5 >> 2] | 0;
   i14 = HEAP32[i5 + 4 >> 2] | 0;
   i8 = HEAP32[i17 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i5 + 4 >> 2] = i8;
   HEAP32[i17 >> 2] = i15;
   HEAP32[i17 + 4 >> 2] = i14;
   i14 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i6 + 4 >> 2] = i17;
   if (!(FUNCTION_TABLE_iii[i14 & 7](i6, i16) | 0)) {
    i13 = 1;
    STACKTOP = i4;
    return i13 | 0;
   }
   i6 = i16;
   i16 = HEAP32[i6 >> 2] | 0;
   i14 = HEAP32[i6 + 4 >> 2] | 0;
   i17 = HEAP32[i5 >> 2] | 0;
   i15 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = i17;
   HEAP32[i6 + 4 >> 2] = i15;
   HEAP32[i5 >> 2] = i16;
   HEAP32[i5 + 4 >> 2] = i14;
   i14 = HEAP32[i3 >> 2] | 0;
   HEAP32[i7 >> 2] = i17;
   HEAP32[i7 + 4 >> 2] = i15;
   if (!(FUNCTION_TABLE_iii[i14 & 7](i7, i1) | 0)) {
    i13 = 1;
    STACKTOP = i4;
    return i13 | 0;
   }
   i7 = i1;
   i14 = HEAP32[i7 >> 2] | 0;
   i15 = HEAP32[i7 + 4 >> 2] | 0;
   i17 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i7 + 4 >> 2] = i17;
   HEAP32[i6 >> 2] = i14;
   HEAP32[i6 + 4 >> 2] = i15;
   i13 = 1;
   STACKTOP = i4;
   return i13 | 0;
  }
 case 5:
  {
   __ZNSt3__17__sort5IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_SA_SA_T_(i1, i1 + 8 | 0, i1 + 16 | 0, i1 + 24 | 0, i2 - 8 | 0, i3) | 0;
   i13 = 1;
   STACKTOP = i4;
   return i13 | 0;
  }
 case 0:
 case 1:
  {
   i13 = 1;
   STACKTOP = i4;
   return i13 | 0;
  }
 default:
  {
   i15 = i1 + 16 | 0;
   __ZNSt3__17__sort3IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_T_(i1, i1 + 8 | 0, i15, i3) | 0;
   i6 = i1 + 24 | 0;
   if ((i6 | 0) == (i2 | 0)) {
    i13 = 1;
    STACKTOP = i4;
    return i13 | 0;
   } else {
    i18 = i15;
    i19 = 0;
    i20 = i6;
   }
   while (1) {
    i6 = HEAP32[i3 >> 2] | 0;
    i15 = i20;
    i14 = HEAP32[i15 + 4 >> 2] | 0;
    HEAP32[i9 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i9 + 4 >> 2] = i14;
    if (FUNCTION_TABLE_iii[i6 & 7](i10, i18) | 0) {
     i6 = HEAP32[i15 >> 2] | 0;
     i14 = HEAP32[i15 + 4 >> 2] | 0;
     i15 = i18;
     i17 = i20;
     while (1) {
      i21 = i15;
      i7 = i17;
      i5 = HEAP32[i21 + 4 >> 2] | 0;
      HEAP32[i7 >> 2] = HEAP32[i21 >> 2];
      HEAP32[i7 + 4 >> 2] = i5;
      if ((i15 | 0) == (i1 | 0)) {
       break;
      }
      i5 = HEAP32[i3 >> 2] | 0;
      HEAP32[i11 >> 2] = i6;
      HEAP32[i11 + 4 >> 2] = i14;
      i7 = i15 - 8 | 0;
      if (FUNCTION_TABLE_iii[i5 & 7](i12, i7) | 0) {
       i17 = i15;
       i15 = i7;
      } else {
       break;
      }
     }
     HEAP32[i21 >> 2] = i6;
     HEAP32[i21 + 4 >> 2] = i14;
     i15 = i19 + 1 | 0;
     if ((i15 | 0) == 8) {
      break;
     } else {
      i22 = i15;
     }
    } else {
     i22 = i19;
    }
    i15 = i20 + 8 | 0;
    if ((i15 | 0) == (i2 | 0)) {
     i13 = 1;
     i23 = 30;
     break;
    } else {
     i18 = i20;
     i19 = i22;
     i20 = i15;
    }
   }
   if ((i23 | 0) == 30) {
    STACKTOP = i4;
    return i13 | 0;
   }
   i13 = (i20 + 8 | 0) == (i2 | 0);
   STACKTOP = i4;
   return i13 | 0;
  }
 }
 return 0;
}
function __ZN7WebCoreL9appendArcERN3WTF6VectorINS_10FloatPointELj0ENS0_15CrashOnOverflowEEERKS2_fS7_S7_b(i1, i2, d3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i8;
 i10 = i2 + 4 | 0;
 d11 = +HEAPF32[i10 >> 2];
 i12 = i2 | 0;
 d13 = +HEAPF32[i12 >> 2];
 d14 = +Math_atan2(+(+HEAPF32[i4 + 4 >> 2] - d11), +(+HEAPF32[i4 >> 2] - d13));
 d15 = +Math_atan2(+(+HEAPF32[i5 + 4 >> 2] - d11), +(+HEAPF32[i5 >> 2] - d13));
 if (d14 < +0) {
  d16 = d14 + 6.2831854820251465;
 } else {
  d16 = d14;
 }
 if (d15 < +0) {
  d17 = d15 + 6.2831854820251465;
 } else {
  d17 = d15;
 }
 if (d16 > d17) {
  d18 = d16;
 } else {
  d18 = d16 + 6.2831854820251465;
 }
 d15 = ((i6 ? +-0 : 6.2831854820251465) - (d18 - d17)) / +6;
 i6 = i1 + 8 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i19 = i1 + 4 | 0;
 if ((i2 | 0) == (HEAP32[i19 >> 2] | 0)) {
  i20 = i2 + 1 | 0;
  i21 = i1 | 0;
  i22 = HEAP32[i21 >> 2] | 0;
  do {
   if (i22 >>> 0 > i4 >>> 0) {
    i23 = 11;
   } else {
    if ((i22 + (i2 << 3) | 0) >>> 0 <= i4 >>> 0) {
     i23 = 11;
     break;
    }
    __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i20);
    i24 = HEAP32[i21 >> 2] | 0;
    i25 = i24 + (i4 - i22 >> 3 << 3) | 0;
    i26 = i24;
   }
  } while (0);
  if ((i23 | 0) == 11) {
   __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i20);
   i25 = i4;
   i26 = HEAP32[i21 >> 2] | 0;
  }
  i21 = i25;
  i25 = i26 + (HEAP32[i6 >> 2] << 3) | 0;
  i26 = HEAP32[i21 + 4 >> 2] | 0;
  HEAP32[i25 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i25 + 4 >> 2] = i26;
 } else {
  i26 = i4;
  i4 = (HEAP32[i1 >> 2] | 0) + (i2 << 3) | 0;
  i2 = HEAP32[i26 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = HEAP32[i26 >> 2];
  HEAP32[i4 + 4 >> 2] = i2;
 }
 i2 = (HEAP32[i6 >> 2] | 0) + 1 | 0;
 HEAP32[i6 >> 2] = i2;
 d17 = d3;
 i4 = i8;
 i26 = i9 + 4 | 0;
 i25 = i1 | 0;
 i21 = i8;
 i20 = 1;
 d3 = +1;
 i22 = i2;
 while (1) {
  d18 = d16 + d15 * d3;
  d14 = d17 * +Math_cos(d18);
  d13 = d17 * +Math_sin(d18);
  d18 = +HEAPF32[i10 >> 2] + d13;
  HEAPF32[i4 >> 2] = +HEAPF32[i12 >> 2] + d14;
  HEAPF32[i26 >> 2] = d18;
  if ((i22 | 0) == (HEAP32[i19 >> 2] | 0)) {
   i2 = i22 + 1 | 0;
   i24 = HEAP32[i25 >> 2] | 0;
   do {
    if (i24 >>> 0 > i9 >>> 0) {
     i23 = 19;
    } else {
     if ((i24 + (i22 << 3) | 0) >>> 0 <= i9 >>> 0) {
      i23 = 19;
      break;
     }
     __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2);
     i27 = HEAP32[i25 >> 2] | 0;
     i28 = i27 + (i21 - i24 >> 3 << 3) | 0;
     i29 = i27;
    }
   } while (0);
   if ((i23 | 0) == 19) {
    i23 = 0;
    __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2);
    i28 = i9;
    i29 = HEAP32[i25 >> 2] | 0;
   }
   i24 = i28;
   i27 = i29 + (HEAP32[i6 >> 2] << 3) | 0;
   i30 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i27 >> 2] = HEAP32[i24 >> 2];
   HEAP32[i27 + 4 >> 2] = i30;
  } else {
   i30 = (HEAP32[i25 >> 2] | 0) + (i22 << 3) | 0;
   i27 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i30 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i30 + 4 >> 2] = i27;
  }
  i31 = HEAP32[i6 >> 2] | 0;
  i22 = i31 + 1 | 0;
  HEAP32[i6 >> 2] = i22;
  i20 = i20 + 1 | 0;
  d3 = +(i20 >>> 0 >>> 0);
  if (d3 >= +6) {
   break;
  }
 }
 if ((i22 | 0) != (HEAP32[i19 >> 2] | 0)) {
  i19 = i5;
  i20 = (HEAP32[i25 >> 2] | 0) + (i22 << 3) | 0;
  i8 = HEAP32[i19 + 4 >> 2] | 0;
  HEAP32[i20 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i20 + 4 >> 2] = i8;
  i32 = HEAP32[i6 >> 2] | 0;
  i33 = i32 + 1 | 0;
  HEAP32[i6 >> 2] = i33;
  STACKTOP = i7;
  return;
 }
 i8 = i31 + 2 | 0;
 i31 = HEAP32[i25 >> 2] | 0;
 do {
  if (i31 >>> 0 > i5 >>> 0) {
   i23 = 27;
  } else {
   if ((i31 + (i22 << 3) | 0) >>> 0 <= i5 >>> 0) {
    i23 = 27;
    break;
   }
   __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i8);
   i20 = HEAP32[i25 >> 2] | 0;
   i34 = i20 + (i5 - i31 >> 3 << 3) | 0;
   i35 = i20;
  }
 } while (0);
 if ((i23 | 0) == 27) {
  __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i8);
  i34 = i5;
  i35 = HEAP32[i25 >> 2] | 0;
 }
 i25 = i34;
 i34 = i35 + (HEAP32[i6 >> 2] << 3) | 0;
 i35 = HEAP32[i25 + 4 >> 2] | 0;
 HEAP32[i34 >> 2] = HEAP32[i25 >> 2];
 HEAP32[i34 + 4 >> 2] = i35;
 i32 = HEAP32[i6 >> 2] | 0;
 i33 = i32 + 1 | 0;
 HEAP32[i6 >> 2] = i33;
 STACKTOP = i7;
 return;
}
function __ZNSt3__17__sort5IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_SA_SA_T_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = i16;
 i18 = i10;
 i19 = __ZNSt3__17__sort3IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_T_(i1, i2, i3, i6) | 0;
 i20 = HEAP32[i6 >> 2] | 0;
 i21 = i4;
 i22 = HEAP32[i21 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i8 + 4 >> 2] = i22;
 do {
  if (FUNCTION_TABLE_iii[i20 & 7](i8, i3) | 0) {
   i22 = i3;
   i23 = HEAP32[i22 >> 2] | 0;
   i24 = HEAP32[i22 + 4 >> 2] | 0;
   i25 = HEAP32[i21 + 4 >> 2] | 0;
   HEAP32[i22 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i22 + 4 >> 2] = i25;
   HEAP32[i21 >> 2] = i23;
   HEAP32[i21 + 4 >> 2] = i24;
   i24 = HEAP32[i6 >> 2] | 0;
   i23 = HEAP32[i22 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i22 >> 2];
   HEAP32[i9 + 4 >> 2] = i23;
   if (!(FUNCTION_TABLE_iii[i24 & 7](i9, i2) | 0)) {
    i26 = i19 + 1 | 0;
    break;
   }
   i24 = i2;
   i23 = HEAP32[i24 >> 2] | 0;
   i25 = HEAP32[i24 + 4 >> 2] | 0;
   i27 = HEAP32[i22 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = HEAP32[i22 >> 2];
   HEAP32[i24 + 4 >> 2] = i27;
   HEAP32[i22 >> 2] = i23;
   HEAP32[i22 + 4 >> 2] = i25;
   i25 = HEAP32[i6 >> 2] | 0;
   i22 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i24 >> 2];
   HEAP32[i10 + 4 >> 2] = i22;
   if (!(FUNCTION_TABLE_iii[i25 & 7](i18, i1) | 0)) {
    i26 = i19 + 2 | 0;
    break;
   }
   i25 = i1;
   i22 = HEAP32[i25 >> 2] | 0;
   i23 = HEAP32[i25 + 4 >> 2] | 0;
   i27 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i25 >> 2] = HEAP32[i24 >> 2];
   HEAP32[i25 + 4 >> 2] = i27;
   HEAP32[i24 >> 2] = i22;
   HEAP32[i24 + 4 >> 2] = i23;
   i26 = i19 + 3 | 0;
  } else {
   i26 = i19;
  }
 } while (0);
 i19 = HEAP32[i6 >> 2] | 0;
 i18 = i5;
 i5 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i11 + 4 >> 2] = i5;
 if (!(FUNCTION_TABLE_iii[i19 & 7](i12, i4) | 0)) {
  i28 = i26;
  STACKTOP = i7;
  return i28 | 0;
 }
 i4 = HEAP32[i21 >> 2] | 0;
 i12 = HEAP32[i21 + 4 >> 2] | 0;
 i19 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i21 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i21 + 4 >> 2] = i19;
 HEAP32[i18 >> 2] = i4;
 HEAP32[i18 + 4 >> 2] = i12;
 i12 = HEAP32[i6 >> 2] | 0;
 i18 = HEAP32[i21 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i13 + 4 >> 2] = i18;
 if (!(FUNCTION_TABLE_iii[i12 & 7](i13, i3) | 0)) {
  i28 = i26 + 1 | 0;
  STACKTOP = i7;
  return i28 | 0;
 }
 i13 = i3;
 i3 = HEAP32[i13 >> 2] | 0;
 i12 = HEAP32[i13 + 4 >> 2] | 0;
 i18 = HEAP32[i21 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i13 + 4 >> 2] = i18;
 HEAP32[i21 >> 2] = i3;
 HEAP32[i21 + 4 >> 2] = i12;
 i12 = HEAP32[i6 >> 2] | 0;
 i21 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i14 + 4 >> 2] = i21;
 if (!(FUNCTION_TABLE_iii[i12 & 7](i15, i2) | 0)) {
  i28 = i26 + 2 | 0;
  STACKTOP = i7;
  return i28 | 0;
 }
 i15 = i2;
 i2 = HEAP32[i15 >> 2] | 0;
 i12 = HEAP32[i15 + 4 >> 2] | 0;
 i21 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i15 + 4 >> 2] = i21;
 HEAP32[i13 >> 2] = i2;
 HEAP32[i13 + 4 >> 2] = i12;
 i12 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i16 + 4 >> 2] = i6;
 if (!(FUNCTION_TABLE_iii[i12 & 7](i17, i1) | 0)) {
  i28 = i26 + 3 | 0;
  STACKTOP = i7;
  return i28 | 0;
 }
 i17 = i1;
 i1 = HEAP32[i17 >> 2] | 0;
 i12 = HEAP32[i17 + 4 >> 2] | 0;
 i6 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i17 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i17 + 4 >> 2] = i6;
 HEAP32[i15 >> 2] = i1;
 HEAP32[i15 + 4 >> 2] = i12;
 i28 = i26 + 4 | 0;
 STACKTOP = i7;
 return i28 | 0;
}
function __ZNSt3__17__sort3IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_T_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11;
 i13 = HEAP32[i4 >> 2] | 0;
 i14 = i2;
 i15 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i6 + 4 >> 2] = i15;
 i15 = FUNCTION_TABLE_iii[i13 & 7](i6, i1) | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if (!i15) {
  i15 = i3;
  i13 = HEAP32[i15 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i7 + 4 >> 2] = i13;
  if (!(FUNCTION_TABLE_iii[i6 & 7](i7, i2) | 0)) {
   i16 = 0;
   STACKTOP = i5;
   return i16 | 0;
  }
  i7 = HEAP32[i14 >> 2] | 0;
  i13 = HEAP32[i14 + 4 >> 2] | 0;
  i17 = HEAP32[i15 + 4 >> 2] | 0;
  HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i14 + 4 >> 2] = i17;
  HEAP32[i15 >> 2] = i7;
  HEAP32[i15 + 4 >> 2] = i13;
  i13 = HEAP32[i4 >> 2] | 0;
  i15 = HEAP32[i14 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i8 + 4 >> 2] = i15;
  if (!(FUNCTION_TABLE_iii[i13 & 7](i9, i1) | 0)) {
   i16 = 1;
   STACKTOP = i5;
   return i16 | 0;
  }
  i9 = i1;
  i13 = HEAP32[i9 >> 2] | 0;
  i15 = HEAP32[i9 + 4 >> 2] | 0;
  i8 = HEAP32[i14 + 4 >> 2] | 0;
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i9 + 4 >> 2] = i8;
  HEAP32[i14 >> 2] = i13;
  HEAP32[i14 + 4 >> 2] = i15;
  i16 = 2;
  STACKTOP = i5;
  return i16 | 0;
 }
 i15 = i3;
 i3 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i10 + 4 >> 2] = i3;
 i3 = FUNCTION_TABLE_iii[i6 & 7](i10, i2) | 0;
 i10 = i1;
 i1 = HEAP32[i10 >> 2] | 0;
 i6 = HEAP32[i10 + 4 >> 2] | 0;
 if (i3) {
  i3 = HEAP32[i15 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i10 + 4 >> 2] = i3;
  HEAP32[i15 >> 2] = i1;
  HEAP32[i15 + 4 >> 2] = i6;
  i16 = 1;
  STACKTOP = i5;
  return i16 | 0;
 }
 i3 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i10 + 4 >> 2] = i3;
 HEAP32[i14 >> 2] = i1;
 HEAP32[i14 + 4 >> 2] = i6;
 i6 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i11 + 4 >> 2] = i4;
 if (!(FUNCTION_TABLE_iii[i6 & 7](i12, i2) | 0)) {
  i16 = 1;
  STACKTOP = i5;
  return i16 | 0;
 }
 i2 = HEAP32[i14 >> 2] | 0;
 i12 = HEAP32[i14 + 4 >> 2] | 0;
 i6 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i14 + 4 >> 2] = i6;
 HEAP32[i15 >> 2] = i2;
 HEAP32[i15 + 4 >> 2] = i12;
 i16 = 2;
 STACKTOP = i5;
 return i16 | 0;
}
function __ZN7WebCoreL20computeXIntersectionEPKNS_16FloatPolygonEdgeEfRNS_16EdgeIntersectionE(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, d16 = +0, d17 = +0;
 i4 = i1 | 0;
 i5 = i1;
 d6 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 15](i4) | 0) + 4 >> 2];
 d7 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 15](i4) | 0) + 4 >> 2];
 if ((d7 < d6 ? d7 : d6) > d2) {
  i8 = 0;
  return i8 | 0;
 }
 d6 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 15](i4) | 0) + 4 >> 2];
 d7 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 15](i4) | 0) + 4 >> 2];
 if ((d6 < d7 ? d7 : d6) < d2) {
  i8 = 0;
  return i8 | 0;
 }
 i9 = i1;
 i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 15](i1) | 0;
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 15](i1) | 0;
 i9 = i11 + 4 | 0;
 i12 = i10 + 4 | 0;
 d6 = +HEAPF32[i9 >> 2] - +HEAPF32[i12 >> 2];
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 15](i4) | 0;
 do {
  if (d6 != +0) {
   d7 = +HEAPF32[i13 + 4 >> 2];
   d14 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 15](i4) | 0) + 4 >> 2];
   if ((d14 < d7 ? d14 : d7) == d2) {
    if (+HEAPF32[i12 >> 2] < +HEAPF32[i9 >> 2]) {
     i15 = 1;
     d16 = +HEAPF32[i10 >> 2];
     break;
    } else {
     i15 = 1;
     d16 = +HEAPF32[i11 >> 2];
     break;
    }
   }
   d7 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 15](i4) | 0) + 4 >> 2];
   d14 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 15](i4) | 0) + 4 >> 2];
   d17 = +HEAPF32[i12 >> 2];
   if ((d7 < d14 ? d14 : d7) != d2) {
    d7 = +HEAPF32[i10 >> 2];
    i15 = 0;
    d16 = d7 + (d2 - d17) * (+HEAPF32[i11 >> 2] - d7) / d6;
    break;
   }
   if (d17 > +HEAPF32[i9 >> 2]) {
    i15 = 2;
    d16 = +HEAPF32[i10 >> 2];
    break;
   } else {
    i15 = 2;
    d16 = +HEAPF32[i11 >> 2];
    break;
   }
  } else {
   d17 = +HEAPF32[i13 >> 2];
   d7 = +HEAPF32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 15](i4) | 0) >> 2];
   i15 = 3;
   d16 = d7 < d17 ? d7 : d17;
  }
 } while (0);
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 12 >> 2] = i15;
 HEAPF32[i3 + 4 >> 2] = d16;
 HEAPF32[i3 + 8 >> 2] = d2;
 i8 = 1;
 return i8 | 0;
}
function __ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE23checkInvariantsFromNodeEPNS5_4NodeEPi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i3 >> 2] = 1;
  i7 = 1;
  STACKTOP = i4;
  return i7 | 0;
 }
 i8 = i2 + 16 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 2) {
   i10 = HEAP32[i2 + 4 >> 2] | 0;
   i11 = i2 + 8 | 0;
  } else if ((i9 | 0) == 1) {
   i12 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     if ((HEAP32[i12 + 16 >> 2] | 0) == 2) {
      break;
     } else {
      i7 = 0;
     }
     STACKTOP = i4;
     return i7 | 0;
    }
   } while (0);
   i13 = i2 + 8 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i10 = i12;
    i11 = i13;
    break;
   }
   if ((HEAP32[i14 + 16 >> 2] | 0) == 2) {
    i10 = i12;
    i11 = i13;
    break;
   } else {
    i7 = 0;
   }
   STACKTOP = i4;
   return i7 | 0;
  } else {
   i7 = 0;
   STACKTOP = i4;
   return i7 | 0;
  }
 } while (0);
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 i2 = __ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE23checkInvariantsFromNodeEPNS5_4NodeEPi(i1, i10, i5) | 0;
 if (!(i2 & (__ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE23checkInvariantsFromNodeEPNS5_4NodeEPi(i1, HEAP32[i11 >> 2] | 0, i6) | 0))) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i11 = HEAP32[i5 >> 2] | 0;
 HEAP32[i3 >> 2] = ((HEAP32[i8 >> 2] | 0) == 2) + i11;
 i7 = (i11 | 0) == (HEAP32[i6 >> 2] | 0);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 28 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 28 & -1) * 28 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) >> 2] = H_BASE + 16;
 i2 = i11 + 4 | 0;
 i5 = i12 + (i6 * 28 & -1) + 4 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i5 + 4 >> 2] = i8;
 i8 = i11 + 12 | 0;
 i5 = i12 + (i6 * 28 & -1) + 12 | 0;
 i2 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i5 + 4 >> 2] = i2;
 HEAP32[i12 + (i6 * 28 & -1) + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i12 + (i6 * 28 & -1) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 28 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 28 & -1) * 28 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) >> 2] = H_BASE + 16;
 i2 = i11 + 4 | 0;
 i5 = i12 + (i6 * 28 & -1) + 4 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i5 + 4 >> 2] = i8;
 i8 = i11 + 12 | 0;
 i5 = i12 + (i6 * 28 & -1) + 12 | 0;
 i2 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i5 + 4 >> 2] = i2;
 HEAP32[i12 + (i6 * 28 & -1) + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i12 + (i6 * 28 & -1) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 * 28 & -1) | 0;
 if (i2 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 28 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 28 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = H_BASE + 16;
   i2 = i6 + 4 | 0;
   i8 = i7 + 4 | 0;
   i9 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   i9 = i6 + 12 | 0;
   i8 = i7 + 12 | 0;
   i2 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i8 + 4 >> 2] = i2;
   HEAP32[i7 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i7 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i6 >> 2] >> 2] & 15](i6);
   i2 = i6 + 28 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 28 | 0;
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
function __ZNK7WebCore12PolygonShape17buildDisplayPathsERNS_5Shape12DisplayPathsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2 | 0;
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i3, HEAP32[i5 >> 2] | 0);
  i5 = HEAP32[i4 >> 2] | 0;
  if ((HEAP32[i5 + 8 >> 2] | 0) >>> 0 > 1 >>> 0) {
   i6 = 1;
   i7 = i5;
   while (1) {
    __ZN7WebCore4Path9addLineToERKNS_10FloatPointE(i3, (HEAP32[i7 >> 2] | 0) + (i6 << 3) | 0);
    i6 = i6 + 1 | 0;
    i7 = HEAP32[i4 >> 2] | 0;
    if (i6 >>> 0 >= (HEAP32[i7 + 8 >> 2] | 0) >>> 0) {
     break;
    }
   }
  }
  __ZN7WebCore4Path12closeSubpathEv(i3);
 }
 if (+HEAPF32[i1 + 8 >> 2] == +0) {
  return;
 }
 i3 = i2 + 4 | 0;
 i2 = __ZNK7WebCore12PolygonShape17shapeMarginBoundsEv(i1) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i3, HEAP32[i1 >> 2] | 0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) >>> 0 > 1 >>> 0) {
  i7 = 1;
  i6 = i1;
  while (1) {
   __ZN7WebCore4Path9addLineToERKNS_10FloatPointE(i3, (HEAP32[i6 >> 2] | 0) + (i7 << 3) | 0);
   i7 = i7 + 1 | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   if (i7 >>> 0 >= (HEAP32[i6 + 8 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 __ZN7WebCore4Path12closeSubpathEv(i3);
 return;
}
function __ZN7WebCore12FloatPolygonD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 + 40 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i2 = i1 + 36 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 28 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  i6 = i4 + (i5 * 20 & -1) | 0;
  i5 = i4;
  while (1) {
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i5 >> 2] >> 2] & 15](i5);
   i5 = i5 + 20 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i2 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6VectorIN7WebCore16EdgeIntersectionELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vii + 2;
}
function __ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore12PolygonShape30shapePaddingLogicalBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (__ZNK7WebCore12PolygonShape18shapePaddingBoundsEv(i2) | 0) + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 __ZN7WebCore10LayoutRectC1ERKNS_9FloatRectE(i1, i4);
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
function __ZNK7WebCore12PolygonShape29shapeMarginLogicalBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (__ZNK7WebCore12PolygonShape17shapeMarginBoundsEv(i2) | 0) + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 __ZN7WebCore10LayoutRectC1ERKNS_9FloatRectE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 return;
}
function __ZN7WebCore12PolygonShapeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 80;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore12FloatPolygonD2Ev(i2);
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1 + 16 | 0;
  __ZN7WebCore12FloatPolygonD2Ev(i3);
  return;
 }
 __ZN7WebCore12FloatPolygonD2Ev(i2);
 __ZdlPv(i2);
 i3 = i1 + 16 | 0;
 __ZN7WebCore12FloatPolygonD2Ev(i3);
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
function __ZN7WebCore12PolygonShapeD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 80;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore12FloatPolygonD2Ev(i2);
  __ZdlPv(i2);
 }
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore12FloatPolygonD2Ev(i2);
  __ZdlPv(i2);
 }
 __ZN7WebCore12FloatPolygonD2Ev(i1 + 16 | 0);
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE15checkInvariantsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = __ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE23checkInvariantsFromNodeEPNS5_4NodeEPi(i1, HEAP32[i1 + 8 >> 2] | 0, i2 | 0) | 0;
 STACKTOP = i2;
 return i3 | 0;
}
function __ZN7WebCoreL24compareEdgeIntersectionXERKNS_16EdgeIntersectionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, d4 = +0, i5 = 0;
 d3 = +HEAPF32[i1 + 4 >> 2];
 d4 = +HEAPF32[i2 + 4 >> 2];
 if (d3 == d4) {
  i5 = (HEAP32[i1 + 12 >> 2] | 0) < (HEAP32[i2 + 12 >> 2] | 0);
  return i5 | 0;
 } else {
  i5 = d3 < d4;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCoreL9compareX1ENS_13ShapeIntervalIfEERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 i4 = i1;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 STACKTOP = i3;
 return +HEAPF32[i1 >> 2] < +HEAPF32[i2 >> 2] | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE10updateNodeEPNS5_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
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
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZNK7WebCore12PolygonShape7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 40 | 0] & 1) != 0 | 0;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
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
function __ZNK7WebCore17OffsetPolygonEdge7vertex2Ev(i1) {
 i1 = i1 | 0;
 return i1 + 12 | 0;
}
function __ZNK7WebCore17OffsetPolygonEdge7vertex1Ev(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function __ZN7WebCore17OffsetPolygonEdgeD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore17OffsetPolygonEdgeD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,__ZNK7WebCore12PolygonShape31firstIncludedIntervalLogicalTopENS_10LayoutUnitERKNS_10LayoutSizeERS1_,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEED1Ev,b1,__ZN7WebCore17OffsetPolygonEdgeD1Ev,b1,__ZN7WebCore12PolygonShapeD0Ev,b1,__ZN7WebCore17OffsetPolygonEdgeD0Ev,b1,__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEED0Ev,b1,__ZN7WebCore12PolygonShapeD1Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZNK7WebCore12PolygonShape17buildDisplayPathsERNS_5Shape12DisplayPathsE,b2,__ZNK7WebCore12PolygonShape30shapePaddingLogicalBoundingBoxEv,b2,__ZNK7WebCore12PolygonShape29shapeMarginLogicalBoundingBoxEv,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE15checkInvariantsEv,b3,__ZNK7WebCore17OffsetPolygonEdge7vertex2Ev,b3,__ZNK7WebCore12PolygonShape7isEmptyEv,b3,__ZNK7WebCore17OffsetPolygonEdge7vertex1Ev,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5,__ZN7WebCoreL24compareEdgeIntersectionXERKNS_16EdgeIntersectionES2_,b5,__ZN7WebCoreL9compareX1ENS_13ShapeIntervalIfEERKS1_,b5,__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE10updateNodeEPNS5_4NodeE,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZNK7WebCore12PolygonShape20getExcludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE,b6,__ZNK7WebCore12PolygonShape20getIncludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_llvm_lifetime_start": _llvm_lifetime_start, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_cos": _cos, "_malloc": _malloc, "_atan2": _atan2, "_free": _free, "_fflush": _fflush, "_sin": _sin, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore13ShapeIntervalIfE23intersectShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_","_strlen","__ZN3WTF6VectorIN7WebCore13ShapeIntervalIfEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","_memset","__ZNK7WebCore12PolygonShape20getExcludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE","__ZN7WebCoreL9compareX1ENS_13ShapeIntervalIfEERKS1_","__ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE15checkInvariantsEv","__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEED0Ev","__ZNK7WebCore12PolygonShape29shapeMarginLogicalBoundingBoxEv","__ZNSt3__17__sort4IRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEjT0_S9_S9_S9_T_","__ZN7WebCore13ShapeIntervalIfE22subtractShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_","__ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCoreL9appendArcERN3WTF6VectorINS_10FloatPointELj0ENS0_15CrashOnOverflowEEERKS2_fS7_S7_b","__ZNK7WebCore12PolygonShape18shapePaddingBoundsEv","__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEED1Ev","__ZN3WTF6VectorIN7WebCore10FloatPointELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore12PolygonShape17shapeMarginBoundsEv","_memcpy","__ZN7WebCore13ShapeIntervalIfE19uniteShapeIntervalsERKN3WTF6VectorIS1_Lj0ENS2_15CrashOnOverflowEEES7_RS5_","__ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZNSt3__16__sortIRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEvT0_SA_T_","__ZNK7WebCore12PolygonShape20getIncludedIntervalsENS_10LayoutUnitES1_RN3WTF6VectorINS_11LineSegmentELj0ENS2_15CrashOnOverflowEEE","__ZNSt3__16__sortIRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEvT0_S9_T_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore17OffsetPolygonEdge7vertex2Ev","__ZN7WebCoreL24compareEdgeIntersectionXERKNS_16EdgeIntersectionES2_","__ZN3WTF6VectorIN7WebCore11LineSegmentELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore12PolygonShape30shapePaddingLogicalBoundingBoxEv","__ZNK7WebCore12PolygonShape7isEmptyEv","__ZNSt3__127__insertion_sort_incompleteIRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEbT0_SA_T_","__ZNSt3__17__sort5IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_SA_SA_T_","__ZN7WebCoreL20computeXIntersectionEPKNS_16FloatPolygonEdgeEfRNS_16EdgeIntersectionE","__ZNK7WebCore12PolygonShape31firstIncludedIntervalLogicalTopENS_10LayoutUnitERKNS_10LayoutSizeERS1_","__ZNSt3__17__sort3IRPFbN7WebCore13ShapeIntervalIfEERKS3_EPS3_EEjT0_SA_SA_T_","__ZN3WTF6VectorIN7WebCore17OffsetPolygonEdgeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN7WebCore12PolygonShapeD0Ev","__ZN7WebCoreL34computeOverlappingEdgeXProjectionsERKNS_12FloatPolygonEffRN3WTF6VectorINS_13ShapeIntervalIfEELj0ENS3_15CrashOnOverflowEEE","__ZN7WebCore17OffsetPolygonEdgeD1Ev","__ZN3WTF6VectorIN7WebCore16EdgeIntersectionELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore12FloatPolygonD2Ev","__ZN7WebCoreL21computeXIntersectionsERKNS_12FloatPolygonEfbRN3WTF6VectorINS_13ShapeIntervalIfEELj0ENS3_15CrashOnOverflowEEE","__ZN7WebCore17OffsetPolygonEdgeD0Ev","__ZNK7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE23checkInvariantsFromNodeEPNS5_4NodeEPi","__ZNK7WebCore12PolygonShape17buildDisplayPathsERNS_5Shape12DisplayPathsE","__ZN7WebCore12PolygonShapeD1Ev","__ZNSt3__127__insertion_sort_incompleteIRPFbRKN7WebCore16EdgeIntersectionES4_EPS2_EEbT0_S9_T_","__ZN7WebCore15PODRedBlackTreeINS_11PODIntervalIfPNS_16FloatPolygonEdgeEEEE10updateNodeEPNS5_4NodeE","__ZNK7WebCore17OffsetPolygonEdge7vertex1Ev"]

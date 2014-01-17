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
H_BASE = parentModule["_malloc"](224 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 224;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13ScriptProfileC1EN3WTF10PassRefPtrIN3JSC7ProfileEEE;
var __ZN7WebCore13ScriptProfileD1Ev;
/* memory initializer */ allocate([102,117,110,99,116,105,111,110,78,97,109,101,0,0,0,0,117,114,108,0,0,0,0,0,108,105,110,101,78,117,109,98,101,114,0,0,0,0,0,0,116,111,116,97,108,84,105,109,101,0,0,0,0,0,0,0,115,101,108,102,84,105,109,101,0,0,0,0,0,0,0,0,110,117,109,98,101,114,79,102,67,97,108,108,115,0,0,0,118,105,115,105,98,108,101,0,99,97,108,108,85,73,68,0,99,104,105,108,100,114,101,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore13ScriptProfileE=(H_BASE+208)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_8Profiler14CPUProfileNodeEEE=(H_BASE+128)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCoreL23buildInspectorObjectForEPKN3JSC11ProfileNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, d51 = +0, i52 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 296 | 0;
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
 i27 = i3 + 184 | 0;
 i28 = i3 + 192 | 0;
 i29 = i3 + 200 | 0;
 i30 = i3 + 208 | 0;
 i31 = i3 + 216 | 0;
 i32 = i3 + 224 | 0;
 i33 = i3 + 232 | 0;
 i34 = i3 + 240 | 0;
 i35 = i3 + 248 | 0;
 i36 = i3 + 256 | 0;
 i37 = i3 + 264 | 0;
 i38 = i3 + 272 | 0;
 i39 = i3 + 280 | 0;
 i40 = i3 + 288 | 0;
 i41 = i2 + 80 | 0;
 i42 = (HEAP32[i41 >> 2] | 0) + (HEAP32[i2 + 88 >> 2] << 2) | 0;
 i43 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i43);
 HEAP32[i43 >> 2] = H_BASE + 136;
 i44 = HEAP32[i41 >> 2] | 0;
 if ((i44 | 0) != (i42 | 0)) {
  i41 = i40 | 0;
  i45 = i43 + 12 | 0;
  i46 = i43 + 20 | 0;
  i47 = i43 + 16 | 0;
  i48 = i45;
  i49 = i45;
  i45 = i44;
  while (1) {
   __ZN7WebCoreL23buildInspectorObjectForEPKN3JSC11ProfileNodeE(i40, HEAP32[i45 >> 2] | 0);
   i44 = HEAP32[i41 >> 2] | 0;
   HEAP32[i41 >> 2] = 0;
   i50 = i44 | 0;
   i44 = HEAP32[i46 >> 2] | 0;
   if ((i44 | 0) == (HEAP32[i47 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i48, i44 + 1 | 0);
    HEAP32[(HEAP32[i49 >> 2] | 0) + (HEAP32[i46 >> 2] << 2) >> 2] = i50;
   } else {
    HEAP32[(HEAP32[i49 >> 2] | 0) + (i44 << 2) >> 2] = i50;
   }
   HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
   i45 = i45 + 4 | 0;
   if ((i45 | 0) == (i42 | 0)) {
    break;
   }
  }
 }
 __ZN9Inspector15InspectorObject6createEv(i39);
 i42 = HEAP32[i39 >> 2] | 0;
 i39 = i42 | 0;
 HEAP32[i38 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i37, i38);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i36, i2 + 8 | 0);
 i38 = i35 | 0;
 i45 = i36 | 0;
 i36 = HEAP32[i45 >> 2] | 0;
 HEAP32[i45 >> 2] = 0;
 HEAP32[i38 >> 2] = i36;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i39, i37, i35);
 i35 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i38 = i35 + 4 | 0;
   i36 = i38 | 0;
   i46 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   if ((i46 | 0) != 0) {
    HEAP32[i36 >> 2] = i46;
    break;
   }
   i46 = i38 - 4 | 0;
   if ((i46 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 4 >> 2] & 15](i46);
  }
 } while (0);
 i35 = HEAP32[i45 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i45 = i35 + 4 | 0;
   i46 = i45 | 0;
   i38 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
   if ((i38 | 0) != 0) {
    HEAP32[i46 >> 2] = i38;
    break;
   }
   i38 = i45 - 4 | 0;
   if ((i38 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 15](i38);
  }
 } while (0);
 i35 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i37 = i35 | 0;
   i38 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
   if ((i38 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    break;
   } else {
    HEAP32[i37 >> 2] = i38;
    break;
   }
  }
 } while (0);
 HEAP32[i34 >> 2] = H_BASE + 24;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i33, i34);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i32, i2 + 12 | 0);
 i34 = i31 | 0;
 i35 = i32 | 0;
 i32 = HEAP32[i35 >> 2] | 0;
 HEAP32[i35 >> 2] = 0;
 HEAP32[i34 >> 2] = i32;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i39, i33, i31);
 i31 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i34 = i31 + 4 | 0;
   i32 = i34 | 0;
   i38 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   if ((i38 | 0) != 0) {
    HEAP32[i32 >> 2] = i38;
    break;
   }
   i38 = i34 - 4 | 0;
   if ((i38 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 15](i38);
  }
 } while (0);
 i31 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i35 = i31 + 4 | 0;
   i38 = i35 | 0;
   i34 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
   if ((i34 | 0) != 0) {
    HEAP32[i38 >> 2] = i34;
    break;
   }
   i34 = i35 - 4 | 0;
   if ((i34 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 15](i34);
  }
 } while (0);
 i31 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i33 = i31 | 0;
   i34 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i34 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    break;
   } else {
    HEAP32[i33 >> 2] = i34;
    break;
   }
  }
 } while (0);
 i31 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i30 >> 2] = H_BASE + 32;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i29, i30);
 __ZN9Inspector19InspectorBasicValue6createEd(i28, +(i31 | 0));
 i31 = i27 | 0;
 i30 = i28 | 0;
 i28 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 HEAP32[i31 >> 2] = i28;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i39, i29, i27);
 i27 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i31 = i27 + 4 | 0;
   i28 = i31 | 0;
   i34 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
   if ((i34 | 0) != 0) {
    HEAP32[i28 >> 2] = i34;
    break;
   }
   i34 = i31 - 4 | 0;
   if ((i34 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 15](i34);
  }
 } while (0);
 i27 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i30 = i27 + 4 | 0;
   i34 = i30 | 0;
   i31 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i34 >> 2] = i31;
    break;
   }
   i31 = i30 - 4 | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 15](i31);
  }
 } while (0);
 i27 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i29 = i27 | 0;
   i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i29 >> 2] = i31;
    break;
   }
  }
 } while (0);
 d51 = +HEAPF64[i2 + 48 >> 3];
 HEAP32[i26 >> 2] = H_BASE + 48;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
 __ZN9Inspector19InspectorBasicValue6createEd(i24, d51);
 i26 = i23 | 0;
 i27 = i24 | 0;
 i24 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = 0;
 HEAP32[i26 >> 2] = i24;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i39, i25, i23);
 i23 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i26 = i23 + 4 | 0;
   i24 = i26 | 0;
   i31 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i24 >> 2] = i31;
    break;
   }
   i31 = i26 - 4 | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 15](i31);
  }
 } while (0);
 i23 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i27 = i23 + 4 | 0;
   i31 = i27 | 0;
   i26 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i31 >> 2] = i26;
    break;
   }
   i26 = i27 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 15](i26);
  }
 } while (0);
 i23 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i25 = i23 | 0;
   i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i25 >> 2] = i26;
    break;
   }
  }
 } while (0);
 d51 = +HEAPF64[i2 + 64 >> 3];
 HEAP32[i22 >> 2] = H_BASE + 64;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 __ZN9Inspector19InspectorBasicValue6createEd(i20, d51);
 i22 = i19 | 0;
 i23 = i20 | 0;
 i20 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i22 >> 2] = i20;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i39, i21, i19);
 i19 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i22 = i19 + 4 | 0;
   i20 = i22 | 0;
   i26 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i20 >> 2] = i26;
    break;
   }
   i26 = i22 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 15](i26);
  }
 } while (0);
 i19 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i23 = i19 + 4 | 0;
   i26 = i23 | 0;
   i22 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i26 >> 2] = i22;
    break;
   }
   i22 = i23 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 15](i22);
  }
 } while (0);
 i19 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i21 = i19 | 0;
   i22 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i21 >> 2] = i22;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i2 + 72 >> 2] | 0;
 HEAP32[i18 >> 2] = H_BASE + 80;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEd(i16, +(i19 | 0));
 i19 = i15 | 0;
 i18 = i16 | 0;
 i16 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i19 >> 2] = i16;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i39, i17, i15);
 i15 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i19 = i15 + 4 | 0;
   i16 = i19 | 0;
   i22 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i16 >> 2] = i22;
    break;
   }
   i22 = i19 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 15](i22);
  }
 } while (0);
 i15 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i18 = i15 + 4 | 0;
   i22 = i18 | 0;
   i19 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i22 >> 2] = i19;
    break;
   }
   i19 = i18 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 15](i19);
  }
 } while (0);
 i15 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i17 = i15 | 0;
   i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i17 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i15 = (HEAP8[i2 + 76 | 0] & 1) != 0;
 HEAP32[i14 >> 2] = H_BASE + 96;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
 __ZN9Inspector19InspectorBasicValue6createEb(i12, i15);
 i15 = i11 | 0;
 i14 = i12 | 0;
 i12 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i15 >> 2] = i12;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i39, i13, i11);
 i11 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i15 = i11 + 4 | 0;
   i12 = i15 | 0;
   i19 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i12 >> 2] = i19;
    break;
   }
   i19 = i15 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 15](i19);
  }
 } while (0);
 i11 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i14 = i11 + 4 | 0;
   i19 = i14 | 0;
   i15 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i19 >> 2] = i15;
    break;
   }
   i15 = i14 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 15](i15);
  }
 } while (0);
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i13 = i11 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i13 >> 2] = i15;
    break;
   }
  }
 } while (0);
 d51 = +((__ZN3JSC14CallIdentifier4Hash4hashERKS0_(i2 + 8 | 0) | 0) >>> 0 >>> 0);
 HEAP32[i10 >> 2] = H_BASE + 104;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, d51);
 i10 = i7 | 0;
 i2 = i8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i10 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i39, i9, i7);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 4 | 0;
   i8 = i10 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i8 >> 2] = i11;
    break;
   }
   i11 = i10 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
  }
 } while (0);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i11 = i2 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i11 >> 2] = i10;
    break;
   }
   i10 = i2 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = H_BASE + 112;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = i43;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i39, i4, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 4 | 0;
   i39 = i5 | 0;
   i43 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
   if ((i43 | 0) != 0) {
    HEAP32[i39 >> 2] = i43;
    break;
   }
   i43 = i5 - 4 | 0;
   if ((i43 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i43 >> 2] | 0) + 4 >> 2] & 15](i43);
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i43 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i43;
    break;
   }
  }
 } while (0);
 i6 = i42;
 if ((i42 | 0) == 0) {
  i52 = i1 | 0;
  HEAP32[i52 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i43 = i42 + 4 | 0;
 i4 = HEAP32[i43 >> 2] | 0;
 HEAP32[i43 >> 2] = i4 + 1;
 i43 = i42 + 4 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i43 >> 2] = i4;
  i52 = i1 | 0;
  HEAP32[i52 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i4 = i43 - 4 | 0;
 if ((i4 | 0) == 0) {
  i52 = i1 | 0;
  HEAP32[i52 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
 i52 = i1 | 0;
 HEAP32[i52 >> 2] = i6;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
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
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 15](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN3JSC14CallIdentifier4Hash4hashERKS0_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 if (i3 >>> 0 > 127 >>> 0) {
  i4 = i3 >>> 7 & 65535;
  i5 = i3 >>> 23 & 65535;
 } else {
  i3 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
  i4 = i3 & 65535;
  i5 = i3 >>> 16 & 65535;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i2 = HEAP32[i3 + 16 >> 2] | 0;
 if (i2 >>> 0 > 127 >>> 0) {
  i6 = i2 >>> 7 & 65535;
  i7 = i2 >>> 23 & 65535;
 } else {
  i2 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
  i6 = i2 & 65535;
  i7 = i2 >>> 16 & 65535;
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = (i4 & 65535) - 1640531527 | 0;
 i4 = (i5 & 65535) << 11 ^ i1 ^ i1 << 16;
 i1 = (i4 >>> 11) + i4 + (i6 & 65535) | 0;
 i6 = (i7 & 65535) << 11 ^ i1 ^ i1 << 16;
 i1 = i6 + (i2 & 65535) + (i6 >>> 11) | 0;
 i6 = i1 ^ i2 >>> 16 << 11 ^ i1 << 16;
 i1 = (i6 >>> 11) + i6 | 0;
 i6 = i1 << 3 ^ i1;
 i1 = (i6 >>> 5) + i6 | 0;
 i6 = i1 << 2 ^ i1;
 i1 = (i6 >>> 15) + i6 | 0;
 i6 = (i1 << 10 ^ i1) & 16777215;
 return ((i6 | 0) == 0 ? 8388608 : i6) | 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function runPostSets() {
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 4;
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
function __ZN7WebCore13ScriptProfileD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13ScriptProfile6createEN3WTF10PassRefPtrIN3JSC7ProfileEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  i2 = __ZN3WTF10fastMallocEj(12) | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 1;
  HEAP32[i2 >> 2] = H_BASE + 216;
  HEAP32[i2 + 8 >> 2] = i4;
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore13ScriptProfileD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
function __ZN7WebCore13ScriptProfileD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
function __ZN7WebCore13ScriptProfileC2EN3WTF10PassRefPtrIN3JSC7ProfileEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 return;
}
function __ZN7WebCore13ScriptProfileC1EN3WTF10PassRefPtrIN3JSC7ProfileEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 return;
}
function __ZNK7WebCore13ScriptProfile5titleEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE(i1 | 0, i2 | 0) | 0;
}
function __ZNK7WebCore13ScriptProfile27buildInspectorObjectForHeadEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL23buildInspectorObjectForEPKN3JSC11ProfileNodeE(i1, HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 12 >> 2] | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE(i1 | 0, i2 | 0);
}
function iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_8Profiler14CPUProfileNodeEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue9asBooleanEPb(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPm(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPl(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPj(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPi(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPd(i1 | 0, i2 | 0) | 0;
}
function vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector18InspectorArrayBase7asArrayEv(i1 | 0, i2 | 0);
}
function vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector14InspectorValue8asObjectEv(i1 | 0, i2 | 0);
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_8Profiler14CPUProfileNodeEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
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
function __ZNK7WebCore13ScriptProfile35buildInspectorObjectForBottomUpHeadEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZNK7WebCore13ScriptProfile4headEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 12 >> 2] | 0;
}
function __ZNK7WebCore13ScriptProfile3uidEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 16 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore13ScriptProfile8idleTimeEv(i1) {
 i1 = i1 | 0;
 return +(+0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore13ScriptProfileD2Ev,b0,__ZN7WebCore13ScriptProfileD0Ev,b0,__ZN9Inspector11TypeBuilder5ArrayINS0_8Profiler14CPUProfileNodeEED0Ev,b0,__ZN9Inspector11TypeBuilder5ArrayINS0_8Profiler14CPUProfileNodeEED1Ev,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper,b1,vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper,b1,vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper,b1,__ZN7WebCore13ScriptProfileC2EN3WTF10PassRefPtrIN3JSC7ProfileEEE,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4,iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper,b4,iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper,b4,iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper,b4,iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper,b4,iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper,b4,iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper,b4,iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper,b4,iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper,b4,iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper,b4,iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore13ScriptProfile27buildInspectorObjectForHeadEv","__ZN7WebCoreL23buildInspectorObjectForEPKN3JSC11ProfileNodeE","__ZN7WebCore13ScriptProfileC2EN3WTF10PassRefPtrIN3JSC7ProfileEEE","__ZNK7WebCore13ScriptProfile4headEv","__ZNK7WebCore13ScriptProfile5titleEv","__ZNK7WebCore13ScriptProfile35buildInspectorObjectForBottomUpHeadEv","_memset","_memcpy","__ZN3JSC14CallIdentifier4Hash4hashERKS0_","__ZNK7WebCore13ScriptProfile8idleTimeEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN9Inspector11TypeBuilder5ArrayINS0_8Profiler14CPUProfileNodeEED0Ev","__ZN7WebCore13ScriptProfileD2Ev","__ZN7WebCore13ScriptProfile6createEN3WTF10PassRefPtrIN3JSC7ProfileEEE","__ZN7WebCore13ScriptProfileD0Ev","__ZNK7WebCore13ScriptProfile3uidEv","__ZN9Inspector11TypeBuilder5ArrayINS0_8Profiler14CPUProfileNodeEED1Ev"]

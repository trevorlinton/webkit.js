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
H_BASE = parentModule["_malloc"](160 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 160;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore27SerializerMarkupAccumulatorC1ERNS_14PageSerializerERNS_8DocumentEPN3WTF6VectorIPNS_4NodeELj0ENS5_15CrashOnOverflowEEE;
var __ZN7WebCore27SerializerMarkupAccumulatorD1Ev;
var __ZN7WebCore14PageSerializer8ResourceC1Ev;
var __ZN7WebCore14PageSerializer8ResourceC1ERKNS_3URLERKN3WTF6StringENS5_10PassRefPtrINS_12SharedBufferEEE;
var __ZN7WebCore14PageSerializerC1EPN3WTF6VectorINS0_8ResourceELj0ENS1_15CrashOnOverflowEEE;
/* memory initializer */ allocate([119,121,99,105,119,121,103,58,47,47,102,114,97,109,101,47,0,0,0,0,0,0,0,0,116,101,120,116,47,99,115,115,0,0,0,0,0,0,0,0,10,10,0,0,0,0,0,0,34,62,0,0,0,0,0,0,60,109,101,116,97,32,99,104,97,114,115,101,116,61,34,0,34,63,62,0,0,0,0,0,34,32,101,110,99,111,100,105,110,103,61,34,0,0,0,0,60,63,120,109,108,32,118,101,114,115,105,111,110,61,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames11noscriptTagE=env.__ZN7WebCore9HTMLNames11noscriptTagE|0;
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames7metaTagE=env.__ZN7WebCore9HTMLNames7metaTagE|0;
  var __ZN7WebCore9HTMLNames8dataAttrE=env.__ZN7WebCore9HTMLNames8dataAttrE|0;
  var __ZN7WebCore9HTMLNames7srcAttrE=env.__ZN7WebCore9HTMLNames7srcAttrE|0;
  var __ZN7WebCore9HTMLNames7headTagE=env.__ZN7WebCore9HTMLNames7headTagE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames7linkTagE=env.__ZN7WebCore9HTMLNames7linkTagE|0;
  var __ZN7WebCore9HTMLNames8hrefAttrE=env.__ZN7WebCore9HTMLNames8hrefAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore27SerializerMarkupAccumulatorE=(H_BASE+120)|0;
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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _llvm_trap=env._llvm_trap;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14PageSerializer14serializeFrameEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 432 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 72 | 0;
 i8 = i3 + 120 | 0;
 i9 = i3 + 136 | 0;
 i10 = i3 + 192 | 0;
 i11 = i3 + 200 | 0;
 i12 = i3 + 208 | 0;
 i13 = i3 + 216 | 0;
 i14 = i3 + 224 | 0;
 i15 = i3 + 280 | 0;
 i16 = i3 + 288 | 0;
 i17 = i3 + 336 | 0;
 i18 = i3 + 384 | 0;
 i19 = HEAP32[i2 + 456 >> 2] | 0;
 i20 = i6 | 0;
 i21 = HEAP32[i19 + 356 >> 2] | 0;
 HEAP32[i20 >> 2] = i21;
 if ((i21 | 0) == 0) {
  i22 = 0;
  i23 = i6 + 4 | 0;
 } else {
  i24 = i21 | 0;
  HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
  i24 = i6 + 4 | 0;
  i22 = HEAP8[i24] & -2;
  i23 = i24;
 }
 i24 = i19 + 360 | 0;
 i21 = HEAP8[i24] & 1;
 i25 = i22 | i21;
 HEAP8[i23] = i25;
 HEAP8[i23] = i25 & -3 | HEAP8[i24] & 2;
 i24 = i6 + 8 | 0;
 HEAP32[i24 >> 2] = HEAP32[i19 + 364 >> 2];
 i25 = i6 + 12 | 0;
 HEAP32[i25 >> 2] = HEAP32[i19 + 368 >> 2];
 i22 = i6 + 16 | 0;
 HEAP32[i22 >> 2] = HEAP32[i19 + 372 >> 2];
 i26 = i6 + 20 | 0;
 HEAP32[i26 >> 2] = HEAP32[i19 + 376 >> 2];
 i27 = i6 + 24 | 0;
 HEAP32[i27 >> 2] = HEAP32[i19 + 380 >> 2];
 i28 = i6 + 28 | 0;
 HEAP32[i28 >> 2] = HEAP32[i19 + 384 >> 2];
 i29 = i6 + 32 | 0;
 HEAP32[i29 >> 2] = HEAP32[i19 + 388 >> 2];
 i30 = i6 + 36 | 0;
 HEAP32[i30 >> 2] = HEAP32[i19 + 392 >> 2];
 i31 = i6 + 40 | 0;
 HEAP32[i31 >> 2] = HEAP32[i19 + 396 >> 2];
 i32 = i6 + 44 | 0;
 HEAP32[i32 >> 2] = HEAP32[i19 + 400 >> 2];
 if (i21 << 24 >> 24 == 0) {
  i33 = 6;
 } else {
  if (__ZNK7WebCore3URL10isBlankURLEv(i6) | 0) {
   i33 = 6;
  }
 }
 do {
  if ((i33 | 0) == 6) {
   __ZN7WebCore14PageSerializer16urlForBlankFrameEPNS_5FrameE(i7, i1, i2);
   i21 = i7 | 0;
   i34 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i35 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = i34;
   do {
    if ((i35 | 0) != 0) {
     i34 = i35 | 0;
     i36 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
     if ((i36 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i35);
      break;
     } else {
      HEAP32[i34 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i35 = HEAP8[i7 + 4 | 0] | 0;
   HEAP8[i23] = HEAP8[i23] & -4 | i35 & 1 | i35 & 2;
   HEAP32[i24 >> 2] = HEAP32[i7 + 8 >> 2];
   HEAP32[i25 >> 2] = HEAP32[i7 + 12 >> 2];
   HEAP32[i22 >> 2] = HEAP32[i7 + 16 >> 2];
   HEAP32[i26 >> 2] = HEAP32[i7 + 20 >> 2];
   HEAP32[i27 >> 2] = HEAP32[i7 + 24 >> 2];
   HEAP32[i28 >> 2] = HEAP32[i7 + 28 >> 2];
   HEAP32[i29 >> 2] = HEAP32[i7 + 32 >> 2];
   HEAP32[i30 >> 2] = HEAP32[i7 + 36 >> 2];
   HEAP32[i31 >> 2] = HEAP32[i7 + 40 >> 2];
   HEAP32[i32 >> 2] = HEAP32[i7 + 44 >> 2];
   i35 = HEAP32[i21 >> 2] | 0;
   if ((i35 | 0) == 0) {
    break;
   }
   i36 = i35 | 0;
   i34 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
   if ((i34 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    break;
   } else {
    HEAP32[i36 >> 2] = i34;
    break;
   }
  }
 } while (0);
 i7 = i1 + 4 | 0;
 i34 = HEAP32[i7 >> 2] | 0;
 L20 : do {
  if ((i34 | 0) == 0) {
   i33 = 23;
  } else {
   i36 = HEAP32[i1 + 12 >> 2] | 0;
   i35 = HEAP32[i20 >> 2] | 0;
   i37 = HEAP32[i35 + 16 >> 2] | 0;
   if (i37 >>> 0 > 127 >>> 0) {
    i38 = i37 >>> 7;
   } else {
    i38 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i35) | 0;
   }
   i35 = (i38 >>> 23) + ~i38 | 0;
   i37 = i35 << 12 ^ i35;
   i35 = i37 >>> 7 ^ i37;
   i37 = i35 << 2 ^ i35;
   i35 = i37 >>> 20 ^ i37 | 1;
   i37 = i38;
   i39 = 0;
   while (1) {
    i40 = i37 & i36;
    i41 = i34 + (i40 << 2) | 0;
    i42 = HEAP32[i41 >> 2] | 0;
    i43 = i42;
    if ((i43 | 0) == 0) {
     i33 = 23;
     break L20;
    } else if ((i43 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(HEAP32[i42 >> 2] | 0, HEAP32[i20 >> 2] | 0) | 0) {
      break;
     }
    }
    i42 = (i39 | 0) == 0 ? i35 : i39;
    i37 = i42 + i40 | 0;
    i39 = i42;
   }
   if ((i41 | 0) == 0) {
    i33 = 23;
   }
  }
 } while (0);
 do {
  if ((i33 | 0) == 23) {
   i41 = i8 | 0;
   HEAP32[i41 >> 2] = 0;
   i34 = i8 + 4 | 0;
   HEAP32[i34 >> 2] = 0;
   i38 = i8 + 8 | 0;
   HEAP32[i38 >> 2] = 0;
   __ZN7WebCore27SerializerMarkupAccumulatorC2ERNS_14PageSerializerERNS_8DocumentEPN3WTF6VectorIPNS_4NodeELj0ENS5_15CrashOnOverflowEEE(i9, i1, i19, i8);
   __ZNK7WebCore8Document8encodingEv(i11, i19);
   __ZN7WebCore12TextEncodingC1ERKN3WTF6StringE(i10, i11);
   i39 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i39 | 0) != 0) {
     i37 = i39 | 0;
     i35 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
     if ((i35 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i39);
      break;
     } else {
      HEAP32[i37 >> 2] = i35;
      break;
     }
    }
   } while (0);
   i39 = i9 | 0;
   do {
    if ((HEAP32[i10 >> 2] | 0) != 0) {
     __ZN7WebCore17MarkupAccumulator14serializeNodesERNS_4NodeEPS1_NS_13EChildrenOnlyEPN3WTF6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEE(i12, i39, HEAP32[i19 + 692 >> 2] | 0, 0, 0, 0);
     i35 = i12 | 0;
     i37 = HEAP32[i35 >> 2] | 0;
     do {
      if ((i37 | 0) == 0) {
       i44 = 0;
       i45 = 0;
      } else {
       if ((HEAP32[i37 + 16 >> 2] & 32 | 0) == 0) {
        i46 = HEAP32[i37 + 8 >> 2] | 0;
        i47 = i37;
       } else {
        i36 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i37) | 0;
        i46 = i36;
        i47 = HEAP32[i35 >> 2] | 0;
       }
       if ((i47 | 0) == 0) {
        i44 = 0;
        i45 = i46;
        break;
       }
       i44 = HEAP32[i47 + 4 >> 2] | 0;
       i45 = i46;
      }
     } while (0);
     __ZNK7WebCore12TextEncoding6encodeEPKtjNS_19UnencodableHandlingE(i13, i10, i45, i44, 1);
     i37 = HEAP32[i1 >> 2] | 0;
     __ZNK7WebCore8Document17suggestedMIMETypeEv(i15, i19);
     i36 = i13 | 0;
     i21 = HEAP32[i36 >> 2] | 0;
     if ((i21 | 0) == 0) {
      i48 = 0;
      i49 = 0;
     } else {
      i48 = HEAP32[i21 + 4 >> 2] | 0;
      i49 = i21 + 8 | 0;
     }
     i21 = __ZN3WTF10fastMallocEj(40) | 0;
     __ZN7WebCore12SharedBufferC1EPKcj(i21, i49, i48);
     i42 = i14 | 0;
     i40 = HEAP32[i20 >> 2] | 0;
     HEAP32[i42 >> 2] = i40;
     if ((i40 | 0) != 0) {
      i43 = i40 | 0;
      HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
     }
     i43 = HEAP8[i23] | 0;
     i40 = i14 + 4 | 0;
     HEAP8[i40] = HEAP8[i40] & -4 | i43 & 1 | i43 & 2;
     i43 = i14 + 8 | 0;
     HEAP32[i43 >> 2] = HEAP32[i24 >> 2];
     i50 = i14 + 12 | 0;
     HEAP32[i50 >> 2] = HEAP32[i25 >> 2];
     i51 = i14 + 16 | 0;
     HEAP32[i51 >> 2] = HEAP32[i22 >> 2];
     i52 = i14 + 20 | 0;
     HEAP32[i52 >> 2] = HEAP32[i26 >> 2];
     i53 = i14 + 24 | 0;
     HEAP32[i53 >> 2] = HEAP32[i27 >> 2];
     i54 = i14 + 28 | 0;
     HEAP32[i54 >> 2] = HEAP32[i28 >> 2];
     i55 = i14 + 32 | 0;
     HEAP32[i55 >> 2] = HEAP32[i29 >> 2];
     i56 = i14 + 36 | 0;
     HEAP32[i56 >> 2] = HEAP32[i30 >> 2];
     i57 = i14 + 40 | 0;
     HEAP32[i57 >> 2] = HEAP32[i31 >> 2];
     i58 = i14 + 44 | 0;
     HEAP32[i58 >> 2] = HEAP32[i32 >> 2];
     i59 = i14 + 48 | 0;
     i60 = i15 | 0;
     i61 = HEAP32[i60 >> 2] | 0;
     HEAP32[i59 >> 2] = i61;
     if ((i61 | 0) != 0) {
      i62 = i61 | 0;
      HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 2;
     }
     i62 = i14 + 52 | 0;
     HEAP32[i62 >> 2] = i21;
     i21 = i37 + 8 | 0;
     i61 = HEAP32[i21 >> 2] | 0;
     if ((i61 | 0) == (HEAP32[i37 + 4 >> 2] | 0)) {
      __ZN3WTF6VectorIN7WebCore14PageSerializer8ResourceELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i37, i14);
     } else {
      i63 = HEAP32[i37 >> 2] | 0;
      i37 = HEAP32[i42 >> 2] | 0;
      HEAP32[i42 >> 2] = 0;
      HEAP32[i63 + (i61 * 56 & -1) >> 2] = i37;
      i37 = i63 + (i61 * 56 & -1) + 4 | 0;
      i64 = HEAP8[i37] & -2 | HEAP8[i40] & 1;
      HEAP8[i37] = i64;
      HEAP8[i37] = i64 & -3 | HEAP8[i40] & 2;
      HEAP32[i63 + (i61 * 56 & -1) + 8 >> 2] = HEAP32[i43 >> 2];
      HEAP32[i63 + (i61 * 56 & -1) + 12 >> 2] = HEAP32[i50 >> 2];
      HEAP32[i63 + (i61 * 56 & -1) + 16 >> 2] = HEAP32[i51 >> 2];
      HEAP32[i63 + (i61 * 56 & -1) + 20 >> 2] = HEAP32[i52 >> 2];
      HEAP32[i63 + (i61 * 56 & -1) + 24 >> 2] = HEAP32[i53 >> 2];
      HEAP32[i63 + (i61 * 56 & -1) + 28 >> 2] = HEAP32[i54 >> 2];
      HEAP32[i63 + (i61 * 56 & -1) + 32 >> 2] = HEAP32[i55 >> 2];
      HEAP32[i63 + (i61 * 56 & -1) + 36 >> 2] = HEAP32[i56 >> 2];
      HEAP32[i63 + (i61 * 56 & -1) + 40 >> 2] = HEAP32[i57 >> 2];
      HEAP32[i63 + (i61 * 56 & -1) + 44 >> 2] = HEAP32[i58 >> 2];
      i58 = HEAP32[i59 >> 2] | 0;
      HEAP32[i59 >> 2] = 0;
      HEAP32[i63 + (i61 * 56 & -1) + 48 >> 2] = i58;
      i58 = HEAP32[i62 >> 2] | 0;
      HEAP32[i62 >> 2] = 0;
      HEAP32[i63 + (i61 * 56 & -1) + 52 >> 2] = i58;
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     }
     i21 = HEAP32[i62 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i62 = i21 | 0;
       i58 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
       if ((i58 | 0) == 0) {
        __ZN7WebCore12SharedBufferD1Ev(i21);
        __ZN3WTF8fastFreeEPv(i21);
        break;
       } else {
        HEAP32[i62 >> 2] = i58;
        break;
       }
      }
     } while (0);
     i21 = HEAP32[i59 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i58 = i21 | 0;
       i62 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
       if ((i62 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i21);
        break;
       } else {
        HEAP32[i58 >> 2] = i62;
        break;
       }
      }
     } while (0);
     i21 = HEAP32[i42 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i59 = i21 | 0;
       i62 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
       if ((i62 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i21);
        break;
       } else {
        HEAP32[i59 >> 2] = i62;
        break;
       }
      }
     } while (0);
     i21 = HEAP32[i60 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i42 = i21 | 0;
       i62 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
       if ((i62 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i21);
        break;
       } else {
        HEAP32[i42 >> 2] = i62;
        break;
       }
      }
     } while (0);
     HEAP32[i5 >> 2] = HEAP32[i1 + 32 >> 2];
     __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E3addINS_21ListHashSetTranslatorIS8_EERKS3_PNS_24ListHashSetNodeAllocatorIS3_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS5_S5_S6_S9_SB_SB_EEEEOT0_OT1_(i4, i7 | 0, i6, i5);
     if ((HEAP8[i4 + 8 | 0] & 1) != 0) {
      i21 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
      i60 = i1 + 28 | 0;
      HEAP32[i21 + 48 >> 2] = HEAP32[i60 >> 2];
      HEAP32[i21 + 52 >> 2] = 0;
      i62 = HEAP32[i60 >> 2] | 0;
      if ((i62 | 0) == 0) {
       HEAP32[i1 + 24 >> 2] = i21;
      } else {
       HEAP32[i62 + 52 >> 2] = i21;
      }
      HEAP32[i60 >> 2] = i21;
     }
     if ((HEAP32[i38 >> 2] | 0) != 0) {
      i21 = i17 | 0;
      i60 = i18 | 0;
      i62 = i16 | 0;
      i42 = HEAP32[i41 >> 2] | 0;
      while (1) {
       i59 = HEAP32[i42 >> 2] | 0;
       i58 = i59 + 12 | 0;
       i61 = HEAP32[i58 >> 2] | 0;
       L98 : do {
        if ((i61 & 4 | 0) != 0) {
         if ((i61 & 8 | 0) == 0) {
          i65 = i61;
         } else {
          i63 = HEAP32[i59 + 48 >> 2] | 0;
          if ((i63 | 0) == 0) {
           i66 = 0;
          } else {
           i66 = HEAP32[i63 + 8 >> 2] | 0;
          }
          __ZN7WebCore14PageSerializer30retrieveResourcesForPropertiesEPKNS_15StylePropertiesEPNS_8DocumentE(i1, i66, i19);
          i65 = HEAP32[i58 >> 2] | 0;
         }
         i63 = (i65 & 16 | 0) == 0;
         i57 = HEAP32[i59 + 44 >> 2] | 0;
         do {
          if (!i63) {
           if ((HEAP32[i57 + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
            break;
           }
           __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i16, i19, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i59, __ZN7WebCore9HTMLNames7srcAttrE) | 0);
           i56 = i59 + 32 | 0;
           if ((HEAP32[i58 >> 2] & 2048 | 0) == 0) {
            i67 = i56 | 0;
           } else {
            i67 = HEAP32[i56 >> 2] | 0;
           }
           __ZN7WebCore14PageSerializer19addImageToResourcesEPNS_11CachedImageEPNS_13RenderElementERKNS_3URLE(i1, HEAP32[i59 + 64 >> 2] | 0, HEAP32[i67 >> 2] | 0, i16);
           i56 = HEAP32[i62 >> 2] | 0;
           if ((i56 | 0) == 0) {
            break L98;
           }
           i55 = i56 | 0;
           i54 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
           if ((i54 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i56);
            break L98;
           } else {
            HEAP32[i55 >> 2] = i54;
            break L98;
           }
          }
         } while (0);
         i54 = HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0;
         do {
          if ((i57 | 0) != (i54 | 0)) {
           i55 = HEAP32[i57 + 12 >> 2] | 0;
           if ((i55 | 0) == (HEAP32[i54 + 12 >> 2] | 0)) {
            if ((HEAP32[i57 + 16 >> 2] | 0) == (HEAP32[i54 + 16 >> 2] | 0)) {
             break;
            }
           }
           if (i63) {
            break L98;
           }
           if ((i55 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
            break L98;
           }
           i55 = HEAP32[i59 + 68 >> 2] | 0;
           if ((i55 | 0) == 0) {
            break L98;
           }
           HEAP32[i60 >> 2] = 0;
           __ZN7WebCore3URL10invalidateEv(i18);
           __ZN7WebCore14PageSerializer22serializeCSSStyleSheetEPNS_13CSSStyleSheetERKNS_3URLE(i1, i55, i18);
           i55 = HEAP32[i60 >> 2] | 0;
           if ((i55 | 0) == 0) {
            break L98;
           }
           i56 = i55 | 0;
           i53 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
           if ((i53 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i55);
            break L98;
           } else {
            HEAP32[i56 >> 2] = i53;
            break L98;
           }
          }
         } while (0);
         i63 = HEAP32[i59 + 196 >> 2] | 0;
         if ((i63 | 0) == 0) {
          break;
         }
         __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i17, i19, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i59, __ZN7WebCore9HTMLNames8hrefAttrE) | 0);
         __ZN7WebCore14PageSerializer22serializeCSSStyleSheetEPNS_13CSSStyleSheetERKNS_3URLE(i1, i63, i17);
         i63 = HEAP32[i21 >> 2] | 0;
         if ((i63 | 0) == 0) {
          break;
         }
         i54 = i63 | 0;
         i57 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
         if ((i57 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i63);
          break;
         } else {
          HEAP32[i54 >> 2] = i57;
          break;
         }
        }
       } while (0);
       i42 = i42 + 4 | 0;
       if ((i42 | 0) == ((HEAP32[i41 >> 2] | 0) + (HEAP32[i38 >> 2] << 2) | 0)) {
        break;
       }
      }
     }
     i42 = HEAP32[i2 + 64 >> 2] | 0;
     if ((i42 | 0) != 0) {
      i21 = i42;
      while (1) {
       __ZN7WebCore14PageSerializer14serializeFrameEPNS_5FrameE(i1, i21);
       i21 = HEAP32[i21 + 56 >> 2] | 0;
       if ((i21 | 0) == 0) {
        break;
       }
      }
     }
     i21 = HEAP32[i36 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i42 = i21 | 0;
       i60 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
       if ((i60 | 0) == 0) {
        __ZN3WTF8fastFreeEPv(i21);
        break;
       } else {
        HEAP32[i42 >> 2] = i60;
        break;
       }
      }
     } while (0);
     i21 = HEAP32[i35 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     i36 = i21 | 0;
     i60 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
     if ((i60 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i36 >> 2] = i60;
      break;
     }
    }
   } while (0);
   __ZN7WebCore17MarkupAccumulatorD2Ev(i39);
   if ((HEAP32[i38 >> 2] | 0) != 0) {
    HEAP32[i38 >> 2] = 0;
   }
   i60 = HEAP32[i41 >> 2] | 0;
   if ((i60 | 0) == 0) {
    break;
   }
   HEAP32[i41 >> 2] = 0;
   HEAP32[i34 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i60);
  }
 } while (0);
 i1 = HEAP32[i20 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i20 = i1 | 0;
 i2 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i20 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14PageSerializer22serializeCSSStyleSheetEPNS_13CSSStyleSheetERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 104 | 0;
 i11 = i4 + 112 | 0;
 i12 = i4 + 120 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 184 | 0;
 HEAP32[i7 >> 2] = 0;
 i15 = i7 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i7 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP8[i7 + 12 | 0] = 1;
 HEAP32[i7 + 16 >> 2] = 0;
 HEAP32[i7 + 20 >> 2] = 0;
 if ((__ZNK7WebCore13CSSStyleSheet6lengthEv(i2) | 0) != 0) {
  i17 = i8 | 0;
  i18 = i10 | 0;
  i19 = i1 + 4 | 0;
  i20 = i9 | 0;
  i21 = i1 + 12 | 0;
  i22 = 0;
  while (1) {
   i23 = __ZN7WebCore13CSSStyleSheet4itemEj(i2, i22) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 12 >> 2] & 7](i8, i23);
   i24 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     if ((HEAP32[i24 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i7, i8);
     if (i22 >>> 0 >= ((__ZNK7WebCore13CSSStyleSheet6lengthEv(i2) | 0) - 1 | 0) >>> 0) {
      break;
     }
     __ZN3WTF13StringBuilder6appendEPKhj(i7, H_BASE + 48 | 0, 2);
    }
   } while (0);
   i24 = __ZNK7WebCore13CSSStyleSheet13ownerDocumentEv(i2) | 0;
   i25 = i23;
   L10 : do {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 8 >> 2] & 1](i23) | 0) == 3) {
     i26 = i23;
     __ZNK7WebCore13CSSImportRule4hrefEv(i10, i26);
     __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i9, i24, i10);
     i27 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i27 | 0) != 0) {
       i28 = i27 | 0;
       i29 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
       if ((i29 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i27);
        break;
       } else {
        HEAP32[i28 >> 2] = i29;
        break;
       }
      }
     } while (0);
     i27 = HEAP32[i19 >> 2] | 0;
     L18 : do {
      if ((i27 | 0) != 0) {
       i29 = HEAP32[i21 >> 2] | 0;
       i28 = HEAP32[i20 >> 2] | 0;
       i30 = HEAP32[i28 + 16 >> 2] | 0;
       if (i30 >>> 0 > 127 >>> 0) {
        i31 = i30 >>> 7;
       } else {
        i31 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i28) | 0;
       }
       i28 = (i31 >>> 23) + ~i31 | 0;
       i30 = i28 << 12 ^ i28;
       i28 = i30 >>> 7 ^ i30;
       i30 = i28 << 2 ^ i28;
       i28 = i30 >>> 20 ^ i30 | 1;
       i30 = i31;
       i32 = 0;
       while (1) {
        i33 = i30 & i29;
        i34 = i27 + (i33 << 2) | 0;
        i35 = HEAP32[i34 >> 2] | 0;
        i36 = i35;
        if ((i36 | 0) == 0) {
         break L18;
        } else if ((i36 | 0) != (-1 | 0)) {
         if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(HEAP32[i35 >> 2] | 0, HEAP32[i20 >> 2] | 0) | 0) {
          break;
         }
        }
        i35 = (i32 | 0) == 0 ? i28 : i32;
        i30 = i35 + i33 | 0;
        i32 = i35;
       }
       if ((i34 | 0) == 0) {
        break;
       }
       i32 = HEAP32[i20 >> 2] | 0;
       if ((i32 | 0) == 0) {
        break L10;
       }
       i30 = i32 | 0;
       i28 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
       if ((i28 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i32);
        break L10;
       } else {
        HEAP32[i30 >> 2] = i28;
        break L10;
       }
      }
     } while (0);
     __ZN7WebCore14PageSerializer22serializeCSSStyleSheetEPNS_13CSSStyleSheetERKNS_3URLE(i1, __ZNK7WebCore13CSSImportRule10styleSheetEv(i26) | 0, i9);
     i27 = HEAP32[i20 >> 2] | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     i28 = i27 | 0;
     i30 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i28 >> 2] = i30;
      break;
     }
    } else {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 8 >> 2] & 1](i23) | 0) == 5) {
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 8 >> 2] & 1](i23) | 0) != 1) {
      break;
     }
     __ZN7WebCore14PageSerializer30retrieveResourcesForPropertiesEPKNS_15StylePropertiesEPNS_8DocumentE(i1, HEAP32[(HEAP32[i23 + 16 >> 2] | 0) + 8 >> 2] | 0, i24);
    }
   } while (0);
   i24 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i23 = i24 | 0;
     i25 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i23 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i22 = i22 + 1 | 0;
   if (i22 >>> 0 >= (__ZNK7WebCore13CSSStyleSheet6lengthEv(i2) | 0) >>> 0) {
    break;
   }
  }
 }
 i22 = i3 + 4 | 0;
 L51 : do {
  if ((HEAP8[i22] & 1) != 0) {
   i17 = i1 + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   L53 : do {
    if ((i20 | 0) != 0) {
     i9 = HEAP32[i1 + 12 >> 2] | 0;
     i34 = i3 | 0;
     i31 = HEAP32[i34 >> 2] | 0;
     i21 = HEAP32[i31 + 16 >> 2] | 0;
     if (i21 >>> 0 > 127 >>> 0) {
      i37 = i21 >>> 7;
     } else {
      i37 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i31) | 0;
     }
     i31 = (i37 >>> 23) + ~i37 | 0;
     i21 = i31 << 12 ^ i31;
     i31 = i21 >>> 7 ^ i21;
     i21 = i31 << 2 ^ i31;
     i31 = i21 >>> 20 ^ i21 | 1;
     i21 = i37;
     i19 = 0;
     while (1) {
      i18 = i21 & i9;
      i38 = i20 + (i18 << 2) | 0;
      i10 = HEAP32[i38 >> 2] | 0;
      i8 = i10;
      if ((i8 | 0) == 0) {
       break L53;
      } else if ((i8 | 0) != (-1 | 0)) {
       if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(HEAP32[i10 >> 2] | 0, HEAP32[i34 >> 2] | 0) | 0) {
        break;
       }
      }
      i10 = (i19 | 0) == 0 ? i31 : i19;
      i21 = i10 + i18 | 0;
      i19 = i10;
     }
     if ((i38 | 0) != 0) {
      break L51;
     }
    }
   } while (0);
   __ZN7WebCore12TextEncodingC1ERKN3WTF6StringE(i11, (HEAP32[i2 + 8 >> 2] | 0) + 112 | 0);
   __ZN3WTF13StringBuilder11shrinkToFitEv(i7);
   i20 = HEAP32[i15 >> 2] | 0;
   if ((i20 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i7);
    i19 = HEAP32[i15 >> 2] | 0;
    if ((i19 | 0) == 0) {
     i39 = 0;
     i40 = 1;
     i41 = 0;
     i42 = 0;
    } else {
     i43 = i19;
     i44 = 49;
    }
   } else {
    i43 = i20;
    i44 = 49;
   }
   if ((i44 | 0) == 49) {
    i20 = i43 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
    if ((HEAP32[i43 + 16 >> 2] & 32 | 0) == 0) {
     i45 = HEAP32[i43 + 8 >> 2] | 0;
    } else {
     i45 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i43) | 0;
    }
    i39 = HEAP32[i43 + 4 >> 2] | 0;
    i40 = (i43 | 0) == 0;
    i41 = i43;
    i42 = i45;
   }
   __ZNK7WebCore12TextEncoding6encodeEPKtjNS_19UnencodableHandlingE(i12, i11, i42, i39, 1);
   i20 = HEAP32[i1 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i14, H_BASE + 32 | 0);
   i19 = i12 | 0;
   i21 = HEAP32[i19 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i46 = 0;
    i47 = 0;
   } else {
    i46 = HEAP32[i21 + 4 >> 2] | 0;
    i47 = i21 + 8 | 0;
   }
   i21 = __ZN3WTF10fastMallocEj(40) | 0;
   __ZN7WebCore12SharedBufferC1EPKcj(i21, i47, i46);
   i31 = i13 | 0;
   i34 = HEAP32[i3 >> 2] | 0;
   HEAP32[i31 >> 2] = i34;
   if ((i34 | 0) != 0) {
    i9 = i34 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = HEAP8[i22] | 0;
   i34 = i13 + 4 | 0;
   HEAP8[i34] = HEAP8[i34] & -4 | i9 & 1 | i9 & 2;
   i9 = i13 + 8 | 0;
   HEAP32[i9 >> 2] = HEAP32[i3 + 8 >> 2];
   i26 = i13 + 12 | 0;
   HEAP32[i26 >> 2] = HEAP32[i3 + 12 >> 2];
   i10 = i13 + 16 | 0;
   HEAP32[i10 >> 2] = HEAP32[i3 + 16 >> 2];
   i18 = i13 + 20 | 0;
   HEAP32[i18 >> 2] = HEAP32[i3 + 20 >> 2];
   i8 = i13 + 24 | 0;
   HEAP32[i8 >> 2] = HEAP32[i3 + 24 >> 2];
   i24 = i13 + 28 | 0;
   HEAP32[i24 >> 2] = HEAP32[i3 + 28 >> 2];
   i25 = i13 + 32 | 0;
   HEAP32[i25 >> 2] = HEAP32[i3 + 32 >> 2];
   i23 = i13 + 36 | 0;
   HEAP32[i23 >> 2] = HEAP32[i3 + 36 >> 2];
   i30 = i13 + 40 | 0;
   HEAP32[i30 >> 2] = HEAP32[i3 + 40 >> 2];
   i28 = i13 + 44 | 0;
   HEAP32[i28 >> 2] = HEAP32[i3 + 44 >> 2];
   i27 = i13 + 48 | 0;
   i32 = i14 | 0;
   i29 = HEAP32[i32 >> 2] | 0;
   HEAP32[i27 >> 2] = i29;
   if ((i29 | 0) != 0) {
    i35 = i29 | 0;
    HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
   }
   i35 = i13 + 52 | 0;
   HEAP32[i35 >> 2] = i21;
   i21 = i20 + 8 | 0;
   i29 = HEAP32[i21 >> 2] | 0;
   if ((i29 | 0) == (HEAP32[i20 + 4 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore14PageSerializer8ResourceELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i20, i13);
   } else {
    i33 = HEAP32[i20 >> 2] | 0;
    i20 = HEAP32[i31 >> 2] | 0;
    HEAP32[i31 >> 2] = 0;
    HEAP32[i33 + (i29 * 56 & -1) >> 2] = i20;
    i20 = i33 + (i29 * 56 & -1) + 4 | 0;
    i36 = HEAP8[i20] & -2 | HEAP8[i34] & 1;
    HEAP8[i20] = i36;
    HEAP8[i20] = i36 & -3 | HEAP8[i34] & 2;
    HEAP32[i33 + (i29 * 56 & -1) + 8 >> 2] = HEAP32[i9 >> 2];
    HEAP32[i33 + (i29 * 56 & -1) + 12 >> 2] = HEAP32[i26 >> 2];
    HEAP32[i33 + (i29 * 56 & -1) + 16 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i33 + (i29 * 56 & -1) + 20 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i33 + (i29 * 56 & -1) + 24 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i33 + (i29 * 56 & -1) + 28 >> 2] = HEAP32[i24 >> 2];
    HEAP32[i33 + (i29 * 56 & -1) + 32 >> 2] = HEAP32[i25 >> 2];
    HEAP32[i33 + (i29 * 56 & -1) + 36 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i33 + (i29 * 56 & -1) + 40 >> 2] = HEAP32[i30 >> 2];
    HEAP32[i33 + (i29 * 56 & -1) + 44 >> 2] = HEAP32[i28 >> 2];
    i28 = HEAP32[i27 >> 2] | 0;
    HEAP32[i27 >> 2] = 0;
    HEAP32[i33 + (i29 * 56 & -1) + 48 >> 2] = i28;
    i28 = HEAP32[i35 >> 2] | 0;
    HEAP32[i35 >> 2] = 0;
    HEAP32[i33 + (i29 * 56 & -1) + 52 >> 2] = i28;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
   }
   i21 = HEAP32[i35 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i35 = i21 | 0;
     i28 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i21);
      __ZN3WTF8fastFreeEPv(i21);
      break;
     } else {
      HEAP32[i35 >> 2] = i28;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i28 = i21 | 0;
     i35 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i35 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i28 >> 2] = i35;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i31 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i27 = i21 | 0;
     i35 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i35 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i27 >> 2] = i35;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i31 = i21 | 0;
     i35 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i35 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i31 >> 2] = i35;
      break;
     }
    }
   } while (0);
   HEAP32[i6 >> 2] = HEAP32[i1 + 32 >> 2];
   __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E3addINS_21ListHashSetTranslatorIS8_EERKS3_PNS_24ListHashSetNodeAllocatorIS3_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS5_S5_S6_S9_SB_SB_EEEEOT0_OT1_(i5, i17 | 0, i3, i6);
   if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
    i21 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
    i32 = i1 + 28 | 0;
    HEAP32[i21 + 48 >> 2] = HEAP32[i32 >> 2];
    HEAP32[i21 + 52 >> 2] = 0;
    i35 = HEAP32[i32 >> 2] | 0;
    if ((i35 | 0) == 0) {
     HEAP32[i1 + 24 >> 2] = i21;
    } else {
     HEAP32[i35 + 52 >> 2] = i21;
    }
    HEAP32[i32 >> 2] = i21;
   }
   i21 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i32 = i21 | 0;
     i35 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i35 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i21);
      break;
     } else {
      HEAP32[i32 >> 2] = i35;
      break;
     }
    }
   } while (0);
   if (i40) {
    break;
   }
   i21 = i41 | 0;
   i19 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i41);
    break;
   } else {
    HEAP32[i21 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i41 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i41 | 0) != 0) {
   i16 = i41 | 0;
   i40 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i40 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i41);
    break;
   } else {
    HEAP32[i16 >> 2] = i40;
    break;
   }
  }
 } while (0);
 i41 = HEAP32[i15 >> 2] | 0;
 if ((i41 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i15 = i41 | 0;
 i40 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
 if ((i40 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i41);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i15 >> 2] = i40;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCoreL19shouldIgnoreElementERKNS_7ElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = HEAP32[i1 + 44 >> 2] | 0;
 i8 = HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0;
 if ((i7 | 0) == (i8 | 0)) {
  i9 = 1;
  STACKTOP = i2;
  return i9 | 0;
 }
 i10 = HEAP32[i7 + 12 >> 2] | 0;
 do {
  if ((i10 | 0) == (HEAP32[i8 + 12 >> 2] | 0)) {
   if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0)) {
    i9 = 1;
   } else {
    break;
   }
   STACKTOP = i2;
   return i9 | 0;
  }
 } while (0);
 i8 = HEAP32[__ZN7WebCore9HTMLNames11noscriptTagE >> 2] | 0;
 if ((i7 | 0) == (i8 | 0)) {
  i9 = 1;
  STACKTOP = i2;
  return i9 | 0;
 }
 do {
  if ((i10 | 0) == (HEAP32[i8 + 12 >> 2] | 0)) {
   if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0)) {
    i9 = 1;
   } else {
    break;
   }
   STACKTOP = i2;
   return i9 | 0;
  }
 } while (0);
 i8 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
  i9 = 0;
  STACKTOP = i2;
  return i9 | 0;
 }
 i11 = HEAP32[__ZN7WebCore9HTMLNames7metaTagE >> 2] | 0;
 do {
  if ((i7 | 0) != (i11 | 0)) {
   if ((i10 | 0) != (HEAP32[i11 + 12 >> 2] | 0)) {
    i9 = 0;
    STACKTOP = i2;
    return i9 | 0;
   }
   if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
    break;
   } else {
    i9 = 0;
   }
   STACKTOP = i2;
   return i9 | 0;
  }
 } while (0);
 i11 = i3 | 0;
 HEAP32[i11 >> 2] = 0;
 i7 = i3 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i10 = i3 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 L25 : do {
  if (__ZNK7WebCore7Element13hasAttributesEv(i1) | 0) {
   i12 = i8 + 48 | 0;
   i13 = i5 | 0;
   i14 = i4 | 0;
   i15 = i4 + 4 | 0;
   i16 = i4;
   i17 = 0;
   L27 : while (1) {
    i18 = HEAP32[i12 >> 2] | 0;
    i19 = HEAP32[i18 + 4 >> 2] | 0;
    i20 = (i19 & 1 | 0) == 0;
    if (i20) {
     i21 = i19 >>> 1 & 134217727;
    } else {
     i21 = HEAP32[i18 + 32 >> 2] | 0;
    }
    if (i17 >>> 0 >= i21 >>> 0) {
     break L25;
    }
    if (i20) {
     i22 = i19 >>> 1 & 134217727;
    } else {
     i22 = HEAP32[i18 + 32 >> 2] | 0;
    }
    if (i22 >>> 0 <= i17 >>> 0) {
     i23 = 21;
     break;
    }
    if (i20) {
     i24 = i18 + 20 | 0;
    } else {
     i24 = HEAP32[i18 + 24 >> 2] | 0;
    }
    __ZNK7WebCore13QualifiedName8toStringEv(i5, i24 + (i17 << 3) | 0);
    i18 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i14 >> 2] = i18;
    i18 = HEAP32[i24 + (i17 << 3) + 4 >> 2] | 0;
    HEAP32[i15 >> 2] = i18;
    if ((i18 | 0) != 0) {
     i20 = i18 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
    }
    i20 = HEAP32[i10 >> 2] | 0;
    if ((i20 | 0) == (HEAP32[i7 >> 2] | 0)) {
     i18 = i20 + 1 | 0;
     i19 = HEAP32[i11 >> 2] | 0;
     do {
      if (i19 >>> 0 > i4 >>> 0) {
       i23 = 31;
      } else {
       if ((i19 + (i20 << 3) | 0) >>> 0 <= i4 >>> 0) {
        i23 = 31;
        break;
       }
       i25 = i16 - i19 >> 3;
       i26 = i18 + (i20 >>> 2) | 0;
       i27 = i26 >>> 0 > 16 >>> 0 ? i26 : 16;
       i26 = i27 >>> 0 > i18 >>> 0 ? i27 : i18;
       do {
        if (i20 >>> 0 < i26 >>> 0) {
         if (i26 >>> 0 > 536870911 >>> 0) {
          i23 = 41;
          break L27;
         }
         i27 = __ZN3WTF18fastMallocGoodSizeEj(i26 << 3) | 0;
         HEAP32[i7 >> 2] = i27 >>> 3;
         i28 = __ZN3WTF10fastMallocEj(i27) | 0;
         HEAP32[i11 >> 2] = i28;
         i27 = i19;
         _memcpy(i28 | 0, i27 | 0, i20 << 3) | 0;
         if ((i19 | 0) == 0) {
          break;
         }
         if ((HEAP32[i11 >> 2] | 0) == (i19 | 0)) {
          HEAP32[i11 >> 2] = 0;
          HEAP32[i7 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i27);
        }
       } while (0);
       i26 = HEAP32[i11 >> 2] | 0;
       i29 = i26 + (i25 << 3) | 0;
       i30 = i26;
      }
     } while (0);
     if ((i23 | 0) == 31) {
      i23 = 0;
      i26 = i18 + (i20 >>> 2) | 0;
      i27 = i26 >>> 0 > 16 >>> 0 ? i26 : 16;
      i26 = i27 >>> 0 > i18 >>> 0 ? i27 : i18;
      do {
       if (i20 >>> 0 < i26 >>> 0) {
        if (i26 >>> 0 > 536870911 >>> 0) {
         i23 = 33;
         break L27;
        }
        i27 = __ZN3WTF18fastMallocGoodSizeEj(i26 << 3) | 0;
        HEAP32[i7 >> 2] = i27 >>> 3;
        i28 = __ZN3WTF10fastMallocEj(i27) | 0;
        HEAP32[i11 >> 2] = i28;
        i27 = i19;
        _memcpy(i28 | 0, i27 | 0, i20 << 3) | 0;
        if ((i19 | 0) == 0) {
         break;
        }
        if ((HEAP32[i11 >> 2] | 0) == (i19 | 0)) {
         HEAP32[i11 >> 2] = 0;
         HEAP32[i7 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i27);
       }
      } while (0);
      i29 = i4;
      i30 = HEAP32[i11 >> 2] | 0;
     }
     i19 = HEAP32[i10 >> 2] | 0;
     i26 = i29 | 0;
     i18 = HEAP32[i26 >> 2] | 0;
     HEAP32[i26 >> 2] = 0;
     HEAP32[i30 + (i19 << 3) >> 2] = i18;
     i18 = i29 + 4 | 0;
     i26 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = 0;
     HEAP32[i30 + (i19 << 3) + 4 >> 2] = i26;
     i31 = HEAP32[i10 >> 2] | 0;
    } else {
     i26 = HEAP32[i11 >> 2] | 0;
     i19 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i26 + (i20 << 3) >> 2] = i19;
     i19 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = 0;
     HEAP32[i26 + (i20 << 3) + 4 >> 2] = i19;
     i31 = HEAP32[i10 >> 2] | 0;
    }
    HEAP32[i10 >> 2] = i31 + 1;
    i19 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i26 = i19 | 0;
      i18 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i19);
       break;
      } else {
       HEAP32[i26 >> 2] = i18;
       break;
      }
     }
    } while (0);
    i19 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i20 = i19 | 0;
      i18 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i19);
       break;
      } else {
       HEAP32[i20 >> 2] = i18;
       break;
      }
     }
    } while (0);
    i19 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i18 = i19 | 0;
      i20 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i19);
       break;
      } else {
       HEAP32[i18 >> 2] = i20;
       break;
      }
     }
    } while (0);
    i17 = i17 + 1 | 0;
   }
   if ((i23 | 0) == 21) {
    _WTFCrash();
    return 0;
   } else if ((i23 | 0) == 33) {
    _WTFCrash();
    return 0;
   } else if ((i23 | 0) == 41) {
    _WTFCrash();
    return 0;
   }
  }
 } while (0);
 __ZN7WebCore21HTMLMetaCharsetParser26encodingFromMetaAttributesERKN3WTF6VectorINSt3__14pairINS1_6StringES5_EELj0ENS1_15CrashOnOverflowEEE(i6, i3);
 i3 = (HEAP32[i6 >> 2] | 0) != 0;
 i6 = HEAP32[i10 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i23 = HEAP32[i11 >> 2] | 0;
  i31 = i23 + (i6 << 3) | 0;
  i6 = i23;
  while (1) {
   i23 = HEAP32[i6 + 4 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i30 = i23 | 0;
     i29 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i30 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i29 = i23 | 0;
     i30 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i29 >> 2] = i30;
      break;
     }
    }
   } while (0);
   i6 = i6 + 8 | 0;
   if ((i6 | 0) == (i31 | 0)) {
    break;
   }
  }
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i9 = i3;
  STACKTOP = i2;
  return i9 | 0;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 i9 = i3;
 STACKTOP = i2;
 return i9 | 0;
}
function __ZN7WebCore14PageSerializer19addImageToResourcesEPNS_11CachedImageEPNS_13RenderElementERKNS_3URLE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i4 + 4 | 0;
 if ((HEAP8[i9] & 1) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i1 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
 } else {
  i13 = HEAP32[i1 + 12 >> 2] | 0;
  i14 = i4 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = HEAP32[i15 + 16 >> 2] | 0;
  if (i16 >>> 0 > 127 >>> 0) {
   i17 = i16 >>> 7;
  } else {
   i17 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i15) | 0;
  }
  i15 = (i17 >>> 23) + ~i17 | 0;
  i16 = i15 << 12 ^ i15;
  i15 = i16 >>> 7 ^ i16;
  i16 = i15 << 2 ^ i15;
  i15 = i16 >>> 20 ^ i16 | 1;
  i16 = i17;
  i17 = 0;
  while (1) {
   i18 = i16 & i13;
   i19 = i11 + (i18 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   i21 = i20;
   if ((i21 | 0) == 0) {
    i22 = 0;
    break;
   } else if ((i21 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(HEAP32[i20 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0) {
     i22 = i19;
     break;
    }
   }
   i19 = (i17 | 0) == 0 ? i15 : i17;
   i16 = i19 + i18 | 0;
   i17 = i19;
  }
  i12 = (i22 | 0) != 0;
 }
 if (i12 | (i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i12 = __ZN7WebCore11CachedImage5imageEv(i2) | 0;
 if ((i12 | 0) == (__ZN7WebCore5Image9nullImageEv() | 0)) {
  STACKTOP = i5;
  return;
 }
 do {
  if ((i3 | 0) == 0) {
   i23 = 16;
  } else {
   i12 = HEAP32[(__ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i2, i3 | 0) | 0) + 8 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i23 = 16;
    break;
   }
   i22 = i12 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   i24 = i12;
  }
 } while (0);
 do {
  if ((i23 | 0) == 16) {
   i3 = HEAP32[(__ZN7WebCore11CachedImage5imageEv(i2) | 0) + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    STACKTOP = i5;
    return;
   } else {
    i12 = i3 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    i24 = i3;
    break;
   }
  }
 } while (0);
 i23 = (i24 | 0) == 0;
 i3 = HEAP32[(__ZNK7WebCore20ResourceResponseBase8mimeTypeEv(i2 + 272 | 0) | 0) >> 2] | 0;
 i2 = (i3 | 0) == 0;
 if (!i2) {
  i12 = i3 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = HEAP32[i1 >> 2] | 0;
 i22 = i24 | 0;
 HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
 i17 = i8 | 0;
 i16 = HEAP32[i4 >> 2] | 0;
 HEAP32[i17 >> 2] = i16;
 if ((i16 | 0) != 0) {
  i15 = i16 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 i15 = HEAP8[i9] | 0;
 i9 = i8 + 4 | 0;
 HEAP8[i9] = HEAP8[i9] & -4 | i15 & 1 | i15 & 2;
 i15 = i8 + 8 | 0;
 HEAP32[i15 >> 2] = HEAP32[i4 + 8 >> 2];
 i16 = i8 + 12 | 0;
 HEAP32[i16 >> 2] = HEAP32[i4 + 12 >> 2];
 i14 = i8 + 16 | 0;
 HEAP32[i14 >> 2] = HEAP32[i4 + 16 >> 2];
 i11 = i8 + 20 | 0;
 HEAP32[i11 >> 2] = HEAP32[i4 + 20 >> 2];
 i13 = i8 + 24 | 0;
 HEAP32[i13 >> 2] = HEAP32[i4 + 24 >> 2];
 i19 = i8 + 28 | 0;
 HEAP32[i19 >> 2] = HEAP32[i4 + 28 >> 2];
 i18 = i8 + 32 | 0;
 HEAP32[i18 >> 2] = HEAP32[i4 + 32 >> 2];
 i20 = i8 + 36 | 0;
 HEAP32[i20 >> 2] = HEAP32[i4 + 36 >> 2];
 i21 = i8 + 40 | 0;
 HEAP32[i21 >> 2] = HEAP32[i4 + 40 >> 2];
 i25 = i8 + 44 | 0;
 HEAP32[i25 >> 2] = HEAP32[i4 + 44 >> 2];
 i26 = i8 + 48 | 0;
 HEAP32[i26 >> 2] = i3;
 if (!i2) {
  i27 = i3 | 0;
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
 }
 i27 = i8 + 52 | 0;
 HEAP32[i27 >> 2] = i24;
 i28 = i12 + 8 | 0;
 i29 = HEAP32[i28 >> 2] | 0;
 if ((i29 | 0) == (HEAP32[i12 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore14PageSerializer8ResourceELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i12, i8);
 } else {
  i8 = HEAP32[i12 >> 2] | 0;
  i12 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = 0;
  HEAP32[i8 + (i29 * 56 & -1) >> 2] = i12;
  i12 = i8 + (i29 * 56 & -1) + 4 | 0;
  i30 = HEAP8[i12] & -2 | HEAP8[i9] & 1;
  HEAP8[i12] = i30;
  HEAP8[i12] = i30 & -3 | HEAP8[i9] & 2;
  HEAP32[i8 + (i29 * 56 & -1) + 8 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i8 + (i29 * 56 & -1) + 12 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i8 + (i29 * 56 & -1) + 16 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i8 + (i29 * 56 & -1) + 20 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i8 + (i29 * 56 & -1) + 24 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i8 + (i29 * 56 & -1) + 28 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i8 + (i29 * 56 & -1) + 32 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i8 + (i29 * 56 & -1) + 36 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i8 + (i29 * 56 & -1) + 40 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i8 + (i29 * 56 & -1) + 44 >> 2] = HEAP32[i25 >> 2];
  i25 = HEAP32[i26 >> 2] | 0;
  HEAP32[i26 >> 2] = 0;
  HEAP32[i8 + (i29 * 56 & -1) + 48 >> 2] = i25;
  i25 = HEAP32[i27 >> 2] | 0;
  HEAP32[i27 >> 2] = 0;
  HEAP32[i8 + (i29 * 56 & -1) + 52 >> 2] = i25;
  HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
 }
 i28 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i27 = i28 | 0;
   i25 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   if ((i25 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i28);
    __ZN3WTF8fastFreeEPv(i28);
    break;
   } else {
    HEAP32[i27 >> 2] = i25;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i26 = i28 | 0;
   i25 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i26 >> 2] = i25;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i17 = i28 | 0;
   i25 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i17 >> 2] = i25;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = HEAP32[i1 + 32 >> 2];
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E3addINS_21ListHashSetTranslatorIS8_EERKS3_PNS_24ListHashSetNodeAllocatorIS3_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS5_S5_S6_S9_SB_SB_EEEEOT0_OT1_(i6, i10 | 0, i4, i7);
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  i7 = HEAP32[HEAP32[i6 >> 2] >> 2] | 0;
  i6 = i1 + 28 | 0;
  HEAP32[i7 + 48 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i7 + 52 >> 2] = 0;
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == 0) {
   HEAP32[i1 + 24 >> 2] = i7;
  } else {
   HEAP32[i4 + 52 >> 2] = i7;
  }
  HEAP32[i6 >> 2] = i7;
 }
 do {
  if (i2) {
   if (!i23) {
    break;
   }
   STACKTOP = i5;
   return;
  } else {
   i7 = i3 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    if (!i23) {
     break;
    }
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i7 >> 2] = i6;
    if (!i23) {
     break;
    }
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 if ((i23 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i24);
  __ZN3WTF8fastFreeEPv(i24);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i22 >> 2] = i23;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore14PageSerializer16urlForBlankFrameEPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 88 | 0;
 HEAP32[i7 >> 2] = i3;
 i12 = i2 + 36 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = HEAP32[i2 + 40 >> 2] | 0;
  i15 = i14 * 52 & -1 | 0;
  i16 = 0;
  i17 = i14;
 } else {
  i14 = HEAP32[i2 + 44 >> 2] | 0;
  i18 = i3;
  i19 = i18 + ~(i18 << 15) | 0;
  i18 = (i19 >>> 10 ^ i19) * 9 & -1;
  i19 = i18 >>> 6 ^ i18;
  i18 = i19 + ~(i19 << 11) | 0;
  i19 = i18 >>> 16 ^ i18;
  i18 = i14 & i19;
  i20 = i13 + (i18 * 52 & -1) | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  L3 : do {
   if ((i21 | 0) == (i3 | 0)) {
    i22 = i20;
   } else {
    i23 = (i19 >>> 23) + ~i19 | 0;
    i24 = i23 << 12 ^ i23;
    i23 = i24 >>> 7 ^ i24;
    i24 = i23 << 2 ^ i23;
    i23 = i24 >>> 20 ^ i24 | 1;
    i24 = 0;
    i25 = i18;
    i26 = i21;
    while (1) {
     if ((i26 | 0) == 0) {
      i22 = 0;
      break L3;
     }
     i27 = (i24 | 0) == 0 ? i23 : i24;
     i28 = i27 + i25 & i14;
     i29 = i13 + (i28 * 52 & -1) | 0;
     i30 = HEAP32[i29 >> 2] | 0;
     if ((i30 | 0) == (i3 | 0)) {
      i22 = i29;
      break;
     } else {
      i24 = i27;
      i25 = i28;
      i26 = i30;
     }
    }
   }
  } while (0);
  i3 = HEAP32[i2 + 40 >> 2] | 0;
  i15 = (i22 | 0) == 0 ? i13 + (i3 * 52 & -1) | 0 : i22;
  i16 = i13;
  i17 = i3;
 }
 if ((i15 | 0) != (i16 + (i17 * 52 & -1) | 0)) {
  i17 = HEAP32[i15 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = i17;
  if ((i17 | 0) != 0) {
   i16 = i17 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
  }
  i16 = i15 + 8 | 0;
  i17 = i1 + 4 | 0;
  i3 = HEAP8[i17] & -2 | HEAP8[i16] & 1;
  HEAP8[i17] = i3;
  HEAP8[i17] = i3 & -3 | HEAP8[i16] & 2;
  HEAP32[i1 + 8 >> 2] = HEAP32[i15 + 12 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i15 + 16 >> 2];
  HEAP32[i1 + 16 >> 2] = HEAP32[i15 + 20 >> 2];
  HEAP32[i1 + 20 >> 2] = HEAP32[i15 + 24 >> 2];
  HEAP32[i1 + 24 >> 2] = HEAP32[i15 + 28 >> 2];
  HEAP32[i1 + 28 >> 2] = HEAP32[i15 + 32 >> 2];
  HEAP32[i1 + 32 >> 2] = HEAP32[i15 + 36 >> 2];
  HEAP32[i1 + 36 >> 2] = HEAP32[i15 + 40 >> 2];
  HEAP32[i1 + 40 >> 2] = HEAP32[i15 + 44 >> 2];
  HEAP32[i1 + 44 >> 2] = HEAP32[i15 + 48 >> 2];
  STACKTOP = i4;
  return;
 }
 i15 = i2 + 56 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i2 + 1;
 __ZN3WTF6String6numberEj(i9, i2);
 i2 = i9 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i31 = 0;
  } else {
   i15 = i9 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   i3 = i16 + 2 | 0;
   HEAP32[i15 >> 2] = i16 + 4;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i31 = i9;
    break;
   } else {
    HEAP32[i15 >> 2] = i3;
    i31 = i9;
    break;
   }
  }
 } while (0);
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i31;
 i3 = (i31 | 0) == 0;
 if (!i3) {
  i15 = i31 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i5, H_BASE + 8 | 0, i6);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i15 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i15;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  _WTFCrash();
 }
 i6 = i8 | 0;
 HEAP32[i6 >> 2] = i5;
 do {
  if (!i3) {
   i5 = i31 | 0;
   i15 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    break;
   } else {
    HEAP32[i5 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i31 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i2 = i31 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i10, 0, i8);
 __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_NS1_3URLEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS3_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S6_S8_SA_SG_SD_EEEEOT0_OT1_(i11, i12 | 0, i7, i10);
 i7 = i10 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 >> 2] = i12;
 i12 = HEAP8[i10 + 4 | 0] | 0;
 i7 = i1 + 4 | 0;
 HEAP8[i7] = HEAP8[i7] & -4 | i12 & 1 | i12 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i10 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i10 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i10 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i10 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i10 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i10 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i10 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i10 + 44 >> 2];
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i10 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore27SerializerMarkupAccumulatorC2ERNS_14PageSerializerERNS_8DocumentEPN3WTF6VectorIPNS_4NodeELj0ENS5_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 32 | 0;
 i9 = i1 | 0;
 __ZN7WebCore17MarkupAccumulatorC2EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE(i9, i4, 1, 0, 0);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 48 >> 2] = i2;
 i2 = i1 + 52 | 0;
 HEAP32[i2 >> 2] = i3;
 i1 = HEAP8[i3 + 1576 | 0] | 0;
 do {
  if ((i1 & 2) == 0) {
   if ((HEAP32[i3 + 1300 >> 2] & 3 | 0) == 1) {
    break;
   }
   if ((i1 & 32) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i1 = HEAP32[i3 + 1296 >> 2] | 0;
 i4 = (i1 | 0) == 0;
 if (i4) {
  __ZNK7WebCore8Document8encodingEv(i8, i3);
  i10 = 0;
  i11 = 1;
 } else {
  i3 = i1 | 0;
  i12 = HEAP32[i3 >> 2] | 0;
  i13 = i12 + 4 | 0;
  HEAP32[i3 >> 2] = i12 + 6;
  if ((i13 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i1);
   i14 = HEAP32[i3 >> 2] | 0;
  } else {
   HEAP32[i3 >> 2] = i13;
   i14 = i13;
  }
  i13 = i14 + 2 | 0;
  HEAP32[i3 >> 2] = i14 + 4;
  if ((i13 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i1);
   __ZNK7WebCore8Document8encodingEv(i8, HEAP32[i2 >> 2] | 0);
  } else {
   HEAP32[i3 >> 2] = i13;
   __ZNK7WebCore8Document8encodingEv(i8, HEAP32[i2 >> 2] | 0);
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  i10 = i1;
  i11 = 0;
 }
 i3 = i8 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i2 = (i8 | 0) == 0;
 if (!i2) {
  i13 = i8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 if (!i11) {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 do {
  if (!i2) {
   i13 = i8 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i14 + 2;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 if (!i11) {
  i14 = i10 | 0;
  i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
  if ((i13 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i10);
   i15 = HEAP32[i14 >> 2] | 0;
  } else {
   HEAP32[i14 >> 2] = i13;
   i15 = i13;
  }
  HEAP32[i14 >> 2] = i15 + 2;
 }
 if (!i2) {
  i15 = i8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 HEAP32[i7 >> 2] = H_BASE + 104;
 i15 = i7 + 4 | 0;
 HEAP32[i15 >> 2] = i10;
 if (!i11) {
  i14 = i10 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 HEAP32[i7 + 8 >> 2] = H_BASE + 88;
 i14 = i7 + 12 | 0;
 HEAP32[i14 >> 2] = i8;
 do {
  if (i2) {
   HEAP32[i7 + 16 >> 2] = H_BASE + 80;
  } else {
   i13 = i8 | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i12 + 2;
   HEAP32[i7 + 16 >> 2] = H_BASE + 80;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i12;
    break;
   }
  }
 } while (0);
 do {
  if (!i11) {
   i12 = i10 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev(i6, i7);
 __ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE(i9, i6);
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 | 0;
   i7 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i15 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (!i2) {
   i9 = i8 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (!i11) {
   i8 = i10 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!i11) {
   i2 = i10 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
   } else {
    HEAP32[i2 >> 2] = i8;
   }
   i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (i4) {
  STACKTOP = i5;
  return;
 }
 i4 = i1 | 0;
 i10 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i4 >> 2] = i10;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore27SerializerMarkupAccumulatorC1ERNS_14PageSerializerERNS_8DocumentEPN3WTF6VectorIPNS_4NodeELj0ENS5_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 32 | 0;
 i9 = i1 | 0;
 __ZN7WebCore17MarkupAccumulatorC2EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE(i9, i4, 1, 0, 0);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 48 >> 2] = i2;
 i2 = i1 + 52 | 0;
 HEAP32[i2 >> 2] = i3;
 i1 = HEAP8[i3 + 1576 | 0] | 0;
 do {
  if ((i1 & 2) == 0) {
   if ((HEAP32[i3 + 1300 >> 2] & 3 | 0) == 1) {
    break;
   }
   if ((i1 & 32) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i1 = HEAP32[i3 + 1296 >> 2] | 0;
 i4 = (i1 | 0) == 0;
 if (i4) {
  __ZNK7WebCore8Document8encodingEv(i8, i3);
  i10 = 0;
  i11 = 1;
 } else {
  i3 = i1 | 0;
  i12 = HEAP32[i3 >> 2] | 0;
  i13 = i12 + 4 | 0;
  HEAP32[i3 >> 2] = i12 + 6;
  if ((i13 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i1);
   i14 = HEAP32[i3 >> 2] | 0;
  } else {
   HEAP32[i3 >> 2] = i13;
   i14 = i13;
  }
  i13 = i14 + 2 | 0;
  HEAP32[i3 >> 2] = i14 + 4;
  if ((i13 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i1);
   __ZNK7WebCore8Document8encodingEv(i8, HEAP32[i2 >> 2] | 0);
  } else {
   HEAP32[i3 >> 2] = i13;
   __ZNK7WebCore8Document8encodingEv(i8, HEAP32[i2 >> 2] | 0);
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  i10 = i1;
  i11 = 0;
 }
 i3 = i8 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i2 = (i8 | 0) == 0;
 if (!i2) {
  i13 = i8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 if (!i11) {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 do {
  if (!i2) {
   i13 = i8 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i14 + 2;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 if (!i11) {
  i14 = i10 | 0;
  i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
  if ((i13 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i10);
   i15 = HEAP32[i14 >> 2] | 0;
  } else {
   HEAP32[i14 >> 2] = i13;
   i15 = i13;
  }
  HEAP32[i14 >> 2] = i15 + 2;
 }
 if (!i2) {
  i15 = i8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 HEAP32[i7 >> 2] = H_BASE + 104;
 i15 = i7 + 4 | 0;
 HEAP32[i15 >> 2] = i10;
 if (!i11) {
  i14 = i10 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 HEAP32[i7 + 8 >> 2] = H_BASE + 88;
 i14 = i7 + 12 | 0;
 HEAP32[i14 >> 2] = i8;
 do {
  if (i2) {
   HEAP32[i7 + 16 >> 2] = H_BASE + 80;
  } else {
   i13 = i8 | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i12 + 2;
   HEAP32[i7 + 16 >> 2] = H_BASE + 80;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i12;
    break;
   }
  }
 } while (0);
 do {
  if (!i11) {
   i12 = i10 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev(i6, i7);
 __ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE(i9, i6);
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i15 = i9 | 0;
   i7 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i15 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (!i2) {
   i9 = i8 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (!i11) {
   i8 = i10 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!i11) {
   i2 = i10 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
   } else {
    HEAP32[i2 >> 2] = i8;
   }
   i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (i4) {
  STACKTOP = i5;
  return;
 }
 i4 = i1 | 0;
 i10 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i4 >> 2] = i10;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore27SerializerMarkupAccumulator22appendCustomAttributesERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 56 | 0;
 i9 = i5 + 104 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 120 >> 2] & 1](i3 | 0) | 0)) {
  STACKTOP = i5;
  return;
 }
 i10 = HEAP32[i3 + 52 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i11 = HEAP32[i10 + 456 >> 2] | 0;
 i12 = i7 | 0;
 i13 = HEAP32[i11 + 356 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 if ((i13 | 0) == 0) {
  i14 = 0;
  i15 = i7 + 4 | 0;
 } else {
  i16 = i13 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
  i16 = i7 + 4 | 0;
  i14 = HEAP8[i16] & -2;
  i15 = i16;
 }
 i16 = i11 + 360 | 0;
 i13 = HEAP8[i16] & 1;
 i17 = i14 | i13;
 HEAP8[i15] = i17;
 HEAP8[i15] = i17 & -3 | HEAP8[i16] & 2;
 i16 = i7 + 8 | 0;
 HEAP32[i16 >> 2] = HEAP32[i11 + 364 >> 2];
 i17 = i7 + 12 | 0;
 HEAP32[i17 >> 2] = HEAP32[i11 + 368 >> 2];
 i14 = i7 + 16 | 0;
 HEAP32[i14 >> 2] = HEAP32[i11 + 372 >> 2];
 i18 = i7 + 20 | 0;
 HEAP32[i18 >> 2] = HEAP32[i11 + 376 >> 2];
 i19 = i7 + 24 | 0;
 HEAP32[i19 >> 2] = HEAP32[i11 + 380 >> 2];
 i20 = i7 + 28 | 0;
 HEAP32[i20 >> 2] = HEAP32[i11 + 384 >> 2];
 i21 = i7 + 32 | 0;
 HEAP32[i21 >> 2] = HEAP32[i11 + 388 >> 2];
 i22 = i7 + 36 | 0;
 HEAP32[i22 >> 2] = HEAP32[i11 + 392 >> 2];
 i23 = i7 + 40 | 0;
 HEAP32[i23 >> 2] = HEAP32[i11 + 396 >> 2];
 i24 = i7 + 44 | 0;
 HEAP32[i24 >> 2] = HEAP32[i11 + 400 >> 2];
 if (i13 << 24 >> 24 == 0) {
  i25 = 8;
 } else {
  if (__ZNK7WebCore3URL10isBlankURLEv(i7) | 0) {
   i25 = 8;
  }
 }
 do {
  if ((i25 | 0) == 8) {
   __ZN7WebCore14PageSerializer16urlForBlankFrameEPNS_5FrameE(i8, HEAP32[i1 + 48 >> 2] | 0, i10);
   i7 = i8 | 0;
   i13 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i11 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i13;
   do {
    if ((i11 | 0) != 0) {
     i13 = i11 | 0;
     i26 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i13 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i11 = HEAP8[i8 + 4 | 0] | 0;
   HEAP8[i15] = HEAP8[i15] & -4 | i11 & 1 | i11 & 2;
   HEAP32[i16 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i17 >> 2] = HEAP32[i8 + 12 >> 2];
   HEAP32[i14 >> 2] = HEAP32[i8 + 16 >> 2];
   HEAP32[i18 >> 2] = HEAP32[i8 + 20 >> 2];
   HEAP32[i19 >> 2] = HEAP32[i8 + 24 >> 2];
   HEAP32[i20 >> 2] = HEAP32[i8 + 28 >> 2];
   HEAP32[i21 >> 2] = HEAP32[i8 + 32 >> 2];
   HEAP32[i22 >> 2] = HEAP32[i8 + 36 >> 2];
   HEAP32[i23 >> 2] = HEAP32[i8 + 40 >> 2];
   HEAP32[i24 >> 2] = HEAP32[i8 + 44 >> 2];
   i11 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i26 = i11 | 0;
     i13 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i26 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i11 = i1 | 0;
   i7 = (HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0) ? __ZN7WebCore9HTMLNames8dataAttrE : __ZN7WebCore9HTMLNames7srcAttrE;
   i13 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i13 | 0) == 0) {
     i26 = i6 | 0;
     HEAP32[i26 >> 2] = 0;
     i27 = i26;
    } else {
     if ((HEAP32[i13 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i13);
      i27 = i6 | 0;
      break;
     } else {
      i26 = i6 | 0;
      HEAP32[i26 >> 2] = i13;
      i28 = i13 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
      i27 = i26;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i27 >> 2] | 0;
   i26 = HEAP32[i7 >> 2] | 0;
   HEAP32[i9 >> 2] = i26;
   i28 = i26 | 0;
   HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
   i28 = i9 + 4 | 0;
   HEAP32[i28 >> 2] = i13;
   i26 = (i13 | 0) == 0;
   if (!i26) {
    i29 = i13 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
   }
   __ZN7WebCore17MarkupAccumulator15appendAttributeERN3WTF13StringBuilderERKNS_7ElementERKNS_9AttributeEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsISB_EENSF_ISD_EEEE(i11, i2, i3, i9, i4);
   i29 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i28 = i29 | 0;
     i30 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i28 >> 2] = i30;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i9 | 0);
   if (i26) {
    break;
   }
   i29 = i13 | 0;
   i11 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i29 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i12 = i9 | 0;
 i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i12 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E3addINS_21ListHashSetTranslatorIS8_EERKS3_PNS_24ListHashSetNodeAllocatorIS3_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS5_S5_S6_S9_SB_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = i2 + 4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = 8;
    i12 = 1;
   } else {
    i13 = i10 << 1;
    i11 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i13 | 0) ? i10 : i13;
    i12 = (i10 | 0) == 0;
   }
   HEAP32[i9 >> 2] = i11;
   i9 = i2 + 8 | 0;
   HEAP32[i9 >> 2] = i11 - 1;
   HEAP32[i7 >> 2] = __ZN3WTF16fastZeroedMallocEj(i11 << 2) | 0;
   if (i12) {
    HEAP32[i2 + 16 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(0);
    i14 = HEAP32[i7 >> 2] | 0;
    i15 = i9;
    break;
   } else {
    _llvm_trap();
   }
  } else {
   i14 = i8;
   i15 = i2 + 8 | 0;
  }
 } while (0);
 i8 = HEAP32[i15 >> 2] | 0;
 i12 = i3 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 i9 = HEAP32[i11 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i16 = i9 >>> 7;
 } else {
  i16 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i11) | 0;
 }
 i11 = (i16 >>> 23) + ~i16 | 0;
 i9 = i11 << 12 ^ i11;
 i11 = i9 >>> 7 ^ i9;
 i9 = i11 << 2 ^ i11;
 i11 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i10 = i16;
 i16 = 0;
 while (1) {
  i13 = i10 & i8;
  i17 = i14 + (i13 << 2) | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18;
  if ((i19 | 0) == (-1 | 0)) {
   i20 = i17;
  } else if ((i19 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(HEAP32[i18 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
    i21 = 14;
    break;
   } else {
    i20 = i9;
   }
  }
  i18 = (i16 | 0) == 0 ? i11 : i16;
  i9 = i20;
  i10 = i18 + i13 | 0;
  i16 = i18;
 }
 if ((i21 | 0) == 14) {
  i21 = (HEAP32[i7 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i16 = i1;
  HEAP32[i16 >> 2] = i17;
  HEAP32[i16 + 4 >> 2] = i21;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i9 | 0) == 0) {
  i22 = i17;
 } else {
  HEAP32[i9 >> 2] = 0;
  i17 = i2 + 16 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) - 1;
  i22 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 i4 = i9 | 0;
 i17 = HEAP32[i4 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i23 = __ZN3WTF10fastMallocEj(56) | 0;
 } else {
  i21 = HEAP32[i17 + 52 >> 2] | 0;
  do {
   if ((i21 | 0) == 0) {
    i16 = i9 + 4 | 0;
    if ((HEAP8[i16] & 1) != 0) {
     i24 = 0;
     break;
    }
    i10 = i17 + 56 | 0;
    if ((i10 | 0) != (i9 + 14344 | 0)) {
     i24 = i10;
     break;
    }
    HEAP8[i16] = 1;
    i24 = 0;
   } else {
    i24 = i21;
   }
  } while (0);
  HEAP32[i4 >> 2] = i24;
  i23 = i17;
 }
 i17 = HEAP32[i12 >> 2] | 0;
 HEAP32[i23 >> 2] = i17;
 if ((i17 | 0) != 0) {
  i12 = i17 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i3 + 4 | 0;
 i17 = i23 + 4 | 0;
 i24 = HEAP8[i17] & -2 | HEAP8[i12] & 1;
 HEAP8[i17] = i24;
 HEAP8[i17] = i24 & -3 | HEAP8[i12] & 2;
 HEAP32[i23 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i23 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i23 + 16 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i23 + 20 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i23 + 24 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i23 + 28 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i23 + 32 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i23 + 36 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i23 + 40 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i23 + 44 >> 2] = HEAP32[i3 + 44 >> 2];
 HEAP32[i23 + 48 >> 2] = 0;
 HEAP32[i23 + 52 >> 2] = 0;
 HEAP32[i22 >> 2] = i23;
 i23 = i2 + 12 | 0;
 i3 = (HEAP32[i23 >> 2] | 0) + 1 | 0;
 HEAP32[i23 >> 2] = i3;
 i23 = i2 + 16 | 0;
 i12 = i2 + 4 | 0;
 i24 = HEAP32[i12 >> 2] | 0;
 if (((HEAP32[i23 >> 2] | 0) + i3 << 1 | 0) < (i24 | 0)) {
  i25 = i22;
  i26 = i24;
 } else {
  i17 = (i24 | 0) == 0;
  if (i17) {
   i27 = 8;
  } else {
   i4 = i24 << 1;
   i27 = (i3 * 6 & -1 | 0) < (i4 | 0) ? i24 : i4;
  }
  i4 = HEAP32[i7 >> 2] | 0;
  HEAP32[i12 >> 2] = i27;
  HEAP32[i15 >> 2] = i27 - 1;
  HEAP32[i7 >> 2] = __ZN3WTF16fastZeroedMallocEj(i27 << 2) | 0;
  if (i17) {
   i28 = 0;
  } else {
   i17 = i6 | 0;
   i27 = 0;
   i15 = 0;
   while (1) {
    i3 = i4 + (i27 << 2) | 0;
    i21 = HEAP32[i3 >> 2] | 0;
    if ((i21 | 0) == (-1 | 0) | (i21 | 0) == 0) {
     i29 = i15;
    } else {
     __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES5_EENSt3__14pairIPS5_bEERKT0_(i6, i2, i3);
     i21 = HEAP32[i17 >> 2] | 0;
     HEAP32[i21 >> 2] = HEAP32[i3 >> 2];
     i29 = (i3 | 0) == (i22 | 0) ? i21 : i15;
    }
    i21 = i27 + 1 | 0;
    if ((i21 | 0) == (i24 | 0)) {
     i28 = i29;
     break;
    } else {
     i27 = i21;
     i15 = i29;
    }
   }
  }
  HEAP32[i23 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
  i25 = i28;
  i26 = HEAP32[i12 >> 2] | 0;
 }
 i12 = (HEAP32[i7 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i12;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 + 8 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 | 0;
 i11 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i12 = i2 + 4 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = (i13 | 0) == 0;
 if (i14) {
  i15 = 0;
 } else {
  i15 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i16 = i2 + 12 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = (i17 | 0) == 0;
 if (i18) {
  i19 = 0;
 } else {
  i19 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i20 = _llvm_uadd_with_overflow_i32(i11 + i9 + i15 + i19 | 0, i7 | 0) | 0;
 i19 = i20;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i14) {
  i21 = 9;
 } else {
  if ((HEAP32[i13 + 16 >> 2] & 32 | 0) != 0) {
   i21 = 9;
  }
 }
 do {
  if ((i21 | 0) == 9) {
   if (!i18) {
    if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i19 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i21 = 28;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i22 = i13;
     i23 = 0;
    } else {
     if (i19 >>> 0 > 4294967275 >>> 0) {
      i21 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i19 + 20 | 0);
     i13 = i6 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i21 = 28;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i19;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 32;
     i22 = i14;
     i23 = i13;
    }
   } while (0);
   if ((i21 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh(i2 | 0, i23);
   i13 = HEAP32[i8 >> 2] | 0;
   i14 = _strlen(i13 | 0) | 0;
   i20 = HEAP32[i10 >> 2] | 0;
   i15 = _strlen(i20 | 0) | 0;
   i9 = HEAP32[i12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i24 = 0;
   } else {
    i24 = HEAP32[i9 + 4 >> 2] | 0;
   }
   i11 = i15 + i14 + i24 | 0;
   i14 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i14 | 0) == 0) {
     i25 = i13;
     i26 = i20;
     i27 = i9;
    } else {
     i15 = HEAP32[i14 + 4 >> 2] | 0;
     i28 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i25 = i13;
      i26 = i20;
      i27 = i9;
      break;
     } else {
      i29 = 0;
     }
     while (1) {
      HEAP8[i23 + (i11 + i29) | 0] = HEAP8[i28 + i29 | 0] | 0;
      i29 = i29 + 1 | 0;
      if (i29 >>> 0 >= i15 >>> 0) {
       break;
      }
     }
     i25 = HEAP32[i8 >> 2] | 0;
     i26 = HEAP32[i10 >> 2] | 0;
     i27 = HEAP32[i12 >> 2] | 0;
    }
   } while (0);
   i11 = _strlen(i25 | 0) | 0;
   i9 = _strlen(i26 | 0) | 0;
   if ((i27 | 0) == 0) {
    i30 = 0;
   } else {
    i30 = HEAP32[i27 + 4 >> 2] | 0;
   }
   i20 = HEAP32[i16 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i31 = 0;
   } else {
    i31 = HEAP32[i20 + 4 >> 2] | 0;
   }
   _memcpy(i23 + (i9 + i11 + i30 + i31) | 0, i3 | 0, i7) | 0;
   HEAP32[i1 >> 2] = i22;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i19 | 0) == 0) {
   i22 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i22 | 0) == 0) {
    i21 = 42;
    break;
   }
   i31 = i22 | 0;
   HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
   i32 = i22;
   i33 = 0;
  } else {
   if (i19 >>> 0 > 2147483637 >>> 0) {
    i21 = 42;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i19 << 1) + 20 | 0);
   i22 = i5 | 0;
   i31 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   if ((i31 | 0) == 0) {
    i21 = 42;
    break;
   }
   i22 = i31 + 20 | 0;
   HEAP32[i31 >> 2] = 2;
   HEAP32[i31 + 4 >> 2] = i19;
   HEAP32[i31 + 8 >> 2] = i22;
   HEAP32[i31 + 12 >> 2] = 0;
   HEAP32[i31 + 16 >> 2] = 0;
   i32 = i31;
   i33 = i22;
  }
 } while (0);
 if ((i21 | 0) == 42) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt(i2, i33);
 i2 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i8 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i34 = 0;
 } else {
  i34 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = HEAP32[i16 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i35 = 0;
 } else {
  i35 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = i8 + i2 + i34 + i35 | 0;
 if ((i7 | 0) != 0) {
  i35 = 0;
  while (1) {
   HEAP16[i33 + (i10 + i35 << 1) >> 1] = HEAPU8[i3 + i35 | 0] | 0;
   i35 = i35 + 1 | 0;
   if (i35 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i32;
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i2 | 0) | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = (i3 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i7 | 0, i10 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (i9) {
   if ((i10 | 0) == 0) {
    i12 = 9;
   } else {
    i12 = 11;
   }
  } else {
   i11 = (i10 | 0) == 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    if (i11) {
     i12 = 9;
     break;
    } else {
     i12 = 11;
     break;
    }
   }
   do {
    if (i11) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i12 = 34;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 34;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i13 = i5 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i12 = 34;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i10;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 0;
     i15 = i14;
     i16 = i13;
    }
   } while (0);
   if ((i12 | 0) == 34) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i16 + (i11 << 1) >> 1] = HEAPU8[i2 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i17 = 0;
      }
      while (1) {
       HEAP16[i16 + (i17 + i7 << 1) >> 1] = HEAP16[i14 + (i17 << 1) >> 1] | 0;
       i17 = i17 + 1 | 0;
       if (i17 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     } else {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i18 = 0;
      }
      while (1) {
       HEAP16[i16 + (i18 + i7 << 1) >> 1] = HEAPU8[i14 + i18 | 0] | 0;
       i18 = i18 + 1 | 0;
       if (i18 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 11) {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 18;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i15 = i6 | 0;
   i18 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i18 | 0) == 0) {
    i12 = 18;
    break;
   }
   i15 = i18 + 20 | 0;
   HEAP32[i18 >> 2] = 2;
   HEAP32[i18 + 4 >> 2] = i10;
   HEAP32[i18 + 8 >> 2] = i15;
   HEAP32[i18 + 12 >> 2] = 0;
   HEAP32[i18 + 16 >> 2] = 32;
   i19 = i18;
   i20 = i15;
  } else if ((i12 | 0) == 9) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i12 = 18;
    break;
   }
   i18 = i15 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i19 = i15;
   i20 = 0;
  }
 } while (0);
 if ((i12 | 0) == 18) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 _memcpy(i20 | 0, i2 | 0, i7) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = HEAP32[i2 + 4 >> 2] | 0;
   i12 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i21 = 0;
   }
   while (1) {
    HEAP8[i20 + (i21 + i7) | 0] = HEAP8[i12 + i21 | 0] | 0;
    i21 = i21 + 1 | 0;
    if (i21 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i19;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_NS1_3URLEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS3_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_NS1_3URLEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i8, 0) | 0;
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
 i11 = i10 + (i9 * 52 & -1) | 0;
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
    i24 = i10 + (i23 * 52 & -1) | 0;
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
    i20 = i10 + ((HEAP32[i2 + 4 >> 2] | 0) * 52 & -1) | 0;
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
    _memset(i21 | 0, 0, 52) | 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i2 + 16 | 0;
 }
 __ZN3WTF17HashMapTranslatorINS_7HashMapIPN7WebCore5FrameENS2_3URLENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE18KeyValuePairTraitsES7_E9translateINS_12KeyValuePairIS4_S5_EERKS4_RS5_EEvRT_OT0_OT1_(i26, i3, i4);
 i4 = i2 + 12 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i3;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i27 >> 2] | 0) + i3 << 1 | 0) < (i13 | 0)) {
  i28 = i26;
  i29 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i30 = 8;
  } else {
   i27 = i13 << 1;
   i30 = (i3 * 6 & -1 | 0) < (i27 | 0) ? i13 : i27;
  }
  i27 = __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_NS1_3URLEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i30, i26) | 0;
  i28 = i27;
  i29 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i29 * 52 & -1) | 0;
 i29 = i1;
 HEAP32[i29 >> 2] = i28;
 HEAP32[i29 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore14PageSerializer8ResourceELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 56 & -1) | 0;
 if (i2 >>> 0 > 76695844 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 56 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 56 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   i8 = i6 + 4 | 0;
   i9 = i7 + 4 | 0;
   i10 = HEAP8[i9] & -2 | HEAP8[i8] & 1;
   HEAP8[i9] = i10;
   HEAP8[i9] = i10 & -3 | HEAP8[i8] & 2;
   HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i7 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   HEAP32[i7 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i7 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i7 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAP32[i7 + 32 >> 2] = HEAP32[i6 + 32 >> 2];
   HEAP32[i7 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   HEAP32[i7 + 40 >> 2] = HEAP32[i6 + 40 >> 2];
   HEAP32[i7 + 44 >> 2] = HEAP32[i6 + 44 >> 2];
   i8 = i6 + 48 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 48 >> 2] = i10;
   i10 = i6 + 52 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i7 + 52 >> 2] = i9;
   i9 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i11 = i9 | 0;
     i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i11 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = i6 + 56 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 56 | 0;
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
function __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_NS1_3URLEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E8reinsertEOS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i6 = i1;
 i7 = i6 + ~(i6 << 15) | 0;
 i6 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i6 >>> 6 ^ i6;
 i6 = i7 + ~(i7 << 11) | 0;
 i7 = i6 >>> 16 ^ i6;
 i6 = i7 & i5;
 i8 = i4 + (i6 * 52 & -1) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i7 >>> 23) + ~i7 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i6;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i1 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 * 52 & -1) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i10 = i20;
     i11 = i23;
     i12 = 3;
     break;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
  }
 } while (0);
 if ((i12 | 0) == 3) {
  i19 = (i10 | 0) != 0 ? i10 : i11;
 }
 i11 = i19 + 4 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i12 = i10 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i19 >> 2] = HEAP32[i3 >> 2];
 i3 = i2 + 4 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i11 >> 2] = i10;
 i10 = i2 + 8 | 0;
 i11 = i19 + 8 | 0;
 i3 = HEAP8[i11] & -2 | HEAP8[i10] & 1;
 HEAP8[i11] = i3;
 HEAP8[i11] = i3 & -3 | HEAP8[i10] & 2;
 HEAP32[i19 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i19 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i19 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i19 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i19 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i19 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i19 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i19 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i19 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP32[i19 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 return i19 | 0;
}
function __ZN7WebCore14PageSerializer30retrieveResourcesForPropertiesEPKNS_15StylePropertiesEPNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i2 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 & 4 | 0) == 0) {
  i8 = i7 >>> 3;
 } else {
  i8 = HEAP32[i2 + 16 >> 2] | 0;
 }
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i2 + 8 | 0;
 i10 = i9;
 i11 = i5 | 0;
 i12 = i2 + 16 | 0;
 i2 = i9;
 i9 = 0;
 i13 = i7;
 while (1) {
  if ((i13 & 4 | 0) == 0) {
   i14 = i10 + (i9 << 2) | 0;
  } else {
   if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i9 >>> 0) {
    i15 = 9;
    break;
   }
   i14 = (HEAP32[i2 >> 2] | 0) + (i9 << 3) + 4 | 0;
  }
  i7 = HEAP32[i14 >> 2] | 0;
  i16 = (i7 | 0) == 0;
  if (!i16) {
   i17 = i7 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
  }
  do {
   if ((HEAP32[i7 + 4 >> 2] & 516096 | 0) == 8192) {
    i17 = __ZN7WebCore13CSSImageValue20cachedOrPendingImageEv(i7) | 0;
    if ((i17 | 0) == 0) {
     break;
    }
    if ((HEAP8[i17 + 8 | 0] & 1) == 0) {
     break;
    }
    i18 = HEAP32[i17 + 16 >> 2] | 0;
    __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i5, i3, __ZNK7WebCore19ResourceRequestBase3urlEv(i18 + 48 | 0) | 0);
    __ZN7WebCore14PageSerializer19addImageToResourcesEPNS_11CachedImageEPNS_13RenderElementERKNS_3URLE(i1, i18, 0, i5);
    i18 = HEAP32[i11 >> 2] | 0;
    if ((i18 | 0) == 0) {
     break;
    }
    i17 = i18 | 0;
    i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i19 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     break;
    } else {
     HEAP32[i17 >> 2] = i19;
     break;
    }
   }
  } while (0);
  do {
   if (!i16) {
    i19 = i7 | 0;
    i17 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i7);
     break;
    } else {
     HEAP32[i19 >> 2] = i17;
     break;
    }
   }
  } while (0);
  i7 = i9 + 1 | 0;
  if (i7 >>> 0 >= i8 >>> 0) {
   i15 = 30;
   break;
  }
  i9 = i7;
  i13 = HEAP32[i6 >> 2] | 0;
 }
 if ((i15 | 0) == 30) {
  STACKTOP = i4;
  return;
 } else if ((i15 | 0) == 9) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN3WTF6VectorIN7WebCore14PageSerializer8ResourceELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 * 56 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore14PageSerializer8ResourceELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 56 & -1) * 56 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore14PageSerializer8ResourceELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = i11 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 * 56 & -1) >> 2] = i5;
 i5 = i11 + 4 | 0;
 i2 = i12 + (i6 * 56 & -1) + 4 | 0;
 i8 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i8;
 HEAP8[i2] = i8 & -3 | HEAP8[i5] & 2;
 HEAP32[i12 + (i6 * 56 & -1) + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 16 >> 2] = HEAP32[i11 + 16 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 28 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 32 >> 2] = HEAP32[i11 + 32 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 36 >> 2] = HEAP32[i11 + 36 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 40 >> 2] = HEAP32[i11 + 40 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 44 >> 2] = HEAP32[i11 + 44 >> 2];
 i5 = i11 + 48 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i12 + (i6 * 56 & -1) + 48 >> 2] = i8;
 i8 = i11 + 52 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i12 + (i6 * 56 & -1) + 52 >> 2] = i11;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_NS1_3URLEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 * 52 & -1) | 0;
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
  i2 = i7 + (i10 * 52 & -1) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_NS1_3URLEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E8reinsertEOS6_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i13 * 52 & -1) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i13 * 52 & -1) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i10 = i13 + 1 | 0;
  if ((i10 | 0) < (i5 | 0)) {
   i13 = i10;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 if ((i7 | 0) != 0) {
  i8 = 0;
  while (1) {
   HEAP16[i2 + (i8 << 1) >> 1] = HEAPU8[i6 + i8 | 0] | 0;
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 i8 = i1 + 4 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i9 = 0;
   i10 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
     i11 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i12 = 0;
     }
     while (1) {
      HEAP16[i2 + (i12 + i7 << 1) >> 1] = HEAP16[i11 + (i12 << 1) >> 1] | 0;
      i12 = i12 + 1 | 0;
      if (i12 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    } else {
     i11 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     } else {
      i13 = 0;
     }
     while (1) {
      HEAP16[i2 + (i13 + i7 << 1) >> 1] = HEAPU8[i11 + i13 | 0] | 0;
      i13 = i13 + 1 | 0;
      if (i13 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i6 = HEAP32[i8 >> 2] | 0;
   i11 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
   if ((i6 | 0) == 0) {
    i9 = 0;
    i10 = i11;
    break;
   }
   i9 = HEAP32[i6 + 4 >> 2] | 0;
   i10 = i11;
  }
 } while (0);
 i5 = i9 + i10 | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i14 = 0;
 }
 while (1) {
  HEAP16[i2 + (i5 + i14 << 1) >> 1] = HEAPU8[i3 + i14 | 0] | 0;
  i14 = i14 + 1 | 0;
  if (i14 >>> 0 >= i4 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore27SerializerMarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if (!(__ZN7WebCoreL19shouldIgnoreElementERKNS_7ElementE(i3) | 0)) {
  __ZN7WebCore17MarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i1 | 0, i2, i3, i4);
 }
 i4 = HEAP32[i3 + 44 >> 2] | 0;
 i3 = HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0;
 do {
  if ((i4 | 0) != (i3 | 0)) {
   if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 64 | 0, 15);
 __ZNK7WebCore8Document8encodingEv(i6, HEAP32[i1 + 52 >> 2] | 0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i6);
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 56 | 0, 2);
 STACKTOP = i5;
 return;
}
function __ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 i6 = i5 + 4 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i8 = i5 + 12 | 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP32[i2 + 16 >> 2] | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES5_EENSt3__14pairIPS5_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
 }
 i2 = (i7 >>> 23) + ~i7 | 0;
 i6 = i2 << 12 ^ i2;
 i2 = i6 >>> 7 ^ i6;
 i6 = i2 << 2 ^ i2;
 i2 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i5;
  i10 = i4 + (i9 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == (-1 | 0)) {
   i13 = i10;
  } else if ((i12 | 0) == 0) {
   i14 = 6;
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(HEAP32[i11 >> 2] | 0, HEAP32[HEAP32[i3 >> 2] >> 2] | 0) | 0) {
    i14 = 8;
    break;
   } else {
    i13 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i13;
 }
 if ((i14 | 0) == 8) {
  HEAP32[i1 >> 2] = i10;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 } else if ((i14 | 0) == 6) {
  HEAP32[i1 >> 2] = (i8 | 0) != 0 ? i8 : i10;
  HEAP8[i1 + 4 | 0] = 0;
  return;
 }
}
function __ZN7WebCore14PageSerializer8ResourceC2ERKNS_3URLERKN3WTF6StringENS5_10PassRefPtrINS_12SharedBufferEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i2 + 4 | 0;
 i5 = i1 + 4 | 0;
 i7 = HEAP8[i5] & -2 | HEAP8[i6] & 1;
 HEAP8[i5] = i7;
 HEAP8[i5] = i7 & -3 | HEAP8[i6] & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 48 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i8 = i1 + 52 | 0;
  i9 = i4 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i8 >> 2] = i10;
  return;
 }
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 i8 = i1 + 52 | 0;
 i9 = i4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i10;
 return;
}
function __ZN7WebCore14PageSerializer8ResourceC1ERKNS_3URLERKN3WTF6StringENS5_10PassRefPtrINS_12SharedBufferEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i2 + 4 | 0;
 i5 = i1 + 4 | 0;
 i7 = HEAP8[i5] & -2 | HEAP8[i6] & 1;
 HEAP8[i5] = i7;
 HEAP8[i5] = i7 & -3 | HEAP8[i6] & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 48 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i8 = i1 + 52 | 0;
  i9 = i4 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i8 >> 2] = i10;
  return;
 }
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 i8 = i1 + 52 | 0;
 i9 = i4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i10;
 return;
}
function __ZN3WTF17HashMapTranslatorINS_7HashMapIPN7WebCore5FrameENS2_3URLENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE18KeyValuePairTraitsES7_E9translateINS_12KeyValuePairIS4_S5_EERKS4_RS5_EEvRT_OT0_OT1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = i3 + 4 | 0;
 i4 = i1 + 8 | 0;
 i2 = HEAP8[i4] & -2 | HEAP8[i5] & 1;
 HEAP8[i4] = i2;
 HEAP8[i4] = i2 & -3 | HEAP8[i5] & 2;
 HEAP32[i1 + 12 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 44 >> 2];
 return;
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 _memcpy(i2 | 0, i6 | 0, i7) | 0;
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i8 = 0;
   i9 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
  } else {
   i10 = HEAP32[i1 + 4 >> 2] | 0;
   i11 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i12 = i1;
    i13 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i2 + (i14 + i7) | 0] = HEAP8[i11 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i6 >> 2] | 0;
    i14 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
    if ((i10 | 0) == 0) {
     i8 = 0;
     i9 = i14;
     break;
    } else {
     i12 = i10;
     i13 = i14;
    }
   }
   i8 = HEAP32[i12 + 4 >> 2] | 0;
   i9 = i13;
  }
 } while (0);
 _memcpy(i2 + (i8 + i9) | 0, i3 | 0, i4) | 0;
 return;
}
function __ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt(i1 | 0, i2);
 i3 = _strlen(HEAP32[i1 + 8 >> 2] | 0) | 0;
 i4 = _strlen(HEAP32[i1 >> 2] | 0) | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = HEAP32[i5 + 4 >> 2] | 0;
 }
 i5 = i4 + i3 + i6 | 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
  i3 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i7 = 0;
  }
  while (1) {
   HEAP16[i2 + (i7 + i5 << 1) >> 1] = HEAP16[i3 + (i7 << 1) >> 1] | 0;
   i7 = i7 + 1 | 0;
   if (i7 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i7 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i8 = 0;
  }
  while (1) {
   HEAP16[i2 + (i8 + i5 << 1) >> 1] = HEAPU8[i7 + i8 | 0] | 0;
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
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
function __ZN7WebCore27SerializerMarkupAccumulator10appendTextERN3WTF13StringBuilderERKNS_4TextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i3 + 16 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
  return;
 }
 if (__ZN7WebCoreL19shouldIgnoreElementERKNS_7ElementE(i4) | 0) {
  return;
 }
 __ZN7WebCore17MarkupAccumulator10appendTextERN3WTF13StringBuilderERKNS_4TextE(i1 | 0, i2, i3);
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
function __ZN7WebCore14PageSerializerC2EPN3WTF6VectorINS0_8ResourceELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = i2;
 _memset(i1 + 4 | 0, 0, 28) | 0;
 i2 = __Znwj(14344) | 0;
 i3 = i2 + 8 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP8[i2 + 4 | 0] = 0;
 _memset(i3 | 0, 0, 14336) | 0;
 HEAP32[i1 + 32 >> 2] = i2;
 _memset(i1 + 36 | 0, 0, 24) | 0;
 return;
}
function __ZN7WebCore14PageSerializerC1EPN3WTF6VectorINS0_8ResourceELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = i2;
 _memset(i1 + 4 | 0, 0, 28) | 0;
 i2 = __Znwj(14344) | 0;
 i3 = i2 + 8 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP8[i2 + 4 | 0] = 0;
 _memset(i3 | 0, 0, 14336) | 0;
 HEAP32[i1 + 32 >> 2] = i2;
 _memset(i1 + 36 | 0, 0, 24) | 0;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viiii + 2;
}
function __ZN7WebCore27SerializerMarkupAccumulator12appendEndTagERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
  return;
 }
 if (__ZN7WebCoreL19shouldIgnoreElementERKNS_7ElementE(i2) | 0) {
  return;
 }
 __ZN7WebCore17MarkupAccumulator12appendEndTagERKNS_4NodeE(i1 | 0, i2);
 return;
}
function __ZN7WebCore14PageSerializer24retrieveResourcesForRuleEPNS_9StyleRuleEPNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14PageSerializer30retrieveResourcesForPropertiesEPKNS_15StylePropertiesEPNS_8DocumentE(i1, HEAP32[i2 + 8 >> 2] | 0, i3);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function __ZN7WebCore14PageSerializer8ResourceC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i1 | 0);
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 return;
}
function __ZN7WebCore14PageSerializer8ResourceC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i1 | 0);
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 return;
}
function __ZN7WebCore14PageSerializer9serializeEPNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14PageSerializer14serializeFrameEPNS_5FrameE(i1, HEAP32[i2 + 60 >> 2] | 0);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore27SerializerMarkupAccumulatorD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17MarkupAccumulatorD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore27SerializerMarkupAccumulatorD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17MarkupAccumulatorD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore27SerializerMarkupAccumulatorD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17MarkupAccumulatorD2Ev(i1 | 0);
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
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
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore27SerializerMarkupAccumulatorD0Ev,b0,__ZN7WebCore14PageSerializer8ResourceC2Ev,b0,__ZN7WebCore27SerializerMarkupAccumulatorD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore14PageSerializerC2EPN3WTF6VectorINS0_8ResourceELj0ENS1_15CrashOnOverflowEEE,b1,vii___ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE__wrapper,b1,__ZN7WebCore27SerializerMarkupAccumulator12appendEndTagERKNS_4NodeE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore27SerializerMarkupAccumulator10appendTextERN3WTF13StringBuilderERKNS_4TextE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore27SerializerMarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE,b6,__ZN7WebCore27SerializerMarkupAccumulator22appendCustomAttributesERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE,b6,__ZN7WebCore14PageSerializer8ResourceC2ERKNS_3URLERKN3WTF6StringENS5_10PassRefPtrINS_12SharedBufferEEE,b6,__ZN7WebCore27SerializerMarkupAccumulatorC2ERNS_14PageSerializerERNS_8DocumentEPN3WTF6VectorIPNS_4NodeELj0ENS5_15CrashOnOverflowEEE,b6,b6,b6,b6,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_llvm_trap": _llvm_trap, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames11noscriptTagE": __ZN7WebCore9HTMLNames11noscriptTagE, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames7metaTagE": __ZN7WebCore9HTMLNames7metaTagE, "__ZN7WebCore9HTMLNames8dataAttrE": __ZN7WebCore9HTMLNames8dataAttrE, "__ZN7WebCore9HTMLNames7srcAttrE": __ZN7WebCore9HTMLNames7srcAttrE, "__ZN7WebCore9HTMLNames7headTagE": __ZN7WebCore9HTMLNames7headTagE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames7linkTagE": __ZN7WebCore9HTMLNames7linkTagE, "__ZN7WebCore9HTMLNames8hrefAttrE": __ZN7WebCore9HTMLNames8hrefAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore14PageSerializerC2EPN3WTF6VectorINS0_8ResourceELj0ENS1_15CrashOnOverflowEEE","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore14PageSerializer8ResourceC2Ev","__ZN7WebCore27SerializerMarkupAccumulator22appendCustomAttributesERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE","__ZN7WebCore14PageSerializer9serializeEPNS_4PageE","__ZN3WTF6VectorIN7WebCore14PageSerializer8ResourceELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EcvS3_Ev","__ZN7WebCore27SerializerMarkupAccumulator12appendEndTagERKNS_4NodeE","__ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_NS1_3URLEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS3_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S6_S8_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore14PageSerializer19addImageToResourcesEPNS_11CachedImageEPNS_13RenderElementERKNS_3URLE","__ZN7WebCore14PageSerializer22serializeCSSStyleSheetEPNS_13CSSStyleSheetERKNS_3URLE","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt","__ZN3WTF6VectorIN7WebCore14PageSerializer8ResourceELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_","_memset","__ZN7WebCore14PageSerializer14serializeFrameEPNS_5FrameE","__ZN7WebCore27SerializerMarkupAccumulator10appendTextERN3WTF13StringBuilderERKNS_4TextE","__ZN7WebCoreL19shouldIgnoreElementERKNS_7ElementE","__ZN7WebCore14PageSerializer8ResourceC2ERKNS_3URLERKN3WTF6StringENS5_10PassRefPtrINS_12SharedBufferEEE","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh","__ZN7WebCore27SerializerMarkupAccumulatorC2ERNS_14PageSerializerERNS_8DocumentEPN3WTF6VectorIPNS_4NodeELj0ENS5_15CrashOnOverflowEEE","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES5_EENSt3__14pairIPS5_bEERKT0_","__ZN7WebCore27SerializerMarkupAccumulatorD0Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore14PageSerializer30retrieveResourcesForPropertiesEPKNS_15StylePropertiesEPNS_8DocumentE","__ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_NS1_3URLEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZN3WTF17HashMapTranslatorINS_7HashMapIPN7WebCore5FrameENS2_3URLENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE18KeyValuePairTraitsES7_E9translateINS_12KeyValuePairIS4_S5_EERKS4_RS5_EEvRT_OT0_OT1_","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIN7WebCore3URLELj256EEES5_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS2_7URLHashEEENS_10HashTraitsIS5_EESB_E3addINS_21ListHashSetTranslatorIS8_EERKS3_PNS_24ListHashSetNodeAllocatorIS3_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS5_S5_S6_S9_SB_SB_EEEEOT0_OT1_","__ZN7WebCore27SerializerMarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE","__ZN7WebCore14PageSerializer16urlForBlankFrameEPNS_5FrameE","__ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","_memcpy","__ZN7WebCore27SerializerMarkupAccumulatorD2Ev","__ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_NS1_3URLEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E8reinsertEOS6_","__ZN7WebCore14PageSerializer24retrieveResourcesForRuleEPNS_9StyleRuleEPNS_8DocumentE"]

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
H_BASE = parentModule["_malloc"](144 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 144;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12PrintContextC1EPNS_5FrameE;
var __ZN7WebCore12PrintContextD1Ev;
/* memory initializer */ allocate([41,32,0,0,0,0,0,0,44,32,0,0,0,0,0,0,40,0,0,0,0,0,0,0,112,97,103,101,80,114,111,112,101,114,116,121,40,41,32,117,110,105,109,112,108,101,109,101,110,116,101,100,32,102,111,114,58,32,0,0,0,0,0,0,115,105,122,101,0,0,0,0,102,111,110,116,45,102,97,109,105,108,121,0,0,0,0,0,102,111,110,116,45,115,105,122,101,0,0,0,0,0,0,0,108,105,110,101,45,104,101,105,103,104,116,0,0,0,0,0,97,117,116,111,0,0,0,0,109,97,114,103,105,110,45,108,101,102,116,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var _strncmp=env._strncmp;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _malloc=env._malloc;
  var _free=env._free;
  var _strcmp=env._strcmp;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12PrintContext26pageSizeAndMarginsInPixelsEPNS_5FrameEiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 376 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = i10 + 16 | 0;
 i14 = i10 + 24 | 0;
 i15 = i10 + 32 | 0;
 i16 = i10 + 40 | 0;
 i17 = i10 + 88 | 0;
 i18 = i10 + 136 | 0;
 i19 = i10 + 176 | 0;
 i20 = i10 + 216 | 0;
 i21 = i10 + 248 | 0;
 i22 = i10 + 280 | 0;
 i23 = i10 + 304 | 0;
 i24 = i10 + 328 | 0;
 i25 = i10 + 336 | 0;
 i26 = i10 + 344 | 0;
 i27 = i10 + 352 | 0;
 i28 = i10 + 360 | 0;
 i29 = i10 + 368 | 0;
 HEAP32[i11 >> 2] = i6;
 HEAP32[i12 >> 2] = i7;
 HEAP32[i13 >> 2] = i8;
 HEAP32[i14 >> 2] = i9;
 i9 = i15 | 0;
 HEAP32[i9 >> 2] = i4;
 i4 = i15 + 4 | 0;
 HEAP32[i4 >> 2] = i5;
 __ZN7WebCore8Document26pageSizeAndMarginsInPixelsEiRNS_7IntSizeERiS3_S3_S3_(HEAP32[i2 + 456 >> 2] | 0, i3, i15, i11, i12, i13, i14);
 __ZN3WTF6String6numberEi(i24, HEAP32[i9 >> 2] | 0);
 i9 = i24 | 0;
 i24 = HEAP32[i9 >> 2] | 0;
 if ((i24 | 0) == 0) {
  __ZN3WTF6String6numberEi(i25, HEAP32[i4 >> 2] | 0);
  i30 = 0;
  i31 = 1;
 } else {
  i15 = i24 | 0;
  i3 = HEAP32[i15 >> 2] | 0;
  i2 = i3 + 2 | 0;
  HEAP32[i15 >> 2] = i3 + 4;
  if ((i2 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i24);
   i32 = HEAP32[i15 >> 2] | 0;
  } else {
   HEAP32[i15 >> 2] = i2;
   i32 = i2;
  }
  i2 = i32 + 2 | 0;
  HEAP32[i15 >> 2] = i32 + 4;
  if ((i2 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i24);
   __ZN3WTF6String6numberEi(i25, HEAP32[i4 >> 2] | 0);
  } else {
   HEAP32[i15 >> 2] = i2;
   __ZN3WTF6String6numberEi(i25, HEAP32[i4 >> 2] | 0);
  }
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
  i30 = i24;
  i31 = 0;
 }
 i24 = i25 | 0;
 i25 = HEAP32[i24 >> 2] | 0;
 i15 = (i25 | 0) == 0;
 if (!i15) {
  i4 = i25 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 if (!i31) {
  i4 = i30 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 do {
  if (!i15) {
   i4 = i25 | 0;
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i2 + 2;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if (!i31) {
  i2 = i30 | 0;
  i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
  if ((i4 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i30);
   i33 = HEAP32[i2 >> 2] | 0;
  } else {
   HEAP32[i2 >> 2] = i4;
   i33 = i4;
  }
  HEAP32[i2 >> 2] = i33 + 2;
 }
 if (!i15) {
  i33 = i25 | 0;
  HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 2;
 }
 HEAP32[i23 >> 2] = H_BASE + 24;
 i33 = i23 + 4 | 0;
 HEAP32[i33 >> 2] = i30;
 if (!i31) {
  i2 = i30 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 HEAP32[i23 + 8 >> 2] = H_BASE + 16;
 i2 = i23 + 12 | 0;
 HEAP32[i2 >> 2] = i25;
 do {
  if (i15) {
   HEAP32[i23 + 16 >> 2] = H_BASE + 8;
  } else {
   i4 = i25 | 0;
   i32 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i32 + 2;
   HEAP32[i23 + 16 >> 2] = H_BASE + 8;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i4 >> 2] = i32;
    break;
   }
  }
 } while (0);
 do {
  if (!i31) {
   i32 = i30 | 0;
   i4 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i30);
    break;
   } else {
    HEAP32[i32 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF6String6numberEi(i26, HEAP32[i11 >> 2] | 0);
 __ZN3WTFplINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_(i22, i23, i26);
 __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_cEENS1_INS1_IT_T0_EET1_EERKSB_SC_(i21, i22, 32);
 __ZN3WTF6String6numberEi(i27, HEAP32[i12 >> 2] | 0);
 __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcS4_EENS1_INS1_IT_T0_EET1_EERKSC_SD_(i20, i21, i27);
 __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_cEENS1_INS1_IT_T0_EET1_EERKSD_SE_(i19, i20, 32);
 __ZN3WTF6String6numberEi(i28, HEAP32[i13 >> 2] | 0);
 __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_EEcS4_EENS1_INS1_IT_T0_EET1_EERKSE_SF_(i18, i19, i28);
 __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_EEcEES4_cEENS1_INS1_IT_T0_EET1_EERKSF_SG_(i17, i18, 32);
 __ZN3WTF6String6numberEi(i29, HEAP32[i14 >> 2] | 0);
 __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_EEcEES4_EEcS4_EENS1_INS1_IT_T0_EET1_EERKSG_SH_(i16, i17, i29);
 __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcEES3_EEcEES3_EcvS3_Ev(i1, i16);
 i1 = HEAP32[i16 + 44 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i14 = i1 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i16 + 36 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i16 + 28 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i14 = i1 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i16 + 20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i16 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i14 = i1 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i16 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i16 = i1 | 0;
   i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i16 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i29 = i1 | 0;
   i13 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i29 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i17 + 36 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i29 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i29 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i29;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i17 + 28 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i29 = i1 | 0;
   i13 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i29 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i17 + 20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i29 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i29 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i29;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i17 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i29 = i1 | 0;
   i13 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i29 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i17 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i17 = i1 | 0;
   i13 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i17 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i18 + 36 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i17 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i18 + 28 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i17 = i1 | 0;
   i13 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i17 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i18 + 20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i17 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i18 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i17 = i1 | 0;
   i13 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i17 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i18 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i18 = i1 | 0;
   i13 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i18 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i28 = i1 | 0;
   i13 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i28 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i19 + 28 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i28 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i28;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i19 + 20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i28 = i1 | 0;
   i13 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i28 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i19 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i28 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i28;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i19 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i19 = i1 | 0;
   i28 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i19 >> 2] = i28;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i20 + 28 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i28 = i1 | 0;
   i19 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i28 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i20 + 20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i19 = i1 | 0;
   i28 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i19 >> 2] = i28;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i20 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i28 = i1 | 0;
   i19 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i28 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i20 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i20 = i1 | 0;
   i19 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i20 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i27 = i1 | 0;
   i19 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i27 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i21 + 20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i19 = i1 | 0;
   i27 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i19 >> 2] = i27;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i21 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i27 = i1 | 0;
   i19 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i27 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i21 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i21 = i1 | 0;
   i19 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i21 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i22 + 20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i19 = i1 | 0;
   i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i19 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i22 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i21 = i1 | 0;
   i19 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i21 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i22 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i22 = i1 | 0;
   i19 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i22 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i26 = i1 | 0;
   i19 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i26 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i2 = i1 | 0;
   i19 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i2 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i33 = i1 | 0;
   i19 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i33 >> 2] = i19;
    break;
   }
  }
 } while (0);
 do {
  if (!i15) {
   i1 = i25 | 0;
   i19 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i1 >> 2] = i19;
    break;
   }
  }
 } while (0);
 do {
  if (!i31) {
   i25 = i30 | 0;
   i15 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i30);
    break;
   } else {
    HEAP32[i25 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i24 = i15 | 0;
   i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i24 >> 2] = i25;
    break;
   }
  }
 } while (0);
 do {
  if (!i31) {
   i15 = i30 | 0;
   i25 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i30);
   } else {
    HEAP32[i15 >> 2] = i25;
   }
   i25 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i30);
    break;
   } else {
    HEAP32[i15 >> 2] = i25;
    break;
   }
  }
 } while (0);
 i30 = HEAP32[i9 >> 2] | 0;
 if ((i30 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i9 = i30 | 0;
 i31 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i31 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i30);
  STACKTOP = i10;
  return;
 } else {
  HEAP32[i9 >> 2] = i31;
  STACKTOP = i10;
  return;
 }
}
function __ZN7WebCore12PrintContext36computePageRectsWithPageSizeInternalERKNS_9FloatSizeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = HEAP32[i1 >> 2] | 0;
 i13 = HEAP32[i12 + 456 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i12 + 452 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i13 + 1584 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore10RenderView12documentRectEv(i5, i12);
 i13 = ~~+HEAPF32[i2 >> 2];
 i14 = ~~+HEAPF32[i2 + 4 >> 2];
 i2 = HEAP32[i12 + 36 >> 2] | 0;
 i12 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 i15 = (i12 | 0) == 0;
 i16 = (i12 | 0) == 3;
 i17 = i15 | i16;
 if ((i12 | 0) == 3 | (i12 | 0) == 0) {
  i18 = HEAP32[i5 + 12 >> 2] | 0;
 } else {
  i18 = HEAP32[i5 + 8 >> 2] | 0;
 }
 i19 = i17 ? i14 : i13;
 i20 = i17 ? i13 : i14;
 if ((i12 | 0) == 0) {
  i14 = HEAP32[i5 + 4 >> 2] | 0;
  i21 = i14;
  i22 = (HEAP32[i5 + 12 >> 2] | 0) + i14 | 0;
  i23 = 10;
 } else if ((i12 | 0) == 1) {
  i14 = HEAP32[i5 >> 2] | 0;
  i24 = (HEAP32[i5 + 8 >> 2] | 0) + i14 | 0;
  i25 = i14;
  i23 = 13;
 } else if ((i12 | 0) == 3) {
  i14 = HEAP32[i5 + 4 >> 2] | 0;
  i21 = (HEAP32[i5 + 12 >> 2] | 0) + i14 | 0;
  i22 = i14;
  i23 = 10;
 } else {
  i14 = HEAP32[i5 >> 2] | 0;
  i24 = i14;
  i25 = (HEAP32[i5 + 8 >> 2] | 0) + i14 | 0;
  i23 = 13;
 }
 if ((i23 | 0) == 10) {
  i14 = (HEAP32[i2 + 40 >> 2] & 1073741824 | 0) == 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i17 = (HEAP32[i5 + 8 >> 2] | 0) + i13 | 0;
  i26 = i14 ? i17 : i13;
  i27 = i14 ? i13 : i17;
  i28 = i21;
  i29 = i22;
 } else if ((i23 | 0) == 13) {
  i22 = (HEAP32[i2 + 40 >> 2] & 1073741824 | 0) == 0;
  i2 = HEAP32[i5 + 4 >> 2] | 0;
  i21 = (HEAP32[i5 + 12 >> 2] | 0) + i2 | 0;
  i26 = i22 ? i21 : i2;
  i27 = i22 ? i2 : i21;
  i28 = i24;
  i29 = i25;
 }
 i25 = ~~+Math_ceil(+(i18 | 0) / +(i19 | 0));
 if ((i25 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i18 = (i29 | 0) > (i28 | 0);
 i29 = (i26 | 0) < (i27 | 0);
 i24 = (i26 | 0) == (i27 | 0);
 i21 = i29 ? 0 : i20;
 i2 = i6;
 i22 = i8 + 4 | 0;
 i5 = i6 + 8 | 0;
 i17 = i5;
 i13 = i8 + 12 | 0;
 i14 = i19;
 i30 = 0;
 i31 = i1 + 4 | 0;
 i32 = i1 + 12 | 0;
 i33 = i1 + 8 | 0;
 i1 = i31 | 0;
 i34 = i6;
 i35 = i29 ? i20 : -i20 | 0;
 i36 = i6;
 i6 = i26 - i21 | 0;
 i37 = i9;
 i38 = i11 + 4 | 0;
 i39 = i9 + 8 | 0;
 i40 = i39;
 i41 = i11 + 12 | 0;
 i42 = i9;
 i43 = i9;
 i9 = 0;
 while (1) {
  if (i18) {
   i44 = (Math_imul(i9, i19) | 0) + i28 | 0;
  } else {
   i44 = i28 - (Math_imul(i9 + 1 | 0, i19) | 0) | 0;
  }
  L32 : do {
   if (i3) {
    if (i24) {
     break;
    }
    if (i16) {
     i45 = i26;
     while (1) {
      HEAP32[i2 >> 2] = i45 - i21;
      HEAP32[i22 >> 2] = i44;
      HEAP32[i17 >> 2] = i20;
      HEAP32[i13 >> 2] = i19;
      i46 = HEAP32[i32 >> 2] | 0;
      if ((i46 | 0) == (HEAP32[i33 >> 2] | 0)) {
       i47 = i46 + 1 | 0;
       i48 = HEAP32[i1 >> 2] | 0;
       do {
        if (i48 >>> 0 > i8 >>> 0) {
         i23 = 28;
        } else {
         if ((i48 + (i46 << 4) | 0) >>> 0 <= i8 >>> 0) {
          i23 = 28;
          break;
         }
         __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i47);
         i49 = HEAP32[i1 >> 2] | 0;
         i50 = i49 + (i34 - i48 >> 4 << 4) | 0;
         i51 = i49;
        }
       } while (0);
       if ((i23 | 0) == 28) {
        i23 = 0;
        __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i47);
        i50 = i8;
        i51 = HEAP32[i1 >> 2] | 0;
       }
       i48 = i51 + (HEAP32[i32 >> 2] << 4) | 0;
       i49 = i50;
       HEAP32[i48 >> 2] = HEAP32[i49 >> 2];
       HEAP32[i48 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
       HEAP32[i48 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
       HEAP32[i48 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
      } else {
       i49 = (HEAP32[i1 >> 2] | 0) + (i46 << 4) | 0;
       HEAP32[i49 >> 2] = HEAP32[i36 >> 2];
       HEAP32[i49 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
       HEAP32[i49 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
       HEAP32[i49 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
      }
      HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      i45 = i45 + i35 | 0;
      if (!(i29 ? (i45 | 0) < (i27 | 0) : (i45 | 0) > (i27 | 0))) {
       break L32;
      }
     }
    }
    if (i15) {
     i45 = i26;
     while (1) {
      HEAP32[i2 >> 2] = i45 - i21;
      HEAP32[i22 >> 2] = i44;
      HEAP32[i17 >> 2] = i20;
      HEAP32[i13 >> 2] = i19;
      i49 = HEAP32[i32 >> 2] | 0;
      if ((i49 | 0) == (HEAP32[i33 >> 2] | 0)) {
       i48 = i49 + 1 | 0;
       i52 = HEAP32[i1 >> 2] | 0;
       do {
        if (i52 >>> 0 > i8 >>> 0) {
         i23 = 36;
        } else {
         if ((i52 + (i49 << 4) | 0) >>> 0 <= i8 >>> 0) {
          i23 = 36;
          break;
         }
         __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i48);
         i53 = HEAP32[i1 >> 2] | 0;
         i54 = i53 + (i34 - i52 >> 4 << 4) | 0;
         i55 = i53;
        }
       } while (0);
       if ((i23 | 0) == 36) {
        i23 = 0;
        __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i48);
        i54 = i8;
        i55 = HEAP32[i1 >> 2] | 0;
       }
       i52 = i55 + (HEAP32[i32 >> 2] << 4) | 0;
       i46 = i54;
       HEAP32[i52 >> 2] = HEAP32[i46 >> 2];
       HEAP32[i52 + 4 >> 2] = HEAP32[i46 + 4 >> 2];
       HEAP32[i52 + 8 >> 2] = HEAP32[i46 + 8 >> 2];
       HEAP32[i52 + 12 >> 2] = HEAP32[i46 + 12 >> 2];
      } else {
       i46 = (HEAP32[i1 >> 2] | 0) + (i49 << 4) | 0;
       HEAP32[i46 >> 2] = HEAP32[i36 >> 2];
       HEAP32[i46 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
       HEAP32[i46 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
       HEAP32[i46 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
      }
      HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      i45 = i45 + i35 | 0;
      if (!(i29 ? (i45 | 0) < (i27 | 0) : (i45 | 0) > (i27 | 0))) {
       break L32;
      }
     }
    } else {
     i56 = i26;
    }
    while (1) {
     i45 = i56 - i21 | 0;
     HEAP32[i2 >> 2] = i45;
     HEAP32[i22 >> 2] = i44;
     HEAP32[i17 >> 2] = i20;
     HEAP32[i13 >> 2] = i19;
     if (!((i12 | 0) == 3 | (i12 | 0) == 0)) {
      HEAP32[i7 >> 2] = i44;
      HEAP32[i7 + 4 >> 2] = i45;
      HEAP32[i5 >> 2] = i14;
      HEAP32[i5 + 4 >> 2] = i20 | i30;
     }
     i45 = HEAP32[i32 >> 2] | 0;
     if ((i45 | 0) == (HEAP32[i33 >> 2] | 0)) {
      i46 = i45 + 1 | 0;
      i52 = HEAP32[i1 >> 2] | 0;
      do {
       if (i52 >>> 0 > i8 >>> 0) {
        i23 = 45;
       } else {
        if ((i52 + (i45 << 4) | 0) >>> 0 <= i8 >>> 0) {
         i23 = 45;
         break;
        }
        __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i46);
        i47 = HEAP32[i1 >> 2] | 0;
        i57 = i47 + (i34 - i52 >> 4 << 4) | 0;
        i58 = i47;
       }
      } while (0);
      if ((i23 | 0) == 45) {
       i23 = 0;
       __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i46);
       i57 = i8;
       i58 = HEAP32[i1 >> 2] | 0;
      }
      i52 = i58 + (HEAP32[i32 >> 2] << 4) | 0;
      i49 = i57;
      HEAP32[i52 >> 2] = HEAP32[i49 >> 2];
      HEAP32[i52 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
      HEAP32[i52 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
      HEAP32[i52 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
     } else {
      i49 = (HEAP32[i1 >> 2] | 0) + (i45 << 4) | 0;
      HEAP32[i49 >> 2] = HEAP32[i36 >> 2];
      HEAP32[i49 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
      HEAP32[i49 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
      HEAP32[i49 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
     }
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
     i56 = i56 + i35 | 0;
     if (!(i29 ? (i56 | 0) < (i27 | 0) : (i56 | 0) > (i27 | 0))) {
      break;
     }
    }
   } else {
    HEAP32[i37 >> 2] = i6;
    HEAP32[i38 >> 2] = i44;
    HEAP32[i40 >> 2] = i20;
    HEAP32[i41 >> 2] = i19;
    if (!((i12 | 0) == 3 | (i12 | 0) == 0)) {
     HEAP32[i10 >> 2] = i44;
     HEAP32[i10 + 4 >> 2] = i6;
     HEAP32[i39 >> 2] = i14;
     HEAP32[i39 + 4 >> 2] = i20 | i30;
    }
    i49 = HEAP32[i32 >> 2] | 0;
    if ((i49 | 0) != (HEAP32[i33 >> 2] | 0)) {
     i52 = (HEAP32[i1 >> 2] | 0) + (i49 << 4) | 0;
     HEAP32[i52 >> 2] = HEAP32[i43 >> 2];
     HEAP32[i52 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
     HEAP32[i52 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
     HEAP32[i52 + 12 >> 2] = HEAP32[i43 + 12 >> 2];
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
     break;
    }
    i52 = i49 + 1 | 0;
    i48 = HEAP32[i1 >> 2] | 0;
    do {
     if (i48 >>> 0 > i11 >>> 0) {
      i23 = 55;
     } else {
      if ((i48 + (i49 << 4) | 0) >>> 0 <= i11 >>> 0) {
       i23 = 55;
       break;
      }
      __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i52);
      i47 = HEAP32[i1 >> 2] | 0;
      i59 = i47 + (i42 - i48 >> 4 << 4) | 0;
      i60 = i47;
     }
    } while (0);
    if ((i23 | 0) == 55) {
     i23 = 0;
     __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i52);
     i59 = i11;
     i60 = HEAP32[i1 >> 2] | 0;
    }
    i48 = i60 + (HEAP32[i32 >> 2] << 4) | 0;
    i49 = i59;
    HEAP32[i48 >> 2] = HEAP32[i49 >> 2];
    HEAP32[i48 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
    HEAP32[i48 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
    HEAP32[i48 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   }
  } while (0);
  i9 = i9 + 1 | 0;
  if (i9 >>> 0 >= i25 >>> 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12PrintContext12pagePropertyEPNS_5FrameEPKci(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, i22 = 0, d23 = +0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, d28 = +0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
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
 i16 = i5 + 88 | 0;
 i17 = i5 + 96 | 0;
 i18 = i5 + 104 | 0;
 i19 = HEAP32[i2 + 456 >> 2] | 0;
 HEAPF32[i8 >> 2] = +800;
 HEAPF32[i8 + 4 >> 2] = +0;
 HEAPF32[i10 >> 2] = +1e3;
 HEAPF32[i10 + 4 >> 2] = +0;
 __ZN7WebCore5Frame27resizePageRectsKeepingRatioERKNS_9FloatSizeES3_(i9, i2, i8, i10);
 __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i2, 1, i9, i8, 1.600000023841858, 1);
 __ZN7WebCore8Document12updateLayoutEv(i19);
 i8 = i19 + 320 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i19);
  i20 = HEAP32[i8 >> 2] | 0;
 } else {
  i20 = i9;
 }
 __ZN7WebCore13StyleResolver12styleForPageEi(i13, i20, i4);
 i4 = HEAP32[i13 >> 2] | 0;
 do {
  if ((_strcmp(i3 | 0, H_BASE + 136 | 0) | 0) == 0) {
   i13 = HEAP32[i4 + 16 >> 2] | 0;
   i20 = i13 + 36 | 0;
   if ((HEAP8[i13 + 41 | 0] | 0) == 0) {
    __ZN3WTF6StringC1EPKc(i1, H_BASE + 128 | 0);
    break;
   }
   if ((HEAP8[i13 + 42 | 0] & 1) == 0) {
    d21 = +(HEAP32[i20 >> 2] | 0);
   } else {
    d21 = +HEAPF32[i20 >> 2];
   }
   __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i1, d21, 6, 1);
   i22 = 86;
  } else {
   if ((_strcmp(i3 | 0, H_BASE + 112 | 0) | 0) == 0) {
    __ZNK7WebCore11RenderStyle10lineHeightEv(i14, i4);
    if ((HEAP8[i14 + 6 | 0] & 1) == 0) {
     d23 = +(HEAP32[i14 >> 2] | 0);
    } else {
     d23 = +HEAPF32[i14 >> 2];
    }
    __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i1, d23, 6, 1);
    if ((HEAP8[i14 + 5 | 0] | 0) != 10) {
     i22 = 86;
     break;
    }
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
    i22 = 86;
    break;
   }
   if ((_strcmp(i3 | 0, H_BASE + 96 | 0) | 0) == 0) {
    __ZN3WTF6String6numberEi(i1, ~~(+HEAPF32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(i4) | 0) + 12 >> 2] + +.5));
    i22 = 86;
    break;
   }
   if ((_strcmp(i3 | 0, H_BASE + 80 | 0) | 0) == 0) {
    i20 = HEAP32[HEAP32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(i4) | 0) >> 2] >> 2] | 0;
    HEAP32[i1 >> 2] = i20;
    if ((i20 | 0) == 0) {
     i22 = 86;
     break;
    }
    i13 = i20 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    i22 = 86;
    break;
   }
   if ((_strcmp(i3 | 0, H_BASE + 72 | 0) | 0) != 0) {
    __ZN3WTF6StringC1EPKc(i18, H_BASE + 32 | 0);
    i13 = i18 | 0;
    i20 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i20 | 0) == 0) {
      i24 = 0;
     } else {
      i9 = i20 | 0;
      i8 = HEAP32[i9 >> 2] | 0;
      i19 = i8 + 2 | 0;
      HEAP32[i9 >> 2] = i8 + 4;
      if ((i19 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i20);
       i24 = i20;
       break;
      } else {
       HEAP32[i9 >> 2] = i19;
       i24 = i20;
       break;
      }
     }
    } while (0);
    i20 = i7 | 0;
    HEAP32[i20 >> 2] = i24;
    i19 = (i24 | 0) == 0;
    if (!i19) {
     i9 = i24 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    }
    __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i6, i7, i3);
    i9 = i6 | 0;
    i8 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    i9 = HEAP32[i20 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i20 = i9 | 0;
      i10 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i20 >> 2] = i10;
       break;
      }
     }
    } while (0);
    if ((i8 | 0) == 0) {
     _WTFCrash();
    }
    HEAP32[i1 >> 2] = i8;
    do {
     if (!i19) {
      i9 = i24 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i24);
       break;
      } else {
       HEAP32[i9 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i19 = HEAP32[i13 >> 2] | 0;
    if ((i19 | 0) == 0) {
     i22 = 86;
     break;
    }
    i8 = i19 | 0;
    i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i19);
     i22 = 86;
     break;
    } else {
     HEAP32[i8 >> 2] = i10;
     i22 = 86;
     break;
    }
   }
   i10 = i4 + 20 | 0;
   i8 = HEAP32[i10 >> 2] | 0;
   i19 = i8 + 168 | 0;
   if ((HEAP8[i8 + 174 | 0] & 1) == 0) {
    d25 = +(HEAP32[i19 >> 2] | 0);
   } else {
    d25 = +HEAPF32[i19 >> 2];
   }
   __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i16, d25, 6, 1);
   i19 = i16 | 0;
   i8 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i26 = 0;
    } else {
     i9 = i8 | 0;
     i20 = HEAP32[i9 >> 2] | 0;
     i27 = i20 + 2 | 0;
     HEAP32[i9 >> 2] = i20 + 4;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      i26 = i8;
      break;
     } else {
      HEAP32[i9 >> 2] = i27;
      i26 = i8;
      break;
     }
    }
   } while (0);
   i8 = HEAP32[i10 >> 2] | 0;
   i13 = i8 + 176 | 0;
   if ((HEAP8[i8 + 182 | 0] & 1) == 0) {
    d28 = +(HEAP32[i13 >> 2] | 0);
   } else {
    d28 = +HEAPF32[i13 >> 2];
   }
   __ZN3WTF6String6numberEdjNS_29TrailingZerosTruncatingPolicyE(i17, d28, 6, 1);
   i13 = (i26 | 0) == 0;
   if (!i13) {
    i8 = i26 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i17 | 0;
   i27 = HEAP32[i8 >> 2] | 0;
   i9 = (i27 | 0) == 0;
   if (!i9) {
    i20 = i27 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
   }
   i20 = i15 | 0;
   HEAP32[i20 >> 2] = i26;
   if (!i13) {
    i29 = i26 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
   }
   HEAP8[i15 + 4 | 0] = 32;
   i29 = i15 + 8 | 0;
   HEAP32[i29 >> 2] = i27;
   do {
    if (!i9) {
     i30 = i27 | 0;
     i31 = HEAP32[i30 >> 2] | 0;
     HEAP32[i30 >> 2] = i31 + 2;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i30 >> 2] = i31;
      break;
     }
    }
   } while (0);
   do {
    if (!i13) {
     i27 = i26 | 0;
     i9 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i27 >> 2] = i9;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS0_INS_6StringEcEES1_EcvS1_Ev(i1, i15);
   i9 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i27 = i9 | 0;
     i10 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i27 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i29 = i9 | 0;
     i10 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i29 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i20 = i9 | 0;
     i10 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i20 >> 2] = i10;
      break;
     }
    }
   } while (0);
   do {
    if (!i13) {
     i9 = i26 | 0;
     i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i9 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i19 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i22 = 86;
    break;
   }
   i8 = i13 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    i22 = 86;
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    i22 = 86;
    break;
   }
  }
 } while (0);
 do {
  if ((i22 | 0) == 86) {
   if ((i4 | 0) != 0) {
    break;
   }
   i32 = i11;
   i33 = i12;
   i34 = i11 | 0;
   HEAPF32[i34 >> 2] = +0;
   i35 = i11 + 4 | 0;
   HEAPF32[i35 >> 2] = +0;
   i36 = i12 | 0;
   HEAPF32[i36 >> 2] = +0;
   i37 = i12 + 4 | 0;
   HEAPF32[i37 >> 2] = +0;
   __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i2, 0, i11, i12, +0, 1);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i22 = i4 | 0;
 i26 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 if ((i26 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  i32 = i11;
  i33 = i12;
  i34 = i11 | 0;
  HEAPF32[i34 >> 2] = +0;
  i35 = i11 + 4 | 0;
  HEAPF32[i35 >> 2] = +0;
  i36 = i12 | 0;
  HEAPF32[i36 >> 2] = +0;
  i37 = i12 + 4 | 0;
  HEAPF32[i37 >> 2] = +0;
  __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i2, 0, i11, i12, +0, 1);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i22 >> 2] = i26;
  i32 = i11;
  i33 = i12;
  i34 = i11 | 0;
  HEAPF32[i34 >> 2] = +0;
  i35 = i11 + 4 | 0;
  HEAPF32[i35 >> 2] = +0;
  i36 = i12 | 0;
  HEAPF32[i36 >> 2] = +0;
  i37 = i12 + 4 | 0;
  HEAPF32[i37 >> 2] = +0;
  __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i2, 0, i11, i12, +0, 1);
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_INS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_EEcEES4_EEcEES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 16 | 0;
 i8 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i9 = i2 + 8 | 0;
 i10 = _strlen(HEAP32[i9 >> 2] | 0) | 0;
 i11 = i2 | 0;
 i12 = _strlen(HEAP32[i11 >> 2] | 0) | 0;
 i13 = i2 + 4 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = (i14 | 0) == 0;
 if (i15) {
  i16 = 0;
 } else {
  i16 = HEAP32[i14 + 4 >> 2] | 0;
 }
 i17 = i2 + 12 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = (i18 | 0) == 0;
 if (i19) {
  i20 = 0;
 } else {
  i20 = HEAP32[i18 + 4 >> 2] | 0;
 }
 i21 = i2 + 20 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 i23 = (i22 | 0) == 0;
 if (i23) {
  i24 = 0;
 } else {
  i24 = HEAP32[i22 + 4 >> 2] | 0;
 }
 i25 = i2 + 28 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 i27 = (i26 | 0) == 0;
 if (i27) {
  i28 = 0;
 } else {
  i28 = HEAP32[i26 + 4 >> 2] | 0;
 }
 i29 = i2 + 36 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 i31 = (i30 | 0) == 0;
 if (i31) {
  i32 = 0;
 } else {
  i32 = HEAP32[i30 + 4 >> 2] | 0;
 }
 i33 = i3 | 0;
 i3 = HEAP32[i33 >> 2] | 0;
 i34 = (i3 | 0) == 0;
 if (i34) {
  i35 = 0;
 } else {
  i35 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i36 = _llvm_uadd_with_overflow_i32(i8 + 3 + i10 + i12 + i16 + i20 + i24 + i28 + i32 | 0, i35 | 0) | 0;
 i35 = i36;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i15) {
  i37 = 17;
 } else {
  if ((HEAP32[i14 + 16 >> 2] & 32 | 0) != 0) {
   i37 = 17;
  }
 }
 do {
  if ((i37 | 0) == 17) {
   if (!i19) {
    if ((HEAP32[i18 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i23) {
    if ((HEAP32[i22 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i27) {
    if ((HEAP32[i26 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i31) {
    if ((HEAP32[i30 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i34) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i35 | 0) == 0) {
     i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i14 | 0) == 0) {
      i37 = 48;
      break;
     }
     i15 = i14 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
     i38 = i14;
     i39 = 0;
    } else {
     if (i35 >>> 0 > 4294967275 >>> 0) {
      i37 = 48;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i35 + 20 | 0);
     i14 = i6 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     if ((i15 | 0) == 0) {
      i37 = 48;
      break;
     }
     i14 = i15 + 20 | 0;
     HEAP32[i15 >> 2] = 2;
     HEAP32[i15 + 4 >> 2] = i35;
     HEAP32[i15 + 8 >> 2] = i14;
     HEAP32[i15 + 12 >> 2] = 0;
     HEAP32[i15 + 16 >> 2] = 32;
     i38 = i15;
     i39 = i14;
    }
   } while (0);
   if ((i37 | 0) == 48) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcEES3_EEcE7writeToEPh(i2, i39);
   i14 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
   i15 = _strlen(HEAP32[i9 >> 2] | 0) | 0;
   i36 = _strlen(HEAP32[i11 >> 2] | 0) | 0;
   i32 = HEAP32[i13 >> 2] | 0;
   if ((i32 | 0) == 0) {
    i40 = 0;
   } else {
    i40 = HEAP32[i32 + 4 >> 2] | 0;
   }
   i32 = HEAP32[i17 >> 2] | 0;
   if ((i32 | 0) == 0) {
    i41 = 0;
   } else {
    i41 = HEAP32[i32 + 4 >> 2] | 0;
   }
   i32 = HEAP32[i21 >> 2] | 0;
   if ((i32 | 0) == 0) {
    i42 = 0;
   } else {
    i42 = HEAP32[i32 + 4 >> 2] | 0;
   }
   i32 = HEAP32[i25 >> 2] | 0;
   if ((i32 | 0) == 0) {
    i43 = 0;
   } else {
    i43 = HEAP32[i32 + 4 >> 2] | 0;
   }
   i32 = HEAP32[i29 >> 2] | 0;
   if ((i32 | 0) == 0) {
    i44 = 0;
   } else {
    i44 = HEAP32[i32 + 4 >> 2] | 0;
   }
   i32 = HEAP32[i33 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i28 = HEAP32[i32 + 4 >> 2] | 0;
     i24 = HEAP32[i32 + 8 >> 2] | 0;
     if ((i28 | 0) == 0) {
      break;
     }
     i20 = i14 + 3 + i15 + i36 + i40 + i41 + i42 + i43 + i44 | 0;
     i16 = 0;
     while (1) {
      HEAP8[i39 + (i20 + i16) | 0] = HEAP8[i24 + i16 | 0] | 0;
      i16 = i16 + 1 | 0;
      if (i16 >>> 0 >= i28 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i38;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i35 | 0) == 0) {
   i38 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i38 | 0) == 0) {
    i37 = 82;
    break;
   }
   i39 = i38 | 0;
   HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 2;
   i45 = i38;
   i46 = 0;
  } else {
   if (i35 >>> 0 > 2147483637 >>> 0) {
    i37 = 82;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i35 << 1) + 20 | 0);
   i38 = i5 | 0;
   i39 = HEAP32[i38 >> 2] | 0;
   HEAP32[i38 >> 2] = 0;
   if ((i39 | 0) == 0) {
    i37 = 82;
    break;
   }
   i38 = i39 + 20 | 0;
   HEAP32[i39 >> 2] = 2;
   HEAP32[i39 + 4 >> 2] = i35;
   HEAP32[i39 + 8 >> 2] = i38;
   HEAP32[i39 + 12 >> 2] = 0;
   HEAP32[i39 + 16 >> 2] = 0;
   i45 = i39;
   i46 = i38;
  }
 } while (0);
 if ((i37 | 0) == 82) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i37 = HEAP8[i2 + 40 | 0] | 0;
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcEES3_E7writeToEPt(i2 | 0, i46);
 i2 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i35 = _strlen(HEAP32[i9 >> 2] | 0) | 0;
 i5 = _strlen(HEAP32[i11 >> 2] | 0) | 0;
 i38 = HEAP32[i13 >> 2] | 0;
 if ((i38 | 0) == 0) {
  i47 = 0;
 } else {
  i47 = HEAP32[i38 + 4 >> 2] | 0;
 }
 i38 = HEAP32[i17 >> 2] | 0;
 if ((i38 | 0) == 0) {
  i48 = 0;
 } else {
  i48 = HEAP32[i38 + 4 >> 2] | 0;
 }
 i38 = HEAP32[i21 >> 2] | 0;
 if ((i38 | 0) == 0) {
  i49 = 0;
 } else {
  i49 = HEAP32[i38 + 4 >> 2] | 0;
 }
 i38 = HEAP32[i25 >> 2] | 0;
 if ((i38 | 0) == 0) {
  i50 = 0;
 } else {
  i50 = HEAP32[i38 + 4 >> 2] | 0;
 }
 i38 = HEAP32[i29 >> 2] | 0;
 if ((i38 | 0) == 0) {
  i51 = 0;
 } else {
  i51 = HEAP32[i38 + 4 >> 2] | 0;
 }
 HEAP16[i46 + (i2 + 2 + i35 + i5 + i47 + i48 + i49 + i50 + i51 << 1) >> 1] = i37 & 255;
 i37 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i7 = _strlen(HEAP32[i9 >> 2] | 0) | 0;
 i9 = _strlen(HEAP32[i11 >> 2] | 0) | 0;
 i11 = HEAP32[i13 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i52 = 0;
 } else {
  i52 = HEAP32[i11 + 4 >> 2] | 0;
 }
 i11 = HEAP32[i17 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i53 = 0;
 } else {
  i53 = HEAP32[i11 + 4 >> 2] | 0;
 }
 i11 = HEAP32[i21 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i54 = 0;
 } else {
  i54 = HEAP32[i11 + 4 >> 2] | 0;
 }
 i11 = HEAP32[i25 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i55 = 0;
 } else {
  i55 = HEAP32[i11 + 4 >> 2] | 0;
 }
 i11 = HEAP32[i29 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i56 = 0;
 } else {
  i56 = HEAP32[i11 + 4 >> 2] | 0;
 }
 i11 = i37 + 3 + i7 + i9 + i52 + i53 + i54 + i55 + i56 | 0;
 i56 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i56 | 0) != 0) {
   i33 = HEAP32[i56 + 4 >> 2] | 0;
   if ((HEAP32[i56 + 16 >> 2] & 32 | 0) == 0) {
    i55 = HEAP32[i56 + 8 >> 2] | 0;
    if ((i33 | 0) == 0) {
     break;
    } else {
     i57 = 0;
    }
    while (1) {
     HEAP16[i46 + (i57 + i11 << 1) >> 1] = HEAP16[i55 + (i57 << 1) >> 1] | 0;
     i57 = i57 + 1 | 0;
     if (i57 >>> 0 >= i33 >>> 0) {
      break;
     }
    }
   } else {
    i55 = HEAP32[i56 + 8 >> 2] | 0;
    if ((i33 | 0) == 0) {
     break;
    } else {
     i58 = 0;
    }
    while (1) {
     HEAP16[i46 + (i58 + i11 << 1) >> 1] = HEAPU8[i55 + i58 | 0] | 0;
     i58 = i58 + 1 | 0;
     if (i58 >>> 0 >= i33 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i45;
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (i9) {
  i10 = 1;
 } else {
  i10 = (HEAP32[i8 + 4 >> 2] | 0) + 1 | 0;
 }
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 i12 = (i3 | 0) == 0;
 if (i12) {
  i13 = 0;
 } else {
  i13 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i14 = _llvm_uadd_with_overflow_i32(i10 | 0, i13 | 0) | 0;
 i13 = i14;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i9) {
  i15 = 9;
 } else {
  if ((HEAP32[i8 + 16 >> 2] & 32 | 0) != 0) {
   i15 = 9;
  }
 }
 do {
  if ((i15 | 0) == 9) {
   if (!i12) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i13 | 0) == 0) {
     i8 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i8 | 0) == 0) {
      i15 = 28;
      break;
     }
     i9 = i8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
     i16 = i8;
     i17 = 0;
    } else {
     if (i13 >>> 0 > 4294967275 >>> 0) {
      i15 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i13 + 20 | 0);
     i8 = i6 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     if ((i9 | 0) == 0) {
      i15 = 28;
      break;
     }
     i8 = i9 + 20 | 0;
     HEAP32[i9 >> 2] = 2;
     HEAP32[i9 + 4 >> 2] = i13;
     HEAP32[i9 + 8 >> 2] = i8;
     HEAP32[i9 + 12 >> 2] = 0;
     HEAP32[i9 + 16 >> 2] = 32;
     i16 = i9;
     i17 = i8;
    }
   } while (0);
   if ((i15 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i8 = HEAP8[i2 + 4 | 0] | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i18 = 0;
    } else {
     i14 = HEAP32[i9 + 4 >> 2] | 0;
     i10 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i18 = 0;
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i17 + i19 | 0] = HEAP8[i10 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
     i14 = HEAP32[i7 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i18 = 0;
      break;
     }
     i18 = HEAP32[i14 + 4 >> 2] | 0;
    }
   } while (0);
   HEAP8[i17 + i18 | 0] = i8;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i20 = 1;
   } else {
    i20 = (HEAP32[i9 + 4 >> 2] | 0) + 1 | 0;
   }
   i9 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i14 = HEAP32[i9 + 4 >> 2] | 0;
     i10 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     } else {
      i21 = 0;
     }
     while (1) {
      HEAP8[i17 + (i21 + i20) | 0] = HEAP8[i10 + i21 | 0] | 0;
      i21 = i21 + 1 | 0;
      if (i21 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i16;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i13 | 0) == 0) {
   i16 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i16 | 0) == 0) {
    i15 = 52;
    break;
   }
   i21 = i16 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
   i22 = i16;
   i23 = 0;
  } else {
   if (i13 >>> 0 > 2147483637 >>> 0) {
    i15 = 52;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i13 << 1) + 20 | 0);
   i16 = i5 | 0;
   i21 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   if ((i21 | 0) == 0) {
    i15 = 52;
    break;
   }
   i16 = i21 + 20 | 0;
   HEAP32[i21 >> 2] = 2;
   HEAP32[i21 + 4 >> 2] = i13;
   HEAP32[i21 + 8 >> 2] = i16;
   HEAP32[i21 + 12 >> 2] = 0;
   HEAP32[i21 + 16 >> 2] = 0;
   i22 = i21;
   i23 = i16;
  }
 } while (0);
 if ((i15 | 0) == 52) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i15 = HEAP8[i2 + 4 | 0] | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i24 = 0;
  } else {
   i13 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     } else {
      i25 = 0;
     }
     while (1) {
      HEAP16[i23 + (i25 << 1) >> 1] = HEAP16[i5 + (i25 << 1) >> 1] | 0;
      i25 = i25 + 1 | 0;
      if (i25 >>> 0 >= i13 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     } else {
      i26 = 0;
     }
     while (1) {
      HEAP16[i23 + (i26 << 1) >> 1] = HEAPU8[i5 + i26 | 0] | 0;
      i26 = i26 + 1 | 0;
      if (i26 >>> 0 >= i13 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i13 = HEAP32[i7 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i24 = 0;
    break;
   }
   i24 = HEAP32[i13 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP16[i23 + (i24 << 1) >> 1] = i15 & 255;
 i15 = HEAP32[i7 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i27 = 1;
 } else {
  i27 = (HEAP32[i15 + 4 >> 2] | 0) + 1 | 0;
 }
 i15 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i11 = HEAP32[i15 + 4 >> 2] | 0;
   if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
    i7 = HEAP32[i15 + 8 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i28 = 0;
    }
    while (1) {
     HEAP16[i23 + (i28 + i27 << 1) >> 1] = HEAP16[i7 + (i28 << 1) >> 1] | 0;
     i28 = i28 + 1 | 0;
     if (i28 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   } else {
    i7 = HEAP32[i15 + 8 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i29 = 0;
    }
    while (1) {
     HEAP16[i23 + (i29 + i27 << 1) >> 1] = HEAPU8[i7 + i29 | 0] | 0;
     i29 = i29 + 1 | 0;
     if (i29 >>> 0 >= i11 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i22;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12PrintContext20pageNumberForElementEPNS_7ElementERKNS_9FloatSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, d24 = +0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 80 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = (i1 | 0) != 0;
 if (i15) {
  i16 = i1 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 i16 = i1 + 20 | 0;
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0);
 i17 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i18 = i17 | 0;
 } else {
  i18 = HEAP32[i17 >> 2] | 0;
 }
 i17 = HEAP32[i18 >> 2] | 0;
 L8 : do {
  if ((i17 | 0) == 0) {
   i19 = -1;
  } else {
   i18 = i17;
   while (1) {
    if ((HEAP32[i18 + 20 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[i18 + 24 >> 2] & 2 | 0) != 0) {
      break;
     }
    }
    i20 = HEAP32[i18 + 8 >> 2] | 0;
    if ((i20 | 0) == 0) {
     i19 = -1;
     break L8;
    } else {
     i18 = i20 | 0;
    }
   }
   i20 = i18;
   if ((i18 | 0) == 0) {
    i19 = -1;
    break;
   }
   i21 = HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   i22 = i2;
   d23 = +HEAPF32[i22 >> 2];
   d24 = +HEAPF32[i22 + 4 >> 2];
   i25 = i11 | 0;
   HEAP32[i25 >> 2] = i21;
   i26 = i11 + 4 | 0;
   _memset(i26 | 0, 0, 12) | 0;
   i27 = i11 + 16 | 0;
   HEAP8[i27] = 1;
   HEAPF32[i4 >> 2] = d23;
   HEAPF32[i4 + 4 >> 2] = d24;
   HEAPF32[i6 >> 2] = d23 * 1.25;
   HEAPF32[i6 + 4 >> 2] = d24 * 1.25;
   __ZN7WebCore5Frame27resizePageRectsKeepingRatioERKNS_9FloatSizeES3_(i5, i21, i4, i6);
   __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i21, 1, i5, i4, 1.600000023841858, 1);
   i28 = HEAP32[i22 >> 2] | 0;
   i29 = HEAP32[i22 + 4 >> 2] | 0;
   HEAP32[i12 >> 2] = i28;
   HEAP32[i12 + 4 >> 2] = i29;
   __ZNK7WebCore10ScrollView12contentsSizeEv(i14, HEAP32[i21 + 452 >> 2] | 0);
   d24 = +(HEAP32[i14 >> 2] | 0) / d23;
   HEAPF32[i12 >> 2] = d24 * (HEAP32[tempDoublePtr >> 2] = i28, +HEAPF32[tempDoublePtr >> 2]);
   HEAPF32[i13 + 4 >> 2] = d24 * (HEAP32[tempDoublePtr >> 2] = i29, +HEAPF32[tempDoublePtr >> 2]);
   i29 = i11 + 8 | 0;
   i28 = i11 + 12 | 0;
   __ZN7WebCore12PrintContext36computePageRectsWithPageSizeInternalERKNS_9FloatSizeEb(i11, i13, 0);
   i21 = i18;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 680 >> 2] & 3](i7, i20);
   i22 = HEAP32[i7 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 676 >> 2] & 3](i8, i20);
   i20 = HEAP32[i8 >> 2] | 0;
   i21 = HEAP32[i28 >> 2] | 0;
   L16 : do {
    if ((i21 | 0) == 0) {
     i30 = -1;
     i31 = 0;
    } else {
     i32 = HEAP32[i26 >> 2] | 0;
     i33 = 0;
     while (1) {
      i34 = HEAP32[i32 + (i33 << 4) >> 2] | 0;
      do {
       if ((i34 | 0) <= (i20 | 0)) {
        if ((i20 | 0) >= ((HEAP32[i32 + (i33 << 4) + 8 >> 2] | 0) + i34 | 0)) {
         break;
        }
        i35 = HEAP32[i32 + (i33 << 4) + 4 >> 2] | 0;
        if ((i35 | 0) > (i22 | 0)) {
         break;
        }
        if ((i22 | 0) < ((HEAP32[i32 + (i33 << 4) + 12 >> 2] | 0) + i35 | 0)) {
         i30 = i33;
         i31 = i21;
         break L16;
        }
       }
      } while (0);
      i34 = i33 + 1 | 0;
      if (i34 >>> 0 < i21 >>> 0) {
       i33 = i34;
      } else {
       i30 = -1;
       i31 = i21;
       break;
      }
     }
    }
   } while (0);
   if ((HEAP8[i27] & 1) != 0) {
    HEAP8[i27] = 0;
    i21 = HEAP32[i25 >> 2] | 0;
    HEAPF32[i9 >> 2] = +0;
    HEAPF32[i9 + 4 >> 2] = +0;
    HEAPF32[i10 >> 2] = +0;
    HEAPF32[i10 + 4 >> 2] = +0;
    __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i21, 0, i9, i10, +0, 1);
   }
   if ((i31 | 0) != 0) {
    HEAP32[i28 >> 2] = 0;
   }
   i21 = HEAP32[i26 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i19 = i30;
    break;
   }
   HEAP32[i26 >> 2] = 0;
   HEAP32[i29 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i21);
   i19 = i30;
  }
 } while (0);
 if (!i15) {
  STACKTOP = i3;
  return i19 | 0;
 }
 i15 = i1 + 8 | 0;
 i1 = i15 | 0;
 i30 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i30;
 if ((i30 | 0) >= 1) {
  STACKTOP = i3;
  return i19 | 0;
 }
 if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i19 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
 STACKTOP = i3;
 return i19 | 0;
}
function __ZN7WebCore12PrintContext27spoolAllPagesWithBoundariesEPNS_5FrameERNS_15GraphicsContextERKNS_9FloatSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 72 | 0;
 i12 = i11 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = HEAP32[i1 + 456 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 452 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i20 + 1584 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore8Document12updateLayoutEv(i20);
 i20 = i10 | 0;
 HEAP32[i20 >> 2] = i1;
 i21 = i10 + 4 | 0;
 _memset(i21 | 0, 0, 12) | 0;
 i22 = i3 | 0;
 d23 = +HEAPF32[i22 >> 2];
 i24 = i3 + 4 | 0;
 d25 = +HEAPF32[i24 >> 2];
 i26 = i10 + 16 | 0;
 HEAP8[i26] = 1;
 HEAPF32[i5 >> 2] = d23;
 HEAPF32[i5 + 4 >> 2] = d25;
 HEAPF32[i7 >> 2] = d23 * 1.25;
 HEAPF32[i7 + 4 >> 2] = d25 * 1.25;
 __ZN7WebCore5Frame27resizePageRectsKeepingRatioERKNS_9FloatSizeES3_(i6, i1, i5, i7);
 __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i1, 1, i6, i5, 1.600000023841858, 1);
 HEAP32[i12 >> 2] = 0;
 HEAP32[i12 + 4 >> 2] = 0;
 i12 = i11 + 8 | 0;
 i5 = i3;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i12 + 4 >> 2] = i3;
 __ZN7WebCore12PrintContext16computePageRectsERKNS_9FloatRectEfffRfb(i10, i11, +0, +0, +1, i4 + 64 | 0, 0);
 d25 = +HEAPF32[i22 >> 2];
 i22 = i10 + 12 | 0;
 i11 = HEAP32[i22 >> 2] | 0;
 i3 = ~~(+(i11 >>> 0 >>> 0) * (+HEAPF32[i24 >> 2] + +1) + +-1);
 HEAP32[i13 >> 2] = __ZN7WebCore7makeRGBEiii(255, 255, 255) | 0;
 HEAP8[i13 + 4 | 0] = 1;
 __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i2, i13, 0);
 d23 = +(i3 | 0);
 HEAPF32[i14 >> 2] = +0;
 HEAPF32[i14 + 4 >> 2] = +0;
 HEAPF32[i14 + 8 >> 2] = d25;
 HEAPF32[i14 + 12 >> 2] = d23;
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i2, i14);
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 __ZN7WebCore15GraphicsContext9translateEff(i2, +0, d23);
 HEAPF32[i15 >> 2] = +1;
 HEAPF32[i15 + 4 >> 2] = +-1;
 __ZN7WebCore15GraphicsContext5scaleERKNS_9FloatSizeE(i2, i15);
 if ((i11 | 0) == 0) {
  i27 = 0;
 } else {
  i11 = i16 | 0;
  i15 = i16 + 4 | 0;
  i14 = i17 | 0;
  i3 = i17 + 4 | 0;
  i13 = i18 | 0;
  i12 = i18 + 4 | 0;
  i5 = ~~d25;
  i6 = i19 | 0;
  i1 = i19 + 4 | 0;
  i7 = 0;
  i28 = 0;
  while (1) {
   if ((i28 | 0) != 0) {
    __ZN7WebCore15GraphicsContext4saveEv(i2);
    HEAP32[i11 >> 2] = __ZN7WebCore7makeRGBEiii(0, 0, 255) | 0;
    HEAP8[i15] = 1;
    __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i2, i16, 0);
    HEAP32[i14 >> 2] = __ZN7WebCore7makeRGBEiii(0, 0, 255) | 0;
    HEAP8[i3] = 1;
    __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i2, i17, 0);
    HEAP32[i13 >> 2] = 0;
    HEAP32[i12 >> 2] = i7;
    HEAP32[i6 >> 2] = i5;
    HEAP32[i1 >> 2] = i7;
    __ZN7WebCore15GraphicsContext8drawLineERKNS_8IntPointES3_(i2, i18, i19);
    __ZN7WebCore15GraphicsContext7restoreEv(i2);
   }
   __ZN7WebCore15GraphicsContext4saveEv(i2);
   d23 = +(i7 | 0);
   __ZN7WebCore15GraphicsContext9translateEff(i2, +0, d23);
   __ZN7WebCore12PrintContext9spoolPageERNS_15GraphicsContextEif(i10, i2, i28, d25);
   __ZN7WebCore15GraphicsContext7restoreEv(i2);
   i29 = i28 + 1 | 0;
   i30 = HEAP32[i22 >> 2] | 0;
   if (i29 >>> 0 < i30 >>> 0) {
    i7 = ~~(d23 + (+HEAPF32[i24 >> 2] + +1));
    i28 = i29;
   } else {
    i27 = i30;
    break;
   }
  }
 }
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 if ((HEAP8[i26] & 1) != 0) {
  HEAP8[i26] = 0;
  i26 = HEAP32[i20 >> 2] | 0;
  HEAPF32[i8 >> 2] = +0;
  HEAPF32[i8 + 4 >> 2] = +0;
  HEAPF32[i9 >> 2] = +0;
  HEAPF32[i9 + 4 >> 2] = +0;
  __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i26, 0, i8, i9, +0, 1);
 }
 if ((i27 | 0) != 0) {
  HEAP32[i22 >> 2] = 0;
 }
 i22 = HEAP32[i21 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i21 >> 2] = 0;
 HEAP32[i10 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i22);
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = (i2 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, i7 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i9) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i10 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i12 = 37;
      break;
     }
     i13 = i11 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
     i14 = i11;
     i15 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 37;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i11 = i5 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i13 | 0) == 0) {
      i12 = 37;
      break;
     }
     i11 = i13 + 20 | 0;
     HEAP32[i13 >> 2] = 2;
     HEAP32[i13 + 4 >> 2] = i10;
     HEAP32[i13 + 8 >> 2] = i11;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 0;
     i14 = i13;
     i15 = i11;
    }
   } while (0);
   if ((i12 | 0) == 37) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = 0;
    } else {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i18 = 0;
       }
       while (1) {
        HEAP16[i15 + (i18 << 1) >> 1] = HEAP16[i17 + (i18 << 1) >> 1] | 0;
        i18 = i18 + 1 | 0;
        if (i18 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i19 = 0;
       }
       while (1) {
        HEAP16[i15 + (i19 << 1) >> 1] = HEAPU8[i17 + i19 | 0] | 0;
        i19 = i19 + 1 | 0;
        if (i19 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = 0;
      break;
     }
     i16 = HEAP32[i13 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i15 + (i11 + i16 << 1) >> 1] = HEAPU8[i3 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 0) {
   i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i14 | 0) == 0) {
    i12 = 19;
    break;
   }
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i20 = i14;
   i21 = 0;
  } else {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 19;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i12 = 19;
    break;
   }
   i14 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i10;
   HEAP32[i16 + 8 >> 2] = i14;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i20 = i16;
   i21 = i14;
  }
 } while (0);
 if ((i12 | 0) == 19) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i22 = 0;
  } else {
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   i6 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i23 = i12;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i21 + i14 | 0] = HEAP8[i6 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i23 = i10;
    }
   }
   i22 = HEAP32[i23 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i21 + i22 | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcEES3_EEcEES3_EcvS3_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 56 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 i7 = i5 + 4 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i9 = i5 + 12 | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i10 = i5 + 20 | 0;
 i8 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i10 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i11 = i8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 24 | 0] = HEAP8[i2 + 24 | 0] | 0;
 i11 = i5 + 28 | 0;
 i8 = HEAP32[i2 + 28 >> 2] | 0;
 HEAP32[i11 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i12 = i8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 32 | 0] = HEAP8[i2 + 32 | 0] | 0;
 i12 = i5 + 36 | 0;
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i12 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i13 = i8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 40 | 0] = HEAP8[i2 + 40 | 0] | 0;
 i13 = i6 | 0;
 i8 = HEAP32[i2 + 44 >> 2] | 0;
 HEAP32[i13 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_INS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_EEcEES4_EEcEES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i13 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 | 0;
   i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i12 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i5 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
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
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_EEcEES4_EEcS4_EENS1_INS1_IT_T0_EET1_EERKSG_SH_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i11 = HEAP32[i2 + 20 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (!i12) {
  i13 = i11 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = HEAP8[i2 + 24 | 0] | 0;
 i14 = HEAP32[i2 + 28 >> 2] | 0;
 i15 = (i14 | 0) == 0;
 if (!i15) {
  i16 = i14 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 i16 = HEAP8[i2 + 32 | 0] | 0;
 i17 = HEAP32[i2 + 36 >> 2] | 0;
 i18 = (i17 | 0) == 0;
 if (!i18) {
  i19 = i17 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
 }
 i19 = HEAP8[i2 + 40 | 0] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i20 = i2 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!i6) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i8;
 if (!i9) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = i10;
 HEAP32[i1 + 20 >> 2] = i11;
 if (!i12) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 24 | 0] = i13;
 HEAP32[i1 + 28 >> 2] = i14;
 if (!i15) {
  i13 = i14 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 32 | 0] = i16;
 HEAP32[i1 + 36 >> 2] = i17;
 if (!i18) {
  i16 = i17 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 40 | 0] = i19;
 HEAP32[i1 + 44 >> 2] = i2;
 do {
  if (!i3) {
   i1 = i2 | 0;
   i19 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i19 + 2;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i19;
    break;
   }
  }
 } while (0);
 do {
  if (!i18) {
   i2 = i17 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if (!i15) {
   i17 = i14 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i17 >> 2] = i18;
    break;
   }
  }
 } while (0);
 do {
  if (!i12) {
   i14 = i11 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i11 = i8 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i5 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  return;
 }
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcE7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = HEAP8[i1 + 32 | 0] | 0;
 i4 = HEAP8[i1 + 24 | 0] | 0;
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_E7writeToEPh(i1 | 0, i2);
 i5 = i1 + 16 | 0;
 i6 = _strlen(HEAP32[i5 >> 2] | 0) | 0;
 i7 = i1 + 8 | 0;
 i8 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i9 = i1 | 0;
 i10 = _strlen(HEAP32[i9 >> 2] | 0) | 0;
 i11 = i1 + 4 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i12 = i1 + 12 | 0;
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i15 = 0;
 } else {
  i15 = HEAP32[i14 + 4 >> 2] | 0;
 }
 i14 = i1 + 20 | 0;
 i16 = HEAP32[i14 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = HEAP32[i16 + 4 >> 2] | 0;
 }
 HEAP8[i2 + (i8 + i6 + i10 + i13 + i15 + i17) | 0] = i4;
 i4 = HEAP32[i5 >> 2] | 0;
 i17 = _strlen(i4 | 0) | 0;
 i15 = HEAP32[i7 >> 2] | 0;
 i13 = _strlen(i15 | 0) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i6 = _strlen(i10 | 0) | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i18 = 0;
 } else {
  i18 = HEAP32[i8 + 4 >> 2] | 0;
 }
 i16 = HEAP32[i12 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i19 = 0;
 } else {
  i19 = HEAP32[i16 + 4 >> 2] | 0;
 }
 i16 = HEAP32[i14 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i20 = 0;
 } else {
  i20 = HEAP32[i16 + 4 >> 2] | 0;
 }
 i16 = i17 + 1 + i13 + i6 + i18 + i19 + i20 | 0;
 i20 = i1 + 28 | 0;
 i1 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i21 = i4;
   i22 = i15;
   i23 = i10;
   i24 = i8;
  } else {
   i19 = HEAP32[i1 + 4 >> 2] | 0;
   i18 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i21 = i4;
    i22 = i15;
    i23 = i10;
    i24 = i8;
    break;
   } else {
    i25 = 0;
   }
   while (1) {
    HEAP8[i2 + (i16 + i25) | 0] = HEAP8[i18 + i25 | 0] | 0;
    i25 = i25 + 1 | 0;
    if (i25 >>> 0 >= i19 >>> 0) {
     break;
    }
   }
   i21 = HEAP32[i5 >> 2] | 0;
   i22 = HEAP32[i7 >> 2] | 0;
   i23 = HEAP32[i9 >> 2] | 0;
   i24 = HEAP32[i11 >> 2] | 0;
  }
 } while (0);
 i11 = _strlen(i21 | 0) | 0;
 i21 = _strlen(i22 | 0) | 0;
 i22 = _strlen(i23 | 0) | 0;
 if ((i24 | 0) == 0) {
  i26 = 0;
 } else {
  i26 = HEAP32[i24 + 4 >> 2] | 0;
 }
 i24 = HEAP32[i12 >> 2] | 0;
 if ((i24 | 0) == 0) {
  i27 = 0;
 } else {
  i27 = HEAP32[i24 + 4 >> 2] | 0;
 }
 i24 = HEAP32[i14 >> 2] | 0;
 if ((i24 | 0) == 0) {
  i28 = 0;
 } else {
  i28 = HEAP32[i24 + 4 >> 2] | 0;
 }
 i24 = i11 + 1 + i21 + i22 + i26 + i27 + i28 | 0;
 i28 = HEAP32[i20 >> 2] | 0;
 if ((i28 | 0) == 0) {
  i29 = 0;
  i30 = i24 + i29 | 0;
  i31 = i2 + i30 | 0;
  HEAP8[i31] = i3;
  return;
 }
 i29 = HEAP32[i28 + 4 >> 2] | 0;
 i30 = i24 + i29 | 0;
 i31 = i2 + i30 | 0;
 HEAP8[i31] = i3;
 return;
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_EEcEES4_cEENS1_INS1_IT_T0_EET1_EERKSF_SG_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i11 = HEAP32[i2 + 20 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (!i12) {
  i13 = i11 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = HEAP8[i2 + 24 | 0] | 0;
 i14 = HEAP32[i2 + 28 >> 2] | 0;
 i15 = (i14 | 0) == 0;
 if (!i15) {
  i16 = i14 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 i16 = HEAP8[i2 + 32 | 0] | 0;
 i17 = HEAP32[i2 + 36 >> 2] | 0;
 i2 = (i17 | 0) == 0;
 if (!i2) {
  i18 = i17 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!i6) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i8;
 if (!i9) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = i10;
 HEAP32[i1 + 20 >> 2] = i11;
 if (!i12) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 24 | 0] = i13;
 HEAP32[i1 + 28 >> 2] = i14;
 if (!i15) {
  i13 = i14 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 32 | 0] = i16;
 HEAP32[i1 + 36 >> 2] = i17;
 do {
  if (i2) {
   HEAP8[i1 + 40 | 0] = i3;
  } else {
   i16 = i17 | 0;
   i13 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i13 + 2;
   HEAP8[i1 + 40 | 0] = i3;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i16 >> 2] = i13;
    break;
   }
  }
 } while (0);
 do {
  if (!i15) {
   i17 = i14 | 0;
   i3 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i17 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if (!i12) {
   i14 = i11 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i11 = i8 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i5 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  return;
 }
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_EEcS4_EENS1_INS1_IT_T0_EET1_EERKSE_SF_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i11 = HEAP32[i2 + 20 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (!i12) {
  i13 = i11 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = HEAP8[i2 + 24 | 0] | 0;
 i14 = HEAP32[i2 + 28 >> 2] | 0;
 i15 = (i14 | 0) == 0;
 if (!i15) {
  i16 = i14 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 i16 = HEAP8[i2 + 32 | 0] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i17 = i2 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!i6) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i8;
 if (!i9) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = i10;
 HEAP32[i1 + 20 >> 2] = i11;
 if (!i12) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 24 | 0] = i13;
 HEAP32[i1 + 28 >> 2] = i14;
 if (!i15) {
  i13 = i14 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 32 | 0] = i16;
 HEAP32[i1 + 36 >> 2] = i2;
 do {
  if (!i3) {
   i1 = i2 | 0;
   i16 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i16 + 2;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i16;
    break;
   }
  }
 } while (0);
 do {
  if (!i15) {
   i2 = i14 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if (!i12) {
   i14 = i11 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i11 = i8 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i5 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  return;
 }
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcEES3_EEcE7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = HEAP8[i1 + 40 | 0] | 0;
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcE7writeToEPh(i1 | 0, i2);
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = _strlen(i5 | 0) | 0;
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = _strlen(i8 | 0) | 0;
 i10 = i1 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = _strlen(i11 | 0) | 0;
 i13 = i1 + 4 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i15 = 0;
 } else {
  i15 = HEAP32[i14 + 4 >> 2] | 0;
 }
 i16 = i1 + 12 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i18 = 0;
 } else {
  i18 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i17 = i1 + 20 | 0;
 i19 = HEAP32[i17 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i20 = 0;
 } else {
  i20 = HEAP32[i19 + 4 >> 2] | 0;
 }
 i19 = i1 + 28 | 0;
 i21 = HEAP32[i19 >> 2] | 0;
 if ((i21 | 0) == 0) {
  i22 = 0;
 } else {
  i22 = HEAP32[i21 + 4 >> 2] | 0;
 }
 i21 = i6 + 2 + i9 + i12 + i15 + i18 + i20 + i22 | 0;
 i22 = i1 + 36 | 0;
 i1 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i23 = i5;
   i24 = i8;
   i25 = i11;
   i26 = i14;
  } else {
   i20 = HEAP32[i1 + 4 >> 2] | 0;
   i18 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i23 = i5;
    i24 = i8;
    i25 = i11;
    i26 = i14;
    break;
   } else {
    i27 = 0;
   }
   while (1) {
    HEAP8[i2 + (i21 + i27) | 0] = HEAP8[i18 + i27 | 0] | 0;
    i27 = i27 + 1 | 0;
    if (i27 >>> 0 >= i20 >>> 0) {
     break;
    }
   }
   i23 = HEAP32[i4 >> 2] | 0;
   i24 = HEAP32[i7 >> 2] | 0;
   i25 = HEAP32[i10 >> 2] | 0;
   i26 = HEAP32[i13 >> 2] | 0;
  }
 } while (0);
 i13 = _strlen(i23 | 0) | 0;
 i23 = _strlen(i24 | 0) | 0;
 i24 = _strlen(i25 | 0) | 0;
 if ((i26 | 0) == 0) {
  i28 = 0;
 } else {
  i28 = HEAP32[i26 + 4 >> 2] | 0;
 }
 i26 = HEAP32[i16 >> 2] | 0;
 if ((i26 | 0) == 0) {
  i29 = 0;
 } else {
  i29 = HEAP32[i26 + 4 >> 2] | 0;
 }
 i26 = HEAP32[i17 >> 2] | 0;
 if ((i26 | 0) == 0) {
  i30 = 0;
 } else {
  i30 = HEAP32[i26 + 4 >> 2] | 0;
 }
 i26 = HEAP32[i19 >> 2] | 0;
 if ((i26 | 0) == 0) {
  i31 = 0;
 } else {
  i31 = HEAP32[i26 + 4 >> 2] | 0;
 }
 i26 = i13 + 2 + i23 + i24 + i28 + i29 + i30 + i31 | 0;
 i31 = HEAP32[i22 >> 2] | 0;
 if ((i31 | 0) == 0) {
  i32 = 0;
  i33 = i26 + i32 | 0;
  i34 = i2 + i33 | 0;
  HEAP8[i34] = i3;
  return;
 }
 i32 = HEAP32[i31 + 4 >> 2] | 0;
 i33 = i26 + i32 | 0;
 i34 = i2 + i33 | 0;
 HEAP8[i34] = i3;
 return;
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
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_cEENS1_INS1_IT_T0_EET1_EERKSD_SE_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i11 = HEAP32[i2 + 20 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (!i12) {
  i13 = i11 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = HEAP8[i2 + 24 | 0] | 0;
 i14 = HEAP32[i2 + 28 >> 2] | 0;
 i2 = (i14 | 0) == 0;
 if (!i2) {
  i15 = i14 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!i6) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i8;
 if (!i9) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = i10;
 HEAP32[i1 + 20 >> 2] = i11;
 if (!i12) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 24 | 0] = i13;
 HEAP32[i1 + 28 >> 2] = i14;
 do {
  if (i2) {
   HEAP8[i1 + 32 | 0] = i3;
  } else {
   i13 = i14 | 0;
   i10 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i10 + 2;
   HEAP8[i1 + 32 | 0] = i3;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i13 >> 2] = i10;
    break;
   }
  }
 } while (0);
 do {
  if (!i12) {
   i14 = i11 | 0;
   i3 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i14 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i11 = i8 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i5 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  return;
 }
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcS4_EENS1_INS1_IT_T0_EET1_EERKSC_SD_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i11 = HEAP32[i2 + 20 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (!i12) {
  i13 = i11 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = HEAP8[i2 + 24 | 0] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i14 = i2 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!i6) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i8;
 if (!i9) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = i10;
 HEAP32[i1 + 20 >> 2] = i11;
 if (!i12) {
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 24 | 0] = i13;
 HEAP32[i1 + 28 >> 2] = i2;
 do {
  if (!i3) {
   i1 = i2 | 0;
   i13 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i13 + 2;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i13;
    break;
   }
  }
 } while (0);
 do {
  if (!i12) {
   i2 = i11 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i11 = i8 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i5 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  return;
 }
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 __ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt(i1 | 0, i2);
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = _strlen(i7 | 0) | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = _strlen(i10 | 0) | 0;
 i12 = i1 + 4 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i15 = i1 + 12 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = HEAP32[i16 + 4 >> 2] | 0;
 }
 i16 = i11 + i8 + i14 + i17 | 0;
 if ((i5 | 0) == 0) {
  i18 = i7;
  i19 = i10;
  i20 = i13;
 } else {
  i13 = 0;
  while (1) {
   HEAP16[i2 + (i16 + i13 << 1) >> 1] = HEAPU8[i4 + i13 | 0] | 0;
   i13 = i13 + 1 | 0;
   if (i13 >>> 0 >= i5 >>> 0) {
    break;
   }
  }
  i18 = HEAP32[i6 >> 2] | 0;
  i19 = HEAP32[i9 >> 2] | 0;
  i20 = HEAP32[i12 >> 2] | 0;
 }
 i12 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 i3 = _strlen(i18 | 0) | 0;
 i18 = _strlen(i19 | 0) | 0;
 if ((i20 | 0) == 0) {
  i21 = 0;
 } else {
  i21 = HEAP32[i20 + 4 >> 2] | 0;
 }
 i20 = HEAP32[i15 >> 2] | 0;
 if ((i20 | 0) == 0) {
  i22 = 0;
 } else {
  i22 = HEAP32[i20 + 4 >> 2] | 0;
 }
 i20 = i3 + i12 + i18 + i21 + i22 | 0;
 i22 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i22 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i22 + 4 >> 2] | 0;
 if ((HEAP32[i22 + 16 >> 2] & 32 | 0) == 0) {
  i21 = HEAP32[i22 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i23 = 0;
  }
  while (1) {
   HEAP16[i2 + (i23 + i20 << 1) >> 1] = HEAP16[i21 + (i23 << 1) >> 1] | 0;
   i23 = i23 + 1 | 0;
   if (i23 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i23 = HEAP32[i22 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i24 = 0;
  }
  while (1) {
   HEAP16[i2 + (i24 + i20 << 1) >> 1] = HEAPU8[i23 + i24 | 0] | 0;
   i24 = i24 + 1 | 0;
   if (i24 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP8[i1 + 24 | 0] | 0;
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_E7writeToEPt(i1 | 0, i2);
 i4 = i1 + 16 | 0;
 i5 = _strlen(HEAP32[i4 >> 2] | 0) | 0;
 i6 = i1 + 8 | 0;
 i7 = _strlen(HEAP32[i6 >> 2] | 0) | 0;
 i8 = i1 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i1 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i11 + 4 >> 2] | 0;
 }
 i11 = i1 + 12 | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i13 = i1 + 20 | 0;
 i15 = HEAP32[i13 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i16 = 0;
 } else {
  i16 = HEAP32[i15 + 4 >> 2] | 0;
 }
 HEAP16[i2 + (i7 + i5 + i9 + i12 + i14 + i16 << 1) >> 1] = i3 & 255;
 i3 = _strlen(HEAP32[i4 >> 2] | 0) | 0;
 i4 = _strlen(HEAP32[i6 >> 2] | 0) | 0;
 i6 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = HEAP32[i8 + 4 >> 2] | 0;
 }
 i8 = HEAP32[i11 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i18 = 0;
 } else {
  i18 = HEAP32[i8 + 4 >> 2] | 0;
 }
 i8 = HEAP32[i13 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i19 = 0;
 } else {
  i19 = HEAP32[i8 + 4 >> 2] | 0;
 }
 i8 = i3 + 1 + i4 + i6 + i17 + i18 + i19 | 0;
 i19 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i19 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i19 + 4 >> 2] | 0;
 if ((HEAP32[i19 + 16 >> 2] & 32 | 0) == 0) {
  i18 = HEAP32[i19 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i20 = 0;
  }
  while (1) {
   HEAP16[i2 + (i20 + i8 << 1) >> 1] = HEAP16[i18 + (i20 << 1) >> 1] | 0;
   i20 = i20 + 1 | 0;
   if (i20 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i20 = HEAP32[i19 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i21 = 0;
  }
  while (1) {
   HEAP16[i2 + (i21 + i8 << 1) >> 1] = HEAPU8[i20 + i21 | 0] | 0;
   i21 = i21 + 1 | 0;
   if (i21 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN7WebCore12PrintContext13numberOfPagesEPNS_5FrameERKNS_9FloatSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 64 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[i1 + 456 >> 2] | 0);
 i13 = i2;
 d14 = +HEAPF32[i13 >> 2];
 d15 = +HEAPF32[i13 + 4 >> 2];
 i2 = i9 | 0;
 HEAP32[i2 >> 2] = i1;
 i16 = i9 + 4 | 0;
 _memset(i16 | 0, 0, 12) | 0;
 i17 = i9 + 16 | 0;
 HEAP8[i17] = 1;
 HEAPF32[i4 >> 2] = d14;
 HEAPF32[i4 + 4 >> 2] = d15;
 HEAPF32[i6 >> 2] = d14 * 1.25;
 HEAPF32[i6 + 4 >> 2] = d15 * 1.25;
 __ZN7WebCore5Frame27resizePageRectsKeepingRatioERKNS_9FloatSizeES3_(i5, i1, i4, i6);
 __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i1, 1, i5, i4, 1.600000023841858, 1);
 i4 = HEAP32[i13 >> 2] | 0;
 i5 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i4;
 HEAP32[i10 + 4 >> 2] = i5;
 __ZNK7WebCore10ScrollView12contentsSizeEv(i12, HEAP32[i1 + 452 >> 2] | 0);
 d15 = +(HEAP32[i12 >> 2] | 0) / d14;
 HEAPF32[i10 >> 2] = d15 * (HEAP32[tempDoublePtr >> 2] = i4, +HEAPF32[tempDoublePtr >> 2]);
 HEAPF32[i11 + 4 >> 2] = d15 * (HEAP32[tempDoublePtr >> 2] = i5, +HEAPF32[tempDoublePtr >> 2]);
 i5 = i9 + 12 | 0;
 __ZN7WebCore12PrintContext36computePageRectsWithPageSizeInternalERKNS_9FloatSizeEb(i9, i11, 0);
 i11 = HEAP32[i5 >> 2] | 0;
 if ((HEAP8[i17] & 1) != 0) {
  HEAP8[i17] = 0;
  i17 = HEAP32[i2 >> 2] | 0;
  HEAPF32[i7 >> 2] = +0;
  HEAPF32[i7 + 4 >> 2] = +0;
  HEAPF32[i8 >> 2] = +0;
  HEAPF32[i8 + 4 >> 2] = +0;
  __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i17, 0, i7, i8, +0, 1);
 }
 if ((i11 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i16 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return i11 | 0;
 }
 HEAP32[i16 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return i11 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore12PrintContext16computePageRectsERKNS_9FloatRectEfffRfb(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i8 + 24 | 0;
 i12 = i8 + 32 | 0;
 i13 = i8 + 40 | 0;
 i14 = i1 + 8 | 0;
 do {
  if ((HEAP32[i14 >> 2] | 0) != 0) {
   i15 = i1 + 12 | 0;
   if ((HEAP32[i15 >> 2] | 0) != 0) {
    HEAP32[i15 >> 2] = 0;
   }
   i15 = i1 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   HEAP32[i15 >> 2] = 0;
   HEAP32[i14 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i16);
  }
 } while (0);
 HEAPF32[i6 >> 2] = +0;
 i14 = i1 | 0;
 i16 = HEAP32[i14 >> 2] | 0;
 i15 = HEAP32[i16 + 456 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[i16 + 452 >> 2] | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i16 = HEAP32[i15 + 1584 >> 2] | 0;
 if (!((i16 | 0) != 0 & d5 > +0)) {
  STACKTOP = i8;
  return;
 }
 __ZNK7WebCore10RenderView12documentRectEv(i9, i16);
 i16 = HEAP32[i14 >> 2] | 0;
 d17 = +HEAPF32[i2 + 12 >> 2];
 HEAPF32[i11 >> 2] = +HEAPF32[i2 + 8 >> 2];
 HEAPF32[i11 + 4 >> 2] = d17;
 d17 = +(HEAP32[i9 + 12 >> 2] | 0);
 HEAPF32[i12 >> 2] = +(HEAP32[i9 + 8 >> 2] | 0);
 HEAPF32[i12 + 4 >> 2] = d17;
 __ZN7WebCore5Frame27resizePageRectsKeepingRatioERKNS_9FloatSizeES3_(i10, i16, i11, i12);
 d17 = +HEAPF32[i10 >> 2];
 d18 = +HEAPF32[i10 + 4 >> 2];
 HEAPF32[i6 >> 2] = d18;
 d19 = d18 - (d3 + d4);
 if (d19 <= +0) {
  STACKTOP = i8;
  return;
 }
 HEAPF32[i13 >> 2] = d17 / d5;
 HEAPF32[i13 + 4 >> 2] = d19 / d5;
 __ZN7WebCore12PrintContext36computePageRectsWithPageSizeInternalERKNS_9FloatSizeEb(i1, i13, i7);
 STACKTOP = i8;
 return;
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_cEENS1_INS1_IT_T0_EET1_EERKSB_SC_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i11 = HEAP32[i2 + 20 >> 2] | 0;
 i2 = (i11 | 0) == 0;
 if (!i2) {
  i12 = i11 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!i6) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i8;
 if (!i9) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = i10;
 HEAP32[i1 + 20 >> 2] = i11;
 do {
  if (i2) {
   HEAP8[i1 + 24 | 0] = i3;
  } else {
   i10 = i11 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i7 + 2;
   HEAP8[i1 + 24 | 0] = i3;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i11 = i8 | 0;
   i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i5 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  return;
 }
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
function __ZN3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = _strlen(i3 | 0) | 0;
 __ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh(i1 | 0, i2);
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _strlen(i6 | 0) | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = _strlen(i9 | 0) | 0;
 i11 = i1 + 4 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i14 = i10 + i7 + i13 | 0;
 i13 = i1 + 12 | 0;
 i1 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i15 = i6;
   i16 = i9;
   i17 = i12;
  } else {
   i7 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i15 = i6;
    i16 = i9;
    i17 = i12;
    break;
   } else {
    i18 = 0;
   }
   while (1) {
    HEAP8[i2 + (i14 + i18) | 0] = HEAP8[i10 + i18 | 0] | 0;
    i18 = i18 + 1 | 0;
    if (i18 >>> 0 >= i7 >>> 0) {
     break;
    }
   }
   i15 = HEAP32[i5 >> 2] | 0;
   i16 = HEAP32[i8 >> 2] | 0;
   i17 = HEAP32[i11 >> 2] | 0;
  }
 } while (0);
 i11 = _strlen(i15 | 0) | 0;
 i15 = _strlen(i16 | 0) | 0;
 if ((i17 | 0) == 0) {
  i19 = 0;
 } else {
  i19 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i17 = i15 + i11 + i19 | 0;
 i19 = HEAP32[i13 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i20 = 0;
  i21 = i17 + i20 | 0;
  i22 = i2 + i21 | 0;
  _memcpy(i22 | 0, i3 | 0, i4) | 0;
  return;
 }
 i20 = HEAP32[i19 + 4 >> 2] | 0;
 i21 = i17 + i20 | 0;
 i22 = i2 + i21 | 0;
 _memcpy(i22 | 0, i3 | 0, i4) | 0;
 return;
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 if (!i6) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i11 = i2 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i5;
 if (!i6) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i8;
 if (!i9) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = i10;
 HEAP32[i1 + 20 >> 2] = i2;
 do {
  if (!i3) {
   i1 = i2 | 0;
   i10 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i10 + 2;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i10;
    break;
   }
  }
 } while (0);
 do {
  if (!i9) {
   i2 = i8 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i6) {
  return;
 }
 i6 = i5 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  return;
 } else {
  HEAP32[i6 >> 2] = i8;
  return;
 }
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcEES3_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcE7writeToEPt(i1 | 0, i2);
 i3 = _strlen(HEAP32[i1 + 16 >> 2] | 0) | 0;
 i4 = _strlen(HEAP32[i1 + 8 >> 2] | 0) | 0;
 i5 = _strlen(HEAP32[i1 >> 2] | 0) | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = i3 + 2 + i4 + i5 + i7 + i8 + i9 + i10 | 0;
 i10 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i10 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i10 + 4 >> 2] | 0;
 if ((HEAP32[i10 + 16 >> 2] & 32 | 0) == 0) {
  i9 = HEAP32[i10 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i11 = 0;
  }
  while (1) {
   HEAP16[i2 + (i11 + i6 << 1) >> 1] = HEAP16[i9 + (i11 << 1) >> 1] | 0;
   i11 = i11 + 1 | 0;
   if (i11 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i11 = HEAP32[i10 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i12 = 0;
  }
  while (1) {
   HEAP16[i2 + (i12 + i6 << 1) >> 1] = HEAPU8[i11 + i12 | 0] | 0;
   i12 = i12 + 1 | 0;
   if (i12 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZNK3WTF12StringAppendINS0_INS_6StringEcEES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 4 | 0] = HEAP8[i2 + 4 | 0] | 0;
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
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
function __ZN7WebCore12PrintContext27computeAutomaticScaleFactorERKNS_9FloatSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i6 + 452 >> 2] | 0;
 if ((i1 | 0) == 0) {
  d7 = +1;
  STACKTOP = i3;
  return +d7;
 }
 i8 = HEAP32[i6 + 456 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 4;
  } else {
   i6 = HEAP32[i8 + 1584 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i9 = 4;
    break;
   }
   i10 = (HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   i6 = i1 | 0;
   if ((i10 | 0) == 3 | (i10 | 0) == 0) {
    i11 = i6;
    i9 = 6;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 3](i5, i6);
   i12 = HEAP32[i5 + 4 >> 2] | 0;
   i13 = 0;
  }
 } while (0);
 if ((i9 | 0) == 4) {
  i11 = i1 | 0;
  i9 = 6;
 }
 if ((i9 | 0) == 6) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 184 >> 2] & 3](i4, i11);
  i12 = HEAP32[i4 >> 2] | 0;
  i13 = 1;
 }
 d14 = +(i12 | 0);
 if (d14 < +1) {
  d7 = +1;
  STACKTOP = i3;
  return +d7;
 }
 d15 = +HEAPF32[(i13 ? i2 | 0 : i2 + 4 | 0) >> 2] / d14;
 d7 = d15 > +.5 ? d15 : +.5;
 STACKTOP = i3;
 return +d7;
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcE7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP8[i1 + 32 | 0] | 0;
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_E7writeToEPt(i1 | 0, i2);
 i4 = _strlen(HEAP32[i1 + 16 >> 2] | 0) | 0;
 i5 = _strlen(HEAP32[i1 + 8 >> 2] | 0) | 0;
 i6 = _strlen(HEAP32[i1 >> 2] | 0) | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i7 + 4 >> 2] | 0;
 }
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = HEAP32[i7 + 4 >> 2] | 0;
 }
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i7 + 4 >> 2] | 0;
 }
 i7 = i4 + 1 + i5 + i6 + i8 + i9 + i10 | 0;
 i10 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  i12 = i7 + i11 | 0;
  i13 = i2 + (i12 << 1) | 0;
  i14 = i3 & 255;
  HEAP16[i13 >> 1] = i14;
  return;
 }
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 i12 = i7 + i11 | 0;
 i13 = i2 + (i12 << 1) | 0;
 i14 = i3 & 255;
 HEAP16[i13 >> 1] = i14;
 return;
}
function __ZN7WebCore12PrintContext9spoolPageERNS_15GraphicsContextEif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) >>> 0 > i3 >>> 0) {
  i8 = i6;
  i9 = (HEAP32[i1 + 4 >> 2] | 0) + (i3 << 4) | 0;
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  d10 = d4 / +(HEAP32[i6 + 8 >> 2] | 0);
  __ZN7WebCore15GraphicsContext4saveEv(i2);
  HEAPF32[i7 >> 2] = d10;
  HEAPF32[i7 + 4 >> 2] = d10;
  __ZN7WebCore15GraphicsContext5scaleERKNS_9FloatSizeE(i2, i7);
  __ZN7WebCore15GraphicsContext9translateEff(i2, +(-(HEAP32[i6 >> 2] | 0) | 0), +(-(HEAP32[i6 + 4 >> 2] | 0) | 0));
  __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i2, i6);
  __ZN7WebCore9FrameView13paintContentsEPNS_15GraphicsContextERKNS_7IntRectE(HEAP32[(HEAP32[i1 >> 2] | 0) + 452 >> 2] | 0, i2, i6);
  __ZN7WebCore15GraphicsContext7restoreEv(i2);
  STACKTOP = i5;
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
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
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_E7writeToEPh(i1 | 0, i2);
 i3 = _strlen(HEAP32[i1 + 16 >> 2] | 0) | 0;
 i4 = _strlen(HEAP32[i1 + 8 >> 2] | 0) | 0;
 i5 = _strlen(HEAP32[i1 >> 2] | 0) | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = i4 + i3 + i5 + i7 + i8 | 0;
 i8 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i8 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i8 + 4 >> 2] | 0;
 i7 = HEAP32[i8 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i9 = 0;
 }
 while (1) {
  HEAP8[i2 + (i6 + i9) | 0] = HEAP8[i7 + i9 | 0] | 0;
  i9 = i9 + 1 | 0;
  if (i9 >>> 0 >= i1 >>> 0) {
   break;
  }
 }
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
function __ZN7WebCore12PrintContextD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 16 | 0;
 if ((HEAP8[i5] & 1) != 0) {
  HEAP8[i5] = 0;
  i5 = HEAP32[i1 >> 2] | 0;
  HEAPF32[i3 >> 2] = +0;
  HEAPF32[i3 + 4 >> 2] = +0;
  HEAPF32[i4 >> 2] = +0;
  HEAPF32[i4 + 4 >> 2] = +0;
  __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i5, 0, i3, i4, +0, 1);
 }
 i4 = i1 + 12 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i1 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12PrintContextD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 16 | 0;
 if ((HEAP8[i5] & 1) != 0) {
  HEAP8[i5] = 0;
  i5 = HEAP32[i1 >> 2] | 0;
  HEAPF32[i3 >> 2] = +0;
  HEAPF32[i3 + 4 >> 2] = +0;
  HEAPF32[i4 >> 2] = +0;
  HEAPF32[i4 + 4 >> 2] = +0;
  __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i5, 0, i3, i4, +0, 1);
 }
 i4 = i1 + 12 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i1 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12PrintContext5beginEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP8[i1 + 16 | 0] = 1;
 HEAPF32[i5 >> 2] = d2;
 HEAPF32[i5 + 4 >> 2] = d3;
 i8 = i1 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 HEAPF32[i7 >> 2] = d2 * 1.25;
 HEAPF32[i7 + 4 >> 2] = d3 * 1.25;
 __ZN7WebCore5Frame27resizePageRectsKeepingRatioERKNS_9FloatSizeES3_(i6, i1, i5, i7);
 __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(HEAP32[i8 >> 2] | 0, 1, i6, i5, 1.600000023841858, 1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12PrintContext28computePageRectsWithPageSizeERKNS_9FloatSizeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i1 + 8 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   i5 = i1 + 12 | 0;
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i5 = i1 + 4 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   HEAP32[i5 >> 2] = 0;
   HEAP32[i4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 __ZN7WebCore12PrintContext36computePageRectsWithPageSizeInternalERKNS_9FloatSizeEb(i1, i2, i3);
 return;
}
function __ZN7WebCore12PrintContext9spoolRectERNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 __ZN7WebCore15GraphicsContext9translateEff(i2, +(-(HEAP32[i3 >> 2] | 0) | 0), +(-(HEAP32[i3 + 4 >> 2] | 0) | 0));
 __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i2, i3);
 __ZN7WebCore9FrameView13paintContentsEPNS_15GraphicsContextERKNS_7IntRectE(HEAP32[(HEAP32[i1 >> 2] | 0) + 452 >> 2] | 0, i2, i3);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
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
function __ZN7WebCore12PrintContext3endEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 HEAP8[i1 + 16 | 0] = 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAPF32[i3 >> 2] = +0;
 HEAPF32[i3 + 4 >> 2] = +0;
 HEAPF32[i4 >> 2] = +0;
 HEAPF32[i4 + 4 >> 2] = +0;
 __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i5, 0, i3, i4, +0, 1);
 STACKTOP = i2;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore12PrintContext16isPageBoxVisibleEPNS_5FrameEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore8Document16isPageBoxVisibleEi(HEAP32[i1 + 456 >> 2] | 0, i2) | 0;
}
function __ZN7WebCore12PrintContextC2EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 _memset(i1 + 4 | 0, 0, 13) | 0;
 return;
}
function __ZN7WebCore12PrintContextC1EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 _memset(i1 + 4 | 0, 0, 13) | 0;
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
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore12PrintContextD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore12PrintContextC2EPNS_5FrameE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_strncmp": _strncmp, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_malloc": _malloc, "_free": _free, "_strcmp": _strcmp, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore12PrintContext27computeAutomaticScaleFactorERKNS_9FloatSizeE","__ZNK3WTF12StringAppendINS0_INS_6StringEcEES1_EcvS1_Ev","_strlen","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS1_INS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_EEcEES4_EEcEES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_cEENS1_INS1_IT_T0_EET1_EERKSD_SE_","__ZN7WebCore12PrintContext3endEv","__ZN7WebCore12PrintContext16computePageRectsERKNS_9FloatRectEfffRfb","__ZN3WTF12StringAppendINS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_E7writeToEPh","__ZN7WebCore12PrintContext16isPageBoxVisibleEPNS_5FrameEi","__ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_EEcS4_EENS1_INS1_IT_T0_EET1_EERKSE_SF_","__ZN7WebCore10BorderDataD2Ev","__ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcEES3_E7writeToEPt","__ZN7WebCore12PrintContext9spoolRectERNS_15GraphicsContextERKNS_7IntRectE","__ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_E7writeToEPh","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPt","__ZN3WTF12StringAppendINS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_E7writeToEPt","__ZN7WebCore12PrintContext26pageSizeAndMarginsInPixelsEPNS_5FrameEiiiiiii","__ZN7WebCore12PrintContext27spoolAllPagesWithBoundariesEPNS_5FrameERNS_15GraphicsContextERKNS_9FloatSizeE","__ZN7WebCore12PrintContext5beginEff","__ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","_memset","__ZN3WTFplINS_12StringAppendINS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF12StringAppendINS0_IPKcNS_6StringEEES2_E7writeToEPh","__ZN7WebCore12PrintContext13numberOfPagesEPNS_5FrameERKNS_9FloatSizeE","__ZN7WebCore12StyleBoxDataD2Ev","__ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_E7writeToEPt","__ZN3WTFplINS_12StringAppendINS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_cEENS1_INS1_IT_T0_EET1_EERKSB_SC_","__ZN7WebCore12PrintContext12pagePropertyEPNS_5FrameEPKci","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11RenderStyleD2Ev","__ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcS4_EENS1_INS1_IT_T0_EET1_EERKSC_SD_","__ZN7WebCore12PrintContextC2EPNS_5FrameE","__ZN7WebCore12PrintContext36computePageRectsWithPageSizeInternalERKNS_9FloatSizeEb","__ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_EEcEES4_EEcS4_EENS1_INS1_IT_T0_EET1_EERKSG_SH_","__ZN7WebCore17StyleSurroundDataD2Ev","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore12PrintContextD2Ev","__ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcE7writeToEPh","__ZN3WTFplINS_12StringAppendINS1_INS1_INS1_INS1_INS1_INS1_INS1_IPKcNS_6StringEEES3_EES4_EES3_EES4_EEcEES4_EEcEES4_cEENS1_INS1_IT_T0_EET1_EERKSF_SG_","_memcpy","__ZN3WTF12StringAppendINS0_INS0_IPKcNS_6StringEEES2_EES3_E7writeToEPt","__ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcEES3_EEcE7writeToEPh","__ZN7WebCore12PrintContext28computePageRectsWithPageSizeERKNS_9FloatSizeEb","__ZN7WebCore12PrintContext20pageNumberForElementEPNS_7ElementERKNS_9FloatSizeE","__ZN7WebCore12PrintContext9spoolPageERNS_15GraphicsContextEif","__ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcEES3_EEcEES3_EcvS3_Ev","__ZN3WTF12StringAppendINS0_INS0_INS0_INS0_INS0_INS0_INS0_IPKcNS_6StringEEES2_EES3_EES2_EES3_EEcEES3_EEcE7writeToEPt"]

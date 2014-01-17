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
H_BASE = parentModule["_malloc"](240 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 240;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14SecurityOriginC1ERKNS_3URLE;
var __ZN7WebCore14SecurityOriginC1Ev;
var __ZN7WebCore14SecurityOriginC1EPKS0_;
/* memory initializer */ allocate([100,97,116,97,58,44,0,0,102,105,108,101,95,95,48,0,47,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,58,47,47,0,0,0,0,0,102,105,108,101,58,47,47,0,110,117,108,108,0,0,0,0,102,105,108,101,0,0,0,0,102,116,112,0,0,0,0,0,100,97,116,97,0,0,0,0,102,101,101,100,115,101,97,114,99,104,58,104,116,116,112,115,58,0,0,0,0,0,0,0,102,101,101,100,115,101,97,114,99,104,58,104,116,116,112,58,0,0,0,0,0,0,0,0,102,101,101,100,115,58,104,116,116,112,115,58,0,0,0,0,102,101,101,100,115,58,104,116,116,112,58,0,0,0,0,0,102,101,101,100,58,104,116,116,112,115,58,0,0,0,0,0,102,101,101,100,58,104,116,116,112,58,0,0,0,0,0,0,102,101,101,100,58,47,47,0,102,101,101,100,0,0,0,0,98,108,111,98,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14SecurityOrigin28createFromDatabaseIdentifierERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 456 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 96 | 0;
 i7 = i3 + 144 | 0;
 i8 = i3 + 152 | 0;
 i9 = i3 + 160 | 0;
 i10 = i3 + 208 | 0;
 i11 = i3 + 256 | 0;
 i12 = i3 + 264 | 0;
 i13 = i3 + 272 | 0;
 i14 = i3 + 280 | 0;
 i15 = i3 + 328 | 0;
 i16 = i3 + 376 | 0;
 i17 = i3 + 384 | 0;
 i18 = i3 + 408 | 0;
 i19 = i3 + 432 | 0;
 i20 = i3 + 448 | 0;
 i21 = i2 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 L1 : do {
  if ((i22 | 0) != 0) {
   if ((HEAP32[i22 + 16 >> 2] & 32 | 0) == 0) {
    i23 = HEAP32[i22 + 8 >> 2] | 0;
    i24 = HEAP32[i22 + 4 >> 2] | 0;
    i25 = 0;
    while (1) {
     if (i25 >>> 0 >= i24 >>> 0) {
      break L1;
     }
     if ((HEAP16[i23 + (i25 << 1) >> 1] | 0) == 95) {
      i26 = i25;
      break;
     } else {
      i25 = i25 + 1 | 0;
     }
    }
   } else {
    i25 = HEAP32[i22 + 8 >> 2] | 0;
    i23 = HEAP32[i22 + 4 >> 2] | 0;
    i24 = 0;
    while (1) {
     if (i24 >>> 0 >= i23 >>> 0) {
      break L1;
     }
     if ((HEAP8[i25 + i24 | 0] | 0) == 95) {
      i26 = i24;
      break;
     } else {
      i24 = i24 + 1 | 0;
     }
    }
   }
   if ((i26 | 0) == -1) {
    break;
   }
   i24 = __ZN3WTF10StringImpl11reverseFindEtj(i22, 95, -1) | 0;
   if ((i24 | 0) == -1) {
    i25 = i5 | 0;
    HEAP32[i25 >> 2] = 0;
    __ZN7WebCore3URL10invalidateEv(i5);
    __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i1, i5);
    i23 = HEAP32[i25 >> 2] | 0;
    if ((i23 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    i25 = i23 | 0;
    i27 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i23);
     STACKTOP = i3;
     return;
    } else {
     HEAP32[i25 >> 2] = i27;
     STACKTOP = i3;
     return;
    }
   }
   if ((i26 | 0) == (i24 | 0)) {
    i27 = i6 | 0;
    HEAP32[i27 >> 2] = 0;
    __ZN7WebCore3URL10invalidateEv(i6);
    __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i1, i6);
    i25 = HEAP32[i27 >> 2] | 0;
    if ((i25 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    i27 = i25 | 0;
    i23 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i23 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     STACKTOP = i3;
     return;
    } else {
     HEAP32[i27 >> 2] = i23;
     STACKTOP = i3;
     return;
    }
   }
   i23 = HEAP32[i21 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i28 = 0;
    i29 = ~i24;
   } else {
    i27 = HEAP32[i23 + 4 >> 2] | 0;
    i28 = i27;
    i29 = i27 - i24 - 1 | 0;
   }
   __ZNK3WTF6String9substringEjj(i8, i2, i28 - i29 | 0, i29);
   i27 = __ZNK3WTF6String5toIntEPb(i8, i7) | 0;
   i23 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i25 = i23 | 0;
     i30 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i25 >> 2] = i30;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i21 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i31 = -1;
   } else {
    i31 = (HEAP32[i23 + 4 >> 2] | 0) - 1 | 0;
   }
   if (!((HEAP8[i7] & 1) != 0 | (i24 | 0) == (i31 | 0))) {
    i23 = i9 | 0;
    HEAP32[i23 >> 2] = 0;
    __ZN7WebCore3URL10invalidateEv(i9);
    __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i1, i9);
    i30 = HEAP32[i23 >> 2] | 0;
    if ((i30 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    i23 = i30 | 0;
    i25 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
    if ((i25 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i30);
     STACKTOP = i3;
     return;
    } else {
     HEAP32[i23 >> 2] = i25;
     STACKTOP = i3;
     return;
    }
   }
   if (i27 >>> 0 > 65535 >>> 0) {
    i25 = i10 | 0;
    HEAP32[i25 >> 2] = 0;
    __ZN7WebCore3URL10invalidateEv(i10);
    __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i1, i10);
    i23 = HEAP32[i25 >> 2] | 0;
    if ((i23 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    i25 = i23 | 0;
    i30 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
    if ((i30 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i23);
     STACKTOP = i3;
     return;
    } else {
     HEAP32[i25 >> 2] = i30;
     STACKTOP = i3;
     return;
    }
   }
   __ZNK3WTF6String9substringEjj(i11, i2, 0, i26);
   __ZNK3WTF6String9substringEjj(i12, i2, i26 + 1 | 0, i24 + ~i26 | 0);
   __ZN7WebCore24decodeURLEscapeSequencesERKN3WTF6StringE(i13, i12);
   i30 = i13 | 0;
   i25 = HEAP32[i30 >> 2] | 0;
   HEAP32[i30 >> 2] = 0;
   i23 = i12 | 0;
   i32 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = i25;
   do {
    if ((i32 | 0) != 0) {
     i25 = i32 | 0;
     i33 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i25 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i24 = i32 | 0;
     i33 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i24 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i32 = i15 | 0;
   HEAP32[i32 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i15);
   i30 = i11 | 0;
   i33 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i33 | 0) == 0) {
     i34 = 0;
    } else {
     i24 = i33 | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     i35 = i25 + 2 | 0;
     HEAP32[i24 >> 2] = i25 + 4;
     if ((i35 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      i34 = i33;
      break;
     } else {
      HEAP32[i24 >> 2] = i35;
      i34 = i33;
      break;
     }
    }
   } while (0);
   i33 = HEAP32[i23 >> 2] | 0;
   i35 = (i33 | 0) == 0;
   if (!i35) {
    i24 = i33 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
   }
   i24 = (i34 | 0) == 0;
   if (!i24) {
    i25 = i34 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
   }
   if (!i35) {
    i25 = i33 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
   }
   if (!i24) {
    i25 = i34 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
   }
   do {
    if (!i35) {
     i25 = i33 | 0;
     i36 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = i36 + 2;
     if ((i36 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      break;
     } else {
      HEAP32[i25 >> 2] = i36;
      break;
     }
    }
   } while (0);
   if (!i24) {
    i36 = i34 | 0;
    i25 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
    if ((i25 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i34);
     i37 = HEAP32[i36 >> 2] | 0;
    } else {
     HEAP32[i36 >> 2] = i25;
     i37 = i25;
    }
    HEAP32[i36 >> 2] = i37 + 2;
   }
   if (!i35) {
    i36 = i33 | 0;
    HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
   }
   i36 = i19 | 0;
   HEAP32[i36 >> 2] = i34;
   if (!i24) {
    i25 = i34 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
   }
   HEAP32[i19 + 4 >> 2] = H_BASE + 40;
   i25 = i19 + 8 | 0;
   HEAP32[i25 >> 2] = i33;
   do {
    if (i35) {
     HEAP32[i19 + 12 >> 2] = H_BASE + 32;
    } else {
     i38 = i33 | 0;
     i39 = HEAP32[i38 >> 2] | 0;
     HEAP32[i38 >> 2] = i39 + 2;
     HEAP32[i19 + 12 >> 2] = H_BASE + 32;
     if ((i39 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      break;
     } else {
      HEAP32[i38 >> 2] = i39;
      break;
     }
    }
   } while (0);
   do {
    if (!i24) {
     i39 = i34 | 0;
     i38 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i38 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i34);
      break;
     } else {
      HEAP32[i39 >> 2] = i38;
      break;
     }
    }
   } while (0);
   __ZN3WTF6String6numberEi(i20, i27);
   __ZN3WTFplINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_S2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_(i18, i19, i20);
   __ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEPKcEES2_EES4_EES2_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_(i17, i18, H_BASE + 24 | 0);
   __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_EES3_EcvS1_Ev(i16, i17);
   __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i14, i15, i16);
   __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i1, i14);
   i38 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i39 = i38 | 0;
     i40 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i38);
      break;
     } else {
      HEAP32[i39 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i38 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i27 = i38 | 0;
     i40 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i38);
      break;
     } else {
      HEAP32[i27 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i38 = HEAP32[i17 + 16 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i40 = i38 | 0;
     i27 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i38);
      break;
     } else {
      HEAP32[i40 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i38 = HEAP32[i17 + 8 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i27 = i38 | 0;
     i40 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i38);
      break;
     } else {
      HEAP32[i27 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i38 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i40 = i38 | 0;
     i27 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i38);
      break;
     } else {
      HEAP32[i40 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i38 = HEAP32[i18 + 16 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i27 = i38 | 0;
     i40 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i38);
      break;
     } else {
      HEAP32[i27 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i38 = HEAP32[i18 + 8 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i40 = i38 | 0;
     i27 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i38);
      break;
     } else {
      HEAP32[i40 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i38 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i27 = i38 | 0;
     i40 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i38);
      break;
     } else {
      HEAP32[i27 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i38 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i40 = i38 | 0;
     i27 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i38);
      break;
     } else {
      HEAP32[i40 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i38 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i27 = i38 | 0;
     i40 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i38);
      break;
     } else {
      HEAP32[i27 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i38 = HEAP32[i36 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i25 = i38 | 0;
     i40 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i38);
      break;
     } else {
      HEAP32[i25 >> 2] = i40;
      break;
     }
    }
   } while (0);
   do {
    if (!i35) {
     i38 = i33 | 0;
     i36 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
     if ((i36 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      break;
     } else {
      HEAP32[i38 >> 2] = i36;
      break;
     }
    }
   } while (0);
   do {
    if (!i24) {
     i36 = i34 | 0;
     i38 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
     if ((i38 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i34);
      break;
     } else {
      HEAP32[i36 >> 2] = i38;
      break;
     }
    }
   } while (0);
   do {
    if (!i35) {
     i38 = i33 | 0;
     i36 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
     if ((i36 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      break;
     } else {
      HEAP32[i38 >> 2] = i36;
      break;
     }
    }
   } while (0);
   do {
    if (!i24) {
     i33 = i34 | 0;
     i35 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i35 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i34);
      break;
     } else {
      HEAP32[i33 >> 2] = i35;
      break;
     }
    }
   } while (0);
   i24 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i35 = i24 | 0;
     i33 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i35 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i24 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i32 = i24 | 0;
     i33 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i32 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i24 = HEAP32[i30 >> 2] | 0;
   if ((i24 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i23 = i24 | 0;
   i33 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i33 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i23 >> 2] = i33;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 i34 = i4 | 0;
 HEAP32[i34 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i1, i4);
 i4 = HEAP32[i34 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i34 = i4 | 0;
 i1 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i34 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14SecurityOrigin6createERKN3WTF6StringES4_i(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 56 | 0;
 i9 = i5 + 104 | 0;
 i10 = i5 + 112 | 0;
 i11 = i5 + 136 | 0;
 i12 = i5 + 160 | 0;
 i13 = i5 + 176 | 0;
 if (i4 >>> 0 > 65535 >>> 0) {
  i14 = __ZN3WTF10fastMallocEj(36) | 0;
  HEAP32[i14 >> 2] = 1;
  __ZN3WTF6StringC1EPKc(i14 + 4 | 0, H_BASE + 232 | 0);
  __ZN3WTF6StringC1EPKc(i14 + 8 | 0, H_BASE + 232 | 0);
  __ZN3WTF6StringC1EPKc(i14 + 12 | 0, H_BASE + 232 | 0);
  HEAP32[i14 + 16 >> 2] = 0;
  HEAP16[i14 + 20 >> 1] = 0;
  HEAP8[i14 + 22 | 0] = 1;
  HEAP8[i14 + 23 | 0] = 0;
  HEAP8[i14 + 24 | 0] = 0;
  HEAP8[i14 + 25 | 0] = 0;
  HEAP32[i14 + 28 >> 2] = 0;
  HEAP8[i14 + 32 | 0] = 0;
  HEAP8[i14 + 33 | 0] = 0;
  HEAP32[i1 >> 2] = i14;
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore24decodeURLEscapeSequencesERKN3WTF6StringE(i6, i3);
 i14 = i8 | 0;
 HEAP32[i14 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i8);
 i15 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i16 = 0;
  } else {
   i2 = i15 | 0;
   i17 = HEAP32[i2 >> 2] | 0;
   i18 = i17 + 2 | 0;
   HEAP32[i2 >> 2] = i17 + 4;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    i16 = i15;
    break;
   } else {
    HEAP32[i2 >> 2] = i18;
    i16 = i15;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i3 >> 2] | 0;
 i3 = (i15 | 0) == 0;
 if (!i3) {
  i18 = i15 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
 }
 i18 = (i16 | 0) == 0;
 if (!i18) {
  i2 = i16 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 if (!i3) {
  i2 = i15 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 if (!i18) {
  i2 = i16 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 do {
  if (!i3) {
   i2 = i15 | 0;
   i17 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i17 + 2;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i2 >> 2] = i17;
    break;
   }
  }
 } while (0);
 if (!i18) {
  i17 = i16 | 0;
  i2 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
  if ((i2 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i16);
   i19 = HEAP32[i17 >> 2] | 0;
  } else {
   HEAP32[i17 >> 2] = i2;
   i19 = i2;
  }
  HEAP32[i17 >> 2] = i19 + 2;
 }
 if (!i3) {
  i19 = i15 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
 }
 i19 = i12 | 0;
 HEAP32[i19 >> 2] = i16;
 if (!i18) {
  i17 = i16 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 HEAP32[i12 + 4 >> 2] = H_BASE + 40;
 i17 = i12 + 8 | 0;
 HEAP32[i17 >> 2] = i15;
 do {
  if (i3) {
   HEAP32[i12 + 12 >> 2] = H_BASE + 32;
  } else {
   i2 = i15 | 0;
   i20 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i20 + 2;
   HEAP32[i12 + 12 >> 2] = H_BASE + 32;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i2 >> 2] = i20;
    break;
   }
  }
 } while (0);
 do {
  if (!i18) {
   i20 = i16 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i20 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF6String6numberEi(i13, i4);
 __ZN3WTFplINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_S2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_(i11, i12, i13);
 __ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEPKcEES2_EES4_EES2_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_(i10, i11, H_BASE + 24 | 0);
 __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_EES3_EcvS1_Ev(i9, i10);
 __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i7, i8, i9);
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i1, i7);
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i9 = i1 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i10 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i8 = i1 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i10 + 8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i9 = i1 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i10 = i1 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i10 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i11 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i8 = i1 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i11 + 8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i10 = i1 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i10 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i11 = i1 | 0;
   i8 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i11 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i17 = i1 | 0;
   i8 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i17 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i19 = i1 | 0;
   i8 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i19 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   i1 = i15 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!i18) {
   i8 = i16 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   i1 = i15 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!i18) {
   i15 = i16 | 0;
   i3 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i15 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i14 = i16 | 0;
   i18 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i14 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i6 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i16 | 0;
 i18 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i18 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i16);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i18;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 80 | 0;
 do {
  if (__ZNK7WebCore3URL10protocolIsEPKc(i2, H_BASE + 216 | 0) | 0) {
   __ZN7WebCore22ThreadableBlobRegistry15getCachedOriginERKNS_3URLE(i8, i2);
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i11 = (i10 | 0) == 0;
   if (i11) {
    break;
   }
   HEAP32[i1 >> 2] = i10;
   i12 = i10 | 0;
   tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue + 1, tempValue;
   if (((tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0 | i11) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i10);
   __ZN3WTF8fastFreeEPv(i10);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i8 >> 2] = 0;
  }
 } while (0);
 i8 = i2 + 4 | 0;
 do {
  if ((HEAP8[i8] & 1) != 0) {
   if (__ZNK7WebCore3URL10protocolIsEPKc(i2, H_BASE + 216 | 0) | 0) {
    __ZN7WebCore14SecurityOrigin15extractInnerURLERKNS_3URLE(i4, i2);
    i13 = HEAP8[i4 + 4 | 0] | 0;
   } else {
    i10 = HEAP32[i2 >> 2] | 0;
    HEAP32[i4 >> 2] = i10;
    if ((i10 | 0) == 0) {
     i14 = 0;
     i15 = i4 + 4 | 0;
    } else {
     i11 = i10 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     i11 = i4 + 4 | 0;
     i14 = HEAP8[i11] & -4;
     i15 = i11;
    }
    i11 = HEAP8[i8] | 0;
    i10 = i11 & 1 | i14 | i11 & 2;
    HEAP8[i15] = i10;
    HEAP32[i4 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
    HEAP32[i4 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
    HEAP32[i4 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
    HEAP32[i4 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
    HEAP32[i4 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
    HEAP32[i4 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
    HEAP32[i4 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
    HEAP32[i4 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
    HEAP32[i4 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
    HEAP32[i4 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
    i13 = i10;
   }
   if ((i13 & 2) == 0) {
    if (__ZNK7WebCore3URL10protocolIsEPKc(i4, H_BASE + 72 | 0) | 0) {
     i16 = 13;
    } else {
     i16 = 17;
    }
   } else {
    i16 = 13;
   }
   do {
    if ((i16 | 0) == 13) {
     __ZNK7WebCore3URL4hostEv(i5, i4);
     i10 = HEAP32[i5 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i17 = 1;
      break;
     }
     i11 = (HEAP32[i10 + 4 >> 2] | 0) == 0;
     i12 = i10 | 0;
     i18 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      if (i11) {
       i17 = 1;
       break;
      } else {
       i16 = 17;
       break;
      }
     } else {
      HEAP32[i12 >> 2] = i18;
      if (i11) {
       i17 = 1;
       break;
      } else {
       i16 = 17;
       break;
      }
     }
    }
   } while (0);
   do {
    if ((i16 | 0) == 17) {
     __ZNK7WebCore3URL8protocolEv(i7, i4);
     __ZNK3WTF6String5lowerEv(i6, i7);
     i11 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i11 | 0) != 0) {
       i18 = i11 | 0;
       i12 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i11);
        break;
       } else {
        HEAP32[i18 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i11 = __ZN7WebCore14SchemeRegistry30shouldTreatURLSchemeAsNoAccessERKN3WTF6StringE(i6) | 0;
     i12 = HEAP32[i6 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i17 = i11;
      break;
     }
     i18 = i12 | 0;
     i10 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      i17 = i11;
      break;
     } else {
      HEAP32[i18 >> 2] = i10;
      i17 = i11;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i10 = i11 | 0;
     i18 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i10 >> 2] = i18;
      break;
     }
    }
   } while (0);
   if (i17) {
    break;
   }
   i11 = __ZNK7WebCore3URL10protocolIsEPKc(i2, H_BASE + 216 | 0) | 0;
   i18 = __ZN3WTF10fastMallocEj(36) | 0;
   if (!i11) {
    __ZN7WebCore14SecurityOriginC2ERKNS_3URLE(i18, i2);
    HEAP32[i1 >> 2] = i18;
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore14SecurityOrigin15extractInnerURLERKNS_3URLE(i9, i2);
   __ZN7WebCore14SecurityOriginC2ERKNS_3URLE(i18, i9);
   HEAP32[i1 >> 2] = i18;
   i18 = HEAP32[i9 >> 2] | 0;
   if ((i18 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i11 = i18 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i11 >> 2] = i10;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 i9 = __ZN3WTF10fastMallocEj(36) | 0;
 HEAP32[i9 >> 2] = 1;
 __ZN3WTF6StringC1EPKc(i9 + 4 | 0, H_BASE + 232 | 0);
 __ZN3WTF6StringC1EPKc(i9 + 8 | 0, H_BASE + 232 | 0);
 __ZN3WTF6StringC1EPKc(i9 + 12 | 0, H_BASE + 232 | 0);
 HEAP32[i9 + 16 >> 2] = 0;
 HEAP16[i9 + 20 >> 1] = 0;
 HEAP8[i9 + 22 | 0] = 1;
 HEAP8[i9 + 23 | 0] = 0;
 HEAP8[i9 + 24 | 0] = 0;
 HEAP8[i9 + 25 | 0] = 0;
 HEAP32[i9 + 28 >> 2] = 0;
 HEAP8[i9 + 32 | 0] = 0;
 i17 = i9 + 33 | 0;
 HEAP8[i17] = 0;
 if (__ZNK7WebCore3URL10protocolIsEPKc(i2, H_BASE + 64 | 0) | 0) {
  HEAP8[i17] = 1;
 }
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS_6StringEPKcEES2_EES4_EES2_EES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 + 12 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 4 | 0;
 i11 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i12 = i2 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = (i13 | 0) == 0;
 if (i14) {
  i15 = 0;
 } else {
  i15 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i16 = i2 + 8 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = (i17 | 0) == 0;
 if (i18) {
  i19 = 0;
 } else {
  i19 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i20 = i2 + 16 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 i22 = (i21 | 0) == 0;
 if (i22) {
  i23 = 0;
 } else {
  i23 = HEAP32[i21 + 4 >> 2] | 0;
 }
 i24 = _llvm_uadd_with_overflow_i32(i11 + i9 + i15 + i19 + i23 | 0, i7 | 0) | 0;
 i23 = i24;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i14) {
  i25 = 11;
 } else {
  if ((HEAP32[i13 + 16 >> 2] & 32 | 0) != 0) {
   i25 = 11;
  }
 }
 do {
  if ((i25 | 0) == 11) {
   if (!i18) {
    if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i22) {
    if ((HEAP32[i21 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i23 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i25 = 28;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i26 = i13;
     i27 = 0;
    } else {
     if (i23 >>> 0 > 4294967275 >>> 0) {
      i25 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i23 + 20 | 0);
     i13 = i6 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i25 = 28;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i23;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 32;
     i26 = i14;
     i27 = i13;
    }
   } while (0);
   if ((i25 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_E7writeToEPh(i2, i27);
   i13 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   i14 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
   i24 = HEAP32[i12 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i28 = 0;
   } else {
    i28 = HEAP32[i24 + 4 >> 2] | 0;
   }
   i24 = HEAP32[i16 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i29 = 0;
   } else {
    i29 = HEAP32[i24 + 4 >> 2] | 0;
   }
   i24 = HEAP32[i20 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i30 = 0;
   } else {
    i30 = HEAP32[i24 + 4 >> 2] | 0;
   }
   _memcpy(i27 + (i14 + i13 + i28 + i29 + i30) | 0, i3 | 0, i7) | 0;
   HEAP32[i1 >> 2] = i26;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i23 | 0) == 0) {
   i26 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i26 | 0) == 0) {
    i25 = 44;
    break;
   }
   i30 = i26 | 0;
   HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
   i31 = i26;
   i32 = 0;
  } else {
   if (i23 >>> 0 > 2147483637 >>> 0) {
    i25 = 44;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i23 << 1) + 20 | 0);
   i26 = i5 | 0;
   i30 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   if ((i30 | 0) == 0) {
    i25 = 44;
    break;
   }
   i26 = i30 + 20 | 0;
   HEAP32[i30 >> 2] = 2;
   HEAP32[i30 + 4 >> 2] = i23;
   HEAP32[i30 + 8 >> 2] = i26;
   HEAP32[i30 + 12 >> 2] = 0;
   HEAP32[i30 + 16 >> 2] = 0;
   i31 = i30;
   i32 = i26;
  }
 } while (0);
 if ((i25 | 0) == 44) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_E7writeToEPt(i2, i32);
 i2 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i8 = _strlen(HEAP32[i10 >> 2] | 0) | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i33 = 0;
 } else {
  i33 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = HEAP32[i16 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i34 = 0;
 } else {
  i34 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = HEAP32[i20 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i35 = 0;
 } else {
  i35 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i10 = i8 + i2 + i33 + i34 + i35 | 0;
 if ((i7 | 0) != 0) {
  i35 = 0;
  while (1) {
   HEAP16[i32 + (i10 + i35 << 1) >> 1] = HEAPU8[i3 + i35 | 0] | 0;
   i35 = i35 + 1 | 0;
   if (i35 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i31;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore14SecurityOrigin10canDisplayERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP8[i1 + 23 | 0] & 1) != 0) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZNK7WebCore3URL8protocolEv(i5, i2);
 __ZNK3WTF6String5lowerEv(i4, i5);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 22;
  } else {
   if (!(__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 208 | 0, 4, 0) | 0)) {
    i9 = 22;
    break;
   }
   i5 = HEAP32[i7 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i9 = 22;
    break;
   }
   if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i5, H_BASE + 200 | 0, 7, 0) | 0) {
    i10 = 1;
    break;
   }
   i5 = HEAP32[i7 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i9 = 22;
    break;
   }
   if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i5, H_BASE + 184 | 0, 10, 0) | 0) {
    i10 = 1;
    break;
   }
   i5 = HEAP32[i7 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i9 = 22;
    break;
   }
   if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i5, H_BASE + 168 | 0, 11, 0) | 0) {
    i10 = 1;
    break;
   }
   i5 = HEAP32[i7 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i9 = 22;
    break;
   }
   if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i5, H_BASE + 152 | 0, 11, 0) | 0) {
    i10 = 1;
    break;
   }
   i5 = HEAP32[i7 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i9 = 22;
    break;
   }
   if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i5, H_BASE + 136 | 0, 12, 0) | 0) {
    i10 = 1;
    break;
   }
   i5 = HEAP32[i7 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i9 = 22;
    break;
   }
   if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i5, H_BASE + 112 | 0, 16, 0) | 0) {
    i10 = 1;
    break;
   }
   i5 = HEAP32[i7 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i9 = 22;
    break;
   }
   if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i5, H_BASE + 88 | 0, 17, 0) | 0) {
    i10 = 1;
   } else {
    i9 = 22;
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 22) {
   if (__ZN7WebCore14SchemeRegistry26canDisplayOnlyIfCanRequestERKN3WTF6StringE(i4) | 0) {
    i10 = __ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(i1, i2) | 0;
    break;
   }
   if (__ZN7WebCore14SchemeRegistry37shouldTreatURLSchemeAsDisplayIsolatedERKN3WTF6StringE(i4) | 0) {
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 4 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0) {
     i10 = 1;
     break;
    }
    i10 = __ZN7WebCore14SecurityPolicy24isAccessToURLWhiteListedEPKNS_14SecurityOriginERKNS_3URLE(i1, i2) | 0;
    break;
   }
   if (!(__ZN7WebCore14SecurityPolicy21restrictAccessToLocalEv() | 0)) {
    i10 = 1;
    break;
   }
   if (!(__ZN7WebCore14SchemeRegistry27shouldTreatURLSchemeAsLocalERKN3WTF6StringE(i4) | 0)) {
    i10 = 1;
    break;
   }
   if ((HEAP8[i1 + 25 | 0] & 1) != 0) {
    i10 = 1;
    break;
   }
   i10 = __ZN7WebCore14SecurityPolicy24isAccessToURLWhiteListedEPKNS_14SecurityOriginERKNS_3URLE(i1, i2) | 0;
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i10;
  STACKTOP = i3;
  return i6 | 0;
 }
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i6 = i10;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i4 >> 2] = i1;
  i6 = i10;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore14SecurityOriginC2ERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 HEAP32[i1 >> 2] = 1;
 i9 = i1 + 4 | 0;
 __ZNK7WebCore3URL8protocolEv(i4, i2);
 i10 = i4 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 232 | 0);
  } else {
   __ZNK7WebCore3URL8protocolEv(i5, i2);
   __ZNK3WTF6String5lowerEv(i9, i5);
   i4 = HEAP32[i5 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i11 = i4 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = i1 + 8 | 0;
 __ZNK7WebCore3URL4hostEv(i6, i2);
 i12 = i6 | 0;
 do {
  if ((HEAP32[i12 >> 2] | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i5, H_BASE + 232 | 0);
  } else {
   __ZNK7WebCore3URL4hostEv(i7, i2);
   __ZNK3WTF6String5lowerEv(i5, i7);
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i10 = i6 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i12 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = 0;
 i11 = i1 + 16 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i1 + 20 | 0;
 HEAP16[i12 >> 1] = __ZNK7WebCore3URL4portEv(i2) | 0;
 HEAP8[i1 + 22 | 0] = 0;
 HEAP8[i1 + 23 | 0] = 0;
 HEAP8[i1 + 24 | 0] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP8[i1 + 32 | 0] = 0;
 HEAP8[i1 + 33 | 0] = 0;
 i10 = HEAP32[i5 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i5 = i10 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if (__ZN7WebCore24isDefaultPortForProtocolEtRKN3WTF6StringE(HEAP16[i12 >> 1] | 0, i9) | 0) {
  HEAP16[i12 >> 1] = 0;
 }
 i12 = __ZN7WebCore14SchemeRegistry27shouldTreatURLSchemeAsLocalERKN3WTF6StringE(i9) | 0;
 HEAP8[i1 + 25 | 0] = i12 & 1;
 if (!i12) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore3URL4pathEv(i8, i2);
 i2 = i8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i8;
 do {
  if ((i12 | 0) != 0) {
   i8 = i12 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i8 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i2 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i12 | 0;
 i11 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i12);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14SecurityOriginC1ERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 HEAP32[i1 >> 2] = 1;
 i9 = i1 + 4 | 0;
 __ZNK7WebCore3URL8protocolEv(i4, i2);
 i10 = i4 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 232 | 0);
  } else {
   __ZNK7WebCore3URL8protocolEv(i5, i2);
   __ZNK3WTF6String5lowerEv(i9, i5);
   i4 = HEAP32[i5 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i11 = i4 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = i1 + 8 | 0;
 __ZNK7WebCore3URL4hostEv(i6, i2);
 i12 = i6 | 0;
 do {
  if ((HEAP32[i12 >> 2] | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i5, H_BASE + 232 | 0);
  } else {
   __ZNK7WebCore3URL4hostEv(i7, i2);
   __ZNK3WTF6String5lowerEv(i5, i7);
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i10 = i6 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i12 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = 0;
 i11 = i1 + 16 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i1 + 20 | 0;
 HEAP16[i12 >> 1] = __ZNK7WebCore3URL4portEv(i2) | 0;
 HEAP8[i1 + 22 | 0] = 0;
 HEAP8[i1 + 23 | 0] = 0;
 HEAP8[i1 + 24 | 0] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP8[i1 + 32 | 0] = 0;
 HEAP8[i1 + 33 | 0] = 0;
 i10 = HEAP32[i5 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i5 = i10 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if (__ZN7WebCore24isDefaultPortForProtocolEtRKN3WTF6StringE(HEAP16[i12 >> 1] | 0, i9) | 0) {
  HEAP16[i12 >> 1] = 0;
 }
 i12 = __ZN7WebCore14SchemeRegistry27shouldTreatURLSchemeAsLocalERKN3WTF6StringE(i9) | 0;
 HEAP8[i1 + 25 | 0] = i12 & 1;
 if (!i12) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore3URL4pathEv(i8, i2);
 i2 = i8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i8;
 do {
  if ((i12 | 0) != 0) {
   i8 = i12 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i8 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i2 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i12 | 0;
 i11 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i12);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore14SecurityOrigin18databaseIdentifierEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 40 | 0;
 if ((HEAP8[i2 + 33 | 0] & 1) != 0) {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 16 | 0);
  STACKTOP = i3;
  return;
 }
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i6 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i6 + 12 | 0;
 HEAP8[i11] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i12 = i6 + 20 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i2 + 4 | 0);
 HEAP8[i5] = 95;
 i13 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i14 = 9;
  } else {
   i15 = HEAP32[i8 >> 2] | 0;
   if (i15 >>> 0 >= (HEAP32[i13 + 4 >> 2] | 0) >>> 0) {
    i14 = 9;
    break;
   }
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i14 = 9;
    break;
   }
   i16 = (HEAP8[i11] & 1) == 0;
   HEAP32[i8 >> 2] = i15 + 1;
   if (i16) {
    HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i15 << 1) >> 1] = 95;
    break;
   } else {
    HEAP8[(HEAP32[i12 >> 2] | 0) + i15 | 0] = 95;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 9) {
  __ZN3WTF13StringBuilder6appendEPKhj(i6, i5, 1);
 }
 __ZN7WebCore17encodeForFileNameERKN3WTF6StringE(i7, i2 + 8 | 0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i7);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i13 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i13;
    break;
   }
  }
 } while (0);
 HEAP8[i4] = 95;
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i14 = 20;
  } else {
   i13 = HEAP32[i8 >> 2] | 0;
   if (i13 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) >>> 0) {
    i14 = 20;
    break;
   }
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i14 = 20;
    break;
   }
   i7 = (HEAP8[i11] & 1) == 0;
   HEAP32[i8 >> 2] = i13 + 1;
   if (i7) {
    HEAP16[(HEAP32[i6 + 20 >> 2] | 0) + (i13 << 1) >> 1] = 95;
    break;
   } else {
    HEAP8[(HEAP32[i12 >> 2] | 0) + i13 | 0] = 95;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 20) {
  __ZN3WTF13StringBuilder6appendEPKhj(i6, i4, 1);
 }
 __ZN3WTF13StringBuilder12appendNumberEi(i6, HEAPU16[i2 + 20 >> 1] | 0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i9 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i17 = i6;
   i14 = 24;
  }
 } else {
  HEAP32[i1 >> 2] = i2;
  i17 = i2;
  i14 = 24;
 }
 if ((i14 | 0) == 24) {
  i14 = i17 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i10 = i14 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i10 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i9 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i14 | 0;
 i17 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i17;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore14SecurityOrigin11toRawStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 4 | 0;
 i7 = i6 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 64 | 0) | 0) {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 48 | 0);
  STACKTOP = i3;
  return;
 }
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i5 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i5 + 12 | 0;
 HEAP8[i11] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 i12 = i5 + 20 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = HEAP32[i7 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = 10;
 } else {
  i14 = (HEAP32[i13 + 4 >> 2] | 0) + 10 | 0;
 }
 i13 = i2 + 8 | 0;
 i7 = HEAP32[i13 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i15 = 0;
 } else {
  i15 = HEAP32[i7 + 4 >> 2] | 0;
 }
 __ZN3WTF13StringBuilder15reserveCapacityEj(i5, i14 + i15 | 0);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i6);
 __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 40 | 0, 3);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i13);
 i13 = i2 + 20 | 0;
 if ((HEAP16[i13 >> 1] | 0) != 0) {
  HEAP8[i4] = 58;
  i2 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i2 | 0) == 0) {
    i16 = 14;
   } else {
    i6 = HEAP32[i8 >> 2] | 0;
    if (i6 >>> 0 >= (HEAP32[i2 + 4 >> 2] | 0) >>> 0) {
     i16 = 14;
     break;
    }
    if ((HEAP32[i9 >> 2] | 0) != 0) {
     i16 = 14;
     break;
    }
    i15 = (HEAP8[i11] & 1) == 0;
    HEAP32[i8 >> 2] = i6 + 1;
    if (i15) {
     HEAP16[(HEAP32[i5 + 20 >> 2] | 0) + (i6 << 1) >> 1] = 58;
     break;
    } else {
     HEAP8[(HEAP32[i12 >> 2] | 0) + i6 | 0] = 58;
     break;
    }
   }
  } while (0);
  if ((i16 | 0) == 14) {
   __ZN3WTF13StringBuilder6appendEPKhj(i5, i4, 1);
  }
  __ZN3WTF13StringBuilder12appendNumberEi(i5, HEAPU16[i13 >> 1] | 0);
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i13 = HEAP32[i9 >> 2] | 0;
 if ((i13 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i9 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i17 = i5;
   i16 = 19;
  }
 } else {
  HEAP32[i1 >> 2] = i13;
  i17 = i13;
  i16 = 19;
 }
 if ((i16 | 0) == 19) {
  i16 = i17 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 i16 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i10 = i16 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i10 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i16 = HEAP32[i9 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i16 | 0;
 i17 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i16);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i17;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP8[i1 + 23 | 0] & 1) != 0) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 L4 : do {
  if (__ZNK7WebCore3URL10protocolIsEPKc(i2, H_BASE + 216 | 0) | 0) {
   __ZN7WebCore22ThreadableBlobRegistry15getCachedOriginERKNS_3URLE(i4, i2);
   i7 = HEAP32[i4 >> 2] | 0;
   i8 = (i7 | 0) == (i1 | 0);
   do {
    if ((i7 | 0) != 0) {
     i9 = i7 | 0;
     if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
      break;
     }
     __ZN7WebCore14SecurityOriginD2Ev(i7);
     __ZN3WTF8fastFreeEPv(i7);
     if (i8) {
      i6 = 1;
     } else {
      break L4;
     }
     STACKTOP = i3;
     return i6 | 0;
    }
   } while (0);
   if (i8) {
    i6 = 1;
   } else {
    break;
   }
   STACKTOP = i3;
   return i6 | 0;
  } else {
   HEAP32[i4 >> 2] = 0;
   if ((i1 | 0) == 0) {
    i6 = 1;
   } else {
    break;
   }
   STACKTOP = i3;
   return i6 | 0;
  }
 } while (0);
 if ((HEAP8[i1 + 22 | 0] & 1) != 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i5, i2);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 L18 : do {
  if ((HEAP8[i5 + 22 | 0] & 1) == 0) {
   do {
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 8 >> 2] | 0, HEAP32[i5 + 8 >> 2] | 0) | 0) {
     i2 = i1 + 4 | 0;
     if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i2 >> 2] | 0, HEAP32[i5 + 4 >> 2] | 0) | 0)) {
      break;
     }
     if ((HEAP16[i1 + 20 >> 1] | 0) != (HEAP16[i5 + 20 >> 1] | 0)) {
      break;
     }
     if (!(__ZN7WebCore14SchemeRegistry27shouldTreatURLSchemeAsLocalERKN3WTF6StringE(i2) | 0)) {
      i10 = 1;
      i11 = 18;
      break L18;
     }
     if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
      if ((HEAP8[i5 + 32 | 0] & 1) == 0) {
       i12 = 1;
       break L18;
      }
     }
     if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 16 >> 2] | 0, HEAP32[i5 + 16 >> 2] | 0) | 0) {
      i10 = 1;
      i11 = 18;
      break L18;
     }
    }
   } while (0);
   i10 = __ZN7WebCore14SecurityPolicy19isAccessWhiteListedEPKNS_14SecurityOriginES3_(i1, i5) | 0;
   i11 = 18;
  } else {
   i10 = 0;
   i11 = 18;
  }
 } while (0);
 do {
  if ((i11 | 0) == 18) {
   if ((i5 | 0) == 0) {
    i6 = i10;
   } else {
    i12 = i10;
    break;
   }
   STACKTOP = i3;
   return i6 | 0;
  }
 } while (0);
 i10 = i5 | 0;
 if (((tempValue = HEAP32[i10 >> 2] | 0, HEAP32[i10 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i6 = i12;
  STACKTOP = i3;
  return i6 | 0;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 i6 = i12;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
   i9 = 0;
  } else {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
     i11 = HEAP32[i7 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     } else {
      i12 = 0;
     }
     while (1) {
      HEAP16[i2 + (i12 << 1) >> 1] = HEAP16[i11 + (i12 << 1) >> 1] | 0;
      i12 = i12 + 1 | 0;
      if (i12 >>> 0 >= i10 >>> 0) {
       break;
      }
     }
    } else {
     i11 = HEAP32[i7 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     } else {
      i13 = 0;
     }
     while (1) {
      HEAP16[i2 + (i13 << 1) >> 1] = HEAPU8[i11 + i13 | 0] | 0;
      i13 = i13 + 1 | 0;
      if (i13 >>> 0 >= i10 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i8 = 0;
    i9 = 0;
    break;
   }
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   i9 = i10;
  }
 } while (0);
 if ((i5 | 0) == 0) {
  i14 = i9;
 } else {
  i9 = 0;
  while (1) {
   HEAP16[i2 + (i9 + i8 << 1) >> 1] = HEAPU8[i4 + i9 | 0] | 0;
   i9 = i9 + 1 | 0;
   if (i9 >>> 0 >= i5 >>> 0) {
    break;
   }
  }
  i14 = HEAP32[i6 >> 2] | 0;
 }
 i6 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 if ((i14 | 0) == 0) {
  i15 = 0;
 } else {
  i15 = HEAP32[i14 + 4 >> 2] | 0;
 }
 i14 = i15 + i6 | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
  i15 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i16 = 0;
  }
  while (1) {
   HEAP16[i2 + (i16 + i14 << 1) >> 1] = HEAP16[i15 + (i16 << 1) >> 1] | 0;
   i16 = i16 + 1 | 0;
   if (i16 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i16 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i17 = 0;
  }
  while (1) {
   HEAP16[i2 + (i17 + i14 << 1) >> 1] = HEAPU8[i16 + i17 | 0] | 0;
   i17 = i17 + 1 | 0;
   if (i17 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt(i1 | 0, i2);
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = _strlen(i7 | 0) | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i10 + 4 >> 2] | 0;
 }
 i12 = i1 + 8 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = HEAP32[i13 + 4 >> 2] | 0;
 }
 i13 = i11 + i8 + i14 | 0;
 if ((i5 | 0) == 0) {
  i15 = i7;
  i16 = i10;
 } else {
  i10 = 0;
  while (1) {
   HEAP16[i2 + (i13 + i10 << 1) >> 1] = HEAPU8[i4 + i10 | 0] | 0;
   i10 = i10 + 1 | 0;
   if (i10 >>> 0 >= i5 >>> 0) {
    break;
   }
  }
  i15 = HEAP32[i6 >> 2] | 0;
  i16 = HEAP32[i9 >> 2] | 0;
 }
 i9 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 i3 = _strlen(i15 | 0) | 0;
 if ((i16 | 0) == 0) {
  i17 = 0;
 } else {
  i17 = HEAP32[i16 + 4 >> 2] | 0;
 }
 i16 = HEAP32[i12 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i18 = 0;
 } else {
  i18 = HEAP32[i16 + 4 >> 2] | 0;
 }
 i16 = i3 + i9 + i17 + i18 | 0;
 i18 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i18 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i18 + 4 >> 2] | 0;
 if ((HEAP32[i18 + 16 >> 2] & 32 | 0) == 0) {
  i17 = HEAP32[i18 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i19 = 0;
  }
  while (1) {
   HEAP16[i2 + (i19 + i16 << 1) >> 1] = HEAP16[i17 + (i19 << 1) >> 1] | 0;
   i19 = i19 + 1 | 0;
   if (i19 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i19 = HEAP32[i18 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i20 = 0;
  }
  while (1) {
   HEAP16[i2 + (i20 + i16 << 1) >> 1] = HEAPU8[i19 + i20 | 0] | 0;
   i20 = i20 + 1 | 0;
   if (i20 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_EES3_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i8 = i5 + 8 | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i9 = i5 + 16 | 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i10 = i7 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS_6StringEPKcEES2_EES4_EES2_EES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP32[i2 + 20 >> 2] | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
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
function __ZN7WebCore14SecurityOrigin8isSecureERKNS_3URLE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 4 | 0] & 1) == 0) {
  i6 = 1;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZNK7WebCore3URL8protocolEv(i3, i1);
 i7 = __ZN7WebCore14SchemeRegistry28shouldTreatURLSchemeAsSecureERKN3WTF6StringE(i3) | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   if (i7) {
    i6 = 1;
   } else {
    break;
   }
   STACKTOP = i2;
   return i6 | 0;
  } else {
   i3 = i8 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    if (i7) {
     i6 = 1;
    } else {
     break;
    }
    STACKTOP = i2;
    return i6 | 0;
   } else {
    HEAP32[i3 >> 2] = i9;
    if (i7) {
     i6 = 1;
    } else {
     break;
    }
    STACKTOP = i2;
    return i6 | 0;
   }
  }
 } while (0);
 if (!(__ZNK7WebCore3URL10protocolIsEPKc(i1, H_BASE + 216 | 0) | 0)) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore14SecurityOrigin15extractInnerURLERKNS_3URLE(i5, i1);
 __ZNK7WebCore3URL8protocolEv(i4, i5);
 i1 = __ZN7WebCore14SchemeRegistry28shouldTreatURLSchemeAsSecureERKN3WTF6StringE(i4) | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i6 = i1;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = i7 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  i6 = i1;
  STACKTOP = i2;
  return i6 | 0;
 } else {
  HEAP32[i5 >> 2] = i8;
  i6 = i1;
  STACKTOP = i2;
  return i6 | 0;
 }
 return 0;
}
function __ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEPKcEES2_EES4_EES2_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i2 + 12 >> 2] | 0;
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = (i10 | 0) == 0;
 if (!i2) {
  i11 = i10 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 if (!i5) {
  i11 = i4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 4 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = i7;
 if (!i8) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 12 >> 2] = i9;
 HEAP32[i1 + 16 >> 2] = i10;
 do {
  if (i2) {
   HEAP32[i1 + 20 >> 2] = i3;
  } else {
   i9 = i10 | 0;
   i6 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i6 + 2;
   HEAP32[i1 + 20 >> 2] = i3;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i8) {
   i10 = i7 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i5) {
  return;
 }
 i5 = i4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  return;
 }
}
function __ZN3WTFplINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_S2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i10 = i2 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 if (!i5) {
  i10 = i4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 4 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = i7;
 if (!i8) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 12 >> 2] = i9;
 HEAP32[i1 + 16 >> 2] = i2;
 do {
  if (!i3) {
   i1 = i2 | 0;
   i9 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i9 + 2;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i9;
    break;
   }
  }
 } while (0);
 do {
  if (!i8) {
   i2 = i7 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i5) {
  return;
 }
 i5 = i4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  return;
 }
}
function __ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 23 | 0] & 1) != 0 | (i1 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP8[i1 + 22 | 0] & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i2 + 22 | 0] & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 4 | 0;
 if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i4 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = (HEAP8[i2 + 24 | 0] & 1) == 0;
 do {
  if ((HEAP8[i1 + 24 | 0] & 1) == 0) {
   if (!i5) {
    i3 = 0;
    return i3 | 0;
   }
   if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 8 >> 2] | 0, HEAP32[i2 + 8 >> 2] | 0) | 0)) {
    i3 = 0;
    return i3 | 0;
   }
   if ((HEAP16[i1 + 20 >> 1] | 0) == (HEAP16[i2 + 20 >> 1] | 0)) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   if (i5) {
    i3 = 0;
    return i3 | 0;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 12 >> 2] | 0, HEAP32[i2 + 12 >> 2] | 0) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 if (!(__ZN7WebCore14SchemeRegistry27shouldTreatURLSchemeAsLocalERKN3WTF6StringE(i4) | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
   if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 16 >> 2] | 0, HEAP32[i2 + 16 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh(i1 | 0, i2);
 i6 = i1 + 4 | 0;
 i7 = _strlen(HEAP32[i6 >> 2] | 0) | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i9 + 4 >> 2] | 0;
 }
 i9 = i1 + 8 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i11 + 4 >> 2] | 0;
 }
 _memcpy(i2 + (i10 + i7 + i12) | 0, i4 | 0, i5) | 0;
 i5 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 i3 = _strlen(HEAP32[i6 >> 2] | 0) | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = HEAP32[i6 + 4 >> 2] | 0;
 }
 i6 = i3 + i5 + i13 + i14 | 0;
 i14 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i14 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i14 + 4 >> 2] | 0;
 i13 = HEAP32[i14 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i15 = 0;
 }
 while (1) {
  HEAP8[i2 + (i6 + i15) | 0] = HEAP8[i13 + i15 | 0] | 0;
  i15 = i15 + 1 | 0;
  if (i15 >>> 0 >= i1 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
  } else {
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = HEAP32[i7 + 8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i8 = 0;
    break;
   } else {
    i11 = 0;
   }
   while (1) {
    HEAP8[i2 + i11 | 0] = HEAP8[i10 + i11 | 0] | 0;
    i11 = i11 + 1 | 0;
    if (i11 >>> 0 >= i9 >>> 0) {
     break;
    }
   }
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i8 = 0;
    break;
   }
   i8 = HEAP32[i9 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i2 + i8 | 0, i4 | 0, i5) | 0;
 i5 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i3 = i12 + i5 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 i12 = HEAP32[i5 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i13 = 0;
 }
 while (1) {
  HEAP8[i2 + (i3 + i13) | 0] = HEAP8[i12 + i13 | 0] | 0;
  i13 = i13 + 1 | 0;
  if (i13 >>> 0 >= i1 >>> 0) {
   break;
  }
 }
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
function __ZNK7WebCore14SecurityOrigin5equalEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 8 >> 2] | 0, HEAP32[i2 + 8 >> 2] | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 4 | 0;
 if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i4 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP16[i1 + 20 >> 1] | 0) != (HEAP16[i2 + 20 >> 1] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if (__ZN7WebCore14SchemeRegistry27shouldTreatURLSchemeAsLocalERKN3WTF6StringE(i4) | 0) {
   if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
    if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
     break;
    }
   }
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 16 >> 2] | 0, HEAP32[i2 + 16 >> 2] | 0) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP8[i1 + 24 | 0] & 1;
 if (i4 << 24 >> 24 != (HEAP8[i2 + 24 | 0] & 1)) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if (i4 << 24 >> 24 != 0) {
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 12 >> 2] | 0, HEAP32[i2 + 12 >> 2] | 0) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 1;
 return i3 | 0;
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZNK7WebCore14SecurityOrigin12isThirdPartyEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP8[i2 + 23 | 0] & 1) != 0 | (i1 | 0) == (i2 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i1 + 22 | 0] & 1) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP8[i2 + 22 | 0] & 1) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 8 >> 2] | 0, HEAP32[i2 + 8 >> 2] | 0) | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = i1 + 4 | 0;
 if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i4 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0) | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP16[i1 + 20 >> 1] | 0) != (HEAP16[i2 + 20 >> 1] | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if (__ZN7WebCore14SchemeRegistry27shouldTreatURLSchemeAsLocalERKN3WTF6StringE(i4) | 0) {
   if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
    if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
     break;
    }
   }
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 16 >> 2] | 0, HEAP32[i2 + 16 >> 2] | 0) | 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 0;
 return i3 | 0;
}
function __ZN7WebCore14SecurityOrigin16createFromStringERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i4, i5, i2);
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i1, i4);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14SecurityOrigin15extractInnerURLERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZNK7WebCore3URL4pathEv(i5, i2);
 __ZN7WebCore24decodeURLEscapeSequencesERKN3WTF6StringE(i4, i5);
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i1, 0, i4);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14SecurityOrigin16setDomainFromDOMERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP8[i1 + 24 | 0] = 1;
 __ZNK3WTF6String5lowerEv(i4, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i5 = i1 + 12 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore14SecurityOrigin20isSameSchemeHostPortEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 8 >> 2] | 0, HEAP32[i2 + 8 >> 2] | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 4 | 0;
 if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i4 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP16[i1 + 20 >> 1] | 0) != (HEAP16[i2 + 20 >> 1] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if (__ZN7WebCore14SchemeRegistry27shouldTreatURLSchemeAsLocalERKN3WTF6StringE(i4) | 0) {
   if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
    if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
     break;
    }
   }
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 16 >> 2] | 0, HEAP32[i2 + 16 >> 2] | 0) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 1;
 return i3 | 0;
}
function __ZNK7WebCore14SecurityOrigin12isolatedCopyEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(36) | 0;
 HEAP32[i3 >> 2] = 1;
 __ZNKR3WTF6String12isolatedCopyEv(i3 + 4 | 0, i2 + 4 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i3 + 8 | 0, i2 + 8 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i3 + 12 | 0, i2 + 12 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i3 + 16 | 0, i2 + 16 | 0);
 HEAP16[i3 + 20 >> 1] = HEAP16[i2 + 20 >> 1] | 0;
 HEAP8[i3 + 22 | 0] = HEAP8[i2 + 22 | 0] & 1;
 HEAP8[i3 + 23 | 0] = HEAP8[i2 + 23 | 0] & 1;
 HEAP8[i3 + 24 | 0] = HEAP8[i2 + 24 | 0] & 1;
 HEAP8[i3 + 25 | 0] = HEAP8[i2 + 25 | 0] & 1;
 HEAP32[i3 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP8[i3 + 32 | 0] = HEAP8[i2 + 32 | 0] & 1;
 HEAP8[i3 + 33 | 0] = HEAP8[i2 + 33 | 0] & 1;
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore14SecurityOriginC2EPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 4 | 0, i2 + 4 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 8 | 0, i2 + 8 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 12 | 0, i2 + 12 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 16 | 0, i2 + 16 | 0);
 HEAP16[i1 + 20 >> 1] = HEAP16[i2 + 20 >> 1] | 0;
 HEAP8[i1 + 22 | 0] = HEAP8[i2 + 22 | 0] & 1;
 HEAP8[i1 + 23 | 0] = HEAP8[i2 + 23 | 0] & 1;
 HEAP8[i1 + 24 | 0] = HEAP8[i2 + 24 | 0] & 1;
 HEAP8[i1 + 25 | 0] = HEAP8[i2 + 25 | 0] & 1;
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP8[i1 + 32 | 0] = HEAP8[i2 + 32 | 0] & 1;
 HEAP8[i1 + 33 | 0] = HEAP8[i2 + 33 | 0] & 1;
 return;
}
function __ZN7WebCore14SecurityOriginC1EPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 4 | 0, i2 + 4 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 8 | 0, i2 + 8 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 12 | 0, i2 + 12 | 0);
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 16 | 0, i2 + 16 | 0);
 HEAP16[i1 + 20 >> 1] = HEAP16[i2 + 20 >> 1] | 0;
 HEAP8[i1 + 22 | 0] = HEAP8[i2 + 22 | 0] & 1;
 HEAP8[i1 + 23 | 0] = HEAP8[i2 + 23 | 0] & 1;
 HEAP8[i1 + 24 | 0] = HEAP8[i2 + 24 | 0] & 1;
 HEAP8[i1 + 25 | 0] = HEAP8[i2 + 25 | 0] & 1;
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP8[i1 + 32 | 0] = HEAP8[i2 + 32 | 0] & 1;
 HEAP8[i1 + 33 | 0] = HEAP8[i2 + 33 | 0] & 1;
 return;
}
function __ZNK7WebCore14SecurityOrigin16canAccessStorageEPKS0_NS0_25ShouldAllowFromThirdPartyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 do {
  if ((HEAP8[i1 + 22 | 0] & 1) == 0) {
   i4 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i4 | 0) == 2) {
    i5 = 0;
    break;
   }
   if ((i2 | 0) == 0) {
    i5 = 1;
    break;
   }
   i6 = HEAP32[i2 + 28 >> 2] | 0;
   if ((i6 | 0) == 2) {
    i5 = 0;
    break;
   }
   if ((i3 | 0) == 0) {
    i5 = 1;
    break;
   }
   if ((i4 | 0) == 1 | (i6 | 0) == 1) {
    if (__ZNK7WebCore14SecurityOrigin12isThirdPartyEPKS0_(i2, i1) | 0) {
     i5 = 0;
     break;
    }
   }
   i5 = 1;
  } else {
   i5 = 0;
  }
 } while (0);
 return i5 | 0;
}
function __ZN7WebCore14SecurityOrigin27urlWithUniqueSecurityOriginEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 224 | 0] | 0) {
  i4 = HEAP32[H_BASE + 240 >> 2] | 0;
 } else {
  i5 = __Znwj(4) | 0;
  HEAP32[i3 >> 2] = H_BASE + 8;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i3);
  HEAP32[H_BASE + 240 >> 2] = i5;
  HEAP8[H_BASE + 224 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14SecurityOrigin12createUniqueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(36) | 0;
 HEAP32[i2 >> 2] = 1;
 __ZN3WTF6StringC1EPKc(i2 + 4 | 0, H_BASE + 232 | 0);
 __ZN3WTF6StringC1EPKc(i2 + 8 | 0, H_BASE + 232 | 0);
 __ZN3WTF6StringC1EPKc(i2 + 12 | 0, H_BASE + 232 | 0);
 HEAP32[i2 + 16 >> 2] = 0;
 HEAP16[i2 + 20 >> 1] = 0;
 HEAP8[i2 + 22 | 0] = 1;
 HEAP8[i2 + 23 | 0] = 0;
 HEAP8[i2 + 24 | 0] = 0;
 HEAP8[i2 + 25 | 0] = 0;
 HEAP32[i2 + 28 >> 2] = 0;
 HEAP8[i2 + 32 | 0] = 0;
 HEAP8[i2 + 33 | 0] = 0;
 HEAP32[i1 >> 2] = i2;
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
function __ZN7WebCore14SecurityOriginC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 1;
 __ZN3WTF6StringC1EPKc(i1 + 4 | 0, H_BASE + 232 | 0);
 __ZN3WTF6StringC1EPKc(i1 + 8 | 0, H_BASE + 232 | 0);
 __ZN3WTF6StringC1EPKc(i1 + 12 | 0, H_BASE + 232 | 0);
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP16[i1 + 20 >> 1] = 0;
 HEAP8[i1 + 22 | 0] = 1;
 HEAP8[i1 + 23 | 0] = 0;
 HEAP8[i1 + 24 | 0] = 0;
 HEAP8[i1 + 25 | 0] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP8[i1 + 32 | 0] = 0;
 HEAP8[i1 + 33 | 0] = 0;
 return;
}
function __ZN7WebCore14SecurityOriginC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 1;
 __ZN3WTF6StringC1EPKc(i1 + 4 | 0, H_BASE + 232 | 0);
 __ZN3WTF6StringC1EPKc(i1 + 8 | 0, H_BASE + 232 | 0);
 __ZN3WTF6StringC1EPKc(i1 + 12 | 0, H_BASE + 232 | 0);
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP16[i1 + 20 >> 1] = 0;
 HEAP8[i1 + 22 | 0] = 1;
 HEAP8[i1 + 23 | 0] = 0;
 HEAP8[i1 + 24 | 0] = 0;
 HEAP8[i1 + 25 | 0] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP8[i1 + 32 | 0] = 0;
 HEAP8[i1 + 33 | 0] = 0;
 return;
}
function __ZNK7WebCore14SecurityOrigin8toStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP8[i2 + 22 | 0] & 1) != 0) {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 56 | 0);
  return;
 }
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 + 4 >> 2] | 0, H_BASE + 64 | 0) | 0) {
   if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
    break;
   }
   __ZN3WTF6StringC1EPKc(i1, H_BASE + 56 | 0);
   return;
  }
 } while (0);
 __ZNK7WebCore14SecurityOrigin11toRawStringEv(i1, i2);
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
function __ZNK7WebCore14SecurityOrigin15passesFileCheckEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 do {
  if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
   if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 16 >> 2] | 0, HEAP32[i2 + 16 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZNK7WebCore14SecurityOrigin12taintsCanvasERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (__ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(i1, i2) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (__ZNK7WebCore3URL10protocolIsEPKc(i2, H_BASE + 80 | 0) | 0) ^ 1;
 return i3 | 0;
}
function __ZNK7WebCore14SecurityOrigin18canReceiveDragDataEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(i1, i2) | 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore14SecurityOrigin20canShowNotificationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 23 | 0] & 1) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 22 | 0] & 1) != 0 ? 0 : 2;
 return i2 | 0;
}
function __ZNK7WebCore14SecurityOrigin7isLocalEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore14SchemeRegistry27shouldTreatURLSchemeAsLocalERKN3WTF6StringE(i1 + 4 | 0) | 0;
}
function __ZN7WebCore14SecurityOrigin17shouldUseInnerURLERKNS_3URLE(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore3URL10protocolIsEPKc(i1, H_BASE + 216 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore14SecurityOrigin25enforceFilePathSeparationEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 32 | 0] = 1;
 return;
}
function __ZN7WebCore14SecurityOrigin23grantLoadLocalResourcesEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 25 | 0] = 1;
 return;
}
function __ZN7WebCore14SecurityOrigin20grantUniversalAccessEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 23 | 0] = 1;
 return;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore14SecurityOriginC2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore14SecurityOriginC2EPKS0_,b1,__ZN7WebCore14SecurityOriginC2ERKNS_3URLE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore14SecurityOrigin9canAccessEPKS0_","__ZN7WebCore14SecurityOriginC2ERKNS_3URLE","__ZNK7WebCore14SecurityOrigin5equalEPKS0_","__ZN7WebCore14SecurityOrigin25enforceFilePathSeparationEv","__ZNK7WebCore14SecurityOrigin10canDisplayERKNS_3URLE","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS1_INS_6StringEPKcEES2_EES4_EES2_EES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZNK7WebCore14SecurityOrigin20isSameSchemeHostPortEPKS0_","__ZNK3WTF12StringAppendINS0_INS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_EES3_EcvS1_Ev","__ZN7WebCore14SecurityOrigin23grantLoadLocalResourcesEv","__ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE","__ZNK7WebCore14SecurityOrigin15passesFileCheckEPKS0_","__ZNK7WebCore14SecurityOrigin12taintsCanvasERKNS_3URLE","__ZNK7WebCore14SecurityOrigin18canReceiveDragDataEPKS0_","__ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_E7writeToEPh","__ZN7WebCore14SecurityOrigin28createFromDatabaseIdentifierERKN3WTF6StringE","__ZN3WTF12StringAppendINS0_INS0_INS0_INS_6StringEPKcEES1_EES3_EES1_E7writeToEPt","__ZNK7WebCore14SecurityOrigin18databaseIdentifierEv","__ZN7WebCore14SecurityOrigin6createERKN3WTF6StringES4_i","__ZN7WebCore14SecurityOriginC2EPKS0_","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore14SecurityOrigin20grantUniversalAccessEv","__ZN7WebCore14SecurityOriginC2Ev","__ZN7WebCore14SecurityOrigin6createERKNS_3URLE","_memset","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore14SecurityOrigin16setDomainFromDOMERKN3WTF6StringE","__ZNK7WebCore14SecurityOrigin12isolatedCopyEv","__ZN7WebCore14SecurityOrigin15extractInnerURLERKNS_3URLE","__ZN7WebCore14SecurityOrigin12createUniqueEv","__ZN7WebCore14SecurityOrigin17shouldUseInnerURLERKNS_3URLE","__ZN3WTFplINS_12StringAppendINS1_INS1_INS_6StringEPKcEES2_EES4_EES2_S4_EENS1_INS1_IT_T0_EET1_EERKSA_SB_","__ZN3WTFplINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_S2_EENS1_INS1_IT_T0_EET1_EERKS9_SA_","__ZN7WebCore14SecurityOrigin27urlWithUniqueSecurityOriginEv","__ZNK7WebCore14SecurityOrigin11toRawStringEv","__ZNK7WebCore14SecurityOrigin7isLocalEv","__ZNK7WebCore14SecurityOrigin20canShowNotificationsEv","__ZNK7WebCore14SecurityOrigin16canAccessStorageEPKS0_NS0_25ShouldAllowFromThirdPartyE","__ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt","_memcpy","__ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh","__ZNK7WebCore14SecurityOrigin8toStringEv","__ZN7WebCore14SecurityOrigin16createFromStringERKN3WTF6StringE","__ZN7WebCore14SecurityOrigin8isSecureERKNS_3URLE","__ZNK7WebCore14SecurityOrigin12isThirdPartyEPKS0_"]

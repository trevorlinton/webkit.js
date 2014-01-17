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
var __ZN7WebCore13RootInlineBoxC1ERNS_15RenderBlockFlowE;
var __ZN7WebCore13RootInlineBoxD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_fiifffii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiifffii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_viff(index,a1,a2,a3) {
  try {
    Module["dynCall_viff"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fi(index,a1) {
  try {
    return Module["dynCall_fi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_iiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZTVN7WebCore13InlineFlowBoxE=env.__ZTVN7WebCore13InlineFlowBoxE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore13RootInlineBoxE=(H_BASE+8)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_fiifffii=env.invoke_fiifffii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_viff=env.invoke_viff;
  var invoke_fi=env.invoke_fi;
  var invoke_iiiiiiii=env.invoke_iiiiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
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
function __ZNK7WebCore13RootInlineBox22ascentAndDescentForBoxEPNS_9InlineBoxERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS3_6VectorIPKNS_14SimpleFontDataELj0ENS3_15CrashOnOverflowEEENS_13GlyphOverflowEEENS3_7PtrHashIS7_EENS3_10HashTraitsIS7_EENSK_ISH_EEEERiSP_RbSQ_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, d50 = +0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 48 | 0;
 i16 = i8 + 56 | 0;
 i17 = i2 + 16 | 0;
 if ((HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 2048 | 0) != 0) {
  i18 = HEAP32[i1 + 16 >> 2] | 0;
  i19 = i18;
  do {
   if ((HEAP32[i1 + 32 >> 2] & 1 | 0) == 0) {
    i20 = HEAP32[i18 + 36 >> 2] | 0;
   } else {
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i18 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i20 = HEAP32[i18 + 36 >> 2] | 0;
     break;
    } else {
     i20 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i19) | 0;
     break;
    }
   }
  } while (0);
  if ((HEAP32[(HEAP32[i20 + 24 >> 2] | 0) + 92 >> 2] & 16 | 0) == 0) {
   STACKTOP = i8;
   return;
  }
  HEAP32[i4 >> 2] = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 80 >> 2] & 3](i2, (HEAP32[i1 + 56 >> 2] | 0) >>> 5 & 1) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 84 >> 2] & 15](i11, i2);
  HEAP32[i5 >> 2] = (HEAP32[i11 >> 2] | 0) - (HEAP32[i4 >> 2] | 0);
  HEAP8[i6] = 1;
  HEAP8[i7] = 1;
  STACKTOP = i8;
  return;
 }
 i11 = i2;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 44 >> 2] & 31](i2) | 0) {
  i20 = i2;
  i19 = HEAP32[i3 >> 2] | 0;
  if ((i19 | 0) == 0) {
   i18 = HEAP32[i3 + 4 >> 2] | 0;
   i21 = i18 * 36 & -1 | 0;
   i22 = 0;
   i23 = i18;
  } else {
   i18 = HEAP32[i3 + 8 >> 2] | 0;
   i24 = i2;
   i25 = i24 + ~(i24 << 15) | 0;
   i24 = (i25 >>> 10 ^ i25) * 9 & -1;
   i25 = i24 >>> 6 ^ i24;
   i24 = i25 + ~(i25 << 11) | 0;
   i25 = i24 >>> 16 ^ i24;
   i24 = i18 & i25;
   i26 = i19 + (i24 * 36 & -1) | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   L20 : do {
    if ((i27 | 0) == (i20 | 0)) {
     i28 = i26;
    } else {
     i29 = (i25 >>> 23) + ~i25 | 0;
     i30 = i29 << 12 ^ i29;
     i29 = i30 >>> 7 ^ i30;
     i30 = i29 << 2 ^ i29;
     i29 = i30 >>> 20 ^ i30 | 1;
     i30 = 0;
     i31 = i24;
     i32 = i27;
     while (1) {
      if ((i32 | 0) == 0) {
       i28 = 0;
       break L20;
      }
      i33 = (i30 | 0) == 0 ? i29 : i30;
      i34 = i33 + i31 & i18;
      i35 = i19 + (i34 * 36 & -1) | 0;
      i36 = HEAP32[i35 >> 2] | 0;
      if ((i36 | 0) == (i20 | 0)) {
       i28 = i35;
       break;
      } else {
       i30 = i33;
       i31 = i34;
       i32 = i36;
      }
     }
    }
   } while (0);
   i20 = HEAP32[i3 + 4 >> 2] | 0;
   i21 = (i28 | 0) == 0 ? i19 + (i20 * 36 & -1) | 0 : i28;
   i22 = i19;
   i23 = i20;
  }
  i20 = (i21 | 0) == (i22 + (i23 * 36 & -1) | 0);
  i37 = i20 ? 0 : i21 + 4 | 0;
  i38 = i20 ? 0 : i21 + 16 | 0;
 } else {
  i37 = 0;
  i38 = 0;
 }
 i21 = HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] | 0;
 i20 = (i21 & 2048 | 0) == 0;
 L28 : do {
  if (i20) {
   if ((i21 & 768 | 0) == 256 | (i21 & 4096 | 0) != 0) {
    if ((HEAP32[i2 + 32 >> 2] & 131072 | 0) == 0) {
     i39 = 0;
    } else {
     i40 = 21;
    }
   } else {
    i40 = 21;
   }
   do {
    if ((i40 | 0) == 21) {
     i23 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] | 0;
     if ((i23 & 2 | 0) != 0) {
      i39 = 1;
      break;
     }
     if ((i1 | 0) != (i2 | 0)) {
      i39 = 0;
      break;
     }
     i39 = (i23 & 1 | 0) != 0;
    }
   } while (0);
   if (!i20) {
    i41 = i39;
    i40 = 25;
    break;
   }
   i23 = i2 + 32 | 0;
   i22 = (HEAP32[i23 >> 2] & 131072 | 0) == 0;
   do {
    if ((i21 & 768 | 0) == 256 | (i21 & 4096 | 0) != 0) {
     if (i22) {
      i42 = 0;
      i43 = i23;
      i44 = i39;
      break L28;
     }
    } else {
     if (!i22) {
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] & 31](i2) | 0)) {
      break;
     }
     if ((HEAP32[i2 + 56 >> 2] & 4 | 0) == 0) {
      i42 = 0;
      i43 = i23;
      i44 = i39;
      break L28;
     }
    }
   } while (0);
   i22 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] | 0;
   if ((i22 & 4 | 0) != 0) {
    i42 = 1;
    i43 = i23;
    i44 = i39;
    break;
   }
   if ((HEAP32[i1 + 32 >> 2] & 2048 | 0) != 0) {
    i42 = 0;
    i43 = i23;
    i44 = i39;
    break;
   }
   i42 = (i22 & 8 | 0) != 0;
   i43 = i23;
   i44 = i39;
  } else {
   i41 = 0;
   i40 = 25;
  }
 } while (0);
 if ((i40 | 0) == 25) {
  i42 = 0;
  i43 = i2 + 32 | 0;
  i44 = i41;
 }
 i41 = HEAP32[i17 >> 2] | 0;
 i39 = (HEAP32[i41 + 20 >> 2] & 768 | 0) == 256;
 do {
  if ((HEAP32[i43 >> 2] & 1 | 0) == 0) {
   if (i39) {
    i45 = HEAP32[(HEAP32[i41 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i45 = HEAP32[i41 + 36 >> 2] | 0;
    break;
   }
  } else {
   if (i39) {
    i21 = HEAP32[i41 + 8 >> 2] | 0;
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i21 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i45 = HEAP32[i21 + 36 >> 2] | 0;
     break;
    } else {
     i45 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i21) | 0;
     break;
    }
   } else {
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i41 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i45 = HEAP32[i41 + 36 >> 2] | 0;
     break;
    } else {
     i45 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i41) | 0;
     break;
    }
   }
  }
 } while (0);
 L65 : do {
  if ((i37 | 0) == 0) {
   i46 = 0;
   i47 = 0;
   i48 = 0;
  } else {
   i41 = i37 + 8 | 0;
   i39 = (HEAP32[i41 >> 2] | 0) == 0;
   do {
    if (i39 | i42) {
     if (i39) {
      i46 = 0;
      i47 = 0;
      i48 = 0;
      break L65;
     }
    } else {
     __ZNK7WebCore11RenderStyle10lineHeightEv(i12, i45);
     i21 = HEAP8[i12 + 5 | 0] | 0;
     if ((i21 << 24 >> 24 | 0) == 15 | (i21 << 24 >> 24 | 0) == 10) {
      i49 = 0;
     } else {
      if ((HEAP8[i12 + 6 | 0] & 1) == 0) {
       d50 = +(HEAP32[i12 >> 2] | 0);
      } else {
       d50 = +HEAPF32[i12 >> 2];
      }
      i49 = d50 < +0;
     }
     i20 = i49 & i44;
     if (i21 << 24 >> 24 == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
      if (i20) {
       break;
      } else {
       i46 = 0;
       i47 = 0;
       i48 = 0;
       break L65;
      }
     } else {
      if (i20) {
       break;
      } else {
       i46 = 0;
       i47 = 0;
       i48 = 0;
       break L65;
      }
     }
    }
   } while (0);
   i39 = __ZNK7WebCore11RenderStyle4fontEv(i45) | 0;
   i23 = HEAP32[i39 + 24 >> 2] | 0;
   i20 = i23 + 44 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i22 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i23, i39 | 0, 0) | 0;
    i39 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] & 3](i22, 32) | 0;
    HEAP32[i20 >> 2] = i39;
    i51 = i39;
   } else {
    i51 = i21;
   }
   HEAP32[i13 >> 2] = i51;
   i21 = HEAP32[i41 >> 2] | 0;
   if ((i21 | 0) == (HEAP32[i37 + 4 >> 2] | 0)) {
    i39 = i21 + 1 | 0;
    i20 = i37 | 0;
    i22 = HEAP32[i20 >> 2] | 0;
    do {
     if (i22 >>> 0 > i13 >>> 0) {
      i40 = 62;
     } else {
      if ((i22 + (i21 << 2) | 0) >>> 0 <= i13 >>> 0) {
       i40 = 62;
       break;
      }
      __ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i37, i39);
      i23 = HEAP32[i20 >> 2] | 0;
      i52 = i23 + (i13 - i22 >> 2 << 2) | 0;
      i53 = i23;
     }
    } while (0);
    if ((i40 | 0) == 62) {
     __ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i37, i39);
     i52 = i13;
     i53 = HEAP32[i20 >> 2] | 0;
    }
    HEAP32[i53 + (HEAP32[i41 >> 2] << 2) >> 2] = HEAP32[i52 >> 2];
   } else {
    HEAP32[(HEAP32[i37 >> 2] | 0) + (i21 << 2) >> 2] = i51;
   }
   i22 = (HEAP32[i41 >> 2] | 0) + 1 | 0;
   HEAP32[i41 >> 2] = i22;
   if ((i22 | 0) == 0) {
    i46 = 0;
    i47 = 0;
    i48 = 0;
    break;
   }
   i22 = i37 | 0;
   i23 = i1 + 56 | 0;
   i19 = i2 + 24 | 0;
   i28 = i2 + 20 | 0;
   i3 = 0;
   i18 = 0;
   i27 = 0;
   i24 = 0;
   while (1) {
    i25 = HEAP32[(HEAP32[i22 >> 2] | 0) + (i18 << 2) >> 2] | 0;
    i26 = (HEAP32[i23 >> 2] & 32 | 0) == 0;
    i32 = i25 + 16 | 0;
    i31 = _round(+(+HEAPF32[i32 >> 2])) | 0;
    if (i26) {
     i54 = i31;
    } else {
     i26 = i25 + 20 | 0;
     i30 = (_round(+(+HEAPF32[i26 >> 2])) | 0) + i31 | 0;
     i31 = _round(+(+HEAPF32[i32 >> 2])) | 0;
     i54 = i30 + (((_round(+(+HEAPF32[i26 >> 2])) | 0) + i31 | 0) / -2 & -1) | 0;
    }
    if ((HEAP32[i23 >> 2] & 32 | 0) == 0) {
     i55 = _round(+(+HEAPF32[i25 + 20 >> 2])) | 0;
    } else {
     i31 = _round(+(+HEAPF32[i32 >> 2])) | 0;
     i55 = ((_round(+(+HEAPF32[i25 + 20 >> 2])) | 0) + i31 | 0) / 2 & -1;
    }
    i31 = i25 + 28 | 0;
    i26 = _round(+(+HEAPF32[i31 >> 2])) | 0;
    i30 = _round(+(+HEAPF32[i32 >> 2])) | 0;
    i32 = ((i26 - i30 - (_round(+(+HEAPF32[i25 + 20 >> 2])) | 0) | 0) / 2 & -1) + i54 | 0;
    i25 = (_round(+(+HEAPF32[i31 >> 2])) | 0) - i32 | 0;
    if (i42) {
     if ((i3 & 1) == 0) {
      HEAP32[i4 >> 2] = i54;
      i56 = i55;
      i57 = 1;
     } else {
      i31 = HEAP32[i4 >> 2] | 0;
      HEAP32[i4 >> 2] = (i31 | 0) < (i54 | 0) ? i54 : i31;
      i31 = HEAP32[i5 >> 2] | 0;
      i56 = (i31 | 0) < (i55 | 0) ? i55 : i31;
      i57 = i3;
     }
     HEAP32[i5 >> 2] = i56;
     i58 = 1;
     i59 = i57;
    } else {
     i58 = i24;
     i59 = i3;
    }
    if (i44) {
     if ((i59 & 1) == 0) {
      HEAP32[i4 >> 2] = i32;
      i60 = i25;
      i61 = 1;
     } else {
      i31 = HEAP32[i4 >> 2] | 0;
      HEAP32[i4 >> 2] = (i31 | 0) < (i32 | 0) ? i32 : i31;
      i31 = HEAP32[i5 >> 2] | 0;
      i60 = (i31 | 0) < (i25 | 0) ? i25 : i31;
      i61 = i59;
     }
     HEAP32[i5 >> 2] = i60;
     i62 = 1;
     i63 = i61;
    } else {
     i62 = i27;
     i63 = i59;
    }
    if ((HEAP8[i6] & 1) == 0) {
     HEAP8[i6] = +(i54 | 0) - +HEAPF32[((HEAP32[i43 >> 2] & 2048 | 0) == 0 ? i28 : i19) >> 2] > +0 | 0;
    }
    if ((HEAP8[i7] & 1) == 0) {
     HEAP8[i7] = +(i55 | 0) + +HEAPF32[((HEAP32[i43 >> 2] & 2048 | 0) == 0 ? i28 : i19) >> 2] > +0 | 0;
    }
    i31 = i18 + 1 | 0;
    if (i31 >>> 0 < (HEAP32[i41 >> 2] | 0) >>> 0) {
     i3 = i63;
     i18 = i31;
     i27 = i62;
     i24 = i58;
    } else {
     break;
    }
   }
   i46 = (i58 & 1) != 0;
   i47 = (i62 & 1) != 0;
   i48 = i63;
  }
 } while (0);
 if (i47 | i44 ^ 1) {
  i64 = i48;
 } else {
  i44 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 80 >> 2] & 3](i2, (HEAP32[i1 + 56 >> 2] | 0) >>> 5 & 1) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 84 >> 2] & 15](i14, i2);
  i47 = (HEAP32[i14 >> 2] | 0) - i44 | 0;
  if ((i48 & 1) == 0) {
   HEAP32[i4 >> 2] = i44;
   i65 = i47;
   i66 = 1;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = (i14 | 0) < (i44 | 0) ? i44 : i14;
   i14 = HEAP32[i5 >> 2] | 0;
   i65 = (i14 | 0) < (i47 | 0) ? i47 : i14;
   i66 = i48;
  }
  HEAP32[i5 >> 2] = i65;
  i65 = i2 + 24 | 0;
  i48 = i2 + 20 | 0;
  HEAP8[i6] = +(i44 | 0) - +HEAPF32[((HEAP32[i43 >> 2] & 2048 | 0) == 0 ? i48 : i65) >> 2] > +0 | 0;
  HEAP8[i7] = +(i47 | 0) + +HEAPF32[((HEAP32[i43 >> 2] & 2048 | 0) == 0 ? i48 : i65) >> 2] > +0 | 0;
  i64 = i66;
 }
 i66 = HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] | 0;
 L133 : do {
  if ((i66 & 2048 | 0) == 0) {
   i65 = (HEAP32[i43 >> 2] & 131072 | 0) == 0;
   do {
    if ((i66 & 768 | 0) == 256 | (i66 & 4096 | 0) != 0) {
     if (i65) {
      i67 = i64;
      break L133;
     }
    } else {
     if (!i65) {
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] & 31](i2) | 0)) {
      break;
     }
     if ((HEAP32[i2 + 56 >> 2] & 4 | 0) == 0) {
      i67 = i64;
      break L133;
     }
    }
   } while (0);
   i65 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] | 0;
   if ((i65 & 4 | 0) == 0) {
    if ((HEAP32[i1 + 32 >> 2] & 2048 | 0) != 0) {
     i67 = i64;
     break;
    }
    i68 = (i65 & 8 | 0) == 0;
   } else {
    i68 = 0;
   }
   if (i68 | i46) {
    i67 = i64;
    break;
   }
   i65 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i45) | 0;
   i48 = i1 + 56 | 0;
   i47 = (HEAP32[i48 >> 2] & 32 | 0) == 0;
   i44 = i65 + 4 | 0;
   i14 = _round(+(+HEAPF32[i44 >> 2])) | 0;
   if (i47) {
    i69 = i14;
   } else {
    i47 = i65 + 8 | 0;
    i65 = (_round(+(+HEAPF32[i47 >> 2])) | 0) + i14 | 0;
    i14 = _round(+(+HEAPF32[i44 >> 2])) | 0;
    i69 = i65 + (((_round(+(+HEAPF32[i47 >> 2])) | 0) + i14 | 0) / -2 & -1) | 0;
   }
   i14 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i45) | 0;
   if ((HEAP32[i48 >> 2] & 32 | 0) == 0) {
    i70 = _round(+(+HEAPF32[i14 + 8 >> 2])) | 0;
   } else {
    i48 = _round(+(+HEAPF32[i14 + 4 >> 2])) | 0;
    i70 = ((_round(+(+HEAPF32[i14 + 8 >> 2])) | 0) + i48 | 0) / 2 & -1;
   }
   if ((i64 & 1) == 0) {
    HEAP32[i4 >> 2] = i69;
    i71 = i70;
    i72 = 1;
   } else {
    i48 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = (i48 | 0) < (i69 | 0) ? i69 : i48;
    i48 = HEAP32[i5 >> 2] | 0;
    i71 = (i48 | 0) < (i70 | 0) ? i70 : i48;
    i72 = i64;
   }
   HEAP32[i5 >> 2] = i71;
   i48 = i2 + 24 | 0;
   i14 = i2 + 20 | 0;
   HEAP8[i6] = +(i69 | 0) - +HEAPF32[((HEAP32[i43 >> 2] & 2048 | 0) == 0 ? i14 : i48) >> 2] > +0 | 0;
   HEAP8[i7] = +(i70 | 0) + +HEAPF32[((HEAP32[i43 >> 2] & 2048 | 0) == 0 ? i14 : i48) >> 2] > +0 | 0;
   i67 = i72;
  } else {
   i67 = i64;
  }
 } while (0);
 i64 = HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] | 0;
 L158 : do {
  if ((i64 & 2048 | 0) == 0) {
   i72 = (HEAP32[i43 >> 2] & 131072 | 0) == 0;
   do {
    if ((i64 & 768 | 0) == 256 | (i64 & 4096 | 0) != 0) {
     if (i72) {
      i73 = i67;
      break L158;
     }
    } else {
     if (!i72) {
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] & 31](i2) | 0)) {
      break;
     }
     if ((HEAP32[i2 + 56 >> 2] & 4 | 0) == 0) {
      i73 = i67;
      break L158;
     }
    }
   } while (0);
   if ((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0) {
    i73 = i67;
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] & 8 | 0) == 0 | (i38 | 0) == 0) {
    i73 = i67;
    break;
   }
   if ((HEAP8[i38 + 16 | 0] & 1) == 0) {
    i73 = i67;
    break;
   }
   i72 = i38 + 8 | 0;
   i70 = HEAP32[i72 >> 2] | 0;
   i69 = i38 + 12 | 0;
   i71 = HEAP32[i69 >> 2] | 0;
   if ((i67 & 1) == 0) {
    HEAP32[i4 >> 2] = i70;
    i74 = i71;
    i75 = 1;
   } else {
    i46 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = (i46 | 0) < (i70 | 0) ? i70 : i46;
    i46 = HEAP32[i5 >> 2] | 0;
    i74 = (i46 | 0) < (i71 | 0) ? i71 : i46;
    i75 = i67;
   }
   HEAP32[i5 >> 2] = i74;
   i46 = i2 + 24 | 0;
   i71 = i2 + 20 | 0;
   HEAP8[i6] = +(HEAP32[i72 >> 2] | 0) - +HEAPF32[((HEAP32[i43 >> 2] & 2048 | 0) == 0 ? i71 : i46) >> 2] > +0 | 0;
   HEAP8[i7] = +(HEAP32[i69 >> 2] | 0) + +HEAPF32[((HEAP32[i43 >> 2] & 2048 | 0) == 0 ? i71 : i46) >> 2] > +0 | 0;
   i46 = HEAP32[i72 >> 2] | 0;
   i71 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i45) | 0;
   i70 = i1 + 56 | 0;
   i68 = (HEAP32[i70 >> 2] & 32 | 0) == 0;
   i66 = i71 + 4 | 0;
   i48 = _round(+(+HEAPF32[i66 >> 2])) | 0;
   if (i68) {
    i76 = i48;
   } else {
    i68 = i71 + 8 | 0;
    i71 = (_round(+(+HEAPF32[i68 >> 2])) | 0) + i48 | 0;
    i48 = _round(+(+HEAPF32[i66 >> 2])) | 0;
    i76 = i71 + (((_round(+(+HEAPF32[i68 >> 2])) | 0) + i48 | 0) / -2 & -1) | 0;
   }
   i48 = i46 - i76 | 0;
   i46 = (i48 | 0) > 0 ? i48 : 0;
   i48 = HEAP32[i72 >> 2] | 0;
   HEAP32[i72 >> 2] = (i46 | 0) < (i48 | 0) ? i46 : i48;
   i48 = HEAP32[i69 >> 2] | 0;
   i46 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i45) | 0;
   if ((HEAP32[i70 >> 2] & 32 | 0) == 0) {
    i77 = _round(+(+HEAPF32[i46 + 8 >> 2])) | 0;
   } else {
    i70 = _round(+(+HEAPF32[i46 + 4 >> 2])) | 0;
    i77 = ((_round(+(+HEAPF32[i46 + 8 >> 2])) | 0) + i70 | 0) / 2 & -1;
   }
   i70 = i48 - i77 | 0;
   i48 = (i70 | 0) > 0 ? i70 : 0;
   i70 = HEAP32[i69 >> 2] | 0;
   HEAP32[i69 >> 2] = (i48 | 0) < (i70 | 0) ? i48 : i70;
   i73 = i75;
  } else {
   i73 = i67;
  }
 } while (0);
 i67 = HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] | 0;
 if ((i67 & 2048 | 0) != 0) {
  STACKTOP = i8;
  return;
 }
 do {
  if ((i67 & 768 | 0) == 256 | (i67 & 4096 | 0) != 0) {
   if ((HEAP32[i43 >> 2] & 131072 | 0) != 0) {
    break;
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] & 32 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i43 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i45) | 0;
 i67 = i1 + 56 | 0;
 i1 = (HEAP32[i67 >> 2] & 32 | 0) == 0;
 i75 = i43 + 4 | 0;
 i77 = _round(+(+HEAPF32[i75 >> 2])) | 0;
 if (i1) {
  i78 = i77;
 } else {
  i1 = i43 + 8 | 0;
  i43 = (_round(+(+HEAPF32[i1 >> 2])) | 0) + i77 | 0;
  i77 = _round(+(+HEAPF32[i75 >> 2])) | 0;
  i78 = i43 + (((_round(+(+HEAPF32[i1 >> 2])) | 0) + i77 | 0) / -2 & -1) | 0;
 }
 i77 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i45) | 0;
 if ((HEAP32[i67 >> 2] & 32 | 0) == 0) {
  i79 = _round(+(+HEAPF32[i77 + 8 >> 2])) | 0;
 } else {
  i67 = _round(+(+HEAPF32[i77 + 4 >> 2])) | 0;
  i79 = ((_round(+(+HEAPF32[i77 + 8 >> 2])) | 0) + i67 | 0) / 2 & -1;
 }
 do {
  if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
   i80 = i79;
   i81 = i78;
  } else {
   i67 = HEAP32[i17 >> 2] | 0;
   i77 = HEAP32[i67 + 20 >> 2] | 0;
   if ((i77 & 768 | 0) == 256 | (i77 & 4096 | 0) != 0) {
    i80 = i79;
    i81 = i78;
    break;
   }
   i77 = i67;
   i45 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i67 >> 2] | 0) + 752 >> 2] & 31](i77) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i67 >> 2] | 0) + 720 >> 2] & 15](i9, i77);
   i77 = HEAP32[i9 >> 2] | 0;
   i67 = HEAP32[i17 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i67 >> 2] | 0) + 784 >> 2] & 1](i15, i67, 0);
   i67 = i45 + i78 + i77 + (HEAP32[i15 >> 2] | 0) | 0;
   i77 = HEAP32[i17 >> 2] | 0;
   if ((HEAP32[i77 + 20 >> 2] & 768 | 0) == 256) {
    i82 = 0;
   } else {
    i82 = i77;
   }
   i77 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i82 >> 2] | 0) + 756 >> 2] & 31](i82) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i82 >> 2] | 0) + 724 >> 2] & 15](i10, i82);
   i45 = HEAP32[i10 >> 2] | 0;
   i1 = HEAP32[i17 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 788 >> 2] & 1](i16, i1, 0);
   i80 = i77 + i79 + i45 + (HEAP32[i16 >> 2] | 0) | 0;
   i81 = i67;
  }
 } while (0);
 if ((i73 & 1) == 0) {
  HEAP32[i4 >> 2] = i81;
  i83 = i80;
 } else {
  i73 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = (i73 | 0) < (i81 | 0) ? i81 : i73;
  i73 = HEAP32[i5 >> 2] | 0;
  i83 = (i73 | 0) < (i80 | 0) ? i80 : i73;
 }
 HEAP32[i5 >> 2] = i83;
 HEAP8[i6] = 1;
 HEAP8[i7] = 1;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore13RootInlineBox16lineSelectionGapERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeENS_10LayoutUnitES9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, d53 = +0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i11 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
 i11 = i7;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i7 >> 2] = HEAP32[i11 >> 2];
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = i10 + 16 | 0;
 i14 = i10 + 32 | 0;
 i15 = i10 + 40 | 0;
 i16 = i10 + 48 | 0;
 i17 = i10 + 56 | 0;
 i18 = i10 + 72 | 0;
 i19 = i10 + 80 | 0;
 i20 = i10 + 88 | 0;
 i21 = i10 + 96 | 0;
 i22 = i10 + 112 | 0;
 i23 = i10 + 128 | 0;
 i24 = i23 | 0;
 i25 = i23;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i27 = i2 | 0;
 i28 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i27) | 0;
 L1 : do {
  if ((i28 | 0) == 0) {
   i29 = 0;
  } else {
   i30 = i28;
   i31 = 0;
   while (1) {
    i32 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 108 >> 2] & 31](i30) | 0;
    if ((i32 | 0) == 1 & (i31 | 0) == 3) {
     i29 = 4;
     break L1;
    }
    i33 = (i31 | 0) == 1;
    if ((i32 | 0) == 3 & i33) {
     i29 = 4;
     break L1;
    }
    do {
     if ((i31 | 0) == 0) {
      i34 = i32;
     } else {
      if ((i32 | 0) == 0) {
       if (i33) {
        i29 = 4;
        break L1;
       } else {
        i34 = i31;
        break;
       }
      } else if (!((i32 | 0) == 3 | (i32 | 0) == 1)) {
       i34 = i31;
       break;
      }
      if ((i31 | 0) == 2 | (i31 | 0) == 0) {
       i34 = i32;
       break;
      }
      if ((i32 | 0) == 0 & i33) {
       i29 = 4;
       break L1;
      } else {
       i34 = i31;
      }
     }
    } while (0);
    if ((i34 | 0) == 4) {
     i29 = 4;
     break L1;
    }
    i33 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i30) | 0;
    if ((i33 | 0) == 0) {
     i29 = i34;
     break;
    } else {
     i30 = i33;
     i31 = i34;
    }
   }
  }
 } while (0);
 i34 = i2 + 16 | 0;
 __ZN7WebCore11RenderBlock19getSelectionGapInfoENS_12RenderObject14SelectionStateERbS3_(HEAP32[i34 >> 2] | 0, i29, i11, i12);
 _memset(i1 | 0, 0, 48) | 0;
 i29 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i27) | 0;
 L15 : do {
  if ((i29 | 0) == 0) {
   i35 = 0;
  } else {
   i2 = i29;
   while (1) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 108 >> 2] & 31](i2) | 0) != 0) {
     i35 = i2;
     break L15;
    }
    i28 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i2) | 0;
    if ((i28 | 0) == 0) {
     i35 = 0;
     break;
    } else {
     i2 = i28;
    }
   }
  }
 } while (0);
 i29 = __ZNK7WebCore13InlineFlowBox13lastLeafChildEv(i27) | 0;
 L20 : do {
  if ((i29 | 0) == 0) {
   i36 = 0;
  } else {
   i27 = i29;
   while (1) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 108 >> 2] & 31](i27) | 0) != 0) {
     i36 = i27;
     break L20;
    }
    i2 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i27) | 0;
    if ((i2 | 0) == 0) {
     i36 = 0;
     break;
    } else {
     i27 = i2;
    }
   }
  }
 } while (0);
 if ((HEAP8[i11] & 1) != 0) {
  i11 = HEAP32[i34 >> 2] | 0;
  i29 = HEAP32[(HEAP32[i35 + 12 >> 2] | 0) + 16 >> 2] | 0;
  d37 = +HEAPF32[((HEAP32[i35 + 32 >> 2] & 2048 | 0) == 0 ? i35 + 24 | 0 : i35 + 20 | 0) >> 2];
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
  HEAP32[i14 >> 2] = i38;
  HEAP32[i15 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i16 >> 2] = HEAP32[i7 >> 2];
  __ZN7WebCore11RenderBlock23logicalLeftSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeEPNS_12RenderObjectENS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i13, i11, i3, i4, i5, i29, i14, i15, i16, i8, i9);
  __ZN7WebCore10LayoutRect5uniteERKS0_(i1 | 0, i13);
 }
 if ((HEAP8[i12] & 1) != 0) {
  i12 = HEAP32[i34 >> 2] | 0;
  i13 = HEAP32[(HEAP32[i36 + 12 >> 2] | 0) + 16 >> 2] | 0;
  d37 = +HEAPF32[((HEAP32[i36 + 32 >> 2] & 2048 | 0) == 0 ? i36 + 24 | 0 : i36 + 20 | 0) >> 2] + +HEAPF32[i36 + 28 >> 2];
  do {
   if (d37 < +2147483647) {
    if (d37 <= +-2147483648) {
     i39 = -2147483648;
     break;
    }
    i39 = ~~d37;
   } else {
    i39 = 2147483647;
   }
  } while (0);
  HEAP32[i18 >> 2] = i39;
  HEAP32[i19 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i20 >> 2] = HEAP32[i7 >> 2];
  __ZN7WebCore11RenderBlock24logicalRightSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeEPNS_12RenderObjectENS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i17, i12, i3, i4, i5, i13, i18, i19, i20, i8, i9);
  __ZN7WebCore10LayoutRect5uniteERKS0_(i1 + 32 | 0, i17);
 }
 if ((i35 | 0) == 0 | (i35 | 0) == (i36 | 0)) {
  STACKTOP = i10;
  return;
 }
 d37 = +HEAPF32[((HEAP32[i35 + 32 >> 2] & 2048 | 0) == 0 ? i35 + 24 | 0 : i35 + 20 | 0) >> 2] + +HEAPF32[i35 + 28 >> 2];
 do {
  if (d37 < +2147483647) {
   if (d37 <= +-2147483648) {
    i40 = -2147483648;
    break;
   }
   i40 = ~~d37;
  } else {
   i40 = 2147483647;
  }
 } while (0);
 i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 108 >> 2] & 31](i35) | 0;
 i8 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i35) | 0;
 i35 = (i17 | 0) == 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i17 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i7 = i21 | 0;
 i20 = i21 + 4 | 0;
 i19 = i21 + 8 | 0;
 i18 = i21 + 12 | 0;
 i13 = i5 + 4 | 0;
 i12 = i5 | 0;
 i39 = i22 + 8 | 0;
 i16 = i22 + 12 | 0;
 i15 = i1 + 16 | 0;
 i1 = i9 | 0;
 i14 = i22 | 0;
 i29 = i22 + 4 | 0;
 i11 = i23 + 8 | 0;
 i23 = i5;
 if ((i9 | 0) == 0) {
  i9 = i40;
  i5 = i8;
  i38 = i35;
  while (1) {
   i27 = i5;
   do {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 108 >> 2] & 31](i5) | 0) == 0) {
     i41 = i9;
    } else {
     i2 = i5 + 32 | 0;
     i28 = i5 + 20 | 0;
     i31 = i5 + 24 | 0;
     d37 = +HEAPF32[((HEAP32[i2 >> 2] & 2048 | 0) == 0 ? i31 : i28) >> 2] - +(i9 | 0);
     do {
      if (d37 < +2147483647) {
       if (d37 <= +-2147483648) {
        i42 = -2147483648;
        break;
       }
       i42 = ~~d37;
      } else {
       i42 = 2147483647;
      }
     } while (0);
     HEAP32[i7 >> 2] = i9;
     HEAP32[i20 >> 2] = i17;
     HEAP32[i19 >> 2] = i42;
     HEAP32[i18 >> 2] = i6;
     if ((HEAP32[(HEAP32[i34 >> 2] | 0) + 20 >> 2] & 8192 | 0) == 0) {
      i43 = HEAP32[i13 >> 2] | 0;
      i44 = HEAP32[i12 >> 2] | 0;
     } else {
      i43 = HEAP32[i23 >> 2] | 0;
      i44 = HEAP32[i23 + 4 >> 2] | 0;
     }
     HEAP32[i7 >> 2] = i9 + i43;
     HEAP32[i20 >> 2] = i17 + i44;
     __ZN7WebCore11RenderBlock25logicalRectToPhysicalRectERKNS_11LayoutPointERKNS_10LayoutRectE(i22, i3, i4, i21);
     do {
      if (!i38) {
       if ((HEAP32[i39 >> 2] | 0) <= 0) {
        break;
       }
       if ((HEAP32[i16 >> 2] | 0) <= 0) {
        break;
       }
       __ZN7WebCore10LayoutRect5uniteERKS0_(i15, i22);
      }
     } while (0);
     d37 = +HEAPF32[((HEAP32[i2 >> 2] & 2048 | 0) == 0 ? i31 : i28) >> 2] + +HEAPF32[i5 + 28 >> 2];
     if (d37 >= +2147483647) {
      i41 = 2147483647;
      break;
     }
     if (d37 <= +-2147483648) {
      i41 = -2147483648;
      break;
     }
     i41 = ~~d37;
    }
   } while (0);
   if ((i5 | 0) == (i36 | 0)) {
    i45 = 72;
    break;
   }
   i30 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 108 >> 2] & 31](i5) | 0;
   i33 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i5) | 0;
   if ((i33 | 0) == 0) {
    i45 = 73;
    break;
   } else {
    i9 = i41;
    i5 = i33;
    i38 = (i30 | 0) == 0;
   }
  }
  if ((i45 | 0) == 72) {
   STACKTOP = i10;
   return;
  } else if ((i45 | 0) == 73) {
   STACKTOP = i10;
   return;
  }
 } else {
  i46 = i40;
  i47 = i8;
  i48 = i35;
 }
 while (1) {
  i35 = i47;
  do {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 108 >> 2] & 31](i47) | 0) == 0) {
    i49 = i46;
   } else {
    i8 = i47 + 32 | 0;
    i40 = i47 + 20 | 0;
    i38 = i47 + 24 | 0;
    d37 = +HEAPF32[((HEAP32[i8 >> 2] & 2048 | 0) == 0 ? i38 : i40) >> 2] - +(i46 | 0);
    do {
     if (d37 < +2147483647) {
      if (d37 <= +-2147483648) {
       i50 = -2147483648;
       break;
      }
      i50 = ~~d37;
     } else {
      i50 = 2147483647;
     }
    } while (0);
    HEAP32[i7 >> 2] = i46;
    HEAP32[i20 >> 2] = i17;
    HEAP32[i19 >> 2] = i50;
    HEAP32[i18 >> 2] = i6;
    if ((HEAP32[(HEAP32[i34 >> 2] | 0) + 20 >> 2] & 8192 | 0) == 0) {
     i51 = HEAP32[i13 >> 2] | 0;
     i52 = HEAP32[i12 >> 2] | 0;
    } else {
     i51 = HEAP32[i23 >> 2] | 0;
     i52 = HEAP32[i23 + 4 >> 2] | 0;
    }
    HEAP32[i7 >> 2] = i46 + i51;
    HEAP32[i20 >> 2] = i17 + i52;
    __ZN7WebCore11RenderBlock25logicalRectToPhysicalRectERKNS_11LayoutPointERKNS_10LayoutRectE(i22, i3, i4, i21);
    do {
     if (!i48) {
      i28 = HEAP32[i39 >> 2] | 0;
      if ((i28 | 0) <= 0) {
       break;
      }
      i31 = HEAP32[i16 >> 2] | 0;
      if ((i31 | 0) <= 0) {
       break;
      }
      i2 = i47 + 12 | 0;
      if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 0) {
       i5 = HEAP32[i1 >> 2] | 0;
       d37 = +(+(HEAP32[i14 >> 2] | 0));
       d53 = +(+(HEAP32[i29 >> 2] | 0));
       HEAPF32[i24 >> 2] = d37;
       HEAPF32[i24 + 4 >> 2] = d53;
       d53 = +(+(i28 | 0));
       d37 = +(+(i31 | 0));
       HEAPF32[i11 >> 2] = d53;
       HEAPF32[i11 + 4 >> 2] = d37;
       __ZNK7WebCore12RenderObject24selectionBackgroundColorEv(i26, HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] | 0);
       __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i5, i25, i26, (HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
      }
      __ZN7WebCore10LayoutRect5uniteERKS0_(i15, i22);
     }
    } while (0);
    d37 = +HEAPF32[((HEAP32[i8 >> 2] & 2048 | 0) == 0 ? i38 : i40) >> 2] + +HEAPF32[i47 + 28 >> 2];
    if (d37 >= +2147483647) {
     i49 = 2147483647;
     break;
    }
    if (d37 <= +-2147483648) {
     i49 = -2147483648;
     break;
    }
    i49 = ~~d37;
   }
  } while (0);
  if ((i47 | 0) == (i36 | 0)) {
   i45 = 70;
   break;
  }
  i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 108 >> 2] & 31](i47) | 0;
  i2 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i47) | 0;
  if ((i2 | 0) == 0) {
   i45 = 71;
   break;
  } else {
   i46 = i49;
   i47 = i2;
   i48 = (i27 | 0) == 0;
  }
 }
 if ((i45 | 0) == 70) {
  STACKTOP = i10;
  return;
 } else if ((i45 | 0) == 71) {
  STACKTOP = i10;
  return;
 }
}
function __ZN7WebCore13RootInlineBox22verticalPositionForBoxEPNS_9InlineBoxERNS_21VerticalPositionCacheE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 48 | 0;
 i11 = i5 + 56 | 0;
 i12 = i5 + 64 | 0;
 i13 = i5 + 72 | 0;
 i14 = i5 + 80 | 0;
 i15 = i5 + 88 | 0;
 i16 = HEAP32[i3 + 16 >> 2] | 0;
 i17 = HEAP32[i16 + 20 >> 2] | 0;
 if ((i17 & 768 | 0) == 256 | (i17 & 4096 | 0) != 0) {
  i17 = HEAP32[i3 + 12 >> 2] | 0;
  d18 = +HEAPF32[((HEAP32[i17 + 32 >> 2] & 2048 | 0) == 0 ? i17 + 20 | 0 : i17 + 24 | 0) >> 2];
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
  HEAP32[i1 >> 2] = i19;
  STACKTOP = i5;
  return;
 }
 i19 = i16;
 i17 = i16 + 20 | 0;
 if ((HEAP32[i17 >> 2] & 1024 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i2 + 32 >> 2] & 1 | 0) == 0) {
  i20 = 0;
 } else {
  i20 = (HEAP8[(HEAP32[(HEAP32[(HEAP32[i16 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) != 0;
 }
 i21 = (HEAP32[i16 + 24 >> 2] & 4 | 0) == 0 | i20;
 do {
  if (!i21) {
   i22 = __ZNK7WebCore21VerticalPositionCache3getEPNS_12RenderObjectENS_12FontBaselineE(i4, i16, (HEAP32[i2 + 56 >> 2] | 0) >>> 5 & 1) | 0;
   if ((i22 | 0) == -2147483648) {
    break;
   }
   HEAP32[i1 >> 2] = i22;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i22 = i16 + 36 | 0;
 i23 = (HEAP32[(HEAP32[i22 >> 2] | 0) + 48 >> 2] | 0) >>> 16 & 15;
 if ((i23 - 6 | 0) >>> 0 < 2 >>> 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i24 = HEAP32[i16 + 8 >> 2] | 0;
 do {
  if ((HEAP32[i24 + 24 >> 2] & 4 | 0) == 0) {
   i25 = 0;
  } else {
   if ((((HEAP32[(HEAP32[i24 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 16 & 15) - 6 | 0) >>> 0 < 2 >>> 0) {
    i25 = 0;
    break;
   }
   i26 = HEAP32[i3 + 12 >> 2] | 0;
   d18 = +HEAPF32[((HEAP32[i26 + 32 >> 2] & 2048 | 0) == 0 ? i26 + 20 | 0 : i26 + 24 | 0) >> 2];
   if (d18 >= +2147483647) {
    i25 = 2147483647;
    break;
   }
   if (d18 <= +-2147483648) {
    i25 = -2147483648;
    break;
   }
   i25 = ~~d18;
  }
 } while (0);
 L31 : do {
  if ((i23 | 0) == 0) {
   i27 = i25;
  } else {
   do {
    if (i20) {
     if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i24 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
      i28 = HEAP32[i24 + 36 >> 2] | 0;
      break;
     } else {
      i28 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i24) | 0;
      break;
     }
    } else {
     i28 = HEAP32[i24 + 36 >> 2] | 0;
    }
   } while (0);
   i3 = __ZNK7WebCore11RenderStyle4fontEv(i28) | 0;
   i26 = HEAP32[i3 + 24 >> 2] | 0;
   i29 = i26 + 44 | 0;
   i30 = HEAP32[i29 >> 2] | 0;
   if ((i30 | 0) == 0) {
    i31 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i26, i3 | 0, 0) | 0;
    i26 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i31 >> 2] | 0) + 8 >> 2] & 3](i31, 32) | 0;
    HEAP32[i29 >> 2] = i26;
    i32 = i26;
   } else {
    i32 = i30;
   }
   i30 = ~~(+HEAPF32[i3 + 12 >> 2] + +.5);
   i3 = (HEAP32[i24 + 20 >> 2] | 0) >>> 13 & 1 ^ 1;
   switch (i23 | 0) {
   case 4:
    {
     i26 = i2 + 56 | 0;
     i29 = FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 816 >> 2] & 1](i19, (HEAP32[i26 >> 2] | 0) >>> 5 & 1, i20, i3, 0) | 0;
     i31 = (HEAP32[i26 >> 2] & 32 | 0) == 0;
     i26 = i32 + 16 | 0;
     i33 = _round(+(+HEAPF32[i26 >> 2])) | 0;
     if (i31) {
      i34 = i33;
     } else {
      i31 = i32 + 20 | 0;
      i35 = (_round(+(+HEAPF32[i31 >> 2])) | 0) + i33 | 0;
      i33 = _round(+(+HEAPF32[i26 >> 2])) | 0;
      i34 = i35 + (((_round(+(+HEAPF32[i31 >> 2])) | 0) + i33 | 0) / -2 & -1) | 0;
     }
     i27 = i29 + i25 - i34 | 0;
     break L31;
     break;
    }
   case 1:
    {
     d18 = +HEAPF32[i32 + 32 >> 2] * +.5;
     do {
      if (d18 < +2147483647) {
       if (d18 <= +-2147483648) {
        i36 = -2147483648;
        break;
       }
       i36 = ~~d18;
      } else {
       i36 = 2147483647;
      }
     } while (0);
     FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 812 >> 2] & 3](i10, i19, i20, i3, 0);
     i27 = i25 - i36 + ((HEAP32[i10 >> 2] | 0) / -2 & -1) + (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 816 >> 2] & 1](i19, (HEAP32[i2 + 56 >> 2] | 0) >>> 5 & 1, i20, i3, 0) | 0) | 0;
     break L31;
     break;
    }
   case 2:
    {
     i27 = i25 + 1 + ((i30 | 0) / 5 & -1) | 0;
     break L31;
     break;
    }
   case 3:
    {
     i27 = i25 - 1 + ((i30 | 0) / -3 & -1) | 0;
     break L31;
     break;
    }
   case 5:
    {
     i29 = i2 + 56 | 0;
     if ((HEAP32[i29 >> 2] & 32 | 0) == 0) {
      i37 = _round(+(+HEAPF32[i32 + 20 >> 2])) | 0;
     } else {
      i33 = _round(+(+HEAPF32[i32 + 16 >> 2])) | 0;
      i37 = ((_round(+(+HEAPF32[i32 + 20 >> 2])) | 0) + i33 | 0) / 2 & -1;
     }
     i33 = i37 + i25 | 0;
     if ((HEAP32[i17 >> 2] & 2048 | 0) != 0) {
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 96 >> 2] & 31](i16) | 0)) {
       i27 = i33;
       break L31;
      }
     }
     FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 812 >> 2] & 3](i11, i19, i20, i3, 0);
     i27 = (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 816 >> 2] & 1](i19, (HEAP32[i29 >> 2] | 0) >>> 5 & 1, i20, i3, 0) | 0) + i33 - (HEAP32[i11 >> 2] | 0) | 0;
     break L31;
     break;
    }
   case 8:
    {
     FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 812 >> 2] & 3](i12, i19, i20, i3, 0);
     i27 = ((HEAP32[i12 >> 2] | 0) / -2 & -1) + i25 + (FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 816 >> 2] & 1](i19, (HEAP32[i2 + 56 >> 2] | 0) >>> 5 & 1, i20, i3, 0) | 0) | 0;
     break L31;
     break;
    }
   case 9:
    {
     i33 = HEAP32[i22 >> 2] | 0;
     i29 = HEAP8[(HEAP32[i33 + 4 >> 2] | 0) + 57 | 0] | 0;
     if ((i29 << 24 >> 24 | 0) == 10 | (i29 << 24 >> 24 | 0) == 2) {
      i38 = __ZNK7WebCore11RenderStyle18computedLineHeightEPNS_10RenderViewE(i33, 0) | 0;
     } else {
      FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 812 >> 2] & 3](i13, i19, i20, i3, 0);
      i38 = HEAP32[i13 >> 2] | 0;
     }
     i33 = (HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] | 0) + 52 | 0;
     HEAP32[i15 >> 2] = i38;
     __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i14, i33, i15, HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
     i27 = i25 - (HEAP32[i14 >> 2] | 0) | 0;
     break L31;
     break;
    }
   default:
    {
     i27 = i25;
     break L31;
    }
   }
  }
 } while (0);
 do {
  if (!i21) {
   i25 = HEAP32[i2 + 56 >> 2] & 32;
   HEAP32[i6 >> 2] = i16;
   HEAP32[i7 >> 2] = i27;
   if ((i25 | 0) == 0) {
    __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_iEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_iS9_NS_10HashTraitsIS3_EENSB_IiEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_RiEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i8, i4 | 0, i6, i7);
    if ((HEAP8[i8 + 8 | 0] & 1) != 0) {
     break;
    }
    HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] = HEAP32[i7 >> 2];
    break;
   } else {
    __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_iEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_iS9_NS_10HashTraitsIS3_EENSB_IiEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_RiEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i9, i4 + 20 | 0, i6, i7);
    if ((HEAP8[i9 + 8 | 0] & 1) != 0) {
     break;
    }
    HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] = HEAP32[i7 >> 2];
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i27;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore13RootInlineBox18lineSnapAdjustmentENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, d46 = +0, d47 = +0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
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
 i11 = i2 + 16 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i12 + 36 >> 2] | 0;
 if ((HEAP32[(HEAP32[i13 + 24 >> 2] | 0) + 92 >> 2] & 1536 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i12 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 i15 = HEAP32[i14 + 8 >> 2] | 0;
 i16 = i14 + 72 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[i16 + 4 >> 2] | 0;
 i16 = i18;
 i19 = 0;
 do {
  if ((i15 | 0) != 0) {
   i20 = HEAP32[i15 + 36 >> 2] | 0;
   if (((HEAP32[i13 + 44 >> 2] ^ HEAP32[i20 + 44 >> 2]) & 24576 | 0) != 0) {
    break;
   }
   i21 = HEAP32[i15 + 100 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i22 = HEAP32[i21 + 24 >> 2] | 0;
     if ((i22 | 0) == 0) {
      break;
     }
     i23 = (HEAP32[i15 + 20 >> 2] & 8192 | 0) != 0;
     i24 = i23 ? i16 : i17;
     i23 ? i19 : i18;
     i23 = i24;
     i24 = (HEAP32[i12 + 20 >> 2] & 8192 | 0) == 0;
     i25 = i14 + 44 | 0;
     i26 = HEAP32[i25 + 4 >> 2] | 0;
     i27 = 0;
     i28 = i24 ? HEAP32[i25 >> 2] | 0 : i26;
     i24 ? i26 : i27;
     i27 = i28;
     i28 = HEAP32[i22 + 84 >> 2] | 0;
     i26 = i22 + 80 | 0;
     i24 = HEAP32[i26 >> 2] | 0;
     i25 = i28 - i24 | 0;
     if ((i28 | 0) == (i24 | 0)) {
      HEAP32[i1 >> 2] = 0;
      STACKTOP = i4;
      return;
     }
     i24 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i20) | 0;
     i28 = i2 + 56 | 0;
     i29 = (HEAP32[i28 >> 2] & 32 | 0) == 0;
     i30 = i24 + 4 | 0;
     i31 = _round(+(+HEAPF32[i30 >> 2])) | 0;
     if (i29) {
      i32 = i31;
     } else {
      i29 = i24 + 8 | 0;
      i24 = (_round(+(+HEAPF32[i29 >> 2])) | 0) + i31 | 0;
      i31 = _round(+(+HEAPF32[i30 >> 2])) | 0;
      i32 = i24 + (((_round(+(+HEAPF32[i29 >> 2])) | 0) + i31 | 0) / -2 & -1) | 0;
     }
     d33 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i22 | 0);
     do {
      if (d33 < +2147483647) {
       if (d33 <= +-2147483648) {
        i34 = -2147483648;
        break;
       }
       i34 = ~~d33;
      } else {
       i34 = 2147483647;
      }
     } while (0);
     i31 = i22 + 32 | 0;
     i29 = i22 + 24 | 0;
     i24 = i22 + 20 | 0;
     d33 = +(i23 | 0) + +HEAPF32[((HEAP32[i31 >> 2] & 2048 | 0) == 0 ? i24 : i29) >> 2];
     do {
      if (d33 < +2147483647) {
       if (d33 <= +-2147483648) {
        i35 = -2147483648;
        break;
       }
       i35 = ~~d33;
      } else {
       i35 = 2147483647;
      }
     } while (0);
     i22 = (HEAP32[i26 >> 2] | 0) + i23 | 0;
     i30 = i2 | 0;
     i36 = i2 + 32 | 0;
     i37 = HEAP32[i3 >> 2] | 0;
     d33 = +(i27 | 0) + +HEAPF32[((HEAP32[i36 >> 2] & 2048 | 0) == 0 ? i2 + 20 | 0 : i2 + 24 | 0) >> 2] + +(i37 | 0);
     do {
      if (d33 < +2147483647) {
       if (d33 <= +-2147483648) {
        i38 = -2147483648;
        break;
       }
       i38 = ~~d33;
      } else {
       i38 = 2147483647;
      }
     } while (0);
     i23 = __ZNK7WebCore11RenderStyle11fontMetricsEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] | 0) | 0;
     i26 = (HEAP32[i28 >> 2] & 32 | 0) == 0;
     i39 = i23 + 4 | 0;
     i40 = _round(+(+HEAPF32[i39 >> 2])) | 0;
     if (i26) {
      i41 = i40;
     } else {
      i26 = i23 + 8 | 0;
      i23 = (_round(+(+HEAPF32[i26 >> 2])) | 0) + i40 | 0;
      i40 = _round(+(+HEAPF32[i39 >> 2])) | 0;
      i41 = i23 + (((_round(+(+HEAPF32[i26 >> 2])) | 0) + i40 | 0) / -2 & -1) | 0;
     }
     i40 = i41 + i38 | 0;
     i26 = (HEAP32[i36 >> 2] & 2048 | 0) == 0;
     i23 = i14 + 80 | 0;
     i39 = HEAP32[i23 + 4 >> 2] | 0;
     i42 = 0;
     i43 = i26 ? HEAP32[i23 >> 2] | 0 : i39;
     i26 ? i39 : i42;
     i42 = i43;
     i43 = i14 | 0;
     do {
      if ((HEAP8[i43] & 2) == 0) {
       i44 = 0;
       i45 = i35;
      } else {
       if ((HEAP32[i14 + 60 >> 2] | 0) == 0) {
        i44 = 0;
        i45 = i35;
        break;
       }
       i39 = HEAP32[i11 >> 2] | 0;
       HEAP32[i7 >> 2] = i37 + (HEAP32[i2 + 80 >> 2] | 0);
       __ZNK7WebCore15RenderBlockFlow23pageLogicalTopForOffsetENS_10LayoutUnitE(i6, i39, i7);
       i39 = HEAP32[i6 >> 2] | 0;
       if ((i39 | 0) <= (i22 | 0)) {
        i44 = i39;
        i45 = i35;
        break;
       }
       d33 = +(i39 | 0) + +HEAPF32[((HEAP32[i31 >> 2] & 2048 | 0) == 0 ? i24 : i29) >> 2];
       i26 = i15 | 0;
       i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 752 >> 2] & 31](i26) | 0;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 720 >> 2] & 15](i5, i26);
       d46 = +(i42 | 0) + (d33 - +((HEAP32[i5 >> 2] | 0) + i23 | 0));
       if (d46 >= +2147483647) {
        i44 = i39;
        i45 = 2147483647;
        break;
       }
       if (d46 <= +-2147483648) {
        i44 = i39;
        i45 = -2147483648;
        break;
       }
       i44 = i39;
       i45 = ~~d46;
      }
     } while (0);
     if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] & 1536 | 0) == 1024) {
      d46 = +(i34 | 0);
      i42 = d46 < +__ZNK7WebCore9InlineBox13logicalHeightEv(i30);
      d33 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i30);
      do {
       if (i42) {
        d47 = +Math_ceil((d33 - d46) / +(i25 | 0));
        do {
         if (d47 < +2147483647) {
          if (d47 <= +-2147483648) {
           i48 = -2147483648;
           break;
          }
          i48 = ~~d47;
         } else {
          i48 = 2147483647;
         }
        } while (0);
        i29 = (Math_imul(i48, i25) | 0) + i34 | 0;
        d47 = +(i45 | 0) + (+(i29 | 0) - +__ZNK7WebCore9InlineBox13logicalHeightEv(i30)) * +.5;
        if (d47 >= +2147483647) {
         i49 = 2147483647;
         break;
        }
        if (d47 <= +-2147483648) {
         i49 = -2147483648;
         break;
        }
        i49 = ~~d47;
       } else {
        d47 = +(i45 | 0) + (d46 - d33) * +.5;
        if (d47 >= +2147483647) {
         i49 = 2147483647;
         break;
        }
        if (d47 <= +-2147483648) {
         i49 = -2147483648;
         break;
        }
        i49 = ~~d47;
       }
      } while (0);
      i50 = i49 + i41 | 0;
     } else {
      i50 = i45 + i32 | 0;
     }
     if ((i40 | 0) < (i50 | 0)) {
      HEAP32[i1 >> 2] = i50 - i40 + i37;
      STACKTOP = i4;
      return;
     }
     i30 = (i40 - i50 | 0) % (i25 | 0) & -1;
     if ((i30 | 0) == 0) {
      i51 = i37;
     } else {
      i51 = i25 - i30 + i37 | 0;
     }
     do {
      if ((HEAP8[i43] & 2) != 0) {
       if ((HEAP32[i14 + 60 >> 2] | 0) == 0 | (i51 | 0) == (i37 | 0)) {
        break;
       }
       i30 = HEAP32[i11 >> 2] | 0;
       HEAP32[i9 >> 2] = (HEAP32[i2 + 84 >> 2] | 0) + i51;
       __ZNK7WebCore15RenderBlockFlow23pageLogicalTopForOffsetENS_10LayoutUnitE(i8, i30, i9);
       i30 = HEAP32[i8 >> 2] | 0;
       if ((i30 | 0) == (i44 | 0)) {
        HEAP32[i1 >> 2] = i51;
        STACKTOP = i4;
        return;
       } else {
        HEAP32[i10 >> 2] = i30 - i27 - (HEAP32[i2 + 80 >> 2] | 0);
        __ZNK7WebCore13RootInlineBox18lineSnapAdjustmentENS_10LayoutUnitE(i1, i2, i10);
        STACKTOP = i4;
        return;
       }
      }
     } while (0);
     HEAP32[i1 >> 2] = i51;
     STACKTOP = i4;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13RootInlineBox26alignBoxesInBlockDirectionENS_10LayoutUnitERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEERNS_21VerticalPositionCacheE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, d39 = +0, i40 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
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
 i22 = i6 + 120 | 0;
 i23 = i6 + 128 | 0;
 i24 = i6 + 136 | 0;
 i25 = i6 + 144 | 0;
 i26 = i6 + 152 | 0;
 i27 = i6 + 160 | 0;
 i28 = i2 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 31](i28) | 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i29 = i10 | 0;
 HEAP32[i29 >> 2] = 0;
 i30 = i11 | 0;
 HEAP32[i30 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i13 >> 2] = 0;
 HEAP8[i14] = 0;
 HEAP8[i15] = 0;
 i31 = i2 | 0;
 i32 = i2 + 16 | 0;
 i33 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 2;
 i34 = (__ZNK7WebCore13InlineFlowBox27requiresIdeographicBaselineERKN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS1_6VectorIPKNS_14SimpleFontDataELj0ENS1_15CrashOnOverflowEEENS_13GlyphOverflowEEENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EENSI_ISF_EEEE(i31, i4) | 0) & 1;
 i35 = i2 + 56 | 0;
 HEAP32[i35 >> 2] = HEAP32[i35 >> 2] & -33 | i34 << 5;
 __ZN7WebCore13InlineFlowBox24computeLogicalBoxHeightsEPNS_13RootInlineBoxERNS_10LayoutUnitES4_RiS5_RbS6_bRN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS7_6VectorIPKNS_14SimpleFontDataELj0ENS7_15CrashOnOverflowEEENS_13GlyphOverflowEEENS7_7PtrHashISB_EENS7_10HashTraitsISB_EENSO_ISL_EEEENS_12FontBaselineERNS_21VerticalPositionCacheE(i31, i2, i10, i11, i12, i13, i14, i15, i33, i4, i34, i5);
 i5 = HEAP32[i12 >> 2] | 0;
 i34 = HEAP32[i13 >> 2] | 0;
 i4 = HEAP32[i29 >> 2] | 0;
 i29 = HEAP32[i30 >> 2] | 0;
 if ((HEAP32[((i4 | 0) < (i29 | 0) ? i11 : i10) >> 2] | 0) > (i34 + i5 | 0)) {
  __ZN7WebCore13InlineFlowBox25adjustMaxAscentAndDescentERiS1_ii(i31, i12, i13, i4, i29);
  i36 = HEAP32[i12 >> 2] | 0;
  i37 = HEAP32[i13 >> 2] | 0;
 } else {
  i36 = i5;
  i37 = i34;
 }
 i34 = i37 + i36 | 0;
 i37 = i3 | 0;
 i3 = HEAP32[i37 >> 2] | 0;
 i5 = i16 | 0;
 HEAP32[i5 >> 2] = i3;
 i13 = i17 | 0;
 HEAP32[i13 >> 2] = i3;
 HEAP32[i18 >> 2] = i3;
 HEAP32[i19 >> 2] = i3;
 HEAP8[i20] = 0;
 HEAP8[i21] = 0;
 HEAP8[i22] = 0;
 HEAP32[i23 >> 2] = i3;
 HEAP32[i24 >> 2] = i34;
 __ZN7WebCore13InlineFlowBox26placeBoxesInBlockDirectionENS_10LayoutUnitES1_ibRS1_S2_RbS2_S2_S3_S3_NS_12FontBaselineE(i31, i23, i24, i36, i33, i16, i17, i20, i18, i19, i21, i22, (HEAP32[i35 >> 2] | 0) >>> 5 & 1);
 HEAP32[i35 >> 2] = (HEAPU8[i21] | 0) << 6 & 64 | HEAP32[i35 >> 2] & -193 | (HEAPU8[i22] | 0) << 7 & 128;
 i22 = (i34 | 0) > 0 ? i34 : 0;
 i34 = HEAP32[i13 >> 2] | 0;
 HEAP32[i2 + 72 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 76 >> 2] = i34;
 HEAP32[i2 + 80 >> 2] = i3;
 HEAP32[i2 + 84 >> 2] = i3 + i22;
 i34 = HEAP32[i32 >> 2] | 0;
 HEAP32[i9 >> 2] = i3;
 i32 = __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i34, i9) | 0;
 __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i7, i34, i32);
 __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i8, i34, i32);
 i32 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
 HEAP32[i2 + 96 >> 2] = (i32 | 0) > 0 ? i32 : 0;
 __ZNK7WebCore13RootInlineBox27beforeAnnotationsAdjustmentEv(i25, i2);
 i32 = HEAP32[i25 >> 2] | 0;
 if ((i32 | 0) == 0) {
  i38 = i3;
 } else {
  d39 = +(i32 | 0);
  i25 = HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] | 0;
  if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
   FUNCTION_TABLE_viff[i25 & 3](i28, d39, +0);
  } else {
   FUNCTION_TABLE_viff[i25 & 3](i28, +0, d39);
  }
  i25 = i32 + i3 | 0;
  HEAP32[i37 >> 2] = i25;
  i38 = i25;
 }
 HEAP32[i27 >> 2] = 0;
 __ZNK7WebCore13RootInlineBox18lineSnapAdjustmentENS_10LayoutUnitE(i26, i2, i27);
 i27 = HEAP32[i26 >> 2] | 0;
 if ((i27 | 0) == 0) {
  i40 = i38;
 } else {
  d39 = +(i27 | 0);
  i26 = HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] | 0;
  if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
   FUNCTION_TABLE_viff[i26 & 3](i28, d39, +0);
  } else {
   FUNCTION_TABLE_viff[i26 & 3](i28, +0, d39);
  }
  i28 = i27 + i38 | 0;
  HEAP32[i37 >> 2] = i28;
  i40 = i28;
 }
 HEAP32[i1 >> 2] = i22 + i40;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore13RootInlineBox12selectionTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 264 | 0;
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
 i37 = HEAP32[i2 + 72 >> 2] | 0;
 i38 = i2 | 0;
 i39 = i2 + 16 | 0;
 if ((HEAP32[i2 + 56 >> 2] & 64 | 0) == 0) {
  i40 = i37;
 } else {
  if ((((HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
   HEAP32[i31 >> 2] = i37;
   __ZNK7WebCore13InlineFlowBox32computeUnderAnnotationAdjustmentENS_10LayoutUnitE(i29, i38, i31);
  } else {
   HEAP32[i30 >> 2] = i37;
   __ZNK7WebCore13InlineFlowBox31computeOverAnnotationAdjustmentENS_10LayoutUnitE(i29, i38, i30);
  }
  i40 = i37 - (HEAP32[i29 >> 2] | 0) | 0;
 }
 i29 = HEAP32[i39 >> 2] | 0;
 if ((((HEAP32[(HEAP32[i29 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
  HEAP32[i1 >> 2] = i40;
  STACKTOP = i3;
  return;
 }
 i37 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i37 | 0) == 0) {
  i2 = i29;
  i30 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 752 >> 2] & 31](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 720 >> 2] & 15](i28, i2);
  i2 = (HEAP32[i28 >> 2] | 0) + i30 | 0;
  HEAP32[i32 >> 2] = i2;
  i41 = i2;
 } else {
  __ZNK7WebCore13RootInlineBox15selectionBottomEv(i32, i37);
  i41 = HEAP32[i32 >> 2] | 0;
 }
 i37 = i32 | 0;
 do {
  if ((i41 | 0) < (i40 | 0)) {
   i32 = HEAP32[i39 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i32 >> 2] | 0) + 1024 >> 2] & 31](i32) | 0)) {
    break;
   }
   i32 = HEAP32[i39 >> 2] | 0;
   i2 = i32;
   i30 = HEAP32[i37 >> 2] | 0;
   HEAP32[i26 >> 2] = i30;
   __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i27, i2, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i2, i26) | 0);
   i28 = HEAP32[i27 >> 2] | 0;
   i29 = HEAP32[(HEAP32[i32 >> 2] | 0) + 1072 >> 2] | 0;
   HEAP32[i23 >> 2] = i30;
   HEAP32[i24 >> 2] = i28;
   HEAP32[i25 >> 2] = 0;
   FUNCTION_TABLE_viiiii[i29 & 3](i22, i2, i23, i24, i25);
   __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i33, i2, i22, 0);
   i2 = HEAP32[i39 >> 2] | 0;
   i29 = i2;
   HEAP32[i20 >> 2] = i30;
   __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i21, i29, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i29, i20) | 0);
   i28 = HEAP32[i21 >> 2] | 0;
   i32 = HEAP32[(HEAP32[i2 >> 2] | 0) + 1068 >> 2] | 0;
   HEAP32[i17 >> 2] = i30;
   HEAP32[i18 >> 2] = i28;
   HEAP32[i19 >> 2] = 0;
   FUNCTION_TABLE_viiiii[i32 & 3](i16, i29, i17, i18, i19);
   __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i34, i29, i16, 0);
   i29 = HEAP32[i39 >> 2] | 0;
   i32 = i29;
   HEAP32[i14 >> 2] = i40;
   __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i15, i32, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i32, i14) | 0);
   i28 = HEAP32[i15 >> 2] | 0;
   i30 = HEAP32[(HEAP32[i29 >> 2] | 0) + 1072 >> 2] | 0;
   HEAP32[i11 >> 2] = i40;
   HEAP32[i12 >> 2] = i28;
   HEAP32[i13 >> 2] = 0;
   FUNCTION_TABLE_viiiii[i30 & 3](i10, i32, i11, i12, i13);
   __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i35, i32, i10, 0);
   i32 = HEAP32[i39 >> 2] | 0;
   i30 = i32;
   HEAP32[i8 >> 2] = i40;
   __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i9, i30, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i30, i8) | 0);
   i28 = HEAP32[i9 >> 2] | 0;
   i29 = HEAP32[(HEAP32[i32 >> 2] | 0) + 1068 >> 2] | 0;
   HEAP32[i5 >> 2] = i40;
   HEAP32[i6 >> 2] = i28;
   HEAP32[i7 >> 2] = 0;
   FUNCTION_TABLE_viiiii[i29 & 3](i4, i30, i5, i6, i7);
   __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i36, i30, i4, 0);
   if ((HEAP32[i33 >> 2] | 0) <= (HEAP32[i35 >> 2] | 0)) {
    if ((HEAP32[i34 >> 2] | 0) >= (HEAP32[i36 >> 2] | 0)) {
     break;
    }
   }
   HEAP32[i1 >> 2] = i40;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = HEAP32[i37 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore13RootInlineBox15selectionBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
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
 i36 = HEAP32[i2 + 76 >> 2] | 0;
 i37 = i2 | 0;
 i38 = i2 + 16 | 0;
 if ((HEAP32[i2 + 56 >> 2] & 128 | 0) == 0) {
  i39 = i36;
 } else {
  if ((((HEAP32[(HEAP32[(HEAP32[i38 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
   HEAP32[i30 >> 2] = i36;
   __ZNK7WebCore13InlineFlowBox31computeOverAnnotationAdjustmentENS_10LayoutUnitE(i28, i37, i30);
  } else {
   HEAP32[i29 >> 2] = i36;
   __ZNK7WebCore13InlineFlowBox32computeUnderAnnotationAdjustmentENS_10LayoutUnitE(i28, i37, i29);
  }
  i39 = (HEAP32[i28 >> 2] | 0) + i36 | 0;
 }
 do {
  if ((((HEAP32[(HEAP32[(HEAP32[i38 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
   i36 = HEAP32[i2 + 52 >> 2] | 0;
   if ((i36 | 0) == 0) {
    break;
   }
   __ZNK7WebCore13RootInlineBox12selectionTopEv(i31, i36);
   i36 = HEAP32[i31 >> 2] | 0;
   do {
    if ((i36 | 0) > (i39 | 0)) {
     i28 = HEAP32[i38 >> 2] | 0;
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 1024 >> 2] & 31](i28) | 0)) {
      break;
     }
     i28 = HEAP32[i38 >> 2] | 0;
     i29 = i28;
     HEAP32[i26 >> 2] = i36;
     __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i27, i29, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i29, i26) | 0);
     i37 = HEAP32[i27 >> 2] | 0;
     i30 = HEAP32[(HEAP32[i28 >> 2] | 0) + 1072 >> 2] | 0;
     HEAP32[i23 >> 2] = i36;
     HEAP32[i24 >> 2] = i37;
     HEAP32[i25 >> 2] = 0;
     FUNCTION_TABLE_viiiii[i30 & 3](i22, i29, i23, i24, i25);
     __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i32, i29, i22, 0);
     i29 = HEAP32[i38 >> 2] | 0;
     i30 = i29;
     HEAP32[i20 >> 2] = i36;
     __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i21, i30, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i30, i20) | 0);
     i37 = HEAP32[i21 >> 2] | 0;
     i28 = HEAP32[(HEAP32[i29 >> 2] | 0) + 1068 >> 2] | 0;
     HEAP32[i17 >> 2] = i36;
     HEAP32[i18 >> 2] = i37;
     HEAP32[i19 >> 2] = 0;
     FUNCTION_TABLE_viiiii[i28 & 3](i16, i30, i17, i18, i19);
     __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i33, i30, i16, 0);
     i30 = HEAP32[i38 >> 2] | 0;
     i28 = i30;
     HEAP32[i14 >> 2] = i39;
     __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i15, i28, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i28, i14) | 0);
     i37 = HEAP32[i15 >> 2] | 0;
     i29 = HEAP32[(HEAP32[i30 >> 2] | 0) + 1072 >> 2] | 0;
     HEAP32[i11 >> 2] = i39;
     HEAP32[i12 >> 2] = i37;
     HEAP32[i13 >> 2] = 0;
     FUNCTION_TABLE_viiiii[i29 & 3](i10, i28, i11, i12, i13);
     __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i34, i28, i10, 0);
     i28 = HEAP32[i38 >> 2] | 0;
     i29 = i28;
     HEAP32[i8 >> 2] = i39;
     __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i9, i29, __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i29, i8) | 0);
     i37 = HEAP32[i9 >> 2] | 0;
     i30 = HEAP32[(HEAP32[i28 >> 2] | 0) + 1068 >> 2] | 0;
     HEAP32[i5 >> 2] = i39;
     HEAP32[i6 >> 2] = i37;
     HEAP32[i7 >> 2] = 0;
     FUNCTION_TABLE_viiiii[i30 & 3](i4, i29, i5, i6, i7);
     __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i35, i29, i4, 0);
     if ((HEAP32[i32 >> 2] | 0) <= (HEAP32[i34 >> 2] | 0)) {
      if ((HEAP32[i33 >> 2] | 0) >= (HEAP32[i35 >> 2] | 0)) {
       break;
      }
     }
     HEAP32[i1 >> 2] = i39;
     STACKTOP = i3;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = i36;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = i39;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13RootInlineBox38closestLeafChildForLogicalLeftPositionEib(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0;
 i4 = i1 | 0;
 i1 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i4) | 0;
 i5 = __ZNK7WebCore13InlineFlowBox13lastLeafChildEv(i4) | 0;
 if ((i1 | 0) == (i5 | 0)) {
  i6 = i1;
  i7 = i1;
  i8 = 7;
 } else {
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 31](i1) | 0) {
    i9 = i5;
    i10 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i1) | 0;
   } else {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 31](i5) | 0)) {
     i9 = i5;
     i10 = i1;
     break;
    }
    i9 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i5) | 0;
    i10 = i1;
   }
  } while (0);
  if ((i10 | 0) == (i9 | 0)) {
   i6 = i10;
   i7 = i9;
   i8 = 7;
  } else {
   i11 = i10;
   i12 = i9;
  }
 }
 do {
  if ((i8 | 0) == 7) {
   if (!i3) {
    i13 = i6;
    return i13 | 0;
   }
   if ((i6 | 0) == 0) {
    i11 = 0;
    i12 = i7;
    break;
   }
   i9 = HEAP32[i6 + 16 >> 2] | 0;
   if ((HEAP32[i9 + 20 >> 2] & 128 | 0) != 0) {
    i11 = i6;
    i12 = i7;
    break;
   }
   i10 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = i6;
    i12 = i7;
    break;
   }
   if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i10, 0, 1) | 0) {
    i13 = i6;
   } else {
    i11 = i6;
    i12 = i7;
    break;
   }
   return i13 | 0;
  }
 } while (0);
 d14 = +(i2 | 0);
 do {
  if (d14 <= +HEAPF32[((HEAP32[i11 + 32 >> 2] & 2048 | 0) == 0 ? i11 + 24 | 0 : i11 + 20 | 0) >> 2]) {
   i2 = i11 + 16 | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 108 >> 2] & 31](i7) | 0) {
    break;
   }
   if (!i3) {
    i13 = i11;
    return i13 | 0;
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i7 + 20 >> 2] & 128 | 0) != 0) {
    break;
   }
   i2 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i2, 0, 1) | 0) {
    i13 = i11;
   } else {
    break;
   }
   return i13 | 0;
  }
 } while (0);
 do {
  if (d14 >= +HEAPF32[((HEAP32[i12 + 32 >> 2] & 2048 | 0) == 0 ? i12 + 24 | 0 : i12 + 20 | 0) >> 2] + +HEAPF32[i12 + 28 >> 2]) {
   i2 = i12 + 16 | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 108 >> 2] & 31](i7) | 0) {
    break;
   }
   if (!i3) {
    i13 = i12;
    return i13 | 0;
   }
   if ((i12 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i7 + 20 >> 2] & 128 | 0) != 0) {
    break;
   }
   i2 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i2, 0, 1) | 0) {
    i13 = i12;
   } else {
    break;
   }
   return i13 | 0;
  }
 } while (0);
 L40 : do {
  if ((i11 | 0) == 0) {
   i15 = 0;
  } else {
   i2 = 0;
   i7 = i11;
   L41 : while (1) {
    i6 = i7 + 16 | 0;
    i8 = HEAP32[i6 >> 2] | 0;
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 108 >> 2] & 31](i8) | 0) {
      i16 = i2;
     } else {
      if (i3) {
       i10 = HEAP32[i6 >> 2] | 0;
       if ((HEAP32[i10 + 20 >> 2] & 128 | 0) != 0) {
        i16 = i2;
        break;
       }
       i9 = HEAP32[i10 + 4 >> 2] | 0;
       if ((i9 | 0) == 0) {
        i16 = i2;
        break;
       }
       if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i9, 0, 1) | 0)) {
        i16 = i2;
        break;
       }
      }
      if (d14 < +HEAPF32[((HEAP32[i7 + 32 >> 2] & 2048 | 0) == 0 ? i7 + 24 | 0 : i7 + 20 | 0) >> 2] + +HEAPF32[i7 + 28 >> 2]) {
       i13 = i7;
       break L41;
      } else {
       i16 = i7;
      }
     }
    } while (0);
    i6 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i7) | 0;
    if ((i6 | 0) == 0) {
     i15 = i16;
     break L40;
    } else {
     i2 = i16;
     i7 = i6;
    }
   }
   return i13 | 0;
  }
 } while (0);
 i13 = (i15 | 0) != 0 ? i15 : i12;
 return i13 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore13RootInlineBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_11EllipsisBoxENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EES4_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SC_SE_SG_SM_SJ_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore13RootInlineBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_11EllipsisBoxENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i2, i8, 0) | 0;
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
  i22 = __ZN3WTF9HashTableIPKN7WebCore13RootInlineBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_11EllipsisBoxENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i2, i29, i13) | 0;
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
function __ZN7WebCore13RootInlineBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
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
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 do {
  if ((HEAP32[i1 + 32 >> 2] & 32768 | 0) != 0) {
   i14 = i1 + 16 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   i16 = (HEAP32[i15 + 20 >> 2] & 768 | 0) == 256;
   if (i16) {
    i17 = HEAP32[(HEAP32[i15 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i17 = HEAP32[i15 + 36 >> 2] | 0;
   }
   if ((HEAP32[i17 + 40 >> 2] & 6144 | 0) != 0) {
    break;
   }
   if (i16) {
    i18 = HEAP32[(HEAP32[i15 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i18 = HEAP32[i15 + 36 >> 2] | 0;
   }
   if ((HEAP32[i18 + 44 >> 2] & 1920 | 0) == 0) {
    break;
   }
   i15 = HEAP32[H_BASE + 160 >> 2] | 0;
   i16 = HEAP32[i15 + 8 >> 2] | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   i15 = i1;
   i20 = i15 + ~(i15 << 15) | 0;
   i15 = (i20 >>> 10 ^ i20) * 9 & -1;
   i20 = i15 >>> 6 ^ i15;
   i15 = i20 + ~(i20 << 11) | 0;
   i20 = i15 >>> 16 ^ i15;
   L13 : do {
    if ((i19 | 0) == 0) {
     i21 = 0;
    } else {
     i15 = i16 & i20;
     i22 = i19 + (i15 << 3) | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     if ((i23 | 0) == (i1 | 0)) {
      i24 = i22;
     } else {
      i22 = (i20 >>> 23) + ~i20 | 0;
      i25 = i22 << 12 ^ i22;
      i22 = i25 >>> 7 ^ i25;
      i25 = i22 << 2 ^ i22;
      i22 = i25 >>> 20 ^ i25 | 1;
      i25 = 0;
      i26 = i15;
      i15 = i23;
      while (1) {
       if ((i15 | 0) == 0) {
        i21 = 0;
        break L13;
       }
       i23 = (i25 | 0) == 0 ? i22 : i25;
       i27 = i23 + i26 & i16;
       i28 = i19 + (i27 << 3) | 0;
       i29 = HEAP32[i28 >> 2] | 0;
       if ((i29 | 0) == (i1 | 0)) {
        i24 = i28;
        break;
       } else {
        i25 = i23;
        i26 = i27;
        i15 = i29;
       }
      }
     }
     if ((i24 | 0) == 0) {
      i21 = 0;
      break;
     }
     i21 = HEAP32[i24 + 4 >> 2] | 0;
    }
   } while (0);
   HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
   if (!(__ZN7WebCore11EllipsisBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_(i21, i2, i3, i4, i5, i9, i10) | 0)) {
    break;
   }
   i19 = HEAP32[i14 >> 2] | 0;
   i16 = HEAP32[(HEAP32[i19 >> 2] | 0) + 456 >> 2] | 0;
   i20 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i5 + 4 >> 2] | 0) | 0;
   HEAP32[i11 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0);
   HEAP32[i11 + 4 >> 2] = i20;
   FUNCTION_TABLE_viii[i16 & 1](i19, i3, i11);
   i30 = 1;
   STACKTOP = i8;
   return i30 | 0;
  }
 } while (0);
 HEAP32[i12 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i7 >> 2];
 i30 = __ZN7WebCore13InlineFlowBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_(i1 | 0, i2, i3, i4, i5, i12, i13) | 0;
 STACKTOP = i8;
 return i30 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore13RootInlineBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_11EllipsisBoxENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i1, i2, i3) {
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
function __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_iEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_iS9_NS_10HashTraitsIS3_EENSB_IiEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_RiEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_iEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_iS9_NS_10HashTraitsIS3_EENSB_IiEEE18KeyValuePairTraitsESC_E6expandEPS5_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = i10 & i6;
 i11 = i7 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 9;
  } else {
   i15 = (i10 >>> 23) + ~i10 | 0;
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
     i14 = 6;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i7 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 8;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 8) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 9;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 9) {
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
  i8 = __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_iEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_iS9_NS_10HashTraitsIS3_EENSB_IiEEE18KeyValuePairTraitsESC_E6expandEPS5_(i2, i26) | 0;
  i29 = i8;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_iEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_iS9_NS_10HashTraitsIS3_EENSB_IiEEE18KeyValuePairTraitsESC_E6expandEPS5_(i1, i2) {
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
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
  i5 = i7 + (i11 << 3) | 0;
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
   i19 = i16 + (i14 << 3) | 0;
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
   i16 = i5;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZNK7WebCore13RootInlineBox37selectionTopAdjustedForPrecedingBlockEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = __ZNK7WebCore9InlineBox4rootEv(i2 | 0) | 0;
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i1, i2);
 i2 = i7 + 16 | 0;
 if ((((HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) >>> 25 & 7) - 2 | 0) >>> 0 > 1 >>> 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = __ZNK7WebCore11RenderBlock30blockBeforeWithinSelectionRootERNS_10LayoutSizeE(HEAP32[i2 >> 2] | 0, i4) | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 + 24 >> 2] & 32 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = HEAP32[i8 + 108 >> 2] | 0;
 i8 = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i4) | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 } else {
  i9 = i2;
  i10 = 0;
 }
 L15 : while (1) {
  i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 108 >> 2] & 31](i9) | 0;
  if ((i2 | 0) == 1 & (i10 | 0) == 3) {
   i11 = 23;
   break;
  }
  i4 = (i10 | 0) == 1;
  if ((i2 | 0) == 3 & i4) {
   i11 = 24;
   break;
  }
  do {
   if ((i10 | 0) == 0) {
    i12 = i2;
   } else {
    if ((i2 | 0) == 0) {
     if (i4) {
      i11 = 26;
      break L15;
     } else {
      i12 = i10;
      break;
     }
    } else if (!((i2 | 0) == 3 | (i2 | 0) == 1)) {
     i12 = i10;
     break;
    }
    if ((i10 | 0) == 2 | (i10 | 0) == 0) {
     i12 = i2;
     break;
    }
    if ((i2 | 0) == 0 & i4) {
     i11 = 25;
     break L15;
    } else {
     i12 = i10;
    }
   }
  } while (0);
  if ((i12 | 0) == 4) {
   i11 = 27;
   break;
  }
  i4 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i9) | 0;
  if ((i4 | 0) == 0) {
   i11 = 15;
   break;
  } else {
   i9 = i4;
   i10 = i12;
  }
 }
 if ((i11 | 0) == 15) {
  if ((i12 - 1 | 0) >>> 0 > 1 >>> 0) {
   STACKTOP = i3;
   return;
  }
  __ZNK7WebCore13RootInlineBox15selectionBottomEv(i6, i8);
  i8 = (HEAP32[i6 >> 2] | 0) + (HEAP32[i7 >> 2] | 0) | 0;
  HEAP32[i5 >> 2] = i8;
  i7 = i1 | 0;
  HEAP32[i7 >> 2] = HEAP32[((HEAP32[i7 >> 2] | 0) < (i8 | 0) ? i5 : i1) >> 2];
  STACKTOP = i3;
  return;
 } else if ((i11 | 0) == 23) {
  STACKTOP = i3;
  return;
 } else if ((i11 | 0) == 24) {
  STACKTOP = i3;
  return;
 } else if ((i11 | 0) == 25) {
  STACKTOP = i3;
  return;
 } else if ((i11 | 0) == 26) {
  STACKTOP = i3;
  return;
 } else if ((i11 | 0) == 27) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13RootInlineBox13placeEllipsisERKN3WTF12AtomicStringEbfffPNS_9InlineBoxE(i1, i2, i3, d4, d5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, d16 = +0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, d26 = +0, d27 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 32 | 0;
 i12 = i8 + 40 | 0;
 if ((HEAP32[H_BASE + 160 >> 2] | 0) == 0) {
  i13 = __ZN3WTF10fastMallocEj(20) | 0;
  _memset(i13 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 160 >> 2] = i13;
 }
 i13 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i7 | 0) == 0) {
  d14 = +0;
 } else {
  d14 = +HEAPF32[i7 + 28 >> 2];
 }
 d15 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i1 | 0);
 d16 = +HEAPF32[i1 + 24 >> 2];
 i17 = (HEAP32[i1 + 48 >> 2] | 0) == 0;
 i18 = i1 + 32 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = __Znwj(52) | 0;
 i21 = i20;
 i22 = i1 | 0;
 __ZN7WebCore11EllipsisBoxC1ERNS_15RenderBlockFlowERKN3WTF12AtomicStringEPNS_13InlineFlowBoxEiiibbPNS_9InlineBoxE(i21, i13, i2, i22, ~~(d6 - d14), ~~d15, ~~d16, i17, (i19 & 2048 | 0) != 0, i7);
 i7 = i9 | 0;
 HEAP32[i7 >> 2] = i21;
 i21 = HEAP32[H_BASE + 160 >> 2] | 0;
 HEAP32[i10 >> 2] = i1;
 __ZN3WTF9HashTableIPKN7WebCore13RootInlineBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_11EllipsisBoxENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EES4_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SC_SE_SG_SM_SJ_EEEEOT0_OT1_(i8 + 16 | 0, i21 | 0, i10, i9);
 HEAP32[i18 >> 2] = HEAP32[i18 >> 2] | 32768;
 do {
  if (i3) {
   d16 = +HEAPF32[i1 + 28 >> 2];
   d15 = +HEAPF32[i1 + 20 >> 2] + d16;
   if (d15 + d6 > d5) {
    i23 = 8;
    break;
   }
   HEAPF32[i20 + 20 >> 2] = d15;
   d24 = d16 + d6;
  } else {
   i23 = 8;
  }
 } while (0);
 if ((i23 | 0) == 8) {
  HEAP8[i11] = 0;
  HEAPF32[i12 >> 2] = +0;
  d16 = +__ZN7WebCore13InlineFlowBox16placeEllipsisBoxEbfffRfRb(i22, i3, d4, d5, d6, i12, i11);
  if (d16 == +-1) {
   if (i3) {
    d25 = d5 - d6;
   } else {
    d25 = d4;
   }
   d6 = d5 - d4;
   HEAPF32[i12 >> 2] = d6;
   d26 = d25;
   d27 = d6;
  } else {
   d26 = d16;
   d27 = +HEAPF32[i12 >> 2];
  }
  HEAPF32[i20 + 20 >> 2] = d26;
  d24 = d27;
 }
 i20 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i8;
  return +d24;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
 STACKTOP = i8;
 return +d24;
}
function __ZNK7WebCore13RootInlineBox24paddedLayoutOverflowRectENS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 72 >> 2] | 0;
 i7 = HEAP32[i2 + 76 >> 2] | 0;
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i8 | 0) == 0) {
  if ((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0) {
   d9 = +HEAPF32[i2 + 24 >> 2];
   d10 = +HEAPF32[i2 + 28 >> 2];
   HEAPF32[i5 >> 2] = +(i6 | 0);
   HEAPF32[i5 + 4 >> 2] = d9;
   HEAPF32[i5 + 8 >> 2] = +(i7 - i6 | 0);
   HEAPF32[i5 + 12 >> 2] = d10;
  } else {
   d10 = +HEAPF32[i2 + 28 >> 2];
   HEAPF32[i5 >> 2] = +HEAPF32[i2 + 20 >> 2];
   HEAPF32[i5 + 4 >> 2] = +(i6 | 0);
   HEAPF32[i5 + 8 >> 2] = d10;
   HEAPF32[i5 + 12 >> 2] = +(i7 - i6 | 0);
  }
  __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i1, i5);
 } else {
  i5 = i1;
  i6 = i8 + 4 | 0;
  HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 }
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 i5 = (i3 & 4 | 0) == 0;
 if ((i3 & 2048 | 0) == 0) {
  i3 = i1 + 4 | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  if (i5) {
   i7 = i1 + 12 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) + i8 | 0;
   i12 = i6 + ~~+Math_ceil(+HEAPF32[i2 + 24 >> 2] + +HEAPF32[i2 + 28 >> 2]) | 0;
   i13 = ((i11 | 0) < (i12 | 0) ? i12 : i11) - i8 | 0;
   HEAP32[i7 >> 2] = (i13 | 0) > 0 ? i13 : 0;
   STACKTOP = i4;
   return;
  } else {
   i13 = ~~+HEAPF32[i2 + 24 >> 2] - i6 | 0;
   i7 = (i13 | 0) < (i8 | 0) ? i13 : i8;
   HEAP32[i3 >> 2] = i7;
   i3 = i1 + 12 | 0;
   i13 = i8 - i7 + (HEAP32[i3 >> 2] | 0) | 0;
   HEAP32[i3 >> 2] = (i13 | 0) > 0 ? i13 : 0;
   STACKTOP = i4;
   return;
  }
 } else {
  i13 = i1 | 0;
  i3 = HEAP32[i13 >> 2] | 0;
  if (i5) {
   i5 = i1 + 8 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) + i3 | 0;
   i8 = i6 + ~~+Math_ceil(+HEAPF32[i2 + 20 >> 2] + +HEAPF32[i2 + 28 >> 2]) | 0;
   i11 = ((i7 | 0) < (i8 | 0) ? i8 : i7) - i3 | 0;
   HEAP32[i5 >> 2] = (i11 | 0) > 0 ? i11 : 0;
   STACKTOP = i4;
   return;
  } else {
   i11 = ~~+HEAPF32[i2 + 20 >> 2] - i6 | 0;
   i6 = (i11 | 0) < (i3 | 0) ? i11 : i3;
   HEAP32[i13 >> 2] = i6;
   i13 = i1 + 8 | 0;
   i1 = i3 - i6 + (HEAP32[i13 >> 2] | 0) | 0;
   HEAP32[i13 >> 2] = (i1 | 0) > 0 ? i1 : 0;
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN3WTF7HashMapIPKN7WebCore13RootInlineBoxENSt3__110unique_ptrINS1_11EllipsisBoxENS5_14default_deleteIS7_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EEE4takeERKS4_(i1, i2, i3) {
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
   __ZN3WTF9HashTableIPKN7WebCore13RootInlineBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_11EllipsisBoxENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i5, (i14 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i8;
 return;
}
function __ZNK7WebCore13RootInlineBox27beforeAnnotationsAdjustmentEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i2 | 0;
 i13 = i2 + 16 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((((HEAP32[(HEAP32[i14 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 >= 2 >>> 0) {
  i15 = i2 + 48 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i16 | 0) == 0) {
    i17 = 0;
   } else {
    if ((HEAP32[i16 + 56 >> 2] & 128 | 0) == 0) {
     i17 = 0;
     break;
    }
    HEAP32[i5 >> 2] = HEAP32[i2 + 72 >> 2];
    __ZNK7WebCore13InlineFlowBox32computeUnderAnnotationAdjustmentENS_10LayoutUnitE(i4, i16, i5);
    i18 = HEAP32[i4 >> 2] | 0;
    HEAP32[i11 >> 2] = i18;
    i17 = i18;
   }
  } while (0);
  if ((HEAP32[i2 + 56 >> 2] & 64 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i4 = HEAP32[i15 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i15 = HEAP32[i13 >> 2] | 0;
   i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 752 >> 2] & 31](i15) | 0;
  } else {
   i15 = HEAP32[i4 + 76 >> 2] | 0;
   i4 = HEAP32[i2 + 72 >> 2] | 0;
   i19 = ((i4 | 0) < (i15 | 0) ? i4 : i15) + i17 | 0;
  }
  HEAP32[i6 >> 2] = i19;
  __ZNK7WebCore13InlineFlowBox31computeOverAnnotationAdjustmentENS_10LayoutUnitE(i1, i12, i6);
  STACKTOP = i3;
  return;
 }
 i6 = i2 + 48 | 0;
 if ((HEAP32[i2 + 56 >> 2] & 64 | 0) == 0) {
  i20 = 0;
 } else {
  i1 = HEAP32[i6 >> 2] | 0;
  if ((i1 | 0) == 0) {
   HEAP32[i8 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 752 >> 2] & 31](i14) | 0;
  } else {
   HEAP32[i8 >> 2] = HEAP32[i1 + 76 >> 2];
  }
  __ZNK7WebCore13InlineFlowBox32computeUnderAnnotationAdjustmentENS_10LayoutUnitE(i7, i12, i8);
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i11 >> 2] = i8;
  i20 = i8;
 }
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 + 56 >> 2] & 128 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i8 + 76 >> 2] | 0;
 i7 = HEAP32[i2 + 72 >> 2] | 0;
 HEAP32[i10 >> 2] = ((i6 | 0) < (i7 | 0) ? i7 : i6) - i20;
 __ZNK7WebCore13InlineFlowBox31computeOverAnnotationAdjustmentENS_10LayoutUnitE(i9, i8, i10);
 HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore13RootInlineBox16paintEllipsisBoxERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
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
 if ((HEAP32[i1 + 32 >> 2] & 32768 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i9 = HEAP32[i1 + 16 >> 2] | 0;
 i10 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i10 | 0) == 0 | (i10 | 0) == (i9 | 0))) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] | 0) != 4) {
  STACKTOP = i6;
  return;
 }
 i9 = HEAP32[H_BASE + 160 >> 2] | 0;
 i10 = HEAP32[i9 + 8 >> 2] | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 i9 = i1;
 i12 = i9 + ~(i9 << 15) | 0;
 i9 = (i12 >>> 10 ^ i12) * 9 & -1;
 i12 = i9 >>> 6 ^ i9;
 i9 = i12 + ~(i12 << 11) | 0;
 i12 = i9 >>> 16 ^ i9;
 L13 : do {
  if ((i11 | 0) == 0) {
   i13 = 0;
  } else {
   i9 = i10 & i12;
   i14 = i11 + (i9 << 3) | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   if ((i15 | 0) == (i1 | 0)) {
    i16 = i14;
   } else {
    i14 = (i12 >>> 23) + ~i12 | 0;
    i17 = i14 << 12 ^ i14;
    i14 = i17 >>> 7 ^ i17;
    i17 = i14 << 2 ^ i14;
    i14 = i17 >>> 20 ^ i17 | 1;
    i17 = 0;
    i18 = i9;
    i9 = i15;
    while (1) {
     if ((i9 | 0) == 0) {
      i13 = 0;
      break L13;
     }
     i15 = (i17 | 0) == 0 ? i14 : i17;
     i19 = i15 + i18 & i10;
     i20 = i11 + (i19 << 3) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     if ((i21 | 0) == (i1 | 0)) {
      i16 = i20;
      break;
     } else {
      i17 = i15;
      i18 = i19;
      i9 = i21;
     }
    }
   }
   if ((i16 | 0) == 0) {
    i13 = 0;
    break;
   }
   i13 = HEAP32[i16 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
 __ZN7WebCore11EllipsisBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_(i13, i2, i3, i7, i8);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore13RootInlineBox16computeCaretRectEfjPNS_10LayoutUnitE(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i7, i2);
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i8, i2);
 i10 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
 i8 = (i10 | 0) > 0 ? i10 : 0;
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i9, i2);
 i10 = HEAP32[i9 >> 2] | 0;
 i9 = i4 >>> 1;
 i7 = i4 - i9 | 0;
 d11 = +_round(+(d3 - +(i9 | 0)));
 d3 = +HEAPF32[((HEAP32[i2 + 32 >> 2] & 2048 | 0) == 0 ? i2 + 24 | 0 : i2 + 20 | 0) >> 2];
 d12 = d3 + +HEAPF32[i2 + 28 >> 2];
 if ((i5 | 0) != 0) {
  d13 = d12 - (+(i4 >>> 0 >>> 0) + d11);
  do {
   if (d13 < +2147483647) {
    if (d13 <= +-2147483648) {
     i14 = -2147483648;
     break;
    }
    i14 = ~~d13;
   } else {
    i14 = 2147483647;
   }
  } while (0);
  HEAP32[i5 >> 2] = i14;
 }
 i14 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = (HEAP32[i14 + 36 >> 2] | 0) + 40 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 switch (i5 >>> 13 & 15 | 0) {
 case 1:
 case 5:
  {
   i15 = 1;
   break;
  }
 case 7:
 case 3:
  {
   i15 = (i5 & 1073741824 | 0) == 0;
   break;
  }
 case 8:
  {
   i15 = (i5 & 1073741824 | 0) != 0;
   break;
  }
 default:
  {
   i15 = 0;
  }
 }
 d13 = d3 < +0 ? d3 : +0;
 i5 = (HEAP32[i2 + 4 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i16 = i14 + 52 | 0;
 } else {
  i16 = i14 + 56 | 0;
 }
 d17 = +(HEAP32[i16 >> 2] | 0);
 if (i15) {
  d18 = d11 < d13 ? d13 : d11;
  d13 = d12 - +(i4 >>> 0 >>> 0);
  d19 = d13 < d18 ? d13 : d18;
 } else {
  d18 = (d17 < d12 ? d12 : d17) - +(i7 | 0);
  d17 = d18 < d11 ? d18 : d11;
  d19 = d17 < d3 ? d3 : d17;
 }
 i7 = ~~d19;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  HEAP32[i1 >> 2] = i7;
  HEAP32[i1 + 4 >> 2] = i10;
  HEAP32[i1 + 8 >> 2] = i4;
  HEAP32[i1 + 12 >> 2] = i8;
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i1 >> 2] = i10;
  HEAP32[i1 + 4 >> 2] = i7;
  HEAP32[i1 + 8 >> 2] = i8;
  HEAP32[i1 + 12 >> 2] = i4;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore13RootInlineBox14adjustPositionEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, d5 = +0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 __ZN7WebCore13InlineFlowBox14adjustPositionEff(i1 | 0, d2, d3);
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 d5 = (i4 & 2048 | 0) != 0 ? d3 : d2;
 do {
  if (d5 < +2147483647) {
   if (d5 <= +-2147483648) {
    i6 = -2147483648;
    break;
   }
   i6 = ~~d5;
  } else {
   i6 = 2147483647;
  }
 } while (0);
 i7 = i1 + 72 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i6;
 i7 = i1 + 76 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i6;
 i7 = i1 + 80 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i6;
 i7 = i1 + 84 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i6;
 if ((i4 & 32768 | 0) == 0) {
  return;
 }
 i4 = HEAP32[H_BASE + 160 >> 2] | 0;
 i6 = HEAP32[i4 + 8 >> 2] | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 i4 = i1;
 i8 = i4 + ~(i4 << 15) | 0;
 i4 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i4 >>> 6 ^ i4;
 i4 = i8 + ~(i8 << 11) | 0;
 i8 = i4 >>> 16 ^ i4;
 L8 : do {
  if ((i7 | 0) == 0) {
   i9 = 0;
  } else {
   i4 = i6 & i8;
   i10 = i7 + (i4 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == (i1 | 0)) {
    i12 = i10;
   } else {
    i10 = (i8 >>> 23) + ~i8 | 0;
    i13 = i10 << 12 ^ i10;
    i10 = i13 >>> 7 ^ i13;
    i13 = i10 << 2 ^ i10;
    i10 = i13 >>> 20 ^ i13 | 1;
    i13 = 0;
    i14 = i4;
    i4 = i11;
    while (1) {
     if ((i4 | 0) == 0) {
      i9 = 0;
      break L8;
     }
     i11 = (i13 | 0) == 0 ? i10 : i13;
     i15 = i11 + i14 & i6;
     i16 = i7 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i1 | 0)) {
      i12 = i16;
      break;
     } else {
      i13 = i11;
      i14 = i15;
      i4 = i17;
     }
    }
   }
   if ((i12 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 __ZN7WebCore9InlineBox14adjustPositionEff(i9 | 0, d2, d3);
 return;
}
function __ZN7WebCore13RootInlineBoxD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = H_BASE + 16;
 i6 = i1 + 32 | 0;
 do {
  if ((HEAP32[i6 >> 2] & 32768 | 0) != 0) {
   i7 = HEAP32[H_BASE + 160 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   __ZN3WTF7HashMapIPKN7WebCore13RootInlineBoxENSt3__110unique_ptrINS1_11EllipsisBoxENS5_14default_deleteIS7_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EEE4takeERKS4_(i3, i7, i4);
   i7 = i3 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i8 + 12 >> 2] = 0;
   HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -32769;
   HEAP32[i7 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i6 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i3 = i6 + 8 | 0;
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
  }
  i3 = i6 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = __ZTVN7WebCore13InlineFlowBoxE + 8;
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13RootInlineBoxD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = H_BASE + 16;
 i6 = i1 + 32 | 0;
 do {
  if ((HEAP32[i6 >> 2] & 32768 | 0) != 0) {
   i7 = HEAP32[H_BASE + 160 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   __ZN3WTF7HashMapIPKN7WebCore13RootInlineBoxENSt3__110unique_ptrINS1_11EllipsisBoxENS5_14default_deleteIS7_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EEE4takeERKS4_(i3, i7, i4);
   i7 = i3 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i8 + 12 >> 2] = 0;
   HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -32769;
   HEAP32[i7 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i6 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i3 = i6 + 8 | 0;
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
  }
  i3 = i6 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = __ZTVN7WebCore13InlineFlowBoxE + 8;
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore13RootInlineBox24getLogicalEndBoxWithNodeERPNS_9InlineBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZNK7WebCore13InlineFlowBox30collectLeafBoxesInLogicalOrderERN3WTF6VectorIPNS_9InlineBoxELj0ENS1_15CrashOnOverflowEEEPFvPvPS4_S9_ES8_(i1 | 0, i4, 0, 0);
 i4 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i8 = 0;
   i9 = 10;
  } else {
   i1 = HEAP32[i5 >> 2] | 0;
   i10 = i4;
   while (1) {
    i11 = i10 - 1 | 0;
    if (i4 >>> 0 <= i11 >>> 0) {
     i9 = 4;
     break;
    }
    i12 = HEAP32[i1 + (i11 << 2) >> 2] | 0;
    i13 = i12 + 16 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((HEAP32[i14 + 20 >> 2] & 128 | 0) == 0) {
     if ((HEAP32[i14 + 4 >> 2] | 0) != 0) {
      break;
     }
    }
    if ((i11 | 0) == 0) {
     i8 = i4;
     i9 = 10;
     break L1;
    } else {
     i10 = i11;
    }
   }
   if ((i9 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   HEAP32[i2 >> 2] = i12;
   i10 = HEAP32[i13 >> 2] | 0;
   if ((HEAP32[i10 + 20 >> 2] & 128 | 0) != 0) {
    i15 = 0;
    i16 = i4;
    break;
   }
   i15 = HEAP32[i10 + 4 >> 2] | 0;
   i16 = i4;
  }
 } while (0);
 if ((i9 | 0) == 10) {
  HEAP32[i2 >> 2] = 0;
  i15 = 0;
  i16 = i8;
 }
 if ((i16 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return i15 | 0;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return i15 | 0;
}
function __ZNK7WebCore13RootInlineBox26getLogicalStartBoxWithNodeERPNS_9InlineBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZNK7WebCore13InlineFlowBox30collectLeafBoxesInLogicalOrderERN3WTF6VectorIPNS_9InlineBoxELj0ENS1_15CrashOnOverflowEEEPFvPvPS4_S9_ES8_(i1 | 0, i4, 0, 0);
 i4 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i8 = 0;
   i9 = 10;
  } else {
   i1 = HEAP32[i5 >> 2] | 0;
   i10 = 0;
   while (1) {
    i11 = HEAP32[i1 + (i10 << 2) >> 2] | 0;
    i12 = i11 + 16 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    if ((HEAP32[i13 + 20 >> 2] & 128 | 0) == 0) {
     if ((HEAP32[i13 + 4 >> 2] | 0) != 0) {
      break;
     }
    }
    i13 = i10 + 1 | 0;
    if (i13 >>> 0 < i4 >>> 0) {
     i10 = i13;
    } else {
     i8 = i4;
     i9 = 10;
     break L1;
    }
   }
   if (i4 >>> 0 <= i10 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   HEAP32[i2 >> 2] = i11;
   i1 = HEAP32[i12 >> 2] | 0;
   if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
    i14 = 0;
    i15 = i4;
    break;
   }
   i14 = HEAP32[i1 + 4 >> 2] | 0;
   i15 = i4;
  }
 } while (0);
 if ((i9 | 0) == 10) {
  HEAP32[i2 >> 2] = 0;
  i14 = 0;
  i15 = i8;
 }
 if ((i15 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return i14 | 0;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return i14 | 0;
}
function __ZN7WebCore13RootInlineBox12childRemovedEPNS_9InlineBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2 + 16 | 0;
 i2 = i1 + 64 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   HEAP32[i2 >> 2] = 0;
   HEAP32[i1 + 60 >> 2] = 0;
   i4 = i1 + 56 | 0;
   HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -8388353 | 2705920;
   i4 = i1 + 68 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i7 = i2;
 }
 while (1) {
  i2 = i7 + 64 | 0;
  if ((HEAP32[i2 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
   i8 = 15;
   break;
  }
  HEAP32[i2 >> 2] = 0;
  HEAP32[i7 + 60 >> 2] = 0;
  i2 = i7 + 56 | 0;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -8388353 | 2705920;
  i2 = i7 + 68 | 0;
  i1 = HEAP32[i2 >> 2] | 0;
  i6 = i1;
  HEAP32[i2 >> 2] = 0;
  do {
   if ((i1 | 0) != 0) {
    i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    if ((i2 | 0) == 0) {
     __ZN7WebCore11BidiContextD2Ev(i6);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i1 >> 2] = i2;
     break;
    }
   }
  } while (0);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 100 >> 2] & 15](i7 | 0, 1);
  i1 = HEAP32[i7 + 48 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i8 = 16;
   break;
  } else {
   i7 = i1;
  }
 }
 if ((i8 | 0) == 15) {
  return;
 } else if ((i8 | 0) == 16) {
  return;
 }
}
function __ZNK7WebCore21VerticalPositionCache3getEPNS_12RenderObjectENS_12FontBaselineE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = (i3 | 0) == 0 ? i1 | 0 : i1 + 20 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = HEAP32[i4 + 4 >> 2] | 0;
  i5 = i3 << 3 | 0;
  i6 = 0;
  i7 = i3;
 } else {
  i3 = HEAP32[i4 + 8 >> 2] | 0;
  i8 = i2;
  i9 = i8 + ~(i8 << 15) | 0;
  i8 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i8 >>> 6 ^ i8;
  i8 = i9 + ~(i9 << 11) | 0;
  i9 = i8 >>> 16 ^ i8;
  i8 = i3 & i9;
  i10 = i1 + (i8 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i2 | 0)) {
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
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i3;
     i19 = i1 + (i18 << 3) | 0;
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
  } while (0);
  i2 = HEAP32[i4 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i1 + (i2 << 3) | 0 : i12;
  i6 = i1;
  i7 = i2;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = -2147483648;
  return i21 | 0;
 }
 i21 = HEAP32[i5 + 4 >> 2] | 0;
 return i21 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viff + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iiiiiiii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_fiifffii + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 22;
}
function __ZNK7WebCore13RootInlineBox11ellipsisBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if ((HEAP32[i1 + 32 >> 2] & 32768 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[H_BASE + 160 >> 2] | 0;
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i3 = i1;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 if ((i5 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i4 & i6;
 i7 = i5 + (i3 << 3) | 0;
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
   i12 = i3;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i2 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i4;
    i16 = i5 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break L7;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i2 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i9 + 4 >> 2] | 0;
 return i2 | 0;
}
function __ZN7WebCore13RootInlineBox14selectionStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i1 | 0) | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   i1 = i2;
   i4 = 0;
   while (1) {
    i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 108 >> 2] & 31](i1) | 0;
    if ((i5 | 0) == 1 & (i4 | 0) == 3) {
     i3 = 4;
     break L1;
    }
    i6 = (i4 | 0) == 1;
    if ((i5 | 0) == 3 & i6) {
     i3 = 4;
     break L1;
    }
    do {
     if ((i4 | 0) == 0) {
      i7 = i5;
     } else {
      if ((i5 | 0) == 0) {
       if (i6) {
        i3 = 4;
        break L1;
       } else {
        i7 = i4;
        break;
       }
      } else if (!((i5 | 0) == 3 | (i5 | 0) == 1)) {
       i7 = i4;
       break;
      }
      if ((i4 | 0) == 2 | (i4 | 0) == 0) {
       i7 = i5;
       break;
      }
      if ((i5 | 0) == 0 & i6) {
       i3 = 4;
       break L1;
      } else {
       i7 = i4;
      }
     }
    } while (0);
    if ((i7 | 0) == 4) {
     i3 = 4;
     break L1;
    }
    i6 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i1) | 0;
    if ((i6 | 0) == 0) {
     i3 = i7;
     break;
    } else {
     i1 = i6;
     i4 = i7;
    }
   }
  }
 } while (0);
 return i3 | 0;
}
function __ZN7WebCore13RootInlineBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
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
 i11 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i12 = HEAP32[i1 + 88 >> 2] | 0;
   if ((i12 | 0) == 0 | (i12 | 0) == (i11 | 0)) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i7 >> 2] = i11;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i8 >> 2] = i4;
 __ZN7WebCore13InlineFlowBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_(i1 | 0, i2, i3, i7, i8);
 HEAP32[i9 >> 2] = i11;
 HEAP32[i10 >> 2] = i4;
 __ZNK7WebCore13RootInlineBox16paintEllipsisBoxERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_(i1, i2, i3, i9, i10);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore13RootInlineBox17includeFontForBoxEPNS_9InlineBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 20 >> 2] | 0;
 if ((i3 & 2048 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((i3 & 768 | 0) == 256 | (i3 & 4096 | 0) != 0) {
   if ((i5 & 131072 | 0) == 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 do {
  if ((i5 & 131072 | 0) == 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 31](i2) | 0)) {
    break;
   }
   if ((HEAP32[i2 + 56 >> 2] & 4 | 0) == 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] | 0;
 if ((i2 & 4 | 0) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 32 >> 2] & 2048 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (i2 & 8 | 0) != 0;
 return i4 | 0;
}
function __ZNK7WebCore13RootInlineBox19includeGlyphsForBoxEPNS_9InlineBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 20 >> 2] | 0;
 if ((i3 & 2048 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((i3 & 768 | 0) == 256 | (i3 & 4096 | 0) != 0) {
   if ((i5 & 131072 | 0) == 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 do {
  if ((i5 & 131072 | 0) == 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 31](i2) | 0)) {
    break;
   }
   if ((HEAP32[i2 + 56 >> 2] & 4 | 0) == 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 if ((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] & 8 | 0) != 0;
 return i4 | 0;
}
function __ZNK7WebCore13RootInlineBox25blockDirectionPointInLineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = (HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 1) {
  i7 = HEAP32[i1 + 76 >> 2] | 0;
  HEAP32[i5 >> 2] = i7;
  __ZNK7WebCore13RootInlineBox15selectionBottomEv(i6, i1);
  i8 = (HEAP32[i6 >> 2] | 0) < (i7 | 0) ? i6 : i5;
  i9 = i8 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  STACKTOP = i2;
  return i10 | 0;
 } else {
  i5 = HEAP32[i1 + 72 >> 2] | 0;
  HEAP32[i3 >> 2] = i5;
  __ZNK7WebCore13RootInlineBox12selectionTopEv(i4, i1);
  i8 = (i5 | 0) < (HEAP32[i4 >> 2] | 0) ? i4 : i3;
  i9 = i8 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore13RootInlineBox16setLineBreakInfoEPNS_12RenderObjectEjRKNS_10BidiStatusE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 HEAP32[i1 + 64 >> 2] = i2;
 HEAP32[i1 + 60 >> 2] = i3;
 i3 = i1 + 56 | 0;
 i2 = HEAP32[i3 >> 2] & -7937 | HEAP32[i4 >> 2] << 8 & 7936;
 HEAP32[i3 >> 2] = i2;
 i5 = i2 & -253953 | HEAP32[i4 + 4 >> 2] << 13 & 253952;
 HEAP32[i3 >> 2] = i5;
 HEAP32[i3 >> 2] = i5 & -8126465 | HEAP32[i4 + 8 >> 2] << 18 & 8126464;
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 68 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i1 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore13RootInlineBox15clearTruncationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 32 | 0;
 if ((HEAP32[i5 >> 2] & 32768 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[H_BASE + 160 >> 2] | 0;
 HEAP32[i4 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore13RootInlineBoxENSt3__110unique_ptrINS1_11EllipsisBoxENS5_14default_deleteIS7_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EEE4takeERKS4_(i3, i6, i4);
 i4 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -32769;
 HEAP32[i4 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 }
 __ZN7WebCore13InlineFlowBox15clearTruncationEv(i1 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13RootInlineBoxC2ERNS_15RenderBlockFlowE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i2;
 HEAPF32[i1 + 20 >> 2] = +0;
 HEAPF32[i1 + 24 >> 2] = +0;
 HEAPF32[i1 + 28 >> 2] = +0;
 i4 = i1 + 32 | 0;
 HEAP32[i4 >> 2] = 18432;
 HEAP32[i3 >> 2] = __ZTVN7WebCore13InlineFlowBoxE + 8;
 i5 = i1 + 56 | 0;
 _memset(i1 + 36 | 0, 0, 20) | 0;
 i6 = HEAP32[i5 >> 2] & -8388852 | 16;
 HEAP32[i5 >> 2] = i6;
 i7 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] & 31 | 0) == 2 | 0;
 HEAP32[i5 >> 2] = i7 << 2 | i6 & -8388848 | i7 << 3;
 HEAP32[i3 >> 2] = H_BASE + 16;
 _memset(i1 + 60 | 0, 0, 44) | 0;
 HEAP32[i4 >> 2] = (HEAP32[i2 + 20 >> 2] | 0) >>> 13 << 11 & 2048 | 16384;
 return;
}
function __ZN7WebCore13RootInlineBoxC1ERNS_15RenderBlockFlowE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i2;
 HEAPF32[i1 + 20 >> 2] = +0;
 HEAPF32[i1 + 24 >> 2] = +0;
 HEAPF32[i1 + 28 >> 2] = +0;
 i4 = i1 + 32 | 0;
 HEAP32[i4 >> 2] = 18432;
 HEAP32[i3 >> 2] = __ZTVN7WebCore13InlineFlowBoxE + 8;
 i5 = i1 + 56 | 0;
 _memset(i1 + 36 | 0, 0, 20) | 0;
 i6 = HEAP32[i5 >> 2] & -8388852 | 16;
 HEAP32[i5 >> 2] = i6;
 i7 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] & 31 | 0) == 2 | 0;
 HEAP32[i5 >> 2] = i7 << 2 | i6 & -8388848 | i7 << 3;
 HEAP32[i3 >> 2] = H_BASE + 16;
 _memset(i1 + 60 | 0, 0, 44) | 0;
 HEAP32[i4 >> 2] = (HEAP32[i2 + 20 >> 2] | 0) >>> 13 << 11 & 2048 | 16384;
 return;
}
function __ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore13RootInlineBox17detachEllipsisBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 32 | 0;
 if ((HEAP32[i5 >> 2] & 32768 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[H_BASE + 160 >> 2] | 0;
 HEAP32[i4 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore13RootInlineBoxENSt3__110unique_ptrINS1_11EllipsisBoxENS5_14default_deleteIS7_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EEE4takeERKS4_(i3, i6, i4);
 i4 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -32769;
 HEAP32[i4 >> 2] = 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore13RootInlineBox20includeLeadingForBoxEPNS_9InlineBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 20 >> 2] | 0;
 if ((i3 & 2048 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 do {
  if ((i3 & 768 | 0) == 256 | (i3 & 4096 | 0) != 0) {
   if ((HEAP32[i2 + 32 >> 2] & 131072 | 0) == 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] | 0;
 if ((i3 & 2 | 0) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i1 | 0) != (i2 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (i3 & 1 | 0) != 0;
 return i4 | 0;
}
function __ZNK7WebCore13RootInlineBox12isHyphenatedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 31](i4) | 0) {
   if ((HEAP32[i4 + 32 >> 2] & 32768 | 0) != 0) {
    i3 = 1;
    i5 = 7;
    break;
   }
  }
  i2 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i4) | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 8;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 7) {
  return i3 | 0;
 } else if ((i5 | 0) == 8) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore13RootInlineBox16firstSelectedBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __ZNK7WebCore13InlineFlowBox14firstLeafChildEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 108 >> 2] & 31](i4) | 0) != 0) {
   i3 = i4;
   i5 = 5;
   break;
  }
  i2 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i4) | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 6;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 6) {
  return i3 | 0;
 } else if ((i5 | 0) == 5) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore13RootInlineBox15lastSelectedBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __ZNK7WebCore13InlineFlowBox13lastLeafChildEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 108 >> 2] & 31](i4) | 0) != 0) {
   i3 = i4;
   i5 = 5;
   break;
  }
  i2 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i4) | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 6;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 6) {
  return i3 | 0;
 } else if ((i5 | 0) == 5) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore13RootInlineBox19includeMarginForBoxEPNS_9InlineBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 20 >> 2] | 0;
 if ((i3 & 2048 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 do {
  if ((i3 & 768 | 0) == 256 | (i3 & 4096 | 0) != 0) {
   if ((HEAP32[i2 + 32 >> 2] & 131072 | 0) == 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] & 32 | 0) != 0;
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
function __ZN7WebCore13RootInlineBox16placeEllipsisBoxEbfffRfRb(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var d8 = +0, d9 = +0, d10 = +0;
 d8 = +__ZN7WebCore13InlineFlowBox16placeEllipsisBoxEbfffRfRb(i1 | 0, i2, d3, d4, d5, i6, i7);
 if (d8 != +-1) {
  d9 = d8;
  return +d9;
 }
 if (i2) {
  d10 = d4 - d5;
 } else {
  d10 = d3;
 }
 HEAPF32[i6 >> 2] = d4 - d3;
 d9 = d10;
 return +d9;
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
function __ZNK7WebCore13RootInlineBox19lineBreakBidiStatusEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 56 >> 2] | 0;
 i4 = HEAP32[i2 + 68 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 HEAP32[i1 >> 2] = i3 >>> 8 & 31;
 HEAP32[i1 + 4 >> 2] = i3 >>> 13 & 31;
 HEAP32[i1 + 8 >> 2] = i3 >>> 18 & 31;
 HEAP32[i1 + 12 >> 2] = i4;
 return;
}
function __ZN7WebCore13InlineFlowBox14setConstructedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 32 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 31](i3);
  i3 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore13RootInlineBox26lineCanAccommodateEllipsisEbiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 if (+HEAPF32[i1 + 28 >> 2] - +((i2 ? i4 - i3 | 0 : i3 - i4 | 0) | 0) < +(i5 | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i6 = __ZNK7WebCore13InlineFlowBox22canAccommodateEllipsisEbii(i1 | 0, i2, i3, i5) | 0;
 return i6 | 0;
}
function __ZN7WebCore13RootInlineBox24closestLeafChildForPointERKNS_8IntPointEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN7WebCore13RootInlineBox38closestLeafChildForLogicalLeftPositionEib(i1, HEAP32[((HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 20 >> 2] & 8192 | 0) == 0 ? i2 + 4 | 0 : i2 | 0) >> 2] | 0, i3) | 0;
}
function __ZN7WebCore11BidiContextD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZNK7WebCore13RootInlineBox16baselinePositionENS_12FontBaselineE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 return FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 816 >> 2] & 1](i3, i2, (i4 & 1 | 0) != 0, i4 >>> 11 & 1 ^ 1, 1) | 0;
}
function __ZNK7WebCore13RootInlineBox32includesRootLineBoxFontOrLeadingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] | 0;
 if ((i2 & 3 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (i2 & 4 | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore13RootInlineBox10lineHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 i4 = HEAP32[i2 + 32 >> 2] | 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 812 >> 2] & 3](i1, i3, (i4 & 1 | 0) != 0, i4 >>> 11 & 1 ^ 1, 1);
 return;
}
function __ZNK7WebCore13RootInlineBox12fitsToGlyphsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 92 >> 2] & 8 | 0) != 0;
 return i2 | 0;
}
function __ZNK7WebCore13RootInlineBox13maxLogicalTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAPF32[i3 >> 2] = +0;
 __ZNK7WebCore13InlineFlowBox20computeMaxLogicalTopERf(i1 | 0, i3);
 STACKTOP = i2;
 return +(+HEAPF32[i3 >> 2]);
}
function dynCall_iiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return FUNCTION_TABLE_iiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0) | 0;
}
function iiiii___ZNK7WebCore13InlineFlowBox22canAccommodateEllipsisEbii__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZNK7WebCore13InlineFlowBox22canAccommodateEllipsisEbii(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function dynCall_fiifffii(i1, i2, i3, d4, d5, d6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return +FUNCTION_TABLE_fiifffii[i1 & 3](i2 | 0, i3 | 0, +d4, +d5, +d6, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function __ZN7WebCore13RootInlineBox30extractLineBoxFromRenderObjectEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderLineBoxList14extractLineBoxEPNS_13InlineFlowBoxE((HEAP32[i1 + 16 >> 2] | 0) + 104 | 0, i1 | 0);
 return;
}
function __ZN7WebCore13RootInlineBox29removeLineBoxFromRenderObjectEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderLineBoxList13removeLineBoxEPNS_13InlineFlowBoxE((HEAP32[i1 + 16 >> 2] | 0) + 104 | 0, i1 | 0);
 return;
}
function __ZN7WebCore13RootInlineBox27attachLineBoxToRenderObjectEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17RenderLineBoxList13attachLineBoxEPNS_13InlineFlowBoxE((HEAP32[i1 + 16 >> 2] | 0) + 104 | 0, i1 | 0);
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore9InlineBox9markDirtyEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 32 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -257 | (i2 & 1) << 8;
 return;
}
function b10(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(10);
 return 0;
}
function b5(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(5);
 return +0;
}
function __ZN7WebCore13RootInlineBox19setContainingRegionEPNS_12RenderRegionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 88 >> 2] = i2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZNK7WebCore9InlineBox14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InlineBox14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InlineBox14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InlineBox14caretMaxOffsetEv(i1 | 0) | 0;
}
function __ZNK7WebCore9InlineBox11isLineBreakEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 20 >> 2] & 4096 | 0) != 0 | 0;
}
function dynCall_viff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 FUNCTION_TABLE_viff[i1 & 3](i2 | 0, +d3, +d4);
}
function vi___ZN7WebCore13InlineFlowBox11extractLineEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13InlineFlowBox11extractLineEv(i1 | 0);
}
function vi___ZN7WebCore13InlineFlowBox10deleteLineEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13InlineFlowBox10deleteLineEv(i1 | 0);
}
function vi___ZN7WebCore13InlineFlowBox10attachLineEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13InlineFlowBox10attachLineEv(i1 | 0);
}
function vi___ZN7WebCore9InlineBox14dirtyLineBoxesEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InlineBox14dirtyLineBoxesEv(i1 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore9InlineBox19calculateBoundariesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN7WebCore13RootInlineBoxD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RootInlineBoxD2Ev(i1);
 __ZdlPv(i1);
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
function __ZNK7WebCore13RootInlineBox16containingRegionEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 88 >> 2] | 0;
}
function b2(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(2);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore13RootInlineBox9blockFlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 16 >> 2] | 0;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 3](i2 | 0);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore9InlineBox20virtualLogicalHeightEv(i1) {
 i1 = i1 | 0;
 return +(+0);
}
function __ZNK7WebCore13RootInlineBox15isRootInlineBoxEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore13InlineFlowBox15isInlineFlowBoxEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox18isInlineElementBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox15isInlineTextBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
}
function __ZNK7WebCore13InlineFlowBox6isLeafEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function b8(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 abort(8);
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b9(i1) {
 i1 = i1 | 0;
 abort(9);
 return +0;
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
function b1() {
 abort(1);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore13RootInlineBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iiiii = [b2,b2,iiiii___ZNK7WebCore13InlineFlowBox22canAccommodateEllipsisEbii__wrapper,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore13RootInlineBoxD0Ev,b3,__ZN7WebCore13RootInlineBoxD2Ev,b3,__ZN7WebCore13RootInlineBox30extractLineBoxFromRenderObjectEv,b3,vi___ZN7WebCore13InlineFlowBox11extractLineEv__wrapper,b3,__ZN7WebCore13RootInlineBox27attachLineBoxToRenderObjectEv,b3,vi___ZN7WebCore9InlineBox14dirtyLineBoxesEv__wrapper,b3,vi___ZN7WebCore13InlineFlowBox10deleteLineEv__wrapper,b3,vi___ZN7WebCore13InlineFlowBox10attachLineEv__wrapper,b3,__ZN7WebCore13RootInlineBox15clearTruncationEv,b3,__ZN7WebCore13InlineFlowBox14setConstructedEv,b3,__ZN7WebCore13RootInlineBox29removeLineBoxFromRenderObjectEv,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZNK7WebCore13RootInlineBox10lineHeightEv,b4,__ZN7WebCore13RootInlineBoxC2ERNS_15RenderBlockFlowE,b4,__ZN7WebCore9InlineBox9markDirtyEb,b4,__ZNK7WebCore9InlineBox19calculateBoundariesEv,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_fiifffii = [b5,b5,__ZN7WebCore13RootInlineBox16placeEllipsisBoxEbfffRfRb,b5];
  var FUNCTION_TABLE_ii = [b6,b6,ii___ZNK7WebCore9InlineBox14caretMaxOffsetEv__wrapper,b6,__ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv,b6,__ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv,b6,__ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv,b6,__ZNK7WebCore13InlineFlowBox15isInlineFlowBoxEv,b6,__ZN7WebCore13RootInlineBox14selectionStateEv,b6,ii___ZNK7WebCore9InlineBox14caretMinOffsetEv__wrapper,b6,__ZNK7WebCore13InlineFlowBox6isLeafEv,b6,__ZNK7WebCore13RootInlineBox15isRootInlineBoxEv,b6,__ZNK7WebCore9InlineBox11isLineBreakEv,b6,__ZNK7WebCore9InlineBox18isInlineElementBoxEv,b6,__ZNK7WebCore9InlineBox15isInlineTextBoxEv,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_viii = [b7,b7];
  var FUNCTION_TABLE_viff = [b8,b8,__ZN7WebCore13RootInlineBox14adjustPositionEff,b8];
  var FUNCTION_TABLE_fi = [b9,b9,__ZNK7WebCore9InlineBox20virtualLogicalHeightEv,b9];
  var FUNCTION_TABLE_iiiiiiii = [b10,b10,__ZN7WebCore13RootInlineBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_,b10];
  var FUNCTION_TABLE_iii = [b11,b11,__ZNK7WebCore13RootInlineBox16baselinePositionENS_12FontBaselineE,b11];
  var FUNCTION_TABLE_iiiiii = [b12,b12];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_fiifffii: dynCall_fiifffii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_viff: dynCall_viff, dynCall_fi: dynCall_fi, dynCall_iiiiiiii: dynCall_iiiiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_fiifffii": invoke_fiifffii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_viff": invoke_viff, "invoke_fi": invoke_fi, "invoke_iiiiiiii": invoke_iiiiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore13InlineFlowBoxE": __ZTVN7WebCore13InlineFlowBoxE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_fiifffii = Module["dynCall_fiifffii"] = asm["dynCall_fiifffii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_viff = Module["dynCall_viff"] = asm["dynCall_viff"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = asm["dynCall_iiiiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore13RootInlineBox10lineHeightEv","__ZN7WebCore13RootInlineBox12childRemovedEPNS_9InlineBoxE","__ZNK7WebCore13RootInlineBox15selectionBottomEv","__ZN7WebCore13RootInlineBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_","__ZN7WebCore13RootInlineBoxD0Ev","__ZNK7WebCore13RootInlineBox11ellipsisBoxEv","__ZNK7WebCore13RootInlineBox24paddedLayoutOverflowRectENS_10LayoutUnitE","__ZN7WebCore13RootInlineBox16firstSelectedBoxEv","__ZN7WebCore13RootInlineBoxD2Ev","_memset","__ZN3WTF9HashTableIPKN7WebCore13RootInlineBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_11EllipsisBoxENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_","__ZNK7WebCore13RootInlineBox18lineSnapAdjustmentENS_10LayoutUnitE","__ZNK7WebCore13RootInlineBox15isRootInlineBoxEv","__ZN7WebCore13RootInlineBox14adjustPositionEff","__ZNK7WebCore13InlineFlowBox15isInlineFlowBoxEv","__ZNK7WebCore13RootInlineBox22ascentAndDescentForBoxEPNS_9InlineBoxERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS3_6VectorIPKNS_14SimpleFontDataELj0ENS3_15CrashOnOverflowEEENS_13GlyphOverflowEEENS3_7PtrHashIS7_EENS3_10HashTraitsIS7_EENSK_ISH_EEEERiSP_RbSQ_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore13RootInlineBox30extractLineBoxFromRenderObjectEv","_memcpy","__ZNK7WebCore13RootInlineBox13maxLogicalTopEv","__ZNK7WebCore9InlineBox20virtualLogicalHeightEv","__ZN7WebCore13RootInlineBox27attachLineBoxToRenderObjectEv","__ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv","__ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv","__ZNK7WebCore13RootInlineBox32includesRootLineBoxFontOrLeadingEv","__ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_iEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_iS9_NS_10HashTraitsIS3_EENSB_IiEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_RiEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore13RootInlineBox17detachEllipsisBoxEv","__ZNK7WebCore13RootInlineBox25blockDirectionPointInLineEv","__ZN7WebCore13RootInlineBox15lastSelectedBoxEv","__ZN3WTF7HashMapIPKN7WebCore13RootInlineBoxENSt3__110unique_ptrINS1_11EllipsisBoxENS5_14default_deleteIS7_EEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSD_ISA_EEE4takeERKS4_","__ZN7WebCore13RootInlineBox14selectionStateEv","__ZN3WTF9HashTableIPKN7WebCore13RootInlineBoxENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_11EllipsisBoxENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EES4_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SC_SE_SG_SM_SJ_EEEEOT0_OT1_","__ZN3WTF9HashTableIPN7WebCore12RenderObjectENS_12KeyValuePairIS3_iEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_iS9_NS_10HashTraitsIS3_EENSB_IiEEE18KeyValuePairTraitsESC_E6expandEPS5_","__ZN7WebCore13RootInlineBox13placeEllipsisERKN3WTF12AtomicStringEbfffPNS_9InlineBoxE","__ZNK7WebCore13RootInlineBox16containingRegionEv","__ZNK7WebCore13RootInlineBox17includeFontForBoxEPNS_9InlineBoxE","__ZNK7WebCore13InlineFlowBox6isLeafEv","__ZNK7WebCore13RootInlineBox12fitsToGlyphsEv","__ZNK7WebCore13RootInlineBox16paintEllipsisBoxERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_","__ZNK7WebCore13RootInlineBox19includeGlyphsForBoxEPNS_9InlineBoxE","__ZN7WebCore13RootInlineBox16lineSelectionGapERNS_11RenderBlockERKNS_11LayoutPointERKNS_10LayoutSizeENS_10LayoutUnitES9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE","__ZN7WebCore13RootInlineBox24closestLeafChildForPointERKNS_8IntPointEb","__ZN7WebCore13RootInlineBox15clearTruncationEv","__ZN7WebCore13InlineFlowBox14setConstructedEv","__ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv","__ZNK7WebCore13RootInlineBox19includeMarginForBoxEPNS_9InlineBoxE","__ZNK7WebCore9InlineBox11isLineBreakEv","__ZNK7WebCore13RootInlineBox27beforeAnnotationsAdjustmentEv","_strlen","__ZNK7WebCore13RootInlineBox16baselinePositionENS_12FontBaselineE","__ZN7WebCore13RootInlineBox16placeEllipsisBoxEbfffRfRb","__ZNK7WebCore13RootInlineBox16computeCaretRectEfjPNS_10LayoutUnitE","__ZNK7WebCore13RootInlineBox19lineBreakBidiStatusEv","__ZN7WebCore9InlineBox9markDirtyEb","__ZN7WebCore11BidiContextD2Ev","__ZN7WebCore13RootInlineBox26lineCanAccommodateEllipsisEbiii","__ZN7WebCore13RootInlineBoxC2ERNS_15RenderBlockFlowE","__ZN7WebCore13RootInlineBox19setContainingRegionEPNS_12RenderRegionE","__ZNK7WebCore13RootInlineBox26getLogicalStartBoxWithNodeERPNS_9InlineBoxE","__ZN7WebCore13RootInlineBox38closestLeafChildForLogicalLeftPositionEib","__ZN7WebCore13RootInlineBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_","__ZN7WebCore13RootInlineBox26alignBoxesInBlockDirectionENS_10LayoutUnitERN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEERNS_21VerticalPositionCacheE","__ZNK7WebCore13RootInlineBox37selectionTopAdjustedForPrecedingBlockEv","__ZNK7WebCore13RootInlineBox24getLogicalEndBoxWithNodeERPNS_9InlineBoxE","__ZN7WebCore13RootInlineBox16setLineBreakInfoEPNS_12RenderObjectEjRKNS_10BidiStatusE","__ZNK7WebCore21VerticalPositionCache3getEPNS_12RenderObjectENS_12FontBaselineE","__ZN3WTF6VectorIPKN7WebCore14SimpleFontDataELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore13RootInlineBox20includeLeadingForBoxEPNS_9InlineBoxE","__ZNK7WebCore13RootInlineBox9blockFlowEv","__ZNK7WebCore9InlineBox19calculateBoundariesEv","__ZNK7WebCore13RootInlineBox12selectionTopEv","__ZNK7WebCore9InlineBox18isInlineElementBoxEv","__ZNK7WebCore9InlineBox15isInlineTextBoxEv","__ZNK7WebCore13RootInlineBox12isHyphenatedEv","__ZN7WebCore13RootInlineBox22verticalPositionForBoxEPNS_9InlineBoxERNS_21VerticalPositionCacheE","__ZN7WebCore13RootInlineBox29removeLineBoxFromRenderObjectEv"]

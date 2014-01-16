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
H_BASE = parentModule["_malloc"](184 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 184;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14FECustomFilterC1EPNS_6FilterEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS4_INS_28CustomFilterValidatedProgramEEERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE;
var __ZN7WebCore14FECustomFilterD1Ev;
/* memory initializer */ allocate([93,10,0,0,0,0,0,0,91,102,101,67,117,115,116,111,109,70,105,108,116,101,114,0,71,76,95,79,69,83,95,114,103,98,56,95,114,103,98,97,56,0,0,0,0,0,0,0,71,76,95,65,78,71,76,69,95,102,114,97,109,101,98,117,102,102,101,114,95,98,108,105,116,0,0,0,0,0,0,0,71,76,95,65,78,71,76,69,95,102,114,97,109,101,98,117,102,102,101,114,95,109,117,108,116,105,115,97,109,112,108,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  try {
    Module["dynCall_viiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
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
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
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
  var __ZTVN7WebCore14FECustomFilterE=(H_BASE+128)|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiiiiiiiii=env.invoke_viiiiiiiiiii;
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viii=env.invoke_viii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14FECustomFilter23createMultisampleBufferEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 HEAP8[i1 + 156 | 0] = 1;
 i9 = i1 + 120 | 0;
 i10 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(HEAP32[i9 >> 2] | 0) | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i2;
  return i11 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 100 >> 2] & 7](i10) | 0)) {
  i11 = 0;
  STACKTOP = i2;
  return i11 | 0;
 }
 i12 = i10;
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 88 | 0);
 do {
  if (FUNCTION_TABLE_iii[i13 & 1](i10, i3) | 0) {
   i14 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i4, H_BASE + 56 | 0);
   do {
    if (FUNCTION_TABLE_iii[i14 & 1](i10, i4) | 0) {
     i15 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i5, H_BASE + 32 | 0);
     i16 = (FUNCTION_TABLE_iii[i15 & 1](i10, i5) | 0) ^ 1;
     i15 = HEAP32[i5 >> 2] | 0;
     if ((i15 | 0) == 0) {
      i17 = i16;
      break;
     }
     i18 = i15 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      i17 = i16;
      break;
     } else {
      HEAP32[i18 >> 2] = i19;
      i17 = i16;
      break;
     }
    } else {
     i17 = 1;
    }
   } while (0);
   i14 = HEAP32[i4 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i20 = i17;
    break;
   }
   i16 = i14 | 0;
   i19 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    i20 = i17;
    break;
   } else {
    HEAP32[i16 >> 2] = i19;
    i20 = i17;
    break;
   }
  } else {
   i20 = 1;
  }
 } while (0);
 i17 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i17 | 0) == 0) {
   if (i20) {
    i11 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i11 | 0;
  } else {
   i3 = i17 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    if (i20) {
     i11 = 0;
    } else {
     break;
    }
    STACKTOP = i2;
    return i11 | 0;
   } else {
    HEAP32[i3 >> 2] = i4;
    if (i20) {
     i11 = 0;
    } else {
     break;
    }
    STACKTOP = i2;
    return i11 | 0;
   }
  }
 } while (0);
 i20 = i10;
 i17 = HEAP32[(HEAP32[i20 >> 2] | 0) + 12 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 56 | 0);
 FUNCTION_TABLE_vii[i17 & 7](i10, i6);
 i17 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i6 = i17 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[(HEAP32[i20 >> 2] | 0) + 12 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 88 | 0);
 FUNCTION_TABLE_vii[i17 & 7](i10, i7);
 i17 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i7 = i17 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i7 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[(HEAP32[i20 >> 2] | 0) + 12 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 32 | 0);
 FUNCTION_TABLE_vii[i17 & 7](i10, i8);
 i10 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i8 = i10 | 0;
   i17 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i10 = i1 + 160 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  HEAP32[i10 >> 2] = __ZN7WebCore17GraphicsContext3D17createFramebufferEv(HEAP32[i9 >> 2] | 0) | 0;
 }
 i10 = i1 + 164 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  HEAP32[i10 >> 2] = __ZN7WebCore17GraphicsContext3D18createRenderbufferEv(HEAP32[i9 >> 2] | 0) | 0;
 }
 i10 = i1 + 168 | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  i11 = 1;
  STACKTOP = i2;
  return i11 | 0;
 }
 HEAP32[i10 >> 2] = __ZN7WebCore17GraphicsContext3D18createRenderbufferEv(HEAP32[i9 >> 2] | 0) | 0;
 i11 = 1;
 STACKTOP = i2;
 return i11 | 0;
}
function __ZN7WebCore14FECustomFilter17prepareForDrawingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 120 | 0;
 __ZN7WebCore17GraphicsContext3D18makeContextCurrentEv(HEAP32[i7 >> 2] | 0) | 0;
 i8 = i1 + 128 | 0;
 do {
  if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   i9 = i1 + 124 | 0;
   __ZN7WebCore28CustomFilterValidatedProgram15compiledProgramEv(i4, HEAP32[i9 >> 2] | 0);
   i10 = i4 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   do {
    if ((i11 | 0) == 0) {
     i10 = HEAP32[i7 >> 2] | 0;
     if ((i10 | 0) != 0) {
      i12 = i10 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     }
     i12 = HEAP32[i9 >> 2] | 0;
     i13 = HEAP32[i12 + 12 >> 2] | 0;
     i14 = __ZN3WTF10fastMallocEj(60) | 0;
     i15 = i14;
     i16 = i3 | 0;
     HEAP32[i16 >> 2] = i10;
     __ZN7WebCore27CustomFilterCompiledProgramC1EN3WTF10PassRefPtrINS_17GraphicsContext3DEEERKNS1_6StringES7_NS_23CustomFilterProgramTypeE(i15, i3, i12 + 28 | 0, i12 + 32 | 0, i13);
     i13 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i13 | 0) != 0) {
       i16 = i13 | 0;
       i12 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
       if ((i12 | 0) == 0) {
        __ZN7WebCore17GraphicsContext3DD1Ev(i13);
        __ZN3WTF8fastFreeEPv(i13);
        break;
       } else {
        HEAP32[i16 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i13 = HEAP32[i9 >> 2] | 0;
     i12 = i5 | 0;
     HEAP32[i12 >> 2] = i15;
     if ((i14 | 0) != 0) {
      i16 = i14;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     }
     __ZN7WebCore28CustomFilterValidatedProgram18setCompiledProgramEN3WTF10PassRefPtrINS_27CustomFilterCompiledProgramEEE(i13, i5);
     i13 = HEAP32[i12 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i17 = i15;
      break;
     }
     i12 = i13 | 0;
     i16 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) == 0) {
      __ZN7WebCore27CustomFilterCompiledProgramD1Ev(i13);
      __ZN3WTF8fastFreeEPv(i13);
      i17 = i15;
      break;
     } else {
      HEAP32[i12 >> 2] = i16;
      i17 = i15;
      break;
     }
    } else {
     i17 = i11;
    }
   } while (0);
   i11 = HEAP32[i8 >> 2] | 0;
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = i17;
   __ZN7WebCore20CustomFilterRenderer18setCompiledProgramEN3WTF10PassRefPtrINS_27CustomFilterCompiledProgramEEE(i11, i6);
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i9 = i11 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) == 0) {
    __ZN7WebCore27CustomFilterCompiledProgramD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i9 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if (!(__ZN7WebCore20CustomFilterRenderer17prepareForDrawingEv(HEAP32[i8 >> 2] | 0) | 0)) {
  i18 = 0;
  STACKTOP = i2;
  return i18 | 0;
 }
 do {
  if (__ZNK7WebCore20CustomFilterRenderer24programNeedsInputTextureEv(HEAP32[i8 >> 2] | 0) | 0) {
   i6 = i1 + 140 | 0;
   if ((HEAP32[i6 >> 2] | 0) != 0) {
    break;
   }
   i17 = __ZN7WebCore17GraphicsContext3D13createTextureEv(HEAP32[i7 >> 2] | 0) | 0;
   HEAP32[i6 >> 2] = i17;
   if ((i17 | 0) == 0) {
    i18 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i18 | 0;
  }
 } while (0);
 i8 = i1 + 144 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  HEAP32[i8 >> 2] = __ZN7WebCore17GraphicsContext3D17createFramebufferEv(HEAP32[i7 >> 2] | 0) | 0;
 }
 i17 = i1 + 148 | 0;
 if ((HEAP32[i17 >> 2] | 0) == 0) {
  HEAP32[i17 >> 2] = __ZN7WebCore17GraphicsContext3D18createRenderbufferEv(HEAP32[i7 >> 2] | 0) | 0;
 }
 i6 = i1 + 152 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = __ZN7WebCore17GraphicsContext3D13createTextureEv(HEAP32[i7 >> 2] | 0) | 0;
  HEAP32[i6 >> 2] = i5;
  i19 = i5;
 } else {
  i19 = i1;
 }
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  i18 = 0;
  STACKTOP = i2;
  return i18 | 0;
 }
 i18 = (i19 | 0) != 0 & (HEAP32[i17 >> 2] | 0) != 0;
 STACKTOP = i2;
 return i18 | 0;
}
function __ZN7WebCore14FECustomFilter11applyShaderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 40 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = i1 + 128 | 0;
 i10 = i1 | 0;
 if (__ZNK7WebCore20CustomFilterRenderer18premultipliedAlphaEv(HEAP32[i9 >> 2] | 0) | 0) {
  i11 = __ZN7WebCore12FilterEffect30createPremultipliedImageResultEv(i10) | 0;
 } else {
  i11 = __ZN7WebCore12FilterEffect29createUnmultipliedImageResultEv(i10) | 0;
 }
 if ((i11 | 0) == 0) {
  i12 = 0;
  STACKTOP = i2;
  return i12 | 0;
 }
 if (!(__ZN7WebCore14FECustomFilter17prepareForDrawingEv(i1) | 0)) {
  i12 = 0;
  STACKTOP = i2;
  return i12 | 0;
 }
 i13 = __ZNK7WebCore12FilterEffect11inputEffectEj(i10, 0) | 0;
 i14 = i5;
 i15 = i13 + 36 | 0;
 HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i14 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i14 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i14 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
 __ZNK7WebCore12FilterEffect31requestedRegionOfInputImageDataERKNS_7IntRectE(i4, i10, i5);
 i5 = i4 + 8 | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 i15 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i10;
 HEAP32[i6 + 4 >> 2] = i15;
 i5 = i6;
 i6 = i10;
 i10 = i15;
 if ((i6 | 0) < 1) {
  i12 = 0;
  STACKTOP = i2;
  return i12 | 0;
 }
 i15 = i7 + 4 | 0;
 if ((i10 | 0) < 1) {
  i12 = 0;
  STACKTOP = i2;
  return i12 | 0;
 }
 i14 = i1 + 132 | 0;
 if ((HEAP32[i14 >> 2] | 0) == (i6 | 0)) {
  if ((HEAP32[i1 + 136 >> 2] | 0) != (i10 | 0)) {
   i16 = 10;
  }
 } else {
  i16 = 10;
 }
 do {
  if ((i16 | 0) == 10) {
   HEAP32[i3 >> 2] = 0;
   __ZN7WebCore17GraphicsContext3D11getIntegervEjPi(HEAP32[i1 + 120 >> 2] | 0, 3379, i3);
   i17 = HEAP32[i3 >> 2] | 0;
   if ((i10 | 0) > (i17 | 0) | (i6 | 0) > (i17 | 0)) {
    i12 = 0;
    STACKTOP = i2;
    return i12 | 0;
   }
   if (__ZN7WebCore14FECustomFilter13resizeContextERKNS_7IntSizeE(i1, i7) | 0) {
    break;
   } else {
    i12 = 0;
   }
   STACKTOP = i2;
   return i12 | 0;
  }
 } while (0);
 if (__ZNK7WebCore20CustomFilterRenderer24programNeedsInputTextureEv(HEAP32[i9 >> 2] | 0) | 0) {
  __ZN7WebCore12FilterEffect19asUnmultipliedImageERKNS_7IntRectE(i8, i13, i4);
  i4 = i8 | 0;
  i8 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  i4 = i1 + 120 | 0;
  i13 = i1 + 140 | 0;
  __ZN7WebCore17GraphicsContext3D11bindTextureEjj(HEAP32[i4 >> 2] | 0, 3553, HEAP32[i13 >> 2] | 0);
  i9 = HEAP32[i4 >> 2] | 0;
  i7 = HEAP32[i14 >> 2] | 0;
  i14 = HEAP32[i1 + 136 >> 2] | 0;
  i6 = HEAP32[i8 + 16 >> 2] | 0;
  do {
   if ((i6 | 0) == 0) {
    i16 = 17;
   } else {
    if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
     i16 = 17;
     break;
    }
    __ZN7WebCore17GraphicsContext3D10texImage2DEjijiiijjPKv(i9, 3553, 0, 6408, i7, i14, 0, 6408, 5121, HEAP32[i8 + 8 >> 2] | 0) | 0;
    i16 = 18;
   }
  } while (0);
  if ((i16 | 0) == 17) {
   __ZN7WebCore17GraphicsContext3D10texImage2DEjijiiijjPKv(i9, 3553, 0, 6408, i7, i14, 0, 6408, 5121, 0) | 0;
   if ((i8 | 0) != 0) {
    i16 = 18;
   }
  }
  do {
   if ((i16 | 0) == 18) {
    i14 = i8 + 4 | 0;
    i7 = i14 | 0;
    i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i9 | 0) != 0) {
     HEAP32[i7 >> 2] = i9;
     break;
    }
    i9 = i14 - 4 | 0;
    if ((i9 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 15](i9);
   }
  } while (0);
  i18 = HEAP32[i13 >> 2] | 0;
  i19 = i4;
 } else {
  i18 = 0;
  i19 = i1 + 120 | 0;
 }
 __ZN7WebCore14FECustomFilter14drawFilterMeshEj(i1, i18);
 i18 = HEAP32[i19 >> 2] | 0;
 i19 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 i15 = HEAP32[i11 + 16 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i20 = 0;
  } else {
   if ((HEAP32[i15 + 12 >> 2] | 0) == 0) {
    i20 = 0;
    break;
   }
   i20 = HEAP32[i11 + 8 >> 2] | 0;
  }
 } while (0);
 __ZN7WebCore17GraphicsContext3D10readPixelsEiiiijjPv(i18, 0, 0, i19, i5, 6408, 5121, i20);
 i12 = 1;
 STACKTOP = i2;
 return i12 | 0;
}
function __ZN7WebCore14FECustomFilter24resizeMultisampleBuffersERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 156 | 0;
 i6 = HEAP8[i5] | 0;
 do {
  if ((i6 & 1) == 0) {
   if (__ZN7WebCore14FECustomFilter23createMultisampleBufferEv(i1) | 0) {
    i7 = HEAP8[i5] | 0;
    break;
   } else {
    i8 = 0;
    STACKTOP = i3;
    return i8 | 0;
   }
  } else {
   i7 = i6;
  }
 } while (0);
 if ((i7 & 1) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i7 = i1 + 160 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i6 = i1 + 164 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i5 = i1 + 168 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 HEAP32[i4 >> 2] = 0;
 i9 = i1 + 120 | 0;
 __ZN7WebCore17GraphicsContext3D11getIntegervEjPi(HEAP32[i9 >> 2] | 0, 36183, i4);
 i1 = HEAP32[i4 >> 2] | 0;
 i4 = (i1 | 0) < 4 ? i1 : 4;
 if ((i4 | 0) == 0) {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i9 >> 2] | 0, 36160, 0);
   __ZN7WebCore17GraphicsContext3D17deleteFramebufferEj(HEAP32[i9 >> 2] | 0, HEAP32[i7 >> 2] | 0);
   HEAP32[i7 >> 2] = 0;
  }
  i1 = HEAP32[i6 >> 2] | 0;
  if ((i1 | 0) != 0) {
   __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i9 >> 2] | 0, i1);
   HEAP32[i6 >> 2] = 0;
  }
  i1 = HEAP32[i5 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i8 = 0;
   STACKTOP = i3;
   return i8 | 0;
  }
  __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i9 >> 2] | 0, i1);
  HEAP32[i5 >> 2] = 0;
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i1 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(HEAP32[i9 >> 2] | 0) | 0;
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i9 >> 2] | 0, 36160, HEAP32[i7 >> 2] | 0);
 __ZN7WebCore17GraphicsContext3D16bindRenderbufferEjj(HEAP32[i9 >> 2] | 0, 36161, HEAP32[i6 >> 2] | 0);
 i10 = i1;
 i11 = i2 | 0;
 i12 = i2 + 4 | 0;
 FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 28 >> 2] & 1](i1, 36161, i4, 32856, HEAP32[i11 >> 2] | 0, HEAP32[i12 >> 2] | 0);
 __ZN7WebCore17GraphicsContext3D23framebufferRenderbufferEjjjj(HEAP32[i9 >> 2] | 0, 36160, 36064, 36161, HEAP32[i6 >> 2] | 0);
 __ZN7WebCore17GraphicsContext3D16bindRenderbufferEjj(HEAP32[i9 >> 2] | 0, 36161, HEAP32[i5 >> 2] | 0);
 FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 28 >> 2] & 1](i1, 36161, i4, 33189, HEAP32[i11 >> 2] | 0, HEAP32[i12 >> 2] | 0);
 __ZN7WebCore17GraphicsContext3D23framebufferRenderbufferEjjjj(HEAP32[i9 >> 2] | 0, 36160, 36096, 36161, HEAP32[i5 >> 2] | 0);
 __ZN7WebCore17GraphicsContext3D16bindRenderbufferEjj(HEAP32[i9 >> 2] | 0, 36161, 0);
 if ((__ZN7WebCore17GraphicsContext3D22checkFramebufferStatusEj(HEAP32[i9 >> 2] | 0, 36160) | 0) == 36053) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i9 >> 2] | 0, 36160, 0);
  __ZN7WebCore17GraphicsContext3D17deleteFramebufferEj(HEAP32[i9 >> 2] | 0, HEAP32[i7 >> 2] | 0);
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i9 >> 2] | 0, i7);
  HEAP32[i6 >> 2] = 0;
 }
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i9 >> 2] | 0, i6);
 HEAP32[i5 >> 2] = 0;
 i8 = 0;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore14FECustomFilterC2EPNS_6FilterEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS4_INS_28CustomFilterValidatedProgramEEERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 136;
 i2 = i1 + 120 | 0;
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 i3 = i1 + 124 | 0;
 i12 = i4 | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i3 >> 2] = i4;
 i12 = i1 + 128 | 0;
 HEAP32[i1 + 160 >> 2] = 0;
 HEAP32[i1 + 164 >> 2] = 0;
 HEAP32[i1 + 168 >> 2] = 0;
 i1 = i11 | 0;
 _memset(i12 | 0, 0, 29) | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i13;
 if ((i13 | 0) == 0) {
  i14 = i4;
 } else {
  i4 = i13 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  i14 = HEAP32[i3 >> 2] | 0;
 }
 __ZN7WebCore20CustomFilterRenderer6createEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS_23CustomFilterProgramTypeERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE(i10, i11, HEAP32[i14 + 12 >> 2] | 0, i5, i6, i7, i8);
 i8 = i10 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i7 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i10;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore20CustomFilterRendererD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore20CustomFilterRendererD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i1 = i7 | 0;
 i12 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore17GraphicsContext3DD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i9;
  return;
 } else {
  HEAP32[i1 >> 2] = i12;
  STACKTOP = i9;
  return;
 }
}
function __ZN7WebCore14FECustomFilterC1EPNS_6FilterEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS4_INS_28CustomFilterValidatedProgramEEERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 136;
 i2 = i1 + 120 | 0;
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 i3 = i1 + 124 | 0;
 i12 = i4 | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i3 >> 2] = i4;
 i12 = i1 + 128 | 0;
 HEAP32[i1 + 160 >> 2] = 0;
 HEAP32[i1 + 164 >> 2] = 0;
 HEAP32[i1 + 168 >> 2] = 0;
 i1 = i11 | 0;
 _memset(i12 | 0, 0, 29) | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i13;
 if ((i13 | 0) == 0) {
  i14 = i4;
 } else {
  i4 = i13 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  i14 = HEAP32[i3 >> 2] | 0;
 }
 __ZN7WebCore20CustomFilterRenderer6createEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS_23CustomFilterProgramTypeERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE(i10, i11, HEAP32[i14 + 12 >> 2] | 0, i5, i6, i7, i8);
 i8 = i10 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i7 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i10;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore20CustomFilterRendererD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore20CustomFilterRendererD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i1 = i7 | 0;
 i12 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore17GraphicsContext3DD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i9;
  return;
 } else {
  HEAP32[i1 >> 2] = i12;
  STACKTOP = i9;
  return;
 }
}
function __ZN7WebCore14FECustomFilter13resizeContextERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = __ZN7WebCore14FECustomFilter24resizeMultisampleBuffersERKNS_7IntSizeE(i1, i2) | 0;
 i4 = i1 + 120 | 0;
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i4 >> 2] | 0, 36160, HEAP32[i1 + 144 >> 2] | 0);
 i5 = i1 + 152 | 0;
 __ZN7WebCore17GraphicsContext3D11bindTextureEjj(HEAP32[i4 >> 2] | 0, 3553, HEAP32[i5 >> 2] | 0);
 i6 = i2 | 0;
 i7 = i2 + 4 | 0;
 __ZN7WebCore17GraphicsContext3D16texImage2DDirectEjijiiijjPKv(HEAP32[i4 >> 2] | 0, 3553, 0, 6408, HEAP32[i6 >> 2] | 0, HEAP32[i7 >> 2] | 0, 0, 6408, 5121, 0);
 __ZN7WebCore17GraphicsContext3D20framebufferTexture2DEjjjji(HEAP32[i4 >> 2] | 0, 36160, 36064, 3553, HEAP32[i5 >> 2] | 0, 0);
 if (!i3) {
  i5 = i1 + 148 | 0;
  __ZN7WebCore17GraphicsContext3D16bindRenderbufferEjj(HEAP32[i4 >> 2] | 0, 36161, HEAP32[i5 >> 2] | 0);
  __ZN7WebCore17GraphicsContext3D19renderbufferStorageEjjii(HEAP32[i4 >> 2] | 0, 36161, 33189, HEAP32[i6 >> 2] | 0, HEAP32[i7 >> 2] | 0);
  __ZN7WebCore17GraphicsContext3D23framebufferRenderbufferEjjjj(HEAP32[i4 >> 2] | 0, 36160, 36096, 36161, HEAP32[i5 >> 2] | 0);
 }
 if ((__ZN7WebCore17GraphicsContext3D22checkFramebufferStatusEj(HEAP32[i4 >> 2] | 0, 36160) | 0) != 36053) {
  i8 = 0;
  return i8 | 0;
 }
 if (i3) {
  __ZN7WebCore17GraphicsContext3D10clearColorEffff(HEAP32[i4 >> 2] | 0, +0, +0, +0, +0);
  __ZN7WebCore17GraphicsContext3D5clearEj(HEAP32[i4 >> 2] | 0, 16384);
 }
 __ZN7WebCore17GraphicsContext3D16bindRenderbufferEjj(HEAP32[i4 >> 2] | 0, 36161, 0);
 i4 = i2;
 i2 = i1 + 132 | 0;
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 i8 = 1;
 return i8 | 0;
}
function __ZN7WebCore14FECustomFilter14drawFilterMeshEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 160 | 0;
 do {
  if ((HEAP8[i1 + 156 | 0] & 1) == 0) {
   i4 = 0;
  } else {
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    i4 = 0;
    break;
   }
   if ((HEAP32[i1 + 164 >> 2] | 0) == 0) {
    i4 = 0;
    break;
   }
   i4 = (HEAP32[i1 + 168 >> 2] | 0) != 0;
  }
 } while (0);
 i5 = i1 + 120 | 0;
 i6 = i1 + 144 | 0;
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i5 >> 2] | 0, 36160, HEAP32[(i4 ? i3 : i6) >> 2] | 0);
 i7 = i1 + 132 | 0;
 i8 = i1 + 136 | 0;
 __ZN7WebCore17GraphicsContext3D8viewportEiiii(HEAP32[i5 >> 2] | 0, 0, 0, HEAP32[i7 >> 2] | 0, HEAP32[i8 >> 2] | 0);
 __ZN7WebCore17GraphicsContext3D10clearColorEffff(HEAP32[i5 >> 2] | 0, +0, +0, +0, +0);
 __ZN7WebCore17GraphicsContext3D5clearEj(HEAP32[i5 >> 2] | 0, 16640);
 __ZN7WebCore20CustomFilterRenderer4drawEjRKNS_7IntSizeE(HEAP32[i1 + 128 >> 2] | 0, i2, i7);
 if (!i4) {
  return;
 }
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i5 >> 2] | 0, 36008, HEAP32[i3 >> 2] | 0);
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i5 >> 2] | 0, 36009, HEAP32[i6 >> 2] | 0);
 i3 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(HEAP32[i5 >> 2] | 0) | 0;
 i4 = HEAP32[i1 + 132 >> 2] | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 FUNCTION_TABLE_viiiiiiiiiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 1](i3, 0, 0, i4, i1, 0, 0, i4, i1, 16384, 9728);
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i5 >> 2] | 0, 36008, 0);
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i5 >> 2] | 0, 36009, 0);
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i5 >> 2] | 0, 36160, HEAP32[i6 >> 2] | 0);
 return;
}
function __ZN7WebCore14FECustomFilter19deleteRenderBuffersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 120 | 0;
 __ZN7WebCore17GraphicsContext3D18makeContextCurrentEv(HEAP32[i2 >> 2] | 0) | 0;
 i3 = i1 + 140 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D13deleteTextureEj(HEAP32[i2 >> 2] | 0, i4);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 144 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i2 >> 2] | 0, 36160, 0);
  __ZN7WebCore17GraphicsContext3D17deleteFramebufferEj(HEAP32[i2 >> 2] | 0, HEAP32[i3 >> 2] | 0);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 148 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i2 >> 2] | 0, i4);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 152 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D13deleteTextureEj(HEAP32[i2 >> 2] | 0, i4);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 160 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i2 >> 2] | 0, 36160, 0);
  __ZN7WebCore17GraphicsContext3D17deleteFramebufferEj(HEAP32[i2 >> 2] | 0, HEAP32[i3 >> 2] | 0);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 164 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i2 >> 2] | 0, i4);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 168 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i2 >> 2] | 0, i1);
 HEAP32[i3 >> 2] = 0;
 return;
}
function __ZN7WebCore14FECustomFilter6createEPNS_6FilterEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS4_INS_28CustomFilterValidatedProgramEEERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = __ZN3WTF10fastMallocEj(172) | 0;
 i13 = i10 | 0;
 i14 = i3 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i13 >> 2] = i3;
 i3 = i11 | 0;
 i14 = i4 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i3 >> 2] = i4;
 __ZN7WebCore14FECustomFilterC2EPNS_6FilterEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS4_INS_28CustomFilterValidatedProgramEEERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE(i12, i2, i10, i11, i5, i6, i7, i8);
 HEAP32[i1 >> 2] = i12;
 i12 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i3 = i12 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    __ZN7WebCore28CustomFilterValidatedProgramD1Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    HEAP32[i3 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i13 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i13 = i12 | 0;
 i1 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore17GraphicsContext3DD1Ev(i12);
  __ZN3WTF8fastFreeEPv(i12);
  STACKTOP = i9;
  return;
 } else {
  HEAP32[i13 >> 2] = i1;
  STACKTOP = i9;
  return;
 }
}
function __ZN7WebCore14FECustomFilterD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 136;
 __ZN7WebCore14FECustomFilter19deleteRenderBuffersEv(i1);
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore20CustomFilterRendererD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore28CustomFilterValidatedProgramD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore12FilterEffectD2Ev(i5);
  return;
 }
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17GraphicsContext3DD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i5 = i1 | 0;
  __ZN7WebCore12FilterEffectD2Ev(i5);
  return;
 } else {
  HEAP32[i3 >> 2] = i4;
  i5 = i1 | 0;
  __ZN7WebCore12FilterEffectD2Ev(i5);
  return;
 }
}
function __ZN7WebCore14FECustomFilterD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 136;
 __ZN7WebCore14FECustomFilter19deleteRenderBuffersEv(i1);
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore20CustomFilterRendererD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore28CustomFilterValidatedProgramD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore12FilterEffectD2Ev(i5);
  return;
 }
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17GraphicsContext3DD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i5 = i1 | 0;
  __ZN7WebCore12FilterEffectD2Ev(i5);
  return;
 } else {
  HEAP32[i3 >> 2] = i4;
  i5 = i1 | 0;
  __ZN7WebCore12FilterEffectD2Ev(i5);
  return;
 }
}
function __ZN7WebCore14FECustomFilter21platformApplySoftwareEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 if (__ZN7WebCore14FECustomFilter11applyShaderEv(i1) | 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4;
 i6 = i1 | 0;
 __ZN7WebCore12FilterEffect11clearResultEv(i6);
 i7 = __ZN7WebCore12FilterEffect29createUnmultipliedImageResultEv(i6) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = __ZNK7WebCore12FilterEffect11inputEffectEj(i6, 0) | 0;
 HEAP8[i1 + 32 | 0] = HEAP8[i8 + 32 | 0] & 1;
 i1 = i8 + 36 | 0;
 HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 __ZNK7WebCore12FilterEffect31requestedRegionOfInputImageDataERKNS_7IntRectE(i3, i6, i4);
 __ZN7WebCore12FilterEffect21copyUnmultipliedImageEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERKNS_7IntRectE(i8, i7, i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14FECustomFilter21resizeContextIfNeededERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) < 1) {
   i7 = 0;
  } else {
   i8 = i2 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) < 1) {
    i7 = 0;
    break;
   }
   if ((HEAP32[i1 + 132 >> 2] | 0) == (i6 | 0)) {
    if ((HEAP32[i1 + 136 >> 2] | 0) == (i9 | 0)) {
     i7 = 1;
     break;
    }
   }
   HEAP32[i4 >> 2] = 0;
   __ZN7WebCore17GraphicsContext3D11getIntegervEjPi(HEAP32[i1 + 120 >> 2] | 0, 3379, i4);
   i9 = HEAP32[i4 >> 2] | 0;
   if ((HEAP32[i8 >> 2] | 0) > (i9 | 0)) {
    i7 = 0;
    break;
   }
   if ((HEAP32[i5 >> 2] | 0) > (i9 | 0)) {
    i7 = 0;
    break;
   }
   i7 = __ZN7WebCore14FECustomFilter13resizeContextERKNS_7IntSizeE(i1, i2) | 0;
  }
 } while (0);
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore14FECustomFilter17clearShaderResultEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 | 0;
 __ZN7WebCore12FilterEffect11clearResultEv(i5);
 i6 = __ZN7WebCore12FilterEffect29createUnmultipliedImageResultEv(i5) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = __ZNK7WebCore12FilterEffect11inputEffectEj(i5, 0) | 0;
 HEAP8[i1 + 32 | 0] = HEAP8[i7 + 32 | 0] & 1;
 i1 = i4;
 i8 = i7 + 36 | 0;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 __ZNK7WebCore12FilterEffect31requestedRegionOfInputImageDataERKNS_7IntRectE(i3, i5, i4);
 __ZN7WebCore12FilterEffect21copyUnmultipliedImageEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEERKNS_7IntRectE(i7, i6, i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14FECustomFilter24resolveMultisampleBufferEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 120 | 0;
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i2 >> 2] | 0, 36008, HEAP32[i1 + 160 >> 2] | 0);
 i3 = i1 + 144 | 0;
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i2 >> 2] | 0, 36009, HEAP32[i3 >> 2] | 0);
 i4 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(HEAP32[i2 >> 2] | 0) | 0;
 i5 = HEAP32[i1 + 132 >> 2] | 0;
 i6 = HEAP32[i1 + 136 >> 2] | 0;
 FUNCTION_TABLE_viiiiiiiiiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 1](i4, 0, 0, i5, i6, 0, 0, i5, i6, 16384, 9728);
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i2 >> 2] | 0, 36008, 0);
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i2 >> 2] | 0, 36009, 0);
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i2 >> 2] | 0, 36160, HEAP32[i3 >> 2] | 0);
 return;
}
function __ZN7WebCore14FECustomFilter17ensureFrameBufferEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 144 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  HEAP32[i2 >> 2] = __ZN7WebCore17GraphicsContext3D17createFramebufferEv(HEAP32[i1 + 120 >> 2] | 0) | 0;
 }
 i3 = i1 + 148 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = __ZN7WebCore17GraphicsContext3D18createRenderbufferEv(HEAP32[i1 + 120 >> 2] | 0) | 0;
 }
 i4 = i1 + 152 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = __ZN7WebCore17GraphicsContext3D13createTextureEv(HEAP32[i1 + 120 >> 2] | 0) | 0;
  HEAP32[i4 >> 2] = i6;
  i7 = i6;
 } else {
  i7 = i5;
 }
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return 0;
 } else {
  return (i7 | 0) != 0 & (HEAP32[i3 >> 2] | 0) != 0 | 0;
 }
 return 0;
}
function __ZN7WebCore14FECustomFilter30deleteMultisampleRenderBuffersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 160 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i3 = i1 + 120 | 0;
  __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i3 >> 2] | 0, 36160, 0);
  __ZN7WebCore17GraphicsContext3D17deleteFramebufferEj(HEAP32[i3 >> 2] | 0, HEAP32[i2 >> 2] | 0);
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 164 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i1 + 120 >> 2] | 0, i3);
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 168 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i1 + 120 >> 2] | 0, i3);
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore14FECustomFilter18uploadInputTextureEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 120 | 0;
 __ZN7WebCore17GraphicsContext3D11bindTextureEjj(HEAP32[i3 >> 2] | 0, 3553, HEAP32[i1 + 140 >> 2] | 0);
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i1 + 132 >> 2] | 0;
 i5 = HEAP32[i1 + 136 >> 2] | 0;
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i6 = 0;
  } else {
   if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
    i6 = 0;
    break;
   }
   i6 = HEAP32[i2 + 8 >> 2] | 0;
  }
 } while (0);
 __ZN7WebCore17GraphicsContext3D10texImage2DEjijiiijjPKv(i4, 3553, 0, 6408, i3, i5, 0, 6408, 5121, i6) | 0;
 return;
}
function __ZNK7WebCore14FECustomFilter22externalRepresentationERNS_10TextStreamEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3);
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 16 | 0) | 0;
 i4 = i1 | 0;
 __ZNK7WebCore12FilterEffect22externalRepresentationERNS_10TextStreamEi(i4, i2, 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 8 | 0) | 0;
 i1 = __ZNK7WebCore12FilterEffect11inputEffectEj(i4, 0) | 0;
 FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 3](i1, i2, i3 + 1 | 0) | 0;
 return i2 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 4;
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
function __ZN7WebCore14FECustomFilter18ensureInputTextureEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 140 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  i5 = (i4 | 0) != 0;
  return i5 | 0;
 }
 i3 = __ZN7WebCore17GraphicsContext3D13createTextureEv(HEAP32[i1 + 120 >> 2] | 0) | 0;
 HEAP32[i2 >> 2] = i3;
 i4 = i3;
 i5 = (i4 | 0) != 0;
 return i5 | 0;
}
function dynCall_viiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 i12 = i12 | 0;
 FUNCTION_TABLE_viiiiiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0);
}
function __ZNK7WebCore14FECustomFilter24canUseMultisampleBuffersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 156 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 160 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 164 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 168 >> 2] | 0) != 0;
 return i2 | 0;
}
function dynCall_viiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 FUNCTION_TABLE_viiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function __ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(i2, HEAP32[i1 + 112 >> 2] | 0);
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
 FUNCTION_TABLE_viiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b4(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 abort(4);
}
function b5(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(5);
}
function vi___ZN7WebCore12FilterEffect26determineAbsolutePaintRectEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffect26determineAbsolutePaintRectEv(i1 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 112 >> 2] = i2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 116 >> 2] = i2;
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
function __ZN7WebCore14FECustomFilterD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14FECustomFilterD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b7(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(7);
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
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
 return 0;
}
function __ZNK7WebCore12FilterEffect16filterEffectTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b9(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(9);
}
function __ZN7WebCore14FECustomFilter4dumpEv(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore12FilterEffect16filterEffectTypeEv,b0,__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv,b1,__ZN7WebCore14FECustomFilter4dumpEv,b1,vi___ZN7WebCore12FilterEffect26determineAbsolutePaintRectEv__wrapper,b1,__ZN7WebCore14FECustomFilter21platformApplySoftwareEv,b1,__ZN7WebCore14FECustomFilterD0Ev,b1,__ZN7WebCore14FECustomFilterD2Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE,b2,__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE,b2,b2,b2];
  var FUNCTION_TABLE_iiii = [b3,b3,__ZNK7WebCore14FECustomFilter22externalRepresentationERNS_10TextStreamEi,b3];
  var FUNCTION_TABLE_viiiiiiiiiii = [b4,b4];
  var FUNCTION_TABLE_viiiiiiii = [b5,b5,__ZN7WebCore14FECustomFilterC2EPNS_6FilterEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS4_INS_28CustomFilterValidatedProgramEEERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viiiiii = [b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  var FUNCTION_TABLE_viii = [b9,b9,__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viiiiiiiiiii: dynCall_viiiiiiiiiii, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viii: dynCall_viii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viii": invoke_viii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = asm["dynCall_viiiiiiiiiii"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore14FECustomFilter17clearShaderResultEv","__ZNK7WebCore14FECustomFilter24canUseMultisampleBuffersEv","__ZN7WebCore14FECustomFilter11applyShaderEv","__ZN7WebCore14FECustomFilter21platformApplySoftwareEv","_strlen","__ZN7WebCore14FECustomFilterD0Ev","__ZN7WebCore14FECustomFilterD2Ev","__ZN7WebCore14FECustomFilter4dumpEv","__ZN7WebCore14FECustomFilter24resizeMultisampleBuffersERKNS_7IntSizeE","__ZN7WebCore14FECustomFilter13resizeContextERKNS_7IntSizeE","__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv","__ZN7WebCore14FECustomFilter17prepareForDrawingEv","__ZN7WebCore14FECustomFilter19deleteRenderBuffersEv","_memset","_memcpy","__ZNK7WebCore14FECustomFilter22externalRepresentationERNS_10TextStreamEi","__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i","__ZN7WebCore14FECustomFilter23createMultisampleBufferEv","__ZN7WebCore14FECustomFilter18ensureInputTextureEv","__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE","__ZN7WebCore14FECustomFilter17ensureFrameBufferEv","__ZN7WebCore14FECustomFilter24resolveMultisampleBufferEv","__ZN7WebCore14FECustomFilter21resizeContextIfNeededERKNS_7IntSizeE","__ZN7WebCore14FECustomFilter30deleteMultisampleRenderBuffersEv","__ZN7WebCore14FECustomFilter18uploadInputTextureEPN3JSC21GenericTypedArrayViewINS1_19Uint8ClampedAdaptorEEE","__ZN7WebCore14FECustomFilter14drawFilterMeshEj","__ZN7WebCore14FECustomFilterC2EPNS_6FilterEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS4_INS_28CustomFilterValidatedProgramEEERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE","__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv","__ZN7WebCore14FECustomFilter6createEPNS_6FilterEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS4_INS_28CustomFilterValidatedProgramEEERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE","__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE","__ZNK7WebCore12FilterEffect16filterEffectTypeEv"]

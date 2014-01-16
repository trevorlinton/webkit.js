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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore20CustomFilterRendererC1EN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS_23CustomFilterProgramTypeERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE;
var __ZN7WebCore20CustomFilterRendererD1Ev;
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
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
function __ZN7WebCore20CustomFilterRenderer21bindProgramAndBuffersEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i4 = i3 | 0;
 i5 = i3 + 128 | 0;
 i6 = i1 + 4 | 0;
 i7 = i1 + 8 | 0;
 __ZN7WebCore17GraphicsContext3D10useProgramEj(HEAP32[i6 >> 2] | 0, HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0);
 i8 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i8 + 44 >> 2] | 0) == -1) {
  i9 = i8;
 } else {
  __ZN7WebCore17GraphicsContext3D13activeTextureEj(HEAP32[i6 >> 2] | 0, 33984);
  __ZN7WebCore17GraphicsContext3D9uniform1iEii(HEAP32[i6 >> 2] | 0, HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] | 0, 0);
  __ZN7WebCore17GraphicsContext3D11bindTextureEjj(HEAP32[i6 >> 2] | 0, 3553, i2);
  __ZN7WebCore17GraphicsContext3D13texParameteriEjji(HEAP32[i6 >> 2] | 0, 3553, 10241, 9729);
  __ZN7WebCore17GraphicsContext3D13texParameteriEjji(HEAP32[i6 >> 2] | 0, 3553, 10240, 9729);
  __ZN7WebCore17GraphicsContext3D13texParameteriEjji(HEAP32[i6 >> 2] | 0, 3553, 10242, 33071);
  __ZN7WebCore17GraphicsContext3D13texParameteriEjji(HEAP32[i6 >> 2] | 0, 3553, 10243, 33071);
  i9 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[i9 + 32 >> 2] | 0) == -1) {
  i10 = i9;
 } else {
  _memset(i4 + 8 | 0, 0, 32) | 0;
  _memset(i4 + 48 | 0, 0, 32) | 0;
  _memset(i4 + 88 | 0, 0, 24) | 0;
  HEAPF64[i4 >> 3] = +2;
  HEAPF64[i4 + 96 >> 3] = +-0;
  HEAPF64[i4 + 40 >> 3] = +2;
  HEAPF64[i4 + 104 >> 3] = +-0;
  HEAPF64[i4 + 80 >> 3] = +-9999999747378752e-20;
  HEAPF64[i4 + 112 >> 3] = +-0;
  HEAPF64[i4 + 120 >> 3] = +1;
  __ZNK7WebCore20TransformationMatrix23toColumnMajorFloatArrayERA16_f(i4, i5);
  __ZN7WebCore17GraphicsContext3D16uniformMatrix4fvEiihPf(HEAP32[i6 >> 2] | 0, HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] | 0, 1, 0, i5 | 0);
  i10 = HEAP32[i7 >> 2] | 0;
 }
 i5 = HEAP32[i10 + 40 >> 2] | 0;
 if ((i5 | 0) == -1) {
  i11 = i10;
 } else {
  __ZN7WebCore17GraphicsContext3D9uniform2fEiff(HEAP32[i6 >> 2] | 0, i5, +((HEAP32[i1 + 44 >> 2] | 0) >>> 0 >>> 0), +((HEAP32[i1 + 40 >> 2] | 0) >>> 0 >>> 0));
  i11 = HEAP32[i7 >> 2] | 0;
 }
 i5 = HEAP32[i11 + 36 >> 2] | 0;
 if ((i5 | 0) == -1) {
  i12 = i11;
 } else {
  __ZN7WebCore17GraphicsContext3D9uniform2fEiff(HEAP32[i6 >> 2] | 0, i5, +1 / +((HEAP32[i1 + 44 >> 2] | 0) >>> 0 >>> 0), +1 / +((HEAP32[i1 + 40 >> 2] | 0) >>> 0 >>> 0));
  i12 = HEAP32[i7 >> 2] | 0;
 }
 i5 = HEAP32[i12 + 28 >> 2] | 0;
 if ((i5 | 0) == -1) {
  i13 = i12;
 } else {
  __ZN7WebCore17GraphicsContext3D9uniform4fEiffff(HEAP32[i6 >> 2] | 0, i5, +-.5, +-.5, +1, +1);
  i13 = HEAP32[i7 >> 2] | 0;
 }
 i5 = HEAP32[i13 + 48 >> 2] | 0;
 if ((i5 | 0) != -1) {
  __ZN7WebCore17GraphicsContext3D9uniform2fEiff(HEAP32[i6 >> 2] | 0, i5, +(HEAP32[i1 + 20 >> 2] | 0), +(HEAP32[i1 + 24 >> 2] | 0));
 }
 i5 = i1 + 16 | 0;
 __ZN7WebCore17GraphicsContext3D10bindBufferEjj(HEAP32[i6 >> 2] | 0, 34962, HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0);
 __ZN7WebCore17GraphicsContext3D10bindBufferEjj(HEAP32[i6 >> 2] | 0, 34963, HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] | 0);
 i13 = HEAP32[i7 >> 2] | 0;
 i12 = HEAP32[i13 + 12 >> 2] | 0;
 if ((i12 | 0) == -1) {
  i14 = i13;
 } else {
  __ZN7WebCore17GraphicsContext3D19vertexAttribPointerEjijhii(HEAP32[i6 >> 2] | 0, i12, 4, 5126, 0, HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0, 0);
  __ZN7WebCore17GraphicsContext3D23enableVertexAttribArrayEj(HEAP32[i6 >> 2] | 0, i12);
  i14 = HEAP32[i7 >> 2] | 0;
 }
 i12 = HEAP32[i14 + 16 >> 2] | 0;
 if ((i12 | 0) == -1) {
  i15 = i14;
 } else {
  __ZN7WebCore17GraphicsContext3D19vertexAttribPointerEjijhii(HEAP32[i6 >> 2] | 0, i12, 2, 5126, 0, HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0, 16);
  __ZN7WebCore17GraphicsContext3D23enableVertexAttribArrayEj(HEAP32[i6 >> 2] | 0, i12);
  i15 = HEAP32[i7 >> 2] | 0;
 }
 i12 = HEAP32[i15 + 20 >> 2] | 0;
 if ((i12 | 0) != -1) {
  __ZN7WebCore17GraphicsContext3D19vertexAttribPointerEjijhii(HEAP32[i6 >> 2] | 0, i12, 2, 5126, 0, HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0, 24);
  __ZN7WebCore17GraphicsContext3D23enableVertexAttribArrayEj(HEAP32[i6 >> 2] | 0, i12);
 }
 if ((HEAP32[i1 + 48 >> 2] | 0) != 1) {
  __ZN7WebCore20CustomFilterRenderer21bindProgramParametersEv(i1);
  STACKTOP = i3;
  return;
 }
 i12 = HEAP32[(HEAP32[i7 >> 2] | 0) + 24 >> 2] | 0;
 if ((i12 | 0) == -1) {
  __ZN7WebCore20CustomFilterRenderer21bindProgramParametersEv(i1);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore17GraphicsContext3D19vertexAttribPointerEjijhii(HEAP32[i6 >> 2] | 0, i12, 3, 5126, 0, HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0, 32);
 __ZN7WebCore17GraphicsContext3D23enableVertexAttribArrayEj(HEAP32[i6 >> 2] | 0, i12);
 __ZN7WebCore20CustomFilterRenderer21bindProgramParametersEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20CustomFilterRenderer27bindProgramMatrixParametersEiPNS_26CustomFilterArrayParameterE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i3 + 24 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i5 + 12 | 0;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i8;
 i10 = i5 + 4 | 0;
 HEAP32[i10 >> 2] = 16;
 i11 = i5 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i3 + 16 | 0;
   i12 = 0;
   i13 = 0;
   i14 = i7;
   L3 : while (1) {
    if (i14 >>> 0 <= i12 >>> 0) {
     i15 = 4;
     break;
    }
    d16 = +HEAPF64[(HEAP32[i5 >> 2] | 0) + (i12 << 3) >> 3];
    if ((i13 | 0) == (HEAP32[i10 >> 2] | 0)) {
     i17 = i13 + 1 | 0;
     i18 = i17 + (i13 >>> 2) | 0;
     i19 = i18 >>> 0 > 16 >>> 0 ? i18 : 16;
     i18 = i19 >>> 0 > i17 >>> 0 ? i19 : i17;
     do {
      if (i13 >>> 0 < i18 >>> 0) {
       i17 = HEAP32[i9 >> 2] | 0;
       if (i18 >>> 0 > 16 >>> 0) {
        if (i18 >>> 0 > 1073741823 >>> 0) {
         i15 = 10;
         break L3;
        }
        i19 = __ZN3WTF18fastMallocGoodSizeEj(i18 << 2) | 0;
        HEAP32[i10 >> 2] = i19 >>> 2;
        i20 = __ZN3WTF10fastMallocEj(i19) | 0;
        HEAP32[i9 >> 2] = i20;
        i21 = i20;
       } else {
        HEAP32[i9 >> 2] = i8;
        HEAP32[i10 >> 2] = 16;
        i21 = i8;
       }
       i20 = i17;
       _memcpy(i21 | 0, i20 | 0, i13 << 2) | 0;
       if ((i8 | 0) == (i17 | 0) | (i17 | 0) == 0) {
        break;
       }
       if ((HEAP32[i9 >> 2] | 0) == (i17 | 0)) {
        HEAP32[i9 >> 2] = 0;
        HEAP32[i10 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i20);
      }
     } while (0);
     HEAPF32[(HEAP32[i9 >> 2] | 0) + (HEAP32[i11 >> 2] << 2) >> 2] = d16;
     i22 = HEAP32[i11 >> 2] | 0;
    } else {
     HEAPF32[(HEAP32[i9 >> 2] | 0) + (i13 << 2) >> 2] = d16;
     i22 = HEAP32[i11 >> 2] | 0;
    }
    i18 = i22 + 1 | 0;
    HEAP32[i11 >> 2] = i18;
    i20 = i12 + 1 | 0;
    if (i20 >>> 0 >= i7 >>> 0) {
     i15 = 20;
     break;
    }
    i12 = i20;
    i13 = i18;
    i14 = HEAP32[i6 >> 2] | 0;
   }
   if ((i15 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i15 | 0) == 10) {
    _WTFCrash();
   } else if ((i15 | 0) == 20) {
    if ((i7 | 0) == 4) {
     __ZN7WebCore17GraphicsContext3D16uniformMatrix2fvEiihPf(HEAP32[i1 + 4 >> 2] | 0, i2, 1, 0, HEAP32[i9 >> 2] | 0);
    } else if ((i7 | 0) == 9) {
     __ZN7WebCore17GraphicsContext3D16uniformMatrix3fvEiihPf(HEAP32[i1 + 4 >> 2] | 0, i2, 1, 0, HEAP32[i9 >> 2] | 0);
    } else if ((i7 | 0) == 16) {
     __ZN7WebCore17GraphicsContext3D16uniformMatrix4fvEiihPf(HEAP32[i1 + 4 >> 2] | 0, i2, 1, 0, HEAP32[i9 >> 2] | 0);
    }
    if ((HEAP32[i11 >> 2] | 0) == 0) {
     break;
    }
    HEAP32[i11 >> 2] = 0;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == (i11 | 0) | (i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CustomFilterRenderer26bindProgramArrayParametersEiPNS_26CustomFilterArrayParameterE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = i3 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 L1 : do {
  if ((i5 | 0) == 0) {
   i6 = 0;
  } else {
   i7 = i3 + 16 | 0;
   i8 = 0;
   i9 = 0;
   i10 = 0;
   i11 = 0;
   i12 = i5;
   L3 : while (1) {
    if (i12 >>> 0 <= i11 >>> 0) {
     i13 = 4;
     break;
    }
    d14 = +HEAPF64[(HEAP32[i7 >> 2] | 0) + (i11 << 3) >> 3];
    if ((i8 | 0) == (i9 | 0)) {
     i15 = i9 + 1 | 0;
     i16 = i15 + (i9 >>> 2) | 0;
     i17 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
     i16 = i17 >>> 0 > i15 >>> 0 ? i17 : i15;
     do {
      if (i9 >>> 0 < i16 >>> 0) {
       if (i16 >>> 0 > 1073741823 >>> 0) {
        i13 = 9;
        break L3;
       }
       i17 = __ZN3WTF18fastMallocGoodSizeEj(i16 << 2) | 0;
       i18 = i17 >>> 2;
       i19 = __ZN3WTF10fastMallocEj(i17) | 0;
       i17 = i19;
       i20 = i10;
       _memcpy(i19 | 0, i20 | 0, i9 << 2) | 0;
       if ((i10 | 0) == 0) {
        i21 = i17;
        i22 = i18;
        break;
       }
       i19 = (i17 | 0) == (i10 | 0);
       __ZN3WTF8fastFreeEPv(i20);
       i21 = i19 ? 0 : i17;
       i22 = i19 ? 0 : i18;
      } else {
       i21 = i10;
       i22 = i9;
      }
     } while (0);
     HEAPF32[i21 + (i9 << 2) >> 2] = d14;
     i23 = i21;
     i24 = i22;
     i25 = i15;
    } else {
     HEAPF32[i10 + (i8 << 2) >> 2] = d14;
     i23 = i10;
     i24 = i9;
     i25 = i8 + 1 | 0;
    }
    i16 = i11 + 1 | 0;
    if (i16 >>> 0 >= i5 >>> 0) {
     i6 = i23;
     break L1;
    }
    i8 = i25;
    i9 = i24;
    i10 = i23;
    i11 = i16;
    i12 = HEAP32[i4 >> 2] | 0;
   }
   if ((i13 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i13 | 0) == 9) {
    _WTFCrash();
   }
  }
 } while (0);
 __ZN7WebCore17GraphicsContext3D10uniform1fvEiiPf(HEAP32[i1 + 4 >> 2] | 0, i2, i5, i6);
 if ((i6 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZN7WebCore20CustomFilterRenderer21bindProgramParametersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 36 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = i1 + 28 | 0;
 i10 = i1 + 8 | 0;
 i11 = i1 + 4 | 0;
 i12 = 0;
 i13 = i8;
 while (1) {
  if (i13 >>> 0 <= i12 >>> 0) {
   i14 = 4;
   break;
  }
  i15 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i12 << 2) >> 2] | 0;
  i16 = __ZN7WebCore27CustomFilterCompiledProgram21uniformLocationByNameERKN3WTF6StringE(HEAP32[i10 >> 2] | 0, i15 + 8 | 0) | 0;
  L7 : do {
   if ((i16 | 0) != -1) {
    switch (HEAP32[i15 + 12 >> 2] | 0) {
    case 0:
     {
      __ZN7WebCore20CustomFilterRenderer26bindProgramArrayParametersEiPNS_26CustomFilterArrayParameterE(i1, i16, i15);
      break L7;
      break;
     }
    case 1:
     {
      __ZNK7WebCore5Color7getRGBAERfS1_S1_S1_(i15 + 16 | 0, i3, i4, i5, i6);
      __ZN7WebCore17GraphicsContext3D9uniform4fEiffff(HEAP32[i11 >> 2] | 0, i16, +HEAPF32[i3 >> 2], +HEAPF32[i4 >> 2], +HEAPF32[i5 >> 2], +HEAPF32[i6 >> 2]);
      break L7;
      break;
     }
    case 2:
     {
      __ZN7WebCore20CustomFilterRenderer27bindProgramMatrixParametersEiPNS_26CustomFilterArrayParameterE(i1, i16, i15);
      break L7;
      break;
     }
    case 4:
     {
      __ZN7WebCore20CustomFilterRenderer29bindProgramTransformParameterEiPNS_30CustomFilterTransformParameterE(i1, i16, i15);
      break L7;
      break;
     }
    case 3:
     {
      __ZN7WebCore20CustomFilterRenderer27bindProgramNumberParametersEiPNS_27CustomFilterNumberParameterE(i1, i16, i15);
      break L7;
      break;
     }
    default:
     {
      break L7;
     }
    }
   }
  } while (0);
  i15 = i12 + 1 | 0;
  if (i15 >>> 0 >= i8 >>> 0) {
   i14 = 16;
   break;
  }
  i12 = i15;
  i13 = HEAP32[i7 >> 2] | 0;
 }
 if ((i14 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i14 | 0) == 16) {
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore20CustomFilterRendererD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 28 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore16CustomFilterMeshD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore27CustomFilterCompiledProgramD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17GraphicsContext3DD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore20CustomFilterRendererD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 28 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore16CustomFilterMeshD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore27CustomFilterCompiledProgramD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17GraphicsContext3DD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore20CustomFilterRendererC2EN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS_23CustomFilterProgramTypeERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 HEAP32[i1 >> 2] = 1;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 i2 = i4 + 8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 i9 = i1 + 28 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 32 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i8;
 do {
  if ((i3 | 0) != 0) {
   if (i3 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i8 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
   HEAP32[i10 >> 2] = i8 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i8) | 0;
   i8 = i11;
   HEAP32[i9 >> 2] = i8;
   if ((i11 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i4 >> 2] | 0;
   i12 = HEAP32[i2 >> 2] | 0;
   i13 = i11 + (i12 << 2) | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i11;
    i15 = i8;
   }
   while (1) {
    i8 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 >> 2] = i8;
    if ((i8 | 0) != 0) {
     i11 = i8 + 4 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    }
    i11 = i14 + 4 | 0;
    if ((i11 | 0) == (i13 | 0)) {
     break;
    } else {
     i14 = i11;
     i15 = i15 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP32[i1 + 40 >> 2] = i5;
 HEAP32[i1 + 44 >> 2] = i6;
 HEAP32[i1 + 48 >> 2] = i7;
 return;
}
function __ZN7WebCore20CustomFilterRendererC1EN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS_23CustomFilterProgramTypeERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 HEAP32[i1 >> 2] = 1;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 i2 = i4 + 8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 i9 = i1 + 28 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 32 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i8;
 do {
  if ((i3 | 0) != 0) {
   if (i3 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i8 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
   HEAP32[i10 >> 2] = i8 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i8) | 0;
   i8 = i11;
   HEAP32[i9 >> 2] = i8;
   if ((i11 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i4 >> 2] | 0;
   i12 = HEAP32[i2 >> 2] | 0;
   i13 = i11 + (i12 << 2) | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i11;
    i15 = i8;
   }
   while (1) {
    i8 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 >> 2] = i8;
    if ((i8 | 0) != 0) {
     i11 = i8 + 4 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    }
    i11 = i14 + 4 | 0;
    if ((i11 | 0) == (i13 | 0)) {
     break;
    } else {
     i14 = i11;
     i15 = i15 + 4 | 0;
    }
   }
  }
 } while (0);
 HEAP32[i1 + 40 >> 2] = i5;
 HEAP32[i1 + 44 >> 2] = i6;
 HEAP32[i1 + 48 >> 2] = i7;
 return;
}
function __ZN7WebCore20CustomFilterRenderer29bindProgramTransformParameterEiPNS_30CustomFilterTransformParameterE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i5 = i4 | 0;
 i6 = i4 + 128 | 0;
 i7 = i4 + 136 | 0;
 HEAPF64[i5 >> 3] = +1;
 _memset(i5 + 8 | 0, 0, 32) | 0;
 HEAPF64[i5 + 40 >> 3] = +1;
 _memset(i5 + 48 | 0, 0, 32) | 0;
 HEAPF64[i5 + 80 >> 3] = +1;
 _memset(i5 + 88 | 0, 0, 32) | 0;
 HEAPF64[i5 + 120 >> 3] = +1;
 i8 = i1 + 20 | 0;
 i9 = i8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = i1 + 24 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN7WebCore20TransformationMatrix7scale3dEddd(i5, +1 / +(i10 | 0), +1 / +(i12 | 0), +1) | 0;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i6, i8);
   i12 = HEAP32[i3 + 24 >> 2] | 0;
   if ((i12 | 0) != 0) {
    i13 = i3 + 16 | 0;
    i14 = 0;
    while (1) {
     i15 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i14 << 2) >> 2] | 0;
     FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i15 >> 2] | 0) + 16 >> 2] & 1](i15, i5, i6) | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
   __ZN7WebCore20TransformationMatrix7scale3dEddd(i5, +(HEAP32[i9 >> 2] | 0), +(HEAP32[i11 >> 2] | 0), +1) | 0;
  }
 } while (0);
 __ZNK7WebCore20TransformationMatrix23toColumnMajorFloatArrayERA16_f(i5, i7);
 __ZN7WebCore17GraphicsContext3D16uniformMatrix4fvEiihPf(HEAP32[i1 + 4 >> 2] | 0, i2, 1, 0, i7 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CustomFilterRenderer6createEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS_23CustomFilterProgramTypeERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8 | 0;
 i10 = __ZN3WTF10fastMallocEj(52) | 0;
 i11 = i9 | 0;
 i12 = i2 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i11 >> 2] = i2;
 __ZN7WebCore20CustomFilterRendererC2EN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS_23CustomFilterProgramTypeERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE(i10, i9, i3, i4, i5, i6, i7);
 HEAP32[i1 >> 2] = i10;
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i11 = i10 | 0;
 i1 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore17GraphicsContext3DD1Ev(i10);
  __ZN3WTF8fastFreeEPv(i10);
  STACKTOP = i8;
  return;
 } else {
  HEAP32[i11 >> 2] = i1;
  STACKTOP = i8;
  return;
 }
}
function __ZN7WebCore20CustomFilterRenderer27bindProgramNumberParametersEiPNS_27CustomFilterNumberParameterE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i3 + 24 >> 2] | 0;
 if ((i4 | 0) == 2) {
  i5 = HEAP32[i3 + 16 >> 2] | 0;
  __ZN7WebCore17GraphicsContext3D9uniform2fEiff(HEAP32[i1 + 4 >> 2] | 0, i2, +HEAPF64[i5 >> 3], +HEAPF64[i5 + 8 >> 3]);
  return;
 } else if ((i4 | 0) == 3) {
  i5 = HEAP32[i3 + 16 >> 2] | 0;
  __ZN7WebCore17GraphicsContext3D9uniform3fEifff(HEAP32[i1 + 4 >> 2] | 0, i2, +HEAPF64[i5 >> 3], +HEAPF64[i5 + 8 >> 3], +HEAPF64[i5 + 16 >> 3]);
  return;
 } else if ((i4 | 0) == 1) {
  __ZN7WebCore17GraphicsContext3D9uniform1fEif(HEAP32[i1 + 4 >> 2] | 0, i2, +HEAPF64[HEAP32[i3 + 16 >> 2] >> 3]);
  return;
 } else if ((i4 | 0) == 4) {
  i4 = HEAP32[i3 + 16 >> 2] | 0;
  __ZN7WebCore17GraphicsContext3D9uniform4fEiffff(HEAP32[i1 + 4 >> 2] | 0, i2, +HEAPF64[i4 >> 3], +HEAPF64[i4 + 8 >> 3], +HEAPF64[i4 + 16 >> 3], +HEAPF64[i4 + 24 >> 3]);
  return;
 } else {
  return;
 }
}
function __ZN7WebCore20CustomFilterRenderer22initializeMeshIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 + 16 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = HEAP32[i1 + 44 >> 2] | 0;
 i7 = HEAP32[i1 + 40 >> 2] | 0;
 HEAPF32[i3 >> 2] = +0;
 HEAPF32[i3 + 4 >> 2] = +0;
 HEAPF32[i3 + 8 >> 2] = +1;
 HEAPF32[i3 + 12 >> 2] = +1;
 i8 = HEAP32[i1 + 48 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(44) | 0;
 __ZN7WebCore16CustomFilterMeshC1EPNS_17GraphicsContext3DEjjRKNS_9FloatRectENS_20CustomFilterMeshTypeE(i1, i5, i6, i7, i3, i8);
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i1;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i8 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore16CustomFilterMeshD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore20CustomFilterRenderer22unbindVertexAttributesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 12 >> 2] | 0;
 if ((i4 | 0) == -1) {
  i5 = i3;
 } else {
  __ZN7WebCore17GraphicsContext3D24disableVertexAttribArrayEj(HEAP32[i1 + 4 >> 2] | 0, i4);
  i5 = HEAP32[i2 >> 2] | 0;
 }
 i4 = HEAP32[i5 + 16 >> 2] | 0;
 if ((i4 | 0) == -1) {
  i6 = i5;
 } else {
  __ZN7WebCore17GraphicsContext3D24disableVertexAttribArrayEj(HEAP32[i1 + 4 >> 2] | 0, i4);
  i6 = HEAP32[i2 >> 2] | 0;
 }
 i4 = HEAP32[i6 + 20 >> 2] | 0;
 if ((i4 | 0) != -1) {
  __ZN7WebCore17GraphicsContext3D24disableVertexAttribArrayEj(HEAP32[i1 + 4 >> 2] | 0, i4);
 }
 if ((HEAP32[i1 + 48 >> 2] | 0) != 1) {
  return;
 }
 i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] | 0;
 if ((i4 | 0) == -1) {
  return;
 }
 __ZN7WebCore17GraphicsContext3D24disableVertexAttribArrayEj(HEAP32[i1 + 4 >> 2] | 0, i4);
 return;
}
function __ZN7WebCore20CustomFilterRenderer26bindProgramColorParametersEiPNS_26CustomFilterColorParameterE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 __ZNK7WebCore5Color7getRGBAERfS1_S1_S1_(i3 + 16 | 0, i5, i6, i7, i8);
 __ZN7WebCore17GraphicsContext3D9uniform4fEiffff(HEAP32[i1 + 4 >> 2] | 0, i2, +HEAPF32[i5 >> 2], +HEAPF32[i6 >> 2], +HEAPF32[i7 >> 2], +HEAPF32[i8 >> 2]);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CustomFilterRenderer4drawEjRKNS_7IntSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i3;
 i3 = i1 + 20 | 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = i5;
 __ZN7WebCore20CustomFilterRenderer21bindProgramAndBuffersEj(i1, i2);
 __ZN7WebCore17GraphicsContext3D12drawElementsEjiji(HEAP32[i1 + 4 >> 2] | 0, 4, HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 20 >> 2] | 0, 5123, 0);
 __ZN7WebCore20CustomFilterRenderer22unbindVertexAttributesEv(i1);
 return;
}
function __ZN7WebCore20CustomFilterRenderer18setCompiledProgramEN3WTF10PassRefPtrINS_27CustomFilterCompiledProgramEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore27CustomFilterCompiledProgramD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
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
function __ZN7WebCore20CustomFilterRenderer19bindVertexAttributeEijj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 if ((i2 | 0) == -1) {
  return;
 }
 i5 = i1 + 4 | 0;
 __ZN7WebCore17GraphicsContext3D19vertexAttribPointerEjijhii(HEAP32[i5 >> 2] | 0, i2, i3, 5126, 0, HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 12 >> 2] | 0, i4);
 __ZN7WebCore17GraphicsContext3D23enableVertexAttribArrayEj(HEAP32[i5 >> 2] | 0, i2);
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
function __ZN7WebCore20CustomFilterRenderer17prepareForDrawingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore17GraphicsContext3D18makeContextCurrentEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i2 + 56 | 0] & 1) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 __ZN7WebCore20CustomFilterRenderer22initializeMeshIfNeededEv(i1);
 i3 = 1;
 return i3 | 0;
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function __ZN7WebCore20CustomFilterRenderer21unbindVertexAttributeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == -1) {
  return;
 }
 __ZN7WebCore17GraphicsContext3D24disableVertexAttribArrayEj(HEAP32[i1 + 4 >> 2] | 0, i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore20CustomFilterRenderer24programNeedsInputTextureEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 44 >> 2] | 0) != -1 | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function b3(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(3);
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
function __ZNK7WebCore20CustomFilterRenderer18premultipliedAlphaEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 12 >> 2] | 0) == 1 | 0;
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
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore20CustomFilterRendererD2Ev,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viiiiiii = [b3,b3,__ZN7WebCore20CustomFilterRendererC2EN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS_23CustomFilterProgramTypeERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore20CustomFilterRenderer24programNeedsInputTextureEv","__ZN7WebCore20CustomFilterRenderer27bindProgramNumberParametersEiPNS_27CustomFilterNumberParameterE","__ZN7WebCore20CustomFilterRenderer4drawEjRKNS_7IntSizeE","__ZN7WebCore20CustomFilterRenderer19bindVertexAttributeEijj","_memset","__ZN7WebCore20CustomFilterRendererD2Ev","_memcpy","__ZN7WebCore20CustomFilterRenderer26bindProgramArrayParametersEiPNS_26CustomFilterArrayParameterE","__ZN7WebCore20CustomFilterRenderer22unbindVertexAttributesEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore20CustomFilterRenderer17prepareForDrawingEv","__ZN7WebCore20CustomFilterRenderer21bindProgramAndBuffersEj","__ZN7WebCore20CustomFilterRenderer18setCompiledProgramEN3WTF10PassRefPtrINS_27CustomFilterCompiledProgramEEE","__ZN7WebCore20CustomFilterRenderer22initializeMeshIfNeededEv","__ZN7WebCore20CustomFilterRenderer29bindProgramTransformParameterEiPNS_30CustomFilterTransformParameterE","__ZNK7WebCore20CustomFilterRenderer18premultipliedAlphaEv","__ZN7WebCore20CustomFilterRenderer26bindProgramColorParametersEiPNS_26CustomFilterColorParameterE","__ZN7WebCore20CustomFilterRenderer21unbindVertexAttributeEi","__ZN7WebCore20CustomFilterRendererC2EN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS_23CustomFilterProgramTypeERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE","__ZN7WebCore20CustomFilterRenderer21bindProgramParametersEv","__ZN7WebCore20CustomFilterRenderer6createEN3WTF10PassRefPtrINS_17GraphicsContext3DEEENS_23CustomFilterProgramTypeERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE","__ZN7WebCore20CustomFilterRenderer27bindProgramMatrixParametersEiPNS_26CustomFilterArrayParameterE"]

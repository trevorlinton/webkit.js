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
H_BASE = parentModule["_malloc"](136 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 136;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13DrawingBufferC1EPNS_17GraphicsContext3DERKNS_7IntSizeEbbNS0_21PreserveDrawingBufferENS0_16AlphaRequirementE;
var __ZN7WebCore13DrawingBufferD1Ev;
/* memory initializer */ allocate([71,76,95,79,69,83,95,112,97,99,107,101,100,95,100,101,112,116,104,95,115,116,101,110,99,105,108,0,0,0,0,0,71,76,95,79,69,83,95,114,103,98,56,95,114,103,98,97,56,0,0,0,0,0,0,0,71,76,95,65,78,71,76,69,95,102,114,97,109,101,98,117,102,102,101,114,95,109,117,108,116,105,115,97,109,112,108,101,0,0,0,0,0,0,0,0,71,76,95,65,78,71,76,69,95,102,114,97,109,101,98,117,102,102,101,114,95,98,108,105,116,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  try {
    Module["dynCall_viiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var invoke_viiiiiiiiiii=env.invoke_viiiiiiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13DrawingBuffer5resetERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 56 | 0;
 i9 = i1 + 28 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 __ZN7WebCore17GraphicsContext3D18makeContextCurrentEv(i10) | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore17GraphicsContext3D11getIntegervEjPi(HEAP32[i9 >> 2] | 0, 3379, i6);
 i10 = i2 + 4 | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) <= (i12 | 0)) {
   i6 = i2 | 0;
   if ((HEAP32[i6 >> 2] | 0) > (i12 | 0)) {
    break;
   }
   i13 = i1 + 32 | 0;
   i14 = i13 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i15 | 0) < 1) {
     i16 = 0;
    } else {
     i17 = HEAP32[i1 + 36 >> 2] | 0;
     if ((i17 | 0) < 1) {
      i16 = 0;
      break;
     }
     i16 = Math_imul(i17, i15) | 0;
    }
   } while (0);
   i15 = i2;
   i17 = HEAP32[i15 >> 2] | 0;
   i18 = HEAP32[i15 + 4 >> 2] | 0;
   __ZN7WebCore17GraphicsContext3D20getContextAttributesEv(i7, HEAP32[i9 >> 2] | 0);
   i15 = i1 + 36 | 0;
   if ((i17 | 0) == (HEAP32[i14 >> 2] | 0)) {
    if ((i18 | 0) != (HEAP32[i15 >> 2] | 0)) {
     i19 = 10;
    }
   } else {
    i19 = 10;
   }
   do {
    if ((i19 | 0) == 10) {
     i20 = (HEAP8[i7 | 0] & 1) == 0;
     i21 = i20 ? 6407 : 6408;
     i22 = i20 ? 32849 : 32856;
     i20 = i13;
     i23 = i1 + 44 | 0;
     i24 = i1 + 48 | 0;
     i25 = i1 + 56 | 0;
     i26 = i5 + 3 | 0;
     i27 = i1 + 40 | 0;
     i28 = i1 + 52 | 0;
     i29 = i4 + 3 | 0;
     i30 = i1 + 72 | 0;
     i31 = i1 + 76 | 0;
     i32 = i17;
     i33 = i18;
     while (1) {
      HEAP32[i20 >> 2] = i32;
      HEAP32[i20 + 4 >> 2] = i33;
      i34 = HEAP32[i9 >> 2] | 0;
      do {
       if ((i34 | 0) == 0) {
        i19 = 16;
       } else {
        __ZN7WebCore17GraphicsContext3D20getContextAttributesEv(i4, i34);
        if ((HEAP8[i29] & 1) == 0) {
         i19 = 16;
         break;
        }
        if ((HEAP8[i27] & 1) == 0) {
         i19 = 16;
         break;
        }
        HEAP32[i8 >> 2] = 0;
        __ZN7WebCore17GraphicsContext3D11getIntegervEjPi(HEAP32[i9 >> 2] | 0, 36183, i8);
        i35 = HEAP32[i8 >> 2] | 0;
        i36 = (i35 | 0) < 4 ? i35 : 4;
        __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i9 >> 2] | 0, 36160, HEAP32[i30 >> 2] | 0);
        __ZN7WebCore17GraphicsContext3D16bindRenderbufferEjj(HEAP32[i9 >> 2] | 0, 36161, HEAP32[i31 >> 2] | 0);
        i35 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(HEAP32[i9 >> 2] | 0) | 0;
        FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i35 >> 2] | 0) + 28 >> 2] & 1](i35, 36161, i36, i22, HEAP32[i14 >> 2] | 0, HEAP32[i15 >> 2] | 0);
        if ((__ZN7WebCore17GraphicsContext3D8getErrorEv(HEAP32[i9 >> 2] | 0) | 0) == 1285) {
         break;
        }
        __ZN7WebCore17GraphicsContext3D23framebufferRenderbufferEjjjj(HEAP32[i9 >> 2] | 0, 36160, 36064, 36161, HEAP32[i31 >> 2] | 0);
        __ZN7WebCore13DrawingBuffer18resizeDepthStencilEi(i1, i36);
        if ((__ZN7WebCore17GraphicsContext3D22checkFramebufferStatusEj(HEAP32[i9 >> 2] | 0, 36160) | 0) == 36053) {
         i19 = 16;
        }
       }
      } while (0);
      if ((i19 | 0) == 16) {
       i19 = 0;
       __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i9 >> 2] | 0, 36160, HEAP32[i23 >> 2] | 0);
       __ZN7WebCore17GraphicsContext3D11bindTextureEjj(HEAP32[i9 >> 2] | 0, 3553, HEAP32[i24 >> 2] | 0);
       __ZN7WebCore17GraphicsContext3D10texImage2DEjijiiijjPKv(HEAP32[i9 >> 2] | 0, 3553, 0, i21, HEAP32[i14 >> 2] | 0, HEAP32[i15 >> 2] | 0, 0, i21, 5121, 0) | 0;
       __ZN7WebCore17GraphicsContext3D20framebufferTexture2DEjjjji(HEAP32[i9 >> 2] | 0, 36160, 36064, 3553, HEAP32[i24 >> 2] | 0, 0);
       if ((HEAP8[i25] & 1) != 0) {
        __ZN7WebCore17GraphicsContext3D11bindTextureEjj(HEAP32[i9 >> 2] | 0, 3553, HEAP32[i28 >> 2] | 0);
        __ZN7WebCore17GraphicsContext3D10texImage2DEjijiiijjPKv(HEAP32[i9 >> 2] | 0, 3553, 0, i21, HEAP32[i14 >> 2] | 0, HEAP32[i15 >> 2] | 0, 0, i21, 5121, 0) | 0;
       }
       __ZN7WebCore17GraphicsContext3D11bindTextureEjj(HEAP32[i9 >> 2] | 0, 3553, 0);
       i34 = HEAP32[i9 >> 2] | 0;
       do {
        if ((i34 | 0) == 0) {
         i19 = 21;
        } else {
         __ZN7WebCore17GraphicsContext3D20getContextAttributesEv(i5, i34);
         if ((HEAP8[i26] & 1) == 0) {
          i19 = 21;
          break;
         }
         if ((HEAP8[i27] & 1) == 0) {
          i19 = 21;
         }
        }
       } while (0);
       if ((i19 | 0) == 21) {
        i19 = 0;
        __ZN7WebCore13DrawingBuffer18resizeDepthStencilEi(i1, 0);
       }
       if ((__ZN7WebCore17GraphicsContext3D22checkFramebufferStatusEj(HEAP32[i9 >> 2] | 0, 36160) | 0) == 36053) {
        i37 = i32;
        i38 = i33;
        break;
       }
      }
      i34 = ~~(+(i32 | 0) * +.5);
      i36 = ~~(+(i33 | 0) * +.5);
      if ((i34 | 0) < 1 | (i36 | 0) < 1) {
       i37 = i34;
       i38 = i36;
       break;
      } else {
       i32 = i34;
       i33 = i36;
      }
     }
     i33 = (Math_imul(HEAP32[i15 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0) - i16 | 0;
     HEAP32[H_BASE + 136 >> 2] = i33 + (HEAP32[H_BASE + 136 >> 2] | 0);
     if ((HEAP32[i6 >> 2] | 0) < 1) {
      break;
     }
     if ((HEAP32[i10 >> 2] | 0) < 1) {
      break;
     }
     if (!((i37 | 0) < 1 | (i38 | 0) < 1)) {
      break;
     }
     __ZN7WebCore13DrawingBuffer5clearEv(i1);
     i11 = 0;
     STACKTOP = i3;
     return i11 | 0;
    }
   } while (0);
   __ZN7WebCore17GraphicsContext3D7disableEj(HEAP32[i9 >> 2] | 0, 3089);
   __ZN7WebCore17GraphicsContext3D10clearColorEffff(HEAP32[i9 >> 2] | 0, +0, +0, +0, +0);
   __ZN7WebCore17GraphicsContext3D9colorMaskEhhhh(HEAP32[i9 >> 2] | 0, 1, 1, 1, 1);
   if ((HEAP8[i7 + 1 | 0] & 1) == 0) {
    i39 = 16384;
   } else {
    __ZN7WebCore17GraphicsContext3D10clearDepthEf(HEAP32[i9 >> 2] | 0, +1);
    __ZN7WebCore17GraphicsContext3D9depthMaskEh(HEAP32[i9 >> 2] | 0, 1);
    i39 = 16640;
   }
   if ((HEAP8[i7 + 2 | 0] & 1) == 0) {
    i40 = i39;
   } else {
    __ZN7WebCore17GraphicsContext3D12clearStencilEi(HEAP32[i9 >> 2] | 0, 0);
    __ZN7WebCore17GraphicsContext3D19stencilMaskSeparateEjj(HEAP32[i9 >> 2] | 0, 1028, -1);
    i40 = i39 | 1024;
   }
   __ZN7WebCore13DrawingBuffer17clearFramebuffersEj(i1, i40);
   i11 = 1;
   STACKTOP = i3;
   return i11 | 0;
  }
 } while (0);
 __ZN7WebCore13DrawingBuffer5clearEv(i1);
 i11 = 0;
 STACKTOP = i3;
 return i11 | 0;
}
function __ZN7WebCore13DrawingBuffer6createEPNS_17GraphicsContext3DERKNS_7IntSizeENS0_21PreserveDrawingBufferENS0_16AlphaRequirementE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(i2) | 0;
 i16 = i15;
 L1 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 100 >> 2] & 1](i15) | 0) {
   i17 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 104 | 0);
   do {
    if (FUNCTION_TABLE_iii[i17 & 1](i15, i7) | 0) {
     i18 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i8, H_BASE + 64 | 0);
     do {
      if (FUNCTION_TABLE_iii[i18 & 1](i15, i8) | 0) {
       i19 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
       __ZN3WTF6StringC1EPKc(i9, H_BASE + 40 | 0);
       i20 = FUNCTION_TABLE_iii[i19 & 1](i15, i9) | 0;
       i19 = HEAP32[i9 >> 2] | 0;
       if ((i19 | 0) == 0) {
        i21 = i20;
        break;
       }
       i22 = i19 | 0;
       i23 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i23 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i19);
        i21 = i20;
        break;
       } else {
        HEAP32[i22 >> 2] = i23;
        i21 = i20;
        break;
       }
      } else {
       i21 = 0;
      }
     } while (0);
     i18 = HEAP32[i8 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i24 = i21;
      break;
     }
     i20 = i18 | 0;
     i23 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      i24 = i21;
      break;
     } else {
      HEAP32[i20 >> 2] = i23;
      i24 = i21;
      break;
     }
    } else {
     i24 = 0;
    }
   } while (0);
   i17 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     if (!i24) {
      i25 = 0;
      break L1;
     }
    } else {
     i23 = i17 | 0;
     i20 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      if (i24) {
       break;
      } else {
       i25 = 0;
       break L1;
      }
     } else {
      HEAP32[i23 >> 2] = i20;
      if (i24) {
       break;
      } else {
       i25 = 0;
       break L1;
      }
     }
    }
   } while (0);
   i17 = i15;
   i20 = HEAP32[(HEAP32[i17 >> 2] | 0) + 12 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 104 | 0);
   FUNCTION_TABLE_vii[i20 & 1](i15, i10);
   i20 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i23 = i20 | 0;
     i18 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i23 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[(HEAP32[i17 >> 2] | 0) + 12 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i11, H_BASE + 64 | 0);
   FUNCTION_TABLE_vii[i20 & 1](i15, i11);
   i20 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i18 = i20 | 0;
     i23 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i18 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[(HEAP32[i17 >> 2] | 0) + 12 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i12, H_BASE + 40 | 0);
   FUNCTION_TABLE_vii[i20 & 1](i15, i12);
   i20 = HEAP32[i12 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i25 = 1;
    break;
   }
   i23 = i20 | 0;
   i18 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    i25 = 1;
    break;
   } else {
    HEAP32[i23 >> 2] = i18;
    i25 = 1;
    break;
   }
  } else {
   i25 = 0;
  }
 } while (0);
 i12 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i13, H_BASE + 8 | 0);
 i16 = FUNCTION_TABLE_iii[i12 & 1](i15, i13) | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i13 = i12 | 0;
   i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i13 >> 2] = i11;
    break;
   }
  }
 } while (0);
 do {
  if (i16) {
   i12 = HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i14, H_BASE + 8 | 0);
   FUNCTION_TABLE_vii[i12 & 1](i15, i14);
   i12 = HEAP32[i14 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i11 = i12 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i11 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i14 = __ZN3WTF10fastMallocEj(84) | 0;
 i15 = i14;
 __ZN7WebCore13DrawingBufferC2EPNS_17GraphicsContext3DERKNS_7IntSizeEbbNS0_21PreserveDrawingBufferENS0_16AlphaRequirementE(i15, i2, i3, i25, i16, i4, i5);
 i5 = i14 + 28 | 0;
 i4 = i1 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = i15;
  STACKTOP = i6;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i4 = i14;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore13DrawingBuffer5clearEv(i15);
 i15 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i5 = i15 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    __ZN7WebCore17GraphicsContext3DD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore13DrawingBuffer18resizeDepthStencilEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i1 + 28 | 0;
 __ZN7WebCore17GraphicsContext3D20getContextAttributesEv(i7, HEAP32[i8 >> 2] | 0);
 i9 = (HEAP8[i7 + 1 | 0] & 1) == 0;
 L1 : do {
  if (!i9) {
   do {
    if ((HEAP8[i7 + 2 | 0] & 1) != 0) {
     if ((HEAP8[i1 + 41 | 0] & 1) == 0) {
      if (i9) {
       break L1;
      } else {
       break;
      }
     }
     i10 = i1 + 60 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i12 = __ZN7WebCore17GraphicsContext3D18createRenderbufferEv(HEAP32[i8 >> 2] | 0) | 0;
      HEAP32[i10 >> 2] = i12;
      i13 = i12;
     } else {
      i13 = i11;
     }
     __ZN7WebCore17GraphicsContext3D16bindRenderbufferEjj(HEAP32[i8 >> 2] | 0, 36161, i13);
     i11 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i11 | 0) == 0) {
       i14 = 0;
       i15 = 11;
      } else {
       __ZN7WebCore17GraphicsContext3D20getContextAttributesEv(i6, i11);
       if ((HEAP8[i6 + 3 | 0] & 1) == 0) {
        i14 = HEAP32[i8 >> 2] | 0;
        i15 = 11;
        break;
       }
       i12 = HEAP32[i8 >> 2] | 0;
       if ((HEAP8[i1 + 40 | 0] & 1) == 0) {
        i14 = i12;
        i15 = 11;
        break;
       }
       i16 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(i12) | 0;
       FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 28 >> 2] & 1](i16, 36161, i2, 35056, HEAP32[i1 + 32 >> 2] | 0, HEAP32[i1 + 36 >> 2] | 0);
      }
     } while (0);
     if ((i15 | 0) == 11) {
      __ZN7WebCore17GraphicsContext3D19renderbufferStorageEjjii(i14, 36161, 35056, HEAP32[i1 + 32 >> 2] | 0, HEAP32[i1 + 36 >> 2] | 0);
     }
     __ZN7WebCore17GraphicsContext3D23framebufferRenderbufferEjjjj(HEAP32[i8 >> 2] | 0, 36160, 36128, 36161, HEAP32[i10 >> 2] | 0);
     __ZN7WebCore17GraphicsContext3D23framebufferRenderbufferEjjjj(HEAP32[i8 >> 2] | 0, 36160, 36096, 36161, HEAP32[i10 >> 2] | 0);
     i17 = HEAP32[i8 >> 2] | 0;
     __ZN7WebCore17GraphicsContext3D16bindRenderbufferEjj(i17, 36161, 0);
     STACKTOP = i3;
     return;
    }
   } while (0);
   i11 = i1 + 64 | 0;
   i16 = HEAP32[i11 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i12 = __ZN7WebCore17GraphicsContext3D18createRenderbufferEv(HEAP32[i8 >> 2] | 0) | 0;
    HEAP32[i11 >> 2] = i12;
    i18 = i12;
   } else {
    i18 = i16;
   }
   __ZN7WebCore17GraphicsContext3D16bindRenderbufferEjj(HEAP32[i8 >> 2] | 0, 36161, i18);
   i16 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i16 | 0) == 0) {
     i19 = 0;
     i15 = 21;
    } else {
     __ZN7WebCore17GraphicsContext3D20getContextAttributesEv(i4, i16);
     if ((HEAP8[i4 + 3 | 0] & 1) == 0) {
      i19 = HEAP32[i8 >> 2] | 0;
      i15 = 21;
      break;
     }
     i12 = HEAP32[i8 >> 2] | 0;
     if ((HEAP8[i1 + 40 | 0] & 1) == 0) {
      i19 = i12;
      i15 = 21;
      break;
     }
     i20 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(i12) | 0;
     FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i20 >> 2] | 0) + 28 >> 2] & 1](i20, 36161, i2, 33189, HEAP32[i1 + 32 >> 2] | 0, HEAP32[i1 + 36 >> 2] | 0);
    }
   } while (0);
   if ((i15 | 0) == 21) {
    __ZN7WebCore17GraphicsContext3D19renderbufferStorageEjjii(i19, 36161, 33189, HEAP32[i1 + 32 >> 2] | 0, HEAP32[i1 + 36 >> 2] | 0);
   }
   __ZN7WebCore17GraphicsContext3D23framebufferRenderbufferEjjjj(HEAP32[i8 >> 2] | 0, 36160, 36096, 36161, HEAP32[i11 >> 2] | 0);
  }
 } while (0);
 if ((HEAP8[i7 + 2 | 0] & 1) == 0) {
  i17 = HEAP32[i8 >> 2] | 0;
  __ZN7WebCore17GraphicsContext3D16bindRenderbufferEjj(i17, 36161, 0);
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 68 | 0;
 i19 = HEAP32[i7 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i4 = __ZN7WebCore17GraphicsContext3D18createRenderbufferEv(HEAP32[i8 >> 2] | 0) | 0;
  HEAP32[i7 >> 2] = i4;
  i21 = i4;
 } else {
  i21 = i19;
 }
 __ZN7WebCore17GraphicsContext3D16bindRenderbufferEjj(HEAP32[i8 >> 2] | 0, 36161, i21);
 i21 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i21 | 0) == 0) {
   i22 = 0;
   i15 = 31;
  } else {
   __ZN7WebCore17GraphicsContext3D20getContextAttributesEv(i5, i21);
   if ((HEAP8[i5 + 3 | 0] & 1) == 0) {
    i22 = HEAP32[i8 >> 2] | 0;
    i15 = 31;
    break;
   }
   i19 = HEAP32[i8 >> 2] | 0;
   if ((HEAP8[i1 + 40 | 0] & 1) == 0) {
    i22 = i19;
    i15 = 31;
    break;
   }
   i4 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(i19) | 0;
   FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 28 >> 2] & 1](i4, 36161, i2, 36168, HEAP32[i1 + 32 >> 2] | 0, HEAP32[i1 + 36 >> 2] | 0);
  }
 } while (0);
 if ((i15 | 0) == 31) {
  __ZN7WebCore17GraphicsContext3D19renderbufferStorageEjjii(i22, 36161, 36168, HEAP32[i1 + 32 >> 2] | 0, HEAP32[i1 + 36 >> 2] | 0);
 }
 __ZN7WebCore17GraphicsContext3D23framebufferRenderbufferEjjjj(HEAP32[i8 >> 2] | 0, 36160, 36128, 36161, HEAP32[i7 >> 2] | 0);
 i17 = HEAP32[i8 >> 2] | 0;
 __ZN7WebCore17GraphicsContext3D16bindRenderbufferEjj(i17, 36161, 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13DrawingBufferC2EPNS_17GraphicsContext3DERKNS_7IntSizeEbbNS0_21PreserveDrawingBufferENS0_16AlphaRequirementE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP8[i1 + 12 | 0] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 33984;
 i7 = i1 + 28 | 0;
 HEAP32[i7 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i6 = i2 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 32 >> 2] = -1;
 HEAP32[i1 + 36 >> 2] = -1;
 i6 = i1 + 40 | 0;
 HEAP8[i6] = i4 & 1;
 HEAP8[i1 + 41 | 0] = i5 & 1;
 i5 = __ZN7WebCore17GraphicsContext3D17createFramebufferEv(i2) | 0;
 HEAP32[i1 + 44 >> 2] = i5;
 i4 = i1 + 48 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP8[i1 + 56 | 0] = 0;
 i10 = i1 + 72 | 0;
 i11 = i1 + 76 | 0;
 _memset(i1 + 60 | 0, 0, 20) | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore13DrawingBuffer5clearEv(i1);
  STACKTOP = i8;
  return;
 }
 i5 = __ZN7WebCore17GraphicsContext3D13createTextureEv(i2) | 0;
 HEAP32[i4 >> 2] = i5;
 __ZN7WebCore17GraphicsContext3D11bindTextureEjj(i2, 3553, i5);
 __ZN7WebCore17GraphicsContext3D13texParameterfEjjf(i2, 3553, 10240, +9729);
 __ZN7WebCore17GraphicsContext3D13texParameterfEjjf(i2, 3553, 10241, +9729);
 __ZN7WebCore17GraphicsContext3D13texParameteriEjji(i2, 3553, 10242, 33071);
 __ZN7WebCore17GraphicsContext3D13texParameteriEjji(i2, 3553, 10243, 33071);
 __ZN7WebCore17GraphicsContext3D11bindTextureEjj(i2, 3553, 0);
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   __ZN7WebCore17GraphicsContext3D20getContextAttributesEv(i9, i2);
   if ((HEAP8[i9 + 3 | 0] & 1) == 0) {
    break;
   }
   if ((HEAP8[i6] & 1) == 0) {
    break;
   }
   i5 = __ZN7WebCore17GraphicsContext3D17createFramebufferEv(HEAP32[i7 >> 2] | 0) | 0;
   HEAP32[i10 >> 2] = i5;
   __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i7 >> 2] | 0, 36160, i5);
   HEAP32[i11 >> 2] = __ZN7WebCore17GraphicsContext3D18createRenderbufferEv(HEAP32[i7 >> 2] | 0) | 0;
  }
 } while (0);
 __ZN7WebCore13DrawingBuffer5resetERKNS_7IntSizeE(i1, i3) | 0;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore13DrawingBufferC1EPNS_17GraphicsContext3DERKNS_7IntSizeEbbNS0_21PreserveDrawingBufferENS0_16AlphaRequirementE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP8[i1 + 12 | 0] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 33984;
 i7 = i1 + 28 | 0;
 HEAP32[i7 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i6 = i2 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 32 >> 2] = -1;
 HEAP32[i1 + 36 >> 2] = -1;
 i6 = i1 + 40 | 0;
 HEAP8[i6] = i4 & 1;
 HEAP8[i1 + 41 | 0] = i5 & 1;
 i5 = __ZN7WebCore17GraphicsContext3D17createFramebufferEv(i2) | 0;
 HEAP32[i1 + 44 >> 2] = i5;
 i4 = i1 + 48 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP8[i1 + 56 | 0] = 0;
 i10 = i1 + 72 | 0;
 i11 = i1 + 76 | 0;
 _memset(i1 + 60 | 0, 0, 20) | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore13DrawingBuffer5clearEv(i1);
  STACKTOP = i8;
  return;
 }
 i5 = __ZN7WebCore17GraphicsContext3D13createTextureEv(i2) | 0;
 HEAP32[i4 >> 2] = i5;
 __ZN7WebCore17GraphicsContext3D11bindTextureEjj(i2, 3553, i5);
 __ZN7WebCore17GraphicsContext3D13texParameterfEjjf(i2, 3553, 10240, +9729);
 __ZN7WebCore17GraphicsContext3D13texParameterfEjjf(i2, 3553, 10241, +9729);
 __ZN7WebCore17GraphicsContext3D13texParameteriEjji(i2, 3553, 10242, 33071);
 __ZN7WebCore17GraphicsContext3D13texParameteriEjji(i2, 3553, 10243, 33071);
 __ZN7WebCore17GraphicsContext3D11bindTextureEjj(i2, 3553, 0);
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   __ZN7WebCore17GraphicsContext3D20getContextAttributesEv(i9, i2);
   if ((HEAP8[i9 + 3 | 0] & 1) == 0) {
    break;
   }
   if ((HEAP8[i6] & 1) == 0) {
    break;
   }
   i5 = __ZN7WebCore17GraphicsContext3D17createFramebufferEv(HEAP32[i7 >> 2] | 0) | 0;
   HEAP32[i10 >> 2] = i5;
   __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i7 >> 2] | 0, 36160, i5);
   HEAP32[i11 >> 2] = __ZN7WebCore17GraphicsContext3D18createRenderbufferEv(HEAP32[i7 >> 2] | 0) | 0;
  }
 } while (0);
 __ZN7WebCore13DrawingBuffer5resetERKNS_7IntSizeE(i1, i3) | 0;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore13DrawingBuffer5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore17GraphicsContext3D18makeContextCurrentEv(i3) | 0;
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) >= 1) {
   i5 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i5 | 0) < 1) {
    break;
   }
   i6 = Math_imul(i5, i4) | 0;
   HEAP32[H_BASE + 136 >> 2] = (HEAP32[H_BASE + 136 >> 2] | 0) - i6;
   i6 = i3;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
  }
 } while (0);
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D13deleteTextureEj(HEAP32[i2 >> 2] | 0, i4);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 52 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D13deleteTextureEj(HEAP32[i2 >> 2] | 0, i4);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 76 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i2 >> 2] | 0, i4);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 60 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i2 >> 2] | 0, i4);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 64 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i2 >> 2] | 0, i4);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 68 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D18deleteRenderbufferEj(HEAP32[i2 >> 2] | 0, i4);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 72 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore17GraphicsContext3D17deleteFramebufferEj(HEAP32[i2 >> 2] | 0, i4);
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 44 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore17GraphicsContext3D17deleteFramebufferEj(HEAP32[i2 >> 2] | 0, i1);
 HEAP32[i3 >> 2] = 0;
 return;
}
function __ZN7WebCore13DrawingBuffer6commitEllll(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = i1 + 28 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 if ((i4 | 0) < 0) {
  i8 = HEAP32[i1 + 32 >> 2] | 0;
 } else {
  i8 = i4;
 }
 if ((i5 | 0) < 0) {
  i9 = HEAP32[i1 + 36 >> 2] | 0;
 } else {
  i9 = i5;
 }
 __ZN7WebCore17GraphicsContext3D18makeContextCurrentEv(i7) | 0;
 i7 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i10 = i1 + 44 | 0;
  } else {
   __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i6 >> 2] | 0, 36008, i7);
   i5 = i1 + 44 | 0;
   __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i6 >> 2] | 0, 36009, HEAP32[i5 >> 2] | 0);
   i4 = i1 + 12 | 0;
   if ((HEAP8[i4] & 1) != 0) {
    __ZN7WebCore17GraphicsContext3D7disableEj(HEAP32[i6 >> 2] | 0, 3089);
   }
   i11 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(HEAP32[i6 >> 2] | 0) | 0;
   FUNCTION_TABLE_viiiiiiiiiii[HEAP32[(HEAP32[i11 >> 2] | 0) + 24 >> 2] & 1](i11, i2, i3, i8, i9, i2, i3, i8, i9, 16384, 9728);
   if ((HEAP8[i4] & 1) == 0) {
    i10 = i5;
    break;
   }
   __ZN7WebCore17GraphicsContext3D6enableEj(HEAP32[i6 >> 2] | 0, 3089);
   i10 = i5;
  }
 } while (0);
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i6 >> 2] | 0, 36160, HEAP32[i10 >> 2] | 0);
 return;
}
function __ZN7WebCore13DrawingBuffer20checkBufferIntegrityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = i1 + 72 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = 1;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = i1 + 12 | 0;
 i8 = i1 + 28 | 0;
 if ((HEAP8[i7] & 1) != 0) {
  __ZN7WebCore17GraphicsContext3D7disableEj(HEAP32[i8 >> 2] | 0, 3089);
 }
 __ZN7WebCore17GraphicsContext3D9colorMaskEhhhh(HEAP32[i8 >> 2] | 0, 1, 1, 1, 1);
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i8 >> 2] | 0, 36160, HEAP32[i5 >> 2] | 0);
 __ZN7WebCore17GraphicsContext3D10clearColorEffff(HEAP32[i8 >> 2] | 0, +1, +0, +1, +1);
 __ZN7WebCore17GraphicsContext3D5clearEj(HEAP32[i8 >> 2] | 0, 16384);
 __ZN7WebCore13DrawingBuffer6commitEllll(i1, 0, 0, 1, 1);
 i1 = i3;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore17GraphicsContext3D10readPixelsEiiiijjPv(HEAP32[i8 >> 2] | 0, 0, 0, 1, 1, 6408, 5121, i1);
 if ((HEAP8[i7] & 1) != 0) {
  __ZN7WebCore17GraphicsContext3D6enableEj(HEAP32[i8 >> 2] | 0, 3089);
 }
 if ((HEAP8[i1] | 0) != -1) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP8[i4 + 1 | 0] | 0) != 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP8[i4 + 2 | 0] | 0) != -1) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i6 = (HEAP8[i4 + 3 | 0] | 0) == -1;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore13DrawingBuffer22createSecondaryBuffersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 + 28 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore17GraphicsContext3D20getContextAttributesEv(i3, i5);
 if ((HEAP8[i3 + 3 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i1 + 40 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = __ZN7WebCore17GraphicsContext3D17createFramebufferEv(HEAP32[i4 >> 2] | 0) | 0;
 HEAP32[i1 + 72 >> 2] = i3;
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i4 >> 2] | 0, 36160, i3);
 HEAP32[i1 + 76 >> 2] = __ZN7WebCore17GraphicsContext3D18createRenderbufferEv(HEAP32[i4 >> 2] | 0) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13DrawingBuffer17clearFramebuffersEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 28 | 0;
 i4 = i1 + 72 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i1 + 44 >> 2] | 0;
 } else {
  i6 = i5;
 }
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i3 >> 2] | 0, 36160, i6);
 __ZN7WebCore17GraphicsContext3D5clearEj(HEAP32[i3 >> 2] | 0, i2);
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i3 >> 2] | 0, 36160, HEAP32[i1 + 44 >> 2] | 0);
 __ZN7WebCore17GraphicsContext3D5clearEj(HEAP32[i3 >> 2] | 0, 16384);
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(HEAP32[i3 >> 2] | 0, 36160, HEAP32[i4 >> 2] | 0);
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
function __ZNK7WebCore13DrawingBuffer11multisampleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN7WebCore17GraphicsContext3D20getContextAttributesEv(i3, i4);
 if ((HEAP8[i3 + 3 | 0] & 1) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i5 = (HEAP8[i1 + 40 | 0] & 1) != 0;
 STACKTOP = i2;
 return i5 | 0;
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
function __ZN7WebCore13DrawingBufferD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore13DrawingBuffer5clearEv(i1);
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore17GraphicsContext3DD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore13DrawingBufferD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore13DrawingBuffer5clearEv(i1);
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore17GraphicsContext3DD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
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
function __ZN7WebCore13DrawingBuffer4bindEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 44 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(i2, 36160, i4);
 return;
}
function __ZN7WebCore13DrawingBuffer25restoreFramebufferBindingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(i2, 36160, i3);
 return;
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
function b3(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 abort(3);
}
function __ZN7WebCore13DrawingBuffer16discardResourcesEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 _memset(i1 + 60 | 0, 0, 20) | 0;
 return;
}
function b7(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(7);
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
function b5(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(5);
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
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
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
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
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore13DrawingBufferD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viiiiiiiiiii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_viiiiii = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiiiiii = [b7,b7,__ZN7WebCore13DrawingBufferC2EPNS_17GraphicsContext3DERKNS_7IntSizeEbbNS0_21PreserveDrawingBufferENS0_16AlphaRequirementE,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viiiiiiiiiii: dynCall_viiiiiiiiiii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiiiiii: dynCall_viiiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiiiiii": invoke_viiiiiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = asm["dynCall_viiiiiiiiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_memset","_strlen","__ZN7WebCore13DrawingBuffer22createSecondaryBuffersEv","__ZN7WebCore13DrawingBufferD2Ev","__ZN7WebCore13DrawingBufferC2EPNS_17GraphicsContext3DERKNS_7IntSizeEbbNS0_21PreserveDrawingBufferENS0_16AlphaRequirementE","__ZN7WebCore13DrawingBuffer6createEPNS_17GraphicsContext3DERKNS_7IntSizeENS0_21PreserveDrawingBufferENS0_16AlphaRequirementE","__ZN7WebCore13DrawingBuffer5clearEv","__ZN7WebCore13DrawingBuffer5resetERKNS_7IntSizeE","__ZN7WebCore13DrawingBuffer6commitEllll","__ZN7WebCore13DrawingBuffer20checkBufferIntegrityEv","__ZN7WebCore13DrawingBuffer17clearFramebuffersEj","_memcpy","__ZNK7WebCore13DrawingBuffer11multisampleEv","__ZN7WebCore13DrawingBuffer4bindEv","__ZN7WebCore13DrawingBuffer18resizeDepthStencilEi","__ZN7WebCore13DrawingBuffer16discardResourcesEv","__ZN7WebCore13DrawingBuffer25restoreFramebufferBindingEv"]

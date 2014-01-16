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
H_BASE = parentModule["_malloc"](328 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 328;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14EXTDrawBuffersC1EPNS_21WebGLRenderingContextE;
var __ZN7WebCore14EXTDrawBuffersD1Ev;
/* memory initializer */ allocate([71,76,95,69,88,84,95,112,97,99,107,101,100,95,100,101,112,116,104,95,115,116,101,110,99,105,108,0,0,0,0,0,71,76,95,65,82,66,95,100,101,112,116,104,95,116,101,120,116,117,114,101,0,0,0,0,71,76,95,79,69,83,95,100,101,112,116,104,95,116,101,120,116,117,114,101,0,0,0,0,71,76,95,67,72,82,79,77,73,85,77,95,100,101,112,116,104,95,116,101,120,116,117,114,101,0,0,0,0,0,0,0,67,79,76,79,82,95,65,84,84,65,67,72,77,69,78,84,105,95,69,88,84,32,111,114,32,78,79,78,69,0,0,0,109,111,114,101,32,116,104,97,110,32,109,97,120,32,100,114,97,119,32,98,117,102,102,101,114,115,0,0,0,0,0,0,66,65,67,75,32,111,114,32,78,79,78,69,0,0,0,0,109,111,114,101,32,116,104,97,110,32,111,110,101,32,98,117,102,102,101,114,0,0,0,0,71,76,95,79,69,83,95,112,97,99,107,101,100,95,100,101,112,116,104,95,115,116,101,110,99,105,108,0,0,0,0,0,100,114,97,119,66,117,102,102,101,114,115,69,88,84,0,0,71,76,95,69,88,84,95,100,114,97,119,95,98,117,102,102,101,114,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore14EXTDrawBuffersE=(H_BASE+296)|0;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14EXTDrawBuffers26satisfiesWebGLRequirementsEPNS_21WebGLRenderingContextE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = HEAP32[i1 + 44 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore17GraphicsContext3D11getIntegervEjPi(i11, 34852, i3);
 __ZN7WebCore17GraphicsContext3D11getIntegervEjPi(i11, 36063, i4);
 if ((HEAP32[i3 >> 2] | 0) < 4) {
  i12 = 0;
  STACKTOP = i2;
  return i12 | 0;
 }
 if ((HEAP32[i4 >> 2] | 0) < 4) {
  i12 = 0;
  STACKTOP = i2;
  return i12 | 0;
 }
 i13 = __ZN7WebCore17GraphicsContext3D17createFramebufferEv(i11) | 0;
 __ZN7WebCore17GraphicsContext3D15bindFramebufferEjj(i11, 36160, i13);
 i14 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(i11) | 0;
 i15 = HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 88 | 0);
 do {
  if (FUNCTION_TABLE_iii[i15 & 1](i14, i5) | 0) {
   i16 = 1;
  } else {
   i17 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(i11) | 0;
   i18 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 64 | 0);
   do {
    if (FUNCTION_TABLE_iii[i18 & 1](i17, i6) | 0) {
     i19 = 1;
    } else {
     i20 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(i11) | 0;
     i21 = HEAP32[(HEAP32[i20 >> 2] | 0) + 8 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i7, H_BASE + 40 | 0);
     i22 = FUNCTION_TABLE_iii[i21 & 1](i20, i7) | 0;
     i20 = HEAP32[i7 >> 2] | 0;
     if ((i20 | 0) == 0) {
      i19 = i22;
      break;
     }
     i21 = i20 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      i19 = i22;
      break;
     } else {
      HEAP32[i21 >> 2] = i23;
      i19 = i22;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i6 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i16 = i19;
    break;
   }
   i18 = i17 | 0;
   i22 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    i16 = i19;
    break;
   } else {
    HEAP32[i18 >> 2] = i22;
    i16 = i19;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i5 = i19 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i19 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(i11) | 0;
 i6 = HEAP32[(HEAP32[i19 >> 2] | 0) + 8 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 8 | 0);
 do {
  if (FUNCTION_TABLE_iii[i6 & 1](i19, i8) | 0) {
   i24 = 1;
  } else {
   i5 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(i11) | 0;
   i7 = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 224 | 0);
   i14 = FUNCTION_TABLE_iii[i7 & 1](i5, i9) | 0;
   i5 = HEAP32[i9 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i24 = i14;
    break;
   }
   i7 = i5 | 0;
   i15 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    i24 = i14;
    break;
   } else {
    HEAP32[i7 >> 2] = i15;
    i24 = i14;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 | 0;
   i19 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i8 >> 2] = i19;
    break;
   }
  }
 } while (0);
 if (i24) {
  i9 = __ZN7WebCore17GraphicsContext3D13createTextureEv(i11) | 0;
  __ZN7WebCore17GraphicsContext3D11bindTextureEjj(i11, 3553, i9);
  __ZN7WebCore17GraphicsContext3D10texImage2DEjijiiijjPKv(i11, 3553, 0, 34041, 1, 1, 0, 34041, 34042, H_BASE + 328 | 0) | 0;
  i25 = i9;
 } else {
  i25 = 0;
 }
 if (i16) {
  i9 = __ZN7WebCore17GraphicsContext3D13createTextureEv(i11) | 0;
  __ZN7WebCore17GraphicsContext3D11bindTextureEjj(i11, 3553, i9);
  __ZN7WebCore17GraphicsContext3D10texImage2DEjijiiijjPKv(i11, 3553, 0, 6402, 1, 1, 0, 6402, 5125, H_BASE + 328 | 0) | 0;
  i26 = i9;
 } else {
  i26 = 0;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = (i9 | 0) < (i4 | 0) ? i9 : i4;
 L46 : do {
  if ((i3 | 0) > 0) {
   i4 = i10;
   i9 = 0;
   i19 = 0;
   i8 = 0;
   i6 = 0;
   L48 : while (1) {
    i14 = __ZN7WebCore17GraphicsContext3D13createTextureEv(i11) | 0;
    HEAP32[i10 >> 2] = i14;
    if ((i9 | 0) == (i19 | 0)) {
     i15 = i19 + 1 | 0;
     do {
      if (i8 >>> 0 > i10 >>> 0) {
       i27 = 36;
      } else {
       if ((i8 + (i19 << 2) | 0) >>> 0 <= i10 >>> 0) {
        i27 = 36;
        break;
       }
       i7 = i4 - i8 >> 2;
       i5 = i15 + (i19 >>> 2) | 0;
       i22 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
       i5 = i22 >>> 0 > i15 >>> 0 ? i22 : i15;
       do {
        if (i19 >>> 0 < i5 >>> 0) {
         if (i5 >>> 0 > 1073741823 >>> 0) {
          i27 = 43;
          break L48;
         }
         i22 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
         i18 = i22 >>> 2;
         i17 = __ZN3WTF10fastMallocEj(i22) | 0;
         i22 = i17;
         i23 = i8;
         _memcpy(i17 | 0, i23 | 0, i19 << 2) | 0;
         if ((i8 | 0) == 0) {
          i28 = i22;
          i29 = i18;
          break;
         }
         i17 = (i22 | 0) == (i8 | 0);
         __ZN3WTF8fastFreeEPv(i23);
         i28 = i17 ? 0 : i22;
         i29 = i17 ? 0 : i18;
        } else {
         i28 = i8;
         i29 = i19;
        }
       } while (0);
       i30 = i28 + (i7 << 2) | 0;
       i31 = i28;
       i32 = i29;
      }
     } while (0);
     do {
      if ((i27 | 0) == 36) {
       i27 = 0;
       i5 = i15 + (i19 >>> 2) | 0;
       i18 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
       i5 = i18 >>> 0 > i15 >>> 0 ? i18 : i15;
       if (i19 >>> 0 >= i5 >>> 0) {
        i30 = i10;
        i31 = i8;
        i32 = i19;
        break;
       }
       if (i5 >>> 0 > 1073741823 >>> 0) {
        i27 = 38;
        break L48;
       }
       i18 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
       i5 = i18 >>> 2;
       i17 = __ZN3WTF10fastMallocEj(i18) | 0;
       i18 = i17;
       i22 = i8;
       _memcpy(i17 | 0, i22 | 0, i19 << 2) | 0;
       if ((i8 | 0) == 0) {
        i30 = i10;
        i31 = i18;
        i32 = i5;
        break;
       }
       i17 = (i18 | 0) == (i8 | 0);
       __ZN3WTF8fastFreeEPv(i22);
       i30 = i10;
       i31 = i17 ? 0 : i18;
       i32 = i17 ? 0 : i5;
      }
     } while (0);
     HEAP32[i31 + (i19 << 2) >> 2] = HEAP32[i30 >> 2];
     i33 = i31;
     i34 = i32;
     i35 = i15;
    } else {
     HEAP32[i8 + (i9 << 2) >> 2] = i14;
     i33 = i8;
     i34 = i19;
     i35 = i9 + 1 | 0;
    }
    __ZN7WebCore17GraphicsContext3D11bindTextureEjj(i11, 3553, HEAP32[i10 >> 2] | 0);
    __ZN7WebCore17GraphicsContext3D10texImage2DEjijiiijjPKv(i11, 3553, 0, 6408, 1, 1, 0, 6408, 5121, H_BASE + 328 | 0) | 0;
    __ZN7WebCore17GraphicsContext3D20framebufferTexture2DEjjjji(i11, 36160, i6 + 36064 | 0, 3553, HEAP32[i10 >> 2] | 0, 0);
    if ((__ZN7WebCore17GraphicsContext3D22checkFramebufferStatusEj(i11, 36160) | 0) != 36053) {
     i36 = 0;
     i37 = i33;
     i38 = i35;
     i39 = i16;
     i40 = i24;
     break L46;
    }
    if (i16) {
     __ZN7WebCore17GraphicsContext3D20framebufferTexture2DEjjjji(i11, 36160, 36096, 3553, i26, 0);
     if ((__ZN7WebCore17GraphicsContext3D22checkFramebufferStatusEj(i11, 36160) | 0) != 36053) {
      i36 = 0;
      i37 = i33;
      i38 = i35;
      i39 = 1;
      i40 = i24;
      break L46;
     }
     __ZN7WebCore17GraphicsContext3D20framebufferTexture2DEjjjji(i11, 36160, 36096, 3553, 0, 0);
    }
    if (i24) {
     __ZN7WebCore17GraphicsContext3D20framebufferTexture2DEjjjji(i11, 36160, 36096, 3553, i25, 0);
     __ZN7WebCore17GraphicsContext3D20framebufferTexture2DEjjjji(i11, 36160, 36128, 3553, i25, 0);
     if ((__ZN7WebCore17GraphicsContext3D22checkFramebufferStatusEj(i11, 36160) | 0) != 36053) {
      i36 = 0;
      i37 = i33;
      i38 = i35;
      i39 = i16;
      i40 = 1;
      break L46;
     }
     __ZN7WebCore17GraphicsContext3D20framebufferTexture2DEjjjji(i11, 36160, 36096, 3553, 0, 0);
     __ZN7WebCore17GraphicsContext3D20framebufferTexture2DEjjjji(i11, 36160, 36128, 3553, 0, 0);
    }
    i5 = i6 + 1 | 0;
    if ((i5 | 0) < (i3 | 0)) {
     i9 = i35;
     i19 = i34;
     i8 = i33;
     i6 = i5;
    } else {
     i36 = 1;
     i37 = i33;
     i38 = i35;
     i39 = i16;
     i40 = i24;
     break L46;
    }
   }
   if ((i27 | 0) == 38) {
    _WTFCrash();
    return 0;
   } else if ((i27 | 0) == 43) {
    _WTFCrash();
    return 0;
   }
  } else {
   i36 = 1;
   i37 = 0;
   i38 = 0;
   i39 = i16;
   i40 = i24;
  }
 } while (0);
 __ZN7WebCore21WebGLRenderingContext25restoreCurrentFramebufferEv(i1);
 __ZN7WebCore17GraphicsContext3D17deleteFramebufferEj(i11, i13);
 __ZN7WebCore21WebGLRenderingContext23restoreCurrentTexture2DEv(i1);
 if (i39) {
  __ZN7WebCore17GraphicsContext3D13deleteTextureEj(i11, i26);
 }
 if (i40) {
  __ZN7WebCore17GraphicsContext3D13deleteTextureEj(i11, i25);
 }
 if ((i38 | 0) != 0) {
  i25 = 0;
  while (1) {
   __ZN7WebCore17GraphicsContext3D13deleteTextureEj(i11, HEAP32[i37 + (i25 << 2) >> 2] | 0);
   i25 = i25 + 1 | 0;
   if (i25 >>> 0 >= i38 >>> 0) {
    break;
   }
  }
 }
 if ((i37 | 0) == 0) {
  i12 = i36;
  STACKTOP = i2;
  return i12 | 0;
 }
 __ZN3WTF8fastFreeEPv(i37);
 i12 = i36;
 STACKTOP = i2;
 return i12 | 0;
}
function __ZN7WebCore14EXTDrawBuffers14drawBuffersEXTERKN3WTF6VectorIjLj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 if (__ZN7WebCore21WebGLRenderingContext13isContextLostEv(HEAP32[i5 >> 2] | 0) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i7 + 260 >> 2] | 0) == 0) {
  if ((i1 | 0) != 1) {
   __ZN7WebCore21WebGLRenderingContext17synthesizeGLErrorEjPKcS2_NS0_24ConsoleDisplayPreferenceE(i7, 1281, H_BASE + 256 | 0, H_BASE + 200 | 0, 0);
   STACKTOP = i3;
   return;
  }
  i8 = HEAP32[i6 >> 2] | 0;
  if ((i8 | 0) == 1029 | (i8 | 0) == 0) {
   HEAP32[i4 >> 2] = (i8 | 0) == 1029 ? 36064 : 0;
   i8 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(HEAP32[i7 + 44 >> 2] | 0) | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 80 >> 2] & 1](i8, 1, i4);
   __ZN7WebCore21WebGLRenderingContext17setBackDrawBufferEj(HEAP32[i5 >> 2] | 0, HEAP32[i6 >> 2] | 0);
   STACKTOP = i3;
   return;
  } else {
   __ZN7WebCore21WebGLRenderingContext17synthesizeGLErrorEjPKcS2_NS0_24ConsoleDisplayPreferenceE(i7, 1282, H_BASE + 256 | 0, H_BASE + 184 | 0, 0);
   STACKTOP = i3;
   return;
  }
 }
 if ((i1 | 0) > (__ZN7WebCore21WebGLRenderingContext17getMaxDrawBuffersEv(i7) | 0)) {
  __ZN7WebCore21WebGLRenderingContext17synthesizeGLErrorEjPKcS2_NS0_24ConsoleDisplayPreferenceE(HEAP32[i5 >> 2] | 0, 1281, H_BASE + 256 | 0, H_BASE + 152 | 0, 0);
  STACKTOP = i3;
  return;
 } else {
  i9 = 0;
 }
 while (1) {
  if ((i9 | 0) >= (i1 | 0)) {
   i10 = 13;
   break;
  }
  i7 = HEAP32[i6 + (i9 << 2) >> 2] | 0;
  if ((i7 | 0) == 0 | (i7 | 0) == (i9 + 36064 | 0)) {
   i9 = i9 + 1 | 0;
  } else {
   i10 = 12;
   break;
  }
 }
 if ((i10 | 0) == 12) {
  __ZN7WebCore21WebGLRenderingContext17synthesizeGLErrorEjPKcS2_NS0_24ConsoleDisplayPreferenceE(HEAP32[i5 >> 2] | 0, 1282, H_BASE + 256 | 0, H_BASE + 120 | 0, 0);
  STACKTOP = i3;
  return;
 } else if ((i10 | 0) == 13) {
  __ZN7WebCore16WebGLFramebuffer11drawBuffersERKN3WTF6VectorIjLj0ENS1_15CrashOnOverflowEEE(HEAP32[(HEAP32[i5 >> 2] | 0) + 260 >> 2] | 0, i2);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14EXTDrawBuffers9supportedEPNS_21WebGLRenderingContextE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(HEAP32[i1 + 44 >> 2] | 0) | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i3, H_BASE + 272 | 0);
 if (FUNCTION_TABLE_iii[i5 & 1](i4, i3) | 0) {
  i6 = __ZN7WebCore14EXTDrawBuffers26satisfiesWebGLRequirementsEPNS_21WebGLRenderingContextE(i1) | 0;
 } else {
  i6 = 0;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return i6 | 0;
 }
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return i6 | 0;
 } else {
  HEAP32[i3 >> 2] = i4;
  STACKTOP = i2;
  return i6 | 0;
 }
 return 0;
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
function __ZN7WebCore14EXTDrawBuffers6createEPNS_21WebGLRenderingContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 __ZN7WebCore14WebGLExtensionC2EPNS_21WebGLRenderingContextE(i3, i2);
 HEAP32[i3 >> 2] = H_BASE + 304;
 HEAP32[i1 >> 2] = i3;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore14EXTDrawBuffersC2EPNS_21WebGLRenderingContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14WebGLExtensionC2EPNS_21WebGLRenderingContextE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 304;
 return;
}
function __ZN7WebCore14EXTDrawBuffersC1EPNS_21WebGLRenderingContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14WebGLExtensionC2EPNS_21WebGLRenderingContextE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 304;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 2;
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
function __ZN7WebCore14EXTDrawBuffersD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14WebGLExtensionD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function __ZN7WebCore14EXTDrawBuffersD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14WebGLExtensionD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore14EXTDrawBuffersD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14WebGLExtensionD2Ev(i1 | 0);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore14EXTDrawBuffers7getNameEv(i1) {
 i1 = i1 | 0;
 return 1;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore14EXTDrawBuffersD2Ev,b0,__ZN7WebCore14EXTDrawBuffersD0Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore14EXTDrawBuffersC2EPNS_21WebGLRenderingContextE,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore14EXTDrawBuffers7getNameEv,b2];
  var FUNCTION_TABLE_viii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore14EXTDrawBuffers26satisfiesWebGLRequirementsEPNS_21WebGLRenderingContextE","__ZN7WebCore14EXTDrawBuffers6createEPNS_21WebGLRenderingContextE","__ZN7WebCore14EXTDrawBuffers14drawBuffersEXTERKN3WTF6VectorIjLj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore14EXTDrawBuffersD0Ev","_memset","__ZN7WebCore14EXTDrawBuffersD2Ev","__ZN7WebCore14EXTDrawBuffersC2EPNS_21WebGLRenderingContextE","_memcpy","__ZN7WebCore14EXTDrawBuffers9supportedEPNS_21WebGLRenderingContextE","__ZNK7WebCore14EXTDrawBuffers7getNameEv"]

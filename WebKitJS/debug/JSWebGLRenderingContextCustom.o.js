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
H_BASE = parentModule["_malloc"](88 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 88;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZN7WebCore13JSWebGLShader6s_infoE=env.__ZN7WebCore13JSWebGLShader6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEEE=(H_BASE+8)|0;
  var __ZTVN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEEE=(H_BASE+48)|0;
  var __ZN3JSC9WeakGCMapIPN3WTF10StringImplENS_8JSStringENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EEE14minGCThresholdE=(H_BASE+88)|0;
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
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCoreL4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectERKNS_12WebGLGetInfoE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, d34 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 104 | 0;
 i11 = i5 + 112 | 0;
 i12 = i5 + 120 | 0;
 i13 = i5 + 128 | 0;
 i14 = i5 + 136 | 0;
 i15 = i5 + 144 | 0;
 i16 = i5 + 152 | 0;
 i17 = i5 + 160 | 0;
 i18 = i5 + 168 | 0;
 i19 = i5 + 176 | 0;
 switch (__ZNK7WebCore12WebGLGetInfo7getTypeEv(i4) | 0) {
 case 1:
  {
   i20 = i9 | 0;
   HEAP32[i20 >> 2] = 0;
   i21 = i9 + 4 | 0;
   HEAP32[i21 >> 2] = 8;
   i22 = i9 + 72 | 0;
   HEAP32[i22 >> 2] = i9 + 8;
   i23 = i9 + 76 | 0;
   HEAP32[i23 >> 2] = 0;
   i24 = __ZNK7WebCore12WebGLGetInfo12getBoolArrayEv(i4) | 0;
   i25 = i24 + 8 | 0;
   if ((HEAP32[i25 >> 2] | 0) != 0) {
    i26 = i24 | 0;
    i24 = i8 | 0;
    i27 = 0;
    while (1) {
     i28 = HEAP32[i20 >> 2] | 0;
     i29 = HEAP8[(HEAP32[i26 >> 2] | 0) + i27 | 0] & 1 | 0;
     i30 = -2 | 0;
     if ((i28 | 0) < (HEAP32[i21 >> 2] | 0)) {
      i31 = (HEAP32[i22 >> 2] | 0) + (i28 << 3) | 0;
      HEAP32[i31 >> 2] = i29;
      HEAP32[i31 + 4 >> 2] = i30;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     } else {
      HEAP32[i24 >> 2] = i29;
      HEAP32[i24 + 4 >> 2] = i30;
      __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i9, i8);
     }
     i27 = i27 + 1 | 0;
     if (i27 >>> 0 >= (HEAP32[i25 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
   i25 = HEAP32[i22 >> 2] | 0;
   i27 = HEAP32[i20 >> 2] | 0;
   i20 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
   i8 = __ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj(i20, HEAP32[i3 + 244 >> 2] | 0, i27) | 0;
   if ((i8 | 0) == 0) {
    _WTFCrash();
   }
   if ((i27 | 0) != 0) {
    i24 = i8 | 0;
    i26 = i7 | 0;
    i30 = i7 + 4 | 0;
    i29 = i7;
    i31 = 0;
    while (1) {
     if ((i27 | 0) > (i31 | 0)) {
      i28 = i25 + (i31 << 3) | 0;
      i32 = HEAP32[i28 + 4 >> 2] | 0;
      HEAP32[i26 >> 2] = HEAP32[i28 >> 2];
      HEAP32[i26 + 4 >> 2] = i32;
     } else {
      HEAP32[i30 >> 2] = -4;
      HEAP32[i29 >> 2] = 0;
     }
     __ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE(i24, i20, i31, i7);
     i31 = i31 + 1 | 0;
     if (i31 >>> 0 >= i27 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 + 4 >> 2] = -5;
   HEAP32[i1 >> 2] = i8;
   i8 = HEAP32[i23 >> 2] | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i6 >> 2] = i9;
    __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i8, i6) | 0;
   }
   if ((HEAP32[i21 >> 2] | 0) == 8) {
    STACKTOP = i5;
    return;
   }
   i21 = HEAP32[i22 >> 2] | 0;
   if ((i21 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   __ZdaPv(i21);
   STACKTOP = i5;
   return;
  }
 case 9:
  {
   __ZNK7WebCore12WebGLGetInfo19getWebGLFramebufferEv(i12, i4);
   i21 = i12 | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_16WebGLFramebufferE(i1, i2, i3, HEAP32[i21 >> 2] | 0);
   i12 = HEAP32[i21 >> 2] | 0;
   if ((i12 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i21 = i12 + 4 | 0;
   i12 = i21 | 0;
   i22 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i12 >> 2] = i22;
    STACKTOP = i5;
    return;
   }
   i22 = i21 - 4 | 0;
   if ((i22 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 15](i22);
   STACKTOP = i5;
   return;
  }
 case 10:
  {
   __ZNK7WebCore12WebGLGetInfo16getWebGLIntArrayEv(i13, i4);
   i22 = i13 | 0;
   i13 = HEAP32[i22 >> 2] | 0;
   if ((i13 | 0) == 0) {
    HEAP32[i1 + 4 >> 2] = -3;
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   }
   i21 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i13 >> 2] | 0) + 16 >> 2] & 7](i13 | 0, i2, i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i21 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i21;
   i21 = HEAP32[i22 >> 2] | 0;
   if ((i21 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i22 = i21 + 4 | 0;
   i21 = i22 | 0;
   i13 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i21 >> 2] = i13;
    STACKTOP = i5;
    return;
   }
   i13 = i22 - 4 | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 15](i13);
   STACKTOP = i5;
   return;
  }
 case 4:
  {
   HEAP32[i1 + 4 >> 2] = -3;
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 case 5:
  {
   __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i1, i2, __ZNK7WebCore12WebGLGetInfo9getStringEv(i4) | 0);
   STACKTOP = i5;
   return;
  }
 case 6:
  {
   i13 = __ZNK7WebCore12WebGLGetInfo14getUnsignedIntEv(i4) | 0;
   if ((i13 | 0) < 0) {
    HEAPF64[i1 >> 3] = +(i13 >>> 0 >>> 0);
    STACKTOP = i5;
    return;
   } else {
    i22 = i1 | 0;
    HEAP32[i22 >> 2] = i13;
    HEAP32[i22 + 4 >> 2] = -1;
    STACKTOP = i5;
    return;
   }
   break;
  }
 case 7:
  {
   __ZNK7WebCore12WebGLGetInfo14getWebGLBufferEv(i10, i4);
   i22 = i10 | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_11WebGLBufferE(i1, i2, i3, HEAP32[i22 >> 2] | 0);
   i10 = HEAP32[i22 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i22 = i10 + 4 | 0;
   i10 = i22 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i10 >> 2] = i13;
    STACKTOP = i5;
    return;
   }
   i13 = i22 - 4 | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
   STACKTOP = i5;
   return;
  }
 case 0:
  {
   i13 = __ZNK7WebCore12WebGLGetInfo7getBoolEv(i4) | 0;
   HEAP32[i1 + 4 >> 2] = -2;
   HEAP32[i1 >> 2] = i13 & 1;
   STACKTOP = i5;
   return;
  }
 case 2:
  {
   d33 = +__ZNK7WebCore12WebGLGetInfo8getFloatEv(i4);
   d34 = d33;
   i13 = ~~d33;
   do {
    if (+(i13 | 0) == d34) {
     HEAPF64[tempDoublePtr >> 3] = d34;
     i22 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
     i10 = 0;
     if ((i13 | 0) == 0 & ((i22 | 0) < (i10 | 0) | (i22 | 0) == (i10 | 0) & (HEAP32[tempDoublePtr >> 2] | 0) >>> 0 < 0 >>> 0)) {
      break;
     }
     i10 = i1 | 0;
     HEAP32[i10 >> 2] = i13;
     HEAP32[i10 + 4 >> 2] = -1;
     STACKTOP = i5;
     return;
    }
   } while (0);
   HEAPF64[i1 >> 3] = d34;
   STACKTOP = i5;
   return;
  }
 case 3:
  {
   i13 = __ZNK7WebCore12WebGLGetInfo6getIntEv(i4) | 0;
   HEAP32[i1 + 4 >> 2] = -1;
   HEAP32[i1 >> 2] = i13;
   STACKTOP = i5;
   return;
  }
 case 8:
  {
   __ZNK7WebCore12WebGLGetInfo18getWebGLFloatArrayEv(i11, i4);
   i13 = i11 | 0;
   i11 = HEAP32[i13 >> 2] | 0;
   if ((i11 | 0) == 0) {
    HEAP32[i1 + 4 >> 2] = -3;
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   }
   i10 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 7](i11 | 0, i2, i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i10 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i10;
   i10 = HEAP32[i13 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i13 = i10 + 4 | 0;
   i10 = i13 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i10 >> 2] = i11;
    STACKTOP = i5;
    return;
   }
   i11 = i13 - 4 | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 15](i11);
   STACKTOP = i5;
   return;
  }
 case 12:
  {
   __ZNK7WebCore12WebGLGetInfo15getWebGLProgramEv(i14, i4);
   i11 = i14 | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_12WebGLProgramE(i1, i2, i3, HEAP32[i11 >> 2] | 0);
   i14 = HEAP32[i11 >> 2] | 0;
   if ((i14 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i11 = i14 + 4 | 0;
   i14 = i11 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i14 >> 2] = i13;
    STACKTOP = i5;
    return;
   }
   i13 = i11 - 4 | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
   STACKTOP = i5;
   return;
  }
 case 13:
  {
   __ZNK7WebCore12WebGLGetInfo20getWebGLRenderbufferEv(i15, i4);
   i13 = i15 | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_17WebGLRenderbufferE(i1, i2, i3, HEAP32[i13 >> 2] | 0);
   i15 = HEAP32[i13 >> 2] | 0;
   if ((i15 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i13 = i15 + 4 | 0;
   i15 = i13 | 0;
   i11 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i15 >> 2] = i11;
    STACKTOP = i5;
    return;
   }
   i11 = i13 - 4 | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
   STACKTOP = i5;
   return;
  }
 case 14:
  {
   __ZNK7WebCore12WebGLGetInfo15getWebGLTextureEv(i16, i4);
   i11 = i16 | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_12WebGLTextureE(i1, i2, i3, HEAP32[i11 >> 2] | 0);
   i16 = HEAP32[i11 >> 2] | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i11 = i16 + 4 | 0;
   i16 = i11 | 0;
   i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i16 >> 2] = i13;
    STACKTOP = i5;
    return;
   }
   i13 = i11 - 4 | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
   STACKTOP = i5;
   return;
  }
 case 15:
  {
   __ZNK7WebCore12WebGLGetInfo25getWebGLUnsignedByteArrayEv(i17, i4);
   i13 = i17 | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   if ((i17 | 0) == 0) {
    HEAP32[i1 + 4 >> 2] = -3;
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   }
   i11 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] & 7](i17 | 0, i2, i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i11 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i11;
   i11 = HEAP32[i13 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i13 = i11 + 4 | 0;
   i11 = i13 | 0;
   i17 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i11 >> 2] = i17;
    STACKTOP = i5;
    return;
   }
   i17 = i13 - 4 | 0;
   if ((i17 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 12 >> 2] & 15](i17);
   STACKTOP = i5;
   return;
  }
 case 16:
  {
   __ZNK7WebCore12WebGLGetInfo24getWebGLUnsignedIntArrayEv(i18, i4);
   i17 = i18 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   if ((i18 | 0) == 0) {
    HEAP32[i1 + 4 >> 2] = -3;
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   }
   i13 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i18 >> 2] | 0) + 16 >> 2] & 7](i18 | 0, i2, i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i13 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i13;
   i13 = HEAP32[i17 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i17 = i13 + 4 | 0;
   i13 = i17 | 0;
   i18 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i13 >> 2] = i18;
    STACKTOP = i5;
    return;
   }
   i18 = i17 - 4 | 0;
   if ((i18 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 12 >> 2] & 15](i18);
   STACKTOP = i5;
   return;
  }
 case 17:
  {
   __ZNK7WebCore12WebGLGetInfo28getWebGLVertexArrayObjectOESEv(i19, i4);
   i4 = i19 | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_25WebGLVertexArrayObjectOESE(i1, i2, i3, HEAP32[i4 >> 2] | 0);
   i3 = HEAP32[i4 >> 2] | 0;
   if ((i3 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i4 = i3 + 4 | 0;
   i3 = i4 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i3 >> 2] = i2;
    STACKTOP = i5;
    return;
   }
   i2 = i4 - 4 | 0;
   if ((i2 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
   STACKTOP = i5;
   return;
  }
 default:
  {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 }
}
function __ZN3JSC9WeakGCMapIPN3WTF10StringImplENS_8JSStringENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EEE5gcMapEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i3 + 12 | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i4;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = 4;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i3 = i1 + 12 | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i1 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i9 + (i11 << 3) | 0;
 L1 : do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   L3 : do {
    if ((i11 | 0) == 0) {
     i13 = i9;
    } else {
     i14 = i9;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L3;
      }
      i14 = i14 + 8 | 0;
      if ((i14 | 0) == (i12 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i13 | 0) == (i12 | 0)) {
    break;
   } else {
    i16 = i13;
    i17 = 0;
   }
   L8 : while (1) {
    i14 = HEAP32[i16 + 4 >> 2] | 0;
    do {
     if ((i14 | 0) == 0) {
      i18 = 11;
     } else {
      if ((HEAP32[i14 + 4 >> 2] | 0) == -6) {
       i18 = 11;
       break;
      }
      if ((HEAP32[i14 + 8 >> 2] & 3 | 0) == 0) {
       i19 = i17;
      } else {
       i18 = 11;
      }
     }
    } while (0);
    do {
     if ((i18 | 0) == 11) {
      i18 = 0;
      i14 = i16 | 0;
      if ((i17 | 0) != (HEAP32[i6 >> 2] | 0)) {
       HEAP32[(HEAP32[i5 >> 2] | 0) + (i17 << 2) >> 2] = HEAP32[i14 >> 2];
       i15 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
       HEAP32[i7 >> 2] = i15;
       i19 = i15;
       break;
      }
      i15 = i17 + 1 | 0;
      i20 = HEAP32[i5 >> 2] | 0;
      do {
       if (i20 >>> 0 > i14 >>> 0) {
        i18 = 15;
       } else {
        if ((i20 + (i17 << 2) | 0) >>> 0 <= i14 >>> 0) {
         i18 = 15;
         break;
        }
        i21 = i16 - i20 >> 2;
        i22 = i15 + (i17 >>> 2) | 0;
        i23 = i22 >>> 0 > 16 >>> 0 ? i22 : 16;
        i22 = i23 >>> 0 > i15 >>> 0 ? i23 : i15;
        do {
         if (i17 >>> 0 < i22 >>> 0) {
          if (i22 >>> 0 > 4 >>> 0) {
           if (i22 >>> 0 > 1073741823 >>> 0) {
            i18 = 29;
            break L8;
           }
           i23 = __ZN3WTF18fastMallocGoodSizeEj(i22 << 2) | 0;
           HEAP32[i6 >> 2] = i23 >>> 2;
           i24 = __ZN3WTF10fastMallocEj(i23) | 0;
           HEAP32[i5 >> 2] = i24;
           i25 = i24;
          } else {
           HEAP32[i5 >> 2] = i4;
           HEAP32[i6 >> 2] = 4;
           i25 = i4;
          }
          i24 = i20;
          _memcpy(i25 | 0, i24 | 0, i17 << 2) | 0;
          if ((i4 | 0) == (i20 | 0) | (i20 | 0) == 0) {
           break;
          }
          if ((HEAP32[i5 >> 2] | 0) == (i20 | 0)) {
           HEAP32[i5 >> 2] = 0;
           HEAP32[i6 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i24);
         }
        } while (0);
        i22 = HEAP32[i5 >> 2] | 0;
        i26 = i22 + (i21 << 2) | 0;
        i27 = i22;
       }
      } while (0);
      if ((i18 | 0) == 15) {
       i18 = 0;
       i22 = i15 + (i17 >>> 2) | 0;
       i24 = i22 >>> 0 > 16 >>> 0 ? i22 : 16;
       i22 = i24 >>> 0 > i15 >>> 0 ? i24 : i15;
       do {
        if (i17 >>> 0 < i22 >>> 0) {
         if (i22 >>> 0 > 4 >>> 0) {
          if (i22 >>> 0 > 1073741823 >>> 0) {
           i18 = 18;
           break L8;
          }
          i24 = __ZN3WTF18fastMallocGoodSizeEj(i22 << 2) | 0;
          HEAP32[i6 >> 2] = i24 >>> 2;
          i23 = __ZN3WTF10fastMallocEj(i24) | 0;
          HEAP32[i5 >> 2] = i23;
          i28 = i23;
         } else {
          HEAP32[i5 >> 2] = i4;
          HEAP32[i6 >> 2] = 4;
          i28 = i4;
         }
         i23 = i20;
         _memcpy(i28 | 0, i23 | 0, i17 << 2) | 0;
         if ((i4 | 0) == (i20 | 0) | (i20 | 0) == 0) {
          break;
         }
         if ((HEAP32[i5 >> 2] | 0) == (i20 | 0)) {
          HEAP32[i5 >> 2] = 0;
          HEAP32[i6 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i23);
        }
       } while (0);
       i26 = i14;
       i27 = HEAP32[i5 >> 2] | 0;
      }
      HEAP32[i27 + (HEAP32[i7 >> 2] << 2) >> 2] = HEAP32[i26 >> 2];
      i20 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
      HEAP32[i7 >> 2] = i20;
      i19 = i20;
     }
    } while (0);
    i20 = i16 + 8 | 0;
    if ((i20 | 0) == (i12 | 0)) {
     i18 = 6;
     break;
    } else {
     i29 = i20;
    }
    while (1) {
     i20 = HEAP32[i29 >> 2] | 0;
     if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
      break;
     }
     i20 = i29 + 8 | 0;
     if ((i20 | 0) == (i12 | 0)) {
      i18 = 6;
      break L8;
     } else {
      i29 = i20;
     }
    }
    if ((i29 | 0) == (i12 | 0)) {
     i18 = 6;
     break;
    } else {
     i16 = i29;
     i17 = i19;
    }
   }
   if ((i18 | 0) == 18) {
    _WTFCrash();
   } else if ((i18 | 0) == 6) {
    if ((i19 | 0) == 0) {
     break;
    }
    i20 = i1 | 0;
    i22 = i1 + 16 | 0;
    i15 = i1 + 8 | 0;
    i23 = 0;
    while (1) {
     i24 = HEAP32[i8 >> 2] | 0;
     if ((i24 | 0) == 0) {
      i30 = HEAP32[i10 >> 2] | 0;
      i31 = i30 << 3 | 0;
      i32 = 0;
      i33 = i30;
     } else {
      i30 = HEAP32[i15 >> 2] | 0;
      i34 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i23 << 2) >> 2] | 0;
      i35 = i34;
      i36 = i35 + ~(i35 << 15) | 0;
      i35 = (i36 >>> 10 ^ i36) * 9 & -1;
      i36 = i35 >>> 6 ^ i35;
      i35 = i36 + ~(i36 << 11) | 0;
      i36 = i35 >>> 16 ^ i35;
      i35 = i36 & i30;
      i37 = i24 + (i35 << 3) | 0;
      i38 = HEAP32[i37 >> 2] | 0;
      L62 : do {
       if ((i38 | 0) == (i34 | 0)) {
        i39 = i37;
       } else {
        i40 = (i36 >>> 23) + ~i36 | 0;
        i41 = i40 << 12 ^ i40;
        i40 = i41 >>> 7 ^ i41;
        i41 = i40 << 2 ^ i40;
        i40 = i41 >>> 20 ^ i41 | 1;
        i41 = 0;
        i42 = i35;
        i43 = i38;
        while (1) {
         if ((i43 | 0) == 0) {
          i39 = 0;
          break L62;
         }
         i44 = (i41 | 0) == 0 ? i40 : i41;
         i45 = i44 + i42 & i30;
         i46 = i24 + (i45 << 3) | 0;
         i47 = HEAP32[i46 >> 2] | 0;
         if ((i47 | 0) == (i34 | 0)) {
          i39 = i46;
          break;
         } else {
          i41 = i44;
          i42 = i45;
          i43 = i47;
         }
        }
       }
      } while (0);
      i34 = HEAP32[i10 >> 2] | 0;
      i31 = (i39 | 0) == 0 ? i24 + (i34 << 3) | 0 : i39;
      i32 = i24;
      i33 = i34;
     }
     do {
      if ((i31 | 0) != (i32 + (i33 << 3) | 0)) {
       i34 = i31 + 4 | 0;
       if ((HEAP32[i34 >> 2] | 0) != 0) {
        __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i34);
       }
       HEAP32[i31 >> 2] = -1;
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
       i34 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       HEAP32[i3 >> 2] = i34;
       i30 = HEAP32[i10 >> 2] | 0;
       if (!((i34 * 6 & -1 | 0) < (i30 | 0) & (i30 | 0) > 8)) {
        break;
       }
       __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i20, (i30 | 0) / 2 & -1, 0) | 0;
      }
     } while (0);
     i23 = i23 + 1 | 0;
     i48 = HEAP32[i7 >> 2] | 0;
     if (i23 >>> 0 >= i48 >>> 0) {
      break;
     }
    }
    if ((i48 | 0) == 0) {
     break;
    }
    HEAP32[i7 >> 2] = 0;
    break;
   } else if ((i18 | 0) == 29) {
    _WTFCrash();
   }
  }
 } while (0);
 i18 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == (i18 | 0) | (i18 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL13dataFunctionfENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 312 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 304 | 0;
 if ((HEAP32[i3 + 32 >> 2] | 0) != 3) {
  i12 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i13 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i12, i3, __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i3) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i13 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i13;
  STACKTOP = i5;
  return;
 }
 i13 = i3 + 48 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i14 = HEAP32[i13 + 4 >> 2] | 0;
 d15 = +HEAPF64[i13 >> 3];
 do {
  if (i2 >>> 0 < 4 >>> 0) {
   i16 = i6 | 0;
   HEAP32[i16 >> 2] = i12;
   HEAP32[i16 + 4 >> 2] = i14;
   i16 = __ZN7WebCore22toWebGLUniformLocationEN3JSC7JSValueE(i6) | 0;
   if ((i16 | 0) != 0) {
    i17 = -1;
    i18 = i16;
    break;
   }
   if (((HEAP32[i13 + 4 >> 2] | 0) + 4 | 0) >>> 0 < 2 >>> 0) {
    i17 = -1;
    i18 = 0;
    break;
   }
   i16 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i16 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i16;
   STACKTOP = i5;
   return;
  } else {
   i16 = i7 | 0;
   HEAP32[i16 >> 2] = i12;
   HEAP32[i16 + 4 >> 2] = i14;
   i16 = i14;
   if ((i16 | 0) == -1) {
    i17 = i12;
    i18 = 0;
    break;
   }
   if (i16 >>> 0 < 4294967289 >>> 0) {
    d19 = d15;
   } else {
    d19 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i3);
   }
   i17 = __ZN3JSC7toInt32Ed(d19) | 0;
   i18 = 0;
  }
 } while (0);
 i7 = i3 + 16 | 0;
 i12 = (HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i12 >> 2] & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i12 = i3 + 56 | 0;
 i14 = HEAP32[i12 >> 2] | 0;
 i13 = i14;
 L22 : do {
  if ((i14 & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i6 = i13;
   i16 = __ZN3JSC24getFloat32ArrayClassInfoEv() | 0;
   if ((HEAP32[(i13 & -65536) + 1048 >> 2] | 0) == 2) {
    i20 = i6 + 8 | 0;
   } else {
    i20 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i20 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i21 = 22;
    break;
   } else {
    i22 = i6;
   }
   while (1) {
    if ((i22 | 0) == (i16 | 0)) {
     break;
    }
    i6 = HEAP32[i22 + 4 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i21 = 22;
     break L22;
    } else {
     i22 = i6;
    }
   }
   if ((i13 | 0) == 0) {
    i21 = 22;
    break;
   }
   __ZN3JSC23JSGenericTypedArrayViewINS_14Float32AdaptorEE9typedImplEv(i8, i13);
   i23 = HEAP32[i8 >> 2] | 0;
  } else {
   i21 = 22;
  }
 } while (0);
 if ((i21 | 0) == 22) {
  HEAP32[i8 >> 2] = 0;
  i23 = 0;
 }
 HEAP32[i8 >> 2] = 0;
 i8 = (HEAP32[(HEAP32[i7 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 do {
  if ((HEAP32[i8 >> 2] & 0 | 0) == 0 & (HEAP32[i8 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
   HEAP32[i9 >> 2] = 0;
   if ((i23 | 0) != 0) {
    switch (i2 | 0) {
    case 0:
     {
      __ZN7WebCore21WebGLRenderingContext10uniform1fvEPKNS_20WebGLUniformLocationEPN3JSC21GenericTypedArrayViewINS4_14Float32AdaptorEEERi(i4, i18, i23, i9);
      break;
     }
    case 7:
     {
      __ZN7WebCore21WebGLRenderingContext15vertexAttrib4fvEjPN3JSC21GenericTypedArrayViewINS1_14Float32AdaptorEEE(i4, i17, i23);
      break;
     }
    case 2:
     {
      __ZN7WebCore21WebGLRenderingContext10uniform3fvEPKNS_20WebGLUniformLocationEPN3JSC21GenericTypedArrayViewINS4_14Float32AdaptorEEERi(i4, i18, i23, i9);
      break;
     }
    case 4:
     {
      __ZN7WebCore21WebGLRenderingContext15vertexAttrib1fvEjPN3JSC21GenericTypedArrayViewINS1_14Float32AdaptorEEE(i4, i17, i23);
      break;
     }
    case 5:
     {
      __ZN7WebCore21WebGLRenderingContext15vertexAttrib2fvEjPN3JSC21GenericTypedArrayViewINS1_14Float32AdaptorEEE(i4, i17, i23);
      break;
     }
    case 6:
     {
      __ZN7WebCore21WebGLRenderingContext15vertexAttrib3fvEjPN3JSC21GenericTypedArrayViewINS1_14Float32AdaptorEEE(i4, i17, i23);
      break;
     }
    case 1:
     {
      __ZN7WebCore21WebGLRenderingContext10uniform2fvEPKNS_20WebGLUniformLocationEPN3JSC21GenericTypedArrayViewINS4_14Float32AdaptorEEERi(i4, i18, i23, i9);
      break;
     }
    case 3:
     {
      __ZN7WebCore21WebGLRenderingContext10uniform4fvEPKNS_20WebGLUniformLocationEPN3JSC21GenericTypedArrayViewINS4_14Float32AdaptorEEERi(i4, i18, i23, i9);
      break;
     }
    default:
     {}
    }
    __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i9 >> 2] | 0);
    HEAP32[i1 + 4 >> 2] = -4;
    HEAP32[i1 >> 2] = 0;
    break;
   }
   i7 = i10 + 12 | 0;
   i21 = i10 | 0;
   HEAP32[i21 >> 2] = i7;
   i13 = i10 + 4 | 0;
   HEAP32[i13 >> 2] = 64;
   i22 = i10 + 8 | 0;
   HEAP32[i22 >> 2] = 0;
   i20 = HEAP32[i12 + 4 >> 2] | 0;
   i14 = i11 | 0;
   HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i14 + 4 >> 2] = i20;
   if (__ZN7WebCore8toVectorIfLj64EEEbPN3JSC9ExecStateENS1_7JSValueERN3WTF6VectorIT_XT0_ENS5_15CrashOnOverflowEEE(i3, i11, i10) | 0) {
    switch (i2 | 0) {
    case 0:
     {
      __ZN7WebCore21WebGLRenderingContext10uniform1fvEPKNS_20WebGLUniformLocationEPfiRi(i4, i18, HEAP32[i21 >> 2] | 0, HEAP32[i22 >> 2] | 0, i9);
      break;
     }
    case 1:
     {
      __ZN7WebCore21WebGLRenderingContext10uniform2fvEPKNS_20WebGLUniformLocationEPfiRi(i4, i18, HEAP32[i21 >> 2] | 0, HEAP32[i22 >> 2] | 0, i9);
      break;
     }
    case 2:
     {
      __ZN7WebCore21WebGLRenderingContext10uniform3fvEPKNS_20WebGLUniformLocationEPfiRi(i4, i18, HEAP32[i21 >> 2] | 0, HEAP32[i22 >> 2] | 0, i9);
      break;
     }
    case 3:
     {
      __ZN7WebCore21WebGLRenderingContext10uniform4fvEPKNS_20WebGLUniformLocationEPfiRi(i4, i18, HEAP32[i21 >> 2] | 0, HEAP32[i22 >> 2] | 0, i9);
      break;
     }
    case 4:
     {
      __ZN7WebCore21WebGLRenderingContext15vertexAttrib1fvEjPfi(i4, i17, HEAP32[i21 >> 2] | 0, HEAP32[i22 >> 2] | 0);
      break;
     }
    case 5:
     {
      __ZN7WebCore21WebGLRenderingContext15vertexAttrib2fvEjPfi(i4, i17, HEAP32[i21 >> 2] | 0, HEAP32[i22 >> 2] | 0);
      break;
     }
    case 6:
     {
      __ZN7WebCore21WebGLRenderingContext15vertexAttrib3fvEjPfi(i4, i17, HEAP32[i21 >> 2] | 0, HEAP32[i22 >> 2] | 0);
      break;
     }
    case 7:
     {
      __ZN7WebCore21WebGLRenderingContext15vertexAttrib4fvEjPfi(i4, i17, HEAP32[i21 >> 2] | 0, HEAP32[i22 >> 2] | 0);
      break;
     }
    default:
     {}
    }
    __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i9 >> 2] | 0);
    HEAP32[i1 + 4 >> 2] = -4;
    HEAP32[i1 >> 2] = 0;
   } else {
    i20 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i3) | 0;
    HEAP32[i1 + 4 >> 2] = (i20 | 0) == 0 ? -6 : -5;
    HEAP32[i1 >> 2] = i20;
   }
   if ((HEAP32[i22 >> 2] | 0) != 0) {
    HEAP32[i22 >> 2] = 0;
   }
   i22 = HEAP32[i21 >> 2] | 0;
   if ((i7 | 0) == (i22 | 0) | (i22 | 0) == 0) {
    break;
   }
   HEAP32[i21 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i22);
  } else {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 if ((i23 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i23 + 4 | 0;
 i23 = i1 | 0;
 i3 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i23 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 15](i3);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i9 >> 2] = i13;
 L1 : do {
  if ((i13 | 0) != 0) {
   i3 = HEAP32[i13 + 4 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     break L1;
    } else if ((i3 | 0) == 1) {
     i14 = i13 + 8 | 0;
     if ((HEAP32[i13 + 16 >> 2] & 32 | 0) == 0) {
      i15 = HEAP16[HEAP32[i14 >> 2] >> 1] | 0;
      if ((i15 & 65535) >>> 0 < 256 >>> 0) {
       i16 = i15 & 255;
      } else {
       break;
      }
     } else {
      i16 = HEAP8[HEAP32[i14 >> 2] | 0] | 0;
     }
     i14 = HEAP32[(HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 20932 + ((i16 & 255) << 2) >> 2] | 0;
     HEAP32[i1 + 4 >> 2] = (i14 | 0) == 0 ? -6 : -5;
     HEAP32[i1 >> 2] = i14;
     STACKTOP = i4;
     return;
    }
   } while (0);
   i3 = i2 + 16 | 0;
   i14 = HEAP32[(HEAP32[(HEAP32[HEAP32[i3 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
   i15 = i14 + 24 | 0;
   i17 = i11 | 0;
   HEAP32[i17 >> 2] = 0;
   i18 = i14 + 36 | 0;
   i19 = i14 + 44 | 0;
   if ((HEAP32[i18 >> 2] | 0) >= (HEAP32[i19 >> 2] | 0)) {
    __ZN3JSC9WeakGCMapIPN3WTF10StringImplENS_8JSStringENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EEE5gcMapEv(i15);
    i14 = (HEAP32[i18 >> 2] << 1) - 1 | 0;
    HEAP32[i19 >> 2] = (i14 | 0) > 3 ? i14 : 3;
   }
   HEAP32[i6 >> 2] = 0;
   __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i10, i15 | 0, i9, i6);
   i15 = i10 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) + 4 | 0;
   i19 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i20 = 13;
    } else {
     if ((HEAP32[i19 + 4 >> 2] | 0) == -6) {
      i20 = 13;
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] & 3 | 0) != 0) {
      i20 = 13;
     }
    }
   } while (0);
   do {
    if ((i20 | 0) == 13) {
     HEAP8[i10 + 8 | 0] = 1;
     i19 = i5 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = 0;
     i21 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i18;
     HEAP32[i19 >> 2] = i21;
     if ((i21 | 0) == 0) {
      break;
     }
     __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i19);
    }
   } while (0);
   if ((HEAP32[i17 >> 2] | 0) != 0) {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i17);
   }
   do {
    if ((HEAP8[i10 + 8 | 0] & 1) != 0) {
     i19 = HEAP32[i9 >> 2] | 0;
     i21 = (i19 | 0) == 0;
     if (!i21) {
      i18 = i19 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
     }
     i18 = HEAP32[(HEAP32[i3 >> 2] & -65536) + 1076 >> 2] | 0;
     L29 : do {
      if (i21) {
       i20 = 22;
      } else {
       i22 = HEAP32[i19 + 4 >> 2] | 0;
       do {
        if ((i22 | 0) == 0) {
         i20 = 22;
         break L29;
        } else if ((i22 | 0) == 1) {
         i23 = i19 + 8 | 0;
         if ((HEAP32[i19 + 16 >> 2] & 32 | 0) == 0) {
          i24 = HEAP16[HEAP32[i23 >> 2] >> 1] | 0;
          if ((i24 & 65535) >>> 0 < 256 >>> 0) {
           i25 = i24 & 255;
          } else {
           break;
          }
         } else {
          i25 = HEAP8[HEAP32[i23 >> 2] | 0] | 0;
         }
         i26 = HEAP32[i18 + 20932 + ((i25 & 255) << 2) >> 2] | 0;
         break L29;
        }
       } while (0);
       i22 = i7 | 0;
       HEAP32[i22 >> 2] = i19;
       i23 = i19 | 0;
       HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
       i23 = __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i18, i7) | 0;
       i24 = HEAP32[i22 >> 2] | 0;
       if ((i24 | 0) == 0) {
        i26 = i23;
        break;
       }
       i22 = i24 | 0;
       i27 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        i26 = i23;
        break;
       } else {
        HEAP32[i22 >> 2] = i27;
        i26 = i23;
        break;
       }
      }
     } while (0);
     if ((i20 | 0) == 22) {
      i26 = HEAP32[i18 + 20892 >> 2] | 0;
     }
     i23 = i12 | 0;
     if ((i26 | 0) == 0) {
      i28 = 0;
     } else {
      i27 = i26;
      i22 = (i27 & -65536) + 1060 | 0;
      i24 = i22 | 0;
      i29 = HEAP32[i24 >> 2] | 0;
      if ((i29 | 0) == 0) {
       i30 = __ZN3JSC7WeakSet13findAllocatorEv(i22) | 0;
      } else {
       i30 = i29;
      }
      HEAP32[i24 >> 2] = HEAP32[i30 >> 2];
      i24 = i30;
      HEAP32[i24 >> 2] = i27;
      HEAP32[i24 + 4 >> 2] = -5;
      HEAP32[i30 + 8 >> 2] = 0;
      HEAP32[i30 + 12 >> 2] = 0;
      i28 = i30;
     }
     i24 = i8 | 0;
     HEAP32[i23 >> 2] = 0;
     i27 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i28;
     HEAP32[i24 >> 2] = i27;
     if ((i27 | 0) != 0) {
      __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i24);
     }
     if ((HEAP32[i23 >> 2] | 0) != 0) {
      __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i23);
     }
     if (i21) {
      break;
     }
     i23 = i19 | 0;
     i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i23 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] | 0;
   do {
    if ((i14 | 0) == 0) {
     i31 = 0;
    } else {
     if ((HEAP32[i14 + 8 >> 2] & 3 | 0) != 0) {
      i31 = 0;
      break;
     }
     i31 = HEAP32[i14 >> 2] | 0;
    }
   } while (0);
   HEAP32[i1 + 4 >> 2] = (i31 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i31;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i31 = HEAP32[(HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 20892 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = (i31 | 0) == 0 ? -6 : -5;
 HEAP32[i1 >> 2] = i31;
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL18dataFunctionMatrixENS_24DataFunctionMatrixToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, d16 = +0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 304 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 296 | 0;
 if ((HEAP32[i3 + 32 >> 2] | 0) != 4) {
  i11 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i12 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i11, i3, __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i3) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i12 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 i12 = i3 + 48 | 0;
 i11 = HEAP32[i12 + 4 >> 2] | 0;
 i13 = i6 | 0;
 HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i13 + 4 >> 2] = i11;
 i11 = __ZN7WebCore22toWebGLUniformLocationEN3JSC7JSValueE(i6) | 0;
 do {
  if ((i11 | 0) == 0) {
   if (((HEAP32[i12 + 4 >> 2] | 0) + 4 | 0) >>> 0 < 2 >>> 0) {
    break;
   }
   i6 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i6 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i6;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i12 = i3 + 56 | 0;
 i6 = HEAP32[i12 >> 2] | 0;
 d14 = +HEAPF64[i12 >> 3];
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 do {
  if ((i13 | 0) == -1) {
   i15 = (i6 | 0) != 0;
  } else {
   if (i13 >>> 0 < 4294967289 >>> 0) {
    d16 = d14;
    i12 = d16 > +0;
    i15 = i12 | d16 < +0 & (i12 ^ 1);
    break;
   }
   if ((i13 | 0) == (-2 | 0)) {
    i15 = (i6 | 0) != 0;
    break;
   } else if ((i13 | 0) != (-5 | 0)) {
    i15 = 0;
    break;
   }
   i12 = i6;
   i17 = HEAP32[i12 >> 2] | 0;
   if ((HEAP8[i17 + 52 | 0] | 0) == 5) {
    i15 = __ZNK3JSC8JSString9toBooleanEv(i12) | 0;
    break;
   }
   if ((HEAP8[i17 + 53 | 0] & 1) == 0) {
    i15 = 1;
    break;
   }
   i15 = (HEAP32[i17 + 4 >> 2] | 0) != (HEAP32[(HEAP32[HEAP32[i3 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0);
  }
 } while (0);
 i6 = (HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i6 >> 2] & 0 | 0) == 0 & (HEAP32[i6 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i6 = i3 + 64 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 i17 = i13;
 L28 : do {
  if ((i13 & 0 | 0) == 0 & (HEAP32[i6 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i12 = i17;
   i18 = __ZN3JSC24getFloat32ArrayClassInfoEv() | 0;
   if ((HEAP32[(i17 & -65536) + 1048 >> 2] | 0) == 2) {
    i19 = i12 + 8 | 0;
   } else {
    i19 = (HEAP32[i12 >> 2] | 0) + 32 | 0;
   }
   i12 = HEAP32[i19 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i20 = 26;
    break;
   } else {
    i21 = i12;
   }
   while (1) {
    if ((i21 | 0) == (i18 | 0)) {
     break;
    }
    i12 = HEAP32[i21 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i20 = 26;
     break L28;
    } else {
     i21 = i12;
    }
   }
   if ((i17 | 0) == 0) {
    i20 = 26;
    break;
   }
   __ZN3JSC23JSGenericTypedArrayViewINS_14Float32AdaptorEE9typedImplEv(i7, i17);
   i18 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   i12 = (i18 | 0) == 0;
   if (i12) {
    break;
   }
   if ((i2 | 0) == 1) {
    __ZN7WebCore21WebGLRenderingContext16uniformMatrix3fvEPKNS_20WebGLUniformLocationEhPN3JSC21GenericTypedArrayViewINS4_14Float32AdaptorEEERi(i4, i11, i15 & 1, i18, i8);
   } else if ((i2 | 0) == 0) {
    __ZN7WebCore21WebGLRenderingContext16uniformMatrix2fvEPKNS_20WebGLUniformLocationEhPN3JSC21GenericTypedArrayViewINS4_14Float32AdaptorEEERi(i4, i11, i15 & 1, i18, i8);
   } else if ((i2 | 0) == 2) {
    __ZN7WebCore21WebGLRenderingContext16uniformMatrix4fvEPKNS_20WebGLUniformLocationEhPN3JSC21GenericTypedArrayViewINS4_14Float32AdaptorEEERi(i4, i11, i15 & 1, i18, i8);
   }
   __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i8 >> 2] | 0);
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
   if (i12) {
    STACKTOP = i5;
    return;
   }
   i12 = i18 + 4 | 0;
   i18 = i12 | 0;
   i22 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i18 >> 2] = i22;
    STACKTOP = i5;
    return;
   }
   i22 = i12 - 4 | 0;
   if ((i22 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 12 >> 2] & 15](i22);
   STACKTOP = i5;
   return;
  } else {
   i20 = 26;
  }
 } while (0);
 if ((i20 | 0) == 26) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i8 >> 2] = 0;
 }
 i7 = i9 + 12 | 0;
 i20 = i9 | 0;
 HEAP32[i20 >> 2] = i7;
 i17 = i9 + 4 | 0;
 HEAP32[i17 >> 2] = 64;
 i21 = i9 + 8 | 0;
 HEAP32[i21 >> 2] = 0;
 i19 = HEAP32[i6 + 4 >> 2] | 0;
 i13 = i10 | 0;
 HEAP32[i13 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i13 + 4 >> 2] = i19;
 if (__ZN7WebCore8toVectorIfLj64EEEbPN3JSC9ExecStateENS1_7JSValueERN3WTF6VectorIT_XT0_ENS5_15CrashOnOverflowEEE(i3, i10, i9) | 0) {
  if ((i2 | 0) == 2) {
   __ZN7WebCore21WebGLRenderingContext16uniformMatrix4fvEPKNS_20WebGLUniformLocationEhPfiRi(i4, i11, i15 & 1, HEAP32[i20 >> 2] | 0, HEAP32[i21 >> 2] | 0, i8);
  } else if ((i2 | 0) == 0) {
   __ZN7WebCore21WebGLRenderingContext16uniformMatrix2fvEPKNS_20WebGLUniformLocationEhPfiRi(i4, i11, i15 & 1, HEAP32[i20 >> 2] | 0, HEAP32[i21 >> 2] | 0, i8);
  } else if ((i2 | 0) == 1) {
   __ZN7WebCore21WebGLRenderingContext16uniformMatrix3fvEPKNS_20WebGLUniformLocationEhPfiRi(i4, i11, i15 & 1, HEAP32[i20 >> 2] | 0, HEAP32[i21 >> 2] | 0, i8);
  }
  __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i8 >> 2] | 0);
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
 } else {
  i8 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i3) | 0;
  HEAP32[i1 + 4 >> 2] = (i8 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i8;
 }
 if ((HEAP32[i21 >> 2] | 0) != 0) {
  HEAP32[i21 >> 2] = 0;
 }
 i21 = HEAP32[i20 >> 2] | 0;
 if ((i7 | 0) == (i21 | 0) | (i21 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i20 >> 2] = 0;
 HEAP32[i17 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i21);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12WebGLGetInfoaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP8[i1 + 8 | 0] = HEAP8[i2 + 8 | 0] & 1;
 __ZN3WTF6VectorIbLj0ENS_15CrashOnOverflowEEaSERKS2_(i1 + 12 | 0, i2 + 12 | 0) | 0;
 HEAPF32[i1 + 24 >> 2] = +HEAPF32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 32 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 i5 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 40 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i3 = HEAP32[i2 + 44 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = i3 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i1 + 44 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i6 = i3 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i6 >> 2] = i4;
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 15](i4);
  }
 } while (0);
 i5 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 48 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i3 = HEAP32[i2 + 52 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = i3 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i1 + 52 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i6 = i3 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i6 >> 2] = i4;
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 15](i4);
  }
 } while (0);
 i5 = HEAP32[i2 + 56 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 56 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i3 = HEAP32[i2 + 60 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = i3 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i1 + 60 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i6 = i3 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i6 >> 2] = i4;
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 i5 = HEAP32[i2 + 64 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 64 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i3 = HEAP32[i2 + 68 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = i3 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i1 + 68 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i6 = i3 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i6 >> 2] = i4;
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 15](i4);
  }
 } while (0);
 i5 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 72 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 15](i6);
  }
 } while (0);
 i3 = HEAP32[i2 + 76 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i1 + 76 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i6 | 0) == 0) {
  return i1 | 0;
 }
 i3 = i6 + 4 | 0;
 i6 = i3 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i6 >> 2] = i2;
  return i1 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  return i1 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
 return i1 | 0;
}
function __ZN7WebCore23JSWebGLRenderingContext18getAttachedShadersEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 136 | 0;
 if ((HEAP32[i3 + 32 >> 2] | 0) == 1) {
  i13 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i14 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i13, i3, __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i3) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i14 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i14;
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = 0;
 i14 = HEAP32[i2 + 12 >> 2] | 0;
 i13 = i3 + 48 | 0;
 i15 = HEAP32[i13 + 4 >> 2] | 0;
 i16 = i9 | 0;
 HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i16 + 4 >> 2] = i15;
 i15 = __ZN7WebCore14toWebGLProgramEN3JSC7JSValueE(i9) | 0;
 do {
  if ((i15 | 0) == 0) {
   if (((HEAP32[i13 + 4 >> 2] | 0) + 4 | 0) >>> 0 < 2 >>> 0) {
    break;
   }
   i9 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i9 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i13 = i10 | 0;
 HEAP32[i13 >> 2] = 0;
 i9 = i10 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i16 = i10 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = __ZN7WebCore21WebGLRenderingContext18getAttachedShadersEPNS_12WebGLProgramERN3WTF6VectorINS3_6RefPtrINS_11WebGLShaderEEELj0ENS3_15CrashOnOverflowEEERi(i14, i15, i10, i8) | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   if (!i17) {
    HEAP32[i1 + 4 >> 2] = -3;
    HEAP32[i1 >> 2] = 0;
    break;
   }
   i8 = i11 | 0;
   HEAP32[i8 >> 2] = 0;
   i15 = i11 + 4 | 0;
   HEAP32[i15 >> 2] = 8;
   i14 = i11 + 72 | 0;
   i18 = i11 + 8 | 0;
   HEAP32[i14 >> 2] = i18;
   i19 = i11 + 76 | 0;
   HEAP32[i19 >> 2] = 0;
   i20 = i2 | 0;
   i21 = HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0;
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    i22 = i21;
    i23 = i18;
    i24 = 0;
   } else {
    i18 = i12 | 0;
    i25 = i5 | 0;
    i26 = 0;
    i27 = i21;
    while (1) {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_11WebGLShaderE(i12, i3, i27, HEAP32[(HEAP32[i13 >> 2] | 0) + (i26 << 2) >> 2] | 0);
     i21 = HEAP32[i18 >> 2] | 0;
     i28 = HEAP32[i18 + 4 >> 2] | 0;
     i29 = HEAP32[i8 >> 2] | 0;
     if ((i29 | 0) < (HEAP32[i15 >> 2] | 0)) {
      i30 = (HEAP32[i14 >> 2] | 0) + (i29 << 3) | 0;
      HEAP32[i30 >> 2] = i21;
      HEAP32[i30 + 4 >> 2] = i28;
      HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
     } else {
      HEAP32[i25 >> 2] = i21;
      HEAP32[i25 + 4 >> 2] = i28;
      __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i11, i5);
     }
     i26 = i26 + 1 | 0;
     i27 = HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0;
     if (i26 >>> 0 >= (HEAP32[i16 >> 2] | 0) >>> 0) {
      break;
     }
    }
    i22 = i27;
    i23 = HEAP32[i14 >> 2] | 0;
    i24 = HEAP32[i8 >> 2] | 0;
   }
   i26 = i23;
   i20 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
   i25 = __ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj(i20, HEAP32[i22 + 244 >> 2] | 0, i24) | 0;
   if ((i25 | 0) == 0) {
    _WTFCrash();
   }
   if ((i24 | 0) != 0) {
    i18 = i25 | 0;
    i28 = i6 | 0;
    i21 = i6 + 4 | 0;
    i30 = i6;
    i29 = 0;
    while (1) {
     if ((i24 | 0) > (i29 | 0)) {
      i31 = i26 + (i29 << 3) | 0;
      i32 = HEAP32[i31 + 4 >> 2] | 0;
      HEAP32[i28 >> 2] = HEAP32[i31 >> 2];
      HEAP32[i28 + 4 >> 2] = i32;
     } else {
      HEAP32[i21 >> 2] = -4;
      HEAP32[i30 >> 2] = 0;
     }
     __ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE(i18, i20, i29, i6);
     i29 = i29 + 1 | 0;
     if (i29 >>> 0 >= i24 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 + 4 >> 2] = -5;
   HEAP32[i1 >> 2] = i25;
   i29 = HEAP32[i19 >> 2] | 0;
   if ((i29 | 0) != 0) {
    HEAP32[i7 >> 2] = i11;
    __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i29, i7) | 0;
   }
   if ((HEAP32[i15 >> 2] | 0) == 8) {
    break;
   }
   i29 = HEAP32[i14 >> 2] | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   __ZdaPv(i29);
  } else {
   __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, i10);
   HEAP32[i1 + 4 >> 2] = -3;
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 i1 = HEAP32[i16 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i10 = HEAP32[i13 >> 2] | 0;
  i3 = i10 + (i1 << 2) | 0;
  i1 = i10;
  while (1) {
   i10 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i7 = i10 + 4 | 0;
     i11 = i7 | 0;
     i24 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) != 0) {
      HEAP32[i11 >> 2] = i24;
      break;
     }
     i24 = i7 - 4 | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 15](i24);
    }
   } while (0);
   i1 = i1 + 4 | 0;
   if ((i1 | 0) == (i3 | 0)) {
    break;
   }
  }
  HEAP32[i16 >> 2] = 0;
 }
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i13 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i16);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL13dataFunctioniENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 304 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 296 | 0;
 if ((HEAP32[i3 + 32 >> 2] | 0) != 3) {
  i11 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i12 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i11, i3, __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i3) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i12 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 i12 = i3 + 48 | 0;
 i11 = HEAP32[i12 + 4 >> 2] | 0;
 i13 = i6 | 0;
 HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i13 + 4 >> 2] = i11;
 i11 = __ZN7WebCore22toWebGLUniformLocationEN3JSC7JSValueE(i6) | 0;
 do {
  if ((i11 | 0) == 0) {
   if (((HEAP32[i12 + 4 >> 2] | 0) + 4 | 0) >>> 0 < 2 >>> 0) {
    break;
   }
   i6 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i6 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i6;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i12 = i3 + 56 | 0;
 i6 = HEAP32[i12 >> 2] | 0;
 i13 = i6;
 L10 : do {
  if ((i6 & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i14 = i13;
   i15 = __ZN3JSC22getInt32ArrayClassInfoEv() | 0;
   if ((HEAP32[(i13 & -65536) + 1048 >> 2] | 0) == 2) {
    i16 = i14 + 8 | 0;
   } else {
    i16 = (HEAP32[i14 >> 2] | 0) + 32 | 0;
   }
   i14 = HEAP32[i16 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i17 = 14;
    break;
   } else {
    i18 = i14;
   }
   while (1) {
    if ((i18 | 0) == (i15 | 0)) {
     break;
    }
    i14 = HEAP32[i18 + 4 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i17 = 14;
     break L10;
    } else {
     i18 = i14;
    }
   }
   if ((i13 | 0) == 0) {
    i17 = 14;
    break;
   }
   __ZN3JSC23JSGenericTypedArrayViewINS_12Int32AdaptorEE9typedImplEv(i7, i13);
   i15 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   if ((i15 | 0) == 0) {
    break;
   }
   if ((i2 | 0) == 2) {
    __ZN7WebCore21WebGLRenderingContext10uniform3ivEPKNS_20WebGLUniformLocationEPN3JSC21GenericTypedArrayViewINS4_12Int32AdaptorEEERi(i4, i11, i15, i8);
   } else if ((i2 | 0) == 3) {
    __ZN7WebCore21WebGLRenderingContext10uniform4ivEPKNS_20WebGLUniformLocationEPN3JSC21GenericTypedArrayViewINS4_12Int32AdaptorEEERi(i4, i11, i15, i8);
   } else if ((i2 | 0) == 0) {
    __ZN7WebCore21WebGLRenderingContext10uniform1ivEPKNS_20WebGLUniformLocationEPN3JSC21GenericTypedArrayViewINS4_12Int32AdaptorEEERi(i4, i11, i15, i8);
   } else if ((i2 | 0) == 1) {
    __ZN7WebCore21WebGLRenderingContext10uniform2ivEPKNS_20WebGLUniformLocationEPN3JSC21GenericTypedArrayViewINS4_12Int32AdaptorEEERi(i4, i11, i15, i8);
   }
   __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i8 >> 2] | 0);
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
   i14 = i15 + 4 | 0;
   i15 = i14 | 0;
   i19 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i15 >> 2] = i19;
    STACKTOP = i5;
    return;
   }
   i19 = i14 - 4 | 0;
   if ((i19 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 12 >> 2] & 15](i19);
   STACKTOP = i5;
   return;
  } else {
   i17 = 14;
  }
 } while (0);
 if ((i17 | 0) == 14) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i8 >> 2] = 0;
 }
 i7 = i9 + 12 | 0;
 i17 = i9 | 0;
 HEAP32[i17 >> 2] = i7;
 i13 = i9 + 4 | 0;
 HEAP32[i13 >> 2] = 64;
 i18 = i9 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 i16 = HEAP32[i12 + 4 >> 2] | 0;
 i6 = i10 | 0;
 HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i6 + 4 >> 2] = i16;
 if (__ZN7WebCore8toVectorIiLj64EEEbPN3JSC9ExecStateENS1_7JSValueERN3WTF6VectorIT_XT0_ENS5_15CrashOnOverflowEEE(i3, i10, i9) | 0) {
  if ((i2 | 0) == 1) {
   __ZN7WebCore21WebGLRenderingContext10uniform2ivEPKNS_20WebGLUniformLocationEPiiRi(i4, i11, HEAP32[i17 >> 2] | 0, HEAP32[i18 >> 2] | 0, i8);
  } else if ((i2 | 0) == 2) {
   __ZN7WebCore21WebGLRenderingContext10uniform3ivEPKNS_20WebGLUniformLocationEPiiRi(i4, i11, HEAP32[i17 >> 2] | 0, HEAP32[i18 >> 2] | 0, i8);
  } else if ((i2 | 0) == 3) {
   __ZN7WebCore21WebGLRenderingContext10uniform4ivEPKNS_20WebGLUniformLocationEPiiRi(i4, i11, HEAP32[i17 >> 2] | 0, HEAP32[i18 >> 2] | 0, i8);
  } else if ((i2 | 0) == 0) {
   __ZN7WebCore21WebGLRenderingContext10uniform1ivEPKNS_20WebGLUniformLocationEPiiRi(i4, i11, HEAP32[i17 >> 2] | 0, HEAP32[i18 >> 2] | 0, i8);
  }
  __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i8 >> 2] | 0);
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
 } else {
  i8 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i3) | 0;
  HEAP32[i1 + 4 >> 2] = (i8 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i8;
 }
 if ((HEAP32[i18 >> 2] | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i7 | 0) == (i18 | 0) | (i18 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i17 >> 2] = 0;
 HEAP32[i13 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext12getExtensionEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((HEAP32[i3 + 32 >> 2] | 0) == 1) {
  i7 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i8 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i7, i3, __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i3) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i8 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
 i8 = HEAP32[i2 + 12 >> 2] | 0;
 i7 = i3 + 48 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i7 + 4 >> 2] | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i9;
 HEAP32[i7 + 4 >> 2] = i10;
 i7 = i9;
 do {
  if ((i9 & 0 | 0) == 0 & (i10 & -1 | 0) == (-5 | 0)) {
   if ((HEAP8[(HEAP32[i7 >> 2] | 0) + 52 | 0] | 0) != 5) {
    i11 = 6;
    break;
   }
   i12 = i7;
  } else {
   i11 = 6;
  }
 } while (0);
 if ((i11 | 0) == 6) {
  i12 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i6, i3) | 0;
 }
 i6 = i12 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i12, i3);
  i12 = HEAP32[i6 >> 2] | 0;
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i12;
  if ((i12 | 0) == 0) {
   i13 = i6;
  } else {
   i14 = i12;
   i15 = i6;
   i11 = 10;
  }
 } else {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i7;
  i14 = i7;
  i15 = i6;
  i11 = 10;
 }
 if ((i11 | 0) == 10) {
  i11 = i14 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
  i13 = i15;
 }
 i15 = (HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 L17 : do {
  if ((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
   i11 = __ZN7WebCore21WebGLRenderingContext12getExtensionERKN3WTF6StringE(i8, i5) | 0;
   i14 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
   if ((i11 | 0) == 0) {
    HEAP32[i1 + 4 >> 2] = -3;
    HEAP32[i1 >> 2] = 0;
    break;
   }
   switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 15](i11) | 0) {
   case 0:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_16WebGLLoseContextE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 1:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_14EXTDrawBuffersE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 2:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_27EXTTextureFilterAnisotropicE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 6:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_22OESStandardDerivativesE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 3:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_15OESTextureFloatE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 4:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_21OESTextureFloatLinearE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 5:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_19OESTextureHalfFloatE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 7:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_20OESVertexArrayObjectE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 12:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_19OESElementIndexUintE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 8:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_22WebGLDebugRendererInfoE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 9:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_17WebGLDebugShadersE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 13:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_25WebGLCompressedTextureATCE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 14:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_27WebGLCompressedTexturePVRTCE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 10:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_26WebGLCompressedTextureS3TCE(i1, i3, i14, i11);
     break L17;
     break;
    }
   case 11:
    {
     __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_17WebGLDepthTextureE(i1, i3, i14, i11);
     break L17;
     break;
    }
   default:
    {
     HEAP32[i1 + 4 >> 2] = -3;
     HEAP32[i1 >> 2] = 0;
     break L17;
    }
   }
  } else {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 i1 = HEAP32[i13 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = i1 | 0;
 i3 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i13 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = (i2 | 0) == 0;
 i15 = i13 + 16 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i13 + 20 | 0;
 HEAP32[i16 >> 2] = -1;
 i17 = i13 + 24 | 0;
 HEAP32[i17 >> 2] = (i14 ? 0 : 0) | i2;
 HEAP32[i17 + 4 >> 2] = i14 ? -6 : -5;
 i14 = HEAP32[i4 >> 2] | 0;
 i4 = i3 + 16 | 0;
 i18 = i9 | 0;
 i19 = i11 | 0;
 i20 = i12 | 0;
 i21 = i2;
 while (1) {
  i22 = i21 | 0;
  i2 = HEAP32[i22 >> 2] | 0;
  if ((HEAP8[i2 + 53 | 0] & 32) == 0) {
   i23 = HEAP32[(HEAP32[i4 >> 2] & -65536) + 1076 >> 2] | 0;
   HEAP32[i18 >> 2] = i14;
   i24 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i2, i23, i9, i7, i8) | 0;
   if ((i24 | 0) != -1) {
    i25 = 4;
    break;
   }
   HEAP32[i19 >> 2] = i14;
   if (__ZN3JSC8JSObject22getOwnPropertySlotSlowEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i21, i3, i11, i13) | 0) {
    break;
   }
  } else {
   i23 = HEAP32[i2 >> 2] | 0;
   if ((i23 | 0) != 0) {
    if ((i23 | 0) != (HEAP32[i23 >> 2] | 0)) {
     i25 = 13;
     break;
    }
   }
   i23 = HEAP32[(HEAP32[((HEAP32[(i21 & -65536) + 1048 >> 2] | 0) == 2 ? i21 + 8 | 0 : i2 + 32 | 0) >> 2] | 0) + 52 >> 2] | 0;
   HEAP32[i20 >> 2] = i14;
   if (FUNCTION_TABLE_iiiii[i23 & 1](i21, i3, i12, i13) | 0) {
    break;
   }
  }
  i23 = (HEAP32[i22 >> 2] | 0) + 8 | 0;
  i2 = HEAP32[i23 >> 2] | 0;
  if (!((i2 & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
   i25 = 24;
   break;
  }
  i23 = i2;
  if ((HEAPU8[(HEAP32[i23 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
   i25 = 24;
   break;
  }
  i21 = i23;
 }
 L13 : do {
  if ((i25 | 0) == 13) {
   _WTFCrash();
  } else if ((i25 | 0) == 24) {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  } else if ((i25 | 0) == 4) {
   if ((i24 | 0) < 100) {
    i26 = i21 + (i24 + 1 << 3) | 0;
   } else {
    i26 = (HEAP32[i21 + 4 >> 2] | 0) - 8 + (99 - i24 << 3) | 0;
   }
   i12 = i26 | 0;
   i20 = HEAP32[i12 >> 2] | 0;
   i11 = HEAP32[i12 + 4 >> 2] | 0;
   i12 = i11;
   do {
    if ((HEAP8[(HEAP32[i22 >> 2] | 0) + 58 | 0] & 8) != 0 & ((i12 | 0) == (-5 | 0) & 0 == 0)) {
     if ((HEAP8[(HEAP32[i20 >> 2] | 0) + 52 | 0] | 0) != 8) {
      break;
     }
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i20 & -1;
     HEAP32[i19 + 4 >> 2] = i11 & 0 | -5;
     __ZN3JSC8JSObject22fillGetterPropertySlotERNS_12PropertySlotENS_7JSValueEji(i21, i13, i10, HEAP32[i7 >> 2] | 0, i24);
     break L13;
    }
   } while (0);
   i19 = HEAP32[i7 >> 2] | 0;
   i8 = i13 + 8 | 0;
   HEAP32[i8 >> 2] = i20 & -1;
   HEAP32[i8 + 4 >> 2] = i12 | i11 & 0;
   HEAP32[i13 >> 2] = i19;
   HEAP32[i13 + 32 >> 2] = i21;
   HEAP32[i15 >> 2] = 1;
   HEAP32[i16 >> 2] = i24;
  }
 } while (0);
 i24 = HEAP32[i15 >> 2] | 0;
 if ((i24 | 0) == 1) {
  i15 = i13 + 8 | 0;
  i16 = HEAP32[i15 + 4 >> 2] | 0;
  i21 = i1 | 0;
  HEAP32[i21 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i21 + 4 >> 2] = i16;
  STACKTOP = i5;
  return;
 } else if ((i24 | 0) == 2) {
  __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i13, i3);
  STACKTOP = i5;
  return;
 } else if ((i24 | 0) == 4) {
  i24 = i13 + 8 | 0;
  i16 = HEAP32[i13 + 32 >> 2] | 0;
  i21 = (i16 | 0) == 0;
  i15 = FUNCTION_TABLE_iiiiiii[HEAP32[i24 >> 2] & 1](i3, (i21 ? 0 : 0) | i16, (i21 ? -6 : -5) | 0, HEAP32[i17 >> 2] | 0, HEAP32[i17 + 4 >> 2] | 0, HEAP32[i24 + 4 >> 2] | 0) | 0;
  i24 = i1 | 0;
  HEAP32[i24 >> 2] = i15;
  HEAP32[i24 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 } else {
  i24 = HEAP32[i13 + 8 >> 2] | 0;
  i15 = HEAP32[i13 + 32 >> 2] | 0;
  i13 = (i15 | 0) == 0;
  i21 = HEAP32[i17 >> 2] | 0;
  i16 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i14;
  i14 = FUNCTION_TABLE_iiiiiii[i24 & 1](i3, (i13 ? 0 : 0) | i15, (i13 ? -6 : -5) | 0, i21, i16, i6) | 0;
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i14;
  HEAP32[i6 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = i10;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 i11 = i9 & i8;
 i13 = i12 + (i11 << 3) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = i13;
   i16 = i10;
  } else {
   i17 = (i9 >>> 23) + ~i9 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i11;
   i21 = i13;
   i22 = i14;
   while (1) {
    if ((i22 | 0) == (i10 | 0)) {
     i23 = 8;
     break;
    }
    i24 = (i22 | 0) == -1 ? i21 : i19;
    i25 = (i18 | 0) == 0 ? i17 : i18;
    i26 = i25 + i20 & i8;
    i27 = i12 + (i26 << 3) | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i23 = 10;
     break;
    } else {
     i18 = i25;
     i19 = i24;
     i20 = i26;
     i21 = i27;
     i22 = i28;
    }
   }
   if ((i23 | 0) == 8) {
    i22 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i20 = i1;
    HEAP32[i20 >> 2] = i21;
    HEAP32[i20 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i4;
    return;
   } else if ((i23 | 0) == 10) {
    if ((i24 | 0) == 0) {
     i15 = i27;
     i16 = i10;
     break;
    }
    i22 = i24;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i22 + 4 >> 2] = 0;
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i15 = i24;
    i16 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = i16;
 i16 = i6 | 0;
 i6 = i5 | 0;
 HEAP32[i16 >> 2] = 0;
 i5 = i15 + 4 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i3 | 0) != 0) {
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i6);
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
  }
 } while (0);
 i16 = i2 + 12 | 0;
 i6 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i6;
 i16 = i2 + 4 | 0;
 i3 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i6 << 1 | 0) < (i3 | 0)) {
  i29 = i15;
  i30 = i3;
 } else {
  if ((i3 | 0) == 0) {
   i31 = 8;
  } else {
   i5 = i3 << 1;
   i31 = (i6 * 6 & -1 | 0) < (i5 | 0) ? i3 : i5;
  }
  i5 = __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i31, i15) | 0;
  i29 = i5;
  i30 = HEAP32[i16 >> 2] | 0;
 }
 i16 = (HEAP32[i7 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i16;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext22getSupportedExtensionsEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 120 | 0;
 i11 = HEAP32[i2 + 12 >> 2] | 0;
 if (__ZN7WebCore21WebGLRenderingContext13isContextLostEv(i11) | 0) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore21WebGLRenderingContext22getSupportedExtensionsEv(i8, i11);
 i11 = i9 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i9 + 4 | 0;
 HEAP32[i12 >> 2] = 8;
 i13 = i9 + 72 | 0;
 i14 = i9 + 8 | 0;
 HEAP32[i13 >> 2] = i14;
 i15 = i9 + 76 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i8 + 8 | 0;
 if ((HEAP32[i16 >> 2] | 0) == 0) {
  i17 = i14;
  i18 = 0;
 } else {
  i14 = i8 | 0;
  i19 = i10 | 0;
  i20 = i6 | 0;
  i21 = 0;
  while (1) {
   __ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE(i10, i3, (HEAP32[i14 >> 2] | 0) + (i21 << 2) | 0);
   i22 = HEAP32[i19 >> 2] | 0;
   i23 = HEAP32[i19 + 4 >> 2] | 0;
   i24 = HEAP32[i11 >> 2] | 0;
   if ((i24 | 0) < (HEAP32[i12 >> 2] | 0)) {
    i25 = (HEAP32[i13 >> 2] | 0) + (i24 << 3) | 0;
    HEAP32[i25 >> 2] = i22;
    HEAP32[i25 + 4 >> 2] = i23;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   } else {
    HEAP32[i20 >> 2] = i22;
    HEAP32[i20 + 4 >> 2] = i23;
    __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i9, i6);
   }
   i21 = i21 + 1 | 0;
   if (i21 >>> 0 >= (HEAP32[i16 >> 2] | 0) >>> 0) {
    break;
   }
  }
  i17 = HEAP32[i13 >> 2] | 0;
  i18 = HEAP32[i11 >> 2] | 0;
 }
 i11 = i17;
 i17 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i3 = __ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj(i17, HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 244 >> 2] | 0, i18) | 0;
 if ((i3 | 0) == 0) {
  _WTFCrash();
 }
 if ((i18 | 0) != 0) {
  i2 = i3 | 0;
  i21 = i5 | 0;
  i6 = i5 + 4 | 0;
  i20 = i5;
  i19 = 0;
  while (1) {
   if ((i18 | 0) > (i19 | 0)) {
    i14 = i11 + (i19 << 3) | 0;
    i10 = HEAP32[i14 + 4 >> 2] | 0;
    HEAP32[i21 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i21 + 4 >> 2] = i10;
   } else {
    HEAP32[i6 >> 2] = -4;
    HEAP32[i20 >> 2] = 0;
   }
   __ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE(i2, i17, i19, i5);
   i19 = i19 + 1 | 0;
   if (i19 >>> 0 >= i18 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 + 4 >> 2] = -5;
 HEAP32[i1 >> 2] = i3;
 i3 = HEAP32[i15 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i7 >> 2] = i9;
  __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i3, i7) | 0;
 }
 do {
  if ((HEAP32[i12 >> 2] | 0) != 8) {
   i7 = HEAP32[i13 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZdaPv(i7);
  }
 } while (0);
 i13 = HEAP32[i16 >> 2] | 0;
 i12 = i8 | 0;
 if ((i13 | 0) != 0) {
  i7 = HEAP32[i12 >> 2] | 0;
  i3 = i7 + (i13 << 2) | 0;
  i13 = i7;
  while (1) {
   i7 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i9 = i7 | 0;
     i15 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i9 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i13 = i13 + 4 | 0;
   if ((i13 | 0) == (i3 | 0)) {
    break;
   }
  }
  HEAP32[i16 >> 2] = 0;
 }
 i16 = HEAP32[i12 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i12 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i16);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL18getObjectParameterEPNS_23JSWebGLRenderingContextEPN3JSC9ExecStateENS_10ObjectTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, i19 = 0, d20 = +0, i21 = 0, i22 = 0, i23 = 0, d24 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 424 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 104 | 0;
 i11 = i5 + 184 | 0;
 i12 = i5 + 264 | 0;
 i13 = i5 + 344 | 0;
 if ((HEAP32[i3 + 32 >> 2] | 0) != 3) {
  i14 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i15 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i14, i3, __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i3) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i15 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i15;
  STACKTOP = i5;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 i15 = HEAP32[i2 + 12 >> 2] | 0;
 i14 = i3 + 48 | 0;
 i16 = HEAP32[i14 >> 2] | 0;
 i17 = HEAP32[i14 + 4 >> 2] | 0;
 d18 = +HEAPF64[i14 >> 3];
 i14 = i7 | 0;
 HEAP32[i14 >> 2] = i16;
 HEAP32[i14 + 4 >> 2] = i17;
 i14 = i17;
 if ((i14 | 0) == -1) {
  i19 = i16;
 } else {
  if (i14 >>> 0 < 4294967289 >>> 0) {
   d20 = d18;
  } else {
   d20 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i3);
  }
  i19 = __ZN3JSC7toInt32Ed(d20) | 0;
 }
 i7 = i3 + 16 | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 i16 = (HEAP32[(i14 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i16 >> 2] & 0 | 0) == 0 & (HEAP32[i16 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i16 = i3 + 56 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i21 = HEAP32[i16 + 4 >> 2] | 0;
 d20 = +HEAPF64[i16 >> 3];
 i16 = i8 | 0;
 HEAP32[i16 >> 2] = i17;
 HEAP32[i16 + 4 >> 2] = i21;
 i16 = i21;
 if ((i16 | 0) == -1) {
  i22 = i17;
  i23 = i14;
 } else {
  if (i16 >>> 0 < 4294967289 >>> 0) {
   d24 = d20;
  } else {
   d24 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i3);
  }
  i8 = __ZN3JSC7toInt32Ed(d24) | 0;
  i22 = i8;
  i23 = HEAP32[i7 >> 2] | 0;
 }
 i7 = (HEAP32[(i23 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i7 >> 2] & 0 | 0) == 0 & (HEAP32[i7 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore12WebGLGetInfoC1Ev(i9);
 if ((i4 | 0) == 0) {
  __ZN7WebCore21WebGLRenderingContext18getBufferParameterEjjRi(i10, i15, i19, i22, i6);
  __ZN7WebCore12WebGLGetInfoaSERKS0_(i9, i10) | 0;
  __ZN7WebCore12WebGLGetInfoD1Ev(i10);
 } else if ((i4 | 0) == 1) {
  __ZN7WebCore21WebGLRenderingContext24getRenderbufferParameterEjjRi(i11, i15, i19, i22, i6);
  __ZN7WebCore12WebGLGetInfoaSERKS0_(i9, i11) | 0;
  __ZN7WebCore12WebGLGetInfoD1Ev(i11);
 } else if ((i4 | 0) == 2) {
  __ZN7WebCore21WebGLRenderingContext15getTexParameterEjjRi(i12, i15, i19, i22, i6);
  __ZN7WebCore12WebGLGetInfoaSERKS0_(i9, i12) | 0;
  __ZN7WebCore12WebGLGetInfoD1Ev(i12);
 } else if ((i4 | 0) == 3) {
  __ZN7WebCore21WebGLRenderingContext15getVertexAttribEjjRi(i13, i15, i19, i22, i6);
  __ZN7WebCore12WebGLGetInfoaSERKS0_(i9, i13) | 0;
  __ZN7WebCore12WebGLGetInfoD1Ev(i13);
 }
 i13 = HEAP32[i6 >> 2] | 0;
 if ((i13 | 0) == 0) {
  __ZN7WebCoreL4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectERKNS_12WebGLGetInfoE(i1, i3, HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0, i9);
 } else {
  __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, i13);
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
 }
 __ZN7WebCore12WebGLGetInfoD1Ev(i9);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext33getFramebufferAttachmentParameterEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, d16 = +0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, i21 = 0, i22 = 0, d23 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 if ((HEAP32[i3 + 32 >> 2] | 0) != 4) {
  i10 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i11 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i10, i3, __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i3) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i11 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 i11 = HEAP32[i2 + 12 >> 2] | 0;
 i10 = i3 + 48 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 i13 = HEAP32[i10 + 4 >> 2] | 0;
 d14 = +HEAPF64[i10 >> 3];
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i12;
 HEAP32[i10 + 4 >> 2] = i13;
 i10 = i13;
 if ((i10 | 0) == -1) {
  i15 = i12;
 } else {
  if (i10 >>> 0 < 4294967289 >>> 0) {
   d16 = d14;
  } else {
   d16 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i3);
  }
  i15 = __ZN3JSC7toInt32Ed(d16) | 0;
 }
 i6 = i3 + 16 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 i12 = (HEAP32[(i10 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i12 >> 2] & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i12 = i3 + 56 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i17 = HEAP32[i12 + 4 >> 2] | 0;
 d16 = +HEAPF64[i12 >> 3];
 i12 = i7 | 0;
 HEAP32[i12 >> 2] = i13;
 HEAP32[i12 + 4 >> 2] = i17;
 i12 = i17;
 if ((i12 | 0) == -1) {
  i18 = i13;
  i19 = i10;
 } else {
  if (i12 >>> 0 < 4294967289 >>> 0) {
   d20 = d16;
  } else {
   d20 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i3);
  }
  i7 = __ZN3JSC7toInt32Ed(d20) | 0;
  i18 = i7;
  i19 = HEAP32[i6 >> 2] | 0;
 }
 i7 = (HEAP32[(i19 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i7 >> 2] & 0 | 0) == 0 & (HEAP32[i7 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i7 = i3 + 64 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i7 + 4 >> 2] | 0;
 d20 = +HEAPF64[i7 >> 3];
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = i12;
 HEAP32[i7 + 4 >> 2] = i10;
 i7 = i10;
 if ((i7 | 0) == -1) {
  i21 = i12;
  i22 = i19;
 } else {
  if (i7 >>> 0 < 4294967289 >>> 0) {
   d23 = d20;
  } else {
   d23 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i3);
  }
  i8 = __ZN3JSC7toInt32Ed(d23) | 0;
  i21 = i8;
  i22 = HEAP32[i6 >> 2] | 0;
 }
 i6 = (HEAP32[(i22 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i6 >> 2] & 0 | 0) == 0 & (HEAP32[i6 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore21WebGLRenderingContext33getFramebufferAttachmentParameterEjjjRi(i9, i11, i15, i18, i21, i5);
 i21 = HEAP32[i5 >> 2] | 0;
 if ((i21 | 0) == 0) {
  __ZN7WebCoreL4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectERKNS_12WebGLGetInfoE(i1, i3, HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0, i9);
 } else {
  __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, i21);
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
 }
 __ZN7WebCore12WebGLGetInfoD1Ev(i9);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
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
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    i36 = i13;
   } else {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = i7 + (i37 << 3) + 4 | 0;
    if ((HEAP32[i1 >> 2] | 0) == 0) {
     break;
    }
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore8toVectorIiLj64EEEbPN3JSC9ExecStateENS1_7JSValueERN3WTF6VectorIT_XT0_ENS5_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if ((HEAP32[i2 + 4 >> 2] | 0) != -5) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 if ((HEAPU8[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i9 = HEAP32[i2 >> 2] | 0;
 i2 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] & -65536) + 1076 >> 2] | 0) + 20884 >> 2] | 0) + 568 >> 2];
 __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i6, i9, i1, i5);
 i5 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i5 | 0) == -1) {
  i10 = HEAP32[i6 >> 2] | 0;
 } else {
  if (i5 >>> 0 < 4294967289 >>> 0) {
   d11 = +HEAPF64[i6 >> 3];
  } else {
   d11 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
  }
  i10 = __ZN3JSC7toInt32Ed(d11) | 0;
 }
 if (!(__ZN3WTF6VectorIiLj64ENS_15CrashOnOverflowEE18tryReserveCapacityEj(i3, i10) | 0)) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i6 = i3 + 8 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) >>> 0 < i10 >>> 0) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   if (i5 >>> 0 >= i10 >>> 0) {
    break;
   }
   i12 = i5 + 1 + (i5 >>> 2) | 0;
   i5 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
   __ZN3WTF6VectorIiLj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i3, i5 >>> 0 > i10 >>> 0 ? i5 : i10);
  }
 } while (0);
 HEAP32[i6 >> 2] = i10;
 if ((i10 | 0) <= 0) {
  i8 = 1;
  STACKTOP = i4;
  return i8 | 0;
 }
 i5 = i7 + 4 | 0;
 i12 = i7;
 i13 = i3 | 0;
 i3 = i7;
 i14 = 0;
 while (1) {
  __ZNK3JSC8JSObject3getEPNS_9ExecStateEj(i7, i9, i1, i14);
  i15 = (HEAP32[(HEAP32[i2 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
  if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
   i8 = 0;
   i16 = 26;
   break;
  }
  i15 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i15 | 0) == -1) {
    d17 = +(HEAP32[i12 >> 2] | 0);
   } else {
    if (i15 >>> 0 < 4294967289 >>> 0) {
     d17 = +HEAPF64[i3 >> 3];
     break;
    } else {
     d17 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
     break;
    }
   }
  } while (0);
  if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i14 >>> 0) {
   i16 = 22;
   break;
  }
  HEAP32[(HEAP32[i13 >> 2] | 0) + (i14 << 2) >> 2] = ~~d17;
  i15 = i14 + 1 | 0;
  if ((i15 | 0) < (i10 | 0)) {
   i14 = i15;
  } else {
   i8 = 1;
   i16 = 30;
   break;
  }
 }
 if ((i16 | 0) == 30) {
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i16 | 0) == 26) {
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i16 | 0) == 22) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore8toVectorIfLj64EEEbPN3JSC9ExecStateENS1_7JSValueERN3WTF6VectorIT_XT0_ENS5_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if ((HEAP32[i2 + 4 >> 2] | 0) != -5) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 if ((HEAPU8[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i9 = HEAP32[i2 >> 2] | 0;
 i2 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] & -65536) + 1076 >> 2] | 0) + 20884 >> 2] | 0) + 568 >> 2];
 __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i6, i9, i1, i5);
 i5 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i5 | 0) == -1) {
  i10 = HEAP32[i6 >> 2] | 0;
 } else {
  if (i5 >>> 0 < 4294967289 >>> 0) {
   d11 = +HEAPF64[i6 >> 3];
  } else {
   d11 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i1);
  }
  i10 = __ZN3JSC7toInt32Ed(d11) | 0;
 }
 if (!(__ZN3WTF6VectorIfLj64ENS_15CrashOnOverflowEE18tryReserveCapacityEj(i3, i10) | 0)) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i6 = i3 + 8 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) >>> 0 < i10 >>> 0) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   if (i5 >>> 0 >= i10 >>> 0) {
    break;
   }
   i12 = i5 + 1 + (i5 >>> 2) | 0;
   i5 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
   __ZN3WTF6VectorIfLj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i3, i5 >>> 0 > i10 >>> 0 ? i5 : i10);
  }
 } while (0);
 HEAP32[i6 >> 2] = i10;
 if ((i10 | 0) <= 0) {
  i8 = 1;
  STACKTOP = i4;
  return i8 | 0;
 }
 i5 = i7 + 4 | 0;
 i12 = i7;
 i13 = i3 | 0;
 i3 = i7;
 i14 = 0;
 while (1) {
  __ZNK3JSC8JSObject3getEPNS_9ExecStateEj(i7, i9, i1, i14);
  i15 = (HEAP32[(HEAP32[i2 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
  if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
   i8 = 0;
   i16 = 27;
   break;
  }
  i15 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i15 | 0) == -1) {
    d17 = +(HEAP32[i12 >> 2] | 0);
   } else {
    if (i15 >>> 0 < 4294967289 >>> 0) {
     d17 = +HEAPF64[i3 >> 3];
     break;
    } else {
     d17 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i1);
     break;
    }
   }
  } while (0);
  if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i14 >>> 0) {
   i16 = 22;
   break;
  }
  HEAPF32[(HEAP32[i13 >> 2] | 0) + (i14 << 2) >> 2] = d17;
  i15 = i14 + 1 | 0;
  if ((i15 | 0) < (i10 | 0)) {
   i14 = i15;
  } else {
   i8 = 1;
   i16 = 28;
   break;
  }
 }
 if ((i16 | 0) == 22) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i16 | 0) == 27) {
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i16 | 0) == 28) {
  STACKTOP = i4;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore23JSWebGLRenderingContext18getShaderParameterEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, d19 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 if ((HEAP32[i3 + 32 >> 2] | 0) != 3) {
  i9 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i10 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i9, i3, __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i3) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i10 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 i10 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = i3 + 48 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 i12 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i12;
 L5 : do {
  if ((i9 + 4 | 0) >>> 0 >= 2 >>> 0) {
   i13 = i11;
   do {
    if ((i9 | 0) == -5) {
     i14 = i13;
     if ((HEAP32[(i13 & -65536) + 1048 >> 2] | 0) == 2) {
      i15 = i14 + 8 | 0;
     } else {
      i15 = (HEAP32[i14 >> 2] | 0) + 32 | 0;
     }
     i14 = HEAP32[i15 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     } else {
      i16 = i14;
     }
     while (1) {
      if ((i16 | 0) == (__ZN7WebCore13JSWebGLShader6s_infoE | 0)) {
       break L5;
      }
      i16 = HEAP32[i16 + 4 >> 2] | 0;
      if ((i16 | 0) == 0) {
       break;
      }
     }
    }
   } while (0);
   i13 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i13 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i13;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i16 = i6 | 0;
 HEAP32[i16 >> 2] = i11;
 HEAP32[i16 + 4 >> 2] = i12;
 i12 = __ZN7WebCore13toWebGLShaderEN3JSC7JSValueE(i6) | 0;
 i6 = i3 + 56 | 0;
 i16 = HEAP32[i6 >> 2] | 0;
 i11 = HEAP32[i6 + 4 >> 2] | 0;
 d17 = +HEAPF64[i6 >> 3];
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = i16;
 HEAP32[i6 + 4 >> 2] = i11;
 i6 = i11;
 if ((i6 | 0) == -1) {
  i18 = i16;
 } else {
  if (i6 >>> 0 < 4294967289 >>> 0) {
   d19 = d17;
  } else {
   d19 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i3);
  }
  i18 = __ZN3JSC7toInt32Ed(d19) | 0;
 }
 i7 = (HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i7 >> 2] & 0 | 0) == 0 & (HEAP32[i7 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore21WebGLRenderingContext18getShaderParameterEPNS_11WebGLShaderEjRi(i8, i10, i12, i18, i5);
 i18 = HEAP32[i5 >> 2] | 0;
 if ((i18 | 0) == 0) {
  __ZN7WebCoreL4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectERKNS_12WebGLGetInfoE(i1, i3, HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0, i8);
 } else {
  __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, i18);
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
 }
 __ZN7WebCore12WebGLGetInfoD1Ev(i8);
 STACKTOP = i4;
 return;
}
function __ZNK3JSC8JSObject3getEPNS_9ExecStateEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = (i2 | 0) == 0;
 i10 = i8 + 16 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i8 + 20 >> 2] = -1;
 i11 = i8 + 24 | 0;
 HEAP32[i11 >> 2] = (i9 ? 0 : 0) | i2;
 HEAP32[i11 + 4 >> 2] = i9 ? -6 : -5;
 i9 = i2;
 while (1) {
  i2 = i9 | 0;
  i12 = HEAP32[i2 >> 2] | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) != 0) {
   if ((i13 | 0) != (HEAP32[i13 >> 2] | 0)) {
    i14 = 4;
    break;
   }
  }
  if (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2 ? i9 + 8 | 0 : i12 + 32 | 0) >> 2] | 0) + 56 >> 2] & 1](i9, i3, i4, i8) | 0) {
   i14 = 9;
   break;
  }
  i12 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
  i2 = HEAP32[i12 >> 2] | 0;
  if (!((i2 & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
   i14 = 17;
   break;
  }
  i12 = i2;
  if ((HEAPU8[(HEAP32[i12 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
   i14 = 17;
   break;
  }
  i9 = i12;
 }
 if ((i14 | 0) == 17) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 } else if ((i14 | 0) == 4) {
  _WTFCrash();
 } else if ((i14 | 0) == 9) {
  i14 = HEAP32[i10 >> 2] | 0;
  if ((i14 | 0) == 4) {
   i10 = i8 + 8 | 0;
   i9 = HEAP32[i8 + 32 >> 2] | 0;
   i12 = (i9 | 0) == 0;
   i2 = FUNCTION_TABLE_iiiiiii[HEAP32[i10 >> 2] & 1](i3, (i12 ? 0 : 0) | i9, (i12 ? -6 : -5) | 0, HEAP32[i11 >> 2] | 0, HEAP32[i11 + 4 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0) | 0;
   i10 = i1 | 0;
   HEAP32[i10 >> 2] = i2;
   HEAP32[i10 + 4 >> 2] = tempRet0;
   STACKTOP = i5;
   return;
  } else if ((i14 | 0) == 1) {
   i10 = i8 + 8 | 0;
   i2 = HEAP32[i10 + 4 >> 2] | 0;
   i12 = i1 | 0;
   HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i12 + 4 >> 2] = i2;
   STACKTOP = i5;
   return;
  } else if ((i14 | 0) == 2) {
   __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i8, i3);
   STACKTOP = i5;
   return;
  } else {
   i14 = HEAP32[i8 + 8 >> 2] | 0;
   i2 = HEAP32[i8 + 32 >> 2] | 0;
   i8 = (i2 | 0) == 0;
   i12 = HEAP32[i11 >> 2] | 0;
   i10 = HEAP32[i11 + 4 >> 2] | 0;
   __ZN3JSC10Identifier4fromEPNS_9ExecStateEj(i7, i3, i4);
   i4 = i7 | 0;
   HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
   i7 = FUNCTION_TABLE_iiiiiii[i14 & 1](i3, (i8 ? 0 : 0) | i2, (i8 ? -6 : -5) | 0, i12, i10, i6) | 0;
   i6 = i1 | 0;
   HEAP32[i6 >> 2] = i7;
   HEAP32[i6 + 4 >> 2] = tempRet0;
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i4 = i6 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i4 >> 2] = i7;
    STACKTOP = i5;
    return;
   }
  }
 }
}
function __ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 L1 : do {
  switch (HEAP8[(HEAP32[i1 >> 2] | 0) + 55 | 0] & 31 | 0) {
  case 28:
  case 30:
  case 29:
  case 31:
   {
    i10 = i4 | 0;
    i11 = HEAP32[i10 + 4 >> 2] | 0;
    i12 = (HEAP32[i1 + 4 >> 2] | 0) + 16 + (i3 << 3) | 0;
    HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i12 + 4 >> 2] = i11;
    STACKTOP = i5;
    return;
   }
  case 20:
  case 21:
   {
    if ((HEAP32[i4 + 4 >> 2] | 0) == -1) {
     break L1;
    }
    i11 = i4 | 0;
    i12 = HEAP32[i11 + 4 >> 2] | 0;
    i10 = i7 | 0;
    HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i10 + 4 >> 2] = i12;
    __ZN3JSC8JSObject55convertInt32ToDoubleOrContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i7);
    STACKTOP = i5;
    return;
   }
  case 26:
  case 27:
   {
    break;
   }
  case 3:
   {
    i12 = i4 | 0;
    i10 = HEAP32[i12 + 4 >> 2] | 0;
    i11 = i6 | 0;
    HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i11 + 4 >> 2] = i10;
    __ZN3JSC8JSObject26setIndexQuicklyToUndecidedERNS_2VMEjNS_7JSValueE(i1, i2, i3, i6);
    STACKTOP = i5;
    return;
   }
  case 22:
  case 23:
   {
    i10 = HEAP32[i4 + 4 >> 2] | 0;
    i11 = (i10 | 0) == -1;
    if (!(i11 | i10 >>> 0 < 4294967289 >>> 0)) {
     i10 = i4 | 0;
     i12 = HEAP32[i10 + 4 >> 2] | 0;
     i13 = i8 | 0;
     HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i13 + 4 >> 2] = i12;
     __ZN3JSC8JSObject48convertDoubleToContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i8);
     STACKTOP = i5;
     return;
    }
    if (i11) {
     d14 = +(HEAP32[i4 >> 2] | 0);
    } else {
     d14 = +HEAPF64[i4 >> 3];
    }
    if (d14 != d14 | (tempDouble = +0, tempDouble != tempDouble)) {
     i11 = i4 | 0;
     i12 = HEAP32[i11 + 4 >> 2] | 0;
     i13 = i9 | 0;
     HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i13 + 4 >> 2] = i12;
     __ZN3JSC8JSObject48convertDoubleToContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i9);
     STACKTOP = i5;
     return;
    } else {
     HEAPF64[(HEAP32[i1 + 4 >> 2] | 0) + (i3 << 3) >> 3] = d14;
     STACKTOP = i5;
     return;
    }
    break;
   }
  default:
   {
    _WTFCrash();
   }
  }
 } while (0);
 i9 = i4 | 0;
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 i2 = (HEAP32[i1 + 4 >> 2] | 0) + (i3 << 3) | 0;
 HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 8) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 9) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  i13 = __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_(i1, i2) {
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
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
  i5 = i7 + (i11 << 2) | 0;
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
   i19 = i16 + (i14 << 2) | 0;
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
      i34 = i16 + (i33 << 2) | 0;
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
   HEAP32[i30 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i3 >>> 0 > 4 >>> 0 ? i3 : 4;
 if (i9 >>> 0 > 268435456 >>> 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 i11 = i2 + 55 | 0;
 i12 = i9 << 3;
 do {
  if (((HEAP8[i11] & 30) - 28 & 255) >>> 0 < 3 >>> 0) {
   i13 = i12 + 24 | 0;
   i14 = i1 + 19600 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   do {
    if (i15 >>> 0 < i13 >>> 0) {
     __ZN3JSC11CopiedSpace19tryAllocateSlowCaseEjPPv(i8, i1 + 19596 | 0, i13, i7);
     if ((HEAP8[i8 | 0] & 1) == 0) {
      i10 = 0;
     } else {
      break;
     }
     STACKTOP = i4;
     return i10 | 0;
    } else {
     HEAP32[i14 >> 2] = i15 - i13;
     HEAP32[i7 >> 2] = (HEAP32[i1 + 19604 >> 2] | 0) + (-i15 | 0);
     HEAP8[i8 | 0] = 1;
    }
   } while (0);
   i15 = HEAP32[i7 >> 2] | 0;
   i13 = i15 + 8 | 0;
   i14 = i15;
   HEAP32[i14 >> 2] = i3;
   HEAP32[i14 + 4 >> 2] = i9;
   HEAP32[i15 + 12 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i15 + 16 >> 2] = i3;
   i16 = i13;
  } else {
   i13 = i12 + 8 | 0;
   i15 = i1 + 19600 | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if (i14 >>> 0 < i13 >>> 0) {
     __ZN3JSC11CopiedSpace19tryAllocateSlowCaseEjPPv(i6, i1 + 19596 | 0, i13, i5);
     if ((HEAP8[i6 | 0] & 1) == 0) {
      i10 = 0;
     } else {
      break;
     }
     STACKTOP = i4;
     return i10 | 0;
    } else {
     HEAP32[i15 >> 2] = i14 - i13;
     HEAP32[i5 >> 2] = (HEAP32[i1 + 19604 >> 2] | 0) + (-i14 | 0);
     HEAP8[i6 | 0] = 1;
    }
   } while (0);
   i14 = HEAP32[i5 >> 2] | 0;
   i13 = i14 + 8 | 0;
   i15 = i13;
   HEAP32[i14 + 4 >> 2] = i9;
   HEAP32[i14 >> 2] = i3;
   if (!((HEAP8[i11] & 30) == 22 & i9 >>> 0 > i3 >>> 0)) {
    i16 = i15;
    break;
   }
   i14 = i13;
   i13 = i3;
   while (1) {
    HEAPF64[i14 + (i13 << 3) >> 3] = +NaN;
    i17 = i13 + 1 | 0;
    if (i17 >>> 0 < i9 >>> 0) {
     i13 = i17;
    } else {
     i16 = i15;
     break;
    }
   }
  }
 } while (0);
 i9 = i1 + 13176 | 0;
 i1 = i9 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i18 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i9, 8) | 0;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  i18 = i3;
 }
 HEAP32[i18 >> 2] = i2;
 HEAP32[i18 + 4 >> 2] = i16;
 i10 = i18;
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i3 = i1 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i4 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 i4 = (i5 | 0) / 2 & -1;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i4 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i4 << 2) | 0;
 if ((i5 | 0) != 0) {
  i4 = 0;
  while (1) {
   i1 = HEAP32[i7 + (i4 << 2) >> 2] | 0;
   i8 = i1;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    i9 = HEAP32[i6 >> 2] | 0;
    i10 = HEAP32[i3 >> 2] | 0;
    i11 = i8 + ~(i8 << 15) | 0;
    i8 = (i11 >>> 10 ^ i11) * 9 & -1;
    i11 = i8 >>> 6 ^ i8;
    i8 = i11 + ~(i11 << 11) | 0;
    i11 = i8 >>> 16 ^ i8;
    i8 = i10 & i11;
    i12 = i9 + (i8 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    L9 : do {
     if ((i13 | 0) == 0) {
      i14 = 0;
      i15 = i12;
      i16 = 6;
     } else {
      i17 = (i11 >>> 23) + ~i11 | 0;
      i18 = i17 << 12 ^ i17;
      i17 = i18 >>> 7 ^ i18;
      i18 = i17 << 2 ^ i17;
      i17 = i18 >>> 20 ^ i18 | 1;
      i18 = 0;
      i19 = 0;
      i20 = i8;
      i21 = i12;
      i22 = i13;
      while (1) {
       if ((i22 | 0) == (i1 | 0)) {
        i23 = i21;
        break L9;
       }
       i24 = (i22 | 0) == -1 ? i21 : i18;
       i25 = (i19 | 0) == 0 ? i17 : i19;
       i26 = i25 + i20 & i10;
       i27 = i9 + (i26 << 2) | 0;
       i28 = HEAP32[i27 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i14 = i24;
        i15 = i27;
        i16 = 6;
        break;
       } else {
        i18 = i24;
        i19 = i25;
        i20 = i26;
        i21 = i27;
        i22 = i28;
       }
      }
     }
    } while (0);
    if ((i16 | 0) == 6) {
     i16 = 0;
     i23 = (i14 | 0) != 0 ? i14 : i15;
    }
    HEAP32[i23 >> 2] = i1;
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext19getProgramParameterEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, d15 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 if ((HEAP32[i3 + 32 >> 2] | 0) != 3) {
  i9 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i10 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i9, i3, __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i3) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i10 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 i10 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = i3 + 48 | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i12 + 4 >> 2] = i11;
 i11 = __ZN7WebCore14toWebGLProgramEN3JSC7JSValueE(i6) | 0;
 do {
  if ((i11 | 0) == 0) {
   if (((HEAP32[i9 + 4 >> 2] | 0) + 4 | 0) >>> 0 < 2 >>> 0) {
    break;
   }
   i6 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i6 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i6;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i9 = i3 + 56 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 i12 = HEAP32[i9 + 4 >> 2] | 0;
 d13 = +HEAPF64[i9 >> 3];
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i6;
 HEAP32[i9 + 4 >> 2] = i12;
 i9 = i12;
 if ((i9 | 0) == -1) {
  i14 = i6;
 } else {
  if (i9 >>> 0 < 4294967289 >>> 0) {
   d15 = d13;
  } else {
   d15 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i7, i3);
  }
  i14 = __ZN3JSC7toInt32Ed(d15) | 0;
 }
 i7 = (HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i7 >> 2] & 0 | 0) == 0 & (HEAP32[i7 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore21WebGLRenderingContext19getProgramParameterEPNS_12WebGLProgramEjRi(i8, i10, i11, i14, i5);
 i14 = HEAP32[i5 >> 2] | 0;
 if ((i14 | 0) == 0) {
  __ZN7WebCoreL4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectERKNS_12WebGLGetInfoE(i1, i3, HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0, i8);
 } else {
  __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, i14);
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
 }
 __ZN7WebCore12WebGLGetInfoD1Ev(i8);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext10getUniformEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 if ((HEAP32[i3 + 32 >> 2] | 0) != 3) {
  i9 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i10 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i9, i3, __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i3) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i10 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 i10 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = i3 + 48 | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i12 + 4 >> 2] = i11;
 i11 = __ZN7WebCore14toWebGLProgramEN3JSC7JSValueE(i6) | 0;
 do {
  if ((i11 | 0) == 0) {
   if (((HEAP32[i9 + 4 >> 2] | 0) + 4 | 0) >>> 0 < 2 >>> 0) {
    break;
   }
   i6 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i6 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i6;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i9 = i3 + 56 | 0;
 i6 = HEAP32[i9 + 4 >> 2] | 0;
 i12 = i7 | 0;
 HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i12 + 4 >> 2] = i6;
 i6 = __ZN7WebCore22toWebGLUniformLocationEN3JSC7JSValueE(i7) | 0;
 do {
  if ((i6 | 0) == 0) {
   if (((HEAP32[i9 + 4 >> 2] | 0) + 4 | 0) >>> 0 < 2 >>> 0) {
    break;
   }
   i7 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i3) | 0;
   HEAP32[i1 + 4 >> 2] = (i7 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i7;
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore21WebGLRenderingContext10getUniformEPNS_12WebGLProgramEPKNS_20WebGLUniformLocationERi(i8, i10, i11, i6, i5);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCoreL4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectERKNS_12WebGLGetInfoE(i1, i3, HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0, i8);
 } else {
  __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, i6);
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
 }
 __ZN7WebCore12WebGLGetInfoD1Ev(i8);
 STACKTOP = i4;
 return;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_14Float32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_12Int32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
    i9 = 3;
    break;
   }
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i8;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   i12 = i8;
   i13 = i11;
   i14 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i9 | 0) == 3) {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = 0;
  i12 = 0;
  i13 = i9;
  i14 = 1;
  i15 = i3;
 }
 i3 = HEAP32[i15 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i18 = 0;
   } else {
    i18 = HEAP32[i15 + 12 >> 2] & 2147483647;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = HEAP32[i15 + 20 >> 2] | 0;
   i17 = i18;
  }
 } while (0);
 __ZN3JSC17JSArrayBufferView19ConstructionContextC1ERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i5, i1, i2, i6, i17, i16);
 i16 = HEAP32[i13 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i16 | 0);
 }
 i16 = i1 + 13264 | 0;
 i13 = i16 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i16, 20) | 0;
 } else {
  HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
  i19 = i17;
 }
 HEAP32[i19 >> 2] = 0;
 i17 = i19;
 i13 = i19;
 __ZN3JSC17JSArrayBufferViewC2ERNS_2VMERNS0_19ConstructionContextE(i13, i1, i5);
 __ZN3JSC17JSArrayBufferView14finishCreationERNS_2VME(i13, i1);
 if (i14) {
  STACKTOP = i4;
  return i17 | 0;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i12 | 0);
 STACKTOP = i4;
 return i17 | 0;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_14Float32AdaptorEE9typedImplEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i6 = i2 + 16 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 2) {
  i8 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) - 8 >> 2] | 0;
 } else if ((i7 | 0) == 3) {
  i8 = HEAP32[i2 + 20 >> 2] | 0;
 } else {
  i7 = i2 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    if ((i10 | 0) == (HEAP32[i10 >> 2] | 0)) {
     break;
    }
    _WTFCrash();
   }
  } while (0);
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2 ? i7 + 8 | 0 : i9 + 32 | 0) >> 2] | 0) + 92 >> 2] & 15](i5) | 0;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) > 1) {
  i6 = HEAP32[i2 + 8 >> 2] | 0;
  if ((i7 | 0) == 3) {
   i11 = HEAP32[i2 + 20 >> 2] | 0;
  } else if ((i7 | 0) == 2) {
   i11 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) - 8 >> 2] | 0;
  } else {
   i7 = i2 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     if ((i10 | 0) == (HEAP32[i10 >> 2] | 0)) {
      break;
     }
     _WTFCrash();
    }
   } while (0);
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2 ? i7 + 8 | 0 : i8 + 32 | 0) >> 2] | 0) + 92 >> 2] & 15](i5) | 0;
  }
  i12 = i6 - (HEAP32[i11 + 12 >> 2] | 0) | 0;
 } else {
  i12 = 0;
 }
 __ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i4, i12, HEAP32[i2 + 12 >> 2] | 0);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i3;
 return;
}
function __ZN3JSC23JSGenericTypedArrayViewINS_12Int32AdaptorEE9typedImplEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i6 = i2 + 16 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 2) {
  i8 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) - 8 >> 2] | 0;
 } else if ((i7 | 0) == 3) {
  i8 = HEAP32[i2 + 20 >> 2] | 0;
 } else {
  i7 = i2 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    if ((i10 | 0) == (HEAP32[i10 >> 2] | 0)) {
     break;
    }
    _WTFCrash();
   }
  } while (0);
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2 ? i7 + 8 | 0 : i9 + 32 | 0) >> 2] | 0) + 92 >> 2] & 15](i5) | 0;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) > 1) {
  i6 = HEAP32[i2 + 8 >> 2] | 0;
  if ((i7 | 0) == 2) {
   i11 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) - 8 >> 2] | 0;
  } else if ((i7 | 0) == 3) {
   i11 = HEAP32[i2 + 20 >> 2] | 0;
  } else {
   i7 = i2 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     if ((i10 | 0) == (HEAP32[i10 >> 2] | 0)) {
      break;
     }
     _WTFCrash();
    }
   } while (0);
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2 ? i7 + 8 | 0 : i8 + 32 | 0) >> 2] | 0) + 92 >> 2] & 15](i5) | 0;
  }
  i12 = i6 - (HEAP32[i11 + 12 >> 2] | 0) | 0;
 } else {
  i12 = 0;
 }
 __ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i4, i12, HEAP32[i2 + 12 >> 2] | 0);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i3;
 return;
}
function __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i2 + 16 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 & 3 | 0) == 2) {
  i7 = i2;
  while (1) {
   i8 = HEAP32[i7 + 12 >> 2] | 0;
   i9 = i8 + 16 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 & 3 | 0) == 2) {
    i7 = i8;
   } else {
    i11 = i8;
    i12 = i9;
    i13 = i10;
    break;
   }
  }
 } else {
  i11 = i2;
  i12 = i5;
  i13 = i6;
 }
 if ((i13 & 8 | 0) == 0) {
  HEAP32[i12 >> 2] = i13 | 8;
  i14 = HEAP32[i11 + 4 >> 2] << (i13 >>> 5 & 1 ^ 1);
 } else {
  i14 = 0;
 }
 i13 = i1 + 6840 | 0;
 i11 = i13 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i15 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i13, 16) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i15 = i12;
 }
 i12 = i15;
 HEAP32[i12 >> 2] = 0;
 i11 = i15;
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i1 + 20772 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    i16 = 0;
    break;
   }
   i16 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 HEAP32[i12 >> 2] = i16;
 i16 = i15 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i15 + 12 >> 2] = i13;
 HEAP32[i15 + 8 >> 2] = i4;
 HEAP32[i16 >> 2] = (HEAP32[i13 + 16 >> 2] | 0) >>> 5 & 1;
 if (i14 >>> 0 <= 256 >>> 0) {
  i17 = i1 + 24784 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18 + 1 | 0;
  HEAP32[i17 >> 2] = i19;
  return i11 | 0;
 }
 __ZN3JSC4Heap29reportExtraMemoryCostSlowCaseEj((HEAP32[(i15 & -65536) + 1076 >> 2] | 0) + 16 | 0, i14);
 i17 = i1 + 24784 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = i18 + 1 | 0;
 HEAP32[i17 >> 2] = i19;
 return i11 | 0;
}
function __ZN7WebCore23JSWebGLRenderingContext12getParameterEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, d14 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if ((HEAP32[i3 + 32 >> 2] | 0) != 2) {
  i8 = HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i9 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i8, i3, __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i3) | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i9 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 i9 = HEAP32[i2 + 12 >> 2] | 0;
 i8 = i3 + 48 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 i11 = HEAP32[i8 + 4 >> 2] | 0;
 d12 = +HEAPF64[i8 >> 3];
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = i10;
 HEAP32[i8 + 4 >> 2] = i11;
 i8 = i11;
 if ((i8 | 0) == -1) {
  i13 = i10;
 } else {
  if (i8 >>> 0 < 4294967289 >>> 0) {
   d14 = d12;
  } else {
   d14 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i6, i3);
  }
  i13 = __ZN3JSC7toInt32Ed(d14) | 0;
 }
 i6 = (HEAP32[(HEAP32[i3 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 if (!((HEAP32[i6 >> 2] & 0 | 0) == 0 & (HEAP32[i6 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore21WebGLRenderingContext12getParameterEjRi(i7, i9, i13, i5);
 i13 = HEAP32[i5 >> 2] | 0;
 if ((i13 | 0) == 0) {
  __ZN7WebCoreL4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectERKNS_12WebGLGetInfoE(i1, i3, HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0, i7);
 } else {
  __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, i13);
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
 }
 __ZN7WebCore12WebGLGetInfoD1Ev(i7);
 STACKTOP = i4;
 return;
}
function __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
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
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1 | 0, i5);
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF6VectorIbLj0ENS_15CrashOnOverflowEEaSERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i6 >>> 0 <= i8 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i9 = i8;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
     i9 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 >= i8 >>> 0) {
    break;
   }
   i11 = i1 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = __ZN3WTF18fastMallocGoodSizeEj(i8) | 0;
   HEAP32[i7 >> 2] = i13;
   i8 = __ZN3WTF10fastMallocEj(i13) | 0;
   HEAP32[i11 >> 2] = i8;
   _memcpy(i8 | 0, i10 | 0, i12) | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i9 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 _memcpy((HEAP32[i2 >> 2] | 0) + i4 | 0, (HEAP32[i9 >> 2] | 0) + i4 | 0, (HEAP32[i5 >> 2] | 0) - i4 | 0) | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 return i1 | 0;
}
function __ZN3WTF6VectorIiLj64ENS_15CrashOnOverflowEE18tryReserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 if ((HEAP32[i5 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 64 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    i6 = 0;
    STACKTOP = i3;
    return i6 | 0;
   }
   i10 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
   __ZN3WTF13tryFastMallocEj(i4, i10);
   i11 = i4 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   if ((i12 | 0) == 0) {
    i6 = 0;
    STACKTOP = i3;
    return i6 | 0;
   } else {
    i11 = i12;
    HEAP32[i5 >> 2] = i10 >>> 2;
    HEAP32[i7 >> 2] = i11;
    i13 = i11;
    i14 = i1 + 12 | 0;
    break;
   }
  } else {
   i11 = i1 + 12 | 0;
   HEAP32[i7 >> 2] = i11;
   HEAP32[i5 >> 2] = 64;
   i13 = i11;
   i14 = i11;
  }
 } while (0);
 i1 = i8;
 _memcpy(i13 | 0, i1 | 0, i9 << 2) | 0;
 if ((i14 | 0) == (i8 | 0) | (i8 | 0) == 0) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == (i8 | 0)) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 i6 = 1;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN3WTF6VectorIfLj64ENS_15CrashOnOverflowEE18tryReserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 if ((HEAP32[i5 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 64 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    i6 = 0;
    STACKTOP = i3;
    return i6 | 0;
   }
   i10 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
   __ZN3WTF13tryFastMallocEj(i4, i10);
   i11 = i4 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   if ((i12 | 0) == 0) {
    i6 = 0;
    STACKTOP = i3;
    return i6 | 0;
   } else {
    i11 = i12;
    HEAP32[i5 >> 2] = i10 >>> 2;
    HEAP32[i7 >> 2] = i11;
    i13 = i11;
    i14 = i1 + 12 | 0;
    break;
   }
  } else {
   i11 = i1 + 12 | 0;
   HEAP32[i7 >> 2] = i11;
   HEAP32[i5 >> 2] = 64;
   i13 = i11;
   i14 = i11;
  }
 } while (0);
 i1 = i8;
 _memcpy(i13 | 0, i1 | 0, i9 << 2) | 0;
 if ((i14 | 0) == (i8 | 0) | (i8 | 0) == 0) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == (i8 | 0)) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 i6 = 1;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i3 & 3 | 0) != 0 | i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 2 >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 16;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i2 | 0) == 0;
 if (!i7) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i3 & 3 | 0) != 0 | i8 >>> 0 < i3 >>> 0) {
  i9 = 0;
 } else {
  i9 = (i8 - i3 | 0) >>> 2 >>> 0 >= i4 >>> 0;
 }
 if (!i7) {
  __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 }
 if (i9) {
  i9 = __ZN3WTF10fastMallocEj(24) | 0;
  if (!i7) {
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = i2;
  __ZN3JSC15ArrayBufferViewC2EN3WTF10PassRefPtrINS_11ArrayBufferEEEj(i9, i6, i3);
  i3 = HEAP32[i8 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i3 | 0);
  }
  HEAP32[i9 >> 2] = H_BASE + 56;
  HEAP32[i9 + 20 >> 2] = i4;
  HEAP32[i1 >> 2] = i9;
 } else {
  HEAP32[i1 >> 2] = 0;
 }
 if (i7) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i2 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 524 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_14Float32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = HEAP32[i3 + 508 >> 2] | 0;
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i7 = i1 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __ZN3JSC23JSGenericTypedArrayViewINS_12Int32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE(i6, i2, i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return i7 | 0;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i2);
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN3WTF6VectorIiLj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 64 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 64;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorIfLj64ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 64 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 64;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) != 0 | (i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 20 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i3);
 }
 __ZN3WTF8fastFreeEPv(HEAP32[i1 + 12 >> 2] | 0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 & 1 | 0) == 0) {
   i2 = i3;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = i2 + 8 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i2 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
    HEAP32[i2 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i5);
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 __ZN7WebCore24JSCanvasRenderingContext13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE(i1, i2);
 HEAP32[i4 >> 2] = HEAP32[i1 + 12 >> 2];
 __ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_(i3 + 8 | 0, i2 + 20 | 0, i4, i4);
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iiii + 4;
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
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZNK3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] << 2;
  }
 } while (0);
 return i3 | 0;
}
function __ZNK3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE10byteLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i1 + 20 >> 2] << 2;
  }
 } while (0);
 return i3 | 0;
}
function __ZN7WebCore23JSWebGLRenderingContext16uniformMatrix4fvEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL18dataFunctionMatrixENS_24DataFunctionMatrixToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 2, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext16uniformMatrix3fvEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL18dataFunctionMatrixENS_24DataFunctionMatrixToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 1, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext16uniformMatrix2fvEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL18dataFunctionMatrixENS_24DataFunctionMatrixToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 0, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext15vertexAttrib4fvEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13dataFunctionfENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 7, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext15vertexAttrib3fvEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13dataFunctionfENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 6, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext15vertexAttrib2fvEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13dataFunctionfENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 5, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext15vertexAttrib1fvEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13dataFunctionfENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 4, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext10uniform4ivEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13dataFunctioniENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 3, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext10uniform4fvEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13dataFunctionfENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 3, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext10uniform3ivEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13dataFunctioniENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 2, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext10uniform3fvEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13dataFunctionfENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 2, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext10uniform2ivEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13dataFunctioniENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 1, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext10uniform2fvEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13dataFunctionfENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 1, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext10uniform1ivEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13dataFunctioniENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 0, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext10uniform1fvEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL13dataFunctionfENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE(i1, 0, i3, HEAP32[i2 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext24getRenderbufferParameterEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL18getObjectParameterEPNS_23JSWebGLRenderingContextEPN3JSC9ExecStateENS_10ObjectTypeE(i1, i2, i3, 1);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext18getBufferParameterEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL18getObjectParameterEPNS_23JSWebGLRenderingContextEPN3JSC9ExecStateENS_10ObjectTypeE(i1, i2, i3, 0);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext15getVertexAttribEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL18getObjectParameterEPNS_23JSWebGLRenderingContextEPN3JSC9ExecStateENS_10ObjectTypeE(i1, i2, i3, 3);
 return;
}
function __ZN7WebCore23JSWebGLRenderingContext15getTexParameterEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL18getObjectParameterEPNS_23JSWebGLRenderingContextEPN3JSC9ExecStateENS_10ObjectTypeE(i1, i2, i3, 2);
 return;
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
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
 return FUNCTION_TABLE_iiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
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
function b2(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(2);
 return 0;
}
function __ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
 return;
}
function __ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15ArrayBufferViewD2Ev(i1 | 0);
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
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZNK3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 8;
}
function __ZNK3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE7getTypeEv(i1) {
 i1 = i1 | 0;
 return 6;
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE10byteLengthEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE7getTypeEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE7getTypeEv,b0,__ZNK3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE10byteLengthEv,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEED0Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEED0Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEED1Ev,b1,__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEED1Ev,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_iiiiiii = [b2,b2];
  var FUNCTION_TABLE_iiii = [b3,b3,__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b3,__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iiiii = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_iiii: dynCall_iiii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_iiiiiii": invoke_iiiiiii, "invoke_iiii": invoke_iiii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore13JSWebGLShader6s_infoE": __ZN7WebCore13JSWebGLShader6s_infoE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF6VectorIiLj64ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE","__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE6createEN3WTF10PassRefPtrINS_11ArrayBufferEEEjj","__ZN7WebCoreL18dataFunctionMatrixENS_24DataFunctionMatrixToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE","__ZN7WebCore23JSWebGLRenderingContext10uniform4ivEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext10getUniformEPN3JSC9ExecStateE","__ZN3JSC23JSGenericTypedArrayViewINS_12Int32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZNK3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE7getTypeEv","_strlen","__ZN7WebCore23JSWebGLRenderingContext15vertexAttrib4fvEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext16uniformMatrix2fvEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext10uniform2fvEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext19getProgramParameterEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext18getShaderParameterEPN3JSC9ExecStateE","__ZN7WebCore8toVectorIfLj64EEEbPN3JSC9ExecStateENS1_7JSValueERN3WTF6VectorIT_XT0_ENS5_15CrashOnOverflowEEE","__ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj","__ZN7WebCore23JSWebGLRenderingContext33getFramebufferAttachmentParameterEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext15vertexAttrib1fvEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext18getAttachedShadersEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext15getVertexAttribEPN3JSC9ExecStateE","__ZN7WebCore12WebGLGetInfoaSERKS0_","__ZNK3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE7getTypeEv","__ZN3JSC23JSGenericTypedArrayViewINS_14Float32AdaptorEE6createERNS_2VMEPNS_9StructureEN3WTF10PassRefPtrINS_21GenericTypedArrayViewIS1_EEEE","__ZNK3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE10byteLengthEv","__ZN7WebCore8toVectorIiLj64EEEbPN3JSC9ExecStateENS1_7JSValueERN3WTF6VectorIT_XT0_ENS5_15CrashOnOverflowEEE","__ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S4_S6_S6_EEEEOT0_OT1_","__ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE","__ZN7WebCoreL13dataFunctioniENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE","__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEED0Ev","__ZN7WebCore23JSWebGLRenderingContext16uniformMatrix4fvEPN3JSC9ExecStateE","__ZNK3JSC8JSObject3getEPNS_9ExecStateEj","__ZN7WebCore23JSWebGLRenderingContext10uniform1ivEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext12getParameterEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext15vertexAttrib3fvEPN3JSC9ExecStateE","__ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN3WTF6VectorIfLj64ENS_15CrashOnOverflowEE18tryReserveCapacityEj","__ZN7WebCoreL13dataFunctionfENS_18DataFunctionToCallEPN3JSC9ExecStateERNS_21WebGLRenderingContextE","__ZN3WTF20DeferrableRefCountedIN3JSC11ArrayBufferEE5derefEv","__ZN3WTF6VectorIbLj0ENS_15CrashOnOverflowEEaSERKS2_","__ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS2_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN3WTF15CrashOnOverflow10overflowedEv","_memset","__ZN7WebCore23JSWebGLRenderingContext10uniform1fvEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext15getTexParameterEPN3JSC9ExecStateE","__ZN3JSC23JSGenericTypedArrayViewINS_12Int32AdaptorEE9typedImplEv","__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZNK3JSC21GenericTypedArrayViewINS_12Int32AdaptorEE10byteLengthEv","__ZN7WebCore23JSWebGLRenderingContext15vertexAttrib2fvEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext10uniform3ivEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext10uniform2ivEPN3JSC9ExecStateE","__ZN3JSC23JSGenericTypedArrayViewINS_14Float32AdaptorEE9typedImplEv","__ZN7WebCore23JSWebGLRenderingContext13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE","__ZN3WTF9HashTableIPNS_10StringImplENS_12KeyValuePairIS2_N3JSC4WeakINS4_8JSStringEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN3WTF6VectorIfLj64ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE","__ZN7WebCore23JSWebGLRenderingContext22getSupportedExtensionsEPN3JSC9ExecStateE","__ZN3JSC21GenericTypedArrayViewINS_12Int32AdaptorEED1Ev","__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEED1Ev","__ZN7WebCoreL4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectERKNS_12WebGLGetInfoE","__ZN7WebCore23JSWebGLRenderingContext10uniform3fvEPN3JSC9ExecStateE","__ZN7WebCore23JSWebGLRenderingContext10uniform4fvEPN3JSC9ExecStateE","__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEE4wrapEPNS_9ExecStateEPNS_14JSGlobalObjectE","__ZN7WebCore17jsStringWithCacheEPN3JSC9ExecStateERKN3WTF6StringE","__ZN7WebCore23JSWebGLRenderingContext12getExtensionEPN3JSC9ExecStateE","__ZN7WebCoreL18getObjectParameterEPNS_23JSWebGLRenderingContextEPN3JSC9ExecStateENS_10ObjectTypeE","__ZN7WebCore23JSWebGLRenderingContext18getBufferParameterEPN3JSC9ExecStateE","_memcpy","__ZN7WebCore23JSWebGLRenderingContext24getRenderbufferParameterEPN3JSC9ExecStateE","_memmove","__ZN3WTF6VectorIiLj64ENS_15CrashOnOverflowEE18tryReserveCapacityEj","__ZN3JSC21GenericTypedArrayViewINS_14Float32AdaptorEED0Ev","__ZN7WebCore23JSWebGLRenderingContext16uniformMatrix3fvEPN3JSC9ExecStateE","__ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_","__ZN3JSC9WeakGCMapIPN3WTF10StringImplENS_8JSStringENS1_7PtrHashIS3_EENS1_10HashTraitsIS3_EEE5gcMapEv","__ZN3WTF9HashTableIPvS1_NS_17IdentityExtractorENS_7PtrHashIS1_EENS_10HashTraitsIS1_EES6_E6expandEPS1_"]

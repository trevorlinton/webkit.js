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
H_BASE = parentModule["_malloc"](192 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 192;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21InspectorFrontendHostC1EPNS_23InspectorFrontendClientEPNS_4PageE;
var __ZN7WebCore21InspectorFrontendHostD1Ev;
/* memory initializer */ allocate([99,111,110,116,101,120,116,77,101,110,117,73,116,101,109,83,101,108,101,99,116,101,100,0,99,111,110,116,101,120,116,77,101,110,117,67,108,101,97,114,101,100,0,0,0,0,0,0,71,69,84,0,0,0,0,0,73,110,115,112,101,99,116,111,114,70,114,111,110,116,101,110,100,65,80,73,0,0,0,0,119,101,98,0,0,0,0,0,98,111,116,116,111,109,0,0,114,105,103,104,116,0,0,0,117,110,100,111,99,107,101,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viff(index,a1,a2,a3) {
  try {
    Module["dynCall_viff"](index,a1,a2,a3);
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
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore20FrontendMenuProviderE=(H_BASE+128)|0;
  var __ZTVN10Deprecated12ScriptObjectE=(H_BASE+168)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_viff=env.invoke_viff;
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
function __ZN7WebCore21InspectorFrontendHost15showContextMenuEPNS_5EventERKN3WTF6VectorINS_15ContextMenuItemELj0ENS3_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = __ZN7WebCore21mainThreadNormalWorldEv() | 0;
 i10 = i1 + 8 | 0;
 i11 = __ZN7WebCore17execStateFromPageERNS_15DOMWrapperWorldEPNS_4PageE(i9, HEAP32[i10 >> 2] | 0) | 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 >> 2] = H_BASE + 176;
 i9 = i6 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 do {
  if (__ZN7WebCore18ScriptGlobalObject3getEPN3JSC9ExecStateEPKcRN10Deprecated12ScriptObjectE(i11, H_BASE + 64 | 0, i6) | 0) {
   i12 = i7 | 0;
   HEAP32[i12 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
   i13 = i7 + 4 | 0;
   __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i13, i6 + 4 | 0);
   HEAP32[i12 >> 2] = H_BASE + 176;
   i12 = i7 + 8 | 0;
   HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
   i14 = __ZN3WTF10fastMallocEj(36) | 0;
   i15 = i14;
   i16 = i5 | 0;
   HEAP32[i16 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
   __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i5 + 4 | 0, i13);
   HEAP32[i16 >> 2] = H_BASE + 176;
   HEAP32[i5 + 8 >> 2] = HEAP32[i12 >> 2];
   __ZN7WebCore20FrontendMenuProviderC2EPNS_21InspectorFrontendHostEN10Deprecated12ScriptObjectERKN3WTF6VectorINS_15ContextMenuItemELj0ENS5_15CrashOnOverflowEEE(i15, i1, i5, i3);
   __ZN10Deprecated11ScriptValueD2Ev(i5 | 0);
   __ZN10Deprecated11ScriptValueD2Ev(i7 | 0);
   i12 = HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] | 0;
   i16 = i8 | 0;
   i13 = i14;
   HEAP32[i16 >> 2] = i13;
   i17 = (i14 | 0) == 0;
   if (!i17) {
    i18 = i14 + 4 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   __ZN7WebCore21ContextMenuController15showContextMenuEPNS_5EventEN3WTF10PassRefPtrINS_19ContextMenuProviderEEE(i12, i2, i8);
   i12 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i16 = i12 + 4 | 0;
     i18 = i16 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i18 >> 2] = i19;
      break;
     }
     i19 = i16 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 15](i19);
    }
   } while (0);
   HEAP32[i1 + 12 >> 2] = i15;
   if (i17) {
    break;
   }
   i12 = i14 + 4 | 0;
   i19 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 15](i13);
    break;
   } else {
    HEAP32[i12 >> 2] = i19;
    break;
   }
  }
 } while (0);
 __ZN10Deprecated11ScriptValueD2Ev(i6 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21InspectorFrontendHost25loadResourceSynchronouslyERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 400 | 0;
 i5 = i4 | 0;
 i6 = i4 + 184 | 0;
 i7 = i4 + 192 | 0;
 i8 = i4 + 208 | 0;
 i9 = i4 + 232 | 0;
 __ZN7WebCore15ResourceRequestC2ERKN3WTF6StringE(i5, i3);
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 56 | 0);
 __ZN7WebCore19ResourceRequestBase13setHTTPMethodERKN3WTF6StringE(i5 | 0, i6);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = 0;
 i10 = i7 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i6 = i7 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 _memset(i8 | 0, 0, 16) | 0;
 HEAP8[i8 + 16 | 0] = 1;
 HEAP8[i8 + 17 | 0] = 0;
 HEAP8[i8 + 18 | 0] = 0;
 i11 = i9 | 0;
 __ZN7WebCore20ResourceResponseBaseC2Ev(i11);
 HEAP8[i9 + 160 | 0] = 0;
 __ZN7WebCore11FrameLoader25loadResourceSynchronouslyERKNS_15ResourceRequestENS_17StoredCredentialsENS_22ClientCredentialPolicyERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENSA_15CrashOnOverflowEEE((HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 60 >> 2] | 0) + 80 | 0, i5, 1, 1, i8, i9, i7) | 0;
 __ZN3WTF6String8fromUTF8EPKhj(i1, HEAP32[i3 >> 2] | 0, HEAP32[i6 >> 2] | 0);
 __ZN7WebCore20ResourceResponseBaseD2Ev(i11);
 i11 = HEAP32[i8 + 12 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i1 = i11 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i1 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i8 + 8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i7 = i11 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore15ResourceRequestD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i6);
 __ZN7WebCore15ResourceRequestD2Ev(i5);
 STACKTOP = i4;
 return;
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
function __ZN7WebCore20FrontendMenuProvider18contextMenuClearedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 112 | 0;
 i6 = i2 + 120 | 0;
 i7 = i1 + 8 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   __ZN3WTF6StringC1EPKc(i5, H_BASE + 32 | 0);
   __ZN10Deprecated18ScriptFunctionCallC1ERKNS_12ScriptObjectERKN3WTF6StringEPFN3JSC7JSValueEPNS8_9ExecStateES9_NS8_8CallTypeERKNS8_8CallDataES9_RKNS8_7ArgListEE(i4, i1 + 12 | 0, i5, F_BASE_viiiiiii + 2 | 0);
   i8 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i9 >> 2] = i10;
      break;
     }
    }
   } while (0);
   __ZN10Deprecated18ScriptFunctionCall4callEv(i6, i4);
   __ZN10Deprecated11ScriptValueD1Ev(i6);
   HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] = 0;
   i8 = HEAP32[i4 + 100 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i10 = i8 | 0;
     i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i10 >> 2] = i9;
      break;
     }
    }
   } while (0);
   __ZN10Deprecated11ScriptValueD2Ev(i4 + 88 | 0);
   i8 = HEAP32[i4 + 76 >> 2] | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i8, i3) | 0;
   }
   if ((HEAP32[i4 + 4 >> 2] | 0) == 8) {
    break;
   }
   i8 = HEAP32[i4 + 72 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZdaPv(i8);
  }
 } while (0);
 i4 = i1 + 28 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 + 32 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i6 = i1 + 24 | 0;
 if ((i7 | 0) != 0) {
  i1 = HEAP32[i6 >> 2] | 0;
  i5 = i1 + (i7 * 28 & -1) | 0;
  i7 = i1;
  while (1) {
   __ZN7WebCore15ContextMenuItemD1Ev(i7);
   i7 = i7 + 28 | 0;
   if ((i7 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function __ZN3JSC6StrongINS_7UnknownEEaSERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i2 = i1 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i3;
   return i1 | 0;
  }
  i7 = HEAP32[(i6 & -4096) + 12 >> 2] | 0;
  i8 = i6;
  i9 = i7 + 84 | 0;
  i10 = i8 + 12 | 0;
  if ((i8 | 0) == (HEAP32[i9 >> 2] | 0)) {
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  }
  i9 = i6 + 8 | 0;
  i6 = HEAP32[i9 >> 2] | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i6 + 12 >> 2] = i11;
  HEAP32[i11 + 8 >> 2] = i6;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  i9 = i7 + 80 | 0;
  HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i9 >> 2] = i8;
  HEAP32[i2 >> 2] = 0;
  STACKTOP = i3;
  return i1 | 0;
 }
 i2 = HEAP32[HEAP32[(i5 & -4096) + 12 >> 2] >> 2] | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = i1 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  if ((HEAP32[i2 + 20444 >> 2] | 0) != 0) {
   _WTFCrash();
   return 0;
  }
  i7 = i2 + 20440 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  if ((i6 | 0) == 0) {
   __ZN3JSC9HandleSet4growEv(i2 + 20360 | 0);
   i12 = HEAP32[i7 >> 2] | 0;
  } else {
   i12 = i6;
  }
  i6 = i12 + 12 | 0;
  HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i12 + 4 >> 2] = -6;
  HEAP32[i12 >> 2] = 0;
  i7 = i12 + 8 | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i6 >> 2] = 0;
  i11 = i2 + 20420 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  HEAP32[i7 >> 2] = i2 + 20408;
  HEAP32[i6 >> 2] = i13;
  HEAP32[i11 >> 2] = i12;
  HEAP32[i13 + 8 >> 2] = i12;
  i13 = i12 | 0;
  HEAP32[i8 >> 2] = i13;
  i14 = i13;
 } else {
  i14 = i10;
 }
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i5;
 HEAP32[i10 + 4 >> 2] = i9;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i14 & -4096) + 12 >> 2] | 0, i14, i4);
 i4 = HEAP32[i10 + 4 >> 2] | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i14 + 4 >> 2] = i4;
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN7WebCore15ResourceRequestC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i5, 0, i2);
 i2 = i5 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP8[i5 + 4 | 0] | 0;
 i6 = i1 + 4 | 0;
 HEAP8[i6] = HEAP8[i6] & -4 | i7 & 1 | i7 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i5 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i5 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i5 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i5 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i5 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i5 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i5 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = 0;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i5 = i1 + 64 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 HEAP32[i4 >> 2] = H_BASE + 56;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i4);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore20FrontendMenuProvider23contextMenuItemSelectedEPNS_15ContextMenuItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 120 | 0;
 i8 = i3 + 128 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i5, 0);
 i9 = (__ZNK7WebCore15ContextMenuItem6actionEv(i2) | 0) - 5e3 | 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 8 | 0);
 __ZN10Deprecated18ScriptFunctionCallC1ERKNS_12ScriptObjectERKN3WTF6StringEPFN3JSC7JSValueEPNS8_9ExecStateES9_NS8_8CallTypeERKNS8_8CallDataES9_RKNS8_7ArgListEE(i6, i1 + 12 | 0, i7, F_BASE_viiiiiii + 2 | 0);
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN10Deprecated25ScriptCallArgumentHandler14appendArgumentEi(i6, i9);
 __ZN10Deprecated18ScriptFunctionCall4callEv(i8, i6);
 __ZN10Deprecated11ScriptValueD1Ev(i8);
 i8 = HEAP32[i6 + 100 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN10Deprecated11ScriptValueD2Ev(i6 + 88 | 0);
 i8 = HEAP32[i6 + 76 >> 2] | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i4 >> 2] = i6;
  __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i8, i4) | 0;
 }
 do {
  if ((HEAP32[i6 + 4 >> 2] | 0) != 8) {
   i4 = HEAP32[i6 + 72 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZdaPv(i4);
  }
 } while (0);
 __ZN7WebCore20UserGestureIndicatorD1Ev(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19ResourceRequestBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 116 | 0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
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
function __ZN7WebCore20ResourceResponseBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 80 | 0);
 i2 = HEAP32[i1 + 76 >> 2] | 0;
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
 i2 = HEAP32[i1 + 68 >> 2] | 0;
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
 i2 = HEAP32[i1 + 64 >> 2] | 0;
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
 i2 = HEAP32[i1 + 48 >> 2] | 0;
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
 i2 = HEAP32[i1 >> 2] | 0;
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
function __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(i2 & -4096) + 12 >> 2] | 0;
 if ((HEAP32[i6 + 84 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i2 = i6 + 80 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i6);
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = i8 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i2 = i8 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i6 + 60 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 + 48;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 + 8 >> 2] = i8;
 i10 = i8 | 0;
 HEAP32[i5 >> 2] = i10;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = 0;
  i12 = 0;
  i13 = -6;
  i14 = 0;
 } else {
  i1 = i9 | 0;
  i9 = HEAP32[i1 >> 2] | 0;
  i7 = HEAP32[i1 + 4 >> 2] | 0;
  i11 = i7 & 0;
  i12 = i9 & -1;
  i13 = i7 & -1;
  i14 = i9 & 0;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i12 | i14;
 HEAP32[i9 + 4 >> 2] = i11 | i13;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 * 28 & -1) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (((i2 - i7 | 0) / 28 & -1) * 28 & -1) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 * 28 & -1) | 0;
   __ZN7WebCore15ContextMenuItemC1ERKS0_(i13, i10);
   i14 = HEAP32[i3 >> 2] | 0;
   i15 = i14 + 1 | 0;
   HEAP32[i3 >> 2] = i15;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 * 28 & -1) | 0;
 __ZN7WebCore15ContextMenuItemC1ERKS0_(i13, i10);
 i14 = HEAP32[i3 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i3 >> 2] = i15;
 return;
}
function __ZN7WebCore20FrontendMenuProviderC2EPNS_21InspectorFrontendHostEN10Deprecated12ScriptObjectERKN3WTF6VectorINS_15ContextMenuItemELj0ENS5_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 136;
 HEAP32[i1 + 8 >> 2] = i2;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1 + 16 | 0, i3 + 4 | 0);
 HEAP32[i2 >> 2] = H_BASE + 176;
 HEAP32[i1 + 20 >> 2] = HEAP32[i3 + 8 >> 2];
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 i2 = i4 + 8 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i6 = i1 + 24 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 28 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i5;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 * 28 & -1) | 0;
 HEAP32[i7 >> 2] = (i5 >>> 0) / 28 & -1;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = i7 + (i4 * 28 & -1) | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 while (1) {
  __ZN7WebCore15ContextMenuItemC1ERKS0_(i9, i8);
  i5 = i8 + 28 | 0;
  if ((i5 | 0) == (i2 | 0)) {
   break;
  } else {
   i8 = i5;
   i9 = i9 + 28 | 0;
  }
 }
 return;
}
function __ZN7WebCore15ResourceRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 172 >> 2] | 0;
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
 i2 = HEAP32[i1 + 168 >> 2] | 0;
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
 i2 = HEAP32[i1 + 164 >> 2] | 0;
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
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
}
function __ZN7WebCore15ContextMenuItemC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 12 | 0] = HEAP8[i2 + 12 | 0] & 1;
 HEAP8[i1 + 13 | 0] = HEAP8[i2 + 13 | 0] & 1;
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 i3 = i2 + 24 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = i1 + 16 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 20 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = i5;
 if ((i4 | 0) == 0) {
  return;
 }
 if (i4 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i4 * 28 & -1) | 0;
 HEAP32[i7 >> 2] = (i5 >>> 0) / 28 & -1;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i7 + (i2 * 28 & -1) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 while (1) {
  __ZN7WebCore15ContextMenuItemC1ERKS0_(i9, i8);
  i5 = i8 + 28 | 0;
  if ((i5 | 0) == (i3 | 0)) {
   break;
  } else {
   i8 = i5;
   i9 = i9 + 28 | 0;
  }
 }
 return;
}
function __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 28 & -1) | 0;
 if (i2 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 28 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 28 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   __ZN7WebCore15ContextMenuItemC1ERKS0_(i7, i6);
   __ZN7WebCore15ContextMenuItemD1Ev(i6);
   i2 = i6 + 28 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 28 | 0;
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
function __ZN7WebCore20FrontendMenuProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 136;
 __ZN7WebCore20FrontendMenuProvider18contextMenuClearedEv(i1);
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 24 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 28 & -1) | 0;
  i3 = i5;
  while (1) {
   __ZN7WebCore15ContextMenuItemD1Ev(i3);
   i3 = i3 + 28 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1 + 12 | 0;
  __ZN10Deprecated11ScriptValueD2Ev(i7);
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i7 = i1 + 12 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i7);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore20FrontendMenuProvider19populateContextMenuEPNS_11ContextMenuE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 32 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 i4 = i1 + 24 | 0;
 i1 = i2 + 8 | 0;
 i5 = i2 + 4 | 0;
 i6 = i2 | 0;
 i7 = i2 | 0;
 i2 = 0;
 while (1) {
  i8 = (HEAP32[i4 >> 2] | 0) + (i2 * 28 & -1) | 0;
  i9 = HEAP32[i1 >> 2] | 0;
  if ((i9 | 0) == (HEAP32[i5 >> 2] | 0)) {
   __ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i6, i8);
  } else {
   __ZN7WebCore15ContextMenuItemC1ERKS0_((HEAP32[i7 >> 2] | 0) + (i9 * 28 & -1) | 0, i8);
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  }
  i2 = i2 + 1 | 0;
  if (i2 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore21InspectorFrontendHost18requestSetDockSideERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 112 | 0) | 0) {
  i2 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 7](i2, 0);
  return;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 104 | 0) | 0) {
  i2 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 7](i2, 1);
  return;
 }
 if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 96 | 0) | 0)) {
  return;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 7](i1, 2);
 return;
}
function __ZN7WebCore20FrontendMenuProviderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 136;
 __ZN7WebCore20FrontendMenuProvider18contextMenuClearedEv(i1);
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 24 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 28 & -1) | 0;
  i3 = i5;
  while (1) {
   __ZN7WebCore15ContextMenuItemD1Ev(i3);
   i3 = i3 + 28 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1 + 12 | 0;
  __ZN10Deprecated11ScriptValueD2Ev(i7);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i7 = i1 + 12 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i7);
 return;
}
function __ZN7WebCore21InspectorFrontendHost11closeWindowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 28 >> 2] & 15](i5);
 HEAP32[i4 >> 2] = 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 >> 2] = H_BASE + 176;
  i5 = i3 + 8 | 0;
  HEAP32[i5 >> 2] = 0;
  __ZN3JSC6StrongINS_7UnknownEEaSERKS2_(i4 + 16 | 0, i3 + 4 | 0) | 0;
  HEAP32[i4 + 20 >> 2] = HEAP32[i5 >> 2];
  __ZN10Deprecated11ScriptValueD2Ev(i3 | 0);
  HEAP32[i4 + 8 >> 2] = 0;
 }
 HEAP32[i1 + 8 >> 2] = 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore21InspectorFrontendHost16disconnectClientEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i1 + 8 | 0;
  HEAP32[i5 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 >> 2] = H_BASE + 176;
 i6 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3JSC6StrongINS_7UnknownEEaSERKS2_(i4 + 16 | 0, i3 + 4 | 0) | 0;
 HEAP32[i4 + 20 >> 2] = HEAP32[i6 >> 2];
 __ZN10Deprecated11ScriptValueD2Ev(i3 | 0);
 HEAP32[i4 + 8 >> 2] = 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 STACKTOP = i2;
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
function __ZN7WebCore21InspectorFrontendHost8copyTextERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i1 | 0;
 __ZN7WebCore10Pasteboard21createForCopyAndPasteEv(i3);
 i4 = i3 | 0;
 __ZN7WebCore10Pasteboard14writePlainTextERKN3WTF6StringENS0_18SmartReplaceOptionE(HEAP32[i4 >> 2] | 0, i2, 1);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 __ZN3WTF8fastFreeEPv(i2 | 0);
 STACKTOP = i1;
 return;
}
function viiiiiii___ZN7WebCore32functionCallHandlerFromAnyThreadEPN3JSC9ExecStateENS0_7JSValueENS0_8CallTypeERKNS0_8CallDataES3_RKNS0_7ArgListE__wrapper(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZN7WebCore32functionCallHandlerFromAnyThreadEPN3JSC9ExecStateENS0_7JSValueENS0_8CallTypeERKNS0_8CallDataES3_RKNS0_7ArgListE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
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
function __ZN7WebCore21InspectorFrontendHost4saveERKN3WTF6StringES4_bb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 56 >> 2] & 1](i6, i2, i3, i4, i5);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vi + 2;
}
function __ZN7WebCore21InspectorFrontendHost19localizedStringsURLEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 192 | 0);
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 7](i1, i3);
  return;
 }
}
function __ZN7WebCore21InspectorFrontendHost6appendERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 3](i4, i2, i3);
 return;
}
function __ZN7WebCore21InspectorFrontendHost20sendMessageToBackendERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] & 7](i3, i2);
 return;
}
function __ZN7WebCore21InspectorFrontendHost19inspectedURLChangedERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 64 >> 2] & 7](i3, i2);
 return;
}
function __ZNK7WebCore21InspectorFrontendHost12moveWindowByEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viff[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1](i4, d2, d3);
 return;
}
function __ZN7WebCore21InspectorFrontendHost14debuggableTypeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = H_BASE + 88;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1, i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore21InspectorFrontendHost11isUnderTestEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 72 >> 2] & 1](i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore21InspectorFrontendHost12openInNewTabERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 48 >> 2] & 7](i3, i2);
 return;
}
function __ZN7WebCore21InspectorFrontendHost7canSaveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 52 >> 2] & 1](i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore21InspectorFrontendHost23setAttachedWindowHeightEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 36 >> 2] & 7](i3, i2);
 return;
}
function __ZN7WebCore21InspectorFrontendHost22setAttachedWindowWidthEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] & 7](i3, i2);
 return;
}
function __ZN7WebCore21InspectorFrontendHost16setToolbarHeightEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 7](i3, i2);
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
function __ZN7WebCore21InspectorFrontendHostC2EPNS_23InspectorFrontendClientEPNS_4PageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i3;
 HEAP32[i1 + 12 >> 2] = 0;
 return;
}
function __ZN7WebCore21InspectorFrontendHostC1EPNS_23InspectorFrontendClientEPNS_4PageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i3;
 HEAP32[i1 + 12 >> 2] = 0;
 return;
}
function __ZN7WebCore21InspectorFrontendHost12bringToFrontEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 15](i2);
 return;
}
function __ZN7WebCore21InspectorFrontendHost6loadedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 15](i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore21InspectorFrontendHost13setZoomFactorEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore5Frame25setPageAndTextZoomFactorsEff(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 60 >> 2] | 0, d2, +1);
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function b8(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(8);
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
function dynCall_viff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 FUNCTION_TABLE_viff[i1 & 1](i2 | 0, +d3, +d4);
}
function __ZN7WebCore21InspectorFrontendHost31dispatchEventAsContextMenuEventEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN10Deprecated12ScriptObjectD0Ev(i1) {
 i1 = i1 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i1 | 0);
 __ZdlPv(i1);
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
function __ZN10Deprecated12ScriptObjectD1Ev(i1) {
 i1 = i1 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i1 | 0);
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
function __ZN7WebCore21InspectorFrontendHost5closeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore21InspectorFrontendHost4beepEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10systemBeepEv();
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZN7WebCore21InspectorFrontendHost17canInspectWorkersEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZN7WebCore21InspectorFrontendHost9canSaveAsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZN7WebCore21InspectorFrontendHostD2Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore21InspectorFrontendHostD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b6(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 abort(6);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b1() {
 abort(1);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN10Deprecated12ScriptObjectD0Ev,b2,__ZN7WebCore20FrontendMenuProviderD0Ev,b2,__ZN7WebCore20FrontendMenuProviderD1Ev,b2,__ZN7WebCore21InspectorFrontendHostD2Ev,b2,__ZN10Deprecated12ScriptObjectD1Ev,b2,__ZN7WebCore20FrontendMenuProvider18contextMenuClearedEv,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore20FrontendMenuProvider19populateContextMenuEPNS_11ContextMenuE,b3,__ZN7WebCore20FrontendMenuProvider23contextMenuItemSelectedEPNS_15ContextMenuItemE,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore21InspectorFrontendHostC2EPNS_23InspectorFrontendClientEPNS_4PageE,b5];
  var FUNCTION_TABLE_viff = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  var FUNCTION_TABLE_viiiiiii = [b8,b8,viiiiiii___ZN7WebCore32functionCallHandlerFromAnyThreadEPN3JSC9ExecStateENS0_7JSValueENS0_8CallTypeERKNS0_8CallDataES3_RKNS0_7ArgListE__wrapper,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_v: dynCall_v, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_viff: dynCall_viff, dynCall_iii: dynCall_iii, dynCall_viiiiiii: dynCall_viiiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_v": invoke_v, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_viff": invoke_viff, "invoke_iii": invoke_iii, "invoke_viiiiiii": invoke_viiiiiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_viff = Module["dynCall_viff"] = asm["dynCall_viff"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore21InspectorFrontendHost19localizedStringsURLEv","__ZN3JSC6StrongINS_7UnknownEEC2ERKS2_","__ZN7WebCore21InspectorFrontendHost17canInspectWorkersEv","__ZN7WebCore21InspectorFrontendHost12bringToFrontEv","__ZN7WebCore21InspectorFrontendHost19inspectedURLChangedERKN3WTF6StringE","__ZN7WebCore20FrontendMenuProviderD1Ev","__ZN7WebCore21InspectorFrontendHost25loadResourceSynchronouslyERKN3WTF6StringE","__ZN7WebCore21InspectorFrontendHostC2EPNS_23InspectorFrontendClientEPNS_4PageE","__ZN7WebCore21InspectorFrontendHost8copyTextERKN3WTF6StringE","__ZN10Deprecated12ScriptObjectD0Ev","_memcpy","__ZN7WebCore21InspectorFrontendHost15showContextMenuEPNS_5EventERKN3WTF6VectorINS_15ContextMenuItemELj0ENS3_15CrashOnOverflowEEE","__ZN7WebCore20FrontendMenuProvider19populateContextMenuEPNS_11ContextMenuE","__ZN7WebCore21InspectorFrontendHost11isUnderTestEv","__ZN10Deprecated12ScriptObjectD1Ev","__ZN7WebCore20FrontendMenuProviderD0Ev","__ZN7WebCore20FrontendMenuProviderC2EPNS_21InspectorFrontendHostEN10Deprecated12ScriptObjectERKN3WTF6VectorINS_15ContextMenuItemELj0ENS5_15CrashOnOverflowEEE","_memset","__ZN7WebCore21InspectorFrontendHost14debuggableTypeEv","__ZN7WebCore21InspectorFrontendHost12openInNewTabERKN3WTF6StringE","__ZN7WebCore21InspectorFrontendHost23setAttachedWindowHeightEj","__ZN7WebCore15ResourceRequestC2ERKN3WTF6StringE","__ZN7WebCore20FrontendMenuProvider23contextMenuItemSelectedEPNS_15ContextMenuItemE","__ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_","__ZN7WebCore21InspectorFrontendHost16disconnectClientEv","__ZN7WebCore21InspectorFrontendHost22setAttachedWindowWidthEj","__ZN7WebCore21InspectorFrontendHost4beepEv","__ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore15ContextMenuItemC1ERKS0_","__ZN7WebCore21InspectorFrontendHost11closeWindowEv","__ZN7WebCore21InspectorFrontendHost4saveERKN3WTF6StringES4_bb","__ZN7WebCore21InspectorFrontendHost5closeERKN3WTF6StringE","__ZN3JSC6StrongINS_7UnknownEEaSERKS2_","__ZN7WebCore21InspectorFrontendHost16setToolbarHeightEj","__ZN7WebCore21InspectorFrontendHost6loadedEv","__ZN7WebCore21InspectorFrontendHost6appendERKN3WTF6StringES4_","__ZN7WebCore15ResourceRequestD2Ev","__ZNK7WebCore21InspectorFrontendHost12moveWindowByEff","__ZN7WebCore21InspectorFrontendHost18requestSetDockSideERKN3WTF6StringE","__ZN7WebCore21InspectorFrontendHostD2Ev","__ZN7WebCore21InspectorFrontendHost9canSaveAsEv","__ZN7WebCore21InspectorFrontendHost13setZoomFactorEf","__ZN7WebCore20ResourceResponseBaseD2Ev","__ZN3WTF6VectorIN7WebCore15ContextMenuItemELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_","__ZN7WebCore21InspectorFrontendHost31dispatchEventAsContextMenuEventEPNS_5EventE","__ZN7WebCore21InspectorFrontendHost20sendMessageToBackendERKN3WTF6StringE","__ZN7WebCore21InspectorFrontendHost7canSaveEv","__ZN7WebCore20FrontendMenuProvider18contextMenuClearedEv"]

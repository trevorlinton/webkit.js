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
H_BASE = parentModule["_malloc"](272 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 272;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore10PingLoaderC1EPNS_5FrameERNS_15ResourceRequestE;
var __ZN7WebCore10PingLoaderD1Ev;
/* memory initializer */ allocate([82,101,102,101,114,101,114,0,67,111,110,116,101,110,116,45,84,121,112,101,0,0,0,0,97,112,112,108,105,99,97,116,105,111,110,47,106,115,111,110,0,0,0,0,0,0,0,0,80,105,110,103,45,70,114,111,109,0,0,0,0,0,0,0,80,105,110,103,45,84,111,0,80,73,78,71,0,0,0,0,116,101,120,116,47,112,105,110,103,0,0,0,0,0,0,0,80,79,83,84,0,0,0,0,71,69,84,0,0,0,0,0,109,97,120,45,97,103,101,61,48,0,0,0,0,0,0,0,67,97,99,104,101,45,67,111,110,116,114,111,108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
function invoke_viid(index,a1,a2,a3) {
  try {
    Module["dynCall_viid"](index,a1,a2,a3);
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
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore5TimerINS_10PingLoaderEEE=(H_BASE+152)|0;
  var __ZTVN7WebCore10PingLoaderE=(H_BASE+184)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viid=env.invoke_viid;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore10PingLoader8sendPingEPNS_5FrameERKNS_3URLES5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 264 | 0;
 i5 = i4 | 0;
 i6 = i4 + 184 | 0;
 i7 = i4 + 192 | 0;
 i8 = i4 + 200 | 0;
 i9 = i4 + 208 | 0;
 i10 = i4 + 216 | 0;
 i11 = i4 + 224 | 0;
 i12 = i4 + 232 | 0;
 i13 = i4 + 240 | 0;
 i14 = i4 + 248 | 0;
 i15 = i4 + 256 | 0;
 i16 = i5 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i16, i2, 0);
 _memset(i5 + 160 | 0, 0, 19) | 0;
 HEAP32[i5 + 180 >> 2] = 15;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 104 | 0);
 __ZN7WebCore19ResourceRequestBase13setHTTPMethodERKN3WTF6StringE(i16, i6);
 i17 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i6 = i17 | 0;
   i18 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i6 >> 2] = i18;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 88 | 0);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i16, H_BASE + 16 | 0, i7);
 i17 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i7 = i17 | 0;
   i18 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i7 >> 2] = i18;
    break;
   }
  }
 } while (0);
 __ZN3WTF7CStringC1EPKc(i9, H_BASE + 80 | 0);
 __ZN7WebCore8FormData6createERKN3WTF7CStringE(i8, i9);
 __ZN7WebCore19ResourceRequestBase11setHTTPBodyEN3WTF10PassRefPtrINS_8FormDataEEE(i16, i8);
 i17 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i8 = i17 | 0;
   i18 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i17);
    __ZN3WTF8fastFreeEPv(i17);
    break;
   } else {
    HEAP32[i8 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i9 = i17 | 0;
   i18 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i17);
    break;
   } else {
    HEAP32[i9 >> 2] = i18;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i10, H_BASE + 120 | 0);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i16, H_BASE + 136 | 0, i10);
 i17 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i10 = i17 | 0;
   i18 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i10 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i17 = i1 + 80 | 0;
 __ZN7WebCore11FrameLoader34addExtraFieldsToSubresourceRequestERNS_15ResourceRequestE(i17, i5);
 i18 = i1 + 456 | 0;
 i10 = HEAP32[(HEAP32[i18 >> 2] | 0) + 100 >> 2] | 0;
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i11, i2);
 i9 = i11 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 __ZNK7WebCore14SecurityOrigin8toStringEv(i12, i10);
 __ZN7WebCore11FrameLoader21addHTTPOriginIfNeededERNS_15ResourceRequestERKN3WTF6StringE(i5, i12);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i8 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i8;
    break;
   }
  }
 } while (0);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i16, H_BASE + 72 | 0, i3 | 0);
 __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i13, i17);
 i3 = __ZN7WebCore14SecurityPolicy18shouldHideReferrerERKNS_3URLERKN3WTF6StringE(i2, i13) | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i13 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i16, H_BASE + 56 | 0, (HEAP32[i18 >> 2] | 0) + 356 | 0);
   if (__ZNK7WebCore14SecurityOrigin20isSameSchemeHostPortEPKS0_(i10, i11) | 0) {
    break;
   }
   i9 = HEAP32[(HEAP32[i18 >> 2] | 0) + 1944 >> 2] | 0;
   __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i15, i17);
   __ZN7WebCore14SecurityPolicy22generateReferrerHeaderENS_14ReferrerPolicyERKNS_3URLERKN3WTF6StringE(i14, i9, i2, i15);
   i9 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i13 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i9 = i14 | 0;
   i13 = HEAP32[i9 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    i19 = i13;
   } else {
    __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i16, H_BASE + 8 | 0, i14);
    i13 = HEAP32[i9 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    } else {
     i19 = i13;
    }
   }
   i13 = i19 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i13 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN7WebCore10PingLoaderC2EPNS_5FrameERNS_15ResourceRequestE(__ZN3WTF10fastMallocEj(72) | 0, i1, i5);
 if ((i11 | 0) == 0) {
  __ZN7WebCore15ResourceRequestD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 i1 = i11 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  __ZN7WebCore15ResourceRequestD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i11);
 __ZN3WTF8fastFreeEPv(i11);
 __ZN7WebCore15ResourceRequestD2Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10PingLoader19sendViolationReportEPNS_5FrameERKNS_3URLEN3WTF10PassRefPtrINS_8FormDataEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i5 = i4 | 0;
 i6 = i4 + 184 | 0;
 i7 = i4 + 192 | 0;
 i8 = i4 + 200 | 0;
 i9 = i4 + 208 | 0;
 i10 = i4 + 216 | 0;
 i11 = i5 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i11, i2, 0);
 _memset(i5 + 160 | 0, 0, 19) | 0;
 HEAP32[i5 + 180 >> 2] = 15;
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 104 | 0);
 __ZN7WebCore19ResourceRequestBase13setHTTPMethodERKN3WTF6StringE(i11, i6);
 i12 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i6 = i12 | 0;
   i13 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i6 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 32 | 0);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i11, H_BASE + 16 | 0, i7);
 i12 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i7 = i12 | 0;
   i13 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i7 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i12 = i8 | 0;
 i13 = i3 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i12 >> 2] = i3;
 __ZN7WebCore19ResourceRequestBase11setHTTPBodyEN3WTF10PassRefPtrINS_8FormDataEEE(i11, i8);
 i8 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = i8 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i12 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i8 = i1 + 80 | 0;
 __ZN7WebCore11FrameLoader34addExtraFieldsToSubresourceRequestERNS_15ResourceRequestE(i8, i5);
 i3 = HEAP32[(HEAP32[i1 + 456 >> 2] | 0) + 1944 >> 2] | 0;
 __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i10, i8);
 __ZN7WebCore14SecurityPolicy22generateReferrerHeaderENS_14ReferrerPolicyERKNS_3URLERKN3WTF6StringE(i9, i3, i2, i10);
 i2 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i10 = i2 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i10 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = i9 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i11, H_BASE + 8 | 0, i9);
  }
 } while (0);
 __ZN7WebCore10PingLoaderC2EPNS_5FrameERNS_15ResourceRequestE(__ZN3WTF10fastMallocEj(72) | 0, i1, i5);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore15ResourceRequestD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 i2 = i1 | 0;
 i9 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  __ZN7WebCore15ResourceRequestD2Ev(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i9;
  __ZN7WebCore15ResourceRequestD2Ev(i5);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore10PingLoaderC2EPNS_5FrameERNS_15ResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 | 0;
 __ZN7WebCore20ResourceHandleClientC2Ev(i7);
 HEAP32[i1 >> 2] = H_BASE + 192;
 i8 = i1 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 8 | 0;
 i10 = i9;
 __ZN7WebCore9TimerBaseC2Ev(i10);
 HEAP32[i9 >> 2] = H_BASE + 160;
 HEAP32[i1 + 52 >> 2] = i1;
 i9 = i1 + 56 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 6;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i2 + 32 | 0;
 i11 = __ZN7WebCore15ProgressTracker22createUniqueIdentifierEv() | 0;
 i12 = i2 + 80 | 0;
 i13 = HEAP32[i2 + 84 >> 2] | 0;
 i14 = HEAP32[(HEAP32[i13 >> 2] | 0) + 52 >> 2] | 0;
 i15 = __ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i12) | 0;
 HEAP8[i1 + 64 | 0] = (FUNCTION_TABLE_iiii[i14 & 1](i13, i15, i11) | 0) & 1;
 __ZN7WebCore14ResourceHandle6createEPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb(i5, __ZNK7WebCore11FrameLoader17networkingContextEv(i12) | 0, i3, i7, 0, 0);
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i15 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i5;
 do {
  if ((i15 | 0) != 0) {
   i5 = i15 + 4 | 0;
   i8 = i5 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i8 >> 2] = i13;
    break;
   }
   i13 = i5 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
  }
 } while (0);
 i15 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i7 = i15 + 4 | 0;
   i13 = i7 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i13 >> 2] = i5;
    break;
   }
   i5 = i7 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i15 = __ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i12) | 0;
 i12 = i6 | 0;
 __ZN7WebCore20ResourceResponseBaseC2Ev(i12);
 HEAP8[i6 + 160 | 0] = 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore20ResourceResponseBaseD2Ev(i12);
  __ZN7WebCore9TimerBase5startEdd(i10, +6e4, +0);
  STACKTOP = i4;
  return;
 }
 i2 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i9 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore20ResourceResponseBaseD2Ev(i12);
  __ZN7WebCore9TimerBase5startEdd(i10, +6e4, +0);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore24InspectorInstrumentation27continueAfterPingLoaderImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderERNS_15ResourceRequestERKNS_16ResourceResponseE(i2, i11, i15, i3, i6);
 __ZN7WebCore20ResourceResponseBaseD2Ev(i12);
 __ZN7WebCore9TimerBase5startEdd(i10, +6e4, +0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10PingLoaderC1EPNS_5FrameERNS_15ResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 | 0;
 __ZN7WebCore20ResourceHandleClientC2Ev(i7);
 HEAP32[i1 >> 2] = H_BASE + 192;
 i8 = i1 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 8 | 0;
 i10 = i9;
 __ZN7WebCore9TimerBaseC2Ev(i10);
 HEAP32[i9 >> 2] = H_BASE + 160;
 HEAP32[i1 + 52 >> 2] = i1;
 i9 = i1 + 56 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 6;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i2 + 32 | 0;
 i11 = __ZN7WebCore15ProgressTracker22createUniqueIdentifierEv() | 0;
 i12 = i2 + 80 | 0;
 i13 = HEAP32[i2 + 84 >> 2] | 0;
 i14 = HEAP32[(HEAP32[i13 >> 2] | 0) + 52 >> 2] | 0;
 i15 = __ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i12) | 0;
 HEAP8[i1 + 64 | 0] = (FUNCTION_TABLE_iiii[i14 & 1](i13, i15, i11) | 0) & 1;
 __ZN7WebCore14ResourceHandle6createEPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb(i5, __ZNK7WebCore11FrameLoader17networkingContextEv(i12) | 0, i3, i7, 0, 0);
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i15 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i5;
 do {
  if ((i15 | 0) != 0) {
   i5 = i15 + 4 | 0;
   i8 = i5 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i8 >> 2] = i13;
    break;
   }
   i13 = i5 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
  }
 } while (0);
 i15 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i7 = i15 + 4 | 0;
   i13 = i7 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i13 >> 2] = i5;
    break;
   }
   i5 = i7 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i15 = __ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i12) | 0;
 i12 = i6 | 0;
 __ZN7WebCore20ResourceResponseBaseC2Ev(i12);
 HEAP8[i6 + 160 | 0] = 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore20ResourceResponseBaseD2Ev(i12);
  __ZN7WebCore9TimerBase5startEdd(i10, +6e4, +0);
  STACKTOP = i4;
  return;
 }
 i2 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i9 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore20ResourceResponseBaseD2Ev(i12);
  __ZN7WebCore9TimerBase5startEdd(i10, +6e4, +0);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore24InspectorInstrumentation27continueAfterPingLoaderImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderERNS_15ResourceRequestERKNS_16ResourceResponseE(i2, i11, i15, i3, i6);
 __ZN7WebCore20ResourceResponseBaseD2Ev(i12);
 __ZN7WebCore9TimerBase5startEdd(i10, +6e4, +0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10PingLoader9loadImageEPNS_5FrameERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i4 = i3 | 0;
 i5 = i3 + 184 | 0;
 i6 = i3 + 192 | 0;
 i7 = i3 + 200 | 0;
 i8 = i1 + 456 | 0;
 if (!(__ZNK7WebCore14SecurityOrigin10canDisplayERKNS_3URLE(HEAP32[(HEAP32[i8 >> 2] | 0) + 100 >> 2] | 0, i2) | 0)) {
  __ZN7WebCore11FrameLoader21reportLocalLoadFailedEPNS_5FrameERKN3WTF6StringE(i1, i2 | 0);
  STACKTOP = i3;
  return;
 }
 i9 = i4 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i9, i2, 0);
 _memset(i4 + 160 | 0, 0, 19) | 0;
 HEAP32[i4 + 180 >> 2] = 15;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 120 | 0);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i9, H_BASE + 136 | 0, i5);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[(HEAP32[i8 >> 2] | 0) + 1944 >> 2] | 0;
 i8 = __ZNK7WebCore19ResourceRequestBase3urlEv(i9) | 0;
 i10 = i1 + 80 | 0;
 __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i7, i10);
 __ZN7WebCore14SecurityPolicy22generateReferrerHeaderENS_14ReferrerPolicyERKNS_3URLERKN3WTF6StringE(i6, i2, i8, i7);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i8 = i6 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i9, H_BASE + 8 | 0, i6);
  }
 } while (0);
 __ZN7WebCore11FrameLoader34addExtraFieldsToSubresourceRequestERNS_15ResourceRequestE(i10, i4);
 __ZN7WebCore10PingLoaderC2EPNS_5FrameERNS_15ResourceRequestE(__ZN3WTF10fastMallocEj(72) | 0, i1, i4);
 i1 = HEAP32[i8 >> 2] | 0;
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
 __ZN7WebCore15ResourceRequestD2Ev(i4);
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
function __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 4 | 0;
 i6 = i1 + 4 | 0;
 i8 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i8;
 HEAP8[i6] = i8 & -3 | HEAP8[i7] & 2;
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
 HEAP32[i1 + 48 >> 2] = i3;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i3 = i1 + 64 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP32[i5 >> 2] = H_BASE + 112;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i5);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 STACKTOP = i4;
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
function runPostSets() {
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_viid + 2;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_viii + 12;
}
function __ZN7WebCore10PingLoaderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i3);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 8 | 0);
 i3 = HEAP32[i2 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZN7WebCore20ResourceHandleClientD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore10PingLoaderD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i3);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 8 | 0);
 i3 = HEAP32[i2 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZN7WebCore20ResourceHandleClientD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore10PingLoaderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 15](i3);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 8 | 0);
 i3 = HEAP32[i2 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZN7WebCore20ResourceHandleClientD2Ev(i1 | 0);
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
function __ZN7WebCore5TimerINS_10PingLoaderEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 15](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 15](i4, i1);
  return;
 }
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
function viiii___ZN7WebCore20ResourceHandleClient20willSendRequestAsyncEPNS_14ResourceHandleERKNS_15ResourceRequestERKNS_16ResourceResponseE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20ResourceHandleClient20willSendRequestAsyncEPNS_14ResourceHandleERKNS_15ResourceRequestERKNS_16ResourceResponseE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZN7WebCore20ResourceHandleClient23didReceiveResponseAsyncEPNS_14ResourceHandleERKNS_16ResourceResponseE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20ResourceHandleClient23didReceiveResponseAsyncEPNS_14ResourceHandleERKNS_16ResourceResponseE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore10PingLoader14didReceiveDataEPNS_14ResourceHandleEPKcji(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 return;
}
function __ZN7WebCore10PingLoader18didReceiveResponseEPNS_14ResourceHandleERKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 return;
}
function vii___ZN7WebCore20ResourceHandleClient31shouldUseCredentialStorageAsyncEPNS_14ResourceHandleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20ResourceHandleClient31shouldUseCredentialStorageAsyncEPNS_14ResourceHandleE(i1 | 0, i2 | 0);
}
function v___ZN7WebCore20ResourceHandleClient16didReceiveBufferEPNS_14ResourceHandleEN3WTF10PassRefPtrINS_12SharedBufferEEEi__wrapper() {
 __ZN7WebCore20ResourceHandleClient16didReceiveBufferEPNS_14ResourceHandleEN3WTF10PassRefPtrINS_12SharedBufferEEEi();
}
function __ZN7WebCore10PingLoader7didFailEPNS_14ResourceHandleERKNS_13ResourceErrorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 return;
}
function __ZN7WebCore10PingLoader16didFinishLoadingEPNS_14ResourceHandleEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 return;
}
function __ZN7WebCore10PingLoader16createPingLoaderEPNS_5FrameERNS_15ResourceRequestE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10PingLoaderC2EPNS_5FrameERNS_15ResourceRequestE(__ZN3WTF10fastMallocEj(72) | 0, i1, i2);
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
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore20ResourceHandleClient15willSendRequestEPNS_14ResourceHandleERNS_15ResourceRequestERKNS_16ResourceResponseE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZN7WebCore10PingLoader7timeoutEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
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
function __ZN7WebCore20ResourceHandleClient11didSendDataEPNS_14ResourceHandleEyy(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return;
}
function __ZN7WebCore20ResourceHandleClient33didReceiveAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore20ResourceHandleClient32didCancelAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore20ResourceHandleClient20receivedCancellationEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore10PingLoader26shouldUseCredentialStorageEPNS_14ResourceHandleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (HEAP8[i1 + 64 | 0] & 1) != 0 | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_viid(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viid[i1 & 3](i2 | 0, i3 | 0, +d4);
}
function __ZN7WebCore5TimerINS_10PingLoaderEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function b9(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(9);
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
function __ZN7WebCore20ResourceHandleClient13cannotShowURLEPNS_14ResourceHandleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore20ResourceHandleClient10wasBlockedEPNS_14ResourceHandleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function __ZN7WebCore5TimerINS_10PingLoaderEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
}
function __ZN7WebCore20ResourceHandleClient18usesAsyncCallbacksEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b8(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(8);
}
function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
 return 0;
}
function b2(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(2);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZN7WebCore20ResourceHandleClient18usesAsyncCallbacksEv,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,__ZN7WebCore10PingLoader14didReceiveDataEPNS_14ResourceHandleEPKcji,b1];
  var FUNCTION_TABLE_did = [b2,b2,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore5TimerINS_10PingLoaderEED0Ev,b3,__ZN7WebCore5TimerINS_10PingLoaderEE5firedEv,b3,__ZN7WebCore10PingLoaderD0Ev,b3,__ZN7WebCore10PingLoaderD2Ev,b3,__ZN7WebCore5TimerINS_10PingLoaderEED1Ev,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZN7WebCore20ResourceHandleClient10wasBlockedEPNS_14ResourceHandleE,b4,__ZN7WebCore20ResourceHandleClient13cannotShowURLEPNS_14ResourceHandleE,b4,__ZN7WebCore10PingLoader7timeoutEPNS_5TimerIS0_EE,b4,vii___ZN7WebCore20ResourceHandleClient31shouldUseCredentialStorageAsyncEPNS_14ResourceHandleE__wrapper,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore10PingLoaderC2EPNS_5FrameERNS_15ResourceRequestE,b6,__ZN7WebCore10PingLoader7didFailEPNS_14ResourceHandleERKNS_13ResourceErrorE,b6,__ZN7WebCore10PingLoader18didReceiveResponseEPNS_14ResourceHandleERKNS_16ResourceResponseE,b6,viii___ZN7WebCore20ResourceHandleClient23didReceiveResponseAsyncEPNS_14ResourceHandleERKNS_16ResourceResponseE__wrapper,b6,__ZN7WebCore20ResourceHandleClient33didReceiveAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE,b6,__ZN7WebCore20ResourceHandleClient20receivedCancellationEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE,b6,__ZN7WebCore20ResourceHandleClient32didCancelAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE,b6];
  var FUNCTION_TABLE_v = [b7,b7,v___ZN7WebCore20ResourceHandleClient16didReceiveBufferEPNS_14ResourceHandleEN3WTF10PassRefPtrINS_12SharedBufferEEEi__wrapper,b7];
  var FUNCTION_TABLE_viid = [b8,b8,__ZN7WebCore10PingLoader16didFinishLoadingEPNS_14ResourceHandleEd,b8];
  var FUNCTION_TABLE_viiiiii = [b9,b9,__ZN7WebCore20ResourceHandleClient11didSendDataEPNS_14ResourceHandleEyy,b9];
  var FUNCTION_TABLE_iii = [b10,b10,__ZN7WebCore10PingLoader26shouldUseCredentialStorageEPNS_14ResourceHandleE,b10];
  var FUNCTION_TABLE_viiii = [b11,b11,viiii___ZN7WebCore20ResourceHandleClient20willSendRequestAsyncEPNS_14ResourceHandleERKNS_15ResourceRequestERKNS_16ResourceResponseE__wrapper,b11,__ZN7WebCore20ResourceHandleClient15willSendRequestEPNS_14ResourceHandleERNS_15ResourceRequestERKNS_16ResourceResponseE,b11,b11,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viid: dynCall_viid, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viid": invoke_viid, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viid = Module["dynCall_viid"] = asm["dynCall_viid"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore10PingLoaderC2EPNS_5FrameERNS_15ResourceRequestE","__ZN7WebCore10PingLoader14didReceiveDataEPNS_14ResourceHandleEPKcji","__ZN7WebCore10PingLoader7didFailEPNS_14ResourceHandleERKNS_13ResourceErrorE","__ZN7WebCore10PingLoader19sendViolationReportEPNS_5FrameERKNS_3URLEN3WTF10PassRefPtrINS_8FormDataEEE","__ZN7WebCore5TimerINS_10PingLoaderEED0Ev","__ZN7WebCore10PingLoader18didReceiveResponseEPNS_14ResourceHandleERKNS_16ResourceResponseE","_memset","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore20ResourceHandleClient33didReceiveAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore10PingLoader8sendPingEPNS_5FrameERKNS_3URLES5_","__ZN7WebCore20ResourceHandleClient10wasBlockedEPNS_14ResourceHandleE","__ZN7WebCore5TimerINS_10PingLoaderEE5firedEv","__ZN7WebCore10PingLoaderD0Ev","__ZN7WebCore10PingLoaderD2Ev","__ZN7WebCore10PingLoader16createPingLoaderEPNS_5FrameERNS_15ResourceRequestE","__ZN7WebCore10PingLoader16didFinishLoadingEPNS_14ResourceHandleEd","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore5TimerINS_10PingLoaderEED1Ev","__ZN7WebCore10PingLoader26shouldUseCredentialStorageEPNS_14ResourceHandleE","__ZN7WebCore20ResourceHandleClient13cannotShowURLEPNS_14ResourceHandleE","__ZN7WebCore10PingLoader7timeoutEPNS_5TimerIS0_EE","__ZN7WebCore20ResourceHandleClient11didSendDataEPNS_14ResourceHandleEyy","__ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE","__ZN7WebCore20ResourceHandleClient20receivedCancellationEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE","__ZN7WebCore20ResourceHandleClient18usesAsyncCallbacksEv","_memcpy","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore20ResourceResponseBaseD2Ev","__ZN7WebCore20ResourceHandleClient15willSendRequestEPNS_14ResourceHandleERNS_15ResourceRequestERKNS_16ResourceResponseE","__ZN7WebCore10PingLoader9loadImageEPNS_5FrameERKNS_3URLE","__ZN7WebCore20ResourceHandleClient32didCancelAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE"]

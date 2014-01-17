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
H_BASE = parentModule["_malloc"](528 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 528;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13ScriptElementD1Ev;
/* memory initializer */ allocate([106,97,118,97,115,99,114,105,112,116,49,46,49,0,0,0,106,97,118,97,115,99,114,105,112,116,49,46,48,0,0,0,106,97,118,97,115,99,114,105,112,116,0,0,0,0,0,0,71,69,84,0,0,0,0,0,111,110,108,111,97,100,40,41,0,0,0,0,0,0,0,0,111,110,108,111,97,100,0,0,119,105,110,100,111,119,0,0,67,114,111,115,115,45,111,114,105,103,105,110,32,115,99,114,105,112,116,32,108,111,97,100,32,100,101,110,105,101,100,32,98,121,32,67,114,111,115,115,45,79,114,105,103,105,110,32,82,101,115,111,117,114,99,101,32,83,104,97,114,105,110,103,32,112,111,108,105,99,121,46,0,0,0,0,0,0,0,0,106,115,99,114,105,112,116,0,101,99,109,97,115,99,114,105,112,116,0,0,0,0,0,0,108,105,118,101,115,99,114,105,112,116,0,0,0,0,0,0,106,97,118,97,115,99,114,105,112,116,49,46,55,0,0,0,106,97,118,97,115,99,114,105,112,116,49,46,54,0,0,0,106,97,118,97,115,99,114,105,112,116,49,46,53,0,0,0,106,97,118,97,115,99,114,105,112,116,49,46,52,0,0,0,106,97,118,97,115,99,114,105,112,116,49,46,51,0,0,0,106,97,118,97,115,99,114,105,112,116,49,46,50,0,0,0,117,115,101,45,99,114,101,100,101,110,116,105,97,108,115,0,116,101,120,116,47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,232,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
  var __ZN7WebCore9HTMLNames15crossoriginAttrE=env.__ZN7WebCore9HTMLNames15crossoriginAttrE|0;
  var __ZN7WebCore8SVGNames9scriptTagE=env.__ZN7WebCore8SVGNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames9nonceAttrE=env.__ZN7WebCore9HTMLNames9nonceAttrE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore13ScriptElementE=(H_BASE+392)|0;
  var __ZTVN7WebCore26CachedScriptSourceProviderE=(H_BASE+336)|0;
  var __ZTVN3JSC20StringSourceProviderE=(H_BASE+472)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13ScriptElement13requestScriptERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 568 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 312 | 0;
 i10 = i3 + 496 | 0;
 i11 = i3 + 544 | 0;
 i12 = i3 + 552 | 0;
 i13 = i3 + 560 | 0;
 i14 = i1 + 4 | 0;
 i15 = HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i16 = i15 + 8 | 0;
 HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 do {
  if (__ZN7WebCore4Node23dispatchBeforeLoadEventERKN3WTF6StringE(HEAP32[i14 >> 2] | 0, i2) | 0) {
   i16 = HEAP32[i14 >> 2] | 0;
   if ((HEAP32[i16 + 12 >> 2] & 256 | 0) == 0) {
    i17 = 0;
    break;
   }
   if ((HEAP32[(HEAP32[i16 + 20 >> 2] | 0) + 8 >> 2] | 0) != (i15 | 0)) {
    i17 = 0;
    break;
   }
   i18 = HEAP32[i15 + 104 >> 2] | 0;
   i19 = HEAP32[i16 + 48 >> 2] | 0;
   L5 : do {
    if ((i19 | 0) == 0) {
     i20 = __ZN3WTF8nullAtomE;
    } else {
     i16 = HEAP32[i19 + 4 >> 2] | 0;
     if ((i16 & 1 | 0) == 0) {
      i21 = i16 >>> 1 & 134217727;
      i22 = i19 + 20 | 0;
     } else {
      i16 = i19 + 24 | 0;
      i21 = HEAP32[i16 + 8 >> 2] | 0;
      i22 = HEAP32[i16 >> 2] | 0;
     }
     if ((i21 | 0) == 0) {
      i20 = __ZN3WTF8nullAtomE;
      break;
     }
     i16 = HEAP32[__ZN7WebCore9HTMLNames9nonceAttrE >> 2] | 0;
     i23 = i16 + 12 | 0;
     i24 = i16 + 16 | 0;
     i25 = 0;
     while (1) {
      i26 = i22 + (i25 << 3) | 0;
      i27 = HEAP32[i26 >> 2] | 0;
      if ((i27 | 0) == (i16 | 0)) {
       break;
      }
      if ((HEAP32[i27 + 12 >> 2] | 0) == (HEAP32[i23 >> 2] | 0)) {
       if ((HEAP32[i27 + 16 >> 2] | 0) == (HEAP32[i24 >> 2] | 0)) {
        break;
       }
      }
      i27 = i25 + 1 | 0;
      if (i27 >>> 0 < i21 >>> 0) {
       i25 = i27;
      } else {
       i20 = __ZN3WTF8nullAtomE;
       break L5;
      }
     }
     i20 = (i26 | 0) == 0 ? __ZN3WTF8nullAtomE : i22 + (i25 << 3) + 4 | 0;
    }
   } while (0);
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i6, i15, i2);
   i19 = __ZNK7WebCore21ContentSecurityPolicy16allowScriptNonceERKN3WTF6StringES4_RKNS1_13OrdinalNumberERKNS_3URLE(i18, i20 | 0, i15 + 356 | 0, i1 + 12 | 0, i6) | 0;
   i24 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i23 = i24 | 0;
     i16 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i23 >> 2] = i16;
      break;
     }
    }
   } while (0);
   if (!i19) {
    i17 = 0;
    break;
   }
   __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i7, i2);
   i24 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i18 = (HEAP32[i24 + 4 >> 2] | 0) == 0;
     i16 = i24 | 0;
     i23 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      if (i18) {
       break;
      }
     } else {
      HEAP32[i16 >> 2] = i23;
      if (i18) {
       break;
      }
     }
     __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i10, HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i2);
     i18 = i10 | 0;
     i23 = HEAP32[i18 >> 2] | 0;
     HEAP32[i9 >> 2] = i23;
     if ((i23 | 0) != 0) {
      i16 = i23 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
     }
     i16 = HEAP8[i10 + 4 | 0] | 0;
     i23 = i9 + 4 | 0;
     HEAP8[i23] = HEAP8[i23] & -4 | i16 & 1 | i16 & 2;
     HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
     HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
     HEAP32[i9 + 16 >> 2] = HEAP32[i10 + 16 >> 2];
     HEAP32[i9 + 20 >> 2] = HEAP32[i10 + 20 >> 2];
     HEAP32[i9 + 24 >> 2] = HEAP32[i10 + 24 >> 2];
     HEAP32[i9 + 28 >> 2] = HEAP32[i10 + 28 >> 2];
     HEAP32[i9 + 32 >> 2] = HEAP32[i10 + 32 >> 2];
     HEAP32[i9 + 36 >> 2] = HEAP32[i10 + 36 >> 2];
     HEAP32[i9 + 40 >> 2] = HEAP32[i10 + 40 >> 2];
     HEAP32[i9 + 44 >> 2] = HEAP32[i10 + 44 >> 2];
     HEAP32[i9 + 48 >> 2] = 0;
     HEAPF64[i9 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
     i16 = i9 + 64 | 0;
     HEAP32[i16 >> 2] = 0;
     __ZN7WebCore3URL10invalidateEv(i16);
     HEAP32[i4 >> 2] = H_BASE + 56;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9 + 112 | 0, i4);
     __ZN7WebCore13HTTPHeaderMapC1Ev(i9 + 116 | 0);
     _memset(i9 + 136 | 0, 0, 16) | 0;
     HEAP8[i9 + 152 | 0] = 11;
     HEAP32[i9 + 156 >> 2] = 1;
     _memset(i9 + 160 | 0, 0, 19) | 0;
     HEAP32[i9 + 180 >> 2] = 15;
     i16 = i11 | 0;
     HEAP32[i16 >> 2] = 0;
     __ZN7WebCore21CachedResourceRequestC1ERKNS_15ResourceRequestERKN3WTF6StringENS_20ResourceLoadPriorityE(i8, i9, i11, -1);
     i23 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i16 = i23 | 0;
       i27 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i23);
        break;
       } else {
        HEAP32[i16 >> 2] = i27;
        break;
       }
      }
     } while (0);
     __ZN7WebCore15ResourceRequestD2Ev(i9);
     i23 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i25 = i23 | 0;
       i27 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i23);
        break;
       } else {
        HEAP32[i25 >> 2] = i27;
        break;
       }
      }
     } while (0);
     i23 = HEAP32[(HEAP32[i14 >> 2] | 0) + 48 >> 2] | 0;
     L48 : do {
      if ((i23 | 0) == 0) {
       i28 = __ZN3WTF8nullAtomE;
      } else {
       i18 = HEAP32[i23 + 4 >> 2] | 0;
       if ((i18 & 1 | 0) == 0) {
        i29 = i18 >>> 1 & 134217727;
        i30 = i23 + 20 | 0;
       } else {
        i18 = i23 + 24 | 0;
        i29 = HEAP32[i18 + 8 >> 2] | 0;
        i30 = HEAP32[i18 >> 2] | 0;
       }
       if ((i29 | 0) == 0) {
        i28 = __ZN3WTF8nullAtomE;
        break;
       }
       i18 = HEAP32[__ZN7WebCore9HTMLNames15crossoriginAttrE >> 2] | 0;
       i27 = i18 + 12 | 0;
       i25 = i18 + 16 | 0;
       i16 = 0;
       while (1) {
        i31 = i30 + (i16 << 3) | 0;
        i32 = HEAP32[i31 >> 2] | 0;
        if ((i32 | 0) == (i18 | 0)) {
         break;
        }
        if ((HEAP32[i32 + 12 >> 2] | 0) == (HEAP32[i27 >> 2] | 0)) {
         if ((HEAP32[i32 + 16 >> 2] | 0) == (HEAP32[i25 >> 2] | 0)) {
          break;
         }
        }
        i32 = i16 + 1 | 0;
        if (i32 >>> 0 < i29 >>> 0) {
         i16 = i32;
        } else {
         i28 = __ZN3WTF8nullAtomE;
         break L48;
        }
       }
       i28 = (i31 | 0) == 0 ? __ZN3WTF8nullAtomE : i30 + (i16 << 3) + 4 | 0;
      }
     } while (0);
     i23 = HEAP32[i28 >> 2] | 0;
     i25 = (i23 | 0) == 0;
     if (!i25) {
      i27 = i23 | 0;
      HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
      i27 = i1 + 17 | 0;
      HEAP8[i27] = HEAP8[i27] | 2;
      i27 = (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i23, H_BASE + 312 | 0) | 0) & 1 ^ 1;
      __ZN7WebCore29updateRequestForAccessControlERNS_15ResourceRequestEPNS_14SecurityOriginENS_17StoredCredentialsE(i8 | 0, HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 100 >> 2] | 0, i27);
     }
     i27 = HEAP32[i1 + 20 >> 2] | 0;
     i18 = (i27 | 0) == 0;
     if (!i18) {
      i32 = i27 | 0;
      HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 4;
     }
     i32 = i8 + 184 | 0;
     i33 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = i27;
     do {
      if ((i33 | 0) != 0) {
       i32 = i33 | 0;
       i34 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
       if ((i34 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i33);
        break;
       } else {
        HEAP32[i32 >> 2] = i34;
        break;
       }
      }
     } while (0);
     do {
      if (!i18) {
       i33 = i27 | 0;
       i34 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
       if ((i34 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i27);
        break;
       } else {
        HEAP32[i33 >> 2] = i34;
        break;
       }
      }
     } while (0);
     i27 = HEAP32[i14 >> 2] | 0;
     i18 = i12 | 0;
     HEAP32[i18 >> 2] = i27;
     if ((i27 | 0) != 0) {
      i34 = i27 + 8 | 0;
      HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
     }
     __ZN7WebCore21CachedResourceRequest12setInitiatorEN3WTF10PassRefPtrINS_7ElementEEE(i8, i12);
     i34 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i34 | 0) != 0) {
       i18 = i34 + 8 | 0;
       i27 = i18 | 0;
       i33 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       HEAP32[i27 >> 2] = i33;
       if ((i33 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore20CachedResourceLoader13requestScriptERNS_21CachedResourceRequestE(i13, HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 340 >> 2] | 0, i8);
     __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i1 + 8 | 0, HEAP32[i13 >> 2] | 0);
     __ZN7WebCore24CachedResourceHandleBaseD2Ev(i13 | 0);
     i34 = i1 + 16 | 0;
     HEAP8[i34] = HEAP8[i34] | 2;
     do {
      if (!i25) {
       i34 = i23 | 0;
       i18 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i23);
        break;
       } else {
        HEAP32[i34 >> 2] = i18;
        break;
       }
      }
     } while (0);
     __ZN7WebCore21CachedResourceRequestD1Ev(i8);
    }
   } while (0);
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    i17 = 1;
    break;
   }
   i24 = HEAP32[i14 >> 2] | 0;
   i19 = HEAP32[(HEAP32[i24 >> 2] | 0) + 32 >> 2] | 0;
   i23 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
   i25 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i25, i23, 0, 0);
   i23 = i5 | 0;
   HEAP32[i23 >> 2] = i25;
   FUNCTION_TABLE_iii[i19 & 1](i24 | 0, i5) | 0;
   i24 = HEAP32[i23 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i17 = 0;
    break;
   }
   i23 = i24 + 8 | 0;
   i24 = i23 | 0;
   i19 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i24 >> 2] = i19;
    i17 = 0;
    break;
   }
   i19 = i23 - 8 | 0;
   if ((i19 | 0) == 0) {
    i17 = 0;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 31](i19);
   i17 = 0;
  } else {
   i17 = 0;
  }
 } while (0);
 i5 = i15 + 8 | 0;
 i15 = i5 | 0;
 i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 HEAP32[i15 >> 2] = i14;
 if ((i14 | 0) >= 1) {
  STACKTOP = i3;
  return i17 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i17 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return i17 | 0;
}
function __ZN7WebCoreL35isLegacySupportedJavaScriptLanguageERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 312 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 72 | 0;
 i9 = i2 + 80 | 0;
 i10 = i2 + 96 | 0;
 i11 = i2 + 104 | 0;
 i12 = i2 + 120 | 0;
 i13 = i2 + 128 | 0;
 i14 = i2 + 144 | 0;
 i15 = i2 + 152 | 0;
 i16 = i2 + 168 | 0;
 i17 = i2 + 176 | 0;
 i18 = i2 + 192 | 0;
 i19 = i2 + 200 | 0;
 i20 = i2 + 216 | 0;
 i21 = i2 + 224 | 0;
 i22 = i2 + 240 | 0;
 i23 = i2 + 248 | 0;
 i24 = i2 + 264 | 0;
 i25 = i2 + 272 | 0;
 i26 = i2 + 288 | 0;
 i27 = i2 + 296 | 0;
 if (HEAP8[H_BASE + 504 | 0] | 0) {
  i28 = HEAP32[H_BASE + 520 >> 2] | 0;
 } else {
  i29 = __ZN3WTF10fastMallocEj(20) | 0;
  i30 = i29;
  _memset(i29 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 520 >> 2] = i30;
  HEAP8[H_BASE + 504 | 0] = 1;
  i28 = i30;
 }
 do {
  if ((HEAP32[i28 + 12 >> 2] | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i3, H_BASE + 40 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i2 + 8 | 0, i28 | 0, i3, i3);
   i30 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i29 = i30 | 0;
     i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i29 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[H_BASE + 520 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i4, H_BASE + 40 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i5, i30 | 0, i4, i4);
   i30 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i31 = i30 | 0;
     i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i31 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[H_BASE + 520 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 24 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i7, i30 | 0, i6, i6);
   i30 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i29 = i30 | 0;
     i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i29 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[H_BASE + 520 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i8, H_BASE + 8 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i9, i30 | 0, i8, i8);
   i30 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i31 = i30 | 0;
     i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i31 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[H_BASE + 520 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 296 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i11, i30 | 0, i10, i10);
   i30 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i29 = i30 | 0;
     i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i29 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[H_BASE + 520 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i12, H_BASE + 280 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i13, i30 | 0, i12, i12);
   i30 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i31 = i30 | 0;
     i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i31 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[H_BASE + 520 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i14, H_BASE + 264 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i15, i30 | 0, i14, i14);
   i30 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i29 = i30 | 0;
     i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i29 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[H_BASE + 520 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i16, H_BASE + 248 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i17, i30 | 0, i16, i16);
   i30 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i31 = i30 | 0;
     i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i31 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[H_BASE + 520 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i18, H_BASE + 232 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i19, i30 | 0, i18, i18);
   i30 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i29 = i30 | 0;
     i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i29 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[H_BASE + 520 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i20, H_BASE + 216 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i21, i30 | 0, i20, i20);
   i30 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i31 = i30 | 0;
     i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i31 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[H_BASE + 520 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i22, H_BASE + 200 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i23, i30 | 0, i22, i22);
   i30 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i29 = i30 | 0;
     i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i29 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[H_BASE + 520 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i24, H_BASE + 184 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i25, i30 | 0, i24, i24);
   i30 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i31 = i30 | 0;
     i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      break;
     } else {
      HEAP32[i31 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i30 = HEAP32[H_BASE + 520 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i26, H_BASE + 176 | 0);
   __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i27, i30 | 0, i26, i26);
   i30 = HEAP32[i26 >> 2] | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   i29 = i30 | 0;
   i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i30);
    break;
   } else {
    HEAP32[i29 >> 2] = i31;
    break;
   }
  }
 } while (0);
 i26 = HEAP32[H_BASE + 520 >> 2] | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 if ((i27 | 0) == 0) {
  i32 = 0;
  STACKTOP = i2;
  return i32 | 0;
 }
 i24 = HEAP32[i26 + 8 >> 2] | 0;
 i26 = i1 | 0;
 i1 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i26 >> 2] | 0) | 0;
 i25 = (i1 >>> 23) + ~i1 | 0;
 i22 = i25 << 12 ^ i25;
 i25 = i22 >>> 7 ^ i22;
 i22 = i25 << 2 ^ i25;
 i25 = i22 >>> 20 ^ i22 | 1;
 i22 = i1;
 i1 = 0;
 while (1) {
  i23 = i22 & i24;
  i20 = i27 + (i23 << 2) | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  i18 = i21;
  if ((i18 | 0) == 0) {
   i33 = 0;
   break;
  } else if ((i18 | 0) != (-1 | 0)) {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i21, HEAP32[i26 >> 2] | 0) | 0) {
    i33 = i20;
    break;
   }
  }
  i20 = (i1 | 0) == 0 ? i25 : i1;
  i22 = i20 + i23 | 0;
  i1 = i20;
 }
 i32 = (i33 | 0) != 0;
 STACKTOP = i2;
 return i32 | 0;
}
function __ZN7WebCore13ScriptElement13prepareScriptERKN3WTF12TextPositionENS0_17LegacyTypeSupportE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 76 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = i1 + 16 | 0;
 i16 = HEAP8[i15] | 0;
 if ((i16 & 4) != 0) {
  i17 = 0;
  STACKTOP = i4;
  return i17 | 0;
 }
 do {
  if ((i16 & 1) == 0) {
   i18 = 0;
   i19 = i1;
  } else {
   HEAP8[i15] = i16 & -2;
   i20 = i1;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 48 >> 2] & 7](i1) | 0) {
    i18 = 1;
    i19 = i20;
    break;
   }
   HEAP8[i15] = HEAP8[i15] | -128;
   i18 = 1;
   i19 = i20;
  }
 } while (0);
 i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 56 >> 2] & 7](i1) | 0;
 i20 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if (!i16) {
   if ((HEAP32[i20 + 36 >> 2] | 0) == 0) {
    i17 = 0;
   } else {
    break;
   }
   STACKTOP = i4;
   return i17 | 0;
  }
 } while (0);
 i16 = i1 + 4 | 0;
 if ((HEAP32[i20 + 12 >> 2] & 256 | 0) == 0) {
  i17 = 0;
  STACKTOP = i4;
  return i17 | 0;
 }
 if (!(__ZNK7WebCore13ScriptElement21isScriptTypeSupportedENS0_17LegacyTypeSupportE(i1, i3) | 0)) {
  i17 = 0;
  STACKTOP = i4;
  return i17 | 0;
 }
 i3 = HEAP8[i15] | 0;
 if (i18) {
  i18 = i3 & 126 | 1;
  HEAP8[i15] = i18;
  i21 = i18;
 } else {
  i21 = i3;
 }
 HEAP8[i15] = i21 | 4;
 i21 = HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i3 = HEAP32[i21 + 332 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i17 = 0;
  STACKTOP = i4;
  return i17 | 0;
 }
 if (!(__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(HEAP32[i3 + 460 >> 2] | 0, 0) | 0)) {
  i17 = 0;
  STACKTOP = i4;
  return i17 | 0;
 }
 if (!(__ZNK7WebCore13ScriptElement25isScriptForEventSupportedEv(i1) | 0)) {
  i17 = 0;
  STACKTOP = i4;
  return i17 | 0;
 }
 i3 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 7](i5, i1);
 i18 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i18 | 0) == 0) {
   i22 = i1 + 20 | 0;
   i23 = 28;
  } else {
   i5 = (HEAP32[i18 + 4 >> 2] | 0) == 0;
   i20 = i18 | 0;
   i24 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    i25 = i1 + 20 | 0;
    if (i5) {
     i22 = i25;
     i23 = 28;
     break;
    } else {
     i26 = i25;
    }
   } else {
    HEAP32[i20 >> 2] = i24;
    i24 = i1 + 20 | 0;
    if (i5) {
     i22 = i24;
     i23 = 28;
     break;
    } else {
     i26 = i24;
    }
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 7](i6, i1);
   i24 = i6 | 0;
   i5 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   i20 = i26 | 0;
   i25 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = i5;
   do {
    if ((i25 | 0) != 0) {
     i5 = i25 | 0;
     i20 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i5 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i25 = HEAP32[i24 >> 2] | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   i20 = i25 | 0;
   i5 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i20 >> 2] = i5;
    break;
   }
  }
 } while (0);
 do {
  if ((i23 | 0) == 28) {
   __ZNK7WebCore8Document8encodingEv(i7, i21);
   i26 = i7 | 0;
   i6 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   i18 = i22 | 0;
   i5 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i6;
   do {
    if ((i5 | 0) != 0) {
     i6 = i5 | 0;
     i18 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i6 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i26 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i24 = i5 | 0;
   i18 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i24 >> 2] = i18;
    break;
   }
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 56 >> 2] & 7](i1) | 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 7](i8, i1);
   i22 = __ZN7WebCore13ScriptElement13requestScriptERKN3WTF6StringE(i1, i8) | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i23 = i7 | 0;
     i18 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i23 >> 2] = i18;
      break;
     }
    }
   } while (0);
   if (i22) {
    break;
   } else {
    i17 = 0;
   }
   STACKTOP = i4;
   return i17 | 0;
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 56 >> 2] & 7](i1) | 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 52 >> 2] & 7](i1) | 0)) {
    break;
   }
   if ((HEAP8[i15] & 1) == 0) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 48 >> 2] & 7](i1) | 0) {
    break;
   }
   HEAP8[i15] = HEAP8[i15] | 80;
   i17 = 1;
   STACKTOP = i4;
   return i17 | 0;
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 56 >> 2] & 7](i1) | 0) {
   if ((HEAP8[i15] & 1) == 0) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 48 >> 2] & 7](i1) | 0) {
    break;
   }
   HEAP8[i15] = HEAP8[i15] | 16;
   i17 = 1;
   STACKTOP = i4;
   return i17 | 0;
  }
 } while (0);
 do {
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 56 >> 2] & 7](i1) | 0)) {
   if ((HEAP8[i15] & 1) == 0) {
    break;
   }
   if (__ZNK7WebCore8Document21haveStylesheetsLoadedEv(i21) | 0) {
    break;
   }
   HEAP8[i15] = HEAP8[i15] | 48;
   i17 = 1;
   STACKTOP = i4;
   return i17 | 0;
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 56 >> 2] & 7](i1) | 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 48 >> 2] & 7](i1) | 0) {
    break;
   }
   if ((HEAP8[i15] | 0) < 0) {
    break;
   }
   i8 = i1 + 17 | 0;
   HEAP8[i8] = HEAP8[i8] | 1;
   i8 = HEAP32[i21 + 1268 >> 2] | 0;
   i3 = i1 + 8 | 0;
   i7 = i9 | 0;
   __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i7, i3 | 0);
   __ZN7WebCore12ScriptRunner23queueScriptForExecutionEPNS_13ScriptElementENS_20CachedResourceHandleINS_12CachedScriptEEENS0_13ExecutionTypeE(i8, i1, i9, 1);
   __ZN7WebCore24CachedResourceHandleBaseD2Ev(i7);
   __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(HEAP32[i3 >> 2] | 0, i1 | 0);
   i17 = 1;
   STACKTOP = i4;
   return i17 | 0;
  }
 } while (0);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 56 >> 2] & 7](i1) | 0) {
  i19 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1268 >> 2] | 0;
  i9 = i1 + 8 | 0;
  i15 = i10 | 0;
  __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i15, i9 | 0);
  __ZN7WebCore12ScriptRunner23queueScriptForExecutionEPNS_13ScriptElementENS_20CachedResourceHandleINS_12CachedScriptEEENS0_13ExecutionTypeE(i19, i1, i10, 0);
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i15);
  __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(HEAP32[i9 >> 2] | 0, i1 | 0);
  i17 = 1;
  STACKTOP = i4;
  return i17 | 0;
 }
 if ((HEAP32[i21 + 1960 >> 2] | 0) == 0) {
  i9 = i2;
  i2 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i11 + 4 >> 2] = i2;
 } else {
  HEAP32[i11 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
 }
 __ZN7WebCore17TextNodeTraversal16contentsAsStringEPKNS_13ContainerNodeE(i14, HEAP32[i16 >> 2] | 0);
 __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i13, i14, i21 + 356 | 0, i12);
 __ZN7WebCore13ScriptElement13executeScriptERKNS_16ScriptSourceCodeE(i1, i13);
 i1 = HEAP32[i13 + 28 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i12 = i1 | 0;
   i21 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i12 >> 2] = i21;
    break;
   }
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i13 + 24 | 0);
 i1 = HEAP32[i13 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i21 = i1 + 4 | 0;
   i12 = i21 | 0;
   i16 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i12 >> 2] = i16;
    break;
   }
   i16 = i21 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
  }
 } while (0);
 i1 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 + 4 | 0;
   i16 = i13 | 0;
   i21 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i16 >> 2] = i21;
    break;
   }
   i21 = i13 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
  }
 } while (0);
 i1 = HEAP32[i14 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i17 = 1;
  STACKTOP = i4;
  return i17 | 0;
 }
 i14 = i1 | 0;
 i21 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i21 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i17 = 1;
  STACKTOP = i4;
  return i17 | 0;
 } else {
  HEAP32[i14 >> 2] = i21;
  i17 = 1;
  STACKTOP = i4;
  return i17 | 0;
 }
 return 0;
}
function __ZNK7WebCore13ScriptElement21isScriptTypeSupportedENS0_17LegacyTypeSupportE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 32 >> 2] & 7](i6, i1);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] & 7](i7, i1);
 i1 = i6 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (i12) {
  i13 = 3;
 } else {
  if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
   i13 = 3;
  } else {
   i13 = 6;
  }
 }
 do {
  if ((i13 | 0) == 3) {
   i14 = HEAP32[i7 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i15 = 1;
    break;
   }
   if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
    i15 = 1;
    break;
   }
   if (i12) {
    i13 = 7;
   } else {
    i13 = 6;
   }
  }
 } while (0);
 do {
  if ((i13 | 0) == 6) {
   if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
    i13 = 7;
    break;
   }
   __ZNK3WTF6String15stripWhiteSpaceEv(i10, i6);
   __ZNK3WTF6String5lowerEv(i9, i10);
   do {
    if (__ZN7WebCore16MIMETypeRegistry29isSupportedJavaScriptMIMETypeERKN3WTF6StringE(i9) | 0) {
     i16 = 1;
    } else {
     if ((i2 | 0) != 1) {
      i16 = 0;
      break;
     }
     i16 = __ZN7WebCoreL35isLegacySupportedJavaScriptLanguageERKN3WTF6StringE(i6) | 0;
    }
   } while (0);
   i12 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i14 = i12 | 0;
     i17 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i14 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i17 = i12 | 0;
     i14 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i17 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if (i16) {
    i15 = 1;
   } else {
    i13 = 45;
   }
  }
 } while (0);
 do {
  if ((i13 | 0) == 7) {
   __ZNK3WTF6String5lowerEv(i8, i7);
   i16 = i8 | 0;
   i10 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i18 = 0;
    } else {
     i9 = i10 | 0;
     i2 = HEAP32[i9 >> 2] | 0;
     i11 = i2 + 2 | 0;
     HEAP32[i9 >> 2] = i2 + 4;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      i18 = i10;
      break;
     } else {
      HEAP32[i9 >> 2] = i11;
      i18 = i10;
      break;
     }
    }
   } while (0);
   i10 = i5 | 0;
   HEAP32[i10 >> 2] = i18;
   i11 = (i18 | 0) == 0;
   if (!i11) {
    i9 = i18 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, H_BASE + 328 | 0, i5);
   i9 = i4 | 0;
   i2 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i12;
      break;
     }
    }
   } while (0);
   if ((i2 | 0) == 0) {
    _WTFCrash();
    return 0;
   }
   i9 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i2;
   do {
    if ((i9 | 0) != 0) {
     i12 = i9 | 0;
     i10 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i12 >> 2] = i10;
      break;
     }
    }
   } while (0);
   do {
    if (!i11) {
     i9 = i18 | 0;
     i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i9 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i2 = i11 | 0;
     i9 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i2 >> 2] = i9;
      break;
     }
    }
   } while (0);
   if (__ZN7WebCore16MIMETypeRegistry29isSupportedJavaScriptMIMETypeERKN3WTF6StringE(i6) | 0) {
    i15 = 1;
    break;
   }
   if (__ZN7WebCoreL35isLegacySupportedJavaScriptLanguageERKN3WTF6StringE(i7) | 0) {
    i15 = 1;
   } else {
    i13 = 45;
   }
  }
 } while (0);
 if ((i13 | 0) == 45) {
  i15 = 0;
 }
 i13 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i7 = i13 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i1 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return i15 | 0;
 }
 i1 = i13 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i3;
  return i15 | 0;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return i15 | 0;
 }
 return 0;
}
function __ZN7WebCore13ScriptElement13executeScriptERKNS_16ScriptSourceCodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 56 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == (HEAP32[i2 + 8 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i10 = HEAP32[i9 + 104 >> 2] | 0;
 i11 = HEAP32[i8 + 48 >> 2] | 0;
 L4 : do {
  if ((i11 | 0) == 0) {
   i12 = __ZN3WTF8nullAtomE;
  } else {
   i8 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i8 & 1 | 0) == 0) {
    i13 = i8 >>> 1 & 134217727;
    i14 = i11 + 20 | 0;
   } else {
    i8 = i11 + 24 | 0;
    i13 = HEAP32[i8 + 8 >> 2] | 0;
    i14 = HEAP32[i8 >> 2] | 0;
   }
   if ((i13 | 0) == 0) {
    i12 = __ZN3WTF8nullAtomE;
    break;
   }
   i8 = HEAP32[__ZN7WebCore9HTMLNames9nonceAttrE >> 2] | 0;
   i15 = i8 + 12 | 0;
   i16 = i8 + 16 | 0;
   i17 = 0;
   while (1) {
    i18 = i14 + (i17 << 3) | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (i8 | 0)) {
     break;
    }
    if ((HEAP32[i19 + 12 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
     if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
      break;
     }
    }
    i19 = i17 + 1 | 0;
    if (i19 >>> 0 < i13 >>> 0) {
     i17 = i19;
    } else {
     i12 = __ZN3WTF8nullAtomE;
     break L4;
    }
   }
   i12 = (i18 | 0) == 0 ? __ZN3WTF8nullAtomE : i14 + (i17 << 3) + 4 | 0;
  }
 } while (0);
 i14 = i1 + 12 | 0;
 i18 = i5 | 0;
 HEAP32[i18 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 i13 = __ZNK7WebCore21ContentSecurityPolicy16allowScriptNonceERKN3WTF6StringES4_RKNS1_13OrdinalNumberERKNS_3URLE(i10, i12 | 0, i9 + 356 | 0, i14, i5) | 0;
 i5 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i18 = i5 | 0;
   i9 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i18 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if (!i13) {
  STACKTOP = i3;
  return;
 }
 i13 = i1 + 16 | 0;
 do {
  if ((HEAP8[i13] & 2) == 0) {
   i1 = HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   if (__ZNK7WebCore21ContentSecurityPolicy17allowInlineScriptERKN3WTF6StringERKNS1_13OrdinalNumberENS0_15ReportingStatusE(HEAP32[i1 + 104 >> 2] | 0, i1 + 356 | 0, i14, 0) | 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i14 = HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i1 = i14 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i1 = HEAP32[i14 + 332 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = (HEAP8[i13] & 2) == 0 ? 0 : i14;
   i9 = (i5 | 0) == 0 ? 0 : i5 + 1092 | 0;
   i5 = (i9 | 0) == 0;
   if (!i5) {
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   i18 = HEAP32[i7 >> 2] | 0;
   do {
    if ((HEAP32[i18 + 12 >> 2] & 16 | 0) == 0) {
     i20 = 0;
    } else {
     i12 = (HEAP32[(HEAP32[i18 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0);
     i10 = i12 & 1;
     if (!i12) {
      i20 = i10;
      break;
     }
     i12 = i4 | 0;
     HEAP32[i12 >> 2] = i18;
     if ((i18 | 0) != 0) {
      i11 = i18 + 8 | 0;
      HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
     }
     __ZN7WebCore8Document17pushCurrentScriptEN3WTF10PassRefPtrINS_17HTMLScriptElementEEE(i14, i4);
     i11 = HEAP32[i12 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i20 = i10;
      break;
     }
     i12 = i11 + 8 | 0;
     i11 = i12 | 0;
     i16 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     HEAP32[i11 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      i20 = i10;
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      i20 = i10;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
     i20 = i10;
    }
   } while (0);
   __ZN7WebCore16ScriptController8evaluateERKNS_16ScriptSourceCodeE(i6, HEAP32[i1 + 460 >> 2] | 0, i2);
   __ZN10Deprecated11ScriptValueD1Ev(i6);
   if (i20 << 24 >> 24 != 0) {
    __ZN7WebCore8Document16popCurrentScriptEv(i14);
   }
   if (i5) {
    break;
   }
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - 1;
  }
 } while (0);
 i20 = i14 + 8 | 0;
 i14 = i20 | 0;
 i6 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i2 | 0) | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = (i3 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i7 | 0, i10 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (i9) {
   if ((i10 | 0) == 0) {
    i12 = 9;
   } else {
    i12 = 11;
   }
  } else {
   i11 = (i10 | 0) == 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    if (i11) {
     i12 = 9;
     break;
    } else {
     i12 = 11;
     break;
    }
   }
   do {
    if (i11) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i12 = 34;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 34;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i13 = i5 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i12 = 34;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i10;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 0;
     i15 = i14;
     i16 = i13;
    }
   } while (0);
   if ((i12 | 0) == 34) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i16 + (i11 << 1) >> 1] = HEAPU8[i2 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i17 = 0;
      }
      while (1) {
       HEAP16[i16 + (i17 + i7 << 1) >> 1] = HEAP16[i14 + (i17 << 1) >> 1] | 0;
       i17 = i17 + 1 | 0;
       if (i17 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     } else {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i18 = 0;
      }
      while (1) {
       HEAP16[i16 + (i18 + i7 << 1) >> 1] = HEAPU8[i14 + i18 | 0] | 0;
       i18 = i18 + 1 | 0;
       if (i18 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 9) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i12 = 18;
    break;
   }
   i18 = i15 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i19 = i15;
   i20 = 0;
  } else if ((i12 | 0) == 11) {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 18;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i15 = i6 | 0;
   i18 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i18 | 0) == 0) {
    i12 = 18;
    break;
   }
   i15 = i18 + 20 | 0;
   HEAP32[i18 >> 2] = 2;
   HEAP32[i18 + 4 >> 2] = i10;
   HEAP32[i18 + 8 >> 2] = i15;
   HEAP32[i18 + 12 >> 2] = 0;
   HEAP32[i18 + 16 >> 2] = 32;
   i19 = i18;
   i20 = i15;
  }
 } while (0);
 if ((i12 | 0) == 18) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 _memcpy(i20 | 0, i2 | 0, i7) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = HEAP32[i2 + 4 >> 2] | 0;
   i12 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i21 = 0;
   }
   while (1) {
    HEAP8[i20 + (i21 + i7) | 0] = HEAP8[i12 + i21 | 0] | 0;
    i21 = i21 + 1 | 0;
    if (i21 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i19;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore13ScriptElement25isScriptForEventSupportedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 7](i3, i1);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 40 >> 2] & 7](i4, i1);
 i1 = i3 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 24;
  } else {
   if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
    i8 = 24;
    break;
   }
   i9 = i4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i8 = 24;
    break;
   }
   if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
    i8 = 24;
    break;
   }
   __ZNK3WTF6String15stripWhiteSpaceEv(i5, i4);
   i10 = i5 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i12 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i11;
   do {
    if ((i12 | 0) != 0) {
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
   i12 = HEAP32[i10 >> 2] | 0;
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
   if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i9 >> 2] | 0, H_BASE + 88 | 0) | 0)) {
    i14 = 0;
    i15 = i9;
    break;
   }
   __ZNK3WTF6String15stripWhiteSpaceEv(i6, i3);
   i12 = i6 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i11 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i10;
   do {
    if ((i11 | 0) != 0) {
     i10 = i11 | 0;
     i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i10 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i13 = i11 | 0;
     i10 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i13 >> 2] = i10;
      break;
     }
    }
   } while (0);
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 80 | 0) | 0) {
    i8 = 24;
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 64 | 0) | 0) {
    i8 = 24;
   } else {
    i14 = 0;
    i15 = i9;
   }
  }
 } while (0);
 if ((i8 | 0) == 24) {
  i14 = 1;
  i15 = i4 | 0;
 }
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 | 0;
   i8 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i15 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return i14 | 0;
 }
 i1 = i4 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return i14 | 0;
 } else {
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i2;
  return i14 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i10 << 2) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i13) | 0;
   i13 = (i17 >>> 23) + ~i17 | 0;
   i18 = i13 << 12 ^ i13;
   i13 = i18 >>> 7 ^ i18;
   i18 = i13 << 2 ^ i13;
   i13 = i18 >>> 20 ^ i18 | 1;
   i18 = i17;
   i17 = 0;
   i19 = 0;
   while (1) {
    i20 = i18 & i16;
    i21 = i14 + (i20 << 2) | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    i23 = i22;
    if ((i23 | 0) == 0) {
     i24 = 6;
     break;
    } else if ((i23 | 0) == (-1 | 0)) {
     i25 = i21;
    } else {
     if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i22, HEAP32[i12 >> 2] | 0) | 0) {
      i26 = i21;
      break;
     } else {
      i25 = i19;
     }
    }
    i22 = (i17 | 0) == 0 ? i13 : i17;
    i18 = i22 + i20 | 0;
    i17 = i22;
    i19 = i25;
   }
   if ((i24 | 0) == 6) {
    i24 = 0;
    i26 = (i19 | 0) != 0 ? i19 : i21;
   }
   i17 = i26 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i13 = i18 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i18;
   i15 = (i2 | 0) == (i3 | 0) ? i26 : i11;
  }
  i18 = i10 + 1 | 0;
  if ((i18 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i18;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i27 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i27 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i26 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i26;
     break;
    }
   }
  } while (0);
  i1 = i27 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i27 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i8 >> 2] | 0) | 0;
 i9 = (i3 >>> 23) + ~i3 | 0;
 i7 = i9 << 12 ^ i9;
 i9 = i7 >>> 7 ^ i7;
 i7 = i9 << 2 ^ i9;
 i9 = i7 >>> 20 ^ i7 | 1;
 i7 = 0;
 i11 = i3;
 i3 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 8;
    break;
   } else {
    i16 = i7;
   }
  }
  i14 = (i3 | 0) == 0 ? i9 : i3;
  i7 = i16;
  i11 = i14 + i12 | 0;
  i3 = i14;
 }
 if ((i17 | 0) == 8) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i13;
  HEAP32[i3 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i7 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i7 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i7;
 }
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i18 | 0;
 i13 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i4;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i7 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i7;
 i13 = i2 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i7 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i4 << 1;
   i21 = (i7 * 6 & -1 | 0) < (i17 | 0) ? i4 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i3 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i9 >> 2] = 0;
  i10 = 0;
  i11 = 1;
 } else {
  HEAP32[i9 >> 2] = i8;
  i12 = i8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  i10 = 1;
  i11 = 0;
 }
 i12 = __ZN3WTF10fastMallocEj(28) | 0;
 i8 = i12;
 __ZN3JSC14SourceProviderC2ERKN3WTF6StringERKNS1_12TextPositionE(i8, i6, i4);
 HEAP32[i12 >> 2] = H_BASE + 480;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i12 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i12 = i6 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i8;
 do {
  if (i10) {
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (i11) {
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i2 = i10 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i2 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i12 = i9 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 i11 = (HEAP32[i4 + 4 >> 2] | 0) + 1 | 0;
 HEAP32[i1 + 4 >> 2] = i9;
 HEAP32[i1 + 8 >> 2] = 0;
 i4 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 7](i9) | 0) >> 2] | 0;
 if ((i4 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i4 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 12 >> 2] = i13;
 HEAP32[i1 + 16 >> 2] = (i12 | 0) < 1 ? 1 : i12;
 HEAP32[i1 + 20 >> 2] = (i11 | 0) < 1 ? 1 : i11;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i1 + 24 | 0);
 i11 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i7 = i11 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i3 + 4 | 0;
 i11 = i1 + 32 | 0;
 i12 = HEAP8[i11] & -2 | HEAP8[i7] & 1;
 HEAP8[i11] = i12;
 HEAP8[i11] = i12 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i3 + 44 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13ScriptElement14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 8 | 0;
 i6 = i5 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i1 + 17 | 0;
 i9 = i1 + 4 | 0;
 do {
  if ((HEAP8[i8] & 2) != 0) {
   i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 100 >> 2] | 0;
   if (__ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(i10, __ZNK7WebCore20ResourceResponseBase3urlEv(i5 + 272 | 0) | 0) | 0) {
    break;
   }
   if (__ZN7WebCore14CachedResource24passesAccessControlCheckEPNS_14SecurityOriginE(HEAP32[i7 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 100 >> 2] | 0) | 0) {
    break;
   }
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 32 >> 2] | 0;
   i12 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
   i13 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i13, i12, 0, 0);
   i12 = i3 | 0;
   HEAP32[i12 >> 2] = i13;
   FUNCTION_TABLE_iii[i11 & 1](i10 | 0, i3) | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i12 = i10 + 8 | 0;
     i11 = i12 | 0;
     i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i11 >> 2] = i13;
      break;
     }
     i13 = i12 - 8 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
    }
   } while (0);
   if (HEAP8[H_BASE + 512 | 0] | 0) {
    i14 = HEAP32[H_BASE + 528 >> 2] | 0;
   } else {
    i10 = __Znwj(4) | 0;
    HEAP32[i4 >> 2] = H_BASE + 96;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i4);
    HEAP32[H_BASE + 528 >> 2] = i10;
    HEAP8[H_BASE + 512 | 0] = 1;
    i14 = i10;
   }
   i10 = HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 316 >> 2] & 1](i10, 1, 3, i14, 0);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1268 >> 2] | 0;
 if ((HEAP8[i8] & 1) == 0) {
  __ZN7WebCore12ScriptRunner17notifyScriptReadyEPNS_13ScriptElementENS0_13ExecutionTypeE(i14, i1, 0);
 } else {
  __ZN7WebCore12ScriptRunner17notifyScriptReadyEPNS_13ScriptElementENS0_13ExecutionTypeE(i14, i1, 1);
 }
 __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i6, 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13ScriptElement7executeEPNS_12CachedScriptE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 do {
  if ((((HEAP32[i2 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
   i7 = HEAP32[i1 + 4 >> 2] | 0;
   i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] | 0;
   i9 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
   i10 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i10, i9, 0, 0);
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = i10;
   FUNCTION_TABLE_iii[i8 & 1](i7 | 0, i4) | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i9 = i7 + 8 | 0;
   i7 = i9 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i9 - 8 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  } else {
   if ((HEAP8[i2 + 549 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore16ScriptSourceCodeC2EPNS_12CachedScriptE(i5, i2);
   __ZN7WebCore13ScriptElement13executeScriptERKNS_16ScriptSourceCodeE(i1, i5);
   i8 = HEAP32[i5 + 28 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i9 >> 2] = i7;
      break;
     }
    }
   } while (0);
   __ZN7WebCore24CachedResourceHandleBaseD2Ev(i5 + 24 | 0);
   i8 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i7 = i8 + 4 | 0;
     i9 = i7 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i7 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i10 = i8 + 4 | 0;
     i7 = i10 | 0;
     i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i7 >> 2] = i9;
      break;
     }
     i9 = i10 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
    }
   } while (0);
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 31](i1);
  }
 } while (0);
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i6, i1 | 0);
 STACKTOP = i3;
 return;
}
function __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = -1640531527;
  i7 = i3 + 4 | 0;
  HEAP8[i7] = 0;
  i8 = i3 + 6 | 0;
  HEAP16[i8 >> 1] = 0;
  __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i3, i4, i5);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((HEAP8[i7] & 1) == 0) {
   i9 = i5;
  } else {
   i7 = (HEAPU16[i8 >> 1] | 0) + i5 | 0;
   i5 = i7 << 11 ^ i7;
   i9 = (i5 >>> 17) + i5 | 0;
  }
  i5 = i9 << 3 ^ i9;
  i9 = (i5 >>> 5) + i5 | 0;
  i5 = i9 << 2 ^ i9;
  i9 = (i5 >>> 15) + i5 | 0;
  i5 = (i9 << 10 ^ i9) & 16777215;
  i10 = (i5 | 0) == 0 ? 8388608 : i5;
  STACKTOP = i2;
  return i10 | 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = (i9 & 1 | 0) == 0;
 i7 = i9 >>> 1;
 if ((i7 | 0) == 0) {
  i11 = i5;
  i12 = -1640531527;
 } else {
  i9 = i7;
  i8 = i5;
  i6 = -1640531527;
  while (1) {
   i4 = i9 - 1 | 0;
   i3 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8] | 0) << 1) >> 1] | 0) + i6 | 0;
   i13 = i3 << 16 ^ i3 ^ (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8 + 1 | 0] | 0) << 1) >> 1] | 0) << 11;
   i14 = (i13 >>> 11) + i13 | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i9 = i4;
    i8 = i8 + 2 | 0;
    i6 = i14;
   }
  }
  i11 = i5 + (i7 << 1) | 0;
  i12 = i14;
 }
 if (i1) {
  i15 = i12;
 } else {
  i1 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i11] | 0) << 1) >> 1] | 0) + i12 | 0;
  i12 = i1 << 11 ^ i1;
  i15 = (i12 >>> 17) + i12 | 0;
 }
 i12 = i15 << 3 ^ i15;
 i15 = (i12 >>> 5) + i12 | 0;
 i12 = i15 << 2 ^ i15;
 i15 = (i12 >>> 15) + i12 | 0;
 i12 = (i15 << 10 ^ i15) & 16777215;
 i10 = (i12 | 0) == 0 ? 8388608 : i12;
 STACKTOP = i2;
 return i10 | 0;
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
function __ZN7WebCore16ScriptSourceCodeC2EPNS_12CachedScriptE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN3WTF10fastMallocEj(32) | 0;
 i6 = i5;
 i7 = i2 | 0;
 i8 = __ZNK7WebCore20ResourceResponseBase3urlEv(i2 + 272 | 0) | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3JSC14SourceProviderC2ERKN3WTF6StringERKNS1_12TextPositionE(i6, i8, i4);
 i4 = i5 + 24 | 0;
 HEAP32[i5 >> 2] = H_BASE + 344;
 HEAP32[i4 >> 2] = H_BASE + 364;
 i8 = i5 + 28 | 0;
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i8, i7);
 __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(HEAP32[i8 >> 2] | 0, i4);
 HEAP32[i1 >> 2] = i6;
 if ((i5 | 0) != 0) {
  i4 = i5 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = 0;
 i4 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 7](i6) | 0) >> 2] | 0;
 if ((i4 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = HEAP32[i4 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 12 >> 2] = i9;
 HEAP32[i1 + 16 >> 2] = 1;
 HEAP32[i1 + 20 >> 2] = 1;
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 + 24 | 0, i7);
 i7 = i1 + 28 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i7);
 STACKTOP = i3;
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
function __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = (i3 & 1 | 0) == 0;
 i5 = i3 >>> 1;
 if ((i5 | 0) == 0) {
  i6 = i2;
 } else {
  i3 = i1 | 0;
  i7 = i5 << 1;
  i8 = i5;
  i5 = i2;
  while (1) {
   i9 = i8 - 1 | 0;
   i10 = _u_foldCase(HEAPU16[i5 >> 1] | 0, 0) | 0;
   i11 = _u_foldCase(HEAPU16[i5 + 2 >> 1] | 0, 0) | 0;
   i12 = (HEAP32[i3 >> 2] | 0) + (i10 & 65535) | 0;
   i10 = i12 ^ i11 << 11 & 134215680 ^ i12 << 16;
   HEAP32[i3 >> 2] = (i10 >>> 11) + i10;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i8 = i9;
    i5 = i5 + 4 | 0;
   }
  }
  i6 = i2 + (i7 << 1) | 0;
 }
 if (i4) {
  return;
 }
 i4 = _u_foldCase(HEAPU16[i6 >> 1] | 0, 0) | 0;
 i6 = i1 + 4 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  HEAP16[i1 + 6 >> 1] = i4;
  HEAP8[i6] = 1;
  return;
 } else {
  HEAP8[i6] = 0;
  i6 = i1 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) + (HEAPU16[i1 + 6 >> 1] | 0) | 0;
  i1 = i7 ^ i4 << 11 & 134215680 ^ i7 << 16;
  HEAP32[i6 >> 2] = (i1 >>> 11) + i1;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 6;
}
function __ZN7WebCore13ScriptElementC2EPNS_7ElementEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 HEAP32[i1 >> 2] = H_BASE + 400;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = i2;
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 + 8 | 0, 0);
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = -1;
 i8 = i3 & 1;
 HEAP8[i1 + 16 | 0] = (i8 << 7 | i8 | (i4 & 1) << 2) ^ -128;
 i4 = i1 + 17 | 0;
 HEAP8[i4] = HEAP8[i4] & -4;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 if (!i3) {
  STACKTOP = i5;
  return;
 }
 if ((__ZNK7WebCore8Document24scriptableDocumentParserEv(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i3 + 1960 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i7 = __ZNK7WebCore8Document24scriptableDocumentParserEv(i3) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 84 >> 2] & 7](i6, i7);
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13ScriptElementD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 400;
 i2 = i1 + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  if ((HEAP8[i1 + 16 | 0] & 16) == 0) {
   __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i4, i1 | 0);
  }
  __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i3, 0);
 }
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
  return;
 }
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
  return;
 }
}
function __ZN7WebCore13ScriptElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 400;
 i2 = i1 + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  if ((HEAP8[i1 + 16 | 0] & 16) == 0) {
   __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i4, i1 | 0);
  }
  __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i3, 0);
 }
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
  return;
 }
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
  return;
 }
}
function __ZN7WebCore13ScriptElement18dispatchErrorEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0;
 i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
 i6 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i6, i5, 0, 0);
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i6;
 FUNCTION_TABLE_iii[i1 & 1](i4 | 0, i3) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i3 + 8 | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
 i4 = i5 - 8 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore25toScriptElementIfPossibleEPNS_7ElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
   i2 = HEAP32[i1 + 44 >> 2] | 0;
  } else {
   i3 = HEAP32[i1 + 44 >> 2] | 0;
   if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i2 = i3;
    break;
   }
   i4 = (i1 | 0) == 0 ? 0 : i1 + 52 | 0;
   return i4 | 0;
  }
 } while (0);
 i3 = HEAP32[__ZN7WebCore8SVGNames9scriptTagE >> 2] | 0;
 do {
  if ((i2 | 0) != (i3 | 0)) {
   if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = (i1 | 0) == 0 ? 0 : i1 + 100 | 0;
 return i4 | 0;
}
function __ZN7WebCore13ScriptElement21handleSourceAttributeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 16 | 0] & 7) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN7WebCore13ScriptElement13prepareScriptERKN3WTF12TextPositionENS0_17LegacyTypeSupportE(i1, i4, 0) | 0;
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
function __ZN7WebCore13ScriptElement12insertedIntoERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 16 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN7WebCore13ScriptElement13prepareScriptERKN3WTF12TextPositionENS0_17LegacyTypeSupportE(i1, i4, 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13ScriptElement15childrenChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP8[i1 + 16 | 0] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN7WebCore13ScriptElement13prepareScriptERKN3WTF12TextPositionENS0_17LegacyTypeSupportE(i1, i3, 0) | 0;
 STACKTOP = i2;
 return;
}
function __ZN3JSC20StringSourceProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 480;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZThn24_N7WebCore26CachedScriptSourceProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 32 + 8 | 0;
 HEAP32[i2 >> 2] = H_BASE + 344;
 i1 = i2 + 24 | 0;
 HEAP32[i1 >> 2] = H_BASE + 364;
 i3 = i2 + 28 | 0;
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(HEAP32[i3 >> 2] | 0, i1);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
 __ZN3JSC14SourceProviderD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3JSC20StringSourceProviderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 480;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
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
function __ZN7WebCore26CachedScriptSourceProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 344;
 i2 = i1 + 24 | 0;
 HEAP32[i2 >> 2] = H_BASE + 364;
 i3 = i1 + 28 | 0;
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(HEAP32[i3 >> 2] | 0, i2);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3 | 0);
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZThn24_N7WebCore26CachedScriptSourceProviderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 32 + 8 | 0;
 HEAP32[i2 >> 2] = H_BASE + 344;
 i1 = i2 + 24 | 0;
 HEAP32[i1 >> 2] = H_BASE + 364;
 i3 = i2 + 28 | 0;
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(HEAP32[i3 >> 2] | 0, i1);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3);
 __ZN3JSC14SourceProviderD2Ev(i2);
 return;
}
function __ZN7WebCore13ScriptElement15stopLoadRequestEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 16 | 0] & 16) == 0) {
  __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i3, i1 | 0);
 }
 __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i2 | 0, 0);
 return;
}
function __ZN7WebCore26CachedScriptSourceProviderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 344;
 i2 = i1 + 24 | 0;
 HEAP32[i2 >> 2] = H_BASE + 364;
 i3 = i1 + 28 | 0;
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(HEAP32[i3 >> 2] | 0, i2);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3 | 0);
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
 return;
}
function __ZNK7WebCore13ScriptElement18ignoresLoadRequestEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 16 | 0] & 7) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 12 >> 2] & 256 | 0) == 0;
 return i2 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function __ZNK7WebCore13ScriptElement13scriptContentEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17TextNodeTraversal16contentsAsStringEPKNS_13ContainerNodeE(i1, HEAP32[i2 + 4 >> 2] | 0);
 return;
}
function __ZNK7WebCore26CachedScriptSourceProvider6sourceEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12CachedScript6scriptEv(HEAP32[i1 + 28 >> 2] | 0) | 0;
}
function __ZN7WebCore13ScriptElement20handleAsyncAttributeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 16 | 0;
 HEAP8[i2] = HEAP8[i2] & 127;
 return;
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function __ZN7WebCore13ScriptElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13ScriptElementD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZNK7WebCore20CachedResourceClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK3JSC20StringSourceProvider6sourceEv(i1) {
 i1 = i1 | 0;
 return i1 + 24 | 0;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
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
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore26CachedScriptSourceProviderD0Ev,b1,__ZN7WebCore13ScriptElementD2Ev,b1,__ZThn24_N7WebCore26CachedScriptSourceProviderD1Ev,b1,__ZN3JSC20StringSourceProviderD0Ev,b1,__ZThn24_N7WebCore26CachedScriptSourceProviderD0Ev,b1,__ZN7WebCore26CachedScriptSourceProviderD1Ev,b1,__ZN3JSC20StringSourceProviderD1Ev,b1,__ZN7WebCore13ScriptElementD0Ev,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore13ScriptElement14notifyFinishedEPNS_14CachedResourceE,b2,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b2,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore26CachedScriptSourceProvider6sourceEv,b3,__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv,b3,__ZNK3JSC20StringSourceProvider6sourceEv,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE, "__ZN7WebCore9HTMLNames15crossoriginAttrE": __ZN7WebCore9HTMLNames15crossoriginAttrE, "__ZN7WebCore8SVGNames9scriptTagE": __ZN7WebCore8SVGNames9scriptTagE, "__ZN7WebCore9HTMLNames9nonceAttrE": __ZN7WebCore9HTMLNames9nonceAttrE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore13ScriptElement7executeEPNS_12CachedScriptE","__ZNK7WebCore13ScriptElement13scriptContentEv","__ZN7WebCore13ScriptElement13prepareScriptERKN3WTF12TextPositionENS0_17LegacyTypeSupportE","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore16ScriptSourceCodeC2EPNS_12CachedScriptE","_strlen","__ZNK7WebCore13ScriptElement21isScriptTypeSupportedENS0_17LegacyTypeSupportE","__ZN7WebCore13ScriptElement20handleAsyncAttributeEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_15CaseFoldingHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN7WebCore13ScriptElement21handleSourceAttributeERKN3WTF6StringE","__ZNK7WebCore13ScriptElement18ignoresLoadRequestEv","__ZN7WebCore13ScriptElementD2Ev","__ZN7WebCore13ScriptElementC2EPNS_7ElementEbb","__ZN7WebCore13ScriptElement14notifyFinishedEPNS_14CachedResourceE","_memset","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","__ZThn24_N7WebCore26CachedScriptSourceProviderD0Ev","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZNK7WebCore13ScriptElement25isScriptForEventSupportedEv","__ZN7WebCore13ScriptElementD0Ev","__ZN3JSC20StringSourceProviderD0Ev","__ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE","__ZN7WebCore13ScriptElement13requestScriptERKN3WTF6StringE","__ZN7WebCore13ScriptElement18dispatchErrorEventEv","__ZThn24_N7WebCore26CachedScriptSourceProviderD1Ev","__ZN7WebCore13ScriptElement13executeScriptERKNS_16ScriptSourceCodeE","__ZN7WebCore26CachedScriptSourceProviderD0Ev","__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv","__ZNK3JSC20StringSourceProvider6sourceEv","__ZN7WebCore26CachedScriptSourceProviderD1Ev","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3JSC20StringSourceProviderD1Ev","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore25toScriptElementIfPossibleEPNS_7ElementE","__ZN7WebCore15ResourceRequestD2Ev","__ZNK7WebCore26CachedScriptSourceProvider6sourceEv","__ZN7WebCore13ScriptElement12insertedIntoERNS_13ContainerNodeE","_memcpy","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZN7WebCoreL35isLegacySupportedJavaScriptLanguageERKN3WTF6StringE","__ZN7WebCore13ScriptElement15stopLoadRequestEv","__ZN7WebCore13ScriptElement15childrenChangedEv"]

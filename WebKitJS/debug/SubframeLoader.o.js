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
H_BASE = parentModule["_malloc"](120 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 120;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14SubframeLoaderC1ERNS_5FrameE;
/* memory initializer */ allocate([81,117,105,99,107,84,105,109,101,0,0,0,0,0,0,0,105,109,97,103,101,47,120,45,116,105,102,102,0,0,0,0,105,109,97,103,101,47,116,105,102,0,0,0,0,0,0,0,105,109,97,103,101,47,116,105,102,102,0,0,0,0,0,0,99,111,100,101,98,97,115,101,0,0,0,0,0,0,0,0,98,97,115,101,117,114,108,0,97,112,112,108,105,99,97,116,105,111,110,47,120,45,106,97,118,97,45,97,112,112,108,101,116,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
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
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore9HTMLNames8typeAttrE=env.__ZN7WebCore9HTMLNames8typeAttrE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames8frameTagE=env.__ZN7WebCore9HTMLNames8frameTagE|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14SubframeLoader22createJavaAppletWidgetERKNS_7IntSizeERNS_17HTMLAppletElementERKN3WTF6VectorINS6_6StringELj0ENS6_15CrashOnOverflowEEESC_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 64 | 0;
 i12 = i7 + 72 | 0;
 i13 = i7 + 80 | 0;
 i14 = i7 + 128 | 0;
 i15 = i7 + 136 | 0;
 i16 = i8 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i9 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i5 + 8 | 0;
 L1 : do {
  if ((HEAP32[i18 >> 2] | 0) == 0) {
   i19 = 49;
  } else {
   i20 = i5 | 0;
   i21 = i6 + 8 | 0;
   i22 = i6 | 0;
   i23 = 0;
   L3 : while (1) {
    do {
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[(HEAP32[i20 >> 2] | 0) + (i23 << 2) >> 2] | 0, H_BASE + 88 | 0) | 0) {
      if ((HEAP32[i21 >> 2] | 0) >>> 0 <= i23 >>> 0) {
       i19 = 5;
       break L3;
      }
      i24 = HEAP32[(HEAP32[i22 >> 2] | 0) + (i23 << 2) >> 2] | 0;
      if ((i24 | 0) != 0) {
       i25 = i24 | 0;
       HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
      }
      i25 = HEAP32[i16 >> 2] | 0;
      HEAP32[i16 >> 2] = i24;
      if ((i25 | 0) == 0) {
       break;
      }
      i24 = i25 | 0;
      i26 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
      if ((i26 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i25);
       break;
      } else {
       HEAP32[i24 >> 2] = i26;
       break;
      }
     } else {
      if ((HEAP32[i18 >> 2] | 0) >>> 0 <= i23 >>> 0) {
       i19 = 13;
       break L3;
      }
      if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[(HEAP32[i20 >> 2] | 0) + (i23 << 2) >> 2] | 0, H_BASE + 72 | 0) | 0)) {
       break;
      }
      if ((HEAP32[i21 >> 2] | 0) >>> 0 <= i23 >>> 0) {
       i19 = 16;
       break L3;
      }
      i26 = HEAP32[(HEAP32[i22 >> 2] | 0) + (i23 << 2) >> 2] | 0;
      if ((i26 | 0) != 0) {
       i24 = i26 | 0;
       HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
      }
      i24 = HEAP32[i17 >> 2] | 0;
      HEAP32[i17 >> 2] = i26;
      if ((i24 | 0) == 0) {
       break;
      }
      i26 = i24 | 0;
      i25 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
      if ((i25 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i24);
       break;
      } else {
       HEAP32[i26 >> 2] = i25;
       break;
      }
     }
    } while (0);
    i25 = i23 + 1 | 0;
    if (i25 >>> 0 < (HEAP32[i18 >> 2] | 0) >>> 0) {
     i23 = i25;
    } else {
     i19 = 24;
     break;
    }
   }
   if ((i19 | 0) == 24) {
    i23 = HEAP32[i17 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i19 = 49;
     break;
    }
    if ((HEAP32[i23 + 4 >> 2] | 0) == 0) {
     i19 = 49;
     break;
    }
    i23 = i2 + 4 | 0;
    __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i10, HEAP32[(HEAP32[i23 >> 2] | 0) + 456 >> 2] | 0, i9);
    i22 = i4 + 20 | 0;
    if (!(__ZNK7WebCore14SecurityOrigin10canDisplayERKNS_3URLE(HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] | 0) + 100 >> 2] | 0, i10) | 0)) {
     __ZN7WebCore11FrameLoader21reportLocalLoadFailedEPNS_5FrameERKN3WTF6StringE(HEAP32[i23 >> 2] | 0, i10 | 0);
     HEAP32[i1 >> 2] = 0;
     i23 = HEAP32[i10 >> 2] | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     i21 = i23 | 0;
     i20 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i21 >> 2] = i20;
      break;
     }
    }
    L38 : do {
     if (__ZNK7WebCore21ContentSecurityPolicy21allowObjectFromSourceERKNS_3URLENS0_15ReportingStatusE(HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] | 0) + 104 >> 2] | 0, i10, 0) | 0) {
      i20 = HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] | 0) + 104 >> 2] | 0;
      __ZN3WTF6StringC1EPKc(i11, H_BASE + 96 | 0);
      __ZN3WTF6StringC1EPKc(i12, H_BASE + 96 | 0);
      i21 = __ZNK7WebCore21ContentSecurityPolicy15allowPluginTypeERKN3WTF6StringES4_RKNS_3URLENS0_15ReportingStatusE(i20, i11, i12, i10, 0) | 0;
      i20 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i20 | 0) != 0) {
        i23 = i20 | 0;
        i25 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
        if ((i25 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i20);
         break;
        } else {
         HEAP32[i23 >> 2] = i25;
         break;
        }
       }
      } while (0);
      i20 = HEAP32[i11 >> 2] | 0;
      do {
       if ((i20 | 0) == 0) {
        if (!i21) {
         break L38;
        }
       } else {
        i25 = i20 | 0;
        i23 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
        if ((i23 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i20);
         if (i21) {
          break;
         } else {
          break L38;
         }
        } else {
         HEAP32[i25 >> 2] = i23;
         if (i21) {
          break;
         } else {
          break L38;
         }
        }
       }
      } while (0);
      i21 = HEAP32[i10 >> 2] | 0;
      if ((i21 | 0) == 0) {
       i19 = 49;
       break L1;
      }
      i20 = i21 | 0;
      i23 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
      if ((i23 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i21);
       i19 = 49;
       break L1;
      } else {
       HEAP32[i20 >> 2] = i23;
       i19 = 49;
       break L1;
      }
     }
    } while (0);
    HEAP32[i1 >> 2] = 0;
    i22 = HEAP32[i10 >> 2] | 0;
    if ((i22 | 0) == 0) {
     break;
    }
    i23 = i22 | 0;
    i20 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i22);
     break;
    } else {
     HEAP32[i23 >> 2] = i20;
     break;
    }
   } else if ((i19 | 0) == 16) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i19 | 0) == 5) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i19 | 0) == 13) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 do {
  if ((i19 | 0) == 49) {
   i10 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i19 = 52;
    } else {
     if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
      i19 = 52;
      break;
     }
     i27 = i2 + 4 | 0;
    }
   } while (0);
   do {
    if ((i19 | 0) == 52) {
     i11 = i2 + 4 | 0;
     i12 = HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 456 >> 2] | 0) + 404 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i28 = i10;
     } else {
      i9 = i12 | 0;
      HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
      i28 = HEAP32[i16 >> 2] | 0;
     }
     HEAP32[i16 >> 2] = i12;
     if ((i28 | 0) == 0) {
      i27 = i11;
      break;
     }
     i12 = i28 | 0;
     i9 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      i27 = i11;
      break;
     } else {
      HEAP32[i12 >> 2] = i9;
      i27 = i11;
      break;
     }
    }
   } while (0);
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i13, HEAP32[(HEAP32[i27 >> 2] | 0) + 456 >> 2] | 0, i8);
   i10 = HEAP32[i27 >> 2] | 0;
   i11 = HEAP32[i10 + 84 >> 2] | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i11 >> 2] | 0) + 484 >> 2] & 1](i11, (HEAP8[(HEAP32[i10 + 36 >> 2] | 0) + 195 | 0] & 1) != 0) | 0) {
    i10 = HEAP32[(HEAP32[i27 >> 2] | 0) + 84 >> 2] | 0;
    FUNCTION_TABLE_viiiiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 432 >> 2] & 1](i14, i10, i3, i4, i13, i5, i6);
    i10 = i14 | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    i29 = i11;
   } else {
    i29 = 0;
   }
   i11 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i27 >> 2] | 0) + 456 >> 2] | 0) | 0;
   i10 = i4 | 0;
   i9 = i15 | 0;
   HEAP32[i9 >> 2] = 0;
   i12 = (i29 | 0) == 0;
   __ZN7WebCoreL16logPluginRequestEPNS_4PageERKN3WTF6StringES5_b(i11, i4 + 148 | 0, i15, i12 ^ 1);
   i11 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i9 = i11 | 0;
     i18 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i9 >> 2] = i18;
      break;
     }
    }
   } while (0);
   do {
    if (i12) {
     i11 = __ZNK7WebCore22HTMLPlugInImageElement20renderEmbeddedObjectEv(i10) | 0;
     if ((HEAP8[i11 + 128 | 0] & 1) == 0) {
      __ZN7WebCore20RenderEmbeddedObject29setPluginUnavailabilityReasonENS0_26PluginUnavailabilityReasonE(i11, 0);
     }
     HEAP32[i1 >> 2] = 0;
    } else {
     HEAP8[i2 | 0] = 1;
     HEAP32[i1 >> 2] = i29;
     i11 = i29 + 4 | 0;
     i18 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = i18 + 1;
     i11 = i29 + 4 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i11 >> 2] = i18;
      break;
     }
     i18 = i11 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
    }
   } while (0);
   i10 = HEAP32[i13 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i12 = i10 | 0;
   i18 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i12 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i17 = i13 | 0;
   i29 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i29 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i17 >> 2] = i29;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i16 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i16 = i13 | 0;
 i29 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
 if ((i29 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i16 >> 2] = i29;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCoreL16logPluginRequestEPNS_4PageERKN3WTF6StringES5_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[(HEAP32[i1 + 48 >> 2] | 0) + 184 | 0] & 8) == 0) {
  STACKTOP = i5;
  return;
 }
 i16 = i7 | 0;
 i17 = HEAP32[i2 >> 2] | 0;
 HEAP32[i16 >> 2] = i17;
 if ((i17 | 0) == 0) {
  i18 = 5;
 } else {
  i2 = i17 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  if ((HEAP32[i16 >> 2] | 0) == 0) {
   i18 = 5;
  } else {
   i18 = 26;
  }
 }
 if ((i18 | 0) == 5) {
  i2 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i2 | 0) == 0) {
    i19 = 0;
   } else {
    i17 = __ZN3WTF10StringImpl11reverseFindEtj(i2, 46, -1) | 0;
    if ((i17 | 0) == -1) {
     i19 = 0;
     break;
    }
    __ZNK3WTF6String9substringEjj(i6, i3, i17 + 1 | 0, -1);
    i17 = __ZNK7WebCore4Page10pluginDataEv(i1) | 0;
    i20 = i17 + 24 | 0;
    L14 : do {
     if ((HEAP32[i20 >> 2] | 0) == 0) {
      i21 = i6 | 0;
      i22 = 0;
     } else {
      i23 = i17 + 16 | 0;
      i24 = i6 | 0;
      i25 = 0;
      L17 : while (1) {
       i26 = HEAP32[i23 >> 2] | 0;
       i27 = i26 + (i25 * 20 & -1) + 16 | 0;
       i28 = i26 + (i25 * 20 & -1) + 8 | 0;
       i29 = 0;
       while (1) {
        if (i29 >>> 0 >= (HEAP32[i27 >> 2] | 0) >>> 0) {
         break;
        }
        if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i24 >> 2] | 0, HEAP32[(HEAP32[i28 >> 2] | 0) + (i29 << 2) >> 2] | 0) | 0) {
         break L17;
        } else {
         i29 = i29 + 1 | 0;
        }
       }
       i29 = i25 + 1 | 0;
       if (i29 >>> 0 < (HEAP32[i20 >> 2] | 0) >>> 0) {
        i25 = i29;
       } else {
        i21 = i24;
        i22 = 0;
        break L14;
       }
      }
      i23 = HEAP32[i26 + (i25 * 20 & -1) >> 2] | 0;
      if ((i23 | 0) == 0) {
       i21 = i24;
       i22 = 0;
       break;
      }
      i29 = i23 | 0;
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
      i21 = i24;
      i22 = i23;
     }
    } while (0);
    i20 = HEAP32[i21 >> 2] | 0;
    if ((i20 | 0) == 0) {
     i19 = i22;
     break;
    }
    i17 = i20 | 0;
    i23 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i23 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i20);
     i19 = i22;
     break;
    } else {
     HEAP32[i17 >> 2] = i23;
     i19 = i22;
     break;
    }
   }
  } while (0);
  i22 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = i19;
  if ((i22 | 0) == 0) {
   i30 = i19;
  } else {
   i19 = i22 | 0;
   i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
   } else {
    HEAP32[i19 >> 2] = i21;
   }
   i30 = HEAP32[i16 >> 2] | 0;
  }
  if ((i30 | 0) != 0) {
   i18 = 26;
  }
 }
 do {
  if ((i18 | 0) == 26) {
   __ZNK7WebCore10PluginData21pluginFileForMimeTypeERKN3WTF6StringE(i8, __ZNK7WebCore4Page10pluginDataEv(i1) | 0, i7);
   i30 = i8 | 0;
   i21 = i9 | 0;
   i19 = HEAP32[((HEAP32[i30 >> 2] | 0) == 0 ? i7 : i8) >> 2] | 0;
   HEAP32[i21 >> 2] = i19;
   if ((i19 | 0) != 0) {
    i22 = i19 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   }
   i22 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i19 = i22;
   i26 = HEAP32[(HEAP32[i19 >> 2] | 0) + 416 >> 2] | 0;
   if (i4) {
    __ZN7WebCore21DiagnosticLoggingKeys15pluginLoadedKeyEv(i10);
    i31 = 0;
    i32 = 1;
   } else {
    __ZN7WebCore21DiagnosticLoggingKeys22pluginLoadingFailedKeyEv(i10);
    i31 = 1;
    i32 = 0;
   }
   __ZN7WebCore21DiagnosticLoggingKeys7noopKeyEv(i11);
   FUNCTION_TABLE_viiii[i26 & 1](i22, i10, i9, i11);
   i26 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i6 = i26 | 0;
     i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i6 >> 2] = i3;
      break;
     }
    }
   } while (0);
   do {
    if (i31) {
     i26 = HEAP32[i10 >> 2] | 0;
     if ((i26 | 0) == 0) {
      break;
     }
     i3 = i26 | 0;
     i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i3 >> 2] = i6;
      break;
     }
    }
   } while (0);
   do {
    if (i32) {
     i6 = HEAP32[i10 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     i3 = i6 | 0;
     i26 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i3 >> 2] = i26;
      break;
     }
    }
   } while (0);
   do {
    if (!(__ZNK7WebCore4Page16hasSeenAnyPluginEv(i1) | 0)) {
     i26 = HEAP32[(HEAP32[i19 >> 2] | 0) + 416 >> 2] | 0;
     __ZN7WebCore21DiagnosticLoggingKeys31pageContainsAtLeastOnePluginKeyEv(i12);
     i3 = __ZN3WTF11emptyStringEv() | 0;
     __ZN7WebCore21DiagnosticLoggingKeys7noopKeyEv(i13);
     FUNCTION_TABLE_viiii[i26 & 1](i22, i12, i3, i13);
     i3 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i26 = i3 | 0;
       i6 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
       if ((i6 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i3);
        break;
       } else {
        HEAP32[i26 >> 2] = i6;
        break;
       }
      }
     } while (0);
     i3 = HEAP32[i12 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     i24 = i3 | 0;
     i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i24 >> 2] = i25;
      break;
     }
    }
   } while (0);
   do {
    if (!(__ZNK7WebCore4Page13hasSeenPluginERKN3WTF6StringE(i1, i9) | 0)) {
     i25 = HEAP32[(HEAP32[i19 >> 2] | 0) + 416 >> 2] | 0;
     __ZN7WebCore21DiagnosticLoggingKeys21pageContainsPluginKeyEv(i14);
     __ZN7WebCore21DiagnosticLoggingKeys7noopKeyEv(i15);
     FUNCTION_TABLE_viiii[i25 & 1](i22, i14, i9, i15);
     i25 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i24 = i25 | 0;
       i3 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
       if ((i3 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i24 >> 2] = i3;
        break;
       }
      }
     } while (0);
     i25 = HEAP32[i14 >> 2] | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     i3 = i25 | 0;
     i24 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i3 >> 2] = i24;
      break;
     }
    }
   } while (0);
   __ZN7WebCore4Page9sawPluginERKN3WTF6StringE(i1, i9);
   i22 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i19 = i22 | 0;
     i24 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i19 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i22 = HEAP32[i30 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i21 = i22 | 0;
   i24 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i21 >> 2] = i24;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i16 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i16 = i9 | 0;
 i1 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i16 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore14SubframeLoader12requestFrameERNS_21HTMLFrameOwnerElementERKN3WTF6StringERKNS3_12AtomicStringEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i8 = i7 | 0;
 i9 = i7 + 48 | 0;
 i10 = i7 + 96 | 0;
 i11 = i7 + 144 | 0;
 i12 = i8 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i8);
 i13 = i9 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i9);
 i14 = __ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE(i3) | 0;
 i15 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if (i14) {
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i10, i15, i3);
   i16 = i10 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   i18 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i17;
   do {
    if ((i18 | 0) != 0) {
     i17 = i18 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i18 = HEAP8[i10 + 4 | 0] | 0;
   i19 = i8 + 4 | 0;
   HEAP8[i19] = HEAP8[i19] & -4 | i18 & 1 | i18 & 2;
   HEAP32[i8 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   HEAP32[i8 + 16 >> 2] = HEAP32[i10 + 16 >> 2];
   HEAP32[i8 + 20 >> 2] = HEAP32[i10 + 20 >> 2];
   HEAP32[i8 + 24 >> 2] = HEAP32[i10 + 24 >> 2];
   HEAP32[i8 + 28 >> 2] = HEAP32[i10 + 28 >> 2];
   HEAP32[i8 + 32 >> 2] = HEAP32[i10 + 32 >> 2];
   HEAP32[i8 + 36 >> 2] = HEAP32[i10 + 36 >> 2];
   HEAP32[i8 + 40 >> 2] = HEAP32[i10 + 40 >> 2];
   HEAP32[i8 + 44 >> 2] = HEAP32[i10 + 44 >> 2];
   i18 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i19 = i18 | 0;
     i17 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i19 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i18 = __ZN7WebCore8blankURLEv() | 0;
   i16 = HEAP32[i18 >> 2] | 0;
   if ((i16 | 0) != 0) {
    i17 = i16 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   }
   i17 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i16;
   do {
    if ((i17 | 0) != 0) {
     i16 = i17 | 0;
     i19 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i16 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i17 = i18 + 4 | 0;
   i19 = i9 + 4 | 0;
   i16 = HEAP8[i19] & -2 | HEAP8[i17] & 1;
   HEAP8[i19] = i16;
   HEAP8[i19] = i16 & -3 | HEAP8[i17] & 2;
   HEAP32[i9 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   HEAP32[i9 + 16 >> 2] = HEAP32[i18 + 16 >> 2];
   HEAP32[i9 + 20 >> 2] = HEAP32[i18 + 20 >> 2];
   HEAP32[i9 + 24 >> 2] = HEAP32[i18 + 24 >> 2];
   HEAP32[i9 + 28 >> 2] = HEAP32[i18 + 28 >> 2];
   HEAP32[i9 + 32 >> 2] = HEAP32[i18 + 32 >> 2];
   HEAP32[i9 + 36 >> 2] = HEAP32[i18 + 36 >> 2];
   HEAP32[i9 + 40 >> 2] = HEAP32[i18 + 40 >> 2];
   HEAP32[i9 + 44 >> 2] = HEAP32[i18 + 44 >> 2];
  } else {
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i11, i15, i3);
   i17 = i11 | 0;
   i16 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   i19 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i16;
   do {
    if ((i19 | 0) != 0) {
     i16 = i19 | 0;
     i20 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i16 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i19 = HEAP8[i11 + 4 | 0] | 0;
   i18 = i9 + 4 | 0;
   HEAP8[i18] = HEAP8[i18] & -4 | i19 & 1 | i19 & 2;
   HEAP32[i9 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
   HEAP32[i9 + 16 >> 2] = HEAP32[i11 + 16 >> 2];
   HEAP32[i9 + 20 >> 2] = HEAP32[i11 + 20 >> 2];
   HEAP32[i9 + 24 >> 2] = HEAP32[i11 + 24 >> 2];
   HEAP32[i9 + 28 >> 2] = HEAP32[i11 + 28 >> 2];
   HEAP32[i9 + 32 >> 2] = HEAP32[i11 + 32 >> 2];
   HEAP32[i9 + 36 >> 2] = HEAP32[i11 + 36 >> 2];
   HEAP32[i9 + 40 >> 2] = HEAP32[i11 + 40 >> 2];
   HEAP32[i9 + 44 >> 2] = HEAP32[i11 + 44 >> 2];
   i19 = HEAP32[i17 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i18 = i19 | 0;
   i20 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i18 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i11 = __ZN7WebCore14SubframeLoader22loadOrRedirectSubframeERNS_21HTMLFrameOwnerElementERKNS_3URLERKN3WTF12AtomicStringEbb(i1, i2, i9, i4, i5, i6) | 0;
 do {
  if ((i11 | 0) == 0) {
   i21 = 0;
  } else {
   i6 = HEAP32[i12 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i21 = 1;
    break;
   }
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    i21 = 1;
    break;
   }
   __ZN7WebCore16ScriptController22executeIfJavaScriptURLERKNS_3URLENS_36ShouldReplaceDocumentIfJavaScriptURLE(HEAP32[i11 + 460 >> 2] | 0, i8, 0) | 0;
   i21 = 1;
  }
 } while (0);
 i8 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i12 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i7;
  return i21 | 0;
 }
 i12 = i8 | 0;
 i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i7;
  return i21 | 0;
 } else {
  HEAP32[i12 >> 2] = i11;
  STACKTOP = i7;
  return i21 | 0;
 }
 return 0;
}
function __ZN7WebCore14SubframeLoader16pluginIsLoadableERNS_22HTMLPlugInImageElementERKNS_3URLERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 + 4 | 0;
 do {
  if (__ZN7WebCore16MIMETypeRegistry20isJavaAppletMIMETypeERKN3WTF6StringE(i4) | 0) {
   i1 = HEAP32[i7 >> 2] | 0;
   if ((HEAP8[(HEAP32[i1 + 36 >> 2] | 0) + 194 | 0] & 8) == 0) {
    i8 = 0;
    STACKTOP = i5;
    return i8 | 0;
   }
   i9 = HEAP32[i1 + 456 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore14SecurityOrigin7isLocalEv(HEAP32[i9 + 100 >> 2] | 0) | 0)) {
    break;
   }
   if ((HEAP8[(HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] | 0) + 194 | 0] & 16) == 0) {
    i8 = 0;
   } else {
    break;
   }
   STACKTOP = i5;
   return i8 | 0;
  }
 } while (0);
 i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if ((HEAP32[i9 + 96 >> 2] & 2 | 0) != 0) {
    i8 = 0;
    STACKTOP = i5;
    return i8 | 0;
   }
   i1 = __ZNK7WebCore14SecurityOrigin10canDisplayERKNS_3URLE(HEAP32[i9 + 100 >> 2] | 0, i3) | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   if (!i1) {
    __ZN7WebCore11FrameLoader21reportLocalLoadFailedEPNS_5FrameERKN3WTF6StringE(i10, i3 | 0);
    i8 = 0;
    STACKTOP = i5;
    return i8 | 0;
   }
   i1 = HEAP32[i10 + 456 >> 2] | 0;
   L19 : do {
    if ((HEAP8[i1 + 1576 | 0] & 8) == 0) {
     i11 = 23;
    } else {
     if ((__ZNK7WebCore8Document12ownerElementEv(i1) | 0) == 0) {
      i11 = 23;
      break;
     }
     i10 = HEAP32[(__ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0) | 0) + 48 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i12 = __ZN3WTF8nullAtomE;
      break;
     }
     i13 = HEAP32[i10 + 4 >> 2] | 0;
     if ((i13 & 1 | 0) == 0) {
      i14 = i13 >>> 1 & 134217727;
      i15 = i10 + 20 | 0;
     } else {
      i13 = i10 + 24 | 0;
      i14 = HEAP32[i13 + 8 >> 2] | 0;
      i15 = HEAP32[i13 >> 2] | 0;
     }
     if ((i14 | 0) == 0) {
      i12 = __ZN3WTF8nullAtomE;
      break;
     }
     i13 = HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0;
     i10 = i13 + 12 | 0;
     i16 = i13 + 16 | 0;
     i17 = 0;
     while (1) {
      i18 = i15 + (i17 << 3) | 0;
      i19 = HEAP32[i18 >> 2] | 0;
      if ((i19 | 0) == (i13 | 0)) {
       break;
      }
      if ((HEAP32[i19 + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
       if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
        break;
       }
      }
      i19 = i17 + 1 | 0;
      if (i19 >>> 0 < i14 >>> 0) {
       i17 = i19;
      } else {
       i12 = __ZN3WTF8nullAtomE;
       break L19;
      }
     }
     i12 = (i18 | 0) == 0 ? __ZN3WTF8nullAtomE : i15 + (i17 << 3) + 4 | 0;
    }
   } while (0);
   L35 : do {
    if ((i11 | 0) == 23) {
     i1 = HEAP32[i2 + 48 >> 2] | 0;
     if ((i1 | 0) == 0) {
      i12 = __ZN3WTF8nullAtomE;
      break;
     }
     i16 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i16 & 1 | 0) == 0) {
      i20 = i16 >>> 1 & 134217727;
      i21 = i1 + 20 | 0;
     } else {
      i16 = i1 + 24 | 0;
      i20 = HEAP32[i16 + 8 >> 2] | 0;
      i21 = HEAP32[i16 >> 2] | 0;
     }
     if ((i20 | 0) == 0) {
      i12 = __ZN3WTF8nullAtomE;
      break;
     }
     i16 = HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0;
     i1 = i16 + 12 | 0;
     i10 = i16 + 16 | 0;
     i13 = 0;
     while (1) {
      i22 = i21 + (i13 << 3) | 0;
      i19 = HEAP32[i22 >> 2] | 0;
      if ((i19 | 0) == (i16 | 0)) {
       break;
      }
      if ((HEAP32[i19 + 12 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
       if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
        break;
       }
      }
      i19 = i13 + 1 | 0;
      if (i19 >>> 0 < i20 >>> 0) {
       i13 = i19;
      } else {
       i12 = __ZN3WTF8nullAtomE;
       break L35;
      }
     }
     i12 = (i22 | 0) == 0 ? __ZN3WTF8nullAtomE : i21 + (i13 << 3) + 4 | 0;
    }
   } while (0);
   i10 = i6 | 0;
   i1 = HEAP32[i12 >> 2] | 0;
   HEAP32[i10 >> 2] = i1;
   if ((i1 | 0) != 0) {
    i16 = i1 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   do {
    if (__ZNK7WebCore21ContentSecurityPolicy21allowObjectFromSourceERKNS_3URLENS0_15ReportingStatusE(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0) + 104 >> 2] | 0, i3, 0) | 0) {
     if (!(__ZNK7WebCore21ContentSecurityPolicy15allowPluginTypeERKN3WTF6StringES4_RKNS_3URLENS0_15ReportingStatusE(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0) + 104 >> 2] | 0, i4, i6, i3, 0) | 0)) {
      i11 = 38;
      break;
     }
     i16 = HEAP32[i7 >> 2] | 0;
     i23 = (__ZNK7WebCore19MixedContentChecker21canRunInsecureContentEPNS_14SecurityOriginERKNS_3URLE(i16 + 112 | 0, HEAP32[(HEAP32[i16 + 456 >> 2] | 0) + 100 >> 2] | 0, i3) | 0) & 1 ^ 1;
    } else {
     i11 = 38;
    }
   } while (0);
   if ((i11 | 0) == 38) {
    __ZN7WebCore20RenderEmbeddedObject29setPluginUnavailabilityReasonENS0_26PluginUnavailabilityReasonE(__ZNK7WebCore22HTMLPlugInImageElement20renderEmbeddedObjectEv(i2) | 0, 2);
    i23 = 1;
   }
   i16 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i1 = i16 | 0;
     i17 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i1 >> 2] = i17;
      break;
     }
    }
   } while (0);
   if ((i23 | 0) == 1) {
    i8 = 0;
   } else {
    break;
   }
   STACKTOP = i5;
   return i8 | 0;
  }
 } while (0);
 i8 = 1;
 STACKTOP = i5;
 return i8 | 0;
}
function __ZN7WebCore14SubframeLoader12loadSubframeERNS_21HTMLFrameOwnerElementERKNS_3URLERKN3WTF6StringES9_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i1 + 4 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 i11 = i1 + 4 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 i11 = HEAP32[i2 + 44 >> 2] | 0;
 i12 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
 do {
  if ((i11 | 0) == (i12 | 0)) {
   i13 = 7;
  } else {
   i14 = HEAP32[i11 + 12 >> 2] | 0;
   if ((i14 | 0) == (HEAP32[i12 + 12 >> 2] | 0)) {
    if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i12 + 16 >> 2] | 0)) {
     i13 = 7;
     break;
    }
   }
   i15 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
   if ((i11 | 0) == (i15 | 0)) {
    i13 = 7;
    break;
   }
   if ((i14 | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
    i16 = 1;
    i17 = -1;
    i18 = -1;
    break;
   }
   if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i15 + 16 >> 2] | 0)) {
    i13 = 7;
   } else {
    i16 = 1;
    i17 = -1;
    i18 = -1;
   }
  }
 } while (0);
 if ((i13 | 0) == 7) {
  i13 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 604 >> 2] & 1](i2) | 0) != 1;
  i16 = i13;
  i17 = HEAP32[i2 + 72 >> 2] | 0;
  i18 = HEAP32[i2 + 76 >> 2] | 0;
 }
 i13 = i2 + 20 | 0;
 do {
  if (__ZNK7WebCore14SecurityOrigin10canDisplayERKNS_3URLE(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] | 0) + 100 >> 2] | 0, i3) | 0) {
   __ZN7WebCore14SecurityPolicy22generateReferrerHeaderENS_14ReferrerPolicyERKNS_3URLERKN3WTF6StringE(i7, HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] | 0) + 1944 >> 2] | 0, i3, i5);
   i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] | 0;
   FUNCTION_TABLE_viiiiiiiii[HEAP32[(HEAP32[i11 >> 2] | 0) + 416 >> 2] & 1](i8, i11, i3, i4, i2, i7, i16, i17, i18);
   i11 = i8 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   do {
    if ((i12 | 0) == 0) {
     __ZN7WebCore11FrameLoader22checkCallImplicitCloseEv((HEAP32[i10 >> 2] | 0) + 80 | 0);
     i19 = 0;
    } else {
     i11 = i12 + 80 | 0;
     __ZN7WebCore11FrameLoader7startedEv(i11);
     i15 = i2 + 32 | 0;
     if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
      i20 = i15 | 0;
     } else {
      i20 = HEAP32[i15 >> 2] | 0;
     }
     i15 = HEAP32[i20 >> 2] | 0;
     i14 = HEAP32[i12 + 452 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       if ((i14 | 0) == 0 | (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 228 >> 2] & 1](i15) | 0) ^ 1) {
        break;
       }
       i21 = i9 | 0;
       HEAP32[i21 >> 2] = i14;
       i22 = i14 + 4 | 0;
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
       __ZN7WebCore12RenderWidget9setWidgetEN3WTF10PassRefPtrINS_6WidgetEEE(i15, i9);
       i22 = HEAP32[i21 >> 2] | 0;
       if ((i22 | 0) == 0) {
        break;
       }
       i21 = i22 + 4 | 0;
       i22 = i21 | 0;
       i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       if ((i23 | 0) != 0) {
        HEAP32[i22 >> 2] = i23;
        break;
       }
       i23 = i21 - 4 | 0;
       if ((i23 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 1](i23);
      }
     } while (0);
     __ZN7WebCore11FrameLoader22checkCallImplicitCloseEv((HEAP32[i10 >> 2] | 0) + 80 | 0);
     do {
      if ((HEAP32[i12 + 120 >> 2] | 0) == 2) {
       if ((HEAP32[i12 + 136 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore11FrameLoader14checkCompletedEv(i11);
      }
     } while (0);
     i11 = i12 + 4 | 0;
     i15 = i11 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i15 >> 2] = i14;
      i19 = i12;
      break;
     }
     i14 = i11 - 4 | 0;
     if ((i14 | 0) == 0) {
      i19 = i12;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
     i19 = i12;
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i24 = i19;
    break;
   }
   i14 = i12 | 0;
   i11 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    i24 = i19;
    break;
   } else {
    HEAP32[i14 >> 2] = i11;
    i24 = i19;
    break;
   }
  } else {
   __ZN7WebCore11FrameLoader21reportLocalLoadFailedEPNS_5FrameERKN3WTF6StringE(HEAP32[i10 >> 2] | 0, i3 | 0);
   i24 = 0;
  }
 } while (0);
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i1 >> 2] = i10;
  STACKTOP = i6;
  return i24 | 0;
 }
 i10 = i3 - 4 | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i6;
  return i24 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
 STACKTOP = i6;
 return i24 | 0;
}
function __ZN7WebCore14SubframeLoader13requestObjectERNS_22HTMLPlugInImageElementERKN3WTF6StringERKNS3_12AtomicStringES6_RKNS3_6VectorIS4_Lj0ENS3_15CrashOnOverflowEEESE_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i9 = i8 | 0;
 i10 = i8 + 48 | 0;
 i11 = i8 + 96 | 0;
 i12 = i3 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = 3;
 } else {
  if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
   i14 = 3;
  }
 }
 do {
  if ((i14 | 0) == 3) {
   i13 = HEAP32[i5 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i15 = 0;
    STACKTOP = i8;
    return i15 | 0;
   }
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    i15 = 0;
   } else {
    break;
   }
   STACKTOP = i8;
   return i15 | 0;
  }
 } while (0);
 i13 = i9 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i9);
 i16 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i10, HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 456 >> 2] | 0, i3);
   i12 = i10 | 0;
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i18 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i17;
   do {
    if ((i18 | 0) != 0) {
     i17 = i18 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i18 = HEAP8[i10 + 4 | 0] | 0;
   i19 = i9 + 4 | 0;
   HEAP8[i19] = HEAP8[i19] & -4 | i18 & 1 | i18 & 2;
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
   i18 = HEAP32[i12 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i19 = i18 | 0;
   i17 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i17;
    break;
   }
  }
 } while (0);
 if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i20 = __ZNK7WebCore17HTMLObjectElement18hasFallbackContentEv(i2) | 0;
 } else {
  i20 = 0;
 }
 if (__ZN7WebCore14SubframeLoader15shouldUsePluginERKNS_3URLERKN3WTF6StringEbbRb(i1, i9, i5, (HEAP8[i2 + 205 | 0] & 1) != 0, i20, i11) | 0) {
  i20 = (HEAP8[i11] & 1) != 0;
  i11 = i1 + 4 | 0;
  i10 = HEAP32[i11 >> 2] | 0;
  i3 = HEAP32[i10 + 84 >> 2] | 0;
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 484 >> 2] & 1](i3, (HEAP8[(HEAP32[i10 + 36 >> 2] | 0) + 195 | 0] & 1) != 0) | 0) {
   i14 = 20;
  } else {
   if (__ZN7WebCore16MIMETypeRegistry27isApplicationPluginMIMETypeERKN3WTF6StringE(i5) | 0) {
    i14 = 20;
   } else {
    i21 = 0;
   }
  }
  do {
   if ((i14 | 0) == 20) {
    if (!(__ZN7WebCore14SubframeLoader16pluginIsLoadableERNS_22HTMLPlugInImageElementERKNS_3URLERKN3WTF6StringE(i1, i2, i9, i5) | 0)) {
     i21 = 0;
     break;
    }
    i21 = __ZN7WebCore14SubframeLoader10loadPluginERNS_22HTMLPlugInImageElementERKNS_3URLERKN3WTF6StringERKNS6_6VectorIS7_Lj0ENS6_15CrashOnOverflowEEESE_b(i1, i2, i9, i5, i6, i7, i20) | 0;
   }
  } while (0);
  __ZN7WebCoreL16logPluginRequestEPNS_4PageERKN3WTF6StringES5_b(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 456 >> 2] | 0) | 0, i5, i9 | 0, i21);
  i22 = i21;
 } else {
  i22 = (__ZN7WebCore14SubframeLoader22loadOrRedirectSubframeERNS_21HTMLFrameOwnerElementERKNS_3URLERKN3WTF12AtomicStringEbb(i1, i2 | 0, i9, i4, 1, 1) | 0) != 0;
 }
 i4 = HEAP32[i13 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i15 = i22;
  STACKTOP = i8;
  return i15 | 0;
 }
 i13 = i4 | 0;
 i9 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i15 = i22;
  STACKTOP = i8;
  return i15 | 0;
 } else {
  HEAP32[i13 >> 2] = i9;
  i15 = i22;
  STACKTOP = i8;
  return i15 | 0;
 }
 return 0;
}
function __ZN7WebCore14SubframeLoader10loadPluginERNS_22HTMLPlugInImageElementERKNS_3URLERKN3WTF6StringERKNS6_6VectorIS7_Lj0ENS6_15CrashOnOverflowEEESE_b(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 48 | 0;
 i16 = i8 + 56 | 0;
 i17 = i8 + 64 | 0;
 i18 = __ZNK7WebCore22HTMLPlugInImageElement20renderEmbeddedObjectEv(i2) | 0;
 if ((i18 | 0) == 0 | i7) {
  i19 = 0;
  STACKTOP = i8;
  return i19 | 0;
 }
 __ZN7WebCore22HTMLPlugInImageElement30subframeLoaderWillCreatePlugInERKNS_3URLE(i2, i3);
 i7 = i18 | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i12, i7);
 i20 = i18 | 0;
 i21 = i18;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 712 >> 2] & 3](i13, i20);
 i22 = (HEAP32[i12 >> 2] | 0) - (HEAP32[i13 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 716 >> 2] & 3](i14, i20);
 i13 = i22 - (HEAP32[i14 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i9, i7);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 704 >> 2] & 3](i10, i20);
 i7 = (HEAP32[i9 >> 2] | 0) - (HEAP32[i10 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 708 >> 2] & 3](i11, i20);
 i20 = i7 - (HEAP32[i11 >> 2] | 0) | 0;
 HEAP32[i15 >> 2] = i13;
 HEAP32[i15 + 4 >> 2] = i20;
 i20 = HEAP32[i1 + 4 >> 2] | 0;
 i13 = HEAP32[i20 + 456 >> 2] | 0;
 do {
  if ((HEAP8[i13 + 1576 | 0] & 8) == 0) {
   i23 = 0;
  } else {
   if ((HEAP8[i1 | 0] & 1) != 0) {
    i23 = 0;
    break;
   }
   i23 = (HEAP8[i13 + 2332 | 0] & 1) != 0;
  }
 } while (0);
 i13 = HEAP32[i20 + 84 >> 2] | 0;
 FUNCTION_TABLE_viiiiiiiii[HEAP32[(HEAP32[i13 >> 2] | 0) + 420 >> 2] & 1](i16, i13, i15, i2 | 0, i3, i5, i6, i4, i23);
 i23 = i16 | 0;
 i16 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 if ((i16 | 0) == 0) {
  if ((HEAP8[i18 + 128 | 0] & 1) != 0) {
   i19 = 0;
   STACKTOP = i8;
   return i19 | 0;
  }
  __ZN7WebCore20RenderEmbeddedObject29setPluginUnavailabilityReasonENS0_26PluginUnavailabilityReasonE(i18, 0);
  i19 = 0;
  STACKTOP = i8;
  return i19 | 0;
 }
 __ZN7WebCore22HTMLPlugInImageElement29subframeLoaderDidCreatePlugInEPKNS_6WidgetE(i2, i16);
 i2 = i17 | 0;
 HEAP32[i2 >> 2] = i16;
 i23 = i16 + 4 | 0;
 HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
 __ZN7WebCore12RenderWidget9setWidgetEN3WTF10PassRefPtrINS_6WidgetEEE(i18 | 0, i17);
 i17 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i17 | 0) == 0) {
   i24 = 12;
  } else {
   i2 = i17 + 4 | 0;
   i18 = i2 | 0;
   i23 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i18 >> 2] = i23;
    HEAP8[i1 | 0] = 1;
    break;
   }
   i23 = i2 - 4 | 0;
   if ((i23 | 0) == 0) {
    i24 = 12;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 1](i23);
   i24 = 12;
  }
 } while (0);
 if ((i24 | 0) == 12) {
  HEAP8[i1 | 0] = 1;
 }
 i1 = i16 + 4 | 0;
 i16 = i1 | 0;
 i24 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
 if ((i24 | 0) != 0) {
  HEAP32[i16 >> 2] = i24;
  i19 = 1;
  STACKTOP = i8;
  return i19 | 0;
 }
 i24 = i1 - 4 | 0;
 if ((i24 | 0) == 0) {
  i19 = 1;
  STACKTOP = i8;
  return i19 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
 i19 = 1;
 STACKTOP = i8;
 return i19 | 0;
}
function __ZN7WebCore14SubframeLoader15shouldUsePluginERKNS_3URLERKN3WTF6StringEbbRb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i5 & 1;
 i5 = i1 + 4 | 0;
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
 if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 464 >> 2] & 1](i1, i3) | 0) {
  HEAP8[i6] = 0;
  i11 = 1;
  STACKTOP = i7;
  return i11 | 0;
 }
 L5 : do {
  if ((HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0) != 0) {
   i1 = i3 | 0;
   do {
    if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 56 | 0) | 0)) {
     if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 40 | 0) | 0) {
      break;
     }
     if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 24 | 0) | 0)) {
      break L5;
     }
    }
   } while (0);
   __ZNK7WebCore10PluginData21pluginNameForMimeTypeERKN3WTF6StringE(i8, __ZNK7WebCore4Page10pluginDataEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0) | 0, i3);
   i1 = i8 | 0;
   i12 = HEAP32[i1 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
     i13 = 0;
    } else {
     __ZN3WTF6StringC1EPKc(i9, H_BASE + 8 | 0);
     i14 = HEAP32[i1 >> 2] | 0;
     i15 = i9 | 0;
     if ((i14 | 0) == 0) {
      i16 = 1;
     } else {
      i16 = (__ZN3WTF10StringImpl16findIgnoringCaseEPS0_j(i14, HEAP32[i15 >> 2] | 0, 0) | 0) == -1;
     }
     i14 = HEAP32[i15 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i13 = i16;
      break;
     }
     i15 = i14 | 0;
     i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      i13 = i16;
      break;
     } else {
      HEAP32[i15 >> 2] = i17;
      i13 = i16;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i1 >> 2] | 0;
   if ((i12 | 0) == 0) {
    if (i13) {
     i11 = 1;
    } else {
     break;
    }
    STACKTOP = i7;
    return i11 | 0;
   }
   i17 = i12 | 0;
   i15 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    if (i13) {
     i11 = 1;
    } else {
     break;
    }
    STACKTOP = i7;
    return i11 | 0;
   } else {
    HEAP32[i17 >> 2] = i15;
    if (i13) {
     i11 = 1;
    } else {
     break;
    }
    STACKTOP = i7;
    return i11 | 0;
   }
  }
 } while (0);
 i13 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
 i5 = FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i13 >> 2] | 0) + 440 >> 2] & 1](i13, i2, i3, i4) | 0;
 HEAP8[i6] = (i5 | 0) == 0 ? i10 : 0;
 if ((i5 | 0) == 3 | (i5 | 0) == 0 | (i5 | 0) == 4) {
  i11 = 1;
  STACKTOP = i7;
  return i11 | 0;
 }
 i11 = 0;
 STACKTOP = i7;
 return i11 | 0;
}
function __ZN7WebCore14SubframeLoader21resourceWillUsePluginERKN3WTF6StringES4_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 48 | 0;
 i8 = i5 + 96 | 0;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i7, HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 456 >> 2] | 0, i2);
   i11 = i7 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i13 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i12;
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i12 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i13 = HEAP8[i7 + 4 | 0] | 0;
   i14 = i6 + 4 | 0;
   HEAP8[i14] = HEAP8[i14] & -4 | i13 & 1 | i13 & 2;
   HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
   HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
   HEAP32[i6 + 16 >> 2] = HEAP32[i7 + 16 >> 2];
   HEAP32[i6 + 20 >> 2] = HEAP32[i7 + 20 >> 2];
   HEAP32[i6 + 24 >> 2] = HEAP32[i7 + 24 >> 2];
   HEAP32[i6 + 28 >> 2] = HEAP32[i7 + 28 >> 2];
   HEAP32[i6 + 32 >> 2] = HEAP32[i7 + 32 >> 2];
   HEAP32[i6 + 36 >> 2] = HEAP32[i7 + 36 >> 2];
   HEAP32[i6 + 40 >> 2] = HEAP32[i7 + 40 >> 2];
   HEAP32[i6 + 44 >> 2] = HEAP32[i7 + 44 >> 2];
   i13 = HEAP32[i11 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = i13 | 0;
   i12 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i7 = __ZN7WebCore14SubframeLoader15shouldUsePluginERKNS_3URLERKN3WTF6StringEbbRb(i1, i6, i3, i4, 0, i8) | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return i7 | 0;
 }
 i9 = i8 | 0;
 i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i5;
  return i7 | 0;
 } else {
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i5;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore14SubframeLoader22loadOrRedirectSubframeERNS_21HTMLFrameOwnerElementERKNS_3URLERKN3WTF12AtomicStringEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i2 + 52 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i9, (HEAP32[i1 + 4 >> 2] | 0) + 80 | 0);
   __ZN7WebCore14SubframeLoader12loadSubframeERNS_21HTMLFrameOwnerElementERKNS_3URLERKN3WTF6StringES9_(i1, i2, i3, i4 | 0, i9) | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = i12 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  } else {
   i14 = HEAP32[i1 + 4 >> 2] | 0;
   i13 = HEAP32[(HEAP32[i14 + 456 >> 2] | 0) + 100 >> 2] | 0;
   __ZNK7WebCore11FrameLoader16outgoingReferrerEv(i8, i14 + 80 | 0);
   __ZN7WebCore19NavigationScheduler22scheduleLocationChangeEPNS_14SecurityOriginERKN3WTF6StringES6_bb(i11 + 376 | 0, i13, i3 | 0, i8, i5, i6);
   i13 = HEAP32[i8 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = i13 | 0;
   i12 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i12;
    break;
   }
  }
 } while (0);
 STACKTOP = i7;
 return HEAP32[i10 >> 2] | 0;
}
function __ZN7WebCore14SubframeLoader13requestPluginERNS_22HTMLPlugInImageElementERKNS_3URLERKN3WTF6StringERKNS6_6VectorIS7_Lj0ENS6_15CrashOnOverflowEEESE_b(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0;
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 i9 = HEAP32[i8 + 84 >> 2] | 0;
 do {
  if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 484 >> 2] & 1](i9, (HEAP8[(HEAP32[i8 + 36 >> 2] | 0) + 195 | 0] & 1) != 0) | 0)) {
   if (__ZN7WebCore16MIMETypeRegistry27isApplicationPluginMIMETypeERKN3WTF6StringE(i4) | 0) {
    break;
   } else {
    i10 = 0;
   }
   return i10 | 0;
  }
 } while (0);
 if (!(__ZN7WebCore14SubframeLoader16pluginIsLoadableERNS_22HTMLPlugInImageElementERKNS_3URLERKN3WTF6StringE(i1, i2, i3, i4) | 0)) {
  i10 = 0;
  return i10 | 0;
 }
 i10 = __ZN7WebCore14SubframeLoader10loadPluginERNS_22HTMLPlugInImageElementERKNS_3URLERKN3WTF6StringERKNS6_6VectorIS7_Lj0ENS6_15CrashOnOverflowEEESE_b(i1, i2, i3, i4, i5, i6, i7) | 0;
 return i10 | 0;
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
function __ZN7WebCore14SubframeLoader12allowPluginsENS_28ReasonForCallingAllowPluginsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = HEAP32[i2 + 84 >> 2] | 0;
 return FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 484 >> 2] & 1](i1, (HEAP8[(HEAP32[i2 + 36 >> 2] | 0) + 195 | 0] & 1) != 0) | 0;
}
function dynCall_viiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 FUNCTION_TABLE_viiiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
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
 FUNCTION_TABLE_viiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function __ZNK7WebCore14SubframeLoader11completeURLERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i1, HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 456 >> 2] | 0, i3);
 return;
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
function b6(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(6);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function b4(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(4);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore14SubframeLoaderC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 | 0] = 0;
 HEAP32[i1 + 4 >> 2] = i2;
 return;
}
function __ZN7WebCore14SubframeLoaderC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 | 0] = 0;
 HEAP32[i1 + 4 >> 2] = i2;
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
function __ZNK7WebCore14SubframeLoader8documentEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 456 >> 2] | 0;
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
function b3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(3);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZN7WebCore14SubframeLoader5clearEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 | 0] = 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b5() {
 abort(5);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore14SubframeLoaderC2ERNS_5FrameE,b2];
  var FUNCTION_TABLE_iiiii = [b3,b3];
  var FUNCTION_TABLE_viiiiiii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_viiiiiiiii = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_v: dynCall_v, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiii": invoke_iiiii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_v": invoke_v, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore9HTMLNames8typeAttrE": __ZN7WebCore9HTMLNames8typeAttrE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames8frameTagE": __ZN7WebCore9HTMLNames8frameTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore14SubframeLoader15shouldUsePluginERKNS_3URLERKN3WTF6StringEbbRb","_strlen","__ZNK7WebCore14SubframeLoader11completeURLERKN3WTF6StringE","__ZNK7WebCore14SubframeLoader8documentEv","__ZN7WebCore14SubframeLoader5clearEv","__ZN7WebCore14SubframeLoader13requestPluginERNS_22HTMLPlugInImageElementERKNS_3URLERKN3WTF6StringERKNS6_6VectorIS7_Lj0ENS6_15CrashOnOverflowEEESE_b","__ZN7WebCore14SubframeLoader12allowPluginsENS_28ReasonForCallingAllowPluginsE","__ZN7WebCore14SubframeLoader22loadOrRedirectSubframeERNS_21HTMLFrameOwnerElementERKNS_3URLERKN3WTF12AtomicStringEbb","__ZN7WebCoreL16logPluginRequestEPNS_4PageERKN3WTF6StringES5_b","_memset","__ZN7WebCore14SubframeLoader12loadSubframeERNS_21HTMLFrameOwnerElementERKNS_3URLERKN3WTF6StringES9_","__ZN7WebCore14SubframeLoader10loadPluginERNS_22HTMLPlugInImageElementERKNS_3URLERKN3WTF6StringERKNS6_6VectorIS7_Lj0ENS6_15CrashOnOverflowEEESE_b","__ZN7WebCore14SubframeLoader12requestFrameERNS_21HTMLFrameOwnerElementERKN3WTF6StringERKNS3_12AtomicStringEbb","_memcpy","__ZN7WebCore14SubframeLoader16pluginIsLoadableERNS_22HTMLPlugInImageElementERKNS_3URLERKN3WTF6StringE","__ZN7WebCore14SubframeLoader21resourceWillUsePluginERKN3WTF6StringES4_b","__ZN7WebCore14SubframeLoader22createJavaAppletWidgetERKNS_7IntSizeERNS_17HTMLAppletElementERKN3WTF6VectorINS6_6StringELj0ENS6_15CrashOnOverflowEEESC_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore14SubframeLoader13requestObjectERNS_22HTMLPlugInImageElementERKN3WTF6StringERKNS3_12AtomicStringES6_RKNS3_6VectorIS4_Lj0ENS3_15CrashOnOverflowEEESE_","__ZN7WebCore14SubframeLoaderC2ERNS_5FrameE"]

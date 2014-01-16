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
H_BASE = parentModule["_malloc"](112 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 112;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17ScriptDebugServerD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore17JSDOMGlobalObject6s_infoE=env.__ZN7WebCore17JSDOMGlobalObject6s_infoE|0;
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore17ScriptDebugServerE=(H_BASE+40)|0;
  var __ZTVN7WebCore5TimerINS_17ScriptDebugServerEEE=(H_BASE+8)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17ScriptDebugServer22dispatchDidParseSourceERKN3WTF7HashSetIPNS_19ScriptDebugListenerENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEPN3JSC14SourceProviderEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i1 | 0;
 if ((i3 | 0) == 0) {
  i6 = 1;
 } else {
  i7 = i3 + 20 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if (i8 >>> 0 > 1 >>> 0) {
   i9 = i8;
  } else {
   __ZN3JSC14SourceProvider5getIDEv(i3);
   i9 = HEAP32[i7 >> 2] | 0;
  }
  i6 = i9 >>> 1;
 }
 _memset(i5 | 0, 0, 33) | 0;
 i9 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i7 = i5 | 0;
   HEAP32[i7 >> 2] = i9;
   i10 = i7;
  } else {
   i7 = i9 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   i7 = i5 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i8 | 0) == 0) {
    i10 = i7;
    break;
   }
   i11 = i8 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    i10 = i7;
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    i10 = i7;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 1](i3) | 0) >> 2] | 0;
 if ((i9 | 0) != 0) {
  i7 = i9 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i5 + 4 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i9;
 do {
  if ((i12 | 0) != 0) {
   i9 = i12 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i9 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i12 = i3 + 12 | 0;
 i3 = HEAP32[i12 + 4 >> 2] | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i5 + 16 >> 2] = i11;
 i12 = i3;
 HEAP32[i5 + 20 >> 2] = i12;
 HEAP8[i5 + 32 | 0] = i4 & 1;
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i13 = 0;
   i14 = 27;
  } else {
   i3 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i3 | 0) <= 0) {
    i13 = i3;
    i14 = 27;
    break;
   }
   i9 = i4 + 4 | 0;
   i8 = i4 + 16 | 0;
   i15 = i4 + 8 | 0;
   i16 = i15;
   i17 = i15 | 0;
   i15 = 1;
   i18 = 0;
   i19 = 0;
   while (1) {
    do {
     if ((HEAP32[i9 >> 2] | 0) >>> 0 > i19 >>> 0) {
      if ((HEAP32[i8 >> 2] & 32 | 0) == 0) {
       i20 = HEAP16[(HEAP32[i16 >> 2] | 0) + (i19 << 1) >> 1] | 0;
      } else {
       i20 = HEAPU8[(HEAP32[i17 >> 2] | 0) + i19 | 0] | 0;
      }
      if (i20 << 16 >> 16 != 10) {
       i21 = i18;
       i22 = i15;
       break;
      }
      i21 = i19 + 1 | 0;
      i22 = i15 + 1 | 0;
     } else {
      i21 = i18;
      i22 = i15;
     }
    } while (0);
    i23 = i19 + 1 | 0;
    if ((i23 | 0) < (i3 | 0)) {
     i15 = i22;
     i18 = i21;
     i19 = i23;
    } else {
     break;
    }
   }
   HEAP32[i5 + 24 >> 2] = i22 - 1 + i11;
   if ((i22 | 0) == 1) {
    i24 = i3;
    i14 = 29;
    break;
   }
   HEAP32[i5 + 28 >> 2] = i3 - i21;
  }
 } while (0);
 if ((i14 | 0) == 27) {
  HEAP32[i5 + 24 >> 2] = i11;
  i24 = i13;
  i14 = 29;
 }
 if ((i14 | 0) == 29) {
  HEAP32[i5 + 28 >> 2] = i12 + i24;
 }
 i24 = i2 + 12 | 0;
 i12 = HEAP32[i24 >> 2] | 0;
 i13 = (i12 | 0) == 0;
 do {
  if (!i13) {
   i11 = i12 >>> 0 < 16 >>> 0 ? 16 : i12;
   do {
    if ((i11 | 0) == 0) {
     i21 = HEAP32[i2 >> 2] | 0;
     i22 = HEAP32[i2 + 4 >> 2] | 0;
     i25 = 0;
     i26 = i21;
     i27 = i22;
     i28 = i21 + (i22 << 2) | 0;
     i14 = 37;
    } else {
     if (i11 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
     } else {
      i22 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i11 << 2) | 0) | 0;
      i21 = HEAP32[i2 >> 2] | 0;
      i20 = HEAP32[i2 + 4 >> 2] | 0;
      if ((HEAP32[i24 >> 2] | 0) == 0) {
       i29 = i22;
       break;
      } else {
       i25 = i22;
       i26 = i21;
       i27 = i20;
       i28 = i21 + (i20 << 2) | 0;
       i14 = 37;
       break;
      }
     }
    }
   } while (0);
   L52 : do {
    if ((i14 | 0) == 37) {
     L54 : do {
      if ((i27 | 0) == 0) {
       i30 = i26;
      } else {
       i11 = i26;
       while (1) {
        i3 = HEAP32[i11 >> 2] | 0;
        if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
         i30 = i11;
         break L54;
        }
        i3 = i11 + 4 | 0;
        if ((i3 | 0) == (i28 | 0)) {
         i29 = i25;
         break L52;
        } else {
         i11 = i3;
        }
       }
      }
     } while (0);
     if ((i30 | 0) == (i28 | 0)) {
      i29 = i25;
      break;
     } else {
      i31 = i30;
      i32 = 0;
     }
     while (1) {
      if (i12 >>> 0 <= i32 >>> 0) {
       break;
      }
      HEAP32[i25 + (i32 << 2) >> 2] = HEAP32[i31 >> 2];
      i11 = i31 + 4 | 0;
      if ((i11 | 0) == (i28 | 0)) {
       i29 = i25;
       break L52;
      } else {
       i33 = i11;
      }
      while (1) {
       i11 = HEAP32[i33 >> 2] | 0;
       if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
        break;
       }
       i11 = i33 + 4 | 0;
       if ((i11 | 0) == (i28 | 0)) {
        i29 = i25;
        break L52;
       } else {
        i33 = i11;
       }
      }
      if ((i33 | 0) == (i28 | 0)) {
       i29 = i25;
       break L52;
      } else {
       i31 = i33;
       i32 = i32 + 1 | 0;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   if (i13) {
    if ((i29 | 0) == 0) {
     break;
    }
   } else {
    i11 = 0;
    while (1) {
     i3 = HEAP32[i29 + (i11 << 2) >> 2] | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 7](i3, i6, i5);
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i29);
  }
 } while (0);
 i29 = HEAP32[i5 + 12 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i12 = i29 | 0;
   i6 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i12 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i29 = HEAP32[i5 + 8 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i5 = i29 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i29 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i7 = i29 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i29 = HEAP32[i10 >> 2] | 0;
 if ((i29 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i10 = i29 | 0;
 i6 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i29);
  STACKTOP = i1;
  return;
 } else {
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i1;
  return;
 }
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKjRKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIjS7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 8;
   i10 = 0;
  } else {
   i11 = i8 << 1;
   i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
   i10 = i8;
  }
  HEAP32[i7 >> 2] = i9;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = i9 - 1;
  i8 = __ZN3WTF10fastMallocEj(i9 << 4) | 0;
  if ((i9 | 0) > 0) {
   i11 = 0;
   while (1) {
    _memset(i8 + (i11 << 4) | 0, 0, 16) | 0;
    i11 = i11 + 1 | 0;
    if ((i11 | 0) >= (i9 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i8;
  if ((i10 | 0) != 0) {
   i8 = 0;
   while (1) {
    i9 = i8 << 4 | 0;
    i11 = HEAP32[i9 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E8reinsertEOS7_(i2, i9) | 0;
    }
    i8 = i8 + 1 | 0;
    if ((i8 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E15deallocateTableEPS7_i(0, i10);
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i7;
 } else {
  i12 = i6;
  i13 = i2 + 8 | 0;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i10 = i7 + ~(i7 << 15) | 0;
 i8 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i8 >>> 6 ^ i8;
 i8 = i10 + ~(i10 << 11) | 0;
 i10 = i8 >>> 16 ^ i8;
 i8 = i10 & i6;
 i9 = i12 + (i8 << 4) | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i14 = i9;
   i15 = 18;
  } else {
   i16 = (i10 >>> 23) + ~i10 | 0;
   i17 = i16 << 12 ^ i16;
   i16 = i17 >>> 7 ^ i17;
   i17 = i16 << 2 ^ i16;
   i16 = i17 >>> 20 ^ i17 | 1;
   i17 = 0;
   i18 = 0;
   i19 = i8;
   i20 = i9;
   i21 = i11;
   while (1) {
    if ((i21 | 0) == (i7 | 0)) {
     i15 = 15;
     break;
    }
    i22 = (i21 | 0) == -1 ? i20 : i18;
    i23 = (i17 | 0) == 0 ? i16 : i17;
    i24 = i23 + i19 & i6;
    i25 = i12 + (i24 << 4) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i15 = 17;
     break;
    } else {
     i17 = i23;
     i18 = i22;
     i19 = i24;
     i20 = i25;
     i21 = i26;
    }
   }
   if ((i15 | 0) == 15) {
    i21 = i12 + (HEAP32[i2 + 4 >> 2] << 4) | 0;
    i19 = i1;
    HEAP32[i19 >> 2] = i20;
    HEAP32[i19 + 4 >> 2] = i21;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i15 | 0) == 17) {
    if ((i22 | 0) == 0) {
     i14 = i25;
     i15 = 18;
     break;
    }
    _memset(i22 | 0, 0, 16) | 0;
    i21 = i2 + 16 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - 1;
    i27 = i22;
    i28 = HEAP32[i3 >> 2] | 0;
    i29 = i21;
    break;
   }
  }
 } while (0);
 if ((i15 | 0) == 18) {
  i27 = i14;
  i28 = i7;
  i29 = i2 + 16 | 0;
 }
 HEAP32[i27 >> 2] = i28;
 __ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEaSERKS4_(i27 + 4 | 0, i4) | 0;
 i4 = i2 + 12 | 0;
 i28 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i28;
 i4 = i2 + 4 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i29 >> 2] | 0) + i28 << 1 | 0) < (i7 | 0)) {
  i30 = i27;
  i31 = i7;
 } else {
  i14 = (i7 | 0) == 0;
  if (i14) {
   i32 = 8;
  } else {
   i15 = i7 << 1;
   i32 = (i28 * 6 & -1 | 0) < (i15 | 0) ? i7 : i15;
  }
  i15 = HEAP32[i5 >> 2] | 0;
  HEAP32[i4 >> 2] = i32;
  HEAP32[i13 >> 2] = i32 - 1;
  i13 = __ZN3WTF10fastMallocEj(i32 << 4) | 0;
  if ((i32 | 0) > 0) {
   i28 = 0;
   while (1) {
    _memset(i13 + (i28 << 4) | 0, 0, 16) | 0;
    i28 = i28 + 1 | 0;
    if ((i28 | 0) >= (i32 | 0)) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i13;
  if (i14) {
   i33 = 0;
  } else {
   i14 = 0;
   i13 = 0;
   while (1) {
    i32 = i15 + (i14 << 4) | 0;
    i28 = HEAP32[i32 >> 2] | 0;
    if ((i28 | 0) == (-1 | 0) | (i28 | 0) == 0) {
     i34 = i13;
    } else {
     i28 = __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E8reinsertEOS7_(i2, i32) | 0;
     i34 = (i32 | 0) == (i27 | 0) ? i28 : i13;
    }
    i28 = i14 + 1 | 0;
    if ((i28 | 0) == (i7 | 0)) {
     i33 = i34;
     break;
    } else {
     i14 = i28;
     i13 = i34;
    }
   }
  }
  HEAP32[i29 >> 2] = 0;
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E15deallocateTableEPS7_i(i15, i7);
  i30 = i33;
  i31 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i31 << 4) | 0;
 i31 = i1;
 HEAP32[i31 >> 2] = i30;
 HEAP32[i31 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore17ScriptDebugServer16dispatchDidPauseEPNS_19ScriptDebugListenerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = __ZNK3JSC8Debugger24currentDebuggerCallFrameEv(i1) | 0;
 i1 = HEAP32[(HEAP32[(__ZNK3JSC17DebuggerCallFrame5scopeEv(i10) | 0) >> 2] | 0) + 4 >> 2] | 0;
 i11 = __ZN3JSC14JSGlobalObject10globalExecEv(i1) | 0;
 if ((i10 | 0) != 0) {
  i12 = i10 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = __ZN3WTF10fastMallocEj(12) | 0;
 i13 = i12;
 i14 = i5 | 0;
 HEAP32[i14 >> 2] = i10;
 __ZN7WebCore19JavaScriptCallFrameC1EN3WTF10PassRefPtrIN3JSC17DebuggerCallFrameEEE(i13, i5);
 i5 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i14 = i5 | 0;
   i10 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN3JSC17DebuggerCallFrameD2Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i14 >> 2] = i10;
    break;
   }
  }
 } while (0);
 if ((HEAP32[(i1 & -65536) + 1048 >> 2] | 0) == 2) {
  i15 = i1 + 8 | 0;
 } else {
  i15 = (HEAP32[i1 >> 2] | 0) + 32 | 0;
 }
 i5 = HEAP32[i15 >> 2] | 0;
 L14 : do {
  if ((i5 | 0) == 0) {
   i16 = 0;
   i17 = 0;
   i18 = -4;
   i19 = 0;
  } else {
   i15 = i5;
   while (1) {
    if ((i15 | 0) == (__ZN7WebCore17JSDOMGlobalObject6s_infoE | 0)) {
     break;
    }
    i10 = HEAP32[i15 + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i16 = 0;
     i17 = 0;
     i18 = -4;
     i19 = 0;
     break L14;
    } else {
     i15 = i10;
    }
   }
   __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i6, i11);
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_19JavaScriptCallFrameE(i7, i11, i1, i13);
   i15 = i7 | 0;
   i10 = HEAP32[i15 >> 2] | 0;
   i14 = HEAP32[i15 + 4 >> 2] | 0;
   __ZN3JSC12JSLockHolderD1Ev(i6);
   i16 = i14 & 0;
   i17 = i10 & -1;
   i18 = i14 & -1;
   i19 = i10 & 0;
  }
 } while (0);
 i6 = HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] | 0;
 i7 = HEAP32[(HEAP32[i11 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i8 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 if ((HEAP32[i7 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i1 = i7 + 20440 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i7 + 20360 | 0);
  i20 = HEAP32[i1 >> 2] | 0;
 } else {
  i20 = i5;
 }
 i5 = i20 + 12 | 0;
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i20 + 4 >> 2] = -6;
 HEAP32[i20 >> 2] = 0;
 i1 = i20 + 8 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 i10 = i7 + 20420 | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 HEAP32[i1 >> 2] = i7 + 20408;
 HEAP32[i5 >> 2] = i14;
 HEAP32[i10 >> 2] = i20;
 HEAP32[i14 + 8 >> 2] = i20;
 i14 = i20 | 0;
 HEAP32[i8 + 4 >> 2] = i14;
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i17 | i19;
 HEAP32[i10 + 4 >> 2] = i16 | i18;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i20 & -4096) + 12 >> 2] | 0, i14, i4);
 i4 = HEAP32[i10 + 4 >> 2] | 0;
 i14 = i20 | 0;
 HEAP32[i14 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i14 + 4 >> 2] = i4;
 HEAP32[i9 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 HEAP32[i9 + 4 >> 2] = 0;
 FUNCTION_TABLE_viiii[i6 & 1](i2, i11, i8, i9);
 __ZN10Deprecated11ScriptValueD1Ev(i9);
 __ZN10Deprecated11ScriptValueD1Ev(i8);
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i12;
 i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore19JavaScriptCallFrameD2Ev(i13);
  __ZN3WTF8fastFreeEPv(i12);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17ScriptDebugServer27dispatchFailedToParseSourceERKN3WTF7HashSetIPNS_19ScriptDebugListenerENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEPN3JSC14SourceProviderEiRKNS1_6StringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i1 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i3 + 8 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 1](i3) | 0;
 i8 = (HEAP32[i3 + 12 >> 2] | 0) + 1 | 0;
 i3 = i2 + 12 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = (i10 | 0) == 0;
 do {
  if (!i11) {
   i12 = i10 >>> 0 < 16 >>> 0 ? 16 : i10;
   do {
    if ((i12 | 0) == 0) {
     i13 = HEAP32[i2 >> 2] | 0;
     i14 = HEAP32[i2 + 4 >> 2] | 0;
     i15 = 0;
     i16 = i13;
     i17 = i14;
     i18 = i13 + (i14 << 2) | 0;
     i19 = 9;
    } else {
     if (i12 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
     } else {
      i14 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i12 << 2) | 0) | 0;
      i13 = HEAP32[i2 >> 2] | 0;
      i20 = HEAP32[i2 + 4 >> 2] | 0;
      if ((HEAP32[i3 >> 2] | 0) == 0) {
       i21 = i14;
       break;
      } else {
       i15 = i14;
       i16 = i13;
       i17 = i20;
       i18 = i13 + (i20 << 2) | 0;
       i19 = 9;
       break;
      }
     }
    }
   } while (0);
   L12 : do {
    if ((i19 | 0) == 9) {
     L14 : do {
      if ((i17 | 0) == 0) {
       i22 = i16;
      } else {
       i12 = i16;
       while (1) {
        i20 = HEAP32[i12 >> 2] | 0;
        if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
         i22 = i12;
         break L14;
        }
        i20 = i12 + 4 | 0;
        if ((i20 | 0) == (i18 | 0)) {
         i21 = i15;
         break L12;
        } else {
         i12 = i20;
        }
       }
      }
     } while (0);
     if ((i22 | 0) == (i18 | 0)) {
      i21 = i15;
      break;
     } else {
      i23 = i22;
      i24 = 0;
     }
     while (1) {
      if (i10 >>> 0 <= i24 >>> 0) {
       break;
      }
      HEAP32[i15 + (i24 << 2) >> 2] = HEAP32[i23 >> 2];
      i12 = i23 + 4 | 0;
      if ((i12 | 0) == (i18 | 0)) {
       i21 = i15;
       break L12;
      } else {
       i25 = i12;
      }
      while (1) {
       i12 = HEAP32[i25 >> 2] | 0;
       if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
        break;
       }
       i12 = i25 + 4 | 0;
       if ((i12 | 0) == (i18 | 0)) {
        i21 = i15;
        break L12;
       } else {
        i25 = i12;
       }
      }
      if ((i25 | 0) == (i18 | 0)) {
       i21 = i15;
       break L12;
      } else {
       i23 = i25;
       i24 = i24 + 1 | 0;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   if (i11) {
    if ((i21 | 0) == 0) {
     break;
    }
   } else {
    i12 = 0;
    while (1) {
     i20 = HEAP32[i21 + (i12 << 2) >> 2] | 0;
     FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i20 >> 2] | 0) + 12 >> 2] & 1](i20, i6, i9, i8, i4, i5);
     i12 = i12 + 1 | 0;
     if (i12 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i21);
  }
 } while (0);
 i21 = HEAP32[i7 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i7 = i21 | 0;
 i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i21);
  STACKTOP = i1;
  return;
 } else {
  HEAP32[i7 >> 2] = i10;
  STACKTOP = i1;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEaSERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   i7 = HEAP32[i1 >> 2] | 0;
   i8 = i7 + (i4 << 3) | 0;
   if ((i4 | 0) != (i6 | 0)) {
    i9 = i7 + (i6 << 3) | 0;
    while (1) {
     i7 = HEAP32[i9 + 4 >> 2] | 0;
     do {
      if ((i7 | 0) != 0) {
       i10 = i7 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
       if ((i11 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i7);
        break;
       } else {
        HEAP32[i10 >> 2] = i11;
        break;
       }
      }
     } while (0);
     i9 = i9 + 8 | 0;
     if ((i9 | 0) == (i8 | 0)) {
      break;
     }
    }
   }
   HEAP32[i3 >> 2] = i6;
   i12 = i6;
  } else {
   i8 = i1 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (i6 >>> 0 <= i9 >>> 0) {
    i12 = i4;
    break;
   }
   do {
    if ((i9 | 0) != 0) {
     i7 = i1 | 0;
     if ((i4 | 0) != 0) {
      i11 = HEAP32[i7 >> 2] | 0;
      i10 = i11 + (i4 << 3) | 0;
      i13 = i11;
      while (1) {
       i11 = HEAP32[i13 + 4 >> 2] | 0;
       do {
        if ((i11 | 0) != 0) {
         i14 = i11 | 0;
         i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
         if ((i15 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i11);
          break;
         } else {
          HEAP32[i14 >> 2] = i15;
          break;
         }
        }
       } while (0);
       i13 = i13 + 8 | 0;
       if ((i13 | 0) == (i10 | 0)) {
        break;
       }
      }
      HEAP32[i3 >> 2] = 0;
     }
     i10 = HEAP32[i7 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     HEAP32[i7 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i10);
    }
   } while (0);
   __ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, HEAP32[i5 >> 2] | 0);
   i12 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i6 = i2 + (i12 << 3) | 0;
 i8 = i1 | 0;
 if ((i12 | 0) == 0) {
  i16 = i2;
  i17 = 0;
 } else {
  i12 = HEAP32[i8 >> 2] | 0;
  i9 = i2;
  while (1) {
   HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
   i2 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i10 = i2 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = i12 + 4 | 0;
   i13 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i2;
   do {
    if ((i13 | 0) != 0) {
     i2 = i13 | 0;
     i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i2 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i13 = i9 + 8 | 0;
   if ((i13 | 0) == (i6 | 0)) {
    break;
   } else {
    i12 = i12 + 8 | 0;
    i9 = i13;
   }
  }
  i16 = HEAP32[i4 >> 2] | 0;
  i17 = HEAP32[i3 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 i9 = i16 + (i4 << 3) | 0;
 if ((i17 | 0) == (i4 | 0)) {
  i18 = i17;
 } else {
  i4 = i16 + (i17 << 3) | 0;
  i16 = (HEAP32[i8 >> 2] | 0) + (i17 << 3) | 0;
  while (1) {
   HEAP32[i16 >> 2] = HEAP32[i4 >> 2];
   i17 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i16 + 4 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i8 = i17 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i4 + 8 | 0;
   if ((i8 | 0) == (i9 | 0)) {
    break;
   } else {
    i4 = i8;
    i16 = i16 + 8 | 0;
   }
  }
  i18 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i18;
 return i1 | 0;
}
function __ZN7WebCore17ScriptDebugServer27dispatchFunctionToListenersERKN3WTF7HashSetIPNS_19ScriptDebugListenerENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEMS0_FvS4_E(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i2 + 12 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (i8) {
  STACKTOP = i4;
  return;
 }
 i9 = i7 >>> 0 < 16 >>> 0 ? 16 : i7;
 do {
  if ((i9 | 0) == 0) {
   i10 = HEAP32[i2 >> 2] | 0;
   i11 = HEAP32[i2 + 4 >> 2] | 0;
   i12 = 0;
   i13 = i10;
   i14 = i11;
   i15 = i10 + (i11 << 2) | 0;
   i16 = 7;
  } else {
   if (i9 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i11 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i9 << 2) | 0) | 0;
    i10 = HEAP32[i2 >> 2] | 0;
    i17 = HEAP32[i2 + 4 >> 2] | 0;
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     i18 = i11;
     break;
    } else {
     i12 = i11;
     i13 = i10;
     i14 = i17;
     i15 = i10 + (i17 << 2) | 0;
     i16 = 7;
     break;
    }
   }
  }
 } while (0);
 L10 : do {
  if ((i16 | 0) == 7) {
   L12 : do {
    if ((i14 | 0) == 0) {
     i19 = i13;
    } else {
     i3 = i13;
     while (1) {
      i2 = HEAP32[i3 >> 2] | 0;
      if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
       i19 = i3;
       break L12;
      }
      i2 = i3 + 4 | 0;
      if ((i2 | 0) == (i15 | 0)) {
       i18 = i12;
       break L10;
      } else {
       i3 = i2;
      }
     }
    }
   } while (0);
   if ((i19 | 0) == (i15 | 0)) {
    i18 = i12;
    break;
   } else {
    i20 = i19;
    i21 = 0;
   }
   while (1) {
    if (i7 >>> 0 <= i21 >>> 0) {
     break;
    }
    HEAP32[i12 + (i21 << 2) >> 2] = HEAP32[i20 >> 2];
    i3 = i20 + 4 | 0;
    if ((i3 | 0) == (i15 | 0)) {
     i18 = i12;
     break L10;
    } else {
     i22 = i3;
    }
    while (1) {
     i3 = HEAP32[i22 >> 2] | 0;
     if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
      break;
     }
     i3 = i22 + 4 | 0;
     if ((i3 | 0) == (i15 | 0)) {
      i18 = i12;
      break L10;
     } else {
      i22 = i3;
     }
    }
    if ((i22 | 0) == (i15 | 0)) {
     i18 = i12;
     break L10;
    } else {
     i20 = i22;
     i21 = i21 + 1 | 0;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if (i8) {
  i16 = 21;
 } else {
  i8 = i1 + i6 | 0;
  i6 = i8;
  i1 = i5;
  i21 = i8;
  i8 = i5 - 1 | 0;
  if ((i5 & 1 | 0) == 0) {
   i5 = 0;
   while (1) {
    FUNCTION_TABLE_vii[i1 & 15](i6, HEAP32[i18 + (i5 << 2) >> 2] | 0);
    i5 = i5 + 1 | 0;
    if (i5 >>> 0 >= i7 >>> 0) {
     break;
    }
   }
  } else {
   i5 = 0;
   while (1) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + i8 >> 2] & 15](i6, HEAP32[i18 + (i5 << 2) >> 2] | 0);
    i1 = i5 + 1 | 0;
    if (i1 >>> 0 < i7 >>> 0) {
     i5 = i1;
    } else {
     i16 = 21;
     break;
    }
   }
  }
 }
 do {
  if ((i16 | 0) == 21) {
   if ((i18 | 0) != 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i4;
 return;
}
function __ZN3WTF7HashMapIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIjNS_12KeyValuePairIjS5_EENS_24KeyValuePairKeyExtractorISF_EES7_NSB_18KeyValuePairTraitsES9_EESF_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 | 0;
 i5 = i1 | 0;
 i6 = i1 + 4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i6 >> 2] << 4) | 0;
 if ((HEAP32[i2 >> 2] | 0) == (i7 | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == (i7 | 0)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i7 = i9 + 12 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i10 = i9 + 4 | 0;
 if ((i2 | 0) != 0) {
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11 + (i2 << 3) | 0;
  i2 = i11;
  while (1) {
   i11 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i13 = i11 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i2 = i2 + 8 | 0;
   if ((i2 | 0) == (i12 | 0)) {
    break;
   }
  }
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i10 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
  HEAP32[i9 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 HEAP32[i9 >> 2] = -1;
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i7 = i1 + 12 | 0;
 i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i10;
 i7 = HEAP32[i6 >> 2] | 0;
 if (!((i10 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i10 = (i7 | 0) / 2 & -1;
 i12 = HEAP32[i5 >> 2] | 0;
 HEAP32[i6 >> 2] = i10;
 HEAP32[i1 + 8 >> 2] = i10 - 1;
 i1 = __ZN3WTF10fastMallocEj(i10 << 4) | 0;
 if ((i7 | 0) > 1) {
  i6 = 0;
  while (1) {
   _memset(i1 + (i6 << 4) | 0, 0, 16) | 0;
   i6 = i6 + 1 | 0;
   if ((i6 | 0) >= (i10 | 0)) {
    break;
   }
  }
 }
 HEAP32[i5 >> 2] = i1;
 if ((i7 | 0) != 0) {
  i1 = 0;
  while (1) {
   i5 = i12 + (i1 << 4) | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
    __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E8reinsertEOS7_(i4, i5) | 0;
   }
   i1 = i1 + 1 | 0;
   if ((i1 | 0) == (i7 | 0)) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E15deallocateTableEPS7_i(i12, i7);
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E8reinsertEOS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i6 = i1 + ~(i1 << 15) | 0;
 i7 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i7 >>> 6 ^ i7;
 i7 = i6 + ~(i6 << 11) | 0;
 i6 = i7 >>> 16 ^ i7;
 i7 = i6 & i5;
 i8 = i4 + (i7 << 4) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i6 >>> 23) + ~i6 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i7;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i1 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 << 4) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i10 = i20;
     i11 = i23;
     i12 = 3;
     break;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
  }
 } while (0);
 if ((i12 | 0) == 3) {
  i19 = (i10 | 0) != 0 ? i10 : i11;
 }
 i11 = i19 + 12 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 i12 = i19 + 4 | 0;
 if ((i10 | 0) != 0) {
  i4 = HEAP32[i12 >> 2] | 0;
  i5 = i4 + (i10 << 3) | 0;
  i10 = i4;
  while (1) {
   i4 = HEAP32[i10 + 4 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i1 = i4 | 0;
     i9 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i1 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i10 = i10 + 8 | 0;
   if ((i10 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i11 >> 2] = 0;
 }
 i5 = HEAP32[i12 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i25 = i19 + 8 | 0;
 } else {
  HEAP32[i12 >> 2] = 0;
  i10 = i19 + 8 | 0;
  HEAP32[i10 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
  i25 = i10;
 }
 HEAP32[i19 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i12 >> 2] = 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 i3 = i2 + 12 | 0;
 HEAP32[i11 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = 0;
 i3 = i2 + 4 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = i11;
 i11 = i2 + 8 | 0;
 i2 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i11 >> 2] = i2;
 return i19 | 0;
}
function __ZN7WebCore17ScriptDebugServer13setBreakpointEjRKNS_16ScriptBreakpointEPjS4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 32 | 0;
 if ((i2 | 0) == 0) {
  i10 = 0;
  STACKTOP = i6;
  return i10 | 0;
 }
 i11 = HEAP32[i3 >> 2] | 0;
 i12 = HEAP32[i3 + 4 >> 2] | 0;
 i13 = HEAP32[i3 + 8 >> 2] | 0;
 i14 = (i13 | 0) == 0;
 do {
  if (i14) {
   i15 = HEAP8[i3 + 24 | 0] & 1;
  } else {
   i16 = i13 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   i18 = i17 + 2 | 0;
   HEAP32[i16 >> 2] = i18;
   i19 = HEAP8[i3 + 24 | 0] & 1;
   HEAP32[i16 >> 2] = i17 + 4;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    i15 = i19;
    break;
   } else {
    HEAP32[i16 >> 2] = i18;
    i15 = i19;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = i2;
 HEAP32[i8 + 8 >> 2] = i11;
 HEAP32[i8 + 12 >> 2] = i12;
 i12 = i8 + 16 | 0;
 HEAP32[i12 >> 2] = i13;
 if (!i14) {
  i11 = i13 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 HEAP8[i8 + 20 | 0] = i15;
 i15 = __ZN3JSC8Debugger13setBreakpointENS_10BreakpointERjS2_(i1, i8, i4, i5) | 0;
 i5 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = i15;
 do {
  if ((i15 | 0) != 0) {
   i5 = i3 + 12 | 0;
   if ((HEAP32[i3 + 20 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKjRKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIjS7_S9_SB_SH_SE_EEEEOT0_OT1_(i9, i1 + 120 | 0, i7, i5);
   if ((HEAP8[i9 + 8 | 0] & 1) != 0) {
    break;
   }
   __ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEaSERKS4_((HEAP32[i9 >> 2] | 0) + 4 | 0, i5) | 0;
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 if (i14) {
  i10 = i9;
  STACKTOP = i6;
  return i10 | 0;
 }
 i14 = i13 | 0;
 i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  i10 = i9;
  STACKTOP = i6;
  return i10 | 0;
 } else {
  HEAP32[i14 >> 2] = i7;
  i10 = i9;
  STACKTOP = i6;
  return i10 | 0;
 }
 return 0;
}
function __ZN3WTF7HashMapIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEE4findERKj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 4 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8 + ~(i8 << 15) | 0;
   i10 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i10 >>> 6 ^ i10;
   i10 = i9 + ~(i9 << 11) | 0;
   i9 = i10 >>> 16 ^ i10;
   i10 = i9 & i5;
   i11 = i4 + (i10 << 4) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L4 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i9 >>> 23) + ~i9 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i10;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 << 4) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L4;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + (HEAP32[i2 + 4 >> 2] << 4) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + (HEAP32[i2 + 4 >> 2] << 4) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN7WebCore17ScriptDebugServer11handlePauseEN3JSC8Debugger14ReasonForPauseEPNS1_14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i1 + 117 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  HEAP8[i6] = 1;
  i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] & 7](i1, i3) | 0;
  if ((i7 | 0) != 0) {
   HEAP32[i5 >> 2] = F_BASE_vii + 4;
   HEAP32[i5 + 4 >> 2] = 0;
   __ZN7WebCore17ScriptDebugServer27dispatchFunctionToListenersERKN3WTF7HashSetIPNS_19ScriptDebugListenerENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEMS0_FvS4_E(i1, i7, i5);
  }
  HEAP8[i6] = 0;
 }
 i5 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 15](i1, i3);
 __ZN7WebCore9TimerBase27fireTimersInNestedEventLoopEv();
 i7 = i1 + 118 | 0;
 HEAP8[i7] = 1;
 HEAP8[i1 + 116 | 0] = 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 15](i1);
 HEAP8[i7] = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 15](i1, i3);
 if ((HEAP8[i6] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i6] = 1;
 i5 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] & 7](i1, i3) | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = F_BASE_vii + 6;
  HEAP32[i4 + 4 >> 2] = 0;
  __ZN7WebCore17ScriptDebugServer27dispatchFunctionToListenersERKN3WTF7HashSetIPNS_19ScriptDebugListenerENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEMS0_FvS4_E(i1, i5, i4);
 }
 HEAP8[i6] = 0;
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E15deallocateTableEPS7_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  do {
   if ((HEAP32[i1 + (i3 << 4) >> 2] | 0) != -1) {
    i5 = i1 + (i3 << 4) + 12 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    i7 = i1 + (i3 << 4) + 4 | 0;
    if ((i6 | 0) != 0) {
     i8 = HEAP32[i7 >> 2] | 0;
     i9 = i8 + (i6 << 3) | 0;
     i6 = i8;
     while (1) {
      i8 = HEAP32[i6 + 4 >> 2] | 0;
      do {
       if ((i8 | 0) != 0) {
        i10 = i8 | 0;
        i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
        if ((i11 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i8);
         break;
        } else {
         HEAP32[i10 >> 2] = i11;
         break;
        }
       }
      } while (0);
      i6 = i6 + 8 | 0;
      if ((i6 | 0) == (i9 | 0)) {
       break;
      }
     }
     HEAP32[i5 >> 2] = 0;
    }
    i9 = HEAP32[i7 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
    HEAP32[i7 >> 2] = 0;
    HEAP32[i1 + (i3 << 4) + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i9);
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZNK7WebCore17ScriptDebugServer24evaluateBreakpointActionERKNS_22ScriptBreakpointActionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = __ZNK3JSC8Debugger24currentDebuggerCallFrameEv(i1) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 2) {
  __ZN7WebCore10systemBeepEv();
  STACKTOP = i3;
  return 1;
 } else if ((i1 | 0) == 0) {
  i8 = __ZNK7WebCore9DOMWindow11pageConsoleEv(HEAP32[(__ZNK3JSC17DebuggerCallFrame19vmEntryGlobalObjectEv(i7) | 0) + 660 >> 2] | 0) | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i3;
   return 1;
  }
  __ZN7WebCore11PageConsole10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEmPNS_8DocumentE(i8, 1, 1, i2 + 4 | 0, 0, 0);
  STACKTOP = i3;
  return 1;
 } else if ((i1 | 0) == 1) {
  i1 = i4 + 4 | 0;
  HEAP32[i1 >> 2] = -6;
  HEAP32[i4 >> 2] = 0;
  __ZNK3JSC17DebuggerCallFrame8evaluateERKN3WTF6StringERNS_7JSValueE(i5, i7, i2 + 4 | 0, i4);
  if ((HEAP32[i1 >> 2] | 0) == -6) {
   STACKTOP = i3;
   return 1;
  }
  i1 = HEAP32[i7 + 4 >> 2] | 0;
  i7 = i4 | 0;
  i4 = HEAP32[i7 + 4 >> 2] | 0;
  i2 = i6 | 0;
  HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i2 + 4 >> 2] = i4;
  __ZN7WebCore15reportExceptionEPN3JSC9ExecStateENS0_7JSValueEPNS_12CachedScriptE(i1, i6, 0);
  STACKTOP = i3;
  return 1;
 } else {
  STACKTOP = i3;
  return 1;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 3) | 0;
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   i2 = i6 + 4 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = i8;
   i8 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i2 = i8 | 0;
     i9 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i2 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i8 = i6 + 8 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 8 | 0;
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
function __ZN7WebCore17ScriptDebugServer16removeBreakpointEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 120 | 0;
 __ZN3WTF7HashMapIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEE4findERKj(i5, i2, i4);
 if ((HEAP32[i5 >> 2] | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i1 + 124 >> 2] << 4) | 0)) {
  i7 = i1;
  i8 = HEAP32[i4 >> 2] | 0;
  __ZN3JSC8Debugger16removeBreakpointEj(i7, i8);
  STACKTOP = i3;
  return;
 }
 i9 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = i9;
 __ZN3WTF7HashMapIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIjNS_12KeyValuePairIjS5_EENS_24KeyValuePairKeyExtractorISF_EES7_NSB_18KeyValuePairTraitsES9_EESF_EE(i2, i6) | 0;
 i7 = i1;
 i8 = HEAP32[i4 >> 2] | 0;
 __ZN3JSC8Debugger16removeBreakpointEj(i7, i8);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17ScriptDebugServer12sourceParsedEPN3JSC9ExecStateEPNS1_14SourceProviderEiRKN3WTF6StringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = i1 + 117 | 0;
 if ((HEAP8[i6] & 1) != 0) {
  return;
 }
 i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] & 7](i1, HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 HEAP8[i6] = 1;
 if ((i4 | 0) == -1) {
  __ZN7WebCore17ScriptDebugServer22dispatchDidParseSourceERKN3WTF7HashSetIPNS_19ScriptDebugListenerENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEPN3JSC14SourceProviderEb(0, i7, i3, FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] & 7](i1, i2) | 0);
 } else {
  __ZN7WebCore17ScriptDebugServer27dispatchFailedToParseSourceERKN3WTF7HashSetIPNS_19ScriptDebugListenerENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEPN3JSC14SourceProviderEiRKNS1_6StringE(0, i7, i3, i4, i5);
 }
 HEAP8[i6] = 0;
 return;
}
function __ZN7WebCore17ScriptDebugServer27dispatchFunctionToListenersEMS0_FvPNS_19ScriptDebugListenerEEPN3JSC14JSGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = i1 + 117 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 HEAP8[i2] = 1;
 i8 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] & 7](i1, i3) | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i5 >> 2] = i6;
  HEAP32[i5 + 4 >> 2] = i7;
  __ZN7WebCore17ScriptDebugServer27dispatchFunctionToListenersERKN3WTF7HashSetIPNS_19ScriptDebugListenerENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEMS0_FvS4_E(i1, i8, i5);
 }
 HEAP8[i2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17ScriptDebugServer19handleBreakpointHitERKN3JSC10BreakpointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 120 | 0;
 __ZN3WTF7HashMapIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEE4findERKj(i4, i5, i2 | 0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == ((HEAP32[i5 >> 2] | 0) + (HEAP32[i1 + 124 >> 2] << 4) | 0)) {
  STACKTOP = i3;
  return;
 }
 i5 = i2 + 12 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = 0;
 while (1) {
  __ZNK7WebCore17ScriptDebugServer24evaluateBreakpointActionERKNS_22ScriptBreakpointActionE(i1, (HEAP32[i4 >> 2] | 0) + (i2 << 3) | 0) | 0;
  i2 = i2 + 1 | 0;
  if (i2 >>> 0 >= (HEAP32[i5 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_iii + 4;
}
function __ZN7WebCore17ScriptDebugServerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 144 | 0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3JSC8DebuggerD2Ev(i3);
  i4 = i1 | 0;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E15deallocateTableEPS7_i(i2, HEAP32[i1 + 124 >> 2] | 0);
 i3 = i1;
 __ZN3JSC8DebuggerD2Ev(i3);
 i4 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore19JavaScriptCallFrameD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore19JavaScriptCallFrameD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
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
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN3JSC17DebuggerCallFrameD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZNK7WebCore17ScriptDebugServer36handleExceptionInBreakpointConditionEPN3JSC9ExecStateENS1_7JSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 | 0;
 i5 = i3 | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = i3;
 __ZN7WebCore15reportExceptionEPN3JSC9ExecStateENS0_7JSValueEPNS_12CachedScriptE(i2, i4, 0);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore17ScriptDebugServerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 144 | 0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3JSC8DebuggerD2Ev(i3);
  return;
 }
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E15deallocateTableEPS7_i(i2, HEAP32[i1 + 124 >> 2] | 0);
 i3 = i1;
 __ZN3JSC8DebuggerD2Ev(i3);
 return;
}
function __ZN7WebCore17ScriptDebugServerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 144 | 0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3JSC8DebuggerD2Ev(i3);
  return;
 }
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E15deallocateTableEPS7_i(i2, HEAP32[i1 + 124 >> 2] | 0);
 i3 = i1;
 __ZN3JSC8DebuggerD2Ev(i3);
 return;
}
function __ZN7WebCore17ScriptDebugServer16clearBreakpointsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN3JSC8Debugger16clearBreakpointsEv(i1);
 i2 = i1 + 120 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E15deallocateTableEPS7_i(i3, HEAP32[i1 + 124 >> 2] | 0);
 _memset(i2 | 0, 0, 16) | 0;
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
function __ZN7WebCore5TimerINS_17ScriptDebugServerEE5firedEv(i1) {
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
function __ZN7WebCore17ScriptDebugServerC2Eb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3JSC8DebuggerC2Eb(i1, i2);
 HEAP32[i1 >> 2] = H_BASE + 48;
 HEAP8[i1 + 116 | 0] = 1;
 HEAP8[i1 + 117 | 0] = 0;
 HEAP8[i1 + 118 | 0] = 0;
 _memset(i1 + 120 | 0, 0, 20) | 0;
 i2 = i1 + 144 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 + 188 >> 2] = i1;
 i2 = i1 + 192 | 0;
 HEAP32[i2 >> 2] = 37;
 HEAP32[i2 + 4 >> 2] = 0;
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
function __ZN3JSC17DebuggerCallFrameD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN3JSC17DebuggerCallFrameD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore17ScriptDebugServer15isContentScriptEPN3JSC9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
 return (i1 | 0) != (__ZN7WebCore21mainThreadNormalWorldEv() | 0) | 0;
}
function __ZN7WebCore17ScriptDebugServer15setScriptSourceERKN3WTF6StringES4_bPS2_PN10Deprecated11ScriptValueEPNS6_12ScriptObjectE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return 0;
}
function __ZN7WebCore17ScriptDebugServer9runScriptEPN3JSC9ExecStateERKN3WTF6StringEPN10Deprecated11ScriptValueEPbPS5_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
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
function __ZN7WebCore17ScriptDebugServer17needPauseHandlingEPN3JSC14JSGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] & 7](i1, i2) | 0) != 0 | 0;
}
function __ZN7WebCore17ScriptDebugServer13compileScriptEPN3JSC9ExecStateERKN3WTF6StringES7_PS5_S8_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
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
function __ZN7WebCore17ScriptDebugServer19dispatchDidContinueEPNS_19ScriptDebugListenerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 15](i2);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN3JSC8Debugger6detachEPNS_14JSGlobalObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3JSC8Debugger6detachEPNS_14JSGlobalObjectE(i1 | 0, i2 | 0);
}
function __ZN7WebCore17ScriptDebugServer27recompileAllJSFunctionsSoonEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBase5startEdd(i1 + 144 | 0, +0, +0);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore5TimerINS_17ScriptDebugServerEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
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
function __ZN7WebCore17ScriptDebugServer34notifyDoneProcessingDebuggerEventsEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 116 | 0] = 1;
 return;
}
function __ZN7WebCore17ScriptDebugServer15updateCallStackEPN10Deprecated11ScriptValueE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
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
function __ZN7WebCore5TimerINS_17ScriptDebugServerEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZN7WebCore17ScriptDebugServer20clearCompiledScriptsEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore17ScriptDebugServer18canSetScriptSourceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore17ScriptDebugServer12sourceParsedEPN3JSC9ExecStateEPNS1_14SourceProviderEiRKN3WTF6StringE,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore17ScriptDebugServer34notifyDoneProcessingDebuggerEventsEv,b2,__ZN7WebCore17ScriptDebugServerD2Ev,b2,__ZN7WebCore5TimerINS_17ScriptDebugServerEED0Ev,b2,__ZN7WebCore17ScriptDebugServerD0Ev,b2,__ZN7WebCore5TimerINS_17ScriptDebugServerEE5firedEv,b2,__ZN7WebCore5TimerINS_17ScriptDebugServerEED1Ev,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore17ScriptDebugServer19handleBreakpointHitERKN3JSC10BreakpointE,b3,__ZN7WebCore17ScriptDebugServer16dispatchDidPauseEPNS_19ScriptDebugListenerE,b3,__ZN7WebCore17ScriptDebugServer19dispatchDidContinueEPNS_19ScriptDebugListenerE,b3,vii___ZN3JSC8Debugger6detachEPNS_14JSGlobalObjectE__wrapper,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZNK7WebCore17ScriptDebugServer36handleExceptionInBreakpointConditionEPN3JSC9ExecStateENS1_7JSValueE,b5,__ZN7WebCore17ScriptDebugServer11handlePauseEN3JSC8Debugger14ReasonForPauseEPNS1_14JSGlobalObjectE,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6,v____cxa_pure_virtual__wrapper,b6];
  var FUNCTION_TABLE_viiiiii = [b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,__ZN7WebCore17ScriptDebugServer17needPauseHandlingEPN3JSC14JSGlobalObjectE,b8,__ZN7WebCore17ScriptDebugServer15isContentScriptEPN3JSC9ExecStateE,b8,b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore17JSDOMGlobalObject6s_infoE": __ZN7WebCore17JSDOMGlobalObject6s_infoE, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore17ScriptDebugServer19handleBreakpointHitERKN3JSC10BreakpointE","__ZN7WebCore17ScriptDebugServer16dispatchDidPauseEPNS_19ScriptDebugListenerE","_strlen","__ZN3WTF7HashMapIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEE4findERKj","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKjRKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIjS7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZNK7WebCore17ScriptDebugServer24evaluateBreakpointActionERKNS_22ScriptBreakpointActionE","__ZN7WebCore17ScriptDebugServer9runScriptEPN3JSC9ExecStateERKN3WTF6StringEPN10Deprecated11ScriptValueEPbPS5_","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E15deallocateTableEPS7_i","__ZN7WebCore17ScriptDebugServerD2Ev","__ZN7WebCore17ScriptDebugServer19dispatchDidContinueEPNS_19ScriptDebugListenerE","__ZN7WebCore17ScriptDebugServer20clearCompiledScriptsEv","__ZN7WebCore5TimerINS_17ScriptDebugServerEED0Ev","__ZN7WebCore17ScriptDebugServer15updateCallStackEPN10Deprecated11ScriptValueE","_memset","__ZN3JSC17DebuggerCallFrameD2Ev","__ZN7WebCore17ScriptDebugServer15isContentScriptEPN3JSC9ExecStateE","__ZN7WebCore17ScriptDebugServer27recompileAllJSFunctionsSoonEv","__ZN7WebCore5TimerINS_17ScriptDebugServerEE5firedEv","__ZN7WebCore17ScriptDebugServer27dispatchFunctionToListenersERKN3WTF7HashSetIPNS_19ScriptDebugListenerENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEMS0_FvS4_E","__ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEaSERKS4_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore17ScriptDebugServer16removeBreakpointEj","__ZN7WebCore17ScriptDebugServer15setScriptSourceERKN3WTF6StringES4_bPS2_PN10Deprecated11ScriptValueEPNS6_12ScriptObjectE","__ZNK7WebCore17ScriptDebugServer36handleExceptionInBreakpointConditionEPN3JSC9ExecStateENS1_7JSValueE","__ZN7WebCore17ScriptDebugServer34notifyDoneProcessingDebuggerEventsEv","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7IntHashIjEENS_7HashMapIjS6_SB_NS_10HashTraitsIjEENSD_IS6_EEE18KeyValuePairTraitsESE_E8reinsertEOS7_","__ZN7WebCore17ScriptDebugServer27dispatchFailedToParseSourceERKN3WTF7HashSetIPNS_19ScriptDebugListenerENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEPN3JSC14SourceProviderEiRKNS1_6StringE","__ZN7WebCore17ScriptDebugServer16clearBreakpointsEv","__ZN7WebCore5TimerINS_17ScriptDebugServerEED1Ev","__ZN7WebCore19JavaScriptCallFrameD2Ev","__ZN7WebCore17ScriptDebugServer18canSetScriptSourceEv","__ZN7WebCore17ScriptDebugServer13setBreakpointEjRKNS_16ScriptBreakpointEPjS4_","__ZN7WebCore17ScriptDebugServerC2Eb","__ZN7WebCore17ScriptDebugServer12sourceParsedEPN3JSC9ExecStateEPNS1_14SourceProviderEiRKN3WTF6StringE","__ZN7WebCore17ScriptDebugServer13compileScriptEPN3JSC9ExecStateERKN3WTF6StringES7_PS5_S8_","__ZN7WebCore17ScriptDebugServer17needPauseHandlingEPN3JSC14JSGlobalObjectE","_memcpy","__ZN7WebCore17ScriptDebugServerD0Ev","__ZN7WebCore17ScriptDebugServer22dispatchDidParseSourceERKN3WTF7HashSetIPNS_19ScriptDebugListenerENS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EEEEPN3JSC14SourceProviderEb","__ZN7WebCore17ScriptDebugServer11handlePauseEN3JSC8Debugger14ReasonForPauseEPNS1_14JSGlobalObjectE","__ZN3WTF7HashMapIjNS_6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIjNS_12KeyValuePairIjS5_EENS_24KeyValuePairKeyExtractorISF_EES7_NSB_18KeyValuePairTraitsES9_EESF_EE","__ZN7WebCore17ScriptDebugServer27dispatchFunctionToListenersEMS0_FvPNS_19ScriptDebugListenerEEPN3JSC14JSGlobalObjectE"]

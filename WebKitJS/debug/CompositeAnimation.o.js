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
H_BASE = parentModule["_malloc"](24 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 24;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18CompositeAnimationC1EPNS_26AnimationControllerPrivateE;
var __ZN7WebCore18CompositeAnimationD1Ev;
/* memory initializer */ allocate([110,111,110,101,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_di(index,a1) {
  try {
    return Module["dynCall_di"](index,a1);
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
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore18CompositeAnimation24updateKeyframeAnimationsEPNS_13RenderElementEPNS_11RenderStyleES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 56 | 0;
 i13 = i1 + 28 | 0;
 i14 = i1 + 40 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i16 = HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 108 >> 2] | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i16 = i13 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = i1 + 32 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = i17 + (i19 << 3) | 0;
 do {
  if ((i3 | 0) == 0) {
   i21 = i15;
   i22 = i17;
   i23 = i19;
   i24 = 22;
  } else {
   i25 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 108 >> 2] | 0;
   if ((i25 | 0) == 0) {
    i21 = i15;
    i22 = i17;
    i23 = i19;
    i24 = 22;
    break;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) == 0) {
    i21 = i15;
    i22 = i17;
    i23 = i19;
    i24 = 22;
    break;
   }
   i26 = HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 108 >> 2] | 0;
   if ((i26 | 0) == 0) {
    i21 = i15;
    i22 = i17;
    i23 = i19;
    i24 = 22;
    break;
   }
   if ((HEAP32[i26 + 8 >> 2] | 0) == 0) {
    i21 = i15;
    i22 = i17;
    i23 = i19;
    i24 = 22;
    break;
   }
   i27 = __ZNK7WebCore13AnimationListeqERKS0_(i25, i26) | 0;
   i26 = HEAP32[i14 >> 2] | 0;
   if (!i27) {
    i21 = i26;
    i22 = HEAP32[i16 >> 2] | 0;
    i23 = HEAP32[i18 >> 2] | 0;
    i24 = 22;
    break;
   }
   i27 = HEAP32[i16 >> 2] | 0;
   i25 = HEAP32[i18 >> 2] | 0;
   i28 = i27 + (i25 << 3) | 0;
   L17 : do {
    if ((i26 | 0) == 0) {
     i29 = i28;
    } else {
     if ((i25 | 0) == 0) {
      i29 = i27;
      break;
     } else {
      i30 = i27;
     }
     while (1) {
      i31 = HEAP32[i30 >> 2] | 0;
      if (!((i31 | 0) == (-1 | 0) | (i31 | 0) == 0)) {
       i29 = i30;
       break L17;
      }
      i31 = i30 + 8 | 0;
      if ((i31 | 0) == (i28 | 0)) {
       i29 = i28;
       break;
      } else {
       i30 = i31;
      }
     }
    }
   } while (0);
   if ((i29 | 0) == (i20 | 0)) {
    break;
   } else {
    i32 = i29;
   }
   while (1) {
    i27 = HEAP32[i32 + 4 >> 2] | 0;
    if ((HEAP32[i27 + 8 >> 2] | 0) == 11) {
     HEAP32[i27 + 104 >> 2] = -1;
    }
    i27 = i32 + 8 | 0;
    L28 : do {
     if ((i27 | 0) == (i28 | 0)) {
      i33 = i28;
     } else {
      i25 = i27;
      while (1) {
       i26 = HEAP32[i25 >> 2] | 0;
       if (!((i26 | 0) == (-1 | 0) | (i26 | 0) == 0)) {
        i33 = i25;
        break L28;
       }
       i26 = i25 + 8 | 0;
       if ((i26 | 0) == (i28 | 0)) {
        i33 = i28;
        break;
       } else {
        i25 = i26;
       }
      }
     }
    } while (0);
    if ((i33 | 0) == (i20 | 0)) {
     break;
    } else {
     i32 = i33;
    }
   }
  }
 } while (0);
 L33 : do {
  if ((i24 | 0) == 22) {
   i33 = i22 + (i23 << 3) | 0;
   L35 : do {
    if ((i21 | 0) == 0) {
     i34 = i33;
    } else {
     if ((i23 | 0) == 0) {
      i34 = i22;
      break;
     } else {
      i35 = i22;
     }
     while (1) {
      i32 = HEAP32[i35 >> 2] | 0;
      if (!((i32 | 0) == (-1 | 0) | (i32 | 0) == 0)) {
       i34 = i35;
       break L35;
      }
      i32 = i35 + 8 | 0;
      if ((i32 | 0) == (i33 | 0)) {
       i34 = i33;
       break;
      } else {
       i35 = i32;
      }
     }
    }
   } while (0);
   if ((i34 | 0) != (i20 | 0)) {
    i32 = i34;
    while (1) {
     HEAP32[(HEAP32[i32 + 4 >> 2] | 0) + 104 >> 2] = -1;
     i29 = i32 + 8 | 0;
     L44 : do {
      if ((i29 | 0) == (i33 | 0)) {
       i36 = i33;
      } else {
       i30 = i29;
       while (1) {
        i19 = HEAP32[i30 >> 2] | 0;
        if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
         i36 = i30;
         break L44;
        }
        i19 = i30 + 8 | 0;
        if ((i19 | 0) == (i33 | 0)) {
         i36 = i33;
         break;
        } else {
         i30 = i19;
        }
       }
      }
     } while (0);
     if ((i36 | 0) == (i20 | 0)) {
      break;
     } else {
      i32 = i36;
     }
    }
   }
   i32 = i1 + 48 | 0;
   i33 = i1 + 52 | 0;
   do {
    if ((HEAP32[i33 >> 2] | 0) != 0) {
     i29 = i1 + 56 | 0;
     if ((HEAP32[i29 >> 2] | 0) != 0) {
      HEAP32[i29 >> 2] = 0;
     }
     i29 = i32 | 0;
     i30 = HEAP32[i29 >> 2] | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     HEAP32[i29 >> 2] = 0;
     HEAP32[i33 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i30);
    }
   } while (0);
   if (!(HEAP8[H_BASE + 16 | 0] | 0)) {
    i30 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i7, H_BASE + 8 | 0, 4);
    i29 = i7 | 0;
    i19 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = 0;
    HEAP32[i30 >> 2] = i19;
    HEAP32[H_BASE + 24 >> 2] = i30;
    HEAP8[H_BASE + 16 | 0] = 1;
   }
   i30 = i4 + 20 | 0;
   i19 = HEAP32[(HEAP32[i30 >> 2] | 0) + 108 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i29 = HEAP32[i19 + 8 >> 2] | 0;
   if ((i29 | 0) <= 0) {
    break;
   }
   i17 = i6 | 0;
   i15 = i1 + 36 | 0;
   i3 = i8 | 0;
   i28 = i1 + 60 | 0;
   i27 = i13 | 0;
   i25 = i10 + 8 | 0;
   i26 = i10 | 0;
   i31 = i1 + 56 | 0;
   i37 = i32 | 0;
   i38 = i11;
   i39 = 0;
   i40 = i19;
   i19 = i29;
   while (1) {
    if (i19 >>> 0 <= i39 >>> 0) {
     break;
    }
    i41 = HEAP32[(HEAP32[i40 >> 2] | 0) + (i39 << 2) >> 2] | 0;
    i42 = i41 + 4 | 0;
    i43 = HEAP32[i42 >> 2] | 0;
    if ((i43 | 0) == 0) {
     HEAP32[i17 >> 2] = 0;
     i44 = 0;
    } else {
     if ((HEAP32[i43 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i43);
     } else {
      HEAP32[i17 >> 2] = i43;
      i45 = i43 | 0;
      HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 2;
     }
     i44 = HEAP32[i17 >> 2] | 0;
    }
    L73 : do {
     if ((HEAP8[i41 + 45 | 0] | 0) >= 0) {
      i45 = HEAP32[i42 >> 2] | 0;
      if ((i45 | 0) == 0) {
       break;
      }
      if ((HEAP32[i45 + 4 >> 2] | 0) == 0) {
       break;
      }
      i45 = i44;
      i43 = HEAP32[i15 >> 2] | 0;
      i46 = HEAP32[i16 >> 2] | 0;
      i47 = i44;
      i48 = i47 + ~(i47 << 15) | 0;
      i47 = (i48 >>> 10 ^ i48) * 9 & -1;
      i48 = i47 >>> 6 ^ i47;
      i47 = i48 + ~(i48 << 11) | 0;
      i48 = i47 >>> 16 ^ i47;
      L77 : do {
       if ((i46 | 0) == 0) {
        i24 = 58;
       } else {
        i47 = i43 & i48;
        i49 = i46 + (i47 << 3) | 0;
        i50 = HEAP32[i49 >> 2] | 0;
        if ((i50 | 0) == (i45 | 0)) {
         i51 = i49;
        } else {
         i49 = (i48 >>> 23) + ~i48 | 0;
         i52 = i49 << 12 ^ i49;
         i49 = i52 >>> 7 ^ i52;
         i52 = i49 << 2 ^ i49;
         i49 = i52 >>> 20 ^ i52 | 1;
         i52 = 0;
         i53 = i47;
         i47 = i50;
         while (1) {
          if ((i47 | 0) == 0) {
           i24 = 58;
           break L77;
          }
          i50 = (i52 | 0) == 0 ? i49 : i52;
          i54 = i50 + i53 & i43;
          i55 = i46 + (i54 << 3) | 0;
          i56 = HEAP32[i55 >> 2] | 0;
          if ((i56 | 0) == (i45 | 0)) {
           i51 = i55;
           break;
          } else {
           i52 = i50;
           i53 = i54;
           i47 = i56;
          }
         }
        }
        if ((i51 | 0) == 0) {
         i24 = 58;
         break;
        }
        i47 = HEAP32[i51 + 4 >> 2] | 0;
        HEAP32[i3 >> 2] = i47;
        if ((i47 | 0) == 0) {
         i24 = 68;
         break;
        }
        i53 = i47 + 4 | 0;
        HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
        if ((HEAP32[i47 + 8 >> 2] | 0) == 11) {
         i57 = i47;
         break;
        }
        __ZN7WebCore13AnimationBase15updatePlayStateENS_14EAnimPlayStateE(i47, (HEAP32[i41 + 44 >> 2] | 0) >>> 4 & 3);
        if ((i41 | 0) != 0) {
         i53 = i41 | 0;
         HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
        }
        i53 = i47 + 60 | 0;
        i52 = HEAP32[i53 >> 2] | 0;
        HEAP32[i53 >> 2] = i41;
        do {
         if ((i52 | 0) != 0) {
          i53 = i52 | 0;
          i49 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
          if ((i49 | 0) == 0) {
           __ZN7WebCore9AnimationD1Ev(i52);
           __ZN3WTF8fastFreeEPv(i52);
           break;
          } else {
           HEAP32[i53 >> 2] = i49;
           break;
          }
         }
        } while (0);
        HEAP32[i47 + 104 >> 2] = i39;
        i58 = i47;
        i24 = 82;
       }
      } while (0);
      if ((i24 | 0) == 58) {
       i24 = 0;
       HEAP32[i3 >> 2] = 0;
       i24 = 68;
      }
      do {
       if ((i24 | 0) == 68) {
        i24 = 0;
        if (+HEAPF64[i41 + 32 >> 3] == +0) {
         if (+HEAPF64[i41 + 24 >> 3] == +0) {
          break L73;
         }
        }
        if (+HEAPF64[i41 + 16 >> 3] == +0) {
         break L73;
        }
        if ((i44 | 0) == (HEAP32[HEAP32[H_BASE + 24 >> 2] >> 2] | 0)) {
         break L73;
        }
        i45 = __ZN3WTF10fastMallocEj(120) | 0;
        i46 = i45;
        __ZN7WebCore17KeyframeAnimationC1ERKNS_9AnimationEPNS_13RenderElementEiPNS_18CompositeAnimationEPNS_11RenderStyleE(i46, i41, i2, i39, i1, i4);
        HEAP32[i3 >> 2] = i46;
        if ((HEAP8[i28] & 1) != 0) {
         __ZN7WebCore13AnimationBase15updatePlayStateENS_14EAnimPlayStateE(i45, 1);
        }
        HEAP32[i9 >> 2] = HEAP32[i45 + 68 >> 2];
        __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore17KeyframeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES2_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i10, i27, i9, i8);
        if ((HEAP8[i25] & 1) != 0) {
         i58 = HEAP32[i3 >> 2] | 0;
         i24 = 82;
         break;
        }
        i45 = HEAP32[i26 >> 2] | 0;
        i46 = HEAP32[i3 >> 2] | 0;
        if ((i46 | 0) != 0) {
         i43 = i46 + 4 | 0;
         HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
        }
        i43 = i45 + 4 | 0;
        i45 = HEAP32[i43 >> 2] | 0;
        HEAP32[i43 >> 2] = i46;
        if ((i45 | 0) == 0) {
         i58 = i46;
         i24 = 82;
         break;
        }
        i43 = i45 + 4 | 0;
        i48 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
        if ((i48 | 0) == 0) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 4 >> 2] & 3](i45);
         i58 = i46;
         i24 = 82;
         break;
        } else {
         HEAP32[i43 >> 2] = i48;
         i58 = i46;
         i24 = 82;
         break;
        }
       }
      } while (0);
      do {
       if ((i24 | 0) == 82) {
        i24 = 0;
        if ((i58 | 0) == 0) {
         break L73;
        }
        i46 = HEAP32[i58 + 68 >> 2] | 0;
        HEAP32[i11 >> 2] = i46;
        i48 = HEAP32[i31 >> 2] | 0;
        if ((i48 | 0) != (HEAP32[i33 >> 2] | 0)) {
         HEAP32[(HEAP32[i37 >> 2] | 0) + (i48 << 2) >> 2] = i46;
         HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
         i57 = i58;
         break;
        }
        i46 = i48 + 1 | 0;
        i43 = HEAP32[i37 >> 2] | 0;
        do {
         if (i43 >>> 0 > i11 >>> 0) {
          i24 = 87;
         } else {
          if ((i43 + (i48 << 2) | 0) >>> 0 <= i11 >>> 0) {
           i24 = 87;
           break;
          }
          __ZN3WTF6VectorIPNS_16AtomicStringImplELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i32, i46);
          i45 = HEAP32[i37 >> 2] | 0;
          i59 = i45 + (i38 - i43 >> 2 << 2) | 0;
          i60 = i45;
         }
        } while (0);
        if ((i24 | 0) == 87) {
         i24 = 0;
         __ZN3WTF6VectorIPNS_16AtomicStringImplELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i32, i46);
         i59 = i11;
         i60 = HEAP32[i37 >> 2] | 0;
        }
        HEAP32[i60 + (HEAP32[i31 >> 2] << 2) >> 2] = HEAP32[i59 >> 2];
        HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
        if ((i58 | 0) == 0) {
         break L73;
        } else {
         i57 = i58;
        }
       }
      } while (0);
      i43 = i57 + 4 | 0;
      i48 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
      if ((i48 | 0) == 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 3](i57);
       break;
      } else {
       HEAP32[i43 >> 2] = i48;
       break;
      }
     }
    } while (0);
    do {
     if ((i44 | 0) != 0) {
      i41 = i44 | 0;
      i42 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
      if ((i42 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i44);
       break;
      } else {
       HEAP32[i41 >> 2] = i42;
       break;
      }
     }
    } while (0);
    i42 = i39 + 1 | 0;
    if ((i42 | 0) >= (i29 | 0)) {
     break L33;
    }
    i41 = HEAP32[(HEAP32[i30 >> 2] | 0) + 108 >> 2] | 0;
    i39 = i42;
    i40 = i41;
    i19 = HEAP32[i41 + 8 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i44 = HEAP32[i16 >> 2] | 0;
 i57 = HEAP32[i18 >> 2] | 0;
 i58 = i44 + (i57 << 3) | 0;
 if ((HEAP32[i14 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 L148 : do {
  if ((i57 | 0) == 0) {
   i61 = i44;
  } else {
   i59 = i44;
   while (1) {
    i60 = HEAP32[i59 >> 2] | 0;
    if (!((i60 | 0) == (-1 | 0) | (i60 | 0) == 0)) {
     i61 = i59;
     break L148;
    }
    i59 = i59 + 8 | 0;
    if ((i59 | 0) == (i58 | 0)) {
     break;
    }
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((i61 | 0) == (i58 | 0)) {
  STACKTOP = i5;
  return;
 }
 i44 = i12;
 i57 = i1 + 4 | 0;
 i59 = 0;
 i60 = 0;
 i11 = 0;
 i8 = i61;
 L157 : while (1) {
  i61 = HEAP32[i8 + 4 >> 2] | 0;
  if ((HEAP32[i61 + 104 >> 2] | 0) < 0) {
   i9 = HEAP32[i61 + 68 >> 2] | 0;
   HEAP32[i12 >> 2] = i9;
   if ((i59 | 0) == (i60 | 0)) {
    i10 = i60 + 1 | 0;
    do {
     if (i11 >>> 0 > i12 >>> 0) {
      i24 = 112;
     } else {
      if ((i11 + (i60 << 2) | 0) >>> 0 <= i12 >>> 0) {
       i24 = 112;
       break;
      }
      i4 = i44 - i11 >> 2;
      i2 = i10 + (i60 >>> 2) | 0;
      i51 = i2 >>> 0 > 16 >>> 0 ? i2 : 16;
      i2 = i51 >>> 0 > i10 >>> 0 ? i51 : i10;
      do {
       if (i60 >>> 0 < i2 >>> 0) {
        if (i2 >>> 0 > 1073741823 >>> 0) {
         i24 = 119;
         break L157;
        }
        i51 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
        i6 = i51 >>> 2;
        i7 = __ZN3WTF10fastMallocEj(i51) | 0;
        i51 = i7;
        i36 = i11;
        _memcpy(i7 | 0, i36 | 0, i60 << 2) | 0;
        if ((i11 | 0) == 0) {
         i62 = i51;
         i63 = i6;
         break;
        }
        i7 = (i51 | 0) == (i11 | 0);
        __ZN3WTF8fastFreeEPv(i36);
        i62 = i7 ? 0 : i51;
        i63 = i7 ? 0 : i6;
       } else {
        i62 = i11;
        i63 = i60;
       }
      } while (0);
      i64 = i62 + (i4 << 2) | 0;
      i65 = i62;
      i66 = i63;
     }
    } while (0);
    do {
     if ((i24 | 0) == 112) {
      i24 = 0;
      i2 = i10 + (i60 >>> 2) | 0;
      i6 = i2 >>> 0 > 16 >>> 0 ? i2 : 16;
      i2 = i6 >>> 0 > i10 >>> 0 ? i6 : i10;
      if (i60 >>> 0 >= i2 >>> 0) {
       i64 = i12;
       i65 = i11;
       i66 = i60;
       break;
      }
      if (i2 >>> 0 > 1073741823 >>> 0) {
       i24 = 114;
       break L157;
      }
      i6 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
      i2 = i6 >>> 2;
      i7 = __ZN3WTF10fastMallocEj(i6) | 0;
      i6 = i7;
      i51 = i11;
      _memcpy(i7 | 0, i51 | 0, i60 << 2) | 0;
      if ((i11 | 0) == 0) {
       i64 = i12;
       i65 = i6;
       i66 = i2;
       break;
      }
      i7 = (i6 | 0) == (i11 | 0);
      __ZN3WTF8fastFreeEPv(i51);
      i64 = i12;
      i65 = i7 ? 0 : i6;
      i66 = i7 ? 0 : i2;
     }
    } while (0);
    HEAP32[i65 + (i60 << 2) >> 2] = HEAP32[i64 >> 2];
    i67 = i65;
    i68 = i66;
    i69 = i10;
   } else {
    HEAP32[i11 + (i59 << 2) >> 2] = i9;
    i67 = i11;
    i68 = i60;
    i69 = i59 + 1 | 0;
   }
   i2 = i61;
   __ZN7WebCore26AnimationControllerPrivate22animationWillBeRemovedEPNS_13AnimationBaseE(HEAP32[i57 >> 2] | 0, i2);
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i61 >> 2] | 0) + 60 >> 2] & 3](i2);
   HEAP32[i61 + 56 >> 2] = 0;
   HEAP32[i61 + 64 >> 2] = 0;
   i70 = i67;
   i71 = i68;
   i72 = i69;
  } else {
   i70 = i11;
   i71 = i60;
   i72 = i59;
  }
  i2 = i8 + 8 | 0;
  if ((i2 | 0) == (i58 | 0)) {
   i24 = 105;
   break;
  } else {
   i73 = i2;
  }
  while (1) {
   i2 = HEAP32[i73 >> 2] | 0;
   if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
    break;
   }
   i2 = i73 + 8 | 0;
   if ((i2 | 0) == (i58 | 0)) {
    i24 = 105;
    break L157;
   } else {
    i73 = i2;
   }
  }
  if ((i73 | 0) == (i58 | 0)) {
   i24 = 105;
   break;
  } else {
   i59 = i72;
   i60 = i71;
   i11 = i70;
   i8 = i73;
  }
 }
 if ((i24 | 0) == 105) {
  if ((i72 | 0) != 0) {
   i73 = i13 | 0;
   i13 = i1 + 44 | 0;
   i8 = i1 + 36 | 0;
   i1 = 0;
   while (1) {
    i11 = HEAP32[i16 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i71 = HEAP32[i18 >> 2] | 0;
     i74 = i71 << 3 | 0;
     i75 = 0;
     i76 = i71;
    } else {
     i71 = HEAP32[i8 >> 2] | 0;
     i60 = HEAP32[i70 + (i1 << 2) >> 2] | 0;
     i59 = i60;
     i58 = i59 + ~(i59 << 15) | 0;
     i59 = (i58 >>> 10 ^ i58) * 9 & -1;
     i58 = i59 >>> 6 ^ i59;
     i59 = i58 + ~(i58 << 11) | 0;
     i58 = i59 >>> 16 ^ i59;
     i59 = i58 & i71;
     i69 = i11 + (i59 << 3) | 0;
     i68 = HEAP32[i69 >> 2] | 0;
     L193 : do {
      if ((i68 | 0) == (i60 | 0)) {
       i77 = i69;
      } else {
       i67 = (i58 >>> 23) + ~i58 | 0;
       i57 = i67 << 12 ^ i67;
       i67 = i57 >>> 7 ^ i57;
       i57 = i67 << 2 ^ i67;
       i67 = i57 >>> 20 ^ i57 | 1;
       i57 = 0;
       i66 = i59;
       i65 = i68;
       while (1) {
        if ((i65 | 0) == 0) {
         i77 = 0;
         break L193;
        }
        i64 = (i57 | 0) == 0 ? i67 : i57;
        i12 = i64 + i66 & i71;
        i63 = i11 + (i12 << 3) | 0;
        i62 = HEAP32[i63 >> 2] | 0;
        if ((i62 | 0) == (i60 | 0)) {
         i77 = i63;
         break;
        } else {
         i57 = i64;
         i66 = i12;
         i65 = i62;
        }
       }
      }
     } while (0);
     i60 = HEAP32[i18 >> 2] | 0;
     i74 = (i77 | 0) == 0 ? i11 + (i60 << 3) | 0 : i77;
     i75 = i11;
     i76 = i60;
    }
    do {
     if ((i74 | 0) != (i75 + (i76 << 3) | 0)) {
      i60 = HEAP32[i74 + 4 >> 2] | 0;
      do {
       if ((i60 | 0) != 0) {
        i71 = i60 + 4 | 0;
        i68 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
        if ((i68 | 0) == 0) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i60 >> 2] | 0) + 4 >> 2] & 3](i60);
         break;
        } else {
         HEAP32[i71 >> 2] = i68;
         break;
        }
       }
      } while (0);
      HEAP32[i74 >> 2] = -1;
      HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
      i60 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      HEAP32[i14 >> 2] = i60;
      i68 = HEAP32[i18 >> 2] | 0;
      if (!((i60 * 6 & -1 | 0) < (i68 | 0) & (i68 | 0) > 8)) {
       break;
      }
      __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore17KeyframeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i73, (i68 | 0) / 2 & -1, 0) | 0;
     }
    } while (0);
    i1 = i1 + 1 | 0;
    if (i1 >>> 0 >= i72 >>> 0) {
     break;
    }
   }
  }
  if ((i70 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  __ZN3WTF8fastFreeEPv(i70);
  STACKTOP = i5;
  return;
 } else if ((i24 | 0) == 114) {
  _WTFCrash();
 } else if ((i24 | 0) == 119) {
  _WTFCrash();
 }
}
function __ZN7WebCore18CompositeAnimation17updateTransitionsEPNS_13RenderElementEPNS_11RenderStyleES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i13 = i4 + 20 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = HEAP32[i14 + 112 >> 2] | 0;
 i16 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i15 | 0) == 0 & (i16 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = i1 + 8 | 0;
 i18 = i17 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = i1 + 12 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 i22 = i19 + (i21 << 3) | 0;
 i23 = i1 + 20 | 0;
 L7 : do {
  if ((i16 | 0) == 0) {
   i24 = i14;
   i25 = i15;
  } else {
   L9 : do {
    if ((i21 | 0) == 0) {
     i26 = i19;
    } else {
     i27 = i19;
     while (1) {
      i28 = HEAP32[i27 >> 2] | 0;
      if (!((i28 | 0) == (-1 | 0) | (i28 | 0) == 0)) {
       i26 = i27;
       break L9;
      }
      i28 = i27 + 8 | 0;
      if ((i28 | 0) == (i22 | 0)) {
       i24 = i14;
       i25 = i15;
       break L7;
      } else {
       i27 = i28;
      }
     }
    }
   } while (0);
   if ((i26 | 0) == (i22 | 0)) {
    i24 = i14;
    i25 = i15;
    break;
   } else {
    i29 = i26;
   }
   L14 : while (1) {
    HEAP8[(HEAP32[i29 + 4 >> 2] | 0) + 77 | 0] = 0;
    i27 = i29 + 8 | 0;
    if ((i27 | 0) == (i22 | 0)) {
     break;
    } else {
     i30 = i27;
    }
    while (1) {
     i27 = HEAP32[i30 >> 2] | 0;
     if (!((i27 | 0) == (-1 | 0) | (i27 | 0) == 0)) {
      break;
     }
     i27 = i30 + 8 | 0;
     if ((i27 | 0) == (i22 | 0)) {
      break L14;
     } else {
      i30 = i27;
     }
    }
    if ((i30 | 0) == (i22 | 0)) {
     break;
    } else {
     i29 = i30;
    }
   }
   i27 = HEAP32[i13 >> 2] | 0;
   i24 = i27;
   i25 = HEAP32[i27 + 112 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i25 | 0) == 0) {
   i31 = 0;
  } else {
   if ((HEAP32[i25 + 8 >> 2] | 0) == 0) {
    i31 = 0;
    break;
   }
   i30 = i1 + 60 | 0;
   i29 = i7 | 0;
   i22 = i1 + 16 | 0;
   i26 = i11 | 0;
   i15 = i17 | 0;
   i14 = i12 + 8 | 0;
   i19 = i12 | 0;
   i21 = i8 | 0;
   i16 = i1 + 4 | 0;
   i27 = 0;
   i28 = 0;
   i32 = i25;
   i33 = i24;
   while (1) {
    i34 = HEAP32[(HEAP32[i32 >> 2] | 0) + (i28 << 2) >> 2] | 0;
    do {
     if ((HEAP8[i30] & 1) == 0) {
      if (+HEAPF64[i34 + 32 >> 3] != +0) {
       i35 = 1;
       break;
      }
      i35 = +HEAPF64[i34 + 24 >> 3] > +0;
     } else {
      i35 = 0;
     }
    } while (0);
    i36 = HEAP32[i34 + 12 >> 2] | 0;
    if ((i36 | 0) == 1) {
     i37 = i27;
     i38 = i33;
    } else {
     i39 = HEAP32[i34 + 8 >> 2] | 0;
     i40 = (i36 | 0) == 0;
     L33 : do {
      if ((__ZN7WebCore20CSSPropertyAnimation16getNumPropertiesEv() | 0) > 0) {
       i36 = i35 ^ 1;
       i41 = i27;
       i42 = 0;
       i43 = i39;
       while (1) {
        if (i40) {
         i44 = __ZN7WebCore20CSSPropertyAnimation18getPropertyAtIndexEiRb(i42, i6) | 0;
         if ((HEAP8[i6] & 1) == 0) {
          i45 = i44;
          i46 = 24;
         } else {
          i47 = i44;
          i48 = i41;
         }
        } else {
         i45 = i43;
         i46 = 24;
        }
        if ((i46 | 0) == 24) {
         i46 = 0;
         __ZNK7WebCore18CompositeAnimation23getAnimationForPropertyENS_13CSSPropertyIDE(i7, i1, i45);
         i44 = HEAP32[i29 >> 2] | 0;
         HEAP32[i29 >> 2] = 0;
         i49 = (i44 | 0) == 0;
         if (i49) {
          i50 = i3;
         } else {
          i50 = HEAP32[i44 + 112 >> 2] | 0;
         }
         i51 = HEAP32[i22 >> 2] | 0;
         i52 = HEAP32[i18 >> 2] | 0;
         i53 = i45 + ~(i45 << 15) | 0;
         i54 = (i53 >>> 10 ^ i53) * 9 & -1;
         i53 = i54 >>> 6 ^ i54;
         i54 = i53 + ~(i53 << 11) | 0;
         i53 = i54 >>> 16 ^ i54;
         L44 : do {
          if ((i52 | 0) == 0) {
           i46 = 42;
          } else {
           i54 = i51 & i53;
           i55 = i52 + (i54 << 3) | 0;
           i56 = HEAP32[i55 >> 2] | 0;
           if ((i56 | 0) == (i45 | 0)) {
            i57 = i55;
           } else {
            i55 = (i53 >>> 23) + ~i53 | 0;
            i58 = i55 << 12 ^ i55;
            i55 = i58 >>> 7 ^ i58;
            i58 = i55 << 2 ^ i55;
            i55 = i58 >>> 20 ^ i58 | 1;
            i58 = 0;
            i59 = i54;
            i54 = i56;
            while (1) {
             if ((i54 | 0) == 0) {
              i46 = 42;
              break L44;
             }
             i56 = (i58 | 0) == 0 ? i55 : i58;
             i60 = i56 + i59 & i51;
             i61 = i52 + (i60 << 3) | 0;
             i62 = HEAP32[i61 >> 2] | 0;
             if ((i62 | 0) == (i45 | 0)) {
              i57 = i61;
              break;
             } else {
              i58 = i56;
              i59 = i60;
              i54 = i62;
             }
            }
           }
           if ((i57 | 0) == 0) {
            i46 = 42;
            break;
           }
           i54 = HEAP32[i57 + 4 >> 2] | 0;
           if ((i54 | 0) == 0) {
            i46 = 42;
            break;
           }
           i59 = i54;
           if ((HEAP32[i54 + 8 >> 2] | 0) != 11) {
            HEAP8[i54 + 77 | 0] = 1;
           }
           if (__ZN7WebCore17ImplicitAnimation21isTargetPropertyEqualENS_13CSSPropertyIDEPKNS_11RenderStyleE(i54, i45, i4) | 0) {
            i63 = i41;
            break;
           }
           do {
            if (__ZN7WebCore20CSSPropertyAnimation32animationOfPropertyIsAcceleratedENS_13CSSPropertyIDE(i45) | 0) {
             if ((HEAP8[i54 + 12 | 0] & 1) == 0) {
              i64 = i41;
              break;
             }
             if ((i41 | 0) == 0) {
              __ZN7WebCore11RenderStyle5cloneEPKS0_(i8, i3);
              i65 = HEAP32[i21 >> 2] | 0;
             } else {
              i65 = i41;
             }
             __ZN7WebCore17ImplicitAnimation25blendPropertyValueInStyleENS_13CSSPropertyIDEPNS_11RenderStyleE(i54, i45, i65);
             i64 = i65;
            } else {
             i64 = i41;
            }
           } while (0);
           __ZN7WebCore26AnimationControllerPrivate22animationWillBeRemovedEPNS_13AnimationBaseE(HEAP32[i16 >> 2] | 0, i59);
           HEAP32[i9 >> 2] = i45;
           __ZN3WTF7HashMapIiNS_6RefPtrIN7WebCore17ImplicitAnimationEEENS_7IntHashIjEENS_10HashTraitsIiEENS7_IS4_EEE6removeERKi(i17, i9) | 0;
           if (i35) {
            i66 = i64;
            i46 = 44;
           } else {
            i63 = i64;
           }
          }
         } while (0);
         do {
          if ((i46 | 0) == 42) {
           i46 = 0;
           if (!i35) {
            i63 = i41;
            break;
           }
           if (__ZN7WebCore20CSSPropertyAnimation15propertiesEqualENS_13CSSPropertyIDEPKNS_11RenderStyleES4_(i45, i50, i4) | 0 | i36) {
            i63 = i41;
           } else {
            i66 = i41;
            i46 = 44;
           }
          }
         } while (0);
         do {
          if ((i46 | 0) == 44) {
           i46 = 0;
           i52 = __ZN3WTF10fastMallocEj(88) | 0;
           __ZN7WebCore17ImplicitAnimationC1ERKNS_9AnimationENS_13CSSPropertyIDEPNS_13RenderElementEPNS_18CompositeAnimationEPNS_11RenderStyleE(i52, i34, i45, i2, i1, (i66 | 0) == 0 ? i50 : i66);
           HEAP32[i10 >> 2] = i45;
           HEAP32[i26 >> 2] = i52;
           __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore17ImplicitAnimationEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEiNS_10PassRefPtrIS4_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS6_S8_SA_SG_SD_EEEEOT0_OT1_(i12, i15, i10, i11);
           if ((HEAP8[i14] & 1) == 0) {
            i52 = HEAP32[i19 >> 2] | 0;
            i51 = HEAP32[i26 >> 2] | 0;
            HEAP32[i26 >> 2] = 0;
            i53 = i52 + 4 | 0;
            i52 = HEAP32[i53 >> 2] | 0;
            HEAP32[i53 >> 2] = i51;
            if ((i52 | 0) == 0) {
             i63 = i66;
             break;
            }
            i51 = i52 + 4 | 0;
            i53 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
            if ((i53 | 0) == 0) {
             FUNCTION_TABLE_vi[HEAP32[(HEAP32[i52 >> 2] | 0) + 4 >> 2] & 3](i52);
             i63 = i66;
             break;
            } else {
             HEAP32[i51 >> 2] = i53;
             i63 = i66;
             break;
            }
           } else {
            i53 = HEAP32[i26 >> 2] | 0;
            if ((i53 | 0) == 0) {
             i63 = i66;
             break;
            }
            i51 = i53 + 4 | 0;
            i52 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
            if ((i52 | 0) == 0) {
             FUNCTION_TABLE_vi[HEAP32[(HEAP32[i53 >> 2] | 0) + 4 >> 2] & 3](i53);
             i63 = i66;
             break;
            } else {
             HEAP32[i51 >> 2] = i52;
             i63 = i66;
             break;
            }
           }
          }
         } while (0);
         do {
          if (!i49) {
           i52 = i44 + 4 | 0;
           i51 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
           if ((i51 | 0) == 0) {
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 4 >> 2] & 3](i44);
            break;
           } else {
            HEAP32[i52 >> 2] = i51;
            break;
           }
          }
         } while (0);
         if (i40) {
          i47 = i45;
          i48 = i63;
         } else {
          i67 = i63;
          break L33;
         }
        }
        i44 = i42 + 1 | 0;
        if ((i44 | 0) < (__ZN7WebCore20CSSPropertyAnimation16getNumPropertiesEv() | 0)) {
         i41 = i48;
         i42 = i44;
         i43 = i47;
        } else {
         i67 = i48;
         break;
        }
       }
      } else {
       i67 = i27;
      }
     } while (0);
     i37 = i67;
     i38 = HEAP32[i13 >> 2] | 0;
    }
    i40 = i28 + 1 | 0;
    i34 = HEAP32[i38 + 112 >> 2] | 0;
    if (i40 >>> 0 < (HEAP32[i34 + 8 >> 2] | 0) >>> 0) {
     i27 = i37;
     i28 = i40;
     i32 = i34;
     i33 = i38;
    } else {
     i31 = i37;
     break;
    }
   }
  }
 } while (0);
 i37 = HEAP32[i18 >> 2] | 0;
 i18 = HEAP32[i20 >> 2] | 0;
 i20 = i37 + (i18 << 3) | 0;
 L92 : do {
  if ((HEAP32[i23 >> 2] | 0) != 0) {
   L94 : do {
    if ((i18 | 0) == 0) {
     i68 = i37;
    } else {
     i38 = i37;
     while (1) {
      i13 = HEAP32[i38 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i68 = i38;
       break L94;
      }
      i38 = i38 + 8 | 0;
      if ((i38 | 0) == (i20 | 0)) {
       break L92;
      }
     }
    }
   } while (0);
   if ((i68 | 0) == (i20 | 0)) {
    break;
   }
   i38 = i1 + 4 | 0;
   i13 = 0;
   i67 = 0;
   i48 = 0;
   i47 = i68;
   L100 : while (1) {
    i63 = HEAP32[i47 + 4 >> 2] | 0;
    do {
     if ((HEAP8[i63 + 77 | 0] & 1) == 0) {
      __ZN7WebCore26AnimationControllerPrivate22animationWillBeRemovedEPNS_13AnimationBaseE(HEAP32[i38 >> 2] | 0, i63);
      i45 = HEAP32[i63 + 72 >> 2] | 0;
      if ((i13 | 0) != (i67 | 0)) {
       HEAP32[i48 + (i13 << 2) >> 2] = i45;
       i69 = i48;
       i70 = i67;
       i71 = i13 + 1 | 0;
       break;
      }
      i66 = i67 + 1 | 0;
      i11 = i66 + (i67 >>> 2) | 0;
      i10 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
      i11 = i10 >>> 0 > i66 >>> 0 ? i10 : i66;
      do {
       if (i67 >>> 0 < i11 >>> 0) {
        if (i11 >>> 0 > 1073741823 >>> 0) {
         i46 = 73;
         break L100;
        }
        i10 = __ZN3WTF18fastMallocGoodSizeEj(i11 << 2) | 0;
        i12 = i10 >>> 2;
        i50 = __ZN3WTF10fastMallocEj(i10) | 0;
        i10 = i50;
        i2 = i48;
        _memcpy(i50 | 0, i2 | 0, i67 << 2) | 0;
        if ((i48 | 0) == 0) {
         i72 = i10;
         i73 = i12;
         break;
        }
        i50 = (i10 | 0) == (i48 | 0);
        __ZN3WTF8fastFreeEPv(i2);
        i72 = i50 ? 0 : i10;
        i73 = i50 ? 0 : i12;
       } else {
        i72 = i48;
        i73 = i67;
       }
      } while (0);
      HEAP32[i72 + (i67 << 2) >> 2] = i45;
      i69 = i72;
      i70 = i73;
      i71 = i66;
     } else {
      i69 = i48;
      i70 = i67;
      i71 = i13;
     }
    } while (0);
    i63 = i47 + 8 | 0;
    if ((i63 | 0) == (i20 | 0)) {
     break;
    } else {
     i74 = i63;
    }
    while (1) {
     i63 = HEAP32[i74 >> 2] | 0;
     if (!((i63 | 0) == (-1 | 0) | (i63 | 0) == 0)) {
      break;
     }
     i63 = i74 + 8 | 0;
     if ((i63 | 0) == (i20 | 0)) {
      break L100;
     } else {
      i74 = i63;
     }
    }
    if ((i74 | 0) == (i20 | 0)) {
     break;
    } else {
     i13 = i71;
     i67 = i70;
     i48 = i69;
     i47 = i74;
    }
   }
   if ((i46 | 0) == 73) {
    _WTFCrash();
   }
   if ((i71 | 0) != 0) {
    i47 = 0;
    while (1) {
     __ZN3WTF7HashMapIiNS_6RefPtrIN7WebCore17ImplicitAnimationEEENS_7IntHashIjEENS_10HashTraitsIiEENS7_IS4_EEE6removeERKi(i17, i69 + (i47 << 2) | 0) | 0;
     i47 = i47 + 1 | 0;
     if (i47 >>> 0 >= i71 >>> 0) {
      break;
     }
    }
   }
   if ((i69 | 0) == 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i69);
  }
 } while (0);
 if ((i31 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i69 = i31 | 0;
 i71 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
 if ((i71 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i31);
  __ZN3WTF8fastFreeEPv(i31);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i69 >> 2] = i71;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore18CompositeAnimation19isAnimatingPropertyENS_13CSSPropertyIDEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 L1 : do {
  if ((HEAP32[i1 + 40 >> 2] | 0) != 0) {
   i5 = HEAP32[i1 + 28 >> 2] | 0;
   i6 = HEAP32[i1 + 32 >> 2] | 0;
   i7 = i5 + (i6 << 3) | 0;
   L3 : do {
    if ((i6 | 0) == 0) {
     i8 = i5;
    } else {
     i9 = i5;
     while (1) {
      i10 = HEAP32[i9 >> 2] | 0;
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i8 = i9;
       break L3;
      }
      i9 = i9 + 8 | 0;
      if ((i9 | 0) == (i7 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i11 = i8;
   }
   L8 : while (1) {
    i5 = HEAP32[i11 + 4 >> 2] | 0;
    do {
     if ((i5 | 0) != 0) {
      i6 = i5;
      if (i3) {
       if ((HEAP8[i5 + 12 | 0] & 1) == 0) {
        break;
       }
      }
      i9 = HEAP32[i5 + 8 >> 2] | 0;
      if (i4) {
       if ((i9 | 0) == 0 | (i9 | 0) == 1 | (i9 | 0) == 6 | (i9 | 0) == 11) {
        break;
       }
       if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 28 >> 2] & 1](i6, i2) | 0) {
        i12 = 1;
        i13 = 59;
        break L8;
       } else {
        break;
       }
      } else {
       if ((i9 | 0) == 11) {
        break;
       }
       if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 28 >> 2] & 1](i6, i2) | 0) {
        i12 = 1;
        i13 = 66;
        break L8;
       } else {
        break;
       }
      }
     }
    } while (0);
    i5 = i11 + 8 | 0;
    if ((i5 | 0) == (i7 | 0)) {
     break L1;
    } else {
     i14 = i5;
    }
    while (1) {
     i5 = HEAP32[i14 >> 2] | 0;
     if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
      break;
     }
     i5 = i14 + 8 | 0;
     if ((i5 | 0) == (i7 | 0)) {
      break L1;
     } else {
      i14 = i5;
     }
    }
    if ((i14 | 0) == (i7 | 0)) {
     break L1;
    } else {
     i11 = i14;
    }
   }
   if ((i13 | 0) == 59) {
    return i12 | 0;
   } else if ((i13 | 0) == 66) {
    return i12 | 0;
   }
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] | 0) == 0) {
  i12 = 0;
  return i12 | 0;
 }
 i14 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i14 + (i11 << 3) | 0;
 L32 : do {
  if ((i11 | 0) == 0) {
   i15 = i14;
  } else {
   i8 = i14;
   while (1) {
    i7 = HEAP32[i8 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i15 = i8;
     break L32;
    }
    i7 = i8 + 8 | 0;
    if ((i7 | 0) == (i1 | 0)) {
     i12 = 0;
     break;
    } else {
     i8 = i7;
    }
   }
   return i12 | 0;
  }
 } while (0);
 if ((i15 | 0) == (i1 | 0)) {
  i12 = 0;
  return i12 | 0;
 }
 if (i3) {
  i3 = i15;
  L42 : while (1) {
   i14 = HEAP32[i3 + 4 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i11 = i14;
     if ((HEAP8[i14 + 12 | 0] & 1) == 0) {
      break;
     }
     i8 = HEAP32[i14 + 8 >> 2] | 0;
     if (i4) {
      if ((i8 | 0) == 0 | (i8 | 0) == 1 | (i8 | 0) == 6 | (i8 | 0) == 11) {
       break;
      }
      if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 28 >> 2] & 1](i11, i2) | 0) {
       i12 = 1;
       i13 = 58;
       break L42;
      } else {
       break;
      }
     } else {
      if ((i8 | 0) == 11) {
       break;
      }
      if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 28 >> 2] & 1](i11, i2) | 0) {
       i12 = 1;
       i13 = 57;
       break L42;
      } else {
       break;
      }
     }
    }
   } while (0);
   i14 = i3 + 8 | 0;
   if ((i14 | 0) == (i1 | 0)) {
    i12 = 0;
    i13 = 60;
    break;
   } else {
    i16 = i14;
   }
   while (1) {
    i14 = HEAP32[i16 >> 2] | 0;
    if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
     break;
    }
    i14 = i16 + 8 | 0;
    if ((i14 | 0) == (i1 | 0)) {
     i12 = 0;
     i13 = 61;
     break L42;
    } else {
     i16 = i14;
    }
   }
   if ((i16 | 0) == (i1 | 0)) {
    i12 = 0;
    i13 = 54;
    break;
   } else {
    i3 = i16;
   }
  }
  if ((i13 | 0) == 54) {
   return i12 | 0;
  } else if ((i13 | 0) == 57) {
   return i12 | 0;
  } else if ((i13 | 0) == 58) {
   return i12 | 0;
  } else if ((i13 | 0) == 60) {
   return i12 | 0;
  } else if ((i13 | 0) == 61) {
   return i12 | 0;
  }
 }
 if (i4) {
  i4 = i15;
  L65 : while (1) {
   i16 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i3 = HEAP32[i16 + 8 >> 2] | 0;
     if ((i3 | 0) == 0 | (i3 | 0) == 1 | (i3 | 0) == 6 | (i3 | 0) == 11) {
      break;
     }
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i16 >> 2] | 0) + 28 >> 2] & 1](i16, i2) | 0) {
      i12 = 1;
      i13 = 55;
      break L65;
     }
    }
   } while (0);
   i16 = i4 + 8 | 0;
   if ((i16 | 0) == (i1 | 0)) {
    i12 = 0;
    i13 = 67;
    break;
   } else {
    i17 = i16;
   }
   while (1) {
    i16 = HEAP32[i17 >> 2] | 0;
    if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
     break;
    }
    i16 = i17 + 8 | 0;
    if ((i16 | 0) == (i1 | 0)) {
     i12 = 0;
     i13 = 68;
     break L65;
    } else {
     i17 = i16;
    }
   }
   if ((i17 | 0) == (i1 | 0)) {
    i12 = 0;
    i13 = 63;
    break;
   } else {
    i4 = i17;
   }
  }
  if ((i13 | 0) == 55) {
   return i12 | 0;
  } else if ((i13 | 0) == 63) {
   return i12 | 0;
  } else if ((i13 | 0) == 67) {
   return i12 | 0;
  } else if ((i13 | 0) == 68) {
   return i12 | 0;
  }
 } else {
  i17 = i15;
  L80 : while (1) {
   i15 = HEAP32[i17 + 4 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     if ((HEAP32[i15 + 8 >> 2] | 0) == 11) {
      break;
     }
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i15 >> 2] | 0) + 28 >> 2] & 1](i15, i2) | 0) {
      i12 = 1;
      i13 = 64;
      break L80;
     }
    }
   } while (0);
   i15 = i17 + 8 | 0;
   if ((i15 | 0) == (i1 | 0)) {
    i12 = 0;
    i13 = 51;
    break;
   } else {
    i18 = i15;
   }
   while (1) {
    i15 = HEAP32[i18 >> 2] | 0;
    if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
     break;
    }
    i15 = i18 + 8 | 0;
    if ((i15 | 0) == (i1 | 0)) {
     i12 = 0;
     i13 = 53;
     break L80;
    } else {
     i18 = i15;
    }
   }
   if ((i18 | 0) == (i1 | 0)) {
    i12 = 0;
    i13 = 52;
    break;
   } else {
    i17 = i18;
   }
  }
  if ((i13 | 0) == 51) {
   return i12 | 0;
  } else if ((i13 | 0) == 52) {
   return i12 | 0;
  } else if ((i13 | 0) == 53) {
   return i12 | 0;
  } else if ((i13 | 0) == 64) {
   return i12 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore18CompositeAnimation7animateERNS_13RenderElementEPNS_11RenderStyleERS3_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore18CompositeAnimation17updateTransitionsEPNS_13RenderElementEPNS_11RenderStyleES4_(i2, i3, i4, i5);
 __ZN7WebCore18CompositeAnimation24updateKeyframeAnimationsEPNS_13RenderElementEPNS_11RenderStyleES4_(i2, i3, i4, i5);
 L1 : do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i2 + 20 >> 2] | 0) == 0) {
    break;
   }
   i9 = HEAP32[i2 + 8 >> 2] | 0;
   i10 = HEAP32[i2 + 12 >> 2] | 0;
   i11 = i9 + (i10 << 3) | 0;
   L4 : do {
    if ((i10 | 0) == 0) {
     i12 = i9;
    } else {
     i13 = i9;
     while (1) {
      i14 = HEAP32[i13 >> 2] | 0;
      if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
       i12 = i13;
       break L4;
      }
      i13 = i13 + 8 | 0;
      if ((i13 | 0) == (i11 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i12 | 0) == (i11 | 0)) {
    break;
   } else {
    i15 = i12;
   }
   while (1) {
    i9 = HEAP32[i15 + 4 >> 2] | 0;
    if ((i9 | 0) != 0) {
     FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 1](i9, i2, i3, i4, i5, i7);
    }
    i9 = i15 + 8 | 0;
    if ((i9 | 0) == (i11 | 0)) {
     break L1;
    } else {
     i16 = i9;
    }
    while (1) {
     i9 = HEAP32[i16 >> 2] | 0;
     if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
      break;
     }
     i9 = i16 + 8 | 0;
     if ((i9 | 0) == (i11 | 0)) {
      break L1;
     } else {
      i16 = i9;
     }
    }
    if ((i16 | 0) == (i11 | 0)) {
     break;
    } else {
     i15 = i16;
    }
   }
  }
 } while (0);
 i16 = i2 + 48 | 0;
 i15 = i2 + 56 | 0;
 if ((HEAP32[i15 >> 2] | 0) != 0) {
  i12 = i2 + 36 | 0;
  i11 = i2 + 28 | 0;
  i9 = HEAP32[i16 >> 2] | 0;
  while (1) {
   i10 = HEAP32[i12 >> 2] | 0;
   i13 = HEAP32[i11 >> 2] | 0;
   i14 = HEAP32[i9 >> 2] | 0;
   i17 = i14;
   i18 = i17 + ~(i17 << 15) | 0;
   i17 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i17 >>> 6 ^ i17;
   i17 = i18 + ~(i18 << 11) | 0;
   i18 = i17 >>> 16 ^ i17;
   L23 : do {
    if ((i13 | 0) != 0) {
     i17 = i18 & i10;
     i19 = i13 + (i17 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i14 | 0)) {
      i21 = i19;
     } else {
      i19 = (i18 >>> 23) + ~i18 | 0;
      i22 = i19 << 12 ^ i19;
      i19 = i22 >>> 7 ^ i22;
      i22 = i19 << 2 ^ i19;
      i19 = i22 >>> 20 ^ i22 | 1;
      i22 = 0;
      i23 = i17;
      i17 = i20;
      while (1) {
       if ((i17 | 0) == 0) {
        break L23;
       }
       i20 = (i22 | 0) == 0 ? i19 : i22;
       i24 = i20 + i23 & i10;
       i25 = i13 + (i24 << 3) | 0;
       i26 = HEAP32[i25 >> 2] | 0;
       if ((i26 | 0) == (i14 | 0)) {
        i21 = i25;
        break;
       } else {
        i22 = i20;
        i23 = i24;
        i17 = i26;
       }
      }
     }
     if ((i21 | 0) == 0) {
      break;
     }
     i17 = HEAP32[i21 + 4 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i23 = i17 + 4 | 0;
     HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
     __ZN7WebCore17KeyframeAnimation7animateEPNS_18CompositeAnimationEPNS_13RenderElementEPKNS_11RenderStyleEPS5_RN3WTF6RefPtrIS5_EE(i17, i2, i3, i4, i5, i7);
     i22 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 3](i17);
      break;
     } else {
      HEAP32[i23 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i9 = i9 + 4 | 0;
   if ((i9 | 0) == ((HEAP32[i16 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0)) {
    break;
   }
  }
 }
 i15 = HEAP32[i8 >> 2] | 0;
 i16 = i1 | 0;
 if ((i15 | 0) == 0) {
  HEAP32[i16 >> 2] = i5;
  i1 = i5 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i16 >> 2] = i15;
  HEAP32[i8 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore17KeyframeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES2_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore17KeyframeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i4 = i14 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i13 + 4 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i10 | 0) != 0) {
   i14 = i10 + 4 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 3](i10);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i10 = i2 + 12 | 0;
 i4 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i4;
 i10 = i2 + 4 | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i21 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i21 | 0) ? i14 : i21;
  }
  i21 = __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore17KeyframeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
  i27 = i21;
  i28 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZNK7WebCore18CompositeAnimation16getAnimatedStyleEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i8 = i6 + (i7 << 3) | 0;
 L1 : do {
  if ((HEAP32[i2 + 20 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 8 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    i10 = HEAP32[i12 + 4 >> 2] | 0;
    if ((i10 | 0) != 0) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 3](i10, i4);
    }
    i10 = i12 + 8 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L1;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 8 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L1;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 i13 = i2 + 48 | 0;
 i12 = i2 + 56 | 0;
 if ((HEAP32[i12 >> 2] | 0) != 0) {
  i8 = i2 + 36 | 0;
  i9 = i2 + 28 | 0;
  i2 = HEAP32[i13 >> 2] | 0;
  while (1) {
   i6 = HEAP32[i8 >> 2] | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   i10 = HEAP32[i2 >> 2] | 0;
   i11 = i10;
   i14 = i11 + ~(i11 << 15) | 0;
   i11 = (i14 >>> 10 ^ i14) * 9 & -1;
   i14 = i11 >>> 6 ^ i11;
   i11 = i14 + ~(i14 << 11) | 0;
   i14 = i11 >>> 16 ^ i11;
   L22 : do {
    if ((i7 | 0) != 0) {
     i11 = i14 & i6;
     i15 = i7 + (i11 << 3) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == (i10 | 0)) {
      i17 = i15;
     } else {
      i15 = (i14 >>> 23) + ~i14 | 0;
      i18 = i15 << 12 ^ i15;
      i15 = i18 >>> 7 ^ i18;
      i18 = i15 << 2 ^ i15;
      i15 = i18 >>> 20 ^ i18 | 1;
      i18 = 0;
      i19 = i11;
      i11 = i16;
      while (1) {
       if ((i11 | 0) == 0) {
        break L22;
       }
       i16 = (i18 | 0) == 0 ? i15 : i18;
       i20 = i16 + i19 & i6;
       i21 = i7 + (i20 << 3) | 0;
       i22 = HEAP32[i21 >> 2] | 0;
       if ((i22 | 0) == (i10 | 0)) {
        i17 = i21;
        break;
       } else {
        i18 = i16;
        i19 = i20;
        i11 = i22;
       }
      }
     }
     if ((i17 | 0) == 0) {
      break;
     }
     i11 = HEAP32[i17 + 4 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     i19 = i11 + 4 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     __ZN7WebCore17KeyframeAnimation16getAnimatedStyleERN3WTF6RefPtrINS_11RenderStyleEEE(i11, i4);
     i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 3](i11);
      break;
     } else {
      HEAP32[i19 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == ((HEAP32[i13 >> 2] | 0) + (HEAP32[i12 >> 2] << 2) | 0)) {
    break;
   }
  }
 }
 i12 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i12;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i12 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i12 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore17ImplicitAnimationEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEiNS_10PassRefPtrIS4_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore17ImplicitAnimationEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = i4 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = i4;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 3](i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i14 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i14 << 1 | 0) < (i4 | 0)) {
  i27 = i13;
  i28 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i4 << 1;
   i29 = (i14 * 6 & -1 | 0) < (i22 | 0) ? i4 : i22;
  }
  i22 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore17ImplicitAnimationEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore17KeyframeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
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
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 3](i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
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
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 + 4 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore17ImplicitAnimationEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
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
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i11;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
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
   i15 = i30 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i13 = i16 + 4 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 3](i16);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i16 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i20;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i14;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 + 4 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 3](i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore18CompositeAnimation21pauseTransitionAtTimeENS_13CSSPropertyIDEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 if ((i2 - 1 | 0) >>> 0 > 413 >>> 0) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = ~(i2 << 15) + i2 | 0;
 i10 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i10 >>> 6 ^ i10;
 i10 = i9 + ~(i9 << 11) | 0;
 i9 = i10 >>> 16 ^ i10;
 L4 : do {
  if ((i8 | 0) != 0) {
   i10 = i7 & i9;
   i11 = i8 + (i10 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == (i2 | 0)) {
    i13 = i11;
   } else {
    i11 = (i9 >>> 23) + ~i9 | 0;
    i14 = i11 << 12 ^ i11;
    i11 = i14 >>> 7 ^ i14;
    i14 = i11 << 2 ^ i11;
    i11 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i10;
    i10 = i12;
    while (1) {
     if ((i10 | 0) == 0) {
      break L4;
     }
     i12 = (i14 | 0) == 0 ? i11 : i14;
     i16 = i12 + i15 & i7;
     i17 = i8 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i2 | 0)) {
      i13 = i17;
      break;
     } else {
      i14 = i12;
      i15 = i16;
      i10 = i18;
     }
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i13 + 4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i15 = i10;
   i14 = HEAP32[i10 + 8 >> 2] | 0;
   if ((i14 | 0) == 6 | (i14 | 0) == 0 | (i14 | 0) == 11) {
    i6 = 0;
    STACKTOP = i4;
    return i6 | 0;
   }
   if (d3 < +0) {
    i6 = 0;
    STACKTOP = i4;
    return i6 | 0;
   }
   if (+__ZNK7WebCore13AnimationBase8durationEv(i15) < d3) {
    i6 = 0;
    STACKTOP = i4;
    return i6 | 0;
   }
   __ZN7WebCore13AnimationBase12freezeAtTimeEd(i15, d3);
   i6 = 1;
   STACKTOP = i4;
   return i6 | 0;
  }
 } while (0);
 __ZN7WebCore20CSSPropertyAnimation37animatableShorthandsAffectingPropertyENS_13CSSPropertyIDE(i5, i2);
 i2 = i5 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 i8 = HEAP32[i5 + 4 >> 2] | 0;
 i7 = i13 + (i8 << 2) | 0;
 L25 : do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == 0) {
   i19 = 0;
   i20 = i13;
  } else {
   L27 : do {
    if ((i8 | 0) == 0) {
     i21 = i13;
    } else {
     i9 = i13;
     while (1) {
      i15 = HEAP32[i9 >> 2] | 0;
      if (!((i15 | 0) == 415 | (i15 | 0) == 0)) {
       i21 = i9;
       break L27;
      }
      i15 = i9 + 4 | 0;
      if ((i15 | 0) == (i7 | 0)) {
       i19 = 0;
       i20 = i13;
       break L25;
      } else {
       i9 = i15;
      }
     }
    }
   } while (0);
   if ((i21 | 0) == (i7 | 0)) {
    i19 = 0;
    i20 = i13;
    break;
   } else {
    i22 = i21;
    i23 = 0;
   }
   L32 : while (1) {
    i24 = __ZN7WebCore18CompositeAnimation21pauseTransitionAtTimeENS_13CSSPropertyIDEd(i1, HEAP32[i22 >> 2] | 0, d3) | 0 | i23;
    i9 = i22 + 4 | 0;
    if ((i9 | 0) == (i7 | 0)) {
     break;
    } else {
     i25 = i9;
    }
    while (1) {
     i9 = HEAP32[i25 >> 2] | 0;
     if (!((i9 | 0) == 415 | (i9 | 0) == 0)) {
      break;
     }
     i9 = i25 + 4 | 0;
     if ((i9 | 0) == (i7 | 0)) {
      break L32;
     } else {
      i25 = i9;
     }
    }
    if ((i25 | 0) == (i7 | 0)) {
     break;
    } else {
     i22 = i25;
     i23 = i24;
    }
   }
   i19 = i24;
   i20 = HEAP32[i2 >> 2] | 0;
  }
 } while (0);
 if ((i20 | 0) == 0) {
  i6 = i19;
  STACKTOP = i4;
  return i6 | 0;
 }
 __ZN3WTF8fastFreeEPv(i20);
 i6 = i19;
 STACKTOP = i4;
 return i6 | 0;
}
function __ZN7WebCore18CompositeAnimationD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN7WebCore18CompositeAnimation13clearRendererEv(i1);
 i2 = i1 + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i1 + 12 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i6 = 0;
   while (1) {
    do {
     if ((HEAP32[i4 + (i6 << 3) >> 2] | 0) != -1) {
      i7 = HEAP32[i4 + (i6 << 3) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i8 = i7 + 4 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i4);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 28 | 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i1 + 32 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i9 = 0;
   while (1) {
    do {
     if ((HEAP32[i5 + (i9 << 3) >> 2] | 0) != -1) {
      i8 = HEAP32[i5 + (i9 << 3) + 4 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      i7 = i8 + 4 | 0;
      i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) == 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
       break;
      } else {
       HEAP32[i7 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i9 = i9 + 1 | 0;
    if ((i9 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i5);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 56 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 48 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   HEAP32[i2 >> 2] = 0;
   HEAP32[i1 + 52 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i5);
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i1 + 32 >> 2] | 0;
   if ((i9 | 0) > 0) {
    i10 = 0;
    while (1) {
     do {
      if ((HEAP32[i6 + (i10 << 3) >> 2] | 0) != -1) {
       i7 = HEAP32[i6 + (i10 << 3) + 4 >> 2] | 0;
       if ((i7 | 0) == 0) {
        break;
       }
       i8 = i7 + 4 | 0;
       i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
       if ((i11 | 0) == 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
        break;
       } else {
        HEAP32[i8 >> 2] = i11;
        break;
       }
      }
     } while (0);
     i10 = i10 + 1 | 0;
     if ((i10 | 0) >= (i9 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i4 + (i1 << 3) >> 2] | 0) != -1) {
     i5 = HEAP32[i4 + (i1 << 3) + 4 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i2 = i5 + 4 | 0;
     i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
      break;
     } else {
      HEAP32[i2 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore18CompositeAnimationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN7WebCore18CompositeAnimation13clearRendererEv(i1);
 i2 = i1 + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i1 + 12 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i6 = 0;
   while (1) {
    do {
     if ((HEAP32[i4 + (i6 << 3) >> 2] | 0) != -1) {
      i7 = HEAP32[i4 + (i6 << 3) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i8 = i7 + 4 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i4);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 28 | 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i1 + 32 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i9 = 0;
   while (1) {
    do {
     if ((HEAP32[i5 + (i9 << 3) >> 2] | 0) != -1) {
      i8 = HEAP32[i5 + (i9 << 3) + 4 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      i7 = i8 + 4 | 0;
      i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) == 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
       break;
      } else {
       HEAP32[i7 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i9 = i9 + 1 | 0;
    if ((i9 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i5);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 56 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 48 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   HEAP32[i2 >> 2] = 0;
   HEAP32[i1 + 52 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i5);
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i1 + 32 >> 2] | 0;
   if ((i9 | 0) > 0) {
    i10 = 0;
    while (1) {
     do {
      if ((HEAP32[i6 + (i10 << 3) >> 2] | 0) != -1) {
       i7 = HEAP32[i6 + (i10 << 3) + 4 >> 2] | 0;
       if ((i7 | 0) == 0) {
        break;
       }
       i8 = i7 + 4 | 0;
       i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
       if ((i11 | 0) == 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
        break;
       } else {
        HEAP32[i8 >> 2] = i11;
        break;
       }
      }
     } while (0);
     i10 = i10 + 1 | 0;
     if ((i10 | 0) >= (i9 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i4 + (i1 << 3) >> 2] | 0) != -1) {
     i5 = HEAP32[i4 + (i1 << 3) + 4 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i2 = i5 + 4 | 0;
     i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
      break;
     } else {
      HEAP32[i2 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZNK7WebCore18CompositeAnimation17timeToNextServiceEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, i19 = 0, i20 = 0;
 L1 : do {
  if ((HEAP32[i1 + 20 >> 2] | 0) == 0) {
   d2 = +-1;
  } else {
   i3 = HEAP32[i1 + 8 >> 2] | 0;
   i4 = HEAP32[i1 + 12 >> 2] | 0;
   i5 = i3 + (i4 << 3) | 0;
   L3 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L3;
      }
      i8 = i7 + 8 | 0;
      if ((i8 | 0) == (i5 | 0)) {
       d2 = +-1;
       break L1;
      } else {
       i7 = i8;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    d2 = +-1;
    break;
   } else {
    i9 = i6;
    d10 = +-1;
   }
   while (1) {
    i3 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i3 | 0) == 0) {
     d11 = +-1;
    } else {
     d11 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 1](i3);
    }
    d12 = d11 < d10 | d10 == +-1 ? d11 : d10;
    if (d12 == +0) {
     d13 = +0;
     break;
    }
    i3 = i9 + 8 | 0;
    if ((i3 | 0) == (i5 | 0)) {
     d2 = d12;
     break L1;
    } else {
     i14 = i3;
    }
    while (1) {
     i3 = HEAP32[i14 >> 2] | 0;
     if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
      break;
     }
     i3 = i14 + 8 | 0;
     if ((i3 | 0) == (i5 | 0)) {
      d2 = d12;
      break L1;
     } else {
      i14 = i3;
     }
    }
    if ((i14 | 0) == (i5 | 0)) {
     d2 = d12;
     break L1;
    } else {
     i9 = i14;
     d10 = d12;
    }
   }
   return +d13;
  }
 } while (0);
 if ((HEAP32[i1 + 40 >> 2] | 0) == 0) {
  d13 = d2;
  return +d13;
 }
 i14 = HEAP32[i1 + 28 >> 2] | 0;
 i9 = HEAP32[i1 + 32 >> 2] | 0;
 i1 = i14 + (i9 << 3) | 0;
 L23 : do {
  if ((i9 | 0) == 0) {
   i15 = i14;
  } else {
   i6 = i14;
   while (1) {
    i5 = HEAP32[i6 >> 2] | 0;
    if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
     i15 = i6;
     break L23;
    }
    i5 = i6 + 8 | 0;
    if ((i5 | 0) == (i1 | 0)) {
     d13 = d2;
     break;
    } else {
     i6 = i5;
    }
   }
   return +d13;
  }
 } while (0);
 if ((i15 | 0) == (i1 | 0)) {
  d13 = d2;
  return +d13;
 } else {
  i16 = i15;
  d17 = d2;
 }
 L31 : while (1) {
  i15 = HEAP32[i16 + 4 >> 2] | 0;
  if ((i15 | 0) == 0) {
   d18 = +-1;
  } else {
   d18 = +__ZN7WebCore17KeyframeAnimation17timeToNextServiceEv(i15);
  }
  d2 = d18 < d17 | d17 == +-1 ? d18 : d17;
  if (d2 == +0) {
   d13 = +0;
   i19 = 30;
   break;
  }
  i15 = i16 + 8 | 0;
  if ((i15 | 0) == (i1 | 0)) {
   d13 = d2;
   i19 = 31;
   break;
  } else {
   i20 = i15;
  }
  while (1) {
   i15 = HEAP32[i20 >> 2] | 0;
   if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
    break;
   }
   i15 = i20 + 8 | 0;
   if ((i15 | 0) == (i1 | 0)) {
    d13 = d2;
    i19 = 33;
    break L31;
   } else {
    i20 = i15;
   }
  }
  if ((i20 | 0) == (i1 | 0)) {
   d13 = d2;
   i19 = 32;
   break;
  } else {
   i16 = i20;
   d17 = d2;
  }
 }
 if ((i19 | 0) == 30) {
  return +d13;
 } else if ((i19 | 0) == 31) {
  return +d13;
 } else if ((i19 | 0) == 32) {
  return +d13;
 } else if ((i19 | 0) == 33) {
  return +d13;
 }
 return +0;
}
function __ZNK7WebCore18CompositeAnimation24numberOfActiveAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 L1 : do {
  if ((HEAP32[i1 + 40 >> 2] | 0) == 0) {
   i2 = 0;
  } else {
   i3 = HEAP32[i1 + 28 >> 2] | 0;
   i4 = HEAP32[i1 + 32 >> 2] | 0;
   i5 = i3 + (i4 << 3) | 0;
   L3 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L3;
      }
      i8 = i7 + 8 | 0;
      if ((i8 | 0) == (i5 | 0)) {
       i2 = 0;
       break L1;
      } else {
       i7 = i8;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    i2 = 0;
    break;
   } else {
    i9 = i6;
    i10 = 0;
   }
   while (1) {
    i3 = HEAP32[(HEAP32[i9 + 4 >> 2] | 0) + 8 >> 2] | 0;
    if ((i3 | 0) == 6 | (i3 | 0) == 0 | (i3 | 0) == 11) {
     i11 = 0;
    } else {
     i11 = 1;
    }
    i3 = i11 + i10 | 0;
    i4 = i9 + 8 | 0;
    if ((i4 | 0) == (i5 | 0)) {
     i2 = i3;
     break L1;
    } else {
     i12 = i4;
    }
    while (1) {
     i4 = HEAP32[i12 >> 2] | 0;
     if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
      break;
     }
     i4 = i12 + 8 | 0;
     if ((i4 | 0) == (i5 | 0)) {
      i2 = i3;
      break L1;
     } else {
      i12 = i4;
     }
    }
    if ((i12 | 0) == (i5 | 0)) {
     i2 = i3;
     break;
    } else {
     i9 = i12;
     i10 = i3;
    }
   }
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] | 0) == 0) {
  i13 = i2;
  return i13 | 0;
 }
 i10 = HEAP32[i1 + 8 >> 2] | 0;
 i12 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i10 + (i12 << 3) | 0;
 L21 : do {
  if ((i12 | 0) == 0) {
   i14 = i10;
  } else {
   i9 = i10;
   while (1) {
    i11 = HEAP32[i9 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i14 = i9;
     break L21;
    }
    i11 = i9 + 8 | 0;
    if ((i11 | 0) == (i1 | 0)) {
     i13 = i2;
     break;
    } else {
     i9 = i11;
    }
   }
   return i13 | 0;
  }
 } while (0);
 if ((i14 | 0) == (i1 | 0)) {
  i13 = i2;
  return i13 | 0;
 } else {
  i15 = i14;
  i16 = i2;
 }
 L29 : while (1) {
  i2 = HEAP32[(HEAP32[i15 + 4 >> 2] | 0) + 8 >> 2] | 0;
  if ((i2 | 0) == 6 | (i2 | 0) == 0 | (i2 | 0) == 11) {
   i17 = 0;
  } else {
   i17 = 1;
  }
  i2 = i17 + i16 | 0;
  i14 = i15 + 8 | 0;
  if ((i14 | 0) == (i1 | 0)) {
   i13 = i2;
   i18 = 29;
   break;
  } else {
   i19 = i14;
  }
  while (1) {
   i14 = HEAP32[i19 >> 2] | 0;
   if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
    break;
   }
   i14 = i19 + 8 | 0;
   if ((i14 | 0) == (i1 | 0)) {
    i13 = i2;
    i18 = 26;
    break L29;
   } else {
    i19 = i14;
   }
  }
  if ((i19 | 0) == (i1 | 0)) {
   i13 = i2;
   i18 = 28;
   break;
  } else {
   i15 = i19;
   i16 = i2;
  }
 }
 if ((i18 | 0) == 26) {
  return i13 | 0;
 } else if ((i18 | 0) == 28) {
  return i13 | 0;
 } else if ((i18 | 0) == 29) {
  return i13 | 0;
 }
 return 0;
}
function __ZN7WebCore18CompositeAnimation16resumeAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 60 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 L4 : do {
  if ((HEAP32[i1 + 40 >> 2] | 0) != 0) {
   i2 = HEAP32[i1 + 28 >> 2] | 0;
   i3 = HEAP32[i1 + 32 >> 2] | 0;
   i4 = i2 + (i3 << 3) | 0;
   L6 : do {
    if ((i3 | 0) == 0) {
     i5 = i2;
    } else {
     i6 = i2;
     while (1) {
      i7 = HEAP32[i6 >> 2] | 0;
      if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
       i5 = i6;
       break L6;
      }
      i6 = i6 + 8 | 0;
      if ((i6 | 0) == (i4 | 0)) {
       break L4;
      }
     }
    }
   } while (0);
   if ((i5 | 0) == (i4 | 0)) {
    break;
   } else {
    i8 = i5;
   }
   while (1) {
    i2 = HEAP32[i8 + 4 >> 2] | 0;
    do {
     if ((i2 | 0) != 0) {
      i3 = i2;
      if (!(__ZNK7WebCore13AnimationBase16playStatePlayingEv(i3) | 0)) {
       break;
      }
      __ZN7WebCore13AnimationBase15updatePlayStateENS_14EAnimPlayStateE(i3, 0);
     }
    } while (0);
    i2 = i8 + 8 | 0;
    if ((i2 | 0) == (i4 | 0)) {
     break L4;
    } else {
     i9 = i2;
    }
    while (1) {
     i2 = HEAP32[i9 >> 2] | 0;
     if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
      break;
     }
     i2 = i9 + 8 | 0;
     if ((i2 | 0) == (i4 | 0)) {
      break L4;
     } else {
      i9 = i2;
     }
    }
    if ((i9 | 0) == (i4 | 0)) {
     break;
    } else {
     i8 = i9;
    }
   }
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] | 0) == 0) {
  return;
 }
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 i8 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i9 + (i8 << 3) | 0;
 L25 : do {
  if ((i8 | 0) == 0) {
   i10 = i9;
  } else {
   i5 = i9;
   while (1) {
    i4 = HEAP32[i5 >> 2] | 0;
    if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
     i10 = i5;
     break L25;
    }
    i5 = i5 + 8 | 0;
    if ((i5 | 0) == (i1 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i10 | 0) == (i1 | 0)) {
  return;
 } else {
  i11 = i10;
 }
 L33 : while (1) {
  i10 = HEAP32[i11 + 4 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    if ((HEAP32[i10 + 80 >> 2] | 0) == 0) {
     break;
    }
    if ((HEAP32[i10 + 84 >> 2] | 0) == 0) {
     break;
    }
    __ZN7WebCore13AnimationBase15updatePlayStateENS_14EAnimPlayStateE(i10, 0);
   }
  } while (0);
  i10 = i11 + 8 | 0;
  if ((i10 | 0) == (i1 | 0)) {
   i12 = 32;
   break;
  } else {
   i13 = i10;
  }
  while (1) {
   i10 = HEAP32[i13 >> 2] | 0;
   if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
    break;
   }
   i10 = i13 + 8 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    i12 = 34;
    break L33;
   } else {
    i13 = i10;
   }
  }
  if ((i13 | 0) == (i1 | 0)) {
   i12 = 33;
   break;
  } else {
   i11 = i13;
  }
 }
 if ((i12 | 0) == 32) {
  return;
 } else if ((i12 | 0) == 33) {
  return;
 } else if ((i12 | 0) == 34) {
  return;
 }
}
function __ZN7WebCore18CompositeAnimation13clearRendererEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 L1 : do {
  if ((HEAP32[i1 + 20 >> 2] | 0) != 0) {
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   i3 = HEAP32[i1 + 12 >> 2] | 0;
   i4 = i2 + (i3 << 3) | 0;
   L3 : do {
    if ((i3 | 0) == 0) {
     i5 = i2;
    } else {
     i6 = i2;
     while (1) {
      i7 = HEAP32[i6 >> 2] | 0;
      if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
       i5 = i6;
       break L3;
      }
      i6 = i6 + 8 | 0;
      if ((i6 | 0) == (i4 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i5 | 0) == (i4 | 0)) {
    break;
   }
   i2 = i1 + 4 | 0;
   i3 = i5;
   while (1) {
    i6 = HEAP32[i3 + 4 >> 2] | 0;
    i7 = i6;
    __ZN7WebCore26AnimationControllerPrivate22animationWillBeRemovedEPNS_13AnimationBaseE(HEAP32[i2 >> 2] | 0, i7);
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] & 3](i7);
    HEAP32[i6 + 56 >> 2] = 0;
    HEAP32[i6 + 64 >> 2] = 0;
    i6 = i3 + 8 | 0;
    if ((i6 | 0) == (i4 | 0)) {
     break L1;
    } else {
     i8 = i6;
    }
    while (1) {
     i6 = HEAP32[i8 >> 2] | 0;
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      break;
     }
     i6 = i8 + 8 | 0;
     if ((i6 | 0) == (i4 | 0)) {
      break L1;
     } else {
      i8 = i6;
     }
    }
    if ((i8 | 0) == (i4 | 0)) {
     break;
    } else {
     i3 = i8;
    }
   }
  }
 } while (0);
 if ((HEAP32[i1 + 40 >> 2] | 0) == 0) {
  return;
 }
 i8 = HEAP32[i1 + 28 >> 2] | 0;
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 i3 = i8 + (i5 << 3) | 0;
 L19 : do {
  if ((i5 | 0) == 0) {
   i9 = i8;
  } else {
   i4 = i8;
   while (1) {
    i2 = HEAP32[i4 >> 2] | 0;
    if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
     i9 = i4;
     break L19;
    }
    i4 = i4 + 8 | 0;
    if ((i4 | 0) == (i3 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i9 | 0) == (i3 | 0)) {
  return;
 }
 i8 = i1 + 4 | 0;
 i1 = i9;
 L28 : while (1) {
  i9 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i9;
  __ZN7WebCore26AnimationControllerPrivate22animationWillBeRemovedEPNS_13AnimationBaseE(HEAP32[i8 >> 2] | 0, i5);
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 60 >> 2] & 3](i5);
  HEAP32[i9 + 56 >> 2] = 0;
  HEAP32[i9 + 64 >> 2] = 0;
  i9 = i1 + 8 | 0;
  if ((i9 | 0) == (i3 | 0)) {
   i10 = 25;
   break;
  } else {
   i11 = i9;
  }
  while (1) {
   i9 = HEAP32[i11 >> 2] | 0;
   if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
    break;
   }
   i9 = i11 + 8 | 0;
   if ((i9 | 0) == (i3 | 0)) {
    i10 = 27;
    break L28;
   } else {
    i11 = i9;
   }
  }
  if ((i11 | 0) == (i3 | 0)) {
   i10 = 26;
   break;
  } else {
   i1 = i11;
  }
 }
 if ((i10 | 0) == 25) {
  return;
 } else if ((i10 | 0) == 26) {
  return;
 } else if ((i10 | 0) == 27) {
  return;
 }
}
function __ZN7WebCore18CompositeAnimation17suspendAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 60 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 L4 : do {
  if ((HEAP32[i1 + 40 >> 2] | 0) != 0) {
   i2 = HEAP32[i1 + 28 >> 2] | 0;
   i3 = HEAP32[i1 + 32 >> 2] | 0;
   i4 = i2 + (i3 << 3) | 0;
   L6 : do {
    if ((i3 | 0) == 0) {
     i5 = i2;
    } else {
     i6 = i2;
     while (1) {
      i7 = HEAP32[i6 >> 2] | 0;
      if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
       i5 = i6;
       break L6;
      }
      i6 = i6 + 8 | 0;
      if ((i6 | 0) == (i4 | 0)) {
       break L4;
      }
     }
    }
   } while (0);
   if ((i5 | 0) == (i4 | 0)) {
    break;
   } else {
    i8 = i5;
   }
   while (1) {
    i2 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i2 | 0) != 0) {
     __ZN7WebCore13AnimationBase15updatePlayStateENS_14EAnimPlayStateE(i2, 1);
    }
    i2 = i8 + 8 | 0;
    if ((i2 | 0) == (i4 | 0)) {
     break L4;
    } else {
     i9 = i2;
    }
    while (1) {
     i2 = HEAP32[i9 >> 2] | 0;
     if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
      break;
     }
     i2 = i9 + 8 | 0;
     if ((i2 | 0) == (i4 | 0)) {
      break L4;
     } else {
      i9 = i2;
     }
    }
    if ((i9 | 0) == (i4 | 0)) {
     break;
    } else {
     i8 = i9;
    }
   }
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] | 0) == 0) {
  return;
 }
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 i8 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i9 + (i8 << 3) | 0;
 L24 : do {
  if ((i8 | 0) == 0) {
   i10 = i9;
  } else {
   i5 = i9;
   while (1) {
    i4 = HEAP32[i5 >> 2] | 0;
    if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
     i10 = i5;
     break L24;
    }
    i5 = i5 + 8 | 0;
    if ((i5 | 0) == (i1 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i10 | 0) == (i1 | 0)) {
  return;
 } else {
  i11 = i10;
 }
 L32 : while (1) {
  i10 = HEAP32[i11 + 4 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    if ((HEAP32[i10 + 80 >> 2] | 0) == 0) {
     break;
    }
    if ((HEAP32[i10 + 84 >> 2] | 0) == 0) {
     break;
    }
    __ZN7WebCore13AnimationBase15updatePlayStateENS_14EAnimPlayStateE(i10, 1);
   }
  } while (0);
  i10 = i11 + 8 | 0;
  if ((i10 | 0) == (i1 | 0)) {
   i12 = 29;
   break;
  } else {
   i13 = i10;
  }
  while (1) {
   i10 = HEAP32[i13 >> 2] | 0;
   if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
    break;
   }
   i10 = i13 + 8 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    i12 = 28;
    break L32;
   } else {
    i13 = i10;
   }
  }
  if ((i13 | 0) == (i1 | 0)) {
   i12 = 30;
   break;
  } else {
   i11 = i13;
  }
 }
 if ((i12 | 0) == 30) {
  return;
 } else if ((i12 | 0) == 28) {
  return;
 } else if ((i12 | 0) == 29) {
  return;
 }
}
function __ZNK7WebCore18CompositeAnimation23getAnimationForPropertyENS_13CSSPropertyIDE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((HEAP32[i2 + 40 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i4 = HEAP32[i2 + 28 >> 2] | 0;
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 i2 = i4 + (i5 << 3) | 0;
 L5 : do {
  if ((i5 | 0) == 0) {
   i6 = i4;
   i7 = 6;
  } else {
   i8 = i4;
   while (1) {
    i9 = HEAP32[i8 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i6 = i8;
     i7 = 6;
     break L5;
    }
    i8 = i8 + 8 | 0;
    if ((i8 | 0) == (i2 | 0)) {
     break;
    }
   }
  }
 } while (0);
 do {
  if ((i7 | 0) == 6) {
   if ((i6 | 0) == (i2 | 0)) {
    break;
   } else {
    i10 = 0;
    i11 = i6;
   }
   L11 : while (1) {
    i4 = HEAP32[i11 + 4 >> 2] | 0;
    i5 = (i4 | 0) == 0;
    if (!i5) {
     i8 = i4 + 4 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    }
    do {
     if (__ZNK7WebCore17KeyframeAnimation23hasAnimationForPropertyENS_13CSSPropertyIDE(i4, i3) | 0) {
      if (!i5) {
       i8 = i4 + 4 | 0;
       HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
      }
      if ((i10 | 0) == 0) {
       i12 = i4;
       break;
      }
      i8 = i10 + 4 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 3](i10);
       i12 = i4;
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       i12 = i4;
       break;
      }
     } else {
      i12 = i10;
     }
    } while (0);
    do {
     if (!i5) {
      i9 = i4 + 4 | 0;
      i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) == 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
       break;
      } else {
       HEAP32[i9 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i4 = i11 + 8 | 0;
    if ((i4 | 0) == (i2 | 0)) {
     break;
    } else {
     i13 = i4;
    }
    while (1) {
     i4 = HEAP32[i13 >> 2] | 0;
     if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
      break;
     }
     i4 = i13 + 8 | 0;
     if ((i4 | 0) == (i2 | 0)) {
      break L11;
     } else {
      i13 = i4;
     }
    }
    if ((i13 | 0) == (i2 | 0)) {
     break;
    } else {
     i10 = i12;
     i11 = i13;
    }
   }
   HEAP32[i1 >> 2] = i12;
   if ((i12 | 0) == 0) {
    return;
   }
   i4 = i12 + 4 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i5 + 1;
   if ((i5 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 3](i12);
    return;
   } else {
    HEAP32[i4 >> 2] = i5;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore11RenderStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore14SVGRenderStyleD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = i4 | 0;
  if ((i2 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i2 << 2) | 0;
   i2 = i6;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if (!((i4 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17StyleSurroundDataD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore15StyleVisualDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12StyleBoxDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN3WTF7HashMapIiNS_6RefPtrIN7WebCore17ImplicitAnimationEEENS_7IntHashIjEENS_10HashTraitsIiEENS7_IS4_EEE6removeERKi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8 + ~(i8 << 15) | 0;
  i9 = (i2 >>> 10 ^ i2) * 9 & -1;
  i2 = i9 >>> 6 ^ i9;
  i9 = i2 + ~(i2 << 11) | 0;
  i2 = i9 >>> 16 ^ i9;
  i9 = i2 & i4;
  i10 = i3 + (i9 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i2 >>> 23) + ~i2 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i9;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 3) | 0;
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
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 3) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 i8 = i1 | 0;
 i3 = i1 + 4 | 0;
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 4 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore17ImplicitAnimationEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i8, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore18CompositeAnimation20pauseAnimationAtTimeERKN3WTF12AtomicStringEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0;
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = i4;
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 i6 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = i4;
 i4 = i1 + ~(i1 << 15) | 0;
 i1 = (i4 >>> 10 ^ i4) * 9 & -1;
 i4 = i1 >>> 6 ^ i1;
 i1 = i4 + ~(i4 << 11) | 0;
 i4 = i1 >>> 16 ^ i1;
 if ((i6 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 i1 = i4 & i5;
 i8 = i6 + (i1 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L4 : do {
  if ((i9 | 0) == (i2 | 0)) {
   i10 = i8;
  } else {
   i11 = (i4 >>> 23) + ~i4 | 0;
   i12 = i11 << 12 ^ i11;
   i11 = i12 >>> 7 ^ i12;
   i12 = i11 << 2 ^ i11;
   i11 = i12 >>> 20 ^ i12 | 1;
   i12 = 0;
   i13 = i1;
   i14 = i9;
   while (1) {
    if ((i14 | 0) == 0) {
     i7 = 0;
     break;
    }
    i15 = (i12 | 0) == 0 ? i11 : i12;
    i16 = i15 + i13 & i5;
    i17 = i6 + (i16 << 3) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 | 0) == (i2 | 0)) {
     i10 = i17;
     break L4;
    } else {
     i12 = i15;
     i13 = i16;
     i14 = i18;
    }
   }
   return i7 | 0;
  }
 } while (0);
 if ((i10 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 i2 = HEAP32[i10 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 i10 = i2 + 4 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 i6 = i2;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) == 6 | (i5 | 0) == 0 | (i5 | 0) == 11) {
   i19 = 0;
  } else {
   d20 = +HEAPF64[(HEAP32[i2 + 60 >> 2] | 0) + 16 >> 3];
   if (d3 < +0) {
    i19 = 0;
    break;
   }
   if (d20 != +-1) {
    if (d20 * +__ZNK7WebCore13AnimationBase8durationEv(i6) < d3) {
     i19 = 0;
     break;
    }
   }
   __ZN7WebCore13AnimationBase12freezeAtTimeEd(i6, d3);
   i19 = 1;
  }
 } while (0);
 i5 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 3](i6);
  i7 = i19;
  return i7 | 0;
 } else {
  HEAP32[i10 >> 2] = i5;
  i7 = i19;
  return i7 | 0;
 }
 return 0;
}
function __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 76 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 100 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 44 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 12 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore18CompositeAnimation34resumeOverriddenImplicitAnimationsENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP32[i1 + 20 >> 2] | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i3 + (i4 << 3) | 0;
 L4 : do {
  if ((i4 | 0) == 0) {
   i5 = i3;
  } else {
   i6 = i3;
   while (1) {
    i7 = HEAP32[i6 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i5 = i6;
     break L4;
    }
    i6 = i6 + 8 | 0;
    if ((i6 | 0) == (i1 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i1 | 0)) {
  return;
 } else {
  i8 = i5;
 }
 L12 : while (1) {
  i5 = HEAP32[i8 + 4 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    if ((HEAP32[i5 + 72 >> 2] | 0) != (i2 | 0)) {
     break;
    }
    __ZN7WebCore17ImplicitAnimation13setOverriddenEb(i5, 0);
   }
  } while (0);
  i5 = i8 + 8 | 0;
  if ((i5 | 0) == (i1 | 0)) {
   i9 = 16;
   break;
  } else {
   i10 = i5;
  }
  while (1) {
   i5 = HEAP32[i10 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i10 + 8 | 0;
   if ((i5 | 0) == (i1 | 0)) {
    i9 = 14;
    break L12;
   } else {
    i10 = i5;
   }
  }
  if ((i10 | 0) == (i1 | 0)) {
   i9 = 17;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 14) {
  return;
 } else if ((i9 | 0) == 16) {
  return;
 } else if ((i9 | 0) == 17) {
  return;
 }
}
function __ZN7WebCore18CompositeAnimation26overrideImplicitAnimationsENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = i3 + (i4 << 3) | 0;
 if ((HEAP32[i1 + 20 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i4 | 0) == 0) {
   i6 = i3;
  } else {
   i1 = i3;
   while (1) {
    i7 = HEAP32[i1 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i1;
     break L4;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i5 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i6 | 0) == (i5 | 0)) {
  return;
 } else {
  i8 = i6;
 }
 L12 : while (1) {
  i6 = HEAP32[i8 + 4 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    if ((HEAP32[i6 + 72 >> 2] | 0) != (i2 | 0)) {
     break;
    }
    __ZN7WebCore17ImplicitAnimation13setOverriddenEb(i6, 1);
   }
  } while (0);
  i6 = i8 + 8 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   i9 = 16;
   break;
  } else {
   i10 = i6;
  }
  while (1) {
   i6 = HEAP32[i10 >> 2] | 0;
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    break;
   }
   i6 = i10 + 8 | 0;
   if ((i6 | 0) == (i5 | 0)) {
    i9 = 19;
    break L12;
   } else {
    i10 = i6;
   }
  }
  if ((i10 | 0) == (i5 | 0)) {
   i9 = 17;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 17) {
  return;
 } else if ((i9 | 0) == 19) {
  return;
 } else if ((i9 | 0) == 16) {
  return;
 }
}
function __ZN7WebCore17StyleSurroundDataD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10BorderDataD2Ev(i1 + 100 | 0);
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore10BorderDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) != 10) {
  i2 = i1 + 32 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = i3 | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
 return;
}
function __ZN3WTF6VectorIPNS_16AtomicStringImplELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore12StyleBoxDataD2Ev(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
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
function __ZN7WebCore18CompositeAnimationC2EPNS_26AnimationControllerPrivateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 _memset(i1 + 8 | 0, 0, 52) | 0;
 if ((HEAP8[i2 + 217 | 0] & 1) == 0) {
  i3 = 0;
  i4 = i1 + 60 | 0;
  HEAP8[i4] = i3;
  return;
 }
 i3 = HEAP8[i2 + 218 | 0] & 1 ^ 1;
 i4 = i1 + 60 | 0;
 HEAP8[i4] = i3;
 return;
}
function __ZN7WebCore18CompositeAnimationC1EPNS_26AnimationControllerPrivateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 _memset(i1 + 8 | 0, 0, 52) | 0;
 if ((HEAP8[i2 + 217 | 0] & 1) == 0) {
  i3 = 0;
  i4 = i1 + 60 | 0;
  HEAP8[i4] = i3;
  return;
 }
 i3 = HEAP8[i2 + 218 | 0] & 1 ^ 1;
 i4 = i1 + 60 | 0;
 HEAP8[i4] = i3;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 1](i2 | 0);
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
 return +0;
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_di = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore18CompositeAnimationD2Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore18CompositeAnimationC2EPNS_26AnimationControllerPrivateE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_viiiiii = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF7HashMapIiNS_6RefPtrIN7WebCore17ImplicitAnimationEEENS_7IntHashIjEENS_10HashTraitsIiEENS7_IS4_EEE6removeERKi","__ZNK7WebCore18CompositeAnimation17timeToNextServiceEv","_strlen","__ZN7WebCore18CompositeAnimation26overrideImplicitAnimationsENS_13CSSPropertyIDE","__ZN3WTF6VectorIPNS_16AtomicStringImplELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore18CompositeAnimation16resumeAnimationsEv","__ZN7WebCore18CompositeAnimationC2EPNS_26AnimationControllerPrivateE","__ZN7WebCore18CompositeAnimation21pauseTransitionAtTimeENS_13CSSPropertyIDEd","__ZN7WebCore18CompositeAnimation13clearRendererEv","__ZN7WebCore18CompositeAnimation20pauseAnimationAtTimeERKN3WTF12AtomicStringEd","__ZN7WebCore18CompositeAnimationD2Ev","__ZN7WebCore18CompositeAnimation34resumeOverriddenImplicitAnimationsENS_13CSSPropertyIDE","_memset","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","_memcpy","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore17KeyframeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES2_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore17ImplicitAnimationEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZNK7WebCore18CompositeAnimation23getAnimationForPropertyENS_13CSSPropertyIDE","__ZN7WebCore18CompositeAnimation24updateKeyframeAnimationsEPNS_13RenderElementEPNS_11RenderStyleES4_","__ZNK7WebCore18CompositeAnimation19isAnimatingPropertyENS_13CSSPropertyIDEbb","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11RenderStyleD2Ev","__ZNK7WebCore18CompositeAnimation24numberOfActiveAnimationsEv","__ZN7WebCore18CompositeAnimation7animateERNS_13RenderElementEPNS_11RenderStyleERS3_","__ZN7WebCore10BorderDataD2Ev","__ZN7WebCore18CompositeAnimation17updateTransitionsEPNS_13RenderElementEPNS_11RenderStyleES4_","__ZN7WebCore12StyleBoxDataD2Ev","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore17ImplicitAnimationEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEiNS_10PassRefPtrIS4_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS6_S8_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore18CompositeAnimation17suspendAnimationsEv","__ZN3WTF9HashTableIPNS_16AtomicStringImplENS_12KeyValuePairIS2_NS_6RefPtrIN7WebCore17KeyframeAnimationEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS2_EENS_7HashMapIS2_S7_SC_NS_10HashTraitsIS2_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN7WebCore17StyleSurroundDataD2Ev","__ZNK7WebCore18CompositeAnimation16getAnimatedStyleEv"]

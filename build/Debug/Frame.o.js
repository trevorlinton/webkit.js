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
H_BASE = parentModule["_malloc"](160 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 160;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore5FrameC1ERNS_4PageEPNS_21HTMLFrameOwnerElementERNS_17FrameLoaderClientE;
var __ZN7WebCore5FrameD1Ev;
/* memory initializer */ allocate([41,0,0,0,0,0,0,0,92,98,0,0,0,0,0,0,124,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,92,119,0,0,0,0,0,0,32,0,0,0,0,0,0,0,92,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames5trTagE=env.__ZN7WebCore9HTMLNames5trTagE|0;
  var __ZN7WebCore9HTMLNames7formTagE=env.__ZN7WebCore9HTMLNames7formTagE|0;
  var __ZN7WebCore9HTMLNames5tdTagE=env.__ZN7WebCore9HTMLNames5tdTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames8nameAttrE=env.__ZN7WebCore9HTMLNames8nameAttrE|0;
  var __ZN7WebCore9HTMLNames6idAttrE=env.__ZN7WebCore9HTMLNames6idAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN3JSC20StringSourceProviderE=(H_BASE+120)|0;
  var __ZTVN7WebCore5FrameE=(H_BASE+64)|0;
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
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore5Frame28searchForLabelsBeforeElementERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEEPNS_7ElementEPjPb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i2 | 0;
 i8 = i2 + 8 | 0;
 i9 = i2 + 16 | 0;
 i10 = i2 + 24 | 0;
 i11 = i2 + 32 | 0;
 __ZN7WebCoreL21createRegExpForLabelsERKN3WTF6VectorINS0_6StringELj0ENS0_15CrashOnOverflowEEE(i7, i3);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = (i5 | 0) != 0;
 if (i3) {
  HEAP32[i5 >> 2] = -1;
 }
 i12 = (i6 | 0) != 0;
 if (i12) {
  HEAP8[i6] = 0;
 }
 i13 = HEAP32[i4 + 24 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = HEAP32[i4 + 16 >> 2] | 0;
 } else {
  i14 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i13) | 0;
 }
 L11 : do {
  if ((i14 | 0) == 0) {
   i15 = 84;
  } else {
   i13 = i9 | 0;
   i4 = i10 | 0;
   i16 = i8 | 0;
   i17 = i1 | 0;
   i18 = 0;
   i19 = 0;
   i20 = i14;
   i21 = 0;
   L13 : while (1) {
    i22 = i20 + 12 | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 & 16 | 0) == 0) {
     i24 = i23;
    } else {
     if ((HEAP32[(HEAP32[i20 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i25 = i18;
      i26 = i21;
      break;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 448 >> 2] & 3](i20) | 0) {
      i25 = i18;
      i26 = i21;
      break;
     }
     i24 = HEAP32[i22 >> 2] | 0;
    }
    i22 = (i24 & 4 | 0) == 0;
    do {
     if (i22) {
      i15 = 18;
     } else {
      i23 = HEAP32[i20 + 44 >> 2] | 0;
      i27 = HEAP32[__ZN7WebCore9HTMLNames5tdTagE >> 2] | 0;
      if ((i23 | 0) == (i27 | 0)) {
       i28 = 1;
      } else {
       if ((HEAP32[i23 + 12 >> 2] | 0) != (HEAP32[i27 + 12 >> 2] | 0)) {
        i15 = 18;
        break;
       }
       i28 = (HEAP32[i23 + 16 >> 2] | 0) == (HEAP32[i27 + 16 >> 2] | 0);
      }
      i27 = (i21 | 0) == 0;
      if (!(i28 & i27)) {
       i29 = i27;
       i15 = 21;
       break;
      }
      i30 = i20;
      i31 = i19;
      i32 = i18;
     }
    } while (0);
    if ((i15 | 0) == 18) {
     i15 = 0;
     i29 = (i21 | 0) == 0;
     i15 = 21;
    }
    L29 : do {
     if ((i15 | 0) == 21) {
      i15 = 0;
      do {
       if (!i22) {
        i27 = HEAP32[i20 + 44 >> 2] | 0;
        i23 = HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0;
        if ((i27 | 0) == (i23 | 0)) {
         i33 = 0;
        } else {
         if ((HEAP32[i27 + 12 >> 2] | 0) != (HEAP32[i23 + 12 >> 2] | 0)) {
          break;
         }
         i33 = (HEAP32[i27 + 16 >> 2] | 0) != (HEAP32[i23 + 16 >> 2] | 0);
        }
        if (i33 | i29) {
         break;
        }
        __ZN7WebCore5Frame24searchForLabelsAboveCellEPNS_17RegularExpressionEPNS_20HTMLTableCellElementEPj(i8, 0, i7, i21, i5);
        i34 = HEAP32[i16 >> 2] | 0;
        if ((i34 | 0) == 0) {
         i30 = i21;
         i31 = i19;
         i32 = 1;
         break L29;
        }
        if ((HEAP32[i34 + 4 >> 2] | 0) != 0) {
         i15 = 28;
         break L13;
        }
        i23 = i34 | 0;
        i27 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
        if ((i27 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i34);
         i30 = i21;
         i31 = i19;
         i32 = 1;
         break L29;
        } else {
         HEAP32[i23 >> 2] = i27;
         i30 = i21;
         i31 = i19;
         i32 = 1;
         break L29;
        }
       }
      } while (0);
      if ((i24 & 1 | 0) == 0) {
       i30 = i21;
       i31 = i19;
       i32 = i18;
       break;
      }
      i27 = (i24 & 2048 | 0) == 0;
      i23 = i20 + 32 | 0;
      if (i27) {
       i35 = i23 | 0;
      } else {
       i35 = HEAP32[i23 >> 2] | 0;
      }
      if ((HEAP32[i35 >> 2] | 0) == 0) {
       i30 = i21;
       i31 = i19;
       i32 = i18;
       break;
      }
      if (i27) {
       i36 = i23 | 0;
      } else {
       i36 = HEAP32[i23 >> 2] | 0;
      }
      i23 = HEAP32[i36 >> 2] | 0;
      if ((HEAP32[i23 + 20 >> 2] & 768 | 0) == 256) {
       i37 = HEAP32[(HEAP32[i23 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i37 = HEAP32[i23 + 36 >> 2] | 0;
      }
      if ((HEAP32[i37 + 40 >> 2] & 6144 | 0) != 0) {
       i30 = i21;
       i31 = i19;
       i32 = i18;
       break;
      }
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 68 >> 2] & 15](i9, i20);
      i23 = HEAP32[i13 >> 2] | 0;
      i27 = (i23 | 0) == 0;
      if (i27) {
       i38 = 0;
      } else {
       i38 = HEAP32[i23 + 4 >> 2] | 0;
      }
      do {
       if ((i38 + i19 | 0) >>> 0 > 600 >>> 0) {
        i39 = 500 - i19 | 0;
        if (i27) {
         i40 = 0;
        } else {
         i40 = HEAP32[i23 + 4 >> 2] | 0;
        }
        __ZNK3WTF6String9substringEjj(i10, i9, i40 - i39 | 0, i39);
        i39 = HEAP32[i4 >> 2] | 0;
        HEAP32[i4 >> 2] = 0;
        i41 = HEAP32[i13 >> 2] | 0;
        HEAP32[i13 >> 2] = i39;
        do {
         if ((i41 | 0) != 0) {
          i39 = i41 | 0;
          i42 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
          if ((i42 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i41);
           break;
          } else {
           HEAP32[i39 >> 2] = i42;
           break;
          }
         }
        } while (0);
        i41 = HEAP32[i4 >> 2] | 0;
        if ((i41 | 0) == 0) {
         break;
        }
        i42 = i41 | 0;
        i39 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
        if ((i39 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i41);
         break;
        } else {
         HEAP32[i42 >> 2] = i39;
         break;
        }
       }
      } while (0);
      i23 = __ZNK7WebCore17RegularExpression9searchRevERKN3WTF6StringE(i7, i9) | 0;
      if ((i23 | 0) > -1) {
       if (i3) {
        HEAP32[i5 >> 2] = i19;
       }
       __ZNK3WTF6String9substringEjj(i1, i9, i23, __ZNK7WebCore17RegularExpression13matchedLengthEv(i7) | 0);
       i43 = 1;
       i44 = i19;
       i45 = HEAP32[i13 >> 2] | 0;
      } else {
       i23 = HEAP32[i13 >> 2] | 0;
       if ((i23 | 0) == 0) {
        i46 = 0;
       } else {
        i46 = HEAP32[i23 + 4 >> 2] | 0;
       }
       i43 = 0;
       i44 = i46 + i19 | 0;
       i45 = i23;
      }
      do {
       if ((i45 | 0) != 0) {
        i23 = i45 | 0;
        i27 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
        if ((i27 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i45);
         break;
        } else {
         HEAP32[i23 >> 2] = i27;
         break;
        }
       }
      } while (0);
      if ((i43 | 0) == 0) {
       i30 = i21;
       i31 = i44;
       i32 = i18;
      } else {
       break L11;
      }
     }
    } while (0);
    i22 = HEAP32[i20 + 24 >> 2] | 0;
    if ((i22 | 0) == 0) {
     i47 = HEAP32[i20 + 16 >> 2] | 0;
    } else {
     i47 = __ZN7WebCore13NodeTraversal13deepLastChildEPNS_4NodeE(i22) | 0;
    }
    if ((i47 | 0) != 0 & i31 >>> 0 < 500 >>> 0) {
     i18 = i32;
     i19 = i31;
     i20 = i47;
     i21 = i30;
    } else {
     i25 = i32;
     i26 = i30;
     break;
    }
   }
   if ((i15 | 0) == 28) {
    if (i12) {
     HEAP8[i6] = 1;
    }
    HEAP32[i16 >> 2] = 0;
    HEAP32[i17 >> 2] = i34;
    break;
   }
   if ((i26 | 0) == 0 | i25) {
    i15 = 84;
    break;
   }
   __ZN7WebCore5Frame24searchForLabelsAboveCellEPNS_17RegularExpressionEPNS_20HTMLTableCellElementEPj(i11, 0, i7, i26, i5);
   i21 = i11 | 0;
   i20 = HEAP32[i21 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i15 = 84;
    break;
   }
   if ((HEAP32[i20 + 4 >> 2] | 0) == 0) {
    i19 = i20 | 0;
    i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i20);
     i15 = 84;
     break;
    } else {
     HEAP32[i19 >> 2] = i18;
     i15 = 84;
     break;
    }
   } else {
    if (i12) {
     HEAP8[i6] = 1;
    }
    HEAP32[i21 >> 2] = 0;
    HEAP32[i1 >> 2] = i20;
    break;
   }
  }
 } while (0);
 if ((i15 | 0) == 84) {
  HEAP32[i1 >> 2] = 0;
 }
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore17RegularExpressionD1Ev(i7);
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL21createRegExpForLabelsERKN3WTF6VectorINS0_6StringELj0ENS0_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 if (!(HEAP8[H_BASE + 152 | 0] | 0)) {
  i13 = __ZN3WTF10fastMallocEj(4) | 0;
  __ZN3WTF6StringC1EPKc(i4, H_BASE + 40 | 0);
  __ZN7WebCore17RegularExpressionC1ERKN3WTF6StringENS1_19TextCaseSensitivityENS_13MultilineModeE(i13, i4, 0, 0);
  i14 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i4 = i14 | 0;
    i15 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i15 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i4 >> 2] = i15;
     break;
    }
   }
  } while (0);
  HEAP32[H_BASE + 160 >> 2] = i13;
  HEAP8[H_BASE + 152 | 0] = 1;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 32 | 0);
 i13 = i2 + 8 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 L10 : do {
  if ((i14 | 0) != 0) {
   i15 = i2 | 0;
   i4 = i6 | 0;
   i16 = i10 | 0;
   i17 = i11 | 0;
   i18 = i9 | 0;
   i19 = i7 | 0;
   i20 = i8 | 0;
   i21 = 0;
   i22 = i14;
   while (1) {
    if (i22 >>> 0 <= i21 >>> 0) {
     break;
    }
    i23 = HEAP32[(HEAP32[i15 >> 2] | 0) + (i21 << 2) >> 2] | 0;
    HEAP32[i4 >> 2] = i23;
    do {
     if ((i23 | 0) == 0) {
      i24 = 0;
      i25 = 0;
     } else {
      i26 = i23 | 0;
      HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
      i26 = HEAP32[i4 >> 2] | 0;
      if ((i26 | 0) == 0) {
       i24 = 0;
       i25 = 0;
       break;
      }
      if ((HEAP32[i26 + 4 >> 2] | 0) == 0) {
       i24 = 0;
       i25 = 0;
       break;
      }
      i26 = HEAP32[H_BASE + 160 >> 2] | 0;
      __ZNK3WTF6String9substringEjj(i7, i6, 0, 1);
      i27 = (__ZNK7WebCore17RegularExpression5matchERKN3WTF6StringEiPi(i26, i7, 0, 0) | 0) > -1;
      i26 = HEAP32[i19 >> 2] | 0;
      do {
       if ((i26 | 0) != 0) {
        i28 = i26 | 0;
        i29 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
        if ((i29 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i26);
         break;
        } else {
         HEAP32[i28 >> 2] = i29;
         break;
        }
       }
      } while (0);
      i26 = HEAP32[H_BASE + 160 >> 2] | 0;
      i29 = HEAP32[i4 >> 2] | 0;
      if ((i29 | 0) == 0) {
       i30 = -1;
      } else {
       i30 = (HEAP32[i29 + 4 >> 2] | 0) - 1 | 0;
      }
      __ZNK3WTF6String9substringEjj(i8, i6, i30, 1);
      i29 = (__ZNK7WebCore17RegularExpression5matchERKN3WTF6StringEiPi(i26, i8, 0, 0) | 0) > -1;
      i26 = HEAP32[i20 >> 2] | 0;
      if ((i26 | 0) == 0) {
       i24 = i29;
       i25 = i27;
       break;
      }
      i28 = i26 | 0;
      i31 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
      if ((i31 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i26);
       i24 = i29;
       i25 = i27;
       break;
      } else {
       HEAP32[i28 >> 2] = i31;
       i24 = i29;
       i25 = i27;
       break;
      }
     }
    } while (0);
    do {
     if ((i21 | 0) != 0) {
      __ZN3WTF6StringC1EPKc(i9, H_BASE + 24 | 0);
      __ZN3WTF6String6appendERKS0_(i5, i9);
      i23 = HEAP32[i18 >> 2] | 0;
      if ((i23 | 0) == 0) {
       break;
      }
      i29 = i23 | 0;
      i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i31 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       break;
      } else {
       HEAP32[i29 >> 2] = i31;
       break;
      }
     }
    } while (0);
    do {
     if (i25) {
      __ZN3WTF6StringC1EPKc(i10, H_BASE + 16 | 0);
      __ZN3WTF6String6appendERKS0_(i5, i10);
      i31 = HEAP32[i16 >> 2] | 0;
      if ((i31 | 0) == 0) {
       break;
      }
      i29 = i31 | 0;
      i23 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i23 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i31);
       break;
      } else {
       HEAP32[i29 >> 2] = i23;
       break;
      }
     }
    } while (0);
    __ZN3WTF6String6appendERKS0_(i5, i6);
    do {
     if (i24) {
      __ZN3WTF6StringC1EPKc(i11, H_BASE + 16 | 0);
      __ZN3WTF6String6appendERKS0_(i5, i11);
      i23 = HEAP32[i17 >> 2] | 0;
      if ((i23 | 0) == 0) {
       break;
      }
      i29 = i23 | 0;
      i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i31 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       break;
      } else {
       HEAP32[i29 >> 2] = i31;
       break;
      }
     }
    } while (0);
    i31 = HEAP32[i4 >> 2] | 0;
    do {
     if ((i31 | 0) != 0) {
      i29 = i31 | 0;
      i23 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i23 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i31);
       break;
      } else {
       HEAP32[i29 >> 2] = i23;
       break;
      }
     }
    } while (0);
    i31 = i21 + 1 | 0;
    if (i31 >>> 0 >= i14 >>> 0) {
     break L10;
    }
    i21 = i31;
    i22 = HEAP32[i13 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i12, H_BASE + 8 | 0);
 __ZN3WTF6String6appendERKS0_(i5, i12);
 i13 = HEAP32[i12 >> 2] | 0;
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
 i13 = __ZN3WTF10fastMallocEj(4) | 0;
 __ZN7WebCore17RegularExpressionC1ERKN3WTF6StringENS1_19TextCaseSensitivityENS_13MultilineModeE(i13, i5, 1, 0);
 HEAP32[i1 >> 2] = i13;
 i13 = HEAP32[i5 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i13 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore5Frame10createViewERKNS_7IntSizeERKNS_5ColorEbS3_RKNS_7IntRectEbNS_13ScrollbarModeEbSA_b(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i13 = i12 | 0;
 i14 = i12 + 8 | 0;
 i15 = i12 + 16 | 0;
 i16 = i12 + 24 | 0;
 i17 = i12 + 32 | 0;
 i18 = (HEAP32[i1 + 28 >> 2] | 0) == (i1 | 0);
 do {
  if (i18) {
   i19 = HEAP32[i1 + 452 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   __ZN7WebCore10ScrollView16setParentVisibleEb(i19 | 0, 0);
  }
 } while (0);
 i19 = i13 | 0;
 HEAP32[i19 >> 2] = 0;
 __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i1, i13);
 i13 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i19 = i13 + 4 | 0;
   i20 = i19 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i20 >> 2] = i21;
    break;
   }
   i21 = i19 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 15](i21);
  }
 } while (0);
 if (i18) {
  __ZN7WebCore9FrameView6createERNS_5FrameERKNS_7IntSizeE(i14, i1, i2);
  i2 = i14 | 0;
  i14 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  i2 = i14 | 0;
  __ZN7WebCore10ScrollView18setFixedLayoutSizeERKNS_7IntSizeE(i2, i5);
  __ZN7WebCore9FrameView26setFixedVisibleContentRectERKNS_7IntRectE(i14, i6);
  __ZN7WebCore10ScrollView17setUseFixedLayoutEb(i2, i7);
  i22 = i14;
 } else {
  __ZN7WebCore9FrameView6createERNS_5FrameE(i15, i1);
  i14 = i15 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  i22 = i15;
 }
 i15 = i22 | 0;
 __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i15, i8, i10, i9, i11);
 i11 = i16 | 0;
 HEAP32[i11 >> 2] = i22;
 i9 = (i22 | 0) == 0;
 if (!i9) {
  i10 = i22 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i1, i16);
 i16 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i11 = i16 + 4 | 0;
   i10 = i11 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i10 >> 2] = i8;
    break;
   }
   i8 = i11 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  }
 } while (0);
 if ((HEAP8[i3 + 4 | 0] & 1) != 0) {
  __ZN7WebCore9FrameView27updateBackgroundRecursivelyERKNS_5ColorEb(i22, i3, i4);
 }
 if (i18) {
  __ZN7WebCore10ScrollView16setParentVisibleEb(i15, 1);
 }
 i15 = i1 + 448 | 0;
 i18 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i4 = i18 + 32 | 0;
   if ((HEAP32[i18 + 12 >> 2] & 2048 | 0) == 0) {
    i23 = i4 | 0;
   } else {
    i23 = HEAP32[i4 >> 2] | 0;
   }
   i4 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 228 >> 2] & 3](i4) | 0)) {
      break;
     }
     i3 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i3 | 0) == 0) {
       i24 = 0;
      } else {
       i16 = i3 + 32 | 0;
       if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
        i25 = i16 | 0;
       } else {
        i25 = HEAP32[i16 >> 2] | 0;
       }
       i16 = HEAP32[i25 >> 2] | 0;
       if ((i16 | 0) == 0) {
        i24 = 0;
        break;
       }
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 228 >> 2] & 3](i16) | 0)) {
        i24 = 0;
        break;
       }
       i24 = i16;
      }
     } while (0);
     i3 = i17 | 0;
     HEAP32[i3 >> 2] = i22;
     if (!i9) {
      i16 = i22 + 4 | 0;
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     }
     __ZN7WebCore12RenderWidget9setWidgetEN3WTF10PassRefPtrINS_6WidgetEEE(i24, i17);
     i16 = HEAP32[i3 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     i3 = i16 + 4 | 0;
     i16 = i3 | 0;
     i8 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i16 >> 2] = i8;
      break;
     }
     i8 = i3 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
    }
   } while (0);
   i4 = HEAP32[i15 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i1 + 452 >> 2] | 0;
   __ZN7WebCore9FrameView20setCanHaveScrollbarsEb(i8, (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 604 >> 2] & 3](i4) | 0) != 1);
  }
 } while (0);
 if (i9) {
  STACKTOP = i12;
  return;
 }
 i9 = i22 + 4 | 0;
 i22 = i9 | 0;
 i1 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i22 >> 2] = i1;
  STACKTOP = i12;
  return;
 }
 i1 = i9 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i12;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i12;
 return;
}
function __ZN7WebCore5Frame24searchForLabelsAboveCellEPNS_17RegularExpressionEPNS_20HTMLTableCellElementEPj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i2 | 0;
 i7 = __ZNK7WebCore20HTMLTableCellElement9cellAboveEv(i4) | 0;
 L1 : do {
  if ((i7 | 0) != 0) {
   i4 = HEAP32[i7 + 36 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i8 = i7 | 0;
   i9 = HEAP32[i4 + 12 >> 2] | 0;
   if ((i9 & 1 | 0) == 0) {
    i10 = i4;
    i11 = i9;
    while (1) {
     if ((i11 & 2 | 0) == 0) {
      i12 = 8;
     } else {
      i9 = HEAP32[i10 + 36 >> 2] | 0;
      if ((i9 | 0) == 0) {
       i12 = 8;
      } else {
       i13 = i9;
      }
     }
     do {
      if ((i12 | 0) == 8) {
       i12 = 0;
       if ((i10 | 0) == (i8 | 0)) {
        break L1;
       }
       i9 = HEAP32[i10 + 28 >> 2] | 0;
       if ((i9 | 0) != 0) {
        i13 = i9;
        break;
       }
       i9 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i10, i8) | 0;
       if ((i9 | 0) == 0) {
        break L1;
       } else {
        i13 = i9;
       }
      }
     } while (0);
     i9 = HEAP32[i13 + 12 >> 2] | 0;
     if ((i9 & 1 | 0) == 0) {
      i10 = i13;
      i11 = i9;
     } else {
      i14 = i13;
      break;
     }
    }
   } else {
    i14 = i4;
   }
   i11 = i7 | 0;
   i10 = i6 | 0;
   i8 = (i5 | 0) == 0;
   i9 = i14;
   i15 = 0;
   L15 : while (1) {
    i16 = (HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0;
    i17 = i9 + 32 | 0;
    if (i16) {
     i18 = i17 | 0;
    } else {
     i18 = HEAP32[i17 >> 2] | 0;
    }
    do {
     if ((HEAP32[i18 >> 2] | 0) == 0) {
      i19 = i15;
     } else {
      if (i16) {
       i20 = i17 | 0;
      } else {
       i20 = HEAP32[i17 >> 2] | 0;
      }
      if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i20 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
       i19 = i15;
       break;
      }
      i21 = HEAP32[i9 + 36 >> 2] | 0;
      HEAP32[i10 >> 2] = i21;
      if ((i21 | 0) != 0) {
       i22 = i21 | 0;
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
      }
      i22 = __ZNK7WebCore17RegularExpression9searchRevERKN3WTF6StringE(i3, i6) | 0;
      if ((i22 | 0) > -1) {
       if (!i8) {
        HEAP32[i5 >> 2] = i15;
       }
       __ZNK3WTF6String9substringEjj(i1, i6, i22, __ZNK7WebCore17RegularExpression13matchedLengthEv(i3) | 0);
       i23 = 1;
       i24 = i15;
       i25 = HEAP32[i10 >> 2] | 0;
      } else {
       i22 = HEAP32[i10 >> 2] | 0;
       if ((i22 | 0) == 0) {
        i26 = 0;
       } else {
        i26 = HEAP32[i22 + 4 >> 2] | 0;
       }
       i23 = 0;
       i24 = i26 + i15 | 0;
       i25 = i22;
      }
      do {
       if ((i25 | 0) != 0) {
        i22 = i25 | 0;
        i21 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
        if ((i21 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i25);
         break;
        } else {
         HEAP32[i22 >> 2] = i21;
         break;
        }
       }
      } while (0);
      if ((i23 | 0) == 1) {
       break L15;
      } else {
       i19 = i24;
      }
     }
    } while (0);
    if ((i9 | 0) == (i11 | 0)) {
     break L1;
    }
    i17 = HEAP32[i9 + 28 >> 2] | 0;
    if ((i17 | 0) == 0) {
     i16 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i9, i11) | 0;
     if ((i16 | 0) == 0) {
      break L1;
     } else {
      i27 = i16;
     }
    } else {
     i27 = i17;
    }
    i17 = HEAP32[i27 + 12 >> 2] | 0;
    if ((i17 & 1 | 0) == 0) {
     i28 = i27;
     i29 = i17;
    } else {
     i9 = i27;
     i15 = i19;
     continue;
    }
    while (1) {
     if ((i29 & 2 | 0) == 0) {
      i12 = 41;
     } else {
      i17 = HEAP32[i28 + 36 >> 2] | 0;
      if ((i17 | 0) == 0) {
       i12 = 41;
      } else {
       i30 = i17;
      }
     }
     do {
      if ((i12 | 0) == 41) {
       i12 = 0;
       if ((i28 | 0) == (i11 | 0)) {
        break L1;
       }
       i17 = HEAP32[i28 + 28 >> 2] | 0;
       if ((i17 | 0) != 0) {
        i30 = i17;
        break;
       }
       i17 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i28, i11) | 0;
       if ((i17 | 0) == 0) {
        break L1;
       } else {
        i30 = i17;
       }
      }
     } while (0);
     i17 = HEAP32[i30 + 12 >> 2] | 0;
     if ((i17 & 1 | 0) == 0) {
      i28 = i30;
      i29 = i17;
     } else {
      i9 = i30;
      i15 = i19;
      continue L15;
     }
    }
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = -1;
 }
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore5Frame23visiblePositionForPointERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 120 | 0;
 i8 = i4 + 128 | 0;
 i9 = i4 + 136 | 0;
 i10 = i4 + 152 | 0;
 i11 = i4 + 168 | 0;
 i12 = HEAP32[i2 + 472 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 __ZN7WebCore12EventHandler20hitTestResultAtPointERKNS_11LayoutPointEjRKNS_10LayoutSizeE(i6, i12, i7, 6, i8);
 i8 = HEAP32[i6 + 76 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i7 = i1 + 8 | 0;
  i12 = i7;
  i3 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = i3 & -8;
  HEAP8[i7] = i3 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
  __ZN7WebCore13HitTestResultD1Ev(i6);
  STACKTOP = i4;
  return;
 }
 i3 = i8 + 32 | 0;
 if ((HEAP32[i8 + 12 >> 2] & 2048 | 0) == 0) {
  i13 = i3 | 0;
 } else {
  i13 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i13 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i13 = i1 + 8 | 0;
  i7 = i13;
  i12 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i12 & -8;
  HEAP8[i13] = i12 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
  __ZN7WebCore13HitTestResultD1Ev(i6);
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 464 >> 2] & 3](i9, i3, i6 + 88 | 0);
 i3 = i9 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 132 >> 2] & 3](i8) | 0) {
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i11, i8);
    } else {
     i12 = i5 | 0;
     HEAP32[i12 >> 2] = i8;
     i13 = i8 + 8 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i11, i5, 1);
     i13 = HEAP32[i12 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     i12 = i13 + 8 | 0;
     i13 = i12 | 0;
     i7 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i10, i11, 1);
   i12 = i10 | 0;
   i7 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i13 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i7;
   do {
    if ((i13 | 0) != 0) {
     i7 = i13 + 8 | 0;
     i2 = i7 | 0;
     i14 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     HEAP32[i2 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i13 = i9 + 4 | 0;
   HEAP32[i13 >> 2] = HEAP32[i10 + 4 >> 2];
   i7 = HEAP32[i10 + 8 >> 2] | 0;
   i14 = i9 + 8 | 0;
   i2 = i14;
   i15 = HEAP32[i2 >> 2] & -8 | i7 & 7;
   HEAP32[i2 >> 2] = i15;
   HEAP8[i14] = i15 & 255 & -9 | i7 & 8;
   i7 = i9 + 12 | 0;
   HEAP32[i7 >> 2] = HEAP32[i10 + 12 >> 2];
   i15 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i14 = i15 + 8 | 0;
     i16 = i14 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i15 = HEAP32[i11 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i18 = i13;
    i19 = i2;
    i20 = i7;
    break;
   }
   i12 = i15 + 8 | 0;
   i15 = i12 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    i18 = i13;
    i19 = i2;
    i20 = i7;
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    i18 = i13;
    i19 = i2;
    i20 = i7;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   i18 = i13;
   i19 = i2;
   i20 = i7;
  } else {
   i18 = i9 + 4 | 0;
   i19 = i9 + 8 | 0;
   i20 = i9 + 12 | 0;
  }
 } while (0);
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 >> 2] = i9;
 HEAP32[i1 + 4 >> 2] = HEAP32[i18 >> 2];
 i18 = HEAP32[i19 >> 2] | 0;
 i19 = i1 + 8 | 0;
 i9 = i19;
 i3 = HEAP32[i9 >> 2] & -8 | i18 & 7;
 HEAP32[i9 >> 2] = i3;
 HEAP8[i19] = i3 & 255 & -9 | i18 & 8;
 HEAP32[i1 + 12 >> 2] = HEAP32[i20 >> 2];
 __ZN7WebCore13HitTestResultD1Ev(i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Frame13rangeForPointERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i8 | 0;
 i10 = i8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13;
 __ZN7WebCore5Frame23visiblePositionForPointERKNS_8IntPointE(i5, i2, i3);
 i16 = i5 | 0;
 do {
  if ((HEAP32[i16 >> 2] | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
  } else {
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i6, i5, 0);
   i17 = i6 | 0;
   L3 : do {
    if ((HEAP32[i17 >> 2] | 0) == 0) {
     i18 = 12;
    } else {
     __ZN7WebCore9makeRangeERKNS_15VisiblePositionES2_(i7, i6, i5);
     i19 = i7 | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = 0;
     __ZNK7WebCore6Editor17firstRectForRangeEPNS_5RangeE(i10, HEAP32[i2 + 464 >> 2] | 0, i20);
     i19 = HEAP32[i9 >> 2] | 0;
     i21 = HEAP32[i9 + 4 >> 2] | 0;
     i22 = i8 + 8 | 0;
     i23 = HEAP32[i22 + 4 >> 2] | 0;
     i24 = HEAP32[i3 >> 2] | 0;
     i25 = HEAP32[i3 + 4 >> 2] | 0;
     do {
      if ((i24 | 0) >= (i19 | 0)) {
       if ((i24 | 0) >= ((HEAP32[i22 >> 2] | 0) + i19 | 0) | (i25 | 0) < (i21 | 0)) {
        break;
       }
       if ((i25 | 0) >= (i23 + i21 | 0)) {
        break;
       }
       HEAP32[i1 >> 2] = i20;
       break L3;
      }
     } while (0);
     if ((i20 | 0) == 0) {
      i18 = 12;
      break;
     }
     i21 = i20 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i20);
      __ZN3WTF8fastFreeEPv(i20);
      i18 = 12;
      break;
     } else {
      HEAP32[i21 >> 2] = i23;
      i18 = 12;
      break;
     }
    }
   } while (0);
   do {
    if ((i18 | 0) == 12) {
     __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i11, i5, 0);
     __ZN7WebCore9makeRangeERKNS_15VisiblePositionES2_(i12, i5, i11);
     i23 = i12 | 0;
     i21 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     L16 : do {
      if ((i21 | 0) == 0) {
       i18 = 20;
      } else {
       __ZNK7WebCore6Editor17firstRectForRangeEPNS_5RangeE(i15, HEAP32[i2 + 464 >> 2] | 0, i21);
       i23 = HEAP32[i14 >> 2] | 0;
       i25 = HEAP32[i14 + 4 >> 2] | 0;
       i19 = i13 + 8 | 0;
       i22 = HEAP32[i19 + 4 >> 2] | 0;
       i24 = HEAP32[i3 >> 2] | 0;
       i26 = HEAP32[i3 + 4 >> 2] | 0;
       do {
        if ((i24 | 0) >= (i23 | 0)) {
         if ((i24 | 0) >= ((HEAP32[i19 >> 2] | 0) + i23 | 0) | (i26 | 0) < (i25 | 0)) {
          break;
         }
         if ((i26 | 0) >= (i22 + i25 | 0)) {
          break;
         }
         HEAP32[i1 >> 2] = i21;
         break L16;
        }
       } while (0);
       i25 = i21 | 0;
       i22 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       if ((i22 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i21);
        __ZN3WTF8fastFreeEPv(i21);
        i18 = 20;
        break;
       } else {
        HEAP32[i25 >> 2] = i22;
        i18 = 20;
        break;
       }
      }
     } while (0);
     if ((i18 | 0) == 20) {
      HEAP32[i1 >> 2] = 0;
     }
     i21 = HEAP32[i11 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     i20 = i21 + 8 | 0;
     i21 = i20 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i20 = HEAP32[i17 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i22 = i20 + 8 | 0;
   i20 = i22 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
  }
 } while (0);
 i11 = HEAP32[i16 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = i11 + 8 | 0;
 i11 = i16 | 0;
 i1 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5FrameD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 72;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i3 = i1 + 80 | 0;
 __ZN7WebCore11FrameLoader14cancelAndClearEv(i3);
 i6 = i1 + 448 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   __ZN7WebCore21HTMLFrameOwnerElement17clearContentFrameEv(i4);
   i5 = HEAP32[i1 + 32 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i7 = i5 + 88 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - 1;
  }
 } while (0);
 HEAP32[i6 >> 2] = 0;
 i6 = i1 + 8 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = i4 + (i7 << 2) | 0;
 L12 : do {
  if ((HEAP32[i1 + 20 >> 2] | 0) != 0) {
   L14 : do {
    if ((i7 | 0) == 0) {
     i8 = i4;
    } else {
     i9 = i4;
     while (1) {
      i10 = HEAP32[i9 >> 2] | 0;
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i8 = i9;
       break L14;
      }
      i9 = i9 + 4 | 0;
      if ((i9 | 0) == (i5 | 0)) {
       break L12;
      }
     }
    }
   } while (0);
   if ((i8 | 0) == (i5 | 0)) {
    break;
   } else {
    i11 = i8;
   }
   while (1) {
    i9 = HEAP32[i11 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[HEAP32[i9 >> 2] >> 2] & 15](i9);
    i9 = i11 + 4 | 0;
    if ((i9 | 0) == (i5 | 0)) {
     break L12;
    } else {
     i12 = i9;
    }
    while (1) {
     i9 = HEAP32[i12 >> 2] | 0;
     if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
      break;
     }
     i9 = i12 + 4 | 0;
     if ((i9 | 0) == (i5 | 0)) {
      break L12;
     } else {
      i12 = i9;
     }
    }
    if ((i12 | 0) == (i5 | 0)) {
     break;
    } else {
     i11 = i12;
    }
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i12 | 0) != (i1 | 0)) {
  __ZN7WebCore9MainFrame13selfOnlyDerefEv(i12);
 }
 i12 = HEAP32[i1 + 492 >> 2] | 0;
 if ((i12 | 0) != 0) {
  __ZN7WebCore17TiledBackingStoreD1Ev(i12);
  __ZN3WTF8fastFreeEPv(i12);
 }
 i12 = i1 + 476 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 if ((i11 | 0) != 0) {
  __ZN7WebCore19AnimationControllerD1Ev(i11);
  __ZdlPv(i11);
 }
 i11 = HEAP32[i1 + 472 >> 2] | 0;
 if ((i11 | 0) != 0) {
  __ZN7WebCore12EventHandlerD1Ev(i11);
  __ZdlPv(i11);
 }
 i11 = HEAP32[i1 + 468 >> 2] | 0;
 if ((i11 | 0) != 0) {
  __ZN7WebCore14FrameSelectionD2Ev(i11);
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = HEAP32[i1 + 464 >> 2] | 0;
 if ((i11 | 0) != 0) {
  __ZN7WebCore6EditorD1Ev(i11);
  __ZdlPv(i11);
 }
 i11 = i1 + 460 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 if ((i12 | 0) != 0) {
  __ZN7WebCore16ScriptControllerD1Ev(i12);
  __ZdlPv(i12);
 }
 i12 = HEAP32[i1 + 456 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 + 8 | 0;
   i5 = i11 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i1 + 452 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 + 4 | 0;
   i8 = i11 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = i11 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZN7WebCore19NavigationSchedulerD1Ev(i1 + 376 | 0);
 __ZN7WebCore11FrameLoaderD1Ev(i3);
 __ZN7WebCore9FrameTreeD1Ev(i1 + 40 | 0);
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 | 0;
   i12 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore8SettingsD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i1 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore5FrameD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 72;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i3 = i1 + 80 | 0;
 __ZN7WebCore11FrameLoader14cancelAndClearEv(i3);
 i6 = i1 + 448 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   __ZN7WebCore21HTMLFrameOwnerElement17clearContentFrameEv(i4);
   i5 = HEAP32[i1 + 32 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i7 = i5 + 88 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - 1;
  }
 } while (0);
 HEAP32[i6 >> 2] = 0;
 i6 = i1 + 8 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = i4 + (i7 << 2) | 0;
 L12 : do {
  if ((HEAP32[i1 + 20 >> 2] | 0) != 0) {
   L14 : do {
    if ((i7 | 0) == 0) {
     i8 = i4;
    } else {
     i9 = i4;
     while (1) {
      i10 = HEAP32[i9 >> 2] | 0;
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i8 = i9;
       break L14;
      }
      i9 = i9 + 4 | 0;
      if ((i9 | 0) == (i5 | 0)) {
       break L12;
      }
     }
    }
   } while (0);
   if ((i8 | 0) == (i5 | 0)) {
    break;
   } else {
    i11 = i8;
   }
   while (1) {
    i9 = HEAP32[i11 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[HEAP32[i9 >> 2] >> 2] & 15](i9);
    i9 = i11 + 4 | 0;
    if ((i9 | 0) == (i5 | 0)) {
     break L12;
    } else {
     i12 = i9;
    }
    while (1) {
     i9 = HEAP32[i12 >> 2] | 0;
     if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
      break;
     }
     i9 = i12 + 4 | 0;
     if ((i9 | 0) == (i5 | 0)) {
      break L12;
     } else {
      i12 = i9;
     }
    }
    if ((i12 | 0) == (i5 | 0)) {
     break;
    } else {
     i11 = i12;
    }
   }
  }
 } while (0);
 i12 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i12 | 0) != (i1 | 0)) {
  __ZN7WebCore9MainFrame13selfOnlyDerefEv(i12);
 }
 i12 = HEAP32[i1 + 492 >> 2] | 0;
 if ((i12 | 0) != 0) {
  __ZN7WebCore17TiledBackingStoreD1Ev(i12);
  __ZN3WTF8fastFreeEPv(i12);
 }
 i12 = i1 + 476 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 if ((i11 | 0) != 0) {
  __ZN7WebCore19AnimationControllerD1Ev(i11);
  __ZdlPv(i11);
 }
 i11 = HEAP32[i1 + 472 >> 2] | 0;
 if ((i11 | 0) != 0) {
  __ZN7WebCore12EventHandlerD1Ev(i11);
  __ZdlPv(i11);
 }
 i11 = HEAP32[i1 + 468 >> 2] | 0;
 if ((i11 | 0) != 0) {
  __ZN7WebCore14FrameSelectionD2Ev(i11);
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = HEAP32[i1 + 464 >> 2] | 0;
 if ((i11 | 0) != 0) {
  __ZN7WebCore6EditorD1Ev(i11);
  __ZdlPv(i11);
 }
 i11 = i1 + 460 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 if ((i12 | 0) != 0) {
  __ZN7WebCore16ScriptControllerD1Ev(i12);
  __ZdlPv(i12);
 }
 i12 = HEAP32[i1 + 456 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 + 8 | 0;
   i5 = i11 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i1 + 452 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 + 4 | 0;
   i8 = i11 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = i11 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZN7WebCore19NavigationSchedulerD1Ev(i1 + 376 | 0);
 __ZN7WebCore11FrameLoaderD1Ev(i3);
 __ZN7WebCore9FrameTreeD1Ev(i1 + 40 | 0);
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 | 0;
   i12 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore8SettingsD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i1 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore5FrameC2ERNS_4PageEPNS_21HTMLFrameOwnerElementERNS_17FrameLoaderClientE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 72;
 _memset(i1 + 8 | 0, 0, 20) | 0;
 i5 = i1 + 28 | 0;
 i6 = (i3 | 0) != 0;
 if (i6) {
  i7 = HEAP32[i2 + 60 >> 2] | 0;
 } else {
  i7 = i1;
 }
 HEAP32[i5 >> 2] = i7;
 HEAP32[i1 + 32 >> 2] = i2;
 i7 = HEAP32[i2 + 48 >> 2] | 0;
 i8 = i1 + 36 | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = i1 + 40 | 0;
 i7 = (i3 | 0) == 0;
 if (i7) {
  i10 = 0;
 } else {
  i10 = HEAP32[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i1;
 HEAP32[i1 + 44 >> 2] = i10;
 _memset(i1 + 48 | 0, 0, 24) | 0;
 HEAP32[i1 + 72 >> 2] = -1;
 __ZN7WebCore11FrameLoaderC1ERNS_5FrameERNS_17FrameLoaderClientE(i1 + 80 | 0, i1, i4);
 __ZN7WebCore19NavigationSchedulerC1EPNS_5FrameE(i1 + 376 | 0, i1);
 HEAP32[i1 + 448 >> 2] = i3;
 HEAP32[i1 + 452 >> 2] = 0;
 i4 = i1 + 456 | 0;
 HEAP32[i4 >> 2] = 0;
 i10 = __Znwj(64) | 0;
 __ZN7WebCore16ScriptControllerC1ERNS_5FrameE(i10, i1);
 HEAP32[i1 + 460 >> 2] = i10;
 i10 = __Znwj(120) | 0;
 __ZN7WebCore6EditorC1ERNS_5FrameE(i10, i1);
 HEAP32[i1 + 464 >> 2] = i10;
 i10 = __ZN3WTF10fastMallocEj(200) | 0;
 __ZN7WebCore14FrameSelectionC1EPNS_5FrameE(i10, i1);
 HEAP32[i1 + 468 >> 2] = i10;
 i10 = __Znwj(472) | 0;
 __ZN7WebCore12EventHandlerC1ERNS_5FrameE(i10, i1);
 HEAP32[i1 + 472 >> 2] = i10;
 i10 = __Znwj(8) | 0;
 __ZN7WebCore19AnimationControllerC1ERNS_5FrameE(i10, i1);
 i11 = i1 + 476 | 0;
 HEAP32[i11 >> 2] = i10;
 i10 = __ZNK7WebCore9FrameTree6parentEv(i9) | 0;
 if ((i10 | 0) == 0) {
  d12 = +1;
 } else {
  d12 = +HEAPF32[i10 + 480 >> 2];
 }
 HEAPF32[i1 + 480 >> 2] = d12;
 i10 = __ZNK7WebCore9FrameTree6parentEv(i9) | 0;
 if ((i10 | 0) == 0) {
  d13 = +1;
 } else {
  d13 = +HEAPF32[i10 + 484 >> 2];
 }
 HEAPF32[i1 + 484 >> 2] = d13;
 HEAP8[i1 + 488 | 0] = 0;
 HEAP32[i1 + 492 >> 2] = 0;
 i10 = i1 + 496 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF12AtomicString4initEv();
 __ZN7WebCore9HTMLNames4initEv();
 __ZN7WebCore13QualifiedName4initEv();
 __ZN7WebCore17MediaFeatureNames4initEv();
 __ZN7WebCore8SVGNames4initEv();
 __ZN7WebCore10XLinkNames4initEv();
 __ZN7WebCore11MathMLNames4initEv();
 __ZN7WebCore10XMLNSNames4initEv();
 __ZN7WebCore8XMLNames4initEv();
 __ZN7WebCore21WebKitFontFamilyNames4initEv();
 if (i6) {
  __ZN7WebCore9MainFrame11selfOnlyRefEv(HEAP32[i5 >> 2] | 0);
  i5 = i2 + 88 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  __ZN7WebCore21HTMLFrameOwnerElement15setContentFrameEPNS_5FrameE(i3, i1);
 } else {
  __ZN7WebCore5Frame27setTiledBackingStoreEnabledEb(i1, (HEAP8[(HEAP32[i8 >> 2] | 0) + 196 | 0] & 1) != 0);
 }
 if (i7) {
  return;
 }
 i7 = HEAP32[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 if ((HEAP32[i7 + 496 >> 2] | 0) <= 0) {
  return;
 }
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i7 + 1;
 if ((i7 | 0) > 0) {
  return;
 }
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document43suspendScriptedAnimationControllerCallbacksEv(i7);
 __ZN7WebCore19AnimationController28suspendAnimationsForDocumentEPNS_8DocumentE(HEAP32[i11 >> 2] | 0, HEAP32[i4 >> 2] | 0);
 i11 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 256 >> 2] & 15](i11, 3);
 return;
}
function __ZN7WebCore5FrameC1ERNS_4PageEPNS_21HTMLFrameOwnerElementERNS_17FrameLoaderClientE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 72;
 _memset(i1 + 8 | 0, 0, 20) | 0;
 i5 = i1 + 28 | 0;
 i6 = (i3 | 0) != 0;
 if (i6) {
  i7 = HEAP32[i2 + 60 >> 2] | 0;
 } else {
  i7 = i1;
 }
 HEAP32[i5 >> 2] = i7;
 HEAP32[i1 + 32 >> 2] = i2;
 i7 = HEAP32[i2 + 48 >> 2] | 0;
 i8 = i1 + 36 | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = i1 + 40 | 0;
 i7 = (i3 | 0) == 0;
 if (i7) {
  i10 = 0;
 } else {
  i10 = HEAP32[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 }
 HEAP32[i9 >> 2] = i1;
 HEAP32[i1 + 44 >> 2] = i10;
 _memset(i1 + 48 | 0, 0, 24) | 0;
 HEAP32[i1 + 72 >> 2] = -1;
 __ZN7WebCore11FrameLoaderC1ERNS_5FrameERNS_17FrameLoaderClientE(i1 + 80 | 0, i1, i4);
 __ZN7WebCore19NavigationSchedulerC1EPNS_5FrameE(i1 + 376 | 0, i1);
 HEAP32[i1 + 448 >> 2] = i3;
 HEAP32[i1 + 452 >> 2] = 0;
 i4 = i1 + 456 | 0;
 HEAP32[i4 >> 2] = 0;
 i10 = __Znwj(64) | 0;
 __ZN7WebCore16ScriptControllerC1ERNS_5FrameE(i10, i1);
 HEAP32[i1 + 460 >> 2] = i10;
 i10 = __Znwj(120) | 0;
 __ZN7WebCore6EditorC1ERNS_5FrameE(i10, i1);
 HEAP32[i1 + 464 >> 2] = i10;
 i10 = __ZN3WTF10fastMallocEj(200) | 0;
 __ZN7WebCore14FrameSelectionC1EPNS_5FrameE(i10, i1);
 HEAP32[i1 + 468 >> 2] = i10;
 i10 = __Znwj(472) | 0;
 __ZN7WebCore12EventHandlerC1ERNS_5FrameE(i10, i1);
 HEAP32[i1 + 472 >> 2] = i10;
 i10 = __Znwj(8) | 0;
 __ZN7WebCore19AnimationControllerC1ERNS_5FrameE(i10, i1);
 i11 = i1 + 476 | 0;
 HEAP32[i11 >> 2] = i10;
 i10 = __ZNK7WebCore9FrameTree6parentEv(i9) | 0;
 if ((i10 | 0) == 0) {
  d12 = +1;
 } else {
  d12 = +HEAPF32[i10 + 480 >> 2];
 }
 HEAPF32[i1 + 480 >> 2] = d12;
 i10 = __ZNK7WebCore9FrameTree6parentEv(i9) | 0;
 if ((i10 | 0) == 0) {
  d13 = +1;
 } else {
  d13 = +HEAPF32[i10 + 484 >> 2];
 }
 HEAPF32[i1 + 484 >> 2] = d13;
 HEAP8[i1 + 488 | 0] = 0;
 HEAP32[i1 + 492 >> 2] = 0;
 i10 = i1 + 496 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF12AtomicString4initEv();
 __ZN7WebCore9HTMLNames4initEv();
 __ZN7WebCore13QualifiedName4initEv();
 __ZN7WebCore17MediaFeatureNames4initEv();
 __ZN7WebCore8SVGNames4initEv();
 __ZN7WebCore10XLinkNames4initEv();
 __ZN7WebCore11MathMLNames4initEv();
 __ZN7WebCore10XMLNSNames4initEv();
 __ZN7WebCore8XMLNames4initEv();
 __ZN7WebCore21WebKitFontFamilyNames4initEv();
 if (i6) {
  __ZN7WebCore9MainFrame11selfOnlyRefEv(HEAP32[i5 >> 2] | 0);
  i5 = i2 + 88 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  __ZN7WebCore21HTMLFrameOwnerElement15setContentFrameEPNS_5FrameE(i3, i1);
 } else {
  __ZN7WebCore5Frame27setTiledBackingStoreEnabledEb(i1, (HEAP8[(HEAP32[i8 >> 2] | 0) + 196 | 0] & 1) != 0);
 }
 if (i7) {
  return;
 }
 i7 = HEAP32[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 if ((HEAP32[i7 + 496 >> 2] | 0) <= 0) {
  return;
 }
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i7 + 1;
 if ((i7 | 0) > 0) {
  return;
 }
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document43suspendScriptedAnimationControllerCallbacksEv(i7);
 __ZN7WebCore19AnimationController28suspendAnimationsForDocumentEPNS_8DocumentE(HEAP32[i11 >> 2] | 0, HEAP32[i4 >> 2] | 0);
 i11 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 256 >> 2] & 15](i11, 3);
 return;
}
function __ZN7WebCoreL24matchLabelsAgainstStringERKN3WTF6VectorINS0_6StringELj0ENS0_15CrashOnOverflowEEERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    break;
   }
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i3;
   i12 = i3 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   __ZN3WTF6StringC1EPKc(i8, H_BASE + 56 | 0);
   __ZN7WebCore17RegularExpressionC1ERKN3WTF6StringENS1_19TextCaseSensitivityENS_13MultilineModeE(i7, i8, 0, 0);
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 48 | 0);
   __ZN7WebCore7replaceERN3WTF6StringERKNS_17RegularExpressionERKS1_(i6, i7, i9);
   i12 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   __ZN7WebCore17RegularExpressionD1Ev(i7);
   i12 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i14 = i12 | 0;
     i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i14 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     __ZN3WTF10StringImpl7replaceEtt(i5, i12, 95, 32);
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = HEAP32[i5 >> 2];
     if ((i13 | 0) == 0) {
      break;
     }
     i14 = i13 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      break;
     }
    }
   } while (0);
   __ZN7WebCoreL21createRegExpForLabelsERKN3WTF6VectorINS0_6StringELj0ENS0_15CrashOnOverflowEEE(i10, i2);
   i12 = i10 | 0;
   i15 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i12 = __ZNK7WebCore17RegularExpression5matchERKN3WTF6StringEiPi(i15, i6, 0, 0) | 0;
   do {
    if ((i12 | 0) == -1) {
     i16 = 21;
    } else {
     i14 = -1;
     i13 = -1;
     i17 = i12;
     while (1) {
      i18 = __ZNK7WebCore17RegularExpression13matchedLengthEv(i15) | 0;
      i19 = (i18 | 0) < (i13 | 0);
      i14 = i19 ? i14 : i17;
      i13 = i19 ? i13 : i18;
      i17 = __ZNK7WebCore17RegularExpression5matchERKN3WTF6StringEiPi(i15, i6, i17 + 1 | 0, 0) | 0;
      if ((i17 | 0) == -1) {
       break;
      }
     }
     if ((i14 | 0) == -1) {
      i16 = 21;
      break;
     }
     __ZNK3WTF6String9substringEjj(i1, i6, i14, i13);
    }
   } while (0);
   if ((i16 | 0) == 21) {
    HEAP32[i1 >> 2] = 0;
   }
   if ((i15 | 0) != 0) {
    __ZN7WebCore17RegularExpressionD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
   }
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i17 = i12 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i17 >> 2] = i18;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Frame25injectUserScriptsForWorldERNS_15DOMWrapperWorldERKN3WTF6VectorINSt3__110unique_ptrINS_10UserScriptENS5_14default_deleteIS7_EEEELj0ENS3_15CrashOnOverflowEEENS_23UserScriptInjectionTimeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 88 | 0;
 i9 = i3 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i11 = HEAP32[i1 + 456 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i12 = i3 | 0;
 i3 = i1 + 448 | 0;
 i13 = i11 + 356 | 0;
 i11 = i1 + 460 | 0;
 i1 = i8 | 0;
 i14 = i8 + 4 | 0;
 i15 = i7 + 28 | 0;
 i16 = i7 + 24 | 0;
 i17 = i7 + 4 | 0;
 i18 = i7 | 0;
 i19 = 0;
 i20 = i10;
 while (1) {
  if (i20 >>> 0 <= i19 >>> 0) {
   i21 = 5;
   break;
  }
  i22 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i19 << 2) >> 2] | 0;
  if ((HEAP32[i22 + 80 >> 2] | 0) == 1) {
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    i21 = 8;
   }
  } else {
   i21 = 8;
  }
  do {
   if ((i21 | 0) == 8) {
    i21 = 0;
    if ((HEAP32[i22 + 76 >> 2] | 0) != (i4 | 0)) {
     break;
    }
    if (!(__ZN7WebCore21UserContentURLPattern15matchesPatternsERKNS_3URLERKN3WTF6VectorINS4_6StringELj0ENS4_15CrashOnOverflowEEESA_(i13, i22 + 52 | 0, i22 + 64 | 0) | 0)) {
     break;
    }
    i23 = HEAP32[i11 >> 2] | 0;
    HEAP32[i1 >> 2] = 0;
    HEAP32[i14 >> 2] = 0;
    __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i7, i22 | 0, i22 + 4 | 0, i8);
    __ZN7WebCore16ScriptController15evaluateInWorldERKNS_16ScriptSourceCodeERNS_15DOMWrapperWorldE(i6, i23, i7, i2);
    __ZN10Deprecated11ScriptValueD1Ev(i6);
    i23 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i24 = i23 | 0;
      i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
      if ((i25 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       break;
      } else {
       HEAP32[i24 >> 2] = i25;
       break;
      }
     }
    } while (0);
    __ZN7WebCore24CachedResourceHandleBaseD2Ev(i16);
    i23 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i25 = i23 + 4 | 0;
      i24 = i25 | 0;
      i26 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      if ((i26 | 0) != 0) {
       HEAP32[i24 >> 2] = i26;
       break;
      }
      i26 = i25 - 4 | 0;
      if ((i26 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 15](i26);
     }
    } while (0);
    i23 = HEAP32[i18 >> 2] | 0;
    if ((i23 | 0) == 0) {
     break;
    }
    i26 = i23 + 4 | 0;
    i23 = i26 | 0;
    i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    if ((i25 | 0) != 0) {
     HEAP32[i23 >> 2] = i25;
     break;
    }
    i25 = i26 - 4 | 0;
    if ((i25 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 15](i25);
   }
  } while (0);
  i22 = i19 + 1 | 0;
  if (i22 >>> 0 >= i10 >>> 0) {
   i21 = 28;
   break;
  }
  i19 = i22;
  i20 = HEAP32[i9 >> 2] | 0;
 }
 if ((i21 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i21 | 0) == 28) {
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore24FrameDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore24FrameDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
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
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
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
 if ((i13 | 0) == 11) {
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
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore24FrameDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
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
 HEAP32[i12 >> 2] = H_BASE + 128;
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
 i4 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 3](i9) | 0) >> 2] | 0;
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
function __ZN7WebCore5Frame25setPageAndTextZoomFactorsEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i1 + 480 | 0;
 do {
  if (+HEAPF32[i7 >> 2] == d2) {
   if (+HEAPF32[i1 + 484 >> 2] != d3) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i8 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = HEAP32[i1 + 456 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore6Editor31dismissCorrectionPanelAsIgnoredEv(HEAP32[i1 + 464 >> 2] | 0);
 do {
  if ((HEAP8[i9 + 1576 | 0] & 32) != 0) {
   if (__ZNK7WebCore11SVGDocument17zoomAndPanEnabledEv(i9) | 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if (+HEAPF32[i7 >> 2] != d2) {
   i10 = HEAP32[i1 + 452 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i5 | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 164 >> 2] & 3](i5, i10 | 0, 0);
   d12 = d2 / +HEAPF32[i7 >> 2];
   i13 = ~~(+(HEAP32[i11 + 4 >> 2] | 0) * d12);
   HEAP32[i6 >> 2] = ~~(+(HEAP32[i11 >> 2] | 0) * d12);
   HEAP32[i6 + 4 >> 2] = i13;
   __ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE(i10, i6);
  }
 } while (0);
 HEAPF32[i7 >> 2] = d2;
 i6 = i1 + 484 | 0;
 HEAPF32[i6 >> 2] = d3;
 __ZN7WebCore8Document11recalcStyleENS_5Style6ChangeE(i9, 4);
 i5 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i10 = i5 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i5;
  while (1) {
   __ZN7WebCore5Frame25setPageAndTextZoomFactorsEff(i10, +HEAPF32[i7 >> 2], +HEAPF32[i6 >> 2]);
   i5 = HEAP32[i10 + 56 >> 2] | 0;
   i13 = (i5 | 0) == 0;
   if (!i13) {
    i11 = i5 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   i11 = i10 + 4 | 0;
   i14 = i11 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   do {
    if ((i15 | 0) == 0) {
     i16 = i11 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 15](i16);
    } else {
     HEAP32[i14 >> 2] = i15;
    }
   } while (0);
   if (i13) {
    break;
   } else {
    i10 = i5;
   }
  }
 }
 i10 = HEAP32[i1 + 452 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i6 = HEAP32[i9 + 1584 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if ((HEAP32[i6 + 20 >> 2] & 31 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore9FrameView14didFirstLayoutEv(i10) | 0)) {
    break;
   }
   __ZN7WebCore9FrameView6layoutEb(i10, 1);
  }
 } while (0);
 if ((HEAP32[i1 + 28 >> 2] | 0) != (i1 | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore9PageCache27markPagesForFullStyleRecalcEPNS_4PageE(__ZN7WebCore9pageCacheEv() | 0, i8);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i1 + 456 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i11 + 340 >> 2] | 0;
 i13 = (i12 | 0) == 0;
 if (i13) {
  i14 = 0;
  i15 = i11;
 } else {
  i11 = i12 + 136 | 0;
  i16 = HEAP8[i11] | 0;
  HEAP8[i11] = i16 | 4;
  i14 = i16 & 4;
  i15 = HEAP32[i10 >> 2] | 0;
 }
 HEAP8[i15 + 660 | 0] = i2 & 1;
 i15 = i1 + 452 | 0;
 __ZN7WebCore9FrameView26adjustMediaTypeForPrintingEb(HEAP32[i15 >> 2] | 0, i2);
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[i10 >> 2] | 0, 0);
 do {
  if ((HEAP8[(HEAP32[i10 >> 2] | 0) + 660 | 0] & 1) == 0) {
   i17 = HEAP32[i15 >> 2] | 0;
   i18 = 9;
  } else {
   i16 = i1 + 40 | 0;
   if ((__ZNK7WebCore9FrameTree6parentEv(i16) | 0) == 0) {
    i19 = HEAP32[i15 >> 2] | 0;
   } else {
    i11 = (HEAP8[(HEAP32[(__ZNK7WebCore9FrameTree6parentEv(i16) | 0) + 456 >> 2] | 0) + 660 | 0] & 1) == 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if (i11) {
     i19 = i16;
    } else {
     i17 = i16;
     i18 = 9;
     break;
    }
   }
   __ZN7WebCore9FrameView24forceLayoutForPaginationERKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i19, i3, i4, d5, i6);
  }
 } while (0);
 do {
  if ((i18 | 0) == 9) {
   __ZN7WebCore9FrameView11forceLayoutEb(i17, 0);
   if ((i6 | 0) != 1) {
    break;
   }
   __ZN7WebCore9FrameView14adjustViewSizeEv(HEAP32[i15 >> 2] | 0);
  }
 } while (0);
 i15 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i1 = i15 + 4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i1 = i8 | 0;
  i17 = i8 + 4 | 0;
  i18 = i9 | 0;
  i4 = i9 + 4 | 0;
  i3 = i15;
  while (1) {
   HEAPF32[i1 >> 2] = +0;
   HEAPF32[i17 >> 2] = +0;
   HEAPF32[i18 >> 2] = +0;
   HEAPF32[i4 >> 2] = +0;
   __ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i3, i2, i8, i9, +0, i6);
   i15 = HEAP32[i3 + 56 >> 2] | 0;
   i19 = (i15 | 0) == 0;
   if (!i19) {
    i10 = i15 + 4 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = i3 + 4 | 0;
   i16 = i10 | 0;
   i11 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   do {
    if ((i11 | 0) == 0) {
     i20 = i10 - 4 | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 15](i20);
    } else {
     HEAP32[i16 >> 2] = i11;
    }
   } while (0);
   if (i19) {
    break;
   } else {
    i3 = i15;
   }
  }
 }
 if (i13) {
  STACKTOP = i7;
  return;
 }
 i13 = i12 + 136 | 0;
 HEAP8[i13] = HEAP8[i13] & -5 | i14;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore5Frame14willDetachPageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = __ZNK7WebCore9FrameTree6parentEv(i1 + 40 | 0) | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore11FrameLoader17checkLoadCompleteEv(i4 + 80 | 0);
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 i6 = i4 + (i5 << 2) | 0;
 L4 : do {
  if ((HEAP32[i1 + 20 >> 2] | 0) != 0) {
   L6 : do {
    if ((i5 | 0) == 0) {
     i7 = i4;
    } else {
     i8 = i4;
     while (1) {
      i9 = HEAP32[i8 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i7 = i8;
       break L6;
      }
      i8 = i8 + 4 | 0;
      if ((i8 | 0) == (i6 | 0)) {
       break L4;
      }
     }
    }
   } while (0);
   if ((i7 | 0) == (i6 | 0)) {
    break;
   } else {
    i10 = i7;
   }
   while (1) {
    i8 = HEAP32[i10 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
    i8 = i10 + 4 | 0;
    if ((i8 | 0) == (i6 | 0)) {
     break L4;
    } else {
     i11 = i8;
    }
    while (1) {
     i8 = HEAP32[i11 >> 2] | 0;
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      break;
     }
     i8 = i11 + 4 | 0;
     if ((i8 | 0) == (i6 | 0)) {
      break L4;
     } else {
      i11 = i8;
     }
    }
    if ((i11 | 0) == (i6 | 0)) {
     break;
    } else {
     i10 = i11;
    }
   }
  }
 } while (0);
 i11 = i1 + 32 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i6 = HEAP32[i10 + 32 >> 2] | 0;
   do {
    if ((HEAP32[i6 + 4 >> 2] | 0) == (i1 | 0)) {
     i7 = i3 | 0;
     HEAP32[i7 >> 2] = 0;
     __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i6, i3);
     i4 = HEAP32[i7 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     i7 = i4 + 4 | 0;
     i4 = i7 | 0;
     i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) != 0) {
      HEAP32[i4 >> 2] = i5;
      break;
     }
     i5 = i7 - 4 | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
    }
   } while (0);
   i6 = HEAP32[i11 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if ((__ZN7WebCore4Page20scrollingCoordinatorEv(i6) | 0) == 0) {
    break;
   }
   i6 = i1 + 452 | 0;
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    break;
   }
   i5 = __ZN7WebCore4Page20scrollingCoordinatorEv(HEAP32[i11 >> 2] | 0) | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 80 >> 2] & 15](i5, (i7 | 0) == 0 ? 0 : i7 + 36 | 0);
  }
 } while (0);
 i11 = i1 + 460 | 0;
 __ZN7WebCore16ScriptController18clearScriptObjectsEv(HEAP32[i11 >> 2] | 0);
 __ZN7WebCore16ScriptController27updatePlatformScriptObjectsEv(HEAP32[i11 >> 2] | 0);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore24FrameDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
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
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
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
function __ZN7WebCore5Frame25matchLabelsAgainstElementERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEEPNS_7ElementE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = HEAP32[i4 + 48 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) == 0) {
   i7 = __ZN3WTF8nullAtomE;
  } else {
   i8 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i8 & 268435456 | 0) == 0) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   if ((i8 & 1 | 0) == 0) {
    i9 = i8 >>> 1 & 134217727;
    i10 = i6 + 20 | 0;
   } else {
    i8 = i6 + 24 | 0;
    i9 = HEAP32[i8 + 8 >> 2] | 0;
    i10 = HEAP32[i8 >> 2] | 0;
   }
   if ((i9 | 0) == 0) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   i8 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
   i11 = i8 + 12 | 0;
   i12 = i8 + 16 | 0;
   i13 = 0;
   while (1) {
    i14 = i10 + (i13 << 3) | 0;
    i15 = HEAP32[i14 >> 2] | 0;
    if ((i15 | 0) == (i8 | 0)) {
     break;
    }
    if ((HEAP32[i15 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
     if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
      break;
     }
    }
    i15 = i13 + 1 | 0;
    if (i15 >>> 0 < i9 >>> 0) {
     i13 = i15;
    } else {
     i7 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i7 = (i14 | 0) == 0 ? __ZN3WTF8nullAtomE : i10 + (i13 << 3) + 4 | 0;
  }
 } while (0);
 __ZN7WebCoreL24matchLabelsAgainstStringERKN3WTF6VectorINS0_6StringELj0ENS0_15CrashOnOverflowEEERKS2_(i5, i3, HEAP32[i7 >> 2] | 0);
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = 0;
   HEAP32[i1 >> 2] = i5;
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZN7WebCoreL24matchLabelsAgainstStringERKN3WTF6VectorINS0_6StringELj0ENS0_15CrashOnOverflowEEERKS2_(i1, i3, HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i4, __ZN7WebCore9HTMLNames6idAttrE) | 0) >> 2] | 0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i4 | 0;
 i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore5Frame17injectUserScriptsENS_23UserScriptInjectionTimeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 32 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 do {
  if (__ZNK7WebCore23FrameLoaderStateMachine28creatingInitialEmptyDocumentEv(i1 + 104 | 0) | 0) {
   if ((HEAP8[(HEAP32[i1 + 36 >> 2] | 0) + 189 | 0] | 0) < 0) {
    break;
   }
   return;
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = i4 + 160 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore4Page9initGroupEv(i4);
  i6 = HEAP32[i3 >> 2] | 0;
 } else {
  i6 = i5;
 }
 i5 = HEAP32[i6 + 96 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i6 = HEAP32[i5 >> 2] | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 i4 = i6 + (i3 << 3) | 0;
 if ((HEAP32[i5 + 12 >> 2] | 0) == 0) {
  return;
 }
 L17 : do {
  if ((i3 | 0) == 0) {
   i7 = i6;
  } else {
   i5 = i6;
   while (1) {
    i8 = HEAP32[i5 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i7 = i5;
     break L17;
    }
    i5 = i5 + 8 | 0;
    if ((i5 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i7 | 0) == (i4 | 0)) {
  return;
 } else {
  i9 = i7;
 }
 L25 : while (1) {
  __ZN7WebCore5Frame25injectUserScriptsForWorldERNS_15DOMWrapperWorldERKN3WTF6VectorINSt3__110unique_ptrINS_10UserScriptENS5_14default_deleteIS7_EEEELj0ENS3_15CrashOnOverflowEEENS_23UserScriptInjectionTimeE(i1, HEAP32[i9 >> 2] | 0, HEAP32[i9 + 4 >> 2] | 0, i2);
  i7 = i9 + 8 | 0;
  if ((i7 | 0) == (i4 | 0)) {
   i10 = 21;
   break;
  } else {
   i11 = i7;
  }
  while (1) {
   i7 = HEAP32[i11 >> 2] | 0;
   if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
    break;
   }
   i7 = i11 + 8 | 0;
   if ((i7 | 0) == (i4 | 0)) {
    i10 = 24;
    break L25;
   } else {
    i11 = i7;
   }
  }
  if ((i11 | 0) == (i4 | 0)) {
   i10 = 22;
   break;
  } else {
   i9 = i11;
  }
 }
 if ((i10 | 0) == 21) {
  return;
 } else if ((i10 | 0) == 22) {
  return;
 } else if ((i10 | 0) == 24) {
  return;
 }
}
function __ZN3WTF7HashSetIPN7WebCore24FrameDestructionObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
  L3 : do {
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
      break L3;
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
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore24FrameDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 452 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore9FrameView16prepareForDetachEv(i4);
 }
 i4 = i2 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i2 = HEAP32[i1 + 456 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if ((HEAP32[i2 + 1584 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP8[i2 + 2285 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP8[i2 + 1433 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore8Document21prepareForDestructionEv(i2);
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore9FrameView18unscheduleRelayoutEv(i2);
 }
 __ZN7WebCore12EventHandler5clearEv(HEAP32[i1 + 472 >> 2] | 0);
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i2 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 __ZN7WebCore11FrameLoader37resetMultipleFormSubmissionProtectionEv(i1 + 80 | 0);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 492 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore10ScrollView23setPaintsEntireContentsEb(i4 | 0, 1);
 return;
}
function __ZN7WebCore5Frame15documentAtPointERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 120 | 0;
 i7 = i3 + 128 | 0;
 i8 = i3 + 240 | 0;
 i9 = i3 + 248 | 0;
 i10 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i4, i10 | 0, i2);
 i2 = i4 | 0;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i10 = i4 + 4 | 0;
 HEAP32[i6 + 4 >> 2] = HEAP32[i10 >> 2];
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i5, i6);
 i6 = HEAP32[i1 + 456 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 1584 >> 2] | 0) == 0) {
    break;
   }
   i4 = HEAP32[i1 + 472 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 >> 2] = 0;
   HEAP32[i9 + 4 >> 2] = 0;
   __ZN7WebCore12EventHandler20hitTestResultAtPointERKNS_11LayoutPointEjRKNS_10LayoutSizeE(i7, i4, i8, 262, i9);
   __ZN7WebCore13HitTestResultaSERKS0_(i5, i7) | 0;
   __ZN7WebCore13HitTestResultD1Ev(i7);
  }
 } while (0);
 i7 = HEAP32[i5 + 72 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
 }
 __ZN7WebCore13HitTestResultD1Ev(i5);
 i11 = i12;
 STACKTOP = i3;
 return i11 | 0;
}
function __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 1 | 0) == 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 3);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i5 + 8 | 0;
  i5 = i6 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 } else {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, 0, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i4 + 8 | 0;
  i4 = i6 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore16VisibleSelectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore14FrameSelectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 120 | 0);
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 8 | 0;
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 + 32 | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i1 + 32 | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i6 = i1 + 32 | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i6 = i1 + 32 | 0;
 __ZN7WebCore16VisibleSelectionD2Ev(i6);
 return;
}
function __ZN7WebCore5Frame25tiledBackingStorePaintEndERKN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 452 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i2 + 8 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i2 | 0;
 i2 = 0;
 i10 = i6;
 i6 = i8;
 while (1) {
  i11 = HEAP32[i10 + 20 >> 2] | 0;
  if (i6 >>> 0 <= i2 >>> 0) {
   i12 = 6;
   break;
  }
  i13 = HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] | 0;
  __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_7IntRectE(i4, HEAP32[i7 >> 2] | 0, (HEAP32[i9 >> 2] | 0) + (i2 << 4) | 0);
  FUNCTION_TABLE_viii[i13 & 3](i11, i4, 0);
  i11 = i2 + 1 | 0;
  if (i11 >>> 0 >= i8 >>> 0) {
   i12 = 13;
   break;
  }
  i2 = i11;
  i10 = HEAP32[i5 >> 2] | 0;
  i6 = HEAP32[i1 >> 2] | 0;
 }
 if ((i12 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i12 | 0) == 13) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore5Frame30deviceOrPageScaleFactorChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  i3 = i2;
  while (1) {
   __ZN7WebCore5Frame30deviceOrPageScaleFactorChangedEv(i3);
   i2 = HEAP32[i3 + 56 >> 2] | 0;
   i4 = (i2 | 0) == 0;
   if (!i4) {
    i5 = i2 + 4 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   }
   i5 = i3 + 4 | 0;
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   do {
    if ((i7 | 0) == 0) {
     i8 = i5 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
    } else {
     HEAP32[i6 >> 2] = i7;
    }
   } while (0);
   if (i4) {
    break;
   } else {
    i3 = i2;
   }
  }
 }
 i3 = HEAP32[i1 + 456 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 1584 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor30deviceOrPageScaleFactorChangedEv(__ZN7WebCore10RenderView10compositorEv(i1) | 0);
 return;
}
function __ZN7WebCore5Frame11setDocumentEN3WTF10PassRefPtrINS_8DocumentEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 456 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 1584 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP8[i1 + 2285 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP8[i1 + 1433 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore8Document21prepareForDestructionEv(i1);
  }
 } while (0);
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document31didBecomeCurrentDocumentInFrameEv(i4);
 return;
}
function __ZN7WebCore5Frame27resizePageRectsKeepingRatioERKNS_9FloatSizeES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 i5 = HEAP32[i2 + 456 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = HEAP32[i5 + 1584 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i6 | 0) == 3 | (i6 | 0) == 0) {
    d7 = +Math_floor(+HEAPF32[i4 >> 2]);
    d8 = d7;
    d9 = +Math_floor(+HEAPF32[i3 + 4 >> 2] / +HEAPF32[i3 >> 2] * d7);
   } else {
    d7 = +Math_floor(+HEAPF32[i4 + 4 >> 2]);
    d8 = +Math_floor(+HEAPF32[i3 >> 2] / +HEAPF32[i3 + 4 >> 2] * d7);
    d9 = d7;
   }
   i6 = i1;
   d7 = +d8;
   d10 = +d9;
   HEAPF32[i6 >> 2] = d7;
   HEAPF32[i6 + 4 >> 2] = d10;
   return;
  }
 } while (0);
 HEAPF32[i1 >> 2] = +0;
 HEAPF32[i1 + 4 >> 2] = +0;
 return;
}
function __ZN7WebCore5Frame27setTiledBackingStoreEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 492 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (!i2) {
  HEAP32[i3 >> 2] = 0;
  if ((i4 | 0) == 0) {
   return;
  }
  __ZN7WebCore17TiledBackingStoreD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 if ((i4 | 0) != 0) {
  return;
 }
 i4 = __ZN3WTF10fastMallocEj(248) | 0;
 __ZN7WebCore17TiledBackingStoreC1EPNS_23TiledBackingStoreClientE(i4, i1 | 0);
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 if ((i2 | 0) == 0) {
  i5 = i4;
 } else {
  __ZN7WebCore17TiledBackingStoreD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i5 = HEAP32[i3 >> 2] | 0;
 }
 HEAP8[i5 + 244 | 0] = 1;
 i5 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore10ScrollView23setPaintsEntireContentsEb(i5 | 0, 1);
 return;
}
function __ZNK7WebCore5Frame12isURLAllowedERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 88 >> 2] | 0) > 999) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = 0;
  i5 = i1;
 }
 while (1) {
  i1 = __ZN7WebCore31equalIgnoringFragmentIdentifierERKNS_3URLES2_((HEAP32[i5 + 456 >> 2] | 0) + 356 | 0, i2) | 0;
  if (i1 & i4) {
   i3 = 0;
   i6 = 6;
   break;
  }
  i7 = __ZNK7WebCore9FrameTree6parentEv(i5 + 40 | 0) | 0;
  if ((i7 | 0) == 0) {
   i3 = 1;
   i6 = 5;
   break;
  } else {
   i4 = i4 | i1;
   i5 = i7;
  }
 }
 if ((i6 | 0) == 5) {
  return i3 | 0;
 } else if ((i6 | 0) == 6) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore5Frame36suspendActiveDOMObjectsAndAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 496 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3 + 1;
 if ((i3 | 0) > 0) {
  return;
 }
 i3 = i1 + 456 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document43suspendScriptedAnimationControllerCallbacksEv(i2);
 __ZN7WebCore19AnimationController28suspendAnimationsForDocumentEPNS_8DocumentE(HEAP32[i1 + 476 >> 2] | 0, HEAP32[i3 >> 2] | 0);
 i1 = HEAP32[i3 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 256 >> 2] & 15](i1, 3);
 return;
}
function __ZN7WebCore5Frame35resumeActiveDOMObjectsAndAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 496 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) > 0) {
  return;
 }
 i3 = i1 + 456 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 260 >> 2] & 15](i2, 3);
 __ZN7WebCore19AnimationController27resumeAnimationsForDocumentEPNS_8DocumentE(HEAP32[i1 + 476 >> 2] | 0, HEAP32[i3 >> 2] | 0);
 __ZN7WebCore8Document42resumeScriptedAnimationControllerCallbacksEv(HEAP32[i3 >> 2] | 0);
 return;
}
function __ZN7WebCore5Frame29tiledBackingStoreContentsRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 452 >> 2] | 0;
 if ((i5 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i3;
  return;
 } else {
  __ZNK7WebCore10ScrollView12contentsSizeEv(i4, i5 | 0);
  i5 = i1;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = 0;
  i5 = i1 + 8 | 0;
  i1 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 2;
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
function __ZN7WebCore5Frame22addDestructionObserverEPNS_24FrameDestructionObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore24FrameDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 8 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5Frame13ownerRendererEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 448 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i1 | 0;
 } else {
  i4 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 228 >> 2] & 3](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = i1;
 return i3 | 0;
}
function __ZNK7WebCore5Frame15layerTreeAsTextEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i2 + 456 | 0;
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[i4 >> 2] | 0);
 i2 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = HEAP32[i2 + 1584 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor15layerTreeAsTextEj(i1, __ZN7WebCore10RenderView10compositorEv(i4) | 0, i3);
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore5Frame11clearTimersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 456 >> 2] | 0;
 __ZN7WebCore9FrameView18unscheduleRelayoutEv(i2);
 i1 = i2 + 216 | 0;
 __ZN7WebCore19AnimationController28suspendAnimationsForDocumentEPNS_8DocumentE(HEAP32[(HEAP32[i1 >> 2] | 0) + 476 >> 2] | 0, i3);
 __ZN7WebCore12EventHandler19stopAutoscrollTimerEb(HEAP32[(HEAP32[i1 >> 2] | 0) + 472 >> 2] | 0, 0);
 return;
}
function __ZN7WebCore5Frame11clearTimersEPNS_9FrameViewEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore9FrameView18unscheduleRelayoutEv(i1);
 i3 = i1 + 216 | 0;
 __ZN7WebCore19AnimationController28suspendAnimationsForDocumentEPNS_8DocumentE(HEAP32[(HEAP32[i3 >> 2] | 0) + 476 >> 2] | 0, i2);
 __ZN7WebCore12EventHandler19stopAutoscrollTimerEb(HEAP32[(HEAP32[i3 >> 2] | 0) + 472 >> 2] | 0, 0);
 return;
}
function __ZN3JSC20StringSourceProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
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
function __ZNK7WebCore5Frame31displayStringModifiedByEncodingERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 456 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZNK7WebCore8Document31displayStringModifiedByEncodingERKN3WTF6StringE(i1, i4, i3);
  return;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore5Frame22disconnectOwnerElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 448 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i2 >> 2] = 0;
  return;
 }
 __ZN7WebCore21HTMLFrameOwnerElement17clearContentFrameEv(i3);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i2 >> 2] = 0;
  return;
 }
 i1 = i3 + 88 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) - 1;
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN3JSC20StringSourceProviderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
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
function __ZN7WebCore5Frame14frameForWidgetEPKNS_6WidgetE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __ZN7WebCore12RenderWidget4findEPKNS_6WidgetE(i1) | 0;
 if ((i2 | 0) == 0) {
  i3 = i1 + 216 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  return i4 | 0;
 } else {
  i3 = (HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore5Frame23shouldUsePrintingLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[(HEAP32[i1 + 456 >> 2] | 0) + 660 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 40 | 0;
 if ((__ZNK7WebCore9FrameTree6parentEv(i3) | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP8[(HEAP32[(__ZNK7WebCore9FrameTree6parentEv(i3) | 0) + 456 >> 2] | 0) + 660 | 0] & 1) == 0;
 return i2 | 0;
}
function __ZN7WebCore5Frame25removeDestructionObserverEPNS_24FrameDestructionObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore24FrameDestructionObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 8 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5Frame16frameScaleFactorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d3 = +1;
  return +d3;
 }
 if ((HEAP32[i2 + 60 >> 2] | 0) != (i1 | 0)) {
  d3 = +1;
  return +d3;
 }
 if ((HEAP8[(HEAP32[i1 + 36 >> 2] | 0) + 183 | 0] | 0) < 0) {
  d3 = +1;
  return +d3;
 }
 d3 = +HEAPF32[i2 + 112 >> 2];
 return +d3;
}
function __ZN7WebCore5Frame28tiledBackingStoreVisibleRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  return;
 } else {
  i2 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 360 >> 2] & 15](i1, i2);
  return;
 }
}
function __ZN7WebCore5Frame6createEPNS_4PageEPNS_21HTMLFrameOwnerElementEPNS_17FrameLoaderClientE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = __ZN3WTF10fastMallocEj(504) | 0;
 __ZN7WebCore5FrameC2ERNS_4PageEPNS_21HTMLFrameOwnerElementERNS_17FrameLoaderClientE(i5, i2, i3, i4);
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZN7WebCore5Frame27tiledBackingStorePaintBeginEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 452 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore9FrameView37updateLayoutAndStyleIfNeededRecursiveEv(i1);
 __ZN7WebCore9FrameView21flushDeferredRepaintsEv(HEAP32[i2 >> 2] | 0);
 return;
}
function __ZN7WebCore5Frame22tiledBackingStorePaintEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore9FrameView13paintContentsEPNS_15GraphicsContextERKNS_7IntRectE(i4, i2, i3);
 return;
}
function __ZNK7WebCore5Frame32tiledBackingStoreBackgroundColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 452 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP8[i1 + 4 | 0] = 0;
  return;
 } else {
  __ZNK7WebCore9FrameView19baseBackgroundColorEv(i1, i3);
  return;
 }
}
function __ZNK7WebCore5Frame25trackedRepaintRectsAsTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 452 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZNK7WebCore9FrameView25trackedRepaintRectsAsTextEv(i1, i3);
  return;
 }
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore5Frame15contentRendererEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 456 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 1584 >> 2] | 0;
 return i3 | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore5Frame17setTextZoomFactorEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore5Frame25setPageAndTextZoomFactorsEff(i1, +HEAPF32[i1 + 480 >> 2], d2);
 return;
}
function __ZN7WebCore5Frame17setPageZoomFactorEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore5Frame25setPageAndTextZoomFactorsEff(i1, d2, +HEAPF32[i1 + 484 >> 2]);
 return;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN7WebCore23TiledBackingStoreClient39tiledBackingStoreHasPendingTileCreationEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore5FrameD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore5FrameD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK3JSC20StringSourceProvider6sourceEv(i1) {
 i1 = i1 | 0;
 return i1 + 24 | 0;
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore5FrameD2Ev,b0,__ZN7WebCore23TiledBackingStoreClient39tiledBackingStoreHasPendingTileCreationEv,b0,__ZN7WebCore5FrameD0Ev,b0,__ZN7WebCore5Frame27tiledBackingStorePaintBeginEv,b0,__ZN3JSC20StringSourceProviderD0Ev,b0,__ZN3JSC20StringSourceProviderD1Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore5Frame28tiledBackingStoreVisibleRectEv,b1,__ZNK7WebCore5Frame32tiledBackingStoreBackgroundColorEv,b1,__ZN7WebCore5Frame29tiledBackingStoreContentsRectEv,b1,__ZN7WebCore5Frame25tiledBackingStorePaintEndERKN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEE,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK3JSC20StringSourceProvider6sourceEv,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore5Frame22tiledBackingStorePaintEPNS_15GraphicsContextERKNS_7IntRectE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore5FrameC2ERNS_4PageEPNS_21HTMLFrameOwnerElementERNS_17FrameLoaderClientE,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5trTagE": __ZN7WebCore9HTMLNames5trTagE, "__ZN7WebCore9HTMLNames7formTagE": __ZN7WebCore9HTMLNames7formTagE, "__ZN7WebCore9HTMLNames5tdTagE": __ZN7WebCore9HTMLNames5tdTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames8nameAttrE": __ZN7WebCore9HTMLNames8nameAttrE, "__ZN7WebCore9HTMLNames6idAttrE": __ZN7WebCore9HTMLNames6idAttrE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore5FrameD2Ev","_strlen","__ZN7WebCore5Frame28tiledBackingStoreVisibleRectEv","__ZN7WebCore5FrameD0Ev","__ZNK7WebCore5Frame16frameScaleFactorEv","__ZN7WebCore5Frame35resumeActiveDOMObjectsAndAnimationsEv","__ZN7WebCore5Frame22addDestructionObserverEPNS_24FrameDestructionObserverE","__ZN7WebCore5Frame25setPageAndTextZoomFactorsEff","__ZN7WebCore5Frame23visiblePositionForPointERKNS_8IntPointE","__ZN7WebCore5Frame22disconnectOwnerElementEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE","__ZN7WebCore5Frame11clearTimersEPNS_9FrameViewEPNS_8DocumentE","__ZN7WebCore5Frame14willDetachPageEv","__ZNK3JSC20StringSourceProvider6sourceEv","__ZN7WebCore5FrameC2ERNS_4PageEPNS_21HTMLFrameOwnerElementERNS_17FrameLoaderClientE","__ZN7WebCore23TiledBackingStoreClient39tiledBackingStoreHasPendingTileCreationEv","__ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE","__ZNK7WebCore5Frame32tiledBackingStoreBackgroundColorEv","__ZN7WebCore5Frame11setDocumentEN3WTF10PassRefPtrINS_8DocumentEEE","__ZNK7WebCore5Frame13ownerRendererEv","_memset","__ZN7WebCore5Frame25matchLabelsAgainstElementERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEEPNS_7ElementE","__ZN7WebCore5Frame10createViewERKNS_7IntSizeERKNS_5ColorEbS3_RKNS_7IntRectEbNS_13ScrollbarModeEbSA_b","__ZN7WebCore5Frame11clearTimersEv","__ZNK7WebCore5Frame15layerTreeAsTextEj","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore5Frame24searchForLabelsAboveCellEPNS_17RegularExpressionEPNS_20HTMLTableCellElementEPj","__ZN7WebCore5Frame27tiledBackingStorePaintBeginEv","__ZN7WebCore5Frame25injectUserScriptsForWorldERNS_15DOMWrapperWorldERKN3WTF6VectorINSt3__110unique_ptrINS_10UserScriptENS5_14default_deleteIS7_EEEELj0ENS3_15CrashOnOverflowEEENS_23UserScriptInjectionTimeE","__ZN7WebCore5Frame6createEPNS_4PageEPNS_21HTMLFrameOwnerElementEPNS_17FrameLoaderClientE","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore5Frame17injectUserScriptsENS_23UserScriptInjectionTimeE","__ZN7WebCore5Frame36suspendActiveDOMObjectsAndAnimationsEv","__ZNK7WebCore5Frame31displayStringModifiedByEncodingERKN3WTF6StringE","__ZNK7WebCore5Frame15contentRendererEv","__ZN7WebCore5Frame13rangeForPointERKNS_8IntPointE","__ZN3JSC20StringSourceProviderD0Ev","__ZN7WebCore5Frame27setTiledBackingStoreEnabledEb","__ZN7WebCore5Frame17setPageZoomFactorEf","__ZN7WebCore5Frame28searchForLabelsBeforeElementERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEEPNS_7ElementEPjPb","__ZN7WebCore14FrameSelectionD2Ev","__ZN7WebCore5Frame25removeDestructionObserverEPNS_24FrameDestructionObserverE","__ZN3JSC20StringSourceProviderD1Ev","__ZNK7WebCore5Frame12isURLAllowedERKNS_3URLE","__ZN7WebCore5Frame22tiledBackingStorePaintEPNS_15GraphicsContextERKNS_7IntRectE","__ZN3WTF7HashSetIPN7WebCore24FrameDestructionObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore5Frame14frameForWidgetEPKNS_6WidgetE","__ZN7WebCore5Frame17setTextZoomFactorEf","__ZN7WebCoreL24matchLabelsAgainstStringERKN3WTF6VectorINS0_6StringELj0ENS0_15CrashOnOverflowEEERKS2_","__ZN7WebCoreL21createRegExpForLabelsERKN3WTF6VectorINS0_6StringELj0ENS0_15CrashOnOverflowEEE","__ZN7WebCore5Frame29tiledBackingStoreContentsRectEv","__ZN3WTF9HashTableIPN7WebCore24FrameDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","_memcpy","__ZNK7WebCore5Frame23shouldUsePrintingLayoutEv","__ZN3WTF9HashTableIPN7WebCore24FrameDestructionObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZNK7WebCore5Frame25trackedRepaintRectsAsTextEv","__ZN7WebCore5Frame25tiledBackingStorePaintEndERKN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore5Frame30deviceOrPageScaleFactorChangedEv","__ZN7WebCore5Frame27resizePageRectsKeepingRatioERKNS_9FloatSizeES3_","__ZN7WebCore5Frame15documentAtPointERKNS_8IntPointE","__ZN7WebCore5Frame11setPrintingEbRKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE"]

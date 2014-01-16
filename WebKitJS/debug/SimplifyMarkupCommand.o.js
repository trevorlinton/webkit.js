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
H_BASE = parentModule["_malloc"](80 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 80;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21SimplifyMarkupCommandC1ERNS_8DocumentEPNS_4NodeES4_;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore21SimplifyMarkupCommandE=(H_BASE+8)|0;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore21SimplifyMarkupCommand7doApplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i1 + 152 | 0;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0;
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i3 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i3 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i1 + 8 >> 2] | 0);
 i11 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i6 = i1 + 156 | 0;
   i12 = i1 | 0;
   i13 = i11;
   i14 = 0;
   L3 : while (1) {
    if ((HEAP32[i6 >> 2] | 0) == (i13 | 0)) {
     i15 = i14;
     i16 = 4;
     break;
    }
    i17 = i13 + 12 | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 & 2 | 0) == 0) {
     i16 = 8;
    } else {
     if ((HEAP32[i13 + 36 >> 2] | 0) == 0) {
      i16 = 8;
     } else {
      i19 = i14;
     }
    }
    L8 : do {
     if ((i16 | 0) == 8) {
      i16 = 0;
      if ((i18 & 1 | 0) != 0) {
       if ((HEAP32[i13 + 28 >> 2] | 0) != 0) {
        i19 = i14;
        break;
       }
      }
      i20 = HEAP32[i13 + 16 >> 2] | 0;
      i21 = i20 | 0;
      i22 = i20 + 32 | 0;
      if ((HEAP32[i20 + 12 >> 2] & 2048 | 0) == 0) {
       i23 = i22 | 0;
      } else {
       i23 = HEAP32[i22 >> 2] | 0;
      }
      i22 = HEAP32[i23 >> 2] | 0;
      do {
       if ((i22 | 0) == 0) {
        i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 236 >> 2] & 31](i21) | 0;
       } else {
        if ((HEAP32[i22 + 20 >> 2] & 768 | 0) == 256) {
         i24 = HEAP32[(HEAP32[i22 + 8 >> 2] | 0) + 36 >> 2] | 0;
         break;
        } else {
         i24 = HEAP32[i22 + 36 >> 2] | 0;
         break;
        }
       }
      } while (0);
      if ((i24 | 0) == 0 | (i20 | 0) == (i7 | 0)) {
       i19 = i14;
       break;
      } else {
       i25 = i21;
       i26 = 0;
       i27 = i14;
      }
      L24 : while (1) {
       i22 = i25;
       i28 = i27;
       L26 : while (1) {
        i29 = i22 + 16 | 0;
        if ((HEAP32[i29 >> 2] | 0) == (i7 | 0)) {
         i30 = i7;
         i31 = i28;
        } else {
         do {
          if (__ZN7WebCore20CompositeEditCommand16isRemovableBlockEPKNS_4NodeE(i12, i22) | 0) {
           if ((i28 | 0) != (HEAP32[i9 >> 2] | 0)) {
            HEAP32[(HEAP32[i8 >> 2] | 0) + (i28 << 2) >> 2] = i22;
            if ((i22 | 0) == 0) {
             i32 = i28;
            } else {
             i33 = i22 + 8 | 0;
             HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
             i32 = HEAP32[i10 >> 2] | 0;
            }
            i33 = i32 + 1 | 0;
            HEAP32[i10 >> 2] = i33;
            i34 = i33;
            break;
           }
           i33 = i28 + 1 | 0;
           i35 = i33 + (i28 >>> 2) | 0;
           i36 = i35 >>> 0 > 16 >>> 0 ? i35 : 16;
           i35 = i36 >>> 0 > i33 >>> 0 ? i36 : i33;
           i33 = HEAP32[i8 >> 2] | 0;
           do {
            if (i28 >>> 0 < i35 >>> 0) {
             if (i35 >>> 0 > 1073741823 >>> 0) {
              i16 = 28;
              break L3;
             }
             i36 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 2) | 0;
             HEAP32[i9 >> 2] = i36 >>> 2;
             i37 = __ZN3WTF10fastMallocEj(i36) | 0;
             i36 = i37;
             HEAP32[i8 >> 2] = i36;
             i38 = i33;
             _memcpy(i37 | 0, i38 | 0, i28 << 2) | 0;
             if ((i33 | 0) == 0) {
              i39 = i36;
              break;
             }
             if ((i36 | 0) == (i33 | 0)) {
              HEAP32[i8 >> 2] = 0;
              HEAP32[i9 >> 2] = 0;
              i40 = 0;
             } else {
              i40 = i36;
             }
             __ZN3WTF8fastFreeEPv(i38);
             i39 = i40;
            } else {
             i39 = i33;
            }
           } while (0);
           HEAP32[i39 + (i28 << 2) >> 2] = i22;
           if ((i22 | 0) == 0) {
            i41 = i28;
           } else {
            i33 = i22 + 8 | 0;
            HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
            i41 = HEAP32[i10 >> 2] | 0;
           }
           i33 = i41 + 1 | 0;
           HEAP32[i10 >> 2] = i33;
           i34 = i33;
          } else {
           i34 = i28;
          }
         } while (0);
         i30 = HEAP32[i29 >> 2] | 0;
         i31 = i34;
        }
        i42 = i30 | 0;
        if ((i30 | 0) == 0) {
         i43 = i26;
         break L24;
        }
        i44 = HEAP32[i30 + 12 >> 2] | 0;
        i45 = (i44 & 2048 | 0) == 0;
        i46 = i30 + 32 | 0;
        if (i45) {
         i47 = i46 | 0;
        } else {
         i47 = HEAP32[i46 >> 2] | 0;
        }
        do {
         if ((HEAP32[i47 >> 2] | 0) != 0) {
          if (i45) {
           i48 = i46 | 0;
          } else {
           i48 = HEAP32[i46 >> 2] | 0;
          }
          i33 = HEAP32[i48 >> 2] | 0;
          if ((HEAP32[i33 + 20 >> 2] & 768 | 0) == 256) {
           break;
          }
          if ((HEAP32[i33 + 24 >> 2] & 4 | 0) == 0) {
           break;
          }
          if (i45) {
           i49 = i46 | 0;
          } else {
           i49 = HEAP32[i46 >> 2] | 0;
          }
          if ((HEAP8[(HEAP32[i49 >> 2] | 0) + 25 | 0] & 1) == 0) {
           break L26;
          }
         }
        } while (0);
        if ((i30 | 0) == (i7 | 0)) {
         i43 = i26;
         break L24;
        } else {
         i22 = i42;
         i28 = i31;
        }
       }
       if ((i44 & 2 | 0) != 0) {
        if ((HEAP32[i42 + 36 >> 2] | 0) != (HEAP32[i42 + 40 >> 2] | 0)) {
         i19 = i31;
         break L8;
        }
       }
       if (i45) {
        i50 = i46 | 0;
       } else {
        i50 = HEAP32[i46 >> 2] | 0;
       }
       i28 = HEAP32[i50 >> 2] | 0;
       do {
        if ((i28 | 0) == 0) {
         i51 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 236 >> 2] & 31](i42) | 0;
        } else {
         if ((HEAP32[i28 + 20 >> 2] & 768 | 0) == 256) {
          i51 = HEAP32[(HEAP32[i28 + 8 >> 2] | 0) + 36 >> 2] | 0;
          break;
         } else {
          i51 = HEAP32[i28 + 36 >> 2] | 0;
          break;
         }
        }
       } while (0);
       i28 = (__ZNK7WebCore11RenderStyle4diffEPKS0_Rj(i51, i24, i4) | 0) == 0;
       i22 = i28 ? i42 : i26;
       if ((i30 | 0) == (i7 | 0)) {
        i43 = i22;
        break;
       } else {
        i25 = i42;
        i26 = i22;
        i27 = i31;
       }
      }
      if ((i43 | 0) == 0 | (i21 | 0) == (i43 | 0)) {
       i19 = i31;
       break;
      }
      i20 = i21;
      i22 = i31;
      i28 = HEAP32[i9 >> 2] | 0;
      while (1) {
       do {
        if ((i22 | 0) == (i28 | 0)) {
         i29 = i28 + 1 | 0;
         i33 = i29 + (i28 >>> 2) | 0;
         i35 = i33 >>> 0 > 16 >>> 0 ? i33 : 16;
         i33 = i35 >>> 0 > i29 >>> 0 ? i35 : i29;
         i29 = HEAP32[i8 >> 2] | 0;
         do {
          if (i28 >>> 0 < i33 >>> 0) {
           if (i33 >>> 0 > 1073741823 >>> 0) {
            i16 = 70;
            break L3;
           }
           i35 = __ZN3WTF18fastMallocGoodSizeEj(i33 << 2) | 0;
           i38 = i35 >>> 2;
           HEAP32[i9 >> 2] = i38;
           i36 = __ZN3WTF10fastMallocEj(i35) | 0;
           i35 = i36;
           HEAP32[i8 >> 2] = i35;
           i37 = i29;
           _memcpy(i36 | 0, i37 | 0, i28 << 2) | 0;
           if ((i29 | 0) == 0) {
            i52 = i38;
            i53 = i35;
            break;
           }
           if ((i35 | 0) == (i29 | 0)) {
            HEAP32[i8 >> 2] = 0;
            HEAP32[i9 >> 2] = 0;
            i54 = 0;
            i55 = 0;
           } else {
            i54 = i38;
            i55 = i35;
           }
           __ZN3WTF8fastFreeEPv(i37);
           i52 = i54;
           i53 = i55;
          } else {
           i52 = i28;
           i53 = i29;
          }
         } while (0);
         HEAP32[i53 + (i28 << 2) >> 2] = i20;
         if ((i20 | 0) == 0) {
          i56 = i52;
          break;
         }
         i29 = i20 + 8 | 0;
         HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
         i56 = i52;
        } else {
         HEAP32[(HEAP32[i8 >> 2] | 0) + (i22 << 2) >> 2] = i20;
         if ((i20 | 0) == 0) {
          i56 = i28;
          break;
         }
         i29 = i20 + 8 | 0;
         HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
         i56 = i28;
        }
       } while (0);
       i29 = i22 + 1 | 0;
       HEAP32[i10 >> 2] = i29;
       i33 = HEAP32[i20 + 16 >> 2] | 0;
       if ((i33 | 0) == (i43 | 0)) {
        i19 = i29;
        break;
       } else {
        i20 = i33;
        i22 = i29;
        i28 = i56;
       }
      }
     }
    } while (0);
    if ((HEAP32[i17 >> 2] & 2 | 0) != 0) {
     i18 = HEAP32[i13 + 36 >> 2] | 0;
     if ((i18 | 0) != 0) {
      i13 = i18;
      i14 = i19;
      continue;
     }
    }
    i18 = HEAP32[i13 + 28 >> 2] | 0;
    if ((i18 | 0) != 0) {
     i13 = i18;
     i14 = i19;
     continue;
    }
    i18 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i13) | 0;
    if ((i18 | 0) == 0) {
     i15 = i19;
     i16 = 4;
     break;
    } else {
     i13 = i18;
     i14 = i19;
    }
   }
   if ((i16 | 0) == 4) {
    if ((i15 | 0) == 0) {
     break;
    }
    i14 = i1 | 0;
    i13 = i5 | 0;
    i12 = 0;
    while (1) {
     i6 = __ZN7WebCore21SimplifyMarkupCommand32pruneSubsequentAncestorsToRemoveERN3WTF6VectorINS1_6RefPtrINS_4NodeEEELj0ENS1_15CrashOnOverflowEEEj(i1, i3, i12) | 0;
     i57 = HEAP32[i10 >> 2] | 0;
     if ((i6 | 0) < 0) {
      i58 = i12;
     } else {
      if (i57 >>> 0 <= i12 >>> 0) {
       i16 = 84;
       break;
      }
      i18 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i12 << 2) >> 2] | 0;
      HEAP32[i13 >> 2] = i18;
      if ((i18 | 0) != 0) {
       i28 = i18 + 8 | 0;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      }
      __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i14, i5, 0);
      i28 = HEAP32[i13 >> 2] | 0;
      do {
       if ((i28 | 0) != 0) {
        i18 = i28 + 8 | 0;
        i22 = i18 | 0;
        i20 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
        HEAP32[i22 >> 2] = i20;
        if ((i20 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
       }
      } while (0);
      i58 = i6 + i12 | 0;
     }
     i12 = i58 + 1 | 0;
     if (i12 >>> 0 >= i57 >>> 0) {
      break;
     }
    }
    if ((i16 | 0) == 84) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    if ((i57 | 0) == 0) {
     break;
    }
    i12 = HEAP32[i8 >> 2] | 0;
    i13 = i12 + (i57 << 2) | 0;
    i14 = i12;
    while (1) {
     i12 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i28 = i12 + 8 | 0;
       i17 = i28 | 0;
       i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
       HEAP32[i17 >> 2] = i18;
       if ((i18 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     i14 = i14 + 4 | 0;
     if ((i14 | 0) == (i13 | 0)) {
      break;
     }
    }
    HEAP32[i10 >> 2] = 0;
    break;
   } else if ((i16 | 0) == 28) {
    _WTFCrash();
   } else if ((i16 | 0) == 70) {
    _WTFCrash();
   }
  }
 } while (0);
 i16 = HEAP32[i8 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i16);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore21SimplifyMarkupCommand32pruneSubsequentAncestorsToRemoveERN3WTF6VectorINS1_6RefPtrINS_4NodeEEELj0ENS1_15CrashOnOverflowEEEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i3 + 1 | 0;
 i10 = i2 + 8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i2 | 0;
 i2 = i9;
 while (1) {
  i13 = i2 - 1 | 0;
  if (i2 >>> 0 >= i11 >>> 0) {
   break;
  }
  if (i11 >>> 0 <= i13 >>> 0) {
   i14 = 4;
   break;
  }
  i15 = HEAP32[i12 >> 2] | 0;
  i16 = HEAP32[(HEAP32[i15 + (i13 << 2) >> 2] | 0) + 16 >> 2] | 0;
  i17 = i16 | 0;
  if ((i17 | 0) != (HEAP32[i15 + (i2 << 2) >> 2] | 0)) {
   break;
  }
  if ((HEAP32[i16 + 12 >> 2] & 2 | 0) == 0) {
   i2 = i2 + 1 | 0;
   continue;
  } else {
   if ((HEAP32[i17 + 36 >> 2] | 0) == (HEAP32[i17 + 40 >> 2] | 0)) {
    i2 = i2 + 1 | 0;
    continue;
   } else {
    break;
   }
  }
 }
 if ((i14 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 if (i11 >>> 0 <= i13 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i11 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i13 << 2) >> 2] | 0;
 i13 = HEAP32[i11 + 16 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i18 = -1;
  STACKTOP = i4;
  return i18 | 0;
 }
 i14 = i13 + 8 | 0;
 i17 = (HEAP32[i14 >> 2] | 0) + 1 | 0;
 HEAP32[i14 >> 2] = i17;
 if ((i2 | 0) == (i9 | 0)) {
  i9 = i13 + 8 | 0;
  i19 = 0;
  i20 = i17;
  i21 = i9;
  i22 = i9 | 0;
 } else {
  i9 = i1 | 0;
  i17 = i1;
  i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 60 >> 2] | 0;
  if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i3 >>> 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
  i14 = i5 | 0;
  i16 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i3 << 2) >> 2] | 0;
  HEAP32[i14 >> 2] = i16;
  if ((i16 | 0) != 0) {
   i15 = i16 + 8 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  }
  FUNCTION_TABLE_viii[i1 & 3](i9, i5, 0);
  i5 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i14 = i5 + 8 | 0;
    i1 = i14 | 0;
    i15 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    HEAP32[i1 >> 2] = i15;
    if ((i15 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   }
  } while (0);
  if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i3 >>> 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
  i10 = i6 | 0;
  i5 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i3 << 2) >> 2] | 0;
  HEAP32[i10 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i12 = i5 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  }
  i12 = i7 | 0;
  HEAP32[i12 >> 2] = i11;
  i5 = (i11 | 0) == 0;
  if (!i5) {
   i14 = i11 + 8 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  }
  __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i9, i6, i7, 0);
  i7 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i12 = i7 + 8 | 0;
    i6 = i12 | 0;
    i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    HEAP32[i6 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   }
  } while (0);
  i7 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i10 = i7 + 8 | 0;
    i12 = i10 | 0;
    i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    HEAP32[i12 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   }
  } while (0);
  i7 = HEAP32[(HEAP32[i17 >> 2] | 0) + 60 >> 2] | 0;
  i17 = i8 | 0;
  HEAP32[i17 >> 2] = i11;
  if (!i5) {
   i5 = i11 + 8 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  }
  FUNCTION_TABLE_viii[i7 & 3](i9, i8, 0);
  i8 = HEAP32[i17 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i17 = i8 + 8 | 0;
    i9 = i17 | 0;
    i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i7;
    if ((i7 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   }
  } while (0);
  i8 = i13 + 8 | 0;
  i13 = i8 | 0;
  i19 = i2 - i3 - 1 | 0;
  i20 = HEAP32[i13 >> 2] | 0;
  i21 = i8;
  i22 = i13;
 }
 i13 = i20 - 1 | 0;
 HEAP32[i22 >> 2] = i13;
 if ((i13 | 0) >= 1) {
  i18 = i19;
  STACKTOP = i4;
  return i18 | 0;
 }
 if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
  i18 = i19;
  STACKTOP = i4;
  return i18 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
 i18 = i19;
 STACKTOP = i4;
 return i18 | 0;
}
function __ZN7WebCore21SimplifyMarkupCommandD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 156 >> 2] | 0;
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
 i2 = HEAP32[i1 + 152 >> 2] | 0;
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
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore21SimplifyMarkupCommandD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 156 >> 2] | 0;
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
 i2 = HEAP32[i1 + 152 >> 2] | 0;
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
 __ZN7WebCore20CompositeEditCommandD2Ev(i1 | 0);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viii + 2;
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
function __ZN7WebCore21SimplifyMarkupCommandC2ERNS_8DocumentEPNS_4NodeES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 152 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i2 = i3 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 156 >> 2] = i4;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore21SimplifyMarkupCommandC1ERNS_8DocumentEPNS_4NodeES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 152 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i2 = i3 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 156 >> 2] = i4;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
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
function viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand15isTypingCommandEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11EditCommand13editingActionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EditCommand13editingActionEv(i1 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore20CompositeEditCommand18isDictationCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
}
function __ZNK7WebCore11EditCommand24isEditCommandCompositionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore11EditCommand19isSimpleEditCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore21SimplifyMarkupCommandD0Ev,b0,__ZN7WebCore21SimplifyMarkupCommand7doApplyEv,b0,__ZN7WebCore21SimplifyMarkupCommandD1Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper,b1];
  var FUNCTION_TABLE_ii = [b2,b2,ii___ZNK7WebCore11EditCommand13editingActionEv__wrapper,b2,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b2,ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper,b2,ii___ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv__wrapper,b2,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b2,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b2,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b2,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore21SimplifyMarkupCommandC2ERNS_8DocumentEPNS_4NodeES4_,b6,viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","__ZN7WebCore21SimplifyMarkupCommandC2ERNS_8DocumentEPNS_4NodeES4_","_strlen","__ZN7WebCore21SimplifyMarkupCommandD0Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","__ZN7WebCore21SimplifyMarkupCommand32pruneSubsequentAncestorsToRemoveERN3WTF6VectorINS1_6RefPtrINS_4NodeEEELj0ENS1_15CrashOnOverflowEEEj","_memset","_memcpy","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZN7WebCore21SimplifyMarkupCommand7doApplyEv","__ZN7WebCore21SimplifyMarkupCommandD1Ev","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv"]

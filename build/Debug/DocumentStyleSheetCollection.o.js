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
H_BASE = parentModule["_malloc"](16 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 16;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore28DocumentStyleSheetCollectionC1ERNS_8DocumentE;
/* memory initializer */ allocate([97,108,116,101,114,110,97,116,101,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore8SVGNames8styleTagE=env.__ZN7WebCore8SVGNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames9titleAttrE=env.__ZN7WebCore9HTMLNames9titleAttrE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames7linkTagE=env.__ZN7WebCore9HTMLNames7linkTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames7relAttrE=env.__ZN7WebCore9HTMLNames7relAttrE|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore28DocumentStyleSheetCollection24collectActiveStyleSheetsERN3WTF6VectorINS1_6RefPtrINS_10StyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 | 0;
 do {
  if ((__ZNK7WebCore8Document8settingsEv(HEAP32[i7 >> 2] | 0) | 0) != 0) {
   if ((HEAP8[(__ZNK7WebCore8Document8settingsEv(HEAP32[i7 >> 2] | 0) | 0) + 182 | 0] & 16) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i8 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i2 + 8 | 0;
 i10 = i2 + 4 | 0;
 i11 = i2 | 0;
 i12 = i1 + 132 | 0;
 i13 = i4 | 0;
 i14 = i1 + 136 | 0;
 i1 = i6 | 0;
 i15 = i5 | 0;
 i16 = i8;
 L8 : while (1) {
  i8 = HEAP32[i16 >> 2] | 0;
  L10 : do {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 76 >> 2] & 1](i8) | 0) == 7) {
    i17 = HEAP32[i8 + 64 >> 2] | 0;
    if ((HEAP8[i8 + 72 | 0] & 1) == 0) {
     i18 = i17;
     i19 = 117;
     break;
    }
    i20 = i8;
    i21 = HEAP32[i7 >> 2] | 0;
    i22 = HEAP32[i21 + 1288 >> 2] | 0;
    if ((i22 | 0) == 0) {
     break L8;
    }
    i23 = HEAP32[i22 + 8 >> 2] | 0;
    i24 = i22 + 8 | 0;
    HEAP32[i24 >> 2] = i23;
    if ((i23 | 0) >= 1) {
     i18 = i17;
     i19 = 117;
     break;
    }
    if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
     i18 = i17;
     i19 = 117;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    i18 = i17;
    i19 = 117;
   } else {
    i17 = i8 + 12 | 0;
    i24 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i24 & 16 | 0) == 0) {
      i19 = 22;
     } else {
      i23 = (i24 & 4 | 0) == 0;
      if (i23) {
       i19 = 22;
       break;
      }
      i22 = HEAP32[i8 + 44 >> 2] | 0;
      i25 = HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0;
      if ((i22 | 0) == (i25 | 0)) {
       break;
      }
      if ((HEAP32[i22 + 12 >> 2] | 0) == (HEAP32[i25 + 12 >> 2] | 0)) {
       if ((HEAP32[i22 + 16 >> 2] | 0) == (HEAP32[i25 + 16 >> 2] | 0)) {
        break;
       }
      }
      if (i23) {
       i19 = 22;
       break;
      }
      i23 = HEAP32[i8 + 44 >> 2] | 0;
      i25 = HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0;
      if ((i23 | 0) == (i25 | 0)) {
       break;
      }
      if ((HEAP32[i23 + 12 >> 2] | 0) != (HEAP32[i25 + 12 >> 2] | 0)) {
       i19 = 22;
       break;
      }
      if ((HEAP32[i23 + 16 >> 2] | 0) != (HEAP32[i25 + 16 >> 2] | 0)) {
       i19 = 22;
      }
     }
    } while (0);
    do {
     if ((i19 | 0) == 22) {
      i19 = 0;
      if ((i24 & 36 | 0) != 36) {
       break L10;
      }
      i25 = HEAP32[i8 + 44 >> 2] | 0;
      i23 = HEAP32[__ZN7WebCore8SVGNames8styleTagE >> 2] | 0;
      if ((i25 | 0) == (i23 | 0)) {
       break;
      }
      if ((HEAP32[i25 + 12 >> 2] | 0) != (HEAP32[i23 + 12 >> 2] | 0)) {
       break L10;
      }
      if ((HEAP32[i25 + 16 >> 2] | 0) != (HEAP32[i23 + 16 >> 2] | 0)) {
       break L10;
      }
     }
    } while (0);
    i24 = i8;
    i23 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i24, __ZN7WebCore9HTMLNames9titleAttrE) | 0) >> 2] | 0;
    i25 = (i23 | 0) == 0;
    if (!i25) {
     i22 = i23 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
    }
    i22 = i8 + 44 | 0;
    i26 = HEAP32[i22 >> 2] | 0;
    i27 = HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0;
    do {
     if ((i26 | 0) == (i27 | 0)) {
      i19 = 31;
     } else {
      if ((HEAP32[i26 + 12 >> 2] | 0) != (HEAP32[i27 + 12 >> 2] | 0)) {
       i28 = 0;
       i29 = i23;
       break;
      }
      if ((HEAP32[i26 + 16 >> 2] | 0) == (HEAP32[i27 + 16 >> 2] | 0)) {
       i19 = 31;
      } else {
       i28 = 0;
       i29 = i23;
      }
     }
    } while (0);
    L39 : do {
     if ((i19 | 0) == 31) {
      i19 = 0;
      i27 = HEAP32[i8 + 212 >> 2] | 0;
      do {
       if ((i27 | 0) == 2) {
        i19 = 113;
       } else {
        i26 = (i27 | 0) == 1;
        if (!(__ZNK7WebCore15HTMLLinkElement19styleSheetIsLoadingEv(i8) | 0)) {
         if ((HEAP32[i8 + 196 >> 2] | 0) != 0) {
          i28 = i26;
          i29 = i23;
          break L39;
         }
         i30 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
         if ((i30 | 0) != 0) {
          i31 = i30 | 0;
          HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
         }
         if (i25) {
          i28 = i26;
          i29 = i30;
          break L39;
         }
         i31 = i23 | 0;
         i32 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
         if ((i32 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i23);
          i28 = i26;
          i29 = i30;
          break L39;
         } else {
          HEAP32[i31 >> 2] = i32;
          i28 = i26;
          i29 = i30;
          break L39;
         }
        }
        if (i26) {
         i19 = 113;
         break;
        }
        if (i25) {
         break L10;
        }
        if ((HEAP32[i23 + 4 >> 2] | 0) == 0) {
         break;
        }
        i26 = HEAP32[i12 >> 2] | 0;
        if ((i26 | 0) != 0) {
         if ((HEAP32[i26 + 4 >> 2] | 0) != 0) {
          i19 = 113;
          break;
         }
        }
        i26 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i24, __ZN7WebCore9HTMLNames7relAttrE) | 0;
        __ZN3WTF6StringC1EPKc(i4, H_BASE + 8 | 0);
        i30 = HEAP32[i26 >> 2] | 0;
        if ((i30 | 0) == 0) {
         i33 = 0;
        } else {
         i33 = (__ZN3WTF10StringImpl4findEPS0_j(i30, HEAP32[i13 >> 2] | 0, 0) | 0) != -1;
        }
        i30 = HEAP32[i13 >> 2] | 0;
        do {
         if ((i30 | 0) != 0) {
          i26 = i30 | 0;
          i32 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
          if ((i32 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i30);
           break;
          } else {
           HEAP32[i26 >> 2] = i32;
           break;
          }
         }
        } while (0);
        if (i33) {
         i19 = 113;
         break;
        }
        i30 = i23 | 0;
        HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
        i30 = HEAP32[i12 >> 2] | 0;
        HEAP32[i12 >> 2] = i23;
        do {
         if ((i30 | 0) != 0) {
          i32 = i30 | 0;
          i26 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
          if ((i26 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i30);
           break;
          } else {
           HEAP32[i32 >> 2] = i26;
           break;
          }
         }
        } while (0);
        i30 = i23 | 0;
        HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
        i30 = HEAP32[i14 >> 2] | 0;
        HEAP32[i14 >> 2] = i23;
        if ((i30 | 0) == 0) {
         i19 = 113;
         break;
        }
        i26 = i30 | 0;
        i32 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
        if ((i32 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i30);
         i19 = 113;
         break;
        } else {
         HEAP32[i26 >> 2] = i32;
         i19 = 113;
         break;
        }
       }
      } while (0);
      if ((i19 | 0) == 113) {
       i19 = 0;
       if (i25) {
        break L10;
       }
      }
      i27 = i23 | 0;
      i32 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i32 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       break L10;
      } else {
       HEAP32[i27 >> 2] = i32;
       break L10;
      }
     }
    } while (0);
    i23 = HEAP32[i22 >> 2] | 0;
    i25 = HEAP32[__ZN7WebCore8SVGNames8styleTagE >> 2] | 0;
    L87 : do {
     if ((i23 | 0) == (i25 | 0)) {
      i19 = 63;
     } else {
      i32 = HEAP32[i23 + 12 >> 2] | 0;
      if ((i32 | 0) == (HEAP32[i25 + 12 >> 2] | 0)) {
       if ((HEAP32[i23 + 16 >> 2] | 0) == (HEAP32[i25 + 16 >> 2] | 0)) {
        i19 = 63;
        break;
       }
      }
      do {
       if ((HEAP32[i17 >> 2] & 16 | 0) != 0) {
        if ((i32 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0) + 12 >> 2] | 0)) {
         break;
        }
        i34 = HEAP32[i8 + 196 >> 2] | 0;
        break L87;
       }
      } while (0);
      i34 = HEAP32[i8 + 68 >> 2] | 0;
     }
    } while (0);
    if ((i19 | 0) == 63) {
     i19 = 0;
     i34 = HEAP32[i8 + 108 >> 2] | 0;
    }
    i17 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i24, __ZN7WebCore9HTMLNames7relAttrE) | 0) >> 2] | 0;
    i25 = (i17 | 0) == 0;
    if (!i25) {
     i23 = i17 | 0;
     HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
    }
    do {
     if (i28) {
      i35 = i29;
      i36 = i34;
     } else {
      if ((i29 | 0) == 0) {
       i35 = 0;
       i36 = i34;
       break;
      }
      if ((HEAP32[i29 + 4 >> 2] | 0) == 0) {
       i35 = i29;
       i36 = i34;
       break;
      }
      i23 = HEAP32[i12 >> 2] | 0;
      if ((i23 | 0) == 0) {
       i19 = 75;
      } else {
       if ((HEAP32[i23 + 4 >> 2] | 0) == 0) {
        i19 = 75;
       }
      }
      L108 : do {
       if ((i19 | 0) == 75) {
        i19 = 0;
        i23 = HEAP32[i22 >> 2] | 0;
        i32 = HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0;
        do {
         if ((i23 | 0) != (i32 | 0)) {
          if ((HEAP32[i23 + 12 >> 2] | 0) == (HEAP32[i32 + 12 >> 2] | 0)) {
           if ((HEAP32[i23 + 16 >> 2] | 0) == (HEAP32[i32 + 16 >> 2] | 0)) {
            break;
           }
          }
          __ZN3WTF6StringC1EPKc(i5, H_BASE + 8 | 0);
          if (i25) {
           i37 = 1;
          } else {
           i37 = (__ZN3WTF10StringImpl4findEPS0_j(i17, HEAP32[i15 >> 2] | 0, 0) | 0) == -1;
          }
          i27 = HEAP32[i15 >> 2] | 0;
          if ((i27 | 0) == 0) {
           if (i37) {
            break;
           } else {
            break L108;
           }
          }
          i26 = i27 | 0;
          i30 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
          if ((i30 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i27);
           if (i37) {
            break;
           } else {
            break L108;
           }
          } else {
           HEAP32[i26 >> 2] = i30;
           if (i37) {
            break;
           } else {
            break L108;
           }
          }
         }
        } while (0);
        i32 = i29 | 0;
        HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
        i32 = HEAP32[i14 >> 2] | 0;
        HEAP32[i14 >> 2] = i29;
        if ((i32 | 0) == 0) {
         i38 = i29;
        } else {
         i23 = i32 | 0;
         i30 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
         if ((i30 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i32);
         } else {
          HEAP32[i23 >> 2] = i30;
         }
         i38 = HEAP32[i14 >> 2] | 0;
        }
        if ((i38 | 0) != 0) {
         i30 = i38 | 0;
         HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
        }
        i30 = HEAP32[i12 >> 2] | 0;
        HEAP32[i12 >> 2] = i38;
        if ((i30 | 0) == 0) {
         break;
        }
        i23 = i30 | 0;
        i32 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
        if ((i32 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i30);
         break;
        } else {
         HEAP32[i23 >> 2] = i32;
         break;
        }
       }
      } while (0);
      i32 = __ZN3WTF5equalEPKNS_10StringImplES2_(i29, HEAP32[i12 >> 2] | 0) | 0;
      i35 = i29;
      i36 = i32 ? i34 : 0;
     }
    } while (0);
    __ZN3WTF6StringC1EPKc(i6, H_BASE + 8 | 0);
    do {
     if (i25) {
      i39 = 0;
     } else {
      if ((__ZN3WTF10StringImpl4findEPS0_j(i17, HEAP32[i1 >> 2] | 0, 0) | 0) == -1) {
       i39 = 0;
       break;
      }
      if ((i35 | 0) == 0) {
       i39 = 1;
       break;
      }
      i39 = (HEAP32[i35 + 4 >> 2] | 0) == 0;
     }
    } while (0);
    i22 = HEAP32[i1 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i24 = i22 | 0;
      i32 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
      if ((i32 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i24 >> 2] = i32;
       break;
      }
     }
    } while (0);
    i22 = i39 ? 0 : i36;
    do {
     if (!i25) {
      i32 = i17 | 0;
      i24 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i17);
       break;
      } else {
       HEAP32[i32 >> 2] = i24;
       break;
      }
     }
    } while (0);
    if ((i35 | 0) == 0) {
     i18 = i22;
     i19 = 117;
     break;
    }
    i17 = i35 | 0;
    i25 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i25 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i35);
     i18 = i22;
     i19 = 117;
     break;
    } else {
     HEAP32[i17 >> 2] = i25;
     i18 = i22;
     i19 = 117;
     break;
    }
   }
  } while (0);
  do {
   if ((i19 | 0) == 117) {
    i19 = 0;
    if ((i18 | 0) == 0) {
     break;
    }
    i8 = HEAP32[i9 >> 2] | 0;
    if ((i8 | 0) == (HEAP32[i10 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore10StyleSheetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i8 + 1 | 0);
     HEAP32[(HEAP32[i11 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i18;
     i25 = i18 + 4 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     break;
    } else {
     HEAP32[(HEAP32[i11 >> 2] | 0) + (i8 << 2) >> 2] = i18;
     i8 = i18 + 4 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i16 + 8 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i19 = 127;
   break;
  } else {
   i16 = i8;
  }
 }
 if ((i19 | 0) == 127) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i21 + 964 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore8Document17applyXSLTransformEPNS_21ProcessingInstructionE(i21, i20);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore28DocumentStyleSheetCollection23updateActiveStyleSheetsENS0_10UpdateFlagE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((HEAP8[i9 + 1081 | 0] & 1) != 0) {
  HEAP32[i1 + 96 >> 2] = 2;
  __ZN7WebCore8Document25scheduleForcedStyleRecalcEv(i9);
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 if ((HEAP32[i9 + 1584 >> 2] | 0) == 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 if ((HEAP8[i9 + 2285 | 0] & 1) != 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = 0;
 i11 = i4 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i4 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCore28DocumentStyleSheetCollection24collectActiveStyleSheetsERN3WTF6VectorINS1_6RefPtrINS_10StyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i1, i4);
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = 0;
 i13 = i5 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i5 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 __ZNK7WebCore28DocumentStyleSheetCollection29updateInjectedStyleSheetCacheEv(i1);
 i15 = HEAP32[i1 + 52 >> 2] | 0;
 i16 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i17 = 0;
 } else {
  i18 = i16 >>> 0 < 16 >>> 0 ? 16 : i16;
  do {
   if ((i18 | 0) != 0) {
    if (i18 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    } else {
     i19 = __ZN3WTF18fastMallocGoodSizeEj(i18 << 2) | 0;
     HEAP32[i13 >> 2] = i19 >>> 2;
     HEAP32[i4 >> 2] = __ZN3WTF10fastMallocEj(i19) | 0;
     break;
    }
   }
  } while (0);
  i17 = HEAP32[i14 >> 2] | 0;
 }
 if (i16 >>> 0 < i17 >>> 0) {
  _WTFCrash();
  return 0;
 }
 i18 = HEAP32[i4 >> 2] | 0;
 if ((i16 | 0) != 0) {
  i19 = 0;
  while (1) {
   i20 = HEAP32[i15 + (i19 << 2) >> 2] | 0;
   HEAP32[i18 + (i19 + i17 << 2) >> 2] = i20;
   if ((i20 | 0) != 0) {
    i21 = i20 + 4 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
   }
   i19 = i19 + 1 | 0;
   if (i19 >>> 0 >= i16 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i14 >> 2] = i16;
 i19 = HEAP32[i1 + 80 >> 2] | 0;
 i17 = HEAP32[i1 + 88 >> 2] | 0;
 i18 = i17 + i16 | 0;
 i15 = HEAP32[i13 >> 2] | 0;
 if (i18 >>> 0 > i15 >>> 0) {
  i21 = i15 + 1 + (i15 >>> 2) | 0;
  i20 = i21 >>> 0 > 16 >>> 0 ? i21 : 16;
  i21 = i20 >>> 0 > i18 >>> 0 ? i20 : i18;
  do {
   if (i15 >>> 0 < i21 >>> 0) {
    i20 = HEAP32[i4 >> 2] | 0;
    if (i21 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i22 = __ZN3WTF18fastMallocGoodSizeEj(i21 << 2) | 0;
    HEAP32[i13 >> 2] = i22 >>> 2;
    i23 = __ZN3WTF10fastMallocEj(i22) | 0;
    HEAP32[i4 >> 2] = i23;
    i22 = i20;
    _memcpy(i23 | 0, i22 | 0, i16 << 2) | 0;
    if ((i20 | 0) == 0) {
     break;
    }
    if ((HEAP32[i4 >> 2] | 0) == (i20 | 0)) {
     HEAP32[i4 >> 2] = 0;
     HEAP32[i13 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i22);
   }
  } while (0);
  i24 = HEAP32[i14 >> 2] | 0;
 } else {
  i24 = i16;
 }
 if (i18 >>> 0 < i24 >>> 0) {
  _WTFCrash();
  return 0;
 }
 i16 = HEAP32[i4 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i21 = 0;
  while (1) {
   i15 = HEAP32[i19 + (i21 << 2) >> 2] | 0;
   HEAP32[i16 + (i21 + i24 << 2) >> 2] = i15;
   if ((i15 | 0) != 0) {
    i22 = i15 + 4 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   }
   i21 = i21 + 1 | 0;
   if (i21 >>> 0 >= i17 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i14 >> 2] = i18;
 i17 = __ZNK7WebCore8Document20seamlessParentIFrameEv(HEAP32[i8 >> 2] | 0) | 0;
 if ((i17 | 0) != 0) {
  i21 = HEAP32[(HEAP32[i17 + 20 >> 2] | 0) + 8 >> 2] | 0;
  i17 = HEAP32[i21 + 788 >> 2] | 0;
  i24 = HEAP32[i21 + 796 >> 2] | 0;
  i21 = i18 + i24 | 0;
  i16 = HEAP32[i13 >> 2] | 0;
  if (i21 >>> 0 > i16 >>> 0) {
   i19 = i16 + 1 + (i16 >>> 2) | 0;
   i22 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
   i19 = i22 >>> 0 > i21 >>> 0 ? i22 : i21;
   do {
    if (i16 >>> 0 < i19 >>> 0) {
     i22 = HEAP32[i4 >> 2] | 0;
     if (i19 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
      return 0;
     }
     i15 = __ZN3WTF18fastMallocGoodSizeEj(i19 << 2) | 0;
     HEAP32[i13 >> 2] = i15 >>> 2;
     i20 = __ZN3WTF10fastMallocEj(i15) | 0;
     HEAP32[i4 >> 2] = i20;
     i15 = i22;
     _memcpy(i20 | 0, i15 | 0, i18 << 2) | 0;
     if ((i22 | 0) == 0) {
      break;
     }
     if ((HEAP32[i4 >> 2] | 0) == (i22 | 0)) {
      HEAP32[i4 >> 2] = 0;
      HEAP32[i13 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i15);
    }
   } while (0);
   i25 = HEAP32[i14 >> 2] | 0;
  } else {
   i25 = i18;
  }
  if (i21 >>> 0 < i25 >>> 0) {
   _WTFCrash();
   return 0;
  }
  i18 = HEAP32[i4 >> 2] | 0;
  if ((i24 | 0) != 0) {
   i19 = 0;
   while (1) {
    i16 = HEAP32[i17 + (i19 << 2) >> 2] | 0;
    HEAP32[i18 + (i19 + i25 << 2) >> 2] = i16;
    if ((i16 | 0) != 0) {
     i15 = i16 + 4 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    }
    i19 = i19 + 1 | 0;
    if (i19 >>> 0 >= i24 >>> 0) {
     break;
    }
   }
  }
  HEAP32[i14 >> 2] = i21;
 }
 i21 = HEAP32[i12 >> 2] | 0;
 L79 : do {
  if ((i21 | 0) == 0) {
   i26 = 0;
  } else {
   i24 = HEAP32[i9 >> 2] | 0;
   i19 = 0;
   L81 : while (1) {
    i25 = i24 + (i19 << 2) | 0;
    i18 = HEAP32[i25 >> 2] | 0;
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 56 >> 2] & 1](i18) | 0) {
      if (i21 >>> 0 <= i19 >>> 0) {
       i27 = 53;
       break L81;
      }
      i17 = HEAP32[i25 >> 2] | 0;
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 1](i17) | 0) {
       break;
      }
      i17 = HEAP32[i25 >> 2] | 0;
      i15 = i17;
      if ((__ZNK7WebCore13CSSStyleSheet6lengthEv(i15) | 0) == 0) {
       break;
      }
      i16 = HEAP32[i14 >> 2] | 0;
      if ((i16 | 0) != (HEAP32[i13 >> 2] | 0)) {
       HEAP32[(HEAP32[i4 >> 2] | 0) + (i16 << 2) >> 2] = i15;
       if ((i17 | 0) != 0) {
        i22 = i17 + 4 | 0;
        HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
       }
       HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
       break;
      }
      i22 = i16 + 1 | 0;
      i20 = i22 + (i16 >>> 2) | 0;
      i23 = i20 >>> 0 > 16 >>> 0 ? i20 : 16;
      i20 = i23 >>> 0 > i22 >>> 0 ? i23 : i22;
      do {
       if (i16 >>> 0 < i20 >>> 0) {
        i22 = HEAP32[i4 >> 2] | 0;
        if (i20 >>> 0 > 1073741823 >>> 0) {
         i27 = 62;
         break L81;
        }
        i23 = __ZN3WTF18fastMallocGoodSizeEj(i20 << 2) | 0;
        HEAP32[i13 >> 2] = i23 >>> 2;
        i28 = __ZN3WTF10fastMallocEj(i23) | 0;
        HEAP32[i4 >> 2] = i28;
        i23 = i22;
        _memcpy(i28 | 0, i23 | 0, i16 << 2) | 0;
        if ((i22 | 0) == 0) {
         break;
        }
        if ((HEAP32[i4 >> 2] | 0) == (i22 | 0)) {
         HEAP32[i4 >> 2] = 0;
         HEAP32[i13 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i23);
       }
      } while (0);
      HEAP32[(HEAP32[i4 >> 2] | 0) + (HEAP32[i14 >> 2] << 2) >> 2] = i15;
      if ((i17 | 0) != 0) {
       i16 = i17 + 4 | 0;
       HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
      }
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     }
    } while (0);
    i25 = i19 + 1 | 0;
    if (i25 >>> 0 < i21 >>> 0) {
     i19 = i25;
    } else {
     i26 = i21;
     break L79;
    }
   }
   if ((i27 | 0) == 53) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i27 | 0) == 62) {
    _WTFCrash();
    return 0;
   }
  }
 } while (0);
 __ZN7WebCore28DocumentStyleSheetCollection23analyzeStyleSheetChangeENS0_10UpdateFlagERKN3WTF6VectorINS2_6RefPtrINS_13CSSStyleSheetEEELj0ENS2_15CrashOnOverflowEEERNS0_23StyleResolverUpdateTypeERb(i1, i2, i5, i6, i7);
 i2 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore8Document18clearStyleResolverEv(i6);
 } else {
  i27 = i6 + 320 | 0;
  i21 = HEAP32[i27 >> 2] | 0;
  if ((i21 | 0) == 0) {
   __ZN7WebCore8Document19createStyleResolverEv(i6);
   i29 = HEAP32[i27 >> 2] | 0;
  } else {
   i29 = i21;
  }
  if ((i2 | 0) == 1) {
   __ZN7WebCore16DocumentRuleSets16resetAuthorStyleEv(i29 | 0);
   __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i29, 0, i5);
  } else {
   __ZN7WebCore13StyleResolver23appendAuthorStyleSheetsEjRKN3WTF6VectorINS1_6RefPtrINS_13CSSStyleSheetEEELj0ENS1_15CrashOnOverflowEEE(i29, HEAP32[i1 + 24 >> 2] | 0, i5);
  }
  i5 = HEAP32[i8 >> 2] | 0;
  i29 = i5 + 320 | 0;
  i2 = HEAP32[i29 >> 2] | 0;
  if ((i2 | 0) == 0) {
   __ZN7WebCore8Document19createStyleResolverEv(i5);
   i30 = HEAP32[i29 >> 2] | 0;
  } else {
   i30 = i2;
  }
  HEAP8[i1 + 140 | 0] = (HEAP32[i30 + 76 >> 2] | 0) != 0 | 0;
  HEAP8[i1 + 142 | 0] = HEAP8[i30 + 92 | 0] & 1;
  HEAP8[i1 + 144 | 0] = HEAP8[i30 + 93 | 0] & 1;
 }
 i30 = i1 + 28 | 0;
 i2 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = 0;
 if ((i2 | 0) != 0) {
  i30 = HEAP32[i2 >> 2] | 0;
  if ((i30 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i30);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 24 | 0;
 i30 = HEAP32[i2 >> 2] | 0;
 i29 = HEAP32[i14 >> 2] | 0;
 HEAP32[i2 >> 2] = i29;
 HEAP32[i14 >> 2] = i30;
 i30 = i1 + 16 | 0;
 i2 = HEAP32[i30 >> 2] | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i30 >> 2] = i5;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 20 | 0;
 i30 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i13 >> 2] = i30;
 i30 = i1 + 12 | 0;
 i2 = HEAP32[i30 >> 2] | 0;
 HEAP32[i30 >> 2] = i26;
 HEAP32[i12 >> 2] = i2;
 i26 = i1 + 4 | 0;
 i30 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i30;
 i26 = i1 + 8 | 0;
 i21 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i11 >> 2] = i21;
 i21 = 0;
 while (1) {
  if (i21 >>> 0 >= i29 >>> 0) {
   i31 = 0;
   break;
  }
  if ((HEAP8[(HEAP32[(HEAP32[i5 + (i21 << 2) >> 2] | 0) + 8 >> 2] | 0) + 60 | 0] & 16) == 0) {
   i21 = i21 + 1 | 0;
  } else {
   i31 = 1;
   break;
  }
 }
 HEAP8[i1 + 146 | 0] = i31;
 HEAP32[i1 + 96 >> 2] = 0;
 __ZNK7WebCore8Document46notifySeamlessChildDocumentsOfStylesheetUpdateEv(HEAP32[i8 >> 2] | 0);
 i8 = (HEAP8[i7] & 1) != 0;
 i7 = HEAP32[i14 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i1 = HEAP32[i4 >> 2] | 0;
  i31 = i1 + (i7 << 2) | 0;
  i7 = i1;
  while (1) {
   i1 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i21 = i1 + 4 | 0;
     i5 = i21 | 0;
     i29 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i29 | 0) != 0) {
      HEAP32[i5 >> 2] = i29;
      break;
     }
     i29 = i21 - 4 | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 1](i29);
    }
   } while (0);
   i7 = i7 + 4 | 0;
   if ((i7 | 0) == (i31 | 0)) {
    break;
   }
  }
  HEAP32[i14 >> 2] = 0;
 }
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i13 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i14);
 }
 if ((i2 | 0) != 0) {
  i14 = i30 + (i2 << 2) | 0;
  i2 = i30;
  while (1) {
   i13 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i4 = i13 + 4 | 0;
     i31 = i4 | 0;
     i7 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i31 >> 2] = i7;
      break;
     }
     i7 = i4 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
    }
   } while (0);
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i14 | 0)) {
    break;
   }
  }
  HEAP32[i12 >> 2] = 0;
 }
 if ((i30 | 0) == 0) {
  i10 = i8;
  STACKTOP = i3;
  return i10 | 0;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i30);
 i10 = i8;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN7WebCore28DocumentStyleSheetCollection23analyzeStyleSheetChangeENS0_10UpdateFlagERKN3WTF6VectorINS2_6RefPtrINS_13CSSStyleSheetEEELj0ENS2_15CrashOnOverflowEEERNS0_23StyleResolverUpdateTypeERb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP8[i5] = 1;
 i11 = i3 + 8 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 L1 : do {
  if ((i12 | 0) == 0) {
   i13 = 0;
  } else {
   i14 = i3 | 0;
   i15 = 0;
   i16 = 0;
   i17 = i12;
   while (1) {
    if (i17 >>> 0 <= i15 >>> 0) {
     break;
    }
    i18 = __ZNK7WebCore13CSSStyleSheet9isLoadingEv(HEAP32[(HEAP32[i14 >> 2] | 0) + (i15 << 2) >> 2] | 0) | 0 | i16;
    i19 = i15 + 1 | 0;
    if (i19 >>> 0 >= i12 >>> 0) {
     i13 = i18;
     break L1;
    }
    i15 = i19;
    i16 = i18;
    i17 = HEAP32[i11 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i17 = i1 + 92 | 0;
 if (!((HEAP8[i17] & 1) == 0 | i13)) {
  HEAP8[i17] = 0;
  STACKTOP = i6;
  return;
 }
 HEAP8[i17] = i13 & 1;
 if ((i2 | 0) != 1) {
  STACKTOP = i6;
  return;
 }
 i2 = i1 | 0;
 if ((HEAP32[(HEAP32[i2 >> 2] | 0) + 320 >> 2] | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i13 = i1 + 24 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if (i12 >>> 0 < i17 >>> 0) {
  STACKTOP = i6;
  return;
 }
 i16 = i7 | 0;
 HEAP32[i16 >> 2] = 0;
 i15 = i7 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 i14 = i7 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 L22 : do {
  if ((i17 | 0) == 0) {
   i20 = 0;
   i21 = 0;
   i22 = 44;
  } else {
   i18 = i1 + 16 | 0;
   i19 = i3 | 0;
   i23 = i8;
   i24 = 0;
   i25 = 0;
   i26 = 0;
   i27 = i17;
   L24 : while (1) {
    if (i24 >>> 0 < i12 >>> 0) {
     i28 = i24;
     i29 = i26;
     i30 = i27;
    } else {
     i22 = 78;
     break L22;
    }
    while (1) {
     if (i30 >>> 0 <= i25 >>> 0) {
      i22 = 16;
      break L24;
     }
     if ((HEAP32[i11 >> 2] | 0) >>> 0 <= i28 >>> 0) {
      i22 = 18;
      break L24;
     }
     i31 = HEAP32[(HEAP32[i19 >> 2] | 0) + (i28 << 2) >> 2] | 0;
     if ((HEAP32[(HEAP32[i18 >> 2] | 0) + (i25 << 2) >> 2] | 0) == (i31 | 0)) {
      break;
     }
     i32 = HEAP32[i31 + 8 >> 2] | 0;
     HEAP32[i8 >> 2] = i32;
     if ((i29 | 0) == (HEAP32[i15 >> 2] | 0)) {
      i31 = i29 + 1 | 0;
      i33 = HEAP32[i16 >> 2] | 0;
      do {
       if (i33 >>> 0 > i8 >>> 0) {
        i22 = 24;
       } else {
        if ((i33 + (i29 << 2) | 0) >>> 0 <= i8 >>> 0) {
         i22 = 24;
         break;
        }
        i34 = i23 - i33 >> 2;
        i35 = i31 + (i29 >>> 2) | 0;
        i36 = i35 >>> 0 > 16 >>> 0 ? i35 : 16;
        i35 = i36 >>> 0 > i31 >>> 0 ? i36 : i31;
        do {
         if (i29 >>> 0 < i35 >>> 0) {
          if (i35 >>> 0 > 1073741823 >>> 0) {
           i22 = 34;
           break L24;
          }
          i36 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 2) | 0;
          HEAP32[i15 >> 2] = i36 >>> 2;
          i37 = __ZN3WTF10fastMallocEj(i36) | 0;
          HEAP32[i16 >> 2] = i37;
          i36 = i33;
          _memcpy(i37 | 0, i36 | 0, i29 << 2) | 0;
          if ((i33 | 0) == 0) {
           break;
          }
          if ((HEAP32[i16 >> 2] | 0) == (i33 | 0)) {
           HEAP32[i16 >> 2] = 0;
           HEAP32[i15 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i36);
         }
        } while (0);
        i35 = HEAP32[i16 >> 2] | 0;
        i38 = i35 + (i34 << 2) | 0;
        i39 = i35;
       }
      } while (0);
      if ((i22 | 0) == 24) {
       i22 = 0;
       i35 = i31 + (i29 >>> 2) | 0;
       i36 = i35 >>> 0 > 16 >>> 0 ? i35 : 16;
       i35 = i36 >>> 0 > i31 >>> 0 ? i36 : i31;
       do {
        if (i29 >>> 0 < i35 >>> 0) {
         if (i35 >>> 0 > 1073741823 >>> 0) {
          i22 = 26;
          break L24;
         }
         i36 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 2) | 0;
         HEAP32[i15 >> 2] = i36 >>> 2;
         i37 = __ZN3WTF10fastMallocEj(i36) | 0;
         HEAP32[i16 >> 2] = i37;
         i36 = i33;
         _memcpy(i37 | 0, i36 | 0, i29 << 2) | 0;
         if ((i33 | 0) == 0) {
          break;
         }
         if ((HEAP32[i16 >> 2] | 0) == (i33 | 0)) {
          HEAP32[i16 >> 2] = 0;
          HEAP32[i15 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i36);
        }
       } while (0);
       i38 = i8;
       i39 = HEAP32[i16 >> 2] | 0;
      }
      HEAP32[i39 + (HEAP32[i14 >> 2] << 2) >> 2] = HEAP32[i38 >> 2];
      i40 = HEAP32[i14 >> 2] | 0;
     } else {
      HEAP32[(HEAP32[i16 >> 2] | 0) + (i29 << 2) >> 2] = i32;
      i40 = HEAP32[i14 >> 2] | 0;
     }
     i33 = i40 + 1 | 0;
     HEAP32[i14 >> 2] = i33;
     i35 = i28 + 1 | 0;
     if ((i35 | 0) == (i12 | 0)) {
      i41 = i33;
      break L22;
     }
     i28 = i35;
     i29 = i33;
     i30 = HEAP32[i13 >> 2] | 0;
    }
    i33 = i28 + 1 | 0;
    i35 = i25 + 1 | 0;
    if (i35 >>> 0 < i17 >>> 0) {
     i24 = i33;
     i25 = i35;
     i26 = i29;
     i27 = i30;
    } else {
     i20 = i33;
     i21 = i29;
     i22 = 44;
     break L22;
    }
   }
   if ((i22 | 0) == 34) {
    _WTFCrash();
   } else if ((i22 | 0) == 26) {
    _WTFCrash();
   } else if ((i22 | 0) == 16) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i22 | 0) == 18) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 do {
  if ((i22 | 0) == 44) {
   i29 = (i21 | 0) == 0;
   L66 : do {
    if (i20 >>> 0 < i12 >>> 0) {
     i30 = i3 | 0;
     i17 = i9;
     i28 = i20;
     i13 = i21;
     L68 : while (1) {
      if ((HEAP32[i11 >> 2] | 0) >>> 0 <= i28 >>> 0) {
       i22 = 47;
       break;
      }
      i40 = HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + (i28 << 2) >> 2] | 0) + 8 >> 2] | 0;
      HEAP32[i9 >> 2] = i40;
      if ((i13 | 0) == (HEAP32[i15 >> 2] | 0)) {
       i38 = i13 + 1 | 0;
       i39 = HEAP32[i16 >> 2] | 0;
       do {
        if (i39 >>> 0 > i9 >>> 0) {
         i22 = 52;
        } else {
         if ((i39 + (i13 << 2) | 0) >>> 0 <= i9 >>> 0) {
          i22 = 52;
          break;
         }
         i8 = i17 - i39 >> 2;
         i1 = i38 + (i13 >>> 2) | 0;
         i27 = i1 >>> 0 > 16 >>> 0 ? i1 : 16;
         i1 = i27 >>> 0 > i38 >>> 0 ? i27 : i38;
         do {
          if (i13 >>> 0 < i1 >>> 0) {
           if (i1 >>> 0 > 1073741823 >>> 0) {
            i22 = 62;
            break L68;
           }
           i27 = __ZN3WTF18fastMallocGoodSizeEj(i1 << 2) | 0;
           HEAP32[i15 >> 2] = i27 >>> 2;
           i26 = __ZN3WTF10fastMallocEj(i27) | 0;
           HEAP32[i16 >> 2] = i26;
           i27 = i39;
           _memcpy(i26 | 0, i27 | 0, i13 << 2) | 0;
           if ((i39 | 0) == 0) {
            break;
           }
           if ((HEAP32[i16 >> 2] | 0) == (i39 | 0)) {
            HEAP32[i16 >> 2] = 0;
            HEAP32[i15 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i27);
          }
         } while (0);
         i1 = HEAP32[i16 >> 2] | 0;
         i42 = i1 + (i8 << 2) | 0;
         i43 = i1;
        }
       } while (0);
       if ((i22 | 0) == 52) {
        i22 = 0;
        i32 = i38 + (i13 >>> 2) | 0;
        i1 = i32 >>> 0 > 16 >>> 0 ? i32 : 16;
        i32 = i1 >>> 0 > i38 >>> 0 ? i1 : i38;
        do {
         if (i13 >>> 0 < i32 >>> 0) {
          if (i32 >>> 0 > 1073741823 >>> 0) {
           i22 = 54;
           break L68;
          }
          i1 = __ZN3WTF18fastMallocGoodSizeEj(i32 << 2) | 0;
          HEAP32[i15 >> 2] = i1 >>> 2;
          i34 = __ZN3WTF10fastMallocEj(i1) | 0;
          HEAP32[i16 >> 2] = i34;
          i1 = i39;
          _memcpy(i34 | 0, i1 | 0, i13 << 2) | 0;
          if ((i39 | 0) == 0) {
           break;
          }
          if ((HEAP32[i16 >> 2] | 0) == (i39 | 0)) {
           HEAP32[i16 >> 2] = 0;
           HEAP32[i15 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i1);
         }
        } while (0);
        i42 = i9;
        i43 = HEAP32[i16 >> 2] | 0;
       }
       HEAP32[i43 + (HEAP32[i14 >> 2] << 2) >> 2] = HEAP32[i42 >> 2];
       i44 = HEAP32[i14 >> 2] | 0;
      } else {
       HEAP32[(HEAP32[i16 >> 2] | 0) + (i13 << 2) >> 2] = i40;
       i44 = HEAP32[i14 >> 2] | 0;
      }
      i13 = i44 + 1 | 0;
      HEAP32[i14 >> 2] = i13;
      i28 = i28 + 1 | 0;
      if (i28 >>> 0 >= i12 >>> 0) {
       break L66;
      }
     }
     if ((i22 | 0) == 47) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i22 | 0) == 54) {
      _WTFCrash();
     } else if ((i22 | 0) == 62) {
      _WTFCrash();
     }
    }
   } while (0);
   HEAP32[i4 >> 2] = i29 ? 2 : 1;
   if ((__ZNK7WebCore8Document4bodyEv(HEAP32[i2 >> 2] | 0) | 0) == 0) {
    i22 = 78;
    break;
   }
   if ((HEAP8[(HEAP32[i2 >> 2] | 0) + 325 | 0] & 1) != 0) {
    i22 = 78;
    break;
   }
   __ZN7WebCore25StyleInvalidationAnalysisC1ERKN3WTF6VectorIPNS_18StyleSheetContentsELj0ENS1_15CrashOnOverflowEEE(i10, i7);
   if ((HEAP8[i10 | 0] & 1) == 0) {
    __ZN7WebCore25StyleInvalidationAnalysis15invalidateStyleERNS_8DocumentE(i10, HEAP32[i2 >> 2] | 0);
    HEAP8[i5] = 0;
   }
   i28 = HEAP32[i10 + 24 >> 2] | 0;
   if ((i28 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i28);
   }
   i28 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i22 = 78;
    break;
   }
   __ZN3WTF8fastFreeEPv(i28);
   i22 = 78;
  }
 } while (0);
 if ((i22 | 0) == 78) {
  i41 = HEAP32[i14 >> 2] | 0;
 }
 if ((i41 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
 }
 i14 = HEAP32[i16 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i16 >> 2] = 0;
 HEAP32[i15 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore28DocumentStyleSheetCollection29updateInjectedStyleSheetCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 64 | 0;
 if ((HEAP8[i6] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i6] = 1;
 i6 = i1 + 40 | 0;
 i7 = i1 + 44 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   i8 = i1 + 48 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = i6 | 0;
   if ((i9 | 0) != 0) {
    i11 = HEAP32[i10 >> 2] | 0;
    i12 = i11 + (i9 << 2) | 0;
    i9 = i11;
    while (1) {
     i11 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i11 | 0) != 0) {
       i13 = i11 + 4 | 0;
       i14 = i13 | 0;
       i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       if ((i15 | 0) != 0) {
        HEAP32[i14 >> 2] = i15;
        break;
       }
       i15 = i13 - 4 | 0;
       if ((i15 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
      }
     } while (0);
     i9 = i9 + 4 | 0;
     if ((i9 | 0) == (i12 | 0)) {
      break;
     }
    }
    HEAP32[i8 >> 2] = 0;
   }
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   HEAP32[i10 >> 2] = 0;
   HEAP32[i7 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i12);
  }
 } while (0);
 i12 = i1 + 52 | 0;
 i9 = i1 + 56 | 0;
 do {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   i11 = i1 + 60 | 0;
   i15 = HEAP32[i11 >> 2] | 0;
   i13 = i12 | 0;
   if ((i15 | 0) != 0) {
    i14 = HEAP32[i13 >> 2] | 0;
    i16 = i14 + (i15 << 2) | 0;
    i15 = i14;
    while (1) {
     i14 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i14 | 0) != 0) {
       i17 = i14 + 4 | 0;
       i18 = i17 | 0;
       i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       if ((i19 | 0) != 0) {
        HEAP32[i18 >> 2] = i19;
        break;
       }
       i19 = i17 - 4 | 0;
       if ((i19 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
      }
     } while (0);
     i15 = i15 + 4 | 0;
     if ((i15 | 0) == (i16 | 0)) {
      break;
     }
    }
    HEAP32[i11 >> 2] = 0;
   }
   i16 = HEAP32[i13 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   HEAP32[i13 >> 2] = 0;
   HEAP32[i9 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i16);
  }
 } while (0);
 i16 = i1 | 0;
 i15 = __ZNK7WebCore8Document4pageEv(HEAP32[i16 >> 2] | 0) | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i10 = i15 + 160 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore4Page9initGroupEv(i15);
  i20 = HEAP32[i10 >> 2] | 0;
 } else {
  i20 = i8;
 }
 i8 = HEAP32[i20 + 100 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i20 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 i15 = i20 + (i10 << 3) | 0;
 if ((HEAP32[i8 + 12 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 L50 : do {
  if ((i10 | 0) == 0) {
   i21 = i20;
  } else {
   i8 = i20;
   while (1) {
    i14 = HEAP32[i8 >> 2] | 0;
    if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
     i21 = i8;
     break L50;
    }
    i8 = i8 + 8 | 0;
    if ((i8 | 0) == (i15 | 0)) {
     break;
    }
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i21 | 0) == (i15 | 0)) {
  STACKTOP = i2;
  return;
 }
 i20 = i5 | 0;
 i10 = i4 | 0;
 i8 = i3 | 0;
 i13 = i1 + 48 | 0;
 i11 = i6 | 0;
 i14 = i3;
 i19 = i1 + 60 | 0;
 i1 = i12 | 0;
 i17 = i21;
 L59 : while (1) {
  i21 = HEAP32[i17 + 4 >> 2] | 0;
  i18 = i21 + 8 | 0;
  if ((HEAP32[i18 >> 2] | 0) != 0) {
   i22 = i21 | 0;
   i21 = 0;
   while (1) {
    i23 = HEAP32[(HEAP32[i22 >> 2] | 0) + (i21 << 2) >> 2] | 0;
    if ((HEAP32[i23 + 76 >> 2] | 0) == 1) {
     if ((__ZNK7WebCore8Document12ownerElementEv(HEAP32[i16 >> 2] | 0) | 0) == 0) {
      i24 = 40;
     }
    } else {
     i24 = 40;
    }
    do {
     if ((i24 | 0) == 40) {
      i24 = 0;
      if (!(__ZN7WebCore21UserContentURLPattern15matchesPatternsERKNS_3URLERKN3WTF6VectorINS4_6StringELj0ENS4_15CrashOnOverflowEEESA_((HEAP32[i16 >> 2] | 0) + 356 | 0, i23 + 52 | 0, i23 + 64 | 0) | 0)) {
       break;
      }
      i25 = HEAP32[i16 >> 2] | 0;
      HEAP32[i20 >> 2] = 0;
      __ZN7WebCore13CSSStyleSheet12createInlineERNS_4NodeERKNS_3URLERKN3WTF6StringE(i4, i25, i23 + 4 | 0, i5);
      HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
      i25 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i25 | 0) != 0) {
        i26 = i25 | 0;
        i27 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
        if ((i27 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i25);
         break;
        } else {
         HEAP32[i26 >> 2] = i27;
         break;
        }
       }
      } while (0);
      i25 = (HEAP32[i23 + 80 >> 2] | 0) == 0;
      do {
       if (i25) {
        i27 = HEAP32[i13 >> 2] | 0;
        if ((i27 | 0) != (HEAP32[i7 >> 2] | 0)) {
         i26 = HEAP32[i8 >> 2] | 0;
         HEAP32[(HEAP32[i11 >> 2] | 0) + (i27 << 2) >> 2] = i26;
         if ((i26 | 0) != 0) {
          i28 = i26 + 4 | 0;
          HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
         }
         HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
         break;
        }
        i28 = i27 + 1 | 0;
        i26 = HEAP32[i11 >> 2] | 0;
        do {
         if (i26 >>> 0 > i3 >>> 0) {
          i24 = 52;
         } else {
          if ((i26 + (i27 << 2) | 0) >>> 0 <= i3 >>> 0) {
           i24 = 52;
           break;
          }
          __ZN3WTF6VectorINS_6RefPtrIN7WebCore13CSSStyleSheetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i28);
          i29 = HEAP32[i11 >> 2] | 0;
          i30 = i29 + (i14 - i26 >> 2 << 2) | 0;
          i31 = i29;
         }
        } while (0);
        if ((i24 | 0) == 52) {
         i24 = 0;
         __ZN3WTF6VectorINS_6RefPtrIN7WebCore13CSSStyleSheetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i28);
         i30 = i3;
         i31 = HEAP32[i11 >> 2] | 0;
        }
        i26 = HEAP32[i30 >> 2] | 0;
        HEAP32[i31 + (HEAP32[i13 >> 2] << 2) >> 2] = i26;
        if ((i26 | 0) != 0) {
         i27 = i26 + 4 | 0;
         HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
        }
        HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
       } else {
        i27 = HEAP32[i19 >> 2] | 0;
        if ((i27 | 0) != (HEAP32[i9 >> 2] | 0)) {
         i26 = HEAP32[i8 >> 2] | 0;
         HEAP32[(HEAP32[i1 >> 2] | 0) + (i27 << 2) >> 2] = i26;
         if ((i26 | 0) != 0) {
          i29 = i26 + 4 | 0;
          HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
         }
         HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
         break;
        }
        i29 = i27 + 1 | 0;
        i26 = HEAP32[i1 >> 2] | 0;
        do {
         if (i26 >>> 0 > i3 >>> 0) {
          i24 = 63;
         } else {
          if ((i26 + (i27 << 2) | 0) >>> 0 <= i3 >>> 0) {
           i24 = 63;
           break;
          }
          __ZN3WTF6VectorINS_6RefPtrIN7WebCore13CSSStyleSheetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i12, i29);
          i32 = HEAP32[i1 >> 2] | 0;
          i33 = i32 + (i14 - i26 >> 2 << 2) | 0;
          i34 = i32;
         }
        } while (0);
        if ((i24 | 0) == 63) {
         i24 = 0;
         __ZN3WTF6VectorINS_6RefPtrIN7WebCore13CSSStyleSheetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i12, i29);
         i33 = i3;
         i34 = HEAP32[i1 >> 2] | 0;
        }
        i26 = HEAP32[i33 >> 2] | 0;
        HEAP32[i34 + (HEAP32[i19 >> 2] << 2) >> 2] = i26;
        if ((i26 | 0) != 0) {
         i27 = i26 + 4 | 0;
         HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
        }
        HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
       }
      } while (0);
      i27 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) + 60 | 0;
      HEAP8[i27] = HEAP8[i27] & -3 | (i25 & 1) << 1;
      __ZN7WebCore18StyleSheetContents11parseStringERKN3WTF6StringE(HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0, i23 | 0) | 0;
      i27 = HEAP32[i8 >> 2] | 0;
      if ((i27 | 0) == 0) {
       break;
      }
      i26 = i27 + 4 | 0;
      i27 = i26 | 0;
      i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i28 | 0) != 0) {
       HEAP32[i27 >> 2] = i28;
       break;
      }
      i28 = i26 - 4 | 0;
      if ((i28 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 1](i28);
     }
    } while (0);
    i21 = i21 + 1 | 0;
    if (i21 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
     break;
    }
   }
  }
  i18 = i17 + 8 | 0;
  if ((i18 | 0) == (i15 | 0)) {
   i24 = 85;
   break;
  } else {
   i35 = i18;
  }
  while (1) {
   i18 = HEAP32[i35 >> 2] | 0;
   if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
    break;
   }
   i18 = i35 + 8 | 0;
   if ((i18 | 0) == (i15 | 0)) {
    i24 = 87;
    break L59;
   } else {
    i35 = i18;
   }
  }
  if ((i35 | 0) == (i15 | 0)) {
   i24 = 86;
   break;
  } else {
   i17 = i35;
  }
 }
 if ((i24 | 0) == 85) {
  STACKTOP = i2;
  return;
 } else if ((i24 | 0) == 86) {
  STACKTOP = i2;
  return;
 } else if ((i24 | 0) == 87) {
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore4NodeELj32EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj32EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
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
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore4NodeELj32EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i2, i8, 0) | 0;
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
 i9 = (i7 >>> 23) + ~i7 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i7;
 i7 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i10 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == 0) {
   break;
  } else if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i8 | 0)) {
    i18 = 8;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i7 | 0) == 0 ? i9 : i7;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i7 = i15;
 }
 if ((i18 | 0) == 8) {
  i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i10 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i10 = i11 + 4 | 0;
    if ((HEAP8[i10] & 1) != 0) {
     i21 = 0;
     break;
    }
    i7 = i14 + 12 | 0;
    if ((i7 | 0) != (i11 + 392 | 0)) {
     i21 = i7;
     break;
    }
    HEAP8[i10] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 HEAP32[i20 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i3 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i3;
 i20 = i2 + 4 | 0;
 i14 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i14 | 0)) {
  i22 = i19;
  i23 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i24 = 8;
  } else {
   i21 = i14 << 1;
   i24 = (i3 * 6 & -1 | 0) < (i21 | 0) ? i14 : i21;
  }
  i21 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore4NodeELj32EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i2, i24, i19) | 0;
  i22 = i21;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore13CSSStyleSheetES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPKN7WebCore13CSSStyleSheetES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_(i2, 0) | 0;
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
  i13 = __ZN3WTF9HashTableIPKN7WebCore13CSSStyleSheetES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_(i2, i25) | 0;
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
function __ZN3WTF9HashTableIPKN7WebCore13CSSStyleSheetES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_(i1, i2) {
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
function __ZN7WebCore28DocumentStyleSheetCollection13pageUserSheetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 36 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i8 = i7;
  STACKTOP = i2;
  return i8 | 0;
 }
 i7 = i1 | 0;
 i1 = __ZNK7WebCore8Document4pageEv(HEAP32[i7 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i9 = i3 | 0;
 i10 = HEAP32[(__ZNK7WebCore4Page14userStyleSheetEv(i1) | 0) >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i1 = i10 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 do {
  if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
   i11 = i1;
   i12 = 0;
  } else {
   i10 = HEAP32[i7 >> 2] | 0;
   i13 = (__ZNK7WebCore8Document8settingsEv(i10) | 0) + 12 | 0;
   i14 = i5 | 0;
   HEAP32[i14 >> 2] = 0;
   __ZN7WebCore13CSSStyleSheet12createInlineERNS_4NodeERKNS_3URLERKN3WTF6StringE(i4, i10 | 0, i13, i5);
   i13 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
   do {
    if ((i13 | 0) != 0) {
     i10 = i13 + 4 | 0;
     i15 = i10 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i15 >> 2] = i16;
      break;
     }
     i16 = i10 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
    }
   } while (0);
   i13 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i16 = i13 | 0;
     i10 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i16 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i13 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) + 60 | 0;
   HEAP8[i13] = HEAP8[i13] | 2;
   __ZN7WebCore18StyleSheetContents11parseStringERKN3WTF6StringE(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0, i3) | 0;
   i13 = HEAP32[i6 >> 2] | 0;
   i14 = HEAP32[i9 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i8 = i13;
   } else {
    i11 = i14;
    i12 = i13;
    break;
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 i9 = i11 | 0;
 i6 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  i8 = i12;
  STACKTOP = i2;
  return i8 | 0;
 } else {
  HEAP32[i9 >> 2] = i6;
  i8 = i12;
  STACKTOP = i2;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore28DocumentStyleSheetCollection26addStyleSheetCandidateNodeERNS_4NodeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (i3) {
  if ((__ZNK7WebCore8Document4bodyEv(HEAP32[i1 >> 2] | 0) | 0) == 0) {
   i13 = 4;
  }
 } else {
  i13 = 4;
 }
 do {
  if ((i13 | 0) == 4) {
   i3 = i1 + 100 | 0;
   if ((HEAP32[i1 + 112 >> 2] | 0) == 0) {
    break;
   }
   i14 = HEAP32[i1 + 120 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i15 = i1 + 124 | 0;
   i16 = 0;
   while (1) {
    i17 = HEAP32[((i16 | 0) == 0 ? i15 : i16 + 4 | 0) >> 2] | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((__ZN7WebCore4Node23compareDocumentPositionEPS0_(i18, i2) | 0) << 16 >> 16 == 4) {
     i13 = 12;
     break;
    }
    HEAP32[i8 >> 2] = i18;
    if ((i17 | 0) == (i14 | 0)) {
     i13 = 14;
     break;
    } else {
     i16 = i17;
    }
   }
   if ((i13 | 0) == 14) {
    HEAP32[i11 >> 2] = i2;
    __ZN3WTF11ListHashSetIPN7WebCore4NodeELj32ENS_7PtrHashIS3_EEE12insertBeforeERKS3_OS3_(i12, i3, i8, i11);
    STACKTOP = i4;
    return;
   } else if ((i13 | 0) == 12) {
    HEAP32[i9 >> 2] = i2;
    __ZN3WTF11ListHashSetIPN7WebCore4NodeELj32ENS_7PtrHashIS3_EEE12insertBeforeERKS3_OS3_(i10, i3, i8, i9);
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = i2;
 HEAP32[i6 >> 2] = HEAP32[i1 + 128 >> 2];
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore4NodeELj32EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj32EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i5, i1 + 100 | 0, i7, i6);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
 i5 = i1 + 124 | 0;
 HEAP32[i6 + 4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 8 >> 2] = 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 + 120 >> 2] = i6;
 } else {
  HEAP32[i7 + 8 >> 2] = i6;
 }
 HEAP32[i5 >> 2] = i6;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore28DocumentStyleSheetCollection25activeStyleSheetsContainsEPKNS_13CSSStyleSheetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 28 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = __ZN3WTF10fastMallocEj(20) | 0;
  _memset(i8 | 0, 0, 20) | 0;
  i9 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i8;
  if ((i9 | 0) != 0) {
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i8);
   }
   __ZN3WTF8fastFreeEPv(i9);
  }
  i9 = i1 + 24 | 0;
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   i8 = i1 + 16 | 0;
   i1 = 0;
   while (1) {
    i10 = HEAP32[i6 >> 2] | 0;
    HEAP32[i4 >> 2] = HEAP32[(HEAP32[i8 >> 2] | 0) + (i1 << 2) >> 2];
    __ZN3WTF9HashTableIPKN7WebCore13CSSStyleSheetES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i5, i10 | 0, i4, i4);
    i1 = i1 + 1 | 0;
    if (i1 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
     break;
    }
   }
  }
  i11 = HEAP32[i6 >> 2] | 0;
 } else {
  i11 = i7;
 }
 i7 = HEAP32[i11 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i6 = HEAP32[i11 + 8 >> 2] | 0;
 i11 = i2;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 i11 = i6 & i9;
 i1 = i7 + (i11 << 2) | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 L18 : do {
  if ((i4 | 0) == (i2 | 0)) {
   i13 = i1;
  } else {
   i5 = (i9 >>> 23) + ~i9 | 0;
   i8 = i5 << 12 ^ i5;
   i5 = i8 >>> 7 ^ i8;
   i8 = i5 << 2 ^ i5;
   i5 = i8 >>> 20 ^ i8 | 1;
   i8 = 0;
   i10 = i11;
   i14 = i4;
   while (1) {
    if ((i14 | 0) == 0) {
     i13 = 0;
     break L18;
    }
    i15 = (i8 | 0) == 0 ? i5 : i8;
    i16 = i15 + i10 & i6;
    i17 = i7 + (i16 << 2) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 | 0) == (i2 | 0)) {
     i13 = i17;
     break;
    } else {
     i8 = i15;
     i10 = i16;
     i14 = i18;
    }
   }
  }
 } while (0);
 i12 = (i13 | 0) != 0;
 STACKTOP = i3;
 return i12 | 0;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore4NodeELj32EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   i18 = i17;
   i19 = i18 + ~(i18 << 15) | 0;
   i18 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i18 >>> 6 ^ i18;
   i18 = i19 + ~(i19 << 11) | 0;
   i19 = i18 >>> 16 ^ i18;
   i18 = (i19 >>> 23) + ~i19 | 0;
   i20 = i18 << 12 ^ i18;
   i18 = i20 >>> 7 ^ i20;
   i20 = i18 << 2 ^ i18;
   i18 = i20 >>> 20 ^ i20 | 1;
   i20 = i19;
   i19 = 0;
   i21 = 0;
   while (1) {
    i22 = i20 & i16;
    i23 = i14 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == 0) {
     i26 = 5;
     break;
    } else if ((i25 | 0) == (-1 | 0)) {
     i27 = i23;
    } else {
     if ((HEAP32[i24 >> 2] | 0) == (i17 | 0)) {
      i28 = i23;
      break;
     } else {
      i27 = i21;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i20 = i24 + i22 | 0;
    i19 = i24;
    i21 = i27;
   }
   if ((i26 | 0) == 5) {
    i26 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   HEAP32[i28 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i28 : i12;
  }
  i19 = i11 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i19;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore4NodeELj32EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6removeERKS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = HEAP32[i1 + 4 >> 2] | 0;
   i5 = i4 << 2 | 0;
   i6 = i4;
  } else {
   i4 = HEAP32[i1 + 8 >> 2] | 0;
   i7 = HEAP32[HEAP32[i2 >> 2] >> 2] | 0;
   i8 = i7;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   i8 = (i9 >>> 23) + ~i9 | 0;
   i10 = i8 << 12 ^ i8;
   i8 = i10 >>> 7 ^ i10;
   i10 = i8 << 2 ^ i8;
   i8 = i10 >>> 20 ^ i10 | 1;
   i10 = i9;
   i9 = 0;
   while (1) {
    i11 = i10 & i4;
    i12 = i3 + (i11 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = i13;
    if ((i14 | 0) == 0) {
     i15 = 5;
     break;
    } else if ((i14 | 0) != (-1 | 0)) {
     if ((HEAP32[i13 >> 2] | 0) == (i7 | 0)) {
      i15 = 8;
      break;
     }
    }
    i13 = (i9 | 0) == 0 ? i8 : i9;
    i10 = i13 + i11 | 0;
    i9 = i13;
   }
   if ((i15 | 0) == 5) {
    i9 = HEAP32[i1 + 4 >> 2] | 0;
    i5 = i3 + (i9 << 2) | 0;
    i6 = i9;
    break;
   } else if ((i15 | 0) == 8) {
    i9 = HEAP32[i1 + 4 >> 2] | 0;
    i5 = (i12 | 0) == 0 ? i3 + (i9 << 2) | 0 : i12;
    i6 = i9;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == (i3 + (i6 << 2) | 0)) {
  return;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i6;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i6 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore4NodeELj32EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i1, (i5 | 0) / 2 & -1, 0) | 0;
 return;
}
function __ZN3WTF11ListHashSetIPN7WebCore4NodeELj32ENS_7PtrHashIS3_EEE12insertBeforeERKS3_OS3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 __ZN3WTF11ListHashSetIPN7WebCore4NodeELj32ENS_7PtrHashIS3_EEE4findERKS3_(i8, i2, i3);
 i3 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 + 28 >> 2];
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore4NodeELj32EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj32EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i6, i2 | 0, i4, i7);
 i7 = HEAP8[i6 + 8 | 0] & 1;
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 << 24 >> 24 != 0) {
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i8 = i2 + 24 | 0;
    HEAP32[i6 + 4 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i6 + 8 >> 2] = 0;
    i9 = HEAP32[i8 >> 2] | 0;
    if ((i9 | 0) == 0) {
     HEAP32[i2 + 20 >> 2] = i6;
    } else {
     HEAP32[i9 + 8 >> 2] = i6;
    }
    HEAP32[i8 >> 2] = i6;
    break;
   } else {
    HEAP32[i6 + 8 >> 2] = i3;
    i8 = i3 + 4 | 0;
    i9 = i6 + 4 | 0;
    HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i10 + 8 >> 2] = i6;
    }
    HEAP32[i8 >> 2] = i6;
    if ((HEAP32[i9 >> 2] | 0) != 0) {
     break;
    }
    HEAP32[i2 + 20 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 i4 = i1;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = i7;
 STACKTOP = i5;
 return;
}
function __ZN3WTF11ListHashSetIPN7WebCore4NodeELj32ENS_7PtrHashIS3_EEE4findERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   i6 = i5 << 2 | 0;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = (i10 >>> 23) + ~i10 | 0;
   i11 = i9 << 12 ^ i9;
   i9 = i11 >>> 7 ^ i11;
   i11 = i9 << 2 ^ i9;
   i9 = i11 >>> 20 ^ i11 | 1;
   i11 = i10;
   i10 = 0;
   while (1) {
    i12 = i11 & i5;
    i13 = i4 + (i12 << 2) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    i15 = i14;
    if ((i15 | 0) == 0) {
     i16 = 5;
     break;
    } else if ((i15 | 0) != (-1 | 0)) {
     if ((HEAP32[i14 >> 2] | 0) == (i8 | 0)) {
      i16 = 8;
      break;
     }
    }
    i14 = (i10 | 0) == 0 ? i9 : i10;
    i11 = i14 + i12 | 0;
    i10 = i14;
   }
   if ((i16 | 0) == 5) {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = i4 + (i10 << 2) | 0;
    i7 = i10;
    break;
   } else if ((i16 | 0) == 8) {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = (i13 | 0) == 0 ? i4 + (i10 << 2) | 0 : i13;
    i7 = i10;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == (i4 + (i7 << 2) | 0)) {
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = 0;
  return;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i7;
  return;
 }
}
function __ZN7WebCore28DocumentStyleSheetCollection29removeStyleSheetCandidateNodeERNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 100 | 0;
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF11ListHashSetIPN7WebCore4NodeELj32ENS_7PtrHashIS3_EEE4findERKS3_(i5, i7, i6);
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = i6;
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore4NodeELj32EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6removeERKS6_(i7 | 0, i4);
 i4 = i6 + 4 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 i5 = i6 + 8 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 + 120 >> 2] = i2;
 } else {
  HEAP32[i7 + 8 >> 2] = i2;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i1 + 124 >> 2] = i7;
 } else {
  HEAP32[i2 + 4 >> 2] = i7;
 }
 i7 = HEAP32[i1 + 128 >> 2] | 0;
 i1 = i7 + 8 | 0;
 do {
  if (i1 >>> 0 <= i6 >>> 0) {
   if ((i1 + 384 | 0) >>> 0 <= i6 >>> 0) {
    break;
   }
   i2 = i7 | 0;
   HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i2 >> 2] = i6;
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore28DocumentStyleSheetCollection18detachFromDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i2 + 24 >> 2] = 0;
 }
 i2 = i1 + 48 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i3 = i1 + 40 | 0;
  i4 = 0;
  while (1) {
   HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + (i4 << 2) >> 2] | 0) + 24 >> 2] = 0;
   i4 = i4 + 1 | 0;
   if (i4 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i2 = i1 + 60 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i4 = i1 + 52 | 0;
  i3 = 0;
  while (1) {
   HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + (i3 << 2) >> 2] | 0) + 24 >> 2] = 0;
   i3 = i3 + 1 | 0;
   if (i3 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i2 = i1 + 76 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i3 = i1 + 68 | 0;
  i4 = 0;
  while (1) {
   HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + (i4 << 2) >> 2] | 0) + 24 >> 2] = 0;
   i4 = i4 + 1 | 0;
   if (i4 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i2 = i1 + 88 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i4 = i1 + 80 | 0;
 i1 = 0;
 while (1) {
  HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + (i1 << 2) >> 2] | 0) + 24 >> 2] = 0;
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore28DocumentStyleSheetCollection14addAuthorSheetEN3WTF7PassRefINS_18StyleSheetContentsEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 80 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 i2 = i1 | 0;
 __ZN7WebCore13CSSStyleSheet6createEN3WTF7PassRefINS_18StyleSheetContentsEEEPNS_4NodeE(i4, i5, HEAP32[i2 >> 2] | 0);
 i5 = i1 + 88 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == (HEAP32[i1 + 84 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore13CSSStyleSheetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i7 + 1 | 0);
  HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = HEAP32[i4 >> 2];
 } else {
  HEAP32[(HEAP32[i6 >> 2] | 0) + (i7 << 2) >> 2] = HEAP32[i4 >> 2];
 }
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[i2 >> 2] | 0, 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore28DocumentStyleSheetCollection12addUserSheetEN3WTF7PassRefINS_18StyleSheetContentsEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 68 | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 i2 = i1 | 0;
 __ZN7WebCore13CSSStyleSheet6createEN3WTF7PassRefINS_18StyleSheetContentsEEEPNS_4NodeE(i4, i5, HEAP32[i2 >> 2] | 0);
 i5 = i1 + 76 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == (HEAP32[i1 + 72 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore13CSSStyleSheetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i7 + 1 | 0);
  HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = HEAP32[i4 >> 2];
 } else {
  HEAP32[(HEAP32[i6 >> 2] | 0) + (i7 << 2) >> 2] = HEAP32[i4 >> 2];
 }
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[i2 >> 2] | 0, 0);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore13CSSStyleSheetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore10StyleSheetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore28DocumentStyleSheetCollection19updatePageUserSheetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  i2 = i3 + 4 | 0;
  i3 = i2 | 0;
  i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
  do {
   if ((i4 | 0) == 0) {
    i5 = i2 - 4 | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
   } else {
    HEAP32[i3 >> 2] = i4;
   }
  } while (0);
  __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[i1 >> 2] | 0, 1);
 }
 if ((__ZN7WebCore28DocumentStyleSheetCollection13pageUserSheetEv(i1) | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[i1 >> 2] | 0, 0);
 return;
}
function __ZN7WebCore28DocumentStyleSheetCollection22combineCSSFeatureFlagsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = i2 + 320 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i2);
  i5 = HEAP32[i3 >> 2] | 0;
 } else {
  i5 = i4;
 }
 i4 = i1 + 140 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  i6 = (HEAP32[i5 + 76 >> 2] | 0) != 0 | 0;
 } else {
  i6 = 1;
 }
 HEAP8[i4] = i6;
 i6 = i1 + 142 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  i7 = HEAP8[i5 + 92 | 0] & 1;
 } else {
  i7 = 1;
 }
 HEAP8[i6] = i7;
 i7 = i1 + 144 | 0;
 if ((HEAP8[i7] & 1) != 0) {
  i8 = 1;
  HEAP8[i7] = i8;
  return;
 }
 i8 = HEAP8[i5 + 93 | 0] & 1;
 HEAP8[i7] = i8;
 return;
}
function __ZN7WebCore28DocumentStyleSheetCollection18clearPageUserSheetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 i2 = i3 + 4 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  } else {
   HEAP32[i3 >> 2] = i4;
  }
 } while (0);
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[i1 >> 2] | 0, 1);
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
function __ZN7WebCore28DocumentStyleSheetCollection20resetCSSFeatureFlagsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = i2 + 320 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i2);
  i5 = HEAP32[i3 >> 2] | 0;
 } else {
  i5 = i4;
 }
 HEAP8[i1 + 140 | 0] = (HEAP32[i5 + 76 >> 2] | 0) != 0 | 0;
 HEAP8[i1 + 142 | 0] = HEAP8[i5 + 92 | 0] & 1;
 HEAP8[i1 + 144 | 0] = HEAP8[i5 + 93 | 0] & 1;
 return;
}
function __ZN7WebCore28DocumentStyleSheetCollection18removePendingSheetENS0_34RemovePendingSheetNotificationTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 32 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 if ((i4 | 0) != 0) {
  return;
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 1) {
  HEAP8[i4 + 326 | 0] = 1;
  return;
 } else {
  __ZN7WebCore8Document29didRemoveAllPendingStylesheetEv(i4);
  return;
 }
}
function __ZN7WebCore28DocumentStyleSheetCollection33invalidateInjectedStyleSheetCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 64 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 do {
  if ((HEAP32[i1 + 48 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 60 >> 2] | 0) != 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[i1 >> 2] | 0, 1);
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
function __ZN7WebCore28DocumentStyleSheetCollectionC2ERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = i2;
 _memset(i1 + 4 | 0, 0, 61) | 0;
 _memset(i1 + 68 | 0, 0, 25) | 0;
 _memset(i1 + 96 | 0, 0, 32) | 0;
 i2 = __Znwj(392) | 0;
 i3 = i2 + 8 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP8[i2 + 4 | 0] = 0;
 _memset(i3 | 0, 0, 384) | 0;
 HEAP32[i1 + 128 >> 2] = i2;
 _memset(i1 + 132 | 0, 0, 15) | 0;
 return;
}
function __ZN7WebCore28DocumentStyleSheetCollectionC1ERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = i2;
 _memset(i1 + 4 | 0, 0, 61) | 0;
 _memset(i1 + 68 | 0, 0, 25) | 0;
 _memset(i1 + 96 | 0, 0, 32) | 0;
 i2 = __Znwj(392) | 0;
 i3 = i2 + 8 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP8[i2 + 4 | 0] = 0;
 _memset(i3 | 0, 0, 384) | 0;
 HEAP32[i1 + 128 >> 2] = i2;
 _memset(i1 + 132 | 0, 0, 15) | 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore28DocumentStyleSheetCollection25injectedAuthorStyleSheetsEv(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore28DocumentStyleSheetCollection29updateInjectedStyleSheetCacheEv(i1);
 return i1 + 52 | 0;
}
function __ZNK7WebCore28DocumentStyleSheetCollection23injectedUserStyleSheetsEv(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore28DocumentStyleSheetCollection29updateInjectedStyleSheetCacheEv(i1);
 return i1 + 40 | 0;
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
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore28DocumentStyleSheetCollectionC2ERNS_8DocumentE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames8styleTagE": __ZN7WebCore8SVGNames8styleTagE, "__ZN7WebCore9HTMLNames9titleAttrE": __ZN7WebCore9HTMLNames9titleAttrE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames7linkTagE": __ZN7WebCore9HTMLNames7linkTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames7relAttrE": __ZN7WebCore9HTMLNames7relAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore28DocumentStyleSheetCollection33invalidateInjectedStyleSheetCacheEv","__ZNK7WebCore28DocumentStyleSheetCollection23injectedUserStyleSheetsEv","__ZN3WTF9HashTableIPKN7WebCore13CSSStyleSheetES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore28DocumentStyleSheetCollection18removePendingSheetENS0_34RemovePendingSheetNotificationTypeE","_strlen","__ZN3WTF6VectorINS_6RefPtrIN7WebCore10StyleSheetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore28DocumentStyleSheetCollectionC2ERNS_8DocumentE","__ZN7WebCore28DocumentStyleSheetCollection12addUserSheetEN3WTF7PassRefINS_18StyleSheetContentsEEE","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore4NodeELj32EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6removeERKS6_","__ZN7WebCore28DocumentStyleSheetCollection19updatePageUserSheetEv","__ZN7WebCore28DocumentStyleSheetCollection20resetCSSFeatureFlagsEv","__ZN7WebCore28DocumentStyleSheetCollection23analyzeStyleSheetChangeENS0_10UpdateFlagERKN3WTF6VectorINS2_6RefPtrINS_13CSSStyleSheetEEELj0ENS2_15CrashOnOverflowEEERNS0_23StyleResolverUpdateTypeERb","__ZN3WTF11ListHashSetIPN7WebCore4NodeELj32ENS_7PtrHashIS3_EEE12insertBeforeERKS3_OS3_","_memset","_memcpy","__ZNK7WebCore28DocumentStyleSheetCollection29updateInjectedStyleSheetCacheEv","__ZN3WTF11ListHashSetIPN7WebCore4NodeELj32ENS_7PtrHashIS3_EEE4findERKS3_","__ZN7WebCore28DocumentStyleSheetCollection23updateActiveStyleSheetsENS0_10UpdateFlagE","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore4NodeELj32EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj32EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_","__ZN7WebCore28DocumentStyleSheetCollection18clearPageUserSheetEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore28DocumentStyleSheetCollection25activeStyleSheetsContainsEPKNS_13CSSStyleSheetE","__ZN7WebCore28DocumentStyleSheetCollection24collectActiveStyleSheetsERN3WTF6VectorINS1_6RefPtrINS_10StyleSheetEEELj0ENS1_15CrashOnOverflowEEE","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore4NodeELj32EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_","__ZNK7WebCore28DocumentStyleSheetCollection25injectedAuthorStyleSheetsEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore13CSSStyleSheetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF9HashTableIPKN7WebCore13CSSStyleSheetES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6expandEPS4_","__ZN7WebCore28DocumentStyleSheetCollection14addAuthorSheetEN3WTF7PassRefINS_18StyleSheetContentsEEE","__ZN7WebCore28DocumentStyleSheetCollection26addStyleSheetCandidateNodeERNS_4NodeEb","__ZN7WebCore28DocumentStyleSheetCollection22combineCSSFeatureFlagsEv","__ZN7WebCore28DocumentStyleSheetCollection29removeStyleSheetCandidateNodeERNS_4NodeE","__ZN7WebCore28DocumentStyleSheetCollection13pageUserSheetEv","__ZN7WebCore28DocumentStyleSheetCollection18detachFromDocumentEv"]

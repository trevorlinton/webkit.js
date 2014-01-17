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
H_BASE = parentModule["_malloc"](48 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 48;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore5RangeD1Ev;
/* memory initializer */ allocate([100,111,99,117,109,101,110,116,0,0,0,0,0,0,0,0,98,108,111,99,107,0,0,0,115,101,110,116,101,110,99,101,0,0,0,0,0,0,0,0,119,111,114,100,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore5Range15processContentsENS0_10ActionTypeERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
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
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 128 | 0;
 i22 = i5 + 136 | 0;
 i23 = i5 + 144 | 0;
 i24 = (i3 - 1 | 0) >>> 0 < 2 >>> 0;
 if (i24) {
  __ZN7WebCore16DocumentFragment6createERNS_8DocumentE(i6, HEAP32[i2 + 4 >> 2] | 0);
  i25 = i6 | 0;
  i6 = HEAP32[i25 >> 2] | 0;
  HEAP32[i25 >> 2] = 0;
  i26 = i6;
 } else {
  i26 = 0;
 }
 HEAP32[i4 >> 2] = 0;
 i6 = i2 + 8 | 0;
 i25 = HEAP32[i6 >> 2] | 0;
 L4 : do {
  if ((i25 | 0) == 0) {
   HEAP32[i4 >> 2] = 11;
   i27 = 15;
  } else {
   i28 = i2 + 20 | 0;
   L6 : do {
    if ((i25 | 0) == (HEAP32[i28 >> 2] | 0)) {
     i29 = HEAP32[i2 + 16 >> 2] | 0;
     i30 = i2 + 28 | 0;
     i31 = HEAP32[i30 >> 2] | 0;
     do {
      if ((i29 | 0) == 0 & (i31 | 0) == 0) {
       i32 = i2 + 12 | 0;
       i33 = HEAP32[i32 >> 2] | 0;
       if ((i33 | 0) > -1) {
        i34 = i33;
       } else {
        i33 = (__ZNK7WebCore4Node9nodeIndexEv(0) | 0) + 1 | 0;
        HEAP32[i32 >> 2] = i33;
        i34 = i33;
       }
       i33 = i2 + 24 | 0;
       i32 = HEAP32[i33 >> 2] | 0;
       if ((i32 | 0) > -1) {
        i35 = i32;
       } else {
        i32 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i30 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i33 >> 2] = i32;
        i35 = i32;
       }
       if ((i34 | 0) == (i35 | 0)) {
        break;
       }
       if ((HEAP32[i4 >> 2] | 0) == 0) {
        break L6;
       } else {
        i27 = 15;
        break L4;
       }
      } else {
       if ((i29 | 0) != (i31 | 0)) {
        break L6;
       }
      }
     } while (0);
     HEAP32[i1 >> 2] = i26;
     STACKTOP = i5;
     return;
    }
   } while (0);
   i31 = HEAP32[i6 >> 2] | 0;
   if ((i31 | 0) == 0) {
    HEAP32[i4 >> 2] = 11;
    HEAP32[i1 >> 2] = 0;
    i36 = i26;
    i27 = 258;
    break;
   }
   i29 = HEAP32[i28 >> 2] | 0;
   L24 : do {
    if ((i29 | 0) == 0) {
     i30 = i31;
     while (1) {
      i32 = HEAP32[i30 + 16 >> 2] | 0;
      if ((i32 | 0) == 0) {
       i37 = 1;
       i38 = 0;
       i27 = 27;
       break;
      } else {
       i30 = i32 | 0;
      }
     }
    } else {
     i30 = i31;
     L27 : while (1) {
      i32 = i29;
      while (1) {
       if ((i30 | 0) == (i32 | 0)) {
        break L27;
       }
       i33 = HEAP32[i32 + 16 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break;
       } else {
        i32 = i33 | 0;
       }
      }
      i32 = HEAP32[i30 + 16 >> 2] | 0;
      if ((i32 | 0) == 0) {
       i37 = 1;
       i38 = 0;
       i27 = 27;
       break L24;
      } else {
       i30 = i32 | 0;
      }
     }
     if ((i30 | 0) == 0) {
      i37 = 1;
      i38 = 0;
      i27 = 27;
      break;
     }
     i32 = i30 + 8 | 0;
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
     if ((HEAP32[i4 >> 2] | 0) == 0) {
      i37 = 0;
      i38 = i30;
      i27 = 27;
      break;
     }
     HEAP32[i1 >> 2] = 0;
     i39 = i26;
     i40 = i30;
    }
   } while (0);
   L36 : do {
    if ((i27 | 0) == 27) {
     i29 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i29 | 0) == (HEAP32[i28 >> 2] | 0)) {
       i31 = i8 | 0;
       HEAP32[i31 >> 2] = i26;
       i32 = (i26 | 0) == 0;
       if (i32) {
        i41 = i29;
       } else {
        i33 = i26 + 8 | 0;
        HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
        i41 = HEAP32[i6 >> 2] | 0;
       }
       i33 = i2 + 12 | 0;
       i42 = HEAP32[i33 >> 2] | 0;
       if ((i42 | 0) > -1) {
        i43 = i42;
       } else {
        i42 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i33 >> 2] = i42;
        i43 = i42;
       }
       i42 = i2 + 24 | 0;
       i33 = HEAP32[i42 >> 2] | 0;
       if ((i33 | 0) > -1) {
        i44 = i33;
       } else {
        i33 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i42 >> 2] = i33;
        i44 = i33;
       }
       __ZN7WebCore5Range29processContentsBetweenOffsetsENS0_10ActionTypeEN3WTF10PassRefPtrINS_16DocumentFragmentEEEPNS_4NodeEjjRi(i7, i3, i8, i41, i43, i44, i4);
       i33 = HEAP32[i7 >> 2] | 0;
       do {
        if ((i33 | 0) != 0) {
         i42 = i33 + 8 | 0;
         i45 = i42 | 0;
         i46 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
         HEAP32[i45 >> 2] = i46;
         if ((i46 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
        }
       } while (0);
       i33 = HEAP32[i31 >> 2] | 0;
       do {
        if ((i33 | 0) != 0) {
         i42 = i33 + 8 | 0;
         i46 = i42 | 0;
         i45 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
         HEAP32[i46 >> 2] = i45;
         if ((i45 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
        }
       } while (0);
       HEAP32[i1 >> 2] = i26;
       if (i32) {
        i47 = 0;
        break;
       }
       i33 = i26 + 8 | 0;
       HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
       if (i37) {
        i48 = i26;
        break L4;
       } else {
        i39 = i26;
        i40 = i38;
        break L36;
       }
      } else {
       i33 = (i29 | 0) == 0;
       if (!i33) {
        i31 = i29 + 8 | 0;
        HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
       }
       i31 = i2 + 12 | 0;
       i42 = HEAP32[i31 >> 2] | 0;
       i45 = i2 + 16 | 0;
       if ((i42 | 0) > -1) {
        i49 = i42;
       } else {
        i42 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i45 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i31 >> 2] = i42;
        i49 = i42;
       }
       i42 = HEAP32[i45 >> 2] | 0;
       i46 = (i42 | 0) == 0;
       if (!i46) {
        i50 = i42 + 8 | 0;
        HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
       }
       i50 = HEAP32[i28 >> 2] | 0;
       i51 = (i50 | 0) == 0;
       if (!i51) {
        i52 = i50 + 8 | 0;
        HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
       }
       i52 = i2 + 24 | 0;
       i53 = HEAP32[i52 >> 2] | 0;
       i54 = i2 + 28 | 0;
       if ((i53 | 0) > -1) {
        i55 = i53;
       } else {
        i53 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i54 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i52 >> 2] = i53;
        i55 = i53;
       }
       i53 = HEAP32[i54 >> 2] | 0;
       i56 = (i53 | 0) == 0;
       if (!i56) {
        i57 = i53 + 8 | 0;
        HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
       }
       i57 = (i29 | 0) == (i38 | 0);
       do {
        if (i57) {
         i58 = 0;
         i59 = 1;
        } else {
         i60 = i29;
         while (1) {
          i61 = HEAP32[i60 + 16 >> 2] | 0;
          if ((i61 | 0) == (i38 | 0)) {
           break;
          } else {
           i60 = i61;
          }
         }
         if ((i60 | 0) == 0) {
          i58 = 0;
          i59 = 1;
          break;
         }
         i61 = i60 + 8 | 0;
         HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
         i58 = i60;
         i59 = 0;
        }
       } while (0);
       i32 = (i50 | 0) == (i38 | 0);
       do {
        if (i32) {
         i62 = 0;
         i63 = 1;
        } else {
         i61 = i50;
         while (1) {
          i64 = HEAP32[i61 + 16 >> 2] | 0;
          if ((i64 | 0) == (i38 | 0)) {
           break;
          } else {
           i61 = i64;
          }
         }
         if ((i61 | 0) == 0) {
          i62 = 0;
          i63 = 1;
          break;
         }
         i60 = i61 + 8 | 0;
         HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
         i62 = i61;
         i63 = 0;
        }
       } while (0);
       i60 = (i38 | 0) != (i29 | 0);
       do {
        if (i60) {
         if (!(__ZNK7WebCore4Node8containsEPKS0_(i38, i29) | 0)) {
          i65 = 0;
          i66 = i49;
          break;
         }
         i64 = i10 | 0;
         HEAP32[i64 >> 2] = 0;
         if ((i49 | 0) > -1) {
          i67 = i49;
         } else {
          i67 = (__ZNK7WebCore4Node9nodeIndexEv(i42) | 0) + 1 | 0;
         }
         L76 : do {
          switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 76 >> 2] & 1](i29) | 0) {
          case 3:
          case 4:
          case 8:
           {
            i68 = HEAP32[i29 + 36 >> 2] | 0;
            if ((i68 | 0) == 0) {
             i69 = 0;
             break L76;
            }
            i69 = HEAP32[i68 + 4 >> 2] | 0;
            break;
           }
          case 7:
           {
            i68 = HEAP32[i29 + 36 >> 2] | 0;
            if ((i68 | 0) == 0) {
             i69 = 0;
             break L76;
            }
            i70 = i68 | 0;
            i71 = HEAP32[i70 >> 2] | 0;
            HEAP32[i70 >> 2] = i71 + 2;
            i72 = HEAP32[i68 + 4 >> 2] | 0;
            if ((i71 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i68);
             i69 = i72;
             break L76;
            } else {
             HEAP32[i70 >> 2] = i71;
             i69 = i72;
             break L76;
            }
            break;
           }
          case 1:
          case 2:
          case 5:
          case 6:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
           {
            if ((HEAP32[i29 + 12 >> 2] & 2 | 0) == 0) {
             i69 = 0;
             break L76;
            }
            i69 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i29) | 0;
            break;
           }
          default:
           {
            i69 = 0;
           }
          }
         } while (0);
         __ZN7WebCore5Range29processContentsBetweenOffsetsENS0_10ActionTypeEN3WTF10PassRefPtrINS_16DocumentFragmentEEEPNS_4NodeEjjRi(i9, i3, i10, i29, i67, i69, i4);
         i61 = i9 | 0;
         i72 = HEAP32[i61 >> 2] | 0;
         HEAP32[i61 >> 2] = 0;
         i61 = HEAP32[i64 >> 2] | 0;
         do {
          if ((i61 | 0) != 0) {
           i71 = i61 + 8 | 0;
           i70 = i71 | 0;
           i68 = (HEAP32[i70 >> 2] | 0) - 1 | 0;
           HEAP32[i70 >> 2] = i68;
           if ((i68 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
          }
         } while (0);
         i61 = i12 | 0;
         HEAP32[i61 >> 2] = i72;
         i64 = (i72 | 0) == 0;
         if (!i64) {
          i71 = i72 + 8 | 0;
          HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
         }
         __ZN7WebCore5Range32processAncestorsAndTheirSiblingsENS0_10ActionTypeEPNS_4NodeENS0_24ContentsProcessDirectionEN3WTF10PassRefPtrIS2_EES3_Ri(i11, i3, i29, 0, i12, i38, i4);
         i71 = i11 | 0;
         i68 = HEAP32[i71 >> 2] | 0;
         HEAP32[i71 >> 2] = 0;
         do {
          if (!i64) {
           i71 = i72 + 8 | 0;
           i70 = i71 | 0;
           i73 = (HEAP32[i70 >> 2] | 0) - 1 | 0;
           HEAP32[i70 >> 2] = i73;
           if ((i73 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
          }
         } while (0);
         i72 = HEAP32[i61 >> 2] | 0;
         if ((i72 | 0) == 0) {
          i65 = i68;
          i66 = i67;
          break;
         }
         i64 = i72 + 8 | 0;
         i72 = i64 | 0;
         i71 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
         HEAP32[i72 >> 2] = i71;
         if ((i71 | 0) >= 1) {
          i65 = i68;
          i66 = i67;
          break;
         }
         if ((HEAP32[i64 + 8 >> 2] | 0) != 0) {
          i65 = i68;
          i66 = i67;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i64 - 8 | 0);
         i65 = i68;
         i66 = i67;
        } else {
         i65 = 0;
         i66 = i49;
        }
       } while (0);
       do {
        if ((i38 | 0) == (HEAP32[i28 >> 2] | 0)) {
         i74 = 0;
         i75 = i55;
        } else {
         if (!(__ZNK7WebCore4Node8containsEPKS0_(i38, i50) | 0)) {
          i74 = 0;
          i75 = i55;
          break;
         }
         i64 = i14 | 0;
         HEAP32[i64 >> 2] = 0;
         if ((i55 | 0) > -1) {
          i76 = i55;
         } else {
          i76 = (__ZNK7WebCore4Node9nodeIndexEv(i53) | 0) + 1 | 0;
         }
         __ZN7WebCore5Range29processContentsBetweenOffsetsENS0_10ActionTypeEN3WTF10PassRefPtrINS_16DocumentFragmentEEEPNS_4NodeEjjRi(i13, i3, i14, i50, 0, i76, i4);
         i71 = i13 | 0;
         i72 = HEAP32[i71 >> 2] | 0;
         HEAP32[i71 >> 2] = 0;
         i71 = HEAP32[i64 >> 2] | 0;
         do {
          if ((i71 | 0) != 0) {
           i64 = i71 + 8 | 0;
           i73 = i64 | 0;
           i70 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
           HEAP32[i73 >> 2] = i70;
           if ((i70 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i64 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i64 - 8 | 0);
          }
         } while (0);
         i71 = i16 | 0;
         HEAP32[i71 >> 2] = i72;
         i68 = (i72 | 0) == 0;
         if (!i68) {
          i61 = i72 + 8 | 0;
          HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
         }
         __ZN7WebCore5Range32processAncestorsAndTheirSiblingsENS0_10ActionTypeEPNS_4NodeENS0_24ContentsProcessDirectionEN3WTF10PassRefPtrIS2_EES3_Ri(i15, i3, i50, 1, i16, i38, i4);
         i61 = i15 | 0;
         i64 = HEAP32[i61 >> 2] | 0;
         HEAP32[i61 >> 2] = 0;
         do {
          if (!i68) {
           i61 = i72 + 8 | 0;
           i70 = i61 | 0;
           i73 = (HEAP32[i70 >> 2] | 0) - 1 | 0;
           HEAP32[i70 >> 2] = i73;
           if ((i73 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i61 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i61 - 8 | 0);
          }
         } while (0);
         i72 = HEAP32[i71 >> 2] | 0;
         if ((i72 | 0) == 0) {
          i74 = i64;
          i75 = i76;
          break;
         }
         i68 = i72 + 8 | 0;
         i72 = i68 | 0;
         i61 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
         HEAP32[i72 >> 2] = i61;
         if ((i61 | 0) >= 1) {
          i74 = i64;
          i75 = i76;
          break;
         }
         if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
          i74 = i64;
          i75 = i76;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
         i74 = i64;
         i75 = i76;
        }
       } while (0);
       if ((i66 | 0) > -1) {
        i77 = i66;
       } else {
        i77 = (__ZNK7WebCore4Node9nodeIndexEv(i42) | 0) + 1 | 0;
       }
       L130 : do {
        if (__ZNK7WebCore4Node8containsEPKS0_(i38, i29) | 0) {
         do {
          if (i57) {
           if ((HEAP32[i38 + 12 >> 2] & 2 | 0) == 0) {
            i78 = 0;
            break L130;
           }
           i68 = HEAP32[i38 + 36 >> 2] | 0;
           if ((i68 | 0) != 0 & (i77 | 0) != 0) {
            i79 = i68;
            i80 = 0;
           } else {
            i81 = i68;
            break;
           }
           while (1) {
            i68 = HEAP32[i79 + 28 >> 2] | 0;
            i61 = i80 + 1 | 0;
            if ((i68 | 0) != 0 & i61 >>> 0 < i77 >>> 0) {
             i79 = i68;
             i80 = i61;
            } else {
             i81 = i68;
             break;
            }
           }
          } else {
           i68 = i29;
           while (1) {
            i61 = HEAP32[i68 + 16 >> 2] | 0;
            if ((i61 | 0) == (i38 | 0)) {
             i81 = i68;
             break;
            } else {
             i68 = i61;
            }
           }
          }
         } while (0);
         if ((i81 | 0) == 0) {
          i78 = 0;
          break;
         }
         i64 = i81 + 8 | 0;
         HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
         if (!i60) {
          i78 = i81;
          break;
         }
         i64 = HEAP32[i81 + 28 >> 2] | 0;
         if ((i64 | 0) != 0) {
          i71 = i64 + 8 | 0;
          HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
         }
         i71 = i81 + 8 | 0;
         i68 = i71 | 0;
         i61 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
         HEAP32[i68 >> 2] = i61;
         if ((i61 | 0) >= 1) {
          i78 = i64;
          break;
         }
         if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
          i78 = i64;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
         i78 = i64;
        } else {
         i78 = 0;
        }
       } while (0);
       if ((i75 | 0) > -1) {
        i82 = i75;
       } else {
        i82 = (__ZNK7WebCore4Node9nodeIndexEv(i53) | 0) + 1 | 0;
       }
       L151 : do {
        if (__ZNK7WebCore4Node8containsEPKS0_(i38, i50) | 0) {
         do {
          if (i32) {
           if ((HEAP32[i38 + 12 >> 2] & 2 | 0) == 0) {
            i83 = 0;
            i84 = 1;
            break L151;
           }
           i60 = HEAP32[i38 + 36 >> 2] | 0;
           if ((i60 | 0) != 0 & (i82 | 0) != 0) {
            i85 = i60;
            i86 = 0;
           } else {
            i87 = i60;
            break;
           }
           while (1) {
            i60 = HEAP32[i85 + 28 >> 2] | 0;
            i57 = i86 + 1 | 0;
            if ((i60 | 0) != 0 & i57 >>> 0 < i82 >>> 0) {
             i85 = i60;
             i86 = i57;
            } else {
             i87 = i60;
             break;
            }
           }
          } else {
           i60 = i50;
           while (1) {
            i57 = HEAP32[i60 + 16 >> 2] | 0;
            if ((i57 | 0) == (i38 | 0)) {
             i87 = i60;
             break;
            } else {
             i60 = i57;
            }
           }
          }
         } while (0);
         if ((i87 | 0) == 0) {
          i83 = 0;
          i84 = 1;
          break;
         }
         i60 = i87 + 8 | 0;
         HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
         i83 = i87;
         i84 = 0;
        } else {
         i83 = 0;
         i84 = 1;
        }
       } while (0);
       do {
        if (i3 >>> 0 < 2 >>> 0) {
         do {
          if (i59) {
           i27 = 143;
          } else {
           if (!(__ZNK7WebCore4Node8containsEPKS0_(i38, i58) | 0)) {
            i27 = 143;
            break;
           }
           i32 = HEAP32[i58 + 16 >> 2] | 0;
           i60 = i17 | 0;
           HEAP32[i60 >> 2] = i32;
           if ((i32 | 0) != 0) {
            i57 = i32 + 8 | 0;
            HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
           }
           __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i2, i17, (__ZNK7WebCore4Node9nodeIndexEv(i58) | 0) + 1 | 0, i4);
           i57 = HEAP32[i60 >> 2] | 0;
           if ((i57 | 0) == 0) {
            i88 = i63;
            break;
           }
           i60 = i57 + 8 | 0;
           i57 = i60 | 0;
           i32 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
           HEAP32[i57 >> 2] = i32;
           if ((i32 | 0) >= 1) {
            i88 = i63;
            break;
           }
           if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
            i88 = i63;
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
           i88 = i63;
          }
         } while (0);
         do {
          if ((i27 | 0) == 143) {
           if (i63) {
            i88 = 1;
            break;
           }
           if (!(__ZNK7WebCore4Node8containsEPKS0_(i38, i62) | 0)) {
            i88 = 0;
            break;
           }
           i60 = HEAP32[i62 + 16 >> 2] | 0;
           i32 = i18 | 0;
           HEAP32[i32 >> 2] = i60;
           if ((i60 | 0) != 0) {
            i57 = i60 + 8 | 0;
            HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
           }
           __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i2, i18, __ZNK7WebCore4Node9nodeIndexEv(i62) | 0, i4);
           i57 = HEAP32[i32 >> 2] | 0;
           if ((i57 | 0) == 0) {
            i88 = 0;
            break;
           }
           i32 = i57 + 8 | 0;
           i57 = i32 | 0;
           i60 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
           HEAP32[i57 >> 2] = i60;
           if ((i60 | 0) >= 1) {
            i88 = 0;
            break;
           }
           if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
            i88 = 0;
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
           i88 = 0;
          }
         } while (0);
         if ((HEAP32[i4 >> 2] | 0) != 0) {
          HEAP32[i1 >> 2] = 0;
          i89 = i26;
          i90 = i88;
          break;
         }
         i32 = HEAP32[i6 >> 2] | 0;
         if ((i32 | 0) != 0) {
          i60 = i32 + 8 | 0;
          HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
         }
         i60 = HEAP32[i28 >> 2] | 0;
         HEAP32[i28 >> 2] = i32;
         do {
          if ((i60 | 0) != 0) {
           i32 = i60 + 8 | 0;
           i57 = i32 | 0;
           i64 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
           HEAP32[i57 >> 2] = i64;
           if ((i64 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
          }
         } while (0);
         HEAP32[i52 >> 2] = HEAP32[i31 >> 2];
         i60 = HEAP32[i45 >> 2] | 0;
         if ((i60 | 0) != 0) {
          i32 = i60 + 8 | 0;
          HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
         }
         i32 = HEAP32[i54 >> 2] | 0;
         HEAP32[i54 >> 2] = i60;
         if ((i32 | 0) == 0) {
          i91 = i88;
          i27 = 165;
          break;
         }
         i60 = i32 + 8 | 0;
         i32 = i60 | 0;
         i64 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
         HEAP32[i32 >> 2] = i64;
         if ((i64 | 0) >= 1) {
          i91 = i88;
          i27 = 165;
          break;
         }
         if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
          i91 = i88;
          i27 = 165;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
         i91 = i88;
         i27 = 165;
        } else {
         i91 = i63;
         i27 = 165;
        }
       } while (0);
       if ((i27 | 0) == 165) {
        i54 = i24 ^ 1;
        do {
         if (!((i65 | 0) == 0 | i54)) {
          i45 = i19 | 0;
          HEAP32[i45 >> 2] = i65;
          i31 = i65 + 8 | 0;
          HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
          __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i26 | 0, i19, i4) | 0;
          i31 = HEAP32[i45 >> 2] | 0;
          if ((i31 | 0) == 0) {
           break;
          }
          i45 = i31 + 8 | 0;
          i31 = i45 | 0;
          i52 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
          HEAP32[i31 >> 2] = i52;
          if ((i52 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
         }
        } while (0);
        do {
         if ((i78 | 0) != 0) {
          i45 = i20 | 0;
          HEAP32[i45 >> 2] = 0;
          i52 = i20 + 4 | 0;
          HEAP32[i52 >> 2] = 0;
          i31 = i20 + 8 | 0;
          HEAP32[i31 >> 2] = 0;
          L212 : do {
           if ((i83 | 0) != (i78 | 0)) {
            i60 = i78;
            i64 = 0;
            i32 = 0;
            i57 = 0;
            L213 : while (1) {
             do {
              if ((i32 | 0) == (i57 | 0)) {
               i71 = i57 + 1 | 0;
               i61 = i71 + (i57 >>> 2) | 0;
               i68 = i61 >>> 0 > 16 >>> 0 ? i61 : 16;
               i61 = i68 >>> 0 > i71 >>> 0 ? i68 : i71;
               i71 = HEAP32[i45 >> 2] | 0;
               do {
                if (i57 >>> 0 < i61 >>> 0) {
                 if (i61 >>> 0 > 1073741823 >>> 0) {
                  break L213;
                 }
                 i68 = __ZN3WTF18fastMallocGoodSizeEj(i61 << 2) | 0;
                 HEAP32[i52 >> 2] = i68 >>> 2;
                 i72 = __ZN3WTF10fastMallocEj(i68) | 0;
                 i68 = i72;
                 HEAP32[i45 >> 2] = i68;
                 i73 = i71;
                 _memcpy(i72 | 0, i73 | 0, i57 << 2) | 0;
                 if ((i71 | 0) == 0) {
                  i92 = i68;
                  break;
                 }
                 if ((i68 | 0) == (i71 | 0)) {
                  HEAP32[i45 >> 2] = 0;
                  HEAP32[i52 >> 2] = 0;
                  i93 = 0;
                 } else {
                  i93 = i68;
                 }
                 __ZN3WTF8fastFreeEPv(i73);
                 i92 = i93;
                } else {
                 i92 = i71;
                }
               } while (0);
               HEAP32[i92 + (i57 << 2) >> 2] = i60;
               if (i64) {
                i94 = i57;
                break;
               }
               i71 = i60 + 8 | 0;
               HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
               i94 = HEAP32[i31 >> 2] | 0;
              } else {
               HEAP32[(HEAP32[i45 >> 2] | 0) + (i32 << 2) >> 2] = i60;
               if (i64) {
                i94 = i32;
                break;
               }
               i71 = i60 + 8 | 0;
               HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
               i94 = HEAP32[i31 >> 2] | 0;
              }
             } while (0);
             i71 = i94 + 1 | 0;
             HEAP32[i31 >> 2] = i71;
             i61 = HEAP32[i60 + 28 >> 2] | 0;
             i73 = (i61 | 0) == 0;
             if (!((i83 | 0) != (i61 | 0) & (i73 ^ 1))) {
              break L212;
             }
             i60 = i61;
             i64 = i73;
             i32 = i71;
             i57 = HEAP32[i52 >> 2] | 0;
            }
            _WTFCrash();
           }
          } while (0);
          i57 = i21 | 0;
          HEAP32[i57 >> 2] = i38;
          if (!i37) {
           i32 = i38 + 8 | 0;
           HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
          }
          i32 = i22 | 0;
          HEAP32[i32 >> 2] = i26;
          if ((i26 | 0) != 0) {
           i64 = i26 + 8 | 0;
           HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
          }
          __ZN7WebCore5Range12processNodesENS0_10ActionTypeERN3WTF6VectorINS2_6RefPtrINS_4NodeEEELj0ENS2_15CrashOnOverflowEEENS2_10PassRefPtrIS5_EESB_Ri(i3, i20, i21, i22, i4);
          i64 = HEAP32[i32 >> 2] | 0;
          do {
           if ((i64 | 0) != 0) {
            i32 = i64 + 8 | 0;
            i60 = i32 | 0;
            i71 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
            HEAP32[i60 >> 2] = i71;
            if ((i71 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
           }
          } while (0);
          i64 = HEAP32[i57 >> 2] | 0;
          do {
           if ((i64 | 0) != 0) {
            i32 = i64 + 8 | 0;
            i71 = i32 | 0;
            i60 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
            HEAP32[i71 >> 2] = i60;
            if ((i60 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
           }
          } while (0);
          i64 = HEAP32[i31 >> 2] | 0;
          i57 = HEAP32[i45 >> 2] | 0;
          if ((i64 | 0) != 0) {
           i32 = i57 + (i64 << 2) | 0;
           i64 = i57;
           while (1) {
            i60 = HEAP32[i64 >> 2] | 0;
            do {
             if ((i60 | 0) != 0) {
              i71 = i60 + 8 | 0;
              i73 = i71 | 0;
              i61 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
              HEAP32[i73 >> 2] = i61;
              if ((i61 | 0) >= 1) {
               break;
              }
              if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
               break;
              }
              __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
             }
            } while (0);
            i64 = i64 + 4 | 0;
            if ((i64 | 0) == (i32 | 0)) {
             break;
            }
           }
           HEAP32[i31 >> 2] = 0;
          }
          if ((i57 | 0) == 0) {
           break;
          }
          HEAP32[i45 >> 2] = 0;
          HEAP32[i52 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i57);
         }
        } while (0);
        do {
         if (!((i74 | 0) == 0 | i54)) {
          i32 = i23 | 0;
          HEAP32[i32 >> 2] = i74;
          i64 = i74 + 8 | 0;
          HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
          __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i26 | 0, i23, i4) | 0;
          i64 = HEAP32[i32 >> 2] | 0;
          if ((i64 | 0) == 0) {
           break;
          }
          i32 = i64 + 8 | 0;
          i64 = i32 | 0;
          i60 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
          HEAP32[i64 >> 2] = i60;
          if ((i60 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
         }
        } while (0);
        HEAP32[i1 >> 2] = i26;
        i89 = 0;
        i90 = i91;
       }
       do {
        if (!i84) {
         i54 = i83 + 8 | 0;
         i32 = i54 | 0;
         i60 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
         HEAP32[i32 >> 2] = i60;
         if ((i60 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       do {
        if ((i78 | 0) != 0) {
         i54 = i78 + 8 | 0;
         i60 = i54 | 0;
         i32 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
         HEAP32[i60 >> 2] = i32;
         if ((i32 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       do {
        if ((i74 | 0) != 0) {
         i54 = i74 + 8 | 0;
         i32 = i54 | 0;
         i60 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
         HEAP32[i32 >> 2] = i60;
         if ((i60 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       do {
        if ((i65 | 0) != 0) {
         i54 = i65 + 8 | 0;
         i60 = i54 | 0;
         i32 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
         HEAP32[i60 >> 2] = i32;
         if ((i32 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       do {
        if (!i90) {
         i54 = i62 + 8 | 0;
         i32 = i54 | 0;
         i60 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
         HEAP32[i32 >> 2] = i60;
         if ((i60 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       do {
        if (!i59) {
         i54 = i58 + 8 | 0;
         i60 = i54 | 0;
         i32 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
         HEAP32[i60 >> 2] = i32;
         if ((i32 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       do {
        if (!i56) {
         i54 = i53 + 8 | 0;
         i32 = i54 | 0;
         i60 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
         HEAP32[i32 >> 2] = i60;
         if ((i60 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       do {
        if (!i51) {
         i53 = i50 + 8 | 0;
         i56 = i53 | 0;
         i54 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
         HEAP32[i56 >> 2] = i54;
         if ((i54 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
        }
       } while (0);
       do {
        if (!i46) {
         i50 = i42 + 8 | 0;
         i51 = i50 | 0;
         i53 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
         HEAP32[i51 >> 2] = i53;
         if ((i53 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
        }
       } while (0);
       if (i33) {
        i47 = i89;
        break;
       }
       i42 = i29 + 8 | 0;
       i46 = i42 | 0;
       i50 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i50;
       if ((i50 | 0) >= 1) {
        i47 = i89;
        break;
       }
       if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
        i47 = i89;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
       if (i37) {
        i36 = i89;
        i27 = 258;
        break L4;
       } else {
        i39 = i89;
        i40 = i38;
        break L36;
       }
      }
     } while (0);
     if (i37) {
      i36 = i47;
      i27 = 258;
      break L4;
     } else {
      i39 = i47;
      i40 = i38;
     }
    }
   } while (0);
   i28 = i40 + 8 | 0;
   i29 = i28 | 0;
   i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   HEAP32[i29 >> 2] = i30;
   if ((i30 | 0) >= 1) {
    i36 = i39;
    i27 = 258;
    break;
   }
   if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
    i36 = i39;
    i27 = 258;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
   i36 = i39;
   i27 = 258;
  }
 } while (0);
 if ((i27 | 0) == 15) {
  HEAP32[i1 >> 2] = 0;
  i36 = i26;
  i27 = 258;
 }
 do {
  if ((i27 | 0) == 258) {
   if ((i36 | 0) != 0) {
    i48 = i36;
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i36 = i48 + 8 | 0;
 i48 = i36 | 0;
 i27 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
 HEAP32[i48 >> 2] = i27;
 if ((i27 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5Range6expandERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 304 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 80 | 0;
 i13 = i4 + 96 | 0;
 i14 = i4 + 112 | 0;
 i15 = i4 + 128 | 0;
 i16 = i4 + 144 | 0;
 i17 = i4 + 160 | 0;
 i18 = i4 + 176 | 0;
 i19 = i4 + 192 | 0;
 i20 = i4 + 208 | 0;
 i21 = i4 + 224 | 0;
 i22 = i4 + 232 | 0;
 i23 = i4 + 248 | 0;
 i24 = i4 + 264 | 0;
 i25 = i4 + 272 | 0;
 i26 = i4 + 288 | 0;
 i27 = i1 + 12 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 if ((i28 | 0) > -1) {
  i29 = i28;
 } else {
  i28 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i27 >> 2] = i28;
  i29 = i28;
 }
 i28 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i28 | 0) == 0) {
  i30 = i29;
 } else {
  i29 = i28 + 8 | 0;
  HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
  i30 = HEAP32[i27 >> 2] | 0;
 }
 i27 = i7 | 0;
 HEAP32[i27 >> 2] = i28;
 HEAP32[i8 >> 2] = i30;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i10, i7, i8);
 i8 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i27 = i8 + 8 | 0;
   i7 = i27 | 0;
   i30 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i30;
   if ((i30 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i10, 1);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 + 8 | 0;
   i27 = i10 | 0;
   i30 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   HEAP32[i27 >> 2] = i30;
   if ((i30 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i8 = i1 + 24 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) > -1) {
  i31 = i10;
 } else {
  i10 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i8 >> 2] = i10;
  i31 = i10;
 }
 i10 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i32 = i31;
 } else {
  i31 = i10 + 8 | 0;
  HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
  i32 = HEAP32[i8 >> 2] | 0;
 }
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i10;
 HEAP32[i6 >> 2] = i32;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i12, i5, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 8 | 0;
   i5 = i8 | 0;
   i32 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i32;
   if ((i32 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i12, 1);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 8 | 0;
   i8 = i12 | 0;
   i32 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i32;
   if ((i32 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i6 = i2 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 48 | 0) | 0) {
   __ZN7WebCore11startOfWordERKNS_15VisiblePositionENS_9EWordSideE(i13, i9, 0);
   i2 = i13 | 0;
   i12 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i32 = i9 | 0;
   i8 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i12;
   do {
    if ((i8 | 0) != 0) {
     i12 = i8 + 8 | 0;
     i32 = i12 | 0;
     i5 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i5;
     if ((i5 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   HEAP32[i9 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   i8 = HEAP32[i13 + 8 >> 2] | 0;
   i12 = i9 + 8 | 0;
   i5 = i12;
   i32 = HEAP32[i5 >> 2] & -8 | i8 & 7;
   HEAP32[i5 >> 2] = i32;
   HEAP8[i12] = i32 & 255 & -9 | i8 & 8;
   HEAP32[i9 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   i8 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i32 = i8 + 8 | 0;
     i12 = i32 | 0;
     i5 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i5;
     if ((i5 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore9endOfWordERKNS_15VisiblePositionENS_9EWordSideE(i14, i11, 0);
   i8 = i14 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i32 = i11 | 0;
   i5 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i2;
   do {
    if ((i5 | 0) != 0) {
     i2 = i5 + 8 | 0;
     i32 = i2 | 0;
     i12 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
    }
   } while (0);
   HEAP32[i11 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
   i5 = HEAP32[i14 + 8 >> 2] | 0;
   i2 = i11 + 8 | 0;
   i12 = i2;
   i32 = HEAP32[i12 >> 2] & -8 | i5 & 7;
   HEAP32[i12 >> 2] = i32;
   HEAP8[i2] = i32 & 255 & -9 | i5 & 8;
   HEAP32[i11 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   i5 = HEAP32[i8 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i33 = 94;
    break;
   }
   i32 = i5 + 8 | 0;
   i5 = i32 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    i33 = 94;
    break;
   }
   if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
    i33 = 94;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
   i33 = 94;
  } else {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 32 | 0) | 0) {
    __ZN7WebCore15startOfSentenceERKNS_15VisiblePositionE(i15, i9);
    i32 = i15 | 0;
    i2 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = 0;
    i5 = i9 | 0;
    i12 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i2;
    do {
     if ((i12 | 0) != 0) {
      i2 = i12 + 8 | 0;
      i5 = i2 | 0;
      i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      HEAP32[i5 >> 2] = i10;
      if ((i10 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
     }
    } while (0);
    HEAP32[i9 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
    i12 = HEAP32[i15 + 8 >> 2] | 0;
    i8 = i9 + 8 | 0;
    i2 = i8;
    i10 = HEAP32[i2 >> 2] & -8 | i12 & 7;
    HEAP32[i2 >> 2] = i10;
    HEAP8[i8] = i10 & 255 & -9 | i12 & 8;
    HEAP32[i9 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
    i12 = HEAP32[i32 >> 2] | 0;
    do {
     if ((i12 | 0) != 0) {
      i10 = i12 + 8 | 0;
      i8 = i10 | 0;
      i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      HEAP32[i8 >> 2] = i2;
      if ((i2 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore13endOfSentenceERKNS_15VisiblePositionE(i16, i11);
    i12 = i16 | 0;
    i32 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    i10 = i11 | 0;
    i2 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = i32;
    do {
     if ((i2 | 0) != 0) {
      i32 = i2 + 8 | 0;
      i10 = i32 | 0;
      i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
      HEAP32[i10 >> 2] = i8;
      if ((i8 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
     }
    } while (0);
    HEAP32[i11 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
    i2 = HEAP32[i16 + 8 >> 2] | 0;
    i32 = i11 + 8 | 0;
    i8 = i32;
    i10 = HEAP32[i8 >> 2] & -8 | i2 & 7;
    HEAP32[i8 >> 2] = i10;
    HEAP8[i32] = i10 & 255 & -9 | i2 & 8;
    HEAP32[i11 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
    i2 = HEAP32[i12 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i33 = 94;
     break;
    }
    i10 = i2 + 8 | 0;
    i2 = i10 | 0;
    i32 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    HEAP32[i2 >> 2] = i32;
    if ((i32 | 0) >= 1) {
     i33 = 94;
     break;
    }
    if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
     i33 = 94;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    i33 = 94;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 24 | 0) | 0) {
    __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i17, i9, 1);
    i10 = i17 | 0;
    i32 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    i2 = i9 | 0;
    i8 = HEAP32[i2 >> 2] | 0;
    HEAP32[i2 >> 2] = i32;
    do {
     if ((i8 | 0) != 0) {
      i32 = i8 + 8 | 0;
      i2 = i32 | 0;
      i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
      HEAP32[i2 >> 2] = i5;
      if ((i5 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
     }
    } while (0);
    HEAP32[i9 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
    i8 = HEAP32[i17 + 8 >> 2] | 0;
    i12 = i9 + 8 | 0;
    i32 = i12;
    i5 = HEAP32[i32 >> 2] & -8 | i8 & 7;
    HEAP32[i32 >> 2] = i5;
    HEAP8[i12] = i5 & 255 & -9 | i8 & 8;
    HEAP32[i9 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
    i8 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i5 = i8 + 8 | 0;
      i12 = i5 | 0;
      i32 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
      HEAP32[i12 >> 2] = i32;
      if ((i32 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i18, i11, 1);
    i8 = i18 | 0;
    i10 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    i5 = i11 | 0;
    i32 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i10;
    do {
     if ((i32 | 0) != 0) {
      i10 = i32 + 8 | 0;
      i5 = i10 | 0;
      i12 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      HEAP32[i5 >> 2] = i12;
      if ((i12 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
     }
    } while (0);
    HEAP32[i11 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
    i32 = HEAP32[i18 + 8 >> 2] | 0;
    i10 = i11 + 8 | 0;
    i12 = i10;
    i5 = HEAP32[i12 >> 2] & -8 | i32 & 7;
    HEAP32[i12 >> 2] = i5;
    HEAP8[i10] = i5 & 255 & -9 | i32 & 8;
    HEAP32[i11 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
    i32 = HEAP32[i8 >> 2] | 0;
    if ((i32 | 0) == 0) {
     i33 = 94;
     break;
    }
    i5 = i32 + 8 | 0;
    i32 = i5 | 0;
    i10 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
    HEAP32[i32 >> 2] = i10;
    if ((i10 | 0) >= 1) {
     i33 = 94;
     break;
    }
    if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
     i33 = 94;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    i33 = 94;
    break;
   }
   if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 8 | 0) | 0)) {
    i34 = i11 | 0;
    break;
   }
   __ZN7WebCore15startOfDocumentERKNS_15VisiblePositionE(i19, i9);
   i5 = i19 | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i32 = i9 | 0;
   i12 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i10;
   do {
    if ((i12 | 0) != 0) {
     i10 = i12 + 8 | 0;
     i32 = i10 | 0;
     i2 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i2;
     if ((i2 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   HEAP32[i9 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
   i12 = HEAP32[i19 + 8 >> 2] | 0;
   i8 = i9 + 8 | 0;
   i10 = i8;
   i2 = HEAP32[i10 >> 2] & -8 | i12 & 7;
   HEAP32[i10 >> 2] = i2;
   HEAP8[i8] = i2 & 255 & -9 | i12 & 8;
   HEAP32[i9 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
   i12 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i2 = i12 + 8 | 0;
     i8 = i2 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore13endOfDocumentERKNS_15VisiblePositionE(i20, i11);
   i12 = i20 | 0;
   i5 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i2 = i11 | 0;
   i10 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i5;
   do {
    if ((i10 | 0) != 0) {
     i5 = i10 + 8 | 0;
     i2 = i5 | 0;
     i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     HEAP32[i2 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    }
   } while (0);
   HEAP32[i11 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
   i10 = HEAP32[i20 + 8 >> 2] | 0;
   i5 = i11 + 8 | 0;
   i8 = i5;
   i2 = HEAP32[i8 >> 2] & -8 | i10 & 7;
   HEAP32[i8 >> 2] = i2;
   HEAP8[i5] = i2 & 255 & -9 | i10 & 8;
   HEAP32[i11 + 12 >> 2] = HEAP32[i20 + 12 >> 2];
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i33 = 94;
    break;
   }
   i2 = i10 + 8 | 0;
   i10 = i2 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    i33 = 94;
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    i33 = 94;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
   i33 = 94;
  }
 } while (0);
 do {
  if ((i33 | 0) == 94) {
   i20 = i22 | 0;
   i19 = i9 | 0;
   i6 = HEAP32[i19 >> 2] | 0;
   HEAP32[i20 >> 2] = i6;
   if ((i6 | 0) != 0) {
    i18 = i6 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   i18 = i9 + 4 | 0;
   HEAP32[i22 + 4 >> 2] = HEAP32[i18 >> 2];
   i6 = i9 + 8 | 0;
   i17 = HEAP32[i6 >> 2] | 0;
   i16 = i22 + 8 | 0;
   i15 = i16;
   i14 = HEAP32[i15 >> 2] & -8 | i17 & 7;
   HEAP32[i15 >> 2] = i14;
   HEAP8[i16] = i14 & 255 & -9 | i17 & 8;
   i17 = __ZNK7WebCore8Position13containerNodeEv(i22) | 0;
   i14 = i21 | 0;
   HEAP32[i14 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i16 = i17 + 8 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   }
   i16 = i23 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   HEAP32[i16 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i19 = i17 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   HEAP32[i23 + 4 >> 2] = HEAP32[i18 >> 2];
   i18 = HEAP32[i6 >> 2] | 0;
   i6 = i23 + 8 | 0;
   i19 = i6;
   i17 = HEAP32[i19 >> 2] & -8 | i18 & 7;
   HEAP32[i19 >> 2] = i17;
   HEAP8[i6] = i17 & 255 & -9 | i18 & 8;
   __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i21, __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i23) | 0, i3);
   i18 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i16 = i18 + 8 | 0;
     i17 = i16 | 0;
     i6 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i18 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i12 = i18 + 8 | 0;
     i16 = i12 | 0;
     i6 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   i18 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i14 = i18 + 8 | 0;
     i12 = i14 | 0;
     i6 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i18 = i25 | 0;
   i20 = i11 | 0;
   i14 = HEAP32[i20 >> 2] | 0;
   HEAP32[i18 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i6 = i14 + 8 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   }
   i6 = i11 + 4 | 0;
   HEAP32[i25 + 4 >> 2] = HEAP32[i6 >> 2];
   i14 = i11 + 8 | 0;
   i12 = HEAP32[i14 >> 2] | 0;
   i16 = i25 + 8 | 0;
   i17 = i16;
   i19 = HEAP32[i17 >> 2] & -8 | i12 & 7;
   HEAP32[i17 >> 2] = i19;
   HEAP8[i16] = i19 & 255 & -9 | i12 & 8;
   i12 = __ZNK7WebCore8Position13containerNodeEv(i25) | 0;
   i19 = i24 | 0;
   HEAP32[i19 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i16 = i12 + 8 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   }
   i16 = i26 | 0;
   i12 = HEAP32[i20 >> 2] | 0;
   HEAP32[i16 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i17 = i12 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   }
   HEAP32[i26 + 4 >> 2] = HEAP32[i6 >> 2];
   i6 = HEAP32[i14 >> 2] | 0;
   i14 = i26 + 8 | 0;
   i17 = i14;
   i12 = HEAP32[i17 >> 2] & -8 | i6 & 7;
   HEAP32[i17 >> 2] = i12;
   HEAP8[i14] = i12 & 255 & -9 | i6 & 8;
   __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i24, __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i26) | 0, i3);
   i6 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i16 = i6 + 8 | 0;
     i12 = i16 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i6 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i16 = i6 + 8 | 0;
     i14 = i16 | 0;
     i12 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i6 = HEAP32[i18 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i34 = i20;
    break;
   }
   i19 = i6 + 8 | 0;
   i6 = i19 | 0;
   i16 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    i34 = i20;
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    i34 = i20;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   i34 = i20;
  }
 } while (0);
 i3 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i34 = i3 + 8 | 0;
   i26 = i34 | 0;
   i24 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   HEAP32[i26 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i3 + 8 | 0;
 i3 = i9 | 0;
 i34 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i34;
 if ((i34 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Range10insertNodeEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i3 >> 2] = 0;
 i8 = i1 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   HEAP32[i3 >> 2] = 11;
   i10 = i2;
  } else {
   if ((i2 | 0) == 0) {
    HEAP32[i3 >> 2] = 8;
    STACKTOP = i4;
    return;
   } else {
    i11 = i9;
   }
   while (1) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 76 >> 2] & 1](i11) | 0) == 5) {
     break;
    }
    i12 = HEAP32[i11 + 16 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i13 = 7;
     break;
    } else {
     i11 = i12 | 0;
    }
   }
   L9 : do {
    if ((i13 | 0) == 7) {
     i12 = i1 + 20 | 0;
     i14 = HEAP32[i12 >> 2] | 0;
     if ((i14 | 0) != 0) {
      i15 = i14;
      while (1) {
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 76 >> 2] & 1](i15) | 0) == 5) {
        break L9;
       }
       i14 = HEAP32[i15 + 16 >> 2] | 0;
       if ((i14 | 0) == 0) {
        break;
       } else {
        i15 = i14 | 0;
       }
      }
     }
     i15 = HEAP32[i8 >> 2] | 0;
     i14 = (HEAP32[i15 + 12 >> 2] & 1 | 0) != 0;
     do {
      if (i14) {
       i16 = HEAP32[i15 + 16 >> 2] | 0;
       if ((i16 | 0) == 0) {
        HEAP32[i3 >> 2] = 3;
        i10 = i2;
        break L1;
       } else {
        i17 = i16 | 0;
        break;
       }
      } else {
       i17 = i15;
      }
     } while (0);
     i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 1](i2) | 0;
     i16 = (i15 | 0) == 11;
     L22 : do {
      if (i16) {
       i18 = HEAP32[i2 + 12 >> 2] | 0;
       if ((i18 & 4096 | 0) != 0) {
        if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i2 | 0)) {
         i13 = 24;
         break;
        }
       }
       if ((i18 & 2 | 0) == 0) {
        i19 = 0;
        break;
       }
       i18 = HEAP32[i2 + 36 >> 2] | 0;
       if ((i18 | 0) == 0) {
        i19 = 0;
        break;
       }
       i20 = i17;
       i21 = 0;
       i22 = i18;
       while (1) {
        i18 = HEAP32[(HEAP32[i20 >> 2] | 0) + 160 >> 2] | 0;
        i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 76 >> 2] & 1](i22) | 0;
        if (!(FUNCTION_TABLE_iii[i18 & 1](i17, i23) | 0)) {
         break;
        }
        i23 = i21 + 1 | 0;
        i18 = HEAP32[i22 + 28 >> 2] | 0;
        if ((i18 | 0) == 0) {
         i19 = i23;
         break L22;
        } else {
         i21 = i23;
         i22 = i18;
        }
       }
       HEAP32[i3 >> 2] = 3;
       i10 = i2;
       break L1;
      } else {
       i13 = 24;
      }
     } while (0);
     do {
      if ((i13 | 0) == 24) {
       if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i17 >> 2] | 0) + 160 >> 2] & 1](i17, i15) | 0) {
        i19 = 1;
        break;
       }
       HEAP32[i3 >> 2] = 3;
       i10 = i2;
       break L1;
      }
     } while (0);
     i22 = HEAP32[i8 >> 2] | 0;
     L37 : do {
      if ((i22 | 0) != 0) {
       i21 = i22;
       while (1) {
        if ((i2 | 0) == (i21 | 0)) {
         break;
        }
        i20 = HEAP32[i21 + 16 >> 2] | 0;
        if ((i20 | 0) == 0) {
         break L37;
        } else {
         i21 = i20 | 0;
        }
       }
       HEAP32[i3 >> 2] = 3;
       i10 = i2;
       break L1;
      }
     } while (0);
     if ((i15 | 0) == 2 | (i15 | 0) == 6 | (i15 | 0) == 12 | (i15 | 0) == 9) {
      HEAP32[i3 >> 2] = 202;
      i10 = i2;
      break L1;
     }
     i22 = i2 + 12 | 0;
     do {
      if ((HEAP32[i22 >> 2] & 4096 | 0) != 0) {
       if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i2 | 0)) {
        break;
       }
       HEAP32[i3 >> 2] = 202;
       i10 = i2;
       break L1;
      }
     } while (0);
     __ZN7WebCore16ScopedEventQueue21incrementScopingLevelEv(__ZN7WebCore16ScopedEventQueue8instanceEv() | 0);
     i15 = HEAP32[i8 >> 2] | 0;
     if ((i15 | 0) == (HEAP32[i12 >> 2] | 0)) {
      i21 = HEAP32[i1 + 16 >> 2] | 0;
      i20 = i1 + 28 | 0;
      i18 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == 0 & (i18 | 0) == 0) {
       i23 = i1 + 12 | 0;
       i24 = HEAP32[i23 >> 2] | 0;
       if ((i24 | 0) > -1) {
        i25 = i24;
       } else {
        i24 = (__ZNK7WebCore4Node9nodeIndexEv(0) | 0) + 1 | 0;
        HEAP32[i23 >> 2] = i24;
        i25 = i24;
       }
       i24 = i1 + 24 | 0;
       i23 = HEAP32[i24 >> 2] | 0;
       if ((i23 | 0) > -1) {
        i26 = i23;
       } else {
        i23 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i20 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i24 >> 2] = i23;
        i26 = i23;
       }
       if ((i25 | 0) == (i26 | 0)) {
        i13 = 43;
       } else {
        i27 = 0;
       }
      } else {
       if ((i21 | 0) == (i18 | 0)) {
        i13 = 43;
       } else {
        i27 = 0;
       }
      }
      if ((i13 | 0) == 43) {
       i27 = 1;
      }
      i28 = i27;
      i29 = HEAP32[i8 >> 2] | 0;
     } else {
      i28 = 0;
      i29 = i15;
     }
     i15 = (i29 | 0) == 0;
     if (!i15) {
      i18 = i29 + 8 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     }
     do {
      if (i14) {
       i18 = i1 + 12 | 0;
       i21 = HEAP32[i18 >> 2] | 0;
       if ((i21 | 0) > -1) {
        i30 = i21;
       } else {
        i21 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i18 >> 2] = i21;
        i30 = i21;
       }
       __ZN7WebCore4Text9splitTextEjRi(i5, i29, i30, i3);
       i21 = i5 | 0;
       i18 = HEAP32[i21 >> 2] | 0;
       HEAP32[i21 >> 2] = 0;
       do {
        if ((HEAP32[i3 >> 2] | 0) == 0) {
         i21 = HEAP32[i8 >> 2] | 0;
         if ((i21 | 0) != 0) {
          i23 = i21 + 8 | 0;
          HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
         }
         do {
          if (!i15) {
           i23 = i29 + 8 | 0;
           i24 = i23 | 0;
           i20 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
           HEAP32[i24 >> 2] = i20;
           if ((i20 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
          }
         } while (0);
         i23 = HEAP32[i21 + 16 >> 2] | 0;
         i20 = i6 | 0;
         HEAP32[i20 >> 2] = i2;
         __ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i23, i6, i18 | 0, i3) | 0;
         i23 = HEAP32[i20 >> 2] | 0;
         do {
          if ((i23 | 0) != 0) {
           i20 = i23 + 8 | 0;
           i24 = i20 | 0;
           i31 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
           HEAP32[i24 >> 2] = i31;
           if ((i31 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
          }
         } while (0);
         if ((HEAP32[i3 >> 2] | 0) != 0 | i28 ^ 1) {
          i32 = i21;
          i33 = 0;
          i13 = 77;
          break;
         }
         i23 = i18 + 16 | 0;
         if ((HEAP32[i23 >> 2] | 0) != (i21 | 0)) {
          i34 = 0;
          i35 = i21;
          break;
         }
         if ((HEAP32[(HEAP32[i21 + 20 >> 2] | 0) + 8 >> 2] | 0) != (HEAP32[i1 + 4 >> 2] | 0)) {
          i34 = 0;
          i35 = i21;
          break;
         }
         i20 = HEAP32[i18 + 24 >> 2] | 0;
         if ((i20 | 0) != 0) {
          i31 = i20 + 8 | 0;
          HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
         }
         i31 = i1 + 28 | 0;
         i24 = HEAP32[i31 >> 2] | 0;
         HEAP32[i31 >> 2] = i20;
         do {
          if ((i24 | 0) != 0) {
           i20 = i24 + 8 | 0;
           i36 = i20 | 0;
           i37 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
           HEAP32[i36 >> 2] = i37;
           if ((i37 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
          }
         } while (0);
         i24 = HEAP32[i23 >> 2] | 0;
         if ((i24 | 0) != 0) {
          i20 = i24 + 8 | 0;
          HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
         }
         i20 = HEAP32[i12 >> 2] | 0;
         HEAP32[i12 >> 2] = i24;
         do {
          if ((i20 | 0) != 0) {
           i24 = i20 + 8 | 0;
           i37 = i24 | 0;
           i36 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
           HEAP32[i37 >> 2] = i36;
           if ((i36 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
          }
         } while (0);
         HEAP32[i1 + 24 >> 2] = ((HEAP32[i31 >> 2] | 0) != 0) << 31 >> 31;
         i32 = i21;
         i33 = 0;
         i13 = 77;
        } else {
         i32 = i29;
         i33 = i2;
         i13 = 77;
        }
       } while (0);
       if ((i13 | 0) == 77) {
        if ((i18 | 0) == 0) {
         i38 = i32;
         i39 = i33;
         break;
        } else {
         i34 = i33;
         i35 = i32;
        }
       }
       i20 = i18 + 8 | 0;
       i23 = i20 | 0;
       i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       HEAP32[i23 >> 2] = i24;
       if ((i24 | 0) >= 1) {
        i38 = i35;
        i39 = i34;
        break;
       }
       if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
        i38 = i35;
        i39 = i34;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
       i38 = i35;
       i39 = i34;
      } else {
       do {
        if (i16) {
         i20 = HEAP32[i22 >> 2] | 0;
         do {
          if ((i20 & 2 | 0) == 0) {
           i40 = 0;
           i41 = i20;
          } else {
           i24 = HEAP32[i2 + 36 >> 2] | 0;
           if ((i24 | 0) == 0) {
            i40 = 0;
            i41 = i20;
            break;
           }
           i23 = i24 + 8 | 0;
           HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
           i40 = i24;
           i41 = HEAP32[i22 >> 2] | 0;
          }
         } while (0);
         if ((i41 & 2 | 0) == 0) {
          i42 = 0;
          i43 = i40;
          break;
         }
         i20 = HEAP32[i2 + 40 >> 2] | 0;
         if ((i20 | 0) == 0) {
          i42 = 0;
          i43 = i40;
          break;
         }
         i21 = i20 + 8 | 0;
         HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
         i42 = i20;
         i43 = i40;
        } else {
         i20 = i2 + 8 | 0;
         HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
         i42 = i2;
         i43 = i2;
        }
       } while (0);
       i18 = i1 + 12 | 0;
       i20 = HEAP32[i18 >> 2] | 0;
       if ((i20 | 0) > -1) {
        i44 = i20;
       } else {
        i20 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i18 >> 2] = i20;
        i44 = i20;
       }
       do {
        if ((HEAP32[i29 + 12 >> 2] & 2 | 0) == 0) {
         i45 = 0;
         i46 = 1;
        } else {
         i20 = __ZNK7WebCore13ContainerNode9childNodeEj(i29, i44) | 0;
         if ((i20 | 0) == 0) {
          i45 = 0;
          i46 = 1;
          break;
         }
         i21 = i20 + 8 | 0;
         HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
         i45 = i20;
         i46 = 0;
        }
       } while (0);
       i20 = i7 | 0;
       HEAP32[i20 >> 2] = i2;
       __ZN7WebCore4Node12insertBeforeEN3WTF10PassRefPtrIS0_EEPS0_Ri(i29, i7, i45, i3) | 0;
       i21 = HEAP32[i20 >> 2] | 0;
       do {
        if ((i21 | 0) != 0) {
         i20 = i21 + 8 | 0;
         i31 = i20 | 0;
         i24 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         HEAP32[i31 >> 2] = i24;
         if ((i24 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
        }
       } while (0);
       do {
        if ((HEAP32[i3 >> 2] | 0) == 0) {
         if ((i19 | 0) == 0 | i28 ^ 1) {
          break;
         }
         if ((HEAP32[(HEAP32[i29 + 20 >> 2] | 0) + 8 >> 2] | 0) != (HEAP32[i1 + 4 >> 2] | 0)) {
          break;
         }
         i21 = i43 + 16 | 0;
         if ((HEAP32[i21 >> 2] | 0) == (i29 | 0)) {
          i20 = HEAP32[i43 + 24 >> 2] | 0;
          if ((i20 | 0) != 0) {
           i24 = i20 + 8 | 0;
           HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
          }
          i24 = i1 + 16 | 0;
          i31 = HEAP32[i24 >> 2] | 0;
          HEAP32[i24 >> 2] = i20;
          do {
           if ((i31 | 0) != 0) {
            i20 = i31 + 8 | 0;
            i23 = i20 | 0;
            i36 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
            HEAP32[i23 >> 2] = i36;
            if ((i36 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
           }
          } while (0);
          i31 = HEAP32[i21 >> 2] | 0;
          if ((i31 | 0) != 0) {
           i20 = i31 + 8 | 0;
           HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
          }
          i20 = HEAP32[i8 >> 2] | 0;
          HEAP32[i8 >> 2] = i31;
          do {
           if ((i20 | 0) != 0) {
            i31 = i20 + 8 | 0;
            i36 = i31 | 0;
            i23 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
            HEAP32[i36 >> 2] = i23;
            if ((i23 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
           }
          } while (0);
          HEAP32[i18 >> 2] = ((HEAP32[i24 >> 2] | 0) != 0) << 31 >> 31;
         }
         if ((HEAP32[i42 + 16 >> 2] | 0) != (i29 | 0)) {
          break;
         }
         if (!i15) {
          i20 = i29 + 8 | 0;
          HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
         }
         i20 = (__ZNK7WebCore4Node9nodeIndexEv(i42) | 0) + 1 | 0;
         i21 = HEAP32[i12 >> 2] | 0;
         HEAP32[i12 >> 2] = i29;
         do {
          if ((i21 | 0) != 0) {
           i31 = i21 + 8 | 0;
           i23 = i31 | 0;
           i36 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
           HEAP32[i23 >> 2] = i36;
           if ((i36 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
          }
         } while (0);
         HEAP32[i1 + 24 >> 2] = i20;
         if ((i42 | 0) != 0) {
          i21 = i42 + 8 | 0;
          HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
         }
         i21 = i1 + 28 | 0;
         i24 = HEAP32[i21 >> 2] | 0;
         HEAP32[i21 >> 2] = i42;
         if ((i24 | 0) == 0) {
          break;
         }
         i21 = i24 + 8 | 0;
         i24 = i21 | 0;
         i31 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
         HEAP32[i24 >> 2] = i31;
         if ((i31 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
        }
       } while (0);
       do {
        if (!i46) {
         i18 = i45 + 8 | 0;
         i21 = i18 | 0;
         i31 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
         HEAP32[i21 >> 2] = i31;
         if ((i31 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
        }
       } while (0);
       do {
        if ((i42 | 0) != 0) {
         i18 = i42 + 8 | 0;
         i31 = i18 | 0;
         i21 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         HEAP32[i31 >> 2] = i21;
         if ((i21 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
        }
       } while (0);
       if ((i43 | 0) == 0) {
        i38 = i29;
        i39 = 0;
        break;
       }
       i18 = i43 + 8 | 0;
       i21 = i18 | 0;
       i31 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
       HEAP32[i21 >> 2] = i31;
       if ((i31 | 0) >= 1) {
        i38 = i29;
        i39 = 0;
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        i38 = i29;
        i39 = 0;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
       i38 = i29;
       i39 = 0;
      }
     } while (0);
     do {
      if ((i38 | 0) != 0) {
       i12 = i38 + 8 | 0;
       i15 = i12 | 0;
       i22 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
       HEAP32[i15 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore16ScopedEventQueue21decrementScopingLevelEv(__ZN7WebCore16ScopedEventQueue8instanceEv() | 0);
     i10 = i39;
     break L1;
    }
   } while (0);
   HEAP32[i3 >> 2] = 7;
   i10 = i2;
  }
 } while (0);
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i10 + 8 | 0;
 i10 = i2 | 0;
 i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Range32processAncestorsAndTheirSiblingsENS0_10ActionTypeEPNS_4NodeENS0_24ContentsProcessDirectionEN3WTF10PassRefPtrIS2_EES3_Ri(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i5 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = HEAP32[i3 + 16 >> 2] | 0;
 i16 = i15 | 0;
 L1 : do {
  if ((i15 | 0) == 0 | (i16 | 0) == (i6 | 0)) {
   i17 = 0;
   i18 = 0;
  } else {
   i19 = 0;
   i20 = 0;
   i21 = 0;
   i22 = i15;
   i23 = i16;
   L2 : while (1) {
    if ((i19 | 0) == (i20 | 0)) {
     i24 = i20 + 1 | 0;
     i25 = i24 + (i20 >>> 2) | 0;
     i26 = i25 >>> 0 > 16 >>> 0 ? i25 : 16;
     i25 = i26 >>> 0 > i24 >>> 0 ? i26 : i24;
     do {
      if (i20 >>> 0 < i25 >>> 0) {
       if (i25 >>> 0 > 1073741823 >>> 0) {
        break L2;
       }
       i26 = __ZN3WTF18fastMallocGoodSizeEj(i25 << 2) | 0;
       i27 = i26 >>> 2;
       i28 = __ZN3WTF10fastMallocEj(i26) | 0;
       i26 = i28;
       i29 = i21;
       _memcpy(i28 | 0, i29 | 0, i20 << 2) | 0;
       if ((i21 | 0) == 0) {
        i30 = i26;
        i31 = i27;
        break;
       }
       i28 = (i26 | 0) == (i21 | 0);
       __ZN3WTF8fastFreeEPv(i29);
       i30 = i28 ? 0 : i26;
       i31 = i28 ? 0 : i27;
      } else {
       i30 = i21;
       i31 = i20;
      }
     } while (0);
     HEAP32[i30 + (i20 << 2) >> 2] = i23;
     i25 = i22 + 8 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
     i32 = i30;
     i33 = i31;
     i34 = i24;
    } else {
     HEAP32[i21 + (i19 << 2) >> 2] = i23;
     i25 = i22 + 8 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
     i32 = i21;
     i33 = i20;
     i34 = i19 + 1 | 0;
    }
    i25 = HEAP32[i22 + 16 >> 2] | 0;
    i27 = i25 | 0;
    if ((i25 | 0) == 0 | (i27 | 0) == (i6 | 0)) {
     i17 = i34;
     i18 = i32;
     break L1;
    } else {
     i19 = i34;
     i20 = i33;
     i21 = i32;
     i22 = i25;
     i23 = i27;
    }
   }
   _WTFCrash();
  }
 } while (0);
 i32 = (i4 | 0) == 0;
 i4 = HEAP32[(i32 ? i3 + 28 | 0 : i3 + 24 | 0) >> 2] | 0;
 if ((i4 | 0) == 0) {
  i35 = 0;
 } else {
  i3 = i4 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  i35 = i4;
 }
 i4 = i18 + (i17 << 2) | 0;
 i3 = (i17 | 0) == 0;
 L18 : do {
  if (i3) {
   i36 = i5;
   i37 = i35;
  } else {
   i17 = (i2 - 1 | 0) >>> 0 < 2 >>> 0;
   i33 = i9 | 0;
   i34 = i10 | 0;
   i6 = i11 | 0;
   i31 = i12 | 0;
   i30 = i13 | 0;
   i16 = i14 | 0;
   i15 = i5;
   i23 = i35;
   i22 = i18;
   L20 : while (1) {
    i21 = HEAP32[i22 >> 2] | 0;
    i20 = (i21 | 0) != 0;
    if (i20) {
     i19 = i21 + 8 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    }
    do {
     if (i17) {
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 84 >> 2] & 1](i9, i21, 0);
      i19 = HEAP32[i33 >> 2] | 0;
      HEAP32[i33 >> 2] = 0;
      if ((i19 | 0) == 0) {
       i38 = i15;
       break;
      }
      HEAP32[i34 >> 2] = i15;
      i27 = (i15 | 0) == 0;
      if (!i27) {
       i25 = i15 + 8 | 0;
       HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
      }
      __ZN7WebCore4Node11appendChildEN3WTF10PassRefPtrIS0_EERi(i19, i10, i7) | 0;
      i25 = HEAP32[i34 >> 2] | 0;
      do {
       if ((i25 | 0) != 0) {
        i28 = i25 + 8 | 0;
        i26 = i28 | 0;
        i29 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
        HEAP32[i26 >> 2] = i29;
        if ((i29 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
       }
      } while (0);
      i25 = i19 + 8 | 0;
      HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
      do {
       if (!i27) {
        i25 = i15 + 8 | 0;
        i28 = i25 | 0;
        i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
        HEAP32[i28 >> 2] = i29;
        if ((i29 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
       }
      } while (0);
      i27 = i19 + 8 | 0;
      i25 = i27 | 0;
      i29 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       i38 = i19;
       break;
      }
      if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
       i38 = i19;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
      i38 = i19;
     } else {
      i38 = i15;
     }
    } while (0);
    i24 = (i23 | 0) == 0;
    do {
     if (i24) {
      i39 = 0;
      i40 = 0;
      i41 = 1;
     } else {
      i27 = 0;
      i29 = 0;
      i25 = 0;
      i28 = i23;
      while (1) {
       if ((i27 | 0) == (i29 | 0)) {
        i26 = i29 + 1 | 0;
        i42 = i26 + (i29 >>> 2) | 0;
        i43 = i42 >>> 0 > 16 >>> 0 ? i42 : 16;
        i42 = i43 >>> 0 > i26 >>> 0 ? i43 : i26;
        do {
         if (i29 >>> 0 < i42 >>> 0) {
          if (i42 >>> 0 > 1073741823 >>> 0) {
           break L20;
          }
          i43 = __ZN3WTF18fastMallocGoodSizeEj(i42 << 2) | 0;
          i44 = i43 >>> 2;
          i45 = __ZN3WTF10fastMallocEj(i43) | 0;
          i43 = i45;
          i46 = i25;
          _memcpy(i45 | 0, i46 | 0, i29 << 2) | 0;
          if ((i25 | 0) == 0) {
           i47 = i43;
           i48 = i44;
           break;
          }
          i45 = (i43 | 0) == (i25 | 0);
          __ZN3WTF8fastFreeEPv(i46);
          i47 = i45 ? 0 : i43;
          i48 = i45 ? 0 : i44;
         } else {
          i47 = i25;
          i48 = i29;
         }
        } while (0);
        HEAP32[i47 + (i29 << 2) >> 2] = i28;
        i42 = i28 + 8 | 0;
        HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
        i49 = i47;
        i50 = i48;
        i51 = i26;
       } else {
        HEAP32[i25 + (i27 << 2) >> 2] = i28;
        i42 = i28 + 8 | 0;
        HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
        i49 = i25;
        i50 = i29;
        i51 = i27 + 1 | 0;
       }
       i42 = HEAP32[(i32 ? i28 + 28 | 0 : i28 + 24 | 0) >> 2] | 0;
       if ((i42 | 0) == 0) {
        break;
       } else {
        i27 = i51;
        i29 = i50;
        i25 = i49;
        i28 = i42;
       }
      }
      i28 = i49 + (i51 << 2) | 0;
      i25 = (i51 | 0) == 0;
      if (i25) {
       i39 = i49;
       i40 = i28;
       i41 = 1;
       break;
      }
      i29 = i38 + 12 | 0;
      i27 = i38 + 36 | 0;
      i19 = i49;
      while (1) {
       i42 = HEAP32[i19 >> 2] | 0;
       do {
        if ((i2 | 0) == 0) {
         __ZN7WebCore4Node11removeChildEPS0_Ri(i21, i42, i7) | 0;
        } else if ((i2 | 0) == 1) {
         if (i32) {
          HEAP32[i6 >> 2] = i42;
          if ((i42 | 0) != 0) {
           i44 = i42 + 8 | 0;
           HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
          }
          __ZN7WebCore4Node11appendChildEN3WTF10PassRefPtrIS0_EERi(i38, i11, i7) | 0;
          i44 = HEAP32[i6 >> 2] | 0;
          if ((i44 | 0) == 0) {
           break;
          }
          i45 = i44 + 8 | 0;
          i44 = i45 | 0;
          i43 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
          HEAP32[i44 >> 2] = i43;
          if ((i43 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
          break;
         }
         HEAP32[i31 >> 2] = i42;
         if ((i42 | 0) != 0) {
          i45 = i42 + 8 | 0;
          HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
         }
         if ((HEAP32[i29 >> 2] & 2 | 0) == 0) {
          i52 = 0;
         } else {
          i52 = HEAP32[i27 >> 2] | 0;
         }
         __ZN7WebCore4Node12insertBeforeEN3WTF10PassRefPtrIS0_EEPS0_Ri(i38, i12, i52, i7) | 0;
         i45 = HEAP32[i31 >> 2] | 0;
         if ((i45 | 0) == 0) {
          break;
         }
         i43 = i45 + 8 | 0;
         i45 = i43 | 0;
         i44 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
         HEAP32[i45 >> 2] = i44;
         if ((i44 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
        } else if ((i2 | 0) == 2) {
         i43 = HEAP32[(HEAP32[i42 >> 2] | 0) + 84 >> 2] | 0;
         if (i32) {
          FUNCTION_TABLE_viii[i43 & 1](i13, i42, 1);
          __ZN7WebCore4Node11appendChildEN3WTF10PassRefPtrIS0_EERi(i38, i13, i7) | 0;
          i44 = HEAP32[i30 >> 2] | 0;
          if ((i44 | 0) == 0) {
           break;
          }
          i45 = i44 + 8 | 0;
          i44 = i45 | 0;
          i46 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
          HEAP32[i44 >> 2] = i46;
          if ((i46 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
          break;
         }
         FUNCTION_TABLE_viii[i43 & 1](i14, i42, 1);
         if ((HEAP32[i29 >> 2] & 2 | 0) == 0) {
          i53 = 0;
         } else {
          i53 = HEAP32[i27 >> 2] | 0;
         }
         __ZN7WebCore4Node12insertBeforeEN3WTF10PassRefPtrIS0_EEPS0_Ri(i38, i14, i53, i7) | 0;
         i43 = HEAP32[i16 >> 2] | 0;
         if ((i43 | 0) == 0) {
          break;
         }
         i45 = i43 + 8 | 0;
         i43 = i45 | 0;
         i46 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
         HEAP32[i43 >> 2] = i46;
         if ((i46 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
        }
       } while (0);
       i42 = i19 + 4 | 0;
       if ((i42 | 0) == (i28 | 0)) {
        i39 = i49;
        i40 = i28;
        i41 = i25;
        break;
       } else {
        i19 = i42;
       }
      }
     }
    } while (0);
    i19 = HEAP32[(i32 ? i21 + 28 | 0 : i21 + 24 | 0) >> 2] | 0;
    if ((i19 | 0) != 0) {
     i25 = i19 + 8 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
    }
    do {
     if (!i24) {
      i25 = i23 + 8 | 0;
      i28 = i25 | 0;
      i27 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      HEAP32[i28 >> 2] = i27;
      if ((i27 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
     }
    } while (0);
    if (!i41) {
     i24 = i39;
     while (1) {
      i25 = HEAP32[i24 >> 2] | 0;
      do {
       if ((i25 | 0) != 0) {
        i27 = i25 + 8 | 0;
        i28 = i27 | 0;
        i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
        HEAP32[i28 >> 2] = i29;
        if ((i29 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
       }
      } while (0);
      i24 = i24 + 4 | 0;
      if ((i24 | 0) == (i40 | 0)) {
       break;
      }
     }
    }
    if ((i39 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i39);
    }
    do {
     if (i20) {
      i24 = i21 + 8 | 0;
      i25 = i24 | 0;
      i27 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i27;
      if ((i27 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    i21 = i22 + 4 | 0;
    if ((i21 | 0) == (i4 | 0)) {
     i36 = i38;
     i37 = i19;
     break L18;
    } else {
     i15 = i38;
     i23 = i19;
     i22 = i21;
    }
   }
   _WTFCrash();
  }
 } while (0);
 HEAP32[i1 >> 2] = i36;
 do {
  if ((i37 | 0) != 0) {
   i36 = i37 + 8 | 0;
   i1 = i36 | 0;
   i38 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i38;
   if ((i38 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
  }
 } while (0);
 if (!i3) {
  i3 = i18;
  while (1) {
   i37 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i37 | 0) != 0) {
     i36 = i37 + 8 | 0;
     i38 = i36 | 0;
     i1 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     HEAP32[i38 >> 2] = i1;
     if ((i1 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i4 | 0)) {
    break;
   }
  }
 }
 if ((i18 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore5Range29processContentsBetweenOffsetsENS0_10ActionTypeEN3WTF10PassRefPtrINS_16DocumentFragmentEEEPNS_4NodeEjjRi(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 48 | 0;
 i16 = i8 + 56 | 0;
 i17 = i8 + 64 | 0;
 i18 = i8 + 80 | 0;
 i19 = i8 + 88 | 0;
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 1](i4) | 0) {
 case 3:
 case 4:
 case 8:
  {
   i20 = i4;
   i21 = HEAP32[i4 + 36 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i22 = 0;
   } else {
    i22 = HEAP32[i21 + 4 >> 2] | 0;
   }
   i21 = i22 >>> 0 < i6 >>> 0 ? i22 : i6;
   i22 = i21 >>> 0 < i5 >>> 0 ? i21 : i5;
   do {
    if ((i2 - 1 | 0) >>> 0 < 2 >>> 0) {
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] & 1](i9, i4, 1);
     i23 = i9 | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     i23 = i24;
     i25 = (i24 | 0) == 0;
     if (!i25) {
      i26 = i24 + 8 | 0;
      HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
     }
     i26 = HEAP32[i24 + 36 >> 2] | 0;
     i27 = (i26 | 0) == 0;
     if (i27) {
      i28 = 0;
     } else {
      i28 = HEAP32[i26 + 4 >> 2] | 0;
     }
     if ((i28 | 0) != (i21 | 0)) {
      if (i27) {
       i29 = 0;
      } else {
       i29 = HEAP32[i26 + 4 >> 2] | 0;
      }
      __ZN7WebCore13CharacterData10deleteDataEjjRi(i23, i21, i29 - i21 | 0, i7);
     }
     if ((i22 | 0) != 0) {
      __ZN7WebCore13CharacterData10deleteDataEjjRi(i23, 0, i22, i7);
     }
     do {
      if (!i25) {
       i23 = i24 + 8 | 0;
       i26 = i23 | 0;
       i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       HEAP32[i26 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
      }
     } while (0);
     i25 = i3 | 0;
     i23 = HEAP32[i25 >> 2] | 0;
     if ((i23 | 0) == 0) {
      i30 = i24;
      break;
     }
     HEAP32[i25 >> 2] = 0;
     i25 = i23 | 0;
     i23 = i10 | 0;
     HEAP32[i23 >> 2] = i24;
     __ZN7WebCore4Node11appendChildEN3WTF10PassRefPtrIS0_EERi(i25, i10, i7) | 0;
     i27 = HEAP32[i23 >> 2] | 0;
     if ((i27 | 0) == 0) {
      i30 = i25;
      break;
     }
     i23 = i27 + 8 | 0;
     i27 = i23 | 0;
     i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      i30 = i25;
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      i30 = i25;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     i30 = i25;
    } else {
     i30 = 0;
    }
   } while (0);
   if (i2 >>> 0 >= 2 >>> 0) {
    i31 = i30;
    i32 = i1 | 0;
    HEAP32[i32 >> 2] = i31;
    STACKTOP = i8;
    return;
   }
   __ZN7WebCore13CharacterData10deleteDataEjjRi(i20, i22, i21 - i22 | 0, i7);
   i31 = i30;
   i32 = i1 | 0;
   HEAP32[i32 >> 2] = i31;
   STACKTOP = i8;
   return;
  }
 case 7:
  {
   i30 = i4 + 36 | 0;
   i22 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i22 | 0) == 0) {
     i33 = 0;
    } else {
     i21 = i22 | 0;
     i20 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i20 + 2;
     i10 = HEAP32[i22 + 4 >> 2] | 0;
     i29 = i10 >>> 0 < i6 >>> 0 ? i10 : i6;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      i33 = i29;
      break;
     } else {
      HEAP32[i21 >> 2] = i20;
      i33 = i29;
      break;
     }
    }
   } while (0);
   i22 = i33 >>> 0 < i5 >>> 0 ? i33 : i5;
   do {
    if ((i2 - 1 | 0) >>> 0 < 2 >>> 0) {
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] & 1](i11, i4, 1);
     i29 = i11 | 0;
     i20 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = 0;
     i29 = i13 | 0;
     i21 = HEAP32[i20 + 36 >> 2] | 0;
     HEAP32[i29 >> 2] = i21;
     if ((i21 | 0) != 0) {
      i10 = i21 | 0;
      HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     }
     __ZNK3WTF6String9substringEjj(i12, i13, i22, i33 - i22 | 0);
     __ZN7WebCore13CharacterData7setDataERKN3WTF6StringERi(i20, i12, i7);
     i10 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i21 = i10 | 0;
       i28 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
       if ((i28 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i10);
        break;
       } else {
        HEAP32[i21 >> 2] = i28;
        break;
       }
      }
     } while (0);
     i10 = HEAP32[i29 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i24 = i10 | 0;
       i28 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
       if ((i28 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i10);
        break;
       } else {
        HEAP32[i24 >> 2] = i28;
        break;
       }
      }
     } while (0);
     i10 = i3 | 0;
     i29 = HEAP32[i10 >> 2] | 0;
     if ((i29 | 0) == 0) {
      i34 = i20;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     i10 = i29 | 0;
     i29 = i14 | 0;
     HEAP32[i29 >> 2] = i20;
     __ZN7WebCore4Node11appendChildEN3WTF10PassRefPtrIS0_EERi(i10, i14, i7) | 0;
     i28 = HEAP32[i29 >> 2] | 0;
     if ((i28 | 0) == 0) {
      i34 = i10;
      break;
     }
     i29 = i28 + 8 | 0;
     i28 = i29 | 0;
     i24 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i24;
     if ((i24 | 0) >= 1) {
      i34 = i10;
      break;
     }
     if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
      i34 = i10;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     i34 = i10;
    } else {
     i34 = 0;
    }
   } while (0);
   if (i2 >>> 0 >= 2 >>> 0) {
    i31 = i34;
    i32 = i1 | 0;
    HEAP32[i32 >> 2] = i31;
    STACKTOP = i8;
    return;
   }
   i14 = i15 | 0;
   i12 = HEAP32[i30 >> 2] | 0;
   HEAP32[i14 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i30 = i12 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
   }
   __ZN3WTF6String6removeEji(i15, i22, i33 - i22 | 0);
   __ZN7WebCore13CharacterData7setDataERKN3WTF6StringERi(i4, i15, i7);
   i15 = HEAP32[i14 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i31 = i34;
    i32 = i1 | 0;
    HEAP32[i32 >> 2] = i31;
    STACKTOP = i8;
    return;
   }
   i14 = i15 | 0;
   i22 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    i31 = i34;
    i32 = i1 | 0;
    HEAP32[i32 >> 2] = i31;
    STACKTOP = i8;
    return;
   } else {
    HEAP32[i14 >> 2] = i22;
    i31 = i34;
    i32 = i1 | 0;
    HEAP32[i32 >> 2] = i31;
    STACKTOP = i8;
    return;
   }
   break;
  }
 case 1:
 case 2:
 case 5:
 case 6:
 case 9:
 case 10:
 case 11:
 case 12:
 case 13:
  {
   do {
    if ((i2 - 1 | 0) >>> 0 < 2 >>> 0) {
     i34 = i3 | 0;
     i22 = HEAP32[i34 >> 2] | 0;
     if ((i22 | 0) == 0) {
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] & 1](i16, i4, 0);
      i14 = i16 | 0;
      i15 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = 0;
      i35 = i15;
      break;
     } else {
      HEAP32[i34 >> 2] = 0;
      i35 = i22 | 0;
      break;
     }
    } else {
     i35 = 0;
    }
   } while (0);
   if ((HEAP32[i4 + 12 >> 2] & 2 | 0) == 0) {
    i36 = 0;
   } else {
    i36 = HEAP32[i4 + 36 >> 2] | 0;
   }
   i16 = i17 | 0;
   HEAP32[i16 >> 2] = 0;
   i3 = i17 + 4 | 0;
   HEAP32[i3 >> 2] = 0;
   i22 = i17 + 8 | 0;
   HEAP32[i22 >> 2] = 0;
   if ((i36 | 0) == 0 | (i5 | 0) == 0) {
    i37 = i36;
   } else {
    i34 = i36;
    i36 = i5;
    while (1) {
     i15 = HEAP32[i34 + 28 >> 2] | 0;
     i14 = i36 - 1 | 0;
     if ((i15 | 0) == 0 | (i14 | 0) == 0) {
      i37 = i15;
      break;
     } else {
      i34 = i15;
      i36 = i14;
     }
    }
   }
   L94 : do {
    if ((i37 | 0) != 0 & i5 >>> 0 < i6 >>> 0) {
     i36 = i37;
     i34 = i5;
     i14 = 0;
     i15 = 0;
     L95 : while (1) {
      do {
       if ((i14 | 0) == (i15 | 0)) {
        i33 = i15 + 1 | 0;
        i30 = i33 + (i15 >>> 2) | 0;
        i12 = i30 >>> 0 > 16 >>> 0 ? i30 : 16;
        i30 = i12 >>> 0 > i33 >>> 0 ? i12 : i33;
        i33 = HEAP32[i16 >> 2] | 0;
        do {
         if (i15 >>> 0 < i30 >>> 0) {
          if (i30 >>> 0 > 1073741823 >>> 0) {
           break L95;
          }
          i12 = __ZN3WTF18fastMallocGoodSizeEj(i30 << 2) | 0;
          HEAP32[i3 >> 2] = i12 >>> 2;
          i13 = __ZN3WTF10fastMallocEj(i12) | 0;
          i12 = i13;
          HEAP32[i16 >> 2] = i12;
          i11 = i33;
          _memcpy(i13 | 0, i11 | 0, i15 << 2) | 0;
          if ((i33 | 0) == 0) {
           i38 = i12;
           break;
          }
          if ((i12 | 0) == (i33 | 0)) {
           HEAP32[i16 >> 2] = 0;
           HEAP32[i3 >> 2] = 0;
           i39 = 0;
          } else {
           i39 = i12;
          }
          __ZN3WTF8fastFreeEPv(i11);
          i38 = i39;
         } else {
          i38 = i33;
         }
        } while (0);
        HEAP32[i38 + (i15 << 2) >> 2] = i36;
        if ((i36 | 0) == 0) {
         i40 = i15;
         break;
        }
        i33 = i36 + 8 | 0;
        HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
        i40 = HEAP32[i22 >> 2] | 0;
       } else {
        HEAP32[(HEAP32[i16 >> 2] | 0) + (i14 << 2) >> 2] = i36;
        if ((i36 | 0) == 0) {
         i40 = i14;
         break;
        }
        i33 = i36 + 8 | 0;
        HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
        i40 = HEAP32[i22 >> 2] | 0;
       }
      } while (0);
      i33 = i40 + 1 | 0;
      HEAP32[i22 >> 2] = i33;
      i30 = i34 + 1 | 0;
      i11 = HEAP32[i36 + 28 >> 2] | 0;
      if (!((i11 | 0) != 0 & i30 >>> 0 < i6 >>> 0)) {
       break L94;
      }
      i36 = i11;
      i34 = i30;
      i14 = i33;
      i15 = HEAP32[i3 >> 2] | 0;
     }
     _WTFCrash();
    }
   } while (0);
   i6 = i18 | 0;
   HEAP32[i6 >> 2] = i4;
   if ((i4 | 0) != 0) {
    i40 = i4 + 8 | 0;
    HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
   }
   i40 = i19 | 0;
   HEAP32[i40 >> 2] = i35;
   if ((i35 | 0) != 0) {
    i4 = i35 + 8 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   }
   __ZN7WebCore5Range12processNodesENS0_10ActionTypeERN3WTF6VectorINS2_6RefPtrINS_4NodeEEELj0ENS2_15CrashOnOverflowEEENS2_10PassRefPtrIS5_EESB_Ri(i2, i17, i18, i19, i7);
   i7 = HEAP32[i40 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i40 = i7 + 8 | 0;
     i19 = i40 | 0;
     i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
    }
   } while (0);
   i7 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 + 8 | 0;
     i40 = i6 | 0;
     i18 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
     HEAP32[i40 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
    }
   } while (0);
   i7 = HEAP32[i22 >> 2] | 0;
   i6 = HEAP32[i16 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i18 = i6 + (i7 << 2) | 0;
    i7 = i6;
    while (1) {
     i40 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i40 | 0) != 0) {
       i19 = i40 + 8 | 0;
       i17 = i19 | 0;
       i2 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
       HEAP32[i17 >> 2] = i2;
       if ((i2 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
      }
     } while (0);
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i18 | 0)) {
      break;
     }
    }
    HEAP32[i22 >> 2] = 0;
   }
   if ((i6 | 0) == 0) {
    i31 = i35;
    i32 = i1 | 0;
    HEAP32[i32 >> 2] = i31;
    STACKTOP = i8;
    return;
   }
   HEAP32[i16 >> 2] = 0;
   HEAP32[i3 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
   i31 = i35;
   i32 = i1 | 0;
   HEAP32[i32 >> 2] = i31;
   STACKTOP = i8;
   return;
  }
 default:
  {
   i31 = 0;
   i32 = i1 | 0;
   HEAP32[i32 >> 2] = i31;
   STACKTOP = i8;
   return;
  }
 }
}
function __ZNK7WebCore5Range21getBorderAndTextQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 56 | 0;
 i9 = i3 + 72 | 0;
 i10 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = HEAP32[i1 + 20 >> 2] | 0;
 i12 = __ZNK7WebCore5Range12pastLastNodeEv(i1) | 0;
 _memset(i4 | 0, 0, 20) | 0;
 i13 = __ZNK7WebCore5Range9firstNodeEv(i1) | 0;
 HEAP32[i5 >> 2] = i13;
 if ((i13 | 0) != (i12 | 0)) {
  i14 = i4 | 0;
  i15 = i13;
  while (1) {
   i13 = HEAP32[i15 + 12 >> 2] | 0;
   if ((i13 & 4 | 0) == 0) {
    i16 = i15;
    i17 = i13;
   } else {
    __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i6, i14, i5, i5);
    i13 = HEAP32[i5 >> 2] | 0;
    i16 = i13;
    i17 = HEAP32[i13 + 12 >> 2] | 0;
   }
   if ((i17 & 2 | 0) == 0) {
    i18 = 8;
   } else {
    i13 = HEAP32[i16 + 36 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i18 = 8;
    } else {
     i19 = i13;
    }
   }
   do {
    if ((i18 | 0) == 8) {
     i18 = 0;
     i13 = HEAP32[i16 + 28 >> 2] | 0;
     if ((i13 | 0) != 0) {
      i19 = i13;
      break;
     }
     i19 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i16) | 0;
    }
   } while (0);
   HEAP32[i5 >> 2] = i19;
   if ((i19 | 0) == (i12 | 0)) {
    break;
   } else {
    i15 = i19;
   }
  }
 }
 i19 = i1 + 28 | 0;
 i15 = HEAP32[i19 >> 2] | 0;
 i5 = HEAP32[((i15 | 0) == 0 ? i11 : i15) + 16 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 if ((i5 | 0) != 0) {
  while (1) {
   __ZN3WTF7HashSetIPN7WebCore4NodeENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i4, i7) | 0;
   i5 = HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] | 0;
   HEAP32[i7 >> 2] = i5;
   if ((i5 | 0) == 0) {
    break;
   }
  }
 }
 i7 = __ZNK7WebCore5Range9firstNodeEv(i1) | 0;
 L19 : do {
  if ((i7 | 0) == (i12 | 0)) {
   i20 = i4 | 0;
  } else {
   i5 = i1 + 12 | 0;
   i15 = i1 + 16 | 0;
   i16 = i1 + 24 | 0;
   i17 = i1 + 4 | 0;
   i14 = i9 | 0;
   i6 = i9 + 8 | 0;
   i13 = i2 + 8 | 0;
   i21 = i2 + 4 | 0;
   i22 = i2 | 0;
   i23 = i9 + 4 | 0;
   i24 = i4 | 0;
   i25 = i4 + 8 | 0;
   i26 = i8 | 0;
   i27 = i8 + 4 | 0;
   i28 = i8 + 8 | 0;
   i29 = i7;
   L22 : while (1) {
    i30 = i29 + 12 | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    L24 : do {
     if ((i31 & 4 | 0) == 0) {
      i18 = 38;
     } else {
      i32 = HEAP32[i24 >> 2] | 0;
      if ((i32 | 0) == 0) {
       i18 = 38;
       break;
      }
      i33 = HEAP32[i25 >> 2] | 0;
      i34 = i29;
      i35 = i34 + ~(i34 << 15) | 0;
      i34 = (i35 >>> 10 ^ i35) * 9 & -1;
      i35 = i34 >>> 6 ^ i34;
      i34 = i35 + ~(i35 << 11) | 0;
      i35 = i34 >>> 16 ^ i34;
      i34 = i33 & i35;
      i36 = i32 + (i34 << 2) | 0;
      i37 = HEAP32[i36 >> 2] | 0;
      if ((i37 | 0) == (i29 | 0)) {
       i38 = i36;
      } else {
       i36 = (i35 >>> 23) + ~i35 | 0;
       i35 = i36 << 12 ^ i36;
       i36 = i35 >>> 7 ^ i35;
       i35 = i36 << 2 ^ i36;
       i36 = i35 >>> 20 ^ i35 | 1;
       i35 = 0;
       i39 = i34;
       i34 = i37;
       while (1) {
        if ((i34 | 0) == 0) {
         i18 = 38;
         break L24;
        }
        i37 = (i35 | 0) == 0 ? i36 : i35;
        i40 = i37 + i39 & i33;
        i41 = i32 + (i40 << 2) | 0;
        i42 = HEAP32[i41 >> 2] | 0;
        if ((i42 | 0) == (i29 | 0)) {
         i38 = i41;
         break;
        } else {
         i35 = i37;
         i39 = i40;
         i34 = i42;
        }
       }
      }
      if ((i38 | 0) == 0) {
       i18 = 38;
       break;
      }
      i34 = HEAP32[i29 + 16 >> 2] | 0;
      i39 = i34 | 0;
      i35 = i34;
      i34 = i35 + ~(i35 << 15) | 0;
      i35 = (i34 >>> 10 ^ i34) * 9 & -1;
      i34 = i35 >>> 6 ^ i35;
      i35 = i34 + ~(i34 << 11) | 0;
      i34 = i35 >>> 16 ^ i35;
      i35 = i33 & i34;
      i36 = i32 + (i35 << 2) | 0;
      i42 = HEAP32[i36 >> 2] | 0;
      L34 : do {
       if ((i42 | 0) == (i39 | 0)) {
        i43 = i36;
        i18 = 26;
       } else {
        i40 = (i34 >>> 23) + ~i34 | 0;
        i37 = i40 << 12 ^ i40;
        i40 = i37 >>> 7 ^ i37;
        i37 = i40 << 2 ^ i40;
        i40 = i37 >>> 20 ^ i37 | 1;
        i37 = 0;
        i41 = i35;
        i44 = i42;
        while (1) {
         if ((i44 | 0) == 0) {
          break L34;
         }
         i45 = (i37 | 0) == 0 ? i40 : i37;
         i46 = i45 + i41 & i33;
         i47 = i32 + (i46 << 2) | 0;
         i48 = HEAP32[i47 >> 2] | 0;
         if ((i48 | 0) == (i39 | 0)) {
          i43 = i47;
          i18 = 26;
          break;
         } else {
          i37 = i45;
          i41 = i46;
          i44 = i48;
         }
        }
       }
      } while (0);
      if ((i18 | 0) == 26) {
       i18 = 0;
       if ((i43 | 0) != 0) {
        i18 = 38;
        break;
       }
      }
      i39 = __ZNK7WebCore4Node20renderBoxModelObjectEv(i29) | 0;
      if ((i39 | 0) == 0) {
       break;
      }
      HEAP32[i26 >> 2] = 0;
      HEAP32[i27 >> 2] = 0;
      HEAP32[i28 >> 2] = 0;
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i39 >> 2] | 0) + 476 >> 2] & 1](i39 | 0, i8, 0);
      __ZN7WebCore8Document53adjustFloatQuadsForScrollAndAbsoluteZoomAndFrameScaleERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEERKNS_11RenderStyleE(HEAP32[i17 >> 2] | 0, i8, HEAP32[i39 + 36 >> 2] | 0);
      i39 = HEAP32[i26 >> 2] | 0;
      i32 = HEAP32[i28 >> 2] | 0;
      i33 = HEAP32[i13 >> 2] | 0;
      i42 = i33 + i32 | 0;
      if (i42 >>> 0 > (HEAP32[i21 >> 2] | 0) >>> 0) {
       __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i42);
       i49 = HEAP32[i13 >> 2] | 0;
      } else {
       i49 = i33;
      }
      if (i42 >>> 0 < i49 >>> 0) {
       i18 = 31;
       break L22;
      }
      i33 = HEAP32[i22 >> 2] | 0;
      if ((i32 | 0) != 0) {
       i35 = 0;
       while (1) {
        _memcpy(i33 + (i35 + i49 << 5) | 0, i39 + (i35 << 5) | 0, 32) | 0;
        i35 = i35 + 1 | 0;
        if (i35 >>> 0 >= i32 >>> 0) {
         break;
        }
       }
      }
      HEAP32[i13 >> 2] = i42;
      if ((HEAP32[i28 >> 2] | 0) != 0) {
       HEAP32[i28 >> 2] = 0;
      }
      i32 = HEAP32[i26 >> 2] | 0;
      if ((i32 | 0) == 0) {
       break;
      }
      HEAP32[i26 >> 2] = 0;
      HEAP32[i27 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i32);
     }
    } while (0);
    do {
     if ((i18 | 0) == 38) {
      i18 = 0;
      if ((i31 & 1 | 0) == 0) {
       break;
      }
      i32 = i29 + 32 | 0;
      if ((i31 & 2048 | 0) == 0) {
       i50 = i32 | 0;
      } else {
       i50 = HEAP32[i32 >> 2] | 0;
      }
      i32 = HEAP32[i50 >> 2] | 0;
      if ((i32 | 0) == 0) {
       break;
      }
      i35 = i32;
      do {
       if ((i29 | 0) == (i10 | 0)) {
        i39 = HEAP32[i5 >> 2] | 0;
        if ((i39 | 0) > -1) {
         i51 = i39;
         break;
        }
        i39 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i15 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i5 >> 2] = i39;
        i51 = i39;
       } else {
        i51 = 0;
       }
      } while (0);
      do {
       if ((i29 | 0) == (i11 | 0)) {
        i42 = HEAP32[i16 >> 2] | 0;
        if ((i42 | 0) > -1) {
         i52 = i42;
         break;
        }
        i42 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i19 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i16 >> 2] = i42;
        i52 = i42;
       } else {
        i52 = 2147483647;
       }
      } while (0);
      __ZNK7WebCore10RenderText21absoluteQuadsForRangeEjjbPb(i9, i35, i51, i52, 0, 0);
      __ZN7WebCore8Document53adjustFloatQuadsForScrollAndAbsoluteZoomAndFrameScaleERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEERKNS_11RenderStyleE(HEAP32[i17 >> 2] | 0, i9, HEAP32[(HEAP32[i32 + 8 >> 2] | 0) + 36 >> 2] | 0);
      i42 = HEAP32[i14 >> 2] | 0;
      i39 = HEAP32[i6 >> 2] | 0;
      i33 = HEAP32[i13 >> 2] | 0;
      i34 = i33 + i39 | 0;
      if (i34 >>> 0 > (HEAP32[i21 >> 2] | 0) >>> 0) {
       __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i34);
       i53 = HEAP32[i13 >> 2] | 0;
      } else {
       i53 = i33;
      }
      if (i34 >>> 0 < i53 >>> 0) {
       i18 = 52;
       break L22;
      }
      i33 = HEAP32[i22 >> 2] | 0;
      if ((i39 | 0) != 0) {
       i36 = 0;
       while (1) {
        _memcpy(i33 + (i36 + i53 << 5) | 0, i42 + (i36 << 5) | 0, 32) | 0;
        i36 = i36 + 1 | 0;
        if (i36 >>> 0 >= i39 >>> 0) {
         break;
        }
       }
      }
      HEAP32[i13 >> 2] = i34;
      if ((HEAP32[i6 >> 2] | 0) != 0) {
       HEAP32[i6 >> 2] = 0;
      }
      i39 = HEAP32[i14 >> 2] | 0;
      if ((i39 | 0) == 0) {
       break;
      }
      HEAP32[i14 >> 2] = 0;
      HEAP32[i23 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i39);
     }
    } while (0);
    if ((HEAP32[i30 >> 2] & 2 | 0) == 0) {
     i18 = 62;
    } else {
     i31 = HEAP32[i29 + 36 >> 2] | 0;
     if ((i31 | 0) == 0) {
      i18 = 62;
     } else {
      i54 = i31;
     }
    }
    do {
     if ((i18 | 0) == 62) {
      i18 = 0;
      i31 = HEAP32[i29 + 28 >> 2] | 0;
      if ((i31 | 0) != 0) {
       i54 = i31;
       break;
      }
      i54 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i29) | 0;
     }
    } while (0);
    if ((i54 | 0) == (i12 | 0)) {
     i20 = i24;
     break L19;
    } else {
     i29 = i54;
    }
   }
   if ((i18 | 0) == 52) {
    _WTFCrash();
   } else if ((i18 | 0) == 31) {
    _WTFCrash();
   }
  }
 } while (0);
 i18 = HEAP32[i20 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14areRangesEqualEPKNS_5RangeES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 80 | 0;
 i14 = i3 + 96 | 0;
 i15 = i3 + 112 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  i16 = 1;
  STACKTOP = i3;
  return i16 | 0;
 }
 if ((i1 | 0) == 0 | (i2 | 0) == 0) {
  i16 = 0;
  STACKTOP = i3;
  return i16 | 0;
 }
 i17 = i1 + 12 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i18 | 0) > -1) {
  i19 = i18;
 } else {
  i18 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i17 >> 2] = i18;
  i19 = i18;
 }
 i18 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i20 = i19;
 } else {
  i19 = i18 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  i20 = HEAP32[i17 >> 2] | 0;
 }
 i17 = i10 | 0;
 HEAP32[i17 >> 2] = i18;
 HEAP32[i11 >> 2] = i20;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i12, i10, i11);
 i11 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i17 = i11 + 8 | 0;
   i10 = i17 | 0;
   i20 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 i11 = i2 + 12 | 0;
 i17 = HEAP32[i11 >> 2] | 0;
 if ((i17 | 0) > -1) {
  i21 = i17;
 } else {
  i17 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i11 >> 2] = i17;
  i21 = i17;
 }
 i17 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i22 = i21;
 } else {
  i21 = i17 + 8 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
  i22 = HEAP32[i11 >> 2] | 0;
 }
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = i17;
 HEAP32[i9 >> 2] = i22;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i13, i8, i9);
 i9 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 + 8 | 0;
   i8 = i11 | 0;
   i22 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i9 = i12 | 0;
 i11 = i13 | 0;
 i22 = HEAP32[i11 >> 2] | 0;
 if ((HEAP32[i9 >> 2] | 0) == (i22 | 0)) {
  i8 = i12 + 8 | 0;
  do {
   if ((HEAP8[i8] & 8) == 0) {
    i17 = HEAP32[i8 >> 2] & 7;
    if (!((i17 | 0) == 2 | (i17 | 0) == 4)) {
     i23 = 22;
     break;
    }
    i24 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i12) | 0;
   } else {
    i23 = 22;
   }
  } while (0);
  if ((i23 | 0) == 22) {
   i24 = HEAP32[i12 + 4 >> 2] | 0;
  }
  i12 = i13 + 8 | 0;
  do {
   if ((HEAP8[i12] & 8) == 0) {
    i17 = HEAP32[i12 >> 2] & 7;
    if (!((i17 | 0) == 2 | (i17 | 0) == 4)) {
     i23 = 26;
     break;
    }
    i25 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i13) | 0;
   } else {
    i23 = 26;
   }
  } while (0);
  if ((i23 | 0) == 26) {
   i25 = HEAP32[i13 + 4 >> 2] | 0;
  }
  do {
   if ((i24 | 0) == (i25 | 0)) {
    if (((HEAP32[i12 >> 2] ^ HEAP32[i8 >> 2]) & 7 | 0) != 0) {
     i26 = 0;
     break;
    }
    i13 = i1 + 24 | 0;
    i17 = HEAP32[i13 >> 2] | 0;
    if ((i17 | 0) > -1) {
     i27 = i17;
    } else {
     i17 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
     HEAP32[i13 >> 2] = i17;
     i27 = i17;
    }
    i17 = HEAP32[i1 + 20 >> 2] | 0;
    if ((i17 | 0) == 0) {
     i28 = i27;
    } else {
     i21 = i17 + 8 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     i28 = HEAP32[i13 >> 2] | 0;
    }
    i13 = i6 | 0;
    HEAP32[i13 >> 2] = i17;
    HEAP32[i7 >> 2] = i28;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i14, i6, i7);
    i17 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i13 = i17 + 8 | 0;
      i21 = i13 | 0;
      i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
      HEAP32[i21 >> 2] = i20;
      if ((i20 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
     }
    } while (0);
    i17 = i2 + 24 | 0;
    i13 = HEAP32[i17 >> 2] | 0;
    if ((i13 | 0) > -1) {
     i29 = i13;
    } else {
     i13 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
     HEAP32[i17 >> 2] = i13;
     i29 = i13;
    }
    i13 = HEAP32[i2 + 20 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i30 = i29;
    } else {
     i20 = i13 + 8 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     i30 = HEAP32[i17 >> 2] | 0;
    }
    i17 = i4 | 0;
    HEAP32[i17 >> 2] = i13;
    HEAP32[i5 >> 2] = i30;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i15, i4, i5);
    i13 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i13 | 0) != 0) {
      i17 = i13 + 8 | 0;
      i20 = i17 | 0;
      i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
      HEAP32[i20 >> 2] = i21;
      if ((i21 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     }
    } while (0);
    i13 = i14 | 0;
    i17 = i15 | 0;
    i21 = HEAP32[i17 >> 2] | 0;
    if ((HEAP32[i13 >> 2] | 0) == (i21 | 0)) {
     i20 = i14 + 8 | 0;
     do {
      if ((HEAP8[i20] & 8) == 0) {
       i10 = HEAP32[i20 >> 2] & 7;
       if (!((i10 | 0) == 2 | (i10 | 0) == 4)) {
        i23 = 49;
        break;
       }
       i31 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i14) | 0;
      } else {
       i23 = 49;
      }
     } while (0);
     if ((i23 | 0) == 49) {
      i31 = HEAP32[i14 + 4 >> 2] | 0;
     }
     i10 = i15 + 8 | 0;
     do {
      if ((HEAP8[i10] & 8) == 0) {
       i18 = HEAP32[i10 >> 2] & 7;
       if (!((i18 | 0) == 2 | (i18 | 0) == 4)) {
        i23 = 53;
        break;
       }
       i32 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i15) | 0;
      } else {
       i23 = 53;
      }
     } while (0);
     if ((i23 | 0) == 53) {
      i32 = HEAP32[i15 + 4 >> 2] | 0;
     }
     if ((i31 | 0) == (i32 | 0)) {
      i33 = ((HEAP32[i10 >> 2] ^ HEAP32[i20 >> 2]) & 7 | 0) == 0;
     } else {
      i33 = 0;
     }
     i34 = i33;
     i35 = HEAP32[i17 >> 2] | 0;
    } else {
     i34 = 0;
     i35 = i21;
    }
    do {
     if ((i35 | 0) != 0) {
      i18 = i35 + 8 | 0;
      i19 = i18 | 0;
      i36 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i36;
      if ((i36 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
     }
    } while (0);
    i21 = HEAP32[i13 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i26 = i34;
     break;
    }
    i17 = i21 + 8 | 0;
    i21 = i17 | 0;
    i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    HEAP32[i21 >> 2] = i20;
    if ((i20 | 0) >= 1) {
     i26 = i34;
     break;
    }
    if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
     i26 = i34;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    i26 = i34;
   } else {
    i26 = 0;
   }
  } while (0);
  i37 = i26;
  i38 = HEAP32[i11 >> 2] | 0;
 } else {
  i37 = 0;
  i38 = i22;
 }
 do {
  if ((i38 | 0) != 0) {
   i22 = i38 + 8 | 0;
   i11 = i22 | 0;
   i26 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i26;
   if ((i26 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
  }
 } while (0);
 i38 = HEAP32[i9 >> 2] | 0;
 if ((i38 | 0) == 0) {
  i16 = i37;
  STACKTOP = i3;
  return i16 | 0;
 }
 i9 = i38 + 8 | 0;
 i38 = i9 | 0;
 i22 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
 HEAP32[i38 >> 2] = i22;
 if ((i22 | 0) >= 1) {
  i16 = i37;
  STACKTOP = i3;
  return i16 | 0;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  i16 = i37;
  STACKTOP = i3;
  return i16 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 i16 = i37;
 STACKTOP = i3;
 return i16 | 0;
}
function __ZN7WebCore5Range16surroundContentsEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i1 + 8 | 0;
 L1 : do {
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   HEAP32[i3 >> 2] = 11;
   i9 = 49;
  } else {
   if ((i2 | 0) == 0) {
    HEAP32[i3 >> 2] = 8;
    STACKTOP = i4;
    return;
   }
   i10 = i2;
   switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 76 >> 2] & 1](i2) | 0) {
   case 2:
   case 11:
   case 9:
   case 10:
   case 6:
   case 12:
    {
     HEAP32[i3 >> 2] = 202;
     break L1;
     break;
    }
   default:
    {}
   }
   i11 = HEAP32[i8 >> 2] | 0;
   L11 : do {
    if ((i11 | 0) == 0) {
     i9 = 10;
    } else {
     i12 = i11;
     while (1) {
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 76 >> 2] & 1](i12) | 0) == 5) {
       break L11;
      }
      i13 = HEAP32[i12 + 16 >> 2] | 0;
      if ((i13 | 0) == 0) {
       i9 = 10;
       break;
      } else {
       i12 = i13 | 0;
      }
     }
    }
   } while (0);
   L15 : do {
    if ((i9 | 0) == 10) {
     i11 = i1 + 20 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     if ((i12 | 0) != 0) {
      i13 = i12;
      while (1) {
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 76 >> 2] & 1](i13) | 0) == 5) {
        break L15;
       }
       i12 = HEAP32[i13 + 16 >> 2] | 0;
       if ((i12 | 0) == 0) {
        break;
       } else {
        i13 = i12 | 0;
       }
      }
     }
     i13 = HEAP32[i8 >> 2] | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 116 >> 2] & 1](i13) | 0) {
      i14 = HEAP32[i13 + 16 >> 2] | 0;
     } else {
      i14 = i13;
     }
     do {
      if ((i14 | 0) != 0) {
       i13 = HEAP32[(HEAP32[i14 >> 2] | 0) + 160 >> 2] | 0;
       i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 76 >> 2] & 1](i2) | 0;
       if (!(FUNCTION_TABLE_iii[i13 & 1](i14, i12) | 0)) {
        break;
       }
       if (__ZNK7WebCore4Node8containsEPKS0_(i2, HEAP32[i8 >> 2] | 0) | 0) {
        HEAP32[i3 >> 2] = 3;
        i9 = 49;
        break L1;
       }
       i12 = HEAP32[i8 >> 2] | 0;
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 76 >> 2] & 1](i12) | 0) == 3) {
        i15 = HEAP32[i12 + 16 >> 2] | 0;
       } else {
        i15 = i12;
       }
       i12 = HEAP32[i11 >> 2] | 0;
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 76 >> 2] & 1](i12) | 0) == 3) {
        i16 = HEAP32[i12 + 16 >> 2] | 0;
       } else {
        i16 = i12;
       }
       if ((i15 | 0) != (i16 | 0)) {
        HEAP32[i3 >> 2] = 201;
        i9 = 49;
        break L1;
       }
       HEAP32[i3 >> 2] = 0;
       i12 = i2 + 12 | 0;
       i13 = i2 + 36 | 0;
       i17 = i2;
       while (1) {
        if ((HEAP32[i12 >> 2] & 2 | 0) == 0) {
         break;
        }
        i18 = HEAP32[i13 >> 2] | 0;
        if ((i18 | 0) == 0) {
         break;
        }
        __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i17, i18, i3) | 0;
        if ((HEAP32[i3 >> 2] | 0) != 0) {
         i9 = 49;
         break L1;
        }
       }
       __ZN7WebCore5Range18checkDeleteExtractERi(i1, i3);
       if ((HEAP32[i3 >> 2] | 0) != 0) {
        HEAP32[i5 >> 2] = 0;
        i9 = 49;
        break L1;
       }
       __ZN7WebCore5Range15processContentsENS0_10ActionTypeERi(i5, i1, 1, i3);
       i17 = HEAP32[i5 >> 2] | 0;
       i13 = HEAP32[i3 >> 2] | 0;
       HEAP32[i5 >> 2] = 0;
       do {
        if ((i13 | 0) == 0) {
         i12 = i6 | 0;
         HEAP32[i12 >> 2] = i2;
         i18 = i2 + 8 | 0;
         HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
         __ZN7WebCore5Range10insertNodeEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i6, i3);
         i18 = HEAP32[i12 >> 2] | 0;
         do {
          if ((i18 | 0) != 0) {
           i12 = i18 + 8 | 0;
           i19 = i12 | 0;
           i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
           HEAP32[i19 >> 2] = i20;
           if ((i20 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
          }
         } while (0);
         if ((HEAP32[i3 >> 2] | 0) != 0) {
          break;
         }
         i18 = i7 | 0;
         HEAP32[i18 >> 2] = i17;
         __ZN7WebCore4Node11appendChildEN3WTF10PassRefPtrIS0_EERi(i2, i7, i3) | 0;
         i12 = HEAP32[i18 >> 2] | 0;
         do {
          if ((i12 | 0) != 0) {
           i18 = i12 + 8 | 0;
           i20 = i18 | 0;
           i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
           HEAP32[i20 >> 2] = i19;
           if ((i19 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
          }
         } while (0);
         if ((HEAP32[i3 >> 2] | 0) != 0) {
          i9 = 49;
          break L1;
         }
         __ZN7WebCore5Range10selectNodeEPNS_4NodeERi(i1, i2, i3);
         i9 = 49;
         break L1;
        }
       } while (0);
       if ((i17 | 0) == 0) {
        i9 = 49;
        break L1;
       }
       i13 = i17 + 8 | 0;
       i12 = i13 | 0;
       i18 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       HEAP32[i12 >> 2] = i18;
       if ((i18 | 0) >= 1) {
        i9 = 49;
        break L1;
       }
       if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
        i9 = 49;
        break L1;
       }
       __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
       i9 = 49;
       break L1;
      }
     } while (0);
     HEAP32[i3 >> 2] = 3;
     i9 = 49;
     break L1;
    }
   } while (0);
   HEAP32[i3 >> 2] = 7;
   i9 = 49;
  }
 } while (0);
 do {
  if ((i9 | 0) == 49) {
   if ((i2 | 0) != 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i9 = i2 + 8 | 0;
 i2 = i9 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore5Range9textRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEEbPNS0_20RangeInFixedPositionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = HEAP32[i1 + 8 >> 2] | 0;
 i12 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i11 | 0) == 0 | (i12 | 0) == 0) {
  if ((i4 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  HEAP32[i4 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i13 = __ZNK7WebCore5Range12pastLastNodeEv(i1) | 0;
 i14 = __ZNK7WebCore5Range9firstNodeEv(i1) | 0;
 L8 : do {
  if ((i14 | 0) == (i13 | 0)) {
   i15 = 0;
   i16 = 1;
  } else {
   i17 = i1 + 12 | 0;
   i18 = i1 + 16 | 0;
   i19 = i1 + 24 | 0;
   i20 = i1 + 28 | 0;
   i21 = i10 | 0;
   i22 = i10 + 8 | 0;
   i23 = i2 + 8 | 0;
   i24 = i2 + 4 | 0;
   i25 = i2 | 0;
   i26 = i10 + 4 | 0;
   i27 = i9 | 0;
   i28 = i9 + 4 | 0;
   i29 = i8 | 0;
   i30 = i8 + 4 | 0;
   i31 = i7 | 0;
   i32 = i7 + 4 | 0;
   i33 = i14;
   i34 = 0;
   i35 = 1;
   L10 : while (1) {
    i36 = i33 + 12 | 0;
    i37 = i33 + 32 | 0;
    if ((HEAP32[i36 >> 2] & 2048 | 0) == 0) {
     i38 = i37 | 0;
    } else {
     i38 = HEAP32[i37 >> 2] | 0;
    }
    i37 = HEAP32[i38 >> 2] | 0;
    L16 : do {
     if ((i37 | 0) == 0) {
      i39 = i35;
      i40 = i34;
     } else {
      HEAP8[i6] = 0;
      i41 = i37 + 20 | 0;
      i42 = HEAP32[i41 >> 2] | 0;
      do {
       if ((i42 & 4096 | 0) == 0) {
        i43 = i42;
        i44 = 14;
       } else {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 620 >> 2] & 1](i37) | 0) {
         i43 = HEAP32[i41 >> 2] | 0;
         i44 = 14;
         break;
        } else {
         i45 = HEAP32[(HEAP32[i37 >> 2] | 0) + 472 >> 2] | 0;
         HEAPF32[i27 >> 2] = +0;
         HEAPF32[i28 >> 2] = +0;
         __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i8, i37, i9, 0);
         i46 = ~~+Math_floor(+HEAPF32[i29 >> 2]);
         i47 = ~~+Math_floor(+HEAPF32[i30 >> 2]);
         HEAP32[i31 >> 2] = i46;
         HEAP32[i32 >> 2] = i47;
         FUNCTION_TABLE_viii[i45 & 1](i37, i2, i7);
         break;
        }
       }
      } while (0);
      do {
       if ((i44 | 0) == 14) {
        i44 = 0;
        if ((i43 & 768 | 0) != 256) {
         i39 = i35;
         i40 = i34;
         break L16;
        }
        do {
         if ((i33 | 0) == (i11 | 0)) {
          i41 = HEAP32[i17 >> 2] | 0;
          if ((i41 | 0) > -1) {
           i48 = i41;
           break;
          }
          i41 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i18 >> 2] | 0) | 0) + 1 | 0;
          HEAP32[i17 >> 2] = i41;
          i48 = i41;
         } else {
          i48 = 0;
         }
        } while (0);
        do {
         if ((i33 | 0) == (i12 | 0)) {
          i41 = HEAP32[i19 >> 2] | 0;
          if ((i41 | 0) > -1) {
           i49 = i41;
           break;
          }
          i41 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i20 >> 2] | 0) | 0) + 1 | 0;
          HEAP32[i19 >> 2] = i41;
          i49 = i41;
         } else {
          i49 = 2147483647;
         }
        } while (0);
        __ZNK7WebCore10RenderText21absoluteRectsForRangeEjjbPb(i10, i37, i48, i49, i3, i6);
        i41 = HEAP32[i21 >> 2] | 0;
        i42 = HEAP32[i22 >> 2] | 0;
        i45 = HEAP32[i23 >> 2] | 0;
        i47 = i45 + i42 | 0;
        if (i47 >>> 0 > (HEAP32[i24 >> 2] | 0) >>> 0) {
         __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i47);
         i50 = HEAP32[i23 >> 2] | 0;
        } else {
         i50 = i45;
        }
        if (i47 >>> 0 < i50 >>> 0) {
         break L10;
        }
        i45 = HEAP32[i25 >> 2] | 0;
        if ((i42 | 0) != 0) {
         i46 = 0;
         while (1) {
          i51 = i45 + (i46 + i50 << 4) | 0;
          i52 = i41 + (i46 << 4) | 0;
          HEAP32[i51 >> 2] = HEAP32[i52 >> 2];
          HEAP32[i51 + 4 >> 2] = HEAP32[i52 + 4 >> 2];
          HEAP32[i51 + 8 >> 2] = HEAP32[i52 + 8 >> 2];
          HEAP32[i51 + 12 >> 2] = HEAP32[i52 + 12 >> 2];
          i46 = i46 + 1 | 0;
          if (i46 >>> 0 >= i42 >>> 0) {
           break;
          }
         }
        }
        HEAP32[i23 >> 2] = i47;
        if ((HEAP32[i22 >> 2] | 0) != 0) {
         HEAP32[i22 >> 2] = 0;
        }
        i42 = HEAP32[i21 >> 2] | 0;
        if ((i42 | 0) == 0) {
         break;
        }
        HEAP32[i21 >> 2] = 0;
        HEAP32[i26 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i42);
       }
      } while (0);
      i42 = HEAP8[i6] & 1;
      i39 = (i42 & (i35 & 1) | 0) != 0;
      i40 = (i42 | i34 & 1 | 0) != 0;
     }
    } while (0);
    if ((HEAP32[i36 >> 2] & 2 | 0) == 0) {
     i44 = 35;
    } else {
     i37 = HEAP32[i33 + 36 >> 2] | 0;
     if ((i37 | 0) == 0) {
      i44 = 35;
     } else {
      i53 = i37;
     }
    }
    do {
     if ((i44 | 0) == 35) {
      i44 = 0;
      i37 = HEAP32[i33 + 28 >> 2] | 0;
      if ((i37 | 0) != 0) {
       i53 = i37;
       break;
      }
      i53 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i33) | 0;
     }
    } while (0);
    if ((i53 | 0) == (i13 | 0)) {
     i15 = i40;
     i16 = i39;
     break L8;
    } else {
     i33 = i53;
     i34 = i40;
     i35 = i39;
    }
   }
   _WTFCrash();
  }
 } while (0);
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i4 >> 2] = i16 ? 2 : i15 & 1;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore5Range21compareBoundaryPointsENS0_10CompareHowEPKS0_Ri(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i1 + 8 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  HEAP32[i4 >> 2] = 11;
  i6 = 0;
  return i6 | 0;
 }
 if ((i3 | 0) == 0) {
  HEAP32[i4 >> 2] = 8;
  i6 = 0;
  return i6 | 0;
 }
 HEAP32[i4 >> 2] = 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i4 >> 2] = 11;
  i6 = 0;
  return i6 | 0;
 }
 i5 = HEAP32[i1 + 20 >> 2] | 0;
 L13 : do {
  if ((i5 | 0) == 0) {
   i8 = i7;
   while (1) {
    i9 = HEAP32[i8 + 16 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i10 = 0;
     break;
    } else {
     i8 = i9 | 0;
    }
   }
  } else {
   i8 = i7;
   while (1) {
    i9 = i5;
    while (1) {
     if ((i8 | 0) == (i9 | 0)) {
      i10 = i8;
      break L13;
     }
     i11 = HEAP32[i9 + 16 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     } else {
      i9 = i11 | 0;
     }
    }
    i9 = HEAP32[i8 + 16 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i10 = 0;
     break;
    } else {
     i8 = i9 | 0;
    }
   }
  }
 } while (0);
 i8 = i3 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i4 >> 2] = 11;
  i6 = 0;
  return i6 | 0;
 }
 i11 = i3 + 20 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 L27 : do {
  if ((i12 | 0) == 0) {
   i13 = i9;
   while (1) {
    i14 = HEAP32[i13 + 16 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i15 = 0;
     break;
    } else {
     i13 = i14 | 0;
    }
   }
  } else {
   i13 = i9;
   while (1) {
    i14 = i12;
    while (1) {
     if ((i13 | 0) == (i14 | 0)) {
      i15 = i13;
      break L27;
     }
     i16 = HEAP32[i14 + 16 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     } else {
      i14 = i16 | 0;
     }
    }
    i14 = HEAP32[i13 + 16 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i15 = 0;
     break;
    } else {
     i13 = i14 | 0;
    }
   }
  }
 } while (0);
 if ((HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0) == (HEAP32[(HEAP32[i15 + 20 >> 2] | 0) + 8 >> 2] | 0)) {
  i17 = i10;
 } else {
  HEAP32[i4 >> 2] = 4;
  i6 = 0;
  return i6 | 0;
 }
 while (1) {
  i10 = HEAP32[i17 + 16 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i18 = i15;
   break;
  } else {
   i17 = i10 | 0;
  }
 }
 while (1) {
  i15 = HEAP32[i18 + 16 >> 2] | 0;
  if ((i15 | 0) == 0) {
   break;
  } else {
   i18 = i15 | 0;
  }
 }
 if ((i17 | 0) != (i18 | 0)) {
  HEAP32[i4 >> 2] = 4;
  i6 = 0;
  return i6 | 0;
 }
 if ((i2 | 0) == 3) {
  i18 = i1 + 12 | 0;
  i17 = HEAP32[i18 >> 2] | 0;
  if ((i17 | 0) > -1) {
   i19 = i17;
   i20 = i12;
  } else {
   i17 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i18 >> 2] = i17;
   i19 = i17;
   i20 = HEAP32[i11 >> 2] | 0;
  }
  i17 = i3 + 24 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  if ((i18 | 0) > -1) {
   i21 = i18;
  } else {
   i18 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i3 + 28 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i17 >> 2] = i18;
   i21 = i18;
  }
  i6 = __ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i7, i19, i20, i21, i4) | 0;
  return i6 | 0;
 } else if ((i2 | 0) == 0) {
  i21 = i1 + 12 | 0;
  i20 = HEAP32[i21 >> 2] | 0;
  if ((i20 | 0) > -1) {
   i22 = i20;
   i23 = i9;
  } else {
   i20 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i21 >> 2] = i20;
   i22 = i20;
   i23 = HEAP32[i8 >> 2] | 0;
  }
  i20 = i3 + 12 | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  if ((i21 | 0) > -1) {
   i24 = i21;
  } else {
   i21 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i3 + 16 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i20 >> 2] = i21;
   i24 = i21;
  }
  i6 = __ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i7, i22, i23, i24, i4) | 0;
  return i6 | 0;
 } else if ((i2 | 0) == 1) {
  i24 = i1 + 24 | 0;
  i23 = HEAP32[i24 >> 2] | 0;
  if ((i23 | 0) > -1) {
   i25 = i23;
   i26 = i9;
  } else {
   i9 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i24 >> 2] = i9;
   i25 = i9;
   i26 = HEAP32[i8 >> 2] | 0;
  }
  i8 = i3 + 12 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i9 | 0) > -1) {
   i27 = i9;
  } else {
   i9 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i3 + 16 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i8 >> 2] = i9;
   i27 = i9;
  }
  i6 = __ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i5, i25, i26, i27, i4) | 0;
  return i6 | 0;
 } else if ((i2 | 0) == 2) {
  i2 = i1 + 24 | 0;
  i27 = HEAP32[i2 >> 2] | 0;
  if ((i27 | 0) > -1) {
   i28 = i27;
   i29 = i12;
  } else {
   i12 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i2 >> 2] = i12;
   i28 = i12;
   i29 = HEAP32[i11 >> 2] | 0;
  }
  i11 = i3 + 24 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  if ((i12 | 0) > -1) {
   i30 = i12;
  } else {
   i12 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i3 + 28 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i11 >> 2] = i12;
   i30 = i12;
  }
  i6 = __ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i5, i28, i29, i30, i4) | 0;
  return i6 | 0;
 } else {
  HEAP32[i4 >> 2] = 12;
  i6 = 0;
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore5Range9textQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEbPNS0_20RangeInFixedPositionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i8 | 0) == 0 | (i9 | 0) == 0) {
  if ((i4 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  HEAP32[i4 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i10 = __ZNK7WebCore5Range12pastLastNodeEv(i1) | 0;
 i11 = __ZNK7WebCore5Range9firstNodeEv(i1) | 0;
 L8 : do {
  if ((i11 | 0) == (i10 | 0)) {
   i12 = 0;
   i13 = 1;
  } else {
   i14 = i1 + 12 | 0;
   i15 = i1 + 16 | 0;
   i16 = i1 + 24 | 0;
   i17 = i1 + 28 | 0;
   i18 = i7 | 0;
   i19 = i7 + 8 | 0;
   i20 = i2 + 8 | 0;
   i21 = i2 + 4 | 0;
   i22 = i2 | 0;
   i23 = i7 + 4 | 0;
   i24 = i11;
   i25 = 0;
   i26 = 1;
   L10 : while (1) {
    i27 = i24 + 12 | 0;
    i28 = i24 + 32 | 0;
    if ((HEAP32[i27 >> 2] & 2048 | 0) == 0) {
     i29 = i28 | 0;
    } else {
     i29 = HEAP32[i28 >> 2] | 0;
    }
    i28 = HEAP32[i29 >> 2] | 0;
    L16 : do {
     if ((i28 | 0) == 0) {
      i30 = i26;
      i31 = i25;
     } else {
      HEAP8[i6] = 0;
      i32 = i28 + 20 | 0;
      i33 = HEAP32[i32 >> 2] | 0;
      do {
       if ((i33 & 4096 | 0) == 0) {
        i34 = i33;
        i35 = 14;
       } else {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 620 >> 2] & 1](i28) | 0) {
         i34 = HEAP32[i32 >> 2] | 0;
         i35 = 14;
         break;
        } else {
         FUNCTION_TABLE_viii[HEAP32[(HEAP32[i28 >> 2] | 0) + 476 >> 2] & 1](i28, i2, i6);
         break;
        }
       }
      } while (0);
      do {
       if ((i35 | 0) == 14) {
        i35 = 0;
        if ((i34 & 768 | 0) != 256) {
         i30 = i26;
         i31 = i25;
         break L16;
        }
        do {
         if ((i24 | 0) == (i8 | 0)) {
          i32 = HEAP32[i14 >> 2] | 0;
          if ((i32 | 0) > -1) {
           i36 = i32;
           break;
          }
          i32 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i15 >> 2] | 0) | 0) + 1 | 0;
          HEAP32[i14 >> 2] = i32;
          i36 = i32;
         } else {
          i36 = 0;
         }
        } while (0);
        do {
         if ((i24 | 0) == (i9 | 0)) {
          i32 = HEAP32[i16 >> 2] | 0;
          if ((i32 | 0) > -1) {
           i37 = i32;
           break;
          }
          i32 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i17 >> 2] | 0) | 0) + 1 | 0;
          HEAP32[i16 >> 2] = i32;
          i37 = i32;
         } else {
          i37 = 2147483647;
         }
        } while (0);
        __ZNK7WebCore10RenderText21absoluteQuadsForRangeEjjbPb(i7, i28, i36, i37, i3, i6);
        i32 = HEAP32[i18 >> 2] | 0;
        i33 = HEAP32[i19 >> 2] | 0;
        i38 = HEAP32[i20 >> 2] | 0;
        i39 = i38 + i33 | 0;
        if (i39 >>> 0 > (HEAP32[i21 >> 2] | 0) >>> 0) {
         __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i39);
         i40 = HEAP32[i20 >> 2] | 0;
        } else {
         i40 = i38;
        }
        if (i39 >>> 0 < i40 >>> 0) {
         break L10;
        }
        i38 = HEAP32[i22 >> 2] | 0;
        if ((i33 | 0) != 0) {
         i41 = 0;
         while (1) {
          _memcpy(i38 + (i41 + i40 << 5) | 0, i32 + (i41 << 5) | 0, 32) | 0;
          i41 = i41 + 1 | 0;
          if (i41 >>> 0 >= i33 >>> 0) {
           break;
          }
         }
        }
        HEAP32[i20 >> 2] = i39;
        if ((HEAP32[i19 >> 2] | 0) != 0) {
         HEAP32[i19 >> 2] = 0;
        }
        i33 = HEAP32[i18 >> 2] | 0;
        if ((i33 | 0) == 0) {
         break;
        }
        HEAP32[i18 >> 2] = 0;
        HEAP32[i23 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i33);
       }
      } while (0);
      i33 = HEAP8[i6] & 1;
      i30 = (i33 & (i26 & 1) | 0) != 0;
      i31 = (i33 | i25 & 1 | 0) != 0;
     }
    } while (0);
    if ((HEAP32[i27 >> 2] & 2 | 0) == 0) {
     i35 = 35;
    } else {
     i28 = HEAP32[i24 + 36 >> 2] | 0;
     if ((i28 | 0) == 0) {
      i35 = 35;
     } else {
      i42 = i28;
     }
    }
    do {
     if ((i35 | 0) == 35) {
      i35 = 0;
      i28 = HEAP32[i24 + 28 >> 2] | 0;
      if ((i28 | 0) != 0) {
       i42 = i28;
       break;
      }
      i42 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i24) | 0;
     }
    } while (0);
    if ((i42 | 0) == (i10 | 0)) {
     i12 = i31;
     i13 = i30;
     break L8;
    } else {
     i24 = i42;
     i25 = i31;
     i26 = i30;
    }
   }
   _WTFCrash();
  }
 } while (0);
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i4 >> 2] = i13 ? 2 : i12 & 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5Range17nodeWillBeRemovedEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == (i2 | 0)) {
   i5 = HEAP32[i2 + 24 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i6 = i2;
   } else {
    i7 = i5 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    i6 = HEAP32[i3 >> 2] | 0;
   }
   HEAP32[i3 >> 2] = i5;
   if ((i6 | 0) == 0) {
    i8 = i5;
   } else {
    i5 = i6 + 8 | 0;
    i7 = i5 - 8 | 0;
    i9 = i5 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i10;
    do {
     if ((i10 | 0) < 1) {
      if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i7);
     }
    } while (0);
    i8 = HEAP32[i3 >> 2] | 0;
   }
   i7 = i1 + 12 | 0;
   if ((i8 | 0) == 0) {
    HEAP32[i7 >> 2] = 0;
    break;
   }
   i5 = HEAP32[i7 >> 2] | 0;
   if ((i5 | 0) <= 0) {
    break;
   }
   HEAP32[i7 >> 2] = i5 - 1;
  } else {
   i5 = i1 + 8 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i11 = i7;
   }
   while (1) {
    if ((i11 | 0) == (i2 | 0)) {
     break;
    }
    i7 = HEAP32[i11 + 16 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L1;
    } else {
     i11 = i7 | 0;
    }
   }
   i7 = HEAP32[i2 + 24 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i12 = i4;
   } else {
    i10 = i7 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    i12 = HEAP32[i3 >> 2] | 0;
   }
   HEAP32[i3 >> 2] = i7;
   do {
    if ((i12 | 0) != 0) {
     i7 = i12 + 8 | 0;
     i10 = i7 | 0;
     i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i7 = HEAP32[i2 + 16 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i9 = i7 + 8 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   i9 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i7;
   do {
    if ((i9 | 0) != 0) {
     i7 = i9 + 8 | 0;
     i10 = i7 | 0;
     i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i13;
     if ((i13 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 12 >> 2] = ((HEAP32[i3 >> 2] | 0) != 0) << 31 >> 31;
  }
 } while (0);
 i3 = i1 + 28 | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 if ((i12 | 0) == (i2 | 0)) {
  i4 = HEAP32[i2 + 24 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i14 = i2;
  } else {
   i11 = i4 + 8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   i14 = HEAP32[i3 >> 2] | 0;
  }
  HEAP32[i3 >> 2] = i4;
  if ((i14 | 0) == 0) {
   i15 = i4;
  } else {
   i4 = i14 + 8 | 0;
   i14 = i4 - 8 | 0;
   i11 = i4 | 0;
   i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i8;
   do {
    if ((i8 | 0) < 1) {
     if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14);
    }
   } while (0);
   i15 = HEAP32[i3 >> 2] | 0;
  }
  i14 = i1 + 24 | 0;
  if ((i15 | 0) == 0) {
   HEAP32[i14 >> 2] = 0;
   return;
  }
  i15 = HEAP32[i14 >> 2] | 0;
  if ((i15 | 0) <= 0) {
   return;
  }
  HEAP32[i14 >> 2] = i15 - 1;
  return;
 }
 i15 = i1 + 20 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 if ((i14 | 0) == 0) {
  return;
 } else {
  i16 = i14;
 }
 while (1) {
  if ((i16 | 0) == (i2 | 0)) {
   break;
  }
  i14 = HEAP32[i16 + 16 >> 2] | 0;
  if ((i14 | 0) == 0) {
   i17 = 60;
   break;
  } else {
   i16 = i14 | 0;
  }
 }
 if ((i17 | 0) == 60) {
  return;
 }
 i17 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i18 = i12;
 } else {
  i12 = i17 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  i18 = HEAP32[i3 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i17;
 do {
  if ((i18 | 0) != 0) {
   i17 = i18 + 8 | 0;
   i12 = i17 | 0;
   i16 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 i18 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i18 | 0) != 0) {
  i2 = i18 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i18;
 do {
  if ((i2 | 0) != 0) {
   i18 = i2 + 8 | 0;
   i15 = i18 | 0;
   i17 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 24 >> 2] = ((HEAP32[i3 >> 2] | 0) != 0) << 31 >> 31;
 return;
}
function __ZNK7WebCore5Range8toStringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i2 + 8 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = 11;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 i3 = i5 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP8[i5 + 12 | 0] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 HEAP32[i5 + 20 >> 2] = 0;
 i8 = __ZNK7WebCore5Range12pastLastNodeEv(i2) | 0;
 i9 = __ZNK7WebCore5Range9firstNodeEv(i2) | 0;
 if ((i9 | 0) != (i8 | 0)) {
  i10 = i2 + 12 | 0;
  i11 = i2 + 16 | 0;
  i12 = i2 + 20 | 0;
  i13 = i2 + 24 | 0;
  i14 = i2 + 28 | 0;
  i2 = i9;
  while (1) {
   i9 = i2;
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 76 >> 2] & 1](i2) | 0) == 3) {
    i15 = 7;
   } else {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 76 >> 2] & 1](i2) | 0) == 4) {
     i15 = 7;
    }
   }
   do {
    if ((i15 | 0) == 7) {
     i15 = 0;
     i9 = HEAP32[i2 + 36 >> 2] | 0;
     i16 = (i9 | 0) == 0;
     if (i16) {
      i17 = 0;
     } else {
      i18 = i9 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
      i17 = HEAP32[i9 + 4 >> 2] | 0;
     }
     if ((i2 | 0) == (HEAP32[i6 >> 2] | 0)) {
      i18 = HEAP32[i10 >> 2] | 0;
      if ((i18 | 0) > -1) {
       i19 = i18;
      } else {
       i18 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i11 >> 2] | 0) | 0) + 1 | 0;
       HEAP32[i10 >> 2] = i18;
       i19 = i18;
      }
      i18 = (i19 | 0) > 0 ? i19 : 0;
      i20 = (i17 | 0) < (i18 | 0) ? i17 : i18;
     } else {
      i20 = 0;
     }
     if ((i2 | 0) == (HEAP32[i12 >> 2] | 0)) {
      i18 = HEAP32[i13 >> 2] | 0;
      if ((i18 | 0) > -1) {
       i21 = i18;
      } else {
       i18 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i14 >> 2] | 0) | 0) + 1 | 0;
       HEAP32[i13 >> 2] = i18;
       i21 = i18;
      }
      i18 = (i20 | 0) < (i21 | 0) ? i21 : i20;
      i22 = (i17 | 0) < (i18 | 0) ? i17 : i18;
     } else {
      i22 = i17;
     }
     i18 = i22 - i20 | 0;
     if (i16) {
      break;
     }
     i16 = HEAP32[i9 + 4 >> 2] | 0;
     do {
      if (!((i16 | 0) == 0 | i22 >>> 0 > i16 >>> 0)) {
       if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
        __ZN3WTF13StringBuilder6appendEPKtj(i5, (HEAP32[i9 + 8 >> 2] | 0) + (i20 << 1) | 0, i18);
        break;
       } else {
        __ZN3WTF13StringBuilder6appendEPKhj(i5, (HEAP32[i9 + 8 >> 2] | 0) + i20 | 0, i18);
        break;
       }
      }
     } while (0);
     i18 = i9 | 0;
     i16 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i18 >> 2] = i16;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
    i15 = 28;
   } else {
    i16 = HEAP32[i2 + 36 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i15 = 28;
    } else {
     i23 = i16;
    }
   }
   do {
    if ((i15 | 0) == 28) {
     i15 = 0;
     i16 = HEAP32[i2 + 28 >> 2] | 0;
     if ((i16 | 0) != 0) {
      i23 = i16;
      break;
     }
     i23 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i2) | 0;
    }
   } while (0);
   if ((i23 | 0) == (i8 | 0)) {
    break;
   } else {
    i2 = i23;
   }
  }
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i23 = HEAP32[i3 >> 2] | 0;
 if ((i23 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i3 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i24 = i5;
   i15 = 33;
  }
 } else {
  HEAP32[i1 >> 2] = i23;
  i24 = i23;
  i15 = 33;
 }
 if ((i15 | 0) == 33) {
  i15 = i24 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 i15 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i7 = i15 | 0;
   i24 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i7 >> 2] = i24;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i3 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i15 | 0;
 i24 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i24 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i24;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 if ((i1 | 0) == 0) {
  i6 = -1;
  return i6 | 0;
 }
 if ((i3 | 0) == 0) {
  i6 = 1;
  return i6 | 0;
 }
 if ((i1 | 0) == (i3 | 0)) {
  if ((i2 | 0) == (i4 | 0)) {
   i6 = 0;
   return i6 | 0;
  }
  i6 = (i2 | 0) < (i4 | 0) ? -1 : 1;
  return i6 | 0;
 } else {
  i7 = i3;
 }
 while (1) {
  if ((i7 | 0) == 0) {
   i8 = i1;
   break;
  }
  i9 = HEAP32[i7 + 16 >> 2] | 0;
  if ((i9 | 0) == (i1 | 0)) {
   i10 = 8;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i10 | 0) == 8) {
  if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
   i11 = 0;
  } else {
   i11 = HEAP32[i1 + 36 >> 2] | 0;
  }
  i9 = (i2 | 0) > 0;
  if ((i11 | 0) != (i7 | 0) & i9) {
   i12 = 0;
   i13 = i11;
   while (1) {
    i11 = i12 + 1 | 0;
    i14 = HEAP32[i13 + 28 >> 2] | 0;
    i15 = (i11 | 0) < (i2 | 0);
    if ((i14 | 0) != (i7 | 0) & i15) {
     i12 = i11;
     i13 = i14;
    } else {
     i16 = i15;
     break;
    }
   }
  } else {
   i16 = i9;
  }
  i6 = i16 ? 1 : -1;
  return i6 | 0;
 }
 while (1) {
  if ((i8 | 0) == 0) {
   i17 = i1;
   break;
  }
  i16 = HEAP32[i8 + 16 >> 2] | 0;
  if ((i16 | 0) == (i3 | 0)) {
   i10 = 15;
   break;
  } else {
   i8 = i16;
  }
 }
 if ((i10 | 0) == 15) {
  if ((HEAP32[i3 + 12 >> 2] & 2 | 0) == 0) {
   i18 = 0;
  } else {
   i18 = HEAP32[i3 + 36 >> 2] | 0;
  }
  i16 = (i4 | 0) > 0;
  if (i16 & (i18 | 0) != (i8 | 0)) {
   i9 = 0;
   i13 = i18;
   while (1) {
    i18 = i9 + 1 | 0;
    i12 = HEAP32[i13 + 28 >> 2] | 0;
    i7 = (i18 | 0) < (i4 | 0);
    if (i7 & (i12 | 0) != (i8 | 0)) {
     i9 = i18;
     i13 = i12;
    } else {
     i19 = i7;
     break;
    }
   }
  } else {
   i19 = i16;
  }
  i6 = i19 ? -1 : 1;
  return i6 | 0;
 }
 L39 : while (1) {
  i19 = i3;
  while (1) {
   if ((i17 | 0) == (i19 | 0)) {
    i10 = 24;
    break L39;
   }
   i16 = HEAP32[i19 + 16 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   } else {
    i19 = i16 | 0;
   }
  }
  i19 = HEAP32[i17 + 16 >> 2] | 0;
  if ((i19 | 0) == 0) {
   break;
  } else {
   i17 = i19 | 0;
  }
 }
 do {
  if ((i10 | 0) == 24) {
   if ((i17 | 0) == 0) {
    break;
   } else {
    i20 = i1;
   }
   while (1) {
    if ((i20 | 0) == 0) {
     i21 = i17;
     break;
    }
    i19 = HEAP32[i20 + 16 >> 2] | 0;
    if ((i19 | 0) == (i17 | 0)) {
     i21 = i20;
     break;
    } else {
     i20 = i19;
    }
   }
   i19 = i3;
   while (1) {
    if ((i19 | 0) == 0) {
     i22 = i17;
     break;
    }
    i16 = HEAP32[i19 + 16 >> 2] | 0;
    if ((i16 | 0) == (i17 | 0)) {
     i22 = i19;
     break;
    } else {
     i19 = i16;
    }
   }
   if ((i21 | 0) == (i22 | 0)) {
    i6 = 0;
    return i6 | 0;
   }
   if ((HEAP32[i17 + 12 >> 2] & 2 | 0) == 0) {
    i6 = 0;
    return i6 | 0;
   }
   i19 = HEAP32[i17 + 36 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i6 = 0;
    return i6 | 0;
   } else {
    i23 = i19;
   }
   while (1) {
    if ((i23 | 0) == (i21 | 0)) {
     i6 = -1;
     i10 = 47;
     break;
    }
    if ((i23 | 0) == (i22 | 0)) {
     i6 = 1;
     i10 = 42;
     break;
    }
    i19 = HEAP32[i23 + 28 >> 2] | 0;
    if ((i19 | 0) == 0) {
     i6 = 0;
     i10 = 45;
     break;
    } else {
     i23 = i19;
    }
   }
   if ((i10 | 0) == 42) {
    return i6 | 0;
   } else if ((i10 | 0) == 45) {
    return i6 | 0;
   } else if ((i10 | 0) == 47) {
    return i6 | 0;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = 4;
 i6 = 0;
 return i6 | 0;
}
function __ZN7WebCore5Range13textNodeSplitEPNS_4TextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = i1 + 8 | 0;
 i4 = i2 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == (i4 | 0)) {
   i5 = i1 + 12 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) > -1) {
    i7 = i6;
   } else {
    i6 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i5 >> 2] = i6;
    i7 = i6;
   }
   i6 = i2 + 36 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i9 = 0;
   } else {
    i9 = HEAP32[i8 + 4 >> 2] | 0;
   }
   if (i7 >>> 0 <= i9 >>> 0) {
    break;
   }
   i10 = HEAP32[i2 + 28 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = i8;
   } else {
    i8 = i10 + 8 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    i11 = HEAP32[i6 >> 2] | 0;
   }
   if ((i11 | 0) == 0) {
    i12 = 0;
   } else {
    i12 = HEAP32[i11 + 4 >> 2] | 0;
   }
   i6 = i7 - i12 | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i10;
   do {
    if ((i8 | 0) != 0) {
     i10 = i8 + 8 | 0;
     i13 = i10 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   HEAP32[i5 >> 2] = i6;
   i8 = i1 + 16 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i8 = i10 + 8 | 0;
   i10 = i8 | 0;
   i14 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 20 | 0;
 if ((HEAP32[i3 >> 2] | 0) != (i4 | 0)) {
  return;
 }
 i4 = i1 + 24 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 if ((i12 | 0) > -1) {
  i15 = i12;
 } else {
  i12 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i4 >> 2] = i12;
  i15 = i12;
 }
 i12 = i2 + 36 | 0;
 i7 = HEAP32[i12 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i16 = 0;
 } else {
  i16 = HEAP32[i7 + 4 >> 2] | 0;
 }
 if (i15 >>> 0 <= i16 >>> 0) {
  return;
 }
 i16 = HEAP32[i2 + 28 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i17 = i7;
 } else {
  i7 = i16 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i17 = HEAP32[i12 >> 2] | 0;
 }
 if ((i17 | 0) == 0) {
  i18 = 0;
 } else {
  i18 = HEAP32[i17 + 4 >> 2] | 0;
 }
 i17 = i15 - i18 | 0;
 i18 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i16;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 + 8 | 0;
   i3 = i16 | 0;
   i15 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 HEAP32[i4 >> 2] = i17;
 i17 = i1 + 28 | 0;
 i1 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i17 = i1 + 8 | 0;
 i1 = i17 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
   if ((i13 | 0) == 10) {
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
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  HEAP32[i4 >> 2] = 11;
  STACKTOP = i5;
  return;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i4 >> 2] = 8;
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((i9 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
  i10 = 0;
 } else {
  __ZN7WebCore5Range11setDocumentERNS_8DocumentE(i1, i9);
  i10 = 1;
 }
 HEAP32[i4 >> 2] = 0;
 i9 = __ZNK7WebCore5Range16checkNodeWOffsetEPNS_4NodeEiRi(0, HEAP32[i8 >> 2] | 0, i3, i4) | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 + 8 | 0;
   i11 = i2 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i8 = i1 + 12 | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i9 | 0) != 0) {
  i3 = i9 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 16 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i9;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 + 8 | 0;
   i12 = i9 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 do {
  if (!i10) {
   i2 = i1 + 20 | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   i11 = i9;
   while (1) {
    i12 = HEAP32[i11 + 16 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i11 = i12 | 0;
    }
   }
   i12 = HEAP32[i7 >> 2] | 0;
   i13 = i12;
   while (1) {
    i14 = HEAP32[i13 + 16 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break;
    } else {
     i13 = i14 | 0;
    }
   }
   if ((i13 | 0) != (i11 | 0)) {
    break;
   }
   i14 = i6 | 0;
   HEAP32[i14 >> 2] = 0;
   i15 = HEAP32[i8 >> 2] | 0;
   if ((i15 | 0) > -1) {
    i16 = i15;
    i17 = i9;
   } else {
    i15 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i3 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i8 >> 2] = i15;
    i16 = i15;
    i17 = HEAP32[i2 >> 2] | 0;
   }
   i15 = i1 + 24 | 0;
   i18 = HEAP32[i15 >> 2] | 0;
   if ((i18 | 0) > -1) {
    i19 = i18;
   } else {
    i18 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i15 >> 2] = i18;
    i19 = i18;
   }
   if ((__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i12, i16, i17, i19, i14) | 0) << 16 >> 16 > 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN7WebCore5Range8collapseEbRi(i1, 1, i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  HEAP32[i4 >> 2] = 11;
  STACKTOP = i5;
  return;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i4 >> 2] = 8;
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((i9 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
  i10 = 0;
 } else {
  __ZN7WebCore5Range11setDocumentERNS_8DocumentE(i1, i9);
  i10 = 1;
 }
 HEAP32[i4 >> 2] = 0;
 i9 = __ZNK7WebCore5Range16checkNodeWOffsetEPNS_4NodeEiRi(0, HEAP32[i8 >> 2] | 0, i3, i4) | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i1 + 20 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i2;
 do {
  if ((i11 | 0) != 0) {
   i2 = i11 + 8 | 0;
   i12 = i2 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i11 = i1 + 24 | 0;
 HEAP32[i11 >> 2] = i3;
 if ((i9 | 0) != 0) {
  i3 = i9 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 28 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i9;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 + 8 | 0;
   i13 = i9 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 do {
  if (!i10) {
   i2 = HEAP32[i8 >> 2] | 0;
   i9 = i2;
   while (1) {
    i12 = HEAP32[i9 + 16 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i9 = i12 | 0;
    }
   }
   i12 = HEAP32[i7 >> 2] | 0;
   i13 = i12;
   while (1) {
    i14 = HEAP32[i13 + 16 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break;
    } else {
     i13 = i14 | 0;
    }
   }
   if ((i13 | 0) != (i9 | 0)) {
    break;
   }
   i14 = i6 | 0;
   HEAP32[i14 >> 2] = 0;
   i15 = i1 + 12 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) > -1) {
    i17 = i16;
    i18 = i2;
   } else {
    i16 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i15 >> 2] = i16;
    i17 = i16;
    i18 = HEAP32[i8 >> 2] | 0;
   }
   i16 = HEAP32[i11 >> 2] | 0;
   if ((i16 | 0) > -1) {
    i19 = i16;
   } else {
    i16 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i3 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i11 >> 2] = i16;
    i19 = i16;
   }
   if ((__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i12, i17, i18, i19, i14) | 0) << 16 >> 16 > 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN7WebCore5Range8collapseEbRi(i1, 0, i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5Range18checkDeleteExtractERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  HEAP32[i2 >> 2] = 11;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 >> 2] = 11;
  return;
 }
 i5 = i1 + 20 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i4;
  while (1) {
   i8 = HEAP32[i7 + 16 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i7 = i8 | 0;
   }
  }
  return;
 } else {
  i9 = i4;
 }
 L13 : while (1) {
  i4 = i6;
  while (1) {
   if ((i9 | 0) == (i4 | 0)) {
    break L13;
   }
   i7 = HEAP32[i4 + 16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i4 = i7 | 0;
   }
  }
  i4 = HEAP32[i9 + 16 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i10 = 30;
   break;
  } else {
   i9 = i4 | 0;
  }
 }
 if ((i10 | 0) == 30) {
  return;
 }
 if ((i9 | 0) == 0) {
  return;
 }
 i9 = __ZNK7WebCore5Range12pastLastNodeEv(i1) | 0;
 i6 = __ZNK7WebCore5Range9firstNodeEv(i1) | 0;
 L25 : do {
  if ((i6 | 0) != (i9 | 0)) {
   i1 = i6;
   while (1) {
    i4 = i1;
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 1](i1) | 0) == 5) {
     i10 = 14;
     break;
    }
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 1](i1) | 0) == 10) {
     i10 = 16;
     break;
    }
    if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
     i10 = 20;
    } else {
     i4 = HEAP32[i1 + 36 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i10 = 20;
     } else {
      i11 = i4;
     }
    }
    do {
     if ((i10 | 0) == 20) {
      i10 = 0;
      i4 = HEAP32[i1 + 28 >> 2] | 0;
      if ((i4 | 0) != 0) {
       i11 = i4;
       break;
      }
      i11 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i1) | 0;
     }
    } while (0);
    if ((i11 | 0) == (i9 | 0)) {
     break L25;
    } else {
     i1 = i11;
    }
   }
   if ((i10 | 0) == 16) {
    HEAP32[i2 >> 2] = 3;
    return;
   } else if ((i10 | 0) == 14) {
    HEAP32[i2 >> 2] = 7;
    return;
   }
  }
 } while (0);
 i11 = HEAP32[i3 >> 2] | 0;
 L42 : do {
  if ((i11 | 0) == 0) {
   i10 = 25;
  } else {
   i3 = i11;
   while (1) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 1](i3) | 0) == 5) {
     break L42;
    }
    i9 = HEAP32[i3 + 16 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i10 = 25;
     break;
    } else {
     i3 = i9 | 0;
    }
   }
  }
 } while (0);
 L46 : do {
  if ((i10 | 0) == 25) {
   i11 = HEAP32[i5 >> 2] | 0;
   if ((i11 | 0) == 0) {
    return;
   } else {
    i12 = i11;
   }
   while (1) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 76 >> 2] & 1](i12) | 0) == 5) {
     break L46;
    }
    i11 = HEAP32[i12 + 16 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i12 = i11 | 0;
    }
   }
   return;
  }
 } while (0);
 HEAP32[i2 >> 2] = 7;
 return;
}
function __ZN7WebCoreL23boundaryTextNodesMergedERNS_18RangeBoundaryPointERNS_13NodeWithIndexEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == (i7 | 0)) {
  i8 = HEAP32[i5 + 24 >> 2] | 0;
  if ((i8 | 0) != 0) {
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  i9 = i1 + 4 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  if ((i10 | 0) > -1) {
   i11 = i10;
  } else {
   i10 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 8 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i9 >> 2] = i10;
   i11 = i10;
  }
  i10 = i11 + i3 | 0;
  i11 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = i8;
  do {
   if ((i11 | 0) != 0) {
    i8 = i11 + 8 | 0;
    i12 = i8 | 0;
    i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    HEAP32[i12 >> 2] = i13;
    if ((i13 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
   }
  } while (0);
  HEAP32[i9 >> 2] = i10;
  i10 = i1 + 8 | 0;
  i9 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  if ((i9 | 0) == 0) {
   return;
  }
  i10 = i9 + 8 | 0;
  i9 = i10 | 0;
  i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  HEAP32[i9 >> 2] = i11;
  if ((i11 | 0) >= 1) {
   return;
  }
  if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  return;
 }
 if ((i5 | 0) != (HEAP32[i7 + 16 >> 2] | 0)) {
  return;
 }
 i7 = i1 + 4 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) > -1) {
  i14 = i5;
 } else {
  i5 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 8 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i7 >> 2] = i5;
  i14 = i5;
 }
 i5 = i2 + 4 | 0;
 if ((HEAP8[i5] & 1) == 0) {
  i10 = __ZNK7WebCore4Node9nodeIndexEv(HEAP32[i6 >> 2] | 0) | 0;
  HEAP32[i2 + 8 >> 2] = i10;
  HEAP8[i5] = 1;
  i15 = i10;
 } else {
  i15 = HEAP32[i2 + 8 >> 2] | 0;
 }
 if ((i14 | 0) != (i15 | 0)) {
  return;
 }
 i15 = HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i6 = i15 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i15;
 do {
  if ((i6 | 0) != 0) {
   i15 = i6 + 8 | 0;
   i4 = i15 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 HEAP32[i7 >> 2] = i3;
 i3 = i1 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 8 | 0;
 i1 = i3 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 return;
}
function __ZN7WebCoreL33boundaryNodeChildrenWillBeRemovedERNS_18RangeBoundaryPointERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = i3;
 L4 : while (1) {
  if ((i5 | 0) == (i7 | 0)) {
   i8 = 4;
   break;
  }
  i9 = HEAP32[i6 >> 2] | 0;
  if ((i9 | 0) != 0) {
   i3 = i9;
   while (1) {
    if ((i3 | 0) == (i7 | 0)) {
     i8 = 16;
     break L4;
    }
    i10 = HEAP32[i3 + 16 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i3 = i10 | 0;
    }
   }
  }
  i3 = HEAP32[i7 + 28 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i8 = 38;
   break;
  } else {
   i7 = i3;
  }
 }
 if ((i8 | 0) == 16) {
  if ((i2 | 0) == 0) {
   i11 = i9;
  } else {
   i9 = i2 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i11 = HEAP32[i6 >> 2] | 0;
  }
  HEAP32[i6 >> 2] = i2;
  do {
   if ((i11 | 0) != 0) {
    i9 = i11 + 8 | 0;
    i7 = i9 | 0;
    i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i5;
    if ((i5 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 4 >> 2] = 0;
  i11 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  if ((i11 | 0) == 0) {
   return;
  }
  i9 = i11 + 8 | 0;
  i11 = i9 | 0;
  i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
  HEAP32[i11 >> 2] = i5;
  if ((i5 | 0) >= 1) {
   return;
  }
  if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  return;
 } else if ((i8 | 0) == 4) {
  if ((i2 | 0) != 0) {
   i9 = i2 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  i9 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i2;
  do {
   if ((i9 | 0) != 0) {
    i2 = i9 + 8 | 0;
    i6 = i2 | 0;
    i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    HEAP32[i6 >> 2] = i5;
    if ((i5 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 4 >> 2] = 0;
  i1 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  if ((i1 | 0) == 0) {
   return;
  }
  i4 = i1 + 8 | 0;
  i1 = i4 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  HEAP32[i1 >> 2] = i9;
  if ((i9 | 0) >= 1) {
   return;
  }
  if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  return;
 } else if ((i8 | 0) == 38) {
  return;
 }
}
function __ZN7WebCore5Range11setDocumentERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 __ZN7WebCore8Document11detachRangeEPNS_5RangeE(HEAP32[i3 >> 2] | 0, i1);
 i4 = i2 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i5 = (HEAP32[i3 >> 2] | 0) + 8 | 0;
 i6 = i5 - 8 | 0;
 i7 = i5 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i8;
 do {
  if ((i8 | 0) < 1) {
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6);
  }
 } while (0);
 HEAP32[i3 >> 2] = i2;
 i6 = i2 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i2 = i1 + 8 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 8 | 0;
   i8 = i2 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 12 >> 2] = 0;
 i5 = i1 + 16 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i7 = i5 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 20 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 8 | 0;
   i4 = i6 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 24 >> 2] = 0;
 i2 = i1 + 28 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i6 | 0) == 0) {
  i9 = HEAP32[i3 >> 2] | 0;
  __ZN7WebCore8Document11attachRangeEPNS_5RangeE(i9, i1);
  return;
 }
 i2 = i6 + 8 | 0;
 i6 = i2 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i9 = HEAP32[i3 >> 2] | 0;
  __ZN7WebCore8Document11attachRangeEPNS_5RangeE(i9, i1);
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  i9 = HEAP32[i3 >> 2] | 0;
  __ZN7WebCore8Document11attachRangeEPNS_5RangeE(i9, i1);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 i9 = HEAP32[i3 >> 2] | 0;
 __ZN7WebCore8Document11attachRangeEPNS_5RangeE(i9, i1);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN7WebCore5Range18selectNodeContentsEPNS_4NodeERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 8 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = 11;
  STACKTOP = i4;
  return;
 }
 if ((i2 | 0) == 0) {
  HEAP32[i3 >> 2] = 8;
  STACKTOP = i4;
  return;
 } else {
  i7 = i2;
 }
 while (1) {
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 76 >> 2] & 1](i7) | 0;
  if ((i8 | 0) == 12 | (i8 | 0) == 6 | (i8 | 0) == 10) {
   i9 = 6;
   break;
  }
  i8 = HEAP32[i7 + 16 >> 2] | 0;
  if ((i8 | 0) == 0) {
   break;
  } else {
   i7 = i8 | 0;
  }
 }
 if ((i9 | 0) == 6) {
  HEAP32[i3 >> 2] = 202;
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) != (i3 | 0)) {
  __ZN7WebCore5Range11setDocumentERNS_8DocumentE(i1, i3);
 }
 i3 = i2 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   i9 = i6 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 12 >> 2] = 0;
 i3 = i1 + 16 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 + 8 | 0;
   i7 = i3 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i2;
 i3 = i2 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 __ZN7WebCore18RangeBoundaryPoint14setToEndOfNodeEN3WTF10PassRefPtrINS_4NodeEEE(i1 + 20 | 0, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i5 + 8 | 0;
 i5 = i6 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Range8collapseEbRi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i3 >> 2] = 11;
  return;
 }
 i3 = i1 + 20 | 0;
 if (i2) {
  i2 = i5 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  i2 = i3 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i5;
  do {
   if ((i6 | 0) != 0) {
    i2 = i6 + 8 | 0;
    i7 = i2 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i8;
    if ((i8 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 24 >> 2] = HEAP32[i1 + 12 >> 2];
  i6 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i2 = i6 + 8 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  }
  i2 = i1 + 28 | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i6;
  if ((i8 | 0) == 0) {
   return;
  }
  i6 = i8 + 8 | 0;
  i8 = i6 | 0;
  i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  HEAP32[i8 >> 2] = i2;
  if ((i2 | 0) >= 1) {
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  return;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i9 = i5;
 } else {
  i5 = i6 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  i9 = HEAP32[i4 >> 2] | 0;
 }
 HEAP32[i4 >> 2] = i6;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 + 8 | 0;
   i4 = i6 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 12 >> 2] = HEAP32[i1 + 24 >> 2];
 i9 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i6 = i9 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i1 + 16 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 if ((i1 | 0) == 0) {
  return;
 }
 i9 = i1 + 8 | 0;
 i1 = i9 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 return;
}
function __ZN7WebCore5Range12processNodesENS0_10ActionTypeERN3WTF6VectorINS2_6RefPtrINS_4NodeEEELj0ENS2_15CrashOnOverflowEEENS2_10PassRefPtrIS5_EESB_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i2 + 8 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i3 | 0;
 i3 = i2 | 0;
 i2 = i4 | 0;
 i4 = i7 | 0;
 i11 = i8 | 0;
 if ((i1 | 0) == 0) {
  i12 = 0;
  while (1) {
   __ZN7WebCore4Node11removeChildEPS0_Ri(HEAP32[i10 >> 2] | 0, HEAP32[(HEAP32[i3 >> 2] | 0) + (i12 << 2) >> 2] | 0, i5) | 0;
   i12 = i12 + 1 | 0;
   if (i12 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
    break;
   }
  }
  STACKTOP = i6;
  return;
 } else {
  i13 = 0;
 }
 while (1) {
  do {
   if ((i1 | 0) == 2) {
    i12 = HEAP32[i2 >> 2] | 0;
    i10 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i13 << 2) >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 1](i8, i10, 1);
    __ZN7WebCore4Node11appendChildEN3WTF10PassRefPtrIS0_EERi(i12, i8, i5) | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    i10 = i12 + 8 | 0;
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
   } else if ((i1 | 0) == 1) {
    i10 = HEAP32[i2 >> 2] | 0;
    i14 = (HEAP32[i3 >> 2] | 0) + (i13 << 2) | 0;
    HEAP32[i4 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i14 >> 2] = 0;
    __ZN7WebCore4Node11appendChildEN3WTF10PassRefPtrIS0_EERi(i10, i7, i5) | 0;
    i10 = HEAP32[i4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    i14 = i10 + 8 | 0;
    i10 = i14 | 0;
    i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    HEAP32[i10 >> 2] = i12;
    if ((i12 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   }
  } while (0);
  i13 = i13 + 1 | 0;
  if (i13 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i6;
 return;
}
function __ZN7WebCore5RangeC2ERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i7 + 24 | 0;
 HEAP32[i1 >> 2] = 1;
 i11 = i1 + 4 | 0;
 HEAP32[i11 >> 2] = i2;
 i12 = i2 + 8 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i13 + 1;
 i14 = i2 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i1 + 8 >> 2] = i14;
  HEAP32[i1 + 12 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
 } else {
  HEAP32[i12 >> 2] = i13 + 2;
  HEAP32[i1 + 8 >> 2] = i14;
  HEAP32[i1 + 12 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 20 >> 2] = i14;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 __ZN7WebCore8Document11attachRangeEPNS_5RangeE(HEAP32[i11 >> 2] | 0, i1);
 i11 = i8 | 0;
 i14 = i3 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i11 >> 2] = i3;
 i3 = i7 + 8 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i8, i4, i3);
 i3 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = i3 + 8 | 0;
   i4 = i11 | 0;
   i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i3 = i9 | 0;
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i3 >> 2] = i5;
 i5 = i10 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i9, i6, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i3 = i5 + 8 | 0;
 i5 = i3 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i7;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i7;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore4NodeENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZNK7WebCore5Range10cloneRangeERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i3 >> 2] = 11;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i7;
 i9 = i7 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = i2 + 12 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) > -1) {
  i10 = i7;
 } else {
  i7 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i9 >> 2] = i7;
  i10 = i7;
 }
 i7 = HEAP32[i2 + 20 >> 2] | 0;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i11 = i7 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = i2 + 24 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 if ((i7 | 0) > -1) {
  i12 = i7;
 } else {
  i7 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i11 >> 2] = i7;
  i12 = i7;
 }
 __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i3, i5, i10, i6, i12);
 i12 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i9 = i12 + 8 | 0;
   i6 = i9 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i12 = HEAP32[i8 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i12 + 8 | 0;
 i12 = i8 | 0;
 i9 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore18RangeBoundaryPoint14setToEndOfNodeEN3WTF10PassRefPtrINS_4NodeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 1](i4) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i2) {
  HEAP32[i1 + 4 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 168 >> 2] & 1](i4) | 0;
  i2 = i1 + 8 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  if ((i3 | 0) == 0) {
   return;
  }
  i2 = i3 + 8 | 0;
  i3 = i2 | 0;
  i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
  HEAP32[i3 >> 2] = i6;
  if ((i6 | 0) >= 1) {
   return;
  }
  if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  return;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] & 2 | 0) == 0) {
   i7 = 0;
  } else {
   i2 = HEAP32[i4 + 40 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i7 = 0;
    break;
   }
   i6 = i2 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i7 = i2;
  }
 } while (0);
 i4 = i1 + 8 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 + 8 | 0;
   i6 = i7 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = ((HEAP32[i4 >> 2] | 0) != 0) << 31 >> 31;
 return;
}
function __ZNK7WebCore5Range12comparePointEPNS_4NodeEiRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = i1 + 8 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  HEAP32[i4 >> 2] = 11;
  i6 = 0;
  return i6 | 0;
 }
 if ((i2 | 0) == 0) {
  HEAP32[i4 >> 2] = 3;
  i6 = 0;
  return i6 | 0;
 }
 do {
  if ((HEAP32[i2 + 12 >> 2] & 256 | 0) != 0) {
   if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) != (HEAP32[i1 + 4 >> 2] | 0)) {
    break;
   }
   HEAP32[i4 >> 2] = 0;
   __ZNK7WebCore5Range16checkNodeWOffsetEPNS_4NodeEiRi(0, i2, i3, i4) | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    i6 = 0;
    return i6 | 0;
   }
   i7 = HEAP32[i5 >> 2] | 0;
   i8 = i1 + 12 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) > -1) {
    i10 = i9;
   } else {
    i9 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i8 >> 2] = i9;
    i10 = i9;
   }
   if ((__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i2, i3, i7, i10, i4) | 0) << 16 >> 16 < 0) {
    i6 = -1;
    return i6 | 0;
   }
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    i6 = 0;
    return i6 | 0;
   }
   i7 = HEAP32[i1 + 20 >> 2] | 0;
   i9 = i1 + 24 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) > -1) {
    i11 = i8;
   } else {
    i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i9 >> 2] = i8;
    i11 = i8;
   }
   do {
    if ((__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i2, i3, i7, i11, i4) | 0) << 16 >> 16 > 0) {
     if ((HEAP32[i4 >> 2] | 0) == 0) {
      i6 = 1;
     } else {
      break;
     }
     return i6 | 0;
    }
   } while (0);
   i6 = 0;
   return i6 | 0;
  }
 } while (0);
 HEAP32[i4 >> 2] = 4;
 i6 = 0;
 return i6 | 0;
}
function __ZNK7WebCore5Range16checkNodeWOffsetEPNS_4NodeEiRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 L1 : do {
  switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 1](i2) | 0) {
  case 4:
  case 8:
  case 3:
   {
    i1 = HEAP32[i2 + 36 >> 2] | 0;
    if ((i1 | 0) == 0) {
     i5 = 0;
    } else {
     i5 = HEAP32[i1 + 4 >> 2] | 0;
    }
    if (i5 >>> 0 >= i3 >>> 0) {
     i6 = 0;
     break L1;
    }
    HEAP32[i4 >> 2] = 1;
    i6 = 0;
    break;
   }
  case 2:
  case 11:
  case 9:
  case 1:
  case 5:
  case 13:
   {
    if ((i3 | 0) == 0) {
     i6 = 0;
     break L1;
    }
    if ((HEAP32[i2 + 12 >> 2] & 2 | 0) != 0) {
     i1 = __ZNK7WebCore13ContainerNode9childNodeEj(i2, i3 - 1 | 0) | 0;
     if ((i1 | 0) != 0) {
      i6 = i1;
      break L1;
     }
    }
    HEAP32[i4 >> 2] = 1;
    i6 = 0;
    break;
   }
  case 10:
  case 6:
  case 12:
   {
    HEAP32[i4 >> 2] = 202;
    i6 = 0;
    break;
   }
  case 7:
   {
    i1 = HEAP32[i2 + 36 >> 2] | 0;
    do {
     if ((i1 | 0) == 0) {
      if ((i3 | 0) == 0) {
       i6 = 0;
       break L1;
      }
     } else {
      i7 = i1 | 0;
      i8 = HEAP32[i7 >> 2] | 0;
      HEAP32[i7 >> 2] = i8 + 2;
      i9 = (HEAP32[i1 + 4 >> 2] | 0) >>> 0 < i3 >>> 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i1);
       if (i9) {
        break;
       } else {
        i6 = 0;
        break L1;
       }
      } else {
       HEAP32[i7 >> 2] = i8;
       if (i9) {
        break;
       } else {
        i6 = 0;
        break L1;
       }
      }
     }
    } while (0);
    HEAP32[i4 >> 2] = 1;
    i6 = 0;
    break;
   }
  default:
   {
    i6 = 0;
   }
  }
 } while (0);
 return i6 | 0;
}
function __ZN7WebCore5RangeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 4 | 0;
 __ZN7WebCore8Document11detachRangeEPNS_5RangeE(HEAP32[i2 >> 2] | 0, i1);
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i6 = i4 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 + 8 | 0;
   i4 = i1 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 i3 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
 i2 = i3 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 return;
}
function __ZN7WebCore5RangeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 4 | 0;
 __ZN7WebCore8Document11detachRangeEPNS_5RangeE(HEAP32[i2 >> 2] | 0, i1);
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i6 = i4 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 + 8 | 0;
   i4 = i1 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 i3 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
 i2 = i3 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 return;
}
function __ZN7WebCore5Range6detachERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  HEAP32[i2 >> 2] = 11;
  return;
 }
 __ZN7WebCore8Document11detachRangeEPNS_5RangeE(HEAP32[i1 + 4 >> 2] | 0, i1);
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
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
 HEAP32[i1 + 12 >> 2] = 0;
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 20 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
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
 HEAP32[i1 + 24 >> 2] = 0;
 i2 = i1 + 28 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 8 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 return;
}
function __ZN7WebCore5Range13setStartAfterEPNS_4NodeERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = 11;
  STACKTOP = i4;
  return;
 }
 if ((i2 | 0) == 0) {
  HEAP32[i3 >> 2] = 8;
  STACKTOP = i4;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 1](i2) | 0) {
 case 2:
 case 11:
 case 9:
 case 6:
 case 12:
  {
   HEAP32[i3 >> 2] = 202;
   STACKTOP = i4;
   return;
  }
 default:
  {
   i6 = i2;
  }
 }
 while (1) {
  i7 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i7 | 0) == 0) {
   break;
  } else {
   i6 = i7 | 0;
  }
 }
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 76 >> 2] & 1](i6) | 0) {
 case 13:
 case 3:
 case 7:
 case 4:
 case 8:
 case 10:
 case 1:
 case 6:
 case 5:
 case 12:
  {
   HEAP32[i3 >> 2] = 202;
   STACKTOP = i4;
   return;
  }
 default:
  {}
 }
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i8 = i6 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i5, (__ZNK7WebCore4Node9nodeIndexEv(i2) | 0) + 1 | 0, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i3 + 8 | 0;
 i3 = i7 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Range11setEndAfterEPNS_4NodeERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = 11;
  STACKTOP = i4;
  return;
 }
 if ((i2 | 0) == 0) {
  HEAP32[i3 >> 2] = 8;
  STACKTOP = i4;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 1](i2) | 0) {
 case 2:
 case 11:
 case 9:
 case 6:
 case 12:
  {
   HEAP32[i3 >> 2] = 202;
   STACKTOP = i4;
   return;
  }
 default:
  {
   i6 = i2;
  }
 }
 while (1) {
  i7 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i7 | 0) == 0) {
   break;
  } else {
   i6 = i7 | 0;
  }
 }
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 76 >> 2] & 1](i6) | 0) {
 case 13:
 case 3:
 case 7:
 case 4:
 case 8:
 case 10:
 case 1:
 case 6:
 case 5:
 case 12:
  {
   HEAP32[i3 >> 2] = 202;
   STACKTOP = i4;
   return;
  }
 default:
  {}
 }
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i8 = i6 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i5, (__ZNK7WebCore4Node9nodeIndexEv(i2) | 0) + 1 | 0, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i3 + 8 | 0;
 i3 = i7 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Range14setStartBeforeEPNS_4NodeERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = 11;
  STACKTOP = i4;
  return;
 }
 if ((i2 | 0) == 0) {
  HEAP32[i3 >> 2] = 8;
  STACKTOP = i4;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 1](i2) | 0) {
 case 2:
 case 11:
 case 9:
 case 6:
 case 12:
  {
   HEAP32[i3 >> 2] = 202;
   STACKTOP = i4;
   return;
  }
 default:
  {
   i6 = i2;
  }
 }
 while (1) {
  i7 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i7 | 0) == 0) {
   break;
  } else {
   i6 = i7 | 0;
  }
 }
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 76 >> 2] & 1](i6) | 0) {
 case 13:
 case 3:
 case 7:
 case 4:
 case 8:
 case 10:
 case 1:
 case 6:
 case 5:
 case 12:
  {
   HEAP32[i3 >> 2] = 202;
   STACKTOP = i4;
   return;
  }
 default:
  {}
 }
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i8 = i6 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i5, __ZNK7WebCore4Node9nodeIndexEv(i2) | 0, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i3 + 8 | 0;
 i3 = i7 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Range12setEndBeforeEPNS_4NodeERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = 11;
  STACKTOP = i4;
  return;
 }
 if ((i2 | 0) == 0) {
  HEAP32[i3 >> 2] = 8;
  STACKTOP = i4;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 1](i2) | 0) {
 case 2:
 case 11:
 case 9:
 case 6:
 case 12:
  {
   HEAP32[i3 >> 2] = 202;
   STACKTOP = i4;
   return;
  }
 default:
  {
   i6 = i2;
  }
 }
 while (1) {
  i7 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i7 | 0) == 0) {
   break;
  } else {
   i6 = i7 | 0;
  }
 }
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 76 >> 2] & 1](i6) | 0) {
 case 13:
 case 3:
 case 7:
 case 4:
 case 8:
 case 10:
 case 1:
 case 6:
 case 5:
 case 12:
  {
   HEAP32[i3 >> 2] = 202;
   STACKTOP = i4;
   return;
  }
 default:
  {}
 }
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i8 = i6 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i5, __ZNK7WebCore4Node9nodeIndexEv(i2) | 0, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i3 + 8 | 0;
 i3 = i7 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = __ZN3WTF10fastMallocEj(32) | 0;
 i9 = __ZNK7WebCore8Position13containerNodeEv(i3) | 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i11 = i9 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i3) | 0;
 i3 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i12 = i3 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 __ZN7WebCore5RangeC2ERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i8, i2, i6, i11, i7, __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i4) | 0);
 HEAP32[i1 >> 2] = i8;
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 + 8 | 0;
   i1 = i9 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i8 + 8 | 0;
 i8 = i10 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5Range14isPointInRangeEPNS_4NodeEiRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = i1 + 8 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  HEAP32[i4 >> 2] = 11;
  i6 = 0;
  return i6 | 0;
 }
 if ((i2 | 0) == 0) {
  HEAP32[i4 >> 2] = 3;
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) != (HEAP32[i1 + 4 >> 2] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 HEAP32[i4 >> 2] = 0;
 __ZNK7WebCore5Range16checkNodeWOffsetEPNS_4NodeEiRi(0, i2, i3, i4) | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = i1 + 12 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) > -1) {
  i9 = i8;
 } else {
  i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i5 >> 2] = i8;
  i9 = i8;
 }
 if ((__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i2, i3, i7, i9, i4) | 0) << 16 >> 16 <= -1) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 i9 = HEAP32[i1 + 20 >> 2] | 0;
 i7 = i1 + 24 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) > -1) {
  i10 = i8;
 } else {
  i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i7 >> 2] = i8;
  i10 = i8;
 }
 if ((__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i2, i3, i9, i10, i4) | 0) << 16 >> 16 >= 1) {
  i6 = 0;
  return i6 | 0;
 }
 i6 = (HEAP32[i4 >> 2] | 0) == 0;
 return i6 | 0;
}
function __ZNK7WebCore5Range9firstNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 164 >> 2] & 1](i3) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (i5) {
  i4 = i3;
  return i4 | 0;
 }
 i5 = i3 + 32 | 0;
 if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 i5 = __ZN7WebCore25isRendererReplacedElementEPNS_12RenderObjectE(HEAP32[i6 >> 2] | 0) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if (i5) {
  i4 = i6;
  return i4 | 0;
 }
 i5 = i1 + 12 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) > -1) {
  i7 = i3;
 } else {
  i3 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i5 >> 2] = i3;
  i7 = i3;
 }
 do {
  if ((HEAP32[i6 + 12 >> 2] & 2 | 0) == 0) {
   i8 = i7;
  } else {
   i3 = __ZNK7WebCore13ContainerNode9childNodeEj(i6, i7) | 0;
   if ((i3 | 0) == 0) {
    i8 = HEAP32[i5 >> 2] | 0;
    break;
   } else {
    i4 = i3;
    return i4 | 0;
   }
  }
 } while (0);
 if ((i8 | 0) > -1) {
  i9 = i8;
 } else {
  i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i5 >> 2] = i8;
  i9 = i8;
 }
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i4 = i8;
  return i4 | 0;
 }
 i9 = HEAP32[i8 + 28 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9;
  return i4 | 0;
 }
 i4 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i8) | 0;
 return i4 | 0;
}
function __ZNK7WebCore5Range12boundingRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i2 + 4 >> 2] | 0);
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i4 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZNK7WebCore5Range21getBorderAndTextQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i2, i4);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   _memset(i1 | 0, 0, 16) | 0;
  } else {
   i2 = i5;
   _memset(i2 | 0, 0, 16) | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   i11 = 0;
   while (1) {
    __ZNK7WebCore9FloatQuad11boundingBoxEv(i6, i10 + (i11 << 5) | 0);
    __ZN7WebCore9FloatRect5uniteERKS0_(i5, i6);
    i11 = i11 + 1 | 0;
    if (i11 >>> 0 >= i4 >>> 0) {
     break;
    }
   }
   i11 = i1;
   HEAP32[i11 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i11 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   HEAP32[i11 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
   HEAP32[i11 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
   if ((i4 | 0) == 0) {
    break;
   }
   HEAP32[i9 >> 2] = 0;
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = __ZN3WTF10fastMallocEj(32) | 0;
 i11 = i8 | 0;
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i11 >> 2] = i3;
 i3 = i9 | 0;
 i12 = i5 | 0;
 i5 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i3 >> 2] = i5;
 __ZN7WebCore5RangeC2ERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i10, i2, i8, i4, i9, i6);
 HEAP32[i1 >> 2] = i10;
 i10 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 + 8 | 0;
   i1 = i3 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i11 = i10 + 8 | 0;
 i10 = i11 | 0;
 i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i7;
  return;
 }
 if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore5Range8setStartERKNS_8PositionERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i5, i2);
 i2 = __ZNK7WebCore8Position13containerNodeEv(i5) | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i6, HEAP32[i5 + 4 >> 2] | 0, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 8 | 0;
   i6 = i7 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 8 | 0;
 i3 = i5 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Range6setEndERKNS_8PositionERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i5, i2);
 i2 = __ZNK7WebCore8Position13containerNodeEv(i5) | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i6, HEAP32[i5 + 4 >> 2] | 0, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 8 | 0;
   i6 = i7 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 + 8 | 0;
 i3 = i5 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5Range14intersectsNodeEPNS_4NodeERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = 11;
  i4 = 0;
  return i4 | 0;
 }
 if ((i2 | 0) == 0) {
  HEAP32[i3 >> 2] = 8;
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) != (HEAP32[i1 + 4 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i2 + 16 >> 2] | 0;
 i6 = __ZNK7WebCore4Node9nodeIndexEv(i2) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i3 >> 2] = 8;
  i4 = 0;
  return i4 | 0;
 }
 i2 = i5 | 0;
 do {
  if ((__ZNK7WebCore5Range12comparePointEPNS_4NodeEiRi(i1, i2, i6, i3) | 0) << 16 >> 16 < 0) {
   if ((__ZNK7WebCore5Range12comparePointEPNS_4NodeEiRi(i1, i2, i6 + 1 | 0, i3) | 0) << 16 >> 16 < 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 do {
  if ((__ZNK7WebCore5Range12comparePointEPNS_4NodeEiRi(i1, i2, i6, i3) | 0) << 16 >> 16 > 0) {
   if ((__ZNK7WebCore5Range12comparePointEPNS_4NodeEiRi(i1, i2, i6 + 1 | 0, i3) | 0) << 16 >> 16 > 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore5Range10selectNodeEPNS_4NodeERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = 11;
  return;
 }
 if ((i2 | 0) == 0) {
  HEAP32[i3 >> 2] = 8;
  return;
 }
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 L9 : do {
  if ((i4 | 0) != 0) {
   i5 = i4;
   while (1) {
    i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 76 >> 2] & 1](i5 | 0) | 0;
    if ((i6 | 0) == 12 | (i6 | 0) == 6 | (i6 | 0) == 10) {
     break;
    }
    i5 = HEAP32[i5 + 16 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break L9;
    }
   }
   HEAP32[i3 >> 2] = 202;
   return;
  }
 } while (0);
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 1](i2) | 0) {
 case 12:
 case 6:
 case 9:
 case 11:
 case 2:
  {
   HEAP32[i3 >> 2] = 202;
   return;
  }
 default:
  {}
 }
 i4 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i1 + 4 >> 2] | 0) != (i4 | 0)) {
  __ZN7WebCore5Range11setDocumentERNS_8DocumentE(i1, i4);
 }
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore5Range14setStartBeforeEPNS_4NodeERi(i1, i2, i3);
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore5Range11setEndAfterEPNS_4NodeERi(i1, i2, i3);
 return;
}
function __ZNK7WebCore5Range12pastLastNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 1](i4) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i5) {
  i5 = HEAP32[i4 + 28 >> 2] | 0;
  if ((i5 | 0) != 0) {
   i2 = i5;
   return i2 | 0;
  }
  i2 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i4) | 0;
  return i2 | 0;
 }
 i5 = i1 + 24 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) > -1) {
  i7 = i6;
 } else {
  i6 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i5 >> 2] = i6;
  i7 = i6;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] & 2 | 0) != 0) {
   i6 = __ZNK7WebCore13ContainerNode9childNodeEj(i4, i7) | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i2 = i6;
   }
   return i2 | 0;
  }
 } while (0);
 i7 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i7 + 28 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3;
  return i2 | 0;
 }
 i2 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i7) | 0;
 return i2 | 0;
}
function __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
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
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 4) | 0;
 if (i5 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i7;
   i8 = i6;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i5 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = i6 + 16 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 16 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5Range24createContextualFragmentERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i4 >> 2] = 11;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i2 = HEAP32[i7 + 12 >> 2] | 0;
 do {
  if ((i2 & 4 | 0) == 0) {
   i8 = HEAP32[i7 + 16 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 | 0;
   i10 = HEAP32[i8 + 12 >> 2] | 0;
   i11 = 6;
  } else {
   i9 = i7;
   i10 = i2;
   i11 = 6;
  }
 } while (0);
 do {
  if ((i11 | 0) == 6) {
   if ((i10 & 16 | 0) == 0) {
    break;
   }
   __ZN7WebCore24createContextualFragmentERKN3WTF6StringEPNS_11HTMLElementENS_19ParserContentPolicyERi(i6, i3, i9, 3, i4);
   i2 = i6 | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i2 = i1 | 0;
   if ((i7 | 0) == 0) {
    HEAP32[i2 >> 2] = 0;
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i2 >> 2] = i7;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = 9;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore5Range11boundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZNK7WebCore5Range9textRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEEbPNS0_20RangeInFixedPositionE(i2, i4, 0, 0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = 0;
   i8 = i4;
   while (1) {
    if (i8 >>> 0 <= i2 >>> 0) {
     i9 = 3;
     break;
    }
    __ZN7WebCore7IntRect5uniteERKS0_(i1, (HEAP32[i5 >> 2] | 0) + (i2 << 4) | 0);
    i2 = i2 + 1 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    if (i2 >>> 0 >= i4 >>> 0) {
     break;
    }
   }
   if ((i9 | 0) == 3) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i8 | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = 0;
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5Range9collapsedERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i2 >> 2] = 11;
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 | 0) != (HEAP32[i1 + 20 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i2 = i1 + 28 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0 & (i5 | 0) == 0) {
   i6 = i1 + 12 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) > -1) {
    i8 = i7;
   } else {
    i7 = (__ZNK7WebCore4Node9nodeIndexEv(0) | 0) + 1 | 0;
    HEAP32[i6 >> 2] = i7;
    i8 = i7;
   }
   i7 = i1 + 24 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) > -1) {
    i9 = i6;
   } else {
    i6 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i7 >> 2] = i6;
    i9 = i6;
   }
   if ((i8 | 0) == (i9 | 0)) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  } else {
   if ((i3 | 0) == (i5 | 0)) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = 1;
 return i4 | 0;
}
function __ZNK7WebCore5Range11compareNodeEPNS_4NodeERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i2 | 0) == 0) {
  HEAP32[i3 >> 2] = 8;
  i4 = 0;
  return i4 | 0;
 }
 i5 = (HEAP32[i2 + 12 >> 2] & 256 | 0) == 0;
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
   if (i5) {
    break;
   }
   HEAP32[i3 >> 2] = 11;
   i4 = 0;
   return i4 | 0;
  } else {
   if (i5) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) != (HEAP32[i1 + 4 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i2 + 16 >> 2] | 0;
 i6 = __ZNK7WebCore4Node9nodeIndexEv(i2) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i3 >> 2] = 8;
  i4 = 0;
  return i4 | 0;
 }
 i2 = i5 | 0;
 i5 = (__ZNK7WebCore5Range12comparePointEPNS_4NodeEiRi(i1, i2, i6, i3) | 0) << 16 >> 16 < 0;
 i7 = (__ZNK7WebCore5Range12comparePointEPNS_4NodeEiRi(i1, i2, i6 + 1 | 0, i3) | 0) << 16 >> 16 > 0;
 if (i5) {
  i4 = i7 ? 2 : 0;
  return i4 | 0;
 } else {
  i4 = i7 ? 1 : 3;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore5Range11textRemovedEPNS_4NodeEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) == (i2 | 0)) {
   i5 = i1 + 12 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) > -1) {
    i7 = i6;
   } else {
    i6 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i5 >> 2] = i6;
    i7 = i6;
   }
   if (i7 >>> 0 <= i3 >>> 0) {
    break;
   }
   if ((i4 + i3 | 0) >>> 0 < i7 >>> 0) {
    HEAP32[i5 >> 2] = i7 - i4;
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 i2 = i1 + 24 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) > -1) {
  i8 = i7;
 } else {
  i7 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i2 >> 2] = i7;
  i8 = i7;
 }
 if (i8 >>> 0 <= i3 >>> 0) {
  return;
 }
 if ((i4 + i3 | 0) >>> 0 < i8 >>> 0) {
  HEAP32[i2 >> 2] = i8 - i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZNK7WebCore5Range14getClientRectsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
  i5 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore14ClientRectListC1Ev(i5);
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i2 + 4 >> 2] | 0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZNK7WebCore5Range21getBorderAndTextQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i2, i4);
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore14ClientRectListC1ERKN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i2, i4);
 HEAP32[i1 >> 2] = i2;
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15rangeOfContentsERNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i6 = __ZN3WTF10fastMallocEj(32) | 0;
 i7 = i6;
 HEAP32[i6 >> 2] = 1;
 i8 = i6 + 4 | 0;
 HEAP32[i8 >> 2] = i5;
 i9 = i5 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i10 + 1;
 i11 = i5 | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i6 + 8 >> 2] = i11;
  HEAP32[i6 + 12 >> 2] = 0;
  HEAP32[i6 + 16 >> 2] = 0;
 } else {
  HEAP32[i9 >> 2] = i10 + 2;
  HEAP32[i6 + 8 >> 2] = i11;
  HEAP32[i6 + 12 >> 2] = 0;
  HEAP32[i6 + 16 >> 2] = 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 HEAP32[i6 + 20 >> 2] = i11;
 HEAP32[i6 + 24 >> 2] = 0;
 HEAP32[i6 + 28 >> 2] = 0;
 __ZN7WebCore8Document11attachRangeEPNS_5RangeE(HEAP32[i8 >> 2] | 0, i7);
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore5Range18selectNodeContentsEPNS_4NodeERi(i7, i2, i4);
 HEAP32[i1 >> 2] = i7;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
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
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 5) | 0;
 if (i5 >>> 0 > 134217727 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 5) | 0;
 HEAP32[i3 >> 2] = i7 >>> 5;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   _memcpy(i7 | 0, i6 | 0, 32) | 0;
   i5 = i6 + 32 | 0;
   if ((i5 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i5;
    i7 = i7 + 32 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore5Range19boundaryPointsValidEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i6 = i1 + 12 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) > -1) {
  i8 = i7;
 } else {
  i7 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i6 >> 2] = i7;
  i8 = i7;
 }
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i6 = i1 + 24 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 if ((i9 | 0) > -1) {
  i10 = i9;
 } else {
  i9 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  i10 = i9;
 }
 if ((__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i4, i8, i7, i10, i3) | 0) << 16 >> 16 >= 1) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i5 = (HEAP32[i3 >> 2] | 0) == 0;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore5Range19containedByReadOnlyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) != 0) {
   i3 = i2;
   while (1) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 1](i3) | 0) == 5) {
     i4 = 1;
     break;
    }
    i5 = HEAP32[i3 + 16 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break L1;
    } else {
     i3 = i5 | 0;
    }
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 } else {
  i6 = i2;
 }
 while (1) {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 76 >> 2] & 1](i6) | 0) == 5) {
   i4 = 1;
   i7 = 10;
   break;
  }
  i2 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i4 = 0;
   i7 = 9;
   break;
  } else {
   i6 = i2 | 0;
  }
 }
 if ((i7 | 0) == 10) {
  return i4 | 0;
 } else if ((i7 | 0) == 9) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore5Range23commonAncestorContainerERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i2 >> 2] = 11;
  i4 = 0;
  return i4 | 0;
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i1 = i3;
  while (1) {
   i5 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 0;
    break;
   } else {
    i1 = i5 | 0;
   }
  }
  return i4 | 0;
 } else {
  i6 = i3;
 }
 L9 : while (1) {
  i3 = i2;
  while (1) {
   if ((i6 | 0) == (i3 | 0)) {
    i4 = i6;
    i7 = 11;
    break L9;
   }
   i1 = HEAP32[i3 + 16 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   } else {
    i3 = i1 | 0;
   }
  }
  i3 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 0;
   i7 = 12;
   break;
  } else {
   i6 = i3 | 0;
  }
 }
 if ((i7 | 0) == 11) {
  return i4 | 0;
 } else if ((i7 | 0) == 12) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore5Range12textInsertedEPNS_4NodeEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) == (i2 | 0)) {
   i5 = i1 + 12 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) > -1) {
    i7 = i6;
   } else {
    i6 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i5 >> 2] = i6;
    i7 = i6;
   }
   if (i7 >>> 0 <= i3 >>> 0) {
    break;
   }
   HEAP32[i5 >> 2] = i7 + i4;
  }
 } while (0);
 if ((HEAP32[i1 + 20 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 i2 = i1 + 24 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) > -1) {
  i8 = i7;
 } else {
  i7 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i2 >> 2] = i7;
  i8 = i7;
 }
 if (i8 >>> 0 <= i3 >>> 0) {
  return;
 }
 HEAP32[i2 >> 2] = i8 + i4;
 return;
}
function __ZN7WebCore5Range23commonAncestorContainerEPNS_4NodeES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((i2 | 0) == 0) {
  i4 = i1;
  while (1) {
   i5 = HEAP32[i4 + 16 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i3 = 0;
    break;
   } else {
    i4 = i5 | 0;
   }
  }
  return i3 | 0;
 } else {
  i6 = i1;
 }
 L8 : while (1) {
  i1 = i2;
  while (1) {
   if ((i6 | 0) == (i1 | 0)) {
    i3 = i6;
    i7 = 9;
    break L8;
   }
   i4 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i1 = i4 | 0;
   }
  }
  i1 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i7 = 10;
   break;
  } else {
   i6 = i1 | 0;
  }
 }
 if ((i7 | 0) == 9) {
  return i3 | 0;
 } else if ((i7 | 0) == 10) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore5Range21compareBoundaryPointsERKNS_18RangeBoundaryPointES3_Ri(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) > -1) {
  i7 = i6;
 } else {
  i6 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 8 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i5 >> 2] = i6;
  i7 = i6;
 }
 i6 = HEAP32[i2 >> 2] | 0;
 i5 = i2 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) > -1) {
  i8 = i1;
  i9 = __ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i4, i7, i6, i8, i3) | 0;
  return i9 | 0;
 }
 i1 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 8 >> 2] | 0) | 0) + 1 | 0;
 HEAP32[i5 >> 2] = i1;
 i8 = i1;
 i9 = __ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i4, i7, i6, i8, i3) | 0;
 return i9 | 0;
}
function __ZN7WebCore5Range6createERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = __ZN3WTF10fastMallocEj(32) | 0;
 i4 = i3;
 HEAP32[i3 >> 2] = 1;
 i5 = i3 + 4 | 0;
 HEAP32[i5 >> 2] = i2;
 i6 = i2 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i7 + 1;
 i8 = i2 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i3 + 8 >> 2] = i8;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAP32[i3 + 16 >> 2] = 0;
 } else {
  HEAP32[i6 >> 2] = i7 + 2;
  HEAP32[i3 + 8 >> 2] = i8;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAP32[i3 + 16 >> 2] = 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i3 + 20 >> 2] = i8;
 HEAP32[i3 + 24 >> 2] = 0;
 HEAP32[i3 + 28 >> 2] = 0;
 __ZN7WebCore8Document11attachRangeEPNS_5RangeE(HEAP32[i5 >> 2] | 0, i4);
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZN7WebCore5Range14deleteContentsERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore5Range18checkDeleteExtractERi(i1, i2);
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore5Range15processContentsENS0_10ActionTypeERi(i4, i1, 0, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5Range11checkNodeBAEPNS_4NodeERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 1](i2) | 0) {
 case 2:
 case 11:
 case 9:
 case 6:
 case 12:
  {
   HEAP32[i3 >> 2] = 202;
   return;
  }
 default:
  {
   i4 = i2;
  }
 }
 while (1) {
  i2 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   break;
  } else {
   i4 = i2 | 0;
  }
 }
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] & 1](i4) | 0) {
 case 13:
 case 3:
 case 7:
 case 4:
 case 8:
 case 10:
 case 1:
 case 6:
 case 5:
 case 12:
  {
   break;
  }
 default:
  {
   return;
  }
 }
 HEAP32[i3 >> 2] = 202;
 return;
}
function __ZNK7WebCore5Range14maxStartOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 1](i1) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if (i4) {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 1](i1) | 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i1) | 0;
 return i3 | 0;
}
function __ZNK7WebCore5Range12maxEndOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 1](i1) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if (i4) {
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 1](i1) | 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i1) | 0;
 return i3 | 0;
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
function __ZNK7WebCore5Range11startOffsetERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  HEAP32[i2 >> 2] = 11;
  i3 = 0;
  return i3 | 0;
 }
 i2 = i1 + 12 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) > -1) {
  i3 = i4;
  return i3 | 0;
 }
 i4 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
 HEAP32[i2 >> 2] = i4;
 i3 = i4;
 return i3 | 0;
}
function __ZNK7WebCore5Range9endOffsetERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  HEAP32[i2 >> 2] = 11;
  i3 = 0;
  return i3 | 0;
 }
 i2 = i1 + 24 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) > -1) {
  i3 = i4;
  return i3 | 0;
 }
 i4 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 28 >> 2] | 0) | 0) + 1 | 0;
 HEAP32[i2 >> 2] = i4;
 i3 = i4;
 return i3 | 0;
}
function __ZN7WebCore5Range19nodeChildrenChangedERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 do {
  if ((HEAP32[i1 + 16 >> 2] | 0) != 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != (i2 | 0)) {
    break;
   }
   HEAP32[i1 + 12 >> 2] = -1;
  }
 } while (0);
 if ((HEAP32[i1 + 28 >> 2] | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 HEAP32[i1 + 24 >> 2] = -1;
 return;
}
function __ZNK7WebCore5Range4textEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0);
  __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i1, i2, 0, 0);
  return;
 }
}
function __ZNK7WebCore5Range21getBoundingClientRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore5Range12boundingRectEv(i4, i2);
 i2 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN7WebCore10ClientRectC1ERKNS_9FloatRectE(i2, i4);
 HEAP32[i1 >> 2] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5Range25nodeChildrenWillBeRemovedERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCoreL33boundaryNodeChildrenWillBeRemovedERNS_18RangeBoundaryPointERNS_13ContainerNodeE(i1 + 8 | 0, i2);
 __ZN7WebCoreL33boundaryNodeChildrenWillBeRemovedERNS_18RangeBoundaryPointERNS_13ContainerNodeE(i1 + 20 | 0, i2);
 return;
}
function __ZN7WebCore5Range15textNodesMergedERNS_13NodeWithIndexEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCoreL23boundaryTextNodesMergedERNS_18RangeBoundaryPointERNS_13NodeWithIndexEj(i1 + 8 | 0, i2, i3);
 __ZN7WebCoreL23boundaryTextNodesMergedERNS_18RangeBoundaryPointERNS_13NodeWithIndexEj(i1 + 20 | 0, i2, i3);
 return;
}
function __ZN7WebCore5Range15extractContentsERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore5Range18checkDeleteExtractERi(i2, i3);
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  __ZN7WebCore5Range15processContentsENS0_10ActionTypeERi(i1, i2, 1, i3);
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function __ZN7WebCore5Range13cloneContentsERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = 11;
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZN7WebCore5Range15processContentsENS0_10ActionTypeERi(i1, i2, 2, i3);
  return;
 }
}
function __ZNK7WebCore5Range12endContainerERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  HEAP32[i2 >> 2] = 11;
  i3 = 0;
  return i3 | 0;
 } else {
  i3 = HEAP32[i1 + 20 >> 2] | 0;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore5Range6toHTMLEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12createMarkupERKNS_5RangeEPN3WTF6VectorIPNS_4NodeELj0ENS3_15CrashOnOverflowEEENS_23EAnnotateForInterchangeEbNS_13EAbsoluteURLsE(i1, i2, 0, 0, 0, 0);
 return;
}
function __ZNK7WebCore5Range10shadowRootEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore4Node20containingShadowRootEv(i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore5Range14startContainerERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 HEAP32[i2 >> 2] = 11;
 i4 = 0;
 return i4 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore5RangeD2Ev,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore18RangeBoundaryPoint14setToEndOfNodeEN3WTF10PassRefPtrINS_4NodeEEE","__ZN7WebCore5RangeD2Ev","__ZN7WebCoreL23boundaryTextNodesMergedERNS_18RangeBoundaryPointERNS_13NodeWithIndexEj","__ZN7WebCore5Range18selectNodeContentsEPNS_4NodeERi","__ZN7WebCore5Range15processContentsENS0_10ActionTypeERi","__ZNK7WebCore5Range14getClientRectsEv","__ZN7WebCore5Range12setEndBeforeEPNS_4NodeERi","__ZN7WebCore5Range13textNodeSplitEPNS_4TextE","__ZNK7WebCore5Range4textEv","__ZN7WebCore5Range8setStartERKNS_8PositionERi","_strlen","__ZN7WebCore15rangeOfContentsERNS_4NodeE","__ZN7WebCore5Range6setEndERKNS_8PositionERi","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore14areRangesEqualEPKNS_5RangeES2_","__ZNK7WebCore5Range6toHTMLEv","_memcpy","__ZN7WebCore5Range32processAncestorsAndTheirSiblingsENS0_10ActionTypeEPNS_4NodeENS0_24ContentsProcessDirectionEN3WTF10PassRefPtrIS2_EES3_Ri","__ZN7WebCore5Range25nodeChildrenWillBeRemovedERNS_13ContainerNodeE","__ZNK7WebCore5Range12maxEndOffsetEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi","__ZNK7WebCore5Range12comparePointEPNS_4NodeEiRi","__ZN7WebCore5Range17nodeWillBeRemovedEPNS_4NodeE","__ZNK7WebCore5Range16checkNodeWOffsetEPNS_4NodeEiRi","__ZN7WebCore5Range24createContextualFragmentERKN3WTF6StringERi","__ZN7WebCore5Range10insertNodeEN3WTF10PassRefPtrINS_4NodeEEERi","__ZN7WebCore5Range16surroundContentsEN3WTF10PassRefPtrINS_4NodeEEERi","__ZN7WebCore5Range10selectNodeEPNS_4NodeERi","__ZN7WebCore5Range14setStartBeforeEPNS_4NodeERi","__ZNK7WebCore5Range9firstNodeEv","_memset","__ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_","__ZN7WebCore5Range8collapseEbRi","__ZNK7WebCore5Range14maxStartOffsetEv","__ZNK7WebCore5Range10shadowRootEv","__ZNK7WebCore5Range19containedByReadOnlyEv","__ZN7WebCore5Range14isPointInRangeEPNS_4NodeEiRi","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZNK7WebCore5Range8toStringERi","__ZN7WebCore5Range12textInsertedEPNS_4NodeEjj","__ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore5Range13setStartAfterEPNS_4NodeERi","__ZN7WebCore5Range21compareBoundaryPointsERKNS_18RangeBoundaryPointES3_Ri","__ZN7WebCore5RangeC2ERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i","__ZNK7WebCore5Range14startContainerERi","__ZNK7WebCore5Range12endContainerERi","__ZN7WebCore5Range19nodeChildrenChangedERNS_13ContainerNodeE","__ZN7WebCoreL33boundaryNodeChildrenWillBeRemovedERNS_18RangeBoundaryPointERNS_13ContainerNodeE","__ZN7WebCore5Range23commonAncestorContainerEPNS_4NodeES2_","__ZNK7WebCore5Range9endOffsetERi","__ZNK7WebCore5Range11boundingBoxEv","__ZN7WebCore5Range15textNodesMergedERNS_13NodeWithIndexEj","__ZNK7WebCore5Range9textRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEEbPNS0_20RangeInFixedPositionE","__ZNK7WebCore5Range9collapsedERi","__ZNK7WebCore5Range21compareBoundaryPointsENS0_10CompareHowEPKS0_Ri","__ZN7WebCore5Range6detachERi","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore5Range6expandERKN3WTF6StringERi","__ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi","__ZN7WebCore5Range29processContentsBetweenOffsetsENS0_10ActionTypeEN3WTF10PassRefPtrINS_16DocumentFragmentEEEPNS_4NodeEjjRi","__ZN7WebCore5Range14intersectsNodeEPNS_4NodeERi","__ZN3WTF7HashSetIPN7WebCore4NodeENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore5Range11setDocumentERNS_8DocumentE","__ZNK7WebCore5Range11startOffsetERi","__ZNK7WebCore5Range12pastLastNodeEv","__ZN7WebCore5Range6createERNS_8DocumentE","__ZNK7WebCore5Range11compareNodeEPNS_4NodeERi","__ZN7WebCore5Range13cloneContentsERi","__ZN7WebCore5Range11textRemovedEPNS_4NodeEjj","__ZNK7WebCore5Range21getBorderAndTextQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi","__ZN7WebCore5Range18checkDeleteExtractERi","__ZN7WebCore5Range14deleteContentsERi","__ZNK7WebCore5Range23commonAncestorContainerERi","__ZN7WebCore5Range15extractContentsERi","__ZNK7WebCore5Range19boundaryPointsValidEv","__ZN7WebCore5Range12processNodesENS0_10ActionTypeERN3WTF6VectorINS2_6RefPtrINS_4NodeEEELj0ENS2_15CrashOnOverflowEEENS2_10PassRefPtrIS5_EESB_Ri","__ZNK7WebCore5Range10cloneRangeERi","__ZN7WebCore5Range11setEndAfterEPNS_4NodeERi","__ZNK7WebCore5Range9textQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEbPNS0_20RangeInFixedPositionE","__ZNK7WebCore5Range12boundingRectEv","__ZNK7WebCore5Range21getBoundingClientRectEv","__ZNK7WebCore5Range11checkNodeBAEPNS_4NodeERi","__ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i"]

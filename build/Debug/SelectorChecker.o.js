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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15SelectorCheckerC1ERNS_8DocumentENS0_4ModeE;
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN3WTF8starAtomE=env.__ZN3WTF8starAtomE|0;
  var __ZN7WebCore7anyNameE=env.__ZN7WebCore7anyNameE|0;
  var __ZN7WebCore9HTMLNames9optionTagE=env.__ZN7WebCore9HTMLNames9optionTagE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore9HTMLNames11optgroupTagE=env.__ZN7WebCore9HTMLNames11optgroupTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore15SelectorChecker8checkOneERKNS0_23SelectorCheckingContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 40 | 0;
 i6 = i3 + 80 | 0;
 i7 = i3 + 88 | 0;
 i8 = i2 + 4 | 0;
 i9 = i2 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 L1 : do {
  switch ((HEAP32[i10 >> 2] | 0) >>> 3 & 15 | 0) {
  case 2:
   {
    i11 = HEAP32[(HEAP32[i8 >> 2] | 0) + 48 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i13 = HEAP32[i11 + 16 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i11 = i10 + 4 | 0;
    if ((HEAP8[i10 + 2 | 0] & 4) == 0) {
     i14 = i11 | 0;
    } else {
     i14 = (HEAP32[i11 >> 2] | 0) + 4 | 0;
    }
    i12 = (i13 | 0) == (HEAP32[i14 >> 2] | 0);
    STACKTOP = i3;
    return i12 | 0;
   }
  case 3:
   {
    i13 = HEAP32[(HEAP32[i8 >> 2] | 0) + 48 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i11 = HEAP32[i13 + 12 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i13 = i10 + 4 | 0;
    if ((HEAP8[i10 + 2 | 0] & 4) == 0) {
     i15 = i13 | 0;
    } else {
     i15 = (HEAP32[i13 >> 2] | 0) + 4 | 0;
    }
    i13 = i11 + 12 | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i11 + 8 | 0;
    i11 = 0;
    while (1) {
     if ((HEAP32[i13 + (i11 << 2) >> 2] | 0) == (i16 | 0)) {
      i12 = 1;
      i18 = 517;
      break;
     }
     i19 = i11 + 1 | 0;
     if (i19 >>> 0 < (HEAP32[i17 >> 2] | 0) >>> 0) {
      i11 = i19;
     } else {
      i12 = 0;
      i18 = 518;
      break;
     }
    }
    if ((i18 | 0) == 517) {
     STACKTOP = i3;
     return i12 | 0;
    } else if ((i18 | 0) == 518) {
     STACKTOP = i3;
     return i12 | 0;
    }
    break;
   }
  case 4:
  case 5:
  case 6:
  case 7:
  case 10:
  case 11:
  case 12:
   {
    if (!(__ZNK7WebCore7Element13hasAttributesEv(HEAP32[i8 >> 2] | 0) | 0)) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i11 = HEAP32[i9 >> 2] | 0;
    i17 = (HEAP32[i11 + 4 >> 2] | 0) + 16 | 0;
    if ((HEAP8[i1 + 1 | 0] & 1) == 0) {
     i20 = 1;
     i21 = i11;
    } else {
     i11 = __ZN7WebCore12HTMLDocument24isCaseSensitiveAttributeERKNS_13QualifiedNameE(i17) | 0;
     i20 = i11;
     i21 = HEAP32[i9 >> 2] | 0;
    }
    i11 = HEAP32[i8 >> 2] | 0;
    i16 = i11 + 48 | 0;
    i13 = HEAP32[i16 >> 2] | 0;
    i19 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i19 & 1 | 0) == 0) {
     i22 = i19 >>> 1 & 134217727;
    } else {
     i22 = HEAP32[i13 + 32 >> 2] | 0;
    }
    if ((i22 | 0) == 0) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i23 = i17 | 0;
    i17 = i11 + 12 | 0;
    i11 = i21;
    i24 = i21 + 2 | 0;
    i25 = i21 + 4 | 0;
    i26 = i25 | 0;
    i27 = i25;
    i25 = 0;
    i28 = i13;
    i13 = i19;
    while (1) {
     i19 = (i13 & 1 | 0) == 0;
     if (i19) {
      i29 = i13 >>> 1 & 134217727;
     } else {
      i29 = HEAP32[i28 + 32 >> 2] | 0;
     }
     if (i29 >>> 0 <= i25 >>> 0) {
      i18 = 33;
      break;
     }
     if (i19) {
      i30 = i28 + 20 | 0;
     } else {
      i30 = HEAP32[i28 + 24 >> 2] | 0;
     }
     i19 = HEAP32[i23 >> 2] | 0;
     if ((HEAP32[i17 >> 2] & 16 | 0) == 0) {
      i31 = i19 + 12 | 0;
     } else {
      i31 = (HEAP32[i27 >> 2] | 0) + 20 | 0;
     }
     i32 = HEAP32[i30 + (i25 << 3) >> 2] | 0;
     L60 : do {
      if ((HEAP32[i31 >> 2] | 0) == (HEAP32[i32 + 12 >> 2] | 0)) {
       if ((HEAP32[i19 + 8 >> 2] | 0) != (HEAP32[__ZN3WTF8starAtomE >> 2] | 0)) {
        if ((HEAP32[i19 + 16 >> 2] | 0) != (HEAP32[i32 + 16 >> 2] | 0)) {
         break;
        }
       }
       if ((HEAP8[i24] & 4) == 0) {
        i33 = i26;
       } else {
        i33 = (HEAP32[i27 >> 2] | 0) + 4 | 0;
       }
       i34 = i30 + (i25 << 3) + 4 | 0;
       i35 = HEAP32[i34 >> 2] | 0;
       if ((i35 | 0) == 0) {
        break;
       }
       switch ((HEAP32[i11 >> 2] | 0) >>> 3 & 15 | 0) {
       case 4:
        {
         i36 = HEAP32[i33 >> 2] | 0;
         if (i20) {
          if ((i36 | 0) == (i35 | 0)) {
           break L1;
          } else {
           break L60;
          }
         } else {
          if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(i36, i35) | 0) {
           break L1;
          } else {
           break L60;
          }
         }
         break;
        }
       case 6:
        {
         i36 = HEAP32[i33 >> 2] | 0;
         if ((i36 | 0) == 0) {
          break L60;
         }
         L76 : do {
          if ((HEAP32[i36 + 16 >> 2] & 32 | 0) == 0) {
           i37 = HEAP32[i36 + 8 >> 2] | 0;
           i38 = HEAP32[i36 + 4 >> 2] | 0;
           i39 = 0;
           while (1) {
            if (i39 >>> 0 >= i38 >>> 0) {
             i40 = i38;
             break L76;
            }
            if ((HEAP16[i37 + (i39 << 1) >> 1] | 0) == 32) {
             i41 = i39;
             i42 = i38;
             i18 = 58;
             break;
            } else {
             i39 = i39 + 1 | 0;
            }
           }
          } else {
           i39 = HEAP32[i36 + 8 >> 2] | 0;
           i38 = HEAP32[i36 + 4 >> 2] | 0;
           i37 = 0;
           while (1) {
            if (i37 >>> 0 >= i38 >>> 0) {
             i40 = i38;
             break L76;
            }
            if ((HEAP8[i39 + i37 | 0] | 0) == 32) {
             i41 = i37;
             i42 = i38;
             i18 = 58;
             break;
            } else {
             i37 = i37 + 1 | 0;
            }
           }
          }
         } while (0);
         if ((i18 | 0) == 58) {
          i18 = 0;
          if ((i41 | 0) == -1) {
           i40 = i42;
          } else {
           break L60;
          }
         }
         if ((i40 | 0) == 0) {
          break L60;
         }
         if (i20) {
          i37 = i35;
          i38 = 0;
          i39 = i36;
          while (1) {
           i43 = __ZN3WTF10StringImpl4findEPS0_j(i37, i39 | 0, i38) | 0;
           do {
            if ((i43 | 0) == 0) {
             i18 = 68;
            } else if ((i43 | 0) == (-1 | 0)) {
             break L60;
            } else {
             i44 = i43 - 1 | 0;
             i45 = HEAP32[i34 >> 2] | 0;
             if ((i45 | 0) == 0) {
              break L60;
             }
             if ((HEAP32[i45 + 4 >> 2] | 0) >>> 0 <= i44 >>> 0) {
              i46 = i45;
              break;
             }
             i47 = i45 + 8 | 0;
             if ((HEAP32[i45 + 16 >> 2] & 32 | 0) == 0) {
              i48 = HEAP16[(HEAP32[i47 >> 2] | 0) + (i44 << 1) >> 1] | 0;
             } else {
              i48 = HEAPU8[(HEAP32[i47 >> 2] | 0) + i44 | 0] | 0;
             }
             if (i48 << 16 >> 16 == 32) {
              i18 = 68;
             } else {
              i49 = i45;
              i18 = 79;
             }
            }
           } while (0);
           do {
            if ((i18 | 0) == 68) {
             i18 = 0;
             i45 = HEAP32[i33 >> 2] | 0;
             if ((i45 | 0) == 0) {
              i50 = 0;
             } else {
              i50 = HEAP32[i45 + 4 >> 2] | 0;
             }
             i45 = i50 + i43 | 0;
             i44 = HEAP32[i34 >> 2] | 0;
             i47 = (i44 | 0) == 0;
             if (i47) {
              i51 = 0;
             } else {
              i51 = HEAP32[i44 + 4 >> 2] | 0;
             }
             if ((i45 | 0) == (i51 | 0)) {
              break L1;
             }
             if (i47) {
              break L60;
             }
             if ((HEAP32[i44 + 4 >> 2] | 0) >>> 0 <= i45 >>> 0) {
              i46 = i44;
              break;
             }
             i47 = i44 + 8 | 0;
             if ((HEAP32[i44 + 16 >> 2] & 32 | 0) == 0) {
              i52 = HEAP16[(HEAP32[i47 >> 2] | 0) + (i45 << 1) >> 1] | 0;
             } else {
              i52 = HEAPU8[(HEAP32[i47 >> 2] | 0) + i45 | 0] | 0;
             }
             if (i52 << 16 >> 16 == 32) {
              break L1;
             } else {
              i49 = i44;
              i18 = 79;
             }
            }
           } while (0);
           if ((i18 | 0) == 79) {
            i18 = 0;
            if ((i49 | 0) == 0) {
             break L60;
            } else {
             i46 = i49;
            }
           }
           i37 = i46;
           i38 = i43 + 1 | 0;
           i39 = HEAP32[i33 >> 2] | 0;
          }
         } else {
          i39 = i35;
          i38 = 0;
          i37 = i36;
          while (1) {
           i44 = __ZN3WTF10StringImpl16findIgnoringCaseEPS0_j(i39, i37 | 0, i38) | 0;
           do {
            if ((i44 | 0) == 0) {
             i18 = 88;
            } else if ((i44 | 0) == (-1 | 0)) {
             break L60;
            } else {
             i45 = i44 - 1 | 0;
             i47 = HEAP32[i34 >> 2] | 0;
             if ((i47 | 0) == 0) {
              break L60;
             }
             if ((HEAP32[i47 + 4 >> 2] | 0) >>> 0 <= i45 >>> 0) {
              i53 = i47;
              break;
             }
             i54 = i47 + 8 | 0;
             if ((HEAP32[i47 + 16 >> 2] & 32 | 0) == 0) {
              i55 = HEAP16[(HEAP32[i54 >> 2] | 0) + (i45 << 1) >> 1] | 0;
             } else {
              i55 = HEAPU8[(HEAP32[i54 >> 2] | 0) + i45 | 0] | 0;
             }
             if (i55 << 16 >> 16 == 32) {
              i18 = 88;
             } else {
              i56 = i47;
              i18 = 99;
             }
            }
           } while (0);
           do {
            if ((i18 | 0) == 88) {
             i18 = 0;
             i43 = HEAP32[i33 >> 2] | 0;
             if ((i43 | 0) == 0) {
              i57 = 0;
             } else {
              i57 = HEAP32[i43 + 4 >> 2] | 0;
             }
             i43 = i57 + i44 | 0;
             i47 = HEAP32[i34 >> 2] | 0;
             i45 = (i47 | 0) == 0;
             if (i45) {
              i58 = 0;
             } else {
              i58 = HEAP32[i47 + 4 >> 2] | 0;
             }
             if ((i43 | 0) == (i58 | 0)) {
              break L1;
             }
             if (i45) {
              break L60;
             }
             if ((HEAP32[i47 + 4 >> 2] | 0) >>> 0 <= i43 >>> 0) {
              i53 = i47;
              break;
             }
             i45 = i47 + 8 | 0;
             if ((HEAP32[i47 + 16 >> 2] & 32 | 0) == 0) {
              i59 = HEAP16[(HEAP32[i45 >> 2] | 0) + (i43 << 1) >> 1] | 0;
             } else {
              i59 = HEAPU8[(HEAP32[i45 >> 2] | 0) + i43 | 0] | 0;
             }
             if (i59 << 16 >> 16 == 32) {
              break L1;
             } else {
              i56 = i47;
              i18 = 99;
             }
            }
           } while (0);
           if ((i18 | 0) == 99) {
            i18 = 0;
            if ((i56 | 0) == 0) {
             break L60;
            } else {
             i53 = i56;
            }
           }
           i39 = i53;
           i38 = i44 + 1 | 0;
           i37 = HEAP32[i33 >> 2] | 0;
          }
         }
         break;
        }
       case 10:
        {
         i37 = HEAP32[i33 >> 2] | 0;
         if (i20) {
          i60 = __ZN3WTF10StringImpl4findEPS0_j(i35, i37, 0) | 0;
         } else {
          i60 = __ZN3WTF10StringImpl16findIgnoringCaseEPS0_j(i35, i37, 0) | 0;
         }
         if ((i60 | 0) == -1) {
          break L60;
         }
         i37 = HEAP32[i33 >> 2] | 0;
         if ((i37 | 0) == 0) {
          break L60;
         }
         if ((HEAP32[i37 + 4 >> 2] | 0) == 0) {
          break L60;
         } else {
          break L1;
         }
         break;
        }
       case 11:
        {
         i37 = HEAP32[i33 >> 2] | 0;
         if (i20) {
          if (!(__ZNK3WTF10StringImpl10startsWithEPKS0_(i35, i37) | 0)) {
           break L60;
          }
         } else {
          if ((__ZN3WTF10StringImpl23reverseFindIgnoringCaseEPS0_j(i35, i37, 0) | 0) != 0) {
           break L60;
          }
         }
         i37 = HEAP32[i33 >> 2] | 0;
         if ((i37 | 0) == 0) {
          break L60;
         }
         if ((HEAP32[i37 + 4 >> 2] | 0) == 0) {
          break L60;
         } else {
          break L1;
         }
         break;
        }
       case 12:
        {
         if (!(__ZN3WTF10StringImpl8endsWithEPS0_b(i35, HEAP32[i33 >> 2] | 0, i20) | 0)) {
          break L60;
         }
         i37 = HEAP32[i33 >> 2] | 0;
         if ((i37 | 0) == 0) {
          break L60;
         }
         if ((HEAP32[i37 + 4 >> 2] | 0) == 0) {
          break L60;
         } else {
          break L1;
         }
         break;
        }
       case 7:
        {
         i37 = HEAP32[i33 >> 2] | 0;
         i38 = i37 | 0;
         if ((i37 | 0) == 0) {
          i61 = 0;
         } else {
          i61 = HEAP32[i37 + 4 >> 2] | 0;
         }
         if ((HEAP32[i35 + 4 >> 2] | 0) >>> 0 < i61 >>> 0) {
          break L60;
         }
         if (i20) {
          if (!(__ZNK3WTF10StringImpl10startsWithEPKS0_(i35, i38) | 0)) {
           break L60;
          }
         } else {
          if ((__ZN3WTF10StringImpl23reverseFindIgnoringCaseEPS0_j(i35, i38, 0) | 0) != 0) {
           break L60;
          }
         }
         i38 = HEAP32[i34 >> 2] | 0;
         i37 = (i38 | 0) == 0;
         if (i37) {
          i62 = 0;
         } else {
          i62 = HEAP32[i38 + 4 >> 2] | 0;
         }
         i39 = HEAP32[i33 >> 2] | 0;
         i36 = (i39 | 0) == 0;
         if (i36) {
          i63 = 0;
         } else {
          i63 = HEAP32[i39 + 4 >> 2] | 0;
         }
         if ((i62 | 0) == (i63 | 0)) {
          break L1;
         }
         if (i36) {
          i64 = 0;
         } else {
          i64 = HEAP32[i39 + 4 >> 2] | 0;
         }
         if (i37) {
          break L60;
         }
         if ((HEAP32[i38 + 4 >> 2] | 0) >>> 0 <= i64 >>> 0) {
          break L60;
         }
         i37 = i38 + 8 | 0;
         if ((HEAP32[i38 + 16 >> 2] & 32 | 0) == 0) {
          i65 = HEAP16[(HEAP32[i37 >> 2] | 0) + (i64 << 1) >> 1] | 0;
         } else {
          i65 = HEAPU8[(HEAP32[i37 >> 2] | 0) + i64 | 0] | 0;
         }
         if (i65 << 16 >> 16 == 45) {
          break L1;
         } else {
          break L60;
         }
         break;
        }
       default:
        {
         break L1;
        }
       }
      }
     } while (0);
     i32 = i25 + 1 | 0;
     if (i32 >>> 0 >= i22 >>> 0) {
      i12 = 0;
      i18 = 530;
      break;
     }
     i19 = HEAP32[i16 >> 2] | 0;
     i25 = i32;
     i28 = i19;
     i13 = HEAP32[i19 + 4 >> 2] | 0;
    }
    if ((i18 | 0) == 33) {
     _WTFCrash();
     return 0;
    } else if ((i18 | 0) == 530) {
     STACKTOP = i3;
     return i12 | 0;
    }
    break;
   }
  case 1:
   {
    i13 = HEAP32[i8 >> 2] | 0;
    i28 = HEAP32[i10 + 4 >> 2] | 0;
    if ((i28 | 0) == (HEAP32[__ZN7WebCore7anyNameE >> 2] | 0)) {
     i12 = 1;
     STACKTOP = i3;
     return i12 | 0;
    }
    i25 = HEAP32[i28 + 12 >> 2] | 0;
    i16 = HEAP32[__ZN3WTF8starAtomE >> 2] | 0;
    do {
     if ((i25 | 0) != (i16 | 0)) {
      if ((i25 | 0) == (HEAP32[(HEAP32[i13 + 44 >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      } else {
       i12 = 0;
      }
      STACKTOP = i3;
      return i12 | 0;
     }
    } while (0);
    i25 = HEAP32[i28 + 16 >> 2] | 0;
    if ((i25 | 0) == (i16 | 0)) {
     i12 = 1;
     STACKTOP = i3;
     return i12 | 0;
    }
    i12 = (i25 | 0) == (HEAP32[(HEAP32[i13 + 44 >> 2] | 0) + 16 >> 2] | 0);
    STACKTOP = i3;
    return i12 | 0;
   }
  default:
   {}
  }
 } while (0);
 i10 = HEAP32[i9 >> 2] | 0;
 i22 = i10;
 i65 = HEAP32[i22 >> 2] | 0;
 if ((i65 & 120 | 0) != 64) {
  i12 = 1;
  STACKTOP = i3;
  return i12 | 0;
 }
 if ((i65 & 32640 | 0) == 0) {
  __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i10);
  i66 = HEAP32[i22 >> 2] | 0;
 } else {
  i66 = i65;
 }
 L211 : do {
  if ((i66 & 32640 | 0) == 5120) {
   i65 = HEAP32[i9 >> 2] | 0;
   if ((HEAP8[i65 + 2 | 0] & 4) == 0) {
    i12 = 0;
    STACKTOP = i3;
    return i12 | 0;
   }
   i22 = HEAP32[(HEAP32[i65 + 4 >> 2] | 0) + 28 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i12 = 0;
    STACKTOP = i3;
    return i12 | 0;
   }
   _memcpy(i4 | 0, i2 | 0, 36) | 0;
   HEAP8[i4 + 32 | 0] = 1;
   i65 = HEAP32[i22 >> 2] | 0;
   i22 = i4 | 0;
   HEAP32[i22 >> 2] = i65;
   if ((i65 | 0) == 0) {
    break;
   }
   i10 = i4 + 12 | 0;
   i64 = i65;
   while (1) {
    i65 = i64;
    i63 = HEAP32[i65 >> 2] | 0;
    if ((i63 & 32640 | 0) == 0) {
     __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i64);
     i67 = HEAP32[i65 >> 2] | 0;
    } else {
     i67 = i63;
    }
    i63 = i67 & 32640;
    if ((i63 | 0) == 0) {
     __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i64);
     i68 = HEAP32[i65 >> 2] | 0;
    } else if ((i63 | 0) == 2048) {
     i12 = 1;
     i18 = 534;
     break;
    } else {
     i68 = i67;
    }
    if ((i68 & 32640 | 0) == 1920) {
     if ((HEAP32[i10 >> 2] | 0) == 1) {
      i12 = 1;
      i18 = 535;
      break;
     }
    }
    if (!(__ZNK7WebCore15SelectorChecker8checkOneERKNS0_23SelectorCheckingContextE(i1, i4) | 0)) {
     i12 = 1;
     i18 = 536;
     break;
    }
    i63 = HEAP32[i22 >> 2] | 0;
    i64 = (HEAP8[i63 + 2 | 0] & 2) != 0 ? 0 : i63 + 8 | 0;
    HEAP32[i22 >> 2] = i64;
    if ((i64 | 0) == 0) {
     break L211;
    }
   }
   if ((i18 | 0) == 534) {
    STACKTOP = i3;
    return i12 | 0;
   } else if ((i18 | 0) == 535) {
    STACKTOP = i3;
    return i12 | 0;
   } else if ((i18 | 0) == 536) {
    STACKTOP = i3;
    return i12 | 0;
   }
  } else {
   if ((HEAP8[i2 + 33 | 0] & 1) != 0) {
    i12 = __ZNK7WebCore15SelectorChecker25checkScrollbarPseudoClassERKNS0_23SelectorCheckingContextEPNS_8DocumentEPKNS_11CSSSelectorE(0, i2, HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, HEAP32[i9 >> 2] | 0) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
   if ((HEAP8[i2 + 34 | 0] & 1) == 0) {
    break;
   }
   i64 = HEAP32[i9 >> 2] | 0;
   i22 = i64;
   i10 = HEAP32[i22 >> 2] | 0;
   if ((i10 & 32640 | 0) == 0) {
    __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i64);
    i69 = HEAP32[i22 >> 2] | 0;
   } else {
    i69 = i10;
   }
   if ((i69 & 32640 | 0) != 6656) {
    break;
   }
   i12 = (HEAP8[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 32 >> 2] | 0) + 8 | 0] & 1) == 0;
   STACKTOP = i3;
   return i12 | 0;
  }
 } while (0);
 i69 = HEAP32[i9 >> 2] | 0;
 i4 = i69;
 i68 = HEAP32[i4 >> 2] | 0;
 if ((i68 & 32640 | 0) == 0) {
  __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i69);
  i70 = HEAP32[i4 >> 2] | 0;
 } else {
  i70 = i68;
 }
 L251 : do {
  switch (i70 >>> 7 & 255 | 0) {
  case 2:
   {
    i68 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
    L253 : do {
     if ((i68 | 0) == 0) {
      i71 = 1;
     } else {
      i4 = i68;
      while (1) {
       i69 = HEAP32[i4 + 12 >> 2] | 0;
       if ((i69 & 4 | 0) != 0) {
        i71 = 0;
        break L253;
       }
       do {
        if ((i69 & 1 | 0) != 0) {
         i67 = HEAP32[i4 + 36 >> 2] | 0;
         if ((i67 | 0) == 0) {
          break;
         }
         i66 = i67 | 0;
         i10 = HEAP32[i66 >> 2] | 0;
         HEAP32[i66 >> 2] = i10 + 2;
         i22 = (HEAP32[i67 + 4 >> 2] | 0) == 0;
         if ((i10 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i67);
          if (i22) {
           break;
          } else {
           i71 = 0;
           break L253;
          }
         } else {
          HEAP32[i66 >> 2] = i10;
          if (i22) {
           break;
          } else {
           i71 = 0;
           break L253;
          }
         }
        }
       } while (0);
       i69 = HEAP32[i4 + 28 >> 2] | 0;
       if ((i69 | 0) == 0) {
        i71 = 1;
        break;
       } else {
        i4 = i69;
       }
      }
     }
    } while (0);
    if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
     i12 = i71;
     STACKTOP = i3;
     return i12 | 0;
    }
    __ZN7WebCore7Element23setStyleAffectedByEmptyEv(HEAP32[i8 >> 2] | 0);
    i68 = HEAP32[i2 + 20 >> 2] | 0;
    if ((i68 | 0) != 0) {
     i4 = i68 + 52 | 0;
     HEAP32[i4 >> 2] = (i71 & 1) << 21 | HEAP32[i4 >> 2] & -3145729 | 1048576;
     i12 = i71;
     STACKTOP = i3;
     return i12 | 0;
    }
    i4 = HEAP32[i8 >> 2] | 0;
    i68 = i4 + 32 | 0;
    if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
     i72 = i68 | 0;
    } else {
     i72 = HEAP32[i68 >> 2] | 0;
    }
    i68 = HEAP32[i72 >> 2] | 0;
    do {
     if ((i68 | 0) == 0) {
      i73 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 236 >> 2] & 1](i4 | 0) | 0;
     } else {
      if ((HEAP32[i68 + 20 >> 2] & 768 | 0) == 256) {
       i73 = HEAP32[(HEAP32[i68 + 8 >> 2] | 0) + 36 >> 2] | 0;
       break;
      } else {
       i73 = HEAP32[i68 + 36 >> 2] | 0;
       break;
      }
     }
    } while (0);
    if ((i73 | 0) == 0) {
     i12 = i71;
     STACKTOP = i3;
     return i12 | 0;
    }
    i68 = HEAP32[i8 >> 2] | 0;
    i4 = HEAP32[(HEAP32[i68 + 20 >> 2] | 0) + 8 >> 2] | 0;
    do {
     if ((HEAP8[i4 + 912 | 0] & 1) == 0) {
      if ((HEAP8[i4 + 913 | 0] & 1) != 0) {
       i74 = i68;
       break;
      }
      i69 = i68 + 32 | 0;
      if ((HEAP32[i68 + 12 >> 2] & 2048 | 0) == 0) {
       i75 = i69 | 0;
      } else {
       i75 = HEAP32[i69 >> 2] | 0;
      }
      i69 = HEAP32[i75 >> 2] | 0;
      do {
       if ((i69 | 0) == 0) {
        i76 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i68 >> 2] | 0) + 236 >> 2] & 1](i68 | 0) | 0;
       } else {
        if ((HEAP32[i69 + 20 >> 2] & 768 | 0) == 256) {
         i76 = HEAP32[(HEAP32[i69 + 8 >> 2] | 0) + 36 >> 2] | 0;
         break;
        } else {
         i76 = HEAP32[i69 + 36 >> 2] | 0;
         break;
        }
       }
      } while (0);
      if ((HEAP32[i76 + 52 >> 2] & 1048576 | 0) == 0) {
       i12 = i71;
       STACKTOP = i3;
       return i12 | 0;
      } else {
       i74 = HEAP32[i8 >> 2] | 0;
       break;
      }
     } else {
      i74 = i68;
     }
    } while (0);
    i68 = i74 + 32 | 0;
    if ((HEAP32[i74 + 12 >> 2] & 2048 | 0) == 0) {
     i77 = i68 | 0;
    } else {
     i77 = HEAP32[i68 >> 2] | 0;
    }
    i68 = HEAP32[i77 >> 2] | 0;
    do {
     if ((i68 | 0) == 0) {
      i78 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i74 >> 2] | 0) + 236 >> 2] & 1](i74 | 0) | 0;
     } else {
      if ((HEAP32[i68 + 20 >> 2] & 768 | 0) == 256) {
       i78 = HEAP32[(HEAP32[i68 + 8 >> 2] | 0) + 36 >> 2] | 0;
       break;
      } else {
       i78 = HEAP32[i68 + 36 >> 2] | 0;
       break;
      }
     }
    } while (0);
    i68 = i78 + 52 | 0;
    HEAP32[i68 >> 2] = (i71 & 1) << 21 | HEAP32[i68 >> 2] & -3145729 | 1048576;
    i12 = i71;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 3:
   {
    i68 = HEAP32[i8 >> 2] | 0;
    i4 = HEAP32[i68 + 16 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break L251;
    }
    i69 = i4 + 12 | 0;
    i4 = HEAP32[i69 >> 2] | 0;
    if ((i4 & 4 | 0) == 0) {
     break L251;
    }
    i34 = i68 + 24 | 0;
    while (1) {
     i35 = HEAP32[i34 >> 2] | 0;
     if ((i35 | 0) == 0) {
      i79 = 0;
      break;
     }
     if ((HEAP32[i35 + 12 >> 2] & 4 | 0) == 0) {
      i34 = i35 + 24 | 0;
     } else {
      i79 = i35;
      break;
     }
    }
    i34 = (i79 | 0) == 0;
    if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
     i12 = i34;
     STACKTOP = i3;
     return i12 | 0;
    }
    i35 = HEAP32[i2 + 20 >> 2] | 0;
    do {
     if ((i35 | 0) == 0) {
      i22 = i68 + 32 | 0;
      if ((HEAP32[i68 + 12 >> 2] & 2048 | 0) == 0) {
       i80 = i22 | 0;
      } else {
       i80 = HEAP32[i22 >> 2] | 0;
      }
      i22 = HEAP32[i80 >> 2] | 0;
      if ((i22 | 0) == 0) {
       i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i68 >> 2] | 0) + 236 >> 2] & 1](i68 | 0) | 0;
       i81 = i10;
       i82 = HEAP32[i69 >> 2] | 0;
       break;
      }
      if ((HEAP32[i22 + 20 >> 2] & 768 | 0) == 256) {
       i81 = HEAP32[(HEAP32[i22 + 8 >> 2] | 0) + 36 >> 2] | 0;
       i82 = i4;
       break;
      } else {
       i81 = HEAP32[i22 + 36 >> 2] | 0;
       i82 = i4;
       break;
      }
     } else {
      i81 = i35;
      i82 = i4;
     }
    } while (0);
    HEAP32[i69 >> 2] = i82 | 33554432;
    if ((i81 | 0) == 0 | i34 ^ 1) {
     i12 = i34;
     STACKTOP = i3;
     return i12 | 0;
    }
    i4 = i81 + 52 | 0;
    HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | 5242880;
    i12 = i34;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 4:
   {
    i4 = HEAP32[i8 >> 2] | 0;
    i35 = HEAP32[i4 + 16 >> 2] | 0;
    if ((i35 | 0) == 0) {
     break L251;
    }
    if ((HEAP32[i35 + 12 >> 2] & 4 | 0) == 0) {
     break L251;
    }
    i68 = i35;
    i35 = i4 + 24 | 0;
    while (1) {
     i83 = HEAP32[i35 >> 2] | 0;
     if ((i83 | 0) == 0) {
      i84 = 1;
      break;
     }
     if ((HEAP32[i83 + 12 >> 2] & 4 | 0) == 0) {
      i35 = i83 + 24 | 0;
     } else {
      i18 = 225;
      break;
     }
    }
    L349 : do {
     if ((i18 | 0) == 225) {
      i35 = HEAP32[i4 + 44 >> 2] | 0;
      i34 = i35 + 16 | 0;
      i69 = HEAP32[i83 + 44 >> 2] | 0;
      if ((i69 | 0) == (i35 | 0)) {
       i84 = 0;
       break;
      }
      i22 = HEAP32[i35 + 12 >> 2] | 0;
      i10 = i83;
      i66 = i69;
      while (1) {
       if ((HEAP32[i66 + 12 >> 2] | 0) == (i22 | 0)) {
        if ((HEAP32[i66 + 16 >> 2] | 0) == (HEAP32[i34 >> 2] | 0)) {
         i84 = 0;
         break L349;
        } else {
         i85 = i10;
        }
       } else {
        i85 = i10;
       }
       while (1) {
        i85 = HEAP32[i85 + 24 >> 2] | 0;
        if ((i85 | 0) == 0) {
         i84 = 1;
         break L349;
        }
        if ((HEAP32[i85 + 12 >> 2] & 4 | 0) != 0) {
         break;
        }
       }
       i69 = HEAP32[i85 + 44 >> 2] | 0;
       if ((i69 | 0) == (i35 | 0)) {
        i84 = 0;
        break;
       } else {
        i10 = i85;
        i66 = i69;
       }
      }
     }
    } while (0);
    if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
     i12 = i84;
     STACKTOP = i3;
     return i12 | 0;
    }
    __ZN7WebCore7Element43setChildrenAffectedByForwardPositionalRulesEPS0_(i68);
    i12 = i84;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 5:
   {
    i4 = HEAP32[i8 >> 2] | 0;
    i66 = HEAP32[i4 + 16 >> 2] | 0;
    if ((i66 | 0) == 0) {
     break L251;
    }
    i10 = i66 + 12 | 0;
    i66 = HEAP32[i10 >> 2] | 0;
    if ((i66 & 4 | 0) == 0) {
     break L251;
    }
    if ((i66 & 8192 | 0) == 0) {
     i86 = 0;
    } else {
     i35 = i4 + 28 | 0;
     while (1) {
      i34 = HEAP32[i35 >> 2] | 0;
      if ((i34 | 0) == 0) {
       i87 = 0;
       break;
      }
      if ((HEAP32[i34 + 12 >> 2] & 4 | 0) == 0) {
       i35 = i34 + 28 | 0;
      } else {
       i87 = i34;
       break;
      }
     }
     i86 = (i87 | 0) == 0;
    }
    if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
     i12 = i86;
     STACKTOP = i3;
     return i12 | 0;
    }
    i35 = HEAP32[i2 + 20 >> 2] | 0;
    do {
     if ((i35 | 0) == 0) {
      i68 = i4 + 32 | 0;
      if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
       i88 = i68 | 0;
      } else {
       i88 = HEAP32[i68 >> 2] | 0;
      }
      i68 = HEAP32[i88 >> 2] | 0;
      if ((i68 | 0) == 0) {
       i34 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 236 >> 2] & 1](i4 | 0) | 0;
       i89 = i34;
       i90 = HEAP32[i10 >> 2] | 0;
       break;
      }
      if ((HEAP32[i68 + 20 >> 2] & 768 | 0) == 256) {
       i89 = HEAP32[(HEAP32[i68 + 8 >> 2] | 0) + 36 >> 2] | 0;
       i90 = i66;
       break;
      } else {
       i89 = HEAP32[i68 + 36 >> 2] | 0;
       i90 = i66;
       break;
      }
     } else {
      i89 = i35;
      i90 = i66;
     }
    } while (0);
    HEAP32[i10 >> 2] = i90 | 67108864;
    if ((i89 | 0) == 0 | i86 ^ 1) {
     i12 = i86;
     STACKTOP = i3;
     return i12 | 0;
    }
    i66 = i89 + 52 | 0;
    HEAP32[i66 >> 2] = HEAP32[i66 >> 2] | 9437184;
    i12 = i86;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 6:
   {
    i66 = HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] | 0;
    if ((i66 | 0) == 0) {
     break L251;
    }
    i35 = i66 + 12 | 0;
    i4 = HEAP32[i35 >> 2] | 0;
    if ((i4 & 4 | 0) == 0) {
     break L251;
    }
    if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
     __ZN7WebCore7Element44setChildrenAffectedByBackwardPositionalRulesEv(i66);
     i91 = HEAP32[i35 >> 2] | 0;
    } else {
     i91 = i4;
    }
    if ((i91 & 8192 | 0) == 0) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i4 = HEAP32[i8 >> 2] | 0;
    i35 = i4 + 28 | 0;
    while (1) {
     i92 = HEAP32[i35 >> 2] | 0;
     if ((i92 | 0) == 0) {
      i12 = 1;
      i18 = 554;
      break;
     }
     if ((HEAP32[i92 + 12 >> 2] & 4 | 0) == 0) {
      i35 = i92 + 28 | 0;
     } else {
      break;
     }
    }
    if ((i18 | 0) == 554) {
     STACKTOP = i3;
     return i12 | 0;
    }
    i35 = HEAP32[i4 + 44 >> 2] | 0;
    i10 = i35 + 16 | 0;
    i66 = HEAP32[i92 + 44 >> 2] | 0;
    if ((i66 | 0) == (i35 | 0)) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i68 = HEAP32[i35 + 12 >> 2] | 0;
    i34 = i92;
    i22 = i66;
    L413 : while (1) {
     if ((HEAP32[i22 + 12 >> 2] | 0) == (i68 | 0)) {
      if ((HEAP32[i22 + 16 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
       i12 = 0;
       i18 = 557;
       break;
      } else {
       i93 = i34;
      }
     } else {
      i93 = i34;
     }
     while (1) {
      i93 = HEAP32[i93 + 28 >> 2] | 0;
      if ((i93 | 0) == 0) {
       i12 = 1;
       i18 = 558;
       break L413;
      }
      if ((HEAP32[i93 + 12 >> 2] & 4 | 0) != 0) {
       break;
      }
     }
     i66 = HEAP32[i93 + 44 >> 2] | 0;
     if ((i66 | 0) == (i35 | 0)) {
      i12 = 0;
      i18 = 556;
      break;
     } else {
      i34 = i93;
      i22 = i66;
     }
    }
    if ((i18 | 0) == 556) {
     STACKTOP = i3;
     return i12 | 0;
    } else if ((i18 | 0) == 557) {
     STACKTOP = i3;
     return i12 | 0;
    } else if ((i18 | 0) == 558) {
     STACKTOP = i3;
     return i12 | 0;
    }
    break;
   }
  case 7:
   {
    i22 = HEAP32[i8 >> 2] | 0;
    i34 = HEAP32[i22 + 16 >> 2] | 0;
    if ((i34 | 0) == 0) {
     break L251;
    }
    i35 = i34 + 12 | 0;
    i34 = HEAP32[i35 >> 2] | 0;
    if ((i34 & 4 | 0) == 0) {
     break L251;
    }
    i10 = i22 + 24 | 0;
    while (1) {
     i68 = HEAP32[i10 >> 2] | 0;
     if ((i68 | 0) == 0) {
      i18 = 273;
      break;
     }
     if ((HEAP32[i68 + 12 >> 2] & 4 | 0) == 0) {
      i10 = i68 + 24 | 0;
     } else {
      i94 = 0;
      i95 = 1;
      break;
     }
    }
    do {
     if ((i18 | 0) == 273) {
      if ((i34 & 8192 | 0) == 0) {
       i94 = 0;
       i95 = 0;
       break;
      }
      i10 = i22 + 28 | 0;
      while (1) {
       i68 = HEAP32[i10 >> 2] | 0;
       if ((i68 | 0) == 0) {
        i96 = 0;
        break;
       }
       if ((HEAP32[i68 + 12 >> 2] & 4 | 0) == 0) {
        i10 = i68 + 28 | 0;
       } else {
        i96 = i68;
        break;
       }
      }
      i94 = (i96 | 0) == 0;
      i95 = 0;
     }
    } while (0);
    if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
     i12 = i94;
     STACKTOP = i3;
     return i12 | 0;
    }
    i10 = HEAP32[i2 + 20 >> 2] | 0;
    do {
     if ((i10 | 0) == 0) {
      i68 = i22 + 32 | 0;
      if ((HEAP32[i22 + 12 >> 2] & 2048 | 0) == 0) {
       i97 = i68 | 0;
      } else {
       i97 = HEAP32[i68 >> 2] | 0;
      }
      i68 = HEAP32[i97 >> 2] | 0;
      if ((i68 | 0) == 0) {
       i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 236 >> 2] & 1](i22 | 0) | 0;
       i98 = i4;
       i99 = HEAP32[i35 >> 2] | 0;
       break;
      }
      if ((HEAP32[i68 + 20 >> 2] & 768 | 0) == 256) {
       i98 = HEAP32[(HEAP32[i68 + 8 >> 2] | 0) + 36 >> 2] | 0;
       i99 = i34;
       break;
      } else {
       i98 = HEAP32[i68 + 36 >> 2] | 0;
       i99 = i34;
       break;
      }
     } else {
      i98 = i10;
      i99 = i34;
     }
    } while (0);
    HEAP32[i35 >> 2] = i99 | 100663296;
    i34 = (i98 | 0) == 0;
    if (!(i95 | i34)) {
     i10 = i98 + 52 | 0;
     HEAP32[i10 >> 2] = HEAP32[i10 >> 2] | 5242880;
    }
    if (i34 | i94 ^ 1) {
     i12 = i94;
     STACKTOP = i3;
     return i12 | 0;
    }
    i34 = i98 + 52 | 0;
    HEAP32[i34 >> 2] = HEAP32[i34 >> 2] | 9437184;
    i12 = i94;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 8:
   {
    i34 = HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] | 0;
    if ((i34 | 0) == 0) {
     break L251;
    }
    i10 = i34 + 12 | 0;
    i22 = HEAP32[i10 >> 2] | 0;
    if ((i22 & 4 | 0) == 0) {
     break L251;
    }
    i68 = i34;
    if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
     __ZN7WebCore7Element43setChildrenAffectedByForwardPositionalRulesEPS0_(i68);
     __ZN7WebCore7Element44setChildrenAffectedByBackwardPositionalRulesEv(i68);
     i100 = HEAP32[i10 >> 2] | 0;
    } else {
     i100 = i22;
    }
    if ((i100 & 8192 | 0) == 0) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i22 = HEAP32[i8 >> 2] | 0;
    i10 = i22 + 24 | 0;
    while (1) {
     i101 = HEAP32[i10 >> 2] | 0;
     if ((i101 | 0) == 0) {
      break;
     }
     if ((HEAP32[i101 + 12 >> 2] & 4 | 0) == 0) {
      i10 = i101 + 24 | 0;
     } else {
      i18 = 300;
      break;
     }
    }
    L474 : do {
     if ((i18 | 0) == 300) {
      i10 = HEAP32[i22 + 44 >> 2] | 0;
      i35 = i10 + 16 | 0;
      i68 = HEAP32[i101 + 44 >> 2] | 0;
      if ((i68 | 0) == (i10 | 0)) {
       i12 = 0;
       STACKTOP = i3;
       return i12 | 0;
      }
      i34 = HEAP32[i10 + 12 >> 2] | 0;
      i4 = i101;
      i66 = i68;
      while (1) {
       if ((HEAP32[i66 + 12 >> 2] | 0) == (i34 | 0)) {
        if ((HEAP32[i66 + 16 >> 2] | 0) == (HEAP32[i35 >> 2] | 0)) {
         i12 = 0;
         i18 = 565;
         break;
        } else {
         i102 = i4;
        }
       } else {
        i102 = i4;
       }
       while (1) {
        i102 = HEAP32[i102 + 24 >> 2] | 0;
        if ((i102 | 0) == 0) {
         break L474;
        }
        if ((HEAP32[i102 + 12 >> 2] & 4 | 0) != 0) {
         break;
        }
       }
       i68 = HEAP32[i102 + 44 >> 2] | 0;
       if ((i68 | 0) == (i10 | 0)) {
        i12 = 0;
        i18 = 564;
        break;
       } else {
        i4 = i102;
        i66 = i68;
       }
      }
      if ((i18 | 0) == 564) {
       STACKTOP = i3;
       return i12 | 0;
      } else if ((i18 | 0) == 565) {
       STACKTOP = i3;
       return i12 | 0;
      }
     }
    } while (0);
    i66 = i22 + 28 | 0;
    while (1) {
     i103 = HEAP32[i66 >> 2] | 0;
     if ((i103 | 0) == 0) {
      i12 = 1;
      i18 = 566;
      break;
     }
     if ((HEAP32[i103 + 12 >> 2] & 4 | 0) == 0) {
      i66 = i103 + 28 | 0;
     } else {
      break;
     }
    }
    if ((i18 | 0) == 566) {
     STACKTOP = i3;
     return i12 | 0;
    }
    i66 = HEAP32[i22 + 44 >> 2] | 0;
    i4 = i66 + 16 | 0;
    i10 = HEAP32[i103 + 44 >> 2] | 0;
    if ((i10 | 0) == (i66 | 0)) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i35 = HEAP32[i66 + 12 >> 2] | 0;
    i34 = i103;
    i68 = i10;
    L500 : while (1) {
     if ((HEAP32[i68 + 12 >> 2] | 0) == (i35 | 0)) {
      if ((HEAP32[i68 + 16 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
       i12 = 0;
       i18 = 569;
       break;
      } else {
       i104 = i34;
      }
     } else {
      i104 = i34;
     }
     while (1) {
      i104 = HEAP32[i104 + 28 >> 2] | 0;
      if ((i104 | 0) == 0) {
       i12 = 1;
       i18 = 570;
       break L500;
      }
      if ((HEAP32[i104 + 12 >> 2] & 4 | 0) != 0) {
       break;
      }
     }
     i10 = HEAP32[i104 + 44 >> 2] | 0;
     if ((i10 | 0) == (i66 | 0)) {
      i12 = 0;
      i18 = 568;
      break;
     } else {
      i34 = i104;
      i68 = i10;
     }
    }
    if ((i18 | 0) == 568) {
     STACKTOP = i3;
     return i12 | 0;
    } else if ((i18 | 0) == 569) {
     STACKTOP = i3;
     return i12 | 0;
    } else if ((i18 | 0) == 570) {
     STACKTOP = i3;
     return i12 | 0;
    }
    break;
   }
  case 11:
   {
    if (!(__ZNK7WebCore11CSSSelector8parseNthEv(HEAP32[i9 >> 2] | 0) | 0)) {
     break L251;
    }
    i68 = HEAP32[i8 >> 2] | 0;
    i34 = HEAP32[i68 + 16 >> 2] | 0;
    if ((i34 | 0) == 0) {
     break L251;
    }
    if ((HEAP32[i34 + 12 >> 2] & 4 | 0) == 0) {
     break L251;
    }
    i66 = i34;
    i34 = i68 + 24 | 0;
    while (1) {
     i68 = HEAP32[i34 >> 2] | 0;
     if ((i68 | 0) == 0) {
      i105 = 0;
      break;
     }
     i4 = HEAP32[i68 + 12 >> 2] | 0;
     if ((i4 & 4 | 0) == 0) {
      i34 = i68 + 24 | 0;
     } else {
      i106 = 0;
      i107 = i68;
      i108 = i4;
      i18 = 323;
      break;
     }
    }
    L519 : do {
     if ((i18 | 0) == 323) {
      L520 : while (1) {
       i18 = 0;
       if ((i108 & 2048 | 0) != 0) {
        i109 = __ZNK7WebCore7Element18rareDataChildIndexEv(i107) | 0;
        if ((i109 | 0) != 0) {
         break;
        }
       }
       i34 = i106 + 1 | 0;
       i4 = i107;
       while (1) {
        i68 = HEAP32[i4 + 24 >> 2] | 0;
        if ((i68 | 0) == 0) {
         i105 = i34;
         break L519;
        }
        i35 = HEAP32[i68 + 12 >> 2] | 0;
        if ((i35 & 4 | 0) == 0) {
         i4 = i68;
        } else {
         i106 = i34;
         i107 = i68;
         i108 = i35;
         i18 = 323;
         continue L520;
        }
       }
      }
      i105 = i109 + i106 | 0;
     }
    } while (0);
    i34 = i105 + 1 | 0;
    if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
     i4 = HEAP32[i2 + 20 >> 2] | 0;
     i35 = HEAP32[i8 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i68 = i35 + 32 | 0;
      if ((HEAP32[i35 + 12 >> 2] & 2048 | 0) == 0) {
       i110 = i68 | 0;
      } else {
       i110 = HEAP32[i68 >> 2] | 0;
      }
      i68 = HEAP32[i110 >> 2] | 0;
      do {
       if ((i68 | 0) == 0) {
        i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 236 >> 2] & 1](i35 | 0) | 0;
        i111 = i22;
        i112 = HEAP32[i8 >> 2] | 0;
       } else {
        if ((HEAP32[i68 + 20 >> 2] & 768 | 0) == 256) {
         i111 = HEAP32[(HEAP32[i68 + 8 >> 2] | 0) + 36 >> 2] | 0;
         i112 = i35;
         break;
        } else {
         i111 = HEAP32[i68 + 36 >> 2] | 0;
         i112 = i35;
         break;
        }
       }
      } while (0);
      __ZN7WebCore7Element13setChildIndexEj(i112, i34);
      if ((i111 | 0) != 0) {
       i113 = i111;
       i18 = 341;
      }
     } else {
      __ZN7WebCore7Element13setChildIndexEj(i35, i34);
      i113 = i4;
      i18 = 341;
     }
     if ((i18 | 0) == 341) {
      i68 = i113 + 52 | 0;
      HEAP32[i68 >> 2] = HEAP32[i68 >> 2] | 1048576;
     }
     __ZN7WebCore7Element43setChildrenAffectedByForwardPositionalRulesEPS0_(i66);
    }
    if (__ZNK7WebCore11CSSSelector8matchNthEi(HEAP32[i9 >> 2] | 0, i34) | 0) {
     i12 = 1;
    } else {
     break L251;
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  case 12:
   {
    if (!(__ZNK7WebCore11CSSSelector8parseNthEv(HEAP32[i9 >> 2] | 0) | 0)) {
     break L251;
    }
    i68 = HEAP32[i8 >> 2] | 0;
    i22 = HEAP32[i68 + 16 >> 2] | 0;
    if ((i22 | 0) == 0) {
     break L251;
    }
    if ((HEAP32[i22 + 12 >> 2] & 4 | 0) == 0) {
     break L251;
    }
    i10 = i22;
    i22 = i68 + 24 | 0;
    while (1) {
     i114 = HEAP32[i22 >> 2] | 0;
     if ((i114 | 0) == 0) {
      i115 = 1;
      break;
     }
     if ((HEAP32[i114 + 12 >> 2] & 4 | 0) == 0) {
      i22 = i114 + 24 | 0;
     } else {
      i18 = 350;
      break;
     }
    }
    if ((i18 | 0) == 350) {
     i22 = HEAP32[i68 + 44 >> 2] | 0;
     i34 = i22 + 12 | 0;
     i66 = i22 + 16 | 0;
     i4 = i114;
     i35 = 0;
     L560 : while (1) {
      i69 = HEAP32[i4 + 44 >> 2] | 0;
      do {
       if ((i69 | 0) == (i22 | 0)) {
        i116 = 1;
       } else {
        if ((HEAP32[i69 + 12 >> 2] | 0) != (HEAP32[i34 >> 2] | 0)) {
         i116 = 0;
         break;
        }
        i116 = (HEAP32[i69 + 16 >> 2] | 0) == (HEAP32[i66 >> 2] | 0) | 0;
       }
      } while (0);
      i117 = i116 + i35 | 0;
      i69 = i4;
      while (1) {
       i67 = HEAP32[i69 + 24 >> 2] | 0;
       if ((i67 | 0) == 0) {
        break L560;
       }
       if ((HEAP32[i67 + 12 >> 2] & 4 | 0) == 0) {
        i69 = i67;
       } else {
        i4 = i67;
        i35 = i117;
        continue L560;
       }
      }
     }
     i115 = i117 + 1 | 0;
    }
    if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
     __ZN7WebCore7Element43setChildrenAffectedByForwardPositionalRulesEPS0_(i10);
    }
    if (__ZNK7WebCore11CSSSelector8matchNthEi(HEAP32[i9 >> 2] | 0, i115) | 0) {
     i12 = 1;
    } else {
     break L251;
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  case 13:
   {
    if (!(__ZNK7WebCore11CSSSelector8parseNthEv(HEAP32[i9 >> 2] | 0) | 0)) {
     break L251;
    }
    i35 = HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] | 0;
    if ((i35 | 0) == 0) {
     break L251;
    }
    i4 = i35 + 12 | 0;
    i66 = HEAP32[i4 >> 2] | 0;
    if ((i66 & 4 | 0) == 0) {
     break L251;
    }
    if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
     __ZN7WebCore7Element44setChildrenAffectedByBackwardPositionalRulesEv(i35);
     i118 = HEAP32[i4 >> 2] | 0;
    } else {
     i118 = i66;
    }
    if ((i118 & 8192 | 0) == 0) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i66 = (HEAP32[i8 >> 2] | 0) + 28 | 0;
    while (1) {
     i4 = HEAP32[i66 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i119 = 0;
      break;
     }
     if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
      i66 = i4 + 28 | 0;
     } else {
      i120 = i4;
      i121 = 1;
      i18 = 371;
      break;
     }
    }
    L588 : do {
     if ((i18 | 0) == 371) {
      while (1) {
       i18 = 0;
       i66 = i120;
       while (1) {
        i66 = HEAP32[i66 + 28 >> 2] | 0;
        if ((i66 | 0) == 0) {
         i119 = i121;
         break L588;
        }
        if ((HEAP32[i66 + 12 >> 2] & 4 | 0) != 0) {
         break;
        }
       }
       i120 = i66;
       i121 = i121 + 1 | 0;
       i18 = 371;
      }
     }
    } while (0);
    if (__ZNK7WebCore11CSSSelector8matchNthEi(HEAP32[i9 >> 2] | 0, i119 + 1 | 0) | 0) {
     i12 = 1;
    } else {
     break L251;
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  case 14:
   {
    if (!(__ZNK7WebCore11CSSSelector8parseNthEv(HEAP32[i9 >> 2] | 0) | 0)) {
     break L251;
    }
    i10 = HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L251;
    }
    i4 = i10 + 12 | 0;
    i35 = HEAP32[i4 >> 2] | 0;
    if ((i35 & 4 | 0) == 0) {
     break L251;
    }
    if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
     __ZN7WebCore7Element44setChildrenAffectedByBackwardPositionalRulesEv(i10);
     i122 = HEAP32[i4 >> 2] | 0;
    } else {
     i122 = i35;
    }
    if ((i122 & 8192 | 0) == 0) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i35 = HEAP32[i8 >> 2] | 0;
    i4 = i35 + 28 | 0;
    while (1) {
     i123 = HEAP32[i4 >> 2] | 0;
     if ((i123 | 0) == 0) {
      i124 = 1;
      break;
     }
     if ((HEAP32[i123 + 12 >> 2] & 4 | 0) == 0) {
      i4 = i123 + 28 | 0;
     } else {
      i18 = 384;
      break;
     }
    }
    if ((i18 | 0) == 384) {
     i4 = HEAP32[i35 + 44 >> 2] | 0;
     i10 = i4 + 12 | 0;
     i34 = i4 + 16 | 0;
     i22 = i123;
     i68 = 0;
     L612 : while (1) {
      i69 = HEAP32[i22 + 44 >> 2] | 0;
      do {
       if ((i69 | 0) == (i4 | 0)) {
        i125 = 1;
       } else {
        if ((HEAP32[i69 + 12 >> 2] | 0) != (HEAP32[i10 >> 2] | 0)) {
         i125 = 0;
         break;
        }
        i125 = (HEAP32[i69 + 16 >> 2] | 0) == (HEAP32[i34 >> 2] | 0) | 0;
       }
      } while (0);
      i126 = i125 + i68 | 0;
      i69 = i22;
      while (1) {
       i67 = HEAP32[i69 + 28 >> 2] | 0;
       if ((i67 | 0) == 0) {
        break L612;
       }
       if ((HEAP32[i67 + 12 >> 2] & 4 | 0) == 0) {
        i69 = i67;
       } else {
        i22 = i67;
        i68 = i126;
        continue L612;
       }
      }
     }
     i124 = i126 + 1 | 0;
    }
    if (__ZNK7WebCore11CSSSelector8matchNthEi(HEAP32[i9 >> 2] | 0, i124) | 0) {
     i12 = 1;
    } else {
     break L251;
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  case 36:
   {
    i68 = HEAP32[i8 >> 2] | 0;
    if ((i68 | 0) == (HEAP32[(HEAP32[(HEAP32[i68 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1240 >> 2] | 0)) {
     i12 = 1;
    } else {
     break L251;
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  case 17:
   {
    _memcpy(i5 | 0, i2 | 0, 36) | 0;
    HEAP8[i5 + 32 | 0] = 1;
    HEAP32[i6 >> 2] = 0;
    i68 = HEAP32[HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0) + 28 >> 2] >> 2] | 0;
    i22 = i5 | 0;
    HEAP32[i22 >> 2] = i68;
    if ((i68 | 0) == 0) {
     break L251;
    }
    while (1) {
     if ((__ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i1, i5, i6) | 0) == 0) {
      i12 = 1;
      break;
     }
     i68 = HEAP32[i22 >> 2] | 0;
     while (1) {
      i127 = HEAP8[i68 + 2 | 0] | 0;
      i68 = i68 + 8 | 0;
      if ((i127 & 2) != 0) {
       break;
      }
     }
     i34 = (i127 & 1) != 0 ? 0 : i68;
     HEAP32[i22 >> 2] = i34;
     if ((i34 | 0) == 0) {
      break L251;
     }
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  case 19:
   {
    i22 = HEAP32[i8 >> 2] | 0;
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 448 >> 2] & 1](i22) | 0)) {
     break L251;
    }
    i22 = HEAP32[i8 >> 2] | 0;
    i34 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 208 >> 2] & 1](i22 | 0) | 0;
    if ((i34 | 0) == 0) {
     break L251;
    }
    i12 = (HEAP8[i34 + 130 | 0] | 0) < 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 18:
  case 15:
   {
    i12 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 512 | 0) != 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 16:
   {
    if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 512 | 0) == 0) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i12 = (HEAP32[i2 + 12 >> 2] | 0) == 1;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 21:
   {
    do {
     if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
      i34 = HEAP32[i2 + 20 >> 2] | 0;
      if ((i34 | 0) == 0) {
       __ZN7WebCore7Element25setChildrenAffectedByDragEv(HEAP32[i8 >> 2] | 0);
       break;
      } else {
       i22 = i34 + 52 | 0;
       HEAP32[i22 >> 2] = HEAP32[i22 >> 2] | 67108864;
       break;
      }
     }
    } while (0);
    i22 = HEAP32[i8 >> 2] | 0;
    i34 = (HEAP32[i22 + 12 >> 2] & 2048 | 0) == 0;
    i10 = i22 + 32 | 0;
    if (i34) {
     i128 = i10 | 0;
    } else {
     i128 = HEAP32[i10 >> 2] | 0;
    }
    if ((HEAP32[i128 >> 2] | 0) == 0) {
     break L251;
    }
    if (i34) {
     i129 = i10 | 0;
    } else {
     i129 = HEAP32[i10 >> 2] | 0;
    }
    if ((HEAP32[(HEAP32[i129 >> 2] | 0) + 20 >> 2] & 16384 | 0) == 0) {
     break L251;
    } else {
     i12 = 1;
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  case 22:
   {
    i12 = __ZN7WebCore15SelectorChecker23matchesFocusPseudoClassEPKNS_7ElementE(HEAP32[i8 >> 2] | 0) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 20:
   {
    do {
     if ((HEAP8[i1 | 0] & 1) == 0) {
      if ((HEAP8[i2 + 32 | 0] & 1) != 0) {
       break;
      }
      if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 512 | 0) == 0) {
       break L251;
      }
     }
    } while (0);
    do {
     if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
      i10 = HEAP32[i2 + 20 >> 2] | 0;
      if ((i10 | 0) == 0) {
       i34 = (HEAP32[i8 >> 2] | 0) + 12 | 0;
       HEAP32[i34 >> 2] = HEAP32[i34 >> 2] | 268435456;
       break;
      } else {
       i34 = i10 + 52 | 0;
       HEAP32[i34 >> 2] = HEAP32[i34 >> 2] | 16777216;
       break;
      }
     }
    } while (0);
    i34 = HEAP32[i8 >> 2] | 0;
    do {
     if ((HEAP32[i34 + 12 >> 2] & 1024 | 0) == 0) {
      i130 = i34;
     } else {
      if (__ZNK7WebCore7Element26isUserActionElementHoveredEv(i34) | 0) {
       i12 = 1;
       STACKTOP = i3;
       return i12 | 0;
      } else {
       i130 = HEAP32[i8 >> 2] | 0;
       break;
      }
     }
    } while (0);
    if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
     break L251;
    }
    i34 = HEAP32[(HEAP32[i130 + 20 >> 2] | 0) + 8 >> 2] | 0;
    if ((i34 | 0) == 0) {
     break L251;
    }
    i10 = __ZNK7WebCore8Document4pageEv(i34) | 0;
    do {
     if ((i10 | 0) == 0) {
      i22 = HEAP32[i34 + 2204 >> 2] | 0;
      if ((i22 | 0) == 0) {
       i131 = 0;
       break;
      }
      i131 = __ZNK7WebCore8Document4pageEv(i22) | 0;
     } else {
      i131 = i10;
     }
    } while (0);
    i10 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i131) | 0;
    if ((i10 | 0) == 0) {
     break L251;
    }
    if (__ZN7WebCore24InspectorInstrumentation20forcePseudoStateImplEPNS_19InstrumentingAgentsEPNS_7ElementENS_11CSSSelector10PseudoTypeE(i10, i130, 20) | 0) {
     i12 = 1;
    } else {
     break L251;
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  case 23:
   {
    do {
     if ((HEAP8[i1 | 0] & 1) == 0) {
      if ((HEAP8[i2 + 32 | 0] & 1) != 0) {
       break;
      }
      if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 512 | 0) == 0) {
       break L251;
      }
     }
    } while (0);
    do {
     if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
      i10 = HEAP32[i2 + 20 >> 2] | 0;
      if ((i10 | 0) == 0) {
       __ZN7WebCore7Element27setChildrenAffectedByActiveEv(HEAP32[i8 >> 2] | 0);
       break;
      } else {
       i34 = i10 + 52 | 0;
       HEAP32[i34 >> 2] = HEAP32[i34 >> 2] | 33554432;
       break;
      }
     }
    } while (0);
    i34 = HEAP32[i8 >> 2] | 0;
    do {
     if ((HEAP32[i34 + 12 >> 2] & 1024 | 0) == 0) {
      i132 = i34;
     } else {
      if (__ZNK7WebCore7Element25isUserActionElementActiveEv(i34) | 0) {
       i12 = 1;
       STACKTOP = i3;
       return i12 | 0;
      } else {
       i132 = HEAP32[i8 >> 2] | 0;
       break;
      }
     }
    } while (0);
    if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
     break L251;
    }
    i34 = HEAP32[(HEAP32[i132 + 20 >> 2] | 0) + 8 >> 2] | 0;
    if ((i34 | 0) == 0) {
     break L251;
    }
    i10 = __ZNK7WebCore8Document4pageEv(i34) | 0;
    do {
     if ((i10 | 0) == 0) {
      i22 = HEAP32[i34 + 2204 >> 2] | 0;
      if ((i22 | 0) == 0) {
       i133 = 0;
       break;
      }
      i133 = __ZNK7WebCore8Document4pageEv(i22) | 0;
     } else {
      i133 = i10;
     }
    } while (0);
    i10 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i133) | 0;
    if ((i10 | 0) == 0) {
     break L251;
    }
    if (__ZN7WebCore24InspectorInstrumentation20forcePseudoStateImplEPNS_19InstrumentingAgentsEPNS_7ElementENS_11CSSSelector10PseudoTypeE(i10, i132, 23) | 0) {
     i12 = 1;
    } else {
     break L251;
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  case 25:
   {
    i10 = HEAP32[i8 >> 2] | 0;
    i34 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 448 >> 2] & 1](i10) | 0;
    i10 = HEAP32[i8 >> 2] | 0;
    do {
     if (!i34) {
      if ((HEAP32[i10 + 12 >> 2] & 16 | 0) == 0) {
       break L251;
      }
      if ((HEAP32[(HEAP32[i10 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[i10 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break L251;
      }
     }
    } while (0);
    i12 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 496 >> 2] & 1](i10) | 0) ^ 1;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 26:
   {
    i12 = (HEAP8[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 16) != 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 27:
   {
    i34 = HEAP32[i8 >> 2] | 0;
    i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 468 >> 2] & 1](i34) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 28:
   {
    i34 = HEAP32[i8 >> 2] | 0;
    i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 448 >> 2] & 1](i34) | 0;
    i34 = HEAP32[i8 >> 2] | 0;
    do {
     if (!i22) {
      if ((HEAP32[i34 + 12 >> 2] & 16 | 0) == 0) {
       break L251;
      }
      if ((HEAP32[(HEAP32[i34 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[(HEAP32[i34 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break L251;
      }
     }
    } while (0);
    i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 496 >> 2] & 1](i34) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 31:
   {
    i22 = HEAP32[i8 >> 2] | 0;
    i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 436 >> 2] & 1](i22) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 32:
   {
    i22 = HEAP32[i8 >> 2] | 0;
    i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 440 >> 2] & 1](i22) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 29:
   {
    i22 = HEAP32[i8 >> 2] | 0;
    i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 460 >> 2] & 1](i22) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 30:
   {
    i22 = HEAP32[i8 >> 2] | 0;
    i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 464 >> 2] & 1](i22) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 33:
   {
    HEAP8[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1087 | 0] = 1;
    i22 = HEAP32[i8 >> 2] | 0;
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 472 >> 2] & 1](i22) | 0)) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i22 = HEAP32[i8 >> 2] | 0;
    i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 476 >> 2] & 1](i22) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 34:
   {
    HEAP8[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1087 | 0] = 1;
    i22 = HEAP32[i8 >> 2] | 0;
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 472 >> 2] & 1](i22) | 0)) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i22 = HEAP32[i8 >> 2] | 0;
    i12 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 476 >> 2] & 1](i22) | 0) ^ 1;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 24:
   {
    i22 = HEAP32[i8 >> 2] | 0;
    i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 208 >> 2] & 1](i22 | 0) | 0;
    do {
     if ((i10 | 0) != 0) {
      if (!(__ZNK7WebCore16HTMLInputElement19shouldAppearCheckedEv(i10) | 0)) {
       break;
      }
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 444 >> 2] & 1](i10) | 0) {
       break;
      } else {
       i12 = 1;
      }
      STACKTOP = i3;
      return i12 | 0;
     }
    } while (0);
    i10 = HEAP32[i8 >> 2] | 0;
    if ((HEAP32[i10 + 12 >> 2] & 16 | 0) == 0) {
     break L251;
    }
    if ((HEAP32[(HEAP32[i10 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break L251;
    }
    if (__ZN7WebCore17HTMLOptionElement8selectedEv(i10) | 0) {
     i12 = 1;
    } else {
     break L251;
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  case 35:
   {
    i10 = HEAP32[i8 >> 2] | 0;
    i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 444 >> 2] & 1](i10) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 42:
   {
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) == (HEAP32[(HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0)) {
     i12 = 1;
    } else {
     break L251;
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  case 39:
   {
    __ZNK7WebCore7Element24computeInheritedLanguageEv(i7, HEAP32[i8 >> 2] | 0);
    i10 = i7 | 0;
    i34 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    i10 = HEAP32[i9 >> 2] | 0;
    if ((HEAP8[i10 + 2 | 0] & 4) == 0) {
     i134 = __ZN3WTF8nullAtomE;
    } else {
     i134 = (HEAP32[i10 + 4 >> 2] | 0) + 24 | 0;
    }
    if ((i34 | 0) == 0) {
     break L251;
    }
    i10 = i34 + 4 | 0;
    do {
     if ((HEAP32[i10 >> 2] | 0) != 0) {
      i22 = i134 | 0;
      if ((__ZN3WTF10StringImpl23reverseFindIgnoringCaseEPS0_j(i34, HEAP32[i22 >> 2] | 0, 0) | 0) != 0) {
       break;
      }
      i4 = HEAP32[i10 >> 2] | 0;
      i35 = HEAP32[i22 >> 2] | 0;
      i22 = (i35 | 0) == 0;
      if (i22) {
       i135 = 0;
      } else {
       i135 = HEAP32[i35 + 4 >> 2] | 0;
      }
      if ((i4 | 0) != (i135 | 0)) {
       if (i22) {
        i136 = 0;
       } else {
        i136 = HEAP32[i35 + 4 >> 2] | 0;
       }
       if (i4 >>> 0 <= i136 >>> 0) {
        break;
       }
       i4 = i34 + 8 | 0;
       if ((HEAP32[i34 + 16 >> 2] & 32 | 0) == 0) {
        i137 = HEAP16[(HEAP32[i4 >> 2] | 0) + (i136 << 1) >> 1] | 0;
       } else {
        i137 = HEAPU8[(HEAP32[i4 >> 2] | 0) + i136 | 0] | 0;
       }
       if (i137 << 16 >> 16 != 45) {
        break;
       }
      }
      i4 = i34 | 0;
      i35 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
      if ((i35 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i34);
       i12 = 1;
       STACKTOP = i3;
       return i12 | 0;
      } else {
       HEAP32[i4 >> 2] = i35;
       i12 = 1;
       STACKTOP = i3;
       return i12 | 0;
      }
     }
    } while (0);
    i10 = i34 | 0;
    i35 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i35 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i34);
     break L251;
    } else {
     HEAP32[i10 >> 2] = i35;
     break L251;
    }
    break;
   }
  case 67:
   {
    i35 = HEAP32[i8 >> 2] | 0;
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 488 >> 2] & 1](i35) | 0) {
      if (__ZNK7WebCore7Element25containsFullScreenElementEv(HEAP32[i8 >> 2] | 0) | 0) {
       i12 = 1;
      } else {
       break;
      }
      STACKTOP = i3;
      return i12 | 0;
     }
    } while (0);
    i35 = HEAP32[i8 >> 2] | 0;
    i34 = HEAP32[(HEAP32[(HEAP32[i35 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1688 >> 2] | 0;
    if ((i34 | 0) == 0) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i12 = (i35 | 0) == (i34 | 0);
    STACKTOP = i3;
    return i12 | 0;
   }
  case 70:
   {
    i34 = HEAP32[i8 >> 2] | 0;
    i35 = HEAP32[(HEAP32[i34 + 20 >> 2] | 0) + 8 >> 2] | 0;
    if ((i34 | 0) != (HEAP32[i35 + 1688 >> 2] | 0)) {
     i12 = 0;
     STACKTOP = i3;
     return i12 | 0;
    }
    i12 = __ZNK7WebCore8Document21isAnimatingFullScreenEv(i35) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 69:
   {
    i12 = __ZNK7WebCore7Element25containsFullScreenElementEv(HEAP32[i8 >> 2] | 0) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 68:
   {
    i12 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1688 >> 2] | 0) != 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 75:
   {
    i12 = __ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 71:
   {
    HEAP8[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1087 | 0] = 1;
    i35 = HEAP32[i8 >> 2] | 0;
    i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 480 >> 2] & 1](i35) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 72:
   {
    HEAP8[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1087 | 0] = 1;
    i35 = HEAP32[i8 >> 2] | 0;
    i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 484 >> 2] & 1](i35) | 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  case 43:
   {
    i35 = HEAP32[i2 + 8 >> 2] | 0;
    i34 = HEAP32[i8 >> 2] | 0;
    if ((i35 | 0) == 0) {
     i138 = HEAP32[(HEAP32[(HEAP32[i34 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
    } else {
     i138 = i35;
    }
    if ((i34 | 0) == (i138 | 0)) {
     i12 = 1;
    } else {
     break L251;
    }
    STACKTOP = i3;
    return i12 | 0;
   }
  case 53:
  case 56:
  case 57:
  case 54:
  case 55:
  case 58:
  case 59:
  case 60:
  case 61:
  case 62:
   {
    i12 = 0;
    STACKTOP = i3;
    return i12 | 0;
   }
  default:
   {}
  }
 } while (0);
 i12 = 0;
 STACKTOP = i3;
 return i12 | 0;
}
function __ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 40 | 0;
 if (!(__ZNK7WebCore15SelectorChecker8checkOneERKNS0_23SelectorCheckingContextE(i1, i2) | 0)) {
  i7 = 1;
  STACKTOP = i4;
  return i7 | 0;
 }
 i8 = i2 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i9;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 & 120 | 0) == 72) {
   if (((i11 >>> 7 & 255) - 73 | 0) >>> 0 >= 2 >>> 0) {
    i12 = HEAP32[i1 + 4 >> 2] | 0;
    if ((HEAP32[i2 + 20 >> 2] | 0) == 0 & (i12 | 0) == 0 | (i12 | 0) == 2) {
     i7 = 1;
     STACKTOP = i4;
     return i7 | 0;
    }
    if ((i11 & 32640 | 0) == 0) {
     __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i9);
     i13 = HEAP32[i10 >> 2] | 0;
    } else {
     i13 = i11;
    }
    i12 = __ZN7WebCore11CSSSelector8pseudoIdENS0_10PseudoTypeE(i13 >>> 7 & 255) | 0;
    if ((i12 | 0) == 2) {
     HEAP8[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 915 | 0] = 1;
    } else if ((i12 | 0) == 0) {
     break;
    }
    HEAP32[i3 >> 2] = i12;
    break;
   }
   i12 = i2 + 4 | 0;
   i14 = __ZNK7WebCore4Node20containingShadowRootEv(HEAP32[i12 >> 2] | 0) | 0;
   if ((i14 | 0) == 0) {
    i7 = 1;
    STACKTOP = i4;
    return i7 | 0;
   }
   i15 = HEAP32[i12 >> 2] | 0;
   i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 328 >> 2] & 1](i15) | 0;
   i15 = HEAP32[i8 >> 2] | 0;
   i16 = i15 + 4 | 0;
   if ((HEAP8[i15 + 2 | 0] & 4) == 0) {
    i17 = i16 | 0;
   } else {
    i17 = (HEAP32[i16 >> 2] | 0) + 4 | 0;
   }
   if ((HEAP32[i12 >> 2] | 0) != (HEAP32[i17 >> 2] | 0)) {
    i7 = 1;
    STACKTOP = i4;
    return i7 | 0;
   }
   i12 = i15;
   i16 = HEAP32[i12 >> 2] | 0;
   if ((i16 & 32640 | 0) == 0) {
    __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i15);
    i18 = HEAP32[i12 >> 2] | 0;
   } else {
    i18 = i16;
   }
   if ((i18 & 32640 | 0) != 9472) {
    break;
   }
   if ((HEAP32[i14 + 88 >> 2] & 4 | 0) == 0) {
    break;
   } else {
    i7 = 1;
   }
   STACKTOP = i4;
   return i7 | 0;
  }
 } while (0);
 i18 = HEAP32[i8 >> 2] | 0;
 i8 = HEAP32[i18 >> 2] & 7;
 i17 = (HEAP8[i18 + 2 | 0] & 2) != 0 ? 0 : i18 + 8 | 0;
 if ((i17 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 _memcpy(i5 | 0, i2 | 0, 36) | 0;
 HEAP32[i5 >> 2] = i17;
 HEAP32[i6 >> 2] = 0;
 L37 : do {
  if ((i8 | 0) != 4) {
   i18 = HEAP32[i2 + 16 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     if ((i18 | 0) == (HEAP32[i3 >> 2] | 0)) {
      break;
     } else {
      i7 = 3;
     }
     STACKTOP = i4;
     return i7 | 0;
    }
   } while (0);
   do {
    if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
     if (!((HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 12 >> 2] & 512 | 0) != 0 | i8 >>> 0 > 1 >>> 0)) {
      break;
     }
     HEAP32[i5 + 12 >> 2] = 0;
    }
   } while (0);
   HEAP32[i5 + 16 >> 2] = 0;
   switch (i8 | 0) {
   case 0:
    {
     i18 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 16 >> 2] | 0;
     do {
      if ((i18 | 0) == 0) {
       i19 = 0;
      } else {
       if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
        i19 = 0;
        break;
       }
       i19 = i18;
      }
     } while (0);
     i18 = i5 + 4 | 0;
     HEAP32[i18 >> 2] = i19;
     HEAP8[i5 + 32 | 0] = 0;
     HEAP32[i5 + 20 >> 2] = 0;
     if ((i19 | 0) == 0) {
      i7 = 3;
      STACKTOP = i4;
      return i7 | 0;
     }
     while (1) {
      i13 = __ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i1, i5, i6) | 0;
      if ((i13 | 0) == 3 | (i13 | 0) == 0) {
       i7 = i13;
       i20 = 75;
       break;
      }
      i13 = HEAP32[(HEAP32[i18 >> 2] | 0) + 16 >> 2] | 0;
      if ((i13 | 0) == 0) {
       i20 = 34;
       break;
      }
      if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
       i20 = 34;
       break;
      }
      HEAP32[i18 >> 2] = i13;
      if ((i13 | 0) == 0) {
       i7 = 3;
       i20 = 77;
       break;
      }
     }
     if ((i20 | 0) == 34) {
      HEAP32[i18 >> 2] = 0;
      i7 = 3;
      STACKTOP = i4;
      return i7 | 0;
     } else if ((i20 | 0) == 75) {
      STACKTOP = i4;
      return i7 | 0;
     } else if ((i20 | 0) == 77) {
      STACKTOP = i4;
      return i7 | 0;
     }
     break;
    }
   case 1:
    {
     i13 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 16 >> 2] | 0;
     do {
      if ((i13 | 0) != 0) {
       if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
        break;
       }
       HEAP32[i5 + 4 >> 2] = i13;
       HEAP8[i5 + 32 | 0] = 0;
       HEAP32[i5 + 20 >> 2] = 0;
       i7 = __ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i1, i5, i6) | 0;
       STACKTOP = i4;
       return i7 | 0;
      }
     } while (0);
     HEAP32[i5 + 4 >> 2] = 0;
     i7 = 3;
     STACKTOP = i4;
     return i7 | 0;
    }
   case 2:
    {
     i13 = i2 + 4 | 0;
     do {
      if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
       i18 = HEAP32[(HEAP32[i13 >> 2] | 0) + 16 >> 2] | 0;
       if ((i18 | 0) == 0) {
        break;
       }
       i11 = i18 + 12 | 0;
       i18 = HEAP32[i11 >> 2] | 0;
       if ((i18 & 4 | 0) == 0) {
        break;
       }
       HEAP32[i11 >> 2] = i18 | 134217728;
      }
     } while (0);
     i18 = __ZNK7WebCore7Element22previousElementSiblingEv(HEAP32[i13 >> 2] | 0) | 0;
     HEAP32[i5 + 4 >> 2] = i18;
     if ((i18 | 0) == 0) {
      i7 = 2;
      STACKTOP = i4;
      return i7 | 0;
     }
     HEAP8[i5 + 32 | 0] = 0;
     HEAP32[i5 + 20 >> 2] = 0;
     i7 = __ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i1, i5, i6) | 0;
     STACKTOP = i4;
     return i7 | 0;
    }
   case 3:
    {
     i18 = i2 + 4 | 0;
     do {
      if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
       i11 = HEAP32[(HEAP32[i18 >> 2] | 0) + 16 >> 2] | 0;
       if ((i11 | 0) == 0) {
        break;
       }
       if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
        break;
       }
       __ZN7WebCore7Element43setChildrenAffectedByForwardPositionalRulesEPS0_(i11);
      }
     } while (0);
     i13 = __ZNK7WebCore7Element22previousElementSiblingEv(HEAP32[i18 >> 2] | 0) | 0;
     i11 = i5 + 4 | 0;
     HEAP32[i11 >> 2] = i13;
     HEAP8[i5 + 32 | 0] = 0;
     HEAP32[i5 + 20 >> 2] = 0;
     if ((i13 | 0) == 0) {
      i7 = 2;
      STACKTOP = i4;
      return i7 | 0;
     }
     while (1) {
      i13 = __ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i1, i5, i6) | 0;
      if ((i13 | 0) == 3 | (i13 | 0) == 2 | (i13 | 0) == 0) {
       i7 = i13;
       i20 = 83;
       break;
      }
      i13 = __ZNK7WebCore7Element22previousElementSiblingEv(HEAP32[i11 >> 2] | 0) | 0;
      HEAP32[i11 >> 2] = i13;
      if ((i13 | 0) == 0) {
       i7 = 2;
       i20 = 84;
       break;
      }
     }
     if ((i20 | 0) == 83) {
      STACKTOP = i4;
      return i7 | 0;
     } else if ((i20 | 0) == 84) {
      STACKTOP = i4;
      return i7 | 0;
     }
     break;
    }
   case 4:
    {
     break L37;
     break;
    }
   case 5:
    {
     i11 = __ZNK7WebCore4Node10shadowHostEv(HEAP32[i2 + 4 >> 2] | 0) | 0;
     if ((i11 | 0) == 0) {
      i7 = 3;
      STACKTOP = i4;
      return i7 | 0;
     }
     HEAP32[i5 + 4 >> 2] = i11;
     HEAP8[i5 + 32 | 0] = 0;
     HEAP32[i5 + 20 >> 2] = 0;
     i7 = __ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i1, i5, i6) | 0;
     STACKTOP = i4;
     return i7 | 0;
    }
   default:
    {
     i7 = 3;
     STACKTOP = i4;
     return i7 | 0;
    }
   }
  }
 } while (0);
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i21 = 0;
  } else {
   if ((HEAP32[i2 + 24 >> 2] | 0) != 0 | (i6 | 0) == 12) {
    i21 = 1;
    break;
   }
   i21 = (i6 | 0) == 13 | 0;
  }
 } while (0);
 HEAP8[i5 + 33 | 0] = i21;
 HEAP8[i5 + 34 | 0] = (i6 | 0) == 5 | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] | 0) == 0) {
   if (((HEAP32[i1 + 4 >> 2] | 0) - 1 | 0) >>> 0 > 1 >>> 0) {
    break;
   }
   if (!((i6 | 0) == 5 | (i6 | 0) == 0)) {
    i20 = 60;
   }
  } else {
   if (!((i6 | 0) == 5 | (i6 | 0) == 0)) {
    i20 = 60;
   }
  }
 } while (0);
 do {
  if ((i20 | 0) == 60) {
   if (i21 << 24 >> 24 == 0) {
    i7 = 3;
    STACKTOP = i4;
    return i7 | 0;
   }
   if ((HEAP32[i17 >> 2] & 120 | 0) == 64) {
    break;
   } else {
    i7 = 3;
   }
   STACKTOP = i4;
   return i7 | 0;
  }
 } while (0);
 HEAP8[i5 + 32 | 0] = 1;
 i7 = __ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE(i1, i5, i3) | 0;
 STACKTOP = i4;
 return i7 | 0;
}
function __ZNK7WebCore15SelectorChecker25checkScrollbarPseudoClassERKNS0_23SelectorCheckingContextEPNS_8DocumentEPKNS_11CSSSelectorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 i5 = HEAP32[i2 + 28 >> 2] | 0;
 i2 = i4;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 & 32640 | 0) == 0) {
  __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i4);
  i7 = HEAP32[i2 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = i7 & 32640;
 L4 : do {
  if ((i6 | 0) == 6656) {
   i8 = (HEAP8[(HEAP32[(__ZNK7WebCore8Document4pageEv(i3) | 0) + 32 >> 2] | 0) + 8 | 0] & 1) == 0;
  } else {
   if ((i1 | 0) == 0) {
    i8 = 0;
    break;
   }
   if ((i6 | 0) == 0) {
    __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i4);
    i9 = HEAP32[i2 >> 2] | 0;
   } else {
    i9 = i7;
   }
   switch (i9 >>> 7 & 255 | 0) {
   case 20:
    {
     i10 = HEAP32[i1 + 84 >> 2] | 0;
     if ((i5 | 0) == 128) {
      i8 = (i10 | 0) != 0;
      break L4;
     } else if ((i5 | 0) == 256) {
      if ((i10 | 0) == 16 | (i10 | 0) == 4 | (i10 | 0) == 8) {
       i8 = 1;
       break L4;
      }
      i8 = 0;
      break L4;
     } else {
      i8 = (i5 | 0) == (i10 | 0);
      break L4;
     }
     break;
    }
   case 57:
    {
     i8 = (HEAP32[i1 + 44 >> 2] | 0) == 1;
     break L4;
     break;
    }
   case 53:
    {
     i10 = HEAP32[i1 + 40 >> 2] | 0;
     i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 44 >> 2] & 1](i10) | 0;
     break L4;
     break;
    }
   case 54:
    {
     if ((i5 | 0) == 32 | (i5 | 0) == 1 | (i5 | 0) == 4) {
      i8 = 1;
      break L4;
     }
     i8 = 0;
     break L4;
     break;
    }
   case 56:
    {
     i8 = (HEAP32[i1 + 44 >> 2] | 0) == 0;
     break L4;
     break;
    }
   case 23:
    {
     i10 = HEAP32[i1 + 88 >> 2] | 0;
     if ((i5 | 0) == 128) {
      i8 = (i10 | 0) != 0;
      break L4;
     } else if ((i5 | 0) == 256) {
      if ((i10 | 0) == 16 | (i10 | 0) == 4 | (i10 | 0) == 8) {
       i8 = 1;
       break L4;
      }
      i8 = 0;
      break L4;
     } else {
      i8 = (i5 | 0) == (i10 | 0);
      break L4;
     }
     break;
    }
   case 25:
    {
     i8 = (HEAP8[i1 + 108 | 0] & 1) != 0;
     break L4;
     break;
    }
   case 62:
    {
     i10 = HEAP32[i1 + 52 >> 2] | 0;
     i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 24 >> 2] & 1](i10) | 0;
     if ((i5 | 0) == 16) {
      i8 = (i11 | 0) == 0 | (i11 | 0) == 2;
      break L4;
     } else if ((i5 | 0) == 4) {
      i8 = (i11 | 0) == 0 | (i11 | 0) == 3;
      break L4;
     } else {
      i8 = 0;
      break L4;
     }
     break;
    }
   case 55:
    {
     if ((i5 | 0) == 64 | (i5 | 0) == 2 | (i5 | 0) == 16) {
      i8 = 1;
      break L4;
     }
     i8 = 0;
     break L4;
     break;
    }
   case 58:
    {
     i8 = (i5 - 1 | 0) >>> 0 < 2 >>> 0 | (i5 | 0) == 4;
     break L4;
     break;
    }
   case 61:
    {
     i11 = HEAP32[i1 + 52 >> 2] | 0;
     i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 24 >> 2] & 1](i11) | 0;
     if (!((i5 | 0) == 64 | (i5 | 0) == 16 | (i5 | 0) == 4 | (i5 | 0) == 1)) {
      i8 = 0;
      break L4;
     }
     i8 = (i10 | 0) == 1;
     break L4;
     break;
    }
   case 60:
    {
     i10 = HEAP32[i1 + 52 >> 2] | 0;
     i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 24 >> 2] & 1](i10) | 0;
     if ((i5 - 1 | 0) >>> 0 < 2 >>> 0 | (i5 | 0) == 4) {
      i8 = (i11 | 0) == 2 | (i11 | 0) == 4;
      break L4;
     }
     if (!((i5 | 0) == 64 | (i5 | 0) == 32 | (i5 | 0) == 16)) {
      i8 = 0;
      break L4;
     }
     i8 = (i11 - 3 | 0) >>> 0 < 2 >>> 0;
     break L4;
     break;
    }
   case 59:
    {
     if ((i5 | 0) == 64 | (i5 | 0) == 32 | (i5 | 0) == 16) {
      i8 = 1;
      break L4;
     }
     i8 = 0;
     break L4;
     break;
    }
   case 28:
    {
     i8 = (HEAP8[i1 + 108 | 0] & 1) == 0;
     break L4;
     break;
    }
   default:
    {
     i8 = 0;
     break L4;
    }
   }
  }
 } while (0);
 return i8 | 0;
}
function __ZN7WebCore15SelectorChecker22determineLinkMatchTypeEPKNS_11CSSSelectorE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 if ((i1 | 0) == 0) {
  i2 = 3;
  return i2 | 0;
 } else {
  i3 = 3;
  i4 = i1;
 }
 while (1) {
  i1 = i4;
  i5 = HEAP32[i1 >> 2] | 0;
  if ((i5 & 32640 | 0) == 0) {
   __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i4);
   i6 = HEAP32[i1 >> 2] | 0;
  } else {
   i6 = i5;
  }
  i5 = i6 >>> 7 & 255;
  do {
   if ((i5 | 0) == 15) {
    i7 = i3 & -3;
    i8 = i6;
   } else if ((i5 | 0) == 40) {
    if ((HEAP8[i4 + 2 | 0] & 4) == 0) {
     i7 = i3;
     i8 = i6;
     break;
    }
    i9 = HEAP32[(HEAP32[i4 + 4 >> 2] | 0) + 28 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i7 = i3;
     i8 = i6;
     break;
    }
    i10 = HEAP32[i9 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i7 = i3;
     i8 = i6;
     break;
    } else {
     i11 = i3;
     i12 = i10;
    }
    while (1) {
     i10 = i12;
     i9 = HEAP32[i10 >> 2] | 0;
     if ((i9 & 32640 | 0) == 0) {
      __ZNK7WebCore11CSSSelector17extractPseudoTypeEv(i12);
      i13 = HEAP32[i10 >> 2] | 0;
     } else {
      i13 = i9;
     }
     i9 = i13 >>> 7 & 255;
     if ((i9 | 0) == 16) {
      i14 = i11 & -3;
     } else if ((i9 | 0) == 15) {
      i14 = i11 & -2;
     } else {
      i14 = i11;
     }
     i9 = (HEAP8[i12 + 2 | 0] & 2) != 0 ? 0 : i12 + 8 | 0;
     if ((i9 | 0) == 0) {
      break;
     } else {
      i11 = i14;
      i12 = i9;
     }
    }
    i7 = i14;
    i8 = HEAP32[i1 >> 2] | 0;
   } else if ((i5 | 0) == 16) {
    i7 = i3 & -2;
    i8 = i6;
   } else {
    i7 = i3;
    i8 = i6;
   }
  } while (0);
  i5 = i8 & 7;
  if ((i5 | 0) != 4) {
   if (!(i5 >>> 0 < 2 >>> 0 & (i7 | 0) == 3)) {
    i2 = i7;
    i15 = 22;
    break;
   }
  }
  i5 = (HEAP8[i4 + 2 | 0] & 2) != 0 ? 0 : i4 + 8 | 0;
  if ((i5 | 0) == 0) {
   i2 = i7;
   i15 = 23;
   break;
  } else {
   i3 = i7;
   i4 = i5;
  }
 }
 if ((i15 | 0) == 22) {
  return i2 | 0;
 } else if ((i15 | 0) == 23) {
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore15SelectorChecker23matchesFocusPseudoClassEPKNS_7ElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
   i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i3 = __ZNK7WebCore8Document4pageEv(i2) | 0;
   do {
    if ((i3 | 0) == 0) {
     i4 = HEAP32[i2 + 2204 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i5 = 0;
      break;
     }
     i5 = __ZNK7WebCore8Document4pageEv(i4) | 0;
    } else {
     i5 = i3;
    }
   } while (0);
   i3 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i5) | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if (__ZN7WebCore24InspectorInstrumentation20forcePseudoStateImplEPNS_19InstrumentingAgentsEPNS_7ElementENS_11CSSSelector10PseudoTypeE(i3, i1, 22) | 0) {
    i6 = 1;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 if ((HEAP32[i1 + 12 >> 2] & 1024 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (!(__ZNK7WebCore7Element26isUserActionElementFocusedEv(i1) | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i6 = __ZNK7WebCore14FrameSelection18isFocusedAndActiveEv(HEAP32[i5 + 468 >> 2] | 0) | 0;
 return i6 | 0;
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
function __ZN7WebCore15SelectorCheckerC2ERNS_8DocumentENS0_4ModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i1 | 0] = (HEAP32[i2 + 664 >> 2] | 0) != 0 | 0;
 HEAP8[i1 + 1 | 0] = HEAP8[i2 + 1576 | 0] & 1;
 HEAP32[i1 + 4 >> 2] = i3;
 return;
}
function __ZN7WebCore15SelectorCheckerC1ERNS_8DocumentENS0_4ModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i1 | 0] = (HEAP32[i2 + 664 >> 2] | 0) != 0 | 0;
 HEAP8[i1 + 1 | 0] = HEAP8[i2 + 1576 | 0] & 1;
 HEAP32[i1 + 4 >> 2] = i3;
 return;
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
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZN7WebCore15SelectorCheckerC2ERNS_8DocumentENS0_4ModeE,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF8starAtomE": __ZN3WTF8starAtomE, "__ZN7WebCore7anyNameE": __ZN7WebCore7anyNameE, "__ZN7WebCore9HTMLNames9optionTagE": __ZN7WebCore9HTMLNames9optionTagE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore9HTMLNames11optgroupTagE": __ZN7WebCore9HTMLNames11optgroupTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore15SelectorChecker8checkOneERKNS0_23SelectorCheckingContextE","__ZN7WebCore15SelectorChecker22determineLinkMatchTypeEPKNS_11CSSSelectorE","_memset","__ZN7WebCore15SelectorCheckerC2ERNS_8DocumentENS0_4ModeE","__ZNK7WebCore15SelectorChecker25checkScrollbarPseudoClassERKNS0_23SelectorCheckingContextEPNS_8DocumentEPKNS_11CSSSelectorE","__ZNK7WebCore15SelectorChecker16matchRecursivelyERKNS0_23SelectorCheckingContextERNS_8PseudoIdE","_memcpy","_strlen","__ZN7WebCore15SelectorChecker23matchesFocusPseudoClassEPKNS_7ElementE"]

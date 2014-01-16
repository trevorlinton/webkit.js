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
var __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE;
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
;
;
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
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
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
function __ZNK7WebCore15VisiblePosition30rightVisuallyDistinctCandidateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 80 | 0;
 i12 = i3 + 88 | 0;
 i13 = i3 + 96 | 0;
 i14 = i3 + 104 | 0;
 i15 = i3 + 120 | 0;
 i16 = i2 | 0;
 i17 = i6 | 0;
 i18 = HEAP32[i2 >> 2] | 0;
 HEAP32[i17 >> 2] = i18;
 if ((i18 | 0) == 0) {
  i19 = i6 + 8 | 0;
  i20 = 0;
  i21 = 1;
  i22 = i19;
  i23 = i19;
 } else {
  i19 = i18 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  i19 = i6 + 8 | 0;
  i18 = i19;
  i20 = HEAP32[i18 >> 2] & -8;
  i21 = (HEAP32[i17 >> 2] | 0) == 0;
  i22 = i19;
  i23 = i18;
 }
 i18 = i6 + 4 | 0;
 HEAP32[i18 >> 2] = HEAP32[i2 + 4 >> 2];
 i19 = HEAP32[i2 + 8 >> 2] | 0;
 i24 = i20 | i19 & 7;
 HEAP32[i23 >> 2] = i24;
 HEAP8[i22] = i24 & 255 & -9 | i19 & 8;
 do {
  if (i21) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i19 = i1 + 8 | 0;
   i24 = i19;
   i20 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = i20 & -8;
   HEAP8[i19] = i20 & 255 & -16;
  } else {
   __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i7, i6, 1);
   i20 = __ZNK7WebCore8Position16primaryDirectionEv(i6) | 0;
   i19 = i2 + 12 | 0;
   __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityENS_13TextDirectionERPNS_9InlineBoxERi(i6, HEAP32[i19 >> 2] | 0, i20, i8, i9);
   i24 = HEAP32[i8 >> 2] | 0;
   L8 : do {
    if ((i24 | 0) == 0) {
     i25 = 8;
    } else {
     i26 = i4 | 0;
     i27 = i5 | 0;
     i28 = i14 | 0;
     i29 = i14 + 4 | 0;
     i30 = i14 + 8 | 0;
     i31 = i15 | 0;
     i32 = i7 | 0;
     i33 = i15 + 8 | 0;
     i34 = i33;
     i35 = i15 + 4 | 0;
     i36 = i7 + 8 | 0;
     i37 = i36;
     i38 = i7 + 4 | 0;
     i39 = (i20 | 0) == 1;
     i40 = i24;
     L10 : while (1) {
      i41 = HEAP32[i40 + 16 >> 2] | 0;
      L12 : while (1) {
       i42 = i41 + 20 | 0;
       i43 = HEAP32[i42 >> 2] | 0;
       do {
        if ((i43 & 2048 | 0) == 0) {
         if ((i43 & 4096 | 0) == 0) {
          break;
         }
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i41 >> 2] | 0) + 620 >> 2] & 1](i41) | 0)) {
          i25 = 15;
         }
        } else {
         i25 = 15;
        }
       } while (0);
       if ((i25 | 0) == 15) {
        i25 = 0;
        i43 = HEAP32[i9 >> 2] | 0;
        i44 = HEAP32[i8 >> 2] | 0;
        i45 = HEAP32[i44 >> 2] | 0;
        if ((HEAP32[i44 + 32 >> 2] & 4 | 0) == 0) {
         i46 = FUNCTION_TABLE_ii[HEAP32[i45 + 88 >> 2] & 1](i44) | 0;
        } else {
         i46 = FUNCTION_TABLE_ii[HEAP32[i45 + 92 >> 2] & 1](i44) | 0;
        }
        if ((i43 | 0) == (i46 | 0)) {
         i25 = 19;
         break L10;
        }
       }
       do {
        if ((HEAP32[i42 >> 2] & 128 | 0) == 0) {
         i43 = HEAP32[i8 >> 2] | 0;
         if ((HEAP32[i41 + 4 >> 2] | 0) == 0) {
          i47 = i43;
          break;
         }
         i44 = HEAP32[i41 >> 2] | 0;
         if ((HEAP32[i43 + 32 >> 2] & 4 | 0) == 0) {
          i48 = FUNCTION_TABLE_iii[HEAP32[i44 + 580 >> 2] & 1](i41, HEAP32[i9 >> 2] | 0) | 0;
         } else {
          i48 = FUNCTION_TABLE_iii[HEAP32[i44 + 572 >> 2] & 1](i41, HEAP32[i9 >> 2] | 0) | 0;
         }
         HEAP32[i9 >> 2] = i48;
         i44 = HEAP32[i8 >> 2] | 0;
         i43 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i44 >> 2] | 0) + 88 >> 2] & 1](i44) | 0;
         i44 = HEAP32[i8 >> 2] | 0;
         i45 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i44 >> 2] | 0) + 92 >> 2] & 1](i44) | 0;
         i44 = HEAP32[i9 >> 2] | 0;
         if ((i44 | 0) > (i43 | 0) & (i44 | 0) < (i45 | 0)) {
          i49 = i41;
          break L12;
         }
         i50 = HEAP32[i8 >> 2] | 0;
         i51 = HEAP32[i50 + 32 >> 2] | 0;
         if ((i51 & 4 | 0) == 0) {
          if ((i44 | 0) > (i45 | 0)) {
           i25 = 40;
          }
         } else {
          if ((i44 | 0) < (i43 | 0)) {
           i25 = 40;
          }
         }
         if ((i25 | 0) == 40) {
          i25 = 0;
          i43 = __ZNK7WebCore9InlineBox30nextLeafChildIgnoringLineBreakEv(i50) | 0;
          if ((i43 | 0) == 0) {
           i25 = 41;
           break L10;
          }
          HEAP32[i8 >> 2] = i43;
          i44 = HEAP32[i43 + 16 >> 2] | 0;
          i45 = HEAP32[i43 >> 2] | 0;
          if ((HEAP32[i43 + 32 >> 2] & 4 | 0) == 0) {
           i52 = FUNCTION_TABLE_ii[HEAP32[i45 + 88 >> 2] & 1](i43) | 0;
          } else {
           i52 = FUNCTION_TABLE_ii[HEAP32[i45 + 92 >> 2] & 1](i43) | 0;
          }
          HEAP32[i9 >> 2] = i52;
          i41 = i44;
          continue L12;
         }
         i53 = i51 >>> 2 & 63;
         i51 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i50) | 0;
         i54 = HEAP32[i8 >> 2] | 0;
         i50 = (i51 | 0) == 0;
         if (((HEAP32[i54 + 32 >> 2] | 0) >>> 2 & 1 ^ 1 | 0) == (i20 | 0)) {
          if (i50) {
           i25 = 60;
           break L12;
          }
          i44 = i51 + 32 | 0;
          i43 = (HEAP32[i44 >> 2] | 0) >>> 2 & 63;
          if ((i43 & 255) >>> 0 < (i53 & 255) >>> 0) {
           i55 = i54;
          } else {
           i49 = i41;
           break L12;
          }
          while (1) {
           i45 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i55) | 0;
           if ((i45 | 0) == 0) {
            break;
           }
           i56 = (HEAP32[i45 + 32 >> 2] | 0) >>> 2 & 63;
           if ((i56 & 255) >>> 0 > (i43 & 255) >>> 0) {
            i55 = i45;
           } else {
            i25 = 71;
            break;
           }
          }
          if ((i25 | 0) == 71) {
           i25 = 0;
           if (i56 << 24 >> 24 == i43 << 24 >> 24) {
            i49 = i41;
            break L12;
           }
          }
          HEAP32[i8 >> 2] = i51;
          i45 = HEAP32[i51 + 16 >> 2] | 0;
          i57 = HEAP32[i51 >> 2] | 0;
          if ((HEAP32[i44 >> 2] & 4 | 0) == 0) {
           i58 = FUNCTION_TABLE_ii[HEAP32[i57 + 88 >> 2] & 1](i51) | 0;
          } else {
           i58 = FUNCTION_TABLE_ii[HEAP32[i57 + 92 >> 2] & 1](i51) | 0;
          }
          HEAP32[i9 >> 2] = i58;
          if (((HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0) >>> 2 & 1 ^ 1 | 0) == (i20 | 0)) {
           i49 = i45;
           break L12;
          } else {
           i41 = i45;
           continue L12;
          }
         }
         if (i50) {
          i25 = 86;
          break L12;
         } else {
          i59 = i51;
         }
         while (1) {
          i60 = i59 + 16 | 0;
          i45 = HEAP32[i60 >> 2] | 0;
          if ((HEAP32[i45 + 20 >> 2] & 128 | 0) == 0) {
           if ((HEAP32[i45 + 4 >> 2] | 0) != 0) {
            break;
           }
          }
          i45 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i59) | 0;
          if ((i45 | 0) == 0) {
           i25 = 86;
           break L12;
          } else {
           i59 = i45;
          }
         }
         HEAP32[i8 >> 2] = i59;
         i51 = HEAP32[i60 >> 2] | 0;
         i50 = HEAP32[i59 >> 2] | 0;
         if ((HEAP32[i59 + 32 >> 2] & 4 | 0) == 0) {
          i61 = FUNCTION_TABLE_ii[HEAP32[i50 + 88 >> 2] & 1](i59) | 0;
         } else {
          i61 = FUNCTION_TABLE_ii[HEAP32[i50 + 92 >> 2] & 1](i59) | 0;
         }
         HEAP32[i9 >> 2] = i61;
         if (((HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 > (i53 & 255) >>> 0) {
          i62 = i59;
         } else {
          i49 = i51;
          break L12;
         }
         while (1) {
          i62 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i62) | 0;
          if ((i62 | 0) == 0) {
           i41 = i51;
           continue L12;
          }
          i63 = (HEAP32[i62 + 32 >> 2] | 0) >>> 2 & 63;
          if ((i63 & 255) >>> 0 <= (i53 & 255) >>> 0) {
           break;
          }
         }
         if ((i63 & 255) >>> 0 < (i53 & 255) >>> 0) {
          i41 = i51;
          continue L12;
         } else {
          i49 = i51;
          break L12;
         }
        } else {
         i47 = HEAP32[i8 >> 2] | 0;
        }
       } while (0);
       i42 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i47) | 0;
       HEAP32[i8 >> 2] = i42;
       if ((i42 | 0) == 0) {
        i25 = 26;
        break L10;
       }
       i50 = HEAP32[i42 + 16 >> 2] | 0;
       i44 = HEAP32[i42 >> 2] | 0;
       if ((HEAP32[i42 + 32 >> 2] & 4 | 0) == 0) {
        i64 = FUNCTION_TABLE_ii[HEAP32[i44 + 88 >> 2] & 1](i42) | 0;
       } else {
        i64 = FUNCTION_TABLE_ii[HEAP32[i44 + 92 >> 2] & 1](i42) | 0;
       }
       HEAP32[i9 >> 2] = i64;
       i41 = i50;
      }
      do {
       if ((i25 | 0) == 86) {
        i25 = 0;
        i50 = i53;
        i42 = HEAP32[i8 >> 2] | 0;
        while (1) {
         i44 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i42) | 0;
         L82 : do {
          if ((i44 | 0) != 0) {
           i43 = i44;
           while (1) {
            if (((HEAP32[i43 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i50 & 255) >>> 0) {
             break L82;
            }
            HEAP32[i8 >> 2] = i43;
            i43 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i43) | 0;
            if ((i43 | 0) == 0) {
             break;
            }
           }
          }
         } while (0);
         i44 = HEAP32[i8 >> 2] | 0;
         i51 = (HEAP32[i44 + 32 >> 2] | 0) >>> 2 & 63;
         if (i51 << 24 >> 24 == i50 << 24 >> 24) {
          i65 = i44;
          break;
         }
         i43 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i44) | 0;
         L88 : do {
          if ((i43 | 0) != 0) {
           i44 = i43;
           while (1) {
            if (((HEAP32[i44 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i51 & 255) >>> 0) {
             break L88;
            }
            HEAP32[i8 >> 2] = i44;
            i44 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i44) | 0;
            if ((i44 | 0) == 0) {
             break;
            }
           }
          }
         } while (0);
         i43 = HEAP32[i8 >> 2] | 0;
         i44 = (HEAP32[i43 + 32 >> 2] | 0) >>> 2 & 63;
         if (i44 << 24 >> 24 == i51 << 24 >> 24) {
          i65 = i43;
          break;
         } else {
          i50 = i44;
          i42 = i43;
         }
        }
        i42 = HEAP32[i65 + 16 >> 2] | 0;
        i50 = HEAP32[i65 >> 2] | 0;
        if (i39) {
         i66 = FUNCTION_TABLE_ii[HEAP32[i50 + 92 >> 2] & 1](i65) | 0;
        } else {
         i66 = FUNCTION_TABLE_ii[HEAP32[i50 + 88 >> 2] & 1](i65) | 0;
        }
        HEAP32[i9 >> 2] = i66;
        i49 = i42;
       } else if ((i25 | 0) == 60) {
        i25 = 0;
        HEAP32[i13 >> 2] = 0;
        i42 = __ZN7WebCore9InlineBox4rootEv(i54) | 0;
        if (i39) {
         i67 = __ZNK7WebCore13RootInlineBox24getLogicalEndBoxWithNodeERPNS_9InlineBoxE(i42, i13) | 0;
        } else {
         i67 = __ZNK7WebCore13RootInlineBox26getLogicalStartBoxWithNodeERPNS_9InlineBoxE(i42, i13) | 0;
        }
        if ((i67 | 0) == 0) {
         i49 = i41;
         break;
        }
        i42 = HEAP32[i13 >> 2] | 0;
        HEAP32[i8 >> 2] = i42;
        i50 = HEAP32[i42 + 16 >> 2] | 0;
        i43 = HEAP32[i42 >> 2] | 0;
        if (i39) {
         i68 = FUNCTION_TABLE_ii[HEAP32[i43 + 92 >> 2] & 1](i42) | 0;
        } else {
         i68 = FUNCTION_TABLE_ii[HEAP32[i43 + 88 >> 2] & 1](i42) | 0;
        }
        HEAP32[i9 >> 2] = i68;
        i49 = i50;
       }
      } while (0);
      do {
       if ((HEAP32[i49 + 20 >> 2] & 128 | 0) == 0) {
        i41 = HEAP32[i49 + 4 >> 2] | 0;
        if ((i41 | 0) == 0) {
         i69 = 0;
         break;
        }
        i50 = i41 + 8 | 0;
        HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
        i69 = i41;
       } else {
        i69 = 0;
       }
      } while (0);
      i41 = HEAP32[i9 >> 2] | 0;
      HEAP32[i26 >> 2] = i69;
      HEAP32[i27 >> 2] = i41;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i14, i4, i5);
      i41 = HEAP32[i26 >> 2] | 0;
      do {
       if ((i41 | 0) != 0) {
        i50 = i41 + 8 | 0;
        i42 = i50 | 0;
        i43 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
        HEAP32[i42 >> 2] = i43;
        if ((i43 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
       }
      } while (0);
      i41 = HEAP32[i28 >> 2] | 0;
      HEAP32[i28 >> 2] = 0;
      i50 = HEAP32[i17 >> 2] | 0;
      HEAP32[i17 >> 2] = i41;
      do {
       if ((i50 | 0) != 0) {
        i41 = i50 + 8 | 0;
        i43 = i41 | 0;
        i42 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
        HEAP32[i43 >> 2] = i42;
        if ((i42 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
       }
      } while (0);
      HEAP32[i18 >> 2] = HEAP32[i29 >> 2];
      i50 = HEAP32[i30 >> 2] | 0;
      i41 = HEAP32[i23 >> 2] & -8 | i50 & 7;
      HEAP32[i23 >> 2] = i41;
      HEAP8[i22] = i41 & 255 & -9 | i50 & 8;
      i50 = HEAP32[i28 >> 2] | 0;
      do {
       if ((i50 | 0) != 0) {
        i41 = i50 + 8 | 0;
        i42 = i41 | 0;
        i43 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
        HEAP32[i42 >> 2] = i43;
        if ((i43 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
       }
      } while (0);
      do {
       if (__ZNK7WebCore8Position11isCandidateEv(i6) | 0) {
        __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i15, i6, 1);
        i50 = HEAP32[i31 >> 2] | 0;
        if ((i50 | 0) != (HEAP32[i32 >> 2] | 0)) {
         i70 = 1;
         i71 = i50;
         i25 = 130;
         break;
        }
        do {
         if ((HEAP8[i33] & 8) == 0) {
          i50 = HEAP32[i34 >> 2] & 7;
          if (!((i50 | 0) == 2 | (i50 | 0) == 4)) {
           i25 = 118;
           break;
          }
          i72 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i15) | 0;
         } else {
          i25 = 118;
         }
        } while (0);
        if ((i25 | 0) == 118) {
         i25 = 0;
         i72 = HEAP32[i35 >> 2] | 0;
        }
        do {
         if ((HEAP8[i36] & 8) == 0) {
          i50 = HEAP32[i37 >> 2] & 7;
          if (!((i50 | 0) == 2 | (i50 | 0) == 4)) {
           i25 = 122;
           break;
          }
          i73 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
         } else {
          i25 = 122;
         }
        } while (0);
        if ((i25 | 0) == 122) {
         i25 = 0;
         i73 = HEAP32[i38 >> 2] | 0;
        }
        if ((i72 | 0) != (i73 | 0)) {
         i74 = 1;
         i25 = 129;
         break;
        }
        if (((HEAP32[i37 >> 2] ^ HEAP32[i34 >> 2]) & 7 | 0) == 0) {
         i75 = 1;
         i25 = 126;
        } else {
         i74 = 1;
         i25 = 129;
        }
       } else {
        i75 = 0;
        i25 = 126;
       }
      } while (0);
      do {
       if ((i25 | 0) == 126) {
        i25 = 0;
        if (__ZNK7WebCore8Position13atStartOfTreeEv(i6) | 0) {
         if (i75) {
          i74 = 1;
          i25 = 129;
          break;
         } else {
          i25 = 136;
          break L10;
         }
        } else {
         i50 = __ZNK7WebCore8Position11atEndOfTreeEv(i6) | 0;
         if (i75) {
          i74 = i50;
          i25 = 129;
          break;
         } else {
          i76 = i50;
          i25 = 134;
          break;
         }
        }
       }
      } while (0);
      if ((i25 | 0) == 129) {
       i25 = 0;
       i70 = i74;
       i71 = HEAP32[i31 >> 2] | 0;
       i25 = 130;
      }
      do {
       if ((i25 | 0) == 130) {
        i25 = 0;
        if ((i71 | 0) == 0) {
         i76 = i70;
         i25 = 134;
         break;
        }
        i50 = i71 + 8 | 0;
        i41 = i50 | 0;
        i43 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
        HEAP32[i41 >> 2] = i43;
        if ((i43 | 0) >= 1) {
         i76 = i70;
         i25 = 134;
         break;
        }
        if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
         i76 = i70;
         i25 = 134;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
        if (i70) {
         i25 = 136;
         break L10;
        }
       }
      } while (0);
      if ((i25 | 0) == 134) {
       i25 = 0;
       if (i76) {
        i25 = 136;
        break;
       }
      }
      __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityENS_13TextDirectionERPNS_9InlineBoxERi(i6, HEAP32[i19 >> 2] | 0, i20, i8, i9);
      i50 = HEAP32[i8 >> 2] | 0;
      if ((i50 | 0) == 0) {
       i25 = 8;
       break L8;
      } else {
       i40 = i50;
      }
     }
     if ((i25 | 0) == 41) {
      if (i39) {
       __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i10, i16);
      } else {
       __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i10, i16);
      }
      i40 = i10 | 0;
      if ((HEAP32[i40 >> 2] | 0) == 0) {
       HEAP32[i1 >> 2] = 0;
       HEAP32[i1 + 4 >> 2] = 0;
       i31 = i1 + 8 | 0;
       i34 = i31;
       i37 = HEAP32[i34 >> 2] | 0;
       HEAP32[i34 >> 2] = i37 & -8;
       HEAP8[i31] = i37 & 255 & -16;
       break;
      }
      __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityENS_13TextDirectionERPNS_9InlineBoxERi(i10, HEAP32[i19 >> 2] | 0, i20, i11, i12);
      i37 = HEAP32[i11 >> 2] | 0;
      do {
       if ((i37 | 0) != 0) {
        i31 = __ZN7WebCore9InlineBox4rootEv(i37) | 0;
        if ((i31 | 0) != (__ZN7WebCore9InlineBox4rootEv(HEAP32[i8 >> 2] | 0) | 0)) {
         break;
        }
        HEAP32[i1 >> 2] = 0;
        HEAP32[i1 + 4 >> 2] = 0;
        i31 = i1 + 8 | 0;
        i34 = i31;
        i38 = HEAP32[i34 >> 2] | 0;
        HEAP32[i34 >> 2] = i38 & -8;
        HEAP8[i31] = i38 & 255 & -16;
        i38 = HEAP32[i40 >> 2] | 0;
        if ((i38 | 0) == 0) {
         break L8;
        }
        i31 = i38 + 8 | 0;
        i38 = i31 | 0;
        i34 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
        HEAP32[i38 >> 2] = i34;
        if ((i34 | 0) >= 1) {
         break L8;
        }
        if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
         break L8;
        }
        __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
        break L8;
       }
      } while (0);
      i37 = HEAP32[i40 >> 2] | 0;
      HEAP32[i40 >> 2] = 0;
      HEAP32[i1 >> 2] = i37;
      HEAP32[i1 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
      i37 = HEAP32[i10 + 8 >> 2] | 0;
      i31 = i1 + 8 | 0;
      i34 = i31;
      i38 = HEAP32[i34 >> 2] & -8 | i37 & 7;
      HEAP32[i34 >> 2] = i38;
      HEAP8[i31] = i38 & 255 & -9 | i37 & 8;
      break;
     } else if ((i25 | 0) == 19) {
      if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] & 4 | 0) == 0) {
       __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i1, i16);
       break;
      } else {
       __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i1, i16);
       break;
      }
     } else if ((i25 | 0) == 26) {
      if (i39) {
       __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i1, i16);
       break;
      } else {
       __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i1, i16);
       break;
      }
     } else if ((i25 | 0) == 136) {
      i37 = HEAP32[i17 >> 2] | 0;
      HEAP32[i17 >> 2] = 0;
      HEAP32[i1 >> 2] = i37;
      HEAP32[i1 + 4 >> 2] = HEAP32[i18 >> 2];
      i37 = HEAP32[i23 >> 2] | 0;
      i38 = i1 + 8 | 0;
      i31 = i38;
      i34 = HEAP32[i31 >> 2] & -8 | i37 & 7;
      HEAP32[i31 >> 2] = i34;
      HEAP8[i38] = i34 & 255 & -9 | i37 & 8;
      break;
     }
    }
   } while (0);
   do {
    if ((i25 | 0) == 8) {
     if ((i20 | 0) == 1) {
      __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i1, i16);
      break;
     } else {
      __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i1, i16);
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i7 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i19 = i20 + 8 | 0;
   i20 = i19 | 0;
   i24 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i17 = i7 + 8 | 0;
 i7 = i17 | 0;
 i16 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i16;
 if ((i16 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15VisiblePosition29leftVisuallyDistinctCandidateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 80 | 0;
 i12 = i3 + 88 | 0;
 i13 = i3 + 96 | 0;
 i14 = i3 + 104 | 0;
 i15 = i3 + 120 | 0;
 i16 = i2 | 0;
 i17 = i6 | 0;
 i18 = HEAP32[i2 >> 2] | 0;
 HEAP32[i17 >> 2] = i18;
 if ((i18 | 0) == 0) {
  i19 = i6 + 8 | 0;
  i20 = 0;
  i21 = 1;
  i22 = i19;
  i23 = i19;
 } else {
  i19 = i18 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  i19 = i6 + 8 | 0;
  i18 = i19;
  i20 = HEAP32[i18 >> 2] & -8;
  i21 = (HEAP32[i17 >> 2] | 0) == 0;
  i22 = i19;
  i23 = i18;
 }
 i18 = i6 + 4 | 0;
 HEAP32[i18 >> 2] = HEAP32[i2 + 4 >> 2];
 i19 = HEAP32[i2 + 8 >> 2] | 0;
 i24 = i20 | i19 & 7;
 HEAP32[i23 >> 2] = i24;
 HEAP8[i22] = i24 & 255 & -9 | i19 & 8;
 do {
  if (i21) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i19 = i1 + 8 | 0;
   i24 = i19;
   i20 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = i20 & -8;
   HEAP8[i19] = i20 & 255 & -16;
  } else {
   __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i7, i6, 1);
   i20 = __ZNK7WebCore8Position16primaryDirectionEv(i6) | 0;
   i19 = i2 + 12 | 0;
   __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityENS_13TextDirectionERPNS_9InlineBoxERi(i6, HEAP32[i19 >> 2] | 0, i20, i8, i9);
   i24 = HEAP32[i8 >> 2] | 0;
   L7 : do {
    if ((i24 | 0) == 0) {
     i25 = 8;
    } else {
     i26 = i4 | 0;
     i27 = i5 | 0;
     i28 = i14 | 0;
     i29 = i14 + 4 | 0;
     i30 = i14 + 8 | 0;
     i31 = i15 | 0;
     i32 = i7 | 0;
     i33 = i15 + 8 | 0;
     i34 = i33;
     i35 = i15 + 4 | 0;
     i36 = i7 + 8 | 0;
     i37 = i36;
     i38 = i7 + 4 | 0;
     i39 = (i20 | 0) == 1;
     i40 = i24;
     L9 : while (1) {
      i41 = HEAP32[i40 + 16 >> 2] | 0;
      L11 : while (1) {
       i42 = i41 + 20 | 0;
       i43 = HEAP32[i42 >> 2] | 0;
       do {
        if ((i43 & 2048 | 0) == 0) {
         if ((i43 & 4096 | 0) == 0) {
          break;
         }
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i41 >> 2] | 0) + 620 >> 2] & 1](i41) | 0)) {
          i25 = 15;
         }
        } else {
         i25 = 15;
        }
       } while (0);
       if ((i25 | 0) == 15) {
        i25 = 0;
        i43 = HEAP32[i9 >> 2] | 0;
        i44 = HEAP32[i8 >> 2] | 0;
        i45 = HEAP32[i44 >> 2] | 0;
        if ((HEAP32[i44 + 32 >> 2] & 4 | 0) == 0) {
         i46 = FUNCTION_TABLE_ii[HEAP32[i45 + 92 >> 2] & 1](i44) | 0;
        } else {
         i46 = FUNCTION_TABLE_ii[HEAP32[i45 + 88 >> 2] & 1](i44) | 0;
        }
        if ((i43 | 0) == (i46 | 0)) {
         i25 = 19;
         break L9;
        }
       }
       do {
        if ((HEAP32[i42 >> 2] & 128 | 0) == 0) {
         i43 = HEAP32[i8 >> 2] | 0;
         if ((HEAP32[i41 + 4 >> 2] | 0) == 0) {
          i47 = i43;
          break;
         }
         i44 = HEAP32[i41 >> 2] | 0;
         if ((HEAP32[i43 + 32 >> 2] & 4 | 0) == 0) {
          i48 = FUNCTION_TABLE_iii[HEAP32[i44 + 572 >> 2] & 1](i41, HEAP32[i9 >> 2] | 0) | 0;
         } else {
          i48 = FUNCTION_TABLE_iii[HEAP32[i44 + 580 >> 2] & 1](i41, HEAP32[i9 >> 2] | 0) | 0;
         }
         HEAP32[i9 >> 2] = i48;
         i44 = HEAP32[i8 >> 2] | 0;
         i43 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i44 >> 2] | 0) + 88 >> 2] & 1](i44) | 0;
         i44 = HEAP32[i8 >> 2] | 0;
         i45 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i44 >> 2] | 0) + 92 >> 2] & 1](i44) | 0;
         i44 = HEAP32[i9 >> 2] | 0;
         if ((i44 | 0) > (i43 | 0) & (i44 | 0) < (i45 | 0)) {
          i49 = i41;
          break L11;
         }
         i50 = HEAP32[i8 >> 2] | 0;
         i51 = HEAP32[i50 + 32 >> 2] | 0;
         if ((i51 & 4 | 0) == 0) {
          if ((i44 | 0) < (i43 | 0)) {
           i25 = 40;
          }
         } else {
          if ((i44 | 0) > (i45 | 0)) {
           i25 = 40;
          }
         }
         if ((i25 | 0) == 40) {
          i25 = 0;
          i45 = __ZNK7WebCore9InlineBox30prevLeafChildIgnoringLineBreakEv(i50) | 0;
          if ((i45 | 0) == 0) {
           i25 = 41;
           break L9;
          }
          HEAP32[i8 >> 2] = i45;
          i44 = HEAP32[i45 + 16 >> 2] | 0;
          i43 = HEAP32[i45 >> 2] | 0;
          if ((HEAP32[i45 + 32 >> 2] & 4 | 0) == 0) {
           i52 = FUNCTION_TABLE_ii[HEAP32[i43 + 92 >> 2] & 1](i45) | 0;
          } else {
           i52 = FUNCTION_TABLE_ii[HEAP32[i43 + 88 >> 2] & 1](i45) | 0;
          }
          HEAP32[i9 >> 2] = i52;
          i41 = i44;
          continue L11;
         }
         i53 = i51 >>> 2 & 63;
         i51 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i50) | 0;
         i54 = HEAP32[i8 >> 2] | 0;
         i50 = (i51 | 0) == 0;
         if (((HEAP32[i54 + 32 >> 2] | 0) >>> 2 & 1 ^ 1 | 0) == (i20 | 0)) {
          if (i50) {
           i25 = 60;
           break L11;
          }
          i44 = i51 + 32 | 0;
          i45 = (HEAP32[i44 >> 2] | 0) >>> 2 & 63;
          if ((i45 & 255) >>> 0 < (i53 & 255) >>> 0) {
           i55 = i54;
          } else {
           i49 = i41;
           break L11;
          }
          while (1) {
           i43 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i55) | 0;
           if ((i43 | 0) == 0) {
            break;
           }
           i56 = (HEAP32[i43 + 32 >> 2] | 0) >>> 2 & 63;
           if ((i56 & 255) >>> 0 > (i45 & 255) >>> 0) {
            i55 = i43;
           } else {
            i25 = 71;
            break;
           }
          }
          if ((i25 | 0) == 71) {
           i25 = 0;
           if (i56 << 24 >> 24 == i45 << 24 >> 24) {
            i49 = i41;
            break L11;
           }
          }
          HEAP32[i8 >> 2] = i51;
          i43 = HEAP32[i51 + 16 >> 2] | 0;
          i57 = HEAP32[i51 >> 2] | 0;
          if ((HEAP32[i44 >> 2] & 4 | 0) == 0) {
           i58 = FUNCTION_TABLE_ii[HEAP32[i57 + 92 >> 2] & 1](i51) | 0;
          } else {
           i58 = FUNCTION_TABLE_ii[HEAP32[i57 + 88 >> 2] & 1](i51) | 0;
          }
          HEAP32[i9 >> 2] = i58;
          if (((HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0) >>> 2 & 1 ^ 1 | 0) == (i20 | 0)) {
           i49 = i43;
           break L11;
          } else {
           i41 = i43;
           continue L11;
          }
         }
         if (i50) {
          i25 = 86;
          break L11;
         } else {
          i59 = i51;
         }
         while (1) {
          i60 = i59 + 16 | 0;
          i43 = HEAP32[i60 >> 2] | 0;
          if ((HEAP32[i43 + 20 >> 2] & 128 | 0) == 0) {
           if ((HEAP32[i43 + 4 >> 2] | 0) != 0) {
            break;
           }
          }
          i43 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i59) | 0;
          if ((i43 | 0) == 0) {
           i25 = 86;
           break L11;
          } else {
           i59 = i43;
          }
         }
         HEAP32[i8 >> 2] = i59;
         i51 = HEAP32[i60 >> 2] | 0;
         i50 = HEAP32[i59 >> 2] | 0;
         if ((HEAP32[i59 + 32 >> 2] & 4 | 0) == 0) {
          i61 = FUNCTION_TABLE_ii[HEAP32[i50 + 92 >> 2] & 1](i59) | 0;
         } else {
          i61 = FUNCTION_TABLE_ii[HEAP32[i50 + 88 >> 2] & 1](i59) | 0;
         }
         HEAP32[i9 >> 2] = i61;
         if (((HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 > (i53 & 255) >>> 0) {
          i62 = i59;
         } else {
          i49 = i51;
          break L11;
         }
         while (1) {
          i62 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i62) | 0;
          if ((i62 | 0) == 0) {
           i41 = i51;
           continue L11;
          }
          i63 = (HEAP32[i62 + 32 >> 2] | 0) >>> 2 & 63;
          if ((i63 & 255) >>> 0 <= (i53 & 255) >>> 0) {
           break;
          }
         }
         if ((i63 & 255) >>> 0 < (i53 & 255) >>> 0) {
          i41 = i51;
          continue L11;
         } else {
          i49 = i51;
          break L11;
         }
        } else {
         i47 = HEAP32[i8 >> 2] | 0;
        }
       } while (0);
       i42 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i47) | 0;
       HEAP32[i8 >> 2] = i42;
       if ((i42 | 0) == 0) {
        i25 = 26;
        break L9;
       }
       i50 = HEAP32[i42 + 16 >> 2] | 0;
       i44 = HEAP32[i42 >> 2] | 0;
       if ((HEAP32[i42 + 32 >> 2] & 4 | 0) == 0) {
        i64 = FUNCTION_TABLE_ii[HEAP32[i44 + 92 >> 2] & 1](i42) | 0;
       } else {
        i64 = FUNCTION_TABLE_ii[HEAP32[i44 + 88 >> 2] & 1](i42) | 0;
       }
       HEAP32[i9 >> 2] = i64;
       i41 = i50;
      }
      do {
       if ((i25 | 0) == 86) {
        i25 = 0;
        i50 = i53;
        i42 = HEAP32[i8 >> 2] | 0;
        while (1) {
         i44 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i42) | 0;
         L81 : do {
          if ((i44 | 0) != 0) {
           i45 = i44;
           while (1) {
            if (((HEAP32[i45 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i50 & 255) >>> 0) {
             break L81;
            }
            HEAP32[i8 >> 2] = i45;
            i45 = __ZNK7WebCore9InlineBox13nextLeafChildEv(i45) | 0;
            if ((i45 | 0) == 0) {
             break;
            }
           }
          }
         } while (0);
         i44 = HEAP32[i8 >> 2] | 0;
         i51 = (HEAP32[i44 + 32 >> 2] | 0) >>> 2 & 63;
         if (i51 << 24 >> 24 == i50 << 24 >> 24) {
          i65 = i44;
          break;
         }
         i45 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i44) | 0;
         L87 : do {
          if ((i45 | 0) != 0) {
           i44 = i45;
           while (1) {
            if (((HEAP32[i44 + 32 >> 2] | 0) >>> 2 & 255 & 63) >>> 0 < (i51 & 255) >>> 0) {
             break L87;
            }
            HEAP32[i8 >> 2] = i44;
            i44 = __ZNK7WebCore9InlineBox13prevLeafChildEv(i44) | 0;
            if ((i44 | 0) == 0) {
             break;
            }
           }
          }
         } while (0);
         i45 = HEAP32[i8 >> 2] | 0;
         i44 = (HEAP32[i45 + 32 >> 2] | 0) >>> 2 & 63;
         if (i44 << 24 >> 24 == i51 << 24 >> 24) {
          i65 = i45;
          break;
         } else {
          i50 = i44;
          i42 = i45;
         }
        }
        i42 = HEAP32[i65 + 16 >> 2] | 0;
        i50 = HEAP32[i65 >> 2] | 0;
        if (i39) {
         i66 = FUNCTION_TABLE_ii[HEAP32[i50 + 88 >> 2] & 1](i65) | 0;
        } else {
         i66 = FUNCTION_TABLE_ii[HEAP32[i50 + 92 >> 2] & 1](i65) | 0;
        }
        HEAP32[i9 >> 2] = i66;
        i49 = i42;
       } else if ((i25 | 0) == 60) {
        i25 = 0;
        HEAP32[i13 >> 2] = 0;
        i42 = __ZN7WebCore9InlineBox4rootEv(i54) | 0;
        if (i39) {
         i67 = __ZNK7WebCore13RootInlineBox26getLogicalStartBoxWithNodeERPNS_9InlineBoxE(i42, i13) | 0;
        } else {
         i67 = __ZNK7WebCore13RootInlineBox24getLogicalEndBoxWithNodeERPNS_9InlineBoxE(i42, i13) | 0;
        }
        if ((i67 | 0) == 0) {
         i49 = i41;
         break;
        }
        i42 = HEAP32[i13 >> 2] | 0;
        HEAP32[i8 >> 2] = i42;
        i50 = HEAP32[i42 + 16 >> 2] | 0;
        i45 = HEAP32[i42 >> 2] | 0;
        if (i39) {
         i68 = FUNCTION_TABLE_ii[HEAP32[i45 + 88 >> 2] & 1](i42) | 0;
        } else {
         i68 = FUNCTION_TABLE_ii[HEAP32[i45 + 92 >> 2] & 1](i42) | 0;
        }
        HEAP32[i9 >> 2] = i68;
        i49 = i50;
       }
      } while (0);
      do {
       if ((HEAP32[i49 + 20 >> 2] & 128 | 0) == 0) {
        i41 = HEAP32[i49 + 4 >> 2] | 0;
        if ((i41 | 0) == 0) {
         i69 = 0;
         break;
        }
        i50 = i41 + 8 | 0;
        HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
        i69 = i41;
       } else {
        i69 = 0;
       }
      } while (0);
      i41 = HEAP32[i9 >> 2] | 0;
      HEAP32[i26 >> 2] = i69;
      HEAP32[i27 >> 2] = i41;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i14, i4, i5);
      i41 = HEAP32[i26 >> 2] | 0;
      do {
       if ((i41 | 0) != 0) {
        i50 = i41 + 8 | 0;
        i42 = i50 | 0;
        i45 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
        HEAP32[i42 >> 2] = i45;
        if ((i45 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
       }
      } while (0);
      i41 = HEAP32[i28 >> 2] | 0;
      HEAP32[i28 >> 2] = 0;
      i50 = HEAP32[i17 >> 2] | 0;
      HEAP32[i17 >> 2] = i41;
      do {
       if ((i50 | 0) != 0) {
        i41 = i50 + 8 | 0;
        i45 = i41 | 0;
        i42 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
        HEAP32[i45 >> 2] = i42;
        if ((i42 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
       }
      } while (0);
      HEAP32[i18 >> 2] = HEAP32[i29 >> 2];
      i50 = HEAP32[i30 >> 2] | 0;
      i41 = HEAP32[i23 >> 2] & -8 | i50 & 7;
      HEAP32[i23 >> 2] = i41;
      HEAP8[i22] = i41 & 255 & -9 | i50 & 8;
      i50 = HEAP32[i28 >> 2] | 0;
      do {
       if ((i50 | 0) != 0) {
        i41 = i50 + 8 | 0;
        i42 = i41 | 0;
        i45 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
        HEAP32[i42 >> 2] = i45;
        if ((i45 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
       }
      } while (0);
      do {
       if (__ZNK7WebCore8Position11isCandidateEv(i6) | 0) {
        __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i15, i6, 1);
        i50 = HEAP32[i31 >> 2] | 0;
        if ((i50 | 0) != (HEAP32[i32 >> 2] | 0)) {
         i70 = 1;
         i71 = i50;
         i25 = 130;
         break;
        }
        do {
         if ((HEAP8[i33] & 8) == 0) {
          i50 = HEAP32[i34 >> 2] & 7;
          if (!((i50 | 0) == 2 | (i50 | 0) == 4)) {
           i25 = 118;
           break;
          }
          i72 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i15) | 0;
         } else {
          i25 = 118;
         }
        } while (0);
        if ((i25 | 0) == 118) {
         i25 = 0;
         i72 = HEAP32[i35 >> 2] | 0;
        }
        do {
         if ((HEAP8[i36] & 8) == 0) {
          i50 = HEAP32[i37 >> 2] & 7;
          if (!((i50 | 0) == 2 | (i50 | 0) == 4)) {
           i25 = 122;
           break;
          }
          i73 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
         } else {
          i25 = 122;
         }
        } while (0);
        if ((i25 | 0) == 122) {
         i25 = 0;
         i73 = HEAP32[i38 >> 2] | 0;
        }
        if ((i72 | 0) != (i73 | 0)) {
         i74 = 1;
         i25 = 129;
         break;
        }
        if (((HEAP32[i37 >> 2] ^ HEAP32[i34 >> 2]) & 7 | 0) == 0) {
         i75 = 1;
         i25 = 126;
        } else {
         i74 = 1;
         i25 = 129;
        }
       } else {
        i75 = 0;
        i25 = 126;
       }
      } while (0);
      do {
       if ((i25 | 0) == 126) {
        i25 = 0;
        if (__ZNK7WebCore8Position13atStartOfTreeEv(i6) | 0) {
         if (i75) {
          i74 = 1;
          i25 = 129;
          break;
         } else {
          i25 = 136;
          break L9;
         }
        } else {
         i50 = __ZNK7WebCore8Position11atEndOfTreeEv(i6) | 0;
         if (i75) {
          i74 = i50;
          i25 = 129;
          break;
         } else {
          i76 = i50;
          i25 = 134;
          break;
         }
        }
       }
      } while (0);
      if ((i25 | 0) == 129) {
       i25 = 0;
       i70 = i74;
       i71 = HEAP32[i31 >> 2] | 0;
       i25 = 130;
      }
      do {
       if ((i25 | 0) == 130) {
        i25 = 0;
        if ((i71 | 0) == 0) {
         i76 = i70;
         i25 = 134;
         break;
        }
        i50 = i71 + 8 | 0;
        i41 = i50 | 0;
        i45 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
        HEAP32[i41 >> 2] = i45;
        if ((i45 | 0) >= 1) {
         i76 = i70;
         i25 = 134;
         break;
        }
        if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
         i76 = i70;
         i25 = 134;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
        if (i70) {
         i25 = 136;
         break L9;
        }
       }
      } while (0);
      if ((i25 | 0) == 134) {
       i25 = 0;
       if (i76) {
        i25 = 136;
        break;
       }
      }
      __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityENS_13TextDirectionERPNS_9InlineBoxERi(i6, HEAP32[i19 >> 2] | 0, i20, i8, i9);
      i50 = HEAP32[i8 >> 2] | 0;
      if ((i50 | 0) == 0) {
       i25 = 8;
       break L7;
      } else {
       i40 = i50;
      }
     }
     if ((i25 | 0) == 41) {
      if (i39) {
       __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i10, i16);
      } else {
       __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i10, i16);
      }
      i40 = i10 | 0;
      if ((HEAP32[i40 >> 2] | 0) == 0) {
       HEAP32[i1 >> 2] = 0;
       HEAP32[i1 + 4 >> 2] = 0;
       i31 = i1 + 8 | 0;
       i34 = i31;
       i37 = HEAP32[i34 >> 2] | 0;
       HEAP32[i34 >> 2] = i37 & -8;
       HEAP8[i31] = i37 & 255 & -16;
       break;
      }
      __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityENS_13TextDirectionERPNS_9InlineBoxERi(i10, HEAP32[i19 >> 2] | 0, i20, i11, i12);
      i37 = HEAP32[i11 >> 2] | 0;
      do {
       if ((i37 | 0) != 0) {
        i31 = __ZN7WebCore9InlineBox4rootEv(i37) | 0;
        if ((i31 | 0) != (__ZN7WebCore9InlineBox4rootEv(HEAP32[i8 >> 2] | 0) | 0)) {
         break;
        }
        HEAP32[i1 >> 2] = 0;
        HEAP32[i1 + 4 >> 2] = 0;
        i31 = i1 + 8 | 0;
        i34 = i31;
        i38 = HEAP32[i34 >> 2] | 0;
        HEAP32[i34 >> 2] = i38 & -8;
        HEAP8[i31] = i38 & 255 & -16;
        i38 = HEAP32[i40 >> 2] | 0;
        if ((i38 | 0) == 0) {
         break L7;
        }
        i31 = i38 + 8 | 0;
        i38 = i31 | 0;
        i34 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
        HEAP32[i38 >> 2] = i34;
        if ((i34 | 0) >= 1) {
         break L7;
        }
        if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
         break L7;
        }
        __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
        break L7;
       }
      } while (0);
      i37 = HEAP32[i40 >> 2] | 0;
      HEAP32[i40 >> 2] = 0;
      HEAP32[i1 >> 2] = i37;
      HEAP32[i1 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
      i37 = HEAP32[i10 + 8 >> 2] | 0;
      i31 = i1 + 8 | 0;
      i34 = i31;
      i38 = HEAP32[i34 >> 2] & -8 | i37 & 7;
      HEAP32[i34 >> 2] = i38;
      HEAP8[i31] = i38 & 255 & -9 | i37 & 8;
      break;
     } else if ((i25 | 0) == 26) {
      if (i39) {
       __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i1, i16);
       break;
      } else {
       __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i1, i16);
       break;
      }
     } else if ((i25 | 0) == 19) {
      if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] & 4 | 0) == 0) {
       __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i1, i16);
       break;
      } else {
       __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i1, i16);
       break;
      }
     } else if ((i25 | 0) == 136) {
      i37 = HEAP32[i17 >> 2] | 0;
      HEAP32[i17 >> 2] = 0;
      HEAP32[i1 >> 2] = i37;
      HEAP32[i1 + 4 >> 2] = HEAP32[i18 >> 2];
      i37 = HEAP32[i23 >> 2] | 0;
      i38 = i1 + 8 | 0;
      i31 = i38;
      i34 = HEAP32[i31 >> 2] & -8 | i37 & 7;
      HEAP32[i31 >> 2] = i34;
      HEAP8[i38] = i34 & 255 & -9 | i37 & 8;
      break;
     }
    }
   } while (0);
   do {
    if ((i25 | 0) == 8) {
     if ((i20 | 0) == 1) {
      __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i1, i16);
      break;
     } else {
      __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i1, i16);
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i7 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i19 = i20 + 8 | 0;
   i20 = i19 | 0;
   i24 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i17 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i17 = i7 + 8 | 0;
 i7 = i17 | 0;
 i16 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i16;
 if ((i16 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15VisiblePosition17canonicalPositionERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i4 = i2 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 64 | 0;
 i9 = i2 + 80 | 0;
 i10 = i2 + 96 | 0;
 i11 = i2 + 112 | 0;
 i12 = i2 + 128 | 0;
 i13 = i6 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 HEAP32[i13 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i15 = i6 + 8 | 0;
  i16 = 0;
  i17 = 0;
  i18 = i15;
  i19 = i15;
 } else {
  i15 = i14 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  i15 = i6 + 8 | 0;
  i14 = i15;
  i16 = HEAP32[i14 >> 2] & -8;
  i17 = HEAP32[i13 >> 2] | 0;
  i18 = i15;
  i19 = i14;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 i14 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = i16 | i14 & 7;
 HEAP32[i19 >> 2] = i3;
 HEAP8[i18] = i3 & 255 & -9 | i14 & 8;
 do {
  if ((i17 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i14 = i1 + 8 | 0;
   i3 = i14;
   i18 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i18 & -8;
   HEAP8[i14] = i18 & 255 & -16;
  } else {
   __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i17 + 20 >> 2] | 0) + 8 >> 2] | 0);
   i18 = __ZNK7WebCore8Position13containerNodeEv(i6) | 0;
   __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i7, i6, 1);
   do {
    if (__ZNK7WebCore8Position11isCandidateEv(i7) | 0) {
     i14 = i7 | 0;
     i3 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i1 >> 2] = i3;
     HEAP32[i1 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
     i3 = HEAP32[i7 + 8 >> 2] | 0;
     i14 = i1 + 8 | 0;
     i19 = i14;
     i16 = HEAP32[i19 >> 2] & -8 | i3 & 7;
     HEAP32[i19 >> 2] = i16;
     HEAP8[i14] = i16 & 255 & -9 | i3 & 8;
    } else {
     __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i8, i6, 1);
     i3 = i8 | 0;
     i16 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = 0;
     i14 = i7 | 0;
     i19 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i16;
     do {
      if ((i19 | 0) != 0) {
       i16 = i19 + 8 | 0;
       i15 = i16 | 0;
       i20 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
       HEAP32[i15 >> 2] = i20;
       if ((i20 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
      }
     } while (0);
     i19 = i7 + 4 | 0;
     HEAP32[i19 >> 2] = HEAP32[i8 + 4 >> 2];
     i16 = HEAP32[i8 + 8 >> 2] | 0;
     i20 = i7 + 8 | 0;
     i15 = i20;
     i21 = HEAP32[i15 >> 2] & -8 | i16 & 7;
     HEAP32[i15 >> 2] = i21;
     HEAP8[i20] = i21 & 255 & -9 | i16 & 8;
     i16 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i21 = i16 + 8 | 0;
       i20 = i21 | 0;
       i22 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       HEAP32[i20 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
      }
     } while (0);
     if (__ZNK7WebCore8Position11isCandidateEv(i7) | 0) {
      i16 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = 0;
      HEAP32[i1 >> 2] = i16;
      HEAP32[i1 + 4 >> 2] = HEAP32[i19 >> 2];
      i16 = HEAP32[i15 >> 2] | 0;
      i3 = i1 + 8 | 0;
      i21 = i3;
      i22 = HEAP32[i21 >> 2] & -8 | i16 & 7;
      HEAP32[i21 >> 2] = i22;
      HEAP8[i3] = i22 & 255 & -9 | i16 & 8;
      break;
     }
     __ZN7WebCore13nextCandidateERKNS_8PositionE(i10, i6);
     i16 = i10 | 0;
     do {
      if ((HEAP32[i16 >> 2] | 0) == 0) {
       HEAP32[i9 >> 2] = 0;
       HEAP32[i9 + 4 >> 2] = 0;
       i22 = i9 + 8 | 0;
       i3 = i22;
       i21 = HEAP32[i3 >> 2] | 0;
       HEAP32[i3 >> 2] = i21 & -8;
       HEAP8[i22] = i21 & 255 & -16;
      } else {
       __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i5, i10, 1);
       i21 = i9 | 0;
       if (__ZNK7WebCore8Position11isCandidateEv(i5) | 0) {
        i22 = i5 | 0;
        i3 = HEAP32[i22 >> 2] | 0;
        HEAP32[i22 >> 2] = 0;
        HEAP32[i21 >> 2] = i3;
        HEAP32[i9 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
        i3 = HEAP32[i5 + 8 >> 2] | 0;
        i22 = i9 + 8 | 0;
        i20 = i22;
        i23 = HEAP32[i20 >> 2] & -8 | i3 & 7;
        HEAP32[i20 >> 2] = i23;
        HEAP8[i22] = i23 & 255 & -9 | i3 & 8;
        break;
       }
       i3 = HEAP32[i16 >> 2] | 0;
       HEAP32[i21 >> 2] = i3;
       if ((i3 | 0) != 0) {
        i21 = i3 + 8 | 0;
        HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
       }
       HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
       i21 = HEAP32[i10 + 8 >> 2] | 0;
       i3 = i9 + 8 | 0;
       i23 = i3;
       i22 = HEAP32[i23 >> 2] & -8 | i21 & 7;
       HEAP32[i23 >> 2] = i22;
       HEAP8[i3] = i22 & 255 & -9 | i21 & 8;
       i21 = HEAP32[i5 >> 2] | 0;
       if ((i21 | 0) == 0) {
        break;
       }
       i22 = i21 + 8 | 0;
       i21 = i22 | 0;
       i3 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
       HEAP32[i21 >> 2] = i3;
       if ((i3 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     i15 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i19 = i15 + 8 | 0;
       i14 = i19 | 0;
       i22 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       HEAP32[i14 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore17previousCandidateERKNS_8PositionE(i12, i6);
     i15 = i12 | 0;
     do {
      if ((HEAP32[i15 >> 2] | 0) == 0) {
       HEAP32[i11 >> 2] = 0;
       HEAP32[i11 + 4 >> 2] = 0;
       i16 = i11 + 8 | 0;
       i19 = i16;
       i22 = HEAP32[i19 >> 2] | 0;
       HEAP32[i19 >> 2] = i22 & -8;
       HEAP8[i16] = i22 & 255 & -16;
      } else {
       __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i4, i12, 1);
       i22 = i11 | 0;
       if (__ZNK7WebCore8Position11isCandidateEv(i4) | 0) {
        i16 = i4 | 0;
        i19 = HEAP32[i16 >> 2] | 0;
        HEAP32[i16 >> 2] = 0;
        HEAP32[i22 >> 2] = i19;
        HEAP32[i11 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
        i19 = HEAP32[i4 + 8 >> 2] | 0;
        i16 = i11 + 8 | 0;
        i14 = i16;
        i3 = HEAP32[i14 >> 2] & -8 | i19 & 7;
        HEAP32[i14 >> 2] = i3;
        HEAP8[i16] = i3 & 255 & -9 | i19 & 8;
        break;
       }
       i19 = HEAP32[i15 >> 2] | 0;
       HEAP32[i22 >> 2] = i19;
       if ((i19 | 0) != 0) {
        i22 = i19 + 8 | 0;
        HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
       }
       HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
       i22 = HEAP32[i12 + 8 >> 2] | 0;
       i19 = i11 + 8 | 0;
       i3 = i19;
       i16 = HEAP32[i3 >> 2] & -8 | i22 & 7;
       HEAP32[i3 >> 2] = i16;
       HEAP8[i19] = i16 & 255 & -9 | i22 & 8;
       i22 = HEAP32[i4 >> 2] | 0;
       if ((i22 | 0) == 0) {
        break;
       }
       i16 = i22 + 8 | 0;
       i22 = i16 | 0;
       i19 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i19;
       if ((i19 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
      }
     } while (0);
     i16 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       i19 = i16 + 8 | 0;
       i22 = i19 | 0;
       i3 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i3;
       if ((i3 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
      }
     } while (0);
     i16 = i9 | 0;
     i15 = HEAP32[i16 >> 2] | 0;
     i19 = i11 | 0;
     i3 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i18 | 0) == 0) {
       i24 = 57;
      } else {
       if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
        i24 = 57;
        break;
       }
       i22 = HEAP32[i18 + 44 >> 2] | 0;
       i14 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
       if ((i22 | 0) != (i14 | 0)) {
        if ((HEAP32[i22 + 12 >> 2] | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
         i24 = 57;
         break;
        }
        if ((HEAP32[i22 + 16 >> 2] | 0) != (HEAP32[i14 + 16 >> 2] | 0)) {
         i24 = 57;
         break;
        }
       }
       if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i18, 0, 1) | 0) {
        i24 = 57;
        break;
       }
       i14 = i18 + 20 | 0;
       if ((__ZNK7WebCore8Document4bodyEv(HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
        i24 = 57;
        break;
       }
       if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(__ZNK7WebCore8Document4bodyEv(HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0) | 0, 0, 1) | 0)) {
        i24 = 57;
        break;
       }
       i14 = (HEAP32[i16 >> 2] | 0) != 0 ? i9 : i11;
       i22 = HEAP32[i14 >> 2] | 0;
       HEAP32[i1 >> 2] = i22;
       if ((i22 | 0) != 0) {
        i21 = i22 + 8 | 0;
        HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
       }
       HEAP32[i1 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
       i21 = HEAP32[i14 + 8 >> 2] | 0;
       i14 = i1 + 8 | 0;
       i22 = i14;
       i23 = HEAP32[i22 >> 2] & -8 | i21 & 7;
       HEAP32[i22 >> 2] = i23;
       HEAP8[i14] = i23 & 255 & -9 | i21 & 8;
      }
     } while (0);
     L73 : do {
      if ((i24 | 0) == 57) {
       i21 = __ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i6, 0) | 0;
       do {
        if ((i21 | 0) == 0) {
         i24 = 62;
        } else {
         if ((HEAP32[i21 + 12 >> 2] & 4 | 0) == 0) {
          i24 = 62;
          break;
         }
         i23 = HEAP32[i21 + 44 >> 2] | 0;
         i14 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
         if ((i23 | 0) == (i14 | 0)) {
          break;
         }
         if ((HEAP32[i23 + 12 >> 2] | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
          i24 = 62;
          break;
         }
         if ((HEAP32[i23 + 16 >> 2] | 0) != (HEAP32[i14 + 16 >> 2] | 0)) {
          i24 = 62;
         }
        }
       } while (0);
       do {
        if ((i24 | 0) == 62) {
         i14 = HEAP32[i13 >> 2] | 0;
         if ((HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i14 | 0)) {
          break;
         }
         if ((i3 | 0) == 0) {
          i25 = 0;
         } else {
          i25 = (__ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i11, 0) | 0) == (i21 | 0);
         }
         if ((i15 | 0) == 0) {
          i26 = 0;
         } else {
          i26 = (__ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i9, 0) | 0) == (i21 | 0);
         }
         if (!(i26 | i25 ^ 1)) {
          i14 = HEAP32[i19 >> 2] | 0;
          HEAP32[i19 >> 2] = 0;
          HEAP32[i1 >> 2] = i14;
          HEAP32[i1 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
          i14 = HEAP32[i11 + 8 >> 2] | 0;
          i23 = i1 + 8 | 0;
          i22 = i23;
          i20 = HEAP32[i22 >> 2] & -8 | i14 & 7;
          HEAP32[i22 >> 2] = i20;
          HEAP8[i23] = i20 & 255 & -9 | i14 & 8;
          break L73;
         }
         if (!(i25 | i26 ^ 1)) {
          i14 = HEAP32[i16 >> 2] | 0;
          HEAP32[i16 >> 2] = 0;
          HEAP32[i1 >> 2] = i14;
          HEAP32[i1 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
          i14 = HEAP32[i9 + 8 >> 2] | 0;
          i20 = i1 + 8 | 0;
          i23 = i20;
          i22 = HEAP32[i23 >> 2] & -8 | i14 & 7;
          HEAP32[i23 >> 2] = i22;
          HEAP8[i20] = i22 & 255 & -9 | i14 & 8;
          break L73;
         }
         if (!(i26 | i25)) {
          HEAP32[i1 >> 2] = 0;
          HEAP32[i1 + 4 >> 2] = 0;
          i14 = i1 + 8 | 0;
          i22 = i14;
          i20 = HEAP32[i22 >> 2] | 0;
          HEAP32[i22 >> 2] = i20 & -8;
          HEAP8[i14] = i20 & 255 & -16;
          break L73;
         }
         i20 = __ZN7WebCore35deprecatedEnclosingBlockFlowElementEPNS_4NodeE(i18) | 0;
         i14 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i15, i20) | 0;
         i22 = i1 | 0;
         if (i14 | (i15 | 0) == (i20 | 0) | (i3 | 0) != (i20 | 0) & ((__ZNK7WebCore4Node14isDescendantOfEPKS0_(i3, i20) | 0) ^ 1)) {
          i20 = HEAP32[i16 >> 2] | 0;
          HEAP32[i16 >> 2] = 0;
          HEAP32[i22 >> 2] = i20;
          HEAP32[i1 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
          i20 = HEAP32[i9 + 8 >> 2] | 0;
          i14 = i1 + 8 | 0;
          i23 = i14;
          i27 = HEAP32[i23 >> 2] & -8 | i20 & 7;
          HEAP32[i23 >> 2] = i27;
          HEAP8[i14] = i27 & 255 & -9 | i20 & 8;
          break L73;
         } else {
          i20 = HEAP32[i19 >> 2] | 0;
          HEAP32[i19 >> 2] = 0;
          HEAP32[i22 >> 2] = i20;
          HEAP32[i1 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
          i20 = HEAP32[i11 + 8 >> 2] | 0;
          i22 = i1 + 8 | 0;
          i27 = i22;
          i14 = HEAP32[i27 >> 2] & -8 | i20 & 7;
          HEAP32[i27 >> 2] = i14;
          HEAP8[i22] = i14 & 255 & -9 | i20 & 8;
          break L73;
         }
        }
       } while (0);
       i21 = (HEAP32[i16 >> 2] | 0) != 0 ? i9 : i11;
       i20 = HEAP32[i21 >> 2] | 0;
       HEAP32[i1 >> 2] = i20;
       if ((i20 | 0) != 0) {
        i14 = i20 + 8 | 0;
        HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
       }
       HEAP32[i1 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
       i14 = HEAP32[i21 + 8 >> 2] | 0;
       i21 = i1 + 8 | 0;
       i20 = i21;
       i22 = HEAP32[i20 >> 2] & -8 | i14 & 7;
       HEAP32[i20 >> 2] = i22;
       HEAP8[i21] = i22 & 255 & -9 | i14 & 8;
      }
     } while (0);
     i3 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i15 = i3 + 8 | 0;
       i14 = i15 | 0;
       i22 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       HEAP32[i14 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
      }
     } while (0);
     i3 = HEAP32[i16 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     i19 = i3 + 8 | 0;
     i3 = i19 | 0;
     i15 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     HEAP32[i3 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i18 = HEAP32[i7 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i19 = i18 + 8 | 0;
   i18 = i19 | 0;
   i15 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i13 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i13 = i7 + 8 | 0;
 i7 = i13 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore15VisiblePosition30honorEditingBoundaryAtOrBeforeERKS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i3 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
  i9 = i3 + 8 | 0;
  i10 = i1 + 8 | 0;
  i11 = i10;
  i12 = HEAP32[i11 >> 2] & -8 | HEAP32[i9 >> 2] & 7;
  HEAP32[i11 >> 2] = i12;
  HEAP8[i10] = i12 & 255 & -9 | HEAP8[i9] & 8;
  HEAP32[i1 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
  STACKTOP = i4;
  return;
 }
 i9 = i5 | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 HEAP32[i9 >> 2] = i12;
 if ((i12 | 0) == 0) {
  i10 = i5 + 8 | 0;
  i13 = 0;
  i14 = i10;
  i15 = i10;
 } else {
  i10 = i12 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i5 + 8 | 0;
  i12 = i10;
  i13 = HEAP32[i12 >> 2] & -8;
  i14 = i10;
  i15 = i12;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i12 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i13 | i12 & 7;
 HEAP32[i15 >> 2] = i2;
 HEAP8[i14] = i2 & 255 & -9 | i12 & 8;
 i12 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i5, 0) | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i2 = i9 | 0;
   i14 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i5 = (i12 | 0) != 0;
 L14 : do {
  if (i5) {
   i9 = HEAP32[i8 >> 2] | 0;
   L16 : do {
    if ((i9 | 0) == 0) {
     if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i9, i12) | 0) {
      break L14;
     }
    } else {
     i14 = i9 + 8 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     i14 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i9, i12) | 0;
     i2 = i9 + 8 | 0;
     i15 = i2 - 8 | 0;
     i13 = i2 | 0;
     i10 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i10;
     do {
      if ((i10 | 0) < 1) {
       if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15);
       if (i14) {
        break L14;
       } else {
        break L16;
       }
      }
     } while (0);
     if (i14) {
      break L14;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i9 = i1 + 8 | 0;
   i15 = i9;
   i2 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i2 & -8;
   HEAP8[i9] = i2 & 255 & -16;
   HEAP32[i1 + 12 >> 2] = 1;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i2 = i6 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i2 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i15 = i9 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 i15 = i3 + 4 | 0;
 HEAP32[i6 + 4 >> 2] = HEAP32[i15 >> 2];
 i9 = i3 + 8 | 0;
 i10 = i9;
 i13 = HEAP32[i10 >> 2] | 0;
 i11 = i6 + 8 | 0;
 i16 = i11;
 i17 = HEAP32[i16 >> 2] & -8 | i13 & 7;
 HEAP32[i16 >> 2] = i17;
 HEAP8[i11] = i17 & 255 & -9 | i13 & 8;
 i13 = (__ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i6, 0) | 0) == (i12 | 0);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 8 | 0;
   i17 = i2 | 0;
   i11 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 if (i13) {
  i13 = HEAP32[i8 >> 2] | 0;
  HEAP32[i1 >> 2] = i13;
  if ((i13 | 0) != 0) {
   i6 = i13 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i15 >> 2];
  i6 = i1 + 8 | 0;
  i13 = i6;
  i2 = HEAP32[i13 >> 2] & -8 | HEAP32[i10 >> 2] & 7;
  HEAP32[i13 >> 2] = i2;
  HEAP8[i6] = i2 & 255 & -9 | HEAP8[i9] & 8;
  HEAP32[i1 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
  STACKTOP = i4;
  return;
 }
 if (!i5) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i5 = i1 + 8 | 0;
  i3 = i5;
  i9 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i9 & -8;
  HEAP8[i5] = i9 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
  STACKTOP = i4;
  return;
 }
 i9 = i7 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i9 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i8 = i5 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i15 >> 2];
 i15 = HEAP32[i10 >> 2] | 0;
 i10 = i7 + 8 | 0;
 i8 = i10;
 i5 = HEAP32[i8 >> 2] & -8 | i15 & 7;
 HEAP32[i8 >> 2] = i5;
 HEAP8[i10] = i5 & 255 & -9 | i15 & 8;
 __ZN7WebCore40lastEditablePositionBeforePositionInRootERKNS_8PositionEPNS_4NodeE(i1, i7, i12);
 i12 = HEAP32[i9 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i12 + 8 | 0;
 i12 = i9 | 0;
 i7 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i7;
 if ((i7 | 0) >= 1) {
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
function __ZNK7WebCore15VisiblePosition29honorEditingBoundaryAtOrAfterERKS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i3 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
  i9 = i3 + 8 | 0;
  i10 = i1 + 8 | 0;
  i11 = i10;
  i12 = HEAP32[i11 >> 2] & -8 | HEAP32[i9 >> 2] & 7;
  HEAP32[i11 >> 2] = i12;
  HEAP8[i10] = i12 & 255 & -9 | HEAP8[i9] & 8;
  HEAP32[i1 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
  STACKTOP = i4;
  return;
 }
 i9 = i5 | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 HEAP32[i9 >> 2] = i12;
 if ((i12 | 0) == 0) {
  i10 = i5 + 8 | 0;
  i13 = 0;
  i14 = i10;
  i15 = i10;
 } else {
  i10 = i12 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i5 + 8 | 0;
  i12 = i10;
  i13 = HEAP32[i12 >> 2] & -8;
  i14 = i10;
  i15 = i12;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i12 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i13 | i12 & 7;
 HEAP32[i15 >> 2] = i2;
 HEAP8[i14] = i2 & 255 & -9 | i12 & 8;
 i12 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i5, 0) | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i2 = i9 | 0;
   i14 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i5 = (i12 | 0) != 0;
 L14 : do {
  if (i5) {
   i9 = HEAP32[i8 >> 2] | 0;
   L16 : do {
    if ((i9 | 0) == 0) {
     if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i9, i12) | 0) {
      break L14;
     }
    } else {
     i14 = i9 + 8 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     i14 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i9, i12) | 0;
     i2 = i9 + 8 | 0;
     i15 = i2 - 8 | 0;
     i13 = i2 | 0;
     i10 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i10;
     do {
      if ((i10 | 0) < 1) {
       if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15);
       if (i14) {
        break L14;
       } else {
        break L16;
       }
      }
     } while (0);
     if (i14) {
      break L14;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i9 = i1 + 8 | 0;
   i15 = i9;
   i2 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i2 & -8;
   HEAP8[i9] = i2 & 255 & -16;
   HEAP32[i1 + 12 >> 2] = 1;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i2 = i6 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i2 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i15 = i9 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 i15 = i3 + 4 | 0;
 HEAP32[i6 + 4 >> 2] = HEAP32[i15 >> 2];
 i9 = i3 + 8 | 0;
 i10 = i9;
 i13 = HEAP32[i10 >> 2] | 0;
 i11 = i6 + 8 | 0;
 i16 = i11;
 i17 = HEAP32[i16 >> 2] & -8 | i13 & 7;
 HEAP32[i16 >> 2] = i17;
 HEAP8[i11] = i17 & 255 & -9 | i13 & 8;
 i13 = (__ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i6, 0) | 0) == (i12 | 0);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 8 | 0;
   i17 = i2 | 0;
   i11 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 if (i13) {
  i13 = HEAP32[i8 >> 2] | 0;
  HEAP32[i1 >> 2] = i13;
  if ((i13 | 0) != 0) {
   i6 = i13 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i15 >> 2];
  i6 = i1 + 8 | 0;
  i13 = i6;
  i2 = HEAP32[i13 >> 2] & -8 | HEAP32[i10 >> 2] & 7;
  HEAP32[i13 >> 2] = i2;
  HEAP8[i6] = i2 & 255 & -9 | HEAP8[i9] & 8;
  HEAP32[i1 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
  STACKTOP = i4;
  return;
 }
 if (!i5) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i5 = i1 + 8 | 0;
  i3 = i5;
  i9 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i9 & -8;
  HEAP8[i5] = i9 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
  STACKTOP = i4;
  return;
 }
 i9 = i7 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i9 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i8 = i5 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i15 >> 2];
 i15 = HEAP32[i10 >> 2] | 0;
 i10 = i7 + 8 | 0;
 i8 = i10;
 i5 = HEAP32[i8 >> 2] & -8 | i15 & 7;
 HEAP32[i8 >> 2] = i5;
 HEAP8[i10] = i5 & 255 & -9 | i15 & 8;
 __ZN7WebCore40firstEditablePositionAfterPositionInRootERKNS_8PositionEPNS_4NodeE(i1, i7, i12);
 i12 = HEAP32[i9 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i12 + 8 | 0;
 i12 = i9 | 0;
 i7 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i7;
 if ((i7 | 0) >= 1) {
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
function __ZN7WebCore9makeRangeERKNS_15VisiblePositionES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 72 | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i12 = i3 | 0;
   if ((HEAP32[i12 >> 2] | 0) == 0) {
    break;
   }
   i13 = i6 | 0;
   HEAP32[i13 >> 2] = i11;
   i14 = i11 + 8 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   HEAP32[i6 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   i14 = HEAP32[i2 + 8 >> 2] | 0;
   i15 = i6 + 8 | 0;
   i16 = i15;
   i17 = HEAP32[i16 >> 2] & -8 | i14 & 7;
   HEAP32[i16 >> 2] = i17;
   HEAP8[i15] = i17 & 255 & -9 | i14 & 8;
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i5, i6);
   i14 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i13 = i14 + 8 | 0;
     i17 = i13 | 0;
     i15 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   i14 = i8 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i14 >> 2] = i13;
   if ((i13 | 0) != 0) {
    i15 = i13 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   HEAP32[i8 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
   i15 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = i8 + 8 | 0;
   i17 = i13;
   i16 = HEAP32[i17 >> 2] & -8 | i15 & 7;
   HEAP32[i17 >> 2] = i16;
   HEAP8[i13] = i16 & 255 & -9 | i15 & 8;
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i7, i8);
   i15 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i14 = i15 + 8 | 0;
     i16 = i14 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i13;
     if ((i13 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i15 = i5 | 0;
   i12 = i7 | 0;
   do {
    if ((HEAP32[i15 >> 2] | 0) == 0) {
     i18 = 16;
    } else {
     if ((HEAP32[i12 >> 2] | 0) == 0) {
      i18 = 16;
      break;
     }
     i14 = HEAP32[(HEAP32[(__ZNK7WebCore8Position13containerNodeEv(i5) | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
     i13 = __ZNK7WebCore8Position13containerNodeEv(i5) | 0;
     i16 = i9 | 0;
     HEAP32[i16 >> 2] = i13;
     if ((i13 | 0) != 0) {
      i17 = i13 + 8 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     }
     i17 = HEAP32[i5 + 4 >> 2] | 0;
     i13 = __ZNK7WebCore8Position13containerNodeEv(i7) | 0;
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i13;
     if ((i13 | 0) != 0) {
      i20 = i13 + 8 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     }
     __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i1, i14, i9, i17, i10, HEAP32[i7 + 4 >> 2] | 0);
     i17 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i19 = i17 + 8 | 0;
       i14 = i19 | 0;
       i20 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       HEAP32[i14 >> 2] = i20;
       if ((i20 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
      }
     } while (0);
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i19 = i17 + 8 | 0;
     i17 = i19 | 0;
     i20 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   if ((i18 | 0) == 16) {
    HEAP32[i1 >> 2] = 0;
   }
   i19 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i20 = i19 + 8 | 0;
     i17 = i20 | 0;
     i14 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i19 = HEAP32[i15 >> 2] | 0;
   if ((i19 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i12 = i19 + 8 | 0;
   i19 = i12 | 0;
   i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15VisiblePosition4initERKNS_8PositionENS_9EAffinityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = i3;
 __ZN7WebCore15VisiblePosition17canonicalPositionERKNS_8PositionE(i5, 0, i2);
 i3 = i5 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 do {
  if ((i10 | 0) != 0) {
   i8 = i10 + 8 | 0;
   i11 = i8 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i10 = HEAP32[i5 + 8 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i8 = i5;
 i12 = HEAP32[i8 >> 2] & -8 | i10 & 7;
 HEAP32[i8 >> 2] = i12;
 HEAP8[i5] = i12 & 255 & -9 | i10 & 8;
 i10 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 + 8 | 0;
   i12 = i3 | 0;
   i5 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 L14 : do {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   i10 = i6 | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   i3 = i6 + 8 | 0;
   i5 = i3;
   i12 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i12 & -8;
   HEAP8[i3] = i12 & 255 & -16;
   __ZN7WebCore15VisiblePosition4initERKNS_8PositionENS_9EAffinityE(i6, i2, 1);
   i12 = __ZN7WebCore10inSameLineERKNS_15VisiblePositionES2_(i6, i1) | 0;
   i3 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i10 = i3 + 8 | 0;
     i5 = i10 | 0;
     i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     HEAP32[i5 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
     if (i12) {
      break L14;
     }
     STACKTOP = i4;
     return;
    }
   } while (0);
   if (i12) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i7 >> 2] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore8setStartEPNS_5RangeERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 if ((i1 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = i5 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = i5 + 8 | 0;
  i12 = 0;
  i13 = i11;
  i14 = i11;
 } else {
  i11 = i10 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i11 = i5 + 8 | 0;
  i10 = i11;
  i12 = HEAP32[i10 >> 2] & -8;
  i13 = i11;
  i14 = i10;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i12 | i10 & 7;
 HEAP32[i14 >> 2] = i2;
 HEAP8[i13] = i2 & 255 & -9 | i10 & 8;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i4, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i10 = i9 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 HEAP32[i6 >> 2] = 0;
 i5 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Range8setStartEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i7, HEAP32[i4 + 4 >> 2] | 0, i6);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 8 | 0;
   i1 = i9 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i7 = (HEAP32[i6 >> 2] | 0) == 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i8 = i7;
  STACKTOP = i3;
  return i8 | 0;
 }
 i4 = i6 + 8 | 0;
 i6 = i4 | 0;
 i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  i8 = i7;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i8 = i7;
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i8 = i7;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore6setEndEPNS_5RangeERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 if ((i1 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = i5 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = i5 + 8 | 0;
  i12 = 0;
  i13 = i11;
  i14 = i11;
 } else {
  i11 = i10 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i11 = i5 + 8 | 0;
  i10 = i11;
  i12 = HEAP32[i10 >> 2] & -8;
  i13 = i11;
  i14 = i10;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i12 | i10 & 7;
 HEAP32[i14 >> 2] = i2;
 HEAP8[i13] = i2 & 255 & -9 | i10 & 8;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i4, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i10 = i9 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 HEAP32[i6 >> 2] = 0;
 i5 = __ZNK7WebCore8Position13containerNodeEv(i4) | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Range6setEndEN3WTF10PassRefPtrINS_4NodeEEEiRi(i1, i7, HEAP32[i4 + 4 >> 2] | 0, i6);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 8 | 0;
   i1 = i9 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i7 = (HEAP32[i6 >> 2] | 0) == 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i8 = i7;
  STACKTOP = i3;
  return i8 | 0;
 }
 i4 = i6 + 8 | 0;
 i6 = i4 | 0;
 i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  i8 = i7;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i8 = i7;
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i8 = i7;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore28isFirstVisiblePositionInNodeERKNS_15VisiblePositionEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i6;
 i9 = i6 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = i4 + 8 | 0;
 i10 = i6;
 i11 = HEAP32[i10 >> 2] & -8 | i9 & 7;
 HEAP32[i10 >> 2] = i11;
 HEAP8[i6] = i11 & 255 & -9 | i9 & 8;
 i9 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(__ZNK7WebCore8Position13containerNodeEv(i4) | 0, i2) | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 8 | 0;
   i11 = i8 | 0;
   i6 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 if (!i9) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i5, i1, 0);
 i1 = i5 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i9 = i5 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i5, i2) | 0) ^ 1;
 i2 = i5 + 8 | 0;
 i5 = i2 - 8 | 0;
 i4 = i2 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i8;
 do {
  if ((i8 | 0) < 1) {
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5);
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = i9;
  STACKTOP = i3;
  return i7 | 0;
 }
 i1 = i5 + 8 | 0;
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  i7 = i9;
  STACKTOP = i3;
  return i7 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  i7 = i9;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 i7 = i9;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore27isLastVisiblePositionInNodeERKNS_15VisiblePositionEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i6;
 i9 = i6 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = i4 + 8 | 0;
 i10 = i6;
 i11 = HEAP32[i10 >> 2] & -8 | i9 & 7;
 HEAP32[i10 >> 2] = i11;
 HEAP8[i6] = i11 & 255 & -9 | i9 & 8;
 i9 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(__ZNK7WebCore8Position13containerNodeEv(i4) | 0, i2) | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 8 | 0;
   i11 = i8 | 0;
   i6 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 if (!i9) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i5, i1, 0);
 i1 = i5 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i9 = i5 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i5, i2) | 0) ^ 1;
 i2 = i5 + 8 | 0;
 i5 = i2 - 8 | 0;
 i4 = i2 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i8;
 do {
  if ((i8 | 0) < 1) {
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5);
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = i9;
  STACKTOP = i3;
  return i7 | 0;
 }
 i1 = i5 + 8 | 0;
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  i7 = i9;
  STACKTOP = i3;
  return i7 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  i7 = i9;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 i7 = i9;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZNK7WebCore15VisiblePosition19absoluteCaretBoundsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 48 | 0;
 i9 = i8 | 0;
 i10 = i8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i12 = i2 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   _memset(i7 | 0, 0, 16) | 0;
  } else {
   i14 = i13 + 32 | 0;
   if ((HEAP32[i13 + 12 >> 2] & 2048 | 0) == 0) {
    i15 = i14 | 0;
   } else {
    i15 = HEAP32[i14 >> 2] | 0;
   }
   i14 = HEAP32[i15 >> 2] | 0;
   if ((i14 | 0) == 0) {
    _memset(i7 | 0, 0, 16) | 0;
    break;
   }
   __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i12, HEAP32[i2 + 12 >> 2] | 0, i5, i6);
   i16 = HEAP32[i5 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = i14;
   } else {
    i17 = HEAP32[i16 + 16 >> 2] | 0;
   }
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i17 >> 2] | 0) + 544 >> 2] & 1](i7, i17, i16, HEAP32[i6 >> 2] | 0, 0);
   if ((HEAP32[i7 + 8 >> 2] | 0) < 1) {
    break;
   }
   i16 = HEAP32[i7 + 12 >> 2] | 0;
   if ((i16 | 0) < 1 | (i17 | 0) == 0) {
    break;
   }
   d18 = +(HEAP32[i7 >> 2] | 0);
   d19 = +(HEAP32[i7 + 4 >> 2] | 0);
   d20 = +(HEAP32[i7 + 8 >> 2] | 0);
   d21 = +d18;
   d22 = +d19;
   HEAPF32[i9 >> 2] = d21;
   HEAPF32[i9 + 4 >> 2] = d22;
   d22 = d18 + d20;
   HEAPF32[i8 + 8 >> 2] = d22;
   HEAPF32[i10 + 12 >> 2] = d19;
   d20 = d19 + +(i16 | 0);
   HEAPF32[i8 + 16 >> 2] = d22;
   HEAPF32[i10 + 20 >> 2] = d20;
   HEAPF32[i8 + 24 >> 2] = d18;
   HEAPF32[i10 + 28 >> 2] = d20;
   __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i11, i17, i10, 0, 0, 0);
   __ZNK7WebCore9FloatQuad11boundingBoxEv(i4, i11);
   __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i4);
   STACKTOP = i3;
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 16) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15VisiblePosition5rightEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZNK7WebCore15VisiblePosition30rightVisuallyDistinctCandidateEv(i5, i2);
 do {
  if (__ZNK7WebCore8Position13atStartOfTreeEv(i5) | 0) {
   i7 = 3;
  } else {
   if (__ZNK7WebCore8Position11atEndOfTreeEv(i5) | 0) {
    i7 = 3;
    break;
   }
   i8 = i6 | 0;
   _memset(i6 | 0, 0, 12) | 0;
   __ZN7WebCore15VisiblePosition4initERKNS_8PositionENS_9EAffinityE(i6, i5, 1);
   if (!i3) {
    i9 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i1 >> 2] = i9;
    HEAP32[i1 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
    i9 = HEAP32[i6 + 8 >> 2] | 0;
    i10 = i1 + 8 | 0;
    i11 = i10;
    i12 = HEAP32[i11 >> 2] & -8 | i9 & 7;
    HEAP32[i11 >> 2] = i12;
    HEAP8[i10] = i12 & 255 & -9 | i9 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
    break;
   }
   __ZNK7WebCore15VisiblePosition29honorEditingBoundaryAtOrAfterERKS0_(i1, i2, i6);
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = i9 + 8 | 0;
   i9 = i8 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 if ((i7 | 0) == 3) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i7 = i1 + 8 | 0;
  i6 = i7;
  i2 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i2 & -8;
  HEAP8[i7] = i2 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
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
function __ZNK7WebCore15VisiblePosition4leftEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZNK7WebCore15VisiblePosition29leftVisuallyDistinctCandidateEv(i5, i2);
 do {
  if (__ZNK7WebCore8Position13atStartOfTreeEv(i5) | 0) {
   i7 = 3;
  } else {
   if (__ZNK7WebCore8Position11atEndOfTreeEv(i5) | 0) {
    i7 = 3;
    break;
   }
   i8 = i6 | 0;
   _memset(i6 | 0, 0, 12) | 0;
   __ZN7WebCore15VisiblePosition4initERKNS_8PositionENS_9EAffinityE(i6, i5, 1);
   if (!i3) {
    i9 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i1 >> 2] = i9;
    HEAP32[i1 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
    i9 = HEAP32[i6 + 8 >> 2] | 0;
    i10 = i1 + 8 | 0;
    i11 = i10;
    i12 = HEAP32[i11 >> 2] & -8 | i9 & 7;
    HEAP32[i11 >> 2] = i12;
    HEAP8[i10] = i12 & 255 & -9 | i9 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
    break;
   }
   __ZNK7WebCore15VisiblePosition30honorEditingBoundaryAtOrBeforeERKS0_(i1, i2, i6);
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = i9 + 8 | 0;
   i9 = i8 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 if ((i7 | 0) == 3) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i7 = i1 + 8 | 0;
  i6 = i7;
  i2 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i2 & -8;
  HEAP8[i7] = i2 & 255 & -16;
  HEAP32[i1 + 12 >> 2] = 1;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
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
function __ZNK7WebCore15VisiblePosition14characterAfterEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i3, i1 | 0, 1);
 do {
  if ((__ZNK7WebCore8Position13containerNodeEv(i3) | 0) == 0) {
   i4 = 0;
  } else {
   if ((HEAP32[(__ZNK7WebCore8Position13containerNodeEv(i3) | 0) + 12 >> 2] & 1 | 0) == 0) {
    i4 = 0;
    break;
   }
   if (((HEAP32[i3 + 8 >> 2] & 7) - 1 | 0) >>> 0 < 4 >>> 0) {
    i4 = 0;
    break;
   }
   i1 = HEAP32[i3 + 4 >> 2] | 0;
   i5 = HEAP32[(__ZNK7WebCore8Position13containerTextEv(i3) | 0) + 36 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i6 = 0;
   } else {
    i6 = HEAP32[i5 + 4 >> 2] | 0;
   }
   if (i1 >>> 0 >= i6 >>> 0) {
    i4 = 0;
    break;
   }
   i7 = i5 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) + 2 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
    i9 = HEAP32[i5 + 8 >> 2] | 0;
    i10 = i8;
   } else {
    i8 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i5) | 0;
    i9 = i8;
    i10 = HEAP32[i7 >> 2] | 0;
   }
   i8 = i10 - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
   } else {
    HEAP32[i7 >> 2] = i8;
   }
   i8 = i1 + 1 | 0;
   i7 = HEAPU16[i9 + (i1 << 1) >> 1] | 0;
   if (!((i7 & 64512 | 0) == 55296 & i8 >>> 0 < i6 >>> 0)) {
    i4 = i7;
    break;
   }
   i1 = HEAPU16[i9 + (i8 << 1) >> 1] | 0;
   if ((i1 & 64512 | 0) != 56320) {
    i4 = i7;
    break;
   }
   i4 = (i7 << 10) - 56613888 + i1 | 0;
  }
 } while (0);
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return i4 | 0;
 }
 i3 = i9 + 8 | 0;
 i9 = i3 | 0;
 i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i2;
  return i4 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return i4 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i2;
 return i4 | 0;
}
function __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i5, i2 | 0);
 do {
  if (__ZNK7WebCore8Position13atStartOfTreeEv(i5) | 0) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i7 = i1 + 8 | 0;
   i8 = i7;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i9 & -8;
   HEAP8[i7] = i9 & 255 & -16;
   HEAP32[i1 + 12 >> 2] = 1;
  } else {
   i9 = i6 | 0;
   _memset(i6 | 0, 0, 12) | 0;
   __ZN7WebCore15VisiblePosition4initERKNS_8PositionENS_9EAffinityE(i6, i5, 1);
   if ((i3 | 0) == 0) {
    i7 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i1 >> 2] = i7;
    HEAP32[i1 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
    i7 = HEAP32[i6 + 8 >> 2] | 0;
    i8 = i1 + 8 | 0;
    i10 = i8;
    i11 = HEAP32[i10 >> 2] & -8 | i7 & 7;
    HEAP32[i10 >> 2] = i11;
    HEAP8[i8] = i11 & 255 & -9 | i7 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
    break;
   }
   __ZNK7WebCore15VisiblePosition30honorEditingBoundaryAtOrBeforeERKS0_(i1, i2, i6);
   i7 = HEAP32[i9 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i9 = i7 + 8 | 0;
   i7 = i9 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i6 + 8 | 0;
 i6 = i5 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i2 | 0) >= 1) {
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
function __ZNK7WebCore15VisiblePosition45lineDirectionPointForBlockDirectionNavigationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 if ((i10 | 0) == 0) {
  _memset(i5 | 0, 0, 16) | 0;
  i11 = 0;
  STACKTOP = i2;
  return i11 | 0;
 }
 i12 = i10 + 32 | 0;
 if ((HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0) {
  i13 = i12 | 0;
 } else {
  i13 = HEAP32[i12 >> 2] | 0;
 }
 i12 = HEAP32[i13 >> 2] | 0;
 if ((i12 | 0) == 0) {
  _memset(i5 | 0, 0, 16) | 0;
  i11 = 0;
  STACKTOP = i2;
  return i11 | 0;
 }
 __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i1 | 0, HEAP32[i1 + 12 >> 2] | 0, i3, i4);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i14 = i12;
 } else {
  i14 = HEAP32[i1 + 16 >> 2] | 0;
 }
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i14 >> 2] | 0) + 544 >> 2] & 1](i7, i14, i1, HEAP32[i4 >> 2] | 0, 0);
 if ((HEAP32[i5 + 8 >> 2] | 0) < 1) {
  i11 = 0;
  STACKTOP = i2;
  return i11 | 0;
 }
 if ((HEAP32[i7 + 12 >> 2] | 0) < 1 | (i14 | 0) == 0) {
  i11 = 0;
  STACKTOP = i2;
  return i11 | 0;
 }
 d15 = +(HEAP32[i6 + 4 >> 2] | 0);
 HEAPF32[i9 >> 2] = +(HEAP32[i6 >> 2] | 0);
 HEAPF32[i9 + 4 >> 2] = d15;
 __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i8, i14, i9, 0);
 i9 = __ZNK7WebCore12RenderObject15containingBlockEv(i14) | 0;
 if ((HEAP32[((i9 | 0) == 0 ? i14 : i9 | 0) + 20 >> 2] & 8192 | 0) == 0) {
  d16 = +HEAPF32[i8 + 4 >> 2];
 } else {
  d16 = +HEAPF32[i8 >> 2];
 }
 i11 = ~~d16;
 STACKTOP = i2;
 return i11 | 0;
}
function __ZN7WebCore20startVisiblePositionEPKNS_5RangeENS_9EAffinityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) > -1) {
  i10 = i9;
 } else {
  i9 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i8 >> 2] = i9;
  i10 = i9;
 }
 i9 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = i10;
 } else {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i11 = HEAP32[i8 >> 2] | 0;
 }
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i9;
 HEAP32[i6 >> 2] = i11;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i7, i5, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 8 | 0;
   i5 = i8 | 0;
   i11 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i6 = i1 + 8 | 0;
 i8 = i6;
 i11 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i11 & -8;
 HEAP8[i6] = i11 & 255 & -16;
 __ZN7WebCore15VisiblePosition4initERKNS_8PositionENS_9EAffinityE(i1, i7, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i3 + 8 | 0;
 i3 = i7 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) >= 1) {
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
function __ZN7WebCore18endVisiblePositionEPKNS_5RangeENS_9EAffinityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 + 24 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) > -1) {
  i10 = i9;
 } else {
  i9 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i8 >> 2] = i9;
  i10 = i9;
 }
 i9 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = i10;
 } else {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i11 = HEAP32[i8 >> 2] | 0;
 }
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i9;
 HEAP32[i6 >> 2] = i11;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i7, i5, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 8 | 0;
   i5 = i8 | 0;
   i11 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i6 = i1 + 8 | 0;
 i8 = i6;
 i11 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i11 & -8;
 HEAP8[i6] = i11 & 255 & -16;
 __ZN7WebCore15VisiblePosition4initERKNS_8PositionENS_9EAffinityE(i1, i7, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i3 + 8 | 0;
 i3 = i7 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) >= 1) {
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
function __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i6, i2 | 0);
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i8 = i5 | 0;
 i9 = i5 + 4 | 0;
 i10 = i5 + 8 | 0;
 _memset(i5 | 0, 0, 12) | 0;
 __ZN7WebCore15VisiblePosition4initERKNS_8PositionENS_9EAffinityE(i5, i6, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 8 | 0;
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 if ((i3 | 0) == 0) {
  i3 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 >> 2] = i3;
  HEAP32[i1 + 4 >> 2] = HEAP32[i9 >> 2];
  i9 = HEAP32[i10 >> 2] | 0;
  i10 = i1 + 8 | 0;
  i3 = i10;
  i7 = HEAP32[i3 >> 2] & -8 | i9 & 7;
  HEAP32[i3 >> 2] = i7;
  HEAP8[i10] = i7 & 255 & -9 | i9 & 8;
  HEAP32[i1 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore15VisiblePosition29honorEditingBoundaryAtOrAfterERKS0_(i1, i2, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i5 + 8 | 0;
 i5 = i8 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) >= 1) {
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
function __ZNK7WebCore15VisiblePosition14localCaretRectERPNS_12RenderObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i3 >> 2] = 0;
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 }
 i8 = i7 + 32 | 0;
 if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
  i9 = i8 | 0;
 } else {
  i9 = HEAP32[i8 >> 2] | 0;
 }
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i3 >> 2] = i8;
 if ((i8 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i2 | 0, HEAP32[i2 + 12 >> 2] | 0, i5, i6);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = HEAP32[i3 >> 2] | 0;
 } else {
  i5 = HEAP32[i2 + 16 >> 2] | 0;
  HEAP32[i3 >> 2] = i5;
  i10 = i5;
 }
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 544 >> 2] & 1](i1, i10, i2, HEAP32[i6 >> 2] | 0, 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore25enclosingBlockFlowElementERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i1 = __ZN7WebCore35deprecatedEnclosingBlockFlowElementEPNS_4NodeE(i2) | 0;
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i3 = i1;
  return i3 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i3 = i1;
  return i3 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i3 = i1;
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
function __ZN7WebCore15VisiblePositionC2ERKNS_8PositionENS_9EAffinityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i4 = i1 + 8 | 0;
 i5 = i4;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i6 & -8;
 HEAP8[i4] = i6 & 255 & -16;
 __ZN7WebCore15VisiblePosition4initERKNS_8PositionENS_9EAffinityE(i1, i2, i3);
 return;
}
function __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i4 = i1 + 8 | 0;
 i5 = i4;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i6 & -8;
 HEAP8[i4] = i6 & 255 & -16;
 __ZN7WebCore15VisiblePosition4initERKNS_8PositionENS_9EAffinityE(i1, i2, i3);
 return;
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
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore15VisiblePositionC2ERKNS_8PositionENS_9EAffinityE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15VisiblePosition17canonicalPositionERKNS_8PositionE","__ZNK7WebCore15VisiblePosition14localCaretRectERPNS_12RenderObjectE","__ZN7WebCore8setStartEPNS_5RangeERKNS_15VisiblePositionE","_strlen","__ZNK7WebCore15VisiblePosition29leftVisuallyDistinctCandidateEv","__ZNK7WebCore15VisiblePosition30rightVisuallyDistinctCandidateEv","__ZNK7WebCore15VisiblePosition30honorEditingBoundaryAtOrBeforeERKS0_","__ZN7WebCore27isLastVisiblePositionInNodeERKNS_15VisiblePositionEPKNS_4NodeE","_memset","__ZNK7WebCore15VisiblePosition4leftEb","_memcpy","__ZNK7WebCore15VisiblePosition29honorEditingBoundaryAtOrAfterERKS0_","__ZN7WebCore25enclosingBlockFlowElementERKNS_15VisiblePositionE","__ZN7WebCore15VisiblePosition4initERKNS_8PositionENS_9EAffinityE","__ZN7WebCore6setEndEPNS_5RangeERKNS_15VisiblePositionE","__ZNK7WebCore15VisiblePosition14characterAfterEv","__ZN7WebCore18endVisiblePositionEPKNS_5RangeENS_9EAffinityE","__ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE","__ZNK7WebCore15VisiblePosition45lineDirectionPointForBlockDirectionNavigationEv","__ZNK7WebCore15VisiblePosition19absoluteCaretBoundsEv","__ZN7WebCore9makeRangeERKNS_15VisiblePositionES2_","__ZNK7WebCore15VisiblePosition5rightEb","__ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE","__ZN7WebCore20startVisiblePositionEPKNS_5RangeENS_9EAffinityE","__ZN7WebCore15VisiblePositionC2ERKNS_8PositionENS_9EAffinityE","__ZN7WebCore28isFirstVisiblePositionInNodeERKNS_15VisiblePositionEPKNS_4NodeE"]

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
var __ZN7WebCore25HTMLFormattingElementListC1Ev;
var __ZN7WebCore25HTMLFormattingElementListD1Ev;
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
var Math_min = Math.min;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE=env.__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore25HTMLFormattingElementList23ensureNoahsArkConditionEPNS_13HTMLStackItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore25HTMLFormattingElementList35tryToEnsureNoahsArkConditionQuicklyEPNS_13HTMLStackItemERN3WTF6VectorIS2_Lj0ENS3_15CrashOnOverflowEEE(i1, i2, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (i4 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i9 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 2) | 0;
   i10 = __ZN3WTF10fastMallocEj(i9) | 0;
   i11 = i2 + 20 | 0;
   L6 : do {
    if ((HEAP32[i11 >> 2] | 0) == 0) {
     i12 = i10;
     i13 = i4;
     i14 = 6;
    } else {
     i15 = i2 + 12 | 0;
     i16 = i5;
     i17 = i9 >>> 2;
     i18 = i10;
     i19 = 0;
     i20 = i4;
     L8 : while (1) {
      i21 = HEAP32[i15 >> 2] | 0;
      if ((i20 | 0) == 0) {
       i22 = i18;
       i23 = 0;
       break L6;
      }
      i24 = i21 + (i19 << 3) | 0;
      i25 = i21 + (i19 << 3) + 4 | 0;
      i21 = 0;
      i26 = i17;
      i27 = i18;
      i28 = 0;
      while (1) {
       i29 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i28 << 2) >> 2] | 0;
       HEAP32[i5 >> 2] = i29;
       i30 = HEAP32[i29 + 20 >> 2] | 0;
       L13 : do {
        if ((i30 | 0) == 0) {
         i31 = i27;
         i32 = i26;
         i33 = i21;
        } else {
         i34 = HEAP32[i29 + 12 >> 2] | 0;
         i35 = HEAP32[i24 >> 2] | 0;
         i36 = i35 + 12 | 0;
         i37 = i35 + 16 | 0;
         i38 = 0;
         while (1) {
          i39 = HEAP32[i34 + (i38 << 3) >> 2] | 0;
          if ((i39 | 0) == (i35 | 0)) {
           break;
          }
          if ((HEAP32[i39 + 12 >> 2] | 0) == (HEAP32[i36 >> 2] | 0)) {
           if ((HEAP32[i39 + 16 >> 2] | 0) == (HEAP32[i37 >> 2] | 0)) {
            break;
           }
          }
          i39 = i38 + 1 | 0;
          if (i39 >>> 0 < i30 >>> 0) {
           i38 = i39;
          } else {
           i31 = i27;
           i32 = i26;
           i33 = i21;
           break L13;
          }
         }
         if (i30 >>> 0 <= i38 >>> 0) {
          i14 = 16;
          break L8;
         }
         if ((i34 + (i38 << 3) | 0) == 0) {
          i31 = i27;
          i32 = i26;
          i33 = i21;
          break;
         }
         if ((HEAP32[i34 + (i38 << 3) + 4 >> 2] | 0) != (HEAP32[i25 >> 2] | 0)) {
          i31 = i27;
          i32 = i26;
          i33 = i21;
          break;
         }
         if ((i21 | 0) != (i26 | 0)) {
          HEAP32[i27 + (i21 << 2) >> 2] = i29;
          i31 = i27;
          i32 = i26;
          i33 = i21 + 1 | 0;
          break;
         }
         i37 = i26 + 1 | 0;
         do {
          if (i27 >>> 0 > i5 >>> 0) {
           i14 = 24;
          } else {
           if ((i27 + (i26 << 2) | 0) >>> 0 <= i5 >>> 0) {
            i14 = 24;
            break;
           }
           i36 = i16 - i27 >> 2;
           i35 = i37 + (i26 >>> 2) | 0;
           i39 = i35 >>> 0 > 16 >>> 0 ? i35 : 16;
           i35 = i39 >>> 0 > i37 >>> 0 ? i39 : i37;
           do {
            if (i26 >>> 0 < i35 >>> 0) {
             if (i35 >>> 0 > 1073741823 >>> 0) {
              i14 = 31;
              break L8;
             }
             i39 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 2) | 0;
             i40 = i39 >>> 2;
             i41 = __ZN3WTF10fastMallocEj(i39) | 0;
             i39 = i41;
             i42 = i27;
             _memcpy(i41 | 0, i42 | 0, i26 << 2) | 0;
             if ((i27 | 0) == 0) {
              i43 = i39;
              i44 = i40;
              break;
             }
             i41 = (i39 | 0) == (i27 | 0);
             __ZN3WTF8fastFreeEPv(i42);
             i43 = i41 ? 0 : i39;
             i44 = i41 ? 0 : i40;
            } else {
             i43 = i27;
             i44 = i26;
            }
           } while (0);
           i45 = i43 + (i36 << 2) | 0;
           i46 = i43;
           i47 = i44;
          }
         } while (0);
         do {
          if ((i14 | 0) == 24) {
           i14 = 0;
           i38 = i37 + (i26 >>> 2) | 0;
           i34 = i38 >>> 0 > 16 >>> 0 ? i38 : 16;
           i38 = i34 >>> 0 > i37 >>> 0 ? i34 : i37;
           if (i26 >>> 0 >= i38 >>> 0) {
            i45 = i5;
            i46 = i27;
            i47 = i26;
            break;
           }
           if (i38 >>> 0 > 1073741823 >>> 0) {
            i14 = 26;
            break L8;
           }
           i34 = __ZN3WTF18fastMallocGoodSizeEj(i38 << 2) | 0;
           i38 = i34 >>> 2;
           i35 = __ZN3WTF10fastMallocEj(i34) | 0;
           i34 = i35;
           i40 = i27;
           _memcpy(i35 | 0, i40 | 0, i26 << 2) | 0;
           if ((i27 | 0) == 0) {
            i45 = i5;
            i46 = i34;
            i47 = i38;
            break;
           }
           i35 = (i34 | 0) == (i27 | 0);
           __ZN3WTF8fastFreeEPv(i40);
           i45 = i5;
           i46 = i35 ? 0 : i34;
           i47 = i35 ? 0 : i38;
          }
         } while (0);
         HEAP32[i46 + (i26 << 2) >> 2] = HEAP32[i45 >> 2];
         i31 = i46;
         i32 = i47;
         i33 = i37;
        }
       } while (0);
       i29 = i28 + 1 | 0;
       i48 = HEAP32[i8 >> 2] | 0;
       if (i29 >>> 0 < i48 >>> 0) {
        i21 = i33;
        i26 = i32;
        i27 = i31;
        i28 = i29;
       } else {
        break;
       }
      }
      if (i33 >>> 0 < 3 >>> 0) {
       i22 = i31;
       i23 = i48;
       break L6;
      }
      HEAP32[i8 >> 2] = i33;
      i28 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = i31;
      i27 = HEAP32[i7 >> 2] | 0;
      HEAP32[i7 >> 2] = i32;
      i26 = i19 + 1 | 0;
      if (i26 >>> 0 < (HEAP32[i11 >> 2] | 0) >>> 0) {
       i17 = i27;
       i18 = i28;
       i19 = i26;
       i20 = i33;
      } else {
       i12 = i28;
       i13 = i33;
       i14 = 6;
       break L6;
      }
     }
     if ((i14 | 0) == 26) {
      _WTFCrash();
     } else if ((i14 | 0) == 16) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i14 | 0) == 31) {
      _WTFCrash();
     }
    }
   } while (0);
   do {
    if ((i14 | 0) == 6) {
     if (i13 >>> 0 <= 2 >>> 0) {
      i22 = i12;
      i23 = i13;
      break;
     }
     i11 = HEAP32[i6 >> 2] | 0;
     i10 = 2;
     while (1) {
      __ZN7WebCore25HTMLFormattingElementList6removeEPNS_7ElementE(i1, HEAP32[(HEAP32[i11 + (i10 << 2) >> 2] | 0) + 4 >> 2] | 0);
      i9 = i10 + 1 | 0;
      if (i9 >>> 0 < i13 >>> 0) {
       i10 = i9;
      } else {
       i22 = i12;
       i23 = i13;
       break;
      }
     }
    }
   } while (0);
   if ((i22 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i22);
   }
   if ((i23 | 0) == 0) {
    break;
   }
   HEAP32[i8 >> 2] = 0;
  }
 } while (0);
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore25HTMLFormattingElementList35tryToEnsureNoahsArkConditionQuicklyEPNS_13HTMLStackItemERN3WTF6VectorIS2_Lj0ENS3_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 56 | 0;
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if (i8 >>> 0 < 3 >>> 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i5 + 12 | 0;
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = i9;
 i11 = i5 + 4 | 0;
 HEAP32[i11 >> 2] = 10;
 i12 = i5 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 i13 = i1 | 0;
 i1 = i2 + 8 | 0;
 i14 = i2 + 24 | 0;
 i2 = i6;
 i15 = i8;
 i16 = i8;
 L4 : while (1) {
  i8 = i15 - 1 | 0;
  if (i16 >>> 0 <= i8 >>> 0) {
   i17 = 4;
   break;
  }
  i18 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i8 << 2) >> 2] | 0;
  if ((i18 | 0) == 0) {
   i17 = 41;
   break;
  }
  i19 = i18 | 0;
  i20 = HEAP32[i19 >> 2] | 0;
  HEAP32[i19 >> 2] = i20 + 1;
  if ((i20 | 0) == 0) {
   __ZN7WebCore13HTMLStackItemD2Ev(i18);
   __ZN3WTF8fastFreeEPv(i18);
  } else {
   HEAP32[i19 >> 2] = i20;
  }
  HEAP32[i6 >> 2] = i18;
  do {
   if ((HEAP32[i1 >> 2] | 0) == (HEAP32[i18 + 8 >> 2] | 0)) {
    if ((HEAP32[i14 >> 2] | 0) != (HEAP32[i18 + 24 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i18 + 20 >> 2] | 0) != (i5 | 0)) {
     break;
    }
    i20 = HEAP32[i12 >> 2] | 0;
    if ((i20 | 0) != (HEAP32[i11 >> 2] | 0)) {
     HEAP32[(HEAP32[i10 >> 2] | 0) + (i20 << 2) >> 2] = i18;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     break;
    }
    i19 = i20 + 1 | 0;
    i21 = HEAP32[i10 >> 2] | 0;
    do {
     if (i21 >>> 0 > i6 >>> 0) {
      i17 = 16;
     } else {
      if ((i21 + (i20 << 2) | 0) >>> 0 <= i6 >>> 0) {
       i17 = 16;
       break;
      }
      i22 = i2 - i21 >> 2;
      i23 = i19 + (i20 >>> 2) | 0;
      i24 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
      i23 = i24 >>> 0 > i19 >>> 0 ? i24 : i19;
      do {
       if (i20 >>> 0 < i23 >>> 0) {
        if (i23 >>> 0 > 10 >>> 0) {
         if (i23 >>> 0 > 1073741823 >>> 0) {
          i17 = 30;
          break L4;
         }
         i24 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
         HEAP32[i11 >> 2] = i24 >>> 2;
         i25 = __ZN3WTF10fastMallocEj(i24) | 0;
         HEAP32[i10 >> 2] = i25;
         i26 = i25;
        } else {
         HEAP32[i10 >> 2] = i9;
         HEAP32[i11 >> 2] = 10;
         i26 = i9;
        }
        i25 = i21;
        _memcpy(i26 | 0, i25 | 0, i20 << 2) | 0;
        if ((i9 | 0) == (i21 | 0) | (i21 | 0) == 0) {
         break;
        }
        if ((HEAP32[i10 >> 2] | 0) == (i21 | 0)) {
         HEAP32[i10 >> 2] = 0;
         HEAP32[i11 >> 2] = 0;
        }
        __ZN3WTF8fastFreeEPv(i25);
       }
      } while (0);
      i23 = HEAP32[i10 >> 2] | 0;
      i27 = i23 + (i22 << 2) | 0;
      i28 = i23;
     }
    } while (0);
    if ((i17 | 0) == 16) {
     i17 = 0;
     i23 = i19 + (i20 >>> 2) | 0;
     i25 = i23 >>> 0 > 16 >>> 0 ? i23 : 16;
     i23 = i25 >>> 0 > i19 >>> 0 ? i25 : i19;
     do {
      if (i20 >>> 0 < i23 >>> 0) {
       if (i23 >>> 0 > 10 >>> 0) {
        if (i23 >>> 0 > 1073741823 >>> 0) {
         i17 = 19;
         break L4;
        }
        i25 = __ZN3WTF18fastMallocGoodSizeEj(i23 << 2) | 0;
        HEAP32[i11 >> 2] = i25 >>> 2;
        i24 = __ZN3WTF10fastMallocEj(i25) | 0;
        HEAP32[i10 >> 2] = i24;
        i29 = i24;
       } else {
        HEAP32[i10 >> 2] = i9;
        HEAP32[i11 >> 2] = 10;
        i29 = i9;
       }
       i24 = i21;
       _memcpy(i29 | 0, i24 | 0, i20 << 2) | 0;
       if ((i9 | 0) == (i21 | 0) | (i21 | 0) == 0) {
        break;
       }
       if ((HEAP32[i10 >> 2] | 0) == (i21 | 0)) {
        HEAP32[i10 >> 2] = 0;
        HEAP32[i11 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i24);
      }
     } while (0);
     i27 = i6;
     i28 = HEAP32[i10 >> 2] | 0;
    }
    HEAP32[i28 + (HEAP32[i12 >> 2] << 2) >> 2] = HEAP32[i27 >> 2];
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
  } while (0);
  if ((i8 | 0) == 0) {
   i17 = 41;
   break;
  }
  i15 = i8;
  i16 = HEAP32[i7 >> 2] | 0;
 }
 if ((i17 | 0) == 19) {
  _WTFCrash();
 } else if ((i17 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i17 | 0) == 30) {
  _WTFCrash();
 } else if ((i17 | 0) == 41) {
  i17 = HEAP32[i12 >> 2] | 0;
  if (i17 >>> 0 < 3 >>> 0) {
   i30 = i17;
  } else {
   i7 = HEAP32[i10 >> 2] | 0;
   i16 = i3 + 8 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   i27 = i15 + i17 | 0;
   if (i27 >>> 0 > (HEAP32[i3 + 4 >> 2] | 0) >>> 0) {
    __ZN3WTF6VectorIPN7WebCore13HTMLStackItemELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i27);
    i31 = HEAP32[i16 >> 2] | 0;
   } else {
    i31 = i15;
   }
   if (i27 >>> 0 < i31 >>> 0) {
    _WTFCrash();
   }
   i15 = HEAP32[i3 >> 2] | 0;
   if ((i17 | 0) != 0) {
    i3 = 0;
    while (1) {
     HEAP32[i15 + (i3 + i31 << 2) >> 2] = HEAP32[i7 + (i3 << 2) >> 2];
     i3 = i3 + 1 | 0;
     if (i3 >>> 0 >= i17 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i16 >> 2] = i27;
   i30 = HEAP32[i12 >> 2] | 0;
  }
  if ((i30 | 0) != 0) {
   HEAP32[i12 >> 2] = 0;
  }
  i12 = HEAP32[i10 >> 2] | 0;
  if ((i9 | 0) == (i12 | 0) | (i12 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  HEAP32[i10 >> 2] = 0;
  HEAP32[i11 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i12);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore25HTMLFormattingElementList6removeEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 L4 : do {
  if ((i2 | 0) == 0) {
   i1 = 1;
   while (1) {
    i6 = i4 - i1 | 0;
    if (i4 >>> 0 <= i6 >>> 0) {
     i7 = 19;
     break;
    }
    i8 = HEAP32[i5 >> 2] | 0;
    i9 = HEAP32[i8 + (i6 << 2) >> 2] | 0;
    if ((i9 | 0) == 0) {
     i10 = i6;
     i11 = i8;
     break L4;
    }
    if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
     i10 = i6;
     i11 = i8;
     break L4;
    }
    i8 = i1 + 1 | 0;
    if (i8 >>> 0 > i4 >>> 0) {
     i7 = 21;
     break;
    } else {
     i1 = i8;
    }
   }
   if ((i7 | 0) == 19) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i7 | 0) == 21) {
    return;
   }
  } else {
   i1 = 1;
   while (1) {
    i8 = i4 - i1 | 0;
    if (i4 >>> 0 <= i8 >>> 0) {
     i7 = 20;
     break;
    }
    i6 = HEAP32[i5 >> 2] | 0;
    i9 = HEAP32[i6 + (i8 << 2) >> 2] | 0;
    if ((i9 | 0) != 0) {
     if ((HEAP32[i9 + 4 >> 2] | 0) == (i2 | 0)) {
      i10 = i8;
      i11 = i6;
      break L4;
     }
    }
    i6 = i1 + 1 | 0;
    if (i6 >>> 0 > i4 >>> 0) {
     i7 = 24;
     break;
    } else {
     i1 = i6;
    }
   }
   if ((i7 | 0) == 20) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i7 | 0) == 24) {
    return;
   }
  }
 } while (0);
 if ((i10 | 0) == -1) {
  return;
 }
 i7 = i11 + (i10 << 2) | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i2 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF11VectorMoverILb0EN7WebCore25HTMLFormattingElementList5EntryEE15moveOverlappingEPS3_S5_S5_(i11 + (i10 + 1 << 2) | 0, (HEAP32[i5 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) | 0, i7);
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore25HTMLFormattingElementList8containsEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 | 0;
 L4 : do {
  if ((i2 | 0) == 0) {
   i1 = 1;
   while (1) {
    i6 = i3 - i1 | 0;
    if (i3 >>> 0 <= i6 >>> 0) {
     i7 = 18;
     break;
    }
    i8 = HEAP32[i5 >> 2] | 0;
    i9 = HEAP32[i8 + (i6 << 2) >> 2] | 0;
    if ((i9 | 0) == 0) {
     i10 = i6;
     i11 = i8;
     break L4;
    }
    if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
     i10 = i6;
     i11 = i8;
     break L4;
    }
    i8 = i1 + 1 | 0;
    if (i8 >>> 0 > i3 >>> 0) {
     i4 = 0;
     i7 = 23;
     break;
    } else {
     i1 = i8;
    }
   }
   if ((i7 | 0) == 18) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i7 | 0) == 23) {
    return i4 | 0;
   }
  } else {
   i1 = 1;
   while (1) {
    i8 = i3 - i1 | 0;
    if (i3 >>> 0 <= i8 >>> 0) {
     i7 = 17;
     break;
    }
    i6 = HEAP32[i5 >> 2] | 0;
    i9 = HEAP32[i6 + (i8 << 2) >> 2] | 0;
    if ((i9 | 0) != 0) {
     if ((HEAP32[i9 + 4 >> 2] | 0) == (i2 | 0)) {
      i10 = i8;
      i11 = i6;
      break L4;
     }
    }
    i6 = i1 + 1 | 0;
    if (i6 >>> 0 > i3 >>> 0) {
     i4 = 0;
     i7 = 19;
     break;
    } else {
     i1 = i6;
    }
   }
   if ((i7 | 0) == 17) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i7 | 0) == 19) {
    return i4 | 0;
   }
  }
 } while (0);
 if ((i10 | 0) == -1) {
  i4 = 0;
  return i4 | 0;
 }
 if (i3 >>> 0 <= i10 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i4 = (i11 + (i10 << 2) | 0) != 0;
 return i4 | 0;
}
function __ZN7WebCore25HTMLFormattingElementList4findEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 | 0;
 L4 : do {
  if ((i2 | 0) == 0) {
   i1 = 1;
   while (1) {
    i6 = i3 - i1 | 0;
    if (i3 >>> 0 <= i6 >>> 0) {
     i7 = 23;
     break;
    }
    i8 = HEAP32[i5 >> 2] | 0;
    i9 = HEAP32[i8 + (i6 << 2) >> 2] | 0;
    if ((i9 | 0) == 0) {
     i10 = i6;
     i11 = i8;
     break L4;
    }
    if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
     i10 = i6;
     i11 = i8;
     break L4;
    }
    i8 = i1 + 1 | 0;
    if (i8 >>> 0 > i3 >>> 0) {
     i4 = 0;
     i7 = 18;
     break;
    } else {
     i1 = i8;
    }
   }
   if ((i7 | 0) == 18) {
    return i4 | 0;
   } else if ((i7 | 0) == 23) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  } else {
   i1 = 1;
   while (1) {
    i8 = i3 - i1 | 0;
    if (i3 >>> 0 <= i8 >>> 0) {
     i7 = 22;
     break;
    }
    i6 = HEAP32[i5 >> 2] | 0;
    i9 = HEAP32[i6 + (i8 << 2) >> 2] | 0;
    if ((i9 | 0) != 0) {
     if ((HEAP32[i9 + 4 >> 2] | 0) == (i2 | 0)) {
      i10 = i8;
      i11 = i6;
      break L4;
     }
    }
    i6 = i1 + 1 | 0;
    if (i6 >>> 0 > i3 >>> 0) {
     i4 = 0;
     i7 = 17;
     break;
    } else {
     i1 = i6;
    }
   }
   if ((i7 | 0) == 17) {
    return i4 | 0;
   } else if ((i7 | 0) == 22) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 if ((i10 | 0) == -1) {
  i4 = 0;
  return i4 | 0;
 }
 if (i3 >>> 0 <= i10 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i4 = i11 + (i10 << 2) | 0;
 return i4 | 0;
}
function __ZN7WebCore25HTMLFormattingElementList6swapToEPNS_7ElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEERKNS0_8BookmarkE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 if ((HEAP8[i4 | 0] & 1) != 0) {
  i4 = i1 + 8 | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i7 = i1 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i5 - i8 >> 2;
  if ((i6 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
   i10 = i6 + 1 | 0;
   i11 = i10 + (i6 >>> 2) | 0;
   i12 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
   __ZN3WTF6VectorIN7WebCore25HTMLFormattingElementList5EntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1 | 0, i12 >>> 0 > i10 >>> 0 ? i12 : i10);
   i13 = HEAP32[i4 >> 2] | 0;
   i14 = HEAP32[i7 >> 2] | 0;
  } else {
   i13 = i6;
   i14 = i8;
  }
  i8 = i14 + (i9 + 1 << 2) | 0;
  __ZN3WTF11VectorMoverILb0EN7WebCore25HTMLFormattingElementList5EntryEE15moveOverlappingEPS3_S5_S5_(i8, i14 + (i13 << 2) | 0, i14 + (i9 + 2 << 2) | 0);
  i9 = i3 | 0;
  i14 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i8 >> 2] = i14;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  __ZN7WebCore25HTMLFormattingElementList6removeEPNS_7ElementE(i1, i2);
  return;
 }
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i5 | 0) == 0) {
  return;
 }
 i3 = i5 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore13HTMLStackItemD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore13HTMLStackItemD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
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
 i2 = i1 + 20 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 12 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 3) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 + 4 >> 2] | 0;
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
   __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN3WTF11VectorMoverILb0EN7WebCore25HTMLFormattingElementList5EntryEE15moveOverlappingEPS3_S5_S5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if (i1 >>> 0 > i3 >>> 0) {
  if ((i1 | 0) == (i2 | 0)) {
   return;
  } else {
   i4 = i1;
   i5 = i3;
  }
  while (1) {
   i6 = i4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i5 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i8 = i7 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i6 = i8 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i8);
      __ZN3WTF8fastFreeEPv(i8);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i8 = i4 + 4 | 0;
   if ((i8 | 0) == (i2 | 0)) {
    break;
   } else {
    i4 = i8;
    i5 = i5 + 4 | 0;
   }
  }
  return;
 }
 if ((i2 | 0) == (i1 | 0)) {
  return;
 }
 i5 = i2;
 i4 = i3 + (i2 - i1 >> 2 << 2) | 0;
 while (1) {
  i5 = i5 - 4 | 0;
  i4 = i4 - 4 | 0;
  i2 = i5 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  HEAP32[i4 >> 2] = i3;
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  }
  i8 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i2 = i8 | 0;
    i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    if ((i3 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i8);
     __ZN3WTF8fastFreeEPv(i8);
     break;
    } else {
     HEAP32[i2 >> 2] = i3;
     break;
    }
   }
  } while (0);
  if ((i5 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore25HTMLFormattingElementList11bookmarkForEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = -1;
  } else {
   i6 = i2 | 0;
   if ((i3 | 0) == 0) {
    i7 = 1;
    while (1) {
     i8 = i4 - i7 | 0;
     if (i4 >>> 0 <= i8 >>> 0) {
      break;
     }
     i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i8 << 2) >> 2] | 0;
     if ((i9 | 0) == 0) {
      i5 = i8;
      break L1;
     }
     if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
      i5 = i8;
      break L1;
     }
     i8 = i7 + 1 | 0;
     if (i8 >>> 0 > i4 >>> 0) {
      i5 = -1;
      break L1;
     } else {
      i7 = i8;
     }
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else {
    i7 = 1;
    while (1) {
     i8 = i4 - i7 | 0;
     if (i4 >>> 0 <= i8 >>> 0) {
      break;
     }
     i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i8 << 2) >> 2] | 0;
     if ((i9 | 0) != 0) {
      if ((HEAP32[i9 + 4 >> 2] | 0) == (i3 | 0)) {
       i5 = i8;
       break L1;
      }
     }
     i8 = i7 + 1 | 0;
     if (i8 >>> 0 > i4 >>> 0) {
      i5 = -1;
      break L1;
     } else {
      i7 = i8;
     }
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 if (i4 >>> 0 > i5 >>> 0) {
  i4 = (HEAP32[i2 >> 2] | 0) + (i5 << 2) | 0;
  HEAP8[i1 | 0] = 0;
  HEAP32[i1 + 4 >> 2] = i4;
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN3WTF6VectorIN7WebCore25HTMLFormattingElementList5EntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 << 2) | 0;
 if (i2 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
 HEAP32[i3 >> 2] = i7 >>> 2;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i9 = i8 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i2 = i9 | 0;
     i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      break;
     } else {
      HEAP32[i2 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i9 = i6 + 4 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 4 | 0;
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
function __ZN7WebCore25HTMLFormattingElementList29closestElementInScopeWithNameERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 8 | 0;
 i4 = i1 | 0;
 i1 = i2 | 0;
 i2 = 1;
 while (1) {
  i5 = HEAP32[i3 >> 2] | 0;
  if (i2 >>> 0 > i5 >>> 0) {
   i6 = 0;
   i7 = 14;
   break;
  }
  i8 = i5 - i2 | 0;
  if (i5 >>> 0 <= i8 >>> 0) {
   i7 = 4;
   break;
  }
  i9 = (HEAP32[i4 >> 2] | 0) + (i8 << 2) | 0;
  i8 = HEAP32[i9 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i6 = 0;
   i7 = 15;
   break;
  }
  i5 = i8 | 0;
  i10 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i10 + 1;
  if ((HEAP32[i8 + 8 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
   i11 = (HEAP32[i8 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0);
  } else {
   i11 = 0;
  }
  if ((i10 | 0) == 0) {
   __ZN7WebCore13HTMLStackItemD2Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  } else {
   HEAP32[i5 >> 2] = i10;
  }
  if (i11) {
   i7 = 12;
   break;
  } else {
   i2 = i2 + 1 | 0;
  }
 }
 if ((i7 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i7 | 0) == 12) {
  i6 = HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0;
  return i6 | 0;
 } else if ((i7 | 0) == 14) {
  return i6 | 0;
 } else if ((i7 | 0) == 15) {
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore25HTMLFormattingElementList6appendEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i2 | 0;
 __ZN7WebCore25HTMLFormattingElementList23ensureNoahsArkConditionEPNS_13HTMLStackItemE(i1, HEAP32[i3 >> 2] | 0);
 i2 = i1 + 8 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
  i5 = i4 + 1 | 0;
  i6 = i5 + (i4 >>> 2) | 0;
  i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
  __ZN3WTF6VectorIN7WebCore25HTMLFormattingElementList5EntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1 | 0, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
  i5 = HEAP32[i1 >> 2] | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  i6 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i5 + (i7 << 2) >> 2] = i6;
  i8 = HEAP32[i2 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i2 >> 2] = i9;
  return;
 } else {
  i6 = HEAP32[i1 >> 2] | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i6 + (i4 << 2) >> 2] = i1;
  i8 = HEAP32[i2 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i2 >> 2] = i9;
  return;
 }
}
function __ZN7WebCore25HTMLFormattingElementList17clearToLastMarkerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 while (1) {
  if ((i1 | 0) == 0) {
   i4 = 12;
   break;
  }
  i5 = _llvm_uadd_with_overflow_i32(i1 | 0, -1 | 0) | 0;
  if (!tempRet0) {
   i4 = 4;
   break;
  }
  i6 = i5;
  i5 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i6 << 2) >> 2] | 0;
  if ((i5 | 0) == 0) {
   i4 = 6;
   break;
  }
  i7 = i5 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore13HTMLStackItemD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
   HEAP32[i2 >> 2] = i6;
   i1 = i6;
   continue;
  } else {
   HEAP32[i7 >> 2] = i8;
   HEAP32[i2 >> 2] = i6;
   i1 = i6;
   continue;
  }
 }
 if ((i4 | 0) == 6) {
  HEAP32[i2 >> 2] = i6;
  return;
 } else if ((i4 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i4 | 0) == 12) {
  return;
 }
}
function __ZN7WebCore25HTMLFormattingElementListD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore25HTMLFormattingElementListD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore13HTMLStackItemD2Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6VectorIPN7WebCore13HTMLStackItemELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore25HTMLFormattingElementList12appendMarkerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
  i4 = i3 + 1 | 0;
  i5 = i4 + (i3 >>> 2) | 0;
  i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
  __ZN3WTF6VectorIN7WebCore25HTMLFormattingElementList5EntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1 | 0, i6 >>> 0 > i4 >>> 0 ? i6 : i4);
  HEAP32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) >> 2] = 0;
  i7 = HEAP32[i2 >> 2] | 0;
  i8 = i7 + 1 | 0;
  HEAP32[i2 >> 2] = i8;
  return;
 } else {
  HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 << 2) >> 2] = 0;
  i7 = HEAP32[i2 >> 2] | 0;
  i8 = i7 + 1 | 0;
  HEAP32[i2 >> 2] = i8;
  return;
 }
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore25HTMLFormattingElementListC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function __ZN7WebCore25HTMLFormattingElementListC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
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
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore25HTMLFormattingElementListC2Ev,b3,__ZN7WebCore25HTMLFormattingElementListD2Ev,b3,b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE": __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF11VectorMoverILb0EN7WebCore25HTMLFormattingElementList5EntryEE15moveOverlappingEPS3_S5_S5_","_strlen","__ZN7WebCore25HTMLFormattingElementList23ensureNoahsArkConditionEPNS_13HTMLStackItemE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore25HTMLFormattingElementList11bookmarkForEPNS_7ElementE","__ZN7WebCore25HTMLFormattingElementList6appendEN3WTF10PassRefPtrINS_13HTMLStackItemEEE","__ZN7WebCore25HTMLFormattingElementList29closestElementInScopeWithNameERKN3WTF12AtomicStringE","__ZN7WebCore25HTMLFormattingElementList4findEPNS_7ElementE","__ZN3WTF6VectorIPN7WebCore13HTMLStackItemELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore25HTMLFormattingElementList12appendMarkerEv","__ZN7WebCore25HTMLFormattingElementList6removeEPNS_7ElementE","_memset","__ZN7WebCore13HTMLStackItemD2Ev","__ZN7WebCore25HTMLFormattingElementList6swapToEPNS_7ElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEERKNS0_8BookmarkE","__ZN7WebCore25HTMLFormattingElementListC2Ev","_memcpy","__ZN7WebCore25HTMLFormattingElementList17clearToLastMarkerEv","__ZN7WebCore25HTMLFormattingElementList8containsEPNS_7ElementE","__ZN3WTF6VectorIN7WebCore25HTMLFormattingElementList5EntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore25HTMLFormattingElementList35tryToEnsureNoahsArkConditionQuicklyEPNS_13HTMLStackItemERN3WTF6VectorIS2_Lj0ENS3_15CrashOnOverflowEEE","__ZN7WebCore25HTMLFormattingElementListD2Ev"]

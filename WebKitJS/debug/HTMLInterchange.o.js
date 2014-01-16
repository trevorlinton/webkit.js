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
/* memory initializer */ allocate([60,115,112,97,110,32,99,108,97,115,115,61,34,65,112,112,108,101,45,99,111,110,118,101,114,116,101,100,45,115,112,97,99,101,34,62,160,60,47,115,112,97,110,62,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore34convertHTMLTextToInterchangeFormatERKN3WTF6StringEPKNS_4TextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = (HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0;
 i12 = i3 + 32 | 0;
 if (i11) {
  i13 = i12 | 0;
 } else {
  i13 = HEAP32[i12 >> 2] | 0;
 }
 do {
  if ((HEAP32[i13 >> 2] | 0) != 0) {
   if (i11) {
    i14 = i12 | 0;
   } else {
    i14 = HEAP32[i12 >> 2] | 0;
   }
   i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 7;
   if ((i3 | 0) == 4 | (i3 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i2 >> 2] | 0;
   HEAP32[i1 >> 2] = i3;
   if ((i3 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i15 = i3 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i14 = i10 | 0;
 HEAP32[i14 >> 2] = 0;
 i12 = i10 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i11 = i10 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i13 = i10 + 12 | 0;
 HEAP8[i13] = 1;
 HEAP32[i10 + 16 >> 2] = 0;
 i15 = i10 + 20 | 0;
 HEAP32[i15 >> 2] = 0;
 i3 = i2 | 0;
 i2 = i10 + 20 | 0;
 i16 = 0;
 while (1) {
  i17 = HEAP32[i3 >> 2] | 0;
  i18 = (i17 | 0) == 0;
  if (i18) {
   i19 = 0;
  } else {
   i19 = HEAP32[i17 + 4 >> 2] | 0;
  }
  if (i16 >>> 0 >= i19 >>> 0) {
   break;
  }
  do {
   if (i18) {
    i20 = 0;
   } else {
    if ((HEAP32[i17 + 4 >> 2] | 0) >>> 0 <= i16 >>> 0) {
     i20 = 0;
     break;
    }
    i21 = i17 + 8 | 0;
    if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
     i20 = HEAP16[(HEAP32[i21 >> 2] | 0) + (i16 << 1) >> 1] | 0;
     break;
    } else {
     i20 = HEAPU8[(HEAP32[i21 >> 2] | 0) + i16 | 0] | 0;
     break;
    }
   }
  } while (0);
  i21 = i20 & 65535;
  L30 : do {
   if ((i21 | 0) == 32 | (i21 | 0) == 10) {
    i22 = i16 + 1 | 0;
    i23 = i17 + 4 | 0;
    L32 : do {
     if (i18) {
      i24 = i22;
     } else {
      i25 = i22;
      while (1) {
       if (i25 >>> 0 >= (HEAP32[i23 >> 2] | 0) >>> 0) {
        i24 = i25;
        break L32;
       }
       do {
        if ((HEAP32[i23 >> 2] | 0) >>> 0 > i25 >>> 0) {
         i26 = i17 + 8 | 0;
         if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
          i27 = HEAP16[(HEAP32[i26 >> 2] | 0) + (i25 << 1) >> 1] | 0;
          break;
         } else {
          i27 = HEAPU8[(HEAP32[i26 >> 2] | 0) + i25 | 0] | 0;
          break;
         }
        } else {
         i27 = 0;
        }
       } while (0);
       i26 = i27 & 65535;
       if (!((i26 | 0) == 32 | (i26 | 0) == 10)) {
        i24 = i25;
        break L32;
       }
       i25 = i25 + 1 | 0;
      }
     }
    } while (0);
    i23 = i24 - i16 | 0;
    if ((i24 | 0) == (i16 | 0)) {
     i28 = i23;
     break;
    }
    i25 = (i16 | 0) == 0;
    i26 = i16 + 2 | 0;
    i29 = i23;
    while (1) {
     i30 = (i29 >>> 0) % 3 & -1;
     L47 : do {
      if ((i30 | 0) == 0) {
       __ZN3WTF13StringBuilder6appendEPKhj(i10, H_BASE + 8 | 0, 44);
       HEAP8[i5] = 32;
       i31 = HEAP32[i11 >> 2] | 0;
       do {
        if ((i31 | 0) == 0) {
         i32 = 38;
        } else {
         i33 = HEAP32[i14 >> 2] | 0;
         if (i33 >>> 0 >= (HEAP32[i31 + 4 >> 2] | 0) >>> 0) {
          i32 = 38;
          break;
         }
         if ((HEAP32[i12 >> 2] | 0) != 0) {
          i32 = 38;
          break;
         }
         i34 = (HEAP8[i13] & 1) == 0;
         HEAP32[i14 >> 2] = i33 + 1;
         if (i34) {
          HEAP16[(HEAP32[i2 >> 2] | 0) + (i33 << 1) >> 1] = 32;
          break;
         } else {
          HEAP8[(HEAP32[i15 >> 2] | 0) + i33 | 0] = 32;
          break;
         }
        }
       } while (0);
       if ((i32 | 0) == 38) {
        i32 = 0;
        __ZN3WTF13StringBuilder6appendEPKhj(i10, i5, 1);
       }
       __ZN3WTF13StringBuilder6appendEPKhj(i10, H_BASE + 8 | 0, 44);
       i35 = 3;
      } else if ((i30 | 0) == 1) {
       do {
        if (!i25) {
         i31 = HEAP32[i3 >> 2] | 0;
         if ((i31 | 0) == 0) {
          i36 = 0;
         } else {
          i36 = HEAP32[i31 + 4 >> 2] | 0;
         }
         if ((i22 | 0) == (i36 | 0)) {
          break;
         }
         HEAP8[i6] = 32;
         i31 = HEAP32[i11 >> 2] | 0;
         do {
          if ((i31 | 0) != 0) {
           i33 = HEAP32[i14 >> 2] | 0;
           if (i33 >>> 0 >= (HEAP32[i31 + 4 >> 2] | 0) >>> 0) {
            break;
           }
           if ((HEAP32[i12 >> 2] | 0) != 0) {
            break;
           }
           i34 = (HEAP8[i13] & 1) == 0;
           HEAP32[i14 >> 2] = i33 + 1;
           if (i34) {
            HEAP16[(HEAP32[i2 >> 2] | 0) + (i33 << 1) >> 1] = 32;
            i35 = 1;
            break L47;
           } else {
            HEAP8[(HEAP32[i15 >> 2] | 0) + i33 | 0] = 32;
            i35 = 1;
            break L47;
           }
          }
         } while (0);
         __ZN3WTF13StringBuilder6appendEPKhj(i10, i6, 1);
         i35 = 1;
         break L47;
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i10, H_BASE + 8 | 0, 44);
       i35 = 1;
      } else if ((i30 | 0) == 2) {
       if (i25) {
        __ZN3WTF13StringBuilder6appendEPKhj(i10, H_BASE + 8 | 0, 44);
        HEAP8[i7] = 32;
        i31 = HEAP32[i11 >> 2] | 0;
        do {
         if ((i31 | 0) != 0) {
          i33 = HEAP32[i14 >> 2] | 0;
          if (i33 >>> 0 >= (HEAP32[i31 + 4 >> 2] | 0) >>> 0) {
           break;
          }
          if ((HEAP32[i12 >> 2] | 0) != 0) {
           break;
          }
          i34 = (HEAP8[i13] & 1) == 0;
          HEAP32[i14 >> 2] = i33 + 1;
          if (i34) {
           HEAP16[(HEAP32[i2 >> 2] | 0) + (i33 << 1) >> 1] = 32;
           i35 = 2;
           break L47;
          } else {
           HEAP8[(HEAP32[i15 >> 2] | 0) + i33 | 0] = 32;
           i35 = 2;
           break L47;
          }
         }
        } while (0);
        __ZN3WTF13StringBuilder6appendEPKhj(i10, i7, 1);
        i35 = 2;
        break;
       }
       i31 = HEAP32[i3 >> 2] | 0;
       if ((i31 | 0) == 0) {
        i37 = 0;
       } else {
        i37 = HEAP32[i31 + 4 >> 2] | 0;
       }
       __ZN3WTF13StringBuilder6appendEPKhj(i10, H_BASE + 8 | 0, 44);
       if ((i26 | 0) == (i37 | 0)) {
        __ZN3WTF13StringBuilder6appendEPKhj(i10, H_BASE + 8 | 0, 44);
        i35 = 2;
        break;
       }
       HEAP8[i8] = 32;
       i31 = HEAP32[i11 >> 2] | 0;
       do {
        if ((i31 | 0) != 0) {
         i33 = HEAP32[i14 >> 2] | 0;
         if (i33 >>> 0 >= (HEAP32[i31 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         if ((HEAP32[i12 >> 2] | 0) != 0) {
          break;
         }
         i34 = (HEAP8[i13] & 1) == 0;
         HEAP32[i14 >> 2] = i33 + 1;
         if (i34) {
          HEAP16[(HEAP32[i2 >> 2] | 0) + (i33 << 1) >> 1] = 32;
          i35 = 2;
          break L47;
         } else {
          HEAP8[(HEAP32[i15 >> 2] | 0) + i33 | 0] = 32;
          i35 = 2;
          break L47;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i10, i8, 1);
       i35 = 2;
      } else {
       i35 = i30;
      }
     } while (0);
     if ((i29 | 0) == (i35 | 0)) {
      i28 = i23;
      break;
     } else {
      i29 = i29 - i35 | 0;
     }
    }
   } else {
    do {
     if (i18) {
      i38 = 0;
     } else {
      if ((HEAP32[i17 + 4 >> 2] | 0) >>> 0 <= i16 >>> 0) {
       i38 = 0;
       break;
      }
      i29 = i17 + 8 | 0;
      if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
       i38 = HEAP16[(HEAP32[i29 >> 2] | 0) + (i16 << 1) >> 1] | 0;
       break;
      } else {
       i38 = HEAPU8[(HEAP32[i29 >> 2] | 0) + i16 | 0] | 0;
       break;
      }
     }
    } while (0);
    HEAP16[i9 >> 1] = i38;
    i29 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i29 | 0) != 0) {
      i23 = HEAP32[i14 >> 2] | 0;
      if (i23 >>> 0 >= (HEAP32[i29 + 4 >> 2] | 0) >>> 0) {
       break;
      }
      if ((HEAP32[i12 >> 2] | 0) != 0) {
       break;
      }
      if ((HEAP8[i13] & 1) == 0) {
       HEAP32[i14 >> 2] = i23 + 1;
       HEAP16[(HEAP32[i2 >> 2] | 0) + (i23 << 1) >> 1] = i38;
       i28 = 1;
       break L30;
      }
      if ((i38 & 65535) >>> 0 > 255 >>> 0) {
       break;
      }
      HEAP32[i14 >> 2] = i23 + 1;
      HEAP8[(HEAP32[i15 >> 2] | 0) + i23 | 0] = i38;
      i28 = 1;
      break L30;
     }
    } while (0);
    __ZN3WTF13StringBuilder6appendEPKtj(i10, i9, 1);
    i28 = 1;
   }
  } while (0);
  i16 = i28 + i16 | 0;
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i10);
 i16 = HEAP32[i12 >> 2] | 0;
 if ((i16 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i10);
  i10 = HEAP32[i12 >> 2] | 0;
  HEAP32[i1 >> 2] = i10;
  if ((i10 | 0) != 0) {
   i39 = i10;
   i32 = 89;
  }
 } else {
  HEAP32[i1 >> 2] = i16;
  i39 = i16;
  i32 = 89;
 }
 if ((i32 | 0) == 89) {
  i32 = i39 | 0;
  HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
 }
 i32 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i11 = i32 | 0;
   i39 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i39 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    break;
   } else {
    HEAP32[i11 >> 2] = i39;
    break;
   }
  }
 } while (0);
 i32 = HEAP32[i12 >> 2] | 0;
 if ((i32 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i32 | 0;
 i39 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i39 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i32);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i12 >> 2] = i39;
  STACKTOP = i4;
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
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore34convertHTMLTextToInterchangeFormatERKN3WTF6StringEPKNS_4TextE","_memcpy","_strlen","_memset"]

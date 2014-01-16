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
H_BASE = parentModule["_malloc"](464 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 464;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore5XPath6ParserC1ERKN3WTF6StringEPNS_15XPathNSResolverE;
/* memory initializer */ allocate([110,111,100,101,0,0,0,0,112,114,111,99,101,115,115,105,110,103,45,105,110,115,116,114,117,99,116,105,111,110,0,0,58,42,0,0,0,0,0,0,100,105,118,0,0,0,0,0,109,111,100,0,0,0,0,0,111,114,0,0,0,0,0,0,97,110,100,0,0,0,0,0,115,101,108,102,0,0,0,0,112,114,101,99,101,100,105,110,103,45,115,105,98,108,105,110,103,0,0,0,0,0,0,0,112,114,101,99,101,100,105,110,103,0,0,0,0,0,0,0,112,97,114,101,110,116,0,0,110,97,109,101,115,112,97,99,101,0,0,0,0,0,0,0,42,0,0,0,0,0,0,0,102,111,108,108,111,119,105,110,103,45,115,105,98,108,105,110,103,0,0,0,0,0,0,0,102,111,108,108,111,119,105,110,103,0,0,0,0,0,0,0,100,101,115,99,101,110,100,97,110,116,45,111,114,45,115,101,108,102,0,0,0,0,0,0,100,101,115,99,101,110,100,97,110,116,0,0,0,0,0,0,99,104,105,108,100,0,0,0,97,116,116,114,105,98,117,116,101,0,0,0,0,0,0,0,97,110,99,101,115,116,111,114,45,111,114,45,115,101,108,102,0,0,0,0,0,0,0,0,97,110,99,101,115,116,111,114,0,0,0,0,0,0,0,0,99,111,109,109,101,110,116,0,116,101,120,116,0,0,0,0,58,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore5XPath6Parser17nextTokenInternalEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i3 + 56 | 0;
 i11 = i3 + 64 | 0;
 i12 = i3 + 72 | 0;
 i13 = i3 + 80 | 0;
 i14 = i2 + 8 | 0;
 i15 = i2 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 L1 : do {
  if ((i17 | 0) != 0) {
   i18 = HEAP32[i14 >> 2] | 0;
   i19 = i17;
   i20 = i16;
   while (1) {
    if (i18 >>> 0 >= (HEAP32[i19 + 4 >> 2] | 0) >>> 0) {
     i21 = i20;
     break;
    }
    i22 = i19 + 8 | 0;
    if ((HEAP32[i19 + 16 >> 2] & 32 | 0) == 0) {
     i23 = HEAP16[(HEAP32[i22 >> 2] | 0) + (i18 << 1) >> 1] | 0;
    } else {
     i23 = HEAPU8[(HEAP32[i22 >> 2] | 0) + i18 | 0] | 0;
    }
    if ((i23 & 65535) >>> 0 < 128 >>> 0) {
     if ((i23 & 65535) >>> 0 >= 33 >>> 0) {
      i21 = i20;
      break;
     }
     if (i23 << 16 >> 16 == 32 | (i23 - 9 & 65535) >>> 0 < 5 >>> 0) {
      i24 = i18;
      i25 = i20;
     } else {
      i21 = i20;
      break;
     }
    } else {
     if ((_u_charDirection(i23 & 65535) | 0) != 9) {
      i26 = 11;
      break;
     }
     i24 = HEAP32[i14 >> 2] | 0;
     i25 = HEAP32[i15 >> 2] | 0;
    }
    i22 = i24 + 1 | 0;
    HEAP32[i14 >> 2] = i22;
    i27 = HEAP32[i25 >> 2] | 0;
    if ((i27 | 0) == 0) {
     break L1;
    } else {
     i18 = i22;
     i19 = i27;
     i20 = i25;
    }
   }
   if ((i26 | 0) == 11) {
    i21 = HEAP32[i15 >> 2] | 0;
   }
   i20 = HEAP32[i21 >> 2] | 0;
   i19 = HEAP32[i14 >> 2] | 0;
   i18 = (i20 | 0) == 0;
   if (i18) {
    break;
   }
   if (i19 >>> 0 >= (HEAP32[i20 + 4 >> 2] | 0) >>> 0) {
    break;
   }
   L21 : do {
    if (i19 >>> 0 < (HEAP32[i20 + 4 >> 2] | 0) >>> 0) {
     do {
      if ((HEAP32[i20 + 4 >> 2] | 0) >>> 0 > i19 >>> 0) {
       i27 = i20 + 8 | 0;
       if ((HEAP32[i20 + 16 >> 2] & 32 | 0) == 0) {
        i28 = HEAP16[(HEAP32[i27 >> 2] | 0) + (i19 << 1) >> 1] | 0;
        break;
       } else {
        i28 = HEAPU8[(HEAP32[i27 >> 2] | 0) + i19 | 0] | 0;
        break;
       }
      } else {
       i28 = 0;
      }
     } while (0);
     i27 = (i28 & 65535) >>> 0 > 254 >>> 0 ? 0 : (i28 & 255) << 24 >> 24;
     switch (i27 | 0) {
     case 40:
     case 41:
     case 91:
     case 93:
     case 64:
     case 44:
     case 124:
      {
       HEAP32[i14 >> 2] = i19 + 1;
       HEAP32[i1 >> 2] = i27;
       HEAP32[i1 + 4 >> 2] = 0;
       STACKTOP = i3;
       return;
      }
     case 39:
     case 34:
      {
       __ZN7WebCore5XPath6Parser9lexStringEv(i1, i2);
       STACKTOP = i3;
       return;
      }
     case 48:
     case 49:
     case 50:
     case 51:
     case 52:
     case 53:
     case 54:
     case 55:
     case 56:
     case 57:
      {
       __ZN7WebCore5XPath6Parser9lexNumberEv(i1, i2);
       STACKTOP = i3;
       return;
      }
     case 46:
      {
       i27 = i19 + 1 | 0;
       if (i18) {
        i29 = 0;
       } else {
        i29 = HEAP32[i20 + 4 >> 2] | 0;
       }
       do {
        if (i27 >>> 0 < i29 >>> 0) {
         do {
          if (i18) {
           i30 = 0;
          } else {
           if ((HEAP32[i20 + 4 >> 2] | 0) >>> 0 <= i27 >>> 0) {
            i30 = 0;
            break;
           }
           i22 = i20 + 8 | 0;
           if ((HEAP32[i20 + 16 >> 2] & 32 | 0) == 0) {
            i30 = HEAP16[(HEAP32[i22 >> 2] | 0) + (i27 << 1) >> 1] | 0;
            break;
           } else {
            i30 = HEAPU8[(HEAP32[i22 >> 2] | 0) + i27 | 0] | 0;
            break;
           }
          }
         } while (0);
         i22 = (i30 & 65535) >>> 0 > 254 >>> 0 ? 0 : i30 & 255;
         if (i22 << 24 >> 24 == 46) {
          HEAP32[i14 >> 2] = i19 + 2;
          HEAP32[i1 >> 2] = 273;
          HEAP32[i1 + 4 >> 2] = 0;
          STACKTOP = i3;
          return;
         }
         if ((i22 - 48 & 255) >>> 0 >= 10 >>> 0) {
          break;
         }
         __ZN7WebCore5XPath6Parser9lexNumberEv(i1, i2);
         STACKTOP = i3;
         return;
        }
       } while (0);
       HEAP32[i14 >> 2] = i27;
       HEAP32[i1 >> 2] = 46;
       HEAP32[i1 + 4 >> 2] = 0;
       STACKTOP = i3;
       return;
      }
     case 61:
      {
       HEAP32[i14 >> 2] = i19 + 1;
       HEAP32[i1 >> 2] = 260;
       HEAP32[i1 + 4 >> 2] = 0;
       HEAP32[i1 + 16 >> 2] = 0;
       STACKTOP = i3;
       return;
      }
     case 33:
      {
       i22 = i19 + 1 | 0;
       if (i18) {
        i31 = 0;
       } else {
        i31 = HEAP32[i20 + 4 >> 2] | 0;
       }
       do {
        if (i22 >>> 0 < i31 >>> 0) {
         do {
          if (i18) {
           i32 = 0;
          } else {
           if ((HEAP32[i20 + 4 >> 2] | 0) >>> 0 <= i22 >>> 0) {
            i32 = 0;
            break;
           }
           i33 = i20 + 8 | 0;
           if ((HEAP32[i20 + 16 >> 2] & 32 | 0) == 0) {
            i32 = HEAP16[(HEAP32[i33 >> 2] | 0) + (i22 << 1) >> 1] | 0;
            break;
           } else {
            i32 = HEAPU8[(HEAP32[i33 >> 2] | 0) + i22 | 0] | 0;
            break;
           }
          }
         } while (0);
         if (!((i32 & 255) << 24 >> 24 == 61 & (i32 & 65535) >>> 0 < 255 >>> 0)) {
          break;
         }
         HEAP32[i14 >> 2] = i19 + 2;
         HEAP32[i1 >> 2] = 260;
         HEAP32[i1 + 4 >> 2] = 0;
         HEAP32[i1 + 16 >> 2] = 1;
         STACKTOP = i3;
         return;
        }
       } while (0);
       HEAP32[i1 >> 2] = 278;
       HEAP32[i1 + 4 >> 2] = 0;
       STACKTOP = i3;
       return;
      }
     case 47:
      {
       i22 = i19 + 1 | 0;
       if (i18) {
        i34 = 0;
       } else {
        i34 = HEAP32[i20 + 4 >> 2] | 0;
       }
       do {
        if (i22 >>> 0 < i34 >>> 0) {
         do {
          if (i18) {
           i35 = 0;
          } else {
           if ((HEAP32[i20 + 4 >> 2] | 0) >>> 0 <= i22 >>> 0) {
            i35 = 0;
            break;
           }
           i27 = i20 + 8 | 0;
           if ((HEAP32[i20 + 16 >> 2] & 32 | 0) == 0) {
            i35 = HEAP16[(HEAP32[i27 >> 2] | 0) + (i22 << 1) >> 1] | 0;
            break;
           } else {
            i35 = HEAPU8[(HEAP32[i27 >> 2] | 0) + i22 | 0] | 0;
            break;
           }
          }
         } while (0);
         if (!((i35 & 255) << 24 >> 24 == 47 & (i35 & 65535) >>> 0 < 255 >>> 0)) {
          break;
         }
         HEAP32[i14 >> 2] = i19 + 2;
         HEAP32[i1 >> 2] = 276;
         HEAP32[i1 + 4 >> 2] = 0;
         STACKTOP = i3;
         return;
        }
       } while (0);
       HEAP32[i14 >> 2] = i22;
       HEAP32[i1 >> 2] = 47;
       HEAP32[i1 + 4 >> 2] = 0;
       STACKTOP = i3;
       return;
      }
     case 43:
      {
       HEAP32[i14 >> 2] = i19 + 1;
       HEAP32[i1 >> 2] = 262;
       HEAP32[i1 + 4 >> 2] = 0;
       STACKTOP = i3;
       return;
      }
     case 45:
      {
       HEAP32[i14 >> 2] = i19 + 1;
       HEAP32[i1 >> 2] = 261;
       HEAP32[i1 + 4 >> 2] = 0;
       STACKTOP = i3;
       return;
      }
     case 62:
      {
       i27 = i19 + 1 | 0;
       if (i18) {
        i36 = 0;
       } else {
        i36 = HEAP32[i20 + 4 >> 2] | 0;
       }
       do {
        if (i27 >>> 0 < i36 >>> 0) {
         do {
          if (i18) {
           i37 = 0;
          } else {
           if ((HEAP32[i20 + 4 >> 2] | 0) >>> 0 <= i27 >>> 0) {
            i37 = 0;
            break;
           }
           i33 = i20 + 8 | 0;
           if ((HEAP32[i20 + 16 >> 2] & 32 | 0) == 0) {
            i37 = HEAP16[(HEAP32[i33 >> 2] | 0) + (i27 << 1) >> 1] | 0;
            break;
           } else {
            i37 = HEAPU8[(HEAP32[i33 >> 2] | 0) + i27 | 0] | 0;
            break;
           }
          }
         } while (0);
         if (!((i37 & 255) << 24 >> 24 == 61 & (i37 & 65535) >>> 0 < 255 >>> 0)) {
          break;
         }
         HEAP32[i14 >> 2] = i19 + 2;
         HEAP32[i1 >> 2] = 259;
         HEAP32[i1 + 4 >> 2] = 0;
         HEAP32[i1 + 16 >> 2] = 4;
         STACKTOP = i3;
         return;
        }
       } while (0);
       HEAP32[i14 >> 2] = i27;
       HEAP32[i1 >> 2] = 259;
       HEAP32[i1 + 4 >> 2] = 0;
       HEAP32[i1 + 16 >> 2] = 2;
       STACKTOP = i3;
       return;
      }
     case 42:
      {
       switch (HEAP32[i2 + 12 >> 2] | 0) {
       case 0:
       case 64:
       case 271:
       case 40:
       case 91:
       case 44:
       case 263:
       case 264:
       case 258:
       case 47:
       case 276:
       case 124:
       case 262:
       case 261:
       case 260:
       case 259:
        {
         break;
        }
       default:
        {
         HEAP32[i14 >> 2] = i19 + 1;
         HEAP32[i1 >> 2] = 258;
         HEAP32[i1 + 4 >> 2] = 0;
         HEAP32[i1 + 12 >> 2] = 2;
         STACKTOP = i3;
         return;
        }
       }
       HEAP32[i14 >> 2] = i19 + 1;
       __ZN3WTF6StringC1EPKc(i8, H_BASE + 152 | 0);
       HEAP32[i1 >> 2] = 267;
       i22 = i8 | 0;
       i33 = HEAP32[i22 >> 2] | 0;
       HEAP32[i1 + 4 >> 2] = i33;
       if ((i33 | 0) == 0) {
        STACKTOP = i3;
        return;
       }
       i38 = i33 | 0;
       HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
       i38 = HEAP32[i22 >> 2] | 0;
       if ((i38 | 0) == 0) {
        STACKTOP = i3;
        return;
       }
       i22 = i38 | 0;
       i33 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i33 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i38);
        STACKTOP = i3;
        return;
       } else {
        HEAP32[i22 >> 2] = i33;
        STACKTOP = i3;
        return;
       }
       break;
      }
     case 36:
      {
       HEAP32[i14 >> 2] = i19 + 1;
       i33 = i9 | 0;
       HEAP32[i33 >> 2] = 0;
       i22 = i1 | 0;
       do {
        if (__ZN7WebCore5XPath6Parser8lexQNameERN3WTF6StringE(i2, i9) | 0) {
         HEAP32[i22 >> 2] = 270;
         i38 = HEAP32[i33 >> 2] | 0;
         HEAP32[i1 + 4 >> 2] = i38;
         if ((i38 | 0) == 0) {
          STACKTOP = i3;
          return;
         } else {
          i39 = i38 | 0;
          HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 2;
          i40 = i38;
          break;
         }
        } else {
         HEAP32[i22 >> 2] = 278;
         HEAP32[i1 + 4 >> 2] = 0;
         i38 = HEAP32[i33 >> 2] | 0;
         if ((i38 | 0) != 0) {
          i40 = i38;
          break;
         }
         STACKTOP = i3;
         return;
        }
       } while (0);
       i33 = i40 | 0;
       i22 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
       if ((i22 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i40);
        STACKTOP = i3;
        return;
       } else {
        HEAP32[i33 >> 2] = i22;
        STACKTOP = i3;
        return;
       }
       break;
      }
     case 60:
      {
       i22 = i19 + 1 | 0;
       if (i18) {
        i41 = 0;
       } else {
        i41 = HEAP32[i20 + 4 >> 2] | 0;
       }
       do {
        if (i22 >>> 0 < i41 >>> 0) {
         do {
          if (i18) {
           i42 = 0;
          } else {
           if ((HEAP32[i20 + 4 >> 2] | 0) >>> 0 <= i22 >>> 0) {
            i42 = 0;
            break;
           }
           i33 = i20 + 8 | 0;
           if ((HEAP32[i20 + 16 >> 2] & 32 | 0) == 0) {
            i42 = HEAP16[(HEAP32[i33 >> 2] | 0) + (i22 << 1) >> 1] | 0;
            break;
           } else {
            i42 = HEAPU8[(HEAP32[i33 >> 2] | 0) + i22 | 0] | 0;
            break;
           }
          }
         } while (0);
         if (!((i42 & 255) << 24 >> 24 == 61 & (i42 & 65535) >>> 0 < 255 >>> 0)) {
          break;
         }
         HEAP32[i14 >> 2] = i19 + 2;
         HEAP32[i1 >> 2] = 259;
         HEAP32[i1 + 4 >> 2] = 0;
         HEAP32[i1 + 16 >> 2] = 5;
         STACKTOP = i3;
         return;
        }
       } while (0);
       HEAP32[i14 >> 2] = i22;
       HEAP32[i1 >> 2] = 259;
       HEAP32[i1 + 4 >> 2] = 0;
       HEAP32[i1 + 16 >> 2] = 3;
       STACKTOP = i3;
       return;
      }
     default:
      {
       break L21;
      }
     }
    }
   } while (0);
   i19 = i10 | 0;
   HEAP32[i19 >> 2] = 0;
   L162 : do {
    if (__ZN7WebCore5XPath6Parser9lexNCNameERN3WTF6StringE(i2, i10) | 0) {
     i20 = HEAP32[i15 >> 2] | 0;
     i18 = HEAP32[i20 >> 2] | 0;
     L165 : do {
      if ((i18 | 0) != 0) {
       i33 = HEAP32[i14 >> 2] | 0;
       i27 = i18;
       i38 = i20;
       while (1) {
        if (i33 >>> 0 >= (HEAP32[i27 + 4 >> 2] | 0) >>> 0) {
         break L165;
        }
        i39 = i27 + 8 | 0;
        if ((HEAP32[i27 + 16 >> 2] & 32 | 0) == 0) {
         i43 = HEAP16[(HEAP32[i39 >> 2] | 0) + (i33 << 1) >> 1] | 0;
        } else {
         i43 = HEAPU8[(HEAP32[i39 >> 2] | 0) + i33 | 0] | 0;
        }
        if ((i43 & 65535) >>> 0 < 128 >>> 0) {
         if ((i43 & 65535) >>> 0 >= 33 >>> 0) {
          break L165;
         }
         if (i43 << 16 >> 16 == 32 | (i43 - 9 & 65535) >>> 0 < 5 >>> 0) {
          i44 = i33;
          i45 = i38;
         } else {
          break L165;
         }
        } else {
         if ((_u_charDirection(i43 & 65535) | 0) != 9) {
          break L165;
         }
         i44 = HEAP32[i14 >> 2] | 0;
         i45 = HEAP32[i15 >> 2] | 0;
        }
        i39 = i44 + 1 | 0;
        HEAP32[i14 >> 2] = i39;
        i46 = HEAP32[i45 >> 2] | 0;
        if ((i46 | 0) == 0) {
         break;
        } else {
         i33 = i39;
         i27 = i46;
         i38 = i45;
        }
       }
      }
     } while (0);
     L181 : do {
      switch (HEAP32[i2 + 12 >> 2] | 0) {
      case 0:
      case 64:
      case 271:
      case 40:
      case 91:
      case 44:
      case 263:
      case 264:
      case 258:
      case 47:
      case 276:
      case 124:
      case 262:
      case 261:
      case 260:
      case 259:
       {
        break;
       }
      default:
       {
        i20 = HEAP32[i19 >> 2] | 0;
        if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i20, H_BASE + 72 | 0) | 0) {
         HEAP32[i1 >> 2] = 263;
         HEAP32[i1 + 4 >> 2] = 0;
         break L162;
        }
        if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i20, H_BASE + 64 | 0) | 0) {
         HEAP32[i1 >> 2] = 264;
         HEAP32[i1 + 4 >> 2] = 0;
         break L162;
        }
        if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i20, H_BASE + 56 | 0) | 0) {
         HEAP32[i1 >> 2] = 258;
         HEAP32[i1 + 4 >> 2] = 0;
         HEAP32[i1 + 12 >> 2] = 4;
         break L162;
        }
        if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(i20, H_BASE + 48 | 0) | 0)) {
         break L181;
        }
        HEAP32[i1 >> 2] = 258;
        HEAP32[i1 + 4 >> 2] = 0;
        HEAP32[i1 + 12 >> 2] = 3;
        break L162;
       }
      }
     } while (0);
     i20 = HEAP32[i14 >> 2] | 0;
     i18 = HEAP32[i15 >> 2] | 0;
     i22 = i18 | 0;
     i38 = HEAP32[i22 >> 2] | 0;
     i27 = (i38 | 0) == 0;
     if (i27) {
      i47 = 0;
     } else {
      i47 = HEAP32[i38 + 4 >> 2] | 0;
     }
     do {
      if (i20 >>> 0 < i47 >>> 0) {
       do {
        if (i27) {
         i48 = 0;
        } else {
         if ((HEAP32[i38 + 4 >> 2] | 0) >>> 0 <= i20 >>> 0) {
          i48 = 0;
          break;
         }
         i33 = i38 + 8 | 0;
         if ((HEAP32[i38 + 16 >> 2] & 32 | 0) == 0) {
          i48 = HEAP16[(HEAP32[i33 >> 2] | 0) + (i20 << 1) >> 1] | 0;
          break;
         } else {
          i48 = HEAPU8[(HEAP32[i33 >> 2] | 0) + i20 | 0] | 0;
          break;
         }
        }
       } while (0);
       if (!((i48 & 255) << 24 >> 24 == 58 & (i48 & 65535) >>> 0 < 255 >>> 0)) {
        i49 = i18;
        i50 = i38;
        break;
       }
       i33 = i20 + 1 | 0;
       HEAP32[i14 >> 2] = i33;
       i46 = HEAP32[i22 >> 2] | 0;
       i39 = (i46 | 0) == 0;
       if (i39) {
        i51 = 0;
       } else {
        i51 = HEAP32[i46 + 4 >> 2] | 0;
       }
       do {
        if (i33 >>> 0 < i51 >>> 0) {
         do {
          if (i39) {
           i52 = 0;
          } else {
           if ((HEAP32[i46 + 4 >> 2] | 0) >>> 0 <= i33 >>> 0) {
            i52 = 0;
            break;
           }
           i53 = i46 + 8 | 0;
           if ((HEAP32[i46 + 16 >> 2] & 32 | 0) == 0) {
            i52 = HEAP16[(HEAP32[i53 >> 2] | 0) + (i33 << 1) >> 1] | 0;
            break;
           } else {
            i52 = HEAPU8[(HEAP32[i53 >> 2] | 0) + i33 | 0] | 0;
            break;
           }
          }
         } while (0);
         if (!((i52 & 255) << 24 >> 24 == 58 & (i52 & 65535) >>> 0 < 255 >>> 0)) {
          break;
         }
         HEAP32[i14 >> 2] = i20 + 2;
         if (HEAP8[H_BASE + 432 | 0] | 0) {
          if ((HEAP32[H_BASE + 460 >> 2] | 0) == 0) {
           i26 = 144;
          }
         } else {
          _memset(H_BASE + 448 | 0, 0, 20) | 0;
          HEAP8[H_BASE + 432 | 0] = 1;
          i26 = 144;
         }
         if ((i26 | 0) == 144) {
          i53 = i4 | 0;
          i54 = 0;
          while (1) {
           __ZN3WTF6StringC1EPKc(i4, HEAP32[H_BASE + 328 + (i54 << 3) >> 2] | 0);
           __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath4Step4AxisEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, H_BASE + 448, i4, H_BASE + 328 + (i54 << 3) + 4 | 0);
           i55 = HEAP32[i53 >> 2] | 0;
           do {
            if ((i55 | 0) != 0) {
             i56 = i55 | 0;
             i57 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
             if ((i57 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i55);
              break;
             } else {
              HEAP32[i56 >> 2] = i57;
              break;
             }
            }
           } while (0);
           i54 = i54 + 1 | 0;
           if (i54 >>> 0 >= 13 >>> 0) {
            break;
           }
          }
         }
         i54 = HEAP32[H_BASE + 448 >> 2] | 0;
         if ((i54 | 0) == 0) {
          i53 = HEAP32[H_BASE + 452 >> 2] | 0;
          i58 = i53 << 3 | 0;
          i59 = 0;
          i60 = i53;
         } else {
          i53 = HEAP32[H_BASE + 456 >> 2] | 0;
          i55 = HEAP32[i19 >> 2] | 0;
          i57 = HEAP32[i55 + 16 >> 2] | 0;
          if (i57 >>> 0 > 127 >>> 0) {
           i61 = i57 >>> 7;
          } else {
           i61 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i55) | 0;
          }
          i57 = (i61 >>> 23) + ~i61 | 0;
          i56 = i57 << 12 ^ i57;
          i57 = i56 >>> 7 ^ i56;
          i56 = i57 << 2 ^ i57;
          i57 = i56 >>> 20 ^ i56 | 1;
          i56 = i61;
          i62 = 0;
          while (1) {
           i63 = i56 & i53;
           i64 = i54 + (i63 << 3) | 0;
           i65 = HEAP32[i64 >> 2] | 0;
           i66 = i65;
           if ((i66 | 0) == 0) {
            i67 = 0;
            break;
           } else if ((i66 | 0) != (-1 | 0)) {
            if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i65, i55) | 0) {
             i67 = i64;
             break;
            }
           }
           i64 = (i62 | 0) == 0 ? i57 : i62;
           i56 = i64 + i63 | 0;
           i62 = i64;
          }
          i62 = HEAP32[H_BASE + 448 >> 2] | 0;
          i56 = HEAP32[H_BASE + 452 >> 2] | 0;
          i58 = (i67 | 0) == 0 ? i62 + (i56 << 3) | 0 : i67;
          i59 = i62;
          i60 = i56;
         }
         if ((i58 | 0) == (i59 + (i60 << 3) | 0)) {
          HEAP32[i1 >> 2] = 278;
          HEAP32[i1 + 4 >> 2] = 0;
          break L162;
         } else {
          i56 = HEAP32[i58 + 4 >> 2] | 0;
          HEAP32[i1 >> 2] = 271;
          HEAP32[i1 + 4 >> 2] = 0;
          HEAP32[i1 + 8 >> 2] = i56;
          break L162;
         }
        }
       } while (0);
       L252 : do {
        if (!i39) {
         i56 = i33;
         i62 = i46;
         i57 = i18;
         while (1) {
          if (i56 >>> 0 >= (HEAP32[i62 + 4 >> 2] | 0) >>> 0) {
           i68 = i56;
           i69 = i57;
           break;
          }
          i55 = i62 + 8 | 0;
          if ((HEAP32[i62 + 16 >> 2] & 32 | 0) == 0) {
           i70 = HEAP16[(HEAP32[i55 >> 2] | 0) + (i56 << 1) >> 1] | 0;
          } else {
           i70 = HEAPU8[(HEAP32[i55 >> 2] | 0) + i56 | 0] | 0;
          }
          if ((i70 & 65535) >>> 0 < 128 >>> 0) {
           if ((i70 & 65535) >>> 0 >= 33 >>> 0) {
            i68 = i56;
            i69 = i57;
            break;
           }
           if (i70 << 16 >> 16 == 32 | (i70 - 9 & 65535) >>> 0 < 5 >>> 0) {
            i71 = i56;
            i72 = i57;
           } else {
            i68 = i56;
            i69 = i57;
            break;
           }
          } else {
           i55 = (_u_charDirection(i70 & 65535) | 0) == 9;
           i54 = HEAP32[i14 >> 2] | 0;
           i53 = HEAP32[i15 >> 2] | 0;
           if (i55) {
            i71 = i54;
            i72 = i53;
           } else {
            i68 = i54;
            i69 = i53;
            break;
           }
          }
          i53 = i71 + 1 | 0;
          HEAP32[i14 >> 2] = i53;
          i54 = HEAP32[i72 >> 2] | 0;
          if ((i54 | 0) == 0) {
           break L252;
          } else {
           i56 = i53;
           i62 = i54;
           i57 = i72;
          }
         }
         i57 = HEAP32[i69 >> 2] | 0;
         if ((i57 | 0) == 0) {
          break;
         }
         if (i68 >>> 0 >= (HEAP32[i57 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         do {
          if ((HEAP32[i57 + 4 >> 2] | 0) >>> 0 > i68 >>> 0) {
           i62 = i57 + 8 | 0;
           if ((HEAP32[i57 + 16 >> 2] & 32 | 0) == 0) {
            i73 = HEAP16[(HEAP32[i62 >> 2] | 0) + (i68 << 1) >> 1] | 0;
            break;
           } else {
            i73 = HEAPU8[(HEAP32[i62 >> 2] | 0) + i68 | 0] | 0;
            break;
           }
          } else {
           i73 = 0;
          }
         } while (0);
         if (!((i73 & 255) << 24 >> 24 == 42 & (i73 & 65535) >>> 0 < 255 >>> 0)) {
          break;
         }
         HEAP32[i14 >> 2] = i68 + 1;
         i57 = HEAP32[i19 >> 2] | 0;
         do {
          if ((i57 | 0) == 0) {
           i74 = 0;
          } else {
           i62 = i57 | 0;
           i56 = HEAP32[i62 >> 2] | 0;
           i54 = i56 + 2 | 0;
           HEAP32[i62 >> 2] = i56 + 4;
           if ((i54 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i57);
            i74 = i57;
            break;
           } else {
            HEAP32[i62 >> 2] = i54;
            i74 = i57;
            break;
           }
          }
         } while (0);
         i57 = i7 | 0;
         HEAP32[i57 >> 2] = i74;
         i54 = (i74 | 0) == 0;
         if (!i54) {
          i62 = i74 | 0;
          HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 2;
         }
         __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i6, i7, H_BASE + 40 | 0);
         i62 = i6 | 0;
         i56 = HEAP32[i62 >> 2] | 0;
         HEAP32[i62 >> 2] = 0;
         i62 = HEAP32[i57 >> 2] | 0;
         do {
          if ((i62 | 0) != 0) {
           i57 = i62 | 0;
           i53 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
           if ((i53 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i62);
            break;
           } else {
            HEAP32[i57 >> 2] = i53;
            break;
           }
          }
         } while (0);
         if ((i56 | 0) == 0) {
          _WTFCrash();
         }
         HEAP32[i1 >> 2] = 267;
         HEAP32[i1 + 4 >> 2] = i56;
         i62 = i56 | 0;
         i53 = HEAP32[i62 >> 2] | 0;
         HEAP32[i62 >> 2] = i53 + 2;
         if ((i53 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i56);
         } else {
          HEAP32[i62 >> 2] = i53;
         }
         if (i54) {
          break L162;
         }
         i53 = i74 | 0;
         i62 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
         if ((i62 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i74);
          break L162;
         } else {
          HEAP32[i53 >> 2] = i62;
          break L162;
         }
        }
       } while (0);
       i46 = i11 | 0;
       HEAP32[i46 >> 2] = 0;
       do {
        if (__ZN7WebCore5XPath6Parser9lexNCNameERN3WTF6StringE(i2, i11) | 0) {
         i33 = HEAP32[i19 >> 2] | 0;
         i39 = (i33 | 0) == 0;
         do {
          if (i39) {
           i75 = 0;
          } else {
           i62 = i33 | 0;
           i53 = HEAP32[i62 >> 2] | 0;
           i57 = i53 + 2 | 0;
           HEAP32[i62 >> 2] = i53 + 4;
           if ((i57 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i33);
            i75 = i33;
            break;
           } else {
            HEAP32[i62 >> 2] = i57;
            i75 = i33;
            break;
           }
          }
         } while (0);
         i54 = HEAP32[i46 >> 2] | 0;
         i56 = (i54 | 0) == 0;
         if (!i56) {
          i57 = i54 | 0;
          HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 2;
         }
         i57 = (i75 | 0) == 0;
         if (!i57) {
          i62 = i75 | 0;
          HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 2;
         }
         if (!i56) {
          i62 = i54 | 0;
          HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 2;
         }
         i62 = i13 | 0;
         HEAP32[i62 >> 2] = i75;
         if (!i57) {
          i53 = i75 | 0;
          HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 2;
         }
         HEAP32[i13 + 4 >> 2] = H_BASE + 320;
         i53 = i13 + 8 | 0;
         HEAP32[i53 >> 2] = i54;
         do {
          if (!i56) {
           i55 = i54 | 0;
           i64 = HEAP32[i55 >> 2] | 0;
           HEAP32[i55 >> 2] = i64 + 2;
           if ((i64 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i54);
            break;
           } else {
            HEAP32[i55 >> 2] = i64;
            break;
           }
          }
         } while (0);
         do {
          if (!i57) {
           i64 = i75 | 0;
           i55 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
           if ((i55 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i75);
            break;
           } else {
            HEAP32[i64 >> 2] = i55;
            break;
           }
          }
         } while (0);
         __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i12, i13);
         i55 = i12 | 0;
         i64 = HEAP32[i55 >> 2] | 0;
         HEAP32[i55 >> 2] = 0;
         HEAP32[i19 >> 2] = i64;
         do {
          if (!i39) {
           i64 = i33 | 0;
           i55 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
           if ((i55 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i33);
            break;
           } else {
            HEAP32[i64 >> 2] = i55;
            break;
           }
          }
         } while (0);
         i33 = HEAP32[i53 >> 2] | 0;
         do {
          if ((i33 | 0) != 0) {
           i39 = i33 | 0;
           i55 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
           if ((i55 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i33);
            break;
           } else {
            HEAP32[i39 >> 2] = i55;
            break;
           }
          }
         } while (0);
         i33 = HEAP32[i62 >> 2] | 0;
         do {
          if ((i33 | 0) != 0) {
           i53 = i33 | 0;
           i55 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
           if ((i55 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i33);
            break;
           } else {
            HEAP32[i53 >> 2] = i55;
            break;
           }
          }
         } while (0);
         do {
          if (!i56) {
           i33 = i54 | 0;
           i62 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
           if ((i62 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i54);
            break;
           } else {
            HEAP32[i33 >> 2] = i62;
            break;
           }
          }
         } while (0);
         if (i57) {
          i76 = 0;
          i77 = i54;
          break;
         }
         i56 = i75 | 0;
         i62 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
         if ((i62 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i75);
          i76 = 0;
          i77 = i54;
          break;
         } else {
          HEAP32[i56 >> 2] = i62;
          i76 = 0;
          i77 = i54;
          break;
         }
        } else {
         HEAP32[i1 >> 2] = 278;
         HEAP32[i1 + 4 >> 2] = 0;
         i76 = 1;
         i77 = HEAP32[i46 >> 2] | 0;
        }
       } while (0);
       do {
        if ((i77 | 0) != 0) {
         i46 = i77 | 0;
         i62 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
         if ((i62 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i77);
          break;
         } else {
          HEAP32[i46 >> 2] = i62;
          break;
         }
        }
       } while (0);
       if ((i76 | 0) != 0) {
        break L162;
       }
       i62 = HEAP32[i15 >> 2] | 0;
       i49 = i62;
       i50 = HEAP32[i62 >> 2] | 0;
      } else {
       i49 = i18;
       i50 = i38;
      }
     } while (0);
     L372 : do {
      if ((i50 | 0) != 0) {
       i38 = HEAP32[i14 >> 2] | 0;
       i18 = i50;
       i20 = i49;
       while (1) {
        if (i38 >>> 0 >= (HEAP32[i18 + 4 >> 2] | 0) >>> 0) {
         i78 = i20;
         break;
        }
        i22 = i18 + 8 | 0;
        if ((HEAP32[i18 + 16 >> 2] & 32 | 0) == 0) {
         i79 = HEAP16[(HEAP32[i22 >> 2] | 0) + (i38 << 1) >> 1] | 0;
        } else {
         i79 = HEAPU8[(HEAP32[i22 >> 2] | 0) + i38 | 0] | 0;
        }
        if ((i79 & 65535) >>> 0 < 128 >>> 0) {
         if ((i79 & 65535) >>> 0 >= 33 >>> 0) {
          i78 = i20;
          break;
         }
         if (i79 << 16 >> 16 == 32 | (i79 - 9 & 65535) >>> 0 < 5 >>> 0) {
          i80 = i38;
          i81 = i20;
         } else {
          i78 = i20;
          break;
         }
        } else {
         if ((_u_charDirection(i79 & 65535) | 0) != 9) {
          i26 = 257;
          break;
         }
         i80 = HEAP32[i14 >> 2] | 0;
         i81 = HEAP32[i15 >> 2] | 0;
        }
        i22 = i80 + 1 | 0;
        HEAP32[i14 >> 2] = i22;
        i27 = HEAP32[i81 >> 2] | 0;
        if ((i27 | 0) == 0) {
         break L372;
        } else {
         i38 = i22;
         i18 = i27;
         i20 = i81;
        }
       }
       if ((i26 | 0) == 257) {
        i78 = HEAP32[i15 >> 2] | 0;
       }
       i20 = HEAP32[i78 >> 2] | 0;
       i18 = HEAP32[i14 >> 2] | 0;
       if ((i20 | 0) == 0) {
        break;
       }
       if (i18 >>> 0 >= (HEAP32[i20 + 4 >> 2] | 0) >>> 0) {
        break;
       }
       do {
        if ((HEAP32[i20 + 4 >> 2] | 0) >>> 0 > i18 >>> 0) {
         i38 = i20 + 8 | 0;
         if ((HEAP32[i20 + 16 >> 2] & 32 | 0) == 0) {
          i82 = HEAP16[(HEAP32[i38 >> 2] | 0) + (i18 << 1) >> 1] | 0;
          break;
         } else {
          i82 = HEAPU8[(HEAP32[i38 >> 2] | 0) + i18 | 0] | 0;
          break;
         }
        } else {
         i82 = 0;
        }
       } while (0);
       if (!((i82 & 255) << 24 >> 24 == 40 & (i82 & 65535) >>> 0 < 255 >>> 0)) {
        break;
       }
       i18 = HEAP32[i19 >> 2] | 0;
       if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i18, H_BASE + 16 | 0) | 0) {
        HEAP32[i1 >> 2] = 274;
        HEAP32[i1 + 4 >> 2] = 0;
        break L162;
       }
       if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i18, H_BASE + 8 | 0) | 0) {
        HEAP32[i1 >> 2] = 275;
        HEAP32[i1 + 4 >> 2] = 0;
        break L162;
       }
       if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i18, H_BASE + 312 | 0) | 0) {
        HEAP32[i1 >> 2] = 277;
        HEAP32[i1 + 4 >> 2] = 0;
        break L162;
       }
       i20 = i1 | 0;
       if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i18, H_BASE + 304 | 0) | 0) {
        HEAP32[i20 >> 2] = 272;
        HEAP32[i1 + 4 >> 2] = 0;
        break L162;
       }
       HEAP32[i20 >> 2] = 265;
       HEAP32[i1 + 4 >> 2] = i18;
       if ((i18 | 0) == 0) {
        break L162;
       }
       i20 = i18 | 0;
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
       break L162;
      }
     } while (0);
     HEAP32[i1 >> 2] = 267;
     i20 = HEAP32[i19 >> 2] | 0;
     HEAP32[i1 + 4 >> 2] = i20;
     if ((i20 | 0) == 0) {
      break;
     }
     i18 = i20 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
    } else {
     HEAP32[i1 >> 2] = 278;
     HEAP32[i1 + 4 >> 2] = 0;
    }
   } while (0);
   i18 = HEAP32[i19 >> 2] | 0;
   if ((i18 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i20 = i18 | 0;
   i38 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i38 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i20 >> 2] = i38;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5XPath6Parser8lexQNameERN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = 0;
 L1 : do {
  if (__ZN7WebCore5XPath6Parser9lexNCNameERN3WTF6StringE(i1, i4) | 0) {
   i9 = i1 + 8 | 0;
   i10 = i1 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L3 : do {
    if ((i12 | 0) != 0) {
     i13 = HEAP32[i9 >> 2] | 0;
     i14 = i12;
     i15 = i11;
     while (1) {
      if (i13 >>> 0 >= (HEAP32[i14 + 4 >> 2] | 0) >>> 0) {
       i16 = i15;
       break;
      }
      i17 = i14 + 8 | 0;
      if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
       i18 = HEAP16[(HEAP32[i17 >> 2] | 0) + (i13 << 1) >> 1] | 0;
      } else {
       i18 = HEAPU8[(HEAP32[i17 >> 2] | 0) + i13 | 0] | 0;
      }
      if ((i18 & 65535) >>> 0 < 128 >>> 0) {
       if ((i18 & 65535) >>> 0 >= 33 >>> 0) {
        i16 = i15;
        break;
       }
       if (i18 << 16 >> 16 == 32 | (i18 - 9 & 65535) >>> 0 < 5 >>> 0) {
        i19 = i13;
        i20 = i15;
       } else {
        i16 = i15;
        break;
       }
      } else {
       if ((_u_charDirection(i18 & 65535) | 0) != 9) {
        i21 = 12;
        break;
       }
       i19 = HEAP32[i9 >> 2] | 0;
       i20 = HEAP32[i10 >> 2] | 0;
      }
      i17 = i19 + 1 | 0;
      HEAP32[i9 >> 2] = i17;
      i22 = HEAP32[i20 >> 2] | 0;
      if ((i22 | 0) == 0) {
       break L3;
      } else {
       i13 = i17;
       i14 = i22;
       i15 = i20;
      }
     }
     if ((i21 | 0) == 12) {
      i16 = HEAP32[i10 >> 2] | 0;
     }
     i15 = HEAP32[i16 >> 2] | 0;
     i14 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     if (i14 >>> 0 >= (HEAP32[i15 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     do {
      if ((HEAP32[i15 + 4 >> 2] | 0) >>> 0 > i14 >>> 0) {
       i13 = i15 + 8 | 0;
       if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
        i23 = HEAP16[(HEAP32[i13 >> 2] | 0) + (i14 << 1) >> 1] | 0;
        break;
       } else {
        i23 = HEAPU8[(HEAP32[i13 >> 2] | 0) + i14 | 0] | 0;
        break;
       }
      } else {
       i23 = 0;
      }
     } while (0);
     if (!((i23 & 255) << 24 >> 24 == 58 & (i23 & 65535) >>> 0 < 255 >>> 0)) {
      break;
     }
     i14 = i5 | 0;
     HEAP32[i14 >> 2] = 0;
     do {
      if (__ZN7WebCore5XPath6Parser9lexNCNameERN3WTF6StringE(i1, i5) | 0) {
       i15 = HEAP32[i8 >> 2] | 0;
       do {
        if ((i15 | 0) == 0) {
         i24 = 0;
        } else {
         i13 = i15 | 0;
         i22 = HEAP32[i13 >> 2] | 0;
         i17 = i22 + 2 | 0;
         HEAP32[i13 >> 2] = i22 + 4;
         if ((i17 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i15);
          i24 = i15;
          break;
         } else {
          HEAP32[i13 >> 2] = i17;
          i24 = i15;
          break;
         }
        }
       } while (0);
       i15 = HEAP32[i14 >> 2] | 0;
       i17 = (i15 | 0) == 0;
       if (!i17) {
        i13 = i15 | 0;
        HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
       }
       i13 = (i24 | 0) == 0;
       if (!i13) {
        i22 = i24 | 0;
        HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
       }
       if (!i17) {
        i22 = i15 | 0;
        HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
       }
       i22 = i7 | 0;
       HEAP32[i22 >> 2] = i24;
       if (!i13) {
        i25 = i24 | 0;
        HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
       }
       HEAP32[i7 + 4 >> 2] = H_BASE + 320;
       i25 = i7 + 8 | 0;
       HEAP32[i25 >> 2] = i15;
       do {
        if (!i17) {
         i26 = i15 | 0;
         i27 = HEAP32[i26 >> 2] | 0;
         HEAP32[i26 >> 2] = i27 + 2;
         if ((i27 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i15);
          break;
         } else {
          HEAP32[i26 >> 2] = i27;
          break;
         }
        }
       } while (0);
       do {
        if (!i13) {
         i27 = i24 | 0;
         i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
         if ((i26 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i24);
          break;
         } else {
          HEAP32[i27 >> 2] = i26;
          break;
         }
        }
       } while (0);
       __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i6, i7);
       i26 = i6 | 0;
       i27 = HEAP32[i26 >> 2] | 0;
       HEAP32[i26 >> 2] = 0;
       i26 = i2 | 0;
       i28 = HEAP32[i26 >> 2] | 0;
       HEAP32[i26 >> 2] = i27;
       do {
        if ((i28 | 0) != 0) {
         i27 = i28 | 0;
         i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
         if ((i26 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i28);
          break;
         } else {
          HEAP32[i27 >> 2] = i26;
          break;
         }
        }
       } while (0);
       i28 = HEAP32[i25 >> 2] | 0;
       do {
        if ((i28 | 0) != 0) {
         i26 = i28 | 0;
         i27 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
         if ((i27 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i28);
          break;
         } else {
          HEAP32[i26 >> 2] = i27;
          break;
         }
        }
       } while (0);
       i28 = HEAP32[i22 >> 2] | 0;
       do {
        if ((i28 | 0) != 0) {
         i25 = i28 | 0;
         i27 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
         if ((i27 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i28);
          break;
         } else {
          HEAP32[i25 >> 2] = i27;
          break;
         }
        }
       } while (0);
       do {
        if (!i17) {
         i28 = i15 | 0;
         i22 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
         if ((i22 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i15);
          break;
         } else {
          HEAP32[i28 >> 2] = i22;
          break;
         }
        }
       } while (0);
       if (i13) {
        i29 = 1;
        i30 = i15;
        break;
       }
       i17 = i24 | 0;
       i22 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i22 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        i29 = 1;
        i30 = i15;
        break;
       } else {
        HEAP32[i17 >> 2] = i22;
        i29 = 1;
        i30 = i15;
        break;
       }
      } else {
       i29 = 0;
       i30 = HEAP32[i14 >> 2] | 0;
      }
     } while (0);
     if ((i30 | 0) == 0) {
      i31 = i29;
      break L1;
     }
     i14 = i30 | 0;
     i22 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i30);
      i31 = i29;
      break L1;
     } else {
      HEAP32[i14 >> 2] = i22;
      i31 = i29;
      break L1;
     }
    }
   } while (0);
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i10 = i9 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = i2 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i11 | 0) == 0) {
    i31 = 1;
    break;
   }
   i9 = i11 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    i31 = 1;
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    i31 = 1;
    break;
   }
  } else {
   i31 = 0;
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return i31 | 0;
 }
 i8 = i2 | 0;
 i29 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i29 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return i31 | 0;
 } else {
  HEAP32[i8 >> 2] = i29;
  STACKTOP = i3;
  return i31 | 0;
 }
 return 0;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 4 | 0;
 i8 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = (i2 | 0) == 0;
 if (i10) {
  i11 = 0;
 } else {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 i13 = (i3 | 0) == 0;
 if (i13) {
  i14 = 0;
 } else {
  i14 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i15 = _llvm_uadd_with_overflow_i32(i11 + i8 | 0, i14 | 0) | 0;
 i14 = i15;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i10) {
  i16 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i16 = 9;
  }
 }
 do {
  if ((i16 | 0) == 9) {
   if (!i13) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i14 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i16 = 28;
      break;
     }
     i10 = i2 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     i17 = i2;
     i18 = 0;
    } else {
     if (i14 >>> 0 > 4294967275 >>> 0) {
      i16 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i14 + 20 | 0);
     i2 = i6 | 0;
     i10 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i10 | 0) == 0) {
      i16 = 28;
      break;
     }
     i2 = i10 + 20 | 0;
     HEAP32[i10 >> 2] = 2;
     HEAP32[i10 + 4 >> 2] = i14;
     HEAP32[i10 + 8 >> 2] = i2;
     HEAP32[i10 + 12 >> 2] = 0;
     HEAP32[i10 + 16 >> 2] = 32;
     i17 = i10;
     i18 = i2;
    }
   } while (0);
   if ((i16 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   i10 = _strlen(i2 | 0) | 0;
   i15 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i19 = 0;
    } else {
     i8 = HEAP32[i15 + 4 >> 2] | 0;
     i11 = HEAP32[i15 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i19 = 0;
      break;
     } else {
      i20 = 0;
     }
     while (1) {
      HEAP8[i18 + i20 | 0] = HEAP8[i11 + i20 | 0] | 0;
      i20 = i20 + 1 | 0;
      if (i20 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
     i8 = HEAP32[i9 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i19 = 0;
      break;
     }
     i19 = HEAP32[i8 + 4 >> 2] | 0;
    }
   } while (0);
   _memcpy(i18 + i19 | 0, i2 | 0, i10) | 0;
   i15 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i21 = 0;
   } else {
    i21 = HEAP32[i8 + 4 >> 2] | 0;
   }
   i8 = i21 + i15 | 0;
   i15 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i11 = HEAP32[i15 + 4 >> 2] | 0;
     i22 = HEAP32[i15 + 8 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP8[i18 + (i8 + i23) | 0] = HEAP8[i22 + i23 | 0] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i11 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i14 | 0) == 0) {
   i17 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i17 | 0) == 0) {
    i16 = 55;
    break;
   }
   i23 = i17 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   i24 = i17;
   i25 = 0;
  } else {
   if (i14 >>> 0 > 2147483637 >>> 0) {
    i16 = 55;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i14 << 1) + 20 | 0);
   i17 = i5 | 0;
   i23 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   if ((i23 | 0) == 0) {
    i16 = 55;
    break;
   }
   i17 = i23 + 20 | 0;
   HEAP32[i23 >> 2] = 2;
   HEAP32[i23 + 4 >> 2] = i14;
   HEAP32[i23 + 8 >> 2] = i17;
   HEAP32[i23 + 12 >> 2] = 0;
   HEAP32[i23 + 16 >> 2] = 0;
   i24 = i23;
   i25 = i17;
  }
 } while (0);
 if ((i16 | 0) == 55) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i16 = HEAP32[i7 >> 2] | 0;
 i14 = _strlen(i16 | 0) | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i26 = 0;
   i27 = 0;
  } else {
   i17 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
     i23 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     } else {
      i28 = 0;
     }
     while (1) {
      HEAP16[i25 + (i28 << 1) >> 1] = HEAP16[i23 + (i28 << 1) >> 1] | 0;
      i28 = i28 + 1 | 0;
      if (i28 >>> 0 >= i17 >>> 0) {
       break;
      }
     }
    } else {
     i23 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     } else {
      i29 = 0;
     }
     while (1) {
      HEAP16[i25 + (i29 << 1) >> 1] = HEAPU8[i23 + i29 | 0] | 0;
      i29 = i29 + 1 | 0;
      if (i29 >>> 0 >= i17 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i17 = HEAP32[i9 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i26 = 0;
    i27 = 0;
    break;
   }
   i26 = HEAP32[i17 + 4 >> 2] | 0;
   i27 = i17;
  }
 } while (0);
 if ((i14 | 0) == 0) {
  i30 = i27;
 } else {
  i27 = 0;
  while (1) {
   HEAP16[i25 + (i27 + i26 << 1) >> 1] = HEAPU8[i16 + i27 | 0] | 0;
   i27 = i27 + 1 | 0;
   if (i27 >>> 0 >= i14 >>> 0) {
    break;
   }
  }
  i30 = HEAP32[i9 >> 2] | 0;
 }
 i9 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 if ((i30 | 0) == 0) {
  i31 = 0;
 } else {
  i31 = HEAP32[i30 + 4 >> 2] | 0;
 }
 i30 = i31 + i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = HEAP32[i9 + 4 >> 2] | 0;
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i31 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i32 = 0;
    }
    while (1) {
     HEAP16[i25 + (i32 + i30 << 1) >> 1] = HEAP16[i31 + (i32 << 1) >> 1] | 0;
     i32 = i32 + 1 | 0;
     if (i32 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   } else {
    i31 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i33 = 0;
    }
    while (1) {
     HEAP16[i25 + (i33 + i30 << 1) >> 1] = HEAPU8[i31 + i33 | 0] | 0;
     i33 = i33 + 1 | 0;
     if (i33 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i24;
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = (i2 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, i7 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i9) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i10 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i12 = 37;
      break;
     }
     i13 = i11 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
     i14 = i11;
     i15 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 37;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i11 = i5 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i13 | 0) == 0) {
      i12 = 37;
      break;
     }
     i11 = i13 + 20 | 0;
     HEAP32[i13 >> 2] = 2;
     HEAP32[i13 + 4 >> 2] = i10;
     HEAP32[i13 + 8 >> 2] = i11;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 0;
     i14 = i13;
     i15 = i11;
    }
   } while (0);
   if ((i12 | 0) == 37) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = 0;
    } else {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i18 = 0;
       }
       while (1) {
        HEAP16[i15 + (i18 << 1) >> 1] = HEAP16[i17 + (i18 << 1) >> 1] | 0;
        i18 = i18 + 1 | 0;
        if (i18 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i19 = 0;
       }
       while (1) {
        HEAP16[i15 + (i19 << 1) >> 1] = HEAPU8[i17 + i19 | 0] | 0;
        i19 = i19 + 1 | 0;
        if (i19 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = 0;
      break;
     }
     i16 = HEAP32[i13 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i15 + (i11 + i16 << 1) >> 1] = HEAPU8[i3 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 0) {
   i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i14 | 0) == 0) {
    i12 = 19;
    break;
   }
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i20 = i14;
   i21 = 0;
  } else {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 19;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i12 = 19;
    break;
   }
   i14 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i10;
   HEAP32[i16 + 8 >> 2] = i14;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i20 = i16;
   i21 = i14;
  }
 } while (0);
 if ((i12 | 0) == 19) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i22 = 0;
  } else {
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   i6 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i23 = i12;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i21 + i14 | 0] = HEAP8[i6 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i23 = i10;
    }
   }
   i22 = HEAP32[i23 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i21 + i22 | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5XPath6Parser19expandQualifiedNameERKN3WTF6StringERS3_S6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
 } else {
  L3 : do {
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i11 = HEAP32[i9 + 8 >> 2] | 0;
    i12 = HEAP32[i9 + 4 >> 2] | 0;
    i13 = 0;
    while (1) {
     if (i13 >>> 0 >= i12 >>> 0) {
      break L3;
     }
     if ((HEAP16[i11 + (i13 << 1) >> 1] | 0) == 58) {
      i14 = i13;
      i15 = 9;
      break;
     } else {
      i13 = i13 + 1 | 0;
     }
    }
   } else {
    i13 = HEAP32[i9 + 8 >> 2] | 0;
    i11 = HEAP32[i9 + 4 >> 2] | 0;
    i12 = 0;
    while (1) {
     if (i12 >>> 0 >= i11 >>> 0) {
      break L3;
     }
     if ((HEAP8[i13 + i12 | 0] | 0) == 58) {
      i14 = i12;
      i15 = 9;
      break;
     } else {
      i12 = i12 + 1 | 0;
     }
    }
   }
  } while (0);
  do {
   if ((i15 | 0) == 9) {
    if ((i14 | 0) == -1) {
     break;
    }
    i12 = HEAP32[i1 + 4 >> 2] | 0;
    if ((i12 | 0) == 0) {
     HEAP8[i1 + 20 | 0] = 1;
     i16 = 0;
     STACKTOP = i5;
     return i16 | 0;
    }
    i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
    __ZNK3WTF6String9substringEjj(i7, i2, 0, i14);
    FUNCTION_TABLE_viii[i13 & 3](i6, i12, i7);
    i12 = i6 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    i11 = i4 | 0;
    i17 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = i13;
    do {
     if ((i17 | 0) != 0) {
      i13 = i17 | 0;
      i18 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i17);
       break;
      } else {
       HEAP32[i13 >> 2] = i18;
       break;
      }
     }
    } while (0);
    i17 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i18 = i17 | 0;
      i13 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
      if ((i13 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i17);
       break;
      } else {
       HEAP32[i18 >> 2] = i13;
       break;
      }
     }
    } while (0);
    i17 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i12 = i17 | 0;
      i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
      if ((i13 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i17);
       break;
      } else {
       HEAP32[i12 >> 2] = i13;
       break;
      }
     }
    } while (0);
    if ((HEAP32[i11 >> 2] | 0) == 0) {
     HEAP8[i1 + 20 | 0] = 1;
     i16 = 0;
     STACKTOP = i5;
     return i16 | 0;
    }
    __ZNK3WTF6String9substringEjj(i8, i2, i14 + 1 | 0, -1);
    i17 = i8 | 0;
    i13 = HEAP32[i17 >> 2] | 0;
    HEAP32[i17 >> 2] = 0;
    i12 = i3 | 0;
    i18 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = i13;
    do {
     if ((i18 | 0) != 0) {
      i13 = i18 | 0;
      i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
      if ((i12 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i18);
       break;
      } else {
       HEAP32[i13 >> 2] = i12;
       break;
      }
     }
    } while (0);
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i16 = 1;
     STACKTOP = i5;
     return i16 | 0;
    }
    i11 = i18 | 0;
    i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     i16 = 1;
     STACKTOP = i5;
     return i16 | 0;
    } else {
     HEAP32[i11 >> 2] = i12;
     i16 = 1;
     STACKTOP = i5;
     return i16 | 0;
    }
   }
  } while (0);
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  i10 = i9;
 }
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i3 | 0) == 0) {
  i16 = 1;
  STACKTOP = i5;
  return i16 | 0;
 }
 i10 = i3 | 0;
 i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i16 = 1;
  STACKTOP = i5;
  return i16 | 0;
 } else {
  HEAP32[i10 >> 2] = i9;
  i16 = 1;
  STACKTOP = i5;
  return i16 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath4Step4AxisEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, i2, i3) {
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
 i8 = __ZN3WTF10fastMallocEj(i2 << 3) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   HEAP32[i8 + (i9 << 3) >> 2] = 0;
   HEAP32[i8 + (i9 << 3) + 4 >> 2] = 0;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i10 = 0;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 } else {
  i12 = 0;
  i13 = 0;
 }
 while (1) {
  i8 = i7 + (i12 << 3) | 0;
  i2 = i8 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  i14 = i9;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i13;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i9 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i9) | 0;
   }
   i9 = (i18 >>> 23) + ~i18 | 0;
   i17 = i9 << 12 ^ i9;
   i9 = i17 >>> 7 ^ i17;
   i17 = i9 << 2 ^ i9;
   i9 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 11;
     break;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i2 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i9 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 11) {
    i26 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i9 = i17 | 0;
     i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i9 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i12 << 3) + 4 >> 2];
   i15 = (i8 | 0) == (i3 | 0) ? i27 : i13;
  }
  i17 = i12 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i12 = i17;
   i13 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i10 = i15;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
  i13 = i1;
  do {
   if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
    i12 = i1 | 0;
    i27 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i12 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i10 = i15;
   break;
  }
 }
 i11 = i7;
 __ZN3WTF8fastFreeEPv(i11);
 return i10 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath4Step4AxisEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath4Step4AxisEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i18 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i8 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i8 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath4Step4AxisEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore5XPath6Parser9lexNCNameERN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 | 0;
 i1 = HEAP32[HEAP32[i7 >> 2] >> 2] | 0;
 i8 = (i1 | 0) == 0;
 if (i8) {
  i9 = 0;
 } else {
  i9 = HEAP32[i1 + 4 >> 2] | 0;
 }
 if (i6 >>> 0 >= i9 >>> 0) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 do {
  if (i8) {
   i11 = 0;
   i12 = 10;
  } else {
   if ((HEAP32[i1 + 4 >> 2] | 0) >>> 0 <= i6 >>> 0) {
    i11 = 0;
    i12 = 10;
    break;
   }
   i9 = i1 + 8 | 0;
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i13 = HEAP16[(HEAP32[i9 >> 2] | 0) + (i6 << 1) >> 1] | 0;
   } else {
    i13 = HEAPU8[(HEAP32[i9 >> 2] | 0) + i6 | 0] | 0;
   }
   if ((i13 << 16 >> 16 | 0) == 95) {
    i14 = i6;
    break;
   } else if ((i13 << 16 >> 16 | 0) == 46 | (i13 << 16 >> 16 | 0) == 45) {
    i10 = 0;
   } else {
    i11 = i13;
    i12 = 10;
    break;
   }
   STACKTOP = i3;
   return i10 | 0;
  }
 } while (0);
 do {
  if ((i12 | 0) == 10) {
   if ((1 << ((_u_charType(i11 & 65535) | 0) << 24 >> 24) & 1070 | 0) == 0) {
    i10 = 0;
    STACKTOP = i3;
    return i10 | 0;
   } else {
    i14 = HEAP32[i5 >> 2] | 0;
    break;
   }
  }
 } while (0);
 while (1) {
  i11 = HEAP32[i7 >> 2] | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  i1 = (i13 | 0) == 0;
  if (i1) {
   i15 = 0;
  } else {
   i15 = HEAP32[i13 + 4 >> 2] | 0;
  }
  if (i14 >>> 0 >= i15 >>> 0) {
   i16 = i11;
   i17 = i14;
   break;
  }
  do {
   if (i1) {
    i18 = 0;
    i12 = 21;
   } else {
    if ((HEAP32[i13 + 4 >> 2] | 0) >>> 0 <= i14 >>> 0) {
     i18 = 0;
     i12 = 21;
     break;
    }
    i11 = i13 + 8 | 0;
    if ((HEAP32[i13 + 16 >> 2] & 32 | 0) == 0) {
     i19 = HEAP16[(HEAP32[i11 >> 2] | 0) + (i14 << 1) >> 1] | 0;
    } else {
     i19 = HEAPU8[(HEAP32[i11 >> 2] | 0) + i14 | 0] | 0;
    }
    if ((i19 << 16 >> 16 | 0) == 95 | (i19 << 16 >> 16 | 0) == 46 | (i19 << 16 >> 16 | 0) == 45) {
     i20 = i14;
    } else {
     i18 = i19;
     i12 = 21;
    }
   }
  } while (0);
  if ((i12 | 0) == 21) {
   i12 = 0;
   if ((1 << ((_u_charType(i18 & 65535) | 0) << 24 >> 24) & 2046 | 0) == 0) {
    i12 = 23;
    break;
   }
   i20 = HEAP32[i5 >> 2] | 0;
  }
  i13 = i20 + 1 | 0;
  HEAP32[i5 >> 2] = i13;
  i14 = i13;
 }
 if ((i12 | 0) == 23) {
  i16 = HEAP32[i7 >> 2] | 0;
  i17 = HEAP32[i5 >> 2] | 0;
 }
 __ZNK3WTF6String9substringEjj(i4, i16, i6, i17 - i6 | 0);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i17 = i2 | 0;
 i2 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = i4;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i17 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = 1;
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = i2 | 0;
 i17 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i10 = 1;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i6 >> 2] = i17;
  i10 = 1;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore5XPath6Parser9lexStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = i2 + 8 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = i6 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 0;
  } else {
   if ((HEAP32[i9 + 4 >> 2] | 0) >>> 0 <= i2 >>> 0) {
    i10 = 0;
    break;
   }
   i11 = i9 + 8 | 0;
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i10 = HEAP16[(HEAP32[i11 >> 2] | 0) + (i2 << 1) >> 1] | 0;
    break;
   } else {
    i10 = HEAPU8[(HEAP32[i11 >> 2] | 0) + i2 | 0] | 0;
    break;
   }
  }
 } while (0);
 i9 = i2 + 1 | 0;
 i2 = i9;
 while (1) {
  HEAP32[i7 >> 2] = i2;
  i11 = HEAP32[i8 >> 2] | 0;
  i12 = (i11 | 0) == 0;
  if (i12) {
   i13 = 0;
  } else {
   i13 = HEAP32[i11 + 4 >> 2] | 0;
  }
  if (i2 >>> 0 >= i13 >>> 0) {
   i14 = 31;
   break;
  }
  do {
   if (i12) {
    i15 = 0;
   } else {
    if ((HEAP32[i11 + 4 >> 2] | 0) >>> 0 <= i2 >>> 0) {
     i15 = 0;
     break;
    }
    i16 = i11 + 8 | 0;
    if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
     i15 = HEAP16[(HEAP32[i16 >> 2] | 0) + (i2 << 1) >> 1] | 0;
     break;
    } else {
     i15 = HEAPU8[(HEAP32[i16 >> 2] | 0) + i2 | 0] | 0;
     break;
    }
   }
  } while (0);
  if (i15 << 16 >> 16 == i10 << 16 >> 16) {
   break;
  }
  i2 = i2 + 1 | 0;
 }
 if ((i14 | 0) == 31) {
  HEAP32[i1 >> 2] = 278;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 __ZNK3WTF6String9substringEjj(i4, i6, i9, i2 - i9 | 0);
 i9 = i4 | 0;
 do {
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   __ZN3WTF6StringC1EPKc(i5, H_BASE + 440 | 0);
   i4 = i5 | 0;
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   i6 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i2;
   do {
    if ((i6 | 0) != 0) {
     i2 = i6 | 0;
     i14 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i2 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i14 = i6 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i14 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 HEAP32[i1 >> 2] = 266;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i7;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i1 | 0;
 i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore5XPath6Parser9lexNumberEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = 0;
 i8 = i6;
 while (1) {
  i9 = HEAP32[i7 >> 2] | 0;
  i10 = (i9 | 0) == 0;
  if (i10) {
   i11 = 0;
  } else {
   i11 = HEAP32[i9 + 4 >> 2] | 0;
  }
  if (i8 >>> 0 >= i11 >>> 0 | i10) {
   break;
  }
  if ((HEAP32[i9 + 4 >> 2] | 0) >>> 0 <= i8 >>> 0) {
   break;
  }
  i10 = i9 + 8 | 0;
  if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
   i12 = HEAP16[(HEAP32[i10 >> 2] | 0) + (i8 << 1) >> 1] | 0;
  } else {
   i12 = HEAPU8[(HEAP32[i10 >> 2] | 0) + i8 | 0] | 0;
  }
  if ((i12 & 65535) >>> 0 > 254 >>> 0) {
   break;
  }
  if ((i12 - 48 & 65535) >>> 0 > 9 >>> 0) {
   if (i12 << 16 >> 16 != 46 | i2) {
    break;
   } else {
    i13 = 1;
   }
  } else {
   i13 = i2;
  }
  i10 = i8 + 1 | 0;
  HEAP32[i5 >> 2] = i10;
  i2 = i13;
  i8 = i10;
 }
 __ZNK3WTF6String9substringEjj(i4, i7, i6, i8 - i6 | 0);
 HEAP32[i1 >> 2] = 268;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore5XPath6Parser6skipWSEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 8 | 0;
 i3 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 while (1) {
  i4 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
  i5 = (i4 | 0) == 0;
  if (i5) {
   i6 = 0;
  } else {
   i6 = HEAP32[i4 + 4 >> 2] | 0;
  }
  if (i1 >>> 0 >= i6 >>> 0 | i5) {
   i7 = 16;
   break;
  }
  if ((HEAP32[i4 + 4 >> 2] | 0) >>> 0 <= i1 >>> 0) {
   i7 = 17;
   break;
  }
  i5 = i4 + 8 | 0;
  if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
   i8 = HEAP16[(HEAP32[i5 >> 2] | 0) + (i1 << 1) >> 1] | 0;
  } else {
   i8 = HEAPU8[(HEAP32[i5 >> 2] | 0) + i1 | 0] | 0;
  }
  if ((i8 & 65535) >>> 0 < 128 >>> 0) {
   if ((i8 & 65535) >>> 0 >= 33 >>> 0) {
    i7 = 18;
    break;
   }
   if (i8 << 16 >> 16 == 32 | (i8 - 9 & 65535) >>> 0 < 5 >>> 0) {
    i9 = i1;
   } else {
    i7 = 19;
    break;
   }
  } else {
   if ((_u_charDirection(i8 & 65535) | 0) != 9) {
    i7 = 20;
    break;
   }
   i9 = HEAP32[i2 >> 2] | 0;
  }
  i5 = i9 + 1 | 0;
  HEAP32[i2 >> 2] = i5;
  i1 = i5;
 }
 if ((i7 | 0) == 16) {
  return;
 } else if ((i7 | 0) == 17) {
  return;
 } else if ((i7 | 0) == 18) {
  return;
 } else if ((i7 | 0) == 19) {
  return;
 } else if ((i7 | 0) == 20) {
  return;
 }
}
function __ZN7WebCore5XPath6Parser3lexER7YYSTYPE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 __ZN7WebCore5XPath6Parser17nextTokenInternalEv(i4, i1);
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i5;
 switch (i5 | 0) {
 case 271:
  {
   HEAP32[i2 >> 2] = HEAP32[i4 + 8 >> 2];
   break;
  }
 case 258:
  {
   HEAP32[i2 >> 2] = HEAP32[i4 + 12 >> 2];
   break;
  }
 case 259:
 case 260:
  {
   HEAP32[i2 >> 2] = HEAP32[i4 + 16 >> 2];
   break;
  }
 case 269:
 case 265:
 case 266:
 case 270:
 case 268:
 case 267:
  {
   i1 = i4 + 4 | 0;
   i6 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   HEAP32[i2 >> 2] = i6;
   break;
  }
 default:
  {}
 }
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return i5 | 0;
 }
 i4 = i6 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return i5 | 0;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i3;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore5XPath6Parser14parseStatementERKN3WTF6StringEPNS_15XPathNSResolverERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i6 + 4 >> 2] = i3;
 _memset(i6 + 8 | 0, 0, 13) | 0;
 i3 = __Z12xpathyyparseRN7WebCore5XPath6ParserE(i6) | 0;
 do {
  if ((HEAP8[i6 + 20 | 0] & 1) == 0) {
   if ((i3 | 0) == 0) {
    i2 = i6 + 16 | 0;
    i7 = HEAP32[i2 >> 2] | 0;
    HEAP32[i2 >> 2] = 0;
    HEAP32[i1 >> 2] = i7;
    break;
   } else {
    HEAP32[i4 >> 2] = 451;
    HEAP32[i1 >> 2] = 0;
    break;
   }
  } else {
   HEAP32[i4 >> 2] = 14;
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 i1 = i6 + 16 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5XPath6Parser15peekAheadHelperEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = (HEAP32[i1 + 8 >> 2] | 0) + 1 | 0;
 i3 = HEAP32[HEAP32[i1 >> 2] >> 2] | 0;
 i1 = (i3 | 0) == 0;
 if (i1) {
  i4 = 0;
 } else {
  i4 = HEAP32[i3 + 4 >> 2] | 0;
 }
 if (i2 >>> 0 >= i4 >>> 0) {
  return 0;
 }
 do {
  if (i1) {
   i5 = 0;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) >>> 0 <= i2 >>> 0) {
    i5 = 0;
    break;
   }
   i4 = i3 + 8 | 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
    i5 = HEAP16[(HEAP32[i4 >> 2] | 0) + (i2 << 1) >> 1] | 0;
    break;
   } else {
    i5 = HEAPU8[(HEAP32[i4 >> 2] | 0) + i2 | 0] | 0;
    break;
   }
  }
 } while (0);
 return ((i5 & 65535) >>> 0 > 254 >>> 0 ? 0 : i5 & 255) | 0;
}
function __ZN7WebCore5XPath6Parser13peekCurHelperEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = HEAP32[HEAP32[i1 >> 2] >> 2] | 0;
 i1 = (i3 | 0) == 0;
 if (i1) {
  i4 = 0;
 } else {
  i4 = HEAP32[i3 + 4 >> 2] | 0;
 }
 if (i2 >>> 0 >= i4 >>> 0) {
  return 0;
 }
 do {
  if (i1) {
   i5 = 0;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) >>> 0 <= i2 >>> 0) {
    i5 = 0;
    break;
   }
   i4 = i3 + 8 | 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
    i5 = HEAP16[(HEAP32[i4 >> 2] | 0) + (i2 << 1) >> 1] | 0;
    break;
   } else {
    i5 = HEAPU8[(HEAP32[i4 >> 2] | 0) + i2 | 0] | 0;
    break;
   }
  }
 } while (0);
 return ((i5 & 65535) >>> 0 > 254 >>> 0 ? 0 : i5 & 255) | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 328 >> 2] = H_BASE + 288;
 HEAP32[H_BASE + 336 >> 2] = H_BASE + 264;
 HEAP32[H_BASE + 344 >> 2] = H_BASE + 248;
 HEAP32[H_BASE + 352 >> 2] = H_BASE + 240;
 HEAP32[H_BASE + 360 >> 2] = H_BASE + 224;
 HEAP32[H_BASE + 368 >> 2] = H_BASE + 200;
 HEAP32[H_BASE + 376 >> 2] = H_BASE + 184;
 HEAP32[H_BASE + 384 >> 2] = H_BASE + 160;
 HEAP32[H_BASE + 392 >> 2] = H_BASE + 136;
 HEAP32[H_BASE + 400 >> 2] = H_BASE + 128;
 HEAP32[H_BASE + 408 >> 2] = H_BASE + 112;
 HEAP32[H_BASE + 416 >> 2] = H_BASE + 88;
 HEAP32[H_BASE + 424 >> 2] = H_BASE + 80;
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
function __ZNK7WebCore5XPath6Parser23isBinaryOperatorContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 switch (HEAP32[i1 + 12 >> 2] | 0) {
 case 0:
 case 64:
 case 271:
 case 40:
 case 91:
 case 44:
 case 263:
 case 264:
 case 258:
 case 47:
 case 276:
 case 124:
 case 262:
 case 261:
 case 260:
 case 259:
  {
   i2 = 0;
   break;
  }
 default:
  {
   i2 = 1;
  }
 }
 return i2 | 0;
}
function __ZN7WebCore5XPath6Parser19makeTokenAndAdvanceEiNS0_9NumericOp6OpcodeEi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = i2 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i5;
 HEAP32[i1 >> 2] = i3;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i4;
 return;
}
function __ZN7WebCore5XPath6Parser19makeTokenAndAdvanceEiNS0_8EqTestOp6OpcodeEi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = i2 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i5;
 HEAP32[i1 >> 2] = i3;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i4;
 return;
}
function __ZN7WebCore5XPath6Parser19makeTokenAndAdvanceEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 + 8 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i4;
 HEAP32[i1 >> 2] = i3;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore5XPath6ParserC2ERKN3WTF6StringEPNS_15XPathNSResolverE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 _memset(i1 + 8 | 0, 0, 13) | 0;
 return;
}
function __ZN7WebCore5XPath6ParserC1ERKN3WTF6StringEPNS_15XPathNSResolverE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 _memset(i1 + 8 | 0, 0, 13) | 0;
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZN7WebCore5XPath6ParserC2ERKN3WTF6StringEPNS_15XPathNSResolverE,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore5XPath6Parser15peekAheadHelperEv","__ZN7WebCore5XPath6Parser19expandQualifiedNameERKN3WTF6StringERS3_S6_","__ZN7WebCore5XPath6Parser9lexNumberEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath4Step4AxisEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES1_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore5XPath6Parser8lexQNameERN3WTF6StringE","__ZN7WebCore5XPath6Parser17nextTokenInternalEv","__ZN7WebCore5XPath6ParserC2ERKN3WTF6StringEPNS_15XPathNSResolverE","_memset","__ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore5XPath6Parser14parseStatementERKN3WTF6StringEPNS_15XPathNSResolverERi","__ZN7WebCore5XPath6Parser9lexNCNameERN3WTF6StringE","__ZNK7WebCore5XPath6Parser23isBinaryOperatorContextEv","__ZN7WebCore5XPath6Parser6skipWSEv","__ZN7WebCore5XPath6Parser19makeTokenAndAdvanceEiNS0_8EqTestOp6OpcodeEi","__ZN7WebCore5XPath6Parser19makeTokenAndAdvanceEiNS0_9NumericOp6OpcodeEi","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore5XPath4Step4AxisEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_","__ZN7WebCore5XPath6Parser3lexER7YYSTYPE","__ZN7WebCore5XPath6Parser19makeTokenAndAdvanceEii","_memcpy","__ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev","__ZN7WebCore5XPath6Parser9lexStringEv","__ZN7WebCore5XPath6Parser13peekCurHelperEv"]

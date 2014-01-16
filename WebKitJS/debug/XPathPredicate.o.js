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
H_BASE = parentModule["_malloc"](272 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 272;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore5XPath6NumberC1Ed;
var __ZN7WebCore5XPath16StringExpressionC1EON3WTF6StringE;
var __ZN7WebCore5XPath8NegativeC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEE;
var __ZN7WebCore5XPath9NumericOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_;
var __ZN7WebCore5XPath8EqTestOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_;
var __ZN7WebCore5XPath9LogicalOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_;
var __ZN7WebCore5XPath5UnionC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEES7_;
/* memory initializer */ allocate([112,111,115,105,116,105,111,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vid(index,a1,a2) {
  try {
    Module["dynCall_vid"](index,a1,a2);
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
  var __ZTVN7WebCore5XPath8NegativeE=(H_BASE+88)|0;
  var __ZTVN7WebCore5XPath6NumberE=(H_BASE+152)|0;
  var __ZTVN7WebCore5XPath9LogicalOpE=(H_BASE+56)|0;
  var __ZTVN7WebCore5XPath5UnionE=(H_BASE+184)|0;
  var __ZTVN7WebCore5XPath8EqTestOpE=(H_BASE+120)|0;
  var __ZTVN7WebCore5XPath9NumericOpE=(H_BASE+24)|0;
  var __ZTVN7WebCore5XPath10ExpressionE=(H_BASE+248)|0;
  var __ZTVN7WebCore5XPath16StringExpressionE=(H_BASE+216)|0;
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
  var invoke_vid=env.invoke_vid;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fmod=env._fmod;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore5XPath8EqTestOp7compareERKNS0_5ValueES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, d41 = +0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 304 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 56 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 88 | 0;
 i11 = i4 + 112 | 0;
 i12 = i4 + 120 | 0;
 i13 = i4 + 144 | 0;
 i14 = i4 + 152 | 0;
 i15 = i4 + 176 | 0;
 i16 = i4 + 200 | 0;
 i17 = i4 + 224 | 0;
 i18 = i4 + 232 | 0;
 i19 = i4 + 256 | 0;
 i20 = i4 + 264 | 0;
 i21 = i4 + 288 | 0;
 i22 = i4 + 296 | 0;
 i23 = i2 | 0;
 do {
  if ((HEAP32[i23 >> 2] | 0) == 0) {
   i24 = __ZNK7WebCore5XPath5Value9toNodeSetEv(i2) | 0;
   i25 = HEAP32[i3 >> 2] | 0;
   if ((i25 | 0) == 3) {
    i26 = i24 + 12 | 0;
    i27 = i24 + 4 | 0;
    i28 = i12 | 0;
    i29 = i13 | 0;
    i30 = i12 + 16 | 0;
    i31 = 0;
    while (1) {
     if (i31 >>> 0 >= (HEAP32[i26 >> 2] | 0) >>> 0) {
      i32 = 0;
      i33 = 93;
      break;
     }
     __ZN7WebCore5XPath11stringValueEPNS_4NodeE(i13, HEAP32[(HEAP32[i27 >> 2] | 0) + (i31 << 2) >> 2] | 0);
     HEAP32[i28 >> 2] = 3;
     i34 = __ZN3WTF10fastMallocEj(24) | 0;
     HEAP32[i34 >> 2] = 1;
     i35 = HEAP32[i29 >> 2] | 0;
     HEAP32[i34 + 4 >> 2] = i35;
     if ((i35 | 0) != 0) {
      i36 = i35 | 0;
      HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
     }
     HEAP8[i34 + 8 | 0] = 1;
     HEAP8[i34 + 9 | 0] = 0;
     HEAP32[i34 + 12 >> 2] = 0;
     HEAP32[i34 + 16 >> 2] = 0;
     HEAP32[i34 + 20 >> 2] = 0;
     HEAP32[i30 >> 2] = i34;
     i34 = __ZNK7WebCore5XPath8EqTestOp7compareERKNS0_5ValueES4_(i1, i12, i3) | 0;
     __ZN7WebCore5XPath5ValueD1Ev(i12);
     i36 = HEAP32[i29 >> 2] | 0;
     do {
      if ((i36 | 0) != 0) {
       i35 = i36 | 0;
       i37 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
       if ((i37 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i36);
        break;
       } else {
        HEAP32[i35 >> 2] = i37;
        break;
       }
      }
     } while (0);
     if (i34) {
      i32 = 1;
      i33 = 94;
      break;
     } else {
      i31 = i31 + 1 | 0;
     }
    }
    if ((i33 | 0) == 93) {
     STACKTOP = i4;
     return i32 | 0;
    } else if ((i33 | 0) == 94) {
     STACKTOP = i4;
     return i32 | 0;
    }
   } else if ((i25 | 0) == 2) {
    i31 = i24 + 12 | 0;
    i29 = i24 + 4 | 0;
    i30 = i10 | 0;
    i28 = i11 | 0;
    i27 = i10 + 16 | 0;
    i26 = i9 | 0;
    i36 = i9 + 8 | 0;
    i37 = i9 + 16 | 0;
    i35 = 0;
    while (1) {
     if (i35 >>> 0 >= (HEAP32[i31 >> 2] | 0) >>> 0) {
      i32 = 0;
      i33 = 91;
      break;
     }
     __ZN7WebCore5XPath11stringValueEPNS_4NodeE(i11, HEAP32[(HEAP32[i29 >> 2] | 0) + (i35 << 2) >> 2] | 0);
     HEAP32[i30 >> 2] = 3;
     i38 = __ZN3WTF10fastMallocEj(24) | 0;
     HEAP32[i38 >> 2] = 1;
     i39 = HEAP32[i28 >> 2] | 0;
     HEAP32[i38 + 4 >> 2] = i39;
     if ((i39 | 0) != 0) {
      i40 = i39 | 0;
      HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
     }
     HEAP8[i38 + 8 | 0] = 1;
     HEAP8[i38 + 9 | 0] = 0;
     HEAP32[i38 + 12 >> 2] = 0;
     HEAP32[i38 + 16 >> 2] = 0;
     HEAP32[i38 + 20 >> 2] = 0;
     HEAP32[i27 >> 2] = i38;
     d41 = +__ZNK7WebCore5XPath5Value8toNumberEv(i10);
     HEAP32[i26 >> 2] = 2;
     HEAPF64[i36 >> 3] = d41;
     HEAP32[i37 >> 2] = 0;
     i38 = __ZNK7WebCore5XPath8EqTestOp7compareERKNS0_5ValueES4_(i1, i9, i3) | 0;
     __ZN7WebCore5XPath5ValueD1Ev(i9);
     __ZN7WebCore5XPath5ValueD1Ev(i10);
     i40 = HEAP32[i28 >> 2] | 0;
     do {
      if ((i40 | 0) != 0) {
       i39 = i40 | 0;
       i42 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
       if ((i42 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i40);
        break;
       } else {
        HEAP32[i39 >> 2] = i42;
        break;
       }
      }
     } while (0);
     if (i38) {
      i32 = 1;
      i33 = 92;
      break;
     } else {
      i35 = i35 + 1 | 0;
     }
    }
    if ((i33 | 0) == 91) {
     STACKTOP = i4;
     return i32 | 0;
    } else if ((i33 | 0) == 92) {
     STACKTOP = i4;
     return i32 | 0;
    }
   } else if ((i25 | 0) == 0) {
    i35 = __ZNK7WebCore5XPath5Value9toNodeSetEv(i3) | 0;
    i28 = i24 + 12 | 0;
    if ((HEAP32[i28 >> 2] | 0) == 0) {
     i32 = 0;
     STACKTOP = i4;
     return i32 | 0;
    }
    i37 = i35 + 12 | 0;
    i36 = i24 + 4 | 0;
    i26 = i5 | 0;
    i27 = i6 | 0;
    i30 = i5 + 16 | 0;
    i29 = i35 + 4 | 0;
    i35 = i7 | 0;
    i31 = i8 | 0;
    i40 = i7 + 16 | 0;
    i34 = 0;
    L41 : while (1) {
     i42 = 0;
     while (1) {
      if (i42 >>> 0 >= (HEAP32[i37 >> 2] | 0) >>> 0) {
       break;
      }
      if ((HEAP32[i28 >> 2] | 0) >>> 0 <= i34 >>> 0) {
       i33 = 11;
       break L41;
      }
      __ZN7WebCore5XPath11stringValueEPNS_4NodeE(i6, HEAP32[(HEAP32[i36 >> 2] | 0) + (i34 << 2) >> 2] | 0);
      HEAP32[i26 >> 2] = 3;
      i39 = __ZN3WTF10fastMallocEj(24) | 0;
      HEAP32[i39 >> 2] = 1;
      i43 = HEAP32[i27 >> 2] | 0;
      HEAP32[i39 + 4 >> 2] = i43;
      if ((i43 | 0) != 0) {
       i44 = i43 | 0;
       HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 2;
      }
      HEAP8[i39 + 8 | 0] = 1;
      HEAP8[i39 + 9 | 0] = 0;
      HEAP32[i39 + 12 >> 2] = 0;
      HEAP32[i39 + 16 >> 2] = 0;
      HEAP32[i39 + 20 >> 2] = 0;
      HEAP32[i30 >> 2] = i39;
      if ((HEAP32[i37 >> 2] | 0) >>> 0 <= i42 >>> 0) {
       i33 = 15;
       break L41;
      }
      __ZN7WebCore5XPath11stringValueEPNS_4NodeE(i8, HEAP32[(HEAP32[i29 >> 2] | 0) + (i42 << 2) >> 2] | 0);
      HEAP32[i35 >> 2] = 3;
      i39 = __ZN3WTF10fastMallocEj(24) | 0;
      HEAP32[i39 >> 2] = 1;
      i44 = HEAP32[i31 >> 2] | 0;
      HEAP32[i39 + 4 >> 2] = i44;
      if ((i44 | 0) != 0) {
       i43 = i44 | 0;
       HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
      }
      HEAP8[i39 + 8 | 0] = 1;
      HEAP8[i39 + 9 | 0] = 0;
      HEAP32[i39 + 12 >> 2] = 0;
      HEAP32[i39 + 16 >> 2] = 0;
      HEAP32[i39 + 20 >> 2] = 0;
      HEAP32[i40 >> 2] = i39;
      i39 = __ZNK7WebCore5XPath8EqTestOp7compareERKNS0_5ValueES4_(i1, i5, i7) | 0;
      __ZN7WebCore5XPath5ValueD1Ev(i7);
      i43 = HEAP32[i31 >> 2] | 0;
      do {
       if ((i43 | 0) != 0) {
        i44 = i43 | 0;
        i45 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
        if ((i45 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i43);
         break;
        } else {
         HEAP32[i44 >> 2] = i45;
         break;
        }
       }
      } while (0);
      __ZN7WebCore5XPath5ValueD1Ev(i5);
      i43 = HEAP32[i27 >> 2] | 0;
      do {
       if ((i43 | 0) != 0) {
        i45 = i43 | 0;
        i44 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
        if ((i44 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i43);
         break;
        } else {
         HEAP32[i45 >> 2] = i44;
         break;
        }
       }
      } while (0);
      if (i39) {
       i32 = 1;
       i33 = 89;
       break L41;
      }
      i42 = i42 + 1 | 0;
     }
     i42 = i34 + 1 | 0;
     if (i42 >>> 0 < (HEAP32[i28 >> 2] | 0) >>> 0) {
      i34 = i42;
     } else {
      i32 = 0;
      i33 = 90;
      break;
     }
    }
    if ((i33 | 0) == 15) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    } else if ((i33 | 0) == 11) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    } else if ((i33 | 0) == 89) {
     STACKTOP = i4;
     return i32 | 0;
    } else if ((i33 | 0) == 90) {
     STACKTOP = i4;
     return i32 | 0;
    }
   } else if ((i25 | 0) == 1) {
    i34 = __ZNK7WebCore5XPath5Value9toBooleanEv(i2) | 0;
    HEAP32[i14 >> 2] = 1;
    HEAP8[i14 + 4 | 0] = i34 & 1;
    HEAP32[i14 + 16 >> 2] = 0;
    i34 = __ZNK7WebCore5XPath8EqTestOp7compareERKNS0_5ValueES4_(i1, i14, i3) | 0;
    __ZN7WebCore5XPath5ValueD1Ev(i14);
    i32 = i34;
    STACKTOP = i4;
    return i32 | 0;
   } else {
    i46 = i25;
    break;
   }
  } else {
   i46 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i14 = i3 | 0;
 do {
  if ((i46 | 0) == 0) {
   i5 = __ZNK7WebCore5XPath5Value9toNodeSetEv(i3) | 0;
   i7 = HEAP32[i23 >> 2] | 0;
   if ((i7 | 0) == 3) {
    i8 = i5 + 12 | 0;
    i6 = i5 + 4 | 0;
    i10 = i18 | 0;
    i9 = i19 | 0;
    i11 = i18 + 16 | 0;
    i12 = 0;
    while (1) {
     if (i12 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
      i32 = 0;
      i33 = 98;
      break;
     }
     __ZN7WebCore5XPath11stringValueEPNS_4NodeE(i19, HEAP32[(HEAP32[i6 >> 2] | 0) + (i12 << 2) >> 2] | 0);
     HEAP32[i10 >> 2] = 3;
     i13 = __ZN3WTF10fastMallocEj(24) | 0;
     HEAP32[i13 >> 2] = 1;
     i34 = HEAP32[i9 >> 2] | 0;
     HEAP32[i13 + 4 >> 2] = i34;
     if ((i34 | 0) != 0) {
      i28 = i34 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
     }
     HEAP8[i13 + 8 | 0] = 1;
     HEAP8[i13 + 9 | 0] = 0;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 0;
     HEAP32[i13 + 20 >> 2] = 0;
     HEAP32[i11 >> 2] = i13;
     i13 = __ZNK7WebCore5XPath8EqTestOp7compareERKNS0_5ValueES4_(i1, i2, i18) | 0;
     __ZN7WebCore5XPath5ValueD1Ev(i18);
     i28 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i28 | 0) != 0) {
       i34 = i28 | 0;
       i27 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i28);
        break;
       } else {
        HEAP32[i34 >> 2] = i27;
        break;
       }
      }
     } while (0);
     if (i13) {
      i32 = 1;
      i33 = 99;
      break;
     } else {
      i12 = i12 + 1 | 0;
     }
    }
    if ((i33 | 0) == 98) {
     STACKTOP = i4;
     return i32 | 0;
    } else if ((i33 | 0) == 99) {
     STACKTOP = i4;
     return i32 | 0;
    }
   } else if ((i7 | 0) == 2) {
    i12 = i5 + 12 | 0;
    i9 = i5 + 4 | 0;
    i11 = i16 | 0;
    i10 = i17 | 0;
    i6 = i16 + 16 | 0;
    i8 = i15 | 0;
    i25 = i15 + 8 | 0;
    i28 = i15 + 16 | 0;
    i27 = 0;
    while (1) {
     if (i27 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
      i32 = 0;
      i33 = 96;
      break;
     }
     __ZN7WebCore5XPath11stringValueEPNS_4NodeE(i17, HEAP32[(HEAP32[i9 >> 2] | 0) + (i27 << 2) >> 2] | 0);
     HEAP32[i11 >> 2] = 3;
     i34 = __ZN3WTF10fastMallocEj(24) | 0;
     HEAP32[i34 >> 2] = 1;
     i31 = HEAP32[i10 >> 2] | 0;
     HEAP32[i34 + 4 >> 2] = i31;
     if ((i31 | 0) != 0) {
      i40 = i31 | 0;
      HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
     }
     HEAP8[i34 + 8 | 0] = 1;
     HEAP8[i34 + 9 | 0] = 0;
     HEAP32[i34 + 12 >> 2] = 0;
     HEAP32[i34 + 16 >> 2] = 0;
     HEAP32[i34 + 20 >> 2] = 0;
     HEAP32[i6 >> 2] = i34;
     d41 = +__ZNK7WebCore5XPath5Value8toNumberEv(i16);
     HEAP32[i8 >> 2] = 2;
     HEAPF64[i25 >> 3] = d41;
     HEAP32[i28 >> 2] = 0;
     i34 = __ZNK7WebCore5XPath8EqTestOp7compareERKNS0_5ValueES4_(i1, i2, i15) | 0;
     __ZN7WebCore5XPath5ValueD1Ev(i15);
     __ZN7WebCore5XPath5ValueD1Ev(i16);
     i40 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i40 | 0) != 0) {
       i31 = i40 | 0;
       i35 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
       if ((i35 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i40);
        break;
       } else {
        HEAP32[i31 >> 2] = i35;
        break;
       }
      }
     } while (0);
     if (i34) {
      i32 = 1;
      i33 = 97;
      break;
     } else {
      i27 = i27 + 1 | 0;
     }
    }
    if ((i33 | 0) == 96) {
     STACKTOP = i4;
     return i32 | 0;
    } else if ((i33 | 0) == 97) {
     STACKTOP = i4;
     return i32 | 0;
    }
   } else if ((i7 | 0) == 1) {
    i27 = __ZNK7WebCore5XPath5Value9toBooleanEv(i3) | 0;
    HEAP32[i20 >> 2] = 1;
    HEAP8[i20 + 4 | 0] = i27 & 1;
    HEAP32[i20 + 16 >> 2] = 0;
    i27 = __ZNK7WebCore5XPath8EqTestOp7compareERKNS0_5ValueES4_(i1, i2, i20) | 0;
    __ZN7WebCore5XPath5ValueD1Ev(i20);
    i32 = i27;
    STACKTOP = i4;
    return i32 | 0;
   } else {
    break;
   }
  }
 } while (0);
 i20 = i1 + 20 | 0;
 switch (HEAP32[i20 >> 2] | 0) {
 case 0:
 case 1:
  {
   i1 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i1 | 0) == 1) {
     i33 = 70;
    } else {
     i23 = HEAP32[i14 >> 2] | 0;
     if ((i23 | 0) == 1) {
      i33 = 70;
      break;
     }
     if ((i1 | 0) == 2 | (i23 | 0) == 2) {
      d41 = +__ZNK7WebCore5XPath5Value8toNumberEv(i2);
      i47 = d41 == +__ZNK7WebCore5XPath5Value8toNumberEv(i3);
      break;
     }
     __ZNK7WebCore5XPath5Value8toStringEv(i21, i2);
     __ZNK7WebCore5XPath5Value8toStringEv(i22, i3);
     i23 = i21 | 0;
     i16 = i22 | 0;
     i15 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i23 >> 2] | 0, HEAP32[i16 >> 2] | 0) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i16 = i17 | 0;
       i18 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i17);
        break;
       } else {
        HEAP32[i16 >> 2] = i18;
        break;
       }
      }
     } while (0);
     i17 = HEAP32[i23 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i47 = i15;
      break;
     }
     i7 = i17 | 0;
     i18 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      i47 = i15;
      break;
     } else {
      HEAP32[i7 >> 2] = i18;
      i47 = i15;
      break;
     }
    }
   } while (0);
   if ((i33 | 0) == 70) {
    i33 = __ZNK7WebCore5XPath5Value9toBooleanEv(i2) | 0;
    i47 = i33 ^ (__ZNK7WebCore5XPath5Value9toBooleanEv(i3) | 0) ^ 1;
   }
   if ((HEAP32[i20 >> 2] | 0) == 0) {
    i32 = i47;
    STACKTOP = i4;
    return i32 | 0;
   }
   i32 = i47 ^ 1;
   STACKTOP = i4;
   return i32 | 0;
  }
 case 2:
  {
   i32 = +__ZNK7WebCore5XPath5Value8toNumberEv(i2) > +__ZNK7WebCore5XPath5Value8toNumberEv(i3);
   STACKTOP = i4;
   return i32 | 0;
  }
 case 4:
  {
   i32 = +__ZNK7WebCore5XPath5Value8toNumberEv(i2) >= +__ZNK7WebCore5XPath5Value8toNumberEv(i3);
   STACKTOP = i4;
   return i32 | 0;
  }
 case 3:
  {
   i32 = +__ZNK7WebCore5XPath5Value8toNumberEv(i2) < +__ZNK7WebCore5XPath5Value8toNumberEv(i3);
   STACKTOP = i4;
   return i32 | 0;
  }
 case 5:
  {
   i32 = +__ZNK7WebCore5XPath5Value8toNumberEv(i2) <= +__ZNK7WebCore5XPath5Value8toNumberEv(i3);
   STACKTOP = i4;
   return i32 | 0;
  }
 default:
  {
   i32 = 0;
   STACKTOP = i4;
   return i32 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore5XPath17evaluatePredicateERKNS0_10ExpressionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 48 | 0;
 i6 = i2 + 72 | 0;
 i7 = i2 + 80 | 0;
 i8 = i2 + 88 | 0;
 i9 = i2 + 96 | 0;
 i10 = i2 + 104 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 31](i3, i1);
 if ((HEAP32[i3 >> 2] | 0) != 2) {
  i11 = __ZNK7WebCore5XPath5Value9toBooleanEv(i3) | 0;
  __ZN7WebCore5XPath5ValueD1Ev(i3);
  STACKTOP = i2;
  return i11 | 0;
 }
 HEAP32[i9 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
 __ZN7WebCore5XPath8Function6createERKN3WTF6StringE(i7, i8);
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = i7;
 d12 = +__ZNK7WebCore5XPath5Value8toNumberEv(i3);
 i7 = __ZN3WTF10fastMallocEj(48) | 0;
 i13 = i7;
 __ZN7WebCore5XPath10ExpressionC2Ev(i13);
 HEAP32[i7 >> 2] = H_BASE + 160;
 HEAP32[i7 + 24 >> 2] = 2;
 HEAPF64[i7 + 32 >> 3] = d12;
 HEAP32[i7 + 40 >> 2] = 0;
 i7 = i10 | 0;
 HEAP32[i7 >> 2] = i13;
 __ZN7WebCore5XPath8EqTestOpC2ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i5, 0, i6, i10);
 __ZNK7WebCore5XPath8EqTestOp8evaluateEv(i4, i5);
 i10 = __ZNK7WebCore5XPath5Value9toBooleanEv(i4) | 0;
 __ZN7WebCore5XPath5ValueD1Ev(i4);
 HEAP32[i5 >> 2] = H_BASE + 256;
 i4 = i5 + 12 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i13 = i5 + 4 | 0;
 if ((i6 | 0) != 0) {
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14 + (i6 << 2) | 0;
  i6 = i14;
  while (1) {
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
   }
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i15 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i13 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i5 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 }
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 }
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 }
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i11 = i10;
  __ZN7WebCore5XPath5ValueD1Ev(i3);
  STACKTOP = i2;
  return i11 | 0;
 }
 i8 = i4 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i11 = i10;
  __ZN7WebCore5XPath5ValueD1Ev(i3);
  STACKTOP = i2;
  return i11 | 0;
 } else {
  HEAP32[i8 >> 2] = i9;
  i11 = i10;
  __ZN7WebCore5XPath5ValueD1Ev(i3);
  STACKTOP = i2;
  return i11 | 0;
 }
 return 0;
}
function __ZNK7WebCore5XPath5Union8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 48 | 0;
 i7 = i3 + 56 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 80 | 0;
 i10 = i2 + 12 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i11 = i2 + 4 | 0;
 i2 = HEAP32[HEAP32[i11 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 31](i1, i2);
 if ((HEAP32[i10 >> 2] | 0) >>> 0 <= 1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 31](i4, i10);
 i10 = __ZN7WebCore5XPath5Value17modifiableNodeSetEv(i1) | 0;
 i1 = __ZNK7WebCore5XPath5Value9toNodeSetEv(i4) | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i11 = i10 + 12 | 0;
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  i2 = i10 + 4 | 0;
  i12 = i5 | 0;
  i13 = 0;
  while (1) {
   HEAP32[i6 >> 2] = HEAP32[(HEAP32[i2 >> 2] | 0) + (i13 << 2) >> 2];
   __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i7, i12, i6, i6);
   i13 = i13 + 1 | 0;
   if (i13 >>> 0 >= (HEAP32[i11 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i13 = i1 + 12 | 0;
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  i6 = i1 + 4 | 0;
  i1 = i5 | 0;
  i12 = i9 + 8 | 0;
  i7 = i10 + 4 | 0;
  i2 = i10 + 8 | 0;
  i14 = i7 | 0;
  i15 = 0;
  while (1) {
   HEAP32[i8 >> 2] = HEAP32[(HEAP32[i6 >> 2] | 0) + (i15 << 2) >> 2];
   __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i9, i1, i8, i8);
   if ((HEAP8[i12] & 1) != 0) {
    i16 = HEAP32[i8 >> 2] | 0;
    if ((i16 | 0) != 0) {
     i17 = i16 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    }
    i17 = HEAP32[i11 >> 2] | 0;
    if ((i17 | 0) == (HEAP32[i2 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i17 + 1 | 0);
     HEAP32[(HEAP32[i14 >> 2] | 0) + (HEAP32[i11 >> 2] << 2) >> 2] = i16;
    } else {
     HEAP32[(HEAP32[i14 >> 2] | 0) + (i17 << 2) >> 2] = i16;
    }
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   i15 = i15 + 1 | 0;
   if (i15 >>> 0 >= (HEAP32[i13 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 HEAP8[i10 | 0] = 0;
 i10 = HEAP32[i5 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZN7WebCore5XPath5ValueD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i10);
 __ZN7WebCore5XPath5ValueD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
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
   if ((i13 | 0) == 8) {
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
   } else if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
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
  i13 = __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
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
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
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
   if ((i13 | 0) == 8) {
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
   } else if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
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
  i13 = __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
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
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i1, i2) {
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
function __ZN7WebCore5XPath9NumericOpC2ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 20 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i3;
 i8 = i1 + 16 | 0;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i3 + 16 | 0]) & 1;
 i9 = i1 + 17 | 0;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i3 + 17 | 0]) & 1;
 i10 = i1 + 18 | 0;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i3 + 18 | 0]) & 1;
 i11 = i1 + 4 | 0;
 i12 = i1 + 12 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i1 + 8 | 0;
 if ((i13 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i6);
 } else {
  i6 = HEAP32[i11 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i6 + (i13 << 2) >> 2] = i3;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i4 + 16 | 0]) & 1;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i4 + 17 | 0]) & 1;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i4 + 18 | 0]) & 1;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i7);
 } else {
  i7 = HEAP32[i11 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i7 + (i10 << 2) >> 2] = i4;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5XPath9NumericOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 20 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i3;
 i8 = i1 + 16 | 0;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i3 + 16 | 0]) & 1;
 i9 = i1 + 17 | 0;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i3 + 17 | 0]) & 1;
 i10 = i1 + 18 | 0;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i3 + 18 | 0]) & 1;
 i11 = i1 + 4 | 0;
 i12 = i1 + 12 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i1 + 8 | 0;
 if ((i13 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i6);
 } else {
  i6 = HEAP32[i11 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i6 + (i13 << 2) >> 2] = i3;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i4 + 16 | 0]) & 1;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i4 + 17 | 0]) & 1;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i4 + 18 | 0]) & 1;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i7);
 } else {
  i7 = HEAP32[i11 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i7 + (i10 << 2) >> 2] = i4;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5XPath9LogicalOpC2ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 20 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i3;
 i8 = i1 + 16 | 0;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i3 + 16 | 0]) & 1;
 i9 = i1 + 17 | 0;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i3 + 17 | 0]) & 1;
 i10 = i1 + 18 | 0;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i3 + 18 | 0]) & 1;
 i11 = i1 + 4 | 0;
 i12 = i1 + 12 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i1 + 8 | 0;
 if ((i13 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i6);
 } else {
  i6 = HEAP32[i11 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i6 + (i13 << 2) >> 2] = i3;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i4 + 16 | 0]) & 1;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i4 + 17 | 0]) & 1;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i4 + 18 | 0]) & 1;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i7);
 } else {
  i7 = HEAP32[i11 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i7 + (i10 << 2) >> 2] = i4;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5XPath9LogicalOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 20 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i3;
 i8 = i1 + 16 | 0;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i3 + 16 | 0]) & 1;
 i9 = i1 + 17 | 0;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i3 + 17 | 0]) & 1;
 i10 = i1 + 18 | 0;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i3 + 18 | 0]) & 1;
 i11 = i1 + 4 | 0;
 i12 = i1 + 12 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i1 + 8 | 0;
 if ((i13 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i6);
 } else {
  i6 = HEAP32[i11 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i6 + (i13 << 2) >> 2] = i3;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i4 + 16 | 0]) & 1;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i4 + 17 | 0]) & 1;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i4 + 18 | 0]) & 1;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i7);
 } else {
  i7 = HEAP32[i11 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i7 + (i10 << 2) >> 2] = i4;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5XPath8EqTestOpC2ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 20 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i3;
 i8 = i1 + 16 | 0;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i3 + 16 | 0]) & 1;
 i9 = i1 + 17 | 0;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i3 + 17 | 0]) & 1;
 i10 = i1 + 18 | 0;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i3 + 18 | 0]) & 1;
 i11 = i1 + 4 | 0;
 i12 = i1 + 12 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i1 + 8 | 0;
 if ((i13 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i6);
 } else {
  i6 = HEAP32[i11 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i6 + (i13 << 2) >> 2] = i3;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i4 + 16 | 0]) & 1;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i4 + 17 | 0]) & 1;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i4 + 18 | 0]) & 1;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i7);
 } else {
  i7 = HEAP32[i11 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i7 + (i10 << 2) >> 2] = i4;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5XPath8EqTestOpC1ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 20 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i3;
 i8 = i1 + 16 | 0;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i3 + 16 | 0]) & 1;
 i9 = i1 + 17 | 0;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i3 + 17 | 0]) & 1;
 i10 = i1 + 18 | 0;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i3 + 18 | 0]) & 1;
 i11 = i1 + 4 | 0;
 i12 = i1 + 12 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i1 + 8 | 0;
 if ((i13 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i6);
 } else {
  i6 = HEAP32[i11 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i6 + (i13 << 2) >> 2] = i3;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = i4;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i4 + 16 | 0]) & 1;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i4 + 17 | 0]) & 1;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i4 + 18 | 0]) & 1;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i7);
 } else {
  i7 = HEAP32[i11 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i7 + (i10 << 2) >> 2] = i4;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5XPath5UnionC2ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEES7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 192;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i1 + 16 | 0;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i2 + 16 | 0]) & 1;
 i9 = i1 + 17 | 0;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i2 + 17 | 0]) & 1;
 i10 = i1 + 18 | 0;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i2 + 18 | 0]) & 1;
 i11 = i1 + 4 | 0;
 i12 = i1 + 12 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i1 + 8 | 0;
 if ((i13 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i5);
 } else {
  i5 = HEAP32[i11 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i5 + (i13 << 2) >> 2] = i2;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i3 + 16 | 0]) & 1;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i3 + 17 | 0]) & 1;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i3 + 18 | 0]) & 1;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i6);
 } else {
  i6 = HEAP32[i11 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i6 + (i10 << 2) >> 2] = i3;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5XPath5UnionC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEES7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 192;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i1 + 16 | 0;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i2 + 16 | 0]) & 1;
 i9 = i1 + 17 | 0;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i2 + 17 | 0]) & 1;
 i10 = i1 + 18 | 0;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i2 + 18 | 0]) & 1;
 i11 = i1 + 4 | 0;
 i12 = i1 + 12 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i1 + 8 | 0;
 if ((i13 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i5);
 } else {
  i5 = HEAP32[i11 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i5 + (i13 << 2) >> 2] = i2;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 }
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP8[i8] = (HEAP8[i8] | HEAP8[i3 + 16 | 0]) & 1;
 HEAP8[i9] = (HEAP8[i9] | HEAP8[i3 + 17 | 0]) & 1;
 HEAP8[i10] = (HEAP8[i10] | HEAP8[i3 + 18 | 0]) & 1;
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == (HEAP32[i14 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i11, i6);
 } else {
  i6 = HEAP32[i11 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i6 + (i10 << 2) >> 2] = i3;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore5XPath9NumericOp8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, d11 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i2 + 4 | 0;
 i8 = HEAP32[HEAP32[i7 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i4, i8);
 d9 = +__ZNK7WebCore5XPath5Value8toNumberEv(i4);
 __ZN7WebCore5XPath5ValueD1Ev(i4);
 if ((HEAP32[i6 >> 2] | 0) >>> 0 <= 1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 31](i5, i6);
 d10 = +__ZNK7WebCore5XPath5Value8toNumberEv(i5);
 __ZN7WebCore5XPath5ValueD1Ev(i5);
 switch (HEAP32[i2 + 20 >> 2] | 0) {
 case 1:
  {
   HEAP32[i1 >> 2] = 2;
   HEAPF64[i1 + 8 >> 3] = d9 - d10;
   HEAP32[i1 + 16 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 case 2:
  {
   HEAP32[i1 >> 2] = 2;
   HEAPF64[i1 + 8 >> 3] = d9 * d10;
   HEAP32[i1 + 16 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 case 3:
  {
   HEAP32[i1 >> 2] = 2;
   HEAPF64[i1 + 8 >> 3] = d9 / d10;
   HEAP32[i1 + 16 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 case 4:
  {
   d11 = +_fmod(+d9, +d10);
   HEAP32[i1 >> 2] = 2;
   HEAPF64[i1 + 8 >> 3] = d11;
   HEAP32[i1 + 16 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 case 0:
  {
   HEAP32[i1 >> 2] = 2;
   HEAPF64[i1 + 8 >> 3] = d9 + d10;
   HEAP32[i1 + 16 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 default:
  {
   HEAP32[i1 >> 2] = 2;
   HEAPF64[i1 + 8 >> 3] = +0;
   HEAP32[i1 + 16 >> 2] = 0;
   STACKTOP = i3;
   return;
  }
 }
}
function __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 << 2) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (i2 - i7 >> 2 << 2) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i10 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i15 = i11 + (i12 << 2) | 0;
   HEAP32[i15 >> 2] = i14;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = i16 + 1 | 0;
   HEAP32[i3 >> 2] = i17;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i10 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i15 = i11 + (i12 << 2) | 0;
 HEAP32[i15 >> 2] = i14;
 i16 = HEAP32[i3 >> 2] | 0;
 i17 = i16 + 1 | 0;
 HEAP32[i3 >> 2] = i17;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_v + 2;
}
function __ZN7WebCore5XPath5ValueD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 + 20 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i2 + 12 | 0;
 if ((i1 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i1 << 2) | 0;
  i1 = i5;
  while (1) {
   i5 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 8 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i1 = i1 + 4 | 0;
   if ((i1 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath8NegativeC2ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 96;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 i6 = i1 + 16 | 0;
 HEAP8[i6] = (HEAP8[i6] | HEAP8[i2 + 16 | 0]) & 1;
 i6 = i1 + 17 | 0;
 HEAP8[i6] = (HEAP8[i6] | HEAP8[i2 + 17 | 0]) & 1;
 i6 = i1 + 18 | 0;
 HEAP8[i6] = (HEAP8[i6] | HEAP8[i2 + 18 | 0]) & 1;
 i6 = i1 + 4 | 0;
 i7 = i1 + 12 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i6, i4);
 } else {
  i4 = HEAP32[i6 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 + (i8 << 2) >> 2] = i2;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore5XPath8NegativeC1ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 96;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 i6 = i1 + 16 | 0;
 HEAP8[i6] = (HEAP8[i6] | HEAP8[i2 + 16 | 0]) & 1;
 i6 = i1 + 17 | 0;
 HEAP8[i6] = (HEAP8[i6] | HEAP8[i2 + 17 | 0]) & 1;
 i6 = i1 + 18 | 0;
 HEAP8[i6] = (HEAP8[i6] | HEAP8[i2 + 18 | 0]) & 1;
 i6 = i1 + 4 | 0;
 i7 = i1 + 12 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
  __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_(i6, i4);
 } else {
  i4 = HEAP32[i6 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 + (i8 << 2) >> 2] = i2;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i7 << 2) | 0;
 if (i2 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
 HEAP32[i3 >> 2] = i8 >>> 2;
 i2 = __ZN3WTF10fastMallocEj(i8) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i7 | 0) != 0) {
  i7 = i5;
  i8 = i2;
  while (1) {
   i2 = i7 | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i8 >> 2] = i9;
   i9 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i9 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
   }
   i9 = i7 + 4 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i7 = i9;
    i8 = i8 + 4 | 0;
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
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZNK7WebCore5XPath9LogicalOp8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i2 + 4 | 0;
 i8 = HEAP32[HEAP32[i7 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i4, i8);
 i8 = __ZNK7WebCore5XPath5Value9toBooleanEv(i4) | 0;
 __ZN7WebCore5XPath5ValueD1Ev(i4);
 if (!(i8 ^ (HEAP32[i2 + 20 >> 2] | 0) != 0)) {
  HEAP32[i1 >> 2] = 1;
  HEAP8[i1 + 4 | 0] = i8 & 1;
  HEAP32[i1 + 16 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i6 >> 2] | 0) >>> 0 <= 1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 31](i5, i6);
 i6 = __ZNK7WebCore5XPath5Value9toBooleanEv(i5) | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP8[i1 + 4 | 0] = i6 & 1;
 HEAP32[i1 + 16 >> 2] = 0;
 __ZN7WebCore5XPath5ValueD1Ev(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore5XPath8EqTestOp8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i2 + 4 | 0;
 i8 = HEAP32[HEAP32[i7 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i4, i8);
 if ((HEAP32[i6 >> 2] | 0) >>> 0 > 1 >>> 0) {
  i6 = HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 31](i5, i6);
  i6 = __ZNK7WebCore5XPath8EqTestOp7compareERKNS0_5ValueES4_(i2, i4, i5) | 0;
  HEAP32[i1 >> 2] = 1;
  HEAP8[i1 + 4 | 0] = i6 & 1;
  HEAP32[i1 + 16 >> 2] = 0;
  __ZN7WebCore5XPath5ValueD1Ev(i5);
  __ZN7WebCore5XPath5ValueD1Ev(i4);
  STACKTOP = i3;
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore5XPath16StringExpressionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 224;
 __ZN7WebCore5XPath5ValueD1Ev(i1 + 24 | 0);
 HEAP32[i2 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath6NumberD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 160;
 __ZN7WebCore5XPath5ValueD1Ev(i1 + 24 | 0);
 HEAP32[i2 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore5XPath16StringExpressionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 224;
 __ZN7WebCore5XPath5ValueD1Ev(i1 + 24 | 0);
 HEAP32[i2 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
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
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath6NumberD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 160;
 __ZN7WebCore5XPath5ValueD1Ev(i1 + 24 | 0);
 HEAP32[i2 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
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
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath10ExpressionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath9NumericOpD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath9LogicalOpD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath8NegativeD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath8EqTestOpD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath5UnionD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1;
  __ZN3WTF8fastFreeEPv(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore5XPath10ExpressionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
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
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath9NumericOpD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
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
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath9LogicalOpD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
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
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath8NegativeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
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
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath8EqTestOpD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
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
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore5XPath5UnionD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
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
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore5XPath8Negative8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else {
  i5 = HEAP32[HEAP32[i2 + 4 >> 2] >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i4, i5);
  d6 = +-0 - +__ZNK7WebCore5XPath5Value8toNumberEv(i4);
  HEAP32[i1 >> 2] = 2;
  HEAPF64[i1 + 8 >> 3] = d6;
  HEAP32[i1 + 16 >> 2] = 0;
  __ZN7WebCore5XPath5ValueD1Ev(i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore5XPath16StringExpressionC2EON3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 224;
 HEAP32[i1 + 24 >> 2] = 3;
 i3 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i3 >> 2] = 1;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i3 + 4 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 HEAP8[i3 + 8 | 0] = 1;
 HEAP8[i3 + 9 | 0] = 0;
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i3 + 16 >> 2] = 0;
 HEAP32[i3 + 20 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = i3;
 return;
}
function __ZN7WebCore5XPath16StringExpressionC1EON3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 224;
 HEAP32[i1 + 24 >> 2] = 3;
 i3 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i3 >> 2] = 1;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i3 + 4 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 HEAP8[i3 + 8 | 0] = 1;
 HEAP8[i3 + 9 | 0] = 0;
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i3 + 16 >> 2] = 0;
 HEAP32[i3 + 20 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = i3;
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
function __ZNK7WebCore5XPath16StringExpression8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i2 + 28 | 0] & 1;
 HEAPF64[i1 + 8 >> 3] = +HEAPF64[i2 + 32 >> 3];
 i3 = HEAP32[i2 + 40 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore5XPath6Number8evaluateEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i2 + 28 | 0] & 1;
 HEAPF64[i1 + 8 >> 3] = +HEAPF64[i2 + 32 >> 3];
 i3 = HEAP32[i2 + 40 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore5XPath35predicateIsContextPositionSensitiveERKNS0_10ExpressionE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 17 | 0] & 1) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 15](i1) | 0) == 2;
 return i2 | 0;
}
function __ZN7WebCore5XPath6NumberC2Ed(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 160;
 HEAP32[i1 + 24 >> 2] = 2;
 HEAPF64[i1 + 32 >> 3] = d2;
 HEAP32[i1 + 40 >> 2] = 0;
 return;
}
function __ZN7WebCore5XPath6NumberC1Ed(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore5XPath10ExpressionC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 160;
 HEAP32[i1 + 24 >> 2] = 2;
 HEAPF64[i1 + 32 >> 3] = d2;
 HEAP32[i1 + 40 >> 2] = 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function dynCall_vid(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vid[i1 & 3](i2 | 0, +d3);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore5XPath16StringExpression10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 3;
}
function __ZNK7WebCore5XPath9NumericOp10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore5XPath9LogicalOp10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5XPath8Negative10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore5XPath8EqTestOp10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5XPath6Number10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 2;
}
function __ZNK7WebCore5XPath5Union10resultTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vid = [b0,b0,__ZN7WebCore5XPath6NumberC2Ed,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore5XPath16StringExpressionD1Ev,b1,__ZN7WebCore5XPath9NumericOpD0Ev,b1,__ZN7WebCore5XPath10ExpressionD1Ev,b1,__ZN7WebCore5XPath16StringExpressionD0Ev,b1,__ZN7WebCore5XPath10ExpressionD0Ev,b1,__ZN7WebCore5XPath9LogicalOpD1Ev,b1,__ZN7WebCore5XPath8NegativeD1Ev,b1,__ZN7WebCore5XPath5UnionD0Ev,b1,__ZN7WebCore5XPath9NumericOpD1Ev,b1,__ZN7WebCore5XPath8EqTestOpD1Ev,b1,__ZN7WebCore5XPath6NumberD0Ev,b1,__ZN7WebCore5XPath8NegativeD0Ev,b1,__ZN7WebCore5XPath9LogicalOpD0Ev,b1,__ZN7WebCore5XPath5UnionD1Ev
  ,b1,__ZN7WebCore5XPath8EqTestOpD0Ev,b1,__ZN7WebCore5XPath6NumberD1Ev,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZNK7WebCore5XPath9LogicalOp8evaluateEv,b2,__ZN7WebCore5XPath8NegativeC2ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEE,b2,__ZNK7WebCore5XPath8EqTestOp8evaluateEv,b2,__ZNK7WebCore5XPath9NumericOp8evaluateEv,b2,__ZNK7WebCore5XPath6Number8evaluateEv,b2,__ZN7WebCore5XPath16StringExpressionC2EON3WTF6StringE,b2,__ZNK7WebCore5XPath16StringExpression8evaluateEv,b2,__ZNK7WebCore5XPath5Union8evaluateEv,b2,__ZNK7WebCore5XPath8Negative8evaluateEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore5XPath8EqTestOp10resultTypeEv,b3,__ZNK7WebCore5XPath5Union10resultTypeEv,b3,__ZNK7WebCore5XPath16StringExpression10resultTypeEv,b3,__ZNK7WebCore5XPath9NumericOp10resultTypeEv,b3,__ZNK7WebCore5XPath9LogicalOp10resultTypeEv,b3,__ZNK7WebCore5XPath8Negative10resultTypeEv,b3,__ZNK7WebCore5XPath6Number10resultTypeEv,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore5XPath5UnionC2ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEES7_,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore5XPath9NumericOpC2ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_,b7,__ZN7WebCore5XPath8EqTestOpC2ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_,b7,__ZN7WebCore5XPath9LogicalOpC2ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vid: dynCall_vid, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vid": invoke_vid, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_fmod": _fmod, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vid = Module["dynCall_vid"] = asm["dynCall_vid"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore5XPath8EqTestOp7compareERKNS0_5ValueES4_","__ZN7WebCore5XPath10ExpressionD1Ev","__ZN7WebCore5XPath16StringExpressionD1Ev","__ZN7WebCore5XPath17evaluatePredicateERKNS0_10ExpressionE","__ZNK7WebCore5XPath9LogicalOp8evaluateEv","__ZNK7WebCore5XPath16StringExpression10resultTypeEv","__ZNK7WebCore5XPath9NumericOp10resultTypeEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore5XPath8NegativeC2ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEE","_memset","__ZNK7WebCore5XPath8EqTestOp10resultTypeEv","__ZN7WebCore5XPath9LogicalOpC2ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_","__ZN7WebCore5XPath16StringExpressionD0Ev","__ZN7WebCore5XPath10ExpressionD0Ev","__ZNK7WebCore5XPath5Union10resultTypeEv","__ZNK7WebCore5XPath8Negative8evaluateEv","__ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS8_EEvOT_","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore5XPath10ExpressionENS1_14default_deleteIS5_EEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_","__ZN7WebCore5XPath9NumericOpD0Ev","__ZN3WTF6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore5XPath8EqTestOp8evaluateEv","__ZN7WebCore5XPath9NumericOpC2ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_","__ZN7WebCore5XPath8EqTestOpC2ENS1_6OpcodeENSt3__110unique_ptrINS0_10ExpressionENS3_14default_deleteIS5_EEEES8_","__ZN7WebCore5XPath5UnionD0Ev","__ZN7WebCore5XPath8NegativeD1Ev","__ZNK7WebCore5XPath5Union8evaluateEv","__ZNK7WebCore5XPath9LogicalOp10resultTypeEv","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore5XPath35predicateIsContextPositionSensitiveERKNS0_10ExpressionE","__ZN7WebCore5XPath9NumericOpD1Ev","__ZN7WebCore5XPath6NumberC2Ed","__ZN7WebCore5XPath5ValueD1Ev","__ZN7WebCore5XPath8EqTestOpD1Ev","__ZNK7WebCore5XPath6Number8evaluateEv","__ZN7WebCore5XPath6NumberD0Ev","__ZNK7WebCore5XPath8Negative10resultTypeEv","__ZN7WebCore5XPath8NegativeD0Ev","_memcpy","__ZN7WebCore5XPath16StringExpressionC2EON3WTF6StringE","__ZNK7WebCore5XPath16StringExpression8evaluateEv","__ZN7WebCore5XPath5UnionC2ENSt3__110unique_ptrINS0_10ExpressionENS2_14default_deleteIS4_EEEES7_","__ZNK7WebCore5XPath6Number10resultTypeEv","__ZN7WebCore5XPath9LogicalOpD0Ev","__ZN7WebCore5XPath5UnionD1Ev","__ZNK7WebCore5XPath9NumericOp8evaluateEv","__ZN7WebCore5XPath8EqTestOpD0Ev","__ZN7WebCore5XPath9LogicalOpD1Ev","__ZN7WebCore5XPath6NumberD1Ev"]

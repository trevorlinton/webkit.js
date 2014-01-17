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
H_BASE = parentModule["_malloc"](432 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 432;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15CSSFontSelectorC1EPNS_8DocumentE;
var __ZN7WebCore15CSSFontSelectorD1Ev;
/* memory initializer */ allocate([45,119,101,98,107,105,116,45,0,0,0,0,0,0,0,0,32,0,0,0,64,0,0,0,128,0,0,0,0,1,0,0,0,2,0,0,0,4,0,0,0,8,0,0,0,16,0,0,16,0,0,0,64,0,0,0,128,0,0,0,0,1,0,0,0,2,0,0,0,4,0,0,0,8,0,0,0,16,0,0,32,0,0,0,16,0,0,0,128,0,0,0,0,1,0,0,0,2,0,0,0,4,0,0,0,8,0,0,0,16,0,0,0,1,0,0,64,0,0,0,32,0,0,0,16,0,0,0,0,2,0,0,0,4,0,0,0,8,0,0,0,16,0,0,128,0,0,0,64,0,0,0,32,0,0,0,16,0,0,0,0,2,0,0,0,4,0,0,0,8,0,0,0,16,0,0,0,4,0,0,0,8,0,0,0,16,0,0,0,1,0,0,128,0,0,0,64,0,0,0,32,0,0,0,16,0,0,0,0,8,0,0,0,16,0,0,0,2,0,0,0,1,0,0,128,0,0,0,64,0,0,0,32,0,0,0,16,0,0,0,0,16,0,0,0,4,0,0,0,2,0,0,0,1,0,0,128,0,0,0,64,0,0,0,32,0,0,0,16,0,0,0,0,8,0,0,0,4,0,0,0,2,0,0,0,1,0,0,128,0,0,0,64,0,0,0,32,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
  var __ZN7WebCore21WebKitFontFamilyNames14standardFamilyE=env.__ZN7WebCore21WebKitFontFamilyNames14standardFamilyE|0;
  var __ZN7WebCore21WebKitFontFamilyNames11serifFamilyE=env.__ZN7WebCore21WebKitFontFamilyNames11serifFamilyE|0;
  var __ZN7WebCore21WebKitFontFamilyNames15sansSerifFamilyE=env.__ZN7WebCore21WebKitFontFamilyNames15sansSerifFamilyE|0;
  var __ZN7WebCore21WebKitFontFamilyNames16pictographFamilyE=env.__ZN7WebCore21WebKitFontFamilyNames16pictographFamilyE|0;
  var __ZN7WebCore21WebKitFontFamilyNames13cursiveFamilyE=env.__ZN7WebCore21WebKitFontFamilyNames13cursiveFamilyE|0;
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
  var __ZN7WebCore21WebKitFontFamilyNames13fantasyFamilyE=env.__ZN7WebCore21WebKitFontFamilyNames13fantasyFamilyE|0;
  var __ZSt7nothrow=env.__ZSt7nothrow|0;
  var __ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE=env.__ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore5TimerINS_15CSSFontSelectorEEE=(H_BASE+312)|0;
  var __ZTVN7WebCore15CSSFontSelectorE=(H_BASE+344)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15CSSFontSelector15addFontFaceRuleEPKNS_17StyleRuleFontFaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 128 | 0;
 i20 = i3 + 144 | 0;
 i21 = i3 + 152 | 0;
 i22 = i3 + 160 | 0;
 i23 = i3 + 168 | 0;
 i24 = i3 + 176 | 0;
 i25 = HEAP32[i2 + 8 >> 2] | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i6, i25, 5);
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i7, i25, 128);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i8, i25, 160);
 i2 = i8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = (i6 | 0) == 0;
 i26 = (i7 | 0) == 0;
 do {
  if (i2 | i26) {
   i27 = 247;
  } else {
   if ((HEAP32[i6 + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
    i27 = 247;
    break;
   }
   if ((HEAP32[i7 + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
    i27 = 247;
    break;
   }
   i28 = (i8 | 0) == 0;
   if (!i28) {
    if ((HEAP32[i8 + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
     i27 = 248;
     break;
    }
   }
   i29 = i6 + 16 | 0;
   if ((HEAP32[i29 >> 2] | 0) == 0) {
    i27 = 247;
    break;
   }
   i30 = i7 + 16 | 0;
   if ((HEAP32[i30 >> 2] | 0) == 0) {
    i27 = 247;
    break;
   }
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i9, i25, 7);
   i31 = i9 | 0;
   i32 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = 0;
   if ((i32 | 0) == 0) {
    i33 = 1;
   } else {
    i31 = HEAP32[i32 + 4 >> 2] | 0;
    do {
     if ((i31 & 516096 | 0) == 0) {
      if ((i31 & 508 | 0) != 472) {
       i34 = 0;
       i35 = 0;
       break;
      }
      i36 = HEAP32[i32 + 8 >> 2] | 0;
      if ((i36 | 0) == 32) {
       i34 = 1;
       i35 = 0;
       break;
      } else if ((i36 | 0) == 22 | (i36 | 0) == 23) {
       i34 = 2;
       i35 = 0;
       break;
      } else {
       i34 = 0;
       i35 = 0;
       break;
      }
     } else {
      i34 = 0;
      i35 = 1;
     }
    } while (0);
    i31 = i32 | 0;
    i36 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
    if ((i36 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i32);
    } else {
     HEAP32[i31 >> 2] = i36;
    }
    if ((i35 | 0) == 0) {
     i33 = i34;
    } else {
     i27 = 247;
     break;
    }
   }
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i10, i25, 9);
   i36 = i10 | 0;
   i31 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = 0;
   if ((i31 | 0) == 0) {
    i37 = i33 | 128;
   } else {
    i36 = HEAP32[i31 + 4 >> 2] | 0;
    L26 : do {
     if ((i36 & 516096 | 0) == 0) {
      if ((i36 & 508 | 0) != 472) {
       i38 = i33;
       i39 = 0;
       break;
      }
      switch (HEAP32[i31 + 8 >> 2] | 0) {
      case 33:
      case 42:
       {
        i38 = i33 | 1024;
        i39 = 0;
        break L26;
        break;
       }
      case 32:
      case 39:
       {
        i38 = i33 | 128;
        i39 = 0;
        break L26;
        break;
       }
      case 44:
       {
        i38 = i33 | 4096;
        i39 = 0;
        break L26;
        break;
       }
      case 43:
       {
        i38 = i33 | 2048;
        i39 = 0;
        break L26;
        break;
       }
      case 41:
       {
        i38 = i33 | 512;
        i39 = 0;
        break L26;
        break;
       }
      case 40:
       {
        i38 = i33 | 256;
        i39 = 0;
        break L26;
        break;
       }
      case 38:
       {
        i38 = i33 | 64;
        i39 = 0;
        break L26;
        break;
       }
      case 37:
       {
        i38 = i33 | 32;
        i39 = 0;
        break L26;
        break;
       }
      case 36:
       {
        i38 = i33 | 16;
        i39 = 0;
        break L26;
        break;
       }
      default:
       {
        i38 = i33;
        i39 = 0;
        break L26;
       }
      }
     } else {
      i38 = i33;
      i39 = 1;
     }
    } while (0);
    i36 = i31 | 0;
    i32 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
    if ((i32 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i31);
    } else {
     HEAP32[i36 >> 2] = i32;
    }
    if ((i39 | 0) == 0) {
     i37 = i38;
    } else {
     i27 = 247;
     break;
    }
   }
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i11, i25, 8);
   i32 = i11 | 0;
   i36 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = 0;
   if ((i36 | 0) == 0) {
    i40 = i37 | 12;
   } else {
    i32 = HEAP32[i36 + 4 >> 2] | 0;
    do {
     if ((i32 & 516096 | 0) == 0) {
      i41 = __ZN3WTF10fastMallocEj(36) | 0;
      __ZN7WebCore12CSSValueListC1ENS_8CSSValue18ValueListSeparatorE(i41, 1);
      i42 = i36 | 0;
      HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
      i43 = i41 + 8 | 0;
      i44 = i41 + 16 | 0;
      i45 = HEAP32[i44 >> 2] | 0;
      if ((i45 | 0) == (HEAP32[i41 + 12 >> 2] | 0)) {
       i46 = i45 + 1 | 0;
       i47 = i46 + (i45 >>> 2) | 0;
       i48 = i47 >>> 0 > 16 >>> 0 ? i47 : 16;
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i43, i48 >>> 0 > i46 >>> 0 ? i48 : i46);
       HEAP32[(HEAP32[i43 >> 2] | 0) + (HEAP32[i44 >> 2] << 2) >> 2] = i36;
       HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
       i46 = i41;
       if ((i41 | 0) == 0) {
        i49 = i46;
        i50 = 1;
       } else {
        i51 = i46;
        i52 = 0;
        i27 = 41;
       }
      } else {
       HEAP32[(HEAP32[i43 >> 2] | 0) + (i45 << 2) >> 2] = i36;
       HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
       i51 = i41;
       i52 = (i41 | 0) == 0;
       i27 = 41;
      }
      if ((i27 | 0) == 41) {
       i44 = i41;
       HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
       i49 = i51;
       i50 = i52;
      }
      i44 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
      if ((i44 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i36);
      } else {
       HEAP32[i42 >> 2] = i44;
      }
      if (i50) {
       i53 = i49;
       i27 = 50;
       break;
      }
      i44 = i49 | 0;
      i42 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
      if ((i42 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i49);
       i53 = i49;
       i27 = 50;
       break;
      } else {
       HEAP32[i44 >> 2] = i42;
       i53 = i49;
       i27 = 50;
       break;
      }
     } else {
      if ((i32 & 491520) >>> 0 > 221184 >>> 0) {
       i53 = i36;
       i27 = 50;
      } else {
       i54 = i36;
       i55 = i37;
       i56 = 1;
       i27 = 61;
      }
     }
    } while (0);
    if ((i27 | 0) == 50) {
     i36 = HEAP32[i53 + 16 >> 2] | 0;
     L67 : do {
      if ((i36 | 0) == 0) {
       i57 = 1;
       i58 = i37;
      } else {
       i32 = i53 + 8 | 0;
       i31 = 0;
       i42 = i37;
       while (1) {
        if (i36 >>> 0 <= i31 >>> 0) {
         break;
        }
        i44 = HEAP32[(HEAP32[i32 >> 2] | 0) + (i31 << 2) >> 2] | 0;
        do {
         if ((HEAP32[i44 + 4 >> 2] & 508 | 0) == 472) {
          i41 = HEAP32[i44 + 8 >> 2] | 0;
          if ((i41 | 0) == 32) {
           i59 = i42 | 4;
           break;
          } else if ((i41 | 0) == 25) {
           i59 = i42 | 8;
           break;
          } else {
           i59 = i42;
           break;
          }
         } else {
          i59 = i42;
         }
        } while (0);
        i44 = i31 + 1 | 0;
        if (i44 >>> 0 < i36 >>> 0) {
         i31 = i44;
         i42 = i59;
        } else {
         i57 = 0;
         i58 = i59;
         break L67;
        }
       }
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     } while (0);
     if ((i53 | 0) == 0) {
      i60 = i58;
      i61 = i57;
     } else {
      i54 = i53;
      i55 = i58;
      i56 = i57;
      i27 = 61;
     }
    }
    do {
     if ((i27 | 0) == 61) {
      i36 = i54 | 0;
      i42 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
      if ((i42 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i54);
       i60 = i55;
       i61 = i56;
       break;
      } else {
       HEAP32[i36 >> 2] = i42;
       i60 = i55;
       i61 = i56;
       break;
      }
     }
    } while (0);
    if ((i61 | 0) == 0) {
     i40 = i60;
    } else {
     i27 = 247;
     break;
    }
   }
   i42 = i12 | 0;
   HEAP32[i42 >> 2] = 0;
   i36 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i36 | 0) > 0) {
     i31 = i7 + 8 | 0;
     i32 = i1 + 8 | 0;
     i44 = i13 | 0;
     i41 = i14 | 0;
     i45 = 0;
     i43 = i36;
     while (1) {
      if (i43 >>> 0 <= i45 >>> 0) {
       i27 = 68;
       break;
      }
      i46 = HEAP32[(HEAP32[i31 >> 2] | 0) + (i45 << 2) >> 2] | 0;
      i48 = i46;
      if (__ZNK7WebCore19CSSFontFaceSrcValue16isSVGFontFaceSrcEv(i48) | 0) {
       i62 = 1;
      } else {
       i62 = (HEAP32[i46 + 24 >> 2] | 0) != 0;
      }
      do {
       if ((HEAP8[i46 + 16 | 0] & 1) == 0) {
        i47 = HEAP32[i32 >> 2] | 0;
        do {
         if ((i47 | 0) == 0) {
          i63 = 0;
         } else {
          i64 = HEAP32[i47 + 332 >> 2] | 0;
          if ((i64 | 0) == 0) {
           i63 = 0;
           break;
          }
          i63 = HEAP32[i64 + 36 >> 2] | 0;
         }
        } while (0);
        if (!i62) {
         if ((i63 | 0) == 0) {
          i65 = 0;
          break;
         }
         if ((HEAP8[i63 + 184 | 0] & 16) == 0) {
          i65 = 0;
          break;
         }
        }
        if (!(__ZNK7WebCore19CSSFontFaceSrcValue17isSupportedFormatEv(i48) | 0)) {
         i65 = 0;
         break;
        }
        i47 = HEAP32[i32 >> 2] | 0;
        if ((i47 | 0) == 0) {
         i65 = 0;
         break;
        }
        i64 = __ZN7WebCore19CSSFontFaceSrcValue10cachedFontEPNS_8DocumentE(i48, i47) | 0;
        if ((i64 | 0) == 0) {
         i65 = 0;
         break;
        }
        i47 = __ZN3WTF10fastMallocEj(48) | 0;
        i66 = i47;
        __ZN7WebCore17CSSFontFaceSourceC1ERKN3WTF6StringEPNS_10CachedFontE(i66, i46 + 8 | 0, i64);
        if (!i62) {
         i65 = i66;
         break;
        }
        HEAP8[i47 + 44 | 0] = 1;
        i65 = i66;
       } else {
        i66 = __ZN3WTF10fastMallocEj(48) | 0;
        __ZN7WebCore17CSSFontFaceSourceC1ERKN3WTF6StringEPNS_10CachedFontE(i66, i46 + 8 | 0, 0);
        i65 = i66;
       }
      } while (0);
      do {
       if ((HEAP32[i42 >> 2] | 0) == 0) {
        i48 = __ZN3WTF10fastMallocEj(60) | 0;
        HEAP32[i48 >> 2] = 1;
        HEAP32[i48 + 4 >> 2] = i40;
        _memset(i48 + 8 | 0, 0, 49) | 0;
        i66 = HEAP32[i42 >> 2] | 0;
        HEAP32[i42 >> 2] = i48;
        if ((i66 | 0) == 0) {
         break;
        }
        __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i66 | 0);
       }
      } while (0);
      do {
       if ((i65 | 0) != 0) {
        i66 = HEAP32[i46 + 24 >> 2] | 0;
        HEAP32[i44 >> 2] = i66;
        if ((i66 | 0) != 0) {
         i48 = i66 + 8 | 0;
         HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
        }
        __ZN7WebCore17CSSFontFaceSource21setSVGFontFaceElementEN3WTF10PassRefPtrINS_18SVGFontFaceElementEEE(i65, i13);
        i48 = HEAP32[i44 >> 2] | 0;
        do {
         if ((i48 | 0) != 0) {
          i66 = i48 + 8 | 0;
          i47 = i66 | 0;
          i64 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
          HEAP32[i47 >> 2] = i64;
          if ((i64 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
         }
        } while (0);
        i48 = HEAP32[i42 >> 2] | 0;
        HEAP32[i41 >> 2] = i65;
        __ZN7WebCore11CSSFontFace9addSourceEN3WTF10PassOwnPtrINS_17CSSFontFaceSourceEEE(i48, i14);
        i48 = HEAP32[i41 >> 2] | 0;
        if ((i48 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] & 15](i48);
       }
      } while (0);
      i46 = i45 + 1 | 0;
      if ((i46 | 0) >= (i36 | 0)) {
       break;
      }
      i45 = i46;
      i43 = HEAP32[i30 >> 2] | 0;
     }
     if ((i27 | 0) == 68) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i43 = HEAP32[i42 >> 2] | 0;
     if ((i43 | 0) == 0) {
      i27 = 100;
      break;
     }
     if (__ZNK7WebCore11CSSFontFace7isValidEv(i43) | 0) {
      i27 = 100;
     }
    } else {
     i27 = 100;
    }
   } while (0);
   L133 : do {
    if ((i27 | 0) == 100) {
     L135 : do {
      if (!i28) {
       i30 = i8 + 16 | 0;
       i36 = HEAP32[i30 >> 2] | 0;
       if ((i36 | 0) == 0) {
        break;
       }
       i43 = i8 + 8 | 0;
       i45 = i4;
       i41 = i4;
       i44 = i45 + 4 | 0;
       i32 = i4;
       i31 = 0;
       i46 = i36;
       while (1) {
        if (i46 >>> 0 <= i31 >>> 0) {
         break;
        }
        i48 = HEAP32[(HEAP32[i43 >> 2] | 0) + (i31 << 2) >> 2] | 0;
        i66 = HEAP32[i42 >> 2] | 0;
        i64 = HEAP32[i48 + 12 >> 2] | 0;
        i47 = i66 + 8 | 0;
        HEAP32[i41 >> 2] = HEAP32[i48 + 8 >> 2];
        HEAP32[i44 >> 2] = i64;
        i64 = i66 + 16 | 0;
        i48 = HEAP32[i64 >> 2] | 0;
        if ((i48 | 0) == (HEAP32[i66 + 12 >> 2] | 0)) {
         i66 = i48 + 1 | 0;
         i67 = i47 | 0;
         i68 = HEAP32[i67 >> 2] | 0;
         do {
          if (i68 >>> 0 > i45 >>> 0) {
           i27 = 109;
          } else {
           if ((i68 + (i48 << 3) | 0) >>> 0 <= i45 >>> 0) {
            i27 = 109;
            break;
           }
           __ZN3WTF6VectorIN7WebCore11CSSFontFace12UnicodeRangeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i47, i66);
           i69 = HEAP32[i67 >> 2] | 0;
           i70 = i69 + (i32 - i68 >> 3 << 3) | 0;
           i71 = i69;
          }
         } while (0);
         if ((i27 | 0) == 109) {
          i27 = 0;
          __ZN3WTF6VectorIN7WebCore11CSSFontFace12UnicodeRangeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i47, i66);
          i70 = i45;
          i71 = HEAP32[i67 >> 2] | 0;
         }
         i68 = i70;
         i69 = i71 + (HEAP32[i64 >> 2] << 3) | 0;
         i72 = HEAP32[i68 + 4 >> 2] | 0;
         HEAP32[i69 >> 2] = HEAP32[i68 >> 2];
         HEAP32[i69 + 4 >> 2] = i72;
        } else {
         i72 = (HEAP32[i47 >> 2] | 0) + (i48 << 3) | 0;
         i69 = HEAP32[i4 + 4 >> 2] | 0;
         HEAP32[i72 >> 2] = HEAP32[i4 >> 2];
         HEAP32[i72 + 4 >> 2] = i69;
        }
        HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 1;
        i69 = i31 + 1 | 0;
        if (i69 >>> 0 >= i36 >>> 0) {
         break L135;
        }
        i31 = i69;
        i46 = HEAP32[i30 >> 2] | 0;
       }
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     } while (0);
     i30 = HEAP32[i29 >> 2] | 0;
     if ((i30 | 0) <= 0) {
      break;
     }
     i46 = i6 + 8 | 0;
     i31 = i15 | 0;
     i36 = i1 + 12 | 0;
     i45 = i18 | 0;
     i32 = i19 | 0;
     i44 = i19 + 4 | 0;
     i41 = i19 + 8 | 0;
     i43 = i5 | 0;
     i69 = i20 | 0;
     i72 = i23 | 0;
     i68 = i1 + 32 | 0;
     i73 = i24 + 8 | 0;
     i74 = i24 | 0;
     i75 = i21 | 0;
     i76 = i22 | 0;
     i77 = i21;
     i78 = i12;
     i79 = i1 + 164 | 0;
     i80 = i16 | 0;
     i81 = 0;
     i82 = i30;
     L155 : while (1) {
      if (i82 >>> 0 <= i81 >>> 0) {
       i27 = 117;
       break;
      }
      i83 = HEAP32[(HEAP32[i46 >> 2] | 0) + (i81 << 2) >> 2] | 0;
      HEAP32[i31 >> 2] = 0;
      i84 = HEAP32[i83 + 4 >> 2] & 508;
      L158 : do {
       if ((i84 | 0) == 76) {
        __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i16, i83);
        i85 = HEAP32[i80 >> 2] | 0;
        HEAP32[i80 >> 2] = 0;
        i86 = HEAP32[i31 >> 2] | 0;
        HEAP32[i31 >> 2] = i85;
        do {
         if ((i86 | 0) != 0) {
          i85 = i86 | 0;
          i87 = (HEAP32[i85 >> 2] | 0) - 2 | 0;
          if ((i87 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i86);
           break;
          } else {
           HEAP32[i85 >> 2] = i87;
           break;
          }
         }
        } while (0);
        i86 = HEAP32[i80 >> 2] | 0;
        if ((i86 | 0) == 0) {
         i27 = 164;
         break;
        }
        i64 = i86 | 0;
        i48 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
        if ((i48 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i86);
         i27 = 164;
         break;
        } else {
         HEAP32[i64 >> 2] = i48;
         i27 = 164;
         break;
        }
       } else if ((i84 | 0) == 472) {
        switch (HEAP32[i83 + 8 >> 2] | 0) {
        case 65:
         {
          i48 = HEAP32[__ZN7WebCore21WebKitFontFamilyNames11serifFamilyE >> 2] | 0;
          if ((i48 | 0) == 0) {
           HEAP32[i31 >> 2] = i48;
           break L158;
          }
          i64 = i48 | 0;
          HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 2;
          i64 = HEAP32[i31 >> 2] | 0;
          HEAP32[i31 >> 2] = i48;
          if ((i64 | 0) == 0) {
           i88 = i48;
           i27 = 165;
           break L158;
          }
          i48 = i64 | 0;
          i86 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
          if ((i86 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i64);
           i27 = 164;
           break L158;
          } else {
           HEAP32[i48 >> 2] = i86;
           i27 = 164;
           break L158;
          }
          break;
         }
        case 66:
         {
          i86 = HEAP32[__ZN7WebCore21WebKitFontFamilyNames15sansSerifFamilyE >> 2] | 0;
          if ((i86 | 0) == 0) {
           HEAP32[i31 >> 2] = i86;
           break L158;
          }
          i48 = i86 | 0;
          HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 2;
          i48 = HEAP32[i31 >> 2] | 0;
          HEAP32[i31 >> 2] = i86;
          if ((i48 | 0) == 0) {
           i88 = i86;
           i27 = 165;
           break L158;
          }
          i86 = i48 | 0;
          i64 = (HEAP32[i86 >> 2] | 0) - 2 | 0;
          if ((i64 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i48);
           i27 = 164;
           break L158;
          } else {
           HEAP32[i86 >> 2] = i64;
           i27 = 164;
           break L158;
          }
          break;
         }
        case 67:
         {
          i64 = HEAP32[__ZN7WebCore21WebKitFontFamilyNames13cursiveFamilyE >> 2] | 0;
          if ((i64 | 0) == 0) {
           HEAP32[i31 >> 2] = i64;
           break L158;
          }
          i86 = i64 | 0;
          HEAP32[i86 >> 2] = (HEAP32[i86 >> 2] | 0) + 2;
          i86 = HEAP32[i31 >> 2] | 0;
          HEAP32[i31 >> 2] = i64;
          if ((i86 | 0) == 0) {
           i88 = i64;
           i27 = 165;
           break L158;
          }
          i64 = i86 | 0;
          i48 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
          if ((i48 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i86);
           i27 = 164;
           break L158;
          } else {
           HEAP32[i64 >> 2] = i48;
           i27 = 164;
           break L158;
          }
          break;
         }
        case 68:
         {
          i48 = HEAP32[__ZN7WebCore21WebKitFontFamilyNames13fantasyFamilyE >> 2] | 0;
          if ((i48 | 0) == 0) {
           HEAP32[i31 >> 2] = i48;
           break L158;
          }
          i64 = i48 | 0;
          HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 2;
          i64 = HEAP32[i31 >> 2] | 0;
          HEAP32[i31 >> 2] = i48;
          if ((i64 | 0) == 0) {
           i88 = i48;
           i27 = 165;
           break L158;
          }
          i48 = i64 | 0;
          i86 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
          if ((i86 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i64);
           i27 = 164;
           break L158;
          } else {
           HEAP32[i48 >> 2] = i86;
           i27 = 164;
           break L158;
          }
          break;
         }
        case 69:
         {
          i86 = HEAP32[__ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE >> 2] | 0;
          if ((i86 | 0) == 0) {
           HEAP32[i31 >> 2] = i86;
           break L158;
          }
          i48 = i86 | 0;
          HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 2;
          i48 = HEAP32[i31 >> 2] | 0;
          HEAP32[i31 >> 2] = i86;
          if ((i48 | 0) == 0) {
           i88 = i86;
           i27 = 165;
           break L158;
          }
          i86 = i48 | 0;
          i64 = (HEAP32[i86 >> 2] | 0) - 2 | 0;
          if ((i64 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i48);
           i27 = 164;
           break L158;
          } else {
           HEAP32[i86 >> 2] = i64;
           i27 = 164;
           break L158;
          }
          break;
         }
        case 71:
         {
          i64 = HEAP32[__ZN7WebCore21WebKitFontFamilyNames16pictographFamilyE >> 2] | 0;
          if ((i64 | 0) == 0) {
           HEAP32[i31 >> 2] = i64;
           break L158;
          }
          i86 = i64 | 0;
          HEAP32[i86 >> 2] = (HEAP32[i86 >> 2] | 0) + 2;
          i86 = HEAP32[i31 >> 2] | 0;
          HEAP32[i31 >> 2] = i64;
          if ((i86 | 0) == 0) {
           i88 = i64;
           i27 = 165;
           break L158;
          }
          i64 = i86 | 0;
          i48 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
          if ((i48 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i86);
           i27 = 164;
           break L158;
          } else {
           HEAP32[i64 >> 2] = i48;
           i27 = 164;
           break L158;
          }
          break;
         }
        default:
         {
          i27 = 164;
          break L158;
         }
        }
       }
      } while (0);
      if ((i27 | 0) == 164) {
       i27 = 0;
       i83 = HEAP32[i31 >> 2] | 0;
       if ((i83 | 0) != 0) {
        i88 = i83;
        i27 = 165;
       }
      }
      do {
       if ((i27 | 0) == 165) {
        i27 = 0;
        if ((HEAP32[i88 + 4 >> 2] | 0) == 0) {
         i89 = i88;
        } else {
         HEAP32[i17 >> 2] = 0;
         __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E3addINS_17HashMapTranslatorISL_SF_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_SC_SE_SF_SL_SI_EEEEOT0_OT1_(i18, i36, i15, i17);
         i83 = (HEAP32[i45 >> 2] | 0) + 4 | 0;
         do {
          if ((HEAP32[i83 >> 2] | 0) == 0) {
           i84 = __ZN3WTF10fastMallocEj(12) | 0;
           HEAP32[i84 >> 2] = 0;
           HEAP32[i84 + 4 >> 2] = 0;
           HEAP32[i84 + 8 >> 2] = 0;
           i48 = HEAP32[i83 >> 2] | 0;
           HEAP32[i83 >> 2] = i84;
           if ((i48 | 0) != 0) {
            i84 = i48 + 8 | 0;
            i64 = HEAP32[i84 >> 2] | 0;
            i86 = i48 | 0;
            if ((i64 | 0) != 0) {
             i47 = HEAP32[i86 >> 2] | 0;
             i67 = i47 + (i64 << 2) | 0;
             i64 = i47;
             while (1) {
              i47 = HEAP32[i64 >> 2] | 0;
              if ((i47 | 0) != 0) {
               __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i47 | 0);
              }
              i64 = i64 + 4 | 0;
              if ((i64 | 0) == (i67 | 0)) {
               break;
              }
             }
             HEAP32[i84 >> 2] = 0;
            }
            i67 = HEAP32[i86 >> 2] | 0;
            if ((i67 | 0) != 0) {
             HEAP32[i86 >> 2] = 0;
             HEAP32[i48 + 4 >> 2] = 0;
             __ZN3WTF8fastFreeEPv(i67);
            }
            __ZN3WTF8fastFreeEPv(i48);
           }
           HEAP32[i32 >> 2] = 0;
           HEAP32[i44 >> 2] = 0;
           HEAP32[i41 >> 2] = 0;
           i67 = __ZN7WebCore9fontCacheEv() | 0;
           i64 = HEAP32[i31 >> 2] | 0;
           do {
            if ((i64 | 0) == 0) {
             HEAP32[i43 >> 2] = 0;
            } else {
             if ((HEAP32[i64 + 16 >> 2] & 16 | 0) == 0) {
              __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i64);
              break;
             } else {
              HEAP32[i43 >> 2] = i64;
              i47 = i64 | 0;
              HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 2;
              break;
             }
            }
           } while (0);
           HEAP32[i69 >> 2] = HEAP32[i43 >> 2];
           __ZN7WebCore9FontCache17getTraitsInFamilyERKN3WTF12AtomicStringERNS1_6VectorIjLj0ENS1_15CrashOnOverflowEEE(i67, i20, i19);
           i64 = HEAP32[i69 >> 2] | 0;
           do {
            if ((i64 | 0) != 0) {
             i48 = i64 | 0;
             i86 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
             if ((i86 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i64);
              break;
             } else {
              HEAP32[i48 >> 2] = i86;
              break;
             }
            }
           } while (0);
           i64 = HEAP32[i41 >> 2] | 0;
           do {
            if ((i64 | 0) != 0) {
             i67 = __ZN3WTF10fastMallocEj(12) | 0;
             i86 = i67;
             i48 = i67;
             HEAP32[i48 >> 2] = 0;
             i84 = i67 + 4 | 0;
             HEAP32[i84 >> 2] = 0;
             i47 = i67 + 8 | 0;
             HEAP32[i47 >> 2] = 0;
             i67 = 0;
             while (1) {
              if ((HEAP32[i41 >> 2] | 0) >>> 0 <= i67 >>> 0) {
               i27 = 189;
               break L155;
              }
              i66 = HEAP32[(HEAP32[i32 >> 2] | 0) + (i67 << 2) >> 2] | 0;
              i87 = __ZN3WTF10fastMallocEj(60) | 0;
              i85 = i87;
              HEAP32[i87 >> 2] = 1;
              HEAP32[i87 + 4 >> 2] = i66;
              _memset(i87 + 8 | 0, 0, 48) | 0;
              HEAP8[i87 + 56 | 0] = 1;
              HEAP32[i75 >> 2] = i85;
              i87 = __ZN3WTF10fastMallocEj(48) | 0;
              __ZN7WebCore17CSSFontFaceSourceC1ERKN3WTF6StringEPNS_10CachedFontE(i87, i15, 0);
              HEAP32[i76 >> 2] = i87;
              __ZN7WebCore11CSSFontFace9addSourceEN3WTF10PassOwnPtrINS_17CSSFontFaceSourceEEE(i85, i22);
              i85 = HEAP32[i76 >> 2] | 0;
              if ((i85 | 0) != 0) {
               FUNCTION_TABLE_vi[HEAP32[(HEAP32[i85 >> 2] | 0) + 4 >> 2] & 15](i85);
              }
              i85 = HEAP32[i47 >> 2] | 0;
              do {
               if ((i85 | 0) == (HEAP32[i84 >> 2] | 0)) {
                i87 = i85 + 1 | 0;
                i66 = HEAP32[i48 >> 2] | 0;
                do {
                 if (i66 >>> 0 > i21 >>> 0) {
                  i27 = 197;
                 } else {
                  if ((i66 + (i85 << 2) | 0) >>> 0 <= i21 >>> 0) {
                   i27 = 197;
                   break;
                  }
                  __ZN3WTF6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i86, i87);
                  i90 = HEAP32[i48 >> 2] | 0;
                  i91 = i90 + (i77 - i66 >> 2 << 2) | 0;
                  i92 = i90;
                 }
                } while (0);
                if ((i27 | 0) == 197) {
                 i27 = 0;
                 __ZN3WTF6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i86, i87);
                 i91 = i21;
                 i92 = HEAP32[i48 >> 2] | 0;
                }
                i66 = HEAP32[i91 >> 2] | 0;
                HEAP32[i92 + (HEAP32[i47 >> 2] << 2) >> 2] = i66;
                if ((i66 | 0) == 0) {
                 break;
                }
                i90 = i66 | 0;
                HEAP32[i90 >> 2] = (HEAP32[i90 >> 2] | 0) + 1;
               } else {
                i90 = HEAP32[i75 >> 2] | 0;
                HEAP32[(HEAP32[i48 >> 2] | 0) + (i85 << 2) >> 2] = i90;
                if ((i90 | 0) == 0) {
                 break;
                }
                i66 = i90 | 0;
                HEAP32[i66 >> 2] = (HEAP32[i66 >> 2] | 0) + 1;
               }
              } while (0);
              HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
              i85 = HEAP32[i75 >> 2] | 0;
              if ((i85 | 0) != 0) {
               __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i85 | 0);
              }
              i67 = i67 + 1 | 0;
              if (i67 >>> 0 >= i64 >>> 0) {
               break;
              }
             }
             HEAP32[i72 >> 2] = i86;
             __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E3addINS_17HashMapTranslatorISL_SF_EERKS1_NS_10PassOwnPtrISA_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_SC_SE_SF_SL_SI_EEEEOT0_OT1_(i24, i68, i15, i23);
             do {
              if ((HEAP8[i73] & 1) == 0) {
               i67 = (HEAP32[i74 >> 2] | 0) + 4 | 0;
               i47 = HEAP32[i67 >> 2] | 0;
               i48 = HEAP32[i72 >> 2] | 0;
               HEAP32[i72 >> 2] = 0;
               HEAP32[i67 >> 2] = i48;
               if ((i47 | 0) == 0) {
                break;
               }
               i48 = i47 + 8 | 0;
               i67 = HEAP32[i48 >> 2] | 0;
               i84 = i47 | 0;
               if ((i67 | 0) != 0) {
                i85 = HEAP32[i84 >> 2] | 0;
                i66 = i85 + (i67 << 2) | 0;
                i67 = i85;
                while (1) {
                 i85 = HEAP32[i67 >> 2] | 0;
                 if ((i85 | 0) != 0) {
                  __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i85 | 0);
                 }
                 i67 = i67 + 4 | 0;
                 if ((i67 | 0) == (i66 | 0)) {
                  break;
                 }
                }
                HEAP32[i48 >> 2] = 0;
               }
               i66 = HEAP32[i84 >> 2] | 0;
               if ((i66 | 0) != 0) {
                HEAP32[i84 >> 2] = 0;
                HEAP32[i47 + 4 >> 2] = 0;
                __ZN3WTF8fastFreeEPv(i66);
               }
               __ZN3WTF8fastFreeEPv(i47);
              } else {
               i66 = HEAP32[i72 >> 2] | 0;
               if ((i66 | 0) == 0) {
                break;
               }
               i67 = i66 + 8 | 0;
               i85 = HEAP32[i67 >> 2] | 0;
               i90 = i66 | 0;
               if ((i85 | 0) != 0) {
                i93 = HEAP32[i90 >> 2] | 0;
                i94 = i93 + (i85 << 2) | 0;
                i85 = i93;
                while (1) {
                 i93 = HEAP32[i85 >> 2] | 0;
                 if ((i93 | 0) != 0) {
                  __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i93 | 0);
                 }
                 i85 = i85 + 4 | 0;
                 if ((i85 | 0) == (i94 | 0)) {
                  break;
                 }
                }
                HEAP32[i67 >> 2] = 0;
               }
               i94 = HEAP32[i90 >> 2] | 0;
               if ((i94 | 0) != 0) {
                HEAP32[i90 >> 2] = 0;
                HEAP32[i66 + 4 >> 2] = 0;
                __ZN3WTF8fastFreeEPv(i94);
               }
               __ZN3WTF8fastFreeEPv(i66);
              }
             } while (0);
             if ((HEAP32[i41 >> 2] | 0) == 0) {
              break;
             }
             HEAP32[i41 >> 2] = 0;
            }
           } while (0);
           i64 = HEAP32[i32 >> 2] | 0;
           if ((i64 | 0) == 0) {
            break;
           }
           HEAP32[i32 >> 2] = 0;
           HEAP32[i44 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i64);
          }
         } while (0);
         i64 = HEAP32[i83 >> 2] | 0;
         i86 = i64 + 8 | 0;
         i94 = HEAP32[i86 >> 2] | 0;
         do {
          if ((i94 | 0) == (HEAP32[i64 + 4 >> 2] | 0)) {
           i85 = i94 + 1 | 0;
           i47 = i64 | 0;
           i84 = HEAP32[i47 >> 2] | 0;
           do {
            if (i84 >>> 0 > i12 >>> 0) {
             i27 = 234;
            } else {
             if ((i84 + (i94 << 2) | 0) >>> 0 <= i12 >>> 0) {
              i27 = 234;
              break;
             }
             __ZN3WTF6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i64, i85);
             i48 = HEAP32[i47 >> 2] | 0;
             i95 = i48 + (i78 - i84 >> 2 << 2) | 0;
             i96 = i48;
            }
           } while (0);
           if ((i27 | 0) == 234) {
            i27 = 0;
            __ZN3WTF6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i64, i85);
            i95 = i12;
            i96 = HEAP32[i47 >> 2] | 0;
           }
           i84 = HEAP32[i95 >> 2] | 0;
           HEAP32[i96 + (HEAP32[i86 >> 2] << 2) >> 2] = i84;
           if ((i84 | 0) == 0) {
            break;
           }
           i48 = i84 | 0;
           HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
          } else {
           i48 = HEAP32[i42 >> 2] | 0;
           HEAP32[(HEAP32[i64 >> 2] | 0) + (i94 << 2) >> 2] = i48;
           if ((i48 | 0) == 0) {
            break;
           }
           i84 = i48 | 0;
           HEAP32[i84 >> 2] = (HEAP32[i84 >> 2] | 0) + 1;
          }
         } while (0);
         HEAP32[i86 >> 2] = (HEAP32[i86 >> 2] | 0) + 1;
         HEAP32[i79 >> 2] = (HEAP32[i79 >> 2] | 0) + 1;
         i89 = HEAP32[i31 >> 2] | 0;
        }
        if ((i89 | 0) == 0) {
         break;
        }
        i94 = i89 | 0;
        i64 = (HEAP32[i94 >> 2] | 0) - 2 | 0;
        if ((i64 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i89);
         break;
        } else {
         HEAP32[i94 >> 2] = i64;
         break;
        }
       }
      } while (0);
      i64 = i81 + 1 | 0;
      if ((i64 | 0) >= (i30 | 0)) {
       break L133;
      }
      i81 = i64;
      i82 = HEAP32[i29 >> 2] | 0;
     }
     if ((i27 | 0) == 117) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i27 | 0) == 189) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   i29 = HEAP32[i42 >> 2] | 0;
   if ((i29 | 0) == 0) {
    i27 = 247;
    break;
   }
   __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i29 | 0);
   i27 = 247;
  }
 } while (0);
 if ((i27 | 0) == 247) {
  if ((i8 | 0) != 0) {
   i27 = 248;
  }
 }
 do {
  if ((i27 | 0) == 248) {
   i89 = i8 | 0;
   i96 = (HEAP32[i89 >> 2] | 0) - 1 | 0;
   if ((i96 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i8);
    break;
   } else {
    HEAP32[i89 >> 2] = i96;
    break;
   }
  }
 } while (0);
 do {
  if (!i26) {
   i8 = i7 | 0;
   i27 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i27 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i27;
    break;
   }
  }
 } while (0);
 if (i2) {
  STACKTOP = i3;
  return;
 }
 i2 = i6 | 0;
 i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15CSSFontSelector11getFontFaceERKNS_15FontDescriptionERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 216 | 0;
 i14 = i4 + 224 | 0;
 i15 = i4 + 232 | 0;
 i16 = i3 | 0;
 i17 = HEAP32[i1 + 20 >> 2] | 0;
 i18 = HEAP32[i1 + 12 >> 2] | 0;
 i19 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i19 >> 2] | 0) | 0;
 if ((i18 | 0) == 0) {
  i20 = 0;
  STACKTOP = i4;
  return i20 | 0;
 }
 i21 = (i3 >>> 23) + ~i3 | 0;
 i22 = i21 << 12 ^ i21;
 i21 = i22 >>> 7 ^ i22;
 i22 = i21 << 2 ^ i21;
 i21 = i22 >>> 20 ^ i22 | 1;
 i22 = i3;
 i3 = 0;
 while (1) {
  i23 = i22 & i17;
  i24 = i18 + (i23 << 3) | 0;
  i25 = HEAP32[i24 >> 2] | 0;
  i26 = i25;
  if ((i26 | 0) == 0) {
   i20 = 0;
   i27 = 121;
   break;
  } else if ((i26 | 0) != (-1 | 0)) {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i25, HEAP32[i19 >> 2] | 0) | 0) {
    break;
   }
  }
  i25 = (i3 | 0) == 0 ? i21 : i3;
  i22 = i25 + i23 | 0;
  i3 = i25;
 }
 if ((i27 | 0) == 121) {
  STACKTOP = i4;
  return i20 | 0;
 }
 if ((i24 | 0) == 0) {
  i20 = 0;
  STACKTOP = i4;
  return i20 | 0;
 }
 i24 = HEAP32[i18 + (i23 << 3) + 4 >> 2] | 0;
 if ((i24 | 0) == 0) {
  i20 = 0;
  STACKTOP = i4;
  return i20 | 0;
 }
 i23 = i24 + 8 | 0;
 if ((HEAP32[i23 >> 2] | 0) == 0) {
  i20 = 0;
  STACKTOP = i4;
  return i20 | 0;
 }
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENSB_IS8_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENS_15CaseFoldingHashENS4_IS1_SF_SJ_NSB_IS1_EENSB_ISF_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SJ_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_SG_SI_SJ_SN_SK_EEEEOT0_OT1_(i7, i1 + 52 | 0, i16, i6);
 i6 = (HEAP32[i7 >> 2] | 0) + 4 | 0;
 i7 = i6 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i16 = __ZN3WTF10fastMallocEj(20) | 0;
  _memset(i16 | 0, 0, 20) | 0;
  HEAP32[i8 >> 2] = i16;
  __ZN3WTF6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEEaSERKNS_10PassOwnPtrISB_EE(i6, i8) | 0;
  __ZN3WTF10PassOwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEED2Ev(i8);
 }
 i8 = __ZNK7WebCore15FontDescription10traitsMaskEv(i2) | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEjDnEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_(i11, i2 | 0, i9, i10);
 i10 = (HEAP32[i11 >> 2] | 0) + 4 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   i11 = __ZN3WTF10fastMallocEj(44) | 0;
   __ZN7WebCore20CSSSegmentedFontFaceC1EPNS_15CSSFontSelectorE(i11, i1);
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i11;
   do {
    if ((i9 | 0) != 0) {
     i11 = i9 | 0;
     i2 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) == 0) {
      __ZN7WebCore20CSSSegmentedFontFaceD1Ev(i9);
      __ZN3WTF8fastFreeEPv(i9);
      break;
     } else {
      HEAP32[i11 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i9 = i12 + 12 | 0;
   i2 = i12 | 0;
   HEAP32[i2 >> 2] = i9;
   i11 = i12 + 4 | 0;
   HEAP32[i11 >> 2] = 32;
   i7 = i12 + 8 | 0;
   HEAP32[i7 >> 2] = 0;
   i6 = HEAP32[i23 >> 2] | 0;
   i16 = i6 - 1 | 0;
   L32 : do {
    if ((i16 | 0) > -1) {
     i18 = i24 | 0;
     i3 = (i8 & 1 | 0) == 0;
     i22 = (i8 & 4 | 0) == 0;
     i21 = (i8 & 8 | 0) == 0;
     i17 = i13;
     i25 = i16;
     i26 = i6;
     L34 : while (1) {
      if (i26 >>> 0 <= i25 >>> 0) {
       i27 = 19;
       break;
      }
      i28 = HEAP32[(HEAP32[i18 >> 2] | 0) + (i25 << 2) >> 2] | 0;
      HEAP32[i13 >> 2] = i28;
      i29 = HEAP32[i28 + 4 >> 2] | 0;
      if (i3) {
       i27 = 24;
      } else {
       if ((i29 & 1 | 0) != 0) {
        i27 = 24;
       }
      }
      do {
       if ((i27 | 0) == 24) {
        i27 = 0;
        if (!i22) {
         if ((i29 & 4 | 0) == 0) {
          break;
         }
        }
        if (!(i21 | (__ZNK7WebCore11CSSFontFace20hasSVGFontFaceSourceEv(i28) | 0) ^ 1)) {
         if ((i29 & 8 | 0) == 0) {
          break;
         }
        }
        i30 = HEAP32[i7 >> 2] | 0;
        if ((i30 | 0) != (HEAP32[i11 >> 2] | 0)) {
         HEAP32[(HEAP32[i2 >> 2] | 0) + (i30 << 2) >> 2] = HEAP32[i13 >> 2];
         HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
         break;
        }
        i31 = i30 + 1 | 0;
        i32 = HEAP32[i2 >> 2] | 0;
        do {
         if (i32 >>> 0 > i13 >>> 0) {
          i27 = 32;
         } else {
          if ((i32 + (i30 << 2) | 0) >>> 0 <= i13 >>> 0) {
           i27 = 32;
           break;
          }
          i33 = i17 - i32 >> 2;
          i34 = i31 + (i30 >>> 2) | 0;
          i35 = i34 >>> 0 > 16 >>> 0 ? i34 : 16;
          i34 = i35 >>> 0 > i31 >>> 0 ? i35 : i31;
          do {
           if (i30 >>> 0 < i34 >>> 0) {
            if (i34 >>> 0 > 32 >>> 0) {
             if (i34 >>> 0 > 1073741823 >>> 0) {
              i27 = 46;
              break L34;
             }
             i35 = __ZN3WTF18fastMallocGoodSizeEj(i34 << 2) | 0;
             HEAP32[i11 >> 2] = i35 >>> 2;
             i36 = __ZN3WTF10fastMallocEj(i35) | 0;
             HEAP32[i2 >> 2] = i36;
             i37 = i36;
            } else {
             HEAP32[i2 >> 2] = i9;
             HEAP32[i11 >> 2] = 32;
             i37 = i9;
            }
            i36 = i32;
            _memcpy(i37 | 0, i36 | 0, i30 << 2) | 0;
            if ((i9 | 0) == (i32 | 0) | (i32 | 0) == 0) {
             break;
            }
            if ((HEAP32[i2 >> 2] | 0) == (i32 | 0)) {
             HEAP32[i2 >> 2] = 0;
             HEAP32[i11 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i36);
           }
          } while (0);
          i34 = HEAP32[i2 >> 2] | 0;
          i38 = i34 + (i33 << 2) | 0;
          i39 = i34;
         }
        } while (0);
        if ((i27 | 0) == 32) {
         i27 = 0;
         i34 = i31 + (i30 >>> 2) | 0;
         i36 = i34 >>> 0 > 16 >>> 0 ? i34 : 16;
         i34 = i36 >>> 0 > i31 >>> 0 ? i36 : i31;
         do {
          if (i30 >>> 0 < i34 >>> 0) {
           if (i34 >>> 0 > 32 >>> 0) {
            if (i34 >>> 0 > 1073741823 >>> 0) {
             i27 = 35;
             break L34;
            }
            i36 = __ZN3WTF18fastMallocGoodSizeEj(i34 << 2) | 0;
            HEAP32[i11 >> 2] = i36 >>> 2;
            i35 = __ZN3WTF10fastMallocEj(i36) | 0;
            HEAP32[i2 >> 2] = i35;
            i40 = i35;
           } else {
            HEAP32[i2 >> 2] = i9;
            HEAP32[i11 >> 2] = 32;
            i40 = i9;
           }
           i35 = i32;
           _memcpy(i40 | 0, i35 | 0, i30 << 2) | 0;
           if ((i9 | 0) == (i32 | 0) | (i32 | 0) == 0) {
            break;
           }
           if ((HEAP32[i2 >> 2] | 0) == (i32 | 0)) {
            HEAP32[i2 >> 2] = 0;
            HEAP32[i11 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i35);
          }
         } while (0);
         i38 = i13;
         i39 = HEAP32[i2 >> 2] | 0;
        }
        HEAP32[i39 + (HEAP32[i7 >> 2] << 2) >> 2] = HEAP32[i38 >> 2];
        HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
       }
      } while (0);
      i29 = i25 - 1 | 0;
      if ((i29 | 0) <= -1) {
       break L32;
      }
      i25 = i29;
      i26 = HEAP32[i23 >> 2] | 0;
     }
     if ((i27 | 0) == 19) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     } else if ((i27 | 0) == 35) {
      _WTFCrash();
      return 0;
     } else if ((i27 | 0) == 46) {
      _WTFCrash();
      return 0;
     }
    }
   } while (0);
   i6 = HEAP32[i1 + 40 >> 2] | 0;
   i16 = HEAP32[i1 + 32 >> 2] | 0;
   i26 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i19 >> 2] | 0) | 0;
   L87 : do {
    if ((i16 | 0) != 0) {
     i25 = (i26 >>> 23) + ~i26 | 0;
     i17 = i25 << 12 ^ i25;
     i25 = i17 >>> 7 ^ i17;
     i17 = i25 << 2 ^ i25;
     i25 = i17 >>> 20 ^ i17 | 1;
     i17 = i26;
     i21 = 0;
     while (1) {
      i41 = i17 & i6;
      i42 = i16 + (i41 << 3) | 0;
      i22 = HEAP32[i42 >> 2] | 0;
      i3 = i22;
      if ((i3 | 0) == 0) {
       break L87;
      } else if ((i3 | 0) != (-1 | 0)) {
       if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i22, HEAP32[i19 >> 2] | 0) | 0) {
        break;
       }
      }
      i22 = (i21 | 0) == 0 ? i25 : i21;
      i17 = i22 + i41 | 0;
      i21 = i22;
     }
     if ((i42 | 0) == 0) {
      break;
     }
     i21 = HEAP32[i16 + (i41 << 3) + 4 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     i17 = i21 + 8 | 0;
     i25 = HEAP32[i17 >> 2] | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     i22 = i21 | 0;
     i21 = (i8 & 1 | 0) == 0;
     i3 = (i8 & 4 | 0) == 0;
     i18 = i14;
     i29 = 0;
     i28 = i25;
     L98 : while (1) {
      if (i28 >>> 0 <= i29 >>> 0) {
       i27 = 65;
       break;
      }
      i32 = HEAP32[(HEAP32[i22 >> 2] | 0) + (i29 << 2) >> 2] | 0;
      HEAP32[i14 >> 2] = i32;
      i30 = HEAP32[i32 + 4 >> 2] | 0;
      if (i21) {
       i27 = 68;
      } else {
       if ((i30 & 1 | 0) != 0) {
        i27 = 68;
       }
      }
      do {
       if ((i27 | 0) == 68) {
        i27 = 0;
        if (!i3) {
         if ((i30 & 4 | 0) == 0) {
          break;
         }
        }
        i34 = HEAP32[i7 >> 2] | 0;
        if ((i34 | 0) != (HEAP32[i11 >> 2] | 0)) {
         HEAP32[(HEAP32[i2 >> 2] | 0) + (i34 << 2) >> 2] = i32;
         HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
         break;
        }
        i31 = i34 + 1 | 0;
        i35 = HEAP32[i2 >> 2] | 0;
        do {
         if (i35 >>> 0 > i14 >>> 0) {
          i27 = 74;
         } else {
          if ((i35 + (i34 << 2) | 0) >>> 0 <= i14 >>> 0) {
           i27 = 74;
           break;
          }
          i36 = i18 - i35 >> 2;
          i43 = i31 + (i34 >>> 2) | 0;
          i44 = i43 >>> 0 > 16 >>> 0 ? i43 : 16;
          i43 = i44 >>> 0 > i31 >>> 0 ? i44 : i31;
          do {
           if (i34 >>> 0 < i43 >>> 0) {
            if (i43 >>> 0 > 32 >>> 0) {
             if (i43 >>> 0 > 1073741823 >>> 0) {
              i27 = 88;
              break L98;
             }
             i44 = __ZN3WTF18fastMallocGoodSizeEj(i43 << 2) | 0;
             HEAP32[i11 >> 2] = i44 >>> 2;
             i45 = __ZN3WTF10fastMallocEj(i44) | 0;
             HEAP32[i2 >> 2] = i45;
             i46 = i45;
            } else {
             HEAP32[i2 >> 2] = i9;
             HEAP32[i11 >> 2] = 32;
             i46 = i9;
            }
            i45 = i35;
            _memcpy(i46 | 0, i45 | 0, i34 << 2) | 0;
            if ((i9 | 0) == (i35 | 0) | (i35 | 0) == 0) {
             break;
            }
            if ((HEAP32[i2 >> 2] | 0) == (i35 | 0)) {
             HEAP32[i2 >> 2] = 0;
             HEAP32[i11 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i45);
           }
          } while (0);
          i43 = HEAP32[i2 >> 2] | 0;
          i47 = i43 + (i36 << 2) | 0;
          i48 = i43;
         }
        } while (0);
        if ((i27 | 0) == 74) {
         i27 = 0;
         i43 = i31 + (i34 >>> 2) | 0;
         i33 = i43 >>> 0 > 16 >>> 0 ? i43 : 16;
         i43 = i33 >>> 0 > i31 >>> 0 ? i33 : i31;
         do {
          if (i34 >>> 0 < i43 >>> 0) {
           if (i43 >>> 0 > 32 >>> 0) {
            if (i43 >>> 0 > 1073741823 >>> 0) {
             i27 = 77;
             break L98;
            }
            i33 = __ZN3WTF18fastMallocGoodSizeEj(i43 << 2) | 0;
            HEAP32[i11 >> 2] = i33 >>> 2;
            i45 = __ZN3WTF10fastMallocEj(i33) | 0;
            HEAP32[i2 >> 2] = i45;
            i49 = i45;
           } else {
            HEAP32[i2 >> 2] = i9;
            HEAP32[i11 >> 2] = 32;
            i49 = i9;
           }
           i45 = i35;
           _memcpy(i49 | 0, i45 | 0, i34 << 2) | 0;
           if ((i9 | 0) == (i35 | 0) | (i35 | 0) == 0) {
            break;
           }
           if ((HEAP32[i2 >> 2] | 0) == (i35 | 0)) {
            HEAP32[i2 >> 2] = 0;
            HEAP32[i11 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i45);
          }
         } while (0);
         i47 = i14;
         i48 = HEAP32[i2 >> 2] | 0;
        }
        HEAP32[i48 + (HEAP32[i7 >> 2] << 2) >> 2] = HEAP32[i47 >> 2];
        HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
       }
      } while (0);
      i32 = i29 + 1 | 0;
      if (i32 >>> 0 >= i25 >>> 0) {
       break L87;
      }
      i29 = i32;
      i28 = HEAP32[i17 >> 2] | 0;
     }
     if ((i27 | 0) == 65) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     } else if ((i27 | 0) == 77) {
      _WTFCrash();
      return 0;
     } else if ((i27 | 0) == 88) {
      _WTFCrash();
      return 0;
     }
    }
   } while (0);
   HEAP32[H_BASE + 424 >> 2] = i8;
   i16 = HEAP32[i2 >> 2] | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   i26 = i16 + (i6 << 2) | 0;
   HEAP32[i5 >> 2] = F_BASE_iii + 4;
   i17 = i6 << 2;
   i6 = i17 >> 2;
   do {
    if ((i17 | 0) > 512) {
     i28 = i6;
     while (1) {
      i50 = __ZnwjRKSt9nothrow_t(i28 << 2, __ZSt7nothrow) | 0;
      i51 = i50;
      if ((i50 | 0) != 0) {
       i27 = 104;
       break;
      }
      if ((i28 | 0) > 1) {
       i28 = (i28 | 0) / 2 & -1;
      } else {
       i27 = 102;
       break;
      }
     }
     if ((i27 | 0) == 102) {
      __ZNSt3__113__stable_sortIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i16, i26, i5, i6, i51, 0);
      break;
     } else if ((i27 | 0) == 104) {
      __ZNSt3__113__stable_sortIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i16, i26, i5, i6, i51, i28);
      __ZdlPv(i50);
      break;
     }
    } else {
     __ZNSt3__113__stable_sortIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i16, i26, i5, i6, 0, 0);
    }
   } while (0);
   i6 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i26 = i15 | 0;
     i16 = 0;
     i17 = i6;
     while (1) {
      i29 = HEAP32[i10 >> 2] | 0;
      if (i17 >>> 0 <= i16 >>> 0) {
       i27 = 108;
       break;
      }
      i25 = HEAP32[(HEAP32[i2 >> 2] | 0) + (i16 << 2) >> 2] | 0;
      HEAP32[i26 >> 2] = i25;
      if ((i25 | 0) != 0) {
       i18 = i25 | 0;
       HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
      }
      __ZN7WebCore20CSSSegmentedFontFace14appendFontFaceEN3WTF10PassRefPtrINS_11CSSFontFaceEEE(i29, i15);
      i29 = HEAP32[i26 >> 2] | 0;
      if ((i29 | 0) != 0) {
       __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i29 | 0);
      }
      i16 = i16 + 1 | 0;
      i17 = HEAP32[i7 >> 2] | 0;
      if (i16 >>> 0 >= i6 >>> 0) {
       break;
      }
     }
     if ((i27 | 0) == 108) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     }
     if ((i17 | 0) == 0) {
      break;
     }
     HEAP32[i7 >> 2] = 0;
    }
   } while (0);
   i7 = HEAP32[i2 >> 2] | 0;
   if ((i9 | 0) == (i7 | 0) | (i7 | 0) == 0) {
    break;
   }
   HEAP32[i2 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 i20 = HEAP32[i10 >> 2] | 0;
 STACKTOP = i4;
 return i20 | 0;
}
function __ZN7WebCoreL24fontDataForGenericFamilyEPNS_8DocumentERKNS_15FontDescriptionERKN3WTF12AtomicStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = HEAP32[i2 + 332 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i7 + 36 >> 2] | 0;
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = 0;
   i9 = (HEAP32[i3 + 20 >> 2] | 0) >>> 5 & 127;
   i10 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i10 | 0) == (HEAP32[__ZN7WebCore21WebKitFontFamilyNames11serifFamilyE >> 2] | 0)) {
     i11 = HEAP32[(__ZNK7WebCore8Settings15serifFontFamilyE11UScriptCode(i8, i9) | 0) >> 2] | 0;
     if ((i11 | 0) != 0) {
      i12 = i11 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     }
     i12 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = i11;
     if ((i12 | 0) == 0) {
      i13 = i11;
      break;
     }
     i11 = i12 | 0;
     i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      i15 = 53;
      break;
     } else {
      HEAP32[i11 >> 2] = i14;
      i15 = 53;
      break;
     }
    } else {
     if ((i10 | 0) == (HEAP32[__ZN7WebCore21WebKitFontFamilyNames15sansSerifFamilyE >> 2] | 0)) {
      i14 = HEAP32[(__ZNK7WebCore8Settings19sansSerifFontFamilyE11UScriptCode(i8, i9) | 0) >> 2] | 0;
      if ((i14 | 0) != 0) {
       i11 = i14 | 0;
       HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
      }
      i11 = HEAP32[i7 >> 2] | 0;
      HEAP32[i7 >> 2] = i14;
      if ((i11 | 0) == 0) {
       i13 = i14;
       break;
      }
      i14 = i11 | 0;
      i12 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
      if ((i12 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       i15 = 53;
       break;
      } else {
       HEAP32[i14 >> 2] = i12;
       i15 = 53;
       break;
      }
     }
     if ((i10 | 0) == (HEAP32[__ZN7WebCore21WebKitFontFamilyNames13cursiveFamilyE >> 2] | 0)) {
      i12 = HEAP32[(__ZNK7WebCore8Settings17cursiveFontFamilyE11UScriptCode(i8, i9) | 0) >> 2] | 0;
      if ((i12 | 0) != 0) {
       i14 = i12 | 0;
       HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
      }
      i14 = HEAP32[i7 >> 2] | 0;
      HEAP32[i7 >> 2] = i12;
      if ((i14 | 0) == 0) {
       i13 = i12;
       break;
      }
      i12 = i14 | 0;
      i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       i15 = 53;
       break;
      } else {
       HEAP32[i12 >> 2] = i11;
       i15 = 53;
       break;
      }
     }
     if ((i10 | 0) == (HEAP32[__ZN7WebCore21WebKitFontFamilyNames13fantasyFamilyE >> 2] | 0)) {
      i11 = HEAP32[(__ZNK7WebCore8Settings17fantasyFontFamilyE11UScriptCode(i8, i9) | 0) >> 2] | 0;
      if ((i11 | 0) != 0) {
       i12 = i11 | 0;
       HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
      }
      i12 = HEAP32[i7 >> 2] | 0;
      HEAP32[i7 >> 2] = i11;
      if ((i12 | 0) == 0) {
       i13 = i11;
       break;
      }
      i11 = i12 | 0;
      i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i14 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       i15 = 53;
       break;
      } else {
       HEAP32[i11 >> 2] = i14;
       i15 = 53;
       break;
      }
     }
     if ((i10 | 0) == (HEAP32[__ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE >> 2] | 0)) {
      i14 = HEAP32[(__ZNK7WebCore8Settings15fixedFontFamilyE11UScriptCode(i8, i9) | 0) >> 2] | 0;
      if ((i14 | 0) != 0) {
       i11 = i14 | 0;
       HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
      }
      i11 = HEAP32[i7 >> 2] | 0;
      HEAP32[i7 >> 2] = i14;
      if ((i11 | 0) == 0) {
       i13 = i14;
       break;
      }
      i14 = i11 | 0;
      i12 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
      if ((i12 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       i15 = 53;
       break;
      } else {
       HEAP32[i14 >> 2] = i12;
       i15 = 53;
       break;
      }
     }
     if ((i10 | 0) == (HEAP32[__ZN7WebCore21WebKitFontFamilyNames16pictographFamilyE >> 2] | 0)) {
      i12 = HEAP32[(__ZNK7WebCore8Settings20pictographFontFamilyE11UScriptCode(i8, i9) | 0) >> 2] | 0;
      if ((i12 | 0) != 0) {
       i14 = i12 | 0;
       HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
      }
      i14 = HEAP32[i7 >> 2] | 0;
      HEAP32[i7 >> 2] = i12;
      if ((i14 | 0) == 0) {
       i13 = i12;
       break;
      }
      i12 = i14 | 0;
      i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       i15 = 53;
       break;
      } else {
       HEAP32[i12 >> 2] = i11;
       i15 = 53;
       break;
      }
     }
     if ((i10 | 0) != (HEAP32[__ZN7WebCore21WebKitFontFamilyNames14standardFamilyE >> 2] | 0)) {
      i15 = 53;
      break;
     }
     i11 = HEAP32[(__ZNK7WebCore8Settings18standardFontFamilyE11UScriptCode(i8, i9) | 0) >> 2] | 0;
     if ((i11 | 0) != 0) {
      i12 = i11 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     }
     i12 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = i11;
     if ((i12 | 0) == 0) {
      i13 = i11;
      break;
     }
     i11 = i12 | 0;
     i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      i15 = 53;
      break;
     } else {
      HEAP32[i11 >> 2] = i14;
      i15 = 53;
      break;
     }
    }
   } while (0);
   if ((i15 | 0) == 53) {
    i13 = HEAP32[i7 >> 2] | 0;
   }
   do {
    if ((i13 | 0) == 0) {
     i15 = 57;
    } else {
     if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
      i15 = 57;
      break;
     }
     __ZN7WebCore9FontCache17getCachedFontDataERKNS_15FontDescriptionERKN3WTF12AtomicStringEbNS0_12ShouldRetainE(i1, __ZN7WebCore9fontCacheEv() | 0, i3, i6, 0, 0);
     i16 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   if ((i15 | 0) == 57) {
    HEAP32[i1 >> 2] = 0;
    i16 = i13;
   }
   if ((i16 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i7 = i16 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i7 >> 2] = i9;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZNSt3__115__inplace_mergeIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeEi(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 if ((i6 | 0) == 0) {
  return;
 } else {
  i9 = i3;
  i10 = i5;
  i11 = i6;
  i12 = i2;
  i13 = i1;
 }
 L3 : while (1) {
  i1 = i9;
  i2 = i10;
  i14 = i11;
  i15 = i12;
  i6 = i13;
  while (1) {
   if ((i2 | 0) == 0) {
    i16 = 45;
    break L3;
   } else {
    i17 = i2;
    i18 = i6;
   }
   while (1) {
    if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 7](HEAP32[i15 >> 2] | 0, HEAP32[i18 >> 2] | 0) | 0) {
     break;
    }
    i5 = i17 - 1 | 0;
    if ((i5 | 0) == 0) {
     i16 = 46;
     break L3;
    } else {
     i17 = i5;
     i18 = i18 + 4 | 0;
    }
   }
   if (!((i17 | 0) > (i8 | 0) & (i14 | 0) > (i8 | 0))) {
    i16 = 7;
    break L3;
   }
   if ((i17 | 0) < (i14 | 0)) {
    i5 = (i14 | 0) / 2 & -1;
    i3 = i15 + (i5 << 2) | 0;
    i19 = i18;
    i20 = i18;
    i21 = i15 - i19 >> 2;
    L14 : while (1) {
     i22 = i21;
     while (1) {
      if ((i22 | 0) == 0) {
       break L14;
      }
      i23 = (i22 | 0) / 2 & -1;
      if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 7](HEAP32[i3 >> 2] | 0, HEAP32[i20 + (i23 << 2) >> 2] | 0) | 0) {
       i22 = i23;
      } else {
       break;
      }
     }
     i20 = i20 + (i23 + 1 << 2) | 0;
     i21 = i22 - 1 - i23 | 0;
    }
    i24 = i5;
    i25 = i20 - i19 >> 2;
    i26 = i20;
    i27 = i3;
   } else {
    if ((i17 | 0) == 1) {
     i16 = 16;
     break L3;
    }
    i21 = (i17 | 0) / 2 & -1;
    i28 = i18 + (i21 << 2) | 0;
    i29 = i15;
    i30 = i15;
    i31 = i1 - i29 >> 2;
    L23 : while (1) {
     i32 = i31;
     while (1) {
      if ((i32 | 0) == 0) {
       break L23;
      }
      i33 = (i32 | 0) / 2 & -1;
      if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 7](HEAP32[i30 + (i33 << 2) >> 2] | 0, HEAP32[i28 >> 2] | 0) | 0) {
       break;
      } else {
       i32 = i33;
      }
     }
     i30 = i30 + (i33 + 1 << 2) | 0;
     i31 = i32 - 1 - i33 | 0;
    }
    i24 = i30 - i29 >> 2;
    i25 = i21;
    i26 = i28;
    i27 = i30;
   }
   i31 = i26;
   i34 = i17 - i25 | 0;
   i35 = i14 - i24 | 0;
   L31 : do {
    if ((i26 | 0) == (i15 | 0)) {
     i36 = i27;
    } else {
     if ((i15 | 0) == (i27 | 0)) {
      i36 = i26;
      break;
     }
     if ((i26 + 4 | 0) == (i15 | 0)) {
      i3 = HEAP32[i26 >> 2] | 0;
      i20 = i27 - i15 | 0;
      _memmove(i31 | 0, i15 | 0, i20 | 0) | 0;
      i19 = i26 + (i20 >> 2 << 2) | 0;
      HEAP32[i19 >> 2] = i3;
      i36 = i19;
      break;
     }
     if ((i15 + 4 | 0) == (i27 | 0)) {
      i19 = i27 - 4 | 0;
      i3 = HEAP32[i19 >> 2] | 0;
      i20 = i19 - i26 | 0;
      i19 = i27 + (-(i20 >> 2) << 2) | 0;
      _memmove(i19 | 0, i31 | 0, i20 | 0) | 0;
      HEAP32[i26 >> 2] = i3;
      i36 = i19;
      break;
     }
     i19 = i15;
     i3 = i19 - i26 >> 2;
     i20 = i27;
     i5 = i20 - i19 >> 2;
     if ((i3 | 0) == (i5 | 0)) {
      i19 = i15;
      i22 = i26;
      while (1) {
       i37 = HEAP32[i22 >> 2] | 0;
       HEAP32[i22 >> 2] = HEAP32[i19 >> 2];
       HEAP32[i19 >> 2] = i37;
       i37 = i22 + 4 | 0;
       if ((i37 | 0) == (i15 | 0)) {
        i36 = i15;
        break L31;
       } else {
        i19 = i19 + 4 | 0;
        i22 = i37;
       }
      }
     } else {
      i38 = i3;
      i39 = i5;
     }
     while (1) {
      i22 = (i38 | 0) % (i39 | 0) & -1;
      if ((i22 | 0) == 0) {
       break;
      } else {
       i38 = i39;
       i39 = i22;
      }
     }
     if ((i39 | 0) != 0) {
      i22 = i3 - 1 | 0;
      i19 = i26 + (i39 << 2) | 0;
      while (1) {
       i32 = i19 - 4 | 0;
       i37 = HEAP32[i32 >> 2] | 0;
       i40 = i19 + (i22 << 2) | 0;
       i41 = i32;
       while (1) {
        HEAP32[i41 >> 2] = HEAP32[i40 >> 2];
        i42 = i20 - i40 >> 2;
        if ((i3 | 0) < (i42 | 0)) {
         i43 = i40 + (i3 << 2) | 0;
        } else {
         i43 = i26 + (i3 - i42 << 2) | 0;
        }
        if ((i43 | 0) == (i32 | 0)) {
         break;
        } else {
         i41 = i40;
         i40 = i43;
        }
       }
       HEAP32[i40 >> 2] = i37;
       if ((i32 | 0) == (i26 | 0)) {
        break;
       } else {
        i19 = i32;
       }
      }
     }
     i36 = i26 + (i5 << 2) | 0;
    }
   } while (0);
   if ((i24 + i25 | 0) >= (i35 + i34 | 0)) {
    break;
   }
   __ZNSt3__115__inplace_mergeIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeEi(i18, i26, i36, i4, i25, i24, i7, i8);
   if ((i14 | 0) == (i24 | 0)) {
    i16 = 49;
    break L3;
   } else {
    i2 = i34;
    i14 = i35;
    i15 = i27;
    i6 = i36;
   }
  }
  __ZNSt3__115__inplace_mergeIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeEi(i36, i27, i9, i4, i34, i35, i7, i8);
  if ((i24 | 0) == 0) {
   i16 = 50;
   break;
  } else {
   i9 = i36;
   i10 = i25;
   i11 = i24;
   i12 = i26;
   i13 = i18;
  }
 }
 if ((i16 | 0) == 45) {
  return;
 } else if ((i16 | 0) == 46) {
  return;
 } else if ((i16 | 0) == 7) {
  __ZNSt3__124__buffered_inplace_mergeIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeE(i18, i15, i9, i4, i17, i14, i7);
  return;
 } else if ((i16 | 0) == 16) {
  i7 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i15 >> 2] = i7;
  return;
 } else if ((i16 | 0) == 49) {
  return;
 } else if ((i16 | 0) == 50) {
  return;
 }
}
function __ZN7WebCore15CSSFontSelectorD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 HEAP32[i1 >> 2] = H_BASE + 352;
 __ZN7WebCore15CSSFontSelector13clearDocumentEv(i1);
 __ZN7WebCore9FontCache12removeClientEPNS_12FontSelectorE(__ZN7WebCore9fontCacheEv() | 0, i1 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 104 | 0);
 i2 = i1 + 100 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 92 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3 | 0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 96 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 56 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i6 = 0;
   while (1) {
    i3 = i2 + (i6 << 3) | 0;
    do {
     if ((HEAP32[i3 >> 2] | 0) != -1) {
      __ZN3WTF6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEED2Ev(i2 + (i6 << 3) + 4 | 0);
      i5 = HEAP32[i3 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
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
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 36 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i6 = 0;
   while (1) {
    i3 = i2 + (i6 << 3) | 0;
    i8 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i8 | 0) != -1) {
      i7 = HEAP32[i2 + (i6 << 3) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       i9 = i8;
      } else {
       i5 = i7 + 8 | 0;
       i10 = HEAP32[i5 >> 2] | 0;
       i11 = i7 | 0;
       if ((i10 | 0) != 0) {
        i12 = HEAP32[i11 >> 2] | 0;
        i13 = i12 + (i10 << 2) | 0;
        i10 = i12;
        while (1) {
         i12 = HEAP32[i10 >> 2] | 0;
         if ((i12 | 0) != 0) {
          __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i12 | 0);
         }
         i10 = i10 + 4 | 0;
         if ((i10 | 0) == (i13 | 0)) {
          break;
         }
        }
        HEAP32[i5 >> 2] = 0;
       }
       i13 = HEAP32[i11 >> 2] | 0;
       if ((i13 | 0) != 0) {
        HEAP32[i11 >> 2] = 0;
        HEAP32[i7 + 4 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i13);
       }
       __ZN3WTF8fastFreeEPv(i7);
       i9 = HEAP32[i3 >> 2] | 0;
      }
      if ((i9 | 0) == 0) {
       break;
      }
      i13 = i9 | 0;
      i10 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i13 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   i6 = i2 + (i1 << 3) | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i9 | 0) != -1) {
     i3 = HEAP32[i2 + (i1 << 3) + 4 >> 2] | 0;
     if ((i3 | 0) == 0) {
      i14 = i9;
     } else {
      i8 = i3 + 8 | 0;
      i10 = HEAP32[i8 >> 2] | 0;
      i13 = i3 | 0;
      if ((i10 | 0) != 0) {
       i12 = HEAP32[i13 >> 2] | 0;
       i15 = i12 + (i10 << 2) | 0;
       i10 = i12;
       while (1) {
        i12 = HEAP32[i10 >> 2] | 0;
        if ((i12 | 0) != 0) {
         __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i12 | 0);
        }
        i10 = i10 + 4 | 0;
        if ((i10 | 0) == (i15 | 0)) {
         break;
        }
       }
       HEAP32[i8 >> 2] = 0;
      }
      i15 = HEAP32[i13 >> 2] | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i13 >> 2] = 0;
       HEAP32[i3 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i15);
      }
      __ZN3WTF8fastFreeEPv(i3);
      i14 = HEAP32[i6 >> 2] | 0;
     }
     if ((i14 | 0) == 0) {
      break;
     }
     i15 = i14 | 0;
     i10 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i15 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore15CSSFontSelectorD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 HEAP32[i1 >> 2] = H_BASE + 352;
 __ZN7WebCore15CSSFontSelector13clearDocumentEv(i1);
 __ZN7WebCore9FontCache12removeClientEPNS_12FontSelectorE(__ZN7WebCore9fontCacheEv() | 0, i1 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 104 | 0);
 i2 = i1 + 100 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 92 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3 | 0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 96 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 56 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i6 = 0;
   while (1) {
    i3 = i2 + (i6 << 3) | 0;
    do {
     if ((HEAP32[i3 >> 2] | 0) != -1) {
      __ZN3WTF6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEED2Ev(i2 + (i6 << 3) + 4 | 0);
      i5 = HEAP32[i3 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
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
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 36 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i6 = 0;
   while (1) {
    i3 = i2 + (i6 << 3) | 0;
    i8 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i8 | 0) != -1) {
      i7 = HEAP32[i2 + (i6 << 3) + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       i9 = i8;
      } else {
       i5 = i7 + 8 | 0;
       i10 = HEAP32[i5 >> 2] | 0;
       i11 = i7 | 0;
       if ((i10 | 0) != 0) {
        i12 = HEAP32[i11 >> 2] | 0;
        i13 = i12 + (i10 << 2) | 0;
        i10 = i12;
        while (1) {
         i12 = HEAP32[i10 >> 2] | 0;
         if ((i12 | 0) != 0) {
          __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i12 | 0);
         }
         i10 = i10 + 4 | 0;
         if ((i10 | 0) == (i13 | 0)) {
          break;
         }
        }
        HEAP32[i5 >> 2] = 0;
       }
       i13 = HEAP32[i11 >> 2] | 0;
       if ((i13 | 0) != 0) {
        HEAP32[i11 >> 2] = 0;
        HEAP32[i7 + 4 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i13);
       }
       __ZN3WTF8fastFreeEPv(i7);
       i9 = HEAP32[i3 >> 2] | 0;
      }
      if ((i9 | 0) == 0) {
       break;
      }
      i13 = i9 | 0;
      i10 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i13 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   i6 = i2 + (i1 << 3) | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i9 | 0) != -1) {
     i3 = HEAP32[i2 + (i1 << 3) + 4 >> 2] | 0;
     if ((i3 | 0) == 0) {
      i14 = i9;
     } else {
      i8 = i3 + 8 | 0;
      i10 = HEAP32[i8 >> 2] | 0;
      i13 = i3 | 0;
      if ((i10 | 0) != 0) {
       i12 = HEAP32[i13 >> 2] | 0;
       i15 = i12 + (i10 << 2) | 0;
       i10 = i12;
       while (1) {
        i12 = HEAP32[i10 >> 2] | 0;
        if ((i12 | 0) != 0) {
         __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i12 | 0);
        }
        i10 = i10 + 4 | 0;
        if ((i10 | 0) == (i15 | 0)) {
         break;
        }
       }
       HEAP32[i8 >> 2] = 0;
      }
      i15 = HEAP32[i13 >> 2] | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i13 >> 2] = 0;
       HEAP32[i3 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i15);
      }
      __ZN3WTF8fastFreeEPv(i3);
      i14 = HEAP32[i6 >> 2] | 0;
     }
     if ((i14 | 0) == 0) {
      break;
     }
     i15 = i14 | 0;
     i10 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i15 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E3addINS_17HashMapTranslatorISL_SF_EERKS1_NS_10PassOwnPtrISA_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_SC_SE_SF_SL_SI_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E6rehashEiPSC_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i8 >> 2] | 0) | 0;
 i9 = (i3 >>> 23) + ~i3 | 0;
 i7 = i9 << 12 ^ i9;
 i9 = i7 >>> 7 ^ i7;
 i7 = i9 << 2 ^ i9;
 i9 = i7 >>> 20 ^ i7 | 1;
 i7 = 0;
 i11 = i3;
 i3 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 8;
    break;
   } else {
    i16 = i7;
   }
  }
  i14 = (i3 | 0) == 0 ? i9 : i3;
  i7 = i16;
  i11 = i14 + i12 | 0;
  i3 = i14;
 }
 if ((i17 | 0) == 8) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i13;
  HEAP32[i3 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i7 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i7;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i7;
 }
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 do {
  if ((i13 | 0) != 0) {
   i7 = i13 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i13 >> 2] = i4;
 if ((i8 | 0) != 0) {
  i4 = i8 + 8 | 0;
  i13 = HEAP32[i4 >> 2] | 0;
  i7 = i8 | 0;
  if ((i13 | 0) != 0) {
   i17 = HEAP32[i7 >> 2] | 0;
   i3 = i17 + (i13 << 2) | 0;
   i13 = i17;
   while (1) {
    i17 = HEAP32[i13 >> 2] | 0;
    if ((i17 | 0) != 0) {
     __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i17 | 0);
    }
    i13 = i13 + 4 | 0;
    if ((i13 | 0) == (i3 | 0)) {
     break;
    }
   }
   HEAP32[i4 >> 2] = 0;
  }
  i4 = HEAP32[i7 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i7 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = i2 + 12 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i4;
 i8 = i2 + 4 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i7 | 0)) {
  i19 = i18;
  i20 = i7;
 } else {
  if ((i7 | 0) == 0) {
   i21 = 8;
  } else {
   i3 = i7 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i3 | 0) ? i7 : i3;
  }
  i3 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E6rehashEiPSC_(i2, i21, i18) | 0;
  i19 = i3;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZNSt3__118__stable_sort_moveIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 if ((i4 | 0) == 1) {
  if ((i5 | 0) == 0) {
   return;
  }
  HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
  return;
 } else if ((i4 | 0) == 2) {
  i6 = i2 - 4 | 0;
  i7 = (i5 | 0) == 0;
  if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](HEAP32[i6 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0) {
   if (!i7) {
    HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
   }
   i8 = i5 + 4 | 0;
   if ((i8 | 0) == 0) {
    return;
   }
   HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
   return;
  } else {
   if (!i7) {
    HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
   }
   i7 = i5 + 4 | 0;
   if ((i7 | 0) == 0) {
    return;
   }
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   return;
  }
 } else if ((i4 | 0) == 0) {
  return;
 } else {
  if ((i4 | 0) < 9) {
   if ((i1 | 0) == (i2 | 0)) {
    return;
   }
   if ((i5 | 0) == 0) {
    i9 = 0;
   } else {
    HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
    i9 = i5;
   }
   i6 = i1 + 4 | 0;
   if ((i6 | 0) == (i2 | 0)) {
    return;
   } else {
    i10 = i9;
    i11 = i6;
   }
   while (1) {
    i6 = i10 + 4 | 0;
    i9 = (i6 | 0) == 0;
    do {
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](HEAP32[i11 >> 2] | 0, HEAP32[i10 >> 2] | 0) | 0) {
      if (!i9) {
       HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
      }
      L44 : do {
       if ((i10 | 0) == (i5 | 0)) {
        i12 = i5;
       } else {
        i7 = i10;
        while (1) {
         i8 = i7 - 4 | 0;
         if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](HEAP32[i11 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0)) {
          i12 = i7;
          break L44;
         }
         HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
         if ((i8 | 0) == (i5 | 0)) {
          i12 = i5;
          break;
         } else {
          i7 = i8;
         }
        }
       }
      } while (0);
      HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
      i13 = i6;
     } else {
      if (i9) {
       i13 = 0;
       break;
      }
      HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
      i13 = i6;
     }
    } while (0);
    i6 = i11 + 4 | 0;
    if ((i6 | 0) == (i2 | 0)) {
     break;
    } else {
     i10 = i13;
     i11 = i6;
    }
   }
   return;
  }
  i11 = (i4 | 0) / 2 & -1;
  i13 = i1 + (i11 << 2) | 0;
  __ZNSt3__113__stable_sortIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i1, i13, i3, i11, i5, i11);
  i10 = i4 - i11 | 0;
  __ZNSt3__113__stable_sortIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i13, i2, i3, i10, i5 + (i11 << 2) | 0, i10);
  L54 : do {
   if ((i4 + 1 | 0) >>> 0 < 3 >>> 0) {
    i14 = i13;
    i15 = i5;
   } else {
    i10 = i13;
    i11 = i5;
    i12 = i1;
    while (1) {
     if ((i10 | 0) == (i2 | 0)) {
      break;
     }
     i6 = (i11 | 0) == 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](HEAP32[i10 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
      if (!i6) {
       HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
      }
      i16 = i12;
      i17 = i10 + 4 | 0;
     } else {
      if (!i6) {
       HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
      }
      i16 = i12 + 4 | 0;
      i17 = i10;
     }
     i6 = i11 + 4 | 0;
     if ((i16 | 0) == (i13 | 0)) {
      i14 = i17;
      i15 = i6;
      break L54;
     } else {
      i10 = i17;
      i11 = i6;
      i12 = i16;
     }
    }
    if ((i12 | 0) == (i13 | 0)) {
     return;
    } else {
     i18 = i11;
     i19 = i12;
    }
    while (1) {
     if ((i18 | 0) != 0) {
      HEAP32[i18 >> 2] = HEAP32[i19 >> 2];
     }
     i10 = i19 + 4 | 0;
     if ((i10 | 0) == (i13 | 0)) {
      break;
     } else {
      i18 = i18 + 4 | 0;
      i19 = i10;
     }
    }
    return;
   }
  } while (0);
  if ((i14 | 0) == (i2 | 0)) {
   return;
  } else {
   i20 = i14;
   i21 = i15;
  }
  while (1) {
   if ((i21 | 0) != 0) {
    HEAP32[i21 >> 2] = HEAP32[i20 >> 2];
   }
   i15 = i20 + 4 | 0;
   if ((i15 | 0) == (i2 | 0)) {
    break;
   } else {
    i20 = i15;
    i21 = i21 + 4 | 0;
   }
  }
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E3addINS_17HashMapTranslatorISL_SF_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_SC_SE_SF_SL_SI_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E6rehashEiPSC_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i7 >> 2] | 0) | 0;
 i8 = (i3 >>> 23) + ~i3 | 0;
 i6 = i8 << 12 ^ i8;
 i8 = i6 >>> 7 ^ i6;
 i6 = i8 << 2 ^ i8;
 i8 = i6 >>> 20 ^ i6 | 1;
 i6 = 0;
 i10 = i3;
 i3 = 0;
 while (1) {
  i11 = i10 & i5;
  i12 = i9 + (i11 << 3) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == 0) {
   break;
  } else if ((i14 | 0) == (-1 | 0)) {
   i15 = i12;
  } else {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i13, HEAP32[i7 >> 2] | 0) | 0) {
    i16 = 8;
    break;
   } else {
    i15 = i6;
   }
  }
  i13 = (i3 | 0) == 0 ? i8 : i3;
  i6 = i15;
  i10 = i13 + i11 | 0;
  i3 = i13;
 }
 if ((i16 | 0) == 8) {
  i16 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i12;
  HEAP32[i3 + 4 >> 2] = i16;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i6 | 0) == 0) {
  i17 = i12;
 } else {
  i12 = i6;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  i12 = i2 + 16 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - 1;
  i17 = i6;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i17 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i12 | 0) != 0) {
   i6 = i12 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i12 = i17 + 4 | 0;
 i7 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 if ((i7 | 0) != 0) {
  i12 = i7 + 8 | 0;
  i6 = HEAP32[i12 >> 2] | 0;
  i16 = i7 | 0;
  if ((i6 | 0) != 0) {
   i3 = HEAP32[i16 >> 2] | 0;
   i10 = i3 + (i6 << 2) | 0;
   i6 = i3;
   while (1) {
    i3 = HEAP32[i6 >> 2] | 0;
    if ((i3 | 0) != 0) {
     __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i3 | 0);
    }
    i6 = i6 + 4 | 0;
    if ((i6 | 0) == (i10 | 0)) {
     break;
    }
   }
   HEAP32[i12 >> 2] = 0;
  }
  i12 = HEAP32[i16 >> 2] | 0;
  if ((i12 | 0) != 0) {
   HEAP32[i16 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i12);
  }
  __ZN3WTF8fastFreeEPv(i7);
 }
 i7 = i2 + 12 | 0;
 i12 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 HEAP32[i7 >> 2] = i12;
 i7 = i2 + 4 | 0;
 i16 = HEAP32[i7 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i12 << 1 | 0) < (i16 | 0)) {
  i18 = i17;
  i19 = i16;
 } else {
  if ((i16 | 0) == 0) {
   i20 = 8;
  } else {
   i10 = i16 << 1;
   i20 = (i12 * 6 & -1 | 0) < (i10 | 0) ? i16 : i10;
  }
  i10 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E6rehashEiPSC_(i2, i20, i17) | 0;
  i18 = i10;
  i19 = HEAP32[i7 >> 2] | 0;
 }
 i7 = (HEAP32[i4 >> 2] | 0) + (i19 << 3) | 0;
 i19 = i1;
 HEAP32[i19 >> 2] = i18;
 HEAP32[i19 + 4 >> 2] = i7;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZNSt3__113__stable_sortIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 if ((i4 | 0) == 0 | (i4 | 0) == 1) {
  return;
 } else if ((i4 | 0) == 2) {
  i7 = i2 - 4 | 0;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](HEAP32[i7 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
   return;
  }
  i8 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i7 >> 2] = i8;
  return;
 } else {
  if ((i4 | 0) < 129) {
   if ((i1 | 0) == (i2 | 0)) {
    return;
   }
   i8 = i1 + 4 | 0;
   if ((i8 | 0) == (i2 | 0)) {
    return;
   } else {
    i9 = i8;
   }
   while (1) {
    i8 = HEAP32[i9 >> 2] | 0;
    L18 : do {
     if ((i9 | 0) == (i1 | 0)) {
      i10 = i1;
     } else {
      i7 = i9;
      while (1) {
       i11 = i7 - 4 | 0;
       if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](i8, HEAP32[i11 >> 2] | 0) | 0)) {
        i10 = i7;
        break L18;
       }
       HEAP32[i7 >> 2] = HEAP32[i11 >> 2];
       if ((i11 | 0) == (i1 | 0)) {
        i10 = i1;
        break;
       } else {
        i7 = i11;
       }
      }
     }
    } while (0);
    HEAP32[i10 >> 2] = i8;
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i2 | 0)) {
     break;
    }
   }
   return;
  }
  i9 = (i4 | 0) / 2 & -1;
  i10 = i1 + (i9 << 2) | 0;
  if ((i4 | 0) > (i6 | 0)) {
   __ZNSt3__113__stable_sortIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i1, i10, i3, i9, i5, i6);
   i7 = i4 - i9 | 0;
   __ZNSt3__113__stable_sortIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i10, i2, i3, i7, i5, i6);
   __ZNSt3__115__inplace_mergeIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeEi(i1, i10, i2, i3, i9, i7, i5, i6);
   return;
  }
  __ZNSt3__118__stable_sort_moveIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeE(i1, i10, i3, i9, i5);
  i6 = i5 + (i9 << 2) | 0;
  __ZNSt3__118__stable_sort_moveIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeE(i10, i2, i3, i4 - i9 | 0, i6);
  i9 = i5 + (i4 << 2) | 0;
  L28 : do {
   if ((i4 + 1 | 0) >>> 0 < 3 >>> 0) {
    i12 = i6;
    i13 = i1;
   } else {
    i2 = i6;
    i10 = i1;
    i7 = i5;
    while (1) {
     if ((i2 | 0) == (i9 | 0)) {
      break;
     }
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 7](HEAP32[i2 >> 2] | 0, HEAP32[i7 >> 2] | 0) | 0) {
      HEAP32[i10 >> 2] = HEAP32[i2 >> 2];
      i14 = i7;
      i15 = i2 + 4 | 0;
     } else {
      HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
      i14 = i7 + 4 | 0;
      i15 = i2;
     }
     i11 = i10 + 4 | 0;
     if ((i14 | 0) == (i6 | 0)) {
      i12 = i15;
      i13 = i11;
      break L28;
     } else {
      i2 = i15;
      i10 = i11;
      i7 = i14;
     }
    }
    if ((i7 | 0) == (i6 | 0)) {
     return;
    } else {
     i16 = i10;
     i17 = i7;
    }
    while (1) {
     HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
     i2 = i17 + 4 | 0;
     if ((i2 | 0) == (i6 | 0)) {
      break;
     } else {
      i16 = i16 + 4 | 0;
      i17 = i2;
     }
    }
    return;
   }
  } while (0);
  if ((i12 | 0) == (i9 | 0)) {
   return;
  } else {
   i18 = i12;
   i19 = i13;
  }
  while (1) {
   HEAP32[i19 >> 2] = HEAP32[i18 >> 2];
   i13 = i18 + 4 | 0;
   if ((i13 | 0) == (i9 | 0)) {
    break;
   } else {
    i18 = i13;
    i19 = i19 + 4 | 0;
   }
  }
  return;
 }
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEjDnEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7 + ~(i7 << 15) | 0;
 i6 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i6 >>> 6 ^ i6;
 i6 = i8 + ~(i8 << 11) | 0;
 i8 = i6 >>> 16 ^ i6;
 i6 = i8 & i5;
 i10 = i9 + (i6 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = i7;
  } else {
   i14 = (i8 >>> 23) + ~i8 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i6;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i20 = 8;
     break;
    }
    i21 = (i19 | 0) == -1 ? i18 : i16;
    i22 = (i15 | 0) == 0 ? i14 : i15;
    i23 = i22 + i17 & i5;
    i24 = i9 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i15 = i22;
     i16 = i21;
     i17 = i23;
     i18 = i24;
     i19 = i25;
    }
   }
   if ((i20 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i20 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i12 = i24;
     i13 = i7;
     break;
    }
    i19 = i21;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i12 = i21;
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = i12 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i13 = i3 | 0;
   i21 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) == 0) {
    __ZN7WebCore20CSSSegmentedFontFaceD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i13 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i21 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i21;
 i3 = i2 + 4 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i21 << 1 | 0) < (i13 | 0)) {
  i26 = i12;
  i27 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i28 = 8;
  } else {
   i7 = i13 << 1;
   i28 = (i21 * 6 & -1 | 0) < (i7 | 0) ? i13 : i7;
  }
  i7 = __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i28, i12) | 0;
  i26 = i7;
  i27 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENSB_IS8_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENS_15CaseFoldingHashENS4_IS1_SF_SJ_NSB_IS1_EENSB_ISF_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SJ_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_SG_SI_SJ_SN_SK_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENSB_IS8_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENS_15CaseFoldingHashENS4_IS1_SF_SJ_NSB_IS1_EENSB_ISF_EEE18KeyValuePairTraitsESK_E6rehashEiPSG_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i7 >> 2] | 0) | 0;
 i8 = (i3 >>> 23) + ~i3 | 0;
 i6 = i8 << 12 ^ i8;
 i8 = i6 >>> 7 ^ i6;
 i6 = i8 << 2 ^ i8;
 i8 = i6 >>> 20 ^ i6 | 1;
 i6 = 0;
 i10 = i3;
 i3 = 0;
 while (1) {
  i11 = i10 & i5;
  i12 = i9 + (i11 << 3) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == 0) {
   break;
  } else if ((i14 | 0) == (-1 | 0)) {
   i15 = i12;
  } else {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i13, HEAP32[i7 >> 2] | 0) | 0) {
    i16 = 8;
    break;
   } else {
    i15 = i6;
   }
  }
  i13 = (i3 | 0) == 0 ? i8 : i3;
  i6 = i15;
  i10 = i13 + i11 | 0;
  i3 = i13;
 }
 if ((i16 | 0) == 8) {
  i16 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i12;
  HEAP32[i3 + 4 >> 2] = i16;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i6 | 0) == 0) {
  i17 = i12;
 } else {
  i12 = i6;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  i12 = i2 + 16 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - 1;
  i17 = i6;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i17 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i12 | 0) != 0) {
   i6 = i12 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN3WTF6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEE5clearEv(i17 + 4 | 0);
 i12 = i2 + 12 | 0;
 i7 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
 HEAP32[i12 >> 2] = i7;
 i12 = i2 + 4 | 0;
 i6 = HEAP32[i12 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i7 << 1 | 0) < (i6 | 0)) {
  i18 = i17;
  i19 = i6;
 } else {
  if ((i6 | 0) == 0) {
   i20 = 8;
  } else {
   i16 = i6 << 1;
   i20 = (i7 * 6 & -1 | 0) < (i16 | 0) ? i6 : i16;
  }
  i16 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENSB_IS8_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENS_15CaseFoldingHashENS4_IS1_SF_SJ_NSB_IS1_EENSB_ISF_EEE18KeyValuePairTraitsESK_E6rehashEiPSG_(i2, i20, i17) | 0;
  i18 = i16;
  i19 = HEAP32[i12 >> 2] | 0;
 }
 i12 = (HEAP32[i4 >> 2] | 0) + (i19 << 3) | 0;
 i19 = i1;
 HEAP32[i19 >> 2] = i18;
 HEAP32[i19 + 4 >> 2] = i12;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i11;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i15 = i30 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i13 = i16 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore20CSSSegmentedFontFaceD1Ev(i16);
      __ZN3WTF8fastFreeEPv(i16);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i16 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i20;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i14;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore20CSSSegmentedFontFaceD1Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENSB_IS8_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENS_15CaseFoldingHashENS4_IS1_SF_SJ_NSB_IS1_EENSB_ISF_EEE18KeyValuePairTraitsESK_E6rehashEiPSG_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i13) | 0;
   i13 = (i17 >>> 23) + ~i17 | 0;
   i18 = i13 << 12 ^ i13;
   i13 = i18 >>> 7 ^ i18;
   i18 = i13 << 2 ^ i13;
   i13 = i18 >>> 20 ^ i18 | 1;
   i18 = i17;
   i17 = 0;
   i19 = 0;
   while (1) {
    i20 = i18 & i16;
    i21 = i14 + (i20 << 3) | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    i23 = i22;
    if ((i23 | 0) == 0) {
     i24 = 6;
     break;
    } else if ((i23 | 0) == (-1 | 0)) {
     i25 = i21;
    } else {
     if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i22, HEAP32[i12 >> 2] | 0) | 0) {
      i26 = i21;
      break;
     } else {
      i25 = i19;
     }
    }
    i22 = (i17 | 0) == 0 ? i13 : i17;
    i18 = i22 + i20 | 0;
    i17 = i22;
    i19 = i25;
   }
   if ((i24 | 0) == 6) {
    i24 = 0;
    i26 = (i19 | 0) != 0 ? i19 : i21;
   }
   __ZN3WTF6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEED2Ev(i26 + 4 | 0);
   i17 = i26 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i13 = i18 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i18;
   i18 = i7 + (i10 << 3) + 4 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i26 + 4 >> 2] = i19;
   i15 = (i2 | 0) == (i3 | 0) ? i26 : i11;
  }
  i19 = i10 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i19;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i27 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i27 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    __ZN3WTF6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEED2Ev(i7 + (i27 << 3) + 4 | 0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i10 = i11 | 0;
    i26 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i10 >> 2] = i26;
     break;
    }
   }
  } while (0);
  i1 = i27 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i27 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore15CSSFontSelector29dispatchInvalidationCallbacksEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = i1 + 164 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i1 + 84 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 do {
  if (i4) {
   i5 = 0;
  } else {
   i6 = i3 >>> 0 < 16 >>> 0 ? 16 : i3;
   do {
    if ((i6 | 0) == 0) {
     i7 = HEAP32[i1 + 72 >> 2] | 0;
     i8 = HEAP32[i1 + 76 >> 2] | 0;
     i9 = 0;
     i10 = i7;
     i11 = i8;
     i12 = i7 + (i8 << 2) | 0;
     i13 = 7;
    } else {
     if (i6 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
     } else {
      i8 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i6 << 2) | 0) | 0;
      i7 = HEAP32[i1 + 72 >> 2] | 0;
      i14 = HEAP32[i1 + 76 >> 2] | 0;
      if ((HEAP32[i2 >> 2] | 0) == 0) {
       i15 = i8;
       break;
      } else {
       i9 = i8;
       i10 = i7;
       i11 = i14;
       i12 = i7 + (i14 << 2) | 0;
       i13 = 7;
       break;
      }
     }
    }
   } while (0);
   L9 : do {
    if ((i13 | 0) == 7) {
     L11 : do {
      if ((i11 | 0) == 0) {
       i16 = i10;
      } else {
       i6 = i10;
       while (1) {
        i14 = HEAP32[i6 >> 2] | 0;
        if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
         i16 = i6;
         break L11;
        }
        i14 = i6 + 4 | 0;
        if ((i14 | 0) == (i12 | 0)) {
         i15 = i9;
         break L9;
        } else {
         i6 = i14;
        }
       }
      }
     } while (0);
     if ((i16 | 0) == (i12 | 0)) {
      i15 = i9;
      break;
     } else {
      i17 = i16;
      i18 = 0;
     }
     while (1) {
      if (i3 >>> 0 <= i18 >>> 0) {
       break;
      }
      HEAP32[i9 + (i18 << 2) >> 2] = HEAP32[i17 >> 2];
      i6 = i17 + 4 | 0;
      if ((i6 | 0) == (i12 | 0)) {
       i15 = i9;
       break L9;
      } else {
       i19 = i6;
      }
      while (1) {
       i6 = HEAP32[i19 >> 2] | 0;
       if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
        break;
       }
       i6 = i19 + 4 | 0;
       if ((i6 | 0) == (i12 | 0)) {
        i15 = i9;
        break L9;
       } else {
        i19 = i6;
       }
      }
      if ((i19 | 0) == (i12 | 0)) {
       i15 = i9;
       break L9;
      } else {
       i17 = i19;
       i18 = i18 + 1 | 0;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   if (i4) {
    i5 = i15;
    break;
   }
   i6 = i1 | 0;
   i14 = 0;
   while (1) {
    i7 = HEAP32[i15 + (i14 << 2) >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 15](i7, i6);
    i7 = i14 + 1 | 0;
    if (i7 >>> 0 < i3 >>> 0) {
     i14 = i7;
    } else {
     i5 = i15;
     break;
    }
   }
  }
 } while (0);
 i15 = i1 + 8 | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = HEAP32[i1 + 320 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i20 = i1;
   } else {
    __ZN7WebCore13StyleResolver32invalidateMatchedPropertiesCacheEv(i3);
    i20 = HEAP32[i15 >> 2] | 0;
   }
   if ((HEAP8[i20 + 1433 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[i20 + 1584 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore8Document25scheduleForcedStyleRecalcEv(i20);
  }
 } while (0);
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZNSt3__124__buffered_inplace_mergeIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i8 = i1;
 i9 = i2;
 if ((i5 | 0) <= (i6 | 0)) {
  L3 : do {
   if ((i1 | 0) == (i2 | 0)) {
    i10 = i1;
    i11 = i2;
   } else {
    i6 = ((i2 - 4 + (-i8 | 0) | 0) >>> 2) + 1 | 0;
    i5 = i7;
    i12 = i1;
    while (1) {
     if ((i5 | 0) != 0) {
      HEAP32[i5 >> 2] = HEAP32[i12 >> 2];
     }
     i13 = i12 + 4 | 0;
     if ((i13 | 0) == (i2 | 0)) {
      break;
     } else {
      i5 = i5 + 4 | 0;
      i12 = i13;
     }
    }
    i12 = i7 + (i6 << 2) | 0;
    if ((i12 | 0) == (i7 | 0)) {
     i10 = i1;
     i11 = i2;
     break;
    } else {
     i14 = i1;
     i15 = i7;
     i16 = i2;
    }
    while (1) {
     if ((i16 | 0) == (i3 | 0)) {
      break;
     }
     if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 7](HEAP32[i16 >> 2] | 0, HEAP32[i15 >> 2] | 0) | 0) {
      HEAP32[i14 >> 2] = HEAP32[i16 >> 2];
      i17 = i15;
      i18 = i16 + 4 | 0;
     } else {
      HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
      i17 = i15 + 4 | 0;
      i18 = i16;
     }
     i5 = i14 + 4 | 0;
     if ((i17 | 0) == (i12 | 0)) {
      i10 = i5;
      i11 = i18;
      break L3;
     } else {
      i14 = i5;
      i15 = i17;
      i16 = i18;
     }
    }
    _memmove(i14 | 0, i15 | 0, i12 - i15 | 0) | 0;
    return;
   }
  } while (0);
  _memmove(i10 | 0, i11 | 0, i3 - i11 | 0) | 0;
  return;
 }
 if ((i2 | 0) == (i3 | 0)) {
  i19 = i7;
 } else {
  i11 = ((i3 - 4 + (-i9 | 0) | 0) >>> 2) + 1 | 0;
  i9 = i7;
  i10 = i2;
  while (1) {
   if ((i9 | 0) != 0) {
    HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   }
   i15 = i10 + 4 | 0;
   if ((i15 | 0) == (i3 | 0)) {
    break;
   } else {
    i9 = i9 + 4 | 0;
    i10 = i15;
   }
  }
  i19 = i7 + (i11 << 2) | 0;
 }
 L32 : do {
  if ((i2 | 0) == (i1 | 0)) {
   i20 = i19;
   i21 = i3;
  } else {
   i11 = i2;
   i10 = i19;
   i9 = i3;
   while (1) {
    if ((i10 | 0) == (i7 | 0)) {
     break;
    }
    i15 = i10 - 4 | 0;
    i14 = i11 - 4 | 0;
    if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 7](HEAP32[i15 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0) {
     HEAP32[i9 - 4 >> 2] = HEAP32[i14 >> 2];
     i22 = i14;
     i23 = i10;
    } else {
     HEAP32[i9 - 4 >> 2] = HEAP32[i15 >> 2];
     i22 = i11;
     i23 = i15;
    }
    i15 = i9 - 4 | 0;
    if ((i22 | 0) == (i1 | 0)) {
     i20 = i23;
     i21 = i15;
     break L32;
    } else {
     i11 = i22;
     i10 = i23;
     i9 = i15;
    }
   }
   if ((i11 | 0) == (i1 | 0)) {
    return;
   } else {
    i24 = i11;
    i25 = i9;
   }
   while (1) {
    i24 = i24 - 4 | 0;
    i25 = i25 - 4 | 0;
    HEAP32[i25 >> 2] = HEAP32[i24 >> 2];
    if ((i24 | 0) == (i1 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i20 | 0) == (i7 | 0)) {
  return;
 } else {
  i26 = i21;
  i27 = i20;
 }
 while (1) {
  i27 = i27 - 4 | 0;
  i26 = i26 - 4 | 0;
  HEAP32[i26 >> 2] = HEAP32[i27 >> 2];
  if ((i27 | 0) == (i7 | 0)) {
   break;
  }
 }
 return;
}
function __ZN3WTF9HashTableIPN7WebCore18FontSelectorClientES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore18FontSelectorClientES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore18FontSelectorClientES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E6rehashEiPSC_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E8reinsertEOSC_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 << 3) | 0;
  i11 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i11 | 0) != -1) {
    i10 = HEAP32[i7 + (i13 << 3) + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i14 = i11;
    } else {
     i3 = i10 + 8 | 0;
     i6 = HEAP32[i3 >> 2] | 0;
     i2 = i10 | 0;
     if ((i6 | 0) != 0) {
      i4 = HEAP32[i2 >> 2] | 0;
      i15 = i4 + (i6 << 2) | 0;
      i6 = i4;
      while (1) {
       i4 = HEAP32[i6 >> 2] | 0;
       if ((i4 | 0) != 0) {
        __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i4 | 0);
       }
       i6 = i6 + 4 | 0;
       if ((i6 | 0) == (i15 | 0)) {
        break;
       }
      }
      HEAP32[i3 >> 2] = 0;
     }
     i15 = HEAP32[i2 >> 2] | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i2 >> 2] = 0;
      HEAP32[i10 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i15);
     }
     __ZN3WTF8fastFreeEPv(i10);
     i14 = HEAP32[i1 >> 2] | 0;
    }
    if ((i14 | 0) == 0) {
     break;
    }
    i15 = i14 | 0;
    i6 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i15 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZNK7WebCore15CSSFontSelector17resolvesFamilyForERKNS_15FontDescriptionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = i2 + 20 | 0;
 i4 = i2 | 0;
 i5 = i2 + 16 | 0;
 i2 = i1 + 12 | 0;
 i6 = i1 + 20 | 0;
 i1 = 0;
 L1 : while (1) {
  i7 = HEAP32[i4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 0;
  } else {
   i8 = HEAP32[i7 - 4 >> 2] | 0;
  }
  if (i1 >>> 0 >= i8 >>> 0) {
   i9 = 0;
   i10 = 24;
   break;
  }
  if ((HEAP32[i5 >> 2] & 229376 | 0) == 32768) {
   if ((HEAP32[i3 >> 2] & 16 | 0) == 0) {
    i9 = 1;
    i10 = 25;
    break;
   }
  }
  i11 = i7 + (i1 << 2) | 0;
  i7 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
     break;
    }
    i12 = HEAP32[i2 >> 2] | 0;
    L13 : do {
     if ((i12 | 0) != 0) {
      i13 = HEAP32[i6 >> 2] | 0;
      i14 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i7) | 0;
      i15 = (i14 >>> 23) + ~i14 | 0;
      i16 = i15 << 12 ^ i15;
      i15 = i16 >>> 7 ^ i16;
      i16 = i15 << 2 ^ i15;
      i15 = i16 >>> 20 ^ i16 | 1;
      i16 = i14;
      i14 = 0;
      while (1) {
       i17 = i16 & i13;
       i18 = i12 + (i17 << 3) | 0;
       i19 = HEAP32[i18 >> 2] | 0;
       i20 = i19;
       if ((i20 | 0) == 0) {
        break L13;
       } else if ((i20 | 0) != (-1 | 0)) {
        if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i19, HEAP32[i11 >> 2] | 0) | 0) {
         break;
        }
       }
       i19 = (i14 | 0) == 0 ? i15 : i14;
       i16 = i19 + i17 | 0;
       i14 = i19;
      }
      if ((i18 | 0) != 0) {
       i9 = 1;
       i10 = 26;
       break L1;
      }
     }
    } while (0);
    if (HEAP8[H_BASE + 408 | 0] | 0) {
     i21 = HEAP32[H_BASE + 416 >> 2] | 0;
    } else {
     i12 = __Znwj(4) | 0;
     __ZN3WTF6StringC1EPKc(i12, H_BASE + 8 | 0);
     HEAP32[H_BASE + 416 >> 2] = i12;
     HEAP8[H_BASE + 408 | 0] = 1;
     i21 = i12;
    }
    i12 = HEAP32[i11 >> 2] | 0;
    i14 = HEAP32[i21 >> 2] | 0;
    if ((i12 | 0) != 0) {
     if (__ZNK3WTF10StringImpl10startsWithEPKS0_(i12, i14) | 0) {
      i9 = 1;
      i10 = 27;
      break L1;
     } else {
      break;
     }
    }
    if ((i14 | 0) == 0) {
     i9 = 1;
     i10 = 28;
     break L1;
    }
    if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
     i9 = 1;
     i10 = 29;
     break L1;
    }
   }
  } while (0);
  i1 = i1 + 1 | 0;
 }
 if ((i10 | 0) == 24) {
  return i9 | 0;
 } else if ((i10 | 0) == 25) {
  return i9 | 0;
 } else if ((i10 | 0) == 26) {
  return i9 | 0;
 } else if ((i10 | 0) == 27) {
  return i9 | 0;
 } else if ((i10 | 0) == 28) {
  return i9 | 0;
 } else if ((i10 | 0) == 29) {
  return i9 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPN7WebCore18FontSelectorClientES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E8reinsertEOSC_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i1 >> 2] | 0) | 0;
 i6 = (i5 >>> 23) + ~i5 | 0;
 i7 = i6 << 12 ^ i6;
 i6 = i7 >>> 7 ^ i7;
 i7 = i6 << 2 ^ i6;
 i6 = i7 >>> 20 ^ i7 | 1;
 i7 = i5;
 i5 = 0;
 i8 = 0;
 while (1) {
  i9 = i7 & i4;
  i10 = i3 + (i9 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == 0) {
   i13 = 3;
   break;
  } else if ((i12 | 0) == (-1 | 0)) {
   i14 = i10;
  } else {
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i11, HEAP32[i1 >> 2] | 0) | 0) {
    i15 = i10;
    break;
   } else {
    i14 = i8;
   }
  }
  i11 = (i5 | 0) == 0 ? i6 : i5;
  i7 = i11 + i9 | 0;
  i5 = i11;
  i8 = i14;
 }
 if ((i13 | 0) == 3) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i13 = i8 + 8 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i5 = i8 | 0;
  if ((i14 | 0) != 0) {
   i7 = HEAP32[i5 >> 2] | 0;
   i6 = i7 + (i14 << 2) | 0;
   i14 = i7;
   while (1) {
    i7 = HEAP32[i14 >> 2] | 0;
    if ((i7 | 0) != 0) {
     __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i7 | 0);
    }
    i14 = i14 + 4 | 0;
    if ((i14 | 0) == (i6 | 0)) {
     break;
    }
   }
   HEAP32[i13 >> 2] = 0;
  }
  i13 = HEAP32[i5 >> 2] | 0;
  if ((i13 | 0) != 0) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i13);
  }
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = i15 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i5 = i13 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i13;
 i13 = i2 + 4 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN7WebCore15CSSFontSelector11getFontDataERKNS_15FontDescriptionERKN3WTF12AtomicStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 if ((HEAP32[i2 + 24 >> 2] | 0) != 0) {
  i10 = __ZN7WebCore15CSSFontSelector11getFontFaceERKNS_15FontDescriptionERKN3WTF12AtomicStringE(i2, i3, i4) | 0;
  if ((i10 | 0) != 0) {
   __ZN7WebCore20CSSSegmentedFontFace11getFontDataERKNS_15FontDescriptionE(i1, i10, i3);
   STACKTOP = i5;
   return;
  }
  do {
   if ((HEAP32[i3 + 16 >> 2] & 229376 | 0) == 32768) {
    if ((HEAP32[i3 + 20 >> 2] & 16 | 0) != 0) {
     break;
    }
    __ZN7WebCoreL24fontDataForGenericFamilyEPNS_8DocumentERKNS_15FontDescriptionERKN3WTF12AtomicStringE(i8, HEAP32[i2 + 8 >> 2] | 0, i3, __ZN7WebCore21WebKitFontFamilyNames14standardFamilyE);
    i10 = i8 | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    HEAP32[i1 >> 2] = i11;
    STACKTOP = i5;
    return;
   }
  } while (0);
  __ZN7WebCoreL24fontDataForGenericFamilyEPNS_8DocumentERKNS_15FontDescriptionERKN3WTF12AtomicStringE(i9, HEAP32[i2 + 8 >> 2] | 0, i3, i4);
  i8 = i9 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i5;
  return;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if (!(__ZNK3WTF10StringImpl10startsWithEPKcjb(i9, H_BASE + 8 | 0, 8, 1) | 0)) {
    break;
   }
   __ZN7WebCoreL24fontDataForGenericFamilyEPNS_8DocumentERKNS_15FontDescriptionERKN3WTF12AtomicStringE(i6, HEAP32[i2 + 8 >> 2] | 0, i3, i4);
   i8 = i6 | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i1 >> 2] = i11;
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if ((HEAP32[i3 + 16 >> 2] & 229376 | 0) == 32768) {
   if ((HEAP32[i3 + 20 >> 2] & 16 | 0) != 0) {
    break;
   }
   __ZN7WebCoreL24fontDataForGenericFamilyEPNS_8DocumentERKNS_15FontDescriptionERKN3WTF12AtomicStringE(i7, HEAP32[i2 + 8 >> 2] | 0, i3, __ZN7WebCore21WebKitFontFamilyNames14standardFamilyE);
   i6 = i7 | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i1 >> 2] = i4;
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreL16compareFontFacesEPNS_11CSSFontFaceES1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = HEAP32[H_BASE + 424 >> 2] | 0;
 i6 = (i3 & 12 & i5 | 0) != 0;
 if (i6 ^ (i4 & 12 & i5 | 0) != 0) {
  i7 = i6;
  return i7 | 0;
 }
 do {
  if ((i5 & 8 | 0) != 0) {
   if ((HEAP8[i1 + 56 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP8[i2 + 56 | 0] & 1) != 0) {
    break;
   }
   if ((i3 & 8 | 0) == 0) {
    i8 = 0;
   } else {
    i8 = (i3 & 4 | 0) == 0;
   }
   if ((i4 & 8 | 0) == 0) {
    i9 = 0;
   } else {
    i9 = i4 >>> 2 & 1 ^ 1;
   }
   if ((i8 & 1 | 0) == (i9 | 0)) {
    break;
   } else {
    i7 = i8;
   }
   return i7 | 0;
  }
 } while (0);
 i8 = (i3 & 3 & i5 | 0) != 0;
 if (i8 ^ (i4 & 3 & i5 | 0) != 0) {
  i7 = i8;
  return i7 | 0;
 }
 do {
  if ((i5 & 2 | 0) != 0) {
   if ((HEAP8[i1 + 56 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP8[i2 + 56 | 0] & 1) != 0) {
    break;
   }
   if ((i3 & 2 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = (i3 & 1 | 0) == 0;
   }
   if ((i4 & 2 | 0) == 0) {
    i11 = 0;
   } else {
    i11 = i4 & 1 ^ 1;
   }
   if ((i10 & 1 | 0) == (i11 | 0)) {
    break;
   } else {
    i7 = i10;
   }
   return i7 | 0;
  }
 } while (0);
 if ((i4 & 8176 & i5 | 0) != 0) {
  i7 = 0;
  return i7 | 0;
 }
 if ((i3 & 8176 & i5 | 0) != 0) {
  i7 = 1;
  return i7 | 0;
 }
 if ((i5 & 16 | 0) == 0) {
  i10 = 0;
  i11 = 4;
  while (1) {
   i2 = i11 + 1 | 0;
   i1 = i10 + 1 | 0;
   if ((i5 & 1 << i2 | 0) == 0) {
    i10 = i1;
    i11 = i2;
   } else {
    i12 = i1;
    break;
   }
  }
 } else {
  i12 = 0;
 }
 i11 = 0;
 while (1) {
  if (i11 >>> 0 >= 8 >>> 0) {
   i7 = 0;
   i13 = 34;
   break;
  }
  i10 = HEAP32[H_BASE + 24 + (i12 << 5) + (i11 << 2) >> 2] | 0;
  if ((i10 & i4 | 0) != 0) {
   i7 = 0;
   i13 = 35;
   break;
  }
  if ((i10 & i3 | 0) == 0) {
   i11 = i11 + 1 | 0;
  } else {
   i7 = 1;
   i13 = 36;
   break;
  }
 }
 if ((i13 | 0) == 34) {
  return i7 | 0;
 } else if ((i13 | 0) == 35) {
  return i7 | 0;
 } else if ((i13 | 0) == 36) {
  return i7 | 0;
 }
 return 0;
}
function __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = -1640531527;
  i7 = i3 + 4 | 0;
  HEAP8[i7] = 0;
  i8 = i3 + 6 | 0;
  HEAP16[i8 >> 1] = 0;
  __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i3, i4, i5);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((HEAP8[i7] & 1) == 0) {
   i9 = i5;
  } else {
   i7 = (HEAPU16[i8 >> 1] | 0) + i5 | 0;
   i5 = i7 << 11 ^ i7;
   i9 = (i5 >>> 17) + i5 | 0;
  }
  i5 = i9 << 3 ^ i9;
  i9 = (i5 >>> 5) + i5 | 0;
  i5 = i9 << 2 ^ i9;
  i9 = (i5 >>> 15) + i5 | 0;
  i5 = (i9 << 10 ^ i9) & 16777215;
  i10 = (i5 | 0) == 0 ? 8388608 : i5;
  STACKTOP = i2;
  return i10 | 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = (i9 & 1 | 0) == 0;
 i7 = i9 >>> 1;
 if ((i7 | 0) == 0) {
  i11 = i5;
  i12 = -1640531527;
 } else {
  i9 = i7;
  i8 = i5;
  i6 = -1640531527;
  while (1) {
   i4 = i9 - 1 | 0;
   i3 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8] | 0) << 1) >> 1] | 0) + i6 | 0;
   i13 = i3 << 16 ^ i3 ^ (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8 + 1 | 0] | 0) << 1) >> 1] | 0) << 11;
   i14 = (i13 >>> 11) + i13 | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i9 = i4;
    i8 = i8 + 2 | 0;
    i6 = i14;
   }
  }
  i11 = i5 + (i7 << 1) | 0;
  i12 = i14;
 }
 if (i1) {
  i15 = i12;
 } else {
  i1 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i11] | 0) << 1) >> 1] | 0) + i12 | 0;
  i12 = i1 << 11 ^ i1;
  i15 = (i12 >>> 17) + i12 | 0;
 }
 i12 = i15 << 3 ^ i15;
 i15 = (i12 >>> 5) + i12 | 0;
 i12 = i15 << 2 ^ i15;
 i15 = (i12 >>> 15) + i12 | 0;
 i12 = (i15 << 10 ^ i15) & 16777215;
 i10 = (i12 | 0) == 0 ? 8388608 : i12;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore18FontSelectorClientENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore18FontSelectorClientES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore15CSSFontSelector19beginLoadTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 100 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 92 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 96 >> 2] = 0;
 i2 = i1 + 4 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i1 + 8 | 0;
 i5 = HEAP32[(HEAP32[i2 >> 2] | 0) + 340 >> 2] | 0;
 i6 = (i3 | 0) == 0;
 if (!i6) {
  i7 = 0;
  while (1) {
   i8 = i4 + (i7 << 2) | 0;
   __ZN7WebCore10CachedFont17beginLoadIfNeededEPNS_20CachedResourceLoaderE(HEAP32[i8 >> 2] | 0, i5);
   __ZN7WebCore20CachedResourceLoader21decrementRequestCountEPKNS_14CachedResourceE(i5, HEAP32[i8 >> 2] | 0);
   i7 = i7 + 1 | 0;
   if (i7 >>> 0 >= i3 >>> 0) {
    break;
   }
  }
 }
 __ZN7WebCore20CachedResourceLoader8loadDoneEPNS_14CachedResourceEb(i5, 0, 1);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = HEAP32[i5 + 332 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZN7WebCore11FrameLoader17checkLoadCompleteEv(i2 + 80 | 0);
  }
 } while (0);
 i5 = i1 + 4 | 0;
 i1 = i5 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 do {
  if ((i2 | 0) == 0) {
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  } else {
   HEAP32[i1 >> 2] = i2;
  }
 } while (0);
 if (!i6) {
  i6 = i4 + (i3 << 2) | 0;
  i3 = i4;
  while (1) {
   __ZN7WebCore24CachedResourceHandleBaseD2Ev(i3 | 0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
 }
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore15CSSFontSelector13clearDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 8 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 104 | 0);
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 340 >> 2] | 0;
 i4 = i1 + 92 | 0;
 i5 = i1 + 100 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = 0;
 } else {
  i7 = i4 | 0;
  i8 = 0;
  while (1) {
   __ZN7WebCore20CachedResourceLoader21decrementRequestCountEPKNS_14CachedResourceE(i3, HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 << 2) >> 2] | 0);
   i9 = i8 + 1 | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 < i10 >>> 0) {
    i8 = i9;
   } else {
    i6 = i10;
    break;
   }
  }
 }
 i8 = i1 + 96 | 0;
 do {
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   i1 = i4 | 0;
   if ((i6 | 0) != 0) {
    i7 = HEAP32[i1 >> 2] | 0;
    i3 = i7 + (i6 << 2) | 0;
    i10 = i7;
    while (1) {
     __ZN7WebCore24CachedResourceHandleBaseD2Ev(i10 | 0);
     i10 = i10 + 4 | 0;
     if ((i10 | 0) == (i3 | 0)) {
      break;
     }
    }
    HEAP32[i5 >> 2] = 0;
   }
   i3 = HEAP32[i1 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = (i3 & 1 | 0) == 0;
 i5 = i3 >>> 1;
 if ((i5 | 0) == 0) {
  i6 = i2;
 } else {
  i3 = i1 | 0;
  i7 = i5 << 1;
  i8 = i5;
  i5 = i2;
  while (1) {
   i9 = i8 - 1 | 0;
   i10 = _u_foldCase(HEAPU16[i5 >> 1] | 0, 0) | 0;
   i11 = _u_foldCase(HEAPU16[i5 + 2 >> 1] | 0, 0) | 0;
   i12 = (HEAP32[i3 >> 2] | 0) + (i10 & 65535) | 0;
   i10 = i12 ^ i11 << 11 & 134215680 ^ i12 << 16;
   HEAP32[i3 >> 2] = (i10 >>> 11) + i10;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i8 = i9;
    i5 = i5 + 4 | 0;
   }
  }
  i6 = i2 + (i7 << 1) | 0;
 }
 if (i4) {
  return;
 }
 i4 = _u_foldCase(HEAPU16[i6 >> 1] | 0, 0) | 0;
 i6 = i1 + 4 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  HEAP16[i1 + 6 >> 1] = i4;
  HEAP8[i6] = 1;
  return;
 } else {
  HEAP8[i6] = 0;
  i6 = i1 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) + (HEAPU16[i1 + 6 >> 1] | 0) | 0;
  i1 = i7 ^ i4 << 11 & 134215680 ^ i7 << 16;
  HEAP32[i6 >> 2] = (i1 >>> 11) + i1;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore11CSSFontFace12UnicodeRangeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
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
 i1 = i2 + (i6 << 3) | 0;
 if (i5 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i6;
   i8 = i7;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   i9 = i6 + 8 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 8 | 0;
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
function __ZN3WTF6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEEaSERKNS_10PassOwnPtrISB_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i4 + 4 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i2 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) == 0) {
       __ZN7WebCore20CSSSegmentedFontFaceD1Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i4);
 return i1 | 0;
}
function __ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 48 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 40 | 0;
 i5 = i4;
 if ((i2 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i2 << 2) | 0;
  i2 = i6;
  while (1) {
   i6 = HEAP32[i2 >> 2] | 0;
   if ((i6 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
   }
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 16 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15CSSFontSelector20beginLoadingFontSoonEPNS_10CachedFontE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 i4 = i1 + 92 | 0;
 i5 = i1 + 100 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == (HEAP32[i1 + 96 >> 2] | 0)) {
  i7 = i6 + 1 | 0;
  i8 = i7 + (i6 >>> 2) | 0;
  i9 = i8 >>> 0 > 16 >>> 0 ? i8 : 16;
  __ZN3WTF6VectorIN7WebCore20CachedResourceHandleINS1_10CachedFontEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i4, i9 >>> 0 > i7 >>> 0 ? i9 : i7);
  __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE((HEAP32[i4 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) | 0, i2 | 0);
 } else {
  __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE((HEAP32[i4 >> 2] | 0) + (i6 << 2) | 0, i2 | 0);
 }
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 __ZN7WebCore20CachedResourceLoader21incrementRequestCountEPKNS_14CachedResourceE(HEAP32[(HEAP32[i3 >> 2] | 0) + 340 >> 2] | 0, i2 | 0);
 __ZN7WebCore9TimerBase5startEdd(i1 + 104 | 0, +0, +0);
 return;
}
function __ZN3WTF6VectorIN7WebCore20CachedResourceHandleINS1_10CachedFontEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
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
   __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i7 | 0, i2);
   __ZN7WebCore24CachedResourceHandleBaseD2Ev(i2);
   i2 = i6 + 4 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
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
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 4 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 4;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEE5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 << 3) >> 2] | 0) != -1) {
      i5 = HEAP32[i2 + (i4 << 3) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      i6 = i5 | 0;
      i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i7 | 0) == 0) {
       __ZN7WebCore20CSSSegmentedFontFaceD1Ev(i5);
       __ZN3WTF8fastFreeEPv(i5);
       break;
      } else {
       HEAP32[i6 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF10PassOwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i1 + (i4 << 3) >> 2] | 0) != -1) {
      i5 = HEAP32[i1 + (i4 << 3) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      i6 = i5 | 0;
      i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i7 | 0) == 0) {
       __ZN7WebCore20CSSSegmentedFontFaceD1Ev(i5);
       __ZN3WTF8fastFreeEPv(i5);
       break;
      } else {
       HEAP32[i6 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i1 + (i4 << 3) >> 2] | 0) != -1) {
      i5 = HEAP32[i1 + (i4 << 3) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      i6 = i5 | 0;
      i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i7 | 0) == 0) {
       __ZN7WebCore20CSSSegmentedFontFaceD1Ev(i5);
       __ZN3WTF8fastFreeEPv(i5);
       break;
      } else {
       HEAP32[i6 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore15CSSFontSelector19getFallbackFontDataERKNS_15FontDescriptionEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i2 = __ZNK7WebCore8Document8settingsEv(i6) | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 264 | 0] & 4) == 0) {
    break;
   }
   i6 = __ZN7WebCore9fontCacheEv() | 0;
   __ZN7WebCore9FontCache17getCachedFontDataERKNS_15FontDescriptionERKN3WTF12AtomicStringEbNS0_12ShouldRetainE(i5, i6, i3, __ZNK7WebCore8Settings20pictographFontFamilyE11UScriptCode(i2, 0) | 0, 0, 0);
   i6 = i5 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i1 >> 2] = i7;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function runPostSets() {
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 2;
}
function __ZN7WebCore15CSSFontSelectorC2EPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 352;
 HEAP32[i1 + 8 >> 2] = i2;
 i2 = i1 + 104 | 0;
 _memset(i1 + 12 | 0, 0, 92) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 320;
 HEAP32[i1 + 148 >> 2] = i1;
 i2 = i1 + 152 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 4;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = (HEAP32[H_BASE + 432 >> 2] | 0) + 1 | 0;
 HEAP32[H_BASE + 432 >> 2] = i2;
 HEAP32[i1 + 160 >> 2] = i2;
 HEAP32[i1 + 164 >> 2] = 0;
 __ZN7WebCore9FontCache9addClientEPNS_12FontSelectorE(__ZN7WebCore9fontCacheEv() | 0, i1 | 0);
 return;
}
function __ZN7WebCore15CSSFontSelectorC1EPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 352;
 HEAP32[i1 + 8 >> 2] = i2;
 i2 = i1 + 104 | 0;
 _memset(i1 + 12 | 0, 0, 92) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 320;
 HEAP32[i1 + 148 >> 2] = i1;
 i2 = i1 + 152 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 4;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = (HEAP32[H_BASE + 432 >> 2] | 0) + 1 | 0;
 HEAP32[H_BASE + 432 >> 2] = i2;
 HEAP32[i1 + 160 >> 2] = i2;
 HEAP32[i1 + 164 >> 2] = 0;
 __ZN7WebCore9FontCache9addClientEPNS_12FontSelectorE(__ZN7WebCore9fontCacheEv() | 0, i1 | 0);
 return;
}
function __ZN7WebCore15CSSFontSelector32registerForInvalidationCallbacksEPNS_18FontSelectorClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore18FontSelectorClientES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 72 | 0, i4, i4);
 STACKTOP = i3;
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
function __ZN7WebCore5TimerINS_15CSSFontSelectorEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 15](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 15](i4, i1);
  return;
 }
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
function __ZN7WebCore15CSSFontSelector34unregisterForInvalidationCallbacksEPNS_18FontSelectorClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore18FontSelectorClientENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 72 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZN7WebCore15CSSFontSelector21fallbackFontDataCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = __ZNK7WebCore8Document8settingsEv(i2) | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAPU8[i1 + 264 | 0] | 0) >>> 2 & 1;
 return i3 | 0;
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
function __ZN7WebCore15CSSFontSelector20fontCacheInvalidatedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15CSSFontSelector29dispatchInvalidationCallbacksEv(i1);
 return;
}
function __ZN7WebCore15CSSFontSelector10fontLoadedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15CSSFontSelector29dispatchInvalidationCallbacksEv(i1);
 return;
}
function __ZN7WebCore5TimerINS_15CSSFontSelectorEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
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
function __ZN7WebCore15CSSFontSelectorD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15CSSFontSelectorD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN7WebCore5TimerINS_15CSSFontSelectorEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZNK7WebCore15CSSFontSelector7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 64 >> 2] | 0) == 0 | 0;
}
function __ZNK7WebCore15CSSFontSelector8uniqueIdEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 160 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZNK7WebCore15CSSFontSelector7versionEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 164 >> 2] | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
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
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_did = [b0,b0,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore5TimerINS_15CSSFontSelectorEED0Ev,b1,__ZN7WebCore15CSSFontSelectorD0Ev,b1,__ZN7WebCore15CSSFontSelectorD2Ev,b1,__ZN7WebCore5TimerINS_15CSSFontSelectorEED1Ev,b1,__ZN7WebCore15CSSFontSelector20fontCacheInvalidatedEv,b1,__ZN7WebCore5TimerINS_15CSSFontSelectorEE5firedEv,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore15CSSFontSelectorC2EPNS_8DocumentE,b2,__ZN7WebCore15CSSFontSelector19beginLoadTimerFiredEPNS_5TimerIS0_EE,b2,__ZN7WebCore15CSSFontSelector34unregisterForInvalidationCallbacksEPNS_18FontSelectorClientE,b2,__ZN7WebCore15CSSFontSelector32registerForInvalidationCallbacksEPNS_18FontSelectorClientE,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore15CSSFontSelector7versionEv,b3,__ZN7WebCore15CSSFontSelector21fallbackFontDataCountEv,b3,__ZNK7WebCore15CSSFontSelector8uniqueIdEv,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5,__ZNK7WebCore15CSSFontSelector17resolvesFamilyForERKNS_15FontDescriptionE,b5,__ZN7WebCoreL16compareFontFacesEPNS_11CSSFontFaceES1_,b5,b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore15CSSFontSelector19getFallbackFontDataERKNS_15FontDescriptionEj,b6,__ZN7WebCore15CSSFontSelector11getFontDataERKNS_15FontDescriptionERKN3WTF12AtomicStringE,b6,b6,b6];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore21WebKitFontFamilyNames14standardFamilyE": __ZN7WebCore21WebKitFontFamilyNames14standardFamilyE, "__ZN7WebCore21WebKitFontFamilyNames11serifFamilyE": __ZN7WebCore21WebKitFontFamilyNames11serifFamilyE, "__ZN7WebCore21WebKitFontFamilyNames15sansSerifFamilyE": __ZN7WebCore21WebKitFontFamilyNames15sansSerifFamilyE, "__ZN7WebCore21WebKitFontFamilyNames16pictographFamilyE": __ZN7WebCore21WebKitFontFamilyNames16pictographFamilyE, "__ZN7WebCore21WebKitFontFamilyNames13cursiveFamilyE": __ZN7WebCore21WebKitFontFamilyNames13cursiveFamilyE, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE, "__ZN7WebCore21WebKitFontFamilyNames13fantasyFamilyE": __ZN7WebCore21WebKitFontFamilyNames13fantasyFamilyE, "__ZSt7nothrow": __ZSt7nothrow, "__ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE": __ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEjDnEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_","_strlen","__ZN3WTF6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEED2Ev","__ZN3WTF9HashTableIPN7WebCore18FontSelectorClientES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore15CSSFontSelectorC2EPNS_8DocumentE","__ZN7WebCoreL24fontDataForGenericFamilyEPNS_8DocumentERKNS_15FontDescriptionERKN3WTF12AtomicStringE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj","_memset","__ZNK7WebCore15CSSFontSelector7isEmptyEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore15CSSFontSelector32registerForInvalidationCallbacksEPNS_18FontSelectorClientE","__ZN3WTF7HashSetIPN7WebCore18FontSelectorClientENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore15CSSFontSelector20beginLoadingFontSoonEPNS_10CachedFontE","__ZN3WTF6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEEaSERKNS_10PassOwnPtrISB_EE","__ZNK7WebCore15CSSFontSelector17resolvesFamilyForERKNS_15FontDescriptionE","__ZNK7WebCore15CSSFontSelector7versionEv","__ZN7WebCore5TimerINS_15CSSFontSelectorEE5firedEv","__ZNK7WebCore15CSSFontSelector8uniqueIdEv","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","__ZNSt3__115__inplace_mergeIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeEi","__ZN7WebCore15CSSFontSelectorD2Ev","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZN7WebCore15CSSFontSelector11getFontDataERKNS_15FontDescriptionERKN3WTF12AtomicStringE","__ZN7WebCore15CSSFontSelector10fontLoadedEv","_memcpy","__ZN7WebCore15CSSFontSelector29dispatchInvalidationCallbacksEv","__ZN3WTF10PassOwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEED2Ev","__ZN7WebCoreL16compareFontFacesEPNS_11CSSFontFaceES1_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E3addINS_17HashMapTranslatorISL_SF_EERKS1_NS_10PassOwnPtrISA_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_SC_SE_SF_SL_SI_EEEEOT0_OT1_","__ZN7WebCore15CSSFontSelector15addFontFaceRuleEPKNS_17StyleRuleFontFaceE","__ZN7WebCore15CSSFontSelector34unregisterForInvalidationCallbacksEPNS_18FontSelectorClientE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENSB_IS8_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENS_15CaseFoldingHashENS4_IS1_SF_SJ_NSB_IS1_EENSB_ISF_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SJ_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_SG_SI_SJ_SN_SK_EEEEOT0_OT1_","__ZN7WebCore15CSSFontSelectorD0Ev","__ZN3WTF6VectorIN7WebCore20CachedResourceHandleINS1_10CachedFontEEELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF6VectorIN7WebCore11CSSFontFace12UnicodeRangeELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENSB_IS8_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENS_15CaseFoldingHashENS4_IS1_SF_SJ_NSB_IS1_EENSB_ISF_EEE18KeyValuePairTraitsESK_E6rehashEiPSG_","__ZN3WTF6OwnPtrINS_7HashMapIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEENS_7IntHashIjEENS_10HashTraitsIjEENS8_IS5_EEEEE5clearEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E6rehashEiPSC_","__ZN7WebCore15CSSFontSelector21fallbackFontDataCountEv","__ZNSt3__113__stable_sortIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi","__ZNSt3__124__buffered_inplace_mergeIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E8reinsertEOSC_","__ZN3WTF9HashTableIPN7WebCore18FontSelectorClientES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore15CSSFontSelector19getFallbackFontDataERKNS_15FontDescriptionEj","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISC_EENS_15CaseFoldingHashENS_7HashMapIS1_SB_SF_NS_10HashTraitsIS1_EENSH_ISB_EEE18KeyValuePairTraitsESI_E3addINS_17HashMapTranslatorISL_SF_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_SC_SE_SF_SL_SI_EEEEOT0_OT1_","_memmove","__ZN7WebCore15CSSFontSelector11getFontFaceERKNS_15FontDescriptionERKN3WTF12AtomicStringE","__ZN7WebCore15CSSFontSelector19beginLoadTimerFiredEPNS_5TimerIS0_EE","__ZN3WTF10RefCountedIN7WebCore11CSSFontFaceEE5derefEv","__ZN7WebCore15CSSFontSelector13clearDocumentEv","__ZN7WebCore5TimerINS_15CSSFontSelectorEED0Ev","__ZN7WebCore15CSSFontSelector20fontCacheInvalidatedEv","__ZNSt3__118__stable_sort_moveIRPFbPN7WebCore11CSSFontFaceES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeE","__ZN7WebCore5TimerINS_15CSSFontSelectorEED1Ev","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore20CSSSegmentedFontFaceEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_"]

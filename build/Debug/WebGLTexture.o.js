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
H_BASE = parentModule["_malloc"](72 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 72;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12WebGLTextureC1EPNS_21WebGLRenderingContextE;
var __ZN7WebCore12WebGLTextureD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var __ZTVN7WebCore12WebGLTextureE=(H_BASE+8)|0;
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
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
function __ZN7WebCore12WebGLTexture6updateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i2 = i1 + 56 | 0;
 HEAP8[i2] = 0;
 i3 = i1 + 44 | 0;
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP8[i1 + 57 | 0] = 1;
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = 0;
 while (1) {
  if ((HEAP32[i5 + (i6 * 12 & -1) + 8 >> 2] | 0) == 0) {
   i7 = 5;
   break;
  }
  i8 = HEAP32[i5 + (i6 * 12 & -1) >> 2] | 0;
  i9 = HEAP32[i8 + 8 >> 2] | 0;
  i10 = HEAP32[i8 + 12 >> 2] | 0;
  if (!((i9 | 0) == 0 | (i10 | 0) == 0)) {
   if ((i9 - 1 & i9 | 0) != 0) {
    i7 = 9;
    break;
   }
   if ((i10 - 1 & i10 | 0) != 0) {
    i7 = 9;
    break;
   }
  }
  i10 = i6 + 1 | 0;
  if (i10 >>> 0 < i4 >>> 0) {
   i6 = i10;
  } else {
   i11 = 0;
   break;
  }
 }
 if ((i7 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i7 | 0) == 9) {
  HEAP8[i2] = 1;
  i11 = 1;
 }
 i2 = i1 + 57 | 0;
 HEAP8[i2] = 1;
 if ((i4 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i6 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = i6 | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 i9 = i10 + 8 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i12 = i10 + 12 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = (i8 | 0) < (i13 | 0) ? i13 : i8;
 do {
  if ((i14 | 0) < 1) {
   i7 = 39;
  } else {
   i8 = i14 >> 16;
   i13 = (i8 | 0) == 0;
   i15 = i13 ? i14 : i8;
   i8 = i15 >> 8;
   i16 = (i8 | 0) == 0;
   i17 = i16 ? i15 : i8;
   i8 = i17 >> 4;
   i15 = (i8 | 0) == 0;
   i18 = i15 ? i17 : i8;
   i8 = i18 >> 2;
   i17 = (i8 | 0) == 0;
   i19 = ((i16 ? 0 : 8) | (i13 ? 0 : 16) | (i15 ? 0 : 4) | (i17 ? 0 : 2) | (i17 ? i18 : i8) >>> 0 > 1 >>> 0) + 1 | 0;
   i8 = i10 + 4 | 0;
   i18 = i10 + 16 | 0;
   i17 = 0;
   i15 = 1;
   L24 : while (1) {
    if ((i15 & 1) == 0) {
     i20 = i15;
     i7 = 40;
     break;
    }
    i13 = HEAP32[i6 + (i17 * 12 & -1) + 8 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i7 = 20;
     break;
    }
    i16 = HEAP32[i6 + (i17 * 12 & -1) >> 2] | 0;
    if ((HEAP8[i16 | 0] & 1) == 0) {
     i7 = 26;
     break;
    }
    i21 = HEAP32[i16 + 8 >> 2] | 0;
    if ((i21 | 0) != (HEAP32[i9 >> 2] | 0)) {
     i7 = 26;
     break;
    }
    i22 = HEAP32[i16 + 12 >> 2] | 0;
    if ((i22 | 0) != (HEAP32[i12 >> 2] | 0)) {
     i7 = 26;
     break;
    }
    i23 = HEAP32[i16 + 4 >> 2] | 0;
    if ((i23 | 0) != (HEAP32[i8 >> 2] | 0)) {
     i7 = 26;
     break;
    }
    i24 = HEAP32[i16 + 16 >> 2] | 0;
    if ((i24 | 0) == (HEAP32[i18 >> 2] | 0)) {
     i25 = 1;
     i26 = i22;
     i27 = i21;
    } else {
     i7 = 26;
     break;
    }
    while (1) {
     if ((i25 | 0) >= (i19 | 0)) {
      i28 = i15;
      break;
     }
     i21 = i27 >> 1;
     i22 = (i21 | 0) > 1 ? i21 : 1;
     i21 = i26 >> 1;
     i29 = (i21 | 0) > 1 ? i21 : 1;
     if (i4 >>> 0 <= i17 >>> 0) {
      i7 = 29;
      break L24;
     }
     if (i13 >>> 0 <= i25 >>> 0) {
      i7 = 31;
      break L24;
     }
     if ((HEAP8[i16 + (i25 * 20 & -1) | 0] & 1) == 0) {
      i7 = 37;
      break;
     }
     if ((HEAP32[i16 + (i25 * 20 & -1) + 8 >> 2] | 0) != (i22 | 0)) {
      i7 = 37;
      break;
     }
     if ((HEAP32[i16 + (i25 * 20 & -1) + 12 >> 2] | 0) != (i29 | 0)) {
      i7 = 37;
      break;
     }
     if ((HEAP32[i16 + (i25 * 20 & -1) + 4 >> 2] | 0) != (i23 | 0)) {
      i7 = 37;
      break;
     }
     if ((HEAP32[i16 + (i25 * 20 & -1) + 16 >> 2] | 0) == (i24 | 0)) {
      i25 = i25 + 1 | 0;
      i26 = i29;
      i27 = i22;
     } else {
      i7 = 37;
      break;
     }
    }
    if ((i7 | 0) == 37) {
     i7 = 0;
     HEAP8[i2] = 0;
     i28 = 0;
    }
    i24 = i17 + 1 | 0;
    if (i24 >>> 0 < i4 >>> 0) {
     i17 = i24;
     i15 = i28;
    } else {
     i20 = i28;
     i7 = 40;
     break;
    }
   }
   if ((i7 | 0) == 20) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i7 | 0) == 31) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i7 | 0) == 26) {
    i7 = 39;
    break;
   } else if ((i7 | 0) == 29) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i7 | 0) == 40) {
    i15 = i1 + 60 | 0;
    HEAP8[i15] = 0;
    i17 = (i20 & 1) == 0;
    if (i17) {
     i30 = i15;
     i7 = 41;
     break;
    }
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else {
     HEAP8[i15] = (HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] | 0) == 5126 | 0;
     i31 = i17;
     break;
    }
   }
  }
 } while (0);
 if ((i7 | 0) == 39) {
  HEAP8[i2] = 0;
  i2 = i1 + 60 | 0;
  HEAP8[i2] = 0;
  i30 = i2;
  i7 = 41;
 }
 L57 : do {
  if ((i7 | 0) == 41) {
   i2 = 0;
   while (1) {
    if (i2 >>> 0 >= i4 >>> 0) {
     i31 = 1;
     break L57;
    }
    if ((HEAP32[i6 + (i2 * 12 & -1) + 8 >> 2] | 0) == 0) {
     i7 = 47;
     break;
    }
    if ((HEAP32[(HEAP32[i6 + (i2 * 12 & -1) >> 2] | 0) + 16 >> 2] | 0) == 5126) {
     i7 = 49;
     break;
    } else {
     i2 = i2 + 1 | 0;
    }
   }
   if ((i7 | 0) == 47) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i7 | 0) == 49) {
    HEAP8[i30] = 1;
    i31 = 1;
    break;
   }
  }
 } while (0);
 i30 = i1 + 58 | 0;
 HEAP8[i30] = 0;
 L67 : do {
  if (i11 << 24 >> 24 != 0) {
   do {
    if (((HEAP32[i1 + 28 >> 2] | 0) - 9728 | 0) >>> 0 < 2 >>> 0) {
     if ((HEAP32[i1 + 36 >> 2] | 0) != 33071) {
      break;
     }
     if ((HEAP32[i1 + 40 >> 2] | 0) == 33071) {
      break L67;
     }
    }
   } while (0);
   HEAP8[i30] = 1;
  }
 } while (0);
 if (!i31) {
  return;
 }
 if (((HEAP32[i1 + 28 >> 2] | 0) - 9728 | 0) >>> 0 < 2 >>> 0) {
  return;
 }
 HEAP8[i30] = 1;
 return;
}
function __ZN7WebCore12WebGLTexture23generateMipmapLevelInfoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 24 >> 2] | 0) == 0) {
  return;
 }
 if (!(__ZN7WebCore12WebGLTexture18canGenerateMipmapsEv(i1) | 0)) {
  return;
 }
 i2 = i1 + 57 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  i3 = i1 + 52 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  L12 : do {
   if ((i4 | 0) != 0) {
    i5 = i1 + 44 | 0;
    i6 = 0;
    i7 = i4;
    L14 : while (1) {
     i8 = HEAP32[i5 >> 2] | 0;
     if ((HEAP32[i8 + (i6 * 12 & -1) + 8 >> 2] | 0) == 0) {
      i9 = 8;
      break;
     }
     i10 = HEAP32[i8 + (i6 * 12 & -1) >> 2] | 0;
     i8 = HEAP32[i10 + 8 >> 2] | 0;
     i11 = HEAP32[i10 + 12 >> 2] | 0;
     i12 = (i8 | 0) < (i11 | 0) ? i11 : i8;
     do {
      if ((i12 | 0) < 1) {
       i13 = i7;
      } else {
       i14 = i12 >> 16;
       i15 = (i14 | 0) == 0;
       i16 = i15 ? i12 : i14;
       i14 = i16 >> 8;
       i17 = (i14 | 0) == 0;
       i18 = i17 ? i16 : i14;
       i14 = i18 >> 4;
       i16 = (i14 | 0) == 0;
       i19 = i16 ? i18 : i14;
       i14 = i19 >> 2;
       i18 = (i14 | 0) == 0;
       i20 = ((i17 ? 0 : 8) | (i15 ? 0 : 16) | (i16 ? 0 : 4) | (i18 ? 0 : 2) | (i18 ? i19 : i14) >>> 0 > 1 >>> 0) + 1 | 0;
       if (i20 >>> 0 <= 1 >>> 0) {
        i13 = i7;
        break;
       }
       i14 = i10 + 4 | 0;
       i19 = i10 + 16 | 0;
       i18 = i11;
       i16 = i8;
       i15 = 1;
       i17 = i7;
       while (1) {
        i21 = i16 >> 1;
        i22 = (i21 | 0) > 1 ? i21 : 1;
        i21 = i18 >> 1;
        i23 = (i21 | 0) > 1 ? i21 : 1;
        if (i17 >>> 0 <= i6 >>> 0) {
         i9 = 13;
         break L14;
        }
        i21 = HEAP32[i5 >> 2] | 0;
        if ((HEAP32[i21 + (i6 * 12 & -1) + 8 >> 2] | 0) >>> 0 <= i15 >>> 0) {
         i9 = 15;
         break L14;
        }
        i24 = HEAP32[i21 + (i6 * 12 & -1) >> 2] | 0;
        i21 = HEAP32[i14 >> 2] | 0;
        i25 = HEAP32[i19 >> 2] | 0;
        HEAP8[i24 + (i15 * 20 & -1) | 0] = 1;
        HEAP32[i24 + (i15 * 20 & -1) + 4 >> 2] = i21;
        HEAP32[i24 + (i15 * 20 & -1) + 8 >> 2] = i22;
        HEAP32[i24 + (i15 * 20 & -1) + 12 >> 2] = i23;
        HEAP32[i24 + (i15 * 20 & -1) + 16 >> 2] = i25;
        i25 = i15 + 1 | 0;
        i24 = HEAP32[i3 >> 2] | 0;
        if ((i25 | 0) < (i20 | 0)) {
         i18 = i23;
         i16 = i22;
         i15 = i25;
         i17 = i24;
        } else {
         i13 = i24;
         break;
        }
       }
      }
     } while (0);
     i8 = i6 + 1 | 0;
     if (i8 >>> 0 < i13 >>> 0) {
      i6 = i8;
      i7 = i13;
     } else {
      break L12;
     }
    }
    if ((i9 | 0) == 13) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i9 | 0) == 8) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i9 | 0) == 15) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   }
  } while (0);
  HEAP8[i2] = 1;
 }
 HEAP8[i1 + 58 | 0] = 0;
 return;
}
function __ZN7WebCore12WebGLTexture9setTargetEji(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 i4 = i1 + 24 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  return;
 }
 if ((i2 | 0) == 3553) {
  HEAP32[i4 >> 2] = 3553;
  i5 = i1 + 44 | 0;
  __ZN3WTF6VectorINS0_IN7WebCore12WebGLTexture9LevelInfoELj0ENS_15CrashOnOverflowEEELj0ES4_E6resizeEj(i5, 1);
  if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i6 + 8 | 0;
  do {
   if ((HEAP32[i5 >> 2] | 0) >>> 0 < i3 >>> 0) {
    if ((HEAP32[i6 + 4 >> 2] | 0) >>> 0 < i3 >>> 0) {
     __ZN3WTF6VectorIN7WebCore12WebGLTexture9LevelInfoELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i3);
    }
    i7 = HEAP32[i6 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    i8 = HEAP32[i5 >> 2] | 0;
    i9 = i7 + (i3 * 20 & -1) | 0;
    if ((i8 | 0) == (i3 | 0)) {
     break;
    }
    i10 = i7 + (i8 * 20 & -1) | 0;
    while (1) {
     HEAP8[i10 | 0] = 0;
     _memset(i10 + 4 | 0, 0, 16) | 0;
     i10 = i10 + 20 | 0;
     if ((i10 | 0) == (i9 | 0)) {
      break;
     }
    }
   }
  } while (0);
  HEAP32[i5 >> 2] = i3;
  return;
 } else if ((i2 | 0) == 34067) {
  HEAP32[i4 >> 2] = 34067;
  i4 = i1 + 44 | 0;
  __ZN3WTF6VectorINS0_IN7WebCore12WebGLTexture9LevelInfoELj0ENS_15CrashOnOverflowEEELj0ES4_E6resizeEj(i4, 6);
  i2 = i1 + 52 | 0;
  i1 = i4 | 0;
  i4 = 0;
  while (1) {
   if ((HEAP32[i2 >> 2] | 0) >>> 0 <= i4 >>> 0) {
    i11 = 16;
    break;
   }
   i5 = HEAP32[i1 >> 2] | 0;
   i6 = i5 + (i4 * 12 & -1) | 0;
   i9 = i5 + (i4 * 12 & -1) + 8 | 0;
   do {
    if ((HEAP32[i9 >> 2] | 0) >>> 0 < i3 >>> 0) {
     if ((HEAP32[i5 + (i4 * 12 & -1) + 4 >> 2] | 0) >>> 0 < i3 >>> 0) {
      __ZN3WTF6VectorIN7WebCore12WebGLTexture9LevelInfoELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i3);
     }
     i10 = HEAP32[i6 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     i8 = HEAP32[i9 >> 2] | 0;
     i7 = i10 + (i3 * 20 & -1) | 0;
     if ((i8 | 0) == (i3 | 0)) {
      break;
     }
     i12 = i10 + (i8 * 20 & -1) | 0;
     while (1) {
      HEAP8[i12 | 0] = 0;
      _memset(i12 + 4 | 0, 0, 16) | 0;
      i12 = i12 + 20 | 0;
      if ((i12 | 0) == (i7 | 0)) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i9 >> 2] = i3;
   i6 = i4 + 1 | 0;
   if ((i6 | 0) < 6) {
    i4 = i6;
   } else {
    i11 = 30;
    break;
   }
  }
  if ((i11 | 0) == 16) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i11 | 0) == 30) {
   return;
  }
 } else {
  return;
 }
}
function __ZN7WebCore12WebGLTexture18canGenerateMipmapsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
   if ((HEAP8[i1 + 56 | 0] & 1) == 0) {
    break;
   } else {
    i2 = 0;
   }
   return i2 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 if ((HEAP32[i4 + 8 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = i1 + 12 | 0;
 i7 = i1 + 4 | 0;
 i8 = i1 + 16 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i3 >>> 0) {
   i2 = 1;
   i9 = 17;
   break;
  }
  if ((HEAP32[i4 + (i1 * 12 & -1) + 8 >> 2] | 0) == 0) {
   i9 = 10;
   break;
  }
  i10 = HEAP32[i4 + (i1 * 12 & -1) >> 2] | 0;
  if ((HEAP8[i10 | 0] & 1) == 0) {
   i2 = 0;
   i9 = 18;
   break;
  }
  if ((HEAP32[i10 + 8 >> 2] | 0) != (HEAP32[i5 >> 2] | 0)) {
   i2 = 0;
   i9 = 19;
   break;
  }
  if ((HEAP32[i10 + 12 >> 2] | 0) != (HEAP32[i6 >> 2] | 0)) {
   i2 = 0;
   i9 = 20;
   break;
  }
  if ((HEAP32[i10 + 4 >> 2] | 0) != (HEAP32[i7 >> 2] | 0)) {
   i2 = 0;
   i9 = 21;
   break;
  }
  if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
   i1 = i1 + 1 | 0;
  } else {
   i2 = 0;
   i9 = 22;
   break;
  }
 }
 if ((i9 | 0) == 10) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i9 | 0) == 17) {
  return i2 | 0;
 } else if ((i9 | 0) == 18) {
  return i2 | 0;
 } else if ((i9 | 0) == 19) {
  return i2 | 0;
 } else if ((i9 | 0) == 20) {
  return i2 | 0;
 } else if ((i9 | 0) == 21) {
  return i2 | 0;
 } else if ((i9 | 0) == 22) {
  return i2 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorINS0_IN7WebCore12WebGLTexture9LevelInfoELj0ENS_15CrashOnOverflowEEELj0ES4_E15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 12 & -1) | 0;
 if (i2 >>> 0 > 357913941 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 12 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 12 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i7 | 0;
   HEAP32[i2 >> 2] = 0;
   i8 = i7 + 4 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i7 + 8 | 0;
   HEAP32[i9 >> 2] = 0;
   i10 = i6 + 8 | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = 0;
   i9 = i6 | 0;
   i11 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i11;
   i11 = i6 + 4 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i2;
   if ((HEAP32[i10 >> 2] | 0) != 0) {
    HEAP32[i10 >> 2] = 0;
   }
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i11 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10 | 0);
   }
   i10 = i6 + 12 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i10;
    i7 = i7 + 12 | 0;
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
function __ZNK7WebCore12WebGLTexture17getInternalFormatEji(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 L4 : do {
  if ((i5 | 0) == 3553) {
   if ((i2 | 0) == 3553) {
    i6 = 0;
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  } else if ((i5 | 0) == 34067) {
   switch (i2 | 0) {
   case 34070:
    {
     i6 = 1;
     break L4;
     break;
    }
   case 34071:
    {
     i6 = 2;
     break L4;
     break;
    }
   case 34072:
    {
     i6 = 3;
     break L4;
     break;
    }
   case 34073:
    {
     i6 = 4;
     break L4;
     break;
    }
   case 34074:
    {
     i6 = 5;
     break L4;
     break;
    }
   case 34069:
    {
     i6 = 0;
     break L4;
     break;
    }
   default:
    {
     i4 = 0;
     return i4 | 0;
    }
   }
  } else {
   i4 = 0;
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i6 | 0) >= (i2 | 0) | (i3 | 0) < 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (i2 >>> 0 <= i6 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[i2 + (i6 * 12 & -1) + 8 >> 2] | 0;
 if ((i1 | 0) <= (i3 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (i1 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i1 = HEAP32[i2 + (i6 * 12 & -1) >> 2] | 0;
 if ((i1 + (i3 * 20 & -1) | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = HEAP32[i1 + (i3 * 20 & -1) + 4 >> 2] | 0;
 return i4 | 0;
}
function __ZN3WTF6VectorINS0_IN7WebCore12WebGLTexture9LevelInfoELj0ENS_15CrashOnOverflowEEELj0ES4_E6resizeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i4 >>> 0 < i2 >>> 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  if (i5 >>> 0 < i2 >>> 0) {
   i6 = i5 + 1 + (i5 >>> 2) | 0;
   i5 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
   __ZN3WTF6VectorINS0_IN7WebCore12WebGLTexture9LevelInfoELj0ENS_15CrashOnOverflowEEELj0ES4_E15reserveCapacityEj(i1, i5 >>> 0 > i2 >>> 0 ? i5 : i2);
  }
  i5 = HEAP32[i1 >> 2] | 0;
  if ((i5 | 0) == 0) {
   HEAP32[i3 >> 2] = i2;
   return;
  }
  i6 = HEAP32[i3 >> 2] | 0;
  i7 = i5 + (i2 * 12 & -1) | 0;
  if ((i6 | 0) == (i2 | 0)) {
   HEAP32[i3 >> 2] = i2;
   return;
  }
  i8 = i5 + (i6 * 12 & -1) | 0;
  while (1) {
   HEAP32[i8 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   HEAP32[i8 + 8 >> 2] = 0;
   i8 = i8 + 12 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = i2;
  return;
 } else {
  i7 = HEAP32[i1 >> 2] | 0;
  i1 = i7 + (i4 * 12 & -1) | 0;
  if ((i4 | 0) == (i2 | 0)) {
   HEAP32[i3 >> 2] = i2;
   return;
  }
  i4 = i7 + (i2 * 12 & -1) | 0;
  while (1) {
   i7 = i4 + 8 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
   }
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i4 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i8 | 0);
   }
   i4 = i4 + 12 | 0;
   if ((i4 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = i2;
  return;
 }
}
function __ZNK7WebCore12WebGLTexture9getHeightEji(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 L4 : do {
  if ((i5 | 0) == 3553) {
   if ((i2 | 0) == 3553) {
    i6 = 0;
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  } else if ((i5 | 0) == 34067) {
   switch (i2 | 0) {
   case 34071:
    {
     i6 = 2;
     break L4;
     break;
    }
   case 34070:
    {
     i6 = 1;
     break L4;
     break;
    }
   case 34072:
    {
     i6 = 3;
     break L4;
     break;
    }
   case 34073:
    {
     i6 = 4;
     break L4;
     break;
    }
   case 34074:
    {
     i6 = 5;
     break L4;
     break;
    }
   case 34069:
    {
     i6 = 0;
     break L4;
     break;
    }
   default:
    {
     i4 = 0;
     return i4 | 0;
    }
   }
  } else {
   i4 = 0;
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i6 | 0) >= (i2 | 0) | (i3 | 0) < 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (i2 >>> 0 <= i6 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[i2 + (i6 * 12 & -1) + 8 >> 2] | 0;
 if ((i1 | 0) <= (i3 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (i1 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i1 = HEAP32[i2 + (i6 * 12 & -1) >> 2] | 0;
 if ((i1 + (i3 * 20 & -1) | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = HEAP32[i1 + (i3 * 20 & -1) + 12 >> 2] | 0;
 return i4 | 0;
}
function __ZNK7WebCore12WebGLTexture8getWidthEji(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 L4 : do {
  if ((i5 | 0) == 3553) {
   if ((i2 | 0) == 3553) {
    i6 = 0;
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  } else if ((i5 | 0) == 34067) {
   switch (i2 | 0) {
   case 34074:
    {
     i6 = 5;
     break L4;
     break;
    }
   case 34071:
    {
     i6 = 2;
     break L4;
     break;
    }
   case 34069:
    {
     i6 = 0;
     break L4;
     break;
    }
   case 34072:
    {
     i6 = 3;
     break L4;
     break;
    }
   case 34073:
    {
     i6 = 4;
     break L4;
     break;
    }
   case 34070:
    {
     i6 = 1;
     break L4;
     break;
    }
   default:
    {
     i4 = 0;
     return i4 | 0;
    }
   }
  } else {
   i4 = 0;
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i6 | 0) >= (i2 | 0) | (i3 | 0) < 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (i2 >>> 0 <= i6 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[i2 + (i6 * 12 & -1) + 8 >> 2] | 0;
 if ((i1 | 0) <= (i3 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (i1 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i1 = HEAP32[i2 + (i6 * 12 & -1) >> 2] | 0;
 if ((i1 + (i3 * 20 & -1) | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = HEAP32[i1 + (i3 * 20 & -1) + 8 >> 2] | 0;
 return i4 | 0;
}
function __ZNK7WebCore12WebGLTexture7getTypeEji(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 L4 : do {
  if ((i5 | 0) == 3553) {
   if ((i2 | 0) == 3553) {
    i6 = 0;
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  } else if ((i5 | 0) == 34067) {
   switch (i2 | 0) {
   case 34071:
    {
     i6 = 2;
     break L4;
     break;
    }
   case 34072:
    {
     i6 = 3;
     break L4;
     break;
    }
   case 34073:
    {
     i6 = 4;
     break L4;
     break;
    }
   case 34074:
    {
     i6 = 5;
     break L4;
     break;
    }
   case 34069:
    {
     i6 = 0;
     break L4;
     break;
    }
   case 34070:
    {
     i6 = 1;
     break L4;
     break;
    }
   default:
    {
     i4 = 0;
     return i4 | 0;
    }
   }
  } else {
   i4 = 0;
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i6 | 0) >= (i2 | 0) | (i3 | 0) < 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (i2 >>> 0 <= i6 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[i2 + (i6 * 12 & -1) + 8 >> 2] | 0;
 if ((i1 | 0) <= (i3 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (i1 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i1 = HEAP32[i2 + (i6 * 12 & -1) >> 2] | 0;
 if ((i1 + (i3 * 20 & -1) | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = HEAP32[i1 + (i3 * 20 & -1) + 16 >> 2] | 0;
 return i4 | 0;
}
function __ZNK7WebCore12WebGLTexture7isValidEji(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 L4 : do {
  if ((i5 | 0) == 3553) {
   if ((i2 | 0) == 3553) {
    i6 = 0;
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  } else if ((i5 | 0) == 34067) {
   switch (i2 | 0) {
   case 34069:
    {
     i6 = 0;
     break L4;
     break;
    }
   case 34072:
    {
     i6 = 3;
     break L4;
     break;
    }
   case 34070:
    {
     i6 = 1;
     break L4;
     break;
    }
   case 34074:
    {
     i6 = 5;
     break L4;
     break;
    }
   case 34071:
    {
     i6 = 2;
     break L4;
     break;
    }
   case 34073:
    {
     i6 = 4;
     break L4;
     break;
    }
   default:
    {
     i4 = 0;
     return i4 | 0;
    }
   }
  } else {
   i4 = 0;
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i6 | 0) >= (i2 | 0) | (i3 | 0) < 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (i2 >>> 0 <= i6 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[i2 + (i6 * 12 & -1) + 8 >> 2] | 0;
 if ((i1 | 0) <= (i3 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (i1 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i1 = (HEAP32[i2 + (i6 * 12 & -1) >> 2] | 0) + (i3 * 20 & -1) | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP8[i1 | 0] & 1) != 0;
 return i4 | 0;
}
function __ZN7WebCore12WebGLTexture12setLevelInfoEjijiij(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 i8 = HEAP32[i1 + 24 >> 2] | 0;
 L4 : do {
  if ((i8 | 0) == 3553) {
   if ((i2 | 0) == 3553) {
    i9 = 0;
    break;
   }
   return;
  } else if ((i8 | 0) == 34067) {
   switch (i2 | 0) {
   case 34070:
    {
     i9 = 1;
     break L4;
     break;
    }
   case 34071:
    {
     i9 = 2;
     break L4;
     break;
    }
   case 34072:
    {
     i9 = 3;
     break L4;
     break;
    }
   case 34073:
    {
     i9 = 4;
     break L4;
     break;
    }
   case 34074:
    {
     i9 = 5;
     break L4;
     break;
    }
   case 34069:
    {
     i9 = 0;
     break L4;
     break;
    }
   default:
    {
     return;
    }
   }
  } else {
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 52 >> 2] | 0) >>> 0 <= i9 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((HEAP32[i2 + (i9 * 12 & -1) + 8 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = HEAP32[i2 + (i9 * 12 & -1) >> 2] | 0;
 HEAP8[i8 + (i3 * 20 & -1) | 0] = 1;
 HEAP32[i8 + (i3 * 20 & -1) + 4 >> 2] = i4;
 HEAP32[i8 + (i3 * 20 & -1) + 8 >> 2] = i5;
 HEAP32[i8 + (i3 * 20 & -1) + 12 >> 2] = i6;
 HEAP32[i8 + (i3 * 20 & -1) + 16 >> 2] = i7;
 __ZN7WebCore12WebGLTexture6updateEv(i1);
 return;
}
function __ZNK7WebCore12WebGLTexture12getLevelInfoEji(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 L4 : do {
  if ((i5 | 0) == 3553) {
   if ((i2 | 0) == 3553) {
    i6 = 0;
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  } else if ((i5 | 0) == 34067) {
   switch (i2 | 0) {
   case 34069:
    {
     i6 = 0;
     break L4;
     break;
    }
   case 34074:
    {
     i6 = 5;
     break L4;
     break;
    }
   case 34073:
    {
     i6 = 4;
     break L4;
     break;
    }
   case 34070:
    {
     i6 = 1;
     break L4;
     break;
    }
   case 34071:
    {
     i6 = 2;
     break L4;
     break;
    }
   case 34072:
    {
     i6 = 3;
     break L4;
     break;
    }
   default:
    {
     i4 = 0;
     return i4 | 0;
    }
   }
  } else {
   i4 = 0;
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i6 | 0) >= (i2 | 0) | (i3 | 0) < 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (i2 >>> 0 <= i6 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[i2 + (i6 * 12 & -1) + 8 >> 2] | 0;
 if ((i1 | 0) <= (i3 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (i1 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i4 = (HEAP32[i2 + (i6 * 12 & -1) >> 2] | 0) + (i3 * 20 & -1) | 0;
 return i4 | 0;
}
function __ZN3WTF6VectorIN7WebCore12WebGLTexture9LevelInfoELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 i1 = i2 + (i6 * 20 & -1) | 0;
 if (i5 >>> 0 > 214748364 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 * 20 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 20 & -1;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i7 | 0;
   i8 = i6 | 0;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i5 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   HEAP32[i5 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
   i8 = i6 + 20 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 20 | 0;
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
 __ZN3WTF8fastFreeEPv(i2 | 0);
 return;
}
function __ZN7WebCore12WebGLTextureD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 __ZN7WebCore11WebGLObject12deleteObjectEPNS_17GraphicsContext3DE(i1 | 0, 0);
 i2 = i1 + 52 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 44 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 12 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 + 8 | 0;
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i3 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i7 | 0);
   }
   i3 = i3 + 12 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore17WebGLSharedObjectD2Ev(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1 | 0;
 __ZN7WebCore17WebGLSharedObjectD2Ev(i8);
 return;
}
function __ZN7WebCore12WebGLTextureD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 __ZN7WebCore11WebGLObject12deleteObjectEPNS_17GraphicsContext3DE(i1 | 0, 0);
 i2 = i1 + 52 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 44 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 12 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 + 8 | 0;
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i3 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i7 | 0);
   }
   i3 = i3 + 12 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore17WebGLSharedObjectD2Ev(i8);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1 | 0;
 __ZN7WebCore17WebGLSharedObjectD2Ev(i8);
 return;
}
function __ZN7WebCore12WebGLTexture13setParameterfEjf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 24 >> 2] | 0) == 0) {
  return;
 }
 i4 = ~~d3;
 L7 : do {
  if ((i2 | 0) == 10240) {
   if ((i4 - 9728 | 0) >>> 0 >= 2 >>> 0) {
    break;
   }
   HEAP32[i1 + 32 >> 2] = i4;
  } else if ((i2 | 0) == 10241) {
   switch (i4 | 0) {
   case 9728:
   case 9729:
   case 9984:
   case 9985:
   case 9986:
   case 9987:
    {
     break;
    }
   default:
    {
     break L7;
    }
   }
   HEAP32[i1 + 28 >> 2] = i4;
  } else if ((i2 | 0) == 10242) {
   if (!((i4 | 0) == 33071 | (i4 | 0) == 33648 | (i4 | 0) == 10497)) {
    break;
   }
   HEAP32[i1 + 36 >> 2] = i4;
  } else if ((i2 | 0) == 10243) {
   if (!((i4 | 0) == 33071 | (i4 | 0) == 33648 | (i4 | 0) == 10497)) {
    break;
   }
   HEAP32[i1 + 40 >> 2] = i4;
  } else {
   return;
  }
 } while (0);
 __ZN7WebCore12WebGLTexture6updateEv(i1);
 return;
}
function __ZN7WebCore12WebGLTexture13setParameteriEji(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 24 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i2 | 0) == 10242) {
   if (!((i3 | 0) == 33071 | (i3 | 0) == 33648 | (i3 | 0) == 10497)) {
    break;
   }
   HEAP32[i1 + 36 >> 2] = i3;
  } else if ((i2 | 0) == 10243) {
   if (!((i3 | 0) == 33071 | (i3 | 0) == 33648 | (i3 | 0) == 10497)) {
    break;
   }
   HEAP32[i1 + 40 >> 2] = i3;
  } else if ((i2 | 0) == 10240) {
   if ((i3 - 9728 | 0) >>> 0 >= 2 >>> 0) {
    break;
   }
   HEAP32[i1 + 32 >> 2] = i3;
  } else if ((i2 | 0) == 10241) {
   switch (i3 | 0) {
   case 9728:
   case 9729:
   case 9984:
   case 9985:
   case 9986:
   case 9987:
    {
     break;
    }
   default:
    {
     break L7;
    }
   }
   HEAP32[i1 + 28 >> 2] = i3;
  } else {
   return;
  }
 } while (0);
 __ZN7WebCore12WebGLTexture6updateEv(i1);
 return;
}
function __ZNK7WebCore12WebGLTexture16mapTargetToIndexEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) == 34067) {
   switch (i2 | 0) {
   case 34070:
    {
     i4 = 1;
     break L1;
     break;
    }
   case 34071:
    {
     i4 = 2;
     break L1;
     break;
    }
   case 34072:
    {
     i4 = 3;
     break L1;
     break;
    }
   case 34073:
    {
     i4 = 4;
     break L1;
     break;
    }
   case 34074:
    {
     i4 = 5;
     break L1;
     break;
    }
   case 34069:
    {
     i4 = 0;
     break L1;
     break;
    }
   default:
    {
     i5 = 9;
     break L1;
    }
   }
  } else if ((i3 | 0) == 3553) {
   if ((i2 | 0) == 3553) {
    i4 = 0;
   } else {
    i5 = 9;
   }
  } else {
   i5 = 9;
  }
 } while (0);
 if ((i5 | 0) == 9) {
  i4 = -1;
 }
 return i4 | 0;
}
function __ZNK7WebCore12WebGLTexture21needToUseBlackTextureENS0_20TextureExtensionFlagE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i1 + 58 | 0] & 1) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP8[i1 + 60 | 0] & 1) != 0) {
   if ((i2 & 1 | 0) != 0) {
    break;
   }
   if ((HEAP32[i1 + 32 >> 2] | 0) != 9728) {
    i3 = 1;
    return i3 | 0;
   }
   i4 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i4 | 0) == 9728 | (i4 | 0) == 9984) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 0;
 return i3 | 0;
}
function __ZN7WebCore12WebGLTexture6createEPNS_21WebGLRenderingContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(64) | 0;
 __ZN7WebCore17WebGLSharedObjectC2EPNS_21WebGLRenderingContextE(i3, i2);
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i3 + 24 >> 2] = 0;
 HEAP32[i3 + 28 >> 2] = 9986;
 HEAP32[i3 + 32 >> 2] = 9729;
 HEAP32[i3 + 36 >> 2] = 10497;
 HEAP32[i3 + 40 >> 2] = 10497;
 _memset(i3 + 44 | 0, 0, 17) | 0;
 __ZN7WebCore11WebGLObject9setObjectEj(i3, __ZN7WebCore17GraphicsContext3D13createTextureEv(HEAP32[i2 + 44 >> 2] | 0) | 0);
 HEAP32[i1 >> 2] = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 10;
}
function __ZN7WebCore12WebGLTexture17computeLevelCountEii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (i1 | 0) < (i2 | 0) ? i2 : i1;
 if ((i3 | 0) < 1) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i3 >> 16;
 i2 = (i1 | 0) == 0;
 i5 = i2 ? i3 : i1;
 i1 = i5 >> 8;
 i3 = (i1 | 0) == 0;
 i6 = i3 ? i5 : i1;
 i1 = i6 >> 4;
 i5 = (i1 | 0) == 0;
 i7 = i5 ? i6 : i1;
 i1 = i7 >> 2;
 i6 = (i1 | 0) == 0;
 i4 = ((i6 ? i7 : i1) >>> 0 > 1 >>> 0 | ((i6 ? 0 : 2) | ((i5 ? 0 : 4) | ((i3 ? 0 : 8) | (i2 ? 0 : 16))))) + 1 | 0;
 return i4 | 0;
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
function __ZN7WebCore12WebGLTextureC2EPNS_21WebGLRenderingContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17WebGLSharedObjectC2EPNS_21WebGLRenderingContextE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 9986;
 HEAP32[i1 + 32 >> 2] = 9729;
 HEAP32[i1 + 36 >> 2] = 10497;
 HEAP32[i1 + 40 >> 2] = 10497;
 _memset(i1 + 44 | 0, 0, 17) | 0;
 __ZN7WebCore11WebGLObject9setObjectEj(i1 | 0, __ZN7WebCore17GraphicsContext3D13createTextureEv(HEAP32[i2 + 44 >> 2] | 0) | 0);
 return;
}
function __ZN7WebCore12WebGLTextureC1EPNS_21WebGLRenderingContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17WebGLSharedObjectC2EPNS_21WebGLRenderingContextE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 9986;
 HEAP32[i1 + 32 >> 2] = 9729;
 HEAP32[i1 + 36 >> 2] = 10497;
 HEAP32[i1 + 40 >> 2] = 10497;
 _memset(i1 + 44 | 0, 0, 17) | 0;
 __ZN7WebCore11WebGLObject9setObjectEj(i1 | 0, __ZN7WebCore17GraphicsContext3D13createTextureEv(HEAP32[i2 + 44 >> 2] | 0) | 0);
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
function __ZN7WebCore12WebGLTexture6isNPOTEii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i1 | 0) == 0 | (i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((i1 - 1 & i1 | 0) == 0) {
  return (i2 - 1 & i2 | 0) != 0 | 0;
 } else {
  i3 = 1;
  return i3 | 0;
 }
 return 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore17WebGLSharedObject8validateEPKNS_17WebGLContextGroupEPKNS_21WebGLRenderingContextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return (HEAP32[i1 + 20 >> 2] | 0) == (i2 | 0) | 0;
}
function __ZNK7WebCore12WebGLTexture12isCompressedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 59 | 0] & 1) != 0;
 return i2 | 0;
}
function __ZN7WebCore12WebGLTexture16deleteObjectImplEPNS_17GraphicsContext3DEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore17GraphicsContext3D13deleteTextureEj(i2, i3);
 return;
}
function __ZNK7WebCore12WebGLTexture6isNPOTEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 56 | 0] & 1) != 0;
 return i2 | 0;
}
function ii___ZNK7WebCore17WebGLSharedObject21getAGraphicsContext3DEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17WebGLSharedObject21getAGraphicsContext3DEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
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
function __ZN7WebCore12WebGLTextureD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12WebGLTextureD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function __ZNK7WebCore17WebGLSharedObject17hasGroupOrContextEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 20 >> 2] | 0) != 0 | 0;
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
function vi___ZN7WebCore11WebGLObject6detachEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11WebGLObject6detachEv(i1 | 0);
}
function __ZN7WebCore12WebGLTexture13setCompressedEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 59 | 0] = 1;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore17WebGLSharedObject14isRenderbufferEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore17WebGLSharedObject13isFramebufferEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17WebGLSharedObject9isProgramEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17WebGLSharedObject8isShaderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17WebGLSharedObject8isBufferEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12WebGLTexture9isTextureEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,__ZNK7WebCore17WebGLSharedObject8validateEPKNS_17WebGLContextGroupEPKNS_21WebGLRenderingContextE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZN7WebCore11WebGLObject6detachEv__wrapper,b1,__ZN7WebCore12WebGLTextureD0Ev,b1,__ZN7WebCore12WebGLTextureD2Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore12WebGLTextureC2EPNS_21WebGLRenderingContextE,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore17WebGLSharedObject13isFramebufferEv,b3,__ZNK7WebCore17WebGLSharedObject14isRenderbufferEv,b3,__ZNK7WebCore17WebGLSharedObject8isBufferEv,b3,__ZNK7WebCore17WebGLSharedObject17hasGroupOrContextEv,b3,__ZNK7WebCore12WebGLTexture9isTextureEv,b3,ii___ZNK7WebCore17WebGLSharedObject21getAGraphicsContext3DEv__wrapper,b3,__ZNK7WebCore17WebGLSharedObject9isProgramEv,b3,__ZNK7WebCore17WebGLSharedObject8isShaderEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore12WebGLTexture16deleteObjectImplEPNS_17GraphicsContext3DEj,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore17WebGLSharedObject14isRenderbufferEv","__ZN7WebCore12WebGLTexture23generateMipmapLevelInfoEv","__ZNK7WebCore17WebGLSharedObject8validateEPKNS_17WebGLContextGroupEPKNS_21WebGLRenderingContextE","__ZNK7WebCore17WebGLSharedObject8isBufferEv","_strlen","__ZNK7WebCore12WebGLTexture6isNPOTEv","__ZN7WebCore12WebGLTexture18canGenerateMipmapsEv","__ZNK7WebCore12WebGLTexture9isTextureEv","__ZNK7WebCore12WebGLTexture12getLevelInfoEji","__ZNK7WebCore12WebGLTexture17getInternalFormatEji","__ZNK7WebCore12WebGLTexture7getTypeEji","_memset","__ZN3WTF6VectorINS0_IN7WebCore12WebGLTexture9LevelInfoELj0ENS_15CrashOnOverflowEEELj0ES4_E15reserveCapacityEj","_memcpy","__ZN7WebCore12WebGLTexture12setLevelInfoEjijiij","__ZN7WebCore12WebGLTexture16deleteObjectImplEPNS_17GraphicsContext3DEj","__ZNK7WebCore12WebGLTexture12isCompressedEv","__ZNK7WebCore12WebGLTexture21needToUseBlackTextureENS0_20TextureExtensionFlagE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore12WebGLTexture17computeLevelCountEii","__ZNK7WebCore12WebGLTexture16mapTargetToIndexEj","__ZN3WTF6VectorIN7WebCore12WebGLTexture9LevelInfoELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore12WebGLTexture6createEPNS_21WebGLRenderingContextE","__ZN7WebCore12WebGLTexture6updateEv","__ZN7WebCore12WebGLTexture13setParameteriEji","__ZN7WebCore12WebGLTextureD0Ev","__ZN7WebCore12WebGLTexture6isNPOTEii","__ZN7WebCore12WebGLTextureD2Ev","__ZNK7WebCore12WebGLTexture7isValidEji","__ZN7WebCore12WebGLTexture13setParameterfEjf","__ZNK7WebCore17WebGLSharedObject13isFramebufferEv","__ZN7WebCore12WebGLTexture9setTargetEji","__ZNK7WebCore12WebGLTexture9getHeightEji","__ZNK7WebCore12WebGLTexture8getWidthEji","__ZN3WTF6VectorINS0_IN7WebCore12WebGLTexture9LevelInfoELj0ENS_15CrashOnOverflowEEELj0ES4_E6resizeEj","__ZNK7WebCore17WebGLSharedObject17hasGroupOrContextEv","__ZN7WebCore12WebGLTexture13setCompressedEv","__ZNK7WebCore17WebGLSharedObject9isProgramEv","__ZNK7WebCore17WebGLSharedObject8isShaderEv","__ZN7WebCore12WebGLTextureC2EPNS_21WebGLRenderingContextE"]

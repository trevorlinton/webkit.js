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
H_BASE = parentModule["_malloc"](24 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 24;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
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
function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_iiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZN7WebCore17GlyphPageTreeNode12pageZeroRootE=(H_BASE+24)|0;
  var __ZN7WebCore17GlyphPageTreeNode5rootsE=(H_BASE+16)|0;
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
  var invoke_iiiiiiii=env.invoke_iiiiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17GlyphPageTreeNode14initializePageEPKNS_8FontDataEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 1032 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 20 >> 2] | 0;
 i7 = HEAP32[i6 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1 + 24 | 0;
  i9 = __ZN3WTF10fastMallocEj(1548) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = 1;
  HEAP32[i9 + 4 >> 2] = 0;
  HEAP32[i9 + 8 >> 2] = i1;
  i11 = i9 + 12 | 0;
  _memset(i11 | 0, 0, 1536) | 0;
  if ((i7 | 0) == 0) {
   i12 = i8 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i10;
   if ((i13 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i12 = i13 | 0;
   i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i13);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i12 >> 2] = i14;
    STACKTOP = i4;
    return;
   }
  }
  _memcpy(i11 | 0, i7 + 12 | 0, 512) | 0;
  i11 = i7 + 4 | 0;
  if ((HEAP32[i11 >> 2] | 0) == 0) {
   _memcpy(i9 + 524 | 0, i7 + 524 | 0, 1024) | 0;
  } else {
   i9 = 0;
   while (1) {
    if ((HEAP16[i7 + 12 + (i9 << 1) >> 1] | 0) == 0) {
     i15 = 0;
    } else {
     i15 = HEAP32[i11 >> 2] | 0;
    }
    HEAP32[i10 + 524 + (i9 << 2) >> 2] = i15;
    i9 = i9 + 1 | 0;
    if (i9 >>> 0 >= 256 >>> 0) {
     break;
    }
   }
  }
  i9 = i8 | 0;
  i8 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i10;
  if ((i8 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i10 = i8 | 0;
  i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i8);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i10 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 }
 if ((HEAP32[i1 + 28 >> 2] & 2147483647 | 0) != 1) {
  i9 = (i7 | 0) != 0;
  do {
   if (i9) {
    i10 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == (i6 | 0)) {
     break;
    }
    i8 = HEAP32[(__ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(i10, i2, i3) | 0) + 24 >> 2] | 0;
    if ((i8 | 0) != 0) {
     i10 = i8 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    }
    i10 = i1 + 24 | 0;
    i15 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = i8;
    if ((i15 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i8 = i15 | 0;
    i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF8fastFreeEPv(i15);
     STACKTOP = i4;
     return;
    } else {
     HEAP32[i8 >> 2] = i10;
     STACKTOP = i4;
     return;
    }
   }
  } while (0);
  i6 = HEAP32[(__ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(__ZN7WebCore17GlyphPageTreeNode7getRootEj(i3) | 0, i2, i3) | 0) + 24 >> 2] | 0;
  i10 = (i6 | 0) == 0;
  if (!i9) {
   if (!i10) {
    i9 = i6 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   i9 = i1 + 24 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i6;
   if ((i8 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i9 = i8 | 0;
   i15 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i8);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i9 >> 2] = i15;
    STACKTOP = i4;
    return;
   }
  }
  i15 = i1 + 24 | 0;
  if (i10) {
   i10 = i7 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = i15 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i7;
   if ((i9 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i10 = i9 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i9);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i10 >> 2] = i8;
    STACKTOP = i4;
    return;
   }
  }
  i8 = __ZN3WTF10fastMallocEj(1548) | 0;
  HEAP32[i8 >> 2] = 1;
  HEAP32[i8 + 4 >> 2] = 0;
  HEAP32[i8 + 8 >> 2] = i1;
  _memset(i8 + 12 | 0, 0, 1536) | 0;
  i10 = i15 | 0;
  i15 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i8;
  do {
   if ((i15 | 0) != 0) {
    i8 = i15 | 0;
    i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF8fastFreeEPv(i15);
     break;
    } else {
     HEAP32[i8 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i15 = i7 + 4 | 0;
  i9 = i6 + 4 | 0;
  i8 = 0;
  i11 = 0;
  while (1) {
   i14 = HEAP16[i7 + 12 + (i11 << 1) >> 1] | 0;
   do {
    if (i14 << 16 >> 16 == 0) {
     i12 = HEAP16[i6 + 12 + (i11 << 1) >> 1] | 0;
     i13 = HEAP32[i10 >> 2] | 0;
     if (i12 << 16 >> 16 == 0) {
      HEAP16[i13 + 12 + (i11 << 1) >> 1] = 0;
      if ((HEAP32[i13 + 4 >> 2] | 0) != 0) {
       i16 = i8;
       break;
      }
      HEAP32[i13 + 524 + (i11 << 2) >> 2] = 0;
      i16 = i8;
      break;
     }
     i17 = HEAP32[i9 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i18 = HEAP32[i6 + 524 + (i11 << 2) >> 2] | 0;
     } else {
      i18 = i17;
     }
     HEAP16[i13 + 12 + (i11 << 1) >> 1] = i12;
     if ((HEAP32[i13 + 4 >> 2] | 0) != 0) {
      i16 = 1;
      break;
     }
     HEAP32[i13 + 524 + (i11 << 2) >> 2] = i18;
     i16 = 1;
    } else {
     i13 = HEAP32[i10 >> 2] | 0;
     i12 = HEAP32[i15 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i19 = HEAP32[i7 + 524 + (i11 << 2) >> 2] | 0;
     } else {
      i19 = i12;
     }
     HEAP16[i13 + 12 + (i11 << 1) >> 1] = i14;
     if ((HEAP32[i13 + 4 >> 2] | 0) != 0) {
      i16 = i8;
      break;
     }
     HEAP32[i13 + 524 + (i11 << 2) >> 2] = i19;
     i16 = i8;
    }
   } while (0);
   i14 = i11 + 1 | 0;
   if (i14 >>> 0 < 256 >>> 0) {
    i8 = i16;
    i11 = i14;
   } else {
    break;
   }
  }
  if (i16) {
   STACKTOP = i4;
   return;
  }
  i16 = i7 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  i16 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i7;
  if ((i16 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i7 = i16 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i16);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i7 >> 2] = i10;
   STACKTOP = i4;
   return;
  }
 }
 i10 = i3 << 8;
 i3 = i10 >>> 0 < 65536 >>> 0;
 do {
  if (i3) {
   i7 = 0;
   while (1) {
    HEAP16[i5 + (i7 << 1) >> 1] = i7 + i10;
    i7 = i7 + 1 | 0;
    if (i7 >>> 0 >= 256 >>> 0) {
     break;
    }
   }
   if ((i10 | 0) == 8192) {
    HEAP16[i5 + 28 >> 1] = 8203;
    HEAP16[i5 + 30 >> 1] = 8203;
    HEAP16[i5 + 84 >> 1] = 8203;
    HEAP16[i5 + 86 >> 1] = 8203;
    HEAP16[i5 + 90 >> 1] = 8203;
    HEAP16[i5 + 92 >> 1] = 8203;
    HEAP16[i5 + 24 >> 1] = 8203;
    HEAP16[i5 + 26 >> 1] = 8203;
    HEAP16[i5 + 88 >> 1] = 8203;
    i20 = 256;
    break;
   } else if ((i10 | 0) == 65024) {
    HEAP16[i5 + 510 >> 1] = 8203;
    i20 = 256;
    break;
   } else if ((i10 | 0) == 0) {
    i7 = 0;
    while (1) {
     HEAP16[i5 + (i7 << 1) >> 1] = 8203;
     i16 = i7 + 1 | 0;
     if (i16 >>> 0 < 32 >>> 0) {
      i7 = i16;
     } else {
      i21 = 127;
      break;
     }
    }
    while (1) {
     HEAP16[i5 + (i21 << 1) >> 1] = 8203;
     i21 = i21 + 1 | 0;
     if (i21 >>> 0 >= 160 >>> 0) {
      break;
     }
    }
    HEAP16[i5 + 346 >> 1] = 8203;
    HEAP16[i5 + 20 >> 1] = 32;
    HEAP16[i5 + 18 >> 1] = 32;
    HEAP16[i5 + 320 >> 1] = 32;
    i20 = 256;
    break;
   } else if ((i10 | 0) == 65280) {
    HEAP16[i5 + 504 >> 1] = 8203;
    i20 = 256;
    break;
   } else {
    i20 = 256;
    break;
   }
  } else {
   i7 = 0;
   while (1) {
    i16 = i7 + i10 | 0;
    i11 = i7 << 1;
    HEAP16[i5 + (i11 << 1) >> 1] = (i16 >>> 10) + 55232;
    HEAP16[i5 + ((i11 | 1) << 1) >> 1] = i16 & 1023 | 56320;
    i16 = i7 + 1 | 0;
    if (i16 >>> 0 < 256 >>> 0) {
     i7 = i16;
    } else {
     i20 = 512;
     break;
    }
   }
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 1](i2) | 0) {
   i21 = __ZN3WTF10fastMallocEj(1548) | 0;
   HEAP32[i21 >> 2] = 1;
   HEAP32[i21 + 4 >> 2] = 0;
   HEAP32[i21 + 8 >> 2] = i1;
   _memset(i21 + 12 | 0, 0, 1536) | 0;
   i7 = i1 + 24 | 0;
   i16 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i21;
   do {
    if ((i16 | 0) != 0) {
     i21 = i16 | 0;
     i11 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i16);
      break;
     } else {
      HEAP32[i21 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i16 = i2 + 20 | 0;
   i11 = HEAP32[i16 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i21 = i2 + 12 | 0;
   i8 = i3 ? 1 : 2;
   i19 = 0;
   i15 = HEAP32[i7 >> 2] | 0;
   i18 = 0;
   i6 = 0;
   i9 = 0;
   i14 = i11;
   while (1) {
    if (i14 >>> 0 <= i18 >>> 0) {
     i22 = 28;
     break;
    }
    i13 = HEAP32[i21 >> 2] | 0;
    i12 = (HEAP32[i13 + (i18 * 12 & -1) >> 2] | 0) - i10 | 0;
    i17 = (i12 | 0) > 0;
    i23 = i17 ? i12 : 0;
    i12 = (HEAP32[i13 + (i18 * 12 & -1) + 4 >> 2] | 0) - i10 | 0;
    i24 = (i12 | 0) > 255 ? 256 : i12 + 1 | 0;
    do {
     if ((i23 | 0) < 256 & (i24 | 0) > 0) {
      i12 = i9 & 1;
      if (i12 << 24 >> 24 != 0 & (i19 | 0) == 0) {
       i25 = __ZN3WTF10fastMallocEj(1548) | 0;
       i26 = i25;
       HEAP32[i25 >> 2] = 1;
       HEAP32[i25 + 4 >> 2] = 0;
       HEAP32[i25 + 8 >> 2] = i1;
       _memset(i25 + 12 | 0, 0, 1536) | 0;
       i27 = i26;
       i28 = i26;
      } else {
       i27 = i15;
       i28 = i19;
      }
      do {
       if (!i6) {
        if (!(i17 | (i24 | 0) < 256)) {
         break;
        }
        i26 = i27 + 4 | 0;
        i25 = 0;
        while (1) {
         HEAP16[i27 + 12 + (i25 << 1) >> 1] = 0;
         if ((HEAP32[i26 >> 2] | 0) == 0) {
          HEAP32[i27 + 524 + (i25 << 2) >> 2] = 0;
         }
         i25 = i25 + 1 | 0;
         if (i25 >>> 0 >= 256 >>> 0) {
          break;
         }
        }
       }
      } while (0);
      i25 = i24 - i23 | 0;
      i26 = i5 + ((Math_imul(i23, i8) | 0) << 1) | 0;
      i29 = Math_imul(i25, i8) | 0;
      i30 = HEAP32[i13 + (i18 * 12 & -1) + 8 >> 2] | 0;
      i31 = (i30 | 0) == 0;
      if (!i31) {
       i32 = i30 + 4 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      }
      i32 = HEAP32[i30 + 76 >> 2] | 0;
      if ((i32 | 0) == 0) {
       i33 = __ZN7WebCore9GlyphPage4fillEjjPtjPKNS_14SimpleFontDataE(i27, i23, i25, i26, i29, i30) | 0;
      } else {
       i33 = FUNCTION_TABLE_iiiiiiii[HEAP32[(HEAP32[i32 >> 2] | 0) + 16 >> 2] & 1](i32, i27, i23, i25, i26, i29, i30) | 0;
      }
      i29 = i33 & 1 | i12;
      do {
       if (!i31) {
        i26 = i30 + 4 | 0;
        i25 = i26 | 0;
        i32 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
        if ((i32 | 0) != 0) {
         HEAP32[i25 >> 2] = i32;
         break;
        }
        i32 = i26 - 4 | 0;
        if ((i32 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 1](i32);
       }
      } while (0);
      if ((i28 | 0) == 0) {
       i34 = i29;
       i35 = 1;
       i36 = i27;
       i37 = 0;
       break;
      }
      if ((i23 | 0) >= (i24 | 0)) {
       i34 = i29;
       i35 = 1;
       i36 = i27;
       i37 = i28;
       break;
      }
      i30 = i27 + 4 | 0;
      i31 = i23;
      while (1) {
       i12 = HEAP32[i7 >> 2] | 0;
       i32 = i12 + 12 + (i31 << 1) | 0;
       do {
        if ((HEAP16[i32 >> 1] | 0) == 0) {
         i26 = HEAP16[i27 + 12 + (i31 << 1) >> 1] | 0;
         if (i26 << 16 >> 16 == 0) {
          break;
         }
         i25 = HEAP32[i30 >> 2] | 0;
         if ((i25 | 0) == 0) {
          i38 = HEAP32[i27 + 524 + (i31 << 2) >> 2] | 0;
         } else {
          i38 = i25;
         }
         HEAP16[i32 >> 1] = i26;
         if ((HEAP32[i12 + 4 >> 2] | 0) != 0) {
          break;
         }
         HEAP32[i12 + 524 + (i31 << 2) >> 2] = i38;
        }
       } while (0);
       i12 = i31 + 1 | 0;
       if ((i12 | 0) < (i24 | 0)) {
        i31 = i12;
       } else {
        i34 = i29;
        i35 = 1;
        i36 = i27;
        i37 = i28;
        break;
       }
      }
     } else {
      i34 = i9;
      i35 = i6;
      i36 = i15;
      i37 = i19;
     }
    } while (0);
    i24 = i18 + 1 | 0;
    if (i24 >>> 0 >= i11 >>> 0) {
     break;
    }
    i19 = i37;
    i15 = i36;
    i18 = i24;
    i6 = i35;
    i9 = i34;
    i14 = HEAP32[i16 >> 2] | 0;
   }
   if ((i22 | 0) == 28) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i16 = (i34 & 1) != 0;
   if ((i37 | 0) == 0) {
    if (!i16) {
     break;
    }
    STACKTOP = i4;
    return;
   }
   i14 = i37 | 0;
   i9 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i37);
    if (!i16) {
     break;
    }
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i14 >> 2] = i9;
    if (!i16) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  } else {
   i16 = i5 | 0;
   i9 = i2;
   i14 = __ZN3WTF10fastMallocEj(524) | 0;
   HEAP32[i14 >> 2] = 1;
   HEAP32[i14 + 4 >> 2] = i9;
   HEAP32[i14 + 8 >> 2] = i1;
   _memset(i14 + 12 | 0, 0, 512) | 0;
   i6 = i1 + 24 | 0;
   i18 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i14;
   do {
    if ((i18 | 0) != 0) {
     i14 = i18 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i6 >> 2] | 0;
   i15 = HEAP32[i2 + 76 >> 2] | 0;
   if ((i15 | 0) == 0) {
    if (!(__ZN7WebCore9GlyphPage4fillEjjPtjPKNS_14SimpleFontDataE(i18, 0, 256, i16, i20, i9) | 0)) {
     break;
    }
    STACKTOP = i4;
    return;
   } else {
    if (!(FUNCTION_TABLE_iiiiiiii[HEAP32[(HEAP32[i15 >> 2] | 0) + 16 >> 2] & 1](i15, i18, 0, 256, i16, i20, i9) | 0)) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i20 = i1 + 24 | 0;
 i1 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i20 = i1 | 0;
 i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i20 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableIPKN7WebCore8FontDataENS_12KeyValuePairIS4_NS_6OwnPtrINS1_17GlyphPageTreeNodeEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS4_NS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
  __ZN3WTF9HashTableIPKN7WebCore8FontDataENS_12KeyValuePairIS4_NS_6OwnPtrINS1_17GlyphPageTreeNodeEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i8, 0) | 0;
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
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEEaSERKNS_10PassOwnPtrIS2_EE(i26 + 4 | 0, i4) | 0;
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPKN7WebCore8FontDataENS_12KeyValuePairIS4_NS_6OwnPtrINS1_17GlyphPageTreeNodeEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 HEAP32[i5 >> 2] = i2;
 i9 = (i2 | 0) == 0;
 L1 : do {
  if (i9) {
   i10 = i1 + 36 | 0;
   i11 = 10;
  } else {
   i12 = HEAP32[i1 + 8 >> 2] | 0;
   i13 = HEAP32[i1 >> 2] | 0;
   i14 = i2;
   i15 = i14 + ~(i14 << 15) | 0;
   i14 = (i15 >>> 10 ^ i15) * 9 & -1;
   i15 = i14 >>> 6 ^ i14;
   i14 = i15 + ~(i15 << 11) | 0;
   i15 = i14 >>> 16 ^ i14;
   if ((i13 | 0) == 0) {
    break;
   }
   i14 = i12 & i15;
   i16 = i13 + (i14 << 3) | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == (i2 | 0)) {
    i18 = i16;
   } else {
    i16 = (i15 >>> 23) + ~i15 | 0;
    i15 = i16 << 12 ^ i16;
    i16 = i15 >>> 7 ^ i15;
    i15 = i16 << 2 ^ i16;
    i16 = i15 >>> 20 ^ i15 | 1;
    i15 = 0;
    i19 = i14;
    i14 = i17;
    while (1) {
     if ((i14 | 0) == 0) {
      break L1;
     }
     i17 = (i15 | 0) == 0 ? i16 : i15;
     i20 = i17 + i19 & i12;
     i21 = i13 + (i20 << 3) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i2 | 0)) {
      i18 = i21;
      break;
     } else {
      i15 = i17;
      i19 = i20;
      i14 = i22;
     }
    }
   }
   if ((i18 | 0) == 0) {
    break;
   }
   i10 = i18 + 4 | 0;
   i11 = 10;
  }
 } while (0);
 do {
  if ((i11 | 0) == 10) {
   i18 = HEAP32[i10 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   } else {
    i23 = i18;
   }
   STACKTOP = i4;
   return i23 | 0;
  }
 } while (0);
 i10 = __ZN3WTF10fastMallocEj(40) | 0;
 i11 = i10;
 i18 = i10 + 28 | 0;
 _memset(i10 | 0, 0, 28) | 0;
 HEAP32[i18 >> 2] = HEAP32[i18 >> 2] & -2147483648;
 i14 = i10 + 31 | 0;
 HEAP8[i14] = 0;
 HEAP32[i10 + 32 >> 2] = 0;
 HEAP32[i10 + 36 >> 2] = 0;
 HEAP32[i10 + 20 >> 2] = i1;
 HEAP32[i18 >> 2] = HEAP32[i18 >> 2] & -2147483648 | (HEAP32[i1 + 28 >> 2] | 0) + 1 & 2147483647;
 if (i9) {
  HEAP32[i8 >> 2] = i11;
  __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEEaSERKNS_10PassOwnPtrIS2_EE(i1 + 36 | 0, i8) | 0;
  __ZN3WTF10PassOwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i8);
  HEAP8[i14] = HEAP8[i14] | -128;
  i24 = 0;
 } else {
  if (!((i1 | 0) == 0 | (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 1](i2) | 0) ^ 1)) {
   i2 = i1;
   while (1) {
    i14 = i2 + 32 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    i2 = HEAP32[i2 + 20 >> 2] | 0;
    if ((i2 | 0) == 0) {
     break;
    }
   }
  }
  HEAP32[i6 >> 2] = i11;
  __ZN3WTF9HashTableIPKN7WebCore8FontDataENS_12KeyValuePairIS4_NS_6OwnPtrINS1_17GlyphPageTreeNodeEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS4_NS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i7, i1 | 0, i5, i6);
  if ((HEAP8[i7 + 8 | 0] & 1) == 0) {
   __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEEaSERKNS_10PassOwnPtrIS2_EE((HEAP32[i7 >> 2] | 0) + 4 | 0, i6) | 0;
  }
  __ZN3WTF10PassOwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i6);
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i6 + 8 | 0;
  i7 = HEAP32[i5 >> 2] | 0;
  i1 = HEAP32[i18 >> 2] & 2147483647;
  HEAP32[i5 >> 2] = i7 >>> 0 < i1 >>> 0 ? i1 : i7;
  i24 = i6;
 }
 __ZN7WebCore17GlyphPageTreeNode14initializePageEPKNS_8FontDataEj(i11, i24, i3);
 i23 = i11;
 STACKTOP = i4;
 return i23 | 0;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EEiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6expandEPS5_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i10 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i10 >>> 6 ^ i10;
 i10 = i9 + ~(i9 << 11) | 0;
 i9 = i10 >>> 16 ^ i10;
 i10 = i9 & i6;
 i11 = i7 + (i10 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 9;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i10;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 6;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i7 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 8;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 8) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 9;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   } else if ((i14 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 9) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  i8 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6expandEPS5_(i2, i26) | 0;
  i29 = i8;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6expandEPS5_(i1, i2) {
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
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
  i5 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i12;
  } else {
   i15 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
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
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
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
   i15 = i5;
   i16 = i30;
   i13 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i16 + 4 >> 2] = i13;
   i14 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   i8 = i14;
   break;
  } else {
   i11 = i13;
   i12 = i14;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore17GlyphPageTreeNode7getRootEj(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if (!(HEAP8[H_BASE + 8 | 0] | 0)) {
  HEAP8[H_BASE + 8 | 0] = 1;
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 16 >> 2] = i6;
  i6 = __ZN3WTF10fastMallocEj(40) | 0;
  i7 = i6 + 28 | 0;
  _memset(i6 | 0, 0, 28) | 0;
  HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -2147483648;
  HEAP8[i6 + 31 | 0] = 0;
  HEAP32[i6 + 32 >> 2] = 0;
  HEAP32[i6 + 36 >> 2] = 0;
  HEAP32[H_BASE + 24 >> 2] = i6;
 }
 if ((i1 | 0) == 0) {
  i8 = HEAP32[H_BASE + 24 >> 2] | 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i6 = HEAP32[H_BASE + 16 >> 2] | 0;
 i7 = HEAP32[i6 + 8 >> 2] | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 i6 = ~(i1 << 15) + i1 | 0;
 i10 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i10 >>> 6 ^ i10;
 i10 = i6 + ~(i6 << 11) | 0;
 i6 = i10 >>> 16 ^ i10;
 L8 : do {
  if ((i9 | 0) != 0) {
   i10 = i7 & i6;
   i11 = i9 + (i10 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == (i1 | 0)) {
    i13 = i11;
   } else {
    i11 = (i6 >>> 23) + ~i6 | 0;
    i14 = i11 << 12 ^ i11;
    i11 = i14 >>> 7 ^ i14;
    i14 = i11 << 2 ^ i11;
    i11 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i10;
    i10 = i12;
    while (1) {
     if ((i10 | 0) == 0) {
      break L8;
     }
     i12 = (i14 | 0) == 0 ? i11 : i14;
     i16 = i12 + i15 & i7;
     i17 = i9 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i1 | 0)) {
      i13 = i17;
      break;
     } else {
      i14 = i12;
      i15 = i16;
      i10 = i18;
     }
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i13 + 4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i8 = i10;
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 i13 = __ZN3WTF10fastMallocEj(40) | 0;
 i9 = i13 + 28 | 0;
 _memset(i13 | 0, 0, 28) | 0;
 HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -2147483648;
 HEAP8[i13 + 31 | 0] = 0;
 HEAP32[i13 + 32 >> 2] = 0;
 HEAP32[i13 + 36 >> 2] = 0;
 HEAP32[i3 >> 2] = i13;
 i13 = HEAP32[H_BASE + 16 >> 2] | 0;
 HEAP32[i4 >> 2] = i1;
 __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EEiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_(i5, i13 | 0, i4, i3);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
  i8 = i4;
  STACKTOP = i2;
  return i8 | 0;
 }
 HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] = i4;
 i8 = i4;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN3WTF7HashMapIPKN7WebCore8FontDataENS_6OwnPtrINS1_17GlyphPageTreeNodeEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSA_IS7_EEE4takeERKS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i2 + 4 >> 2] | 0;
  i9 = i8 << 3 | 0;
  i10 = 0;
  i11 = i8;
 } else {
  i8 = HEAP32[i2 + 8 >> 2] | 0;
  i12 = HEAP32[i3 >> 2] | 0;
  i3 = i12;
  i13 = i3 + ~(i3 << 15) | 0;
  i3 = (i13 >>> 10 ^ i13) * 9 & -1;
  i13 = i3 >>> 6 ^ i3;
  i3 = i13 + ~(i13 << 11) | 0;
  i13 = i3 >>> 16 ^ i3;
  i3 = i13 & i8;
  i14 = i7 + (i3 << 3) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  L4 : do {
   if ((i15 | 0) == (i12 | 0)) {
    i16 = i14;
   } else {
    i17 = (i13 >>> 23) + ~i13 | 0;
    i18 = i17 << 12 ^ i17;
    i17 = i18 >>> 7 ^ i18;
    i18 = i17 << 2 ^ i17;
    i17 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i19 = i3;
    i20 = i15;
    while (1) {
     if ((i20 | 0) == 0) {
      i16 = 0;
      break L4;
     }
     i21 = (i18 | 0) == 0 ? i17 : i18;
     i22 = i21 + i19 & i8;
     i23 = i7 + (i22 << 3) | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     if ((i24 | 0) == (i12 | 0)) {
      i16 = i23;
      break;
     } else {
      i18 = i21;
      i19 = i22;
      i20 = i24;
     }
    }
   }
  } while (0);
  i12 = HEAP32[i2 + 4 >> 2] | 0;
  i9 = (i16 | 0) == 0 ? i7 + (i12 << 3) | 0 : i16;
  i10 = i7;
  i11 = i12;
 }
 i12 = i2 + 4 | 0;
 if ((i9 | 0) == (i10 + (i11 << 3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i11 = i5 | 0;
 i10 = i9 + 4 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = i7;
 i7 = i2 | 0;
 do {
  if ((i9 | 0) != ((HEAP32[i6 >> 2] | 0) + (HEAP32[i12 >> 2] << 3) | 0)) {
   __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i9 + 4 | 0);
   HEAP32[i9 >> 2] = -1;
   i10 = i2 + 16 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = i2 + 12 | 0;
   i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i16;
   i10 = HEAP32[i12 >> 2] | 0;
   if (!((i16 * 6 & -1 | 0) < (i10 | 0) & (i10 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPKN7WebCore8FontDataENS_12KeyValuePairIS4_NS_6OwnPtrINS1_17GlyphPageTreeNodeEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i7, (i10 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 >> 2] = i7;
 __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17GlyphPageTreeNode13pruneFontDataEPKNS_14SimpleFontDataEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = HEAP32[i7 + 24 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i9 = 0;
   }
   while (1) {
    i10 = i8 + 524 + (i9 << 2) | 0;
    if ((HEAP32[i10 >> 2] | 0) == (i2 | 0)) {
     HEAP16[i8 + 12 + (i9 << 1) >> 1] = 0;
     HEAP32[i10 >> 2] = 0;
    }
    i9 = i9 + 1 | 0;
    if (i9 >>> 0 >= 256 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF7HashMapIPKN7WebCore8FontDataENS_6OwnPtrINS1_17GlyphPageTreeNodeEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSA_IS7_EEE4takeERKS4_(i5, i1 | 0, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = HEAP32[i6 + 32 >> 2] | 0;
   if ((i9 | 0) == 0 | (i1 | 0) == 0) {
    break;
   } else {
    i11 = i1;
   }
   while (1) {
    i7 = i11 + 32 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - i9;
    i11 = HEAP32[i11 + 20 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i5);
 i5 = i3 + 1 | 0;
 if (i5 >>> 0 > (HEAP32[i2 + 8 >> 2] | 0) >>> 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 i11 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = i3 + (i11 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 L20 : do {
  if ((i11 | 0) == 0) {
   i12 = i3;
  } else {
   i1 = i3;
   while (1) {
    i9 = HEAP32[i1 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i12 = i1;
     break L20;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i6 | 0)) {
     break;
    }
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((i12 | 0) == (i6 | 0)) {
  STACKTOP = i4;
  return;
 } else {
  i13 = i12;
 }
 L28 : while (1) {
  __ZN7WebCore17GlyphPageTreeNode13pruneFontDataEPKNS_14SimpleFontDataEj(HEAP32[i13 + 4 >> 2] | 0, i2, i5);
  i12 = i13 + 8 | 0;
  if ((i12 | 0) == (i6 | 0)) {
   i14 = 25;
   break;
  } else {
   i15 = i12;
  }
  while (1) {
   i12 = HEAP32[i15 >> 2] | 0;
   if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
    break;
   }
   i12 = i15 + 8 | 0;
   if ((i12 | 0) == (i6 | 0)) {
    i14 = 23;
    break L28;
   } else {
    i15 = i12;
   }
  }
  if ((i15 | 0) == (i6 | 0)) {
   i14 = 22;
   break;
  } else {
   i13 = i15;
  }
 }
 if ((i14 | 0) == 22) {
  STACKTOP = i4;
  return;
 } else if ((i14 | 0) == 23) {
  STACKTOP = i4;
  return;
 } else if ((i14 | 0) == 25) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore17GlyphPageTreeNode19pruneCustomFontDataEPKNS_8FontDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 32 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF7HashMapIPKN7WebCore8FontDataENS_6OwnPtrINS1_17GlyphPageTreeNodeEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSA_IS7_EEE4takeERKS4_(i5, i1 | 0, i4);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = (HEAP32[i6 + 32 >> 2] | 0) + 1 | 0;
   if ((i7 | 0) == 0 | (i1 | 0) == 0) {
    break;
   } else {
    i8 = i1;
   }
   while (1) {
    i9 = i8 + 32 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - i7;
    i8 = HEAP32[i8 + 20 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i5);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i8 = i2 + (i5 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L18 : do {
  if ((i5 | 0) == 0) {
   i10 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i10 = i1;
     break L18;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i8 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i10 | 0) == (i8 | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i10;
 L27 : while (1) {
  __ZN7WebCore17GlyphPageTreeNode19pruneCustomFontDataEPKNS_8FontDataE(HEAP32[i4 + 4 >> 2] | 0, i2);
  i10 = i4 + 8 | 0;
  if ((i10 | 0) == (i8 | 0)) {
   i11 = 26;
   break;
  } else {
   i12 = i10;
  }
  while (1) {
   i10 = HEAP32[i12 >> 2] | 0;
   if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
    break;
   }
   i10 = i12 + 8 | 0;
   if ((i10 | 0) == (i8 | 0)) {
    i11 = 21;
    break L27;
   } else {
    i12 = i10;
   }
  }
  if ((i12 | 0) == (i8 | 0)) {
   i11 = 20;
   break;
  } else {
   i4 = i12;
  }
 }
 if ((i11 | 0) == 20) {
  STACKTOP = i3;
  return;
 } else if ((i11 | 0) == 21) {
  STACKTOP = i3;
  return;
 } else if ((i11 | 0) == 26) {
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF9HashTableIPKN7WebCore8FontDataENS_12KeyValuePairIS4_NS_6OwnPtrINS1_17GlyphPageTreeNodeEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E8reinsertEOS9_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i6 = i1;
 i7 = i6 + ~(i6 << 15) | 0;
 i6 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i6 >>> 6 ^ i6;
 i6 = i7 + ~(i7 << 11) | 0;
 i7 = i6 >>> 16 ^ i6;
 i6 = i7 & i5;
 i8 = i4 + (i6 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i7 >>> 23) + ~i7 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i6;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i1 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i10 = i20;
     i11 = i23;
     i12 = 3;
     break;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
  }
 } while (0);
 if ((i12 | 0) == 3) {
  i19 = (i10 | 0) != 0 ? i10 : i11;
 }
 __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i19 + 4 | 0);
 HEAP32[i19 >> 2] = HEAP32[i3 >> 2];
 i3 = i2 + 4 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i19 + 4 >> 2] = i2;
 return i19 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore8FontDataENS_12KeyValuePairIS4_NS_6OwnPtrINS1_17GlyphPageTreeNodeEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
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
   i6 = __ZN3WTF9HashTableIPKN7WebCore8FontDataENS_12KeyValuePairIS4_NS_6OwnPtrINS1_17GlyphPageTreeNodeEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E8reinsertEOS9_(i1, i2) | 0;
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
  if ((HEAP32[i7 + (i13 << 3) >> 2] | 0) != -1) {
   __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i7 + (i13 << 3) + 4 | 0);
  }
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
function __ZN7WebCore17GlyphPageTreeNode18treeGlyphPageCountEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i1 = HEAP32[H_BASE + 16 >> 2] | 0;
 L1 : do {
  if ((i1 | 0) == 0) {
   i2 = 0;
  } else {
   i3 = HEAP32[i1 >> 2] | 0;
   i4 = HEAP32[i1 + 4 >> 2] | 0;
   i5 = i3 + (i4 << 3) | 0;
   if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
    i2 = 0;
    break;
   }
   L4 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L4;
      }
      i8 = i7 + 8 | 0;
      if ((i8 | 0) == (i5 | 0)) {
       i2 = 0;
       break L1;
      } else {
       i7 = i8;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    i2 = 0;
    break;
   } else {
    i9 = i6;
    i10 = 0;
   }
   while (1) {
    i3 = (__ZNK7WebCore17GlyphPageTreeNode9pageCountEv(HEAP32[i9 + 4 >> 2] | 0) | 0) + i10 | 0;
    i4 = i9 + 8 | 0;
    if ((i4 | 0) == (i5 | 0)) {
     i2 = i3;
     break L1;
    } else {
     i11 = i4;
    }
    while (1) {
     i4 = HEAP32[i11 >> 2] | 0;
     if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
      break;
     }
     i4 = i11 + 8 | 0;
     if ((i4 | 0) == (i5 | 0)) {
      i2 = i3;
      break L1;
     } else {
      i11 = i4;
     }
    }
    if ((i11 | 0) == (i5 | 0)) {
     i2 = i3;
     break;
    } else {
     i9 = i11;
     i10 = i3;
    }
   }
  }
 } while (0);
 i10 = HEAP32[H_BASE + 24 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i12 = i2;
  return i12 | 0;
 }
 i12 = (__ZNK7WebCore17GlyphPageTreeNode9pageCountEv(i10) | 0) + i2 | 0;
 return i12 | 0;
}
function __ZNK7WebCore17GlyphPageTreeNode9pageCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
 } else {
  i3 = (HEAP32[i2 + 8 >> 2] | 0) == (i1 | 0) | 0;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i2 + (i4 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  i6 = i3;
  return i6 | 0;
 }
 L7 : do {
  if ((i4 | 0) == 0) {
   i7 = i2;
  } else {
   i1 = i2;
   while (1) {
    i8 = HEAP32[i1 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i7 = i1;
     break L7;
    }
    i8 = i1 + 8 | 0;
    if ((i8 | 0) == (i5 | 0)) {
     i6 = i3;
     break;
    } else {
     i1 = i8;
    }
   }
   return i6 | 0;
  }
 } while (0);
 if ((i7 | 0) == (i5 | 0)) {
  i6 = i3;
  return i6 | 0;
 } else {
  i9 = i7;
  i10 = i3;
 }
 L15 : while (1) {
  i3 = (__ZNK7WebCore17GlyphPageTreeNode9pageCountEv(HEAP32[i9 + 4 >> 2] | 0) | 0) + i10 | 0;
  i7 = i9 + 8 | 0;
  if ((i7 | 0) == (i5 | 0)) {
   i6 = i3;
   i11 = 13;
   break;
  } else {
   i12 = i7;
  }
  while (1) {
   i7 = HEAP32[i12 >> 2] | 0;
   if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
    break;
   }
   i7 = i12 + 8 | 0;
   if ((i7 | 0) == (i5 | 0)) {
    i6 = i3;
    i11 = 15;
    break L15;
   } else {
    i12 = i7;
   }
  }
  if ((i12 | 0) == (i5 | 0)) {
   i6 = i3;
   i11 = 14;
   break;
  } else {
   i9 = i12;
   i10 = i3;
  }
 }
 if ((i11 | 0) == 13) {
  return i6 | 0;
 } else if ((i11 | 0) == 14) {
  return i6 | 0;
 } else if ((i11 | 0) == 15) {
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore17GlyphPageTreeNode17pruneTreeFontDataEPKNS_14SimpleFontDataE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[H_BASE + 16 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i2 >> 2] | 0;
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   i5 = i3 + (i4 << 3) | 0;
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    break;
   }
   L4 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L4;
      }
      i7 = i7 + 8 | 0;
      if ((i7 | 0) == (i5 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    break;
   } else {
    i9 = i6;
   }
   while (1) {
    __ZN7WebCore17GlyphPageTreeNode13pruneFontDataEPKNS_14SimpleFontDataEj(HEAP32[i9 + 4 >> 2] | 0, i1, 0);
    i3 = i9 + 8 | 0;
    if ((i3 | 0) == (i5 | 0)) {
     break L1;
    } else {
     i10 = i3;
    }
    while (1) {
     i3 = HEAP32[i10 >> 2] | 0;
     if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
      break;
     }
     i3 = i10 + 8 | 0;
     if ((i3 | 0) == (i5 | 0)) {
      break L1;
     } else {
      i10 = i3;
     }
    }
    if ((i10 | 0) == (i5 | 0)) {
     break;
    } else {
     i9 = i10;
    }
   }
  }
 } while (0);
 i10 = HEAP32[H_BASE + 24 >> 2] | 0;
 if ((i10 | 0) == 0) {
  return;
 }
 __ZN7WebCore17GlyphPageTreeNode13pruneFontDataEPKNS_14SimpleFontDataEj(i10, i1, 0);
 return;
}
function __ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[H_BASE + 16 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i2 >> 2] | 0;
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   i5 = i3 + (i4 << 3) | 0;
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    break;
   }
   L4 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L4;
      }
      i7 = i7 + 8 | 0;
      if ((i7 | 0) == (i5 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    break;
   } else {
    i9 = i6;
   }
   while (1) {
    __ZN7WebCore17GlyphPageTreeNode19pruneCustomFontDataEPKNS_8FontDataE(HEAP32[i9 + 4 >> 2] | 0, i1);
    i3 = i9 + 8 | 0;
    if ((i3 | 0) == (i5 | 0)) {
     break L1;
    } else {
     i10 = i3;
    }
    while (1) {
     i3 = HEAP32[i10 >> 2] | 0;
     if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
      break;
     }
     i3 = i10 + 8 | 0;
     if ((i3 | 0) == (i5 | 0)) {
      break L1;
     } else {
      i10 = i3;
     }
    }
    if ((i10 | 0) == (i5 | 0)) {
     break;
    } else {
     i9 = i10;
    }
   }
  }
 } while (0);
 i10 = HEAP32[H_BASE + 24 >> 2] | 0;
 if ((i10 | 0) == 0) {
  return;
 }
 __ZN7WebCore17GlyphPageTreeNode19pruneCustomFontDataEPKNS_8FontDataE(i10, i1);
 return;
}
function __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEEaSERKNS_10PassOwnPtrIS2_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i4 + 36 | 0);
 i2 = HEAP32[i4 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i4 + 4 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i3 = 0;
   while (1) {
    if ((HEAP32[i2 + (i3 << 3) >> 2] | 0) != -1) {
     __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i2 + (i3 << 3) + 4 | 0);
    }
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i4);
 return i1 | 0;
}
function __ZN3WTF10PassOwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i2 + 36 | 0);
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i4 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    if ((HEAP32[i1 + (i3 << 3) >> 2] | 0) != -1) {
     __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i1 + (i3 << 3) + 4 | 0);
    }
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i2 + 36 | 0);
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i4 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i3 = 0;
   while (1) {
    if ((HEAP32[i1 + (i3 << 3) >> 2] | 0) != -1) {
     __ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev(i1 + (i3 << 3) + 4 | 0);
    }
    i3 = i3 + 1 | 0;
    if ((i3 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
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
function dynCall_iiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return FUNCTION_TABLE_iiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b0(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(0);
 return 0;
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
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiiiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiiiiii: dynCall_iiiiiiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiiiiii": invoke_iiiiiiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = asm["dynCall_iiiiiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore17GlyphPageTreeNode9pageCountEv","__ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EEiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore17GlyphPageTreeNode23pruneTreeCustomFontDataEPKNS_8FontDataE","__ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEEaSERKNS_10PassOwnPtrIS2_EE","_strlen","__ZN7WebCore17GlyphPageTreeNode14initializePageEPKNS_8FontDataEj","__ZN3WTF9HashTableIPKN7WebCore8FontDataENS_12KeyValuePairIS4_NS_6OwnPtrINS1_17GlyphPageTreeNodeEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS4_NS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_","__ZN3WTF6OwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev","__ZN3WTF9HashTableIPKN7WebCore8FontDataENS_12KeyValuePairIS4_NS_6OwnPtrINS1_17GlyphPageTreeNodeEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E8reinsertEOS9_","__ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj","__ZN7WebCore17GlyphPageTreeNode19pruneCustomFontDataEPKNS_8FontDataE","__ZN3WTF9HashTableIPKN7WebCore8FontDataENS_12KeyValuePairIS4_NS_6OwnPtrINS1_17GlyphPageTreeNodeEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_","__ZN7WebCore17GlyphPageTreeNode17pruneTreeFontDataEPKNS_14SimpleFontDataE","_memset","__ZN7WebCore17GlyphPageTreeNode18treeGlyphPageCountEv","_memcpy","__ZN3WTF10PassOwnPtrIN7WebCore17GlyphPageTreeNodeEED2Ev","__ZN7WebCore17GlyphPageTreeNode7getRootEj","__ZN3WTF7HashMapIPKN7WebCore8FontDataENS_6OwnPtrINS1_17GlyphPageTreeNodeEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSA_IS7_EEE4takeERKS4_","__ZN7WebCore17GlyphPageTreeNode13pruneFontDataEPKNS_14SimpleFontDataEj","__ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore17GlyphPageTreeNodeEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6expandEPS5_","__ZN3WTF15CrashOnOverflow10overflowedEv"]

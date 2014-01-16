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
H_BASE = parentModule["_malloc"](904 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 904;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([105,115,111,45,105,114,45,49,48,48,0,0,0,0,0,0,99,115,73,83,79,76,97,116,105,110,49,0,0,0,0,0,73,66,77,56,49,57,0,0,67,80,56,49,57,0,0,0,105,98,109,45,49,50,53,50,95,80,49,48,48,45,50,48,48,48,0,0,0,0,0,0,105,98,109,45,49,50,53,50,0,0,0,0,0,0,0,0,87,105,110,76,97,116,105,110,49,0,0,0,0,0,0,0,120,45,97,110,115,105,0,0,117,115,0,0,0,0,0,0,105,115,111,45,105,114,45,54,45,117,115,0,0,0,0,0,105,115,111,45,105,114,45,54,0,0,0,0,0,0,0,0,105,98,109,45,51,54,55,95,80,49,48,48,45,49,57,57,53,0,0,0,0,0,0,0,99,115,65,83,67,73,73,0,85,83,45,65,83,67,73,73,0,0,0,0,0,0,0,0,99,112,51,54,55,0,0,0,73,83,79,95,54,52,54,46,105,114,118,58,49,57,57,49,0,0,0,0,0,0,0,0,73,83,79,54,52,54,45,85,83,0,0,0,0,0,0,0,73,66,77,51,54,55,0,0,65,83,67,73,73,0,0,0,65,78,83,73,95,88,51,46,52,45,49,57,56,54,0,0,65,78,83,73,95,88,51,46,52,45,49,57,54,56,0,0,108,97,116,105,110,49,0,0,108,49,0,0,0,0,0,0,105,115,111,95,56,56,53,57,45,49,58,49,57,56,55,0,73,83,79,45,56,56,53,57,45,49,0,0,0,0,0,0,119,105,110,100,111,119,115,45,49,50,53,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,0,52,0,53,0,54,0,55,0,56,0,57,0,58,0,59,0,60,0,61,0,62,0,63,0,64,0,65,0,66,0,67,0,68,0,69,0,70,0,71,0,72,0,73,0,74,0,75,0,76,0,77,0,78,0,79,0,80,0,81,0,82,0,83,0,84,0,85,0,86,0,87,0,88,0,89,0,90,0,91,0,92,0,93,0,94,0,95,0,96,0,97,0,98,0,99,0,100,0,101,0,102,0,103,0,104,0,105,0,106,0,107,0,108,0,109,0,110,0,111,0,112,0,113,0,114,0,115,0,116,0,117,0,118,0,119,0,120,0,121,0,122,0,123,0,124,0,125,0,126,0,127,0,172,32,129,0,26,32,146,1,30,32,38,32,32,32,33,32,198,2,48,32,96,1,57,32,82,1,141,0,125,1,143,0,144,0,24,32,25,32,28,32,29,32,34,32,19,32,20,32,220,2,34,33,97,1,58,32,83,1,157,0,126,1,120,1,160,0,161,0,162,0,163,0,164,0,165,0,166,0,167,0,168,0,169,0,170,0,171,0,172,0,173,0,174,0,175,0,176,0,177,0,178,0,179,0,180,0,181,0,182,0,183,0,184,0,185,0,186,0,187,0,188,0,189,0,190,0,191,0,192,0,193,0,194,0,195,0,196,0,197,0,198,0,199,0,200,0,201,0,202,0,203,0,204,0,205,0,206,0,207,0,208,0,209,0,210,0,211,0,212,0,213,0,214,0,215,0,216,0,217,0,218,0,219,0,220,0,221,0,222,0,223,0,224,0,225,0,226,0,227,0,228,0,229,0,230,0,231,0,232,0,233,0,234,0,235,0,236,0,237,0,238,0,239,0,240,0,241,0,242,0,243,0,244,0,245,0,246,0,247,0,248,0,249,0,250,0,251,0,252,0,253,0,254,0,255,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZTVN7WebCore15TextCodecLatin1E=(H_BASE+368)|0;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15TextCodecLatin16decodeEPKcjbbRb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i7 | 0;
 i5 = i7 + 8 | 0;
 i2 = i7 + 16 | 0;
 i8 = i7 + 24 | 0;
 if ((i4 | 0) == 0) {
  i9 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i9;
  if ((i9 | 0) == 0) {
   STACKTOP = i7;
   return;
  }
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  STACKTOP = i7;
  return;
 }
 __ZN3WTF10StringImpl19createUninitializedEjRPh(i5, i4, i6);
 i10 = i3 + i4 | 0;
 i9 = i10 & -4;
 L8 : do {
  if ((i4 | 0) > 0) {
   i11 = HEAP32[i6 >> 2] | 0;
   i12 = i3;
   while (1) {
    i13 = HEAP8[i12] | 0;
    L12 : do {
     if (i13 << 24 >> 24 > -1) {
      if ((i12 & 3 | 0) == 0) {
       L16 : do {
        if (i12 >>> 0 < i9 >>> 0) {
         i14 = i11;
         i15 = i12;
         while (1) {
          i16 = HEAP32[i15 >> 2] | 0;
          if ((i16 & -2139062144 | 0) != 0) {
           break;
          }
          i17 = i14;
          tempBigInt = i16;
          HEAP8[i17] = tempBigInt;
          tempBigInt = tempBigInt >> 8;
          HEAP8[i17 + 1 | 0] = tempBigInt;
          tempBigInt = tempBigInt >> 8;
          HEAP8[i17 + 2 | 0] = tempBigInt;
          tempBigInt = tempBigInt >> 8;
          HEAP8[i17 + 3 | 0] = tempBigInt;
          i17 = i15 + 4 | 0;
          i18 = i14 + 4 | 0;
          if (i17 >>> 0 < i9 >>> 0) {
           i14 = i18;
           i15 = i17;
          } else {
           i19 = i18;
           i20 = i17;
           break L16;
          }
         }
         i21 = i15;
         i22 = i14;
         i23 = i16 & 255;
         i24 = 15;
         break L12;
        } else {
         i19 = i11;
         i20 = i12;
        }
       } while (0);
       if ((i20 | 0) == (i10 | 0)) {
        i24 = 18;
        break L8;
       }
       i25 = i20;
       i26 = i19;
       i27 = HEAP8[i20] | 0;
      } else {
       i25 = i12;
       i26 = i11;
       i27 = i13;
      }
      HEAP8[i26] = i27;
      i28 = i25;
      i29 = i26;
     } else {
      i21 = i12;
      i22 = i11;
      i23 = i13;
      i24 = 15;
     }
    } while (0);
    if ((i24 | 0) == 15) {
     i24 = 0;
     i30 = i22;
     i13 = HEAP16[H_BASE + 400 + ((i23 & 255) << 1) >> 1] | 0;
     if ((i13 & 65535) >>> 0 > 255 >>> 0) {
      break;
     }
     HEAP8[i22] = i13;
     i28 = i21;
     i29 = i22;
    }
    i13 = i28 + 1 | 0;
    if (i13 >>> 0 < i10 >>> 0) {
     i11 = i29 + 1 | 0;
     i12 = i13;
    } else {
     i24 = 18;
     break L8;
    }
   }
   __ZN3WTF10StringImpl19createUninitializedEjRPt(i8, i4, i2);
   i12 = HEAP32[i2 >> 2] | 0;
   i11 = HEAP32[i6 >> 2] | 0;
   if (i11 >>> 0 < i22 >>> 0) {
    i13 = i11;
    i17 = i12;
    i18 = i11;
    while (1) {
     i11 = i18 + 1 | 0;
     HEAP16[i17 >> 1] = HEAPU8[i18] | 0;
     if (i11 >>> 0 < i22 >>> 0) {
      i17 = i17 + 2 | 0;
      i18 = i11;
     } else {
      break;
     }
    }
    i31 = i12 + (i30 - i13 << 1) | 0;
   } else {
    i31 = i12;
   }
   HEAP16[i31 >> 1] = HEAP16[H_BASE + 400 + ((HEAPU8[i21] | 0) << 1) >> 1] | 0;
   i18 = i21 + 1 | 0;
   L35 : do {
    if (i18 >>> 0 < i10 >>> 0) {
     i17 = i18;
     i11 = i31;
     while (1) {
      i32 = i11 + 2 | 0;
      i33 = HEAP8[i17] | 0;
      L38 : do {
       if (i33 << 24 >> 24 > -1) {
        if ((i17 & 3 | 0) == 0) {
         L42 : do {
          if (i17 >>> 0 < i9 >>> 0) {
           i34 = i32;
           i35 = i17;
           while (1) {
            i36 = HEAP32[i35 >> 2] | 0;
            if ((i36 & -2139062144 | 0) != 0) {
             break;
            }
            HEAP16[i34 >> 1] = i36 & 255;
            HEAP16[i34 + 2 >> 1] = HEAPU8[i35 + 1 | 0] | 0;
            HEAP16[i34 + 4 >> 1] = HEAPU8[i35 + 2 | 0] | 0;
            HEAP16[i34 + 6 >> 1] = HEAPU8[i35 + 3 | 0] | 0;
            i37 = i35 + 4 | 0;
            i38 = i34 + 8 | 0;
            if (i37 >>> 0 < i9 >>> 0) {
             i34 = i38;
             i35 = i37;
            } else {
             i39 = i38;
             i40 = i37;
             break L42;
            }
           }
           i41 = i35;
           i42 = i34;
           i43 = i36 & 255;
           i24 = 33;
           break L38;
          } else {
           i39 = i32;
           i40 = i17;
          }
         } while (0);
         if ((i40 | 0) == (i10 | 0)) {
          break L35;
         }
         i44 = i40;
         i45 = i39;
         i46 = HEAP8[i40] | 0;
        } else {
         i44 = i17;
         i45 = i32;
         i46 = i33;
        }
        HEAP16[i45 >> 1] = i46 & 255;
        i47 = i44;
        i48 = i45;
       } else {
        i41 = i17;
        i42 = i32;
        i43 = i33;
        i24 = 33;
       }
      } while (0);
      if ((i24 | 0) == 33) {
       i24 = 0;
       HEAP16[i42 >> 1] = HEAP16[H_BASE + 400 + ((i43 & 255) << 1) >> 1] | 0;
       i47 = i41;
       i48 = i42;
      }
      i33 = i47 + 1 | 0;
      if (i33 >>> 0 < i10 >>> 0) {
       i17 = i33;
       i11 = i48;
      } else {
       break;
      }
     }
    }
   } while (0);
   i18 = i8 | 0;
   i12 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i1 >> 2] = i12;
  } else {
   i24 = 18;
  }
 } while (0);
 if ((i24 | 0) == 18) {
  i24 = i5 | 0;
  i8 = HEAP32[i24 >> 2] | 0;
  HEAP32[i24 >> 2] = 0;
  HEAP32[i1 >> 2] = i8;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i5 = i8 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore15TextCodecLatin16encodeEPKtjNS_19UnencodableHandlingE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i2 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 __ZN3WTF7CString16newUninitializedEjRPc(i8, i4, i7);
 i9 = (i4 | 0) == 0;
 do {
  if (!i9) {
   i10 = 0;
   i11 = 0;
   while (1) {
    i12 = HEAP16[i3 + (i10 << 1) >> 1] | 0;
    HEAP8[(HEAP32[i7 >> 2] | 0) + i10 | 0] = i12;
    i11 = i12 & 65535 | i11;
    i10 = i10 + 1 | 0;
    if (i10 >>> 0 >= i4 >>> 0) {
     break;
    }
   }
   if ((i11 & 65408 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i12 = i10 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i10);
      break;
     } else {
      HEAP32[i12 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i10 = i6 | 0;
   if (i9) {
    __ZN3WTF7CStringC1EPKcj(i1, 0, 0);
    STACKTOP = i2;
    return;
   }
   i11 = __ZN3WTF18fastMallocGoodSizeEj(i4) | 0;
   i13 = i4;
   i12 = i11;
   i14 = 0;
   i15 = 0;
   i16 = __ZN3WTF10fastMallocEj(i11) | 0;
   L16 : while (1) {
    i11 = i14;
    i17 = i15;
    L18 : while (1) {
     i18 = i11 + 1 | 0;
     i19 = HEAPU16[i3 + (i11 << 1) >> 1] | 0;
     do {
      if ((i19 & 64512 | 0) == 55296 & i18 >>> 0 < i4 >>> 0) {
       i20 = HEAPU16[i3 + (i18 << 1) >> 1] | 0;
       if ((i20 & 64512 | 0) != 56320) {
        i21 = i18;
        i22 = i19;
        break;
       }
       i21 = i11 + 2 | 0;
       i22 = (i19 << 10) - 56613888 + i20 | 0;
      } else {
       i21 = i18;
       i22 = i19;
      }
     } while (0);
     if ((i22 & 255 | 0) == (i22 | 0)) {
      if ((i22 & 224 | 0) == 128) {
       i23 = -128;
       i24 = 18;
      } else {
       i25 = i22 & 255;
      }
     } else {
      i23 = -128;
      i24 = 18;
     }
     if ((i24 | 0) == 18) {
      while (1) {
       i24 = 0;
       if ((i23 & 255) >>> 0 >= 160 >>> 0) {
        break L18;
       }
       if ((HEAPU16[H_BASE + 400 + ((i23 & 255) << 1) >> 1] | 0 | 0) == (i22 | 0)) {
        i25 = i23;
        break;
       } else {
        i23 = i23 + 1 & 255;
        i24 = 18;
       }
      }
     }
     i19 = i17 + 1 | 0;
     HEAP8[i16 + i17 | 0] = i25;
     if (i21 >>> 0 < i4 >>> 0) {
      i11 = i21;
      i17 = i19;
     } else {
      i26 = i19;
      i27 = i16;
      break L16;
     }
    }
    i11 = __ZN7WebCore9TextCodec25getUnencodableReplacementEjNS_19UnencodableHandlingEPc(i22, i5, i10) | 0;
    i19 = i11 + i17 | 0;
    i18 = i19 + (i4 - i21) | 0;
    do {
     if (i12 >>> 0 < i18 >>> 0) {
      i20 = i12 + 1 + (i12 >>> 2) | 0;
      i28 = i20 >>> 0 > 16 >>> 0 ? i20 : 16;
      i20 = i28 >>> 0 > i18 >>> 0 ? i28 : i18;
      if (i12 >>> 0 >= i20 >>> 0) {
       i29 = i16;
       i30 = i12;
       break;
      }
      i28 = __ZN3WTF18fastMallocGoodSizeEj(i20) | 0;
      i20 = __ZN3WTF10fastMallocEj(i28) | 0;
      _memcpy(i20 | 0, i16 | 0, i13) | 0;
      if ((i16 | 0) == 0) {
       i29 = i20;
       i30 = i28;
       break;
      }
      i31 = (i20 | 0) == (i16 | 0);
      __ZN3WTF8fastFreeEPv(i16);
      i29 = i31 ? 0 : i20;
      i30 = i31 ? 0 : i28;
     } else {
      i29 = i16;
      i30 = i12;
     }
    } while (0);
    _memcpy(i29 + i17 | 0, i10 | 0, i11) | 0;
    if (i21 >>> 0 < i4 >>> 0) {
     i13 = i18;
     i12 = i30;
     i14 = i21;
     i15 = i19;
     i16 = i29;
    } else {
     i26 = i19;
     i27 = i29;
     break;
    }
   }
   __ZN3WTF7CStringC1EPKcj(i1, i27, i26);
   if ((i27 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   __ZN3WTF8fastFreeEPv(i27);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i27 = i8 | 0;
 i8 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = 0;
 HEAP32[i1 >> 2] = i8;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15TextCodecLatin121registerEncodingNamesEPFvPKcS2_E(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 352 | 0, H_BASE + 352 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 336 | 0, H_BASE + 336 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 192 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 96 | 0, H_BASE + 352 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 80 | 0, H_BASE + 352 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 56 | 0, H_BASE + 352 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 48 | 0, H_BASE + 336 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 40 | 0, H_BASE + 336 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 24 | 0, H_BASE + 336 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 8 | 0, H_BASE + 336 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 320 | 0, H_BASE + 336 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 312 | 0, H_BASE + 336 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 304 | 0, H_BASE + 336 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 288 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 272 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 264 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 256 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 240 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 216 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 208 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 184 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 160 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 144 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 128 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 120 | 0, H_BASE + 192 | 0);
 FUNCTION_TABLE_vii[i1 & 1](H_BASE + 112 | 0, H_BASE + 192 | 0);
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
function __ZN7WebCore15TextCodecLatin114registerCodecsEPFvPKcPFN3WTF10PassOwnPtrINS_9TextCodecEEERKNS_12TextEncodingEPKvESB_E(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_viii[i1 & 3](H_BASE + 352 | 0, F_BASE_viii + 2 | 0, 0);
 FUNCTION_TABLE_viii[i1 & 3](H_BASE + 336 | 0, F_BASE_viii + 2 | 0, 0);
 FUNCTION_TABLE_viii[i1 & 3](H_BASE + 192 | 0, F_BASE_viii + 2 | 0, 0);
 return;
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function __ZN7WebCoreL36newStreamingTextDecoderWindowsLatin1ERKNS_12TextEncodingEPKv(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = __ZN3WTF10fastMallocEj(4) | 0;
 HEAP32[i3 >> 2] = H_BASE + 376;
 HEAP32[i1 >> 2] = i3;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function runPostSets() {
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_viiiiiii + 2;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_viiiii + 2;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function b7(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(7);
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
function __ZN7WebCore15TextCodecLatin1D0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TextCodecD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore15TextCodecLatin1D1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TextCodecD2Ev(i1 | 0);
 return;
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore15TextCodecLatin16encodeEPKtjNS_19UnencodableHandlingE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore15TextCodecLatin1D0Ev,b1,__ZN7WebCore15TextCodecLatin1D1Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCoreL36newStreamingTextDecoderWindowsLatin1ERKNS_12TextEncodingEPKv,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiiiiii = [b7,b7,__ZN7WebCore15TextCodecLatin16decodeEPKcjbbRb,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiiiiii: dynCall_viiiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiiiiii": invoke_viiiiiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore15TextCodecLatin121registerEncodingNamesEPFvPKcS2_E","__ZN7WebCore15TextCodecLatin1D1Ev","__ZN7WebCore15TextCodecLatin16encodeEPKtjNS_19UnencodableHandlingE","_memset","__ZN7WebCore15TextCodecLatin1D0Ev","_memcpy","__ZN7WebCoreL36newStreamingTextDecoderWindowsLatin1ERKNS_12TextEncodingEPKv","__ZN7WebCore15TextCodecLatin114registerCodecsEPFvPKcPFN3WTF10PassOwnPtrINS_9TextCodecEEERKNS_12TextEncodingEPKvESB_E","__ZN7WebCore15TextCodecLatin16decodeEPKcjbbRb"]

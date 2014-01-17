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
H_BASE = parentModule["_malloc"](8 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 8;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([38,32,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZN7WebCore7TextRun21s_allowsRoundingHacksE=env.__ZN7WebCore7TextRun21s_allowsRoundingHacksE|0;
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
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
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
function __ZN7WebCoreL14truncateStringERKN3WTF6StringEfRKNS_4FontEPFjS3_jjPtbEbPfbfb(i1, i2, d3, i4, i5, i6, i7, i8, d9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 d9 = +d9;
 i10 = i10 | 0;
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, d41 = +0, i42 = 0, i43 = 0, i44 = 0, d45 = +0, i46 = 0, d47 = +0, i48 = 0, i49 = 0, d50 = +0, i51 = 0, d52 = +0, i53 = 0, d54 = +0, i55 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4216 | 0;
 i12 = i11 | 0;
 i13 = i11 + 40 | 0;
 i14 = i11 + 80 | 0;
 i15 = i11 + 120 | 0;
 i16 = i2 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if ((i17 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i11;
  return;
 }
 if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = i17;
  i18 = i17 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
  STACKTOP = i11;
  return;
 }
 i18 = (i7 | 0) != 0;
 if (i18) {
  HEAPF32[i7 >> 2] = +0;
 }
 do {
  if (i8) {
   HEAP32[i13 + 4 >> 2] = 1;
   HEAP32[i13 + 8 >> 2] = 1;
   HEAPF32[i13 + 12 >> 2] = +0;
   HEAPF32[i13 + 16 >> 2] = +1;
   HEAPF32[i13 + 20 >> 2] = +0;
   i17 = i13 + 24 | 0;
   i19 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
   HEAP32[i17 >> 2] = i19 << 7 & 128 | i19 << 8 & 256 | 81;
   HEAP32[i13 + 28 >> 2] = 0;
   i19 = i13 + 32 | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i13 >> 2] = H_BASE + 8;
   if (i6) {
    HEAP32[i17 >> 2] = 81;
   }
   d20 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i4, i13, 0, 0);
   i17 = HEAP32[i19 >> 2] | 0;
   if ((i17 | 0) == 0) {
    d21 = d20;
    break;
   }
   i19 = i17 + 4 | 0;
   i17 = i19 | 0;
   i22 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i17 >> 2] = i22;
    d21 = d20;
    break;
   }
   i22 = i19 - 4 | 0;
   if ((i22 | 0) == 0) {
    d21 = d20;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 1](i22);
   d21 = d20;
  } else {
   d21 = d9;
  }
 } while (0);
 i13 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i23 = 0;
   i24 = 0;
   i25 = i15;
   i26 = 22;
  } else {
   i22 = HEAP32[i13 + 4 >> 2] | 0;
   if (i22 >>> 0 > 2048 >>> 0) {
    i19 = i8 ? 2047 : 0;
    i17 = i15 | 0;
    i27 = __ZN7WebCoreL22centerTruncateToBufferERKN3WTF6StringEjjPtb(i2, i22, i19, i17, i8) | 0;
    i28 = i19;
    i29 = i22;
    i30 = i17;
    break;
   }
   i17 = i15;
   if ((HEAP32[i13 + 16 >> 2] & 32 | 0) == 0) {
    i23 = HEAP32[i13 + 8 >> 2] | 0;
    i24 = i22;
    i25 = i17;
    i26 = 22;
    break;
   } else {
    i23 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i13) | 0;
    i24 = i22;
    i25 = i17;
    i26 = 22;
    break;
   }
  }
 } while (0);
 if ((i26 | 0) == 22) {
  _memcpy(i25 | 0, i23 | 0, i24 << 1) | 0;
  i27 = i24;
  i28 = i24;
  i29 = i24;
  i30 = i15 | 0;
 }
 HEAP32[i12 + 4 >> 2] = i27;
 HEAP32[i12 + 8 >> 2] = i27;
 HEAPF32[i12 + 12 >> 2] = +0;
 HEAPF32[i12 + 16 >> 2] = +1;
 HEAPF32[i12 + 20 >> 2] = +0;
 i24 = i12 + 24 | 0;
 i23 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
 i25 = HEAP32[i24 >> 2] & -1024 | 81;
 HEAP32[i24 >> 2] = i23 << 7 & 128 | i25 | i23 << 8 & 256;
 HEAP32[i12 + 28 >> 2] = 0;
 i23 = i12 + 32 | 0;
 HEAP32[i23 >> 2] = 0;
 i26 = i15;
 HEAP32[i12 >> 2] = i26;
 if (i6) {
  HEAP32[i24 >> 2] = i25;
 }
 d20 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i4, i12, 0, 0);
 i12 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i23 = i12 + 4 | 0;
   i25 = i23 | 0;
   i24 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i25 >> 2] = i24;
    break;
   }
   i24 = i23 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
  }
 } while (0);
 if (i8 | i10 ^ 1) {
  d31 = d20;
 } else {
  d31 = d20 + d9;
 }
 if (d31 - d3 < +1e-4) {
  if (i18) {
   HEAPF32[i7 >> 2] = d31;
  }
  i10 = HEAP32[i16 >> 2] | 0;
  HEAP32[i1 >> 2] = i10;
  if ((i10 | 0) == 0) {
   STACKTOP = i11;
   return;
  }
  i16 = i10 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
  STACKTOP = i11;
  return;
 }
 i16 = d21 < d3;
 i10 = i14 + 4 | 0;
 i12 = i14 + 8 | 0;
 i24 = i14 + 12 | 0;
 i23 = i14 + 16 | 0;
 i25 = i14 + 20 | 0;
 i15 = i14 + 24 | 0;
 i13 = i14 + 28 | 0;
 i17 = i14 + 32 | 0;
 i22 = i14 | 0;
 i19 = i27;
 d20 = d31;
 i27 = i16 ? i28 : 2;
 d31 = d21;
 i32 = i16 & 1 ^ 1;
 i16 = i28;
 L58 : while (1) {
  i28 = i32 + 1 | 0;
  if (i6) {
   i33 = i19;
   d21 = d20;
   i34 = i27;
   i35 = i16;
   while (1) {
    if (i28 >>> 0 >= i34 >>> 0) {
     i36 = i35;
     i37 = i33;
     break L58;
    }
    i38 = ~~(+((i34 - i32 | 0) >>> 0 >>> 0) / (d21 - d31) * d3);
    if (i38 >>> 0 > i32 >>> 0) {
     i39 = i38 >>> 0 < i34 >>> 0 ? i38 : i34 - 1 | 0;
    } else {
     i39 = i28;
    }
    i38 = FUNCTION_TABLE_iiiiii[i5 & 15](i2, i29, i39, i30, i8) | 0;
    HEAP32[i10 >> 2] = i38;
    HEAP32[i12 >> 2] = i38;
    HEAPF32[i24 >> 2] = +0;
    HEAPF32[i23 >> 2] = +1;
    HEAPF32[i25 >> 2] = +0;
    i40 = HEAP32[i15 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i17 >> 2] = 0;
    HEAP32[i22 >> 2] = i26;
    HEAP32[i15 >> 2] = i40 & -1024 | 81;
    d41 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i4, i14, 0, 0);
    i40 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i40 | 0) != 0) {
      i42 = i40 + 4 | 0;
      i43 = i42 | 0;
      i44 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
      if ((i44 | 0) != 0) {
       HEAP32[i43 >> 2] = i44;
       break;
      }
      i44 = i42 - 4 | 0;
      if ((i44 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 4 >> 2] & 1](i44);
     }
    } while (0);
    if (i8) {
     d45 = d41;
    } else {
     d45 = d41 + d9;
    }
    if (d45 > d3) {
     i33 = i38;
     d21 = d45;
     i34 = i39;
     i35 = i39;
    } else {
     i46 = i34;
     d47 = d21;
     i48 = i39;
     i49 = i38;
     d50 = d45;
     break;
    }
   }
  } else {
   i34 = i19;
   d21 = d20;
   i35 = i27;
   i33 = i16;
   while (1) {
    if (i28 >>> 0 >= i35 >>> 0) {
     i36 = i33;
     i37 = i34;
     break L58;
    }
    i40 = ~~(+((i35 - i32 | 0) >>> 0 >>> 0) / (d21 - d31) * d3);
    if (i40 >>> 0 > i32 >>> 0) {
     i51 = i40 >>> 0 < i35 >>> 0 ? i40 : i35 - 1 | 0;
    } else {
     i51 = i28;
    }
    i40 = FUNCTION_TABLE_iiiiii[i5 & 15](i2, i29, i51, i30, i8) | 0;
    HEAP32[i10 >> 2] = i40;
    HEAP32[i12 >> 2] = i40;
    HEAPF32[i24 >> 2] = +0;
    HEAPF32[i23 >> 2] = +1;
    HEAPF32[i25 >> 2] = +0;
    i44 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
    HEAP32[i15 >> 2] = i44 << 7 & 128 | (HEAP32[i15 >> 2] & -1024 | 81) | i44 << 8 & 256;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i17 >> 2] = 0;
    HEAP32[i22 >> 2] = i26;
    d52 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i4, i14, 0, 0);
    i44 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i44 | 0) != 0) {
      i42 = i44 + 4 | 0;
      i43 = i42 | 0;
      i53 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
      if ((i53 | 0) != 0) {
       HEAP32[i43 >> 2] = i53;
       break;
      }
      i53 = i42 - 4 | 0;
      if ((i53 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i53 >> 2] | 0) + 4 >> 2] & 1](i53);
     }
    } while (0);
    if (i8) {
     d54 = d52;
    } else {
     d54 = d52 + d9;
    }
    if (d54 > d3) {
     i34 = i40;
     d21 = d54;
     i35 = i51;
     i33 = i51;
    } else {
     i46 = i35;
     d47 = d21;
     i48 = i51;
     i49 = i40;
     d50 = d54;
     break;
    }
   }
  }
  if (!i18) {
   i19 = i49;
   d20 = d47;
   i27 = i46;
   d31 = d50;
   i32 = i48;
   i16 = i48;
   continue;
  }
  HEAPF32[i7 >> 2] = d50;
  i19 = i49;
  d20 = d47;
  i27 = i46;
  d31 = d50;
  i32 = i48;
  i16 = i48;
 }
 i48 = (i32 | 0) == 0 ? 1 : i32;
 if ((i36 | 0) == (i48 | 0)) {
  i55 = i37;
 } else {
  i55 = FUNCTION_TABLE_iiiiii[i5 & 15](i2, i29, i48, i30, i8) | 0;
 }
 __ZN3WTF6StringC1EPKtj(i1, i30, i55);
 STACKTOP = i11;
 return;
}
function __ZN7WebCoreL20leftTruncateToBufferERKN3WTF6StringEjjPtb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i2 - i3 | 0;
 i3 = i1 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i9 = 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i9 = HEAP32[i1 + 8 >> 2] | 0;
    break;
   } else {
    i9 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
    break;
   }
  }
 } while (0);
 __ZN7WebCore31NonSharedCharacterBreakIteratorC1EPKti(i7, i9, i2);
 __ZN7WebCore18textBreakFollowingEPNS_17TextBreakIteratorEi(HEAP32[i7 >> 2] | 0, i8) | 0;
 do {
  if (i8 >>> 0 < i2 >>> 0) {
   i9 = HEAP32[i3 >> 2] | 0;
   i1 = (i9 | 0) == 0;
   do {
    if (i1) {
     i10 = 0;
    } else {
     if ((HEAP32[i9 + 4 >> 2] | 0) >>> 0 <= i8 >>> 0) {
      i10 = 0;
      break;
     }
     i11 = i9 + 8 | 0;
     if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
      i10 = HEAP16[(HEAP32[i11 >> 2] | 0) + (i8 << 1) >> 1] | 0;
      break;
     } else {
      i10 = HEAPU8[(HEAP32[i11 >> 2] | 0) + i8 | 0] | 0;
      break;
     }
    }
   } while (0);
   if (!(i10 << 16 >> 16 != 32 & i8 >>> 0 < (i2 - 1 | 0) >>> 0)) {
    i12 = i8;
    break;
   }
   i11 = i8 + 1 | 0;
   do {
    if (i1) {
     i13 = 0;
    } else {
     if ((HEAP32[i9 + 4 >> 2] | 0) >>> 0 <= i11 >>> 0) {
      i13 = 0;
      break;
     }
     i14 = i9 + 8 | 0;
     if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
      i13 = HEAP16[(HEAP32[i14 >> 2] | 0) + (i11 << 1) >> 1] | 0;
      break;
     } else {
      i13 = HEAPU8[(HEAP32[i14 >> 2] | 0) + i11 | 0] | 0;
      break;
     }
    }
   } while (0);
   i12 = i13 << 16 >> 16 == 32 ? i11 : i8;
  } else {
   i12 = i8;
  }
 } while (0);
 while (1) {
  if (i12 >>> 0 >= i2 >>> 0) {
   break;
  }
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) == 0) {
   break;
  }
  if ((HEAP32[i8 + 4 >> 2] | 0) >>> 0 <= i12 >>> 0) {
   break;
  }
  i13 = i8 + 8 | 0;
  if ((HEAP32[i8 + 16 >> 2] & 32 | 0) == 0) {
   i15 = HEAP16[(HEAP32[i13 >> 2] | 0) + (i12 << 1) >> 1] | 0;
  } else {
   i15 = HEAPU8[(HEAP32[i13 >> 2] | 0) + i12 | 0] | 0;
  }
  if (i15 << 16 >> 16 == 32) {
   i12 = i12 + 1 | 0;
  } else {
   break;
  }
 }
 if (i5) {
  HEAP16[i4 >> 1] = 8230;
  i5 = i4 + 2 | 0;
  i15 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i15 | 0) == 0) {
    i16 = 0;
   } else {
    if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
     i16 = HEAP32[i15 + 8 >> 2] | 0;
     break;
    } else {
     i16 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i15) | 0;
     break;
    }
   }
  } while (0);
  i15 = i2 - i12 + 1 | 0;
  _memcpy(i5 | 0, i16 + (i12 << 1) | 0, i15 << 1) | 0;
  i17 = i15;
  __ZN7WebCore31NonSharedCharacterBreakIteratorD1Ev(i7);
  STACKTOP = i6;
  return i17 | 0;
 } else {
  i15 = i4;
  i4 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i4 | 0) == 0) {
    i18 = 0;
   } else {
    if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
     i18 = HEAP32[i4 + 8 >> 2] | 0;
     break;
    } else {
     i18 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i4) | 0;
     break;
    }
   }
  } while (0);
  i4 = i2 - i12 | 0;
  _memcpy(i15 | 0, i18 + (i12 << 1) | 0, (i4 << 1) + 2 | 0) | 0;
  i17 = i4;
  __ZN7WebCore31NonSharedCharacterBreakIteratorD1Ev(i7);
  STACKTOP = i6;
  return i17 | 0;
 }
 return 0;
}
function __ZN7WebCoreL22centerTruncateToBufferERKN3WTF6StringEjjPtb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = (i3 + 1 | 0) >>> 1;
 i9 = i1 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i10 = 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i10 = HEAP32[i1 + 8 >> 2] | 0;
    break;
   } else {
    i10 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
    break;
   }
  }
 } while (0);
 __ZN7WebCore31NonSharedCharacterBreakIteratorC1EPKti(i7, i10, i2);
 i10 = i7 | 0;
 i1 = __ZN7WebCore18textBreakFollowingEPNS_17TextBreakIteratorEi(HEAP32[i10 >> 2] | 0, i2 - 1 - i3 + i8 | 0) | 0;
 i3 = (i1 | 0) == -1 ? i2 : i1;
 i1 = HEAP32[i10 >> 2] | 0;
 if (__ZN7WebCore11isTextBreakEPNS_17TextBreakIteratorEi(i1, i8) | 0) {
  i11 = i8;
 } else {
  i10 = __ZN7WebCore18textBreakPrecedingEPNS_17TextBreakIteratorEi(i1, i8) | 0;
  i11 = (i10 | 0) == -1 ? 0 : i10;
 }
 i10 = (i5 & 1) + i2 - i3 + i11 | 0;
 i8 = i4;
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i12 = 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i12 = HEAP32[i1 + 8 >> 2] | 0;
    break;
   } else {
    i12 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
    break;
   }
  }
 } while (0);
 _memcpy(i8 | 0, i12 | 0, i11 << 1) | 0;
 i12 = i4 + (i11 << 1) | 0;
 if (i5) {
  HEAP16[i12 >> 1] = 8230;
  i5 = i4 + (i11 + 1 << 1) | 0;
  i11 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i11 | 0) == 0) {
    i13 = 0;
   } else {
    if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
     i13 = HEAP32[i11 + 8 >> 2] | 0;
     break;
    } else {
     i13 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i11) | 0;
     break;
    }
   }
  } while (0);
  _memcpy(i5 | 0, i13 + (i3 << 1) | 0, i2 - i3 << 1) | 0;
  __ZN7WebCore31NonSharedCharacterBreakIteratorD1Ev(i7);
  STACKTOP = i6;
  return i10 | 0;
 } else {
  i13 = i12;
  i12 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i12 | 0) == 0) {
    i14 = 0;
   } else {
    if ((HEAP32[i12 + 16 >> 2] & 32 | 0) == 0) {
     i14 = HEAP32[i12 + 8 >> 2] | 0;
     break;
    } else {
     i14 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i12) | 0;
     break;
    }
   }
  } while (0);
  _memcpy(i13 | 0, i14 + (i3 << 1) | 0, i2 - i3 << 1) | 0;
  __ZN7WebCore31NonSharedCharacterBreakIteratorD1Ev(i7);
  STACKTOP = i6;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore15StringTruncator5widthERKN3WTF6StringERKNS_4FontENS0_24EnableRoundingHacksOrNotE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i7 = 0;
   i8 = 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i9 = HEAP32[i1 + 8 >> 2] | 0;
    i10 = i1;
   } else {
    i11 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
    i9 = i11;
    i10 = HEAP32[i6 >> 2] | 0;
   }
   if ((i10 | 0) == 0) {
    i7 = 0;
    i8 = i9;
    break;
   }
   i7 = HEAP32[i10 + 4 >> 2] | 0;
   i8 = i9;
  }
 } while (0);
 HEAP32[i5 + 4 >> 2] = i7;
 HEAP32[i5 + 8 >> 2] = i7;
 HEAPF32[i5 + 12 >> 2] = +0;
 HEAPF32[i5 + 16 >> 2] = +1;
 HEAPF32[i5 + 20 >> 2] = +0;
 i7 = i5 + 24 | 0;
 i9 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
 i10 = HEAP32[i7 >> 2] & -1024 | 81;
 HEAP32[i7 >> 2] = i9 << 7 & 128 | i10 | i9 << 8 & 256;
 HEAP32[i5 + 28 >> 2] = 0;
 i9 = i5 + 32 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i5 >> 2] = i8;
 if ((i3 | 0) == 0) {
  HEAP32[i7 >> 2] = i10;
 }
 d12 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i2, i5, 0, 0);
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return +d12;
 }
 i9 = i5 + 4 | 0;
 i5 = i9 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return +d12;
 }
 i2 = i9 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return +d12;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
 STACKTOP = i4;
 return +d12;
}
function __ZN7WebCoreL21rightTruncateToBufferERKN3WTF6StringEjjPtb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i1 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i9 = 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i9 = HEAP32[i1 + 8 >> 2] | 0;
    break;
   } else {
    i9 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
    break;
   }
  }
 } while (0);
 __ZN7WebCore31NonSharedCharacterBreakIteratorC1EPKti(i7, i9, i2);
 i2 = HEAP32[i7 >> 2] | 0;
 if (__ZN7WebCore11isTextBreakEPNS_17TextBreakIteratorEi(i2, i3) | 0) {
  i10 = i3;
 } else {
  i9 = __ZN7WebCore18textBreakPrecedingEPNS_17TextBreakIteratorEi(i2, i3) | 0;
  i10 = (i9 | 0) == -1 ? 0 : i9;
 }
 i9 = i10 + (i5 & 1) | 0;
 i3 = i4;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i11 = 0;
  } else {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
    i11 = HEAP32[i2 + 8 >> 2] | 0;
    break;
   } else {
    i11 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
    break;
   }
  }
 } while (0);
 _memcpy(i3 | 0, i11 | 0, i10 << 1) | 0;
 if (!i5) {
  __ZN7WebCore31NonSharedCharacterBreakIteratorD1Ev(i7);
  STACKTOP = i6;
  return i9 | 0;
 }
 HEAP16[i4 + (i10 << 1) >> 1] = 8230;
 __ZN7WebCore31NonSharedCharacterBreakIteratorD1Ev(i7);
 STACKTOP = i6;
 return i9 | 0;
}
function __ZN7WebCoreL26rightClipToCharacterBufferERKN3WTF6StringEjjPtb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i8 = 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i8 = HEAP32[i1 + 8 >> 2] | 0;
    break;
   } else {
    i8 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
    break;
   }
  }
 } while (0);
 __ZN7WebCore31NonSharedCharacterBreakIteratorC1EPKti(i6, i8, i2);
 i2 = HEAP32[i6 >> 2] | 0;
 if (__ZN7WebCore11isTextBreakEPNS_17TextBreakIteratorEi(i2, i3) | 0) {
  i9 = i3;
 } else {
  i8 = __ZN7WebCore18textBreakPrecedingEPNS_17TextBreakIteratorEi(i2, i3) | 0;
  i9 = (i8 | 0) == -1 ? 0 : i8;
 }
 i8 = i4;
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i10 = 0;
  } else {
   if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
    i10 = HEAP32[i4 + 8 >> 2] | 0;
    break;
   } else {
    i10 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i4) | 0;
    break;
   }
  }
 } while (0);
 _memcpy(i8 | 0, i10 | 0, i9 << 1) | 0;
 __ZN7WebCore31NonSharedCharacterBreakIteratorD1Ev(i6);
 STACKTOP = i5;
 return i9 | 0;
}
function __ZN7WebCoreL21rightClipToWordBufferERKN3WTF6StringEjjPtb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i5 = i1 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i6 = 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
    i6 = HEAP32[i1 + 8 >> 2] | 0;
    break;
   } else {
    i6 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i1) | 0;
    break;
   }
  }
 } while (0);
 i1 = __ZN7WebCore17wordBreakIteratorEPKti(i6, i2) | 0;
 if (__ZN7WebCore11isTextBreakEPNS_17TextBreakIteratorEi(i1, i3) | 0) {
  i7 = i3;
 } else {
  i2 = __ZN7WebCore18textBreakPrecedingEPNS_17TextBreakIteratorEi(i1, i3) | 0;
  i7 = (i2 | 0) == -1 ? 0 : i2;
 }
 i2 = i4;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i8 = 0;
  } else {
   if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
    i8 = HEAP32[i4 + 8 >> 2] | 0;
    break;
   } else {
    i8 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i4) | 0;
    break;
   }
  }
 } while (0);
 _memcpy(i2 | 0, i8 | 0, i7 << 1) | 0;
 return i7 | 0;
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
function __ZN7WebCore15StringTruncator15rightClipToWordERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotERfbfb(i1, i2, d3, i4, i5, i6, i7, d8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 d8 = +d8;
 i9 = i9 | 0;
 __ZN7WebCoreL14truncateStringERKN3WTF6StringEfRKNS_4FontEPFjS3_jjPtbEbPfbfb(i1, i2, d3, i4, F_BASE_iiiiii + 10 | 0, (i5 | 0) == 0, i6, i7, d8, i9);
 return;
}
function __ZN7WebCore15StringTruncator20rightClipToCharacterERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotERfbf(i1, i2, d3, i4, i5, i6, i7, d8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 d8 = +d8;
 __ZN7WebCoreL14truncateStringERKN3WTF6StringEfRKNS_4FontEPFjS3_jjPtbEbPfbfb(i1, i2, d3, i4, F_BASE_iiiiii + 4 | 0, (i5 | 0) == 0, i6, i7, d8, 0);
 return;
}
function __ZN7WebCore15StringTruncator14centerTruncateERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotERfbf(i1, i2, d3, i4, i5, i6, i7, d8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 d8 = +d8;
 __ZN7WebCoreL14truncateStringERKN3WTF6StringEfRKNS_4FontEPFjS3_jjPtbEbPfbfb(i1, i2, d3, i4, F_BASE_iiiiii + 8 | 0, (i5 | 0) == 0, i6, i7, d8, 0);
 return;
}
function __ZN7WebCore15StringTruncator13rightTruncateERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotERfbf(i1, i2, d3, i4, i5, i6, i7, d8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 d8 = +d8;
 __ZN7WebCoreL14truncateStringERKN3WTF6StringEfRKNS_4FontEPFjS3_jjPtbEbPfbfb(i1, i2, d3, i4, F_BASE_iiiiii + 6 | 0, (i5 | 0) == 0, i6, i7, d8, 0);
 return;
}
function __ZN7WebCore15StringTruncator12leftTruncateERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotERfbf(i1, i2, d3, i4, i5, i6, i7, d8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 d8 = +d8;
 __ZN7WebCoreL14truncateStringERKN3WTF6StringEfRKNS_4FontEPFjS3_jjPtbEbPfbfb(i1, i2, d3, i4, F_BASE_iiiiii + 2 | 0, (i5 | 0) == 0, i6, i7, d8, 0);
 return;
}
function __ZN7WebCore15StringTruncator14centerTruncateERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotE(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCoreL14truncateStringERKN3WTF6StringEfRKNS_4FontEPFjS3_jjPtbEbPfbfb(i1, i2, d3, i4, F_BASE_iiiiii + 8 | 0, (i5 | 0) == 0, 0, 1, +0, 0);
 return;
}
function __ZN7WebCore15StringTruncator13rightTruncateERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotE(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCoreL14truncateStringERKN3WTF6StringEfRKNS_4FontEPFjS3_jjPtbEbPfbfb(i1, i2, d3, i4, F_BASE_iiiiii + 6 | 0, (i5 | 0) == 0, 0, 1, +0, 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
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
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
 return 0;
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
  var FUNCTION_TABLE_iiiiii = [b0,b0,__ZN7WebCoreL20leftTruncateToBufferERKN3WTF6StringEjjPtb,b0,__ZN7WebCoreL26rightClipToCharacterBufferERKN3WTF6StringEjjPtb,b0,__ZN7WebCoreL21rightTruncateToBufferERKN3WTF6StringEjjPtb,b0,__ZN7WebCoreL22centerTruncateToBufferERKN3WTF6StringEjjPtb,b0,__ZN7WebCoreL21rightClipToWordBufferERKN3WTF6StringEjjPtb,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiiii: dynCall_iiiiii, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiiii": invoke_iiiiii, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore7TextRun21s_allowsRoundingHacksE": __ZN7WebCore7TextRun21s_allowsRoundingHacksE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15StringTruncator5widthERKN3WTF6StringERKNS_4FontENS0_24EnableRoundingHacksOrNotE","__ZN7WebCore15StringTruncator12leftTruncateERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotERfbf","_strlen","__ZN7WebCoreL21rightTruncateToBufferERKN3WTF6StringEjjPtb","__ZN7WebCoreL20leftTruncateToBufferERKN3WTF6StringEjjPtb","__ZN7WebCore15StringTruncator20rightClipToCharacterERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotERfbf","__ZN7WebCoreL22centerTruncateToBufferERKN3WTF6StringEjjPtb","_memset","__ZN7WebCore15StringTruncator14centerTruncateERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotERfbf","_memcpy","__ZN7WebCoreL14truncateStringERKN3WTF6StringEfRKNS_4FontEPFjS3_jjPtbEbPfbfb","__ZN7WebCore15StringTruncator15rightClipToWordERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotERfbfb","__ZN7WebCore15StringTruncator13rightTruncateERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotERfbf","__ZN7WebCore15StringTruncator14centerTruncateERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotE","__ZN7WebCoreL26rightClipToCharacterBufferERKN3WTF6StringEjjPtb","__ZN7WebCore15StringTruncator13rightTruncateERKN3WTF6StringEfRKNS_4FontENS0_24EnableRoundingHacksOrNotE","__ZN7WebCoreL21rightClipToWordBufferERKN3WTF6StringEjjPtb"]

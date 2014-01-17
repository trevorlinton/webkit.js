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
H_BASE = parentModule["_malloc"](40 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 40;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11SVGFontDataC1EPNS_18SVGFontFaceElementE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_fiif(index,a1,a2,a3) {
  try {
    return Module["dynCall_fiif"](index,a1,a2,a3);
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_viif(index,a1,a2,a3) {
  try {
    Module["dynCall_viif"](index,a1,a2,a3);
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
  var __ZN7WebCore8XMLNames8langAttrE=env.__ZN7WebCore8XMLNames8langAttrE|0;
  var __ZN7WebCore8SVGNames11altGlyphTagE=env.__ZN7WebCore8SVGNames11altGlyphTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore11SVGFontDataE=(H_BASE+8)|0;
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
  var invoke_fiif=env.invoke_fiif;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_viif=env.invoke_viif;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore11SVGFontData22applySVGGlyphSelectionERNS_13WidthIteratorERNS_9GlyphDataEbiRj(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 64 | 0;
 i16 = i7 + 72 | 0;
 i17 = i7 + 88 | 0;
 i18 = HEAP32[i2 + 4 >> 2] | 0;
 i19 = i2 + 88 | 0;
 i20 = i8 | 0;
 HEAP32[i20 >> 2] = 0;
 do {
  if ((HEAP32[i18 + 24 >> 2] & 4 | 0) == 0) {
   __ZN3WTF6StringC1EPKtj(i11, (HEAP32[i18 >> 2] | 0) + (i5 << 1) | 0, (HEAP32[i18 + 4 >> 2] | 0) - i5 | 0);
   i21 = i11 | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i23 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = i22;
   do {
    if ((i23 | 0) != 0) {
     i22 = i23 | 0;
     i24 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i22 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i24 = i23 | 0;
     i22 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i24 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i23 = HEAP32[i20 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i25 = 0;
    i26 = 0;
   } else {
    i25 = HEAP32[i23 + 4 >> 2] | 0;
    i26 = HEAP32[i23 + 8 >> 2] | 0;
   }
   __ZN7WebCore4Font15normalizeSpacesEPKtj(i12, i26, i25);
   i23 = i12 | 0;
   i21 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   i22 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = i21;
   do {
    if ((i22 | 0) != 0) {
     i21 = i22 | 0;
     i24 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i21 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i22 = HEAP32[i23 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i24 = i22 | 0;
   i21 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i24 >> 2] = i21;
    break;
   }
  } else {
   __ZN3WTF6StringC1EPKhj(i9, (HEAP32[i18 >> 2] | 0) + i5 | 0, (HEAP32[i18 + 4 >> 2] | 0) - i5 | 0);
   i21 = i9 | 0;
   i24 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i22 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = i24;
   do {
    if ((i22 | 0) != 0) {
     i24 = i22 | 0;
     i27 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i24 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i22 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i23 = i22 | 0;
     i27 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i23 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i22 = HEAP32[i20 >> 2] | 0;
   if ((i22 | 0) == 0) {
    i28 = 0;
    i29 = 0;
   } else {
    i28 = HEAP32[i22 + 4 >> 2] | 0;
    i29 = HEAP32[i22 + 8 >> 2] | 0;
   }
   __ZN7WebCore4Font15normalizeSpacesEPKhj(i10, i29, i28);
   i22 = i10 | 0;
   i21 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   i27 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = i21;
   do {
    if ((i27 | 0) != 0) {
     i21 = i27 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i21 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i22 >> 2] | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   i23 = i27 | 0;
   i21 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i23 >> 2] = i21;
    break;
   }
  }
 } while (0);
 do {
  if (i4) {
   i10 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i30 = 0;
     i31 = 0;
    } else {
     if ((HEAP32[i10 + 16 >> 2] & 32 | 0) == 0) {
      i32 = HEAP32[i10 + 8 >> 2] | 0;
      i33 = i10;
     } else {
      i28 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i10) | 0;
      i32 = i28;
      i33 = HEAP32[i20 >> 2] | 0;
     }
     if ((i33 | 0) == 0) {
      i30 = 0;
      i31 = i32;
      break;
     }
     i30 = HEAP32[i33 + 4 >> 2] | 0;
     i31 = i32;
    }
   } while (0);
   __ZNK7WebCore11SVGFontData34createStringWithMirroredCharactersEPKtj(i13, 0, i31, i30);
   i10 = i13 | 0;
   i22 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i10 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = i22;
   if ((i10 | 0) == 0) {
    break;
   }
   i22 = i10 | 0;
   i28 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i22 >> 2] = i28;
    break;
   }
  }
 } while (0);
 do {
  if ((i5 | 0) == 0) {
   i13 = i2 + 96 | 0;
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore24charactersWithArabicFormERKN3WTF6StringEb(i14, i8, i4);
   i30 = i14 + 8 | 0;
   i31 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i30 >> 2];
   HEAP32[i30 >> 2] = i31;
   i13 = i19 | 0;
   i32 = i14 | 0;
   i33 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i32 >> 2];
   HEAP32[i32 >> 2] = i33;
   i13 = i2 + 92 | 0;
   i28 = i14 + 4 | 0;
   i22 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i28 >> 2];
   HEAP32[i28 >> 2] = i22;
   if ((i31 | 0) != 0) {
    HEAP32[i30 >> 2] = 0;
   }
   if ((i33 | 0) == 0) {
    break;
   }
   HEAP32[i32 >> 2] = 0;
   HEAP32[i28 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i33);
  }
 } while (0);
 i14 = __ZNK7WebCore18SVGFontFaceElement21associatedFontElementEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 i1 = HEAP32[i18 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i34 = 0;
 } else {
  i34 = HEAP32[i1 + 8 >> 2] | 0;
 }
 i1 = i15 | 0;
 HEAP32[i1 >> 2] = 0;
 i4 = i16 | 0;
 HEAP32[i4 >> 2] = 0;
 i33 = i16 + 4 | 0;
 HEAP32[i33 >> 2] = 0;
 i28 = i16 + 8 | 0;
 HEAP32[i28 >> 2] = 0;
 do {
  if ((i34 | 0) == 0) {
   i35 = 0;
  } else {
   if ((HEAP32[i34 + 20 >> 2] & 768 | 0) == 256) {
    i36 = HEAP32[i34 + 8 >> 2] | 0;
   } else {
    i36 = i34;
   }
   i32 = (((HEAP32[(HEAP32[(HEAP32[i36 + 36 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) >>> 16 & 7) - 4 | 0) >>> 0 < 2 >>> 0;
   if ((HEAP32[i36 + 20 >> 2] & 128 | 0) != 0) {
    i35 = i32;
    break;
   }
   i30 = HEAP32[i36 + 4 >> 2] | 0;
   if ((i30 | 0) == 0) {
    i35 = i32;
    break;
   }
   i31 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i30, __ZN7WebCore8XMLNames8langAttrE) | 0) >> 2] | 0;
   if ((i31 | 0) != 0) {
    i22 = i31 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   }
   i22 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i31;
   do {
    if ((i22 | 0) != 0) {
     i31 = i22 | 0;
     i13 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i31 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i22 = HEAP32[i30 + 44 >> 2] | 0;
   i13 = HEAP32[__ZN7WebCore8SVGNames11altGlyphTagE >> 2] | 0;
   if ((i22 | 0) != (i13 | 0)) {
    if ((HEAP32[i22 + 12 >> 2] | 0) != (HEAP32[i13 + 12 >> 2] | 0)) {
     i35 = i32;
     break;
    }
    if ((HEAP32[i22 + 16 >> 2] | 0) != (HEAP32[i13 + 16 >> 2] | 0)) {
     i35 = i32;
     break;
    }
   }
   if (__ZNK7WebCore18SVGAltGlyphElement21hasValidGlyphElementsERN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i30, i16) | 0) {
    i35 = i32;
    break;
   }
   if ((HEAP32[i33 >> 2] | 0) == 0) {
    i35 = i32;
    break;
   }
   i13 = HEAP32[i28 >> 2] | 0;
   if ((i13 | 0) != 0) {
    i22 = HEAP32[i4 >> 2] | 0;
    i31 = i22 + (i13 << 2) | 0;
    i13 = i22;
    while (1) {
     i22 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i10 = i22 | 0;
       i29 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
       if ((i29 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        break;
       } else {
        HEAP32[i10 >> 2] = i29;
        break;
       }
      }
     } while (0);
     i13 = i13 + 4 | 0;
     if ((i13 | 0) == (i31 | 0)) {
      break;
     }
    }
    HEAP32[i28 >> 2] = 0;
   }
   i31 = HEAP32[i4 >> 2] | 0;
   if ((i31 | 0) == 0) {
    i35 = i32;
    break;
   }
   HEAP32[i4 >> 2] = 0;
   HEAP32[i33 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i31);
   i35 = i32;
  }
 } while (0);
 i16 = i17 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i17 + 4 >> 2] = 0;
 i36 = i17 + 8 | 0;
 HEAP32[i36 >> 2] = 0;
 i34 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i34 | 0) == 0) {
   __ZN7WebCore14SVGFontElement22collectGlyphsForStringERKN3WTF6StringERNS1_6VectorINS_8SVGGlyphELj0ENS1_15CrashOnOverflowEEE(i14, i8, i17);
   i37 = 106;
  } else {
   i31 = 0;
   i13 = i34;
   while (1) {
    if (i13 >>> 0 <= i31 >>> 0) {
     i37 = 86;
     break;
    }
    __ZN7WebCore14SVGFontElement25collectGlyphsForGlyphNameERKN3WTF6StringERNS1_6VectorINS_8SVGGlyphELj0ENS1_15CrashOnOverflowEEE(i14, (HEAP32[i4 >> 2] | 0) + (i31 << 2) | 0, i17);
    i30 = i31 + 1 | 0;
    if (i30 >>> 0 >= i34 >>> 0) {
     break;
    }
    i31 = i30;
    i13 = HEAP32[i28 >> 2] | 0;
   }
   if ((i37 | 0) == 86) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   i13 = HEAP32[i36 >> 2] | 0;
   i31 = (i13 | 0) == 0;
   if (i31) {
    i37 = 120;
    break;
   }
   i32 = i18 + 8 | 0;
   i30 = 0;
   i22 = i13;
   while (1) {
    if (i22 >>> 0 <= i30 >>> 0) {
     i37 = 92;
     break;
    }
    HEAP32[(HEAP32[i16 >> 2] | 0) + (i30 * 52 & -1) + 12 >> 2] = HEAP32[i32 >> 2];
    i29 = i30 + 1 | 0;
    if (i29 >>> 0 >= i13 >>> 0) {
     break;
    }
    i30 = i29;
    i22 = HEAP32[i36 >> 2] | 0;
   }
   if ((i37 | 0) == 92) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   if (i31) {
    i37 = 106;
    break;
   }
   if ((HEAP32[i36 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   i22 = HEAP32[i16 >> 2] | 0;
   i30 = HEAP32[i22 + 16 >> 2] | 0;
   if ((i30 | 0) != 0) {
    i13 = i30 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   i13 = i2 + 84 | 0;
   i32 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i30;
   do {
    if ((i32 | 0) != 0) {
     i30 = i32 | 0;
     i13 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i30 >> 2] = i13;
      break;
     }
    }
   } while (0);
   HEAP16[i3 >> 1] = HEAP16[i22 + 8 >> 1] | 0;
   HEAP32[i6 >> 2] = HEAP32[i22 + 12 >> 2];
   i38 = 1;
  }
 } while (0);
 L148 : do {
  if ((i37 | 0) == 106) {
   i18 = HEAP32[i36 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i37 = 120;
    break;
   } else {
    i39 = 0;
    i40 = i18;
   }
   while (1) {
    if (i40 >>> 0 <= i39 >>> 0) {
     i37 = 108;
     break;
    }
    i41 = HEAP32[i16 >> 2] | 0;
    i34 = i41 + (i39 * 52 & -1) | 0;
    if ((HEAP8[i34 | 0] & 1) == 0) {
     i42 = i41 + (i39 * 52 & -1) + 12 | 0;
     if (__ZN7WebCore17isCompatibleGlyphERKNS_8SVGGlyphEbRKN3WTF6StringERKNS3_6VectorINS0_10ArabicFormELj0ENS3_15CrashOnOverflowEEEjj(i34, i35, i15, i19, i5, (HEAP32[i42 >> 2] | 0) + i5 | 0) | 0) {
      break;
     }
    }
    i34 = i39 + 1 | 0;
    if (i34 >>> 0 >= i18 >>> 0) {
     i37 = 120;
     break L148;
    }
    i39 = i34;
    i40 = HEAP32[i36 >> 2] | 0;
   }
   if ((i37 | 0) == 108) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   i18 = HEAP32[i41 + (i39 * 52 & -1) + 16 >> 2] | 0;
   if ((i18 | 0) != 0) {
    i22 = i18 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   }
   i22 = i2 + 84 | 0;
   i34 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = i18;
   do {
    if ((i34 | 0) != 0) {
     i18 = i34 | 0;
     i22 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i34);
      break;
     } else {
      HEAP32[i18 >> 2] = i22;
      break;
     }
    }
   } while (0);
   HEAP16[i3 >> 1] = HEAP16[i41 + (i39 * 52 & -1) + 8 >> 1] | 0;
   HEAP32[i6 >> 2] = HEAP32[i42 >> 2];
   i38 = 1;
  }
 } while (0);
 do {
  if ((i37 | 0) == 120) {
   i42 = i2 + 84 | 0;
   i6 = HEAP32[i42 >> 2] | 0;
   HEAP32[i42 >> 2] = 0;
   if ((i6 | 0) == 0) {
    i38 = 0;
    break;
   }
   i42 = i6 | 0;
   i39 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
   if ((i39 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i38 = 0;
    break;
   } else {
    HEAP32[i42 >> 2] = i39;
    i38 = 0;
    break;
   }
  }
 } while (0);
 __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEED1Ev(i17);
 i17 = HEAP32[i28 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i2 = HEAP32[i4 >> 2] | 0;
  i37 = i2 + (i17 << 2) | 0;
  i17 = i2;
  while (1) {
   i2 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i39 = i2 | 0;
     i42 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i42 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i39 >> 2] = i42;
      break;
     }
    }
   } while (0);
   i17 = i17 + 4 | 0;
   if ((i17 | 0) == (i37 | 0)) {
    break;
   }
  }
  HEAP32[i28 >> 2] = 0;
 }
 i28 = HEAP32[i4 >> 2] | 0;
 if ((i28 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i33 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i28);
 }
 i28 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i1 = i28 | 0;
   i33 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i33 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    break;
   } else {
    HEAP32[i1 >> 2] = i33;
    break;
   }
  }
 } while (0);
 i28 = HEAP32[i20 >> 2] | 0;
 if ((i28 | 0) == 0) {
  STACKTOP = i7;
  return i38 | 0;
 }
 i20 = i28 | 0;
 i33 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
 if ((i33 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i28);
  STACKTOP = i7;
  return i38 | 0;
 } else {
  HEAP32[i20 >> 2] = i33;
  STACKTOP = i7;
  return i38 | 0;
 }
 return 0;
}
function __ZN7WebCore11SVGFontData18initializeFontDataEPNS_14SimpleFontDataEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, i10 = 0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, i22 = 0, d23 = +0, i24 = 0, d25 = +0, i26 = 0, d27 = +0, i28 = 0, d29 = +0, i30 = 0, d31 = +0, i32 = 0, d33 = +0, i34 = 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i2 + 1140 | 0;
 HEAP32[i1 >> 2] = (__ZN7WebCore14SVGFontElement12missingGlyphEv(__ZNK7WebCore18SVGFontFaceElement21associatedFontElementEv(i4) | 0) | 0) & 65535;
 HEAP32[i1 + 4 >> 2] = i2;
 i1 = i2 + 1136 | 0;
 HEAP16[i1 >> 1] = 0;
 __ZN7WebCore14SimpleFontData14determinePitchEv(i2);
 i5 = __ZNK7WebCore18SVGFontFaceElement10unitsPerEmEv(i4) | 0;
 if ((i5 | 0) == 0) {
  d6 = d3;
 } else {
  d6 = d3 / +(i5 >>> 0 >>> 0);
 }
 d7 = d6 * +(__ZNK7WebCore18SVGFontFaceElement7xHeightEv(i4) | 0);
 d8 = d6 * +(__ZNK7WebCore18SVGFontFaceElement6ascentEv(i4) | 0);
 d9 = d6 * +(__ZNK7WebCore18SVGFontFaceElement7descentEv(i4) | 0);
 d6 = d3 * +.10000000149011612;
 i4 = HEAP32[(__ZN7WebCore17GlyphPageTreeNode8getChildEPKNS_8FontDataEj(__ZN7WebCore17GlyphPageTreeNode7getRootEj(0) | 0, i2 | 0, 0) | 0) + 24 >> 2] | 0;
 i10 = (i4 | 0) == 0;
 do {
  if (d7 != +0 | i10) {
   d11 = d7;
  } else {
   i12 = HEAP16[i4 + 252 >> 1] | 0;
   if (i12 << 16 >> 16 == 0) {
    d11 = d8 * +2 / +3;
    break;
   }
   if ((HEAP16[i1 >> 1] | 0) == i12 << 16 >> 16) {
    d11 = +0;
    break;
   }
   i13 = i2 + 84 | 0;
   i14 = i12 & 65535;
   i15 = i14 >>> 8;
   i16 = (i15 | 0) == 0;
   do {
    if (i16) {
     if ((HEAP8[i13 | 0] & 1) == 0) {
      i17 = 9;
      break;
     }
     i18 = i2 + 88 | 0;
    } else {
     i17 = 9;
    }
   } while (0);
   if ((i17 | 0) == 9) {
    i18 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i13, i15) | 0;
   }
   i19 = i14 & 255;
   d3 = +HEAPF32[i18 + (i19 << 2) >> 2];
   if (d3 != +-1) {
    d11 = d3;
    break;
   }
   i20 = HEAP32[i2 + 76 >> 2] | 0;
   if ((i20 | 0) == 0) {
    d21 = +__ZNK7WebCore14SimpleFontData21platformWidthForGlyphEt(i2, i12);
   } else {
    d21 = +FUNCTION_TABLE_fiif[HEAP32[(HEAP32[i20 >> 2] | 0) + 12 >> 2] & 3](i20, i12, +HEAPF32[i2 + 60 >> 2]);
   }
   do {
    if (i16) {
     if ((HEAP8[i13 | 0] & 1) == 0) {
      i17 = 17;
      break;
     }
     i22 = i2 + 88 | 0;
    } else {
     i17 = 17;
    }
   } while (0);
   if ((i17 | 0) == 17) {
    i22 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i13, i15) | 0;
   }
   HEAPF32[i22 + (i19 << 2) >> 2] = d21;
   d11 = d21;
  }
 } while (0);
 HEAP32[i2 + 12 >> 2] = i5;
 HEAPF32[i2 + 16 >> 2] = d8;
 HEAPF32[i2 + 20 >> 2] = d9;
 HEAPF32[i2 + 24 >> 2] = d6;
 d21 = +_round(+d8);
 d7 = d21 + +_round(+d9);
 HEAPF32[i2 + 28 >> 2] = d7 + +_round(+d6);
 HEAPF32[i2 + 32 >> 2] = d11;
 HEAP8[i2 + 40 | 0] = 1;
 if (i10) {
  HEAP16[i2 + 1122 >> 1] = 0;
  HEAPF32[i2 + 1124 >> 2] = +0;
  HEAPF32[i2 + 48 >> 2] = +0;
  HEAPF32[i2 + 44 >> 2] = d8;
  return;
 }
 i10 = HEAP16[i4 + 76 >> 1] | 0;
 HEAP16[i2 + 1122 >> 1] = i10;
 do {
  if ((HEAP16[i1 >> 1] | 0) == i10 << 16 >> 16 & i10 << 16 >> 16 != 0) {
   d23 = +0;
  } else {
   i5 = i2 + 84 | 0;
   i22 = i10 & 65535;
   i18 = i22 >>> 8;
   i16 = (i18 | 0) == 0;
   do {
    if (i16) {
     if ((HEAP8[i5 | 0] & 1) == 0) {
      i17 = 26;
      break;
     }
     i24 = i2 + 88 | 0;
    } else {
     i17 = 26;
    }
   } while (0);
   if ((i17 | 0) == 26) {
    i24 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i5, i18) | 0;
   }
   i19 = i22 & 255;
   d11 = +HEAPF32[i24 + (i19 << 2) >> 2];
   if (d11 != +-1) {
    d23 = d11;
    break;
   }
   i15 = HEAP32[i2 + 76 >> 2] | 0;
   if ((i15 | 0) == 0) {
    d25 = +__ZNK7WebCore14SimpleFontData21platformWidthForGlyphEt(i2, i10);
   } else {
    d25 = +FUNCTION_TABLE_fiif[HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] & 3](i15, i10, +HEAPF32[i2 + 60 >> 2]);
   }
   do {
    if (i16) {
     if ((HEAP8[i5 | 0] & 1) == 0) {
      i17 = 34;
      break;
     }
     i26 = i2 + 88 | 0;
    } else {
     i17 = 34;
    }
   } while (0);
   if ((i17 | 0) == 34) {
    i26 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i5, i18) | 0;
   }
   HEAPF32[i26 + (i19 << 2) >> 2] = d25;
   d23 = d25;
  }
 } while (0);
 HEAPF32[i2 + 1124 >> 2] = d23;
 i26 = HEAP16[i4 + 108 >> 1] | 0;
 do {
  if (i26 << 16 >> 16 == 0) {
   d27 = d23;
  } else {
   if ((HEAP16[i1 >> 1] | 0) == i26 << 16 >> 16) {
    d27 = +0;
    break;
   }
   i10 = i2 + 84 | 0;
   i24 = i26 & 65535;
   i16 = i24 >>> 8;
   i22 = (i16 | 0) == 0;
   do {
    if (i22) {
     if ((HEAP8[i10 | 0] & 1) == 0) {
      i17 = 41;
      break;
     }
     i28 = i2 + 88 | 0;
    } else {
     i17 = 41;
    }
   } while (0);
   if ((i17 | 0) == 41) {
    i28 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i10, i16) | 0;
   }
   i19 = i24 & 255;
   d25 = +HEAPF32[i28 + (i19 << 2) >> 2];
   if (d25 != +-1) {
    d27 = d25;
    break;
   }
   i18 = HEAP32[i2 + 76 >> 2] | 0;
   if ((i18 | 0) == 0) {
    d29 = +__ZNK7WebCore14SimpleFontData21platformWidthForGlyphEt(i2, i26);
   } else {
    d29 = +FUNCTION_TABLE_fiif[HEAP32[(HEAP32[i18 >> 2] | 0) + 12 >> 2] & 3](i18, i26, +HEAPF32[i2 + 60 >> 2]);
   }
   do {
    if (i22) {
     if ((HEAP8[i10 | 0] & 1) == 0) {
      i17 = 49;
      break;
     }
     i30 = i2 + 88 | 0;
    } else {
     i17 = 49;
    }
   } while (0);
   if ((i17 | 0) == 49) {
    i30 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i10, i16) | 0;
   }
   HEAPF32[i30 + (i19 << 2) >> 2] = d29;
   d27 = d29;
  }
 } while (0);
 HEAPF32[i2 + 48 >> 2] = d27;
 i30 = HEAP16[i4 + 186 >> 1] | 0;
 do {
  if (i30 << 16 >> 16 == 0) {
   d31 = d8;
  } else {
   if ((HEAP16[i1 >> 1] | 0) == i30 << 16 >> 16) {
    d31 = +0;
    break;
   }
   i4 = i2 + 84 | 0;
   i26 = i30 & 65535;
   i28 = i26 >>> 8;
   i22 = (i28 | 0) == 0;
   do {
    if (i22) {
     if ((HEAP8[i4 | 0] & 1) == 0) {
      i17 = 56;
      break;
     }
     i32 = i2 + 88 | 0;
    } else {
     i17 = 56;
    }
   } while (0);
   if ((i17 | 0) == 56) {
    i32 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i4, i28) | 0;
   }
   i19 = i26 & 255;
   d27 = +HEAPF32[i32 + (i19 << 2) >> 2];
   if (d27 != +-1) {
    d31 = d27;
    break;
   }
   i16 = HEAP32[i2 + 76 >> 2] | 0;
   if ((i16 | 0) == 0) {
    d33 = +__ZNK7WebCore14SimpleFontData21platformWidthForGlyphEt(i2, i30);
   } else {
    d33 = +FUNCTION_TABLE_fiif[HEAP32[(HEAP32[i16 >> 2] | 0) + 12 >> 2] & 3](i16, i30, +HEAPF32[i2 + 60 >> 2]);
   }
   do {
    if (i22) {
     if ((HEAP8[i4 | 0] & 1) == 0) {
      i17 = 64;
      break;
     }
     i34 = i2 + 88 | 0;
    } else {
     i17 = 64;
    }
   } while (0);
   if ((i17 | 0) == 64) {
    i34 = __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i4, i28) | 0;
   }
   HEAPF32[i34 + (i19 << 2) >> 2] = d33;
   d31 = d33;
  }
 } while (0);
 HEAPF32[i2 + 44 >> 2] = d31;
 return;
}
function __ZNK7WebCore11SVGFontData34createStringWithMirroredCharactersEPKtj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i2 | 0;
 i6 = i2 + 8 | 0;
 i7 = i2 + 16 | 0;
 i8 = i2 + 24 | 0;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i8 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i8 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i8 + 12 | 0;
 HEAP8[i12] = 1;
 HEAP32[i8 + 16 >> 2] = 0;
 i13 = i8 + 20 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZN3WTF13StringBuilder15reserveCapacityEj(i8, i4);
 if ((i4 | 0) != 0) {
  i14 = i8 + 20 | 0;
  i15 = 0;
  while (1) {
   i16 = i15 + 1 | 0;
   i17 = HEAPU16[i3 + (i15 << 1) >> 1] | 0;
   do {
    if ((i17 & 64512 | 0) == 55296 & i16 >>> 0 < i4 >>> 0) {
     i18 = HEAPU16[i3 + (i16 << 1) >> 1] | 0;
     if ((i18 & 64512 | 0) != 56320) {
      i19 = i16;
      i20 = i17;
      break;
     }
     i19 = i15 + 2 | 0;
     i20 = (i17 << 10) - 56613888 + i18 | 0;
    } else {
     i19 = i16;
     i20 = i17;
    }
   } while (0);
   i17 = _u_charMirror(i20) | 0;
   L9 : do {
    if (i17 >>> 0 < 65536 >>> 0) {
     i16 = i17 & 65535;
     HEAP16[i6 >> 1] = i16;
     i18 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i21 = HEAP32[i9 >> 2] | 0;
       if (i21 >>> 0 >= (HEAP32[i18 + 4 >> 2] | 0) >>> 0) {
        break;
       }
       if ((HEAP32[i10 >> 2] | 0) != 0) {
        break;
       }
       if ((HEAP8[i12] & 1) == 0) {
        HEAP32[i9 >> 2] = i21 + 1;
        HEAP16[(HEAP32[i14 >> 2] | 0) + (i21 << 1) >> 1] = i16;
        break L9;
       }
       if ((i16 & 65535) >>> 0 > 255 >>> 0) {
        break;
       }
       HEAP32[i9 >> 2] = i21 + 1;
       HEAP8[(HEAP32[i13 >> 2] | 0) + i21 | 0] = i17;
       break L9;
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendEPKtj(i8, i6, 1);
    } else {
     i16 = (i17 >>> 10) + 55232 | 0;
     i18 = i16 & 65535;
     HEAP16[i5 >> 1] = i18;
     i21 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i21 | 0) == 0) {
       i22 = 23;
      } else {
       i23 = HEAP32[i9 >> 2] | 0;
       if (i23 >>> 0 >= (HEAP32[i21 + 4 >> 2] | 0) >>> 0) {
        i22 = 23;
        break;
       }
       if ((HEAP32[i10 >> 2] | 0) != 0) {
        i22 = 23;
        break;
       }
       if ((HEAP8[i12] & 1) == 0) {
        HEAP32[i9 >> 2] = i23 + 1;
        HEAP16[(HEAP32[i14 >> 2] | 0) + (i23 << 1) >> 1] = i18;
        break;
       }
       if ((i18 & 65535) >>> 0 > 255 >>> 0) {
        i22 = 23;
        break;
       }
       HEAP32[i9 >> 2] = i23 + 1;
       HEAP8[(HEAP32[i13 >> 2] | 0) + i23 | 0] = i16;
      }
     } while (0);
     if ((i22 | 0) == 23) {
      i22 = 0;
      __ZN3WTF13StringBuilder6appendEPKtj(i8, i5, 1);
     }
     i16 = (i17 & 1023 | 56320) & 65535;
     HEAP16[i7 >> 1] = i16;
     i18 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i21 = HEAP32[i9 >> 2] | 0;
       if (i21 >>> 0 >= (HEAP32[i18 + 4 >> 2] | 0) >>> 0) {
        break;
       }
       if ((HEAP32[i10 >> 2] | 0) != 0) {
        break;
       }
       if ((HEAP8[i12] & 1) != 0) {
        break;
       }
       HEAP32[i9 >> 2] = i21 + 1;
       HEAP16[(HEAP32[i14 >> 2] | 0) + (i21 << 1) >> 1] = i16;
       break L9;
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendEPKtj(i8, i7, 1);
    }
   } while (0);
   if (i19 >>> 0 < i4 >>> 0) {
    i15 = i19;
   } else {
    break;
   }
  }
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i8);
 i19 = HEAP32[i10 >> 2] | 0;
 if ((i19 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i8);
  i8 = HEAP32[i10 >> 2] | 0;
  HEAP32[i1 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i24 = i8;
   i22 = 33;
  }
 } else {
  HEAP32[i1 >> 2] = i19;
  i24 = i19;
  i22 = 33;
 }
 if ((i22 | 0) == 33) {
  i22 = i24 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
 }
 i22 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i11 = i22 | 0;
   i24 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i11 >> 2] = i24;
    break;
   }
  }
 } while (0);
 i22 = HEAP32[i10 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i10 = i22 | 0;
 i24 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i24 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i22);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i10 >> 2] = i24;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP8[i1 | 0] = 1;
   i7 = i1 + 4 | 0;
  } else {
   i8 = i1 + 1028 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   L4 : do {
    if ((i9 | 0) == 0) {
     i10 = __ZN3WTF10fastMallocEj(20) | 0;
     i11 = i10;
     _memset(i10 | 0, 0, 20) | 0;
     i10 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = i11;
     if ((i10 | 0) == 0) {
      i12 = i11;
      break;
     }
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) != 0) {
      i13 = HEAP32[i10 + 4 >> 2] | 0;
      if ((i13 | 0) > 0) {
       i14 = 0;
       while (1) {
        do {
         if ((HEAP32[i11 + (i14 << 3) >> 2] | 0) != -1) {
          i15 = HEAP32[i11 + (i14 << 3) + 4 >> 2] | 0;
          if ((i15 | 0) == 0) {
           break;
          }
          __ZdlPv(i15);
         }
        } while (0);
        i14 = i14 + 1 | 0;
        if ((i14 | 0) >= (i13 | 0)) {
         break;
        }
       }
      }
      __ZN3WTF8fastFreeEPv(i11);
     }
     __ZN3WTF8fastFreeEPv(i10);
     i12 = HEAP32[i8 >> 2] | 0;
    } else {
     i13 = HEAP32[i9 + 8 >> 2] | 0;
     i14 = HEAP32[i9 >> 2] | 0;
     i15 = ~(i2 << 15) + i2 | 0;
     i16 = (i15 >>> 10 ^ i15) * 9 & -1;
     i15 = i16 >>> 6 ^ i16;
     i16 = i15 + ~(i15 << 11) | 0;
     i15 = i16 >>> 16 ^ i16;
     if ((i14 | 0) == 0) {
      i12 = i9;
      break;
     }
     i16 = i13 & i15;
     i17 = i14 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i2 | 0)) {
      i19 = i17;
     } else {
      i17 = (i15 >>> 23) + ~i15 | 0;
      i15 = i17 << 12 ^ i17;
      i17 = i15 >>> 7 ^ i15;
      i15 = i17 << 2 ^ i17;
      i17 = i15 >>> 20 ^ i15 | 1;
      i15 = 0;
      i20 = i16;
      i16 = i18;
      while (1) {
       if ((i16 | 0) == 0) {
        i12 = i9;
        break L4;
       }
       i18 = (i15 | 0) == 0 ? i17 : i15;
       i21 = i18 + i20 & i13;
       i22 = i14 + (i21 << 3) | 0;
       i23 = HEAP32[i22 >> 2] | 0;
       if ((i23 | 0) == (i2 | 0)) {
        i19 = i22;
        break;
       } else {
        i15 = i18;
        i20 = i21;
        i16 = i23;
       }
      }
     }
     if ((i19 | 0) == 0) {
      i12 = i9;
      break;
     }
     i16 = HEAP32[i19 + 4 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i12 = i9;
      break;
     } else {
      i24 = i16;
     }
     STACKTOP = i3;
     return i24 | 0;
    }
   } while (0);
   i9 = __Znwj(1024) | 0;
   HEAP32[i4 >> 2] = i2;
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = i9;
   __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EEiNS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS8_SA_SC_SI_SF_EEEEOT0_OT1_(i6, i12 | 0, i4, i5);
   if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
    i16 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
    i20 = HEAP32[i16 >> 2] | 0;
    i15 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i16 >> 2] = i15;
    if ((i20 | 0) == 0) {
     i7 = i9;
     break;
    }
    __ZdlPv(i20);
    i7 = i9;
    break;
   } else {
    i20 = HEAP32[i8 >> 2] | 0;
    if ((i20 | 0) == 0) {
     i7 = i9;
     break;
    }
    __ZdlPv(i20);
    i7 = i9;
    break;
   }
  }
 } while (0);
 i6 = 0;
 while (1) {
  HEAPF32[i7 + (i6 << 2) >> 2] = +-1;
  i5 = i6 + 1 | 0;
  if (i5 >>> 0 < 256 >>> 0) {
   i6 = i5;
  } else {
   i24 = i7;
   break;
  }
 }
 STACKTOP = i3;
 return i24 | 0;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EEiNS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i22 = i4 | 0;
 i4 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3);
 }
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
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
   if ((i16 | 0) == 0) {
    i36 = i13;
   } else {
    __ZdlPv(i16);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
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
  i37 = 0;
 } else {
  i8 = i14;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    __ZdlPv(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZNK7WebCore11SVGFontData16fillNonBMPGlyphsEPNS_14SVGFontElementEPNS_9GlyphPageEjjPtPKNS_14SimpleFontDataE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i1 | 0;
 i9 = i1 + 16 | 0;
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 i11 = i8 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 if ((i5 | 0) == 0) {
  i12 = 0;
  __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEED1Ev(i8);
  STACKTOP = i1;
  return i12 | 0;
 }
 i13 = i3 + 4 | 0;
 i14 = i9 | 0;
 i15 = 0;
 i16 = 0;
 while (1) {
  __ZN3WTF6StringC1EPKtj(i9, i6 + (i16 << 1 << 1) | 0, 2);
  __ZN7WebCore14SVGFontElement22collectGlyphsForStringERKN3WTF6StringERNS1_6VectorINS_8SVGGlyphELj0ENS1_15CrashOnOverflowEEE(i2, i9, i8);
  i17 = i16 + i4 | 0;
  do {
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    HEAP16[i3 + 12 + (i17 << 1) >> 1] = 0;
    if ((HEAP32[i13 >> 2] | 0) != 0) {
     i18 = i15;
     break;
    }
    HEAP32[i3 + 524 + (i17 << 2) >> 2] = 0;
    i18 = i15;
   } else {
    i19 = HEAP16[(HEAP32[i10 >> 2] | 0) + 8 >> 1] | 0;
    HEAP16[i3 + 12 + (i17 << 1) >> 1] = i19;
    if ((HEAP32[i13 >> 2] | 0) == 0) {
     HEAP32[i3 + 524 + (i17 << 2) >> 2] = i19 << 16 >> 16 != 0 ? i7 : 0;
    }
    __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE5clearEv(i8);
    i18 = 1;
   }
  } while (0);
  i17 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i17 | 0) != 0) {
    i19 = i17 | 0;
    i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i19 >> 2] = i20;
     break;
    }
   }
  } while (0);
  i17 = i16 + 1 | 0;
  if (i17 >>> 0 < i5 >>> 0) {
   i15 = i18;
   i16 = i17;
  } else {
   i12 = i18;
   break;
  }
 }
 __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEED1Ev(i8);
 STACKTOP = i1;
 return i12 | 0;
}
function __ZNK7WebCore11SVGFontData13fillBMPGlyphsEPNS_14SVGFontElementEPNS_9GlyphPageEjjPtPKNS_14SimpleFontDataE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i1 | 0;
 i9 = i1 + 16 | 0;
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 i11 = i8 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 if ((i5 | 0) == 0) {
  i12 = 0;
  __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEED1Ev(i8);
  STACKTOP = i1;
  return i12 | 0;
 }
 i13 = i3 + 4 | 0;
 i14 = i9 | 0;
 i15 = 0;
 i16 = 0;
 while (1) {
  __ZN3WTF6StringC1EPKtj(i9, i6 + (i16 << 1) | 0, 1);
  __ZN7WebCore14SVGFontElement22collectGlyphsForStringERKN3WTF6StringERNS1_6VectorINS_8SVGGlyphELj0ENS1_15CrashOnOverflowEEE(i2, i9, i8);
  i17 = i16 + i4 | 0;
  do {
   if ((HEAP32[i11 >> 2] | 0) == 0) {
    HEAP16[i3 + 12 + (i17 << 1) >> 1] = 0;
    if ((HEAP32[i13 >> 2] | 0) != 0) {
     i18 = i15;
     break;
    }
    HEAP32[i3 + 524 + (i17 << 2) >> 2] = 0;
    i18 = i15;
   } else {
    i19 = HEAP16[(HEAP32[i10 >> 2] | 0) + 8 >> 1] | 0;
    HEAP16[i3 + 12 + (i17 << 1) >> 1] = i19;
    if ((HEAP32[i13 >> 2] | 0) == 0) {
     HEAP32[i3 + 524 + (i17 << 2) >> 2] = i19 << 16 >> 16 != 0 ? i7 : 0;
    }
    __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE5clearEv(i8);
    i18 = 1;
   }
  } while (0);
  i17 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i17 | 0) != 0) {
    i19 = i17 | 0;
    i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i20 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i19 >> 2] = i20;
     break;
    }
   }
  } while (0);
  i17 = i16 + 1 | 0;
  if (i17 >>> 0 < i5 >>> 0) {
   i15 = i18;
   i16 = i17;
  } else {
   i12 = i18;
   break;
  }
 }
 __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEED1Ev(i8);
 STACKTOP = i1;
 return i12 | 0;
}
function __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 | 0;
 if ((i4 | 0) != 0) {
  i1 = HEAP32[i5 >> 2] | 0;
  i6 = i1 + (i4 * 52 & -1) | 0;
  i4 = i1;
  while (1) {
   i1 = i4 + 48 | 0;
   i7 = HEAP32[i1 >> 2] | 0;
   i8 = i4 + 40 | 0;
   if ((i7 | 0) != 0) {
    i9 = HEAP32[i8 >> 2] | 0;
    i10 = i9 + (i7 << 2) | 0;
    i7 = i9;
    while (1) {
     i9 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i11 = i9 | 0;
       i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i11 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i10 | 0)) {
      break;
     }
    }
    HEAP32[i1 >> 2] = 0;
   }
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i4 + 44 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   __ZN7WebCore4PathD1Ev(i4 + 36 | 0);
   i10 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i7 = i10 | 0;
     i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i7 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i4 = i4 + 52 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3 | 0);
 return;
}
function __ZNK7WebCore11SVGFontData16widthForSVGGlyphEtf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 __ZN7WebCore14SVGFontElement16svgGlyphForGlyphEt(i5, __ZNK7WebCore18SVGFontFaceElement21associatedFontElementEv(i6) | 0, i2);
 __ZN7WebCore15SVGGlyphElement28inheritUnspecifiedAttributesERNS_8SVGGlyphEPKNS_11SVGFontDataE(i5, i1);
 d7 = +HEAPF32[i5 + 20 >> 2];
 i1 = __ZNK7WebCore18SVGFontFaceElement10unitsPerEmEv(i6) | 0;
 if ((i1 | 0) == 0) {
  d8 = d3;
 } else {
  d8 = d3 / +(i1 >>> 0 >>> 0);
 }
 d3 = d7 * d8;
 i1 = i5 + 48 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i2 = i5 + 40 | 0;
 if ((i6 | 0) != 0) {
  i9 = HEAP32[i2 >> 2] | 0;
  i10 = i9 + (i6 << 2) | 0;
  i6 = i9;
  while (1) {
   i9 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i11 = i9 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i10 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i5 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN7WebCore4PathD1Ev(i5 + 36 | 0);
 i1 = HEAP32[i5 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return +d3;
 }
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return +d3;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return +d3;
 }
 return +0;
}
function __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 52 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 + 48 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   i8 = i3 + 40 | 0;
   if ((i7 | 0) != 0) {
    i9 = HEAP32[i8 >> 2] | 0;
    i10 = i9 + (i7 << 2) | 0;
    i7 = i9;
    while (1) {
     i9 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i11 = i9 | 0;
       i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i11 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i10 | 0)) {
      break;
     }
    }
    HEAP32[i5 >> 2] = 0;
   }
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i3 + 44 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   __ZN7WebCore4PathD1Ev(i3 + 36 | 0);
   i10 = HEAP32[i3 + 16 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i7 = i10 | 0;
     i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i7 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i3 = i3 + 52 | 0;
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
 __ZN3WTF8fastFreeEPv(i2 | 0);
 return;
}
function __ZNK7WebCore11SVGFontData16fillSVGGlyphPageEPNS_9GlyphPageEjjPtjPKNS_14SimpleFontDataE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0;
 i8 = __ZNK7WebCore18SVGFontFaceElement21associatedFontElementEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 if ((i6 | 0) == (i4 | 0)) {
  i9 = __ZNK7WebCore11SVGFontData13fillBMPGlyphsEPNS_14SVGFontElementEPNS_9GlyphPageEjjPtPKNS_14SimpleFontDataE(0, i8, i2, i3, i6, i5, i7) | 0;
  return i9 | 0;
 } else {
  i9 = __ZNK7WebCore11SVGFontData16fillNonBMPGlyphsEPNS_14SVGFontElementEPNS_9GlyphPageEjjPtPKNS_14SimpleFontDataE(0, i8, i2, i3, i4, i5, i7) | 0;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore11SVGFontDataC2EPNS_18SVGFontFaceElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAPF32[i1 + 8 >> 2] = +__ZNK7WebCore18SVGFontFaceElement17horizontalOriginXEv(i2);
 HEAPF32[i1 + 12 >> 2] = +__ZNK7WebCore18SVGFontFaceElement17horizontalOriginYEv(i2);
 HEAPF32[i1 + 16 >> 2] = +__ZNK7WebCore18SVGFontFaceElement18horizontalAdvanceXEv(i2);
 HEAPF32[i1 + 20 >> 2] = +__ZNK7WebCore18SVGFontFaceElement15verticalOriginXEv(i2);
 HEAPF32[i1 + 24 >> 2] = +__ZNK7WebCore18SVGFontFaceElement15verticalOriginYEv(i2);
 HEAPF32[i1 + 28 >> 2] = +__ZNK7WebCore18SVGFontFaceElement16verticalAdvanceYEv(i2);
 return;
}
function __ZN7WebCore11SVGFontDataC1EPNS_18SVGFontFaceElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAPF32[i1 + 8 >> 2] = +__ZNK7WebCore18SVGFontFaceElement17horizontalOriginXEv(i2);
 HEAPF32[i1 + 12 >> 2] = +__ZNK7WebCore18SVGFontFaceElement17horizontalOriginYEv(i2);
 HEAPF32[i1 + 16 >> 2] = +__ZNK7WebCore18SVGFontFaceElement18horizontalAdvanceXEv(i2);
 HEAPF32[i1 + 20 >> 2] = +__ZNK7WebCore18SVGFontFaceElement15verticalOriginXEv(i2);
 HEAPF32[i1 + 24 >> 2] = +__ZNK7WebCore18SVGFontFaceElement15verticalOriginYEv(i2);
 HEAPF32[i1 + 28 >> 2] = +__ZNK7WebCore18SVGFontFaceElement16verticalAdvanceYEv(i2);
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_viif + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_fiif + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_iiiiiiii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iiiiiii + 2;
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
 return FUNCTION_TABLE_iiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0) | 0;
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
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
function dynCall_fiif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 return +FUNCTION_TABLE_fiif[i1 & 3](i2 | 0, i3 | 0, +d4);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_viif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viif[i1 & 3](i2 | 0, i3 | 0, +d4);
}
function b4(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(4);
 return 0;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZN7WebCore11SVGFontDataD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b2(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(2);
 return +0;
}
function b7(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(7);
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN7WebCore11SVGFontDataD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiiiiii = [b0,b0,__ZNK7WebCore11SVGFontData16fillSVGGlyphPageEPNS_9GlyphPageEjjPtjPKNS_14SimpleFontDataE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore11SVGFontDataD0Ev,b1,__ZN7WebCore11SVGFontDataD1Ev,b1,b1,b1];
  var FUNCTION_TABLE_fiif = [b2,b2,__ZNK7WebCore11SVGFontData16widthForSVGGlyphEtf,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore11SVGFontDataC2EPNS_18SVGFontFaceElementE,b3];
  var FUNCTION_TABLE_iiiiiii = [b4,b4,__ZNK7WebCore11SVGFontData22applySVGGlyphSelectionERNS_13WidthIteratorERNS_9GlyphDataEbiRj,b4];
  var FUNCTION_TABLE_ii = [b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viif = [b7,b7,__ZN7WebCore11SVGFontData18initializeFontDataEPNS_14SimpleFontDataEf,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiiiiii: dynCall_iiiiiiii, dynCall_vi: dynCall_vi, dynCall_fiif: dynCall_fiif, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viif: dynCall_viif, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiiiiii": invoke_iiiiiiii, "invoke_vi": invoke_vi, "invoke_fiif": invoke_fiif, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_viif": invoke_viif, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8XMLNames8langAttrE": __ZN7WebCore8XMLNames8langAttrE, "__ZN7WebCore8SVGNames11altGlyphTagE": __ZN7WebCore8SVGNames11altGlyphTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = asm["dynCall_iiiiiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_fiif = Module["dynCall_fiif"] = asm["dynCall_fiif"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viif = Module["dynCall_viif"] = asm["dynCall_viif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore11SVGFontData16fillSVGGlyphPageEPNS_9GlyphPageEjjPtjPKNS_14SimpleFontDataE","_strlen","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EEiNS_10PassOwnPtrIS6_EEEENS_18HashTableAddResultINS_17HashTableIteratorIiS8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore11SVGFontData34createStringWithMirroredCharactersEPKtj","__ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEED1Ev","__ZN7WebCore11SVGFontDataC2EPNS_18SVGFontFaceElementE","__ZNK7WebCore11SVGFontData22applySVGGlyphSelectionERNS_13WidthIteratorERNS_9GlyphDataEbiRj","__ZN7WebCore11SVGFontDataD0Ev","__ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE5clearEv","_memset","__ZNK7WebCore11SVGFontData13fillBMPGlyphsEPNS_14SVGFontElementEPNS_9GlyphPageEjjPtPKNS_14SimpleFontDataE","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6OwnPtrIN7WebCore15GlyphMetricsMapIfE16GlyphMetricsPageEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7IntHashIjEENS_7HashMapIiS7_SC_NS_10HashTraitsIiEENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN7WebCore11SVGFontData18initializeFontDataEPNS_14SimpleFontDataEf","__ZNK7WebCore11SVGFontData16widthForSVGGlyphEtf","_memcpy","__ZNK7WebCore11SVGFontData16fillNonBMPGlyphsEPNS_14SVGFontElementEPNS_9GlyphPageEjjPtPKNS_14SimpleFontDataE","__ZN7WebCore15GlyphMetricsMapIfE18locatePageSlowCaseEj","__ZN7WebCore11SVGFontDataD1Ev"]

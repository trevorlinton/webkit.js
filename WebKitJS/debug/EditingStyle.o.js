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
H_BASE = parentModule["_malloc"](376 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 376;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21HTMLElementEquivalentC1ENS_13CSSPropertyIDE;
var __ZN7WebCore21HTMLElementEquivalentC1ENS_13CSSPropertyIDERKNS_13QualifiedNameE;
var __ZN7WebCore21HTMLElementEquivalentC1ENS_13CSSPropertyIDENS_10CSSValueIDERKNS_13QualifiedNameE;
var __ZN7WebCore28HTMLTextDecorationEquivalentC1ENS_10CSSValueIDERKNS_13QualifiedNameE;
var __ZN7WebCore23HTMLAttributeEquivalentC1ENS_13CSSPropertyIDERKNS_13QualifiedNameES4_;
var __ZN7WebCore23HTMLAttributeEquivalentC1ENS_13CSSPropertyIDERKNS_13QualifiedNameE;
var __ZN7WebCore22HTMLFontSizeEquivalentC1Ev;
var __ZN7WebCore12EditingStyleC1Ev;
var __ZN7WebCore12EditingStyleC1EPNS_4NodeENS0_19PropertiesToIncludeE;
var __ZN7WebCore12EditingStyleC1ERKNS_8PositionENS0_19PropertiesToIncludeE;
var __ZN7WebCore12EditingStyleC1EPKNS_15StylePropertiesE;
var __ZN7WebCore12EditingStyleC1ENS_13CSSPropertyIDERKN3WTF6StringE;
var __ZN7WebCore12EditingStyleD1Ev;
var __ZN7WebCore11StyleChangeC1EPNS_12EditingStyleERKNS_8PositionE;
/* memory initializer */ allocate([65,112,112,108,101,45,115,116,121,108,101,45,115,112,97,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,133,0,0,0,79,1,0,0,7,0,0,0,9,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,5,0,0,0,6,0,0,0,7,0,0,0,8,0,0,0,9,0,0,0,85,0,0,0,19,0,0,0,103,0,0,0,132,0,0,0,134,0,0,0,147,0,0,0,163,0,0,0,164,0,0,0,167,0,0,0,79,1,0,0,84,1,0,0,87,1,0,0,88,1,0,0,23,0,0,0,133,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var __ZN7WebCore9HTMLNames4bTagE=env.__ZN7WebCore9HTMLNames4bTagE|0;
  var __ZN7WebCore9HTMLNames5emTagE=env.__ZN7WebCore9HTMLNames5emTagE|0;
  var __ZN7WebCore9HTMLNames9classAttrE=env.__ZN7WebCore9HTMLNames9classAttrE|0;
  var __ZN7WebCore9HTMLNames6supTagE=env.__ZN7WebCore9HTMLNames6supTagE|0;
  var __ZN7WebCore9HTMLNames9styleAttrE=env.__ZN7WebCore9HTMLNames9styleAttrE|0;
  var __ZN7WebCore9HTMLNames6subTagE=env.__ZN7WebCore9HTMLNames6subTagE|0;
  var __ZN7WebCore9HTMLNames9colorAttrE=env.__ZN7WebCore9HTMLNames9colorAttrE|0;
  var __ZN7WebCore9HTMLNames4iTagE=env.__ZN7WebCore9HTMLNames4iTagE|0;
  var __ZN7WebCore9HTMLNames9strongTagE=env.__ZN7WebCore9HTMLNames9strongTagE|0;
  var __ZN7WebCore9HTMLNames7spanTagE=env.__ZN7WebCore9HTMLNames7spanTagE|0;
  var __ZN7WebCore9HTMLNames4sTagE=env.__ZN7WebCore9HTMLNames4sTagE|0;
  var __ZN7WebCore9HTMLNames7dirAttrE=env.__ZN7WebCore9HTMLNames7dirAttrE|0;
  var __ZN7WebCore9HTMLNames9strikeTagE=env.__ZN7WebCore9HTMLNames9strikeTagE|0;
  var __ZN7WebCore9HTMLNames4uTagE=env.__ZN7WebCore9HTMLNames4uTagE|0;
  var __ZN7WebCore9HTMLNames8sizeAttrE=env.__ZN7WebCore9HTMLNames8sizeAttrE|0;
  var __ZN7WebCore9HTMLNames8faceAttrE=env.__ZN7WebCore9HTMLNames8faceAttrE|0;
  var __ZN7WebCore9HTMLNames7fontTagE=env.__ZN7WebCore9HTMLNames7fontTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore12EditingStyle11NoFontDeltaE=(H_BASE+336)|0;
  var __ZTVN7WebCore28HTMLTextDecorationEquivalentE=(H_BASE+32)|0;
  var __ZTVN7WebCore21HTMLElementEquivalentE=(H_BASE+176)|0;
  var __ZTVN7WebCore23HTMLAttributeEquivalentE=(H_BASE+80)|0;
  var __ZTVN7WebCore22HTMLFontSizeEquivalentE=(H_BASE+128)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
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
function __ZN7WebCore18getPropertiesNotInINS_22MutableStylePropertiesEEEN3WTF10PassRefPtrIS1_EEPNS_15StylePropertiesEPT_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 160 | 0;
 i26 = i4 + 168 | 0;
 i27 = i4 + 176 | 0;
 i28 = i4 + 184 | 0;
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i23, i2);
 i2 = HEAP32[i23 >> 2] | 0;
 i23 = i3 | 0;
 __ZN7WebCore22MutableStyleProperties26removeEquivalentPropertiesEPKNS_15StylePropertiesE(i2, i23);
 i29 = (i3 | 0) == 0;
 if (i29) {
  HEAP32[i24 >> 2] = 0;
  i30 = 0;
 } else {
  __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i24, i23, 335);
  i30 = HEAP32[i24 >> 2] | 0;
 }
 HEAP32[i24 >> 2] = 0;
 __ZN7WebCoreL19diffTextDecorationsEPNS_22MutableStylePropertiesENS_13CSSPropertyIDEPNS_8CSSValueE(i2, 133, i30);
 __ZN7WebCoreL19diffTextDecorationsEPNS_22MutableStylePropertiesENS_13CSSPropertyIDEPNS_8CSSValueE(i2, 335, i30);
 L5 : do {
  if (i29) {
   HEAP32[i25 >> 2] = 0;
   HEAP32[i26 >> 2] = 0;
   i31 = 66;
  } else {
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i25, i23, 9);
   i24 = i25 | 0;
   L7 : do {
    if ((HEAP32[i24 >> 2] | 0) != 0) {
     do {
      if ((i2 | 0) == 0) {
       HEAP32[i19 >> 2] = 0;
       i32 = 0;
      } else {
       __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i19, i2 | 0, 9);
       i3 = HEAP32[i19 >> 2] | 0;
       if ((i3 | 0) == 0) {
        i32 = 0;
        break;
       }
       L13 : do {
        if ((HEAP32[i3 + 4 >> 2] & 516604 | 0) == 472) {
         switch (HEAP32[i3 + 8 >> 2] | 0) {
         case 44:
         case 43:
         case 42:
         case 41:
         case 33:
          {
           break;
          }
         default:
          {
           i33 = 0;
           break L13;
          }
         }
         i33 = 1;
        } else {
         i33 = 0;
        }
       } while (0);
       i34 = i3 | 0;
       i35 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
       if ((i35 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i3);
        i32 = i33;
        break;
       } else {
        HEAP32[i34 >> 2] = i35;
        i32 = i33;
        break;
       }
      }
     } while (0);
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i18, i23, 9);
     i35 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i35 | 0) == 0) {
       i36 = 0;
      } else {
       L23 : do {
        if ((HEAP32[i35 + 4 >> 2] & 516604 | 0) == 472) {
         switch (HEAP32[i35 + 8 >> 2] | 0) {
         case 44:
         case 43:
         case 42:
         case 41:
         case 33:
          {
           break;
          }
         default:
          {
           i37 = 0;
           break L23;
          }
         }
         i37 = 1;
        } else {
         i37 = 0;
        }
       } while (0);
       i3 = i35 | 0;
       i34 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       if ((i34 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i35);
        i36 = i37;
        break;
       } else {
        HEAP32[i3 >> 2] = i34;
        i36 = i37;
        break;
       }
      }
     } while (0);
     i35 = i32 ^ i36;
     i34 = HEAP32[i24 >> 2] | 0;
     do {
      if ((i34 | 0) == 0) {
       if (i35) {
        break L7;
       }
      } else {
       i3 = i34 | 0;
       i38 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
       if ((i38 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i34);
        if (i35) {
         break L7;
        } else {
         break;
        }
       } else {
        HEAP32[i3 >> 2] = i38;
        if (i35) {
         break L7;
        } else {
         break;
        }
       }
      }
     } while (0);
     __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i2, 9, 0) | 0;
    }
   } while (0);
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i26, i23, 1);
   i24 = i26 | 0;
   if ((HEAP32[i24 >> 2] | 0) != 0) {
    do {
     if ((i2 | 0) == 0) {
      HEAP32[i17 >> 2] = 0;
      i39 = i15;
      i40 = i16;
      i31 = 41;
     } else {
      __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i17, i2 | 0, 1);
      i35 = i17 | 0;
      i34 = HEAP32[i35 >> 2] | 0;
      if ((i34 | 0) == 0) {
       i39 = i15;
       i40 = i16;
       i31 = 41;
       break;
      }
      i38 = HEAP32[i34 + 4 >> 2] | 0;
      if ((i38 & 516096 | 0) == 0) {
       if ((i38 & 508 | 0) == 100) {
        i41 = i34 + 8 | 0;
        i42 = i34;
       } else {
        HEAP32[i15 >> 2] = 0;
        __ZNK7WebCore8CSSValue7cssTextEv(i16, i34);
        __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i15, i16, 0) | 0;
        i38 = HEAP32[i16 >> 2] | 0;
        do {
         if ((i38 | 0) != 0) {
          i3 = i38 | 0;
          i43 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
          if ((i43 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i38);
           break;
          } else {
           HEAP32[i3 >> 2] = i43;
           break;
          }
         }
        } while (0);
        i41 = i15;
        i42 = HEAP32[i35 >> 2] | 0;
       }
       i38 = HEAP32[i41 >> 2] | 0;
       if ((i42 | 0) == 0) {
        i44 = i38;
        break;
       } else {
        i45 = i42;
        i46 = i38;
       }
      } else {
       i45 = i34;
       i46 = 0;
      }
      i38 = i45 | 0;
      i43 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
      if ((i43 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i45);
       i44 = i46;
       break;
      } else {
       HEAP32[i38 >> 2] = i43;
       i44 = i46;
       break;
      }
     }
    } while (0);
    if ((i31 | 0) == 41) {
     i44 = 0;
    }
    __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i14, i23, 1);
    i43 = i14 | 0;
    i38 = HEAP32[i43 >> 2] | 0;
    do {
     if ((i38 | 0) == 0) {
      i47 = 0;
     } else {
      i3 = HEAP32[i38 + 4 >> 2] | 0;
      if ((i3 & 516096 | 0) == 0) {
       if ((i3 & 508 | 0) == 100) {
        i48 = i38 + 8 | 0;
        i49 = i38;
       } else {
        HEAP32[i12 >> 2] = 0;
        __ZNK7WebCore8CSSValue7cssTextEv(i13, i38);
        __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i12, i13, 0) | 0;
        i3 = HEAP32[i13 >> 2] | 0;
        do {
         if ((i3 | 0) != 0) {
          i50 = i3 | 0;
          i51 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
          if ((i51 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i3);
           break;
          } else {
           HEAP32[i50 >> 2] = i51;
           break;
          }
         }
        } while (0);
        i48 = i12;
        i49 = HEAP32[i43 >> 2] | 0;
       }
       i3 = HEAP32[i48 >> 2] | 0;
       if ((i49 | 0) == 0) {
        i47 = i3;
        break;
       } else {
        i52 = i49;
        i53 = i3;
       }
      } else {
       i52 = i38;
       i53 = 0;
      }
      i3 = i52 | 0;
      i34 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
      if ((i34 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i52);
       i47 = i53;
       break;
      } else {
       HEAP32[i3 >> 2] = i34;
       i47 = i53;
       break;
      }
     }
    } while (0);
    i38 = (i44 | 0) == (i47 | 0);
    i43 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i43 | 0) == 0) {
      if (i38) {
       i31 = 64;
      }
     } else {
      i34 = i43 | 0;
      i3 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
      if ((i3 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i43);
       if (i38) {
        i31 = 64;
        break;
       } else {
        break;
       }
      } else {
       HEAP32[i34 >> 2] = i3;
       if (i38) {
        i31 = 64;
        break;
       } else {
        break;
       }
      }
     }
    } while (0);
    if ((i31 | 0) == 64) {
     __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i2, 1, 0) | 0;
    }
    if (i29) {
     i31 = 66;
     break;
    }
   }
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i27, i23, 132);
   i38 = i27 | 0;
   if ((HEAP32[i38 >> 2] | 0) != 0) {
    L95 : do {
     if ((i2 | 0) == 0) {
      HEAP32[i11 >> 2] = 0;
      HEAP32[i5 >> 2] = 0;
      i31 = 90;
     } else {
      i43 = i2 | 0;
      __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i11, i43, 132);
      i24 = i11 | 0;
      i3 = HEAP32[i24 >> 2] | 0;
      HEAP32[i24 >> 2] = 0;
      if ((i3 | 0) == 0) {
       i54 = 0;
       i55 = i5;
      } else {
       if ((HEAP32[i3 + 4 >> 2] & 516604 | 0) == 472) {
        i56 = HEAP32[i3 + 8 >> 2] | 0;
       } else {
        i56 = 0;
       }
       i24 = i3 | 0;
       i34 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       if ((i34 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i3);
       } else {
        HEAP32[i24 >> 2] = i34;
       }
       i54 = i56;
       i55 = i5;
      }
      __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, i43, 2);
      i43 = i5 | 0;
      i34 = HEAP32[i43 >> 2] | 0;
      HEAP32[i43 >> 2] = 0;
      do {
       if ((i34 | 0) == 0) {
        i57 = 0;
       } else {
        if ((HEAP32[i34 + 4 >> 2] & 516604 | 0) == 472) {
         i58 = HEAP32[i34 + 8 >> 2] | 0;
        } else {
         i58 = 0;
        }
        i43 = i34 | 0;
        i24 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
        if ((i24 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i34);
         i57 = i58;
         break;
        } else {
         HEAP32[i43 >> 2] = i24;
         i57 = i58;
         break;
        }
       }
      } while (0);
      switch (i54 | 0) {
      case 155:
       {
        i59 = 155;
        break L95;
        break;
       }
      case 152:
      case 156:
       {
        i59 = 152;
        break L95;
        break;
       }
      case 153:
      case 157:
       {
        i59 = 153;
        break L95;
        break;
       }
      case 369:
       {
        i59 = (i57 | 0) != 305 ? 152 : 153;
        break L95;
        break;
       }
      case 370:
       {
        i59 = (i57 | 0) == 305 ? 153 : 152;
        break L95;
        break;
       }
      case 154:
      case 158:
       {
        i59 = 154;
        break L95;
        break;
       }
      default:
       {
        i31 = 90;
        break L95;
       }
      }
     }
    } while (0);
    if ((i31 | 0) == 90) {
     i59 = 0;
    }
    L127 : do {
     if (i29) {
      HEAP32[i10 >> 2] = 0;
      HEAP32[i9 >> 2] = 0;
      i31 = 113;
     } else {
      __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i10, i23, 132);
      i34 = i10 | 0;
      i24 = HEAP32[i34 >> 2] | 0;
      HEAP32[i34 >> 2] = 0;
      if ((i24 | 0) == 0) {
       i60 = 0;
       i61 = i9;
      } else {
       if ((HEAP32[i24 + 4 >> 2] & 516604 | 0) == 472) {
        i62 = HEAP32[i24 + 8 >> 2] | 0;
       } else {
        i62 = 0;
       }
       i34 = i24 | 0;
       i43 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
       if ((i43 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i24);
       } else {
        HEAP32[i34 >> 2] = i43;
       }
       i60 = i62;
       i61 = i9;
      }
      __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i9, i23, 2);
      i43 = i9 | 0;
      i34 = HEAP32[i43 >> 2] | 0;
      HEAP32[i43 >> 2] = 0;
      do {
       if ((i34 | 0) == 0) {
        i63 = 0;
       } else {
        if ((HEAP32[i34 + 4 >> 2] & 516604 | 0) == 472) {
         i64 = HEAP32[i34 + 8 >> 2] | 0;
        } else {
         i64 = 0;
        }
        i43 = i34 | 0;
        i24 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
        if ((i24 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i34);
         i63 = i64;
         break;
        } else {
         HEAP32[i43 >> 2] = i24;
         i63 = i64;
         break;
        }
       }
      } while (0);
      switch (i60 | 0) {
      case 155:
       {
        i65 = 155;
        break L127;
        break;
       }
      case 152:
      case 156:
       {
        i65 = 152;
        break L127;
        break;
       }
      case 153:
      case 157:
       {
        i65 = 153;
        break L127;
        break;
       }
      case 369:
       {
        i65 = (i63 | 0) != 305 ? 152 : 153;
        break L127;
        break;
       }
      case 370:
       {
        i65 = (i63 | 0) == 305 ? 153 : 152;
        break L127;
        break;
       }
      case 154:
      case 158:
       {
        i65 = 154;
        break L127;
        break;
       }
      default:
       {
        i31 = 113;
        break L127;
       }
      }
     }
    } while (0);
    if ((i31 | 0) == 113) {
     i65 = 0;
    }
    i34 = (i59 | 0) == (i65 | 0);
    i24 = HEAP32[i38 >> 2] | 0;
    do {
     if ((i24 | 0) == 0) {
      if (i34) {
       i31 = 119;
      }
     } else {
      i43 = i24 | 0;
      i3 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
      if ((i3 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i24);
       if (i34) {
        i31 = 119;
        break;
       } else {
        break;
       }
      } else {
       HEAP32[i43 >> 2] = i3;
       if (i34) {
        i31 = 119;
        break;
       } else {
        break;
       }
      }
     }
    } while (0);
    if ((i31 | 0) == 119) {
     __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i2, 132, 0) | 0;
    }
    if (i29) {
     i31 = 121;
     break;
    }
   }
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i28, i23, 23);
   i34 = i28 | 0;
   if ((HEAP32[i34 >> 2] | 0) == 0) {
    break;
   }
   do {
    if ((i2 | 0) == 0) {
     HEAP32[i8 >> 2] = 0;
     i66 = i6;
     i67 = i7;
     i31 = 134;
    } else {
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i8, i2 | 0, 23);
     i24 = i8 | 0;
     i38 = HEAP32[i24 >> 2] | 0;
     if ((i38 | 0) == 0) {
      i66 = i6;
      i67 = i7;
      i31 = 134;
      break;
     }
     i3 = HEAP32[i38 + 4 >> 2] | 0;
     if ((i3 & 516096 | 0) == 0) {
      if ((i3 & 508 | 0) == 100) {
       i68 = i38 + 8 | 0;
       i69 = i38;
      } else {
       HEAP32[i6 >> 2] = 0;
       __ZNK7WebCore8CSSValue7cssTextEv(i7, i38);
       __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i6, i7, 0) | 0;
       i3 = HEAP32[i7 >> 2] | 0;
       do {
        if ((i3 | 0) != 0) {
         i43 = i3 | 0;
         i35 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
         if ((i35 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i3);
          break;
         } else {
          HEAP32[i43 >> 2] = i35;
          break;
         }
        }
       } while (0);
       i68 = i6;
       i69 = HEAP32[i24 >> 2] | 0;
      }
      i3 = HEAP32[i68 >> 2] | 0;
      if ((i69 | 0) == 0) {
       i70 = i3;
       break;
      } else {
       i71 = i69;
       i72 = i3;
      }
     } else {
      i71 = i38;
      i72 = 0;
     }
     i3 = i71 | 0;
     i35 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i35 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i71);
      i70 = i72;
      break;
     } else {
      HEAP32[i3 >> 2] = i35;
      i70 = i72;
      break;
     }
    }
   } while (0);
   if ((i31 | 0) == 134) {
    i70 = 0;
   }
   do {
    if (i29) {
     HEAP32[i22 >> 2] = 0;
     i73 = i20;
     i74 = i21;
     i31 = 150;
    } else {
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i22, i23, 23);
     i35 = i22 | 0;
     i3 = HEAP32[i35 >> 2] | 0;
     if ((i3 | 0) == 0) {
      i73 = i20;
      i74 = i21;
      i31 = 150;
      break;
     }
     i43 = HEAP32[i3 + 4 >> 2] | 0;
     if ((i43 & 516096 | 0) == 0) {
      if ((i43 & 508 | 0) == 100) {
       i75 = i3 + 8 | 0;
       i76 = i3;
      } else {
       HEAP32[i20 >> 2] = 0;
       __ZNK7WebCore8CSSValue7cssTextEv(i21, i3);
       __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i20, i21, 0) | 0;
       i43 = HEAP32[i21 >> 2] | 0;
       do {
        if ((i43 | 0) != 0) {
         i51 = i43 | 0;
         i50 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
         if ((i50 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i43);
          break;
         } else {
          HEAP32[i51 >> 2] = i50;
          break;
         }
        }
       } while (0);
       i75 = i20;
       i76 = HEAP32[i35 >> 2] | 0;
      }
      i43 = HEAP32[i75 >> 2] | 0;
      if ((i76 | 0) == 0) {
       i77 = i43;
       break;
      } else {
       i78 = i76;
       i79 = i43;
      }
     } else {
      i78 = i3;
      i79 = 0;
     }
     i43 = i78 | 0;
     i38 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
     if ((i38 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i78);
      i77 = i79;
      break;
     } else {
      HEAP32[i43 >> 2] = i38;
      i77 = i79;
      break;
     }
    }
   } while (0);
   if ((i31 | 0) == 150) {
    i77 = 0;
   }
   i38 = (i70 | 0) == (i77 | 0);
   i43 = HEAP32[i34 >> 2] | 0;
   do {
    if ((i43 | 0) == 0) {
     if (!i38) {
      break L5;
     }
    } else {
     i24 = i43 | 0;
     i50 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i50 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i43);
      if (i38) {
       break;
      } else {
       break L5;
      }
     } else {
      HEAP32[i24 >> 2] = i50;
      if (i38) {
       break;
      } else {
       break L5;
      }
     }
    }
   } while (0);
   __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i2, 23, 0) | 0;
  }
 } while (0);
 if ((i31 | 0) == 66) {
  HEAP32[i27 >> 2] = 0;
  i31 = 121;
 }
 if ((i31 | 0) == 121) {
  HEAP32[i28 >> 2] = 0;
 }
 HEAP32[i1 >> 2] = i2;
 if ((i30 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i30 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i30);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore18getPropertiesNotInINS_22ComputedStyleExtractorEEEN3WTF10PassRefPtrINS_22MutableStylePropertiesEEEPNS_15StylePropertiesEPT_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 160 | 0;
 i26 = i4 + 168 | 0;
 i27 = i4 + 176 | 0;
 i28 = i4 + 184 | 0;
 __ZNK7WebCore15StyleProperties11mutableCopyEv(i23, i2);
 i2 = HEAP32[i23 >> 2] | 0;
 __ZN7WebCore22MutableStyleProperties26removeEquivalentPropertiesEPKNS_22ComputedStyleExtractorE(i2, i3);
 __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i24, i3, 335, 1);
 i23 = i24 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 __ZN7WebCoreL19diffTextDecorationsEPNS_22MutableStylePropertiesENS_13CSSPropertyIDEPNS_8CSSValueE(i2, 133, i24);
 __ZN7WebCoreL19diffTextDecorationsEPNS_22MutableStylePropertiesENS_13CSSPropertyIDEPNS_8CSSValueE(i2, 335, i24);
 __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i25, i3, 9, 1);
 i23 = i25 | 0;
 L1 : do {
  if ((HEAP32[i23 >> 2] | 0) != 0) {
   do {
    if ((i2 | 0) == 0) {
     HEAP32[i19 >> 2] = 0;
     i29 = 0;
    } else {
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i19, i2 | 0, 9);
     i25 = HEAP32[i19 >> 2] | 0;
     if ((i25 | 0) == 0) {
      i29 = 0;
      break;
     }
     L7 : do {
      if ((HEAP32[i25 + 4 >> 2] & 516604 | 0) == 472) {
       switch (HEAP32[i25 + 8 >> 2] | 0) {
       case 44:
       case 43:
       case 42:
       case 41:
       case 33:
        {
         break;
        }
       default:
        {
         i30 = 0;
         break L7;
        }
       }
       i30 = 1;
      } else {
       i30 = 0;
      }
     } while (0);
     i31 = i25 | 0;
     i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     if ((i32 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i25);
      i29 = i30;
      break;
     } else {
      HEAP32[i31 >> 2] = i32;
      i29 = i30;
      break;
     }
    }
   } while (0);
   __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i18, i3, 9, 1);
   i32 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i32 | 0) == 0) {
     i33 = 0;
    } else {
     L17 : do {
      if ((HEAP32[i32 + 4 >> 2] & 516604 | 0) == 472) {
       switch (HEAP32[i32 + 8 >> 2] | 0) {
       case 44:
       case 43:
       case 42:
       case 41:
       case 33:
        {
         break;
        }
       default:
        {
         i34 = 0;
         break L17;
        }
       }
       i34 = 1;
      } else {
       i34 = 0;
      }
     } while (0);
     i25 = i32 | 0;
     i31 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i32);
      i33 = i34;
      break;
     } else {
      HEAP32[i25 >> 2] = i31;
      i33 = i34;
      break;
     }
    }
   } while (0);
   i32 = i29 ^ i33;
   i31 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i31 | 0) == 0) {
     if (i32) {
      break L1;
     }
    } else {
     i25 = i31 | 0;
     i35 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i35 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i31);
      if (i32) {
       break L1;
      } else {
       break;
      }
     } else {
      HEAP32[i25 >> 2] = i35;
      if (i32) {
       break L1;
      } else {
       break;
      }
     }
    }
   } while (0);
   __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i2, 9, 0) | 0;
  }
 } while (0);
 __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i26, i3, 1, 1);
 i23 = i26 | 0;
 L33 : do {
  if ((HEAP32[i23 >> 2] | 0) != 0) {
   do {
    if ((i2 | 0) == 0) {
     HEAP32[i17 >> 2] = 0;
     i36 = i15;
     i37 = i16;
     i38 = 36;
    } else {
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i17, i2 | 0, 1);
     i26 = i17 | 0;
     i33 = HEAP32[i26 >> 2] | 0;
     if ((i33 | 0) == 0) {
      i36 = i15;
      i37 = i16;
      i38 = 36;
      break;
     }
     i29 = HEAP32[i33 + 4 >> 2] | 0;
     if ((i29 & 516096 | 0) == 0) {
      if ((i29 & 508 | 0) == 100) {
       i39 = i33 + 8 | 0;
       i40 = i33;
      } else {
       HEAP32[i15 >> 2] = 0;
       __ZNK7WebCore8CSSValue7cssTextEv(i16, i33);
       __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i15, i16, 0) | 0;
       i29 = HEAP32[i16 >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         i34 = i29 | 0;
         i18 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
         if ((i18 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i29);
          break;
         } else {
          HEAP32[i34 >> 2] = i18;
          break;
         }
        }
       } while (0);
       i39 = i15;
       i40 = HEAP32[i26 >> 2] | 0;
      }
      i29 = HEAP32[i39 >> 2] | 0;
      if ((i40 | 0) == 0) {
       i41 = i29;
       break;
      } else {
       i42 = i40;
       i43 = i29;
      }
     } else {
      i42 = i33;
      i43 = 0;
     }
     i29 = i42 | 0;
     i18 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i42);
      i41 = i43;
      break;
     } else {
      HEAP32[i29 >> 2] = i18;
      i41 = i43;
      break;
     }
    }
   } while (0);
   if ((i38 | 0) == 36) {
    i41 = 0;
   }
   __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i14, i3, 1, 1);
   i18 = i14 | 0;
   i29 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i29 | 0) == 0) {
     i44 = 0;
    } else {
     i34 = HEAP32[i29 + 4 >> 2] | 0;
     if ((i34 & 516096 | 0) == 0) {
      if ((i34 & 508 | 0) == 100) {
       i45 = i29 + 8 | 0;
       i46 = i29;
      } else {
       HEAP32[i12 >> 2] = 0;
       __ZNK7WebCore8CSSValue7cssTextEv(i13, i29);
       __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i12, i13, 0) | 0;
       i34 = HEAP32[i13 >> 2] | 0;
       do {
        if ((i34 | 0) != 0) {
         i30 = i34 | 0;
         i19 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
         if ((i19 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i34);
          break;
         } else {
          HEAP32[i30 >> 2] = i19;
          break;
         }
        }
       } while (0);
       i45 = i12;
       i46 = HEAP32[i18 >> 2] | 0;
      }
      i34 = HEAP32[i45 >> 2] | 0;
      if ((i46 | 0) == 0) {
       i44 = i34;
       break;
      } else {
       i47 = i46;
       i48 = i34;
      }
     } else {
      i47 = i29;
      i48 = 0;
     }
     i34 = i47 | 0;
     i33 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i47);
      i44 = i48;
      break;
     } else {
      HEAP32[i34 >> 2] = i33;
      i44 = i48;
      break;
     }
    }
   } while (0);
   i29 = (i41 | 0) == (i44 | 0);
   i18 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i18 | 0) == 0) {
     if (!i29) {
      break L33;
     }
    } else {
     i33 = i18 | 0;
     i34 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i34 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i18);
      if (i29) {
       break;
      } else {
       break L33;
      }
     } else {
      HEAP32[i33 >> 2] = i34;
      if (i29) {
       break;
      } else {
       break L33;
      }
     }
    }
   } while (0);
   __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i2, 1, 0) | 0;
  }
 } while (0);
 __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i27, i3, 132, 1);
 i23 = i27 | 0;
 L85 : do {
  if ((HEAP32[i23 >> 2] | 0) != 0) {
   L87 : do {
    if ((i2 | 0) == 0) {
     HEAP32[i11 >> 2] = 0;
     HEAP32[i5 >> 2] = 0;
     i38 = 83;
    } else {
     i27 = i2 | 0;
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i11, i27, 132);
     i44 = i11 | 0;
     i41 = HEAP32[i44 >> 2] | 0;
     HEAP32[i44 >> 2] = 0;
     if ((i41 | 0) == 0) {
      i49 = 0;
      i50 = i5;
     } else {
      if ((HEAP32[i41 + 4 >> 2] & 516604 | 0) == 472) {
       i51 = HEAP32[i41 + 8 >> 2] | 0;
      } else {
       i51 = 0;
      }
      i44 = i41 | 0;
      i48 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
      if ((i48 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i41);
      } else {
       HEAP32[i44 >> 2] = i48;
      }
      i49 = i51;
      i50 = i5;
     }
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, i27, 2);
     i27 = i5 | 0;
     i48 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = 0;
     do {
      if ((i48 | 0) == 0) {
       i52 = 0;
      } else {
       if ((HEAP32[i48 + 4 >> 2] & 516604 | 0) == 472) {
        i53 = HEAP32[i48 + 8 >> 2] | 0;
       } else {
        i53 = 0;
       }
       i27 = i48 | 0;
       i44 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       if ((i44 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i48);
        i52 = i53;
        break;
       } else {
        HEAP32[i27 >> 2] = i44;
        i52 = i53;
        break;
       }
      }
     } while (0);
     switch (i49 | 0) {
     case 369:
      {
       i54 = (i52 | 0) != 305 ? 152 : 153;
       break L87;
       break;
      }
     case 370:
      {
       i54 = (i52 | 0) == 305 ? 153 : 152;
       break L87;
       break;
      }
     case 154:
     case 158:
      {
       i54 = 154;
       break L87;
       break;
      }
     case 155:
      {
       i54 = 155;
       break L87;
       break;
      }
     case 152:
     case 156:
      {
       i54 = 152;
       break L87;
       break;
      }
     case 153:
     case 157:
      {
       i54 = 153;
       break L87;
       break;
      }
     default:
      {
       i38 = 83;
       break L87;
      }
     }
    }
   } while (0);
   if ((i38 | 0) == 83) {
    i54 = 0;
   }
   __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i10, i3, 132, 1);
   i48 = i10 | 0;
   i44 = HEAP32[i48 >> 2] | 0;
   HEAP32[i48 >> 2] = 0;
   do {
    if ((i44 | 0) == 0) {
     i55 = 0;
    } else {
     if ((HEAP32[i44 + 4 >> 2] & 516604 | 0) == 472) {
      i56 = HEAP32[i44 + 8 >> 2] | 0;
     } else {
      i56 = 0;
     }
     i48 = i44 | 0;
     i27 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     if ((i27 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i44);
      i55 = i56;
      break;
     } else {
      HEAP32[i48 >> 2] = i27;
      i55 = i56;
      break;
     }
    }
   } while (0);
   __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i9, i3, 2, 1);
   i44 = i9 | 0;
   i27 = HEAP32[i44 >> 2] | 0;
   HEAP32[i44 >> 2] = 0;
   do {
    if ((i27 | 0) == 0) {
     i57 = 0;
    } else {
     if ((HEAP32[i27 + 4 >> 2] & 516604 | 0) == 472) {
      i58 = HEAP32[i27 + 8 >> 2] | 0;
     } else {
      i58 = 0;
     }
     i44 = i27 | 0;
     i48 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     if ((i48 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i27);
      i57 = i58;
      break;
     } else {
      HEAP32[i44 >> 2] = i48;
      i57 = i58;
      break;
     }
    }
   } while (0);
   switch (i55 | 0) {
   case 155:
    {
     i59 = 155;
     break;
    }
   case 152:
   case 156:
    {
     i59 = 152;
     break;
    }
   case 153:
   case 157:
    {
     i59 = 153;
     break;
    }
   case 369:
    {
     i59 = (i57 | 0) != 305 ? 152 : 153;
     break;
    }
   case 370:
    {
     i59 = (i57 | 0) == 305 ? 153 : 152;
     break;
    }
   case 154:
   case 158:
    {
     i59 = 154;
     break;
    }
   default:
    {
     i59 = 0;
    }
   }
   i27 = (i54 | 0) == (i59 | 0);
   i48 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i48 | 0) == 0) {
     if (!i27) {
      break L85;
     }
    } else {
     i44 = i48 | 0;
     i41 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     if ((i41 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i48);
      if (i27) {
       break;
      } else {
       break L85;
      }
     } else {
      HEAP32[i44 >> 2] = i41;
      if (i27) {
       break;
      } else {
       break L85;
      }
     }
    }
   } while (0);
   __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i2, 132, 0) | 0;
  }
 } while (0);
 __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i28, i3, 23, 1);
 i23 = i28 | 0;
 L153 : do {
  if ((HEAP32[i23 >> 2] | 0) != 0) {
   do {
    if ((i2 | 0) == 0) {
     HEAP32[i8 >> 2] = 0;
     i60 = i6;
     i61 = i7;
     i38 = 121;
    } else {
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i8, i2 | 0, 23);
     i28 = i8 | 0;
     i59 = HEAP32[i28 >> 2] | 0;
     if ((i59 | 0) == 0) {
      i60 = i6;
      i61 = i7;
      i38 = 121;
      break;
     }
     i54 = HEAP32[i59 + 4 >> 2] | 0;
     if ((i54 & 516096 | 0) == 0) {
      if ((i54 & 508 | 0) == 100) {
       i62 = i59 + 8 | 0;
       i63 = i59;
      } else {
       HEAP32[i6 >> 2] = 0;
       __ZNK7WebCore8CSSValue7cssTextEv(i7, i59);
       __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i6, i7, 0) | 0;
       i54 = HEAP32[i7 >> 2] | 0;
       do {
        if ((i54 | 0) != 0) {
         i57 = i54 | 0;
         i55 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
         if ((i55 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i54);
          break;
         } else {
          HEAP32[i57 >> 2] = i55;
          break;
         }
        }
       } while (0);
       i62 = i6;
       i63 = HEAP32[i28 >> 2] | 0;
      }
      i54 = HEAP32[i62 >> 2] | 0;
      if ((i63 | 0) == 0) {
       i64 = i54;
       break;
      } else {
       i65 = i63;
       i66 = i54;
      }
     } else {
      i65 = i59;
      i66 = 0;
     }
     i54 = i65 | 0;
     i55 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
     if ((i55 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i65);
      i64 = i66;
      break;
     } else {
      HEAP32[i54 >> 2] = i55;
      i64 = i66;
      break;
     }
    }
   } while (0);
   if ((i38 | 0) == 121) {
    i64 = 0;
   }
   __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i22, i3, 23, 1);
   i55 = i22 | 0;
   i54 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i54 | 0) == 0) {
     i67 = 0;
    } else {
     i57 = HEAP32[i54 + 4 >> 2] | 0;
     if ((i57 & 516096 | 0) == 0) {
      if ((i57 & 508 | 0) == 100) {
       i68 = i54 + 8 | 0;
       i69 = i54;
      } else {
       HEAP32[i20 >> 2] = 0;
       __ZNK7WebCore8CSSValue7cssTextEv(i21, i54);
       __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i20, i21, 0) | 0;
       i57 = HEAP32[i21 >> 2] | 0;
       do {
        if ((i57 | 0) != 0) {
         i58 = i57 | 0;
         i9 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
         if ((i9 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i57);
          break;
         } else {
          HEAP32[i58 >> 2] = i9;
          break;
         }
        }
       } while (0);
       i68 = i20;
       i69 = HEAP32[i55 >> 2] | 0;
      }
      i57 = HEAP32[i68 >> 2] | 0;
      if ((i69 | 0) == 0) {
       i67 = i57;
       break;
      } else {
       i70 = i69;
       i71 = i57;
      }
     } else {
      i70 = i54;
      i71 = 0;
     }
     i57 = i70 | 0;
     i59 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
     if ((i59 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i70);
      i67 = i71;
      break;
     } else {
      HEAP32[i57 >> 2] = i59;
      i67 = i71;
      break;
     }
    }
   } while (0);
   i54 = (i64 | 0) == (i67 | 0);
   i55 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i55 | 0) == 0) {
     if (!i54) {
      break L153;
     }
    } else {
     i59 = i55 | 0;
     i57 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     if ((i57 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i55);
      if (i54) {
       break;
      } else {
       break L153;
      }
     } else {
      HEAP32[i59 >> 2] = i57;
      if (i54) {
       break;
      } else {
       break L153;
      }
     }
    }
   } while (0);
   __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i2, 23, 0) | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i2;
 if ((i24 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i24 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i24);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore12EditingStyle25textDirectionForSelectionERKNS_16VisibleSelectionEPS0_Rb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 216 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 88 | 0;
 i12 = i4 + 104 | 0;
 i13 = i4 + 120 | 0;
 i14 = i4 + 128 | 0;
 i15 = i4 + 144 | 0;
 i16 = i4 + 152 | 0;
 i17 = i4 + 160 | 0;
 i18 = i4 + 176 | 0;
 i19 = i4 + 192 | 0;
 i20 = i4 + 200 | 0;
 i21 = i4 + 208 | 0;
 HEAP8[i3] = 1;
 i22 = i1 + 52 | 0;
 if ((HEAP32[i22 >> 2] | 0) == 0) {
  i23 = 0;
  STACKTOP = i4;
  return i23 | 0;
 }
 i24 = i6 | 0;
 i25 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i24 >> 2] = i25;
 if ((i25 | 0) == 0) {
  i26 = i6 + 8 | 0;
  i27 = 0;
  i28 = i26;
  i29 = i26;
 } else {
  i26 = i25 + 8 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
  i26 = i6 + 8 | 0;
  i25 = i26;
  i27 = HEAP32[i25 >> 2] & -8;
  i28 = i26;
  i29 = i25;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 28 >> 2];
 i25 = HEAP32[i1 + 32 >> 2] | 0;
 i26 = i27 | i25 & 7;
 HEAP32[i29 >> 2] = i26;
 HEAP8[i28] = i26 & 255 & -9 | i25 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i5, i6, 1);
 i6 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i24 = i6 + 8 | 0;
   i25 = i24 | 0;
   i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   HEAP32[i25 >> 2] = i26;
   if ((i26 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 i6 = i5 | 0;
 i24 = HEAP32[i6 >> 2] | 0;
 if ((i24 | 0) == 0) {
  i23 = 0;
  STACKTOP = i4;
  return i23 | 0;
 }
 i26 = i7 | 0;
 HEAP32[i26 >> 2] = 0;
 i25 = i7 + 4 | 0;
 HEAP32[i25 >> 2] = 0;
 i28 = i7 + 8 | 0;
 i29 = i28;
 i27 = HEAP32[i29 >> 2] | 0;
 HEAP32[i29 >> 2] = i27 & -8;
 HEAP8[i28] = i27 & 255 & -16;
 i27 = HEAP32[i22 >> 2] | 0;
 L16 : do {
  if ((i27 | 0) == 2) {
   i30 = i9 | 0;
   i31 = HEAP32[i1 + 36 >> 2] | 0;
   HEAP32[i30 >> 2] = i31;
   if ((i31 | 0) == 0) {
    i32 = 0;
   } else {
    i33 = i31 + 8 | 0;
    HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
    i32 = HEAP32[i26 >> 2] | 0;
   }
   HEAP32[i9 + 4 >> 2] = HEAP32[i1 + 40 >> 2];
   i33 = HEAP32[i1 + 44 >> 2] | 0;
   i31 = i9 + 8 | 0;
   i34 = i31;
   i35 = HEAP32[i34 >> 2] & -8 | i33 & 7;
   HEAP32[i34 >> 2] = i35;
   HEAP8[i31] = i35 & 255 & -9 | i33 & 8;
   __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i8, i9, 1);
   i33 = i8 | 0;
   i35 = HEAP32[i33 >> 2] | 0;
   HEAP32[i33 >> 2] = 0;
   HEAP32[i26 >> 2] = i35;
   do {
    if ((i32 | 0) != 0) {
     i35 = i32 + 8 | 0;
     i31 = i35 | 0;
     i34 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     HEAP32[i31 >> 2] = i34;
     if ((i34 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
    }
   } while (0);
   HEAP32[i25 >> 2] = HEAP32[i8 + 4 >> 2];
   i35 = HEAP32[i8 + 8 >> 2] | 0;
   i34 = HEAP32[i29 >> 2] & -8 | i35 & 7;
   HEAP32[i29 >> 2] = i34;
   HEAP8[i28] = i34 & 255 & -9 | i35 & 8;
   i35 = HEAP32[i33 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i34 = i35 + 8 | 0;
     i31 = i34 | 0;
     i36 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     HEAP32[i31 >> 2] = i36;
     if ((i36 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
    }
   } while (0);
   i35 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i33 = i35 + 8 | 0;
     i34 = i33 | 0;
     i36 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     HEAP32[i34 >> 2] = i36;
     if ((i36 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
    }
   } while (0);
   i35 = HEAP32[i26 >> 2] | 0;
   if ((i35 | 0) == 0) {
    i37 = 0;
   } else {
    i37 = HEAP32[(HEAP32[i35 + 20 >> 2] | 0) + 8 >> 2] | 0;
   }
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i11, i5);
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i12, i7);
   __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i10, i37, i11, i12);
   i35 = i10 | 0;
   i30 = __ZNK7WebCore5Range12pastLastNodeEv(HEAP32[i35 >> 2] | 0) | 0;
   i33 = HEAP32[i35 >> 2] | 0;
   do {
    if ((i33 | 0) != 0) {
     i35 = i33 | 0;
     i36 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
     if ((i36 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i33);
      __ZN3WTF8fastFreeEPv(i33);
      break;
     } else {
      HEAP32[i35 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i33 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i33 | 0) != 0) {
     i36 = i33 + 8 | 0;
     i35 = i36 | 0;
     i34 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
     HEAP32[i35 >> 2] = i34;
     if ((i34 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
    }
   } while (0);
   i33 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i33 | 0) != 0) {
     i36 = i33 + 8 | 0;
     i34 = i36 | 0;
     i35 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     HEAP32[i34 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
    }
   } while (0);
   if ((i24 | 0) != (i30 | 0)) {
    i33 = i15 | 0;
    i36 = i13 | 0;
    i35 = i14 | 0;
    i34 = i24;
    while (1) {
     i31 = i34 + 12 | 0;
     do {
      if ((HEAP32[i31 >> 2] & 8 | 0) != 0) {
       HEAP32[i33 >> 2] = i34;
       i38 = i34 + 8 | 0;
       HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
       __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i14, i15, 0, 0);
       __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i13, i14, 159, 1);
       i38 = HEAP32[i36 >> 2] | 0;
       HEAP32[i36 >> 2] = 0;
       i39 = HEAP32[i35 >> 2] | 0;
       do {
        if ((i39 | 0) != 0) {
         i40 = i39 + 8 | 0;
         i41 = i40 | 0;
         i42 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
         HEAP32[i41 >> 2] = i42;
         if ((i42 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
        }
       } while (0);
       i39 = HEAP32[i33 >> 2] | 0;
       do {
        if ((i39 | 0) != 0) {
         i40 = i39 + 8 | 0;
         i42 = i40 | 0;
         i41 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
         HEAP32[i42 >> 2] = i41;
         if ((i41 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
        }
       } while (0);
       if ((i38 | 0) == 0) {
        break;
       }
       i39 = HEAP32[i38 + 4 >> 2] | 0;
       do {
        if ((i39 & 516096 | 0) == 0) {
         if ((i39 & 508 | 0) == 472) {
          i40 = HEAP32[i38 + 8 >> 2] | 0;
          if ((i40 | 0) == 327 | (i40 | 0) == 321) {
           i43 = 1;
           break;
          }
         }
         i43 = 0;
        } else {
         i43 = 4;
        }
       } while (0);
       i39 = i38 | 0;
       i40 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
       if ((i40 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i38);
       } else {
        HEAP32[i39 >> 2] = i40;
       }
       if (!((i43 | 0) == 0 | (i43 | 0) == 4)) {
        i44 = 0;
        break L16;
       }
      }
     } while (0);
     if ((HEAP32[i31 >> 2] & 2 | 0) == 0) {
      i45 = 62;
     } else {
      i40 = HEAP32[i34 + 36 >> 2] | 0;
      if ((i40 | 0) == 0) {
       i45 = 62;
      } else {
       i46 = i40;
      }
     }
     do {
      if ((i45 | 0) == 62) {
       i45 = 0;
       i40 = HEAP32[i34 + 28 >> 2] | 0;
       if ((i40 | 0) != 0) {
        i46 = i40;
        break;
       }
       i46 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i34) | 0;
      }
     } while (0);
     if ((i46 | 0) == 0 | (i46 | 0) == (i30 | 0)) {
      break;
     } else {
      i34 = i46;
     }
    }
   }
   i47 = HEAP32[i22 >> 2] | 0;
   i45 = 65;
  } else {
   i47 = i27;
   i45 = 65;
  }
 } while (0);
 L90 : do {
  if ((i45 | 0) == 65) {
   do {
    if ((i47 | 0) == 1) {
     do {
      if ((i2 | 0) == 0) {
       i48 = i1 + 24 | 0;
       i45 = 71;
      } else {
       if (__ZNK7WebCore12EditingStyle13textDirectionER16WritingDirection(i2, i16) | 0) {
        HEAP8[i3] = 0;
        i44 = HEAP32[i16 >> 2] | 0;
        break L90;
       } else {
        i27 = i1 + 24 | 0;
        if ((HEAP32[i22 >> 2] | 0) == 2) {
         i49 = 1;
         i50 = i27;
         break;
        } else {
         i48 = i27;
         i45 = 71;
         break;
        }
       }
      }
     } while (0);
     if ((i45 | 0) == 71) {
      i49 = HEAP32[i1 + 48 >> 2] | 0;
      i50 = i48;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i50, i49);
     i27 = i17 | 0;
     i46 = HEAP32[i27 >> 2] | 0;
     if ((i46 | 0) == 0) {
      i51 = 0;
      break;
     }
     i43 = HEAP32[i46 + 8 >> 2] | 0;
     i14 = i46 + 8 | 0;
     i13 = i14 - 8 | 0;
     HEAP32[i14 >> 2] = i43;
     do {
      if ((i43 | 0) < 1) {
       if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i13);
      }
     } while (0);
     i13 = HEAP32[i27 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i51 = i46;
      break;
     }
     i14 = i13 + 8 | 0;
     i13 = i14 | 0;
     i43 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i43;
     if ((i43 | 0) >= 1) {
      i51 = i46;
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      i51 = i46;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
     i51 = i46;
    } else {
     i51 = i24;
    }
   } while (0);
   i14 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i51, 1) | 0;
   if ((i51 | 0) == (i14 | 0)) {
    i52 = 0;
   } else {
    i43 = i19 | 0;
    i13 = i20 | 0;
    i15 = i18 | 0;
    i11 = i21 | 0;
    i12 = 0;
    i10 = i51;
    while (1) {
     if ((HEAP32[i10 + 12 >> 2] & 8 | 0) == 0) {
      i53 = i12;
     } else {
      HEAP32[i43 >> 2] = i10;
      if ((i10 | 0) != 0) {
       i37 = i10 + 8 | 0;
       HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
      }
      __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i18, i19, 0, 0);
      i37 = HEAP32[i43 >> 2] | 0;
      do {
       if ((i37 | 0) != 0) {
        i7 = i37 + 8 | 0;
        i5 = i7 | 0;
        i28 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
        HEAP32[i5 >> 2] = i28;
        if ((i28 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
       }
      } while (0);
      __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i20, i18, 159, 1);
      i37 = HEAP32[i13 >> 2] | 0;
      HEAP32[i13 >> 2] = 0;
      do {
       if ((i37 | 0) == 0) {
        i54 = 7;
        i55 = i12;
       } else {
        i46 = HEAP32[i37 + 4 >> 2] | 0;
        L128 : do {
         if ((i46 & 516096 | 0) == 0) {
          do {
           if ((i46 & 508 | 0) == 472) {
            i27 = HEAP32[i37 + 8 >> 2] | 0;
            if ((i27 | 0) == 32) {
             i56 = 7;
             i57 = i12;
             break L128;
            } else if ((i27 | 0) != 321) {
             break;
            }
            i56 = 1;
            i57 = i12;
            break L128;
           }
          } while (0);
          __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i21, i18, 2, 1);
          i27 = HEAP32[i11 >> 2] | 0;
          HEAP32[i11 >> 2] = 0;
          if ((i27 | 0) == 0) {
           i56 = 7;
           i57 = i12;
           break;
          }
          do {
           if ((HEAP32[i27 + 4 >> 2] & 516604 | 0) == 472) {
            i7 = HEAP32[i27 + 8 >> 2] | 0;
            if ((i7 - 304 | 0) >>> 0 > 1 >>> 0) {
             i58 = 7;
             i59 = i12;
             break;
            }
            if ((i12 | 0) != 0) {
             i58 = 1;
             i59 = i12;
             break;
            }
            if ((HEAP32[i22 >> 2] | 0) == 2) {
             if (!(__ZNK7WebCore4Node14isDescendantOfEPKS0_(HEAP32[i26 >> 2] | 0, i10) | 0)) {
              i58 = 1;
              i59 = 0;
              break;
             }
            }
            i58 = 0;
            i59 = (i7 | 0) == 304 ? 1 : 2;
           } else {
            i58 = 7;
            i59 = i12;
           }
          } while (0);
          i7 = i27 | 0;
          i28 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
          if ((i28 | 0) == 0) {
           __ZN7WebCore8CSSValue7destroyEv(i27);
           i56 = i58;
           i57 = i59;
           break;
          } else {
           HEAP32[i7 >> 2] = i28;
           i56 = i58;
           i57 = i59;
           break;
          }
         } else {
          i56 = 7;
          i57 = i12;
         }
        } while (0);
        i46 = i37 | 0;
        i38 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        if ((i38 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i37);
         i54 = i56;
         i55 = i57;
         break;
        } else {
         HEAP32[i46 >> 2] = i38;
         i54 = i56;
         i55 = i57;
         break;
        }
       }
      } while (0);
      i37 = HEAP32[i15 >> 2] | 0;
      do {
       if ((i37 | 0) != 0) {
        i38 = i37 + 8 | 0;
        i46 = i38 | 0;
        i28 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
        HEAP32[i46 >> 2] = i28;
        if ((i28 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
       }
      } while (0);
      if ((i54 | 0) == 0 | (i54 | 0) == 7) {
       i53 = i55;
      } else {
       i44 = 0;
       break L90;
      }
     }
     i37 = HEAP32[i10 + 16 >> 2] | 0;
     if ((i37 | 0) == (i14 | 0)) {
      i52 = i53;
      break;
     } else {
      i12 = i53;
      i10 = i37;
     }
    }
   }
   HEAP8[i3] = 0;
   i44 = i52;
  }
 } while (0);
 i52 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i52 | 0) != 0) {
   i26 = i52 + 8 | 0;
   i3 = i26 | 0;
   i53 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i53;
   if ((i53 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
  }
 } while (0);
 i52 = HEAP32[i6 >> 2] | 0;
 if ((i52 | 0) == 0) {
  i23 = i44;
  STACKTOP = i4;
  return i23 | 0;
 }
 i6 = i52 + 8 | 0;
 i52 = i6 | 0;
 i26 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
 HEAP32[i52 >> 2] = i26;
 if ((i26 | 0) >= 1) {
  i23 = i44;
  STACKTOP = i4;
  return i23 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  i23 = i44;
  STACKTOP = i4;
  return i23 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 i23 = i44;
 STACKTOP = i4;
 return i23 | 0;
}
function __ZN7WebCore12EditingStyle16prepareToApplyAtERKNS_8PositionENS0_30ShouldPreserveWritingDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i1 + 4 | 0;
 if ((HEAP32[i24 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i1 >> 2] = 1;
 i25 = i1 + 4 | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 __ZN7WebCore12EditingStyle4initEPNS_4NodeENS0_19PropertiesToIncludeE(i1, HEAP32[i2 >> 2] | 0, 2);
 i26 = HEAP32[i25 >> 2] | 0;
 i25 = i26 | 0;
 if ((i3 | 0) == 0) {
  __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i21, HEAP32[i24 >> 2] | 0, 159);
  i3 = i21 | 0;
  i21 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i22, HEAP32[i24 >> 2] | 0, 2);
  i3 = i22 | 0;
  i22 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  i27 = i22;
  i28 = i21;
 } else {
  i27 = 0;
  i28 = 0;
 }
 __ZN7WebCore22MutableStyleProperties26removeEquivalentPropertiesEPKNS_15StylePropertiesE(HEAP32[i24 >> 2] | 0, i25);
 i21 = HEAP32[i24 >> 2] | 0;
 L7 : do {
  if ((i21 | 0) == 0) {
   HEAP32[i20 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
   i29 = 26;
  } else {
   i22 = i21 | 0;
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i20, i22, 132);
   i3 = i20 | 0;
   i30 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   if ((i30 | 0) == 0) {
    i31 = 0;
    i32 = i5;
   } else {
    if ((HEAP32[i30 + 4 >> 2] & 516604 | 0) == 472) {
     i33 = HEAP32[i30 + 8 >> 2] | 0;
    } else {
     i33 = 0;
    }
    i3 = i30 | 0;
    i34 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i34 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i30);
    } else {
     HEAP32[i3 >> 2] = i34;
    }
    i31 = i33;
    i32 = i5;
   }
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, i22, 2);
   i22 = i5 | 0;
   i34 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   do {
    if ((i34 | 0) == 0) {
     i35 = 0;
    } else {
     if ((HEAP32[i34 + 4 >> 2] & 516604 | 0) == 472) {
      i36 = HEAP32[i34 + 8 >> 2] | 0;
     } else {
      i36 = 0;
     }
     i22 = i34 | 0;
     i3 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     if ((i3 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i34);
      i35 = i36;
      break;
     } else {
      HEAP32[i22 >> 2] = i3;
      i35 = i36;
      break;
     }
    }
   } while (0);
   switch (i31 | 0) {
   case 155:
    {
     i37 = 155;
     break L7;
     break;
    }
   case 152:
   case 156:
    {
     i37 = 152;
     break L7;
     break;
    }
   case 153:
   case 157:
    {
     i37 = 153;
     break L7;
     break;
    }
   case 369:
    {
     i37 = (i35 | 0) != 305 ? 152 : 153;
     break L7;
     break;
    }
   case 370:
    {
     i37 = (i35 | 0) == 305 ? 153 : 152;
     break L7;
     break;
    }
   case 154:
   case 158:
    {
     i37 = 154;
     break L7;
     break;
    }
   default:
    {
     i29 = 26;
     break L7;
    }
   }
  }
 } while (0);
 if ((i29 | 0) == 26) {
  i37 = 0;
 }
 i35 = (i26 | 0) == 0;
 L39 : do {
  if (i35) {
   HEAP32[i19 >> 2] = 0;
   HEAP32[i18 >> 2] = 0;
   i29 = 49;
  } else {
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i19, i25, 132);
   i26 = i19 | 0;
   i31 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   if ((i31 | 0) == 0) {
    i38 = 0;
    i39 = i18;
   } else {
    if ((HEAP32[i31 + 4 >> 2] & 516604 | 0) == 472) {
     i40 = HEAP32[i31 + 8 >> 2] | 0;
    } else {
     i40 = 0;
    }
    i26 = i31 | 0;
    i36 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
    if ((i36 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i31);
    } else {
     HEAP32[i26 >> 2] = i36;
    }
    i38 = i40;
    i39 = i18;
   }
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i18, i25, 2);
   i36 = i18 | 0;
   i26 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = 0;
   do {
    if ((i26 | 0) == 0) {
     i41 = 0;
    } else {
     if ((HEAP32[i26 + 4 >> 2] & 516604 | 0) == 472) {
      i42 = HEAP32[i26 + 8 >> 2] | 0;
     } else {
      i42 = 0;
     }
     i36 = i26 | 0;
     i31 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i26);
      i41 = i42;
      break;
     } else {
      HEAP32[i36 >> 2] = i31;
      i41 = i42;
      break;
     }
    }
   } while (0);
   switch (i38 | 0) {
   case 155:
    {
     i43 = 155;
     break L39;
     break;
    }
   case 152:
   case 156:
    {
     i43 = 152;
     break L39;
     break;
    }
   case 154:
   case 158:
    {
     i43 = 154;
     break L39;
     break;
    }
   case 153:
   case 157:
    {
     i43 = 153;
     break L39;
     break;
    }
   case 369:
    {
     i43 = (i41 | 0) != 305 ? 152 : 153;
     break L39;
     break;
    }
   case 370:
    {
     i43 = (i41 | 0) == 305 ? 153 : 152;
     break L39;
     break;
    }
   default:
    {
     i29 = 49;
     break L39;
    }
   }
  }
 } while (0);
 if ((i29 | 0) == 49) {
  i43 = 0;
 }
 if ((i37 | 0) == (i43 | 0)) {
  __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i24 >> 2] | 0, 132, 0) | 0;
 }
 i43 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i43 | 0) == 0) {
   HEAP32[i17 >> 2] = 0;
   i44 = i15;
   i45 = i16;
   i29 = 63;
  } else {
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i17, i43 | 0, 1);
   i37 = i17 | 0;
   i41 = HEAP32[i37 >> 2] | 0;
   if ((i41 | 0) == 0) {
    i44 = i15;
    i45 = i16;
    i29 = 63;
    break;
   }
   i38 = HEAP32[i41 + 4 >> 2] | 0;
   if ((i38 & 516096 | 0) == 0) {
    if ((i38 & 508 | 0) == 100) {
     i46 = i41 + 8 | 0;
     i47 = i41;
    } else {
     HEAP32[i15 >> 2] = 0;
     __ZNK7WebCore8CSSValue7cssTextEv(i16, i41);
     __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i15, i16, 0) | 0;
     i38 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i38 | 0) != 0) {
       i42 = i38 | 0;
       i18 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i38);
        break;
       } else {
        HEAP32[i42 >> 2] = i18;
        break;
       }
      }
     } while (0);
     i46 = i15;
     i47 = HEAP32[i37 >> 2] | 0;
    }
    i38 = HEAP32[i46 >> 2] | 0;
    if ((i47 | 0) == 0) {
     i48 = i38;
     break;
    } else {
     i49 = i47;
     i50 = i38;
    }
   } else {
    i49 = i41;
    i50 = 0;
   }
   i38 = i49 | 0;
   i18 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i49);
    i48 = i50;
    break;
   } else {
    HEAP32[i38 >> 2] = i18;
    i48 = i50;
    break;
   }
  }
 } while (0);
 if ((i29 | 0) == 63) {
  i48 = 0;
 }
 do {
  if (i35) {
   HEAP32[i14 >> 2] = 0;
   i51 = i12;
   i52 = i13;
   i29 = 79;
  } else {
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i14, i25, 1);
   i50 = i14 | 0;
   i49 = HEAP32[i50 >> 2] | 0;
   if ((i49 | 0) == 0) {
    i51 = i12;
    i52 = i13;
    i29 = 79;
    break;
   }
   i47 = HEAP32[i49 + 4 >> 2] | 0;
   if ((i47 & 516096 | 0) == 0) {
    if ((i47 & 508 | 0) == 100) {
     i53 = i49 + 8 | 0;
     i54 = i49;
    } else {
     HEAP32[i12 >> 2] = 0;
     __ZNK7WebCore8CSSValue7cssTextEv(i13, i49);
     __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i12, i13, 0) | 0;
     i47 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i46 = i47 | 0;
       i15 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i47);
        break;
       } else {
        HEAP32[i46 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i53 = i12;
     i54 = HEAP32[i50 >> 2] | 0;
    }
    i47 = HEAP32[i53 >> 2] | 0;
    if ((i54 | 0) == 0) {
     i55 = i47;
     break;
    } else {
     i56 = i54;
     i57 = i47;
    }
   } else {
    i56 = i49;
    i57 = 0;
   }
   i47 = i56 | 0;
   i41 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
   if ((i41 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i56);
    i55 = i57;
    break;
   } else {
    HEAP32[i47 >> 2] = i41;
    i55 = i57;
    break;
   }
  }
 } while (0);
 if ((i29 | 0) == 79) {
  i55 = 0;
 }
 if ((i48 | 0) == (i55 | 0)) {
  __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i24 >> 2] | 0, 1, 0) | 0;
 }
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i11, HEAP32[i24 >> 2] | 0, 23);
 i55 = i11 | 0;
 i11 = HEAP32[i55 >> 2] | 0;
 HEAP32[i55 >> 2] = 0;
 do {
  if ((i11 | 0) == 0) {
   i29 = 120;
  } else {
   i55 = HEAP32[i11 + 4 >> 2] | 0;
   do {
    if ((i55 & 516096 | 0) == 0) {
     i48 = i55 & 508;
     if ((i48 | 0) == 100) {
      i58 = (HEAP32[i11 + 8 >> 2] | 0) >>> 0 < 16777216 >>> 0;
      break;
     } else if ((i48 | 0) == 472) {
      i58 = (HEAP32[i11 + 8 >> 2] | 0) == 90;
      break;
     } else {
      i58 = 0;
      break;
     }
    } else {
     i58 = 0;
    }
   } while (0);
   i55 = i11 | 0;
   i49 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
   if ((i49 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i11);
    if (i58) {
     i29 = 120;
     break;
    }
   } else {
    HEAP32[i55 >> 2] = i49;
    if (i58) {
     i29 = 120;
     break;
    }
   }
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i23, HEAP32[i24 >> 2] | 0, 23);
   i49 = i23 | 0;
   i55 = HEAP32[i49 >> 2] | 0;
   do {
    if ((i55 | 0) == 0) {
     i59 = 0;
    } else {
     i50 = HEAP32[i55 + 4 >> 2] | 0;
     if ((i50 & 516096 | 0) != 0) {
      i59 = 0;
      break;
     }
     if ((i50 & 508 | 0) == 100) {
      i59 = HEAP32[i55 + 8 >> 2] | 0;
      break;
     }
     HEAP32[i9 >> 2] = 0;
     __ZNK7WebCore8CSSValue7cssTextEv(i10, i55);
     __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i9, i10, 0) | 0;
     i50 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i50 | 0) != 0) {
       i48 = i50 | 0;
       i57 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
       if ((i57 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i50);
        break;
       } else {
        HEAP32[i48 >> 2] = i57;
        break;
       }
      }
     } while (0);
     i59 = HEAP32[i9 >> 2] | 0;
    }
   } while (0);
   i55 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
   __ZN7WebCoreL23backgroundColorInEffectEPNS_4NodeE(i8, i55);
   i55 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i55 | 0) == 0) {
     i60 = 0;
    } else {
     i50 = HEAP32[i55 + 4 >> 2] | 0;
     if ((i50 & 516096 | 0) == 0) {
      do {
       if ((i50 & 508 | 0) == 100) {
        i61 = i55 + 8 | 0;
       } else {
        HEAP32[i6 >> 2] = 0;
        __ZNK7WebCore8CSSValue7cssTextEv(i7, i55);
        __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i6, i7, 0) | 0;
        i57 = HEAP32[i7 >> 2] | 0;
        if ((i57 | 0) == 0) {
         i61 = i6;
         break;
        }
        i48 = i57 | 0;
        i56 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
        if ((i56 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i57);
         i61 = i6;
         break;
        } else {
         HEAP32[i48 >> 2] = i56;
         i61 = i6;
         break;
        }
       }
      } while (0);
      i62 = HEAP32[i61 >> 2] | 0;
     } else {
      i62 = 0;
     }
     i50 = i55 | 0;
     i56 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     if ((i56 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i55);
      i60 = i62;
      break;
     } else {
      HEAP32[i50 >> 2] = i56;
      i60 = i62;
      break;
     }
    }
   } while (0);
   i55 = (i59 | 0) == (i60 | 0);
   i56 = HEAP32[i49 >> 2] | 0;
   if ((i56 | 0) == 0) {
    if (i55) {
     i29 = 120;
     break;
    } else {
     break;
    }
   }
   i50 = i56 | 0;
   i48 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
   if ((i48 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i56);
    if (i55) {
     i29 = 120;
     break;
    } else {
     break;
    }
   } else {
    HEAP32[i50 >> 2] = i48;
    if (i55) {
     i29 = 120;
     break;
    } else {
     break;
    }
   }
  }
 } while (0);
 if ((i29 | 0) == 120) {
  __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i24 >> 2] | 0, 23, 0) | 0;
 }
 i60 = (i28 | 0) == 0;
 do {
  if (i60) {
   i29 = 130;
  } else {
   i59 = HEAP32[i28 + 4 >> 2] | 0;
   if ((i59 & 516096 | 0) != 0) {
    i29 = 130;
    break;
   }
   if ((i59 & 508 | 0) == 472) {
    i63 = HEAP32[i28 + 8 >> 2] | 0;
   } else {
    i63 = 0;
   }
   __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(HEAP32[i24 >> 2] | 0, 159, i63, 0) | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   i59 = HEAP32[i27 + 4 >> 2] | 0;
   if ((i59 & 516096 | 0) != 0) {
    i29 = 131;
    break;
   }
   if ((i59 & 508 | 0) == 472) {
    i64 = HEAP32[i27 + 8 >> 2] | 0;
   } else {
    i64 = 0;
   }
   __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(HEAP32[i24 >> 2] | 0, 2, i64, 0) | 0;
   i29 = 130;
  }
 } while (0);
 if ((i29 | 0) == 130) {
  if ((i27 | 0) != 0) {
   i29 = 131;
  }
 }
 do {
  if ((i29 | 0) == 131) {
   i64 = i27 | 0;
   i24 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i27);
    break;
   } else {
    HEAP32[i64 >> 2] = i24;
    break;
   }
  }
 } while (0);
 do {
  if (!i60) {
   i27 = i28 | 0;
   i29 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i28);
    break;
   } else {
    HEAP32[i27 >> 2] = i29;
    break;
   }
  }
 } while (0);
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore12EditingStyleEE5derefEv(i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11StyleChange17extractTextStylesEPNS_8DocumentEPNS_22MutableStylePropertiesEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, d42 = +0, i43 = 0, i44 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = (i3 | 0) == 0;
 do {
  if (i24) {
   HEAP32[i12 >> 2] = 0;
   i25 = 13;
  } else {
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i12, i3 | 0, 9);
   i26 = i12 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   if ((i27 | 0) == 0) {
    i28 = i11;
   } else {
    if ((HEAP32[i27 + 4 >> 2] & 516604 | 0) == 472) {
     i29 = HEAP32[i27 + 8 >> 2] | 0;
    } else {
     i29 = 0;
    }
    i26 = i27 | 0;
    i30 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
    if ((i30 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i27);
    } else {
     HEAP32[i26 >> 2] = i30;
    }
    if ((i29 | 0) == 33) {
     __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i3, 9, 0) | 0;
     HEAP8[i1 + 4 | 0] = 1;
    }
    if (i24) {
     i25 = 13;
     break;
    } else {
     i28 = i11;
    }
   }
   i30 = i3 | 0;
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i11, i30, 7);
   i26 = i11 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   if ((i27 | 0) == 0) {
    i31 = i30;
    break;
   }
   if ((HEAP32[i27 + 4 >> 2] & 516604 | 0) == 472) {
    i32 = (HEAP32[i27 + 8 >> 2] | 0) - 22 | 0;
   } else {
    i32 = -22;
   }
   i26 = i27 | 0;
   i33 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   if ((i33 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i27);
   } else {
    HEAP32[i26 >> 2] = i33;
   }
   if (i32 >>> 0 >= 2 >>> 0) {
    i31 = i30;
    break;
   }
   __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i3, 7, 0) | 0;
   HEAP8[i1 + 5 | 0] = 1;
   i31 = i30;
  }
 } while (0);
 if ((i25 | 0) == 13) {
  HEAP32[i11 >> 2] = 0;
  i31 = i3 | 0;
 }
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i14, i31, 133);
 i11 = i14 | 0;
 i14 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = (i14 | 0) == 0;
 do {
  if (!i11) {
   if ((HEAP32[i14 + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
    break;
   }
   __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i15, __ZN7WebCore12cssValuePoolEv() | 0, 364);
   i32 = HEAP32[i15 >> 2] | 0;
   __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i16, __ZN7WebCore12cssValuePoolEv() | 0, 341);
   i28 = HEAP32[i16 >> 2] | 0;
   __ZN7WebCore12CSSValueList4copyEv(i17, i14);
   i29 = i17 | 0;
   i12 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = 0;
   i29 = i32 | 0;
   if (__ZN7WebCore12CSSValueList9removeAllEPNS_8CSSValueE(i12, i29) | 0) {
    HEAP8[i1 + 6 | 0] = 1;
   }
   i30 = i28 | 0;
   if (__ZN7WebCore12CSSValueList9removeAllEPNS_8CSSValueE(i12, i30) | 0) {
    HEAP8[i1 + 7 | 0] = 1;
   }
   do {
    if ((HEAP32[i12 + 16 >> 2] | 0) == 0) {
     __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i3, 133, 0) | 0;
    } else {
     __ZNK7WebCore8CSSValue7cssTextEv(i10, i12 | 0);
     __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i3, 133, i10, __ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(i31, 133) | 0, 0) | 0;
     i33 = HEAP32[i10 >> 2] | 0;
     if ((i33 | 0) == 0) {
      break;
     }
     i26 = i33 | 0;
     i27 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      break;
     } else {
      HEAP32[i26 >> 2] = i27;
      break;
     }
    }
   } while (0);
   do {
    if ((i12 | 0) != 0) {
     i27 = i12 | 0;
     i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i12 | 0);
      break;
     } else {
      HEAP32[i27 >> 2] = i26;
      break;
     }
    }
   } while (0);
   do {
    if ((i28 | 0) != 0) {
     i12 = i28 | 0;
     i26 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i30);
      break;
     } else {
      HEAP32[i12 >> 2] = i26;
      break;
     }
    }
   } while (0);
   if ((i32 | 0) == 0) {
    break;
   }
   i30 = i32 | 0;
   i28 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i29);
    break;
   } else {
    HEAP32[i30 >> 2] = i28;
    break;
   }
  }
 } while (0);
 do {
  if (i24) {
   HEAP32[i9 >> 2] = 0;
  } else {
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i9, i31, 161);
   i10 = i9 | 0;
   i17 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   if ((i17 | 0) == 0) {
    break;
   }
   if ((HEAP32[i17 + 4 >> 2] & 516604 | 0) == 472) {
    i34 = HEAP32[i17 + 8 >> 2] | 0;
   } else {
    i34 = 0;
   }
   i10 = i17 | 0;
   i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i17);
   } else {
    HEAP32[i10 >> 2] = i16;
   }
   if ((i34 | 0) == 144) {
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i3, 161, 0) | 0;
    HEAP8[i1 + 8 | 0] = 1;
    break;
   } else if ((i34 | 0) == 145) {
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i3, 161, 0) | 0;
    HEAP8[i1 + 9 | 0] = 1;
    break;
   } else {
    break;
   }
  }
 } while (0);
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i18, i31, 1);
 i34 = HEAP32[i18 >> 2] | 0;
 if ((i34 | 0) != 0) {
  i18 = i34 | 0;
  i9 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore8CSSValue7destroyEv(i34);
  } else {
   HEAP32[i18 >> 2] = i9;
  }
  do {
   if (i24) {
    HEAP32[i8 >> 2] = 0;
    i35 = i6;
    i36 = i7;
    i25 = 72;
   } else {
    __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i8, i31, 1);
    i9 = i8 | 0;
    i18 = HEAP32[i9 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i35 = i6;
     i36 = i7;
     i25 = 72;
     break;
    }
    i34 = HEAP32[i18 + 4 >> 2] | 0;
    if ((i34 & 516096 | 0) == 0) {
     if ((i34 & 508 | 0) == 100) {
      i37 = i18 + 8 | 0;
      i38 = i18;
     } else {
      HEAP32[i6 >> 2] = 0;
      __ZNK7WebCore8CSSValue7cssTextEv(i7, i18);
      __ZN7WebCore9CSSParser10parseColorERjRKN3WTF6StringEb(i6, i7, 0) | 0;
      i34 = HEAP32[i7 >> 2] | 0;
      do {
       if ((i34 | 0) != 0) {
        i16 = i34 | 0;
        i10 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
        if ((i10 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i34);
         break;
        } else {
         HEAP32[i16 >> 2] = i10;
         break;
        }
       }
      } while (0);
      i37 = i6;
      i38 = HEAP32[i9 >> 2] | 0;
     }
     i34 = HEAP32[i37 >> 2] | 0;
     if ((i38 | 0) == 0) {
      i39 = i34;
      break;
     } else {
      i40 = i38;
      i41 = i34;
     }
    } else {
     i40 = i18;
     i41 = 0;
    }
    i34 = i40 | 0;
    i29 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
    if ((i29 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i40);
     i39 = i41;
     break;
    } else {
     HEAP32[i34 >> 2] = i29;
     i39 = i41;
     break;
    }
   }
  } while (0);
  if ((i25 | 0) == 72) {
   i39 = 0;
  }
  HEAP32[i20 >> 2] = i39;
  HEAP8[i20 + 4 | 0] = 1;
  __ZNK7WebCore5Color10serializedEv(i19, i20);
  i20 = i19 | 0;
  i19 = HEAP32[i20 >> 2] | 0;
  HEAP32[i20 >> 2] = 0;
  i39 = i1 + 12 | 0;
  i25 = HEAP32[i39 >> 2] | 0;
  HEAP32[i39 >> 2] = i19;
  do {
   if ((i25 | 0) != 0) {
    i19 = i25 | 0;
    i39 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i39 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     break;
    } else {
     HEAP32[i19 >> 2] = i39;
     break;
    }
   }
  } while (0);
  i25 = HEAP32[i20 >> 2] | 0;
  do {
   if ((i25 | 0) != 0) {
    i20 = i25 | 0;
    i39 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
    if ((i39 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     break;
    } else {
     HEAP32[i20 >> 2] = i39;
     break;
    }
   }
  } while (0);
  __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i3, 1, 0) | 0;
 }
 __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i21, i31, 5);
 i25 = i21 | 0;
 i21 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i39 = i1 + 16 | 0;
 i20 = HEAP32[i39 >> 2] | 0;
 HEAP32[i39 >> 2] = i21;
 do {
  if ((i20 | 0) != 0) {
   i21 = i20 | 0;
   i19 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i21 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i25 = i20 | 0;
   i19 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i25 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i39 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   __ZN3WTF10StringImpl7replaceEtPKhj(i13, i20, 39, H_BASE + 360 | 0, 0);
   i19 = HEAP32[i39 >> 2] | 0;
   HEAP32[i39 >> 2] = HEAP32[i13 >> 2];
   if ((i19 | 0) == 0) {
    break;
   }
   i25 = i19 | 0;
   i21 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i25 >> 2] = i21;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i3, 5, 0) | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i22, i31, 6);
 i31 = i22 | 0;
 i22 = HEAP32[i31 >> 2] | 0;
 HEAP32[i31 >> 2] = 0;
 do {
  if ((i22 | 0) != 0) {
   i31 = HEAP32[i22 + 4 >> 2] | 0;
   do {
    if ((i31 & 516096 | 0) == 0) {
     if (((i31 >>> 2 & 127) - 5 | 0) >>> 0 < 6 >>> 0) {
      d42 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i22, 5);
      do {
       if (d42 < +2147483647) {
        if (d42 <= +-2147483648) {
         i43 = -2147483648;
         break;
        }
        i43 = ~~d42;
       } else {
        i43 = 2147483647;
       }
      } while (0);
      i13 = __ZN7WebCore5Style26legacyFontSizeForPixelSizeEibRKNS_8DocumentE(i43, i4, i2) | 0;
      if (+__ZN7WebCore5Style18fontSizeForKeywordEjbRKNS_8DocumentE(i13 + 45 | 0, i4, i2) == +(i43 | 0)) {
       i44 = i13;
      } else {
       break;
      }
     } else {
      if ((i31 & 508 | 0) != 472) {
       break;
      }
      i13 = HEAP32[i22 + 8 >> 2] | 0;
      i44 = (i13 - 46 | 0) >>> 0 < 7 >>> 0 ? i13 - 45 | 0 : 0;
     }
     if ((i44 | 0) == 0) {
      break;
     }
     __ZN3WTF6String6numberEi(i23, i44);
     i13 = i23 | 0;
     i39 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     i20 = i1 + 20 | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = i39;
     do {
      if ((i21 | 0) != 0) {
       i39 = i21 | 0;
       i20 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
       if ((i20 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i21);
        break;
       } else {
        HEAP32[i39 >> 2] = i20;
        break;
       }
      }
     } while (0);
     i21 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i20 = i21 | 0;
       i39 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
       if ((i39 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i21);
        break;
       } else {
        HEAP32[i20 >> 2] = i39;
        break;
       }
      }
     } while (0);
     __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i3, 6, 0) | 0;
    } else {
     __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i3, 6, 0) | 0;
    }
   } while (0);
   i31 = i22 | 0;
   i18 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i22);
    break;
   } else {
    HEAP32[i31 >> 2] = i18;
    break;
   }
  }
 } while (0);
 if (i11) {
  STACKTOP = i5;
  return;
 }
 i11 = i14 | 0;
 i22 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i22 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i14);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i11 >> 2] = i22;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore12EditingStyle10mergeStyleEPKNS_15StylePropertiesENS0_23CSSPropertyOverrideModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i1 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  __ZNK7WebCore15StyleProperties11mutableCopyEv(i7, i2);
  i12 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
  if ((i12 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i7 = i12 | 0;
  i13 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i13 | 0) != 0) {
   HEAP32[i7 >> 2] = i13;
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i12 + 4 >> 2] & 4 | 0) == 0) {
   __ZN7WebCore24ImmutableStylePropertiesD1Ev(i12);
   __ZN3WTF8fastFreeEPv(i12);
   STACKTOP = i4;
   return;
  } else {
   __ZN7WebCore22MutableStylePropertiesD1Ev(i12);
   __ZN3WTF8fastFreeEPv(i12);
   STACKTOP = i4;
   return;
  }
 }
 i12 = i2 + 4 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 & 4 | 0) == 0) {
  i14 = i13 >>> 3;
 } else {
  i14 = HEAP32[i2 + 16 >> 2] | 0;
 }
 L23 : do {
  if ((i14 | 0) != 0) {
   i7 = i2 + 8 | 0;
   i15 = i7;
   i16 = i8 | 0;
   i17 = i7;
   i18 = i5 | 0;
   i19 = i6 | 0;
   i20 = i2 + 16 | 0;
   i21 = i7;
   i7 = i9 | 0;
   i22 = 0;
   i23 = i11;
   i24 = i13;
   L25 : while (1) {
    i25 = i23 | 0;
    if ((i24 & 4 | 0) == 0) {
     i26 = i15 + (i24 >>> 3 << 2) + (i22 << 1) | 0;
    } else {
     if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i22 >>> 0) {
      i27 = 16;
      break;
     }
     i26 = (HEAP32[i21 >> 2] | 0) + (i22 << 3) | 0;
    }
    __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i8, i25, HEAP16[i26 >> 1] & 1023);
    i25 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = 0;
    i28 = HEAP32[i12 >> 2] | 0;
    i29 = (i28 & 4 | 0) == 0;
    if (i29) {
     i30 = i15 + (i28 >>> 3 << 2) + (i22 << 1) | 0;
    } else {
     if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i22 >>> 0) {
      i27 = 21;
      break;
     }
     i30 = (HEAP32[i21 >> 2] | 0) + (i22 << 3) | 0;
    }
    if ((HEAP16[i30 >> 1] & 1023) == 133) {
     i27 = 31;
    } else {
     if (i29) {
      i31 = i15 + (i28 >>> 3 << 2) + (i22 << 1) | 0;
     } else {
      if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i22 >>> 0) {
       i27 = 27;
       break;
      }
      i31 = (HEAP32[i21 >> 2] | 0) + (i22 << 3) | 0;
     }
     if ((HEAP16[i31 >> 1] & 1023) == 335) {
      i27 = 31;
     } else {
      i32 = i25;
      i27 = 71;
     }
    }
    do {
     if ((i27 | 0) == 31) {
      i27 = 0;
      if (i29) {
       i33 = i17 + (i22 << 2) | 0;
      } else {
       if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i22 >>> 0) {
        i27 = 33;
        break L25;
       }
       i33 = (HEAP32[i21 >> 2] | 0) + (i22 << 3) + 4 | 0;
      }
      if ((HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
       i32 = i25;
       i27 = 71;
       break;
      }
      if ((i25 | 0) == 0) {
       i32 = 0;
       i27 = 71;
       break;
      }
      if ((HEAP32[i25 + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
       i28 = i25 | 0;
       i34 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       if ((i34 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i25);
        i32 = 0;
        i27 = 71;
        break;
       } else {
        HEAP32[i28 >> 2] = i34;
        i32 = 0;
        i27 = 71;
        break;
       }
      }
      i34 = i25;
      if (i29) {
       i35 = i17 + (i22 << 2) | 0;
      } else {
       if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i22 >>> 0) {
        i27 = 41;
        break L25;
       }
       i35 = (HEAP32[i21 >> 2] | 0) + (i22 << 3) + 4 | 0;
      }
      i28 = HEAP32[i35 >> 2] | 0;
      __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i5, __ZN7WebCore12cssValuePoolEv() | 0, 364);
      i36 = HEAP32[i18 >> 2] | 0;
      __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i6, __ZN7WebCore12cssValuePoolEv() | 0, 341);
      i37 = HEAP32[i19 >> 2] | 0;
      i38 = i36 | 0;
      do {
       if (__ZNK7WebCore12CSSValueList8hasValueEPNS_8CSSValueE(i28, i38) | 0) {
        if (__ZNK7WebCore12CSSValueList8hasValueEPNS_8CSSValueE(i34, i38) | 0) {
         break;
        }
        if ((i36 | 0) != 0) {
         i39 = i36 | 0;
         HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
        }
        i39 = i25 + 8 | 0;
        i40 = i25 + 16 | 0;
        i41 = HEAP32[i40 >> 2] | 0;
        if ((i41 | 0) == (HEAP32[i25 + 12 >> 2] | 0)) {
         i42 = i41 + 1 | 0;
         i43 = i42 + (i41 >>> 2) | 0;
         i44 = i43 >>> 0 > 16 >>> 0 ? i43 : 16;
         __ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i39, i44 >>> 0 > i42 >>> 0 ? i44 : i42);
         HEAP32[(HEAP32[i39 >> 2] | 0) + (HEAP32[i40 >> 2] << 2) >> 2] = i38;
        } else {
         HEAP32[(HEAP32[i39 >> 2] | 0) + (i41 << 2) >> 2] = i38;
        }
        HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
       }
      } while (0);
      i40 = i37 | 0;
      do {
       if (__ZNK7WebCore12CSSValueList8hasValueEPNS_8CSSValueE(i28, i40) | 0) {
        if (__ZNK7WebCore12CSSValueList8hasValueEPNS_8CSSValueE(i34, i40) | 0) {
         break;
        }
        if ((i37 | 0) != 0) {
         i41 = i37 | 0;
         HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
        }
        i41 = i25 + 8 | 0;
        i39 = i25 + 16 | 0;
        i42 = HEAP32[i39 >> 2] | 0;
        if ((i42 | 0) == (HEAP32[i25 + 12 >> 2] | 0)) {
         i44 = i42 + 1 | 0;
         i43 = i44 + (i42 >>> 2) | 0;
         i45 = i43 >>> 0 > 16 >>> 0 ? i43 : 16;
         __ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i41, i45 >>> 0 > i44 >>> 0 ? i45 : i44);
         HEAP32[(HEAP32[i41 >> 2] | 0) + (HEAP32[i39 >> 2] << 2) >> 2] = i40;
        } else {
         HEAP32[(HEAP32[i41 >> 2] | 0) + (i42 << 2) >> 2] = i40;
        }
        HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
       }
      } while (0);
      do {
       if ((i37 | 0) != 0) {
        i34 = i37 | 0;
        i28 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
        if ((i28 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i40);
         break;
        } else {
         HEAP32[i34 >> 2] = i28;
         break;
        }
       }
      } while (0);
      if ((i36 | 0) == 0) {
       i46 = i25;
       i27 = 89;
       break;
      }
      i40 = i36 | 0;
      i37 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
      if ((i37 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i38);
       i46 = i25;
       i27 = 89;
       break;
      } else {
       HEAP32[i40 >> 2] = i37;
       i46 = i25;
       i27 = 89;
       break;
      }
     }
    } while (0);
    do {
     if ((i27 | 0) == 71) {
      i27 = 0;
      if ((i3 | 0) == 1) {
       if ((i32 | 0) != 0) {
        i47 = i32;
        i27 = 90;
        break;
       }
      } else if ((i3 | 0) != 0) {
       i46 = i32;
       i27 = 89;
       break;
      }
      i25 = HEAP32[i10 >> 2] | 0;
      i29 = HEAP32[i12 >> 2] | 0;
      if ((i29 & 4 | 0) == 0) {
       i48 = i17 + (i22 << 2) | 0;
       i49 = i15 + (i29 >>> 3 << 2) + (i22 << 1) | 0;
      } else {
       if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i22 >>> 0) {
        i27 = 75;
        break L25;
       }
       if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i22 >>> 0) {
        i27 = 77;
        break L25;
       }
       i29 = HEAP32[i21 >> 2] | 0;
       i48 = i29 + (i22 << 3) + 4 | 0;
       i49 = i29 + (i22 << 3) | 0;
      }
      i29 = HEAP16[i49 >> 1] & 1023;
      __ZNK7WebCore8CSSValue7cssTextEv(i9, HEAP32[i48 >> 2] | 0);
      i37 = HEAP32[i12 >> 2] | 0;
      if ((i37 & 4 | 0) == 0) {
       i50 = i15 + (i37 >>> 3 << 2) + (i22 << 1) | 0;
      } else {
       if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i22 >>> 0) {
        i27 = 82;
        break L25;
       }
       i50 = (HEAP32[i21 >> 2] | 0) + (i22 << 3) | 0;
      }
      __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i25, i29, i9, (HEAP16[i50 >> 1] & 8192) != 0, 0) | 0;
      i29 = HEAP32[i7 >> 2] | 0;
      if ((i29 | 0) == 0) {
       i46 = i32;
       i27 = 89;
       break;
      }
      i25 = i29 | 0;
      i37 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
      if ((i37 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i29);
       i46 = i32;
       i27 = 89;
       break;
      } else {
       HEAP32[i25 >> 2] = i37;
       i46 = i32;
       i27 = 89;
       break;
      }
     }
    } while (0);
    if ((i27 | 0) == 89) {
     i27 = 0;
     if ((i46 | 0) != 0) {
      i47 = i46;
      i27 = 90;
     }
    }
    do {
     if ((i27 | 0) == 90) {
      i27 = 0;
      i37 = i47 | 0;
      i25 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
      if ((i25 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i47);
       break;
      } else {
       HEAP32[i37 >> 2] = i25;
       break;
      }
     }
    } while (0);
    i25 = i22 + 1 | 0;
    if (i25 >>> 0 >= i14 >>> 0) {
     break L23;
    }
    i22 = i25;
    i23 = HEAP32[i10 >> 2] | 0;
    i24 = HEAP32[i12 >> 2] | 0;
   }
   if ((i27 | 0) == 33) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 41) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 27) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 21) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 16) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 75) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 77) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i27 | 0) == 82) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i27 = i1 + 12 | 0;
 i12 = ~~+HEAPF32[i27 >> 2];
 __ZN7WebCore12EditingStyle20extractFontSizeDeltaEv(i1);
 HEAPF32[i27 >> 2] = +HEAPF32[i27 >> 2] + +(i12 | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore12EditingStyle33conflictsWithInlineStyleOfElementEPNS_13StyledElementEPS0_PN3WTF6VectorINS_13CSSPropertyIDELj0ENS4_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i16 = 0;
  STACKTOP = i5;
  return i16 | 0;
 }
 i17 = HEAP32[i15 + 8 >> 2] | 0;
 i15 = i1 + 4 | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 if ((i1 | 0) == 0 | (i17 | 0) == 0) {
  i16 = 0;
  STACKTOP = i5;
  return i16 | 0;
 }
 i18 = HEAP32[i1 + 16 >> 2] | 0;
 L7 : do {
  if ((i18 | 0) != 0) {
   i19 = i2 | 0;
   i20 = i7 | 0;
   i21 = (i4 | 0) == 0;
   i22 = i4 + 8 | 0;
   i23 = i4 + 4 | 0;
   i24 = i4 | 0;
   i25 = i8;
   i26 = (i3 | 0) == 0;
   i27 = i9 | 0;
   i28 = i10 | 0;
   i29 = i11 | 0;
   i30 = i12;
   i31 = i13 | 0;
   i32 = i6;
   i33 = i14 | 0;
   i34 = 0;
   i35 = i1;
   L9 : while (1) {
    i36 = i35 | 0;
    i37 = HEAP32[i35 + 4 >> 2] | 0;
    if ((i37 & 4 | 0) == 0) {
     i38 = i36 + 8 + (i37 >>> 3 << 2) + (i34 << 1) | 0;
    } else {
     if ((HEAP32[i36 + 16 >> 2] | 0) >>> 0 <= i34 >>> 0) {
      i39 = 7;
      break;
     }
     i38 = (HEAP32[i36 + 8 >> 2] | 0) + (i34 << 3) | 0;
    }
    i36 = HEAP16[i38 >> 1] & 1023;
    i37 = i36 & 65535;
    HEAP32[i6 >> 2] = i37;
    do {
     if (i36 << 16 >> 16 == 163) {
      if (__ZN7WebCore13isTabSpanNodeEPKNS_4NodeE(i19) | 0) {
       break;
      }
      i40 = HEAP32[i6 >> 2] | 0;
      i39 = 13;
     } else {
      i40 = i37;
      i39 = 13;
     }
    } while (0);
    L19 : do {
     if ((i39 | 0) == 13) {
      i39 = 0;
      do {
       if ((i40 | 0) == 335) {
        __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i7, i17, 133);
        i37 = HEAP32[i20 >> 2] | 0;
        if ((i37 | 0) == 0) {
         break;
        }
        i36 = i37 | 0;
        i41 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
        if ((i41 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i37);
        } else {
         HEAP32[i36 >> 2] = i41;
        }
        if (i21) {
         i16 = 1;
         i39 = 75;
         break L9;
        }
        HEAP32[i8 >> 2] = 133;
        i41 = HEAP32[i22 >> 2] | 0;
        if ((i41 | 0) == (HEAP32[i23 >> 2] | 0)) {
         i36 = i41 + 1 | 0;
         i37 = HEAP32[i24 >> 2] | 0;
         do {
          if (i37 >>> 0 > i8 >>> 0) {
           i39 = 23;
          } else {
           if ((i37 + (i41 << 2) | 0) >>> 0 <= i8 >>> 0) {
            i39 = 23;
            break;
           }
           __ZN3WTF6VectorIN7WebCore13CSSPropertyIDELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i36);
           i42 = HEAP32[i24 >> 2] | 0;
           i43 = i42 + (i25 - i37 >> 2 << 2) | 0;
           i44 = i42;
          }
         } while (0);
         if ((i39 | 0) == 23) {
          i39 = 0;
          __ZN3WTF6VectorIN7WebCore13CSSPropertyIDELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i36);
          i43 = i8;
          i44 = HEAP32[i24 >> 2] | 0;
         }
         HEAP32[i44 + (HEAP32[i22 >> 2] << 2) >> 2] = HEAP32[i43 >> 2];
        } else {
         HEAP32[(HEAP32[i24 >> 2] | 0) + (i41 << 2) >> 2] = 133;
        }
        HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
        if (i26) {
         break L19;
        }
        __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i9, i17, 133);
        __ZN7WebCore12EditingStyle11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEb(i3, 133, i9, __ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(i17, 133) | 0);
        i37 = HEAP32[i27 >> 2] | 0;
        if ((i37 | 0) == 0) {
         break L19;
        }
        i42 = i37 | 0;
        i45 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
        if ((i45 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i37);
         break L19;
        } else {
         HEAP32[i42 >> 2] = i45;
         break L19;
        }
       }
      } while (0);
      __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i10, i17, HEAP32[i6 >> 2] | 0);
      i45 = HEAP32[i28 >> 2] | 0;
      if ((i45 | 0) == 0) {
       break;
      }
      i42 = i45 | 0;
      i37 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
      if ((i37 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i45);
      } else {
       HEAP32[i42 >> 2] = i37;
      }
      do {
       if ((HEAP32[i6 >> 2] | 0) == 159) {
        __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i11, i17, 2);
        i37 = HEAP32[i29 >> 2] | 0;
        if ((i37 | 0) == 0) {
         break;
        }
        i42 = i37 | 0;
        i45 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
        if ((i45 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i37);
        } else {
         HEAP32[i42 >> 2] = i45;
        }
        if (i21) {
         i16 = 1;
         i39 = 73;
         break L9;
        }
        HEAP32[i12 >> 2] = 2;
        i45 = HEAP32[i22 >> 2] | 0;
        if ((i45 | 0) == (HEAP32[i23 >> 2] | 0)) {
         i42 = i45 + 1 | 0;
         i37 = HEAP32[i24 >> 2] | 0;
         do {
          if (i37 >>> 0 > i12 >>> 0) {
           i39 = 45;
          } else {
           if ((i37 + (i45 << 2) | 0) >>> 0 <= i12 >>> 0) {
            i39 = 45;
            break;
           }
           __ZN3WTF6VectorIN7WebCore13CSSPropertyIDELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i42);
           i46 = HEAP32[i24 >> 2] | 0;
           i47 = i46 + (i30 - i37 >> 2 << 2) | 0;
           i48 = i46;
          }
         } while (0);
         if ((i39 | 0) == 45) {
          i39 = 0;
          __ZN3WTF6VectorIN7WebCore13CSSPropertyIDELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i42);
          i47 = i12;
          i48 = HEAP32[i24 >> 2] | 0;
         }
         HEAP32[i48 + (HEAP32[i22 >> 2] << 2) >> 2] = HEAP32[i47 >> 2];
        } else {
         HEAP32[(HEAP32[i24 >> 2] | 0) + (i45 << 2) >> 2] = 2;
        }
        HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
        if (i26) {
         break;
        }
        i37 = HEAP32[i6 >> 2] | 0;
        __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i13, i17, i37);
        __ZN7WebCore12EditingStyle11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEb(i3, i37, i13, __ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(i17, HEAP32[i6 >> 2] | 0) | 0);
        i37 = HEAP32[i31 >> 2] | 0;
        if ((i37 | 0) == 0) {
         break;
        }
        i41 = i37 | 0;
        i36 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
        if ((i36 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i37);
         break;
        } else {
         HEAP32[i41 >> 2] = i36;
         break;
        }
       }
      } while (0);
      if (i21) {
       i16 = 1;
       i39 = 72;
       break L9;
      }
      i36 = HEAP32[i22 >> 2] | 0;
      if ((i36 | 0) == (HEAP32[i23 >> 2] | 0)) {
       i41 = i36 + 1 | 0;
       i37 = HEAP32[i24 >> 2] | 0;
       do {
        if (i37 >>> 0 > i6 >>> 0) {
         i39 = 58;
        } else {
         if ((i37 + (i36 << 2) | 0) >>> 0 <= i6 >>> 0) {
          i39 = 58;
          break;
         }
         __ZN3WTF6VectorIN7WebCore13CSSPropertyIDELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i41);
         i46 = HEAP32[i24 >> 2] | 0;
         i49 = i46 + (i32 - i37 >> 2 << 2) | 0;
         i50 = i46;
        }
       } while (0);
       if ((i39 | 0) == 58) {
        i39 = 0;
        __ZN3WTF6VectorIN7WebCore13CSSPropertyIDELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i41);
        i49 = i6;
        i50 = HEAP32[i24 >> 2] | 0;
       }
       HEAP32[i50 + (HEAP32[i22 >> 2] << 2) >> 2] = HEAP32[i49 >> 2];
      } else {
       HEAP32[(HEAP32[i24 >> 2] | 0) + (i36 << 2) >> 2] = HEAP32[i6 >> 2];
      }
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
      if (i26) {
       break;
      }
      i37 = HEAP32[i6 >> 2] | 0;
      __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i14, i17, i37);
      __ZN7WebCore12EditingStyle11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEb(i3, i37, i14, __ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(i17, HEAP32[i6 >> 2] | 0) | 0);
      i37 = HEAP32[i33 >> 2] | 0;
      if ((i37 | 0) == 0) {
       break;
      }
      i46 = i37 | 0;
      i51 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
      if ((i51 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i37);
       break;
      } else {
       HEAP32[i46 >> 2] = i51;
       break;
      }
     }
    } while (0);
    i51 = i34 + 1 | 0;
    if (i51 >>> 0 >= i18 >>> 0) {
     break L7;
    }
    i34 = i51;
    i35 = HEAP32[i15 >> 2] | 0;
   }
   if ((i39 | 0) == 7) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i39 | 0) == 72) {
    STACKTOP = i5;
    return i16 | 0;
   } else if ((i39 | 0) == 73) {
    STACKTOP = i5;
    return i16 | 0;
   } else if ((i39 | 0) == 75) {
    STACKTOP = i5;
    return i16 | 0;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  i16 = 0;
  STACKTOP = i5;
  return i16 | 0;
 }
 i16 = (HEAP32[i4 + 8 >> 2] | 0) != 0;
 STACKTOP = i5;
 return i16 | 0;
}
function __ZN7WebCore11StyleChangeC2EPNS_12EditingStyleERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 72 | 0;
 i14 = i4 + 80 | 0;
 i15 = i4 + 88 | 0;
 i16 = i1 | 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 i17 = i3 | 0;
 _memset(i1 | 0, 0, 10) | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i19 = 0;
 } else {
  i19 = HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 8 >> 2] | 0;
 }
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i18 = i2 + 4 | 0;
 if ((HEAP32[i18 >> 2] | 0) == 0 | (i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i19 + 332 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i20 = __ZNK7WebCore8Position13containerNodeEv(i3) | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i9 | 0;
 HEAP32[i3 >> 2] = i20;
 i21 = i20 + 8 | 0;
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i8, i9, 0, 0);
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 + 8 | 0;
   i21 = i3 | 0;
   i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18getPropertiesNotInINS_22ComputedStyleExtractorEEEN3WTF10PassRefPtrINS_22MutableStylePropertiesEEEPNS_15StylePropertiesEPT_(i10, HEAP32[i18 >> 2] | 0, i8);
 i9 = i10 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i10 | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, i9, 335);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i6, i9, 133);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = (i5 | 0) == 0;
 do {
  if (i3) {
   i22 = i6;
  } else {
   __ZNK7WebCore8CSSValue7cssTextEv(i7, i5);
   __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i10, 133, i7, 0, 0) | 0;
   i20 = HEAP32[i7 >> 2] | 0;
   if ((i20 | 0) == 0) {
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i10, 335, 0) | 0;
   } else {
    i21 = i20 | 0;
    i23 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
    if ((i23 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i20);
    } else {
     HEAP32[i21 >> 2] = i23;
    }
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i10, 335, 0) | 0;
   }
   i23 = i5 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   if ((i6 | 0) == 0) {
    i22 = i5;
    break;
   }
   i23 = i6 | 0;
   i21 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i6);
    i22 = i5;
    break;
   } else {
    HEAP32[i23 >> 2] = i21;
    i22 = i5;
    break;
   }
  }
 } while (0);
 do {
  if ((i22 | 0) != 0) {
   if ((HEAP32[i22 + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i10, 133, 0) | 0;
   }
   i6 = i22 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i22);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   i22 = i5 | 0;
   i7 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i5);
    break;
   } else {
    HEAP32[i22 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + 464 >> 2] | 0) + 34 | 0] & 1) == 0) {
  __ZN7WebCore11StyleChange17extractTextStylesEPNS_8DocumentEPNS_22MutableStylePropertiesEb(i1, i19, i10, __ZNK7WebCore22ComputedStyleExtractor23useFixedFontDefaultSizeEv(i8) | 0);
 }
 if (__ZN7WebCore17isTabSpanTextNodeEPKNS_4NodeE(HEAP32[i17 >> 2] | 0) | 0) {
  i24 = 36;
 } else {
  if (__ZN7WebCore13isTabSpanNodeEPKNS_4NodeE(HEAP32[i17 >> 2] | 0) | 0) {
   i24 = 36;
  }
 }
 if ((i24 | 0) == 36) {
  __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i10, 163, 0) | 0;
 }
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i11, i9, 159);
 i24 = i11 | 0;
 L59 : do {
  if ((HEAP32[i24 >> 2] | 0) != 0) {
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i12, HEAP32[i18 >> 2] | 0, 2);
   i11 = HEAP32[i12 >> 2] | 0;
   i17 = (i11 | 0) == 0;
   do {
    if (!i17) {
     i19 = i11 | 0;
     i1 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i1 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i11);
      break;
     } else {
      HEAP32[i19 >> 2] = i1;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     if (!i17) {
      break L59;
     }
    } else {
     i1 = i11 | 0;
     i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i11);
      if (i17) {
       break;
      } else {
       break L59;
      }
     } else {
      HEAP32[i1 >> 2] = i19;
      if (i17) {
       break;
      } else {
       break L59;
      }
     }
    }
   } while (0);
   __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i13, HEAP32[i18 >> 2] | 0, 2);
   __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i10, 2, i13, 0, 0) | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i11 = i17 | 0;
   i19 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i11 >> 2] = i19;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore15StyleProperties6asTextEv(i15, i9);
 __ZNK3WTF6String15stripWhiteSpaceEv(i14, i15);
 i9 = i14 | 0;
 i14 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i13 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = i14;
 do {
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   i16 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i15 = i13 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i13 >> 2] = i16;
    break;
   }
   if ((HEAP32[i10 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i10 + 8 | 0;
 i10 = i8 | 0;
 i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i16;
 if ((i16 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11StyleChangeC1EPNS_12EditingStyleERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 72 | 0;
 i14 = i4 + 80 | 0;
 i15 = i4 + 88 | 0;
 i16 = i1 | 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 i17 = i3 | 0;
 _memset(i1 | 0, 0, 10) | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i19 = 0;
 } else {
  i19 = HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 8 >> 2] | 0;
 }
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i18 = i2 + 4 | 0;
 if ((HEAP32[i18 >> 2] | 0) == 0 | (i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i19 + 332 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i20 = __ZNK7WebCore8Position13containerNodeEv(i3) | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i9 | 0;
 HEAP32[i3 >> 2] = i20;
 i21 = i20 + 8 | 0;
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i8, i9, 0, 0);
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 + 8 | 0;
   i21 = i3 | 0;
   i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18getPropertiesNotInINS_22ComputedStyleExtractorEEEN3WTF10PassRefPtrINS_22MutableStylePropertiesEEEPNS_15StylePropertiesEPT_(i10, HEAP32[i18 >> 2] | 0, i8);
 i9 = i10 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i10 | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, i9, 335);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i6, i9, 133);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = (i5 | 0) == 0;
 do {
  if (i3) {
   i22 = i6;
  } else {
   __ZNK7WebCore8CSSValue7cssTextEv(i7, i5);
   __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i10, 133, i7, 0, 0) | 0;
   i20 = HEAP32[i7 >> 2] | 0;
   if ((i20 | 0) == 0) {
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i10, 335, 0) | 0;
   } else {
    i21 = i20 | 0;
    i23 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
    if ((i23 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i20);
    } else {
     HEAP32[i21 >> 2] = i23;
    }
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i10, 335, 0) | 0;
   }
   i23 = i5 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   if ((i6 | 0) == 0) {
    i22 = i5;
    break;
   }
   i23 = i6 | 0;
   i21 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i6);
    i22 = i5;
    break;
   } else {
    HEAP32[i23 >> 2] = i21;
    i22 = i5;
    break;
   }
  }
 } while (0);
 do {
  if ((i22 | 0) != 0) {
   if ((HEAP32[i22 + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i10, 133, 0) | 0;
   }
   i6 = i22 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i22);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   i22 = i5 | 0;
   i7 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i5);
    break;
   } else {
    HEAP32[i22 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + 464 >> 2] | 0) + 34 | 0] & 1) == 0) {
  __ZN7WebCore11StyleChange17extractTextStylesEPNS_8DocumentEPNS_22MutableStylePropertiesEb(i1, i19, i10, __ZNK7WebCore22ComputedStyleExtractor23useFixedFontDefaultSizeEv(i8) | 0);
 }
 if (__ZN7WebCore17isTabSpanTextNodeEPKNS_4NodeE(HEAP32[i17 >> 2] | 0) | 0) {
  i24 = 36;
 } else {
  if (__ZN7WebCore13isTabSpanNodeEPKNS_4NodeE(HEAP32[i17 >> 2] | 0) | 0) {
   i24 = 36;
  }
 }
 if ((i24 | 0) == 36) {
  __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i10, 163, 0) | 0;
 }
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i11, i9, 159);
 i24 = i11 | 0;
 L59 : do {
  if ((HEAP32[i24 >> 2] | 0) != 0) {
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i12, HEAP32[i18 >> 2] | 0, 2);
   i11 = HEAP32[i12 >> 2] | 0;
   i17 = (i11 | 0) == 0;
   do {
    if (!i17) {
     i19 = i11 | 0;
     i1 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i1 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i11);
      break;
     } else {
      HEAP32[i19 >> 2] = i1;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     if (!i17) {
      break L59;
     }
    } else {
     i1 = i11 | 0;
     i19 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i11);
      if (i17) {
       break;
      } else {
       break L59;
      }
     } else {
      HEAP32[i1 >> 2] = i19;
      if (i17) {
       break;
      } else {
       break L59;
      }
     }
    }
   } while (0);
   __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i13, HEAP32[i18 >> 2] | 0, 2);
   __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i10, 2, i13, 0, 0) | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i11 = i17 | 0;
   i19 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i11 >> 2] = i19;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore15StyleProperties6asTextEv(i15, i9);
 __ZNK3WTF6String15stripWhiteSpaceEv(i14, i15);
 i9 = i14 | 0;
 i14 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i13 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = i14;
 do {
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   i16 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i15 = i13 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i13 >> 2] = i16;
    break;
   }
   if ((HEAP32[i10 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i10 + 8 | 0;
 i10 = i8 | 0;
 i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i16;
 if ((i16 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12EditingStyle30removeStyleFromRulesAndContextEPNS_13StyledElementEPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i1 + 4 | 0;
 if ((HEAP32[i13 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i2 | 0;
 __ZN7WebCoreL31styleFromMatchedRulesForElementEPNS_7ElementEj(i7, i1, 22);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = (i7 | 0) == 0;
 do {
  if (!i2) {
   i14 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i14 & 4 | 0) == 0) {
    i15 = i14 >>> 3;
   } else {
    i15 = HEAP32[i7 + 16 >> 2] | 0;
   }
   if ((i15 | 0) == 0) {
    break;
   }
   __ZN7WebCore18getPropertiesNotInINS_22MutableStylePropertiesEEEN3WTF10PassRefPtrIS1_EEPNS_15StylePropertiesEPT_(i8, HEAP32[i13 >> 2] | 0, i7);
   i14 = i8 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i16;
   if ((i14 | 0) == 0) {
    break;
   }
   i16 = i14 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i16 >> 2] = i17;
    break;
   }
   if ((HEAP32[i14 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    break;
   }
  }
 } while (0);
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 >> 2] = 1;
 i15 = i8 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP8[i8 + 8 | 0] = 0;
 HEAPF32[i8 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 __ZN7WebCore12EditingStyle4initEPNS_4NodeENS0_19PropertiesToIncludeE(i8, i3, 2);
 i3 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i9, i3 | 0, 23);
   i14 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i14 | 0) == 0) {
     __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(HEAP32[i15 >> 2] | 0, 23, 90, 0) | 0;
    } else {
     i17 = i14 | 0;
     i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i14);
      break;
     } else {
      HEAP32[i17 >> 2] = i16;
      break;
     }
    }
   } while (0);
   __ZN7WebCoreL23removePropertiesInStyleEPNS_22MutableStylePropertiesEPNS_15StylePropertiesE(HEAP32[i15 >> 2] | 0, i7 | 0);
   __ZN7WebCore18getPropertiesNotInINS_22MutableStylePropertiesEEEN3WTF10PassRefPtrIS1_EEPNS_15StylePropertiesEPT_(i10, HEAP32[i13 >> 2] | 0, HEAP32[i15 >> 2] | 0);
   i14 = i10 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i16;
   if ((i14 | 0) == 0) {
    break;
   }
   i16 = i14 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i16 >> 2] = i17;
    break;
   }
   if ((HEAP32[i14 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    break;
   }
  }
 } while (0);
 L36 : do {
  if (__ZN7WebCore39isStyleSpanOrSpanWithOnlyStyleAttributeEPKNS_7ElementE(i1) | 0) {
   i10 = i7 | 0;
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i11, i10, 3);
   i15 = i11 | 0;
   i9 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i3 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i3 | 0) == 0) {
       HEAP32[i6 >> 2] = 0;
       i18 = 0;
      } else {
       __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i6, i3 | 0, 3);
       i14 = i6 | 0;
       i17 = HEAP32[i14 >> 2] | 0;
       HEAP32[i14 >> 2] = 0;
       if ((i17 | 0) == 0) {
        i18 = 0;
        break;
       }
       if ((HEAP32[i17 + 4 >> 2] & 516604 | 0) == 472) {
        i19 = HEAP32[i17 + 8 >> 2] | 0;
       } else {
        i19 = 0;
       }
       i14 = i17 | 0;
       i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       if ((i16 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i17);
        i18 = i19;
        break;
       } else {
        HEAP32[i14 >> 2] = i16;
        i18 = i19;
        break;
       }
      }
     } while (0);
     i3 = (i18 | 0) == 247;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) != 0) {
      i20 = i16;
      i21 = i3;
      i22 = 36;
      break;
     }
     if (i3) {
      i22 = 40;
     }
    } else {
     i20 = i9;
     i21 = 0;
     i22 = 36;
    }
   } while (0);
   do {
    if ((i22 | 0) == 36) {
     i9 = i20 | 0;
     i15 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i20);
      if (i21) {
       i22 = 40;
       break;
      } else {
       break;
      }
     } else {
      HEAP32[i9 >> 2] = i15;
      if (i21) {
       i22 = 40;
       break;
      } else {
       break;
      }
     }
    }
   } while (0);
   if ((i22 | 0) == 40) {
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i13 >> 2] | 0, 3, 0) | 0;
   }
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i12, i10, 79);
   i15 = i12 | 0;
   i9 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i3 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i3 | 0) == 0) {
       HEAP32[i5 >> 2] = 0;
       i23 = 0;
      } else {
       __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, i3 | 0, 79);
       i16 = i5 | 0;
       i14 = HEAP32[i16 >> 2] | 0;
       HEAP32[i16 >> 2] = 0;
       if ((i14 | 0) == 0) {
        i23 = 0;
        break;
       }
       if ((HEAP32[i14 + 4 >> 2] & 516604 | 0) == 472) {
        i24 = HEAP32[i14 + 8 >> 2] | 0;
       } else {
        i24 = 0;
       }
       i16 = i14 | 0;
       i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
       if ((i17 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i14);
        i23 = i24;
        break;
       } else {
        HEAP32[i16 >> 2] = i17;
        i23 = i24;
        break;
       }
      }
     } while (0);
     i3 = (i23 | 0) == 3;
     i17 = HEAP32[i15 >> 2] | 0;
     if ((i17 | 0) != 0) {
      i25 = i17;
      i26 = i3;
      i22 = 51;
      break;
     }
     if (!i3) {
      break L36;
     }
    } else {
     i25 = i9;
     i26 = 0;
     i22 = 51;
    }
   } while (0);
   do {
    if ((i22 | 0) == 51) {
     i9 = i25 | 0;
     i15 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i25);
      if (i26) {
       break;
      } else {
       break L36;
      }
     } else {
      HEAP32[i9 >> 2] = i15;
      if (i26) {
       break;
      } else {
       break L36;
      }
     }
    }
   } while (0);
   __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i13 >> 2] | 0, 79, 0) | 0;
  }
 } while (0);
 if ((i8 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore12EditingStyleEE5derefEv(i8);
 }
 if (i2) {
  STACKTOP = i4;
  return;
 }
 i2 = i7 | 0;
 i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i2 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i4;
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore12EditingStyle4initEPNS_4NodeENS0_19PropertiesToIncludeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 72 | 0;
 i14 = i4 + 80 | 0;
 i15 = i4 + 88 | 0;
 do {
  if (__ZN7WebCore17isTabSpanTextNodeEPKNS_4NodeE(i2) | 0) {
   i16 = HEAP32[(__ZN7WebCore11tabSpanNodeEPKNS_4NodeE(i2) | 0) + 16 >> 2] | 0;
  } else {
   if (!(__ZN7WebCore13isTabSpanNodeEPKNS_4NodeE(i2) | 0)) {
    i16 = i2;
    break;
   }
   i16 = HEAP32[i2 + 16 >> 2] | 0;
  }
 } while (0);
 i2 = i8 | 0;
 HEAP32[i2 >> 2] = i16;
 i17 = (i16 | 0) == 0;
 if (!i17) {
  i18 = i16 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i7, i8, 0, 0);
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 + 8 | 0;
   i18 = i2 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i8 = (i3 | 0) == 2;
 i2 = i8 ? 1 : i3;
 if ((i2 | 0) == 0) {
  __ZNK7WebCore22ComputedStyleExtractor14copyPropertiesEv(i6, i7);
  i3 = HEAP32[i6 >> 2] | 0;
  HEAP32[i9 >> 2] = i3;
  i20 = i3;
 } else if ((i2 | 0) == 1) {
  __ZNK7WebCore22ComputedStyleExtractor19copyPropertiesInSetEPKNS_13CSSPropertyIDEj(i5, i7, H_BASE + 248 | 0, 19);
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i9 >> 2] = i3;
  i20 = i3;
 } else if ((i2 | 0) == 2) {
  __ZNK7WebCore22ComputedStyleExtractor19copyPropertiesInSetEPKNS_13CSSPropertyIDEj(i9, i7, H_BASE + 248 | 0, 21);
  i20 = HEAP32[i9 >> 2] | 0;
 } else {
  HEAP32[i9 >> 2] = 0;
  i20 = 0;
 }
 i2 = i9 | 0;
 HEAP32[i2 >> 2] = 0;
 i9 = i1 + 4 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i20;
 do {
  if ((i3 | 0) != 0) {
   i20 = i3 | 0;
   i5 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i20 >> 2] = i5;
    break;
   }
   if ((HEAP32[i3 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i2 >> 2] = i5;
    break;
   }
   if ((HEAP32[i3 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   }
  }
 } while (0);
 do {
  if (i8) {
   __ZN7WebCoreL23backgroundColorInEffectEPNS_4NodeE(i10, i16);
   i3 = i10 | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   do {
    if ((i5 | 0) != 0) {
     i3 = HEAP32[i9 >> 2] | 0;
     __ZNK7WebCore8CSSValue7cssTextEv(i11, i5);
     __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i3, 23, i11, 0, 0) | 0;
     i3 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i2 = i3 | 0;
       i20 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
       if ((i20 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i3);
        break;
       } else {
        HEAP32[i2 >> 2] = i20;
        break;
       }
      }
     } while (0);
     i3 = i5 | 0;
     i20 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i5);
      break;
     } else {
      HEAP32[i3 >> 2] = i20;
      break;
     }
    }
   } while (0);
   __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i12, i7, 335, 1);
   i5 = i12 | 0;
   i20 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i9 >> 2] | 0;
   __ZNK7WebCore8CSSValue7cssTextEv(i13, i20);
   __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i5, 133, i13, 0, 0) | 0;
   i5 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i3 = i5 | 0;
     i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i3 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i5 = i20 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i20);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (!i17) {
   i13 = i16;
   if ((FUNCTION_TABLE_iii[HEAP32[(HEAP32[i13 >> 2] | 0) + 176 >> 2] & 15](i16, 0) | 0) == 0) {
    break;
   }
   i12 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i13 >> 2] | 0) + 176 >> 2] & 15](i16, 0) | 0;
   i13 = i12 + 24 | 0;
   i11 = HEAP32[i13 >> 2] | 0;
   i10 = i11 + 20 | 0;
   if ((HEAP32[i10 >> 2] & 0 | 0) == 0 & (HEAP32[i10 + 4 >> 2] & 1 | 0) == 0) {
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i9 >> 2] | 0, 340, 0) | 0;
    i21 = HEAP32[i13 >> 2] | 0;
   } else {
    i21 = i11;
   }
   i11 = i21 + 8 | 0;
   if ((HEAP32[i11 >> 2] & 0 | 0) == 0 & (HEAP32[i11 + 4 >> 2] & 1 | 0) == 0) {
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i9 >> 2] | 0, 343, 0) | 0;
   }
   if ((HEAP32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(i12) | 0) + 16 >> 2] | 0) >>> 0 < 268435456 >>> 0) {
    break;
   }
   i12 = HEAP32[i9 >> 2] | 0;
   __ZNK7WebCore22ComputedStyleExtractor36getFontSizeCSSValuePreferringKeywordEv(i15, i7);
   i11 = i15 | 0;
   __ZNK7WebCore8CSSValue7cssTextEv(i14, HEAP32[i11 >> 2] | 0);
   __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i12, 6, i14, 0, 0) | 0;
   i12 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 | 0;
     i10 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i13 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i20 = i12 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i12 | 0);
    break;
   } else {
    HEAP32[i20 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 8 | 0] = (__ZNK7WebCore22ComputedStyleExtractor23useFixedFontDefaultSizeEv(i7) | 0) & 1;
 __ZN7WebCore12EditingStyle20extractFontSizeDeltaEv(i1);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 + 8 | 0;
 i1 = i7 | 0;
 i14 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i14;
 if ((i14 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL22htmlElementEquivalentsEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if (HEAP8[H_BASE + 352 | 0] | 0) {
  i1 = HEAP32[H_BASE + 376 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(12) | 0;
  i3 = i2;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[H_BASE + 376 >> 2] = i3;
  HEAP8[H_BASE + 352 | 0] = 1;
  i1 = i3;
 }
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  i4 = HEAP32[H_BASE + 376 >> 2] | 0;
  return i4 | 0;
 }
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 i5 = i2;
 HEAP32[i2 >> 2] = H_BASE + 184;
 HEAP32[i2 + 4 >> 2] = 9;
 i6 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i6, 33);
 HEAP32[i2 + 8 >> 2] = i6;
 HEAP32[i2 + 12 >> 2] = __ZN7WebCore9HTMLNames4bTagE;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore21HTMLElementEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2 + 1 | 0);
  HEAP32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) >> 2] = i5;
 } else {
  HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 << 2) >> 2] = i5;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[H_BASE + 376 >> 2] | 0;
 i5 = __ZN3WTF10fastMallocEj(16) | 0;
 i2 = i5;
 HEAP32[i5 >> 2] = H_BASE + 184;
 HEAP32[i5 + 4 >> 2] = 9;
 i1 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i1, 33);
 HEAP32[i5 + 8 >> 2] = i1;
 HEAP32[i5 + 12 >> 2] = __ZN7WebCore9HTMLNames9strongTagE;
 i5 = i3 + 8 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == (HEAP32[i3 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore21HTMLElementEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i1 + 1 | 0);
  HEAP32[(HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = i2;
 } else {
  HEAP32[(HEAP32[i3 >> 2] | 0) + (i1 << 2) >> 2] = i2;
 }
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[H_BASE + 376 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 i1 = i2;
 HEAP32[i2 >> 2] = H_BASE + 184;
 HEAP32[i2 + 4 >> 2] = 161;
 i3 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i3, 144);
 HEAP32[i2 + 8 >> 2] = i3;
 HEAP32[i2 + 12 >> 2] = __ZN7WebCore9HTMLNames6subTagE;
 i2 = i5 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i5 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore21HTMLElementEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i3 + 1 | 0);
  HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) >> 2] = i1;
 } else {
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i3 << 2) >> 2] = i1;
 }
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[H_BASE + 376 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(16) | 0;
 i3 = i1;
 HEAP32[i1 >> 2] = H_BASE + 184;
 HEAP32[i1 + 4 >> 2] = 161;
 i5 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i5, 145);
 HEAP32[i1 + 8 >> 2] = i5;
 HEAP32[i1 + 12 >> 2] = __ZN7WebCore9HTMLNames6supTagE;
 i1 = i2 + 8 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == (HEAP32[i2 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore21HTMLElementEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i5 + 1 | 0);
  HEAP32[(HEAP32[i2 >> 2] | 0) + (HEAP32[i1 >> 2] << 2) >> 2] = i3;
 } else {
  HEAP32[(HEAP32[i2 >> 2] | 0) + (i5 << 2) >> 2] = i3;
 }
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i1 = HEAP32[H_BASE + 376 >> 2] | 0;
 i3 = __ZN3WTF10fastMallocEj(16) | 0;
 i5 = i3;
 HEAP32[i3 >> 2] = H_BASE + 184;
 HEAP32[i3 + 4 >> 2] = 7;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i2, 22);
 HEAP32[i3 + 8 >> 2] = i2;
 HEAP32[i3 + 12 >> 2] = __ZN7WebCore9HTMLNames4iTagE;
 i3 = i1 + 8 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore21HTMLElementEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2 + 1 | 0);
  HEAP32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) >> 2] = i5;
 } else {
  HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 << 2) >> 2] = i5;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[H_BASE + 376 >> 2] | 0;
 i5 = __ZN3WTF10fastMallocEj(16) | 0;
 i2 = i5;
 HEAP32[i5 >> 2] = H_BASE + 184;
 HEAP32[i5 + 4 >> 2] = 7;
 i1 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i1, 22);
 HEAP32[i5 + 8 >> 2] = i1;
 HEAP32[i5 + 12 >> 2] = __ZN7WebCore9HTMLNames5emTagE;
 i5 = i3 + 8 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == (HEAP32[i3 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore21HTMLElementEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i1 + 1 | 0);
  HEAP32[(HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = i2;
 } else {
  HEAP32[(HEAP32[i3 >> 2] | 0) + (i1 << 2) >> 2] = i2;
 }
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[H_BASE + 376 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 i1 = i2;
 HEAP32[i1 >> 2] = H_BASE + 184;
 HEAP32[i2 + 4 >> 2] = 133;
 i3 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i3, 364);
 HEAP32[i2 + 8 >> 2] = i3;
 HEAP32[i2 + 12 >> 2] = __ZN7WebCore9HTMLNames4uTagE;
 HEAP32[i1 >> 2] = H_BASE + 40;
 i1 = i2;
 i2 = i5 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i5 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore21HTMLElementEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i3 + 1 | 0);
  HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) >> 2] = i1;
 } else {
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i3 << 2) >> 2] = i1;
 }
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[H_BASE + 376 >> 2] | 0;
 i1 = __ZN3WTF10fastMallocEj(16) | 0;
 i3 = i1;
 HEAP32[i3 >> 2] = H_BASE + 184;
 HEAP32[i1 + 4 >> 2] = 133;
 i5 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i5, 341);
 HEAP32[i1 + 8 >> 2] = i5;
 HEAP32[i1 + 12 >> 2] = __ZN7WebCore9HTMLNames4sTagE;
 HEAP32[i3 >> 2] = H_BASE + 40;
 i3 = i1;
 i1 = i2 + 8 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == (HEAP32[i2 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore21HTMLElementEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i5 + 1 | 0);
  HEAP32[(HEAP32[i2 >> 2] | 0) + (HEAP32[i1 >> 2] << 2) >> 2] = i3;
 } else {
  HEAP32[(HEAP32[i2 >> 2] | 0) + (i5 << 2) >> 2] = i3;
 }
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i1 = HEAP32[H_BASE + 376 >> 2] | 0;
 i3 = __ZN3WTF10fastMallocEj(16) | 0;
 i5 = i3;
 HEAP32[i5 >> 2] = H_BASE + 184;
 HEAP32[i3 + 4 >> 2] = 133;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i2, 341);
 HEAP32[i3 + 8 >> 2] = i2;
 HEAP32[i3 + 12 >> 2] = __ZN7WebCore9HTMLNames9strikeTagE;
 HEAP32[i5 >> 2] = H_BASE + 40;
 i5 = i3;
 i3 = i1 + 8 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore21HTMLElementEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2 + 1 | 0);
  HEAP32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) >> 2] = i5;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  i4 = HEAP32[H_BASE + 376 >> 2] | 0;
  return i4 | 0;
 } else {
  HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 << 2) >> 2] = i5;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  i4 = HEAP32[H_BASE + 376 >> 2] | 0;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore12EditingStyle21styleAtSelectionStartERKNS_16VisibleSelectionEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 56 | 0;
 i11 = i4 + 64 | 0;
 i12 = i2 + 52 | 0;
 if ((HEAP32[i12 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore41adjustedSelectionStartForStyleComputationERKNS_16VisibleSelectionE(i6, i2);
 i13 = __ZNK7WebCore8Position13containerNodeEv(i6) | 0;
 do {
  if (!((HEAP32[i12 >> 2] | 0) != 2 | (i13 | 0) == 0)) {
   if ((HEAP32[i13 + 12 >> 2] & 1 | 0) == 0) {
    break;
   }
   i14 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i6) | 0;
   if ((i14 | 0) != (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 168 >> 2] & 7](i13) | 0)) {
    break;
   }
   __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i7, i6);
   i14 = i7 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i16 = i6 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i15;
   do {
    if ((i17 | 0) != 0) {
     i15 = i17 + 8 | 0;
     i16 = i15 | 0;
     i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   i17 = HEAP32[i7 + 8 >> 2] | 0;
   i15 = i6 + 8 | 0;
   i18 = i15;
   i16 = HEAP32[i18 >> 2] & -8 | i17 & 7;
   HEAP32[i18 >> 2] = i16;
   HEAP8[i15] = i16 & 255 & -9 | i17 & 8;
   i17 = HEAP32[i14 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i16 = i17 + 8 | 0;
   i17 = i16 | 0;
   i15 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 i7 = __ZNK7WebCore8Position7elementEv(i6) | 0;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
  } else {
   i13 = __ZN3WTF10fastMallocEj(16) | 0;
   i16 = i13;
   i15 = i13;
   HEAP32[i15 >> 2] = 1;
   i17 = i13 + 4 | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP8[i13 + 8 | 0] = 0;
   HEAPF32[i13 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
   __ZN7WebCore12EditingStyle4initEPNS_4NodeENS0_19PropertiesToIncludeE(i16, i7 | 0, 0);
   i18 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) + 468 >> 2] | 0) + 116 >> 2] | 0;
   if ((i18 | 0) != 0) {
    i19 = i18 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    if ((i18 | 0) != (i16 | 0)) {
     __ZN7WebCore12EditingStyle10mergeStyleEPKNS_15StylePropertiesENS0_23CSSPropertyOverrideModeE(i16, HEAP32[i18 + 4 >> 2] | 0, 0);
    }
    __ZN3WTF10RefCountedIN7WebCore12EditingStyleEE5derefEv(i18 | 0);
   }
   L27 : do {
    if (i3) {
     do {
      if ((HEAP32[i12 >> 2] | 0) != 2) {
       __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, HEAP32[i17 >> 2] | 0, 23);
       i18 = i5 | 0;
       i19 = HEAP32[i18 >> 2] | 0;
       HEAP32[i18 >> 2] = 0;
       if ((i19 | 0) == 0) {
        break;
       }
       i18 = HEAP32[i19 + 4 >> 2] | 0;
       do {
        if ((i18 & 516096 | 0) == 0) {
         i20 = i18 & 508;
         if ((i20 | 0) == 100) {
          i21 = (HEAP32[i19 + 8 >> 2] | 0) >>> 0 < 16777216 >>> 0;
          break;
         } else if ((i20 | 0) == 472) {
          i21 = (HEAP32[i19 + 8 >> 2] | 0) == 90;
          break;
         } else {
          i21 = 0;
          break;
         }
        } else {
         i21 = 0;
        }
       } while (0);
       i18 = i19 | 0;
       i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       if ((i20 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i19);
        if (i21) {
         break;
        } else {
         break L27;
        }
       } else {
        HEAP32[i18 >> 2] = i20;
        if (i21) {
         break;
        } else {
         break L27;
        }
       }
      }
     } while (0);
     __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i8, i2);
     i20 = i8 | 0;
     i18 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = 0;
     i20 = i10 | 0;
     HEAP32[i20 >> 2] = 0;
     __ZN7WebCoreL23backgroundColorInEffectEPNS_4NodeE(i9, __ZNK7WebCore5Range23commonAncestorContainerERi(i18, i20) | 0);
     i20 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       __ZNK7WebCore8CSSValue7cssTextEv(i11, i20);
       __ZN7WebCore12EditingStyle11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEb(i16, 23, i11, 0);
       i22 = HEAP32[i11 >> 2] | 0;
       do {
        if ((i22 | 0) != 0) {
         i23 = i22 | 0;
         i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
         if ((i24 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i22);
          break;
         } else {
          HEAP32[i23 >> 2] = i24;
          break;
         }
        }
       } while (0);
       i22 = i20 | 0;
       i19 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       if ((i19 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i20);
        break;
       } else {
        HEAP32[i22 >> 2] = i19;
        break;
       }
      }
     } while (0);
     if ((i18 | 0) == 0) {
      break;
     }
     i20 = i18 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i20 >> 2] = i19;
      break;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i16;
   if ((i13 | 0) == 0) {
    break;
   }
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   __ZN3WTF10RefCountedIN7WebCore12EditingStyleEE5derefEv(i13);
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i1 + 8 | 0;
 i1 = i6 | 0;
 i11 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i11;
 if ((i11 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12EditingStyle36mergeInlineAndImplicitStyleOfElementEPNS_13StyledElementENS0_23CSSPropertyOverrideModeENS0_19PropertiesToIncludeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 >> 2] = 1;
 i9 = i8 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP8[i8 + 8 | 0] = 0;
 HEAPF32[i8 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 __ZN7WebCore12EditingStyle35mergeStyleFromRulesForSerializationEPNS_13StyledElementE(i8, i2);
 i10 = i2 + 48 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i12 = HEAP32[i11 + 8 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN7WebCore22MutableStyleProperties26mergeAndOverrideOnConflictERKNS_15StylePropertiesE(HEAP32[i9 >> 2] | 0, i12);
  }
 } while (0);
 i11 = HEAP32[i9 >> 2] | 0;
 i12 = i11 | 0;
 do {
  if ((i11 | 0) == 0) {
   HEAP32[i7 >> 2] = 0;
   i13 = 0;
  } else {
   if ((i4 | 0) == 0 | (i4 | 0) == 2) {
    __ZNK7WebCore15StyleProperties19copyPropertiesInSetEPKNS_13CSSPropertyIDEj(i7, i12, H_BASE + 248 | 0, 21);
    i13 = HEAP32[i7 >> 2] | 0;
    break;
   } else if ((i4 | 0) == 1) {
    __ZNK7WebCore15StyleProperties19copyPropertiesInSetEPKNS_13CSSPropertyIDEj(i6, i12, H_BASE + 248 | 0, 19);
    i14 = HEAP32[i6 >> 2] | 0;
    HEAP32[i7 >> 2] = i14;
    i13 = i14;
    break;
   } else {
    HEAP32[i7 >> 2] = 0;
    i13 = 0;
    break;
   }
  }
 } while (0);
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i13;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i13 >> 2] = i12;
    break;
   }
   if ((HEAP32[i7 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i6 >> 2] = i12;
    break;
   }
   if ((HEAP32[i7 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   }
  }
 } while (0);
 __ZN7WebCore12EditingStyle10mergeStyleEPKNS_15StylePropertiesENS0_23CSSPropertyOverrideModeE(i1, HEAP32[i9 >> 2] | 0, i3);
 i9 = __ZN7WebCoreL22htmlElementEquivalentsEv() | 0;
 i7 = i9 + 8 | 0;
 L31 : do {
  if ((HEAP32[i7 >> 2] | 0) != 0) {
   i12 = i9 | 0;
   i6 = i1 + 4 | 0;
   i13 = i2 | 0;
   i4 = (i3 | 0) == 0;
   i11 = 0;
   L33 : while (1) {
    i14 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i11 << 2) >> 2] | 0;
    i15 = HEAP32[i6 >> 2] | 0;
    L35 : do {
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] & 15](i14, i13) | 0) {
      i16 = HEAP32[i10 >> 2] | 0;
      do {
       if ((i16 | 0) != 0) {
        i17 = HEAP32[i16 + 8 >> 2] | 0;
        if ((i17 | 0) == 0) {
         break;
        }
        if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 15](i14, i17) | 0) {
         break L35;
        }
       }
      } while (0);
      if (!i4) {
       if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 15](i14, i15) | 0) {
        break;
       }
      }
      if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i11 >>> 0) {
       break L33;
      }
      i16 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i11 << 2) >> 2] | 0;
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i16 >> 2] | 0) + 24 >> 2] & 31](i16, i13, i1);
     }
    } while (0);
    i11 = i11 + 1 | 0;
    if (i11 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
     break L31;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i7 = __ZN7WebCoreL24htmlAttributeEquivalentsEv() | 0;
 i9 = i7 + 8 | 0;
 L48 : do {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   i11 = i7 | 0;
   i13 = i1 + 4 | 0;
   i12 = i2 | 0;
   i4 = (i3 | 0) == 0;
   i6 = 0;
   L50 : while (1) {
    i15 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i6 << 2) >> 2] | 0;
    L52 : do {
     if ((HEAP32[HEAP32[i15 + 16 >> 2] >> 2] | 0) != (HEAP32[__ZN7WebCore9HTMLNames7dirAttrE >> 2] | 0)) {
      i14 = i15 | 0;
      i16 = HEAP32[i13 >> 2] | 0;
      if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 15](i14, i12) | 0)) {
       break;
      }
      i17 = HEAP32[i10 >> 2] | 0;
      do {
       if ((i17 | 0) != 0) {
        i18 = HEAP32[i17 + 8 >> 2] | 0;
        if ((i18 | 0) == 0) {
         break;
        }
        if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i15 >> 2] | 0) + 16 >> 2] & 15](i14, i18) | 0) {
         break L52;
        }
       }
      } while (0);
      if (!i4) {
       if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i15 >> 2] | 0) + 16 >> 2] & 15](i14, i16) | 0) {
        break;
       }
      }
      if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i6 >>> 0) {
       break L50;
      }
      i17 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i6 << 2) >> 2] | 0;
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 24 >> 2] & 31](i17, i12, i1);
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if (i6 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
     break L48;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore12EditingStyleEE5derefEv(i8);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore12EditingStyle15triStateOfStyleERKNS_16VisibleSelectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = HEAP32[i2 + 52 >> 2] | 0;
 if ((i7 | 0) == 1) {
  __ZN7WebCore12EditingStyle21styleAtSelectionStartERKNS_16VisibleSelectionEb(i4, i2, 0);
  i8 = HEAP32[i4 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 0;
   STACKTOP = i3;
   return i9 | 0;
  }
  i4 = HEAP32[i8 + 4 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i10 = 0;
  } else {
   i10 = __ZNK7WebCore12EditingStyle15triStateOfStyleINS_22MutableStylePropertiesEEEN3WTF8TriStateEPT_NS0_30ShouldIgnoreTextOnlyPropertiesE(i1, i4, 1) | 0;
  }
  __ZN3WTF10RefCountedIN7WebCore12EditingStyleEE5derefEv(i8 | 0);
  i9 = i10;
  STACKTOP = i3;
  return i9 | 0;
 } else if ((i7 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 } else {
  i7 = HEAP32[i2 + 24 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i9 = 0;
   STACKTOP = i3;
   return i9 | 0;
  }
  i10 = HEAP32[i7 + 8 >> 2] | 0;
  i8 = i7 + 8 | 0;
  i4 = i8 - 8 | 0;
  HEAP32[i8 >> 2] = i10;
  do {
   if ((i10 | 0) < 1) {
    if ((HEAP32[i8 + 8 >> 2] | 0) == 0) {
     __ZN7WebCore4Node14removedLastRefEv(i4);
    }
    if ((i7 | 0) == 0) {
     i9 = 0;
    } else {
     break;
    }
    STACKTOP = i3;
    return i9 | 0;
   }
  } while (0);
  i4 = i2 + 36 | 0;
  i2 = i6 | 0;
  i8 = i5 | 0;
  i10 = 0;
  i11 = 1;
  i12 = i7;
  L13 : while (1) {
   i7 = i12 + 12 | 0;
   i13 = i12 + 32 | 0;
   if ((HEAP32[i7 >> 2] & 2048 | 0) == 0) {
    i14 = i13 | 0;
   } else {
    i14 = HEAP32[i13 >> 2] | 0;
   }
   do {
    if ((HEAP32[i14 >> 2] | 0) == 0) {
     i15 = i11;
     i16 = i10;
    } else {
     if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i12, 0, 1) | 0)) {
      i15 = i11;
      i16 = i10;
      break;
     }
     HEAP32[i2 >> 2] = i12;
     i13 = i12 + 8 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
     __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i5, i6, 0, 0);
     i13 = HEAP32[i2 >> 2] | 0;
     do {
      if ((i13 | 0) != 0) {
       i17 = i13 + 8 | 0;
       i18 = i17 | 0;
       i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       HEAP32[i18 >> 2] = i19;
       if ((i19 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
      }
     } while (0);
     i13 = __ZNK7WebCore12EditingStyle15triStateOfStyleINS_22ComputedStyleExtractorEEEN3WTF8TriStateEPT_NS0_30ShouldIgnoreTextOnlyPropertiesE(i1, i5, HEAP32[i7 >> 2] & 1) | 0;
     do {
      if (i11) {
       i20 = i13;
       i21 = 24;
      } else {
       if ((i10 | 0) == (i13 | 0)) {
        i20 = i10;
        i21 = 24;
        break;
       }
       if ((HEAP32[i7 >> 2] & 1 | 0) == 0) {
        i20 = i10;
        i21 = 24;
       } else {
        i22 = 1;
        i23 = 2;
       }
      }
     } while (0);
     if ((i21 | 0) == 24) {
      i21 = 0;
      i22 = 0;
      i23 = i20;
     }
     i13 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i13 | 0) != 0) {
       i17 = i13 + 8 | 0;
       i19 = i17 | 0;
       i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
       HEAP32[i19 >> 2] = i18;
       if ((i18 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
      }
     } while (0);
     if (i22) {
      i9 = i23;
      i21 = 48;
      break L13;
     } else {
      i15 = 0;
      i16 = i23;
     }
    }
   } while (0);
   i13 = HEAP32[i4 >> 2] | 0;
   i17 = (i13 | 0) == 0;
   if (!i17) {
    i18 = i13 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   i18 = (i12 | 0) == (i13 | 0);
   do {
    if (!i17) {
     i19 = i13 + 8 | 0;
     i24 = i19 | 0;
     i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   if (i18) {
    i9 = i16;
    i21 = 46;
    break;
   }
   if ((HEAP32[i7 >> 2] & 2 | 0) != 0) {
    i13 = HEAP32[i12 + 36 >> 2] | 0;
    if ((i13 | 0) != 0) {
     i10 = i16;
     i11 = i15;
     i12 = i13;
     continue;
    }
   }
   i13 = HEAP32[i12 + 28 >> 2] | 0;
   if ((i13 | 0) != 0) {
    i10 = i16;
    i11 = i15;
    i12 = i13;
    continue;
   }
   i13 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i12) | 0;
   if ((i13 | 0) == 0) {
    i9 = i16;
    i21 = 49;
    break;
   } else {
    i10 = i16;
    i11 = i15;
    i12 = i13;
   }
  }
  if ((i21 | 0) == 46) {
   STACKTOP = i3;
   return i9 | 0;
  } else if ((i21 | 0) == 48) {
   STACKTOP = i3;
   return i9 | 0;
  } else if ((i21 | 0) == 49) {
   STACKTOP = i3;
   return i9 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore12EditingStyle35mergeStyleFromRulesForSerializationEPNS_13StyledElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 __ZN7WebCore12EditingStyle19mergeStyleFromRulesEPNS_13StyledElementE(i1, i2);
 __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i4, 0);
 i9 = HEAP32[i4 >> 2] | 0;
 i4 = i6 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i5, i6, 0, 0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 8 | 0;
   i10 = i4 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 L9 : do {
  if ((i4 | 0) == 0) {
   i11 = i1;
  } else {
   i2 = i7 | 0;
   i10 = i8;
   i12 = i8 + 4 | 0;
   i13 = 0;
   i14 = i1;
   L11 : while (1) {
    i15 = i14 | 0;
    i16 = i14 + 4 | 0;
    if ((HEAP32[i16 >> 2] & 4 | 0) == 0) {
     i17 = i15 + 8 + (i13 << 2) | 0;
    } else {
     if ((HEAP32[i15 + 16 >> 2] | 0) >>> 0 <= i13 >>> 0) {
      i18 = 11;
      break;
     }
     i17 = (HEAP32[i15 + 8 >> 2] | 0) + (i13 << 3) + 4 | 0;
    }
    i19 = HEAP32[i17 >> 2] | 0;
    do {
     if ((HEAP32[i19 + 4 >> 2] & 516096 | 0) == 0) {
      if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i19) | 0) << 16 >> 16 != 2) {
       break;
      }
      i20 = HEAP32[i16 >> 2] | 0;
      if ((i20 & 4 | 0) == 0) {
       i21 = i15 + 8 + (i20 >>> 3 << 2) + (i13 << 1) | 0;
      } else {
       if ((HEAP32[i15 + 16 >> 2] | 0) >>> 0 <= i13 >>> 0) {
        i18 = 18;
        break L11;
       }
       i21 = (HEAP32[i15 + 8 >> 2] | 0) + (i13 << 3) | 0;
      }
      __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i7, i5, HEAP16[i21 >> 1] & 1023, 1);
      i20 = HEAP32[i2 >> 2] | 0;
      HEAP32[i2 >> 2] = 0;
      if ((i20 | 0) == 0) {
       break;
      }
      i22 = HEAP32[i16 >> 2] | 0;
      if ((i22 & 4 | 0) == 0) {
       i23 = i15 + 8 + (i22 >>> 3 << 2) + (i13 << 1) | 0;
      } else {
       if ((HEAP32[i15 + 16 >> 2] | 0) >>> 0 <= i13 >>> 0) {
        i18 = 24;
        break L11;
       }
       i23 = (HEAP32[i15 + 8 >> 2] | 0) + (i13 << 3) | 0;
      }
      i22 = HEAP16[i23 >> 1] & 1023;
      HEAP16[i10 >> 1] = ((__ZN7WebCore11CSSProperty19isInheritedPropertyENS_13CSSPropertyIDE(i22 & 65535) | 0) & 1) << 15 | i22;
      HEAP32[i12 >> 2] = i20;
      __ZN7WebCore22MutableStyleProperties17addParsedPropertyERKNS_11CSSPropertyE(i9, i8);
      i20 = HEAP32[i12 >> 2] | 0;
      if ((i20 | 0) == 0) {
       break;
      }
      i22 = i20 | 0;
      i24 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      if ((i24 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i20);
       break;
      } else {
       HEAP32[i22 >> 2] = i24;
       break;
      }
     }
    } while (0);
    i15 = i13 + 1 | 0;
    i16 = HEAP32[i6 >> 2] | 0;
    if (i15 >>> 0 < i4 >>> 0) {
     i13 = i15;
     i14 = i16;
    } else {
     i11 = i16;
     break L9;
    }
   }
   if ((i18 | 0) == 11) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i18 | 0) == 18) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i18 | 0) == 24) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 __ZN7WebCore22MutableStyleProperties26mergeAndOverrideOnConflictERKNS_15StylePropertiesE(i11, i9 | 0);
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i5 = i11 + 8 | 0;
   i18 = i5 | 0;
   i4 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i9 | 0;
 i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i11 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i9 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12EditingStyle37removeStyleConflictingWithStyleOfNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i1 + 4 | 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = i10;
 i12 = i10 + 8 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i6, i7, 0, 0);
 i7 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i1 = i7 + 8 | 0;
   i12 = i1 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore22ComputedStyleExtractor19copyPropertiesInSetEPKNS_13CSSPropertyIDEj(i8, i6, H_BASE + 248 | 0, 21);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 8 | 0;
   i1 = i6 | 0;
   i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i7 = i8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i2;
 i6 = i2 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i4, i5, 0, 0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 8 | 0;
   i6 = i7 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore22ComputedStyleExtractor19copyPropertiesInSetEPKNS_13CSSPropertyIDEj(i9, i4, H_BASE + 248 | 0, 21);
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i7 = i4 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i5 = i9 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore22MutableStyleProperties26removeEquivalentPropertiesEPKNS_15StylePropertiesE(i9, i8 | 0);
 i5 = HEAP32[i9 + 16 >> 2] | 0;
 L30 : do {
  if ((i5 | 0) != 0) {
   i4 = i9 | 0;
   i2 = i9 + 4 | 0;
   i7 = i4 + 8 | 0;
   i6 = i7;
   i10 = i4 + 16 | 0;
   i4 = i7;
   i7 = 0;
   while (1) {
    i1 = HEAP32[i11 >> 2] | 0;
    i12 = HEAP32[i2 >> 2] | 0;
    if ((i12 & 4 | 0) == 0) {
     i13 = i6 + (i12 >>> 3 << 2) + (i7 << 1) | 0;
    } else {
     if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i7 >>> 0) {
      break;
     }
     i13 = (HEAP32[i4 >> 2] | 0) + (i7 << 3) | 0;
    }
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i1, HEAP16[i13 >> 1] & 1023, 0) | 0;
    i7 = i7 + 1 | 0;
    if (i7 >>> 0 >= i5 >>> 0) {
     break L30;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i5 >> 2] = i13;
    break;
   }
   if ((HEAP32[i9 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i8 | 0;
 i13 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i9 >> 2] = i13;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCoreL24htmlAttributeEquivalentsEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if (HEAP8[H_BASE + 344 | 0] | 0) {
  i1 = HEAP32[H_BASE + 368 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(12) | 0;
  i3 = i2;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  HEAP32[H_BASE + 368 >> 2] = i3;
  HEAP8[H_BASE + 344 | 0] = 1;
  i1 = i3;
 }
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  i4 = HEAP32[H_BASE + 368 >> 2] | 0;
  return i4 | 0;
 }
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 i5 = i2;
 HEAP32[i2 + 4 >> 2] = 1;
 HEAP32[i2 + 8 >> 2] = 0;
 HEAP32[i2 + 12 >> 2] = __ZN7WebCore9HTMLNames7fontTagE;
 HEAP32[i2 >> 2] = H_BASE + 88;
 HEAP32[i2 + 16 >> 2] = __ZN7WebCore9HTMLNames9colorAttrE;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore23HTMLAttributeEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2 + 1 | 0);
  HEAP32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) >> 2] = i5;
 } else {
  HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 << 2) >> 2] = i5;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[H_BASE + 368 >> 2] | 0;
 i5 = __ZN3WTF10fastMallocEj(20) | 0;
 i2 = i5;
 HEAP32[i5 + 4 >> 2] = 5;
 HEAP32[i5 + 8 >> 2] = 0;
 HEAP32[i5 + 12 >> 2] = __ZN7WebCore9HTMLNames7fontTagE;
 HEAP32[i5 >> 2] = H_BASE + 88;
 HEAP32[i5 + 16 >> 2] = __ZN7WebCore9HTMLNames8faceAttrE;
 i5 = i3 + 8 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == (HEAP32[i3 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore23HTMLAttributeEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i1 + 1 | 0);
  HEAP32[(HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) >> 2] = i2;
 } else {
  HEAP32[(HEAP32[i3 >> 2] | 0) + (i1 << 2) >> 2] = i2;
 }
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[H_BASE + 368 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 HEAP32[i2 + 4 >> 2] = 6;
 HEAP32[i2 + 8 >> 2] = 0;
 HEAP32[i2 + 12 >> 2] = __ZN7WebCore9HTMLNames7fontTagE;
 HEAP32[i2 + 16 >> 2] = __ZN7WebCore9HTMLNames8sizeAttrE;
 HEAP32[i2 >> 2] = H_BASE + 136;
 i1 = i5 + 8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i5 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore23HTMLAttributeEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i3 + 1 | 0);
  HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i1 >> 2] << 2) >> 2] = i2;
 } else {
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i3 << 2) >> 2] = i2;
 }
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i1 = HEAP32[H_BASE + 368 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 i3 = i2;
 HEAP32[i2 + 4 >> 2] = 2;
 HEAP32[i2 + 8 >> 2] = 0;
 HEAP32[i2 + 12 >> 2] = 0;
 HEAP32[i2 >> 2] = H_BASE + 88;
 HEAP32[i2 + 16 >> 2] = __ZN7WebCore9HTMLNames7dirAttrE;
 i2 = i1 + 8 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore23HTMLAttributeEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i5 + 1 | 0);
  HEAP32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) >> 2] = i3;
 } else {
  HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 << 2) >> 2] = i3;
 }
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[H_BASE + 368 >> 2] | 0;
 i3 = __ZN3WTF10fastMallocEj(20) | 0;
 i5 = i3;
 HEAP32[i3 + 4 >> 2] = 159;
 HEAP32[i3 + 8 >> 2] = 0;
 HEAP32[i3 + 12 >> 2] = 0;
 HEAP32[i3 >> 2] = H_BASE + 88;
 HEAP32[i3 + 16 >> 2] = __ZN7WebCore9HTMLNames7dirAttrE;
 i3 = i2 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == (HEAP32[i2 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore23HTMLAttributeEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i1 + 1 | 0);
  HEAP32[(HEAP32[i2 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) >> 2] = i5;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  i4 = HEAP32[H_BASE + 368 >> 2] | 0;
  return i4 | 0;
 } else {
  HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 << 2) >> 2] = i5;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  i4 = HEAP32[H_BASE + 368 >> 2] | 0;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore12EditingStyle35elementIsStyledSpanOrHTMLEquivalentEPKNS_11HTMLElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
 L1 : do {
  if ((i3 | 0) == (i4 | 0)) {
   i5 = 1;
  } else {
   if ((HEAP32[i3 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
    if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
     i5 = 1;
     break;
    }
   }
   i6 = __ZN7WebCoreL22htmlElementEquivalentsEv() | 0;
   i7 = i6 + 8 | 0;
   i8 = i6 | 0;
   i6 = 0;
   while (1) {
    if (i6 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
     i5 = 0;
     break L1;
    }
    i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i6 << 2) >> 2] | 0;
    if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 15](i9, i2) | 0) {
     i5 = 1;
     break;
    } else {
     i6 = i6 + 1 | 0;
    }
   }
  }
 } while (0);
 if (!(__ZNK7WebCore7Element13hasAttributesEv(i2) | 0)) {
  i10 = i5;
  return i10 | 0;
 }
 i4 = __ZN7WebCoreL24htmlAttributeEquivalentsEv() | 0;
 i3 = i4 + 8 | 0;
 L13 : do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i11 = 0;
  } else {
   i6 = i4 | 0;
   i8 = 0;
   i7 = 0;
   while (1) {
    i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i7 << 2) >> 2] | 0;
    i12 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 15](i9, i2) | 0;
    i9 = HEAP32[i3 >> 2] | 0;
    if (i12) {
     if (i9 >>> 0 <= i7 >>> 0) {
      break;
     }
     i13 = ((HEAP32[HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + (i7 << 2) >> 2] | 0) + 16 >> 2] >> 2] | 0) != (HEAP32[__ZN7WebCore9HTMLNames7dirAttrE >> 2] | 0)) + i8 | 0;
    } else {
     i13 = i8;
    }
    i12 = i7 + 1 | 0;
    if (i12 >>> 0 < i9 >>> 0) {
     i8 = i13;
     i7 = i12;
    } else {
     i11 = i13;
     break L13;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
 } while (0);
 if ((i11 | 0) == 0 & (i5 ^ 1)) {
  i10 = 0;
  return i10 | 0;
 }
 i5 = ((__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore9HTMLNames9classAttrE) | 0) >> 2] | 0, H_BASE + 8 | 0) | 0) & 1) + i11 | 0;
 i11 = __ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore9HTMLNames9styleAttrE) | 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if (i11) {
  L28 : do {
   if ((i2 | 0) != 0) {
    i11 = HEAP32[i2 + 8 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i1 = HEAP32[i11 + 4 >> 2] | 0;
    i13 = (i1 & 4 | 0) == 0;
    if (i13) {
     i14 = i1 >>> 3;
    } else {
     i14 = HEAP32[i11 + 16 >> 2] | 0;
    }
    if ((i14 | 0) == 0) {
     break;
    }
    i3 = i11 + 8 | 0;
    i4 = i3 + (i1 >>> 3 << 2) | 0;
    i1 = i11 + 16 | 0;
    i11 = i3;
    i3 = 0;
    L36 : while (1) {
     if (i13) {
      i15 = i4 + (i3 << 1) | 0;
     } else {
      if ((HEAP32[i1 >> 2] | 0) >>> 0 <= i3 >>> 0) {
       i16 = 26;
       break;
      }
      i15 = (HEAP32[i11 >> 2] | 0) + (i3 << 3) | 0;
     }
     i7 = HEAP16[i15 >> 1] & 1023;
     i8 = 0;
     while (1) {
      if (i8 >>> 0 >= 21 >>> 0) {
       i10 = 0;
       i16 = 41;
       break L36;
      }
      if ((HEAP32[H_BASE + 248 + (i8 << 2) >> 2] | 0) == (i7 | 0)) {
       break;
      } else {
       i8 = i8 + 1 | 0;
      }
     }
     i3 = i3 + 1 | 0;
     if (i3 >>> 0 >= i14 >>> 0) {
      break L28;
     }
    }
    if ((i16 | 0) == 26) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    } else if ((i16 | 0) == 41) {
     return i10 | 0;
    }
   }
  } while (0);
  i17 = i5 + 1 | 0;
 } else {
  i17 = i5;
 }
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i18 = i5 >>> 1 & 134217727;
 } else {
  i18 = HEAP32[i2 + 32 >> 2] | 0;
 }
 i10 = i17 >>> 0 >= i18 >>> 0;
 return i10 | 0;
}
function __ZNK7WebCore12EditingStyle43extractConflictingImplicitStyleOfAttributesEPNS_11HTMLElementENS0_30ShouldPreserveWritingDirectionEPS0_RN3WTF6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEENS0_26ShouldExtractMatchingStyleE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i7 = i1 + 4 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i1 = __ZN7WebCoreL24htmlAttributeEquivalentsEv() | 0;
 i9 = i1 + 8 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i10 = i1 | 0;
 i1 = i2 | 0;
 i2 = (i6 | 0) == 1;
 i6 = (i4 | 0) == 0;
 i11 = i5 + 8 | 0;
 i12 = i5 + 4 | 0;
 i13 = i5 | 0;
 if ((i3 | 0) == 0) {
  i14 = 0;
  i15 = 0;
 } else {
  i3 = 0;
  i16 = 0;
  while (1) {
   i17 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i16 << 2) >> 2] | 0;
   do {
    if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 15](i17, i1) | 0) {
     if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] & 15](i17 | 0, HEAP32[i7 >> 2] | 0) | 0)) {
      i18 = i3;
      break;
     }
     if (i2) {
      if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 7](i17, i1, HEAP32[i7 >> 2] | 0) | 0) {
       i18 = i3;
       break;
      }
     }
     if (!i6) {
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 24 >> 2] & 31](i17, i1, i4);
     }
     i19 = HEAP32[i17 + 16 >> 2] | 0;
     i20 = HEAP32[i11 >> 2] | 0;
     if ((i20 | 0) == (HEAP32[i12 >> 2] | 0)) {
      __ZN3WTF6VectorIN7WebCore13QualifiedNameELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i5, i19);
      i18 = 1;
      break;
     } else {
      i21 = HEAP32[i19 >> 2] | 0;
      HEAP32[(HEAP32[i13 >> 2] | 0) + (i20 << 2) >> 2] = i21;
      i20 = i21 | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
      HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
      i18 = 1;
      break;
     }
    } else {
     i18 = i3;
    }
   } while (0);
   i17 = i16 + 1 | 0;
   if (i17 >>> 0 < (HEAP32[i9 >> 2] | 0) >>> 0) {
    i3 = i18;
    i16 = i17;
   } else {
    i8 = i18;
    break;
   }
  }
  return i8 | 0;
 }
 while (1) {
  i18 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i15 << 2) >> 2] | 0;
  do {
   if ((HEAP32[HEAP32[i18 + 16 >> 2] >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames7dirAttrE >> 2] | 0)) {
    i22 = i14;
   } else {
    if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 15](i18, i1) | 0)) {
     i22 = i14;
     break;
    }
    if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i18 >> 2] | 0) + 16 >> 2] & 15](i18 | 0, HEAP32[i7 >> 2] | 0) | 0)) {
     i22 = i14;
     break;
    }
    if (i2) {
     if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] & 7](i18, i1, HEAP32[i7 >> 2] | 0) | 0) {
      i22 = i14;
      break;
     }
    }
    if (!i6) {
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i18 >> 2] | 0) + 24 >> 2] & 31](i18, i1, i4);
    }
    i16 = HEAP32[i18 + 16 >> 2] | 0;
    i3 = HEAP32[i11 >> 2] | 0;
    if ((i3 | 0) == (HEAP32[i12 >> 2] | 0)) {
     __ZN3WTF6VectorIN7WebCore13QualifiedNameELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i5, i16);
     i22 = 1;
     break;
    } else {
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[(HEAP32[i13 >> 2] | 0) + (i3 << 2) >> 2] = i17;
     i3 = i17 | 0;
     HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
     i22 = 1;
     break;
    }
   }
  } while (0);
  i18 = i15 + 1 | 0;
  if (i18 >>> 0 < (HEAP32[i9 >> 2] | 0) >>> 0) {
   i14 = i22;
   i15 = i18;
  } else {
   i8 = i22;
   break;
  }
 }
 return i8 | 0;
}
function __ZN7WebCore12EditingStyle22removeStyleAddedByNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i7 | 0;
 HEAP32[i11 >> 2] = i10;
 i12 = i10 + 8 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i6, i7, 0, 0);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 + 8 | 0;
   i12 = i11 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore22ComputedStyleExtractor19copyPropertiesInSetEPKNS_13CSSPropertyIDEj(i8, i6, H_BASE + 248 | 0, 21);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 8 | 0;
   i11 = i6 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i7 = i8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i2;
 i6 = i2 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i4, i5, 0, 0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 8 | 0;
   i6 = i7 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore22ComputedStyleExtractor19copyPropertiesInSetEPKNS_13CSSPropertyIDEj(i9, i4, H_BASE + 248 | 0, 21);
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i7 = i4 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i5 = i9 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore22MutableStyleProperties26removeEquivalentPropertiesEPKNS_15StylePropertiesE(i9, i8 | 0);
 __ZN7WebCore22MutableStyleProperties26removeEquivalentPropertiesEPKNS_15StylePropertiesE(HEAP32[i1 + 4 >> 2] | 0, i9 | 0);
 do {
  if ((i9 | 0) != 0) {
   i1 = i9 | 0;
   i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i1 >> 2] = i5;
    break;
   }
   if ((HEAP32[i9 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i8 | 0;
 i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i9 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12EditingStyle29wrappingStyleForSerializationEPNS_4NodeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZN3WTF10fastMallocEj(16) | 0;
 i8 = i7;
 HEAP32[i7 >> 2] = 1;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP8[i7 + 8 | 0] = 0;
 HEAPF32[i7 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 if (!i3) {
  L3 : do {
   if ((i2 | 0) != 0) {
    i3 = i2;
    while (1) {
     if ((HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i3 | 0)) {
      break L3;
     }
     do {
      if ((HEAP32[i3 + 12 >> 2] & 8 | 0) != 0) {
       if (__ZN7WebCore16isMailBlockquoteEPKNS_4NodeE(i3) | 0) {
        break;
       }
       __ZN7WebCore12EditingStyle36mergeInlineAndImplicitStyleOfElementEPNS_13StyledElementENS0_23CSSPropertyOverrideModeENS0_19PropertiesToIncludeE(i8, i3, 1, 2);
      }
     } while (0);
     i7 = HEAP32[i3 + 16 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     } else {
      i3 = i7 | 0;
     }
    }
   }
  } while (0);
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore12EditingStyle4initEPNS_4NodeENS0_19PropertiesToIncludeE(i8, i2, 2);
 do {
  if ((i2 | 0) == 0) {
   HEAP32[i6 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   i3 = i6 + 8 | 0;
   i7 = i3;
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i9 & -8;
   HEAP8[i3] = i9 & 255 & -16;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 7](i2) | 0) {
    __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i6, i2);
    break;
   }
   i9 = i5 | 0;
   HEAP32[i9 >> 2] = i2;
   i3 = i2 + 8 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i6, i5, 1);
   i3 = HEAP32[i9 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i9 = i3 + 8 | 0;
   i3 = i9 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12EditingStyle22removeStyleAddedByNodeEPNS_4NodeE(i8, __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i6, F_BASE_ii + 4 | 0, 0) | 0);
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   i2 = i6 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore12EditingStyle32collapseTextDecorationPropertiesEv(i8);
 HEAP32[i1 >> 2] = i8;
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL23backgroundColorInEffectEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 L1 : do {
  if ((i2 | 0) != 0) {
   i7 = i6 | 0;
   i8 = i4 | 0;
   i9 = i5 | 0;
   i10 = i2;
   L3 : while (1) {
    HEAP32[i7 >> 2] = i10;
    i11 = i10 + 8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i5, i6, 0, 0);
    __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i4, i5, 23, 1);
    i12 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    i11 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i13 = i11 + 8 | 0;
      i14 = i13 | 0;
      i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      HEAP32[i14 >> 2] = i15;
      if ((i15 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
     }
    } while (0);
    i11 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i13 = i11 + 8 | 0;
      i15 = i13 | 0;
      i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
      HEAP32[i15 >> 2] = i14;
      if ((i14 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
     }
    } while (0);
    do {
     if ((i12 | 0) != 0) {
      i11 = HEAP32[i12 + 4 >> 2] | 0;
      if ((i11 & 516096 | 0) != 0) {
       break L3;
      }
      i13 = i11 & 508;
      if ((i13 | 0) == 100) {
       if ((HEAP32[i12 + 8 >> 2] | 0) >>> 0 >= 16777216 >>> 0) {
        break L3;
       }
      } else if ((i13 | 0) == 472) {
       if ((HEAP32[i12 + 8 >> 2] | 0) != 90) {
        break L3;
       }
      } else {
       break L3;
      }
      i13 = i12 | 0;
      i11 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      if ((i11 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i12);
       break;
      } else {
       HEAP32[i13 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i10 + 16 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L1;
    } else {
     i10 = i11 | 0;
    }
   }
   HEAP32[i1 >> 2] = i12;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL31styleFromMatchedRulesForElementEPNS_7ElementEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i5, 0);
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i8 = i5 + 320 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i5);
  i10 = HEAP32[i8 >> 2] | 0;
 } else {
  i10 = i9;
 }
 __ZN7WebCore13StyleResolver20styleRulesForElementEPNS_7ElementEj(i6, i10, i2, i3);
 i3 = i6 + 8 | 0;
 i2 = i6 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   HEAP32[i1 >> 2] = i7;
  } else {
   i10 = 0;
   while (1) {
    i9 = HEAP32[(HEAP32[i2 >> 2] | 0) + (i10 << 2) >> 2] | 0;
    do {
     if ((HEAP32[i9 + 4 >> 2] & 31 | 0) == 1) {
      if ((i9 | 0) == 0) {
       __ZN7WebCore22MutableStyleProperties26mergeAndOverrideOnConflictERKNS_15StylePropertiesE(i7, HEAP32[i9 + 8 >> 2] | 0);
       break;
      }
      i8 = i9 | 0;
      HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
      __ZN7WebCore22MutableStyleProperties26mergeAndOverrideOnConflictERKNS_15StylePropertiesE(i7, HEAP32[i9 + 8 >> 2] | 0);
      i8 = i9 | 0;
      i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i5 | 0) == 0) {
       __ZN7WebCore13StyleRuleBase7destroyEv(i9);
       break;
      } else {
       HEAP32[i8 >> 2] = i5;
       break;
      }
     }
    } while (0);
    i10 = i10 + 1 | 0;
    i11 = HEAP32[i3 >> 2] | 0;
    if (i10 >>> 0 >= i11 >>> 0) {
     break;
    }
   }
   HEAP32[i1 >> 2] = i7;
   if ((i11 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i2 >> 2] | 0;
   i9 = i10 + (i11 << 2) | 0;
   i5 = i10;
   while (1) {
    i10 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i8 = i10 | 0;
      i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i12 | 0) == 0) {
       __ZN7WebCore13StyleRuleBase7destroyEv(i10);
       break;
      } else {
       HEAP32[i8 >> 2] = i12;
       break;
      }
     }
    } while (0);
    i5 = i5 + 4 | 0;
    if ((i5 | 0) == (i9 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL19diffTextDecorationsEPNS_22MutableStylePropertiesENS_13CSSPropertyIDEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i6, i8, i2);
 i9 = i6 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if (!((HEAP32[i6 + 4 >> 2] & 491520) >>> 0 < 221185 >>> 0 | (i3 | 0) == 0)) {
   if ((HEAP32[i3 + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
    break;
   }
   __ZN7WebCore12CSSValueList4copyEv(i7, i6);
   i9 = i7 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = i3 + 16 | 0;
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i11 = i3 + 8 | 0;
    i12 = 0;
    while (1) {
     __ZN7WebCore12CSSValueList9removeAllEPNS_8CSSValueE(i10, HEAP32[(HEAP32[i11 >> 2] | 0) + (i12 << 2) >> 2] | 0) | 0;
     i12 = i12 + 1 | 0;
     if (i12 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
   do {
    if ((HEAP32[i10 + 16 >> 2] | 0) == 0) {
     __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i1, i2, 0) | 0;
    } else {
     __ZNK7WebCore8CSSValue7cssTextEv(i5, i10 | 0);
     __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i1, i2, i5, __ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(i8, i2) | 0, 0) | 0;
     i9 = HEAP32[i5 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i12 = i9 | 0;
     i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i12 >> 2] = i11;
      break;
     }
    }
   } while (0);
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i10 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i10 | 0);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = i6 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore12EditingStyle29extractAndRemoveTextDirectionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN3WTF10fastMallocEj(16) | 0;
 i7 = i6;
 i8 = i6;
 HEAP32[i8 >> 2] = 1;
 i9 = i6 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP8[i6 + 8 | 0] = 0;
 HEAPF32[i6 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i4, 0);
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i4 >> 2] = i11;
    break;
   }
   if ((HEAP32[i10 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i2 + 4 | 0;
 __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(i10, 159, 327, __ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(HEAP32[i11 >> 2] | 0, 159) | 0) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i5, HEAP32[i11 >> 2] | 0, 2);
 __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i10, 2, i5, __ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(HEAP32[i11 >> 2] | 0, 2) | 0, 0) | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i5 = i10 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i5 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i11 >> 2] | 0, 159, 0) | 0;
 __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i11 >> 2] | 0, 2, 0) | 0;
 HEAP32[i1 >> 2] = i7;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 __ZN3WTF10RefCountedIN7WebCore12EditingStyleEE5derefEv(i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12EditingStyle25mergeInlineStyleOfElementEPNS_13StyledElementENS0_23CSSPropertyOverrideModeENS0_19PropertiesToIncludeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = HEAP32[i8 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((i4 | 0) == 0) {
  __ZN7WebCore12EditingStyle10mergeStyleEPKNS_15StylePropertiesENS0_23CSSPropertyOverrideModeE(i1, i2, i3);
  STACKTOP = i5;
  return;
 } else if ((i4 | 0) == 1) {
  __ZNK7WebCore15StyleProperties19copyPropertiesInSetEPKNS_13CSSPropertyIDEj(i6, i2, H_BASE + 248 | 0, 19);
  i8 = HEAP32[i6 >> 2] | 0;
  __ZN7WebCore12EditingStyle10mergeStyleEPKNS_15StylePropertiesENS0_23CSSPropertyOverrideModeE(i1, i8 | 0, i3);
  if ((i8 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i6 = i8 | 0;
  i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) != 0) {
   HEAP32[i6 >> 2] = i9;
   STACKTOP = i5;
   return;
  }
  if ((HEAP32[i8 + 4 >> 2] & 4 | 0) == 0) {
   __ZN7WebCore24ImmutableStylePropertiesD1Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
   STACKTOP = i5;
   return;
  } else {
   __ZN7WebCore22MutableStylePropertiesD1Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
   STACKTOP = i5;
   return;
  }
 } else if ((i4 | 0) == 2) {
  __ZNK7WebCore15StyleProperties19copyPropertiesInSetEPKNS_13CSSPropertyIDEj(i7, i2, H_BASE + 248 | 0, 21);
  i2 = i7 | 0;
  __ZN7WebCore12EditingStyle10mergeStyleEPKNS_15StylePropertiesENS0_23CSSPropertyOverrideModeE(i1, HEAP32[i2 >> 2] | 0, i3);
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i2 = i3 | 0;
  i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i1 | 0) != 0) {
   HEAP32[i2 >> 2] = i1;
   STACKTOP = i5;
   return;
  }
  if ((HEAP32[i3 + 4 >> 2] & 4 | 0) == 0) {
   __ZN7WebCore24ImmutableStylePropertiesD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
   STACKTOP = i5;
   return;
  } else {
   __ZN7WebCore22MutableStylePropertiesD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
   STACKTOP = i5;
   return;
  }
 } else {
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore12EditingStyle19mergeStyleFromRulesEPNS_13StyledElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCoreL31styleFromMatchedRulesForElementEPNS_7ElementEj(i4, i2 | 0, 20);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i2 >> 2] = 0;
  } else {
   __ZN7WebCore22MutableStyleProperties26mergeAndOverrideOnConflictERKNS_15StylePropertiesE(i4, i5 | 0);
   i6 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   if ((HEAP32[i6 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 i1 = (i4 | 0) == 0;
 if (!i1) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i2 >> 2] = i6;
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   }
  }
 } while (0);
 if (i1) {
  STACKTOP = i3;
  return;
 }
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore12EditingStyle35styleIsPresentInComputedStyleOfNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i1 + 4 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i9 = i2 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i4, i5, 0, 0);
 i5 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 + 8 | 0;
   i9 = i1 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore18getPropertiesNotInINS_22ComputedStyleExtractorEEEN3WTF10PassRefPtrINS_22MutableStylePropertiesEEEPNS_15StylePropertiesEPT_(i6, HEAP32[i7 >> 2] | 0, i4);
 i7 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i7 + 4 >> 2] | 0;
 i5 = (i6 & 4 | 0) == 0;
 if (i5) {
  i10 = i6 >>> 3;
 } else {
  i10 = HEAP32[i7 + 16 >> 2] | 0;
 }
 i6 = (i10 | 0) == 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i10 >> 2] = i1;
    break;
   }
   if (i5) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = i6;
  STACKTOP = i3;
  return i8 | 0;
 }
 i4 = i7 + 8 | 0;
 i7 = i4 | 0;
 i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i8 = i6;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i8 = i6;
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i8 = i6;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZNK7WebCore12EditingStyle13textDirectionER16WritingDirection(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i4, i1 | 0, 159);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i4 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 do {
  if ((HEAP32[i4 + 4 >> 2] & 516604 | 0) == 472) {
   i1 = HEAP32[i4 + 8 >> 2] | 0;
   if ((i1 | 0) == 32) {
    HEAP32[i2 >> 2] = 0;
    i8 = 1;
    break;
   } else if ((i1 | 0) != 327) {
    i8 = 0;
    break;
   }
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, HEAP32[i6 >> 2] | 0, 2);
   i1 = i5 | 0;
   i9 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   if ((i9 | 0) == 0) {
    i8 = 0;
    break;
   }
   i1 = HEAP32[i9 + 4 >> 2] | 0;
   do {
    if ((i1 & 516096 | 0) == 0) {
     if ((i1 & 508 | 0) == 472) {
      HEAP32[i2 >> 2] = (HEAP32[i9 + 8 >> 2] | 0) == 304 ? 1 : 2;
      i10 = 1;
      break;
     } else {
      HEAP32[i2 >> 2] = 2;
      i10 = 1;
      break;
     }
    } else {
     i10 = 0;
    }
   } while (0);
   i1 = i9 | 0;
   i11 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i9);
    i8 = i10;
    break;
   } else {
    HEAP32[i1 >> 2] = i11;
    i8 = i10;
    break;
   }
  } else {
   i8 = 0;
  }
 } while (0);
 i10 = i4 | 0;
 i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i4);
  i7 = i8;
  STACKTOP = i3;
  return i7 | 0;
 } else {
  HEAP32[i10 >> 2] = i2;
  i7 = i8;
  STACKTOP = i3;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore12EditingStyle32collapseTextDecorationPropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i3, i1 | 0, 335);
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 L7 : do {
  if ((HEAP32[i3 + 4 >> 2] & 491520) >>> 0 > 221184 >>> 0) {
   __ZNK7WebCore8CSSValue7cssTextEv(i4, i3);
   __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i1, 133, i4, __ZNK7WebCore15StyleProperties19propertyIsImportantENS_13CSSPropertyIDE(HEAP32[i5 >> 2] | 0, 133) | 0, 0) | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i7 = i6 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      i9 = 10;
      break L7;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i5 >> 2] | 0, 335, 0) | 0;
  } else {
   __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i1, 133, 0) | 0;
   i9 = 10;
  }
 } while (0);
 if ((i9 | 0) == 10) {
  __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i5 >> 2] | 0, 335, 0) | 0;
 }
 i5 = i3 | 0;
 i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i9;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore12EditingStyle35conflictsWithImplicitStyleOfElementEPNS_11HTMLElementEPS0_NS0_26ShouldExtractMatchingStyleE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = i1 + 4 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = __ZN7WebCoreL22htmlElementEquivalentsEv() | 0;
 i7 = i1 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i8 = i1 | 0;
 i1 = i2 | 0;
 L7 : do {
  if ((i4 | 0) == 0) {
   i2 = 0;
   while (1) {
    i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i2 << 2) >> 2] | 0;
    if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 15](i9, i1) | 0) {
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 15](i9, HEAP32[i5 >> 2] | 0) | 0) {
      i10 = i9;
      break L7;
     }
    }
    i9 = i2 + 1 | 0;
    if (i9 >>> 0 < (HEAP32[i7 >> 2] | 0) >>> 0) {
     i2 = i9;
    } else {
     i6 = 0;
     break;
    }
   }
   return i6 | 0;
  } else {
   i2 = 0;
   while (1) {
    i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i2 << 2) >> 2] | 0;
    do {
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 15](i9, i1) | 0) {
      if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 15](i9, HEAP32[i5 >> 2] | 0) | 0)) {
       break;
      }
      if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 7](i9, i1, HEAP32[i5 >> 2] | 0) | 0)) {
       i10 = i9;
       break L7;
      }
     }
    } while (0);
    i9 = i2 + 1 | 0;
    if (i9 >>> 0 < (HEAP32[i7 >> 2] | 0) >>> 0) {
     i2 = i9;
    } else {
     i6 = 0;
     break;
    }
   }
   return i6 | 0;
  }
 } while (0);
 if ((i3 | 0) == 0) {
  i6 = 1;
  return i6 | 0;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 24 >> 2] & 31](i10, i1, i3);
 i6 = 1;
 return i6 | 0;
}
function __ZN7WebCore12EditingStyle20extractFontSizeDeltaEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i3, i6 | 0, 6);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i3 = i6 | 0;
  i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore8CSSValue7destroyEv(i6);
  } else {
   HEAP32[i3 >> 2] = i7;
  }
  __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i5 >> 2] | 0, 249, 0) | 0;
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i4, HEAP32[i5 >> 2] | 0, 249);
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 do {
  if ((HEAP32[i4 + 4 >> 2] & 516096 | 0) == 0) {
   i7 = i4;
   if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i7) | 0) << 16 >> 16 != 5) {
    break;
   }
   d8 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i7);
   do {
    if (d8 < 3.4028234663852886e+38) {
     if (d8 <= -3.4028234663852886e+38) {
      d9 = -3.4028234663852886e+38;
      break;
     }
     d9 = d8;
    } else {
     d9 = 3.4028234663852886e+38;
    }
   } while (0);
   HEAPF32[i1 + 12 >> 2] = d9;
   __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i5 >> 2] | 0, 249, 0) | 0;
  }
 } while (0);
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore12EditingStyle38conflictsWithImplicitStyleOfAttributesEPNS_11HTMLElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = __ZN7WebCoreL24htmlAttributeEquivalentsEv() | 0;
 i5 = i1 + 8 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i6 = i1 | 0;
 i1 = i2 | 0;
 i2 = 0;
 L7 : while (1) {
  i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  do {
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 15](i7, i1) | 0) {
    if ((HEAP32[i5 >> 2] | 0) >>> 0 <= i2 >>> 0) {
     i8 = 6;
     break L7;
    }
    i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i2 << 2) >> 2] | 0;
    if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 15](i9 | 0, HEAP32[i3 >> 2] | 0) | 0)) {
     break;
    }
    if ((HEAP32[i5 >> 2] | 0) >>> 0 <= i2 >>> 0) {
     i8 = 9;
     break L7;
    }
    i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i2 << 2) >> 2] | 0;
    if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 7](i9, i1, HEAP32[i3 >> 2] | 0) | 0)) {
     i4 = 1;
     i8 = 15;
     break L7;
    }
   }
  } while (0);
  i7 = i2 + 1 | 0;
  if (i7 >>> 0 < (HEAP32[i5 >> 2] | 0) >>> 0) {
   i2 = i7;
  } else {
   i4 = 0;
   i8 = 16;
   break;
  }
 }
 if ((i8 | 0) == 16) {
  return i4 | 0;
 } else if ((i8 | 0) == 15) {
  return i4 | 0;
 } else if ((i8 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i8 | 0) == 9) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore12EditingStyle31extractAndRemoveBlockPropertiesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN3WTF10fastMallocEj(16) | 0;
 i6 = i5;
 i7 = i5;
 HEAP32[i7 >> 2] = 1;
 i8 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP8[i5 + 8 | 0] = 0;
 HEAPF32[i5 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 i9 = i2 + 4 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP32[i1 >> 2] = i6;
   if ((i5 | 0) != 0) {
    i10 = 2;
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   __ZNK7WebCore15StyleProperties19copyBlockPropertiesEv(i4, i2 | 0);
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i12 >> 2] = i13;
      break;
     }
     if ((HEAP32[i11 + 4 >> 2] & 4 | 0) == 0) {
      __ZN7WebCore24ImmutableStylePropertiesD1Ev(i11);
      __ZN3WTF8fastFreeEPv(i11);
      break;
     } else {
      __ZN7WebCore22MutableStylePropertiesD1Ev(i11);
      __ZN3WTF8fastFreeEPv(i11);
      break;
     }
    }
   } while (0);
   __ZN7WebCore22MutableStyleProperties21removeBlockPropertiesEv(HEAP32[i9 >> 2] | 0);
   HEAP32[i1 >> 2] = i6;
   if ((i5 | 0) == 0) {
    STACKTOP = i3;
    return;
   } else {
    i10 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = i10;
 __ZN3WTF10RefCountedIN7WebCore12EditingStyleEE5derefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore28HTMLTextDecorationEquivalent21valueIsPresentInStyleEPNS_7ElementEPNS_15StylePropertiesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, i3, 335);
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i5 | 0) == 0) {
  __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i6, i3, 133);
  i3 = i6 | 0;
  i6 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  i8 = i6;
 } else {
  i8 = i5;
 }
 do {
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 15](i1 | 0, i2) | 0) {
   if ((i8 | 0) == 0) {
    i9 = 0;
    STACKTOP = i4;
    return i9 | 0;
   }
   if ((HEAP32[i8 + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
    i10 = 0;
    break;
   }
   i11 = __ZNK7WebCore12CSSValueList8hasValueEPNS_8CSSValueE(i8, HEAP32[i1 + 8 >> 2] | 0) | 0;
   i12 = 7;
  } else {
   i11 = 0;
   i12 = 7;
  }
 } while (0);
 do {
  if ((i12 | 0) == 7) {
   if ((i8 | 0) == 0) {
    i9 = i11;
   } else {
    i10 = i11;
    break;
   }
   STACKTOP = i4;
   return i9 | 0;
  }
 } while (0);
 i11 = i8 | 0;
 i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i8);
  i9 = i10;
  STACKTOP = i4;
  return i9 | 0;
 } else {
  HEAP32[i11 >> 2] = i12;
  i9 = i10;
  STACKTOP = i4;
  return i9 | 0;
 }
 return 0;
}
function __ZNK7WebCore21HTMLElementEquivalent21valueIsPresentInStyleEPNS_7ElementEPNS_15StylePropertiesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i5, i3, HEAP32[i1 + 4 >> 2] | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 15](i1, i2) | 0) {
   if ((i5 | 0) == 0) {
    i6 = 0;
    STACKTOP = i4;
    return i6 | 0;
   }
   i3 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i3 & 516096 | 0) != 0) {
    i7 = 0;
    break;
   }
   if ((i3 & 508 | 0) == 472) {
    i8 = HEAP32[i5 + 8 >> 2] | 0;
   } else {
    i8 = 0;
   }
   i3 = HEAP32[i1 + 8 >> 2] | 0;
   if ((HEAP32[i3 + 4 >> 2] & 508 | 0) == 472) {
    i9 = HEAP32[i3 + 8 >> 2] | 0;
   } else {
    i9 = 0;
   }
   i10 = (i8 | 0) == (i9 | 0);
   i11 = 9;
  } else {
   i10 = 0;
   i11 = 9;
  }
 } while (0);
 do {
  if ((i11 | 0) == 9) {
   if ((i5 | 0) == 0) {
    i6 = i10;
   } else {
    i7 = i10;
    break;
   }
   STACKTOP = i4;
   return i6 | 0;
  }
 } while (0);
 i10 = i5 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i5);
  i6 = i7;
  STACKTOP = i4;
  return i6 | 0;
 } else {
  HEAP32[i10 >> 2] = i11;
  i6 = i7;
  STACKTOP = i4;
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore12EditingStyle14legacyFontSizeEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i4, HEAP32[i1 + 4 >> 2] | 0, 6);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 do {
  if ((i5 & 516096 | 0) == 0) {
   i7 = (HEAP8[i1 + 8 | 0] & 1) != 0;
   if (((i5 >>> 2 & 127) - 5 | 0) >>> 0 >= 6 >>> 0) {
    if ((i5 & 508 | 0) != 472) {
     i8 = 0;
     break;
    }
    i9 = HEAP32[i4 + 8 >> 2] | 0;
    i8 = (i9 - 46 | 0) >>> 0 < 7 >>> 0 ? i9 - 45 | 0 : 0;
    break;
   }
   d10 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i4, 5);
   do {
    if (d10 < +2147483647) {
     if (d10 <= +-2147483648) {
      i11 = -2147483648;
      break;
     }
     i11 = ~~d10;
    } else {
     i11 = 2147483647;
    }
   } while (0);
   i8 = __ZN7WebCore5Style26legacyFontSizeForPixelSizeEibRKNS_8DocumentE(i11, i7, i2) | 0;
  } else {
   i8 = 0;
  }
 } while (0);
 i2 = i4 | 0;
 i11 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i4);
  i6 = i8;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i2 >> 2] = i11;
  i6 = i8;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 1 | 0) == 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 3);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i5 + 8 | 0;
  i5 = i6 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 } else {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, 0, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i4 + 8 | 0;
  i4 = i6 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore12EditingStyle15triStateOfStyleINS_22ComputedStyleExtractorEEEN3WTF8TriStateEPT_NS0_30ShouldIgnoreTextOnlyPropertiesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 4 | 0;
 __ZN7WebCore18getPropertiesNotInINS_22ComputedStyleExtractorEEEN3WTF10PassRefPtrINS_22MutableStylePropertiesEEEPNS_15StylePropertiesEPT_(i5, HEAP32[i6 >> 2] | 0, i2);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i5, H_BASE + 224 | 0, 5) | 0;
 }
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 i2 = (i3 & 4 | 0) == 0;
 if (i2) {
  i7 = i3 >>> 3;
 } else {
  i7 = HEAP32[i5 + 16 >> 2] | 0;
 }
 if ((i7 | 0) == 0) {
  i8 = 1;
 } else {
  i8 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) ? 0 : 2;
 }
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i8 | 0;
 }
 i6 = i5 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = i7;
  STACKTOP = i4;
  return i8 | 0;
 }
 if (i2) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return i8 | 0;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return i8 | 0;
 }
 return 0;
}
function __ZNK7WebCore12EditingStyle4copyEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN3WTF10fastMallocEj(16) | 0;
 i6 = i5;
 i7 = i5;
 HEAP32[i7 >> 2] = 1;
 i8 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i5 + 8 | 0;
 HEAP8[i9] = 0;
 i10 = i5 + 12 | 0;
 HEAPF32[i10 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 i11 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, i11 | 0);
   i12 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = i12 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i13 >> 2] = i14;
    break;
   }
   if ((HEAP32[i12 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   }
  }
 } while (0);
 HEAP8[i9] = HEAP8[i2 + 8 | 0] & 1;
 HEAPF32[i10 >> 2] = +HEAPF32[i2 + 12 >> 2];
 HEAP32[i1 >> 2] = i6;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 __ZN3WTF10RefCountedIN7WebCore12EditingStyleEE5derefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore12EditingStyle15triStateOfStyleINS_22MutableStylePropertiesEEEN3WTF8TriStateEPT_NS0_30ShouldIgnoreTextOnlyPropertiesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 4 | 0;
 __ZN7WebCore18getPropertiesNotInINS_22MutableStylePropertiesEEEN3WTF10PassRefPtrIS1_EEPNS_15StylePropertiesEPT_(i5, HEAP32[i6 >> 2] | 0, i2);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i5, H_BASE + 224 | 0, 5) | 0;
 }
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 i2 = (i3 & 4 | 0) == 0;
 if (i2) {
  i7 = i3 >>> 3;
 } else {
  i7 = HEAP32[i5 + 16 >> 2] | 0;
 }
 if ((i7 | 0) == 0) {
  i8 = 1;
 } else {
  i8 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) ? 0 : 2;
 }
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return i8 | 0;
 }
 i6 = i5 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = i7;
  STACKTOP = i4;
  return i8 | 0;
 }
 if (i2) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return i8 | 0;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i4;
  return i8 | 0;
 }
 return 0;
}
function runPostSets() {
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_viii + 18;
}
function __ZNK7WebCore28HTMLTextDecorationEquivalent21propertyExistsInStyleEPKNS_15StylePropertiesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i3, i2, 335);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i4, i2, 133);
   i6 = HEAP32[i4 >> 2] | 0;
   i7 = (i6 | 0) != 0;
   do {
    if ((i6 | 0) != 0) {
     i8 = i6 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i6);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i10 = i7;
   } else {
    i11 = i6;
    i12 = i7;
    break;
   }
   STACKTOP = i1;
   return i10 | 0;
  } else {
   i11 = i3;
   i12 = 1;
  }
 } while (0);
 i3 = i11 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i11);
  i10 = i12;
  STACKTOP = i1;
  return i10 | 0;
 } else {
  HEAP32[i3 >> 2] = i5;
  i10 = i12;
  STACKTOP = i1;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCoreL23removePropertiesInStyleEPNS_22MutableStylePropertiesEPNS_15StylePropertiesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 4 | 0) == 0) {
  i5 = i4 >>> 3;
 } else {
  i5 = HEAP32[i2 + 16 >> 2] | 0;
 }
 if ((i5 | 0) == 0) {
  __ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i1, 0, i5) | 0;
  return;
 }
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i4 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0) | 0;
 i6 = i4;
 i7 = i2 + 8 | 0;
 i8 = i7;
 i9 = i2 + 16 | 0;
 i2 = i7;
 i7 = 0;
 while (1) {
  i10 = HEAP32[i3 >> 2] | 0;
  if ((i10 & 4 | 0) == 0) {
   i11 = i8 + (i10 >>> 3 << 2) + (i7 << 1) | 0;
  } else {
   if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i7 >>> 0) {
    i12 = 11;
    break;
   }
   i11 = (HEAP32[i2 >> 2] | 0) + (i7 << 3) | 0;
  }
  HEAP32[i6 + (i7 << 2) >> 2] = HEAP16[i11 >> 1] & 1023;
  i7 = i7 + 1 | 0;
  if (i7 >>> 0 >= i5 >>> 0) {
   break;
  }
 }
 if ((i12 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN7WebCore22MutableStyleProperties21removePropertiesInSetEPKNS_13CSSPropertyIDEj(i1, i6, i5) | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZNK7WebCore23HTMLAttributeEquivalent24attributeValueAsCSSValueEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 + 16 | 0;
 if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i3, HEAP32[i6 >> 2] | 0) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i5, 0);
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = i2 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i7, i2, __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i3, HEAP32[i6 >> 2] | 0) | 0, 0, 0) | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i1, i7 | 0, HEAP32[i5 >> 2] | 0);
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i7 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i4;
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore13QualifiedNameELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore13QualifiedNameELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 2 << 2) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore13QualifiedNameELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i6;
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore23HTMLAttributeEquivalent21valueIsPresentInStyleEPNS_7ElementEPNS_15StylePropertiesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 31](i5, i1, i2);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i6, i3, HEAP32[i1 + 4 >> 2] | 0);
 i1 = i6 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = (i5 | 0) == 0;
 i3 = (i6 | 0) == 0;
 if (i1 | i3) {
  i7 = i1 & i3;
 } else {
  i7 = __ZNK7WebCore8CSSValue6equalsERKS0_(i5, i6) | 0;
 }
 do {
  if (!i3) {
   i2 = i6 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i6);
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (i1) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i1 = i5 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i5);
  STACKTOP = i4;
  return i7 | 0;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore12EditingStyle37removePropertiesInElementDefaultStyleEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i6 & 4 | 0) == 0) {
  i7 = i6 >>> 3;
 } else {
  i7 = HEAP32[i1 + 16 >> 2] | 0;
 }
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCoreL31styleFromMatchedRulesForElementEPNS_7ElementEj(i4, i2, 2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCoreL23removePropertiesInStyleEPNS_22MutableStylePropertiesEPNS_15StylePropertiesE(HEAP32[i5 >> 2] | 0, i4 | 0);
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore23HTMLAttributeEquivalent10addToStyleEPNS_7ElementEPNS_12EditingStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 31](i5, i1, i2);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 __ZNK7WebCore8CSSValue7cssTextEv(i6, i5);
 __ZN7WebCore12EditingStyle11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEb(i3, i2, i6, 0);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = i5 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore12EditingStyle11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 + 4 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i6, 0);
   i1 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   if ((i1 | 0) == 0) {
    break;
   }
   i8 = i1 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = i9;
    break;
   }
   if ((HEAP32[i1 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   }
  }
 } while (0);
 __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(HEAP32[i7 >> 2] | 0, i2, i3, i4, 0) | 0;
 STACKTOP = i5;
 return;
}
function __ZN3WTF6VectorIN7WebCore13QualifiedNameELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
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
   i2 = HEAP32[i6 >> 2] | 0;
   HEAP32[i7 >> 2] = i2;
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   __ZN7WebCore13QualifiedNameD1Ev(i6);
   i8 = i6 + 4 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
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
function __ZN7WebCore12EditingStyleC2EPKNS_15StylePropertiesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 do {
  if ((i2 | 0) != 0) {
   __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, i2);
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   if ((HEAP32[i6 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   }
  }
 } while (0);
 __ZN7WebCore12EditingStyle20extractFontSizeDeltaEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12EditingStyleC1EPKNS_15StylePropertiesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 do {
  if ((i2 | 0) != 0) {
   __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, i2);
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   if ((HEAP32[i6 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   }
  }
 } while (0);
 __ZN7WebCore12EditingStyle20extractFontSizeDeltaEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12EditingStyle11forceInlineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i3, 0);
   i1 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
   if ((i1 | 0) == 0) {
    break;
   }
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   if ((HEAP32[i1 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   }
  }
 } while (0);
 __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(HEAP32[i4 >> 2] | 0, 3, 247, 1) | 0;
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorINS_6OwnPtrIN7WebCore23HTMLAttributeEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6OwnPtrIN7WebCore21HTMLElementEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore22HTMLFontSizeEquivalent24attributeValueAsCSSValueEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 + 16 | 0;
 if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i3, HEAP32[i6 >> 2] | 0) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (__ZN7WebCore15HTMLFontElement26cssValueFromFontSizeNumberERKN3WTF6StringERNS_10CSSValueIDE(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i3, HEAP32[i6 >> 2] | 0) | 0, i5) | 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i5, i6);
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore13CSSPropertyIDELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore12EditingStyle8setStyleEN3WTF10PassRefPtrINS_22MutableStylePropertiesEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i2 >> 2] = i3;
    break;
   }
   if ((HEAP32[i4 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 8 | 0] = 0;
 __ZN7WebCore12EditingStyle20extractFontSizeDeltaEv(i1);
 return;
}
function __ZN7WebCore12EditingStyle37removeTextFillAndStrokeColorsIfNeededEPNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 + 24 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i2 + 20 | 0;
 if ((HEAP32[i4 >> 2] & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & 1 | 0) == 0) {
  __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i1 + 4 >> 2] | 0, 340, 0) | 0;
  i5 = HEAP32[i3 >> 2] | 0;
 } else {
  i5 = i2;
 }
 i2 = i5 + 8 | 0;
 if (!((HEAP32[i2 >> 2] & 0 | 0) == 0 & (HEAP32[i2 + 4 >> 2] & 1 | 0) == 0)) {
  return;
 }
 __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(HEAP32[i1 + 4 >> 2] | 0, 343, 0) | 0;
 return;
}
function __ZN3WTF10RefCountedIN7WebCore12EditingStyleEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   if ((HEAP32[i3 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore21HTMLElementEquivalent10addToStyleEPNS_7ElementEPNS_12EditingStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 __ZNK7WebCore8CSSValue7cssTextEv(i4, HEAP32[i1 + 8 >> 2] | 0);
 __ZN7WebCore12EditingStyle11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEb(i3, i5, i4, 0);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i5 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore23HTMLAttributeEquivalent7matchesEPKNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 44 >> 2] | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
   if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
    i6 = 0;
    return i6 | 0;
   }
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i6 = __ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i2, HEAP32[i1 + 16 >> 2] | 0) | 0;
 return i6 | 0;
}
function __ZNK7WebCore21HTMLElementEquivalent21propertyExistsInStyleEPKNS_15StylePropertiesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i4, i2, HEAP32[i1 + 4 >> 2] | 0);
 i1 = HEAP32[i4 >> 2] | 0;
 i4 = (i1 | 0) == 0;
 i2 = i4 ^ 1;
 if (i4) {
  STACKTOP = i3;
  return i2 | 0;
 }
 i4 = i1 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i1);
  STACKTOP = i3;
  return i2 | 0;
 } else {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i3;
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore12EditingStyle5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   if ((HEAP32[i3 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
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
function __ZN7WebCore12EditingStyle16mergeTypingStyleERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[(HEAP32[i2 + 332 >> 2] | 0) + 468 >> 2] | 0) + 116 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 if ((i3 | 0) != (i1 | 0)) {
  __ZN7WebCore12EditingStyle10mergeStyleEPKNS_15StylePropertiesENS0_23CSSPropertyOverrideModeE(i1, HEAP32[i3 + 4 >> 2] | 0, 0);
 }
 __ZN3WTF10RefCountedIN7WebCore12EditingStyleEE5derefEv(i3 | 0);
 return;
}
function __ZNK7WebCore21HTMLElementEquivalent7matchesEPKNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == (i2 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
 return i4 | 0;
}
function __ZN7WebCore12EditingStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
}
function __ZN7WebCore12EditingStyleD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
}
function __ZNK7WebCore12EditingStyle7isEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i3 & 4 | 0) == 0) {
    i4 = i3 >>> 3;
   } else {
    i4 = HEAP32[i2 + 16 >> 2] | 0;
   }
   if ((i4 | 0) == 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i5 = +HEAPF32[i1 + 12 >> 2] == +HEAPF32[H_BASE + 336 >> 2];
 return i5 | 0;
}
function __ZN7WebCore28HTMLTextDecorationEquivalentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore28HTMLTextDecorationEquivalentC2ENS_10CSSValueIDERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = H_BASE + 184;
 HEAP32[i1 + 4 >> 2] = 133;
 i5 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i5, i2);
 HEAP32[i1 + 8 >> 2] = i5;
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP32[i4 >> 2] = H_BASE + 40;
 return;
}
function __ZN7WebCore28HTMLTextDecorationEquivalentC1ENS_10CSSValueIDERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = H_BASE + 184;
 HEAP32[i1 + 4 >> 2] = 133;
 i5 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i5, i2);
 HEAP32[i1 + 8 >> 2] = i5;
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP32[i4 >> 2] = H_BASE + 40;
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
function __ZN7WebCore23HTMLAttributeEquivalentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore22HTMLFontSizeEquivalentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore21HTMLElementEquivalentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore12EditingStyle15triStateOfStyleEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore12EditingStyle15triStateOfStyleINS_22MutableStylePropertiesEEEN3WTF8TriStateEPT_NS0_30ShouldIgnoreTextOnlyPropertiesE(i1, i4, 1) | 0;
 return i3 | 0;
}
function __ZN7WebCore21HTMLElementEquivalentC2ENS_13CSSPropertyIDENS_10CSSValueIDERKNS_13QualifiedNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 HEAP32[i1 + 4 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i2, i3);
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 12 >> 2] = i4;
 return;
}
function __ZN7WebCore21HTMLElementEquivalentC1ENS_13CSSPropertyIDENS_10CSSValueIDERKNS_13QualifiedNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 HEAP32[i1 + 4 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i2, i3);
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 12 >> 2] = i4;
 return;
}
function __ZN7WebCore12EditingStyleC2ERKNS_8PositionENS0_19PropertiesToIncludeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 __ZN7WebCore12EditingStyle4initEPNS_4NodeENS0_19PropertiesToIncludeE(i1, HEAP32[i2 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore12EditingStyleC1ERKNS_8PositionENS0_19PropertiesToIncludeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 __ZN7WebCore12EditingStyle4initEPNS_4NodeENS0_19PropertiesToIncludeE(i1, HEAP32[i2 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore28HTMLTextDecorationEquivalentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore23HTMLAttributeEquivalentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore22HTMLFontSizeEquivalentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore21HTMLElementEquivalentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore12EditingStyleC2ENS_13CSSPropertyIDERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 __ZN7WebCore12EditingStyle11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEb(i1, i2, i3, 0);
 return;
}
function __ZN7WebCore12EditingStyleC1ENS_13CSSPropertyIDERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 __ZN7WebCore12EditingStyle11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEb(i1, i2, i3, 0);
 return;
}
function __ZN7WebCore12EditingStyleC2EPNS_4NodeENS0_19PropertiesToIncludeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 __ZN7WebCore12EditingStyle4initEPNS_4NodeENS0_19PropertiesToIncludeE(i1, i2, i3);
 return;
}
function __ZN7WebCore12EditingStyleC1EPNS_4NodeENS0_19PropertiesToIncludeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 __ZN7WebCore12EditingStyle4initEPNS_4NodeENS0_19PropertiesToIncludeE(i1, i2, i3);
 return;
}
function __ZN7WebCore23HTMLAttributeEquivalentC2ENS_13CSSPropertyIDERKNS_13QualifiedNameES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP32[i1 >> 2] = H_BASE + 88;
 HEAP32[i1 + 16 >> 2] = i4;
 return;
}
function __ZN7WebCore23HTMLAttributeEquivalentC1ENS_13CSSPropertyIDERKNS_13QualifiedNameES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP32[i1 >> 2] = H_BASE + 88;
 HEAP32[i1 + 16 >> 2] = i4;
 return;
}
function __ZN7WebCore23HTMLAttributeEquivalentC2ENS_13CSSPropertyIDERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 88;
 HEAP32[i1 + 16 >> 2] = i3;
 return;
}
function __ZN7WebCore23HTMLAttributeEquivalentC1ENS_13CSSPropertyIDERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 88;
 HEAP32[i1 + 16 >> 2] = i3;
 return;
}
function __ZN7WebCore22HTMLFontSizeEquivalentC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 6;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = __ZN7WebCore9HTMLNames7fontTagE;
 HEAP32[i1 + 16 >> 2] = __ZN7WebCore9HTMLNames8sizeAttrE;
 HEAP32[i1 >> 2] = H_BASE + 136;
 return;
}
function __ZN7WebCore22HTMLFontSizeEquivalentC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 6;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = __ZN7WebCore9HTMLNames7fontTagE;
 HEAP32[i1 + 16 >> 2] = __ZN7WebCore9HTMLNames8sizeAttrE;
 HEAP32[i1 >> 2] = H_BASE + 136;
 return;
}
function __ZN7WebCore21HTMLElementEquivalentC2ENS_13CSSPropertyIDERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i3;
 return;
}
function __ZN7WebCore21HTMLElementEquivalentC1ENS_13CSSPropertyIDERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i3;
 return;
}
function __ZN7WebCore12EditingStyle21removeBlockPropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore22MutableStyleProperties21removeBlockPropertiesEv(i2);
 return;
}
function __ZN7WebCore12EditingStyle17overrideWithStyleEPKNS_15StylePropertiesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12EditingStyle10mergeStyleEPKNS_15StylePropertiesENS0_23CSSPropertyOverrideModeE(i1, i2, 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore21HTMLElementEquivalentC2ENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 return;
}
function __ZN7WebCore21HTMLElementEquivalentC1ENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 184;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 return;
}
function __ZN7WebCore12EditingStyleC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 return;
}
function __ZN7WebCore12EditingStyleC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[H_BASE + 336 >> 2];
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZN7WebCore16isMailBlockquoteEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore16isMailBlockquoteEPKNS_4NodeE(i1 | 0) | 0;
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
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
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
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore23HTMLAttributeEquivalent12hasAttributeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore21HTMLElementEquivalent12hasAttributeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
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
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore23HTMLAttributeEquivalent12hasAttributeEv,b0,ii___ZN7WebCore16isMailBlockquoteEPKNS_4NodeE__wrapper,b0,__ZNK7WebCore21HTMLElementEquivalent12hasAttributeEv,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore22HTMLFontSizeEquivalentC2Ev,b1,__ZN7WebCore21HTMLElementEquivalentD0Ev,b1,__ZN7WebCore28HTMLTextDecorationEquivalentD0Ev,b1,__ZN7WebCore12EditingStyleC2Ev,b1,__ZN7WebCore21HTMLElementEquivalentD1Ev,b1,__ZN7WebCore22HTMLFontSizeEquivalentD1Ev,b1,__ZN7WebCore12EditingStyleD2Ev,b1,__ZN7WebCore23HTMLAttributeEquivalentD0Ev,b1,__ZN7WebCore23HTMLAttributeEquivalentD1Ev,b1,__ZN7WebCore22HTMLFontSizeEquivalentD0Ev,b1,__ZN7WebCore28HTMLTextDecorationEquivalentD1Ev,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore21HTMLElementEquivalentC2ENS_13CSSPropertyIDE,b2,__ZN7WebCore12EditingStyleC2EPKNS_15StylePropertiesE,b2,b2,b2];
  var FUNCTION_TABLE_iiii = [b3,b3,__ZNK7WebCore28HTMLTextDecorationEquivalent21valueIsPresentInStyleEPNS_7ElementEPNS_15StylePropertiesE,b3,__ZNK7WebCore21HTMLElementEquivalent21valueIsPresentInStyleEPNS_7ElementEPNS_15StylePropertiesE,b3,__ZNK7WebCore23HTMLAttributeEquivalent21valueIsPresentInStyleEPNS_7ElementEPNS_15StylePropertiesE,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore12EditingStyleC2ERKNS_8PositionENS0_19PropertiesToIncludeE,b4,__ZN7WebCore21HTMLElementEquivalentC2ENS_13CSSPropertyIDERKNS_13QualifiedNameE,b4,__ZN7WebCore28HTMLTextDecorationEquivalentC2ENS_10CSSValueIDERKNS_13QualifiedNameE,b4,__ZN7WebCore12EditingStyleC2EPNS_4NodeENS0_19PropertiesToIncludeE,b4,__ZN7WebCore12EditingStyleC2ENS_13CSSPropertyIDERKN3WTF6StringE,b4,__ZN7WebCore11StyleChangeC2EPNS_12EditingStyleERKNS_8PositionE,b4,__ZNK7WebCore22HTMLFontSizeEquivalent24attributeValueAsCSSValueEPNS_7ElementE,b4,__ZNK7WebCore23HTMLAttributeEquivalent10addToStyleEPNS_7ElementEPNS_12EditingStyleE,b4,__ZNK7WebCore21HTMLElementEquivalent10addToStyleEPNS_7ElementEPNS_12EditingStyleE,b4,__ZNK7WebCore23HTMLAttributeEquivalent24attributeValueAsCSSValueEPNS_7ElementE,b4,__ZN7WebCore23HTMLAttributeEquivalentC2ENS_13CSSPropertyIDERKNS_13QualifiedNameE,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZNK7WebCore28HTMLTextDecorationEquivalent21propertyExistsInStyleEPKNS_15StylePropertiesE,b6,__ZNK7WebCore23HTMLAttributeEquivalent7matchesEPKNS_7ElementE,b6,__ZNK7WebCore21HTMLElementEquivalent7matchesEPKNS_7ElementE,b6,__ZNK7WebCore21HTMLElementEquivalent21propertyExistsInStyleEPKNS_15StylePropertiesE,b6,b6,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore23HTMLAttributeEquivalentC2ENS_13CSSPropertyIDERKNS_13QualifiedNameES4_,b7,__ZN7WebCore21HTMLElementEquivalentC2ENS_13CSSPropertyIDENS_10CSSValueIDERKNS_13QualifiedNameE,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames4bTagE": __ZN7WebCore9HTMLNames4bTagE, "__ZN7WebCore9HTMLNames5emTagE": __ZN7WebCore9HTMLNames5emTagE, "__ZN7WebCore9HTMLNames9classAttrE": __ZN7WebCore9HTMLNames9classAttrE, "__ZN7WebCore9HTMLNames6supTagE": __ZN7WebCore9HTMLNames6supTagE, "__ZN7WebCore9HTMLNames9styleAttrE": __ZN7WebCore9HTMLNames9styleAttrE, "__ZN7WebCore9HTMLNames6subTagE": __ZN7WebCore9HTMLNames6subTagE, "__ZN7WebCore9HTMLNames9colorAttrE": __ZN7WebCore9HTMLNames9colorAttrE, "__ZN7WebCore9HTMLNames4iTagE": __ZN7WebCore9HTMLNames4iTagE, "__ZN7WebCore9HTMLNames9strongTagE": __ZN7WebCore9HTMLNames9strongTagE, "__ZN7WebCore9HTMLNames7spanTagE": __ZN7WebCore9HTMLNames7spanTagE, "__ZN7WebCore9HTMLNames4sTagE": __ZN7WebCore9HTMLNames4sTagE, "__ZN7WebCore9HTMLNames7dirAttrE": __ZN7WebCore9HTMLNames7dirAttrE, "__ZN7WebCore9HTMLNames9strikeTagE": __ZN7WebCore9HTMLNames9strikeTagE, "__ZN7WebCore9HTMLNames4uTagE": __ZN7WebCore9HTMLNames4uTagE, "__ZN7WebCore9HTMLNames8sizeAttrE": __ZN7WebCore9HTMLNames8sizeAttrE, "__ZN7WebCore9HTMLNames8faceAttrE": __ZN7WebCore9HTMLNames8faceAttrE, "__ZN7WebCore9HTMLNames7fontTagE": __ZN7WebCore9HTMLNames7fontTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore28HTMLTextDecorationEquivalent21propertyExistsInStyleEPKNS_15StylePropertiesE","__ZN7WebCore12EditingStyleD2Ev","__ZN7WebCore12EditingStyleC2ERKNS_8PositionENS0_19PropertiesToIncludeE","__ZN7WebCore12EditingStyle10mergeStyleEPKNS_15StylePropertiesENS0_23CSSPropertyOverrideModeE","__ZN7WebCore21HTMLElementEquivalentD0Ev","__ZN7WebCore21HTMLElementEquivalentC2ENS_13CSSPropertyIDERKNS_13QualifiedNameE","__ZNK7WebCore23HTMLAttributeEquivalent7matchesEPKNS_7ElementE","__ZN7WebCore28HTMLTextDecorationEquivalentC2ENS_10CSSValueIDERKNS_13QualifiedNameE","__ZN7WebCore12EditingStyle29extractAndRemoveTextDirectionEv","__ZN7WebCore12EditingStyle17overrideWithStyleEPKNS_15StylePropertiesE","_memcpy","__ZN7WebCore12EditingStyle16mergeTypingStyleERNS_8DocumentE","__ZNK7WebCore12EditingStyle43extractConflictingImplicitStyleOfAttributesEPNS_11HTMLElementENS0_30ShouldPreserveWritingDirectionEPS0_RN3WTF6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEENS0_26ShouldExtractMatchingStyleE","__ZN7WebCore22HTMLFontSizeEquivalentD1Ev","__ZN7WebCoreL23backgroundColorInEffectEPNS_4NodeE","__ZN7WebCore12EditingStyle36mergeInlineAndImplicitStyleOfElementEPNS_13StyledElementENS0_23CSSPropertyOverrideModeENS0_19PropertiesToIncludeE","__ZNK7WebCore21HTMLElementEquivalent21propertyExistsInStyleEPKNS_15StylePropertiesE","__ZN7WebCore12EditingStyle21removeBlockPropertiesEv","__ZN7WebCore12EditingStyleC2ENS_13CSSPropertyIDERKN3WTF6StringE","__ZN7WebCore11StyleChange17extractTextStylesEPNS_8DocumentEPNS_22MutableStylePropertiesEb","__ZN7WebCore12EditingStyle22removeStyleAddedByNodeEPNS_4NodeE","__ZNK7WebCore12EditingStyle15triStateOfStyleERKNS_16VisibleSelectionE","__ZNK7WebCore22HTMLFontSizeEquivalent24attributeValueAsCSSValueEPNS_7ElementE","__ZN7WebCore23HTMLAttributeEquivalentD1Ev","__ZN7WebCore22HTMLFontSizeEquivalentD0Ev","__ZNK7WebCore23HTMLAttributeEquivalent10addToStyleEPNS_7ElementEPNS_12EditingStyleE","__ZN7WebCore12EditingStyle21styleAtSelectionStartERKNS_16VisibleSelectionEb","__ZNK7WebCore21HTMLElementEquivalent10addToStyleEPNS_7ElementEPNS_12EditingStyleE","__ZN7WebCore18getPropertiesNotInINS_22ComputedStyleExtractorEEEN3WTF10PassRefPtrINS_22MutableStylePropertiesEEEPNS_15StylePropertiesEPT_","__ZN3WTF6VectorIN7WebCore13QualifiedNameELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_","__ZN7WebCore12EditingStyle16prepareToApplyAtERKNS_8PositionENS0_30ShouldPreserveWritingDirectionE","__ZN7WebCore12EditingStyle31extractAndRemoveBlockPropertiesEv","__ZN7WebCore12EditingStyle37removeStyleConflictingWithStyleOfNodeEPNS_4NodeE","__ZN3WTF6VectorINS_6OwnPtrIN7WebCore23HTMLAttributeEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore28HTMLTextDecorationEquivalentD0Ev","__ZNK7WebCore21HTMLElementEquivalent21valueIsPresentInStyleEPNS_7ElementEPNS_15StylePropertiesE","__ZNK7WebCore21HTMLElementEquivalent7matchesEPKNS_7ElementE","__ZN7WebCoreL22htmlElementEquivalentsEv","__ZNK7WebCore12EditingStyle35styleIsPresentInComputedStyleOfNodeEPNS_4NodeE","__ZN7WebCore12EditingStyle20extractFontSizeDeltaEv","__ZN3WTF6VectorIN7WebCore13QualifiedNameELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore23HTMLAttributeEquivalentC2ENS_13CSSPropertyIDERKNS_13QualifiedNameE","__ZNK7WebCore12EditingStyle38conflictsWithImplicitStyleOfAttributesEPNS_11HTMLElementE","__ZNK7WebCore12EditingStyle4copyEv","__ZNK7WebCore12EditingStyle33conflictsWithInlineStyleOfElementEPNS_13StyledElementEPS0_PN3WTF6VectorINS_13CSSPropertyIDELj0ENS4_15CrashOnOverflowEEE","__ZNK7WebCore23HTMLAttributeEquivalent12hasAttributeEv","__ZNK7WebCore12EditingStyle7isEmptyEv","__ZN7WebCoreL23removePropertiesInStyleEPNS_22MutableStylePropertiesEPNS_15StylePropertiesE","__ZN7WebCore21HTMLElementEquivalentC2ENS_13CSSPropertyIDENS_10CSSValueIDERKNS_13QualifiedNameE","__ZNK7WebCore12EditingStyle13textDirectionER16WritingDirection","__ZN3WTF6VectorINS_6OwnPtrIN7WebCore21HTMLElementEquivalentEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF10RefCountedIN7WebCore12EditingStyleEE5derefEv","__ZN7WebCoreL24htmlAttributeEquivalentsEv","__ZN7WebCore12EditingStyle5clearEv","__ZN7WebCoreL19diffTextDecorationsEPNS_22MutableStylePropertiesENS_13CSSPropertyIDEPNS_8CSSValueE","__ZN7WebCore12EditingStyle35mergeStyleFromRulesForSerializationEPNS_13StyledElementE","__ZN7WebCore12EditingStyleC2EPNS_4NodeENS0_19PropertiesToIncludeE","__ZN7WebCore12EditingStyle25mergeInlineStyleOfElementEPNS_13StyledElementENS0_23CSSPropertyOverrideModeENS0_19PropertiesToIncludeE","__ZNK7WebCore12EditingStyle15triStateOfStyleINS_22MutableStylePropertiesEEEN3WTF8TriStateEPT_NS0_30ShouldIgnoreTextOnlyPropertiesE","__ZN7WebCore12EditingStyleC2Ev","__ZN7WebCore21HTMLElementEquivalentD1Ev","__ZN7WebCore12EditingStyle30removeStyleFromRulesAndContextEPNS_13StyledElementEPNS_4NodeE","_memset","__ZN7WebCore23HTMLAttributeEquivalentC2ENS_13CSSPropertyIDERKNS_13QualifiedNameES4_","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore12EditingStyle37removeTextFillAndStrokeColorsIfNeededEPNS_11RenderStyleE","__ZN7WebCore11StyleChangeC2EPNS_12EditingStyleERKNS_8PositionE","__ZN7WebCore12EditingStyle11forceInlineEv","__ZN3WTF6VectorIN7WebCore13CSSPropertyIDELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore18getPropertiesNotInINS_22MutableStylePropertiesEEEN3WTF10PassRefPtrIS1_EEPNS_15StylePropertiesEPT_","__ZN7WebCore12EditingStyle35elementIsStyledSpanOrHTMLEquivalentEPKNS_11HTMLElementE","__ZN7WebCoreL31styleFromMatchedRulesForElementEPNS_7ElementEj","__ZNK7WebCore12EditingStyle15triStateOfStyleEPS0_","__ZNK7WebCore23HTMLAttributeEquivalent24attributeValueAsCSSValueEPNS_7ElementE","__ZNK7WebCore12EditingStyle35conflictsWithImplicitStyleOfElementEPNS_11HTMLElementEPS0_NS0_26ShouldExtractMatchingStyleE","__ZNK7WebCore12EditingStyle15triStateOfStyleINS_22ComputedStyleExtractorEEEN3WTF8TriStateEPT_NS0_30ShouldIgnoreTextOnlyPropertiesE","__ZN7WebCore12EditingStyle4initEPNS_4NodeENS0_19PropertiesToIncludeE","__ZNK7WebCore28HTMLTextDecorationEquivalent21valueIsPresentInStyleEPNS_7ElementEPNS_15StylePropertiesE","__ZN7WebCore22HTMLFontSizeEquivalentC2Ev","__ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore12EditingStyle37removePropertiesInElementDefaultStyleEPNS_7ElementE","__ZN7WebCore12EditingStyle32collapseTextDecorationPropertiesEv","__ZN7WebCore12EditingStyle11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEb","__ZN7WebCore28HTMLTextDecorationEquivalentD1Ev","__ZNK7WebCore12EditingStyle14legacyFontSizeEPNS_8DocumentE","__ZN7WebCore23HTMLAttributeEquivalentD0Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore21HTMLElementEquivalentC2ENS_13CSSPropertyIDE","__ZN7WebCore12EditingStyle8setStyleEN3WTF10PassRefPtrINS_22MutableStylePropertiesEEE","__ZNK7WebCore23HTMLAttributeEquivalent21valueIsPresentInStyleEPNS_7ElementEPNS_15StylePropertiesE","__ZN7WebCore12EditingStyleC2EPKNS_15StylePropertiesE","__ZN7WebCore12EditingStyle29wrappingStyleForSerializationEPNS_4NodeEb","__ZN7WebCore12EditingStyle19mergeStyleFromRulesEPNS_13StyledElementE","__ZN7WebCore12EditingStyle25textDirectionForSelectionERKNS_16VisibleSelectionEPS0_Rb","__ZNK7WebCore21HTMLElementEquivalent12hasAttributeEv"]

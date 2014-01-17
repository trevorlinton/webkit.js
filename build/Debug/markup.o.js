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
H_BASE = parentModule["_malloc"](336 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 336;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([65,112,112,108,101,45,105,110,116,101,114,99,104,97,110,103,101,45,110,101,119,108,105,110,101,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,13,10,0,0,0,0,0,0,32,115,116,121,108,101,61,34,0,0,0,0,0,0,0,0,60,47,115,112,97,110,62,0,60,47,100,105,118,62,0,0,34,62,0,0,0,0,0,0,39,41,0,0,0,0,0,0,117,114,108,40,39,0,0,0,60,98,114,32,99,108,97,115,115,61,34,65,112,112,108,101,45,105,110,116,101,114,99,104,97,110,103,101,45,110,101,119,108,105,110,101,34,62,0,0,116,101,120,116,47,112,108,97,105,110,0,0,0,0,0,0,116,101,120,116,47,104,116,109,108,0,0,0,0,0,0,0,60,47,97,62,0,0,0,0,60,97,32,104,114,101,102,61,34,0,0,0,0,0,0,0,60,115,112,97,110,32,115,116,121,108,101,61,34,0,0,0,60,100,105,118,32,115,116,121,108,101,61,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZN7WebCore9HTMLNames4bTagE=env.__ZN7WebCore9HTMLNames4bTagE|0;
  var __ZN7WebCore9HTMLNames5emTagE=env.__ZN7WebCore9HTMLNames5emTagE|0;
  var __ZN7WebCore9HTMLNames9classAttrE=env.__ZN7WebCore9HTMLNames9classAttrE|0;
  var __ZN7WebCore9HTMLNames9styleAttrE=env.__ZN7WebCore9HTMLNames9styleAttrE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames11templateTagE=env.__ZN7WebCore9HTMLNames11templateTagE|0;
  var __ZN7WebCore9HTMLNames8titleTagE=env.__ZN7WebCore9HTMLNames8titleTagE|0;
  var __ZN7WebCore9HTMLNames11framesetTagE=env.__ZN7WebCore9HTMLNames11framesetTagE|0;
  var __ZN7WebCore9HTMLNames6colTagE=env.__ZN7WebCore9HTMLNames6colTagE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore9HTMLNames11textareaTagE=env.__ZN7WebCore9HTMLNames11textareaTagE|0;
  var __ZN7WebCore9HTMLNames9strongTagE=env.__ZN7WebCore9HTMLNames9strongTagE|0;
  var __ZN7WebCore9HTMLNames4sTagE=env.__ZN7WebCore9HTMLNames4sTagE|0;
  var __ZN7WebCore9HTMLNames9selectTagE=env.__ZN7WebCore9HTMLNames9selectTagE|0;
  var __ZN7WebCore9HTMLNames4iTagE=env.__ZN7WebCore9HTMLNames4iTagE|0;
  var __ZN7WebCore9HTMLNames7headTagE=env.__ZN7WebCore9HTMLNames7headTagE|0;
  var __ZN7WebCore9HTMLNames9strikeTagE=env.__ZN7WebCore9HTMLNames9strikeTagE|0;
  var __ZN7WebCore9HTMLNames6divTagE=env.__ZN7WebCore9HTMLNames6divTagE|0;
  var __ZN7WebCore9HTMLNames11colgroupTagE=env.__ZN7WebCore9HTMLNames11colgroupTagE|0;
  var __ZN7WebCore9HTMLNames14backgroundAttrE=env.__ZN7WebCore9HTMLNames14backgroundAttrE|0;
  var __ZN7WebCore9HTMLNames5trTagE=env.__ZN7WebCore9HTMLNames5trTagE|0;
  var __ZN7WebCore9HTMLNames4uTagE=env.__ZN7WebCore9HTMLNames4uTagE|0;
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZN7WebCore9HTMLNames8tbodyTagE=env.__ZN7WebCore9HTMLNames8tbodyTagE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore23StyledMarkupAccumulatorE=(H_BASE+240)|0;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12createMarkupERKNS_5RangeEPN3WTF6VectorIPNS_4NodeELj0ENS3_15CrashOnOverflowEEENS_23EAnnotateForInterchangeEbNS_13EAbsoluteURLsE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 544 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i7 + 72 | 0;
 i18 = i7 + 80 | 0;
 i19 = i7 + 88 | 0;
 i20 = i7 + 104 | 0;
 i21 = i7 + 112 | 0;
 i22 = i7 + 176 | 0;
 i23 = i7 + 192 | 0;
 i24 = i7 + 208 | 0;
 i25 = i7 + 224 | 0;
 i26 = i7 + 240 | 0;
 i27 = i7 + 248 | 0;
 i28 = i7 + 264 | 0;
 i29 = i7 + 272 | 0;
 i30 = i7 + 336 | 0;
 i31 = i7 + 408 | 0;
 i32 = i7 + 424 | 0;
 i33 = i7 + 440 | 0;
 i34 = i7 + 456 | 0;
 i35 = i7 + 472 | 0;
 i36 = i7 + 488 | 0;
 i37 = i7 + 504 | 0;
 i38 = i7 + 512 | 0;
 i39 = i7 + 520 | 0;
 i40 = i7 + 528 | 0;
 i41 = HEAP32[i2 + 4 >> 2] | 0;
 if (!(HEAP8[H_BASE + 288 | 0] | 0)) {
  i42 = __Znwj(4) | 0;
  HEAP32[i25 >> 2] = H_BASE + 112;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i42, i25);
  HEAP32[H_BASE + 320 >> 2] = i42;
  HEAP8[H_BASE + 288 | 0] = 1;
 }
 i42 = i7 + 232 | 0;
 HEAP32[i42 >> 2] = 0;
 if (__ZNK7WebCore5Range9collapsedERi(i2, i42) | 0) {
  i42 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i42;
  if ((i42 | 0) == 0) {
   STACKTOP = i7;
   return;
  }
  i25 = i42 | 0;
  HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
  STACKTOP = i7;
  return;
 }
 i25 = i26 | 0;
 HEAP32[i25 >> 2] = 0;
 i26 = __ZNK7WebCore5Range23commonAncestorContainerERi(i2, i25) | 0;
 if ((i26 | 0) == 0) {
  i25 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
  HEAP32[i1 >> 2] = i25;
  if ((i25 | 0) == 0) {
   STACKTOP = i7;
   return;
  }
  i42 = i25 | 0;
  HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i41);
 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i27, i26);
 i26 = __ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i27, __ZN7WebCore9HTMLNames7bodyTagE) | 0;
 i42 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i42 | 0) != 0) {
   i27 = i42 + 8 | 0;
   i25 = i27 | 0;
   i43 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   HEAP32[i25 >> 2] = i43;
   if ((i43 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
  }
 } while (0);
 if ((i26 | 0) == 0) {
  i44 = 0;
 } else {
  __ZN7WebCore16VisibleSelection27selectionFromContentsOfNodeEPNS_4NodeE(i29, i26);
  __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i28, i29);
  i42 = i28 | 0;
  i28 = __ZN7WebCore14areRangesEqualEPKNS_5RangeES2_(HEAP32[i42 >> 2] | 0, i2) | 0;
  i27 = HEAP32[i42 >> 2] | 0;
  do {
   if ((i27 | 0) != 0) {
    i42 = i27 | 0;
    i43 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
    if ((i43 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i27);
     __ZN3WTF8fastFreeEPv(i27);
     break;
    } else {
     HEAP32[i42 >> 2] = i43;
     break;
    }
   }
  } while (0);
  __ZN7WebCore16VisibleSelectionD2Ev(i29);
  i44 = i28 ? i26 : 0;
 }
 i26 = i18 | 0;
 HEAP32[i26 >> 2] = 0;
 i18 = __ZNK7WebCore5Range23commonAncestorContainerERi(i2, i26) | 0;
 i26 = (i4 | 0) == 1;
 if (i26) {
  i28 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i18, 1) | 0;
  i29 = i28 | 0;
  L34 : do {
   if ((i28 | 0) == 0) {
    i45 = 0;
   } else {
    L36 : do {
     if ((HEAP32[i28 + 12 >> 2] & 4 | 0) != 0) {
      i27 = HEAP32[i29 + 44 >> 2] | 0;
      i43 = HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0;
      do {
       if ((i27 | 0) != (i43 | 0)) {
        i42 = HEAP32[i27 + 12 >> 2] | 0;
        if ((i42 | 0) == (HEAP32[i43 + 12 >> 2] | 0)) {
         if ((HEAP32[i27 + 16 >> 2] | 0) == (HEAP32[i43 + 16 >> 2] | 0)) {
          break;
         }
        }
        i25 = HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0;
        if ((i27 | 0) == (i25 | 0)) {
         break;
        }
        if ((i42 | 0) != (HEAP32[i25 + 12 >> 2] | 0)) {
         break L36;
        }
        if ((HEAP32[i27 + 16 >> 2] | 0) != (HEAP32[i25 + 16 >> 2] | 0)) {
         break L36;
        }
       }
      } while (0);
      i27 = HEAP32[i28 + 16 >> 2] | 0;
      i43 = i27 | 0;
      if ((i27 | 0) == 0) {
       i45 = i43;
       break L34;
      }
      i25 = (HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 | 0;
      i42 = i27;
      i27 = i43;
      while (1) {
       if ((HEAP32[i42 + 12 >> 2] & 16 | 0) == 0) {
        i46 = i42 | 0;
       } else {
        i43 = i42 | 0;
        if ((HEAP32[(HEAP32[i27 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i25 >> 2] | 0)) {
         i45 = i43;
         break L34;
        } else {
         i46 = i43;
        }
       }
       i43 = HEAP32[i46 + 16 >> 2] | 0;
       i47 = i43 | 0;
       if ((i43 | 0) == 0) {
        i45 = i47;
        break L34;
       } else {
        i42 = i43;
        i27 = i47;
       }
      }
     }
    } while (0);
    i27 = __ZN7WebCore30isNonTableCellHTMLBlockElementEPKNS_4NodeE(i29) | 0;
    i45 = i27 ? i29 : 0;
   }
  } while (0);
  i29 = __ZNK7WebCore5Range9firstNodeEv(i2) | 0;
  do {
   if ((i29 | 0) == 0) {
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i46 = i19 + 8 | 0;
    i28 = i46;
    i27 = HEAP32[i28 >> 2] | 0;
    HEAP32[i28 >> 2] = i27 & -8;
    HEAP8[i46] = i27 & 255 & -16;
   } else {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 132 >> 2] & 7](i29) | 0) {
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i19, i29);
     break;
    }
    i27 = i17 | 0;
    HEAP32[i27 >> 2] = i29;
    i46 = i29 + 8 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i19, i17, 1);
    i46 = HEAP32[i27 >> 2] | 0;
    if ((i46 | 0) == 0) {
     break;
    }
    i27 = i46 + 8 | 0;
    i46 = i27 | 0;
    i28 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
    HEAP32[i46 >> 2] = i28;
    if ((i28 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
   }
  } while (0);
  i17 = __ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i19, F_BASE_ii + 4 | 0, 1) | 0;
  i29 = HEAP32[i19 >> 2] | 0;
  do {
   if ((i29 | 0) != 0) {
    i19 = i29 + 8 | 0;
    i27 = i19 | 0;
    i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
    HEAP32[i27 >> 2] = i28;
    if ((i28 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   }
  } while (0);
  L70 : do {
   if ((i17 | 0) == 0) {
    i48 = i45;
   } else {
    __ZN7WebCore16VisibleSelection27selectionFromContentsOfNodeEPNS_4NodeE(i21, i17);
    __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i20, i21);
    i29 = i20 | 0;
    i19 = __ZN7WebCore14areRangesEqualEPKNS_5RangeES2_(HEAP32[i29 >> 2] | 0, i2) | 0;
    i28 = HEAP32[i29 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i29 = i28 | 0;
      i27 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      if ((i27 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i28);
       __ZN3WTF8fastFreeEPv(i28);
       break;
      } else {
       HEAP32[i29 >> 2] = i27;
       break;
      }
     }
    } while (0);
    __ZN7WebCore16VisibleSelectionD2Ev(i21);
    if (!i19) {
     i48 = i45;
     break;
    }
    i28 = i17 + 16 | 0;
    while (1) {
     i27 = HEAP32[i28 >> 2] | 0;
     i29 = i27 | 0;
     if ((i27 | 0) == 0) {
      i48 = i29;
      break L70;
     }
     if (__ZN7WebCore13isListElementEPNS_4NodeE(i29) | 0) {
      i48 = i29;
      break;
     } else {
      i28 = i27 + 16 | 0;
     }
    }
   }
  } while (0);
  i17 = __ZNK7WebCore5Range9firstNodeEv(i2) | 0;
  do {
   if ((i17 | 0) == 0) {
    HEAP32[i22 >> 2] = 0;
    HEAP32[i22 + 4 >> 2] = 0;
    i45 = i22 + 8 | 0;
    i21 = i45;
    i20 = HEAP32[i21 >> 2] | 0;
    HEAP32[i21 >> 2] = i20 & -8;
    HEAP8[i45] = i20 & 255 & -16;
   } else {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 132 >> 2] & 7](i17) | 0) {
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i22, i17);
     break;
    }
    i20 = i16 | 0;
    HEAP32[i20 >> 2] = i17;
    i45 = i17 + 8 | 0;
    HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i22, i16, 1);
    i45 = HEAP32[i20 >> 2] | 0;
    if ((i45 | 0) == 0) {
     break;
    }
    i20 = i45 + 8 | 0;
    i45 = i20 | 0;
    i21 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
    HEAP32[i45 >> 2] = i21;
    if ((i21 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   }
  } while (0);
  i16 = __ZN7WebCore26highestEnclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleEPS3_(i22, F_BASE_ii + 2 | 0, 0, 0) | 0;
  i17 = HEAP32[i22 >> 2] | 0;
  do {
   if ((i17 | 0) != 0) {
    i22 = i17 + 8 | 0;
    i20 = i22 | 0;
    i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
    HEAP32[i20 >> 2] = i21;
    if ((i21 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
   }
  } while (0);
  i49 = (i16 | 0) == 0 ? i48 : i16;
 } else {
  i49 = 0;
 }
 i16 = (i49 | 0) != 0 ? i49 : i18;
 i48 = i16 + 12 | 0;
 i17 = (HEAP32[i48 >> 2] & 2048 | 0) == 0;
 i22 = i16 + 32 | 0;
 if (i17) {
  i50 = i22 | 0;
 } else {
  i50 = HEAP32[i22 >> 2] | 0;
 }
 do {
  if ((HEAP32[i50 >> 2] | 0) == 0) {
   i51 = i49;
  } else {
   if (i17) {
    i52 = i22 | 0;
   } else {
    i52 = HEAP32[i22 >> 2] | 0;
   }
   if ((__ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i52 >> 2] | 0) | 0) == 0) {
    i51 = i49;
    break;
   }
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i23, i16);
   if ((HEAP32[i48 >> 2] & 2048 | 0) == 0) {
    i53 = i22 | 0;
   } else {
    i53 = HEAP32[i22 >> 2] | 0;
   }
   i21 = __ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i53 >> 2] | 0) | 0;
   if ((HEAP32[i21 + 20 >> 2] & 128 | 0) == 0) {
    i54 = HEAP32[i21 + 4 >> 2] | 0;
   } else {
    i54 = 0;
   }
   i21 = __ZN7WebCore26highestEnclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleEPS3_(i23, F_BASE_ii + 6 | 0, 0, i54 | 0) | 0;
   i20 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i45 = i20 + 8 | 0;
     i28 = i45 | 0;
     i19 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
    }
   } while (0);
   i51 = (i21 | 0) == 0 ? i49 : i21;
  }
 } while (0);
 do {
  if ((i51 | 0) == 0) {
   if (__ZN7WebCore17isTabSpanTextNodeEPKNS_4NodeE(i18) | 0) {
    i49 = HEAP32[i18 + 16 >> 2] | 0;
    if ((i49 | 0) != 0) {
     i55 = i49 | 0;
     break;
    }
   }
   i49 = __ZN7WebCore13isTabSpanNodeEPKNS_4NodeE(i18) | 0;
   i55 = i49 ? i18 : 0;
  } else {
   i55 = i51;
  }
 } while (0);
 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i24, (i55 | 0) != 0 ? i55 : i18);
 i18 = __ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i24, __ZN7WebCore9HTMLNames4aTagE) | 0;
 i51 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i51 | 0) != 0) {
   i24 = i51 + 8 | 0;
   i49 = i24 | 0;
   i23 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
   HEAP32[i49 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 i51 = (i18 | 0) == 0 ? i55 : i18;
 i18 = i30 | 0;
 __ZN7WebCore17MarkupAccumulatorC2EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE(i18, i3, i6, i2, 0);
 HEAP32[i30 >> 2] = H_BASE + 248;
 HEAP32[i30 + 48 >> 2] = 0;
 HEAP32[i30 + 52 >> 2] = 0;
 HEAP32[i30 + 56 >> 2] = 0;
 HEAP32[i30 + 60 >> 2] = i4;
 HEAP32[i30 + 64 >> 2] = i51;
 HEAP32[i30 + 68 >> 2] = 0;
 i4 = __ZNK7WebCore5Range12pastLastNodeEv(i2) | 0;
 i6 = __ZNK7WebCore5Range9firstNodeEv(i2) | 0;
 i55 = i2 + 12 | 0;
 i24 = HEAP32[i55 >> 2] | 0;
 if ((i24 | 0) > -1) {
  i56 = i24;
 } else {
  i24 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i55 >> 2] = i24;
  i56 = i24;
 }
 i24 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i24 | 0) == 0) {
  i57 = i56;
 } else {
  i56 = i24 + 8 | 0;
  HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
  i57 = HEAP32[i55 >> 2] | 0;
 }
 i55 = i14 | 0;
 HEAP32[i55 >> 2] = i24;
 HEAP32[i15 >> 2] = i57;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i32, i14, i15);
 i15 = HEAP32[i55 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i55 = i15 + 8 | 0;
   i14 = i55 | 0;
   i57 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i57;
   if ((i57 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i31, i32, 1);
 i15 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i32 = i15 + 8 | 0;
   i55 = i32 | 0;
   i57 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
   HEAP32[i55 >> 2] = i57;
   if ((i57 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
  }
 } while (0);
 i15 = i2 + 24 | 0;
 i32 = HEAP32[i15 >> 2] | 0;
 if ((i32 | 0) > -1) {
  i58 = i32;
 } else {
  i32 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i15 >> 2] = i32;
  i58 = i32;
 }
 i32 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i32 | 0) == 0) {
  i59 = i58;
 } else {
  i58 = i32 + 8 | 0;
  HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
  i59 = HEAP32[i15 >> 2] | 0;
 }
 i15 = i12 | 0;
 HEAP32[i15 >> 2] = i32;
 HEAP32[i13 >> 2] = i59;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i34, i12, i13);
 i13 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i15 = i13 + 8 | 0;
   i12 = i15 | 0;
   i59 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i59;
   if ((i59 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i33, i34, 1);
 i13 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i34 = i13 + 8 | 0;
   i15 = i34 | 0;
   i59 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i59;
   if ((i59 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
  }
 } while (0);
 do {
  if (i26) {
   if (!(__ZN7WebCoreL27needInterchangeNewlineAfterERKNS_15VisiblePositionE(i31) | 0)) {
    i60 = i6;
    i61 = 140;
    break;
   }
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i35, i33, 0);
   i13 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i31, i35) | 0;
   i34 = HEAP32[i35 >> 2] | 0;
   do {
    if ((i34 | 0) != 0) {
     i59 = i34 + 8 | 0;
     i15 = i59 | 0;
     i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
    }
   } while (0);
   i34 = HEAP32[H_BASE + 320 >> 2] | 0;
   if (i13) {
    i21 = HEAP32[i34 >> 2] | 0;
    HEAP32[i1 >> 2] = i21;
    if ((i21 | 0) == 0) {
     break;
    }
    i59 = i21 | 0;
    HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 2;
    break;
   }
   __ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE(i18, i34);
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i36, i31, 0);
   i34 = i36 | 0;
   i59 = HEAP32[i34 >> 2] | 0;
   do {
    if ((i59 | 0) != 0) {
     i21 = HEAP32[i59 + 8 >> 2] | 0;
     i12 = i59 + 8 | 0;
     i15 = i12 - 8 | 0;
     HEAP32[i12 >> 2] = i21;
     do {
      if ((i21 | 0) < 1) {
       if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15);
      }
     } while (0);
     i15 = HEAP32[i34 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     i12 = i15 + 8 | 0;
     i15 = i12 | 0;
     i21 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   if ((i4 | 0) == 0) {
    i60 = i59;
    i61 = 140;
    break;
   }
   i34 = i37 | 0;
   HEAP32[i34 >> 2] = 0;
   if ((__ZN7WebCore5Range21compareBoundaryPointsEPNS_4NodeEiS2_iRi(i59, 0, i4, 0, i34) | 0) << 16 >> 16 <= -1) {
    i60 = i59;
    i61 = 140;
    break;
   }
   i34 = HEAP32[HEAP32[H_BASE + 320 >> 2] >> 2] | 0;
   HEAP32[i1 >> 2] = i34;
   if ((i34 | 0) == 0) {
    break;
   }
   i13 = i34 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
  } else {
   i60 = i6;
   i61 = 140;
  }
 } while (0);
 if ((i61 | 0) == 140) {
  i6 = __ZN7WebCore23StyledMarkupAccumulator14serializeNodesEPNS_4NodeES2_(i30, i60, i4) | 0;
  L193 : do {
   if (!((i51 | 0) == 0 | (i6 | 0) == 0)) {
    i4 = (i3 | 0) == 0;
    i60 = i3 + 8 | 0;
    i37 = i3 + 4 | 0;
    i36 = i3 | 0;
    i35 = i44 + 12 | 0;
    i13 = i44;
    i34 = i11 | 0;
    i12 = i11 + 4 | 0;
    i21 = i10 | 0;
    i15 = i39 | 0;
    i32 = i9 | 0;
    i58 = i8 | 0;
    i2 = i44;
    i57 = i44 + 48 | 0;
    i55 = i38 | 0;
    i14 = i6 + 16 | 0;
    L195 : while (1) {
     i24 = HEAP32[i14 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break L193;
     }
     i56 = i24 | 0;
     do {
      if ((i56 | 0) != (i44 | 0) | i5) {
       __ZN7WebCore23StyledMarkupAccumulator12wrapWithNodeERNS_4NodeEbNS0_21RangeFullySelectsNodeE(i30, i56, i5, 1);
      } else {
       L200 : do {
        if ((HEAP32[i35 >> 2] & 16 | 0) == 0) {
         i62 = 0;
         i63 = 1;
         i61 = 150;
        } else {
         i23 = HEAP32[i57 >> 2] | 0;
         if ((i23 | 0) == 0) {
          i64 = 0;
         } else {
          i64 = HEAP32[i23 + 8 >> 2] | 0;
         }
         i23 = __ZN3WTF10fastMallocEj(16) | 0;
         i49 = i23;
         __ZN7WebCore12EditingStyleC1EPKNS_15StylePropertiesE(i49, i64);
         __ZN7WebCore12EditingStyle19mergeStyleFromRulesEPNS_13StyledElementE(i49, i2);
         if ((i23 | 0) == 0) {
          i62 = 0;
          i63 = 1;
          i61 = 150;
          break;
         }
         i54 = HEAP32[i23 + 4 >> 2] | 0;
         if ((i54 | 0) == 0) {
          i62 = i49;
          i63 = 0;
          i61 = 150;
          break;
         }
         __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i38, i54 | 0, 24);
         i54 = HEAP32[i55 >> 2] | 0;
         do {
          if ((i54 | 0) == 0) {
           i23 = __ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i13, __ZN7WebCore9HTMLNames14backgroundAttrE) | 0;
           i53 = HEAP32[i55 >> 2] | 0;
           if ((i53 | 0) != 0) {
            i65 = i53;
            i66 = i23;
            break;
           }
           if (i23) {
            i67 = i49;
            i68 = 0;
            i61 = 156;
            break L200;
           } else {
            i69 = i49;
            i70 = 0;
            break L200;
           }
          } else {
           i65 = i54;
           i66 = 0;
          }
         } while (0);
         i54 = i65 | 0;
         i23 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
         if ((i23 | 0) == 0) {
          __ZN7WebCore8CSSValue7destroyEv(i65);
          if (i66) {
           i67 = i49;
           i68 = 0;
           i61 = 156;
           break;
          } else {
           i69 = i49;
           i70 = 0;
           break;
          }
         } else {
          HEAP32[i54 >> 2] = i23;
          if (i66) {
           i67 = i49;
           i68 = 0;
           i61 = 156;
           break;
          } else {
           i69 = i49;
           i70 = 0;
           break;
          }
         }
        }
       } while (0);
       if ((i61 | 0) == 150) {
        i61 = 0;
        if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i13, __ZN7WebCore9HTMLNames14backgroundAttrE) | 0) {
         i67 = i62;
         i68 = i63;
         i61 = 156;
        } else {
         i69 = i62;
         i70 = i63;
        }
       }
       do {
        if ((i61 | 0) == 156) {
         i61 = 0;
         i23 = HEAP32[i67 + 4 >> 2] | 0;
         i54 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i13, __ZN7WebCore9HTMLNames14backgroundAttrE) | 0) >> 2] | 0;
         do {
          if ((i54 | 0) == 0) {
           i71 = 0;
           i72 = 1;
          } else {
           i53 = i54 | 0;
           i22 = HEAP32[i53 >> 2] | 0;
           i48 = i22 + 2 | 0;
           HEAP32[i53 >> 2] = i22 + 4;
           if ((i48 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i54);
            i73 = HEAP32[i53 >> 2] | 0;
           } else {
            HEAP32[i53 >> 2] = i48;
            i73 = i48;
           }
           i48 = i73 + 2 | 0;
           HEAP32[i53 >> 2] = i73 + 4;
           if ((i48 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i54);
            i71 = i54;
            i72 = 0;
            break;
           } else {
            HEAP32[i53 >> 2] = i48;
            i71 = i54;
            i72 = 0;
            break;
           }
          }
         } while (0);
         HEAP32[i34 >> 2] = H_BASE + 104;
         HEAP32[i12 >> 2] = i71;
         i54 = (i71 | 0) == 0;
         if (!i54) {
          i49 = i71 | 0;
          HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 2;
         }
         __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_12AtomicStringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i10, i11, H_BASE + 96 | 0);
         i49 = HEAP32[i21 >> 2] | 0;
         HEAP32[i21 >> 2] = 0;
         i48 = HEAP32[i12 >> 2] | 0;
         do {
          if ((i48 | 0) != 0) {
           i53 = i48 | 0;
           i22 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
           if ((i22 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i48);
            break;
           } else {
            HEAP32[i53 >> 2] = i22;
            break;
           }
          }
         } while (0);
         if ((i49 | 0) == 0) {
          break L195;
         }
         HEAP32[i15 >> 2] = i49;
         __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i23, 24, i39, 0, 0) | 0;
         i48 = HEAP32[i15 >> 2] | 0;
         do {
          if ((i48 | 0) != 0) {
           i22 = i48 | 0;
           i53 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
           if ((i53 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i48);
            break;
           } else {
            HEAP32[i22 >> 2] = i53;
            break;
           }
          }
         } while (0);
         do {
          if (!i54) {
           i48 = i71 | 0;
           i23 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
           if ((i23 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i71);
            break;
           } else {
            HEAP32[i48 >> 2] = i23;
            break;
           }
          }
         } while (0);
         if (i72) {
          i69 = i67;
          i70 = i68;
          break;
         }
         i54 = i71 | 0;
         i23 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
         if ((i23 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i71);
          i69 = i67;
          i70 = i68;
          break;
         } else {
          HEAP32[i54 >> 2] = i23;
          i69 = i67;
          i70 = i68;
          break;
         }
        }
       } while (0);
       i23 = i69 + 4 | 0;
       i54 = HEAP32[i23 >> 2] | 0;
       if ((i54 | 0) != 0) {
        __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i9, i54 | 0, 133);
        i54 = HEAP32[i32 >> 2] | 0;
        HEAP32[i32 >> 2] = 0;
        do {
         if ((i54 | 0) != 0) {
          if ((HEAP32[i54 + 4 >> 2] & 516604 | 0) == 472) {
           i74 = (HEAP32[i54 + 8 >> 2] | 0) == 3;
          } else {
           i74 = 0;
          }
          i48 = i54 | 0;
          i49 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
          if ((i49 | 0) == 0) {
           __ZN7WebCore8CSSValue7destroyEv(i54);
           if (i74) {
            break;
           }
          } else {
           HEAP32[i48 >> 2] = i49;
           if (i74) {
            break;
           }
          }
          __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(HEAP32[i23 >> 2] | 0, 133, 3, 0) | 0;
         }
        } while (0);
        i54 = HEAP32[i23 >> 2] | 0;
        do {
         if ((i54 | 0) == 0) {
          i61 = 198;
         } else {
          __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i8, i54 | 0, 335);
          i49 = HEAP32[i58 >> 2] | 0;
          HEAP32[i58 >> 2] = 0;
          if ((i49 | 0) == 0) {
           break;
          }
          if ((HEAP32[i49 + 4 >> 2] & 516604 | 0) == 472) {
           i75 = (HEAP32[i49 + 8 >> 2] | 0) == 3;
          } else {
           i75 = 0;
          }
          i48 = i49 | 0;
          i53 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
          if ((i53 | 0) == 0) {
           __ZN7WebCore8CSSValue7destroyEv(i49);
           if (i75) {
            break;
           } else {
            i61 = 198;
            break;
           }
          } else {
           HEAP32[i48 >> 2] = i53;
           if (i75) {
            break;
           } else {
            i61 = 198;
            break;
           }
          }
         }
        } while (0);
        if ((i61 | 0) == 198) {
         i61 = 0;
         __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(HEAP32[i23 >> 2] | 0, 335, 3, 0) | 0;
        }
        __ZN7WebCore23StyledMarkupAccumulator17wrapWithStyleNodeEPNS_15StylePropertiesERNS_8DocumentEb(i30, HEAP32[i23 >> 2] | 0, i41, 1);
       }
       if (i70) {
        break;
       }
       i54 = i69 | 0;
       i53 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
       if ((i53 | 0) == 0) {
        __ZN7WebCore12EditingStyleD1Ev(i69);
        __ZN3WTF8fastFreeEPv(i69);
        break;
       } else {
        HEAP32[i54 >> 2] = i53;
        break;
       }
      }
     } while (0);
     do {
      if (!i4) {
       i53 = HEAP32[i60 >> 2] | 0;
       if ((i53 | 0) == (HEAP32[i37 >> 2] | 0)) {
        __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i53 + 1 | 0);
        HEAP32[(HEAP32[i36 >> 2] | 0) + (HEAP32[i60 >> 2] << 2) >> 2] = i56;
        HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
        break;
       } else {
        HEAP32[(HEAP32[i36 >> 2] | 0) + (i53 << 2) >> 2] = i56;
        HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
        break;
       }
      }
     } while (0);
     if ((i56 | 0) == (i51 | 0)) {
      break L193;
     } else {
      i14 = i24 + 16 | 0;
     }
    }
    _WTFCrash();
   }
  } while (0);
  L294 : do {
   if (i26) {
    __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i40, i33, 0);
    i51 = __ZN7WebCoreL27needInterchangeNewlineAfterERKNS_15VisiblePositionE(i40) | 0;
    i3 = HEAP32[i40 >> 2] | 0;
    do {
     if ((i3 | 0) == 0) {
      i61 = 215;
     } else {
      i69 = i3 + 8 | 0;
      i70 = i69 | 0;
      i41 = (HEAP32[i70 >> 2] | 0) - 1 | 0;
      HEAP32[i70 >> 2] = i41;
      if ((i41 | 0) >= 1) {
       i61 = 215;
       break;
      }
      if ((HEAP32[i69 + 8 >> 2] | 0) != 0) {
       i61 = 215;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i69 - 8 | 0);
      if (!i51) {
       break L294;
      }
     }
    } while (0);
    if ((i61 | 0) == 215) {
     if (!i51) {
      break;
     }
    }
    __ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE(i18, HEAP32[H_BASE + 320 >> 2] | 0);
   }
  } while (0);
  __ZN7WebCore23StyledMarkupAccumulator11takeResultsEv(i1, i30);
 }
 i1 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i33 = i1 + 8 | 0;
   i18 = i33 | 0;
   i61 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i61;
   if ((i61 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i31 = i1 + 8 | 0;
   i33 = i31 | 0;
   i61 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
   HEAP32[i33 >> 2] = i61;
   if ((i61 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore23StyledMarkupAccumulatorD2Ev(i30);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore22createFragmentFromTextERNS_5RangeERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 320 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 80 | 0;
 i15 = i4 + 96 | 0;
 i16 = i4 + 112 | 0;
 i17 = i4 + 120 | 0;
 i18 = i4 + 128 | 0;
 i19 = i4 + 136 | 0;
 i20 = i4 + 144 | 0;
 i21 = i4 + 152 | 0;
 i22 = i4 + 160 | 0;
 i23 = i4 + 168 | 0;
 i24 = i4 + 176 | 0;
 i25 = i4 + 184 | 0;
 i26 = i4 + 192 | 0;
 i27 = i4 + 200 | 0;
 i28 = i4 + 208 | 0;
 i29 = i4 + 216 | 0;
 i30 = i4 + 232 | 0;
 i31 = i4 + 248 | 0;
 i32 = i4 + 264 | 0;
 i33 = i4 + 272 | 0;
 i34 = i4 + 280 | 0;
 i35 = i4 + 288 | 0;
 i36 = i4 + 296 | 0;
 i37 = i4 + 304 | 0;
 i38 = i4 + 312 | 0;
 i39 = HEAP32[i2 + 4 >> 2] | 0;
 __ZN7WebCore8Document22createDocumentFragmentEv(i18, i39);
 i40 = i18 | 0;
 i18 = HEAP32[i40 >> 2] | 0;
 HEAP32[i40 >> 2] = 0;
 i40 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i40 | 0) != 0) {
   if ((HEAP32[i40 + 4 >> 2] | 0) == 0) {
    break;
   }
   i3 = i19 | 0;
   HEAP32[i3 >> 2] = i40;
   i41 = i40 | 0;
   HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 2;
   i41 = HEAP32[i3 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i20, H_BASE + 48 | 0);
   __ZN3WTF6StringC1EPKc(i21, H_BASE + 40 | 0);
   do {
    if ((i41 | 0) == 0) {
     i42 = i21 | 0;
    } else {
     i43 = i21 | 0;
     __ZN3WTF10StringImpl7replaceEPS0_S1_(i17, i41, HEAP32[i20 >> 2] | 0, HEAP32[i43 >> 2] | 0);
     i44 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = HEAP32[i17 >> 2];
     if ((i44 | 0) == 0) {
      i42 = i43;
      break;
     }
     i45 = i44 | 0;
     i46 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
     if ((i46 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i44);
      i42 = i43;
      break;
     } else {
      HEAP32[i45 >> 2] = i46;
      i42 = i43;
      break;
     }
    }
   } while (0);
   i41 = HEAP32[i42 >> 2] | 0;
   do {
    if ((i41 | 0) != 0) {
     i43 = i41 | 0;
     i46 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
     if ((i46 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i41);
      break;
     } else {
      HEAP32[i43 >> 2] = i46;
      break;
     }
    }
   } while (0);
   i41 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i41 | 0) != 0) {
     i46 = i41 | 0;
     i43 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
     if ((i43 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i41);
      break;
     } else {
      HEAP32[i46 >> 2] = i43;
      break;
     }
    }
   } while (0);
   i41 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i41 | 0) != 0) {
     __ZN3WTF10StringImpl7replaceEtt(i16, i41, 13, 10);
     i43 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = HEAP32[i16 >> 2];
     if ((i43 | 0) == 0) {
      break;
     }
     i46 = i43 | 0;
     i45 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
     if ((i45 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i43);
      break;
     } else {
      HEAP32[i46 >> 2] = i45;
      break;
     }
    }
   } while (0);
   i41 = i2 + 12 | 0;
   i45 = HEAP32[i41 >> 2] | 0;
   if ((i45 | 0) > -1) {
    i47 = i45;
   } else {
    i45 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i41 >> 2] = i45;
    i47 = i45;
   }
   i45 = i2 + 8 | 0;
   i46 = HEAP32[i45 >> 2] | 0;
   if ((i46 | 0) == 0) {
    i48 = i47;
   } else {
    i43 = i46 + 8 | 0;
    HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
    i48 = HEAP32[i41 >> 2] | 0;
   }
   i43 = i11 | 0;
   HEAP32[i43 >> 2] = i46;
   HEAP32[i12 >> 2] = i48;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i14, i11, i12);
   i46 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i46 | 0) != 0) {
     i43 = i46 + 8 | 0;
     i44 = i43 | 0;
     i49 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     HEAP32[i44 >> 2] = i49;
     if ((i49 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i13, i14, 1);
   i46 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i46 | 0) != 0) {
     i43 = i46 + 8 | 0;
     i49 = i43 | 0;
     i44 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
     HEAP32[i49 >> 2] = i44;
     if ((i44 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
    }
   } while (0);
   i46 = i15 | 0;
   i43 = i13 | 0;
   i44 = HEAP32[i43 >> 2] | 0;
   HEAP32[i46 >> 2] = i44;
   if ((i44 | 0) != 0) {
    i49 = i44 + 8 | 0;
    HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
   }
   HEAP32[i15 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   i49 = HEAP32[i13 + 8 >> 2] | 0;
   i44 = i15 + 8 | 0;
   i50 = i44;
   i51 = HEAP32[i50 >> 2] & -8 | i49 & 7;
   HEAP32[i50 >> 2] = i51;
   HEAP8[i44] = i51 & 255 & -9 | i49 & 8;
   i49 = __ZNK7WebCore8Position13containerNodeEv(i15) | 0;
   i51 = HEAP32[i46 >> 2] | 0;
   do {
    if ((i51 | 0) != 0) {
     i46 = i51 + 8 | 0;
     i44 = i46 | 0;
     i50 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     HEAP32[i44 >> 2] = i50;
     if ((i50 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    }
   } while (0);
   do {
    if ((i49 | 0) == 0) {
     i52 = 0;
    } else {
     i51 = (HEAP32[i49 + 12 >> 2] & 2048 | 0) == 0;
     i46 = i49 + 32 | 0;
     if (i51) {
      i53 = i46 | 0;
     } else {
      i53 = HEAP32[i46 >> 2] | 0;
     }
     if ((HEAP32[i53 >> 2] | 0) == 0) {
      i52 = 0;
      break;
     }
     if (i51) {
      i54 = i46 | 0;
     } else {
      i54 = HEAP32[i46 >> 2] | 0;
     }
     i46 = HEAP32[i54 >> 2] | 0;
     if ((HEAP32[i46 + 20 >> 2] & 768 | 0) == 256) {
      i55 = HEAP32[(HEAP32[i46 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i55 = HEAP32[i46 + 36 >> 2] | 0;
     }
     i46 = HEAP32[i55 + 44 >> 2] & 7;
     i52 = (i46 | 0) != 4 & (i46 | 0) != 0;
    }
   } while (0);
   i49 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i49 | 0) != 0) {
     i46 = i49 + 8 | 0;
     i51 = i46 | 0;
     i50 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     HEAP32[i51 >> 2] = i50;
     if ((i50 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    }
   } while (0);
   L76 : do {
    if (i52) {
     i49 = i18 | 0;
     __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i23, i39, i19);
     i43 = i22 | 0;
     i46 = i23 | 0;
     i50 = HEAP32[i46 >> 2] | 0;
     HEAP32[i46 >> 2] = 0;
     HEAP32[i43 >> 2] = i50;
     i50 = i24 | 0;
     HEAP32[i50 >> 2] = 0;
     __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i49, i22, i50) | 0;
     i50 = HEAP32[i43 >> 2] | 0;
     do {
      if ((i50 | 0) != 0) {
       i43 = i50 + 8 | 0;
       i51 = i43 | 0;
       i44 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
       HEAP32[i51 >> 2] = i44;
       if ((i44 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
      }
     } while (0);
     i50 = HEAP32[i46 >> 2] | 0;
     do {
      if ((i50 | 0) != 0) {
       i43 = i50 + 8 | 0;
       i44 = i43 | 0;
       i51 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
       HEAP32[i44 >> 2] = i51;
       if ((i51 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
      }
     } while (0);
     i50 = HEAP32[i3 >> 2] | 0;
     do {
      if ((i50 | 0) != 0) {
       if (!(__ZNK3WTF10StringImpl8endsWithEt(i50, 10) | 0)) {
        break;
       }
       __ZN7WebCore18createBreakElementERNS_8DocumentE(i25, i39);
       i46 = i25 | 0;
       i43 = HEAP32[i46 >> 2] | 0;
       HEAP32[i46 >> 2] = 0;
       __ZN3WTF12AtomicString3addEPKh(i10, H_BASE + 8 | 0);
       i46 = i26 | 0;
       HEAP32[i46 >> 2] = HEAP32[i10 >> 2];
       __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i43 | 0, __ZN7WebCore9HTMLNames9classAttrE, i26);
       i51 = HEAP32[i46 >> 2] | 0;
       do {
        if ((i51 | 0) != 0) {
         i46 = i51 | 0;
         i44 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
         if ((i44 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i51);
          break;
         } else {
          HEAP32[i46 >> 2] = i44;
          break;
         }
        }
       } while (0);
       i51 = i27 | 0;
       HEAP32[i51 >> 2] = i43;
       i44 = i28 | 0;
       HEAP32[i44 >> 2] = 0;
       __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i49, i27, i44) | 0;
       i44 = HEAP32[i51 >> 2] | 0;
       if ((i44 | 0) == 0) {
        break;
       }
       i51 = i44 + 8 | 0;
       i44 = i51 | 0;
       i46 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
       HEAP32[i44 >> 2] = i46;
       if ((i46 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 >> 2] = i18;
    } else {
     i49 = HEAP32[i3 >> 2] | 0;
     L102 : do {
      if ((i49 | 0) != 0) {
       if ((HEAP32[i49 + 16 >> 2] & 32 | 0) == 0) {
        i50 = HEAP32[i49 + 8 >> 2] | 0;
        i51 = HEAP32[i49 + 4 >> 2] | 0;
        i46 = 0;
        while (1) {
         if (i46 >>> 0 >= i51 >>> 0) {
          break L102;
         }
         if ((HEAP16[i50 + (i46 << 1) >> 1] | 0) == 10) {
          i56 = i46;
          break;
         } else {
          i46 = i46 + 1 | 0;
         }
        }
       } else {
        i46 = HEAP32[i49 + 8 >> 2] | 0;
        i50 = HEAP32[i49 + 4 >> 2] | 0;
        i51 = 0;
        while (1) {
         if (i51 >>> 0 >= i50 >>> 0) {
          break L102;
         }
         if ((HEAP8[i46 + i51 | 0] | 0) == 10) {
          i56 = i51;
          break;
         } else {
          i51 = i51 + 1 | 0;
         }
        }
       }
       if ((i56 | 0) == -1) {
        break;
       }
       i51 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(__ZNK7WebCore5Range9firstNodeEv(i2) | 0, 1) | 0;
       do {
        if ((i51 | 0) == 0) {
         i57 = 0;
        } else {
         if ((HEAP32[i51 + 12 >> 2] & 4 | 0) == 0) {
          i57 = 0;
          break;
         }
         i46 = HEAP32[i51 + 44 >> 2] | 0;
         i50 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
         if ((i46 | 0) == (i50 | 0)) {
          i57 = 0;
          break;
         }
         i43 = HEAP32[i46 + 12 >> 2] | 0;
         if ((i43 | 0) == (HEAP32[i50 + 12 >> 2] | 0)) {
          if ((HEAP32[i46 + 16 >> 2] | 0) == (HEAP32[i50 + 16 >> 2] | 0)) {
           i57 = 0;
           break;
          }
         }
         i50 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
         if ((i46 | 0) == (i50 | 0)) {
          i57 = 0;
          break;
         }
         if ((i43 | 0) == (HEAP32[i50 + 12 >> 2] | 0)) {
          if ((HEAP32[i46 + 16 >> 2] | 0) == (HEAP32[i50 + 16 >> 2] | 0)) {
           i57 = 0;
           break;
          }
         }
         i50 = HEAP32[i41 >> 2] | 0;
         if ((i50 | 0) > -1) {
          i58 = i50;
         } else {
          i50 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
          HEAP32[i41 >> 2] = i50;
          i58 = i50;
         }
         i50 = HEAP32[i45 >> 2] | 0;
         if ((i50 | 0) == 0) {
          i59 = i58;
         } else {
          i46 = i50 + 8 | 0;
          HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
          i59 = HEAP32[i41 >> 2] | 0;
         }
         i46 = i8 | 0;
         HEAP32[i46 >> 2] = i50;
         HEAP32[i9 >> 2] = i59;
         __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i29, i8, i9);
         i50 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i50 | 0) != 0) {
           i46 = i50 + 8 | 0;
           i43 = i46 | 0;
           i44 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
           HEAP32[i43 >> 2] = i44;
           if ((i44 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
          }
         } while (0);
         i50 = (i51 | 0) != (__ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i29, 0) | 0);
         i46 = HEAP32[i29 >> 2] | 0;
         if ((i46 | 0) == 0) {
          i57 = i50;
          break;
         }
         i44 = i46 + 8 | 0;
         i46 = i44 | 0;
         i43 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
         HEAP32[i46 >> 2] = i43;
         if ((i43 | 0) >= 1) {
          i57 = i50;
          break;
         }
         if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
          i57 = i50;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
         i57 = i50;
        }
       } while (0);
       i50 = HEAP32[i41 >> 2] | 0;
       if ((i50 | 0) > -1) {
        i60 = i50;
       } else {
        i50 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
        HEAP32[i41 >> 2] = i50;
        i60 = i50;
       }
       i50 = HEAP32[i45 >> 2] | 0;
       if ((i50 | 0) == 0) {
        i61 = i60;
       } else {
        i44 = i50 + 8 | 0;
        HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
        i61 = HEAP32[i41 >> 2] | 0;
       }
       i44 = i6 | 0;
       HEAP32[i44 >> 2] = i50;
       HEAP32[i7 >> 2] = i61;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i30, i6, i7);
       i50 = HEAP32[i44 >> 2] | 0;
       do {
        if ((i50 | 0) != 0) {
         i44 = i50 + 8 | 0;
         i43 = i44 | 0;
         i46 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
         HEAP32[i43 >> 2] = i46;
         if ((i46 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
        }
       } while (0);
       i50 = (__ZN7WebCore24enclosingTextFormControlERKNS_8PositionE(i30) | 0) == 0;
       i44 = HEAP32[i30 >> 2] | 0;
       do {
        if ((i44 | 0) != 0) {
         i46 = i44 + 8 | 0;
         i43 = i46 | 0;
         i62 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
         HEAP32[i43 >> 2] = i62;
         if ((i62 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
        }
       } while (0);
       i44 = i31 | 0;
       HEAP32[i44 >> 2] = 0;
       i46 = i31 + 4 | 0;
       HEAP32[i46 >> 2] = 0;
       i62 = i31 + 8 | 0;
       HEAP32[i62 >> 2] = 0;
       __ZNK3WTF6String5splitEtbRNS_6VectorIS0_Lj0ENS_15CrashOnOverflowEEE(i19, 10, 1, i31);
       i43 = HEAP32[i62 >> 2] | 0;
       do {
        if ((i43 | 0) == 0) {
         HEAP32[i1 >> 2] = i18;
        } else {
         i63 = i32 | 0;
         i64 = i33 | 0;
         i65 = i5 | 0;
         i66 = i18 | 0;
         i67 = i37 | 0;
         i68 = i38 | 0;
         i69 = i35 | 0;
         i70 = i36 | 0;
         i71 = i34 | 0;
         i72 = 0;
         i73 = i43;
         while (1) {
          if (i73 >>> 0 <= i72 >>> 0) {
           i74 = 123;
           break;
          }
          i75 = (HEAP32[i44 >> 2] | 0) + (i72 << 2) | 0;
          i76 = HEAP32[i75 >> 2] | 0;
          if ((i76 | 0) == 0) {
           i77 = 1;
          } else {
           i77 = (HEAP32[i76 + 4 >> 2] | 0) == 0;
          }
          i72 = i72 + 1 | 0;
          do {
           if (i77 & (i72 | 0) == (i43 | 0)) {
            __ZN7WebCore18createBreakElementERNS_8DocumentE(i32, i39);
            i76 = HEAP32[i63 >> 2] | 0;
            HEAP32[i63 >> 2] = 0;
            i78 = i76 | 0;
            __ZN3WTF12AtomicString3addEPKh(i5, H_BASE + 8 | 0);
            HEAP32[i64 >> 2] = HEAP32[i65 >> 2];
            __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i78, __ZN7WebCore9HTMLNames9classAttrE, i33);
            i76 = HEAP32[i64 >> 2] | 0;
            if ((i76 | 0) == 0) {
             i79 = i78;
             break;
            }
            i80 = i76 | 0;
            i81 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
            if ((i81 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i76);
             i79 = i78;
             break;
            } else {
             HEAP32[i80 >> 2] = i81;
             i79 = i78;
             break;
            }
           } else {
            if (!i50) {
             __ZN7WebCore18createBreakElementERNS_8DocumentE(i34, i39);
             i78 = HEAP32[i71 >> 2] | 0;
             HEAP32[i71 >> 2] = 0;
             __ZN7WebCoreL23fillContainerFromStringEPNS_13ContainerNodeERKN3WTF6StringE(i66, i75);
             i79 = i78 | 0;
             break;
            }
            if (i57) {
             __ZN7WebCore7Element27cloneElementWithoutChildrenEv(i35, i51);
             i78 = HEAP32[i69 >> 2] | 0;
             HEAP32[i69 >> 2] = 0;
             i82 = i78;
            } else {
             __ZN7WebCore29createDefaultParagraphElementERNS_8DocumentE(i36, i39);
             i78 = HEAP32[i70 >> 2] | 0;
             HEAP32[i70 >> 2] = 0;
             i82 = i78 | 0;
            }
            __ZN7WebCoreL23fillContainerFromStringEPNS_13ContainerNodeERKN3WTF6StringE(i82 | 0, i75);
            i79 = i82;
           }
          } while (0);
          HEAP32[i67 >> 2] = i79;
          HEAP32[i68 >> 2] = 0;
          __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i66, i37, i68) | 0;
          i75 = HEAP32[i67 >> 2] | 0;
          do {
           if ((i75 | 0) != 0) {
            i78 = i75 + 8 | 0;
            i81 = i78 | 0;
            i80 = (HEAP32[i81 >> 2] | 0) - 1 | 0;
            HEAP32[i81 >> 2] = i80;
            if ((i80 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i78 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i78 - 8 | 0);
           }
          } while (0);
          i73 = HEAP32[i62 >> 2] | 0;
          if (i72 >>> 0 >= i43 >>> 0) {
           break;
          }
         }
         if ((i74 | 0) == 123) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         HEAP32[i1 >> 2] = i18;
         if ((i73 | 0) == 0) {
          break;
         }
         i72 = HEAP32[i44 >> 2] | 0;
         i67 = i72 + (i73 << 2) | 0;
         i68 = i72;
         while (1) {
          i72 = HEAP32[i68 >> 2] | 0;
          do {
           if ((i72 | 0) != 0) {
            i66 = i72 | 0;
            i70 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
            if ((i70 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i72);
             break;
            } else {
             HEAP32[i66 >> 2] = i70;
             break;
            }
           }
          } while (0);
          i68 = i68 + 4 | 0;
          if ((i68 | 0) == (i67 | 0)) {
           break;
          }
         }
         HEAP32[i62 >> 2] = 0;
        }
       } while (0);
       i62 = HEAP32[i44 >> 2] | 0;
       if ((i62 | 0) == 0) {
        break L76;
       }
       HEAP32[i44 >> 2] = 0;
       HEAP32[i46 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i62);
       break L76;
      }
     } while (0);
     __ZN7WebCoreL23fillContainerFromStringEPNS_13ContainerNodeERKN3WTF6StringE(i18 | 0, i19);
     HEAP32[i1 >> 2] = i18;
    }
   } while (0);
   i41 = HEAP32[i3 >> 2] | 0;
   if ((i41 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i45 = i41 | 0;
   i49 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
   if ((i49 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i41);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i45 >> 2] = i49;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i18;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24createFragmentFromMarkupERNS_8DocumentERKN3WTF6StringES5_NS_19ParserContentPolicyE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 64 | 0;
 i11 = i6 + 80 | 0;
 i12 = i6 + 128 | 0;
 i13 = i6 + 136 | 0;
 __ZN7WebCore15HTMLBodyElement6createERNS_8DocumentE(i12, i2);
 i14 = i12 | 0;
 i12 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 __ZN7WebCore16DocumentFragment6createERNS_8DocumentE(i13, i2);
 i14 = i13 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 __ZN7WebCore16DocumentFragment9parseHTMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyE(i13, i3, i12 | 0, i5);
 i5 = i4 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    break;
   }
   i14 = __ZN7WebCore8blankURLEv() | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i5 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0) {
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i5 >> 2] | 0, HEAP32[i2 + 404 >> 2] | 0) | 0) {
    break;
   }
   __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i9, 0, i4);
   i14 = i13 + 36 | 0;
   while (1) {
    i15 = HEAP32[i14 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i16 = 0;
     i17 = 0;
     i18 = 1;
     break;
    }
    if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
     i14 = i15 + 28 | 0;
    } else {
     i19 = 8;
     break;
    }
   }
   do {
    if ((i19 | 0) == 8) {
     i14 = i10 | 0;
     i20 = i10 + 4 | 0;
     i21 = i10 + 8 | 0;
     i22 = i11 | 0;
     i23 = i10;
     i24 = i10 + 4 | 0;
     i25 = i13 | 0;
     i26 = 0;
     i27 = 0;
     i28 = 0;
     i29 = i15;
     L11 : while (1) {
      i30 = i29;
      L13 : do {
       if (__ZNK7WebCore7Element13hasAttributesEv(i30) | 0) {
        i31 = i29 + 48 | 0;
        i32 = HEAP32[i31 >> 2] | 0;
        i33 = HEAP32[i32 + 4 >> 2] | 0;
        if ((i33 & 1 | 0) == 0) {
         i34 = i33 >>> 1 & 134217727;
        } else {
         i34 = HEAP32[i32 + 32 >> 2] | 0;
        }
        if ((i34 | 0) == 0) {
         i35 = i28;
         i36 = i27;
         i37 = i26;
         break;
        }
        i38 = i29;
        i39 = (i29 | 0) == 0;
        i40 = i29 + 8 | 0;
        i41 = i26;
        i42 = i27;
        i43 = i28;
        i44 = 0;
        i45 = i32;
        i32 = i33;
        while (1) {
         i33 = (i32 & 1 | 0) == 0;
         if (i33) {
          i46 = i32 >>> 1 & 134217727;
         } else {
          i46 = HEAP32[i45 + 32 >> 2] | 0;
         }
         if (i46 >>> 0 <= i44 >>> 0) {
          i19 = 21;
          break L11;
         }
         if (i33) {
          i47 = i45 + 20 | 0;
         } else {
          i47 = HEAP32[i45 + 24 >> 2] | 0;
         }
         i33 = i47 + (i44 << 3) | 0;
         do {
          if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i38 >> 2] | 0) + 376 >> 2] & 1](i30, i33) | 0) {
           i48 = i47 + (i44 << 3) + 4 | 0;
           i49 = HEAP32[i48 >> 2] | 0;
           if ((i49 | 0) == 0) {
            i50 = i43;
            i51 = i42;
            i52 = i41;
            break;
           }
           if ((HEAP32[i49 + 4 >> 2] | 0) == 0) {
            i50 = i43;
            i51 = i42;
            i52 = i41;
            break;
           }
           if (!i39) {
            HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
           }
           __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i11, i9, i48 | 0);
           HEAP32[i14 >> 2] = i30;
           i48 = HEAP32[i33 >> 2] | 0;
           HEAP32[i20 >> 2] = i48;
           i49 = i48 | 0;
           HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
           i49 = HEAP32[i22 >> 2] | 0;
           HEAP32[i21 >> 2] = i49;
           if ((i49 | 0) != 0) {
            i48 = i49 | 0;
            HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 2;
           }
           do {
            if ((i41 | 0) == (i42 | 0)) {
             i48 = i42 + 1 | 0;
             do {
              if (i43 >>> 0 > i10 >>> 0) {
               i19 = 40;
              } else {
               i49 = i43 + (i42 * 12 & -1) | 0;
               if (i49 >>> 0 <= i10 >>> 0) {
                i19 = 40;
                break;
               }
               i53 = (i23 - i43 | 0) / 12 & -1;
               i54 = i48 + (i42 >>> 2) | 0;
               i55 = i54 >>> 0 > 16 >>> 0 ? i54 : 16;
               i54 = i55 >>> 0 > i48 >>> 0 ? i55 : i48;
               do {
                if (i42 >>> 0 < i54 >>> 0) {
                 if (i54 >>> 0 > 357913941 >>> 0) {
                  i19 = 47;
                  break L11;
                 }
                 i55 = __ZN3WTF18fastMallocGoodSizeEj(i54 * 12 & -1) | 0;
                 i56 = (i55 >>> 0) / 12 & -1;
                 i57 = __ZN3WTF10fastMallocEj(i55) | 0;
                 __ZN3WTF11VectorMoverILb0EN7WebCore15AttributeChangeEE4moveEPS2_S4_S4_(i43, i49, i57);
                 if ((i43 | 0) == 0) {
                  i58 = i57;
                  i59 = i56;
                  break;
                 }
                 i55 = (i57 | 0) == (i43 | 0);
                 __ZN3WTF8fastFreeEPv(i43);
                 i58 = i55 ? 0 : i57;
                 i59 = i55 ? 0 : i56;
                } else {
                 i58 = i43;
                 i59 = i42;
                }
               } while (0);
               i60 = i58 + (i53 * 12 & -1) | 0;
               i61 = i58;
               i62 = i59;
              }
             } while (0);
             do {
              if ((i19 | 0) == 40) {
               i19 = 0;
               i49 = i48 + (i42 >>> 2) | 0;
               i54 = i49 >>> 0 > 16 >>> 0 ? i49 : 16;
               i49 = i54 >>> 0 > i48 >>> 0 ? i54 : i48;
               if (i42 >>> 0 >= i49 >>> 0) {
                i60 = i10;
                i61 = i43;
                i62 = i42;
                break;
               }
               if (i49 >>> 0 > 357913941 >>> 0) {
                i19 = 42;
                break L11;
               }
               i54 = __ZN3WTF18fastMallocGoodSizeEj(i49 * 12 & -1) | 0;
               i49 = (i54 >>> 0) / 12 & -1;
               i56 = __ZN3WTF10fastMallocEj(i54) | 0;
               __ZN3WTF11VectorMoverILb0EN7WebCore15AttributeChangeEE4moveEPS2_S4_S4_(i43, i43 + (i42 * 12 & -1) | 0, i56);
               if ((i43 | 0) == 0) {
                i60 = i10;
                i61 = i56;
                i62 = i49;
                break;
               }
               i54 = (i56 | 0) == (i43 | 0);
               __ZN3WTF8fastFreeEPv(i43);
               i60 = i10;
               i61 = i54 ? 0 : i56;
               i62 = i54 ? 0 : i49;
              }
             } while (0);
             i49 = HEAP32[i60 >> 2] | 0;
             HEAP32[i61 + (i42 * 12 & -1) >> 2] = i49;
             if ((i49 | 0) != 0) {
              i54 = i49 + 8 | 0;
              HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
             }
             i54 = HEAP32[i60 + 4 >> 2] | 0;
             HEAP32[i61 + (i42 * 12 & -1) + 4 >> 2] = i54;
             i49 = i54 | 0;
             HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
             i49 = HEAP32[i60 + 8 >> 2] | 0;
             HEAP32[i61 + (i42 * 12 & -1) + 8 >> 2] = i49;
             if ((i49 | 0) == 0) {
              i63 = i61;
              i64 = i62;
              i65 = i48;
              break;
             }
             i54 = i49 | 0;
             HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 2;
             i63 = i61;
             i64 = i62;
             i65 = i48;
            } else {
             i54 = HEAP32[i14 >> 2] | 0;
             HEAP32[i43 + (i41 * 12 & -1) >> 2] = i54;
             if ((i54 | 0) != 0) {
              i49 = i54 + 8 | 0;
              HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
             }
             i49 = HEAP32[i20 >> 2] | 0;
             HEAP32[i43 + (i41 * 12 & -1) + 4 >> 2] = i49;
             i54 = i49 | 0;
             HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
             i54 = HEAP32[i21 >> 2] | 0;
             HEAP32[i43 + (i41 * 12 & -1) + 8 >> 2] = i54;
             if ((i54 | 0) != 0) {
              i49 = i54 | 0;
              HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 2;
             }
             i63 = i43;
             i64 = i42;
             i65 = i41 + 1 | 0;
            }
           } while (0);
           i49 = HEAP32[i21 >> 2] | 0;
           do {
            if ((i49 | 0) != 0) {
             i54 = i49 | 0;
             i56 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
             if ((i56 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i49);
              break;
             } else {
              HEAP32[i54 >> 2] = i56;
              break;
             }
            }
           } while (0);
           __ZN7WebCore13QualifiedNameD1Ev(i24);
           i49 = HEAP32[i14 >> 2] | 0;
           do {
            if ((i49 | 0) != 0) {
             i56 = i49 + 8 | 0;
             i54 = i56 | 0;
             i55 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
             HEAP32[i54 >> 2] = i55;
             if ((i55 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
            }
           } while (0);
           i49 = HEAP32[i22 >> 2] | 0;
           if ((i49 | 0) == 0) {
            i50 = i63;
            i51 = i64;
            i52 = i65;
            break;
           }
           i56 = i49 | 0;
           i55 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
           if ((i55 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i49);
            i50 = i63;
            i51 = i64;
            i52 = i65;
            break;
           } else {
            HEAP32[i56 >> 2] = i55;
            i50 = i63;
            i51 = i64;
            i52 = i65;
            break;
           }
          } else {
           i50 = i43;
           i51 = i42;
           i52 = i41;
          }
         } while (0);
         i33 = i44 + 1 | 0;
         if (i33 >>> 0 >= i34 >>> 0) {
          i35 = i50;
          i36 = i51;
          i37 = i52;
          break L13;
         }
         i55 = HEAP32[i31 >> 2] | 0;
         i41 = i52;
         i42 = i51;
         i43 = i50;
         i44 = i33;
         i45 = i55;
         i32 = HEAP32[i55 + 4 >> 2] | 0;
        }
       } else {
        i35 = i28;
        i36 = i27;
        i37 = i26;
       }
      } while (0);
      i30 = HEAP32[i29 + 36 >> 2] | 0;
      do {
       if ((i30 | 0) == 0) {
        if ((i29 | 0) == (i25 | 0)) {
         i19 = 9;
         break L11;
        }
        i32 = HEAP32[i29 + 28 >> 2] | 0;
        if ((i32 | 0) != 0) {
         i66 = i32;
         break;
        }
        i32 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i29, i25) | 0;
        if ((i32 | 0) == 0) {
         i19 = 9;
         break L11;
        } else {
         i66 = i32;
        }
       } else {
        i66 = i30;
       }
      } while (0);
      if ((HEAP32[i66 + 12 >> 2] & 4 | 0) == 0) {
       i67 = i66;
      } else {
       i26 = i37;
       i27 = i36;
       i28 = i35;
       i29 = i66;
       continue;
      }
      while (1) {
       if ((i67 | 0) == (i25 | 0)) {
        i19 = 9;
        break L11;
       }
       i30 = HEAP32[i67 + 28 >> 2] | 0;
       if ((i30 | 0) == 0) {
        i32 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i67, i25) | 0;
        if ((i32 | 0) == 0) {
         i19 = 9;
         break L11;
        } else {
         i68 = i32;
        }
       } else {
        i68 = i30;
       }
       if ((HEAP32[i68 + 12 >> 2] & 4 | 0) == 0) {
        i67 = i68;
       } else {
        i26 = i37;
        i27 = i36;
        i28 = i35;
        i29 = i68;
        continue L11;
       }
      }
     }
     if ((i19 | 0) == 9) {
      if ((i37 | 0) == 0) {
       i16 = i35;
       i17 = 0;
       i18 = 1;
       break;
      }
      i29 = i7 | 0;
      i28 = i8 | 0;
      i27 = 0;
      while (1) {
       i26 = HEAP32[i35 + (i27 * 12 & -1) >> 2] | 0;
       i25 = i35 + (i27 * 12 & -1) + 4 | 0;
       i22 = HEAP32[i35 + (i27 * 12 & -1) + 8 >> 2] | 0;
       do {
        if ((i22 | 0) == 0) {
         HEAP32[i29 >> 2] = 0;
        } else {
         if ((HEAP32[i22 + 16 >> 2] & 16 | 0) == 0) {
          __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i22);
          break;
         } else {
          HEAP32[i29 >> 2] = i22;
          i14 = i22 | 0;
          HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
          break;
         }
        }
       } while (0);
       HEAP32[i28 >> 2] = HEAP32[i29 >> 2];
       __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i26, i25, i8);
       i22 = HEAP32[i28 >> 2] | 0;
       do {
        if ((i22 | 0) != 0) {
         i14 = i22 | 0;
         i24 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
         if ((i24 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i22);
          break;
         } else {
          HEAP32[i14 >> 2] = i24;
          break;
         }
        }
       } while (0);
       i22 = i27 + 1 | 0;
       if (i22 >>> 0 < i37 >>> 0) {
        i27 = i22;
       } else {
        i16 = i35;
        i17 = i37;
        i18 = 0;
        break;
       }
      }
     } else if ((i19 | 0) == 42) {
      _WTFCrash();
     } else if ((i19 | 0) == 47) {
      _WTFCrash();
     } else if ((i19 | 0) == 21) {
      _WTFCrash();
     }
    }
   } while (0);
   i27 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i28 = i27 | 0;
     i29 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i28 >> 2] = i29;
      break;
     }
    }
   } while (0);
   if (!i18) {
    i27 = i16 + (i17 * 12 & -1) | 0;
    i29 = i16;
    while (1) {
     i28 = HEAP32[i29 + 8 >> 2] | 0;
     do {
      if ((i28 | 0) != 0) {
       i22 = i28 | 0;
       i25 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i25 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i28);
        break;
       } else {
        HEAP32[i22 >> 2] = i25;
        break;
       }
      }
     } while (0);
     __ZN7WebCore13QualifiedNameD1Ev(i29 + 4 | 0);
     i28 = HEAP32[i29 >> 2] | 0;
     do {
      if ((i28 | 0) != 0) {
       i25 = i28 + 8 | 0;
       i22 = i25 | 0;
       i26 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i26;
       if ((i26 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
      }
     } while (0);
     i29 = i29 + 12 | 0;
     if ((i29 | 0) == (i27 | 0)) {
      break;
     }
    }
   }
   if ((i16 | 0) == 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i16);
  }
 } while (0);
 HEAP32[i1 >> 2] = i13;
 if ((i12 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i13 = i12 + 8 | 0;
 i12 = i13 | 0;
 i1 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore23StyledMarkupAccumulator29traverseNodesForSerializationEPNS_4NodeES2_NS0_17NodeTraversalModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = (i4 | 0) == 0;
 i4 = i8 | 0;
 i10 = i8 + 4 | 0;
 i11 = i8 + 8 | 0;
 i12 = i11;
 i13 = (i3 | 0) == 0;
 i14 = i6 | 0;
 i15 = i1 | 0;
 i16 = i7;
 i17 = 0;
 i18 = i2;
 i2 = 0;
 i19 = 0;
 i20 = 0;
 L1 : while (1) {
  i21 = i17;
  i22 = i18;
  i23 = i20;
  L3 : while (1) {
   i24 = i21;
   i25 = i22;
   while (1) {
    i26 = i25;
    while (1) {
     HEAP32[i7 >> 2] = i26;
     if (!((i26 | 0) != (i3 | 0) & (i26 | 0) != 0)) {
      i27 = 89;
      break L1;
     }
     if ((HEAP32[i26 + 12 >> 2] & 2 | 0) == 0) {
      i27 = 8;
     } else {
      i28 = HEAP32[i26 + 36 >> 2] | 0;
      if ((i28 | 0) == 0) {
       i27 = 8;
      } else {
       i29 = i28;
       i30 = i26;
      }
     }
     do {
      if ((i27 | 0) == 8) {
       i27 = 0;
       i28 = HEAP32[i26 + 28 >> 2] | 0;
       if ((i28 | 0) != 0) {
        i29 = i28;
        i30 = i26;
        break;
       }
       i28 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i26) | 0;
       i29 = i28;
       i30 = HEAP32[i7 >> 2] | 0;
      }
     } while (0);
     if (!(__ZN7WebCore7isBlockEPKNS_4NodeE(i30) | 0)) {
      i27 = 13;
      break;
     }
     i28 = HEAP32[i7 >> 2] | 0;
     if ((HEAP32[i28 + 12 >> 2] & 1 | 0) != 0) {
      i31 = i28;
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 132 >> 2] & 7](i28) | 0) & (i29 | 0) == (i3 | 0)) {
      i26 = i3;
     } else {
      i27 = 13;
      break;
     }
    }
    if ((i27 | 0) == 13) {
     i27 = 0;
     i31 = HEAP32[i7 >> 2] | 0;
    }
    i26 = i31 + 32 | 0;
    if ((HEAP32[i31 + 12 >> 2] & 2048 | 0) == 0) {
     i32 = i26 | 0;
    } else {
     i32 = HEAP32[i26 >> 2] | 0;
    }
    L25 : do {
     if ((HEAP32[i32 >> 2] | 0) == 0) {
      do {
       if ((i31 | 0) == 0) {
        HEAP32[i4 >> 2] = 0;
        HEAP32[i10 >> 2] = 0;
        i26 = HEAP32[i12 >> 2] | 0;
        HEAP32[i12 >> 2] = i26 & -8;
        HEAP8[i11] = i26 & 255 & -16;
       } else {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 132 >> 2] & 7](i31) | 0) {
         __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i8, i31);
         break;
        }
        HEAP32[i14 >> 2] = i31;
        i26 = i31 + 8 | 0;
        HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i8, i6, 1);
        i26 = HEAP32[i14 >> 2] | 0;
        if ((i26 | 0) == 0) {
         break;
        }
        i28 = i26 + 8 | 0;
        i26 = i28 | 0;
        i33 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
        HEAP32[i26 >> 2] = i33;
        if ((i33 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
       }
      } while (0);
      i28 = (__ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i8, __ZN7WebCore9HTMLNames9selectTagE) | 0) == 0;
      i33 = HEAP32[i4 >> 2] | 0;
      do {
       if ((i33 | 0) == 0) {
        i27 = 30;
       } else {
        i26 = i33 + 8 | 0;
        i34 = i26 | 0;
        i35 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
        HEAP32[i34 >> 2] = i35;
        if ((i35 | 0) >= 1) {
         i27 = 30;
         break;
        }
        if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
         i27 = 30;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
        if (!i28) {
         i27 = 35;
         break L25;
        }
       }
      } while (0);
      if ((i27 | 0) == 30) {
       i27 = 0;
       if (!i28) {
        i27 = 35;
        break;
       }
      }
      i33 = HEAP32[i7 >> 2] | 0;
      i26 = HEAP32[i33 + 28 >> 2] | 0;
      if ((i26 | 0) == 0) {
       i36 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i33) | 0;
      } else {
       i36 = i26;
      }
      if (i13) {
       i37 = i36;
       i38 = i24;
       break;
      }
      i26 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i3, HEAP32[i7 >> 2] | 0) | 0;
      i37 = i26 ? i3 : i36;
      i38 = i24;
     } else {
      i27 = 35;
     }
    } while (0);
    if ((i27 | 0) == 35) {
     i27 = 0;
     if (i9) {
      __ZN7WebCore17MarkupAccumulator14appendStartTagERKNS_4NodeEPN3WTF7HashMapINS4_12AtomicStringEPNS4_16AtomicStringImplENS4_16AtomicStringHashENS4_10HashTraitsIS6_EENSA_IS8_EEEE(i15, HEAP32[i7 >> 2] | 0, 0);
     }
     i26 = HEAP32[i7 >> 2] | 0;
     if ((HEAP32[i26 + 12 >> 2] & 2 | 0) != 0) {
      if ((__ZNK7WebCore13ContainerNode14childNodeCountEv(i26) | 0) != 0) {
       i27 = 42;
       break;
      }
     }
     if (i9) {
      __ZN7WebCore17MarkupAccumulator12appendEndTagERKNS_4NodeE(i15, HEAP32[i7 >> 2] | 0);
     }
     i37 = i29;
     i38 = HEAP32[i7 >> 2] | 0;
    }
    i39 = (i37 | 0) == (i3 | 0);
    if ((HEAP32[(HEAP32[i7 >> 2] | 0) + 28 >> 2] | 0) == 0 | i39) {
     break;
    } else {
     i24 = i38;
     i25 = i37;
    }
   }
   if ((i27 | 0) == 42) {
    i27 = 0;
    if ((i23 | 0) == (i19 | 0)) {
     break;
    }
    HEAP32[i2 + (i23 << 2) >> 2] = HEAP32[i7 >> 2];
    i21 = i24;
    i22 = i29;
    i23 = i23 + 1 | 0;
    continue;
   }
   L64 : do {
    if (i39) {
     if (i9) {
      i25 = i38;
      i26 = i23;
      while (1) {
       if ((i26 | 0) == 0) {
        i40 = 0;
        i41 = i25;
        i42 = i3;
        break L64;
       }
       i33 = _llvm_uadd_with_overflow_i32(i26 | 0, -1 | 0) | 0;
       if (!tempRet0) {
        i27 = 94;
        break L1;
       }
       i35 = HEAP32[i2 + (i33 << 2) >> 2] | 0;
       __ZN7WebCore17MarkupAccumulator12appendEndTagERKNS_4NodeE(i15, i35);
       i25 = i35;
       i26 = i26 - 1 | 0;
      }
     } else {
      i26 = i38;
      i25 = i23;
      while (1) {
       if ((i25 | 0) == 0) {
        i40 = 0;
        i41 = i26;
        i42 = i3;
        break L64;
       }
       i35 = _llvm_uadd_with_overflow_i32(i25 | 0, -1 | 0) | 0;
       if (!tempRet0) {
        i27 = 95;
        break L1;
       }
       i26 = HEAP32[i2 + (i35 << 2) >> 2] | 0;
       i25 = i25 - 1 | 0;
      }
     }
    } else {
     if (i9) {
      i25 = i38;
      i26 = i23;
      while (1) {
       if ((i26 | 0) == 0) {
        i40 = 0;
        i41 = i25;
        i42 = i37;
        break L64;
       }
       i35 = _llvm_uadd_with_overflow_i32(i26 | 0, -1 | 0) | 0;
       if (!tempRet0) {
        i27 = 92;
        break L1;
       }
       i33 = HEAP32[i2 + (i35 << 2) >> 2] | 0;
       if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i37, i33) | 0) {
        i40 = i26;
        i41 = i25;
        i42 = i37;
        break L64;
       }
       __ZN7WebCore17MarkupAccumulator12appendEndTagERKNS_4NodeE(i15, i33);
       i25 = i33;
       i26 = i26 - 1 | 0;
      }
     } else {
      i26 = i38;
      i25 = i23;
      while (1) {
       if ((i25 | 0) == 0) {
        i40 = 0;
        i41 = i26;
        i42 = i37;
        break L64;
       }
       i33 = _llvm_uadd_with_overflow_i32(i25 | 0, -1 | 0) | 0;
       if (!tempRet0) {
        i27 = 93;
        break L1;
       }
       i35 = HEAP32[i2 + (i33 << 2) >> 2] | 0;
       if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i37, i35) | 0) {
        i40 = i25;
        i41 = i26;
        i42 = i37;
        break L64;
       }
       i26 = i35;
       i25 = i25 - 1 | 0;
      }
     }
    }
   } while (0);
   if ((i42 | 0) == 0) {
    i43 = 0;
   } else {
    i43 = HEAP32[i42 + 16 >> 2] | 0;
   }
   if (i39) {
    i21 = i41;
    i22 = i42;
    i23 = i40;
    continue;
   }
   i25 = HEAP32[i7 >> 2] | 0;
   if ((i25 | 0) == (i43 | 0)) {
    i21 = i41;
    i22 = i42;
    i23 = i40;
    continue;
   }
   i26 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i25, i41) | 0;
   i25 = HEAP32[(i26 ? i41 : HEAP32[i7 >> 2] | 0) + 16 >> 2] | 0;
   if ((i25 | 0) == 0 | (i25 | 0) == (i43 | 0)) {
    i21 = i41;
    i22 = i42;
    i23 = i40;
    continue;
   } else {
    i44 = i41;
    i45 = i25;
   }
   while (1) {
    i25 = i45 + 32 | 0;
    if ((HEAP32[i45 + 12 >> 2] & 2048 | 0) == 0) {
     i46 = i25 | 0;
    } else {
     i46 = HEAP32[i25 >> 2] | 0;
    }
    do {
     if ((HEAP32[i46 >> 2] | 0) == 0) {
      i47 = i44;
     } else {
      i25 = i45 | 0;
      if (!i9) {
       i47 = i25;
       break;
      }
      __ZN7WebCore23StyledMarkupAccumulator12wrapWithNodeERNS_4NodeEbNS0_21RangeFullySelectsNodeE(i1, i25, 0, 0);
      i47 = i25;
     }
    } while (0);
    i25 = HEAP32[i45 + 16 >> 2] | 0;
    if ((i25 | 0) == 0 | (i25 | 0) == (i43 | 0)) {
     i21 = i47;
     i22 = i42;
     i23 = i40;
     continue L3;
    } else {
     i44 = i47;
     i45 = i25;
    }
   }
  }
  i23 = i19 + 1 | 0;
  do {
   if (i2 >>> 0 > i7 >>> 0) {
    i27 = 46;
   } else {
    if ((i2 + (i19 << 2) | 0) >>> 0 <= i7 >>> 0) {
     i27 = 46;
     break;
    }
    i22 = i16 - i2 >> 2;
    i21 = i23 + (i19 >>> 2) | 0;
    i25 = i21 >>> 0 > 16 >>> 0 ? i21 : 16;
    i21 = i25 >>> 0 > i23 >>> 0 ? i25 : i23;
    do {
     if (i19 >>> 0 < i21 >>> 0) {
      if (i21 >>> 0 > 1073741823 >>> 0) {
       i27 = 53;
       break L1;
      }
      i25 = __ZN3WTF18fastMallocGoodSizeEj(i21 << 2) | 0;
      i26 = i25 >>> 2;
      i35 = __ZN3WTF10fastMallocEj(i25) | 0;
      i25 = i35;
      i33 = i2;
      _memcpy(i35 | 0, i33 | 0, i19 << 2) | 0;
      if ((i2 | 0) == 0) {
       i48 = i25;
       i49 = i26;
       break;
      }
      i35 = (i25 | 0) == (i2 | 0);
      __ZN3WTF8fastFreeEPv(i33);
      i48 = i35 ? 0 : i25;
      i49 = i35 ? 0 : i26;
     } else {
      i48 = i2;
      i49 = i19;
     }
    } while (0);
    i50 = i48 + (i22 << 2) | 0;
    i51 = i48;
    i52 = i49;
   }
  } while (0);
  do {
   if ((i27 | 0) == 46) {
    i27 = 0;
    i21 = i23 + (i19 >>> 2) | 0;
    i26 = i21 >>> 0 > 16 >>> 0 ? i21 : 16;
    i21 = i26 >>> 0 > i23 >>> 0 ? i26 : i23;
    if (i19 >>> 0 >= i21 >>> 0) {
     i50 = i7;
     i51 = i2;
     i52 = i19;
     break;
    }
    if (i21 >>> 0 > 1073741823 >>> 0) {
     i27 = 48;
     break L1;
    }
    i26 = __ZN3WTF18fastMallocGoodSizeEj(i21 << 2) | 0;
    i21 = i26 >>> 2;
    i35 = __ZN3WTF10fastMallocEj(i26) | 0;
    i26 = i35;
    i25 = i2;
    _memcpy(i35 | 0, i25 | 0, i19 << 2) | 0;
    if ((i2 | 0) == 0) {
     i50 = i7;
     i51 = i26;
     i52 = i21;
     break;
    }
    i35 = (i26 | 0) == (i2 | 0);
    __ZN3WTF8fastFreeEPv(i25);
    i50 = i7;
    i51 = i35 ? 0 : i26;
    i52 = i35 ? 0 : i21;
   }
  } while (0);
  HEAP32[i51 + (i19 << 2) >> 2] = HEAP32[i50 >> 2];
  i17 = i24;
  i18 = i29;
  i2 = i51;
  i19 = i52;
  i20 = i23;
 }
 if ((i27 | 0) == 48) {
  _WTFCrash();
  return 0;
 } else if ((i27 | 0) == 89) {
  if ((i2 | 0) == 0) {
   STACKTOP = i5;
   return i24 | 0;
  }
  __ZN3WTF8fastFreeEPv(i2);
  STACKTOP = i5;
  return i24 | 0;
 } else if ((i27 | 0) == 53) {
  _WTFCrash();
  return 0;
 } else if ((i27 | 0) == 92) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i27 | 0) == 93) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i27 | 0) == 94) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i27 | 0) == 95) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCoreL23fillContainerFromStringEPNS_13ContainerNodeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i3 + 56 | 0;
 i11 = i3 + 64 | 0;
 i12 = i3 + 72 | 0;
 i13 = i3 + 80 | 0;
 i14 = i3 + 88 | 0;
 i15 = i3 + 96 | 0;
 i16 = i3 + 104 | 0;
 i17 = i3 + 112 | 0;
 i18 = i3 + 120 | 0;
 i19 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i20 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   if ((HEAP32[i20 + 4 >> 2] | 0) == 0) {
    break;
   }
   i21 = i7 | 0;
   HEAP32[i21 >> 2] = 0;
   i22 = i7 + 4 | 0;
   HEAP32[i22 >> 2] = 0;
   i23 = i7 + 8 | 0;
   HEAP32[i23 >> 2] = 0;
   __ZNK3WTF6String5splitEtbRNS_6VectorIS0_Lj0ENS_15CrashOnOverflowEEE(i2, 9, 1, i7);
   i24 = i8 | 0;
   i25 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i24 >> 2] = i25;
   if ((i25 | 0) != 0) {
    i26 = i25 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
   }
   i26 = HEAP32[i23 >> 2] | 0;
   L7 : do {
    if ((i26 | 0) != 0) {
     i25 = i16 | 0;
     i27 = i17 | 0;
     i28 = i18 | 0;
     i29 = i12 | 0;
     i30 = i13 | 0;
     i31 = i14 | 0;
     i32 = i15 | 0;
     i33 = i9 | 0;
     i34 = i10 | 0;
     i35 = i11 | 0;
     i36 = 0;
     i37 = 1;
     i38 = i26;
     while (1) {
      if (i38 >>> 0 <= i36 >>> 0) {
       break;
      }
      i39 = (HEAP32[i21 >> 2] | 0) + (i36 << 2) | 0;
      i40 = HEAP32[i39 >> 2] | 0;
      do {
       if ((i40 | 0) != 0) {
        if ((HEAP32[i40 + 4 >> 2] | 0) == 0) {
         break;
        }
        i41 = HEAP32[i24 >> 2] | 0;
        do {
         if ((i41 | 0) != 0) {
          if ((HEAP32[i41 + 4 >> 2] | 0) == 0) {
           break;
          }
          __ZN7WebCore20createTabSpanElementERNS_8DocumentERKN3WTF6StringE(i10, i19, i8);
          i42 = HEAP32[i34 >> 2] | 0;
          HEAP32[i34 >> 2] = 0;
          HEAP32[i33 >> 2] = i42;
          HEAP32[i35 >> 2] = 0;
          __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i9, i35) | 0;
          i42 = HEAP32[i33 >> 2] | 0;
          do {
           if ((i42 | 0) != 0) {
            i43 = i42 + 8 | 0;
            i44 = i43 | 0;
            i45 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
            HEAP32[i44 >> 2] = i45;
            if ((i45 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
           }
          } while (0);
          i42 = HEAP32[i34 >> 2] | 0;
          do {
           if ((i42 | 0) != 0) {
            i43 = i42 + 8 | 0;
            i45 = i43 | 0;
            i44 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
            HEAP32[i45 >> 2] = i44;
            if ((i44 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
           }
          } while (0);
          i42 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
          if ((i42 | 0) != 0) {
           i43 = i42 | 0;
           HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
          }
          i43 = HEAP32[i24 >> 2] | 0;
          HEAP32[i24 >> 2] = i42;
          if ((i43 | 0) == 0) {
           break;
          }
          i42 = i43 | 0;
          i44 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
          if ((i44 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i43);
           break;
          } else {
           HEAP32[i42 >> 2] = i44;
           break;
          }
         }
        } while (0);
        __ZN7WebCore30stringWithRebalancedWhitespaceERKN3WTF6StringEbb(i13, i39, i37, (i36 + 1 | 0) == (i26 | 0));
        __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i12, i19, i13);
        i41 = HEAP32[i29 >> 2] | 0;
        HEAP32[i29 >> 2] = 0;
        i44 = i41 | 0;
        i41 = HEAP32[i30 >> 2] | 0;
        do {
         if ((i41 | 0) != 0) {
          i42 = i41 | 0;
          i43 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
          if ((i43 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i41);
           break;
          } else {
           HEAP32[i42 >> 2] = i43;
           break;
          }
         }
        } while (0);
        HEAP32[i31 >> 2] = i44;
        HEAP32[i32 >> 2] = 0;
        __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i14, i32) | 0;
        i41 = HEAP32[i31 >> 2] | 0;
        if ((i41 | 0) == 0) {
         break;
        }
        i43 = i41 + 8 | 0;
        i41 = i43 | 0;
        i42 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
        HEAP32[i41 >> 2] = i42;
        if ((i42 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
       }
      } while (0);
      i39 = i36 + 1 | 0;
      do {
       if ((i39 | 0) == (i26 | 0)) {
        i40 = HEAP32[i24 >> 2] | 0;
        if ((i40 | 0) == 0) {
         break;
        }
        if ((HEAP32[i40 + 4 >> 2] | 0) == 0) {
         break;
        }
        __ZN7WebCore20createTabSpanElementERNS_8DocumentERKN3WTF6StringE(i17, i19, i8);
        i40 = HEAP32[i27 >> 2] | 0;
        HEAP32[i27 >> 2] = 0;
        HEAP32[i25 >> 2] = i40;
        HEAP32[i28 >> 2] = 0;
        __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i16, i28) | 0;
        i40 = HEAP32[i25 >> 2] | 0;
        do {
         if ((i40 | 0) != 0) {
          i43 = i40 + 8 | 0;
          i42 = i43 | 0;
          i41 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
          HEAP32[i42 >> 2] = i41;
          if ((i41 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
         }
        } while (0);
        i40 = HEAP32[i27 >> 2] | 0;
        if ((i40 | 0) == 0) {
         break;
        }
        i44 = i40 + 8 | 0;
        i40 = i44 | 0;
        i43 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
        HEAP32[i40 >> 2] = i43;
        if ((i43 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
       } else {
        __ZN3WTF6String6appendEh(i8, 9);
       }
      } while (0);
      if (i39 >>> 0 >= i26 >>> 0) {
       break L7;
      }
      i36 = i39;
      i37 = 0;
      i38 = HEAP32[i23 >> 2] | 0;
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   i26 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i38 = i26 | 0;
     i37 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
     if ((i37 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i38 >> 2] = i37;
      break;
     }
    }
   } while (0);
   i26 = HEAP32[i23 >> 2] | 0;
   if ((i26 | 0) != 0) {
    i24 = HEAP32[i21 >> 2] | 0;
    i37 = i24 + (i26 << 2) | 0;
    i26 = i24;
    while (1) {
     i24 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i38 = i24 | 0;
       i36 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
       if ((i36 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i38 >> 2] = i36;
        break;
       }
      }
     } while (0);
     i26 = i26 + 4 | 0;
     if ((i26 | 0) == (i37 | 0)) {
      break;
     }
    }
    HEAP32[i23 >> 2] = 0;
   }
   i37 = HEAP32[i21 >> 2] | 0;
   if ((i37 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   HEAP32[i21 >> 2] = 0;
   HEAP32[i22 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i37);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore29createBlockPlaceholderElementERNS_8DocumentE(i5, i19);
 i19 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i19 >> 2] = i5;
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i4, i5) | 0;
 i5 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i19 = i5 + 8 | 0;
   i4 = i19 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i5 + 8 | 0;
 i5 = i8 | 0;
 i19 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i19;
 if ((i19 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore23StyledMarkupAccumulator10appendTextERN3WTF13StringBuilderERKNS_4TextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 80 | 0;
 i13 = i4 + 88 | 0;
 i14 = i3 | 0;
 i15 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((HEAP32[i15 + 12 >> 2] & 20 | 0) != 20) {
    i16 = 0;
    i17 = i15;
    break;
   }
   i16 = (HEAP32[(HEAP32[i15 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0) + 12 >> 2] | 0);
   i17 = i15;
  }
 } while (0);
 i15 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i18 = 0;
  } else {
   if ((HEAP32[i15 + 16 >> 2] | 0) != (i17 | 0)) {
    i18 = 0;
    break;
   }
   i19 = HEAP32[i1 + 68 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i18 = 0;
    break;
   }
   if ((HEAP32[i19 + 4 >> 2] | 0) == 0) {
    i18 = 0;
    break;
   }
   i20 = i16 ^ 1;
   if (i16) {
    __ZN7WebCore17MarkupAccumulator10appendTextERN3WTF13StringBuilderERKNS_4TextE(i1 | 0, i2, i3);
    STACKTOP = i4;
    return;
   }
   __ZNK7WebCore12EditingStyle4copyEv(i8, i19);
   i19 = i8 | 0;
   i21 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   __ZN7WebCore12EditingStyle11forceInlineEv(i21);
   i19 = i21 + 4 | 0;
   __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(HEAP32[i19 >> 2] | 0, 79, 3, 0) | 0;
   i22 = HEAP32[i19 >> 2] | 0;
   i19 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0;
   __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 208 | 0, 13);
   __ZNK7WebCore15StyleProperties6asTextEv(i5, i22);
   __ZN7WebCore17MarkupAccumulator20appendAttributeValueERN3WTF13StringBuilderERKNS1_6StringEb(i1 | 0, i2, i5, (HEAP8[i19 + 1576 | 0] & 1) != 0);
   i19 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i22 = i19 | 0;
     i23 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i22 >> 2] = i23;
      break;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 88 | 0, 2);
   if ((i21 | 0) == 0) {
    i18 = i20;
    break;
   }
   i19 = i21 | 0;
   i23 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i21);
    __ZN3WTF8fastFreeEPv(i21);
    i18 = i20;
    break;
   } else {
    HEAP32[i19 >> 2] = i23;
    i18 = i20;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 60 >> 2] | 0) != 1 | i16) {
   __ZN7WebCore17MarkupAccumulator10appendTextERN3WTF13StringBuilderERKNS_4TextE(i1 | 0, i2, i3);
   if (i18) {
    break;
   }
   STACKTOP = i4;
   return;
  } else {
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i9, i14);
   i5 = (__ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i9, __ZN7WebCore9HTMLNames9selectTagE) | 0) == 0;
   i8 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i17 = i8 + 8 | 0;
     i15 = i17 | 0;
     i23 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   i8 = HEAP32[i1 + 8 >> 2] | 0;
   if (i5) {
    __ZN7WebCore23StyledMarkupAccumulator12renderedTextERKNS_4NodeEPKNS_5RangeE(i10, 0, i14, i8);
   } else {
    __ZN7WebCore23StyledMarkupAccumulator19stringValueForRangeERKNS_4NodeEPKNS_5RangeE(i10, 0, i14, i8);
   }
   HEAP32[i11 >> 2] = 0;
   i8 = i11 + 4 | 0;
   HEAP32[i8 >> 2] = 0;
   i20 = i11 + 8 | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP8[i11 + 12 | 0] = 1;
   HEAP32[i11 + 16 >> 2] = 0;
   HEAP32[i11 + 20 >> 2] = 0;
   i21 = i10 | 0;
   i17 = HEAP32[i21 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i24 = 0;
   } else {
    i24 = HEAP32[i17 + 4 >> 2] | 0;
   }
   __ZN7WebCore17MarkupAccumulator33appendCharactersReplacingEntitiesERN3WTF13StringBuilderERKNS1_6StringEjjNS_10EntityMaskE(i11, i10, 0, i24, 7);
   __ZN3WTF13StringBuilder11shrinkToFitEv(i11);
   i17 = HEAP32[i8 >> 2] | 0;
   if ((i17 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i11);
    i23 = HEAP32[i8 >> 2] | 0;
    HEAP32[i13 >> 2] = i23;
    if ((i23 | 0) != 0) {
     i25 = i23;
     i26 = 32;
    }
   } else {
    HEAP32[i13 >> 2] = i17;
    i25 = i17;
    i26 = 32;
   }
   if ((i26 | 0) == 32) {
    i17 = i25 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   }
   __ZN7WebCore34convertHTMLTextToInterchangeFormatERKN3WTF6StringEPKNS_4TextE(i12, i13, i3);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i12);
   i17 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i23 = i17 | 0;
     i15 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i23 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i5 = i17 | 0;
     i15 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i5 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i15 = i17 | 0;
     i5 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i15 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i20 = i17 | 0;
     i5 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i20 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i21 >> 2] | 0;
   if ((i17 | 0) == 0) {
    if (i18) {
     break;
    }
    STACKTOP = i4;
    return;
   }
   i8 = i17 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    if (i18) {
     break;
    }
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i8 >> 2] = i5;
    if (i18) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 if (!(HEAP8[H_BASE + 296 | 0] | 0)) {
  i18 = __Znwj(4) | 0;
  HEAP32[i6 >> 2] = H_BASE + 80;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i6);
  HEAP32[H_BASE + 328 >> 2] = i18;
  HEAP8[H_BASE + 296 | 0] = 1;
 }
 if (HEAP8[H_BASE + 304 | 0] | 0) {
  i27 = HEAP32[H_BASE + 336 >> 2] | 0;
 } else {
  i18 = __Znwj(4) | 0;
  HEAP32[i7 >> 2] = H_BASE + 72;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i7);
  HEAP32[H_BASE + 336 >> 2] = i18;
  HEAP8[H_BASE + 304 | 0] = 1;
  i27 = i18;
 }
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i27);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23StyledMarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEbNS0_21RangeFullySelectsNodeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i3 | 0;
 i11 = (HEAP8[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) != 0;
 i12 = i1 | 0;
 __ZN7WebCore17MarkupAccumulator13appendOpenTagERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i12, i2, i3, 0);
 do {
  if (__ZNK7WebCore7Element13hasAttributesEv(i3) | 0) {
   i13 = HEAP32[i3 + 48 >> 2] | 0;
   i14 = HEAP32[i13 + 4 >> 2] | 0;
   if ((i14 & 1 | 0) == 0) {
    i15 = i14 >>> 1 & 134217727;
    break;
   } else {
    i15 = HEAP32[i13 + 32 >> 2] | 0;
    break;
   }
  } else {
   i15 = 0;
  }
 } while (0);
 i13 = i3 + 12 | 0;
 if ((HEAP32[i13 >> 2] & 16 | 0) == 0) {
  i16 = 7;
 } else {
  if ((HEAP32[i1 + 60 >> 2] | 0) == 1 | i4) {
   i17 = 1;
   i18 = 1;
  } else {
   i16 = 7;
  }
 }
 do {
  if ((i16 | 0) == 7) {
   i14 = HEAP32[i1 + 64 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i17 = 0;
    i18 = 0;
    break;
   }
   if ((HEAP32[i14 + 16 >> 2] | 0) != (HEAP32[i3 + 16 >> 2] | 0)) {
    i17 = 0;
    i18 = 0;
    break;
   }
   i14 = HEAP32[i1 + 68 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i17 = 0;
    i18 = 0;
    break;
   }
   i17 = (HEAP32[i14 + 4 >> 2] | 0) != 0;
   i18 = 0;
  }
 } while (0);
 L15 : do {
  if ((i15 | 0) != 0) {
   i14 = i3 + 48 | 0;
   if (i17) {
    i19 = 0;
   } else {
    i20 = 0;
    while (1) {
     i21 = HEAP32[i14 >> 2] | 0;
     i22 = HEAP32[i21 + 4 >> 2] | 0;
     i23 = (i22 & 1 | 0) == 0;
     if (i23) {
      i24 = i22 >>> 1 & 134217727;
     } else {
      i24 = HEAP32[i21 + 32 >> 2] | 0;
     }
     if (i24 >>> 0 <= i20 >>> 0) {
      break;
     }
     if (i23) {
      i25 = i21 + 20 | 0;
     } else {
      i25 = HEAP32[i21 + 24 >> 2] | 0;
     }
     __ZN7WebCore17MarkupAccumulator15appendAttributeERN3WTF13StringBuilderERKNS_7ElementERKNS_9AttributeEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsISB_EENSF_ISD_EEEE(i12, i2, i3, i25 + (i20 << 3) | 0, 0);
     i20 = i20 + 1 | 0;
     if (i20 >>> 0 >= i15 >>> 0) {
      break L15;
     }
    }
    _WTFCrash();
   }
   while (1) {
    i20 = HEAP32[i14 >> 2] | 0;
    i21 = HEAP32[i20 + 4 >> 2] | 0;
    i23 = (i21 & 1 | 0) == 0;
    if (i23) {
     i26 = i21 >>> 1 & 134217727;
    } else {
     i26 = HEAP32[i20 + 32 >> 2] | 0;
    }
    if (i26 >>> 0 <= i19 >>> 0) {
     break;
    }
    if (i23) {
     i27 = i20 + 20 | 0;
    } else {
     i27 = HEAP32[i20 + 24 >> 2] | 0;
    }
    i20 = i27 + (i19 << 3) | 0;
    if ((HEAP32[i20 >> 2] | 0) != (HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0)) {
     __ZN7WebCore17MarkupAccumulator15appendAttributeERN3WTF13StringBuilderERKNS_7ElementERKNS_9AttributeEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsISB_EENSF_ISD_EEEE(i12, i2, i3, i20, 0);
    }
    i19 = i19 + 1 | 0;
    if (i19 >>> 0 >= i15 >>> 0) {
     break L15;
    }
   }
   _WTFCrash();
  }
 } while (0);
 if (!i17) {
  __ZN7WebCore17MarkupAccumulator14appendCloseTagERN3WTF13StringBuilderERKNS_7ElementE(i12, i2, i3);
  STACKTOP = i6;
  return;
 }
 i17 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i17 | 0) == 0) {
   i16 = 38;
  } else {
   if ((HEAP32[i17 + 16 >> 2] | 0) != (HEAP32[i3 + 16 >> 2] | 0)) {
    i16 = 38;
    break;
   }
   i15 = HEAP32[i1 + 68 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i16 = 38;
    break;
   }
   if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
    i16 = 38;
    break;
   }
   __ZNK7WebCore12EditingStyle4copyEv(i8, i15);
   i15 = i8 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   __ZN7WebCore12EditingStyle37removePropertiesInElementDefaultStyleEPNS_7ElementE(i19, i3);
   __ZN7WebCore12EditingStyle37removeStyleConflictingWithStyleOfNodeEPNS_4NodeE(i19, i10);
   i28 = i19;
  }
 } while (0);
 if ((i16 | 0) == 38) {
  i16 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore12EditingStyleC1Ev(i16);
  i28 = i16;
 }
 do {
  if ((HEAP32[i13 >> 2] & 8 | 0) != 0) {
   i16 = HEAP32[i3 + 48 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i16 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   __ZN7WebCore12EditingStyle17overrideWithStyleEPKNS_15StylePropertiesE(i28, i10);
  }
 } while (0);
 do {
  if (i18) {
   if ((HEAP32[i1 + 60 >> 2] | 0) == 1) {
    __ZN7WebCore12EditingStyle35mergeStyleFromRulesForSerializationEPNS_13StyledElementE(i28, i3);
   }
   if (i4) {
    __ZN7WebCore12EditingStyle11forceInlineEv(i28);
   }
   if ((i5 | 0) != 1) {
    break;
   }
   i13 = HEAP32[i28 + 4 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i13, 79, 0) | 0;
  }
 } while (0);
 L73 : do {
  if (!(__ZNK7WebCore12EditingStyle7isEmptyEv(i28) | 0)) {
   __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 56 | 0, 8);
   __ZNK7WebCore15StyleProperties6asTextEv(i9, HEAP32[i28 + 4 >> 2] | 0);
   __ZN7WebCore17MarkupAccumulator20appendAttributeValueERN3WTF13StringBuilderERKNS1_6StringEb(i12, i2, i9, i11);
   i5 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i4 = i5 | 0;
     i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i4 >> 2] = i1;
      break;
     }
    }
   } while (0);
   HEAP8[i7] = 34;
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i1 = i2 | 0;
     i4 = HEAP32[i1 >> 2] | 0;
     if (i4 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      break;
     }
     i18 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i1 >> 2] = i4 + 1;
     if (i18) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i4 << 1) >> 1] = 34;
      break L73;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i4 | 0] = 34;
      break L73;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i2, i7, 1);
  }
 } while (0);
 if ((i28 | 0) == 0) {
  __ZN7WebCore17MarkupAccumulator14appendCloseTagERN3WTF13StringBuilderERKNS_7ElementE(i12, i2, i3);
  STACKTOP = i6;
  return;
 }
 i7 = i28 | 0;
 i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore12EditingStyleD1Ev(i28);
  __ZN3WTF8fastFreeEPv(i28);
  __ZN7WebCore17MarkupAccumulator14appendCloseTagERN3WTF13StringBuilderERKNS_7ElementE(i12, i2, i3);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i7 >> 2] = i9;
  __ZN7WebCore17MarkupAccumulator14appendCloseTagERN3WTF13StringBuilderERKNS_7ElementE(i12, i2, i3);
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore24createContextualFragmentERKN3WTF6StringEPNS_11HTMLElementENS_19ParserContentPolicyERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 if (__ZNK7WebCore11HTMLElement19ieForbidsInsertHTMLEv(i3) | 0) {
  HEAP32[i5 >> 2] = 9;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i13 = i3 | 0;
 i14 = HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i14 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6colTagE >> 2] | 0) + 12 >> 2] | 0)) {
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11colgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if ((i14 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8titleTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   __ZN7WebCore31createFragmentForInnerOuterHTMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyERi(i11, i2, i13, i4, i5);
   i3 = i11 | 0;
   i15 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   if ((i15 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i6;
    return;
   }
   i3 = i15 | 0;
   __ZN7WebCoreL35collectElementsToRemoveFromFragmentERNS_13ContainerNodeE(i12, i3);
   i16 = i12 + 8 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   i18 = i12 | 0;
   do {
    if ((i17 | 0) == 0) {
     HEAP32[i1 >> 2] = i15;
     i19 = 36;
    } else {
     i20 = HEAP32[i18 >> 2] | 0;
     i21 = i10 | 0;
     i22 = i7 | 0;
     i23 = i8 | 0;
     i24 = i9 | 0;
     i25 = 0;
     while (1) {
      i26 = HEAP32[i20 + (i25 << 2) >> 2] | 0;
      i27 = i26 | 0;
      i28 = HEAP32[i26 + 36 >> 2] | 0;
      if ((i28 | 0) == 0) {
       i29 = i26 | 0;
      } else {
       i30 = i28 + 8 | 0;
       HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
       i30 = i26 | 0;
       i26 = 0;
       i31 = i28;
       while (1) {
        i28 = HEAP32[i31 + 28 >> 2] | 0;
        i32 = (i28 | 0) == 0;
        if (!i32) {
         i33 = i28 + 8 | 0;
         HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
        }
        do {
         if ((i26 | 0) != 0) {
          i33 = i26 + 8 | 0;
          i34 = i33 | 0;
          i35 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
          HEAP32[i34 >> 2] = i35;
          if ((i35 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
         }
        } while (0);
        HEAP32[i22 >> 2] = 0;
        __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i27, i31, i22) | 0;
        HEAP32[i23 >> 2] = i31;
        i33 = i31 + 8 | 0;
        HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
        HEAP32[i24 >> 2] = 0;
        __ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i3, i8, i30, i24) | 0;
        i33 = HEAP32[i23 >> 2] | 0;
        do {
         if ((i33 | 0) != 0) {
          i35 = i33 + 8 | 0;
          i34 = i35 | 0;
          i36 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
          HEAP32[i34 >> 2] = i36;
          if ((i36 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
         }
        } while (0);
        if (!i32) {
         i33 = i28 + 8 | 0;
         HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
        }
        i33 = i31 + 8 | 0;
        i35 = i33 - 8 | 0;
        i36 = i33 | 0;
        i34 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
        HEAP32[i36 >> 2] = i34;
        do {
         if ((i34 | 0) < 1) {
          if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i35);
         }
        } while (0);
        if (i32) {
         i29 = i30;
         break;
        } else {
         i26 = i28;
         i31 = i28;
        }
       }
      }
      HEAP32[i21 >> 2] = 0;
      __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i3, i29, i21) | 0;
      i25 = i25 + 1 | 0;
      if (i25 >>> 0 >= i17 >>> 0) {
       break;
      }
     }
     HEAP32[i1 >> 2] = i15;
     if ((i17 | 0) == 0) {
      i19 = 36;
      break;
     }
     i25 = HEAP32[i18 >> 2] | 0;
     i21 = i25 + (i17 << 2) | 0;
     i23 = i25;
     while (1) {
      i24 = (HEAP32[i23 >> 2] | 0) + 8 | 0;
      i22 = i24 - 8 | 0;
      i20 = i24 | 0;
      i31 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
      HEAP32[i20 >> 2] = i31;
      do {
       if ((i31 | 0) < 1) {
        if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i22);
       }
      } while (0);
      i23 = i23 + 4 | 0;
      if ((i23 | 0) == (i21 | 0)) {
       break;
      }
     }
     HEAP32[i16 >> 2] = 0;
     i37 = i25;
    }
   } while (0);
   if ((i19 | 0) == 36) {
    i37 = HEAP32[i18 >> 2] | 0;
   }
   if ((i37 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   HEAP32[i18 >> 2] = 0;
   HEAP32[i12 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i37);
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i5 >> 2] = 9;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if (i8) {
  i9 = 0;
 } else {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = (i3 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i9 | 0, i12 | 0) | 0;
 i12 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i8) {
  i14 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i14 = 9;
  }
 }
 do {
  if ((i14 | 0) == 9) {
   if (!i11) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i12 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i14 = 26;
      break;
     }
     i8 = i2 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
     i15 = i2;
     i16 = 0;
    } else {
     if (i12 >>> 0 > 4294967275 >>> 0) {
      i14 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i12 + 20 | 0);
     i2 = i6 | 0;
     i8 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i14 = 26;
      break;
     }
     i2 = i8 + 20 | 0;
     HEAP32[i8 >> 2] = 2;
     HEAP32[i8 + 4 >> 2] = i12;
     HEAP32[i8 + 8 >> 2] = i2;
     HEAP32[i8 + 12 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 32;
     i15 = i8;
     i16 = i2;
    }
   } while (0);
   if ((i14 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i17 = 0;
    } else {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i13 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i18 = i2;
     } else {
      i9 = 0;
      while (1) {
       HEAP8[i16 + i9 | 0] = HEAP8[i13 + i9 | 0] | 0;
       i9 = i9 + 1 | 0;
       if (i9 >>> 0 >= i8 >>> 0) {
        break;
       }
      }
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i17 = 0;
       break;
      } else {
       i18 = i8;
      }
     }
     i17 = HEAP32[i18 + 4 >> 2] | 0;
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i9 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i16 + (i19 + i17) | 0] = HEAP8[i9 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 48;
    break;
   }
   i19 = i15 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i20 = i15;
   i21 = 0;
  } else {
   if (i12 >>> 0 > 2147483637 >>> 0) {
    i14 = 48;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i12 << 1) + 20 | 0);
   i15 = i5 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i19 | 0) == 0) {
    i14 = 48;
    break;
   }
   i15 = i19 + 20 | 0;
   HEAP32[i19 >> 2] = 2;
   HEAP32[i19 + 4 >> 2] = i12;
   HEAP32[i19 + 8 >> 2] = i15;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   i20 = i19;
   i21 = i15;
  }
 } while (0);
 if ((i14 | 0) == 48) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i22 = 0;
  } else {
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP16[i21 + (i23 << 1) >> 1] = HEAP16[i5 + (i23 << 1) >> 1] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP16[i21 + (i24 << 1) >> 1] = HEAPU8[i5 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
    break;
   }
   i22 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i25 = 0;
    }
    while (1) {
     HEAP16[i21 + (i25 + i22 << 1) >> 1] = HEAP16[i24 + (i25 << 1) >> 1] | 0;
     i25 = i25 + 1 | 0;
     if (i25 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   } else {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i26 = 0;
    }
    while (1) {
     HEAP16[i21 + (i26 + i22 << 1) >> 1] = HEAPU8[i24 + i26 | 0] | 0;
     i26 = i26 + 1 | 0;
     if (i26 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_12AtomicStringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = (i2 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i12 + i9 | 0, i7 | 0) | 0;
 i9 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i11) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i9 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i14 = 42;
      break;
     }
     i12 = i13 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i9 >>> 0 > 2147483637 >>> 0) {
      i14 = 42;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i9 << 1) + 20 | 0);
     i13 = i5 | 0;
     i12 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i14 = 42;
      break;
     }
     i13 = i12 + 20 | 0;
     HEAP32[i12 >> 2] = 2;
     HEAP32[i12 + 4 >> 2] = i9;
     HEAP32[i12 + 8 >> 2] = i13;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 0;
     i15 = i12;
     i16 = i13;
    }
   } while (0);
   if ((i14 | 0) == 42) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i13 = HEAP32[i8 >> 2] | 0;
   i12 = _strlen(i13 | 0) | 0;
   if ((i12 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i17 << 1) >> 1] = HEAPU8[i13 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
   i17 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = 0;
     i19 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    } else {
     i13 = HEAP32[i17 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i21 = 0;
       }
       while (1) {
        HEAP16[i16 + (i21 + i12 << 1) >> 1] = HEAP16[i20 + (i21 << 1) >> 1] | 0;
        i21 = i21 + 1 | 0;
        if (i21 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i22 = 0;
       }
       while (1) {
        HEAP16[i16 + (i22 + i12 << 1) >> 1] = HEAPU8[i20 + i22 | 0] | 0;
        i22 = i22 + 1 | 0;
        if (i22 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i10 >> 2] | 0;
     i20 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
     if ((i13 | 0) == 0) {
      i18 = 0;
      i19 = i20;
      break;
     }
     i18 = HEAP32[i13 + 4 >> 2] | 0;
     i19 = i20;
    }
   } while (0);
   i12 = i18 + i19 | 0;
   if ((i7 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i12 + i17 << 1) >> 1] = HEAPU8[i3 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i9 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 21;
    break;
   }
   i16 = i15 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i23 = i15;
   i24 = 0;
  } else {
   if (i9 >>> 0 > 4294967275 >>> 0) {
    i14 = 21;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i9 + 20 | 0);
   i15 = i6 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i14 = 21;
    break;
   }
   i15 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i9;
   HEAP32[i16 + 8 >> 2] = i15;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i23 = i16;
   i24 = i15;
  }
 } while (0);
 if ((i14 | 0) == 21) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 i9 = _strlen(i14 | 0) | 0;
 _memcpy(i24 | 0, i14 | 0, i9) | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i25 = 0;
   i26 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   i15 = HEAP32[i14 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i27 = i14;
    i28 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   } else {
    i16 = 0;
    while (1) {
     HEAP8[i24 + (i16 + i9) | 0] = HEAP8[i15 + i16 | 0] | 0;
     i16 = i16 + 1 | 0;
     if (i16 >>> 0 >= i6 >>> 0) {
      break;
     }
    }
    i6 = HEAP32[i10 >> 2] | 0;
    i16 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    if ((i6 | 0) == 0) {
     i25 = 0;
     i26 = i16;
     break;
    } else {
     i27 = i6;
     i28 = i16;
    }
   }
   i25 = HEAP32[i27 + 4 >> 2] | 0;
   i26 = i28;
  }
 } while (0);
 _memcpy(i24 + (i25 + i26) | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i23;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23StyledMarkupAccumulator12wrapWithNodeERNS_4NodeEbNS0_21RangeFullySelectsNodeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 32 | 0;
 HEAP32[i6 >> 2] = 0;
 i9 = i6 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP8[i6 + 12 | 0] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 HEAP32[i6 + 20 >> 2] = 0;
 if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore17MarkupAccumulator17appendStartMarkupERN3WTF13StringBuilderERKNS_4NodeEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i1 | 0, i6, i2, 0);
 } else {
  if (i3) {
   i11 = __ZN7WebCore7isBlockEPKNS_4NodeE(i2) | 0;
  } else {
   i11 = 0;
  }
  __ZN7WebCore23StyledMarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEbNS0_21RangeFullySelectsNodeE(i1, i6, i2, i11, i4);
 }
 i4 = i1 + 48 | 0;
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i6);
  i6 = HEAP32[i9 >> 2] | 0;
  HEAP32[i7 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i12 = i6;
   i13 = 9;
  }
 } else {
  HEAP32[i7 >> 2] = i11;
  i12 = i11;
  i13 = 9;
 }
 if ((i13 | 0) == 9) {
  i11 = i12 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i1 + 56 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
  i6 = i12 + 1 | 0;
  i3 = i4 | 0;
  i14 = HEAP32[i3 >> 2] | 0;
  do {
   if (i14 >>> 0 > i7 >>> 0) {
    i13 = 14;
   } else {
    if ((i14 + (i12 << 2) | 0) >>> 0 <= i7 >>> 0) {
     i13 = 14;
     break;
    }
    __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i6);
    i15 = HEAP32[i3 >> 2] | 0;
    i16 = i15 + (i7 - i14 >> 2 << 2) | 0;
    i17 = i15;
   }
  } while (0);
  if ((i13 | 0) == 14) {
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i6);
   i16 = i7;
   i17 = HEAP32[i3 >> 2] | 0;
  }
  i3 = HEAP32[i11 >> 2] | 0;
  i6 = i16 | 0;
  i16 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i17 + (i3 << 2) >> 2] = i16;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i18 = i7 | 0;
 } else {
  i16 = HEAP32[i4 >> 2] | 0;
  i4 = i7 | 0;
  i7 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i16 + (i12 << 2) >> 2] = i7;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i18 = i4;
 }
 i4 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i18 = i4 | 0;
   i11 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i18 >> 2] = i11;
    break;
   }
  }
 } while (0);
 __ZN7WebCore17MarkupAccumulator12appendEndTagERKNS_4NodeE(i1 | 0, i2);
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i8 >> 2] = i2;
   i1 = i4 + 8 | 0;
   i11 = HEAP32[i1 >> 2] | 0;
   if ((i11 | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
    HEAP32[(HEAP32[i4 >> 2] | 0) + (i11 << 2) >> 2] = i2;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
    break;
   }
   i18 = i11 + 1 | 0;
   i7 = i4 | 0;
   i12 = HEAP32[i7 >> 2] | 0;
   do {
    if (i12 >>> 0 > i8 >>> 0) {
     i13 = 26;
    } else {
     if ((i12 + (i11 << 2) | 0) >>> 0 <= i8 >>> 0) {
      i13 = 26;
      break;
     }
     __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i18);
     i16 = HEAP32[i7 >> 2] | 0;
     i19 = i16 + (i8 - i12 >> 2 << 2) | 0;
     i20 = i16;
    }
   } while (0);
   if ((i13 | 0) == 26) {
    __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i18);
    i19 = i8;
    i20 = HEAP32[i7 >> 2] | 0;
   }
   HEAP32[i20 + (HEAP32[i1 >> 2] << 2) >> 2] = HEAP32[i19 >> 2];
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  }
 } while (0);
 i19 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i10 = i19 | 0;
   i20 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i10 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i9 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i19 | 0;
 i20 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i20 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i19);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i9 >> 2] = i20;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore16createFullMarkupERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 96 | 0;
 i7 = i3 + 104 | 0;
 i8 = i3 + 112 | 0;
 __ZN7WebCore17MarkupAccumulatorC1EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE(i5, 0, 0, 0, 0);
 __ZN7WebCore17MarkupAccumulator14serializeNodesERNS_4NodeEPS1_NS_13EChildrenOnlyEPN3WTF6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEE(i1, i5, i2, 0, 0, 0);
 __ZN7WebCore17MarkupAccumulatorD1Ev(i5);
 if (((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 76 >> 2] & 7](i2) | 0) - 9 | 0) >>> 0 <= 1 >>> 0) {
  STACKTOP = i3;
  return;
 }
 i5 = __ZNK7WebCore8Document7doctypeEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 do {
  if ((i5 | 0) == 0) {
   i2 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i8 >> 2] = i2;
   if ((i2 | 0) == 0) {
    break;
   }
   i9 = i2 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
  } else {
   __ZN7WebCore17MarkupAccumulatorC1EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE(i4, 0, 0, 0, 0);
   __ZN7WebCore17MarkupAccumulator14serializeNodesERNS_4NodeEPS1_NS_13EChildrenOnlyEPN3WTF6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEE(i8, i4, i5 | 0, 0, 0, 0);
   __ZN7WebCore17MarkupAccumulatorD1Ev(i4);
  }
 } while (0);
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = (i1 | 0) == 0;
 if (!i5) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i8 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i2 = (i8 | 0) == 0;
 if (!i2) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 if (!i5) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i7 | 0;
 HEAP32[i10 >> 2] = i8;
 if (!i2) {
  i11 = i8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i7 + 4 | 0;
 HEAP32[i11 >> 2] = i1;
 do {
  if (!i5) {
   i12 = i1 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i13 + 2;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    break;
   }
  }
 } while (0);
 do {
  if (!i2) {
   i13 = i8 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i6, i7);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i11 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i4;
    break;
   }
  }
 } while (0);
 do {
  if (!i5) {
   i7 = i1 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i1 | 0;
 i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCoreL27needInterchangeNewlineAfterERKNS_15VisiblePositionE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 64 | 0;
 __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i3, i1, 0);
 i8 = i5 | 0;
 i9 = i3 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i8 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = i5 + 8 | 0;
  i12 = 0;
  i13 = i11;
  i14 = i11;
 } else {
  i11 = i10 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i11 = i5 + 8 | 0;
  i10 = i11;
  i12 = HEAP32[i10 >> 2] & -8;
  i13 = i11;
  i14 = i10;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 i10 = HEAP32[i3 + 8 >> 2] | 0;
 i11 = i12 | i10 & 7;
 HEAP32[i14 >> 2] = i11;
 HEAP8[i13] = i11 & 255 & -9 | i10 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i4, i5, 1);
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i10 = i4 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 8 | 0;
   i11 = i8 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i4 = i7 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 HEAP32[i4 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i10 = i8 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 i10 = HEAP32[i1 + 8 >> 2] | 0;
 i8 = i7 + 8 | 0;
 i11 = i8;
 i13 = HEAP32[i11 >> 2] & -8 | i10 & 7;
 HEAP32[i11 >> 2] = i13;
 HEAP8[i8] = i13 & 255 & -9 | i10 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i6, i7, 1);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 8 | 0;
   i10 = i6 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 8 | 0;
   i13 = i4 | 0;
   i10 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 do {
  if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i1, 1) | 0) {
   if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i3, 1) | 0)) {
    i15 = 0;
    break;
   }
   do {
    if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
     i16 = 1;
    } else {
     i6 = HEAP32[i5 + 44 >> 2] | 0;
     i4 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
     if ((i6 | 0) == (i4 | 0)) {
      i16 = 0;
      break;
     }
     if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
      i16 = 1;
      break;
     }
     i16 = (HEAP32[i6 + 16 >> 2] | 0) != (HEAP32[i4 + 16 >> 2] | 0);
    }
   } while (0);
   i15 = (i5 | 0) != (i7 | 0) | i16;
  } else {
   i15 = 0;
  }
 } while (0);
 i16 = HEAP32[i9 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i2;
  return i15 | 0;
 }
 i9 = i16 + 8 | 0;
 i16 = i9 | 0;
 i7 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
 HEAP32[i16 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i2;
  return i15 | 0;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return i15 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i2;
 return i15 | 0;
}
function __ZN7WebCore23StyledMarkupAccumulator12renderedTextERKNS_4NodeEPKNS_5RangeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i2 | 0;
 i6 = i2 + 8 | 0;
 i7 = i2 + 16 | 0;
 i8 = i2 + 24 | 0;
 i9 = i2 + 32 | 0;
 i10 = i2 + 48 | 0;
 i11 = i2 + 64 | 0;
 if ((HEAP32[i3 + 12 >> 2] & 1 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 i12 = HEAP32[i3 + 36 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i12 + 4 >> 2] | 0;
 }
 do {
  if ((i4 | 0) == 0) {
   i14 = i13;
   i15 = 0;
  } else {
   do {
    if ((HEAP32[i4 + 8 >> 2] | 0) == (i3 | 0)) {
     i12 = i4 + 12 | 0;
     i16 = HEAP32[i12 >> 2] | 0;
     if ((i16 | 0) > -1) {
      i17 = i16;
      break;
     }
     i16 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 16 >> 2] | 0) | 0) + 1 | 0;
     HEAP32[i12 >> 2] = i16;
     i17 = i16;
    } else {
     i17 = 0;
    }
   } while (0);
   if ((HEAP32[i4 + 20 >> 2] | 0) != (i3 | 0)) {
    i14 = i13;
    i15 = i17;
    break;
   }
   i16 = i4 + 24 | 0;
   i12 = HEAP32[i16 >> 2] | 0;
   if ((i12 | 0) > -1) {
    i14 = i12;
    i15 = i17;
    break;
   }
   i12 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 28 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i16 >> 2] = i12;
   i14 = i12;
   i15 = i17;
  }
 } while (0);
 i17 = (i3 | 0) == 0;
 if (!i17) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = i3;
 HEAP32[i6 >> 2] = i15;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i9, i5, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 8 | 0;
   i5 = i4 | 0;
   i15 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 if (!i17) {
  i17 = i3 + 8 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
 }
 i17 = i7 | 0;
 HEAP32[i17 >> 2] = i3;
 HEAP32[i8 >> 2] = i14;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i10, i7, i8);
 i8 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i17 = i8 + 8 | 0;
   i7 = i17 | 0;
   i14 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i11, HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0, i9, i10);
 i3 = i11 | 0;
 __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i1, HEAP32[i3 >> 2] | 0, 0, 0);
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i10 = i1 + 8 | 0;
   i11 = i10 | 0;
   i3 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = i1 + 8 | 0;
 i1 = i9 | 0;
 i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i10;
 if ((i10 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore23StyledMarkupAccumulator17wrapWithStyleNodeEPNS_15StylePropertiesERNS_8DocumentEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 40 | 0;
 HEAP32[i8 >> 2] = 0;
 i10 = i8 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i8 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP8[i8 + 12 | 0] = 1;
 HEAP32[i8 + 16 >> 2] = 0;
 HEAP32[i8 + 20 >> 2] = 0;
 __ZN7WebCore23StyledMarkupAccumulator22appendStyleNodeOpenTagERN3WTF13StringBuilderEPNS_15StylePropertiesERNS_8DocumentEb(i1, i8, i2, i3, i4);
 i3 = i1 + 48 | 0;
 __ZN3WTF13StringBuilder11shrinkToFitEv(i8);
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i8);
  i8 = HEAP32[i10 >> 2] | 0;
  HEAP32[i9 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i12 = i8;
   i13 = 4;
  }
 } else {
  HEAP32[i9 >> 2] = i2;
  i12 = i2;
  i13 = 4;
 }
 if ((i13 | 0) == 4) {
  i2 = i12 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 56 | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 if ((i12 | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
  i8 = i12 + 1 | 0;
  i14 = i3 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  do {
   if (i15 >>> 0 > i9 >>> 0) {
    i13 = 9;
   } else {
    if ((i15 + (i12 << 2) | 0) >>> 0 <= i9 >>> 0) {
     i13 = 9;
     break;
    }
    __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i8);
    i16 = HEAP32[i14 >> 2] | 0;
    i17 = i16 + (i9 - i15 >> 2 << 2) | 0;
    i18 = i16;
   }
  } while (0);
  if ((i13 | 0) == 9) {
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i8);
   i17 = i9;
   i18 = HEAP32[i14 >> 2] | 0;
  }
  i14 = HEAP32[i2 >> 2] | 0;
  i8 = i17 | 0;
  i17 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i18 + (i14 << 2) >> 2] = i17;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  i19 = i9 | 0;
 } else {
  i17 = HEAP32[i3 >> 2] | 0;
  i3 = i9 | 0;
  i9 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i17 + (i12 << 2) >> 2] = i9;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  i19 = i3;
 }
 i3 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i19 = i3 | 0;
   i2 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i19 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if (!(HEAP8[H_BASE + 296 | 0] | 0)) {
  i3 = __Znwj(4) | 0;
  HEAP32[i6 >> 2] = H_BASE + 80;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i3, i6);
  HEAP32[H_BASE + 328 >> 2] = i3;
  HEAP8[H_BASE + 296 | 0] = 1;
 }
 if (HEAP8[H_BASE + 304 | 0] | 0) {
  i20 = HEAP32[H_BASE + 336 >> 2] | 0;
 } else {
  i3 = __Znwj(4) | 0;
  HEAP32[i7 >> 2] = H_BASE + 72;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i3, i7);
  HEAP32[H_BASE + 336 >> 2] = i3;
  HEAP8[H_BASE + 304 | 0] = 1;
  i20 = i3;
 }
 __ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE(i1 | 0, i4 ? HEAP32[H_BASE + 328 >> 2] | 0 : i20);
 i20 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i11 = i20 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i11 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i10 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i20 | 0;
 i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i20);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i10 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCoreL35collectElementsToRemoveFromFragmentERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i2 + 36 | 0;
 while (1) {
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 27;
   break;
  }
  if ((HEAP32[i9 + 12 >> 2] & 20 | 0) == 20) {
   break;
  } else {
   i8 = i9 + 28 | 0;
  }
 }
 if ((i10 | 0) == 27) {
  STACKTOP = i3;
  return;
 }
 i10 = i4 + 8 | 0;
 i8 = i4 | 0;
 i2 = i4 + 4 | 0;
 i11 = i9;
 i9 = 0;
 L7 : while (1) {
  i12 = i11;
  i13 = HEAP32[(HEAP32[i11 + 44 >> 2] | 0) + 12 >> 2] | 0;
  do {
   if ((i13 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if ((i9 | 0) == (HEAP32[i6 >> 2] | 0)) {
     __ZN3WTF6VectorINS_3RefIN7WebCore11HTMLElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i9 + 1 | 0);
     HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) >> 2] = i12;
     i14 = i11 + 8 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    } else {
     HEAP32[(HEAP32[i5 >> 2] | 0) + (i9 << 2) >> 2] = i12;
     i14 = i11 + 8 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    }
    i14 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
    HEAP32[i7 >> 2] = i14;
    __ZN7WebCoreL35collectElementsToRemoveFromFragmentERNS_13ContainerNodeE(i4, i11);
    i15 = HEAP32[i10 >> 2] | 0;
    i16 = HEAP32[i8 >> 2] | 0;
    if ((i15 | 0) != 0) {
     i17 = i16 + (i15 << 2) | 0;
     i15 = i16;
     while (1) {
      i18 = (HEAP32[i15 >> 2] | 0) + 8 | 0;
      i19 = i18 - 8 | 0;
      i20 = i18 | 0;
      i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
      HEAP32[i20 >> 2] = i21;
      do {
       if ((i21 | 0) < 1) {
        if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i19);
       }
      } while (0);
      i15 = i15 + 4 | 0;
      if ((i15 | 0) == (i17 | 0)) {
       break;
      }
     }
     HEAP32[i10 >> 2] = 0;
    }
    if ((i16 | 0) == 0) {
     i22 = i14;
     break;
    }
    HEAP32[i8 >> 2] = 0;
    HEAP32[i2 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i16);
    i22 = i14;
   } else {
    if ((i13 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if ((i13 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i22 = i9;
      break;
     }
    }
    if ((i9 | 0) == (HEAP32[i6 >> 2] | 0)) {
     __ZN3WTF6VectorINS_3RefIN7WebCore11HTMLElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i9 + 1 | 0);
     HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) >> 2] = i12;
     i17 = i11 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     i17 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
     HEAP32[i7 >> 2] = i17;
     i22 = i17;
     break;
    } else {
     HEAP32[(HEAP32[i5 >> 2] | 0) + (i9 << 2) >> 2] = i12;
     i17 = i11 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     i17 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
     HEAP32[i7 >> 2] = i17;
     i22 = i17;
     break;
    }
   }
  } while (0);
  i12 = i11;
  while (1) {
   i13 = HEAP32[i12 + 28 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break L7;
   }
   if ((HEAP32[i13 + 12 >> 2] & 20 | 0) == 20) {
    i11 = i13;
    i9 = i22;
    continue L7;
   } else {
    i12 = i13;
   }
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore27replaceChildrenWithFragmentERNS_13ContainerNodeEN3WTF10PassRefPtrINS_16DocumentFragmentEEERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i5, i1);
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i2 + 36 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == 0) {
   __ZN7WebCore13ContainerNode14removeChildrenEv(i1);
  } else {
   i11 = i1 + 36 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i13 = (HEAP32[i12 + 28 >> 2] | 0) == 0;
     if (!i13) {
      break;
     }
     if ((HEAP32[i12 + 12 >> 2] & 1 | 0) != 0) {
      do {
       if ((HEAP32[i10 + 28 >> 2] | 0) == 0) {
        if ((HEAP32[i10 + 12 >> 2] & 1 | 0) == 0) {
         break;
        }
        i14 = i6 | 0;
        i15 = HEAP32[i10 + 36 >> 2] | 0;
        HEAP32[i14 >> 2] = i15;
        if ((i15 | 0) != 0) {
         i16 = i15 | 0;
         HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
        }
        __ZN7WebCore13CharacterData7setDataERKN3WTF6StringERi(i12, i6, i3);
        i16 = HEAP32[i14 >> 2] | 0;
        if ((i16 | 0) == 0) {
         break L1;
        }
        i14 = i16 | 0;
        i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
        if ((i15 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i16);
         break L1;
        } else {
         HEAP32[i14 >> 2] = i15;
         break L1;
        }
       }
      } while (0);
      if (!i13) {
       break;
      }
     }
     i15 = i7 | 0;
     HEAP32[i9 >> 2] = 0;
     HEAP32[i15 >> 2] = i2;
     __ZN7WebCore13ContainerNode12replaceChildEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i1, i7, HEAP32[i11 >> 2] | 0, i3) | 0;
     i14 = HEAP32[i15 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break L1;
     }
     i15 = i14 + 8 | 0;
     i14 = i15 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break L1;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break L1;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
     break L1;
    }
   } while (0);
   __ZN7WebCore13ContainerNode14removeChildrenEv(i1);
   i11 = i8 | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i11 >> 2] = i12;
   __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i8, i3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i11 = i12 + 8 | 0;
   i12 = i11 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = i1 + 8 | 0;
 i1 = i3 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16createFullMarkupERKNS_5RangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 64 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i9 = __ZNK7WebCore8Document7doctypeEv(HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 do {
  if ((i9 | 0) == 0) {
   i8 = i6 | 0;
   i10 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) == 0) {
    i11 = i8;
    break;
   }
   i12 = i10 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   i11 = i8;
  } else {
   __ZN7WebCore17MarkupAccumulatorC1EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE(i4, 0, 0, 0, 0);
   __ZN7WebCore17MarkupAccumulator14serializeNodesERNS_4NodeEPS1_NS_13EChildrenOnlyEPN3WTF6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEE(i6, i4, i9 | 0, 0, 0, 0);
   __ZN7WebCore17MarkupAccumulatorD1Ev(i4);
   i11 = i6 | 0;
  }
 } while (0);
 __ZN7WebCore12createMarkupERKNS_5RangeEPN3WTF6VectorIPNS_4NodeELj0ENS3_15CrashOnOverflowEEENS_23EAnnotateForInterchangeEbNS_13EAbsoluteURLsE(i7, i2, 0, 1, 0, 0);
 i2 = HEAP32[i11 >> 2] | 0;
 i6 = (i2 | 0) == 0;
 if (!i6) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i7 >> 2] | 0;
 i7 = (i4 | 0) == 0;
 if (!i7) {
  i9 = i4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i2;
 if (!i6) {
  i8 = i2 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = i4;
 do {
  if (!i7) {
   i12 = i4 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i10 + 2;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i12 >> 2] = i10;
    break;
   }
  }
 } while (0);
 do {
  if (!i6) {
   i10 = i2 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i7) {
   i5 = i4 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i11 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i4 | 0;
 i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i11 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCoreL23isElementPresentationalEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = (HEAP32[i1 + 12 >> 2] & 4 | 0) == 0;
 if (i2) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames4uTagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames4sTagE >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames9strikeTagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames4iTagE >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames5emTagE >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames4bTagE >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == (HEAP32[i4 + 12 >> 2] | 0)) {
   i6 = (HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0);
   if (i6 | i2) {
    i3 = i6;
   } else {
    break;
   }
   return i3 | 0;
  } else {
   if (i2) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames9strongTagE >> 2] | 0;
 if ((i2 | 0) == (i1 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0);
 return i3 | 0;
}
function __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 + 4 >> 2];
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i9 | i8 & 7;
 HEAP32[i11 >> 2] = i1;
 HEAP8[i10] = i1 & 255 & -9 | i8 & 8;
 i8 = i5 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 if ((i1 | 0) == 0) {
  i12 = 0;
 } else {
  i9 = i1 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i12 = HEAP32[i8 >> 2] | 0;
 }
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 4 >> 2];
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + 8 | 0;
 i13 = i2;
 i14 = HEAP32[i13 >> 2] & -8 | i1 & 7;
 HEAP32[i13 >> 2] = i14;
 i15 = i14 & 255 & -9 | i1 & 8;
 HEAP8[i2] = i15;
 if ((HEAP32[i6 >> 2] | 0) == (i12 | 0)) {
  do {
   if ((HEAP8[i10] & 8) == 0) {
    i1 = HEAP32[i11 >> 2] & 7;
    if (!((i1 | 0) == 2 | (i1 | 0) == 4)) {
     i16 = 9;
     break;
    }
    i1 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i17 = i1;
    i18 = HEAP8[i2] | 0;
   } else {
    i16 = 9;
   }
  } while (0);
  if ((i16 | 0) == 9) {
   i17 = HEAP32[i7 >> 2] | 0;
   i18 = i15;
  }
  do {
   if ((i18 & 8) == 0) {
    i15 = HEAP32[i13 >> 2] & 7;
    if (!((i15 | 0) == 2 | (i15 | 0) == 4)) {
     i16 = 13;
     break;
    }
    i19 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i16 = 13;
   }
  } while (0);
  if ((i16 | 0) == 13) {
   i19 = HEAP32[i9 >> 2] | 0;
  }
  if ((i17 | 0) == (i19 | 0)) {
   i20 = ((HEAP32[i13 >> 2] ^ HEAP32[i11 >> 2]) & 7 | 0) == 0;
  } else {
   i20 = 0;
  }
  i21 = i20;
  i22 = HEAP32[i8 >> 2] | 0;
 } else {
  i21 = 0;
  i22 = i12;
 }
 do {
  if ((i22 | 0) != 0) {
   i12 = i22 + 8 | 0;
   i8 = i12 | 0;
   i20 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i6 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 i6 = i22 + 8 | 0;
 i22 = i6 | 0;
 i12 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i3;
  return i21 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return i21 | 0;
}
function __ZN7WebCore36createFragmentForTransformToFragmentERKN3WTF6StringES3_PNS_8DocumentE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 __ZN7WebCore8Document22createDocumentFragmentEv(i6, i4);
 i10 = i6 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i3 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 168 | 0) | 0) {
   __ZN7WebCore15HTMLBodyElement6createERNS_8DocumentE(i7, i4);
   i3 = i7 | 0;
   i11 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   __ZN7WebCore16DocumentFragment9parseHTMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyE(i6, i2, i11 | 0, 2);
   if ((i11 | 0) == 0) {
    break;
   }
   i3 = i11 + 8 | 0;
   i11 = i3 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  } else {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i10 >> 2] | 0, H_BASE + 152 | 0) | 0) {
    __ZN7WebCore4Text6createERNS_8DocumentERKN3WTF6StringE(i9, i4, i2);
    i3 = i8 | 0;
    i12 = i9 | 0;
    i11 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    HEAP32[i3 >> 2] = i11;
    __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i6 | 0, i8);
    i11 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i3 = i11 + 8 | 0;
      i13 = i3 | 0;
      i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      HEAP32[i13 >> 2] = i14;
      if ((i14 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
     }
    } while (0);
    i11 = HEAP32[i12 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i3 = i11 + 8 | 0;
    i11 = i3 | 0;
    i14 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    HEAP32[i11 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
    break;
   }
   if (__ZN7WebCore16DocumentFragment8parseXMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyE(i6, i2, 0, 2) | 0) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   if ((i6 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i3 = i6 + 8 | 0;
   i14 = i3 | 0;
   i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    STACKTOP = i5;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = i6;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore23StyledMarkupAccumulator11takeResultsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i5 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP8[i5 + 12 | 0] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 HEAP32[i5 + 20 >> 2] = 0;
 i8 = i2 + 48 | 0;
 i9 = __ZN7WebCore17MarkupAccumulator11totalLengthERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i8) | 0;
 i10 = i2 | 0;
 __ZN3WTF13StringBuilder15reserveCapacityEj(i5, (HEAP32[i2 + 12 >> 2] | 0) + i9 | 0);
 i9 = i2 + 56 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) != 0) {
   i11 = i8 | 0;
   i12 = i2;
   i13 = i2;
   while (1) {
    i14 = i12 - 1 | 0;
    if (i13 >>> 0 <= i14 >>> 0) {
     break;
    }
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, (HEAP32[i11 >> 2] | 0) + (i14 << 2) | 0);
    if ((i14 | 0) == 0) {
     break L1;
    }
    i12 = i14;
    i13 = HEAP32[i9 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 __ZN7WebCore17MarkupAccumulator17concatenateMarkupERN3WTF13StringBuilderE(i10, i5);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   __ZNK3WTF13StringBuilder11reifyStringEv(i5);
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i15 = i9;
    i16 = 9;
    break;
   }
   HEAP32[i1 >> 2] = 0;
  } else {
   i15 = i10;
   i16 = 9;
  }
 } while (0);
 do {
  if ((i16 | 0) == 9) {
   i10 = i15 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   __ZN3WTF10StringImpl7replaceEtPKhj(i4, i15, 0, H_BASE + 312 | 0, 0);
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i10 >> 2] = i9;
      break;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i5;
   if ((i5 | 0) == 0) {
    break;
   }
   i10 = i5 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i9 + 2;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i10 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   i15 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 i15 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i15;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore23replaceChildrenWithTextERNS_13ContainerNodeERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i5, i1);
 i9 = i1 + 36 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = 5;
  } else {
   if ((HEAP32[i10 + 28 >> 2] | 0) != 0) {
    i11 = 5;
    break;
   }
   if ((HEAP32[i10 + 12 >> 2] & 1 | 0) == 0) {
    i11 = 5;
    break;
   }
   __ZN7WebCore13CharacterData7setDataERKN3WTF6StringERi(i10, i2, i3);
  }
 } while (0);
 L5 : do {
  if ((i11 | 0) == 5) {
   __ZN7WebCore4Text6createERNS_8DocumentERKN3WTF6StringE(i6, HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i2);
   i10 = i6 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     if ((HEAP32[i10 + 28 >> 2] | 0) != 0) {
      break;
     }
     i13 = i7 | 0;
     HEAP32[i13 >> 2] = i12;
     __ZN7WebCore13ContainerNode12replaceChildEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i1, i7, i10, i3) | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break L5;
     }
     i13 = i14 + 8 | 0;
     i14 = i13 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break L5;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break L5;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
     break L5;
    }
   } while (0);
   __ZN7WebCore13ContainerNode14removeChildrenEv(i1);
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = i12;
   __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i8, i3) | 0;
   i13 = HEAP32[i10 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i10 = i13 + 8 | 0;
   i13 = i10 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = i1 + 8 | 0;
 i1 = i3 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore31createFragmentForInnerOuterHTMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i9 = HEAP32[i3 + 44 >> 2] | 0;
 i10 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
 do {
  if ((i9 | 0) == (i10 | 0)) {
   i11 = 4;
  } else {
   if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
    i12 = i8;
    break;
   }
   if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0)) {
    i11 = 4;
   } else {
    i12 = i8;
   }
  }
 } while (0);
 if ((i11 | 0) == 4) {
  i12 = __ZN7WebCore8Document22ensureTemplateDocumentEv(i8) | 0;
 }
 __ZN7WebCore16DocumentFragment6createERNS_8DocumentE(i7, i12);
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 do {
  if ((HEAP8[i12 + 1576 | 0] & 1) == 0) {
   if (__ZN7WebCore16DocumentFragment8parseXMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyE(i7, i2, i3, i4) | 0) {
    HEAP32[i1 >> 2] = i7;
    STACKTOP = i6;
    return;
   }
   HEAP32[i5 >> 2] = 12;
   HEAP32[i1 >> 2] = 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i6;
    return;
   } else {
    i8 = i7 + 8 | 0;
    i11 = i8 | 0;
    i13 = HEAP32[i11 >> 2] | 0;
    i14 = i8;
    i15 = i11;
    break;
   }
  } else {
   __ZN7WebCore16DocumentFragment9parseHTMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyE(i7, i2, i3, i4);
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) == 0) {
    STACKTOP = i6;
    return;
   } else {
    i11 = i7 + 8 | 0;
    i8 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
    HEAP32[i11 >> 2] = i8;
    i11 = i7 + 8 | 0;
    i13 = i8;
    i14 = i11;
    i15 = i11 | 0;
    break;
   }
  }
 } while (0);
 i7 = i13 - 1 | 0;
 HEAP32[i15 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11urlToMarkupERKNS_3URLERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i5 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP8[i5 + 12 | 0] = 1;
 HEAP32[i5 + 16 >> 2] = 0;
 HEAP32[i5 + 20 >> 2] = 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 192 | 0, 9);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i2 | 0);
 __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 88 | 0, 2);
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = HEAP32[i2 + 4 >> 2] | 0;
 }
 __ZN7WebCore17MarkupAccumulator33appendCharactersReplacingEntitiesERN3WTF13StringBuilderERKNS1_6StringEjjNS_10EntityMaskE(i5, i3, 0, i8, 7);
 __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 184 | 0, 4);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i5);
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i9 = i5;
   i10 = 6;
  }
 } else {
  HEAP32[i1 >> 2] = i8;
  i9 = i8;
  i10 = 6;
 }
 if ((i10 | 0) == 6) {
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i7 >> 2] | 0;
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
 i10 = HEAP32[i6 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i10 | 0;
 i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore23StyledMarkupAccumulator14serializeNodesEPNS_4NodeES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 64 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = __ZN7WebCore23StyledMarkupAccumulator29traverseNodesForSerializationEPNS_4NodeES2_NS0_17NodeTraversalModeE(i1, i2, i3, 1) | 0;
  HEAP32[i6 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i9 = i8;
   i10 = 3;
  }
 } else {
  i9 = i7;
  i10 = 3;
 }
 do {
  if ((i10 | 0) == 3) {
   i7 = HEAP32[i9 + 16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore12EditingStyle29wrappingStyleForSerializationEPNS_4NodeEb(i5, i7 | 0, (HEAP32[i1 + 60 >> 2] | 0) == 1);
   i7 = i5 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i6 = i1 + 68 | 0;
   i11 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i8;
   do {
    if ((i11 | 0) != 0) {
     i8 = i11 | 0;
     i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i6 | 0) == 0) {
      __ZN7WebCore12EditingStyleD1Ev(i11);
      __ZN3WTF8fastFreeEPv(i11);
      break;
     } else {
      HEAP32[i8 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i11 = HEAP32[i7 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i6 = i11 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    break;
   } else {
    HEAP32[i6 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i5 = __ZN7WebCore23StyledMarkupAccumulator29traverseNodesForSerializationEPNS_4NodeES2_NS0_17NodeTraversalModeE(i1, i2, i3, 0) | 0;
 STACKTOP = i4;
 return i5 | 0;
}
function __ZN7WebCore17isPlainTextMarkupEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] & 4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0;
 do {
  if ((i4 | 0) != (i5 | 0)) {
   if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
    i3 = 0;
    return i3 | 0;
   }
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 if (__ZNK7WebCore7Element13hasAttributesEv(i1) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i2 >> 2] & 2 | 0) != 0) {
   if ((__ZNK7WebCore13ContainerNode14childNodeCountEv(i1) | 0) != 1) {
    break;
   }
   i5 = HEAP32[i1 + 36 >> 2] | 0;
   i4 = HEAP32[i5 + 12 >> 2] | 0;
   if ((i4 & 1 | 0) != 0) {
    i3 = 1;
    return i3 | 0;
   }
   if ((i4 & 2 | 0) == 0) {
    break;
   }
   if ((HEAP32[i5 + 36 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 if ((HEAP32[i2 >> 2] & 2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((__ZNK7WebCore13ContainerNode14childNodeCountEv(i1) | 0) != 2) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = i1 + 36 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if (!(__ZN7WebCore17isTabSpanTextNodeEPKNS_4NodeE(i6) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] | 0) + 12 >> 2] & 1 | 0) != 0;
 return i3 | 0;
}
function __ZN3WTF11VectorMoverILb0EN7WebCore15AttributeChangeEE4moveEPS2_S4_S4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  return;
 } else {
  i4 = i1;
  i5 = i3;
 }
 while (1) {
  i3 = i4 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  if ((i1 | 0) != 0) {
   i6 = i1 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  i6 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i5 + 4 >> 2] = i6;
  i1 = i6 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i1 = i4 + 8 | 0;
  i6 = HEAP32[i1 >> 2] | 0;
  HEAP32[i5 + 8 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  i7 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i1 = i7 | 0;
    i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i1 >> 2] = i6;
     break;
    }
   }
  } while (0);
  __ZN7WebCore13QualifiedNameD1Ev(i4 + 4 | 0);
  i7 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i6 = i7 + 8 | 0;
    i1 = i6 | 0;
    i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    HEAP32[i1 >> 2] = i8;
    if ((i8 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   }
  } while (0);
  i7 = i4 + 12 | 0;
  if ((i7 | 0) == (i2 | 0)) {
   break;
  } else {
   i4 = i7;
   i5 = i5 + 12 | 0;
  }
 }
 return;
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
function __ZN7WebCore16VisibleSelectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i2) {
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
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
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
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZN7WebCore23StyledMarkupAccumulatorD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 248;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 56 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 48 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
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
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  __ZN7WebCore17MarkupAccumulatorD2Ev(i9);
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i9 = i1 | 0;
 __ZN7WebCore17MarkupAccumulatorD2Ev(i9);
 return;
}
function __ZN7WebCore23StyledMarkupAccumulator19stringValueForRangeERKNS_4NodeEPKNS_5RangeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] | 0;
 if ((i4 | 0) == 0) {
  FUNCTION_TABLE_vii[i6 & 7](i1, i3);
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vii[i6 & 7](i5, i3);
 if ((HEAP32[i4 + 20 >> 2] | 0) == (i3 | 0)) {
  i6 = i4 + 24 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) > -1) {
   i8 = i7;
  } else {
   i7 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 28 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i6 >> 2] = i7;
   i8 = i7;
  }
  __ZN3WTF6String8truncateEj(i5, i8);
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) == (i3 | 0)) {
  i3 = i4 + 12 | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) > -1) {
   i9 = i8;
  } else {
   i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 16 >> 2] | 0) | 0) + 1 | 0;
   HEAP32[i3 >> 2] = i8;
   i9 = i8;
  }
  __ZN3WTF6String6removeEji(i5, 0, i9);
 }
 i9 = i5 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 >> 2] = i5;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 if ((HEAP8[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 770 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore28ChildListMutationAccumulator11getOrCreateERNS_13ContainerNodeE(i4, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore23StyledMarkupAccumulator22appendStyleNodeOpenTagERN3WTF13StringBuilderEPNS_15StylePropertiesERNS_8DocumentEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 if (i5) {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 224 | 0, 12);
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 208 | 0, 13);
 }
 __ZNK7WebCore15StyleProperties6asTextEv(i7, i3);
 __ZN7WebCore17MarkupAccumulator20appendAttributeValueERN3WTF13StringBuilderERKNS1_6StringEb(i1 | 0, i2, i7, (HEAP8[i4 + 1576 | 0] & 1) != 0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 88 | 0, 2);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore23StyledMarkupAccumulator17styleNodeCloseTagEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 if (!(HEAP8[H_BASE + 296 | 0] | 0)) {
  i5 = __Znwj(4) | 0;
  HEAP32[i3 >> 2] = H_BASE + 80;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i3);
  HEAP32[H_BASE + 328 >> 2] = i5;
  HEAP8[H_BASE + 296 | 0] = 1;
 }
 if (HEAP8[H_BASE + 304 | 0] | 0) {
  i6 = HEAP32[H_BASE + 336 >> 2] | 0;
  i7 = HEAP32[H_BASE + 328 >> 2] | 0;
  i8 = i2 ? i7 : i6;
  STACKTOP = i1;
  return i8 | 0;
 } else {
  i5 = __Znwj(4) | 0;
  HEAP32[i4 >> 2] = H_BASE + 72;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i4);
  HEAP32[H_BASE + 336 >> 2] = i5;
  HEAP8[H_BASE + 304 | 0] = 1;
  i6 = i5;
  i7 = HEAP32[H_BASE + 328 >> 2] | 0;
  i8 = i2 ? i7 : i6;
  STACKTOP = i1;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore18documentTypeStringERKNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = __ZNK7WebCore8Document7doctypeEv(i2) | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore17MarkupAccumulatorC1EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE(i4, 0, 0, 0, 0);
  __ZN7WebCore17MarkupAccumulator14serializeNodesERNS_4NodeEPS1_NS_13EChildrenOnlyEPN3WTF6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEE(i1, i4, i5 | 0, 0, 0, 0);
  __ZN7WebCore17MarkupAccumulatorD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 i4 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINS_3RefIN7WebCore11HTMLElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore12createMarkupERKNS_4NodeENS_13EChildrenOnlyEPN3WTF6VectorIPS0_Lj0ENS4_15CrashOnOverflowEEENS_13EAbsoluteURLsEPNS5_INS_13QualifiedNameELj0ES7_EENS_22EFragmentSerializationE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i8 | 0;
 __ZN7WebCore17MarkupAccumulatorC1EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE(i9, i4, i5, 0, i7);
 __ZN7WebCore17MarkupAccumulator14serializeNodesERNS_4NodeEPS1_NS_13EChildrenOnlyEPN3WTF6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEE(i1, i9, i2, 0, i3, i6);
 __ZN7WebCore17MarkupAccumulatorD1Ev(i9);
 STACKTOP = i8;
 return;
}
function viiii___ZN7WebCore17MarkupAccumulator22appendCustomAttributesERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore17MarkupAccumulator22appendCustomAttributesERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
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
function __ZN7WebCore23StyledMarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore23StyledMarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEbNS0_21RangeFullySelectsNodeE(i1, i2, i3, 0, 0);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_viiii + 2;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore17MarkupAccumulator12appendEndTagERKNS_4NodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17MarkupAccumulator12appendEndTagERKNS_4NodeE(i1 | 0, i2 | 0);
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
function __ZN7WebCore23StyledMarkupAccumulatorD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23StyledMarkupAccumulatorD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function ii___ZN7WebCore10isListItemEPKNS_4NodeE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10isListItemEPKNS_4NodeE(i1 | 0) | 0;
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
function __ZN7WebCore23StyledMarkupAccumulatorD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23StyledMarkupAccumulatorD2Ev(i1);
 return;
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
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore23StyledMarkupAccumulatorD1Ev,b0,__ZN7WebCore23StyledMarkupAccumulatorD0Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN7WebCore17MarkupAccumulator12appendEndTagERKNS_4NodeE__wrapper,b1,vii___ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE__wrapper,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,ii___ZN7WebCore16isMailBlockquoteEPKNS_4NodeE__wrapper,b2,ii___ZN7WebCore10isListItemEPKNS_4NodeE__wrapper,b2,__ZN7WebCoreL23isElementPresentationalEPKNS_4NodeE,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore23StyledMarkupAccumulator10appendTextERN3WTF13StringBuilderERKNS_4TextE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore23StyledMarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE,b6,viiii___ZN7WebCore17MarkupAccumulator22appendCustomAttributesERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE__wrapper,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames4bTagE": __ZN7WebCore9HTMLNames4bTagE, "__ZN7WebCore9HTMLNames5emTagE": __ZN7WebCore9HTMLNames5emTagE, "__ZN7WebCore9HTMLNames9classAttrE": __ZN7WebCore9HTMLNames9classAttrE, "__ZN7WebCore9HTMLNames9styleAttrE": __ZN7WebCore9HTMLNames9styleAttrE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames11templateTagE": __ZN7WebCore9HTMLNames11templateTagE, "__ZN7WebCore9HTMLNames8titleTagE": __ZN7WebCore9HTMLNames8titleTagE, "__ZN7WebCore9HTMLNames11framesetTagE": __ZN7WebCore9HTMLNames11framesetTagE, "__ZN7WebCore9HTMLNames6colTagE": __ZN7WebCore9HTMLNames6colTagE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore9HTMLNames11textareaTagE": __ZN7WebCore9HTMLNames11textareaTagE, "__ZN7WebCore9HTMLNames9strongTagE": __ZN7WebCore9HTMLNames9strongTagE, "__ZN7WebCore9HTMLNames4sTagE": __ZN7WebCore9HTMLNames4sTagE, "__ZN7WebCore9HTMLNames9selectTagE": __ZN7WebCore9HTMLNames9selectTagE, "__ZN7WebCore9HTMLNames4iTagE": __ZN7WebCore9HTMLNames4iTagE, "__ZN7WebCore9HTMLNames7headTagE": __ZN7WebCore9HTMLNames7headTagE, "__ZN7WebCore9HTMLNames9strikeTagE": __ZN7WebCore9HTMLNames9strikeTagE, "__ZN7WebCore9HTMLNames6divTagE": __ZN7WebCore9HTMLNames6divTagE, "__ZN7WebCore9HTMLNames11colgroupTagE": __ZN7WebCore9HTMLNames11colgroupTagE, "__ZN7WebCore9HTMLNames14backgroundAttrE": __ZN7WebCore9HTMLNames14backgroundAttrE, "__ZN7WebCore9HTMLNames5trTagE": __ZN7WebCore9HTMLNames5trTagE, "__ZN7WebCore9HTMLNames4uTagE": __ZN7WebCore9HTMLNames4uTagE, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZN7WebCore9HTMLNames8tbodyTagE": __ZN7WebCore9HTMLNames8tbodyTagE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore23StyledMarkupAccumulator17wrapWithStyleNodeEPNS_15StylePropertiesERNS_8DocumentEb","_strlen","__ZN7WebCore17isPlainTextMarkupEPNS_4NodeE","__ZN7WebCore16createFullMarkupERKNS_4NodeE","__ZN7WebCore23StyledMarkupAccumulator12renderedTextERKNS_4NodeEPKNS_5RangeE","__ZN7WebCore23StyledMarkupAccumulator29traverseNodesForSerializationEPNS_4NodeES2_NS0_17NodeTraversalModeE","__ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore23StyledMarkupAccumulatorD1Ev","__ZN7WebCore24createContextualFragmentERKN3WTF6StringEPNS_11HTMLElementENS_19ParserContentPolicyERi","__ZN7WebCore23StyledMarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE","__ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev","__ZN7WebCore23StyledMarkupAccumulator12wrapWithNodeERNS_4NodeEbNS0_21RangeFullySelectsNodeE","__ZN7WebCore31createFragmentForInnerOuterHTMLERKN3WTF6StringEPNS_7ElementENS_19ParserContentPolicyERi","__ZN7WebCore22createFragmentFromTextERNS_5RangeERKN3WTF6StringE","__ZN7WebCoreL23fillContainerFromStringEPNS_13ContainerNodeERKN3WTF6StringE","__ZN7WebCore23StyledMarkupAccumulator17styleNodeCloseTagEb","__ZN7WebCore23replaceChildrenWithTextERNS_13ContainerNodeERKN3WTF6StringERi","__ZN7WebCore23StyledMarkupAccumulator14serializeNodesEPNS_4NodeES2_","__ZN3WTF11VectorMoverILb0EN7WebCore15AttributeChangeEE4moveEPS2_S4_S4_","__ZN7WebCore18documentTypeStringERKNS_8DocumentE","_memset","__ZN7WebCore23StyledMarkupAccumulator10appendTextERN3WTF13StringBuilderERKNS_4TextE","_memcpy","__ZN7WebCore12createMarkupERKNS_4NodeENS_13EChildrenOnlyEPN3WTF6VectorIPS0_Lj0ENS4_15CrashOnOverflowEEENS_13EAbsoluteURLsEPNS5_INS_13QualifiedNameELj0ES7_EENS_22EFragmentSerializationE","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore22ChildListMutationScopeC2ERNS_13ContainerNodeE","__ZN7WebCore23StyledMarkupAccumulator19stringValueForRangeERKNS_4NodeEPKNS_5RangeE","__ZN3WTF6VectorINS_3RefIN7WebCore11HTMLElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCoreL27needInterchangeNewlineAfterERKNS_15VisiblePositionE","__ZN7WebCore11urlToMarkupERKNS_3URLERKN3WTF6StringE","__ZN7WebCore16createFullMarkupERKNS_5RangeE","__ZN7WebCore36createFragmentForTransformToFragmentERKN3WTF6StringES3_PNS_8DocumentE","__ZN7WebCore23StyledMarkupAccumulatorD0Ev","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore27replaceChildrenWithFragmentERNS_13ContainerNodeEN3WTF10PassRefPtrINS_16DocumentFragmentEEERi","__ZN7WebCore23StyledMarkupAccumulatorD2Ev","__ZN7WebCoreL23isElementPresentationalEPKNS_4NodeE","__ZN7WebCore24createFragmentFromMarkupERNS_8DocumentERKN3WTF6StringES5_NS_19ParserContentPolicyE","__ZN7WebCore23StyledMarkupAccumulator11takeResultsEv","__ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore23StyledMarkupAccumulator22appendStyleNodeOpenTagERN3WTF13StringBuilderEPNS_15StylePropertiesERNS_8DocumentEb","__ZN7WebCoreL35collectElementsToRemoveFromFragmentERNS_13ContainerNodeE","__ZN7WebCore23StyledMarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEbNS0_21RangeFullySelectsNodeE","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_12AtomicStringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore12createMarkupERKNS_5RangeEPN3WTF6VectorIPNS_4NodeELj0ENS3_15CrashOnOverflowEEENS_23EAnnotateForInterchangeEbNS_13EAbsoluteURLsE"]

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
H_BASE = parentModule["_malloc"](56 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 56;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore19TokenPreloadScannerC1ERKNS_3URLEf;
var __ZN7WebCore19TokenPreloadScannerD1Ev;
var __ZN7WebCore18HTMLPreloadScannerC1ERKNS_17HTMLParserOptionsERKNS_3URLEf;
var __ZN7WebCore18HTMLPreloadScannerD1Ev;
/* memory initializer */ allocate([117,115,101,45,99,114,101,100,101,110,116,105,97,108,115,0,117,110,107,110,111,119,110,0,115,99,114,105,112,116,0,0,108,105,110,107,0,0,0,0,105,110,112,117,116,0,0,0,105,109,103,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiif(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiif"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames11templateTagE=env.__ZN7WebCore9HTMLNames11templateTagE|0;
  var __ZN7WebCore9HTMLNames9mediaAttrE=env.__ZN7WebCore9HTMLNames9mediaAttrE|0;
  var __ZN7WebCore9HTMLNames7baseTagE=env.__ZN7WebCore9HTMLNames7baseTagE|0;
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames15crossoriginAttrE=env.__ZN7WebCore9HTMLNames15crossoriginAttrE|0;
  var __ZN7WebCore9HTMLNames7relAttrE=env.__ZN7WebCore9HTMLNames7relAttrE|0;
  var __ZN7WebCore9HTMLNames11charsetAttrE=env.__ZN7WebCore9HTMLNames11charsetAttrE|0;
  var __ZN7WebCore9HTMLNames7srcAttrE=env.__ZN7WebCore9HTMLNames7srcAttrE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames8typeAttrE=env.__ZN7WebCore9HTMLNames8typeAttrE|0;
  var __ZN7WebCore9HTMLNames7linkTagE=env.__ZN7WebCore9HTMLNames7linkTagE|0;
  var __ZN7WebCore9HTMLNames10srcsetAttrE=env.__ZN7WebCore9HTMLNames10srcsetAttrE|0;
  var __ZN7WebCore9HTMLNames8hrefAttrE=env.__ZN7WebCore9HTMLNames8hrefAttrE|0;
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
  var invoke_viiif=env.invoke_viiif;
  var invoke_vi=env.invoke_vi;
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
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore19TokenPreloadScanner15StartTagScanner16processAttributeIN3WTF12AtomicStringEEEvRKT_RKNS3_6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 | 0;
 do {
  if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11charsetAttrE >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i8 = i2 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i1 + 12 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i2;
   if ((i9 | 0) == 0) {
    break;
   }
   i2 = i9 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  i2 = HEAP32[i7 >> 2] | 0;
  if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7srcAttrE >> 2] | 0) + 12 >> 2] | 0) == (i2 | 0)) {
   __ZN7WebCore19TokenPreloadScanner15StartTagScanner12setUrlToLoadERKN3WTF6StringEb(i1, i3, 0);
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10srcsetAttrE >> 2] | 0) + 12 >> 2] | 0) == (i2 | 0)) {
   i9 = HEAP32[i3 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i10 = i9 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
   }
   i10 = i1 + 8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i11 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i9 = i11 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i9 >> 2] = i10;
    STACKTOP = i4;
    return;
   }
  }
  if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames15crossoriginAttrE >> 2] | 0) + 12 >> 2] | 0) != (i2 | 0)) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i6, i3);
  i2 = i6 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  i10 = i1 + 16 | 0;
  i9 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i6;
  do {
   if ((i9 | 0) != 0) {
    i6 = i9 | 0;
    i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i6 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i9 = HEAP32[i2 >> 2] | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i2 = i9 | 0;
  i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i9);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i2 >> 2] = i10;
   STACKTOP = i4;
   return;
  }
 } else if ((i8 | 0) == 1) {
  i10 = HEAP32[i7 >> 2] | 0;
  if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7srcAttrE >> 2] | 0) + 12 >> 2] | 0) == (i10 | 0)) {
   __ZN7WebCore19TokenPreloadScanner15StartTagScanner12setUrlToLoadERKN3WTF6StringEb(i1, i3, 0);
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0) + 12 >> 2] | 0) != (i10 | 0)) {
   STACKTOP = i4;
   return;
  }
  i10 = __ZN7WebCore14InputTypeNames5imageEv() | 0;
  HEAP8[i1 + 28 | 0] = (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i10 >> 2] | 0) | 0) & 1;
  STACKTOP = i4;
  return;
 } else if ((i8 | 0) == 2) {
  i8 = HEAP32[i7 >> 2] | 0;
  if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
   __ZN7WebCore19TokenPreloadScanner15StartTagScanner12setUrlToLoadERKN3WTF6StringEb(i1, i3, 0);
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7relAttrE >> 2] | 0) + 12 >> 2] | 0) == (i8 | 0)) {
   __ZN7WebCore16LinkRelAttributeC1ERKN3WTF6StringE(i5, i3);
   do {
    if ((HEAP8[i5 | 0] & 1) == 0) {
     i12 = 0;
    } else {
     if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
      i12 = 0;
      break;
     }
     if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
      i12 = 0;
      break;
     }
     i12 = HEAP8[i5 + 9 | 0] & 1 ^ 1;
    }
   } while (0);
   HEAP8[i1 + 20 | 0] = i12;
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9mediaAttrE >> 2] | 0) + 12 >> 2] | 0) != (i8 | 0)) {
   STACKTOP = i4;
   return;
  }
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) != 0) {
   i3 = i8 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  }
  i3 = i1 + 24 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i8;
  if ((i1 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i8 = i1 | 0;
  i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
  if ((i3 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i1);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i8 >> 2] = i3;
   STACKTOP = i4;
   return;
  }
 } else {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore18HTMLPreloadScanner4scanEPNS_21HTMLResourcePreloaderERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
    break;
   }
   i9 = i8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = i1 + 80 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i8;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 | 0;
     i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i9 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i10 = i3 + 4 | 0;
   i11 = i1 + 84 | 0;
   i9 = HEAP8[i11] & -2 | HEAP8[i10] & 1;
   HEAP8[i11] = i9;
   HEAP8[i11] = i9 & -3 | HEAP8[i10] & 2;
   HEAP32[i1 + 88 >> 2] = HEAP32[i3 + 8 >> 2];
   HEAP32[i1 + 92 >> 2] = HEAP32[i3 + 12 >> 2];
   HEAP32[i1 + 96 >> 2] = HEAP32[i3 + 16 >> 2];
   HEAP32[i1 + 100 >> 2] = HEAP32[i3 + 20 >> 2];
   HEAP32[i1 + 104 >> 2] = HEAP32[i3 + 24 >> 2];
   HEAP32[i1 + 108 >> 2] = HEAP32[i3 + 28 >> 2];
   HEAP32[i1 + 112 >> 2] = HEAP32[i3 + 32 >> 2];
   HEAP32[i1 + 116 >> 2] = HEAP32[i3 + 36 >> 2];
   HEAP32[i1 + 120 >> 2] = HEAP32[i3 + 40 >> 2];
   HEAP32[i1 + 124 >> 2] = HEAP32[i3 + 44 >> 2];
  }
 } while (0);
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = 0;
 i8 = i6 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i10 = i6 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 i9 = i1 + 2472 | 0;
 i11 = i1 + 152 | 0;
 i12 = i1 + 228 | 0;
 if (__ZN7WebCore13HTMLTokenizer9nextTokenERNS_15SegmentedStringERNS_9HTMLTokenE(HEAP32[i9 >> 2] | 0, i11, i12) | 0) {
  i13 = i12 | 0;
  i14 = i1 + 244 | 0;
  i15 = i1 + 252 | 0;
  i16 = i7 | 0;
  i17 = i5 | 0;
  i18 = i1 | 0;
  i19 = i1 + 248 | 0;
  i20 = i12;
  i21 = i1 + 768 | 0;
  i22 = i1 + 256 | 0;
  while (1) {
   do {
    if ((HEAP32[i13 >> 2] | 0) == 2) {
     i1 = HEAP32[i9 >> 2] | 0;
     __ZN3WTF12AtomicString3addEPKtj(i5, HEAP32[i14 >> 2] | 0, HEAP32[i15 >> 2] | 0);
     HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
     __ZN7WebCore13HTMLTokenizer14updateStateForERKN3WTF12AtomicStringE(i1, i7);
     i1 = HEAP32[i16 >> 2] | 0;
     if ((i1 | 0) == 0) {
      break;
     }
     i23 = i1 | 0;
     i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i23 >> 2] = i24;
      break;
     }
    }
   } while (0);
   __ZN7WebCore19TokenPreloadScanner10scanCommonINS_9HTMLTokenEEEvRKT_RN3WTF6VectorINS6_6OwnPtrINS_14PreloadRequestEEELj0ENS6_15CrashOnOverflowEEE(i18, i12, i6);
   _memset(i20 | 0, 0, 16) | 0;
   do {
    if ((HEAP32[i19 >> 2] | 0) != 0) {
     if ((HEAP32[i15 >> 2] | 0) != 0) {
      HEAP32[i15 >> 2] = 0;
     }
     i24 = HEAP32[i14 >> 2] | 0;
     if ((i22 | 0) == (i24 | 0) | (i24 | 0) == 0) {
      i25 = i24;
     } else {
      HEAP32[i14 >> 2] = 0;
      HEAP32[i19 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i24);
      i25 = HEAP32[i14 >> 2] | 0;
     }
     if ((i25 | 0) != 0) {
      break;
     }
     HEAP32[i14 >> 2] = i22;
     HEAP32[i19 >> 2] = 256;
    }
   } while (0);
   HEAP16[i21 >> 1] = 0;
   if (!(__ZN7WebCore13HTMLTokenizer9nextTokenERNS_15SegmentedStringERNS_9HTMLTokenE(HEAP32[i9 >> 2] | 0, i11, i12) | 0)) {
    break;
   }
  }
 }
 __ZN7WebCore21HTMLResourcePreloader14takeAndPreloadERN3WTF6VectorINS1_6OwnPtrINS_14PreloadRequestEEELj0ENS1_15CrashOnOverflowEEE(i2, i6);
 i6 = HEAP32[i10 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i2 = HEAP32[i3 >> 2] | 0;
  i12 = i2 + (i6 << 2) | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) != 0) {
    __ZN7WebCore14PreloadRequestD2Ev(i2);
    __ZdlPv(i2);
   }
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i12 | 0)) {
    break;
   }
  }
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i3 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19TokenPreloadScanner22updatePredictedBaseURLINS_9HTMLTokenEEEvRKT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 112 | 0;
 i9 = i2 + 552 | 0;
 i10 = i2 + 544 | 0;
 i2 = i5 | 0;
 i11 = 0;
 while (1) {
  if (i11 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
   i12 = 34;
   break;
  }
  i13 = HEAP32[i10 >> 2] | 0;
  __ZN3WTF12AtomicString3addEPKtj(i5, HEAP32[i13 + (i11 * 168 & -1) + 16 >> 2] | 0, HEAP32[i13 + (i11 * 168 & -1) + 24 >> 2] | 0);
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = (i13 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0) + 12 >> 2] | 0);
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
  if (i14) {
   break;
  } else {
   i11 = i11 + 1 | 0;
  }
 }
 if ((i12 | 0) == 34) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i11 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 + (i11 * 168 & -1) | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i1 + 32 | 0;
 __ZN3WTF10StringImpl20create8BitIfPossibleEPKtj(i4, HEAP32[i9 + (i11 * 168 & -1) + 92 >> 2] | 0, HEAP32[i9 + (i11 * 168 & -1) + 100 >> 2] | 0);
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i8, i4);
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i7, i10, i8);
 __ZNK7WebCore3URL4copyEv(i6, i7);
 i10 = i6 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i9 = i1 + 80 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i11;
 do {
  if ((i4 | 0) != 0) {
   i11 = i4 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i11 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i4 = HEAP8[i6 + 4 | 0] | 0;
 i9 = i1 + 84 | 0;
 HEAP8[i9] = HEAP8[i9] & -4 | i4 & 1 | i4 & 2;
 HEAP32[i1 + 88 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i6 + 12 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i6 + 16 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i6 + 20 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i6 + 24 >> 2];
 HEAP32[i1 + 108 >> 2] = HEAP32[i6 + 28 >> 2];
 HEAP32[i1 + 112 >> 2] = HEAP32[i6 + 32 >> 2];
 HEAP32[i1 + 116 >> 2] = HEAP32[i6 + 36 >> 2];
 HEAP32[i1 + 120 >> 2] = HEAP32[i6 + 40 >> 2];
 HEAP32[i1 + 124 >> 2] = HEAP32[i6 + 44 >> 2];
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i6 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19TokenPreloadScanner15StartTagScanner20createPreloadRequestERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 L1 : do {
  if ((i7 | 0) != 0) {
   if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
    break;
   }
   i8 = i2 | 0;
   switch (HEAP32[i8 >> 2] | 0) {
   case 3:
    {
     __ZN3WTF6StringC1EPKc(i6, H_BASE + 32 | 0);
     break;
    }
   case 6:
   case 7:
   case 4:
   case 5:
    {
     __ZN3WTF6StringC1EPKc(i6, H_BASE + 24 | 0);
     break;
    }
   case 0:
    {
     __ZN3WTF6StringC1EPKc(i6, H_BASE + 56 | 0);
     break;
    }
   case 2:
    {
     if ((HEAP8[i2 + 20 | 0] & 1) == 0) {
      break L1;
     }
     __ZN3WTF6StringC1EPKc(i6, H_BASE + 40 | 0);
     break;
    }
   case 1:
    {
     if ((HEAP8[i2 + 28 | 0] & 1) == 0) {
      break L1;
     }
     __ZN3WTF6StringC1EPKc(i6, H_BASE + 48 | 0);
     break;
    }
   default:
    {
     __ZN3WTF6StringC1EPKc(i6, H_BASE + 24 | 0);
    }
   }
   i9 = i2 + 4 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) == 2) {
    if ((HEAP8[i2 + 20 | 0] & 1) == 0) {
     i11 = 17;
    } else {
     i12 = 2;
    }
   } else if ((i10 | 0) == 0) {
    i11 = 15;
   } else if ((i10 | 0) == 3) {
    i12 = 3;
   } else if ((i10 | 0) == 1) {
    if ((HEAP8[i2 + 28 | 0] & 1) == 0) {
     i11 = 17;
    } else {
     i11 = 15;
    }
   } else {
    i11 = 17;
   }
   if ((i11 | 0) == 15) {
    i12 = 1;
   } else if ((i11 | 0) == 17) {
    i12 = 5;
   }
   i10 = __Znwj(72) | 0;
   i13 = i10;
   i14 = i6 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   HEAP32[i10 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i16 = i15 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   __ZNKR3WTF6String12isolatedCopyEv(i10 + 4 | 0, i9);
   __ZNK7WebCore3URL4copyEv(i10 + 8 | 0, i3);
   i9 = i10 + 56 | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i10 + 60 >> 2] = i12;
   __ZNKR3WTF6String12isolatedCopyEv(i10 + 64 | 0, i2 + 24 | 0);
   i16 = i10 + 68 | 0;
   HEAP8[i16] = 0;
   i10 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i14 = i10 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i2 + 16 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i17 = 1;
   } else {
    i17 = (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i10, H_BASE + 8 | 0) | 0) & 1;
   }
   HEAP8[i16] = i17;
   if ((HEAP32[i8 >> 2] | 0) == 0) {
    i18 = __ZN3WTF11emptyStringEv() | 0;
   } else {
    i18 = i2 + 12 | 0;
   }
   __ZNKR3WTF6String12isolatedCopyEv(i5, i18);
   i10 = i5 | 0;
   i15 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i14 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i15;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 | 0;
     i19 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i15 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i9 = i14 | 0;
     i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i9 >> 2] = i8;
      break;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i13;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19TokenPreloadScanner15StartTagScanner17processAttributesERKN3WTF6VectorINS_9HTMLToken9AttributeELj10ENS2_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 if ((HEAP32[i1 >> 2] | 0) > 3) {
  STACKTOP = i3;
  return;
 }
 i9 = i2 | 0;
 i10 = i2 + 8 | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  i2 = i6 | 0;
  i11 = i4 | 0;
  i12 = i7 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  while (1) {
   __ZN3WTF12AtomicString3addEPKtj(i4, HEAP32[i13 + 16 >> 2] | 0, HEAP32[i13 + 24 >> 2] | 0);
   HEAP32[i2 >> 2] = HEAP32[i11 >> 2];
   __ZN3WTF10StringImpl20create8BitIfPossibleEPKtj(i7, HEAP32[i13 + 92 >> 2] | 0, HEAP32[i13 + 100 >> 2] | 0);
   __ZN7WebCore19TokenPreloadScanner15StartTagScanner16processAttributeIN3WTF12AtomicStringEEEvRKT_RKNS3_6StringE(i1, i6, i7);
   i14 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i15 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i16 = i14 | 0;
     i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i16 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i13 = i13 + 168 | 0;
   if ((i13 | 0) == ((HEAP32[i9 >> 2] | 0) + ((HEAP32[i10 >> 2] | 0) * 168 & -1) | 0)) {
    break;
   }
  }
 }
 i10 = i1 + 8 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore31bestFitSourceForImageAttributesEfRKN3WTF6StringES3_(i8, +HEAPF32[i1 + 32 >> 2], i1 + 4 | 0, i10);
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, i8);
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   do {
    if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
     i9 = i5 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
     i9 = i1 + 4 | 0;
     i13 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i5;
     if ((i13 | 0) == 0) {
      break;
     }
     i9 = i13 | 0;
     i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i9 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i9 = i2 | 0;
   i13 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i9 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i10 | 0;
 i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19TokenPreloadScanner10scanCommonINS_9HTMLTokenEEEvRKT_RN3WTF6VectorINS6_6OwnPtrINS_14PreloadRequestEEELj0ENS6_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 40 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 2) {
  i8 = i1 + 136 | 0;
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  i9 = __ZN7WebCore19TokenPreloadScanner8tagIdForERKN3WTF6VectorItLj256ENS1_15CrashOnOverflowEEE(i2 + 16 | 0) | 0;
  if ((i9 | 0) == 7) {
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   STACKTOP = i4;
   return;
  } else if ((i9 | 0) == 5) {
   HEAP8[i1 + 128 | 0] = 1;
   STACKTOP = i4;
   return;
  } else if ((i9 | 0) == 6) {
   i8 = HEAP32[i1 + 80 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
      break;
     }
     STACKTOP = i4;
     return;
    }
   } while (0);
   __ZN7WebCore19TokenPreloadScanner22updatePredictedBaseURLINS_9HTMLTokenEEEvRKT_(i1, i2);
   STACKTOP = i4;
   return;
  } else {
   d10 = +HEAPF32[i1 + 132 >> 2];
   HEAP32[i5 >> 2] = i9;
   HEAP32[i5 + 24 >> 2] = 0;
   HEAP8[i5 + 28 | 0] = 0;
   _memset(i5 + 4 | 0, 0, 17) | 0;
   HEAPF32[i5 + 32 >> 2] = d10;
   __ZN7WebCore19TokenPreloadScanner15StartTagScanner17processAttributesERKN3WTF6VectorINS_9HTMLToken9AttributeELj10ENS2_15CrashOnOverflowEEE(i5, i2 + 544 | 0);
   __ZN7WebCore19TokenPreloadScanner15StartTagScanner20createPreloadRequestERKNS_3URLE(i6, i5, i1 + 80 | 0);
   i9 = i6 | 0;
   i6 = HEAP32[i9 >> 2] | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    i9 = i3 + 8 | 0;
    i8 = HEAP32[i9 >> 2] | 0;
    if ((i8 | 0) == (HEAP32[i3 + 4 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6OwnPtrIN7WebCore14PreloadRequestEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i8 + 1 | 0);
     HEAP32[(HEAP32[i3 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i6;
    } else {
     HEAP32[(HEAP32[i3 >> 2] | 0) + (i8 << 2) >> 2] = i6;
    }
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   __ZN7WebCore19TokenPreloadScanner15StartTagScannerD2Ev(i5);
   STACKTOP = i4;
   return;
  }
 } else if ((i7 | 0) == 5) {
  if ((HEAP8[i1 + 128 | 0] & 1) == 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore17CSSPreloadScanner4scanERKN3WTF6VectorItLj256ENS1_15CrashOnOverflowEEERNS2_INS1_6OwnPtrINS_14PreloadRequestEEELj0ES3_EE(i1 | 0, i2 + 16 | 0, i3);
  STACKTOP = i4;
  return;
 } else if ((i7 | 0) == 3) {
  i7 = __ZN7WebCore19TokenPreloadScanner8tagIdForERKN3WTF6VectorItLj256ENS1_15CrashOnOverflowEEE(i2 + 16 | 0) | 0;
  if ((i7 | 0) == 5) {
   i2 = i1 + 128 | 0;
   if ((HEAP8[i2] & 1) != 0) {
    __ZN7WebCore17CSSPreloadScanner5resetEv(i1 | 0);
   }
   HEAP8[i2] = 0;
   STACKTOP = i4;
   return;
  } else if ((i7 | 0) == 7) {
   i7 = i1 + 136 | 0;
   i1 = HEAP32[i7 >> 2] | 0;
   if ((i1 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   HEAP32[i7 >> 2] = i1 - 1;
   STACKTOP = i4;
   return;
  } else {
   STACKTOP = i4;
   return;
  }
 } else {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore19TokenPreloadScanner16createCheckpointEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i1 + 140 | 0;
 i5 = i1 + 148 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = HEAP8[i1 + 128 | 0] & 1;
 i8 = HEAP32[i1 + 136 >> 2] | 0;
 i9 = i3 | 0;
 i10 = HEAP32[i1 + 80 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = 0;
  i12 = i6;
  i13 = i3 + 4 | 0;
 } else {
  i14 = i10 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
  i14 = i3 + 4 | 0;
  i11 = HEAP8[i14] & -4;
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i14;
 }
 i14 = HEAP8[i1 + 84 | 0] | 0;
 HEAP8[i13] = i11 | i14 & 1 | i14 & 2;
 i14 = i3 + 8 | 0;
 HEAP32[i14 >> 2] = HEAP32[i1 + 88 >> 2];
 i11 = i3 + 12 | 0;
 HEAP32[i11 >> 2] = HEAP32[i1 + 92 >> 2];
 i10 = i3 + 16 | 0;
 HEAP32[i10 >> 2] = HEAP32[i1 + 96 >> 2];
 i15 = i3 + 20 | 0;
 HEAP32[i15 >> 2] = HEAP32[i1 + 100 >> 2];
 i16 = i3 + 24 | 0;
 HEAP32[i16 >> 2] = HEAP32[i1 + 104 >> 2];
 i17 = i3 + 28 | 0;
 HEAP32[i17 >> 2] = HEAP32[i1 + 108 >> 2];
 i18 = i3 + 32 | 0;
 HEAP32[i18 >> 2] = HEAP32[i1 + 112 >> 2];
 i19 = i3 + 36 | 0;
 HEAP32[i19 >> 2] = HEAP32[i1 + 116 >> 2];
 i20 = i3 + 40 | 0;
 HEAP32[i20 >> 2] = HEAP32[i1 + 120 >> 2];
 i21 = i3 + 44 | 0;
 HEAP32[i21 >> 2] = HEAP32[i1 + 124 >> 2];
 i22 = i3 + 48 | 0;
 HEAP8[i22] = i7;
 i7 = i3 + 52 | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i12 | 0) == (HEAP32[i1 + 144 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore19TokenPreloadScanner10CheckpointELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i4, i3);
 } else {
  i3 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i3 + (i12 * 56 & -1) >> 2] = i4;
  i4 = i3 + (i12 * 56 & -1) + 4 | 0;
  i1 = HEAP8[i4] & -2 | HEAP8[i13] & 1;
  HEAP8[i4] = i1;
  HEAP8[i4] = i1 & -3 | HEAP8[i13] & 2;
  HEAP32[i3 + (i12 * 56 & -1) + 8 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i3 + (i12 * 56 & -1) + 12 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i3 + (i12 * 56 & -1) + 16 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i3 + (i12 * 56 & -1) + 20 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i3 + (i12 * 56 & -1) + 24 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i3 + (i12 * 56 & -1) + 28 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i3 + (i12 * 56 & -1) + 32 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i3 + (i12 * 56 & -1) + 36 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i3 + (i12 * 56 & -1) + 40 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i3 + (i12 * 56 & -1) + 44 >> 2] = HEAP32[i21 >> 2];
  HEAP8[i3 + (i12 * 56 & -1) + 48 | 0] = HEAP8[i22] & 1;
  HEAP32[i3 + (i12 * 56 & -1) + 52 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return i6 | 0;
 }
 i9 = i5 | 0;
 i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i2;
  return i6 | 0;
 } else {
  HEAP32[i9 >> 2] = i7;
  STACKTOP = i2;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore19TokenPreloadScanner8rewindToEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 148 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = i1 + 140 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 + (i2 * 56 & -1) >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i1 + 80 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i8 = i5 + (i2 * 56 & -1) + 4 | 0;
 i7 = i1 + 84 | 0;
 i6 = HEAP8[i7] & -2 | HEAP8[i8] & 1;
 HEAP8[i7] = i6;
 HEAP8[i7] = i6 & -3 | HEAP8[i8] & 2;
 HEAP32[i1 + 88 >> 2] = HEAP32[i5 + (i2 * 56 & -1) + 8 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i5 + (i2 * 56 & -1) + 12 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i5 + (i2 * 56 & -1) + 16 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i5 + (i2 * 56 & -1) + 20 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i5 + (i2 * 56 & -1) + 24 >> 2];
 HEAP32[i1 + 108 >> 2] = HEAP32[i5 + (i2 * 56 & -1) + 28 >> 2];
 HEAP32[i1 + 112 >> 2] = HEAP32[i5 + (i2 * 56 & -1) + 32 >> 2];
 HEAP32[i1 + 116 >> 2] = HEAP32[i5 + (i2 * 56 & -1) + 36 >> 2];
 HEAP32[i1 + 120 >> 2] = HEAP32[i5 + (i2 * 56 & -1) + 40 >> 2];
 HEAP32[i1 + 124 >> 2] = HEAP32[i5 + (i2 * 56 & -1) + 44 >> 2];
 HEAP8[i1 + 128 | 0] = HEAP8[i5 + (i2 * 56 & -1) + 48 | 0] & 1;
 HEAP32[i1 + 136 >> 2] = HEAP32[i5 + (i2 * 56 & -1) + 52 >> 2];
 __ZN7WebCore17CSSPreloadScanner5resetEv(i1 | 0);
 i2 = i1 + 144 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i8 = i5 + (i1 * 56 & -1) | 0;
  i1 = i5;
  while (1) {
   i5 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i6 = i5 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i1 = i1 + 56 | 0;
   if ((i1 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore18HTMLPreloadScannerC2ERKNS_17HTMLParserOptionsERKNS_3URLEf(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN7WebCore17CSSPreloadScannerC1Ev(i1 | 0);
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 32 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i3 + 4 | 0;
 i5 = i1 + 36 | 0;
 i7 = HEAP8[i5] & -2 | HEAP8[i6] & 1;
 HEAP8[i5] = i7;
 HEAP8[i5] = i7 & -3 | HEAP8[i6] & 2;
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i3 + 44 >> 2];
 i3 = i1 + 80 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP8[i1 + 128 | 0] = 0;
 HEAPF32[i1 + 132 >> 2] = d4;
 HEAP32[i1 + 160 >> 2] = 0;
 _memset(i1 + 136 | 0, 0, 20) | 0;
 HEAP8[i1 + 164 | 0] = 1;
 HEAP8[i1 + 165 | 0] = 0;
 HEAP32[i1 + 168 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = 0;
 HEAP16[i1 + 172 >> 1] = 0;
 _memset(i1 + 176 | 0, 0, 33) | 0;
 HEAP8[i1 + 209 | 0] = 1;
 HEAP8[i1 + 210 | 0] = 0;
 i3 = i1 + 212 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 6;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i1 + 220 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 6;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i1 + 256 | 0;
 i6 = i3;
 i7 = i1 + 244 | 0;
 HEAP32[i7 >> 2] = i6;
 i5 = i1 + 248 | 0;
 HEAP32[i5 >> 2] = 256;
 HEAP32[i1 + 252 >> 2] = 0;
 HEAP32[i1 + 772 >> 2] = i1 + 784;
 HEAP32[i1 + 776 >> 2] = 10;
 HEAP32[i1 + 780 >> 2] = 0;
 HEAP32[i1 + 2468 >> 2] = 0;
 _memset(i1 + 228 | 0, 0, 16) | 0;
 if ((i3 | 0) != 0) {
  i8 = i1 + 768 | 0;
  HEAP16[i8 >> 1] = 0;
  i9 = __ZN3WTF10fastMallocEj(196) | 0;
  i10 = i9;
  __ZN7WebCore13HTMLTokenizerC1ERKNS_17HTMLParserOptionsE(i10, i2);
  i11 = i1 + 2472 | 0;
  HEAP32[i11 >> 2] = i10;
  return;
 }
 HEAP32[i7 >> 2] = i6;
 HEAP32[i5 >> 2] = 256;
 i8 = i1 + 768 | 0;
 HEAP16[i8 >> 1] = 0;
 i9 = __ZN3WTF10fastMallocEj(196) | 0;
 i10 = i9;
 __ZN7WebCore13HTMLTokenizerC1ERKNS_17HTMLParserOptionsE(i10, i2);
 i11 = i1 + 2472 | 0;
 HEAP32[i11 >> 2] = i10;
 return;
}
function __ZN7WebCore18HTMLPreloadScannerC1ERKNS_17HTMLParserOptionsERKNS_3URLEf(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN7WebCore17CSSPreloadScannerC1Ev(i1 | 0);
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 32 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i3 + 4 | 0;
 i5 = i1 + 36 | 0;
 i7 = HEAP8[i5] & -2 | HEAP8[i6] & 1;
 HEAP8[i5] = i7;
 HEAP8[i5] = i7 & -3 | HEAP8[i6] & 2;
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i3 + 44 >> 2];
 i3 = i1 + 80 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP8[i1 + 128 | 0] = 0;
 HEAPF32[i1 + 132 >> 2] = d4;
 HEAP32[i1 + 160 >> 2] = 0;
 _memset(i1 + 136 | 0, 0, 20) | 0;
 HEAP8[i1 + 164 | 0] = 1;
 HEAP8[i1 + 165 | 0] = 0;
 HEAP32[i1 + 168 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = 0;
 HEAP16[i1 + 172 >> 1] = 0;
 _memset(i1 + 176 | 0, 0, 33) | 0;
 HEAP8[i1 + 209 | 0] = 1;
 HEAP8[i1 + 210 | 0] = 0;
 i3 = i1 + 212 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 6;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i1 + 220 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 6;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i1 + 256 | 0;
 i6 = i3;
 i7 = i1 + 244 | 0;
 HEAP32[i7 >> 2] = i6;
 i5 = i1 + 248 | 0;
 HEAP32[i5 >> 2] = 256;
 HEAP32[i1 + 252 >> 2] = 0;
 HEAP32[i1 + 772 >> 2] = i1 + 784;
 HEAP32[i1 + 776 >> 2] = 10;
 HEAP32[i1 + 780 >> 2] = 0;
 HEAP32[i1 + 2468 >> 2] = 0;
 _memset(i1 + 228 | 0, 0, 16) | 0;
 if ((i3 | 0) != 0) {
  i8 = i1 + 768 | 0;
  HEAP16[i8 >> 1] = 0;
  i9 = __ZN3WTF10fastMallocEj(196) | 0;
  i10 = i9;
  __ZN7WebCore13HTMLTokenizerC1ERKNS_17HTMLParserOptionsE(i10, i2);
  i11 = i1 + 2472 | 0;
  HEAP32[i11 >> 2] = i10;
  return;
 }
 HEAP32[i7 >> 2] = i6;
 HEAP32[i5 >> 2] = 256;
 i8 = i1 + 768 | 0;
 HEAP16[i8 >> 1] = 0;
 i9 = __ZN3WTF10fastMallocEj(196) | 0;
 i10 = i9;
 __ZN7WebCore13HTMLTokenizerC1ERKNS_17HTMLParserOptionsE(i10, i2);
 i11 = i1 + 2472 | 0;
 HEAP32[i11 >> 2] = i10;
 return;
}
function __ZN3WTF6VectorIN7WebCore19TokenPreloadScanner10CheckpointELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 * 56 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore19TokenPreloadScanner10CheckpointELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 56 & -1) * 56 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore19TokenPreloadScanner10CheckpointELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = i11 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 * 56 & -1) >> 2] = i5;
 i5 = i11 + 4 | 0;
 i2 = i12 + (i6 * 56 & -1) + 4 | 0;
 i8 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i8;
 HEAP8[i2] = i8 & -3 | HEAP8[i5] & 2;
 HEAP32[i12 + (i6 * 56 & -1) + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 16 >> 2] = HEAP32[i11 + 16 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 28 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 32 >> 2] = HEAP32[i11 + 32 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 36 >> 2] = HEAP32[i11 + 36 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 40 >> 2] = HEAP32[i11 + 40 >> 2];
 HEAP32[i12 + (i6 * 56 & -1) + 44 >> 2] = HEAP32[i11 + 44 >> 2];
 HEAP8[i12 + (i6 * 56 & -1) + 48 | 0] = HEAP8[i11 + 48 | 0] & 1;
 HEAP32[i12 + (i6 * 56 & -1) + 52 >> 2] = HEAP32[i11 + 52 >> 2];
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore9HTMLTokenD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 2240 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 24 | 0;
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
  }
  i3 = i2 + 16 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i2 + 20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  i4 = i2 + 12 | 0;
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   HEAP32[i4 >> 2] = 0;
  }
  i4 = i2 + 4 | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  if ((i3 | 0) != 0) {
   HEAP32[i4 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZdlPv(i2 | 0);
 }
 i2 = i1 + 552 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 544 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 168 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 + 100 | 0;
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i5 = i3 + 92 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if (!((i3 + 104 | 0) == (i7 | 0) | (i7 | 0) == 0)) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i3 + 96 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i7);
   }
   i7 = i3 + 24 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
   }
   i7 = i3 + 16 | 0;
   i5 = HEAP32[i7 >> 2] | 0;
   if (!((i3 + 28 | 0) == (i5 | 0) | (i5 | 0) == 0)) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i3 + 20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i5);
   }
   i3 = i3 + 168 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if (!((i1 + 556 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 548 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 24 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 16 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i1 + 28 | 0) == (i4 | 0) | (i4 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 4) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 4) | 0;
  while (1) {
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i8 = i8 + 16 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i12 = i6;
  i13 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 + 12 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i4 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 16 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 4) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 4) | 0;
 while (1) {
  i13 = HEAP32[i2 + 12 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i12 = i13 | 0;
    i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i12 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i2 = i2 + 16 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore19TokenPreloadScannerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 148 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 140 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 56 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
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
   i3 = i3 + 56 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 144 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  __ZN7WebCore17CSSPreloadScannerD1Ev(i9);
  return;
 }
 i6 = i2 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i9 = i1 | 0;
  __ZN7WebCore17CSSPreloadScannerD1Ev(i9);
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  i9 = i1 | 0;
  __ZN7WebCore17CSSPreloadScannerD1Ev(i9);
  return;
 }
}
function __ZN7WebCore19TokenPreloadScannerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 148 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 140 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 56 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
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
   i3 = i3 + 56 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 144 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  __ZN7WebCore17CSSPreloadScannerD1Ev(i9);
  return;
 }
 i6 = i2 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i9 = i1 | 0;
  __ZN7WebCore17CSSPreloadScannerD1Ev(i9);
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  i9 = i1 | 0;
  __ZN7WebCore17CSSPreloadScannerD1Ev(i9);
  return;
 }
}
function __ZN7WebCore19TokenPreloadScanner8tagIdForERKN3WTF6VectorItLj256ENS1_15CrashOnOverflowEEE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN3WTF12AtomicString3addEPKtj(i3, HEAP32[i1 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0);
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
   i4 = 0;
  } else {
   if ((i1 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 1;
    break;
   }
   if ((i1 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 2;
    break;
   }
   if ((i1 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 3;
    break;
   }
   if ((i1 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 5;
    break;
   }
   if ((i1 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7baseTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 6;
    break;
   }
   i4 = (i1 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 >> 2] | 0) ? 7 : 4;
  }
 } while (0);
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return i4 | 0;
 }
 i3 = i1 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return i4 | 0;
 } else {
  HEAP32[i3 >> 2] = i5;
  STACKTOP = i2;
  return i4 | 0;
 }
 return 0;
}
function __ZN3WTF20VectorTypeOperationsIN7WebCore19TokenPreloadScanner10CheckpointEE4moveEPS3_S5_S5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  return;
 } else {
  i4 = i1;
  i5 = i3;
 }
 while (1) {
  i3 = i4 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i5 >> 2] = i1;
  i1 = i4 + 4 | 0;
  i6 = i5 + 4 | 0;
  i7 = HEAP8[i6] & -2 | HEAP8[i1] & 1;
  HEAP8[i6] = i7;
  HEAP8[i6] = i7 & -3 | HEAP8[i1] & 2;
  HEAP32[i5 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
  HEAP32[i5 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
  HEAP32[i5 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
  HEAP32[i5 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
  HEAP32[i5 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
  HEAP32[i5 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
  HEAP32[i5 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
  HEAP32[i5 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
  HEAP32[i5 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
  HEAP8[i5 + 48 | 0] = HEAP8[i4 + 48 | 0] & 1;
  HEAP32[i5 + 52 >> 2] = HEAP32[i4 + 52 >> 2];
  i1 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i3 = i1 | 0;
    i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i3 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i1 = i4 + 56 | 0;
  if ((i1 | 0) == (i2 | 0)) {
   break;
  } else {
   i4 = i1;
   i5 = i5 + 56 | 0;
  }
 }
 return;
}
function __ZN7WebCore19TokenPreloadScanner15StartTagScannerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore14PreloadRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore19TokenPreloadScanner15StartTagScanner12setUrlToLoadERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 do {
  if (!i3) {
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, i2);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
   i3 = i5 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
   i3 = i1 + 4 | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i6 | 0) == 0) {
    break;
   }
   i3 = i6 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i3 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i5 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore19TokenPreloadScannerC2ERKNS_3URLEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore17CSSPreloadScannerC1Ev(i1 | 0);
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 32 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i2 + 4 | 0;
 i4 = i1 + 36 | 0;
 i6 = HEAP8[i4] & -2 | HEAP8[i5] & 1;
 HEAP8[i4] = i6;
 HEAP8[i4] = i6 & -3 | HEAP8[i5] & 2;
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 44 >> 2];
 i2 = i1 + 80 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i2);
 HEAP8[i1 + 128 | 0] = 0;
 HEAPF32[i1 + 132 >> 2] = d3;
 _memset(i1 + 136 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore19TokenPreloadScannerC1ERKNS_3URLEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore17CSSPreloadScannerC1Ev(i1 | 0);
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 32 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i2 + 4 | 0;
 i4 = i1 + 36 | 0;
 i6 = HEAP8[i4] & -2 | HEAP8[i5] & 1;
 HEAP8[i4] = i6;
 HEAP8[i4] = i6 & -3 | HEAP8[i5] & 2;
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 44 >> 2];
 i2 = i1 + 80 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i2);
 HEAP8[i1 + 128 | 0] = 0;
 HEAPF32[i1 + 132 >> 2] = d3;
 _memset(i1 + 136 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore18HTMLPreloadScannerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 2472 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore13HTMLTokenizerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore9HTMLTokenD2Ev(i1 + 228 | 0);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1 + 188 | 0);
 i2 = i1 + 196 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 200 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 168 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore19TokenPreloadScannerD2Ev(i4);
  return;
 }
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i4 = i1 | 0;
  __ZN7WebCore19TokenPreloadScannerD2Ev(i4);
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i4 = i1 | 0;
  __ZN7WebCore19TokenPreloadScannerD2Ev(i4);
  return;
 }
}
function __ZN7WebCore18HTMLPreloadScannerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 2472 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore13HTMLTokenizerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore9HTMLTokenD2Ev(i1 + 228 | 0);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1 + 188 | 0);
 i2 = i1 + 196 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 200 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 168 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore19TokenPreloadScannerD2Ev(i4);
  return;
 }
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i4 = i1 | 0;
  __ZN7WebCore19TokenPreloadScannerD2Ev(i4);
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i4 = i1 | 0;
  __ZN7WebCore19TokenPreloadScannerD2Ev(i4);
  return;
 }
}
function __ZN3WTF6VectorINS_6OwnPtrIN7WebCore14PreloadRequestEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIN7WebCore19TokenPreloadScanner10CheckpointELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if (i2 >>> 0 > 76695844 >>> 0) {
  _WTFCrash();
 }
 i6 = i5 + ((HEAP32[i1 + 8 >> 2] | 0) * 56 & -1) | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 56 & -1) | 0;
 HEAP32[i3 >> 2] = (i1 >>> 0) / 56 & -1;
 i2 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF20VectorTypeOperationsIN7WebCore19TokenPreloadScanner10CheckpointEE4moveEPS3_S5_S5_(i5, i6, i2);
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
function __ZN7WebCore19TokenPreloadScanner12initiatorForENS0_5TagIdE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 switch (i2 | 0) {
 case 0:
  {
   __ZN3WTF6StringC1EPKc(i1, H_BASE + 56 | 0);
   return;
  }
 case 1:
  {
   __ZN3WTF6StringC1EPKc(i1, H_BASE + 48 | 0);
   return;
  }
 case 2:
  {
   __ZN3WTF6StringC1EPKc(i1, H_BASE + 40 | 0);
   return;
  }
 case 3:
  {
   __ZN3WTF6StringC1EPKc(i1, H_BASE + 32 | 0);
   return;
  }
 case 4:
 case 5:
 case 6:
 case 7:
  {
   __ZN3WTF6StringC1EPKc(i1, H_BASE + 24 | 0);
   return;
  }
 default:
  {
   __ZN3WTF6StringC1EPKc(i1, H_BASE + 24 | 0);
   return;
  }
 }
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
function __ZN7WebCore19TokenPreloadScanner4scanERKNS_9HTMLTokenERN3WTF6VectorINS4_6OwnPtrINS_14PreloadRequestEEELj0ENS4_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore19TokenPreloadScanner10scanCommonINS_9HTMLTokenEEEvRKT_RN3WTF6VectorINS6_6OwnPtrINS_14PreloadRequestEEELj0ENS6_15CrashOnOverflowEEE(i1, i2, i3);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore18HTMLPreloadScanner11appendToEndERKNS_15SegmentedStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15SegmentedString6appendERKS0_(i1 + 152 | 0, i2);
 return;
}
function dynCall_viiif(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 FUNCTION_TABLE_viiif[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5);
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
function vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString12advanceEmptyEv(i1 | 0);
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
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b0(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 abort(0);
}
function b4(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(4);
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
  var FUNCTION_TABLE_viiif = [b0,b0,__ZN7WebCore18HTMLPreloadScannerC2ERKNS_17HTMLParserOptionsERKNS_3URLEf,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore19TokenPreloadScannerD2Ev,b1,__ZN7WebCore18HTMLPreloadScannerD2Ev,b1,vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_viif = [b4,b4,__ZN7WebCore19TokenPreloadScannerC2ERKNS_3URLEf,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiif: dynCall_viiif, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viif: dynCall_viif, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiif": invoke_viiif, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_viif": invoke_viif, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames11templateTagE": __ZN7WebCore9HTMLNames11templateTagE, "__ZN7WebCore9HTMLNames9mediaAttrE": __ZN7WebCore9HTMLNames9mediaAttrE, "__ZN7WebCore9HTMLNames7baseTagE": __ZN7WebCore9HTMLNames7baseTagE, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames15crossoriginAttrE": __ZN7WebCore9HTMLNames15crossoriginAttrE, "__ZN7WebCore9HTMLNames7relAttrE": __ZN7WebCore9HTMLNames7relAttrE, "__ZN7WebCore9HTMLNames11charsetAttrE": __ZN7WebCore9HTMLNames11charsetAttrE, "__ZN7WebCore9HTMLNames7srcAttrE": __ZN7WebCore9HTMLNames7srcAttrE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames8typeAttrE": __ZN7WebCore9HTMLNames8typeAttrE, "__ZN7WebCore9HTMLNames7linkTagE": __ZN7WebCore9HTMLNames7linkTagE, "__ZN7WebCore9HTMLNames10srcsetAttrE": __ZN7WebCore9HTMLNames10srcsetAttrE, "__ZN7WebCore9HTMLNames8hrefAttrE": __ZN7WebCore9HTMLNames8hrefAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiif = Module["dynCall_viiif"] = asm["dynCall_viiif"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore14PreloadRequestD2Ev","__ZN7WebCore19TokenPreloadScanner15StartTagScanner16processAttributeIN3WTF12AtomicStringEEEvRKT_RKNS3_6StringE","__ZN7WebCore19TokenPreloadScanner10scanCommonINS_9HTMLTokenEEEvRKT_RN3WTF6VectorINS6_6OwnPtrINS_14PreloadRequestEEELj0ENS6_15CrashOnOverflowEEE","__ZN7WebCore19TokenPreloadScannerD2Ev","__ZN7WebCore19TokenPreloadScanner15StartTagScannerD2Ev","__ZN7WebCore18HTMLPreloadScannerC2ERKNS_17HTMLParserOptionsERKNS_3URLEf","__ZN7WebCore19TokenPreloadScanner22updatePredictedBaseURLINS_9HTMLTokenEEEvRKT_","_memset","_memcpy","__ZN7WebCore9HTMLTokenD2Ev","__ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore18HTMLPreloadScanner4scanEPNS_21HTMLResourcePreloaderERKNS_3URLE","__ZN7WebCore19TokenPreloadScannerC2ERKNS_3URLEf","__ZN7WebCore19TokenPreloadScanner16createCheckpointEv","__ZN7WebCore19TokenPreloadScanner12initiatorForENS0_5TagIdE","__ZN7WebCore19TokenPreloadScanner15StartTagScanner20createPreloadRequestERKNS_3URLE","__ZN7WebCore19TokenPreloadScanner15StartTagScanner17processAttributesERKN3WTF6VectorINS_9HTMLToken9AttributeELj10ENS2_15CrashOnOverflowEEE","__ZN3WTF6VectorIN7WebCore19TokenPreloadScanner10CheckpointELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF6VectorINS_6OwnPtrIN7WebCore14PreloadRequestEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore19TokenPreloadScanner15StartTagScanner12setUrlToLoadERKN3WTF6StringEb","__ZN3WTF6VectorIN7WebCore19TokenPreloadScanner10CheckpointELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS3_EEvOT_","__ZN7WebCore19TokenPreloadScanner8rewindToEj","__ZN7WebCore18HTMLPreloadScanner11appendToEndERKNS_15SegmentedStringE","__ZN7WebCore18HTMLPreloadScannerD2Ev","__ZN7WebCore19TokenPreloadScanner8tagIdForERKN3WTF6VectorItLj256ENS1_15CrashOnOverflowEEE","__ZN7WebCore19TokenPreloadScanner4scanERKNS_9HTMLTokenERN3WTF6VectorINS4_6OwnPtrINS_14PreloadRequestEEELj0ENS4_15CrashOnOverflowEEE","__ZN3WTF20VectorTypeOperationsIN7WebCore19TokenPreloadScanner10CheckpointEE4moveEPS3_S5_S5_"]

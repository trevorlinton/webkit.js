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
var __ZN7WebCore13HitTestResultC1Ev;
var __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE;
var __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointEjjjj;
var __ZN7WebCore13HitTestResultC1ERKNS_15HitTestLocationE;
var __ZN7WebCore13HitTestResultC1ERKS0_;
var __ZN7WebCore13HitTestResultD1Ev;
/* memory initializer */ allocate([46,112,100,102,0,0,0,0,97,112,112,108,105,99,97,116,105,111,110,47,112,100,102,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames7altAttrE=env.__ZN7WebCore9HTMLNames7altAttrE|0;
  var __ZN7WebCore10XLinkNames8hrefAttrE=env.__ZN7WebCore10XLinkNames8hrefAttrE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore9HTMLNames11textareaTagE=env.__ZN7WebCore9HTMLNames11textareaTagE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN7WebCore9HTMLNames7linkTagE=env.__ZN7WebCore9HTMLNames7linkTagE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
  var __ZN7WebCore8SVGNames4aTagE=env.__ZN7WebCore8SVGNames4aTagE|0;
  var __ZN7WebCore9HTMLNames7areaTagE=env.__ZN7WebCore9HTMLNames7areaTagE|0;
  var __ZN7WebCore9HTMLNames8hrefAttrE=env.__ZN7WebCore9HTMLNames8hrefAttrE|0;
  var __ZN7WebCore8SVGNames8imageTagE=env.__ZN7WebCore8SVGNames8imageTagE|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13HitTestResult6appendERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i1 + 72 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   i8 = HEAP32[i2 + 72 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i8;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 + 8 | 0;
     i10 = i8 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   i9 = HEAP32[i2 + 76 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i8 = i9 + 8 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
   i8 = i1 + 76 | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i9;
   do {
    if ((i11 | 0) != 0) {
     i9 = i11 + 8 | 0;
     i8 = i9 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   i11 = i2 + 88 | 0;
   i9 = i1 + 88 | 0;
   i10 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i9 + 4 >> 2] = i10;
   i10 = i2 + 80 | 0;
   i9 = i1 + 80 | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = i11;
   i11 = HEAP32[i2 + 96 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i9 = i11 + 8 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   i9 = i1 + 96 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i11;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 + 8 | 0;
     i9 = i11 | 0;
     i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   i10 = HEAP32[i2 + 100 >> 2] | 0;
   if ((i10 | 0) != 0) {
    i11 = i10 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   i11 = i1 + 100 | 0;
   i8 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i10;
   do {
    if ((i8 | 0) != 0) {
     i10 = i8 + 4 | 0;
     i11 = i10 | 0;
     i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i11 >> 2] = i9;
      break;
     }
     i9 = i10 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
    }
   } while (0);
   HEAP8[i1 + 104 | 0] = HEAP8[i2 + 104 | 0] & 1;
  }
 } while (0);
 i7 = i2 + 108 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 108 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i9 = __ZN3WTF10fastMallocEj(32) | 0;
  _memset(i9 | 0, 0, 28) | 0;
  i10 = __Znwj(3080) | 0;
  i11 = i10 + 8 | 0;
  HEAP32[i10 >> 2] = i11;
  HEAP8[i10 + 4 | 0] = 0;
  _memset(i11 | 0, 0, 3072) | 0;
  HEAP32[i9 + 28 >> 2] = i10;
  i10 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i9;
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i10);
  i12 = HEAP32[i8 >> 2] | 0;
  i13 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i1;
  i13 = i2;
 }
 i2 = HEAP32[i13 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i6 | 0;
 i1 = i12 | 0;
 i7 = i12 + 28 | 0;
 i8 = i4 + 8 | 0;
 i10 = i4 | 0;
 i9 = i12 + 24 | 0;
 i11 = i12 + 20 | 0;
 i12 = i2;
 while (1) {
  i2 = HEAP32[i12 >> 2] | 0;
  HEAP32[i13 >> 2] = i2;
  if ((i2 | 0) != 0) {
   i14 = i2 + 8 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  }
  HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EES5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i4, i1, i6, i5);
  if ((HEAP8[i8] & 1) != 0) {
   i14 = HEAP32[HEAP32[i10 >> 2] >> 2] | 0;
   HEAP32[i14 + 4 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i14 + 8 >> 2] = 0;
   i2 = HEAP32[i9 >> 2] | 0;
   if ((i2 | 0) == 0) {
    HEAP32[i11 >> 2] = i14;
   } else {
    HEAP32[i2 + 8 >> 2] = i14;
   }
   HEAP32[i9 >> 2] = i14;
  }
  i14 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i2 = i14 + 8 | 0;
    i15 = i2 | 0;
    i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i16;
    if ((i16 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
   }
  } while (0);
  i12 = HEAP32[i12 + 8 >> 2] | 0;
  if ((i12 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13HitTestResultaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 __ZN7WebCore15HitTestLocationaSERKS0_(i1 | 0, i2 | 0) | 0;
 i6 = HEAP32[i2 + 72 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i1 + 72 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 + 8 | 0;
   i7 = i6 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i2 + 76 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i6 = i8 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i1 + 76 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 + 8 | 0;
   i6 = i8 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i9 = i2 + 80 | 0;
 i8 = i1 + 80 | 0;
 i7 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = i7;
 i7 = i2 + 88 | 0;
 i8 = i1 + 88 | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = i9;
 i9 = HEAP32[i2 + 96 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = i1 + 96 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 8 | 0;
   i8 = i9 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i2 + 100 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i9 = i7 + 4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = i1 + 100 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 + 4 | 0;
   i9 = i7 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i9 >> 2] = i8;
    break;
   }
   i8 = i7 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
  }
 } while (0);
 HEAP8[i1 + 104 | 0] = HEAP8[i2 + 104 | 0] & 1;
 i6 = i2 + 108 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i10 = 0;
  i11 = i1 + 108 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i10;
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i12);
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(0);
  STACKTOP = i3;
  return i1 | 0;
 }
 i2 = __ZN3WTF10fastMallocEj(32) | 0;
 i8 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 i6 = i2;
 i9 = i2 + 20 | 0;
 i13 = i2 + 24 | 0;
 _memset(i2 | 0, 0, 28) | 0;
 i14 = __Znwj(3080) | 0;
 i15 = i14;
 i16 = i14 + 8 | 0;
 HEAP32[i14 >> 2] = i16;
 HEAP8[i14 + 4 | 0] = 0;
 _memset(i16 | 0, 0, 3072) | 0;
 i16 = i2 + 28 | 0;
 HEAP32[i16 >> 2] = i15;
 i2 = HEAP32[i7 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = i8;
  i11 = i1 + 108 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i10;
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i12);
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(0);
  STACKTOP = i3;
  return i1 | 0;
 }
 i7 = i4 + 8 | 0;
 i14 = i4 | 0;
 i17 = i2;
 i2 = i15;
 while (1) {
  HEAP32[i5 >> 2] = i2;
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EERKS5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i4, i6, i17 | 0, i5);
  if ((HEAP8[i7] & 1) != 0) {
   i15 = HEAP32[HEAP32[i14 >> 2] >> 2] | 0;
   HEAP32[i15 + 4 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i15 + 8 >> 2] = 0;
   i18 = HEAP32[i13 >> 2] | 0;
   if ((i18 | 0) == 0) {
    HEAP32[i9 >> 2] = i15;
   } else {
    HEAP32[i18 + 8 >> 2] = i15;
   }
   HEAP32[i13 >> 2] = i15;
  }
  i15 = HEAP32[i17 + 8 >> 2] | 0;
  if ((i15 | 0) == 0) {
   i10 = i8;
   break;
  }
  i17 = i15;
  i2 = HEAP32[i16 >> 2] | 0;
 }
 i11 = i1 + 108 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i10;
 __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i12);
 __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(0);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZNK7WebCore13HitTestResult14absolutePDFURLEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 64 | 0;
 i8 = HEAP32[i2 + 76 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i1);
  STACKTOP = i3;
  return;
 }
 i2 = (HEAP32[i8 + 12 >> 2] & 4 | 0) == 0;
 L5 : do {
  if (!i2) {
   i9 = HEAP32[i8 + 44 >> 2] | 0;
   i10 = HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0;
   do {
    if ((i9 | 0) != (i10 | 0)) {
     if ((HEAP32[i9 + 12 >> 2] | 0) == (HEAP32[i10 + 12 >> 2] | 0)) {
      if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0)) {
       break;
      }
     }
     if (i2) {
      break L5;
     }
     i11 = HEAP32[i8 + 44 >> 2] | 0;
     i12 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
     if ((i11 | 0) == (i12 | 0)) {
      break;
     }
     if ((HEAP32[i11 + 12 >> 2] | 0) != (HEAP32[i12 + 12 >> 2] | 0)) {
      break L5;
     }
     if ((HEAP32[i11 + 16 >> 2] | 0) != (HEAP32[i12 + 16 >> 2] | 0)) {
      break L5;
     }
    }
   } while (0);
   i10 = HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0;
   __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, i8 + 152 | 0);
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i4, i10, i5);
   i10 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 | 0;
     i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i9 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i10 = i4 + 4 | 0;
   L22 : do {
    if ((HEAP8[i10] & 1) == 0) {
     HEAP32[i1 >> 2] = 0;
     __ZN7WebCore3URL10invalidateEv(i1);
    } else {
     i12 = i8 + 148 | 0;
     L24 : do {
      if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i12 >> 2] | 0, H_BASE + 16 | 0) | 0)) {
       i9 = HEAP32[i12 >> 2] | 0;
       if ((i9 | 0) == 0) {
        i13 = 21;
       } else {
        if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
         i13 = 21;
        }
       }
       do {
        if ((i13 | 0) == 21) {
         __ZNK7WebCore3URL4pathEv(i7, i4);
         __ZNK3WTF6String5lowerEv(i6, i7);
         i9 = i6 | 0;
         i11 = HEAP32[i9 >> 2] | 0;
         do {
          if ((i11 | 0) == 0) {
           i14 = 0;
          } else {
           i15 = __ZNK3WTF10StringImpl8endsWithEPKcjb(i11, H_BASE + 8 | 0, 4, 1) | 0;
           i16 = HEAP32[i9 >> 2] | 0;
           if ((i16 | 0) == 0) {
            i14 = i15;
            break;
           }
           i17 = i16 | 0;
           i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
           if ((i18 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i16);
            i14 = i15;
            break;
           } else {
            HEAP32[i17 >> 2] = i18;
            i14 = i15;
            break;
           }
          }
         } while (0);
         i9 = HEAP32[i7 >> 2] | 0;
         if ((i9 | 0) == 0) {
          if (i14) {
           break L24;
          } else {
           break;
          }
         }
         i11 = i9 | 0;
         i15 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
         if ((i15 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i9);
          if (i14) {
           break L24;
          } else {
           break;
          }
         } else {
          HEAP32[i11 >> 2] = i15;
          if (i14) {
           break L24;
          } else {
           break;
          }
         }
        }
       } while (0);
       HEAP32[i1 >> 2] = 0;
       __ZN7WebCore3URL10invalidateEv(i1);
       break L22;
      }
     } while (0);
     i12 = i4 | 0;
     i15 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     HEAP32[i1 >> 2] = i15;
     i15 = HEAP8[i10] | 0;
     i12 = i1 + 4 | 0;
     HEAP8[i12] = HEAP8[i12] & -4 | i15 & 1 | i15 & 2;
     HEAP32[i1 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
     HEAP32[i1 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
     HEAP32[i1 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
     HEAP32[i1 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
     HEAP32[i1 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
     HEAP32[i1 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
     HEAP32[i1 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
     HEAP32[i1 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
     HEAP32[i1 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
     HEAP32[i1 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
    }
   } while (0);
   i10 = HEAP32[i4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i15 = i10 | 0;
   i12 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i15 >> 2] = i12;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore13HitTestResult16absoluteImageURLEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 76 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i1);
  STACKTOP = i3;
  return;
 }
 i7 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
 i8 = i2 + 32 | 0;
 if (i7) {
  i9 = i8 | 0;
 } else {
  i9 = HEAP32[i8 >> 2] | 0;
 }
 do {
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   if (i7) {
    i10 = i8 | 0;
   } else {
    i10 = HEAP32[i8 >> 2] | 0;
   }
   i2 = HEAP32[i10 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 1](i2) | 0)) {
    break;
   }
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = 0;
   i11 = HEAP32[i6 >> 2] | 0;
   i12 = HEAP32[i11 + 12 >> 2] | 0;
   i13 = (i12 & 4 | 0) == 0;
   do {
    if (i13) {
     i14 = 16;
    } else {
     i15 = HEAP32[i11 + 44 >> 2] | 0;
     i16 = HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0;
     if ((i15 | 0) == (i16 | 0)) {
      i14 = 27;
      break;
     }
     if ((HEAP32[i15 + 12 >> 2] | 0) != (HEAP32[i16 + 12 >> 2] | 0)) {
      i14 = 16;
      break;
     }
     if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i16 + 16 >> 2] | 0)) {
      i14 = 27;
     } else {
      i14 = 16;
     }
    }
   } while (0);
   L20 : do {
    if ((i14 | 0) == 16) {
     if ((i12 & 16 | 0) != 0) {
      if ((HEAP32[(HEAP32[i11 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
       i14 = 27;
       break;
      }
      if ((HEAP32[(HEAP32[i11 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
       i14 = 27;
       break;
      }
     }
     do {
      if (!i13) {
       i16 = HEAP32[i11 + 44 >> 2] | 0;
       i15 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
       if ((i16 | 0) == (i15 | 0)) {
        i14 = 27;
        break L20;
       }
       if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i15 + 12 >> 2] | 0)) {
        if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i15 + 16 >> 2] | 0)) {
         i14 = 27;
         break L20;
        }
       }
       if (i13) {
        break;
       }
       i15 = HEAP32[i11 + 44 >> 2] | 0;
       i16 = HEAP32[__ZN7WebCore8SVGNames8imageTagE >> 2] | 0;
       if ((i15 | 0) == (i16 | 0)) {
        i14 = 27;
        break L20;
       }
       if ((HEAP32[i15 + 12 >> 2] | 0) != (HEAP32[i16 + 12 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i16 + 16 >> 2] | 0)) {
        i14 = 27;
        break L20;
       }
      }
     } while (0);
     HEAP32[i1 >> 2] = 0;
     __ZN7WebCore3URL10invalidateEv(i1);
    }
   } while (0);
   do {
    if ((i14 | 0) == 27) {
     i13 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 384 >> 2] & 1](i11) | 0) >> 2] | 0;
     do {
      if ((i13 | 0) == 0) {
       HEAP32[i2 >> 2] = i13;
      } else {
       i12 = i13 | 0;
       HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
       i12 = HEAP32[i2 >> 2] | 0;
       HEAP32[i2 >> 2] = i13;
       if ((i12 | 0) == 0) {
        break;
       }
       i16 = i12 | 0;
       i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i12);
        break;
       } else {
        HEAP32[i16 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i13 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
     __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, i4 | 0);
     __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i1, i13, i5);
     i13 = HEAP32[i5 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
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
   i11 = HEAP32[i2 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i16 = i11 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i16 >> 2] = i15;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 96 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i1);
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 16 | 0) == 0) {
   i8 = HEAP32[i2 + 44 >> 2] | 0;
   i9 = 7;
  } else {
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i9 = 10;
    break;
   }
   i10 = HEAP32[i2 + 44 >> 2] | 0;
   if ((HEAP32[i10 + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7areaTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i9 = 10;
   } else {
    i8 = i10;
    i9 = 7;
   }
  }
 } while (0);
 L9 : do {
  if ((i9 | 0) == 7) {
   i10 = HEAP32[__ZN7WebCore9HTMLNames7linkTagE >> 2] | 0;
   if ((i8 | 0) == (i10 | 0)) {
    i9 = 10;
    break;
   }
   i11 = HEAP32[i8 + 12 >> 2] | 0;
   if ((i11 | 0) == (HEAP32[i10 + 12 >> 2] | 0)) {
    if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0)) {
     i9 = 10;
     break;
    }
   }
   i10 = HEAP32[__ZN7WebCore8SVGNames4aTagE >> 2] | 0;
   do {
    if ((i8 | 0) != (i10 | 0)) {
     if ((i11 | 0) == (HEAP32[i10 + 12 >> 2] | 0)) {
      if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0)) {
       break;
      }
     }
     HEAP32[i1 >> 2] = 0;
     __ZN7WebCore3URL10invalidateEv(i1);
     break L9;
    }
   } while (0);
   i10 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore10XLinkNames8hrefAttrE) | 0) >> 2] | 0;
   if ((i10 | 0) != 0) {
    i11 = i10 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   }
   i11 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i10;
   if ((i11 | 0) == 0) {
    i9 = 26;
    break;
   }
   i10 = i11 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    i9 = 26;
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    i9 = 26;
    break;
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 10) {
   i8 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore9HTMLNames8hrefAttrE) | 0) >> 2] | 0;
   if ((i8 | 0) != 0) {
    i12 = i8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   }
   i12 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i12 | 0) == 0) {
    i9 = 26;
    break;
   }
   i8 = i12 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    i9 = 26;
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    i9 = 26;
    break;
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 26) {
   i2 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   __ZN7WebCore33stripLeadingAndTrailingHTMLSpacesERKN3WTF6StringE(i5, i4 | 0);
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i1, i2, i5);
   i2 = HEAP32[i5 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i10 = i2 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i10 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i5 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13HitTestResultC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 __ZN7WebCore15HitTestLocationC1ERKS0_(i1 | 0, i2 | 0);
 i6 = HEAP32[i2 + 72 >> 2] | 0;
 HEAP32[i1 + 72 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i2 + 76 >> 2] | 0;
 HEAP32[i1 + 76 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i6 = i7 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i2 + 80 | 0;
 i7 = i1 + 80 | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i8;
 i8 = i2 + 88 | 0;
 i7 = i1 + 88 | 0;
 i6 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = i6;
 i6 = HEAP32[i2 + 96 >> 2] | 0;
 HEAP32[i1 + 96 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i2 + 100 >> 2] | 0;
 HEAP32[i1 + 100 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i6 = i7 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP8[i1 + 104 | 0] = HEAP8[i2 + 104 | 0] & 1;
 i6 = i1 + 108 | 0;
 HEAP32[i6 >> 2] = 0;
 i1 = i2 + 108 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  i9 = 0;
  i10 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i9;
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i10);
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(0);
  STACKTOP = i3;
  return;
 }
 i2 = __ZN3WTF10fastMallocEj(32) | 0;
 i7 = i2;
 i8 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i11 = i2 + 20 | 0;
 i12 = i2 + 24 | 0;
 _memset(i2 | 0, 0, 28) | 0;
 i13 = __Znwj(3080) | 0;
 i14 = i13;
 i15 = i13 + 8 | 0;
 HEAP32[i13 >> 2] = i15;
 HEAP8[i13 + 4 | 0] = 0;
 _memset(i15 | 0, 0, 3072) | 0;
 i15 = i2 + 28 | 0;
 HEAP32[i15 >> 2] = i14;
 i2 = HEAP32[i8 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i7;
  i10 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i9;
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i10);
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(0);
  STACKTOP = i3;
  return;
 }
 i8 = i4 + 8 | 0;
 i13 = i4 | 0;
 i16 = i2;
 i2 = i14;
 while (1) {
  HEAP32[i5 >> 2] = i2;
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EERKS5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i4, i1, i16 | 0, i5);
  if ((HEAP8[i8] & 1) != 0) {
   i14 = HEAP32[HEAP32[i13 >> 2] >> 2] | 0;
   HEAP32[i14 + 4 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i14 + 8 >> 2] = 0;
   i17 = HEAP32[i12 >> 2] | 0;
   if ((i17 | 0) == 0) {
    HEAP32[i11 >> 2] = i14;
   } else {
    HEAP32[i17 + 8 >> 2] = i14;
   }
   HEAP32[i12 >> 2] = i14;
  }
  i14 = HEAP32[i16 + 8 >> 2] | 0;
  if ((i14 | 0) == 0) {
   i9 = i7;
   break;
  }
  i16 = i14;
  i2 = HEAP32[i15 >> 2] | 0;
 }
 i10 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i10);
 __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13HitTestResultC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 __ZN7WebCore15HitTestLocationC1ERKS0_(i1 | 0, i2 | 0);
 i6 = HEAP32[i2 + 72 >> 2] | 0;
 HEAP32[i1 + 72 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i2 + 76 >> 2] | 0;
 HEAP32[i1 + 76 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i6 = i7 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i2 + 80 | 0;
 i7 = i1 + 80 | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i8;
 i8 = i2 + 88 | 0;
 i7 = i1 + 88 | 0;
 i6 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = i6;
 i6 = HEAP32[i2 + 96 >> 2] | 0;
 HEAP32[i1 + 96 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i2 + 100 >> 2] | 0;
 HEAP32[i1 + 100 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i6 = i7 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP8[i1 + 104 | 0] = HEAP8[i2 + 104 | 0] & 1;
 i6 = i1 + 108 | 0;
 HEAP32[i6 >> 2] = 0;
 i1 = i2 + 108 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  i9 = 0;
  i10 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i9;
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i10);
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(0);
  STACKTOP = i3;
  return;
 }
 i2 = __ZN3WTF10fastMallocEj(32) | 0;
 i7 = i2;
 i8 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i11 = i2 + 20 | 0;
 i12 = i2 + 24 | 0;
 _memset(i2 | 0, 0, 28) | 0;
 i13 = __Znwj(3080) | 0;
 i14 = i13;
 i15 = i13 + 8 | 0;
 HEAP32[i13 >> 2] = i15;
 HEAP8[i13 + 4 | 0] = 0;
 _memset(i15 | 0, 0, 3072) | 0;
 i15 = i2 + 28 | 0;
 HEAP32[i15 >> 2] = i14;
 i2 = HEAP32[i8 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i7;
  i10 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i9;
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i10);
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(0);
  STACKTOP = i3;
  return;
 }
 i8 = i4 + 8 | 0;
 i13 = i4 | 0;
 i16 = i2;
 i2 = i14;
 while (1) {
  HEAP32[i5 >> 2] = i2;
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EERKS5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i4, i1, i16 | 0, i5);
  if ((HEAP8[i8] & 1) != 0) {
   i14 = HEAP32[HEAP32[i13 >> 2] >> 2] | 0;
   HEAP32[i14 + 4 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i14 + 8 >> 2] = 0;
   i17 = HEAP32[i12 >> 2] | 0;
   if ((i17 | 0) == 0) {
    HEAP32[i11 >> 2] = i14;
   } else {
    HEAP32[i17 + 8 >> 2] = i14;
   }
   HEAP32[i12 >> 2] = i14;
  }
  i14 = HEAP32[i16 + 8 >> 2] | 0;
  if ((i14 | 0) == 0) {
   i9 = i7;
   break;
  }
  i16 = i14;
  i2 = HEAP32[i15 >> 2] | 0;
 }
 i10 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i10);
 __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(0);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EERKS5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = i3;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = (i10 >>> 23) + ~i10 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i10;
 i10 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i7 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == 0) {
   break;
  } else if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i3 | 0)) {
    i18 = 6;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i10 | 0) == 0 ? i9 : i10;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i10 = i15;
 }
 if ((i18 | 0) == 6) {
  i18 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i7 = i1;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i7 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i7 = i11 + 4 | 0;
    if ((HEAP8[i7] & 1) != 0) {
     i21 = 0;
     break;
    }
    i10 = i14 + 12 | 0;
    if ((i10 | 0) != (i11 + 3080 | 0)) {
     i21 = i10;
     break;
    }
    HEAP8[i7] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 HEAP32[i20 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i8 = i14 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i8 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i8;
 i20 = i2 + 4 | 0;
 i14 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i8 << 1 | 0) < (i14 | 0)) {
  i22 = i19;
  i23 = i14;
 } else {
  i14 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6expandEPS7_(i2, i19) | 0;
  i22 = i14;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EES5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = i3;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = (i10 >>> 23) + ~i10 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i10;
 i10 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i7 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i3 | 0)) {
    i18 = 6;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i10 | 0) == 0 ? i9 : i10;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i10 = i15;
 }
 if ((i18 | 0) == 6) {
  i18 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i7 = i1;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i7 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i7 = i11 + 4 | 0;
    if ((HEAP8[i7] & 1) != 0) {
     i21 = 0;
     break;
    }
    i10 = i14 + 12 | 0;
    if ((i10 | 0) != (i11 + 3080 | 0)) {
     i21 = i10;
     break;
    }
    HEAP8[i7] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i20 >> 2] = i14;
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i14 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i14;
 i20 = i2 + 4 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i14 << 1 | 0) < (i8 | 0)) {
  i22 = i19;
  i23 = i8;
 } else {
  i8 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6expandEPS7_(i2, i19) | 0;
  i22 = i8;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_9FloatRectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 48 | 0;
 if ((HEAP8[i1 + 68 | 0] & 1) == 0) {
  i12 = 0;
  STACKTOP = i6;
  return i12 | 0;
 }
 if ((i2 | 0) == 0) {
  i12 = 1;
  STACKTOP = i6;
  return i12 | 0;
 }
 if ((HEAP32[i3 >> 2] & 256 | 0) == 0) {
  i13 = i2;
 } else {
  i13 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 44 | 0, i2) | 0;
 }
 i2 = i1 + 108 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = __ZN3WTF10fastMallocEj(32) | 0;
  _memset(i3 | 0, 0, 28) | 0;
  i14 = __Znwj(3080) | 0;
  i15 = i14 + 8 | 0;
  HEAP32[i14 >> 2] = i15;
  HEAP8[i14 + 4 | 0] = 0;
  _memset(i15 | 0, 0, 3072) | 0;
  HEAP32[i3 + 28 >> 2] = i14;
  i14 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i3;
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i14);
  i16 = HEAP32[i2 >> 2] | 0;
 } else {
  i16 = i1;
 }
 i1 = i9 | 0;
 HEAP32[i1 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i2 = i13 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 HEAP32[i8 >> 2] = HEAP32[i16 + 28 >> 2];
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EES5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i7, i16 | 0, i9, i8);
 if ((HEAP8[i7 + 8 | 0] & 1) != 0) {
  i8 = HEAP32[HEAP32[i7 >> 2] >> 2] | 0;
  i7 = i16 + 24 | 0;
  HEAP32[i8 + 4 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i8 + 8 >> 2] = 0;
  i9 = HEAP32[i7 >> 2] | 0;
  if ((i9 | 0) == 0) {
   HEAP32[i16 + 20 >> 2] = i8;
  } else {
   HEAP32[i9 + 8 >> 2] = i8;
  }
  HEAP32[i7 >> 2] = i8;
 }
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i1 = i8 + 8 | 0;
   i7 = i1 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 i8 = i11;
 i1 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i10, i11);
 i12 = (__ZNK7WebCore9FloatRect8containsERKS0_(i5, i10) | 0) ^ 1;
 STACKTOP = i6;
 return i12 | 0;
}
function __ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_10LayoutRectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 if ((HEAP8[i1 + 68 | 0] & 1) == 0) {
  i11 = 0;
  STACKTOP = i6;
  return i11 | 0;
 }
 if ((i2 | 0) == 0) {
  i11 = 1;
  STACKTOP = i6;
  return i11 | 0;
 }
 if ((HEAP32[i3 >> 2] & 256 | 0) == 0) {
  i12 = i2;
 } else {
  i12 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 44 | 0, i2) | 0;
 }
 i2 = i1 + 108 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = __ZN3WTF10fastMallocEj(32) | 0;
  _memset(i3 | 0, 0, 28) | 0;
  i13 = __Znwj(3080) | 0;
  i14 = i13 + 8 | 0;
  HEAP32[i13 >> 2] = i14;
  HEAP8[i13 + 4 | 0] = 0;
  _memset(i14 | 0, 0, 3072) | 0;
  HEAP32[i3 + 28 >> 2] = i13;
  i13 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i3;
  __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i13);
  i15 = HEAP32[i2 >> 2] | 0;
 } else {
  i15 = i1;
 }
 i1 = i9 | 0;
 HEAP32[i1 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i2 = i12 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 HEAP32[i8 >> 2] = HEAP32[i15 + 28 >> 2];
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EES5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i7, i15 | 0, i9, i8);
 if ((HEAP8[i7 + 8 | 0] & 1) != 0) {
  i8 = HEAP32[HEAP32[i7 >> 2] >> 2] | 0;
  i7 = i15 + 24 | 0;
  HEAP32[i8 + 4 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i8 + 8 >> 2] = 0;
  i9 = HEAP32[i7 >> 2] | 0;
  if ((i9 | 0) == 0) {
   HEAP32[i15 + 20 >> 2] = i8;
  } else {
   HEAP32[i9 + 8 >> 2] = i8;
  }
  HEAP32[i7 >> 2] = i8;
 }
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i1 = i8 + 8 | 0;
   i7 = i1 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 i8 = i4 + 8 | 0;
 i1 = i4 + 16 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i10 + 4 >> 2] = i1;
 HEAP32[i10 + 8 >> 2] = i4;
 HEAP32[i10 + 12 >> 2] = i9;
 i11 = (__ZNK7WebCore10LayoutRect8containsERKS0_(i5, i10) | 0) ^ 1;
 STACKTOP = i6;
 return i11 | 0;
}
function __ZN7WebCore13HitTestResult22setToNonShadowAncestorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 3;
  } else {
   i4 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 44 | 0, i2) | 0;
   if ((i4 | 0) == 0) {
    i3 = 3;
    break;
   }
   if ((HEAP32[i4 + 12 >> 2] & 1048580 | 0) == 1048580) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 232 >> 2] & 1](i4) | 0) == 0) {
     i5 = i4;
    } else {
     i5 = HEAP32[i4 + 52 >> 2] | 0;
    }
    i6 = i1 + 72 | 0;
    if ((i5 | 0) == 0) {
     i7 = 0;
     i8 = i6;
     break;
    } else {
     i9 = i5;
     i10 = i6;
    }
   } else {
    i9 = i4;
    i10 = i1 + 72 | 0;
   }
   i4 = i9 + 8 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   i7 = i9;
   i8 = i10;
  }
 } while (0);
 if ((i3 | 0) == 3) {
  i7 = 0;
  i8 = i1 + 72 | 0;
 }
 i10 = i8 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i7;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 + 8 | 0;
   i10 = i7 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i1 + 76 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i3 = 16;
  } else {
   i7 = __ZNK7WebCore9TreeScope19ancestorInThisScopeEPNS_4NodeE((HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0) + 44 | 0, i8) | 0;
   if ((i7 | 0) == 0) {
    i3 = 16;
    break;
   }
   if ((HEAP32[i7 + 12 >> 2] & 1048580 | 0) == 1048580) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 232 >> 2] & 1](i7) | 0) == 0) {
     i11 = i7;
    } else {
     i11 = HEAP32[i7 + 52 >> 2] | 0;
    }
    i9 = i1 + 76 | 0;
    if ((i11 | 0) == 0) {
     i12 = 0;
     i13 = i9;
     break;
    } else {
     i14 = i11;
     i15 = i9;
    }
   } else {
    i14 = i7;
    i15 = i1 + 76 | 0;
   }
   i7 = i14 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i12 = i14;
   i13 = i15;
  }
 } while (0);
 if ((i3 | 0) == 16) {
  i12 = 0;
  i13 = i1 + 76 | 0;
 }
 i1 = i13 | 0;
 i13 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i12;
 if ((i13 | 0) == 0) {
  return;
 }
 i12 = i13 + 8 | 0;
 i13 = i12 | 0;
 i1 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 HEAP32[i13 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   i18 = i17;
   i19 = i18 + ~(i18 << 15) | 0;
   i18 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i18 >>> 6 ^ i18;
   i18 = i19 + ~(i19 << 11) | 0;
   i19 = i18 >>> 16 ^ i18;
   i18 = (i19 >>> 23) + ~i19 | 0;
   i20 = i18 << 12 ^ i18;
   i18 = i20 >>> 7 ^ i20;
   i20 = i18 << 2 ^ i18;
   i18 = i20 >>> 20 ^ i20 | 1;
   i20 = i19;
   i19 = 0;
   i21 = 0;
   while (1) {
    i22 = i20 & i16;
    i23 = i14 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == 0) {
     i26 = 7;
     break;
    } else if ((i25 | 0) == (-1 | 0)) {
     i27 = i23;
    } else {
     if ((HEAP32[i24 >> 2] | 0) == (i17 | 0)) {
      i28 = i23;
      break;
     } else {
      i27 = i21;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i20 = i24 + i22 | 0;
    i19 = i24;
    i21 = i27;
   }
   if ((i26 | 0) == 7) {
    i26 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   HEAP32[i28 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i28 : i12;
  }
  i19 = i11 + 1 | 0;
  if ((i19 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i19;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZNK7WebCore13HitTestResult16altDisplayStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 76 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 do {
  if ((HEAP32[i2 + 12 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i6 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i2, __ZN7WebCore9HTMLNames7altAttrE) | 0;
    i7 = HEAP32[i5 >> 2] | 0;
    if ((i7 | 0) != 0) {
     __ZNK7WebCore8Document31displayStringModifiedByEncodingERKN3WTF6StringE(i1, HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0, i6 | 0);
     STACKTOP = i3;
     return;
    }
    i7 = HEAP32[i6 >> 2] | 0;
    HEAP32[i1 >> 2] = i7;
    if ((i7 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    i6 = i7 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   __ZNK7WebCore16HTMLInputElement3altEv(i4, i2);
   i6 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i6 | 0) == 0) {
     i7 = i4 | 0;
     i8 = HEAP32[i7 >> 2] | 0;
     HEAP32[i1 >> 2] = i8;
     if ((i8 | 0) == 0) {
      i9 = i7;
      break;
     }
     i10 = i8 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     i9 = i7;
    } else {
     __ZNK7WebCore8Document31displayStringModifiedByEncodingERKN3WTF6StringE(i1, HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0, i4);
     i9 = i4 | 0;
    }
   } while (0);
   i6 = HEAP32[i9 >> 2] | 0;
   if ((i6 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i7 = i6 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i7 >> 2] = i10;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13HitTestResultD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(HEAP32[i1 + 108 >> 2] | 0);
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore15HitTestLocationD1Ev(i6);
  return;
 }
 i5 = i2 + 8 | 0;
 i2 = i5 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i6 = i1 | 0;
  __ZN7WebCore15HitTestLocationD1Ev(i6);
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i6 = i1 | 0;
  __ZN7WebCore15HitTestLocationD1Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i6 = i1 | 0;
 __ZN7WebCore15HitTestLocationD1Ev(i6);
 return;
}
function __ZN7WebCore13HitTestResultD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(HEAP32[i1 + 108 >> 2] | 0);
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore15HitTestLocationD1Ev(i6);
  return;
 }
 i5 = i2 + 8 | 0;
 i2 = i5 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i6 = i1 | 0;
  __ZN7WebCore15HitTestLocationD1Ev(i6);
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i6 = i1 | 0;
  __ZN7WebCore15HitTestLocationD1Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i6 = i1 | 0;
 __ZN7WebCore15HitTestLocationD1Ev(i6);
 return;
}
function __ZNK7WebCore13HitTestResult11targetFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i1 = HEAP32[(HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 i8 = i1 + 40 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 388 >> 2] & 7](i5, i6);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i1 = i3 | 0;
   HEAP32[i1 >> 2] = 0;
   i9 = i1;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i9 = i3 | 0;
    break;
   } else {
    i1 = i3 | 0;
    HEAP32[i1 >> 2] = i5;
    i10 = i5 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
    i9 = i1;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
 i9 = __ZNK7WebCore9FrameTree4findERKN3WTF12AtomicStringE(i8, i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i7 = i9;
  STACKTOP = i2;
  return i7 | 0;
 }
 i6 = i4 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i7 = i9;
  STACKTOP = i2;
  return i7 | 0;
 } else {
  HEAP32[i6 >> 2] = i8;
  i7 = i9;
  STACKTOP = i2;
  return i7 | 0;
 }
 return 0;
}
function __ZNK7WebCore13HitTestResult5titleERNS_13TextDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i3 >> 2] = 1;
 i6 = HEAP32[i2 + 72 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) == 0) {
   i7 = i1 | 0;
  } else {
   i2 = i5 | 0;
   i8 = i1 | 0;
   i9 = i6;
   L4 : while (1) {
    i10 = i9 + 12 | 0;
    do {
     if ((HEAP32[i10 >> 2] & 4 | 0) != 0) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 404 >> 2] & 7](i5, i9);
      i11 = HEAP32[i2 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break;
      }
      if ((HEAP32[i11 + 4 >> 2] | 0) != 0) {
       break L4;
      }
      i12 = i11 | 0;
      i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
      if ((i13 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i12 >> 2] = i13;
       break;
      }
     }
    } while (0);
    i13 = HEAP32[i9 + 16 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i7 = i8;
     break L1;
    } else {
     i9 = i13 | 0;
    }
   }
   i13 = i9 + 32 | 0;
   if ((HEAP32[i10 >> 2] & 2048 | 0) == 0) {
    i14 = i13 | 0;
   } else {
    i14 = HEAP32[i13 >> 2] | 0;
   }
   i13 = HEAP32[i14 >> 2] | 0;
   if ((i13 | 0) != 0) {
    if ((HEAP32[i13 + 20 >> 2] & 768 | 0) == 256) {
     i15 = HEAP32[(HEAP32[i13 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i15 = HEAP32[i13 + 36 >> 2] | 0;
    }
    HEAP32[i3 >> 2] = (HEAP32[i15 + 40 >> 2] | 0) >>> 30 & 1;
   }
   HEAP32[i2 >> 2] = 0;
   HEAP32[i8 >> 2] = i11;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i7 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i1 + 28 | 0;
 if ((i2 | 0) != 0) {
  i4 = i2;
  while (1) {
   i2 = i4 + 8 | 0;
   i5 = HEAP32[i2 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 + 8 | 0;
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i11 = 10;
    } else {
     if ((i7 + 3072 | 0) >>> 0 <= i4 >>> 0) {
      i11 = 10;
      break;
     }
     i8 = i6 | 0;
     HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i8 >> 2] = i4;
    }
   } while (0);
   if ((i11 | 0) == 10) {
    i11 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore13HitTestResult20innerTextIfTruncatedERNS_13TextDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = HEAP32[i2 + 72 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) != 0) {
   i2 = i4;
   L2 : while (1) {
    i5 = HEAP32[i2 + 12 >> 2] | 0;
    do {
     if ((i5 & 4 | 0) != 0) {
      i6 = i2;
      i7 = i2 + 32 | 0;
      if ((i5 & 2048 | 0) == 0) {
       i8 = i7 | 0;
      } else {
       i8 = HEAP32[i7 >> 2] | 0;
      }
      i9 = HEAP32[i8 >> 2] | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      if ((HEAP32[i9 + 24 >> 2] & 32 | 0) != 0) {
       break L2;
      }
     }
    } while (0);
    i5 = HEAP32[i2 + 16 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break L1;
    } else {
     i2 = i5 | 0;
    }
   }
   i2 = HEAP32[i9 + 36 >> 2] | 0;
   if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 292 >> 2] & 33554432 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i9 + 104 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i7 = i5;
   while (1) {
    if ((HEAP32[i7 + 32 >> 2] & 32768 | 0) != 0) {
     break;
    }
    i7 = HEAP32[i7 + 52 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L1;
    }
   }
   HEAP32[i3 >> 2] = (HEAP32[i2 + 40 >> 2] | 0) >>> 30 & 1;
   __ZN7WebCore7Element9innerTextEv(i1, i6);
   return;
  }
 } while (0);
 HEAP32[i3 >> 2] = 1;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore13HitTestResult9imageRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i2 + 76 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 + 32 | 0;
   if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
    i8 = i7 | 0;
   } else {
    i8 = HEAP32[i7 >> 2] | 0;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 92 >> 2] & 1](i7) | 0)) {
    break;
   }
   i9 = HEAP32[i7 + 104 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i9 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((((HEAP32[i10 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    break;
   }
   if ((__ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i10, i7) | 0) == 0) {
    break;
   }
   __ZNK7WebCore9RenderBox19absoluteContentQuadEv(i5, __ZNK7WebCore4Node9renderBoxEv(HEAP32[i6 >> 2] | 0) | 0);
   __ZNK7WebCore9FloatQuad11boundingBoxEv(i4, i5);
   __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i4);
   STACKTOP = i3;
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 16) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore13HitTestResult15spellingToolTipERNS_13TextDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i3 >> 2] = 1;
 i4 = i2 + 76 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i6 = __ZN7WebCore24DocumentMarkerController21markerContainingPointERKNS_11LayoutPointENS_14DocumentMarker10MarkerTypeE(HEAP32[(HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1124 >> 2] | 0, i2 | 0, 2) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i7 = i4 | 0;
 } else {
  i7 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) != 0) {
  if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
   i8 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i8 = HEAP32[i4 + 36 >> 2] | 0;
  }
  HEAP32[i3 >> 2] = (HEAP32[i8 + 40 >> 2] | 0) >>> 30 & 1;
 }
 i8 = HEAP32[(__ZNK7WebCore14DocumentMarker11descriptionEv(i6) | 0) >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 if ((i8 | 0) == 0) {
  return;
 }
 i1 = i8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZNK7WebCore13HitTestResult18titleDisplayStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 96 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 404 >> 2] & 7](i4, i2);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i5 = i4 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i1 >> 2] = i6;
   if ((i6 | 0) == 0) {
    i7 = i5;
    break;
   }
   i8 = i6 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   i7 = i5;
  } else {
   __ZNK7WebCore8Document31displayStringModifiedByEncodingERKN3WTF6StringE(i1, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0, i4);
   i7 = i4 | 0;
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13HitTestResult21setInnerNonSharedNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
   i4 = i1 + 76 | 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] & 1048580 | 0) == 1048580) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 232 >> 2] & 1](i2) | 0) == 0) {
     i5 = i2;
    } else {
     i5 = HEAP32[i2 + 52 >> 2] | 0;
    }
    i6 = i1 + 76 | 0;
    if ((i5 | 0) == 0) {
     i3 = 0;
     i4 = i6;
     break;
    } else {
     i7 = i5;
     i8 = i6;
    }
   } else {
    i7 = i2;
    i8 = i1 + 76 | 0;
   }
   i6 = i7 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i3 = i7;
   i4 = i8;
  }
 } while (0);
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = i4 + 8 | 0;
 i4 = i3 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 return;
}
function __ZN7WebCore13HitTestResult12setInnerNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
   i4 = i1 + 72 | 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] & 1048580 | 0) == 1048580) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 232 >> 2] & 1](i2) | 0) == 0) {
     i5 = i2;
    } else {
     i5 = HEAP32[i2 + 52 >> 2] | 0;
    }
    i6 = i1 + 72 | 0;
    if ((i5 | 0) == 0) {
     i3 = 0;
     i4 = i6;
     break;
    } else {
     i7 = i5;
     i8 = i6;
    }
   } else {
    i7 = i2;
    i8 = i1 + 72 | 0;
   }
   i6 = i7 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i3 = i7;
   i4 = i8;
  }
 } while (0);
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = i4 + 8 | 0;
 i4 = i3 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 return;
}
function __ZNK7WebCore13HitTestResult21dictationAlternativesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 + 76 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  return;
 }
 i5 = __ZN7WebCore24DocumentMarkerController21markerContainingPointERKNS_11LayoutPointENS_14DocumentMarker10MarkerTypeE(HEAP32[(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1124 >> 2] | 0, i2 + 80 | 0, 512) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  return;
 }
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  return;
 } else {
  __ZN7WebCore6Editor30dictationAlternativesForMarkerEPKNS_14DocumentMarkerE(i1, HEAP32[i2 + 464 >> 2] | 0, i5);
  return;
 }
}
function __ZNK7WebCore13HitTestResult10isLiveLinkEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i1 & 16 | 0) == 0) {
   i4 = HEAP32[i2 + 44 >> 2] | 0;
  } else {
   i5 = HEAP32[i2 + 44 >> 2] | 0;
   if ((HEAP32[i5 + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = i5;
    break;
   }
   i3 = __ZNK7WebCore17HTMLAnchorElement10isLiveLinkEv(i2) | 0;
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore8SVGNames4aTagE >> 2] | 0;
 do {
  if ((i4 | 0) != (i2 | 0)) {
   if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
    i3 = 0;
    return i3 | 0;
   }
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = (i1 & 512 | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore13HitTestResult5imageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i1 | 0;
 } else {
  i4 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 1](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = HEAP32[i4 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((((HEAP32[i2 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i2, i1) | 0;
 return i3 | 0;
}
function __ZNK7WebCore13HitTestResult17isContentEditableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if ((HEAP32[i2 + 12 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i3 = 1;
    return i3 | 0;
   }
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   i3 = __ZNK7WebCore16HTMLInputElement11isTextFieldEv(i2) | 0;
   return i3 | 0;
  }
 } while (0);
 i3 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i2, 0, 1) | 0;
 return i3 | 0;
}
function __ZN7WebCore13HitTestResult26mutableRectBasedTestResultEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 108 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = i1;
  return i3 | 0;
 }
 i1 = __ZN3WTF10fastMallocEj(32) | 0;
 _memset(i1 | 0, 0, 28) | 0;
 i4 = __Znwj(3080) | 0;
 i5 = i4 + 8 | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP8[i4 + 4 | 0] = 0;
 _memset(i5 | 0, 0, 3072) | 0;
 HEAP32[i1 + 28 >> 2] = i4;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i1;
 __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i4);
 __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(0);
 i3 = HEAP32[i2 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore13HitTestResult19rectBasedTestResultEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 108 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = i1;
  return i3 | 0;
 }
 i1 = __ZN3WTF10fastMallocEj(32) | 0;
 _memset(i1 | 0, 0, 28) | 0;
 i4 = __Znwj(3080) | 0;
 i5 = i4 + 8 | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP8[i4 + 4 | 0] = 0;
 _memset(i5 | 0, 0, 3072) | 0;
 HEAP32[i1 + 28 >> 2] = i4;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i1;
 __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(i4);
 __ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_(0);
 i3 = HEAP32[i2 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore13HitTestResult14replacedStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 76 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i4 = __ZN7WebCore24DocumentMarkerController21markerContainingPointERKNS_11LayoutPointENS_14DocumentMarker10MarkerTypeE(HEAP32[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1124 >> 2] | 0, i2 | 0, 8) | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i2 = HEAP32[(__ZNK7WebCore14DocumentMarker11descriptionEv(i4) | 0) >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore13HitTestResult12setScrollbarEPNS_9ScrollbarE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 100 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i3);
 return;
}
function __ZN7WebCore13HitTestResult13setURLElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 96 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 8 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
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
function __ZNK7WebCore13HitTestResult10targetNodeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i4 & 4 | 0) == 0) {
    break;
   }
   if ((i4 & 256 | 0) == 0) {
    break;
   } else {
    i3 = i1 | 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i2;
 return i3 | 0;
}
function __ZN7WebCore13HitTestResultC2ERKNS_11LayoutPointEjjjj(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore15HitTestLocationC1ERKNS_11LayoutPointEjjjj(i1 | 0, i2, i3, i4, i5, i6);
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 i6 = i2;
 i2 = i1 + 80 | 0;
 i5 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i2 + 4 >> 2] = i5;
 HEAP32[i1 + 108 >> 2] = 0;
 _memset(i1 + 88 | 0, 0, 17) | 0;
 return;
}
function __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointEjjjj(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore15HitTestLocationC1ERKNS_11LayoutPointEjjjj(i1 | 0, i2, i3, i4, i5, i6);
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 i6 = i2;
 i2 = i1 + 80 | 0;
 i5 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i2 + 4 >> 2] = i5;
 HEAP32[i1 + 108 >> 2] = 0;
 _memset(i1 + 88 | 0, 0, 17) | 0;
 return;
}
function __ZNK7WebCore13HitTestResult21innerNonSharedElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] & 4 | 0) != 0) {
    i3 = i2;
    break;
   }
   i1 = HEAP32[i2 + 16 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i3 = 0;
    break;
   }
   if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = i1;
  }
 } while (0);
 return i3 | 0;
}
function __ZNK7WebCore13HitTestResult12innerElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   if ((HEAP32[i2 + 12 >> 2] & 4 | 0) != 0) {
    i3 = i2;
    break;
   }
   i1 = HEAP32[i2 + 16 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i3 = 0;
    break;
   }
   if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = i1;
  }
 } while (0);
 return i3 | 0;
}
function __ZN7WebCore13displayStringERKN3WTF6StringEPKNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) != 0) {
  __ZNK7WebCore8Document31displayStringModifiedByEncodingERKN3WTF6StringE(i1, HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0, i2);
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZNK7WebCore13HitTestResult10isSelectedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN7WebCore14FrameSelection8containsERKNS_11LayoutPointE(HEAP32[i4 + 468 >> 2] | 0, i1 | 0) | 0;
 return i3 | 0;
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
function __ZNK7WebCore13HitTestResult14innerNodeFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore13HitTestResultC2ERKNS_11LayoutPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 __ZN7WebCore15HitTestLocationC1ERKNS_11LayoutPointE(i1 | 0, i2);
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 i3 = i2;
 i2 = i1 + 80 | 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 HEAP32[i1 + 108 >> 2] = 0;
 _memset(i1 + 88 | 0, 0, 17) | 0;
 return;
}
function __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 __ZN7WebCore15HitTestLocationC1ERKNS_11LayoutPointE(i1 | 0, i2);
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 i3 = i2;
 i2 = i1 + 80 | 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 HEAP32[i1 + 108 >> 2] = 0;
 _memset(i1 + 88 | 0, 0, 17) | 0;
 return;
}
function __ZN7WebCore13HitTestResultC2ERKNS_15HitTestLocationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 __ZN7WebCore15HitTestLocationC1ERKS0_(i1 | 0, i2);
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 i2 = i1;
 i3 = i1 + 80 | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = i4;
 HEAP32[i1 + 108 >> 2] = 0;
 _memset(i1 + 88 | 0, 0, 17) | 0;
 return;
}
function __ZN7WebCore13HitTestResultC1ERKNS_15HitTestLocationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 __ZN7WebCore15HitTestLocationC1ERKS0_(i1 | 0, i2);
 HEAP32[i1 + 72 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = 0;
 i2 = i1;
 i3 = i1 + 80 | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = i4;
 HEAP32[i1 + 108 >> 2] = 0;
 _memset(i1 + 88 | 0, 0, 17) | 0;
 return;
}
function __ZNK7WebCore13HitTestResult11textContentEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 96 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZNK7WebCore4Node11textContentEb(i1, i3 | 0, 0);
  return;
 }
}
function __ZNK7WebCore13HitTestResult10isOverLinkEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 12 >> 2] & 512 | 0) != 0;
 return i3 | 0;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore13HitTestResultC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15HitTestLocationC1Ev(i1 | 0);
 HEAP32[i1 + 108 >> 2] = 0;
 _memset(i1 + 72 | 0, 0, 33) | 0;
 return;
}
function __ZN7WebCore13HitTestResultC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15HitTestLocationC1Ev(i1 | 0);
 HEAP32[i1 + 108 >> 2] = 0;
 _memset(i1 + 72 | 0, 0, 33) | 0;
 return;
}
function __ZNK7WebCore13HitTestResult16absoluteMediaURLEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i1);
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
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b4(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(4);
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
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore13HitTestResult26toggleMediaFullscreenStateEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore13HitTestResult26toggleMediaControlsDisplayEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore13HitTestResult23mediaSupportsFullscreenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore13HitTestResult23toggleMediaLoopPlaybackEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore13HitTestResult23enterFullscreenForVideoEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore13HitTestResult20mediaControlsEnabledEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13HitTestResult19mediaIsInFullscreenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13HitTestResult20toggleMediaPlayStateEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore13HitTestResult20toggleMediaMuteStateEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore13HitTestResult16mediaLoopEnabledEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13HitTestResult13mediaHasAudioEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13HitTestResult12mediaPlayingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13HitTestResult12mediaIsVideoEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore13HitTestResult10mediaMutedEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore13HitTestResultD2Ev,b0,__ZN7WebCore13HitTestResultC2Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore13HitTestResultC2ERKS0_,b1,__ZN7WebCore13HitTestResultC2ERKNS_11LayoutPointE,b1,__ZN7WebCore13HitTestResultC2ERKNS_15HitTestLocationE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_viiiiii = [b4,b4,__ZN7WebCore13HitTestResultC2ERKNS_11LayoutPointEjjjj,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames7altAttrE": __ZN7WebCore9HTMLNames7altAttrE, "__ZN7WebCore10XLinkNames8hrefAttrE": __ZN7WebCore10XLinkNames8hrefAttrE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore9HTMLNames11textareaTagE": __ZN7WebCore9HTMLNames11textareaTagE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN7WebCore9HTMLNames7linkTagE": __ZN7WebCore9HTMLNames7linkTagE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE, "__ZN7WebCore8SVGNames4aTagE": __ZN7WebCore8SVGNames4aTagE, "__ZN7WebCore9HTMLNames7areaTagE": __ZN7WebCore9HTMLNames7areaTagE, "__ZN7WebCore9HTMLNames8hrefAttrE": __ZN7WebCore9HTMLNames8hrefAttrE, "__ZN7WebCore8SVGNames8imageTagE": __ZN7WebCore8SVGNames8imageTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore13HitTestResult21innerNonSharedElementEv","__ZNK7WebCore13HitTestResult5titleERNS_13TextDirectionE","__ZN7WebCore13HitTestResult26mutableRectBasedTestResultEv","__ZNK7WebCore13HitTestResult19rectBasedTestResultEv","__ZN7WebCore13HitTestResult21setInnerNonSharedNodeEPNS_4NodeE","__ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_10LayoutRectE","__ZNK7WebCore13HitTestResult10isSelectedEv","__ZNK7WebCore13HitTestResult12mediaPlayingEv","__ZNK7WebCore13HitTestResult17isContentEditableEv","__ZN7WebCore13displayStringERKN3WTF6StringEPKNS_4NodeE","__ZNK7WebCore13HitTestResult20toggleMediaMuteStateEv","_strlen","__ZNK7WebCore13HitTestResult20toggleMediaPlayStateEv","__ZNK7WebCore13HitTestResult16absoluteImageURLEv","__ZNK7WebCore13HitTestResult11targetFrameEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EERKS5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_","__ZNK7WebCore13HitTestResult23toggleMediaLoopPlaybackEv","__ZNK7WebCore13HitTestResult14replacedStringEv","__ZNK7WebCore13HitTestResult12innerElementEv","__ZNK7WebCore13HitTestResult21dictationAlternativesEv","__ZN7WebCore13HitTestResultC2ERKNS_11LayoutPointE","__ZN7WebCore13HitTestResultC2ERKNS_15HitTestLocationE","__ZN7WebCore13HitTestResultC2ERKNS_11LayoutPointEjjjj","__ZN7WebCore13HitTestResult12setInnerNodeEPNS_4NodeE","_memset","__ZNK7WebCore13HitTestResult26toggleMediaFullscreenStateEv","_memcpy","__ZNK7WebCore13HitTestResult14innerNodeFrameEv","__ZNK7WebCore13HitTestResult11textContentEv","__ZNK7WebCore13HitTestResult18titleDisplayStringEv","__ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_9FloatRectE","__ZN7WebCore13HitTestResult6appendERKS0_","__ZN7WebCore13HitTestResultC2ERKS0_","__ZNK7WebCore13HitTestResult12mediaIsVideoEv","__ZN7WebCore13HitTestResultD2Ev","__ZNK7WebCore13HitTestResult9imageRectEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6expandEPS7_","__ZNK7WebCore13HitTestResult16absoluteMediaURLEv","__ZNK7WebCore13HitTestResult15spellingToolTipERNS_13TextDirectionE","__ZNK7WebCore13HitTestResult20mediaControlsEnabledEv","__ZNK7WebCore13HitTestResult16mediaLoopEnabledEv","__ZNK7WebCore13HitTestResult23mediaSupportsFullscreenEv","__ZNK7WebCore13HitTestResult23enterFullscreenForVideoEv","__ZNK7WebCore13HitTestResult10isLiveLinkEv","__ZNK7WebCore13HitTestResult5imageEv","__ZNK7WebCore13HitTestResult19mediaIsInFullscreenEv","__ZN7WebCore13HitTestResult22setToNonShadowAncestorEv","__ZNK7WebCore13HitTestResult15absoluteLinkURLEv","__ZN3WTF14deleteOwnedPtrINS_11ListHashSetINS_6RefPtrIN7WebCore4NodeEEELj256ENS_7PtrHashIS5_EEEEEEvPT_","__ZNK7WebCore13HitTestResult10isOverLinkEv","__ZN7WebCore13HitTestResultC2Ev","__ZN7WebCore13HitTestResult13setURLElementEPNS_7ElementE","__ZNK7WebCore13HitTestResult16altDisplayStringEv","__ZNK7WebCore13HitTestResult10targetNodeEv","__ZNK7WebCore13HitTestResult26toggleMediaControlsDisplayEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore4NodeEEELj256EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EES5_PNS_24ListHashSetNodeAllocatorIS5_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_","__ZNK7WebCore13HitTestResult10mediaMutedEv","__ZN7WebCore13HitTestResultaSERKS0_","__ZNK7WebCore13HitTestResult14absolutePDFURLEv","__ZNK7WebCore13HitTestResult13mediaHasAudioEv","__ZNK7WebCore13HitTestResult20innerTextIfTruncatedERNS_13TextDirectionE","__ZN7WebCore13HitTestResult12setScrollbarEPNS_9ScrollbarE"]

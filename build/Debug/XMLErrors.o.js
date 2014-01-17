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
H_BASE = parentModule["_malloc"](512 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 512;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9XMLErrorsC1EPNS_8DocumentE;
/* memory initializer */ allocate([84,104,105,115,32,112,97,103,101,32,99,111,110,116,97,105,110,115,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,101,114,114,111,114,115,58,0,0,0,0,0,0,0,0,100,105,115,112,108,97,121,58,32,98,108,111,99,107,59,32,119,104,105,116,101,45,115,112,97,99,101,58,32,112,114,101,59,32,98,111,114,100,101,114,58,32,50,112,120,32,115,111,108,105,100,32,35,99,55,55,59,32,112,97,100,100,105,110,103,58,32,48,32,49,101,109,32,48,32,49,101,109,59,32,109,97,114,103,105,110,58,32,49,101,109,59,32,98,97,99,107,103,114,111,117,110,100,45,99,111,108,111,114,58,32,35,102,100,100,59,32,99,111,108,111,114,58,32,98,108,97,99,107,0,0,0,0,0,0,0,112,97,114,115,101,114,101,114,114,111,114,0,0,0,0,0,84,104,105,115,32,100,111,99,117,109,101,110,116,32,119,97,115,32,99,114,101,97,116,101,100,32,97,115,32,116,104,101,32,114,101,115,117,108,116,32,111,102,32,97,110,32,88,83,76,32,116,114,97,110,115,102,111,114,109,97,116,105,111,110,46,32,84,104,101,32,108,105,110,101,32,97,110,100,32,99,111,108,117,109,110,32,110,117,109,98,101,114,115,32,103,105,118,101,110,32,97,114,101,32,102,114,111,109,32,116,104,101,32,116,114,97,110,115,102,111,114,109,101,100,32,114,101,115,117,108,116,46,0,0,0,0,119,104,105,116,101,45,115,112,97,99,101,58,32,110,111,114,109,97,108,0,0,0,0,0,58,32,0,0,0,0,0,0,32,97,116,32,99,111,108,117,109,110,32,0,0,0,0,0,32,111,110,32,108,105,110,101,32,0,0,0,0,0,0,0,66,101,108,111,119,32,105,115,32,97,32,114,101,110,100,101,114,105,110,103,32,111,102,32,116,104,101,32,112,97,103,101,32,117,112,32,116,111,32,116,104,101,32,102,105,114,115,116,32,101,114,114,111,114,46,0,102,111,110,116,45,102,97,109,105,108,121,58,109,111,110,111,115,112,97,99,101,59,102,111,110,116,45,115,105,122,101,58,49,50,112,120,0,0,0,0,101,114,114,111,114,0,0,0,119,97,114,110,105,110,103,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames4pTagE=env.__ZN7WebCore9HTMLNames4pTagE|0;
  var __ZN7WebCore9HTMLNames9styleAttrE=env.__ZN7WebCore9HTMLNames9styleAttrE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE=env.__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE|0;
  var __ZN7WebCore8SVGNames15svgNamespaceURIE=env.__ZN7WebCore8SVGNames15svgNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames5h3TagE=env.__ZN7WebCore9HTMLNames5h3TagE|0;
  var __ZN7WebCore9HTMLNames6divTagE=env.__ZN7WebCore9HTMLNames6divTagE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
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
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore9XMLErrors23insertErrorMessageBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 376 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 72 | 0;
 i12 = i2 + 80 | 0;
 i13 = i2 + 88 | 0;
 i14 = i2 + 96 | 0;
 i15 = i2 + 104 | 0;
 i16 = i2 + 112 | 0;
 i17 = i2 + 120 | 0;
 i18 = i2 + 128 | 0;
 i19 = i2 + 144 | 0;
 i20 = i2 + 152 | 0;
 i21 = i2 + 160 | 0;
 i22 = i2 + 168 | 0;
 i23 = i2 + 176 | 0;
 i24 = i2 + 184 | 0;
 i25 = i2 + 192 | 0;
 i26 = i2 + 200 | 0;
 i27 = i2 + 208 | 0;
 i28 = i2 + 216 | 0;
 i29 = i2 + 224 | 0;
 i30 = i2 + 232 | 0;
 i31 = i2 + 240 | 0;
 i32 = i2 + 248 | 0;
 i33 = i2 + 256 | 0;
 i34 = i2 + 264 | 0;
 i35 = i2 + 272 | 0;
 i36 = i2 + 280 | 0;
 i37 = i2 + 288 | 0;
 i38 = i2 + 296 | 0;
 i39 = i2 + 312 | 0;
 i40 = i2 + 320 | 0;
 i41 = i2 + 328 | 0;
 i42 = i2 + 336 | 0;
 i43 = i2 + 344 | 0;
 i44 = i2 + 352 | 0;
 i45 = i2 + 360 | 0;
 i46 = i2 + 368 | 0;
 i47 = i1 | 0;
 i48 = HEAP32[i47 >> 2] | 0;
 i49 = HEAP32[i48 + 692 >> 2] | 0;
 do {
  if ((i49 | 0) == 0) {
   __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i28, i48, __ZN7WebCore9HTMLNames7htmlTagE, 1);
   i50 = i28 | 0;
   i51 = HEAP32[i50 >> 2] | 0;
   HEAP32[i50 >> 2] = 0;
   __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i29, HEAP32[i47 >> 2] | 0, __ZN7WebCore9HTMLNames7bodyTagE, 1);
   i50 = i29 | 0;
   i52 = HEAP32[i50 >> 2] | 0;
   HEAP32[i50 >> 2] = 0;
   i50 = i30 | 0;
   HEAP32[i50 >> 2] = i52;
   i53 = (i52 | 0) == 0;
   if (!i53) {
    i54 = i52 + 8 | 0;
    HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
   }
   __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i51 | 0, i30);
   i54 = HEAP32[i50 >> 2] | 0;
   do {
    if ((i54 | 0) != 0) {
     i50 = i54 + 8 | 0;
     i55 = i50 | 0;
     i56 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     HEAP32[i55 >> 2] = i56;
     if ((i56 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
    }
   } while (0);
   i54 = HEAP32[i47 >> 2] | 0;
   i50 = i31 | 0;
   HEAP32[i50 >> 2] = i51;
   i56 = (i51 | 0) == 0;
   if (!i56) {
    i55 = i51 + 8 | 0;
    HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
   }
   __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i54, i31);
   i54 = HEAP32[i50 >> 2] | 0;
   do {
    if ((i54 | 0) != 0) {
     i50 = i54 + 8 | 0;
     i55 = i50 | 0;
     i57 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     HEAP32[i55 >> 2] = i57;
     if ((i57 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
    }
   } while (0);
   do {
    if (!i53) {
     i54 = i52 + 8 | 0;
     HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
     i54 = i52 + 8 | 0;
     i50 = i54 | 0;
     i57 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     HEAP32[i50 >> 2] = i57;
     if ((i57 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
    }
   } while (0);
   if (i56) {
    i58 = i52;
    break;
   }
   i53 = i51 + 8 | 0;
   i54 = i53 | 0;
   i57 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
   HEAP32[i54 >> 2] = i57;
   if ((i57 | 0) >= 1) {
    i58 = i52;
    break;
   }
   if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
    i58 = i52;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
   i58 = i52;
  } else {
   i53 = i49 + 8 | 0;
   HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
   if ((HEAP32[(HEAP32[i49 + 44 >> 2] | 0) + 16 >> 2] | 0) != (HEAP32[__ZN7WebCore8SVGNames15svgNamespaceURIE >> 2] | 0)) {
    i58 = i49;
    break;
   }
   __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i32, HEAP32[i47 >> 2] | 0, __ZN7WebCore9HTMLNames7htmlTagE, 1);
   i57 = i32 | 0;
   i54 = HEAP32[i57 >> 2] | 0;
   HEAP32[i57 >> 2] = 0;
   __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i33, HEAP32[i47 >> 2] | 0, __ZN7WebCore9HTMLNames7bodyTagE, 1);
   i57 = i33 | 0;
   i50 = HEAP32[i57 >> 2] | 0;
   HEAP32[i57 >> 2] = 0;
   i57 = i34 | 0;
   HEAP32[i57 >> 2] = i50;
   i55 = (i50 | 0) == 0;
   if (!i55) {
    i59 = i50 + 8 | 0;
    HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
   }
   __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i54 | 0, i34);
   i59 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i59 | 0) != 0) {
     i57 = i59 + 8 | 0;
     i60 = i57 | 0;
     i61 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
     HEAP32[i60 >> 2] = i61;
     if ((i61 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
    }
   } while (0);
   i59 = i49 | 0;
   __ZN7WebCore13ContainerNode17parserRemoveChildERNS_4NodeE(HEAP32[i49 + 16 >> 2] | 0, i59);
   i52 = i35 | 0;
   HEAP32[i52 >> 2] = i59;
   HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
   __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i50 | 0, i35);
   i59 = HEAP32[i52 >> 2] | 0;
   do {
    if ((i59 | 0) != 0) {
     i52 = i59 + 8 | 0;
     i51 = i52 | 0;
     i56 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     HEAP32[i51 >> 2] = i56;
     if ((i56 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    }
   } while (0);
   i59 = HEAP32[i47 >> 2] | 0;
   i53 = i36 | 0;
   HEAP32[i53 >> 2] = i54;
   i52 = (i54 | 0) == 0;
   if (!i52) {
    i56 = i54 + 8 | 0;
    HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
   }
   __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i59, i36);
   i59 = HEAP32[i53 >> 2] | 0;
   do {
    if ((i59 | 0) != 0) {
     i53 = i59 + 8 | 0;
     i56 = i53 | 0;
     i51 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
     HEAP32[i56 >> 2] = i51;
     if ((i51 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
    }
   } while (0);
   if (!i55) {
    i59 = i50 + 8 | 0;
    HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
   }
   i59 = i49 + 8 | 0;
   i53 = i59 - 8 | 0;
   i51 = i59 | 0;
   i56 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
   HEAP32[i51 >> 2] = i56;
   do {
    if ((i56 | 0) < 1) {
     if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i53);
    }
   } while (0);
   do {
    if (!i55) {
     i53 = i50 + 8 | 0;
     i59 = i53 | 0;
     i56 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
     HEAP32[i59 >> 2] = i56;
     if ((i56 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
    }
   } while (0);
   if (i52) {
    i58 = i50;
    break;
   }
   i55 = i54 + 8 | 0;
   i53 = i55 | 0;
   i56 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
   HEAP32[i53 >> 2] = i56;
   if ((i56 | 0) >= 1) {
    i58 = i50;
    break;
   }
   if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
    i58 = i50;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
   i58 = i50;
  }
 } while (0);
 i49 = i1 + 16 | 0;
 __ZN3WTF13StringBuilder11shrinkToFitEv(i49);
 i36 = i1 + 20 | 0;
 i1 = HEAP32[i36 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i49);
  i49 = HEAP32[i36 >> 2] | 0;
  HEAP32[i37 >> 2] = i49;
  if ((i49 | 0) != 0) {
   i62 = i49;
   i63 = 55;
  }
 } else {
  HEAP32[i37 >> 2] = i1;
  i62 = i1;
  i63 = 55;
 }
 if ((i63 | 0) == 55) {
  i63 = i62 | 0;
  HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 2;
 }
 i63 = HEAP32[i47 >> 2] | 0;
 __ZN3WTF12AtomicString3addEPKh(i6, H_BASE + 192 | 0);
 i62 = i9 | 0;
 HEAP32[i62 >> 2] = HEAP32[i6 >> 2];
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i8, __ZN3WTF8nullAtomE, i9, __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE);
 __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i7, i63, i8, 1);
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore13QualifiedNameD1Ev(i8);
 i8 = HEAP32[i62 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i62 = i8 | 0;
   i9 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i62 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i8 = i10 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i10 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i62 = i10 + 8 | 0;
 HEAP32[i62 >> 2] = 0;
 __ZN3WTF12AtomicString3addEPKh(i5, H_BASE + 56 | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 i5 = i11 | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0;
 HEAP32[i5 >> 2] = i1;
 i49 = i1 | 0;
 HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
 i49 = i11 + 4 | 0;
 HEAP32[i49 >> 2] = i6;
 i1 = (i6 | 0) == 0;
 if (!i1) {
  i36 = i6 | 0;
  HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
 }
 i36 = HEAP32[i62 >> 2] | 0;
 if ((i36 | 0) == (HEAP32[i9 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i10, i11);
 } else {
  i35 = HEAP32[i8 >> 2] | 0;
  i34 = HEAP32[i5 >> 2] | 0;
  HEAP32[i35 + (i36 << 3) >> 2] = i34;
  i5 = i34 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  i5 = HEAP32[i49 >> 2] | 0;
  HEAP32[i35 + (i36 << 3) + 4 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i36 = i5 | 0;
   HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
  }
  HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 1;
 }
 i36 = HEAP32[i49 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i49 = i36 | 0;
   i5 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i49 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i11 | 0);
 do {
  if (!i1) {
   i11 = i6 | 0;
   i36 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i36 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i36;
    break;
   }
  }
 } while (0);
 __ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i7, i10);
 __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i12, i63, __ZN7WebCore9HTMLNames5h3TagE, 1);
 i10 = i12 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i7 | 0;
 i6 = i13 | 0;
 HEAP32[i6 >> 2] = i12;
 i1 = (i12 | 0) == 0;
 if (!i1) {
  i36 = i12 + 8 | 0;
  HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i10, i13);
 i13 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i6 = i13 + 8 | 0;
   i36 = i6 | 0;
   i11 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   HEAP32[i36 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i16, H_BASE + 8 | 0);
 __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i15, i63, i16);
 i13 = i14 | 0;
 i6 = i15 | 0;
 i15 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i13 >> 2] = i15;
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i12 | 0, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 8 | 0;
   i15 = i13 | 0;
   i11 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i14 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i6 = i14 + 8 | 0;
   i13 = i6 | 0;
   i11 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i14 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i16 = i14 | 0;
   i6 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i16 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i17, i63, __ZN7WebCore9HTMLNames6divTagE, 1);
 i14 = i17 | 0;
 i17 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i14 = i18 | 0;
 HEAP32[i14 >> 2] = 0;
 i6 = i18 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i16 = i18 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 __ZN3WTF12AtomicString3addEPKh(i4, H_BASE + 464 | 0);
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i19 | 0;
 i13 = HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0;
 HEAP32[i4 >> 2] = i13;
 i15 = i13 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i15 = i19 + 4 | 0;
 HEAP32[i15 >> 2] = i11;
 i13 = (i11 | 0) == 0;
 if (!i13) {
  i36 = i11 | 0;
  HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
 }
 i36 = HEAP32[i16 >> 2] | 0;
 if ((i36 | 0) == (HEAP32[i6 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i18, i19);
 } else {
  i5 = HEAP32[i14 >> 2] | 0;
  i49 = HEAP32[i4 >> 2] | 0;
  HEAP32[i5 + (i36 << 3) >> 2] = i49;
  i4 = i49 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  i4 = HEAP32[i15 >> 2] | 0;
  HEAP32[i5 + (i36 << 3) + 4 >> 2] = i4;
  if ((i4 | 0) != 0) {
   i36 = i4 | 0;
   HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
  }
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 i36 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i15 = i36 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i19 | 0);
 do {
  if (!i13) {
   i19 = i11 | 0;
   i36 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i36 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i19 >> 2] = i36;
    break;
   }
  }
 } while (0);
 __ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i17, i18);
 i18 = i20 | 0;
 HEAP32[i18 >> 2] = i17;
 i11 = (i17 | 0) == 0;
 if (!i11) {
  i13 = i17 + 8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i10, i20);
 i20 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i18 = i20 + 8 | 0;
   i13 = i18 | 0;
   i36 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i36;
   if ((i36 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i22, i63, i37);
 i20 = i21 | 0;
 i18 = i22 | 0;
 i22 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i20 >> 2] = i22;
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i17 | 0, i21);
 i21 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i20 = i21 + 8 | 0;
   i22 = i20 | 0;
   i36 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i36;
   if ((i36 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
  }
 } while (0);
 i21 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i18 = i21 + 8 | 0;
   i20 = i18 | 0;
   i36 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i36;
   if ((i36 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i23, i63, __ZN7WebCore9HTMLNames5h3TagE, 1);
 i21 = i23 | 0;
 i23 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 do {
  if (!i1) {
   i18 = i12 + 8 | 0;
   i36 = i18 - 8 | 0;
   i20 = i18 | 0;
   i22 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i22;
   do {
    if ((i22 | 0) < 1) {
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i36);
    }
   } while (0);
   i36 = HEAP32[i21 >> 2] | 0;
   if ((i36 | 0) == 0) {
    break;
   }
   i18 = i36 + 8 | 0;
   i36 = i18 | 0;
   i22 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   HEAP32[i36 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 i21 = i24 | 0;
 HEAP32[i21 >> 2] = i23;
 i12 = (i23 | 0) == 0;
 if (!i12) {
  i1 = i23 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i10, i24);
 i24 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i21 = i24 + 8 | 0;
   i1 = i21 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i27, H_BASE + 408 | 0);
 __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i26, i63, i27);
 i63 = i25 | 0;
 i24 = i26 | 0;
 i26 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i63 >> 2] = i26;
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i23 | 0, i25);
 i25 = HEAP32[i63 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i63 = i25 + 8 | 0;
   i26 = i63 | 0;
   i21 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   HEAP32[i26 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i63 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i63 - 8 | 0);
  }
 } while (0);
 i25 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i24 = i25 + 8 | 0;
   i63 = i24 | 0;
   i21 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
   HEAP32[i63 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 i25 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i27 = i25 | 0;
   i24 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i25);
    break;
   } else {
    HEAP32[i27 >> 2] = i24;
    break;
   }
  }
 } while (0);
 i25 = HEAP32[i16 >> 2] | 0;
 if ((i25 | 0) != 0) {
  i24 = HEAP32[i14 >> 2] | 0;
  i27 = i24 + (i25 << 3) | 0;
  i25 = i24;
  while (1) {
   i24 = HEAP32[i25 + 4 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i21 = i24 | 0;
     i63 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i63 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i21 >> 2] = i63;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i25 | 0);
   i25 = i25 + 8 | 0;
   if ((i25 | 0) == (i27 | 0)) {
    break;
   }
  }
  HEAP32[i16 >> 2] = 0;
 }
 i16 = HEAP32[i14 >> 2] | 0;
 if ((i16 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i6 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i16);
 }
 do {
  if (!i11) {
   i16 = i17 + 8 | 0;
   i6 = i16 | 0;
   i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 do {
  if (!i12) {
   i17 = i23 + 8 | 0;
   i11 = i17 | 0;
   i16 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 i23 = HEAP32[i62 >> 2] | 0;
 if ((i23 | 0) != 0) {
  i12 = HEAP32[i8 >> 2] | 0;
  i17 = i12 + (i23 << 3) | 0;
  i23 = i12;
  while (1) {
   i12 = HEAP32[i23 + 4 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i16 = i12 | 0;
     i11 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i16 >> 2] = i11;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i23 | 0);
   i23 = i23 + 8 | 0;
   if ((i23 | 0) == (i17 | 0)) {
    break;
   }
  }
  HEAP32[i62 >> 2] = 0;
 }
 i62 = HEAP32[i8 >> 2] | 0;
 if ((i62 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i9 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i62);
 }
 i62 = HEAP32[(HEAP32[i47 >> 2] | 0) + 1288 >> 2] | 0;
 do {
  if ((i62 | 0) != 0) {
   i9 = HEAP32[i62 + 8 >> 2] | 0;
   i8 = i62 + 8 | 0;
   i17 = i8 - 8 | 0;
   HEAP32[i8 >> 2] = i9;
   do {
    if ((i9 | 0) < 1) {
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17);
    }
   } while (0);
   i17 = i38 | 0;
   HEAP32[i17 >> 2] = 0;
   i8 = i38 + 4 | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = i38 + 8 | 0;
   HEAP32[i9 >> 2] = 0;
   __ZN3WTF12AtomicString3addEPKh(i3, H_BASE + 344 | 0);
   i23 = HEAP32[i3 >> 2] | 0;
   i12 = i39 | 0;
   i11 = HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0;
   HEAP32[i12 >> 2] = i11;
   i16 = i11 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   i16 = i39 + 4 | 0;
   HEAP32[i16 >> 2] = i23;
   i11 = (i23 | 0) == 0;
   if (!i11) {
    i14 = i23 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = HEAP32[i9 >> 2] | 0;
   if ((i14 | 0) == (HEAP32[i8 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i38, i39);
   } else {
    i6 = HEAP32[i17 >> 2] | 0;
    i27 = HEAP32[i12 >> 2] | 0;
    HEAP32[i6 + (i14 << 3) >> 2] = i27;
    i12 = i27 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    i12 = HEAP32[i16 >> 2] | 0;
    HEAP32[i6 + (i14 << 3) + 4 >> 2] = i12;
    if ((i12 | 0) != 0) {
     i14 = i12 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    }
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   i14 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i16 = i14 | 0;
     i12 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i16 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i39 | 0);
   do {
    if (!i11) {
     i14 = i23 | 0;
     i12 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i14 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i40, HEAP32[i47 >> 2] | 0, __ZN7WebCore9HTMLNames4pTagE, 1);
   i23 = i40 | 0;
   i11 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   __ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i11, i38);
   i23 = HEAP32[i47 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i43, H_BASE + 208 | 0);
   __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i42, i23, i43);
   i23 = i41 | 0;
   i12 = i42 | 0;
   i14 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i23 >> 2] = i14;
   __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i11 | 0, i41);
   i14 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i23 = i14 + 8 | 0;
     i16 = i23 | 0;
     i6 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   i14 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i23 = i14 + 8 | 0;
     i6 = i23 | 0;
     i16 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     HEAP32[i6 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   i14 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i12 = i14 | 0;
     i23 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i12 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i14 = i44 | 0;
   HEAP32[i14 >> 2] = i11;
   __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i10, i44);
   i23 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i14 = i23 + 8 | 0;
     i12 = i14 | 0;
     i16 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i23 = HEAP32[i9 >> 2] | 0;
   if ((i23 | 0) != 0) {
    i11 = HEAP32[i17 >> 2] | 0;
    i14 = i11 + (i23 << 3) | 0;
    i23 = i11;
    while (1) {
     i11 = HEAP32[i23 + 4 >> 2] | 0;
     do {
      if ((i11 | 0) != 0) {
       i16 = i11 | 0;
       i12 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i11);
        break;
       } else {
        HEAP32[i16 >> 2] = i12;
        break;
       }
      }
     } while (0);
     __ZN7WebCore13QualifiedNameD1Ev(i23 | 0);
     i23 = i23 + 8 | 0;
     if ((i23 | 0) == (i14 | 0)) {
      break;
     }
    }
    HEAP32[i9 >> 2] = 0;
   }
   i14 = HEAP32[i17 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   HEAP32[i17 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i14);
  }
 } while (0);
 i44 = i58 | 0;
 i10 = i58 + 36 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   i43 = i46 | 0;
   HEAP32[i43 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i41 = i7 + 8 | 0;
    HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
   }
   __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i44, i46);
   i41 = HEAP32[i43 >> 2] | 0;
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
  } else {
   i43 = i45 | 0;
   HEAP32[i43 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i42 = i7 + 8 | 0;
    HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
   }
   __ZN7WebCore13ContainerNode18parserInsertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_(i44, i45, HEAP32[i10 >> 2] | 0);
   i42 = HEAP32[i43 >> 2] | 0;
   if ((i42 | 0) == 0) {
    break;
   }
   i43 = i42 + 8 | 0;
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
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[i47 >> 2] | 0);
 do {
  if ((i7 | 0) != 0) {
   i47 = i7 + 8 | 0;
   i10 = i47 | 0;
   i45 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i45;
   if ((i45 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i37 = i7 | 0;
   i47 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
   if ((i47 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i37 >> 2] = i47;
    break;
   }
  }
 } while (0);
 if ((i58 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i58 + 8 | 0;
 i58 = i7 | 0;
 i47 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
 HEAP32[i58 >> 2] = i47;
 if ((i47 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9XMLErrors11handleErrorENS0_9ErrorTypeEPKcN3WTF12TextPositionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 do {
  if ((i2 | 0) == 2) {
   i12 = 11;
  } else {
   if ((HEAP32[i1 + 4 >> 2] | 0) >= 25) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
    STACKTOP = i5;
    return;
   }
   if ((HEAP32[i1 + 12 >> 2] | 0) == (HEAP32[i4 + 4 >> 2] | 0)) {
    STACKTOP = i5;
    return;
   }
   if ((i2 | 0) == 2 | (i2 | 0) == 1) {
    i12 = 11;
    break;
   } else if ((i2 | 0) != 0) {
    i13 = i4;
    i14 = HEAP32[i13 + 4 >> 2] | 0;
    i15 = HEAP32[i13 >> 2] | 0;
    break;
   }
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 512 | 0);
   i13 = i4;
   i16 = HEAP32[i13 >> 2] | 0;
   i17 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = i16;
   HEAP32[i7 + 4 >> 2] = i17;
   __ZN7WebCore9XMLErrors18appendErrorMessageERKN3WTF6StringENS1_12TextPositionEPKc(i1, i6, i8, i3);
   i13 = HEAP32[i6 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i14 = i17;
    i15 = i16;
    break;
   }
   i18 = i13 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    i14 = i17;
    i15 = i16;
    break;
   } else {
    HEAP32[i18 >> 2] = i19;
    i14 = i17;
    i15 = i16;
    break;
   }
  }
 } while (0);
 do {
  if ((i12 | 0) == 11) {
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 504 | 0);
   i6 = i4;
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = i8;
   HEAP32[i10 + 4 >> 2] = i7;
   __ZN7WebCore9XMLErrors18appendErrorMessageERKN3WTF6StringENS1_12TextPositionEPKc(i1, i9, i11, i3);
   i6 = HEAP32[i9 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i14 = i7;
    i15 = i8;
    break;
   }
   i2 = i6 | 0;
   i16 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i14 = i7;
    i15 = i8;
    break;
   } else {
    HEAP32[i2 >> 2] = i16;
    i14 = i7;
    i15 = i8;
    break;
   }
  }
 } while (0);
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = i15;
 HEAP32[i9 + 4 >> 2] = i14;
 i14 = i1 + 4 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 3) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 3 << 3) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (i6 << 3) >> 2] = i2;
 i5 = i2 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i12 + (i6 << 3) + 4 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 }
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 i13 = HEAP32[i3 >> 2] | 0;
 i14 = i13 + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 return;
}
function __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 3) | 0;
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
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
   i8 = i6 + 4 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i7 + 4 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i9 = i2 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i2;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i6 | 0);
   i9 = i6 + 8 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 8 | 0;
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
function __ZN7WebCore9XMLErrors18appendErrorMessageERKN3WTF6StringENS1_12TextPositionEPKc(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i6 = i1 + 16 | 0;
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i2);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, H_BASE + 392 | 0, 9);
 __ZN3WTF13StringBuilder12appendNumberEi(i6, (HEAP32[i3 >> 2] | 0) + 1 | 0);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, H_BASE + 376 | 0, 11);
 __ZN3WTF13StringBuilder12appendNumberEi(i6, (HEAP32[i3 + 4 >> 2] | 0) + 1 | 0);
 __ZN3WTF13StringBuilder6appendEPKhj(i6, H_BASE + 368 | 0, 2);
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF13StringBuilder6appendEPKhj(i6, i4, _strlen(i4 | 0) | 0);
 STACKTOP = i5;
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
function __ZN7WebCore9XMLErrors11handleErrorENS0_9ErrorTypeEPKcii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i4 - 1;
 HEAP32[i7 + 4 >> 2] = i5 - 1;
 __ZN7WebCore9XMLErrors11handleErrorENS0_9ErrorTypeEPKcN3WTF12TextPositionE(i1, i2, i3, i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore9XMLErrorsC2EPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = -1;
 HEAP32[i1 + 12 >> 2] = -1;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP8[i1 + 28 | 0] = 1;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = 0;
 return;
}
function __ZN7WebCore9XMLErrorsC1EPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = -1;
 HEAP32[i1 + 12 >> 2] = -1;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP8[i1 + 28 | 0] = 1;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore9XMLErrorsC2EPNS_8DocumentE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames4pTagE": __ZN7WebCore9HTMLNames4pTagE, "__ZN7WebCore9HTMLNames9styleAttrE": __ZN7WebCore9HTMLNames9styleAttrE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE": __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE, "__ZN7WebCore8SVGNames15svgNamespaceURIE": __ZN7WebCore8SVGNames15svgNamespaceURIE, "__ZN7WebCore9HTMLNames5h3TagE": __ZN7WebCore9HTMLNames5h3TagE, "__ZN7WebCore9HTMLNames6divTagE": __ZN7WebCore9HTMLNames6divTagE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore9XMLErrors18appendErrorMessageERKN3WTF6StringENS1_12TextPositionEPKc","__ZN7WebCore9XMLErrors11handleErrorENS0_9ErrorTypeEPKcN3WTF12TextPositionE","_memset","__ZN3WTF13StringBuilder6appendERKNS_6StringE","_strlen","__ZN7WebCore9XMLErrors23insertErrorMessageBlockEv","__ZN7WebCore9XMLErrorsC2EPNS_8DocumentE","_memcpy","__ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore9XMLErrors11handleErrorENS0_9ErrorTypeEPKcii","__ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_"]

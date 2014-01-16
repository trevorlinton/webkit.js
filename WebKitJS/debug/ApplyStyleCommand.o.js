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
H_BASE = parentModule["_malloc"](120 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 120;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleENS_10EditActionENS0_14EPropertyLevelE;
var __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleERKNS_8PositionES8_NS_10EditActionENS0_14EPropertyLevelE;
var __ZN7WebCore17ApplyStyleCommandC1EN3WTF10PassRefPtrINS_7ElementEEEbNS_10EditActionE;
var __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleEPFbPKNS_7ElementEENS_10EditActionE;
/* memory initializer */ allocate([65,112,112,108,101,45,115,116,121,108,101,45,115,112,97,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZN7WebCore9HTMLNames9classAttrE=env.__ZN7WebCore9HTMLNames9classAttrE|0;
  var __ZN7WebCore9HTMLNames6supTagE=env.__ZN7WebCore9HTMLNames6supTagE|0;
  var __ZN7WebCore9HTMLNames9styleAttrE=env.__ZN7WebCore9HTMLNames9styleAttrE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore9HTMLNames6subTagE=env.__ZN7WebCore9HTMLNames6subTagE|0;
  var __ZN7WebCore9HTMLNames9colorAttrE=env.__ZN7WebCore9HTMLNames9colorAttrE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore12EditingStyle11NoFontDeltaE=env.__ZN7WebCore12EditingStyle11NoFontDeltaE|0;
  var __ZN7WebCore9HTMLNames7spanTagE=env.__ZN7WebCore9HTMLNames7spanTagE|0;
  var __ZN7WebCore9HTMLNames4iTagE=env.__ZN7WebCore9HTMLNames4iTagE|0;
  var __ZN7WebCore9HTMLNames7dirAttrE=env.__ZN7WebCore9HTMLNames7dirAttrE|0;
  var __ZN7WebCore9HTMLNames9strikeTagE=env.__ZN7WebCore9HTMLNames9strikeTagE|0;
  var __ZN7WebCore9HTMLNames4uTagE=env.__ZN7WebCore9HTMLNames4uTagE|0;
  var __ZN7WebCore9HTMLNames8sizeAttrE=env.__ZN7WebCore9HTMLNames8sizeAttrE|0;
  var __ZN7WebCore9HTMLNames8faceAttrE=env.__ZN7WebCore9HTMLNames8faceAttrE|0;
  var __ZN7WebCore9HTMLNames7fontTagE=env.__ZN7WebCore9HTMLNames7fontTagE|0;
  var __ZN7WebCore9HTMLNames8spanAttrE=env.__ZN7WebCore9HTMLNames8spanAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore17ApplyStyleCommandE=(H_BASE+32)|0;
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
  var invoke_viiiiiii=env.invoke_viiiiiii;
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
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17ApplyStyleCommand22applyInlineStyleChangeEN3WTF10PassRefPtrINS_4NodeEEES4_RNS_11StyleChangeENS0_17EAddStyledElementE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 512 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 80 | 0;
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 i20 = i6 + 104 | 0;
 i21 = i6 + 112 | 0;
 i22 = i6 + 120 | 0;
 i23 = i6 + 128 | 0;
 i24 = i6 + 136 | 0;
 i25 = i6 + 144 | 0;
 i26 = i6 + 152 | 0;
 i27 = i6 + 160 | 0;
 i28 = i6 + 168 | 0;
 i29 = i6 + 176 | 0;
 i30 = i6 + 184 | 0;
 i31 = i6 + 192 | 0;
 i32 = i6 + 216 | 0;
 i33 = i6 + 224 | 0;
 i34 = i6 + 232 | 0;
 i35 = i6 + 240 | 0;
 i36 = i6 + 248 | 0;
 i37 = i6 + 256 | 0;
 i38 = i6 + 264 | 0;
 i39 = i6 + 272 | 0;
 i40 = i6 + 280 | 0;
 i41 = i6 + 288 | 0;
 i42 = i6 + 296 | 0;
 i43 = i6 + 304 | 0;
 i44 = i6 + 312 | 0;
 i45 = i6 + 320 | 0;
 i46 = i6 + 328 | 0;
 i47 = i6 + 336 | 0;
 i48 = i6 + 344 | 0;
 i49 = i6 + 352 | 0;
 i50 = i6 + 360 | 0;
 i51 = i6 + 368 | 0;
 i52 = i6 + 376 | 0;
 i53 = i6 + 384 | 0;
 i54 = i6 + 392 | 0;
 i55 = i6 + 400 | 0;
 i56 = i6 + 408 | 0;
 i57 = i6 + 416 | 0;
 i58 = i6 + 424 | 0;
 i59 = i6 + 432 | 0;
 i60 = i6 + 440 | 0;
 i61 = i6 + 448 | 0;
 i62 = i6 + 456 | 0;
 i63 = i6 + 464 | 0;
 i64 = i6 + 472 | 0;
 i65 = i6 + 480 | 0;
 i66 = i6 + 488 | 0;
 i67 = i6 + 496 | 0;
 i68 = i6 + 504 | 0;
 i69 = i2 | 0;
 i2 = HEAP32[i69 >> 2] | 0;
 HEAP32[i69 >> 2] = 0;
 i69 = i3 | 0;
 i3 = HEAP32[i69 >> 2] | 0;
 HEAP32[i69 >> 2] = 0;
 L1 : do {
  if ((i2 | 0) != 0 & (i2 | 0) == (i3 | 0)) {
   i69 = i2;
   i70 = i2;
   i71 = 0;
   i72 = 0;
   while (1) {
    i73 = i70 + 12 | 0;
    i74 = HEAP32[i73 >> 2] | 0;
    do {
     if ((i74 & 20 | 0) == 20) {
      i75 = HEAP32[i70 + 44 >> 2] | 0;
      i76 = HEAP32[__ZN7WebCore9HTMLNames7fontTagE >> 2] | 0;
      if ((i75 | 0) != (i76 | 0)) {
       if ((HEAP32[i75 + 12 >> 2] | 0) != (HEAP32[i76 + 12 >> 2] | 0)) {
        i77 = i72;
        break;
       }
       if ((HEAP32[i75 + 16 >> 2] | 0) != (HEAP32[i76 + 16 >> 2] | 0)) {
        i77 = i72;
        break;
       }
      }
      i77 = i70;
     } else {
      i77 = i72;
     }
    } while (0);
    do {
     if ((i71 | 0) == 0) {
      i78 = 1;
     } else {
      i76 = HEAP32[i71 + 44 >> 2] | 0;
      i75 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
      if ((i76 | 0) == (i75 | 0)) {
       i78 = 0;
       break;
      }
      if ((HEAP32[i76 + 12 >> 2] | 0) != (HEAP32[i75 + 12 >> 2] | 0)) {
       i78 = 1;
       break;
      }
      i78 = (HEAP32[i76 + 16 >> 2] | 0) != (HEAP32[i75 + 16 >> 2] | 0);
     }
    } while (0);
    do {
     if ((i74 & 16 | 0) == 0) {
      i79 = i71;
     } else {
      do {
       if ((i74 & 4 | 0) == 0) {
        i80 = 16;
       } else {
        i75 = HEAP32[i70 + 44 >> 2] | 0;
        i76 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
        if ((i75 | 0) == (i76 | 0)) {
         break;
        }
        if ((HEAP32[i75 + 12 >> 2] | 0) != (HEAP32[i76 + 12 >> 2] | 0)) {
         i80 = 16;
         break;
        }
        if ((HEAP32[i75 + 16 >> 2] | 0) != (HEAP32[i76 + 16 >> 2] | 0)) {
         i80 = 16;
        }
       }
      } while (0);
      if ((i80 | 0) == 16) {
       i80 = 0;
       if (!i78) {
        i79 = i71;
        break;
       }
       if ((i74 & 2 | 0) == 0) {
        i79 = i71;
        break;
       }
       if ((__ZNK7WebCore13ContainerNode14childNodeCountEv(i70) | 0) == 0) {
        i79 = i71;
        break;
       }
      }
      i79 = i70;
     }
    } while (0);
    if ((HEAP32[i73 >> 2] & 2 | 0) == 0) {
     i81 = i77;
     i82 = i79;
     i83 = i69;
     i84 = i69;
     break L1;
    }
    i74 = i70 + 36 | 0;
    i76 = HEAP32[i74 >> 2] | 0;
    if ((i76 | 0) == 0) {
     i81 = i77;
     i82 = i79;
     i83 = i69;
     i84 = i69;
     break L1;
    }
    i75 = i76 + 8 | 0;
    HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 1;
    do {
     if ((i69 | 0) != 0) {
      i75 = i69 + 8 | 0;
      i85 = i75 | 0;
      i86 = (HEAP32[i85 >> 2] | 0) - 1 | 0;
      HEAP32[i85 >> 2] = i86;
      if ((i86 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i75 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i75 - 8 | 0);
     }
    } while (0);
    do {
     if ((HEAP32[i73 >> 2] & 2 | 0) == 0) {
      i87 = 0;
     } else {
      i75 = HEAP32[i70 + 40 >> 2] | 0;
      if ((i75 | 0) == 0) {
       i87 = 0;
       break;
      }
      i86 = i75 + 8 | 0;
      HEAP32[i86 >> 2] = (HEAP32[i86 >> 2] | 0) + 1;
      i87 = i75;
     }
    } while (0);
    do {
     if ((i69 | 0) != 0) {
      i75 = i69 + 8 | 0;
      i86 = i75 | 0;
      i85 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
      HEAP32[i86 >> 2] = i85;
      if ((i85 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i75 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i75 - 8 | 0);
     }
    } while (0);
    if ((HEAP32[i73 >> 2] & 2 | 0) == 0) {
     i81 = i77;
     i82 = i79;
     i83 = i76;
     i84 = i87;
     break L1;
    }
    i75 = HEAP32[i74 >> 2] | 0;
    if ((i75 | 0) != 0 & (i76 | 0) == (i87 | 0)) {
     i69 = i76;
     i70 = i75;
     i71 = i79;
     i72 = i77;
    } else {
     i81 = i77;
     i82 = i79;
     i83 = i76;
     i84 = i87;
     break;
    }
   }
  } else {
   i81 = 0;
   i82 = 0;
   i83 = i2;
   i84 = i3;
  }
 } while (0);
 i3 = i4 + 12 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i87 = (i2 | 0) == 0;
 if (i87) {
  i80 = 37;
 } else {
  if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
   i80 = 37;
  } else {
   i80 = 41;
  }
 }
 do {
  if ((i80 | 0) == 37) {
   i79 = HEAP32[i4 + 16 >> 2] | 0;
   if ((i79 | 0) != 0) {
    if ((HEAP32[i79 + 4 >> 2] | 0) != 0) {
     i80 = 41;
     break;
    }
   }
   i79 = HEAP32[i4 + 20 >> 2] | 0;
   if ((i79 | 0) == 0) {
    break;
   }
   if ((HEAP32[i79 + 4 >> 2] | 0) != 0) {
    i80 = 41;
   }
  }
 } while (0);
 do {
  if ((i80 | 0) == 41) {
   if ((i81 | 0) != 0) {
    do {
     if (!i87) {
      if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
       break;
      }
      i79 = i1 | 0;
      i77 = i18 | 0;
      HEAP32[i77 >> 2] = i81;
      i78 = i81 + 8 | 0;
      HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
      i78 = HEAP32[i3 >> 2] | 0;
      i72 = (i78 | 0) == 0;
      do {
       if (i72) {
        i71 = i17 | 0;
        HEAP32[i71 >> 2] = 0;
        i88 = i71;
        i89 = i17;
       } else {
        i71 = i78 | 0;
        HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 2;
        i70 = i17;
        if ((HEAP32[i78 + 16 >> 2] & 16 | 0) == 0) {
         __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i17, i78);
         i88 = i17 | 0;
         i89 = i70;
         break;
        } else {
         i69 = i17 | 0;
         HEAP32[i69 >> 2] = i78;
         HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 2;
         i88 = i69;
         i89 = i70;
         break;
        }
       }
      } while (0);
      i76 = i19 | 0;
      HEAP32[i76 >> 2] = HEAP32[i88 >> 2];
      __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i79, i18, __ZN7WebCore9HTMLNames9colorAttrE, i19);
      i74 = HEAP32[i76 >> 2] | 0;
      do {
       if ((i74 | 0) != 0) {
        i76 = i74 | 0;
        i73 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
        if ((i73 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i74);
         break;
        } else {
         HEAP32[i76 >> 2] = i73;
         break;
        }
       }
      } while (0);
      do {
       if (!i72) {
        i74 = i78 | 0;
        i79 = (HEAP32[i74 >> 2] | 0) - 2 | 0;
        if ((i79 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i78);
         break;
        } else {
         HEAP32[i74 >> 2] = i79;
         break;
        }
       }
      } while (0);
      i78 = HEAP32[i77 >> 2] | 0;
      if ((i78 | 0) == 0) {
       break;
      }
      i72 = i78 + 8 | 0;
      i78 = i72 | 0;
      i79 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
      HEAP32[i78 >> 2] = i79;
      if ((i79 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
     }
    } while (0);
    i72 = i4 + 16 | 0;
    i79 = HEAP32[i72 >> 2] | 0;
    do {
     if ((i79 | 0) != 0) {
      if ((HEAP32[i79 + 4 >> 2] | 0) == 0) {
       break;
      }
      i78 = i1 | 0;
      i74 = i20 | 0;
      HEAP32[i74 >> 2] = i81;
      i73 = i81 + 8 | 0;
      HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
      i73 = HEAP32[i72 >> 2] | 0;
      i76 = (i73 | 0) == 0;
      do {
       if (i76) {
        i70 = i16 | 0;
        HEAP32[i70 >> 2] = 0;
        i90 = i70;
        i91 = i16;
       } else {
        i70 = i73 | 0;
        HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 2;
        i69 = i16;
        if ((HEAP32[i73 + 16 >> 2] & 16 | 0) == 0) {
         __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i16, i73);
         i90 = i16 | 0;
         i91 = i69;
         break;
        } else {
         i71 = i16 | 0;
         HEAP32[i71 >> 2] = i73;
         HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 2;
         i90 = i71;
         i91 = i69;
         break;
        }
       }
      } while (0);
      i77 = i21 | 0;
      HEAP32[i77 >> 2] = HEAP32[i90 >> 2];
      __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i78, i20, __ZN7WebCore9HTMLNames8faceAttrE, i21);
      i69 = HEAP32[i77 >> 2] | 0;
      do {
       if ((i69 | 0) != 0) {
        i77 = i69 | 0;
        i71 = (HEAP32[i77 >> 2] | 0) - 2 | 0;
        if ((i71 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i69);
         break;
        } else {
         HEAP32[i77 >> 2] = i71;
         break;
        }
       }
      } while (0);
      do {
       if (!i76) {
        i69 = i73 | 0;
        i78 = (HEAP32[i69 >> 2] | 0) - 2 | 0;
        if ((i78 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i73);
         break;
        } else {
         HEAP32[i69 >> 2] = i78;
         break;
        }
       }
      } while (0);
      i73 = HEAP32[i74 >> 2] | 0;
      if ((i73 | 0) == 0) {
       break;
      }
      i76 = i73 + 8 | 0;
      i73 = i76 | 0;
      i78 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
      HEAP32[i73 >> 2] = i78;
      if ((i78 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i76 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i76 - 8 | 0);
     }
    } while (0);
    i72 = i4 + 20 | 0;
    i79 = HEAP32[i72 >> 2] | 0;
    if ((i79 | 0) == 0) {
     break;
    }
    if ((HEAP32[i79 + 4 >> 2] | 0) == 0) {
     break;
    }
    i79 = i1 | 0;
    i76 = i22 | 0;
    HEAP32[i76 >> 2] = i81;
    i78 = i81 + 8 | 0;
    HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
    i78 = HEAP32[i72 >> 2] | 0;
    i72 = (i78 | 0) == 0;
    do {
     if (i72) {
      i73 = i15 | 0;
      HEAP32[i73 >> 2] = 0;
      i92 = i73;
      i93 = i15;
     } else {
      i73 = i78 | 0;
      HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 2;
      i69 = i15;
      if ((HEAP32[i78 + 16 >> 2] & 16 | 0) == 0) {
       __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i15, i78);
       i92 = i15 | 0;
       i93 = i69;
       break;
      } else {
       i71 = i15 | 0;
       HEAP32[i71 >> 2] = i78;
       HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 2;
       i92 = i71;
       i93 = i69;
       break;
      }
     }
    } while (0);
    i69 = i23 | 0;
    HEAP32[i69 >> 2] = HEAP32[i92 >> 2];
    __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i79, i22, __ZN7WebCore9HTMLNames8sizeAttrE, i23);
    i71 = HEAP32[i69 >> 2] | 0;
    do {
     if ((i71 | 0) != 0) {
      i69 = i71 | 0;
      i73 = (HEAP32[i69 >> 2] | 0) - 2 | 0;
      if ((i73 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i71);
       break;
      } else {
       HEAP32[i69 >> 2] = i73;
       break;
      }
     }
    } while (0);
    do {
     if (!i72) {
      i71 = i78 | 0;
      i79 = (HEAP32[i71 >> 2] | 0) - 2 | 0;
      if ((i79 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i78);
       break;
      } else {
       HEAP32[i71 >> 2] = i79;
       break;
      }
     }
    } while (0);
    i78 = HEAP32[i76 >> 2] | 0;
    if ((i78 | 0) == 0) {
     break;
    }
    i72 = i78 + 8 | 0;
    i78 = i72 | 0;
    i79 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
    HEAP32[i78 >> 2] = i79;
    if ((i79 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
    break;
   }
   __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i14, HEAP32[i1 + 8 >> 2] | 0, __ZN7WebCore9HTMLNames7fontTagE);
   i72 = HEAP32[i14 >> 2] | 0;
   i79 = i72 | 0;
   i78 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i78 | 0) != 0) {
     if ((HEAP32[i78 + 4 >> 2] | 0) == 0) {
      break;
     }
     i71 = i78 | 0;
     HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 2;
     if ((HEAP32[i78 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i13, i78);
      i94 = i13 | 0;
     } else {
      i73 = i13 | 0;
      HEAP32[i73 >> 2] = i78;
      HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 2;
      i94 = i73;
     }
     i73 = i24 | 0;
     HEAP32[i73 >> 2] = HEAP32[i94 >> 2];
     __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i79, __ZN7WebCore9HTMLNames9colorAttrE, i24);
     i71 = HEAP32[i73 >> 2] | 0;
     do {
      if ((i71 | 0) != 0) {
       i73 = i71 | 0;
       i69 = (HEAP32[i73 >> 2] | 0) - 2 | 0;
       if ((i69 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i71);
        break;
       } else {
        HEAP32[i73 >> 2] = i69;
        break;
       }
      }
     } while (0);
     i71 = i78 | 0;
     i74 = (HEAP32[i71 >> 2] | 0) - 2 | 0;
     if ((i74 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i78);
      break;
     } else {
      HEAP32[i71 >> 2] = i74;
      break;
     }
    }
   } while (0);
   i78 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i78 | 0) != 0) {
     if ((HEAP32[i78 + 4 >> 2] | 0) == 0) {
      break;
     }
     i76 = i78 | 0;
     HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 2;
     if ((HEAP32[i78 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i12, i78);
      i95 = i12 | 0;
     } else {
      i74 = i12 | 0;
      HEAP32[i74 >> 2] = i78;
      HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 2;
      i95 = i74;
     }
     i74 = i25 | 0;
     HEAP32[i74 >> 2] = HEAP32[i95 >> 2];
     __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i79, __ZN7WebCore9HTMLNames8faceAttrE, i25);
     i76 = HEAP32[i74 >> 2] | 0;
     do {
      if ((i76 | 0) != 0) {
       i74 = i76 | 0;
       i71 = (HEAP32[i74 >> 2] | 0) - 2 | 0;
       if ((i71 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i76);
        break;
       } else {
        HEAP32[i74 >> 2] = i71;
        break;
       }
      }
     } while (0);
     i76 = i78 | 0;
     i71 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
     if ((i71 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i78);
      break;
     } else {
      HEAP32[i76 >> 2] = i71;
      break;
     }
    }
   } while (0);
   i78 = HEAP32[i4 + 20 >> 2] | 0;
   do {
    if ((i78 | 0) != 0) {
     if ((HEAP32[i78 + 4 >> 2] | 0) == 0) {
      break;
     }
     i71 = i78 | 0;
     HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 2;
     if ((HEAP32[i78 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i11, i78);
      i96 = i11 | 0;
     } else {
      i76 = i11 | 0;
      HEAP32[i76 >> 2] = i78;
      HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 2;
      i96 = i76;
     }
     i76 = i26 | 0;
     HEAP32[i76 >> 2] = HEAP32[i96 >> 2];
     __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i79, __ZN7WebCore9HTMLNames8sizeAttrE, i26);
     i71 = HEAP32[i76 >> 2] | 0;
     do {
      if ((i71 | 0) != 0) {
       i76 = i71 | 0;
       i74 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
       if ((i74 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i71);
        break;
       } else {
        HEAP32[i76 >> 2] = i74;
        break;
       }
      }
     } while (0);
     i71 = i78 | 0;
     i74 = (HEAP32[i71 >> 2] | 0) - 2 | 0;
     if ((i74 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i78);
      break;
     } else {
      HEAP32[i71 >> 2] = i74;
      break;
     }
    }
   } while (0);
   i78 = i27 | 0;
   HEAP32[i78 >> 2] = i83;
   if ((i83 | 0) != 0) {
    i74 = i83 + 8 | 0;
    HEAP32[i74 >> 2] = (HEAP32[i74 >> 2] | 0) + 1;
   }
   i74 = i28 | 0;
   HEAP32[i74 >> 2] = i84;
   if ((i84 | 0) != 0) {
    i71 = i84 + 8 | 0;
    HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
   }
   i71 = i29 | 0;
   HEAP32[i71 >> 2] = i79;
   i76 = (i72 | 0) == 0;
   if (!i76) {
    i69 = i72 + 8 | 0;
    HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + 1;
   }
   __ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE(i1, i27, i28, i29);
   i69 = HEAP32[i71 >> 2] | 0;
   do {
    if ((i69 | 0) != 0) {
     i71 = i69 + 8 | 0;
     i73 = i71 | 0;
     i77 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
     HEAP32[i73 >> 2] = i77;
     if ((i77 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i71 - 8 | 0);
    }
   } while (0);
   i69 = HEAP32[i74 >> 2] | 0;
   do {
    if ((i69 | 0) != 0) {
     i79 = i69 + 8 | 0;
     i71 = i79 | 0;
     i77 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
     HEAP32[i71 >> 2] = i77;
     if ((i77 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i79 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i79 - 8 | 0);
    }
   } while (0);
   i69 = HEAP32[i78 >> 2] | 0;
   do {
    if ((i69 | 0) != 0) {
     i74 = i69 + 8 | 0;
     i79 = i74 | 0;
     i77 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
     HEAP32[i79 >> 2] = i77;
     if ((i77 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i74 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i74 - 8 | 0);
    }
   } while (0);
   if (i76) {
    break;
   }
   i69 = i72 + 8 | 0;
   i78 = i69 | 0;
   i74 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
   HEAP32[i78 >> 2] = i74;
   if ((i74 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i69 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i69 - 8 | 0);
  }
 } while (0);
 i29 = i4 | 0;
 i28 = HEAP32[i29 >> 2] | 0;
 L214 : do {
  if ((i28 | 0) != 0) {
   i27 = i28 | 0;
   i26 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = i26 + 2;
   i96 = (HEAP32[i28 + 4 >> 2] | 0) == 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i28);
    if (i96) {
     break;
    }
   } else {
    HEAP32[i27 >> 2] = i26;
    if (i96) {
     break;
    }
   }
   if ((i82 | 0) == 0) {
    __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i37, HEAP32[i1 + 8 >> 2] | 0, __ZN7WebCore9HTMLNames7spanTagE);
    i96 = i37 | 0;
    i26 = HEAP32[i96 >> 2] | 0;
    HEAP32[i96 >> 2] = 0;
    i96 = i26 | 0;
    i26 = HEAP32[i29 >> 2] | 0;
    i27 = (i26 | 0) == 0;
    do {
     if (i27) {
      i11 = i10 | 0;
      HEAP32[i11 >> 2] = 0;
      i97 = i11;
      i98 = i10;
     } else {
      i11 = i26 | 0;
      HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
      i25 = i10;
      if ((HEAP32[i26 + 16 >> 2] & 16 | 0) == 0) {
       __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i10, i26);
       i97 = i10 | 0;
       i98 = i25;
       break;
      } else {
       i95 = i10 | 0;
       HEAP32[i95 >> 2] = i26;
       HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
       i97 = i95;
       i98 = i25;
       break;
      }
     }
    } while (0);
    i72 = i38 | 0;
    HEAP32[i72 >> 2] = HEAP32[i97 >> 2];
    __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i96, __ZN7WebCore9HTMLNames9styleAttrE, i38);
    i76 = HEAP32[i72 >> 2] | 0;
    do {
     if ((i76 | 0) != 0) {
      i72 = i76 | 0;
      i25 = (HEAP32[i72 >> 2] | 0) - 2 | 0;
      if ((i25 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i76);
       break;
      } else {
       HEAP32[i72 >> 2] = i25;
       break;
      }
     }
    } while (0);
    do {
     if (!i27) {
      i76 = i26 | 0;
      i25 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
      if ((i25 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i26);
       break;
      } else {
       HEAP32[i76 >> 2] = i25;
       break;
      }
     }
    } while (0);
    i26 = i39 | 0;
    HEAP32[i26 >> 2] = i83;
    if ((i83 | 0) != 0) {
     i27 = i83 + 8 | 0;
     HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
    }
    i27 = i40 | 0;
    HEAP32[i27 >> 2] = i84;
    if ((i84 | 0) != 0) {
     i25 = i84 + 8 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
    }
    i25 = i41 | 0;
    HEAP32[i25 >> 2] = i96;
    __ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE(i1, i39, i40, i41);
    i76 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i76 | 0) != 0) {
      i25 = i76 + 8 | 0;
      i72 = i25 | 0;
      i95 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
      HEAP32[i72 >> 2] = i95;
      if ((i95 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
     }
    } while (0);
    i76 = HEAP32[i27 >> 2] | 0;
    do {
     if ((i76 | 0) != 0) {
      i96 = i76 + 8 | 0;
      i25 = i96 | 0;
      i95 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i95;
      if ((i95 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i96 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i96 - 8 | 0);
     }
    } while (0);
    i76 = HEAP32[i26 >> 2] | 0;
    if ((i76 | 0) == 0) {
     break;
    }
    i27 = i76 + 8 | 0;
    i76 = i27 | 0;
    i96 = (HEAP32[i76 >> 2] | 0) - 1 | 0;
    HEAP32[i76 >> 2] = i96;
    if ((i96 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
    break;
   }
   i27 = HEAP32[i82 + 48 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i96 = HEAP32[i27 + 8 >> 2] | 0;
     if ((i96 | 0) == 0) {
      break;
     }
     __ZNK7WebCore15StyleProperties6asTextEv(i30, i96);
     i96 = i31 | 0;
     HEAP32[i96 >> 2] = 0;
     i76 = i31 + 4 | 0;
     HEAP32[i76 >> 2] = 0;
     i95 = i31 + 8 | 0;
     HEAP32[i95 >> 2] = 0;
     i25 = i31 + 12 | 0;
     HEAP8[i25] = 1;
     HEAP32[i31 + 16 >> 2] = 0;
     i72 = i31 + 20 | 0;
     HEAP32[i72 >> 2] = 0;
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i31, i30);
     i11 = i30 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     L264 : do {
      if ((i12 | 0) != 0) {
       if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
        break;
       }
       HEAP8[i9] = 32;
       i24 = HEAP32[i95 >> 2] | 0;
       do {
        if ((i24 | 0) != 0) {
         i94 = HEAP32[i96 >> 2] | 0;
         if (i94 >>> 0 >= (HEAP32[i24 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         if ((HEAP32[i76 >> 2] | 0) != 0) {
          break;
         }
         i13 = (HEAP8[i25] & 1) == 0;
         HEAP32[i96 >> 2] = i94 + 1;
         if (i13) {
          HEAP16[(HEAP32[i31 + 20 >> 2] | 0) + (i94 << 1) >> 1] = 32;
          break L264;
         } else {
          HEAP8[(HEAP32[i72 >> 2] | 0) + i94 | 0] = 32;
          break L264;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i31, i9, 1);
      }
     } while (0);
     i72 = i32 | 0;
     i96 = HEAP32[i29 >> 2] | 0;
     HEAP32[i72 >> 2] = i96;
     if ((i96 | 0) != 0) {
      i25 = i96 | 0;
      HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
     }
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i31, i32);
     i25 = HEAP32[i72 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i72 = i25 | 0;
       i96 = (HEAP32[i72 >> 2] | 0) - 2 | 0;
       if ((i96 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i72 >> 2] = i96;
        break;
       }
      }
     } while (0);
     i25 = i1 | 0;
     i96 = i33 | 0;
     HEAP32[i96 >> 2] = i82;
     i72 = i82 + 8 | 0;
     HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
     __ZN3WTF13StringBuilder11shrinkToFitEv(i31);
     i72 = HEAP32[i76 >> 2] | 0;
     do {
      if ((i72 | 0) == 0) {
       __ZNK3WTF13StringBuilder11reifyStringEv(i31);
       i12 = HEAP32[i76 >> 2] | 0;
       if ((i12 | 0) != 0) {
        i99 = i12;
        i80 = 182;
        break;
       }
       i100 = i8;
       i80 = 183;
      } else {
       i99 = i72;
       i80 = 182;
      }
     } while (0);
     do {
      if ((i80 | 0) == 182) {
       i72 = i99 | 0;
       HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 2;
       i12 = i8;
       if ((i99 | 0) == 0) {
        i100 = i12;
        i80 = 183;
        break;
       }
       if ((HEAP32[i99 + 16 >> 2] & 16 | 0) == 0) {
        __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i8, i99);
        i101 = i8 | 0;
        i102 = i99;
        i103 = i12;
        i104 = 0;
        break;
       } else {
        i24 = i8 | 0;
        HEAP32[i24 >> 2] = i99;
        HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 2;
        i101 = i24;
        i102 = i99;
        i103 = i12;
        i104 = 0;
        break;
       }
      }
     } while (0);
     if ((i80 | 0) == 183) {
      i12 = i8 | 0;
      HEAP32[i12 >> 2] = 0;
      i101 = i12;
      i102 = 0;
      i103 = i100;
      i104 = 1;
     }
     i12 = i34 | 0;
     HEAP32[i12 >> 2] = HEAP32[i101 >> 2];
     __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i25, i33, __ZN7WebCore9HTMLNames9styleAttrE, i34);
     i24 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i12 = i24 | 0;
       i72 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
       if ((i72 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i12 >> 2] = i72;
        break;
       }
      }
     } while (0);
     do {
      if (!i104) {
       i24 = i102 | 0;
       i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
       if ((i25 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i102);
        break;
       } else {
        HEAP32[i24 >> 2] = i25;
        break;
       }
      }
     } while (0);
     i25 = HEAP32[i96 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i24 = i25 + 8 | 0;
       i72 = i24 | 0;
       i12 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
       HEAP32[i72 >> 2] = i12;
       if ((i12 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
      }
     } while (0);
     i25 = HEAP32[i95 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i96 = i25 | 0;
       i24 = (HEAP32[i96 >> 2] | 0) - 2 | 0;
       if ((i24 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i96 >> 2] = i24;
        break;
       }
      }
     } while (0);
     i25 = HEAP32[i76 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i95 = i25 | 0;
       i24 = (HEAP32[i95 >> 2] | 0) - 2 | 0;
       if ((i24 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i95 >> 2] = i24;
        break;
       }
      }
     } while (0);
     i25 = HEAP32[i11 >> 2] | 0;
     if ((i25 | 0) == 0) {
      break L214;
     }
     i76 = i25 | 0;
     i24 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break L214;
     } else {
      HEAP32[i76 >> 2] = i24;
      break L214;
     }
    }
   } while (0);
   i27 = i1 | 0;
   i26 = i35 | 0;
   HEAP32[i26 >> 2] = i82;
   i24 = i82 + 8 | 0;
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   i24 = HEAP32[i29 >> 2] | 0;
   i76 = (i24 | 0) == 0;
   do {
    if (i76) {
     i25 = i7 | 0;
     HEAP32[i25 >> 2] = 0;
     i105 = i25;
     i106 = i7;
    } else {
     i25 = i24 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
     i95 = i7;
     if ((HEAP32[i24 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, i24);
      i105 = i7 | 0;
      i106 = i95;
      break;
     } else {
      i96 = i7 | 0;
      HEAP32[i96 >> 2] = i24;
      HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
      i105 = i96;
      i106 = i95;
      break;
     }
    }
   } while (0);
   i95 = i36 | 0;
   HEAP32[i95 >> 2] = HEAP32[i105 >> 2];
   __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i27, i35, __ZN7WebCore9HTMLNames9styleAttrE, i36);
   i96 = HEAP32[i95 >> 2] | 0;
   do {
    if ((i96 | 0) != 0) {
     i95 = i96 | 0;
     i25 = (HEAP32[i95 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i96);
      break;
     } else {
      HEAP32[i95 >> 2] = i25;
      break;
     }
    }
   } while (0);
   do {
    if (!i76) {
     i96 = i24 | 0;
     i27 = (HEAP32[i96 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i96 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i24 = HEAP32[i26 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i76 = i24 + 8 | 0;
   i24 = i76 | 0;
   i27 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i27;
   if ((i27 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i76 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i76 - 8 | 0);
  }
 } while (0);
 do {
  if ((HEAP8[i4 + 4 | 0] & 1) != 0) {
   i36 = i42 | 0;
   HEAP32[i36 >> 2] = i83;
   if ((i83 | 0) != 0) {
    i35 = i83 + 8 | 0;
    HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
   }
   i35 = i43 | 0;
   HEAP32[i35 >> 2] = i84;
   if ((i84 | 0) != 0) {
    i105 = i84 + 8 | 0;
    HEAP32[i105 >> 2] = (HEAP32[i105 >> 2] | 0) + 1;
   }
   __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i45, HEAP32[i1 + 8 >> 2] | 0, __ZN7WebCore9HTMLNames4bTagE);
   i105 = i44 | 0;
   i106 = i45 | 0;
   i7 = HEAP32[i106 >> 2] | 0;
   HEAP32[i106 >> 2] = 0;
   HEAP32[i105 >> 2] = i7;
   __ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE(i1, i42, i43, i44);
   i7 = HEAP32[i105 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i105 = i7 + 8 | 0;
     i29 = i105 | 0;
     i82 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     HEAP32[i29 >> 2] = i82;
     if ((i82 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i105 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i105 - 8 | 0);
    }
   } while (0);
   i7 = HEAP32[i106 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i26 = i7 + 8 | 0;
     i105 = i26 | 0;
     i82 = (HEAP32[i105 >> 2] | 0) - 1 | 0;
     HEAP32[i105 >> 2] = i82;
     if ((i82 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
    }
   } while (0);
   i7 = HEAP32[i35 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i106 = i7 + 8 | 0;
     i26 = i106 | 0;
     i82 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i82;
     if ((i82 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i106 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i106 - 8 | 0);
    }
   } while (0);
   i7 = HEAP32[i36 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i35 = i7 + 8 | 0;
   i7 = i35 | 0;
   i106 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i106;
   if ((i106 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
  }
 } while (0);
 do {
  if ((HEAP8[i4 + 5 | 0] & 1) != 0) {
   i44 = i46 | 0;
   HEAP32[i44 >> 2] = i83;
   if ((i83 | 0) != 0) {
    i43 = i83 + 8 | 0;
    HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
   }
   i43 = i47 | 0;
   HEAP32[i43 >> 2] = i84;
   if ((i84 | 0) != 0) {
    i42 = i84 + 8 | 0;
    HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
   }
   __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i49, HEAP32[i1 + 8 >> 2] | 0, __ZN7WebCore9HTMLNames4iTagE);
   i42 = i48 | 0;
   i45 = i49 | 0;
   i35 = HEAP32[i45 >> 2] | 0;
   HEAP32[i45 >> 2] = 0;
   HEAP32[i42 >> 2] = i35;
   __ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE(i1, i46, i47, i48);
   i35 = HEAP32[i42 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i42 = i35 + 8 | 0;
     i106 = i42 | 0;
     i7 = (HEAP32[i106 >> 2] | 0) - 1 | 0;
     HEAP32[i106 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
    }
   } while (0);
   i35 = HEAP32[i45 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i36 = i35 + 8 | 0;
     i42 = i36 | 0;
     i7 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
     HEAP32[i42 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
    }
   } while (0);
   i35 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i45 = i35 + 8 | 0;
     i36 = i45 | 0;
     i7 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     HEAP32[i36 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
    }
   } while (0);
   i35 = HEAP32[i44 >> 2] | 0;
   if ((i35 | 0) == 0) {
    break;
   }
   i43 = i35 + 8 | 0;
   i35 = i43 | 0;
   i45 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   HEAP32[i35 >> 2] = i45;
   if ((i45 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
  }
 } while (0);
 do {
  if ((HEAP8[i4 + 6 | 0] & 1) != 0) {
   i48 = i50 | 0;
   HEAP32[i48 >> 2] = i83;
   if ((i83 | 0) != 0) {
    i47 = i83 + 8 | 0;
    HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
   }
   i47 = i51 | 0;
   HEAP32[i47 >> 2] = i84;
   if ((i84 | 0) != 0) {
    i46 = i84 + 8 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
   }
   __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i53, HEAP32[i1 + 8 >> 2] | 0, __ZN7WebCore9HTMLNames4uTagE);
   i46 = i52 | 0;
   i49 = i53 | 0;
   i43 = HEAP32[i49 >> 2] | 0;
   HEAP32[i49 >> 2] = 0;
   HEAP32[i46 >> 2] = i43;
   __ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE(i1, i50, i51, i52);
   i43 = HEAP32[i46 >> 2] | 0;
   do {
    if ((i43 | 0) != 0) {
     i46 = i43 + 8 | 0;
     i45 = i46 | 0;
     i35 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
     HEAP32[i45 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    }
   } while (0);
   i43 = HEAP32[i49 >> 2] | 0;
   do {
    if ((i43 | 0) != 0) {
     i44 = i43 + 8 | 0;
     i46 = i44 | 0;
     i35 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     HEAP32[i46 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
    }
   } while (0);
   i43 = HEAP32[i47 >> 2] | 0;
   do {
    if ((i43 | 0) != 0) {
     i49 = i43 + 8 | 0;
     i44 = i49 | 0;
     i35 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     HEAP32[i44 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
    }
   } while (0);
   i43 = HEAP32[i48 >> 2] | 0;
   if ((i43 | 0) == 0) {
    break;
   }
   i47 = i43 + 8 | 0;
   i43 = i47 | 0;
   i49 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
   HEAP32[i43 >> 2] = i49;
   if ((i49 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
  }
 } while (0);
 do {
  if ((HEAP8[i4 + 7 | 0] & 1) != 0) {
   i52 = i54 | 0;
   HEAP32[i52 >> 2] = i83;
   if ((i83 | 0) != 0) {
    i51 = i83 + 8 | 0;
    HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
   }
   i51 = i55 | 0;
   HEAP32[i51 >> 2] = i84;
   if ((i84 | 0) != 0) {
    i50 = i84 + 8 | 0;
    HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
   }
   __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i57, HEAP32[i1 + 8 >> 2] | 0, __ZN7WebCore9HTMLNames9strikeTagE);
   i50 = i56 | 0;
   i53 = i57 | 0;
   i47 = HEAP32[i53 >> 2] | 0;
   HEAP32[i53 >> 2] = 0;
   HEAP32[i50 >> 2] = i47;
   __ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE(i1, i54, i55, i56);
   i47 = HEAP32[i50 >> 2] | 0;
   do {
    if ((i47 | 0) != 0) {
     i50 = i47 + 8 | 0;
     i49 = i50 | 0;
     i43 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
     HEAP32[i49 >> 2] = i43;
     if ((i43 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
    }
   } while (0);
   i47 = HEAP32[i53 >> 2] | 0;
   do {
    if ((i47 | 0) != 0) {
     i48 = i47 + 8 | 0;
     i50 = i48 | 0;
     i43 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     HEAP32[i50 >> 2] = i43;
     if ((i43 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
    }
   } while (0);
   i47 = HEAP32[i51 >> 2] | 0;
   do {
    if ((i47 | 0) != 0) {
     i53 = i47 + 8 | 0;
     i48 = i53 | 0;
     i43 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     HEAP32[i48 >> 2] = i43;
     if ((i43 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
    }
   } while (0);
   i47 = HEAP32[i52 >> 2] | 0;
   if ((i47 | 0) == 0) {
    break;
   }
   i51 = i47 + 8 | 0;
   i47 = i51 | 0;
   i53 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
   HEAP32[i47 >> 2] = i53;
   if ((i53 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
  }
 } while (0);
 do {
  if ((HEAP8[i4 + 8 | 0] & 1) == 0) {
   if ((HEAP8[i4 + 9 | 0] & 1) == 0) {
    break;
   }
   i56 = i62 | 0;
   HEAP32[i56 >> 2] = i83;
   if ((i83 | 0) != 0) {
    i55 = i83 + 8 | 0;
    HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
   }
   i55 = i63 | 0;
   HEAP32[i55 >> 2] = i84;
   if ((i84 | 0) != 0) {
    i54 = i84 + 8 | 0;
    HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
   }
   __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i65, HEAP32[i1 + 8 >> 2] | 0, __ZN7WebCore9HTMLNames6supTagE);
   i54 = i64 | 0;
   i57 = i65 | 0;
   i51 = HEAP32[i57 >> 2] | 0;
   HEAP32[i57 >> 2] = 0;
   HEAP32[i54 >> 2] = i51;
   __ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE(i1, i62, i63, i64);
   i51 = HEAP32[i54 >> 2] | 0;
   do {
    if ((i51 | 0) != 0) {
     i54 = i51 + 8 | 0;
     i53 = i54 | 0;
     i47 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
     HEAP32[i53 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
    }
   } while (0);
   i51 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i51 | 0) != 0) {
     i52 = i51 + 8 | 0;
     i54 = i52 | 0;
     i47 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
     HEAP32[i54 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    }
   } while (0);
   i51 = HEAP32[i55 >> 2] | 0;
   do {
    if ((i51 | 0) != 0) {
     i57 = i51 + 8 | 0;
     i52 = i57 | 0;
     i47 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     HEAP32[i52 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
    }
   } while (0);
   i51 = HEAP32[i56 >> 2] | 0;
   if ((i51 | 0) == 0) {
    break;
   }
   i55 = i51 + 8 | 0;
   i51 = i55 | 0;
   i57 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
   HEAP32[i51 >> 2] = i57;
   if ((i57 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
  } else {
   i55 = i58 | 0;
   HEAP32[i55 >> 2] = i83;
   if ((i83 | 0) != 0) {
    i57 = i83 + 8 | 0;
    HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
   }
   i57 = i59 | 0;
   HEAP32[i57 >> 2] = i84;
   if ((i84 | 0) != 0) {
    i51 = i84 + 8 | 0;
    HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
   }
   __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i61, HEAP32[i1 + 8 >> 2] | 0, __ZN7WebCore9HTMLNames6subTagE);
   i51 = i60 | 0;
   i47 = i61 | 0;
   i52 = HEAP32[i47 >> 2] | 0;
   HEAP32[i47 >> 2] = 0;
   HEAP32[i51 >> 2] = i52;
   __ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE(i1, i58, i59, i60);
   i52 = HEAP32[i51 >> 2] | 0;
   do {
    if ((i52 | 0) != 0) {
     i51 = i52 + 8 | 0;
     i54 = i51 | 0;
     i53 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
     HEAP32[i54 >> 2] = i53;
     if ((i53 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
    }
   } while (0);
   i52 = HEAP32[i47 >> 2] | 0;
   do {
    if ((i52 | 0) != 0) {
     i56 = i52 + 8 | 0;
     i51 = i56 | 0;
     i53 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     HEAP32[i51 >> 2] = i53;
     if ((i53 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
    }
   } while (0);
   i52 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i52 | 0) != 0) {
     i47 = i52 + 8 | 0;
     i56 = i47 | 0;
     i53 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
     HEAP32[i56 >> 2] = i53;
     if ((i53 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    }
   } while (0);
   i52 = HEAP32[i55 >> 2] | 0;
   if ((i52 | 0) == 0) {
    break;
   }
   i57 = i52 + 8 | 0;
   i52 = i57 | 0;
   i47 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
   HEAP32[i52 >> 2] = i47;
   if ((i47 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
  }
 } while (0);
 i60 = i1 + 192 | 0;
 do {
  if ((HEAP32[i60 >> 2] | 0) != 0 & (i5 | 0) == 0) {
   i59 = i66 | 0;
   HEAP32[i59 >> 2] = i83;
   if ((i83 | 0) != 0) {
    i58 = i83 + 8 | 0;
    HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
   }
   i58 = i67 | 0;
   HEAP32[i58 >> 2] = i84;
   if ((i84 | 0) != 0) {
    i61 = i84 + 8 | 0;
    HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
   }
   __ZN7WebCore7Element27cloneElementWithoutChildrenEv(i68, HEAP32[i60 >> 2] | 0);
   __ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE(i1, i66, i67, i68);
   i61 = HEAP32[i68 >> 2] | 0;
   do {
    if ((i61 | 0) != 0) {
     i64 = i61 + 8 | 0;
     i63 = i64 | 0;
     i62 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
     HEAP32[i63 >> 2] = i62;
     if ((i62 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i64 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i64 - 8 | 0);
    }
   } while (0);
   i61 = HEAP32[i58 >> 2] | 0;
   do {
    if ((i61 | 0) != 0) {
     i55 = i61 + 8 | 0;
     i64 = i55 | 0;
     i62 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
     HEAP32[i64 >> 2] = i62;
     if ((i62 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
    }
   } while (0);
   i61 = HEAP32[i59 >> 2] | 0;
   if ((i61 | 0) == 0) {
    break;
   }
   i58 = i61 + 8 | 0;
   i61 = i58 | 0;
   i55 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
   HEAP32[i61 >> 2] = i55;
   if ((i55 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
  }
 } while (0);
 do {
  if ((i84 | 0) != 0) {
   i68 = i84 + 8 | 0;
   i67 = i68 | 0;
   i66 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
   HEAP32[i67 >> 2] = i66;
   if ((i66 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
  }
 } while (0);
 if ((i83 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i84 = i83 + 8 | 0;
 i83 = i84 | 0;
 i68 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
 HEAP32[i83 >> 2] = i68;
 if ((i68 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i84 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i84 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17ApplyStyleCommand16applyInlineStyleEPNS_12EditingStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 248 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 64 | 0;
 i12 = i3 + 80 | 0;
 i13 = i3 + 96 | 0;
 i14 = i3 + 104 | 0;
 i15 = i3 + 120 | 0;
 i16 = i3 + 136 | 0;
 i17 = i3 + 152 | 0;
 i18 = i3 + 168 | 0;
 i19 = i3 + 184 | 0;
 i20 = i3 + 192 | 0;
 i21 = i3 + 200 | 0;
 i22 = i3 + 216 | 0;
 i23 = i3 + 232 | 0;
 i24 = i3 + 240 | 0;
 i25 = i1 + 8 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i25 >> 2] | 0);
 i26 = i1 + 188 | 0;
 i27 = i10 | 0;
 if ((HEAP8[i26] & 1) == 0) {
  i28 = HEAP32[i1 + 164 >> 2] | 0;
  HEAP32[i27 >> 2] = i28;
  if ((i28 | 0) != 0) {
   i29 = i28 + 8 | 0;
   HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
  }
  HEAP32[i10 + 4 >> 2] = HEAP32[i1 + 168 >> 2];
  i29 = HEAP32[i1 + 172 >> 2] | 0;
  i28 = i10 + 8 | 0;
  i30 = i28;
  i31 = HEAP32[i30 >> 2] & -8 | i29 & 7;
  HEAP32[i30 >> 2] = i31;
  HEAP8[i28] = i31 & 255 & -9 | i29 & 8;
 } else {
  i29 = HEAP32[i1 + 96 >> 2] | 0;
  HEAP32[i27 >> 2] = i29;
  if ((i29 | 0) != 0) {
   i31 = i29 + 8 | 0;
   HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
  }
  HEAP32[i10 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
  i31 = HEAP32[i1 + 104 >> 2] | 0;
  i29 = i10 + 8 | 0;
  i28 = i29;
  i30 = HEAP32[i28 >> 2] & -8 | i31 & 7;
  HEAP32[i28 >> 2] = i30;
  HEAP8[i29] = i30 & 255 & -9 | i31 & 8;
 }
 i31 = i11 | 0;
 if ((HEAP8[i26] & 1) == 0) {
  i30 = HEAP32[i1 + 176 >> 2] | 0;
  HEAP32[i31 >> 2] = i30;
  if ((i30 | 0) != 0) {
   i29 = i30 + 8 | 0;
   HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
  }
  HEAP32[i11 + 4 >> 2] = HEAP32[i1 + 180 >> 2];
  i29 = HEAP32[i1 + 184 >> 2] | 0;
  i30 = i11 + 8 | 0;
  i28 = i30;
  i32 = HEAP32[i28 >> 2] & -8 | i29 & 7;
  HEAP32[i28 >> 2] = i32;
  HEAP8[i30] = i32 & 255 & -9 | i29 & 8;
 } else {
  i29 = HEAP32[i1 + 108 >> 2] | 0;
  HEAP32[i31 >> 2] = i29;
  if ((i29 | 0) != 0) {
   i32 = i29 + 8 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
  }
  HEAP32[i11 + 4 >> 2] = HEAP32[i1 + 112 >> 2];
  i32 = HEAP32[i1 + 116 >> 2] | 0;
  i29 = i11 + 8 | 0;
  i30 = i29;
  i28 = HEAP32[i30 >> 2] & -8 | i32 & 7;
  HEAP32[i30 >> 2] = i28;
  HEAP8[i29] = i28 & 255 & -9 | i32 & 8;
 }
 do {
  if ((HEAP32[i27 >> 2] | 0) == 0) {
   i33 = 0;
   i34 = 0;
   i35 = 340;
  } else {
   if ((HEAP32[i31 >> 2] | 0) == 0) {
    i36 = 0;
    i37 = 0;
    break;
   }
   do {
    if ((__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i11, i10) | 0) < 0) {
     i32 = HEAP32[i27 >> 2] | 0;
     i28 = (i32 | 0) == 0;
     if (!i28) {
      i29 = i32 + 8 | 0;
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
     }
     i29 = i10 + 4 | 0;
     i30 = HEAP32[i29 >> 2] | 0;
     i38 = i10 + 8 | 0;
     i39 = i38;
     i40 = HEAP32[i39 >> 2] | 0;
     i41 = i40 & 8;
     i42 = HEAP32[i31 >> 2] | 0;
     if ((i42 | 0) != 0) {
      i43 = i42 + 8 | 0;
      HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
     }
     i43 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = i42;
     do {
      if ((i43 | 0) != 0) {
       i42 = i43 + 8 | 0;
       i44 = i42 | 0;
       i45 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
       HEAP32[i44 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
      }
     } while (0);
     i43 = i11 + 4 | 0;
     HEAP32[i29 >> 2] = HEAP32[i43 >> 2];
     i42 = i11 + 8 | 0;
     i45 = i42;
     i44 = HEAP32[i45 >> 2] | 0;
     i46 = HEAP32[i39 >> 2] & -8 | i44 & 7;
     HEAP32[i39 >> 2] = i46;
     HEAP8[i38] = i46 & 255 & -9 | i44 & 8;
     if (!i28) {
      i44 = i32 + 8 | 0;
      HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
     }
     i44 = HEAP32[i31 >> 2] | 0;
     HEAP32[i31 >> 2] = i32;
     do {
      if ((i44 | 0) != 0) {
       i46 = i44 + 8 | 0;
       i47 = i46 | 0;
       i48 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
       HEAP32[i47 >> 2] = i48;
       if ((i48 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     HEAP32[i43 >> 2] = i30;
     i44 = HEAP32[i45 >> 2] & -8 | i40 & 7;
     HEAP32[i45 >> 2] = i44;
     HEAP8[i42] = i44 & 255 & -9 | i41;
     if (i28) {
      i49 = i38;
      i50 = i39;
      break;
     }
     i44 = i32 + 8 | 0;
     i29 = i44 | 0;
     i46 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     HEAP32[i29 >> 2] = i46;
     if ((i46 | 0) >= 1) {
      i49 = i38;
      i50 = i39;
      break;
     }
     if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
      i49 = i38;
      i50 = i39;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     i49 = i38;
     i50 = i39;
    } else {
     i44 = i10 + 8 | 0;
     i49 = i44;
     i50 = i44;
    }
   } while (0);
   i44 = __ZNK7WebCore8Position13containerNodeEv(i10) | 0;
   L50 : do {
    if ((HEAP32[i50 >> 2] & 7 | 0) == 0) {
     if ((HEAP32[i44 + 12 >> 2] & 1 | 0) == 0) {
      i51 = 0;
      i52 = 0;
      break;
     }
     i46 = i10 + 4 | 0;
     i29 = HEAP32[i46 >> 2] | 0;
     if ((i29 | 0) <= (__ZN7WebCore14caretMinOffsetEPKNS_4NodeE(i44) | 0)) {
      i51 = 0;
      i52 = 0;
      break;
     }
     if ((i29 | 0) >= (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i44) | 0)) {
      i51 = 0;
      i52 = 0;
      break;
     }
     i29 = HEAP32[(HEAP32[i27 >> 2] | 0) + 16 >> 2] | 0;
     L55 : do {
      if ((i29 | 0) == 0) {
       i35 = 49;
      } else {
       if ((HEAP32[i29 + 12 >> 2] & 20 | 0) != 20) {
        i35 = 49;
        break;
       }
       i48 = i9 | 0;
       HEAP32[i48 >> 2] = i29;
       i47 = i29 + 8 | 0;
       HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
       i47 = __ZN7WebCore17ApplyStyleCommand28removeInlineStyleFromElementEPNS_12EditingStyleEN3WTF10PassRefPtrINS_11HTMLElementEEENS0_22InlineStyleRemovalModeES2_(i1, i2, i9, 2, 0) | 0;
       i53 = HEAP32[i48 >> 2] | 0;
       do {
        if ((i53 | 0) == 0) {
         i35 = 47;
        } else {
         i48 = i53 + 8 | 0;
         i54 = i48 | 0;
         i55 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
         HEAP32[i54 >> 2] = i55;
         if ((i55 | 0) >= 1) {
          i35 = 47;
          break;
         }
         if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
          i35 = 47;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
         if (!i47) {
          i35 = 49;
          break L55;
         }
        }
       } while (0);
       if ((i35 | 0) == 47) {
        if (!i47) {
         i35 = 49;
         break;
        }
       }
       __ZN7WebCore17ApplyStyleCommand23splitTextElementAtStartERKNS_8PositionES3_(i1, i10, i11);
      }
     } while (0);
     if ((i35 | 0) == 49) {
      __ZN7WebCore17ApplyStyleCommand16splitTextAtStartERKNS_8PositionES3_(i1, i10, i11);
     }
     if ((HEAP8[i26] & 1) == 0) {
      i29 = HEAP32[i1 + 164 >> 2] | 0;
      if ((i29 | 0) != 0) {
       i39 = i29 + 8 | 0;
       HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
      }
      i56 = i29;
      i57 = i1 + 168 | 0;
      i58 = i1 + 172 | 0;
     } else {
      i29 = HEAP32[i1 + 96 >> 2] | 0;
      if ((i29 | 0) != 0) {
       i39 = i29 + 8 | 0;
       HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
      }
      i56 = i29;
      i57 = i1 + 100 | 0;
      i58 = i1 + 104 | 0;
     }
     i29 = HEAP32[i58 >> 2] | 0;
     i39 = i29 & 255;
     i38 = HEAP32[i57 >> 2] | 0;
     i32 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = i56;
     do {
      if ((i32 | 0) != 0) {
       i28 = i32 + 8 | 0;
       i41 = i28 | 0;
       i42 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
       HEAP32[i41 >> 2] = i42;
       if ((i42 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     HEAP32[i46 >> 2] = i38;
     i32 = HEAP32[i50 >> 2] & -8 | i29 & 7;
     HEAP32[i50 >> 2] = i32;
     HEAP8[i49] = i32 & 255 & -9 | i39 & 8;
     if ((HEAP8[i26] & 1) == 0) {
      i32 = HEAP32[i1 + 176 >> 2] | 0;
      if ((i32 | 0) != 0) {
       i28 = i32 + 8 | 0;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      }
      i59 = i32;
      i60 = i1 + 180 | 0;
      i61 = i1 + 184 | 0;
     } else {
      i32 = HEAP32[i1 + 108 >> 2] | 0;
      if ((i32 | 0) != 0) {
       i28 = i32 + 8 | 0;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      }
      i59 = i32;
      i60 = i1 + 112 | 0;
      i61 = i1 + 116 | 0;
     }
     i32 = HEAP32[i61 >> 2] | 0;
     i28 = i32 & 255;
     i42 = HEAP32[i60 >> 2] | 0;
     i41 = HEAP32[i31 >> 2] | 0;
     HEAP32[i31 >> 2] = i59;
     do {
      if ((i41 | 0) != 0) {
       i45 = i41 + 8 | 0;
       i40 = i45 | 0;
       i30 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
       HEAP32[i40 >> 2] = i30;
       if ((i30 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
      }
     } while (0);
     HEAP32[i11 + 4 >> 2] = i42;
     i41 = i11 + 8 | 0;
     i39 = i41;
     i29 = HEAP32[i39 >> 2] & -8 | i32 & 7;
     HEAP32[i39 >> 2] = i29;
     HEAP8[i41] = i29 & 255 & -9 | i28 & 8;
     i29 = HEAP32[i27 >> 2] | 0;
     if ((i29 | 0) == 0) {
      i51 = 0;
      i52 = 1;
      break;
     } else {
      i62 = i29;
     }
     L98 : while (1) {
      do {
       if (!((HEAP32[i62 + 12 >> 2] & 4 | 0) == 0 | (i62 | 0) == 0)) {
        i29 = HEAP32[i62 + 44 >> 2] | 0;
        i41 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
        if ((i29 | 0) != (i41 | 0)) {
         if ((HEAP32[i29 + 12 >> 2] | 0) != (HEAP32[i41 + 12 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i29 + 16 >> 2] | 0) != (HEAP32[i41 + 16 >> 2] | 0)) {
          break;
         }
        }
        if (__ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE(i62, 0) | 0) {
         break L98;
        }
       }
      } while (0);
      i47 = HEAP32[i62 + 16 >> 2] | 0;
      if ((i47 | 0) == 0) {
       i51 = 0;
       i52 = 1;
       break L50;
      } else {
       i62 = i47 | 0;
      }
     }
     i28 = HEAP32[i62 + 16 >> 2] | 0;
     if ((i28 | 0) == 0) {
      i51 = 0;
      i52 = 1;
      break;
     }
     i32 = i28 + 8 | 0;
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
     i51 = i28;
     i52 = 1;
    } else {
     i51 = 0;
     i52 = 0;
    }
   } while (0);
   i44 = __ZNK7WebCore8Position13containerNodeEv(i11) | 0;
   i28 = i11 + 8 | 0;
   i32 = i28;
   L110 : do {
    if ((HEAP32[i32 >> 2] & 7 | 0) == 0) {
     if ((HEAP32[i44 + 12 >> 2] & 1 | 0) == 0) {
      i63 = 0;
      i64 = 0;
      break;
     }
     i42 = i11 + 4 | 0;
     i47 = HEAP32[i42 >> 2] | 0;
     if ((i47 | 0) <= (__ZN7WebCore14caretMinOffsetEPKNS_4NodeE(i44) | 0)) {
      i63 = 0;
      i64 = 0;
      break;
     }
     if ((i47 | 0) >= (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i44) | 0)) {
      i63 = 0;
      i64 = 0;
      break;
     }
     i47 = HEAP32[(HEAP32[i31 >> 2] | 0) + 16 >> 2] | 0;
     L115 : do {
      if ((i47 | 0) == 0) {
       i35 = 93;
      } else {
       if ((HEAP32[i47 + 12 >> 2] & 20 | 0) != 20) {
        i35 = 93;
        break;
       }
       i41 = i8 | 0;
       HEAP32[i41 >> 2] = i47;
       i29 = i47 + 8 | 0;
       HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
       i29 = __ZN7WebCore17ApplyStyleCommand28removeInlineStyleFromElementEPNS_12EditingStyleEN3WTF10PassRefPtrINS_11HTMLElementEEENS0_22InlineStyleRemovalModeES2_(i1, i2, i8, 2, 0) | 0;
       i39 = HEAP32[i41 >> 2] | 0;
       do {
        if ((i39 | 0) == 0) {
         i35 = 91;
        } else {
         i41 = i39 + 8 | 0;
         i38 = i41 | 0;
         i46 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
         HEAP32[i38 >> 2] = i46;
         if ((i46 | 0) >= 1) {
          i35 = 91;
          break;
         }
         if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
          i35 = 91;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
         if (!i29) {
          i35 = 93;
          break L115;
         }
        }
       } while (0);
       if ((i35 | 0) == 91) {
        if (!i29) {
         i35 = 93;
         break;
        }
       }
       __ZN7WebCore17ApplyStyleCommand21splitTextElementAtEndERKNS_8PositionES3_(i1, i10, i11);
      }
     } while (0);
     if ((i35 | 0) == 93) {
      __ZN7WebCore17ApplyStyleCommand14splitTextAtEndERKNS_8PositionES3_(i1, i10, i11);
     }
     if ((HEAP8[i26] & 1) == 0) {
      i47 = HEAP32[i1 + 164 >> 2] | 0;
      if ((i47 | 0) != 0) {
       i39 = i47 + 8 | 0;
       HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
      }
      i65 = i47;
      i66 = i1 + 168 | 0;
      i67 = i1 + 172 | 0;
     } else {
      i47 = HEAP32[i1 + 96 >> 2] | 0;
      if ((i47 | 0) != 0) {
       i39 = i47 + 8 | 0;
       HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
      }
      i65 = i47;
      i66 = i1 + 100 | 0;
      i67 = i1 + 104 | 0;
     }
     i47 = HEAP32[i67 >> 2] | 0;
     i39 = i47 & 255;
     i41 = HEAP32[i66 >> 2] | 0;
     i46 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = i65;
     do {
      if ((i46 | 0) != 0) {
       i38 = i46 + 8 | 0;
       i45 = i38 | 0;
       i30 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       HEAP32[i45 >> 2] = i30;
       if ((i30 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
      }
     } while (0);
     HEAP32[i10 + 4 >> 2] = i41;
     i46 = HEAP32[i50 >> 2] & -8 | i47 & 7;
     HEAP32[i50 >> 2] = i46;
     HEAP8[i49] = i46 & 255 & -9 | i39 & 8;
     if ((HEAP8[i26] & 1) == 0) {
      i46 = HEAP32[i1 + 176 >> 2] | 0;
      if ((i46 | 0) != 0) {
       i38 = i46 + 8 | 0;
       HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
      }
      i68 = i46;
      i69 = i1 + 180 | 0;
      i70 = i1 + 184 | 0;
     } else {
      i46 = HEAP32[i1 + 108 >> 2] | 0;
      if ((i46 | 0) != 0) {
       i38 = i46 + 8 | 0;
       HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
      }
      i68 = i46;
      i69 = i1 + 112 | 0;
      i70 = i1 + 116 | 0;
     }
     i46 = HEAP32[i70 >> 2] | 0;
     i38 = i46 & 255;
     i30 = HEAP32[i69 >> 2] | 0;
     i45 = HEAP32[i31 >> 2] | 0;
     HEAP32[i31 >> 2] = i68;
     do {
      if ((i45 | 0) != 0) {
       i40 = i45 + 8 | 0;
       i43 = i40 | 0;
       i53 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
       HEAP32[i43 >> 2] = i53;
       if ((i53 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
      }
     } while (0);
     HEAP32[i42 >> 2] = i30;
     i45 = HEAP32[i32 >> 2] & -8 | i46 & 7;
     HEAP32[i32 >> 2] = i45;
     HEAP8[i28] = i45 & 255 & -9 | i38 & 8;
     i45 = HEAP32[i31 >> 2] | 0;
     if ((i45 | 0) == 0) {
      i63 = 0;
      i64 = 1;
      break;
     } else {
      i71 = i45;
     }
     L158 : while (1) {
      do {
       if (!((HEAP32[i71 + 12 >> 2] & 4 | 0) == 0 | (i71 | 0) == 0)) {
        i45 = HEAP32[i71 + 44 >> 2] | 0;
        i39 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
        if ((i45 | 0) != (i39 | 0)) {
         if ((HEAP32[i45 + 12 >> 2] | 0) != (HEAP32[i39 + 12 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i45 + 16 >> 2] | 0) != (HEAP32[i39 + 16 >> 2] | 0)) {
          break;
         }
        }
        if (__ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE(i71, 0) | 0) {
         break L158;
        }
       }
      } while (0);
      i29 = HEAP32[i71 + 16 >> 2] | 0;
      if ((i29 | 0) == 0) {
       i63 = 0;
       i64 = 1;
       break L110;
      } else {
       i71 = i29 | 0;
      }
     }
     i38 = HEAP32[i71 + 16 >> 2] | 0;
     if ((i38 | 0) == 0) {
      i63 = 0;
      i64 = 1;
      break;
     }
     i46 = i38 + 8 | 0;
     HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
     i63 = i38;
     i64 = 1;
    } else {
     i63 = 0;
     i64 = 0;
    }
   } while (0);
   __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i12, i10, 1);
   HEAP32[i13 >> 2] = 0;
   i44 = __ZNK7WebCore12EditingStyle13textDirectionER16WritingDirection(i2, i13) | 0;
   if (i44) {
    i38 = __ZN7WebCore17ApplyStyleCommand29splitAncestorsWithUnicodeBidiEPNS_4NodeEb16WritingDirection(i1, HEAP32[i27 >> 2] | 0, 1, HEAP32[i13 >> 2] | 0) | 0;
    i46 = __ZN7WebCore17ApplyStyleCommand29splitAncestorsWithUnicodeBidiEPNS_4NodeEb16WritingDirection(i1, HEAP32[i31 >> 2] | 0, 0, HEAP32[i13 >> 2] | 0) | 0;
    i30 = i38 | 0;
    __ZN7WebCore17ApplyStyleCommand33removeEmbeddingUpToEnclosingBlockEPNS_4NodeES2_(i1, HEAP32[i27 >> 2] | 0, i30);
    i42 = i46 | 0;
    __ZN7WebCore17ApplyStyleCommand33removeEmbeddingUpToEnclosingBlockEPNS_4NodeES2_(i1, HEAP32[i31 >> 2] | 0, i42);
    i29 = i14 | 0;
    i39 = i12 | 0;
    i45 = HEAP32[i39 >> 2] | 0;
    HEAP32[i29 >> 2] = i45;
    if ((i45 | 0) != 0) {
     i47 = i45 + 8 | 0;
     HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
    }
    i47 = i14 + 4 | 0;
    i45 = i12 + 4 | 0;
    HEAP32[i47 >> 2] = HEAP32[i45 >> 2];
    i41 = i12 + 8 | 0;
    i40 = i41;
    i53 = HEAP32[i40 >> 2] | 0;
    i43 = i14 + 8 | 0;
    i48 = i43;
    i55 = HEAP32[i48 >> 2] & -8 | i53 & 7;
    HEAP32[i48 >> 2] = i55;
    HEAP8[i43] = i55 & 255 & -9 | i53 & 8;
    do {
     if ((i38 | 0) != 0) {
      if (!(__ZNK7WebCore17ApplyStyleCommand17nodeFullySelectedEPNS_4NodeERKNS_8PositionES5_(0, i30, i12, i11) | 0)) {
       break;
      }
      i53 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i30) | 0;
      i55 = i7 | 0;
      HEAP32[i55 >> 2] = i53;
      if ((i53 | 0) != 0) {
       i54 = i53 + 8 | 0;
       HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
      }
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i15, i7, (__ZNK7WebCore4Node9nodeIndexEv(i30) | 0) + 1 | 0, 0);
      i54 = HEAP32[i55 >> 2] | 0;
      do {
       if ((i54 | 0) != 0) {
        i55 = i54 + 8 | 0;
        i53 = i55 | 0;
        i72 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
        HEAP32[i53 >> 2] = i72;
        if ((i72 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
       }
      } while (0);
      i54 = i15 | 0;
      i55 = HEAP32[i54 >> 2] | 0;
      HEAP32[i54 >> 2] = 0;
      i72 = HEAP32[i29 >> 2] | 0;
      HEAP32[i29 >> 2] = i55;
      do {
       if ((i72 | 0) != 0) {
        i55 = i72 + 8 | 0;
        i53 = i55 | 0;
        i73 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
        HEAP32[i53 >> 2] = i73;
        if ((i73 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
       }
      } while (0);
      HEAP32[i47 >> 2] = HEAP32[i15 + 4 >> 2];
      i72 = HEAP32[i15 + 8 >> 2] | 0;
      i55 = HEAP32[i48 >> 2] & -8 | i72 & 7;
      HEAP32[i48 >> 2] = i55;
      HEAP8[i43] = i55 & 255 & -9 | i72 & 8;
      i72 = HEAP32[i54 >> 2] | 0;
      if ((i72 | 0) == 0) {
       break;
      }
      i55 = i72 + 8 | 0;
      i72 = i55 | 0;
      i73 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
      HEAP32[i72 >> 2] = i73;
      if ((i73 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
     }
    } while (0);
    i43 = i16 | 0;
    i48 = HEAP32[i31 >> 2] | 0;
    HEAP32[i43 >> 2] = i48;
    if ((i48 | 0) != 0) {
     i47 = i48 + 8 | 0;
     HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
    }
    i47 = i16 + 4 | 0;
    i48 = i11 + 4 | 0;
    HEAP32[i47 >> 2] = HEAP32[i48 >> 2];
    i30 = HEAP32[i32 >> 2] | 0;
    i38 = i16 + 8 | 0;
    i55 = i38;
    i73 = HEAP32[i55 >> 2] & -8 | i30 & 7;
    HEAP32[i55 >> 2] = i73;
    HEAP8[i38] = i73 & 255 & -9 | i30 & 8;
    do {
     if ((i46 | 0) != 0) {
      if (!(__ZNK7WebCore17ApplyStyleCommand17nodeFullySelectedEPNS_4NodeERKNS_8PositionES5_(0, i42, i12, i11) | 0)) {
       break;
      }
      i30 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i42) | 0;
      i73 = i6 | 0;
      HEAP32[i73 >> 2] = i30;
      if ((i30 | 0) != 0) {
       i72 = i30 + 8 | 0;
       HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + 1;
      }
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i18, i6, __ZNK7WebCore4Node9nodeIndexEv(i42) | 0, 0);
      i72 = HEAP32[i73 >> 2] | 0;
      do {
       if ((i72 | 0) != 0) {
        i73 = i72 + 8 | 0;
        i30 = i73 | 0;
        i53 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
        HEAP32[i30 >> 2] = i53;
        if ((i53 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i73 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i73 - 8 | 0);
       }
      } while (0);
      __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i17, i18, 1);
      i72 = i17 | 0;
      i54 = HEAP32[i72 >> 2] | 0;
      HEAP32[i72 >> 2] = 0;
      i73 = HEAP32[i43 >> 2] | 0;
      HEAP32[i43 >> 2] = i54;
      do {
       if ((i73 | 0) != 0) {
        i54 = i73 + 8 | 0;
        i53 = i54 | 0;
        i30 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
        HEAP32[i53 >> 2] = i30;
        if ((i30 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
       }
      } while (0);
      HEAP32[i47 >> 2] = HEAP32[i17 + 4 >> 2];
      i73 = HEAP32[i17 + 8 >> 2] | 0;
      i54 = HEAP32[i55 >> 2] & -8 | i73 & 7;
      HEAP32[i55 >> 2] = i54;
      HEAP8[i38] = i54 & 255 & -9 | i73 & 8;
      i73 = HEAP32[i72 >> 2] | 0;
      do {
       if ((i73 | 0) != 0) {
        i54 = i73 + 8 | 0;
        i30 = i54 | 0;
        i53 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
        HEAP32[i30 >> 2] = i53;
        if ((i53 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
       }
      } while (0);
      i73 = HEAP32[i18 >> 2] | 0;
      if ((i73 | 0) == 0) {
       break;
      }
      i72 = i73 + 8 | 0;
      i73 = i72 | 0;
      i54 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
      HEAP32[i73 >> 2] = i54;
      if ((i54 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i72 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i72 - 8 | 0);
     }
    } while (0);
    do {
     if ((HEAP32[i43 >> 2] | 0) == (HEAP32[i39 >> 2] | 0)) {
      do {
       if ((HEAP8[i38] & 8) == 0) {
        i42 = HEAP32[i55 >> 2] & 7;
        if (!((i42 | 0) == 2 | (i42 | 0) == 4)) {
         i35 = 169;
         break;
        }
        i74 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i16) | 0;
       } else {
        i35 = 169;
       }
      } while (0);
      if ((i35 | 0) == 169) {
       i74 = HEAP32[i47 >> 2] | 0;
      }
      do {
       if ((HEAP8[i41] & 8) == 0) {
        i42 = HEAP32[i40 >> 2] & 7;
        if (!((i42 | 0) == 2 | (i42 | 0) == 4)) {
         i35 = 173;
         break;
        }
        i75 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i12) | 0;
       } else {
        i35 = 173;
       }
      } while (0);
      if ((i35 | 0) == 173) {
       i75 = HEAP32[i45 >> 2] | 0;
      }
      if ((i74 | 0) != (i75 | 0)) {
       i35 = 188;
       break;
      }
      i42 = HEAP32[i55 >> 2] | 0;
      if (((HEAP32[i40 >> 2] ^ i42) & 7 | 0) != 0) {
       i35 = 188;
       break;
      }
      if ((HEAP32[i43 >> 2] | 0) != (HEAP32[i31 >> 2] | 0)) {
       i35 = 188;
       break;
      }
      do {
       if ((i42 & 8 | 0) == 0) {
        i46 = i42 & 7;
        if (!((i46 | 0) == 2 | (i46 | 0) == 4)) {
         i35 = 180;
         break;
        }
        i76 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i16) | 0;
       } else {
        i35 = 180;
       }
      } while (0);
      if ((i35 | 0) == 180) {
       i76 = HEAP32[i47 >> 2] | 0;
      }
      do {
       if ((HEAP8[i28] & 8) == 0) {
        i42 = HEAP32[i32 >> 2] & 7;
        if (!((i42 | 0) == 2 | (i42 | 0) == 4)) {
         i35 = 184;
         break;
        }
        i77 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i11) | 0;
       } else {
        i35 = 184;
       }
      } while (0);
      if ((i35 | 0) == 184) {
       i77 = HEAP32[i48 >> 2] | 0;
      }
      if ((i76 | 0) != (i77 | 0)) {
       i35 = 188;
       break;
      }
      if (((HEAP32[i32 >> 2] ^ HEAP32[i55 >> 2]) & 7 | 0) == 0) {
       i78 = 0;
       i79 = 0;
      } else {
       i35 = 188;
      }
     } else {
      i35 = 188;
     }
    } while (0);
    do {
     if ((i35 | 0) == 188) {
      __ZNK7WebCore12EditingStyle4copyEv(i19, i2);
      i55 = i19 | 0;
      i48 = HEAP32[i55 >> 2] | 0;
      HEAP32[i55 >> 2] = 0;
      __ZN7WebCore12EditingStyle29extractAndRemoveTextDirectionEv(i20, i48);
      i55 = i20 | 0;
      i47 = HEAP32[i55 >> 2] | 0;
      HEAP32[i55 >> 2] = 0;
      if ((__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i14, i16) | 0) >= 1) {
       i78 = i47;
       i79 = i48;
       break;
      }
      __ZN7WebCore17ApplyStyleCommand17removeInlineStyleEPNS_12EditingStyleERKNS_8PositionES5_(i1, i47, i14, i16);
      i78 = i47;
      i79 = i48;
     }
    } while (0);
    i48 = HEAP32[i43 >> 2] | 0;
    do {
     if ((i48 | 0) != 0) {
      i47 = i48 + 8 | 0;
      i55 = i47 | 0;
      i40 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
      HEAP32[i55 >> 2] = i40;
      if ((i40 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
     }
    } while (0);
    i48 = HEAP32[i29 >> 2] | 0;
    do {
     if ((i48 | 0) != 0) {
      i43 = i48 + 8 | 0;
      i47 = i43 | 0;
      i40 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
      HEAP32[i47 >> 2] = i40;
      if ((i40 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
     }
    } while (0);
    i48 = (i79 | 0) == 0;
    i80 = i48 ? i2 : i79;
    i81 = i79;
    i82 = i78;
    i83 = i48;
   } else {
    i80 = i2;
    i81 = 0;
    i82 = 0;
    i83 = 1;
   }
   __ZN7WebCore17ApplyStyleCommand17removeInlineStyleEPNS_12EditingStyleERKNS_8PositionES5_(i1, i80, i12, i11);
   if ((HEAP8[i26] & 1) == 0) {
    i48 = HEAP32[i1 + 164 >> 2] | 0;
    if ((i48 | 0) != 0) {
     i29 = i48 + 8 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    }
    i84 = i48;
    i85 = i1 + 168 | 0;
    i86 = i1 + 172 | 0;
   } else {
    i48 = HEAP32[i1 + 96 >> 2] | 0;
    if ((i48 | 0) != 0) {
     i29 = i48 + 8 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    }
    i84 = i48;
    i85 = i1 + 100 | 0;
    i86 = i1 + 104 | 0;
   }
   i48 = HEAP32[i86 >> 2] | 0;
   i29 = i48 & 255;
   i43 = HEAP32[i85 >> 2] | 0;
   i40 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = i84;
   do {
    if ((i40 | 0) != 0) {
     i47 = i40 + 8 | 0;
     i55 = i47 | 0;
     i45 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     HEAP32[i55 >> 2] = i45;
     if ((i45 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
    }
   } while (0);
   i40 = i10 + 4 | 0;
   HEAP32[i40 >> 2] = i43;
   i47 = HEAP32[i50 >> 2] & -8 | i48 & 7;
   HEAP32[i50 >> 2] = i47;
   HEAP8[i49] = i47 & 255 & -9 | i29 & 8;
   if ((HEAP8[i26] & 1) == 0) {
    i47 = HEAP32[i1 + 176 >> 2] | 0;
    if ((i47 | 0) != 0) {
     i45 = i47 + 8 | 0;
     HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
    }
    i87 = i47;
    i88 = i1 + 180 | 0;
    i89 = i1 + 184 | 0;
   } else {
    i47 = HEAP32[i1 + 108 >> 2] | 0;
    if ((i47 | 0) != 0) {
     i45 = i47 + 8 | 0;
     HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
    }
    i87 = i47;
    i88 = i1 + 112 | 0;
    i89 = i1 + 116 | 0;
   }
   i47 = HEAP32[i89 >> 2] | 0;
   i45 = i47 & 255;
   i55 = HEAP32[i88 >> 2] | 0;
   i41 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = i87;
   do {
    if ((i41 | 0) != 0) {
     i38 = i41 + 8 | 0;
     i39 = i38 | 0;
     i42 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     HEAP32[i39 >> 2] = i42;
     if ((i42 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    }
   } while (0);
   i41 = i11 + 4 | 0;
   HEAP32[i41 >> 2] = i55;
   i29 = HEAP32[i32 >> 2] & -8 | i47 & 7;
   HEAP32[i32 >> 2] = i29;
   HEAP8[i28] = i29 & 255 & -9 | i45 & 8;
   i29 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i29 | 0) == 0) {
     i90 = i82;
     i91 = i81;
    } else {
     if ((HEAP32[i29 + 12 >> 2] & 256 | 0) == 0) {
      i90 = i82;
      i91 = i81;
      break;
     }
     i48 = HEAP32[i31 >> 2] | 0;
     if ((i48 | 0) == 0) {
      i90 = i82;
      i91 = i81;
      break;
     }
     if ((HEAP32[i48 + 12 >> 2] & 256 | 0) == 0) {
      i90 = i82;
      i91 = i81;
      break;
     }
     do {
      if (i52) {
       if (!(__ZN7WebCore17ApplyStyleCommand33mergeStartWithPreviousIfIdenticalERKNS_8PositionES3_(i1, i10, i11) | 0)) {
        break;
       }
       if ((HEAP8[i26] & 1) == 0) {
        i48 = HEAP32[i1 + 164 >> 2] | 0;
        if ((i48 | 0) != 0) {
         i43 = i48 + 8 | 0;
         HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
        }
        i92 = i48;
        i93 = i1 + 168 | 0;
        i94 = i1 + 172 | 0;
       } else {
        i48 = HEAP32[i1 + 96 >> 2] | 0;
        if ((i48 | 0) != 0) {
         i43 = i48 + 8 | 0;
         HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
        }
        i92 = i48;
        i93 = i1 + 100 | 0;
        i94 = i1 + 104 | 0;
       }
       i48 = HEAP32[i94 >> 2] | 0;
       i43 = i48 & 255;
       i38 = HEAP32[i93 >> 2] | 0;
       i42 = HEAP32[i27 >> 2] | 0;
       HEAP32[i27 >> 2] = i92;
       do {
        if ((i42 | 0) != 0) {
         i39 = i42 + 8 | 0;
         i46 = i39 | 0;
         i72 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
         HEAP32[i46 >> 2] = i72;
         if ((i72 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
        }
       } while (0);
       HEAP32[i40 >> 2] = i38;
       i42 = HEAP32[i50 >> 2] & -8 | i48 & 7;
       HEAP32[i50 >> 2] = i42;
       HEAP8[i49] = i42 & 255 & -9 | i43 & 8;
       if ((HEAP8[i26] & 1) == 0) {
        i42 = HEAP32[i1 + 176 >> 2] | 0;
        if ((i42 | 0) != 0) {
         i39 = i42 + 8 | 0;
         HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
        }
        i95 = i42;
        i96 = i1 + 180 | 0;
        i97 = i1 + 184 | 0;
       } else {
        i42 = HEAP32[i1 + 108 >> 2] | 0;
        if ((i42 | 0) != 0) {
         i39 = i42 + 8 | 0;
         HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
        }
        i95 = i42;
        i96 = i1 + 112 | 0;
        i97 = i1 + 116 | 0;
       }
       i42 = HEAP32[i97 >> 2] | 0;
       i39 = i42 & 255;
       i72 = HEAP32[i96 >> 2] | 0;
       i46 = HEAP32[i31 >> 2] | 0;
       HEAP32[i31 >> 2] = i95;
       do {
        if ((i46 | 0) != 0) {
         i54 = i46 + 8 | 0;
         i73 = i54 | 0;
         i53 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
         HEAP32[i73 >> 2] = i53;
         if ((i53 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
        }
       } while (0);
       HEAP32[i41 >> 2] = i72;
       i46 = HEAP32[i32 >> 2] & -8 | i42 & 7;
       HEAP32[i32 >> 2] = i46;
       HEAP8[i28] = i46 & 255 & -9 | i39 & 8;
      }
     } while (0);
     if (i64) {
      __ZN7WebCore17ApplyStyleCommand27mergeEndWithNextIfIdenticalERKNS_8PositionES3_(i1, i10, i11) | 0;
      if ((HEAP8[i26] & 1) == 0) {
       i46 = HEAP32[i1 + 164 >> 2] | 0;
       if ((i46 | 0) != 0) {
        i43 = i46 + 8 | 0;
        HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
       }
       i98 = i46;
       i99 = i1 + 168 | 0;
       i100 = i1 + 172 | 0;
      } else {
       i46 = HEAP32[i1 + 96 >> 2] | 0;
       if ((i46 | 0) != 0) {
        i43 = i46 + 8 | 0;
        HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
       }
       i98 = i46;
       i99 = i1 + 100 | 0;
       i100 = i1 + 104 | 0;
      }
      i46 = HEAP32[i100 >> 2] | 0;
      i43 = i46 & 255;
      i48 = HEAP32[i99 >> 2] | 0;
      i38 = HEAP32[i27 >> 2] | 0;
      HEAP32[i27 >> 2] = i98;
      do {
       if ((i38 | 0) != 0) {
        i54 = i38 + 8 | 0;
        i53 = i54 | 0;
        i73 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
        HEAP32[i53 >> 2] = i73;
        if ((i73 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
       }
      } while (0);
      HEAP32[i40 >> 2] = i48;
      i38 = HEAP32[i50 >> 2] & -8 | i46 & 7;
      HEAP32[i50 >> 2] = i38;
      HEAP8[i49] = i38 & 255 & -9 | i43 & 8;
      if ((HEAP8[i26] & 1) == 0) {
       i38 = HEAP32[i1 + 176 >> 2] | 0;
       if ((i38 | 0) != 0) {
        i54 = i38 + 8 | 0;
        HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
       }
       i101 = i38;
       i102 = i1 + 180 | 0;
       i103 = i1 + 184 | 0;
      } else {
       i38 = HEAP32[i1 + 108 >> 2] | 0;
       if ((i38 | 0) != 0) {
        i54 = i38 + 8 | 0;
        HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
       }
       i101 = i38;
       i102 = i1 + 112 | 0;
       i103 = i1 + 116 | 0;
      }
      i38 = HEAP32[i103 >> 2] | 0;
      i54 = i38 & 255;
      i73 = HEAP32[i102 >> 2] | 0;
      i53 = HEAP32[i31 >> 2] | 0;
      HEAP32[i31 >> 2] = i101;
      do {
       if ((i53 | 0) != 0) {
        i30 = i53 + 8 | 0;
        i104 = i30 | 0;
        i105 = (HEAP32[i104 >> 2] | 0) - 1 | 0;
        HEAP32[i104 >> 2] = i105;
        if ((i105 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
       }
      } while (0);
      HEAP32[i41 >> 2] = i73;
      i53 = HEAP32[i32 >> 2] & -8 | i38 & 7;
      HEAP32[i32 >> 2] = i53;
      HEAP8[i28] = i53 & 255 & -9 | i54 & 8;
     }
     __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i25 >> 2] | 0);
     i53 = (i2 | 0) == 0;
     if (!i53) {
      i43 = i2 | 0;
      HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
     }
     do {
      if (i44) {
       i43 = HEAP32[i27 >> 2] | 0;
       i46 = __ZN7WebCoreL24highestEmbeddingAncestorEPNS_4NodeES1_(i43, __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i43, 1) | 0) | 0;
       i43 = HEAP32[i31 >> 2] | 0;
       i48 = __ZN7WebCoreL24highestEmbeddingAncestorEPNS_4NodeES1_(i43, __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i43, 1) | 0) | 0;
       i43 = (i46 | 0) != 0;
       i30 = (i48 | 0) == 0;
       if (i30 & (i43 ^ 1)) {
        i106 = i2;
        i107 = i82;
        i108 = i81;
        break;
       }
       do {
        if (i43) {
         i105 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i46) | 0;
         i104 = i5 | 0;
         HEAP32[i104 >> 2] = i105;
         if ((i105 | 0) != 0) {
          i109 = i105 + 8 | 0;
          HEAP32[i109 >> 2] = (HEAP32[i109 >> 2] | 0) + 1;
         }
         __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i21, i5, (__ZNK7WebCore4Node9nodeIndexEv(i46) | 0) + 1 | 0, 0);
         i109 = HEAP32[i104 >> 2] | 0;
         if ((i109 | 0) == 0) {
          break;
         }
         i104 = i109 + 8 | 0;
         i109 = i104 | 0;
         i105 = (HEAP32[i109 >> 2] | 0) - 1 | 0;
         HEAP32[i109 >> 2] = i105;
         if ((i105 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i104 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i104 - 8 | 0);
        } else {
         i104 = HEAP32[i27 >> 2] | 0;
         HEAP32[i21 >> 2] = i104;
         if ((i104 | 0) != 0) {
          i105 = i104 + 8 | 0;
          HEAP32[i105 >> 2] = (HEAP32[i105 >> 2] | 0) + 1;
         }
         HEAP32[i21 + 4 >> 2] = HEAP32[i40 >> 2];
         i105 = HEAP32[i50 >> 2] | 0;
         i104 = i21 + 8 | 0;
         i109 = i104;
         i110 = HEAP32[i109 >> 2] & -8 | i105 & 7;
         HEAP32[i109 >> 2] = i110;
         HEAP8[i104] = i110 & 255 & -9 | i105 & 8;
        }
       } while (0);
       do {
        if (i30) {
         i46 = HEAP32[i31 >> 2] | 0;
         HEAP32[i22 >> 2] = i46;
         if ((i46 | 0) != 0) {
          i43 = i46 + 8 | 0;
          HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
         }
         HEAP32[i22 + 4 >> 2] = HEAP32[i41 >> 2];
         i43 = HEAP32[i32 >> 2] | 0;
         i46 = i22 + 8 | 0;
         i39 = i46;
         i42 = HEAP32[i39 >> 2] & -8 | i43 & 7;
         HEAP32[i39 >> 2] = i42;
         HEAP8[i46] = i42 & 255 & -9 | i43 & 8;
        } else {
         i43 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i48) | 0;
         i42 = i4 | 0;
         HEAP32[i42 >> 2] = i43;
         if ((i43 | 0) != 0) {
          i46 = i43 + 8 | 0;
          HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
         }
         __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i22, i4, __ZNK7WebCore4Node9nodeIndexEv(i48) | 0, 0);
         i46 = HEAP32[i42 >> 2] | 0;
         if ((i46 | 0) == 0) {
          break;
         }
         i42 = i46 + 8 | 0;
         i46 = i42 | 0;
         i43 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
         HEAP32[i46 >> 2] = i43;
         if ((i43 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
        }
       } while (0);
       if ((i82 | 0) == 0) {
        __ZNK7WebCore12EditingStyle4copyEv(i23, i2);
        i48 = i23 | 0;
        i30 = HEAP32[i48 >> 2] | 0;
        HEAP32[i48 >> 2] = 0;
        do {
         if (!i83) {
          i42 = i81 | 0;
          i43 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
          if ((i43 | 0) == 0) {
           __ZN7WebCore12EditingStyleD1Ev(i81);
           __ZN3WTF8fastFreeEPv(i81);
          } else {
           HEAP32[i42 >> 2] = i43;
          }
          i43 = HEAP32[i48 >> 2] | 0;
          if ((i43 | 0) == 0) {
           break;
          }
          i42 = i43 | 0;
          i46 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
          if ((i46 | 0) == 0) {
           __ZN7WebCore12EditingStyleD1Ev(i43);
           __ZN3WTF8fastFreeEPv(i43);
           break;
          } else {
           HEAP32[i42 >> 2] = i46;
           break;
          }
         }
        } while (0);
        __ZN7WebCore12EditingStyle29extractAndRemoveTextDirectionEv(i24, i30);
        i48 = i24 | 0;
        i46 = HEAP32[i48 >> 2] | 0;
        HEAP32[i48 >> 2] = 0;
        i111 = i46;
        i112 = i30;
       } else {
        i111 = i82;
        i112 = i81;
       }
       __ZN7WebCore17ApplyStyleCommand27fixRangeAndApplyInlineStyleEPNS_12EditingStyleERKNS_8PositionES5_(i1, i111, i21, i22);
       if ((i112 | 0) != 0) {
        i46 = i112 | 0;
        HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
       }
       do {
        if (!i53) {
         i46 = i2 | 0;
         i48 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
         if ((i48 | 0) == 0) {
          __ZN7WebCore12EditingStyleD1Ev(i2);
          __ZN3WTF8fastFreeEPv(i2);
          break;
         } else {
          HEAP32[i46 >> 2] = i48;
          break;
         }
        }
       } while (0);
       i30 = HEAP32[i22 >> 2] | 0;
       do {
        if ((i30 | 0) != 0) {
         i48 = i30 + 8 | 0;
         i46 = i48 | 0;
         i42 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
         HEAP32[i46 >> 2] = i42;
         if ((i42 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
        }
       } while (0);
       i30 = HEAP32[i21 >> 2] | 0;
       if ((i30 | 0) == 0) {
        i106 = i112;
        i107 = i111;
        i108 = i112;
        break;
       }
       i48 = i30 + 8 | 0;
       i30 = i48 | 0;
       i42 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i42;
       if ((i42 | 0) >= 1) {
        i106 = i112;
        i107 = i111;
        i108 = i112;
        break;
       }
       if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
        i106 = i112;
        i107 = i111;
        i108 = i112;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
       i106 = i112;
       i107 = i111;
       i108 = i112;
      } else {
       i106 = i2;
       i107 = i82;
       i108 = i81;
      }
     } while (0);
     __ZN7WebCore17ApplyStyleCommand27fixRangeAndApplyInlineStyleEPNS_12EditingStyleERKNS_8PositionES5_(i1, i106, i10, i11);
     __ZN7WebCore17ApplyStyleCommand30cleanupUnstyledAppleStyleSpansEPNS_13ContainerNodeE(i1, i51);
     if ((i63 | 0) != (i51 | 0)) {
      __ZN7WebCore17ApplyStyleCommand30cleanupUnstyledAppleStyleSpansEPNS_13ContainerNodeE(i1, i63);
     }
     if ((i106 | 0) == 0) {
      i90 = i107;
      i91 = i108;
      break;
     }
     i53 = i106 | 0;
     i54 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
     if ((i54 | 0) == 0) {
      __ZN7WebCore12EditingStyleD1Ev(i106);
      __ZN3WTF8fastFreeEPv(i106);
      i90 = i107;
      i91 = i108;
      break;
     } else {
      HEAP32[i53 >> 2] = i54;
      i90 = i107;
      i91 = i108;
      break;
     }
    }
   } while (0);
   do {
    if ((i90 | 0) != 0) {
     i32 = i90 | 0;
     i41 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i41 | 0) == 0) {
      __ZN7WebCore12EditingStyleD1Ev(i90);
      __ZN3WTF8fastFreeEPv(i90);
      break;
     } else {
      HEAP32[i32 >> 2] = i41;
      break;
     }
    }
   } while (0);
   do {
    if ((i91 | 0) != 0) {
     i41 = i91 | 0;
     i32 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
     if ((i32 | 0) == 0) {
      __ZN7WebCore12EditingStyleD1Ev(i91);
      __ZN3WTF8fastFreeEPv(i91);
      break;
     } else {
      HEAP32[i41 >> 2] = i32;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i12 >> 2] | 0;
   if ((i32 | 0) == 0) {
    i33 = i63;
    i34 = i51;
    i35 = 340;
    break;
   }
   i41 = i32 + 8 | 0;
   i32 = i41 | 0;
   i40 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   HEAP32[i32 >> 2] = i40;
   if ((i40 | 0) >= 1) {
    i33 = i63;
    i34 = i51;
    i35 = 340;
    break;
   }
   if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
    i33 = i63;
    i34 = i51;
    i35 = 340;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
   i33 = i63;
   i34 = i51;
   i35 = 340;
  }
 } while (0);
 do {
  if ((i35 | 0) == 340) {
   i51 = HEAP32[i31 >> 2] | 0;
   if ((i51 | 0) == 0) {
    i36 = i34;
    i37 = i33;
    break;
   }
   i63 = i51 + 8 | 0;
   i51 = i63 | 0;
   i12 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
   HEAP32[i51 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    i36 = i34;
    i37 = i33;
    break;
   }
   if ((HEAP32[i63 + 8 >> 2] | 0) != 0) {
    i36 = i34;
    i37 = i33;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i63 - 8 | 0);
   i36 = i34;
   i37 = i33;
  }
 } while (0);
 i33 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i27 = i33 + 8 | 0;
   i34 = i27 | 0;
   i31 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i31;
   if ((i31 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
  }
 } while (0);
 do {
  if ((i37 | 0) != 0) {
   i33 = i37 + 8 | 0;
   i27 = i33 | 0;
   i31 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   HEAP32[i27 >> 2] = i31;
   if ((i31 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
  }
 } while (0);
 if ((i36 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i37 = i36 + 8 | 0;
 i36 = i37 | 0;
 i33 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
 HEAP32[i36 >> 2] = i33;
 if ((i33 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17ApplyStyleCommand28applyRelativeFontStyleChangeEPNS_12EditingStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, d93 = +0, d94 = +0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, d102 = +0, d103 = +0, d104 = +0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 64 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 96 | 0;
 i12 = i3 + 104 | 0;
 i13 = i3 + 120 | 0;
 i14 = i3 + 128 | 0;
 i15 = i3 + 136 | 0;
 i16 = i3 + 144 | 0;
 i17 = i3 + 152 | 0;
 i18 = i3 + 160 | 0;
 i19 = i3 + 168 | 0;
 i20 = i3 + 176 | 0;
 i21 = i3 + 184 | 0;
 i22 = i3 + 192 | 0;
 i23 = i3 + 200 | 0;
 i24 = i3 + 208 | 0;
 i25 = i3 + 216 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i26 = i2 + 12 | 0;
 if (+HEAPF32[i26 >> 2] == +HEAPF32[__ZN7WebCore12EditingStyle11NoFontDeltaE >> 2]) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 188 | 0;
 i27 = i6 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  i28 = HEAP32[i1 + 164 >> 2] | 0;
  HEAP32[i27 >> 2] = i28;
  if ((i28 | 0) == 0) {
   i29 = i6 + 8 | 0;
   i30 = 0;
   i31 = i29;
   i32 = i29;
  } else {
   i29 = i28 + 8 | 0;
   HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   i29 = i6 + 8 | 0;
   i28 = i29;
   i30 = HEAP32[i28 >> 2] & -8;
   i31 = i29;
   i32 = i28;
  }
  HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 168 >> 2];
  i28 = HEAP32[i1 + 172 >> 2] | 0;
  i29 = i30 | i28 & 7;
  HEAP32[i32 >> 2] = i29;
  HEAP8[i31] = i29 & 255 & -9 | i28 & 8;
 } else {
  i28 = HEAP32[i1 + 96 >> 2] | 0;
  HEAP32[i27 >> 2] = i28;
  if ((i28 | 0) == 0) {
   i29 = i6 + 8 | 0;
   i33 = 0;
   i34 = i29;
   i35 = i29;
  } else {
   i29 = i28 + 8 | 0;
   HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   i29 = i6 + 8 | 0;
   i28 = i29;
   i33 = HEAP32[i28 >> 2] & -8;
   i34 = i29;
   i35 = i28;
  }
  HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
  i28 = HEAP32[i1 + 104 >> 2] | 0;
  i29 = i33 | i28 & 7;
  HEAP32[i35 >> 2] = i29;
  HEAP8[i34] = i29 & 255 & -9 | i28 & 8;
 }
 i28 = i7 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  i29 = HEAP32[i1 + 176 >> 2] | 0;
  HEAP32[i28 >> 2] = i29;
  if ((i29 | 0) != 0) {
   i34 = i29 + 8 | 0;
   HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
  }
  HEAP32[i7 + 4 >> 2] = HEAP32[i1 + 180 >> 2];
  i34 = HEAP32[i1 + 184 >> 2] | 0;
  i29 = i7 + 8 | 0;
  i35 = i29;
  i33 = HEAP32[i35 >> 2] & -8 | i34 & 7;
  HEAP32[i35 >> 2] = i33;
  HEAP8[i29] = i33 & 255 & -9 | i34 & 8;
 } else {
  i34 = HEAP32[i1 + 108 >> 2] | 0;
  HEAP32[i28 >> 2] = i34;
  if ((i34 | 0) != 0) {
   i33 = i34 + 8 | 0;
   HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
  }
  HEAP32[i7 + 4 >> 2] = HEAP32[i1 + 112 >> 2];
  i33 = HEAP32[i1 + 116 >> 2] | 0;
  i34 = i7 + 8 | 0;
  i29 = i34;
  i35 = HEAP32[i29 >> 2] & -8 | i33 & 7;
  HEAP32[i29 >> 2] = i35;
  HEAP8[i34] = i35 & 255 & -9 | i33 & 8;
 }
 do {
  if ((__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i7, i6) | 0) < 0) {
   i33 = HEAP32[i27 >> 2] | 0;
   i35 = (i33 | 0) == 0;
   if (!i35) {
    i34 = i33 + 8 | 0;
    HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
   }
   i34 = i6 + 4 | 0;
   i29 = HEAP32[i34 >> 2] | 0;
   i31 = i6 + 8 | 0;
   i32 = i31;
   i30 = HEAP32[i32 >> 2] | 0;
   i36 = i30 & 8;
   i37 = HEAP32[i28 >> 2] | 0;
   if ((i37 | 0) != 0) {
    i38 = i37 + 8 | 0;
    HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
   }
   i38 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = i37;
   do {
    if ((i38 | 0) != 0) {
     i37 = i38 + 8 | 0;
     i39 = i37 | 0;
     i40 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     HEAP32[i39 >> 2] = i40;
     if ((i40 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
    }
   } while (0);
   i38 = i7 + 4 | 0;
   HEAP32[i34 >> 2] = HEAP32[i38 >> 2];
   i37 = i7 + 8 | 0;
   i40 = i37;
   i39 = HEAP32[i40 >> 2] | 0;
   i41 = HEAP32[i32 >> 2] & -8 | i39 & 7;
   HEAP32[i32 >> 2] = i41;
   HEAP8[i31] = i41 & 255 & -9 | i39 & 8;
   if (!i35) {
    i39 = i33 + 8 | 0;
    HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
   }
   i39 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = i33;
   do {
    if ((i39 | 0) != 0) {
     i41 = i39 + 8 | 0;
     i42 = i41 | 0;
     i43 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
     HEAP32[i42 >> 2] = i43;
     if ((i43 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
    }
   } while (0);
   HEAP32[i38 >> 2] = i29;
   i39 = HEAP32[i40 >> 2] & -8 | i30 & 7;
   HEAP32[i40 >> 2] = i39;
   HEAP8[i37] = i39 & 255 & -9 | i36;
   if (i35) {
    break;
   }
   i39 = i33 + 8 | 0;
   i31 = i39 | 0;
   i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   HEAP32[i31 >> 2] = i32;
   if ((i32 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
  }
 } while (0);
 i39 = HEAP32[i27 >> 2] | 0;
 if ((HEAP32[i39 + 12 >> 2] & 1 | 0) == 0) {
  i44 = i39;
 } else {
  __ZN7WebCore17ApplyStyleCommand18joinChildTextNodesEPNS_4NodeERKNS_8PositionES5_(i1, HEAP32[i39 + 16 >> 2] | 0, i6, i7);
  if ((HEAP8[i2] & 1) == 0) {
   i39 = HEAP32[i1 + 164 >> 2] | 0;
   if ((i39 | 0) != 0) {
    i32 = i39 + 8 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   }
   i45 = i39;
   i46 = i1 + 168 | 0;
   i47 = i1 + 172 | 0;
  } else {
   i39 = HEAP32[i1 + 96 >> 2] | 0;
   if ((i39 | 0) != 0) {
    i32 = i39 + 8 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   }
   i45 = i39;
   i46 = i1 + 100 | 0;
   i47 = i1 + 104 | 0;
  }
  i39 = HEAP32[i47 >> 2] | 0;
  i47 = i39 & 255;
  i32 = HEAP32[i46 >> 2] | 0;
  i46 = HEAP32[i27 >> 2] | 0;
  HEAP32[i27 >> 2] = i45;
  do {
   if ((i46 | 0) != 0) {
    i45 = i46 + 8 | 0;
    i31 = i45 | 0;
    i34 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
    HEAP32[i31 >> 2] = i34;
    if ((i34 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
   }
  } while (0);
  HEAP32[i6 + 4 >> 2] = i32;
  i32 = i6 + 8 | 0;
  i46 = i32;
  i45 = HEAP32[i46 >> 2] & -8 | i39 & 7;
  HEAP32[i46 >> 2] = i45;
  HEAP8[i32] = i45 & 255 & -9 | i47 & 8;
  if ((HEAP8[i2] & 1) == 0) {
   i47 = HEAP32[i1 + 176 >> 2] | 0;
   if ((i47 | 0) != 0) {
    i45 = i47 + 8 | 0;
    HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
   }
   i48 = i47;
   i49 = i1 + 180 | 0;
   i50 = i1 + 184 | 0;
  } else {
   i47 = HEAP32[i1 + 108 >> 2] | 0;
   if ((i47 | 0) != 0) {
    i45 = i47 + 8 | 0;
    HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
   }
   i48 = i47;
   i49 = i1 + 112 | 0;
   i50 = i1 + 116 | 0;
  }
  i47 = HEAP32[i50 >> 2] | 0;
  i50 = i47 & 255;
  i45 = HEAP32[i49 >> 2] | 0;
  i49 = HEAP32[i28 >> 2] | 0;
  HEAP32[i28 >> 2] = i48;
  do {
   if ((i49 | 0) != 0) {
    i48 = i49 + 8 | 0;
    i32 = i48 | 0;
    i46 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
    HEAP32[i32 >> 2] = i46;
    if ((i46 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
   }
  } while (0);
  HEAP32[i7 + 4 >> 2] = i45;
  i45 = i7 + 8 | 0;
  i49 = i45;
  i48 = HEAP32[i49 >> 2] & -8 | i47 & 7;
  HEAP32[i49 >> 2] = i48;
  HEAP8[i45] = i48 & 255 & -9 | i50 & 8;
  i44 = HEAP32[i27 >> 2] | 0;
 }
 do {
  if ((i44 | 0) == 0) {
   i51 = 308;
  } else {
   i50 = HEAP32[i28 >> 2] | 0;
   if ((i50 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[i50 + 12 >> 2] & 1 | 0) == 0) {
     i52 = i44;
     i51 = 89;
    } else {
     i48 = HEAP32[i50 + 16 >> 2] | 0;
     if ((HEAP32[i44 + 16 >> 2] | 0) == (i48 | 0)) {
      break;
     }
     __ZN7WebCore17ApplyStyleCommand18joinChildTextNodesEPNS_4NodeERKNS_8PositionES5_(i1, i48 | 0, i6, i7);
     if ((HEAP8[i2] & 1) == 0) {
      i48 = HEAP32[i1 + 164 >> 2] | 0;
      if ((i48 | 0) != 0) {
       i45 = i48 + 8 | 0;
       HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
      }
      i53 = i48;
      i54 = i1 + 168 | 0;
      i55 = i1 + 172 | 0;
     } else {
      i48 = HEAP32[i1 + 96 >> 2] | 0;
      if ((i48 | 0) != 0) {
       i45 = i48 + 8 | 0;
       HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
      }
      i53 = i48;
      i54 = i1 + 100 | 0;
      i55 = i1 + 104 | 0;
     }
     i48 = HEAP32[i55 >> 2] | 0;
     i45 = i48 & 255;
     i49 = HEAP32[i54 >> 2] | 0;
     i47 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = i53;
     do {
      if ((i47 | 0) != 0) {
       i46 = i47 + 8 | 0;
       i32 = i46 | 0;
       i39 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
       HEAP32[i32 >> 2] = i39;
       if ((i39 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     HEAP32[i6 + 4 >> 2] = i49;
     i47 = i6 + 8 | 0;
     i46 = i47;
     i39 = HEAP32[i46 >> 2] & -8 | i48 & 7;
     HEAP32[i46 >> 2] = i39;
     HEAP8[i47] = i39 & 255 & -9 | i45 & 8;
     if ((HEAP8[i2] & 1) == 0) {
      i39 = HEAP32[i1 + 176 >> 2] | 0;
      if ((i39 | 0) != 0) {
       i47 = i39 + 8 | 0;
       HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
      }
      i56 = i39;
      i57 = i1 + 180 | 0;
      i58 = i1 + 184 | 0;
     } else {
      i39 = HEAP32[i1 + 108 >> 2] | 0;
      if ((i39 | 0) != 0) {
       i47 = i39 + 8 | 0;
       HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
      }
      i56 = i39;
      i57 = i1 + 112 | 0;
      i58 = i1 + 116 | 0;
     }
     i39 = HEAP32[i58 >> 2] | 0;
     i47 = i39 & 255;
     i46 = HEAP32[i57 >> 2] | 0;
     i32 = HEAP32[i28 >> 2] | 0;
     HEAP32[i28 >> 2] = i56;
     do {
      if ((i32 | 0) != 0) {
       i34 = i32 + 8 | 0;
       i31 = i34 | 0;
       i41 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       HEAP32[i31 >> 2] = i41;
       if ((i41 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
      }
     } while (0);
     HEAP32[i7 + 4 >> 2] = i46;
     i32 = i7 + 8 | 0;
     i45 = i32;
     i48 = HEAP32[i45 >> 2] & -8 | i39 & 7;
     HEAP32[i45 >> 2] = i48;
     HEAP8[i32] = i48 & 255 & -9 | i47 & 8;
     i52 = HEAP32[i27 >> 2] | 0;
     i51 = 89;
    }
   } while (0);
   if ((i51 | 0) == 89) {
    if ((i52 | 0) == 0) {
     i51 = 308;
     break;
    }
   }
   if ((HEAP32[i28 >> 2] | 0) == 0) {
    break;
   }
   i50 = __ZNK7WebCore8Position13containerNodeEv(i6) | 0;
   i33 = i6 + 8 | 0;
   i35 = i33;
   do {
    if ((HEAP32[i35 >> 2] & 7 | 0) == 0) {
     if ((HEAP32[i50 + 12 >> 2] & 1 | 0) == 0) {
      break;
     }
     i36 = i6 + 4 | 0;
     i37 = HEAP32[i36 >> 2] | 0;
     if ((i37 | 0) <= (__ZN7WebCore14caretMinOffsetEPKNS_4NodeE(i50) | 0)) {
      break;
     }
     if ((i37 | 0) >= (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i50) | 0)) {
      break;
     }
     __ZN7WebCore17ApplyStyleCommand16splitTextAtStartERKNS_8PositionES3_(i1, i6, i7);
     if ((HEAP8[i2] & 1) == 0) {
      i37 = HEAP32[i1 + 164 >> 2] | 0;
      if ((i37 | 0) != 0) {
       i40 = i37 + 8 | 0;
       HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
      }
      i59 = i37;
      i60 = i1 + 168 | 0;
      i61 = i1 + 172 | 0;
     } else {
      i37 = HEAP32[i1 + 96 >> 2] | 0;
      if ((i37 | 0) != 0) {
       i40 = i37 + 8 | 0;
       HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
      }
      i59 = i37;
      i60 = i1 + 100 | 0;
      i61 = i1 + 104 | 0;
     }
     i37 = HEAP32[i61 >> 2] | 0;
     i40 = i37 & 255;
     i30 = HEAP32[i60 >> 2] | 0;
     i29 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = i59;
     do {
      if ((i29 | 0) != 0) {
       i38 = i29 + 8 | 0;
       i48 = i38 | 0;
       i32 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
       HEAP32[i48 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
      }
     } while (0);
     HEAP32[i36 >> 2] = i30;
     i29 = HEAP32[i35 >> 2] & -8 | i37 & 7;
     HEAP32[i35 >> 2] = i29;
     HEAP8[i33] = i29 & 255 & -9 | i40 & 8;
     if ((HEAP8[i2] & 1) == 0) {
      i29 = HEAP32[i1 + 176 >> 2] | 0;
      if ((i29 | 0) != 0) {
       i47 = i29 + 8 | 0;
       HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
      }
      i62 = i29;
      i63 = i1 + 180 | 0;
      i64 = i1 + 184 | 0;
     } else {
      i29 = HEAP32[i1 + 108 >> 2] | 0;
      if ((i29 | 0) != 0) {
       i47 = i29 + 8 | 0;
       HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
      }
      i62 = i29;
      i63 = i1 + 112 | 0;
      i64 = i1 + 116 | 0;
     }
     i29 = HEAP32[i64 >> 2] | 0;
     i47 = i29 & 255;
     i39 = HEAP32[i63 >> 2] | 0;
     i46 = HEAP32[i28 >> 2] | 0;
     HEAP32[i28 >> 2] = i62;
     do {
      if ((i46 | 0) != 0) {
       i38 = i46 + 8 | 0;
       i32 = i38 | 0;
       i48 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
       HEAP32[i32 >> 2] = i48;
       if ((i48 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
      }
     } while (0);
     HEAP32[i7 + 4 >> 2] = i39;
     i46 = i7 + 8 | 0;
     i40 = i46;
     i37 = HEAP32[i40 >> 2] & -8 | i29 & 7;
     HEAP32[i40 >> 2] = i37;
     HEAP8[i46] = i37 & 255 & -9 | i47 & 8;
    }
   } while (0);
   i50 = __ZNK7WebCore8Position13containerNodeEv(i7) | 0;
   i37 = i7 + 8 | 0;
   i46 = i37;
   do {
    if ((HEAP32[i46 >> 2] & 7 | 0) == 0) {
     if ((HEAP32[i50 + 12 >> 2] & 1 | 0) == 0) {
      break;
     }
     i40 = i7 + 4 | 0;
     i30 = HEAP32[i40 >> 2] | 0;
     if ((i30 | 0) <= (__ZN7WebCore14caretMinOffsetEPKNS_4NodeE(i50) | 0)) {
      break;
     }
     if ((i30 | 0) >= (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i50) | 0)) {
      break;
     }
     __ZN7WebCore17ApplyStyleCommand14splitTextAtEndERKNS_8PositionES3_(i1, i6, i7);
     if ((HEAP8[i2] & 1) == 0) {
      i30 = HEAP32[i1 + 164 >> 2] | 0;
      if ((i30 | 0) != 0) {
       i36 = i30 + 8 | 0;
       HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
      }
      i65 = i30;
      i66 = i1 + 168 | 0;
      i67 = i1 + 172 | 0;
     } else {
      i30 = HEAP32[i1 + 96 >> 2] | 0;
      if ((i30 | 0) != 0) {
       i36 = i30 + 8 | 0;
       HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
      }
      i65 = i30;
      i66 = i1 + 100 | 0;
      i67 = i1 + 104 | 0;
     }
     i30 = HEAP32[i67 >> 2] | 0;
     i36 = i30 & 255;
     i38 = HEAP32[i66 >> 2] | 0;
     i48 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = i65;
     do {
      if ((i48 | 0) != 0) {
       i32 = i48 + 8 | 0;
       i45 = i32 | 0;
       i49 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       HEAP32[i45 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
      }
     } while (0);
     HEAP32[i6 + 4 >> 2] = i38;
     i48 = HEAP32[i35 >> 2] & -8 | i30 & 7;
     HEAP32[i35 >> 2] = i48;
     HEAP8[i33] = i48 & 255 & -9 | i36 & 8;
     if ((HEAP8[i2] & 1) == 0) {
      i48 = HEAP32[i1 + 176 >> 2] | 0;
      if ((i48 | 0) != 0) {
       i47 = i48 + 8 | 0;
       HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
      }
      i68 = i48;
      i69 = i1 + 180 | 0;
      i70 = i1 + 184 | 0;
     } else {
      i48 = HEAP32[i1 + 108 >> 2] | 0;
      if ((i48 | 0) != 0) {
       i47 = i48 + 8 | 0;
       HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
      }
      i68 = i48;
      i69 = i1 + 112 | 0;
      i70 = i1 + 116 | 0;
     }
     i48 = HEAP32[i70 >> 2] | 0;
     i47 = i48 & 255;
     i29 = HEAP32[i69 >> 2] | 0;
     i39 = HEAP32[i28 >> 2] | 0;
     HEAP32[i28 >> 2] = i68;
     do {
      if ((i39 | 0) != 0) {
       i32 = i39 + 8 | 0;
       i49 = i32 | 0;
       i45 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
      }
     } while (0);
     HEAP32[i40 >> 2] = i29;
     i39 = HEAP32[i46 >> 2] & -8 | i48 & 7;
     HEAP32[i46 >> 2] = i39;
     HEAP8[i37] = i39 & 255 & -9 | i47 & 8;
    }
   } while (0);
   i37 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(HEAP32[i27 >> 2] | 0, HEAP32[i28 >> 2] | 0) | 0;
   i46 = HEAP32[i28 >> 2] | 0;
   do {
    if (i37) {
     i50 = HEAP32[i46 + 28 >> 2] | 0;
     if ((i50 | 0) != 0) {
      i71 = i50;
      break;
     }
     i71 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i46) | 0;
    } else {
     if ((HEAP32[i46 + 12 >> 2] & 2 | 0) != 0) {
      i50 = HEAP32[i46 + 36 >> 2] | 0;
      if ((i50 | 0) != 0) {
       i71 = i50;
       break;
      }
     }
     i50 = HEAP32[i46 + 28 >> 2] | 0;
     if ((i50 | 0) != 0) {
      i71 = i50;
      break;
     }
     i71 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i46) | 0;
    }
   } while (0);
   __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i8, i6, 1);
   i46 = i8 | 0;
   i37 = HEAP32[i46 >> 2] | 0;
   HEAP32[i46 >> 2] = 0;
   i50 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = i37;
   do {
    if ((i50 | 0) != 0) {
     i37 = i50 + 8 | 0;
     i39 = i37 | 0;
     i36 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     HEAP32[i39 >> 2] = i36;
     if ((i36 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
    }
   } while (0);
   i50 = i6 + 4 | 0;
   HEAP32[i50 >> 2] = HEAP32[i8 + 4 >> 2];
   i37 = HEAP32[i8 + 8 >> 2] | 0;
   i36 = HEAP32[i35 >> 2] & -8 | i37 & 7;
   HEAP32[i35 >> 2] = i36;
   HEAP8[i33] = i36 & 255 & -9 | i37 & 8;
   i37 = HEAP32[i46 >> 2] | 0;
   do {
    if ((i37 | 0) != 0) {
     i36 = i37 + 8 | 0;
     i39 = i36 | 0;
     i30 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     HEAP32[i39 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
    }
   } while (0);
   i37 = HEAP32[i27 >> 2] | 0;
   i46 = i37 + 12 | 0;
   do {
    if ((HEAP32[i46 >> 2] & 1 | 0) == 0) {
     i72 = i37;
    } else {
     do {
      if ((HEAP8[i33] & 8) == 0) {
       i36 = HEAP32[i35 >> 2] & 7;
       if (!((i36 | 0) == 2 | (i36 | 0) == 4)) {
        i51 = 163;
        break;
       }
       i73 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
      } else {
       i51 = 163;
      }
     } while (0);
     if ((i51 | 0) == 163) {
      i73 = HEAP32[i50 >> 2] | 0;
     }
     if ((i73 | 0) < (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i37) | 0)) {
      i72 = i37;
      break;
     }
     if ((HEAP32[i46 >> 2] & 2 | 0) != 0) {
      i47 = HEAP32[i37 + 36 >> 2] | 0;
      if ((i47 | 0) != 0) {
       i72 = i47;
       break;
      }
     }
     i47 = HEAP32[i37 + 28 >> 2] | 0;
     if ((i47 | 0) != 0) {
      i72 = i47;
      break;
     }
     i72 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i37) | 0;
    }
   } while (0);
   _memset(i9 | 0, 0, 20) | 0;
   HEAP32[i10 >> 2] = i72;
   i37 = (i72 | 0) == (i71 | 0);
   do {
    if (!i37) {
     i46 = i9 | 0;
     i50 = i12 + 8 | 0;
     i35 = i12 | 0;
     i33 = i72;
     while (1) {
      HEAPF32[i11 >> 2] = +__ZN7WebCore17ApplyStyleCommand16computedFontSizeEPNS_4NodeE(0, i33);
      __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_fS9_NS_10HashTraitsIS3_EENSB_IfEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_fEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i12, i46, i10, i11);
      if ((HEAP8[i50] & 1) == 0) {
       HEAPF32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] = +HEAPF32[i11 >> 2];
      }
      i47 = HEAP32[i10 >> 2] | 0;
      if ((HEAP32[i47 + 12 >> 2] & 2 | 0) == 0) {
       i51 = 179;
      } else {
       i48 = HEAP32[i47 + 36 >> 2] | 0;
       if ((i48 | 0) == 0) {
        i51 = 179;
       } else {
        i74 = i48;
       }
      }
      do {
       if ((i51 | 0) == 179) {
        i51 = 0;
        i48 = HEAP32[i47 + 28 >> 2] | 0;
        if ((i48 | 0) != 0) {
         i74 = i48;
         break;
        }
        i74 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i47) | 0;
       }
      } while (0);
      HEAP32[i10 >> 2] = i74;
      if ((i74 | 0) == (i71 | 0)) {
       break;
      } else {
       i33 = i74;
      }
     }
     if (i37) {
      break;
     }
     i33 = i1 + 8 | 0;
     i35 = i13 | 0;
     i50 = i14 | 0;
     i46 = i15 | 0;
     i47 = i16 | 0;
     i48 = i17;
     i29 = i17 | 0;
     i40 = i9 + 8 | 0;
     i36 = i9 | 0;
     i30 = i18 | 0;
     i39 = i20 | 0;
     i38 = i19 | 0;
     i32 = i1 | 0;
     i45 = i21 | 0;
     i49 = i23 | 0;
     i34 = i5 | 0;
     i41 = i22 | 0;
     i31 = i24 | 0;
     i43 = i4 | 0;
     i42 = 0;
     i75 = 0;
     i76 = 0;
     i77 = i72;
     i78 = 0;
     L247 : while (1) {
      i79 = i77 + 12 | 0;
      i80 = HEAP32[i79 >> 2] | 0;
      do {
       if ((i80 & 16 | 0) == 0) {
        if ((i80 & 1 | 0) == 0) {
         i81 = i42;
         i82 = i75;
         i83 = i76;
         i84 = i78;
         break;
        }
        i85 = i77 + 32 | 0;
        if ((i80 & 2048 | 0) == 0) {
         i86 = i85 | 0;
        } else {
         i86 = HEAP32[i85 >> 2] | 0;
        }
        if ((HEAP32[i86 >> 2] | 0) == 0) {
         i81 = i42;
         i82 = i75;
         i83 = i76;
         i84 = i78;
         break;
        }
        if ((HEAP32[i77 + 16 >> 2] | 0) == (i78 | 0)) {
         i81 = i42;
         i82 = i75;
         i83 = i76;
         i84 = i78;
         break;
        }
        __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i13, HEAP32[i33 >> 2] | 0, __ZN7WebCore9HTMLNames7spanTagE);
        i85 = HEAP32[i35 >> 2] | 0;
        HEAP32[i35 >> 2] = 0;
        HEAP32[i50 >> 2] = i77;
        if ((i77 | 0) == 0) {
         HEAP32[i46 >> 2] = 0;
        } else {
         i87 = i77 + 8 | 0;
         HEAP32[i87 >> 2] = (HEAP32[i87 >> 2] | 0) + 1;
         HEAP32[i46 >> 2] = i77;
         HEAP32[i87 >> 2] = (HEAP32[i87 >> 2] | 0) + 1;
        }
        HEAP32[i47 >> 2] = i85;
        if ((i85 | 0) != 0) {
         i87 = i85 + 8 | 0;
         HEAP32[i87 >> 2] = (HEAP32[i87 >> 2] | 0) + 1;
        }
        __ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE(i1, i14, i15, i16);
        i87 = HEAP32[i47 >> 2] | 0;
        do {
         if ((i87 | 0) != 0) {
          i88 = i87 + 8 | 0;
          i89 = i88 | 0;
          i90 = (HEAP32[i89 >> 2] | 0) - 1 | 0;
          HEAP32[i89 >> 2] = i90;
          if ((i90 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i88 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i88 - 8 | 0);
         }
        } while (0);
        i87 = HEAP32[i46 >> 2] | 0;
        do {
         if ((i87 | 0) != 0) {
          i88 = i87 + 8 | 0;
          i90 = i88 | 0;
          i89 = (HEAP32[i90 >> 2] | 0) - 1 | 0;
          HEAP32[i90 >> 2] = i89;
          if ((i89 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i88 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i88 - 8 | 0);
         }
        } while (0);
        i87 = HEAP32[i50 >> 2] | 0;
        if ((i87 | 0) == 0) {
         i91 = i85;
         i51 = 210;
         break;
        }
        i88 = i87 + 8 | 0;
        i87 = i88 | 0;
        i89 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
        HEAP32[i87 >> 2] = i89;
        if ((i89 | 0) >= 1) {
         i91 = i85;
         i51 = 210;
         break;
        }
        if ((HEAP32[i88 + 8 >> 2] | 0) != 0) {
         i91 = i85;
         i51 = 210;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i88 - 8 | 0);
        i91 = i85;
        i51 = 210;
       } else {
        if (!(__ZNK7WebCore17ApplyStyleCommand17nodeFullySelectedEPNS_4NodeERKNS_8PositionES5_(0, i77, i6, i7) | 0)) {
         i81 = i42;
         i82 = i75;
         i83 = i76;
         i84 = i78;
         break;
        }
        if ((i77 | 0) == 0) {
         i91 = 0;
         i51 = 210;
         break;
        }
        i88 = i77 + 8 | 0;
        HEAP32[i88 >> 2] = (HEAP32[i88 >> 2] | 0) + 1;
        i91 = i77;
        i51 = 210;
       }
      } while (0);
      do {
       if ((i51 | 0) == 210) {
        i51 = 0;
        i80 = i91 | 0;
        i88 = HEAP32[i91 + 48 >> 2] | 0;
        do {
         if ((i88 | 0) == 0) {
          i51 = 212;
         } else {
          i89 = HEAP32[i88 + 8 >> 2] | 0;
          if ((i89 | 0) == 0) {
           i51 = 212;
           break;
          }
          __ZNK7WebCore15StyleProperties11mutableCopyEv(i4, i89);
          i89 = HEAP32[i43 >> 2] | 0;
          HEAP32[i29 >> 2] = i89;
          i92 = i89;
         }
        } while (0);
        if ((i51 | 0) == 212) {
         i51 = 0;
         __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i48, 0);
         i92 = HEAP32[i29 >> 2] | 0;
        }
        HEAP32[i29 >> 2] = 0;
        d93 = +__ZN7WebCore17ApplyStyleCommand16computedFontSizeEPNS_4NodeE(0, i77);
        i88 = HEAP32[i40 >> 2] | 0;
        i85 = HEAP32[i36 >> 2] | 0;
        i89 = i77;
        i87 = i89 + ~(i89 << 15) | 0;
        i89 = (i87 >>> 10 ^ i87) * 9 & -1;
        i87 = i89 >>> 6 ^ i89;
        i89 = i87 + ~(i87 << 11) | 0;
        i87 = i89 >>> 16 ^ i89;
        L289 : do {
         if ((i85 | 0) == 0) {
          d94 = Infinity;
         } else {
          i89 = i88 & i87;
          i90 = i85 + (i89 << 3) | 0;
          i95 = HEAP32[i90 >> 2] | 0;
          if ((i95 | 0) == (i77 | 0)) {
           i96 = i90;
          } else {
           i90 = (i87 >>> 23) + ~i87 | 0;
           i97 = i90 << 12 ^ i90;
           i90 = i97 >>> 7 ^ i97;
           i97 = i90 << 2 ^ i90;
           i90 = i97 >>> 20 ^ i97 | 1;
           i97 = 0;
           i98 = i89;
           i89 = i95;
           while (1) {
            if ((i89 | 0) == 0) {
             d94 = Infinity;
             break L289;
            }
            i95 = (i97 | 0) == 0 ? i90 : i97;
            i99 = i95 + i98 & i88;
            i100 = i85 + (i99 << 3) | 0;
            i101 = HEAP32[i100 >> 2] | 0;
            if ((i101 | 0) == (i77 | 0)) {
             i96 = i100;
             break;
            } else {
             i97 = i95;
             i98 = i99;
             i89 = i101;
            }
           }
          }
          if ((i96 | 0) == 0) {
           d94 = Infinity;
           break;
          }
          d94 = +HEAPF32[i96 + 4 >> 2];
         }
        } while (0);
        d102 = d94 + +HEAPF32[i26 >> 2];
        d103 = d102 > +.10000000149011612 ? d102 : +.10000000149011612;
        i85 = i92 | 0;
        __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i18, i85, 6);
        i88 = HEAP32[i30 >> 2] | 0;
        HEAP32[i30 >> 2] = 0;
        i87 = (i88 | 0) == 0;
        if (i87) {
         d104 = d93;
        } else {
         __ZN7WebCore13StyledElement25removeInlineStylePropertyENS_13CSSPropertyIDE(i80, 6) | 0;
         d104 = +__ZN7WebCore17ApplyStyleCommand16computedFontSizeEPNS_4NodeE(0, i77);
        }
        do {
         if (d104 != d103) {
          __ZN7WebCore12CSSValuePool11createValueEdNS_17CSSPrimitiveValue9UnitTypesE(i20, __ZN7WebCore12cssValuePoolEv() | 0, d103, 5);
          HEAP32[i38 >> 2] = HEAP32[i39 >> 2];
          __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDEN3WTF10PassRefPtrINS_8CSSValueEEEb(i92, 6, i19, 0);
          i89 = HEAP32[i38 >> 2] | 0;
          do {
           if ((i89 | 0) != 0) {
            i98 = i89 | 0;
            i97 = (HEAP32[i98 >> 2] | 0) - 1 | 0;
            if ((i97 | 0) == 0) {
             __ZN7WebCore8CSSValue7destroyEv(i89);
             break;
            } else {
             HEAP32[i98 >> 2] = i97;
             break;
            }
           }
          } while (0);
          HEAP32[i45 >> 2] = i91;
          if ((i91 | 0) != 0) {
           i89 = i91 + 8 | 0;
           HEAP32[i89 >> 2] = (HEAP32[i89 >> 2] | 0) + 1;
          }
          __ZNK7WebCore15StyleProperties6asTextEv(i23, i85);
          i89 = HEAP32[i49 >> 2] | 0;
          do {
           if ((i89 | 0) == 0) {
            HEAP32[i34 >> 2] = 0;
           } else {
            if ((HEAP32[i89 + 16 >> 2] & 16 | 0) == 0) {
             __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i89);
             break;
            } else {
             HEAP32[i34 >> 2] = i89;
             i97 = i89 | 0;
             HEAP32[i97 >> 2] = (HEAP32[i97 >> 2] | 0) + 2;
             break;
            }
           }
          } while (0);
          HEAP32[i41 >> 2] = HEAP32[i34 >> 2];
          __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i32, i21, __ZN7WebCore9HTMLNames9styleAttrE, i22);
          i89 = HEAP32[i41 >> 2] | 0;
          do {
           if ((i89 | 0) != 0) {
            i97 = i89 | 0;
            i98 = (HEAP32[i97 >> 2] | 0) - 2 | 0;
            if ((i98 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i89);
             break;
            } else {
             HEAP32[i97 >> 2] = i98;
             break;
            }
           }
          } while (0);
          i89 = HEAP32[i49 >> 2] | 0;
          do {
           if ((i89 | 0) != 0) {
            i98 = i89 | 0;
            i97 = (HEAP32[i98 >> 2] | 0) - 2 | 0;
            if ((i97 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i89);
             break;
            } else {
             HEAP32[i98 >> 2] = i97;
             break;
            }
           }
          } while (0);
          i89 = HEAP32[i45 >> 2] | 0;
          if ((i89 | 0) == 0) {
           break;
          }
          i97 = i89 + 8 | 0;
          i89 = i97 | 0;
          i98 = (HEAP32[i89 >> 2] | 0) - 1 | 0;
          HEAP32[i89 >> 2] = i98;
          if ((i98 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i97 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i97 - 8 | 0);
         }
        } while (0);
        i97 = i92 + 4 | 0;
        i98 = HEAP32[i97 >> 2] | 0;
        if ((i98 & 4 | 0) == 0) {
         i105 = i98 >>> 3;
        } else {
         i105 = HEAP32[i85 + 16 >> 2] | 0;
        }
        do {
         if ((i105 | 0) == 0) {
          HEAP32[i31 >> 2] = i91;
          i98 = (i91 | 0) == 0;
          if (!i98) {
           i89 = i91 + 8 | 0;
           HEAP32[i89 >> 2] = (HEAP32[i89 >> 2] | 0) + 1;
          }
          __ZN7WebCore20CompositeEditCommand19removeNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameE(i32, i24, __ZN7WebCore9HTMLNames9styleAttrE);
          i89 = HEAP32[i31 >> 2] | 0;
          do {
           if ((i89 | 0) != 0) {
            i90 = i89 + 8 | 0;
            i101 = i90 | 0;
            i99 = (HEAP32[i101 >> 2] | 0) - 1 | 0;
            HEAP32[i101 >> 2] = i99;
            if ((i99 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i90 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i90 - 8 | 0);
           }
          } while (0);
          if (i98) {
           i106 = 0;
           i107 = i76;
           i108 = i75;
           i109 = i42;
           break;
          }
          if ((HEAP32[i91 + 12 >> 2] & 16 | 0) == 0) {
           i106 = i91;
           i107 = i76;
           i108 = i75;
           i109 = i42;
           break;
          }
          i89 = HEAP32[i91 + 44 >> 2] | 0;
          i90 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
          if ((i89 | 0) != (i90 | 0)) {
           if ((HEAP32[i89 + 12 >> 2] | 0) != (HEAP32[i90 + 12 >> 2] | 0)) {
            i106 = i91;
            i107 = i76;
            i108 = i75;
            i109 = i42;
            break;
           }
           if ((HEAP32[i89 + 16 >> 2] | 0) != (HEAP32[i90 + 16 >> 2] | 0)) {
            i106 = i91;
            i107 = i76;
            i108 = i75;
            i109 = i42;
            break;
           }
          }
          if (!(__ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE(i80, 1) | 0)) {
           i106 = i91;
           i107 = i76;
           i108 = i75;
           i109 = i42;
           break;
          }
          if ((i42 | 0) != (i75 | 0)) {
           HEAP32[i76 + (i42 << 2) >> 2] = i91;
           i106 = 0;
           i107 = i76;
           i108 = i75;
           i109 = i42 + 1 | 0;
           break;
          }
          i90 = i75 + 1 | 0;
          i89 = i90 + (i75 >>> 2) | 0;
          i99 = i89 >>> 0 > 16 >>> 0 ? i89 : 16;
          i89 = i99 >>> 0 > i90 >>> 0 ? i99 : i90;
          do {
           if (i75 >>> 0 < i89 >>> 0) {
            if (i89 >>> 0 > 1073741823 >>> 0) {
             i51 = 267;
             break L247;
            }
            i99 = __ZN3WTF18fastMallocGoodSizeEj(i89 << 2) | 0;
            i101 = i99 >>> 2;
            i95 = __ZN3WTF10fastMallocEj(i99) | 0;
            i99 = i95;
            i100 = i76;
            _memcpy(i95 | 0, i100 | 0, i75 << 2) | 0;
            if ((i76 | 0) == 0) {
             i110 = i99;
             i111 = i101;
             break;
            }
            i95 = (i99 | 0) == (i76 | 0);
            __ZN3WTF8fastFreeEPv(i100);
            i110 = i95 ? 0 : i99;
            i111 = i95 ? 0 : i101;
           } else {
            i110 = i76;
            i111 = i75;
           }
          } while (0);
          HEAP32[i110 + (i75 << 2) >> 2] = i91;
          i106 = 0;
          i107 = i110;
          i108 = i111;
          i109 = i90;
         } else {
          i106 = i91;
          i107 = i76;
          i108 = i75;
          i109 = i42;
         }
        } while (0);
        do {
         if (!i87) {
          i80 = i88 | 0;
          i85 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
          if ((i85 | 0) == 0) {
           __ZN7WebCore8CSSValue7destroyEv(i88);
           break;
          } else {
           HEAP32[i80 >> 2] = i85;
           break;
          }
         }
        } while (0);
        do {
         if ((i92 | 0) != 0) {
          i88 = i92 | 0;
          i87 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
          if ((i87 | 0) != 0) {
           HEAP32[i88 >> 2] = i87;
           break;
          }
          if ((HEAP32[i97 >> 2] & 4 | 0) == 0) {
           __ZN7WebCore24ImmutableStylePropertiesD1Ev(i92);
           __ZN3WTF8fastFreeEPv(i92);
           break;
          } else {
           __ZN7WebCore22MutableStylePropertiesD1Ev(i92);
           __ZN3WTF8fastFreeEPv(i92);
           break;
          }
         }
        } while (0);
        if ((i106 | 0) == 0) {
         i81 = i109;
         i82 = i108;
         i83 = i107;
         i84 = i77;
         break;
        }
        i97 = i106 + 8 | 0;
        i87 = i97 | 0;
        i88 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
        HEAP32[i87 >> 2] = i88;
        if ((i88 | 0) >= 1) {
         i81 = i109;
         i82 = i108;
         i83 = i107;
         i84 = i77;
         break;
        }
        if ((HEAP32[i97 + 8 >> 2] | 0) != 0) {
         i81 = i109;
         i82 = i108;
         i83 = i107;
         i84 = i77;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i97 - 8 | 0);
        i81 = i109;
        i82 = i108;
        i83 = i107;
        i84 = i77;
       }
      } while (0);
      if ((HEAP32[i79 >> 2] & 2 | 0) == 0) {
       i51 = 288;
      } else {
       i97 = HEAP32[i77 + 36 >> 2] | 0;
       if ((i97 | 0) == 0) {
        i51 = 288;
       } else {
        i112 = i97;
       }
      }
      do {
       if ((i51 | 0) == 288) {
        i51 = 0;
        i97 = HEAP32[i77 + 28 >> 2] | 0;
        if ((i97 | 0) != 0) {
         i112 = i97;
         break;
        }
        i112 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i77) | 0;
       }
      } while (0);
      if ((i112 | 0) == (i71 | 0)) {
       break;
      } else {
       i42 = i81;
       i75 = i82;
       i76 = i83;
       i77 = i112;
       i78 = i84;
      }
     }
     if ((i51 | 0) == 267) {
      _WTFCrash();
     }
     i78 = (i81 | 0) == 0;
     do {
      if (!i78) {
       i77 = i1 | 0;
       i76 = i25 | 0;
       i75 = 0;
       while (1) {
        i42 = HEAP32[i83 + (i75 << 2) >> 2] | 0;
        HEAP32[i76 >> 2] = i42;
        if ((i42 | 0) != 0) {
         i31 = i42 + 8 | 0;
         HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
        }
        __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i77, i25, 1);
        i31 = HEAP32[i76 >> 2] | 0;
        do {
         if ((i31 | 0) != 0) {
          i42 = i31 + 8 | 0;
          i32 = i42 | 0;
          i45 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
          HEAP32[i32 >> 2] = i45;
          if ((i45 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
         }
        } while (0);
        i75 = i75 + 1 | 0;
        if (i75 >>> 0 >= i81 >>> 0) {
         break;
        }
       }
       if (i78) {
        break;
       }
       i75 = i83 + (i81 << 2) | 0;
       i76 = i83;
       while (1) {
        i77 = HEAP32[i76 >> 2] | 0;
        do {
         if ((i77 | 0) != 0) {
          i31 = i77 + 8 | 0;
          i42 = i31 | 0;
          i45 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
          HEAP32[i42 >> 2] = i45;
          if ((i45 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
         }
        } while (0);
        i76 = i76 + 4 | 0;
        if ((i76 | 0) == (i75 | 0)) {
         break;
        }
       }
      }
     } while (0);
     if ((i83 | 0) == 0) {
      break;
     }
     __ZN3WTF8fastFreeEPv(i83);
    }
   } while (0);
   i37 = HEAP32[i9 >> 2] | 0;
   if ((i37 | 0) == 0) {
    i51 = 308;
    break;
   }
   __ZN3WTF8fastFreeEPv(i37);
   i51 = 308;
  }
 } while (0);
 do {
  if ((i51 | 0) == 308) {
   i9 = HEAP32[i28 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i83 = i9 + 8 | 0;
   i9 = i83 | 0;
   i81 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i81;
   if ((i81 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i83 - 8 | 0);
  }
 } while (0);
 i28 = HEAP32[i27 >> 2] | 0;
 if ((i28 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i27 = i28 + 8 | 0;
 i28 = i27 | 0;
 i51 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
 HEAP32[i28 >> 2] = i51;
 if ((i51 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17ApplyStyleCommand15applyBlockStyleEPNS_12EditingStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 480 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 48 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 80 | 0;
 i12 = i3 + 96 | 0;
 i13 = i3 + 104 | 0;
 i14 = i3 + 120 | 0;
 i15 = i3 + 136 | 0;
 i16 = i3 + 152 | 0;
 i17 = i3 + 160 | 0;
 i18 = i3 + 176 | 0;
 i19 = i3 + 192 | 0;
 i20 = i3 + 208 | 0;
 i21 = i3 + 224 | 0;
 i22 = i3 + 240 | 0;
 i23 = i3 + 256 | 0;
 i24 = i3 + 272 | 0;
 i25 = i3 + 288 | 0;
 i26 = i3 + 304 | 0;
 i27 = i3 + 328 | 0;
 i28 = i3 + 344 | 0;
 i29 = i3 + 352 | 0;
 i30 = i3 + 368 | 0;
 i31 = i3 + 384 | 0;
 i32 = i3 + 400 | 0;
 i33 = i3 + 416 | 0;
 i34 = i3 + 432 | 0;
 i35 = i3 + 440 | 0;
 i36 = i3 + 448 | 0;
 i37 = i3 + 464 | 0;
 i38 = i1 + 8 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i38 >> 2] | 0);
 i39 = i1 + 188 | 0;
 i40 = i8 | 0;
 if ((HEAP8[i39] & 1) == 0) {
  i41 = HEAP32[i1 + 164 >> 2] | 0;
  HEAP32[i40 >> 2] = i41;
  if ((i41 | 0) == 0) {
   i42 = i8 + 8 | 0;
   i43 = 0;
   i44 = i42;
   i45 = i42;
  } else {
   i42 = i41 + 8 | 0;
   HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
   i42 = i8 + 8 | 0;
   i41 = i42;
   i43 = HEAP32[i41 >> 2] & -8;
   i44 = i42;
   i45 = i41;
  }
  HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 168 >> 2];
  i41 = HEAP32[i1 + 172 >> 2] | 0;
  i42 = i43 | i41 & 7;
  HEAP32[i45 >> 2] = i42;
  HEAP8[i44] = i42 & 255 & -9 | i41 & 8;
 } else {
  i41 = HEAP32[i1 + 96 >> 2] | 0;
  HEAP32[i40 >> 2] = i41;
  if ((i41 | 0) == 0) {
   i42 = i8 + 8 | 0;
   i46 = 0;
   i47 = i42;
   i48 = i42;
  } else {
   i42 = i41 + 8 | 0;
   HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
   i42 = i8 + 8 | 0;
   i41 = i42;
   i46 = HEAP32[i41 >> 2] & -8;
   i47 = i42;
   i48 = i41;
  }
  HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
  i41 = HEAP32[i1 + 104 >> 2] | 0;
  i42 = i46 | i41 & 7;
  HEAP32[i48 >> 2] = i42;
  HEAP8[i47] = i42 & 255 & -9 | i41 & 8;
 }
 i41 = i9 | 0;
 if ((HEAP8[i39] & 1) == 0) {
  i39 = HEAP32[i1 + 176 >> 2] | 0;
  HEAP32[i41 >> 2] = i39;
  if ((i39 | 0) != 0) {
   i42 = i39 + 8 | 0;
   HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
  }
  HEAP32[i9 + 4 >> 2] = HEAP32[i1 + 180 >> 2];
  i42 = HEAP32[i1 + 184 >> 2] | 0;
  i39 = i9 + 8 | 0;
  i47 = i39;
  i48 = HEAP32[i47 >> 2] & -8 | i42 & 7;
  HEAP32[i47 >> 2] = i48;
  HEAP8[i39] = i48 & 255 & -9 | i42 & 8;
 } else {
  i42 = HEAP32[i1 + 108 >> 2] | 0;
  HEAP32[i41 >> 2] = i42;
  if ((i42 | 0) != 0) {
   i48 = i42 + 8 | 0;
   HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
  }
  HEAP32[i9 + 4 >> 2] = HEAP32[i1 + 112 >> 2];
  i48 = HEAP32[i1 + 116 >> 2] | 0;
  i42 = i9 + 8 | 0;
  i39 = i42;
  i47 = HEAP32[i39 >> 2] & -8 | i48 & 7;
  HEAP32[i39 >> 2] = i47;
  HEAP8[i42] = i47 & 255 & -9 | i48 & 8;
 }
 do {
  if ((__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i9, i8) | 0) < 0) {
   i48 = HEAP32[i40 >> 2] | 0;
   i47 = (i48 | 0) == 0;
   if (!i47) {
    i42 = i48 + 8 | 0;
    HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
   }
   i42 = i8 + 4 | 0;
   i39 = HEAP32[i42 >> 2] | 0;
   i46 = i8 + 8 | 0;
   i44 = i46;
   i45 = HEAP32[i44 >> 2] | 0;
   i43 = i45 & 8;
   i49 = HEAP32[i41 >> 2] | 0;
   if ((i49 | 0) != 0) {
    i50 = i49 + 8 | 0;
    HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
   }
   i50 = HEAP32[i40 >> 2] | 0;
   HEAP32[i40 >> 2] = i49;
   do {
    if ((i50 | 0) != 0) {
     i49 = i50 + 8 | 0;
     i51 = i49 | 0;
     i52 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     HEAP32[i51 >> 2] = i52;
     if ((i52 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
    }
   } while (0);
   i50 = i9 + 4 | 0;
   HEAP32[i42 >> 2] = HEAP32[i50 >> 2];
   i49 = i9 + 8 | 0;
   i52 = i49;
   i51 = HEAP32[i52 >> 2] | 0;
   i53 = HEAP32[i44 >> 2] & -8 | i51 & 7;
   HEAP32[i44 >> 2] = i53;
   HEAP8[i46] = i53 & 255 & -9 | i51 & 8;
   if (!i47) {
    i51 = i48 + 8 | 0;
    HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
   }
   i51 = HEAP32[i41 >> 2] | 0;
   HEAP32[i41 >> 2] = i48;
   do {
    if ((i51 | 0) != 0) {
     i53 = i51 + 8 | 0;
     i54 = i53 | 0;
     i55 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
     HEAP32[i54 >> 2] = i55;
     if ((i55 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
    }
   } while (0);
   HEAP32[i50 >> 2] = i39;
   i51 = HEAP32[i52 >> 2] & -8 | i45 & 7;
   HEAP32[i52 >> 2] = i51;
   HEAP8[i49] = i51 & 255 & -9 | i43;
   if (i47) {
    break;
   }
   i51 = i48 + 8 | 0;
   i46 = i51 | 0;
   i44 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
   HEAP32[i46 >> 2] = i44;
   if ((i44 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i10, i8, 1);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i9, 1);
 i9 = i10 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 12 >> 2] & 256 | 0) == 0) {
    break;
   }
   i51 = i11 | 0;
   i44 = HEAP32[i51 >> 2] | 0;
   if ((i44 | 0) == 0) {
    break;
   }
   if ((HEAP32[i44 + 12 >> 2] & 256 | 0) == 0) {
    break;
   }
   i44 = i8 + 8 | 0;
   HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
   i44 = i10 + 4 | 0;
   i46 = i10 + 8 | 0;
   i42 = __ZN7WebCore15highestAncestorEPNS_4NodeE(i8) | 0;
   i53 = i8 + 8 | 0;
   i55 = i53 - 8 | 0;
   i54 = i53 | 0;
   i56 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
   HEAP32[i54 >> 2] = i56;
   do {
    if ((i56 | 0) < 1) {
     if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i55);
    }
   } while (0);
   i55 = HEAP32[i38 >> 2] | 0;
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i13, i42);
   i53 = i15 | 0;
   i56 = HEAP32[i9 >> 2] | 0;
   HEAP32[i53 >> 2] = i56;
   if ((i56 | 0) != 0) {
    i48 = i56 + 8 | 0;
    HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
   }
   HEAP32[i15 + 4 >> 2] = HEAP32[i44 >> 2];
   i48 = HEAP32[i46 >> 2] | 0;
   i56 = i15 + 8 | 0;
   i47 = i56;
   i43 = HEAP32[i47 >> 2] & -8 | i48 & 7;
   HEAP32[i47 >> 2] = i43;
   HEAP8[i56] = i43 & 255 & -9 | i48 & 8;
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i14, i15);
   __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i12, i55, i13, i14);
   i55 = i12 | 0;
   i48 = HEAP32[i55 >> 2] | 0;
   HEAP32[i55 >> 2] = 0;
   i55 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i43 = i55 + 8 | 0;
     i56 = i43 | 0;
     i47 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
     HEAP32[i56 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
    }
   } while (0);
   i55 = HEAP32[i53 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i46 = i55 + 8 | 0;
     i44 = i46 | 0;
     i43 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     HEAP32[i44 >> 2] = i43;
     if ((i43 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    }
   } while (0);
   i55 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i53 = i55 + 8 | 0;
     i46 = i53 | 0;
     i43 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     HEAP32[i46 >> 2] = i43;
     if ((i43 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
    }
   } while (0);
   i55 = HEAP32[i38 >> 2] | 0;
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i17, i42);
   i53 = i19 | 0;
   i43 = HEAP32[i51 >> 2] | 0;
   HEAP32[i53 >> 2] = i43;
   if ((i43 | 0) != 0) {
    i46 = i43 + 8 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
   }
   i46 = i11 + 4 | 0;
   HEAP32[i19 + 4 >> 2] = HEAP32[i46 >> 2];
   i43 = i11 + 8 | 0;
   i44 = i43;
   i47 = HEAP32[i44 >> 2] | 0;
   i56 = i19 + 8 | 0;
   i49 = i56;
   i52 = HEAP32[i49 >> 2] & -8 | i47 & 7;
   HEAP32[i49 >> 2] = i52;
   HEAP8[i56] = i52 & 255 & -9 | i47 & 8;
   __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i18, i19);
   __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i16, i55, i17, i18);
   i55 = i16 | 0;
   i47 = HEAP32[i55 >> 2] | 0;
   HEAP32[i55 >> 2] = 0;
   i55 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i52 = i55 + 8 | 0;
     i56 = i52 | 0;
     i49 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
     HEAP32[i56 >> 2] = i49;
     if ((i49 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    }
   } while (0);
   i55 = HEAP32[i53 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i52 = i55 + 8 | 0;
     i49 = i52 | 0;
     i56 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
     HEAP32[i49 >> 2] = i56;
     if ((i56 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    }
   } while (0);
   i55 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i53 = i55 + 8 | 0;
     i52 = i53 | 0;
     i56 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     HEAP32[i52 >> 2] = i56;
     if ((i56 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
    }
   } while (0);
   i55 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i48, 1) | 0;
   i53 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i47, 1) | 0;
   __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i20, i10, 1);
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i22, i20, 1);
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i21, i22, 0);
   i56 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i56 | 0) != 0) {
     i52 = i56 + 8 | 0;
     i49 = i52 | 0;
     i45 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
     HEAP32[i49 >> 2] = i45;
     if ((i45 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    }
   } while (0);
   do {
    if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i11, i10) | 0)) {
     if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i11, 1) | 0)) {
      break;
     }
     __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i23, i11, 1);
     i56 = i23 | 0;
     i52 = HEAP32[i56 >> 2] | 0;
     HEAP32[i56 >> 2] = 0;
     i45 = HEAP32[i51 >> 2] | 0;
     HEAP32[i51 >> 2] = i52;
     do {
      if ((i45 | 0) != 0) {
       i52 = i45 + 8 | 0;
       i49 = i52 | 0;
       i39 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i39;
       if ((i39 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
      }
     } while (0);
     HEAP32[i46 >> 2] = HEAP32[i23 + 4 >> 2];
     i45 = HEAP32[i23 + 8 >> 2] | 0;
     i52 = HEAP32[i44 >> 2] & -8 | i45 & 7;
     HEAP32[i44 >> 2] = i52;
     HEAP8[i43] = i52 & 255 & -9 | i45 & 8;
     HEAP32[i11 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
     i45 = HEAP32[i56 >> 2] | 0;
     if ((i45 | 0) == 0) {
      break;
     }
     i52 = i45 + 8 | 0;
     i45 = i52 | 0;
     i39 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
     HEAP32[i45 >> 2] = i39;
     if ((i39 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i25, i11, 1);
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i24, i25, 0);
   i43 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i43 | 0) != 0) {
     i44 = i43 + 8 | 0;
     i46 = i44 | 0;
     i51 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     HEAP32[i46 >> 2] = i51;
     if ((i51 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
    }
   } while (0);
   i43 = i20 | 0;
   L115 : do {
    if ((HEAP32[i43 >> 2] | 0) != 0) {
     i44 = i27 | 0;
     i51 = i27 + 4 | 0;
     i46 = i20 + 4 | 0;
     i52 = i20 + 8 | 0;
     i39 = i52;
     i45 = i27 + 8 | 0;
     i49 = i45;
     i50 = i26 | 0;
     i54 = i1 + 196 | 0;
     i57 = i21 | 0;
     i58 = i21 + 4 | 0;
     i59 = i21 + 8 | 0;
     i60 = i59;
     i61 = i21 + 12 | 0;
     i62 = i20 + 12 | 0;
     i63 = i32 | 0;
     i64 = i32 + 4 | 0;
     i65 = i32 + 8 | 0;
     i66 = i32 + 12 | 0;
     i67 = i33 | 0;
     i68 = i26 + 20 | 0;
     i69 = i26 + 16 | 0;
     i70 = i26 + 12 | 0;
     i71 = i1 | 0;
     i72 = i29 | 0;
     i73 = i29 + 4 | 0;
     i74 = i29 + 8 | 0;
     i75 = i74;
     i76 = i28 | 0;
     i77 = i30 | 0;
     i78 = i30 + 4 | 0;
     i79 = i30 + 8 | 0;
     i80 = i30 + 12 | 0;
     i81 = i31 | 0;
     while (1) {
      if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i20, i24) | 0) {
       break L115;
      }
      i82 = HEAP32[i43 >> 2] | 0;
      HEAP32[i44 >> 2] = i82;
      if ((i82 | 0) != 0) {
       i83 = i82 + 8 | 0;
       HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) + 1;
      }
      HEAP32[i51 >> 2] = HEAP32[i46 >> 2];
      i83 = HEAP32[i39 >> 2] | 0;
      i82 = HEAP32[i49 >> 2] & -8 | i83 & 7;
      HEAP32[i49 >> 2] = i82;
      HEAP8[i45] = i82 & 255 & -9 | i83 & 8;
      __ZN7WebCore11StyleChangeC1EPNS_12EditingStyleERKNS_8PositionE(i26, i2, i27);
      i83 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i83 | 0) != 0) {
        i82 = i83 + 8 | 0;
        i84 = i82 | 0;
        i85 = (HEAP32[i84 >> 2] | 0) - 1 | 0;
        HEAP32[i84 >> 2] = i85;
        if ((i85 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i82 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i82 - 8 | 0);
       }
      } while (0);
      i83 = HEAP32[i50 >> 2] | 0;
      do {
       if ((i83 | 0) == 0) {
        if ((HEAP8[i54] & 1) != 0) {
         i86 = 105;
        }
       } else {
        i82 = i83 | 0;
        i85 = HEAP32[i82 >> 2] | 0;
        HEAP32[i82 >> 2] = i85 + 2;
        if ((HEAP32[i83 + 4 >> 2] | 0) == 0) {
         i87 = (HEAP8[i54] & 1) != 0;
        } else {
         i87 = 1;
        }
        if ((i85 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i83);
         if (i87) {
          i86 = 105;
          break;
         } else {
          break;
         }
        } else {
         HEAP32[i82 >> 2] = i85;
         if (i87) {
          i86 = 105;
          break;
         } else {
          break;
         }
        }
       }
      } while (0);
      do {
       if ((i86 | 0) == 105) {
        i86 = 0;
        i83 = HEAP32[i43 >> 2] | 0;
        i85 = (i83 | 0) == 0;
        if (!i85) {
         i82 = i83 + 8 | 0;
         HEAP32[i82 >> 2] = (HEAP32[i82 >> 2] | 0) + 1;
        }
        i82 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i83, 1) | 0;
        i84 = i82 | 0;
        i88 = (i82 | 0) == 0;
        if (!i88) {
         i89 = i82 + 8 | 0;
         HEAP32[i89 >> 2] = (HEAP32[i89 >> 2] | 0) + 1;
        }
        do {
         if (!i85) {
          i89 = i83 + 8 | 0;
          i90 = i89 | 0;
          i91 = (HEAP32[i90 >> 2] | 0) - 1 | 0;
          HEAP32[i90 >> 2] = i91;
          if ((i91 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
         }
        } while (0);
        do {
         if ((HEAP8[i54] & 1) == 0) {
          i83 = HEAP32[i43 >> 2] | 0;
          HEAP32[i72 >> 2] = i83;
          if ((i83 | 0) != 0) {
           i85 = i83 + 8 | 0;
           HEAP32[i85 >> 2] = (HEAP32[i85 >> 2] | 0) + 1;
          }
          HEAP32[i73 >> 2] = HEAP32[i46 >> 2];
          i85 = HEAP32[i39 >> 2] | 0;
          i83 = HEAP32[i75 >> 2] & -8 | i85 & 7;
          HEAP32[i75 >> 2] = i83;
          HEAP8[i74] = i83 & 255 & -9 | i85 & 8;
          __ZN7WebCore20CompositeEditCommand42moveParagraphContentsToNewBlockIfNecessaryERKNS_8PositionE(i28, i71, i29);
          i85 = HEAP32[i76 >> 2] | 0;
          HEAP32[i76 >> 2] = 0;
          i83 = HEAP32[i72 >> 2] | 0;
          do {
           if ((i83 | 0) != 0) {
            i89 = i83 + 8 | 0;
            i91 = i89 | 0;
            i90 = (HEAP32[i91 >> 2] | 0) - 1 | 0;
            HEAP32[i91 >> 2] = i90;
            if ((i90 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
           }
          } while (0);
          if ((i85 | 0) == 0) {
           i92 = i84;
           break;
          }
          i83 = i85 + 8 | 0;
          i89 = (HEAP32[i83 >> 2] | 0) + 1 | 0;
          HEAP32[i83 >> 2] = i89;
          if (i88) {
           i83 = i85 + 8 | 0;
           i93 = i89;
           i94 = i83;
           i95 = i83 | 0;
          } else {
           i83 = i82 + 8 | 0;
           i89 = i83 - 8 | 0;
           i90 = i83 | 0;
           i91 = (HEAP32[i90 >> 2] | 0) - 1 | 0;
           HEAP32[i90 >> 2] = i91;
           do {
            if ((i91 | 0) < 1) {
             if ((HEAP32[i83 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i89);
            }
           } while (0);
           i89 = i85 + 8 | 0;
           i83 = i89 | 0;
           i93 = HEAP32[i83 >> 2] | 0;
           i94 = i89;
           i95 = i83;
          }
          i83 = i93 - 1 | 0;
          HEAP32[i95 >> 2] = i83;
          if ((i83 | 0) >= 1) {
           i92 = i85;
           break;
          }
          if ((HEAP32[i94 + 8 >> 2] | 0) != 0) {
           i92 = i85;
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i94 - 8 | 0);
          i92 = i85;
         } else {
          i92 = i84;
         }
        } while (0);
        i84 = (i92 | 0) == 0;
        do {
         if (!i84) {
          if ((HEAP32[i92 + 12 >> 2] & 16 | 0) == 0) {
           break;
          }
          i82 = i92;
          __ZN7WebCore17ApplyStyleCommand14removeCSSStyleEPNS_12EditingStyleEPNS_11HTMLElementENS0_22InlineStyleRemovalModeES2_(i1, i2, i82, 0, 0) | 0;
          if ((HEAP8[i54] & 1) != 0) {
           break;
          }
          __ZN7WebCore17ApplyStyleCommand13addBlockStyleERKNS_11StyleChangeEPNS_11HTMLElementE(i1, i26, i82);
         }
        } while (0);
        i82 = HEAP32[i57 >> 2] | 0;
        do {
         if ((i82 | 0) != 0) {
          if ((HEAP32[i82 + 12 >> 2] & 256 | 0) != 0) {
           break;
          }
          __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i31, i20, 1);
          __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i30, i31, 0);
          i88 = HEAP32[i77 >> 2] | 0;
          HEAP32[i77 >> 2] = 0;
          i83 = HEAP32[i57 >> 2] | 0;
          HEAP32[i57 >> 2] = i88;
          do {
           if ((i83 | 0) != 0) {
            i88 = i83 + 8 | 0;
            i89 = i88 | 0;
            i91 = (HEAP32[i89 >> 2] | 0) - 1 | 0;
            HEAP32[i89 >> 2] = i91;
            if ((i91 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i88 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i88 - 8 | 0);
           }
          } while (0);
          HEAP32[i58 >> 2] = HEAP32[i78 >> 2];
          i83 = HEAP32[i79 >> 2] | 0;
          i85 = HEAP32[i60 >> 2] & -8 | i83 & 7;
          HEAP32[i60 >> 2] = i85;
          HEAP8[i59] = i85 & 255 & -9 | i83 & 8;
          HEAP32[i61 >> 2] = HEAP32[i80 >> 2];
          i83 = HEAP32[i77 >> 2] | 0;
          do {
           if ((i83 | 0) != 0) {
            i85 = i83 + 8 | 0;
            i88 = i85 | 0;
            i91 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
            HEAP32[i88 >> 2] = i91;
            if ((i91 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i85 - 8 | 0);
           }
          } while (0);
          i83 = HEAP32[i81 >> 2] | 0;
          if ((i83 | 0) == 0) {
           break;
          }
          i85 = i83 + 8 | 0;
          i83 = i85 | 0;
          i91 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
          HEAP32[i83 >> 2] = i91;
          if ((i91 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i85 - 8 | 0);
         }
        } while (0);
        if (i84) {
         break;
        }
        i82 = i92 + 8 | 0;
        i85 = i82 | 0;
        i91 = (HEAP32[i85 >> 2] | 0) - 1 | 0;
        HEAP32[i85 >> 2] = i91;
        if ((i91 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i82 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i82 - 8 | 0);
       }
      } while (0);
      i82 = HEAP32[i57 >> 2] | 0;
      if ((i82 | 0) != 0) {
       i91 = i82 + 8 | 0;
       HEAP32[i91 >> 2] = (HEAP32[i91 >> 2] | 0) + 1;
      }
      i91 = HEAP32[i43 >> 2] | 0;
      HEAP32[i43 >> 2] = i82;
      do {
       if ((i91 | 0) != 0) {
        i82 = i91 + 8 | 0;
        i85 = i82 | 0;
        i83 = (HEAP32[i85 >> 2] | 0) - 1 | 0;
        HEAP32[i85 >> 2] = i83;
        if ((i83 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i82 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i82 - 8 | 0);
       }
      } while (0);
      HEAP32[i46 >> 2] = HEAP32[i58 >> 2];
      i91 = HEAP32[i60 >> 2] | 0;
      i82 = HEAP32[i39 >> 2] & -8 | i91 & 7;
      HEAP32[i39 >> 2] = i82;
      HEAP8[i52] = i82 & 255 & -9 | i91 & 8;
      HEAP32[i62 >> 2] = HEAP32[i61 >> 2];
      __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i33, i20, 1);
      __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i32, i33, 0);
      i91 = HEAP32[i63 >> 2] | 0;
      HEAP32[i63 >> 2] = 0;
      i82 = HEAP32[i57 >> 2] | 0;
      HEAP32[i57 >> 2] = i91;
      do {
       if ((i82 | 0) != 0) {
        i91 = i82 + 8 | 0;
        i83 = i91 | 0;
        i85 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
        HEAP32[i83 >> 2] = i85;
        if ((i85 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i91 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i91 - 8 | 0);
       }
      } while (0);
      HEAP32[i58 >> 2] = HEAP32[i64 >> 2];
      i82 = HEAP32[i65 >> 2] | 0;
      i91 = HEAP32[i60 >> 2] & -8 | i82 & 7;
      HEAP32[i60 >> 2] = i91;
      HEAP8[i59] = i91 & 255 & -9 | i82 & 8;
      HEAP32[i61 >> 2] = HEAP32[i66 >> 2];
      i82 = HEAP32[i63 >> 2] | 0;
      do {
       if ((i82 | 0) != 0) {
        i91 = i82 + 8 | 0;
        i85 = i91 | 0;
        i83 = (HEAP32[i85 >> 2] | 0) - 1 | 0;
        HEAP32[i85 >> 2] = i83;
        if ((i83 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i91 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i91 - 8 | 0);
       }
      } while (0);
      i82 = HEAP32[i67 >> 2] | 0;
      do {
       if ((i82 | 0) != 0) {
        i91 = i82 + 8 | 0;
        i83 = i91 | 0;
        i85 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
        HEAP32[i83 >> 2] = i85;
        if ((i85 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i91 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i91 - 8 | 0);
       }
      } while (0);
      i82 = HEAP32[i68 >> 2] | 0;
      do {
       if ((i82 | 0) != 0) {
        i91 = i82 | 0;
        i85 = (HEAP32[i91 >> 2] | 0) - 2 | 0;
        if ((i85 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i82);
         break;
        } else {
         HEAP32[i91 >> 2] = i85;
         break;
        }
       }
      } while (0);
      i82 = HEAP32[i69 >> 2] | 0;
      do {
       if ((i82 | 0) != 0) {
        i85 = i82 | 0;
        i91 = (HEAP32[i85 >> 2] | 0) - 2 | 0;
        if ((i91 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i82);
         break;
        } else {
         HEAP32[i85 >> 2] = i91;
         break;
        }
       }
      } while (0);
      i82 = HEAP32[i70 >> 2] | 0;
      do {
       if ((i82 | 0) != 0) {
        i91 = i82 | 0;
        i85 = (HEAP32[i91 >> 2] | 0) - 2 | 0;
        if ((i85 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i82);
         break;
        } else {
         HEAP32[i91 >> 2] = i85;
         break;
        }
       }
      } while (0);
      i82 = HEAP32[i50 >> 2] | 0;
      do {
       if ((i82 | 0) != 0) {
        i85 = i82 | 0;
        i91 = (HEAP32[i85 >> 2] | 0) - 2 | 0;
        if ((i91 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i82);
         break;
        } else {
         HEAP32[i85 >> 2] = i91;
         break;
        }
       }
      } while (0);
      if ((HEAP32[i43 >> 2] | 0) == 0) {
       break;
      }
     }
    }
   } while (0);
   i50 = i42;
   __ZN7WebCore12TextIterator26rangeFromLocationAndLengthEPNS_13ContainerNodeEiib(i34, i50, i55, 0, 1);
   i70 = i34 | 0;
   i69 = HEAP32[i70 >> 2] | 0;
   HEAP32[i70 >> 2] = 0;
   do {
    if ((i48 | 0) != 0) {
     i68 = i48 | 0;
     i67 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
     if ((i67 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i48);
      __ZN3WTF8fastFreeEPv(i48);
     } else {
      HEAP32[i68 >> 2] = i67;
     }
     i67 = HEAP32[i70 >> 2] | 0;
     if ((i67 | 0) == 0) {
      break;
     }
     i68 = i67 | 0;
     i63 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
     if ((i63 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i67);
      __ZN3WTF8fastFreeEPv(i67);
      break;
     } else {
      HEAP32[i68 >> 2] = i63;
      break;
     }
    }
   } while (0);
   __ZN7WebCore12TextIterator26rangeFromLocationAndLengthEPNS_13ContainerNodeEiib(i35, i50, i53, 0, 1);
   i70 = i35 | 0;
   i48 = HEAP32[i70 >> 2] | 0;
   HEAP32[i70 >> 2] = 0;
   do {
    if ((i47 | 0) != 0) {
     i55 = i47 | 0;
     i42 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     if ((i42 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i47);
      __ZN3WTF8fastFreeEPv(i47);
     } else {
      HEAP32[i55 >> 2] = i42;
     }
     i42 = HEAP32[i70 >> 2] | 0;
     if ((i42 | 0) == 0) {
      break;
     }
     i55 = i42 | 0;
     i63 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     if ((i63 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i42);
      __ZN3WTF8fastFreeEPv(i42);
      break;
     } else {
      HEAP32[i55 >> 2] = i63;
      break;
     }
    }
   } while (0);
   i70 = (i69 | 0) == 0;
   i47 = (i48 | 0) == 0;
   do {
    if (!(i70 | i47)) {
     i53 = i69 + 12 | 0;
     i50 = HEAP32[i53 >> 2] | 0;
     if ((i50 | 0) > -1) {
      i96 = i50;
     } else {
      i50 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i69 + 16 >> 2] | 0) | 0) + 1 | 0;
      HEAP32[i53 >> 2] = i50;
      i96 = i50;
     }
     i50 = HEAP32[i69 + 8 >> 2] | 0;
     if ((i50 | 0) == 0) {
      i97 = i96;
     } else {
      i63 = i50 + 8 | 0;
      HEAP32[i63 >> 2] = (HEAP32[i63 >> 2] | 0) + 1;
      i97 = HEAP32[i53 >> 2] | 0;
     }
     i53 = i4 | 0;
     HEAP32[i53 >> 2] = i50;
     HEAP32[i5 >> 2] = i97;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i36, i4, i5);
     i50 = HEAP32[i53 >> 2] | 0;
     do {
      if ((i50 | 0) != 0) {
       i53 = i50 + 8 | 0;
       i63 = i53 | 0;
       i55 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       HEAP32[i63 >> 2] = i55;
       if ((i55 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
      }
     } while (0);
     i50 = i48 + 12 | 0;
     i53 = HEAP32[i50 >> 2] | 0;
     if ((i53 | 0) > -1) {
      i98 = i53;
     } else {
      i53 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i48 + 16 >> 2] | 0) | 0) + 1 | 0;
      HEAP32[i50 >> 2] = i53;
      i98 = i53;
     }
     i53 = HEAP32[i48 + 8 >> 2] | 0;
     if ((i53 | 0) == 0) {
      i99 = i98;
     } else {
      i55 = i53 + 8 | 0;
      HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
      i99 = HEAP32[i50 >> 2] | 0;
     }
     i50 = i6 | 0;
     HEAP32[i50 >> 2] = i53;
     HEAP32[i7 >> 2] = i99;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i37, i6, i7);
     i53 = HEAP32[i50 >> 2] | 0;
     do {
      if ((i53 | 0) != 0) {
       i50 = i53 + 8 | 0;
       i55 = i50 | 0;
       i63 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
       HEAP32[i55 >> 2] = i63;
       if ((i63 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_(i1, i36, i37);
     i53 = HEAP32[i37 >> 2] | 0;
     do {
      if ((i53 | 0) != 0) {
       i50 = i53 + 8 | 0;
       i63 = i50 | 0;
       i55 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
       HEAP32[i63 >> 2] = i55;
       if ((i55 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
      }
     } while (0);
     i53 = HEAP32[i36 >> 2] | 0;
     if ((i53 | 0) == 0) {
      break;
     }
     i50 = i53 + 8 | 0;
     i53 = i50 | 0;
     i55 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
     HEAP32[i53 >> 2] = i55;
     if ((i55 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
    }
   } while (0);
   i50 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i50 | 0) != 0) {
     i55 = i50 + 8 | 0;
     i53 = i55 | 0;
     i63 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
     HEAP32[i53 >> 2] = i63;
     if ((i63 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
    }
   } while (0);
   i50 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i50 | 0) != 0) {
     i55 = i50 + 8 | 0;
     i63 = i55 | 0;
     i53 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
     HEAP32[i63 >> 2] = i53;
     if ((i53 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
    }
   } while (0);
   i50 = HEAP32[i43 >> 2] | 0;
   do {
    if ((i50 | 0) != 0) {
     i55 = i50 + 8 | 0;
     i53 = i55 | 0;
     i63 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
     HEAP32[i53 >> 2] = i63;
     if ((i63 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
    }
   } while (0);
   do {
    if (!i47) {
     i50 = i48 | 0;
     i43 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     if ((i43 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i48);
      __ZN3WTF8fastFreeEPv(i48);
      break;
     } else {
      HEAP32[i50 >> 2] = i43;
      break;
     }
    }
   } while (0);
   if (i70) {
    break;
   }
   i48 = i69 | 0;
   i47 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
   if ((i47 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i69);
    __ZN3WTF8fastFreeEPv(i69);
    break;
   } else {
    HEAP32[i48 >> 2] = i47;
    break;
   }
  }
 } while (0);
 i21 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i11 = i21 + 8 | 0;
   i24 = i11 | 0;
   i36 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i36;
   if ((i36 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i21 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i9 = i21 + 8 | 0;
   i11 = i9 | 0;
   i36 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i36;
   if ((i36 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i21 = HEAP32[i41 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i41 = i21 + 8 | 0;
   i9 = i41 | 0;
   i36 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i36;
   if ((i36 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
  }
 } while (0);
 i21 = HEAP32[i40 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i40 = i21 + 8 | 0;
 i21 = i40 | 0;
 i41 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
 HEAP32[i21 >> 2] = i41;
 if ((i41 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17ApplyStyleCommand27applyInlineStyleToNodeRangeEPNS_12EditingStyleEN3WTF10PassRefPtrINS_4NodeEEES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 120 | 0;
 i15 = i5 + 128 | 0;
 i16 = i5 + 144 | 0;
 i17 = i5 + 152 | 0;
 i18 = i5 + 176 | 0;
 i19 = i5 + 184 | 0;
 i20 = i5 + 192 | 0;
 if ((HEAP8[i1 + 196 | 0] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 i21 = i1 + 8 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i21 >> 2] | 0);
 i22 = i8 | 0;
 HEAP32[i22 >> 2] = 0;
 i23 = i8 + 4 | 0;
 HEAP32[i23 >> 2] = 0;
 i24 = i8 + 8 | 0;
 HEAP32[i24 >> 2] = 0;
 i25 = i3 | 0;
 i3 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 i25 = i4 | 0;
 L4 : do {
  if ((i3 | 0) == 0) {
   i26 = 1;
   i27 = 0;
  } else {
   i4 = i13 | 0;
   i28 = i13 + 4 | 0;
   i29 = i13 + 8 | 0;
   i30 = i13 + 12 | 0;
   i31 = i13 + 16 | 0;
   i32 = i13 + 20 | 0;
   i33 = i32;
   i34 = i13 + 24 | 0;
   i35 = i13 + 40 | 0;
   i36 = i13 + 44 | 0;
   i37 = i13 + 48 | 0;
   i38 = i34;
   i39 = i13 + 28 | 0;
   i40 = i13 + 32 | 0;
   i41 = i13 + 33 | 0;
   i42 = i13 + 34 | 0;
   i43 = i13 + 35 | 0;
   i44 = i13 + 36 | 0;
   i45 = i13 + 37 | 0;
   i46 = i9;
   i47 = i9 | 0;
   i48 = i2 + 4 | 0;
   i49 = i1 | 0;
   i50 = i10 | 0;
   i51 = i12 | 0;
   i52 = i6 | 0;
   i53 = i11 | 0;
   i54 = i7 | 0;
   i55 = i3;
   i56 = 0;
   L6 : while (1) {
    if ((i55 | 0) == (HEAP32[i25 >> 2] | 0)) {
     i57 = i56;
     break;
    }
    i58 = i55 + 12 | 0;
    if ((HEAP32[i58 >> 2] & 2 | 0) == 0) {
     i59 = 7;
    } else {
     i60 = HEAP32[i55 + 36 >> 2] | 0;
     if ((i60 | 0) == 0) {
      i59 = 7;
     } else {
      i61 = i60;
      i59 = 8;
     }
    }
    do {
     if ((i59 | 0) == 7) {
      i59 = 0;
      i60 = HEAP32[i55 + 28 >> 2] | 0;
      if ((i60 | 0) != 0) {
       i61 = i60;
       i59 = 8;
       break;
      }
      i60 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i55) | 0;
      if ((i60 | 0) == 0) {
       i62 = 0;
       i63 = 1;
      } else {
       i64 = i60;
       i65 = 0;
       i59 = 10;
      }
     }
    } while (0);
    if ((i59 | 0) == 8) {
     i59 = 0;
     i64 = i61;
     i65 = (i61 | 0) == 0;
     i59 = 10;
    }
    if ((i59 | 0) == 10) {
     i59 = 0;
     i60 = i64 + 8 | 0;
     HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
     i62 = i64;
     i63 = i65;
    }
    do {
     if ((i56 | 0) != 0) {
      i60 = i56 + 8 | 0;
      i66 = i60 | 0;
      i67 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
      HEAP32[i66 >> 2] = i67;
      if ((i67 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
     }
    } while (0);
    i60 = i55 + 32 | 0;
    if ((HEAP32[i58 >> 2] & 2048 | 0) == 0) {
     i68 = i60 | 0;
    } else {
     i68 = HEAP32[i60 >> 2] | 0;
    }
    L28 : do {
     if ((HEAP32[i68 >> 2] | 0) == 0) {
      i69 = i62;
     } else {
      if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i55, 0, 1) | 0)) {
       i69 = i62;
       break;
      }
      do {
       if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i55, 1, 1) | 0)) {
        if ((HEAP32[i58 >> 2] & 16 | 0) == 0) {
         break;
        }
        i60 = HEAP32[i25 >> 2] | 0;
        if ((i60 | 0) != 0) {
         if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i60, i55) | 0) {
          i57 = i62;
          break L6;
         }
        }
        i60 = HEAP32[i55 + 48 >> 2] | 0;
        do {
         if ((i60 | 0) == 0) {
          i59 = 26;
         } else {
          i67 = HEAP32[i60 + 8 >> 2] | 0;
          if ((i67 | 0) == 0) {
           i59 = 26;
           break;
          }
          __ZNK7WebCore15StyleProperties11mutableCopyEv(i7, i67);
          i67 = HEAP32[i54 >> 2] | 0;
          HEAP32[i47 >> 2] = i67;
          i70 = i67;
         }
        } while (0);
        if ((i59 | 0) == 26) {
         i59 = 0;
         __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i46, 0);
         i70 = HEAP32[i47 >> 2] | 0;
        }
        HEAP32[i47 >> 2] = 0;
        i60 = HEAP32[i48 >> 2] | 0;
        if ((i60 | 0) != 0) {
         __ZN7WebCore22MutableStyleProperties26mergeAndOverrideOnConflictERKNS_15StylePropertiesE(i70, i60 | 0);
        }
        HEAP32[i50 >> 2] = i55;
        if ((i55 | 0) != 0) {
         i60 = i55 + 8 | 0;
         HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
        }
        __ZNK7WebCore15StyleProperties6asTextEv(i12, i70 | 0);
        i60 = HEAP32[i51 >> 2] | 0;
        do {
         if ((i60 | 0) == 0) {
          HEAP32[i52 >> 2] = 0;
         } else {
          if ((HEAP32[i60 + 16 >> 2] & 16 | 0) == 0) {
           __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i60);
           break;
          } else {
           HEAP32[i52 >> 2] = i60;
           i67 = i60 | 0;
           HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 2;
           break;
          }
         }
        } while (0);
        HEAP32[i53 >> 2] = HEAP32[i52 >> 2];
        __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i49, i10, __ZN7WebCore9HTMLNames9styleAttrE, i11);
        i60 = HEAP32[i53 >> 2] | 0;
        do {
         if ((i60 | 0) != 0) {
          i67 = i60 | 0;
          i66 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
          if ((i66 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i60);
           break;
          } else {
           HEAP32[i67 >> 2] = i66;
           break;
          }
         }
        } while (0);
        i60 = HEAP32[i51 >> 2] | 0;
        do {
         if ((i60 | 0) != 0) {
          i66 = i60 | 0;
          i67 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
          if ((i67 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i60);
           break;
          } else {
           HEAP32[i66 >> 2] = i67;
           break;
          }
         }
        } while (0);
        i60 = HEAP32[i50 >> 2] | 0;
        do {
         if ((i60 | 0) != 0) {
          i67 = i60 + 8 | 0;
          i66 = i67 | 0;
          i71 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
          HEAP32[i66 >> 2] = i71;
          if ((i71 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i67 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i67 - 8 | 0);
         }
        } while (0);
        i60 = HEAP32[i55 + 28 >> 2] | 0;
        if ((i60 | 0) == 0) {
         i67 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i55) | 0;
         if ((i67 | 0) == 0) {
          i72 = 0;
         } else {
          i73 = i67;
          i59 = 51;
         }
        } else {
         i73 = i60;
         i59 = 51;
        }
        if ((i59 | 0) == 51) {
         i59 = 0;
         i60 = i73 + 8 | 0;
         HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
         i72 = i73;
        }
        do {
         if (!i63) {
          i60 = i62 + 8 | 0;
          i67 = i60 | 0;
          i71 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
          HEAP32[i67 >> 2] = i71;
          if ((i71 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
         }
        } while (0);
        if ((i70 | 0) == 0) {
         i69 = i72;
         break L28;
        }
        i60 = i70 | 0;
        i71 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
        if ((i71 | 0) != 0) {
         HEAP32[i60 >> 2] = i71;
         i69 = i72;
         break L28;
        }
        if ((HEAP32[i70 + 4 >> 2] & 4 | 0) == 0) {
         __ZN7WebCore24ImmutableStylePropertiesD1Ev(i70);
         __ZN3WTF8fastFreeEPv(i70);
         i69 = i72;
         break L28;
        } else {
         __ZN7WebCore22MutableStylePropertiesD1Ev(i70);
         __ZN3WTF8fastFreeEPv(i70);
         i69 = i72;
         break L28;
        }
       }
      } while (0);
      if (__ZN7WebCore7isBlockEPKNS_4NodeE(i55) | 0) {
       i69 = i62;
       break;
      }
      do {
       if ((HEAP32[i58 >> 2] & 2 | 0) != 0) {
        if ((__ZNK7WebCore13ContainerNode14childNodeCountEv(i55) | 0) == 0) {
         break;
        }
        if (__ZNK7WebCore4Node8containsEPKS0_(i55, HEAP32[i25 >> 2] | 0) | 0) {
         i69 = i62;
         break L28;
        }
        if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i55, 0, 1) | 0)) {
         i69 = i62;
         break L28;
        }
        i71 = i55 + 28 | 0;
        i60 = HEAP32[i71 >> 2] | 0;
        if ((i60 | 0) == 0) {
         i74 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i55) | 0;
        } else {
         i74 = i60;
        }
        do {
         if ((HEAP32[i58 >> 2] & 2 | 0) != 0) {
          i60 = HEAP32[i55 + 36 >> 2] | 0;
          if ((i60 | 0) == 0 | (i60 | 0) == (i74 | 0)) {
           break;
          } else {
           i75 = i60;
          }
          while (1) {
           if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i75, 0, 1) | 0)) {
            i69 = i62;
            break L28;
           }
           if ((HEAP32[i75 + 12 >> 2] & 2 | 0) == 0) {
            i59 = 75;
           } else {
            i60 = HEAP32[i75 + 36 >> 2] | 0;
            if ((i60 | 0) == 0) {
             i59 = 75;
            } else {
             i76 = i60;
            }
           }
           do {
            if ((i59 | 0) == 75) {
             i59 = 0;
             i60 = HEAP32[i75 + 28 >> 2] | 0;
             if ((i60 | 0) != 0) {
              i76 = i60;
              break;
             }
             i76 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i75) | 0;
            }
           } while (0);
           if ((i76 | 0) == 0 | (i76 | 0) == (i74 | 0)) {
            break;
           } else {
            i75 = i76;
           }
          }
         }
        } while (0);
        if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(HEAP32[i55 + 16 >> 2] | 0, 0, 1) | 0)) {
         i69 = i62;
         break L28;
        }
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i55 >> 2] | 0) + 132 >> 2] & 31](i55) | 0) {
         break;
        }
        i60 = HEAP32[i71 >> 2] | 0;
        if ((i60 | 0) == 0) {
         i67 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i55) | 0;
         if ((i67 | 0) == 0) {
          i77 = 0;
         } else {
          i78 = i67;
          i59 = 82;
         }
        } else {
         i78 = i60;
         i59 = 82;
        }
        if ((i59 | 0) == 82) {
         i59 = 0;
         i60 = i78 + 8 | 0;
         HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
         i77 = i78;
        }
        if (i63) {
         i69 = i77;
         break L28;
        }
        i60 = i62 + 8 | 0;
        i67 = i60 | 0;
        i66 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
        HEAP32[i67 >> 2] = i66;
        if ((i66 | 0) >= 1) {
         i69 = i77;
         break L28;
        }
        if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
         i69 = i77;
         break L28;
        }
        __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
        i69 = i77;
        break L28;
       }
      } while (0);
      i60 = HEAP32[i55 + 28 >> 2] | 0;
      L123 : do {
       if ((i60 | 0) == 0) {
        i79 = i55;
       } else {
        i66 = i55;
        i67 = i60;
        while (1) {
         i80 = HEAP32[i25 >> 2] | 0;
         if ((i80 | 0) == (i67 | 0)) {
          i79 = i66;
          break L123;
         }
         if (__ZNK7WebCore4Node8containsEPKS0_(i67, i80) | 0) {
          i79 = i66;
          break L123;
         }
         do {
          if (__ZN7WebCore7isBlockEPKNS_4NodeE(i67) | 0) {
           if ((HEAP32[i67 + 12 >> 2] & 4 | 0) == 0) {
            i79 = i66;
            break L123;
           }
           i80 = HEAP32[i67 + 44 >> 2] | 0;
           i81 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
           if ((i80 | 0) == (i81 | 0)) {
            break;
           }
           if ((HEAP32[i80 + 12 >> 2] | 0) != (HEAP32[i81 + 12 >> 2] | 0)) {
            i79 = i66;
            break L123;
           }
           if ((HEAP32[i80 + 16 >> 2] | 0) != (HEAP32[i81 + 16 >> 2] | 0)) {
            i79 = i66;
            break L123;
           }
          }
         } while (0);
         if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i67, 0, 1) | 0)) {
          i79 = i66;
          break L123;
         }
         i81 = i67 + 28 | 0;
         i80 = HEAP32[i81 >> 2] | 0;
         if ((i80 | 0) == 0) {
          i82 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i67) | 0;
         } else {
          i82 = i80;
         }
         do {
          if ((HEAP32[i67 + 12 >> 2] & 2 | 0) != 0) {
           i80 = HEAP32[i67 + 36 >> 2] | 0;
           if ((i80 | 0) == 0 | (i80 | 0) == (i82 | 0)) {
            break;
           } else {
            i83 = i80;
           }
           while (1) {
            if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i83, 0, 1) | 0)) {
             i79 = i66;
             break L123;
            }
            if ((HEAP32[i83 + 12 >> 2] & 2 | 0) == 0) {
             i59 = 103;
            } else {
             i80 = HEAP32[i83 + 36 >> 2] | 0;
             if ((i80 | 0) == 0) {
              i59 = 103;
             } else {
              i84 = i80;
             }
            }
            do {
             if ((i59 | 0) == 103) {
              i59 = 0;
              i80 = HEAP32[i83 + 28 >> 2] | 0;
              if ((i80 | 0) != 0) {
               i84 = i80;
               break;
              }
              i84 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i83) | 0;
             }
            } while (0);
            if ((i84 | 0) == 0 | (i84 | 0) == (i82 | 0)) {
             break;
            } else {
             i83 = i84;
            }
           }
          }
         } while (0);
         i80 = HEAP32[i81 >> 2] | 0;
         if ((i80 | 0) == 0) {
          i79 = i67;
          break;
         } else {
          i66 = i67;
          i67 = i80;
         }
        }
       }
      } while (0);
      i60 = i79 + 28 | 0;
      i67 = HEAP32[i60 >> 2] | 0;
      if ((i67 | 0) == 0) {
       i66 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i79) | 0;
       if ((i66 | 0) == 0) {
        i85 = 0;
       } else {
        i86 = i66;
        i59 = 108;
       }
      } else {
       i86 = i67;
       i59 = 108;
      }
      if ((i59 | 0) == 108) {
       i59 = 0;
       i67 = i86 + 8 | 0;
       HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
       i85 = i86;
      }
      do {
       if (!i63) {
        i67 = i62 + 8 | 0;
        i66 = i67 | 0;
        i71 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
        HEAP32[i66 >> 2] = i71;
        if ((i71 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i67 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i67 - 8 | 0);
       }
      } while (0);
      i67 = HEAP32[i60 >> 2] | 0;
      if ((i67 | 0) == 0) {
       i87 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i79) | 0;
      } else {
       i87 = i67;
      }
      if (!(__ZN7WebCore17ApplyStyleCommand27shouldApplyInlineStyleToRunEPNS_12EditingStyleEPNS_4NodeES4_(i1, i2, i55, i87) | 0)) {
       i69 = i85;
       break;
      }
      HEAP32[i4 >> 2] = i55;
      i67 = i55 + 8 | 0;
      HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
      HEAP32[i28 >> 2] = i79;
      if ((i79 | 0) != 0) {
       i67 = i79 + 8 | 0;
       HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
      }
      HEAP32[i29 >> 2] = i87;
      if ((i87 | 0) != 0) {
       i67 = i87 + 8 | 0;
       HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
      }
      HEAP32[i30 >> 2] = 0;
      HEAP32[i31 >> 2] = 0;
      i67 = HEAP32[i33 >> 2] | 0;
      HEAP32[i33 >> 2] = i67 & -8;
      HEAP8[i32] = i67 & 255 & -16;
      HEAP32[i35 >> 2] = 0;
      HEAP32[i36 >> 2] = 0;
      HEAP32[i37 >> 2] = 0;
      _memset(i38 | 0, 0, 14) | 0;
      i67 = HEAP32[i24 >> 2] | 0;
      if ((i67 | 0) == (HEAP32[i23 >> 2] | 0)) {
       __ZN3WTF6VectorIN7WebCore21InlineRunToApplyStyleELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i8, i13);
      } else {
       i71 = HEAP32[i22 >> 2] | 0;
       i66 = HEAP32[i4 >> 2] | 0;
       HEAP32[i4 >> 2] = 0;
       HEAP32[i71 + (i67 * 52 & -1) >> 2] = i66;
       i66 = HEAP32[i28 >> 2] | 0;
       HEAP32[i28 >> 2] = 0;
       HEAP32[i71 + (i67 * 52 & -1) + 4 >> 2] = i66;
       i66 = HEAP32[i29 >> 2] | 0;
       HEAP32[i29 >> 2] = 0;
       HEAP32[i71 + (i67 * 52 & -1) + 8 >> 2] = i66;
       i66 = HEAP32[i30 >> 2] | 0;
       HEAP32[i30 >> 2] = 0;
       HEAP32[i71 + (i67 * 52 & -1) + 12 >> 2] = i66;
       HEAP32[i71 + (i67 * 52 & -1) + 16 >> 2] = HEAP32[i31 >> 2];
       i66 = i71 + (i67 * 52 & -1) + 20 | 0;
       i80 = i66;
       i88 = HEAP32[i80 >> 2] & -8 | HEAP32[i33 >> 2] & 7;
       HEAP32[i80 >> 2] = i88;
       HEAP8[i66] = i88 & 255 & -9 | HEAP8[i32] & 8;
       i88 = HEAP32[i34 >> 2] | 0;
       HEAP32[i34 >> 2] = 0;
       HEAP32[i71 + (i67 * 52 & -1) + 24 >> 2] = i88;
       i88 = HEAP32[i39 >> 2] | 0;
       HEAP32[i39 >> 2] = 0;
       HEAP32[i71 + (i67 * 52 & -1) + 28 >> 2] = i88;
       HEAP8[i71 + (i67 * 52 & -1) + 32 | 0] = HEAP8[i40] & 1;
       HEAP8[i71 + (i67 * 52 & -1) + 33 | 0] = HEAP8[i41] & 1;
       HEAP8[i71 + (i67 * 52 & -1) + 34 | 0] = HEAP8[i42] & 1;
       HEAP8[i71 + (i67 * 52 & -1) + 35 | 0] = HEAP8[i43] & 1;
       HEAP8[i71 + (i67 * 52 & -1) + 36 | 0] = HEAP8[i44] & 1;
       HEAP8[i71 + (i67 * 52 & -1) + 37 | 0] = HEAP8[i45] & 1;
       i88 = HEAP32[i35 >> 2] | 0;
       HEAP32[i35 >> 2] = 0;
       HEAP32[i71 + (i67 * 52 & -1) + 40 >> 2] = i88;
       i88 = HEAP32[i36 >> 2] | 0;
       HEAP32[i36 >> 2] = 0;
       HEAP32[i71 + (i67 * 52 & -1) + 44 >> 2] = i88;
       i88 = HEAP32[i37 >> 2] | 0;
       HEAP32[i37 >> 2] = 0;
       HEAP32[i71 + (i67 * 52 & -1) + 48 >> 2] = i88;
       HEAP32[i24 >> 2] = i67 + 1;
      }
      __ZN7WebCore21InlineRunToApplyStyleD2Ev(i13);
      i69 = i85;
     }
    } while (0);
    i58 = (i69 | 0) == 0;
    if (!i58) {
     i67 = i69 + 8 | 0;
     HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
    }
    do {
     if ((i55 | 0) != 0) {
      i67 = i55 + 8 | 0;
      i88 = i67 | 0;
      i71 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
      HEAP32[i88 >> 2] = i71;
      if ((i71 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i67 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i67 - 8 | 0);
     }
    } while (0);
    if (i58) {
     i26 = 1;
     i27 = 0;
     break L4;
    } else {
     i55 = i69;
     i56 = i69;
    }
   }
   if ((i57 | 0) == 0) {
    i26 = 0;
    i27 = i55;
    break;
   }
   i56 = i57 + 8 | 0;
   i37 = i56 | 0;
   i36 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
   HEAP32[i37 >> 2] = i36;
   if ((i36 | 0) >= 1) {
    i26 = 0;
    i27 = i55;
    break;
   }
   if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
    i26 = 0;
    i27 = i55;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
   i26 = 0;
   i27 = i55;
  }
 } while (0);
 i57 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i57 | 0) == 0) {
   __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i21 >> 2] | 0);
  } else {
   i69 = HEAP32[i22 >> 2] | 0;
   i85 = i14 | 0;
   i13 = i16 | 0;
   i8 = i15 | 0;
   i87 = i15 + 4 | 0;
   i79 = i15 + 8 | 0;
   i62 = i79;
   i63 = 0;
   while (1) {
    i86 = HEAP32[i69 + (i63 * 52 & -1) + 8 >> 2] | 0;
    HEAP32[i85 >> 2] = i86;
    if ((i86 | 0) != 0) {
     i84 = i86 + 8 | 0;
     HEAP32[i84 >> 2] = (HEAP32[i84 >> 2] | 0) + 1;
    }
    __ZN7WebCore17ApplyStyleCommand35removeConflictingInlineStyleFromRunEPNS_12EditingStyleERN3WTF6RefPtrINS_4NodeEEES7_NS3_10PassRefPtrIS5_EE(i1, i2, i69 + (i63 * 52 & -1) | 0, i69 + (i63 * 52 & -1) + 4 | 0, i14);
    i84 = HEAP32[i85 >> 2] | 0;
    do {
     if ((i84 | 0) != 0) {
      i86 = i84 + 8 | 0;
      i83 = i86 | 0;
      i82 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
      HEAP32[i83 >> 2] = i82;
      if ((i82 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i86 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i86 - 8 | 0);
     }
    } while (0);
    if (i57 >>> 0 <= i63 >>> 0) {
     i59 = 145;
     break;
    }
    i84 = HEAP32[i69 + (i63 * 52 & -1) >> 2] | 0;
    HEAP32[i13 >> 2] = i84;
    if ((i84 | 0) != 0) {
     i58 = i84 + 8 | 0;
     HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
    }
    __ZN7WebCore17ApplyStyleCommand34positionToComputeInlineStyleChangeEN3WTF10PassRefPtrINS_4NodeEEERNS1_6RefPtrIS3_EE(i15, i1, i16, i69 + (i63 * 52 & -1) + 24 | 0);
    i58 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    i84 = i69 + (i63 * 52 & -1) + 12 | 0;
    i86 = HEAP32[i84 >> 2] | 0;
    HEAP32[i84 >> 2] = i58;
    do {
     if ((i86 | 0) != 0) {
      i58 = i86 + 8 | 0;
      i84 = i58 | 0;
      i82 = (HEAP32[i84 >> 2] | 0) - 1 | 0;
      HEAP32[i84 >> 2] = i82;
      if ((i82 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
     }
    } while (0);
    HEAP32[i69 + (i63 * 52 & -1) + 16 >> 2] = HEAP32[i87 >> 2];
    i86 = i69 + (i63 * 52 & -1) + 20 | 0;
    i58 = i86;
    i82 = HEAP32[i58 >> 2] & -8 | HEAP32[i62 >> 2] & 7;
    HEAP32[i58 >> 2] = i82;
    HEAP8[i86] = i82 & 255 & -9 | HEAP8[i79] & 8;
    i82 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i82 | 0) != 0) {
      i86 = i82 + 8 | 0;
      i58 = i86 | 0;
      i84 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
      HEAP32[i58 >> 2] = i84;
      if ((i84 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i86 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i86 - 8 | 0);
     }
    } while (0);
    i82 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i82 | 0) != 0) {
      i86 = i82 + 8 | 0;
      i84 = i86 | 0;
      i58 = (HEAP32[i84 >> 2] | 0) - 1 | 0;
      HEAP32[i84 >> 2] = i58;
      if ((i58 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i86 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i86 - 8 | 0);
     }
    } while (0);
    i63 = i63 + 1 | 0;
    if (i63 >>> 0 >= i57 >>> 0) {
     break;
    }
   }
   if ((i59 | 0) == 145) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i21 >> 2] | 0);
   if ((i57 | 0) == 0) {
    break;
   }
   i63 = HEAP32[i22 >> 2] | 0;
   i13 = i17 + 20 | 0;
   i8 = i17 + 16 | 0;
   i79 = i17 + 12 | 0;
   i62 = i17 | 0;
   i69 = 0;
   while (1) {
    __ZN7WebCore11StyleChangeC1EPNS_12EditingStyleERKNS_8PositionE(i17, i2, i63 + (i69 * 52 & -1) + 12 | 0);
    __ZN7WebCore11StyleChangeaSEOS0_(i63 + (i69 * 52 & -1) + 28 | 0, i17) | 0;
    i87 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i87 | 0) != 0) {
      i85 = i87 | 0;
      i55 = (HEAP32[i85 >> 2] | 0) - 2 | 0;
      if ((i55 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i87);
       break;
      } else {
       HEAP32[i85 >> 2] = i55;
       break;
      }
     }
    } while (0);
    i87 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i87 | 0) != 0) {
      i55 = i87 | 0;
      i85 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
      if ((i85 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i87);
       break;
      } else {
       HEAP32[i55 >> 2] = i85;
       break;
      }
     }
    } while (0);
    i87 = HEAP32[i79 >> 2] | 0;
    do {
     if ((i87 | 0) != 0) {
      i85 = i87 | 0;
      i55 = (HEAP32[i85 >> 2] | 0) - 2 | 0;
      if ((i55 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i87);
       break;
      } else {
       HEAP32[i85 >> 2] = i55;
       break;
      }
     }
    } while (0);
    i87 = HEAP32[i62 >> 2] | 0;
    do {
     if ((i87 | 0) != 0) {
      i55 = i87 | 0;
      i85 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
      if ((i85 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i87);
       break;
      } else {
       HEAP32[i55 >> 2] = i85;
       break;
      }
     }
    } while (0);
    i69 = i69 + 1 | 0;
    if (i69 >>> 0 >= i57 >>> 0) {
     break;
    }
   }
   if ((i57 | 0) == 0) {
    break;
   }
   i69 = HEAP32[i22 >> 2] | 0;
   i62 = i19 | 0;
   i79 = i20 | 0;
   i8 = i1 | 0;
   i13 = i1;
   i63 = i18 | 0;
   i87 = 0;
   while (1) {
    i85 = HEAP32[i69 + (i87 * 52 & -1) + 24 >> 2] | 0;
    do {
     if ((i85 | 0) != 0) {
      i55 = HEAP32[(HEAP32[i13 >> 2] | 0) + 60 >> 2] | 0;
      HEAP32[i63 >> 2] = i85;
      i82 = i85 + 8 | 0;
      HEAP32[i82 >> 2] = (HEAP32[i82 >> 2] | 0) + 1;
      FUNCTION_TABLE_viii[i55 & 3](i8, i18, 1);
      i55 = HEAP32[i63 >> 2] | 0;
      if ((i55 | 0) == 0) {
       break;
      }
      i82 = i55 + 8 | 0;
      i55 = i82 | 0;
      i86 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
      HEAP32[i55 >> 2] = i86;
      if ((i86 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i82 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i82 - 8 | 0);
     }
    } while (0);
    i85 = i69 + (i87 * 52 & -1) | 0;
    i82 = HEAP32[i85 >> 2] | 0;
    do {
     if ((i82 | 0) != 0) {
      i86 = i69 + (i87 * 52 & -1) + 4 | 0;
      i55 = HEAP32[i86 >> 2] | 0;
      if ((i55 | 0) == 0) {
       break;
      }
      if ((HEAP32[i82 + 12 >> 2] & 256 | 0) == 0) {
       break;
      }
      if ((HEAP32[i55 + 12 >> 2] & 256 | 0) == 0) {
       break;
      }
      HEAP32[i62 >> 2] = i82;
      HEAP32[i85 >> 2] = 0;
      HEAP32[i79 >> 2] = i55;
      HEAP32[i86 >> 2] = 0;
      __ZN7WebCore17ApplyStyleCommand22applyInlineStyleChangeEN3WTF10PassRefPtrINS_4NodeEEES4_RNS_11StyleChangeENS0_17EAddStyledElementE(i1, i19, i20, i69 + (i87 * 52 & -1) + 28 | 0, 0);
      i86 = HEAP32[i79 >> 2] | 0;
      do {
       if ((i86 | 0) != 0) {
        i55 = i86 + 8 | 0;
        i58 = i55 | 0;
        i84 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
        HEAP32[i58 >> 2] = i84;
        if ((i84 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
       }
      } while (0);
      i86 = HEAP32[i62 >> 2] | 0;
      if ((i86 | 0) == 0) {
       break;
      }
      i60 = i86 + 8 | 0;
      i86 = i60 | 0;
      i55 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
      HEAP32[i86 >> 2] = i55;
      if ((i55 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
     }
    } while (0);
    i87 = i87 + 1 | 0;
    if (i87 >>> 0 >= i57 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 do {
  if (!i26) {
   i57 = i27 + 8 | 0;
   i20 = i57 | 0;
   i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
  }
 } while (0);
 i27 = HEAP32[i24 >> 2] | 0;
 if ((i27 | 0) != 0) {
  i26 = HEAP32[i22 >> 2] | 0;
  i57 = i26 + (i27 * 52 & -1) | 0;
  i27 = i26;
  while (1) {
   __ZN7WebCore21InlineRunToApplyStyleD2Ev(i27);
   i27 = i27 + 52 | 0;
   if ((i27 | 0) == (i57 | 0)) {
    break;
   }
  }
  HEAP32[i24 >> 2] = 0;
 }
 i24 = HEAP32[i22 >> 2] | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i22 >> 2] = 0;
 HEAP32[i23 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i24);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17ApplyStyleCommand17removeInlineStyleEPNS_12EditingStyleERKNS_8PositionES5_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 48 | 0;
 i11 = i5 + 64 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 96 | 0;
 i14 = i5 + 112 | 0;
 i15 = i5 + 120 | 0;
 i16 = i5 + 136 | 0;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i8, i3, 1);
 i17 = __ZNK7WebCore8Position13containerNodeEv(i8) | 0;
 do {
  if ((i17 | 0) != 0) {
   if ((HEAP32[i17 + 12 >> 2] & 1 | 0) == 0) {
    break;
   }
   i18 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i8) | 0;
   if ((i18 | 0) != (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 168 >> 2] & 31](i17) | 0)) {
    break;
   }
   __ZN7WebCore29nextVisuallyDistinctCandidateERKNS_8PositionE(i9, i8);
   i18 = i9 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   i20 = i8 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = i19;
   do {
    if ((i21 | 0) != 0) {
     i19 = i21 + 8 | 0;
     i20 = i19 | 0;
     i22 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   i21 = HEAP32[i9 + 8 >> 2] | 0;
   i19 = i8 + 8 | 0;
   i22 = i19;
   i20 = HEAP32[i22 >> 2] & -8 | i21 & 7;
   HEAP32[i22 >> 2] = i20;
   HEAP8[i19] = i20 & 255 & -9 | i21 & 8;
   i21 = HEAP32[i18 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i20 = i21 + 8 | 0;
   i21 = i20 | 0;
   i19 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i10, i4, 1);
 i9 = __ZNK7WebCore8Position13containerNodeEv(i10) | 0;
 do {
  if ((i9 | 0) != 0) {
   if ((HEAP32[i9 + 12 >> 2] & 1 | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i10) | 0) != 0) {
    break;
   }
   __ZN7WebCore33previousVisuallyDistinctCandidateERKNS_8PositionE(i11, i10);
   i17 = i11 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   i19 = i10 | 0;
   i21 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i20;
   do {
    if ((i21 | 0) != 0) {
     i20 = i21 + 8 | 0;
     i19 = i20 | 0;
     i22 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   HEAP32[i10 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   i21 = HEAP32[i11 + 8 >> 2] | 0;
   i18 = i10 + 8 | 0;
   i20 = i18;
   i22 = HEAP32[i20 >> 2] & -8 | i21 & 7;
   HEAP32[i20 >> 2] = i22;
   HEAP8[i18] = i22 & 255 & -9 | i21 & 8;
   i21 = HEAP32[i17 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i22 = i21 + 8 | 0;
   i21 = i22 | 0;
   i18 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
  }
 } while (0);
 i11 = i8 | 0;
 __ZN7WebCore17ApplyStyleCommand29pushDownInlineStyleAroundNodeEPNS_12EditingStyleEPNS_4NodeE(i1, i2, HEAP32[i11 >> 2] | 0);
 i9 = i10 | 0;
 __ZN7WebCore17ApplyStyleCommand29pushDownInlineStyleAroundNodeEPNS_12EditingStyleEPNS_4NodeE(i1, i2, HEAP32[i9 >> 2] | 0);
 i22 = i3 | 0;
 i18 = HEAP32[i22 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i23 = i8;
 } else {
  i23 = (HEAP32[i18 + 12 >> 2] & 256 | 0) == 0 ? i8 : i3;
 }
 i8 = i12 | 0;
 i18 = HEAP32[i23 >> 2] | 0;
 HEAP32[i8 >> 2] = i18;
 if ((i18 | 0) != 0) {
  i21 = i18 + 8 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 }
 i21 = i12 + 4 | 0;
 HEAP32[i21 >> 2] = HEAP32[i23 + 4 >> 2];
 i18 = HEAP32[i23 + 8 >> 2] | 0;
 i23 = i12 + 8 | 0;
 i20 = i23;
 i19 = HEAP32[i20 >> 2] & -8 | i18 & 7;
 HEAP32[i20 >> 2] = i19;
 HEAP8[i23] = i19 & 255 & -9 | i18 & 8;
 i18 = i4 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i24 = i10;
 } else {
  i24 = (HEAP32[i19 + 12 >> 2] & 256 | 0) == 0 ? i10 : i4;
 }
 i10 = i13 | 0;
 i19 = HEAP32[i24 >> 2] | 0;
 HEAP32[i10 >> 2] = i19;
 if ((i19 | 0) != 0) {
  i25 = i19 + 8 | 0;
  HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
 }
 i25 = i13 + 4 | 0;
 HEAP32[i25 >> 2] = HEAP32[i24 + 4 >> 2];
 i19 = HEAP32[i24 + 8 >> 2] | 0;
 i24 = i13 + 8 | 0;
 i26 = i24;
 i27 = HEAP32[i26 >> 2] & -8 | i19 & 7;
 HEAP32[i26 >> 2] = i27;
 HEAP8[i24] = i27 & 255 & -9 | i19 & 8;
 i19 = HEAP32[i22 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i28 = 0;
 } else {
  i22 = i19 + 8 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
  i28 = i19;
 }
 i19 = i1 + 192 | 0;
 i22 = i1 + 200 | 0;
 i27 = i14 | 0;
 i29 = i15 | 0;
 i30 = i15 + 4 | 0;
 i31 = i15 + 8 | 0;
 i32 = i31;
 i33 = i6 | 0;
 i34 = i16 | 0;
 i35 = i16 + 4 | 0;
 i36 = i16 + 8 | 0;
 i37 = i36;
 i38 = i7 | 0;
 i39 = i28;
 while (1) {
  if ((i39 | 0) == 0) {
   i40 = 35;
   break;
  }
  L45 : do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i39 >> 2] | 0) + 132 >> 2] & 31](i39) | 0) {
    if ((HEAP32[i39 + 12 >> 2] & 2 | 0) == 0) {
     i40 = 42;
    } else {
     i28 = HEAP32[i39 + 36 >> 2] | 0;
     if ((i28 | 0) == 0) {
      i40 = 42;
     } else {
      i41 = i28;
     }
    }
    do {
     if ((i40 | 0) == 42) {
      i40 = 0;
      i28 = HEAP32[i39 + 28 >> 2] | 0;
      if ((i28 | 0) != 0) {
       i41 = i28;
       break;
      }
      i28 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i39) | 0;
      if ((i28 | 0) == 0) {
       i42 = 0;
       break L45;
      } else {
       i41 = i28;
      }
     }
    } while (0);
    i28 = i41 + 8 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
    i42 = i41;
   } else {
    i28 = HEAP32[i39 + 28 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i43 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i39) | 0;
     if ((i43 | 0) == 0) {
      i42 = 0;
      break;
     } else {
      i44 = i43;
     }
    } else {
     i44 = i28;
    }
    i28 = i44 + 8 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
    i42 = i44;
   }
  } while (0);
  i17 = i39 + 12 | 0;
  do {
   if ((HEAP32[i17 >> 2] & 16 | 0) != 0) {
    if (!(__ZNK7WebCore17ApplyStyleCommand17nodeFullySelectedEPNS_4NodeERKNS_8PositionES5_(0, i39, i3, i4) | 0)) {
     break;
    }
    i28 = i39;
    i43 = i39 + 8 | 0;
    HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
    i43 = __ZN7WebCore13NodeTraversal17previousPostOrderEPKNS_4NodeES3_(i39, 0) | 0;
    i45 = (i43 | 0) == 0;
    if (!i45) {
     i46 = i43 + 8 | 0;
     HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
    }
    i46 = i39 + 36 | 0;
    i47 = HEAP32[i46 >> 2] | 0;
    do {
     if ((i47 | 0) == 0) {
      i48 = HEAP32[i39 + 28 >> 2] | 0;
      if ((i48 | 0) != 0) {
       i49 = i48;
       i40 = 51;
       break;
      }
      i48 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i39) | 0;
      if ((i48 | 0) == 0) {
       i50 = 0;
       i51 = 1;
      } else {
       i52 = i48;
       i53 = 0;
       i40 = 53;
      }
     } else {
      i49 = i47;
      i40 = 51;
     }
    } while (0);
    if ((i40 | 0) == 51) {
     i40 = 0;
     i52 = i49;
     i53 = (i49 | 0) == 0;
     i40 = 53;
    }
    if ((i40 | 0) == 53) {
     i40 = 0;
     i47 = i52 + 8 | 0;
     HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
     i50 = i52;
     i51 = i53;
    }
    i47 = i39;
    i48 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i48 | 0) == 0) {
      i40 = 58;
     } else {
      i54 = HEAP32[i39 + 44 >> 2] | 0;
      i55 = HEAP32[i48 + 44 >> 2] | 0;
      if ((i54 | 0) == (i55 | 0)) {
       i40 = 60;
       break;
      }
      if ((HEAP32[i54 + 12 >> 2] | 0) != (HEAP32[i55 + 12 >> 2] | 0)) {
       i40 = 58;
       break;
      }
      if ((HEAP32[i54 + 16 >> 2] | 0) == (HEAP32[i55 + 16 >> 2] | 0)) {
       i40 = 60;
      } else {
       i40 = 58;
      }
     }
    } while (0);
    do {
     if ((i40 | 0) == 58) {
      i40 = 0;
      i48 = HEAP32[i22 >> 2] | 0;
      if ((i48 | 0) == 0) {
       i56 = 0;
       i57 = 0;
       break;
      }
      if (FUNCTION_TABLE_ii[i48 & 31](i47) | 0) {
       i40 = 60;
      } else {
       i56 = 0;
       i57 = 0;
      }
     }
    } while (0);
    do {
     if ((i40 | 0) == 60) {
      i40 = 0;
      i47 = __ZN3WTF10fastMallocEj(16) | 0;
      __ZN7WebCore12EditingStyleC1Ev(i47);
      i48 = HEAP32[i46 >> 2] | 0;
      if ((i48 | 0) == 0) {
       i56 = 0;
       i57 = i47;
       break;
      }
      i55 = i48 + 8 | 0;
      HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
      i56 = i48;
      i57 = i47;
     }
    } while (0);
    HEAP32[i27 >> 2] = i28;
    i46 = i39 + 8 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
    __ZN7WebCore17ApplyStyleCommand28removeInlineStyleFromElementEPNS_12EditingStyleEN3WTF10PassRefPtrINS_11HTMLElementEEENS0_22InlineStyleRemovalModeES2_(i1, i2, i14, 0, i57) | 0;
    i46 = HEAP32[i27 >> 2] | 0;
    do {
     if ((i46 | 0) != 0) {
      i47 = i46 + 8 | 0;
      i48 = i47 | 0;
      i55 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
      HEAP32[i48 >> 2] = i55;
      if ((i55 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
     }
    } while (0);
    do {
     if ((HEAP32[i17 >> 2] & 256 | 0) == 0) {
      do {
       if ((i39 | 0) == (HEAP32[i8 >> 2] | 0)) {
        do {
         if (i51) {
          HEAP32[i29 >> 2] = 0;
          HEAP32[i30 >> 2] = 0;
          i46 = HEAP32[i32 >> 2] | 0;
          HEAP32[i32 >> 2] = i46 & -8;
          HEAP8[i31] = i46 & 255 & -16;
         } else {
          if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i50 >> 2] | 0) + 132 >> 2] & 31](i50) | 0) {
           __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i15, i50);
           break;
          }
          HEAP32[i33 >> 2] = i50;
          i46 = i50 + 8 | 0;
          HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
          __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i15, i6, 1);
          i46 = HEAP32[i33 >> 2] | 0;
          if ((i46 | 0) == 0) {
           break;
          }
          i28 = i46 + 8 | 0;
          i46 = i28 | 0;
          i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
          HEAP32[i46 >> 2] = i47;
          if ((i47 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
         }
        } while (0);
        i28 = HEAP32[i29 >> 2] | 0;
        HEAP32[i29 >> 2] = 0;
        i47 = HEAP32[i8 >> 2] | 0;
        HEAP32[i8 >> 2] = i28;
        do {
         if ((i47 | 0) != 0) {
          i28 = i47 + 8 | 0;
          i46 = i28 | 0;
          i55 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
          HEAP32[i46 >> 2] = i55;
          if ((i55 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
         }
        } while (0);
        HEAP32[i21 >> 2] = HEAP32[i30 >> 2];
        i47 = HEAP32[i32 >> 2] | 0;
        i28 = HEAP32[i20 >> 2] & -8 | i47 & 7;
        HEAP32[i20 >> 2] = i28;
        HEAP8[i23] = i28 & 255 & -9 | i47 & 8;
        i47 = HEAP32[i29 >> 2] | 0;
        if ((i47 | 0) == 0) {
         break;
        }
        i28 = i47 + 8 | 0;
        i47 = i28 | 0;
        i55 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
        HEAP32[i47 >> 2] = i55;
        if ((i55 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
       }
      } while (0);
      if ((i39 | 0) != (HEAP32[i10 >> 2] | 0)) {
       break;
      }
      do {
       if (i45) {
        HEAP32[i34 >> 2] = 0;
        HEAP32[i35 >> 2] = 0;
        i28 = HEAP32[i37 >> 2] | 0;
        HEAP32[i37 >> 2] = i28 & -8;
        HEAP8[i36] = i28 & 255 & -16;
       } else {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i43 >> 2] | 0) + 132 >> 2] & 31](i43) | 0) {
         __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i16, i43);
         break;
        }
        HEAP32[i38 >> 2] = i43;
        i28 = i43 + 8 | 0;
        HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i16, i7, 2);
        i28 = HEAP32[i38 >> 2] | 0;
        if ((i28 | 0) == 0) {
         break;
        }
        i55 = i28 + 8 | 0;
        i28 = i55 | 0;
        i47 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
        HEAP32[i28 >> 2] = i47;
        if ((i47 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
       }
      } while (0);
      i55 = HEAP32[i34 >> 2] | 0;
      HEAP32[i34 >> 2] = 0;
      i47 = HEAP32[i10 >> 2] | 0;
      HEAP32[i10 >> 2] = i55;
      do {
       if ((i47 | 0) != 0) {
        i55 = i47 + 8 | 0;
        i28 = i55 | 0;
        i46 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
        HEAP32[i28 >> 2] = i46;
        if ((i46 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
       }
      } while (0);
      HEAP32[i25 >> 2] = HEAP32[i35 >> 2];
      i47 = HEAP32[i37 >> 2] | 0;
      i55 = HEAP32[i26 >> 2] & -8 | i47 & 7;
      HEAP32[i26 >> 2] = i55;
      HEAP8[i24] = i55 & 255 & -9 | i47 & 8;
      i47 = HEAP32[i34 >> 2] | 0;
      if ((i47 | 0) == 0) {
       break;
      }
      i55 = i47 + 8 | 0;
      i47 = i55 | 0;
      i46 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
      HEAP32[i47 >> 2] = i46;
      if ((i46 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
     }
    } while (0);
    i55 = (i57 | 0) == 0;
    i46 = (i56 | 0) == 0;
    do {
     if (i55) {
      if (i46) {
       break;
      }
      i47 = i56 + 8 | 0;
      i28 = i47 | 0;
      i48 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      HEAP32[i28 >> 2] = i48;
      if ((i48 | 0) >= 1) {
       i40 = 113;
       break;
      }
      if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
       i40 = 113;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      i40 = 113;
     } else {
      if (i46) {
       i40 = 114;
       break;
      } else {
       i58 = i56;
      }
      while (1) {
       __ZN7WebCore17ApplyStyleCommand26applyInlineStyleToPushDownEPNS_4NodeEPNS_12EditingStyleE(i1, i58, i57);
       i47 = HEAP32[i58 + 28 >> 2] | 0;
       i48 = (i47 | 0) == 0;
       if (!i48) {
        i28 = i47 + 8 | 0;
        HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
       }
       i28 = i58 + 8 | 0;
       i54 = i28 - 8 | 0;
       i59 = i28 | 0;
       i60 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
       HEAP32[i59 >> 2] = i60;
       do {
        if ((i60 | 0) < 1) {
         if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i54);
        }
       } while (0);
       if (i48) {
        i40 = 113;
        break;
       } else {
        i58 = i47;
       }
      }
     }
    } while (0);
    if ((i40 | 0) == 113) {
     i40 = 0;
     if (!i55) {
      i40 = 114;
     }
    }
    do {
     if ((i40 | 0) == 114) {
      i40 = 0;
      i46 = i57 | 0;
      i54 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      if ((i54 | 0) == 0) {
       __ZN7WebCore12EditingStyleD1Ev(i57);
       __ZN3WTF8fastFreeEPv(i57);
       break;
      } else {
       HEAP32[i46 >> 2] = i54;
       break;
      }
     }
    } while (0);
    do {
     if (!i51) {
      i55 = i50 + 8 | 0;
      i54 = i55 | 0;
      i46 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
      HEAP32[i54 >> 2] = i46;
      if ((i46 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
     }
    } while (0);
    do {
     if (!i45) {
      i55 = i43 + 8 | 0;
      i46 = i55 | 0;
      i54 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      HEAP32[i46 >> 2] = i54;
      if ((i54 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
     }
    } while (0);
    i43 = i39 + 8 | 0;
    i45 = i43 | 0;
    i55 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
    HEAP32[i45 >> 2] = i55;
    if ((i55 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
   }
  } while (0);
  do {
   if ((i39 | 0) == (HEAP32[i18 >> 2] | 0)) {
    i61 = 3;
    i62 = i39;
   } else {
    if ((i42 | 0) != 0) {
     i17 = i42 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    }
    i17 = i39 + 8 | 0;
    i43 = i17 | 0;
    i55 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
    HEAP32[i43 >> 2] = i55;
    if ((i55 | 0) >= 1) {
     i61 = 0;
     i62 = i42;
     break;
    }
    if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
     i61 = 0;
     i62 = i42;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    i61 = 0;
    i62 = i42;
   }
  } while (0);
  do {
   if ((i42 | 0) != 0) {
    i17 = i42 + 8 | 0;
    i55 = i17 | 0;
    i43 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
    HEAP32[i55 >> 2] = i43;
    if ((i43 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   }
  } while (0);
  if ((i61 | 0) == 3) {
   i40 = 139;
   break;
  } else {
   i39 = i62;
  }
 }
 do {
  if ((i40 | 0) == 35) {
   __ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_(i1, i12, i13);
  } else if ((i40 | 0) == 139) {
   __ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_(i1, i12, i13);
   if ((i62 | 0) == 0) {
    break;
   }
   i39 = i62 + 8 | 0;
   i61 = i39 | 0;
   i42 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
   HEAP32[i61 >> 2] = i42;
   if ((i42 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
  }
 } while (0);
 i62 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i62 | 0) != 0) {
   i10 = i62 + 8 | 0;
   i13 = i10 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i62 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i62 | 0) != 0) {
   i8 = i62 + 8 | 0;
   i10 = i8 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i62 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i62 | 0) != 0) {
   i9 = i62 + 8 | 0;
   i8 = i9 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i62 = HEAP32[i11 >> 2] | 0;
 if ((i62 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i11 = i62 + 8 | 0;
 i62 = i11 | 0;
 i9 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
 HEAP32[i62 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17ApplyStyleCommand29pushDownInlineStyleAroundNodeEPNS_12EditingStyleEPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 56 | 0;
 i7 = i4 + 64 | 0;
 i8 = i4 + 72 | 0;
 i9 = i4 + 80 | 0;
 i10 = i4 + 88 | 0;
 i11 = __ZN7WebCore17ApplyStyleCommand41highestAncestorWithConflictingInlineStyleEPNS_12EditingStyleEPNS_4NodeE(i1, i2, i3) | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i11 | 0;
 i13 = i11 + 8 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 do {
  if ((i12 | 0) == (i3 | 0)) {
   i14 = i3;
  } else {
   i13 = i5 + 12 | 0;
   i11 = i5 | 0;
   i15 = i5 + 4 | 0;
   i16 = i5 + 8 | 0;
   i17 = i6 | 0;
   i18 = i7 | 0;
   i19 = i8 | 0;
   i20 = i9 | 0;
   i21 = i10 | 0;
   i22 = i1 + 192 | 0;
   i23 = i1 + 200 | 0;
   i24 = i12;
   i25 = 0;
   i26 = 0;
   i27 = 0;
   i28 = 0;
   L6 : while (1) {
    if (!(__ZNK7WebCore4Node8containsEPKS0_(i24, i3) | 0)) {
     i29 = i24;
     i30 = i25;
     i31 = i27;
     i32 = i28;
     i33 = 101;
     break;
    }
    HEAP32[i11 >> 2] = i13;
    HEAP32[i15 >> 2] = 11;
    HEAP32[i16 >> 2] = 0;
    i34 = i24 + 12 | 0;
    i35 = HEAP32[i34 >> 2] | 0;
    do {
     if ((i35 & 2 | 0) == 0) {
      i36 = i35;
     } else {
      i37 = HEAP32[i24 + 36 >> 2] | 0;
      if ((i37 | 0) == 0) {
       i36 = i35;
       break;
      } else {
       i38 = i37;
       i39 = 0;
       i40 = 11;
      }
      while (1) {
       if ((i39 | 0) == (i40 | 0)) {
        i37 = i40 + 1 | 0;
        i41 = i37 + (i40 >>> 2) | 0;
        i42 = i41 >>> 0 > 16 >>> 0 ? i41 : 16;
        i41 = i42 >>> 0 > i37 >>> 0 ? i42 : i37;
        do {
         if (i40 >>> 0 < i41 >>> 0) {
          i37 = HEAP32[i11 >> 2] | 0;
          if (i41 >>> 0 > 11 >>> 0) {
           if (i41 >>> 0 > 1073741823 >>> 0) {
            i33 = 12;
            break L6;
           }
           i42 = __ZN3WTF18fastMallocGoodSizeEj(i41 << 2) | 0;
           HEAP32[i15 >> 2] = i42 >>> 2;
           i43 = __ZN3WTF10fastMallocEj(i42) | 0;
           HEAP32[i11 >> 2] = i43;
           i44 = i43;
          } else {
           HEAP32[i11 >> 2] = i13;
           HEAP32[i15 >> 2] = 11;
           i44 = i13;
          }
          i43 = i37;
          _memcpy(i44 | 0, i43 | 0, i40 << 2) | 0;
          if ((i13 | 0) == (i37 | 0) | (i37 | 0) == 0) {
           break;
          }
          if ((HEAP32[i11 >> 2] | 0) == (i37 | 0)) {
           HEAP32[i11 >> 2] = 0;
           HEAP32[i15 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i43);
         }
        } while (0);
        HEAP32[(HEAP32[i11 >> 2] | 0) + (HEAP32[i16 >> 2] << 2) >> 2] = i38;
        i41 = i38 + 8 | 0;
        HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
       } else {
        HEAP32[(HEAP32[i11 >> 2] | 0) + (i39 << 2) >> 2] = i38;
        i41 = i38 + 8 | 0;
        HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
       }
       i41 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
       HEAP32[i16 >> 2] = i41;
       i43 = HEAP32[i38 + 28 >> 2] | 0;
       if ((i43 | 0) == 0) {
        break;
       }
       i38 = i43;
       i39 = i41;
       i40 = HEAP32[i15 >> 2] | 0;
      }
      i36 = HEAP32[i34 >> 2] | 0;
     }
    } while (0);
    do {
     if ((i36 & 8 | 0) == 0) {
      i45 = 0;
      i46 = i27;
      i47 = i26;
      i48 = i25;
     } else {
      i35 = i24;
      i41 = HEAP32[i22 >> 2] | 0;
      do {
       if ((i41 | 0) == 0) {
        i33 = 28;
       } else {
        i43 = HEAP32[i24 + 44 >> 2] | 0;
        i37 = HEAP32[i41 + 44 >> 2] | 0;
        if ((i43 | 0) == (i37 | 0)) {
         break;
        }
        if ((HEAP32[i43 + 12 >> 2] | 0) != (HEAP32[i37 + 12 >> 2] | 0)) {
         i33 = 28;
         break;
        }
        if ((HEAP32[i43 + 16 >> 2] | 0) != (HEAP32[i37 + 16 >> 2] | 0)) {
         i33 = 28;
        }
       }
      } while (0);
      if ((i33 | 0) == 28) {
       i33 = 0;
       i41 = HEAP32[i23 >> 2] | 0;
       if ((i41 | 0) == 0) {
        i45 = 0;
        i46 = i27;
        i47 = i26;
        i48 = i25;
        break;
       }
       if (!(FUNCTION_TABLE_ii[i41 & 31](i35) | 0)) {
        i45 = 0;
        i46 = i27;
        i47 = i26;
        i48 = i25;
        break;
       }
      }
      i41 = i24;
      if ((i24 | 0) != 0) {
       i37 = i24 + 8 | 0;
       HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
      }
      if ((i25 | 0) != (i26 | 0)) {
       HEAP32[i27 + (i25 << 2) >> 2] = i35;
       i37 = i24 + 8 | 0;
       HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
       i45 = i41;
       i46 = i27;
       i47 = i26;
       i48 = i25 + 1 | 0;
       break;
      }
      i37 = i26 + 1 | 0;
      i43 = i37 + (i26 >>> 2) | 0;
      i42 = i43 >>> 0 > 16 >>> 0 ? i43 : 16;
      i43 = i42 >>> 0 > i37 >>> 0 ? i42 : i37;
      do {
       if (i26 >>> 0 < i43 >>> 0) {
        if (i43 >>> 0 > 1073741823 >>> 0) {
         i33 = 36;
         break L6;
        }
        i42 = __ZN3WTF18fastMallocGoodSizeEj(i43 << 2) | 0;
        i49 = i42 >>> 2;
        i50 = __ZN3WTF10fastMallocEj(i42) | 0;
        i42 = i50;
        i51 = i27;
        _memcpy(i50 | 0, i51 | 0, i26 << 2) | 0;
        if ((i27 | 0) == 0) {
         i52 = i42;
         i53 = i49;
         break;
        }
        i50 = (i42 | 0) == (i27 | 0);
        __ZN3WTF8fastFreeEPv(i51);
        i52 = i50 ? 0 : i42;
        i53 = i50 ? 0 : i49;
       } else {
        i52 = i27;
        i53 = i26;
       }
      } while (0);
      HEAP32[i52 + (i26 << 2) >> 2] = i35;
      i43 = i24 + 8 | 0;
      HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
      i45 = i41;
      i46 = i52;
      i47 = i53;
      i48 = i37;
     }
    } while (0);
    i43 = __ZN3WTF10fastMallocEj(16) | 0;
    i49 = i43;
    __ZN7WebCore12EditingStyleC1Ev(i49);
    do {
     if ((HEAP32[i34 >> 2] & 16 | 0) != 0) {
      HEAP32[i17 >> 2] = i24;
      i50 = i24 + 8 | 0;
      HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
      __ZN7WebCore17ApplyStyleCommand28removeInlineStyleFromElementEPNS_12EditingStyleEN3WTF10PassRefPtrINS_11HTMLElementEEENS0_22InlineStyleRemovalModeES2_(i1, i2, i6, 0, i49) | 0;
      i50 = HEAP32[i17 >> 2] | 0;
      if ((i50 | 0) == 0) {
       break;
      }
      i42 = i50 + 8 | 0;
      i50 = i42 | 0;
      i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      HEAP32[i50 >> 2] = i51;
      if ((i51 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
     }
    } while (0);
    if ((HEAP32[i16 >> 2] | 0) == 0) {
     i54 = i24;
    } else {
     i34 = (i48 | 0) == 0;
     i42 = (i45 | 0) == 0;
     i51 = i24;
     i50 = 0;
     while (1) {
      i55 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i50 << 2) >> 2] | 0;
      L64 : do {
       if ((HEAP32[i55 + 16 >> 2] | 0) == 0) {
        i56 = i51;
       } else {
        if (!(__ZNK7WebCore4Node8containsEPKS0_(i55, i3) | 0 | i34)) {
         i57 = (i55 | 0) == 0;
         i58 = i55 + 8 | 0;
         i59 = 0;
         while (1) {
          __ZN7WebCore7Element27cloneElementWithoutChildrenEv(i7, HEAP32[i46 + (i59 << 2) >> 2] | 0);
          i60 = HEAP32[i18 >> 2] | 0;
          HEAP32[i18 >> 2] = 0;
          __ZN7WebCore7Element15removeAttributeERKNS_13QualifiedNameE(i60, __ZN7WebCore9HTMLNames9styleAttrE);
          HEAP32[i19 >> 2] = i55;
          if (i57) {
           HEAP32[i20 >> 2] = 0;
          } else {
           i61 = HEAP32[i58 >> 2] | 0;
           HEAP32[i20 >> 2] = i55;
           HEAP32[i58 >> 2] = i61 + 2;
          }
          HEAP32[i21 >> 2] = i60;
          i61 = (i60 | 0) == 0;
          if (!i61) {
           i62 = i60 + 8 | 0;
           HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 1;
          }
          __ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE(i1, i8, i9, i10);
          i62 = HEAP32[i21 >> 2] | 0;
          do {
           if ((i62 | 0) != 0) {
            i63 = i62 + 8 | 0;
            i64 = i63 | 0;
            i65 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
            HEAP32[i64 >> 2] = i65;
            if ((i65 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i63 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i63 - 8 | 0);
           }
          } while (0);
          i62 = HEAP32[i20 >> 2] | 0;
          do {
           if ((i62 | 0) != 0) {
            i63 = i62 + 8 | 0;
            i65 = i63 | 0;
            i64 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
            HEAP32[i65 >> 2] = i64;
            if ((i64 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i63 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i63 - 8 | 0);
           }
          } while (0);
          i62 = HEAP32[i19 >> 2] | 0;
          do {
           if ((i62 | 0) != 0) {
            i63 = i62 + 8 | 0;
            i64 = i63 | 0;
            i65 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
            HEAP32[i64 >> 2] = i65;
            if ((i65 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i63 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i63 - 8 | 0);
           }
          } while (0);
          do {
           if (!i61) {
            i62 = i60 + 8 | 0;
            i63 = i62 | 0;
            i65 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
            HEAP32[i63 >> 2] = i65;
            if ((i65 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
           }
          } while (0);
          i59 = i59 + 1 | 0;
          if (i59 >>> 0 >= i48 >>> 0) {
           break;
          }
         }
        }
        do {
         if ((i55 | 0) == (i3 | 0)) {
          if (i42) {
           break;
          }
          __ZN7WebCore17ApplyStyleCommand26applyInlineStyleToPushDownEPNS_4NodeEPNS_12EditingStyleE(i1, i3, i49);
         } else {
          __ZN7WebCore17ApplyStyleCommand26applyInlineStyleToPushDownEPNS_4NodeEPNS_12EditingStyleE(i1, i55, i49);
          if (!(__ZNK7WebCore4Node8containsEPKS0_(i55, i3) | 0)) {
           i56 = i51;
           break L64;
          }
         }
        } while (0);
        if ((i55 | 0) != 0) {
         i59 = i55 + 8 | 0;
         HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
        }
        if ((i51 | 0) == 0) {
         i56 = i55;
         break;
        }
        i59 = i51 + 8 | 0;
        i58 = i59 | 0;
        i57 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
        HEAP32[i58 >> 2] = i57;
        if ((i57 | 0) >= 1) {
         i56 = i55;
         break;
        }
        if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
         i56 = i55;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
        i56 = i55;
       }
      } while (0);
      i55 = i50 + 1 | 0;
      if (i55 >>> 0 < (HEAP32[i16 >> 2] | 0) >>> 0) {
       i51 = i56;
       i50 = i55;
      } else {
       i54 = i56;
       break;
      }
     }
    }
    do {
     if ((i43 | 0) != 0) {
      i50 = i43;
      i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      if ((i51 | 0) == 0) {
       __ZN7WebCore12EditingStyleD1Ev(i49);
       __ZN3WTF8fastFreeEPv(i43);
       break;
      } else {
       HEAP32[i50 >> 2] = i51;
       break;
      }
     }
    } while (0);
    do {
     if ((i45 | 0) != 0) {
      i43 = i45 + 8 | 0;
      i49 = i43 | 0;
      i51 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
      HEAP32[i49 >> 2] = i51;
      if ((i51 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
     }
    } while (0);
    i43 = HEAP32[i16 >> 2] | 0;
    if ((i43 | 0) != 0) {
     i51 = HEAP32[i11 >> 2] | 0;
     i49 = i51 + (i43 << 2) | 0;
     i43 = i51;
     while (1) {
      i51 = (HEAP32[i43 >> 2] | 0) + 8 | 0;
      i50 = i51 - 8 | 0;
      i42 = i51 | 0;
      i34 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
      HEAP32[i42 >> 2] = i34;
      do {
       if ((i34 | 0) < 1) {
        if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i50);
       }
      } while (0);
      i43 = i43 + 4 | 0;
      if ((i43 | 0) == (i49 | 0)) {
       break;
      }
     }
     HEAP32[i16 >> 2] = 0;
    }
    i49 = HEAP32[i11 >> 2] | 0;
    if (!((i13 | 0) == (i49 | 0) | (i49 | 0) == 0)) {
     HEAP32[i11 >> 2] = 0;
     HEAP32[i15 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i49);
    }
    i49 = (i54 | 0) == 0;
    if ((i54 | 0) != (i3 | 0) & (i49 ^ 1)) {
     i24 = i54;
     i25 = i48;
     i26 = i47;
     i27 = i46;
     i28 = i49;
    } else {
     i29 = i54;
     i30 = i48;
     i31 = i46;
     i32 = i49;
     i33 = 101;
     break;
    }
   }
   if ((i33 | 0) == 12) {
    _WTFCrash();
   } else if ((i33 | 0) == 36) {
    _WTFCrash();
   } else if ((i33 | 0) == 101) {
    if ((i30 | 0) != 0) {
     i28 = i31 + (i30 << 2) | 0;
     i27 = i31;
     while (1) {
      i26 = (HEAP32[i27 >> 2] | 0) + 8 | 0;
      i25 = i26 - 8 | 0;
      i24 = i26 | 0;
      i15 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      HEAP32[i24 >> 2] = i15;
      do {
       if ((i15 | 0) < 1) {
        if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i25);
       }
      } while (0);
      i27 = i27 + 4 | 0;
      if ((i27 | 0) == (i28 | 0)) {
       break;
      }
     }
    }
    if ((i31 | 0) == 0) {
     if (!i32) {
      i14 = i29;
      break;
     }
     STACKTOP = i4;
     return;
    } else {
     __ZN3WTF8fastFreeEPv(i31);
     if (!i32) {
      i14 = i29;
      break;
     }
     STACKTOP = i4;
     return;
    }
   }
  }
 } while (0);
 i29 = i14 + 8 | 0;
 i14 = i29 | 0;
 i32 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i32;
 if ((i32 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17ApplyStyleCommand18joinChildTextNodesEPNS_4NodeERKNS_8PositionES5_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 56 | 0;
 i11 = i5 + 72 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 88 | 0;
 i14 = i5 + 96 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i15 = i6 | 0;
 i16 = HEAP32[i3 >> 2] | 0;
 HEAP32[i15 >> 2] = i16;
 if ((i16 | 0) == 0) {
  i17 = i6 + 8 | 0;
  i18 = 0;
  i19 = i17;
  i20 = i17;
 } else {
  i17 = i16 + 8 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
  i17 = i6 + 8 | 0;
  i16 = i17;
  i18 = HEAP32[i16 >> 2] & -8;
  i19 = i17;
  i20 = i16;
 }
 i16 = i6 + 4 | 0;
 i17 = i3 + 4 | 0;
 HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
 i21 = i3 + 8 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 i23 = i18 | i22 & 7;
 HEAP32[i20 >> 2] = i23;
 HEAP8[i19] = i23 & 255 & -9 | i22 & 8;
 i22 = i7 | 0;
 i23 = HEAP32[i4 >> 2] | 0;
 HEAP32[i22 >> 2] = i23;
 if ((i23 | 0) != 0) {
  i18 = i23 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 i18 = i7 + 4 | 0;
 i23 = i4 + 4 | 0;
 HEAP32[i18 >> 2] = HEAP32[i23 >> 2];
 i24 = i4 + 8 | 0;
 i25 = HEAP32[i24 >> 2] | 0;
 i26 = i7 + 8 | 0;
 i27 = i26;
 i28 = HEAP32[i27 >> 2] & -8 | i25 & 7;
 HEAP32[i27 >> 2] = i28;
 HEAP8[i26] = i28 & 255 & -9 | i25 & 8;
 L11 : do {
  if ((HEAP32[i2 + 12 >> 2] & 2 | 0) == 0) {
   i29 = 0;
   i30 = 81;
  } else {
   i25 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i25 | 0) == 0) {
    i29 = 0;
    i30 = 81;
    break;
   } else {
    i31 = i25;
   }
   while (1) {
    if ((HEAP32[i31 + 12 >> 2] & 1 | 0) != 0) {
     i32 = 0;
     i33 = 0;
     i34 = 0;
     i35 = i31;
     break;
    }
    i25 = HEAP32[i31 + 28 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i29 = 0;
     i30 = 81;
     break L11;
    } else {
     i31 = i25;
    }
   }
   L16 : while (1) {
    i25 = i35;
    if ((i32 | 0) == (i33 | 0)) {
     i28 = i33 + 1 | 0;
     i36 = i28 + (i33 >>> 2) | 0;
     i37 = i36 >>> 0 > 16 >>> 0 ? i36 : 16;
     i36 = i37 >>> 0 > i28 >>> 0 ? i37 : i28;
     do {
      if (i33 >>> 0 < i36 >>> 0) {
       if (i36 >>> 0 > 1073741823 >>> 0) {
        i30 = 17;
        break L16;
       }
       i37 = __ZN3WTF18fastMallocGoodSizeEj(i36 << 2) | 0;
       i38 = i37 >>> 2;
       i39 = __ZN3WTF10fastMallocEj(i37) | 0;
       i37 = i39;
       i40 = i34;
       _memcpy(i39 | 0, i40 | 0, i33 << 2) | 0;
       if ((i34 | 0) == 0) {
        i41 = i37;
        i42 = i38;
        break;
       }
       i39 = (i37 | 0) == (i34 | 0);
       __ZN3WTF8fastFreeEPv(i40);
       i41 = i39 ? 0 : i37;
       i42 = i39 ? 0 : i38;
      } else {
       i41 = i34;
       i42 = i33;
      }
     } while (0);
     HEAP32[i41 + (i33 << 2) >> 2] = i25;
     i36 = i35 + 8 | 0;
     HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
     i43 = i41;
     i44 = i42;
     i45 = i28;
    } else {
     HEAP32[i34 + (i32 << 2) >> 2] = i25;
     i36 = i35 + 8 | 0;
     HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
     i43 = i34;
     i44 = i33;
     i45 = i32 + 1 | 0;
    }
    i36 = i35;
    while (1) {
     i38 = HEAP32[i36 + 28 >> 2] | 0;
     if ((i38 | 0) == 0) {
      break L16;
     }
     if ((HEAP32[i38 + 12 >> 2] & 1 | 0) == 0) {
      i36 = i38;
     } else {
      i32 = i45;
      i33 = i44;
      i34 = i43;
      i35 = i38;
      continue L16;
     }
    }
   }
   if ((i30 | 0) == 17) {
    _WTFCrash();
   }
   i36 = (i45 | 0) == 0;
   if (i36) {
    i29 = i43;
    i30 = 81;
    break;
   }
   i25 = i9 | 0;
   i28 = i8 | 0;
   i38 = i8 + 4 | 0;
   i39 = i8 + 8 | 0;
   i37 = i11 | 0;
   i40 = i10 | 0;
   i46 = i10 + 4 | 0;
   i47 = i10 + 8 | 0;
   i48 = i12 | 0;
   i49 = i1 | 0;
   i50 = i13 | 0;
   i51 = i1;
   i52 = i14 | 0;
   i53 = 0;
   while (1) {
    i54 = HEAP32[i43 + (i53 << 2) >> 2] | 0;
    i55 = HEAP32[i54 + 28 >> 2] | 0;
    do {
     if ((i55 | 0) != 0) {
      if ((HEAP32[i55 + 12 >> 2] & 1 | 0) == 0) {
       break;
      }
      do {
       if ((HEAP32[i21 >> 2] & 7 | 0) == 0) {
        if ((i55 | 0) != (__ZNK7WebCore8Position13containerNodeEv(i3) | 0)) {
         break;
        }
        HEAP32[i25 >> 2] = i54;
        if ((i54 | 0) != 0) {
         i56 = i54 + 8 | 0;
         HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
        }
        i56 = HEAP32[i54 + 36 >> 2] | 0;
        if ((i56 | 0) == 0) {
         i57 = 0;
        } else {
         i57 = HEAP32[i56 + 4 >> 2] | 0;
        }
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i8, i9, (HEAP32[i17 >> 2] | 0) + i57 | 0);
        i56 = HEAP32[i28 >> 2] | 0;
        HEAP32[i28 >> 2] = 0;
        i58 = HEAP32[i15 >> 2] | 0;
        HEAP32[i15 >> 2] = i56;
        do {
         if ((i58 | 0) != 0) {
          i56 = i58 + 8 | 0;
          i59 = i56 | 0;
          i60 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
          HEAP32[i59 >> 2] = i60;
          if ((i60 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
         }
        } while (0);
        HEAP32[i16 >> 2] = HEAP32[i38 >> 2];
        i58 = HEAP32[i39 >> 2] | 0;
        i56 = HEAP32[i20 >> 2] & -8 | i58 & 7;
        HEAP32[i20 >> 2] = i56;
        HEAP8[i19] = i56 & 255 & -9 | i58 & 8;
        i58 = HEAP32[i28 >> 2] | 0;
        do {
         if ((i58 | 0) != 0) {
          i56 = i58 + 8 | 0;
          i60 = i56 | 0;
          i59 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
          HEAP32[i60 >> 2] = i59;
          if ((i59 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
         }
        } while (0);
        i58 = HEAP32[i25 >> 2] | 0;
        if ((i58 | 0) == 0) {
         break;
        }
        i56 = i58 + 8 | 0;
        i58 = i56 | 0;
        i59 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
        HEAP32[i58 >> 2] = i59;
        if ((i59 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
       }
      } while (0);
      do {
       if ((HEAP32[i24 >> 2] & 7 | 0) == 0) {
        if ((i55 | 0) != (__ZNK7WebCore8Position13containerNodeEv(i4) | 0)) {
         break;
        }
        HEAP32[i37 >> 2] = i54;
        if ((i54 | 0) != 0) {
         i56 = i54 + 8 | 0;
         HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
        }
        i56 = HEAP32[i54 + 36 >> 2] | 0;
        if ((i56 | 0) == 0) {
         i61 = 0;
        } else {
         i61 = HEAP32[i56 + 4 >> 2] | 0;
        }
        __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i10, i11, (HEAP32[i23 >> 2] | 0) + i61 | 0);
        i56 = HEAP32[i40 >> 2] | 0;
        HEAP32[i40 >> 2] = 0;
        i59 = HEAP32[i22 >> 2] | 0;
        HEAP32[i22 >> 2] = i56;
        do {
         if ((i59 | 0) != 0) {
          i56 = i59 + 8 | 0;
          i58 = i56 | 0;
          i60 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
          HEAP32[i58 >> 2] = i60;
          if ((i60 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
         }
        } while (0);
        HEAP32[i18 >> 2] = HEAP32[i46 >> 2];
        i59 = HEAP32[i47 >> 2] | 0;
        i56 = HEAP32[i27 >> 2] & -8 | i59 & 7;
        HEAP32[i27 >> 2] = i56;
        HEAP8[i26] = i56 & 255 & -9 | i59 & 8;
        i59 = HEAP32[i40 >> 2] | 0;
        do {
         if ((i59 | 0) != 0) {
          i56 = i59 + 8 | 0;
          i60 = i56 | 0;
          i58 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
          HEAP32[i60 >> 2] = i58;
          if ((i58 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
         }
        } while (0);
        i59 = HEAP32[i37 >> 2] | 0;
        if ((i59 | 0) == 0) {
         break;
        }
        i56 = i59 + 8 | 0;
        i59 = i56 | 0;
        i58 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
        HEAP32[i59 >> 2] = i58;
        if ((i58 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
       }
      } while (0);
      i56 = HEAP32[i55 + 36 >> 2] | 0;
      HEAP32[i48 >> 2] = i56;
      if ((i56 | 0) != 0) {
       i58 = i56 | 0;
       HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 2;
      }
      HEAP32[i50 >> 2] = i54;
      if ((i54 | 0) != 0) {
       i58 = i54 + 8 | 0;
       HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
      }
      i58 = HEAP32[i54 + 36 >> 2] | 0;
      if ((i58 | 0) == 0) {
       i62 = 0;
      } else {
       i62 = HEAP32[i58 + 4 >> 2] | 0;
      }
      __ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i49, i13, i62, i12);
      i58 = HEAP32[i50 >> 2] | 0;
      do {
       if ((i58 | 0) != 0) {
        i56 = i58 + 8 | 0;
        i59 = i56 | 0;
        i60 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
        HEAP32[i59 >> 2] = i60;
        if ((i60 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
       }
      } while (0);
      i58 = HEAP32[(HEAP32[i51 >> 2] | 0) + 60 >> 2] | 0;
      HEAP32[i52 >> 2] = i55;
      i56 = i55 + 8 | 0;
      HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
      FUNCTION_TABLE_viii[i58 & 3](i49, i14, 1);
      i58 = HEAP32[i52 >> 2] | 0;
      do {
       if ((i58 | 0) != 0) {
        i56 = i58 + 8 | 0;
        i60 = i56 | 0;
        i59 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
        HEAP32[i60 >> 2] = i59;
        if ((i59 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
       }
      } while (0);
      i58 = HEAP32[i48 >> 2] | 0;
      if ((i58 | 0) == 0) {
       break;
      }
      i56 = i58 | 0;
      i59 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
      if ((i59 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i58);
       break;
      } else {
       HEAP32[i56 >> 2] = i59;
       break;
      }
     }
    } while (0);
    i53 = i53 + 1 | 0;
    if (i53 >>> 0 >= i45 >>> 0) {
     break;
    }
   }
   __ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_(i1, i6, i7);
   if (i36) {
    i63 = i43;
    break;
   }
   i53 = i43 + (i45 << 2) | 0;
   i48 = i43;
   while (1) {
    i52 = HEAP32[i48 >> 2] | 0;
    do {
     if ((i52 | 0) != 0) {
      i49 = i52 + 8 | 0;
      i51 = i49 | 0;
      i50 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
      HEAP32[i51 >> 2] = i50;
      if ((i50 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
     }
    } while (0);
    i52 = i48 + 4 | 0;
    if ((i52 | 0) == (i53 | 0)) {
     i63 = i43;
     break;
    } else {
     i48 = i52;
    }
   }
  }
 } while (0);
 if ((i30 | 0) == 81) {
  __ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_(i1, i6, i7);
  i63 = i29;
 }
 if ((i63 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i63);
 }
 i63 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i63 | 0) != 0) {
   i22 = i63 + 8 | 0;
   i29 = i22 | 0;
   i7 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   HEAP32[i29 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
  }
 } while (0);
 i63 = HEAP32[i15 >> 2] | 0;
 if ((i63 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i15 = i63 + 8 | 0;
 i63 = i15 | 0;
 i22 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
 HEAP32[i63 >> 2] = i22;
 if ((i22 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
 i15 = i2 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = i4 | 0;
 i4 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = i1 | 0;
 i16 = i6 | 0;
 i17 = i4 | 0;
 HEAP32[i16 >> 2] = i17;
 i18 = (i4 | 0) == 0;
 if (!i18) {
  i19 = i4 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
 }
 i19 = i7 | 0;
 HEAP32[i19 >> 2] = i2;
 i20 = (i2 | 0) == 0;
 if (!i20) {
  i21 = i2 + 8 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i15, i6, i7, 1);
 i7 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i19 = i7 + 8 | 0;
   i6 = i19 | 0;
   i21 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i16 = i7 + 8 | 0;
   i19 = i16 | 0;
   i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 if (i20) {
  i22 = 0;
 } else {
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i22 = i2;
 }
 i7 = i1;
 i1 = i8 | 0;
 i16 = i9 | 0;
 i21 = i10 | 0;
 i19 = i4 | 0;
 i6 = i4 + 8 | 0;
 i23 = i3 | 0;
 i3 = i22;
 while (1) {
  if ((i3 | 0) == 0) {
   i24 = 0;
   break;
  }
  i22 = HEAP32[i3 + 28 >> 2] | 0;
  i25 = (i22 | 0) == 0;
  if (!i25) {
   i26 = i22 + 8 | 0;
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
  }
  do {
   if (__ZN7WebCore4Node17isContentEditableENS0_22UserSelectAllTreatmentE(i3, 1) | 0) {
    i26 = HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] | 0;
    HEAP32[i1 >> 2] = i3;
    i27 = i3 + 8 | 0;
    HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
    FUNCTION_TABLE_viii[i26 & 3](i15, i8, 1);
    i26 = HEAP32[i1 >> 2] | 0;
    do {
     if ((i26 | 0) != 0) {
      i27 = i26 + 8 | 0;
      i28 = i27 | 0;
      i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      HEAP32[i28 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
     }
    } while (0);
    HEAP32[i16 >> 2] = i3;
    i26 = i3 + 8 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    HEAP32[i21 >> 2] = i19;
    if (!i18) {
     HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
    }
    __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i15, i9, i10);
    i26 = HEAP32[i21 >> 2] | 0;
    do {
     if ((i26 | 0) != 0) {
      i27 = i26 + 8 | 0;
      i29 = i27 | 0;
      i28 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i28;
      if ((i28 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
     }
    } while (0);
    i26 = HEAP32[i16 >> 2] | 0;
    if ((i26 | 0) == 0) {
     break;
    }
    i27 = i26 + 8 | 0;
    i26 = i27 | 0;
    i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
    HEAP32[i26 >> 2] = i28;
    if ((i28 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
   }
  } while (0);
  do {
   if ((i3 | 0) == (HEAP32[i23 >> 2] | 0)) {
    i30 = 3;
    i31 = i3;
   } else {
    if (!i25) {
     i27 = i22 + 8 | 0;
     HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
    }
    i27 = i3 + 8 | 0;
    i28 = i27 | 0;
    i26 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
    HEAP32[i28 >> 2] = i26;
    if ((i26 | 0) >= 1) {
     i30 = 0;
     i31 = i22;
     break;
    }
    if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
     i30 = 0;
     i31 = i22;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
    i30 = 0;
    i31 = i22;
   }
  } while (0);
  do {
   if (!i25) {
    i27 = i22 + 8 | 0;
    i26 = i27 | 0;
    i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
    HEAP32[i26 >> 2] = i28;
    if ((i28 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
   }
  } while (0);
  if ((i30 | 0) == 3) {
   i24 = i31;
   break;
  } else {
   i3 = i31;
  }
 }
 i31 = HEAP32[i4 + 28 >> 2] | 0;
 i3 = (i31 | 0) == 0;
 if (!i3) {
  i30 = i31 + 8 | 0;
  HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
 }
 i30 = HEAP32[i4 + 24 >> 2] | 0;
 i23 = (i30 | 0) == 0;
 if (!i23) {
  i16 = i30 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 do {
  if (!i3) {
   if ((HEAP32[i31 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i31, 0, 1) | 0)) {
    break;
   }
   if (!(__ZN7WebCore20areIdenticalElementsEPKNS_4NodeES2_(i17, i31) | 0)) {
    break;
   }
   i16 = i11 | 0;
   HEAP32[i16 >> 2] = i4;
   if (!i18) {
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   }
   i21 = i12 | 0;
   HEAP32[i21 >> 2] = i31;
   i10 = i31 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   __ZN7WebCore20CompositeEditCommand22mergeIdenticalElementsEN3WTF10PassRefPtrINS_7ElementEEES4_(i15, i11, i12);
   i10 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i21 = i10 + 8 | 0;
     i9 = i21 | 0;
     i19 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i10 = HEAP32[i16 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i21 = i10 + 8 | 0;
   i10 = i21 | 0;
   i19 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 do {
  if (!i23) {
   do {
    if ((HEAP32[i30 + 12 >> 2] & 4 | 0) != 0) {
     if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i30, 0, 1) | 0)) {
      break;
     }
     i12 = HEAP32[i30 + 28 >> 2] | 0;
     if ((HEAP32[i12 + 12 >> 2] & 4 | 0) == 0) {
      break;
     }
     if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i12, 0, 1) | 0)) {
      break;
     }
     if (!(__ZN7WebCore20areIdenticalElementsEPKNS_4NodeES2_(i30, i12) | 0)) {
      break;
     }
     i11 = i13 | 0;
     HEAP32[i11 >> 2] = i30;
     i6 = i30 + 8 | 0;
     HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
     i6 = i14 | 0;
     HEAP32[i6 >> 2] = i12;
     if ((i12 | 0) != 0) {
      i17 = i12 + 8 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand22mergeIdenticalElementsEN3WTF10PassRefPtrINS_7ElementEEES4_(i15, i13, i14);
     i17 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i6 = i17 + 8 | 0;
       i12 = i6 | 0;
       i21 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       HEAP32[i12 >> 2] = i21;
       if ((i21 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
      }
     } while (0);
     i17 = HEAP32[i11 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i6 = i17 + 8 | 0;
     i17 = i6 | 0;
     i21 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
    }
   } while (0);
   i16 = i30 + 8 | 0;
   i6 = i16 | 0;
   i21 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 do {
  if (!i3) {
   i30 = i31 + 8 | 0;
   i14 = i30 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
  }
 } while (0);
 do {
  if ((i24 | 0) != 0) {
   i31 = i24 + 8 | 0;
   i3 = i31 | 0;
   i30 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i30;
   if ((i30 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
  }
 } while (0);
 do {
  if (!i18) {
   i24 = i4 + 8 | 0;
   i31 = i24 | 0;
   i30 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   HEAP32[i31 >> 2] = i30;
   if ((i30 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 if (i20) {
  STACKTOP = i5;
  return;
 }
 i20 = i2 + 8 | 0;
 i2 = i20 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17ApplyStyleCommand29splitAncestorsWithUnicodeBidiEPNS_4NodeEb16WritingDirection(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 i12 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i2, 1) | 0;
 i13 = i12 | 0;
 if ((i12 | 0) == 0) {
  i14 = 0;
  STACKTOP = i5;
  return i14 | 0;
 }
 i12 = HEAP32[i2 + 16 >> 2] | 0;
 i15 = i12 | 0;
 if ((i15 | 0) == (i13 | 0)) {
  i14 = 0;
  STACKTOP = i5;
  return i14 | 0;
 }
 i16 = i8 | 0;
 i17 = i6 | 0;
 i18 = i7 | 0;
 i19 = 0;
 i20 = 0;
 i21 = 0;
 i22 = i12;
 i12 = i15;
 while (1) {
  HEAP32[i16 >> 2] = i12;
  if ((i22 | 0) != 0) {
   i15 = i22 + 8 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  }
  __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i7, i8, 0, 0);
  __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i6, i7, 159, 1);
  i15 = HEAP32[i17 >> 2] | 0;
  do {
   if ((i15 | 0) == 0) {
    i23 = 0;
   } else {
    i24 = i15 + 4 | 0;
    do {
     if ((HEAP32[i24 >> 2] & 516096 | 0) == 0) {
      HEAP32[i17 >> 2] = 0;
      if ((HEAP32[i24 >> 2] & 508 | 0) == 472) {
       i25 = HEAP32[i15 + 8 >> 2] | 0;
      } else {
       i25 = 0;
      }
      i26 = i15 | 0;
      i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      if ((i27 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i15);
       i28 = i25;
       break;
      } else {
       HEAP32[i26 >> 2] = i27;
       i28 = i25;
       break;
      }
     } else {
      i28 = 0;
     }
    } while (0);
    i24 = HEAP32[i17 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i23 = i28;
     break;
    }
    i27 = i24 | 0;
    i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
    if ((i26 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i24);
     i23 = i28;
     break;
    } else {
     HEAP32[i27 >> 2] = i26;
     i23 = i28;
     break;
    }
   }
  } while (0);
  i15 = HEAP32[i18 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i26 = i15 + 8 | 0;
    i27 = i26 | 0;
    i24 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
    HEAP32[i27 >> 2] = i24;
    if ((i24 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
   }
  } while (0);
  i15 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i26 = i15 + 8 | 0;
    i24 = i26 | 0;
    i27 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    HEAP32[i24 >> 2] = i27;
    if ((i27 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
   }
  } while (0);
  if ((i23 | 0) == 32 | (i23 | 0) == 0) {
   i29 = i21;
   i30 = i20;
   i31 = i19;
  } else {
   i29 = i23;
   i30 = i19;
   i31 = i12;
  }
  i15 = HEAP32[i22 + 16 >> 2] | 0;
  i26 = i15 | 0;
  if ((i26 | 0) == (i13 | 0)) {
   break;
  } else {
   i19 = i31;
   i20 = i30;
   i21 = i29;
   i22 = i15;
   i12 = i26;
  }
 }
 if ((i31 | 0) == 0) {
  i14 = 0;
  STACKTOP = i5;
  return i14 | 0;
 }
 L45 : do {
  if ((i4 | 0) == 0 | (i29 | 0) == 321) {
   i32 = 0;
   i33 = i31;
  } else {
   if ((HEAP32[i31 + 12 >> 2] & 16 | 0) == 0) {
    i32 = 0;
    i33 = i31;
    break;
   }
   i12 = __ZN3WTF10fastMallocEj(16) | 0;
   i22 = i12;
   __ZN7WebCore12EditingStyleC1EPNS_4NodeENS0_19PropertiesToIncludeE(i22, i31, 0);
   if (__ZNK7WebCore12EditingStyle13textDirectionER16WritingDirection(i22, i9) | 0) {
    i34 = (HEAP32[i9 >> 2] | 0) == (i4 | 0);
   } else {
    i34 = 0;
   }
   do {
    if ((i12 | 0) == 0) {
     if (!i34) {
      i32 = 0;
      i33 = i31;
      break L45;
     }
    } else {
     i21 = i12;
     i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore12EditingStyleD1Ev(i22);
      __ZN3WTF8fastFreeEPv(i12);
      if (i34) {
       break;
      } else {
       i32 = 0;
       i33 = i31;
       break L45;
      }
     } else {
      HEAP32[i21 >> 2] = i20;
      if (i34) {
       break;
      } else {
       i32 = 0;
       i33 = i31;
       break L45;
      }
     }
    }
   } while (0);
   i12 = i31;
   if ((i30 | 0) == 0) {
    i14 = i12;
   } else {
    i32 = i12;
    i33 = i30;
    break;
   }
   STACKTOP = i5;
   return i14 | 0;
  }
 } while (0);
 if ((i2 | 0) == 0) {
  i35 = 0;
 } else {
  i30 = i2 + 8 | 0;
  HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
  i35 = i2;
 }
 i2 = i1 | 0;
 i1 = i10 | 0;
 i30 = i11 | 0;
 i31 = i35;
 while (1) {
  if ((i31 | 0) == 0) {
   i14 = i32;
   i36 = 91;
   break;
  }
  i35 = HEAP32[i31 + 16 >> 2] | 0;
  i34 = (i35 | 0) == 0;
  if (!i34) {
   i4 = i35 + 8 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  }
  i4 = i31 + 28 | 0;
  do {
   if ((HEAP32[(i3 ? i31 + 24 | 0 : i4) >> 2] | 0) != 0) {
    HEAP32[i1 >> 2] = i35;
    if (!i34) {
     i9 = i35 + 8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
    }
    do {
     if (i3) {
      i9 = i31 + 8 | 0;
      HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
      i37 = 0;
      i38 = 1;
      i39 = i31;
      i36 = 53;
     } else {
      i9 = HEAP32[i4 >> 2] | 0;
      if ((i9 | 0) == 0) {
       HEAP32[i30 >> 2] = 0;
       i40 = 0;
       i41 = 0;
       i42 = 1;
       i43 = 1;
       break;
      } else {
       i29 = i9 + 8 | 0;
       HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
       i37 = 1;
       i38 = 0;
       i39 = i9;
       i36 = 53;
       break;
      }
     }
    } while (0);
    if ((i36 | 0) == 53) {
     i36 = 0;
     HEAP32[i30 >> 2] = i39;
     i9 = i39 + 8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     i40 = i39;
     i41 = i38;
     i42 = i37;
     i43 = (i39 | 0) == 0;
    }
    __ZN7WebCore20CompositeEditCommand12splitElementEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE(i2, i10, i11);
    i9 = HEAP32[i30 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i29 = i9 + 8 | 0;
      i12 = i29 | 0;
      i22 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
      HEAP32[i12 >> 2] = i22;
      if ((i22 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    do {
     if (!(i43 | i42 ^ 1)) {
      i9 = i40 + 8 | 0;
      i29 = i9 | 0;
      i22 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i22;
      if ((i22 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    do {
     if (!(i43 | i41 ^ 1)) {
      i9 = i40 + 8 | 0;
      i22 = i9 | 0;
      i29 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      HEAP32[i22 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    i9 = HEAP32[i1 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
    i29 = i9 + 8 | 0;
    i9 = i29 | 0;
    i22 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i22;
    if ((i22 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
   }
  } while (0);
  i4 = i35 | 0;
  do {
   if ((i4 | 0) == (i33 | 0)) {
    i44 = 6;
    i45 = i31;
   } else {
    if (!i34) {
     i29 = i35 + 8 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    }
    i29 = i31 + 8 | 0;
    i22 = i29 | 0;
    i9 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    HEAP32[i22 >> 2] = i9;
    if ((i9 | 0) >= 1) {
     i44 = 0;
     i45 = i4;
     break;
    }
    if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
     i44 = 0;
     i45 = i4;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    i44 = 0;
    i45 = i4;
   }
  } while (0);
  do {
   if (!i34) {
    i4 = i35 + 8 | 0;
    i29 = i4 | 0;
    i9 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
    HEAP32[i29 >> 2] = i9;
    if ((i9 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
   }
  } while (0);
  if ((i44 | 0) == 6) {
   break;
  } else {
   i31 = i45;
  }
 }
 if ((i36 | 0) == 91) {
  STACKTOP = i5;
  return i14 | 0;
 }
 if ((i45 | 0) == 0) {
  i14 = i32;
  STACKTOP = i5;
  return i14 | 0;
 }
 i36 = i45 + 8 | 0;
 i45 = i36 | 0;
 i31 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
 HEAP32[i45 >> 2] = i31;
 if ((i31 | 0) >= 1) {
  i14 = i32;
  STACKTOP = i5;
  return i14 | 0;
 }
 if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
  i14 = i32;
  STACKTOP = i5;
  return i14 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
 i14 = i32;
 STACKTOP = i5;
 return i14 | 0;
}
function __ZN7WebCore17ApplyStyleCommand33removeEmbeddingUpToEnclosingBlockEPNS_4NodeES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
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
 i16 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i2, 1) | 0;
 i17 = i16 | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = i16 | 0;
 if ((i2 | 0) == (i17 | 0) | (i2 | 0) == (i3 | 0)) {
  STACKTOP = i4;
  return;
 }
 i2 = i9 | 0;
 i18 = i7 | 0;
 i19 = i8 | 0;
 i20 = i1 | 0;
 i1 = i10 | 0;
 i21 = i11;
 i22 = i11 | 0;
 i11 = i12 | 0;
 i23 = i14 | 0;
 i24 = i5 | 0;
 i25 = i13 | 0;
 i26 = i15 | 0;
 i27 = i6 | 0;
 i28 = i16;
 while (1) {
  i16 = HEAP32[i28 + 16 >> 2] | 0;
  i29 = i28 + 12 | 0;
  do {
   if ((HEAP32[i29 >> 2] & 8 | 0) != 0) {
    i30 = i28 | 0;
    HEAP32[i2 >> 2] = i30;
    i31 = (i28 | 0) == 0;
    if (!i31) {
     i32 = i28 + 8 | 0;
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
    }
    __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i8, i9, 0, 0);
    __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i7, i8, 159, 1);
    i32 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i32 | 0) == 0) {
      i33 = 0;
     } else {
      i34 = i32 + 4 | 0;
      do {
       if ((HEAP32[i34 >> 2] & 516096 | 0) == 0) {
        HEAP32[i18 >> 2] = 0;
        if ((HEAP32[i34 >> 2] & 508 | 0) == 472) {
         i35 = HEAP32[i32 + 8 >> 2] | 0;
        } else {
         i35 = 0;
        }
        i36 = i32 | 0;
        i37 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
        if ((i37 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i32);
         i38 = i35;
         break;
        } else {
         HEAP32[i36 >> 2] = i37;
         i38 = i35;
         break;
        }
       } else {
        i38 = 0;
       }
      } while (0);
      i34 = HEAP32[i18 >> 2] | 0;
      if ((i34 | 0) == 0) {
       i33 = i38;
       break;
      }
      i37 = i34 | 0;
      i36 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
      if ((i36 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i34);
       i33 = i38;
       break;
      } else {
       HEAP32[i37 >> 2] = i36;
       i33 = i38;
       break;
      }
     }
    } while (0);
    i32 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i32 | 0) != 0) {
      i36 = i32 + 8 | 0;
      i37 = i36 | 0;
      i34 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
      HEAP32[i37 >> 2] = i34;
      if ((i34 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
     }
    } while (0);
    i32 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i32 | 0) != 0) {
      i36 = i32 + 8 | 0;
      i34 = i36 | 0;
      i37 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
      HEAP32[i34 >> 2] = i37;
      if ((i37 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
     }
    } while (0);
    if ((i33 | 0) == 32 | (i33 | 0) == 0) {
     break;
    }
    i32 = i28;
    if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i32, __ZN7WebCore9HTMLNames7dirAttrE) | 0) {
     HEAP32[i1 >> 2] = i32;
     if (!i31) {
      i36 = i28 + 8 | 0;
      HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand19removeNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameE(i20, i10, __ZN7WebCore9HTMLNames7dirAttrE);
     i36 = HEAP32[i1 >> 2] | 0;
     if ((i36 | 0) == 0) {
      break;
     }
     i37 = i36 + 8 | 0;
     i36 = i37 | 0;
     i34 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     HEAP32[i36 >> 2] = i34;
     if ((i34 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
     break;
    }
    i37 = HEAP32[i28 + 48 >> 2] | 0;
    do {
     if ((i37 | 0) == 0) {
      i39 = 37;
     } else {
      i34 = HEAP32[i37 + 8 >> 2] | 0;
      if ((i34 | 0) == 0) {
       i39 = 37;
       break;
      }
      __ZNK7WebCore15StyleProperties11mutableCopyEv(i6, i34);
      i34 = HEAP32[i27 >> 2] | 0;
      HEAP32[i22 >> 2] = i34;
      i40 = i34;
     }
    } while (0);
    if ((i39 | 0) == 37) {
     i39 = 0;
     __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i21, 0);
     i40 = HEAP32[i22 >> 2] | 0;
    }
    HEAP32[i22 >> 2] = 0;
    __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(i40, 159, 32, 0) | 0;
    __ZN7WebCore22MutableStyleProperties14removePropertyENS_13CSSPropertyIDEPN3WTF6StringE(i40, 2, 0) | 0;
    HEAP32[i11 >> 2] = i32;
    if (!i31) {
     i37 = i28 + 8 | 0;
     HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
    }
    __ZNK7WebCore15StyleProperties6asTextEv(i14, i40 | 0);
    i37 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i37 | 0) == 0) {
      HEAP32[i24 >> 2] = 0;
     } else {
      if ((HEAP32[i37 + 16 >> 2] & 16 | 0) == 0) {
       __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i37);
       break;
      } else {
       HEAP32[i24 >> 2] = i37;
       i34 = i37 | 0;
       HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
       break;
      }
     }
    } while (0);
    HEAP32[i25 >> 2] = HEAP32[i24 >> 2];
    __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i20, i12, __ZN7WebCore9HTMLNames9styleAttrE, i13);
    i37 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i37 | 0) != 0) {
      i32 = i37 | 0;
      i34 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
      if ((i34 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i37);
       break;
      } else {
       HEAP32[i32 >> 2] = i34;
       break;
      }
     }
    } while (0);
    i37 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i37 | 0) != 0) {
      i34 = i37 | 0;
      i32 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
      if ((i32 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i37);
       break;
      } else {
       HEAP32[i34 >> 2] = i32;
       break;
      }
     }
    } while (0);
    i37 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i37 | 0) != 0) {
      i32 = i37 + 8 | 0;
      i34 = i32 | 0;
      i36 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
      HEAP32[i34 >> 2] = i36;
      if ((i36 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
     }
    } while (0);
    do {
     if (!i31) {
      if ((HEAP32[i29 >> 2] & 16 | 0) == 0) {
       break;
      }
      i37 = HEAP32[i28 + 44 >> 2] | 0;
      i32 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
      if ((i37 | 0) != (i32 | 0)) {
       if ((HEAP32[i37 + 12 >> 2] | 0) != (HEAP32[i32 + 12 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i37 + 16 >> 2] | 0) != (HEAP32[i32 + 16 >> 2] | 0)) {
        break;
       }
      }
      if (!(__ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE(i28, 1) | 0)) {
       break;
      }
      HEAP32[i26 >> 2] = i30;
      i32 = i28 + 8 | 0;
      HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i20, i15, 1);
      i32 = HEAP32[i26 >> 2] | 0;
      if ((i32 | 0) == 0) {
       break;
      }
      i37 = i32 + 8 | 0;
      i32 = i37 | 0;
      i36 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      HEAP32[i32 >> 2] = i36;
      if ((i36 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
     }
    } while (0);
    if ((i40 | 0) == 0) {
     break;
    }
    i30 = i40 | 0;
    i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    if ((i31 | 0) != 0) {
     HEAP32[i30 >> 2] = i31;
     break;
    }
    if ((HEAP32[i40 + 4 >> 2] & 4 | 0) == 0) {
     __ZN7WebCore24ImmutableStylePropertiesD1Ev(i40);
     __ZN3WTF8fastFreeEPv(i40);
     break;
    } else {
     __ZN7WebCore22MutableStylePropertiesD1Ev(i40);
     __ZN3WTF8fastFreeEPv(i40);
     break;
    }
   }
  } while (0);
  i29 = i16 | 0;
  if ((i29 | 0) == (i17 | 0) | (i29 | 0) == (i3 | 0)) {
   break;
  } else {
   i28 = i16;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17ApplyStyleCommand26applyInlineStyleToPushDownEPNS_4NodeEPNS_12EditingStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0);
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (__ZNK7WebCore12EditingStyle7isEmptyEv(i3) | 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i2 + 12 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i2 + 32 | 0;
 if ((i13 & 2048 | 0) == 0) {
  i15 = i14 | 0;
 } else {
  i15 = HEAP32[i14 >> 2] | 0;
 }
 if ((HEAP32[i15 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((i13 & 4 | 0) != 0) {
   i15 = HEAP32[i2 + 44 >> 2] | 0;
   i16 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
   if ((i15 | 0) == (i16 | 0)) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i15 + 12 >> 2] | 0) != (HEAP32[i16 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i15 + 16 >> 2] | 0) != (HEAP32[i16 + 16 >> 2] | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i13 = i3 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 & 16 | 0) == 0) {
   i17 = i3;
   i18 = i13;
  } else {
   i16 = i2;
   i15 = HEAP32[i2 + 48 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i17 = i3;
    i18 = i13;
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) == 0) {
    i17 = i3;
    i18 = i13;
    break;
   }
   __ZNK7WebCore12EditingStyle4copyEv(i6, i3);
   i15 = i6 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i20 = i3 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   do {
    if ((i21 | 0) == 0) {
     __ZN7WebCore12EditingStyleD1Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
     i22 = HEAP32[i15 >> 2] | 0;
     if ((i22 | 0) == 0) {
      break;
     }
     i23 = i22 | 0;
     i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) == 0) {
      __ZN7WebCore12EditingStyleD1Ev(i22);
      __ZN3WTF8fastFreeEPv(i22);
      break;
     } else {
      HEAP32[i23 >> 2] = i24;
      break;
     }
    } else {
     HEAP32[i20 >> 2] = i21;
    }
   } while (0);
   __ZN7WebCore12EditingStyle25mergeInlineStyleOfElementEPNS_13StyledElementENS0_23CSSPropertyOverrideModeENS0_19PropertiesToIncludeE(i19, i16, 0, 0);
   i17 = i19;
   i18 = HEAP32[i12 >> 2] | 0;
  }
 } while (0);
 if ((i18 & 2048 | 0) == 0) {
  i25 = i14 | 0;
 } else {
  i25 = HEAP32[i14 >> 2] | 0;
 }
 i3 = HEAP32[i25 >> 2] | 0;
 if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
  i26 = 26;
 } else {
  if ((HEAP32[i3 + 24 >> 2] & 32 | 0) == 0) {
   i26 = 26;
  } else {
   i27 = i18;
   i26 = 28;
  }
 }
 do {
  if ((i26 | 0) == 26) {
   if ((i18 & 2 | 0) == 0) {
    i28 = i18;
    i26 = 48;
    break;
   }
   i3 = (__ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0) == 0;
   i25 = HEAP32[i12 >> 2] | 0;
   if (i3) {
    i28 = i25;
    i26 = 48;
   } else {
    i27 = i25;
    i26 = 28;
   }
  }
 } while (0);
 do {
  if ((i26 | 0) == 28) {
   if ((i27 & 16 | 0) == 0) {
    i28 = i27;
    i26 = 48;
    break;
   }
   i18 = i1 | 0;
   i25 = i7 | 0;
   HEAP32[i25 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i3 = i2 + 8 | 0;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   }
   __ZNK7WebCore15StyleProperties6asTextEv(i9, HEAP32[i17 + 4 >> 2] | 0);
   i3 = i9 | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) == 0) {
     i13 = i5 | 0;
     HEAP32[i13 >> 2] = 0;
     i29 = i13;
    } else {
     if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i6);
      i29 = i5 | 0;
      break;
     } else {
      i13 = i5 | 0;
      HEAP32[i13 >> 2] = i6;
      i21 = i6 | 0;
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
      i29 = i13;
      break;
     }
    }
   } while (0);
   i6 = i8 | 0;
   HEAP32[i6 >> 2] = HEAP32[i29 >> 2];
   __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i18, i7, __ZN7WebCore9HTMLNames9styleAttrE, i8);
   i19 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i6 = i19 | 0;
     i16 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i6 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i18 = i19 | 0;
     i16 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i18 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i25 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i3 = i19 + 8 | 0;
   i19 = i3 | 0;
   i16 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 L72 : do {
  if ((i26 | 0) == 48) {
   i8 = (i28 & 2048 | 0) == 0;
   if (i8) {
    i30 = i14 | 0;
   } else {
    i30 = HEAP32[i14 >> 2] | 0;
   }
   if ((HEAP32[(HEAP32[i30 >> 2] | 0) + 20 >> 2] & 768 | 0) == 256) {
    if (i8) {
     i31 = i14 | 0;
    } else {
     i31 = HEAP32[i14 >> 2] | 0;
    }
    if (__ZNK7WebCore10RenderText26isAllCollapsibleWhitespaceEv(HEAP32[i31 >> 2] | 0) | 0) {
     break;
    }
    i32 = HEAP32[i12 >> 2] | 0;
   } else {
    i32 = i28;
   }
   if ((i32 & 2048 | 0) == 0) {
    i33 = i14 | 0;
   } else {
    i33 = HEAP32[i14 >> 2] | 0;
   }
   i8 = HEAP32[i33 >> 2] | 0;
   do {
    if ((HEAP32[i8 + 20 >> 2] & 4096 | 0) != 0) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 620 >> 2] & 31](i8) | 0) {
      break;
     }
     if ((HEAP32[i12 >> 2] & 2048 | 0) == 0) {
      i34 = i14 | 0;
     } else {
      i34 = HEAP32[i14 >> 2] | 0;
     }
     i7 = HEAP32[i34 >> 2] | 0;
     if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 256) {
      i35 = HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i35 = HEAP32[i7 + 36 >> 2] | 0;
     }
     i7 = HEAP32[i35 + 44 >> 2] & 7;
     if ((i7 | 0) == 4 | (i7 | 0) == 0) {
      break L72;
     }
    }
   } while (0);
   i8 = i10 | 0;
   HEAP32[i8 >> 2] = i2;
   if ((i2 | 0) == 0) {
    i25 = i11 | 0;
    HEAP32[i25 >> 2] = 0;
    i36 = i25;
   } else {
    i25 = i2 + 8 | 0;
    i7 = HEAP32[i25 >> 2] | 0;
    i29 = i11 | 0;
    HEAP32[i29 >> 2] = i2;
    HEAP32[i25 >> 2] = i7 + 2;
    i36 = i29;
   }
   __ZN7WebCore17ApplyStyleCommand22addInlineStyleIfNeededEPNS_12EditingStyleEN3WTF10PassRefPtrINS_4NodeEEES6_NS0_17EAddStyledElementE(i1, i17, i10, i11, 1);
   i29 = HEAP32[i36 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i7 = i29 + 8 | 0;
     i25 = i7 | 0;
     i5 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i5;
     if ((i5 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i29 = HEAP32[i8 >> 2] | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   i7 = i29 + 8 | 0;
   i29 = i7 | 0;
   i5 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   HEAP32[i29 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 if ((i17 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i36 = i17 | 0;
 i11 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore12EditingStyleD1Ev(i17);
  __ZN3WTF8fastFreeEPv(i17);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i36 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore17ApplyStyleCommand35removeConflictingInlineStyleFromRunEPNS_12EditingStyleERN3WTF6RefPtrINS_4NodeEEES7_NS3_10PassRefPtrIS5_EE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i9 = i3 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 i9 = i5 | 0;
 i5 = i7 | 0;
 i10 = i4 | 0;
 i4 = i3;
 while (1) {
  i3 = i4 + 12 | 0;
  if ((HEAP32[i3 >> 2] & 256 | 0) == 0) {
   break;
  }
  if ((i4 | 0) == (HEAP32[i9 >> 2] | 0)) {
   break;
  }
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 132 >> 2] & 31](i4) | 0) {
    if ((HEAP32[i3 >> 2] & 2 | 0) == 0) {
     i11 = 18;
    } else {
     i12 = HEAP32[i4 + 36 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i11 = 18;
     } else {
      i13 = i12;
      i11 = 20;
     }
    }
    do {
     if ((i11 | 0) == 18) {
      i11 = 0;
      i12 = HEAP32[i4 + 28 >> 2] | 0;
      if ((i12 | 0) != 0) {
       i13 = i12;
       i11 = 20;
       break;
      }
      i12 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i4) | 0;
      if ((i12 | 0) == 0) {
       i14 = 0;
      } else {
       i13 = i12;
       i11 = 20;
      }
     }
    } while (0);
    if ((i11 | 0) == 20) {
     i11 = 0;
     i12 = i13 + 8 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     i14 = i13;
    }
    if ((i4 | 0) == 0) {
     i15 = i14;
     break;
    }
    i12 = i4 + 8 | 0;
    i16 = i12 | 0;
    i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
    HEAP32[i16 >> 2] = i17;
    if ((i17 | 0) >= 1) {
     i15 = i14;
     break;
    }
    if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
     i15 = i14;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    i15 = i14;
   } else {
    i12 = HEAP32[i4 + 28 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i17 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i4) | 0;
     if ((i17 | 0) == 0) {
      i18 = 0;
     } else {
      i19 = i17;
      i11 = 11;
     }
    } else {
     i19 = i12;
     i11 = 11;
    }
    if ((i11 | 0) == 11) {
     i11 = 0;
     i12 = i19 + 8 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     i18 = i19;
    }
    if ((i4 | 0) == 0) {
     i15 = i18;
     break;
    }
    i12 = i4 + 8 | 0;
    i17 = i12 | 0;
    i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    HEAP32[i17 >> 2] = i16;
    if ((i16 | 0) >= 1) {
     i15 = i18;
     break;
    }
    if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
     i15 = i18;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    i15 = i18;
   }
  } while (0);
  do {
   if ((HEAP32[i3 >> 2] & 16 | 0) != 0) {
    i12 = HEAP32[i4 + 24 >> 2] | 0;
    i16 = (i12 | 0) == 0;
    if (!i16) {
     i17 = i12 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    }
    i17 = HEAP32[i4 + 28 >> 2] | 0;
    i20 = (i17 | 0) == 0;
    if (!i20) {
     i21 = i17 + 8 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    }
    i21 = HEAP32[i4 + 16 >> 2] | 0;
    i22 = (i21 | 0) != 0;
    if (i22) {
     i23 = i21 + 8 | 0;
     HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    }
    HEAP32[i5 >> 2] = i4;
    if ((i4 | 0) != 0) {
     i23 = i4 + 8 | 0;
     HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    }
    __ZN7WebCore17ApplyStyleCommand28removeInlineStyleFromElementEPNS_12EditingStyleEN3WTF10PassRefPtrINS_11HTMLElementEEENS0_22InlineStyleRemovalModeES2_(i1, i2, i7, 1, 0) | 0;
    i23 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i24 = i23 + 8 | 0;
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
    do {
     if ((HEAP32[i3 >> 2] & 256 | 0) == 0) {
      do {
       if ((HEAP32[i8 >> 2] | 0) == (i4 | 0)) {
        i23 = HEAP32[(i16 ? i21 + 36 | 0 : i12 + 28 | 0) >> 2] | 0;
        if ((i23 | 0) == 0) {
         i27 = i4;
        } else {
         i24 = i23 + 8 | 0;
         HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
         i27 = HEAP32[i8 >> 2] | 0;
        }
        HEAP32[i8 >> 2] = i23;
        if ((i27 | 0) == 0) {
         break;
        }
        i23 = i27 + 8 | 0;
        i24 = i23 | 0;
        i26 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        HEAP32[i24 >> 2] = i26;
        if ((i26 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
       }
      } while (0);
      if ((HEAP32[i10 >> 2] | 0) != (i4 | 0)) {
       break;
      }
      i23 = HEAP32[(i20 ? i21 + 40 | 0 : i17 + 24 | 0) >> 2] | 0;
      if ((i23 | 0) == 0) {
       i28 = i4;
      } else {
       i26 = i23 + 8 | 0;
       HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
       i28 = HEAP32[i10 >> 2] | 0;
      }
      HEAP32[i10 >> 2] = i23;
      if ((i28 | 0) == 0) {
       break;
      }
      i23 = i28 + 8 | 0;
      i26 = i23 | 0;
      i24 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    do {
     if (i22) {
      i23 = i21 + 8 | 0;
      i24 = i23 | 0;
      i26 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      HEAP32[i24 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    do {
     if (!i20) {
      i21 = i17 + 8 | 0;
      i22 = i21 | 0;
      i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      HEAP32[i22 >> 2] = i23;
      if ((i23 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    if (i16) {
     break;
    }
    i17 = i12 + 8 | 0;
    i20 = i17 | 0;
    i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
    HEAP32[i20 >> 2] = i21;
    if ((i21 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   }
  } while (0);
  i3 = (i15 | 0) == 0;
  if (!i3) {
   i17 = i15 + 8 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
  }
  i17 = i4 + 8 | 0;
  i21 = i17 - 8 | 0;
  i20 = i17 | 0;
  i23 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
  HEAP32[i20 >> 2] = i23;
  do {
   if ((i23 | 0) < 1) {
    if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i21);
   }
  } while (0);
  if (i3) {
   i11 = 77;
   break;
  } else {
   i4 = i15;
  }
 }
 if ((i11 | 0) == 77) {
  STACKTOP = i6;
  return;
 }
 i11 = i4 + 8 | 0;
 i15 = i11 - 8 | 0;
 i28 = i11 | 0;
 i10 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
 HEAP32[i28 >> 2] = i10;
 do {
  if ((i10 | 0) < 1) {
   if ((HEAP32[i11 + 8 >> 2] | 0) == 0) {
    __ZN7WebCore4Node14removedLastRefEv(i15);
   }
   if ((i4 | 0) != 0) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 i15 = i4 + 8 | 0;
 i4 = i15 | 0;
 i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i11;
 if ((i11 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17ApplyStyleCommand27fixRangeAndApplyInlineStyleEPNS_12EditingStyleERKNS_8PositionES5_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i3 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i3 + 8 | 0;
 do {
  if ((HEAP8[i13] & 8) == 0) {
   i14 = HEAP32[i13 >> 2] & 7;
   if (!((i14 | 0) == 2 | (i14 | 0) == 4)) {
    i15 = 3;
    break;
   }
   i14 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i3) | 0;
   i16 = i14;
   i17 = HEAP32[i11 >> 2] | 0;
  } else {
   i15 = 3;
  }
 } while (0);
 if ((i15 | 0) == 3) {
  i16 = HEAP32[i3 + 4 >> 2] | 0;
  i17 = i12;
 }
 L7 : do {
  if ((i16 | 0) < (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i17) | 0)) {
   i18 = i12;
  } else {
   if ((HEAP32[i12 + 12 >> 2] & 2 | 0) == 0) {
    i15 = 8;
   } else {
    i14 = HEAP32[i12 + 36 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i15 = 8;
    } else {
     i19 = i14;
    }
   }
   do {
    if ((i15 | 0) == 8) {
     i14 = HEAP32[i12 + 28 >> 2] | 0;
     if ((i14 | 0) != 0) {
      i19 = i14;
      break;
     }
     i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i12) | 0;
     if ((i14 | 0) != 0) {
      i19 = i14;
      break;
     }
     STACKTOP = i5;
     return;
    }
   } while (0);
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 132 >> 2] & 31](i19) | 0) {
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i7, i19);
    } else {
     i14 = i6 | 0;
     HEAP32[i14 >> 2] = i19;
     i20 = i19 + 8 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i7, i6, 1);
     i20 = HEAP32[i14 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i14 = i20 + 8 | 0;
     i20 = i14 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i14 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i4, i7) | 0) < 0;
   i21 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i20 = i21 + 8 | 0;
     i22 = i20 | 0;
     i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
     if (!i14) {
      i18 = i19;
      break L7;
     }
     STACKTOP = i5;
     return;
    }
   } while (0);
   if (!i14) {
    i18 = i19;
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i19 = i4 | 0;
 i7 = HEAP32[i19 >> 2] | 0;
 i6 = i4 + 8 | 0;
 do {
  if ((HEAP8[i6] & 8) == 0) {
   i12 = HEAP32[i6 >> 2] & 7;
   if (!((i12 | 0) == 2 | (i12 | 0) == 4)) {
    i15 = 23;
    break;
   }
   i12 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
   i24 = i12;
   i25 = HEAP32[i19 >> 2] | 0;
  } else {
   i15 = 23;
  }
 } while (0);
 if ((i15 | 0) == 23) {
  i24 = HEAP32[i4 + 4 >> 2] | 0;
  i25 = i7;
 }
 do {
  if ((i24 | 0) < (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i25) | 0)) {
   i26 = i7;
  } else {
   i12 = HEAP32[i19 >> 2] | 0;
   i17 = HEAP32[i12 + 28 >> 2] | 0;
   if ((i17 | 0) != 0) {
    i26 = i17;
    break;
   }
   i26 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i12) | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i11 >> 2] | 0) == (HEAP32[i19 >> 2] | 0)) {
   do {
    if ((HEAP8[i13] & 8) == 0) {
     i7 = HEAP32[i13 >> 2] & 7;
     if (!((i7 | 0) == 2 | (i7 | 0) == 4)) {
      i15 = 31;
      break;
     }
     i27 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i3) | 0;
    } else {
     i15 = 31;
    }
   } while (0);
   if ((i15 | 0) == 31) {
    i27 = HEAP32[i3 + 4 >> 2] | 0;
   }
   do {
    if ((HEAP8[i6] & 8) == 0) {
     i14 = HEAP32[i6 >> 2] & 7;
     if (!((i14 | 0) == 2 | (i14 | 0) == 4)) {
      i15 = 35;
      break;
     }
     i28 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    } else {
     i15 = 35;
    }
   } while (0);
   if ((i15 | 0) == 35) {
    i28 = HEAP32[i4 + 4 >> 2] | 0;
   }
   if ((i27 | 0) != (i28 | 0)) {
    i29 = i26;
    break;
   }
   if (((HEAP32[i6 >> 2] ^ HEAP32[i13 >> 2]) & 7 | 0) != 0) {
    i29 = i26;
    break;
   }
   i14 = HEAP32[i11 >> 2] | 0;
   i7 = HEAP32[i14 + 12 >> 2] | 0;
   if ((i7 & 4 | 0) == 0) {
    i29 = i26;
    break;
   }
   i25 = HEAP32[i14 + 44 >> 2] | 0;
   i24 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i25 | 0) != (i24 | 0)) {
    if ((HEAP32[i25 + 12 >> 2] | 0) != (HEAP32[i24 + 12 >> 2] | 0)) {
     i29 = i26;
     break;
    }
    if ((HEAP32[i25 + 16 >> 2] | 0) != (HEAP32[i24 + 16 >> 2] | 0)) {
     i29 = i26;
     break;
    }
   }
   if ((i7 & 2 | 0) != 0) {
    i7 = HEAP32[i14 + 36 >> 2] | 0;
    if ((i7 | 0) != 0) {
     i29 = i7;
     break;
    }
   }
   i7 = HEAP32[i14 + 28 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i29 = i7;
    break;
   }
   i29 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i14) | 0;
  } else {
   i29 = i26;
  }
 } while (0);
 __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i8, HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 8 >> 2] | 0, i3, i4);
 i4 = i8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = __ZNK7WebCore4Node19rootEditableElementEv(i18) | 0;
 L67 : do {
  if ((i18 | 0) != (i4 | 0) & (i4 | 0) != 0) {
   i3 = i4 | 0;
   i26 = i18;
   while (1) {
    i11 = i26 + 16 | 0;
    i13 = HEAP32[i11 >> 2] | 0;
    if ((i13 | 0) == (i3 | 0)) {
     i30 = i26;
     break L67;
    }
    if (!(__ZN7WebCore28isNodeVisiblyContainedWithinEPNS_4NodeEPKNS_5RangeE(i13 | 0, i8) | 0)) {
     i30 = i26;
     break L67;
    }
    i26 = HEAP32[i11 >> 2] | 0;
   }
  } else {
   i30 = i18;
  }
 } while (0);
 i18 = i9 | 0;
 HEAP32[i18 >> 2] = i30;
 if ((i30 | 0) != 0) {
  i4 = i30 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i10 | 0;
 HEAP32[i4 >> 2] = i29;
 if ((i29 | 0) != 0) {
  i30 = i29 + 8 | 0;
  HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
 }
 __ZN7WebCore17ApplyStyleCommand27applyInlineStyleToNodeRangeEPNS_12EditingStyleEN3WTF10PassRefPtrINS_4NodeEEES6_(i1, i2, i9, i10);
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 + 8 | 0;
   i9 = i4 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i10 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i18 = i10 + 8 | 0;
   i4 = i18 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i8 | 0;
 i18 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i18 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i10 >> 2] = i18;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore17ApplyStyleCommand27mergeEndWithNextIfIdenticalERKNS_8PositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 56 | 0;
 i11 = __ZNK7WebCore8Position13containerNodeEv(i3) | 0;
 do {
  if (__ZN7WebCore12isAtomicNodeEPKNS_4NodeE(i11) | 0) {
   i12 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i3) | 0;
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 164 >> 2] & 31](i11) | 0) {
     i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 168 >> 2] & 31](i11) | 0;
    } else {
     if ((HEAP32[i11 + 12 >> 2] & 2 | 0) == 0) {
      i13 = 0;
      break;
     }
     i14 = HEAP32[i11 + 36 >> 2] | 0;
     if ((i14 | 0) != 0 & (i12 | 0) > 0) {
      i15 = 0;
      i16 = i14;
     } else {
      i13 = 0;
      break;
     }
     while (1) {
      i14 = i15 + 1 | 0;
      i17 = HEAP32[i16 + 28 >> 2] | 0;
      if ((i17 | 0) != 0 & (i14 | 0) < (i12 | 0)) {
       i15 = i14;
       i16 = i17;
      } else {
       i13 = i14;
       break;
      }
     }
    }
   } while (0);
   if ((i13 | 0) > (i12 | 0)) {
    i18 = 0;
    STACKTOP = i4;
    return i18 | 0;
   }
   i14 = HEAP32[i3 >> 2] | 0;
   if ((HEAP32[i14 + 28 >> 2] | 0) == 0) {
    i19 = HEAP32[i14 + 16 >> 2] | 0;
    break;
   } else {
    i18 = 0;
    STACKTOP = i4;
    return i18 | 0;
   }
  } else {
   i19 = i11;
  }
 } while (0);
 if ((HEAP32[i19 + 12 >> 2] & 4 | 0) == 0) {
  i18 = 0;
  STACKTOP = i4;
  return i18 | 0;
 }
 i11 = HEAP32[i19 + 44 >> 2] | 0;
 i3 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
 if ((i11 | 0) == (i3 | 0)) {
  i18 = 0;
  STACKTOP = i4;
  return i18 | 0;
 }
 do {
  if ((HEAP32[i11 + 12 >> 2] | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
   if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
    i18 = 0;
   } else {
    break;
   }
   STACKTOP = i4;
   return i18 | 0;
  }
 } while (0);
 i3 = HEAP32[i19 + 28 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i18 = 0;
  STACKTOP = i4;
  return i18 | 0;
 }
 if (!(__ZN7WebCore20areIdenticalElementsEPKNS_4NodeES2_(i19, i3) | 0)) {
  i18 = 0;
  STACKTOP = i4;
  return i18 | 0;
 }
 i11 = i3;
 i13 = HEAP32[i3 + 36 >> 2] | 0;
 i16 = i5 | 0;
 HEAP32[i16 >> 2] = i19;
 if ((i19 | 0) != 0) {
  i15 = i19 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 i15 = i6 | 0;
 HEAP32[i15 >> 2] = i3;
 i14 = i3 + 8 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 __ZN7WebCore20CompositeEditCommand22mergeIdenticalElementsEN3WTF10PassRefPtrINS_7ElementEEES4_(i1 | 0, i5, i6);
 i6 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i15 = i6 + 8 | 0;
   i5 = i15 | 0;
   i14 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i16 = i6 + 8 | 0;
   i15 = i16 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 i6 = (__ZNK7WebCore8Position13containerNodeEv(i2) | 0) == (i19 | 0);
 if ((i13 | 0) == 0) {
  i20 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i11) | 0;
 } else {
  i20 = __ZNK7WebCore4Node9nodeIndexEv(i13) | 0;
 }
 if (i6) {
  HEAP32[i8 >> 2] = i3;
  i6 = i3 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i7, i8, HEAP32[i2 + 4 >> 2] | 0, 0);
  i21 = 0;
  i22 = 1;
 } else {
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i7 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i13 = i6 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  }
  HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  i13 = HEAP32[i2 + 8 >> 2] | 0;
  i2 = i7 + 8 | 0;
  i6 = i2;
  i11 = HEAP32[i6 >> 2] & -8 | i13 & 7;
  HEAP32[i6 >> 2] = i11;
  HEAP8[i2] = i11 & 255 & -9 | i13 & 8;
  i21 = 1;
  i22 = 0;
 }
 i13 = i10 | 0;
 HEAP32[i13 >> 2] = i3;
 i11 = i3 + 8 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i9, i10, i20, 0);
 __ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_(i1, i7, i9);
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i9 = i1 + 8 | 0;
   i20 = i9 | 0;
   i10 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 + 8 | 0;
   i9 = i13 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 do {
  if (i21) {
   i1 = HEAP32[i7 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i13 = i1 + 8 | 0;
   i1 = i13 | 0;
   i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 if (!i22) {
  i18 = 1;
  STACKTOP = i4;
  return i18 | 0;
 }
 i22 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i7 = i22 + 8 | 0;
   i21 = i7 | 0;
   i13 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i8 >> 2] | 0;
 if ((i22 | 0) == 0) {
  i18 = 1;
  STACKTOP = i4;
  return i18 | 0;
 }
 i8 = i22 + 8 | 0;
 i22 = i8 | 0;
 i7 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  i18 = 1;
  STACKTOP = i4;
  return i18 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  i18 = 1;
  STACKTOP = i4;
  return i18 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 i18 = 1;
 STACKTOP = i4;
 return i18 | 0;
}
function __ZN7WebCore17ApplyStyleCommand29removeImplicitlyStyledElementEPNS_12EditingStyleEPNS_11HTMLElementENS0_22InlineStyleRemovalModeES2_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 HEAP32[i7 >> 2] = i3;
 if ((i4 | 0) == 2) {
  if (__ZNK7WebCore12EditingStyle35conflictsWithImplicitStyleOfElementEPNS_11HTMLElementEPS0_NS0_26ShouldExtractMatchingStyleE(i2, i3, 0, 1) | 0) {
   i11 = 1;
   STACKTOP = i6;
   return i11 | 0;
  }
  i11 = __ZNK7WebCore12EditingStyle38conflictsWithImplicitStyleOfAttributesEPNS_11HTMLElementE(i2, i3) | 0;
  STACKTOP = i6;
  return i11 | 0;
 }
 i12 = (i4 | 0) != 1 | 0;
 if (__ZNK7WebCore12EditingStyle35conflictsWithImplicitStyleOfElementEPNS_11HTMLElementEPS0_NS0_26ShouldExtractMatchingStyleE(i2, i3, i5, i12) | 0) {
  __ZN7WebCore17ApplyStyleCommand42replaceWithSpanOrRemoveIfWithoutAttributesERPNS_11HTMLElementE(i1, i7);
  i11 = 1;
  STACKTOP = i6;
  return i11 | 0;
 }
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = 0;
 i4 = i8 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 i13 = i8 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 do {
  if (__ZNK7WebCore12EditingStyle43extractConflictingImplicitStyleOfAttributesEPNS_11HTMLElementENS0_30ShouldPreserveWritingDirectionEPS0_RN3WTF6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEENS0_26ShouldExtractMatchingStyleE(i2, i3, (i5 | 0) == 0 | 0, i5, i8, i12) | 0) {
   i14 = HEAP32[i13 >> 2] | 0;
   L14 : do {
    if ((i14 | 0) != 0) {
     i15 = i1 | 0;
     i16 = i3 | 0;
     i17 = i9 | 0;
     i18 = i3 + 8 | 0;
     if ((i3 | 0) == 0) {
      i19 = 0;
      i20 = i14;
      while (1) {
       HEAP32[i17 >> 2] = i16;
       if (i20 >>> 0 <= i19 >>> 0) {
        break;
       }
       __ZN7WebCore20CompositeEditCommand19removeNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameE(i15, i9, (HEAP32[i7 >> 2] | 0) + (i19 << 2) | 0);
       i21 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i21 | 0) != 0) {
         i22 = i21 + 8 | 0;
         i23 = i22 | 0;
         i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
         HEAP32[i23 >> 2] = i24;
         if ((i24 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
        }
       } while (0);
       i19 = i19 + 1 | 0;
       i20 = HEAP32[i13 >> 2] | 0;
       if (i19 >>> 0 >= i20 >>> 0) {
        break L14;
       }
      }
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     } else {
      i20 = 0;
      i19 = i14;
      while (1) {
       HEAP32[i17 >> 2] = i16;
       HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
       if (i19 >>> 0 <= i20 >>> 0) {
        break;
       }
       __ZN7WebCore20CompositeEditCommand19removeNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameE(i15, i9, (HEAP32[i7 >> 2] | 0) + (i20 << 2) | 0);
       i21 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i21 | 0) != 0) {
         i22 = i21 + 8 | 0;
         i24 = i22 | 0;
         i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
         HEAP32[i24 >> 2] = i23;
         if ((i23 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
        }
       } while (0);
       i20 = i20 + 1 | 0;
       i19 = HEAP32[i13 >> 2] | 0;
       if (i20 >>> 0 >= i19 >>> 0) {
        break L14;
       }
      }
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     }
    }
   } while (0);
   i14 = (i3 | 0) == 0;
   if (i14) {
    i25 = 1;
    break;
   }
   i19 = HEAP32[i3 + 44 >> 2] | 0;
   i20 = HEAP32[__ZN7WebCore9HTMLNames7fontTagE >> 2] | 0;
   do {
    if ((i19 | 0) == (i20 | 0)) {
     i26 = 26;
    } else {
     if ((HEAP32[i19 + 12 >> 2] | 0) != (HEAP32[i20 + 12 >> 2] | 0)) {
      i26 = 27;
      break;
     }
     if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i20 + 16 >> 2] | 0)) {
      i26 = 26;
     } else {
      i26 = 27;
     }
    }
   } while (0);
   if ((i26 | 0) == 26) {
    if (!(__ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE(i3 | 0, 1) | 0)) {
     i26 = 27;
    }
   }
   if ((i26 | 0) == 27) {
    if (i14) {
     i25 = 1;
     break;
    }
    if ((HEAP32[i3 + 12 >> 2] & 16 | 0) == 0) {
     i25 = 1;
     break;
    }
    i20 = HEAP32[i3 + 44 >> 2] | 0;
    i19 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
    if ((i20 | 0) != (i19 | 0)) {
     if ((HEAP32[i20 + 12 >> 2] | 0) != (HEAP32[i19 + 12 >> 2] | 0)) {
      i25 = 1;
      break;
     }
     if ((HEAP32[i20 + 16 >> 2] | 0) != (HEAP32[i19 + 16 >> 2] | 0)) {
      i25 = 1;
      break;
     }
    }
    if (!(__ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE(i3 | 0, 1) | 0)) {
     i25 = 1;
     break;
    }
   }
   i19 = i10 | 0;
   HEAP32[i19 >> 2] = i3;
   if (!i14) {
    i20 = i3 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i10, 1);
   i20 = HEAP32[i19 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i25 = 1;
    break;
   }
   i19 = i20 + 8 | 0;
   i20 = i19 | 0;
   i17 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    i25 = 1;
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    i25 = 1;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   i25 = 1;
  } else {
   i25 = 0;
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i1 = HEAP32[i7 >> 2] | 0;
  i3 = i1 + (i10 << 2) | 0;
  i10 = i1;
  while (1) {
   __ZN7WebCore13QualifiedNameD1Ev(i10);
   i10 = i10 + 4 | 0;
   if ((i10 | 0) == (i3 | 0)) {
    break;
   }
  }
  HEAP32[i13 >> 2] = 0;
 }
 i13 = HEAP32[i7 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i11 = i25;
  STACKTOP = i6;
  return i11 | 0;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 i11 = i25;
 STACKTOP = i6;
 return i11 | 0;
}
function __ZN7WebCore17ApplyStyleCommand14removeCSSStyleEPNS_12EditingStyleEPNS_11HTMLElementENS0_22InlineStyleRemovalModeES2_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 if ((i4 | 0) == 2) {
  i11 = __ZNK7WebCore12EditingStyle33conflictsWithInlineStyleOfElementEPNS_13StyledElementEPS0_PN3WTF6VectorINS_13CSSPropertyIDELj0ENS4_15CrashOnOverflowEEE(i2, i3 | 0, 0, 0) | 0;
  STACKTOP = i6;
  return i11 | 0;
 }
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = 0;
 i12 = i7 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i7 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i3 | 0;
 do {
  if (__ZNK7WebCore12EditingStyle33conflictsWithInlineStyleOfElementEPNS_13StyledElementEPS0_PN3WTF6VectorINS_13CSSPropertyIDELj0ENS4_15CrashOnOverflowEEE(i2, i14, i5, i7) | 0) {
   i15 = HEAP32[i13 >> 2] | 0;
   L7 : do {
    if ((i15 | 0) != 0) {
     i16 = i1 | 0;
     i17 = i8 | 0;
     i18 = i3 + 8 | 0;
     if ((i3 | 0) == 0) {
      i19 = 0;
      i20 = i15;
      while (1) {
       HEAP32[i17 >> 2] = i14;
       if (i20 >>> 0 <= i19 >>> 0) {
        break;
       }
       __ZN7WebCore20CompositeEditCommand17removeCSSPropertyEN3WTF10PassRefPtrINS_13StyledElementEEENS_13CSSPropertyIDE(i16, i8, HEAP32[(HEAP32[i4 >> 2] | 0) + (i19 << 2) >> 2] | 0);
       i21 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i21 | 0) != 0) {
         i22 = i21 + 8 | 0;
         i23 = i22 | 0;
         i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
         HEAP32[i23 >> 2] = i24;
         if ((i24 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
        }
       } while (0);
       i19 = i19 + 1 | 0;
       i20 = HEAP32[i13 >> 2] | 0;
       if (i19 >>> 0 >= i20 >>> 0) {
        break L7;
       }
      }
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     } else {
      i20 = 0;
      i19 = i15;
      while (1) {
       HEAP32[i17 >> 2] = i14;
       HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
       if (i19 >>> 0 <= i20 >>> 0) {
        break;
       }
       __ZN7WebCore20CompositeEditCommand17removeCSSPropertyEN3WTF10PassRefPtrINS_13StyledElementEEENS_13CSSPropertyIDE(i16, i8, HEAP32[(HEAP32[i4 >> 2] | 0) + (i20 << 2) >> 2] | 0);
       i21 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i21 | 0) != 0) {
         i22 = i21 + 8 | 0;
         i24 = i22 | 0;
         i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
         HEAP32[i24 >> 2] = i23;
         if ((i23 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
        }
       } while (0);
       i20 = i20 + 1 | 0;
       i19 = HEAP32[i13 >> 2] | 0;
       if (i20 >>> 0 >= i19 >>> 0) {
        break L7;
       }
      }
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     }
    }
   } while (0);
   i15 = HEAP32[i3 + 48 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i25 = 0;
   } else {
    i25 = HEAP32[i15 + 8 >> 2] | 0;
   }
   i15 = HEAP32[i25 + 4 >> 2] | 0;
   if ((i15 & 4 | 0) == 0) {
    i26 = i15 >>> 3;
   } else {
    i26 = HEAP32[i25 + 16 >> 2] | 0;
   }
   do {
    if ((i26 | 0) == 0) {
     i15 = i9 | 0;
     HEAP32[i15 >> 2] = i3;
     if ((i3 | 0) != 0) {
      i19 = i3 + 8 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand19removeNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameE(i1 | 0, i9, __ZN7WebCore9HTMLNames9styleAttrE);
     i19 = HEAP32[i15 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     i15 = i19 + 8 | 0;
     i19 = i15 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   if ((i3 | 0) == 0) {
    i27 = 1;
    break;
   }
   if ((HEAP32[i3 + 12 >> 2] & 16 | 0) == 0) {
    i27 = 1;
    break;
   }
   i15 = HEAP32[i3 + 44 >> 2] | 0;
   i20 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
   if ((i15 | 0) != (i20 | 0)) {
    if ((HEAP32[i15 + 12 >> 2] | 0) != (HEAP32[i20 + 12 >> 2] | 0)) {
     i27 = 1;
     break;
    }
    if ((HEAP32[i15 + 16 >> 2] | 0) != (HEAP32[i20 + 16 >> 2] | 0)) {
     i27 = 1;
     break;
    }
   }
   if (!(__ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE(i14, 1) | 0)) {
    i27 = 1;
    break;
   }
   i20 = i10 | 0;
   HEAP32[i20 >> 2] = i3;
   i15 = i3 + 8 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i10, 1);
   i15 = HEAP32[i20 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i27 = 1;
    break;
   }
   i20 = i15 + 8 | 0;
   i15 = i20 | 0;
   i19 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    i27 = 1;
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    i27 = 1;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   i27 = 1;
  } else {
   i27 = 0;
  }
 } while (0);
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
 }
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i11 = i27;
  STACKTOP = i6;
  return i11 | 0;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 i11 = i27;
 STACKTOP = i6;
 return i11 | 0;
}
function __ZN7WebCore17ApplyStyleCommand13addBlockStyleERKNS_11StyleChangeEPNS_11HTMLElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 56 | 0;
 i11 = i4 + 64 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i7 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i2 = i13 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i8 | 0;
 HEAP32[i2 >> 2] = 0;
 i13 = i8 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i8 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i8 + 12 | 0;
 HEAP8[i15] = 1;
 HEAP32[i8 + 16 >> 2] = 0;
 i16 = i8 + 20 | 0;
 HEAP32[i16 >> 2] = 0;
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i7);
 i7 = HEAP32[i3 + 48 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = HEAP32[i7 + 8 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i18 = HEAP32[i12 >> 2] | 0;
   L10 : do {
    if ((i18 | 0) != 0) {
     if ((HEAP32[i18 + 4 >> 2] | 0) == 0) {
      break;
     }
     HEAP8[i6] = 32;
     i19 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i20 = HEAP32[i2 >> 2] | 0;
       if (i20 >>> 0 >= (HEAP32[i19 + 4 >> 2] | 0) >>> 0) {
        break;
       }
       if ((HEAP32[i13 >> 2] | 0) != 0) {
        break;
       }
       i21 = (HEAP8[i15] & 1) == 0;
       HEAP32[i2 >> 2] = i20 + 1;
       if (i21) {
        HEAP16[(HEAP32[i8 + 20 >> 2] | 0) + (i20 << 1) >> 1] = 32;
        break L10;
       } else {
        HEAP8[(HEAP32[i16 >> 2] | 0) + i20 | 0] = 32;
        break L10;
       }
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendEPKhj(i8, i6, 1);
    }
   } while (0);
   __ZNK7WebCore15StyleProperties6asTextEv(i9, i17);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i9);
   i18 = HEAP32[i9 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i19 = i18 | 0;
   i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i19 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i9 = i1 | 0;
 i1 = i10 | 0;
 HEAP32[i1 >> 2] = i3;
 i6 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 __ZN3WTF13StringBuilder11shrinkToFitEv(i8);
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   __ZNK3WTF13StringBuilder11reifyStringEv(i8);
   i3 = HEAP32[i13 >> 2] | 0;
   if ((i3 | 0) != 0) {
    i22 = i3;
    i23 = 22;
    break;
   }
   i24 = i5;
   i23 = 23;
  } else {
   i22 = i6;
   i23 = 22;
  }
 } while (0);
 do {
  if ((i23 | 0) == 22) {
   i6 = i22 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i8 = i5;
   if ((i22 | 0) == 0) {
    i24 = i8;
    i23 = 23;
    break;
   }
   if ((HEAP32[i22 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i22);
    i25 = i5 | 0;
    i26 = i22;
    i27 = i8;
    i28 = 0;
    break;
   } else {
    i3 = i5 | 0;
    HEAP32[i3 >> 2] = i22;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
    i25 = i3;
    i26 = i22;
    i27 = i8;
    i28 = 0;
    break;
   }
  }
 } while (0);
 if ((i23 | 0) == 23) {
  i23 = i5 | 0;
  HEAP32[i23 >> 2] = 0;
  i25 = i23;
  i26 = 0;
  i27 = i24;
  i28 = 1;
 }
 i24 = i11 | 0;
 HEAP32[i24 >> 2] = HEAP32[i25 >> 2];
 __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i9, i10, __ZN7WebCore9HTMLNames9styleAttrE, i11);
 i11 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i24 = i11 | 0;
   i10 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i24 >> 2] = i10;
    break;
   }
  }
 } while (0);
 do {
  if (!i28) {
   i11 = i26 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    break;
   } else {
    HEAP32[i11 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i26 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i26 | 0) != 0) {
   i1 = i26 + 8 | 0;
   i28 = i1 | 0;
   i10 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
   HEAP32[i28 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 i26 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i26 | 0) != 0) {
   i14 = i26 | 0;
   i1 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    break;
   } else {
    HEAP32[i14 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i26 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i26 | 0) != 0) {
   i13 = i26 | 0;
   i1 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i26);
    break;
   } else {
    HEAP32[i13 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i26 = HEAP32[i12 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i26 | 0;
 i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i26);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i12 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore17ApplyStyleCommand23splitTextElementAtStartERKNS_8PositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 56 | 0;
 i11 = i6 | 0;
 i12 = i6 + 4 | 0;
 i13 = i6 + 8 | 0;
 i14 = i13;
 _memset(i6 | 0, 0, 12) | 0;
 i15 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
 do {
  if ((i15 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i3) | 0)) {
   i16 = __ZNK7WebCore8Position13containerTextEv(i3) | 0;
   i17 = i8 | 0;
   HEAP32[i17 >> 2] = i16;
   if ((i16 | 0) != 0) {
    i18 = i16 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i7, i8, (HEAP32[i3 + 4 >> 2] | 0) - (HEAP32[i2 + 4 >> 2] | 0) | 0);
   i18 = i7 | 0;
   i16 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   i19 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i16;
   do {
    if ((i19 | 0) != 0) {
     i16 = i19 + 8 | 0;
     i20 = i16 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   HEAP32[i12 >> 2] = HEAP32[i7 + 4 >> 2];
   i19 = HEAP32[i7 + 8 >> 2] | 0;
   i16 = HEAP32[i14 >> 2] & -8 | i19 & 7;
   HEAP32[i14 >> 2] = i16;
   HEAP8[i13] = i16 & 255 & -9 | i19 & 8;
   i19 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i16 = i19 + 8 | 0;
     i21 = i16 | 0;
     i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i19 = HEAP32[i17 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i18 = i19 + 8 | 0;
   i19 = i18 | 0;
   i16 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  } else {
   i18 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i18 | 0) == 0) {
     HEAP32[i11 >> 2] = i18;
    } else {
     i16 = i18 + 8 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     i16 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = i18;
     if ((i16 | 0) == 0) {
      break;
     }
     i19 = i16 + 8 | 0;
     i16 = i19 | 0;
     i20 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   HEAP32[i12 >> 2] = HEAP32[i3 + 4 >> 2];
   i18 = HEAP32[i3 + 8 >> 2] | 0;
   i17 = HEAP32[i14 >> 2] & -8 | i18 & 7;
   HEAP32[i14 >> 2] = i17;
   HEAP8[i13] = i17 & 255 & -9 | i18 & 8;
  }
 } while (0);
 i13 = __ZNK7WebCore8Position13containerTextEv(i2) | 0;
 i14 = i9 | 0;
 HEAP32[i14 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i3 = i13 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand30splitTextNodeContainingElementEN3WTF10PassRefPtrINS_4TextEEEj(i1 | 0, i9, HEAP32[i2 + 4 >> 2] | 0);
 i9 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 + 8 | 0;
   i3 = i14 | 0;
   i13 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 i9 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i14 = i9 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i10, i5, 1);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 8 | 0;
   i14 = i2 | 0;
   i9 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_(i1, i10, i6);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 8 | 0;
   i1 = i10 | 0;
   i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i11 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = i6 + 8 | 0;
 i6 = i11 | 0;
 i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i10;
 if ((i10 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17ApplyStyleCommand22addInlineStyleIfNeededEPNS_12EditingStyleEN3WTF10PassRefPtrINS_4NodeEEES6_NS0_17EAddStyledElementE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 48 | 0;
 i11 = i6 + 56 | 0;
 i12 = i6 + 64 | 0;
 i13 = i6 + 72 | 0;
 i14 = i3 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i15 = i4 | 0;
 i4 = HEAP32[i15 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i3 + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i4 + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i14 >> 2] = 0;
 i14 = i7 | 0;
 HEAP32[i14 >> 2] = 0;
 i4 = i10 | 0;
 HEAP32[i4 >> 2] = i3;
 i16 = i3 + 8 | 0;
 HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 __ZN7WebCore17ApplyStyleCommand34positionToComputeInlineStyleChangeEN3WTF10PassRefPtrINS_4NodeEEERNS1_6RefPtrIS3_EE(i9, i1, i10, i7);
 __ZN7WebCore11StyleChangeC1EPNS_12EditingStyleERKNS_8PositionE(i8, i2, i9);
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 + 8 | 0;
   i7 = i9 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 8 | 0;
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i14 >> 2] | 0;
 i14 = (i2 | 0) == 0;
 do {
  if (!i14) {
   i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
   i10 = i11 | 0;
   HEAP32[i10 >> 2] = i2;
   i9 = i2 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   FUNCTION_TABLE_viii[i4 & 3](i1 | 0, i11, 1);
   i4 = HEAP32[i10 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i10 = i4 + 8 | 0;
   i4 = i10 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i11 = i12 | 0;
 HEAP32[i11 >> 2] = i3;
 i10 = i3 + 8 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 i10 = i13 | 0;
 i9 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i10 >> 2] = i9;
 __ZN7WebCore17ApplyStyleCommand22applyInlineStyleChangeEN3WTF10PassRefPtrINS_4NodeEEES4_RNS_11StyleChangeENS0_17EAddStyledElementE(i1, i12, i13, i8, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i13 = i10 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 + 8 | 0;
   i10 = i11 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i8 + 20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i8 + 16 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i12 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i8 + 12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i12;
    break;
   }
  }
 } while (0);
 do {
  if (!i14) {
   i5 = i2 + 8 | 0;
   i12 = i5 | 0;
   i8 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i2 = i3 + 8 | 0;
 i3 = i2 | 0;
 i14 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i14;
 if ((i14 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17ApplyStyleCommand30cleanupUnstyledAppleStyleSpansEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i2 + 36 | 0;
 while (1) {
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 45;
   break;
  }
  if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
   i6 = i7 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i8 | 0) == 45) {
  STACKTOP = i3;
  return;
 }
 i6 = i4;
 i2 = 0;
 i9 = 0;
 i10 = 0;
 i11 = i7;
 L10 : while (1) {
  i7 = i11;
  do {
   if ((HEAP32[i11 + 12 >> 2] & 16 | 0) == 0) {
    i12 = i10;
    i13 = i9;
    i14 = i2;
   } else {
    i15 = HEAP32[i11 + 44 >> 2] | 0;
    i16 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
    if ((i15 | 0) != (i16 | 0)) {
     if ((HEAP32[i15 + 12 >> 2] | 0) != (HEAP32[i16 + 12 >> 2] | 0)) {
      i12 = i10;
      i13 = i9;
      i14 = i2;
      break;
     }
     if ((HEAP32[i15 + 16 >> 2] | 0) != (HEAP32[i16 + 16 >> 2] | 0)) {
      i12 = i10;
      i13 = i9;
      i14 = i2;
      break;
     }
    }
    if (!(__ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE(i11, 1) | 0)) {
     i12 = i10;
     i13 = i9;
     i14 = i2;
     break;
    }
    HEAP32[i4 >> 2] = i7;
    if ((i2 | 0) != (i9 | 0)) {
     HEAP32[i10 + (i2 << 2) >> 2] = i7;
     i12 = i10;
     i13 = i9;
     i14 = i2 + 1 | 0;
     break;
    }
    i16 = i9 + 1 | 0;
    do {
     if (i10 >>> 0 > i4 >>> 0) {
      i8 = 17;
     } else {
      if ((i10 + (i9 << 2) | 0) >>> 0 <= i4 >>> 0) {
       i8 = 17;
       break;
      }
      i15 = i6 - i10 >> 2;
      i17 = i16 + (i9 >>> 2) | 0;
      i18 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
      i17 = i18 >>> 0 > i16 >>> 0 ? i18 : i16;
      do {
       if (i9 >>> 0 < i17 >>> 0) {
        if (i17 >>> 0 > 1073741823 >>> 0) {
         i8 = 24;
         break L10;
        }
        i18 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 2) | 0;
        i19 = i18 >>> 2;
        i20 = __ZN3WTF10fastMallocEj(i18) | 0;
        i18 = i20;
        i21 = i10;
        _memcpy(i20 | 0, i21 | 0, i9 << 2) | 0;
        if ((i10 | 0) == 0) {
         i22 = i18;
         i23 = i19;
         break;
        }
        i20 = (i18 | 0) == (i10 | 0);
        __ZN3WTF8fastFreeEPv(i21);
        i22 = i20 ? 0 : i18;
        i23 = i20 ? 0 : i19;
       } else {
        i22 = i10;
        i23 = i9;
       }
      } while (0);
      i24 = i22 + (i15 << 2) | 0;
      i25 = i22;
      i26 = i23;
     }
    } while (0);
    do {
     if ((i8 | 0) == 17) {
      i8 = 0;
      i17 = i16 + (i9 >>> 2) | 0;
      i19 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
      i17 = i19 >>> 0 > i16 >>> 0 ? i19 : i16;
      if (i9 >>> 0 >= i17 >>> 0) {
       i24 = i4;
       i25 = i10;
       i26 = i9;
       break;
      }
      if (i17 >>> 0 > 1073741823 >>> 0) {
       i8 = 19;
       break L10;
      }
      i19 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 2) | 0;
      i17 = i19 >>> 2;
      i20 = __ZN3WTF10fastMallocEj(i19) | 0;
      i19 = i20;
      i18 = i10;
      _memcpy(i20 | 0, i18 | 0, i9 << 2) | 0;
      if ((i10 | 0) == 0) {
       i24 = i4;
       i25 = i19;
       i26 = i17;
       break;
      }
      i20 = (i19 | 0) == (i10 | 0);
      __ZN3WTF8fastFreeEPv(i18);
      i24 = i4;
      i25 = i20 ? 0 : i19;
      i26 = i20 ? 0 : i17;
     }
    } while (0);
    HEAP32[i25 + (i9 << 2) >> 2] = HEAP32[i24 >> 2];
    i12 = i25;
    i13 = i26;
    i14 = i16;
   }
  } while (0);
  i7 = i11;
  while (1) {
   i17 = HEAP32[i7 + 28 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i8 = 6;
    break L10;
   }
   if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0) {
    i7 = i17;
   } else {
    i2 = i14;
    i9 = i13;
    i10 = i12;
    i11 = i17;
    continue L10;
   }
  }
 }
 if ((i8 | 0) == 6) {
  if ((i14 | 0) != 0) {
   i11 = i1 | 0;
   i1 = i5 | 0;
   i10 = 0;
   while (1) {
    i13 = HEAP32[i12 + (i10 << 2) >> 2] | 0;
    HEAP32[i1 >> 2] = i13;
    if ((i13 | 0) != 0) {
     i9 = i13 + 8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
    }
    __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i11, i5, 1);
    i9 = HEAP32[i1 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i13 = i9 + 8 | 0;
      i2 = i13 | 0;
      i26 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
      HEAP32[i2 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
     }
    } while (0);
    i10 = i10 + 1 | 0;
    if (i10 >>> 0 >= i14 >>> 0) {
     break;
    }
   }
  }
  if ((i12 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  __ZN3WTF8fastFreeEPv(i12);
  STACKTOP = i3;
  return;
 } else if ((i8 | 0) == 19) {
  _WTFCrash();
 } else if ((i8 | 0) == 24) {
  _WTFCrash();
 }
}
function __ZN7WebCore17ApplyStyleCommand16splitTextAtStartERKNS_8PositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 i10 = i5 | 0;
 i11 = i5 + 4 | 0;
 i12 = i5 + 8 | 0;
 i13 = i12;
 i14 = i3 + 8 | 0;
 _memset(i5 | 0, 0, 12) | 0;
 do {
  if ((HEAP32[i14 >> 2] & 7 | 0) == 0) {
   i15 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
   if ((i15 | 0) != (__ZNK7WebCore8Position13containerNodeEv(i3) | 0)) {
    i16 = 17;
    break;
   }
   i15 = __ZNK7WebCore8Position13containerTextEv(i3) | 0;
   i17 = i7 | 0;
   HEAP32[i17 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i18 = i15 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i6, i7, (HEAP32[i3 + 4 >> 2] | 0) - (HEAP32[i2 + 4 >> 2] | 0) | 0);
   i18 = i6 | 0;
   i15 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   i19 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i15;
   do {
    if ((i19 | 0) != 0) {
     i15 = i19 + 8 | 0;
     i20 = i15 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   HEAP32[i11 >> 2] = HEAP32[i6 + 4 >> 2];
   i19 = HEAP32[i6 + 8 >> 2] | 0;
   i15 = HEAP32[i13 >> 2] & -8 | i19 & 7;
   HEAP32[i13 >> 2] = i15;
   HEAP8[i12] = i15 & 255 & -9 | i19 & 8;
   i19 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i15 = i19 + 8 | 0;
     i21 = i15 | 0;
     i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i19 = HEAP32[i17 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i18 = i19 + 8 | 0;
   i19 = i18 | 0;
   i15 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  } else {
   i16 = 17;
  }
 } while (0);
 if ((i16 | 0) == 17) {
  i16 = HEAP32[i3 >> 2] | 0;
  if ((i16 | 0) != 0) {
   i6 = i16 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  i6 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i16;
  do {
   if ((i6 | 0) != 0) {
    i16 = i6 + 8 | 0;
    i7 = i16 | 0;
    i18 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i18;
    if ((i18 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
   }
  } while (0);
  HEAP32[i11 >> 2] = HEAP32[i3 + 4 >> 2];
  i3 = HEAP32[i14 >> 2] | 0;
  i14 = HEAP32[i13 >> 2] & -8 | i3 & 7;
  HEAP32[i13 >> 2] = i14;
  HEAP8[i12] = i14 & 255 & -9 | i3 & 8;
 }
 i3 = __ZNK7WebCore8Position13containerTextEv(i2) | 0;
 i14 = (i3 | 0) == 0;
 if (i14) {
  i12 = i8 | 0;
  HEAP32[i12 >> 2] = 0;
  i22 = i12;
 } else {
  i12 = i3 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  i13 = i8 | 0;
  HEAP32[i13 >> 2] = i3;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  i22 = i13;
 }
 __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i1 | 0, i8, HEAP32[i2 + 4 >> 2] | 0);
 i2 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i22 = i2 + 8 | 0;
   i8 = i22 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i9, i3 | 0);
 __ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_(i1, i9, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i1 = i9 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 do {
  if (!i14) {
   i5 = i3 + 8 | 0;
   i9 = i5 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i10 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i3 + 8 | 0;
 i3 = i10 | 0;
 i14 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i14;
 if ((i14 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17ApplyStyleCommand34positionToComputeInlineStyleChangeEN3WTF10PassRefPtrINS_4NodeEEERNS1_6RefPtrIS3_EE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] & 4 | 0) != 0) {
  if ((i3 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   i13 = i1 + 8 | 0;
   i14 = i13;
   i15 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i15 & -8;
   HEAP8[i13] = i15 & 255 & -16;
   STACKTOP = i5;
   return;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 132 >> 2] & 31](i3) | 0) {
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i3);
   STACKTOP = i5;
   return;
  }
  i15 = i8 | 0;
  HEAP32[i15 >> 2] = i3;
  i13 = i3 + 8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i8, 1);
  i8 = HEAP32[i15 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i15 = i8 + 8 | 0;
  i8 = i15 | 0;
  i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  HEAP32[i8 >> 2] = i13;
  if ((i13 | 0) >= 1) {
   STACKTOP = i5;
   return;
  }
  if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
   STACKTOP = i5;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i9, HEAP32[i2 + 8 >> 2] | 0, __ZN7WebCore9HTMLNames7spanTagE);
 i15 = i9 | 0;
 i9 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i9;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 8 | 0;
   i8 = i9 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 + 8 | 0;
   i9 = i15 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i4 = i2 | 0;
 i2 = i10 | 0;
 i15 = HEAP32[i13 >> 2] | 0;
 HEAP32[i2 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i3 = i15 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i12 >> 2] | 0;
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i15 = i3 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i11, i6, 1);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 8 | 0;
   i15 = i12 | 0;
   i3 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i4, i10, i11);
 i10 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = i10 + 8 | 0;
   i4 = i11 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 + 8 | 0;
   i11 = i2 | 0;
   i6 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 if ((i10 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i13 = i1 + 8 | 0;
  i2 = i13;
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i6 & -8;
  HEAP8[i13] = i6 & 255 & -16;
  STACKTOP = i5;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 132 >> 2] & 31](i10) | 0) {
  __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i10);
  STACKTOP = i5;
  return;
 }
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = i10;
 i13 = i10 + 8 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i7, 1);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i7 + 8 | 0;
 i7 = i6 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17ApplyStyleCommand33mergeStartWithPreviousIfIdenticalERKNS_8PositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 56 | 0;
 i11 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
 if ((__ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i2) | 0) != 0) {
  i12 = 0;
  STACKTOP = i4;
  return i12 | 0;
 }
 do {
  if (__ZN7WebCore12isAtomicNodeEPKNS_4NodeE(i11) | 0) {
   if ((HEAP32[i11 + 24 >> 2] | 0) == 0) {
    i13 = HEAP32[i11 + 16 >> 2] | 0;
    break;
   } else {
    i12 = 0;
    STACKTOP = i4;
    return i12 | 0;
   }
  } else {
   i13 = i11;
  }
 } while (0);
 if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
  i12 = 0;
  STACKTOP = i4;
  return i12 | 0;
 }
 i11 = HEAP32[i13 + 24 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
  STACKTOP = i4;
  return i12 | 0;
 }
 if (!(__ZN7WebCore20areIdenticalElementsEPKNS_4NodeES2_(i13, i11) | 0)) {
  i12 = 0;
  STACKTOP = i4;
  return i12 | 0;
 }
 i2 = HEAP32[i13 + 36 >> 2] | 0;
 i14 = i5 | 0;
 HEAP32[i14 >> 2] = i11;
 i15 = i11 + 8 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i15 = i6 | 0;
 HEAP32[i15 >> 2] = i13;
 i11 = (i13 | 0) == 0;
 if (!i11) {
  i16 = i13 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand22mergeIdenticalElementsEN3WTF10PassRefPtrINS_7ElementEEES4_(i1 | 0, i5, i6);
 i6 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i15 = i6 + 8 | 0;
   i5 = i15 | 0;
   i16 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i14 = i6 + 8 | 0;
   i15 = i14 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 i6 = __ZNK7WebCore4Node9nodeIndexEv(i2) | 0;
 i2 = i3 | 0;
 i14 = (i13 | 0) == (HEAP32[i2 >> 2] | 0) ? i6 : 0;
 i16 = i8 | 0;
 HEAP32[i16 >> 2] = i13;
 if (!i11) {
  i11 = i13 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i7, i8, i6, 0);
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = i10 | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i8 = i6 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = i3 + 8 | 0;
 do {
  if ((HEAP8[i8] & 8) == 0) {
   i6 = HEAP32[i8 >> 2] & 7;
   if (!((i6 | 0) == 2 | (i6 | 0) == 4)) {
    i17 = 24;
    break;
   }
   i18 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i3) | 0;
  } else {
   i17 = 24;
  }
 } while (0);
 if ((i17 | 0) == 24) {
  i18 = HEAP32[i3 + 4 >> 2] | 0;
 }
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i9, i10, i18 + i14 | 0, 0);
 __ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_(i1, i7, i9);
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i9 = i1 + 8 | 0;
   i14 = i9 | 0;
   i18 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i2 = i1 + 8 | 0;
   i9 = i2 | 0;
   i18 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i7 = i1 + 8 | 0;
   i2 = i7 | 0;
   i18 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i12 = 1;
  STACKTOP = i4;
  return i12 | 0;
 }
 i16 = i1 + 8 | 0;
 i1 = i16 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  i12 = 1;
  STACKTOP = i4;
  return i12 | 0;
 }
 if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
  i12 = 1;
  STACKTOP = i4;
  return i12 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
 i12 = 1;
 STACKTOP = i4;
 return i12 | 0;
}
function __ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i1 + 188 | 0;
 L1 : do {
  if ((HEAP8[i6] & 1) == 0) {
   i7 = i1 + 164 | 0;
   do {
    if ((HEAP32[i2 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
     i8 = i2 + 8 | 0;
     do {
      if ((HEAP8[i8] & 8) == 0) {
       i9 = HEAP32[i8 >> 2] & 7;
       if (!((i9 | 0) == 2 | (i9 | 0) == 4)) {
        i10 = 5;
        break;
       }
       i11 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i2) | 0;
      } else {
       i10 = 5;
      }
     } while (0);
     if ((i10 | 0) == 5) {
      i11 = HEAP32[i2 + 4 >> 2] | 0;
     }
     i9 = i1 + 172 | 0;
     do {
      if ((HEAP8[i9] & 8) == 0) {
       i12 = HEAP32[i9 >> 2] & 7;
       if (!((i12 | 0) == 2 | (i12 | 0) == 4)) {
        i10 = 9;
        break;
       }
       i13 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
      } else {
       i10 = 9;
      }
     } while (0);
     if ((i10 | 0) == 9) {
      i13 = HEAP32[i1 + 168 >> 2] | 0;
     }
     if ((i11 | 0) != (i13 | 0)) {
      break;
     }
     if (((HEAP32[i9 >> 2] ^ HEAP32[i8 >> 2]) & 7 | 0) != 0) {
      break;
     }
     i12 = i1 + 176 | 0;
     if ((HEAP32[i3 >> 2] | 0) != (HEAP32[i12 >> 2] | 0)) {
      break;
     }
     i14 = i3 + 8 | 0;
     do {
      if ((HEAP8[i14] & 8) == 0) {
       i15 = HEAP32[i14 >> 2] & 7;
       if (!((i15 | 0) == 2 | (i15 | 0) == 4)) {
        i10 = 16;
        break;
       }
       i16 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i3) | 0;
      } else {
       i10 = 16;
      }
     } while (0);
     if ((i10 | 0) == 16) {
      i16 = HEAP32[i3 + 4 >> 2] | 0;
     }
     i8 = i1 + 184 | 0;
     do {
      if ((HEAP8[i8] & 8) == 0) {
       i9 = HEAP32[i8 >> 2] & 7;
       if (!((i9 | 0) == 2 | (i9 | 0) == 4)) {
        i10 = 20;
        break;
       }
       i17 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i12) | 0;
      } else {
       i10 = 20;
      }
     } while (0);
     if ((i10 | 0) == 20) {
      i17 = HEAP32[i1 + 180 >> 2] | 0;
     }
     if ((i16 | 0) != (i17 | 0)) {
      break;
     }
     if (((HEAP32[i8 >> 2] ^ HEAP32[i14 >> 2]) & 7 | 0) == 0) {
      break L1;
     }
    }
   } while (0);
   HEAP8[i6] = 1;
  }
 } while (0);
 i6 = HEAP8[i1 + 68 | 0] | 0;
 if ((i6 & 1) == 0) {
  i18 = (i6 & 2) == 0;
 } else {
  i18 = 1;
 }
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i5, i18 ? i2 : i3, i18 ? i3 : i2, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
 __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i1 | 0, i5);
 __ZN7WebCore16VisibleSelectionD2Ev(i5);
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i18 = i5 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 i18 = i1 + 164 | 0;
 i6 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = i5;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 8 | 0;
   i18 = i5 | 0;
   i17 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 168 >> 2] = HEAP32[i2 + 4 >> 2];
 i6 = i2 + 8 | 0;
 i2 = i1 + 172 | 0;
 i5 = i2;
 i17 = HEAP32[i5 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
 HEAP32[i5 >> 2] = i17;
 HEAP8[i2] = i17 & 255 & -9 | HEAP8[i6] & 8;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i17 = i6 + 8 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
 }
 i17 = i1 + 176 | 0;
 i2 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = i6;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 8 | 0;
   i17 = i6 | 0;
   i5 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 180 >> 2] = HEAP32[i3 + 4 >> 2];
 i2 = i3 + 8 | 0;
 i3 = i1 + 184 | 0;
 i1 = i3;
 i6 = HEAP32[i1 >> 2] & -8 | HEAP32[i2 >> 2] & 7;
 HEAP32[i1 >> 2] = i6;
 HEAP8[i3] = i6 & 255 & -9 | HEAP8[i2] & 8;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17ApplyStyleCommand21splitTextElementAtEndERKNS_8PositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
 i11 = (i10 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i3) | 0);
 i10 = __ZNK7WebCore8Position13containerTextEv(i3) | 0;
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i13 = i10 + 8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand30splitTextNodeContainingElementEN3WTF10PassRefPtrINS_4TextEEEj(i1 | 0, i6, HEAP32[i3 + 4 >> 2] | 0);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 8 | 0;
   i13 = i12 | 0;
   i10 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[(__ZNK7WebCore8Position13containerNodeEv(i3) | 0) + 16 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i6 + 24 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i3 + 12 >> 2] & 2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i3 + 40 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i6 + 12 >> 2] & 1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if (i11) {
   i3 = i8 | 0;
   HEAP32[i3 >> 2] = i6;
   i12 = i6 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i7, i8, HEAP32[i2 + 4 >> 2] | 0);
   i12 = HEAP32[i3 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i3 = i12 + 8 | 0;
   i12 = i3 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  } else {
   i3 = HEAP32[i2 >> 2] | 0;
   HEAP32[i7 >> 2] = i3;
   if ((i3 | 0) != 0) {
    i10 = i3 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   i10 = HEAP32[i2 + 8 >> 2] | 0;
   i3 = i7 + 8 | 0;
   i12 = i3;
   i13 = HEAP32[i12 >> 2] & -8 | i10 & 7;
   HEAP32[i12 >> 2] = i13;
   HEAP8[i3] = i13 & 255 & -9 | i10 & 8;
  }
 } while (0);
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = i6;
 i8 = i6 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i9, i5, 2);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 8 | 0;
   i8 = i2 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_(i1, i7, i9);
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i9 = i1 + 8 | 0;
   i5 = i9 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 + 8 | 0;
 i1 = i7 | 0;
 i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i9;
 if ((i9 | 0) >= 1) {
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
function __ZNK7WebCore17ApplyStyleCommand17nodeFullySelectedEPNS_4NodeERKNS_8PositionES5_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i1 | 0;
 i6 = i1 + 8 | 0;
 i7 = i1 + 16 | 0;
 i8 = i1 + 32 | 0;
 i9 = i1 + 48 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i10 = (i2 | 0) == 0;
 do {
  if (i10) {
   _memset(i7 | 0, 0, 12) | 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 31](i2) | 0) {
    __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i7, i2);
    break;
   }
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i2;
   i12 = i2 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i7, i6, 1);
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i11 = i12 + 8 | 0;
   i12 = i11 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 do {
  if ((__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i7, i3) | 0) > -1) {
   do {
    if (i10) {
     HEAP32[i9 >> 2] = 0;
     HEAP32[i9 + 4 >> 2] = 0;
     i6 = i9 + 8 | 0;
     i11 = i6;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = i13 & -8;
     HEAP8[i6] = i13 & 255 & -16;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 31](i2) | 0) {
      __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i9, i2);
      break;
     }
     i13 = i5 | 0;
     HEAP32[i13 >> 2] = i2;
     i6 = i2 + 8 | 0;
     HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i9, i5, 2);
     i6 = HEAP32[i13 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     i13 = i6 + 8 | 0;
     i6 = i13 | 0;
     i11 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     HEAP32[i6 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i8, i9, 1);
   i13 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i8, i4) | 0) < 1;
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i6 = i11 + 8 | 0;
     i12 = i6 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
    }
   } while (0);
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i15 = i13;
    break;
   }
   i6 = i11 + 8 | 0;
   i11 = i6 | 0;
   i14 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    i15 = i13;
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    i15 = i13;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   i15 = i13;
  } else {
   i15 = 0;
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i1;
  return i15 | 0;
 }
 i7 = i9 + 8 | 0;
 i9 = i7 | 0;
 i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i1;
  return i15 | 0;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i1;
  return i15 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i1;
 return i15 | 0;
}
function __ZNK7WebCore17ApplyStyleCommand19nodeFullyUnselectedEPNS_4NodeERKNS_8PositionES5_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i1 | 0;
 i6 = i1 + 8 | 0;
 i7 = i1 + 16 | 0;
 i8 = i1 + 32 | 0;
 i9 = i1 + 48 | 0;
 i10 = (i2 | 0) == 0;
 do {
  if (i10) {
   _memset(i8 | 0, 0, 12) | 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 31](i2) | 0) {
    __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i8, i2);
    break;
   }
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i2;
   i12 = i2 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i8, i6, 2);
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i11 = i12 + 8 | 0;
   i12 = i11 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i7, i8, 1);
 i6 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i7, i3) | 0) < 0;
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 8 | 0;
   i11 = i7 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 8 | 0;
   i7 = i8 | 0;
   i13 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 do {
  if (i10) {
   HEAP32[i9 >> 2] = 0;
   HEAP32[i9 + 4 >> 2] = 0;
   i3 = i9 + 8 | 0;
   i8 = i3;
   i13 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i13 & -8;
   HEAP8[i3] = i13 & 255 & -16;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 31](i2) | 0) {
    __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i9, i2);
    break;
   }
   i13 = i5 | 0;
   HEAP32[i13 >> 2] = i2;
   i3 = i2 + 8 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i9, i5, 1);
   i3 = HEAP32[i13 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i13 = i3 + 8 | 0;
   i3 = i13 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i5 = __ZN7WebCore16comparePositionsERKNS_8PositionES2_(i9, i4) | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i14 = (i5 | 0) > 0;
  i15 = i6 | i14;
  STACKTOP = i1;
  return i15 | 0;
 }
 i9 = i4 + 8 | 0;
 i4 = i9 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  i14 = (i5 | 0) > 0;
  i15 = i6 | i14;
  STACKTOP = i1;
  return i15 | 0;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  i14 = (i5 | 0) > 0;
  i15 = i6 | i14;
  STACKTOP = i1;
  return i15 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 i14 = (i5 | 0) > 0;
 i15 = i6 | i14;
 STACKTOP = i1;
 return i15 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_fS9_NS_10HashTraitsIS3_EENSB_IfEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_fEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_fS9_NS_10HashTraitsIS3_EENSB_IfEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i8, 0) | 0;
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
    HEAP32[i21 >> 2] = 0;
    HEAPF32[i21 + 4 >> 2] = Infinity;
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
 HEAPF32[i26 + 4 >> 2] = +HEAPF32[i4 >> 2];
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
  i28 = __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_fS9_NS_10HashTraitsIS3_EENSB_IfEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i31, i26) | 0;
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
function __ZN7WebCoreL24highestEmbeddingAncestorEPNS_4NodeES1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 if ((i1 | 0) == 0 | (i1 | 0) == (i2 | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i6 | 0;
 i9 = i4 | 0;
 i10 = i5 | 0;
 i11 = i1;
 L4 : while (1) {
  L6 : do {
   if ((HEAP32[i11 + 12 >> 2] & 16 | 0) != 0) {
    HEAP32[i8 >> 2] = i11;
    i1 = i11 + 8 | 0;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
    __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i5, i6, 0, 0);
    __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i4, i5, 159, 1);
    i1 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i1 | 0) == 0) {
      i12 = 0;
     } else {
      i13 = i1 + 4 | 0;
      do {
       if ((HEAP32[i13 >> 2] & 516096 | 0) == 0) {
        HEAP32[i9 >> 2] = 0;
        if ((HEAP32[i13 >> 2] & 508 | 0) == 472) {
         i14 = HEAP32[i1 + 8 >> 2] | 0;
        } else {
         i14 = 0;
        }
        i15 = i1 | 0;
        i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
        if ((i16 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i1);
         i17 = i14;
         break;
        } else {
         HEAP32[i15 >> 2] = i16;
         i17 = i14;
         break;
        }
       } else {
        i17 = 0;
       }
      } while (0);
      i13 = HEAP32[i9 >> 2] | 0;
      i16 = (i17 | 0) == 327;
      if ((i13 | 0) == 0) {
       i12 = i16;
       break;
      }
      i15 = i13 | 0;
      i18 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
      if ((i18 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i13);
       i12 = i16;
       break;
      } else {
       HEAP32[i15 >> 2] = i18;
       i12 = i16;
       break;
      }
     }
    } while (0);
    i1 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i1 | 0) != 0) {
      i16 = i1 + 8 | 0;
      i18 = i16 | 0;
      i15 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
      HEAP32[i18 >> 2] = i15;
      if ((i15 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
     }
    } while (0);
    i1 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i1 | 0) != 0) {
      i16 = i1 + 8 | 0;
      i15 = i16 | 0;
      i18 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
      HEAP32[i15 >> 2] = i18;
      if ((i18 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
      if (i12) {
       i7 = i11;
       i19 = 26;
       break L4;
      } else {
       break L6;
      }
     }
    } while (0);
    if (i12) {
     i7 = i11;
     i19 = 27;
     break L4;
    }
   }
  } while (0);
  i1 = HEAP32[i11 + 16 >> 2] | 0;
  i16 = i1 | 0;
  if ((i1 | 0) == 0 | (i16 | 0) == (i2 | 0)) {
   i7 = 0;
   i19 = 28;
   break;
  } else {
   i11 = i16;
  }
 }
 if ((i19 | 0) == 26) {
  STACKTOP = i3;
  return i7 | 0;
 } else if ((i19 | 0) == 27) {
  STACKTOP = i3;
  return i7 | 0;
 } else if ((i19 | 0) == 28) {
  STACKTOP = i3;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore17ApplyStyleCommand14splitTextAtEndERKNS_8PositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i2 + 8 | 0;
 if ((HEAP32[i9 >> 2] & 7 | 0) == 0) {
  i10 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
  i11 = (i10 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i3) | 0);
 } else {
  i11 = 0;
 }
 i10 = HEAP32[i3 >> 2] | 0;
 i12 = i5 | 0;
 HEAP32[i12 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i13 = i10 + 8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i1 | 0, i5, HEAP32[i3 + 4 >> 2] | 0);
 i3 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i12 = i3 + 8 | 0;
   i5 = i12 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i10 + 24 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i3 + 12 >> 2] & 1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if (i11) {
   i10 = i7 | 0;
   HEAP32[i10 >> 2] = i3;
   i12 = i3 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i6, i7, HEAP32[i2 + 4 >> 2] | 0);
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i10 = i12 + 8 | 0;
   i12 = i10 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  } else {
   i10 = HEAP32[i2 >> 2] | 0;
   HEAP32[i6 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i13 = i10 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   HEAP32[i6 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   i13 = HEAP32[i9 >> 2] | 0;
   i10 = i6 + 8 | 0;
   i12 = i10;
   i5 = HEAP32[i12 >> 2] & -8 | i13 & 7;
   HEAP32[i12 >> 2] = i5;
   HEAP8[i10] = i5 & 255 & -9 | i13 & 8;
  }
 } while (0);
 __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i8, i3);
 __ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_(i1, i6, i8);
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i8 = i1 + 8 | 0;
   i3 = i8 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i1 + 8 | 0;
 i1 = i6 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i8;
 if ((i8 | 0) >= 1) {
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
function __ZN7WebCore17ApplyStyleCommand27shouldApplyInlineStyleToRunEPNS_12EditingStyleEPNS_4NodeES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if ((i3 | 0) == 0 | (i3 | 0) == (i4 | 0)) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 i9 = i1 + 192 | 0;
 i1 = i6 | 0;
 i10 = i7 | 0;
 i11 = i3;
 L4 : while (1) {
  i3 = i11 + 12 | 0;
  if ((HEAP32[i3 >> 2] & 2 | 0) == 0) {
   i12 = 5;
  } else {
   if ((__ZNK7WebCore13ContainerNode14childNodeCountEv(i11) | 0) == 0) {
    i12 = 5;
   }
  }
  L8 : do {
   if ((i12 | 0) == 5) {
    i12 = 0;
    if (!(__ZNK7WebCore12EditingStyle35styleIsPresentInComputedStyleOfNodeEPNS_4NodeE(i2, i11) | 0)) {
     i8 = 1;
     i12 = 23;
     break L4;
    }
    if ((HEAP32[i9 >> 2] | 0) == 0) {
     break;
    }
    HEAP32[i1 >> 2] = i11;
    i13 = i11 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i7, i6, 1);
    i13 = HEAP32[i1 >> 2] | 0;
    do {
     if ((i13 | 0) != 0) {
      i14 = i13 + 8 | 0;
      i15 = i14 | 0;
      i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
      HEAP32[i15 >> 2] = i16;
      if ((i16 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
     }
    } while (0);
    i13 = (__ZN7WebCore20enclosingNodeWithTagERKNS_8PositionERKNS_13QualifiedNameE(i7, (HEAP32[i9 >> 2] | 0) + 44 | 0) | 0) == 0;
    i14 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i14 | 0) != 0) {
      i16 = i14 + 8 | 0;
      i15 = i16 | 0;
      i17 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
      HEAP32[i15 >> 2] = i17;
      if ((i17 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
      if (i13) {
       i8 = 1;
       i12 = 24;
       break L4;
      } else {
       break L8;
      }
     }
    } while (0);
    if (i13) {
     i8 = 1;
     i12 = 25;
     break L4;
    }
   }
  } while (0);
  if ((HEAP32[i3 >> 2] & 2 | 0) == 0) {
   i12 = 19;
  } else {
   i14 = HEAP32[i11 + 36 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i12 = 19;
   } else {
    i18 = i14;
   }
  }
  do {
   if ((i12 | 0) == 19) {
    i12 = 0;
    i14 = HEAP32[i11 + 28 >> 2] | 0;
    if ((i14 | 0) != 0) {
     i18 = i14;
     break;
    }
    i18 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i11) | 0;
   }
  } while (0);
  if ((i18 | 0) == 0 | (i18 | 0) == (i4 | 0)) {
   i8 = 0;
   i12 = 26;
   break;
  } else {
   i11 = i18;
  }
 }
 if ((i12 | 0) == 23) {
  STACKTOP = i5;
  return i8 | 0;
 } else if ((i12 | 0) == 24) {
  STACKTOP = i5;
  return i8 | 0;
 } else if ((i12 | 0) == 25) {
  STACKTOP = i5;
  return i8 | 0;
 } else if ((i12 | 0) == 26) {
  STACKTOP = i5;
  return i8 | 0;
 }
 return 0;
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
function __ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_fS9_NS_10HashTraitsIS3_EENSB_IfEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 i8 = __ZN3WTF10fastMallocEj(i2 << 3) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   HEAP32[i8 + (i9 << 3) >> 2] = 0;
   HEAPF32[i8 + (i9 << 3) + 4 >> 2] = Infinity;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  i10 = 0;
  i11 = i1 + 16 | 0;
  HEAP32[i11 >> 2] = 0;
  i12 = i7;
  __ZN3WTF8fastFreeEPv(i12);
  return i10 | 0;
 } else {
  i13 = 0;
  i14 = 0;
 }
 while (1) {
  i8 = i7 + (i13 << 3) | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  i9 = i2;
  if ((i9 | 0) == (-1 | 0) | (i9 | 0) == 0) {
   i15 = i14;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i9 + ~(i9 << 15) | 0;
   i9 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i9 >>> 6 ^ i9;
   i9 = i18 + ~(i18 << 11) | 0;
   i18 = i9 >>> 16 ^ i9;
   i9 = i17 & i18;
   i19 = i16 + (i9 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L11 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i9;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i2 | 0)) {
       i30 = i28;
       break L11;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i8;
   i17 = i30;
   i2 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i2;
   i15 = (i8 | 0) == (i3 | 0) ? i30 : i14;
  }
  i2 = i13 + 1 | 0;
  if ((i2 | 0) == (i5 | 0)) {
   i10 = i15;
   break;
  } else {
   i13 = i2;
   i14 = i15;
  }
 }
 i11 = i1 + 16 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i7;
 __ZN3WTF8fastFreeEPv(i12);
 return i10 | 0;
}
function __ZN3WTF6VectorIN7WebCore21InlineRunToApplyStyleELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 * 52 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore21InlineRunToApplyStyleELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 52 & -1) * 52 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore21InlineRunToApplyStyleELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = i11 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 * 52 & -1) >> 2] = i5;
 i5 = i11 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i12 + (i6 * 52 & -1) + 4 >> 2] = i2;
 i2 = i11 + 8 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 * 52 & -1) + 8 >> 2] = i5;
 i5 = i11 + 12 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i12 + (i6 * 52 & -1) + 12 >> 2] = i2;
 HEAP32[i12 + (i6 * 52 & -1) + 16 >> 2] = HEAP32[i11 + 16 >> 2];
 i2 = i11 + 20 | 0;
 i5 = i12 + (i6 * 52 & -1) + 20 | 0;
 i8 = i5;
 i1 = HEAP32[i8 >> 2] & -8 | HEAP32[i2 >> 2] & 7;
 HEAP32[i8 >> 2] = i1;
 HEAP8[i5] = i1 & 255 & -9 | HEAP8[i2] & 8;
 i2 = i11 + 24 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 * 52 & -1) + 24 >> 2] = i1;
 i1 = i11 + 28 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i12 + (i6 * 52 & -1) + 28 >> 2] = i2;
 HEAP8[i12 + (i6 * 52 & -1) + 32 | 0] = HEAP8[i11 + 32 | 0] & 1;
 HEAP8[i12 + (i6 * 52 & -1) + 33 | 0] = HEAP8[i11 + 33 | 0] & 1;
 HEAP8[i12 + (i6 * 52 & -1) + 34 | 0] = HEAP8[i11 + 34 | 0] & 1;
 HEAP8[i12 + (i6 * 52 & -1) + 35 | 0] = HEAP8[i11 + 35 | 0] & 1;
 HEAP8[i12 + (i6 * 52 & -1) + 36 | 0] = HEAP8[i11 + 36 | 0] & 1;
 HEAP8[i12 + (i6 * 52 & -1) + 37 | 0] = HEAP8[i11 + 37 | 0] & 1;
 i2 = i11 + 40 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 * 52 & -1) + 40 >> 2] = i1;
 i1 = i11 + 44 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i12 + (i6 * 52 & -1) + 44 >> 2] = i2;
 i2 = i11 + 48 | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 * 52 & -1) + 48 >> 2] = i11;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore17ApplyStyleCommand28removeInlineStyleFromElementEPNS_12EditingStyleEN3WTF10PassRefPtrINS_11HTMLElementEEENS0_22InlineStyleRemovalModeES2_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i9 = 0;
  STACKTOP = i6;
  return i9 | 0;
 }
 if (!(__ZN7WebCore4Node17isContentEditableENS0_22UserSelectAllTreatmentE(i3 | 0, 1) | 0)) {
  i9 = 0;
  STACKTOP = i6;
  return i9 | 0;
 }
 i3 = HEAP32[i8 >> 2] | 0;
 i10 = i3 | 0;
 i11 = HEAP32[i1 + 192 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = 7;
  } else {
   i13 = HEAP32[i3 + 44 >> 2] | 0;
   i14 = HEAP32[i11 + 44 >> 2] | 0;
   if ((i13 | 0) == (i14 | 0)) {
    break;
   }
   if ((HEAP32[i13 + 12 >> 2] | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
    i12 = 7;
    break;
   }
   if ((HEAP32[i13 + 16 >> 2] | 0) != (HEAP32[i14 + 16 >> 2] | 0)) {
    i12 = 7;
   }
  }
 } while (0);
 do {
  if ((i12 | 0) == 7) {
   i11 = HEAP32[i1 + 200 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i15 = i3;
   } else {
    if (FUNCTION_TABLE_ii[i11 & 31](i10) | 0) {
     break;
    }
    i15 = HEAP32[i8 >> 2] | 0;
   }
   i11 = __ZN7WebCore17ApplyStyleCommand29removeImplicitlyStyledElementEPNS_12EditingStyleEPNS_11HTMLElementENS0_22InlineStyleRemovalModeES2_(i1, i2, i15, i4, i5) | 0;
   i14 = HEAP32[i8 >> 2] | 0;
   if ((HEAP32[i14 + 12 >> 2] & 256 | 0) == 0) {
    i9 = i11;
    STACKTOP = i6;
    return i9 | 0;
   }
   i9 = __ZN7WebCore17ApplyStyleCommand14removeCSSStyleEPNS_12EditingStyleEPNS_11HTMLElementENS0_22InlineStyleRemovalModeES2_(i1, i2, i14, i4, i5) | 0 | i11;
   STACKTOP = i6;
   return i9 | 0;
  }
 } while (0);
 if ((i4 | 0) == 2) {
  i9 = 1;
  STACKTOP = i6;
  return i9 | 0;
 }
 if ((i5 | 0) != 0) {
  __ZN7WebCore12EditingStyle25mergeInlineStyleOfElementEPNS_13StyledElementENS0_23CSSPropertyOverrideModeENS0_19PropertiesToIncludeE(i5, HEAP32[i8 >> 2] | 0, 0, 0);
 }
 i5 = i7 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i5 >> 2] = i4;
 __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i7, 1);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i9 = 1;
  STACKTOP = i6;
  return i9 | 0;
 }
 i5 = i7 + 8 | 0;
 i7 = i5 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  i9 = 1;
  STACKTOP = i6;
  return i9 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i9 = 1;
  STACKTOP = i6;
  return i9 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i9 = 1;
 STACKTOP = i6;
 return i9 | 0;
}
function __ZN7WebCore17ApplyStyleCommand41highestAncestorWithConflictingInlineStyleEPNS_12EditingStyleEPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if ((i3 | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 132 >> 2] & 31](i3) | 0) {
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i7, i3);
  } else {
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = i3;
   i10 = i3 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i7, i6, 1);
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i9 = i10 + 8 | 0;
   i10 = i9 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i6 = __ZN7WebCore30unsplittableElementForPositionERKNS_8PositionE(i7) | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 + 8 | 0;
   i11 = i7 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i9 = i5 | 0;
 i7 = 0;
 i10 = i3;
 while (1) {
  if ((HEAP32[i10 + 12 >> 2] & 16 | 0) == 0) {
   i12 = i7;
  } else {
   i3 = i10;
   HEAP32[i9 >> 2] = i3;
   if ((i10 | 0) != 0) {
    i11 = i10 + 8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   i11 = __ZN7WebCore17ApplyStyleCommand28removeInlineStyleFromElementEPNS_12EditingStyleEN3WTF10PassRefPtrINS_11HTMLElementEEENS0_22InlineStyleRemovalModeES2_(i1, i2, i5, 2, 0) | 0;
   i13 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 + 8 | 0;
     i15 = i14 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i12 = i11 ? i3 : i7;
  }
  if ((i10 | 0) == (i6 | 0)) {
   i8 = i12;
   i17 = 25;
   break;
  }
  i13 = HEAP32[i10 + 16 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i8 = i12;
   i17 = 26;
   break;
  } else {
   i7 = i12;
   i10 = i13 | 0;
  }
 }
 if ((i17 | 0) == 25) {
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i17 | 0) == 26) {
  STACKTOP = i4;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore17ApplyStyleCommandC2EN3WTF10PassRefPtrINS_7ElementEEEbNS_10EditActionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i2 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore12EditingStyleC1Ev(i2);
 HEAP32[i1 + 152 >> 2] = i2;
 HEAP32[i1 + 156 >> 2] = i4;
 HEAP32[i1 + 160 >> 2] = 0;
 i4 = i6 | 0;
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i9 = i6 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i2 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i6 + 8 | 0;
  i2 = i9;
  i10 = HEAP32[i2 >> 2] & -8;
  i11 = i9;
  i12 = i2;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
 i2 = HEAP32[i1 + 104 >> 2] | 0;
 i9 = i10 | i2 & 7;
 HEAP32[i12 >> 2] = i9;
 HEAP8[i11] = i9 & 255 & -9 | i2 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i1 + 164 | 0, i6, 1);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 8 | 0;
   i2 = i4 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i6 = i7 | 0;
 i4 = HEAP32[i1 + 108 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i9 = i4 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i1 + 112 >> 2];
 i9 = HEAP32[i1 + 116 >> 2] | 0;
 i4 = i7 + 8 | 0;
 i2 = i4;
 i11 = HEAP32[i2 >> 2] & -8 | i9 & 7;
 HEAP32[i2 >> 2] = i11;
 HEAP8[i4] = i11 & 255 & -9 | i9 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i1 + 176 | 0, i7, 1);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 8 | 0;
   i9 = i6 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 HEAP8[i1 + 188 | 0] = 1;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 192 >> 2] = i7;
 HEAP8[i1 + 196 | 0] = i3 & 1;
 HEAP32[i1 + 200 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17ApplyStyleCommandC1EN3WTF10PassRefPtrINS_7ElementEEEbNS_10EditActionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i2 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore12EditingStyleC1Ev(i2);
 HEAP32[i1 + 152 >> 2] = i2;
 HEAP32[i1 + 156 >> 2] = i4;
 HEAP32[i1 + 160 >> 2] = 0;
 i4 = i6 | 0;
 i2 = HEAP32[i1 + 96 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i9 = i6 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i2 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i6 + 8 | 0;
  i2 = i9;
  i10 = HEAP32[i2 >> 2] & -8;
  i11 = i9;
  i12 = i2;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
 i2 = HEAP32[i1 + 104 >> 2] | 0;
 i9 = i10 | i2 & 7;
 HEAP32[i12 >> 2] = i9;
 HEAP8[i11] = i9 & 255 & -9 | i2 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i1 + 164 | 0, i6, 1);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 8 | 0;
   i2 = i4 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i6 = i7 | 0;
 i4 = HEAP32[i1 + 108 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i9 = i4 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i1 + 112 >> 2];
 i9 = HEAP32[i1 + 116 >> 2] | 0;
 i4 = i7 + 8 | 0;
 i2 = i4;
 i11 = HEAP32[i2 >> 2] & -8 | i9 & 7;
 HEAP32[i2 >> 2] = i11;
 HEAP8[i4] = i11 & 255 & -9 | i9 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i1 + 176 | 0, i7, 1);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 8 | 0;
   i9 = i6 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 HEAP8[i1 + 188 | 0] = 1;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 + 192 >> 2] = i7;
 HEAP8[i1 + 196 | 0] = i3 & 1;
 HEAP32[i1 + 200 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN3WTF6VectorIN7WebCore21InlineRunToApplyStyleELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 * 52 & -1) | 0;
 if (i2 >>> 0 > 82595524 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 52 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 52 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   i8 = i6 + 4 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = i2;
   i2 = i6 + 8 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 8 >> 2] = i8;
   i8 = i6 + 12 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 12 >> 2] = i2;
   HEAP32[i7 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   i2 = i6 + 20 | 0;
   i8 = i7 + 20 | 0;
   i9 = i8;
   i10 = HEAP32[i9 >> 2] & -8 | HEAP32[i2 >> 2] & 7;
   HEAP32[i9 >> 2] = i10;
   HEAP8[i8] = i10 & 255 & -9 | HEAP8[i2] & 8;
   i2 = i6 + 24 | 0;
   i10 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 24 >> 2] = i10;
   i10 = i6 + 28 | 0;
   i2 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i7 + 28 >> 2] = i2;
   HEAP8[i7 + 32 | 0] = HEAP8[i6 + 32 | 0] & 1;
   HEAP8[i7 + 33 | 0] = HEAP8[i6 + 33 | 0] & 1;
   HEAP8[i7 + 34 | 0] = HEAP8[i6 + 34 | 0] & 1;
   HEAP8[i7 + 35 | 0] = HEAP8[i6 + 35 | 0] & 1;
   HEAP8[i7 + 36 | 0] = HEAP8[i6 + 36 | 0] & 1;
   HEAP8[i7 + 37 | 0] = HEAP8[i6 + 37 | 0] & 1;
   i2 = i6 + 40 | 0;
   i10 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 40 >> 2] = i10;
   i10 = i6 + 44 | 0;
   i2 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i7 + 44 >> 2] = i2;
   i2 = i6 + 48 | 0;
   i10 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 48 >> 2] = i10;
   __ZN7WebCore21InlineRunToApplyStyleD2Ev(i6);
   i10 = i6 + 52 | 0;
   if ((i10 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i10;
    i7 = i7 + 52 | 0;
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
function __ZN7WebCore17ApplyStyleCommandC2ERNS_8DocumentEPKNS_12EditingStyleEPFbPKNS_7ElementEENS_10EditActionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 40;
 __ZNK7WebCore12EditingStyle4copyEv(i7, i3);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 152 >> 2] = i7;
 HEAP32[i1 + 156 >> 2] = i5;
 HEAP32[i1 + 160 >> 2] = 0;
 i5 = i8 | 0;
 i7 = HEAP32[i1 + 96 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i3 = i7 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
 i3 = HEAP32[i1 + 104 >> 2] | 0;
 i7 = i8 + 8 | 0;
 i2 = i7;
 i10 = HEAP32[i2 >> 2] & -8 | i3 & 7;
 HEAP32[i2 >> 2] = i10;
 HEAP8[i7] = i10 & 255 & -9 | i3 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i1 + 164 | 0, i8, 1);
 i8 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i5 = i8 + 8 | 0;
   i3 = i5 | 0;
   i10 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i8 = i9 | 0;
 i5 = HEAP32[i1 + 108 >> 2] | 0;
 HEAP32[i8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i10 = i5 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 HEAP32[i9 + 4 >> 2] = HEAP32[i1 + 112 >> 2];
 i10 = HEAP32[i1 + 116 >> 2] | 0;
 i5 = i9 + 8 | 0;
 i3 = i5;
 i7 = HEAP32[i3 >> 2] & -8 | i10 & 7;
 HEAP32[i3 >> 2] = i7;
 HEAP8[i5] = i7 & 255 & -9 | i10 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i1 + 176 | 0, i9, 1);
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 + 8 | 0;
   i10 = i8 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 HEAP8[i1 + 188 | 0] = 1;
 HEAP32[i1 + 192 >> 2] = 0;
 HEAP8[i1 + 196 | 0] = 1;
 HEAP32[i1 + 200 >> 2] = i4;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleEPFbPKNS_7ElementEENS_10EditActionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 40;
 __ZNK7WebCore12EditingStyle4copyEv(i7, i3);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 152 >> 2] = i7;
 HEAP32[i1 + 156 >> 2] = i5;
 HEAP32[i1 + 160 >> 2] = 0;
 i5 = i8 | 0;
 i7 = HEAP32[i1 + 96 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i3 = i7 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
 i3 = HEAP32[i1 + 104 >> 2] | 0;
 i7 = i8 + 8 | 0;
 i2 = i7;
 i10 = HEAP32[i2 >> 2] & -8 | i3 & 7;
 HEAP32[i2 >> 2] = i10;
 HEAP8[i7] = i10 & 255 & -9 | i3 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i1 + 164 | 0, i8, 1);
 i8 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i5 = i8 + 8 | 0;
   i3 = i5 | 0;
   i10 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i8 = i9 | 0;
 i5 = HEAP32[i1 + 108 >> 2] | 0;
 HEAP32[i8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i10 = i5 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 HEAP32[i9 + 4 >> 2] = HEAP32[i1 + 112 >> 2];
 i10 = HEAP32[i1 + 116 >> 2] | 0;
 i5 = i9 + 8 | 0;
 i3 = i5;
 i7 = HEAP32[i3 >> 2] & -8 | i10 & 7;
 HEAP32[i3 >> 2] = i7;
 HEAP8[i5] = i7 & 255 & -9 | i10 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i1 + 176 | 0, i9, 1);
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 + 8 | 0;
   i10 = i8 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 HEAP8[i1 + 188 | 0] = 1;
 HEAP32[i1 + 192 >> 2] = 0;
 HEAP8[i1 + 196 | 0] = 1;
 HEAP32[i1 + 200 >> 2] = i4;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17ApplyStyleCommandC2ERNS_8DocumentEPKNS_12EditingStyleENS_10EditActionENS0_14EPropertyLevelE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 40;
 __ZNK7WebCore12EditingStyle4copyEv(i7, i3);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 152 >> 2] = i7;
 HEAP32[i1 + 156 >> 2] = i4;
 HEAP32[i1 + 160 >> 2] = i5;
 i5 = i8 | 0;
 i4 = HEAP32[i1 + 96 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i7 = i4 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
 i7 = HEAP32[i1 + 104 >> 2] | 0;
 i4 = i8 + 8 | 0;
 i3 = i4;
 i2 = HEAP32[i3 >> 2] & -8 | i7 & 7;
 HEAP32[i3 >> 2] = i2;
 HEAP8[i4] = i2 & 255 & -9 | i7 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i1 + 164 | 0, i8, 1);
 i8 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i5 = i8 + 8 | 0;
   i7 = i5 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i8 = i9 | 0;
 i5 = HEAP32[i1 + 108 >> 2] | 0;
 HEAP32[i8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 HEAP32[i9 + 4 >> 2] = HEAP32[i1 + 112 >> 2];
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 i5 = i9 + 8 | 0;
 i7 = i5;
 i4 = HEAP32[i7 >> 2] & -8 | i2 & 7;
 HEAP32[i7 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | i2 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i1 + 176 | 0, i9, 1);
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 + 8 | 0;
   i2 = i8 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 HEAP8[i1 + 188 | 0] = 1;
 HEAP32[i1 + 192 >> 2] = 0;
 HEAP8[i1 + 196 | 0] = 0;
 HEAP32[i1 + 200 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleENS_10EditActionENS0_14EPropertyLevelE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 40;
 __ZNK7WebCore12EditingStyle4copyEv(i7, i3);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 152 >> 2] = i7;
 HEAP32[i1 + 156 >> 2] = i4;
 HEAP32[i1 + 160 >> 2] = i5;
 i5 = i8 | 0;
 i4 = HEAP32[i1 + 96 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i7 = i4 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 100 >> 2];
 i7 = HEAP32[i1 + 104 >> 2] | 0;
 i4 = i8 + 8 | 0;
 i3 = i4;
 i2 = HEAP32[i3 >> 2] & -8 | i7 & 7;
 HEAP32[i3 >> 2] = i2;
 HEAP8[i4] = i2 & 255 & -9 | i7 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i1 + 164 | 0, i8, 1);
 i8 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i5 = i8 + 8 | 0;
   i7 = i5 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i8 = i9 | 0;
 i5 = HEAP32[i1 + 108 >> 2] | 0;
 HEAP32[i8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 HEAP32[i9 + 4 >> 2] = HEAP32[i1 + 112 >> 2];
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 i5 = i9 + 8 | 0;
 i7 = i5;
 i4 = HEAP32[i7 >> 2] & -8 | i2 & 7;
 HEAP32[i7 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | i2 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i1 + 176 | 0, i9, 1);
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 + 8 | 0;
   i2 = i8 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 HEAP8[i1 + 188 | 0] = 1;
 HEAP32[i1 + 192 >> 2] = 0;
 HEAP8[i1 + 196 | 0] = 0;
 HEAP32[i1 + 200 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17ApplyStyleCommand16computedFontSizeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i5 = i1 + 24 | 0;
 if ((i2 | 0) == 0) {
  d6 = +0;
  STACKTOP = i1;
  return +d6;
 }
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 __ZN7WebCore22ComputedStyleExtractorC1EN3WTF10PassRefPtrINS_4NodeEEEbNS_8PseudoIdE(i4, i5, 0, 0);
 __ZNK7WebCore22ComputedStyleExtractor13propertyValueENS_13CSSPropertyIDENS_13EUpdateLayoutE(i3, i4, 6, 1);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i8 = i4 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 8 | 0;
   i4 = i7 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 d9 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i3, 5);
 do {
  if (d9 < 3.4028234663852886e+38) {
   if (d9 <= -3.4028234663852886e+38) {
    d10 = -3.4028234663852886e+38;
    break;
   }
   d10 = d9;
  } else {
   d10 = 3.4028234663852886e+38;
  }
 } while (0);
 if ((i3 | 0) == 0) {
  d6 = d10;
  STACKTOP = i1;
  return +d6;
 }
 i5 = i3 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i3);
  d6 = d10;
  STACKTOP = i1;
  return +d6;
 } else {
  HEAP32[i5 >> 2] = i7;
  d6 = d10;
  STACKTOP = i1;
  return +d6;
 }
 return +0;
}
function __ZN7WebCore11StyleChangeaSEOS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 4 | 0] = HEAP8[i2 + 4 | 0] & 1;
 HEAP8[i1 + 5 | 0] = HEAP8[i2 + 5 | 0] & 1;
 HEAP8[i1 + 6 | 0] = HEAP8[i2 + 6 | 0] & 1;
 HEAP8[i1 + 7 | 0] = HEAP8[i2 + 7 | 0] & 1;
 HEAP8[i1 + 8 | 0] = HEAP8[i2 + 8 | 0] & 1;
 HEAP8[i1 + 9 | 0] = HEAP8[i2 + 9 | 0] & 1;
 i5 = i2 + 12 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 12 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = i2 + 16 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 16 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i2 + 20 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = i4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return i1 | 0;
 } else {
  HEAP32[i2 >> 2] = i3;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore17ApplyStyleCommand42replaceWithSpanOrRemoveIfWithoutAttributesERPNS_11HTMLElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE(HEAP32[i2 >> 2] | 0, 1) | 0;
 i7 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if (!i6) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i1;
  if ((i1 | 0) != 0) {
   i8 = i1 + 8 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  }
  i8 = __ZN7WebCore20CompositeEditCommand53replaceElementWithSpanPreservingChildrenAndAttributesEN3WTF10PassRefPtrINS_11HTMLElementEEE(i7, i5) | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i6 = i5 + 8 | 0;
    i9 = i6 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i10;
    if ((i10 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   }
  } while (0);
  HEAP32[i2 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i2 = i1 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i7, i4, 1);
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i4 + 8 | 0;
 i4 = i8 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i7;
 if ((i7 | 0) >= 1) {
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
function __ZN7WebCore21InlineRunToApplyStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore11StyleChangeD2Ev(i1 + 28 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
function __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 12 | 0;
 if ((HEAP32[i6 >> 2] & 1 | 0) == 0) {
  i7 = i5 | 0;
  HEAP32[i7 >> 2] = i2;
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 4);
  i5 = HEAP32[i7 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i7 = i5 + 8 | 0;
  i5 = i7 | 0;
  i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i2) | 0) {
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 31](i2) | 0;
  } else {
   if ((HEAP32[i6 >> 2] & 2 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = __ZNK7WebCore13ContainerNode14childNodeCountEv(i2) | 0;
  }
 } while (0);
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, i9, 0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i9 + 8 | 0;
 i9 = i7 | 0;
 i4 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 | 0;
 if (!(__ZNK7WebCore7Element13hasAttributesEv(i3) | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i3, __ZN7WebCore9HTMLNames9classAttrE) | 0;
 if (HEAP8[H_BASE + 112 | 0] | 0) {
  i6 = HEAP32[H_BASE + 120 >> 2] | 0;
 } else {
  i7 = __Znwj(4) | 0;
  __ZN3WTF6StringC1EPKc(i7, H_BASE + 8 | 0);
  HEAP32[H_BASE + 120 >> 2] = i7;
  HEAP8[H_BASE + 112 | 0] = 1;
  i6 = i7;
 }
 i7 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i5 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
 i6 = i7 & 1;
 L8 : do {
  if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i3, __ZN7WebCore9HTMLNames9styleAttrE) | 0) {
   do {
    if ((i2 | 0) != 0) {
     i5 = HEAP32[i1 + 48 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i8 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     i5 = HEAP32[i8 + 4 >> 2] | 0;
     if ((i5 & 4 | 0) == 0) {
      i9 = i5 >>> 3;
     } else {
      i9 = HEAP32[i8 + 16 >> 2] | 0;
     }
     if ((i9 | 0) != 0) {
      i10 = i6;
      break L8;
     }
    }
   } while (0);
   i10 = i7 ? 2 : 1;
  } else {
   i10 = i6;
  }
 } while (0);
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i1 & 1 | 0) == 0) {
  i11 = i1 >>> 1 & 134217727;
 } else {
  i11 = HEAP32[i6 + 32 >> 2] | 0;
 }
 i4 = (i10 | 0) == (i11 | 0);
 return i4 | 0;
}
function __ZN7WebCore17ApplyStyleCommandD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = HEAP32[i1 + 192 >> 2] | 0;
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
 i2 = HEAP32[i1 + 176 >> 2] | 0;
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
 i2 = HEAP32[i1 + 164 >> 2] | 0;
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
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore20CompositeEditCommandD2Ev(i6);
  return;
 }
 i3 = i2 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore12EditingStyleD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i6 = i1 | 0;
  __ZN7WebCore20CompositeEditCommandD2Ev(i6);
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  i6 = i1 | 0;
  __ZN7WebCore20CompositeEditCommandD2Ev(i6);
  return;
 }
}
function __ZN7WebCore17ApplyStyleCommand7doApplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i1 + 152 | 0;
  __ZN7WebCore12EditingStyle31extractAndRemoveBlockPropertiesEv(i3, HEAP32[i5 >> 2] | 0);
  i6 = i3 | 0;
  i3 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  if (!(__ZNK7WebCore12EditingStyle7isEmptyEv(i3) | 0)) {
   __ZN7WebCore17ApplyStyleCommand15applyBlockStyleEPNS_12EditingStyleE(i1, i3);
  }
  do {
   if (__ZNK7WebCore12EditingStyle7isEmptyEv(HEAP32[i5 >> 2] | 0) | 0) {
    if ((HEAP32[i1 + 192 >> 2] | 0) != 0) {
     i7 = 7;
     break;
    }
    if ((HEAP32[i1 + 200 >> 2] | 0) != 0) {
     i7 = 7;
    }
   } else {
    i7 = 7;
   }
  } while (0);
  if ((i7 | 0) == 7) {
   __ZN7WebCore17ApplyStyleCommand28applyRelativeFontStyleChangeEPNS_12EditingStyleE(i1, HEAP32[i5 >> 2] | 0);
   __ZN7WebCore17ApplyStyleCommand16applyInlineStyleEPNS_12EditingStyleE(i1, HEAP32[i5 >> 2] | 0);
  }
  if ((i3 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i5 = i3 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore12EditingStyleD1Ev(i3);
   __ZN3WTF8fastFreeEPv(i3);
   STACKTOP = i2;
   return;
  } else {
   HEAP32[i5 >> 2] = i7;
   STACKTOP = i2;
   return;
  }
 } else if ((i4 | 0) == 1) {
  __ZN7WebCore17ApplyStyleCommand15applyBlockStyleEPNS_12EditingStyleE(i1, HEAP32[i1 + 152 >> 2] | 0);
  STACKTOP = i2;
  return;
 } else {
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore17ApplyStyleCommandC2ERNS_8DocumentEPKNS_12EditingStyleERKNS_8PositionES8_NS_10EditActionENS0_14EPropertyLevelE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 40;
 __ZNK7WebCore12EditingStyle4copyEv(i9, i3);
 i3 = i9 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 152 >> 2] = i9;
 HEAP32[i1 + 156 >> 2] = i6;
 HEAP32[i1 + 160 >> 2] = i7;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 164 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i6 = i7 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 168 >> 2] = HEAP32[i4 + 4 >> 2];
 i6 = i4 + 8 | 0;
 i4 = i1 + 172 | 0;
 i7 = i4;
 i9 = HEAP32[i7 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
 HEAP32[i7 >> 2] = i9;
 HEAP8[i4] = i9 & 255 & -9 | HEAP8[i6] & 8;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 176 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 180 >> 2] = HEAP32[i5 + 4 >> 2];
 i9 = i5 + 8 | 0;
 i5 = i1 + 184 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i9 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i9] & 8;
 HEAP8[i1 + 188 | 0] = 0;
 HEAP32[i1 + 192 >> 2] = 0;
 HEAP8[i1 + 196 | 0] = 0;
 HEAP32[i1 + 200 >> 2] = 0;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleERKNS_8PositionES8_NS_10EditActionENS0_14EPropertyLevelE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8 | 0;
 __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 40;
 __ZNK7WebCore12EditingStyle4copyEv(i9, i3);
 i3 = i9 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 152 >> 2] = i9;
 HEAP32[i1 + 156 >> 2] = i6;
 HEAP32[i1 + 160 >> 2] = i7;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 164 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i6 = i7 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 168 >> 2] = HEAP32[i4 + 4 >> 2];
 i6 = i4 + 8 | 0;
 i4 = i1 + 172 | 0;
 i7 = i4;
 i9 = HEAP32[i7 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
 HEAP32[i7 >> 2] = i9;
 HEAP8[i4] = i9 & 255 & -9 | HEAP8[i6] & 8;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 176 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 180 >> 2] = HEAP32[i5 + 4 >> 2];
 i9 = i5 + 8 | 0;
 i5 = i1 + 184 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i9 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i9] & 8;
 HEAP8[i1 + 188 | 0] = 0;
 HEAP32[i1 + 192 >> 2] = 0;
 HEAP8[i1 + 196 | 0] = 0;
 HEAP32[i1 + 200 >> 2] = 0;
 STACKTOP = i8;
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
function __ZN7WebCore17ApplyStyleCommand22shouldSplitTextElementEPNS_7ElementEPNS_12EditingStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((i2 | 0) == 0) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 16 | 0) == 0) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i2;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = __ZN7WebCore17ApplyStyleCommand28removeInlineStyleFromElementEPNS_12EditingStyleEN3WTF10PassRefPtrINS_11HTMLElementEEENS0_22InlineStyleRemovalModeES2_(i1, i3, i5, 2, 0) | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i8;
  STACKTOP = i4;
  return i6 | 0;
 }
 i7 = i5 + 8 | 0;
 i5 = i7 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i6 = i8;
  STACKTOP = i4;
  return i6 | 0;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  i6 = i8;
  STACKTOP = i4;
  return i6 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 i6 = i8;
 STACKTOP = i4;
 return i6 | 0;
}
function __ZN7WebCore11StyleChangeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore17ApplyStyleCommand13startPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 if ((HEAP8[i2 + 188 | 0] & 1) == 0) {
  i4 = HEAP32[i2 + 164 >> 2] | 0;
  HEAP32[i3 >> 2] = i4;
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 168 >> 2];
  i5 = HEAP32[i2 + 172 >> 2] | 0;
  i4 = i1 + 8 | 0;
  i6 = i4;
  i7 = HEAP32[i6 >> 2] & -8 | i5 & 7;
  HEAP32[i6 >> 2] = i7;
  HEAP8[i4] = i7 & 255 & -9 | i5 & 8;
  return;
 } else {
  i5 = HEAP32[i2 + 96 >> 2] | 0;
  HEAP32[i3 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 100 >> 2];
  i3 = HEAP32[i2 + 104 >> 2] | 0;
  i2 = i1 + 8 | 0;
  i1 = i2;
  i5 = HEAP32[i1 >> 2] & -8 | i3 & 7;
  HEAP32[i1 >> 2] = i5;
  HEAP8[i2] = i5 & 255 & -9 | i3 & 8;
  return;
 }
}
function __ZN7WebCore17ApplyStyleCommand11endPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 if ((HEAP8[i2 + 188 | 0] & 1) == 0) {
  i4 = HEAP32[i2 + 176 >> 2] | 0;
  HEAP32[i3 >> 2] = i4;
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 180 >> 2];
  i5 = HEAP32[i2 + 184 >> 2] | 0;
  i4 = i1 + 8 | 0;
  i6 = i4;
  i7 = HEAP32[i6 >> 2] & -8 | i5 & 7;
  HEAP32[i6 >> 2] = i7;
  HEAP8[i4] = i7 & 255 & -9 | i5 & 8;
  return;
 } else {
  i5 = HEAP32[i2 + 108 >> 2] | 0;
  HEAP32[i3 >> 2] = i5;
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 112 >> 2];
  i3 = HEAP32[i2 + 116 >> 2] | 0;
  i2 = i1 + 8 | 0;
  i1 = i2;
  i5 = HEAP32[i1 >> 2] & -8 | i3 & 7;
  HEAP32[i1 >> 2] = i5;
  HEAP8[i2] = i5 & 255 & -9 | i3 & 8;
  return;
 }
}
function __ZN7WebCore22isLegacyAppleStyleSpanEPKNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8spanAttrE >> 2] | 0) + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = __ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i1, __ZN7WebCore9HTMLNames9classAttrE) | 0;
 if (HEAP8[H_BASE + 112 | 0] | 0) {
  i4 = HEAP32[H_BASE + 120 >> 2] | 0;
 } else {
  i1 = __Znwj(4) | 0;
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 8 | 0);
  HEAP32[H_BASE + 120 >> 2] = i1;
  HEAP8[H_BASE + 112 | 0] = 1;
  i4 = i1;
 }
 i2 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i3 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
 return i2 | 0;
}
function __ZNK7WebCore17ApplyStyleCommand29isStyledInlineElementToRemoveEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 192 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 44 >> 2] | 0;
   i5 = HEAP32[i3 + 44 >> 2] | 0;
   if ((i4 | 0) == (i5 | 0)) {
    i6 = 1;
    return i6 | 0;
   }
   if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i6 = 1;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 200 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i6 = FUNCTION_TABLE_ii[i3 & 31](i2) | 0;
 return i6 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viii + 2;
}
function __ZN7WebCore14isEmptyFontTagEPKNS_7ElementENS_27ShouldStyleAttributeBeEmptyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[__ZN7WebCore9HTMLNames7fontTagE >> 2] | 0;
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
 i3 = __ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE(i1, i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore39isStyleSpanOrSpanWithOnlyStyleAttributeEPKNS_7ElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
 do {
  if ((i3 | 0) != (i4 | 0)) {
   if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
    i2 = 0;
    return i2 | 0;
   }
   if ((HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
    break;
   } else {
    i2 = 0;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = __ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE(i1, 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore17ApplyStyleCommand30isValidCaretPositionInTextNodeERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i1 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
 if ((HEAP32[i2 + 8 >> 2] & 7 | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] & 1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) <= (__ZN7WebCore14caretMinOffsetEPKNS_4NodeE(i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (i4 | 0) < (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i1) | 0);
 return i3 | 0;
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
function viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
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
function vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore22createStyleSpanElementERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17createHTMLElementERNS_8DocumentERKNS_13QualifiedNameE(i1, i2, __ZN7WebCore9HTMLNames7spanTagE);
 return;
}
function ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv(i1 | 0) | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function ii___ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20CompositeEditCommand15isTypingCommandEv(i1 | 0) | 0;
}
function b1(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(1);
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
function __ZN7WebCore17ApplyStyleCommandD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17ApplyStyleCommandD2Ev(i1);
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZN7WebCore17ApplyStyleCommandD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17ApplyStyleCommandD2Ev(i1);
 return;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZNK7WebCore17ApplyStyleCommand13editingActionEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 156 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore20CompositeEditCommand18isDictationCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZNK7WebCore11EditCommand24isEditCommandCompositionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore11EditCommand19isSimpleEditCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore17ApplyStyleCommandC2ERNS_8DocumentEPKNS_12EditingStyleENS_10EditActionENS0_14EPropertyLevelE,b0,__ZN7WebCore17ApplyStyleCommandC2ERNS_8DocumentEPKNS_12EditingStyleEPFbPKNS_7ElementEENS_10EditActionE,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiii = [b1,b1,__ZN7WebCore17ApplyStyleCommandC2ERNS_8DocumentEPKNS_12EditingStyleERKNS_8PositionES8_NS_10EditActionENS0_14EPropertyLevelE,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore17ApplyStyleCommandD1Ev,b2,__ZN7WebCore17ApplyStyleCommand7doApplyEv,b2,__ZN7WebCore17ApplyStyleCommandD0Ev,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb__wrapper,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b4,ii___ZNK7WebCore20CompositeEditCommand15isTypingCommandEv__wrapper,b4,ii___ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv__wrapper,b4,ii___ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv__wrapper,b4,ii___ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv__wrapper,b4,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b4,__ZNK7WebCore17ApplyStyleCommand13editingActionEv,b4,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b4,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b4,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,viii___ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE__wrapper,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,viiii___ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj__wrapper,b8,__ZN7WebCore17ApplyStyleCommandC2EN3WTF10PassRefPtrINS_7ElementEEEbNS_10EditActionE,b8,b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames4bTagE": __ZN7WebCore9HTMLNames4bTagE, "__ZN7WebCore9HTMLNames9classAttrE": __ZN7WebCore9HTMLNames9classAttrE, "__ZN7WebCore9HTMLNames6supTagE": __ZN7WebCore9HTMLNames6supTagE, "__ZN7WebCore9HTMLNames9styleAttrE": __ZN7WebCore9HTMLNames9styleAttrE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore9HTMLNames6subTagE": __ZN7WebCore9HTMLNames6subTagE, "__ZN7WebCore9HTMLNames9colorAttrE": __ZN7WebCore9HTMLNames9colorAttrE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore12EditingStyle11NoFontDeltaE": __ZN7WebCore12EditingStyle11NoFontDeltaE, "__ZN7WebCore9HTMLNames7spanTagE": __ZN7WebCore9HTMLNames7spanTagE, "__ZN7WebCore9HTMLNames4iTagE": __ZN7WebCore9HTMLNames4iTagE, "__ZN7WebCore9HTMLNames7dirAttrE": __ZN7WebCore9HTMLNames7dirAttrE, "__ZN7WebCore9HTMLNames9strikeTagE": __ZN7WebCore9HTMLNames9strikeTagE, "__ZN7WebCore9HTMLNames4uTagE": __ZN7WebCore9HTMLNames4uTagE, "__ZN7WebCore9HTMLNames8sizeAttrE": __ZN7WebCore9HTMLNames8sizeAttrE, "__ZN7WebCore9HTMLNames8faceAttrE": __ZN7WebCore9HTMLNames8faceAttrE, "__ZN7WebCore9HTMLNames7fontTagE": __ZN7WebCore9HTMLNames7fontTagE, "__ZN7WebCore9HTMLNames8spanAttrE": __ZN7WebCore9HTMLNames8spanAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore17ApplyStyleCommand41highestAncestorWithConflictingInlineStyleEPNS_12EditingStyleEPNS_4NodeE","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore17ApplyStyleCommandD1Ev","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZN7WebCore17ApplyStyleCommand23splitTextElementAtStartERKNS_8PositionES3_","__ZN7WebCore17ApplyStyleCommand27shouldApplyInlineStyleToRunEPNS_12EditingStyleEPNS_4NodeES4_","_strlen","__ZN7WebCoreL34hasNoAttributeOrOnlyStyleAttributeEPKNS_13StyledElementENS_27ShouldStyleAttributeBeEmptyE","__ZNK7WebCore17ApplyStyleCommand29isStyledInlineElementToRemoveEPNS_7ElementE","__ZN7WebCore17ApplyStyleCommandD2Ev","__ZN7WebCore17ApplyStyleCommandD0Ev","__ZN7WebCore17ApplyStyleCommand27fixRangeAndApplyInlineStyleEPNS_12EditingStyleERKNS_8PositionES5_","__ZN7WebCore11StyleChangeD2Ev","__ZN7WebCore17ApplyStyleCommand29pushDownInlineStyleAroundNodeEPNS_12EditingStyleEPNS_4NodeE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore17ApplyStyleCommand22shouldSplitTextElementEPNS_7ElementEPNS_12EditingStyleE","__ZN7WebCore17ApplyStyleCommand29removeImplicitlyStyledElementEPNS_12EditingStyleEPNS_11HTMLElementENS0_22InlineStyleRemovalModeES2_","__ZN7WebCore14isEmptyFontTagEPKNS_7ElementENS_27ShouldStyleAttributeBeEmptyE","__ZN7WebCore17ApplyStyleCommand30isValidCaretPositionInTextNodeERKNS_8PositionE","__ZN7WebCore21InlineRunToApplyStyleD2Ev","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZN7WebCore17ApplyStyleCommand27mergeEndWithNextIfIdenticalERKNS_8PositionES3_","__ZN7WebCore17ApplyStyleCommand29splitAncestorsWithUnicodeBidiEPNS_4NodeEb16WritingDirection","__ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_fS9_NS_10HashTraitsIS3_EENSB_IfEEE18KeyValuePairTraitsESC_E6rehashEiPS5_","__ZN7WebCore17ApplyStyleCommand27applyInlineStyleToNodeRangeEPNS_12EditingStyleEN3WTF10PassRefPtrINS_4NodeEEES6_","__ZN7WebCore17ApplyStyleCommand28surroundNodeRangeWithElementEN3WTF10PassRefPtrINS_4NodeEEES4_NS2_INS_7ElementEEE","__ZN7WebCore17ApplyStyleCommand14updateStartEndERKNS_8PositionES3_","__ZNK7WebCore17ApplyStyleCommand19nodeFullyUnselectedEPNS_4NodeERKNS_8PositionES5_","__ZN7WebCore17ApplyStyleCommand7doApplyEv","__ZN7WebCore17ApplyStyleCommand42replaceWithSpanOrRemoveIfWithoutAttributesERPNS_11HTMLElementE","__ZN7WebCore17ApplyStyleCommand11endPositionEv","__ZN7WebCore17ApplyStyleCommand14removeCSSStyleEPNS_12EditingStyleEPNS_11HTMLElementENS0_22InlineStyleRemovalModeES2_","__ZN7WebCore17ApplyStyleCommandC2ERNS_8DocumentEPKNS_12EditingStyleEPFbPKNS_7ElementEENS_10EditActionE","__ZN7WebCore11StyleChangeaSEOS0_","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN3WTF6VectorIN7WebCore21InlineRunToApplyStyleELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","__ZN7WebCore17ApplyStyleCommand22applyInlineStyleChangeEN3WTF10PassRefPtrINS_4NodeEEES4_RNS_11StyleChangeENS0_17EAddStyledElementE","__ZN7WebCore17ApplyStyleCommand22addInlineStyleIfNeededEPNS_12EditingStyleEN3WTF10PassRefPtrINS_4NodeEEES6_NS0_17EAddStyledElementE","__ZN7WebCore17ApplyStyleCommand30cleanupUnstyledAppleStyleSpansEPNS_13ContainerNodeE","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore17ApplyStyleCommand35removeConflictingInlineStyleFromRunEPNS_12EditingStyleERN3WTF6RefPtrINS_4NodeEEES7_NS3_10PassRefPtrIS5_EE","__ZN7WebCoreL24highestEmbeddingAncestorEPNS_4NodeES1_","__ZN7WebCore17ApplyStyleCommand16computedFontSizeEPNS_4NodeE","__ZNK7WebCore17ApplyStyleCommand13editingActionEv","_memset","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZN7WebCore17ApplyStyleCommand18joinChildTextNodesEPNS_4NodeERKNS_8PositionES5_","__ZN7WebCore17ApplyStyleCommand17removeInlineStyleEPNS_12EditingStyleERKNS_8PositionES5_","__ZN7WebCore17ApplyStyleCommandC2ERNS_8DocumentEPKNS_12EditingStyleENS_10EditActionENS0_14EPropertyLevelE","__ZN7WebCore17ApplyStyleCommand21splitTextElementAtEndERKNS_8PositionES3_","__ZN7WebCore17ApplyStyleCommand33mergeStartWithPreviousIfIdenticalERKNS_8PositionES3_","__ZN7WebCore17ApplyStyleCommandC2EN3WTF10PassRefPtrINS_7ElementEEEbNS_10EditActionE","__ZN7WebCore17ApplyStyleCommand16splitTextAtStartERKNS_8PositionES3_","__ZN7WebCore17ApplyStyleCommand26applyInlineStyleToPushDownEPNS_4NodeEPNS_12EditingStyleE","__ZN7WebCore17ApplyStyleCommandC2ERNS_8DocumentEPKNS_12EditingStyleERKNS_8PositionES8_NS_10EditActionENS0_14EPropertyLevelE","__ZN7WebCore17ApplyStyleCommand33removeEmbeddingUpToEnclosingBlockEPNS_4NodeES2_","_memcpy","__ZN3WTF9HashTableIPN7WebCore4NodeENS_12KeyValuePairIS3_fEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_fS9_NS_10HashTraitsIS3_EENSB_IfEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_fEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore39isStyleSpanOrSpanWithOnlyStyleAttributeEPKNS_7ElementE","__ZN7WebCore17ApplyStyleCommand13startPositionEv","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","__ZN7WebCore17ApplyStyleCommand14splitTextAtEndERKNS_8PositionES3_","__ZN7WebCore17ApplyStyleCommand34positionToComputeInlineStyleChangeEN3WTF10PassRefPtrINS_4NodeEEERNS1_6RefPtrIS3_EE","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv","__ZNK7WebCore17ApplyStyleCommand17nodeFullySelectedEPNS_4NodeERKNS_8PositionES5_","__ZN7WebCore17ApplyStyleCommand13addBlockStyleERKNS_11StyleChangeEPNS_11HTMLElementE","__ZN3WTF6VectorIN7WebCore21InlineRunToApplyStyleELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN7WebCore17ApplyStyleCommand15applyBlockStyleEPNS_12EditingStyleE","__ZN7WebCore17ApplyStyleCommand16applyInlineStyleEPNS_12EditingStyleE","__ZN7WebCore22createStyleSpanElementERNS_8DocumentE","__ZN7WebCore17ApplyStyleCommand28removeInlineStyleFromElementEPNS_12EditingStyleEN3WTF10PassRefPtrINS_11HTMLElementEEENS0_22InlineStyleRemovalModeES2_","__ZN7WebCore22isLegacyAppleStyleSpanEPKNS_4NodeE","__ZN7WebCore17ApplyStyleCommand28applyRelativeFontStyleChangeEPNS_12EditingStyleE"]

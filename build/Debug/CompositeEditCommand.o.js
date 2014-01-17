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
H_BASE = parentModule["_malloc"](128 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 128;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22EditCommandCompositionC1ERNS_8DocumentERKNS_16VisibleSelectionES5_NS_10EditActionE;
var __ZN7WebCore20CompositeEditCommandD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames5liTagE=env.__ZN7WebCore9HTMLNames5liTagE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore9HTMLNames6divTagE=env.__ZN7WebCore9HTMLNames6divTagE|0;
  var __ZN7WebCore9HTMLNames5ulTagE=env.__ZN7WebCore9HTMLNames5ulTagE|0;
  var __ZN7WebCore9HTMLNames5olTagE=env.__ZN7WebCore9HTMLNames5olTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore20CompositeEditCommandE=(H_BASE+48)|0;
  var __ZTVN7WebCore22EditCommandCompositionE=(H_BASE+8)|0;
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
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore20CompositeEditCommand14moveParagraphsERKNS_15VisiblePositionES3_S3_bb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 872 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 72 | 0;
 i17 = i7 + 88 | 0;
 i18 = i7 + 96 | 0;
 i19 = i7 + 112 | 0;
 i20 = i7 + 128 | 0;
 i21 = i7 + 144 | 0;
 i22 = i7 + 160 | 0;
 i23 = i7 + 168 | 0;
 i24 = i7 + 184 | 0;
 i25 = i7 + 200 | 0;
 i26 = i7 + 216 | 0;
 i27 = i7 + 232 | 0;
 i28 = i7 + 248 | 0;
 i29 = i7 + 264 | 0;
 i30 = i7 + 280 | 0;
 i31 = i7 + 296 | 0;
 i32 = i7 + 312 | 0;
 i33 = i7 + 328 | 0;
 i34 = i7 + 344 | 0;
 i35 = i7 + 360 | 0;
 i36 = i7 + 368 | 0;
 i37 = i7 + 376 | 0;
 i38 = i7 + 384 | 0;
 i39 = i7 + 392 | 0;
 i40 = i7 + 400 | 0;
 i41 = i7 + 408 | 0;
 i42 = i7 + 424 | 0;
 i43 = i7 + 488 | 0;
 i44 = i7 + 504 | 0;
 i45 = i7 + 520 | 0;
 i46 = i7 + 536 | 0;
 i47 = i7 + 552 | 0;
 i48 = i7 + 568 | 0;
 i49 = i7 + 576 | 0;
 i50 = i7 + 584 | 0;
 i51 = i7 + 600 | 0;
 i52 = i7 + 608 | 0;
 i53 = i7 + 624 | 0;
 i54 = i7 + 640 | 0;
 i55 = i7 + 656 | 0;
 i56 = i7 + 720 | 0;
 i57 = i7 + 728 | 0;
 i58 = i7 + 744 | 0;
 i59 = i7 + 760 | 0;
 i60 = i7 + 768 | 0;
 i61 = i7 + 776 | 0;
 i62 = i7 + 840 | 0;
 i63 = i7 + 856 | 0;
 if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i2, i4) | 0) {
  STACKTOP = i7;
  return;
 }
 i64 = i1 | 0;
 i65 = i1 + 72 | 0;
 i66 = (HEAP8[i1 + 128 | 0] & 2) != 0;
 do {
  if (i5) {
   i67 = i1 + 124 | 0;
   i68 = HEAP32[i67 >> 2] | 0;
   if ((i68 | 0) == 0) {
    i69 = -1;
    i70 = -1;
    break;
   }
   if ((i68 | 0) == 2) {
    i71 = 1;
   } else {
    i71 = HEAP32[i1 + 120 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i1 + 96 | 0, i71);
   if ((HEAP32[i67 >> 2] | 0) == 2) {
    i72 = 0;
   } else {
    i72 = HEAP32[i1 + 120 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i1 + 108 | 0, i72);
   i67 = (__ZN7WebCore16comparePositionsERKNS_15VisiblePositionES2_(i15, i3) | 0) > 0;
   do {
    if (i67 | (__ZN7WebCore16comparePositionsERKNS_15VisiblePositionES2_(i16, i2) | 0) < 0) {
     i73 = -1;
     i74 = -1;
    } else {
     i68 = (__ZN7WebCore16comparePositionsERKNS_15VisiblePositionES2_(i15, i2) | 0) > -1;
     i75 = (__ZN7WebCore16comparePositionsERKNS_15VisiblePositionES2_(i16, i3) | 0) < 1;
     do {
      if (i68) {
       i76 = HEAP32[i1 + 8 >> 2] | 0;
       i77 = i19 | 0;
       i78 = HEAP32[i2 >> 2] | 0;
       HEAP32[i77 >> 2] = i78;
       if ((i78 | 0) == 0) {
        i79 = i19 + 8 | 0;
        i80 = 0;
        i81 = i79;
        i82 = i79;
       } else {
        i79 = i78 + 8 | 0;
        HEAP32[i79 >> 2] = (HEAP32[i79 >> 2] | 0) + 1;
        i79 = i19 + 8 | 0;
        i78 = i79;
        i80 = HEAP32[i78 >> 2] & -8;
        i81 = i79;
        i82 = i78;
       }
       HEAP32[i19 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
       i78 = HEAP32[i2 + 8 >> 2] | 0;
       i79 = i80 | i78 & 7;
       HEAP32[i82 >> 2] = i79;
       HEAP8[i81] = i79 & 255 & -9 | i78 & 8;
       __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i18, i19);
       i78 = i21 | 0;
       i79 = HEAP32[i15 >> 2] | 0;
       HEAP32[i78 >> 2] = i79;
       if ((i79 | 0) != 0) {
        i83 = i79 + 8 | 0;
        HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) + 1;
       }
       HEAP32[i21 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
       i83 = HEAP32[i15 + 8 >> 2] | 0;
       i79 = i21 + 8 | 0;
       i84 = i79;
       i85 = HEAP32[i84 >> 2] & -8 | i83 & 7;
       HEAP32[i84 >> 2] = i85;
       HEAP8[i79] = i85 & 255 & -9 | i83 & 8;
       __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i20, i21);
       __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i17, i76, i18, i20);
       i76 = i17 | 0;
       i83 = HEAP32[i76 >> 2] | 0;
       HEAP32[i76 >> 2] = 0;
       i76 = HEAP32[i20 >> 2] | 0;
       do {
        if ((i76 | 0) != 0) {
         i85 = i76 + 8 | 0;
         i79 = i85 | 0;
         i84 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
         HEAP32[i79 >> 2] = i84;
         if ((i84 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i85 - 8 | 0);
        }
       } while (0);
       i76 = HEAP32[i78 >> 2] | 0;
       do {
        if ((i76 | 0) != 0) {
         i85 = i76 + 8 | 0;
         i84 = i85 | 0;
         i79 = (HEAP32[i84 >> 2] | 0) - 1 | 0;
         HEAP32[i84 >> 2] = i79;
         if ((i79 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i85 - 8 | 0);
        }
       } while (0);
       i76 = HEAP32[i18 >> 2] | 0;
       do {
        if ((i76 | 0) != 0) {
         i78 = i76 + 8 | 0;
         i85 = i78 | 0;
         i79 = (HEAP32[i85 >> 2] | 0) - 1 | 0;
         HEAP32[i85 >> 2] = i79;
         if ((i79 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i78 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i78 - 8 | 0);
        }
       } while (0);
       i76 = HEAP32[i77 >> 2] | 0;
       do {
        if ((i76 | 0) != 0) {
         i78 = i76 + 8 | 0;
         i79 = i78 | 0;
         i85 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
         HEAP32[i79 >> 2] = i85;
         if ((i85 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i78 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i78 - 8 | 0);
        }
       } while (0);
       i76 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i83, 1) | 0;
       if ((i83 | 0) == 0) {
        i86 = i76;
        break;
       }
       i77 = i83 | 0;
       i78 = (HEAP32[i77 >> 2] | 0) - 1 | 0;
       if ((i78 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i83);
        __ZN3WTF8fastFreeEPv(i83);
        i86 = i76;
        break;
       } else {
        HEAP32[i77 >> 2] = i78;
        i86 = i76;
        break;
       }
      } else {
       i86 = 0;
      }
     } while (0);
     if (!i75) {
      i73 = i86;
      i74 = 0;
      break;
     }
     i68 = HEAP32[i1 + 8 >> 2] | 0;
     i76 = i24 | 0;
     i78 = HEAP32[i2 >> 2] | 0;
     HEAP32[i76 >> 2] = i78;
     if ((i78 | 0) != 0) {
      i77 = i78 + 8 | 0;
      HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 1;
     }
     HEAP32[i24 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
     i77 = HEAP32[i2 + 8 >> 2] | 0;
     i78 = i24 + 8 | 0;
     i85 = i78;
     i79 = HEAP32[i85 >> 2] & -8 | i77 & 7;
     HEAP32[i85 >> 2] = i79;
     HEAP8[i78] = i79 & 255 & -9 | i77 & 8;
     __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i23, i24);
     i77 = i26 | 0;
     i79 = HEAP32[i16 >> 2] | 0;
     HEAP32[i77 >> 2] = i79;
     if ((i79 | 0) != 0) {
      i78 = i79 + 8 | 0;
      HEAP32[i78 >> 2] = (HEAP32[i78 >> 2] | 0) + 1;
     }
     HEAP32[i26 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
     i78 = HEAP32[i16 + 8 >> 2] | 0;
     i79 = i26 + 8 | 0;
     i85 = i79;
     i84 = HEAP32[i85 >> 2] & -8 | i78 & 7;
     HEAP32[i85 >> 2] = i84;
     HEAP8[i79] = i84 & 255 & -9 | i78 & 8;
     __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i25, i26);
     __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i22, i68, i23, i25);
     i68 = i22 | 0;
     i78 = HEAP32[i68 >> 2] | 0;
     HEAP32[i68 >> 2] = 0;
     i68 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i68 | 0) != 0) {
       i84 = i68 + 8 | 0;
       i79 = i84 | 0;
       i85 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
       HEAP32[i79 >> 2] = i85;
       if ((i85 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i84 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i84 - 8 | 0);
      }
     } while (0);
     i68 = HEAP32[i77 >> 2] | 0;
     do {
      if ((i68 | 0) != 0) {
       i75 = i68 + 8 | 0;
       i84 = i75 | 0;
       i85 = (HEAP32[i84 >> 2] | 0) - 1 | 0;
       HEAP32[i84 >> 2] = i85;
       if ((i85 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i75 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i75 - 8 | 0);
      }
     } while (0);
     i68 = HEAP32[i23 >> 2] | 0;
     do {
      if ((i68 | 0) != 0) {
       i77 = i68 + 8 | 0;
       i75 = i77 | 0;
       i85 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
       HEAP32[i75 >> 2] = i85;
       if ((i85 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i77 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i77 - 8 | 0);
      }
     } while (0);
     i68 = HEAP32[i76 >> 2] | 0;
     do {
      if ((i68 | 0) != 0) {
       i77 = i68 + 8 | 0;
       i85 = i77 | 0;
       i75 = (HEAP32[i85 >> 2] | 0) - 1 | 0;
       HEAP32[i85 >> 2] = i75;
       if ((i75 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i77 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i77 - 8 | 0);
      }
     } while (0);
     i68 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i78, 1) | 0;
     if ((i78 | 0) == 0) {
      i73 = i86;
      i74 = i68;
      break;
     }
     i76 = i78 | 0;
     i77 = (HEAP32[i76 >> 2] | 0) - 1 | 0;
     if ((i77 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i78);
      __ZN3WTF8fastFreeEPv(i78);
      i73 = i86;
      i74 = i68;
      break;
     } else {
      HEAP32[i76 >> 2] = i77;
      i73 = i86;
      i74 = i68;
      break;
     }
    }
   } while (0);
   i67 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i67 | 0) != 0) {
     i68 = i67 + 8 | 0;
     i77 = i68 | 0;
     i76 = (HEAP32[i77 >> 2] | 0) - 1 | 0;
     HEAP32[i77 >> 2] = i76;
     if ((i76 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
    }
   } while (0);
   i67 = HEAP32[i15 >> 2] | 0;
   if ((i67 | 0) == 0) {
    i69 = i73;
    i70 = i74;
    break;
   }
   i68 = i67 + 8 | 0;
   i67 = i68 | 0;
   i76 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
   HEAP32[i67 >> 2] = i76;
   if ((i76 | 0) >= 1) {
    i69 = i73;
    i70 = i74;
    break;
   }
   if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
    i69 = i73;
    i70 = i74;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
   i69 = i73;
   i70 = i74;
  } else {
   i69 = -1;
   i70 = -1;
  }
 } while (0);
 __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i27, i2, 1);
 __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i28, i3, 1);
 i74 = i30 | 0;
 i73 = i2 | 0;
 i15 = HEAP32[i73 >> 2] | 0;
 HEAP32[i74 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i16 = i15 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 i16 = i2 + 4 | 0;
 HEAP32[i30 + 4 >> 2] = HEAP32[i16 >> 2];
 i15 = i2 + 8 | 0;
 i86 = HEAP32[i15 >> 2] | 0;
 i23 = i30 + 8 | 0;
 i25 = i23;
 i22 = HEAP32[i25 >> 2] & -8 | i86 & 7;
 HEAP32[i25 >> 2] = i22;
 HEAP8[i23] = i22 & 255 & -9 | i86 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i29, i30, 1);
 i30 = HEAP32[i74 >> 2] | 0;
 do {
  if ((i30 | 0) != 0) {
   i74 = i30 + 8 | 0;
   i86 = i74 | 0;
   i22 = (HEAP32[i86 >> 2] | 0) - 1 | 0;
   HEAP32[i86 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i74 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i74 - 8 | 0);
  }
 } while (0);
 i30 = i32 | 0;
 i74 = HEAP32[i3 >> 2] | 0;
 HEAP32[i30 >> 2] = i74;
 if ((i74 | 0) != 0) {
  i22 = i74 + 8 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
 }
 HEAP32[i32 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 i22 = HEAP32[i3 + 8 >> 2] | 0;
 i74 = i32 + 8 | 0;
 i86 = i74;
 i23 = HEAP32[i86 >> 2] & -8 | i22 & 7;
 HEAP32[i86 >> 2] = i23;
 HEAP8[i74] = i23 & 255 & -9 | i22 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i31, i32, 1);
 i32 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i30 = i32 + 8 | 0;
   i22 = i30 | 0;
   i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i33, i29);
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i34, i31);
 i32 = i1 + 8 | 0;
 i30 = HEAP32[i32 >> 2] | 0;
 i23 = i33 | 0;
 i22 = HEAP32[i23 >> 2] | 0;
 i74 = i36 | 0;
 HEAP32[i74 >> 2] = i22;
 if ((i22 | 0) != 0) {
  i86 = i22 + 8 | 0;
  HEAP32[i86 >> 2] = (HEAP32[i86 >> 2] | 0) + 1;
 }
 i86 = i33 + 8 | 0;
 do {
  if ((HEAP8[i86] & 8) == 0) {
   i22 = HEAP32[i86 >> 2] & 7;
   if (!((i22 | 0) == 2 | (i22 | 0) == 4)) {
    i87 = 84;
    break;
   }
   i88 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i33) | 0;
  } else {
   i87 = 84;
  }
 } while (0);
 if ((i87 | 0) == 84) {
  i88 = HEAP32[i33 + 4 >> 2] | 0;
 }
 i33 = i34 | 0;
 i86 = HEAP32[i33 >> 2] | 0;
 i22 = i37 | 0;
 HEAP32[i22 >> 2] = i86;
 if ((i86 | 0) != 0) {
  i25 = i86 + 8 | 0;
  HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
 }
 i25 = i34 + 8 | 0;
 do {
  if ((HEAP8[i25] & 8) == 0) {
   i86 = HEAP32[i25 >> 2] & 7;
   if (!((i86 | 0) == 2 | (i86 | 0) == 4)) {
    i87 = 90;
    break;
   }
   i89 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i34) | 0;
  } else {
   i87 = 90;
  }
 } while (0);
 if ((i87 | 0) == 90) {
  i89 = HEAP32[i34 + 4 >> 2] | 0;
 }
 __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i35, i30, i36, i88, i37, i89);
 i89 = i35 | 0;
 i35 = HEAP32[i89 >> 2] | 0;
 HEAP32[i89 >> 2] = 0;
 i89 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i89 | 0) != 0) {
   i22 = i89 + 8 | 0;
   i37 = i22 | 0;
   i88 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
   HEAP32[i37 >> 2] = i88;
   if ((i88 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
  }
 } while (0);
 i89 = HEAP32[i74 >> 2] | 0;
 do {
  if ((i89 | 0) != 0) {
   i74 = i89 + 8 | 0;
   i22 = i74 | 0;
   i88 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i88;
   if ((i88 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i74 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i74 - 8 | 0);
  }
 } while (0);
 do {
  if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i2, i3) | 0) {
   i90 = 0;
  } else {
   i89 = HEAP32[i32 >> 2] | 0;
   __ZN7WebCore12createMarkupERKNS_5RangeEPN3WTF6VectorIPNS_4NodeELj0ENS3_15CrashOnOverflowEEENS_23EAnnotateForInterchangeEbNS_13EAbsoluteURLsE(i39, i35, 0, 0, 1, 0);
   __ZN3WTF6StringC1EPKc(i40, H_BASE + 128 | 0);
   __ZN7WebCore24createFragmentFromMarkupERNS_8DocumentERKN3WTF6StringES5_NS_19ParserContentPolicyE(i38, i89, i39, i40, 2);
   i89 = i38 | 0;
   i74 = HEAP32[i89 >> 2] | 0;
   HEAP32[i89 >> 2] = 0;
   i89 = HEAP32[i40 >> 2] | 0;
   do {
    if ((i89 | 0) != 0) {
     i88 = i89 | 0;
     i22 = (HEAP32[i88 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i89);
      break;
     } else {
      HEAP32[i88 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i89 = HEAP32[i39 >> 2] | 0;
   if ((i89 | 0) == 0) {
    i90 = i74;
    break;
   }
   i22 = i89 | 0;
   i88 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i88 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i89);
    i90 = i74;
    break;
   } else {
    HEAP32[i22 >> 2] = i88;
    i90 = i74;
    break;
   }
  }
 } while (0);
 if ((__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i2, i3) | 0) & i6) {
  i3 = i41 | 0;
  i2 = HEAP32[i73 >> 2] | 0;
  HEAP32[i3 >> 2] = i2;
  if ((i2 | 0) != 0) {
   i73 = i2 + 8 | 0;
   HEAP32[i73 >> 2] = (HEAP32[i73 >> 2] | 0) + 1;
  }
  HEAP32[i41 + 4 >> 2] = HEAP32[i16 >> 2];
  i16 = HEAP32[i15 >> 2] | 0;
  i15 = i41 + 8 | 0;
  i73 = i15;
  i2 = HEAP32[i73 >> 2] & -8 | i16 & 7;
  HEAP32[i73 >> 2] = i2;
  HEAP8[i15] = i2 & 255 & -9 | i16 & 8;
  i16 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore12EditingStyleC1ERKNS_8PositionENS0_19PropertiesToIncludeE(i16, i41, 1);
  i41 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i41 | 0) != 0) {
    i3 = i41 + 8 | 0;
    i2 = i3 | 0;
    i15 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    HEAP32[i2 >> 2] = i15;
    if ((i15 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   }
  } while (0);
  __ZN7WebCore12EditingStyle16mergeTypingStyleERNS_8DocumentE(i16, HEAP32[i32 >> 2] | 0);
  __ZN7WebCore12EditingStyle21removeBlockPropertiesEv(i16);
  i91 = i16;
 } else {
  i91 = 0;
 }
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i42, i29, i31, 1, 0);
 __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i64, i42);
 __ZN7WebCore16VisibleSelectionD2Ev(i42);
 __ZN7WebCore6Editor30clearMisspellingsAndBadGrammarERKNS_16VisibleSelectionE(HEAP32[(__ZN7WebCore11EditCommand5frameEv(i64) | 0) + 464 >> 2] | 0, i65);
 i42 = i1 + 124 | 0;
 do {
  if ((HEAP32[i42 >> 2] | 0) == 2) {
   i16 = HEAP32[i32 >> 2] | 0;
   i41 = __ZN3WTF10fastMallocEj(344) | 0;
   __ZN7WebCore22DeleteSelectionCommandC1ERNS_8DocumentEbbbbb(i41, i16, 0, 0, 0, 0, 1);
   i16 = i12 | 0;
   HEAP32[i16 >> 2] = i41;
   __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i12);
   i41 = HEAP32[i16 >> 2] | 0;
   if ((i41 | 0) == 0) {
    break;
   }
   i16 = i41 + 4 | 0;
   i41 = i16 | 0;
   i3 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i41 >> 2] = i3;
    break;
   }
   i3 = i16 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
  }
 } while (0);
 i12 = i43 | 0;
 i3 = i4 | 0;
 i16 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 >> 2] = i16;
 if ((i16 | 0) != 0) {
  i41 = i16 + 8 | 0;
  HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
 }
 i41 = i4 + 4 | 0;
 HEAP32[i43 + 4 >> 2] = HEAP32[i41 >> 2];
 i16 = i4 + 8 | 0;
 i15 = HEAP32[i16 >> 2] | 0;
 i2 = i15 & 7;
 i73 = i43 + 8 | 0;
 HEAP32[i73 >> 2] = i2;
 HEAP8[i73] = i2 & 255 | i15 & 8;
 HEAP32[i43 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 __ZN7WebCore20CompositeEditCommand20cleanupAfterDeletionENS_15VisiblePositionE(i1, i43);
 i43 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i43 | 0) != 0) {
   i12 = i43 + 8 | 0;
   i15 = i12 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i43 = i45 | 0;
 i12 = i27 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 HEAP32[i43 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i15 = i2 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 i15 = i27 + 4 | 0;
 HEAP32[i45 + 4 >> 2] = HEAP32[i15 >> 2];
 i2 = i27 + 8 | 0;
 i73 = i2;
 i39 = HEAP32[i73 >> 2] | 0;
 i40 = i45 + 8 | 0;
 i38 = i40;
 i88 = HEAP32[i38 >> 2] & -8 | i39 & 7;
 HEAP32[i38 >> 2] = i88;
 HEAP8[i40] = i88 & 255 & -9 | i39 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i44, i45, 1);
 i45 = i44 | 0;
 i39 = HEAP32[i45 >> 2] | 0;
 HEAP32[i45 >> 2] = 0;
 i88 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i39;
 do {
  if ((i88 | 0) != 0) {
   i39 = i88 + 8 | 0;
   i40 = i39 | 0;
   i38 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
   HEAP32[i40 >> 2] = i38;
   if ((i38 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
  }
 } while (0);
 HEAP32[i15 >> 2] = HEAP32[i44 + 4 >> 2];
 i88 = HEAP32[i44 + 8 >> 2] | 0;
 i39 = HEAP32[i73 >> 2] & -8 | i88 & 7;
 HEAP32[i73 >> 2] = i39;
 HEAP8[i2] = i39 & 255 & -9 | i88 & 8;
 HEAP32[i27 + 12 >> 2] = HEAP32[i44 + 12 >> 2];
 i44 = HEAP32[i45 >> 2] | 0;
 do {
  if ((i44 | 0) != 0) {
   i45 = i44 + 8 | 0;
   i88 = i45 | 0;
   i39 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
   HEAP32[i88 >> 2] = i39;
   if ((i39 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
  }
 } while (0);
 i44 = HEAP32[i43 >> 2] | 0;
 do {
  if ((i44 | 0) != 0) {
   i43 = i44 + 8 | 0;
   i45 = i43 | 0;
   i39 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
   HEAP32[i45 >> 2] = i39;
   if ((i39 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
  }
 } while (0);
 i44 = i47 | 0;
 i43 = i28 | 0;
 i39 = HEAP32[i43 >> 2] | 0;
 HEAP32[i44 >> 2] = i39;
 if ((i39 | 0) != 0) {
  i45 = i39 + 8 | 0;
  HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
 }
 i45 = i28 + 4 | 0;
 HEAP32[i47 + 4 >> 2] = HEAP32[i45 >> 2];
 i39 = i28 + 8 | 0;
 i88 = i39;
 i2 = HEAP32[i88 >> 2] | 0;
 i38 = i47 + 8 | 0;
 i40 = i38;
 i22 = HEAP32[i40 >> 2] & -8 | i2 & 7;
 HEAP32[i40 >> 2] = i22;
 HEAP8[i38] = i22 & 255 & -9 | i2 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i46, i47, 1);
 i47 = i46 | 0;
 i2 = HEAP32[i47 >> 2] | 0;
 HEAP32[i47 >> 2] = 0;
 i22 = HEAP32[i43 >> 2] | 0;
 HEAP32[i43 >> 2] = i2;
 do {
  if ((i22 | 0) != 0) {
   i2 = i22 + 8 | 0;
   i38 = i2 | 0;
   i40 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
   HEAP32[i38 >> 2] = i40;
   if ((i40 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 HEAP32[i45 >> 2] = HEAP32[i46 + 4 >> 2];
 i45 = HEAP32[i46 + 8 >> 2] | 0;
 i22 = HEAP32[i88 >> 2] & -8 | i45 & 7;
 HEAP32[i88 >> 2] = i22;
 HEAP8[i39] = i22 & 255 & -9 | i45 & 8;
 HEAP32[i28 + 12 >> 2] = HEAP32[i46 + 12 >> 2];
 i46 = HEAP32[i47 >> 2] | 0;
 do {
  if ((i46 | 0) != 0) {
   i47 = i46 + 8 | 0;
   i45 = i47 | 0;
   i22 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
   HEAP32[i45 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
  }
 } while (0);
 i46 = HEAP32[i44 >> 2] | 0;
 do {
  if ((i46 | 0) != 0) {
   i44 = i46 + 8 | 0;
   i47 = i44 | 0;
   i22 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
   HEAP32[i47 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
  }
 } while (0);
 do {
  if ((HEAP32[i12 >> 2] | 0) != 0) {
   if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i27, 1) | 0) {
    if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i27, i28) | 0)) {
     break;
    }
   }
   __ZN7WebCore18createBreakElementERNS_8DocumentE(i49, HEAP32[i32 >> 2] | 0);
   i46 = i48 | 0;
   i44 = i49 | 0;
   i22 = HEAP32[i44 >> 2] | 0;
   HEAP32[i44 >> 2] = 0;
   HEAP32[i46 >> 2] = i22;
   i22 = i50 | 0;
   i47 = HEAP32[i12 >> 2] | 0;
   HEAP32[i22 >> 2] = i47;
   if ((i47 | 0) != 0) {
    i45 = i47 + 8 | 0;
    HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
   }
   HEAP32[i50 + 4 >> 2] = HEAP32[i15 >> 2];
   i45 = HEAP32[i73 >> 2] | 0;
   i47 = i50 + 8 | 0;
   i39 = i47;
   i88 = HEAP32[i39 >> 2] & -8 | i45 & 7;
   HEAP32[i39 >> 2] = i88;
   HEAP8[i47] = i88 & 255 & -9 | i45 & 8;
   __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i1, i48, i50);
   i45 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i45 | 0) != 0) {
     i22 = i45 + 8 | 0;
     i88 = i22 | 0;
     i47 = (HEAP32[i88 >> 2] | 0) - 1 | 0;
     HEAP32[i88 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   i45 = HEAP32[i46 >> 2] | 0;
   do {
    if ((i45 | 0) != 0) {
     i74 = i45 + 8 | 0;
     i22 = i74 | 0;
     i47 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i74 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i74 - 8 | 0);
    }
   } while (0);
   i45 = HEAP32[i44 >> 2] | 0;
   do {
    if ((i45 | 0) != 0) {
     i46 = i45 + 8 | 0;
     i74 = i46 | 0;
     i47 = (HEAP32[i74 >> 2] | 0) - 1 | 0;
     HEAP32[i74 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i32 >> 2] | 0);
  }
 } while (0);
 i50 = HEAP32[i32 >> 2] | 0;
 __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i52, HEAP32[i50 + 692 >> 2] | 0);
 i48 = i54 | 0;
 i73 = HEAP32[i3 >> 2] | 0;
 HEAP32[i48 >> 2] = i73;
 if ((i73 | 0) != 0) {
  i3 = i73 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i54 + 4 >> 2] = HEAP32[i41 >> 2];
 i41 = HEAP32[i16 >> 2] | 0;
 i16 = i54 + 8 | 0;
 i3 = i16;
 i73 = HEAP32[i3 >> 2] & -8 | i41 & 7;
 HEAP32[i3 >> 2] = i73;
 HEAP8[i16] = i73 & 255 & -9 | i41 & 8;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i53, i54);
 __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i51, i50, i52, i53);
 i50 = i51 | 0;
 i51 = HEAP32[i50 >> 2] | 0;
 HEAP32[i50 >> 2] = 0;
 i50 = HEAP32[i53 >> 2] | 0;
 do {
  if ((i50 | 0) != 0) {
   i53 = i50 + 8 | 0;
   i54 = i53 | 0;
   i41 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
   HEAP32[i54 >> 2] = i41;
   if ((i41 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
  }
 } while (0);
 i50 = HEAP32[i48 >> 2] | 0;
 do {
  if ((i50 | 0) != 0) {
   i48 = i50 + 8 | 0;
   i53 = i48 | 0;
   i41 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
   HEAP32[i53 >> 2] = i41;
   if ((i41 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
  }
 } while (0);
 i50 = HEAP32[i52 >> 2] | 0;
 do {
  if ((i50 | 0) != 0) {
   i52 = i50 + 8 | 0;
   i48 = i52 | 0;
   i41 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
   HEAP32[i48 >> 2] = i41;
   if ((i41 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
  }
 } while (0);
 i50 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i51, 1) | 0;
 __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i55, i4, i66);
 __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i64, i55);
 __ZN7WebCore16VisibleSelectionD2Ev(i55);
 i55 = HEAP32[i32 >> 2] | 0;
 i4 = (i90 | 0) == 0;
 if (!i4) {
  i52 = i90 + 8 | 0;
  HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
 }
 i52 = __ZN3WTF10fastMallocEj(200) | 0;
 i41 = i8 | 0;
 HEAP32[i41 >> 2] = i90;
 __ZN7WebCore23ReplaceSelectionCommandC1ERNS_8DocumentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEjNS_10EditActionE(i52, i55, i8, i6 ? 17 : 21, 29);
 i6 = HEAP32[i41 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i41 = i6 + 8 | 0;
   i8 = i41 | 0;
   i55 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i55;
   if ((i55 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
  }
 } while (0);
 i6 = i56 | 0;
 HEAP32[i6 >> 2] = i52;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i56);
 i56 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i56 | 0) != 0) {
   i6 = i56 + 4 | 0;
   i52 = i6 | 0;
   i41 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
   if ((i41 | 0) != 0) {
    HEAP32[i52 >> 2] = i41;
    break;
   }
   i41 = i6 - 4 | 0;
   if ((i41 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i41 >> 2] | 0) + 4 >> 2] & 15](i41);
  }
 } while (0);
 __ZN7WebCore6Editor29markMisspellingsAndBadGrammarERKNS_16VisibleSelectionE(HEAP32[(__ZN7WebCore11EditCommand5frameEv(i64) | 0) + 464 >> 2] | 0, i65);
 do {
  if ((HEAP32[i42 >> 2] | 0) == 1) {
   i65 = i1 + 96 | 0;
   i56 = i1 + 120 | 0;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i57, i65, HEAP32[i56 >> 2] | 0);
   do {
    if (__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i57, 1) | 0) {
     if ((HEAP32[i42 >> 2] | 0) == 2) {
      i92 = 1;
     } else {
      i92 = HEAP32[i56 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i58, i65, i92);
     i41 = __ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i58, 1) | 0;
     i6 = HEAP32[i58 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i93 = i41;
      break;
     }
     i52 = i6 + 8 | 0;
     i6 = i52 | 0;
     i55 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     HEAP32[i6 >> 2] = i55;
     if ((i55 | 0) >= 1) {
      i93 = i41;
      break;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      i93 = i41;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
     i93 = i41;
    } else {
     i93 = 0;
    }
   } while (0);
   i65 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i65 | 0) != 0) {
     i56 = i65 + 8 | 0;
     i41 = i56 | 0;
     i52 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
     HEAP32[i41 >> 2] = i52;
     if ((i52 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
    }
   } while (0);
   i65 = (i91 | 0) == 0;
   if (i65 | i93 ^ 1) {
    i94 = i65;
    break;
   }
   i65 = HEAP32[i32 >> 2] | 0;
   i56 = __ZN3WTF10fastMallocEj(204) | 0;
   __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleENS_10EditActionENS0_14EPropertyLevelE(i56, i65, i91, 14, 0);
   i65 = i9 | 0;
   HEAP32[i65 >> 2] = i56;
   __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i9);
   i56 = HEAP32[i65 >> 2] | 0;
   if ((i56 | 0) == 0) {
    i94 = 0;
    break;
   }
   i65 = i56 + 4 | 0;
   i56 = i65 | 0;
   i52 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
   if ((i52 | 0) != 0) {
    HEAP32[i56 >> 2] = i52;
    i94 = 0;
    break;
   }
   i52 = i65 - 4 | 0;
   if ((i52 | 0) == 0) {
    i94 = 0;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i52 >> 2] | 0) + 4 >> 2] & 15](i52);
   i94 = 0;
  } else {
   i94 = (i91 | 0) == 0;
  }
 } while (0);
 do {
  if (!((i69 | 0) == -1 | i5 ^ 1)) {
   __ZN7WebCore12TextIterator26rangeFromLocationAndLengthEPNS_13ContainerNodeEiib(i59, HEAP32[(HEAP32[i32 >> 2] | 0) + 692 >> 2] | 0, i50 + i69 | 0, 0, 1);
   i9 = i59 | 0;
   i1 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   __ZN7WebCore12TextIterator26rangeFromLocationAndLengthEPNS_13ContainerNodeEiib(i60, HEAP32[(HEAP32[i32 >> 2] | 0) + 692 >> 2] | 0, i50 + i70 | 0, 0, 1);
   i9 = i60 | 0;
   i93 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = (i1 | 0) == 0;
   do {
    if (i9) {
     i87 = 246;
    } else {
     if ((i93 | 0) == 0) {
      break;
     }
     i57 = i1 + 12 | 0;
     i58 = HEAP32[i57 >> 2] | 0;
     if ((i58 | 0) > -1) {
      i95 = i58;
     } else {
      i58 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i1 + 16 >> 2] | 0) | 0) + 1 | 0;
      HEAP32[i57 >> 2] = i58;
      i95 = i58;
     }
     i58 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i58 | 0) == 0) {
      i96 = i95;
     } else {
      i92 = i58 + 8 | 0;
      HEAP32[i92 >> 2] = (HEAP32[i92 >> 2] | 0) + 1;
      i96 = HEAP32[i57 >> 2] | 0;
     }
     i57 = i10 | 0;
     HEAP32[i57 >> 2] = i58;
     HEAP32[i11 >> 2] = i96;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i62, i10, i11);
     i58 = HEAP32[i57 >> 2] | 0;
     do {
      if ((i58 | 0) != 0) {
       i57 = i58 + 8 | 0;
       i92 = i57 | 0;
       i42 = (HEAP32[i92 >> 2] | 0) - 1 | 0;
       HEAP32[i92 >> 2] = i42;
       if ((i42 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
      }
     } while (0);
     i58 = i93 + 12 | 0;
     i78 = HEAP32[i58 >> 2] | 0;
     if ((i78 | 0) > -1) {
      i97 = i78;
     } else {
      i78 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i93 + 16 >> 2] | 0) | 0) + 1 | 0;
      HEAP32[i58 >> 2] = i78;
      i97 = i78;
     }
     i78 = HEAP32[i93 + 8 >> 2] | 0;
     if ((i78 | 0) == 0) {
      i98 = i97;
     } else {
      i57 = i78 + 8 | 0;
      HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
      i98 = HEAP32[i58 >> 2] | 0;
     }
     i58 = i13 | 0;
     HEAP32[i58 >> 2] = i78;
     HEAP32[i14 >> 2] = i98;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i63, i13, i14);
     i78 = HEAP32[i58 >> 2] | 0;
     do {
      if ((i78 | 0) != 0) {
       i58 = i78 + 8 | 0;
       i57 = i58 | 0;
       i42 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
       HEAP32[i57 >> 2] = i42;
       if ((i42 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i61, i62, i63, 1, i66);
     __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i64, i61);
     __ZN7WebCore16VisibleSelectionD2Ev(i61);
     i78 = HEAP32[i63 >> 2] | 0;
     do {
      if ((i78 | 0) != 0) {
       i58 = i78 + 8 | 0;
       i42 = i58 | 0;
       i57 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
       HEAP32[i42 >> 2] = i57;
       if ((i57 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
      }
     } while (0);
     i78 = HEAP32[i62 >> 2] | 0;
     if ((i78 | 0) == 0) {
      i87 = 246;
      break;
     }
     i58 = i78 + 8 | 0;
     i78 = i58 | 0;
     i57 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
     HEAP32[i78 >> 2] = i57;
     if ((i57 | 0) >= 1) {
      i87 = 246;
      break;
     }
     if ((HEAP32[i58 + 8 >> 2] | 0) != 0) {
      i87 = 246;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i58 - 8 | 0);
     i87 = 246;
    }
   } while (0);
   if ((i87 | 0) == 246) {
    do {
     if ((i93 | 0) != 0) {
      i58 = i93 | 0;
      i57 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
      if ((i57 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i93);
       __ZN3WTF8fastFreeEPv(i93);
       break;
      } else {
       HEAP32[i58 >> 2] = i57;
       break;
      }
     }
    } while (0);
    if (i9) {
     break;
    }
   }
   i93 = i1 | 0;
   i57 = (HEAP32[i93 >> 2] | 0) - 1 | 0;
   if ((i57 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i93 >> 2] = i57;
    break;
   }
  }
 } while (0);
 do {
  if ((i51 | 0) != 0) {
   i87 = i51 | 0;
   i62 = (HEAP32[i87 >> 2] | 0) - 1 | 0;
   if ((i62 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i51);
    __ZN3WTF8fastFreeEPv(i51);
    break;
   } else {
    HEAP32[i87 >> 2] = i62;
    break;
   }
  }
 } while (0);
 do {
  if (!i94) {
   i51 = i91 | 0;
   i62 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
   if ((i62 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i91);
    __ZN3WTF8fastFreeEPv(i91);
    break;
   } else {
    HEAP32[i51 >> 2] = i62;
    break;
   }
  }
 } while (0);
 do {
  if (!i4) {
   i91 = i90 + 8 | 0;
   i94 = i91 | 0;
   i62 = (HEAP32[i94 >> 2] | 0) - 1 | 0;
   HEAP32[i94 >> 2] = i62;
   if ((i62 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i91 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i91 - 8 | 0);
  }
 } while (0);
 do {
  if ((i35 | 0) != 0) {
   i90 = i35 | 0;
   i4 = (HEAP32[i90 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i35);
    __ZN3WTF8fastFreeEPv(i35);
    break;
   } else {
    HEAP32[i90 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i35 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i33 = i35 + 8 | 0;
   i4 = i33 | 0;
   i90 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i90;
   if ((i90 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
  }
 } while (0);
 i35 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i23 = i35 + 8 | 0;
   i33 = i23 | 0;
   i90 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
   HEAP32[i33 >> 2] = i90;
   if ((i90 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 i35 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i31 = i35 + 8 | 0;
   i23 = i31 | 0;
   i90 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   HEAP32[i23 >> 2] = i90;
   if ((i90 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
  }
 } while (0);
 i35 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i29 = i35 + 8 | 0;
   i31 = i29 | 0;
   i90 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   HEAP32[i31 >> 2] = i90;
   if ((i90 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
  }
 } while (0);
 i35 = HEAP32[i43 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i43 = i35 + 8 | 0;
   i29 = i43 | 0;
   i90 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   HEAP32[i29 >> 2] = i90;
   if ((i90 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
  }
 } while (0);
 i35 = HEAP32[i12 >> 2] | 0;
 if ((i35 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = i35 + 8 | 0;
 i35 = i12 | 0;
 i43 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
 HEAP32[i35 >> 2] = i43;
 if ((i43 | 0) >= 1) {
  STACKTOP = i7;
  return;
 }
 if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore20CompositeEditCommand23breakOutOfEmptyListItemEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 296 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 72 | 0;
 i9 = i2 + 80 | 0;
 i10 = i2 + 88 | 0;
 i11 = i2 + 96 | 0;
 i12 = i2 + 104 | 0;
 i13 = i2 + 112 | 0;
 i14 = i2 + 120 | 0;
 i15 = i2 + 128 | 0;
 i16 = i2 + 136 | 0;
 i17 = i2 + 144 | 0;
 i18 = i2 + 152 | 0;
 i19 = i2 + 160 | 0;
 i20 = i2 + 168 | 0;
 i21 = i2 + 176 | 0;
 i22 = i2 + 184 | 0;
 i23 = i2 + 192 | 0;
 i24 = i2 + 200 | 0;
 i25 = i2 + 264 | 0;
 i26 = i2 + 280 | 0;
 i27 = i1 | 0;
 if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
  i28 = 1;
 } else {
  i28 = HEAP32[i1 + 120 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i1 + 96 | 0, i28);
 i28 = __ZN7WebCore22enclosingEmptyListItemERKNS_15VisiblePositionE(i4) | 0;
 i29 = (i28 | 0) == 0;
 if (!i29) {
  i30 = i28 + 8 | 0;
  HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
 }
 i30 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i30 | 0) != 0) {
   i4 = i30 + 8 | 0;
   i31 = i4 | 0;
   i32 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
   HEAP32[i31 >> 2] = i32;
   if ((i32 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 if (i29) {
  i33 = 0;
  STACKTOP = i2;
  return i33 | 0;
 }
 i29 = i5 | 0;
 i30 = i1 + 96 | 0;
 i4 = HEAP32[i30 >> 2] | 0;
 HEAP32[i29 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i32 = i4 + 8 | 0;
  HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
 }
 i32 = i1 + 100 | 0;
 HEAP32[i5 + 4 >> 2] = HEAP32[i32 >> 2];
 i4 = i1 + 104 | 0;
 i31 = HEAP32[i4 >> 2] | 0;
 i34 = i5 + 8 | 0;
 i35 = i34;
 i36 = HEAP32[i35 >> 2] & -8 | i31 & 7;
 HEAP32[i35 >> 2] = i36;
 HEAP8[i34] = i36 & 255 & -9 | i31 & 8;
 i31 = __ZN3WTF10fastMallocEj(16) | 0;
 i36 = i31;
 __ZN7WebCore12EditingStyleC1ERKNS_8PositionENS0_19PropertiesToIncludeE(i36, i5, 1);
 i5 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i29 = i5 + 8 | 0;
   i34 = i29 | 0;
   i35 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i35;
   if ((i35 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
  }
 } while (0);
 i5 = i1 + 8 | 0;
 __ZN7WebCore12EditingStyle16mergeTypingStyleERNS_8DocumentE(i36, HEAP32[i5 >> 2] | 0);
 i29 = HEAP32[i28 + 16 >> 2] | 0;
 do {
  if ((i29 | 0) == 0) {
   i37 = 0;
  } else {
   i35 = i29 + 8 | 0;
   HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
   i34 = i29 | 0;
   i38 = (HEAP32[i29 + 12 >> 2] & 4 | 0) == 0;
   L25 : do {
    if (i38) {
     i39 = 0;
    } else {
     i40 = HEAP32[i34 + 44 >> 2] | 0;
     i41 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
     do {
      if ((i40 | 0) != (i41 | 0)) {
       if ((HEAP32[i40 + 12 >> 2] | 0) == (HEAP32[i41 + 12 >> 2] | 0)) {
        if ((HEAP32[i40 + 16 >> 2] | 0) == (HEAP32[i41 + 16 >> 2] | 0)) {
         break;
        }
       }
       if (i38) {
        i39 = 0;
        break L25;
       }
       i42 = HEAP32[i34 + 44 >> 2] | 0;
       i43 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
       if ((i42 | 0) == (i43 | 0)) {
        break;
       }
       if ((HEAP32[i42 + 12 >> 2] | 0) != (HEAP32[i43 + 12 >> 2] | 0)) {
        i39 = 0;
        break L25;
       }
       if ((HEAP32[i42 + 16 >> 2] | 0) != (HEAP32[i43 + 16 >> 2] | 0)) {
        i39 = 0;
        break L25;
       }
      }
     } while (0);
     if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i34, 0, 1) | 0)) {
      i39 = 0;
      break;
     }
     if ((i29 | 0) == (__ZNK7WebCore4Node19rootEditableElementEv(i28) | 0)) {
      i39 = 0;
      break;
     }
     i41 = i29 + 16 | 0;
     i40 = HEAP32[i41 >> 2] | 0;
     L38 : do {
      if ((i40 | 0) == 0) {
       i44 = 66;
      } else {
       i43 = i40 | 0;
       i42 = (HEAP32[i40 + 12 >> 2] & 4 | 0) == 0;
       if (i42) {
        i44 = 66;
        break;
       }
       i45 = HEAP32[i43 + 44 >> 2] | 0;
       i46 = HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0;
       do {
        if ((i45 | 0) == (i46 | 0)) {
         i44 = 32;
        } else {
         if ((HEAP32[i45 + 12 >> 2] | 0) == (HEAP32[i46 + 12 >> 2] | 0)) {
          if ((HEAP32[i45 + 16 >> 2] | 0) == (HEAP32[i46 + 16 >> 2] | 0)) {
           i44 = 32;
           break;
          }
         }
         if (i42) {
          i44 = 66;
          break L38;
         }
         i47 = HEAP32[i43 + 44 >> 2] | 0;
         i48 = HEAP32[__ZN7WebCore9HTMLNames5olTagE >> 2] | 0;
         do {
          if ((i47 | 0) != (i48 | 0)) {
           if ((HEAP32[i47 + 12 >> 2] | 0) == (HEAP32[i48 + 12 >> 2] | 0)) {
            if ((HEAP32[i47 + 16 >> 2] | 0) == (HEAP32[i48 + 16 >> 2] | 0)) {
             break;
            }
           }
           if (i42) {
            i44 = 66;
            break L38;
           }
           i49 = HEAP32[i43 + 44 >> 2] | 0;
           i50 = HEAP32[__ZN7WebCore9HTMLNames5ulTagE >> 2] | 0;
           if ((i49 | 0) == (i50 | 0)) {
            break;
           }
           if ((HEAP32[i49 + 12 >> 2] | 0) != (HEAP32[i50 + 12 >> 2] | 0)) {
            i44 = 66;
            break L38;
           }
           if ((HEAP32[i49 + 16 >> 2] | 0) != (HEAP32[i50 + 16 >> 2] | 0)) {
            i44 = 66;
            break L38;
           }
          }
         } while (0);
         __ZN7WebCore21createListItemElementERNS_8DocumentE(i12, HEAP32[i5 >> 2] | 0);
         i48 = i12 | 0;
         i47 = HEAP32[i48 >> 2] | 0;
         HEAP32[i48 >> 2] = 0;
         i51 = i47;
        }
       } while (0);
       if ((i44 | 0) == 32) {
        __ZN7WebCore24visiblePositionAfterNodeEPNS_4NodeE(i6, i43);
        __ZN7WebCore24visiblePositionAfterNodeEPNS_4NodeE(i7, i34);
        i42 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i6, i7) | 0;
        i46 = HEAP32[i7 >> 2] | 0;
        do {
         if ((i46 | 0) != 0) {
          i45 = i46 + 8 | 0;
          i47 = i45 | 0;
          i48 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
          HEAP32[i47 >> 2] = i48;
          if ((i48 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
         }
        } while (0);
        i46 = HEAP32[i6 >> 2] | 0;
        do {
         if ((i46 | 0) != 0) {
          i43 = i46 + 8 | 0;
          i45 = i43 | 0;
          i48 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
          HEAP32[i45 >> 2] = i48;
          if ((i48 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
         }
        } while (0);
        if (!i42) {
         i44 = 66;
         break;
        }
        i46 = i8 | 0;
        HEAP32[i46 >> 2] = i40;
        i43 = i40 + 8 | 0;
        HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
        i43 = i9 | 0;
        HEAP32[i43 >> 2] = i34;
        HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
        __ZN7WebCore20CompositeEditCommand12splitElementEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE(i1, i8, i9);
        i48 = HEAP32[i43 >> 2] | 0;
        do {
         if ((i48 | 0) != 0) {
          i43 = i48 + 8 | 0;
          i45 = i43 | 0;
          i47 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
          HEAP32[i45 >> 2] = i47;
          if ((i47 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
         }
        } while (0);
        i48 = HEAP32[i46 >> 2] | 0;
        do {
         if ((i48 | 0) != 0) {
          i42 = i48 + 8 | 0;
          i43 = i42 | 0;
          i47 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
          HEAP32[i43 >> 2] = i47;
          if ((i47 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
         }
        } while (0);
        i48 = HEAP32[i41 >> 2] | 0;
        i46 = i10 | 0;
        HEAP32[i46 >> 2] = i48;
        if ((i48 | 0) != 0) {
         i42 = i48 + 8 | 0;
         HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
        }
        __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1, i10, 1);
        i42 = HEAP32[i46 >> 2] | 0;
        do {
         if ((i42 | 0) != 0) {
          i46 = i42 + 8 | 0;
          i48 = i46 | 0;
          i47 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
          HEAP32[i48 >> 2] = i47;
          if ((i47 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
         }
        } while (0);
        __ZN7WebCore21createListItemElementERNS_8DocumentE(i11, HEAP32[i5 >> 2] | 0);
        i42 = i11 | 0;
        i46 = HEAP32[i42 >> 2] | 0;
        HEAP32[i42 >> 2] = 0;
        i51 = i46;
       }
       if ((i51 | 0) == 0) {
        i44 = 66;
       } else {
        i52 = i51;
       }
      }
     } while (0);
     if ((i44 | 0) == 66) {
      __ZN7WebCore29createDefaultParagraphElementERNS_8DocumentE(i13, HEAP32[i5 >> 2] | 0);
      i41 = i13 | 0;
      i40 = HEAP32[i41 >> 2] | 0;
      HEAP32[i41 >> 2] = 0;
      i52 = i40;
     }
     i40 = i52 | 0;
     i41 = i28 + 12 | 0;
     i46 = HEAP32[i41 >> 2] | 0;
     L91 : do {
      if ((i46 & 4 | 0) == 0) {
       i42 = HEAP32[i28 + 24 >> 2] | 0;
       if ((i42 | 0) == 0) {
        i53 = i46;
        i54 = 0;
        i55 = 1;
       } else {
        i56 = i42;
        i44 = 71;
       }
      } else {
       i42 = i28;
       while (1) {
        i47 = HEAP32[i42 + 24 >> 2] | 0;
        if ((i47 | 0) == 0) {
         i53 = i46;
         i54 = 0;
         i55 = 1;
         break L91;
        }
        if ((HEAP32[i47 + 12 >> 2] & 4 | 0) == 0) {
         i42 = i47;
        } else {
         i56 = i47;
         i44 = 71;
         break;
        }
       }
      }
     } while (0);
     if ((i44 | 0) == 71) {
      i46 = i56 + 8 | 0;
      HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
      i53 = HEAP32[i41 >> 2] | 0;
      i54 = i56;
      i55 = 0;
     }
     L99 : do {
      if ((i53 & 4 | 0) == 0) {
       i46 = HEAP32[i28 + 28 >> 2] | 0;
       if ((i46 | 0) == 0) {
        i57 = 0;
        i58 = 1;
       } else {
        i59 = i46;
        i44 = 76;
       }
      } else {
       i46 = i28;
       while (1) {
        i42 = HEAP32[i46 + 28 >> 2] | 0;
        if ((i42 | 0) == 0) {
         i57 = 0;
         i58 = 1;
         break L99;
        }
        if ((HEAP32[i42 + 12 >> 2] & 4 | 0) == 0) {
         i46 = i42;
        } else {
         i59 = i42;
         i44 = 76;
         break;
        }
       }
      }
     } while (0);
     if ((i44 | 0) == 76) {
      i41 = i59 + 8 | 0;
      HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
      i57 = i59;
      i58 = 0;
     }
     do {
      if (__ZN7WebCore10isListItemEPKNS_4NodeE(i57) | 0) {
       i44 = 79;
      } else {
       if (__ZN7WebCore13isListElementEPNS_4NodeE(i57) | 0) {
        i44 = 79;
        break;
       }
       i41 = i19 | 0;
       HEAP32[i41 >> 2] = i52;
       if ((i52 | 0) != 0) {
        i46 = i52 + 8 | 0;
        HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
       }
       i46 = i20 | 0;
       HEAP32[i46 >> 2] = i34;
       HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
       __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i1, i19, i20);
       i42 = HEAP32[i46 >> 2] | 0;
       do {
        if ((i42 | 0) != 0) {
         i46 = i42 + 8 | 0;
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
       i42 = HEAP32[i41 >> 2] | 0;
       do {
        if ((i42 | 0) != 0) {
         i46 = i42 + 8 | 0;
         i48 = i46 | 0;
         i47 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
         HEAP32[i48 >> 2] = i47;
         if ((i47 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
        }
       } while (0);
       i42 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
       if (__ZN7WebCore10isListItemEPKNS_4NodeE(i54) | 0) {
        i60 = i28;
       } else {
        i41 = __ZN7WebCore13isListElementEPNS_4NodeE(i54) | 0;
        i60 = i41 ? i28 : i34;
       }
       i41 = i21 | 0;
       HEAP32[i41 >> 2] = i60;
       if ((i60 | 0) != 0) {
        i46 = i60 + 8 | 0;
        HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
       }
       FUNCTION_TABLE_viii[i42 & 3](i1, i21, 1);
       i42 = HEAP32[i41 >> 2] | 0;
       if ((i42 | 0) == 0) {
        break;
       }
       i41 = i42 + 8 | 0;
       i42 = i41 | 0;
       i46 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
       HEAP32[i42 >> 2] = i46;
       if ((i46 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
      }
     } while (0);
     do {
      if ((i44 | 0) == 79) {
       if (__ZN7WebCore10isListItemEPKNS_4NodeE(i54) | 0) {
        i44 = 81;
       } else {
        if (__ZN7WebCore13isListElementEPNS_4NodeE(i54) | 0) {
         i44 = 81;
        }
       }
       do {
        if ((i44 | 0) == 81) {
         i41 = i14 | 0;
         HEAP32[i41 >> 2] = i29;
         HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
         i46 = i15 | 0;
         HEAP32[i46 >> 2] = i28;
         i42 = i28 + 8 | 0;
         HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
         __ZN7WebCore20CompositeEditCommand12splitElementEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE(i1, i14, i15);
         i42 = HEAP32[i46 >> 2] | 0;
         do {
          if ((i42 | 0) != 0) {
           i46 = i42 + 8 | 0;
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
         i42 = HEAP32[i41 >> 2] | 0;
         if ((i42 | 0) == 0) {
          break;
         }
         i46 = i42 + 8 | 0;
         i42 = i46 | 0;
         i48 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
         HEAP32[i42 >> 2] = i48;
         if ((i48 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
        }
       } while (0);
       i46 = i16 | 0;
       HEAP32[i46 >> 2] = i52;
       if ((i52 | 0) != 0) {
        i48 = i52 + 8 | 0;
        HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
       }
       i48 = i17 | 0;
       HEAP32[i48 >> 2] = i34;
       HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
       __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i1, i16, i17, 1);
       i42 = HEAP32[i48 >> 2] | 0;
       do {
        if ((i42 | 0) != 0) {
         i48 = i42 + 8 | 0;
         i47 = i48 | 0;
         i43 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
         HEAP32[i47 >> 2] = i43;
         if ((i43 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
        }
       } while (0);
       i42 = HEAP32[i46 >> 2] | 0;
       do {
        if ((i42 | 0) != 0) {
         i48 = i42 + 8 | 0;
         i43 = i48 | 0;
         i47 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
         HEAP32[i43 >> 2] = i47;
         if ((i47 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
        }
       } while (0);
       i42 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
       i46 = i18 | 0;
       HEAP32[i46 >> 2] = i28;
       i48 = i28 + 8 | 0;
       HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
       FUNCTION_TABLE_viii[i42 & 3](i1, i18, 1);
       i42 = HEAP32[i46 >> 2] | 0;
       if ((i42 | 0) == 0) {
        break;
       }
       i46 = i42 + 8 | 0;
       i42 = i46 | 0;
       i48 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
       HEAP32[i42 >> 2] = i48;
       if ((i48 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     i46 = i23 | 0;
     HEAP32[i46 >> 2] = i40;
     i48 = (i52 | 0) == 0;
     if (!i48) {
      i42 = i52 + 8 | 0;
      HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand22appendBlockPlaceholderEN3WTF10PassRefPtrINS_7ElementEEE(i22, i1, i23);
     i42 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i42 | 0) != 0) {
       i47 = i42 + 8 | 0;
       i43 = i47 | 0;
       i45 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
       HEAP32[i43 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
      }
     } while (0);
     i42 = HEAP32[i46 >> 2] | 0;
     do {
      if ((i42 | 0) != 0) {
       i40 = i42 + 8 | 0;
       i47 = i40 | 0;
       i45 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
       HEAP32[i47 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i25, i52 | 0);
     __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i24, i25, 1, (HEAP8[i1 + 128 | 0] & 2) != 0);
     __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i27, i24);
     __ZN7WebCore16VisibleSelectionD2Ev(i24);
     i42 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i42 | 0) != 0) {
       i46 = i42 + 8 | 0;
       i40 = i46 | 0;
       i45 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
       HEAP32[i40 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     i42 = i26 | 0;
     i46 = HEAP32[i30 >> 2] | 0;
     HEAP32[i42 >> 2] = i46;
     if ((i46 | 0) != 0) {
      i45 = i46 + 8 | 0;
      HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
     }
     HEAP32[i26 + 4 >> 2] = HEAP32[i32 >> 2];
     i45 = HEAP32[i4 >> 2] | 0;
     i46 = i26 + 8 | 0;
     i40 = i46;
     i47 = HEAP32[i40 >> 2] & -8 | i45 & 7;
     HEAP32[i40 >> 2] = i47;
     HEAP8[i46] = i47 & 255 & -9 | i45 & 8;
     __ZN7WebCore12EditingStyle16prepareToApplyAtERKNS_8PositionENS0_30ShouldPreserveWritingDirectionE(i36, i26, 1);
     i45 = HEAP32[i42 >> 2] | 0;
     do {
      if ((i45 | 0) != 0) {
       i42 = i45 + 8 | 0;
       i47 = i42 | 0;
       i46 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
       HEAP32[i47 >> 2] = i46;
       if ((i46 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
      }
     } while (0);
     do {
      if (!(__ZNK7WebCore12EditingStyle7isEmptyEv(i36) | 0)) {
       i45 = HEAP32[i5 >> 2] | 0;
       i42 = __ZN3WTF10fastMallocEj(204) | 0;
       __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleENS_10EditActionENS0_14EPropertyLevelE(i42, i45, i36, 14, 0);
       i45 = i3 | 0;
       HEAP32[i45 >> 2] = i42;
       __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i3);
       i42 = HEAP32[i45 >> 2] | 0;
       if ((i42 | 0) == 0) {
        break;
       }
       i45 = i42 + 4 | 0;
       i42 = i45 | 0;
       i46 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
       if ((i46 | 0) != 0) {
        HEAP32[i42 >> 2] = i46;
        break;
       }
       i46 = i45 - 4 | 0;
       if ((i46 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 4 >> 2] & 15](i46);
      }
     } while (0);
     do {
      if (!i58) {
       i46 = i57 + 8 | 0;
       i45 = i46 | 0;
       i42 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
       HEAP32[i45 >> 2] = i42;
       if ((i42 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     do {
      if (!i55) {
       i46 = i54 + 8 | 0;
       i42 = i46 | 0;
       i45 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
       HEAP32[i42 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     if (i48) {
      i39 = 1;
      break;
     }
     i46 = i52 + 8 | 0;
     i45 = i46 | 0;
     i42 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
     HEAP32[i45 >> 2] = i42;
     if ((i42 | 0) >= 1) {
      i39 = 1;
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      i39 = 1;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     i39 = 1;
    }
   } while (0);
   i35 = i29 + 8 | 0;
   i34 = i35 | 0;
   i38 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i38;
   if ((i38 | 0) >= 1) {
    i37 = i39;
    break;
   }
   if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
    i37 = i39;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
   i37 = i39;
  }
 } while (0);
 do {
  if ((i31 | 0) != 0) {
   i39 = i31;
   i29 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i36);
    __ZN3WTF8fastFreeEPv(i31);
    break;
   } else {
    HEAP32[i39 >> 2] = i29;
    break;
   }
  }
 } while (0);
 i31 = i28 + 8 | 0;
 i28 = i31 | 0;
 i36 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
 HEAP32[i28 >> 2] = i36;
 if ((i36 | 0) >= 1) {
  i33 = i37;
  STACKTOP = i2;
  return i33 | 0;
 }
 if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
  i33 = i37;
  STACKTOP = i2;
  return i33 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
 i33 = i37;
 STACKTOP = i2;
 return i33 | 0;
}
function __ZN7WebCore20CompositeEditCommand29cloneParagraphUnderNewElementERNS_8PositionES2_PNS_4NodeEPNS_7ElementE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 if ((i4 | 0) != 0) {
  i16 = i4 + 8 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 do {
  if (__ZNK7WebCore4Node21isRootEditableElementEv(i4) | 0) {
   if ((i5 | 0) == 0) {
    i17 = 0;
    break;
   }
   i16 = i5 + 8 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   i17 = i5 | 0;
  } else {
   i16 = HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] | 0;
   i18 = __ZN7WebCore14isTableElementEPNS_4NodeE(i4) | 0;
   FUNCTION_TABLE_viii[i16 & 3](i7, i4, i18);
   i18 = i7 | 0;
   i16 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   i18 = i8 | 0;
   HEAP32[i18 >> 2] = i16;
   if ((i16 | 0) != 0) {
    i19 = i16 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   i19 = i9 | 0;
   HEAP32[i19 >> 2] = i5;
   if ((i5 | 0) != 0) {
    i20 = i5 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i1, i8, i9);
   i20 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i19 = i20 + 8 | 0;
     i21 = i19 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i20 = HEAP32[i18 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i17 = i16;
    break;
   }
   i19 = i20 + 8 | 0;
   i20 = i19 | 0;
   i22 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    i17 = i16;
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    i17 = i16;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   i17 = i16;
  }
 } while (0);
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) == (i4 | 0)) {
   i23 = i17;
  } else {
   if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0 | (i2 | 0) == 0) {
    i23 = i17;
    break;
   } else {
    i24 = 0;
    i25 = 0;
    i26 = 0;
    i27 = i2;
    i28 = 0;
   }
   L25 : while (1) {
    do {
     if ((i24 | 0) == (i25 | 0)) {
      i8 = i25 + 1 | 0;
      i5 = i8 + (i25 >>> 2) | 0;
      i7 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
      i5 = i7 >>> 0 > i8 >>> 0 ? i7 : i8;
      do {
       if (i25 >>> 0 < i5 >>> 0) {
        if (i5 >>> 0 > 1073741823 >>> 0) {
         i29 = 28;
         break L25;
        }
        i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
        i19 = i7 >>> 2;
        i22 = __ZN3WTF10fastMallocEj(i7) | 0;
        i7 = i22;
        i20 = i26;
        _memcpy(i22 | 0, i20 | 0, i25 << 2) | 0;
        if ((i26 | 0) == 0) {
         i30 = i7;
         i31 = i19;
         break;
        }
        i22 = (i7 | 0) == (i26 | 0);
        __ZN3WTF8fastFreeEPv(i20);
        i30 = i22 ? 0 : i7;
        i31 = i22 ? 0 : i19;
       } else {
        i30 = i26;
        i31 = i25;
       }
      } while (0);
      HEAP32[i30 + (i25 << 2) >> 2] = i27;
      if (i28) {
       i32 = i30;
       i33 = i31;
       i34 = i8;
       break;
      }
      i5 = i27 + 8 | 0;
      HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
      i32 = i30;
      i33 = i31;
      i34 = i8;
     } else {
      HEAP32[i26 + (i24 << 2) >> 2] = i27;
      if (!i28) {
       i5 = i27 + 8 | 0;
       HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
      }
      i32 = i26;
      i33 = i25;
      i34 = i24 + 1 | 0;
     }
    } while (0);
    i5 = HEAP32[i27 + 16 >> 2] | 0;
    i19 = i5 | 0;
    i22 = (i5 | 0) == 0;
    if ((i19 | 0) != (i4 | 0) & (i22 ^ 1)) {
     i24 = i34;
     i25 = i33;
     i26 = i32;
     i27 = i19;
     i28 = i22;
    } else {
     break;
    }
   }
   if ((i29 | 0) == 28) {
    _WTFCrash();
   }
   i16 = (i34 | 0) == 0;
   do {
    if (i16) {
     i35 = i17;
    } else {
     i18 = i10 | 0;
     i22 = i11 | 0;
     i19 = i12 | 0;
     i5 = i17;
     i7 = i34;
     while (1) {
      i20 = i7 - 1 | 0;
      if (i34 >>> 0 <= i20 >>> 0) {
       i29 = 35;
       break;
      }
      i21 = HEAP32[i32 + (i20 << 2) >> 2] | 0;
      i36 = HEAP32[(HEAP32[i21 >> 2] | 0) + 84 >> 2] | 0;
      i37 = __ZN7WebCore14isTableElementEPNS_4NodeE(i21) | 0;
      FUNCTION_TABLE_viii[i36 & 3](i10, i21, i37);
      i38 = HEAP32[i18 >> 2] | 0;
      HEAP32[i18 >> 2] = 0;
      HEAP32[i22 >> 2] = i38;
      if ((i38 | 0) != 0) {
       i37 = i38 + 8 | 0;
       HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
      }
      HEAP32[i19 >> 2] = i5;
      i37 = (i5 | 0) == 0;
      if (!i37) {
       i21 = i5 + 8 | 0;
       HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
      }
      __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i1, i11, i12);
      i21 = HEAP32[i19 >> 2] | 0;
      do {
       if ((i21 | 0) != 0) {
        i36 = i21 + 8 | 0;
        i39 = i36 | 0;
        i40 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
        HEAP32[i39 >> 2] = i40;
        if ((i40 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
       }
      } while (0);
      i21 = HEAP32[i22 >> 2] | 0;
      do {
       if ((i21 | 0) != 0) {
        i8 = i21 + 8 | 0;
        i36 = i8 | 0;
        i40 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
        HEAP32[i36 >> 2] = i40;
        if ((i40 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
       }
      } while (0);
      do {
       if (!i37) {
        i21 = i5 + 8 | 0;
        i8 = i21 | 0;
        i40 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
        HEAP32[i8 >> 2] = i40;
        if ((i40 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
       }
      } while (0);
      if ((i20 | 0) == 0) {
       break;
      } else {
       i5 = i38;
       i7 = i20;
      }
     }
     if ((i29 | 0) == 35) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     if (i16) {
      i35 = i38;
      break;
     }
     i7 = i32 + (i34 << 2) | 0;
     i5 = i32;
     while (1) {
      i22 = HEAP32[i5 >> 2] | 0;
      do {
       if ((i22 | 0) != 0) {
        i19 = i22 + 8 | 0;
        i18 = i19 | 0;
        i37 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
        HEAP32[i18 >> 2] = i37;
        if ((i37 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
       }
      } while (0);
      i22 = i5 + 4 | 0;
      if ((i22 | 0) == (i7 | 0)) {
       i35 = i38;
       break;
      } else {
       i5 = i22;
      }
     }
    }
   } while (0);
   if ((i32 | 0) == 0) {
    i23 = i35;
    break;
   }
   __ZN3WTF8fastFreeEPv(i32);
   i23 = i35;
  }
 } while (0);
 i35 = HEAP32[i9 >> 2] | 0;
 i32 = i3 | 0;
 i3 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i35 | 0) == (i3 | 0)) {
   i41 = i4;
   i42 = i23;
  } else {
   if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i35, i3) | 0) {
    i41 = i4;
    i42 = i23;
    break;
   }
   if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(HEAP32[i32 >> 2] | 0, i4) | 0) {
    i43 = i4;
   } else {
    i38 = i4;
    while (1) {
     i34 = HEAP32[i38 + 16 >> 2] | 0;
     i29 = i34 | 0;
     if ((i34 | 0) != 0) {
      i12 = i34 + 8 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     }
     do {
      if ((i38 | 0) != 0) {
       i12 = i38 + 8 | 0;
       i34 = i12 | 0;
       i11 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
       HEAP32[i34 >> 2] = i11;
       if ((i11 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
      }
     } while (0);
     if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(HEAP32[i32 >> 2] | 0, i29) | 0) {
      i43 = i29;
      break;
     } else {
      i38 = i29;
     }
    }
   }
   i38 = HEAP32[i9 >> 2] | 0;
   if ((i38 | 0) != 0) {
    i12 = i38 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   L101 : do {
    if ((i38 | 0) == (i43 | 0)) {
     i44 = i23;
     i45 = i38;
    } else {
     i12 = HEAP32[i38 + 28 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i11 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i38, i43) | 0;
      if ((i11 | 0) == 0) {
       i44 = i23;
       i45 = i38;
       break;
      } else {
       i46 = i11;
      }
     } else {
      i46 = i12;
     }
     i12 = i46 + 8 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     i12 = i13 | 0;
     i11 = i14 | 0;
     i34 = i15 | 0;
     i10 = i23;
     i17 = i38;
     i28 = i46;
     while (1) {
      i27 = HEAP32[i17 + 16 >> 2] | 0;
      i26 = i28 + 16 | 0;
      if ((i27 | 0) == (HEAP32[i26 >> 2] | 0)) {
       i47 = i10;
       i48 = i17;
      } else {
       i33 = i10;
       i25 = i17;
       i24 = i27;
       while (1) {
        i27 = i24 | 0;
        if ((i24 | 0) != 0) {
         i31 = i24 + 8 | 0;
         HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
        }
        do {
         if ((i25 | 0) != 0) {
          i31 = i25 + 8 | 0;
          i30 = i31 | 0;
          i2 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
          HEAP32[i30 >> 2] = i2;
          if ((i2 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
         }
        } while (0);
        i31 = HEAP32[i33 + 16 >> 2] | 0;
        i2 = i31 | 0;
        if ((i31 | 0) != 0) {
         i30 = i31 + 8 | 0;
         HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
        }
        do {
         if ((i33 | 0) != 0) {
          i30 = i33 + 8 | 0;
          i31 = i30 | 0;
          i16 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
          HEAP32[i31 >> 2] = i16;
          if ((i16 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
         }
        } while (0);
        i30 = HEAP32[i24 + 16 >> 2] | 0;
        if ((i30 | 0) == (HEAP32[i26 >> 2] | 0)) {
         i47 = i2;
         i48 = i27;
         break;
        } else {
         i33 = i2;
         i25 = i27;
         i24 = i30;
        }
       }
      }
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i28 >> 2] | 0) + 84 >> 2] & 3](i13, i28, 1);
      i49 = HEAP32[i12 >> 2] | 0;
      HEAP32[i12 >> 2] = 0;
      HEAP32[i11 >> 2] = i49;
      if ((i49 | 0) != 0) {
       i24 = i49 + 8 | 0;
       HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
      }
      HEAP32[i34 >> 2] = i47;
      i24 = (i47 | 0) == 0;
      if (!i24) {
       i25 = i47 + 8 | 0;
       HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
      }
      __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i1, i14, i15);
      i25 = HEAP32[i34 >> 2] | 0;
      do {
       if ((i25 | 0) != 0) {
        i33 = i25 + 8 | 0;
        i26 = i33 | 0;
        i30 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
        HEAP32[i26 >> 2] = i30;
        if ((i30 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
       }
      } while (0);
      i25 = HEAP32[i11 >> 2] | 0;
      do {
       if ((i25 | 0) != 0) {
        i33 = i25 + 8 | 0;
        i30 = i33 | 0;
        i26 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
        HEAP32[i30 >> 2] = i26;
        if ((i26 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
       }
      } while (0);
      do {
       if (!i24) {
        i25 = i47 + 8 | 0;
        i33 = i25 | 0;
        i26 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
        HEAP32[i33 >> 2] = i26;
        if ((i26 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
       }
      } while (0);
      i24 = HEAP32[i32 >> 2] | 0;
      if ((i28 | 0) == (i24 | 0)) {
       break;
      }
      if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i24, i28) | 0) {
       break;
      }
      do {
       if ((i28 | 0) == (i43 | 0)) {
        i50 = 0;
       } else {
        i24 = HEAP32[i28 + 28 >> 2] | 0;
        if ((i24 | 0) == 0) {
         i25 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i28, i43) | 0;
         if ((i25 | 0) == 0) {
          i50 = 0;
          break;
         } else {
          i51 = i25;
         }
        } else {
         i51 = i24;
        }
        i24 = i51 + 8 | 0;
        HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
        i50 = i51;
       }
      } while (0);
      i24 = i28 + 8 | 0;
      i25 = i24 - 8 | 0;
      i26 = i24 | 0;
      i33 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i33;
      do {
       if ((i33 | 0) < 1) {
        if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i25);
       }
      } while (0);
      if ((i50 | 0) == 0) {
       i44 = i49;
       i45 = i48;
       break L101;
      } else {
       i10 = i49;
       i17 = i48;
       i28 = i50;
      }
     }
     i17 = i28 + 8 | 0;
     i10 = i17 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      i44 = i49;
      i45 = i48;
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      i44 = i49;
      i45 = i48;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     i44 = i49;
     i45 = i48;
    }
   } while (0);
   if ((i45 | 0) == 0) {
    i41 = i43;
    i42 = i44;
    break;
   }
   i38 = i45 + 8 | 0;
   i17 = i38 | 0;
   i11 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    i41 = i43;
    i42 = i44;
    break;
   }
   if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
    i41 = i43;
    i42 = i44;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
   i41 = i43;
   i42 = i44;
  }
 } while (0);
 do {
  if ((i41 | 0) != 0) {
   i44 = i41 + 8 | 0;
   i43 = i44 | 0;
   i45 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
   HEAP32[i43 >> 2] = i45;
   if ((i45 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
  }
 } while (0);
 if ((i42 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i41 = i42 + 8 | 0;
 i42 = i41 | 0;
 i44 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
 HEAP32[i42 >> 2] = i44;
 if ((i44 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore20CompositeEditCommand38positionAvoidingSpecialElementBoundaryERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 64 | 0;
 i11 = i4 + 80 | 0;
 i12 = i4 + 96 | 0;
 i13 = i4 + 112 | 0;
 i14 = i4 + 128 | 0;
 i15 = i4 + 144 | 0;
 i16 = i4 + 160 | 0;
 i17 = i3 | 0;
 if ((HEAP32[i17 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
  i18 = HEAP32[i3 + 8 >> 2] | 0;
  i19 = i1 + 8 | 0;
  i20 = i19;
  i21 = HEAP32[i20 >> 2] & -8 | i18 & 7;
  HEAP32[i20 >> 2] = i21;
  HEAP8[i19] = i21 & 255 & -9 | i18 & 8;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i3, 1);
 i18 = __ZN7WebCore22enclosingAnchorElementERKNS_8PositionE(i3) | 0;
 i21 = i8 | 0;
 i19 = HEAP32[i17 >> 2] | 0;
 HEAP32[i21 >> 2] = i19;
 if ((i19 | 0) == 0) {
  i20 = i8 + 8 | 0;
  i22 = 0;
  i23 = i20;
  i24 = i20;
 } else {
  i20 = i19 + 8 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
  i20 = i8 + 8 | 0;
  i19 = i20;
  i22 = HEAP32[i19 >> 2] & -8;
  i23 = i20;
  i24 = i19;
 }
 i19 = i8 + 4 | 0;
 i20 = i3 + 4 | 0;
 i25 = HEAP32[i20 >> 2] | 0;
 HEAP32[i19 >> 2] = i25;
 i26 = i3 + 8 | 0;
 i27 = HEAP32[i26 >> 2] | 0;
 i28 = i22 | i27 & 7;
 HEAP32[i24 >> 2] = i28;
 HEAP8[i23] = i28 & 255 & -9 | i27 & 8;
 L9 : do {
  if ((i18 | 0) == 0) {
   i27 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   HEAP32[i1 >> 2] = i27;
   HEAP32[i1 + 4 >> 2] = i25;
   i27 = HEAP32[i24 >> 2] | 0;
   i28 = i1 + 8 | 0;
   i22 = i28;
   i29 = HEAP32[i22 >> 2] & -8 | i27 & 7;
   HEAP32[i22 >> 2] = i29;
   HEAP8[i28] = i29 & 255 & -9 | i27 & 8;
  } else {
   i27 = i18 | 0;
   do {
    if (!(__ZN7WebCore7isBlockEPKNS_4NodeE(i27) | 0)) {
     __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i10, i27);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i10, 1);
     i29 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i29 | 0) != 0) {
       i28 = i29 + 8 | 0;
       i22 = i28 | 0;
       i30 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i30;
       if ((i30 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore18lastPositionInNodeEPNS_4NodeE(i12, i27);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i12, 1);
     i29 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i29 | 0) != 0) {
       i28 = i29 + 8 | 0;
       i30 = i28 | 0;
       i22 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       HEAP32[i30 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     L24 : do {
      if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i7, i11) | 0) {
       i29 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i29 | 0) == (i27 | 0)) {
         i31 = i18;
        } else {
         if ((HEAP32[i29 + 16 >> 2] | 0) == (i18 | 0)) {
          i31 = i18;
          break;
         }
         __ZN7WebCore20CompositeEditCommand21pushAnchorElementDownERNS_7ElementE(i2, i18);
         i28 = __ZN7WebCore22enclosingAnchorElementERKNS_8PositionE(i3) | 0;
         if ((i28 | 0) != 0) {
          i31 = i28;
          break;
         }
         i28 = HEAP32[i17 >> 2] | 0;
         HEAP32[i1 >> 2] = i28;
         if ((i28 | 0) != 0) {
          i22 = i28 + 8 | 0;
          HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
         }
         HEAP32[i1 + 4 >> 2] = HEAP32[i20 >> 2];
         i22 = HEAP32[i26 >> 2] | 0;
         i28 = i1 + 8 | 0;
         i30 = i28;
         i32 = HEAP32[i30 >> 2] & -8 | i22 & 7;
         HEAP32[i30 >> 2] = i32;
         HEAP8[i28] = i32 & 255 & -9 | i22 & 8;
         i33 = 1;
         break L24;
        }
       } while (0);
       i29 = i14 | 0;
       i22 = HEAP32[i7 >> 2] | 0;
       HEAP32[i29 >> 2] = i22;
       if ((i22 | 0) != 0) {
        i32 = i22 + 8 | 0;
        HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
       }
       HEAP32[i14 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
       i32 = HEAP32[i7 + 8 >> 2] | 0;
       i22 = i14 + 8 | 0;
       i28 = i22;
       i30 = HEAP32[i28 >> 2] & -8 | i32 & 7;
       HEAP32[i28 >> 2] = i30;
       HEAP8[i22] = i30 & 255 & -9 | i32 & 8;
       __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i13, i14, 1);
       i32 = HEAP32[i29 >> 2] | 0;
       do {
        if ((i32 | 0) != 0) {
         i29 = i32 + 8 | 0;
         i30 = i29 | 0;
         i22 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
         HEAP32[i30 >> 2] = i22;
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
        if (__ZN7WebCore32lineBreakExistsAtVisiblePositionERKNS_15VisiblePositionE(i7) | 0) {
         i32 = i31 | 0;
         if (!(__ZNK7WebCore4Node14isDescendantOfEPKS0_(HEAP32[i13 >> 2] | 0, i32) | 0)) {
          i34 = i32;
          i35 = 36;
          break;
         }
         i32 = HEAP32[i17 >> 2] | 0;
         HEAP32[i1 >> 2] = i32;
         if ((i32 | 0) != 0) {
          i29 = i32 + 8 | 0;
          HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
         }
         HEAP32[i1 + 4 >> 2] = HEAP32[i20 >> 2];
         i29 = HEAP32[i26 >> 2] | 0;
         i32 = i1 + 8 | 0;
         i22 = i32;
         i30 = HEAP32[i22 >> 2] & -8 | i29 & 7;
         HEAP32[i22 >> 2] = i30;
         HEAP8[i32] = i30 & 255 & -9 | i29 & 8;
         i36 = 1;
        } else {
         i34 = i31 | 0;
         i35 = 36;
        }
       } while (0);
       do {
        if ((i35 | 0) == 36) {
         i29 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i34) | 0;
         i30 = i5 | 0;
         HEAP32[i30 >> 2] = i29;
         if ((i29 | 0) != 0) {
          i32 = i29 + 8 | 0;
          HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
         }
         __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i15, i5, (__ZNK7WebCore4Node9nodeIndexEv(i34) | 0) + 1 | 0, 0);
         i32 = HEAP32[i30 >> 2] | 0;
         do {
          if ((i32 | 0) != 0) {
           i30 = i32 + 8 | 0;
           i29 = i30 | 0;
           i22 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
           HEAP32[i29 >> 2] = i22;
           if ((i22 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
          }
         } while (0);
         i32 = i15 | 0;
         i30 = HEAP32[i32 >> 2] | 0;
         HEAP32[i32 >> 2] = 0;
         i22 = HEAP32[i21 >> 2] | 0;
         HEAP32[i21 >> 2] = i30;
         do {
          if ((i22 | 0) != 0) {
           i30 = i22 + 8 | 0;
           i29 = i30 | 0;
           i28 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
           HEAP32[i29 >> 2] = i28;
           if ((i28 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
          }
         } while (0);
         HEAP32[i19 >> 2] = HEAP32[i15 + 4 >> 2];
         i22 = HEAP32[i15 + 8 >> 2] | 0;
         i30 = HEAP32[i24 >> 2] & -8 | i22 & 7;
         HEAP32[i24 >> 2] = i30;
         HEAP8[i23] = i30 & 255 & -9 | i22 & 8;
         i22 = HEAP32[i32 >> 2] | 0;
         if ((i22 | 0) == 0) {
          i36 = 0;
          break;
         }
         i30 = i22 + 8 | 0;
         i22 = i30 | 0;
         i28 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
         HEAP32[i22 >> 2] = i28;
         if ((i28 | 0) >= 1) {
          i36 = 0;
          break;
         }
         if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
          i36 = 0;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
         i36 = 0;
        }
       } while (0);
       i30 = HEAP32[i13 >> 2] | 0;
       do {
        if ((i30 | 0) != 0) {
         i28 = i30 + 8 | 0;
         i22 = i28 | 0;
         i29 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
         HEAP32[i22 >> 2] = i29;
         if ((i29 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
        }
       } while (0);
       if ((i36 | 0) == 0) {
        i37 = i31;
        i35 = 55;
       } else {
        i33 = 1;
       }
      } else {
       i37 = i18;
       i35 = 55;
      }
     } while (0);
     do {
      if ((i35 | 0) == 55) {
       if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i7, i9) | 0)) {
        i33 = 0;
        break;
       }
       i30 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i30 | 0) == (i37 | 0)) {
         i38 = i37;
        } else {
         if ((HEAP32[i30 + 16 >> 2] | 0) == (i37 | 0)) {
          i38 = i37;
          break;
         }
         __ZN7WebCore20CompositeEditCommand21pushAnchorElementDownERNS_7ElementE(i2, i37);
         i38 = __ZN7WebCore22enclosingAnchorElementERKNS_8PositionE(i3) | 0;
        }
       } while (0);
       if ((i38 | 0) == 0) {
        i30 = HEAP32[i17 >> 2] | 0;
        HEAP32[i1 >> 2] = i30;
        if ((i30 | 0) != 0) {
         i28 = i30 + 8 | 0;
         HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
        }
        HEAP32[i1 + 4 >> 2] = HEAP32[i20 >> 2];
        i28 = HEAP32[i26 >> 2] | 0;
        i30 = i1 + 8 | 0;
        i29 = i30;
        i22 = HEAP32[i29 >> 2] & -8 | i28 & 7;
        HEAP32[i29 >> 2] = i22;
        HEAP8[i30] = i22 & 255 & -9 | i28 & 8;
        i33 = 1;
        break;
       }
       i28 = i38 | 0;
       i22 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i28) | 0;
       i30 = i6 | 0;
       HEAP32[i30 >> 2] = i22;
       if ((i22 | 0) != 0) {
        i29 = i22 + 8 | 0;
        HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
       }
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i16, i6, __ZNK7WebCore4Node9nodeIndexEv(i28) | 0, 0);
       i28 = HEAP32[i30 >> 2] | 0;
       do {
        if ((i28 | 0) != 0) {
         i30 = i28 + 8 | 0;
         i29 = i30 | 0;
         i22 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
         HEAP32[i29 >> 2] = i22;
         if ((i22 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
        }
       } while (0);
       i28 = i16 | 0;
       i30 = HEAP32[i28 >> 2] | 0;
       HEAP32[i28 >> 2] = 0;
       i22 = HEAP32[i21 >> 2] | 0;
       HEAP32[i21 >> 2] = i30;
       do {
        if ((i22 | 0) != 0) {
         i30 = i22 + 8 | 0;
         i29 = i30 | 0;
         i39 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
         HEAP32[i29 >> 2] = i39;
         if ((i39 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
        }
       } while (0);
       HEAP32[i19 >> 2] = HEAP32[i16 + 4 >> 2];
       i22 = HEAP32[i16 + 8 >> 2] | 0;
       i30 = HEAP32[i24 >> 2] & -8 | i22 & 7;
       HEAP32[i24 >> 2] = i30;
       HEAP8[i23] = i30 & 255 & -9 | i22 & 8;
       i22 = HEAP32[i28 >> 2] | 0;
       if ((i22 | 0) == 0) {
        i33 = 0;
        break;
       }
       i30 = i22 + 8 | 0;
       i22 = i30 | 0;
       i39 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i39;
       if ((i39 | 0) >= 1) {
        i33 = 0;
        break;
       }
       if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
        i33 = 0;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
       i33 = 0;
      }
     } while (0);
     i30 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i30 | 0) != 0) {
       i39 = i30 + 8 | 0;
       i22 = i39 | 0;
       i29 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i29;
       if ((i29 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
      }
     } while (0);
     i30 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i30 | 0) != 0) {
       i39 = i30 + 8 | 0;
       i29 = i39 | 0;
       i22 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       HEAP32[i29 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
      }
     } while (0);
     if ((i33 | 0) == 0) {
      break;
     }
     i30 = HEAP32[i21 >> 2] | 0;
     if ((i30 | 0) == 0) {
      break L9;
     }
     i39 = i30 + 8 | 0;
     i30 = i39 | 0;
     i22 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     HEAP32[i30 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break L9;
     }
     if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
      break L9;
     }
     __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
     break L9;
    }
   } while (0);
   do {
    if ((HEAP32[i21 >> 2] | 0) == 0) {
     i35 = 89;
    } else {
     if ((__ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i8, 0) | 0) == 0) {
      i35 = 89;
      break;
     }
     i40 = HEAP32[i19 >> 2] | 0;
    }
   } while (0);
   if ((i35 | 0) == 89) {
    i27 = HEAP32[i17 >> 2] | 0;
    if ((i27 | 0) != 0) {
     i39 = i27 + 8 | 0;
     HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
    }
    i39 = HEAP32[i21 >> 2] | 0;
    HEAP32[i21 >> 2] = i27;
    do {
     if ((i39 | 0) != 0) {
      i27 = i39 + 8 | 0;
      i22 = i27 | 0;
      i30 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      HEAP32[i22 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
     }
    } while (0);
    i39 = HEAP32[i20 >> 2] | 0;
    HEAP32[i19 >> 2] = i39;
    i27 = HEAP32[i26 >> 2] | 0;
    i30 = HEAP32[i24 >> 2] & -8 | i27 & 7;
    HEAP32[i24 >> 2] = i30;
    HEAP8[i23] = i30 & 255 & -9 | i27 & 8;
    i40 = i39;
   }
   i39 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   HEAP32[i1 >> 2] = i39;
   HEAP32[i1 + 4 >> 2] = i40;
   i39 = HEAP32[i24 >> 2] | 0;
   i27 = i1 + 8 | 0;
   i30 = i27;
   i22 = HEAP32[i30 >> 2] & -8 | i39 & 7;
   HEAP32[i30 >> 2] = i22;
   HEAP8[i27] = i22 & 255 & -9 | i39 & 8;
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 + 8 | 0;
 i1 = i7 | 0;
 i24 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i24;
 if ((i24 | 0) >= 1) {
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
function __ZN7WebCore20CompositeEditCommand39breakOutOfEmptyMailBlockquotedParagraphEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 64 | 0;
 i9 = i2 + 80 | 0;
 i10 = i2 + 88 | 0;
 i11 = i2 + 96 | 0;
 i12 = i2 + 104 | 0;
 i13 = i2 + 120 | 0;
 i14 = i2 + 136 | 0;
 i15 = i2 + 144 | 0;
 i16 = i2 + 152 | 0;
 i17 = i2 + 160 | 0;
 i18 = i2 + 224 | 0;
 i19 = i2 + 240 | 0;
 i20 = i2 + 256 | 0;
 i21 = i2 + 264 | 0;
 i22 = i1 | 0;
 if ((HEAP32[i1 + 124 >> 2] | 0) != 1) {
  i23 = 0;
  STACKTOP = i2;
  return i23 | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i1 + 96 | 0, HEAP32[i1 + 120 >> 2] | 0);
 i24 = i6 | 0;
 i25 = i5 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 HEAP32[i24 >> 2] = i26;
 if ((i26 | 0) == 0) {
  i27 = i6 + 8 | 0;
  i28 = 0;
  i29 = i27;
  i30 = i27;
 } else {
  i27 = i26 + 8 | 0;
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
  i27 = i6 + 8 | 0;
  i26 = i27;
  i28 = HEAP32[i26 >> 2] & -8;
  i29 = i27;
  i30 = i26;
 }
 i26 = i5 + 4 | 0;
 HEAP32[i6 + 4 >> 2] = HEAP32[i26 >> 2];
 i27 = i5 + 8 | 0;
 i31 = HEAP32[i27 >> 2] | 0;
 i32 = i28 | i31 & 7;
 HEAP32[i30 >> 2] = i32;
 HEAP8[i29] = i32 & 255 & -9 | i31 & 8;
 i31 = __ZN7WebCore26highestEnclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleEPS3_(i6, F_BASE_ii + 6 | 0, 1, 0) | 0;
 i6 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i24 = i6 + 8 | 0;
   i32 = i24 | 0;
   i29 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   HEAP32[i32 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 do {
  if ((i31 | 0) == 0) {
   i33 = 0;
  } else {
   if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, 1) | 0)) {
    i33 = 0;
    break;
   }
   if (!(__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, 1) | 0)) {
    i33 = 0;
    break;
   }
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i7, i5, 1);
   i6 = i8 | 0;
   i24 = i7 | 0;
   i29 = HEAP32[i24 >> 2] | 0;
   HEAP32[i6 >> 2] = i29;
   if ((i29 | 0) != 0) {
    i32 = i29 + 8 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
   }
   HEAP32[i8 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   i32 = HEAP32[i7 + 8 >> 2] | 0;
   i29 = i8 + 8 | 0;
   i30 = i29;
   i28 = HEAP32[i30 >> 2] & -8 | i32 & 7;
   HEAP32[i30 >> 2] = i28;
   HEAP8[i29] = i28 & 255 & -9 | i32 & 8;
   i32 = (__ZN7WebCore19enclosingNodeOfTypeERKNS_8PositionEPFbPKNS_4NodeEENS_27EditingBoundaryCrossingRuleE(i8, F_BASE_ii + 6 | 0, 1) | 0) == 0;
   i28 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i6 = i28 + 8 | 0;
     i29 = i6 | 0;
     i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     HEAP32[i29 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
    }
   } while (0);
   do {
    if (i32) {
     i28 = i1 + 8 | 0;
     __ZN7WebCore18createBreakElementERNS_8DocumentE(i9, HEAP32[i28 >> 2] | 0);
     i6 = i9 | 0;
     i30 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = 0;
     i6 = i30 | 0;
     i29 = i10 | 0;
     HEAP32[i29 >> 2] = i6;
     i34 = (i30 | 0) == 0;
     if (!i34) {
      i35 = i30 + 8 | 0;
      HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
     }
     i35 = i11 | 0;
     HEAP32[i35 >> 2] = i31;
     i36 = i31 + 8 | 0;
     HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
     __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i1, i10, i11, 1);
     i36 = HEAP32[i35 >> 2] | 0;
     do {
      if ((i36 | 0) != 0) {
       i35 = i36 + 8 | 0;
       i37 = i35 | 0;
       i38 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       HEAP32[i37 >> 2] = i38;
       if ((i38 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
      }
     } while (0);
     i36 = HEAP32[i29 >> 2] | 0;
     do {
      if ((i36 | 0) != 0) {
       i35 = i36 + 8 | 0;
       i38 = i35 | 0;
       i37 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
       HEAP32[i38 >> 2] = i37;
       if ((i37 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
      }
     } while (0);
     i36 = i3 | 0;
     HEAP32[i36 >> 2] = i6;
     if (!i34) {
      i29 = i30 + 8 | 0;
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
     }
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i13, i3, 1);
     i29 = HEAP32[i36 >> 2] | 0;
     do {
      if ((i29 | 0) != 0) {
       i36 = i29 + 8 | 0;
       i35 = i36 | 0;
       i37 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
       HEAP32[i35 >> 2] = i37;
       if ((i37 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i12, i13, 1);
     i29 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i29 | 0) != 0) {
       i36 = i29 + 8 | 0;
       i37 = i36 | 0;
       i35 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       HEAP32[i37 >> 2] = i35;
       if ((i35 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
      }
     } while (0);
     do {
      if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i12, 1) | 0)) {
       __ZN7WebCore18createBreakElementERNS_8DocumentE(i15, HEAP32[i28 >> 2] | 0);
       i29 = i14 | 0;
       i36 = i15 | 0;
       i35 = HEAP32[i36 >> 2] | 0;
       HEAP32[i36 >> 2] = 0;
       HEAP32[i29 >> 2] = i35;
       i35 = i16 | 0;
       HEAP32[i35 >> 2] = i6;
       if (!i34) {
        i37 = i30 + 8 | 0;
        HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
       }
       __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i1, i14, i16, 1);
       i37 = HEAP32[i35 >> 2] | 0;
       do {
        if ((i37 | 0) != 0) {
         i35 = i37 + 8 | 0;
         i38 = i35 | 0;
         i39 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
         HEAP32[i38 >> 2] = i39;
         if ((i39 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
        }
       } while (0);
       i37 = HEAP32[i29 >> 2] | 0;
       do {
        if ((i37 | 0) != 0) {
         i35 = i37 + 8 | 0;
         i39 = i35 | 0;
         i38 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
         HEAP32[i39 >> 2] = i38;
         if ((i38 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
        }
       } while (0);
       i37 = HEAP32[i36 >> 2] | 0;
       if ((i37 | 0) == 0) {
        break;
       }
       i29 = i37 + 8 | 0;
       i37 = i29 | 0;
       i35 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       HEAP32[i37 >> 2] = i35;
       if ((i35 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i17, i12, (HEAP8[i1 + 128 | 0] & 2) != 0);
     __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i22, i17);
     __ZN7WebCore16VisibleSelectionD2Ev(i17);
     do {
      if (__ZN7WebCore32lineBreakExistsAtVisiblePositionERKNS_15VisiblePositionE(i5) | 0) {
       i6 = i19 | 0;
       i28 = HEAP32[i25 >> 2] | 0;
       HEAP32[i6 >> 2] = i28;
       if ((i28 | 0) != 0) {
        i29 = i28 + 8 | 0;
        HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
       }
       HEAP32[i19 + 4 >> 2] = HEAP32[i26 >> 2];
       i29 = HEAP32[i27 >> 2] | 0;
       i28 = i19 + 8 | 0;
       i35 = i28;
       i37 = HEAP32[i35 >> 2] & -8 | i29 & 7;
       HEAP32[i35 >> 2] = i37;
       HEAP8[i28] = i37 & 255 & -9 | i29 & 8;
       __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i18, i19, 1);
       i29 = HEAP32[i6 >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         i6 = i29 + 8 | 0;
         i37 = i6 | 0;
         i28 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
         HEAP32[i37 >> 2] = i28;
         if ((i28 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
        }
       } while (0);
       i29 = i18 | 0;
       i36 = HEAP32[i29 >> 2] | 0;
       i6 = HEAP32[i36 + 12 >> 2] | 0;
       do {
        if ((i6 & 4 | 0) == 0) {
         i40 = 71;
        } else {
         i28 = HEAP32[i36 + 44 >> 2] | 0;
         i37 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
         if ((i28 | 0) != (i37 | 0)) {
          if ((HEAP32[i28 + 12 >> 2] | 0) != (HEAP32[i37 + 12 >> 2] | 0)) {
           i40 = 71;
           break;
          }
          if ((HEAP32[i28 + 16 >> 2] | 0) != (HEAP32[i37 + 16 >> 2] | 0)) {
           i40 = 71;
           break;
          }
         }
         i37 = i20 | 0;
         HEAP32[i37 >> 2] = i36;
         if ((i36 | 0) != 0) {
          i28 = i36 + 8 | 0;
          HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
         }
         __ZN7WebCore20CompositeEditCommand27removeNodeAndPruneAncestorsEN3WTF10PassRefPtrINS_4NodeEEE(i1, i20);
         i28 = HEAP32[i37 >> 2] | 0;
         if ((i28 | 0) == 0) {
          break;
         }
         i37 = i28 + 8 | 0;
         i28 = i37 | 0;
         i35 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
         HEAP32[i28 >> 2] = i35;
         if ((i35 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
        }
       } while (0);
       do {
        if ((i40 | 0) == 71) {
         if ((i6 & 1 | 0) == 0) {
          break;
         }
         i37 = HEAP32[i36 + 16 >> 2] | 0;
         i35 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
         i28 = i21 | 0;
         HEAP32[i28 >> 2] = i36;
         if ((i36 | 0) != 0) {
          i38 = i36 + 8 | 0;
          HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
         }
         FUNCTION_TABLE_viiii[i35 & 3](i1, i21, 0, 1);
         i35 = HEAP32[i28 >> 2] | 0;
         do {
          if ((i35 | 0) != 0) {
           i28 = i35 + 8 | 0;
           i38 = i28 | 0;
           i39 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
           HEAP32[i38 >> 2] = i39;
           if ((i39 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
          }
         } while (0);
         i35 = (i37 | 0) == 0;
         if (!i35) {
          i28 = i37 + 8 | 0;
          HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
         }
         i28 = __ZN7WebCore28highestNodeToRemoveInPruningEPNS_4NodeE(i37 | 0) | 0;
         do {
          if ((i28 | 0) != 0) {
           i39 = i28 + 8 | 0;
           HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
           i39 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
           i38 = i4 | 0;
           HEAP32[i38 >> 2] = i28;
           FUNCTION_TABLE_viii[i39 & 3](i1, i4, 1);
           i39 = HEAP32[i38 >> 2] | 0;
           if ((i39 | 0) == 0) {
            break;
           }
           i38 = i39 + 8 | 0;
           i39 = i38 | 0;
           i41 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
           HEAP32[i39 >> 2] = i41;
           if ((i41 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
          }
         } while (0);
         if (i35) {
          break;
         }
         i28 = i37 + 8 | 0;
         i38 = i28 | 0;
         i41 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
         HEAP32[i38 >> 2] = i41;
         if ((i41 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
        }
       } while (0);
       i36 = HEAP32[i29 >> 2] | 0;
       if ((i36 | 0) == 0) {
        i42 = 1;
        break;
       }
       i6 = i36 + 8 | 0;
       i36 = i6 | 0;
       i28 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
       HEAP32[i36 >> 2] = i28;
       if ((i28 | 0) >= 1) {
        i42 = 1;
        break;
       }
       if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
        i42 = 1;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
       i42 = 1;
      } else {
       i42 = 0;
      }
     } while (0);
     i6 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i28 = i6 + 8 | 0;
       i36 = i28 | 0;
       i41 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
       HEAP32[i36 >> 2] = i41;
       if ((i41 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
      }
     } while (0);
     if (i34) {
      i43 = i42;
      break;
     }
     i6 = i30 + 8 | 0;
     i28 = i6 | 0;
     i41 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i41;
     if ((i41 | 0) >= 1) {
      i43 = i42;
      break;
     }
     if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
      i43 = i42;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     i43 = i42;
    } else {
     i43 = 0;
    }
   } while (0);
   i32 = HEAP32[i24 >> 2] | 0;
   if ((i32 | 0) == 0) {
    i33 = i43;
    break;
   }
   i6 = i32 + 8 | 0;
   i32 = i6 | 0;
   i41 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   HEAP32[i32 >> 2] = i41;
   if ((i41 | 0) >= 1) {
    i33 = i43;
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    i33 = i43;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   i33 = i43;
  }
 } while (0);
 i43 = HEAP32[i25 >> 2] | 0;
 if ((i43 | 0) == 0) {
  i23 = i33;
  STACKTOP = i2;
  return i23 | 0;
 }
 i25 = i43 + 8 | 0;
 i43 = i25 | 0;
 i42 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
 HEAP32[i43 >> 2] = i42;
 if ((i42 | 0) >= 1) {
  i23 = i33;
  STACKTOP = i2;
  return i23 | 0;
 }
 if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
  i23 = i33;
  STACKTOP = i2;
  return i23 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
 i23 = i33;
 STACKTOP = i2;
 return i23 | 0;
}
function __ZNSt3__16__sortIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEvT0_SA_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = i1;
 i1 = i2;
 L1 : while (1) {
  i2 = i1;
  i5 = i1 - 4 | 0;
  i6 = i4;
  L3 : while (1) {
   i7 = i6;
   i8 = i2 - i7 | 0;
   i9 = i8 >> 2;
   switch (i9 | 0) {
   case 2:
    {
     i10 = 4;
     break L1;
     break;
    }
   case 3:
    {
     i10 = 6;
     break L1;
     break;
    }
   case 4:
    {
     i10 = 14;
     break L1;
     break;
    }
   case 5:
    {
     i10 = 15;
     break L1;
     break;
    }
   case 0:
   case 1:
    {
     i10 = 85;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i8 | 0) < 124) {
    i10 = 21;
    break L1;
   }
   i11 = (i9 | 0) / 2 & -1;
   i12 = i6 + (i11 << 2) | 0;
   do {
    if ((i8 | 0) > 3996) {
     i13 = (i9 | 0) / 4 & -1;
     i14 = i6 + (i13 << 2) | 0;
     i15 = i6 + (i13 + i11 << 2) | 0;
     i13 = __ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_(i6, i14, i12, i15, i3) | 0;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i15 >> 2] | 0) | 0)) {
      i16 = i13;
      break;
     }
     i17 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = HEAP32[i5 >> 2];
     HEAP32[i5 >> 2] = i17;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i15 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0)) {
      i16 = i13 + 1 | 0;
      break;
     }
     i17 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i15 >> 2] = i17;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i12 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0)) {
      i16 = i13 + 2 | 0;
      break;
     }
     i17 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i12 >> 2] = i17;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i14 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0) {
      i17 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
      HEAP32[i14 >> 2] = i17;
      i16 = i13 + 4 | 0;
      break;
     } else {
      i16 = i13 + 3 | 0;
      break;
     }
    } else {
     i13 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i12 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
     i17 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0;
     if (!i13) {
      if (!i17) {
       i16 = 0;
       break;
      }
      i13 = HEAP32[i12 >> 2] | 0;
      HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
      HEAP32[i5 >> 2] = i13;
      if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i12 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
       i16 = 1;
       break;
      }
      i13 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
      HEAP32[i12 >> 2] = i13;
      i16 = 2;
      break;
     }
     i13 = HEAP32[i6 >> 2] | 0;
     if (i17) {
      HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
      HEAP32[i5 >> 2] = i13;
      i16 = 1;
      break;
     }
     HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i12 >> 2] = i13;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, i13) | 0)) {
      i16 = 1;
      break;
     }
     i13 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
     HEAP32[i5 >> 2] = i13;
     i16 = 2;
    }
   } while (0);
   do {
    if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
     i18 = i5;
     i19 = i16;
    } else {
     i11 = i5;
     while (1) {
      i20 = i11 - 4 | 0;
      if ((i6 | 0) == (i20 | 0)) {
       break;
      }
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i20 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
       i10 = 66;
       break;
      } else {
       i11 = i20;
      }
     }
     if ((i10 | 0) == 66) {
      i10 = 0;
      i11 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = HEAP32[i20 >> 2];
      HEAP32[i20 >> 2] = i11;
      i18 = i20;
      i19 = i16 + 1 | 0;
      break;
     }
     i11 = i6 + 4 | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i5 >> 2] | 0) | 0) {
      i21 = i11;
     } else {
      i9 = i11;
      while (1) {
       if ((i9 | 0) == (i5 | 0)) {
        i10 = 102;
        break L1;
       }
       i22 = i9 + 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i9 >> 2] | 0) | 0) {
        break;
       } else {
        i9 = i22;
       }
      }
      i11 = HEAP32[i9 >> 2] | 0;
      HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
      HEAP32[i5 >> 2] = i11;
      i21 = i22;
     }
     if ((i21 | 0) == (i5 | 0)) {
      i10 = 103;
      break L1;
     } else {
      i23 = i5;
      i24 = i21;
     }
     while (1) {
      i11 = i24;
      while (1) {
       i25 = i11 + 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i11 >> 2] | 0) | 0) {
        i26 = i23;
        break;
       } else {
        i11 = i25;
       }
      }
      while (1) {
       i26 = i26 - 4 | 0;
       if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i26 >> 2] | 0) | 0)) {
        break;
       }
      }
      if (i11 >>> 0 >= i26 >>> 0) {
       i6 = i11;
       continue L3;
      }
      i8 = HEAP32[i11 >> 2] | 0;
      HEAP32[i11 >> 2] = HEAP32[i26 >> 2];
      HEAP32[i26 >> 2] = i8;
      i23 = i26;
      i24 = i25;
     }
    }
   } while (0);
   i9 = i6 + 4 | 0;
   L52 : do {
    if (i9 >>> 0 < i18 >>> 0) {
     i8 = i18;
     i13 = i9;
     i17 = i19;
     i14 = i12;
     while (1) {
      i15 = i13;
      while (1) {
       i27 = i15 + 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i15 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0) {
        i15 = i27;
       } else {
        i28 = i8;
        break;
       }
      }
      while (1) {
       i28 = i28 - 4 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i28 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0) {
        break;
       }
      }
      if (i15 >>> 0 > i28 >>> 0) {
       i29 = i15;
       i30 = i17;
       i31 = i14;
       break L52;
      }
      i11 = HEAP32[i15 >> 2] | 0;
      HEAP32[i15 >> 2] = HEAP32[i28 >> 2];
      HEAP32[i28 >> 2] = i11;
      i8 = i28;
      i13 = i27;
      i17 = i17 + 1 | 0;
      i14 = (i14 | 0) == (i15 | 0) ? i28 : i14;
     }
    } else {
     i29 = i9;
     i30 = i19;
     i31 = i12;
    }
   } while (0);
   do {
    if ((i29 | 0) == (i31 | 0)) {
     i32 = i30;
    } else {
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i31 >> 2] | 0, HEAP32[i29 >> 2] | 0) | 0)) {
      i32 = i30;
      break;
     }
     i12 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = HEAP32[i31 >> 2];
     HEAP32[i31 >> 2] = i12;
     i32 = i30 + 1 | 0;
    }
   } while (0);
   if ((i32 | 0) == 0) {
    i33 = __ZNSt3__127__insertion_sort_incompleteIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEbT0_SA_T_(i6, i29, i3) | 0;
    i12 = i29 + 4 | 0;
    if (__ZNSt3__127__insertion_sort_incompleteIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEbT0_SA_T_(i12, i1, i3) | 0) {
     i10 = 78;
     break;
    }
    if (i33) {
     i6 = i12;
     continue;
    }
   }
   i12 = i29;
   if ((i12 - i7 | 0) >= (i2 - i12 | 0)) {
    i10 = 82;
    break;
   }
   __ZNSt3__16__sortIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEvT0_SA_T_(i6, i29, i3);
   i6 = i29 + 4 | 0;
  }
  if ((i10 | 0) == 78) {
   i10 = 0;
   if (i33) {
    i10 = 84;
    break;
   } else {
    i4 = i6;
    i1 = i29;
    continue;
   }
  } else if ((i10 | 0) == 82) {
   i10 = 0;
   __ZNSt3__16__sortIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEvT0_SA_T_(i29 + 4 | 0, i1, i3);
   i4 = i6;
   i1 = i29;
   continue;
  }
 }
 if ((i10 | 0) == 4) {
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
   return;
  }
  i29 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i5 >> 2] = i29;
  return;
 } else if ((i10 | 0) == 6) {
  i29 = i6 + 4 | 0;
  i4 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i29 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
  i33 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i29 >> 2] | 0) | 0;
  if (!i4) {
   if (!i33) {
    return;
   }
   i4 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = i4;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i29 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
    return;
   }
   i4 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i29 >> 2];
   HEAP32[i29 >> 2] = i4;
   return;
  }
  i4 = HEAP32[i6 >> 2] | 0;
  if (i33) {
   HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i5 >> 2] = i4;
   return;
  }
  HEAP32[i6 >> 2] = HEAP32[i29 >> 2];
  HEAP32[i29 >> 2] = i4;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, i4) | 0)) {
   return;
  }
  i4 = HEAP32[i29 >> 2] | 0;
  HEAP32[i29 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i5 >> 2] = i4;
  return;
 } else if ((i10 | 0) == 14) {
  __ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_(i6, i6 + 4 | 0, i6 + 8 | 0, i5, i3) | 0;
  return;
 } else if ((i10 | 0) == 15) {
  i4 = i6 + 4 | 0;
  i29 = i6 + 8 | 0;
  i33 = i6 + 12 | 0;
  __ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_(i6, i4, i29, i33, i3) | 0;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i5 >> 2] | 0, HEAP32[i33 >> 2] | 0) | 0)) {
   return;
  }
  i32 = HEAP32[i33 >> 2] | 0;
  HEAP32[i33 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i5 >> 2] = i32;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i33 >> 2] | 0, HEAP32[i29 >> 2] | 0) | 0)) {
   return;
  }
  i32 = HEAP32[i29 >> 2] | 0;
  i5 = HEAP32[i33 >> 2] | 0;
  HEAP32[i29 >> 2] = i5;
  HEAP32[i33 >> 2] = i32;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i5, HEAP32[i4 >> 2] | 0) | 0)) {
   return;
  }
  i5 = HEAP32[i4 >> 2] | 0;
  i32 = HEAP32[i29 >> 2] | 0;
  HEAP32[i4 >> 2] = i32;
  HEAP32[i29 >> 2] = i5;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i32, HEAP32[i6 >> 2] | 0) | 0)) {
   return;
  }
  i32 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i4 >> 2] = i32;
  return;
 } else if ((i10 | 0) == 21) {
  i32 = i6 + 8 | 0;
  i4 = i6 + 4 | 0;
  i5 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
  i29 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i32 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0;
  do {
   if (i5) {
    i33 = HEAP32[i6 >> 2] | 0;
    if (i29) {
     HEAP32[i6 >> 2] = HEAP32[i32 >> 2];
     HEAP32[i32 >> 2] = i33;
     break;
    }
    HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i4 >> 2] = i33;
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i32 >> 2] | 0, i33) | 0)) {
     break;
    }
    i33 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = HEAP32[i32 >> 2];
    HEAP32[i32 >> 2] = i33;
   } else {
    if (!i29) {
     break;
    }
    i33 = HEAP32[i4 >> 2] | 0;
    i30 = HEAP32[i32 >> 2] | 0;
    HEAP32[i4 >> 2] = i30;
    HEAP32[i32 >> 2] = i33;
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i30, HEAP32[i6 >> 2] | 0) | 0)) {
     break;
    }
    i30 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i4 >> 2] = i30;
   }
  } while (0);
  i4 = i6 + 12 | 0;
  if ((i4 | 0) == (i1 | 0)) {
   return;
  } else {
   i34 = i32;
   i35 = i4;
  }
  while (1) {
   if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i35 >> 2] | 0, HEAP32[i34 >> 2] | 0) | 0) {
    i4 = HEAP32[i35 >> 2] | 0;
    i32 = i34;
    i29 = i35;
    while (1) {
     HEAP32[i29 >> 2] = HEAP32[i32 >> 2];
     if ((i32 | 0) == (i6 | 0)) {
      i36 = i6;
      break;
     }
     i5 = i32 - 4 | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i4, HEAP32[i5 >> 2] | 0) | 0) {
      i29 = i32;
      i32 = i5;
     } else {
      i36 = i32;
      break;
     }
    }
    HEAP32[i36 >> 2] = i4;
   }
   i32 = i35 + 4 | 0;
   if ((i32 | 0) == (i1 | 0)) {
    break;
   } else {
    i34 = i35;
    i35 = i32;
   }
  }
  return;
 } else if ((i10 | 0) == 84) {
  return;
 } else if ((i10 | 0) == 85) {
  return;
 } else if ((i10 | 0) == 102) {
  return;
 } else if ((i10 | 0) == 103) {
  return;
 }
}
function __ZN7WebCore20CompositeEditCommand23moveParagraphWithClonesERKNS_15VisiblePositionES3_PNS_7ElementEPNS_4NodeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 280 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 40 | 0;
 i11 = i6 + 56 | 0;
 i12 = i6 + 72 | 0;
 i13 = i6 + 88 | 0;
 i14 = i6 + 104 | 0;
 i15 = i6 + 168 | 0;
 i16 = i6 + 184 | 0;
 i17 = i6 + 200 | 0;
 i18 = i6 + 216 | 0;
 i19 = i6 + 232 | 0;
 i20 = i6 + 248 | 0;
 i21 = i6 + 256 | 0;
 i22 = i6 + 264 | 0;
 __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i8, i2, 0);
 __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i9, i3, 0);
 i23 = i11 | 0;
 i24 = HEAP32[i2 >> 2] | 0;
 HEAP32[i23 >> 2] = i24;
 if ((i24 | 0) == 0) {
  i25 = i11 + 8 | 0;
  i26 = 0;
  i27 = i25;
  i28 = i25;
 } else {
  i25 = i24 + 8 | 0;
  HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
  i25 = i11 + 8 | 0;
  i24 = i25;
  i26 = HEAP32[i24 >> 2] & -8;
  i27 = i25;
  i28 = i24;
 }
 HEAP32[i11 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i24 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i26 | i24 & 7;
 HEAP32[i28 >> 2] = i2;
 HEAP8[i27] = i2 & 255 & -9 | i24 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i10, i11, 1);
 i11 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i23 = i11 + 8 | 0;
   i24 = i23 | 0;
   i2 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 i11 = i13 | 0;
 i23 = HEAP32[i3 >> 2] | 0;
 HEAP32[i11 >> 2] = i23;
 if ((i23 | 0) != 0) {
  i2 = i23 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 HEAP32[i13 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 i2 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = i13 + 8 | 0;
 i23 = i3;
 i24 = HEAP32[i23 >> 2] & -8 | i2 & 7;
 HEAP32[i23 >> 2] = i24;
 HEAP8[i3] = i24 & 255 & -9 | i2 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i12, i13, 1);
 i13 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i11 = i13 + 8 | 0;
   i2 = i11 | 0;
   i24 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20CompositeEditCommand29cloneParagraphUnderNewElementERNS_8PositionES2_PNS_4NodeEPNS_7ElementE(i1, i10, i12, i5, i4);
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i14, i10, i12, 1, 0);
 __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i1 | 0, i14);
 __ZN7WebCore16VisibleSelectionD2Ev(i14);
 do {
  if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
   i14 = HEAP32[i1 + 8 >> 2] | 0;
   i4 = __ZN3WTF10fastMallocEj(344) | 0;
   __ZN7WebCore22DeleteSelectionCommandC1ERNS_8DocumentEbbbbb(i4, i14, 0, 0, 0, 0, 1);
   i14 = i7 | 0;
   HEAP32[i14 >> 2] = i4;
   __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i7);
   i4 = HEAP32[i14 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i14 = i4 + 4 | 0;
   i4 = i14 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i14 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 _memset(i15 | 0, 0, 12) | 0;
 HEAP32[i15 + 12 >> 2] = 1;
 __ZN7WebCore20CompositeEditCommand20cleanupAfterDeletionENS_15VisiblePositionE(i1, i15);
 i7 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i15 = i7 + 8 | 0;
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
 i7 = i17 | 0;
 i15 = i8 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 HEAP32[i7 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i5 = i14 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i8 + 4 | 0;
 HEAP32[i17 + 4 >> 2] = HEAP32[i5 >> 2];
 i14 = i8 + 8 | 0;
 i4 = i14;
 i13 = HEAP32[i4 >> 2] | 0;
 i11 = i17 + 8 | 0;
 i24 = i11;
 i2 = HEAP32[i24 >> 2] & -8 | i13 & 7;
 HEAP32[i24 >> 2] = i2;
 HEAP8[i11] = i2 & 255 & -9 | i13 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i17, 1);
 i17 = i16 | 0;
 i13 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i13;
 do {
  if ((i2 | 0) != 0) {
   i13 = i2 + 8 | 0;
   i11 = i13 | 0;
   i24 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 HEAP32[i5 >> 2] = HEAP32[i16 + 4 >> 2];
 i2 = HEAP32[i16 + 8 >> 2] | 0;
 i13 = HEAP32[i4 >> 2] & -8 | i2 & 7;
 HEAP32[i4 >> 2] = i13;
 HEAP8[i14] = i13 & 255 & -9 | i2 & 8;
 HEAP32[i8 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
 i16 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i17 = i16 + 8 | 0;
   i2 = i17 | 0;
   i13 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 i16 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i7 = i16 + 8 | 0;
   i17 = i7 | 0;
   i13 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i16 = i19 | 0;
 i7 = i9 | 0;
 i13 = HEAP32[i7 >> 2] | 0;
 HEAP32[i16 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i17 = i13 + 8 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
 }
 i17 = i9 + 4 | 0;
 HEAP32[i19 + 4 >> 2] = HEAP32[i17 >> 2];
 i13 = i9 + 8 | 0;
 i2 = i13;
 i14 = HEAP32[i2 >> 2] | 0;
 i24 = i19 + 8 | 0;
 i11 = i24;
 i3 = HEAP32[i11 >> 2] & -8 | i14 & 7;
 HEAP32[i11 >> 2] = i3;
 HEAP8[i24] = i3 & 255 & -9 | i14 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i18, i19, 1);
 i19 = i18 | 0;
 i14 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i14;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 + 8 | 0;
   i24 = i14 | 0;
   i11 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 HEAP32[i17 >> 2] = HEAP32[i18 + 4 >> 2];
 i17 = HEAP32[i18 + 8 >> 2] | 0;
 i3 = HEAP32[i2 >> 2] & -8 | i17 & 7;
 HEAP32[i2 >> 2] = i3;
 HEAP8[i13] = i3 & 255 & -9 | i17 & 8;
 HEAP32[i9 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
 i18 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i19 = i18 + 8 | 0;
   i17 = i19 | 0;
   i3 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i18 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i16 = i18 + 8 | 0;
   i19 = i16 | 0;
   i3 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 i18 = HEAP32[i15 >> 2] | 0;
 L67 : do {
  if ((i18 | 0) != 0) {
   i16 = i18 + 8 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   do {
    if (__ZN7WebCore14isTableElementEPNS_4NodeE(i18) | 0) {
     i29 = 0;
    } else {
     if (!(__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i8, 1) | 0)) {
      if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i8, 1) | 0)) {
       i29 = 1;
       break;
      }
     }
     i29 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i8, i9) | 0;
    }
   } while (0);
   i16 = i18 + 8 | 0;
   i3 = i16 - 8 | 0;
   i19 = i16 | 0;
   i17 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i17;
   do {
    if ((i17 | 0) < 1) {
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      i30 = 60;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i3);
     if (!i29) {
      break L67;
     }
    } else {
     i30 = 60;
    }
   } while (0);
   if ((i30 | 0) == 60) {
    if (!i29) {
     break;
    }
   }
   __ZN7WebCore18createBreakElementERNS_8DocumentE(i21, HEAP32[i1 + 8 >> 2] | 0);
   i3 = i20 | 0;
   i16 = i21 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i3 >> 2] = i17;
   i17 = i22 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i17 >> 2] = i19;
   if ((i19 | 0) != 0) {
    i13 = i19 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   HEAP32[i22 + 4 >> 2] = HEAP32[i5 >> 2];
   i13 = HEAP32[i4 >> 2] | 0;
   i19 = i22 + 8 | 0;
   i2 = i19;
   i14 = HEAP32[i2 >> 2] & -8 | i13 & 7;
   HEAP32[i2 >> 2] = i14;
   HEAP8[i19] = i14 & 255 & -9 | i13 & 8;
   __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i1, i20, i22);
   i13 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i17 = i13 + 8 | 0;
     i14 = i17 | 0;
     i19 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i17 = i13 + 8 | 0;
     i19 = i17 | 0;
     i14 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i16 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i3 = i13 + 8 | 0;
   i13 = i3 | 0;
   i17 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i12 = i22 + 8 | 0;
   i20 = i12 | 0;
   i1 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i10 = i22 + 8 | 0;
   i12 = i10 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i7 = i22 + 8 | 0;
   i10 = i7 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i15 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i15 = i22 + 8 | 0;
 i22 = i15 | 0;
 i7 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i7;
 if ((i7 | 0) >= 1) {
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
function __ZN7WebCore20CompositeEditCommand42moveParagraphContentsToNewBlockIfNecessaryERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 144 | 0;
 i15 = i4 + 152 | 0;
 i16 = i4 + 168 | 0;
 i17 = i4 + 184 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i2 + 8 >> 2] | 0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i3, 1);
 __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i6, i5, 1);
 __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i7, i5, 1);
 __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i8, i7, 0);
 i18 = i8 | 0;
 i19 = (HEAP32[i18 >> 2] | 0) != 0 ? i8 : i7;
 i8 = i9 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 HEAP32[i8 >> 2] = i20;
 if ((i20 | 0) == 0) {
  i21 = i9 + 8 | 0;
  i22 = 0;
  i23 = i21;
  i24 = i21;
 } else {
  i21 = i20 + 8 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
  i21 = i9 + 8 | 0;
  i20 = i21;
  i22 = HEAP32[i20 >> 2] & -8;
  i23 = i21;
  i24 = i20;
 }
 i20 = i9 + 4 | 0;
 HEAP32[i20 >> 2] = HEAP32[i19 + 4 >> 2];
 i21 = HEAP32[i19 + 8 >> 2] | 0;
 i25 = i22 | i21 & 7;
 HEAP32[i24 >> 2] = i25;
 HEAP8[i23] = i25 & 255 & -9 | i21 & 8;
 HEAP32[i9 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
 i19 = i11 | 0;
 i21 = i6 | 0;
 i25 = HEAP32[i21 >> 2] | 0;
 HEAP32[i19 >> 2] = i25;
 if ((i25 | 0) != 0) {
  i23 = i25 + 8 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
 }
 HEAP32[i11 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i23 = HEAP32[i6 + 8 >> 2] | 0;
 i25 = i11 + 8 | 0;
 i22 = i25;
 i26 = HEAP32[i22 >> 2] & -8 | i23 & 7;
 HEAP32[i22 >> 2] = i26;
 HEAP8[i25] = i26 & 255 & -9 | i23 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i10, i11, 1);
 i11 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i19 = i11 + 8 | 0;
   i23 = i19 | 0;
   i26 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   HEAP32[i23 >> 2] = i26;
   if ((i26 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i11 = i13 | 0;
 i19 = HEAP32[i8 >> 2] | 0;
 HEAP32[i11 >> 2] = i19;
 if ((i19 | 0) != 0) {
  i26 = i19 + 8 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
 }
 HEAP32[i13 + 4 >> 2] = HEAP32[i20 >> 2];
 i20 = HEAP32[i24 >> 2] | 0;
 i24 = i13 + 8 | 0;
 i26 = i24;
 i19 = HEAP32[i26 >> 2] & -8 | i20 & 7;
 HEAP32[i26 >> 2] = i19;
 HEAP8[i24] = i19 & 255 & -9 | i20 & 8;
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i12, i13, 1);
 i13 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i11 = i13 + 8 | 0;
   i20 = i11 | 0;
   i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 L25 : do {
  if ((__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i3, i10) | 0) < 0) {
   HEAP32[i1 >> 2] = 0;
  } else {
   i13 = i10 | 0;
   do {
    if (__ZN7WebCore7isBlockEPKNS_4NodeE(HEAP32[i13 >> 2] | 0) | 0) {
     i11 = HEAP32[i13 >> 2] | 0;
     if ((i11 | 0) == (__ZN7WebCore23editableRootForPositionERKNS_8PositionENS_12EditableTypeE(i10, 0) | 0)) {
      i11 = HEAP32[i13 >> 2] | 0;
      i19 = i11 + 32 | 0;
      if ((HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0) {
       i27 = i19 | 0;
      } else {
       i27 = HEAP32[i19 >> 2] | 0;
      }
      if (__ZN7WebCore8Position44hasRenderedNonAnonymousDescendantsWithHeightERKNS_13RenderElementE(HEAP32[i27 >> 2] | 0) | 0) {
       break;
      }
      __ZN7WebCore20CompositeEditCommand34insertNewDefaultParagraphElementAtERKNS_8PositionE(i1, i2, i10);
      break L25;
     }
     i19 = i12 | 0;
     i11 = __ZN7WebCore7isBlockEPKNS_4NodeE(HEAP32[i19 >> 2] | 0) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if (i11) {
      if (__ZNK7WebCore4Node14isDescendantOfEPKS0_(i20, HEAP32[i13 >> 2] | 0) | 0) {
       break;
      }
      HEAP32[i1 >> 2] = 0;
      break L25;
     }
     i11 = __ZN7WebCore14enclosingBlockEPNS_4NodeENS_27EditingBoundaryCrossingRuleE(i20, 1) | 0;
     if ((i11 | 0) != (HEAP32[i13 >> 2] | 0)) {
      HEAP32[i1 >> 2] = 0;
      break L25;
     }
     if (!(__ZN7WebCore35isEndOfEditableOrNonEditableContentERKNS_15VisiblePositionE(i9) | 0)) {
      break;
     }
     HEAP32[i1 >> 2] = 0;
     break L25;
    }
   } while (0);
   __ZN7WebCore20CompositeEditCommand34insertNewDefaultParagraphElementAtERKNS_8PositionE(i14, i2, i10);
   i13 = i14 | 0;
   i11 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i13 = HEAP32[i7 >> 2] | 0;
   i20 = (i13 | 0) == 0;
   if (!i20) {
    i19 = i13 + 8 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   do {
    if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
     i28 = 0;
    } else {
     i19 = HEAP32[i13 + 44 >> 2] | 0;
     i24 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
     if ((i19 | 0) == (i24 | 0)) {
      i28 = 1;
      break;
     }
     if ((HEAP32[i19 + 12 >> 2] | 0) != (HEAP32[i24 + 12 >> 2] | 0)) {
      i28 = 0;
      break;
     }
     i28 = (HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i24 + 16 >> 2] | 0);
    }
   } while (0);
   do {
    if (!i20) {
     i24 = i13 + 8 | 0;
     i19 = i24 | 0;
     i26 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i16, i11);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i16, 1);
   __ZN7WebCore20CompositeEditCommand14moveParagraphsERKNS_15VisiblePositionES3_S3_bb(i2, i6, i7, i15, 0, 1);
   i13 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i20 = i13 + 8 | 0;
     i24 = i20 | 0;
     i26 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i20 = i13 + 8 | 0;
     i26 = i20 | 0;
     i24 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i24;
     if ((i24 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   do {
    if ((HEAP32[i11 + 12 >> 2] & 2 | 0) != 0) {
     i13 = HEAP32[i11 + 40 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
      break;
     }
     i20 = HEAP32[i13 + 44 >> 2] | 0;
     i24 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
     if ((i20 | 0) == (i24 | 0)) {
      i29 = 0;
     } else {
      if ((HEAP32[i20 + 12 >> 2] | 0) != (HEAP32[i24 + 12 >> 2] | 0)) {
       break;
      }
      i29 = (HEAP32[i20 + 16 >> 2] | 0) != (HEAP32[i24 + 16 >> 2] | 0);
     }
     if (i29 | i28) {
      break;
     }
     i24 = HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] | 0;
     i20 = i17 | 0;
     HEAP32[i20 >> 2] = i13;
     i26 = i13 + 8 | 0;
     HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
     FUNCTION_TABLE_viii[i24 & 3](i2, i17, 1);
     i24 = HEAP32[i20 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     i20 = i24 + 8 | 0;
     i24 = i20 | 0;
     i26 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 >> 2] = i11;
  }
 } while (0);
 i1 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i12 = i1 + 8 | 0;
   i17 = i12 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i10 = i1 + 8 | 0;
   i12 = i10 | 0;
   i2 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i8 = i1 + 8 | 0;
   i10 = i8 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i18 = i1 + 8 | 0;
   i8 = i18 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i7 = i1 + 8 | 0;
   i18 = i7 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i21 = i1 + 8 | 0;
   i7 = i21 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i21 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i21;
 if ((i21 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CompositeEditCommand20cleanupAfterDeletionENS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 56 | 0;
 i9 = i3 + 64 | 0;
 i10 = i3 + 80 | 0;
 i11 = i3 + 88 | 0;
 i12 = i3 + 96 | 0;
 if ((HEAP32[i1 + 124 >> 2] | 0) == 2) {
  i13 = 1;
 } else {
  i13 = HEAP32[i1 + 120 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i1 + 96 | 0, i13);
 L4 : do {
  if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i5, i2) | 0)) {
   if (!(__ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, 1) | 0)) {
    break;
   }
   if (!(__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i5, 1) | 0)) {
    break;
   }
   i13 = i7 | 0;
   i14 = HEAP32[i5 >> 2] | 0;
   HEAP32[i13 >> 2] = i14;
   if ((i14 | 0) == 0) {
    i15 = i7 + 8 | 0;
    i16 = 0;
    i17 = i15;
    i18 = i15;
   } else {
    i15 = i14 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i15 = i7 + 8 | 0;
    i14 = i15;
    i16 = HEAP32[i14 >> 2] & -8;
    i17 = i15;
    i18 = i14;
   }
   HEAP32[i7 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
   i14 = HEAP32[i5 + 8 >> 2] | 0;
   i15 = i16 | i14 & 7;
   HEAP32[i18 >> 2] = i15;
   HEAP8[i17] = i15 & 255 & -9 | i14 & 8;
   __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i6, i7, 1);
   i14 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i13 = i14 + 8 | 0;
     i15 = i13 | 0;
     i19 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   i14 = i6 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   do {
    if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
     i20 = 23;
    } else {
     i19 = HEAP32[i13 + 44 >> 2] | 0;
     i15 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
     if ((i19 | 0) != (i15 | 0)) {
      if ((HEAP32[i19 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
       i20 = 23;
       break;
      }
      if ((HEAP32[i19 + 16 >> 2] | 0) != (HEAP32[i15 + 16 >> 2] | 0)) {
       i20 = 23;
       break;
      }
     }
     i15 = i8 | 0;
     HEAP32[i15 >> 2] = i13;
     if ((i13 | 0) != 0) {
      i19 = i13 + 8 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand27removeNodeAndPruneAncestorsEN3WTF10PassRefPtrINS_4NodeEEE(i1, i8);
     i19 = HEAP32[i15 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     i15 = i19 + 8 | 0;
     i19 = i15 | 0;
     i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     HEAP32[i19 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   L29 : do {
    if ((i20 | 0) == 23) {
     if (!(__ZN7WebCore7isBlockEPKNS_4NodeE(i13) | 0)) {
      if (!(__ZN7WebCore25lineBreakExistsAtPositionERKNS_8PositionE(i6) | 0)) {
       break;
      }
      i15 = i13;
      i21 = HEAP32[i13 + 36 >> 2] | 0;
      do {
       if ((i21 | 0) != 0) {
        if ((HEAP32[i21 + 4 >> 2] | 0) != 1) {
         break;
        }
        i19 = i11 | 0;
        HEAP32[i19 >> 2] = i13;
        if ((i13 | 0) != 0) {
         i22 = i13 + 8 | 0;
         HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
        }
        __ZN7WebCore20CompositeEditCommand27removeNodeAndPruneAncestorsEN3WTF10PassRefPtrINS_4NodeEEE(i1, i11);
        i22 = HEAP32[i19 >> 2] | 0;
        if ((i22 | 0) == 0) {
         break L29;
        }
        i19 = i22 + 8 | 0;
        i22 = i19 | 0;
        i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
        HEAP32[i22 >> 2] = i23;
        if ((i23 | 0) >= 1) {
         break L29;
        }
        if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
         break L29;
        }
        __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
        break L29;
       }
      } while (0);
      i21 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
      i19 = i12 | 0;
      HEAP32[i19 >> 2] = i15;
      if ((i13 | 0) != 0) {
       i23 = i13 + 8 | 0;
       HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
      }
      i23 = i6 + 8 | 0;
      do {
       if ((HEAP8[i23] & 8) == 0) {
        i22 = HEAP32[i23 >> 2] & 7;
        if (!((i22 | 0) == 2 | (i22 | 0) == 4)) {
         i20 = 65;
         break;
        }
        i24 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
       } else {
        i20 = 65;
       }
      } while (0);
      if ((i20 | 0) == 65) {
       i24 = HEAP32[i6 + 4 >> 2] | 0;
      }
      FUNCTION_TABLE_viiii[i21 & 3](i1, i12, i24, 1);
      i23 = HEAP32[i19 >> 2] | 0;
      if ((i23 | 0) == 0) {
       break;
      }
      i15 = i23 + 8 | 0;
      i23 = i15 | 0;
      i22 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
      HEAP32[i23 >> 2] = i22;
      if ((i22 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
      break;
     }
     i15 = i9 | 0;
     i22 = HEAP32[i2 >> 2] | 0;
     HEAP32[i15 >> 2] = i22;
     if ((i22 | 0) != 0) {
      i23 = i22 + 8 | 0;
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
     }
     HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
     i23 = HEAP32[i2 + 8 >> 2] | 0;
     i22 = i9 + 8 | 0;
     i25 = i22;
     i26 = HEAP32[i25 >> 2] & -8 | i23 & 7;
     HEAP32[i25 >> 2] = i26;
     HEAP8[i22] = i26 & 255 & -9 | i23 & 8;
     i23 = __ZNK7WebCore8Position26rendersInDifferentPositionERKS0_(i6, i9) | 0;
     i26 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i15 = i26 + 8 | 0;
       i22 = i15 | 0;
       i25 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
      }
     } while (0);
     if (i23) {
      i26 = i10 | 0;
      HEAP32[i26 >> 2] = i13;
      if ((i13 | 0) != 0) {
       i19 = i13 + 8 | 0;
       HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
      }
      __ZN7WebCore20CompositeEditCommand27removeNodeAndPruneAncestorsEN3WTF10PassRefPtrINS_4NodeEEE(i1, i10);
      i19 = HEAP32[i26 >> 2] | 0;
      if ((i19 | 0) == 0) {
       break;
      }
      i26 = i19 + 8 | 0;
      i19 = i26 | 0;
      i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      HEAP32[i19 >> 2] = i21;
      if ((i21 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
      break;
     }
     i26 = (i13 | 0) == 0;
     if (!i26) {
      i21 = i13 + 8 | 0;
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     }
     i21 = __ZN7WebCore28highestNodeToRemoveInPruningEPNS_4NodeE(i13) | 0;
     do {
      if ((i21 | 0) != 0) {
       i19 = i21 + 8 | 0;
       HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
       i19 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
       i15 = i4 | 0;
       HEAP32[i15 >> 2] = i21;
       FUNCTION_TABLE_viii[i19 & 3](i1, i4, 1);
       i19 = HEAP32[i15 >> 2] | 0;
       if ((i19 | 0) == 0) {
        break;
       }
       i15 = i19 + 8 | 0;
       i19 = i15 | 0;
       i25 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
       HEAP32[i19 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
      }
     } while (0);
     if (i26) {
      i21 = HEAP32[i14 >> 2] | 0;
      if ((i21 | 0) == 0) {
       break L4;
      }
      i23 = i21 + 8 | 0;
      i21 = i23 | 0;
      i15 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
      HEAP32[i21 >> 2] = i15;
      if ((i15 | 0) >= 1) {
       break L4;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break L4;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
      break L4;
     }
     i23 = i13 + 8 | 0;
     i15 = i23 - 8 | 0;
     i21 = i23 | 0;
     i25 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i25;
     do {
      if ((i25 | 0) < 1) {
       if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i15);
      }
     } while (0);
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break L4;
     }
     i23 = i15 + 8 | 0;
     i15 = i23 | 0;
     i25 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break L4;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break L4;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     break L4;
    }
   } while (0);
   i13 = HEAP32[i14 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i23 = i13 + 8 | 0;
   i13 = i23 | 0;
   i25 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i25;
   if ((i25 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 + 8 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20CompositeEditCommand23deleteInsignificantTextEN3WTF10PassRefPtrINS_4TextEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i2 | 0;
 if (!((HEAP32[i14 >> 2] | 0) != 0 & i3 >>> 0 < i4 >>> 0)) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[i1 + 8 >> 2] | 0);
 i2 = HEAP32[i14 >> 2] | 0;
 i15 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i16 = i15 | 0;
 } else {
  i16 = HEAP32[i15 >> 2] | 0;
 }
 i15 = HEAP32[i16 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i16 = HEAP32[i15 + 48 >> 2] | 0;
 HEAP32[i7 >> 2] = i16;
 L11 : do {
  if ((i16 | 0) == 0) {
   i17 = 0;
   i18 = 0;
  } else {
   i2 = i7;
   i19 = 0;
   i20 = 0;
   i21 = 0;
   i22 = i16;
   L13 : while (1) {
    if ((i19 | 0) == (i20 | 0)) {
     i23 = i20 + 1 | 0;
     do {
      if (i21 >>> 0 > i7 >>> 0) {
       i24 = 12;
      } else {
       if ((i21 + (i20 << 2) | 0) >>> 0 <= i7 >>> 0) {
        i24 = 12;
        break;
       }
       i25 = i2 - i21 >> 2;
       i26 = i23 + (i20 >>> 2) | 0;
       i27 = i26 >>> 0 > 16 >>> 0 ? i26 : 16;
       i26 = i27 >>> 0 > i23 >>> 0 ? i27 : i23;
       do {
        if (i20 >>> 0 < i26 >>> 0) {
         if (i26 >>> 0 > 1073741823 >>> 0) {
          i24 = 19;
          break L13;
         }
         i27 = __ZN3WTF18fastMallocGoodSizeEj(i26 << 2) | 0;
         i28 = i27 >>> 2;
         i29 = __ZN3WTF10fastMallocEj(i27) | 0;
         i27 = i29;
         i30 = i21;
         _memcpy(i29 | 0, i30 | 0, i20 << 2) | 0;
         if ((i21 | 0) == 0) {
          i31 = i27;
          i32 = i28;
          break;
         }
         i29 = (i27 | 0) == (i21 | 0);
         __ZN3WTF8fastFreeEPv(i30);
         i31 = i29 ? 0 : i27;
         i32 = i29 ? 0 : i28;
        } else {
         i31 = i21;
         i32 = i20;
        }
       } while (0);
       i33 = i31 + (i25 << 2) | 0;
       i34 = i31;
       i35 = i32;
      }
     } while (0);
     do {
      if ((i24 | 0) == 12) {
       i24 = 0;
       i26 = i23 + (i20 >>> 2) | 0;
       i28 = i26 >>> 0 > 16 >>> 0 ? i26 : 16;
       i26 = i28 >>> 0 > i23 >>> 0 ? i28 : i23;
       if (i20 >>> 0 >= i26 >>> 0) {
        i33 = i7;
        i34 = i21;
        i35 = i20;
        break;
       }
       if (i26 >>> 0 > 1073741823 >>> 0) {
        i24 = 14;
        break L13;
       }
       i28 = __ZN3WTF18fastMallocGoodSizeEj(i26 << 2) | 0;
       i26 = i28 >>> 2;
       i29 = __ZN3WTF10fastMallocEj(i28) | 0;
       i28 = i29;
       i27 = i21;
       _memcpy(i29 | 0, i27 | 0, i20 << 2) | 0;
       if ((i21 | 0) == 0) {
        i33 = i7;
        i34 = i28;
        i35 = i26;
        break;
       }
       i29 = (i28 | 0) == (i21 | 0);
       __ZN3WTF8fastFreeEPv(i27);
       i33 = i7;
       i34 = i29 ? 0 : i28;
       i35 = i29 ? 0 : i26;
      }
     } while (0);
     HEAP32[i34 + (i20 << 2) >> 2] = HEAP32[i33 >> 2];
     i36 = i34;
     i37 = i35;
     i38 = i23;
    } else {
     HEAP32[i21 + (i19 << 2) >> 2] = i22;
     i36 = i21;
     i37 = i20;
     i38 = i19 + 1 | 0;
    }
    i26 = HEAP32[(HEAP32[i7 >> 2] | 0) + 40 >> 2] | 0;
    HEAP32[i7 >> 2] = i26;
    if ((i26 | 0) == 0) {
     i17 = i38;
     i18 = i36;
     break L11;
    } else {
     i19 = i38;
     i20 = i37;
     i21 = i36;
     i22 = i26;
    }
   }
   if ((i24 | 0) == 14) {
    _WTFCrash();
   } else if ((i24 | 0) == 19) {
    _WTFCrash();
   }
  }
 } while (0);
 if ((HEAP8[i15 + 24 | 0] & 64) != 0) {
  HEAP32[i6 >> 2] = F_BASE_iii + 2;
  __ZNSt3__16__sortIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEvT0_SA_T_(i18, i18 + (i17 << 2) | 0, i6);
 }
 do {
  if ((i17 | 0) == 0) {
   i24 = 29;
  } else {
   i6 = HEAP32[i18 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i24 = 29;
    break;
   }
   i15 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i36 = HEAP32[i15 + 4 >> 2] | 0;
   if (i36 >>> 0 <= i3 >>> 0 | i36 >>> 0 < i4 >>> 0) {
    i24 = 77;
    break;
   }
   i15 = i9 | 0;
   HEAP32[i15 >> 2] = 0;
   i37 = i11 | 0;
   i38 = i4 - i3 | 0;
   i7 = i10 | 0;
   i35 = 1;
   i34 = i6;
   i6 = 0;
   i33 = 0;
   L45 : while (1) {
    i32 = i34;
    i31 = i6;
    i16 = i33;
    while (1) {
     i22 = (i31 | 0) != 0;
     if ((i32 | 0) == 0 & (i22 ^ 1)) {
      break L45;
     }
     if (i22) {
      i22 = (HEAPU16[i31 + 48 >> 1] | 0) + (HEAP32[i31 + 44 >> 2] | 0) | 0;
      if (i22 >>> 0 > i4 >>> 0) {
       break L45;
      } else {
       i39 = i22;
      }
     } else {
      i39 = 0;
     }
     i22 = (i32 | 0) != 0;
     if (i22) {
      i40 = HEAP32[i32 + 44 >> 2] | 0;
     } else {
      i40 = i36;
     }
     i21 = i40 - i39 | 0;
     if (i39 >>> 0 <= i4 >>> 0 & i40 >>> 0 >= i3 >>> 0 & (i21 | 0) > 0) {
      i20 = i39 >>> 0 < i3 >>> 0 ? i3 : i39;
      do {
       if ((HEAP32[i15 >> 2] | 0) == 0) {
        i19 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
        HEAP32[i37 >> 2] = i19;
        if ((i19 | 0) != 0) {
         i2 = i19 | 0;
         HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
        }
        __ZNK3WTF6String9substringEjj(i10, i11, i3, i38);
        i2 = HEAP32[i7 >> 2] | 0;
        HEAP32[i7 >> 2] = 0;
        i19 = HEAP32[i15 >> 2] | 0;
        HEAP32[i15 >> 2] = i2;
        do {
         if ((i19 | 0) != 0) {
          i2 = i19 | 0;
          i26 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
          if ((i26 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i19);
           break;
          } else {
           HEAP32[i2 >> 2] = i26;
           break;
          }
         }
        } while (0);
        i19 = HEAP32[i7 >> 2] | 0;
        do {
         if ((i19 | 0) != 0) {
          i26 = i19 | 0;
          i2 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
          if ((i2 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i19);
           break;
          } else {
           HEAP32[i26 >> 2] = i2;
           break;
          }
         }
        } while (0);
        i19 = HEAP32[i37 >> 2] | 0;
        if ((i19 | 0) == 0) {
         break;
        }
        i2 = i19 | 0;
        i26 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
        if ((i26 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i19);
         break;
        } else {
         HEAP32[i2 >> 2] = i26;
         break;
        }
       }
      } while (0);
      __ZN3WTF6String6removeEji(i9, i20 - (i16 + i3) | 0, i21);
      i41 = i21 + i16 | 0;
     } else {
      i41 = i16;
     }
     if (i22) {
      break;
     } else {
      i32 = 0;
      i31 = 0;
      i16 = i41;
     }
    }
    if (i35 >>> 0 < i17 >>> 0) {
     i42 = HEAP32[i18 + (i35 << 2) >> 2] | 0;
    } else {
     i42 = 0;
    }
    i35 = i35 + 1 | 0;
    i34 = i42;
    i6 = i32;
    i33 = i41;
   }
   i33 = HEAP32[i15 >> 2] | 0;
   if ((i33 | 0) == 0) {
    i24 = 77;
    break;
   }
   do {
    if ((HEAP32[i33 + 4 >> 2] | 0) == 0) {
     i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
     i34 = i13 | 0;
     i35 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i34 >> 2] = i35;
     FUNCTION_TABLE_viiii[i6 & 3](i1, i13, i3, i38);
     i6 = HEAP32[i34 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     i34 = i6 + 8 | 0;
     i6 = i34 | 0;
     i35 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     HEAP32[i6 >> 2] = i35;
     if ((i35 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
    } else {
     i34 = i12 | 0;
     i35 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i34 >> 2] = i35;
     __ZN7WebCore20CompositeEditCommand17replaceTextInNodeEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE(i1, i12, i3, i38, i9);
     i35 = HEAP32[i34 >> 2] | 0;
     if ((i35 | 0) == 0) {
      break;
     }
     i34 = i35 + 8 | 0;
     i35 = i34 | 0;
     i6 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
     HEAP32[i35 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
    }
   } while (0);
   i38 = HEAP32[i15 >> 2] | 0;
   if ((i38 | 0) == 0) {
    i24 = 77;
    break;
   }
   i33 = i38 | 0;
   i34 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i34 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i38);
    i24 = 77;
    break;
   } else {
    HEAP32[i33 >> 2] = i34;
    i24 = 77;
    break;
   }
  }
 } while (0);
 do {
  if ((i24 | 0) == 29) {
   i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
   i3 = i8 | 0;
   i12 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i3 >> 2] = i12;
   FUNCTION_TABLE_viii[i9 & 3](i1, i8, 1);
   i9 = HEAP32[i3 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i24 = 77;
    break;
   }
   i3 = i9 + 8 | 0;
   i9 = i3 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    i24 = 77;
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    i24 = 77;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   i24 = 77;
  }
 } while (0);
 do {
  if ((i24 | 0) == 77) {
   if ((i18 | 0) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 72 | 0;
 i14 = i4 + 80 | 0;
 i15 = i4 + 88 | 0;
 i16 = i4 + 96 | 0;
 __ZNK7WebCore8Position24parentAnchoredEquivalentEv(i5, i3);
 i3 = i5 | 0;
 i17 = HEAP32[i3 >> 2] | 0;
 i18 = i5 + 8 | 0;
 do {
  if ((HEAP8[i18] & 8) == 0) {
   i19 = HEAP32[i18 >> 2] & 7;
   if (!((i19 | 0) == 2 | (i19 | 0) == 4)) {
    i20 = 3;
    break;
   }
   i21 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
  } else {
   i20 = 3;
  }
 } while (0);
 if ((i20 | 0) == 3) {
  i21 = HEAP32[i5 + 4 >> 2] | 0;
 }
 i5 = i17 + 12 | 0;
 L7 : do {
  if ((HEAP32[i5 >> 2] & 1 | 0) == 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 132 >> 2] & 31](i17) | 0)) {
    i20 = 29;
    break;
   }
   do {
    if ((HEAP32[i5 >> 2] & 2 | 0) != 0) {
     i18 = HEAP32[i17 + 36 >> 2] | 0;
     i19 = (i18 | 0) != 0;
     if (i19 & (i21 | 0) > 0) {
      i22 = i18;
      i23 = 0;
      while (1) {
       i24 = HEAP32[i22 + 28 >> 2] | 0;
       i25 = i23 + 1 | 0;
       i26 = (i24 | 0) != 0;
       if (i26 & (i25 | 0) < (i21 | 0)) {
        i22 = i24;
        i23 = i25;
       } else {
        i27 = i24;
        i28 = i26;
        break;
       }
      }
     } else {
      i27 = i18;
      i28 = i19;
     }
     if (!i28) {
      break;
     }
     i23 = i6 | 0;
     i22 = i2 | 0;
     i26 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     HEAP32[i23 >> 2] = i26;
     i26 = i7 | 0;
     HEAP32[i26 >> 2] = i27;
     i22 = i27 + 8 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
     __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i1, i6, i7, 1);
     i22 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i26 = i22 + 8 | 0;
       i24 = i26 | 0;
       i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       HEAP32[i24 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
      }
     } while (0);
     i22 = HEAP32[i23 >> 2] | 0;
     if ((i22 | 0) == 0) {
      break L7;
     }
     i19 = i22 + 8 | 0;
     i22 = i19 | 0;
     i18 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break L7;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break L7;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
     break L7;
    }
   } while (0);
   i19 = i8 | 0;
   i18 = i2 | 0;
   i22 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i19 >> 2] = i22;
   i22 = i9 | 0;
   HEAP32[i22 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i18 = i17 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i1, i8, i9);
   i18 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i22 = i18 + 8 | 0;
     i26 = i22 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   i18 = HEAP32[i19 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i22 = i18 + 8 | 0;
   i18 = i22 | 0;
   i25 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i25;
   if ((i25 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
  } else {
   i20 = 29;
  }
 } while (0);
 L37 : do {
  if ((i20 | 0) == 29) {
   if ((__ZN7WebCore14caretMinOffsetEPKNS_4NodeE(i17) | 0) >= (i21 | 0)) {
    i9 = i10 | 0;
    i8 = i2 | 0;
    i7 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i9 >> 2] = i7;
    i7 = i11 | 0;
    HEAP32[i7 >> 2] = i17;
    if ((i17 | 0) != 0) {
     i8 = i17 + 8 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
    }
    __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i1, i10, i11, 1);
    i8 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i7 = i8 + 8 | 0;
      i6 = i7 | 0;
      i27 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      HEAP32[i6 >> 2] = i27;
      if ((i27 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
     }
    } while (0);
    i8 = HEAP32[i9 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    i19 = i8 + 8 | 0;
    i8 = i19 | 0;
    i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    HEAP32[i8 >> 2] = i7;
    if ((i7 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    break;
   }
   do {
    if ((HEAP32[i5 >> 2] & 1 | 0) != 0) {
     if ((__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(i17) | 0) <= (i21 | 0)) {
      break;
     }
     i19 = i12 | 0;
     HEAP32[i19 >> 2] = i17;
     i7 = (i17 | 0) == 0;
     if (!i7) {
      i8 = i17 + 8 | 0;
      HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i1, i12, i21);
     i8 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i19 = i8 + 8 | 0;
       i27 = i19 | 0;
       i6 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       HEAP32[i27 >> 2] = i6;
       if ((i6 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
      }
     } while (0);
     if ((HEAP32[i5 >> 2] & 256 | 0) == 0) {
      break L37;
     }
     i8 = i13 | 0;
     i23 = i2 | 0;
     i19 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     HEAP32[i8 >> 2] = i19;
     i19 = i14 | 0;
     HEAP32[i19 >> 2] = i17;
     if (!i7) {
      i23 = i17 + 8 | 0;
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
     }
     __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i1, i13, i14, 1);
     i23 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i19 = i23 + 8 | 0;
       i6 = i19 | 0;
       i27 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
       HEAP32[i6 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
      }
     } while (0);
     i23 = HEAP32[i8 >> 2] | 0;
     if ((i23 | 0) == 0) {
      break L37;
     }
     i7 = i23 + 8 | 0;
     i23 = i7 | 0;
     i19 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break L37;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break L37;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
     break L37;
    }
   } while (0);
   i9 = i15 | 0;
   i7 = i2 | 0;
   i19 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i9 >> 2] = i19;
   i19 = i16 | 0;
   HEAP32[i19 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i7 = i17 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i1, i15, i16);
   i7 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i19 = i7 + 8 | 0;
     i23 = i19 | 0;
     i27 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i27;
     if ((i27 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i7 = HEAP32[i9 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i19 = i7 + 8 | 0;
   i7 = i19 | 0;
   i27 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i27;
   if ((i27 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 i16 = HEAP32[i3 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i16 + 8 | 0;
 i16 = i3 | 0;
 i15 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
 HEAP32[i16 >> 2] = i15;
 if ((i15 | 0) >= 1) {
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
function __ZN7WebCore20CompositeEditCommand34replaceTextInNodePreservingMarkersEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 40 | 0;
 i11 = i6 + 48 | 0;
 i12 = i6 + 56 | 0;
 i13 = i6 + 64 | 0;
 i14 = i6 + 72 | 0;
 i15 = i6 + 80 | 0;
 i16 = i6 + 88 | 0;
 i17 = i2 | 0;
 i2 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 i17 = i1 + 8 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[i18 + 1124 >> 2] | 0;
 i20 = i7 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i7 + 4 | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i7 + 8 | 0;
 HEAP32[i22 >> 2] = 0;
 i23 = i10 | 0;
 i24 = i2 | 0;
 HEAP32[i23 >> 2] = i24;
 i25 = (i2 | 0) == 0;
 if (i25) {
  i26 = i11 | 0;
  HEAP32[i26 >> 2] = i24;
  i27 = i26;
 } else {
  i26 = i2 + 8 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
  i28 = i11 | 0;
  HEAP32[i28 >> 2] = i24;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
  i27 = i28;
 }
 __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i9, i18, i10, i3, i11, i4 + i3 | 0);
 i11 = i9 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 >> 2] = 1023;
 __ZN7WebCore24DocumentMarkerController14markersInRangeEPNS_5RangeENS_14DocumentMarker11MarkerTypesE(i8, i19, i9, i12);
 i12 = i8 + 8 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 __ZN3WTF6VectorIN7WebCore14DocumentMarkerELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i7, i9);
 L5 : do {
  if ((i9 | 0) != 0) {
   i10 = i8 | 0;
   i18 = 0;
   while (1) {
    if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i18 >>> 0) {
     break;
    }
    i28 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i18 << 2) >> 2] | 0;
    i26 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i26 | 0) == (HEAP32[i21 >> 2] | 0)) {
      i29 = i26 + 1 | 0;
      i30 = HEAP32[i20 >> 2] | 0;
      do {
       if (i30 >>> 0 > i28 >>> 0) {
        i31 = 13;
       } else {
        if ((i30 + (i26 << 4) | 0) >>> 0 <= i28 >>> 0) {
         i31 = 13;
         break;
        }
        i32 = i29 + (i26 >>> 2) | 0;
        i33 = i32 >>> 0 > 16 >>> 0 ? i32 : 16;
        __ZN3WTF6VectorIN7WebCore14DocumentMarkerELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i7, i33 >>> 0 > i29 >>> 0 ? i33 : i29);
        i33 = HEAP32[i20 >> 2] | 0;
        i34 = i33 + (i28 - i30 >> 4 << 4) | 0;
        i35 = i33;
       }
      } while (0);
      if ((i31 | 0) == 13) {
       i31 = 0;
       i30 = i29 + (i26 >>> 2) | 0;
       i33 = i30 >>> 0 > 16 >>> 0 ? i30 : 16;
       __ZN3WTF6VectorIN7WebCore14DocumentMarkerELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i7, i33 >>> 0 > i29 >>> 0 ? i33 : i29);
       i34 = i28;
       i35 = HEAP32[i20 >> 2] | 0;
      }
      i33 = HEAP32[i22 >> 2] | 0;
      HEAP32[i35 + (i33 << 4) >> 2] = HEAP32[i34 >> 2];
      HEAP32[i35 + (i33 << 4) + 4 >> 2] = HEAP32[i34 + 4 >> 2];
      HEAP32[i35 + (i33 << 4) + 8 >> 2] = HEAP32[i34 + 8 >> 2];
      i30 = HEAP32[i34 + 12 >> 2] | 0;
      HEAP32[i35 + (i33 << 4) + 12 >> 2] = i30;
      if ((i30 | 0) == 0) {
       i36 = i33;
       break;
      }
      i32 = i30 + 4 | 0;
      HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      i36 = i33;
     } else {
      i33 = HEAP32[i20 >> 2] | 0;
      HEAP32[i33 + (i26 << 4) >> 2] = HEAP32[i28 >> 2];
      HEAP32[i33 + (i26 << 4) + 4 >> 2] = HEAP32[i28 + 4 >> 2];
      HEAP32[i33 + (i26 << 4) + 8 >> 2] = HEAP32[i28 + 8 >> 2];
      i32 = HEAP32[i28 + 12 >> 2] | 0;
      HEAP32[i33 + (i26 << 4) + 12 >> 2] = i32;
      if ((i32 | 0) == 0) {
       i36 = i26;
       break;
      }
      i33 = i32 + 4 | 0;
      HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
      i36 = i26;
     }
    } while (0);
    HEAP32[i22 >> 2] = i36 + 1;
    i18 = i18 + 1 | 0;
    if (i18 >>> 0 >= i9 >>> 0) {
     break L5;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if ((HEAP32[i12 >> 2] | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
 }
 i12 = i8 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i12 >> 2] = 0;
  HEAP32[i8 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 | 0;
   i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i11 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i27 = i9 + 8 | 0;
   i8 = i27 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
  }
 } while (0);
 i9 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i23 = i9 + 8 | 0;
   i27 = i23 | 0;
   i11 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   HEAP32[i27 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 i9 = i13 | 0;
 HEAP32[i9 >> 2] = i2;
 if (!i25) {
  i23 = i2 + 8 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand17replaceTextInNodeEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE(i1, i13, i3, i4, i5);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 8 | 0;
   i13 = i9 | 0;
   i1 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i17 >> 2] | 0;
 i17 = i15 | 0;
 HEAP32[i17 >> 2] = i24;
 if (i25) {
  i9 = i16 | 0;
  HEAP32[i9 >> 2] = i24;
  i37 = i9;
 } else {
  i9 = i2 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i1 = i16 | 0;
  HEAP32[i1 >> 2] = i24;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i37 = i1;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i38 = 0;
 } else {
  i38 = HEAP32[i1 + 4 >> 2] | 0;
 }
 __ZN7WebCore5Range6createERNS_8DocumentEN3WTF10PassRefPtrINS_4NodeEEEiS6_i(i14, i4, i15, i3, i16, i38 + i3 | 0);
 i3 = i14 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i37 = i3 + 8 | 0;
   i38 = i37 | 0;
   i16 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
   HEAP32[i38 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i17 = i3 + 8 | 0;
   i37 = i17 | 0;
   i16 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
   HEAP32[i37 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i22 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i39 = 0;
 } else {
  i17 = HEAP32[i20 >> 2] | 0;
  i16 = 0;
  while (1) {
   i37 = i17 + (i16 << 4) | 0;
   i38 = HEAP32[i37 >> 2] | 0;
   __ZN7WebCore24DocumentMarkerController9addMarkerEPNS_5RangeENS_14DocumentMarker10MarkerTypeERKN3WTF6StringE(i19, i14, i38, __ZNK7WebCore14DocumentMarker11descriptionEv(i37) | 0);
   i37 = i16 + 1 | 0;
   if (i37 >>> 0 < i3 >>> 0) {
    i16 = i37;
   } else {
    i39 = i3;
    break;
   }
  }
 }
 do {
  if ((i14 | 0) != 0) {
   i3 = i14 | 0;
   i16 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    break;
   } else {
    HEAP32[i3 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i20 >> 2] | 0;
 if ((i39 | 0) != 0) {
  i16 = i14 + (i39 << 4) | 0;
  i39 = i14;
  while (1) {
   i3 = HEAP32[i39 + 12 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i19 = i3 + 4 | 0;
     i17 = i19 | 0;
     i37 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i37 | 0) != 0) {
      HEAP32[i17 >> 2] = i37;
      break;
     }
     i37 = i19 - 4 | 0;
     if ((i37 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 15](i37);
    }
   } while (0);
   i39 = i39 + 16 | 0;
   if ((i39 | 0) == (i16 | 0)) {
    break;
   }
  }
  HEAP32[i22 >> 2] = 0;
 }
 if ((i14 | 0) != 0) {
  HEAP32[i20 >> 2] = 0;
  HEAP32[i21 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i14);
 }
 if (i25) {
  STACKTOP = i6;
  return;
 }
 i25 = i2 + 8 | 0;
 i2 = i25 | 0;
 i14 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i14;
 if ((i14 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore20CompositeEditCommand35prepareWhitespaceAtPositionForSplitERNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 64 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 96 | 0;
 i11 = i3 + 112 | 0;
 i12 = i3 + 120 | 0;
 i13 = i2 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i15 = HEAP32[i14 + 12 >> 2] | 0;
 if ((i15 & 1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i16 = HEAP32[i14 + 36 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i16 = i14 + 32 | 0;
 if ((i15 & 2048 | 0) == 0) {
  i17 = i16 | 0;
 } else {
  i17 = HEAP32[i16 >> 2] | 0;
 }
 i16 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   if ((HEAP32[i16 + 20 >> 2] & 768 | 0) == 256) {
    i18 = HEAP32[(HEAP32[i16 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i18 = HEAP32[i16 + 36 >> 2] | 0;
   }
   if (((HEAP32[i18 + 44 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i4, i2, 1);
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i5, i2, 1);
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i6, i2, 1);
 __ZN7WebCore20CompositeEditCommand23deleteInsignificantTextERKNS_8PositionES3_(i1, i5, i6);
 i18 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i6 = i18 + 8 | 0;
   i16 = i6 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i18 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i5 = i18 + 8 | 0;
   i6 = i5 | 0;
   i17 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i7, i4, 1);
 i18 = i7 | 0;
 i5 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 i17 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i5;
 do {
  if ((i17 | 0) != 0) {
   i5 = i17 + 8 | 0;
   i6 = i5 | 0;
   i16 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i17 = i2 + 4 | 0;
 HEAP32[i17 >> 2] = HEAP32[i7 + 4 >> 2];
 i5 = HEAP32[i7 + 8 >> 2] | 0;
 i7 = i2 + 8 | 0;
 i16 = i7;
 i6 = HEAP32[i16 >> 2] & -8 | i5 & 7;
 HEAP32[i16 >> 2] = i6;
 HEAP8[i7] = i6 & 255 & -9 | i5 & 8;
 i5 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i18 = i5 + 8 | 0;
   i6 = i18 | 0;
   i15 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i2, 1);
 __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i9, i8, 0);
 i5 = i10 | 0;
 i18 = i9 | 0;
 i15 = HEAP32[i18 >> 2] | 0;
 HEAP32[i5 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i6 = i15 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i10 + 4 | 0;
 HEAP32[i6 >> 2] = HEAP32[i9 + 4 >> 2];
 i15 = HEAP32[i9 + 8 >> 2] | 0;
 i14 = i10 + 8 | 0;
 i19 = i14;
 i20 = HEAP32[i19 >> 2] & -8 | i15 & 7;
 HEAP32[i19 >> 2] = i20;
 i21 = i20 & 255 & -9 | i15 & 8;
 HEAP8[i14] = i21;
 i15 = (__ZNK7WebCore15VisiblePosition14characterAfterEv(i9) | 0) & 65535;
 L48 : do {
  if ((i15 | 0) == 32 | (i15 | 0) == 10) {
   i9 = HEAP32[i5 >> 2] | 0;
   i20 = HEAP32[i9 + 12 >> 2] | 0;
   if ((i20 & 1 | 0) == 0) {
    break;
   }
   do {
    if ((i20 & 4 | 0) != 0) {
     i22 = HEAP32[i9 + 44 >> 2] | 0;
     i23 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
     if ((i22 | 0) == (i23 | 0)) {
      break L48;
     }
     if ((HEAP32[i22 + 12 >> 2] | 0) != (HEAP32[i23 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i22 + 16 >> 2] | 0) == (HEAP32[i23 + 16 >> 2] | 0)) {
      break L48;
     }
    }
   } while (0);
   i20 = i11 | 0;
   HEAP32[i20 >> 2] = i9;
   if ((i9 | 0) == 0) {
    i24 = i21;
   } else {
    i23 = i9 + 8 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
    i24 = HEAP8[i14] | 0;
   }
   do {
    if ((i24 & 8) == 0) {
     i23 = HEAP32[i19 >> 2] & 7;
     if (!((i23 | 0) == 2 | (i23 | 0) == 4)) {
      i25 = 41;
      break;
     }
     i26 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i10) | 0;
    } else {
     i25 = 41;
    }
   } while (0);
   if ((i25 | 0) == 41) {
    i26 = HEAP32[i6 >> 2] | 0;
   }
   __ZN7WebCore20CompositeEditCommand34replaceTextInNodePreservingMarkersEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE(i1, i11, i26, 1, __ZN7WebCore22nonBreakingSpaceStringEv() | 0);
   i9 = HEAP32[i20 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i23 = i9 + 8 | 0;
   i9 = i23 | 0;
   i22 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 i26 = (__ZNK7WebCore15VisiblePosition14characterAfterEv(i8) | 0) & 65535;
 L69 : do {
  if ((i26 | 0) == 32 | (i26 | 0) == 10) {
   i11 = HEAP32[i13 >> 2] | 0;
   i6 = HEAP32[i11 + 12 >> 2] | 0;
   if ((i6 & 1 | 0) == 0) {
    break;
   }
   do {
    if ((i6 & 4 | 0) != 0) {
     i10 = HEAP32[i11 + 44 >> 2] | 0;
     i19 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
     if ((i10 | 0) == (i19 | 0)) {
      break L69;
     }
     if ((HEAP32[i10 + 12 >> 2] | 0) != (HEAP32[i19 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i19 + 16 >> 2] | 0)) {
      break L69;
     }
    }
   } while (0);
   i6 = i12 | 0;
   HEAP32[i6 >> 2] = i11;
   if ((i11 | 0) != 0) {
    i20 = i11 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   do {
    if ((HEAP8[i7] & 8) == 0) {
     i20 = HEAP32[i16 >> 2] & 7;
     if (!((i20 | 0) == 2 | (i20 | 0) == 4)) {
      i25 = 57;
      break;
     }
     i27 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i2) | 0;
    } else {
     i25 = 57;
    }
   } while (0);
   if ((i25 | 0) == 57) {
    i27 = HEAP32[i17 >> 2] | 0;
   }
   __ZN7WebCore20CompositeEditCommand34replaceTextInNodePreservingMarkersEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE(i1, i12, i27, 1, __ZN7WebCore22nonBreakingSpaceStringEv() | 0);
   i11 = HEAP32[i6 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i20 = i11 + 8 | 0;
   i11 = i20 | 0;
   i19 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
  }
 } while (0);
 i27 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i5 = i27 + 8 | 0;
   i12 = i5 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i27 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i18 = i27 + 8 | 0;
   i5 = i18 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 i27 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i8 = i27 + 8 | 0;
   i18 = i8 | 0;
   i1 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i27 = HEAP32[i4 >> 2] | 0;
 if ((i27 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i27 + 8 | 0;
 i27 = i4 | 0;
 i8 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
 HEAP32[i27 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20CompositeEditCommand34rebalanceWhitespaceOnTextSubstringEN3WTF10PassRefPtrINS_4TextEEEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 48 | 0;
 i11 = i5 + 64 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 88 | 0;
 i14 = i5 + 96 | 0;
 i15 = i5 + 104 | 0;
 i16 = i2 | 0;
 i2 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i16 = i6 | 0;
 i17 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i16 >> 2] = i17;
 if ((i17 | 0) != 0) {
  i18 = i17 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
 }
 i18 = HEAP32[i16 >> 2] | 0;
 L4 : do {
  if ((i3 | 0) > 0) {
   i17 = (i18 | 0) == 0;
   i19 = i18 + 4 | 0;
   i20 = i18 + 16 | 0;
   i21 = i18 + 8 | 0;
   i22 = i21;
   i23 = i21 | 0;
   i21 = i3;
   while (1) {
    i24 = i21 - 1 | 0;
    if (i17) {
     i25 = i4;
     i26 = i21;
     i27 = 0;
     break L4;
    }
    if ((HEAP32[i19 >> 2] | 0) >>> 0 <= i24 >>> 0) {
     i25 = i4;
     i26 = i21;
     i27 = i18;
     break L4;
    }
    if ((HEAP32[i20 >> 2] & 32 | 0) == 0) {
     i28 = HEAP16[(HEAP32[i22 >> 2] | 0) + (i24 << 1) >> 1] | 0;
    } else {
     i28 = HEAPU8[(HEAP32[i23 >> 2] | 0) + i24 | 0] | 0;
    }
    if (!((i28 << 16 >> 16 | 0) == 160 | (i28 << 16 >> 16 | 0) == 32 | (i28 << 16 >> 16 | 0) == 10 | (i28 << 16 >> 16 | 0) == 9)) {
     i25 = i4;
     i26 = i21;
     i27 = i18;
     break L4;
    }
    if ((i24 | 0) > 0) {
     i21 = i24;
    } else {
     i25 = i4;
     i26 = i24;
     i27 = i18;
     break;
    }
   }
  } else {
   i25 = i4;
   i26 = i3;
   i27 = i18;
  }
 } while (0);
 while (1) {
  if ((i27 | 0) == 0) {
   i29 = 0;
  } else {
   i29 = HEAP32[i27 + 4 >> 2] | 0;
  }
  if (i25 >>> 0 >= i29 >>> 0 | (i27 | 0) == 0) {
   break;
  }
  if ((HEAP32[i27 + 4 >> 2] | 0) >>> 0 <= i25 >>> 0) {
   break;
  }
  i18 = i27 + 8 | 0;
  if ((HEAP32[i27 + 16 >> 2] & 32 | 0) == 0) {
   i30 = HEAP16[(HEAP32[i18 >> 2] | 0) + (i25 << 1) >> 1] | 0;
  } else {
   i30 = HEAPU8[(HEAP32[i18 >> 2] | 0) + i25 | 0] | 0;
  }
  if (!((i30 << 16 >> 16 | 0) == 160 | (i30 << 16 >> 16 | 0) == 32 | (i30 << 16 >> 16 | 0) == 10 | (i30 << 16 >> 16 | 0) == 9)) {
   break;
  }
  i25 = i25 + 1 | 0;
  i26 = i26;
  i27 = i27;
 }
 i27 = i25 - i26 | 0;
 do {
  if ((i25 | 0) == (i26 | 0)) {
   i31 = i2;
  } else {
   i30 = i9 | 0;
   HEAP32[i30 >> 2] = i2;
   i29 = (i2 | 0) == 0;
   if (!i29) {
    i18 = i2 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i8, i9, i26);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i8, 1);
   i18 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i3 = i18 + 8 | 0;
     i4 = i3 | 0;
     i28 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     HEAP32[i4 >> 2] = i28;
     if ((i28 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
    }
   } while (0);
   i18 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i3 = i18 + 8 | 0;
     i28 = i3 | 0;
     i4 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i4;
     if ((i4 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
    }
   } while (0);
   i18 = i12 | 0;
   HEAP32[i18 >> 2] = i2;
   if (!i29) {
    i30 = i2 + 8 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i11, i12, i25);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i10, i11, 1);
   i30 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i3 = i30 + 8 | 0;
     i4 = i3 | 0;
     i28 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     HEAP32[i4 >> 2] = i28;
     if ((i28 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
    }
   } while (0);
   i30 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i30 | 0) != 0) {
     i29 = i30 + 8 | 0;
     i3 = i29 | 0;
     i28 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     HEAP32[i3 >> 2] = i28;
     if ((i28 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    }
   } while (0);
   __ZNK3WTF6String9substringEjj(i13, i6, i26, i27);
   i30 = __ZN7WebCore18isStartOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i7, 1) | 0 | (i26 | 0) == 0;
   if (__ZN7WebCore16isEndOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i10, 1) | 0) {
    i32 = 1;
   } else {
    i18 = HEAP32[i16 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i33 = 0;
    } else {
     i33 = HEAP32[i18 + 4 >> 2] | 0;
    }
    i32 = (i25 | 0) == (i33 | 0);
   }
   __ZN7WebCore30stringWithRebalancedWhitespaceERKN3WTF6StringEbb(i14, i13, i30, i32);
   i30 = i13 | 0;
   i18 = i14 | 0;
   do {
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i30 >> 2] | 0, HEAP32[i18 >> 2] | 0) | 0) {
     i34 = i2;
    } else {
     i29 = i15 | 0;
     HEAP32[i29 >> 2] = i2;
     __ZN7WebCore20CompositeEditCommand34replaceTextInNodePreservingMarkersEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE(i1, i15, i26, i27, i14);
     i28 = HEAP32[i29 >> 2] | 0;
     if ((i28 | 0) == 0) {
      i34 = 0;
      break;
     }
     i29 = i28 + 8 | 0;
     i28 = i29 | 0;
     i3 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i3;
     if ((i3 | 0) >= 1) {
      i34 = 0;
      break;
     }
     if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
      i34 = 0;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     i34 = 0;
    }
   } while (0);
   i29 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i3 = i29 | 0;
     i28 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i3 >> 2] = i28;
      break;
     }
    }
   } while (0);
   i29 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i18 = i29 | 0;
     i28 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i18 >> 2] = i28;
      break;
     }
    }
   } while (0);
   i29 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i30 = i29 + 8 | 0;
     i28 = i30 | 0;
     i18 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     HEAP32[i28 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
    }
   } while (0);
   i29 = HEAP32[i7 >> 2] | 0;
   if ((i29 | 0) == 0) {
    i31 = i34;
    break;
   }
   i30 = i29 + 8 | 0;
   i29 = i30 | 0;
   i18 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   HEAP32[i29 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    i31 = i34;
    break;
   }
   if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
    i31 = i34;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
   i31 = i34;
  }
 } while (0);
 i34 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i34 | 0) != 0) {
   i16 = i34 | 0;
   i7 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i34);
    break;
   } else {
    HEAP32[i16 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i31 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i34 = i31 + 8 | 0;
 i31 = i34 | 0;
 i7 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
 HEAP32[i31 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20CompositeEditCommand32moveRemainingSiblingsToNewParentEPNS_4NodeES2_N3WTF10PassRefPtrINS_7ElementEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 56 | 0;
 i8 = i5 + 64 | 0;
 i9 = i5 + 72 | 0;
 i10 = i6 + 12 | 0;
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = i10;
 i12 = i6 + 4 | 0;
 HEAP32[i12 >> 2] = 11;
 i13 = i6 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 L1 : do {
  if (!((i2 | 0) == 0 | (i2 | 0) == (i3 | 0))) {
   i6 = i2;
   i14 = 0;
   i15 = 11;
   L2 : while (1) {
    if ((i14 | 0) == (i15 | 0)) {
     i16 = i15 + 1 | 0;
     i17 = i16 + (i15 >>> 2) | 0;
     i18 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
     i17 = i18 >>> 0 > i16 >>> 0 ? i18 : i16;
     do {
      if (i15 >>> 0 < i17 >>> 0) {
       i16 = HEAP32[i11 >> 2] | 0;
       if (i17 >>> 0 > 11 >>> 0) {
        if (i17 >>> 0 > 1073741823 >>> 0) {
         i19 = 27;
         break L2;
        }
        i18 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 2) | 0;
        HEAP32[i12 >> 2] = i18 >>> 2;
        i20 = __ZN3WTF10fastMallocEj(i18) | 0;
        HEAP32[i11 >> 2] = i20;
        i21 = i20;
       } else {
        HEAP32[i11 >> 2] = i10;
        HEAP32[i12 >> 2] = 11;
        i21 = i10;
       }
       i20 = i16;
       _memcpy(i21 | 0, i20 | 0, i15 << 2) | 0;
       if ((i10 | 0) == (i16 | 0) | (i16 | 0) == 0) {
        break;
       }
       if ((HEAP32[i11 >> 2] | 0) == (i16 | 0)) {
        HEAP32[i11 >> 2] = 0;
        HEAP32[i12 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i20);
      }
     } while (0);
     HEAP32[(HEAP32[i11 >> 2] | 0) + (HEAP32[i13 >> 2] << 2) >> 2] = i6;
     i17 = i6 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     i22 = HEAP32[i13 >> 2] | 0;
    } else {
     HEAP32[(HEAP32[i11 >> 2] | 0) + (i14 << 2) >> 2] = i6;
     i17 = i6 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     i22 = HEAP32[i13 >> 2] | 0;
    }
    i23 = i22 + 1 | 0;
    HEAP32[i13 >> 2] = i23;
    i17 = HEAP32[i6 + 28 >> 2] | 0;
    if ((i17 | 0) == 0 | (i17 | 0) == (i3 | 0)) {
     break;
    }
    i6 = i17;
    i14 = i23;
    i15 = HEAP32[i12 >> 2] | 0;
   }
   if ((i19 | 0) == 27) {
    _WTFCrash();
   }
   if ((i23 | 0) == 0) {
    break;
   }
   i15 = i1;
   i14 = i7 | 0;
   i6 = i8 | 0;
   i17 = i9 | 0;
   i20 = i4 | 0;
   i16 = i4 + 8 | 0;
   if ((i4 | 0) == 0) {
    i18 = 0;
    while (1) {
     i24 = HEAP32[(HEAP32[i15 >> 2] | 0) + 60 >> 2] | 0;
     i25 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i18 << 2) >> 2] | 0;
     HEAP32[i14 >> 2] = i25;
     if ((i25 | 0) != 0) {
      i26 = i25 + 8 | 0;
      HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
     }
     FUNCTION_TABLE_viii[i24 & 3](i1, i7, 1);
     i24 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i26 = i24 + 8 | 0;
       i25 = i26 | 0;
       i27 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       HEAP32[i25 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
      }
     } while (0);
     if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i18 >>> 0) {
      break;
     }
     i24 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i18 << 2) >> 2] | 0;
     HEAP32[i6 >> 2] = i24;
     if ((i24 | 0) != 0) {
      i26 = i24 + 8 | 0;
      HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
     }
     HEAP32[i17 >> 2] = i20;
     __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i1, i8, i9);
     i26 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i24 = i26 + 8 | 0;
       i27 = i24 | 0;
       i25 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       HEAP32[i27 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
      }
     } while (0);
     i26 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i24 = i26 + 8 | 0;
       i25 = i24 | 0;
       i27 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       HEAP32[i25 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
      }
     } while (0);
     i18 = i18 + 1 | 0;
     if (i18 >>> 0 >= (HEAP32[i13 >> 2] | 0) >>> 0) {
      break L1;
     }
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else {
    i18 = 0;
    while (1) {
     i26 = HEAP32[(HEAP32[i15 >> 2] | 0) + 60 >> 2] | 0;
     i24 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i18 << 2) >> 2] | 0;
     HEAP32[i14 >> 2] = i24;
     if ((i24 | 0) != 0) {
      i27 = i24 + 8 | 0;
      HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
     }
     FUNCTION_TABLE_viii[i26 & 3](i1, i7, 1);
     i26 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i27 = i26 + 8 | 0;
       i24 = i27 | 0;
       i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       HEAP32[i24 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
      }
     } while (0);
     if ((HEAP32[i13 >> 2] | 0) >>> 0 <= i18 >>> 0) {
      break;
     }
     i26 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i18 << 2) >> 2] | 0;
     HEAP32[i6 >> 2] = i26;
     if ((i26 | 0) != 0) {
      i27 = i26 + 8 | 0;
      HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
     }
     HEAP32[i17 >> 2] = i20;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i1, i8, i9);
     i27 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i27 | 0) != 0) {
       i26 = i27 + 8 | 0;
       i25 = i26 | 0;
       i24 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       HEAP32[i25 >> 2] = i24;
       if ((i24 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
      }
     } while (0);
     i27 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i27 | 0) != 0) {
       i26 = i27 + 8 | 0;
       i24 = i26 | 0;
       i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       HEAP32[i24 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
      }
     } while (0);
     i18 = i18 + 1 | 0;
     if (i18 >>> 0 >= (HEAP32[i13 >> 2] | 0) >>> 0) {
      break L1;
     }
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 8 | 0;
   i8 = i9 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i13 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i9 = HEAP32[i11 >> 2] | 0;
  i1 = i9 + (i4 << 2) | 0;
  i4 = i9;
  while (1) {
   i9 = (HEAP32[i4 >> 2] | 0) + 8 | 0;
   i8 = i9 - 8 | 0;
   i7 = i9 | 0;
   i23 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i23;
   do {
    if ((i23 | 0) < 1) {
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i13 >> 2] = 0;
 }
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == (i13 | 0) | (i13 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20CompositeEditCommand22positionOutsideTabSpanERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i3 | 0;
 if (!(__ZN7WebCore17isTabSpanTextNodeEPKNS_4NodeE(HEAP32[i11 >> 2] | 0) | 0)) {
  i12 = HEAP32[i11 >> 2] | 0;
  HEAP32[i1 >> 2] = i12;
  if ((i12 | 0) != 0) {
   i13 = i12 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
  i13 = i3 + 8 | 0;
  i12 = i1 + 8 | 0;
  i14 = i12;
  i15 = HEAP32[i14 >> 2] & -8 | HEAP32[i13 >> 2] & 7;
  HEAP32[i14 >> 2] = i15;
  HEAP8[i12] = i15 & 255 & -9 | HEAP8[i13] & 8;
  STACKTOP = i4;
  return;
 }
 i13 = i3 + 8 | 0;
 i15 = i13;
 i12 = HEAP32[i15 >> 2] & 7;
 if ((i12 | 0) == 2) {
  i14 = HEAP32[i11 >> 2] | 0;
  i16 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i14) | 0;
  i17 = i7 | 0;
  HEAP32[i17 >> 2] = i16;
  if ((i16 | 0) != 0) {
   i18 = i16 + 8 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  }
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i7, (__ZNK7WebCore4Node9nodeIndexEv(i14) | 0) + 1 | 0, 0);
  i14 = HEAP32[i17 >> 2] | 0;
  if ((i14 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i17 = i14 + 8 | 0;
  i14 = i17 | 0;
  i7 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
  HEAP32[i14 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  STACKTOP = i4;
  return;
 } else if ((i12 | 0) == 3 | (i12 | 0) == 4) {
  i17 = HEAP32[i11 >> 2] | 0;
  HEAP32[i1 >> 2] = i17;
  if ((i17 | 0) != 0) {
   i7 = i17 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  }
  HEAP32[i1 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
  i7 = i1 + 8 | 0;
  i17 = i7;
  i14 = HEAP32[i17 >> 2] & -8 | HEAP32[i15 >> 2] & 7;
  HEAP32[i17 >> 2] = i14;
  HEAP8[i7] = i14 & 255 & -9 | HEAP8[i13] & 8;
  STACKTOP = i4;
  return;
 } else if ((i12 | 0) == 1) {
  i12 = HEAP32[i11 >> 2] | 0;
  i11 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i12) | 0;
  i13 = i8 | 0;
  HEAP32[i13 >> 2] = i11;
  if ((i11 | 0) != 0) {
   i14 = i11 + 8 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  }
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i8, __ZNK7WebCore4Node9nodeIndexEv(i12) | 0, 0);
  i12 = HEAP32[i13 >> 2] | 0;
  if ((i12 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i13 = i12 + 8 | 0;
  i12 = i13 | 0;
  i8 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
  HEAP32[i12 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  STACKTOP = i4;
  return;
 } else {
  i13 = __ZN7WebCore11tabSpanNodeEPKNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i3) | 0) | 0;
  i8 = i3 + 4 | 0;
  i12 = HEAP32[i8 >> 2] | 0;
  if ((i12 | 0) <= (__ZN7WebCore14caretMinOffsetEPKNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i3) | 0) | 0)) {
   i12 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i13) | 0;
   i14 = i6 | 0;
   HEAP32[i14 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i11 = i12 + 8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i6, __ZNK7WebCore4Node9nodeIndexEv(i13) | 0, 0);
   i6 = HEAP32[i14 >> 2] | 0;
   if ((i6 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i14 = i6 + 8 | 0;
   i6 = i14 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   STACKTOP = i4;
   return;
  }
  i14 = HEAP32[i8 >> 2] | 0;
  if ((i14 | 0) >= (__ZN7WebCore14caretMaxOffsetEPKNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i3) | 0) | 0)) {
   i14 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i13) | 0;
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i6 = i14 + 8 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i5, (__ZNK7WebCore4Node9nodeIndexEv(i13) | 0) + 1 | 0, 0);
   i5 = HEAP32[i11 >> 2] | 0;
   if ((i5 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i11 = i5 + 8 | 0;
   i5 = i11 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
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
  i11 = __ZNK7WebCore8Position13containerNodeEv(i3) | 0;
  i3 = i10 | 0;
  HEAP32[i3 >> 2] = i11;
  if ((i11 | 0) != 0) {
   i6 = i11 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  __ZN7WebCore20CompositeEditCommand30splitTextNodeContainingElementEN3WTF10PassRefPtrINS_4TextEEEj(i2, i10, HEAP32[i8 >> 2] | 0);
  i8 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i3 = i8 + 8 | 0;
    i10 = i3 | 0;
    i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    HEAP32[i10 >> 2] = i2;
    if ((i2 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   }
  } while (0);
  i8 = __ZN7WebCore8Position10findParentEPKNS_4NodeE(i13) | 0;
  i3 = i9 | 0;
  HEAP32[i3 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i2 = i8 + 8 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  }
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i9, __ZNK7WebCore4Node9nodeIndexEv(i13) | 0, 0);
  i13 = HEAP32[i3 >> 2] | 0;
  if ((i13 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i13 + 8 | 0;
  i13 = i3 | 0;
  i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
  HEAP32[i13 >> 2] = i9;
  if ((i9 | 0) >= 1) {
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
}
function __ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i4 | 0;
 i9 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i4 + 8 | 0;
  i11 = 0;
  i12 = i10;
  i13 = i10;
 } else {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i4 + 8 | 0;
  i9 = i10;
  i11 = HEAP32[i9 >> 2] & -8;
  i12 = i10;
  i13 = i9;
 }
 i9 = i4 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i1 + 28 >> 2];
 i10 = HEAP32[i1 + 32 >> 2] | 0;
 i14 = i11 | i10 & 7;
 HEAP32[i13 >> 2] = i14;
 HEAP8[i12] = i14 & 255 & -9 | i10 & 8;
 i10 = i5 | 0;
 i14 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i10 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i15 = 0;
 } else {
  i11 = i14 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i15 = HEAP32[i10 >> 2] | 0;
 }
 i11 = i5 + 4 | 0;
 HEAP32[i11 >> 2] = HEAP32[i2 + 28 >> 2];
 i14 = HEAP32[i2 + 32 >> 2] | 0;
 i16 = i5 + 8 | 0;
 i17 = i16;
 i18 = HEAP32[i17 >> 2] & -8 | i14 & 7;
 HEAP32[i17 >> 2] = i18;
 i19 = i18 & 255 & -9 | i14 & 8;
 HEAP8[i16] = i19;
 if ((HEAP32[i8 >> 2] | 0) == (i15 | 0)) {
  do {
   if ((HEAP8[i12] & 8) == 0) {
    i14 = HEAP32[i13 >> 2] & 7;
    if (!((i14 | 0) == 2 | (i14 | 0) == 4)) {
     i20 = 9;
     break;
    }
    i14 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i21 = i14;
    i22 = HEAP8[i16] | 0;
   } else {
    i20 = 9;
   }
  } while (0);
  if ((i20 | 0) == 9) {
   i21 = HEAP32[i9 >> 2] | 0;
   i22 = i19;
  }
  do {
   if ((i22 & 8) == 0) {
    i19 = HEAP32[i17 >> 2] & 7;
    if (!((i19 | 0) == 2 | (i19 | 0) == 4)) {
     i20 = 13;
     break;
    }
    i23 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i20 = 13;
   }
  } while (0);
  if ((i20 | 0) == 13) {
   i23 = HEAP32[i11 >> 2] | 0;
  }
  do {
   if ((i21 | 0) == (i23 | 0)) {
    if (((HEAP32[i17 >> 2] ^ HEAP32[i13 >> 2]) & 7 | 0) != 0) {
     i24 = 0;
     break;
    }
    i11 = i6 | 0;
    i5 = HEAP32[i1 + 36 >> 2] | 0;
    HEAP32[i11 >> 2] = i5;
    if ((i5 | 0) != 0) {
     i22 = i5 + 8 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    }
    i22 = i6 + 4 | 0;
    HEAP32[i22 >> 2] = HEAP32[i1 + 40 >> 2];
    i5 = HEAP32[i1 + 44 >> 2] | 0;
    i19 = i6 + 8 | 0;
    i9 = i19;
    i16 = HEAP32[i9 >> 2] & -8 | i5 & 7;
    HEAP32[i9 >> 2] = i16;
    HEAP8[i19] = i16 & 255 & -9 | i5 & 8;
    i5 = i7 | 0;
    i16 = HEAP32[i2 + 36 >> 2] | 0;
    HEAP32[i5 >> 2] = i16;
    if ((i16 | 0) == 0) {
     i25 = 0;
    } else {
     i4 = i16 + 8 | 0;
     HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
     i25 = HEAP32[i5 >> 2] | 0;
    }
    i4 = i7 + 4 | 0;
    HEAP32[i4 >> 2] = HEAP32[i2 + 40 >> 2];
    i16 = HEAP32[i2 + 44 >> 2] | 0;
    i12 = i7 + 8 | 0;
    i14 = i12;
    i18 = HEAP32[i14 >> 2] & -8 | i16 & 7;
    HEAP32[i14 >> 2] = i18;
    i26 = i18 & 255 & -9 | i16 & 8;
    HEAP8[i12] = i26;
    do {
     if ((HEAP32[i11 >> 2] | 0) == (i25 | 0)) {
      do {
       if ((HEAP8[i19] & 8) == 0) {
        i16 = HEAP32[i9 >> 2] & 7;
        if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
         i20 = 24;
         break;
        }
        i16 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
        i27 = i16;
        i28 = HEAP8[i12] | 0;
       } else {
        i20 = 24;
       }
      } while (0);
      if ((i20 | 0) == 24) {
       i27 = HEAP32[i22 >> 2] | 0;
       i28 = i26;
      }
      do {
       if ((i28 & 8) == 0) {
        i16 = HEAP32[i14 >> 2] & 7;
        if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
         i20 = 28;
         break;
        }
        i29 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
       } else {
        i20 = 28;
       }
      } while (0);
      if ((i20 | 0) == 28) {
       i29 = HEAP32[i4 >> 2] | 0;
      }
      if ((i27 | 0) != (i29 | 0)) {
       i30 = 0;
       break;
      }
      if (((HEAP32[i14 >> 2] ^ HEAP32[i9 >> 2]) & 7 | 0) != 0) {
       i30 = 0;
       break;
      }
      if ((HEAP32[i1 + 48 >> 2] | 0) != (HEAP32[i2 + 48 >> 2] | 0)) {
       i30 = 0;
       break;
      }
      i16 = HEAP8[i1 + 56 | 0] | 0;
      i18 = HEAP8[i2 + 56 | 0] | 0;
      if ((i16 & 1) != 0 ^ (i18 & 1) != 0) {
       i30 = 0;
       break;
      }
      i30 = (i16 & 2) != 0 ^ (i18 & 2) != 0 ^ 1;
     } else {
      i30 = 0;
     }
    } while (0);
    i9 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i14 = i9 + 8 | 0;
      i4 = i14 | 0;
      i26 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      HEAP32[i4 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
     }
    } while (0);
    i9 = HEAP32[i11 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i24 = i30;
     break;
    }
    i5 = i9 + 8 | 0;
    i9 = i5 | 0;
    i14 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     i24 = i30;
     break;
    }
    if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
     i24 = i30;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    i24 = i30;
   } else {
    i24 = 0;
   }
  } while (0);
  i31 = i24;
  i32 = HEAP32[i10 >> 2] | 0;
 } else {
  i31 = 0;
  i32 = i15;
 }
 do {
  if ((i32 | 0) != 0) {
   i15 = i32 + 8 | 0;
   i10 = i15 | 0;
   i24 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i32 = HEAP32[i8 >> 2] | 0;
 if ((i32 | 0) == 0) {
  STACKTOP = i3;
  return i31 | 0;
 }
 i8 = i32 + 8 | 0;
 i32 = i8 | 0;
 i15 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
 HEAP32[i32 >> 2] = i15;
 if ((i15 | 0) >= 1) {
  STACKTOP = i3;
  return i31 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i31 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i3;
 return i31 | 0;
}
function __ZN7WebCore20CompositeEditCommand15splitTreeToNodeEPNS_4NodeES2_b(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 40 | 0;
 i11 = i6 + 56 | 0;
 i12 = i6 + 72 | 0;
 i13 = i6 + 80 | 0;
 if (i5) {
  i5 = HEAP32[i4 + 16 >> 2] | 0;
  i14 = (i5 | 0) == 0 ? i4 : i5 | 0;
 } else {
  i14 = i4;
 }
 i4 = (i14 | 0) == 0;
 if (!i4) {
  i5 = i14 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 L7 : do {
  if ((i3 | 0) == 0) {
   i15 = 0;
  } else {
   i5 = i3 + 8 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   i5 = i9 | 0;
   i16 = i11 | 0;
   i17 = i10 | 0;
   i18 = i8 | 0;
   i19 = i12 | 0;
   i20 = i13 | 0;
   i21 = i7 | 0;
   i22 = i3;
   while (1) {
    i23 = i22 + 16 | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24 | 0;
    if ((i25 | 0) == (i14 | 0)) {
     i15 = i22;
     break L7;
    }
    if ((HEAP32[i24 + 12 >> 2] & 4 | 0) == 0) {
     i15 = i22;
     break L7;
    }
    __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i9, i25);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, 1);
    i25 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i24 = i25 + 8 | 0;
      i26 = i24 | 0;
      i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i27;
      if ((i27 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 132 >> 2] & 31](i22) | 0) {
      __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i11, i22);
     } else {
      HEAP32[i21 >> 2] = i22;
      i25 = i22 + 8 | 0;
      HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i11, i7, 1);
      i25 = HEAP32[i21 >> 2] | 0;
      if ((i25 | 0) == 0) {
       break;
      }
      i24 = i25 + 8 | 0;
      i25 = i24 | 0;
      i27 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i27;
      if ((i27 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i10, i11, 1);
    i24 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i27 = i24 + 8 | 0;
      i25 = i27 | 0;
      i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
     }
    } while (0);
    do {
     if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i8, i10) | 0)) {
      i24 = HEAP32[i23 >> 2] | 0;
      HEAP32[i19 >> 2] = i24;
      if ((i24 | 0) != 0) {
       i27 = i24 + 8 | 0;
       HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
      }
      HEAP32[i20 >> 2] = i22;
      i27 = i22 + 8 | 0;
      HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
      __ZN7WebCore20CompositeEditCommand12splitElementEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE(i2, i12, i13);
      i27 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i27 | 0) != 0) {
        i24 = i27 + 8 | 0;
        i26 = i24 | 0;
        i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
        HEAP32[i26 >> 2] = i25;
        if ((i25 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
       }
      } while (0);
      i27 = HEAP32[i19 >> 2] | 0;
      if ((i27 | 0) == 0) {
       break;
      }
      i24 = i27 + 8 | 0;
      i27 = i24 | 0;
      i25 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      HEAP32[i27 >> 2] = i25;
      if ((i25 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    i24 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i25 = i24 + 8 | 0;
      i27 = i25 | 0;
      i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      HEAP32[i27 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
     }
    } while (0);
    i24 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i25 = i24 + 8 | 0;
      i26 = i25 | 0;
      i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i27;
      if ((i27 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
     }
    } while (0);
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24 | 0;
    i27 = (i24 | 0) == 0;
    if (!i27) {
     i26 = i24 + 8 | 0;
     HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    }
    i26 = i22 + 8 | 0;
    i24 = i26 - 8 | 0;
    i28 = i26 | 0;
    i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
    HEAP32[i28 >> 2] = i29;
    do {
     if ((i29 | 0) < 1) {
      if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24);
     }
    } while (0);
    if (i27) {
     i15 = i25;
     break;
    } else {
     i22 = i25;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i15;
 if (i4) {
  STACKTOP = i6;
  return;
 }
 i4 = i14 + 8 | 0;
 i14 = i4 | 0;
 i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i15;
 if ((i15 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore20CompositeEditCommand23deleteInsignificantTextERKNS_8PositionES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i3 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i2, i3) | 0) > -1) {
  STACKTOP = i4;
  return;
 }
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 } else {
  i9 = 0;
  i10 = 0;
  i11 = 0;
  i12 = i8;
 }
 L12 : while (1) {
  i8 = i12 + 12 | 0;
  do {
   if ((HEAP32[i8 >> 2] & 1 | 0) == 0) {
    i13 = i11;
    i14 = i10;
    i15 = i9;
   } else {
    i16 = i12;
    if ((i9 | 0) != (i10 | 0)) {
     HEAP32[i11 + (i9 << 2) >> 2] = i16;
     if ((i12 | 0) != 0) {
      i17 = i12 + 8 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     }
     i13 = i11;
     i14 = i10;
     i15 = i9 + 1 | 0;
     break;
    }
    i17 = i10 + 1 | 0;
    i18 = i17 + (i10 >>> 2) | 0;
    i19 = i18 >>> 0 > 16 >>> 0 ? i18 : 16;
    i18 = i19 >>> 0 > i17 >>> 0 ? i19 : i17;
    do {
     if (i10 >>> 0 < i18 >>> 0) {
      if (i18 >>> 0 > 1073741823 >>> 0) {
       i20 = 12;
       break L12;
      }
      i19 = __ZN3WTF18fastMallocGoodSizeEj(i18 << 2) | 0;
      i21 = i19 >>> 2;
      i22 = __ZN3WTF10fastMallocEj(i19) | 0;
      i19 = i22;
      i23 = i11;
      _memcpy(i22 | 0, i23 | 0, i10 << 2) | 0;
      if ((i11 | 0) == 0) {
       i24 = i19;
       i25 = i21;
       break;
      }
      i22 = (i19 | 0) == (i11 | 0);
      __ZN3WTF8fastFreeEPv(i23);
      i24 = i22 ? 0 : i19;
      i25 = i22 ? 0 : i21;
     } else {
      i24 = i11;
      i25 = i10;
     }
    } while (0);
    HEAP32[i24 + (i10 << 2) >> 2] = i16;
    if ((i12 | 0) == 0) {
     i13 = i24;
     i14 = i25;
     i15 = i17;
     break;
    }
    i18 = i12 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
    i13 = i24;
    i14 = i25;
    i15 = i17;
   }
  } while (0);
  if ((i12 | 0) == (HEAP32[i7 >> 2] | 0)) {
   break;
  }
  if ((HEAP32[i8 >> 2] & 2 | 0) != 0) {
   i18 = HEAP32[i12 + 36 >> 2] | 0;
   if ((i18 | 0) != 0) {
    i9 = i15;
    i10 = i14;
    i11 = i13;
    i12 = i18;
    continue;
   }
  }
  i18 = HEAP32[i12 + 28 >> 2] | 0;
  if ((i18 | 0) != 0) {
   i9 = i15;
   i10 = i14;
   i11 = i13;
   i12 = i18;
   continue;
  }
  i18 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i12) | 0;
  if ((i18 | 0) == 0) {
   break;
  } else {
   i9 = i15;
   i10 = i14;
   i11 = i13;
   i12 = i18;
  }
 }
 if ((i20 | 0) == 12) {
  _WTFCrash();
 }
 i20 = (i15 | 0) == 0;
 do {
  if (!i20) {
   i12 = i2 + 8 | 0;
   i11 = i12;
   i14 = i2 + 4 | 0;
   i10 = i3 + 8 | 0;
   i9 = i10;
   i25 = i3 + 4 | 0;
   i24 = i5 | 0;
   i18 = 0;
   while (1) {
    i21 = HEAP32[i13 + (i18 << 2) >> 2] | 0;
    i22 = i21 | 0;
    L41 : do {
     if ((i22 | 0) == (HEAP32[i6 >> 2] | 0)) {
      do {
       if ((HEAP8[i12] & 8) == 0) {
        i19 = HEAP32[i11 >> 2] & 7;
        if (!((i19 | 0) == 2 | (i19 | 0) == 4)) {
         break;
        }
        i26 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i2) | 0;
        break L41;
       }
      } while (0);
      i26 = HEAP32[i14 >> 2] | 0;
     } else {
      i26 = 0;
     }
    } while (0);
    L48 : do {
     if ((i22 | 0) == (HEAP32[i7 >> 2] | 0)) {
      do {
       if ((HEAP8[i10] & 8) == 0) {
        i17 = HEAP32[i9 >> 2] & 7;
        if (!((i17 | 0) == 2 | (i17 | 0) == 4)) {
         break;
        }
        i27 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i3) | 0;
        break L48;
       }
      } while (0);
      i27 = HEAP32[i25 >> 2] | 0;
     } else {
      i17 = HEAP32[i21 + 36 >> 2] | 0;
      if ((i17 | 0) == 0) {
       i27 = 0;
       break;
      }
      i27 = HEAP32[i17 + 4 >> 2] | 0;
     }
    } while (0);
    HEAP32[i24 >> 2] = i21;
    if ((i21 | 0) != 0) {
     i22 = i21 + 8 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    }
    __ZN7WebCore20CompositeEditCommand23deleteInsignificantTextEN3WTF10PassRefPtrINS_4TextEEEjj(i1, i5, i26, i27);
    i22 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i17 = i22 + 8 | 0;
      i16 = i17 | 0;
      i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
      HEAP32[i16 >> 2] = i19;
      if ((i19 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     }
    } while (0);
    i18 = i18 + 1 | 0;
    if (i18 >>> 0 >= i15 >>> 0) {
     break;
    }
   }
   if (i20) {
    break;
   }
   i18 = i13 + (i15 << 2) | 0;
   i24 = i13;
   while (1) {
    i25 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i9 = i25 + 8 | 0;
      i10 = i9 | 0;
      i14 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
      HEAP32[i10 >> 2] = i14;
      if ((i14 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    i24 = i24 + 4 | 0;
    if ((i24 | 0) == (i18 | 0)) {
     break;
    }
   }
  }
 } while (0);
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i4;
 return;
}
function __ZNSt3__127__insertion_sort_incompleteIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEbT0_SA_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 switch (i2 - i1 >> 2 | 0) {
 case 2:
  {
   i4 = i2 - 4 | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i4 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
    i5 = 1;
    return i5 | 0;
   }
   i6 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i4 >> 2] = i6;
   i5 = 1;
   return i5 | 0;
  }
 case 3:
  {
   i6 = i1 + 4 | 0;
   i4 = i2 - 4 | 0;
   i7 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0;
   i8 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
   if (!i7) {
    if (!i8) {
     i5 = 1;
     return i5 | 0;
    }
    i7 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i4 >> 2] = i7;
    if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
     i5 = 1;
     return i5 | 0;
    }
    i7 = HEAP32[i1 >> 2] | 0;
    HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i6 >> 2] = i7;
    i5 = 1;
    return i5 | 0;
   }
   i7 = HEAP32[i1 >> 2] | 0;
   if (i8) {
    HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i4 >> 2] = i7;
    i5 = 1;
    return i5 | 0;
   }
   HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = i7;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i4 >> 2] | 0, i7) | 0)) {
    i5 = 1;
    return i5 | 0;
   }
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i4 >> 2] = i7;
   i5 = 1;
   return i5 | 0;
  }
 case 4:
  {
   __ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_(i1, i1 + 4 | 0, i1 + 8 | 0, i2 - 4 | 0, i3) | 0;
   i5 = 1;
   return i5 | 0;
  }
 case 5:
  {
   i7 = i1 + 4 | 0;
   i4 = i1 + 8 | 0;
   i6 = i1 + 12 | 0;
   i8 = i2 - 4 | 0;
   __ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_(i1, i7, i4, i6, i3) | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i8 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
    i5 = 1;
    return i5 | 0;
   }
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i9;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i6 >> 2] | 0, HEAP32[i4 >> 2] | 0) | 0)) {
    i5 = 1;
    return i5 | 0;
   }
   i9 = HEAP32[i4 >> 2] | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i6 >> 2] = i9;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i8, HEAP32[i7 >> 2] | 0) | 0)) {
    i5 = 1;
    return i5 | 0;
   }
   i8 = HEAP32[i7 >> 2] | 0;
   i9 = HEAP32[i4 >> 2] | 0;
   HEAP32[i7 >> 2] = i9;
   HEAP32[i4 >> 2] = i8;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i9, HEAP32[i1 >> 2] | 0) | 0)) {
    i5 = 1;
    return i5 | 0;
   }
   i9 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i7 >> 2] = i9;
   i5 = 1;
   return i5 | 0;
  }
 case 0:
 case 1:
  {
   i5 = 1;
   return i5 | 0;
  }
 default:
  {
   i9 = i1 + 8 | 0;
   i7 = i1 + 4 | 0;
   i8 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i7 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0;
   i4 = FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i9 >> 2] | 0, HEAP32[i7 >> 2] | 0) | 0;
   do {
    if (i8) {
     i6 = HEAP32[i1 >> 2] | 0;
     if (i4) {
      HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
      HEAP32[i9 >> 2] = i6;
      break;
     }
     HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
     HEAP32[i7 >> 2] = i6;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i9 >> 2] | 0, i6) | 0)) {
      break;
     }
     i6 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i6;
    } else {
     if (!i4) {
      break;
     }
     i6 = HEAP32[i7 >> 2] | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     HEAP32[i7 >> 2] = i10;
     HEAP32[i9 >> 2] = i6;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i10, HEAP32[i1 >> 2] | 0) | 0)) {
      break;
     }
     i10 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
     HEAP32[i7 >> 2] = i10;
    }
   } while (0);
   i7 = i1 + 12 | 0;
   if ((i7 | 0) == (i2 | 0)) {
    i5 = 1;
    return i5 | 0;
   } else {
    i11 = i9;
    i12 = 0;
    i13 = i7;
   }
   while (1) {
    if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](HEAP32[i13 >> 2] | 0, HEAP32[i11 >> 2] | 0) | 0) {
     i7 = HEAP32[i13 >> 2] | 0;
     i9 = i11;
     i4 = i13;
     while (1) {
      HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
      if ((i9 | 0) == (i1 | 0)) {
       i14 = i1;
       break;
      }
      i8 = i9 - 4 | 0;
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i7, HEAP32[i8 >> 2] | 0) | 0) {
       i4 = i9;
       i9 = i8;
      } else {
       i14 = i9;
       break;
      }
     }
     HEAP32[i14 >> 2] = i7;
     i9 = i12 + 1 | 0;
     if ((i9 | 0) == 8) {
      break;
     } else {
      i15 = i9;
     }
    } else {
     i15 = i12;
    }
    i9 = i13 + 4 | 0;
    if ((i9 | 0) == (i2 | 0)) {
     i5 = 1;
     i16 = 52;
     break;
    } else {
     i11 = i13;
     i12 = i15;
     i13 = i9;
    }
   }
   if ((i16 | 0) == 52) {
    return i5 | 0;
   }
   i5 = (i13 + 4 | 0) == (i2 | 0);
   return i5 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore20CompositeEditCommand22mergeIdenticalElementsEN3WTF10PassRefPtrINS_7ElementEEES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i2 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i2 | 0;
 i13 = i3 | 0;
 do {
  if ((i13 | 0) != (HEAP32[i2 + 28 >> 2] | 0)) {
   i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
   i15 = i5 | 0;
   HEAP32[i15 >> 2] = i13;
   i16 = (i3 | 0) == 0;
   if (!i16) {
    i17 = i3 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   }
   FUNCTION_TABLE_viii[i14 & 3](i1, i5, 1);
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 + 8 | 0;
     i17 = i15 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i14 = i6 | 0;
   HEAP32[i14 >> 2] = i13;
   if (!i16) {
    i15 = i3 + 8 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   i15 = i7 | 0;
   HEAP32[i15 >> 2] = i12;
   if ((i2 | 0) != 0) {
    i18 = i2 + 8 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   }
   __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i1, i6, i7);
   i18 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i15 = i18 + 8 | 0;
     i17 = i15 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i18 = HEAP32[i14 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i16 = i18 + 8 | 0;
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
 i7 = i10 | 0;
 HEAP32[i7 >> 2] = i2;
 i6 = (i2 | 0) == 0;
 if (!i6) {
  i12 = i2 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = i11 | 0;
 HEAP32[i12 >> 2] = i3;
 i13 = (i3 | 0) == 0;
 if (!i13) {
  i5 = i3 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 __ZN7WebCore29MergeIdenticalElementsCommand6createEN3WTF10PassRefPtrINS_7ElementEEES4_(i9, i10, i11);
 i11 = i8 | 0;
 i10 = i9 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = i9;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i8);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 + 4 | 0;
   i1 = i11 | 0;
   i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i1 >> 2] = i9;
    break;
   }
   i9 = i11 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
  }
 } while (0);
 i8 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = i8 + 8 | 0;
   i9 = i12 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 + 8 | 0;
   i12 = i7 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 do {
  if (!i13) {
   i8 = i3 + 8 | 0;
   i7 = i8 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 if (i6) {
  STACKTOP = i4;
  return;
 }
 i6 = i2 + 8 | 0;
 i2 = i6 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
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
function __ZN7WebCore20CompositeEditCommand25replaceSelectedTextInNodeERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i5 | 0;
 i10 = HEAP32[i2 + 96 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
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
 i10 = i5 + 4 | 0;
 HEAP32[i10 >> 2] = HEAP32[i2 + 100 >> 2];
 i11 = HEAP32[i2 + 104 >> 2] | 0;
 i15 = i12 | i11 & 7;
 HEAP32[i14 >> 2] = i15;
 HEAP8[i13] = i15 & 255 & -9 | i11 & 8;
 i11 = i6 | 0;
 i15 = HEAP32[i2 + 108 >> 2] | 0;
 HEAP32[i11 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i13 = i15 + 8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 i13 = i6 + 4 | 0;
 HEAP32[i13 >> 2] = HEAP32[i2 + 112 >> 2];
 i15 = HEAP32[i2 + 116 >> 2] | 0;
 i14 = i6 + 8 | 0;
 i12 = i14;
 i16 = HEAP32[i12 >> 2] & -8 | i15 & 7;
 HEAP32[i12 >> 2] = i16;
 HEAP8[i14] = i16 & 255 & -9 | i15 & 8;
 i15 = __ZNK7WebCore8Position13containerNodeEv(i5) | 0;
 do {
  if ((i15 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i6) | 0)) {
   if ((HEAP32[(__ZNK7WebCore8Position13containerNodeEv(i5) | 0) + 12 >> 2] & 1 | 0) == 0) {
    i17 = 9;
    break;
   }
   if (__ZN7WebCore17isTabSpanTextNodeEPKNS_4NodeE(__ZNK7WebCore8Position13containerNodeEv(i5) | 0) | 0) {
    i17 = 9;
    break;
   }
   i16 = __ZNK7WebCore8Position13containerTextEv(i5) | 0;
   if ((i16 | 0) == 0) {
    i14 = i7 | 0;
    HEAP32[i14 >> 2] = 0;
    i18 = i14;
   } else {
    i14 = i16 + 8 | 0;
    i12 = HEAP32[i14 >> 2] | 0;
    i19 = i7 | 0;
    HEAP32[i19 >> 2] = i16;
    HEAP32[i14 >> 2] = i12 + 2;
    i18 = i19;
   }
   i19 = HEAP32[i10 >> 2] | 0;
   __ZN7WebCore20CompositeEditCommand17replaceTextInNodeEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE(i2, i7, i19, (HEAP32[i13 >> 2] | 0) - i19 | 0, i3);
   i19 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i12 = i19 + 8 | 0;
     i14 = i12 | 0;
     i20 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i20;
     if ((i20 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   i19 = i8 | 0;
   HEAP32[i19 >> 2] = i16;
   i12 = HEAP32[i3 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i21 = 0;
   } else {
    i21 = HEAP32[i12 + 4 >> 2] | 0;
   }
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4TextEEEj(i1, i8, i21 + (HEAP32[i10 >> 2] | 0) | 0);
   i12 = HEAP32[i19 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i19 = i12 + 8 | 0;
   i12 = i19 | 0;
   i20 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  } else {
   i17 = 9;
  }
 } while (0);
 if ((i17 | 0) == 9) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i17 = i1 + 8 | 0;
  i1 = i17;
  i10 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i10 & -8;
  HEAP8[i17] = i10 & 255 & -16;
 }
 i10 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = i10 + 8 | 0;
   i17 = i11 | 0;
   i1 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i10 + 8 | 0;
 i10 = i9 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CompositeEditCommand21removeChildrenInRangeEN3WTF10PassRefPtrINS_4NodeEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i7 + 12 >> 2] & 2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = __ZNK7WebCore13ContainerNode9childNodeEj(i7, i3) | 0;
 if ((i2 | 0) != 0 & i3 >>> 0 < i4 >>> 0) {
  i8 = 0;
  i9 = 0;
  i10 = 0;
  i11 = i2;
  i12 = i3;
 } else {
  STACKTOP = i5;
  return;
 }
 L6 : while (1) {
  do {
   if ((i8 | 0) == (i9 | 0)) {
    i3 = i9 + 1 | 0;
    i2 = i3 + (i9 >>> 2) | 0;
    i7 = i2 >>> 0 > 16 >>> 0 ? i2 : 16;
    i2 = i7 >>> 0 > i3 >>> 0 ? i7 : i3;
    do {
     if (i9 >>> 0 < i2 >>> 0) {
      if (i2 >>> 0 > 1073741823 >>> 0) {
       i13 = 11;
       break L6;
      }
      i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
      i14 = i7 >>> 2;
      i15 = __ZN3WTF10fastMallocEj(i7) | 0;
      i7 = i15;
      i16 = i10;
      _memcpy(i15 | 0, i16 | 0, i9 << 2) | 0;
      if ((i10 | 0) == 0) {
       i17 = i7;
       i18 = i14;
       break;
      }
      i15 = (i7 | 0) == (i10 | 0);
      __ZN3WTF8fastFreeEPv(i16);
      i17 = i15 ? 0 : i7;
      i18 = i15 ? 0 : i14;
     } else {
      i17 = i10;
      i18 = i9;
     }
    } while (0);
    HEAP32[i17 + (i9 << 2) >> 2] = i11;
    if ((i11 | 0) == 0) {
     i19 = i17;
     i20 = i18;
     i21 = i3;
     break;
    }
    i2 = i11 + 8 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
    i19 = i17;
    i20 = i18;
    i21 = i3;
   } else {
    HEAP32[i10 + (i8 << 2) >> 2] = i11;
    if ((i11 | 0) != 0) {
     i2 = i11 + 8 | 0;
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
    }
    i19 = i10;
    i20 = i9;
    i21 = i8 + 1 | 0;
   }
  } while (0);
  i2 = i12 + 1 | 0;
  i14 = HEAP32[i11 + 28 >> 2] | 0;
  if ((i14 | 0) != 0 & i2 >>> 0 < i4 >>> 0) {
   i8 = i21;
   i9 = i20;
   i10 = i19;
   i11 = i14;
   i12 = i2;
  } else {
   break;
  }
 }
 if ((i13 | 0) == 11) {
  _WTFCrash();
 }
 i13 = i19;
 i12 = (i21 | 0) == 0;
 do {
  if (!i12) {
   i11 = i1;
   i10 = i6 | 0;
   i20 = 0;
   while (1) {
    i9 = HEAP32[(HEAP32[i11 >> 2] | 0) + 60 >> 2] | 0;
    i8 = i19 + (i20 << 2) | 0;
    HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i8 >> 2] = 0;
    FUNCTION_TABLE_viii[i9 & 3](i1, i6, 1);
    i9 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i8 = i9 + 8 | 0;
      i4 = i8 | 0;
      i18 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      HEAP32[i4 >> 2] = i18;
      if ((i18 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
     }
    } while (0);
    i20 = i20 + 1 | 0;
    if (i20 >>> 0 >= i21 >>> 0) {
     break;
    }
   }
   if (i12) {
    break;
   }
   i20 = i19 + (i21 << 2) | 0;
   i10 = i19;
   while (1) {
    i11 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i9 = i11 + 8 | 0;
      i3 = i9 | 0;
      i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
      HEAP32[i3 >> 2] = i8;
      if ((i8 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    i10 = i10 + 4 | 0;
    if ((i10 | 0) == (i20 | 0)) {
     break;
    }
   }
  }
 } while (0);
 if ((i19 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20CompositeEditCommand17replaceTextInNodeEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = (i2 | 0) == 0;
 if (!i11) {
  i12 = i2 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = __ZN3WTF10fastMallocEj(152) | 0;
 i13 = i8 | 0;
 HEAP32[i13 >> 2] = i2;
 __ZN7WebCore25DeleteFromTextNodeCommandC1EN3WTF10PassRefPtrINS_4TextEEEjj(i12, i8, i3, i4);
 i4 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i13 = i4 + 8 | 0;
   i8 = i13 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i4 = i9 | 0;
 HEAP32[i4 >> 2] = i12;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i9);
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 + 4 | 0;
   i12 = i4 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i12 >> 2] = i13;
    break;
   }
   i13 = i4 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
  }
 } while (0);
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
    break;
   }
   if (!i11) {
    i13 = i2 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   i13 = __ZN3WTF10fastMallocEj(148) | 0;
   i4 = i7 | 0;
   HEAP32[i4 >> 2] = i2;
   __ZN7WebCore25InsertIntoTextNodeCommandC1EN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i13, i7, i3, i5);
   i12 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i4 = i12 + 8 | 0;
     i14 = i4 | 0;
     i8 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     HEAP32[i14 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
    }
   } while (0);
   i12 = i10 | 0;
   HEAP32[i12 >> 2] = i13;
   __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i10);
   i4 = HEAP32[i12 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i12 = i4 + 4 | 0;
   i4 = i12 | 0;
   i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i4 >> 2] = i8;
    break;
   }
   i8 = i12 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  }
 } while (0);
 if (i11) {
  STACKTOP = i6;
  return;
 }
 i11 = i2 + 8 | 0;
 i2 = i11 | 0;
 i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i10;
 if ((i10 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore16VisibleSelectionaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i5 = i2 + 8 | 0;
 i3 = i1 + 8 | 0;
 i6 = i3;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i3] = i4 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 12 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i3 = i2 + 20 | 0;
 i5 = i1 + 20 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i5 = i2 + 32 | 0;
 i3 = i1 + 32 | 0;
 i6 = i3;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i3] = i4 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 36 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i3 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i4 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i4;
 HEAP8[i2] = i4 & -3 | HEAP8[i3] & 2;
 return i1 | 0;
}
function __ZN7WebCore20CompositeEditCommand21rebalanceWhitespaceAtERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
 if (!(__ZNK7WebCore20CompositeEditCommand12canRebalanceERKNS_8PositionE(0, i2) | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2 + 8 | 0;
 do {
  if ((HEAP8[i6] & 8) == 0) {
   i7 = HEAP32[i6 >> 2] & 7;
   if (!((i7 | 0) == 2 | (i7 | 0) == 4)) {
    i8 = 4;
    break;
   }
   i9 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i2) | 0;
  } else {
   i8 = 4;
  }
 } while (0);
 if ((i8 | 0) == 4) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i6 = i5;
 i7 = HEAP32[i5 + 36 >> 2] | 0;
 i10 = (i7 | 0) == 0;
 do {
  if (i10) {
   i8 = 12;
  } else {
   i11 = i7 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   if ((HEAP32[i7 + 4 >> 2] | 0) >>> 0 <= i9 >>> 0) {
    i8 = 12;
    break;
   }
   i11 = i7 + 8 | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i12 = HEAP16[(HEAP32[i11 >> 2] | 0) + (i9 << 1) >> 1] | 0;
   } else {
    i12 = HEAPU8[(HEAP32[i11 >> 2] | 0) + i9 | 0] | 0;
   }
   if ((i12 << 16 >> 16 | 0) == 160 | (i12 << 16 >> 16 | 0) == 32 | (i12 << 16 >> 16 | 0) == 10 | (i12 << 16 >> 16 | 0) == 9) {
    i8 = 19;
   } else {
    i8 = 12;
   }
  }
 } while (0);
 do {
  if ((i8 | 0) == 12) {
   i12 = i9 - 1 | 0;
   if ((i12 | 0) < 0) {
    i8 = 25;
    break;
   }
   if (i10) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i7 + 4 >> 2] | 0) >>> 0 <= i12 >>> 0) {
    break;
   }
   i11 = i7 + 8 | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i13 = HEAP16[(HEAP32[i11 >> 2] | 0) + (i12 << 1) >> 1] | 0;
   } else {
    i13 = HEAPU8[(HEAP32[i11 >> 2] | 0) + i12 | 0] | 0;
   }
   if ((i13 << 16 >> 16 | 0) == 160 | (i13 << 16 >> 16 | 0) == 32 | (i13 << 16 >> 16 | 0) == 10 | (i13 << 16 >> 16 | 0) == 9) {
    i8 = 19;
   } else {
    i8 = 25;
   }
  }
 } while (0);
 do {
  if ((i8 | 0) == 19) {
   i13 = i4 | 0;
   HEAP32[i13 >> 2] = i6;
   if ((i5 | 0) != 0) {
    i9 = i5 + 8 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   i9 = HEAP32[i2 + 4 >> 2] | 0;
   __ZN7WebCore20CompositeEditCommand34rebalanceWhitespaceOnTextSubstringEN3WTF10PassRefPtrINS_4TextEEEii(i1, i4, i9, i9);
   i9 = HEAP32[i13 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i8 = 25;
    break;
   }
   i13 = i9 + 8 | 0;
   i9 = i13 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    i8 = 25;
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    i8 = 25;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
   i8 = 25;
  }
 } while (0);
 do {
  if ((i8 | 0) == 25) {
   if (!i10) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i10 = i7 | 0;
 i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
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
function __ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i3 + 16 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i10 + 40 >> 2] | 0)) {
  i3 = i5 | 0;
  i11 = i2 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i3 >> 2] = i12;
  i12 = i6 | 0;
  HEAP32[i12 >> 2] = i10;
  if ((i10 | 0) != 0) {
   i11 = i10 + 8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  }
  __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i1, i5, i6);
  i6 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i12 = i6 + 8 | 0;
    i5 = i12 | 0;
    i11 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    HEAP32[i5 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   }
  } while (0);
  i6 = HEAP32[i3 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 8 | 0;
  i6 = i3 | 0;
  i12 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  HEAP32[i6 >> 2] = i12;
  if ((i12 | 0) >= 1) {
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
 } else {
  i3 = i7 | 0;
  i12 = i2 | 0;
  i2 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i3 >> 2] = i2;
  i2 = HEAP32[(HEAP32[i9 >> 2] | 0) + 28 >> 2] | 0;
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = i2;
  if ((i2 | 0) != 0) {
   i12 = i2 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  }
  __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i1, i7, i8, 1);
  i8 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i9 = i8 + 8 | 0;
    i7 = i9 | 0;
    i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i1;
    if ((i1 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
   }
  } while (0);
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i8 + 8 | 0;
  i8 = i3 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  HEAP32[i8 >> 2] = i9;
  if ((i9 | 0) >= 1) {
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
}
function __ZN7WebCore20CompositeEditCommand33deleteInsignificantTextDownstreamERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i2, 1);
 __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i6, i7, 0);
 i8 = i5 | 0;
 i9 = i6 | 0;
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
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i10 = HEAP32[i6 + 8 >> 2] | 0;
 i6 = i12 | i10 & 7;
 HEAP32[i14 >> 2] = i6;
 HEAP8[i13] = i6 & 255 & -9 | i10 & 8;
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i4, i5, 1);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i10 = i8 | 0;
   i6 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
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
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 8 | 0;
   i9 = i7 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20CompositeEditCommand23deleteInsignificantTextERKNS_8PositionES3_(i1, i2, i4);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20CompositeEditCommand19rebalanceWhitespaceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i2 | 0;
 i4 = i2 + 64 | 0;
 i5 = i2 + 80 | 0;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i3, i1 + 72 | 0);
 i6 = HEAP32[i3 + 52 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i3);
  STACKTOP = i2;
  return;
 }
 i7 = i4 | 0;
 i8 = HEAP32[i3 + 24 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i4 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i4 + 8 | 0;
  i8 = i9;
  i10 = HEAP32[i8 >> 2] & -8;
  i11 = i9;
  i12 = i8;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i3 + 28 >> 2];
 i8 = HEAP32[i3 + 32 >> 2] | 0;
 i9 = i10 | i8 & 7;
 HEAP32[i12 >> 2] = i9;
 HEAP8[i11] = i9 & 255 & -9 | i8 & 8;
 __ZN7WebCore20CompositeEditCommand21rebalanceWhitespaceAtERKNS_8PositionE(i1, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 if ((i6 | 0) != 2) {
  __ZN7WebCore16VisibleSelectionD2Ev(i3);
  STACKTOP = i2;
  return;
 }
 i6 = i5 | 0;
 i4 = HEAP32[i3 + 36 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i7 = i4 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i3 + 40 >> 2];
 i7 = HEAP32[i3 + 44 >> 2] | 0;
 i4 = i5 + 8 | 0;
 i9 = i4;
 i8 = HEAP32[i9 >> 2] & -8 | i7 & 7;
 HEAP32[i9 >> 2] = i8;
 HEAP8[i4] = i8 & 255 & -9 | i7 & 8;
 __ZN7WebCore20CompositeEditCommand21rebalanceWhitespaceAtERKNS_8PositionE(i1, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i3);
  STACKTOP = i2;
  return;
 }
 i6 = i5 + 8 | 0;
 i5 = i6 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  __ZN7WebCore16VisibleSelectionD2Ev(i3);
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i3);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20CompositeEditCommand34insertNewDefaultParagraphElementAtERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i2 + 8 | 0;
 __ZN7WebCore29createDefaultParagraphElementERNS_8DocumentE(i5, HEAP32[i9 >> 2] | 0);
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore18createBreakElementERNS_8DocumentE(i7, HEAP32[i9 >> 2] | 0);
 i9 = i6 | 0;
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i7;
 i7 = i4 + 24 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i5 | 0, i6, i7) | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 8 | 0;
   i6 = i9 | 0;
   i11 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 8 | 0;
   i9 = i10 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i7 = i8 | 0;
 i10 = i5 | 0;
 HEAP32[i7 >> 2] = i10;
 if ((i5 | 0) != 0) {
  i11 = i5 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i2, i8, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
 i7 = i3 + 8 | 0;
 i3 = i7 | 0;
 i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i10;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22EditCommandCompositionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
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
 i2 = HEAP32[i1 + 144 >> 2] | 0;
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
 i2 = i1 + 140 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 132 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 136 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore16VisibleSelectionD2Ev(i1 + 72 | 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i1 + 12 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore22EditCommandComposition7unapplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 + 332 >> 2] | 0;
 i7 = (i6 | 0) != 0;
 if (i7) {
  i8 = i6 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i9);
 i9 = i1 + 140 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 L4 : do {
  if ((i5 | 0) != 0) {
   i4 = i1 + 132 | 0;
   i8 = i5;
   i10 = i5;
   while (1) {
    i11 = i8 - 1 | 0;
    if (i10 >>> 0 <= i11 >>> 0) {
     break;
    }
    i12 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i11 << 2) >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 28 >> 2] & 15](i12);
    if ((i11 | 0) == 0) {
     break L4;
    }
    i8 = i11;
    i10 = HEAP32[i9 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i9 = HEAP32[i6 + 464 >> 2] | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i10 = i1 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore6Editor16unappliedEditingEN3WTF10PassRefPtrINS_22EditCommandCompositionEEE(i9, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i9 = i5 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = i10;
    break;
   }
   i10 = i5 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
  }
 } while (0);
 if (!i7) {
  STACKTOP = i2;
  return;
 }
 i7 = i6 + 4 | 0;
 i6 = i7 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
 i3 = i7 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22EditCommandComposition7reapplyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 + 332 >> 2] | 0;
 i7 = (i6 | 0) != 0;
 if (i7) {
  i8 = i6 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i9);
 i9 = i1 + 140 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 L4 : do {
  if ((i5 | 0) != 0) {
   i4 = i1 + 132 | 0;
   i8 = 0;
   i10 = i5;
   while (1) {
    if (i10 >>> 0 <= i8 >>> 0) {
     break;
    }
    i11 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i8 << 2) >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 32 >> 2] & 15](i11);
    i11 = i8 + 1 | 0;
    if ((i11 | 0) == (i5 | 0)) {
     break L4;
    }
    i8 = i11;
    i10 = HEAP32[i9 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i9 = HEAP32[i6 + 464 >> 2] | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i10 = i1 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore6Editor16reappliedEditingEN3WTF10PassRefPtrINS_22EditCommandCompositionEEE(i9, i3);
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i9 = i5 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = i10;
    break;
   }
   i10 = i5 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
  }
 } while (0);
 if (!i7) {
  STACKTOP = i2;
  return;
 }
 i7 = i6 + 4 | 0;
 i6 = i7 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
 i3 = i7 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20CompositeEditCommand27removeNodeAndPruneAncestorsEN3WTF10PassRefPtrINS_4NodeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (i8) {
  i9 = i2;
 } else {
  i2 = i7 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  i9 = HEAP32[i6 >> 2] | 0;
 }
 i2 = i1;
 i10 = HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] | 0;
 i11 = i5 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i11 >> 2] = i9;
 FUNCTION_TABLE_viii[i10 & 3](i1, i5, 1);
 i5 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 + 8 | 0;
   i10 = i11 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i5 = __ZN7WebCore28highestNodeToRemoveInPruningEPNS_4NodeE(i7 | 0) | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 + 8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   i11 = HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] | 0;
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = i5;
   FUNCTION_TABLE_viii[i11 & 3](i1, i4, 1);
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i9 = i11 + 8 | 0;
   i11 = i9 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 if (i8) {
  STACKTOP = i3;
  return;
 }
 i8 = i7 + 8 | 0;
 i7 = i8 | 0;
 i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i4;
 if ((i4 | 0) >= 1) {
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
function __ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i8 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 i2 = i9 | 0;
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore23InsertNodeBeforeCommand6createEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i7, i8, i9, i4);
 i4 = i6 | 0;
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i1 = i4 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i1 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  }
 } while (0);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 8 | 0;
   i7 = i2 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i6 + 8 | 0;
 i6 = i10 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i2 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0;
 i7 = FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i3 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0;
 do {
  if (i6) {
   i8 = HEAP32[i1 >> 2] | 0;
   if (i7) {
    HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
    HEAP32[i3 >> 2] = i8;
    i9 = 1;
    break;
   }
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i2 >> 2] = i8;
   if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i3 >> 2] | 0, i8) | 0)) {
    i9 = 1;
    break;
   }
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i3 >> 2] = i8;
   i9 = 2;
  } else {
   if (!i7) {
    i9 = 0;
    break;
   }
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i3 >> 2] = i8;
   if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i2 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
    i9 = 1;
    break;
   }
   i8 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i2 >> 2] = i8;
   i9 = 2;
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i4 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0)) {
  i10 = i9;
  return i10 | 0;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i7;
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i3 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0)) {
  i10 = i9 + 1 | 0;
  return i10 | 0;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = i7;
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 3](HEAP32[i2 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
  i10 = i9 + 2 | 0;
  return i10 | 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i2 >> 2] = i5;
 i10 = i9 + 3 | 0;
 return i10 | 0;
}
function __ZN7WebCore20CompositeEditCommand19removePlaceholderAtERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((HEAP32[i6 + 12 >> 2] & 4 | 0) != 0) {
   i7 = HEAP32[i6 + 44 >> 2] | 0;
   i8 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i7 | 0) != (i8 | 0)) {
    if ((HEAP32[i7 + 12 >> 2] | 0) != (HEAP32[i8 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i7 + 16 >> 2] | 0) != (HEAP32[i8 + 16 >> 2] | 0)) {
     break;
    }
   }
   i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = i6;
   if ((i6 | 0) != 0) {
    i9 = i6 + 8 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   FUNCTION_TABLE_viii[i8 & 3](i1, i4, 1);
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i7 = i8 + 8 | 0;
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) >= 1) {
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
 } while (0);
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i9 = i6 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 FUNCTION_TABLE_viiii[i4 & 3](i1, i5, HEAP32[i2 + 4 >> 2] | 0, 1);
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i2 + 8 | 0;
 i2 = i7 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) >= 1) {
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
function __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i7 | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i3;
 i3 = i8 | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore17AppendNodeCommand6createEN3WTF10PassRefPtrINS_13ContainerNodeEEENS2_INS_4NodeEEE(i6, i7, i8);
 i8 = i5 | 0;
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = i6;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 4 | 0;
   i1 = i8 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i1 >> 2] = i6;
    break;
   }
   i6 = i8 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i6 = i3 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i5 + 8 | 0;
 i5 = i9 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CompositeEditCommand12splitElementEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i7 | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i2;
 i2 = i8 | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore19SplitElementCommand6createEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE(i6, i7, i8);
 i8 = i5 | 0;
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = i6;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 4 | 0;
   i1 = i8 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i1 >> 2] = i6;
    break;
   }
   i6 = i8 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 8 | 0;
   i6 = i2 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i5 + 8 | 0;
 i5 = i9 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore11EditCommand9setParentEPNS_20CompositeEditCommandE(i2, i1);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 15](i2);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 31](i2) | 0) {
  __ZN7WebCore11EditCommand9setParentEPNS_20CompositeEditCommandE(i2, 0);
  i3 = __ZN7WebCore20CompositeEditCommand17ensureCompositionEv(i1) | 0;
  i4 = i2;
  i5 = i3 + 132 | 0;
  i6 = i3 + 140 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i7 | 0) == (HEAP32[i3 + 136 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore17SimpleEditCommandEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7 + 1 | 0);
    HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i6 >> 2] << 2) >> 2] = i4;
    if ((i2 | 0) == 0) {
     break;
    }
    i8 = i2 + 4 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   } else {
    HEAP32[(HEAP32[i5 >> 2] | 0) + (i7 << 2) >> 2] = i4;
    if ((i2 | 0) == 0) {
     break;
    }
    i8 = i2 + 4 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   }
  } while (0);
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i1 + 136 | 0;
 i4 = i1 + 144 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == (HEAP32[i1 + 140 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore11EditCommandEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i7 + 1 | 0);
  HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) >> 2] = i2;
  i9 = HEAP32[i4 >> 2] | 0;
  i10 = i9 + 1 | 0;
  HEAP32[i4 >> 2] = i10;
  return;
 } else {
  HEAP32[(HEAP32[i6 >> 2] | 0) + (i7 << 2) >> 2] = i2;
  i9 = HEAP32[i4 >> 2] | 0;
  i10 = i9 + 1 | 0;
  HEAP32[i4 >> 2] = i10;
  return;
 }
}
function __ZN7WebCore20CompositeEditCommand5applyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 L1 : do {
  if (!(__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv(i1 + 72 | 0) | 0)) {
   switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 31](i4) | 0) {
   case 32:
   case 29:
   case 25:
   case 19:
   case 26:
   case 0:
    {
     break L1;
     break;
    }
   default:
    {}
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZN7WebCore20CompositeEditCommand17ensureCompositionEv(i1) | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i1 + 8 >> 2] | 0);
 __ZN7WebCore16ScopedEventQueue21incrementScopingLevelEv(__ZN7WebCore16ScopedEventQueue8instanceEv() | 0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 15](i4);
 __ZN7WebCore16ScopedEventQueue21decrementScopingLevelEv(__ZN7WebCore16ScopedEventQueue8instanceEv() | 0);
 do {
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 31](i1) | 0)) {
   i5 = HEAP32[(__ZN7WebCore11EditCommand5frameEv(i4) | 0) + 464 >> 2] | 0;
   i6 = i3 | 0;
   HEAP32[i6 >> 2] = i1;
   if ((i1 | 0) != 0) {
    i7 = i1 + 4 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   }
   __ZN7WebCore6Editor14appliedEditingEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i5, i3);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 3](i1, 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20CompositeEditCommand53replaceElementWithSpanPreservingChildrenAndAttributesEN3WTF10PassRefPtrINS_11HTMLElementEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = __ZN3WTF10fastMallocEj(144) | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 __ZN7WebCore26ReplaceNodeWithSpanCommandC1EN3WTF10PassRefPtrINS_11HTMLElementEEE(i6, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i2 = i7 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i4 = i5 | 0;
 i7 = i6;
 HEAP32[i4 >> 2] = i7;
 i8 = (i6 | 0) == 0;
 if (!i8) {
  i2 = i6 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 4 | 0;
   i1 = i4 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i1 >> 2] = i2;
    break;
   }
   i2 = i4 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
  }
 } while (0);
 i5 = HEAP32[i6 + 140 >> 2] | 0;
 if (i8) {
  STACKTOP = i3;
  return i5 | 0;
 }
 i8 = i6 + 4 | 0;
 i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i7);
  STACKTOP = i3;
  return i5 | 0;
 } else {
  HEAP32[i8 >> 2] = i2;
  STACKTOP = i3;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore16VisibleSelectionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i4 = i2 + 8 | 0;
 i3 = i1 + 8 | 0;
 i5 = i3;
 i6 = HEAP32[i5 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i5 >> 2] = i6;
 HEAP8[i3] = i6 & 255 & -9 | HEAP8[i4] & 8;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i6 = i4 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i6 = i2 + 20 | 0;
 i4 = i1 + 20 | 0;
 i3 = i4;
 i5 = HEAP32[i3 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
 HEAP32[i3 >> 2] = i5;
 HEAP8[i4] = i5 & 255 & -9 | HEAP8[i6] & 8;
 i6 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i5 = i2 + 32 | 0;
 i6 = i1 + 32 | 0;
 i4 = i6;
 i3 = HEAP32[i4 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i4 >> 2] = i3;
 HEAP8[i6] = i3 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i1 + 36 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i3 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i1 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i1;
 HEAP8[i2] = i1 & -3 | HEAP8[i3] & 2;
 return;
}
function __ZN7WebCore20CompositeEditCommand21pushAnchorElementDownERNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 64 | 0;
 i6 = i3 + 72 | 0;
 i7 = i2 | 0;
 __ZN7WebCore16VisibleSelection27selectionFromContentsOfNodeEPNS_4NodeE(i4, i7);
 __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(i1 | 0, i4);
 __ZN7WebCore16VisibleSelectionD2Ev(i4);
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = i2;
 i8 = (i2 | 0) == 0;
 if (!i8) {
  i9 = i2 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand18applyStyledElementEN3WTF10PassRefPtrINS_7ElementEEE(i1, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
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
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i6 | 0;
 HEAP32[i5 >> 2] = i7;
 if (!i8) {
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1, i6, 1);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i6 + 8 | 0;
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20CompositeEditCommand27addBlockPlaceholderIfNeededEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i2 + 8 >> 2] | 0);
 i6 = i3 + 32 | 0;
 if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 256) {
    break;
   }
   if ((HEAP32[i6 + 24 >> 2] & 32 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[i6 + 56 >> 2] | 0) != 0) {
     i7 = i6;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 104 >> 2] & 31](i6) | 0) {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 40 >> 2] & 31](i6) | 0) {
       break;
      }
     }
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i4;
     return;
    }
   } while (0);
   i7 = i5 | 0;
   HEAP32[i7 >> 2] = i3;
   i8 = i3 + 8 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   __ZN7WebCore20CompositeEditCommand22appendBlockPlaceholderEN3WTF10PassRefPtrINS_7ElementEEE(i1, i2, i5);
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i7 = i8 + 8 | 0;
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
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
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CompositeEditCommand22appendBlockPlaceholderEN3WTF10PassRefPtrINS_7ElementEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i3 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i3 = i2 + 8 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i3 >> 2] | 0);
 __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i5, HEAP32[i3 >> 2] | 0, __ZN7WebCore9HTMLNames5brTagE, 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i5 | 0;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i3;
 if ((i5 | 0) != 0) {
  i10 = i5 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = i7 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i5;
 __ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE(i2, i6, i7);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 8 | 0;
   i6 = i10 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 8 | 0;
   i10 = i9 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 >> 2] = i3;
 STACKTOP = i4;
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
function __ZN7WebCore20CompositeEditCommand17ensureCompositionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1;
 while (1) {
  i5 = HEAP32[i4 + 132 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  } else {
   i4 = i5;
  }
 }
 i5 = i4 + 148 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 __ZN7WebCore22EditCommandComposition6createERNS_8DocumentERKNS_16VisibleSelectionES5_NS_10EditActionE(i3, i4, i1 + 12 | 0, i1 + 72 | 0, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 31](i1 | 0) | 0);
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
   i7 = i3 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i3 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  }
 } while (0);
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i1 = i4 + 4 | 0;
 i4 = i1 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i4 >> 2] = i8;
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i8 = i1 - 4 | 0;
 if ((i8 | 0) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
 i6 = HEAP32[i5 >> 2] | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((__ZNK7WebCore4Node27nonShadowBoundaryParentNodeEv(i2) | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = __ZN3WTF10fastMallocEj(152) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore17RemoveNodeCommandC1EN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i7, i5, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 8 | 0;
   i5 = i8 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = i7;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i6);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i6 + 4 | 0;
 i6 = i3 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(148) | 0;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i2;
 __ZN7WebCore25InsertIntoTextNodeCommandC1EN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE(i8, i6, i3, i4);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 8 | 0;
   i3 = i9 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = i8;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i7);
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i7 + 4 | 0;
 i7 = i4 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i5;
 return;
}
function __ZN3WTF6VectorIN7WebCore14DocumentMarkerELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 << 4) | 0;
 if (i2 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   i2 = i6 + 12 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 12 >> 2] = i8;
   i8 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i2 = i8 + 4 | 0;
     i9 = i2 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i2 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
    }
   } while (0);
   i8 = i6 + 16 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 16 | 0;
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
function __ZN7WebCore20CompositeEditCommand17removeCSSPropertyEN3WTF10PassRefPtrINS_13StyledElementEEENS_13CSSPropertyIDE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(152) | 0;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i2;
 __ZN7WebCore24RemoveCSSPropertyCommandC1ERNS_8DocumentEN3WTF10PassRefPtrINS_13StyledElementEEENS_13CSSPropertyIDE(i8, i7, i5, i3);
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 + 8 | 0;
   i5 = i9 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = i8;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i6);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i6 + 4 | 0;
 i6 = i3 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(152) | 0;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i2;
 __ZN7WebCore23SetNodeAttributeCommandC1EN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i8, i6, i3, i4);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 8 | 0;
   i3 = i9 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = i8;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i7);
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i7 + 4 | 0;
 i7 = i4 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = __ZN3WTF10fastMallocEj(160) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore35RemoveNodePreservingChildrenCommandC1EN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE(i7, i5, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 8 | 0;
   i5 = i8 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = i7;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i6);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i6 + 4 | 0;
 i6 = i3 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i4;
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
function __ZN7WebCore20CompositeEditCommandD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 56;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  i6 = i4 + (i5 << 2) | 0;
  i5 = i4;
  while (1) {
   i4 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = i1 | 0;
  __ZN7WebCore11EditCommandD2Ev(i10);
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i10 = i1 | 0;
 __ZN7WebCore11EditCommandD2Ev(i10);
 return;
}
function __ZN7WebCore20CompositeEditCommandD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 56;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  i6 = i4 + (i5 << 2) | 0;
  i5 = i4;
  while (1) {
   i4 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = i1 | 0;
  __ZN7WebCore11EditCommandD2Ev(i10);
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i10 = i1 | 0;
 __ZN7WebCore11EditCommandD2Ev(i10);
 return;
}
function __ZN7WebCore23InsertNodeBeforeCommand6createEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = __ZN3WTF10fastMallocEj(148) | 0;
 i9 = i6 | 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i2;
 i2 = i7 | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore23InsertNodeBeforeCommandC1EN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE(i8, i6, i7, i4);
 HEAP32[i1 >> 2] = i8;
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 + 8 | 0;
   i1 = i2 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i8 + 8 | 0;
 i8 = i9 | 0;
 i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i5;
 return;
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
function __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrIS0_EERKNS_16VisibleSelectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i2 | 0;
 __ZN7WebCore11EditCommand9setParentEPNS_20CompositeEditCommandE(HEAP32[i4 >> 2] | 0, i1);
 if (!(__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i3, (HEAP32[i4 >> 2] | 0) + 72 | 0) | 0)) {
  __ZN7WebCore11EditCommand20setStartingSelectionERKNS_16VisibleSelectionE(HEAP32[i4 >> 2] | 0, i3);
  __ZN7WebCore11EditCommand18setEndingSelectionERKNS_16VisibleSelectionE(HEAP32[i4 >> 2] | 0, i3);
 }
 i3 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 15](i3 | 0);
 i3 = i1 + 136 | 0;
 i2 = i1 + 144 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == (HEAP32[i1 + 140 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore11EditCommandEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i5 + 1 | 0);
  i1 = (HEAP32[i3 >> 2] | 0) + (HEAP32[i2 >> 2] << 2) | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 >> 2] = i6;
  i7 = HEAP32[i2 >> 2] | 0;
  i8 = i7 + 1 | 0;
  HEAP32[i2 >> 2] = i8;
  return;
 } else {
  i6 = (HEAP32[i3 >> 2] | 0) + (i5 << 2) | 0;
  i5 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i6 >> 2] = i5;
  i7 = HEAP32[i2 >> 2] | 0;
  i8 = i7 + 1 | 0;
  HEAP32[i2 >> 2] = i8;
  return;
 }
}
function __ZN7WebCore20CompositeEditCommand30splitTextNodeContainingElementEN3WTF10PassRefPtrINS_4TextEEEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = __ZN3WTF10fastMallocEj(160) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore37SplitTextNodeContainingElementCommandC1EN3WTF10PassRefPtrINS_4TextEEEi(i7, i5, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 8 | 0;
   i5 = i8 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = i7;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i6);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i6 + 4 | 0;
 i6 = i3 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(152) | 0;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i2;
 __ZN7WebCore25DeleteFromTextNodeCommandC1EN3WTF10PassRefPtrINS_4TextEEEjj(i8, i6, i3, i4);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 8 | 0;
   i3 = i9 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = i8;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i7);
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i7 + 4 | 0;
 i7 = i4 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20CompositeEditCommand19removeStyledElementEN3WTF10PassRefPtrINS_7ElementEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = __ZN3WTF10fastMallocEj(204) | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 __ZN7WebCore17ApplyStyleCommandC1EN3WTF10PassRefPtrINS_7ElementEEEbNS_10EditActionE(i6, i4, 1, 14);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i2 = i7 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = i6;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 + 4 | 0;
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20CompositeEditCommand18applyStyledElementEN3WTF10PassRefPtrINS_7ElementEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = __ZN3WTF10fastMallocEj(204) | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 __ZN7WebCore17ApplyStyleCommandC1EN3WTF10PassRefPtrINS_7ElementEEEbNS_10EditActionE(i6, i4, 0, 14);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i2 = i7 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = i6;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 + 4 | 0;
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20CompositeEditCommand23wrapContentsInDummySpanEN3WTF10PassRefPtrINS_7ElementEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = __ZN3WTF10fastMallocEj(144) | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 __ZN7WebCore30WrapContentsInDummySpanCommandC1EN3WTF10PassRefPtrINS_7ElementEEE(i6, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i2 = i7 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = i6;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i5 + 4 | 0;
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17AppendNodeCommand6createEN3WTF10PassRefPtrINS_13ContainerNodeEEENS2_INS_4NodeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZN3WTF10fastMallocEj(144) | 0;
 i8 = i5 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 i2 = i6 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore17AppendNodeCommandC1EN3WTF10PassRefPtrINS_13ContainerNodeEEENS2_INS_4NodeEEE(i7, i5, i6);
 HEAP32[i1 >> 2] = i7;
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 8 | 0;
   i1 = i2 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i7 + 8 | 0;
 i7 = i8 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i2;
 if ((i2 | 0) >= 1) {
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
function __ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = __ZN3WTF10fastMallocEj(148) | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore20SplitTextNodeCommandC1EN3WTF10PassRefPtrINS_4TextEEEi(i7, i5, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 8 | 0;
   i5 = i8 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = i7;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i6);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i6 + 4 | 0;
 i6 = i3 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19SplitElementCommand6createEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZN3WTF10fastMallocEj(148) | 0;
 i8 = i5 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 i2 = i6 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore19SplitElementCommandC1EN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE(i7, i5, i6);
 HEAP32[i1 >> 2] = i7;
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 8 | 0;
   i1 = i2 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i7 + 8 | 0;
 i7 = i8 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i2;
 if ((i2 | 0) >= 1) {
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
function __ZN7WebCore29MergeIdenticalElementsCommand6createEN3WTF10PassRefPtrINS_7ElementEEES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZN3WTF10fastMallocEj(148) | 0;
 i8 = i5 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 i2 = i6 | 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i2 >> 2] = i3;
 __ZN7WebCore29MergeIdenticalElementsCommandC1EN3WTF10PassRefPtrINS_7ElementEEES4_(i7, i5, i6);
 HEAP32[i1 >> 2] = i7;
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 8 | 0;
   i1 = i2 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i7 + 8 | 0;
 i7 = i8 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i2;
 if ((i2 | 0) >= 1) {
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
function __ZN7WebCore20CompositeEditCommand27insertNodeAtTabSpanPositionEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i5 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i2;
 __ZN7WebCore20CompositeEditCommand22positionOutsideTabSpanERKNS_8PositionE(i6, i1, i3);
 __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i1, i5, i6);
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   i1 = i6 | 0;
   i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i5 + 8 | 0;
 i5 = i7 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) >= 1) {
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
function __ZN7WebCore22EditCommandComposition6createERNS_8DocumentERKNS_16VisibleSelectionES5_NS_10EditActionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = __ZN3WTF10fastMallocEj(156) | 0;
 i7 = i6;
 HEAP32[i6 + 4 >> 2] = 1;
 HEAP32[i6 >> 2] = H_BASE + 16;
 HEAP32[i6 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i6 + 12 | 0, i3);
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i6 + 72 | 0, i4);
 HEAP32[i6 + 132 >> 2] = 0;
 HEAP32[i6 + 136 >> 2] = 0;
 HEAP32[i6 + 140 >> 2] = 0;
 i8 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i3) | 0;
 HEAP32[i6 + 144 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i3 = i8 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i4) | 0;
 HEAP32[i6 + 148 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i9 = i6 + 152 | 0;
  i10 = i9;
  HEAP32[i10 >> 2] = i5;
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i7;
  return;
 }
 i4 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i9 = i6 + 152 | 0;
 i10 = i9;
 HEAP32[i10 >> 2] = i5;
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = i7;
 return;
}
function __ZN7WebCore20CompositeEditCommand19removeNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i5 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i7 >> 2] = i2;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE(i1, i5, i3, i6);
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 8 | 0;
 i6 = i7 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i3;
 if ((i3 | 0) >= 1) {
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
function __ZN7WebCore20CompositeEditCommand22insertBlockPlaceholderERKNS_8PositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i5, HEAP32[i2 + 8 >> 2] | 0, __ZN7WebCore9HTMLNames5brTagE, 0);
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i5 | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i5 | 0) != 0) {
  i9 = i5 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 __ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE(i2, i6, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 8 | 0;
   i6 = i8 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 >> 2] = i7;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore20CompositeEditCommand12canRebalanceERKNS_8PositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = __ZNK7WebCore8Position13containerNodeEv(i2) | 0;
 if ((HEAP32[i2 + 8 >> 2] & 7 | 0) != 0 | (i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] & 1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i4 = i1 + 32 | 0;
 if ((HEAP32[i2 >> 2] & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
    i6 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i6 = HEAP32[i4 + 36 >> 2] | 0;
   }
   if (((HEAP32[i6 + 44 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 1;
 return i3 | 0;
}
function __ZN7WebCore22EditCommandCompositionC2ERNS_8DocumentERKNS_16VisibleSelectionES5_NS_10EditActionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i6 = i2 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i1 + 12 | 0, i3);
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i1 + 72 | 0, i4);
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = 0;
 i6 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i3) | 0;
 HEAP32[i1 + 144 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i3 = i6 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i4) | 0;
 HEAP32[i1 + 148 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i7 = i1 + 152 | 0;
  HEAP32[i7 >> 2] = i5;
  return;
 }
 i4 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i7 = i1 + 152 | 0;
 HEAP32[i7 >> 2] = i5;
 return;
}
function __ZN7WebCore22EditCommandCompositionC1ERNS_8DocumentERKNS_16VisibleSelectionES5_NS_10EditActionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i6 = i2 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i1 + 12 | 0, i3);
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i1 + 72 | 0, i4);
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = 0;
 i6 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i3) | 0;
 HEAP32[i1 + 144 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i3 = i6 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i4) | 0;
 HEAP32[i1 + 148 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i7 = i1 + 152 | 0;
  HEAP32[i7 >> 2] = i5;
  return;
 }
 i4 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i7 = i1 + 152 | 0;
 HEAP32[i7 >> 2] = i5;
 return;
}
function __ZN7WebCore20CompositeEditCommand10applyStyleEPKNS_12EditingStyleERKNS_8PositionES6_NS_10EditActionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = __ZN3WTF10fastMallocEj(204) | 0;
 __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleERKNS_8PositionES8_NS_10EditActionENS0_14EPropertyLevelE(i9, i8, i2, i3, i4, i5, 0);
 i5 = i7 | 0;
 HEAP32[i5 >> 2] = i9;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i7);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i5 = i7 + 4 | 0;
 i7 = i5 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i6;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore20CompositeEditCommand15deleteSelectionERKNS_16VisibleSelectionEbbbbb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8 | 0;
 if ((HEAP32[i2 + 52 >> 2] | 0) != 2) {
  STACKTOP = i8;
  return;
 }
 i10 = __ZN3WTF10fastMallocEj(344) | 0;
 __ZN7WebCore22DeleteSelectionCommandC1ERKNS_16VisibleSelectionEbbbbb(i10, i2, i3, i4, i5, i6, i7);
 i7 = i9 | 0;
 HEAP32[i7 >> 2] = i10;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i9);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i7 = i9 + 4 | 0;
 i9 = i7 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i9 >> 2] = i1;
  STACKTOP = i8;
  return;
 }
 i1 = i7 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore20CompositeEditCommand15deleteSelectionEbbbbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 if ((HEAP32[i1 + 124 >> 2] | 0) != 2) {
  STACKTOP = i7;
  return;
 }
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 i10 = __ZN3WTF10fastMallocEj(344) | 0;
 __ZN7WebCore22DeleteSelectionCommandC1ERNS_8DocumentEbbbbb(i10, i9, i2, i3, i4, i5, i6);
 i6 = i8 | 0;
 HEAP32[i6 >> 2] = i10;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i8);
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i6 = i8 + 4 | 0;
 i8 = i6 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i7;
  return;
 }
 i1 = i6 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore20CompositeEditCommand10applyStyleEPKNS_12EditingStyleENS_10EditActionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(204) | 0;
 __ZN7WebCore17ApplyStyleCommandC1ERNS_8DocumentEPKNS_12EditingStyleENS_10EditActionENS0_14EPropertyLevelE(i7, i6, i2, i3, 0);
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i7;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viii + 2;
}
function __ZN7WebCore20CompositeEditCommand16isRemovableBlockEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 44 >> 2] | 0;
 i4 = HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0;
 do {
  if ((i1 | 0) != (i4 | 0)) {
   if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
    i3 = 0;
    return i3 | 0;
   }
   if ((HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i4 + 16 >> 2] | 0)) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 i1 = i4 | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 12 >> 2] & 2 | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 36 >> 2] | 0) == (HEAP32[i1 + 40 >> 2] | 0)) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = (__ZNK7WebCore7Element13hasAttributesEv(i2) | 0) ^ 1;
 return i3 | 0;
}
function __ZN7WebCore20CompositeEditCommand5pruneEN3WTF10PassRefPtrINS_4NodeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN7WebCore28highestNodeToRemoveInPruningEPNS_4NodeE(HEAP32[i2 >> 2] | 0) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i5 + 8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i5;
 FUNCTION_TABLE_viii[i2 & 3](i1, i4, 1);
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
function __ZN7WebCore20CompositeEditCommand24insertParagraphSeparatorEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(160) | 0;
 __ZN7WebCore31InsertParagraphSeparatorCommandC1ERNS_8DocumentEbb(i7, i6, i2, i3);
 i3 = i5 | 0;
 HEAP32[i3 >> 2] = i7;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i5 + 4 | 0;
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore20CompositeEditCommand35shouldRebalanceLeadingWhitespaceForERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = i2 | 0;
 i2 = 0;
 while (1) {
  i3 = HEAP32[i1 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 0;
  } else {
   i4 = HEAP32[i3 + 4 >> 2] | 0;
  }
  if (i2 >>> 0 >= i4 >>> 0) {
   i5 = 1;
   i6 = 11;
   break;
  }
  if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
   i7 = HEAP32[i3 + 8 >> 2] | 0;
  } else {
   i7 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i3) | 0;
  }
  i3 = HEAP16[i7 + (i2 << 1) >> 1] | 0;
  if (!((i3 << 16 >> 16 | 0) == 160 | (i3 << 16 >> 16 | 0) == 32 | (i3 << 16 >> 16 | 0) == 10 | (i3 << 16 >> 16 | 0) == 9)) {
   i5 = 0;
   i6 = 12;
   break;
  }
  i2 = i2 + 1 | 0;
 }
 if ((i6 | 0) == 12) {
  return i5 | 0;
 } else if ((i6 | 0) == 11) {
  return i5 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore17SimpleEditCommandEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore11EditCommandEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore20CompositeEditCommand15insertLineBreakEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i5 = __ZN3WTF10fastMallocEj(152) | 0;
 __ZN7WebCore22InsertLineBreakCommandC1ERNS_8DocumentE(i5, i4);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i5;
 __ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE(i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 + 4 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22EditCommandComposition6appendEPNS_17SimpleEditCommandE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 132 | 0;
 i4 = i1 + 140 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == (HEAP32[i1 + 136 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore17SimpleEditCommandEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i5 + 1 | 0);
   HEAP32[(HEAP32[i3 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) >> 2] = i2;
   if ((i2 | 0) == 0) {
    break;
   }
   i6 = i2 + 4 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  } else {
   HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 << 2) >> 2] = i2;
   if ((i2 | 0) == 0) {
    break;
   }
   i6 = i2 + 4 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
 } while (0);
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore22EditCommandComposition20setStartingSelectionERKNS_16VisibleSelectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 __ZN7WebCore16VisibleSelectionaSERKS0_(i1 + 12 | 0, i2) | 0;
 i3 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i2) | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i1 + 144 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 8 | 0;
 i1 = i3 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 return;
}
function __ZN7WebCore22EditCommandComposition18setEndingSelectionERKNS_16VisibleSelectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 __ZN7WebCore16VisibleSelectionaSERKS0_(i1 + 72 | 0, i2) | 0;
 i3 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i2) | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i1 + 148 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 8 | 0;
 i1 = i3 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
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
function __ZN7WebCore20CompositeEditCommand46updatePositionForNodeRemovalPreservingChildrenERNS_8PositionEPNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i2 + 8 >> 2] & 7 | 0) != 0) {
  __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i2, i3);
  return;
 }
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i2, i3);
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Position12moveToOffsetEi(i2, i1);
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
function __ZN7WebCore20CompositeEditCommand13moveParagraphERKNS_15VisiblePositionES3_S3_bb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore20CompositeEditCommand14moveParagraphsERKNS_15VisiblePositionES3_S3_bb(i1, i2, i3, i4, i5, i6);
 return;
}
function __ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11EditCommandC2ERNS_8DocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 56;
 _memset(i1 + 136 | 0, 0, 16) | 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore29createBlockPlaceholderElementERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i1, i2, __ZN7WebCore9HTMLNames5brTagE, 0);
 return;
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
function __ZN7WebCore13InlineTextBox14compareByStartEPKS0_S2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) >>> 0 < (HEAP32[i2 + 44 >> 2] | 0) >>> 0 | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20CompositeEditCommand5applyEv(HEAP32[i1 >> 2] | 0);
 return;
}
function __ZN7WebCore22EditCommandCompositionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22EditCommandCompositionD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZNK7WebCore11EditCommand13editingActionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EditCommand13editingActionEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore20CompositeEditCommandD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20CompositeEditCommandD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
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
function __ZN7WebCore22EditCommandCompositionD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22EditCommandCompositionD2Ev(i1);
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZNK7WebCore22EditCommandComposition13editingActionEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 152 >> 2] | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function __ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore20CompositeEditCommand18isDictationCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
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
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore20CompositeEditCommand15isTypingCommandEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11EditCommand24isEditCommandCompositionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11EditCommand19isSimpleEditCommandEv(i1) {
 i1 = i1 | 0;
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
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore22EditCommandCompositionC2ERNS_8DocumentERKNS_16VisibleSelectionES5_NS_10EditActionE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore22EditCommandComposition7unapplyEv,b1,__ZN7WebCore22EditCommandCompositionD1Ev,b1,__ZN7WebCore20CompositeEditCommandD0Ev,b1,__ZN7WebCore20CompositeEditCommandD2Ev,b1,__ZN7WebCore22EditCommandCompositionD0Ev,b1,__ZN7WebCore22EditCommandComposition7reapplyEv,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore11EditCommand13editingActionEv__wrapper,b3,__ZNK7WebCore22EditCommandComposition13editingActionEv,b3,ii___ZN7WebCore16isMailBlockquoteEPKNS_4NodeE__wrapper,b3,__ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv,b3,__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv,b3,__ZNK7WebCore20CompositeEditCommand15isTypingCommandEv,b3,__ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv,b3,__ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv,b3,__ZNK7WebCore11EditCommand24isEditCommandCompositionEv,b3,__ZNK7WebCore11EditCommand19isSimpleEditCommandEv,b3,__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv,b3,__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZN7WebCore13InlineTextBox14compareByStartEPKS0_S2_,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5liTagE": __ZN7WebCore9HTMLNames5liTagE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore9HTMLNames6divTagE": __ZN7WebCore9HTMLNames6divTagE, "__ZN7WebCore9HTMLNames5ulTagE": __ZN7WebCore9HTMLNames5ulTagE, "__ZN7WebCore9HTMLNames5olTagE": __ZN7WebCore9HTMLNames5olTagE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore22EditCommandComposition7unapplyEv","__ZN7WebCore20CompositeEditCommand19removeStyledElementEN3WTF10PassRefPtrINS_7ElementEEE","__ZN7WebCore22EditCommandCompositionD1Ev","__ZN7WebCore20CompositeEditCommandD0Ev","__ZN7WebCore20CompositeEditCommand18deleteTextFromNodeEN3WTF10PassRefPtrINS_4TextEEEjj","__ZN7WebCore20CompositeEditCommand19removeNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameE","_strlen","__ZN7WebCore20CompositeEditCommand22insertBlockPlaceholderERKNS_8PositionE","__ZN7WebCore20CompositeEditCommand23wrapContentsInDummySpanEN3WTF10PassRefPtrINS_7ElementEEE","__ZNSt3__127__insertion_sort_incompleteIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEbT0_SA_T_","__ZN7WebCore22EditCommandComposition20setStartingSelectionERKNS_16VisibleSelectionE","__ZN7WebCore19SplitElementCommand6createEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE","__ZNK7WebCore20CompositeEditCommand35shouldRetainAutocorrectionIndicatorEv","__ZN7WebCore20CompositeEditCommand32moveRemainingSiblingsToNewParentEPNS_4NodeES2_N3WTF10PassRefPtrINS_7ElementEEE","__ZN7WebCore20CompositeEditCommand15insertLineBreakEv","_memcpy","__ZN7WebCore20CompositeEditCommand12insertNodeAtEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE","__ZN7WebCore20CompositeEditCommand33deleteInsignificantTextDownstreamERKNS_8PositionE","__ZN7WebCore18lastPositionInNodeEPNS_4NodeE","__ZNK7WebCore20CompositeEditCommand18isDictationCommandEv","__ZNK7WebCore20CompositeEditCommand15isTypingCommandEv","__ZN7WebCore22EditCommandComposition6createERNS_8DocumentERKNS_16VisibleSelectionES5_NS_10EditActionE","__ZN7WebCore20CompositeEditCommand34insertNewDefaultParagraphElementAtERKNS_8PositionE","__ZNK7WebCore20CompositeEditCommand19isCreateLinkCommandEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore11EditCommandEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore20CompositeEditCommand27addBlockPlaceholderIfNeededEPNS_7ElementE","__ZN7WebCore20CompositeEditCommand19removePlaceholderAtERKNS_8PositionE","__ZN7WebCore20CompositeEditCommand21removeChildrenInRangeEN3WTF10PassRefPtrINS_4NodeEEEjj","__ZN7WebCore20CompositeEditCommand22mergeIdenticalElementsEN3WTF10PassRefPtrINS_7ElementEEES4_","__ZN7WebCore20CompositeEditCommand24insertParagraphSeparatorEbb","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE","__ZNSt3__16__sortIRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEvT0_SA_T_","__ZN7WebCore22EditCommandCompositionD2Ev","__ZNK7WebCore11EditCommand24isEditCommandCompositionEv","__ZN7WebCore20CompositeEditCommand10applyStyleEPKNS_12EditingStyleENS_10EditActionE","__ZN7WebCore20CompositeEditCommand53replaceElementWithSpanPreservingChildrenAndAttributesEN3WTF10PassRefPtrINS_11HTMLElementEEE","__ZN7WebCore20CompositeEditCommand38setShouldRetainAutocorrectionIndicatorEb","__ZN3WTF6VectorIN7WebCore14DocumentMarkerELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore22EditCommandComposition13editingActionEv","__ZN7WebCore20CompositeEditCommand34replaceTextInNodePreservingMarkersEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE","__ZN7WebCore17AppendNodeCommand6createEN3WTF10PassRefPtrINS_13ContainerNodeEEENS2_INS_4NodeEEE","__ZNK7WebCore20CompositeEditCommand35shouldRebalanceLeadingWhitespaceForERKN3WTF6StringE","__ZN7WebCore20CompositeEditCommand27insertNodeAtTabSpanPositionEN3WTF10PassRefPtrINS_4NodeEEERKNS_8PositionE","__ZN7WebCore16VisibleSelectionaSERKS0_","__ZN7WebCore22EditCommandCompositionD0Ev","__ZN7WebCore20CompositeEditCommand46updatePositionForNodeRemovalPreservingChildrenERNS_8PositionEPNS_4NodeE","__ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrIS0_EERKNS_16VisibleSelectionE","__ZN7WebCore16VisibleSelectionC2ERKS0_","__ZN7WebCore20CompositeEditCommand10removeNodeEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE","__ZN7WebCore20CompositeEditCommand22positionOutsideTabSpanERKNS_8PositionE","__ZN7WebCore22EditCommandComposition7reapplyEv","__ZN7WebCore20CompositeEditCommand16insertNodeBeforeEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE","__ZN7WebCore20CompositeEditCommand35prepareWhitespaceAtPositionForSplitERNS_8PositionE","__ZN7WebCore20CompositeEditCommand10appendNodeEN3WTF10PassRefPtrINS_4NodeEEENS2_INS_13ContainerNodeEEE","__ZN7WebCore20CompositeEditCommand23breakOutOfEmptyListItemEv","__ZN7WebCore20CompositeEditCommand13splitTextNodeEN3WTF10PassRefPtrINS_4TextEEEj","__ZN7WebCore20CompositeEditCommand15deleteSelectionERKNS_16VisibleSelectionEbbbbb","__ZN7WebCore23InsertNodeBeforeCommand6createEN3WTF10PassRefPtrINS_4NodeEEES4_NS_35ShouldAssumeContentIsAlwaysEditableE","__ZNK7WebCore20CompositeEditCommand23shouldStopCaretBlinkingEv","__ZN7WebCore20CompositeEditCommand19rebalanceWhitespaceEv","__ZN7WebCore20CompositeEditCommandD2Ev","__ZN7WebCore20CompositeEditCommand27removeNodeAndPruneAncestorsEN3WTF10PassRefPtrINS_4NodeEEE","__ZN7WebCore20CompositeEditCommandC2ERNS_8DocumentE","__ZNSt3__17__sort4IRPFbPKN7WebCore13InlineTextBoxES4_EPPS2_EEjT0_SA_SA_SA_T_","__ZN7WebCore20CompositeEditCommand21rebalanceWhitespaceAtERKNS_8PositionE","__ZN7WebCore20CompositeEditCommand5applyEv","__ZN7WebCore20CompositeEditCommand34rebalanceWhitespaceOnTextSubstringEN3WTF10PassRefPtrINS_4TextEEEii","_memset","__ZN7WebCore20CompositeEditCommand15insertNodeAfterEN3WTF10PassRefPtrINS_4NodeEEES4_","__ZN7WebCore20CompositeEditCommand15splitTreeToNodeEPNS_4NodeES2_b","__ZN7WebCore20CompositeEditCommand29cloneParagraphUnderNewElementERNS_8PositionES2_PNS_4NodeEPNS_7ElementE","__ZN7WebCore20CompositeEditCommand25replaceSelectedTextInNodeERKN3WTF6StringE","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore20CompositeEditCommand28removeNodePreservingChildrenEN3WTF10PassRefPtrINS_4NodeEEENS_35ShouldAssumeContentIsAlwaysEditableE","__ZN7WebCore20CompositeEditCommand17ensureCompositionEv","__ZN7WebCore20CompositeEditCommand15deleteSelectionEbbbbb","__ZN7WebCore20CompositeEditCommand18insertTextIntoNodeEN3WTF10PassRefPtrINS_4TextEEEjRKNS1_6StringE","__ZN7WebCore20CompositeEditCommand39breakOutOfEmptyMailBlockquotedParagraphEv","__ZN7WebCore20CompositeEditCommand23deleteInsignificantTextERKNS_8PositionES3_","__ZNK7WebCore11EditCommand19isSimpleEditCommandEv","__ZN7WebCoreeqERKNS_16VisibleSelectionES2_","__ZN7WebCore20CompositeEditCommand17replaceTextInNodeEN3WTF10PassRefPtrINS_4TextEEEjjRKNS1_6StringE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore17SimpleEditCommandEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore20CompositeEditCommand20cleanupAfterDeletionENS_15VisiblePositionE","__ZN7WebCore29MergeIdenticalElementsCommand6createEN3WTF10PassRefPtrINS_7ElementEEES4_","__ZN7WebCore20CompositeEditCommand12splitElementEN3WTF10PassRefPtrINS_7ElementEEENS2_INS_4NodeEEE","__ZN7WebCore20CompositeEditCommand14moveParagraphsERKNS_15VisiblePositionES3_S3_bb","__ZN7WebCore20CompositeEditCommand23applyCommandToCompositeEN3WTF10PassRefPtrINS_11EditCommandEEE","__ZNK7WebCore20CompositeEditCommand12canRebalanceERKNS_8PositionE","__ZN7WebCore20CompositeEditCommand16isRemovableBlockEPKNS_4NodeE","__ZN7WebCore20CompositeEditCommand13moveParagraphERKNS_15VisiblePositionES3_S3_bb","__ZNK7WebCore20CompositeEditCommand22isCompositeEditCommandEv","__ZN7WebCore20CompositeEditCommand23deleteInsignificantTextEN3WTF10PassRefPtrINS_4TextEEEjj","__ZN7WebCore29createBlockPlaceholderElementERNS_8DocumentE","__ZN7WebCore20CompositeEditCommand22appendBlockPlaceholderEN3WTF10PassRefPtrINS_7ElementEEE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore20CompositeEditCommand30splitTextNodeContainingElementEN3WTF10PassRefPtrINS_4TextEEEj","__ZN7WebCore22EditCommandComposition6appendEPNS_17SimpleEditCommandE","__ZN7WebCore20CompositeEditCommand10applyStyleEPKNS_12EditingStyleERKNS_8PositionES6_NS_10EditActionE","__ZN7WebCore20CompositeEditCommand17removeCSSPropertyEN3WTF10PassRefPtrINS_13StyledElementEEENS_13CSSPropertyIDE","__ZN7WebCore22EditCommandComposition18setEndingSelectionERKNS_16VisibleSelectionE","__ZN7WebCore20CompositeEditCommand23moveParagraphWithClonesERKNS_15VisiblePositionES3_PNS_7ElementEPNS_4NodeE","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore20CompositeEditCommand5pruneEN3WTF10PassRefPtrINS_4NodeEEE","__ZN7WebCore20CompositeEditCommand38positionAvoidingSpecialElementBoundaryERKNS_8PositionE","__ZN7WebCore20CompositeEditCommand16setNodeAttributeEN3WTF10PassRefPtrINS_7ElementEEERKNS_13QualifiedNameERKNS1_12AtomicStringE","__ZNK7WebCore20CompositeEditCommand20preservesTypingStyleEv","__ZN7WebCore13InlineTextBox14compareByStartEPKS0_S2_","__ZN7WebCore22EditCommandCompositionC2ERNS_8DocumentERKNS_16VisibleSelectionES5_NS_10EditActionE","__ZN7WebCore20CompositeEditCommand18applyStyledElementEN3WTF10PassRefPtrINS_7ElementEEE","__ZN7WebCore20CompositeEditCommand21pushAnchorElementDownERNS_7ElementE","__ZN7WebCore20CompositeEditCommand42moveParagraphContentsToNewBlockIfNecessaryERKNS_8PositionE"]

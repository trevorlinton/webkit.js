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
H_BASE = parentModule["_malloc"](696 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 696;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13RenderElementD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
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
function invoke_iiif(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiif"](index,a1,a2,a3);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames5rtTagE=env.__ZN7WebCore9HTMLNames5rtTagE|0;
  var __ZN7WebCore9HTMLNames7rubyTagE=env.__ZN7WebCore9HTMLNames7rubyTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore13RenderElement20s_affectsParentBlockE=(H_BASE+696)|0;
  var __ZTVN7WebCore13RenderElementE=(H_BASE+8)|0;
  var __ZN7WebCore13RenderElement28s_noLongerAffectsParentBlockE=(H_BASE+688)|0;
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiif=env.invoke_iiif;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
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
function __ZN7WebCore13RenderElement26repaintAfterLayoutIfNeededEPKNS_22RenderLayerModelObjectERKNS_10LayoutRectES6_PS5_S7_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = i15 | 0;
 i17 = i15;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i44 = i1 | 0;
 i45 = i1 + 4 | 0;
 if (__ZNK7WebCore10RenderView8printingEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i45 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) {
  i46 = 0;
  STACKTOP = i7;
  return i46 | 0;
 }
 if ((i5 | 0) == 0) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 500 >> 2] & 31](i14, i44, i2);
 } else {
  i47 = i12;
  i48 = i5;
  HEAP32[i47 >> 2] = HEAP32[i48 >> 2];
  HEAP32[i47 + 4 >> 2] = HEAP32[i48 + 4 >> 2];
  HEAP32[i47 + 8 >> 2] = HEAP32[i48 + 8 >> 2];
  HEAP32[i47 + 12 >> 2] = HEAP32[i48 + 12 >> 2];
 }
 i48 = i1 + 20 | 0;
 L8 : do {
  if ((HEAP32[i48 >> 2] & 1 | 0) == 0) {
   i47 = i1 + 36 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i47 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 64 | 0) != 0) {
    i49 = 1;
    i50 = 0;
    i51 = 0;
    i52 = 0;
    i53 = 0;
    break;
   }
   if ((i6 | 0) == 0) {
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 508 >> 2] & 15](i17, i44, i2, 0);
   } else {
    i5 = i15;
    i54 = i6;
    HEAP32[i5 >> 2] = HEAP32[i54 >> 2];
    HEAP32[i5 + 4 >> 2] = HEAP32[i54 + 4 >> 2];
    HEAP32[i5 + 8 >> 2] = HEAP32[i54 + 8 >> 2];
    HEAP32[i5 + 12 >> 2] = HEAP32[i54 + 12 >> 2];
   }
   i54 = i15 + 8 | 0;
   i5 = HEAP32[i54 >> 2] | 0;
   i55 = HEAP32[i54 + 4 >> 2] | 0;
   i54 = HEAP32[i16 >> 2] | 0;
   i56 = HEAP32[i16 + 4 >> 2] | 0;
   i57 = i4;
   do {
    if (!((i54 | 0) != (HEAP32[i57 >> 2] | 0) | (i56 | 0) != (HEAP32[i57 + 4 >> 2] | 0))) {
     i58 = HEAP32[(HEAP32[i47 >> 2] | 0) + 20 >> 2] | 0;
     i59 = i58 + 116 | 0;
     i60 = i59;
     while (1) {
      if ((HEAP32[i60 + 4 >> 2] | 0) != 0) {
       i61 = 15;
       break;
      }
      i62 = HEAP32[i60 >> 2] | 0;
      if ((i62 | 0) == 0) {
       i61 = 14;
       break;
      } else {
       i60 = i62;
      }
     }
     if ((i61 | 0) == 14) {
      if ((HEAP32[(HEAP32[i58 + 164 >> 2] | 0) + 8 >> 2] | 0) == 0) {
       i61 = 16;
      } else {
       i61 = 15;
      }
     }
     if ((i61 | 0) == 15) {
      if (!(__ZN7WebCoreL21mustRepaintFillLayersERKNS_13RenderElementEPKNS_9FillLayerE(i1, i59) | 0)) {
       i61 = 16;
      }
     }
     do {
      if ((i61 | 0) == 16) {
       i60 = i5;
       i62 = i55;
       if ((HEAP32[i48 >> 2] | 0) >>> 0 <= 1073741823 >>> 0) {
        i49 = 0;
        i50 = i56;
        i51 = i54;
        i52 = i62;
        i53 = i60;
        break L8;
       }
       if (__ZN7WebCoreL21mustRepaintFillLayersERKNS_13RenderElementEPKNS_9FillLayerE(i1, (HEAP32[(HEAP32[i47 >> 2] | 0) + 12 >> 2] | 0) + 4 | 0) | 0) {
        break;
       }
       i63 = HEAP32[i47 >> 2] | 0;
       i64 = HEAP32[i63 + 16 >> 2] | 0;
       i65 = HEAP32[(HEAP32[i64 + 132 >> 2] | 0) + 8 >> 2] | 0;
       i66 = (i65 | 0) != 0;
       i67 = HEAP32[i64 + 104 >> 2] | 0;
       i68 = (i67 & 134217726 | 0) == 0;
       if (i68 | i66) {
        if (i68) {
         i61 = 21;
        } else {
         i61 = 28;
        }
       } else {
        if ((i67 & 2013265920 | 0) == 0) {
         i61 = 21;
        } else {
         i61 = 28;
        }
       }
       do {
        if ((i61 | 0) == 21) {
         i67 = HEAP32[i64 + 112 >> 2] | 0;
         i68 = (i67 & 134217726 | 0) == 0;
         if (i68 | i66) {
          if (!i68) {
           i61 = 28;
           break;
          }
         } else {
          if ((i67 & 2013265920 | 0) != 0) {
           i61 = 28;
           break;
          }
         }
         i67 = HEAP32[i64 + 120 >> 2] | 0;
         i68 = (i67 & 134217726 | 0) == 0;
         if (i68 | i66) {
          if (!i68) {
           i61 = 28;
           break;
          }
         } else {
          if ((i67 & 2013265920 | 0) != 0) {
           i61 = 28;
           break;
          }
         }
         i67 = (HEAP32[i64 + 128 >> 2] & 134217726 | 0) == 0;
         if (i67 | (i65 | 0) == 0 | (i67 | i66) ^ 1) {
          i49 = 0;
          i50 = i56;
          i51 = i54;
          i52 = i62;
          i53 = i60;
          break L8;
         }
        }
       } while (0);
       if ((i61 | 0) == 28) {
        if ((i65 | 0) == 0) {
         i49 = 0;
         i50 = i56;
         i51 = i54;
         i52 = i62;
         i53 = i60;
         break L8;
        }
       }
       if (!(FUNCTION_TABLE_iiif[HEAP32[(HEAP32[i65 >> 2] | 0) + 12 >> 2] & 1](i65, i44, +HEAPF32[(HEAP32[i63 + 24 >> 2] | 0) + 80 >> 2]) | 0)) {
        i49 = 0;
        i50 = i56;
        i51 = i54;
        i52 = i62;
        i53 = i60;
        break L8;
       }
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i65 >> 2] | 0) + 16 >> 2] & 255](i65) | 0)) {
        i49 = 0;
        i50 = i56;
        i51 = i54;
        i52 = i62;
        i53 = i60;
        break L8;
       }
      }
     } while (0);
     i59 = i3;
     if ((HEAP32[i13 >> 2] | 0) != (HEAP32[i59 >> 2] | 0) | (HEAP32[i13 + 4 >> 2] | 0) != (HEAP32[i59 + 4 >> 2] | 0)) {
      break;
     }
     i59 = i12 + 8 | 0;
     i58 = i3 + 8 | 0;
     if ((HEAP32[i59 >> 2] | 0) != (HEAP32[i58 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i59 + 4 >> 2] | 0) != (HEAP32[i58 + 4 >> 2] | 0)) {
      break;
     }
     if ((i54 | 0) != (HEAP32[i57 >> 2] | 0) | (i56 | 0) != (HEAP32[i57 + 4 >> 2] | 0)) {
      break;
     }
     i58 = i5;
     i59 = i4 + 8 | 0;
     if ((i58 | 0) != (HEAP32[i59 >> 2] | 0)) {
      break;
     }
     i66 = i55;
     if ((i66 | 0) == (HEAP32[i59 + 4 >> 2] | 0)) {
      i49 = 0;
      i50 = i56;
      i51 = i54;
      i52 = i66;
      i53 = i58;
      break L8;
     }
    }
   } while (0);
   i49 = 1;
   i50 = i56;
   i51 = i54;
   i52 = i55;
   i53 = i5;
  } else {
   i49 = 1;
   i50 = 0;
   i51 = 0;
   i52 = 0;
   i53 = 0;
  }
 } while (0);
 if ((i2 | 0) == 0) {
  i69 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i45 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 } else {
  i69 = i2;
 }
 if (i49) {
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i18, i3);
  __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i44, i69, i18, 0);
  i18 = i3;
  do {
   if (!((HEAP32[i13 >> 2] | 0) != (HEAP32[i18 >> 2] | 0) | (HEAP32[i13 + 4 >> 2] | 0) != (HEAP32[i18 + 4 >> 2] | 0))) {
    i49 = i12 + 8 | 0;
    i2 = i3 + 8 | 0;
    if ((HEAP32[i49 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i49 + 4 >> 2] | 0) == (HEAP32[i2 + 4 >> 2] | 0)) {
     i46 = 1;
    } else {
     break;
    }
    STACKTOP = i7;
    return i46 | 0;
   }
  } while (0);
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i19, i14);
  __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i44, i69, i19, 0);
  i46 = 1;
  STACKTOP = i7;
  return i46 | 0;
 }
 i19 = HEAP32[i13 >> 2] | 0;
 i18 = i3;
 i2 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i19 | 0) == (i2 | 0) & (HEAP32[i13 + 4 >> 2] | 0) == (HEAP32[i18 + 4 >> 2] | 0)) {
   i49 = i12 + 8 | 0;
   i61 = i3 + 8 | 0;
   if ((HEAP32[i49 >> 2] | 0) != (HEAP32[i61 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i49 + 4 >> 2] | 0) != (HEAP32[i61 + 4 >> 2] | 0)) {
    break;
   }
   i61 = i4;
   if (!((i51 | 0) == (HEAP32[i61 >> 2] | 0) & (i50 | 0) == (HEAP32[i61 + 4 >> 2] | 0))) {
    break;
   }
   i61 = i4 + 8 | 0;
   if ((i53 | 0) != (HEAP32[i61 >> 2] | 0)) {
    break;
   }
   if ((i52 | 0) == (HEAP32[i61 + 4 >> 2] | 0)) {
    i46 = 0;
   } else {
    break;
   }
   STACKTOP = i7;
   return i46 | 0;
  }
 } while (0);
 i18 = i12;
 i13 = i3 | 0;
 i61 = i19 - i2 | 0;
 do {
  if ((i61 | 0) > 0) {
   i49 = HEAP32[i3 + 4 >> 2] | 0;
   i16 = HEAP32[i3 + 12 >> 2] | 0;
   HEAP32[i20 >> 2] = i2;
   HEAP32[i20 + 4 >> 2] = i49;
   HEAP32[i20 + 8 >> 2] = i61;
   HEAP32[i20 + 12 >> 2] = i16;
   __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i44, i69, i20, 0);
  } else {
   if ((i61 | 0) >= 0) {
    break;
   }
   i16 = HEAP32[i14 + 4 >> 2] | 0;
   i49 = HEAP32[i14 + 12 >> 2] | 0;
   HEAP32[i21 >> 2] = i19;
   HEAP32[i21 + 4 >> 2] = i16;
   HEAP32[i21 + 8 >> 2] = -i61;
   HEAP32[i21 + 12 >> 2] = i49;
   __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i44, i69, i21, 0);
  }
 } while (0);
 i21 = i12 + 8 | 0;
 i12 = (HEAP32[i21 >> 2] | 0) + (HEAP32[i18 >> 2] | 0) | 0;
 i61 = i3 + 8 | 0;
 i19 = (HEAP32[i61 >> 2] | 0) + (HEAP32[i13 >> 2] | 0) | 0;
 i20 = i12 - i19 | 0;
 do {
  if ((i20 | 0) > 0) {
   i2 = HEAP32[i14 + 4 >> 2] | 0;
   i49 = HEAP32[i14 + 12 >> 2] | 0;
   HEAP32[i22 >> 2] = i19;
   HEAP32[i22 + 4 >> 2] = i2;
   HEAP32[i22 + 8 >> 2] = i20;
   HEAP32[i22 + 12 >> 2] = i49;
   __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i44, i69, i22, 0);
  } else {
   if ((i20 | 0) >= 0) {
    break;
   }
   i49 = HEAP32[i3 + 4 >> 2] | 0;
   i2 = HEAP32[i3 + 12 >> 2] | 0;
   HEAP32[i23 >> 2] = i12;
   HEAP32[i23 + 4 >> 2] = i49;
   HEAP32[i23 + 8 >> 2] = -i20;
   HEAP32[i23 + 12 >> 2] = i2;
   __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i44, i69, i23, 0);
  }
 } while (0);
 i23 = i14 + 4 | 0;
 i20 = HEAP32[i23 >> 2] | 0;
 i12 = i3 + 4 | 0;
 i22 = HEAP32[i12 >> 2] | 0;
 i19 = i20 - i22 | 0;
 do {
  if ((i19 | 0) > 0) {
   i2 = HEAP32[i61 >> 2] | 0;
   HEAP32[i24 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i24 + 4 >> 2] = i22;
   HEAP32[i24 + 8 >> 2] = i2;
   HEAP32[i24 + 12 >> 2] = i19;
   __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i44, i69, i24, 0);
  } else {
   if ((i19 | 0) >= 0) {
    break;
   }
   i2 = HEAP32[i21 >> 2] | 0;
   HEAP32[i25 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i25 + 4 >> 2] = i20;
   HEAP32[i25 + 8 >> 2] = i2;
   HEAP32[i25 + 12 >> 2] = -i19;
   __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i44, i69, i25, 0);
  }
 } while (0);
 i25 = i14 + 12 | 0;
 i14 = (HEAP32[i25 >> 2] | 0) + (HEAP32[i23 >> 2] | 0) | 0;
 i19 = i3 + 12 | 0;
 i3 = (HEAP32[i19 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) | 0;
 i20 = i14 - i3 | 0;
 do {
  if ((i20 | 0) > 0) {
   i24 = HEAP32[i21 >> 2] | 0;
   HEAP32[i26 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i26 + 4 >> 2] = i3;
   HEAP32[i26 + 8 >> 2] = i24;
   HEAP32[i26 + 12 >> 2] = i20;
   __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i44, i69, i26, 0);
  } else {
   if ((i20 | 0) >= 0) {
    break;
   }
   i24 = HEAP32[i61 >> 2] | 0;
   HEAP32[i27 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i27 + 4 >> 2] = i14;
   HEAP32[i27 + 8 >> 2] = i24;
   HEAP32[i27 + 12 >> 2] = -i20;
   __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i44, i69, i27, 0);
  }
 } while (0);
 i27 = i4;
 do {
  if ((i51 | 0) == (HEAP32[i27 >> 2] | 0) & (i50 | 0) == (HEAP32[i27 + 4 >> 2] | 0)) {
   i20 = i4 + 8 | 0;
   if ((i53 | 0) != (HEAP32[i20 >> 2] | 0)) {
    break;
   }
   if ((i52 | 0) == (HEAP32[i20 + 4 >> 2] | 0)) {
    i46 = 0;
   } else {
    break;
   }
   STACKTOP = i7;
   return i46 | 0;
  }
 } while (0);
 i27 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 492 >> 2] & 255](i44) | 0) + 12 | 0;
 i20 = HEAP32[i27 >> 2] | 0;
 i14 = HEAP32[i20 + 64 >> 2] | 0;
 if ((i14 & 2013265920 | 0) == 0) {
  i70 = 0;
  i71 = 0;
 } else {
  i70 = HEAP32[i20 + 68 >> 2] | 0;
  i71 = i14 >>> 1 & 65535;
 }
 i14 = i70 + i71 | 0;
 i71 = (i14 | 0) > 0 ? i14 & 65535 : 0;
 HEAP32[i28 >> 2] = i71;
 i14 = i1 + 36 | 0;
 i70 = HEAP32[i14 >> 2] | 0;
 __ZNK7WebCore11RenderStyle20getShadowInsetExtentEPKNS_10ShadowDataE(i29, i70, HEAP32[(HEAP32[i70 + 20 >> 2] | 0) + 100 >> 2] | 0);
 i70 = i4 + 8 | 0;
 i20 = HEAP32[i70 >> 2] | 0;
 i26 = i53 - i20 | 0;
 i3 = (i26 | 0) > -1 ? i26 : -i26 | 0;
 do {
  if ((i53 | 0) == (i20 | 0)) {
   i72 = i4 + 12 | 0;
  } else {
   HEAP32[i30 >> 2] = 0;
   i26 = i31 | 0;
   HEAP32[i26 >> 2] = 0;
   i24 = HEAP32[i14 >> 2] | 0;
   __ZNK7WebCore11RenderStyle25getShadowHorizontalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_(i24, HEAP32[(HEAP32[i24 + 20 >> 2] | 0) + 100 >> 2] | 0, i30, i31);
   i24 = HEAP32[i48 >> 2] | 0;
   if ((i24 & 512 | 0) == 0) {
    i73 = 0;
    i74 = i24;
   } else {
    i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 748 >> 2] & 255](i1) | 0;
    i73 = i24;
    i74 = HEAP32[i48 >> 2] | 0;
   }
   if ((i74 & 512 | 0) == 0) {
    i75 = 0;
   } else {
    i75 = HEAP32[i1 + 52 >> 2] | 0;
   }
   i24 = -(HEAP32[i29 + 4 >> 2] | 0) | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   i2 = HEAP32[i61 >> 2] | 0;
   i49 = (i2 | 0) < (i22 | 0) ? i2 : i22;
   HEAP32[i32 >> 2] = i73;
   i22 = (HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] | 0) + 152 | 0;
   i2 = (HEAP32[i45 >> 2] | 0) + 20 | 0;
   i16 = (HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) != 0;
   HEAP32[i8 >> 2] = i75;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i33, i22, i8, HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i16);
   i16 = (HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] | 0) + 184 | 0;
   HEAP32[i9 >> 2] = i75;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i34, i16, i9, HEAP32[(HEAP32[(HEAP32[(HEAP32[i45 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i16 = (HEAP32[i33 >> 2] | 0) < (HEAP32[i34 >> 2] | 0) ? i34 : i33;
   i2 = HEAP32[i27 >> 2] | 0;
   if ((HEAP32[i2 + 64 >> 2] & 2013265920 | 0) == 0) {
    i76 = 0;
   } else {
    i76 = HEAP32[i2 + 68 >> 2] | 0;
   }
   i2 = -i76 | 0;
   i22 = (HEAP32[((i73 | 0) < (HEAP32[i16 >> 2] | 0) ? i16 : i32) >> 2] | 0) + ((i49 | 0) < (i24 | 0) ? i49 : i24) | 0;
   i24 = (HEAP32[((i71 | 0) < (HEAP32[i26 >> 2] | 0) ? i31 : i28) >> 2] | 0) + ((i22 | 0) > (i2 | 0) ? i22 : i2) | 0;
   i2 = HEAP32[i70 >> 2] | 0;
   i22 = i51 - i24 + ((i2 | 0) < (i53 | 0) ? i2 : i53) | 0;
   i2 = i24 + i3 | 0;
   i24 = i4 + 12 | 0;
   i26 = HEAP32[i24 >> 2] | 0;
   HEAP32[i35 >> 2] = i22;
   HEAP32[i35 + 4 >> 2] = i50;
   i49 = i35 + 8 | 0;
   HEAP32[i49 >> 2] = i2;
   HEAP32[i35 + 12 >> 2] = (i52 | 0) < (i26 | 0) ? i26 : i52;
   i26 = (HEAP32[i21 >> 2] | 0) + (HEAP32[i18 >> 2] | 0) | 0;
   i16 = (HEAP32[i61 >> 2] | 0) + (HEAP32[i13 >> 2] | 0) | 0;
   i15 = (i16 | 0) < (i26 | 0) ? i16 : i26;
   if ((i22 | 0) >= (i15 | 0)) {
    i72 = i24;
    break;
   }
   i26 = i15 - i22 | 0;
   HEAP32[i49 >> 2] = (i26 | 0) < (i2 | 0) ? i26 : i2;
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i36, i35);
   __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i44, i69, i36, 0);
   i72 = i24;
  }
 } while (0);
 i36 = HEAP32[i72 >> 2] | 0;
 i35 = i52 - i36 | 0;
 if ((i52 | 0) == (i36 | 0)) {
  i46 = 0;
  STACKTOP = i7;
  return i46 | 0;
 }
 HEAP32[i37 >> 2] = 0;
 i36 = i38 | 0;
 HEAP32[i36 >> 2] = 0;
 i13 = HEAP32[i14 >> 2] | 0;
 __ZNK7WebCore11RenderStyle23getShadowVerticalExtentEPKNS_10ShadowDataERNS_10LayoutUnitES5_(i13, HEAP32[(HEAP32[i13 + 20 >> 2] | 0) + 100 >> 2] | 0, i37, i38);
 i37 = HEAP32[i48 >> 2] | 0;
 if ((i37 & 512 | 0) == 0) {
  i77 = 0;
  i78 = i37;
 } else {
  i37 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 740 >> 2] & 255](i1) | 0;
  i77 = i37;
  i78 = HEAP32[i48 >> 2] | 0;
 }
 if ((i78 & 512 | 0) == 0) {
  i79 = 0;
 } else {
  i79 = HEAP32[i1 + 56 >> 2] | 0;
 }
 i1 = -(HEAP32[i29 + 8 >> 2] | 0) | 0;
 i29 = HEAP32[i25 >> 2] | 0;
 i78 = HEAP32[i19 >> 2] | 0;
 i48 = (i78 | 0) < (i29 | 0) ? i78 : i29;
 HEAP32[i39 >> 2] = i77;
 i29 = (HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] | 0) + 176 | 0;
 HEAP32[i10 >> 2] = i79;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i40, i29, i10, HEAP32[(HEAP32[(HEAP32[(HEAP32[i45 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i10 = (HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] | 0) + 192 | 0;
 i14 = (HEAP32[i45 >> 2] | 0) + 20 | 0;
 i45 = (HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) != 0;
 HEAP32[i11 >> 2] = i79;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i41, i10, i11, HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i45);
 i45 = (HEAP32[i40 >> 2] | 0) < (HEAP32[i41 >> 2] | 0) ? i41 : i40;
 i40 = HEAP32[i27 >> 2] | 0;
 if ((HEAP32[i40 + 64 >> 2] & 2013265920 | 0) == 0) {
  i80 = 0;
 } else {
  i80 = HEAP32[i40 + 68 >> 2] | 0;
 }
 i40 = -i80 | 0;
 i80 = (HEAP32[((i77 | 0) < (HEAP32[i45 >> 2] | 0) ? i45 : i39) >> 2] | 0) + ((i48 | 0) < (i1 | 0) ? i48 : i1) | 0;
 i1 = (HEAP32[((i71 | 0) < (HEAP32[i36 >> 2] | 0) ? i38 : i28) >> 2] | 0) + ((i80 | 0) > (i40 | 0) ? i80 : i40) | 0;
 i40 = i50 + i52 | 0;
 i52 = (HEAP32[i72 >> 2] | 0) + (HEAP32[i4 + 4 >> 2] | 0) | 0;
 i4 = ((i52 | 0) < (i40 | 0) ? i52 : i40) - i1 | 0;
 i40 = HEAP32[i70 >> 2] | 0;
 i70 = i1 + ((i35 | 0) > -1 ? i35 : -i35 | 0) | 0;
 HEAP32[i42 >> 2] = i51;
 HEAP32[i42 + 4 >> 2] = i4;
 HEAP32[i42 + 8 >> 2] = (i53 | 0) < (i40 | 0) ? i40 : i53;
 i53 = i42 + 12 | 0;
 HEAP32[i53 >> 2] = i70;
 i40 = (HEAP32[i25 >> 2] | 0) + (HEAP32[i23 >> 2] | 0) | 0;
 i23 = (HEAP32[i19 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) | 0;
 i12 = (i23 | 0) < (i40 | 0) ? i23 : i40;
 if ((i4 | 0) >= (i12 | 0)) {
  i46 = 0;
  STACKTOP = i7;
  return i46 | 0;
 }
 i40 = i12 - i4 | 0;
 HEAP32[i53 >> 2] = (i40 | 0) < (i70 | 0) ? i40 : i70;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i43, i42);
 __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i44, i69, i43, 0);
 i46 = 0;
 STACKTOP = i7;
 return i46 | 0;
}
function __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 | 0;
 i5 = i1 + 36 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == (i7 | 0)) {
  i2 = i6 | 0;
  i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore11RenderStyleD2Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i2 >> 2] = i8;
   STACKTOP = i3;
   return;
  }
 }
 HEAP32[i4 >> 2] = 0;
 if ((HEAP8[i1 + 24 | 0] | 0) < 0) {
  i8 = __ZNK7WebCore11RenderStyle4diffEPKS0_Rj(i6, i7, i4) | 0;
  i9 = i8;
  i10 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = 0;
  i10 = 0;
 }
 i8 = __ZNK7WebCore13RenderElement21adjustStyleDifferenceENS_15StyleDifferenceEj(i1, i9, i10) | 0;
 i10 = i1;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 656 >> 2] & 31](i1, i8, i7);
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 i6 = HEAP32[i9 + 12 >> 2] | 0;
 i2 = i6 + 4 | 0;
 i11 = HEAP32[i7 + 12 >> 2] | 0;
 i7 = i11 + 4 | 0;
 i12 = (i2 | 0) == 0;
 do {
  if (i12) {
   i13 = 11;
  } else {
   if ((HEAP32[i2 >> 2] | 0) != 0 | (i7 | 0) == 0) {
    i13 = 11;
    break;
   }
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    i14 = i7;
    i13 = 13;
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != (HEAP32[i11 + 8 >> 2] | 0)) {
    i14 = i7;
    i13 = 13;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  if ((i7 | 0) == 0) {
   i13 = 12;
  } else {
   i14 = i7;
   i13 = 13;
  }
 }
 if ((i13 | 0) == 13) {
  while (1) {
   i13 = 0;
   i7 = HEAP32[i14 + 4 >> 2] | 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] & 31](i7, i1);
   }
   i7 = HEAP32[i14 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i13 = 12;
    break;
   } else {
    i14 = i7;
    i13 = 13;
   }
  }
 }
 do {
  if ((i13 | 0) == 12) {
   if (i12) {
    break;
   } else {
    i15 = i2;
   }
   while (1) {
    i14 = HEAP32[i15 + 4 >> 2] | 0;
    if ((i14 | 0) != 0) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 52 >> 2] & 31](i14, i1);
    }
    i15 = HEAP32[i15 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i15 = i9 + 20 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 i12 = i2 + 116 | 0;
 i14 = HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0;
 i7 = i14 + 116 | 0;
 i11 = (i12 | 0) == 0;
 do {
  if (i11) {
   i13 = 23;
  } else {
   if ((HEAP32[i12 >> 2] | 0) != 0 | (i7 | 0) == 0) {
    i13 = 23;
    break;
   }
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    i16 = i7;
    i13 = 25;
    break;
   }
   if ((HEAP32[i2 + 120 >> 2] | 0) != (HEAP32[i14 + 120 >> 2] | 0)) {
    i16 = i7;
    i13 = 25;
   }
  }
 } while (0);
 if ((i13 | 0) == 23) {
  if ((i7 | 0) == 0) {
   i13 = 24;
  } else {
   i16 = i7;
   i13 = 25;
  }
 }
 if ((i13 | 0) == 25) {
  while (1) {
   i13 = 0;
   i7 = HEAP32[i16 + 4 >> 2] | 0;
   if ((i7 | 0) != 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] & 31](i7, i1);
   }
   i7 = HEAP32[i16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i13 = 24;
    break;
   } else {
    i16 = i7;
    i13 = 25;
   }
  }
 }
 do {
  if ((i13 | 0) == 24) {
   if (i11) {
    break;
   } else {
    i17 = i12;
   }
   while (1) {
    i16 = HEAP32[i17 + 4 >> 2] | 0;
    if ((i16 | 0) != 0) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 52 >> 2] & 31](i16, i1);
    }
    i17 = HEAP32[i17 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i17 = HEAP32[(HEAP32[(HEAP32[i9 + 16 >> 2] | 0) + 132 >> 2] | 0) + 8 >> 2] | 0;
 i12 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] | 0) + 132 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((i17 | 0) != (i12 | 0)) {
   if ((i17 | 0) != 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 52 >> 2] & 31](i17, i1);
   }
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 48 >> 2] & 31](i12, i1);
  }
 } while (0);
 i12 = HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 164 >> 2] | 0) + 8 >> 2] | 0;
 i17 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 164 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((i12 | 0) != (i17 | 0)) {
   if ((i12 | 0) != 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 52 >> 2] & 31](i12, i1);
   }
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 48 >> 2] & 31](i17, i1);
  }
 } while (0);
 i17 = HEAP32[(HEAP32[i15 >> 2] | 0) + 184 >> 2] | 0;
 i12 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 184 >> 2] | 0;
 i11 = (i17 | 0) != 0;
 i16 = (i12 | 0) == 0;
 do {
  if (!(i16 & (i11 ^ 1))) {
   if (i11) {
    i18 = HEAP32[i17 + 12 >> 2] | 0;
   } else {
    i18 = 0;
   }
   if (i16) {
    i19 = 0;
   } else {
    i19 = HEAP32[i12 + 12 >> 2] | 0;
   }
   if ((i18 | 0) == (i19 | 0)) {
    break;
   }
   if ((i18 | 0) != 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 52 >> 2] & 31](i18, i1);
   }
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 48 >> 2] & 31](i19, i1);
  }
 } while (0);
 i19 = HEAP32[(HEAP32[i15 >> 2] | 0) + 188 >> 2] | 0;
 i15 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 188 >> 2] | 0;
 i18 = (i19 | 0) != 0;
 i12 = (i15 | 0) == 0;
 do {
  if (!(i12 & (i18 ^ 1))) {
   if (i18) {
    i20 = HEAP32[i19 + 12 >> 2] | 0;
   } else {
    i20 = 0;
   }
   if (i12) {
    i21 = 0;
   } else {
    i21 = HEAP32[i15 + 12 >> 2] | 0;
   }
   if ((i20 | 0) == (i21 | 0)) {
    break;
   }
   if ((i20 | 0) != 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 52 >> 2] & 31](i20, i1);
   }
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 48 >> 2] & 31](i21, i1);
  }
 } while (0);
 i21 = HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0;
 i20 = HEAP32[i21 + 64 >> 2] | 0;
 do {
  if ((i20 & 2013265920 | 0) == 0 | (i20 & 131070 | 0) == 0) {
   i22 = i1 | 0;
  } else {
   i15 = i20 >>> 1;
   i12 = HEAP32[i21 + 68 >> 2] | 0;
   i19 = i1 | 0;
   if ((((i12 + (i15 & 65535) | 0) > 0 ? i15 + i12 & 65535 : 0) | 0) <= (__ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(i19, 5) | 0)) {
    i22 = i19;
    break;
   }
   i12 = HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0;
   i15 = HEAP32[i12 + 64 >> 2] | 0;
   if ((i15 & 2013265920 | 0) == 0) {
    i23 = 0;
    i24 = 0;
   } else {
    i23 = HEAP32[i12 + 68 >> 2] | 0;
    i24 = i15 >>> 1 & 65535;
   }
   i15 = i23 + i24 | 0;
   __ZN7WebCore10RenderView21setMaximalOutlineSizeEi(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, (i15 | 0) > 0 ? i15 & 65535 : 0);
   i22 = i19;
  }
 } while (0);
 i24 = (HEAP32[i1 + 8 >> 2] | 0) == 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 660 >> 2] & 31](i1, i8, i9);
 i10 = i1 + 28 | 0;
 while (1) {
  i23 = HEAP32[i10 >> 2] | 0;
  if ((i23 | 0) == 0) {
   break;
  }
  if ((HEAP32[i23 + 20 >> 2] & 768 | 0) == 256) {
   i25 = i23;
   i13 = 70;
   break;
  } else {
   i10 = i23 + 16 | 0;
  }
 }
 L105 : do {
  if ((i13 | 0) == 70) {
   L106 : while (1) {
    i13 = 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i25 >> 2] | 0) + 648 >> 2] & 31](i25, i8, i9);
    i10 = i25;
    while (1) {
     i23 = HEAP32[i10 + 16 >> 2] | 0;
     if ((i23 | 0) == 0) {
      break L105;
     }
     if ((HEAP32[i23 + 20 >> 2] & 768 | 0) == 256) {
      i25 = i23;
      i13 = 70;
      continue L106;
     } else {
      i10 = i23;
     }
    }
   }
  }
 } while (0);
 L112 : do {
  if (!i24) {
   i25 = __ZNK7WebCore13RenderElement21adjustStyleDifferenceENS_15StyleDifferenceEj(i1, i8, HEAP32[i4 >> 2] | 0) | 0;
   L114 : do {
    if ((i8 | 0) < 6) {
     switch (i25 | 0) {
     case 8:
      {
       i10 = i1 + 20 | 0;
       i23 = HEAP32[i10 >> 2] | 0;
       do {
        if ((i23 & 1 | 0) == 0) {
         HEAP32[i10 >> 2] = i23 | 1;
         __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i22, 1, 0);
         if ((HEAP32[i10 >> 2] & 32768 | 0) == 0) {
          break;
         }
         __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i22);
        }
       } while (0);
       __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i22, 1, 1);
       i13 = 98;
       break L114;
       break;
      }
     case 5:
      {
       i10 = i1 + 20 | 0;
       i23 = HEAP32[i10 >> 2] | 0;
       if ((i23 & 2 | 0) != 0) {
        break L112;
       }
       HEAP32[i10 >> 2] = i23 | 2;
       __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i22, 1, 0);
       if ((HEAP32[i10 >> 2] & 32768 | 0) == 0) {
        i13 = 98;
        break L114;
       }
       do {
        if ((i9 | 0) != 0) {
         if (!(__ZNK7WebCore11RenderStyle19diffRequiresRepaintEPKS0_(HEAP32[i5 >> 2] | 0, i9) | 0)) {
          break;
         }
         __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i22);
         i13 = 98;
         break L114;
        }
       } while (0);
       __ZN7WebCore12RenderObject51setLayerNeedsFullRepaintForPositionedMovementLayoutEv(i22);
       i13 = 98;
       break L114;
       break;
      }
     case 7:
      {
       i10 = i1 + 20 | 0;
       i23 = HEAP32[i10 >> 2] | 0;
       L130 : do {
        if ((i23 & 2 | 0) == 0) {
         HEAP32[i10 >> 2] = i23 | 2;
         __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i22, 1, 0);
         if ((HEAP32[i10 >> 2] & 32768 | 0) == 0) {
          break;
         }
         do {
          if ((i9 | 0) != 0) {
           if (!(__ZNK7WebCore11RenderStyle19diffRequiresRepaintEPKS0_(HEAP32[i5 >> 2] | 0, i9) | 0)) {
            break;
           }
           __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i22);
           break L130;
          }
         } while (0);
         __ZN7WebCore12RenderObject51setLayerNeedsFullRepaintForPositionedMovementLayoutEv(i22);
        }
       } while (0);
       i23 = HEAP32[i10 >> 2] | 0;
       if ((i23 & 16 | 0) != 0) {
        i13 = 98;
        break L114;
       }
       HEAP32[i10 >> 2] = i23 | 16;
       __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i22, 1, 0);
       if ((HEAP32[i10 >> 2] & 32768 | 0) == 0) {
        i13 = 98;
        break L114;
       }
       __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i22);
       i13 = 98;
       break L114;
       break;
      }
     case 6:
      {
       i23 = i1 + 20 | 0;
       i21 = HEAP32[i23 >> 2] | 0;
       if ((i21 & 16 | 0) != 0) {
        break L112;
       }
       HEAP32[i23 >> 2] = i21 | 16;
       __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i22, 1, 0);
       if ((HEAP32[i23 >> 2] & 32768 | 0) == 0) {
        i13 = 98;
        break L114;
       }
       __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i22);
       i13 = 98;
       break L114;
       break;
      }
     case 3:
      {
       i13 = 99;
       break L114;
       break;
      }
     case 4:
     case 2:
      {
       break L114;
       break;
      }
     default:
      {
       break L112;
      }
     }
    } else {
     i13 = 98;
    }
   } while (0);
   if ((i13 | 0) == 98) {
    if ((i25 | 0) == 3) {
     i13 = 99;
    } else if (!((i25 | 0) == 4 | (i25 | 0) == 2)) {
     break;
    }
   }
   if ((i13 | 0) == 99) {
    if (!(__ZNK7WebCore13RenderElement51hasImmediateNonWhitespaceTextChildOrBorderOrOutlineEv(i1) | 0)) {
     break;
    }
   }
   __ZNK7WebCore12RenderObject7repaintEb(i22, 0);
  }
 } while (0);
 i22 = i9 | 0;
 i1 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i22 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13RenderElement15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 do {
  if ((HEAP8[i1 + 24 | 0] | 0) < 0) {
   i6 = i1 + 36 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 46;
    break;
   }
   i9 = HEAP32[i7 + 40 >> 2] | 0;
   i10 = i3 + 40 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   do {
    if (((i11 ^ i9) & 6144 | 0) == 0) {
     i12 = HEAP32[i7 + 4 >> 2] | 0;
     i13 = HEAP32[i3 + 4 >> 2] | 0;
     if ((HEAP32[i12 + 60 >> 2] | 0) != (HEAP32[i13 + 60 >> 2] | 0)) {
      i8 = 6;
      break;
     }
     if ((HEAP32[i12 + 64 >> 2] & 1 | 0) != 0 ^ (HEAP32[i13 + 64 >> 2] & 1 | 0) != 0) {
      i8 = 6;
     } else {
      i14 = i9;
      i15 = i11;
     }
    } else {
     i8 = 6;
    }
   } while (0);
   if ((i8 | 0) == 6) {
    i11 = i1 + 4 | 0;
    HEAP8[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1409 | 0] = 1;
    __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
    i14 = HEAP32[(HEAP32[i6 >> 2] | 0) + 40 >> 2] | 0;
    i15 = HEAP32[i10 >> 2] | 0;
   }
   i11 = i1 | 0;
   do {
    if (((i15 ^ i14) & 6144 | 0) != 0) {
     i9 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i11) | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     if ((HEAP32[i10 >> 2] & 6144 | 0) == 0) {
      __ZN7WebCore11RenderLayer20setHasVisibleContentEv(i9);
      break;
     }
     if ((HEAP8[i9 + 22 | 0] & 8) == 0) {
      break;
     }
     i7 = HEAP32[i9 + 32 >> 2] | 0;
     if ((i7 | 0) != (i1 | 0)) {
      if ((HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 0) {
       break;
      }
     }
     __ZN7WebCore11RenderLayer25dirtyVisibleContentStatusEv(i9);
     if ((i2 | 0) <= 4) {
      break;
     }
     __ZNK7WebCore12RenderObject7repaintEb(i11, 0);
    }
   } while (0);
   i10 = i1 + 8 | 0;
   do {
    if ((HEAP32[i10 >> 2] | 0) != 0) {
     i9 = HEAP32[i3 + 12 >> 2] | 0;
     i7 = HEAP32[i9 + 64 >> 2] | 0;
     if ((i7 & 2013265920 | 0) == 0) {
      i16 = 0;
      i17 = 0;
     } else {
      i16 = HEAP32[i9 + 68 >> 2] | 0;
      i17 = i7 >>> 1 & 65535;
     }
     i7 = i16 + i17 | 0;
     i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] | 0;
     i13 = HEAP32[i9 + 64 >> 2] | 0;
     if ((i13 & 2013265920 | 0) == 0) {
      i18 = 0;
      i19 = 0;
     } else {
      i18 = HEAP32[i9 + 68 >> 2] | 0;
      i19 = i13 >>> 1 & 65535;
     }
     i13 = i18 + i19 | 0;
     if (!((((i7 | 0) > 0 ? i7 & 65535 : 0) & 65535) >>> 0 < (((i13 | 0) > 0 ? i13 & 65535 : 0) & 65535) >>> 0 | (i2 | 0) == 2)) {
      if ((i2 | 0) != 3) {
       break;
      }
      if (!(__ZNK7WebCore13RenderElement51hasImmediateNonWhitespaceTextChildOrBorderOrOutlineEv(i1) | 0)) {
       break;
      }
     }
     __ZNK7WebCore12RenderObject7repaintEb(i11, 0);
    }
   } while (0);
   i11 = i1 + 20 | 0;
   i13 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i13 & 64 | 0) == 0) {
     i8 = 28;
    } else {
     if (((HEAP32[i3 + 48 >> 2] ^ HEAP32[(HEAP32[i6 >> 2] | 0) + 48 >> 2]) & 100663296 | 0) == 0) {
      i8 = 28;
      break;
     }
     __ZN7WebCore9RenderBox45removeFloatingOrPositionedChildFromBlockListsEv(i1);
    }
   } while (0);
   do {
    if ((i8 | 0) == 28) {
     if ((i13 & 25165824 | 0) != 16777216) {
      break;
     }
     if (((HEAP32[i3 + 48 >> 2] ^ HEAP32[(HEAP32[i6 >> 2] | 0) + 48 >> 2]) & 29360128 | 0) == 0) {
      break;
     }
     __ZN7WebCore9RenderBox45removeFloatingOrPositionedChildFromBlockListsEv(i1);
    }
   } while (0);
   i6 = HEAP32[i11 >> 2] | 0;
   i13 = i6 & 64;
   i7 = (i6 & 25165824 | 0) == 16777216;
   do {
    if ((i13 | 0) != 0 | i7) {
     i9 = HEAP32[i3 + 48 >> 2] | 0;
     if ((i9 & 100663296 | 0) != 0) {
      i20 = 0;
      break;
     }
     i12 = i9 >>> 22 & 7;
     if ((i12 | 0) == 6 | (i12 | 0) == 2) {
      i20 = 0;
      break;
     }
     i12 = HEAP32[i10 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i20 = 0;
      break;
     }
     i9 = HEAP32[i12 + 24 >> 2] | 0;
     if ((i9 & 32 | 0) != 0) {
      i20 = 1;
      break;
     }
     i20 = i9 >>> 2 & 1;
    } else {
     i20 = 0;
    }
   } while (0);
   HEAP8[H_BASE + 696 | 0] = i20;
   if ((i13 | 0) == 0) {
    if ((HEAP32[i3 + 48 >> 2] & 100663296 | 0) == 0) {
     i8 = 39;
    } else {
     i8 = 41;
    }
   } else {
    i8 = 39;
   }
   do {
    if ((i8 | 0) == 39) {
     if (i7) {
      i21 = 0;
      break;
     }
     i9 = (HEAP32[i3 + 48 >> 2] | 0) >>> 22 & 7;
     if ((i9 | 0) == 6 | (i9 | 0) == 2) {
      i8 = 41;
     } else {
      i21 = 0;
     }
    }
   } while (0);
   do {
    if ((i8 | 0) == 41) {
     i7 = HEAP32[i10 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i21 = 0;
      break;
     }
     i21 = (HEAP32[i7 + 24 >> 2] | 0) >>> 4 & 1;
    }
   } while (0);
   HEAP8[H_BASE + 688 | 0] = i21;
   if ((i2 | 0) == 8 | (i2 | 0) == 5) {
    i10 = i6 & -25165889;
    HEAP32[i11 >> 2] = i10;
    i22 = i10;
   } else {
    i22 = i6;
   }
   HEAP32[i11 >> 2] = i22 & 1073274879 | 8192;
   i23 = 1;
  } else {
   i8 = 46;
  }
 } while (0);
 if ((i8 | 0) == 46) {
  HEAP8[H_BASE + 696 | 0] = 0;
  HEAP8[H_BASE + 688 | 0] = 0;
  i23 = 0;
 }
 i22 = (HEAP32[i3 + 12 >> 2] | 0) + 4 | 0;
 while (1) {
  if ((HEAP32[i22 + 4 >> 2] | 0) != 0) {
   if ((HEAP32[i22 + 40 >> 2] & 3 | 0) == 2) {
    i24 = 1;
    break;
   }
  }
  i2 = HEAP32[i22 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i24 = 0;
   break;
  } else {
   i22 = i2;
  }
 }
 L71 : do {
  if (i23) {
   i22 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 12 >> 2] | 0) + 4 | 0;
   while (1) {
    if ((HEAP32[i22 + 4 >> 2] | 0) != 0) {
     if ((HEAP32[i22 + 40 >> 2] & 3 | 0) == 2) {
      i25 = 1;
      break L71;
     }
    }
    i2 = HEAP32[i22 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i25 = 0;
     break;
    } else {
     i22 = i2;
    }
   }
  } else {
   i25 = 0;
  }
 } while (0);
 i23 = i1 + 4 | 0;
 i22 = HEAP32[i23 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i22 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i6 = HEAP32[i11 + 692 >> 2] | 0;
 L79 : do {
  if ((i6 | 0) == (i22 | 0)) {
   i26 = i11;
   i8 = 72;
  } else {
   if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0 | (i22 | 0) == 0) {
    i27 = i24;
    i28 = i25;
    i8 = 78;
    break;
   }
   if ((HEAP32[i22 + 12 >> 2] & 4 | 0) == 0) {
    i27 = i24;
    i28 = i25;
    i8 = 78;
    break;
   }
   i2 = HEAP32[i22 + 44 >> 2] | 0;
   i21 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i2 | 0) != (i21 | 0)) {
    if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i21 + 12 >> 2] | 0)) {
     i27 = i24;
     i28 = i25;
     i8 = 78;
     break;
    }
    if ((HEAP32[i2 + 16 >> 2] | 0) != (HEAP32[i21 + 16 >> 2] | 0)) {
     i27 = i24;
     i28 = i25;
     i8 = 78;
     break;
    }
   }
   i21 = i6 + 32 | 0;
   if ((HEAP32[i6 + 12 >> 2] & 2048 | 0) == 0) {
    i29 = i21 | 0;
   } else {
    i29 = HEAP32[i21 >> 2] | 0;
   }
   i21 = HEAP32[i29 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i26 = i11;
    i8 = 72;
    break;
   }
   i2 = HEAP32[i21 + 36 >> 2] | 0;
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i5, i2, 23);
   if ((HEAP8[i5 + 4 | 0] & 1) != 0) {
    if ((HEAP32[i5 >> 2] | 0) >>> 0 >= 16777216 >>> 0) {
     i27 = i24;
     i28 = i25;
     i8 = 78;
     break;
    }
   }
   i21 = (HEAP32[i2 + 12 >> 2] | 0) + 4 | 0;
   while (1) {
    if ((HEAP32[i21 + 4 >> 2] | 0) != 0) {
     i27 = i24;
     i28 = i25;
     i8 = 78;
     break L79;
    }
    i21 = HEAP32[i21 >> 2] | 0;
    if ((i21 | 0) == 0) {
     break;
    }
   }
   i26 = HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   i8 = 72;
  }
 } while (0);
 do {
  if ((i8 | 0) == 72) {
   if (!(__ZNK7WebCore21RenderLayerCompositor38supportsFixedRootBackgroundCompositingEv(__ZN7WebCore10RenderView10compositorEv(HEAP32[i26 + 1584 >> 2] | 0) | 0) | 0)) {
    i27 = i24;
    i28 = i25;
    i8 = 78;
    break;
   }
   if (i24) {
    i30 = (__ZNK7WebCore11RenderStyle26hasEntirelyFixedBackgroundEv(i3) | 0) ^ 1;
   } else {
    i30 = 0;
   }
   if (i25) {
    i27 = i30;
    i28 = (__ZNK7WebCore11RenderStyle26hasEntirelyFixedBackgroundEv(HEAP32[i1 + 36 >> 2] | 0) | 0) ^ 1;
    i8 = 78;
    break;
   }
   if (i30) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i8 | 0) == 78) {
   if (!(i28 ^ i27)) {
    STACKTOP = i4;
    return;
   }
   if (i28) {
    __ZN7WebCore9FrameView23removeSlowRepaintObjectEPNS_13RenderElementE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i1);
    if (i27) {
     break;
    }
    STACKTOP = i4;
    return;
   } else {
    if (i27) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 __ZN7WebCore9FrameView20addSlowRepaintObjectEPNS_13RenderElementE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13RenderElement9createForERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
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
 i24 = i2 | 0;
 i25 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i26 = HEAP32[i3 >> 2] | 0;
 i3 = i26 + 20 | 0;
 i27 = HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   if ((HEAP32[i27 + 4 >> 2] | 0) != 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 12 >> 2] & 255](i27) | 0)) {
    break;
   }
   if ((HEAP32[i2 + 12 >> 2] & 1048580 | 0) == 1048580) {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 232 >> 2] & 255](i24) | 0) != 0) {
     break;
    }
   }
   i28 = __ZN3WTF10fastMallocEj(112) | 0;
   i29 = i28;
   HEAP32[i20 >> 2] = i26;
   __ZN7WebCore11RenderImageC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i29, i2, i20);
   i30 = HEAP32[i27 + 12 >> 2] | 0;
   do {
    if ((i30 | 0) == 0) {
     i31 = __ZN3WTF10fastMallocEj(12) | 0;
     __ZN7WebCore19RenderImageResourceC1Ev(i31);
     i32 = i23 | 0;
     HEAP32[i32 >> 2] = i31;
     __ZN7WebCore11RenderImage16setImageResourceEN3WTF10PassOwnPtrINS_19RenderImageResourceEEE(i29, i23);
     i31 = HEAP32[i32 >> 2] | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 31](i31);
    } else {
     i31 = __ZN3WTF10fastMallocEj(16) | 0;
     __ZN7WebCore29RenderImageResourceStyleImageC1ERNS_10StyleImageE(i31, i30);
     i32 = i22 | 0;
     HEAP32[i32 >> 2] = i31;
     __ZN7WebCore11RenderImage16setImageResourceEN3WTF10PassOwnPtrINS_19RenderImageResourceEEE(i29, i22);
     i31 = HEAP32[i32 >> 2] | 0;
     if ((i31 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 31](i31);
     }
     HEAP8[i28 + 110 | 0] = 1;
    }
   } while (0);
   HEAP32[i1 >> 2] = i28;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i22 = HEAP32[i2 + 44 >> 2] | 0;
 i23 = HEAP32[__ZN7WebCore9HTMLNames7rubyTagE >> 2] | 0;
 do {
  if ((i22 | 0) == (i23 | 0)) {
   i33 = 16;
  } else {
   if ((HEAP32[i22 + 12 >> 2] | 0) != (HEAP32[i23 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i22 + 16 >> 2] | 0) == (HEAP32[i23 + 16 >> 2] | 0)) {
    i33 = 16;
   }
  }
 } while (0);
 do {
  if ((i33 | 0) == 16) {
   i23 = HEAP32[i26 + 48 >> 2] & 31;
   if ((i23 | 0) == 0) {
    i27 = __ZN3WTF10fastMallocEj(52) | 0;
    HEAP32[i17 >> 2] = i26;
    __ZN7WebCore18RenderRubyAsInlineC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i27, i2, i17);
    HEAP32[i1 >> 2] = i27;
    STACKTOP = i4;
    return;
   } else if ((i23 | 0) == 1) {
    i23 = __ZN3WTF10fastMallocEj(116) | 0;
    HEAP32[i15 >> 2] = i26;
    __ZN7WebCore17RenderRubyAsBlockC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i23, i2, i15);
    HEAP32[i1 >> 2] = i23;
    STACKTOP = i4;
    return;
   } else {
    break;
   }
  }
 } while (0);
 i15 = HEAP32[__ZN7WebCore9HTMLNames5rtTagE >> 2] | 0;
 do {
  if ((i22 | 0) == (i15 | 0)) {
   i33 = 22;
  } else {
   if ((HEAP32[i22 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i22 + 16 >> 2] | 0) == (HEAP32[i15 + 16 >> 2] | 0)) {
    i33 = 22;
   }
  }
 } while (0);
 do {
  if ((i33 | 0) == 22) {
   if ((HEAP32[i26 + 48 >> 2] & 31 | 0) != 1) {
    break;
   }
   i15 = __ZN3WTF10fastMallocEj(116) | 0;
   HEAP32[i13 >> 2] = i26;
   __ZN7WebCore14RenderRubyTextC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i15, i2, i13);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 switch (HEAP32[i26 + 48 >> 2] & 31 | 0) {
 case 22:
  {
   i13 = i26 | 0;
   i33 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i33 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i26);
    __ZN3WTF8fastFreeEPv(i26);
   } else {
    HEAP32[i13 >> 2] = i33;
   }
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 case 0:
  {
   i33 = __ZN3WTF10fastMallocEj(52) | 0;
   HEAP32[i12 >> 2] = i26;
   __ZN7WebCore12RenderInlineC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i33, i2, i12);
   HEAP32[i1 >> 2] = i33;
   STACKTOP = i4;
   return;
  }
 case 1:
 case 5:
 case 3:
 case 4:
  {
   do {
    if ((HEAP8[(HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0] & 3) != 3) {
     if (!(__ZNK7WebCore8Document25regionBasedColumnsEnabledEv(i25) | 0)) {
      break;
     }
     i33 = __ZN3WTF10fastMallocEj(136) | 0;
     HEAP32[i9 >> 2] = i26;
     __ZN7WebCore22RenderMultiColumnBlockC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i33, i2, i9);
     HEAP32[i1 >> 2] = i33;
     STACKTOP = i4;
     return;
    }
   } while (0);
   i9 = __ZN3WTF10fastMallocEj(116) | 0;
   HEAP32[i8 >> 2] = i26;
   __ZN7WebCore15RenderBlockFlowC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i9, i2, i8);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 case 2:
  {
   i9 = __ZN3WTF10fastMallocEj(132) | 0;
   HEAP32[i7 >> 2] = i26;
   __ZN7WebCore14RenderListItemC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i9, i2, i7);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 case 6:
 case 7:
  {
   i9 = __ZN3WTF10fastMallocEj(192) | 0;
   HEAP32[i6 >> 2] = i26;
   __ZN7WebCore11RenderTableC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i9, i2, i6);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 case 8:
 case 9:
 case 10:
  {
   i9 = __ZN3WTF10fastMallocEj(188) | 0;
   HEAP32[i5 >> 2] = i26;
   __ZN7WebCore18RenderTableSectionC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i9, i2, i5);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 case 11:
  {
   i9 = __ZN3WTF10fastMallocEj(96) | 0;
   HEAP32[i10 >> 2] = i26;
   __ZN7WebCore14RenderTableRowC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i9, i2, i10);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 case 12:
 case 13:
  {
   i9 = __ZN3WTF10fastMallocEj(96) | 0;
   HEAP32[i11 >> 2] = i26;
   __ZN7WebCore14RenderTableColC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i9, i2, i11);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 case 14:
  {
   i9 = __ZN3WTF10fastMallocEj(128) | 0;
   HEAP32[i14 >> 2] = i26;
   __ZN7WebCore15RenderTableCellC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i9, i2, i14);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 case 15:
  {
   i9 = __ZN3WTF10fastMallocEj(116) | 0;
   HEAP32[i16 >> 2] = i26;
   __ZN7WebCore18RenderTableCaptionC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i9, i2, i16);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 case 16:
 case 17:
  {
   i9 = __ZN3WTF10fastMallocEj(100) | 0;
   HEAP32[i18 >> 2] = i26;
   __ZN7WebCore27RenderDeprecatedFlexibleBoxC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i9, i2, i18);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 case 18:
 case 19:
  {
   i9 = __ZN3WTF10fastMallocEj(128) | 0;
   HEAP32[i19 >> 2] = i26;
   __ZN7WebCore17RenderFlexibleBoxC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i9, i2, i19);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 case 20:
 case 21:
  {
   i9 = __ZN3WTF10fastMallocEj(156) | 0;
   HEAP32[i21 >> 2] = i26;
   __ZN7WebCore10RenderGridC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i9, i2, i21);
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i4;
   return;
  }
 default:
  {
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_viii + 18;
}
function __ZN7WebCore13RenderElement14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP8[H_BASE + 696 | 0] & 1) != 0) {
  __ZN7WebCore12RenderObject32handleDynamicFloatPositionChangeEv(i1 | 0);
 }
 i4 = i1 | 0;
 if ((HEAP8[H_BASE + 688 | 0] & 1) != 0) {
  __ZN7WebCore12RenderObject44removeAnonymousWrappersForInlinesIfNecessaryEv(i4);
 }
 __ZN7WebCore16SVGRenderSupport12styleChangedERNS_13RenderElementE(i1);
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 i5 = (i2 | 0) == 8;
 L10 : do {
  if ((i2 | 0) == 7) {
   i6 = i1 + 20 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   L12 : do {
    if ((i7 & 2 | 0) == 0) {
     HEAP32[i6 >> 2] = i7 | 2;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
     if ((HEAP32[i6 >> 2] & 32768 | 0) == 0) {
      break;
     }
     do {
      if ((i3 | 0) != 0) {
       if (!(__ZNK7WebCore11RenderStyle19diffRequiresRepaintEPKS0_(HEAP32[i1 + 36 >> 2] | 0, i3) | 0)) {
        break;
       }
       __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
       break L12;
      }
     } while (0);
     __ZN7WebCore12RenderObject51setLayerNeedsFullRepaintForPositionedMovementLayoutEv(i4);
    }
   } while (0);
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 & 16 | 0) != 0) {
    i8 = 33;
    break;
   }
   HEAP32[i6 >> 2] = i7 | 16;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
   if ((HEAP32[i6 >> 2] & 32768 | 0) == 0) {
    i8 = 33;
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
   i8 = 33;
  } else if ((i2 | 0) == 8 | (i2 | 0) == 6) {
   i7 = i1 + 36 | 0;
   __ZN7WebCore13RenderCounter20rendererStyleChangedEPNS_12RenderObjectEPKNS_11RenderStyleES5_(i4, i3, HEAP32[i7 >> 2] | 0);
   i9 = i1 + 20 | 0;
   do {
    if ((HEAP32[i9 >> 2] & 31 | 0) != 0) {
     if (((HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] ^ HEAP32[i3 + 48 >> 2]) & 29360128 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
    }
   } while (0);
   i7 = HEAP32[i9 >> 2] | 0;
   if (!i5) {
    if ((i7 & 16 | 0) != 0) {
     i8 = 33;
     break;
    }
    HEAP32[i9 >> 2] = i7 | 16;
    __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
    if ((HEAP32[i9 >> 2] & 32768 | 0) == 0) {
     i8 = 33;
     break;
    }
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
    i8 = 33;
    break;
   }
   do {
    if ((i7 & 1 | 0) == 0) {
     HEAP32[i9 >> 2] = i7 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
     if ((HEAP32[i9 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i4, 1, 1);
   i8 = 33;
  } else if ((i2 | 0) == 5) {
   i9 = i1 + 20 | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   if ((i7 & 2 | 0) != 0) {
    i8 = 33;
    break;
   }
   HEAP32[i9 >> 2] = i7 | 2;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
   if ((HEAP32[i9 >> 2] & 32768 | 0) == 0) {
    i8 = 33;
    break;
   }
   do {
    if ((i3 | 0) != 0) {
     i9 = i1 + 36 | 0;
     if (!(__ZNK7WebCore11RenderStyle19diffRequiresRepaintEPKS0_(HEAP32[i9 >> 2] | 0, i3) | 0)) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
     i10 = i9;
     break L10;
    }
   } while (0);
   __ZN7WebCore12RenderObject51setLayerNeedsFullRepaintForPositionedMovementLayoutEv(i4);
   i8 = 33;
  } else {
   i8 = 33;
  }
 } while (0);
 do {
  if ((i8 | 0) == 33) {
   if ((i3 | 0) == 0) {
    return;
   } else {
    i10 = i1 + 36 | 0;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 L49 : do {
  if (((HEAP32[i8 + 40 >> 2] ^ HEAP32[i3 + 40 >> 2]) & 528482304 | 0) == 0) {
   i10 = HEAP32[(HEAP32[i3 + 24 >> 2] | 0) + 68 >> 2] | 0;
   i4 = HEAP32[(HEAP32[i8 + 24 >> 2] | 0) + 68 >> 2] | 0;
   if ((i10 | 0) == (i4 | 0)) {
    return;
   }
   if ((i10 | 0) == 0 | (i4 | 0) == 0) {
    break;
   }
   i2 = HEAP32[i10 + 12 >> 2] | 0;
   if ((i2 | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
    break;
   }
   i5 = HEAP32[i10 + 4 >> 2] | 0;
   i10 = HEAP32[i4 + 4 >> 2] | 0;
   i4 = 0;
   while (1) {
    if (i4 >>> 0 >= i2 >>> 0) {
     break;
    }
    if ((HEAP32[i5 + (i4 * 12 & -1) + 4 >> 2] | 0) != (HEAP32[i10 + (i4 * 12 & -1) + 4 >> 2] | 0)) {
     break L49;
    }
    if ((HEAP32[i5 + (i4 * 12 & -1) + 8 >> 2] | 0) != (HEAP32[i10 + (i4 * 12 & -1) + 8 >> 2] | 0)) {
     break L49;
    }
    if ((HEAP32[i5 + (i4 * 12 & -1) >> 2] | 0) == (HEAP32[i10 + (i4 * 12 & -1) >> 2] | 0)) {
     i4 = i4 + 1 | 0;
    } else {
     break L49;
    }
   }
   return;
  }
 } while (0);
 __ZN7WebCore12EventHandler20scheduleCursorUpdateEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 472 >> 2] | 0);
 return;
}
function __ZN7WebCore13RenderElement33propagateStyleToAnonymousChildrenENS0_20StylePropagationTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 28 | 0;
 while (1) {
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 29;
   break;
  }
  if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 256) {
   i6 = i7 + 16 | 0;
  } else {
   break;
  }
 }
 if ((i8 | 0) == 29) {
  STACKTOP = i3;
  return;
 }
 i6 = (i2 | 0) == 1;
 i2 = i1 + 36 | 0;
 i1 = i5 | 0;
 i9 = i4 | 0;
 i10 = i7;
 L7 : while (1) {
  i7 = i10;
  i11 = i10 + 20 | 0;
  do {
   if ((HEAP32[i11 >> 2] & 128 | 0) == 0) {
    i12 = i10;
   } else {
    i13 = i10 + 36 | 0;
    if ((HEAP32[(HEAP32[i13 >> 2] | 0) + 52 >> 2] & 4032 | 0) != 0) {
     i12 = i10;
     break;
    }
    if (i6) {
     if ((HEAP32[i10 + 24 >> 2] & 16 | 0) == 0) {
      i12 = i10;
      break;
     }
    }
    i14 = i10;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 236 >> 2] & 255](i10) | 0) {
     i12 = i10;
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 240 >> 2] & 255](i10) | 0) {
     i12 = i10;
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 248 >> 2] & 255](i10) | 0) {
     i12 = i10;
     break;
    }
    __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i4, HEAP32[i2 >> 2] | 0, HEAP32[(HEAP32[i13 >> 2] | 0) + 48 >> 2] & 31);
    i14 = HEAP32[i2 >> 2] | 0;
    i15 = (HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
    do {
     if ((HEAP8[i15] & 3) == 3) {
      i16 = (HEAP32[i15 >> 2] | 0) >>> 11 & 3;
      if ((i16 | 0) == 2) {
       break;
      }
      i17 = (HEAP32[i14 + 44 >> 2] | 0) >>> 13 & 3;
      if (((i17 | 0) == 0 | (i17 | 0) == 3) ^ (i16 | 0) == 0) {
       i8 = 15;
      }
     } else {
      i8 = 15;
     }
    } while (0);
    do {
     if ((i8 | 0) == 15) {
      i8 = 0;
      i15 = HEAP32[i13 >> 2] | 0;
      i16 = (HEAP32[(HEAP32[i15 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
      do {
       if ((HEAP8[i16] & 3) == 3) {
        i17 = HEAP32[i16 >> 2] | 0;
        i18 = i17 >>> 11 & 3;
        if ((i18 | 0) == 2) {
         i19 = i17;
         break;
        }
        i20 = (HEAP32[i15 + 44 >> 2] | 0) >>> 13 & 3;
        if (((i20 | 0) == 0 | (i20 | 0) == 3) ^ (i18 | 0) == 0) {
         i8 = 18;
        } else {
         i19 = i17;
        }
       } else {
        i8 = 18;
       }
      } while (0);
      if ((i8 | 0) == 18) {
       i8 = 0;
       __ZN7WebCore11RenderStyle27inheritColumnPropertiesFromEPS0_(HEAP32[i9 >> 2] | 0, i14);
       i19 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] | 0;
      }
      if ((i19 & 16 | 0) == 0) {
       break;
      }
      __ZN7WebCore11RenderStyle13setColumnSpanENS_10ColumnSpanE(HEAP32[i9 >> 2] | 0, 1);
     }
    } while (0);
    i14 = HEAP32[i11 >> 2] & 25165824;
    do {
     if ((i14 | 0) == 25165824 | (i14 | 0) == 8388608) {
      if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i10) | 0)) {
       break;
      }
      if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i10) | 0) == 0) {
       break;
      }
      i15 = (HEAP32[i9 >> 2] | 0) + 48 | 0;
      HEAP32[i15 >> 2] = HEAP32[i15 >> 2] & -29360129 | HEAP32[(HEAP32[i13 >> 2] | 0) + 48 >> 2] & 29360128;
     }
    } while (0);
    HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
    __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i7, i5);
    i12 = i10;
   }
  } while (0);
  while (1) {
   i7 = HEAP32[i12 + 16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break L7;
   }
   if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 256) {
    i12 = i7;
   } else {
    i10 = i7;
    continue L7;
   }
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = i2 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 & 64 | 0) != 0 | (i5 & 25165824 | 0) == 16777216) {
  __ZN7WebCore9RenderBox45removeFloatingOrPositionedChildFromBlockListsEv(i2);
 }
 i5 = i1 + 4 | 0;
 i6 = (i3 | 0) == 0;
 L4 : do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0 & i6) {
   i3 = HEAP32[i4 >> 2] | 0;
   if ((i3 & 1048576 | 0) == 0) {
    break;
   }
   do {
    if ((i3 & 1 | 0) == 0) {
     HEAP32[i4 >> 2] = i3 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2, 1, 0);
     if ((HEAP32[i4 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i2);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i2, 1, 1);
   do {
    if ((HEAP32[i4 >> 2] & 128 | 0) == 0) {
     i3 = HEAP32[i2 + 4 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     if ((HEAP32[i3 + 12 >> 2] & 4 | 0) == 0) {
      break;
     }
     i7 = HEAP32[i3 + 44 >> 2] | 0;
     i3 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
     if ((i7 | 0) != (i3 | 0)) {
      if ((HEAP32[i7 + 12 >> 2] | 0) != (HEAP32[i3 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i7 + 16 >> 2] | 0) != (HEAP32[i3 + 16 >> 2] | 0)) {
       break;
      }
     }
     __ZN7WebCore10RenderView19repaintRootContentsEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
     break L4;
    }
   } while (0);
   __ZNK7WebCore12RenderObject7repaintEb(i2, 0);
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 & 512 | 0) == 0) {
   if ((i3 & 4096 | 0) == 0) {
    break;
   }
   __ZN7WebCore15RenderLineBreak22deleteInlineBoxWrapperEv(i2);
  } else {
   __ZN7WebCore9RenderBox20deleteLineBoxWrapperEv(i2);
  }
 } while (0);
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   if (!(__ZNK7WebCore12RenderObject17isSelectionBorderEv(i2) | 0)) {
    break;
   }
   __ZN7WebCore10RenderView14clearSelectionEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
  }
 } while (0);
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0 & i6) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 616 >> 2] & 31](i2);
 }
 i6 = i2 + 12 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 i4 = i2 + 16 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 16 >> 2] = HEAP32[i4 >> 2];
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 12 >> 2] = HEAP32[i6 >> 2];
 }
 i3 = i1 + 28 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 }
 i3 = i1 + 32 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE(i2, 0);
 i4 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i4 + 2285 | 0] & 1) != 0) {
  i8 = i4;
  i9 = __ZNK7WebCore8Document21existingAXObjectCacheEv(i8) | 0;
  return;
 }
 __ZN7WebCore13RenderCounter23rendererRemovedFromTreeERNS_12RenderObjectE(i2);
 i8 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i9 = __ZNK7WebCore8Document21existingAXObjectCacheEv(i8) | 0;
 return;
}
function __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = i2;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 192 >> 2] & 255](i2) | 0) {
   i5 = i1 | 0;
   i6 = i1;
   if ((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] & 31 | 0) == 13) {
    i7 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 192 >> 2] & 255](i5) | 0) ^ 1;
   } else {
    i7 = 1;
   }
   if (i7 & ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 184 >> 2] & 255](i5) | 0) ^ 1)) {
    i8 = 13;
   } else {
    i8 = 21;
   }
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 196 >> 2] & 255](i2) | 0) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 255](i1 | 0) | 0) {
     i8 = 21;
     break;
    } else {
     i8 = 13;
     break;
    }
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 204 >> 2] & 255](i2) | 0) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 255](i1 | 0) | 0) {
     i8 = 21;
     break;
    } else {
     i8 = 13;
     break;
    }
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 200 >> 2] & 255](i2) | 0) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 204 >> 2] & 255](i1 | 0) | 0) {
     i8 = 21;
     break;
    } else {
     i8 = 13;
     break;
    }
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 188 >> 2] & 255](i2) | 0)) {
    i8 = 21;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 200 >> 2] & 255](i1 | 0) | 0) {
    i8 = 21;
   } else {
    i8 = 13;
   }
  }
 } while (0);
 if ((i8 | 0) == 21) {
  __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i1, i2, i3, 0);
 } else if ((i8 | 0) == 13) {
  i4 = HEAP32[((i3 | 0) == 0 ? i1 + 32 | 0 : i3 + 12 | 0) >> 2] | 0;
  do {
   if ((i4 | 0) == 0) {
    i8 = 19;
   } else {
    i7 = i4 + 20 | 0;
    if ((HEAP32[i7 >> 2] & 128 | 0) == 0) {
     i8 = 19;
     break;
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 184 >> 2] & 255](i4) | 0)) {
     i8 = 19;
     break;
    }
    if ((HEAP32[i7 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 52 >> 2] & 4032 | 0) == 192) {
      i8 = 19;
      break;
     }
    }
    i9 = i4;
   }
  } while (0);
  if ((i8 | 0) == 19) {
   i4 = __ZN7WebCore11RenderTable33createAnonymousWithParentRendererEPKNS_12RenderObjectE(i1 | 0) | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 31](i1, i4 | 0, i3);
   i9 = i4;
  }
  __ZN7WebCore11RenderTable8addChildEPNS_12RenderObjectES2_(i9, i2, 0);
 }
 i9 = i2 + 20 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 & 768 | 0) == 256) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 648 >> 2] & 31](i2, 0, 0);
  i10 = HEAP32[i9 >> 2] | 0;
 } else {
  i10 = i4;
 }
 if ((i10 & 32768 | 0) == 0) {
  __ZN7WebCore16SVGRenderSupport10childAddedERNS_13RenderElementERNS_12RenderObjectE(i1, i2);
  return;
 } else {
  i11 = i1;
 }
 while (1) {
  i11 = HEAP32[i11 + 8 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i8 = 30;
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 344 >> 2] & 255](i11 | 0) | 0) {
   break;
  }
 }
 if ((i8 | 0) == 30) {
  __ZN7WebCore16SVGRenderSupport10childAddedERNS_13RenderElementERNS_12RenderObjectE(i1, i2);
  return;
 }
 __ZN7WebCore11RenderLayer19removeOnlyThisLayerEv(HEAP32[i2 + 40 >> 2] | 0);
 __ZN7WebCore16SVGRenderSupport10childAddedERNS_13RenderElementERNS_12RenderObjectE(i1, i2);
 return;
}
function __ZN7WebCore13RenderElement15initializeStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = i1;
 i3 = i1 + 36 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 656 >> 2] & 31](i1, 0, HEAP32[i3 >> 2] | 0);
 i4 = i1 + 24 | 0;
 HEAP8[i4] = HEAP8[i4] | -128;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = (HEAP32[i4 + 12 >> 2] | 0) + 4 | 0;
 if ((i5 | 0) == 0) {
  i6 = i4;
 } else {
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 31](i5, i1);
   }
   i4 = HEAP32[i4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
  }
  i6 = HEAP32[i3 >> 2] | 0;
 }
 i4 = (HEAP32[i6 + 20 >> 2] | 0) + 116 | 0;
 if ((i4 | 0) == 0) {
  i7 = i6;
 } else {
  i6 = i4;
  while (1) {
   i4 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i4 | 0) != 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 48 >> 2] & 31](i4, i1);
   }
   i6 = HEAP32[i6 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
  }
  i7 = HEAP32[i3 >> 2] | 0;
 }
 i6 = HEAP32[(HEAP32[(HEAP32[i7 + 16 >> 2] | 0) + 132 >> 2] | 0) + 8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i8 = i7;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 48 >> 2] & 31](i6, i1);
  i8 = HEAP32[i3 >> 2] | 0;
 }
 i6 = HEAP32[i8 + 20 >> 2] | 0;
 i7 = HEAP32[(HEAP32[i6 + 164 >> 2] | 0) + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i9 = i8;
  i10 = i6;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] & 31](i7, i1);
  i7 = HEAP32[i3 >> 2] | 0;
  i9 = i7;
  i10 = HEAP32[i7 + 20 >> 2] | 0;
 }
 i7 = HEAP32[i10 + 184 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i11 = i9;
   i12 = i10;
  } else {
   i6 = HEAP32[i7 + 12 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i11 = i9;
    i12 = i10;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 48 >> 2] & 31](i6, i1);
   i6 = HEAP32[i3 >> 2] | 0;
   i11 = i6;
   i12 = HEAP32[i6 + 20 >> 2] | 0;
  }
 } while (0);
 i10 = HEAP32[i12 + 188 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i13 = i11;
  } else {
   i12 = HEAP32[i10 + 12 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i13 = i11;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 48 >> 2] & 31](i12, i1);
   i13 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i11 = HEAP32[i13 + 12 >> 2] | 0;
 i13 = HEAP32[i11 + 64 >> 2] | 0;
 if ((i13 & 2013265920 | 0) == 0 | (i13 & 131070 | 0) == 0) {
  i14 = HEAP32[i2 >> 2] | 0;
  i15 = i14 + 660 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  FUNCTION_TABLE_viii[i16 & 31](i1, 0, 0);
  return;
 }
 i10 = i13 >>> 1;
 i13 = HEAP32[i11 + 68 >> 2] | 0;
 if ((((i13 + (i10 & 65535) | 0) > 0 ? i10 + i13 & 65535 : 0) | 0) <= (__ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(i1 | 0, 5) | 0)) {
  i14 = HEAP32[i2 >> 2] | 0;
  i15 = i14 + 660 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  FUNCTION_TABLE_viii[i16 & 31](i1, 0, 0);
  return;
 }
 i13 = HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] | 0;
 i3 = HEAP32[i13 + 64 >> 2] | 0;
 if ((i3 & 2013265920 | 0) == 0) {
  i17 = 0;
  i18 = 0;
 } else {
  i17 = HEAP32[i13 + 68 >> 2] | 0;
  i18 = i3 >>> 1 & 65535;
 }
 i3 = i17 + i18 | 0;
 __ZN7WebCore10RenderView21setMaximalOutlineSizeEi(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, (i3 | 0) > 0 ? i3 & 65535 : 0);
 i14 = HEAP32[i2 >> 2] | 0;
 i15 = i14 + 660 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 FUNCTION_TABLE_viii[i16 & 31](i1, 0, 0);
 return;
}
function __ZN7WebCoreL21mustRepaintFillLayersERKNS_13RenderElementEPKNS_9FillLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i4;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 if (!(FUNCTION_TABLE_iiif[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 1](i8, i1 | 0, +HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]) | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i1 = i2 + 8 | 0;
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 do {
  if ((HEAP8[i2 + 14 | 0] & 1) == 0) {
   if ((HEAP32[i1 >> 2] | 0) == 0) {
    break;
   } else {
    i7 = 1;
   }
   STACKTOP = i3;
   return i7 | 0;
  } else {
   if (+HEAPF32[i1 >> 2] != +0) {
    i7 = 1;
   } else {
    break;
   }
   STACKTOP = i3;
   return i7 | 0;
  }
 } while (0);
 i1 = i2 + 16 | 0;
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 do {
  if ((HEAP8[i2 + 22 | 0] & 1) == 0) {
   if ((HEAP32[i1 >> 2] | 0) == 0) {
    break;
   } else {
    i7 = 1;
   }
   STACKTOP = i3;
   return i7 | 0;
  } else {
   if (+HEAPF32[i1 >> 2] != +0) {
    i7 = 1;
   } else {
    break;
   }
   STACKTOP = i3;
   return i7 | 0;
  }
 } while (0);
 i1 = (HEAP32[i2 + 40 >> 2] | 0) >>> 16 & 3;
 if (i1 >>> 0 < 2 >>> 0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 L31 : do {
  if ((i1 | 0) == 2) {
   i9 = i2 + 24 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = i10;
   HEAP32[i5 + 4 >> 2] = i11;
   if ((i10 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
   }
   i11 = i4 + 8 | 0;
   i10 = i11;
   i9 = i2 + 32 | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   i13 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = i12;
   HEAP32[i11 + 4 >> 2] = i13;
   if ((i12 & 0 | 0) == 0 & (i13 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
   }
   i13 = i4;
   i12 = HEAP8[i13 + 5 | 0] | 0;
   do {
    if (!((i12 << 24 >> 24 | 0) == 10 | (i12 << 24 >> 24 | 0) == 2)) {
     i11 = HEAP8[i10 + 5 | 0] | 0;
     if ((i11 << 24 >> 24 | 0) == 10 | (i11 << 24 >> 24 | 0) == 2) {
      break;
     }
     if (i12 << 24 >> 24 == 0 | i11 << 24 >> 24 == 0) {
      if ((HEAP8[i8 + 8 | 0] & 4) != 0) {
       break;
      }
     }
     if (i11 << 24 >> 24 == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
      i14 = HEAP8[i6 + 5 | 0] | 0;
     } else {
      i14 = i12;
     }
     if (i14 << 24 >> 24 != 10) {
      break L31;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
     break L31;
    }
   } while (0);
   if ((HEAP8[i6 + 13 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
    i15 = HEAP8[i6 + 5 | 0] | 0;
   } else {
    i15 = i12;
   }
   if (i15 << 24 >> 24 != 10) {
    i7 = 1;
    STACKTOP = i3;
    return i7 | 0;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
   i7 = 1;
   STACKTOP = i3;
   return i7 | 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 40 >> 2] & 255](i8) | 0) {
    i7 = 1;
   } else {
    break;
   }
   STACKTOP = i3;
   return i7 | 0;
  }
 } while (0);
 i7 = 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCoreL35firstLineStyleForCachedUncachedTypeENS_15StyleCacheStateERKNS_13RenderElementEPNS_11RenderStyleE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 do {
  if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
   i8 = i3;
  } else {
   i9 = HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 52 >> 2] & 4032;
   if (!((i9 | 0) == 192 | (i9 | 0) == 256)) {
    i8 = i3;
    break;
   }
   i8 = HEAP32[i3 + 8 >> 2] | 0;
  }
 } while (0);
 i9 = i8 + 24 | 0;
 i10 = i8 | 0;
 do {
  if ((HEAP32[i9 >> 2] & 32 | 0) == 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 136 >> 2] & 255](i10) | 0) {
    i11 = 6;
    break;
   }
   if ((HEAP32[i8 + 20 >> 2] & 128 | 0) != 0) {
    break;
   }
   if ((HEAP32[i9 >> 2] & 4 | 0) == 0) {
    break;
   }
   i12 = i8 + 8 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i13 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    break;
   }
   i14 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i13) | 0;
   if ((i14 | 0) == (HEAP32[(HEAP32[i12 >> 2] | 0) + 36 >> 2] | 0)) {
    break;
   }
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = 6;
    HEAP32[i7 + 4 >> 2] = 0;
    HEAP32[i7 + 8 >> 2] = 0;
    __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i1, i10, i7, i14, i4);
    STACKTOP = i5;
    return;
   }
   i12 = (HEAP32[i8 + 36 >> 2] | 0) + 52 | 0;
   HEAP32[i12 >> 2] = HEAP32[i12 >> 2] | 131072;
   i12 = __ZNK7WebCore12RenderObject20getCachedPseudoStyleENS_8PseudoIdEPNS_11RenderStyleE(i10, 6, i14) | 0;
   HEAP32[i1 >> 2] = i12;
   if ((i12 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i14 = i12 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   STACKTOP = i5;
   return;
  } else {
   i11 = 6;
  }
 } while (0);
 do {
  if ((i11 | 0) == 6) {
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 255](i10) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i9 = i7 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = 1;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP32[i6 + 8 >> 2] = 0;
    __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i1, i9, i6, i4, (i7 | 0) == (i3 | 0) ? i4 : 0);
    STACKTOP = i5;
    return;
   }
   i7 = __ZNK7WebCore12RenderObject20getCachedPseudoStyleENS_8PseudoIdEPNS_11RenderStyleE(i9, 1, i4) | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i9 = i7 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore14SVGRenderStyleD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = i4 | 0;
  if ((i2 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i2 << 2) | 0;
   i2 = i6;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if (!((i4 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17StyleSurroundDataD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore15StyleVisualDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12StyleBoxDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZNK7WebCore13RenderElement51hasImmediateNonWhitespaceTextChildOrBorderOrOutlineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  i2 = i4 + 20 | 0;
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 & 768 | 0) == 256) {
   if (!(__ZNK7WebCore10RenderText26isAllCollapsibleWhitespaceEv(i4) | 0)) {
    i3 = 1;
    i5 = 26;
    break;
   }
   i6 = HEAP32[i2 >> 2] | 0;
  } else {
   i6 = i1;
  }
  i1 = (i6 & 768 | 0) == 256;
  if (i1) {
   i7 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i7 = HEAP32[i4 + 36 >> 2] | 0;
  }
  i2 = HEAP32[(HEAP32[i7 + 12 >> 2] | 0) + 64 >> 2] | 0;
  if ((i2 & 131070 | 0) != 0 & (i2 & 2013265920 | 0) != 0 & (i2 & 1879048192) >>> 0 > 134217728 >>> 0) {
   i3 = 1;
   i5 = 33;
   break;
  }
  if (i1) {
   i8 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i8 = HEAP32[i4 + 36 >> 2] | 0;
  }
  i1 = HEAP32[i8 + 16 >> 2] | 0;
  i2 = (HEAP32[(HEAP32[i1 + 132 >> 2] | 0) + 8 >> 2] | 0) != 0;
  i9 = HEAP32[i1 + 104 >> 2] | 0;
  i10 = (i9 & 134217726 | 0) == 0;
  if (i10 | i2) {
   if (!i10) {
    i3 = 1;
    i5 = 27;
    break;
   }
  } else {
   if ((i9 & 2013265920 | 0) != 0) {
    i3 = 1;
    i5 = 34;
    break;
   }
  }
  i9 = HEAP32[i1 + 112 >> 2] | 0;
  i10 = (i9 & 134217726 | 0) == 0;
  if (i10 | i2) {
   if (!i10) {
    i3 = 1;
    i5 = 29;
    break;
   }
  } else {
   if ((i9 & 2013265920 | 0) != 0) {
    i3 = 1;
    i5 = 28;
    break;
   }
  }
  i9 = HEAP32[i1 + 120 >> 2] | 0;
  i10 = (i9 & 134217726 | 0) == 0;
  if (i10 | i2) {
   if (!i10) {
    i3 = 1;
    i5 = 31;
    break;
   }
  } else {
   if ((i9 & 2013265920 | 0) != 0) {
    i3 = 1;
    i5 = 30;
    break;
   }
  }
  i9 = HEAP32[i1 + 128 >> 2] | 0;
  i1 = (i9 & 134217726 | 0) == 0;
  if (i1 | i2) {
   if (!i1) {
    i3 = 1;
    i5 = 37;
    break;
   }
  } else {
   if ((i9 & 2013265920 | 0) != 0) {
    i3 = 1;
    i5 = 32;
    break;
   }
  }
  i9 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i3 = 0;
   i5 = 36;
   break;
  } else {
   i4 = i9;
  }
 }
 if ((i5 | 0) == 31) {
  return i3 | 0;
 } else if ((i5 | 0) == 32) {
  return i3 | 0;
 } else if ((i5 | 0) == 33) {
  return i3 | 0;
 } else if ((i5 | 0) == 34) {
  return i3 | 0;
 } else if ((i5 | 0) == 26) {
  return i3 | 0;
 } else if ((i5 | 0) == 27) {
  return i3 | 0;
 } else if ((i5 | 0) == 36) {
  return i3 | 0;
 } else if ((i5 | 0) == 37) {
  return i3 | 0;
 } else if ((i5 | 0) == 28) {
  return i3 | 0;
 } else if ((i5 | 0) == 29) {
  return i3 | 0;
 } else if ((i5 | 0) == 30) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore13RenderElementD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 36 | 0;
 do {
  if ((HEAP8[i1 + 24 | 0] | 0) < 0) {
   i3 = HEAP32[i2 >> 2] | 0;
   i4 = (HEAP32[i3 + 12 >> 2] | 0) + 4 | 0;
   if ((i4 | 0) == 0) {
    i5 = i3;
   } else {
    i3 = i4;
    while (1) {
     i4 = HEAP32[i3 + 4 >> 2] | 0;
     if ((i4 | 0) != 0) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 52 >> 2] & 31](i4, i1);
     }
     i3 = HEAP32[i3 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
    }
    i5 = HEAP32[i2 >> 2] | 0;
   }
   i3 = (HEAP32[i5 + 20 >> 2] | 0) + 116 | 0;
   if ((i3 | 0) == 0) {
    i6 = i5;
   } else {
    i4 = i3;
    while (1) {
     i3 = HEAP32[i4 + 4 >> 2] | 0;
     if ((i3 | 0) != 0) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] & 31](i3, i1);
     }
     i4 = HEAP32[i4 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
    }
    i6 = HEAP32[i2 >> 2] | 0;
   }
   i4 = HEAP32[(HEAP32[(HEAP32[i6 + 16 >> 2] | 0) + 132 >> 2] | 0) + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i7 = i6;
   } else {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 52 >> 2] & 31](i4, i1);
    i7 = HEAP32[i2 >> 2] | 0;
   }
   i4 = HEAP32[i7 + 20 >> 2] | 0;
   i3 = HEAP32[(HEAP32[i4 + 164 >> 2] | 0) + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i8 = i4;
   } else {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] & 31](i3, i1);
    i8 = HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0;
   }
   i3 = HEAP32[i8 + 184 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i9 = i8;
    } else {
     i4 = HEAP32[i3 + 12 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i9 = i8;
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 52 >> 2] & 31](i4, i1);
     i9 = HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0;
    }
   } while (0);
   i3 = HEAP32[i9 + 188 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i3 + 12 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 52 >> 2] & 31](i4, i1);
  }
 } while (0);
 i9 = HEAP32[i2 >> 2] | 0;
 i2 = i9 | 0;
 i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  i10 = i1 | 0;
  __ZN7WebCore12RenderObjectD2Ev(i10);
  return;
 } else {
  HEAP32[i2 >> 2] = i8;
  i10 = i1 | 0;
  __ZN7WebCore12RenderObjectD2Ev(i10);
  return;
 }
}
function __ZN7WebCore13RenderElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 36 | 0;
 do {
  if ((HEAP8[i1 + 24 | 0] | 0) < 0) {
   i3 = HEAP32[i2 >> 2] | 0;
   i4 = (HEAP32[i3 + 12 >> 2] | 0) + 4 | 0;
   if ((i4 | 0) == 0) {
    i5 = i3;
   } else {
    i3 = i4;
    while (1) {
     i4 = HEAP32[i3 + 4 >> 2] | 0;
     if ((i4 | 0) != 0) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 52 >> 2] & 31](i4, i1);
     }
     i3 = HEAP32[i3 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
    }
    i5 = HEAP32[i2 >> 2] | 0;
   }
   i3 = (HEAP32[i5 + 20 >> 2] | 0) + 116 | 0;
   if ((i3 | 0) == 0) {
    i6 = i5;
   } else {
    i4 = i3;
    while (1) {
     i3 = HEAP32[i4 + 4 >> 2] | 0;
     if ((i3 | 0) != 0) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] & 31](i3, i1);
     }
     i4 = HEAP32[i4 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
    }
    i6 = HEAP32[i2 >> 2] | 0;
   }
   i4 = HEAP32[(HEAP32[(HEAP32[i6 + 16 >> 2] | 0) + 132 >> 2] | 0) + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i7 = i6;
   } else {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 52 >> 2] & 31](i4, i1);
    i7 = HEAP32[i2 >> 2] | 0;
   }
   i4 = HEAP32[i7 + 20 >> 2] | 0;
   i3 = HEAP32[(HEAP32[i4 + 164 >> 2] | 0) + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i8 = i4;
   } else {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] & 31](i3, i1);
    i8 = HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0;
   }
   i3 = HEAP32[i8 + 184 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i9 = i8;
    } else {
     i4 = HEAP32[i3 + 12 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i9 = i8;
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 52 >> 2] & 31](i4, i1);
     i9 = HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0;
    }
   } while (0);
   i3 = HEAP32[i9 + 188 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i3 + 12 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 52 >> 2] & 31](i4, i1);
  }
 } while (0);
 i9 = HEAP32[i2 >> 2] | 0;
 i2 = i9 | 0;
 i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  i10 = i1 | 0;
  __ZN7WebCore12RenderObjectD2Ev(i10);
  return;
 } else {
  HEAP32[i2 >> 2] = i8;
  i10 = i1 | 0;
  __ZN7WebCore12RenderObjectD2Ev(i10);
  return;
 }
}
function __ZN7WebCore13RenderElement23destroyLeftoverChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 28 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i3 = i1;
 }
 while (1) {
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 108 >> 2] & 255](i3) | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  L5 : do {
   if (i1) {
    i5 = 8;
   } else {
    i6 = HEAP32[i4 + 20 >> 2] | 0;
    i7 = (i6 & 768 | 0) == 256;
    if (i7) {
     i8 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i8 = HEAP32[i4 + 36 >> 2] | 0;
    }
    do {
     if ((HEAP32[i8 + 52 >> 2] & 4032 | 0) == 128) {
      if (i7) {
       i5 = 10;
      } else {
       i5 = 8;
       break L5;
      }
     } else {
      if (i7) {
       i5 = 10;
       break;
      }
      i9 = HEAP32[i4 + 36 >> 2] | 0;
     }
    } while (0);
    if ((i5 | 0) == 10) {
     i5 = 0;
     i9 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
    }
    i7 = (i6 & 128 | 0) == 0;
    do {
     if ((HEAP32[i9 + 48 >> 2] & 31 | 0) == 3) {
      if (!i7) {
       break;
      }
      i10 = HEAP32[i4 + 4 >> 2] | 0;
      if ((i10 | 0) == 0) {
       i5 = 23;
       break;
      }
      if ((HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0) {
       HEAP32[i10 + 32 >> 2] = 0;
      } else {
       HEAP32[HEAP32[i10 + 32 >> 2] >> 2] = 0;
      }
      i10 = HEAP32[i2 >> 2] | 0;
      if ((HEAP32[i10 + 20 >> 2] & 128 | 0) == 0) {
       i11 = HEAP32[i10 + 4 >> 2] | 0;
      } else {
       i11 = 0;
      }
      __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i11, 32768);
      __ZN7WebCore12RenderObject7destroyEv(HEAP32[i2 >> 2] | 0);
      break L5;
     } else {
      if (i7) {
       i5 = 23;
      }
     }
    } while (0);
    do {
     if ((i5 | 0) == 23) {
      i5 = 0;
      i7 = HEAP32[i4 + 4 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
       HEAP32[i7 + 32 >> 2] = 0;
       break;
      } else {
       HEAP32[HEAP32[i7 + 32 >> 2] >> 2] = 0;
       break;
      }
     }
    } while (0);
    __ZN7WebCore12RenderObject7destroyEv(HEAP32[i2 >> 2] | 0);
   }
  } while (0);
  if ((i5 | 0) == 8) {
   i5 = 0;
   __ZN7WebCore12RenderObject16removeFromParentEv(i4);
  }
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = i3;
 while (1) {
  if ((i5 | 0) == 0) {
   i6 = 0;
   i7 = 0;
   break;
  }
  i8 = HEAP32[i5 + 8 >> 2] | 0;
  if ((i8 | 0) != 0 & (i8 | 0) != (i1 | 0)) {
   i5 = i8 | 0;
  } else {
   i9 = 4;
   break;
  }
 }
 do {
  if ((i9 | 0) == 4) {
   if ((i8 | 0) == (i1 | 0)) {
    i6 = i5;
    i7 = 1;
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE(i2, i1);
 i5 = i1 + 28 | 0;
 if ((HEAP32[i5 >> 2] | 0) == (i6 | 0)) {
  HEAP32[i5 >> 2] = i2;
 }
 if (i7) {
  i7 = i6 + 12 | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i5 + 16 >> 2] = i2;
  }
  HEAP32[i2 + 12 >> 2] = i5;
  HEAP32[i2 + 16 >> 2] = i6;
  HEAP32[i7 >> 2] = i2;
 } else {
  i7 = i1 + 32 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i10 = 0;
  } else {
   HEAP32[i6 + 16 >> 2] = i2;
   i10 = HEAP32[i7 >> 2] | 0;
  }
  HEAP32[i2 + 12 >> 2] = i10;
  HEAP32[i7 >> 2] = i2;
 }
 i7 = i1 | 0;
 i10 = i1 + 4 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
  if ((i4 | 0) == 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 612 >> 2] & 31](i2);
  }
  __ZN7WebCore13RenderCounter23rendererSubtreeAttachedEPNS_12RenderObjectE(i2);
 }
 i4 = i2 + 20 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 & 1 | 0) == 0) {
   HEAP32[i4 >> 2] = i6 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2, 1, 0);
   if ((HEAP32[i4 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i2);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i2, 1, 1);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i7, 1, 1);
 i2 = i1 + 20 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 & 4 | 0) == 0) {
  HEAP32[i2 >> 2] = i1 | 4;
  __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i7, 1, 0);
 }
 __ZNK7WebCore8Document13axObjectCacheEv(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 return;
}
function __ZN7WebCore13RenderElement21willBeRemovedFromTreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 0) {
   i5 = 0;
  } else {
   if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
    i5 = 0;
    break;
   }
   if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) != 0) {
    i5 = 0;
    break;
   }
   i6 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i4 | 0) | 0;
   if ((i6 | 0) == 0) {
    i5 = 0;
    break;
   }
   __ZN7WebCore11RenderLayer25dirtyVisibleContentStatusEv(i6);
   i5 = i6;
  }
 } while (0);
 if ((HEAP32[i1 + 28 >> 2] | 0) == 0) {
  if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) != 0) {
   i7 = 8;
  }
 } else {
  i7 = 8;
 }
 if ((i7 | 0) == 8) {
  if ((i5 | 0) == 0) {
   i8 = __ZNK7WebCore12RenderObject14enclosingLayerEv(HEAP32[i3 >> 2] | 0) | 0;
  } else {
   i8 = i5;
  }
  __ZN7WebCore13RenderElement12removeLayersEPNS_11RenderLayerE(i1, i8);
 }
 i8 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 12 >> 2] | 0) + 4 | 0;
 while (1) {
  if ((HEAP32[i8 + 4 >> 2] | 0) != 0) {
   if ((HEAP32[i8 + 40 >> 2] & 3 | 0) == 2) {
    i7 = 15;
    break;
   }
  }
  i8 = HEAP32[i8 >> 2] | 0;
  if ((i8 | 0) == 0) {
   break;
  }
 }
 if ((i7 | 0) == 15) {
  __ZN7WebCore9FrameView23removeSlowRepaintObjectEPNS_13RenderElementE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i1);
 }
 if ((HEAP32[i1 + 20 >> 2] & 25165824 | 0) != 16777216) {
  __ZN7WebCore12RenderObject21willBeRemovedFromTreeEv(i2);
  return;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 2097152 | 0) == 0) {
  __ZN7WebCore12RenderObject21willBeRemovedFromTreeEv(i2);
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 644 >> 2] & 31](i1, i2);
 __ZN7WebCore12RenderObject21willBeRemovedFromTreeEv(i2);
 return;
}
function __ZNK7WebCore13RenderElement21adjustStyleDifferenceENS_15StyleDifferenceEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 do {
  if ((i3 & 1 | 0) == 0) {
   i4 = i2;
  } else {
   if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) == 0) {
    i4 = 8;
    break;
   }
   if ((HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0) != 0) {
    i4 = (i2 | 0) < 1 ? 1 : i2;
    break;
   }
   if ((i2 | 0) < 5) {
    i4 = 6;
    break;
   }
   i4 = (i2 | 0) < 6 ? 7 : i2;
  }
 } while (0);
 do {
  if ((i3 & 2 | 0) == 0) {
   i5 = i4;
  } else {
   if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) == 0) {
    i5 = 4;
    break;
   }
   if ((HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0) == 0) {
    i5 = 4;
    break;
   }
   i5 = (i4 | 0) < 1 ? 1 : i4;
  }
 } while (0);
 do {
  if ((i3 & 4 | 0) == 0) {
   i6 = i5;
  } else {
   i4 = i1 + 20 | 0;
   if ((HEAP32[i4 >> 2] & 32768 | 0) == 0) {
    i6 = i5;
    break;
   }
   i2 = HEAP32[i1 + 40 >> 2] | 0;
   if ((HEAP32[i2 + 208 >> 2] | 0) == 0) {
    i7 = i4;
    i8 = HEAP32[i7 >> 2] | 0;
    i9 = i8 >>> 14;
    i10 = i9 & 2;
    i11 = i10 + 2 | 0;
    return i11 | 0;
   }
   if (__ZNK7WebCore11RenderLayer17paintsWithFiltersEv(i2) | 0) {
    i7 = i4;
    i8 = HEAP32[i7 >> 2] | 0;
    i9 = i8 >>> 14;
    i10 = i9 & 2;
    i11 = i10 + 2 | 0;
    return i11 | 0;
   } else {
    i6 = (i5 | 0) < 1 ? 1 : i5;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == 0) {
  if ((HEAP32[i1 + 24 >> 2] & 1 | 0) == 0) {
   i12 = 0;
   return i12 | 0;
  }
  i5 = (HEAP32[i1 + 20 >> 2] & 32768 | 0) != 0;
  i3 = i5 ^ (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 668 >> 2] & 255](i1) | 0);
  i12 = i3 ? 8 : 0;
  return i12 | 0;
 } else if ((i6 | 0) == 4) {
  i7 = i1 + 20 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i8 >>> 14;
  i10 = i9 & 2;
  i11 = i10 + 2 | 0;
  return i11 | 0;
 } else {
  i12 = i6;
  return i12 | 0;
 }
 return 0;
}
function __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 76 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 100 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 44 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 12 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13RenderElement13findNextLayerEPNS_11RenderLayerEPNS_12RenderObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = i4 ^ 1;
 i4 = i3;
 i3 = i1;
 L4 : while (1) {
  i1 = i3 | 0;
  do {
   if ((HEAP32[i3 + 20 >> 2] & 32768 | 0) == 0) {
    i7 = 0;
    i8 = 7;
   } else {
    i9 = HEAP32[i3 + 40 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i7 = 0;
     i8 = 7;
     break;
    }
    if ((HEAP32[i9 + 36 >> 2] | 0) == (i2 | 0)) {
     i5 = i9;
     i8 = 14;
     break L4;
    }
    if ((i9 | 0) == (i2 | 0)) {
     i7 = i2;
     i8 = 7;
    } else {
     i10 = i9;
    }
   }
  } while (0);
  do {
   if ((i8 | 0) == 7) {
    i8 = 0;
    i9 = HEAP32[((i4 | 0) == 0 ? i3 + 28 | 0 : i4 + 16 | 0) >> 2] | 0;
    if ((i9 | 0) == 0) {
     i10 = i7;
     break;
    } else {
     i11 = i9;
    }
    while (1) {
     if ((HEAP32[i11 + 20 >> 2] & 768 | 0) != 256) {
      i9 = __ZN7WebCore13RenderElement13findNextLayerEPNS_11RenderLayerEPNS_12RenderObjectEb(i11, i2, 0, 0) | 0;
      if ((i9 | 0) != 0) {
       i5 = i9;
       i8 = 15;
       break L4;
      }
     }
     i9 = HEAP32[i11 + 16 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i10 = i7;
      break;
     } else {
      i11 = i9;
     }
    }
   }
  } while (0);
  if ((i10 | 0) == (i2 | 0) | i6) {
   i5 = 0;
   i8 = 16;
   break;
  }
  i9 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i5 = 0;
   i8 = 17;
   break;
  } else {
   i6 = 0;
   i4 = i1;
   i3 = i9;
  }
 }
 if ((i8 | 0) == 15) {
  return i5 | 0;
 } else if ((i8 | 0) == 16) {
  return i5 | 0;
 } else if ((i8 | 0) == 14) {
  return i5 | 0;
 } else if ((i8 | 0) == 17) {
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderStyle13setColumnSpanENS_10ColumnSpanE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if (((HEAP32[(HEAP32[i8 + 68 >> 2] | 0) + 32 >> 2] | 0) >>> 4 & 1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 68 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore17StyleMultiColData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 i11 = i12 + 32 | 0;
 HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & -17 | i2 << 4 & 16;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13RenderElement25rendererForRootBackgroundEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i3, i4, 23);
 if ((HEAP8[i3 + 4 | 0] & 1) == 0) {
  i5 = 3;
 } else {
  if ((HEAP32[i3 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
   i5 = 3;
  }
 }
 L3 : do {
  if ((i5 | 0) == 3) {
   i3 = (HEAP32[i4 + 12 >> 2] | 0) + 4 | 0;
   while (1) {
    if ((HEAP32[i3 + 4 >> 2] | 0) != 0) {
     break L3;
    }
    i3 = HEAP32[i3 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break;
    }
   }
   if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
    break;
   }
   i3 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i3 + 44 >> 2] | 0;
   i7 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
   if ((i6 | 0) != (i7 | 0)) {
    if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i7 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i6 + 16 >> 2] | 0) != (HEAP32[i7 + 16 >> 2] | 0)) {
     break;
    }
   }
   i7 = __ZNK7WebCore8Document4bodyEv(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i7 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   i3 = i7 + 32 | 0;
   if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
    i8 = i3 | 0;
   } else {
    i8 = HEAP32[i3 >> 2] | 0;
   }
   i3 = HEAP32[i8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   } else {
    i9 = i3;
   }
   STACKTOP = i2;
   return i9 | 0;
  }
 } while (0);
 i9 = i1;
 STACKTOP = i2;
 return i9 | 0;
}
function __ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 128 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = (i3 & 768 | 0) == 256;
 if (i5) {
  i6 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i6 = HEAP32[i1 + 36 >> 2] | 0;
 }
 do {
  if ((HEAP32[i6 + 48 >> 2] & 31 | 0) != 1) {
   if (i5) {
    i7 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i7 = HEAP32[i1 + 36 >> 2] | 0;
   }
   if ((HEAP32[i7 + 48 >> 2] & 31 | 0) == 16) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (i5) {
  i8 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((HEAP32[i8 + 52 >> 2] & 4032 | 0) != 0 | i5) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 24 >> 2] & 16 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 248 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 >> 2] & 768 | 0) == 768) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 236 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 240 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 272 >> 2] & 255](i1) | 0) ^ 1;
 return i4 | 0;
}
function __ZN7WebCore13RenderElement16insertedIntoTreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 __ZN7WebCore12RenderObject16insertedIntoTreeEv(i1 | 0);
 do {
  if ((HEAP32[i1 + 28 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) != 0) {
    i5 = 4;
    break;
   }
   i6 = 0;
   i7 = i1 + 8 | 0;
  } else {
   i5 = 4;
  }
 } while (0);
 do {
  if ((i5 | 0) == 4) {
   i8 = i1 + 8 | 0;
   i9 = __ZNK7WebCore12RenderObject14enclosingLayerEv(HEAP32[i8 >> 2] | 0) | 0;
   if ((i9 | 0) == 0) {
    i6 = 0;
    i7 = i8;
    break;
   }
   HEAP32[i3 >> 2] = i1;
   HEAP32[i4 >> 2] = 0;
   __ZN7WebCoreL9addLayersERNS_13RenderElementEPNS_11RenderLayerERPS0_RS3_(i1, i9, i3, i4);
   i6 = i9;
   i7 = i8;
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 do {
  if ((i6 | 0) == 0) {
   i1 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i4 | 0) | 0;
   if ((i1 | 0) != 0) {
    i10 = i1;
    break;
   }
   STACKTOP = i2;
   return;
  } else {
   i10 = i6;
  }
 } while (0);
 __ZN7WebCore11RenderLayer20setHasVisibleContentEv(i10);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17StyleSurroundDataD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10BorderDataD2Ev(i1 + 100 | 0);
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCoreL9addLayersERNS_13RenderElementEPNS_11RenderLayerERPS0_RS3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i5 | 0) == 0) {
    i6 = HEAP32[i3 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i7 = 0;
     break;
    }
    HEAP32[i4 >> 2] = __ZN7WebCore13RenderElement13findNextLayerEPNS_11RenderLayerEPNS_12RenderObjectEb(HEAP32[i6 + 8 >> 2] | 0, i2, i6 | 0, 1) | 0;
    HEAP32[i3 >> 2] = 0;
    i7 = HEAP32[i4 >> 2] | 0;
   } else {
    i7 = i5;
   }
  } while (0);
  __ZN7WebCore11RenderLayer8addChildEPS0_S1_(i2, HEAP32[i1 + 40 >> 2] | 0, i7);
  return;
 }
 i7 = i1 + 28 | 0;
 while (1) {
  i1 = HEAP32[i7 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i8 = 14;
   break;
  }
  if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
   i7 = i1 + 16 | 0;
  } else {
   i9 = i1;
   break;
  }
 }
 if ((i8 | 0) == 14) {
  return;
 }
 L14 : while (1) {
  __ZN7WebCoreL9addLayersERNS_13RenderElementEPNS_11RenderLayerERPS0_RS3_(i9, i2, i3, i4);
  i8 = i9;
  while (1) {
   i7 = HEAP32[i8 + 16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break L14;
   }
   if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 256) {
    i8 = i7;
   } else {
    i9 = i7;
    continue L14;
   }
  }
 }
 return;
}
function __ZNK7WebCore13RenderElement13hoverAncestorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i2 | 0) | 0) {
   i4 = i2 + 8 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) == 0) {
     i6 = i2;
    } else {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 252 >> 2] & 255](i5 | 0) | 0)) {
      i6 = i2;
      break;
     }
     i6 = HEAP32[i4 >> 2] | 0;
    }
   } while (0);
   if ((i6 | 0) == 0) {
    i3 = 0;
   } else {
    i7 = i6;
    break;
   }
   return i3 | 0;
  } else {
   i7 = i2;
  }
 } while (0);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 252 >> 2] & 255](i7 | 0) | 0)) {
  i3 = i7;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i7 + 16 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i7 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i8 = i7 | 0;
 } else {
  i8 = HEAP32[i7 >> 2] | 0;
 }
 i3 = HEAP32[i8 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore10BorderDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) != 10) {
  i2 = i1 + 32 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = i3 | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
 return;
}
function __ZN7WebCore13RenderElement16updateFillImagesEPKNS_9FillLayerES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = (i2 | 0) == 0;
 do {
  if (i4) {
   i5 = 5;
  } else {
   if ((HEAP32[i2 >> 2] | 0) != 0 | (i3 | 0) == 0) {
    i5 = 5;
    break;
   }
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    i6 = i3;
    i5 = 7;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
    i6 = i3;
    i5 = 7;
    break;
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == 5) {
  if ((i3 | 0) != 0) {
   i6 = i3;
   i5 = 7;
  }
 }
 if ((i5 | 0) == 7) {
  while (1) {
   i5 = 0;
   i3 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i3 | 0) != 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 48 >> 2] & 31](i3, i1);
   }
   i3 = HEAP32[i6 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   } else {
    i6 = i3;
    i5 = 7;
   }
  }
 }
 if (i4) {
  return;
 } else {
  i7 = i2;
 }
 while (1) {
  i2 = HEAP32[i7 + 4 >> 2] | 0;
  if ((i2 | 0) != 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 52 >> 2] & 31](i2, i1);
  }
  i7 = HEAP32[i7 >> 2] | 0;
  if ((i7 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore11RenderStyle27inheritColumnPropertiesFromEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 68 >> 2] | 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i6 + 68 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i5 = i6 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i6);
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i8;
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13RenderElement10moveLayersEPNS_11RenderLayerES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) != 0) {
  i4 = HEAP32[i1 + 40 >> 2] | 0;
  if ((i2 | 0) != 0) {
   __ZN7WebCore11RenderLayer11removeChildEPS0_(i2, i4) | 0;
  }
  __ZN7WebCore11RenderLayer8addChildEPS0_S1_(i3, i4, 0);
  return;
 }
 i4 = i1 + 28 | 0;
 while (1) {
  i1 = HEAP32[i4 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i5 = 16;
   break;
  }
  if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
   i4 = i1 + 16 | 0;
  } else {
   i6 = i1;
   break;
  }
 }
 if ((i5 | 0) == 16) {
  return;
 }
 L16 : while (1) {
  __ZN7WebCore13RenderElement10moveLayersEPNS_11RenderLayerES2_(i6, i2, i3);
  i5 = i6;
  while (1) {
   i4 = HEAP32[i5 + 16 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break L16;
   }
   if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
    i5 = i4;
   } else {
    i6 = i4;
    continue L16;
   }
  }
 }
 return;
}
function __ZN7WebCore13RenderElement12removeLayersEPNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) != 0) {
  __ZN7WebCore11RenderLayer11removeChildEPS0_(i2, HEAP32[i1 + 40 >> 2] | 0) | 0;
  return;
 }
 i3 = i1 + 28 | 0;
 while (1) {
  i1 = HEAP32[i3 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 13;
   break;
  }
  if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
   i3 = i1 + 16 | 0;
  } else {
   i5 = i1;
   break;
  }
 }
 if ((i4 | 0) == 13) {
  return;
 }
 L13 : while (1) {
  __ZN7WebCore13RenderElement12removeLayersEPNS_11RenderLayerE(i5, i2);
  i4 = i5;
  while (1) {
   i3 = HEAP32[i4 + 16 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break L13;
   }
   if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
    i4 = i3;
   } else {
    i5 = i3;
    continue L13;
   }
  }
 }
 return;
}
function __ZN7WebCore12StyleBoxDataD2Ev(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore13RenderElement32setNeedsPositionedMovementLayoutEPKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 | 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 & 2 | 0) != 0) {
  return;
 }
 HEAP32[i4 >> 2] = i5 | 2;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i3, 1, 0);
 if ((HEAP32[i4 >> 2] & 32768 | 0) == 0) {
  return;
 }
 do {
  if ((i2 | 0) != 0) {
   if (!(__ZNK7WebCore11RenderStyle19diffRequiresRepaintEPKS0_(HEAP32[i1 + 36 >> 2] | 0, i2) | 0)) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i3);
   return;
  }
 } while (0);
 __ZN7WebCore12RenderObject51setLayerNeedsFullRepaintForPositionedMovementLayoutEv(i3);
 return;
}
function __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 __ZN7WebCoreL35firstLineStyleForCachedUncachedTypeENS_15StyleCacheStateERKNS_13RenderElementEPNS_11RenderStyleE(i3, 0, i1, i4);
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i5 = i4;
  STACKTOP = i2;
  return i5 | 0;
 }
 i4 = i3 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  i5 = i3;
  STACKTOP = i2;
  return i5 | 0;
 } else {
  HEAP32[i4 >> 2] = i1;
  i5 = i3;
  STACKTOP = i2;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore13RenderElementC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 __ZN7WebCore12RenderObjectC2ERNS_4NodeE(i1 | 0, i2 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 24 | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i7 & -64 | i4 & 63;
 HEAP8[i2] = i4 & 63;
 HEAP8[i1 + 25 | 0] = i7 >>> 8 & 255 & -2;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13RenderElementC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 __ZN7WebCore12RenderObjectC2ERNS_4NodeE(i1 | 0, i2 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 24 | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i7 & -64 | i4 & 63;
 HEAP8[i2] = i4 & 63;
 HEAP8[i1 + 25 | 0] = i7 >>> 8 & 255 & -2;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13RenderElement18setAnimatableStyleEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZNK7WebCore12RenderObject9animationEv(i1 | 0) | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 __ZN7WebCore19AnimationController16updateAnimationsERNS_13RenderElementEN3WTF7PassRefINS_11RenderStyleEEE(i4, i6, i1, i5);
 __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13RenderElement16updateShapeImageEPKNS_10ShapeValueES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = (i2 | 0) != 0;
 i5 = (i3 | 0) == 0;
 if (i5 & (i4 ^ 1)) {
  return;
 }
 if (i4) {
  i6 = HEAP32[i2 + 12 >> 2] | 0;
 } else {
  i6 = 0;
 }
 if (i5) {
  i7 = 0;
 } else {
  i7 = HEAP32[i3 + 12 >> 2] | 0;
 }
 if ((i6 | 0) == (i7 | 0)) {
  return;
 }
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 52 >> 2] & 31](i6, i1);
 }
 if ((i7 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] & 31](i7, i1);
 return;
}
function __ZNK7WebCore13RenderElement35borderImageIsLoadedAndCanBeRenderedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = HEAP32[(HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 132 >> 2] | 0) + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(FUNCTION_TABLE_iiif[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 1](i3, i1 | 0, +HEAPF32[(HEAP32[i2 + 24 >> 2] | 0) + 80 >> 2]) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 255](i3) | 0;
 return i4 | 0;
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
function __ZN7WebCore13RenderElement6layoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1 | 0;
  __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i3);
  return;
 } else {
  i4 = i2;
 }
 while (1) {
  if ((HEAP32[i4 + 20 >> 2] & 31 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 652 >> 2] & 31](i4);
  }
  i4 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i4 | 0) == 0) {
   break;
  }
 }
 i3 = i1 | 0;
 __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i3);
 return;
}
function iiiiiii___ZN7WebCore12RenderObject11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore12RenderObject11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function __ZNK7WebCore13RenderElement30layerCreationAllowedForSubtreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 1;
   i4 = 5;
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 344 >> 2] & 255](i1 | 0) | 0) {
   i3 = 0;
   i4 = 6;
   break;
  } else {
   i2 = i1;
  }
 }
 if ((i4 | 0) == 5) {
  return i3 | 0;
 } else if ((i4 | 0) == 6) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore13RenderElement34setNeedsSimplifiedNormalFlowLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 i3 = i1 + 20 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 & 16 | 0) != 0) {
  return;
 }
 HEAP32[i3 >> 2] = i1 | 16;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2, 1, 0);
 if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i2);
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
function __ZNK7WebCore13RenderElement22uncachedFirstLineStyleEPNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZN7WebCoreL35firstLineStyleForCachedUncachedTypeENS_15StyleCacheStateERKNS_13RenderElementEPNS_11RenderStyleE(i1, 1, i2, i3);
  return;
 }
}
function __ZN7WebCore13RenderElement9addLayersEPNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = i1;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCoreL9addLayersERNS_13RenderElementEPNS_11RenderLayerERPS0_RS3_(i1, i2, i4, i5);
 STACKTOP = i3;
 return;
}
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore13RenderElement11updateImageEPNS_10StyleImageES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i2 | 0) == (i3 | 0)) {
  return;
 }
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 52 >> 2] & 31](i2, i1);
 }
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 48 >> 2] & 31](i3, i1);
 return;
}
function viiiii___ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore13RenderElement15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 | 0;
 __ZN7WebCore19AnimationController16cancelAnimationsEPNS_13RenderElementE(__ZNK7WebCore12RenderObject9animationEv(i2) | 0, i1);
 __ZN7WebCore13RenderElement23destroyLeftoverChildrenEv(i1);
 __ZN7WebCore12RenderObject15willBeDestroyedEv(i2);
 return;
}
function viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viiiii___ZN7WebCore12RenderObject14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore12RenderObject14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function viiiii___ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderObject22outlineStyleForRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  return i2 | 0;
 } else {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
  return i2 | 0;
 }
 return 0;
}
function viii___ZNK7WebCore12RenderObject29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore12RenderObject29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1 | 0, i2 | 0, i3 | 0);
}
function iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
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
function __ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 31](i1, i2, i3);
 return;
}
function viii___ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore12RenderObject17setSelectionStateENS0_14SelectionStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -234881025 | i2 << 25 & 234881024;
 return;
}
function __ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i1, i2, 0);
 return;
}
function iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1 | 0, i2 | 0) | 0;
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
function __ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderObject13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv(i1 | 0) | 0;
}
function iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject14previousOffsetEi(i1 | 0, i2 | 0) | 0;
}
function ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17strokeBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17objectBoundingBoxEv(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderObject13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv(i1 | 0) | 0;
}
function iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject10nextOffsetEi(i1 | 0, i2 | 0) | 0;
}
function vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject14localTransformEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject15updateDragStateEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject22localToParentTransformEv(i1 | 0) | 0;
}
function __ZN7WebCore13RenderElement21clearChildNeedsLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -31;
 return;
}
function vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv(i1 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0) == 0 | 0;
}
function __ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject15innerLineHeightEv(i1 | 0) | 0;
}
function dynCall_iiif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 return FUNCTION_TABLE_iiif[i1 & 1](i2 | 0, i3 | 0, +d4) | 0;
}
function ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14firstLineBlockEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMaxOffsetEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function __ZN7WebCore13RenderElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElementD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b10(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(10);
 return 0;
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function __ZNK7WebCore13RenderElement14firstChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 28 >> 2] | 0;
}
function __ZNK7WebCore13RenderElement13lastChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 32 >> 2] | 0;
}
function __ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
}
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore17CachedImageClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject23isTextControlInnerBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23createsAnonymousWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGViewportContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGResourceContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLFractionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderScrollbarPartEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isStretchingChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isSVGHiddenContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isRenderMathMLFencedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject23setNeedsTransformUpdateEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12RenderObject21needsBoundariesUpdateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19virtualContinuationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSnapshottedPlugInEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSVGResourceFilterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isFileUploadControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore12RenderObject18isSVGForeignObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLMathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFullScreenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18canBeSelectionLeafEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isSVGGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isRenderMathMLRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderTableColEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderSVGBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isEmbeddedObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(8);
 return 0;
}
function __ZNK7WebCore12RenderObject15isSVGInlineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isDetailsMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableSectionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableCaptionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isSVGContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderRegionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderIFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject17updateFromElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject13isTextControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSliderThumbEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSVGTextPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isRenderImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isCombineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isRenderGridEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isListMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTextFieldEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTableCellEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isSVGInlineEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTextAreaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTableRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGShapeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isProgressEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isMenuListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isListItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFrameSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFieldsetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isRubyRunEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isReplicaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isListBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isCounterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function __ZNK7WebCore12RenderObject8isWidgetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isSliderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isCanvasEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isVideoEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isQuoteEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMeterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMediaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject6lengthEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject6isRubyEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject5isWBREv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b0,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b0,iiii___ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,viiiii___ZN7WebCore12RenderObject14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b1,viiiii___ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b1,viiiii___ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb__wrapper,b1];
  var FUNCTION_TABLE_vi = [b2,b2,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b2,__ZN7WebCore13RenderElement6layoutEv,b2,__ZN7WebCore12RenderObject17updateFromElementEv,b2,__ZN7WebCore13RenderElement15willBeDestroyedEv,b2,__ZN7WebCore13RenderElementD2Ev,b2,__ZN7WebCore13RenderElement16insertedIntoTreeEv,b2,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b2,__ZN7WebCore13RenderElementD0Ev,b2,__ZN7WebCore13RenderElement21willBeRemovedFromTreeEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b3,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv,b3,__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b3,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b3,__ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE,b3,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b3,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b3,__ZN7WebCore12RenderObject17setSelectionStateENS0_14SelectionStateE,b3,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b3,__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv,b3,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b3,vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper
  ,b3,b3,b3];
  var FUNCTION_TABLE_iiiiiii = [b4,b4,iiiiiii___ZN7WebCore12RenderObject11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b4];
  var FUNCTION_TABLE_ii = [b5,b5,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b5,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b5,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b5,__ZNK7WebCore12RenderObject10isRubyTextEv,b5,__ZNK7WebCore12RenderObject6isRubyEv,b5,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b5,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b5,__ZNK7WebCore12RenderObject8isWidgetEv,b5,__ZNK7WebCore12RenderObject11isTextFieldEv,b5,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b5,ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper,b5,__ZNK7WebCore12RenderObject9isSVGRootEv,b5,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b5,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv
  ,b5,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b5,__ZNK7WebCore12RenderObject7isMeterEv,b5,__ZNK7WebCore12RenderObject14isSVGContainerEv,b5,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b5,__ZNK7WebCore12RenderObject7isImageEv,b5,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b5,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b5,__ZNK7WebCore12RenderObject7isQuoteEv,b5,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b5,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b5,__ZNK7WebCore12RenderObject10isSVGImageEv,b5,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b5,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b5,__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv,b5,__ZNK7WebCore12RenderObject16isRenderTableColEv
  ,b5,__ZNK7WebCore12RenderObject7isVideoEv,b5,__ZNK7WebCore12RenderObject10isProgressEv,b5,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b5,__ZNK7WebCore12RenderObject13isCombineTextEv,b5,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b5,__ZNK7WebCore12RenderObject5isWBREv,b5,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b5,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b5,__ZNK7WebCore13RenderElement14firstChildSlowEv,b5,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b5,__ZNK7WebCore12RenderObject7isFrameEv,b5,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b5,__ZNK7WebCore12RenderObject9isReplicaEv,b5,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b5,__ZNK7WebCore12RenderObject19isFileUploadControlEv
  ,b5,__ZNK7WebCore12RenderObject7isMediaEv,b5,__ZNK7WebCore12RenderObject10isSVGShapeEv,b5,__ZNK7WebCore12RenderObject14isRenderButtonEv,b5,__ZNK7WebCore12RenderObject8isSliderEv,b5,__ZNK7WebCore12RenderObject10isRubyBaseEv,b5,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b5,__ZNK7WebCore12RenderObject8isCanvasEv,b5,__ZNK7WebCore12RenderObject10isMenuListEv,b5,__ZNK7WebCore13RenderElement13hoverAncestorEv,b5,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b5,__ZNK7WebCore12RenderObject14isTableCaptionEv,b5,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper,b5,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b5,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper,b5,__ZNK7WebCore12RenderObject13isSliderThumbEv
  ,b5,__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv,b5,__ZNK7WebCore12RenderObject13isTextControlEv,b5,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b5,__ZNK7WebCore12RenderObject9isSVGTextEv,b5,__ZNK7WebCore12RenderObject10isTextAreaEv,b5,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b5,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b5,__ZNK7WebCore12RenderObject11isTableCellEv,b5,__ZNK7WebCore12RenderObject12isRenderGridEv,b5,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b5,__ZNK7WebCore12RenderObject9isListBoxEv,b5,__ZNK7WebCore12RenderObject9isSVGPathEv,b5,__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv,b5,__ZNK7WebCore12RenderObject13isRenderImageEv,b5,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv
  ,b5,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b5,__ZNK7WebCore12RenderObject10isListItemEv,b5,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b5,__ZNK7WebCore12RenderObject6lengthEv,b5,__ZNK7WebCore12RenderObject10isTableRowEv,b5,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b5,__ZNK7WebCore12RenderObject10isFrameSetEv,b5,__ZNK7WebCore12RenderObject10isFieldsetEv,b5,__ZNK7WebCore12RenderObject11isSVGInlineEv,b5,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b5,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b5,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b5,__ZNK7WebCore13RenderElement13lastChildSlowEv,b5,__ZNK7WebCore12RenderObject9isRubyRunEv,b5,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv
  ,b5,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b5,__ZNK7WebCore12RenderObject14isRenderRegionEv,b5,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b5,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b5,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b5,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b5,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b5,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b5,__ZNK7WebCore12RenderObject9isCounterEv,b5,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b5,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b5,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b5,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b5,__ZNK7WebCore12RenderObject19virtualContinuationEv,b5,__ZNK7WebCore12RenderObject12isListMarkerEv
  ,b5,__ZNK7WebCore12RenderObject7isEmptyEv,b5,__ZNK7WebCore12RenderObject7isTableEv,b5,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b5,__ZNK7WebCore12RenderObject14isTableSectionEv,b5,__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE,b6,viii___ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE__wrapper,b6,__ZNK7WebCore12RenderObject13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb,b6,viii___ZNK7WebCore12RenderObject29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b6,viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b6,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b6,__ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_,b6,__ZNK7WebCore12RenderObject13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE,b6,__ZN7WebCore13RenderElement14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b6,viii___ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b6,__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b6,__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_,b6,__ZN7WebCore13RenderElement15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7,v____cxa_pure_virtual__wrapper,b7];
  var FUNCTION_TABLE_iiif = [b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b9,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b9,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b9,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b9,b9,b9,b9,b9,b9,b9];
  var FUNCTION_TABLE_iiiiii = [b10,b10,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b10];
  var FUNCTION_TABLE_viiii = [b11,b11,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b11,__ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b11,__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE,b11,__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE,b11,viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b11,viiii___ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b11,b11,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiif: dynCall_iiif, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiif": invoke_iiif, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames5rtTagE": __ZN7WebCore9HTMLNames5rtTagE, "__ZN7WebCore9HTMLNames7rubyTagE": __ZN7WebCore9HTMLNames7rubyTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiif = Module["dynCall_iiif"] = asm["dynCall_iiif"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZN7WebCore11RenderStyle27inheritColumnPropertiesFromEPS0_","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZN7WebCore13RenderElement6layoutEv","__ZN7WebCore13RenderElement11updateImageEPNS_10StyleImageES2_","__ZNK7WebCore13RenderElement30layerCreationAllowedForSubtreeEv","__ZN7WebCore13RenderElement10moveLayersEPNS_11RenderLayerES2_","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZN7WebCore11RenderStyle13setColumnSpanENS_10ColumnSpanE","__ZN7WebCore13RenderElement32setNeedsPositionedMovementLayoutEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZN7WebCore13RenderElement33propagateStyleToAnonymousChildrenENS0_20StylePropagationTypeE","__ZN7WebCore13RenderElement18setAnimatableStyleEN3WTF7PassRefINS_11RenderStyleEEE","__ZN7WebCore13RenderElement25rendererForRootBackgroundEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore12RenderObject6isRubyEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore13RenderElement51hasImmediateNonWhitespaceTextChildOrBorderOrOutlineEv","__ZNK7WebCore12RenderObject13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZN7WebCore13RenderElement21willBeRemovedFromTreeEv","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZN7WebCore10BorderDataD2Ev","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZN7WebCore13RenderElementC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZN7WebCore13RenderElement15initializeStyleEv","__ZN7WebCore17StyleSurroundDataD2Ev","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv","__ZN7WebCore13RenderElement26repaintAfterLayoutIfNeededEPKNS_22RenderLayerModelObjectERKNS_10LayoutRectES6_PS5_S7_","__ZN7WebCore13RenderElement15willBeDestroyedEv","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject16isAnonymousBlockEv","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZN7WebCore13RenderElementD2Ev","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZNK7WebCore13RenderElement35borderImageIsLoadedAndCanBeRenderedEv","__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE","__ZN7WebCore12StyleBoxDataD2Ev","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZN7WebCore13RenderElement9createForERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZN7WebCore11RenderStyleD2Ev","__ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_","__ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore13RenderElement12removeLayersEPNS_11RenderLayerE","__ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE","__ZN7WebCoreL9addLayersERNS_13RenderElementEPNS_11RenderLayerERPS0_RS3_","__ZN7WebCore13RenderElement16insertedIntoTreeEv","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZN7WebCoreL35firstLineStyleForCachedUncachedTypeENS_15StyleCacheStateERKNS_13RenderElementEPNS_11RenderStyleE","__ZNK7WebCore13RenderElement20cachedFirstLineStyleEv","__ZN7WebCore13RenderElement14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZN7WebCore13RenderElement9addLayersEPNS_11RenderLayerE","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZNK7WebCore12RenderObject8isSliderEv","__ZN7WebCore13RenderElement23destroyLeftoverChildrenEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZNK7WebCore12RenderObject13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore13RenderElement13hoverAncestorEv","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZN7WebCore12RenderObject17setSelectionStateENS0_14SelectionStateE","__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZN7WebCore13RenderElement16updateShapeImageEPKNS_10ShapeValueES3_","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","_memset","__ZNK7WebCore12RenderObject11isTableCellEv","_memcpy","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZN7WebCore13RenderElement34setNeedsSimplifiedNormalFlowLayoutEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZN7WebCore13RenderElement21clearChildNeedsLayoutEv","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZN7WebCore13RenderElementC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj","__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZN7WebCore13RenderElement16updateFillImagesEPKNS_9FillLayerES3_","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore13RenderElement21adjustStyleDifferenceENS_15StyleDifferenceEj","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZNK7WebCore13RenderElement22uncachedFirstLineStyleEPNS_11RenderStyleE","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZN7WebCoreL21mustRepaintFillLayersERKNS_13RenderElementEPKNS_9FillLayerE","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZNK7WebCore12RenderObject7isImageEv","__ZN7WebCore13RenderElementD0Ev","__ZNK7WebCore12RenderObject9isCounterEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZN7WebCore13RenderElement13findNextLayerEPNS_11RenderLayerEPNS_12RenderObjectEb","__ZNK7WebCore12RenderObject19virtualContinuationEv","__ZN7WebCore13RenderElement15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore12RenderObject7isTableEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv"]

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
H_BASE = parentModule["_malloc"](568 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 568;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore10ScrollViewD1Ev;
/* memory initializer */ allocate([112,97,110,73,99,111,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,220,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_fi(index,a1) {
  try {
    return Module["dynCall_fi"](index,a1);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore10ScrollViewE=(H_BASE+16)|0;
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
  var invoke_fi=env.invoke_fi;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 64 | 0;
 i10 = i3 + 80 | 0;
 i11 = i3 + 88 | 0;
 i12 = i3 + 96 | 0;
 i13 = i3 + 112 | 0;
 i14 = i3 + 120 | 0;
 i15 = i3 + 136 | 0;
 i16 = i3 + 144 | 0;
 i17 = i3 + 152 | 0;
 i18 = i3 + 160 | 0;
 i19 = i3 + 168 | 0;
 i20 = i3 + 176 | 0;
 i21 = i20 | 0;
 i22 = i20;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i25 = i24 | 0;
 i26 = i24;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i28 = i27 | 0;
 i29 = i27;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i32 = i31 | 0;
 i33 = i31;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i39 = i1 + 153 | 0;
 if ((HEAP8[i39] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 74 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i40 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i41 = i1 + 152 | 0;
 if ((HEAP8[i41] & 1) == 0) {
  HEAP8[i39] = 1;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 264 >> 2] & 63](i1);
  HEAP8[i39] = 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 224 >> 2] & 127](i12, i1);
 i42 = i1 + 56 | 0;
 i43 = (HEAP32[i42 >> 2] | 0) != 0;
 i44 = i1 + 60 | 0;
 i45 = (HEAP32[i44 >> 2] | 0) != 0;
 i46 = HEAP32[i1 + 64 >> 2] | 0;
 i47 = HEAP32[i1 + 68 >> 2] | 0;
 i48 = (i46 | 0) != 0;
 i49 = (i46 | 0) == 2;
 i50 = i48 ? i49 : i43;
 i51 = (i47 | 0) != 0;
 i52 = (i47 | 0) == 2;
 i53 = i51 ? i52 : i45;
 do {
  if ((HEAP8[i41] & 1) != 0 | i48 & i51) {
   do {
    if (i43 ^ i50) {
     if (!i43) {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 152 >> 2] & 127](i1) | 0) {
       i54 = 0;
       break;
      }
     }
     i54 = __ZN7WebCore10ScrollView25setHasHorizontalScrollbarEbPb(i1, i50, 0) | 0;
    } else {
     i54 = 0;
    }
   } while (0);
   if (!(i45 ^ i53)) {
    i55 = i50;
    i56 = i53;
    i57 = i54;
    i58 = 49;
    break;
   }
   if (!i45) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 152 >> 2] & 127](i1) | 0) {
     i55 = i50;
     i56 = i53;
     i57 = i54;
     i58 = 49;
     break;
    }
   }
   if (__ZN7WebCore10ScrollView23setHasVerticalScrollbarEbPb(i1, i53, 0) | 0 | i54) {
    i59 = i53;
    i60 = i50;
    i58 = 50;
   } else {
    i61 = i53;
    i62 = i50;
   }
  } else {
   i63 = i1 + 36 | 0;
   __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i13, i63);
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i14, i1, 1);
   i64 = i14 + 8 | 0;
   i65 = HEAP32[i64 >> 2] | 0;
   i66 = HEAP32[i64 + 4 >> 2] | 0;
   do {
    if ((i46 | 0) == 0) {
     i64 = i13 | 0;
     i67 = HEAP32[i64 >> 2] | 0;
     if ((i67 | 0) <= (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 172 >> 2] & 127](i1) | 0)) {
      i68 = 0;
      break;
     }
     if ((HEAP32[i1 + 156 >> 2] | 0) != 0) {
      i68 = 1;
      break;
     }
     if ((HEAP32[i64 >> 2] | 0) > (i65 | 0)) {
      i68 = 1;
      break;
     }
     i68 = (HEAP32[i13 + 4 >> 2] | 0) > (i66 | 0);
    } else {
     i68 = i50;
    }
   } while (0);
   do {
    if ((i47 | 0) == 0) {
     i64 = i13 + 4 | 0;
     i67 = HEAP32[i64 >> 2] | 0;
     if ((i67 | 0) <= (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 176 >> 2] & 127](i1) | 0)) {
      i69 = 0;
      break;
     }
     if ((HEAP32[i1 + 156 >> 2] | 0) != 0) {
      i69 = 1;
      break;
     }
     if ((HEAP32[i13 >> 2] | 0) > (i65 | 0)) {
      i69 = 1;
      break;
     }
     i69 = (HEAP32[i64 >> 2] | 0) > (i66 | 0);
    } else {
     i69 = i53;
    }
   } while (0);
   i66 = i68 | i43 ^ 1 | i52;
   i65 = i66 & i69;
   i64 = i65 | i45 ^ 1 | i49;
   i67 = i64 & i66 ^ 1;
   i66 = i64 & i68;
   do {
    if (i43 ^ i66) {
     if (!i43) {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 152 >> 2] & 127](i1) | 0) {
       i70 = 0;
       i71 = 0;
       break;
      }
     }
     i64 = HEAP32[i1 + 52 >> 2] | 0;
     if (!((i64 | 0) == 0 | i66)) {
      i72 = HEAP32[i1 + 48 >> 2] | 0;
      i73 = HEAP32[i42 >> 2] | 0;
      i74 = i64 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i73 >> 2] | 0) + 108 >> 2] & 127](i73) | 0) | 0;
      HEAP32[i15 >> 2] = i72;
      HEAP32[i15 + 4 >> 2] = i74;
      __ZN7WebCore14ScrollableArea15setScrollOriginERKNS_8IntPointE(i63, i15);
     }
     i74 = HEAP32[i42 >> 2] | 0;
     if ((i74 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i74 >> 2] | 0) + 132 >> 2] & 63](i74);
     }
     HEAP8[i16] = 0;
     if (!(__ZN7WebCore10ScrollView25setHasHorizontalScrollbarEbPb(i1, i66, i16) | 0)) {
      i70 = 0;
      i71 = 0;
      break;
     }
     i70 = 1;
     i71 = (HEAP8[i16] & 1) != 0;
    } else {
     i70 = 0;
     i71 = 0;
    }
   } while (0);
   do {
    if (i45 ^ i65) {
     if (!i45) {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 152 >> 2] & 127](i1) | 0) {
       i75 = i70;
       i76 = i71;
       break;
      }
     }
     i74 = HEAP32[i1 + 48 >> 2] | 0;
     if (!((i74 | 0) == 0 | i65)) {
      i72 = HEAP32[i44 >> 2] | 0;
      i73 = i74 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i72 >> 2] | 0) + 104 >> 2] & 127](i72) | 0) | 0;
      i72 = HEAP32[i1 + 52 >> 2] | 0;
      HEAP32[i17 >> 2] = i73;
      HEAP32[i17 + 4 >> 2] = i72;
      __ZN7WebCore14ScrollableArea15setScrollOriginERKNS_8IntPointE(i63, i17);
     }
     i72 = HEAP32[i44 >> 2] | 0;
     if ((i72 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i72 >> 2] | 0) + 132 >> 2] & 63](i72);
     }
     HEAP8[i18] = 0;
     if (!(__ZN7WebCore10ScrollView23setHasVerticalScrollbarEbPb(i1, i65, i18) | 0)) {
      i75 = i70;
      i76 = i71;
      break;
     }
     i75 = 1;
     i76 = (HEAP8[i18] & 1 | i71 & 1 | 0) != 0;
    } else {
     i75 = i70;
     i76 = i71;
    }
   } while (0);
   if (!(i76 | i67)) {
    i55 = i66;
    i56 = i65;
    i57 = i75;
    i58 = 49;
    break;
   }
   i72 = i1 + 156 | 0;
   i73 = HEAP32[i72 >> 2] | 0;
   if (i73 >>> 0 >= 2 >>> 0) {
    i55 = i66;
    i56 = i65;
    i57 = i75;
    i58 = 49;
    break;
   }
   HEAP32[i72 >> 2] = i73 + 1;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i63 >> 2] | 0) + 20 >> 2] & 63](i63);
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 264 >> 2] & 63](i1);
   __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i19, i63);
   do {
    if ((HEAP32[i19 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
     if ((HEAP32[i19 + 4 >> 2] | 0) != (HEAP32[i13 + 4 >> 2] | 0)) {
      break;
     }
     __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i1, i2);
    }
   } while (0);
   HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) - 1;
   if (i75) {
    i59 = i65;
    i60 = i66;
    i58 = 50;
   } else {
    i61 = i65;
    i62 = i66;
   }
  }
 } while (0);
 if ((i58 | 0) == 49) {
  if (i57) {
   i59 = i56;
   i60 = i55;
   i58 = 50;
  } else {
   i61 = i56;
   i62 = i55;
  }
 }
 if ((i58 | 0) == 50) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 268 >> 2] & 63](i1);
  i61 = i59;
  i62 = i60;
 }
 if ((HEAP32[i1 + 156 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i39] = 1;
 do {
  if ((HEAP32[i42 >> 2] | 0) != 0) {
   i60 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 172 >> 2] & 127](i1) | 0;
   i59 = ~~(+(i60 | 0) * +.875);
   i55 = i60 - (__ZN7WebCore9Scrollbar22maxOverlapBetweenPagesEv() | 0) | 0;
   i56 = (i59 | 0) < (i55 | 0) ? i55 : i59;
   i59 = (i56 | 0) < 1 ? 1 : i56;
   i56 = HEAP32[i42 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 128 >> 2] & 127](i22, i56);
   __ZNK7WebCore6Widget9frameRectEv(i4, i40);
   i56 = HEAP32[i4 + 12 >> 2] | 0;
   i55 = HEAP32[i42 >> 2] | 0;
   i57 = i56 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i55 >> 2] | 0) + 108 >> 2] & 127](i55) | 0) | 0;
   __ZNK7WebCore6Widget9frameRectEv(i5, i40);
   i55 = HEAP32[i5 + 8 >> 2] | 0;
   i56 = HEAP32[i44 >> 2] | 0;
   if ((i56 | 0) == 0) {
    i77 = 0;
   } else {
    i77 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i56 >> 2] | 0) + 104 >> 2] & 127](i56) | 0;
   }
   i56 = HEAP32[i42 >> 2] | 0;
   i75 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i56 >> 2] | 0) + 108 >> 2] & 127](i56) | 0;
   HEAP32[i23 >> 2] = 0;
   HEAP32[i23 + 4 >> 2] = i57;
   HEAP32[i23 + 8 >> 2] = i55 - i77;
   HEAP32[i23 + 12 >> 2] = i75;
   i75 = HEAP32[i42 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i75 >> 2] | 0) + 8 >> 2] & 127](i75, i23);
   L83 : do {
    if ((HEAP8[i41] & 1) == 0) {
     i75 = HEAP32[i42 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i75 >> 2] | 0) + 128 >> 2] & 127](i26, i75);
     do {
      if (!((HEAP32[i21 >> 2] | 0) != (HEAP32[i25 >> 2] | 0) | (HEAP32[i21 + 4 >> 2] | 0) != (HEAP32[i25 + 4 >> 2] | 0))) {
       i75 = i20 + 8 | 0;
       i55 = i24 + 8 | 0;
       if ((HEAP32[i75 >> 2] | 0) != (HEAP32[i55 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i75 + 4 >> 2] | 0) == (HEAP32[i55 + 4 >> 2] | 0)) {
        break L83;
       }
      }
     } while (0);
     i55 = HEAP32[i42 >> 2] | 0;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 132 >> 2] & 63](i55);
    }
   } while (0);
   if ((HEAP8[i41] & 1) != 0) {
    HEAP8[(HEAP32[i42 >> 2] | 0) + 169 | 0] = 1;
   }
   i66 = HEAP32[i42 >> 2] | 0;
   i65 = HEAP32[(HEAP32[i66 >> 2] | 0) + 208 >> 2] | 0;
   i72 = i1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i72 >> 2] | 0) + 184 >> 2] & 127](i6, i1);
   FUNCTION_TABLE_vii[i65 & 127](i66, (HEAP32[i6 >> 2] | 0) > (i60 | 0));
   __ZN7WebCore9Scrollbar8setStepsEiii(HEAP32[i42 >> 2] | 0, 40, i59, 1);
   i66 = HEAP32[i42 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i72 >> 2] | 0) + 184 >> 2] & 127](i7, i1);
   __ZN7WebCore9Scrollbar13setProportionEii(i66, i60, HEAP32[i7 >> 2] | 0);
   if ((HEAP8[i41] & 1) == 0) {
    break;
   }
   HEAP8[(HEAP32[i42 >> 2] | 0) + 169 | 0] = 0;
  }
 } while (0);
 do {
  if ((HEAP32[i44 >> 2] | 0) != 0) {
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 176 >> 2] & 127](i1) | 0;
   i6 = ~~(+(i7 | 0) * +.875);
   i24 = i7 - (__ZN7WebCore9Scrollbar22maxOverlapBetweenPagesEv() | 0) | 0;
   i20 = (i6 | 0) < (i24 | 0) ? i24 : i6;
   i6 = (i20 | 0) < 1 ? 1 : i20;
   i20 = HEAP32[i44 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 128 >> 2] & 127](i29, i20);
   __ZNK7WebCore6Widget9frameRectEv(i8, i40);
   i20 = HEAP32[i8 + 8 >> 2] | 0;
   i24 = HEAP32[i44 >> 2] | 0;
   i25 = i20 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 104 >> 2] & 127](i24) | 0) | 0;
   i24 = HEAP32[i44 >> 2] | 0;
   i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 104 >> 2] & 127](i24) | 0;
   __ZNK7WebCore6Widget9frameRectEv(i9, i40);
   i24 = HEAP32[i9 + 12 >> 2] | 0;
   i21 = HEAP32[i42 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i78 = 0;
   } else {
    i78 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 108 >> 2] & 127](i21) | 0;
   }
   HEAP32[i30 >> 2] = i25;
   HEAP32[i30 + 4 >> 2] = 0;
   HEAP32[i30 + 8 >> 2] = i20;
   HEAP32[i30 + 12 >> 2] = i24 - i78;
   i24 = HEAP32[i44 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i24 >> 2] | 0) + 8 >> 2] & 127](i24, i30);
   L100 : do {
    if ((HEAP8[i41] & 1) == 0) {
     i24 = HEAP32[i44 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i24 >> 2] | 0) + 128 >> 2] & 127](i33, i24);
     do {
      if (!((HEAP32[i28 >> 2] | 0) != (HEAP32[i32 >> 2] | 0) | (HEAP32[i28 + 4 >> 2] | 0) != (HEAP32[i32 + 4 >> 2] | 0))) {
       i24 = i27 + 8 | 0;
       i20 = i31 + 8 | 0;
       if ((HEAP32[i24 >> 2] | 0) != (HEAP32[i20 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i24 + 4 >> 2] | 0) == (HEAP32[i20 + 4 >> 2] | 0)) {
        break L100;
       }
      }
     } while (0);
     i20 = HEAP32[i44 >> 2] | 0;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 132 >> 2] & 63](i20);
    }
   } while (0);
   if ((HEAP8[i41] & 1) != 0) {
    HEAP8[(HEAP32[i44 >> 2] | 0) + 169 | 0] = 1;
   }
   i60 = HEAP32[i44 >> 2] | 0;
   i59 = HEAP32[(HEAP32[i60 >> 2] | 0) + 208 >> 2] | 0;
   i20 = i1 + 36 | 0;
   __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i34, i20);
   FUNCTION_TABLE_vii[i59 & 127](i60, (HEAP32[i34 + 4 >> 2] | 0) > (i7 | 0));
   __ZN7WebCore9Scrollbar8setStepsEiii(HEAP32[i44 >> 2] | 0, 40, i6, 1);
   i60 = HEAP32[i44 >> 2] | 0;
   __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i35, i20);
   __ZN7WebCore9Scrollbar13setProportionEii(i60, i7, HEAP32[i35 + 4 >> 2] | 0);
   if ((HEAP8[i41] & 1) == 0) {
    break;
   }
   HEAP8[(HEAP32[i44 >> 2] | 0) + 169 | 0] = 0;
  }
 } while (0);
 do {
  if (i43 ^ i62 | i45 ^ i61) {
   i41 = i1;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i41 >> 2] | 0) + 68 >> 2] & 63](i1);
   __ZN7WebCore10ScrollView23positionScrollbarLayersEv(i1);
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i41 >> 2] | 0) + 280 >> 2] & 63](i1);
   if ((HEAP32[i42 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i44 >> 2] | 0) != 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 284 >> 2] & 127](i1, i12);
  }
 } while (0);
 i12 = HEAP32[i2 >> 2] | 0;
 i61 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = i1 + 36 | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 152 >> 2] & 127](i2) | 0) {
   i79 = i12;
   i80 = i61;
  } else {
   if ((HEAP32[i1 + 44 >> 2] & 1 | 0) == 0) {
    i79 = i12;
    i80 = i61;
    break;
   }
   i45 = i1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i45 >> 2] | 0) + 196 >> 2] & 127](i10, i1);
   i62 = HEAP32[i10 >> 2] | 0;
   i43 = (i12 | 0) < (i62 | 0) ? i12 : i62;
   i62 = HEAP32[i10 + 4 >> 2] | 0;
   i41 = (i61 | 0) < (i62 | 0) ? i61 : i62;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i45 >> 2] | 0) + 200 >> 2] & 127](i11, i1);
   i45 = HEAP32[i11 >> 2] | 0;
   i62 = HEAP32[i11 + 4 >> 2] | 0;
   i79 = (i43 | 0) > (i45 | 0) ? i43 : i45;
   i80 = (i41 | 0) > (i62 | 0) ? i41 : i62;
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 192 >> 2] & 127](i36, i1);
 do {
  if ((i79 | 0) == (HEAP32[i36 >> 2] | 0)) {
   if ((i80 | 0) != (HEAP32[i36 + 4 >> 2] | 0)) {
    i58 = 86;
    break;
   }
   if ((HEAP32[i1 + 44 >> 2] & 256 | 0) != 0) {
    i58 = 86;
   }
  } else {
   i58 = 86;
  }
 } while (0);
 if ((i58 | 0) == 86) {
  i58 = (HEAP32[i1 + 52 >> 2] | 0) + i80 | 0;
  HEAP32[i38 >> 2] = (HEAP32[i1 + 48 >> 2] | 0) + i79;
  HEAP32[i38 + 4 >> 2] = i58;
  __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i37, i38);
  __ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationERKNS_10FloatPointE(i2, i37);
  i37 = i1 + 44 | 0;
  HEAP32[i37 >> 2] = HEAP32[i37 >> 2] & -257;
 }
 i37 = HEAP32[i42 >> 2] | 0;
 if ((i37 | 0) != 0) {
  __ZN7WebCore9Scrollbar15offsetDidChangeEv(i37);
 }
 i37 = HEAP32[i44 >> 2] | 0;
 if ((i37 | 0) != 0) {
  __ZN7WebCore9Scrollbar15offsetDidChangeEv(i37);
 }
 HEAP8[i39] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ScrollView5paintEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 72 | 0;
 i11 = i4 + 80 | 0;
 i12 = i4 + 96 | 0;
 i13 = i4 + 112 | 0;
 i14 = i4 + 128 | 0;
 i15 = i4 + 144 | 0;
 i16 = i4 + 160 | 0;
 i17 = i16 | 0;
 i18 = i16;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i24 = i23 | 0;
 i25 = i23;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i27 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  __ZN7WebCore6Widget5paintEPNS_15GraphicsContextERKNS_7IntRectE(i27, i2, i3);
  STACKTOP = i4;
  return;
 }
 do {
  if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0) {
   if (__ZNK7WebCore15GraphicsContext20updatingControlTintsEv(i2) | 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 63](i1);
 i28 = i15;
 i29 = i3;
 HEAP32[i28 >> 2] = HEAP32[i29 >> 2];
 HEAP32[i28 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
 HEAP32[i28 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
 HEAP32[i28 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
 i28 = i1 + 170 | 0;
 if ((HEAP8[i28] & 1) == 0) {
  i30 = i14 | 0;
  __ZNK7WebCore6Widget9frameRectEv(i14, i27);
  i31 = HEAP32[i30 >> 2] | 0;
  i32 = HEAP32[i30 + 4 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i19, i1, 0);
  i30 = i19 + 8 | 0;
  i19 = HEAP32[i30 >> 2] | 0;
  i33 = HEAP32[i30 + 4 >> 2] | 0;
  HEAP32[i17 >> 2] = i31;
  HEAP32[i17 + 4 >> 2] = i32;
  i32 = i16 + 8 | 0;
  HEAP32[i32 >> 2] = i19;
  HEAP32[i32 + 4 >> 2] = i33;
  __ZN7WebCore7IntRect9intersectERKS0_(i15, i18);
 }
 do {
  if ((HEAP32[i15 + 8 >> 2] | 0) >= 1) {
   if ((HEAP32[i15 + 12 >> 2] | 0) < 1) {
    break;
   }
   __ZN7WebCore15GraphicsContext4saveEv(i2);
   __ZNK7WebCore6Widget9frameRectEv(i12, i27);
   d34 = +(HEAP32[i12 >> 2] | 0);
   __ZNK7WebCore6Widget9frameRectEv(i11, i27);
   __ZN7WebCore15GraphicsContext9translateEff(i2, d34, +(HEAP32[i11 + 4 >> 2] | 0));
   i18 = i14 | 0;
   __ZNK7WebCore6Widget9frameRectEv(i14, i27);
   i33 = HEAP32[i18 + 4 >> 2] | 0;
   i32 = i15 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) - (HEAP32[i18 >> 2] | 0);
   i18 = i15 + 4 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - i33;
   if ((HEAP8[i28] & 1) == 0) {
    i33 = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i33 >> 2] | 0) + 192 >> 2] & 127](i10, i1);
    d34 = +(-(HEAP32[i10 >> 2] | 0) | 0);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i33 >> 2] | 0) + 192 >> 2] & 127](i9, i1);
    __ZN7WebCore15GraphicsContext9translateEff(i2, d34, +(-(HEAP32[i9 + 4 >> 2] | 0) | 0));
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i33 >> 2] | 0) + 192 >> 2] & 127](i20, i1);
    i33 = HEAP32[i20 + 4 >> 2] | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + (HEAP32[i20 >> 2] | 0);
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + i33;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i21, i1, 0);
    __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i2, i21);
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 256 >> 2] & 31](i1, i2, i15);
   __ZN7WebCore15GraphicsContext7restoreEv(i2);
  }
 } while (0);
 _memset(i7 | 0, 0, 16) | 0;
 _memset(i8 | 0, 0, 16) | 0;
 __ZN7WebCore10ScrollView33calculateOverhangAreasForPaintingERNS_7IntRectES2_(i1, i7, i8);
 if (__ZNK7WebCore7IntRect10intersectsERKS0_(i3, i7) | 0) {
  i35 = 14;
 } else {
  if (__ZNK7WebCore7IntRect10intersectsERKS0_(i3, i8) | 0) {
   i35 = 14;
  }
 }
 if ((i35 | 0) == 14) {
  FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 260 >> 2] & 3](i1, i2, i7, i8, i3);
 }
 do {
  if ((HEAP8[i1 + 152 | 0] & 1) == 0) {
   i3 = i1 + 56 | 0;
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    if ((HEAP32[i1 + 60 >> 2] | 0) == 0) {
     break;
    }
   }
   __ZN7WebCore15GraphicsContext4saveEv(i2);
   i8 = i22;
   HEAP32[i8 >> 2] = HEAP32[i29 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
   i8 = i14 | 0;
   i7 = i14;
   __ZNK7WebCore6Widget9frameRectEv(i7, i27);
   i35 = HEAP32[i8 >> 2] | 0;
   i15 = HEAP32[i8 + 4 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i26, i1, 1);
   i21 = i26 + 8 | 0;
   i20 = HEAP32[i21 >> 2] | 0;
   i9 = HEAP32[i21 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = i35;
   HEAP32[i24 + 4 >> 2] = i15;
   i15 = i23 + 8 | 0;
   HEAP32[i15 >> 2] = i20;
   HEAP32[i15 + 4 >> 2] = i9;
   __ZN7WebCore7IntRect9intersectERKS0_(i22, i25);
   __ZNK7WebCore6Widget9frameRectEv(i6, i27);
   d34 = +(HEAP32[i6 >> 2] | 0);
   __ZNK7WebCore6Widget9frameRectEv(i5, i27);
   __ZN7WebCore15GraphicsContext9translateEff(i2, d34, +(HEAP32[i5 + 4 >> 2] | 0));
   __ZNK7WebCore6Widget9frameRectEv(i7, i27);
   i7 = HEAP32[i8 + 4 >> 2] | 0;
   i9 = i22 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - (HEAP32[i8 >> 2] | 0);
   i8 = i22 + 4 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) - i7;
   i7 = i1 + 36 | 0;
   i8 = i7;
   do {
    if ((HEAP32[i3 >> 2] | 0) != 0) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 172 >> 2] & 127](i7) | 0) != 0) {
      break;
     }
     FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 31](i1, i2, HEAP32[i3 >> 2] | 0, i22);
    }
   } while (0);
   i3 = i1 + 60 | 0;
   do {
    if ((HEAP32[i3 >> 2] | 0) != 0) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 176 >> 2] & 127](i7) | 0) != 0) {
      break;
     }
     FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 31](i1, i2, HEAP32[i3 >> 2] | 0, i22);
    }
   } while (0);
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 200 >> 2] & 127](i7) | 0) == 0) {
    i3 = HEAP32[i1 >> 2] | 0;
    i9 = HEAP32[i3 + 228 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[i3 + 224 >> 2] & 127](i13, i1);
    FUNCTION_TABLE_viii[i9 & 31](i1, i2, i13);
   }
   __ZN7WebCore15GraphicsContext7restoreEv(i2);
  }
 } while (0);
 if ((HEAP8[i1 + 168 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore10ScrollView18paintPanScrollIconEPNS_15GraphicsContextE(i1, i2);
 STACKTOP = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vii + 12;
}
function __ZN7WebCore10ScrollView33calculateOverhangAreasForPaintingERNS_7IntRectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 72 | 0;
 i14 = i4 + 88 | 0;
 i15 = i4 + 104 | 0;
 i16 = i4 + 112 | 0;
 i17 = i4 + 128 | 0;
 i18 = i4 + 144 | 0;
 i19 = i4 + 160 | 0;
 i20 = i4 + 176 | 0;
 i21 = i4 + 192 | 0;
 i22 = i4 + 208 | 0;
 i23 = i4 + 224 | 0;
 i24 = i4 + 240 | 0;
 i25 = i4 + 256 | 0;
 i26 = i1;
 do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 144 >> 2] & 127](i1) | 0) == 0) {
   i27 = 0;
  } else {
   i28 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 144 >> 2] & 127](i1) | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 220 >> 2] & 127](i28) | 0) {
    i27 = 0;
    break;
   }
   i28 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 144 >> 2] & 127](i1) | 0;
   i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 104 >> 2] & 127](i28) | 0;
  }
 } while (0);
 do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 140 >> 2] & 127](i1) | 0) == 0) {
   i29 = 0;
  } else {
   i28 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 140 >> 2] & 127](i1) | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 220 >> 2] & 127](i28) | 0) {
    i29 = 0;
    break;
   }
   i28 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 140 >> 2] & 127](i1) | 0;
   i29 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 108 >> 2] & 127](i28) | 0;
  }
 } while (0);
 i26 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 192 >> 2] & 127](i8, i1);
 i28 = i1 + 36 | 0;
 i30 = (HEAP32[i1 + 52 >> 2] | 0) + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 do {
  if ((i30 | 0) < 0) {
   __ZNK7WebCore6Widget9frameRectEv(i9, i1 | 0);
   i8 = i2;
   i31 = i9;
   HEAP32[i8 >> 2] = HEAP32[i31 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i31 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i31 + 8 >> 2];
   HEAP32[i2 + 12 >> 2] = -i30;
   i31 = i2 + 8 | 0;
   HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) - i27;
  } else {
   __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i10, i28);
   if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i11, i28);
   i31 = HEAP32[i11 + 4 >> 2] | 0;
   i8 = i1;
   if ((i30 | 0) <= (i31 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 176 >> 2] & 127](i1) | 0) | 0)) {
    break;
   }
   __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i12, i28);
   i31 = HEAP32[i12 + 4 >> 2] | 0;
   i32 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 176 >> 2] & 127](i1) | 0) - i31 + i30 | 0;
   i31 = i1 | 0;
   __ZNK7WebCore6Widget9frameRectEv(i13, i31);
   i8 = i2;
   i33 = i13;
   HEAP32[i8 >> 2] = HEAP32[i33 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i33 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i33 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i33 + 12 >> 2];
   __ZNK7WebCore6Widget9frameRectEv(i14, i31);
   HEAP32[i2 + 4 >> 2] = (HEAP32[i14 + 4 >> 2] | 0) - (i32 + i29) + (HEAP32[i14 + 12 >> 2] | 0);
   HEAP32[i2 + 12 >> 2] = i32;
   i32 = i2 + 8 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) - i27;
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 192 >> 2] & 127](i15, i1);
 i26 = (HEAP32[i1 + 48 >> 2] | 0) + (HEAP32[i15 >> 2] | 0) | 0;
 if ((i26 | 0) < 0) {
  HEAP32[i3 + 8 >> 2] = -i26;
  i15 = i1 | 0;
  __ZNK7WebCore6Widget9frameRectEv(i16, i15);
  i14 = i2 + 12 | 0;
  HEAP32[i3 + 12 >> 2] = (HEAP32[i16 + 12 >> 2] | 0) - i29 - (HEAP32[i14 >> 2] | 0);
  __ZNK7WebCore6Widget9frameRectEv(i17, i15);
  HEAP32[i3 >> 2] = HEAP32[i17 >> 2];
  i17 = HEAP32[i2 + 4 >> 2] | 0;
  __ZNK7WebCore6Widget9frameRectEv(i18, i15);
  if ((i17 | 0) == (HEAP32[i18 + 4 >> 2] | 0)) {
   __ZNK7WebCore6Widget9frameRectEv(i19, i15);
   HEAP32[i3 + 4 >> 2] = (HEAP32[i14 >> 2] | 0) + (HEAP32[i19 + 4 >> 2] | 0);
   STACKTOP = i4;
   return;
  } else {
   __ZNK7WebCore6Widget9frameRectEv(i20, i15);
   HEAP32[i3 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
   STACKTOP = i4;
   return;
  }
 }
 i20 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 184 >> 2] & 127](i5, i1);
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 184 >> 2] & 127](i6, i1);
 i5 = HEAP32[i6 >> 2] | 0;
 i6 = i1;
 if ((i26 | 0) <= (i5 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 172 >> 2] & 127](i1) | 0) | 0)) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 184 >> 2] & 127](i7, i1);
 i20 = HEAP32[i7 >> 2] | 0;
 i7 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 172 >> 2] & 127](i1) | 0) - i20 + i26 | 0;
 HEAP32[i3 + 8 >> 2] = i7;
 i26 = i1 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i21, i26);
 i1 = i2 + 12 | 0;
 HEAP32[i3 + 12 >> 2] = (HEAP32[i21 + 12 >> 2] | 0) - i29 - (HEAP32[i1 >> 2] | 0);
 __ZNK7WebCore6Widget9frameRectEv(i22, i26);
 HEAP32[i3 >> 2] = (HEAP32[i22 >> 2] | 0) - (i7 + i27) + (HEAP32[i22 + 8 >> 2] | 0);
 i22 = HEAP32[i2 + 4 >> 2] | 0;
 __ZNK7WebCore6Widget9frameRectEv(i23, i26);
 if ((i22 | 0) == (HEAP32[i23 + 4 >> 2] | 0)) {
  __ZNK7WebCore6Widget9frameRectEv(i24, i26);
  HEAP32[i3 + 4 >> 2] = (HEAP32[i1 >> 2] | 0) + (HEAP32[i24 + 4 >> 2] | 0);
  STACKTOP = i4;
  return;
 } else {
  __ZNK7WebCore6Widget9frameRectEv(i25, i26);
  HEAP32[i3 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore6WidgetEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore6WidgetEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i3;
   i17 = i7;
   i18 = i11;
   while (1) {
    if ((i18 | 0) == (i8 | 0)) {
     i19 = 8;
     break;
    }
    i20 = (i18 | 0) == -1 ? i17 : i15;
    i21 = (i14 | 0) == 0 ? i13 : i14;
    i22 = i21 + i16 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i14 = i21;
     i15 = i20;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
   if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   }
  }
 } while (0);
 i20 = i4 | 0;
 i4 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i12 | 0;
 i23 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = i4;
 do {
  if ((i23 | 0) != 0) {
   i4 = i23 + 4 | 0;
   i20 = i4 | 0;
   i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i20 >> 2] = i19;
    break;
   }
   i19 = i4 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
  }
 } while (0);
 i23 = i2 + 12 | 0;
 i19 = (HEAP32[i23 >> 2] | 0) + 1 | 0;
 HEAP32[i23 >> 2] = i19;
 i23 = i2 + 4 | 0;
 i4 = HEAP32[i23 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i19 << 1 | 0) < (i4 | 0)) {
  i25 = i12;
  i26 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i27 = 8;
  } else {
   i20 = i4 << 1;
   i27 = (i19 * 6 & -1 | 0) < (i20 | 0) ? i4 : i20;
  }
  i20 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore6WidgetEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i20;
  i26 = HEAP32[i23 >> 2] | 0;
 }
 i23 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i23;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore10ScrollView14scrollContentsERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 64 | 0;
 i9 = i3 + 80 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i1;
 i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 124 >> 2] & 127](i1) | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 31](i6, i1, 1);
 __ZNK7WebCore10ScrollView18rectToCopyOnScrollEv(i7, i1);
 i16 = i8;
 i17 = i6;
 HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i16 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
 HEAP32[i16 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
 HEAP32[i16 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 __ZN7WebCore7IntRect9intersectERKS0_(i8, i7);
 i17 = i15;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 31](i15, i8, 0);
 if ((HEAP8[i1 + 168 | 0] & 1) != 0) {
  i16 = HEAP32[i2 >> 2] | 0;
  i18 = (i16 | 0) > -1 ? i16 : -i16 | 0;
  i16 = HEAP32[i2 + 4 >> 2] | 0;
  i19 = (i16 | 0) > -1 ? i16 : -i16 | 0;
  i16 = ((i18 | 0) < (i19 | 0) ? i19 : i18) + 16 | 0;
  i18 = (HEAP32[i1 + 164 >> 2] | 0) - i16 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i1 + 160 >> 2] | 0) - i16;
  HEAP32[i10 + 4 >> 2] = i18;
  i18 = i9 + 8 | 0;
  i9 = i16 << 1;
  HEAP32[i18 >> 2] = i9;
  HEAP32[i18 + 4 >> 2] = i9;
  __ZN7WebCore7IntRect9intersectERKS0_(i11, i6);
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 12 >> 2] & 31](i15, i11, 0);
 }
 do {
  if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
   if ((HEAP8[i1 + 96 | 0] & 1) == 0) {
    i20 = 8;
    break;
   }
   i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + 288 >> 2] | 0;
   i9 = -(HEAP32[i2 + 4 >> 2] | 0) | 0;
   HEAP32[i12 >> 2] = -(HEAP32[i2 >> 2] | 0);
   HEAP32[i12 + 4 >> 2] = i9;
   if (FUNCTION_TABLE_iiiii[i11 & 3](i1, i12, i7, i6) | 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 292 >> 2] & 127](i1, i8);
  } else {
   i20 = 8;
  }
 } while (0);
 if ((i20 | 0) == 8) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 292 >> 2] & 127](i1, i8);
 }
 i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 124 >> 2] & 127](i1) | 0;
 do {
  if ((i8 | 0) != 0) {
   _memset(i4 | 0, 0, 16) | 0;
   _memset(i5 | 0, 0, 16) | 0;
   __ZN7WebCore10ScrollView33calculateOverhangAreasForPaintingERNS_7IntRectES2_(i1, i4, i5);
   do {
    if ((HEAP32[i4 + 8 >> 2] | 0) >= 1) {
     if ((HEAP32[i4 + 12 >> 2] | 0) < 1) {
      break;
     }
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 31](i8, i4, 0);
    }
   } while (0);
   if ((HEAP32[i5 + 8 >> 2] | 0) < 1) {
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] | 0) < 1) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 31](i8, i5, 0);
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 63](i1);
 i1 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
 _memset(i13 | 0, 0, 16) | 0;
 FUNCTION_TABLE_viii[i1 & 31](i15, i13, 1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ScrollView25setHasHorizontalScrollbarEbPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 56 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i2) {
  if (i9) {
   i10 = 0;
   STACKTOP = i4;
   return i10 | 0;
  }
  i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 220 >> 2] & 127](i8) | 0;
  i8 = i1 + 36 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 31](i8, HEAP32[i7 >> 2] | 0, 0);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 127](i1, HEAP32[i7 >> 2] | 0);
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  do {
   if ((i8 | 0) != 0) {
    i11 = i8 + 4 | 0;
    i12 = i11 | 0;
    i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    if ((i13 | 0) != 0) {
     HEAP32[i12 >> 2] = i13;
     break;
    }
    i13 = i11 - 4 | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
   }
  } while (0);
  if ((i3 | 0) == 0) {
   i10 = 1;
   STACKTOP = i4;
   return i10 | 0;
  }
  HEAP8[i3] = i2 & 1 ^ 1;
  i10 = 1;
  STACKTOP = i4;
  return i10 | 0;
 }
 if (!i9) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 160 >> 2] & 31](i5, i1, 0);
 i9 = i5 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i8 = i5 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i8 >> 2] = i13;
    break;
   }
   i13 = i5 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 + 4 | 0;
   i13 = i9 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i13 >> 2] = i5;
    break;
   }
   i5 = i9 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i13 = i5 + 4 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 FUNCTION_TABLE_vii[i2 & 127](i1, i6);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 + 4 | 0;
   i2 = i9 | 0;
   i13 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i2 >> 2] = i13;
    break;
   }
   i13 = i9 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 i6 = i1 + 36 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 31](i6, HEAP32[i7 >> 2] | 0, 0);
 i6 = HEAP32[i7 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 200 >> 2] & 63](i6);
 if ((i3 | 0) == 0) {
  i10 = 1;
  STACKTOP = i4;
  return i10 | 0;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP8[i3] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 220 >> 2] & 127](i6) | 0) & 1 ^ 1;
 i10 = 1;
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN7WebCore10ScrollView23setHasVerticalScrollbarEbPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 60 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (!i2) {
  if (i9) {
   i10 = 0;
   STACKTOP = i4;
   return i10 | 0;
  }
  i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 220 >> 2] & 127](i8) | 0;
  i8 = i1 + 36 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 31](i8, HEAP32[i7 >> 2] | 0, 1);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 127](i1, HEAP32[i7 >> 2] | 0);
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  do {
   if ((i8 | 0) != 0) {
    i11 = i8 + 4 | 0;
    i12 = i11 | 0;
    i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    if ((i13 | 0) != 0) {
     HEAP32[i12 >> 2] = i13;
     break;
    }
    i13 = i11 - 4 | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
   }
  } while (0);
  if ((i3 | 0) == 0) {
   i10 = 1;
   STACKTOP = i4;
   return i10 | 0;
  }
  HEAP8[i3] = i2 & 1 ^ 1;
  i10 = 1;
  STACKTOP = i4;
  return i10 | 0;
 }
 if (!i9) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 160 >> 2] & 31](i5, i1, 1);
 i9 = i5 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i8 = i5 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i8 >> 2] = i13;
    break;
   }
   i13 = i5 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 + 4 | 0;
   i13 = i9 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i13 >> 2] = i5;
    break;
   }
   i5 = i9 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i13 = i5 + 4 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 FUNCTION_TABLE_vii[i2 & 127](i1, i6);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 + 4 | 0;
   i2 = i9 | 0;
   i13 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i2 >> 2] = i13;
    break;
   }
   i13 = i9 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 i6 = i1 + 36 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 31](i6, HEAP32[i7 >> 2] | 0, 1);
 i6 = HEAP32[i7 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 200 >> 2] & 63](i6);
 if ((i3 | 0) == 0) {
  i10 = 1;
  STACKTOP = i4;
  return i10 | 0;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP8[i3] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 220 >> 2] & 127](i6) | 0) & 1 ^ 1;
 i10 = 1;
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN7WebCore10ScrollView11removeChildEPNS_6WidgetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] & 127](i2, 0);
 i3 = i1 + 76 | 0;
 i4 = (i2 | 0) == 0;
 if (!i4) {
  i5 = i2 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i1 + 80 >> 2] | 0;
  i7 = i6 << 2 | 0;
  i8 = 0;
  i9 = i6;
 } else {
  i6 = HEAP32[i1 + 84 >> 2] | 0;
  i10 = i2;
  i11 = i10 + ~(i10 << 15) | 0;
  i10 = (i11 >>> 10 ^ i11) * 9 & -1;
  i11 = i10 >>> 6 ^ i10;
  i10 = i11 + ~(i11 << 11) | 0;
  i11 = i10 >>> 16 ^ i10;
  i10 = i6 & i11;
  i12 = i5 + (i10 << 2) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  L7 : do {
   if ((i13 | 0) == (i2 | 0)) {
    i14 = i12;
   } else {
    i15 = (i11 >>> 23) + ~i11 | 0;
    i16 = i15 << 12 ^ i15;
    i15 = i16 >>> 7 ^ i16;
    i16 = i15 << 2 ^ i15;
    i15 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i17 = i10;
    i18 = i13;
    while (1) {
     if ((i18 | 0) == 0) {
      i14 = 0;
      break L7;
     }
     i19 = (i16 | 0) == 0 ? i15 : i16;
     i20 = i19 + i17 & i6;
     i21 = i5 + (i20 << 2) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i2 | 0)) {
      i14 = i21;
      break;
     } else {
      i16 = i19;
      i17 = i20;
      i18 = i22;
     }
    }
   }
  } while (0);
  i6 = HEAP32[i1 + 80 >> 2] | 0;
  i7 = (i14 | 0) == 0 ? i5 + (i6 << 2) | 0 : i14;
  i8 = i5;
  i9 = i6;
 }
 i6 = i3 | 0;
 i3 = i1 + 80 | 0;
 do {
  if ((i7 | 0) != (i8 + (i9 << 2) | 0)) {
   i5 = i7 | 0;
   i14 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i13 = i14 + 4 | 0;
     i10 = i13 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i10 >> 2] = i11;
      break;
     }
     i11 = i13 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
    }
   } while (0);
   HEAP32[i5 >> 2] = -1;
   i14 = i1 + 92 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   i14 = i1 + 88 | 0;
   i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i11;
   i14 = HEAP32[i3 >> 2] | 0;
   if (!((i11 * 6 & -1 | 0) < (i14 | 0) & (i14 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableINS_6RefPtrIN7WebCore6WidgetEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i6, (i14 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 if (i4) {
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i2 >> 2] = i6;
  return;
 }
 i6 = i4 - 4 | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 return;
}
function __ZNK7WebCore10ScrollView16scrollCornerRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
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
 _memset(i1 | 0, 0, 16) | 0;
 if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i2 + 36 | 0) | 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i2 + 56 | 0;
 do {
  if ((HEAP32[i12 >> 2] | 0) != 0) {
   i13 = i2 | 0;
   __ZNK7WebCore6Widget9frameRectEv(i8, i13);
   i14 = HEAP32[i8 + 8 >> 2] | 0;
   i15 = HEAP32[i12 >> 2] | 0;
   if ((i14 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 104 >> 2] & 127](i15) | 0) | 0) <= 0) {
    break;
   }
   i15 = HEAP32[i12 >> 2] | 0;
   i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 104 >> 2] & 127](i15) | 0;
   __ZNK7WebCore6Widget9frameRectEv(i7, i13);
   i15 = HEAP32[i7 + 12 >> 2] | 0;
   i16 = HEAP32[i12 >> 2] | 0;
   i17 = i15 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 108 >> 2] & 127](i16) | 0) | 0;
   __ZNK7WebCore6Widget9frameRectEv(i6, i13);
   i13 = HEAP32[i6 + 8 >> 2] | 0;
   i16 = HEAP32[i12 >> 2] | 0;
   i15 = i13 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 104 >> 2] & 127](i16) | 0) | 0;
   i16 = HEAP32[i12 >> 2] | 0;
   i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 108 >> 2] & 127](i16) | 0;
   HEAP32[i10 >> 2] = i14;
   HEAP32[i10 + 4 >> 2] = i17;
   HEAP32[i10 + 8 >> 2] = i15;
   HEAP32[i10 + 12 >> 2] = i13;
   __ZN7WebCore7IntRect5uniteERKS0_(i1, i10);
  }
 } while (0);
 i10 = i2 + 60 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i5, i12);
 i2 = HEAP32[i5 + 12 >> 2] | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 if ((i2 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 127](i5) | 0) | 0) <= 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Widget9frameRectEv(i4, i12);
 i5 = HEAP32[i4 + 8 >> 2] | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 i2 = i5 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 104 >> 2] & 127](i4) | 0) | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 108 >> 2] & 127](i4) | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 104 >> 2] & 127](i4) | 0;
 __ZNK7WebCore6Widget9frameRectEv(i9, i12);
 i12 = HEAP32[i9 + 12 >> 2] | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 i10 = i12 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 108 >> 2] & 127](i9) | 0) | 0;
 HEAP32[i11 >> 2] = i2;
 HEAP32[i11 + 4 >> 2] = i5;
 HEAP32[i11 + 8 >> 2] = i6;
 HEAP32[i11 + 12 >> 2] = i10;
 __ZN7WebCore7IntRect5uniteERKS0_(i1, i11);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ScrollView24isPointInScrollbarCornerERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 56 | 0;
 i9 = i3 + 72 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 104 | 0;
 i12 = i3 + 120 | 0;
 i13 = i3 + 136 | 0;
 i14 = i3 + 152 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 220 >> 2] & 127](i1) | 0)) {
  i15 = 0;
  STACKTOP = i3;
  return i15 | 0;
 }
 __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_8IntPointE(i4, i1 | 0, i2);
 i2 = i1 + 56 | 0;
 i16 = HEAP32[i2 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i17 = i1 + 60 | 0;
  i1 = HEAP32[i17 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 127](i10, i1);
  i1 = HEAP32[i10 >> 2] | 0;
  i10 = HEAP32[i17 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 128 >> 2] & 127](i11, i10);
  i10 = HEAP32[i11 >> 2] | 0;
  i11 = HEAP32[i17 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 128 >> 2] & 127](i12, i11);
  i11 = HEAP32[i12 + 8 >> 2] | 0;
  i12 = HEAP32[i17 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 128 >> 2] & 127](i13, i12);
  i12 = HEAP32[i13 + 4 >> 2] | 0;
  i13 = HEAP32[i17 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 128 >> 2] & 127](i14, i13);
  i13 = HEAP32[i4 >> 2] | 0;
  if ((i13 | 0) <= (i1 | 0)) {
   i15 = 0;
   STACKTOP = i3;
   return i15 | 0;
  }
  if ((i13 | 0) >= (i11 + i10 | 0)) {
   i15 = 0;
   STACKTOP = i3;
   return i15 | 0;
  }
  i15 = (HEAP32[i4 + 4 >> 2] | 0) > ((HEAP32[i14 + 12 >> 2] | 0) + i12 | 0);
  STACKTOP = i3;
  return i15 | 0;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 128 >> 2] & 127](i5, i16);
  i16 = HEAP32[i5 + 4 >> 2] | 0;
  i5 = HEAP32[i2 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 128 >> 2] & 127](i6, i5);
  i5 = HEAP32[i6 + 4 >> 2] | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 128 >> 2] & 127](i7, i6);
  i6 = HEAP32[i7 + 12 >> 2] | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 128 >> 2] & 127](i8, i7);
  i7 = HEAP32[i8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 128 >> 2] & 127](i9, i8);
  i8 = HEAP32[i4 + 4 >> 2] | 0;
  if ((i8 | 0) <= (i16 | 0)) {
   i15 = 0;
   STACKTOP = i3;
   return i15 | 0;
  }
  if ((i8 | 0) >= (i6 + i5 | 0)) {
   i15 = 0;
   STACKTOP = i3;
   return i15 | 0;
  }
  i15 = (HEAP32[i4 >> 2] | 0) > ((HEAP32[i9 + 8 >> 2] | 0) + i7 | 0);
  STACKTOP = i3;
  return i15 | 0;
 }
 return 0;
}
function __ZN7WebCore10ScrollView23positionScrollbarLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = i1 + 36 | 0;
 i13 = i12;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 172 >> 2] & 127](i12) | 0;
 i15 = i1;
 __ZN7WebCoreL22positionScrollbarLayerEPNS_13GraphicsLayerEPNS_9ScrollbarE(i14, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 140 >> 2] & 127](i1) | 0);
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 176 >> 2] & 127](i12) | 0;
 __ZN7WebCoreL22positionScrollbarLayerEPNS_13GraphicsLayerEPNS_9ScrollbarE(i14, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 144 >> 2] & 127](i1) | 0);
 i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 200 >> 2] & 127](i12) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 224 >> 2] & 127](i11, i1);
 i1 = i8;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i12 = i9 + 8 | 0;
 if ((HEAP32[i12 >> 2] | 0) < 1) {
  i16 = 0;
 } else {
  i16 = (HEAP32[i11 + 12 >> 2] | 0) > 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 92 >> 2] & 127](i15, i16);
 i16 = HEAP32[(HEAP32[i15 >> 2] | 0) + 56 >> 2] | 0;
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i4 + 4 >> 2] = i11;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i3, i4);
 FUNCTION_TABLE_vii[i16 & 127](i15, i3);
 i3 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i6 + 4 >> 2] = i3;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i5, i6);
 if (+HEAPF32[i5 >> 2] != +HEAPF32[i15 + 40 >> 2]) {
  i17 = 6;
 } else {
  if (+HEAPF32[i5 + 4 >> 2] != +HEAPF32[i15 + 44 >> 2]) {
   i17 = 6;
  }
 }
 if ((i17 | 0) == 6) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 124 >> 2] & 63](i15);
 }
 i17 = HEAP32[(HEAP32[i15 >> 2] | 0) + 68 >> 2] | 0;
 i5 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i8 + 4 >> 2] = i5;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i7, i1);
 FUNCTION_TABLE_vii[i17 & 127](i15, i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10ScrollView18paintPanScrollIconEPNS_15GraphicsContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if (!(HEAP8[H_BASE + 560 | 0] | 0)) {
  __ZN7WebCore5Image20loadPlatformResourceEPKc(i6, H_BASE + 8 | 0);
  i12 = i6 | 0;
  i6 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[H_BASE + 568 >> 2] = i6;
  HEAP8[H_BASE + 560 | 0] = 1;
 }
 i6 = i1 + 160 | 0;
 i12 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i12;
 i12 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = HEAP32[H_BASE + 568 >> 2] | 0;
  i14 = i11 | 0;
  HEAP32[i14 >> 2] = 0;
  i15 = i11 + 4 | 0;
  HEAP32[i15 >> 2] = 1;
  __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_8IntPointENS_17CompositeOperatorENS_27ImageOrientationDescriptionE(i2, i13, 0, i8, 2, i11);
  STACKTOP = i3;
  return;
 }
 i1 = i12 | 0;
 if ((HEAP8[i12 + 172 | 0] & 1) == 0) {
  __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_8IntPointE(i5, i1, i8);
  i6 = i4 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 164 >> 2] & 31](i4, i12, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  i16 = HEAP32[i6 + 4 >> 2] | 0;
  i6 = i12 + 36 | 0;
  i12 = i16 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 124 >> 2] & 127](i6) | 0) | 0;
  i6 = i12 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
  HEAP32[i9 >> 2] = (HEAP32[i5 >> 2] | 0) + i4;
  HEAP32[i10 + 4 >> 2] = i6;
 } else {
  __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_8IntPointE(i10, i1, i8);
 }
 i1 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i7 + 4 >> 2] = i1;
 i13 = HEAP32[H_BASE + 568 >> 2] | 0;
 i14 = i11 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i11 + 4 | 0;
 HEAP32[i15 >> 2] = 1;
 __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_8IntPointENS_17CompositeOperatorENS_27ImageOrientationDescriptionE(i2, i13, 0, i8, 2, i11);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL22positionScrollbarLayerEPNS_13GraphicsLayerEPNS_9ScrollbarE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((i1 | 0) == 0 | (i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i14 = i4 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 128 >> 2] & 127](i5, i2);
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] | 0;
 i15 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i7 + 4 >> 2] = i15;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i6, i7);
 FUNCTION_TABLE_vii[i2 & 127](i1, i6);
 i6 = i4 + 8 | 0;
 i4 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i9 + 4 >> 2] = i4;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i8, i9);
 do {
  if (+HEAPF32[i8 >> 2] == +HEAPF32[i1 + 40 >> 2]) {
   if (+HEAPF32[i8 + 4 >> 2] != +HEAPF32[i1 + 44 >> 2]) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] | 0;
 i9 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i11 + 4 >> 2] = i9;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i10, i12);
 FUNCTION_TABLE_vii[i8 & 127](i1, i10);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 196 >> 2] & 127](i1) | 0) {
  i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + 144 >> 2] | 0;
  i8 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i5 + 12 >> 2] | 0;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  HEAP32[i13 + 8 >> 2] = i8;
  HEAP32[i13 + 12 >> 2] = i6;
  FUNCTION_TABLE_vii[i10 & 127](i1, i13);
  STACKTOP = i3;
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 127](i1, 1);
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 63](i1);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore10ScrollView14overhangAmountEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i1 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 i1 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 192 >> 2] & 127](i7, i2);
 i14 = i2 + 36 | 0;
 i15 = (HEAP32[i2 + 52 >> 2] | 0) + (HEAP32[i7 + 4 >> 2] | 0) | 0;
 do {
  if ((i15 | 0) < 0) {
   HEAP32[i13 >> 2] = i15;
  } else {
   __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i8, i14);
   if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i9, i14);
   i7 = HEAP32[i9 + 4 >> 2] | 0;
   i16 = i2;
   if ((i15 | 0) <= (i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 176 >> 2] & 127](i2) | 0) | 0)) {
    break;
   }
   __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i10, i14);
   i7 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = i15 - i7 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 176 >> 2] & 127](i2) | 0);
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 192 >> 2] & 127](i11, i2);
 i1 = (HEAP32[i2 + 48 >> 2] | 0) + (HEAP32[i11 >> 2] | 0) | 0;
 if ((i1 | 0) < 0) {
  HEAP32[i12 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i11 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 184 >> 2] & 127](i4, i2);
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 184 >> 2] & 127](i5, i2);
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = i2;
 if ((i1 | 0) <= (i4 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 172 >> 2] & 127](i2) | 0) | 0)) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 184 >> 2] & 127](i6, i2);
 i11 = HEAP32[i6 >> 2] | 0;
 HEAP32[i12 >> 2] = i1 - i11 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 172 >> 2] & 127](i2) | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ScrollView23repaintContentRectangleERKNS_7IntRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i7;
 i11 = i2;
 HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 do {
  if ((HEAP8[i1 + 171 | 0] & 1) != 0) {
   if ((HEAP8[i1 + 170 | 0] & 1) != 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i8, i1, 0);
   __ZN7WebCore7IntRect9intersectERKS0_(i7, i8);
  }
 } while (0);
 if ((HEAP32[i7 + 8 >> 2] | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 12 >> 2] | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 i8 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 63](i1);
  STACKTOP = i4;
  return;
 }
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 127](i1) | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] | 0;
 i12 = i6;
 if ((HEAP8[i1 + 172 | 0] & 1) == 0) {
  HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i12 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i12 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i12 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  i10 = i5 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i5, i1, 0);
  i5 = HEAP32[i10 >> 2] | 0;
  i12 = HEAP32[i10 + 4 >> 2] | 0;
  i10 = i1 + 36 | 0;
  i1 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 124 >> 2] & 127](i10) | 0) - i12 | 0;
  i12 = i6 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - i5;
  i5 = i6 + 4 | 0;
  HEAP32[i5 >> 2] = i1 + (HEAP32[i5 >> 2] | 0);
  __ZNK7WebCore6Widget25convertToContainingWindowERKNS_7IntRectE(i9, i8, i6);
 } else {
  __ZNK7WebCore6Widget25convertToContainingWindowERKNS_7IntRectE(i9, i8, i7);
 }
 FUNCTION_TABLE_viii[i2 & 31](i11, i9, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10ScrollView17setScrollPositionERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((HEAP8[i1 + 74 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 172 | 0] & 1) != 0) {
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 127](i1) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 24 >> 2] & 127](i10, i2);
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 44 >> 2] & 1 | 0) == 0) {
  i10 = i2;
  i11 = HEAP32[i10 + 4 >> 2] | 0;
  i12 = HEAP32[i10 >> 2] | 0;
  i13 = i1;
 } else {
  i10 = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 196 >> 2] & 127](i4, i1);
  i14 = HEAP32[i2 >> 2] | 0;
  i15 = HEAP32[i4 >> 2] | 0;
  i16 = (i14 | 0) < (i15 | 0) ? i14 : i15;
  i15 = HEAP32[i2 + 4 >> 2] | 0;
  i2 = HEAP32[i4 + 4 >> 2] | 0;
  i4 = (i15 | 0) < (i2 | 0) ? i15 : i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 200 >> 2] & 127](i5, i1);
  i2 = HEAP32[i5 >> 2] | 0;
  i15 = HEAP32[i5 + 4 >> 2] | 0;
  i11 = ((i4 | 0) > (i15 | 0) ? i4 : i15) | 0;
  i12 = ((i16 | 0) > (i2 | 0) ? i16 : i2) | 0;
  i13 = i10;
 }
 HEAP32[i6 >> 2] = i12;
 HEAP32[i6 + 4 >> 2] = i11;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 192 >> 2] & 127](i8, i1);
 i13 = i6;
 do {
  if ((i12 | 0) == (HEAP32[i8 >> 2] | 0)) {
   if ((i11 | 0) != (HEAP32[i8 + 4 >> 2] | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i8 = i1 + 36 | 0;
 if (FUNCTION_TABLE_iii[HEAP32[HEAP32[i8 >> 2] >> 2] & 15](i8, i7) | 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i9 + 4 >> 2] = i8;
 __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i1, i9);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ScrollView16scrollbarAtPointERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_8IntPointE(i4, i1 | 0, i2);
 i2 = i1 + 56 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if (!(__ZN7WebCore9Scrollbar29shouldParticipateInHitTestingEv(i8) | 0)) {
    break;
   }
   i9 = HEAP32[i2 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 128 >> 2] & 127](i5, i9);
   i9 = HEAP32[i4 >> 2] | 0;
   i10 = HEAP32[i4 + 4 >> 2] | 0;
   i11 = HEAP32[i5 >> 2] | 0;
   if ((i11 | 0) > (i9 | 0)) {
    break;
   }
   if (((HEAP32[i5 + 8 >> 2] | 0) + i11 | 0) <= (i9 | 0)) {
    break;
   }
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i9 | 0) > (i10 | 0)) {
    break;
   }
   if (((HEAP32[i5 + 12 >> 2] | 0) + i9 | 0) <= (i10 | 0)) {
    break;
   }
   i7 = HEAP32[i2 >> 2] | 0;
   STACKTOP = i3;
   return i7 | 0;
  }
 } while (0);
 i2 = i1 + 60 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 if (!(__ZN7WebCore9Scrollbar29shouldParticipateInHitTestingEv(i1) | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 127](i6, i1);
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) > (i1 | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 if (((HEAP32[i6 + 8 >> 2] | 0) + i4 | 0) <= (i1 | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i1 | 0) > (i5 | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 if (((HEAP32[i6 + 12 >> 2] | 0) + i1 | 0) <= (i5 | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 }
 i7 = i2 + 100 | 0;
 do {
  if ((HEAP32[i2 + 108 >> 2] | 0) >= 1) {
   if ((HEAP32[i2 + 112 >> 2] | 0) < 1) {
    break;
   }
   i8 = i1;
   i9 = i7;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZNK7WebCore10ScrollView26unscaledVisibleContentSizeENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i6, i2, i3);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i5, i6);
 d10 = +1 / +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i2 >> 2] | 0) + 180 >> 2] & 3](i2);
 i6 = i5 | 0;
 d11 = d10 * +HEAPF32[i6 >> 2];
 HEAPF32[i6 >> 2] = d11;
 i6 = i5 + 4 | 0;
 d12 = d10 * +HEAPF32[i6 >> 2];
 HEAPF32[i6 >> 2] = d12;
 i6 = HEAP32[i2 + 116 >> 2] | 0;
 i5 = HEAP32[i2 + 120 >> 2] | 0;
 d10 = +Math_ceil(d11);
 do {
  if (d10 < +2147483647) {
   if (d10 <= +-2147483648) {
    i13 = 0;
    i14 = -2147483648;
    break;
   }
   i13 = 0;
   i14 = ~~d10;
  } else {
   i13 = 0;
   i14 = 2147483647;
  }
 } while (0);
 d10 = +Math_ceil(d12);
 do {
  if (d10 < +2147483647) {
   if (d10 <= +-2147483648) {
    i15 = -2147483648;
    i16 = 0;
    break;
   }
   i15 = ~~d10;
   i16 = 0;
  } else {
   i15 = 2147483647;
   i16 = 0;
  }
 } while (0);
 i2 = i1;
 HEAP32[i2 >> 2] = i6;
 HEAP32[i2 + 4 >> 2] = i5;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = i16 | i14;
 HEAP32[i5 + 4 >> 2] = i15 | i13;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore6WidgetEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = i2;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 i5 = i6 & i4;
 i7 = i3 + (i5 << 2) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
   i10 = i7;
   i11 = 3;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = 0;
   i15 = i5;
   i16 = i7;
   i17 = i8;
   while (1) {
    if ((i17 | 0) == (i2 | 0)) {
     i18 = i16;
     break L1;
    }
    i19 = (i17 | 0) == -1 ? i16 : i13;
    i20 = (i14 | 0) == 0 ? i12 : i14;
    i21 = i20 + i15 & i4;
    i22 = i3 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i9 = i19;
     i10 = i22;
     i11 = 3;
     break;
    } else {
     i13 = i19;
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
    }
   }
  }
 } while (0);
 if ((i11 | 0) == 3) {
  i18 = (i9 | 0) != 0 ? i9 : i10;
 }
 i10 = i18 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 + 4 | 0;
   i3 = i11 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i11 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i10 >> 2] = i9;
 return i18 | 0;
}
function __ZNK7WebCore10ScrollView26unscaledVisibleContentSizeENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if ((HEAP32[i2 + 108 >> 2] | 0) >= 1) {
   if ((HEAP32[i2 + 112 >> 2] | 0) < 1) {
    break;
   }
   i8 = i2 + 108 | 0;
   i9 = i1;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i9 + 4 >> 2] = i10;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i3 | 0) == 0) {
   i10 = i2;
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 144 >> 2] & 127](i2) | 0;
   do {
    if ((i9 | 0) == 0) {
     i11 = 0;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 220 >> 2] & 127](i9) | 0) {
      i11 = 0;
      break;
     }
     i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 104 >> 2] & 127](i9) | 0;
    }
   } while (0);
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 140 >> 2] & 127](i2) | 0;
   if ((i9 | 0) == 0) {
    i12 = i11;
    i13 = 0;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 220 >> 2] & 127](i9) | 0) {
    i12 = i11;
    i13 = 0;
    break;
   }
   i12 = i11;
   i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 108 >> 2] & 127](i9) | 0;
  } else {
   i12 = 0;
   i13 = 0;
  }
 } while (0);
 __ZNK7WebCore6Widget9frameRectEv(i5, i7);
 i11 = (HEAP32[i5 + 8 >> 2] | 0) - i12 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i6, i7);
 i7 = (HEAP32[i6 + 12 >> 2] | 0) - i13 | 0;
 HEAP32[i1 >> 2] = (i11 | 0) > 0 ? i11 : 0;
 HEAP32[i1 + 4 >> 2] = (i7 | 0) > 0 ? i7 : 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore6WidgetEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i10 << 2) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore6WidgetEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i13 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 + 4 | 0;
    i3 = i10 | 0;
    i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i6 | 0) != 0) {
     HEAP32[i3 >> 2] = i6;
     break;
    }
    i6 = i10 - 4 | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore10ScrollView15setContentsSizeERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 56 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 127](i7, i1);
 do {
  if ((HEAP32[i7 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if ((HEAP32[i7 + 4 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i7 = i2;
 i2 = i1 + 140 | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i2 + 4 >> 2] = i9;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  i9 = i4 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i4, i1, 0);
  i4 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i8 + 4 >> 2] = i4;
  __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i1, i8);
 }
 i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 127](i1) | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 _memset(i5 | 0, 0, 16) | 0;
 _memset(i6 | 0, 0, 16) | 0;
 __ZN7WebCore10ScrollView33calculateOverhangAreasForPaintingERNS_7IntRectES2_(i1, i5, i6);
 do {
  if ((HEAP32[i5 + 8 >> 2] | 0) >= 1) {
   if ((HEAP32[i5 + 12 >> 2] | 0) < 1) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 31](i8, i5, 0);
  }
 } while (0);
 if ((HEAP32[i6 + 8 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i6 + 12 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 31](i8, i6, 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ScrollViewD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 HEAP32[i1 + 36 >> 2] = H_BASE + 344;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 80 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 __ZN7WebCore14ScrollableAreaD2Ev(i1 + 36 | 0);
 __ZN7WebCore6WidgetD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore10ScrollViewD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 HEAP32[i1 + 36 >> 2] = H_BASE + 344;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 80 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 __ZN7WebCore14ScrollableAreaD2Ev(i1 + 36 | 0);
 __ZN7WebCore6WidgetD2Ev(i1 | 0);
 return;
}
function __ZNK7WebCore10ScrollView18rectToCopyOnScrollEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 172 >> 2] & 127](i2) | 0;
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 176 >> 2] & 127](i2) | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = i6;
 HEAP32[i4 + 12 >> 2] = i7;
 __ZNK7WebCore6Widget17convertToRootViewERKNS_7IntRectE(i1, i2 | 0, i4);
 i4 = i2 + 36 | 0;
 if (!(__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i4) | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = i2;
 do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 144 >> 2] & 127](i2) | 0) == 0) {
   i8 = 0;
  } else {
   if (__ZNK7WebCore14ScrollableArea28hasLayerForVerticalScrollbarEv(i4) | 0) {
    i8 = 0;
    break;
   }
   i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 144 >> 2] & 127](i2) | 0;
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 104 >> 2] & 127](i6) | 0;
  }
 } while (0);
 do {
  if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 140 >> 2] & 127](i2) | 0) == 0) {
   i9 = 0;
  } else {
   if (__ZNK7WebCore14ScrollableArea30hasLayerForHorizontalScrollbarEv(i4) | 0) {
    i9 = 0;
    break;
   }
   i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 140 >> 2] & 127](i2) | 0;
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 108 >> 2] & 127](i6) | 0;
  }
 } while (0);
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - i8;
 i8 = i1 + 12 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) - i9;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore10ScrollView16contentsToScreenERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 124 >> 2] & 127](i2) | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
  i9 = i1;
  i10 = i3;
  HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  STACKTOP = i4;
  return;
 }
 if ((i8 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 } else {
  i10 = HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0;
  i9 = i6;
  i11 = i3;
  HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  i11 = i5 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i5, i2, 0);
  i5 = HEAP32[i11 >> 2] | 0;
  i9 = HEAP32[i11 + 4 >> 2] | 0;
  i11 = i2 + 36 | 0;
  i3 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 124 >> 2] & 127](i11) | 0) - i9 | 0;
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - i5;
  i5 = i6 + 4 | 0;
  HEAP32[i5 >> 2] = i3 + (HEAP32[i5 >> 2] | 0);
  __ZNK7WebCore6Widget17convertToRootViewERKNS_7IntRectE(i7, i2 | 0, i6);
  FUNCTION_TABLE_viii[i10 & 31](i1, i8, i7);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore10ScrollView12setFrameRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i5 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i1 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i5, i8);
 i9 = i2;
 do {
  if ((HEAP32[i9 >> 2] | 0) == (HEAP32[i6 >> 2] | 0) & (HEAP32[i9 + 4 >> 2] | 0) == (HEAP32[i6 + 4 >> 2] | 0)) {
   i10 = i2 + 8 | 0;
   i11 = i5 + 8 | 0;
   if ((HEAP32[i10 >> 2] | 0) != (HEAP32[i11 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i10 + 4 >> 2] | 0) != (HEAP32[i11 + 4 >> 2] | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore6Widget12setFrameRectERKNS_7IntRectE(i8, i2);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 68 >> 2] & 63](i1);
 i8 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i4, i1, 0);
 i4 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = i4;
 __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i1, i7);
 if ((HEAP8[i1 + 169 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i5 + 8 | 0;
 i5 = i2 + 8 | 0;
 if (!((HEAP32[i7 >> 2] | 0) != (HEAP32[i5 >> 2] | 0) | (HEAP32[i7 + 4 >> 2] | 0) != (HEAP32[i5 + 4 >> 2] | 0))) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 36 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 63](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ScrollView4hideEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 | 0;
 i3 = i1 + 16 | 0;
 if ((HEAP8[i3] & 1) == 0) {
  __ZN7WebCore6Widget4hideEv(i2);
  return;
 }
 L4 : do {
  if ((HEAP8[i1 + 17 | 0] & 1) != 0) {
   i4 = HEAP32[i1 + 76 >> 2] | 0;
   i5 = HEAP32[i1 + 80 >> 2] | 0;
   i6 = i4 + (i5 << 2) | 0;
   if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
    break;
   }
   L7 : do {
    if ((i5 | 0) == 0) {
     i7 = i4;
    } else {
     i8 = i4;
     while (1) {
      i9 = HEAP32[i8 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i7 = i8;
       break L7;
      }
      i8 = i8 + 4 | 0;
      if ((i8 | 0) == (i6 | 0)) {
       break L4;
      }
     }
    }
   } while (0);
   if ((i7 | 0) == (i6 | 0)) {
    break;
   } else {
    i10 = i7;
   }
   while (1) {
    i4 = HEAP32[i10 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] & 127](i4, 0);
    i4 = i10 + 4 | 0;
    if ((i4 | 0) == (i6 | 0)) {
     break L4;
    } else {
     i11 = i4;
    }
    while (1) {
     i4 = HEAP32[i11 >> 2] | 0;
     if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
      break;
     }
     i4 = i11 + 4 | 0;
     if ((i4 | 0) == (i6 | 0)) {
      break L4;
     } else {
      i11 = i4;
     }
    }
    if ((i11 | 0) == (i6 | 0)) {
     break;
    } else {
     i10 = i11;
    }
   }
  }
 } while (0);
 HEAP8[i3] = 0;
 __ZN7WebCore6Widget4hideEv(i2);
 return;
}
function __ZN7WebCore10ScrollView16setParentVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 17 | 0;
 if (!((HEAP8[i3] & 1) != 0 ^ i2)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 if ((HEAP8[i1 + 16 | 0] & 1) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 76 >> 2] | 0;
 i4 = HEAP32[i1 + 80 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
  return;
 }
 L10 : do {
  if ((i4 | 0) == 0) {
   i6 = i3;
  } else {
   i1 = i3;
   while (1) {
    i7 = HEAP32[i1 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i1;
     break L10;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i5 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i6 | 0) == (i5 | 0)) {
  return;
 } else {
  i8 = i6;
 }
 L18 : while (1) {
  i6 = HEAP32[i8 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] & 127](i6, i2);
  i6 = i8 + 4 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   i9 = 13;
   break;
  } else {
   i10 = i6;
  }
  while (1) {
   i6 = HEAP32[i10 >> 2] | 0;
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    break;
   }
   i6 = i10 + 4 | 0;
   if ((i6 | 0) == (i5 | 0)) {
    i9 = 18;
    break L18;
   } else {
    i10 = i6;
   }
  }
  if ((i10 | 0) == (i5 | 0)) {
   i9 = 17;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 13) {
  return;
 } else if ((i9 | 0) == 17) {
  return;
 } else if ((i9 | 0) == 18) {
  return;
 }
}
function __ZN7WebCore10ScrollView4showEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 | 0;
 i3 = i1 + 16 | 0;
 L1 : do {
  if ((HEAP8[i3] & 1) == 0) {
   HEAP8[i3] = 1;
   if ((HEAP8[i1 + 17 | 0] & 1) == 0) {
    break;
   }
   i4 = HEAP32[i1 + 76 >> 2] | 0;
   i5 = HEAP32[i1 + 80 >> 2] | 0;
   i6 = i4 + (i5 << 2) | 0;
   if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
    break;
   }
   L5 : do {
    if ((i5 | 0) == 0) {
     i7 = i4;
    } else {
     i8 = i4;
     while (1) {
      i9 = HEAP32[i8 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i7 = i8;
       break L5;
      }
      i8 = i8 + 4 | 0;
      if ((i8 | 0) == (i6 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i7 | 0) == (i6 | 0)) {
    break;
   } else {
    i10 = i7;
   }
   while (1) {
    i4 = HEAP32[i10 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] & 127](i4, 1);
    i4 = i10 + 4 | 0;
    if ((i4 | 0) == (i6 | 0)) {
     break L1;
    } else {
     i11 = i4;
    }
    while (1) {
     i4 = HEAP32[i11 >> 2] | 0;
     if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
      break;
     }
     i4 = i11 + 4 | 0;
     if ((i4 | 0) == (i6 | 0)) {
      break L1;
     } else {
      i11 = i4;
     }
    }
    if ((i11 | 0) == (i6 | 0)) {
     break;
    } else {
     i10 = i11;
    }
   }
  }
 } while (0);
 __ZN7WebCore6Widget4showEv(i2);
 return;
}
function __ZN7WebCore10ScrollView20setCanHaveScrollbarsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = (HEAP32[i1 + 12 >> 2] | 0) == 0;
 if (i6) {
  i7 = HEAP32[i1 + 68 >> 2] | 0;
  i8 = HEAP32[i1 + 64 >> 2] | 0;
 } else {
  i7 = 0;
  i8 = 0;
 }
 if (i2) {
  i9 = (i7 | 0) == 1 ? 0 : i7;
  i10 = (i8 | 0) == 1 ? 0 : i8;
 } else {
  i9 = 1;
  i10 = 1;
 }
 if (i6) {
  i11 = HEAP32[i1 + 64 >> 2] | 0;
 } else {
  i11 = 0;
 }
 do {
  if ((i11 | 0) == (i10 | 0)) {
   i12 = 0;
  } else {
   if ((HEAP8[i1 + 72 | 0] & 1) != 0) {
    i12 = 0;
    break;
   }
   HEAP32[i1 + 64 >> 2] = i10;
   i12 = 1;
  }
 } while (0);
 if (i6) {
  i13 = HEAP32[i1 + 68 >> 2] | 0;
 } else {
  i13 = 0;
 }
 do {
  if ((i13 | 0) == (i9 | 0)) {
   i14 = i12;
  } else {
   if ((HEAP8[i1 + 73 | 0] & 1) != 0) {
    i14 = i12;
    break;
   }
   HEAP32[i1 + 68 >> 2] = i9;
   i14 = 1;
  }
 } while (0);
 if (!(i14 & i6)) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i4, i1, 0);
 i4 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i4;
 __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i1, i5);
 STACKTOP = i3;
 return;
}
function __ZThn36_N7WebCore10ScrollView15setScrollOffsetERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 - 176 + 140 | 0;
 i1 = i7;
 i8 = i6;
 i9 = HEAP32[i2 >> 2] | 0;
 i10 = HEAP32[i2 + 4 >> 2] | 0;
 if ((HEAP32[i7 + 44 >> 2] & 1 | 0) == 0) {
  i11 = i9;
  i12 = i10;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 184 >> 2] & 127](i4, i1);
  i2 = HEAP32[i4 >> 2] | 0;
  i4 = i7;
  i13 = i2 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 172 >> 2] & 127](i1) | 0) | 0;
  i2 = (i13 | 0) < (i9 | 0) ? i13 : i9;
  __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i5, i7 + 36 | 0);
  i9 = HEAP32[i5 + 4 >> 2] | 0;
  i5 = i9 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 176 >> 2] & 127](i1) | 0) | 0;
  i4 = (i5 | 0) < (i10 | 0) ? i5 : i10;
  i11 = (i2 | 0) < 0 ? 0 : i2;
  i12 = (i4 | 0) < 0 ? 0 : i4;
 }
 i4 = i7 + 116 | 0;
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i6 + 4 >> 2] = i2;
 HEAP32[i6 >> 2] = i11 - (HEAP32[i7 + 48 >> 2] | 0);
 HEAP32[i8 + 4 >> 2] = i12 - (HEAP32[i7 + 52 >> 2] | 0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 120 >> 2] & 127](i1, i8);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ScrollView8scrollToERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 116 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 i10 = i2 + 4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i1 + 120 >> 2] | 0;
 HEAP32[i4 >> 2] = i8 - i9;
 HEAP32[i4 + 4 >> 2] = i11 - i12;
 if ((i8 | 0) == (i9 | 0) & (i11 | 0) == (i12 | 0)) {
  STACKTOP = i3;
  return;
 }
 i12 = i2;
 i2 = i6;
 i6 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i2 + 4 >> 2] = i6;
 if ((HEAP8[i1 + 152 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 172 | 0] & 1) == 0) {
  i6 = i1;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 304 >> 2] & 63](i1);
  __ZN7WebCore10ScrollView14scrollContentsERKNS_7IntSizeE(i1, i4);
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 308 >> 2] & 63](i1);
  STACKTOP = i3;
  return;
 } else {
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 127](i1) | 0;
  i1 = HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i10 >> 2];
  FUNCTION_TABLE_vii[i1 & 127](i6, i5);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore10ScrollView17frameRectsChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  return;
 }
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 i4 = i2 + (i3 << 2) | 0;
 if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L7;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L15 : while (1) {
  i5 = HEAP32[i7 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 68 >> 2] & 63](i5);
  i5 = i7 + 4 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 15;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 4 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 17;
    break L15;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 16;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 15) {
  return;
 } else if ((i8 | 0) == 16) {
  return;
 } else if ((i8 | 0) == 17) {
  return;
 }
}
function __ZN7WebCore10ScrollView15setScrollOffsetERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = HEAP32[i2 >> 2] | 0;
 i9 = HEAP32[i2 + 4 >> 2] | 0;
 if ((HEAP32[i1 + 44 >> 2] & 1 | 0) == 0) {
  i10 = i8;
  i11 = i9;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 127](i4, i1);
  i2 = HEAP32[i4 >> 2] | 0;
  i4 = i1;
  i12 = i2 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 172 >> 2] & 127](i1) | 0) | 0;
  i2 = (i12 | 0) < (i8 | 0) ? i12 : i8;
  __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i5, i1 + 36 | 0);
  i8 = HEAP32[i5 + 4 >> 2] | 0;
  i5 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 176 >> 2] & 127](i1) | 0) | 0;
  i4 = (i5 | 0) < (i9 | 0) ? i5 : i9;
  i10 = (i2 | 0) < 0 ? 0 : i2;
  i11 = (i4 | 0) < 0 ? 0 : i4;
 }
 i4 = i1 + 116 | 0;
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i6 + 4 >> 2] = i2;
 HEAP32[i6 >> 2] = i10 - (HEAP32[i1 + 48 >> 2] | 0);
 HEAP32[i7 + 4 >> 2] = i11 - (HEAP32[i1 + 52 >> 2] | 0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 120 >> 2] & 127](i1, i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = (HEAP32[i1 + 12 >> 2] | 0) == 0;
 if (i9) {
  i10 = HEAP32[i1 + 64 >> 2] | 0;
 } else {
  i10 = 0;
 }
 do {
  if ((i10 | 0) == (i2 | 0)) {
   i11 = 0;
  } else {
   if ((HEAP8[i1 + 72 | 0] & 1) != 0) {
    i11 = 0;
    break;
   }
   HEAP32[i1 + 64 >> 2] = i2;
   i11 = 1;
  }
 } while (0);
 if (i9) {
  i12 = HEAP32[i1 + 68 >> 2] | 0;
 } else {
  i12 = 0;
 }
 do {
  if ((i12 | 0) == (i3 | 0)) {
   i13 = i11;
  } else {
   if ((HEAP8[i1 + 73 | 0] & 1) != 0) {
    i13 = i11;
    break;
   }
   HEAP32[i1 + 68 >> 2] = i3;
   i13 = 1;
  }
 } while (0);
 if (i4) {
  HEAP8[i1 + 72 | 0] = 1;
 }
 if (i5) {
  HEAP8[i1 + 73 | 0] = 1;
 }
 if (!(i13 & i9)) {
  STACKTOP = i6;
  return;
 }
 i9 = i7 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i7, i1, 0);
 i7 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = i7;
 __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i1, i8);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore10ScrollView15clipRectChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 i4 = i2 + (i3 << 2) | 0;
 if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L4;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L12 : while (1) {
  i5 = HEAP32[i7 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 72 >> 2] & 63](i5);
  i5 = i7 + 4 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 11;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 4 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 15;
    break L12;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 14;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 11) {
  return;
 } else if ((i8 | 0) == 14) {
  return;
 } else if ((i8 | 0) == 15) {
  return;
 }
}
function __ZNK7WebCore10ScrollView16screenToContentsERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 124 >> 2] & 127](i2) | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
  i9 = i3;
  i10 = i1;
  i11 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i10 + 4 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i4;
  return;
 } else {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 28 >> 2] & 31](i7, i8, i3);
  __ZNK7WebCore6Widget19convertFromRootViewERKNS_8IntPointE(i6, i2 | 0, i7);
  i7 = i5 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i5, i2, 0);
  i5 = HEAP32[i7 >> 2] | 0;
  i3 = HEAP32[i7 + 4 >> 2] | 0;
  i7 = i2 + 36 | 0;
  i2 = i3 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 124 >> 2] & 127](i7) | 0) | 0;
  i7 = i2 + (HEAP32[i6 + 4 >> 2] | 0) | 0;
  HEAP32[i1 >> 2] = (HEAP32[i6 >> 2] | 0) + i5;
  HEAP32[i1 + 4 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
}
function __ZThn36_NK7WebCore10ScrollView10scrollSizeENS_20ScrollbarOrientationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 - 176 + 140 | 0;
 i1 = i5;
 i6 = i5 + 56 | 0;
 i7 = i6;
 i8 = i5 + 60 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) == 0) {
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP8[i1 + 74 | 0] & 1) != 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 164 >> 2] & 31](i4, i1, 0);
   i9 = i4 + 8 | 0;
   i10 = (HEAP32[i5 + 140 >> 2] | 0) - (HEAP32[i9 >> 2] | 0) | 0;
   i11 = (HEAP32[i5 + 144 >> 2] | 0) - (HEAP32[i9 + 4 >> 2] | 0) | 0;
   i12 = (i2 | 0) == 0 ? (i10 | 0) > 0 ? i10 : 0 : (i11 | 0) > 0 ? i11 : 0;
   STACKTOP = i3;
   return i12 | 0;
  }
 } while (0);
 i5 = HEAP32[((i2 | 0) == 0 ? i7 : i8) >> 2] | 0;
 if ((i5 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i8 = i5;
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 172 >> 2] & 127](i5) | 0;
 i12 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 168 >> 2] & 127](i5) | 0) | 0;
 STACKTOP = i3;
 return i12 | 0;
}
function __ZN7WebCore10ScrollView15paintScrollbarsEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i1 + 56 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   i7 = i1 + 36 | 0;
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 172 >> 2] & 127](i7) | 0) != 0) {
    break;
   }
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 31](i1, i2, HEAP32[i6 >> 2] | 0, i3);
  }
 } while (0);
 i6 = i1 + 60 | 0;
 i7 = i1 + 36 | 0;
 i8 = i7;
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 176 >> 2] & 127](i7) | 0) != 0) {
    break;
   }
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 31](i1, i2, HEAP32[i6 >> 2] | 0, i3);
  }
 } while (0);
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 200 >> 2] & 127](i7) | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i7 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i7 + 228 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[i7 + 224 >> 2] & 127](i5, i1);
 FUNCTION_TABLE_viii[i8 & 31](i1, i2, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore10ScrollView16windowToContentsERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 | 0;
 if ((HEAP8[i2 + 172 | 0] & 1) == 0) {
  __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_7IntRectE(i6, i7, i3);
  i8 = i5 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i5, i2, 0);
  i5 = HEAP32[i8 >> 2] | 0;
  i9 = HEAP32[i8 + 4 >> 2] | 0;
  i8 = i2 + 36 | 0;
  i2 = i9 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 124 >> 2] & 127](i8) | 0) | 0;
  i8 = i6 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + i5;
  i5 = i6 + 4 | 0;
  HEAP32[i5 >> 2] = i2 + (HEAP32[i5 >> 2] | 0);
  i5 = i1;
  i2 = i6;
  HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  STACKTOP = i4;
  return;
 } else {
  __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_7IntRectE(i1, i7, i3);
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore10ScrollView16contentsToWindowERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 if ((HEAP8[i2 + 172 | 0] & 1) == 0) {
  i7 = i6;
  i8 = i3;
  HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
  HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
  i8 = i5 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i5, i2, 0);
  i5 = HEAP32[i8 >> 2] | 0;
  i7 = HEAP32[i8 + 4 >> 2] | 0;
  i8 = i2 + 36 | 0;
  i9 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 124 >> 2] & 127](i8) | 0) - i7 | 0;
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - i5;
  i5 = i6 + 4 | 0;
  HEAP32[i5 >> 2] = i9 + (HEAP32[i5 >> 2] | 0);
  __ZNK7WebCore6Widget25convertToContainingWindowERKNS_7IntRectE(i1, i2 | 0, i6);
  STACKTOP = i4;
  return;
 } else {
  __ZNK7WebCore6Widget25convertToContainingWindowERKNS_7IntRectE(i1, i2 | 0, i3);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore10ScrollView13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i1;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 296 >> 2] & 127](i1) | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 300 >> 2] & 127](i1) | 0;
 do {
  if ((i2 | 0) == 0) {
   if (i5) {
    i7 = i6 & 1;
    break;
   } else {
    i7 = i6 ? 3 : 2;
    break;
   }
  } else if ((i2 | 0) == 1) {
   if (i5) {
    i7 = i6 & 1 ^ 1;
    break;
   } else {
    i7 = i6 ? 2 : 3;
    break;
   }
  } else if ((i2 | 0) == 2) {
   if (i5) {
    i7 = i6 ? 3 : 2;
    break;
   } else {
    i7 = i6 & 1;
    break;
   }
  } else if ((i2 | 0) == 3) {
   if (i5) {
    i7 = i6 ? 2 : 3;
    break;
   } else {
    i7 = i6 & 1 ^ 1;
    break;
   }
  } else {
   i7 = 0;
  }
 } while (0);
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  i8 = 1;
  return i8 | 0;
 }
 i8 = __ZN7WebCore14ScrollableArea6scrollENS_15ScrollDirectionENS_17ScrollGranularityEf(i1 + 36 | 0, i7, i3, +1) | 0;
 return i8 | 0;
}
function __ZNK7WebCore10ScrollView10scrollSizeENS_20ScrollbarOrientationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 + 56 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 60 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP8[i1 + 74 | 0] & 1) != 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i4, i1, 0);
   i6 = i4 + 8 | 0;
   i7 = (HEAP32[i1 + 140 >> 2] | 0) - (HEAP32[i6 >> 2] | 0) | 0;
   i8 = (HEAP32[i1 + 144 >> 2] | 0) - (HEAP32[i6 + 4 >> 2] | 0) | 0;
   STACKTOP = i3;
   return ((i2 | 0) == 0 ? (i7 | 0) > 0 ? i7 : 0 : (i8 | 0) > 0 ? i8 : 0) | 0;
  }
 } while (0);
 i4 = HEAP32[((i2 | 0) == 0 ? i5 : i1 + 60 | 0) >> 2] | 0;
 if ((i4 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i1 = i4;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 172 >> 2] & 127](i4) | 0;
 i9 = i5 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 127](i4) | 0) | 0;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore10ScrollView8addChildEN3WTF10PassRefPtrINS_6WidgetEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] & 127](i2, i1);
 i2 = i4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i2 >> 2] = i6;
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore6WidgetEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 76 | 0, i4, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 + 4 | 0;
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i2 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore10ScrollView31adjustScrollPositionWithinRangeERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((HEAP32[i2 + 44 >> 2] & 1 | 0) == 0) {
  i7 = i3;
  i8 = i1;
  i9 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i8 + 4 >> 2] = i9;
  STACKTOP = i4;
  return;
 } else {
  i9 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 196 >> 2] & 127](i5, i2);
  i8 = HEAP32[i3 >> 2] | 0;
  i7 = HEAP32[i5 >> 2] | 0;
  i10 = (i8 | 0) < (i7 | 0) ? i8 : i7;
  i7 = HEAP32[i3 + 4 >> 2] | 0;
  i3 = HEAP32[i5 + 4 >> 2] | 0;
  i5 = (i7 | 0) < (i3 | 0) ? i7 : i3;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 200 >> 2] & 127](i6, i2);
  i2 = HEAP32[i6 >> 2] | 0;
  i9 = HEAP32[i6 + 4 >> 2] | 0;
  i6 = i1;
  HEAP32[i6 >> 2] = (i10 | 0) > (i2 | 0) ? i10 : i2;
  HEAP32[i6 + 4 >> 2] = (i5 | 0) > (i9 | 0) ? i5 : i9;
  STACKTOP = i4;
  return;
 }
}
function __ZThn36_NK7WebCore10ScrollView21maximumScrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 - 176 + 140 | 0;
 i2 = i6;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 184 >> 2] & 127](i4, i2);
 i7 = HEAP32[i4 >> 2] | 0;
 i4 = i6;
 i8 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 172 >> 2] & 127](i2) | 0) | 0;
 i7 = i8 - (HEAP32[i6 + 48 >> 2] | 0) | 0;
 __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i5, i6 + 36 | 0);
 i8 = HEAP32[i5 + 4 >> 2] | 0;
 i5 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 176 >> 2] & 127](i2) | 0) | 0;
 i2 = i5 - (HEAP32[i6 + 52 >> 2] | 0) | 0;
 i6 = (i7 | 0) > 0;
 i5 = (i2 | 0) > 0;
 i4 = i1;
 HEAP32[i4 >> 2] = (i5 ? 0 : 0) | (i6 ? i7 : 0);
 HEAP32[i4 + 4 >> 2] = (i5 ? i2 : 0) | (i6 ? 0 : 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i6;
 i8 = i3;
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 i8 = i5 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i5, i2, 0);
 i5 = HEAP32[i8 >> 2] | 0;
 i7 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = i2 + 36 | 0;
 i3 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 124 >> 2] & 127](i8) | 0) - i7 | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - i5;
 i5 = i6 + 4 | 0;
 HEAP32[i5 >> 2] = i3 + (HEAP32[i5 >> 2] | 0);
 __ZNK7WebCore6Widget17convertToRootViewERKNS_7IntRectE(i1, i2 | 0, i6);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 | 0;
 if ((HEAP8[i2 + 172 | 0] & 1) == 0) {
  __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_8IntPointE(i6, i7, i3);
  i8 = i5 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i5, i2, 0);
  i5 = HEAP32[i8 >> 2] | 0;
  i9 = HEAP32[i8 + 4 >> 2] | 0;
  i8 = i2 + 36 | 0;
  i2 = i9 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 124 >> 2] & 127](i8) | 0) | 0;
  i8 = i2 + (HEAP32[i6 + 4 >> 2] | 0) | 0;
  HEAP32[i1 >> 2] = (HEAP32[i6 >> 2] | 0) + i5;
  HEAP32[i1 + 4 >> 2] = i8;
  STACKTOP = i4;
  return;
 } else {
  __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_8IntPointE(i1, i7, i3);
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore10ScrollView22scrollbarCornerPresentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 + 56 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   __ZNK7WebCore6Widget9frameRectEv(i4, i1 | 0);
   i6 = HEAP32[i4 + 8 >> 2] | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 104 >> 2] & 127](i7) | 0) | 0) > 0) {
    i8 = 1;
   } else {
    break;
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 i5 = i1 + 60 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 | 0);
 i1 = HEAP32[i3 + 12 >> 2] | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 i8 = (i1 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 108 >> 2] & 127](i3) | 0) | 0) > 0;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore10ScrollView19updateOverhangAreasEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 127](i1) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 _memset(i3 | 0, 0, 16) | 0;
 _memset(i4 | 0, 0, 16) | 0;
 __ZN7WebCore10ScrollView33calculateOverhangAreasForPaintingERNS_7IntRectES2_(i1, i3, i4);
 do {
  if ((HEAP32[i3 + 8 >> 2] | 0) >= 1) {
   if ((HEAP32[i3 + 12 >> 2] | 0) < 1) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 31](i5, i3, 0);
  }
 } while (0);
 if ((HEAP32[i4 + 8 >> 2] | 0) < 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i4 + 12 >> 2] | 0) < 1) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 31](i5, i4, 0);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore10ScrollView16contentsToWindowERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 if ((HEAP8[i2 + 172 | 0] & 1) == 0) {
  i7 = i2 + 36 | 0;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 124 >> 2] & 127](i7) | 0;
  i7 = HEAP32[i3 >> 2] | 0;
  i9 = (HEAP32[i3 + 4 >> 2] | 0) + i8 | 0;
  i8 = i5 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i5, i2, 0);
  i5 = i9 - (HEAP32[i8 + 4 >> 2] | 0) | 0;
  HEAP32[i6 >> 2] = i7 - (HEAP32[i8 >> 2] | 0);
  HEAP32[i6 + 4 >> 2] = i5;
  __ZNK7WebCore6Widget25convertToContainingWindowERKNS_8IntPointE(i1, i2 | 0, i6);
  STACKTOP = i4;
  return;
 } else {
  __ZNK7WebCore6Widget25convertToContainingWindowERKNS_8IntPointE(i1, i2 | 0, i3);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore10ScrollView15setScrollOriginERKNS_8IntPointEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i1 + 36 | 0;
 do {
  if ((HEAP32[i1 + 48 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if ((HEAP32[i1 + 52 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN7WebCore14ScrollableArea15setScrollOriginERKNS_8IntPointE(i8, i2);
 if (!((HEAP32[i1 + 12 >> 2] | 0) == 0 & (i3 & i4))) {
  STACKTOP = i5;
  return;
 }
 i4 = i6 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i6, i1, 0);
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i7 + 4 >> 2] = i6;
 __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i1, i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore10ScrollView36adjustScrollbarsAvoidingResizerCountEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 + 148 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + i2 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = i1 | 0;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN7WebCore10ScrollView36adjustScrollbarsAvoidingResizerCountEi(i8, i2);
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 152 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 do {
  if (!((i6 | 0) > 0 & (i7 | 0) == 0)) {
   if ((i6 | 0) == 0 & (i7 | 0) > 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i7 + 16 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[i7 + 212 >> 2] & 127](i4, i1);
 FUNCTION_TABLE_vii[i6 & 127](i5, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i1 + 152 | 0;
 if ((i2 & 1 | 0) == (HEAP8[i6] & 1 | 0)) {
  STACKTOP = i4;
  return;
 }
 HEAP8[i6] = i2 & 1;
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if (i3 ^ 1 | i2) {
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 63](i2);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 63](i2);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[i2 + 224 >> 2] & 127](i5, i1);
 FUNCTION_TABLE_vii[i3 & 127](i1 | 0, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore10ScrollView21maximumScrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 184 >> 2] & 127](i4, i2);
 i6 = HEAP32[i4 >> 2] | 0;
 i4 = i2;
 i7 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 172 >> 2] & 127](i2) | 0) | 0;
 i6 = i7 - (HEAP32[i2 + 48 >> 2] | 0) | 0;
 __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i5, i2 + 36 | 0);
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 i5 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 176 >> 2] & 127](i2) | 0) | 0;
 i4 = i5 - (HEAP32[i2 + 52 >> 2] | 0) | 0;
 i2 = (i6 | 0) > 0;
 i5 = (i4 | 0) > 0;
 i7 = i1;
 HEAP32[i7 >> 2] = (i5 ? 0 : 0) | (i2 ? i6 : 0);
 HEAP32[i7 + 4 >> 2] = (i5 ? i4 : 0) | (i2 ? 0 : 0);
 STACKTOP = i3;
 return;
}
function __ZThn36_NK7WebCore10ScrollView14scrollPositionEPNS_9ScrollbarE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 - 176 + 140 | 0;
 i1 = i6;
 i7 = i2;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 156 >> 2] & 127](i2) | 0) == 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 192 >> 2] & 127](i4, i1);
  i8 = (HEAP32[i6 + 48 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 156 >> 2] & 127](i2) | 0) != 1) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 192 >> 2] & 127](i5, i1);
 i8 = (HEAP32[i6 + 52 >> 2] | 0) + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZNK7WebCore10ScrollView14scrollPositionEPNS_9ScrollbarE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 156 >> 2] & 127](i2) | 0) == 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 192 >> 2] & 127](i4, i1);
  i7 = (HEAP32[i1 + 48 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 156 >> 2] & 127](i2) | 0) != 1) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 192 >> 2] & 127](i5, i1);
 i7 = (HEAP32[i1 + 52 >> 2] | 0) + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore10ScrollView16addPanScrollIconERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 127](i1) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 | 0;
 HEAP8[i1 + 168 | 0] = 1;
 i7 = i1 + 160 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 8 | 0;
 i8 = (HEAP32[i2 + 4 >> 2] | 0) - 8 | 0;
 HEAP32[i7 >> 2] = i1;
 HEAP32[i7 + 4 >> 2] = i8;
 i7 = HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i1;
 HEAP32[i6 + 4 >> 2] = i8;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = 16;
 HEAP32[i8 + 4 >> 2] = 16;
 FUNCTION_TABLE_viii[i7 & 31](i5, i4, 1);
 STACKTOP = i3;
 return;
}
function __ZThn36_NK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = i1;
 i7 = i4;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 116 >> 2] & 127](i5, i3);
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + (HEAP32[i5 >> 2] | 0);
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i3;
 STACKTOP = i2;
 return;
}
function __ZThn36_NK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = i1;
 i7 = i4;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 116 >> 2] & 127](i5, i3);
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - (HEAP32[i5 >> 2] | 0);
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i3;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 + 36 | 0;
 i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 124 >> 2] & 127](i7) | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i9 = (HEAP32[i3 + 4 >> 2] | 0) + i8 | 0;
 i8 = i5 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i5, i2, 0);
 i5 = i9 - (HEAP32[i8 + 4 >> 2] | 0) | 0;
 HEAP32[i6 >> 2] = i7 - (HEAP32[i8 >> 2] | 0);
 HEAP32[i6 + 4 >> 2] = i5;
 __ZNK7WebCore6Widget17convertToRootViewERKNS_8IntPointE(i1, i2 | 0, i6);
 STACKTOP = i4;
 return;
}
function __ZThn36_N7WebCore10ScrollView21scrollbarStyleChangedEib(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i2 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 - 176 + 140 | 0;
 i1 = i6;
 if (!i3) {
  STACKTOP = i2;
  return;
 }
 i3 = i6 + 36 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 63](i3);
 i3 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 164 >> 2] & 31](i4, i1, 0);
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i5 + 4 >> 2] = i4;
 __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i1, i5);
 __ZN7WebCore10ScrollView23positionScrollbarLayersEv(i1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = i1;
 i7 = i4;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 116 >> 2] & 127](i5, i3);
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + (HEAP32[i5 >> 2] | 0);
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i3;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = i1;
 i7 = i4;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 116 >> 2] & 127](i5, i3);
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - (HEAP32[i5 >> 2] | 0);
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i3;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10ScrollView30calculateAndPaintOverhangAreasEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 _memset(i5 | 0, 0, 16) | 0;
 _memset(i6 | 0, 0, 16) | 0;
 __ZN7WebCore10ScrollView33calculateOverhangAreasForPaintingERNS_7IntRectES2_(i1, i5, i6);
 do {
  if (!(__ZNK7WebCore7IntRect10intersectsERKS0_(i3, i5) | 0)) {
   if (__ZNK7WebCore7IntRect10intersectsERKS0_(i3, i6) | 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 260 >> 2] & 3](i1, i2, i5, i6, i3);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore10ScrollView18rootViewToContentsERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZNK7WebCore6Widget19convertFromRootViewERKNS_8IntPointE(i6, i2 | 0, i3);
 i3 = i5 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i5, i2, 0);
 i5 = HEAP32[i3 >> 2] | 0;
 i7 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i2 + 36 | 0;
 i2 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 124 >> 2] & 127](i3) | 0) | 0;
 i3 = i2 + (HEAP32[i6 + 4 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = (HEAP32[i6 >> 2] | 0) + i5;
 HEAP32[i1 + 4 >> 2] = i3;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore10ScrollView18rootViewToContentsERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore6Widget19convertFromRootViewERKNS_7IntRectE(i1, i2 | 0, i3);
 i3 = i5 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i5, i2, 0);
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i2 + 36 | 0;
 i2 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 124 >> 2] & 127](i3) | 0) | 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i5;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = i2 + (HEAP32[i5 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10ScrollView21scrollbarStyleChangedEib(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i2 | 0;
 i5 = i2 + 16 | 0;
 if (!i3) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 + 36 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 63](i3);
 i3 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i4, i1, 0);
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i5 + 4 >> 2] = i4;
 __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i1, i5);
 __ZN7WebCore10ScrollView23positionScrollbarLayersEv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10ScrollView19removePanScrollIconEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 127](i1) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 HEAP8[i1 + 168 | 0] = 0;
 i6 = HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] | 0;
 i7 = i1 + 160 | 0;
 i1 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 i1 = i3 + 8 | 0;
 HEAP32[i1 >> 2] = 16;
 HEAP32[i1 + 4 >> 2] = 16;
 FUNCTION_TABLE_viii[i6 & 31](i4, i3, 1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10ScrollView9setParentEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  return;
 }
 i5 = i1 + 148 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (!((i6 | 0) == 0 | (i4 | 0) == 0)) {
  __ZN7WebCore10ScrollView36adjustScrollbarsAvoidingResizerCountEi(i4, -i6 | 0);
 }
 __ZN7WebCore6Widget9setParentEPNS_10ScrollViewE(i1 | 0, i2);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore10ScrollView36adjustScrollbarsAvoidingResizerCountEi(i5, i2);
 return;
}
function __ZThn36_NK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = i4;
 i4 = i1;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 116 >> 2] & 127](i5, i3);
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = (HEAP32[i5 >> 2] | 0) + i7;
 HEAP32[i1 + 4 >> 2] = i3 + i8;
 STACKTOP = i2;
 return;
}
function __ZThn36_NK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = i4;
 i4 = i1;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 116 >> 2] & 127](i5, i3);
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i7 - (HEAP32[i5 >> 2] | 0);
 HEAP32[i1 + 4 >> 2] = i8 - i3;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = i4;
 i4 = i1;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 116 >> 2] & 127](i5, i3);
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i7 + (HEAP32[i5 >> 2] | 0);
 HEAP32[i1 + 4 >> 2] = i8 + i3;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = i4;
 i4 = i1;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 116 >> 2] & 127](i5, i3);
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i7 - (HEAP32[i5 >> 2] | 0);
 HEAP32[i1 + 4 >> 2] = i8 - i3;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore10ScrollView23rootViewToTotalContentsERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZNK7WebCore6Widget19convertFromRootViewERKNS_8IntPointE(i6, i2 | 0, i3);
 i3 = i5 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i5, i2, 0);
 i2 = (HEAP32[i6 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = (HEAP32[i6 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
 HEAP32[i1 + 4 >> 2] = i2;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore10ScrollView10layoutSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 + 132 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) >= 1) {
   if ((HEAP32[i2 + 136 >> 2] | 0) < 1) {
    break;
   }
   if ((HEAP8[i2 + 169 | 0] & 1) == 0) {
    break;
   }
   i4 = i3;
   i5 = i1;
   i6 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i5 + 4 >> 2] = i6;
   return;
  }
 } while (0);
 __ZNK7WebCore10ScrollView26unscaledVisibleContentSizeENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i1, i2, 0);
 return;
}
function __ZN7WebCore10ScrollView22fixedLayoutSizeChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i3 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i3, i1, 0);
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i3;
 __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i1, i4);
 i4 = i1 + 36 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 63](i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore10ScrollView18setFixedLayoutSizeERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 132 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if ((HEAP32[i3 + 4 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 i4 = i2;
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = i2;
 if ((HEAP8[i1 + 169 | 0] & 1) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 276 >> 2] & 63](i1);
 return;
}
function __ZN7WebCore10ScrollView24windowResizerRectChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i3, i1, 0);
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i3;
 __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i1, i4);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore10ScrollView30scrollOffsetRelativeToDocumentEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i4, i2, 0);
 i4 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 i5 = i2 + 36 | 0;
 i2 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 124 >> 2] & 127](i5) | 0) | 0;
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i2;
 STACKTOP = i3;
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
function __ZNK7WebCore10ScrollView32scrollPositionRelativeToDocumentEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 192 >> 2] & 127](i4, i2);
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = i2 + 36 | 0;
 i2 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 124 >> 2] & 127](i4) | 0) | 0;
 HEAP32[i1 >> 2] = i5;
 HEAP32[i1 + 4 >> 2] = i2;
 STACKTOP = i3;
 return;
}
function __ZThn36_NK7WebCore10ScrollView21isScrollCornerVisibleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 - 176 + 140 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 224 >> 2] & 127](i3, i4);
 if ((HEAP32[i3 + 8 >> 2] | 0) < 1) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i5 = (HEAP32[i3 + 12 >> 2] | 0) > 0;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore10ScrollViewC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore6WidgetC2EPv(i1 | 0, 0);
 __ZN7WebCore14ScrollableAreaC2Ev(i1 + 36 | 0);
 HEAP32[i1 >> 2] = H_BASE + 24;
 HEAP32[i1 + 36 >> 2] = H_BASE + 344;
 _memset(i1 + 76 | 0, 0, 20) | 0;
 _memset(i1 + 56 | 0, 0, 19) | 0;
 HEAP8[i1 + 96 | 0] = 1;
 _memset(i1 + 100 | 0, 0, 54) | 0;
 _memset(i1 + 156 | 0, 0, 15) | 0;
 HEAP8[i1 + 171 | 0] = 1;
 HEAP8[i1 + 172 | 0] = 0;
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
function __ZThn36_NK7WebCore10ScrollView14scrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2 - 176 + 140 | 0;
 i2 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 164 >> 2] & 31](i4, i5, 0);
 i5 = i1;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore10ScrollView14scrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 31](i4, i2, 0);
 i2 = i1;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore10ScrollView21isScrollCornerVisibleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 224 >> 2] & 127](i3, i1);
 if ((HEAP32[i3 + 8 >> 2] | 0) < 1) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 i4 = (HEAP32[i3 + 12 >> 2] | 0) > 0;
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore10ScrollView17setUseFixedLayoutEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 169 | 0;
 if (!((HEAP8[i3] & 1) != 0 ^ i2)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 if ((HEAP32[i1 + 132 >> 2] | 0) < 1) {
  return;
 }
 if ((HEAP32[i1 + 136 >> 2] | 0) < 1) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 276 >> 2] & 63](i1);
 return;
}
function __ZNK7WebCore10ScrollView14scrollbarModesERNS_13ScrollbarModeES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  HEAP32[i2 >> 2] = HEAP32[i1 + 64 >> 2];
  i4 = HEAP32[i1 + 68 >> 2] | 0;
  HEAP32[i3 >> 2] = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = 0;
  i4 = 0;
  HEAP32[i3 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore10ScrollView6scrollENS_15ScrollDirectionENS_17ScrollGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = __ZN7WebCore14ScrollableArea6scrollENS_15ScrollDirectionENS_17ScrollGranularityEf(i1 + 36 | 0, i2, i3, +1) | 0;
 return i4 | 0;
}
function __ZN7WebCore10ScrollView18paintOverhangAreasEPNS_15GraphicsContextERKNS_7IntRectES5_S5_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
 FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 64 >> 2] & 1](i6, i1, i2, i3, i4, i5);
 return;
}
function __ZN7WebCore10ScrollView22scrollContentsFastPathERKNS_7IntSizeERKNS_7IntRectES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 127](i1) | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] & 31](i5, i2, i3, i4);
 return 1;
}
function __ZN7WebCore10ScrollView26setFixedVisibleContentRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 100 | 0;
 i1 = i2;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZNK7WebCore10ScrollView24platformContentsToScreenERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = i1;
 i1 = i3;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZThn36_NK7WebCore10ScrollView13visibleHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 - 176 + 140 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 31](i3, i4, 0);
 STACKTOP = i2;
 return HEAP32[i3 + 12 >> 2] | 0;
}
function __ZThn36_NK7WebCore10ScrollView12visibleWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 - 176 + 140 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 31](i3, i4, 0);
 STACKTOP = i2;
 return HEAP32[i3 + 8 >> 2] | 0;
}
function __ZThn36_NK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i1, i2 - 176 + 140 | 0, i3);
 return;
}
function __ZN7WebCore10ScrollView17paintScrollCornerEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 56 >> 2] & 31](i4, i1, i2, i3);
 return;
}
function __ZN7WebCore10ScrollView22scrollContentsSlowPathERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 127](i1) | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 31](i3, i2, 0);
 return;
}
function viii___ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore10ScrollView15createScrollbarENS_20ScrollbarOrientationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9Scrollbar21createNativeScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeE(i1, i2 + 36 | 0, i3, 0);
 return;
}
function __ZN7WebCore10ScrollView21setDelegatesScrollingEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 172 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 272 >> 2] & 63](i1);
 return;
}
function __ZNK7WebCore10ScrollView13visibleHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i3, i1, 0);
 STACKTOP = i2;
 return HEAP32[i3 + 12 >> 2] | 0;
}
function __ZNK7WebCore10ScrollView12visibleWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 31](i3, i1, 0);
 STACKTOP = i2;
 return HEAP32[i3 + 8 >> 2] | 0;
}
function viii___ZN7WebCore14ScrollableArea15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ScrollableArea15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore10ScrollView11isOffscreenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP8[i1 + 16 | 0] & 1) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 17 | 0] & 1) == 0;
 return i2 | 0;
}
function __ZThn36_NK7WebCore10ScrollView21minimumScrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 - 176 + 140 | 0;
 i2 = -(HEAP32[i3 + 52 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = -(HEAP32[i3 + 48 >> 2] | 0);
 HEAP32[i1 + 4 >> 2] = i2;
 return;
}
function viii___ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore10ScrollView14paintScrollbarEPNS_15GraphicsContextEPNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 31](i3, i2, i4);
 return;
}
function __ZNK7WebCore10ScrollView24platformScreenToContentsERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = i3;
 i3 = i1;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = i1;
 return;
}
function __ZThn36_N7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ScrollableArea24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE(i1 - 176 + 176 | 0, i2);
 return;
}
function __ZThn36_NK7WebCore10ScrollView12contentsSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 - 176 + 280 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZThn36_N7WebCore10ScrollView26invalidateScrollCornerRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 - 176 + 140 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 127](i3, i2);
 return;
}
function __ZNK7WebCore10ScrollView15fixedLayoutSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 132 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ScrollableArea24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE(i1 + 36 | 0, i2);
 return;
}
function __ZNK7WebCore10ScrollView12contentsSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 140 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function __ZNK7WebCore10ScrollView21minimumScrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = -(HEAP32[i2 + 52 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = -(HEAP32[i2 + 48 >> 2] | 0);
 HEAP32[i1 + 4 >> 2] = i3;
 return;
}
function viii___ZNK7WebCore6Widget25convertFromContainingViewERKNS_8IntPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore6Widget25convertFromContainingViewERKNS_8IntPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore6Widget25convertFromContainingViewERKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore6Widget25convertFromContainingViewERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function viii___ZNK7WebCore6Widget23convertToContainingViewERKNS_8IntPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore6Widget23convertToContainingViewERKNS_8IntPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore6Widget23convertToContainingViewERKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore6Widget23convertToContainingViewERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore10ScrollView15canBlitOnScrollEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 96 | 0] & 1) != 0;
 return i2 | 0;
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
function __ZN7WebCore10ScrollView26invalidateScrollCornerRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 127](i1 | 0, i2);
 return;
}
function __ZNK7WebCore10ScrollView22platformScrollbarModesERNS_13ScrollbarModeES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i3 >> 2] = 0;
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore10ScrollView18setCanBlitOnScrollEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
  return;
 }
 HEAP8[i1 + 96 | 0] = i2 & 1;
 return;
}
function __ZThn36_NK7WebCore10ScrollView16scrollCornerRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore10ScrollView16scrollCornerRectEv(i1, i2 - 176 + 140 | 0);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore10ScrollView26platformVisibleContentSizeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZThn36_NK7WebCore10ScrollView14overhangAmountEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore10ScrollView14overhangAmountEv(i1, i2 - 176 + 140 | 0);
 return;
}
function __ZThn36_N7WebCore10ScrollViewD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 176 + 140 | 0;
 __ZN7WebCore10ScrollViewD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore10ScrollView14platformScrollENS_15ScrollDirectionENS_17ScrollGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 1;
}
function __ZNK7WebCore14ScrollableArea22lastKnownMousePositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore10ScrollView23platformSetScrollOriginERKNS_8IntPointEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZNK7WebCore10ScrollView26platformVisibleContentRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function vi___ZN7WebCore14ScrollableArea19willStartLiveResizeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14ScrollableArea19willStartLiveResizeEv(i1 | 0);
}
function vi___ZN7WebCore14ScrollableArea17willEndLiveResizeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14ScrollableArea17willEndLiveResizeEv(i1 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore10ScrollView31platformRepaintContentRectangleERKNS_7IntRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function vi___ZN7WebCore14ScrollableArea15contentsResizedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14ScrollableArea15contentsResizedEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore10ScrollView32platformSetScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vii___ZN7WebCore6Widget8setFocusEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore6Widget8setFocusEb(i1 | 0, i2 | 0);
}
function __ZN7WebCore10ScrollView23setPaintsEntireContentsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 170 | 0] = i2 & 1;
 return;
}
function __ZNK7WebCore10ScrollView33containsScrollbarsAvoidingResizerEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 148 >> 2] | 0) == 0 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function b8(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(8);
}
function __ZNK7WebCore10ScrollView17windowResizerRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore14ScrollableArea27requestScrollPositionUpdateERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore10ScrollView16setClipsRepaintsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 171 | 0] = i2 & 1;
 return;
}
function __ZN7WebCore14ScrollableArea27setVisibleScrollerThumbRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore10ScrollViewD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10ScrollViewD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZThn36_NK7WebCore10ScrollView19horizontalScrollbarEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 196 >> 2] | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function __ZThn36_N7WebCore10ScrollViewD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10ScrollViewD2Ev(i1 - 176 + 140 | 0);
 return;
}
function __ZN7WebCore10ScrollView25platformSetScrollPositionERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZThn36_NK7WebCore10ScrollView17verticalScrollbarEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 200 >> 2] | 0;
}
function __ZNK7WebCore10ScrollView14useFixedLayoutEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 169 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore10ScrollView31platformSetScrollbarsSuppressedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function __ZN7WebCore6Widget12notifyWidgetENS_18WidgetNotificationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore10ScrollView19platformRemoveChildEPNS_6WidgetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore10ScrollView19horizontalScrollbarEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 56 >> 2] | 0;
}
function __ZN7WebCore10ScrollView16platformAddChildEPNS_6WidgetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore10ScrollView26platformSetCanBlitOnScrollEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore10ScrollView17verticalScrollbarEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 60 >> 2] | 0;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 127](i2 | 0) | 0;
}
function __ZN7WebCore10ScrollView37updateCompositingLayersAfterScrollingEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore14ScrollableArea29shouldSuspendScrollAnimationsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 3](i2 | 0);
}
function __ZNK7WebCore10ScrollView34notifyPageThatContentAreaWillPaintEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore14ScrollableArea27layerForHorizontalScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore6Widget11handleEventEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore10ScrollView34updateLayerPositionsAfterScrollingEv(i1) {
 i1 = i1 | 0;
 return;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function __ZNK7WebCore14ScrollableArea25layerForVerticalScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10ScrollView25visibleContentScaleFactorEv(i1) {
 i1 = i1 | 0;
 return +(+1);
}
function __ZNK7WebCore14ScrollableArea23usesCompositedScrollingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea22isRubberBandInProgressEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore14ScrollableArea21scrollAnimatorEnabledEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea20layerForScrollCornerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea20isHandlingWheelEventEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore10ScrollView27delegatesScrollingDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore10ScrollView23platformCanBlitOnScrollEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10ScrollView22avoidScrollbarCreationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore10ScrollView25platformSetScrollbarModesEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore14ScrollableArea17layerForScrollingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14ScrollableArea17scheduleAnimationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore10ScrollView23platformSetContentsSizeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore10ScrollView19platformIsOffscreenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore6Widget25transformsAffectFrameRectEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore10ScrollView18isVerticalDocumentEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore10ScrollView17isFlippedDocumentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea12headerHeightEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea12footerHeightEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14ScrollableArea12tiledBackingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore10ScrollView18updateScrollCornerEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore10ScrollView12isScrollViewEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore6Widget16isPluginViewBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZNK7WebCore6Widget12isPluginViewEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore6Widget11isScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore6Widget11isFrameViewEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function b7(i1) {
 i1 = i1 | 0;
 abort(7);
 return +0;
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore10ScrollView18paintOverhangAreasEPNS_15GraphicsContextERKNS_7IntRectES5_S5_,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore10ScrollView4showEv,b1,__ZNK7WebCore10ScrollView34notifyPageThatContentAreaWillPaintEv,b1,__ZThn36_N7WebCore10ScrollViewD0Ev,b1,__ZN7WebCore10ScrollView22fixedLayoutSizeChangedEv,b1,__ZN7WebCore10ScrollView17frameRectsChangedEv,b1,__ZThn36_N7WebCore10ScrollViewD1Ev,b1,__ZN7WebCore10ScrollView4hideEv,b1,vi___ZN7WebCore14ScrollableArea15contentsResizedEv__wrapper,b1,__ZN7WebCore10ScrollView18updateScrollCornerEv,b1,__ZN7WebCore10ScrollView34updateLayerPositionsAfterScrollingEv,b1,__ZN7WebCore10ScrollViewD2Ev,b1,vi___ZN7WebCore14ScrollableArea19willStartLiveResizeEv__wrapper,b1,__ZN7WebCore10ScrollView37updateCompositingLayersAfterScrollingEv,b1,__ZN7WebCore10ScrollView27delegatesScrollingDidChangeEv
  ,b1,__ZN7WebCore10ScrollViewD0Ev,b1,__ZN7WebCore10ScrollView15clipRectChangedEv,b1,vi___ZN7WebCore14ScrollableArea17willEndLiveResizeEv__wrapper,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZThn36_N7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE,b2,__ZThn36_NK7WebCore10ScrollView14overhangAmountEv,b2,__ZNK7WebCore10ScrollView21maximumScrollPositionEv,b2,__ZN7WebCore10ScrollView8addChildEN3WTF10PassRefPtrINS_6WidgetEEE,b2,__ZN7WebCore6Widget11handleEventEPNS_5EventE,b2,__ZThn36_N7WebCore10ScrollView15setScrollOffsetERKNS_8IntPointE,b2,__ZN7WebCore10ScrollView15setScrollOffsetERKNS_8IntPointE,b2,vii___ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE__wrapper,b2,__ZN7WebCore10ScrollView8scrollToERKNS_7IntSizeE,b2,__ZN7WebCore10ScrollView12setFrameRectERKNS_7IntRectE,b2,__ZN7WebCore10ScrollView11removeChildEPNS_6WidgetE,b2,__ZNK7WebCore10ScrollView16scrollCornerRectEv,b2,__ZThn36_N7WebCore10ScrollView26invalidateScrollCornerRectERKNS_7IntRectE,b2,__ZN7WebCore10ScrollView26setFixedVisibleContentRectERKNS_7IntRectE
  ,b2,__ZThn36_NK7WebCore10ScrollView21minimumScrollPositionEv,b2,vii___ZN7WebCore6Widget8setFocusEb__wrapper,b2,__ZN7WebCore10ScrollView9setParentEPS0_,b2,__ZN7WebCore6Widget12notifyWidgetENS_18WidgetNotificationE,b2,__ZN7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE,b2,__ZN7WebCore14ScrollableArea27setVisibleScrollerThumbRectERKNS_7IntRectE,b2,__ZNK7WebCore10ScrollView21minimumScrollPositionEv,b2,__ZNK7WebCore10ScrollView14overhangAmountEv,b2,__ZN7WebCore10ScrollView22scrollContentsSlowPathERKNS_7IntRectE,b2,__ZN7WebCore10ScrollView15setContentsSizeERKNS_7IntSizeE,b2,__ZNK7WebCore10ScrollView17windowResizerRectEv,b2,__ZThn36_NK7WebCore10ScrollView16scrollCornerRectEv,b2,__ZNK7WebCore10ScrollView12contentsSizeEv,b2,__ZThn36_NK7WebCore10ScrollView21maximumScrollPositionEv,b2,__ZNK7WebCore10ScrollView14scrollPositionEv
  ,b2,__ZN7WebCore10ScrollView17setScrollPositionERKNS_8IntPointE,b2,__ZN7WebCore10ScrollView26invalidateScrollCornerRectERKNS_7IntRectE,b2,__ZThn36_NK7WebCore10ScrollView14scrollPositionEv,b2,__ZNK7WebCore14ScrollableArea22lastKnownMousePositionEv,b2,__ZN7WebCore10ScrollView20setCanHaveScrollbarsEb,b2,__ZN7WebCore10ScrollView16setParentVisibleEb,b2,__ZThn36_NK7WebCore10ScrollView12contentsSizeEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore6Widget12isPluginViewEv,b3,__ZNK7WebCore10ScrollView19horizontalScrollbarEv,b3,__ZThn36_NK7WebCore10ScrollView19horizontalScrollbarEv,b3,__ZNK7WebCore14ScrollableArea27layerForHorizontalScrollbarEv,b3,__ZNK7WebCore10ScrollView12visibleWidthEv,b3,__ZThn36_NK7WebCore10ScrollView13visibleHeightEv,b3,__ZThn36_NK7WebCore10ScrollView17verticalScrollbarEv,b3,__ZN7WebCore14ScrollableArea17scheduleAnimationEv,b3,__ZThn36_NK7WebCore10ScrollView12visibleWidthEv,b3,__ZNK7WebCore14ScrollableArea22isRubberBandInProgressEv,b3,__ZNK7WebCore6Widget16isPluginViewBaseEv,b3,__ZNK7WebCore10ScrollView22avoidScrollbarCreationEv,b3,__ZNK7WebCore10ScrollView13visibleHeightEv,b3,__ZNK7WebCore14ScrollableArea20isHandlingWheelEventEv
  ,b3,__ZN7WebCore14ScrollableArea12tiledBackingEv,b3,__ZNK7WebCore14ScrollableArea23usesCompositedScrollingEv,b3,__ZN7WebCore6Widget25transformsAffectFrameRectEv,b3,__ZNK7WebCore14ScrollableArea17layerForScrollingEv,b3,__ZNK7WebCore6Widget11isFrameViewEv,b3,__ZNK7WebCore10ScrollView12isScrollViewEv,b3,__ZNK7WebCore14ScrollableArea25layerForVerticalScrollbarEv,b3,__ZNK7WebCore10ScrollView21isScrollCornerVisibleEv,b3,__ZThn36_NK7WebCore10ScrollView21isScrollCornerVisibleEv,b3,__ZNK7WebCore14ScrollableArea20layerForScrollCornerEv,b3,__ZNK7WebCore10ScrollView17isFlippedDocumentEv,b3,__ZNK7WebCore10ScrollView22scrollbarCornerPresentEv,b3,__ZNK7WebCore10ScrollView18isVerticalDocumentEv,b3,__ZNK7WebCore10ScrollView17verticalScrollbarEv,b3,__ZNK7WebCore6Widget11isScrollbarEv
  ,b3,__ZNK7WebCore14ScrollableArea12headerHeightEv,b3,__ZNK7WebCore14ScrollableArea21scrollAnimatorEnabledEv,b3,__ZNK7WebCore14ScrollableArea12footerHeightEv,b3,__ZNK7WebCore14ScrollableArea29shouldSuspendScrollAnimationsEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore10ScrollView17paintScrollCornerEPNS_15GraphicsContextERKNS_7IntRectE,b4,viii___ZNK7WebCore6Widget25convertFromContainingViewERKNS_8IntPointE__wrapper,b4,viii___ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE__wrapper,b4,__ZN7WebCore10ScrollView5paintEPNS_15GraphicsContextERKNS_7IntRectE,b4,__ZThn36_N7WebCore10ScrollView21scrollbarStyleChangedEib,b4,__ZN7WebCore10ScrollView23repaintContentRectangleERKNS_7IntRectEb,b4,__ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE,b4,__ZThn36_NK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE,b4,viii___ZNK7WebCore6Widget25convertFromContainingViewERKNS_7IntRectE__wrapper,b4,__ZN7WebCore10ScrollView15createScrollbarENS_20ScrollbarOrientationE,b4,viii___ZNK7WebCore6Widget23convertToContainingViewERKNS_8IntPointE__wrapper,b4,viii___ZNK7WebCore6Widget23convertToContainingViewERKNS_7IntRectE__wrapper,b4,__ZN7WebCore10ScrollView21scrollbarStyleChangedEib,b4,viii___ZN7WebCore14ScrollableArea15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE__wrapper
  ,b4,viii___ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE__wrapper,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZN7WebCore10ScrollView24isPointInScrollbarCornerERKNS_8IntPointE,b6,__ZThn36_NK7WebCore10ScrollView10scrollSizeENS_20ScrollbarOrientationE,b6,__ZNK7WebCore10ScrollView10scrollSizeENS_20ScrollbarOrientationE,b6,__ZN7WebCore14ScrollableArea27requestScrollPositionUpdateERKNS_8IntPointE,b6,__ZThn36_NK7WebCore10ScrollView14scrollPositionEPNS_9ScrollbarE,b6,__ZNK7WebCore10ScrollView14scrollPositionEPNS_9ScrollbarE,b6,b6,b6];
  var FUNCTION_TABLE_fi = [b7,b7,__ZNK7WebCore10ScrollView25visibleContentScaleFactorEv,b7];
  var FUNCTION_TABLE_viiiiii = [b8,b8];
  var FUNCTION_TABLE_iiiii = [b9,b9,__ZN7WebCore10ScrollView22scrollContentsFastPathERKNS_7IntSizeERKNS_7IntRectES6_,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,__ZNK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE,b10,__ZThn36_NK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE,b10,__ZThn36_NK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE,b10,__ZThn36_NK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE,b10,__ZNK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE,b10,__ZNK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE,b10,__ZThn36_NK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE,b10,__ZNK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE,b10,__ZN7WebCore10ScrollView14paintScrollbarEPNS_15GraphicsContextEPNS_9ScrollbarERKNS_7IntRectE,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10
  ,b10,b10,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_fi: dynCall_fi, dynCall_viiiiii: dynCall_viiiiii, dynCall_iiiii: dynCall_iiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_fi": invoke_fi, "invoke_viiiiii": invoke_viiiiii, "invoke_iiiii": invoke_iiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore6Widget12isPluginViewEv","_strlen","__ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb","__ZNK7WebCore10ScrollView19horizontalScrollbarEv","__ZThn36_N7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore6WidgetEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZThn36_NK7WebCore10ScrollView14overhangAmountEv","__ZNK7WebCore10ScrollView18contentsToRootViewERKNS_7IntRectE","__ZNK7WebCore10ScrollView14scrollbarModesERNS_13ScrollbarModeES2_","__ZN7WebCore10ScrollView4showEv","__ZN7WebCore10ScrollView23setPaintsEntireContentsEb","__ZN7WebCore10ScrollView17paintScrollCornerEPNS_15GraphicsContextERKNS_7IntRectE","__ZN7WebCore10ScrollView17setUseFixedLayoutEb","__ZThn36_NK7WebCore10ScrollView19horizontalScrollbarEv","__ZN7WebCore10ScrollView23positionScrollbarLayersEv","__ZNK7WebCore14ScrollableArea27layerForHorizontalScrollbarEv","__ZNK7WebCore10ScrollView34notifyPageThatContentAreaWillPaintEv","__ZN7WebCore10ScrollViewD0Ev","__ZN7WebCore10ScrollView24windowResizerRectChangedEv","__ZNK7WebCore10ScrollView32scrollPositionRelativeToDocumentEv","__ZNK7WebCore14ScrollableArea29shouldSuspendScrollAnimationsEv","__ZN7WebCore10ScrollView8addChildEN3WTF10PassRefPtrINS_6WidgetEEE","__ZNK7WebCore10ScrollView12visibleWidthEv","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore6WidgetEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","__ZThn36_NK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE","__ZN7WebCore6Widget11handleEventEPNS_5EventE","__ZN7WebCore10ScrollView19platformRemoveChildEPNS_6WidgetE","__ZN7WebCore10ScrollView5paintEPNS_15GraphicsContextERKNS_7IntRectE","__ZN7WebCore10ScrollView24isPointInScrollbarCornerERKNS_8IntPointE","__ZThn36_N7WebCore10ScrollViewD0Ev","__ZN7WebCoreL22positionScrollbarLayerEPNS_13GraphicsLayerEPNS_9ScrollbarE","__ZThn36_NK7WebCore10ScrollView13visibleHeightEv","__ZNK7WebCore10ScrollView16contentsToScreenERKNS_7IntRectE","__ZThn36_N7WebCore10ScrollView21scrollbarStyleChangedEib","__ZN7WebCore10ScrollView23platformSetScrollOriginERKNS_8IntPointEbb","__ZN7WebCore10ScrollView23repaintContentRectangleERKNS_7IntRectEb","__ZNK7WebCore10ScrollView14useFixedLayoutEv","__ZThn36_N7WebCore10ScrollView15setScrollOffsetERKNS_8IntPointE","__ZNK7WebCore10ScrollView16screenToContentsERKNS_8IntPointE","__ZN7WebCore10ScrollView32platformSetScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE","__ZNK7WebCore10ScrollView24platformContentsToScreenERKNS_7IntRectE","__ZN7WebCore14ScrollableArea17scheduleAnimationEv","__ZN7WebCore10ScrollView22fixedLayoutSizeChangedEv","__ZThn36_NK7WebCore10ScrollView12visibleWidthEv","__ZN7WebCore10ScrollView16scrollbarAtPointERKNS_8IntPointE","__ZThn36_NK7WebCore10ScrollView10scrollSizeENS_20ScrollbarOrientationE","__ZNK7WebCore6Widget16isPluginViewBaseEv","__ZThn36_NK7WebCore10ScrollView17verticalScrollbarEv","__ZN7WebCore10ScrollView15setScrollOffsetERKNS_8IntPointE","__ZN7WebCore10ScrollView14platformScrollENS_15ScrollDirectionENS_17ScrollGranularityE","__ZN7WebCore10ScrollView16setClipsRepaintsEb","__ZN7WebCore10ScrollView16platformAddChildEPNS_6WidgetE","__ZNK7WebCore10ScrollView10layoutSizeEv","__ZNK7WebCore10ScrollView19platformIsOffscreenEv","__ZNK7WebCore10ScrollView26unscaledVisibleContentSizeENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE","__ZNK7WebCore10ScrollView21maximumScrollPositionEv","__ZN7WebCore10ScrollView19removePanScrollIconEv","__ZN7WebCore10ScrollView8scrollToERKNS_7IntSizeE","__ZNK7WebCore10ScrollView22avoidScrollbarCreationEv","__ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE","__ZNK7WebCore10ScrollView26platformVisibleContentSizeEb","__ZNK7WebCore10ScrollView31adjustScrollPositionWithinRangeERKNS_8IntPointE","__ZNK7WebCore10ScrollView23rootViewToTotalContentsERKNS_8IntPointE","__ZThn36_NK7WebCore10ScrollView14scrollPositionEPNS_9ScrollbarE","__ZNK7WebCore14ScrollableArea21scrollAnimatorEnabledEv","__ZThn36_NK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE","__ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE","__ZNK7WebCore10ScrollView13visibleHeightEv","__ZNK7WebCore10ScrollView10scrollSizeENS_20ScrollbarOrientationE","__ZThn36_NK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE","__ZN7WebCore10ScrollView17frameRectsChangedEv","__ZNK7WebCore10ScrollView23platformCanBlitOnScrollEv","__ZNK7WebCore10ScrollView16contentsToWindowERKNS_8IntPointE","__ZThn36_N7WebCore10ScrollViewD1Ev","__ZNK7WebCore14ScrollableArea20isHandlingWheelEventEv","__ZN7WebCore14ScrollableArea12tiledBackingEv","__ZNK7WebCore14ScrollableArea23usesCompositedScrollingEv","__ZThn36_NK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE","__ZN7WebCore10ScrollView4hideEv","__ZN7WebCore10ScrollView26platformSetCanBlitOnScrollEb","__ZN7WebCore10ScrollView11removeChildEPNS_6WidgetE","__ZN7WebCore6Widget25transformsAffectFrameRectEv","__ZNK7WebCore14ScrollableArea17layerForScrollingEv","__ZNK7WebCore10ScrollView16scrollCornerRectEv","__ZN7WebCore10ScrollView6scrollENS_15ScrollDirectionENS_17ScrollGranularityE","__ZNK7WebCore10ScrollView25visibleContentScaleFactorEv","__ZNK7WebCore6Widget11isFrameViewEv","__ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb","__ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE","__ZN7WebCore10ScrollView31platformRepaintContentRectangleERKNS_7IntRectEb","__ZN7WebCore10ScrollView25setHasHorizontalScrollbarEbPb","__ZNK7WebCore10ScrollView12isScrollViewEv","__ZN7WebCore10ScrollView31platformSetScrollbarsSuppressedEb","__ZNK7WebCore10ScrollView11isOffscreenEv","__ZNK7WebCore14ScrollableArea25layerForVerticalScrollbarEv","__ZNK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE","__ZN7WebCore10ScrollView33calculateOverhangAreasForPaintingERNS_7IntRectES2_","__ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE","__ZNK7WebCore10ScrollView21isScrollCornerVisibleEv","__ZN7WebCore10ScrollView21setDelegatesScrollingEb","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore6WidgetEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_","__ZNK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE","__ZThn36_NK7WebCore10ScrollView21isScrollCornerVisibleEv","__ZThn36_N7WebCore10ScrollView26invalidateScrollCornerRectERKNS_7IntRectE","__ZN7WebCore10ScrollView26setFixedVisibleContentRectERKNS_7IntRectE","__ZN7WebCore10ScrollView19updateOverhangAreasEv","__ZThn36_NK7WebCore10ScrollView21minimumScrollPositionEv","_memset","__ZN7WebCore10ScrollView9setParentEPS0_","_memcpy","__ZNK7WebCore14ScrollableArea22isRubberBandInProgressEv","__ZNK7WebCore10ScrollView15canBlitOnScrollEv","__ZNK7WebCore14ScrollableArea20layerForScrollCornerEv","__ZN7WebCore10ScrollView15createScrollbarENS_20ScrollbarOrientationE","__ZN7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE","__ZN7WebCore14ScrollableArea27requestScrollPositionUpdateERKNS_8IntPointE","__ZThn36_NK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE","__ZN7WebCore10ScrollView18updateScrollCornerEv","__ZN7WebCore14ScrollableArea27setVisibleScrollerThumbRectERKNS_7IntRectE","__ZN7WebCore10ScrollView18setCanBlitOnScrollEb","__ZN7WebCore6Widget12notifyWidgetENS_18WidgetNotificationE","__ZN7WebCore10ScrollView17setScrollPositionERKNS_8IntPointE","__ZNK7WebCore10ScrollView14overhangAmountEv","__ZN7WebCore10ScrollView36adjustScrollbarsAvoidingResizerCountEi","__ZNK7WebCore10ScrollView18isVerticalDocumentEv","__ZN7WebCore10ScrollViewC2Ev","__ZN7WebCore10ScrollView22scrollContentsSlowPathERKNS_7IntRectE","__ZNK7WebCore10ScrollView17verticalScrollbarEv","__ZNK7WebCore6Widget11isScrollbarEv","__ZN7WebCore10ScrollView15setContentsSizeERKNS_7IntSizeE","__ZNK7WebCore10ScrollView18rectToCopyOnScrollEv","__ZNK7WebCore10ScrollView18rootViewToContentsERKNS_7IntRectE","__ZNK7WebCore10ScrollView30scrollOffsetRelativeToDocumentEv","__ZN7WebCore10ScrollView34updateLayerPositionsAfterScrollingEv","__ZN7WebCore10ScrollView14scrollContentsERKNS_7IntSizeE","__ZN7WebCore10ScrollViewD2Ev","__ZN7WebCore10ScrollView21scrollbarStyleChangedEib","__ZN7WebCore10ScrollView18setFixedLayoutSizeERKNS_7IntSizeE","__ZThn36_NK7WebCore10ScrollView16scrollCornerRectEv","__ZNK7WebCore10ScrollView33containsScrollbarsAvoidingResizerEv","__ZNK7WebCore10ScrollView26platformVisibleContentRectEb","__ZN7WebCore10ScrollView22scrollContentsFastPathERKNS_7IntSizeERKNS_7IntRectES6_","__ZN7WebCore10ScrollView37updateCompositingLayersAfterScrollingEv","__ZN7WebCore10ScrollView27delegatesScrollingDidChangeEv","__ZNK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE","__ZNK7WebCore10ScrollView22platformScrollbarModesERNS_13ScrollbarModeES2_","__ZNK7WebCore10ScrollView12contentsSizeEv","__ZThn36_NK7WebCore10ScrollView21maximumScrollPositionEv","__ZN7WebCore10ScrollView18paintOverhangAreasEPNS_15GraphicsContextERKNS_7IntRectES5_S5_","__ZNK7WebCore10ScrollView24platformScreenToContentsERKNS_8IntPointE","__ZNK7WebCore10ScrollView16contentsToWindowERKNS_7IntRectE","__ZN7WebCore10ScrollView15clipRectChangedEv","__ZNK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE","__ZNK7WebCore10ScrollView18rootViewToContentsERKNS_8IntPointE","__ZNK7WebCore10ScrollView14scrollPositionEv","__ZNK7WebCore14ScrollableArea12headerHeightEv","__ZNK7WebCore10ScrollView15fixedLayoutSizeEv","__ZN7WebCore10ScrollView14paintScrollbarEPNS_15GraphicsContextEPNS_9ScrollbarERKNS_7IntRectE","__ZN7WebCore10ScrollView23setHasVerticalScrollbarEbPb","__ZN7WebCore10ScrollView12setFrameRectERKNS_7IntRectE","__ZN7WebCore10ScrollView26invalidateScrollCornerRectERKNS_7IntRectE","__ZN7WebCore10ScrollView25platformSetScrollbarModesEv","__ZNK7WebCore10ScrollView22scrollbarCornerPresentEv","__ZNK7WebCore14ScrollableArea12footerHeightEv","__ZThn36_NK7WebCore10ScrollView14scrollPositionEv","__ZN7WebCore10ScrollView18paintPanScrollIconEPNS_15GraphicsContextE","__ZN7WebCore10ScrollView15setScrollOriginERKNS_8IntPointEbb","__ZN7WebCore10ScrollView23platformSetContentsSizeEv","__ZNK7WebCore10ScrollView14scrollPositionEPNS_9ScrollbarE","__ZN7WebCore10ScrollView25platformSetScrollPositionERKNS_8IntPointE","__ZNK7WebCore10ScrollView16windowToContentsERKNS_7IntRectE","__ZNK7WebCore14ScrollableArea22lastKnownMousePositionEv","__ZNK7WebCore10ScrollView17isFlippedDocumentEv","__ZN7WebCore10ScrollView20setCanHaveScrollbarsEb","__ZN7WebCore10ScrollView13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityE","__ZN7WebCore10ScrollView15paintScrollbarsEPNS_15GraphicsContextERKNS_7IntRectE","__ZNK7WebCore10ScrollView17windowResizerRectEv","__ZN7WebCore10ScrollView16setParentVisibleEb","__ZNK7WebCore10ScrollView21minimumScrollPositionEv","__ZThn36_NK7WebCore10ScrollView12contentsSizeEv","__ZN7WebCore10ScrollView30calculateAndPaintOverhangAreasEPNS_15GraphicsContextERKNS_7IntRectE","__ZN7WebCore10ScrollView16addPanScrollIconERKNS_8IntPointE"]

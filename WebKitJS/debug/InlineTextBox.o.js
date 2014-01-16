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
H_BASE = parentModule["_malloc"](160 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 160;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore13InlineTextBoxD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_fiifffii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiifffii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viff(index,a1,a2,a3) {
  try {
    Module["dynCall_viff"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fiiifiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_fiiifiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_fi(index,a1) {
  try {
    return Module["dynCall_fi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_iiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_fii(index,a1,a2) {
  try {
    return Module["dynCall_fii"](index,a1,a2);
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
function invoke_iifi(index,a1,a2,a3) {
  try {
    return Module["dynCall_iifi"](index,a1,a2,a3);
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
  var __ZTVN7WebCore26SVGTextRunRenderingContextE=env.__ZTVN7WebCore26SVGTextRunRenderingContextE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore7TextRun21s_allowsRoundingHacksE=env.__ZN7WebCore7TextRun21s_allowsRoundingHacksE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore13InlineTextBoxE=(H_BASE+8)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiii=env.invoke_viiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_fiifffii=env.invoke_fiifffii;
  var invoke_viff=env.invoke_viff;
  var invoke_fiiifiii=env.invoke_fiiifiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_iiiiiiii=env.invoke_iiiiiiii;
  var invoke_fii=env.invoke_fii;
  var invoke_iii=env.invoke_iii;
  var invoke_iifi=env.invoke_iifi;
  var invoke_iiiiii=env.invoke_iiiiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore13InlineTextBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, d51 = +0, d52 = +0, i53 = 0, d54 = +0, i55 = 0, i56 = 0, d57 = +0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i5 = i6 + 8 | 0;
 i4 = i6 + 16 | 0;
 i8 = i6 + 32 | 0;
 i9 = i6 + 48 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = i21;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 36 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 68 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i34 = i1 + 16 | 0;
 i35 = HEAP32[i34 >> 2] | 0;
 i36 = HEAP32[(HEAP32[i35 + 8 >> 2] | 0) + 36 >> 2] | 0;
 i37 = HEAP32[i36 + 44 >> 2] & 7;
 do {
  if (!((i37 | 0) == 4 | (i37 | 0) == 0)) {
   if ((HEAP16[i1 + 48 >> 1] | 0) != 1) {
    break;
   }
   i38 = HEAP32[i35 + 44 >> 2] | 0;
   i39 = HEAP32[i1 + 44 >> 2] | 0;
   i40 = i38 + 8 | 0;
   if ((HEAP32[i38 + 16 >> 2] & 32 | 0) == 0) {
    i41 = HEAP16[(HEAP32[i40 >> 2] | 0) + (i39 << 1) >> 1] | 0;
   } else {
    i41 = HEAPU8[(HEAP32[i40 >> 2] | 0) + i39 | 0] | 0;
   }
   if (i41 << 16 >> 16 != 10) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 i41 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i41 | 0) == 0 | (i41 | 0) == (i35 | 0))) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i36 + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 i36 = i1 + 50 | 0;
 if ((HEAP16[i36 >> 1] | 0) == -2) {
  STACKTOP = i6;
  return;
 }
 i35 = i2 + 20 | 0;
 if ((HEAP32[i35 >> 2] | 0) == 5) {
  STACKTOP = i6;
  return;
 }
 i41 = i1 + 48 | 0;
 if ((HEAP16[i41 >> 1] | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore13InlineTextBox19logicalOverflowRectEv(i8, i1);
 i37 = HEAP32[i8 >> 2] | 0;
 __ZNK7WebCore13InlineTextBox19logicalOverflowRectEv(i4, i1);
 i8 = i1 | 0;
 i39 = i1 + 32 | 0;
 i40 = (HEAP32[i39 >> 2] & 2048 | 0) == 0;
 i38 = i3 + 4 | 0;
 i42 = i3 | 0;
 i3 = HEAP32[(i40 ? i38 : i42) >> 2] | 0;
 i43 = i2 + 4 | 0;
 if (i40) {
  i44 = (HEAP32[i2 + 16 >> 2] | 0) + (HEAP32[i2 + 8 >> 2] | 0) | 0;
 } else {
  i44 = (HEAP32[i2 + 12 >> 2] | 0) + (HEAP32[i43 >> 2] | 0) | 0;
 }
 i45 = HEAP32[i42 >> 2] | 0;
 i42 = HEAP32[i38 >> 2] | 0;
 if ((i3 + i37 | 0) >= (i44 | 0)) {
  STACKTOP = i6;
  return;
 }
 if (((HEAP32[i4 + 8 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) + i3 | 0) <= (HEAP32[(i40 ? i2 + 8 | 0 : i43 | 0) >> 2] | 0)) {
  STACKTOP = i6;
  return;
 }
 i43 = (HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0;
 do {
  if (i43) {
   i46 = 20;
  } else {
   if ((HEAP32[i35 >> 2] | 0) == 10) {
    i47 = 0;
    break;
   }
   if ((__ZN7WebCore13InlineTextBox14selectionStateEv(i1) | 0) == 0) {
    i46 = 20;
   } else {
    i47 = 1;
   }
  }
 } while (0);
 do {
  if ((i46 | 0) == 20) {
   if ((HEAP32[i35 >> 2] | 0) != 8) {
    i47 = 0;
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 do {
  if ((HEAP16[i36 >> 1] | 0) == -1) {
   i48 = i45;
   i49 = i42;
   i50 = HEAP32[i39 >> 2] | 0;
  } else {
   i40 = (HEAP32[(HEAP32[(__ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i34 >> 2] | 0) | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0;
   i3 = HEAP32[i39 >> 2] | 0;
   if (!(i40 ^ (i3 & 4 | 0) == 0)) {
    i48 = i45;
    i49 = i42;
    i50 = i3;
    break;
   }
   i40 = HEAP32[i34 >> 2] | 0;
   i4 = HEAP32[(HEAP32[i40 >> 2] | 0) + 636 >> 2] | 0;
   i44 = HEAP32[i1 + 44 >> 2] | 0;
   i37 = HEAPU16[i36 >> 1] | 0;
   d51 = +HEAPF32[((i3 & 2048 | 0) == 0 ? i1 + 24 | 0 : i1 + 20 | 0) >> 2];
   if (d51 == +0) {
    d52 = +0;
    i53 = i3;
   } else {
    i3 = __ZNK7WebCore9InlineBox4rootEv(i8) | 0;
    d52 = d51 - +HEAPF32[((HEAP32[i3 + 32 >> 2] & 2048 | 0) == 0 ? i3 + 24 | 0 : i3 + 20 | 0) >> 2];
    i53 = HEAP32[i39 >> 2] | 0;
   }
   d51 = +FUNCTION_TABLE_fiiifiii[i4 & 1](i40, i44, i37, d52, (i53 & 1 | 0) != 0, 0, 0);
   do {
    if (d51 < +2147483647) {
     if (d51 <= +-2147483648) {
      d54 = +-2147483648;
      break;
     }
     d54 = +(~~d51 | 0);
    } else {
     d54 = +2147483648;
    }
   } while (0);
   d51 = +HEAPF32[i1 + 28 >> 2] - d54;
   do {
    if (d51 < +2147483647) {
     if (d51 <= +-2147483648) {
      i55 = -2147483648;
      break;
     }
     i55 = ~~d51;
    } else {
     i55 = 2147483647;
    }
   } while (0);
   i37 = HEAP32[i39 >> 2] | 0;
   i44 = (i37 & 4 | 0) == 0 ? i55 : -i55 | 0;
   i40 = (i37 & 2048 | 0) == 0;
   i48 = (i40 ? 0 : i44) + i45 | 0;
   i49 = (i40 ? i44 : 0) + i42 | 0;
   i50 = i37;
  }
 } while (0);
 i42 = HEAP32[i2 >> 2] | 0;
 i45 = HEAP32[(HEAP32[i34 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((i50 & 1 | 0) == 0) {
   i56 = HEAP32[i45 + 36 >> 2] | 0;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i45 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i56 = HEAP32[i45 + 36 >> 2] | 0;
    break;
   } else {
    i56 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i45) | 0;
    break;
   }
  }
 } while (0);
 i45 = (HEAP32[i56 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i45 | 0) == 3 | (i45 | 0) == 0) {
  d57 = +0;
 } else {
  d57 = +-0 - +__ZNK7WebCore9InlineBox13logicalHeightEv(i8);
 }
 do {
  if (d57 < +2147483647) {
   if (d57 <= +-2147483648) {
    i58 = -2147483648;
    break;
   }
   i58 = ~~d57;
  } else {
   i58 = 2147483647;
  }
 } while (0);
 __ZN7WebCore9InlineBox25locationIncludingFlippingEv(i10, i8);
 i45 = i9;
 HEAPF32[i45 >> 2] = +(i48 | 0) + +HEAPF32[i45 >> 2];
 i48 = i10 + 4 | 0;
 HEAPF32[i48 >> 2] = +(i58 + i49 | 0) + +HEAPF32[i48 >> 2];
 i49 = i1 + 28 | 0;
 d57 = +HEAPF32[i49 >> 2];
 d54 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i8);
 i58 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i12 + 4 >> 2] = i58;
 i58 = i11 + 8 | 0;
 d52 = +d57;
 d57 = +d54;
 HEAPF32[i58 >> 2] = d52;
 HEAPF32[i58 + 4 >> 2] = d57;
 i58 = i56 + 20 | 0;
 do {
  if ((HEAP32[(HEAP32[i58 >> 2] | 0) + 296 >> 2] & 128 | 0) == 0) {
   i59 = 0;
  } else {
   i12 = HEAP32[i34 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 560 >> 2] & 31](i12) | 0)) {
    i59 = 0;
    break;
   }
   i12 = HEAP32[i34 >> 2] | 0;
   i59 = (HEAP8[i12 + 64 | 0] & 1) != 0 ? i12 : 0;
  }
 } while (0);
 i12 = (i59 | 0) == 0 & (HEAP32[i39 >> 2] & 2048 | 0) == 0;
 if (i12) {
  d57 = +HEAPF32[i11 >> 2];
  d52 = +HEAPF32[i13 + 4 >> 2] + +HEAPF32[i13 + 12 >> 2];
  __ZN7WebCore15AffineTransformC1Edddddd(i14, +0, +1, +-1, +0, d57 + d52, d52 - d57);
  __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i42, i14);
 }
 do {
  if ((__ZNK7WebCore10RenderText8textNodeEv(HEAP32[i34 >> 2] | 0) | 0) == 0) {
   i60 = 0;
   i61 = 1;
  } else {
   i14 = HEAP32[i34 >> 2] | 0;
   i9 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 464 >> 2] | 0) + 8 >> 2] | 0;
   if ((i9 | 0) != (__ZNK7WebCore10RenderText8textNodeEv(i14) | 0)) {
    i60 = 0;
    i61 = 1;
    break;
   }
   i60 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 464 >> 2] | 0) + 28 >> 2] | 0) != 0;
   i61 = 0;
  }
 } while (0);
 __ZN7WebCore21computeTextPaintStyleERKNS_10RenderTextERKNS_11RenderStyleERKNS_9PaintInfoE(i15, HEAP32[i34 >> 2] | 0, i56, i2);
 __ZN7WebCore30computeTextSelectionPaintStyleERKNS_14TextPaintStyleERKNS_10RenderTextERKNS_11RenderStyleERKNS_9PaintInfoERbSC_RPKNS_10ShadowDataE(i19, i15, HEAP32[i34 >> 2] | 0, i56, i2, i16, i17, i18);
 i14 = HEAP32[i34 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i58 >> 2] | 0) + 296 >> 2] & 128 | 0) == 0) {
   i46 = 55;
  } else {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 560 >> 2] & 31](i14) | 0)) {
    i46 = 55;
    break;
   }
   if ((HEAP8[i14 + 64 | 0] & 1) == 0) {
    i46 = 55;
    break;
   }
   i62 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i14 + 56 >> 2] | 0) | 0;
  }
 } while (0);
 if ((i46 | 0) == 55) {
  i62 = __ZNK7WebCore11RenderStyle4fontEv(i56) | 0;
 }
 d57 = +HEAPF32[i45 >> 2];
 d52 = +HEAPF32[i48 >> 2];
 i14 = i62 + 24 | 0;
 i9 = HEAP32[i14 >> 2] | 0;
 i50 = i9 + 44 | 0;
 i55 = HEAP32[i50 >> 2] | 0;
 if ((i55 | 0) == 0) {
  i53 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i9, i62 | 0, 0) | 0;
  i9 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i53 >> 2] | 0) + 8 >> 2] & 3](i53, 32) | 0;
  HEAP32[i50 >> 2] = i9;
  i63 = i9;
 } else {
  i63 = i55;
 }
 d54 = d52 + +(_round(+(+HEAPF32[i63 + 16 >> 2])) | 0);
 HEAPF32[i20 >> 2] = d57;
 HEAPF32[i20 + 4 >> 2] = d54;
 i63 = (i59 | 0) != 0;
 if (i63) {
  __ZNK7WebCore17RenderCombineText16adjustTextOriginERNS_10FloatPointERKNS_9FloatRectE(i59, i20, i13);
 }
 i55 = HEAP32[i35 >> 2] | 0;
 do {
  if (!((i55 | 0) == 8 | (i55 | 0) == 10)) {
   if (i43) {
    break;
   }
   if (!(i61 | i60)) {
    i9 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 464 >> 2] | 0;
    __ZN7WebCore13InlineTextBox26paintCompositionBackgroundEPNS_15GraphicsContextERKNS_10FloatPointERKNS_11RenderStyleERKNS_4FontEii(i1, i42, i10, i56, i62, HEAP32[i9 + 12 >> 2] | 0, HEAP32[i9 + 16 >> 2] | 0);
   }
   __ZN7WebCore13InlineTextBox20paintDocumentMarkersEPNS_15GraphicsContextERKNS_10FloatPointERKNS_11RenderStyleERKNS_4FontEb(i1, i42, i10, i56, i62, 1);
   if (i60 | i47 ^ 1) {
    break;
   }
   i9 = i19 + 4 | 0;
   i50 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i21 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i21 + 4 >> 2] = i50;
   __ZN7WebCore13InlineTextBox14paintSelectionEPNS_15GraphicsContextERKNS_10FloatPointERKNS_11RenderStyleERKNS_4FontENS_5ColorE(i1, i42, i10, i56, i62, i22);
  }
 } while (0);
 i22 = HEAP32[i34 >> 2] | 0;
 i21 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i22 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   if ((HEAP32[i35 >> 2] | 0) != 4) {
    break;
   }
   i61 = ~~+HEAPF32[i45 >> 2];
   i43 = ~~+HEAPF32[i48 >> 2];
   i55 = ~~+HEAPF32[i49 >> 2];
   i50 = ~~+__ZNK7WebCore9InlineBox13logicalHeightEv(i8);
   HEAP32[i23 >> 2] = i61;
   HEAP32[i23 + 4 >> 2] = i43;
   HEAP32[i23 + 8 >> 2] = i55;
   HEAP32[i23 + 12 >> 2] = i50;
   __ZN7WebCore4Page26addRelevantRepaintedObjectEPNS_12RenderObjectERKNS_10LayoutRectE(i21, i22, i23);
  }
 } while (0);
 HEAP32[i24 >> 2] = HEAPU16[i41 >> 1] | 0;
 i23 = i25 | 0;
 HEAP32[i23 >> 2] = 0;
 if (i63) {
  __ZNK7WebCore17RenderCombineText17getStringToRenderEiRN3WTF6StringERi(i59, HEAP32[i1 + 44 >> 2] | 0, i25, i24);
  i64 = HEAP32[i24 >> 2] | 0;
 } else {
  i22 = HEAP32[(HEAP32[i34 >> 2] | 0) + 44 >> 2] | 0;
  do {
   if ((i22 | 0) == 0) {
    HEAP32[i23 >> 2] = i22;
    i65 = 0;
    i66 = HEAP32[i24 >> 2] | 0;
   } else {
    i21 = i22 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
    i21 = HEAP32[i23 >> 2] | 0;
    HEAP32[i23 >> 2] = i22;
    if ((i21 | 0) == 0) {
     i67 = i22;
     i68 = HEAP32[i24 >> 2] | 0;
    } else {
     i8 = i21 | 0;
     i49 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i49 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
     } else {
      HEAP32[i8 >> 2] = i49;
     }
     i49 = HEAP32[i23 >> 2] | 0;
     i8 = HEAP32[i24 >> 2] | 0;
     if ((i49 | 0) == 0) {
      i65 = 0;
      i66 = i8;
      break;
     } else {
      i67 = i49;
      i68 = i8;
     }
    }
    i65 = HEAP32[i67 + 4 >> 2] | 0;
    i66 = i68;
   }
  } while (0);
  i68 = HEAP32[i1 + 44 >> 2] | 0;
  do {
   if (!((i66 | 0) == (i65 | 0) & (i68 | 0) == 0)) {
    __ZNK3WTF6String20substringSharingImplEjj(i26, i25, i68, i66);
    i67 = i26 | 0;
    i22 = HEAP32[i67 >> 2] | 0;
    HEAP32[i67 >> 2] = 0;
    i8 = HEAP32[i23 >> 2] | 0;
    HEAP32[i23 >> 2] = i22;
    do {
     if ((i8 | 0) != 0) {
      i22 = i8 | 0;
      i49 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
      if ((i49 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i8);
       break;
      } else {
       HEAP32[i22 >> 2] = i49;
       break;
      }
     }
    } while (0);
    i8 = HEAP32[i67 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    i49 = i8 | 0;
    i22 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i49 >> 2] = i22;
     break;
    }
   }
  } while (0);
  i64 = (HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 44 >> 2] | 0) + 4 >> 2] | 0) - (HEAP32[i1 + 44 >> 2] | 0) | 0;
 }
 HEAP32[i27 >> 2] = 0;
 i26 = i27 + 4 | 0;
 HEAP32[i26 >> 2] = 0;
 i66 = i27 + 8 | 0;
 HEAP32[i66 >> 2] = 0;
 HEAP8[i27 + 12 | 0] = 1;
 HEAP32[i27 + 16 >> 2] = 0;
 HEAP32[i27 + 20 >> 2] = 0;
 __ZN3WTF13StringBuilder15reserveCapacityEj(i27 | 0, 256);
 i68 = i29 | 0;
 i25 = HEAP32[i23 >> 2] | 0;
 HEAP32[i68 >> 2] = i25;
 if ((i25 | 0) != 0) {
  i65 = i25 | 0;
  HEAP32[i65 >> 2] = (HEAP32[i65 >> 2] | 0) + 2;
 }
 __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEN3WTF6StringEiPNS_24BufferForAppendingHyphenE(i28, i1, i56, i62, i29, i64, (HEAP32[i39 >> 2] & 32768 | 0) != 0 ? i27 : 0);
 i27 = HEAP32[i68 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i68 = i27 | 0;
   i64 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
   if ((i64 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i68 >> 2] = i64;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i39 >> 2] & 32768 | 0) != 0) {
  HEAP32[i24 >> 2] = HEAP32[i28 + 8 >> 2];
 }
 do {
  if (i47) {
   if ((HEAP8[i16] & 1) == 0) {
    if ((HEAP8[i17] & 1) == 0) {
     i69 = 0;
     i70 = 0;
     break;
    }
   }
   i27 = HEAP32[i34 >> 2] | 0;
   do {
    if ((HEAP32[i27 + 20 >> 2] & 234881024 | 0) == 67108864) {
     HEAP32[i7 >> 2] = 0;
     HEAP32[i5 >> 2] = HEAP32[(HEAP32[i27 + 44 >> 2] | 0) + 4 >> 2];
    } else {
     __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i27, i7, i5);
     i64 = HEAP32[i34 >> 2] | 0;
     i68 = (HEAP32[i64 + 20 >> 2] | 0) >>> 25 & 7;
     if ((i68 | 0) == 1) {
      HEAP32[i5 >> 2] = HEAP32[(HEAP32[i64 + 44 >> 2] | 0) + 4 >> 2];
      break;
     } else if ((i68 | 0) == 3) {
      HEAP32[i7 >> 2] = 0;
      break;
     } else {
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i1 + 44 >> 2] | 0;
   i67 = (HEAP32[i7 >> 2] | 0) - i27 | 0;
   i68 = (HEAP32[i5 >> 2] | 0) - i27 | 0;
   i27 = HEAPU16[i41 >> 1] | 0;
   i69 = (i27 | 0) < (i68 | 0) ? i27 : i68;
   i70 = (i67 | 0) < 0 ? 0 : i67;
  } else {
   i69 = 0;
   i70 = 0;
  }
 } while (0);
 i5 = HEAP16[i36 >> 1] | 0;
 i36 = i5 & 65535;
 if (i5 << 16 >> 16 == -1) {
  i71 = i69;
  i72 = i70;
 } else {
  HEAP32[i24 >> 2] = i36;
  i71 = (i36 | 0) < (i69 | 0) ? i36 : i69;
  i72 = (i36 | 0) < (i70 | 0) ? i36 : i70;
 }
 L165 : do {
  if ((__ZNK7WebCore11RenderStyle16textEmphasisMarkEv(i56) | 0) == 0) {
   i73 = __ZN3WTF8nullAtomE;
   i74 = 0;
  } else {
   i70 = (HEAP32[(HEAP32[i56 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 27 & 1;
   do {
    if ((i70 | 0) == 0) {
     i36 = __ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i34 >> 2] | 0) | 0;
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i36 >> 2] | 0) + 164 >> 2] & 31](i36 | 0) | 0)) {
      i75 = 0;
      break;
     }
     i69 = i36 + 8 | 0;
     i36 = HEAP32[i69 >> 2] | 0;
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i36 >> 2] | 0) + 168 >> 2] & 31](i36 | 0) | 0)) {
      i75 = 0;
      break;
     }
     i36 = __ZNK7WebCore13RenderRubyRun8rubyTextEv(HEAP32[i69 >> 2] | 0) | 0;
     if ((i36 | 0) == 0) {
      i75 = 0;
      break;
     }
     if (__ZNK7WebCore15RenderBlockFlow8hasLinesEv(i36 | 0) | 0) {
      i73 = __ZN3WTF8nullAtomE;
      i74 = 0;
      break L165;
     } else {
      i75 = 0;
     }
    } else {
     i75 = i70;
    }
   } while (0);
   i73 = __ZNK7WebCore11RenderStyle22textEmphasisMarkStringEv(i56) | 0;
   i74 = i75;
  }
 } while (0);
 i75 = HEAP32[i73 >> 2] | 0;
 do {
  if ((i75 | 0) == 0) {
   i76 = 0;
  } else {
   if ((HEAP32[i75 + 4 >> 2] | 0) == 0) {
    i76 = 0;
    break;
   }
   i70 = HEAP32[i14 >> 2] | 0;
   i36 = i70 + 44 | 0;
   i69 = HEAP32[i36 >> 2] | 0;
   if ((i69 | 0) == 0) {
    i5 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i70, i62 | 0, 0) | 0;
    i70 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 3](i5, 32) | 0;
    HEAP32[i36 >> 2] = i70;
    i77 = i70;
   } else {
    i77 = i69;
   }
   if ((i74 | 0) == 0) {
    i69 = _round(+(+HEAPF32[i77 + 16 >> 2])) | 0;
    i76 = -((__ZNK7WebCore4Font19emphasisMarkDescentERKN3WTF12AtomicStringE(i62, i73) | 0) + i69 | 0) | 0;
    break;
   } else {
    i69 = _round(+(+HEAPF32[i77 + 20 >> 2])) | 0;
    i76 = (__ZNK7WebCore4Font18emphasisMarkAscentERKN3WTF12AtomicStringE(i62, i73) | 0) + i69 | 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i2 + 24 >> 2] & 2 | 0) == 0) {
  i78 = HEAP32[(HEAP32[i56 + 24 >> 2] | 0) + 60 >> 2] | 0;
 } else {
  i78 = 0;
 }
 __ZN7WebCore11TextPainterC1ERNS_15GraphicsContextEbbRKNS_4FontEiiiRKN3WTF12AtomicStringEPNS_17RenderCombineTextERNS_7TextRunERNS_9FloatRectERNS_10FloatPointEiPKNS_10ShadowDataESK_bRNS_14TextPaintStyleESM_(i30, i42, (HEAP8[i16] & 1) != 0, (HEAP8[i17] & 1) != 0, i62, i72, i71, HEAP32[i24 >> 2] | 0, i73, i59, i28, i13, i20, i76, i78, HEAP32[i18 >> 2] | 0, (HEAP32[i39 >> 2] & 2048 | 0) != 0, i15, i19);
 __ZN7WebCore11TextPainter9paintTextEv(i30);
 i30 = (HEAP32[i56 + 40 >> 2] | 0) >>> 19 & 15;
 do {
  if ((i30 | 0) == 0) {
   i46 = 130;
  } else {
   if ((HEAP32[i35 >> 2] | 0) == 8) {
    break;
   }
   __ZN7WebCore21updateGraphicsContextERNS_15GraphicsContextERKNS_14TextPaintStyleENS_13FillColorTypeE(i42, i15, 0);
   if (i63) {
    i19 = i11;
    d54 = +HEAPF32[i19 >> 2];
    i39 = i13 + 4 | 0;
    i18 = i13 + 12 | 0;
    d57 = +HEAPF32[i39 >> 2] + +HEAPF32[i18 >> 2];
    __ZN7WebCore15AffineTransformC1Edddddd(i31, +0, +1, +-1, +0, d54 + d57, d57 - d54);
    __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i42, i31);
    __ZN7WebCore13InlineTextBox15paintDecorationERNS_15GraphicsContextERKNS_10FloatPointENS_14TextDecorationENS_19TextDecorationStyleEPKNS_10ShadowDataERNS_11TextPainterE(i1, i42, i10, i30, (HEAP32[(HEAP32[i58 >> 2] | 0) + 296 >> 2] | 0) >>> 8 & 7, i78, 0);
    d54 = +HEAPF32[i19 >> 2];
    d57 = +HEAPF32[i39 >> 2] + +HEAPF32[i18 >> 2];
    __ZN7WebCore15AffineTransformC1Edddddd(i32, +0, +-1, +1, +0, d54 - d57, d54 + d57);
    __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i42, i32);
    i46 = 130;
    break;
   } else {
    __ZN7WebCore13InlineTextBox15paintDecorationERNS_15GraphicsContextERKNS_10FloatPointENS_14TextDecorationENS_19TextDecorationStyleEPKNS_10ShadowDataERNS_11TextPainterE(i1, i42, i10, i30, (HEAP32[(HEAP32[i58 >> 2] | 0) + 296 >> 2] | 0) >>> 8 & 7, i78, 0);
    i46 = 130;
    break;
   }
  }
 } while (0);
 L193 : do {
  if ((i46 | 0) == 130) {
   if ((HEAP32[i35 >> 2] | 0) != 4) {
    break;
   }
   __ZN7WebCore13InlineTextBox20paintDocumentMarkersEPNS_15GraphicsContextERKNS_10FloatPointERKNS_11RenderStyleERKNS_4FontEb(i1, i42, i10, i56, i62, 0);
   if (!i60) {
    break;
   }
   i78 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 464 >> 2] | 0;
   i58 = i78 + 28 | 0;
   i30 = HEAP32[i58 >> 2] | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   i32 = i78 + 20 | 0;
   i78 = i1 + 44 | 0;
   i31 = 0;
   i63 = i30;
   while (1) {
    if (i63 >>> 0 <= i31 >>> 0) {
     break;
    }
    i15 = HEAP32[i32 >> 2] | 0;
    i18 = i15 + (i31 * 20 & -1) | 0;
    i39 = i15 + (i31 * 20 & -1) + 4 | 0;
    i15 = HEAP32[i78 >> 2] | 0;
    if ((HEAP32[i39 >> 2] | 0) >>> 0 > i15 >>> 0) {
     i19 = HEAP16[i41 >> 1] | 0;
     if (i19 << 16 >> 16 == 0) {
      i79 = i15;
     } else {
      i79 = i15 - 1 + (i19 & 65535) | 0;
     }
     if ((HEAP32[i18 >> 2] | 0) >>> 0 > i79 >>> 0) {
      break L193;
     }
     __ZN7WebCore13InlineTextBox25paintCompositionUnderlineEPNS_15GraphicsContextERKNS_10FloatPointERKNS_20CompositionUnderlineE(i1, i42, i10, i18);
     i18 = HEAP16[i41 >> 1] | 0;
     i19 = HEAP32[i78 >> 2] | 0;
     if (i18 << 16 >> 16 == 0) {
      i80 = i19;
     } else {
      i80 = (i18 & 65535) - 1 + i19 | 0;
     }
     if ((HEAP32[i39 >> 2] | 0) >>> 0 > (i80 + 1 | 0) >>> 0) {
      break L193;
     }
    }
    i39 = i31 + 1 | 0;
    if (i39 >>> 0 >= i30 >>> 0) {
     break L193;
    }
    i31 = i39;
    i63 = HEAP32[i58 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if (i12) {
  d57 = +HEAPF32[i11 >> 2];
  d54 = +HEAPF32[i13 + 4 >> 2] + +HEAPF32[i13 + 12 >> 2];
  __ZN7WebCore15AffineTransformC1Edddddd(i33, +0, +-1, +1, +0, d57 - d54, d57 + d54);
  __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i42, i33);
 }
 i33 = HEAP32[i28 + 32 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i28 = i33 + 4 | 0;
   i42 = i28 | 0;
   i13 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i42 >> 2] = i13;
    break;
   }
   i13 = i28 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
  }
 } while (0);
 i33 = HEAP32[i66 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i66 = i33 | 0;
   i13 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i66 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i26 = i33 | 0;
   i13 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i26 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i23 >> 2] | 0;
 if ((i33 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i23 = i33 | 0;
 i13 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
 if ((i13 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i33);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i23 >> 2] = i13;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore13InlineTextBox15paintDecorationERNS_15GraphicsContextERKNS_10FloatPointENS_14TextDecorationENS_19TextDecorationStyleEPKNS_10ShadowDataERNS_11TextPainterE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, d42 = +0, d43 = +0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, d54 = +0, d55 = +0, d56 = +0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = i16 | 0;
 i18 = i16;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i31 = HEAP16[i1 + 50 >> 1] | 0;
 if (i31 << 16 >> 16 == -2) {
  STACKTOP = i7;
  return;
 }
 i32 = i3;
 i3 = HEAP32[i32 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i32 >> 2];
 HEAP32[i8 + 4 >> 2] = i3;
 i3 = i1 | 0;
 i32 = i1 + 28 | 0;
 do {
  if (i31 << 16 >> 16 == -1) {
   d33 = +HEAPF32[i32 >> 2];
   i34 = i1 + 16 | 0;
   i35 = i1 + 32 | 0;
  } else {
   i36 = i1 + 16 | 0;
   i37 = HEAP32[i36 >> 2] | 0;
   i38 = HEAP32[(HEAP32[i37 >> 2] | 0) + 636 >> 2] | 0;
   i39 = HEAP32[i1 + 44 >> 2] | 0;
   i40 = i1 + 32 | 0;
   i41 = HEAP32[i40 >> 2] | 0;
   d42 = +HEAPF32[((i41 & 2048 | 0) == 0 ? i1 + 24 | 0 : i1 + 20 | 0) >> 2];
   if (d42 == +0) {
    d43 = +0;
    i44 = i41;
   } else {
    i41 = __ZNK7WebCore9InlineBox4rootEv(i3) | 0;
    d43 = d42 - +HEAPF32[((HEAP32[i41 + 32 >> 2] & 2048 | 0) == 0 ? i41 + 24 | 0 : i41 + 20 | 0) >> 2];
    i44 = HEAP32[i40 >> 2] | 0;
   }
   d42 = +FUNCTION_TABLE_fiiifiii[i38 & 1](i37, i39, i31 & 65535, d43, (i44 & 1 | 0) != 0, 0, 0);
   if ((HEAP32[i40 >> 2] & 4 | 0) == 0) {
    d33 = d42;
    i34 = i36;
    i35 = i40;
    break;
   }
   i39 = i8;
   HEAPF32[i39 >> 2] = +HEAPF32[i39 >> 2] + (+HEAPF32[i32 >> 2] - d42);
   i39 = i9 + 4 | 0;
   HEAPF32[i39 >> 2] = +HEAPF32[i39 >> 2] + +0;
   d33 = d42;
   i34 = i36;
   i35 = i40;
  }
 } while (0);
 i32 = i10 | 0;
 HEAP32[i32 >> 2] = 0;
 HEAP8[i10 + 4 | 0] = 0;
 i44 = i11 | 0;
 HEAP32[i44 >> 2] = 0;
 HEAP8[i11 + 4 | 0] = 0;
 i31 = i12 | 0;
 HEAP32[i31 >> 2] = 0;
 HEAP8[i12 + 4 | 0] = 0;
 __ZN7WebCore12RenderObject23getTextDecorationColorsEiRNS_5ColorES2_S2_bb(HEAP32[i34 >> 2] | 0, i4, i10, i11, i12, 1, 0);
 if ((HEAP32[i35 >> 2] & 1 | 0) != 0) {
  __ZN7WebCore12RenderObject23getTextDecorationColorsEiRNS_5ColorES2_S2_bb(HEAP32[i34 >> 2] | 0, i4, i10, i11, i12, 1, 1);
 }
 i40 = (HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0;
 __ZN7WebCore15GraphicsContext18setStrokeThicknessEf(i2, +1);
 do {
  if (i40) {
   i45 = 0;
  } else {
   if ((i4 & 1 | 0) != 0) {
    if ((HEAP32[i32 >> 2] & -16777216 | 0) != -16777216) {
     i45 = 0;
     break;
    }
   }
   if ((i4 & 2 | 0) != 0) {
    if ((HEAP32[i44 >> 2] & -16777216 | 0) != -16777216) {
     i45 = 0;
     break;
    }
   }
   if ((i4 & 4 | 0) == 0) {
    i45 = 1;
    break;
   }
   i45 = (HEAP32[i31 >> 2] & -16777216 | 0) == -16777216;
  }
 } while (0);
 i31 = HEAP32[(HEAP32[i34 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP32[i35 >> 2] & 1 | 0) == 0) {
   i46 = HEAP32[i31 + 36 >> 2] | 0;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i31 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i46 = HEAP32[i31 + 36 >> 2] | 0;
    break;
   } else {
    i46 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i31) | 0;
    break;
   }
  }
 } while (0);
 i31 = _round(+(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i46) | 0) + 4 >> 2])) | 0;
 do {
  if (i45 | (i6 | 0) == 0) {
   i47 = 0;
   i48 = 0;
  } else {
   if ((HEAP32[i6 + 32 >> 2] | 0) == 0) {
    i47 = 0;
    i48 = 0;
    break;
   }
   i44 = i31 + 2 | 0;
   d43 = +(i44 | 0);
   i32 = HEAP32[i8 >> 2] | 0;
   i36 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i14 >> 2] = i32;
   HEAP32[i14 + 4 >> 2] = i36;
   i39 = i13 + 8 | 0;
   i37 = (HEAPF32[tempDoublePtr >> 2] = d33, HEAP32[tempDoublePtr >> 2] | 0);
   i38 = i37 | 0;
   d42 = +d43;
   HEAP32[i39 >> 2] = i38;
   HEAPF32[i39 + 4 >> 2] = d42;
   i39 = i16 + 8 | 0;
   i37 = i16;
   i41 = i39;
   i49 = i18 + 4 | 0;
   i50 = i18 + 12 | 0;
   i51 = 0;
   i52 = i6;
   i53 = i36;
   i36 = i32;
   while (1) {
    i32 = ~~+Math_ceil(+(HEAP32[i52 + 8 >> 2] | 0) * 1.399999976158142);
    HEAP32[i17 >> 2] = i36;
    HEAP32[i17 + 4 >> 2] = i53;
    HEAP32[i39 >> 2] = i38;
    HEAPF32[i39 + 4 >> 2] = d42;
    d54 = +(i32 | 0);
    d55 = (HEAP32[tempDoublePtr >> 2] = i36, +HEAPF32[tempDoublePtr >> 2]) - d54;
    HEAPF32[i37 >> 2] = d55;
    HEAPF32[i41 >> 2] = d54 + (d54 + d33);
    d56 = (HEAP32[tempDoublePtr >> 2] = i53, +HEAPF32[tempDoublePtr >> 2]) - d54;
    HEAPF32[i49 >> 2] = d56;
    HEAPF32[i50 >> 2] = d54 + (d54 + d43);
    i57 = (HEAP32[i35 >> 2] & 2048 | 0) == 0;
    i58 = i52 | 0;
    i59 = i52 + 4 | 0;
    if (i57) {
     i60 = -(HEAP32[i58 >> 2] | 0) | 0;
    } else {
     i60 = HEAP32[i59 >> 2] | 0;
    }
    HEAPF32[i37 >> 2] = +(HEAP32[(i57 ? i59 : i58) >> 2] | 0) + d55;
    HEAPF32[i49 >> 2] = +(i60 | 0) + d56;
    __ZN7WebCore9FloatRect5uniteERKS0_(i15, i18);
    i58 = ((i60 | 0) > 0 ? i60 : 0) + i32 | 0;
    i61 = (i51 | 0) < (i58 | 0) ? i58 : i51;
    i58 = HEAP32[i52 + 32 >> 2] | 0;
    if ((i58 | 0) == 0) {
     break;
    }
    i51 = i61;
    i52 = i58;
    i53 = HEAP32[i8 + 4 >> 2] | 0;
    i36 = HEAP32[i8 >> 2] | 0;
   }
   __ZN7WebCore15GraphicsContext4saveEv(i2);
   __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i2, i15);
   i36 = i61 + i44 | 0;
   i53 = i8;
   HEAPF32[i53 >> 2] = +HEAPF32[i53 >> 2] + +0;
   i53 = i9 + 4 | 0;
   HEAPF32[i53 >> 2] = +(i36 | 0) + +HEAPF32[i53 >> 2];
   i47 = 1;
   i48 = i36;
  }
 } while (0);
 i61 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i34 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1;
 i34 = (i4 & 1 | 0) == 0;
 i15 = (i4 & 2 | 0) == 0;
 i60 = (i4 & 4 | 0) == 0;
 i4 = (i5 | 0) == 4;
 i18 = i8;
 i8 = i9 + 4 | 0;
 d43 = +((i31 << 1 | 0) / 3 & -1 | 0);
 i31 = i27 | 0;
 i17 = i27 + 4 | 0;
 i16 = i28 | 0;
 i13 = i28 + 4 | 0;
 i14 = i29 | 0;
 i45 = i29 + 4 | 0;
 i36 = (i5 | 0) == 1;
 i53 = i30 | 0;
 i52 = i30 + 4 | 0;
 i51 = i24 | 0;
 i49 = i24 + 4 | 0;
 i37 = i25 | 0;
 i50 = i25 + 4 | 0;
 i41 = i26 | 0;
 i39 = i26 + 4 | 0;
 i38 = i46 + 24 | 0;
 i58 = i20 | 0;
 i32 = i20 + 4 | 0;
 i59 = i21 | 0;
 i57 = i21 + 4 | 0;
 i62 = i22 | 0;
 i63 = i22 + 4 | 0;
 i64 = i23 | 0;
 i65 = i23 + 4 | 0;
 i66 = i1 + 24 | 0;
 i67 = i1 + 20 | 0;
 i1 = i19 | 0;
 i68 = i19 + 4 | 0;
 i69 = i6;
 i6 = 0;
 i70 = i48;
 while (1) {
  if ((i69 | 0) == 0) {
   i71 = 0;
   i72 = i6;
   i73 = i70;
  } else {
   i48 = i69 + 32 | 0;
   if ((HEAP32[i48 >> 2] | 0) == 0) {
    HEAPF32[i18 >> 2] = +HEAPF32[i18 >> 2] + +0;
    HEAPF32[i8 >> 2] = +(-i70 | 0) + +HEAPF32[i8 >> 2];
    i74 = 0;
   } else {
    i74 = i70;
   }
   i75 = (HEAP32[i35 >> 2] & 2048 | 0) == 0;
   i76 = i69 | 0;
   i77 = i69 + 4 | 0;
   if (i75) {
    i78 = -(HEAP32[i76 >> 2] | 0) | 0;
   } else {
    i78 = HEAP32[i77 >> 2] | 0;
   }
   HEAPF32[i1 >> 2] = +(HEAP32[(i75 ? i77 : i76) >> 2] | 0);
   HEAPF32[i68 >> 2] = +(i78 - i74 | 0);
   __ZN7WebCore15GraphicsContext9setShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i2, i19, +(HEAP32[i69 + 8 >> 2] | 0), i69 + 16 | 0, i61);
   i71 = HEAP32[i48 >> 2] | 0;
   i72 = 1;
   i73 = i74;
  }
  if ((i5 | 0) == 1) {
   i79 = 4;
  } else if ((i5 | 0) == 2) {
   i79 = i5;
  } else if ((i5 | 0) == 3) {
   i79 = i5;
  } else if ((i5 | 0) == 4) {
   i79 = 5;
  } else {
   i79 = 1;
  }
  __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i2, i79);
  do {
   if (!i34) {
    __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i2, i10, i61);
    i48 = (HEAP32[(HEAP32[i38 >> 2] | 0) + 92 >> 2] | 0) >>> 17 & 7;
    i76 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i46) | 0;
    i77 = ~~+Math_ceil(+.5);
    i75 = (i77 | 0) > 1 ? i77 : 1;
    if ((i48 | 0) == 2 | (i48 | 0) == 1) {
     i80 = (_round(+(+HEAPF32[i76 + 4 >> 2])) | 0) + i75 | 0;
    } else if ((i48 | 0) == 4) {
     d42 = +__ZNK7WebCore13RootInlineBox13maxLogicalTopEv(__ZNK7WebCore9InlineBox4rootEv(i3) | 0);
     d56 = d42 - +HEAPF32[((HEAP32[i35 >> 2] & 2048 | 0) == 0 ? i67 : i66) >> 2];
     d42 = +(i75 | 0) + +__ZNK7WebCore9InlineBox13logicalHeightEv(i3);
     i80 = ~~(d42 + (d56 < +0 ? +0 : d56));
    } else {
     i80 = (_round(+(+HEAPF32[i76 + 4 >> 2])) | 0) + i75 | 0;
    }
    d56 = +HEAPF32[i18 >> 2];
    d42 = +(i80 | 0);
    d55 = d42 + +HEAPF32[i8 >> 2];
    if (i4) {
     d54 = d55 + +2;
     HEAPF32[i58 >> 2] = d56;
     HEAPF32[i32 >> 2] = d54;
     HEAPF32[i59 >> 2] = d33 + d56;
     HEAPF32[i57 >> 2] = d54;
     __ZN7WebCoreL24strokeWavyTextDecorationERNS_15GraphicsContextERNS_10FloatPointES3_f(i2, i20, i21);
     break;
    }
    HEAPF32[i62 >> 2] = d56;
    HEAPF32[i63 >> 2] = d55;
    __ZN7WebCore15GraphicsContext15drawLineForTextERKNS_10FloatPointEfb(i2, i22, d33, i40);
    if (!i36) {
     break;
    }
    d55 = d42 + +HEAPF32[i8 >> 2] + +2;
    HEAPF32[i64 >> 2] = +HEAPF32[i18 >> 2];
    HEAPF32[i65 >> 2] = d55;
    __ZN7WebCore15GraphicsContext15drawLineForTextERKNS_10FloatPointEfb(i2, i23, d33, i40);
   }
  } while (0);
  do {
   if (!i15) {
    __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i2, i11, i61);
    if (i4) {
     d55 = +HEAPF32[i18 >> 2];
     d42 = +HEAPF32[i8 >> 2] + +-2;
     HEAPF32[i51 >> 2] = d55;
     HEAPF32[i49 >> 2] = d42;
     HEAPF32[i37 >> 2] = d33 + d55;
     HEAPF32[i50 >> 2] = d42;
     __ZN7WebCoreL24strokeWavyTextDecorationERNS_15GraphicsContextERNS_10FloatPointES3_f(i2, i24, i25);
     break;
    }
    __ZN7WebCore15GraphicsContext15drawLineForTextERKNS_10FloatPointEfb(i2, i9, d33, i40);
    if (!i36) {
     break;
    }
    d42 = +HEAPF32[i8 >> 2] + +-2;
    HEAPF32[i41 >> 2] = +HEAPF32[i18 >> 2];
    HEAPF32[i39 >> 2] = d42;
    __ZN7WebCore15GraphicsContext15drawLineForTextERKNS_10FloatPointEfb(i2, i26, d33, i40);
   }
  } while (0);
  do {
   if (!i60) {
    __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i2, i12, i61);
    d42 = +HEAPF32[i18 >> 2];
    d55 = +HEAPF32[i8 >> 2] + d43;
    if (i4) {
     HEAPF32[i31 >> 2] = d42;
     HEAPF32[i17 >> 2] = d55;
     HEAPF32[i16 >> 2] = d33 + d42;
     HEAPF32[i13 >> 2] = d55;
     __ZN7WebCoreL24strokeWavyTextDecorationERNS_15GraphicsContextERNS_10FloatPointES3_f(i2, i27, i28);
     break;
    }
    HEAPF32[i14 >> 2] = d42;
    HEAPF32[i45 >> 2] = d55;
    __ZN7WebCore15GraphicsContext15drawLineForTextERKNS_10FloatPointEfb(i2, i29, d33, i40);
    if (!i36) {
     break;
    }
    d55 = d43 + (+HEAPF32[i8 >> 2] + +2);
    HEAPF32[i53 >> 2] = +HEAPF32[i18 >> 2];
    HEAPF32[i52 >> 2] = d55;
    __ZN7WebCore15GraphicsContext15drawLineForTextERKNS_10FloatPointEfb(i2, i30, d33, i40);
   }
  } while (0);
  if ((i71 | 0) == 0) {
   break;
  } else {
   i69 = i71;
   i6 = i72;
   i70 = i73;
  }
 }
 if (i47) {
  __ZN7WebCore15GraphicsContext7restoreEv(i2);
  STACKTOP = i7;
  return;
 }
 if (!i72) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore15GraphicsContext11clearShadowEv(i2);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore13InlineTextBox14paintSelectionEPNS_15GraphicsContextERKNS_10FloatPointERKNS_11RenderStyleERKNS_4FontENS_5ColorE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, d38 = +0, d39 = +0, d40 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 36 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i25 = i24 | 0;
 i26 = i24;
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0) {
  STACKTOP = i7;
  return;
 }
 i27 = i1 + 16 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 do {
  if ((HEAP32[i28 + 20 >> 2] & 234881024 | 0) == 67108864) {
   HEAP32[i8 >> 2] = 0;
   HEAP32[i9 >> 2] = HEAP32[(HEAP32[i28 + 44 >> 2] | 0) + 4 >> 2];
   i29 = i28;
  } else {
   __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i28, i8, i9);
   i30 = HEAP32[i27 >> 2] | 0;
   i31 = (HEAP32[i30 + 20 >> 2] | 0) >>> 25 & 7;
   if ((i31 | 0) == 1) {
    HEAP32[i9 >> 2] = HEAP32[(HEAP32[i30 + 44 >> 2] | 0) + 4 >> 2];
    i29 = i30;
    break;
   } else if ((i31 | 0) == 3) {
    HEAP32[i8 >> 2] = 0;
    i29 = i30;
    break;
   } else {
    i29 = i30;
    break;
   }
  }
 } while (0);
 i28 = i1 + 44 | 0;
 i30 = HEAP32[i28 >> 2] | 0;
 i31 = (HEAP32[i8 >> 2] | 0) - i30 | 0;
 i8 = (i31 | 0) < 0 ? 0 : i31;
 i31 = (HEAP32[i9 >> 2] | 0) - i30 | 0;
 i30 = i1 + 48 | 0;
 i9 = HEAPU16[i30 >> 1] | 0;
 i32 = (i9 | 0) < (i31 | 0) ? i9 : i31;
 if ((i8 | 0) >= (i32 | 0)) {
  STACKTOP = i7;
  return;
 }
 __ZNK7WebCore12RenderObject24selectionBackgroundColorEv(i11, i29);
 if ((HEAP8[i11 + 4 | 0] & 1) == 0) {
  STACKTOP = i7;
  return;
 }
 i29 = i10;
 i31 = HEAP32[i29 >> 2] | 0;
 if (i31 >>> 0 < 16777216 >>> 0) {
  STACKTOP = i7;
  return;
 }
 do {
  if ((HEAP32[i6 >> 2] | 0) == (i31 | 0)) {
   if ((HEAP8[i6 + 4 | 0] & 1) == 0) {
    break;
   }
   HEAP32[i29 >> 2] = __ZN7WebCore7makeRGBEiii(i31 >>> 16 & 255 ^ 255, i31 >>> 8 & 255 ^ 255, i31 & 255 ^ 255) | 0;
   HEAP8[i10 + 4 | 0] = 1;
  }
 } while (0);
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 i31 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i13 + 4 >> 2] = i31;
 i31 = i4 + 24 | 0;
 __ZN7WebCore14TextPaintStyleC1ENS_5ColorENS_10ColorSpaceE(i12, i14, (HEAP32[(HEAP32[i31 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 __ZN7WebCore21updateGraphicsContextERNS_15GraphicsContextERKNS_14TextPaintStyleENS_13FillColorTypeE(i2, i12, 0);
 i12 = HEAP16[i1 + 50 >> 1] | 0;
 if (i12 << 16 >> 16 == -1) {
  i33 = HEAP16[i30 >> 1] | 0;
 } else {
  i33 = i12;
 }
 i12 = i33 & 65535;
 i33 = HEAP32[(HEAP32[i27 >> 2] | 0) + 44 >> 2] | 0;
 i30 = i15 | 0;
 HEAP32[i30 >> 2] = i33;
 do {
  if ((i33 | 0) == 0) {
   i34 = 0;
  } else {
   i14 = i33 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   i14 = HEAP32[i30 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i34 = 0;
    break;
   }
   i34 = HEAP32[i14 + 4 >> 2] | 0;
  }
 } while (0);
 i33 = HEAP32[i28 >> 2] | 0;
 do {
  if (!((i34 | 0) == (i12 | 0) & (i33 | 0) == 0)) {
   __ZNK3WTF6String20substringSharingImplEjj(i16, i15, i33, i12);
   i14 = i16 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i10 = HEAP32[i30 >> 2] | 0;
   HEAP32[i30 >> 2] = i13;
   do {
    if ((i10 | 0) != 0) {
     i13 = i10 | 0;
     i29 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i13 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i14 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i29 = i10 | 0;
   i13 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i29 >> 2] = i13;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = 0;
 i16 = i17 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 i33 = i17 + 8 | 0;
 HEAP32[i33 >> 2] = 0;
 HEAP8[i17 + 12 | 0] = 1;
 HEAP32[i17 + 16 >> 2] = 0;
 HEAP32[i17 + 20 >> 2] = 0;
 __ZN3WTF13StringBuilder15reserveCapacityEj(i17 | 0, 256);
 if ((i32 | 0) == (i12 | 0)) {
  i35 = (HEAP32[i1 + 32 >> 2] & 32768 | 0) != 0;
 } else {
  i35 = 0;
 }
 i12 = i19 | 0;
 i15 = HEAP32[i30 >> 2] | 0;
 HEAP32[i12 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i34 = i15 | 0;
  HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
 }
 __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEN3WTF6StringEiPNS_24BufferForAppendingHyphenE(i18, i1, i4, i5, i19, (HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 44 >> 2] | 0) + 4 >> 2] | 0) - (HEAP32[i28 >> 2] | 0) | 0, i35 ? i17 : 0);
 i17 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i12 = i17 | 0;
   i28 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i12 >> 2] = i28;
    break;
   }
  }
 } while (0);
 if (i35) {
  i36 = HEAP32[i18 + 8 >> 2] | 0;
 } else {
  i36 = i32;
 }
 i32 = i1 | 0;
 i35 = __ZN7WebCore9InlineBox4rootEv(i32) | 0;
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i20, i35);
 __ZNK7WebCore13RootInlineBox37selectionTopAdjustedForPrecedingBlockEv(i21, i35);
 d37 = +HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 20 | 0 : i1 + 24 | 0) >> 2];
 if ((((HEAP32[(HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
  d38 = d37 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i32);
  d39 = +(HEAP32[i20 >> 2] | 0) - d38;
 } else {
  d39 = d37 - +(HEAP32[i21 >> 2] | 0);
 }
 do {
  if (d39 < +2147483647) {
   if (d39 <= +-2147483648) {
    d40 = +-2147483648;
    break;
   }
   d40 = +(~~d39 | 0);
  } else {
   d40 = +2147483648;
  }
 } while (0);
 i32 = (HEAP32[i20 >> 2] | 0) - (HEAP32[i21 >> 2] | 0) | 0;
 i21 = (i32 | 0) > 0 ? i32 : 0;
 d39 = +HEAPF32[i3 + 4 >> 2] - d40;
 HEAPF32[i22 >> 2] = +HEAPF32[i3 >> 2];
 HEAPF32[i23 + 4 >> 2] = d39;
 d39 = +HEAPF32[i1 + 28 >> 2];
 i1 = HEAP32[i22 >> 2] | 0;
 i3 = HEAP32[i22 + 4 >> 2] | 0;
 HEAP32[i25 >> 2] = i1;
 HEAP32[i25 + 4 >> 2] = i3;
 i3 = i24 + 8 | 0;
 d40 = +d39;
 d37 = +(+(i21 | 0));
 HEAPF32[i3 >> 2] = d40;
 HEAPF32[i3 + 4 >> 2] = d37;
 d37 = (HEAP32[tempDoublePtr >> 2] = i1, +HEAPF32[tempDoublePtr >> 2]);
 d40 = +Math_floor(d37 + d39);
 d39 = +Math_floor(d37);
 HEAPF32[i24 >> 2] = d39;
 HEAPF32[i3 >> 2] = +_round(+(d40 - d39));
 __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i2, i26);
 __ZN7WebCore15GraphicsContext20drawHighlightForTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEiRKNS_5ColorENS_10ColorSpaceEii(i2, i5, i18, i23, i21, i11, (HEAP32[(HEAP32[i31 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1, i8, i36);
 i36 = HEAP32[i18 + 32 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i18 = i36 + 4 | 0;
   i8 = i18 | 0;
   i31 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i8 >> 2] = i31;
    break;
   }
   i31 = i18 - 4 | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 31](i31);
  }
 } while (0);
 i36 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i33 = i36 | 0;
   i31 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i33 >> 2] = i31;
    break;
   }
  }
 } while (0);
 i36 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i16 = i36 | 0;
   i31 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i16 >> 2] = i31;
    break;
   }
  }
 } while (0);
 i36 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i36 | 0) != 0) {
   i30 = i36 | 0;
   i31 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
    break;
   } else {
    HEAP32[i30 >> 2] = i31;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore13InlineTextBox19paintDocumentMarkerEPNS_15GraphicsContextERKNS_10FloatPointEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontEb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, d47 = +0, d48 = +0, d49 = +0, i50 = 0, i51 = 0, d52 = +0, d53 = +0, d54 = +0, d55 = +0, d56 = +0, d57 = +0, i58 = 0, i59 = 0, i60 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 32 | 0;
 i13 = i8 + 40 | 0;
 i14 = i8 + 48 | 0;
 i15 = i8 + 56 | 0;
 i16 = i8 + 96 | 0;
 i17 = i16 | 0;
 i18 = i16;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i22 = i21 | 0;
 i23 = i21;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i25 = i24 | 0;
 i26 = i24;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i29 = i1 + 16 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i30 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
  STACKTOP = i8;
  return;
 }
 i31 = HEAP16[i1 + 50 >> 1] | 0;
 if (i31 << 16 >> 16 == -2) {
  STACKTOP = i8;
  return;
 }
 i32 = i1 | 0;
 d33 = +HEAPF32[i1 + 28 >> 2];
 i34 = HEAP32[i1 + 44 >> 2] | 0;
 i35 = HEAP32[i4 + 4 >> 2] | 0;
 i36 = HEAP16[i1 + 48 >> 1] | 0;
 if (i36 << 16 >> 16 == 0) {
  i37 = i34;
 } else {
  i37 = i34 - 1 + (i36 & 65535) | 0;
 }
 i38 = HEAP32[i4 + 8 >> 2] | 0;
 i39 = i31 << 16 >> 16 == -1;
 i40 = i4 | 0;
 i41 = (HEAP32[i40 >> 2] | 0) == 512;
 do {
  if (i39 & ((i37 + 1 | 0) == (i38 | 0) & (i34 | 0) > (i35 | 0)) ^ 1 | i7 | i41) {
   i42 = i35 - i34 | 0;
   i43 = i38 - i34 | 0;
   i44 = i36 & 65535;
   i45 = (i44 | 0) < (i43 | 0) ? i44 : i43;
   i43 = i31 & 65535;
   if (i39) {
    i46 = i45;
   } else {
    i46 = (i43 | 0) < (i45 | 0) ? i43 : i45;
   }
   if ((((HEAP32[(HEAP32[(HEAP32[i30 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
    __ZNK7WebCore13RootInlineBox15selectionBottomEv(i12, __ZNK7WebCore9InlineBox4rootEv(i32) | 0);
    d47 = +HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 20 | 0 : i1 + 24 | 0) >> 2];
    d48 = d47 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i32);
    d49 = +(HEAP32[i12 >> 2] | 0) - d48;
   } else {
    d48 = +HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 20 | 0 : i1 + 24 | 0) >> 2];
    __ZNK7WebCore13RootInlineBox12selectionTopEv(i13, __ZNK7WebCore9InlineBox4rootEv(i32) | 0);
    d49 = d48 - +(HEAP32[i13 >> 2] | 0);
   }
   i45 = __ZNK7WebCore9InlineBox4rootEv(i32) | 0;
   __ZNK7WebCore13RootInlineBox15selectionBottomEv(i9, i45);
   __ZNK7WebCore13RootInlineBox12selectionTopEv(i10, i45);
   i45 = (HEAP32[i9 >> 2] | 0) - (HEAP32[i10 >> 2] | 0) | 0;
   i43 = i3 | 0;
   i44 = i3 + 4 | 0;
   d48 = +HEAPF32[i44 >> 2] - +(~~d49 | 0);
   i50 = i14 | 0;
   HEAPF32[i50 >> 2] = +HEAPF32[i43 >> 2];
   HEAPF32[i14 + 4 >> 2] = d48;
   __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEPNS_24BufferForAppendingHyphenE(i15, i1, i5, i6, 0);
   __ZNK7WebCore4Font20selectionRectForTextERKNS_7TextRunERKNS_10FloatPointEiii(i19, i6, i15, i14, (i45 | 0) > 0 ? i45 : 0, (i42 | 0) < 0 ? 0 : i42, i46);
   __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i18, i19);
   i42 = i16;
   i45 = HEAP32[i42 >> 2] | 0;
   d48 = +(i45 | 0) - +HEAPF32[i50 >> 2];
   i50 = i16 + 8 | 0;
   d47 = +(HEAP32[i50 >> 2] | 0);
   if (i41 | i7) {
    i51 = ~~(+-0 - +HEAPF32[i44 >> 2]);
    HEAP32[i42 >> 2] = ~~(+-0 - +HEAPF32[i43 >> 2]) + i45;
    i45 = i18 + 4 | 0;
    HEAP32[i45 >> 2] = i51 + (HEAP32[i45 >> 2] | 0);
    i45 = HEAP32[i29 >> 2] | 0;
    __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i26, i18);
    i51 = HEAP32[i25 >> 2] | 0;
    i43 = HEAP32[i25 + 4 >> 2] | 0;
    HEAP32[i22 >> 2] = i51;
    HEAP32[i22 + 4 >> 2] = i43;
    d52 = (HEAP32[tempDoublePtr >> 2] = i51, +HEAPF32[tempDoublePtr >> 2]);
    d53 = d52 + +HEAPF32[i24 + 8 >> 2];
    d54 = +HEAPF32[i26 + 4 >> 2];
    HEAPF32[i21 + 8 >> 2] = d53;
    HEAPF32[i23 + 12 >> 2] = d54;
    d55 = d54 + +HEAPF32[i26 + 12 >> 2];
    HEAPF32[i21 + 16 >> 2] = d53;
    HEAPF32[i23 + 20 >> 2] = d55;
    HEAPF32[i21 + 24 >> 2] = d52;
    HEAPF32[i23 + 28 >> 2] = d55;
    __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i27, i45, i23, 0, 0, 0);
    __ZNK7WebCore9FloatQuad11boundingBoxEv(i11, i27);
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i20, i11);
    i45 = i16;
    i51 = i20;
    HEAP32[i45 >> 2] = HEAP32[i51 >> 2];
    HEAP32[i45 + 4 >> 2] = HEAP32[i51 + 4 >> 2];
    HEAP32[i45 + 8 >> 2] = HEAP32[i51 + 8 >> 2];
    HEAP32[i45 + 12 >> 2] = HEAP32[i51 + 12 >> 2];
    i51 = HEAP32[i17 + 4 >> 2] | 0;
    i45 = HEAP32[i50 >> 2] | 0;
    i43 = HEAP32[i50 + 4 >> 2] | 0;
    HEAP32[i4 + 16 >> 2] = HEAP32[i17 >> 2];
    HEAP32[i4 + 20 >> 2] = i51;
    HEAP32[i4 + 24 >> 2] = i45;
    HEAP32[i4 + 28 >> 2] = i43;
   }
   i43 = HEAP32[i15 + 32 >> 2] | 0;
   if ((i43 | 0) == 0) {
    d56 = d48;
    d57 = d47;
    break;
   }
   i45 = i43 + 4 | 0;
   i43 = i45 | 0;
   i51 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
   if ((i51 | 0) != 0) {
    HEAP32[i43 >> 2] = i51;
    d56 = d48;
    d57 = d47;
    break;
   }
   i51 = i45 - 4 | 0;
   if ((i51 | 0) == 0) {
    d56 = d48;
    d57 = d47;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 31](i51);
   d56 = d48;
   d57 = d47;
  } else {
   d56 = +0;
   d57 = d33;
  }
 } while (0);
 i15 = HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 32 >> 2] & 1 | 0) == 0) {
   i58 = HEAP32[i15 + 36 >> 2] | 0;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i15 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i58 = HEAP32[i15 + 36 >> 2] | 0;
    break;
   } else {
    i58 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i15) | 0;
    break;
   }
  }
 } while (0);
 i15 = _round(+(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i58) | 0) + 4 >> 2])) | 0;
 if ((~~(+__ZNK7WebCore9InlineBox13logicalHeightEv(i32) - +(i15 | 0)) | 0) < 6) {
  i59 = ~~(+__ZNK7WebCore9InlineBox13logicalHeightEv(i32) + +-3);
 } else {
  i59 = i15 + 2 | 0;
 }
 d33 = +(i59 | 0) + +HEAPF32[i3 + 4 >> 2];
 HEAPF32[i28 >> 2] = d56 + +HEAPF32[i3 >> 2];
 HEAPF32[i28 + 4 >> 2] = d33;
 i3 = HEAP32[i40 >> 2] | 0;
 if ((i3 | 0) == 2) {
  i60 = 1;
 } else if ((i3 | 0) == 16) {
  i60 = 2;
 } else if ((i3 | 0) == 512) {
  i60 = 3;
 } else {
  i60 = 0;
 }
 __ZN7WebCore15GraphicsContext25drawLineForDocumentMarkerERKNS_10FloatPointEfNS0_23DocumentMarkerLineStyleE(i2, i28, d57, i60);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore13InlineTextBox20paintTextMatchMarkerEPNS_15GraphicsContextERKNS_10FloatPointEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, d38 = +0, d39 = +0, d40 = +0, i41 = 0, i42 = 0, d43 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i7 + 24 | 0;
 i11 = i7 + 32 | 0;
 i12 = i7 + 40 | 0;
 i13 = i7 + 48 | 0;
 i14 = i7 + 88 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i23 = i22 | 0;
 i24 = i22;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i26 = i25 | 0;
 i27 = i25;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i30 = i29;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i33 = i32;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i36 = i1 + 16 | 0;
 i37 = i1 | 0;
 if ((((HEAP32[(HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
  __ZNK7WebCore13RootInlineBox15selectionBottomEv(i11, __ZNK7WebCore9InlineBox4rootEv(i37) | 0);
  d38 = +HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 20 | 0 : i1 + 24 | 0) >> 2];
  d39 = d38 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i37);
  d40 = +(HEAP32[i11 >> 2] | 0) - d39;
 } else {
  d39 = +HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 20 | 0 : i1 + 24 | 0) >> 2];
  __ZNK7WebCore13RootInlineBox12selectionTopEv(i12, __ZNK7WebCore9InlineBox4rootEv(i37) | 0);
  d40 = d39 - +(HEAP32[i12 >> 2] | 0);
 }
 i12 = ~~d40;
 i11 = __ZNK7WebCore9InlineBox4rootEv(i37) | 0;
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i9, i11);
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i10, i11);
 i11 = (HEAP32[i9 >> 2] | 0) - (HEAP32[i10 >> 2] | 0) | 0;
 i10 = (i11 | 0) > 0 ? i11 : 0;
 i11 = HEAP32[i1 + 44 >> 2] | 0;
 i9 = (HEAP32[i4 + 4 >> 2] | 0) - i11 | 0;
 i41 = (HEAP32[i4 + 8 >> 2] | 0) - i11 | 0;
 i11 = HEAPU16[i1 + 48 >> 1] | 0;
 i42 = i11 >>> 0 < i41 >>> 0 ? i11 : i41;
 __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEPNS_24BufferForAppendingHyphenE(i13, i1, i5, i6, 0);
 i41 = ~~+HEAPF32[i1 + 20 >> 2];
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i20, __ZNK7WebCore9InlineBox4rootEv(i37) | 0);
 i37 = HEAP32[i20 >> 2] | 0;
 HEAP32[i19 >> 2] = i41;
 HEAP32[i19 + 4 >> 2] = i37;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i18, i19);
 __ZNK7WebCore4Font20selectionRectForTextERKNS_7TextRunERKNS_10FloatPointEiii(i17, i6, i13, i18, i10, i9, i42);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i16, i17);
 i17 = HEAP32[i36 >> 2] | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i27, i16);
 i16 = HEAP32[i26 >> 2] | 0;
 i18 = HEAP32[i26 + 4 >> 2] | 0;
 HEAP32[i23 >> 2] = i16;
 HEAP32[i23 + 4 >> 2] = i18;
 d40 = (HEAP32[tempDoublePtr >> 2] = i16, +HEAPF32[tempDoublePtr >> 2]);
 d39 = d40 + +HEAPF32[i25 + 8 >> 2];
 d38 = +HEAPF32[i27 + 4 >> 2];
 HEAPF32[i22 + 8 >> 2] = d39;
 HEAPF32[i24 + 12 >> 2] = d38;
 d43 = d38 + +HEAPF32[i27 + 12 >> 2];
 HEAPF32[i22 + 16 >> 2] = d39;
 HEAPF32[i24 + 20 >> 2] = d43;
 HEAPF32[i22 + 24 >> 2] = d40;
 HEAPF32[i24 + 28 >> 2] = d43;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i28, i17, i24, 0, 0, 0);
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i8, i28);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i21, i8);
 i8 = i14;
 i28 = i21;
 HEAP32[i8 >> 2] = HEAP32[i28 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i28 + 12 >> 2];
 i28 = HEAP32[i15 + 4 >> 2] | 0;
 i8 = i14 + 8 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 i21 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 + 16 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i4 + 20 >> 2] = i28;
 HEAP32[i4 + 24 >> 2] = i14;
 HEAP32[i4 + 28 >> 2] = i21;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 464 >> 2] | 0) + 108 | 0] & 1) != 0) {
  i21 = __ZNK7WebCore14DocumentMarker11activeMatchEv(i4) | 0;
  i4 = __ZNK7WebCore12RenderObject5themeEv(HEAP32[i36 >> 2] | 0) | 0;
  i36 = HEAP32[i4 >> 2] | 0;
  if (i21) {
   FUNCTION_TABLE_vii[HEAP32[i36 + 64 >> 2] & 7](i30, i4);
  } else {
   FUNCTION_TABLE_vii[HEAP32[i36 + 68 >> 2] & 7](i30, i4);
  }
  __ZN7WebCore15GraphicsContext4saveEv(i2);
  i4 = HEAP32[i29 + 4 >> 2] | 0;
  HEAP32[i32 >> 2] = HEAP32[i29 >> 2];
  HEAP32[i32 + 4 >> 2] = i4;
  i4 = i5 + 24 | 0;
  __ZN7WebCore14TextPaintStyleC1ENS_5ColorENS_10ColorSpaceE(i31, i33, (HEAP32[(HEAP32[i4 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
  __ZN7WebCore21updateGraphicsContextERNS_15GraphicsContextERKNS_14TextPaintStyleENS_13FillColorTypeE(i2, i31, 0);
  i31 = i3 | 0;
  i33 = i3 + 4 | 0;
  d43 = +(i12 | 0);
  d40 = +HEAPF32[i33 >> 2] - d43;
  d39 = +HEAPF32[i1 + 28 >> 2];
  HEAPF32[i34 >> 2] = +HEAPF32[i31 >> 2];
  HEAPF32[i34 + 4 >> 2] = d40;
  HEAPF32[i34 + 8 >> 2] = d39;
  HEAPF32[i34 + 12 >> 2] = +(i10 | 0);
  __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i2, i34);
  d39 = +HEAPF32[i33 >> 2] - d43;
  HEAPF32[i35 >> 2] = +HEAPF32[i31 >> 2];
  HEAPF32[i35 + 4 >> 2] = d39;
  __ZN7WebCore15GraphicsContext20drawHighlightForTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEiRKNS_5ColorENS_10ColorSpaceEii(i2, i6, i13, i35, i10, i30, (HEAP32[(HEAP32[i4 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1, i9, i42);
  __ZN7WebCore15GraphicsContext7restoreEv(i2);
 }
 i2 = HEAP32[i13 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i13 = i2 + 4 | 0;
 i2 = i13 | 0;
 i42 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i42 | 0) != 0) {
  HEAP32[i2 >> 2] = i42;
  STACKTOP = i7;
  return;
 }
 i42 = i13 - 4 | 0;
 if ((i42 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i42 >> 2] | 0) + 4 >> 2] & 31](i42);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore13InlineTextBox18localSelectionRectEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, d35 = +0, i36 = 0, i37 = 0, i38 = 0, d39 = +0, i40 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 56 | 0;
 i12 = i5 + 96 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = i18 | 0;
 i20 = i18;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = i21 | 0;
 i23 = i21;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i25 = HEAP32[i2 + 44 >> 2] | 0;
 i26 = i3 - i25 | 0;
 i3 = (i26 | 0) < 0 ? 0 : i26;
 i26 = i4 - i25 | 0;
 i25 = i2 + 48 | 0;
 i4 = HEAPU16[i25 >> 1] | 0;
 i27 = (i4 | 0) < (i26 | 0) ? i4 : i26;
 if ((i3 | 0) > (i27 | 0)) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i5;
  return;
 }
 i26 = __ZN7WebCore9fontCacheEv() | 0;
 HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
 i26 = i2 | 0;
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i8, __ZNK7WebCore9InlineBox4rootEv(i26) | 0);
 i4 = __ZNK7WebCore9InlineBox4rootEv(i26) | 0;
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i6, i4);
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i7, i4);
 i4 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
 i7 = (i4 | 0) > 0 ? i4 : 0;
 HEAP32[i9 >> 2] = i7;
 i4 = i2 + 32 | 0;
 i6 = i2 + 16 | 0;
 i26 = HEAP32[i6 >> 2] | 0;
 i28 = HEAP32[i26 + 8 >> 2] | 0;
 do {
  if ((HEAP32[i4 >> 2] & 1 | 0) == 0) {
   i29 = HEAP32[i28 + 36 >> 2] | 0;
   i30 = i26;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i28 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i29 = HEAP32[i28 + 36 >> 2] | 0;
    i30 = i26;
    break;
   } else {
    i31 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i28) | 0;
    i29 = i31;
    i30 = HEAP32[i6 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[i29 + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) == 0) {
   i32 = 12;
  } else {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 560 >> 2] & 31](i30) | 0)) {
    i32 = 12;
    break;
   }
   if ((HEAP8[i30 + 64 | 0] & 1) == 0) {
    i32 = 12;
    break;
   }
   i33 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i30 + 56 >> 2] | 0) | 0;
  }
 } while (0);
 if ((i32 | 0) == 12) {
  i33 = __ZNK7WebCore11RenderStyle4fontEv(i29) | 0;
 }
 HEAP32[i10 >> 2] = 0;
 i30 = i10 + 4 | 0;
 HEAP32[i30 >> 2] = 0;
 i6 = i10 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP8[i10 + 12 | 0] = 1;
 HEAP32[i10 + 16 >> 2] = 0;
 HEAP32[i10 + 20 >> 2] = 0;
 __ZN3WTF13StringBuilder15reserveCapacityEj(i10 | 0, 256);
 if ((i27 | 0) == (HEAPU16[i25 >> 1] | 0 | 0)) {
  __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEPNS_24BufferForAppendingHyphenE(i11, i2, i29, i33, (HEAP32[i4 >> 2] & 32768 | 0) != 0 ? i10 : 0);
 } else {
  __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEPNS_24BufferForAppendingHyphenE(i11, i2, i29, i33, 0);
 }
 i29 = i2 + 20 | 0;
 i10 = i2 + 24 | 0;
 i28 = i8 | 0;
 d34 = +(HEAP32[i28 >> 2] | 0);
 HEAPF32[i12 >> 2] = +HEAPF32[((HEAP32[i4 >> 2] & 2048 | 0) == 0 ? i10 : i29) >> 2];
 HEAPF32[i13 + 4 >> 2] = d34;
 do {
  if ((i3 | 0) == 0) {
   if ((i27 | 0) != (HEAPU16[i25 >> 1] | 0 | 0)) {
    i32 = 18;
    break;
   }
   i8 = i2 + 28 | 0;
   d34 = +HEAPF32[i8 >> 2];
   i26 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i22 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i22 + 4 >> 2] = i26;
   i26 = i21 + 8 | 0;
   d35 = +d34;
   d34 = +(+(i7 | 0));
   HEAPF32[i26 >> 2] = d35;
   HEAPF32[i26 + 4 >> 2] = d34;
   __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i20, i23);
   i36 = HEAP32[i19 >> 2] | 0;
   i37 = HEAP32[i18 + 8 >> 2] | 0;
   i38 = i8;
  } else {
   i32 = 18;
  }
 } while (0);
 if ((i32 | 0) == 18) {
  __ZNK7WebCore4Font20selectionRectForTextERKNS_7TextRunERKNS_10FloatPointEiii(i17, i33, i11, i13, i7, i3, i27);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i16, i17);
  i36 = HEAP32[i15 >> 2] | 0;
  i37 = HEAP32[i14 + 8 >> 2] | 0;
  i38 = i2 + 28 | 0;
 }
 HEAP32[i24 >> 2] = i37;
 i2 = HEAP32[i4 >> 2] & 2048;
 d34 = +HEAPF32[((i2 | 0) == 0 ? i10 : i29) >> 2] + +HEAPF32[i38 >> 2];
 d35 = +(i36 | 0);
 do {
  if (d35 > d34) {
   HEAP32[i24 >> 2] = 0;
  } else {
   if (+(i37 + i36 | 0) <= d34) {
    break;
   }
   d39 = d34 - d35;
   do {
    if (d39 < +2147483647) {
     if (d39 <= +-2147483648) {
      i40 = -2147483648;
      break;
     }
     i40 = ~~d39;
    } else {
     i40 = 2147483647;
    }
   } while (0);
   HEAP32[i24 >> 2] = i40;
  }
 } while (0);
 i40 = (i2 | 0) != 0;
 i2 = HEAP32[i28 >> 2] | 0;
 i28 = i24;
 i24 = i9;
 i9 = HEAP32[(i40 ? i28 : i24) >> 2] | 0;
 i37 = HEAP32[(i40 ? i24 : i28) >> 2] | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i40 ? i36 : i2;
 HEAP32[i28 + 4 >> 2] = i40 ? i2 : i36;
 i36 = i1 + 8 | 0;
 HEAP32[i36 >> 2] = i9;
 HEAP32[i36 + 4 >> 2] = i37;
 i37 = HEAP32[i11 + 32 >> 2] | 0;
 do {
  if ((i37 | 0) != 0) {
   i11 = i37 + 4 | 0;
   i36 = i11 | 0;
   i9 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i36 >> 2] = i9;
    break;
   }
   i9 = i11 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i37 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i37 | 0) != 0) {
   i6 = i37 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i37);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i37 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i37 | 0) != 0) {
   i30 = i37 | 0;
   i9 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i37);
    break;
   } else {
    HEAP32[i30 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i37 = __ZN7WebCore9fontCacheEv() | 0;
 i9 = i37 | 0;
 i30 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i30;
 if ((i30 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i37);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13InlineTextBox20paintDocumentMarkersEPNS_15GraphicsContextERKNS_10FloatPointERKNS_11RenderStyleERKNS_4FontEb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i1 + 16 | 0;
 if ((__ZNK7WebCore10RenderText8textNodeEv(HEAP32[i10 >> 2] | 0) | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i11 = HEAP32[i10 >> 2] | 0;
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1124 >> 2] | 0;
 i12 = __ZNK7WebCore10RenderText8textNodeEv(i11) | 0;
 HEAP32[i9 >> 2] = 1023;
 __ZN7WebCore24DocumentMarkerController10markersForEPNS_4NodeENS_14DocumentMarker11MarkerTypesE(i8, i10, i12, i9);
 i9 = i8 | 0;
 i12 = HEAP32[i9 >> 2] | 0;
 i10 = i8 + 8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i13 = i12;
  } else {
   i14 = i1 + 44 | 0;
   i15 = i1 + 48 | 0;
   L6 : do {
    if (i6) {
     i16 = i12;
     i17 = i12;
     i18 = i11;
     while (1) {
      i19 = HEAP32[i16 >> 2] | 0;
      i20 = HEAP32[i19 >> 2] | 0;
      L9 : do {
       if ((i20 | 0) == 4) {
        i21 = HEAP32[i14 >> 2] | 0;
        if ((HEAP32[i19 + 8 >> 2] | 0) >>> 0 <= i21 >>> 0) {
         break;
        }
        i22 = HEAP16[i15 >> 1] | 0;
        if (i22 << 16 >> 16 == 0) {
         i23 = i21;
        } else {
         i23 = i21 - 1 + (i22 & 65535) | 0;
        }
        if ((HEAP32[i19 + 4 >> 2] | 0) >>> 0 > i23 >>> 0) {
         i24 = i18;
         i25 = i17;
         break L6;
        }
        switch (i20 | 0) {
        case 4:
         {
          __ZN7WebCore13InlineTextBox20paintTextMatchMarkerEPNS_15GraphicsContextERKNS_10FloatPointEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontE(i1, i2, i3, i19, i4, i5);
          break L9;
          break;
         }
        case 2:
         {
          __ZN7WebCore13InlineTextBox19paintDocumentMarkerEPNS_15GraphicsContextERKNS_10FloatPointEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontEb(i1, i2, i3, i19, i4, i5, 1);
          break L9;
          break;
         }
        case 1:
        case 16:
        case 512:
         {
          __ZN7WebCore13InlineTextBox19paintDocumentMarkerEPNS_15GraphicsContextERKNS_10FloatPointEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontEb(i1, i2, i3, i19, i4, i5, 0);
          break L9;
          break;
         }
        case 8:
         {
          __ZN7WebCore13InlineTextBox31computeRectForReplacementMarkerEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontE(i1, i19, i4, i5);
          break L9;
          break;
         }
        default:
         {
          break L9;
         }
        }
       }
      } while (0);
      i19 = i16 + 4 | 0;
      i20 = HEAP32[i9 >> 2] | 0;
      i22 = HEAP32[i10 >> 2] | 0;
      if ((i19 | 0) == (i20 + (i22 << 2) | 0)) {
       i24 = i22;
       i25 = i20;
       break;
      } else {
       i16 = i19;
       i17 = i20;
       i18 = i22;
      }
     }
    } else {
     i18 = i12;
     i17 = i12;
     i16 = i11;
     while (1) {
      i22 = HEAP32[i18 >> 2] | 0;
      i20 = HEAP32[i22 >> 2] | 0;
      L24 : do {
       switch (i20 | 0) {
       case 2:
       case 1:
       case 16:
       case 8:
       case 512:
        {
         i19 = HEAP32[i14 >> 2] | 0;
         if ((HEAP32[i22 + 8 >> 2] | 0) >>> 0 <= i19 >>> 0) {
          break L24;
         }
         i21 = HEAP16[i15 >> 1] | 0;
         if (i21 << 16 >> 16 == 0) {
          i26 = i19;
         } else {
          i26 = i19 - 1 + (i21 & 65535) | 0;
         }
         if ((HEAP32[i22 + 4 >> 2] | 0) >>> 0 > i26 >>> 0) {
          i24 = i16;
          i25 = i17;
          break L6;
         }
         switch (i20 | 0) {
         case 1:
         case 16:
         case 512:
          {
           __ZN7WebCore13InlineTextBox19paintDocumentMarkerEPNS_15GraphicsContextERKNS_10FloatPointEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontEb(i1, i2, i3, i22, i4, i5, 0);
           break L24;
           break;
          }
         case 8:
          {
           __ZN7WebCore13InlineTextBox31computeRectForReplacementMarkerEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontE(i1, i22, i4, i5);
           break L24;
           break;
          }
         case 2:
          {
           __ZN7WebCore13InlineTextBox19paintDocumentMarkerEPNS_15GraphicsContextERKNS_10FloatPointEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontEb(i1, i2, i3, i22, i4, i5, 1);
           break L24;
           break;
          }
         case 4:
          {
           __ZN7WebCore13InlineTextBox20paintTextMatchMarkerEPNS_15GraphicsContextERKNS_10FloatPointEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontE(i1, i2, i3, i22, i4, i5);
           break L24;
           break;
          }
         default:
          {
           break L24;
          }
         }
         break;
        }
       default:
        {}
       }
      } while (0);
      i22 = i18 + 4 | 0;
      i20 = HEAP32[i9 >> 2] | 0;
      i21 = HEAP32[i10 >> 2] | 0;
      if ((i22 | 0) == (i20 + (i21 << 2) | 0)) {
       i24 = i21;
       i25 = i20;
       break L6;
      } else {
       i18 = i22;
       i17 = i20;
       i16 = i21;
      }
     }
    }
   } while (0);
   if ((i24 | 0) == 0) {
    i13 = i25;
    break;
   }
   HEAP32[i10 >> 2] = 0;
   i13 = i25;
  }
 } while (0);
 if ((i13 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore13InlineTextBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, d24 = +0, i25 = 0, d26 = +0, d27 = +0, i28 = 0, d29 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
 i9 = i7;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 i9 = i8 | 0;
 i7 = i9 | 0;
 i6 = i9;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i1 | 0;
 i15 = i1 + 16 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = (HEAP32[i16 + 20 >> 2] & 768 | 0) == 256;
 if (i17) {
  i18 = HEAP32[(HEAP32[i16 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i18 = HEAP32[i16 + 36 >> 2] | 0;
 }
 if ((HEAP32[i18 + 40 >> 2] & 6144 | 0) != 0) {
  i19 = 0;
  STACKTOP = i8;
  return i19 | 0;
 }
 if (i17) {
  i20 = HEAP32[(HEAP32[i16 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i20 = HEAP32[i16 + 36 >> 2] | 0;
 }
 if ((HEAP32[i20 + 44 >> 2] & 1920 | 0) == 0) {
  i19 = 0;
  STACKTOP = i8;
  return i19 | 0;
 }
 i20 = HEAP32[(HEAP32[(HEAP32[i16 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 7;
 do {
  if (!((i20 | 0) == 4 | (i20 | 0) == 0)) {
   if ((HEAP16[i1 + 48 >> 1] | 0) != 1) {
    break;
   }
   i17 = HEAP32[i16 + 44 >> 2] | 0;
   i18 = HEAP32[i1 + 44 >> 2] | 0;
   i21 = i17 + 8 | 0;
   if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
    i22 = HEAP16[(HEAP32[i21 >> 2] | 0) + (i18 << 1) >> 1] | 0;
   } else {
    i22 = HEAPU8[(HEAP32[i21 >> 2] | 0) + i18 | 0] | 0;
   }
   if (i22 << 16 >> 16 == 10) {
    i19 = 0;
   } else {
    break;
   }
   STACKTOP = i8;
   return i19 | 0;
  }
 } while (0);
 i22 = i1 + 50 | 0;
 if ((HEAP16[i22 >> 1] | 0) == -2) {
  i19 = 0;
  STACKTOP = i8;
  return i19 | 0;
 }
 __ZN7WebCore9InlineBox25locationIncludingFlippingEv(i11, i14);
 i11 = i1 + 32 | 0;
 i16 = HEAP32[i11 >> 2] | 0;
 if ((i16 & 2048 | 0) == 0) {
  d23 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i14);
  d24 = d23;
  i25 = HEAP32[i11 >> 2] | 0;
 } else {
  d24 = +HEAPF32[i1 + 28 >> 2];
  i25 = i16;
 }
 if ((i25 & 2048 | 0) == 0) {
  d26 = +HEAPF32[i1 + 28 >> 2];
 } else {
  d26 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i14);
 }
 i25 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i7 + 4 >> 2] = i25;
 i25 = i9 + 8 | 0;
 d23 = +d24;
 d24 = +d26;
 HEAPF32[i25 >> 2] = d23;
 HEAPF32[i25 + 4 >> 2] = d24;
 i7 = HEAP16[i22 >> 1] | 0;
 do {
  if (i7 << 16 >> 16 != -1) {
   i22 = HEAP32[i15 >> 2] | 0;
   i10 = HEAP32[(HEAP32[i22 >> 2] | 0) + 636 >> 2] | 0;
   i16 = HEAP32[i1 + 44 >> 2] | 0;
   i20 = HEAP32[i11 >> 2] | 0;
   i18 = i1 + 20 | 0;
   d24 = +HEAPF32[((i20 & 2048 | 0) == 0 ? i1 + 24 | 0 : i18) >> 2];
   if (d24 == +0) {
    d27 = +0;
    i28 = i20;
   } else {
    i20 = __ZNK7WebCore9InlineBox4rootEv(i14) | 0;
    d27 = d24 - +HEAPF32[((HEAP32[i20 + 32 >> 2] & 2048 | 0) == 0 ? i20 + 24 | 0 : i20 + 20 | 0) >> 2];
    i28 = HEAP32[i11 >> 2] | 0;
   }
   d24 = +FUNCTION_TABLE_fiiifiii[i10 & 1](i22, i16, i7 & 65535, d27, (i28 & 1 | 0) != 0, 0, 0);
   do {
    if (d24 < +2147483647) {
     if (d24 <= +-2147483648) {
      d29 = +-2147483648;
      break;
     }
     d29 = +(~~d24 | 0);
    } else {
     d29 = +2147483648;
    }
   } while (0);
   if ((HEAP32[i11 >> 2] & 2048 | 0) == 0) {
    HEAPF32[i6 + 12 >> 2] = d29;
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
    d24 = +HEAPF32[i18 >> 2] + +HEAPF32[i1 + 28 >> 2] - d29;
    i16 = i9;
    d23 = d24 - +HEAPF32[i16 >> 2];
    HEAPF32[i16 >> 2] = d24;
    i16 = i25;
    d24 = +HEAPF32[i16 >> 2] - d23;
    HEAPF32[i16 >> 2] = d24 > +0 ? d24 : +0;
    break;
   } else {
    HEAPF32[i25 >> 2] = d29;
    break;
   }
  }
 } while (0);
 i25 = i5 | 0;
 i1 = i5 + 4 | 0;
 d29 = +(HEAP32[i1 >> 2] | 0);
 i5 = i9;
 HEAPF32[i5 >> 2] = +(HEAP32[i25 >> 2] | 0) + +HEAPF32[i5 >> 2];
 i5 = i6 + 4 | 0;
 HEAPF32[i5 >> 2] = d29 + +HEAPF32[i5 >> 2];
 do {
  if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_9FloatRectE(i4, i6) | 0) {
   i5 = HEAP32[i15 >> 2] | 0;
   i9 = HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0;
   i11 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i1 >> 2] | 0) | 0;
   HEAP32[i13 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i25 >> 2] | 0);
   HEAP32[i13 + 4 >> 2] = i11;
   __ZN7WebCore9InlineBox18flipForWritingModeERKNS_11LayoutPointE(i12, i14, i13);
   FUNCTION_TABLE_viii[i9 & 1](i5, i3, i12);
   if (__ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_9FloatRectE(i3, __ZNK7WebCore10RenderText8textNodeEv(HEAP32[i15 >> 2] | 0) | 0, i2, i4, i6) | 0) {
    break;
   } else {
    i19 = 1;
   }
   STACKTOP = i8;
   return i19 | 0;
  }
 } while (0);
 i19 = 0;
 STACKTOP = i8;
 return i19 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NS1_10LayoutRectEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NS1_10LayoutRectEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = i10;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 i11 = i9 & i8;
 i13 = i12 + (i11 * 20 & -1) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = i13;
   i16 = 11;
  } else {
   i17 = (i9 >>> 23) + ~i9 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i11;
   i21 = i13;
   i22 = i14;
   while (1) {
    if ((i22 | 0) == (i10 | 0)) {
     i16 = 8;
     break;
    }
    i23 = (i22 | 0) == -1 ? i21 : i19;
    i24 = (i18 | 0) == 0 ? i17 : i18;
    i25 = i24 + i20 & i8;
    i26 = i12 + (i25 * 20 & -1) | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    if ((i27 | 0) == 0) {
     i16 = 10;
     break;
    } else {
     i18 = i24;
     i19 = i23;
     i20 = i25;
     i21 = i26;
     i22 = i27;
    }
   }
   if ((i16 | 0) == 10) {
    if ((i23 | 0) == 0) {
     i15 = i26;
     i16 = 11;
     break;
    }
    i22 = i6;
    _llvm_lifetime_start(16, 0, i22 | 0);
    _memset(i22 | 0, 0, 16) | 0;
    HEAP32[i23 >> 2] = 0;
    i20 = i23 + 4 | 0;
    HEAP32[i20 >> 2] = HEAP32[i22 >> 2];
    HEAP32[i20 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
    HEAP32[i20 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
    HEAP32[i20 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
    _llvm_lifetime_end(16, 0, i22 | 0);
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i28 = i23;
    i29 = HEAP32[i3 >> 2] | 0;
    i30 = i22;
    break;
   } else if ((i16 | 0) == 8) {
    i22 = i12 + ((HEAP32[i2 + 4 >> 2] | 0) * 20 & -1) | 0;
    i20 = i1;
    HEAP32[i20 >> 2] = i21;
    HEAP32[i20 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 if ((i16 | 0) == 11) {
  i28 = i15;
  i29 = i10;
  i30 = i2 + 16 | 0;
 }
 HEAP32[i28 >> 2] = i29;
 i29 = i28 + 4 | 0;
 i10 = i4;
 HEAP32[i29 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i29 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i29 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i29 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 i10 = i2 + 12 | 0;
 i29 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i29;
 i10 = i2 + 4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i30 >> 2] | 0) + i29 << 1 | 0) < (i4 | 0)) {
  i31 = i28;
  i32 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i33 = 8;
  } else {
   i30 = i4 << 1;
   i33 = (i29 * 6 & -1 | 0) < (i30 | 0) ? i4 : i30;
  }
  i30 = __ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NS1_10LayoutRectEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i33, i28) | 0;
  i31 = i30;
  i32 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i7 >> 2] | 0) + (i32 * 20 & -1) | 0;
 i32 = i1;
 HEAP32[i32 >> 2] = i31;
 HEAP32[i32 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEN3WTF6StringEiPNS_24BufferForAppendingHyphenE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, d20 = +0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i8 = i5 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i9 + 4 >> 2] | 0;
 }
 if ((i7 | 0) == 0) {
  i11 = i6;
 } else {
  i6 = __ZNK7WebCore11RenderStyle12hyphenStringEv(i3) | 0;
  i9 = i7 | 0;
  i12 = i6 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = 0;
  } else {
   i14 = HEAP32[i13 + 4 >> 2] | 0;
  }
  __ZN3WTF13StringBuilder15reserveCapacityEj(i9, i14 + i10 | 0);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i9, i5);
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i9, i6 | 0);
  __ZN3WTF13StringBuilder11shrinkToFitEv(i9);
  i6 = i7 + 4 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) == 0) {
   __ZNK3WTF13StringBuilder11reifyStringEv(i9);
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i15 = 0;
   } else {
    i16 = i9;
    i17 = 8;
   }
  } else {
   i16 = i7;
   i17 = 8;
  }
  if ((i17 | 0) == 8) {
   i17 = i16 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   i15 = i16;
  }
  i16 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i15;
  do {
   if ((i16 | 0) != 0) {
    i15 = i16 | 0;
    i8 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     break;
    } else {
     HEAP32[i15 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i16 = HEAP32[i12 >> 2] | 0;
  if ((i16 | 0) == 0) {
   i18 = 0;
  } else {
   i18 = HEAP32[i16 + 4 >> 2] | 0;
  }
  i11 = i18 + i10 | 0;
 }
 i10 = i2 + 32 | 0;
 i18 = HEAP32[i10 >> 2] | 0;
 d19 = +HEAPF32[((i18 & 2048 | 0) == 0 ? i2 + 24 | 0 : i2 + 20 | 0) >> 2];
 if (d19 == +0) {
  d20 = +0;
  i21 = i18;
 } else {
  i18 = __ZNK7WebCore9InlineBox4rootEv(i2 | 0) | 0;
  d20 = d19 - +HEAPF32[((HEAP32[i18 + 32 >> 2] & 2048 | 0) == 0 ? i18 + 24 | 0 : i18 + 20 | 0) >> 2];
  i21 = HEAP32[i10 >> 2] | 0;
 }
 if (i21 >>> 0 < 1048576 >>> 0) {
  i22 = 0;
  i23 = i21;
 } else {
  i18 = (__ZNK7WebCore9InlineBox13nextLeafChildEv(i2 | 0) | 0) != 0 | 0;
  i22 = i18;
  i23 = HEAP32[i10 >> 2] | 0;
 }
 i10 = i3 + 44 | 0;
 if ((i23 & 65536 | 0) == 0) {
  i24 = (HEAP32[i10 >> 2] & 32 | 0) != 0;
 } else {
  i24 = 1;
 }
 i18 = i2 + 16 | 0;
 __ZN7WebCore7TextRunC2ERKN3WTF6StringEffjNS_13TextDirectionEbbj(i1, i5, d20, +(i21 >> 20 | 0), i22 | i21 >>> 12 & 2, i23 >>> 2 & 1 ^ 1, i24, (HEAP8[(HEAP32[i18 >> 2] | 0) + 25 | 0] & 1) == 0, 3);
 i24 = HEAP32[(HEAP32[i3 + 24 >> 2] | 0) + 124 >> 2] | 0;
 i3 = i1 + 24 | 0;
 HEAP32[i3 >> 2] = (((HEAP32[i10 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0) << 3 | HEAP32[i3 >> 2] & -9;
 HEAP32[i1 + 28 >> 2] = i24;
 i24 = HEAP32[i4 + 24 >> 2] | 0;
 i3 = i24 + 44 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i23 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i24, i4 | 0, 0) | 0;
  i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] & 3](i23, 32) | 0;
  HEAP32[i3 >> 2] = i4;
  i25 = i4;
 } else {
  i25 = i10;
 }
 if ((HEAP32[i25 + 76 >> 2] | 0) == 0) {
  i26 = i1 + 4 | 0;
  HEAP32[i26 >> 2] = i11;
  return;
 }
 i25 = HEAP32[i18 >> 2] | 0;
 i18 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i18 + 4 >> 2] = 1;
 HEAP32[i18 >> 2] = __ZTVN7WebCore26SVGTextRunRenderingContextE + 8;
 HEAP32[i18 + 8 >> 2] = i25;
 HEAP32[i18 + 12 >> 2] = 0;
 i25 = i1 + 32 | 0;
 i10 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = i18;
 if ((i10 | 0) == 0) {
  i26 = i1 + 4 | 0;
  HEAP32[i26 >> 2] = i11;
  return;
 }
 i18 = i10 + 4 | 0;
 i10 = i18 | 0;
 i25 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i25 | 0) != 0) {
  HEAP32[i10 >> 2] = i25;
  i26 = i1 + 4 | 0;
  HEAP32[i26 >> 2] = i11;
  return;
 }
 i25 = i18 - 4 | 0;
 if ((i25 | 0) == 0) {
  i26 = i1 + 4 | 0;
  HEAP32[i26 >> 2] = i11;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 31](i25);
 i26 = i1 + 4 | 0;
 HEAP32[i26 >> 2] = i11;
 return;
}
function __ZN7WebCore13InlineTextBox25paintCompositionUnderlineEPNS_15GraphicsContextERKNS_10FloatPointERKNS_20CompositionUnderlineE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, i29 = 0, i30 = 0, d31 = +0, i32 = 0, i33 = 0, d34 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 + 50 | 0;
 if ((HEAP16[i7 >> 1] | 0) == -2) {
  STACKTOP = i5;
  return;
 }
 i8 = i1 | 0;
 d9 = +HEAPF32[i1 + 28 >> 2];
 i10 = i1 + 44 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP16[i1 + 48 >> 1] | 0;
 if (i12 << 16 >> 16 == 0) {
  i13 = i11;
 } else {
  i13 = i11 - 1 + (i12 & 65535) | 0;
 }
 i12 = i13 + 1 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (i11 >>> 0 > i13 >>> 0) {
  d14 = +0;
  i15 = i11;
  i16 = 1;
 } else {
  i17 = HEAP32[i1 + 16 >> 2] | 0;
  i18 = HEAP32[(HEAP32[i17 >> 2] | 0) + 636 >> 2] | 0;
  i19 = i1 + 32 | 0;
  i20 = HEAP32[i19 >> 2] | 0;
  d21 = +HEAPF32[((i20 & 2048 | 0) == 0 ? i1 + 24 | 0 : i1 + 20 | 0) >> 2];
  if (d21 == +0) {
   d22 = +0;
   i23 = i20;
  } else {
   i20 = __ZNK7WebCore9InlineBox4rootEv(i8) | 0;
   d22 = d21 - +HEAPF32[((HEAP32[i20 + 32 >> 2] & 2048 | 0) == 0 ? i20 + 24 | 0 : i20 + 20 | 0) >> 2];
   i23 = HEAP32[i19 >> 2] | 0;
  }
  d14 = +FUNCTION_TABLE_fiiifiii[i18 & 1](i17, i11, i13 - i11 | 0, d22, (i23 & 1 | 0) != 0, 0, 0);
  i15 = i13;
  i16 = 0;
 }
 i13 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i12 | 0) == (i13 | 0)) {
  i24 = i16;
  i25 = i12;
 } else {
  i24 = 0;
  i25 = i13 >>> 0 < i12 >>> 0 ? i13 : i12;
 }
 i12 = HEAP16[i7 >> 1] | 0;
 do {
  if (i12 << 16 >> 16 == -1) {
   if (!i24) {
    i26 = i25;
    i27 = 14;
    break;
   }
   d28 = d9;
   i29 = i1 + 32 | 0;
   i30 = i1 + 16 | 0;
  } else {
   i7 = (HEAP32[i10 >> 2] | 0) + (i12 & 65535) | 0;
   i26 = i7 >>> 0 < i25 >>> 0 ? i7 : i25;
   i27 = 14;
  }
 } while (0);
 if ((i27 | 0) == 14) {
  i27 = i1 + 16 | 0;
  i25 = HEAP32[i27 >> 2] | 0;
  i12 = HEAP32[(HEAP32[i25 >> 2] | 0) + 636 >> 2] | 0;
  i10 = i1 + 32 | 0;
  i24 = HEAP32[i10 >> 2] | 0;
  d9 = +HEAPF32[((i24 & 2048 | 0) == 0 ? i1 + 24 | 0 : i1 + 20 | 0) >> 2];
  if (d9 == +0) {
   d31 = +0;
   i32 = i24;
  } else {
   i24 = __ZNK7WebCore9InlineBox4rootEv(i8) | 0;
   d31 = d9 - +HEAPF32[((HEAP32[i24 + 32 >> 2] & 2048 | 0) == 0 ? i24 + 24 | 0 : i24 + 20 | 0) >> 2];
   i32 = HEAP32[i10 >> 2] | 0;
  }
  d28 = +FUNCTION_TABLE_fiiifiii[i12 & 1](i25, i15, i26 - i15 | 0, d14 + d31, (i32 & 1 | 0) != 0, 0, 0);
  i29 = i10;
  i30 = i27;
 }
 i27 = HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP32[i29 >> 2] & 1 | 0) == 0) {
   i33 = HEAP32[i27 + 36 >> 2] | 0;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i27 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i33 = HEAP32[i27 + 36 >> 2] | 0;
    break;
   } else {
    i33 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i27) | 0;
    break;
   }
  }
 } while (0);
 i27 = _round(+(+HEAPF32[(__ZNK7WebCore11RenderStyle11fontMetricsEv(i33) | 0) + 4 >> 2])) | 0;
 do {
  if ((HEAP8[i4 + 16 | 0] & 1) == 0) {
   d34 = +1;
  } else {
   if (+__ZNK7WebCore9InlineBox13logicalHeightEv(i8) - +(i27 | 0) < +2) {
    d34 = +1;
    break;
   }
   d34 = +2;
  }
 } while (0);
 __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i2, i4 + 8 | 0, (HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 __ZN7WebCore15GraphicsContext18setStrokeThicknessEf(i2, d34);
 d31 = d14 + +1 + +HEAPF32[i3 >> 2];
 d14 = +HEAPF32[i3 + 4 >> 2];
 d9 = d14 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i8) - d34;
 HEAPF32[i6 >> 2] = d31;
 HEAPF32[i6 + 4 >> 2] = d9;
 __ZN7WebCore15GraphicsContext15drawLineForTextERKNS_10FloatPointEfb(i2, i6, d28 + +-2, (HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13InlineTextBox31computeRectForReplacementMarkerEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, d28 = +0, d29 = +0, d30 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 80 | 0;
 i12 = i5 + 88 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i19 = i18 | 0;
 i20 = i18;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = i21 | 0;
 i23 = i21;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i25 = i1 | 0;
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i9, __ZNK7WebCore9InlineBox4rootEv(i25) | 0);
 i26 = HEAP32[i9 >> 2] | 0;
 i9 = __ZNK7WebCore9InlineBox4rootEv(i25) | 0;
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i7, i9);
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i8, i9);
 i9 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
 i8 = HEAP32[i1 + 44 >> 2] | 0;
 i7 = (HEAP32[i2 + 4 >> 2] | 0) - i8 | 0;
 i25 = (HEAP32[i2 + 8 >> 2] | 0) - i8 | 0;
 i8 = HEAPU16[i1 + 48 >> 1] | 0;
 __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEPNS_24BufferForAppendingHyphenE(i10, i1, i3, i4, 0);
 HEAP32[i11 >> 2] = ~~+HEAPF32[i1 + 20 >> 2];
 HEAP32[i11 + 4 >> 2] = i26;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i16, i11);
 __ZNK7WebCore4Font20selectionRectForTextERKNS_7TextRunERKNS_10FloatPointEiii(i15, i4, i10, i16, (i9 | 0) > 0 ? i9 : 0, i7, i8 >>> 0 < i25 >>> 0 ? i8 : i25);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i14, i15);
 i15 = HEAP32[i1 + 16 >> 2] | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i23, i14);
 i14 = HEAP32[i22 >> 2] | 0;
 i1 = HEAP32[i22 + 4 >> 2] | 0;
 HEAP32[i19 >> 2] = i14;
 HEAP32[i19 + 4 >> 2] = i1;
 d27 = (HEAP32[tempDoublePtr >> 2] = i14, +HEAPF32[tempDoublePtr >> 2]);
 d28 = d27 + +HEAPF32[i21 + 8 >> 2];
 d29 = +HEAPF32[i23 + 4 >> 2];
 HEAPF32[i18 + 8 >> 2] = d28;
 HEAPF32[i20 + 12 >> 2] = d29;
 d30 = d29 + +HEAPF32[i23 + 12 >> 2];
 HEAPF32[i18 + 16 >> 2] = d28;
 HEAPF32[i20 + 20 >> 2] = d30;
 HEAPF32[i18 + 24 >> 2] = d27;
 HEAPF32[i20 + 28 >> 2] = d30;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i24, i15, i20, 0, 0, 0);
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i6, i24);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i17, i6);
 i6 = i12;
 i24 = i17;
 HEAP32[i6 >> 2] = HEAP32[i24 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i24 + 12 >> 2];
 i24 = HEAP32[i13 + 4 >> 2] | 0;
 i6 = i12 + 8 | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 i17 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i2 + 16 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i2 + 20 >> 2] = i24;
 HEAP32[i2 + 24 >> 2] = i12;
 HEAP32[i2 + 28 >> 2] = i17;
 i17 = HEAP32[i10 + 32 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i17 + 4 | 0;
 i17 = i10 | 0;
 i2 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i17 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
 i2 = i10 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13InlineTextBox14selectionStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 16 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (HEAP32[i8 + 20 >> 2] | 0) >>> 25 & 7;
 i10 = (i9 | 0) == 1;
 i11 = (i9 | 0) == 4;
 L1 : do {
  if ((i9 | 0) == 4 | (i9 | 0) == 3 | (i9 | 0) == 1) {
   __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i8, i5, i6);
   i12 = HEAP32[i1 + 44 >> 2] | 0;
   i13 = HEAP16[i1 + 48 >> 1] | 0;
   i14 = (i13 & 65535) + i12 | 0;
   i15 = HEAP32[i7 >> 2] | 0;
   i16 = HEAP32[(HEAP32[(HEAP32[i15 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 7;
   do {
    if ((i16 | 0) == 4 | (i16 | 0) == 0) {
     i17 = 0;
    } else {
     if (i13 << 16 >> 16 != 1) {
      i17 = 0;
      break;
     }
     i18 = HEAP32[i15 + 44 >> 2] | 0;
     i19 = i18 + 8 | 0;
     if ((HEAP32[i18 + 16 >> 2] & 32 | 0) == 0) {
      i20 = HEAP16[(HEAP32[i19 >> 2] | 0) + (i12 << 1) >> 1] | 0;
     } else {
      i20 = HEAPU8[(HEAP32[i19 >> 2] | 0) + i12 | 0] | 0;
     }
     i17 = i20 << 16 >> 16 == 10 | 0;
    }
   } while (0);
   i15 = i14 - i17 | 0;
   i13 = (i9 | 0) == 3;
   if (i13) {
    i21 = 0;
   } else {
    i16 = HEAP32[i5 >> 2] | 0;
    i21 = (i16 | 0) < (i14 | 0) & (i16 | 0) >= (i12 | 0);
   }
   if (i10) {
    i22 = 0;
   } else {
    i16 = HEAP32[i6 >> 2] | 0;
    i22 = (i16 | 0) > (i12 | 0) & (i16 | 0) <= (i15 | 0);
   }
   if (i21 | i22) {
    i23 = i21 ? i21 & i22 ? 4 : 1 : 3;
    break;
   }
   do {
    if (i13) {
     i24 = 16;
    } else {
     if ((HEAP32[i5 >> 2] | 0) >= (i12 | 0)) {
      break;
     }
     if (i10) {
      i23 = 2;
      break L1;
     } else {
      i24 = 16;
     }
    }
   } while (0);
   if ((i24 | 0) == 16) {
    if ((HEAP32[i6 >> 2] | 0) > (i15 | 0)) {
     i23 = 2;
     break;
    }
   }
   i23 = i11 ? 0 : i9;
  } else {
   i23 = i9;
  }
 } while (0);
 i9 = i1 + 50 | 0;
 if ((HEAP16[i9 >> 1] | 0) == -1) {
  STACKTOP = i2;
  return i23 | 0;
 }
 i11 = i1 | 0;
 if ((__ZNK7WebCore13RootInlineBox11ellipsisBoxEv(__ZN7WebCore9InlineBox4rootEv(i11) | 0) | 0) == 0) {
  STACKTOP = i2;
  return i23 | 0;
 }
 i6 = __ZNK7WebCore13RootInlineBox11ellipsisBoxEv(__ZN7WebCore9InlineBox4rootEv(i11) | 0) | 0;
 if ((i23 | 0) == 0) {
  HEAP32[i6 + 48 >> 2] = 0;
  STACKTOP = i2;
  return i23 | 0;
 }
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP32[i11 + 20 >> 2] & 234881024 | 0) == 67108864) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i4 >> 2] = HEAP32[(HEAP32[i11 + 44 >> 2] | 0) + 4 >> 2];
  } else {
   __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i11, i3, i4);
   i24 = HEAP32[i7 >> 2] | 0;
   i10 = (HEAP32[i24 + 20 >> 2] | 0) >>> 25 & 7;
   if ((i10 | 0) == 1) {
    HEAP32[i4 >> 2] = HEAP32[(HEAP32[i24 + 44 >> 2] | 0) + 4 >> 2];
    break;
   } else if ((i10 | 0) == 3) {
    HEAP32[i3 >> 2] = 0;
    break;
   } else {
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 + 44 >> 2] | 0;
 i11 = (HEAP32[i3 >> 2] | 0) - i7 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - i7 | 0;
 i7 = HEAPU16[i1 + 48 >> 1] | 0;
 i1 = HEAPU16[i9 >> 1] | 0;
 if ((((i7 | 0) < (i3 | 0) ? i7 : i3) | 0) < (i1 | 0)) {
  i25 = 0;
 } else {
  i25 = (((i11 | 0) < 0 ? 0 : i11) | 0) <= (i1 | 0) ? 2 : 0;
 }
 HEAP32[i6 + 48 >> 2] = i25;
 STACKTOP = i2;
 return i23 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NS1_10LayoutRectEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = i2 - 1;
 i9 = __ZN3WTF10fastMallocEj(i2 * 20 & -1) | 0;
 if ((i2 | 0) > 0) {
  i10 = i4 | 0;
  i11 = 0;
  while (1) {
   _llvm_lifetime_start(16, 0, i10 | 0);
   _memset(i10 | 0, 0, 16) | 0;
   HEAP32[i9 + (i11 * 20 & -1) >> 2] = 0;
   i12 = i9 + (i11 * 20 & -1) + 4 | 0;
   HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i12 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i12 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i12 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   _llvm_lifetime_end(16, 0, i10 | 0);
   i11 = i11 + 1 | 0;
   if ((i11 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = i9;
 if ((i6 | 0) == 0) {
  i13 = 0;
  i14 = i1 + 16 | 0;
  HEAP32[i14 >> 2] = 0;
  i15 = i8;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i4;
  return i13 | 0;
 } else {
  i16 = 0;
  i17 = 0;
 }
 while (1) {
  i9 = i8 + (i16 * 20 & -1) | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i11 = i2;
  if ((i11 | 0) == (-1 | 0) | (i11 | 0) == 0) {
   i18 = i17;
  } else {
   i10 = HEAP32[i7 >> 2] | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   i19 = i11 + ~(i11 << 15) | 0;
   i11 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i11 >>> 6 ^ i11;
   i11 = i19 + ~(i19 << 11) | 0;
   i19 = i11 >>> 16 ^ i11;
   i11 = i12 & i19;
   i20 = i10 + (i11 * 20 & -1) | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   L12 : do {
    if ((i21 | 0) == 0) {
     i22 = 0;
     i23 = i20;
     i24 = 8;
    } else {
     i25 = (i19 >>> 23) + ~i19 | 0;
     i26 = i25 << 12 ^ i25;
     i25 = i26 >>> 7 ^ i26;
     i26 = i25 << 2 ^ i25;
     i25 = i26 >>> 20 ^ i26 | 1;
     i26 = 0;
     i27 = 0;
     i28 = i11;
     i29 = i20;
     i30 = i21;
     while (1) {
      if ((i30 | 0) == (i2 | 0)) {
       i31 = i29;
       break L12;
      }
      i32 = (i30 | 0) == -1 ? i29 : i26;
      i33 = (i27 | 0) == 0 ? i25 : i27;
      i34 = i33 + i28 & i12;
      i35 = i10 + (i34 * 20 & -1) | 0;
      i36 = HEAP32[i35 >> 2] | 0;
      if ((i36 | 0) == 0) {
       i22 = i32;
       i23 = i35;
       i24 = 8;
       break;
      } else {
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
       i30 = i36;
      }
     }
    }
   } while (0);
   if ((i24 | 0) == 8) {
    i24 = 0;
    i31 = (i22 | 0) != 0 ? i22 : i23;
   }
   i10 = i31;
   i12 = i9;
   HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
   HEAP32[i10 + 16 >> 2] = HEAP32[i12 + 16 >> 2];
   i18 = (i9 | 0) == (i3 | 0) ? i31 : i17;
  }
  i12 = i16 + 1 | 0;
  if ((i12 | 0) == (i6 | 0)) {
   i13 = i18;
   break;
  } else {
   i16 = i12;
   i17 = i18;
  }
 }
 i14 = i1 + 16 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i8;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i4;
 return i13 | 0;
}
function __ZN7WebCore13InlineTextBox26paintCompositionBackgroundEPNS_15GraphicsContextERKNS_10FloatPointERKNS_11RenderStyleERKNS_4FontEii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, d22 = +0, d23 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 36 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = HEAP32[i1 + 44 >> 2] | 0;
 i20 = i6 - i19 | 0;
 i6 = (i20 | 0) < 0 ? 0 : i20;
 i20 = i7 - i19 | 0;
 i19 = HEAPU16[i1 + 48 >> 1] | 0;
 i7 = (i19 | 0) < (i20 | 0) ? i19 : i20;
 if ((i6 | 0) >= (i7 | 0)) {
  STACKTOP = i8;
  return;
 }
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 HEAP32[i11 >> 2] = __ZN7WebCore7makeRGBEiii(225, 221, 85) | 0;
 HEAP8[i12 + 4 | 0] = 1;
 i20 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i14 + 4 >> 2] = i20;
 i20 = i4 + 24 | 0;
 __ZN7WebCore14TextPaintStyleC1ENS_5ColorENS_10ColorSpaceE(i13, i14, (HEAP32[(HEAP32[i20 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 __ZN7WebCore21updateGraphicsContextERNS_15GraphicsContextERKNS_14TextPaintStyleENS_13FillColorTypeE(i2, i13, 0);
 i13 = i1 | 0;
 if ((((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3) - 2 | 0) >>> 0 < 2 >>> 0) {
  __ZNK7WebCore13RootInlineBox15selectionBottomEv(i15, __ZNK7WebCore9InlineBox4rootEv(i13) | 0);
  d21 = +HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 20 | 0 : i1 + 24 | 0) >> 2];
  d22 = d21 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i13);
  d23 = +(HEAP32[i15 >> 2] | 0) - d22;
 } else {
  d22 = +HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 20 | 0 : i1 + 24 | 0) >> 2];
  __ZNK7WebCore13RootInlineBox12selectionTopEv(i16, __ZNK7WebCore9InlineBox4rootEv(i13) | 0);
  d23 = d22 - +(HEAP32[i16 >> 2] | 0);
 }
 i16 = __ZNK7WebCore9InlineBox4rootEv(i13) | 0;
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i9, i16);
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i10, i16);
 i16 = (HEAP32[i9 >> 2] | 0) - (HEAP32[i10 >> 2] | 0) | 0;
 d22 = +HEAPF32[i3 + 4 >> 2] - +(~~d23 | 0);
 HEAPF32[i17 >> 2] = +HEAPF32[i3 >> 2];
 HEAPF32[i17 + 4 >> 2] = d22;
 __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEPNS_24BufferForAppendingHyphenE(i18, i1, i4, i5, 0);
 __ZN7WebCore15GraphicsContext20drawHighlightForTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEiRKNS_5ColorENS_10ColorSpaceEii(i2, i5, i18, i17, (i16 | 0) > 0 ? i16 : 0, i12, (HEAP32[(HEAP32[i20 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1, i6, i7);
 i7 = HEAP32[i18 + 32 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i18 = i7 + 4 | 0;
   i6 = i18 | 0;
   i20 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i6 >> 2] = i20;
    break;
   }
   i20 = i18 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
  }
 } while (0);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i8;
 return;
}
function __ZNK7WebCore13InlineTextBox17positionForOffsetEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 40 | 0;
 i6 = i3 + 48 | 0;
 i7 = i3 + 56 | 0;
 i8 = i1 + 16 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[(HEAP32[(HEAP32[i9 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 7;
 do {
  if (!((i10 | 0) == 4 | (i10 | 0) == 0)) {
   if ((HEAP16[i1 + 48 >> 1] | 0) != 1) {
    break;
   }
   i11 = HEAP32[i9 + 44 >> 2] | 0;
   i12 = HEAP32[i1 + 44 >> 2] | 0;
   i13 = i11 + 8 | 0;
   if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
    i14 = HEAP16[(HEAP32[i13 >> 2] | 0) + (i12 << 1) >> 1] | 0;
   } else {
    i14 = HEAPU8[(HEAP32[i13 >> 2] | 0) + i12 | 0] | 0;
   }
   if (i14 << 16 >> 16 != 10) {
    break;
   }
   d15 = +HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 24 | 0 : i1 + 20 | 0) >> 2];
   STACKTOP = i3;
   return +d15;
  }
 } while (0);
 i14 = __ZN7WebCore9fontCacheEv() | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 i14 = i1 + 32 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i9 + 8 >> 2] | 0;
 do {
  if ((HEAP32[i14 >> 2] & 1 | 0) == 0) {
   i16 = HEAP32[i10 + 36 >> 2] | 0;
   i17 = i9;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i10 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i16 = HEAP32[i10 + 36 >> 2] | 0;
    i17 = i9;
    break;
   } else {
    i12 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i10) | 0;
    i16 = i12;
    i17 = HEAP32[i8 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[i16 + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) == 0) {
   i18 = 17;
  } else {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 560 >> 2] & 31](i17) | 0)) {
    i18 = 17;
    break;
   }
   if ((HEAP8[i17 + 64 | 0] & 1) == 0) {
    i18 = 17;
    break;
   }
   i19 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i17 + 56 >> 2] | 0) | 0;
  }
 } while (0);
 if ((i18 | 0) == 17) {
  i19 = __ZNK7WebCore11RenderStyle4fontEv(i16) | 0;
 }
 i18 = i2 - (HEAP32[i1 + 44 >> 2] | 0) | 0;
 if ((HEAP32[i14 >> 2] & 4 | 0) == 0) {
  i20 = i18;
  i21 = 0;
 } else {
  i20 = HEAPU16[i1 + 48 >> 1] | 0;
  i21 = i18;
 }
 __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEPNS_24BufferForAppendingHyphenE(i4, i1, i16, i19, 0);
 HEAP32[i6 >> 2] = ~~+HEAPF32[((HEAP32[i14 >> 2] & 2048 | 0) == 0 ? i1 + 24 | 0 : i1 + 20 | 0) >> 2];
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i5, i6);
 __ZNK7WebCore4Font20selectionRectForTextERKNS_7TextRunERKNS_10FloatPointEiii(i7, i19, i4, i5, 0, i21, i20);
 d22 = +HEAPF32[i7 >> 2] + +HEAPF32[i7 + 8 >> 2];
 i7 = HEAP32[i4 + 32 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 + 4 | 0;
   i20 = i4 | 0;
   i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i20 >> 2] = i21;
    break;
   }
   i21 = i4 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
  }
 } while (0);
 i7 = __ZN7WebCore9fontCacheEv() | 0;
 i21 = i7 | 0;
 i4 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
 HEAP32[i21 >> 2] = i4;
 if ((i4 | 0) != 0) {
  d15 = d22;
  STACKTOP = i3;
  return +d15;
 }
 __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i7);
 d15 = d22;
 STACKTOP = i3;
 return +d15;
}
function __ZNK7WebCore13InlineTextBox17offsetForPositionEfb(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i1 + 16 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[(HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 7;
 do {
  if (!((i8 | 0) == 4 | (i8 | 0) == 0)) {
   if ((HEAP16[i1 + 48 >> 1] | 0) != 1) {
    break;
   }
   i9 = HEAP32[i7 + 44 >> 2] | 0;
   i10 = HEAP32[i1 + 44 >> 2] | 0;
   i11 = i9 + 8 | 0;
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i12 = HEAP16[(HEAP32[i11 >> 2] | 0) + (i10 << 1) >> 1] | 0;
   } else {
    i12 = HEAPU8[(HEAP32[i11 >> 2] | 0) + i10 | 0] | 0;
   }
   if (i12 << 16 >> 16 == 10) {
    i13 = 0;
   } else {
    break;
   }
   STACKTOP = i4;
   return i13 | 0;
  }
 } while (0);
 i12 = i1 + 32 | 0;
 i7 = HEAP32[i12 >> 2] | 0;
 i8 = i1 + 20 | 0;
 i10 = i1 + 24 | 0;
 d14 = d2 - +HEAPF32[((i7 & 2048 | 0) == 0 ? i10 : i8) >> 2];
 if (d14 > +HEAPF32[i1 + 28 >> 2]) {
  if ((i7 & 4 | 0) != 0) {
   i13 = 0;
   STACKTOP = i4;
   return i13 | 0;
  }
  i13 = HEAPU16[i1 + 48 >> 1] | 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 if (d14 < +0) {
  if ((i7 & 4 | 0) == 0) {
   i13 = 0;
   STACKTOP = i4;
   return i13 | 0;
  }
  i13 = HEAPU16[i1 + 48 >> 1] | 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 i7 = __ZN7WebCore9fontCacheEv() | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = HEAP32[i6 >> 2] | 0;
 i11 = HEAP32[i7 + 8 >> 2] | 0;
 do {
  if ((HEAP32[i12 >> 2] & 1 | 0) == 0) {
   i15 = HEAP32[i11 + 36 >> 2] | 0;
   i16 = i7;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i11 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i15 = HEAP32[i11 + 36 >> 2] | 0;
    i16 = i7;
    break;
   } else {
    i9 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i11) | 0;
    i15 = i9;
    i16 = HEAP32[i6 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[i15 + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) == 0) {
   i17 = 22;
  } else {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 560 >> 2] & 31](i16) | 0)) {
    i17 = 22;
    break;
   }
   if ((HEAP8[i16 + 64 | 0] & 1) == 0) {
    i17 = 22;
    break;
   }
   i18 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i16 + 56 >> 2] | 0) | 0;
  }
 } while (0);
 if ((i17 | 0) == 22) {
  i18 = __ZNK7WebCore11RenderStyle4fontEv(i15) | 0;
 }
 __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEPNS_24BufferForAppendingHyphenE(i5, i1, i15, i18, 0);
 i15 = __ZNK7WebCore4Font17offsetForPositionERKNS_7TextRunEfb(i18, i5, d2 - +HEAPF32[((HEAP32[i12 >> 2] & 2048 | 0) == 0 ? i10 : i8) >> 2], i3) | 0;
 i3 = HEAP32[i5 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i8 = i5 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i8 >> 2] = i10;
    break;
   }
   i10 = i5 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 i3 = __ZN7WebCore9fontCacheEv() | 0;
 i10 = i3 | 0;
 i5 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 HEAP32[i10 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i13 = i15;
  STACKTOP = i4;
  return i13 | 0;
 }
 __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i3);
 i13 = i15;
 STACKTOP = i4;
 return i13 | 0;
}
function __ZN7WebCore13InlineTextBox16placeEllipsisBoxEbfffRfRb(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var d8 = +0, d9 = +0, d10 = +0, i11 = 0, d12 = +0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, d20 = +0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, d25 = +0;
 if ((HEAP8[i7] & 1) != 0) {
  HEAP16[i1 + 50 >> 1] = -2;
  d8 = +-1;
  return +d8;
 }
 if (i2) {
  d9 = d4 - d5;
  d10 = +HEAPF32[i1 + 20 >> 2];
  i11 = 0;
  d12 = d9;
  i13 = d9 <= d10;
  d14 = d10;
 } else {
  d10 = d3 + d5;
  d9 = +HEAPF32[i1 + 20 >> 2];
  i11 = d10 >= d9 + +HEAPF32[i1 + 28 >> 2];
  d12 = d10;
  i13 = 0;
  d14 = d9;
 }
 if (i13 | i11) {
  HEAP16[i1 + 50 >> 1] = -2;
  HEAP8[i7] = 1;
  d8 = +-1;
  return +d8;
 }
 i11 = i1 | 0;
 i13 = i1 + 20 | 0;
 do {
  if (i2) {
   if ((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0) {
    i15 = 0;
    i16 = d12 < d14 + +__ZNK7WebCore9InlineBox13logicalHeightEv(i11);
    break;
   } else {
    i15 = 0;
    i16 = d12 < d14 + +HEAPF32[i1 + 28 >> 2];
    break;
   }
  } else {
   i15 = d12 > d14;
   i16 = 0;
  }
 } while (0);
 if (!(i16 | i15)) {
  HEAPF32[i6 >> 2] = +HEAPF32[i1 + 28 >> 2] + +HEAPF32[i6 >> 2];
  d8 = +-1;
  return +d8;
 }
 HEAP8[i7] = 1;
 i7 = i1 + 32 | 0;
 i15 = HEAP32[i7 >> 2] | 0;
 i16 = (i15 & 4 | 0) == 0;
 do {
  if (i16 ^ i2) {
   i17 = ~~(d4 - d3 - d5);
   d14 = +HEAPF32[i13 >> 2];
   if (i16) {
    d18 = +(i17 | 0) + d14;
    break;
   }
   if ((i15 & 2048 | 0) == 0) {
    d19 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i11);
   } else {
    d19 = +HEAPF32[i1 + 28 >> 2];
   }
   d18 = d14 + d19 - +(i17 | 0);
  } else {
   d18 = d12;
  }
 } while (0);
 i15 = FUNCTION_TABLE_iifi[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 3](i1, d18, 0) | 0;
 if ((i15 | 0) == 0) {
  HEAP16[i1 + 50 >> 1] = -2;
  HEAPF32[i6 >> 2] = +HEAPF32[i6 >> 2] + d5;
  d12 = +HEAPF32[i13 >> 2];
  if (i2) {
   d8 = d12 < d18 ? d12 : d18;
   return +d8;
  }
  if ((HEAP32[i7 >> 2] & 2048 | 0) == 0) {
   d20 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i11);
  } else {
   d20 = +HEAPF32[i1 + 28 >> 2];
  }
  d19 = d12 + d20 - d5;
  d8 = d18 < d19 ? d19 : d18;
  return +d8;
 }
 HEAP16[i1 + 50 >> 1] = i15;
 i16 = HEAP32[i1 + 16 >> 2] | 0;
 i17 = HEAP32[(HEAP32[i16 >> 2] | 0) + 636 >> 2] | 0;
 i21 = HEAP32[i1 + 44 >> 2] | 0;
 i22 = HEAP32[i7 >> 2] | 0;
 d18 = +HEAPF32[((i22 & 2048 | 0) == 0 ? i1 + 24 | 0 : i13) >> 2];
 if (d18 == +0) {
  d23 = +0;
  i24 = i22;
 } else {
  i22 = __ZNK7WebCore9InlineBox4rootEv(i11) | 0;
  d23 = d18 - +HEAPF32[((HEAP32[i22 + 32 >> 2] & 2048 | 0) == 0 ? i22 + 24 | 0 : i22 + 20 | 0) >> 2];
  i24 = HEAP32[i7 >> 2] | 0;
 }
 d18 = +FUNCTION_TABLE_fiiifiii[i17 & 1](i16, i21, i15, d23, (i24 & 1 | 0) != 0, 0, 0);
 HEAPF32[i6 >> 2] = +HEAPF32[i6 >> 2] + (d18 + d5);
 d23 = +HEAPF32[i13 >> 2];
 if (i2) {
  d8 = d18 + d23;
  return +d8;
 }
 if ((HEAP32[i7 >> 2] & 2048 | 0) == 0) {
  d25 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i11);
 } else {
  d25 = +HEAPF32[i1 + 28 >> 2];
 }
 d8 = d23 + d25 - d18 - d5;
 return +d8;
}
function __ZN7WebCoreL24strokeWavyTextDecorationERNS_15GraphicsContextERNS_10FloatPointES3_f(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, d26 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 __ZN7WebCore15GraphicsContext27adjustLineToPixelBoundariesERNS_10FloatPointES2_fNS_11StrokeStyleE(i2, i3, +1, __ZNK7WebCore15GraphicsContext11strokeStyleEv(i1) | 0);
 __ZN7WebCore4PathC1Ev(i5);
 __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i5, i2);
 d12 = +HEAPF32[i2 >> 2];
 d13 = +HEAPF32[i3 >> 2];
 d14 = +HEAPF32[i2 + 4 >> 2];
 do {
  if (d12 == d13) {
   d15 = +HEAPF32[i3 + 4 >> 2];
   i2 = d14 < d15;
   d16 = i2 ? d15 : d14;
   d17 = i2 ? d14 : d15;
   d15 = d16 - d17;
   if (d15 > +0) {
    i2 = ~~(d15 * +.25);
    d18 = +(i2 >>> 0 >>> 0);
    d19 = (d15 - (d18 * +4 - +((i2 - 1 | 0) >>> 0 >>> 0))) / d18;
    d20 = d19 + +4;
    d21 = d19 + +6;
   } else {
    d20 = +4;
    d21 = +6;
   }
   HEAPF32[i6 >> 2] = d12 + d21;
   i2 = i6 + 4 | 0;
   HEAPF32[i2 >> 2] = +0;
   HEAPF32[i7 >> 2] = d12 - d21;
   i22 = i7 + 4 | 0;
   HEAPF32[i22 >> 2] = +0;
   d19 = d20 * +2;
   d18 = d19 + d17;
   if (d18 > d16) {
    break;
   }
   i23 = i8 | 0;
   i24 = i8 + 4 | 0;
   d15 = d17;
   d17 = d18;
   while (1) {
    d18 = d20 + d15;
    HEAPF32[i2 >> 2] = d18;
    HEAPF32[i22 >> 2] = d18;
    HEAPF32[i23 >> 2] = d12;
    HEAPF32[i24 >> 2] = d17;
    __ZN7WebCore4Path16addBezierCurveToERKNS_10FloatPointES3_S3_(i5, i6, i7, i8);
    d18 = d19 + d17;
    if (d18 > d16) {
     break;
    } else {
     d15 = d17;
     d17 = d18;
    }
   }
  } else {
   i24 = d12 < d13;
   d17 = i24 ? d12 : d13;
   d15 = i24 ? d13 : d12;
   d16 = d15 - d17;
   if (d16 > +0) {
    i24 = ~~(d16 * +.25);
    d19 = +(i24 >>> 0 >>> 0);
    d18 = (d16 - (d19 * +4 - +((i24 - 1 | 0) >>> 0 >>> 0))) / d19;
    d25 = d18 + +4;
    d26 = d18 + +6;
   } else {
    d25 = +4;
    d26 = +6;
   }
   i24 = i9 | 0;
   HEAPF32[i24 >> 2] = +0;
   HEAPF32[i9 + 4 >> 2] = d14 + d26;
   i23 = i10 | 0;
   HEAPF32[i23 >> 2] = +0;
   HEAPF32[i10 + 4 >> 2] = d14 - d26;
   d18 = d25 * +2;
   d19 = d18 + d17;
   if (d19 > d15) {
    break;
   }
   i22 = i11 | 0;
   i2 = i11 + 4 | 0;
   d16 = d17;
   d17 = d19;
   while (1) {
    d19 = d25 + d16;
    HEAPF32[i24 >> 2] = d19;
    HEAPF32[i23 >> 2] = d19;
    HEAPF32[i22 >> 2] = d17;
    HEAPF32[i2 >> 2] = d14;
    __ZN7WebCore4Path16addBezierCurveToERKNS_10FloatPointES3_S3_(i5, i9, i10, i11);
    d19 = d18 + d17;
    if (d19 > d15) {
     break;
    } else {
     d16 = d17;
     d17 = d19;
    }
   }
  }
 } while (0);
 __ZN7WebCore15GraphicsContext18setShouldAntialiasEb(i1, 1);
 __ZN7WebCore15GraphicsContext10strokePathERKNS_4PathE(i1, i5);
 __ZN7WebCore4PathD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEPNS_24BufferForAppendingHyphenE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i2 + 16 | 0;
 i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 44 >> 2] | 0;
 i12 = i7 | 0;
 HEAP32[i12 >> 2] = i11;
 do {
  if ((i11 | 0) == 0) {
   i13 = 0;
   i14 = HEAP32[i2 + 44 >> 2] | 0;
   i15 = HEAPU16[i2 + 48 >> 1] | 0;
  } else {
   i16 = i11 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i16 = HEAP32[i12 >> 2] | 0;
   i17 = HEAP32[i2 + 44 >> 2] | 0;
   i18 = HEAPU16[i2 + 48 >> 1] | 0;
   if ((i16 | 0) == 0) {
    i13 = 0;
    i14 = i17;
    i15 = i18;
    break;
   }
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   i14 = i17;
   i15 = i18;
  }
 } while (0);
 do {
  if (!((i13 | 0) == (i15 | 0) & (i14 | 0) == 0)) {
   __ZNK3WTF6String20substringSharingImplEjj(i8, i7, i14, i15);
   i11 = i8 | 0;
   i18 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i18;
   do {
    if ((i17 | 0) != 0) {
     i18 = i17 | 0;
     i16 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i18 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i11 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i16 = i17 | 0;
   i18 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i16 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i8 = i9 | 0;
 i15 = HEAP32[i12 >> 2] | 0;
 HEAP32[i8 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i7 = i15 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 __ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEN3WTF6StringEiPNS_24BufferForAppendingHyphenE(i1, i2, i3, i4, i9, (HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 44 >> 2] | 0) + 4 >> 2] | 0) - i14 | 0, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i12 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i12 = i5 | 0;
 i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i12 >> 2] = i14;
  STACKTOP = i6;
  return;
 }
}
function __ZNK7WebCore13InlineTextBox19logicalOverflowRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i4;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i2 | 0;
 i9 = HEAP32[i2 + 32 >> 2] | 0;
 i10 = HEAP32[H_BASE + 160 >> 2] | 0;
 if (!((i10 | 0) != 0 & (i9 & 16384 | 0) == 0)) {
  i11 = i2 + 20 | 0;
  if ((i9 & 2048 | 0) == 0) {
   d12 = +HEAPF32[i2 + 24 >> 2];
   d13 = +HEAPF32[i11 >> 2];
   d14 = +HEAPF32[i2 + 28 >> 2];
   d15 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i8);
   HEAPF32[i7 >> 2] = d12;
   HEAPF32[i7 + 4 >> 2] = d13;
   HEAPF32[i7 + 8 >> 2] = d14;
   HEAPF32[i7 + 12 >> 2] = d15;
  } else {
   d15 = +HEAPF32[i11 >> 2];
   d14 = +HEAPF32[i2 + 24 >> 2];
   d13 = +HEAPF32[i2 + 28 >> 2];
   d12 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i8);
   HEAPF32[i7 >> 2] = d15;
   HEAPF32[i7 + 4 >> 2] = d14;
   HEAPF32[i7 + 8 >> 2] = d13;
   HEAPF32[i7 + 12 >> 2] = d12;
  }
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i6, i7);
  i7 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i1 + 4 >> 2] = i7;
  i7 = i4 + 8 | 0;
  i4 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i1 + 8 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i1 + 12 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = HEAP32[i10 + 8 >> 2] | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 i10 = i2;
 i5 = i10 + ~(i10 << 15) | 0;
 i10 = (i5 >>> 10 ^ i5) * 9 & -1;
 i5 = i10 >>> 6 ^ i10;
 i10 = i5 + ~(i5 << 11) | 0;
 i5 = i10 >>> 16 ^ i10;
 L9 : do {
  if ((i7 | 0) != 0) {
   i10 = i4 & i5;
   i6 = i7 + (i10 * 20 & -1) | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == (i2 | 0)) {
    i16 = i6;
   } else {
    i6 = (i5 >>> 23) + ~i5 | 0;
    i11 = i6 << 12 ^ i6;
    i6 = i11 >>> 7 ^ i11;
    i11 = i6 << 2 ^ i6;
    i6 = i11 >>> 20 ^ i11 | 1;
    i11 = 0;
    i9 = i10;
    i10 = i8;
    while (1) {
     if ((i10 | 0) == 0) {
      break L9;
     }
     i8 = (i11 | 0) == 0 ? i6 : i11;
     i17 = i8 + i9 & i4;
     i18 = i7 + (i17 * 20 & -1) | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == (i2 | 0)) {
      i16 = i18;
      break;
     } else {
      i11 = i8;
      i9 = i17;
      i10 = i19;
     }
    }
   }
   if ((i16 | 0) == 0) {
    break;
   }
   i10 = i1;
   i9 = i16 + 4 | 0;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   STACKTOP = i3;
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 16) | 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashMapIPKN7WebCore13InlineTextBoxENS1_10LayoutRectENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 * 20 & -1 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 * 20 & -1) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 * 20 & -1) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 * 20 & -1) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 * 20 & -1) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NS1_10LayoutRectEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore13InlineTextBox28applyShadowToGraphicsContextEPNS_15GraphicsContextEPKNS_10ShadowDataERKNS_9FloatRectEbbb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, i19 = 0, i20 = 0, d21 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 if ((i3 | 0) == 0) {
  HEAPF32[i1 >> 2] = +0;
  HEAPF32[i1 + 4 >> 2] = +0;
  STACKTOP = i8;
  return;
 }
 if (i7) {
  i11 = HEAP32[i3 + 4 >> 2] | 0;
  i12 = i3 | 0;
 } else {
  i11 = -(HEAP32[i3 >> 2] | 0) | 0;
  i12 = i3 + 4 | 0;
 }
 d13 = +(HEAP32[i12 >> 2] | 0);
 d14 = +(i11 | 0);
 HEAPF32[i9 >> 2] = d13;
 i11 = i9 + 4 | 0;
 HEAPF32[i11 >> 2] = d14;
 i12 = HEAP32[i3 + 8 >> 2] | 0;
 if ((HEAP32[i3 + 32 >> 2] | 0) != 0 | i5 | i6 ^ 1) {
  i6 = i10;
  i5 = i4;
  HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
  d15 = +(i12 | 0);
  d16 = +(~~+Math_ceil(d15 * 1.399999976158142) | 0);
  i5 = i10 | 0;
  d17 = +HEAPF32[i5 >> 2] - d16;
  i6 = i10 + 8 | 0;
  HEAPF32[i6 >> 2] = d16 + (+HEAPF32[i6 >> 2] + d16);
  i6 = i10 + 4 | 0;
  d18 = +HEAPF32[i6 >> 2] - d16;
  i7 = i10 + 12 | 0;
  HEAPF32[i7 >> 2] = d16 + (d16 + +HEAPF32[i7 >> 2]);
  HEAPF32[i5 >> 2] = d13 + d17;
  HEAPF32[i6 >> 2] = d14 + d18;
  __ZN7WebCore15GraphicsContext4saveEv(i2);
  __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i2, i10);
  d18 = +HEAPF32[i11 >> 2];
  d14 = d15 + (+HEAPF32[i4 + 12 >> 2] * +2 + (d18 > +0 ? d18 : +0));
  i4 = (HEAPF32[tempDoublePtr >> 2] = d14, HEAP32[tempDoublePtr >> 2] | 0);
  HEAPF32[i11 >> 2] = d18 - d14;
  i19 = i4;
  i20 = 0;
  d21 = d15;
 } else {
  i19 = 0;
  i20 = 0;
  d21 = +(i12 | 0);
 }
 __ZN7WebCore15GraphicsContext9setShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i2, i9, d21, i3 + 16 | 0, __ZNK7WebCore15GraphicsContext14fillColorSpaceEv(i2) | 0);
 i2 = i1;
 HEAP32[i2 >> 2] = i20;
 HEAP32[i2 + 4 >> 2] = i19;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore7TextRunC2ERKN3WTF6StringEffjNS_13TextDirectionEbbj(i1, i2, d3, d4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 4 >> 2] = i11;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i11 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 8 >> 2] = i12;
 HEAPF32[i1 + 12 >> 2] = d3;
 HEAPF32[i1 + 16 >> 2] = +1;
 HEAPF32[i1 + 20 >> 2] = d4;
 i12 = i1 + 24 | 0;
 i11 = i6 << 4 & 16 | i5 & 3 | (i7 & 1) << 5 | (i8 & 1) << 6 | HEAP32[i12 >> 2] & -124;
 HEAP32[i12 >> 2] = i11;
 if ((i9 & 1 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = (HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0) << 7 & 128;
 }
 i8 = i11 & -137 | i13;
 HEAP32[i12 >> 2] = i8;
 if ((i9 & 2 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = (HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0) << 8 & 256;
 }
 i9 = i8 & -777 | i14;
 HEAP32[i12 >> 2] = i9;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i14 = HEAP32[i10 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i15 = 0;
  i16 = i9;
  i17 = i1 | 0;
  i18 = i15;
  HEAP32[i17 >> 2] = i18;
  i19 = i16 & -5;
  HEAP32[i12 >> 2] = i19;
  return;
 }
 if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
  i15 = HEAP32[i14 + 8 >> 2] | 0;
  i16 = i9;
  i17 = i1 | 0;
  i18 = i15;
  HEAP32[i17 >> 2] = i18;
  i19 = i16 & -5;
  HEAP32[i12 >> 2] = i19;
  return;
 } else {
  i9 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i14) | 0;
  i15 = i9;
  i16 = HEAP32[i12 >> 2] | 0;
  i17 = i1 | 0;
  i18 = i15;
  HEAP32[i17 >> 2] = i18;
  i19 = i16 & -5;
  HEAP32[i12 >> 2] = i19;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viff + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iiiiiiii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_fiifffii + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_iifi + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_fii + 2;
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
function __ZN7WebCore13InlineTextBox17selectionStartEndERiS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 16 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP32[i8 + 20 >> 2] & 234881024 | 0) == 67108864) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i6 >> 2] = HEAP32[(HEAP32[i8 + 44 >> 2] | 0) + 4 >> 2];
  } else {
   __ZNK7WebCore12RenderObject17selectionStartEndERiS1_(i8, i5, i6);
   i9 = HEAP32[i7 >> 2] | 0;
   i10 = (HEAP32[i9 + 20 >> 2] | 0) >>> 25 & 7;
   if ((i10 | 0) == 3) {
    HEAP32[i5 >> 2] = 0;
    break;
   } else if ((i10 | 0) == 1) {
    HEAP32[i6 >> 2] = HEAP32[(HEAP32[i9 + 44 >> 2] | 0) + 4 >> 2];
    break;
   } else {
    break;
   }
  }
 } while (0);
 i7 = i1 + 44 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
 HEAP32[i2 >> 2] = (i8 | 0) < 0 ? 0 : i8;
 i8 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
 i7 = HEAPU16[i1 + 48 >> 1] | 0;
 HEAP32[i3 >> 2] = (i7 | 0) < (i8 | 0) ? i7 : i8;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore13InlineTextBox23getEmphasisMarkPositionERKNS_11RenderStyleERNS_20TextEmphasisPositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 if ((__ZNK7WebCore11RenderStyle16textEmphasisMarkEv(i2) | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = (HEAP32[(HEAP32[i2 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 27 & 1;
 HEAP32[i3 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = __ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i1 + 16 >> 2] | 0) | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 164 >> 2] & 31](i5 | 0) | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i1 = i5 + 8 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 168 >> 2] & 31](i5 | 0) | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = __ZNK7WebCore13RenderRubyRun8rubyTextEv(HEAP32[i1 >> 2] | 0) | 0;
 if ((i5 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = (__ZNK7WebCore15RenderBlockFlow8hasLinesEv(i5 | 0) | 0) ^ 1;
 return i4 | 0;
}
function __ZN7WebCore13InlineTextBox22setLogicalOverflowRectERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[H_BASE + 160 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 160 >> 2] = i7;
  i8 = i7;
 } else {
  i8 = i5;
 }
 HEAP32[i4 >> 2] = i1;
 __ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NS1_10LayoutRectEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i3 + 8 | 0, i8 | 0, i4, i2);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore13InlineTextBox19calculateBoundariesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, d11 = +0;
 i3 = i2 | 0;
 d4 = +HEAPF32[i2 + 20 >> 2];
 d5 = +HEAPF32[i2 + 24 >> 2];
 i6 = i2 + 32 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 & 2048 | 0) == 0) {
  d8 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i3);
  d9 = d8;
  i10 = HEAP32[i6 >> 2] | 0;
 } else {
  d9 = +HEAPF32[i2 + 28 >> 2];
  i10 = i7;
 }
 if ((i10 & 2048 | 0) == 0) {
  d11 = +HEAPF32[i2 + 28 >> 2];
 } else {
  d11 = +__ZNK7WebCore9InlineBox13logicalHeightEv(i3);
 }
 HEAPF32[i1 >> 2] = d4;
 HEAPF32[i1 + 4 >> 2] = d5;
 HEAPF32[i1 + 8 >> 2] = d9;
 HEAPF32[i1 + 12 >> 2] = d11;
 return;
}
function __ZNK7WebCore13InlineTextBox11isLineBreakEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = HEAP32[(HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 7;
 if ((i3 | 0) == 4 | (i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP16[i1 + 48 >> 1] | 0) != 1) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i2 + 44 >> 2] | 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = i3 + 8 | 0;
 if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
  i5 = HEAP16[(HEAP32[i1 >> 2] | 0) + (i2 << 1) >> 1] | 0;
 } else {
  i5 = HEAPU8[(HEAP32[i1 >> 2] | 0) + i2 | 0] | 0;
 }
 i4 = i5 << 16 >> 16 == 10;
 return i4 | 0;
}
function __ZNK7WebCore13InlineTextBox16baselinePositionENS_12FontBaselineE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i3 + 16 >> 2] | 0) == (i5 | 0)) {
  i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 80 >> 2] & 3](i3 | 0, i2) | 0;
  return i4 | 0;
 } else {
  i3 = HEAP32[i1 + 32 >> 2] | 0;
  i4 = FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 816 >> 2] & 1](i5, i2, (i3 & 1 | 0) != 0, i3 >>> 11 & 1 ^ 1, 0) | 0;
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore13InlineTextBox10lineHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[(HEAP32[i2 + 16 >> 2] | 0) + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 if ((HEAP32[i4 + 16 >> 2] | 0) == (i3 | 0)) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] & 7](i1, i4 | 0);
  return;
 } else {
  i4 = HEAP32[i2 + 32 >> 2] | 0;
  FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 812 >> 2] & 3](i1, i3, (i4 & 1 | 0) != 0, i4 >>> 11 & 1 ^ 1, 0);
  return;
 }
}
function __ZN7WebCore13InlineTextBoxD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i4 = HEAP32[H_BASE + 160 >> 2] | 0;
 if (!((i4 | 0) != 0 & (HEAP32[i1 + 32 >> 2] & 16384 | 0) == 0)) {
  i5 = i1;
  __ZdlPv(i5);
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore13InlineTextBoxENS1_10LayoutRectENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i4, i3) | 0;
 i5 = i1;
 __ZdlPv(i5);
 STACKTOP = i2;
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
function __ZN7WebCore13InlineTextBoxD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i4 = HEAP32[H_BASE + 160 >> 2] | 0;
 if (!((i4 | 0) != 0 & (HEAP32[i1 + 32 >> 2] & 16384 | 0) == 0)) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore13InlineTextBoxENS1_10LayoutRectENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i4, i3) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13InlineTextBoxD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i4 = HEAP32[H_BASE + 160 >> 2] | 0;
 if (!((i4 | 0) != 0 & (HEAP32[i1 + 32 >> 2] & 16384 | 0) == 0)) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore13InlineTextBoxENS1_10LayoutRectENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i4, i3) | 0;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore13InlineTextBox15selectionHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZNK7WebCore9InlineBox4rootEv(i2 | 0) | 0;
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i4, i6);
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i5, i6);
 i6 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = (i6 | 0) > 0 ? i6 : 0;
 STACKTOP = i3;
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
function __ZNK7WebCore13InlineTextBox7textPosEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, d3 = +0, i4 = 0;
 d2 = +HEAPF32[((HEAP32[i1 + 32 >> 2] & 2048 | 0) == 0 ? i1 + 24 | 0 : i1 + 20 | 0) >> 2];
 if (d2 == +0) {
  d3 = +0;
  return +d3;
 }
 i4 = __ZNK7WebCore9InlineBox4rootEv(i1 | 0) | 0;
 d3 = d2 - +HEAPF32[((HEAP32[i4 + 32 >> 2] & 2048 | 0) == 0 ? i4 + 24 | 0 : i4 + 20 | 0) >> 2];
 return +d3;
}
function __ZN7WebCore32alignSelectionRectToDevicePixelsERNS_9FloatRectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, i4 = 0, d5 = +0, d6 = +0;
 i2 = i1 | 0;
 d3 = +HEAPF32[i2 >> 2];
 i4 = i1 + 8 | 0;
 d5 = +Math_floor(d3 + +HEAPF32[i4 >> 2]);
 d6 = +Math_floor(d3);
 HEAPF32[i2 >> 2] = d6;
 HEAPF32[i4 >> 2] = +_round(+(d5 - d6));
 return;
}
function __ZNK7WebCore13InlineTextBox10isSelectedEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = i2 - i4 | 0;
 i2 = i3 - i4 | 0;
 i4 = HEAPU16[i1 + 48 >> 1] | 0;
 return (((i5 | 0) < 0 ? 0 : i5) | 0) < (((i4 | 0) < (i2 | 0) ? i4 : i2) | 0) | 0;
}
function __ZN7WebCore13InlineTextBox10deleteLineEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19RenderTextLineBoxes6removeERNS_13InlineTextBoxE((HEAP32[i1 + 16 >> 2] | 0) + 48 | 0, i1);
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
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
function dynCall_fiiifiii(i1, i2, i3, i4, d5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return +FUNCTION_TABLE_fiiifiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0, i7 | 0, i8 | 0);
}
function __ZN7WebCore13InlineTextBox9markDirtyEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (i2) {
  HEAP16[i1 + 48 >> 1] = 0;
  HEAP32[i1 + 44 >> 2] = 0;
 }
 i3 = i1 + 32 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -257 | (i2 & 1) << 8;
 return;
}
function dynCall_fiifffii(i1, i2, i3, d4, d5, d6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 i8 = i8 | 0;
 return +FUNCTION_TABLE_fiifffii[i1 & 3](i2 | 0, i3 | 0, +d4, +d5, +d6, i7 | 0, i8 | 0);
}
function iiiii___ZNK7WebCore9InlineBox22canAccommodateEllipsisEbii__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZNK7WebCore9InlineBox22canAccommodateEllipsisEbii(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore13InlineTextBox11extractLineEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 32 >> 2] & 512 | 0) != 0) {
  return;
 }
 __ZN7WebCore19RenderTextLineBoxes7extractERNS_13InlineTextBoxE((HEAP32[i1 + 16 >> 2] | 0) + 48 | 0, i1);
 return;
}
function __ZN7WebCore13InlineTextBox10attachLineEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 32 >> 2] & 512 | 0) == 0) {
  return;
 }
 __ZN7WebCore19RenderTextLineBoxes6attachERNS_13InlineTextBoxE((HEAP32[i1 + 16 >> 2] | 0) + 48 | 0, i1);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
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
function __ZNK7WebCore13InlineTextBox15selectionBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13RootInlineBox15selectionBottomEv(i1, __ZNK7WebCore9InlineBox4rootEv(i2 | 0) | 0);
 return;
}
function __ZNK7WebCore13InlineTextBox12selectionTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13RootInlineBox12selectionTopEv(i1, __ZNK7WebCore9InlineBox4rootEv(i2 | 0) | 0);
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
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viff___ZN7WebCore9InlineBox14adjustPositionEff__wrapper(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 __ZN7WebCore9InlineBox14adjustPositionEff(i1 | 0, +d2, +d3);
}
function b12(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(12);
 return 0;
}
function b7(i1, i2, i3, d4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(7);
 return +0;
}
function dynCall_iifi(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iifi[i1 & 3](i2 | 0, +d3, i4 | 0) | 0;
}
function b5(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(5);
 return +0;
}
function __ZN7WebCore9InlineBox14setConstructedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 32 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZNK7WebCore13InlineTextBox14caretMaxOffsetEv(i1) {
 i1 = i1 | 0;
 return (HEAPU16[i1 + 48 >> 1] | 0) + (HEAP32[i1 + 44 >> 2] | 0) | 0;
}
function dynCall_viff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 FUNCTION_TABLE_viff[i1 & 3](i2 | 0, +d3, +d4);
}
function vi___ZN7WebCore9InlineBox14dirtyLineBoxesEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InlineBox14dirtyLineBoxesEv(i1 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function dynCall_fii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return +FUNCTION_TABLE_fii[i1 & 3](i2 | 0, i3 | 0);
}
function b16(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(16);
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore13InlineTextBox15clearTruncationEv(i1) {
 i1 = i1 | 0;
 HEAP16[i1 + 50 >> 1] = -1;
 return;
}
function __ZNK7WebCore13InlineTextBox14caretMinOffsetEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 44 >> 2] | 0;
}
function b1(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(1);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 3](i2 | 0);
}
function b2(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(2);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore9InlineBox20virtualLogicalHeightEv(i1) {
 i1 = i1 | 0;
 return +(+0);
}
function b15(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 abort(15);
 return 0;
}
function __ZNK7WebCore13InlineTextBox15isInlineTextBoxEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox18isInlineElementBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox15isRootInlineBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox15isInlineFlowBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b9(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(9);
}
function b13(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(13);
 return +0;
}
function b14(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(14);
 return 0;
}
function b6(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 abort(6);
}
function __ZNK7WebCore9InlineBox6isLeafEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b11(i1) {
 i1 = i1 | 0;
 abort(11);
 return +0;
}
function b8(i1) {
 i1 = i1 | 0;
 abort(8);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b10() {
 abort(10);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore13InlineTextBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_,b0];
  var FUNCTION_TABLE_iiiii = [b1,b1,iiiii___ZNK7WebCore9InlineBox22canAccommodateEllipsisEbii__wrapper,b1];
  var FUNCTION_TABLE_viiii = [b2,b2,__ZNK7WebCore13InlineTextBox18localSelectionRectEii,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore13InlineTextBoxD2Ev,b3,vi___ZN7WebCore9InlineBox14dirtyLineBoxesEv__wrapper,b3,__ZN7WebCore13InlineTextBox10deleteLineEv,b3,__ZN7WebCore13InlineTextBox11extractLineEv,b3,__ZN7WebCore9InlineBox14setConstructedEv,b3,__ZN7WebCore13InlineTextBox15clearTruncationEv,b3,__ZN7WebCore13InlineTextBoxD0Ev,b3,__ZN7WebCore13InlineTextBox10attachLineEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZNK7WebCore13InlineTextBox10lineHeightEv,b4,__ZNK7WebCore13InlineTextBox19calculateBoundariesEv,b4,__ZN7WebCore13InlineTextBox9markDirtyEb,b4];
  var FUNCTION_TABLE_fiifffii = [b5,b5,__ZN7WebCore13InlineTextBox16placeEllipsisBoxEbfffRfRb,b5];
  var FUNCTION_TABLE_viff = [b6,b6,viff___ZN7WebCore9InlineBox14adjustPositionEff__wrapper,b6];
  var FUNCTION_TABLE_fiiifiii = [b7,b7];
  var FUNCTION_TABLE_ii = [b8,b8,__ZNK7WebCore9InlineBox15isRootInlineBoxEv,b8,__ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv,b8,__ZNK7WebCore13InlineTextBox15isInlineTextBoxEv,b8,__ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv,b8,__ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv,b8,__ZNK7WebCore13InlineTextBox11isLineBreakEv,b8,__ZN7WebCore13InlineTextBox14selectionStateEv,b8,__ZNK7WebCore13InlineTextBox14caretMaxOffsetEv,b8,__ZNK7WebCore9InlineBox15isInlineFlowBoxEv,b8,__ZNK7WebCore13InlineTextBox14caretMinOffsetEv,b8,__ZNK7WebCore9InlineBox18isInlineElementBoxEv,b8,__ZNK7WebCore9InlineBox6isLeafEv,b8,b8,b8,b8
  ,b8,b8,b8];
  var FUNCTION_TABLE_viii = [b9,b9];
  var FUNCTION_TABLE_v = [b10,b10];
  var FUNCTION_TABLE_fi = [b11,b11,__ZNK7WebCore9InlineBox20virtualLogicalHeightEv,b11];
  var FUNCTION_TABLE_iiiiiiii = [b12,b12,__ZN7WebCore13InlineTextBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_,b12];
  var FUNCTION_TABLE_fii = [b13,b13,__ZNK7WebCore13InlineTextBox17positionForOffsetEi,b13];
  var FUNCTION_TABLE_iii = [b14,b14,__ZNK7WebCore13InlineTextBox16baselinePositionENS_12FontBaselineE,b14];
  var FUNCTION_TABLE_iifi = [b15,b15,__ZNK7WebCore13InlineTextBox17offsetForPositionEfb,b15];
  var FUNCTION_TABLE_iiiiii = [b16,b16];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_iiiii: dynCall_iiiii, dynCall_viiii: dynCall_viiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_fiifffii: dynCall_fiifffii, dynCall_viff: dynCall_viff, dynCall_fiiifiii: dynCall_fiiifiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iiiiiiii: dynCall_iiiiiiii, dynCall_fii: dynCall_fii, dynCall_iii: dynCall_iii, dynCall_iifi: dynCall_iifi, dynCall_iiiiii: dynCall_iiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_iiiii": invoke_iiiii, "invoke_viiii": invoke_viiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_fiifffii": invoke_fiifffii, "invoke_viff": invoke_viff, "invoke_fiiifiii": invoke_fiiifiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iiiiiiii": invoke_iiiiiiii, "invoke_fii": invoke_fii, "invoke_iii": invoke_iii, "invoke_iifi": invoke_iifi, "invoke_iiiiii": invoke_iiiiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore26SVGTextRunRenderingContextE": __ZTVN7WebCore26SVGTextRunRenderingContextE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore7TextRun21s_allowsRoundingHacksE": __ZN7WebCore7TextRun21s_allowsRoundingHacksE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_fiifffii = Module["dynCall_fiifffii"] = asm["dynCall_fiifffii"];
var dynCall_viff = Module["dynCall_viff"] = asm["dynCall_viff"];
var dynCall_fiiifiii = Module["dynCall_fiiifiii"] = asm["dynCall_fiiifiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = asm["dynCall_iiiiiiii"];
var dynCall_fii = Module["dynCall_fii"] = asm["dynCall_fii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iifi = Module["dynCall_iifi"] = asm["dynCall_iifi"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore13InlineTextBox31computeRectForReplacementMarkerEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontE","__ZNK7WebCore13InlineTextBox17positionForOffsetEi","_strlen","__ZN7WebCore13InlineTextBox10attachLineEv","__ZNK7WebCore9InlineBox15isRootInlineBoxEv","__ZNK7WebCore13InlineTextBox10isSelectedEii","__ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv","__ZN7WebCore13InlineTextBox16placeEllipsisBoxEbfffRfRb","__ZNK7WebCore13InlineTextBox16baselinePositionENS_12FontBaselineE","__ZN3WTF7HashMapIPKN7WebCore13InlineTextBoxENS1_10LayoutRectENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_","__ZN7WebCore32alignSelectionRectToDevicePixelsERNS_9FloatRectE","__ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEPNS_24BufferForAppendingHyphenE","__ZNK7WebCore13InlineTextBox19logicalOverflowRectEv","__ZN7WebCore13InlineTextBox22setLogicalOverflowRectERKNS_10LayoutRectE","__ZN7WebCore13InlineTextBox17selectionStartEndERiS1_","__ZNK7WebCore13InlineTextBox18localSelectionRectEii","__ZN7WebCore13InlineTextBoxD2Ev","__ZN7WebCore13InlineTextBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_","__ZNK7WebCore13InlineTextBox15selectionBottomEv","__ZN7WebCore13InlineTextBox10deleteLineEv","__ZN7WebCore7TextRunC2ERKN3WTF6StringEffjNS_13TextDirectionEbbj","_memset","__ZNK7WebCore13InlineTextBox23getEmphasisMarkPositionERKNS_11RenderStyleERNS_20TextEmphasisPositionE","__ZNK7WebCore13InlineTextBox12selectionTopEv","__ZN7WebCore13InlineTextBox11extractLineEv","__ZN7WebCore13InlineTextBox20paintTextMatchMarkerEPNS_15GraphicsContextERKNS_10FloatPointEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontE","__ZN7WebCore13InlineTextBox15paintDecorationERNS_15GraphicsContextERKNS_10FloatPointENS_14TextDecorationENS_19TextDecorationStyleEPKNS_10ShadowDataERNS_11TextPainterE","__ZNK7WebCore13InlineTextBox7textPosEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore9InlineBox20virtualLogicalHeightEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore13InlineTextBox19paintDocumentMarkerEPNS_15GraphicsContextERKNS_10FloatPointEPNS_14DocumentMarkerERKNS_11RenderStyleERKNS_4FontEb","__ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NS1_10LayoutRectEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RKS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZNK7WebCore13InlineTextBox15isInlineTextBoxEv","__ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv","__ZNK7WebCore13InlineTextBox16constructTextRunERKNS_11RenderStyleERKNS_4FontEN3WTF6StringEiPNS_24BufferForAppendingHyphenE","__ZN7WebCore13InlineTextBox26paintCompositionBackgroundEPNS_15GraphicsContextERKNS_10FloatPointERKNS_11RenderStyleERKNS_4FontEii","__ZN7WebCore13InlineTextBox14selectionStateEv","__ZN7WebCore13InlineTextBox15clearTruncationEv","__ZN7WebCore13InlineTextBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_","__ZNK7WebCore9InlineBox18isInlineElementBoxEv","__ZN7WebCore13InlineTextBox14paintSelectionEPNS_15GraphicsContextERKNS_10FloatPointERKNS_11RenderStyleERKNS_4FontENS_5ColorE","__ZNK7WebCore13InlineTextBox17offsetForPositionEfb","__ZNK7WebCore13InlineTextBox11isLineBreakEv","__ZN7WebCoreL24strokeWavyTextDecorationERNS_15GraphicsContextERNS_10FloatPointES3_f","__ZN7WebCore13InlineTextBoxD0Ev","__ZN7WebCore13InlineTextBox25paintCompositionUnderlineEPNS_15GraphicsContextERKNS_10FloatPointERKNS_20CompositionUnderlineE","__ZNK7WebCore13InlineTextBox19calculateBoundariesEv","__ZN3WTF9HashTableIPKN7WebCore13InlineTextBoxENS_12KeyValuePairIS4_NS1_10LayoutRectEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv","__ZN7WebCore13InlineTextBox28applyShadowToGraphicsContextEPNS_15GraphicsContextEPKNS_10ShadowDataERKNS_9FloatRectEbbb","__ZNK7WebCore13InlineTextBox10lineHeightEv","__ZN7WebCore13InlineTextBox9markDirtyEb","__ZNK7WebCore13InlineTextBox15selectionHeightEv","_memcpy","__ZN7WebCore9InlineBox14setConstructedEv","__ZNK7WebCore13InlineTextBox14caretMaxOffsetEv","__ZNK7WebCore9InlineBox15isInlineFlowBoxEv","__ZNK7WebCore13InlineTextBox14caretMinOffsetEv","__ZN7WebCore13InlineTextBox20paintDocumentMarkersEPNS_15GraphicsContextERKNS_10FloatPointERKNS_11RenderStyleERKNS_4FontEb","__ZNK7WebCore9InlineBox6isLeafEv"]

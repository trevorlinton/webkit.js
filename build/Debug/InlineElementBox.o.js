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
H_BASE = parentModule["_malloc"](136 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 136;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    return Module["dynCall_iiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_viff(index,a1,a2,a3) {
  try {
    Module["dynCall_viff"](index,a1,a2,a3);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore16InlineElementBoxE=(H_BASE+8)|0;
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
  var invoke_iiiiiiii=env.invoke_iiiiiiii;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_viff=env.invoke_viff;
  var invoke_fiifffii=env.invoke_fiifffii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16InlineElementBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
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
 i5 = i7;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i4;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i10 = i1 + 16 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i12 | 0) == 0 | (i12 | 0) == (i11 | 0))) {
  STACKTOP = i6;
  return;
 }
 i12 = i2 + 20 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if (!((i13 | 0) == 4 | (i13 | 0) == 8)) {
  STACKTOP = i6;
  return;
 }
 i14 = i3;
 i3 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i7 + 4 >> 2] = i3;
 do {
  if ((HEAP32[i11 + 20 >> 2] & 512 | 0) == 0) {
   i15 = i13;
  } else {
   i3 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 16 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if (!((i3 | 0) == 3 | (i3 | 0) == 1)) {
    i15 = i13;
    break;
   }
   i3 = __ZNK7WebCore12RenderObject15containingBlockEv(i11) | 0;
   __ZNK7WebCore9RenderBox26flipForWritingModeForChildEPKS0_RKNS_11LayoutPointE(i8, i3, HEAP32[i10 >> 2] | 0, i5);
   i3 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i7 + 4 >> 2] = i3;
   i15 = HEAP32[i12 >> 2] | 0;
  }
 } while (0);
 _memcpy(i9 | 0, i2 | 0, 48) | 0;
 if ((i15 | 0) == 10 | (i15 | 0) == 8) {
  i16 = i15;
 } else {
  i16 = 0;
 }
 i2 = i9 + 20 | 0;
 HEAP32[i2 >> 2] = i16;
 i16 = HEAP32[i10 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i16 >> 2] | 0) + 648 >> 2] & 1](i16, i9, i5);
 if ((i15 | 0) == 10 | (i15 | 0) == 8) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i2 >> 2] = 2;
 i15 = HEAP32[i10 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i15 >> 2] | 0) + 648 >> 2] & 1](i15, i9, i5);
 HEAP32[i2 >> 2] = 3;
 i15 = HEAP32[i10 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i15 >> 2] | 0) + 648 >> 2] & 1](i15, i9, i5);
 HEAP32[i2 >> 2] = 4;
 i15 = HEAP32[i10 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i15 >> 2] | 0) + 648 >> 2] & 1](i15, i9, i5);
 HEAP32[i2 >> 2] = 5;
 i2 = HEAP32[i10 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 648 >> 2] & 1](i2, i9, i5);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore16InlineElementBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
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
 i7 = i9;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i6;
 i11 = i5;
 i5 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i9 + 4 >> 2] = i5;
 i5 = i1 + 16 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((HEAP32[i11 + 20 >> 2] & 512 | 0) == 0) {
   i12 = i11;
  } else {
   i13 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 16 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if (!((i13 | 0) == 3 | (i13 | 0) == 1)) {
    i12 = i11;
    break;
   }
   i13 = __ZNK7WebCore12RenderObject15containingBlockEv(i11) | 0;
   __ZNK7WebCore9RenderBox26flipForWritingModeForChildEPKS0_RKNS_11LayoutPointE(i10, i13, HEAP32[i5 >> 2] | 0, i7);
   i13 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i9 + 4 >> 2] = i13;
   i12 = HEAP32[i5 >> 2] | 0;
  }
 } while (0);
 i5 = __ZN7WebCore12RenderObject7hitTestERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestFilterE(i12, i2, i3, i4, i7, 0) | 0;
 STACKTOP = i8;
 return i5 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viff + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iiiiiiii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_fiifffii + 2;
}
function __ZN7WebCore16InlineElementBox10deleteLineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 do {
  if ((HEAP32[i1 + 32 >> 2] & 512 | 0) == 0) {
   i2 = HEAP32[i1 + 16 >> 2] | 0;
   i3 = HEAP32[i2 + 20 >> 2] | 0;
   do {
    if ((i3 & 512 | 0) == 0) {
     if ((i3 & 4096 | 0) == 0) {
      break;
     }
     __ZN7WebCore15RenderLineBreak19setInlineBoxWrapperEPNS_16InlineElementBoxE(i2, 0);
    } else {
     HEAP32[i2 + 84 >> 2] = 0;
    }
   } while (0);
   if ((i1 | 0) != 0) {
    break;
   }
   return;
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
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
function __ZN7WebCore16InlineElementBox10attachLineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 32 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -513;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i3 & 512 | 0) != 0) {
  HEAP32[i2 + 84 >> 2] = i1;
  return;
 }
 if ((i3 & 4096 | 0) == 0) {
  return;
 }
 __ZN7WebCore15RenderLineBreak19setInlineBoxWrapperEPNS_16InlineElementBoxE(i2, i1);
 return;
}
function __ZN7WebCore16InlineElementBox11extractLineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 32 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 512;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i1 & 512 | 0) != 0) {
  HEAP32[i2 + 84 >> 2] = 0;
  return;
 }
 if ((i1 & 4096 | 0) == 0) {
  return;
 }
 __ZN7WebCore15RenderLineBreak19setInlineBoxWrapperEPNS_16InlineElementBoxE(i2, 0);
 return;
}
function fiifffii___ZN7WebCore9InlineBox16placeEllipsisBoxEbfffRfRb__wrapper(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return +__ZN7WebCore9InlineBox16placeEllipsisBoxEbfffRfRb(i1 | 0, i2 | 0, +d3, +d4, +d5, i6 | 0, i7 | 0);
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function iii___ZNK7WebCore9InlineBox16baselinePositionENS_12FontBaselineE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore9InlineBox16baselinePositionENS_12FontBaselineE(i1 | 0, i2 | 0) | 0;
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
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore9InlineBox9markDirtyEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 32 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -257 | (i2 & 1) << 8;
 return;
}
function viff___ZN7WebCore9InlineBox14adjustPositionEff__wrapper(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 __ZN7WebCore9InlineBox14adjustPositionEff(i1 | 0, +d2, +d3);
}
function b0(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(0);
 return 0;
}
function vii___ZNK7WebCore9InlineBox10lineHeightEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9InlineBox10lineHeightEv(i1 | 0, i2 | 0);
}
function b6(i1, i2, d3, d4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(6);
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
function ii___ZNK7WebCore9InlineBox14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InlineBox14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InlineBox14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InlineBox14caretMaxOffsetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore9InlineBox14selectionStateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InlineBox14selectionStateEv(i1 | 0) | 0;
}
function __ZNK7WebCore9InlineBox11isLineBreakEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 20 >> 2] & 4096 | 0) != 0 | 0;
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
function __ZNK7WebCore9InlineBox19calculateBoundariesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function b3(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(3);
}
function b2(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(2);
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
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore16InlineElementBox18isInlineElementBoxEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore9InlineBox20virtualLogicalHeightEv(i1) {
 i1 = i1 | 0;
 return +(+0);
}
function __ZN7WebCore16InlineElementBoxD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
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
function __ZNK7WebCore9InlineBox15isRootInlineBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox15isInlineTextBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InlineBox15isInlineFlowBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore9InlineBox15clearTruncationEv(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function b5(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 abort(5);
}
function __ZNK7WebCore9InlineBox6isLeafEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore16InlineElementBoxD1Ev(i1) {
 i1 = i1 | 0;
 return;
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
function b10(i1) {
 i1 = i1 | 0;
 abort(10);
 return +0;
}
function b7(i1) {
 i1 = i1 | 0;
 abort(7);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
}
function b9() {
 abort(9);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiiiiii = [b0,b0,__ZN7WebCore16InlineElementBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZNK7WebCore9InlineBox19calculateBoundariesEv,b1,vii___ZNK7WebCore9InlineBox10lineHeightEv__wrapper,b1,__ZN7WebCore9InlineBox9markDirtyEb,b1];
  var FUNCTION_TABLE_iiiii = [b2,b2,iiiii___ZNK7WebCore9InlineBox22canAccommodateEllipsisEbii__wrapper,b2];
  var FUNCTION_TABLE_viiiii = [b3,b3,__ZN7WebCore16InlineElementBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_,b3];
  var FUNCTION_TABLE_vi = [b4,b4,__ZN7WebCore16InlineElementBox10deleteLineEv,b4,__ZN7WebCore16InlineElementBox10attachLineEv,b4,vi___ZN7WebCore9InlineBox14dirtyLineBoxesEv__wrapper,b4,__ZN7WebCore9InlineBox15clearTruncationEv,b4,__ZN7WebCore16InlineElementBox11extractLineEv,b4,__ZN7WebCore9InlineBox14setConstructedEv,b4,__ZN7WebCore16InlineElementBoxD0Ev,b4,__ZN7WebCore16InlineElementBoxD1Ev,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_viff = [b5,b5,viff___ZN7WebCore9InlineBox14adjustPositionEff__wrapper,b5];
  var FUNCTION_TABLE_fiifffii = [b6,b6,fiifffii___ZN7WebCore9InlineBox16placeEllipsisBoxEbfffRfRb__wrapper,b6];
  var FUNCTION_TABLE_ii = [b7,b7,__ZNK7WebCore9InlineBox15isRootInlineBoxEv,b7,ii___ZN7WebCore9InlineBox14selectionStateEv__wrapper,b7,ii___ZNK7WebCore9InlineBox14caretMaxOffsetEv__wrapper,b7,__ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv,b7,__ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv,b7,__ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv,b7,ii___ZNK7WebCore9InlineBox14caretMinOffsetEv__wrapper,b7,__ZNK7WebCore16InlineElementBox18isInlineElementBoxEv,b7,__ZNK7WebCore9InlineBox11isLineBreakEv,b7,__ZNK7WebCore9InlineBox15isInlineFlowBoxEv,b7,__ZNK7WebCore9InlineBox15isInlineTextBoxEv,b7,__ZNK7WebCore9InlineBox6isLeafEv,b7,b7,b7,b7
  ,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8];
  var FUNCTION_TABLE_v = [b9,b9];
  var FUNCTION_TABLE_fi = [b10,b10,__ZNK7WebCore9InlineBox20virtualLogicalHeightEv,b10];
  var FUNCTION_TABLE_iii = [b11,b11,iii___ZNK7WebCore9InlineBox16baselinePositionENS_12FontBaselineE__wrapper,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiiiiii: dynCall_iiiiiiii, dynCall_vii: dynCall_vii, dynCall_iiiii: dynCall_iiiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_viff: dynCall_viff, dynCall_fiifffii: dynCall_fiifffii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiiiiii": invoke_iiiiiiii, "invoke_vii": invoke_vii, "invoke_iiiii": invoke_iiiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_viff": invoke_viff, "invoke_fiifffii": invoke_fiifffii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = asm["dynCall_iiiiiiii"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viff = Module["dynCall_viff"] = asm["dynCall_viff"];
var dynCall_fiifffii = Module["dynCall_fiifffii"] = asm["dynCall_fiifffii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore16InlineElementBox10deleteLineEv","__ZNK7WebCore9InlineBox15isRootInlineBoxEv","__ZN7WebCore16InlineElementBox10attachLineEv","_memset","__ZNK7WebCore9InlineBox18isSVGRootInlineBoxEv","__ZNK7WebCore9InlineBox18isSVGInlineFlowBoxEv","__ZNK7WebCore9InlineBox18isSVGInlineTextBoxEv","__ZN7WebCore9InlineBox15clearTruncationEv","__ZN7WebCore16InlineElementBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_10LayoutUnitESC_","_memcpy","__ZNK7WebCore16InlineElementBox18isInlineElementBoxEv","__ZNK7WebCore9InlineBox15isInlineFlowBoxEv","__ZNK7WebCore9InlineBox20virtualLogicalHeightEv","__ZN7WebCore16InlineElementBox11extractLineEv","__ZNK7WebCore9InlineBox11isLineBreakEv","__ZN7WebCore9InlineBox14setConstructedEv","__ZN7WebCore16InlineElementBox5paintERNS_9PaintInfoERKNS_11LayoutPointENS_10LayoutUnitES6_","__ZN7WebCore16InlineElementBoxD0Ev","__ZN7WebCore9InlineBox9markDirtyEb","__ZN7WebCore16InlineElementBoxD1Ev","__ZNK7WebCore9InlineBox19calculateBoundariesEv","__ZNK7WebCore9InlineBox15isInlineTextBoxEv","__ZNK7WebCore9InlineBox6isLeafEv"]

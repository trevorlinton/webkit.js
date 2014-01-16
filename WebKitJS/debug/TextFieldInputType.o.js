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
H_BASE = parentModule["_malloc"](768 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 768;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18TextFieldInputTypeD1Ev;
/* memory initializer */ allocate([45,119,101,98,107,105,116,45,105,110,112,117,116,45,112,108,97,99,101,104,111,108,100,101,114,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,13,10,0,0,0,0,0,0,45,119,101,98,107,105,116,45,116,101,120,116,102,105,101,108,100,45,100,101,99,111,114,97,116,105,111,110,45,99,111,110,116,97,105,110,101,114,0,0,10,0,0,0,0,0,0,0,68,111,119,110,0,0,0,0,85,112,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,248,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vidi(index,a1,a2,a3) {
  try {
    Module["dynCall_vidi"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_di(index,a1) {
  try {
    return Module["dynCall_di"](index,a1);
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
function invoke_vidii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_vidii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore9HTMLNames11dirnameAttrE=env.__ZN7WebCore9HTMLNames11dirnameAttrE|0;
  var __ZN7WebCore16HTMLInputElement13maximumLengthE=env.__ZN7WebCore16HTMLInputElement13maximumLengthE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18TextFieldInputTypeE=(H_BASE+120)|0;
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
  var invoke_vidi=env.invoke_vidi;
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_iii=env.invoke_iii;
  var invoke_vidii=env.invoke_vidii;
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
function __ZN7WebCore18TextFieldInputType19createShadowSubtreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i2 + 112 | 0;
 i18 = i2 + 120 | 0;
 i19 = i1 + 4 | 0;
 i20 = HEAP32[(HEAP32[(HEAP32[i19 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i21 = i1;
 i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 568 >> 2] & 255](i1) | 0;
 if (i22) {
  i23 = 1;
 } else {
  i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 564 >> 2] & 255](i1) | 0;
 }
 __ZN7WebCore27TextControlInnerTextElement6createERNS_8DocumentE(i4, i20);
 i21 = i4 | 0;
 i4 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 i24 = i1 + 20 | 0;
 i25 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = i4;
 do {
  if ((i25 | 0) != 0) {
   i4 = i25 + 8 | 0;
   i26 = i4 | 0;
   i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   HEAP32[i26 >> 2] = i27;
   if ((i27 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i25 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i21 = i25 + 8 | 0;
   i4 = i21 | 0;
   i27 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i27;
   if ((i27 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 i25 = __ZNK7WebCore7Element19userAgentShadowRootEv(HEAP32[i19 >> 2] | 0) | 0;
 if (!i23) {
  i23 = i5 | 0;
  i19 = HEAP32[i24 >> 2] | 0;
  HEAP32[i23 >> 2] = i19;
  if ((i19 | 0) != 0) {
   i21 = i19 + 8 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
  }
  i21 = i6 | 0;
  HEAP32[i21 >> 2] = 0;
  __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i25 | 0, i5, i21) | 0;
  i21 = HEAP32[i23 >> 2] | 0;
  if ((i21 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i23 = i21 + 8 | 0;
  i21 = i23 | 0;
  i5 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
  HEAP32[i21 >> 2] = i5;
  if ((i5 | 0) >= 1) {
   STACKTOP = i2;
   return;
  }
  if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
   STACKTOP = i2;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore25TextControlInnerContainer6createERNS_8DocumentE(i7, i20);
 i23 = i7 | 0;
 i7 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 i5 = i1 + 12 | 0;
 i21 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 do {
  if ((i21 | 0) != 0) {
   i7 = i21 + 8 | 0;
   i6 = i7 | 0;
   i19 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i21 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i23 = i21 + 8 | 0;
   i7 = i23 | 0;
   i19 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 i21 = HEAP32[i5 >> 2] | 0;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i3, H_BASE + 56 | 0, 38);
 i23 = i8 | 0;
 i19 = i3 | 0;
 i3 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i23 >> 2] = i3;
 __ZN7WebCore7Element9setPseudoERKN3WTF12AtomicStringE(i21, i8);
 i8 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i23 = i8 | 0;
   i21 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i23 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i8 = i9 | 0;
 i21 = HEAP32[i5 >> 2] | 0;
 HEAP32[i8 >> 2] = i21;
 if ((i21 | 0) != 0) {
  i23 = i21 + 8 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
 }
 i23 = i10 | 0;
 HEAP32[i23 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i25 | 0, i9, i23) | 0;
 i23 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i8 = i23 + 8 | 0;
   i9 = i8 | 0;
   i25 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i25;
   if ((i25 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore23TextControlInnerElement6createERNS_8DocumentE(i11, i20);
 i23 = i11 | 0;
 i11 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 i8 = i1 + 16 | 0;
 i25 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i11;
 do {
  if ((i25 | 0) != 0) {
   i11 = i25 + 8 | 0;
   i9 = i11 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i25 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i23 = i25 + 8 | 0;
   i11 = i23 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 i25 = HEAP32[i8 >> 2] | 0;
 i23 = i12 | 0;
 i10 = HEAP32[i24 >> 2] | 0;
 HEAP32[i23 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i24 = i10 + 8 | 0;
  HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
 }
 i24 = i13 | 0;
 HEAP32[i24 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i25, i12, i24) | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i23 = i24 + 8 | 0;
   i12 = i23 | 0;
   i25 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i25;
   if ((i25 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 i24 = HEAP32[i5 >> 2] | 0;
 i23 = i14 | 0;
 i25 = HEAP32[i8 >> 2] | 0;
 HEAP32[i23 >> 2] = i25;
 if ((i25 | 0) != 0) {
  i8 = i25 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = i15 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i24, i14, i8) | 0;
 i8 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i23 = i8 + 8 | 0;
   i14 = i23 | 0;
   i24 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 if (!i22) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore17SpinButtonElement6createERNS_8DocumentERNS0_15SpinButtonOwnerE(i16, i20, i1 + 8 | 0);
 i20 = i16 | 0;
 i16 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i22 = i1 + 28 | 0;
 i1 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = i16;
 do {
  if ((i1 | 0) != 0) {
   i16 = i1 + 8 | 0;
   i8 = i16 | 0;
   i23 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i20 = i1 + 8 | 0;
   i16 = i20 | 0;
   i23 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 i5 = i17 | 0;
 i20 = HEAP32[i22 >> 2] | 0;
 HEAP32[i5 >> 2] = i20;
 if ((i20 | 0) != 0) {
  i22 = i20 + 8 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
 }
 i22 = i18 | 0;
 HEAP32[i22 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i1, i17, i22) | 0;
 i22 = HEAP32[i5 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i22 + 8 | 0;
 i22 = i5 | 0;
 i17 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i17;
 if ((i17 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore18TextFieldInputType29handleBeforeTextInsertedEventEPNS_23BeforeTextInsertedEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i1 | 0;
 i15 = i1 + 4 | 0;
 __ZNK7WebCore26HTMLTextFormControlElement14innerTextValueEv(i7, HEAP32[i15 >> 2] | 0);
 i16 = __ZN7WebCore19numGraphemeClustersERKN3WTF6StringE(i7) | 0;
 i17 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i7 = i17 | 0;
   i18 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i7 >> 2] = i18;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i15 >> 2] | 0;
 do {
  if ((HEAP32[i17 + 12 >> 2] & 1024 | 0) == 0) {
   i19 = 0;
  } else {
   if (!(__ZNK7WebCore7Element26isUserActionElementFocusedEv(i17 | 0) | 0)) {
    i19 = 0;
    break;
   }
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i9, (HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
   i18 = i9 | 0;
   __ZN7WebCore9plainTextEPKNS_5RangeENS_20TextIteratorBehaviorEb(i8, HEAP32[i18 >> 2] | 0, 0, 0);
   i7 = __ZN7WebCore19numGraphemeClustersERKN3WTF6StringE(i8) | 0;
   i20 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i21 = i20 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i21 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i18 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i19 = i7;
    break;
   }
   i22 = i20 | 0;
   i21 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i20);
    __ZN3WTF8fastFreeEPv(i20);
    i19 = i7;
    break;
   } else {
    HEAP32[i22 >> 2] = i21;
    i19 = i7;
    break;
   }
  }
 } while (0);
 i8 = i16 - i19 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 255](i14) | 0) {
  i14 = HEAP32[i15 >> 2] | 0;
  i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 724 >> 2] & 255](i14) | 0;
 } else {
  i23 = HEAP32[__ZN7WebCore16HTMLInputElement13maximumLengthE >> 2] | 0;
 }
 i14 = i23 >>> 0 > i8 >>> 0 ? i23 - i8 | 0 : 0;
 i8 = i10 | 0;
 i23 = i2 + 52 | 0;
 i2 = HEAP32[i23 >> 2] | 0;
 HEAP32[i8 >> 2] = i2;
 L25 : do {
  if ((i2 | 0) == 0) {
   i24 = 0;
  } else {
   i15 = i2 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   i15 = HEAP32[i8 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i24 = 0;
    break;
   }
   i1 = HEAP32[i15 + 4 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i24 = 0;
    break;
   }
   i19 = i15 + 4 | 0;
   i16 = i15 + 16 | 0;
   i9 = i15 + 8 | 0;
   i15 = i9;
   i17 = i9 | 0;
   i9 = i1;
   while (1) {
    i1 = i9 - 1 | 0;
    if ((HEAP32[i19 >> 2] | 0) >>> 0 <= i1 >>> 0) {
     i24 = i9;
     break L25;
    }
    if ((HEAP32[i16 >> 2] & 32 | 0) == 0) {
     i25 = HEAP16[(HEAP32[i15 >> 2] | 0) + (i1 << 1) >> 1] | 0;
    } else {
     i25 = HEAPU8[(HEAP32[i17 >> 2] | 0) + i1 | 0] | 0;
    }
    if (!((i25 << 16 >> 16 | 0) == 13 | (i25 << 16 >> 16 | 0) == 10)) {
     i24 = i9;
     break L25;
    }
    if ((i1 | 0) == 0) {
     i24 = 0;
     break;
    } else {
     i9 = i1;
    }
   }
  }
 } while (0);
 __ZN3WTF6String8truncateEj(i10, i24);
 __ZN3WTF6StringC1EPKc(i11, H_BASE + 48 | 0);
 __ZN3WTF6StringC1EPKc(i12, H_BASE + 40 | 0);
 i24 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i24 | 0) == 0) {
   i26 = i12 | 0;
  } else {
   i25 = i12 | 0;
   __ZN3WTF10StringImpl7replaceEPS0_S1_(i4, i24, HEAP32[i11 >> 2] | 0, HEAP32[i25 >> 2] | 0);
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
   if ((i2 | 0) == 0) {
    i26 = i25;
    break;
   }
   i9 = i2 | 0;
   i17 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    i26 = i25;
    break;
   } else {
    HEAP32[i9 >> 2] = i17;
    i26 = i25;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i26 = i4 | 0;
   i24 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i26 >> 2] = i24;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i11 = i4 | 0;
   i24 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i11 >> 2] = i24;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   __ZN3WTF10StringImpl7replaceEtt(i5, i4, 13, 32);
   i24 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
   if ((i24 | 0) == 0) {
    break;
   }
   i11 = i24 | 0;
   i26 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i11 >> 2] = i26;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   __ZN3WTF10StringImpl7replaceEtt(i6, i5, 10, 32);
   i4 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
   if ((i4 | 0) == 0) {
    break;
   }
   i26 = i4 | 0;
   i11 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i26 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i6 = __ZN7WebCore31numCharactersInGraphemeClustersERKN3WTF6StringEj(i10, i14) | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 i5 = i14 + 4 | 0;
 i11 = i14 + 16 | 0;
 i26 = i14 + 8 | 0;
 i4 = i26;
 i24 = i26 | 0;
 L72 : do {
  if ((i14 | 0) == 0) {
   i27 = 0;
  } else {
   i26 = 0;
   while (1) {
    if (i26 >>> 0 >= i6 >>> 0) {
     i27 = i6;
     break L72;
    }
    do {
     if ((HEAP32[i5 >> 2] | 0) >>> 0 > i26 >>> 0) {
      if ((HEAP32[i11 >> 2] & 32 | 0) == 0) {
       i28 = HEAP16[(HEAP32[i4 >> 2] | 0) + (i26 << 1) >> 1] | 0;
       break;
      } else {
       i28 = HEAPU8[(HEAP32[i24 >> 2] | 0) + i26 | 0] | 0;
       break;
      }
     } else {
      i28 = 0;
     }
    } while (0);
    if ((i28 & 65535) >>> 0 > 31 >>> 0 | i28 << 16 >> 16 == 9) {
     i26 = i26 + 1 | 0;
    } else {
     i27 = i26;
     break;
    }
   }
  }
 } while (0);
 __ZNK3WTF6String9substringEjj(i13, i10, 0, i27);
 i27 = i13 | 0;
 i13 = HEAP32[i27 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i10 = i13 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = i13;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i23 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i13 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i27 = i10 | 0;
   i23 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i27 >> 2] = i23;
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
 i23 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i23 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i23;
  STACKTOP = i3;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vidi + 2;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_di + 4;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vidii + 2;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vi + 6;
}
function __ZN7WebCore18TextFieldInputType21updatePlaceholderTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 488 >> 2] & 255](i1 | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 i11 = i1 + 4 | 0;
 __ZNK7WebCore26HTMLTextFormControlElement19strippedPlaceholderEv(i4, HEAP32[i11 >> 2] | 0);
 i12 = i4 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i14 = i1 + 24 | 0;
   i15 = 5;
  } else {
   i16 = i1 + 24 | 0;
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    i14 = i16;
    i15 = 5;
    break;
   }
   i17 = i16 | 0;
   do {
    if ((HEAP32[i17 >> 2] | 0) == 0) {
     __ZN7WebCore14HTMLDivElement6createERNS_8DocumentE(i6, HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
     i16 = i6 | 0;
     i18 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     i19 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i18;
     do {
      if ((i19 | 0) != 0) {
       i18 = i19 + 8 | 0;
       i20 = i18 | 0;
       i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       HEAP32[i20 >> 2] = i21;
       if ((i21 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     i19 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i18 = i19 + 8 | 0;
       i21 = i18 | 0;
       i20 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
       HEAP32[i21 >> 2] = i20;
       if ((i20 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     i19 = HEAP32[i17 >> 2] | 0;
     __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i3, H_BASE + 8 | 0, 25);
     i16 = i7 | 0;
     i18 = i3 | 0;
     i20 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = 0;
     HEAP32[i16 >> 2] = i20;
     __ZN7WebCore7Element9setPseudoERKN3WTF12AtomicStringE(i19, i7);
     i19 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i19 | 0) != 0) {
       i16 = i19 | 0;
       i20 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
       if ((i20 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i19);
        break;
       } else {
        HEAP32[i16 >> 2] = i20;
        break;
       }
      }
     } while (0);
     i19 = __ZNK7WebCore7Element19userAgentShadowRootEv(HEAP32[i11 >> 2] | 0) | 0;
     i20 = i8 | 0;
     i16 = HEAP32[i17 >> 2] | 0;
     HEAP32[i20 >> 2] = i16;
     if ((i16 | 0) != 0) {
      i18 = i16 + 8 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     }
     i18 = HEAP32[i1 + 12 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 356 >> 2] & 255](i1) | 0;
     } else {
      i22 = i18;
     }
     i18 = i9 | 0;
     HEAP32[i18 >> 2] = 0;
     __ZN7WebCore13ContainerNode12insertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_Ri(i19, i8, i22 | 0, i18) | 0;
     i18 = HEAP32[i20 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     i20 = i18 + 8 | 0;
     i18 = i20 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
    }
   } while (0);
   i20 = HEAP32[i17 >> 2] | 0;
   i19 = i10 | 0;
   HEAP32[i19 >> 2] = 0;
   __ZN7WebCore11HTMLElement12setInnerTextERKN3WTF6StringERi(i20, i4, i19);
  }
 } while (0);
 do {
  if ((i15 | 0) == 5) {
   i4 = i14 | 0;
   i10 = HEAP32[i4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i22 = HEAP32[i10 + 16 >> 2] | 0;
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = 0;
   __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i22, i10 | 0, i8) | 0;
   i8 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i4 = i8 + 8 | 0;
   i8 = i4 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i12 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i12 = i5 | 0;
 i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i12 >> 2] = i14;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore18TextFieldInputType8setValueERKN3WTF6StringEbNS_22TextFieldEventBehaviorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 | 0;
 i8 = HEAP32[i1 + 4 >> 2] | 0;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 __ZN7WebCore9InputType8setValueERKN3WTF6StringEbNS_22TextFieldEventBehaviorE(i7, i2, i3, 0);
 if (i3) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 63](i1);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 244 >> 2] & 63](i6, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i10 = 0;
  } else {
   i6 = HEAP32[i7 + 4 >> 2] | 0;
   i1 = i7 | 0;
   i9 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    i10 = i6;
    break;
   } else {
    HEAP32[i1 >> 2] = i9;
    i10 = i6;
    break;
   }
  }
 } while (0);
 i7 = i8 | 0;
 i6 = i8 + 12 | 0;
 do {
  if ((HEAP32[i6 >> 2] & 1024 | 0) == 0) {
   i11 = 10;
  } else {
   if (!(__ZNK7WebCore7Element26isUserActionElementFocusedEv(i7) | 0)) {
    i11 = 10;
    break;
   }
   __ZN7WebCore26HTMLTextFormControlElement17setSelectionRangeEiiNS_27TextFieldSelectionDirectionE(i8 | 0, i10, i10, 0);
  }
 } while (0);
 if ((i11 | 0) == 10) {
  HEAP32[i8 + 96 >> 2] = i10;
  HEAP32[i8 + 100 >> 2] = i10;
  HEAP32[i8 + 104 >> 2] = 0;
 }
 do {
  if (i3) {
   L18 : do {
    if ((i4 | 0) == 1) {
     do {
      if ((HEAP32[i6 >> 2] & 1024 | 0) != 0) {
       if (!(__ZNK7WebCore7Element26isUserActionElementFocusedEv(i7) | 0)) {
        break;
       }
       __ZN7WebCore22HTMLFormControlElement29dispatchFormControlInputEventEv(i8 | 0);
       break L18;
      }
     } while (0);
     __ZN7WebCore26HTMLTextFormControlElement30dispatchFormControlChangeEventEv(i8 | 0);
    } else if ((i4 | 0) == 2) {
     __ZN7WebCore22HTMLFormControlElement29dispatchFormControlInputEventEv(i8 | 0);
     __ZN7WebCore26HTMLTextFormControlElement30dispatchFormControlChangeEventEv(i8 | 0);
    }
   } while (0);
   if ((HEAP32[i6 >> 2] & 1024 | 0) != 0) {
    if (!((i4 | 0) == 0 | (__ZNK7WebCore7Element26isUserActionElementFocusedEv(i7) | 0) ^ 1)) {
     break;
    }
   }
   i10 = HEAP32[i2 >> 2] | 0;
   if ((i10 | 0) != 0) {
    i11 = i10 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   }
   i11 = i8 + 88 | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i9 | 0) == 0) {
    break;
   }
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
 i2 = i8 + 8 | 0;
 i8 = i2 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore18TextFieldInputType12forwardEventEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   __ZN7WebCore17SpinButtonElement12forwardEventEPNS_5EventE(i5, i2);
   if ((HEAP8[i2 + 21 | 0] & 1) == 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + 32 | 0;
 if ((HEAP32[i6 + 12 >> 2] & 2048 | 0) == 0) {
  i8 = i7 | 0;
 } else {
  i8 = HEAP32[i7 >> 2] | 0;
 }
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i2;
 do {
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] & 255](i2) | 0)) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] & 255](i2) | 0) {
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 255](i2) | 0) == 23) {
    break;
   }
   i7 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   i6 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i6 | 0) == (HEAP32[i7 + 32 >> 2] | 0)) {
    break;
   }
   if ((i6 | 0) == (HEAP32[i7 + 152 >> 2] | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i8 = HEAP32[i5 >> 2] | 0;
 i7 = i8 + 32 | 0;
 if ((HEAP32[i8 + 12 >> 2] & 2048 | 0) == 0) {
  i9 = i7 | 0;
 } else {
  i9 = HEAP32[i7 >> 2] | 0;
 }
 i7 = HEAP32[i9 >> 2] | 0;
 i9 = i7;
 i8 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i6 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i6 | 0) == (HEAP32[i8 + 32 >> 2] | 0)) {
   i10 = __ZNK7WebCore27TextControlInnerTextElement8rendererEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 356 >> 2] & 255](i1) | 0) | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = HEAP32[i10 + 40 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     if ((HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
      i12 = __ZNK7WebCore11RenderLayer11scrollWidthEv(i11) | 0;
     } else {
      i12 = 0;
     }
     HEAP32[i4 >> 2] = i12;
     HEAP32[i4 + 4 >> 2] = 0;
     __ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE(i11, i4, 1);
    }
   } while (0);
   __ZN7WebCore27RenderTextControlSingleLine27capsLockStateMayHaveChangedEv(i9);
  } else {
   if ((i6 | 0) != (HEAP32[i8 + 152 >> 2] | 0)) {
    break;
   }
   __ZN7WebCore27RenderTextControlSingleLine27capsLockStateMayHaveChangedEv(i9);
  }
 } while (0);
 __ZN7WebCore26HTMLTextFormControlElement12forwardEventEPNS_5EventE(HEAP32[i5 >> 2] | 0, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18TextFieldInputType20destroyShadowSubtreeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore9InputType20destroyShadowSubtreeEv(i1 | 0);
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 24 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
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
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 28 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP32[i3 >> 2] = 0;
  } else {
   HEAP32[i2 + 56 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i4 = i5 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 12 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
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
function __ZN7WebCore18TextFieldInputTypeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 8 >> 2] = H_BASE + 736;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   HEAP32[i3 + 56 >> 2] = 0;
   i4 = HEAP32[i2 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 8 | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i6 = i3 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1 | 0;
  __ZN7WebCore9InputTypeD2Ev(i7);
  return;
 }
 i3 = i2 + 8 | 0;
 i2 = i3 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  i7 = i1 | 0;
  __ZN7WebCore9InputTypeD2Ev(i7);
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i7 = i1 | 0;
  __ZN7WebCore9InputTypeD2Ev(i7);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i7 = i1 | 0;
 __ZN7WebCore9InputTypeD2Ev(i7);
 return;
}
function __ZN7WebCore18TextFieldInputTypeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 8 >> 2] = H_BASE + 736;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   HEAP32[i3 + 56 >> 2] = 0;
   i4 = HEAP32[i2 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 8 | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i6 = i3 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1 | 0;
  __ZN7WebCore9InputTypeD2Ev(i7);
  return;
 }
 i3 = i2 + 8 | 0;
 i2 = i3 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  i7 = i1 | 0;
  __ZN7WebCore9InputTypeD2Ev(i7);
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i7 = i1 | 0;
  __ZN7WebCore9InputTypeD2Ev(i7);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i7 = i1 | 0;
 __ZN7WebCore9InputTypeD2Ev(i7);
 return;
}
function __ZNK7WebCore18TextFieldInputType14appendFormDataERNS_12FormDataListEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore9InputType14appendFormDataERNS_12FormDataListEb(i1 | 0, i2, i3) | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = HEAP32[i3 + 48 >> 2] | 0;
 L1 : do {
  if ((i1 | 0) == 0) {
   i6 = __ZN3WTF8nullAtomE;
  } else {
   i7 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i7 & 1 | 0) == 0) {
    i8 = i7 >>> 1 & 134217727;
    i9 = i1 + 20 | 0;
   } else {
    i7 = i1 + 24 | 0;
    i8 = HEAP32[i7 + 8 >> 2] | 0;
    i9 = HEAP32[i7 >> 2] | 0;
   }
   if ((i8 | 0) == 0) {
    i6 = __ZN3WTF8nullAtomE;
    break;
   }
   i7 = HEAP32[__ZN7WebCore9HTMLNames11dirnameAttrE >> 2] | 0;
   i10 = i7 + 12 | 0;
   i11 = i7 + 16 | 0;
   i12 = 0;
   while (1) {
    i13 = i9 + (i12 << 3) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) == (i7 | 0)) {
     break;
    }
    if ((HEAP32[i14 + 12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
     if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
      break;
     }
    }
    i14 = i12 + 1 | 0;
    if (i14 >>> 0 < i8 >>> 0) {
     i12 = i14;
    } else {
     i6 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i6 = (i13 | 0) == 0 ? __ZN3WTF8nullAtomE : i9 + (i12 << 3) + 4 | 0;
  }
 } while (0);
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return 1;
 }
 __ZNK7WebCore26HTMLTextFormControlElement20directionForFormDataEv(i5, i3 | 0);
 __ZN7WebCore12FormDataList12appendStringERKN3WTF6StringE(i2, i6 | 0);
 __ZN7WebCore12FormDataList12appendStringERKN3WTF6StringE(i2, i5);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return 1;
 }
 i5 = i2 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return 1;
 } else {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i4;
  return 1;
 }
 return 0;
}
function __ZN7WebCore18TextFieldInputType17subtreeHasChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP8[i7 + 84 | 0] | 0;
 __ZN7WebCore22HTMLFormControlElement41setChangedSinceLastFormControlChangeEventEb(i7 | 0, 1);
 i7 = HEAP32[i6 >> 2] | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 i10 = HEAP32[i9 + 248 >> 2] | 0;
 i11 = HEAP32[i9 + 572 >> 2] | 0;
 __ZNK7WebCore26HTMLTextFormControlElement14innerTextValueEv(i5, i7 | 0);
 FUNCTION_TABLE_viii[i11 & 31](i4, i1, i5);
 FUNCTION_TABLE_viii[i10 & 31](i3, i1, i4);
 __ZN7WebCore16HTMLInputElement20setValueFromRendererERKN3WTF6StringE(i7, i3);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i10 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN7WebCore26HTMLTextFormControlElement27updatePlaceholderVisibilityEb(HEAP32[i6 >> 2] | 0, 0);
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(HEAP32[i6 >> 2] | 0, 32768);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 576 >> 2] & 63](i1, (i8 & 255) >>> 3 & 1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore18TextFieldInputType13sanitizeValueERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 __ZNK3WTF6String16removeCharactersEPFbtE(i4, i3, F_BASE_ii + 38 | 0);
 i3 = __ZN7WebCore31numCharactersInGraphemeClustersERKN3WTF6StringEj(i4, HEAP32[__ZN7WebCore16HTMLInputElement13maximumLengthE >> 2] | 0) | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + 4 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 8 | 0;
 i10 = i9;
 i11 = i9 | 0;
 L1 : do {
  if ((i6 | 0) == 0) {
   i12 = 0;
  } else {
   i9 = 0;
   while (1) {
    if (i9 >>> 0 >= i3 >>> 0) {
     i12 = i3;
     break L1;
    }
    do {
     if ((HEAP32[i7 >> 2] | 0) >>> 0 > i9 >>> 0) {
      if ((HEAP32[i8 >> 2] & 32 | 0) == 0) {
       i13 = HEAP16[(HEAP32[i10 >> 2] | 0) + (i9 << 1) >> 1] | 0;
       break;
      } else {
       i13 = HEAPU8[(HEAP32[i11 >> 2] | 0) + i9 | 0] | 0;
       break;
      }
     } else {
      i13 = 0;
     }
    } while (0);
    if ((i13 & 65535) >>> 0 > 31 >>> 0 | i13 << 16 >> 16 == 9) {
     i9 = i9 + 1 | 0;
    } else {
     i12 = i9;
     break;
    }
   }
  }
 } while (0);
 __ZNK3WTF6String9substringEjj(i1, i4, 0, i12);
 i12 = HEAP32[i5 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i12 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i12);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore18TextFieldInputType20updateInnerTextValueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 i5 = (HEAP32[(__ZNK7WebCore16HTMLInputElement14suggestedValueEv(HEAP32[i4 >> 2] | 0) | 0) >> 2] | 0) == 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if (!i5) {
  __ZN7WebCore26HTMLTextFormControlElement17setInnerTextValueERKN3WTF6StringE(i6 | 0, __ZNK7WebCore16HTMLInputElement14suggestedValueEv(i6) | 0);
  __ZN7WebCore26HTMLTextFormControlElement27updatePlaceholderVisibilityEb(HEAP32[i4 >> 2] | 0, 0);
  STACKTOP = i2;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 612 >> 2] & 255](i6 | 0) | 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 244 >> 2] & 63](i3, i1 | 0);
 __ZN7WebCore26HTMLTextFormControlElement17setInnerTextValueERKN3WTF6StringE(i6, i3);
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i3 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN7WebCore26HTMLTextFormControlElement27updatePlaceholderVisibilityEb(HEAP32[i4 >> 2] | 0, 0);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore18TextFieldInputType20shouldHaveSpinButtonEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((__ZNK7WebCore8Document4pageEv(i1) | 0) == 0) {
  __ZN7WebCore11RenderTheme12themeForPageEPNS_4PageE(i3, 0);
  i5 = i3 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i7 = i6;
 } else {
  i6 = HEAP32[(__ZNK7WebCore8Document4pageEv(i1) | 0) + 68 >> 2] | 0;
  i1 = i3 | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) == 0) {
   i8 = 0;
  } else {
   i3 = i6 + 4 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   i8 = HEAP32[i1 >> 2] | 0;
  }
  HEAP32[i1 >> 2] = 0;
  i7 = i8;
 }
 i8 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 156 >> 2] & 31](i7, HEAP32[i4 >> 2] | 0) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return i8 | 0;
 }
 i4 = i7 + 4 | 0;
 i7 = i4 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i2;
  return i8 | 0;
 }
 i1 = i4 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return i8 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore18TextFieldInputType22shouldSubmitImplicitlyEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] | 0) == (HEAP32[i3 + 344 >> 2] | 0)) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 255](i2) | 0) != 18) {
    break;
   }
   i4 = HEAP32[i2 + 64 >> 2] | 0;
   i5 = (i4 | 0) == 0;
   if (!i5) {
    i6 = i4 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i4, H_BASE + 96 | 0) | 0) {
    i7 = 1;
   } else {
    i7 = __ZN7WebCore9InputType22shouldSubmitImplicitlyEPNS_5EventE(i1 | 0, i2) | 0;
   }
   if (i5) {
    i8 = i7;
    return i8 | 0;
   }
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    i8 = i7;
    return i8 | 0;
   } else {
    HEAP32[i5 >> 2] = i6;
    i8 = i7;
    return i8 | 0;
   }
  }
 } while (0);
 i8 = __ZN7WebCore9InputType22shouldSubmitImplicitlyEPNS_5EventE(i1 | 0, i2) | 0;
 return i8 | 0;
}
function __ZN7WebCore18TextFieldInputType21didSetValueByUserEditENS0_16ValueChangeStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 12 >> 2] & 1024 | 0) == 0) {
  return;
 }
 if (!(__ZNK7WebCore7Element26isUserActionElementFocusedEv(i1 | 0) | 0)) {
  return;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i4 + 464 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore6Editor24textFieldDidBeginEditingEPNS_7ElementE(HEAP32[i5 >> 2] | 0, i1 | 0);
  i6 = HEAP32[i3 >> 2] | 0;
 } else {
  i6 = i1;
 }
 __ZN7WebCore6Editor24textDidChangeInTextFieldEPNS_7ElementE(HEAP32[i5 >> 2] | 0, i6 | 0);
 return;
}
function __ZN7WebCore18TextFieldInputType31handleKeydownEventForSpinButtonEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 496 >> 2] & 255](i3 | 0) | 0) {
  return;
 }
 if ((HEAP8[i3 + 72 | 0] & 2) != 0) {
  return;
 }
 i3 = i2 + 68 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 112 | 0) | 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 596 >> 2] & 63](i1);
  } else {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 104 | 0) | 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 592 >> 2] & 63](i1);
    break;
   } else {
    return;
   }
  }
 } while (0);
 HEAP8[i2 + 21 | 0] = 1;
 return;
}
function __ZN7WebCore18TextFieldInputType18handleKeydownEventEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 12 >> 2] & 1024 | 0) == 0) {
  return;
 }
 if (!(__ZNK7WebCore7Element26isUserActionElementFocusedEv(i1 | 0) | 0)) {
  return;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if (!(__ZN7WebCore6Editor27doTextFieldCommandFromEventEPNS_7ElementEPNS_13KeyboardEventE(HEAP32[i3 + 464 >> 2] | 0, i1 | 0, i2) | 0)) {
  return;
 }
 HEAP8[i2 + 21 | 0] = 1;
 return;
}
function __ZN7WebCore18TextFieldInputType19createInputRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj(124) | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore27RenderTextControlSingleLineC1ERNS_16HTMLInputElementEN3WTF7PassRefINS_11RenderStyleEEE(i2, i6, i5);
 HEAP32[i1 >> 2] = i2;
 STACKTOP = i4;
 return;
}
function __ZThn8_N7WebCore18TextFieldInputType29focusAndSelectSpinButtonOwnerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 - 32 + 28 >> 2] | 0;
 i1 = i2 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 392 >> 2] & 31](i2 | 0, 1, 0);
 __ZN7WebCore26HTMLTextFormControlElement6selectEv(i2 | 0);
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
function __ZN7WebCore18TextFieldInputType29focusAndSelectSpinButtonOwnerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i2 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 392 >> 2] & 31](i2 | 0, 1, 0);
 __ZN7WebCore26HTMLTextFormControlElement6selectEv(i2 | 0);
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
function __ZThn8_N7WebCore18TextFieldInputType36shouldSpinButtonRespondToWheelEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 32 + 24 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 584 >> 2] & 255](i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((HEAP32[i1 + 12 >> 2] & 1024 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore7Element26isUserActionElementFocusedEv(i1 | 0) | 0;
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
function __ZN7WebCore18TextFieldInputType36shouldSpinButtonRespondToWheelEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 584 >> 2] & 255](i1) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] & 1024 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore7Element26isUserActionElementFocusedEv(i3 | 0) | 0;
 return i2 | 0;
}
function __ZNK7WebCore18TextFieldInputType12valueMissingERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(__ZNK7WebCore22HTMLFormControlElement10isRequiredEv(HEAP32[i1 + 4 >> 2] | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 4 >> 2] | 0) == 0;
 return i3 | 0;
}
function __ZThn8_N7WebCore18TextFieldInputType36shouldSpinButtonRespondToMouseEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 - 32 + 28 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 496 >> 2] & 255](i2 | 0) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i2 + 72 | 0] & 2) == 0;
 return i3 | 0;
}
function __ZN7WebCore18TextFieldInputType36shouldSpinButtonRespondToMouseEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 496 >> 2] & 255](i2 | 0) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i2 + 72 | 0] & 2) == 0;
 return i3 | 0;
}
function viiii___ZNK7WebCore9InputType17setValueAsDecimalERKNS_7DecimalENS_22TextFieldEventBehaviorERi__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9InputType17setValueAsDecimalERKNS_7DecimalENS_22TextFieldEventBehaviorERi(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore18TextFieldInputType23convertFromVisibleValueERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function iiii___ZNK7WebCore9InputType21parseToDateComponentsERKN3WTF6StringEPNS_14DateComponentsE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore9InputType21parseToDateComponentsERKN3WTF6StringEPNS_14DateComponentsE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function vidii___ZNK7WebCore9InputType16setValueAsDoubleEdNS_22TextFieldEventBehaviorERi__wrapper(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9InputType16setValueAsDoubleEdNS_22TextFieldEventBehaviorERi(i1 | 0, +d2, i3 | 0, i4 | 0);
}
function viii___ZN7WebCore9InputType16didDispatchClickEPNS_5EventERKNS_22InputElementClickStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9InputType16didDispatchClickEPNS_5EventERKNS_22InputElementClickStateE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZNK7WebCore9InputType13parseToNumberERKN3WTF6StringERKNS_7DecimalE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9InputType13parseToNumberERKN3WTF6StringERKNS_7DecimalE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZN7WebCore9InputType16handleFocusEventEPNS_4NodeENS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9InputType16handleFocusEventEPNS_4NodeENS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore18TextFieldInputTypeC2ERNS_16HTMLInputElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 8 >> 2] = H_BASE + 736;
 _memset(i1 + 12 | 0, 0, 20) | 0;
 return;
}
function __ZN7WebCore18TextFieldInputType24readonlyAttributeChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore17SpinButtonElement14releaseCaptureEv(i2);
 return;
}
function __ZN7WebCore18TextFieldInputType24disabledAttributeChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore17SpinButtonElement14releaseCaptureEv(i2);
 return;
}
function viii___ZNK7WebCore9InputType15createStepRangeENS_15AnyStepHandlingE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9InputType15createStepRangeENS_15AnyStepHandlingE(i1 | 0, i2 | 0, i3 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function iiii___ZNK7WebCore9InputType27sizeShouldIncludeDecorationEiRi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore9InputType27sizeShouldIncludeDecorationEiRi(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function vii___ZN7WebCore9InputType23restoreFormControlStateERKNS_16FormControlStateE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9InputType23restoreFormControlStateERKNS_16FormControlStateE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore18TextFieldInputType19isKeyboardFocusableEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore16HTMLInputElement26isTextFormControlFocusableEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
}
function vii___ZN7WebCore9InputType17willDispatchClickERNS_22InputElementClickStateE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9InputType17willDispatchClickERNS_22InputElementClickStateE(i1 | 0, i2 | 0);
}
function viii___ZNK7WebCore9InputType13localizeValueERKN3WTF6StringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9InputType13localizeValueERKN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore18TextFieldInputType15handleBlurEventEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType15handleBlurEventEv(i1 | 0);
 __ZN7WebCore16HTMLInputElement10endEditingEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZThn8_N7WebCore18TextFieldInputType18spinButtonStepDownEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 32 + 24 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 220 >> 2] & 63](i2, -1);
 return;
}
function iii___ZN7WebCore9InputType20getTypeSpecificValueERN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore9InputType20getTypeSpecificValueERN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore9InputType19receiveDroppedFilesERKNS_8DragDataE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore9InputType19receiveDroppedFilesERKNS_8DragDataE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore9InputType19handleKeypressEventEPNS_13KeyboardEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9InputType19handleKeypressEventEPNS_13KeyboardEventE(i1 | 0, i2 | 0);
}
function __ZThn8_N7WebCore18TextFieldInputType16spinButtonStepUpEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 32 + 24 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 220 >> 2] & 63](i2, 1);
 return;
}
function iii___ZNK7WebCore9InputType19getAllowedValueStepEPNS_7DecimalE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore9InputType19getAllowedValueStepEPNS_7DecimalE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore9InputType20handleMouseDownEventEPNS_10MouseEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9InputType20handleMouseDownEventEPNS_10MouseEventE(i1 | 0, i2 | 0);
}
function viii___ZNK7WebCore9InputType9serializeERKNS_7DecimalE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9InputType9serializeERKNS_7DecimalE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore9InputType15typeMismatchForERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore9InputType15typeMismatchForERKN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore9InputType15patternMismatchERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore9InputType15patternMismatchERKN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore9InputType16handleKeyupEventEPNS_13KeyboardEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9InputType16handleKeyupEventEPNS_13KeyboardEventE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore9InputType22handleDOMActivateEventEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9InputType22handleDOMActivateEventEPNS_5EventE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore9InputType16handleClickEventEPNS_10MouseEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9InputType16handleClickEventEPNS_10MouseEventE(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore9InputType40shouldSendChangeEventAfterCheckedChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InputType40shouldSendChangeEventAfterCheckedChangedEv(i1 | 0) | 0;
}
function iii___ZN7WebCore9InputType11canSetValueERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore9InputType11canSetValueERKN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function ii___ZNK7WebCore9InputType36shouldSaveAndRestoreFormControlStateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType36shouldSaveAndRestoreFormControlStateEv(i1 | 0) | 0;
}
function ii___ZN7WebCore9InputType37shouldRespectHeightAndWidthAttributesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InputType37shouldRespectHeightAndWidthAttributesEv(i1 | 0) | 0;
}
function vidi___ZNK7WebCore9InputType14setValueAsDateEdRi__wrapper(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 __ZNK7WebCore9InputType14setValueAsDateEdRi(i1 | 0, +d2, i3 | 0);
}
function __ZThn8_N7WebCore18TextFieldInputTypeD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 32 + 24 | 0;
 __ZN7WebCore18TextFieldInputTypeD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore18TextFieldInputType16isMouseFocusableEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore16HTMLInputElement26isTextFormControlFocusableEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
}
function ii___ZNK7WebCore9InputType31supportsIndeterminateAppearanceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType31supportsIndeterminateAppearanceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore9InputType32storesValueSeparateFromAttributeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InputType32storesValueSeparateFromAttributeEv(i1 | 0) | 0;
}
function ii___ZN7WebCore9InputType31shouldResetOnDocumentActivationEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InputType31shouldResetOnDocumentActivationEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZNK7WebCore9InputType21defaultValueForStepUpEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9InputType21defaultValueForStepUpEv(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore9InputType6stepUpEiRi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9InputType6stepUpEiRi(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore18TextFieldInputType18spinButtonStepDownEv(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 220 >> 2] & 63](i1 | 0, -1);
 return;
}
function ii___ZN7WebCore9InputType28shouldRespectSpeechAttributeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InputType28shouldRespectSpeechAttributeEv(i1 | 0) | 0;
}
function dynCall_vidii(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_vidii[i1 & 3](i2 | 0, +d3, i4 | 0, i5 | 0);
}
function ii___ZN7WebCore9InputType27shouldRespectAlignAttributeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InputType27shouldRespectAlignAttributeEv(i1 | 0) | 0;
}
function ii___ZN7WebCore9InputType27canBeSuccessfulSubmitButtonEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InputType27canBeSuccessfulSubmitButtonEv(i1 | 0) | 0;
}
function __ZN7WebCore18TextFieldInputType16spinButtonStepUpEv(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 220 >> 2] & 63](i1 | 0, 1);
 return;
}
function vii___ZNK7WebCore9InputType17validationMessageEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9InputType17validationMessageEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore9InputType18stepUpFromRendererEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9InputType18stepUpFromRendererEi(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9InputType16valueMissingTextEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9InputType16valueMissingTextEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9InputType16typeMismatchTextEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9InputType16typeMismatchTextEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore9InputType24canChangeFromAnotherTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType24canChangeFromAnotherTypeEv(i1 | 0) | 0;
}
function __ZN7WebCore18TextFieldInputType26shouldRespectListAttributeEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InputType23themeSupportsDataListUIEPS0_(i1 | 0) | 0;
}
function vii___ZNK7WebCore9InputType14defaultToolTipEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9InputType14defaultToolTipEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore9InputType15accessKeyActionEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9InputType15accessKeyActionEb(i1 | 0, i2 | 0);
}
function __ZN7WebCore18TextFieldInputType16attributeChangedEv(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 63](i1);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function vii___ZNK7WebCore9InputType13fallbackValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9InputType13fallbackValueEv(i1 | 0, i2 | 0);
}
function v___ZN7WebCore9InputType8setFilesEN3WTF10PassRefPtrINS_8FileListEEE__wrapper() {
 __ZN7WebCore9InputType8setFilesEN3WTF10PassRefPtrINS_8FileListEEE();
}
function vi___ZN7WebCore9InputType27updateClearButtonVisibilityEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType27updateClearButtonVisibilityEv(i1 | 0);
}
function vii___ZNK7WebCore9InputType12visibleValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9InputType12visibleValueEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9InputType12defaultValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9InputType12defaultValueEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9InputType12badInputTextEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9InputType12badInputTextEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore9InputType20supportsSelectionAPIEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType20supportsSelectionAPIEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType20isFormDataAppendableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType20isFormDataAppendableEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType20isDateTimeLocalFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType20isDateTimeLocalFieldEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType19supportsPlaceholderEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType19supportsPlaceholderEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType19hasCustomFocusLogicEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType19hasCustomFocusLogicEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType18supportsValidationEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType18supportsValidationEv(i1 | 0) | 0;
}
function vi___ZN7WebCore9InputType24requiredAttributeChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType24requiredAttributeChangedEv(i1 | 0);
}
function vi___ZN7WebCore9InputType24multipleAttributeChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType24multipleAttributeChangedEv(i1 | 0);
}
function vi___ZN7WebCore9InputType24minOrMaxAttributeChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType24minOrMaxAttributeChangedEv(i1 | 0);
}
function ii___ZNK7WebCore9InputType17canSetStringValueEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType17canSetStringValueEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore9InputType16supportsRequiredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType16supportsRequiredEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType16isTelephoneFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType16isTelephoneFieldEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType15isPasswordFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType15isPasswordFieldEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType15isDateTimeFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType15isDateTimeFieldEv(i1 | 0) | 0;
}
function ii___ZN7WebCore9InputType16rendererIsNeededEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InputType16rendererIsNeededEv(i1 | 0) | 0;
}
function vi___ZN7WebCore9InputType21valueAttributeChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType21valueAttributeChangedEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZNK7WebCore9InputType14isSubmitButtonEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType14isSubmitButtonEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType14isRangeControlEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType14isRangeControlEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType14isColorControlEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType14isColorControlEv(i1 | 0) | 0;
}
function vi___ZN7WebCore9InputType20stepAttributeChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType20stepAttributeChangedEv(i1 | 0);
}
function fi___ZNK7WebCore9InputType15decorationWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore9InputType15decorationWidthEv(i1 | 0);
}
function __ZN7WebCore18TextFieldInputTypeD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18TextFieldInputTypeD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZNK7WebCore9InputType13supportLabelsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType13supportLabelsEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType13isSearchFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType13isSearchFieldEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType13isRadioButtonEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType13isRadioButtonEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType13isNumberFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType13isNumberFieldEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType13isImageButtonEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType13isImageButtonEv(i1 | 0) | 0;
}
function ii___ZN7WebCore9InputType14isEnumeratableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InputType14isEnumeratableEv(i1 | 0) | 0;
}
function dynCall_vidi(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 FUNCTION_TABLE_vidi[i1 & 3](i2 | 0, +d3, i4 | 0);
}
function vi___ZN7WebCore9InputType19srcAttributeChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType19srcAttributeChangedEv(i1 | 0);
}
function vi___ZN7WebCore9InputType19altAttributeChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType19altAttributeChangedEv(i1 | 0);
}
function ii___ZNK7WebCore9InputType12typeMismatchEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType12typeMismatchEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType12isTextButtonEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType12isTextButtonEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType12isMonthFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType12isMonthFieldEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType12isHiddenTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType12isHiddenTypeEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType12isFileUploadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType12isFileUploadEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType12isEmailFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType12isEmailFieldEv(i1 | 0) | 0;
}
function di___ZNK7WebCore9InputType13valueAsDoubleEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore9InputType13valueAsDoubleEv(i1 | 0);
}
function ii___ZNK7WebCore9InputType11isWeekFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType11isWeekFieldEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType11isTimeFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType11isTimeFieldEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType11isSteppableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType11isSteppableEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType11isDateFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType11isDateFieldEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType11hasBadInputEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType11hasBadInputEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType10isURLFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType10isURLFieldEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType10isTextTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType10isTextTypeEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9InputType10isCheckboxEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType10isCheckboxEv(i1 | 0) | 0;
}
function ii___ZN7WebCore9InputType11isCheckableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InputType11isCheckableEv(i1 | 0) | 0;
}
function di___ZNK7WebCore9InputType11valueAsDateEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore9InputType11valueAsDateEv(i1 | 0);
}
function __ZThn8_N7WebCore18TextFieldInputTypeD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18TextFieldInputTypeD2Ev(i1 - 32 + 24 | 0);
 return;
}
function vi___ZN7WebCore9InputType15addSearchResultEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType15addSearchResultEv(i1 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function ii___ZNK7WebCore9InputType6heightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType6heightEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore9InputType5widthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType5widthEv(i1 | 0) | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function v___ZNK7WebCore9InputType20saveFormControlStateEv__wrapper() {
 __ZNK7WebCore9InputType20saveFormControlStateEv();
}
function ii___ZNK7WebCore9InputType4iconEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9InputType4iconEv(i1 | 0) | 0;
}
function ii___ZN7WebCore9InputType5filesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9InputType5filesEv(i1 | 0) | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZNK7WebCore18TextFieldInputType22innerSpinButtonElementEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 28 >> 2] | 0;
}
function __ZN7WebCoreL16isASCIILineBreakEt(i1) {
 i1 = i1 | 0;
 return i1 << 16 >> 16 == 13 | i1 << 16 >> 16 == 10 | 0;
}
function __ZNK7WebCore18TextFieldInputType18placeholderElementEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 24 >> 2] | 0;
}
function v___ZNK7WebCore9InputType17formForSubmissionEv__wrapper() {
 __ZNK7WebCore9InputType17formForSubmissionEv();
}
function __ZNK7WebCore18TextFieldInputType17innerBlockElementEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 16 >> 2] | 0;
}
function __ZNK7WebCore18TextFieldInputType16innerTextElementEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 20 >> 2] | 0;
}
function __ZNK7WebCore18TextFieldInputType16containerElementEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 12 >> 2] | 0;
}
function vi___ZN7WebCore9InputType6detachEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType6detachEv(i1 | 0);
}
function vi___ZN7WebCore9InputType6attachEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType6attachEv(i1 | 0);
}
function vi___ZN7WebCore9InputType4blurEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9InputType4blurEv(i1 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 3](i2 | 0);
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 7](i2 | 0);
}
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
}
function __ZNK7WebCore18TextFieldInputType20shouldUseInputMethodEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore18TextFieldInputType20canSetSuggestedValueEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b10(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore18TextFieldInputType16supportsReadOnlyEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore18TextFieldInputType14needsContainerEv(i1) {
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
function __ZNK7WebCore18TextFieldInputType11isTextFieldEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore9InputType20resultsButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InputType19cancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InputType18sliderTrackElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9InputType18sliderThumbElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b1(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 abort(1);
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
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
function b8(i1) {
 i1 = i1 | 0;
 abort(8);
 return +0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return +0;
}
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,iiii___ZNK7WebCore9InputType27sizeShouldIncludeDecorationEiRi__wrapper,b0,iiii___ZNK7WebCore9InputType21parseToDateComponentsERKN3WTF6StringEPNS_14DateComponentsE__wrapper,b0,__ZNK7WebCore18TextFieldInputType14appendFormDataERNS_12FormDataListEb,b0];
  var FUNCTION_TABLE_vidi = [b1,b1,vidi___ZNK7WebCore9InputType14setValueAsDateEdRi__wrapper,b1];
  var FUNCTION_TABLE_di = [b2,b2,di___ZNK7WebCore9InputType11valueAsDateEv__wrapper,b2,di___ZNK7WebCore9InputType13valueAsDoubleEv__wrapper,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore18TextFieldInputType16attributeChangedEv,b3,vi___ZN7WebCore9InputType24minOrMaxAttributeChangedEv__wrapper,b3,__ZThn8_N7WebCore18TextFieldInputType16spinButtonStepUpEv,b3,__ZThn8_N7WebCore18TextFieldInputTypeD1Ev,b3,vi___ZN7WebCore9InputType4blurEv__wrapper,b3,__ZN7WebCore18TextFieldInputType21updatePlaceholderTextEv,b3,__ZN7WebCore18TextFieldInputType19createShadowSubtreeEv,b3,vi___ZN7WebCore9InputType20stepAttributeChangedEv__wrapper,b3,__ZN7WebCore18TextFieldInputType17subtreeHasChangedEv,b3,__ZThn8_N7WebCore18TextFieldInputType18spinButtonStepDownEv,b3,__ZThn8_N7WebCore18TextFieldInputTypeD0Ev,b3,vi___ZN7WebCore9InputType6attachEv__wrapper,b3,__ZN7WebCore18TextFieldInputType15handleBlurEventEv,b3,vi___ZN7WebCore9InputType6detachEv__wrapper
  ,b3,__ZN7WebCore18TextFieldInputTypeD2Ev,b3,vi___ZN7WebCore9InputType27updateClearButtonVisibilityEv__wrapper,b3,vi___ZN7WebCore9InputType24multipleAttributeChangedEv__wrapper,b3,__ZN7WebCore18TextFieldInputType24disabledAttributeChangedEv,b3,vi___ZN7WebCore9InputType24requiredAttributeChangedEv__wrapper,b3,__ZN7WebCore18TextFieldInputType24readonlyAttributeChangedEv,b3,vi___ZN7WebCore9InputType19srcAttributeChangedEv__wrapper,b3,__ZN7WebCore18TextFieldInputType20destroyShadowSubtreeEv,b3,__ZN7WebCore18TextFieldInputType29focusAndSelectSpinButtonOwnerEv,b3,__ZN7WebCore18TextFieldInputType20updateInnerTextValueEv,b3,__ZN7WebCore18TextFieldInputType18spinButtonStepDownEv,b3,vi___ZN7WebCore9InputType19altAttributeChangedEv__wrapper,b3,vi___ZN7WebCore9InputType15addSearchResultEv__wrapper,b3,__ZN7WebCore18TextFieldInputType16spinButtonStepUpEv,b3,__ZThn8_N7WebCore18TextFieldInputType29focusAndSelectSpinButtonOwnerEv
  ,b3,__ZN7WebCore18TextFieldInputTypeD0Ev,b3,vi___ZN7WebCore9InputType21valueAttributeChangedEv__wrapper,b3];
  var FUNCTION_TABLE_vii = [b4,b4,vii___ZNK7WebCore9InputType12defaultValueEv__wrapper,b4,vii___ZNK7WebCore9InputType21defaultValueForStepUpEv__wrapper,b4,__ZN7WebCore18TextFieldInputType29handleBeforeTextInsertedEventEPNS_23BeforeTextInsertedEventE,b4,vii___ZN7WebCore9InputType17willDispatchClickERNS_22InputElementClickStateE__wrapper,b4,vii___ZN7WebCore9InputType19handleKeypressEventEPNS_13KeyboardEventE__wrapper,b4,vii___ZN7WebCore9InputType22handleDOMActivateEventEPNS_5EventE__wrapper,b4,vii___ZN7WebCore9InputType16handleKeyupEventEPNS_13KeyboardEventE__wrapper,b4,vii___ZN7WebCore9InputType16handleClickEventEPNS_10MouseEventE__wrapper,b4,vii___ZNK7WebCore9InputType17validationMessageEv__wrapper,b4,vii___ZNK7WebCore9InputType12visibleValueEv__wrapper,b4,vii___ZNK7WebCore9InputType13fallbackValueEv__wrapper,b4,__ZN7WebCore18TextFieldInputType12forwardEventEPNS_5EventE,b4,vii___ZNK7WebCore9InputType12badInputTextEv__wrapper,b4,vii___ZN7WebCore9InputType15accessKeyActionEb__wrapper
  ,b4,vii___ZN7WebCore9InputType20handleMouseDownEventEPNS_10MouseEventE__wrapper,b4,vii___ZN7WebCore9InputType18stepUpFromRendererEi__wrapper,b4,vii___ZNK7WebCore9InputType14defaultToolTipEv__wrapper,b4,vii___ZNK7WebCore9InputType16typeMismatchTextEv__wrapper,b4,vii___ZNK7WebCore9InputType16valueMissingTextEv__wrapper,b4,vii___ZN7WebCore9InputType23restoreFormControlStateERKNS_16FormControlStateE__wrapper,b4,__ZN7WebCore18TextFieldInputType21didSetValueByUserEditENS0_16ValueChangeStateE,b4,__ZN7WebCore18TextFieldInputType18handleKeydownEventEPNS_13KeyboardEventE,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_ii = [b5,b5,ii___ZNK7WebCore9InputType11isTimeFieldEv__wrapper,b5,ii___ZNK7WebCore9InputType10isURLFieldEv__wrapper,b5,__ZN7WebCore18TextFieldInputType36shouldSpinButtonRespondToMouseEventsEv,b5,__ZNK7WebCore18TextFieldInputType16containerElementEv,b5,__ZNK7WebCore18TextFieldInputType22innerSpinButtonElementEv,b5,__ZNK7WebCore18TextFieldInputType18placeholderElementEv,b5,ii___ZNK7WebCore9InputType4iconEv__wrapper,b5,ii___ZNK7WebCore9InputType13isSearchFieldEv__wrapper,b5,ii___ZNK7WebCore9InputType13isImageButtonEv__wrapper,b5,ii___ZN7WebCore9InputType16rendererIsNeededEv__wrapper,b5,ii___ZNK7WebCore9InputType18supportsValidationEv__wrapper,b5,ii___ZNK7WebCore9InputType12isHiddenTypeEv__wrapper,b5,ii___ZNK7WebCore9InputType14isSubmitButtonEv__wrapper,b5,ii___ZNK7WebCore9InputType10isTextTypeEv__wrapper
  ,b5,__ZNK7WebCore18TextFieldInputType20shouldHaveSpinButtonEv,b5,__ZNK7WebCore9InputType18sliderTrackElementEv,b5,ii___ZNK7WebCore9InputType13supportLabelsEv__wrapper,b5,ii___ZNK7WebCore9InputType11isWeekFieldEv__wrapper,b5,__ZN7WebCoreL16isASCIILineBreakEt,b5,__ZNK7WebCore18TextFieldInputType17innerBlockElementEv,b5,ii___ZNK7WebCore9InputType12isTextButtonEv__wrapper,b5,ii___ZNK7WebCore9InputType12isFileUploadEv__wrapper,b5,ii___ZNK7WebCore9InputType16isTelephoneFieldEv__wrapper,b5,__ZNK7WebCore18TextFieldInputType20shouldUseInputMethodEv,b5,ii___ZNK7WebCore9InputType12typeMismatchEv__wrapper,b5,ii___ZN7WebCore9InputType5filesEv__wrapper,b5,ii___ZNK7WebCore9InputType24canChangeFromAnotherTypeEv__wrapper,b5,ii___ZNK7WebCore9InputType20supportsSelectionAPIEv__wrapper,b5,ii___ZN7WebCore9InputType32storesValueSeparateFromAttributeEv__wrapper
  ,b5,ii___ZNK7WebCore9InputType11isDateFieldEv__wrapper,b5,ii___ZNK7WebCore9InputType5widthEv__wrapper,b5,__ZThn8_N7WebCore18TextFieldInputType36shouldSpinButtonRespondToMouseEventsEv,b5,__ZThn8_N7WebCore18TextFieldInputType36shouldSpinButtonRespondToWheelEventsEv,b5,ii___ZN7WebCore9InputType14isEnumeratableEv__wrapper,b5,ii___ZN7WebCore9InputType37shouldRespectHeightAndWidthAttributesEv__wrapper,b5,__ZN7WebCore18TextFieldInputType36shouldSpinButtonRespondToWheelEventsEv,b5,ii___ZNK7WebCore9InputType6heightEv__wrapper,b5,ii___ZN7WebCore9InputType27shouldRespectAlignAttributeEv__wrapper,b5,__ZNK7WebCore9InputType19cancelButtonElementEv,b5,ii___ZNK7WebCore9InputType31supportsIndeterminateAppearanceEv__wrapper,b5,ii___ZN7WebCore9InputType28shouldRespectSpeechAttributeEv__wrapper,b5,__ZNK7WebCore9InputType18sliderThumbElementEv,b5,ii___ZNK7WebCore9InputType11isSteppableEv__wrapper,b5,ii___ZNK7WebCore9InputType15isDateTimeFieldEv__wrapper
  ,b5,ii___ZNK7WebCore9InputType12isMonthFieldEv__wrapper,b5,ii___ZNK7WebCore9InputType13isNumberFieldEv__wrapper,b5,ii___ZNK7WebCore9InputType14isColorControlEv__wrapper,b5,ii___ZNK7WebCore9InputType36shouldSaveAndRestoreFormControlStateEv__wrapper,b5,ii___ZNK7WebCore9InputType20isDateTimeLocalFieldEv__wrapper,b5,ii___ZNK7WebCore9InputType14isRangeControlEv__wrapper,b5,ii___ZN7WebCore9InputType27canBeSuccessfulSubmitButtonEv__wrapper,b5,ii___ZNK7WebCore9InputType10isCheckboxEv__wrapper,b5,__ZNK7WebCore9InputType20resultsButtonElementEv,b5,__ZNK7WebCore18TextFieldInputType16isMouseFocusableEv,b5,ii___ZN7WebCore9InputType40shouldSendChangeEventAfterCheckedChangedEv__wrapper,b5,ii___ZNK7WebCore9InputType19hasCustomFocusLogicEv__wrapper,b5,ii___ZNK7WebCore9InputType17canSetStringValueEv__wrapper,b5,ii___ZN7WebCore9InputType31shouldResetOnDocumentActivationEv__wrapper,b5,__ZN7WebCore18TextFieldInputType26shouldRespectListAttributeEv
  ,b5,__ZNK7WebCore18TextFieldInputType11isTextFieldEv,b5,ii___ZNK7WebCore9InputType15isPasswordFieldEv__wrapper,b5,__ZNK7WebCore18TextFieldInputType16innerTextElementEv,b5,ii___ZNK7WebCore9InputType16supportsRequiredEv__wrapper,b5,__ZN7WebCore18TextFieldInputType20canSetSuggestedValueEv,b5,ii___ZNK7WebCore9InputType12isEmailFieldEv__wrapper,b5,ii___ZNK7WebCore9InputType13isRadioButtonEv__wrapper,b5,ii___ZN7WebCore9InputType11isCheckableEv__wrapper,b5,ii___ZNK7WebCore9InputType19supportsPlaceholderEv__wrapper,b5,ii___ZNK7WebCore9InputType20isFormDataAppendableEv__wrapper,b5,__ZNK7WebCore18TextFieldInputType14needsContainerEv,b5,__ZNK7WebCore18TextFieldInputType16supportsReadOnlyEv,b5,ii___ZNK7WebCore9InputType11hasBadInputEv__wrapper,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZNK7WebCore18TextFieldInputType13sanitizeValueERKN3WTF6StringE,b6,viii___ZNK7WebCore9InputType13localizeValueERKN3WTF6StringE__wrapper,b6,__ZNK7WebCore18TextFieldInputType23convertFromVisibleValueERKN3WTF6StringE,b6,viii___ZNK7WebCore9InputType15createStepRangeENS_15AnyStepHandlingE__wrapper,b6,viii___ZN7WebCore9InputType16didDispatchClickEPNS_5EventERKNS_22InputElementClickStateE__wrapper,b6,viii___ZNK7WebCore9InputType9serializeERKNS_7DecimalE__wrapper,b6,__ZN7WebCore18TextFieldInputType19createInputRendererEN3WTF7PassRefINS_11RenderStyleEEE,b6,viii___ZN7WebCore9InputType16handleFocusEventEPNS_4NodeENS_14FocusDirectionE__wrapper,b6,viii___ZN7WebCore9InputType6stepUpEiRi__wrapper,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7,v___ZNK7WebCore9InputType20saveFormControlStateEv__wrapper,b7,v___ZNK7WebCore9InputType17formForSubmissionEv__wrapper,b7,v___ZN7WebCore9InputType8setFilesEN3WTF10PassRefPtrINS_8FileListEEE__wrapper,b7,v____cxa_pure_virtual__wrapper,b7,b7,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_fi = [b8,b8,fi___ZNK7WebCore9InputType15decorationWidthEv__wrapper,b8];
  var FUNCTION_TABLE_iii = [b9,b9,__ZN7WebCore18TextFieldInputType22shouldSubmitImplicitlyEPNS_5EventE,b9,iii___ZN7WebCore9InputType19receiveDroppedFilesERKNS_8DragDataE__wrapper,b9,iii___ZNK7WebCore9InputType19getAllowedValueStepEPNS_7DecimalE__wrapper,b9,iii___ZNK7WebCore9InputType15patternMismatchERKN3WTF6StringE__wrapper,b9,iii___ZNK7WebCore9InputType15typeMismatchForERKN3WTF6StringE__wrapper,b9,iii___ZN7WebCore9InputType20getTypeSpecificValueERN3WTF6StringE__wrapper,b9,__ZNK7WebCore18TextFieldInputType12valueMissingERKN3WTF6StringE,b9,iii___ZN7WebCore9InputType11canSetValueERKN3WTF6StringE__wrapper,b9,__ZNK7WebCore18TextFieldInputType19isKeyboardFocusableEPNS_13KeyboardEventE,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9
  ,b9,b9,b9];
  var FUNCTION_TABLE_vidii = [b10,b10,vidii___ZNK7WebCore9InputType16setValueAsDoubleEdNS_22TextFieldEventBehaviorERi__wrapper,b10];
  var FUNCTION_TABLE_viiii = [b11,b11,viiii___ZNK7WebCore9InputType17setValueAsDecimalERKNS_7DecimalENS_22TextFieldEventBehaviorERi__wrapper,b11,__ZN7WebCore18TextFieldInputType8setValueERKN3WTF6StringEbNS_22TextFieldEventBehaviorE,b11,viiii___ZNK7WebCore9InputType13parseToNumberERKN3WTF6StringERKNS_7DecimalE__wrapper,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_vidi: dynCall_vidi, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iii: dynCall_iii, dynCall_vidii: dynCall_vidii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vidi": invoke_vidi, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iii": invoke_iii, "invoke_vidii": invoke_vidii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames11dirnameAttrE": __ZN7WebCore9HTMLNames11dirnameAttrE, "__ZN7WebCore16HTMLInputElement13maximumLengthE": __ZN7WebCore16HTMLInputElement13maximumLengthE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_vidi = Module["dynCall_vidi"] = asm["dynCall_vidi"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vidii = Module["dynCall_vidii"] = asm["dynCall_vidii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore18TextFieldInputType16attributeChangedEv","__ZNK7WebCore18TextFieldInputType13sanitizeValueERKN3WTF6StringE","__ZThn8_N7WebCore18TextFieldInputType29focusAndSelectSpinButtonOwnerEv","__ZNK7WebCore9InputType18sliderThumbElementEv","_strlen","_memset","__ZN7WebCore18TextFieldInputType36shouldSpinButtonRespondToMouseEventsEv","__ZN7WebCore18TextFieldInputType12forwardEventEPNS_5EventE","__ZN7WebCore18TextFieldInputType18spinButtonStepDownEv","__ZNK7WebCore18TextFieldInputType16containerElementEv","__ZNK7WebCore18TextFieldInputType22innerSpinButtonElementEv","__ZNK7WebCore18TextFieldInputType16innerTextElementEv","__ZN7WebCore18TextFieldInputType31handleKeydownEventForSpinButtonEPNS_13KeyboardEventE","__ZNK7WebCore18TextFieldInputType18placeholderElementEv","__ZThn8_N7WebCore18TextFieldInputType16spinButtonStepUpEv","__ZNK7WebCore18TextFieldInputType16supportsReadOnlyEv","__ZThn8_N7WebCore18TextFieldInputType36shouldSpinButtonRespondToMouseEventsEv","__ZNK7WebCore18TextFieldInputType11isTextFieldEv","__ZThn8_N7WebCore18TextFieldInputType36shouldSpinButtonRespondToWheelEventsEv","__ZN7WebCore18TextFieldInputType8setValueERKN3WTF6StringEbNS_22TextFieldEventBehaviorE","__ZN7WebCore18TextFieldInputTypeC2ERNS_16HTMLInputElementE","__ZN7WebCore18TextFieldInputType24readonlyAttributeChangedEv","__ZThn8_N7WebCore18TextFieldInputTypeD1Ev","__ZNK7WebCore18TextFieldInputType14appendFormDataERNS_12FormDataListEb","__ZN7WebCore18TextFieldInputType29handleBeforeTextInsertedEventEPNS_23BeforeTextInsertedEventE","__ZNK7WebCore18TextFieldInputType12valueMissingERKN3WTF6StringE","__ZThn8_N7WebCore18TextFieldInputTypeD0Ev","__ZN7WebCore18TextFieldInputType21updatePlaceholderTextEv","__ZN7WebCore18TextFieldInputType19createShadowSubtreeEv","__ZN7WebCore18TextFieldInputType20updateInnerTextValueEv","__ZNK7WebCore18TextFieldInputType23convertFromVisibleValueERKN3WTF6StringE","__ZN7WebCore18TextFieldInputType20canSetSuggestedValueEv","__ZN7WebCore18TextFieldInputType20destroyShadowSubtreeEv","__ZNK7WebCore9InputType18sliderTrackElementEv","__ZN7WebCore18TextFieldInputType15handleBlurEventEv","__ZN7WebCore18TextFieldInputType29focusAndSelectSpinButtonOwnerEv","__ZNK7WebCore18TextFieldInputType19isKeyboardFocusableEPNS_13KeyboardEventE","__ZN7WebCore18TextFieldInputType36shouldSpinButtonRespondToWheelEventsEv","__ZN7WebCore18TextFieldInputTypeD0Ev","__ZN7WebCore18TextFieldInputTypeD2Ev","__ZN7WebCoreL16isASCIILineBreakEt","__ZNK7WebCore18TextFieldInputType20shouldHaveSpinButtonEv","__ZNK7WebCore18TextFieldInputType17innerBlockElementEv","__ZN7WebCore18TextFieldInputType19createInputRendererEN3WTF7PassRefINS_11RenderStyleEEE","__ZN7WebCore18TextFieldInputType17subtreeHasChangedEv","__ZThn8_N7WebCore18TextFieldInputType18spinButtonStepDownEv","__ZN7WebCore18TextFieldInputType21didSetValueByUserEditENS0_16ValueChangeStateE","_memcpy","__ZNK7WebCore9InputType19cancelButtonElementEv","__ZN7WebCore18TextFieldInputType24disabledAttributeChangedEv","__ZN7WebCore18TextFieldInputType18handleKeydownEventEPNS_13KeyboardEventE","__ZN7WebCore18TextFieldInputType22shouldSubmitImplicitlyEPNS_5EventE","__ZNK7WebCore18TextFieldInputType20shouldUseInputMethodEv","__ZN7WebCore18TextFieldInputType16spinButtonStepUpEv","__ZNK7WebCore18TextFieldInputType14needsContainerEv","__ZN7WebCore18TextFieldInputType26shouldRespectListAttributeEv","__ZNK7WebCore9InputType20resultsButtonElementEv","__ZNK7WebCore18TextFieldInputType16isMouseFocusableEv"]

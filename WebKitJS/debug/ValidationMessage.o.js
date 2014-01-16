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
H_BASE = parentModule["_malloc"](320 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 320;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17ValidationMessageD1Ev;
/* memory initializer */ allocate([45,119,101,98,107,105,116,45,118,97,108,105,100,97,116,105,111,110,45,98,117,98,98,108,101,45,98,111,100,121,0,0,45,119,101,98,107,105,116,45,118,97,108,105,100,97,116,105,111,110,45,98,117,98,98,108,101,45,104,101,97,100,105,110,103,0,0,0,0,0,0,0,45,119,101,98,107,105,116,45,118,97,108,105,100,97,116,105,111,110,45,98,117,98,98,108,101,45,116,101,120,116,45,98,108,111,99,107,0,0,0,0,45,119,101,98,107,105,116,45,118,97,108,105,100,97,116,105,111,110,45,98,117,98,98,108,101,45,105,99,111,110,0,0,45,119,101,98,107,105,116,45,118,97,108,105,100,97,116,105,111,110,45,98,117,98,98,108,101,45,109,101,115,115,97,103,101,0,0,0,0,0,0,0,45,119,101,98,107,105,116,45,118,97,108,105,100,97,116,105,111,110,45,98,117,98,98,108,101,45,97,114,114,111,119,0,45,119,101,98,107,105,116,45,118,97,108,105,100,97,116,105,111,110,45,98,117,98,98,108,101,45,97,114,114,111,119,45,99,108,105,112,112,101,114,0,45,119,101,98,107,105,116,45,118,97,108,105,100,97,116,105,111,110,45,98,117,98,98,108,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
  var __ZN7WebCore9HTMLNames9titleAttrE=env.__ZN7WebCore9HTMLNames9titleAttrE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore5TimerINS_17ValidationMessageEEE=(H_BASE+296)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
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
function __ZN7WebCore17ValidationMessage15buildBubbleTreeEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, d54 = +0, d55 = +0, i56 = 0, d57 = +0, d58 = +0, d59 = +0, d60 = +0, d61 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 352 | 0;
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
 i18 = i2 + 128 | 0;
 i19 = i2 + 136 | 0;
 i20 = i2 + 144 | 0;
 i21 = i2 + 152 | 0;
 i22 = i2 + 160 | 0;
 i23 = i2 + 168 | 0;
 i24 = i2 + 176 | 0;
 i25 = i2 + 184 | 0;
 i26 = i2 + 192 | 0;
 i27 = i2 + 200 | 0;
 i28 = i2 + 208 | 0;
 i29 = i2 + 216 | 0;
 i30 = i2 + 224 | 0;
 i31 = i2 + 232 | 0;
 i32 = i2 + 240 | 0;
 i33 = i2 + 248 | 0;
 i34 = i2 + 256 | 0;
 i35 = i2 + 264 | 0;
 i36 = i2 + 272 | 0;
 i37 = i2 + 280 | 0;
 i38 = i2 + 288 | 0;
 i39 = i2 + 296 | 0;
 i40 = i2 + 304 | 0;
 i41 = i2 + 312 | 0;
 i42 = i2 + 320 | 0;
 i43 = i2 + 328 | 0;
 i44 = i2 + 336 | 0;
 i45 = i2 + 344 | 0;
 i46 = i1 | 0;
 i47 = __ZN7WebCore7Element25ensureUserAgentShadowRootEv(HEAP32[i46 >> 2] | 0) | 0;
 i48 = HEAP32[(HEAP32[(HEAP32[i46 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore14HTMLDivElement6createERNS_8DocumentE(i13, i48);
 i49 = i13 | 0;
 i13 = HEAP32[i49 >> 2] | 0;
 HEAP32[i49 >> 2] = 0;
 i50 = i1 + 12 | 0;
 i51 = HEAP32[i50 >> 2] | 0;
 HEAP32[i50 >> 2] = i13;
 do {
  if ((i51 | 0) != 0) {
   i13 = i51 + 8 | 0;
   i52 = i13 | 0;
   i53 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
   HEAP32[i52 >> 2] = i53;
   if ((i53 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i51 = HEAP32[i49 >> 2] | 0;
 do {
  if ((i51 | 0) != 0) {
   i49 = i51 + 8 | 0;
   i13 = i49 | 0;
   i53 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i53;
   if ((i53 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
  }
 } while (0);
 i51 = HEAP32[i50 >> 2] | 0;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i12, H_BASE + 264 | 0, 25);
 i49 = i14 | 0;
 i53 = i12 | 0;
 i12 = HEAP32[i53 >> 2] | 0;
 HEAP32[i53 >> 2] = 0;
 HEAP32[i49 >> 2] = i12;
 __ZN7WebCore7Element9setPseudoERKN3WTF12AtomicStringE(i51, i14);
 i14 = HEAP32[i49 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i49 = i14 | 0;
   i51 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
   if ((i51 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i49 >> 2] = i51;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDENS_10CSSValueIDEb(HEAP32[i50 >> 2] | 0, 123, 315, 0) | 0;
 i14 = HEAP32[i50 >> 2] | 0;
 i51 = i15 | 0;
 HEAP32[i51 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i49 = i14 + 8 | 0;
  HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
 }
 i49 = i16 | 0;
 HEAP32[i49 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i47 | 0, i15, i49) | 0;
 i49 = HEAP32[i51 >> 2] | 0;
 do {
  if ((i49 | 0) != 0) {
   i51 = i49 + 8 | 0;
   i15 = i51 | 0;
   i47 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i47;
   if ((i47 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore8Document12updateLayoutEv(i48);
 i49 = HEAP32[i46 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i49 >> 2] | 0) + 156 >> 2] & 7](i17, i49 | 0);
 i49 = HEAP32[i50 >> 2] | 0;
 i46 = i17 + 8 | 0;
 do {
  if ((HEAP32[i46 >> 2] | 0) >= 1) {
   i51 = i17 + 12 | 0;
   if ((HEAP32[i51 >> 2] | 0) < 1) {
    break;
   }
   d54 = +(HEAP32[i17 >> 2] | 0);
   d55 = +(HEAP32[i17 + 4 >> 2] | 0);
   i47 = i49 + 32 | 0;
   if ((HEAP32[i49 + 12 >> 2] & 2048 | 0) == 0) {
    i56 = i47 | 0;
   } else {
    i56 = HEAP32[i47 >> 2] | 0;
   }
   i47 = HEAP32[i56 >> 2] | 0;
   do {
    if ((i47 | 0) == 0) {
     d57 = d54;
     d58 = d55;
    } else {
     i15 = __ZNK7WebCore12RenderObject15containingBlockEv(i47) | 0;
     if ((i15 | 0) == 0) {
      d57 = d54;
      d58 = d55;
      break;
     }
     HEAPF32[i4 >> 2] = +0;
     HEAPF32[i4 + 4 >> 2] = +0;
     __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i3, i15 | 0, i4, 0);
     d59 = +HEAPF32[i3 >> 2];
     i16 = i15 | 0;
     i14 = i15;
     d60 = d54 - (d59 + +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 744 >> 2] & 1](i16) | 0));
     d59 = +HEAPF32[i3 + 4 >> 2];
     d57 = d60;
     d58 = d55 - (d59 + +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 736 >> 2] & 1](i16) | 0));
    }
   } while (0);
   i47 = i49 | 0;
   __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDEdNS_17CSSPrimitiveValue9UnitTypesEb(i47, 153, d58 + +(HEAP32[i51 >> 2] | 0), 5, 0) | 0;
   i16 = HEAP32[i46 >> 2] | 0;
   if ((i16 | 0) < 64) {
    d55 = d57 + +((i16 | 0) / 2 & -1 | 0) + +-32;
    d61 = d55 < +0 ? +0 : d55;
   } else {
    d61 = d57;
   }
   __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDEdNS_17CSSPrimitiveValue9UnitTypesEb(i47, 84, d61, 5, 0) | 0;
  }
 } while (0);
 __ZN7WebCore14HTMLDivElement6createERNS_8DocumentE(i18, i48);
 i46 = i18 | 0;
 i18 = HEAP32[i46 >> 2] | 0;
 HEAP32[i46 >> 2] = 0;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i11, H_BASE + 224 | 0, 39);
 i46 = i19 | 0;
 i49 = i11 | 0;
 i11 = HEAP32[i49 >> 2] | 0;
 HEAP32[i49 >> 2] = 0;
 HEAP32[i46 >> 2] = i11;
 __ZN7WebCore7Element9setPseudoERKN3WTF12AtomicStringE(i18 | 0, i19);
 i19 = HEAP32[i46 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i46 = i19 | 0;
   i11 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i46 >> 2] = i11;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14HTMLDivElement6createERNS_8DocumentE(i20, i48);
 i19 = i20 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i10, H_BASE + 192 | 0, 31);
 i19 = i21 | 0;
 i11 = i10 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i19 >> 2] = i10;
 __ZN7WebCore7Element9setPseudoERKN3WTF12AtomicStringE(i20 | 0, i21);
 i21 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i19 = i21 | 0;
   i10 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i19 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i21 = i22 | 0;
 HEAP32[i21 >> 2] = i20;
 i20 = i23 | 0;
 HEAP32[i20 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i18 | 0, i22, i20) | 0;
 i20 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i21 = i20 + 8 | 0;
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
 i20 = HEAP32[i50 >> 2] | 0;
 i21 = i24 | 0;
 HEAP32[i21 >> 2] = i18;
 i18 = i25 | 0;
 HEAP32[i18 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i20, i24, i18) | 0;
 i18 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i21 = i18 + 8 | 0;
   i24 = i21 | 0;
   i20 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore14HTMLDivElement6createERNS_8DocumentE(i26, i48);
 i18 = i26 | 0;
 i26 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i9, H_BASE + 152 | 0, 33);
 i18 = i27 | 0;
 i21 = i9 | 0;
 i9 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i18 >> 2] = i9;
 __ZN7WebCore7Element9setPseudoERKN3WTF12AtomicStringE(i26 | 0, i27);
 i27 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i18 = i27 | 0;
   i9 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i18 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14HTMLDivElement6createERNS_8DocumentE(i28, i48);
 i27 = i28 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = 0;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i8, H_BASE + 120 | 0, 30);
 i27 = i29 | 0;
 i9 = i8 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i27 >> 2] = i8;
 __ZN7WebCore7Element9setPseudoERKN3WTF12AtomicStringE(i28 | 0, i29);
 i29 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i29 | 0) != 0) {
   i27 = i29 | 0;
   i8 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i27 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i29 = i26 | 0;
 i8 = i30 | 0;
 HEAP32[i8 >> 2] = i28;
 i28 = i31 | 0;
 HEAP32[i28 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i29, i30, i28) | 0;
 i28 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i8 = i28 + 8 | 0;
   i30 = i8 | 0;
   i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   HEAP32[i30 >> 2] = i31;
   if ((i31 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore14HTMLDivElement6createERNS_8DocumentE(i32, i48);
 i28 = i32 | 0;
 i32 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = 0;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i7, H_BASE + 80 | 0, 36);
 i28 = i33 | 0;
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i28 >> 2] = i7;
 __ZN7WebCore7Element9setPseudoERKN3WTF12AtomicStringE(i32 | 0, i33);
 i33 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i28 = i33 | 0;
   i7 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i28 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14HTMLDivElement6createERNS_8DocumentE(i34, i48);
 i33 = i34 | 0;
 i34 = HEAP32[i33 >> 2] | 0;
 HEAP32[i33 >> 2] = 0;
 i7 = i1 + 16 | 0;
 i28 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i34;
 do {
  if ((i28 | 0) != 0) {
   i34 = i28 + 8 | 0;
   i8 = i34 | 0;
   i31 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i31;
   if ((i31 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
  }
 } while (0);
 i28 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i33 = i28 + 8 | 0;
   i34 = i33 | 0;
   i31 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i31;
   if ((i31 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i33 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i33 - 8 | 0);
  }
 } while (0);
 i28 = HEAP32[i7 >> 2] | 0;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i6, H_BASE + 40 | 0, 33);
 i33 = i35 | 0;
 i31 = i6 | 0;
 i6 = HEAP32[i31 >> 2] | 0;
 HEAP32[i31 >> 2] = 0;
 HEAP32[i33 >> 2] = i6;
 __ZN7WebCore7Element9setPseudoERKN3WTF12AtomicStringE(i28, i35);
 i35 = HEAP32[i33 >> 2] | 0;
 do {
  if ((i35 | 0) != 0) {
   i33 = i35 | 0;
   i28 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    break;
   } else {
    HEAP32[i33 >> 2] = i28;
    break;
   }
  }
 } while (0);
 i35 = i32 | 0;
 i28 = i36 | 0;
 i33 = HEAP32[i7 >> 2] | 0;
 HEAP32[i28 >> 2] = i33;
 if ((i33 | 0) != 0) {
  i7 = i33 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i37 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i35, i36, i7) | 0;
 i7 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i28 = i7 + 8 | 0;
   i36 = i28 | 0;
   i37 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   HEAP32[i36 >> 2] = i37;
   if ((i37 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore14HTMLDivElement6createERNS_8DocumentE(i38, i48);
 i48 = i38 | 0;
 i38 = HEAP32[i48 >> 2] | 0;
 HEAP32[i48 >> 2] = 0;
 i7 = i1 + 20 | 0;
 i28 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i38;
 do {
  if ((i28 | 0) != 0) {
   i38 = i28 + 8 | 0;
   i37 = i38 | 0;
   i36 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
   HEAP32[i37 >> 2] = i36;
   if ((i36 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
  }
 } while (0);
 i28 = HEAP32[i48 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   i48 = i28 + 8 | 0;
   i38 = i48 | 0;
   i36 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
   HEAP32[i38 >> 2] = i36;
   if ((i36 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i48 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i48 - 8 | 0);
  }
 } while (0);
 i28 = HEAP32[i7 >> 2] | 0;
 __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i5, H_BASE + 8 | 0, 30);
 i48 = i39 | 0;
 i36 = i5 | 0;
 i5 = HEAP32[i36 >> 2] | 0;
 HEAP32[i36 >> 2] = 0;
 HEAP32[i48 >> 2] = i5;
 __ZN7WebCore7Element9setPseudoERKN3WTF12AtomicStringE(i28, i39);
 i39 = HEAP32[i48 >> 2] | 0;
 do {
  if ((i39 | 0) != 0) {
   i48 = i39 | 0;
   i28 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i48 >> 2] = i28;
    break;
   }
  }
 } while (0);
 i39 = i40 | 0;
 i28 = HEAP32[i7 >> 2] | 0;
 HEAP32[i39 >> 2] = i28;
 if ((i28 | 0) != 0) {
  i7 = i28 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i41 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i35, i40, i7) | 0;
 i7 = HEAP32[i39 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i39 = i7 + 8 | 0;
   i40 = i39 | 0;
   i35 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
   HEAP32[i40 >> 2] = i35;
   if ((i35 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
  }
 } while (0);
 i7 = i42 | 0;
 HEAP32[i7 >> 2] = i32;
 i32 = i43 | 0;
 HEAP32[i32 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i29, i42, i32) | 0;
 i32 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i32 | 0) != 0) {
   i7 = i32 + 8 | 0;
   i42 = i7 | 0;
   i29 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
   HEAP32[i42 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i32 = HEAP32[i50 >> 2] | 0;
 i50 = i44 | 0;
 HEAP32[i50 >> 2] = i26;
 i26 = i45 | 0;
 HEAP32[i26 >> 2] = 0;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i32, i44, i26) | 0;
 i26 = HEAP32[i50 >> 2] | 0;
 if ((i26 | 0) == 0) {
  __ZN7WebCore17ValidationMessage26setMessageDOMAndStartTimerEPNS_5TimerIS0_EE(i1, 0);
  STACKTOP = i2;
  return;
 }
 i50 = i26 + 8 | 0;
 i26 = i50 | 0;
 i44 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
 HEAP32[i26 >> 2] = i44;
 if ((i44 | 0) >= 1) {
  __ZN7WebCore17ValidationMessage26setMessageDOMAndStartTimerEPNS_5TimerIS0_EE(i1, 0);
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
  __ZN7WebCore17ValidationMessage26setMessageDOMAndStartTimerEPNS_5TimerIS0_EE(i1, 0);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
 __ZN7WebCore17ValidationMessage26setMessageDOMAndStartTimerEPNS_5TimerIS0_EE(i1, 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17ValidationMessage26setMessageDOMAndStartTimerEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, d30 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 48 | 0;
 i8 = i1 + 16 | 0;
 __ZN7WebCore13ContainerNode14removeChildrenEv(HEAP32[i8 >> 2] | 0);
 i9 = i1 + 20 | 0;
 __ZN7WebCore13ContainerNode14removeChildrenEv(HEAP32[i9 >> 2] | 0);
 i10 = i3 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i3 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i3 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i1 + 4 | 0;
 __ZNK3WTF6String5splitEtbRNS_6VectorIS0_Lj0ENS_15CrashOnOverflowEEE(i13, 10, 0, i3);
 i3 = HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i12 >> 2] | 0) != 0) {
  i14 = i2 + 64 | 0;
  i15 = i4 | 0;
  i16 = i5 | 0;
  i17 = i2 + 32 | 0;
  i18 = i6 | 0;
  i19 = i7 | 0;
  i20 = i2 + 56 | 0;
  i21 = 0;
  while (1) {
   do {
    if ((i21 | 0) == 0) {
     i22 = HEAP32[i8 >> 2] | 0;
     i23 = HEAP32[i10 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     __ZN7WebCore11HTMLElement12setInnerTextERKN3WTF6StringERi(i22, i23, i14);
    } else {
     i23 = HEAP32[i9 >> 2] | 0;
     __ZN7WebCore4Text6createERNS_8DocumentERKN3WTF6StringE(i5, i3, (HEAP32[i10 >> 2] | 0) + (i21 << 2) | 0);
     i22 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     HEAP32[i15 >> 2] = i22;
     HEAP32[i17 >> 2] = 0;
     __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i23, i4, i17) | 0;
     i23 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i22 = i23 + 8 | 0;
       i24 = i22 | 0;
       i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       HEAP32[i24 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     i23 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i22 = i23 + 8 | 0;
       i25 = i22 | 0;
       i24 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       HEAP32[i25 >> 2] = i24;
       if ((i24 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     if (i21 >>> 0 >= ((HEAP32[i12 >> 2] | 0) - 1 | 0) >>> 0) {
      break;
     }
     i23 = HEAP32[i9 >> 2] | 0;
     __ZN7WebCore13HTMLBRElement6createERNS_8DocumentE(i7, i3);
     i22 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = 0;
     HEAP32[i18 >> 2] = i22;
     HEAP32[i20 >> 2] = 0;
     __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i23, i6, i20) | 0;
     i23 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i22 = i23 + 8 | 0;
       i24 = i22 | 0;
       i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       HEAP32[i24 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     i23 = HEAP32[i19 >> 2] | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     i22 = i23 + 8 | 0;
     i23 = i22 | 0;
     i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    }
   } while (0);
   i21 = i21 + 1 | 0;
   if (i21 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 do {
  if ((__ZNK7WebCore8Document4pageEv(i3) | 0) == 0) {
   i26 = i1 + 8 | 0;
   i27 = 26;
  } else {
   i21 = HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(i3) | 0) + 48 >> 2] | 0) + 176 >> 2] | 0;
   i19 = i1 + 8 | 0;
   if ((i21 | 0) < 1) {
    i26 = i19;
    i27 = 26;
    break;
   }
   i18 = __ZN3WTF10fastMallocEj(56) | 0;
   i20 = i18;
   __ZN7WebCore9TimerBaseC2Ev(i18);
   HEAP32[i18 >> 2] = H_BASE + 304;
   HEAP32[i18 + 44 >> 2] = i1;
   i6 = i18 + 48 | 0;
   HEAP32[i6 >> 2] = F_BASE_vii + 2;
   HEAP32[i6 + 4 >> 2] = 0;
   i6 = i19 | 0;
   i19 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i20;
   if ((i19 | 0) == 0) {
    i28 = i20;
   } else {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 15](i19);
    i28 = HEAP32[i6 >> 2] | 0;
   }
   i6 = HEAP32[i13 >> 2] | 0;
   if ((i6 | 0) == 0) {
    d29 = +0;
   } else {
    d29 = +((HEAP32[i6 + 4 >> 2] | 0) >>> 0 >>> 0);
   }
   d30 = +(i21 | 0) * d29 / +1e3;
   __ZN7WebCore9TimerBase5startEdd(i28, d30 > +5 ? d30 : +5, +0);
  }
 } while (0);
 do {
  if ((i27 | 0) == 26) {
   i28 = i26 | 0;
   i13 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
  }
 } while (0);
 i26 = HEAP32[i12 >> 2] | 0;
 if ((i26 | 0) != 0) {
  i27 = HEAP32[i10 >> 2] | 0;
  i13 = i27 + (i26 << 2) | 0;
  i26 = i27;
  while (1) {
   i27 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i28 = i27 | 0;
     i1 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i28 >> 2] = i1;
      break;
     }
    }
   } while (0);
   i26 = i26 + 4 | 0;
   if ((i26 | 0) == (i13 | 0)) {
    break;
   }
  }
  HEAP32[i12 >> 2] = 0;
 }
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17ValidationMessage23updateValidationMessageERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i2 = i6 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 | 0;
 i6 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i6 | 0) == 0) {
  i7 = 5;
 } else {
  if ((HEAP32[i6 + 80 >> 2] | 0) == 0) {
   i7 = 5;
  } else {
   i7 = 21;
  }
 }
 do {
  if ((i7 | 0) == 5) {
   i6 = HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] | 0;
   L8 : do {
    if ((i6 | 0) == 0) {
     i8 = __ZN3WTF8nullAtomE;
    } else {
     i9 = HEAP32[i6 + 4 >> 2] | 0;
     if ((i9 & 1 | 0) == 0) {
      i10 = i9 >>> 1 & 134217727;
      i11 = i6 + 20 | 0;
     } else {
      i9 = i6 + 24 | 0;
      i10 = HEAP32[i9 + 8 >> 2] | 0;
      i11 = HEAP32[i9 >> 2] | 0;
     }
     if ((i10 | 0) == 0) {
      i8 = __ZN3WTF8nullAtomE;
      break;
     }
     i9 = HEAP32[__ZN7WebCore9HTMLNames9titleAttrE >> 2] | 0;
     i12 = i9 + 12 | 0;
     i13 = i9 + 16 | 0;
     i14 = 0;
     while (1) {
      i15 = i11 + (i14 << 3) | 0;
      i16 = HEAP32[i15 >> 2] | 0;
      if ((i16 | 0) == (i9 | 0)) {
       break;
      }
      if ((HEAP32[i16 + 12 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
       if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
        break;
       }
      }
      i16 = i14 + 1 | 0;
      if (i16 >>> 0 < i10 >>> 0) {
       i14 = i16;
      } else {
       i8 = __ZN3WTF8nullAtomE;
       break L8;
      }
     }
     i8 = (i15 | 0) == 0 ? __ZN3WTF8nullAtomE : i11 + (i14 << 3) + 4 | 0;
    }
   } while (0);
   i6 = HEAP32[i5 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = 23;
    break;
   }
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    i7 = 21;
    break;
   }
   i6 = HEAP32[i8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = 21;
    break;
   }
   if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
    i7 = 21;
    break;
   }
   __ZN3WTF6String6appendEh(i4, 10);
   __ZN3WTF6String6appendERKS0_(i4, i8 | 0);
   i7 = 21;
  }
 } while (0);
 do {
  if ((i7 | 0) == 21) {
   i8 = HEAP32[i5 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i7 = 23;
    break;
   }
   if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
    i7 = 23;
    break;
   }
   __ZN7WebCore17ValidationMessage10setMessageERKN3WTF6StringE(i1, i4);
  }
 } while (0);
 if ((i7 | 0) == 23) {
  __ZN7WebCore17ValidationMessage20requestToHideMessageEv(i1);
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17ValidationMessage16deleteBubbleTreeEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 12 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   i5 = i1 + 16 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   do {
    if ((i6 | 0) != 0) {
     i5 = i6 + 8 | 0;
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    }
   } while (0);
   i6 = i1 + 20 | 0;
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   do {
    if ((i5 | 0) != 0) {
     i6 = i5 + 8 | 0;
     i8 = i6 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
    }
   } while (0);
   i5 = __ZNK7WebCore7Element19userAgentShadowRootEv(HEAP32[i1 >> 2] | 0) | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   __ZN7WebCore13ContainerNode11removeChildEPNS_4NodeERi(i5, i6, i7) | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 8 | 0;
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i4 = i1 + 4 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore17ValidationMessageD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = 4;
  } else {
   i5 = HEAP32[i3 + 80 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 4;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i5, HEAP32[i2 >> 2] | 0);
  }
 } while (0);
 if ((i4 | 0) == 4) {
  __ZN7WebCore17ValidationMessage16deleteBubbleTreeEPNS_5TimerIS0_EE(i1, 0);
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore17ValidationMessageD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = 4;
  } else {
   i5 = HEAP32[i3 + 80 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 4;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 7](i5, HEAP32[i2 >> 2] | 0);
  }
 } while (0);
 if ((i4 | 0) == 4) {
  __ZN7WebCore17ValidationMessage16deleteBubbleTreeEPNS_5TimerIS0_EE(i1, 0);
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore17ValidationMessage10setMessageERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 | 0;
 i4 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i4 + 80 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 1](i5, HEAP32[i3 >> 2] | 0, i2);
   return;
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = (HEAP32[i1 + 12 >> 2] | 0) == 0;
 i2 = i1 + 8 | 0;
 i3 = __ZN3WTF10fastMallocEj(56) | 0;
 i5 = i3;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 304;
 HEAP32[i3 + 44 >> 2] = i1;
 i1 = i3 + 48 | 0;
 do {
  if (i4) {
   HEAP32[i1 >> 2] = F_BASE_vii + 6;
   HEAP32[i1 + 4 >> 2] = 0;
   i3 = i2 | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  } else {
   HEAP32[i1 >> 2] = F_BASE_vii + 4;
   HEAP32[i1 + 4 >> 2] = 0;
   i6 = i2 | 0;
   i3 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i5;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
  }
 } while (0);
 __ZN7WebCore9TimerBase5startEdd(HEAP32[i2 >> 2] | 0, +0, +0);
 return;
}
function __ZN7WebCore17ValidationMessage20requestToHideMessageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 + 80 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 7](i4, HEAP32[i2 >> 2] | 0);
   return;
  }
 } while (0);
 i2 = __ZN3WTF10fastMallocEj(56) | 0;
 i3 = i2;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 304;
 HEAP32[i2 + 44 >> 2] = i1;
 i4 = i2 + 48 | 0;
 HEAP32[i4 >> 2] = F_BASE_vii + 2;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i1 + 8 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 if ((i1 | 0) == 0) {
  i5 = i3;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
  i5 = HEAP32[i4 >> 2] | 0;
 }
 __ZN7WebCore9TimerBase5startEdd(i5, +0, +0);
 return;
}
function __ZNK7WebCore17ValidationMessage9isVisibleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 + 80 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1](i4, HEAP32[i2 >> 2] | 0) | 0;
   return i5 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (HEAP32[i2 + 4 >> 2] | 0) != 0;
 return i5 | 0;
}
function __ZNK7WebCore17ValidationMessage18shadowTreeContainsERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 80 >> 2] | 0) == 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i3 + 20 >> 2] | 0) == (HEAP32[i2 + 20 >> 2] | 0);
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
function __ZN7WebCore5TimerINS_17ValidationMessageEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 7](i4, i1);
  return;
 }
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
function __ZNK7WebCore17ValidationMessage23validationMessageClientEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 80 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore17ValidationMessage6createEPNS_22HTMLFormControlElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i3 >> 2] = i2;
 _memset(i3 + 4 | 0, 0, 20) | 0;
 HEAP32[i1 >> 2] = i3;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function runPostSets() {
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_did + 2;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore5TimerINS_17ValidationMessageEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore5TimerINS_17ValidationMessageEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
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
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
  var FUNCTION_TABLE_did = [b0,b0,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore5TimerINS_17ValidationMessageEED0Ev,b1,__ZN7WebCore5TimerINS_17ValidationMessageEED1Ev,b1,__ZN7WebCore17ValidationMessageD2Ev,b1,__ZN7WebCore5TimerINS_17ValidationMessageEE5firedEv,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore17ValidationMessage16deleteBubbleTreeEPNS_5TimerIS0_EE,b2,__ZN7WebCore17ValidationMessage26setMessageDOMAndStartTimerEPNS_5TimerIS0_EE,b2,__ZN7WebCore17ValidationMessage15buildBubbleTreeEPNS_5TimerIS0_EE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9titleAttrE": __ZN7WebCore9HTMLNames9titleAttrE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore17ValidationMessage23updateValidationMessageERKN3WTF6StringE","__ZN7WebCore5TimerINS_17ValidationMessageEED0Ev","__ZNK7WebCore17ValidationMessage18shadowTreeContainsERKNS_4NodeE","__ZN7WebCore17ValidationMessage16deleteBubbleTreeEPNS_5TimerIS0_EE","__ZNK7WebCore17ValidationMessage23validationMessageClientEv","__ZN7WebCore17ValidationMessage20requestToHideMessageEv","_memset","__ZN7WebCore17ValidationMessageD2Ev","__ZNK7WebCore17ValidationMessage9isVisibleEv","__ZN7WebCore17ValidationMessage6createEPNS_22HTMLFormControlElementE","_memcpy","_strlen","__ZN7WebCore5TimerINS_17ValidationMessageEED1Ev","__ZN7WebCore5TimerINS_17ValidationMessageEE5firedEv","__ZN7WebCore17ValidationMessage10setMessageERKN3WTF6StringE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore17ValidationMessage26setMessageDOMAndStartTimerEPNS_5TimerIS0_EE","__ZN7WebCore17ValidationMessage15buildBubbleTreeEPNS_5TimerIS0_EE"]

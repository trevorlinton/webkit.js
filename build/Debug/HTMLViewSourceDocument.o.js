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
H_BASE = parentModule["_malloc"](920 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 920;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22HTMLViewSourceDocumentC1EPNS_5FrameERKNS_3URLERKN3WTF6StringE;
/* memory initializer */ allocate([119,101,98,107,105,116,45,104,116,109,108,45,99,111,109,109,101,110,116,0,0,0,0,0,119,101,98,107,105,116,45,104,116,109,108,45,97,116,116,114,105,98,117,116,101,45,118,97,108,117,101,0,0,0,0,0,119,101,98,107,105,116,45,104,116,109,108,45,97,116,116,114,105,98,117,116,101,45,110,97,109,101,0,0,0,0,0,0,119,101,98,107,105,116,45,104,116,109,108,45,116,97,103,0,119,101,98,107,105,116,45,104,116,109,108,45,100,111,99,116,121,112,101,0,0,0,0,0,119,101,98,107,105,116,45,108,105,110,101,45,103,117,116,116,101,114,45,98,97,99,107,100,114,111,112,0,0,0,0,0,105,109,97,103,101,47,115,118,103,43,120,109,108,0,0,0,95,98,108,97,110,107,0,0,119,101,98,107,105,116,45,104,116,109,108,45,97,116,116,114,105,98,117,116,101,45,118,97,108,117,101,32,119,101,98,107,105,116,45,104,116,109,108,45,114,101,115,111,117,114,99,101,45,108,105,110,107,0,0,0,119,101,98,107,105,116,45,104,116,109,108,45,97,116,116,114,105,98,117,116,101,45,118,97,108,117,101,32,119,101,98,107,105,116,45,104,116,109,108,45,101,120,116,101,114,110,97,108,45,108,105,110,107,0,0,0,119,101,98,107,105,116,45,108,105,110,101,45,99,111,110,116,101,110,116,0,0,0,0,0,119,101,98,107,105,116,45,108,105,110,101,45,110,117,109,98,101,114,0,0,0,0,0,0,97,112,112,108,105,99,97,116,105,111,110,47,120,104,116,109,108,43,120,109,108,0,0,0,116,101,120,116,47,104,116,109,108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,212,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,247,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore9HTMLNames9classAttrE=env.__ZN7WebCore9HTMLNames9classAttrE|0;
  var __ZN7WebCore9HTMLNames7baseTagE=env.__ZN7WebCore9HTMLNames7baseTagE|0;
  var __ZN7WebCore9HTMLNames8tbodyTagE=env.__ZN7WebCore9HTMLNames8tbodyTagE|0;
  var __ZN7WebCore9HTMLNames10targetAttrE=env.__ZN7WebCore9HTMLNames10targetAttrE|0;
  var __ZN7WebCore9HTMLNames7spanTagE=env.__ZN7WebCore9HTMLNames7spanTagE|0;
  var __ZN7WebCore9HTMLNames7srcAttrE=env.__ZN7WebCore9HTMLNames7srcAttrE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
  var __ZN7WebCore9HTMLNames5tdTagE=env.__ZN7WebCore9HTMLNames5tdTagE|0;
  var __ZN7WebCore9HTMLNames8hrefAttrE=env.__ZN7WebCore9HTMLNames8hrefAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore22HTMLViewSourceDocumentE=(H_BASE+392)|0;
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
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
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
function __ZN7WebCore22HTMLViewSourceDocument15processTagTokenERKN3WTF6StringERNS_9HTMLTokenE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
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
 __ZN3WTF12AtomicString3addEPKh(i8, H_BASE + 96 | 0);
 i24 = i10 | 0;
 HEAP32[i24 >> 2] = HEAP32[i8 >> 2];
 __ZN7WebCore22HTMLViewSourceDocument20addSpanWithClassNameERKN3WTF12AtomicStringE(i9, i1, i10);
 i10 = i9 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i1 + 2336 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i9;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 + 8 | 0;
   i25 = i9 | 0;
   i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
   HEAP32[i25 >> 2] = i26;
   if ((i26 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i24 = i8 | 0;
   i9 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i24 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN3WTF12AtomicString3addEPKtj(i7, HEAP32[i3 + 16 >> 2] | 0, HEAP32[i3 + 24 >> 2] | 0);
 i8 = HEAP32[i7 >> 2] | 0;
 i7 = i3 + 544 | 0;
 i9 = i2 | 0;
 i24 = i3 + 552 | 0;
 i26 = i6 | 0;
 i25 = i14 | 0;
 i27 = i13 | 0;
 i28 = i3 + 4 | 0;
 i3 = i16 | 0;
 i29 = i15 | 0;
 i30 = i18 | 0;
 i31 = i17 | 0;
 i32 = i5 | 0;
 i33 = i20 | 0;
 i34 = i19 | 0;
 i35 = i22 | 0;
 i36 = i21 | 0;
 i37 = i23 | 0;
 i38 = 0;
 i39 = HEAP32[i7 >> 2] | 0;
 while (1) {
  i40 = HEAP32[i9 >> 2] | 0;
  i41 = (i40 | 0) == 0;
  if (i41) {
   i42 = 0;
  } else {
   i42 = HEAP32[i40 + 4 >> 2] | 0;
  }
  if (i38 >>> 0 >= i42 >>> 0) {
   break;
  }
  if ((i39 | 0) == ((HEAP32[i7 >> 2] | 0) + ((HEAP32[i24 >> 2] | 0) * 168 & -1) | 0)) {
   i43 = 14;
   break;
  }
  __ZN3WTF12AtomicString3addEPKtj(i6, HEAP32[i39 + 16 >> 2] | 0, HEAP32[i39 + 24 >> 2] | 0);
  i44 = HEAP32[i26 >> 2] | 0;
  __ZN3WTF10StringImpl20create8BitIfPossibleEPKtj(i14, HEAP32[i39 + 92 >> 2] | 0, HEAP32[i39 + 100 >> 2] | 0);
  i45 = HEAP32[i25 >> 2] | 0;
  HEAP32[i27 >> 2] = i45;
  i46 = (HEAP32[i39 >> 2] | 0) - (HEAP32[i28 >> 2] | 0) | 0;
  __ZN3WTF6StringC1EPKc(i15, H_BASE + 920 | 0);
  HEAP32[i3 >> 2] = 0;
  i47 = __ZN7WebCore22HTMLViewSourceDocument8addRangeERKN3WTF6StringEiiS4_bbS4_(i1, i2, i38, i46, i15, 0, 0, i16) | 0;
  i46 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i46 | 0) != 0) {
    i48 = i46 | 0;
    i49 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
    if ((i49 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i46);
     break;
    } else {
     HEAP32[i48 >> 2] = i49;
     break;
    }
   }
  } while (0);
  i46 = HEAP32[i29 >> 2] | 0;
  do {
   if ((i46 | 0) != 0) {
    i49 = i46 | 0;
    i48 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
    if ((i48 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i46);
     break;
    } else {
     HEAP32[i49 >> 2] = i48;
     break;
    }
   }
  } while (0);
  i46 = (HEAP32[i39 + 4 >> 2] | 0) - (HEAP32[i28 >> 2] | 0) | 0;
  __ZN3WTF6StringC1EPKc(i17, H_BASE + 64 | 0);
  HEAP32[i30 >> 2] = 0;
  i48 = __ZN7WebCore22HTMLViewSourceDocument8addRangeERKN3WTF6StringEiiS4_bbS4_(i1, i2, i47, i46, i17, 0, 0, i18) | 0;
  i46 = HEAP32[i30 >> 2] | 0;
  do {
   if ((i46 | 0) != 0) {
    i49 = i46 | 0;
    i50 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
    if ((i50 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i46);
     break;
    } else {
     HEAP32[i49 >> 2] = i50;
     break;
    }
   }
  } while (0);
  i46 = HEAP32[i31 >> 2] | 0;
  do {
   if ((i46 | 0) != 0) {
    i47 = i46 | 0;
    i50 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
    if ((i50 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i46);
     break;
    } else {
     HEAP32[i47 >> 2] = i50;
     break;
    }
   }
  } while (0);
  do {
   if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7baseTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if ((i44 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    do {
     if ((i45 | 0) == 0) {
      HEAP32[i32 >> 2] = 0;
     } else {
      if ((HEAP32[i45 + 16 >> 2] & 16 | 0) == 0) {
       __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i45);
       break;
      } else {
       HEAP32[i32 >> 2] = i45;
       i46 = i45 | 0;
       HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 2;
       break;
      }
     }
    } while (0);
    HEAP32[i33 >> 2] = HEAP32[i32 >> 2];
    __ZN7WebCore22HTMLViewSourceDocument7addBaseERKN3WTF12AtomicStringE(i19, i1, i20);
    i46 = HEAP32[i34 >> 2] | 0;
    HEAP32[i34 >> 2] = 0;
    i50 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = i46;
    do {
     if ((i50 | 0) != 0) {
      i46 = i50 + 8 | 0;
      i47 = i46 | 0;
      i49 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
      HEAP32[i47 >> 2] = i49;
      if ((i49 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    i50 = HEAP32[i33 >> 2] | 0;
    if ((i50 | 0) == 0) {
     break;
    }
    i46 = i50 | 0;
    i49 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
    if ((i49 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i50);
     break;
    } else {
     HEAP32[i46 >> 2] = i49;
     break;
    }
   }
  } while (0);
  i45 = (HEAP32[i39 + 8 >> 2] | 0) - (HEAP32[i28 >> 2] | 0) | 0;
  __ZN3WTF6StringC1EPKc(i21, H_BASE + 920 | 0);
  HEAP32[i35 >> 2] = 0;
  i49 = __ZN7WebCore22HTMLViewSourceDocument8addRangeERKN3WTF6StringEiiS4_bbS4_(i1, i2, i48, i45, i21, 0, 0, i22) | 0;
  i45 = HEAP32[i35 >> 2] | 0;
  do {
   if ((i45 | 0) != 0) {
    i46 = i45 | 0;
    i50 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
    if ((i50 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i45);
     break;
    } else {
     HEAP32[i46 >> 2] = i50;
     break;
    }
   }
  } while (0);
  i45 = HEAP32[i36 >> 2] | 0;
  do {
   if ((i45 | 0) != 0) {
    i48 = i45 | 0;
    i50 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
    if ((i50 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i45);
     break;
    } else {
     HEAP32[i48 >> 2] = i50;
     break;
    }
   }
  } while (0);
  if ((i44 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7srcAttrE >> 2] | 0) + 12 >> 2] | 0)) {
   i51 = 1;
  } else {
   i51 = (i44 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8hrefAttrE >> 2] | 0) + 12 >> 2] | 0);
  }
  i45 = (HEAP32[i39 + 12 >> 2] | 0) - (HEAP32[i28 >> 2] | 0) | 0;
  __ZN3WTF6StringC1EPKc(i23, H_BASE + 32 | 0);
  i50 = __ZN7WebCore22HTMLViewSourceDocument8addRangeERKN3WTF6StringEiiS4_bbS4_(i1, i2, i49, i45, i23, i51, (i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0), i13) | 0;
  i45 = HEAP32[i37 >> 2] | 0;
  do {
   if ((i45 | 0) != 0) {
    i48 = i45 | 0;
    i46 = (HEAP32[i48 >> 2] | 0) - 2 | 0;
    if ((i46 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i45);
     break;
    } else {
     HEAP32[i48 >> 2] = i46;
     break;
    }
   }
  } while (0);
  i45 = i39 + 168 | 0;
  i49 = HEAP32[i27 >> 2] | 0;
  do {
   if ((i49 | 0) != 0) {
    i46 = i49 | 0;
    i48 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
    if ((i48 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i49);
     break;
    } else {
     HEAP32[i46 >> 2] = i48;
     break;
    }
   }
  } while (0);
  if ((i44 | 0) == 0) {
   i38 = i50;
   i39 = i45;
   continue;
  }
  i49 = i44 | 0;
  i48 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
  if ((i48 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i44);
   i38 = i50;
   i39 = i45;
   continue;
  } else {
   HEAP32[i49 >> 2] = i48;
   i38 = i50;
   i39 = i45;
   continue;
  }
 }
 do {
  if ((i43 | 0) == 14) {
   if (i41) {
    i52 = 0;
   } else {
    i52 = HEAP32[i40 + 4 >> 2] | 0;
   }
   __ZN3WTF6StringC1EPKc(i11, H_BASE + 920 | 0);
   i39 = i12 | 0;
   HEAP32[i39 >> 2] = 0;
   __ZN7WebCore22HTMLViewSourceDocument8addRangeERKN3WTF6StringEiiS4_bbS4_(i1, i2, i38, i52, i11, 0, 0, i12) | 0;
   i27 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i39 = i27 | 0;
     i37 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i37 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i39 >> 2] = i37;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i11 >> 2] | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   i45 = i27 | 0;
   i50 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
   if ((i50 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i45 >> 2] = i50;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i1 + 2344 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i1 = i11 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 do {
  if ((i1 | 0) != 0) {
   i11 = i1 + 8 | 0;
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
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i8 | 0;
 i11 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22HTMLViewSourceDocument7addLineERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
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
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i1;
 __ZN7WebCore19HTMLTableRowElement6createERNS_8DocumentE(i7, i18);
 i19 = i7 | 0;
 i7 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 i19 = HEAP32[i1 + 2340 >> 2] | 0;
 i20 = i8 | 0;
 HEAP32[i20 >> 2] = i7;
 i21 = (i7 | 0) == 0;
 if (!i21) {
  i22 = i7 + 8 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i19, i8);
 i8 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i20 = i8 + 8 | 0;
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
 __ZN7WebCore20HTMLTableCellElement6createERKNS_13QualifiedNameERNS_8DocumentE(i9, __ZN7WebCore9HTMLNames5tdTagE, i18);
 i8 = i9 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF12AtomicString3addEPKh(i6, H_BASE + 328 | 0);
 i8 = i10 | 0;
 HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i9 | 0, __ZN7WebCore9HTMLNames9classAttrE, i10);
 i10 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i8 = i10 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i10 = i7 | 0;
 i6 = i11 | 0;
 HEAP32[i6 >> 2] = i9;
 i8 = (i9 | 0) == 0;
 if (!i8) {
  i20 = i9 + 8 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i10, i11);
 i11 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i6 = i11 + 8 | 0;
   i20 = i6 | 0;
   i22 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   HEAP32[i20 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20HTMLTableCellElement6createERKNS_13QualifiedNameERNS_8DocumentE(i12, __ZN7WebCore9HTMLNames5tdTagE, i18);
 i18 = i12 | 0;
 i12 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 do {
  if (!i8) {
   i11 = i9 + 8 | 0;
   i6 = i11 - 8 | 0;
   i22 = i11 | 0;
   i20 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i20;
   do {
    if ((i20 | 0) < 1) {
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6);
    }
   } while (0);
   i6 = HEAP32[i18 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i11 = i6 + 8 | 0;
   i6 = i11 | 0;
   i20 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 __ZN3WTF12AtomicString3addEPKh(i5, H_BASE + 304 | 0);
 i18 = i13 | 0;
 HEAP32[i18 >> 2] = HEAP32[i5 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i12 | 0, __ZN7WebCore9HTMLNames9classAttrE, i13);
 i13 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i18 = i13 | 0;
   i5 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i18 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i13 = i14 | 0;
 HEAP32[i13 >> 2] = i12;
 i5 = (i12 | 0) == 0;
 if (!i5) {
  i18 = i12 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i10, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 8 | 0;
   i10 = i13 | 0;
   i18 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 if (!i5) {
  i14 = i12 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 i14 = i1 + 2344 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = i12;
 if ((i13 | 0) == 0) {
  i23 = i12;
 } else {
  i18 = i13 + 8 | 0;
  i13 = i18 - 8 | 0;
  i10 = i18 | 0;
  i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  HEAP32[i10 >> 2] = i9;
  do {
   if ((i9 | 0) < 1) {
    if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i13);
   }
  } while (0);
  i23 = HEAP32[i14 >> 2] | 0;
 }
 if ((i23 | 0) != 0) {
  i14 = i23 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 i14 = i1 + 2336 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = i23;
 do {
  if ((i13 | 0) != 0) {
   i23 = i13 + 8 | 0;
   i18 = i23 | 0;
   i9 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
  }
 } while (0);
 i13 = i2 | 0;
 i23 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   if ((HEAP32[i23 + 4 >> 2] | 0) == 0) {
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i23, H_BASE + 64 | 0) | 0) {
    i24 = 52;
   } else {
    if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i13 >> 2] | 0, H_BASE + 32 | 0) | 0) {
     i24 = 52;
    }
   }
   do {
    if ((i24 | 0) == 52) {
     __ZN3WTF12AtomicString3addEPKh(i4, H_BASE + 96 | 0);
     i9 = i16 | 0;
     HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
     __ZN7WebCore22HTMLViewSourceDocument20addSpanWithClassNameERKN3WTF12AtomicStringE(i15, i1, i16);
     i18 = i15 | 0;
     i10 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = 0;
     i18 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i10;
     do {
      if ((i18 | 0) != 0) {
       i10 = i18 + 8 | 0;
       i8 = i10 | 0;
       i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
       HEAP32[i8 >> 2] = i11;
       if ((i11 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
      }
     } while (0);
     i18 = HEAP32[i9 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     i10 = i18 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   __ZN7WebCore22HTMLViewSourceDocument20addSpanWithClassNameERKN3WTF12AtomicStringE(i17, i1, i2);
   i11 = i17 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i11 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i10;
   if ((i11 | 0) == 0) {
    break;
   }
   i10 = i11 + 8 | 0;
   i11 = i10 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 do {
  if (!i5) {
   i14 = i12 + 8 | 0;
   i17 = i14 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 if (i21) {
  STACKTOP = i3;
  return;
 }
 i21 = i7 + 8 | 0;
 i7 = i21 | 0;
 i12 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22HTMLViewSourceDocument21createContainingTableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
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
 i15 = i1;
 __ZN7WebCore15HTMLHtmlElement6createERNS_8DocumentE(i4, i15);
 i16 = i4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i16 = i5 | 0;
 HEAP32[i16 >> 2] = i4;
 i17 = (i4 | 0) == 0;
 if (!i17) {
  i18 = i4 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i1, i5);
 i5 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i16 = i5 + 8 | 0;
   i18 = i16 | 0;
   i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15HTMLBodyElement6createERNS_8DocumentE(i6, i15);
 i5 = i6 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i7 | 0;
 HEAP32[i5 >> 2] = i6;
 i16 = (i6 | 0) == 0;
 if (!i16) {
  i19 = i6 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i4 | 0, i7);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 8 | 0;
   i19 = i5 | 0;
   i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore14HTMLDivElement6createERNS_8DocumentE(i8, i15);
 i7 = i8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF12AtomicString3addEPKh(i3, H_BASE + 136 | 0);
 i7 = i9 | 0;
 HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i8 | 0, __ZN7WebCore9HTMLNames9classAttrE, i9);
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i9 = i6 | 0;
 i3 = i10 | 0;
 HEAP32[i3 >> 2] = i8;
 i7 = (i8 | 0) == 0;
 if (!i7) {
  i5 = i8 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i9, i10);
 i10 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 + 8 | 0;
   i5 = i3 | 0;
   i18 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16HTMLTableElement6createERNS_8DocumentE(i11, i15);
 i10 = i11 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i12 | 0;
 HEAP32[i10 >> 2] = i11;
 i3 = (i11 | 0) == 0;
 if (!i3) {
  i18 = i11 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i9, i12);
 i12 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 + 8 | 0;
   i9 = i10 | 0;
   i18 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore23HTMLTableSectionElement6createERKNS_13QualifiedNameERNS_8DocumentE(i13, __ZN7WebCore9HTMLNames8tbodyTagE, i15);
 i15 = i13 | 0;
 i13 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i12 = i1 + 2340 | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 + 8 | 0;
   i18 = i13 | 0;
   i9 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i10 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i15 = i10 + 8 | 0;
   i13 = i15 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i10 = i14 | 0;
 i15 = HEAP32[i12 >> 2] | 0;
 HEAP32[i10 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i9 = i15 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i11 | 0, i14);
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i10 = i14 + 8 | 0;
   i9 = i10 | 0;
   i15 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i12 = i14 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = i1 + 2336 | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i14;
 do {
  if ((i1 | 0) != 0) {
   i14 = i1 + 8 | 0;
   i12 = i14 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 do {
  if (!i3) {
   i1 = i11 + 8 | 0;
   i14 = i1 | 0;
   i10 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  }
 } while (0);
 do {
  if (!i7) {
   i11 = i8 + 8 | 0;
   i3 = i11 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 do {
  if (!i16) {
   i8 = i6 + 8 | 0;
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
 if (i17) {
  STACKTOP = i2;
  return;
 }
 i17 = i4 + 8 | 0;
 i4 = i17 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22HTMLViewSourceDocument8addRangeERKN3WTF6StringEiiS4_bbS4_(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 24 | 0;
 i14 = i9 + 32 | 0;
 i15 = i9 + 40 | 0;
 i16 = i9 + 48 | 0;
 i17 = i9 + 56 | 0;
 i18 = i9 + 64 | 0;
 if ((i3 | 0) == (i4 | 0)) {
  i19 = i3;
  STACKTOP = i9;
  return i19 | 0;
 }
 __ZNK3WTF6String9substringEjj(i13, i2, i3, i4 - i3 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   i2 = i1 + 2336 | 0;
   if (!i6) {
    if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
     __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i11, i5);
     i20 = i11 | 0;
    } else {
     i21 = i11 | 0;
     HEAP32[i21 >> 2] = i5;
     i22 = i5 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
     i20 = i21;
    }
    i21 = i17 | 0;
    HEAP32[i21 >> 2] = HEAP32[i20 >> 2];
    __ZN7WebCore22HTMLViewSourceDocument20addSpanWithClassNameERKN3WTF12AtomicStringE(i16, i1, i17);
    i22 = i16 | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    HEAP32[i22 >> 2] = 0;
    i22 = i2 | 0;
    i24 = HEAP32[i22 >> 2] | 0;
    HEAP32[i22 >> 2] = i23;
    do {
     if ((i24 | 0) != 0) {
      i23 = i24 + 8 | 0;
      i22 = i23 | 0;
      i25 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      HEAP32[i22 >> 2] = i25;
      if ((i25 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     }
    } while (0);
    i24 = HEAP32[i21 >> 2] | 0;
    if ((i24 | 0) == 0) {
     break;
    }
    i23 = i24 | 0;
    i25 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
    if ((i25 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i24);
     break;
    } else {
     HEAP32[i23 >> 2] = i25;
     break;
    }
   }
   i25 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i25 | 0) == 0) {
     i23 = i12 | 0;
     HEAP32[i23 >> 2] = 0;
     i26 = i23;
    } else {
     if ((HEAP32[i25 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i12, i25);
      i26 = i12 | 0;
      break;
     } else {
      i23 = i12 | 0;
      HEAP32[i23 >> 2] = i25;
      i24 = i25 | 0;
      HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
      i26 = i23;
      break;
     }
    }
   } while (0);
   i25 = i15 | 0;
   HEAP32[i25 >> 2] = HEAP32[i26 >> 2];
   __ZN7WebCore22HTMLViewSourceDocument7addLinkERKN3WTF12AtomicStringEb(i14, i1, i15, i7);
   i21 = i14 | 0;
   i23 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i21 = i2 | 0;
   i24 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = i23;
   do {
    if ((i24 | 0) != 0) {
     i23 = i24 + 8 | 0;
     i21 = i23 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
    }
   } while (0);
   i24 = HEAP32[i25 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i2 = i24 | 0;
   i23 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i2 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i7 = i10 | 0;
   HEAP32[i7 >> 2] = 0;
   i27 = i7;
  } else {
   if ((HEAP32[i14 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i10, i14);
    i27 = i10 | 0;
    break;
   } else {
    i7 = i10 | 0;
    HEAP32[i7 >> 2] = i14;
    i15 = i14 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
    i27 = i7;
    break;
   }
  }
 } while (0);
 i14 = i18 | 0;
 HEAP32[i14 >> 2] = HEAP32[i27 >> 2];
 __ZN7WebCore22HTMLViewSourceDocument7addTextERKN3WTF6StringERKNS1_12AtomicStringE(i1, i13, i18);
 i18 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i14 = i18 | 0;
   i27 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i14 >> 2] = i27;
    break;
   }
  }
 } while (0);
 i18 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   if ((HEAP32[i18 + 4 >> 2] | 0) == 0) {
    break;
   }
   i3 = i1 + 2336 | 0;
   i27 = HEAP32[i3 >> 2] | 0;
   if ((i27 | 0) == (HEAP32[i1 + 2340 >> 2] | 0)) {
    break;
   }
   i14 = HEAP32[i27 + 16 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i28 = i27;
   } else {
    i27 = i14 + 8 | 0;
    HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
    i28 = HEAP32[i3 >> 2] | 0;
   }
   HEAP32[i3 >> 2] = i14;
   if ((i28 | 0) == 0) {
    break;
   }
   i14 = i28 + 8 | 0;
   i3 = i14 | 0;
   i27 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i27;
   if ((i27 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 i28 = HEAP32[i13 >> 2] | 0;
 if ((i28 | 0) == 0) {
  i19 = i4;
  STACKTOP = i9;
  return i19 | 0;
 }
 i13 = i28 | 0;
 i1 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i28);
  i19 = i4;
  STACKTOP = i9;
  return i19 | 0;
 } else {
  HEAP32[i13 >> 2] = i1;
  i19 = i4;
  STACKTOP = i9;
  return i19 | 0;
 }
 return 0;
}
function runPostSets() {
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_v + 14;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_di + 6;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_v + 12;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_di + 8;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_di + 4;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_ii + 82;
}
function __ZN7WebCore22HTMLViewSourceDocument7addTextERKN3WTF6StringERKNS1_12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i5 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i5 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZNK3WTF6String5splitEtbRNS_6VectorIS0_Lj0ENS_15CrashOnOverflowEEE(i2, 10, 1, i5);
 i5 = HEAP32[i11 >> 2] | 0;
 i2 = i6 | 0;
 i12 = i1 + 2336 | 0;
 i13 = i1 + 2340 | 0;
 i14 = i5 - 1 | 0;
 i15 = i1;
 i16 = i7 | 0;
 i17 = i8 | 0;
 i18 = 0;
 while (1) {
  if (i18 >>> 0 >= i5 >>> 0) {
   break;
  }
  if ((HEAP32[i11 >> 2] | 0) >>> 0 <= i18 >>> 0) {
   i19 = 6;
   break;
  }
  i20 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i18 << 2) >> 2] | 0;
  HEAP32[i2 >> 2] = i20;
  if ((i20 | 0) != 0) {
   i21 = i20 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
  }
  if ((HEAP32[i12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
   __ZN7WebCore22HTMLViewSourceDocument7addLineERKN3WTF12AtomicStringE(i1, i3);
  }
  i21 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i21 | 0) == 0) {
    i19 = 13;
   } else {
    if ((HEAP32[i21 + 4 >> 2] | 0) == 0) {
     i19 = 13;
     break;
    }
    __ZN7WebCore4Text6createERNS_8DocumentERKN3WTF6StringE(i7, i15, i6);
    i20 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = 0;
    i22 = HEAP32[i12 >> 2] | 0;
    HEAP32[i17 >> 2] = i20;
    i23 = (i20 | 0) == 0;
    if (!i23) {
     i24 = i20 + 8 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
    }
    __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i22, i8);
    i22 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i24 = i22 + 8 | 0;
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
    if (i18 >>> 0 < i14 >>> 0) {
     __ZN7WebCore22HTMLViewSourceDocument10finishLineEv(i1);
    }
    if (i23) {
     i27 = 0;
     break;
    }
    i22 = i20 + 8 | 0;
    i24 = i22 | 0;
    i26 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    HEAP32[i24 >> 2] = i26;
    if ((i26 | 0) >= 1) {
     i27 = 0;
     break;
    }
    if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
     i27 = 0;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
    i27 = 0;
   }
  } while (0);
  do {
   if ((i19 | 0) == 13) {
    i19 = 0;
    if ((i18 | 0) == (i14 | 0)) {
     i27 = 2;
     break;
    }
    __ZN7WebCore22HTMLViewSourceDocument10finishLineEv(i1);
    i27 = 4;
   }
  } while (0);
  i21 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i21 | 0) != 0) {
    i22 = i21 | 0;
    i26 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i21);
     break;
    } else {
     HEAP32[i22 >> 2] = i26;
     break;
    }
   }
  } while (0);
  if ((i27 | 0) == 2) {
   break;
  } else {
   i18 = i18 + 1 | 0;
  }
 }
 if ((i19 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i19 = HEAP32[i11 >> 2] | 0;
 if ((i19 | 0) != 0) {
  i18 = HEAP32[i9 >> 2] | 0;
  i27 = i18 + (i19 << 2) | 0;
  i19 = i18;
  while (1) {
   i18 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i2 = i18 | 0;
     i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i1 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i2 >> 2] = i1;
      break;
     }
    }
   } while (0);
   i19 = i19 + 4 | 0;
   if ((i19 | 0) == (i27 | 0)) {
    break;
   }
  }
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22HTMLViewSourceDocument7addLinkERKN3WTF12AtomicStringEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
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
 i14 = i2 + 2336 | 0;
 do {
  if ((HEAP32[i14 >> 2] | 0) == (HEAP32[i2 + 2340 >> 2] | 0)) {
   __ZN3WTF12AtomicString3addEPKh(i8, H_BASE + 96 | 0);
   i15 = i9 | 0;
   HEAP32[i15 >> 2] = HEAP32[i8 >> 2];
   __ZN7WebCore22HTMLViewSourceDocument7addLineERKN3WTF12AtomicStringE(i2, i9);
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i15 = i16 | 0;
   i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i15 >> 2] = i17;
    break;
   }
  }
 } while (0);
 __ZN7WebCore17HTMLAnchorElement6createERNS_8DocumentE(i10, i2);
 i2 = i10 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i10 | 0;
 __ZN3WTF12AtomicString3addEPKh(i7, i4 ? H_BASE + 248 | 0 : H_BASE + 192 | 0);
 i4 = i11 | 0;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i2, __ZN7WebCore9HTMLNames9classAttrE, i11);
 i11 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN3WTF12AtomicString3addEPKh(i6, H_BASE + 184 | 0);
 i11 = i12 | 0;
 HEAP32[i11 >> 2] = HEAP32[i6 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i2, __ZN7WebCore9HTMLNames10targetAttrE, i12);
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 | 0;
   i6 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i11 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i2, __ZN7WebCore9HTMLNames8hrefAttrE, i3);
 i3 = HEAP32[i14 >> 2] | 0;
 i14 = i13 | 0;
 HEAP32[i14 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i12 = i10 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i3, i13);
 i13 = HEAP32[i14 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i18 = i1 | 0;
  HEAP32[i18 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
 i14 = i13 + 8 | 0;
 i13 = i14 | 0;
 i3 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 HEAP32[i13 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i18 = i1 | 0;
  HEAP32[i18 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
  i18 = i1 | 0;
  HEAP32[i18 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
 i18 = i1 | 0;
 HEAP32[i18 >> 2] = i2;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22HTMLViewSourceDocument19processDoctypeTokenERKN3WTF6StringERNS_9HTMLTokenE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i1 + 2336 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  __ZN7WebCore22HTMLViewSourceDocument21createContainingTableEv(i1);
 }
 __ZN3WTF12AtomicString3addEPKh(i5, H_BASE + 112 | 0);
 i10 = i7 | 0;
 HEAP32[i10 >> 2] = HEAP32[i5 >> 2];
 __ZN7WebCore22HTMLViewSourceDocument20addSpanWithClassNameERKN3WTF12AtomicStringE(i6, i1, i7);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i6;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 8 | 0;
   i5 = i6 | 0;
   i11 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i6 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN3WTF12AtomicString3addEPKh(i4, H_BASE + 112 | 0);
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore22HTMLViewSourceDocument7addTextERKN3WTF6StringERKNS1_12AtomicStringE(i1, i2, i8);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i1 + 2344 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i1 = i8 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 8 | 0;
 i1 = i8 | 0;
 i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i9;
 if ((i9 | 0) >= 1) {
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
function __ZN7WebCore22HTMLViewSourceDocument19processCommentTokenERKN3WTF6StringERNS_9HTMLTokenE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 __ZN3WTF12AtomicString3addEPKh(i5, H_BASE + 8 | 0);
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
 __ZN7WebCore22HTMLViewSourceDocument20addSpanWithClassNameERKN3WTF12AtomicStringE(i6, i1, i7);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i1 + 2336 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   i10 = i6 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN3WTF12AtomicString3addEPKh(i4, H_BASE + 8 | 0);
 i5 = i8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore22HTMLViewSourceDocument7addTextERKN3WTF6StringERKNS1_12AtomicStringE(i1, i2, i8);
 i8 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i5 = i8 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i1 + 2344 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i1 = i8 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 8 | 0;
 i1 = i8 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i7;
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
function __ZN7WebCore22HTMLViewSourceDocument9addSourceERKN3WTF6StringERNS_9HTMLTokenE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if ((HEAP32[i1 + 2336 >> 2] | 0) == 0) {
  __ZN7WebCore22HTMLViewSourceDocument21createContainingTableEv(i1);
 }
 switch (HEAP32[i3 >> 2] | 0) {
 case 1:
  {
   __ZN7WebCore22HTMLViewSourceDocument19processDoctypeTokenERKN3WTF6StringERNS_9HTMLTokenE(i1, i2, 0);
   STACKTOP = i4;
   return;
  }
 case 6:
  {
   if ((HEAP32[(HEAP32[i1 + 2340 >> 2] | 0) + 36 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   i8 = i7 | 0;
   HEAP32[i8 >> 2] = 0;
   __ZN7WebCore22HTMLViewSourceDocument7addLineERKN3WTF12AtomicStringE(i1, i7);
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i8 >> 2] = i9;
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 2:
 case 3:
  {
   __ZN7WebCore22HTMLViewSourceDocument15processTagTokenERKN3WTF6StringERNS_9HTMLTokenE(i1, i2, i3);
   STACKTOP = i4;
   return;
  }
 case 4:
  {
   __ZN7WebCore22HTMLViewSourceDocument19processCommentTokenERKN3WTF6StringERNS_9HTMLTokenE(i1, i2, 0);
   STACKTOP = i4;
   return;
  }
 case 5:
  {
   __ZN3WTF12AtomicString3addEPKh(i5, H_BASE + 920 | 0);
   i3 = i6 | 0;
   HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
   __ZN7WebCore22HTMLViewSourceDocument7addTextERKN3WTF6StringERKNS1_12AtomicStringE(i1, i2, i6);
   i6 = HEAP32[i3 >> 2] | 0;
   if ((i6 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i3 = i6 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i3 >> 2] = i2;
    STACKTOP = i4;
    return;
   }
   break;
  }
 default:
  {
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore22HTMLViewSourceDocument10finishLineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 2336 | 0;
 do {
  if ((HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] | 0) == 0) {
   __ZN7WebCore13HTMLBRElement6createERNS_8DocumentE(i3, i1);
   i6 = i3 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   i6 = HEAP32[i5 >> 2] | 0;
   i8 = i4 | 0;
   HEAP32[i8 >> 2] = i7;
   i9 = (i7 | 0) == 0;
   if (!i9) {
    i10 = i7 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i6, i4);
   i6 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i8 = i6 + 8 | 0;
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
   if (i9) {
    break;
   }
   i6 = i7 + 8 | 0;
   i8 = i6 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i1 + 2340 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i1 = i4 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 8 | 0;
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22HTMLViewSourceDocumentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 400;
 HEAP32[i1 + 44 >> 2] = H_BASE + 764;
 HEAP32[i1 + 88 >> 2] = H_BASE + 788;
 HEAP32[i1 + 2288 >> 2] = H_BASE + 892;
 i2 = HEAP32[i1 + 2344 >> 2] | 0;
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
 i2 = HEAP32[i1 + 2340 >> 2] | 0;
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
 i2 = HEAP32[i1 + 2336 >> 2] | 0;
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
 i2 = HEAP32[i1 + 2332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1;
  __ZN7WebCore12HTMLDocumentD2Ev(i6);
  return;
 }
 i3 = i2 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i6 = i1;
  __ZN7WebCore12HTMLDocumentD2Ev(i6);
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  i6 = i1;
  __ZN7WebCore12HTMLDocumentD2Ev(i6);
  return;
 }
}
function __ZN7WebCore22HTMLViewSourceDocument20addSpanWithClassNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 2336 | 0;
 if ((HEAP32[i7 >> 2] | 0) == (HEAP32[i2 + 2340 >> 2] | 0)) {
  __ZN7WebCore22HTMLViewSourceDocument7addLineERKN3WTF12AtomicStringE(i2, i3);
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i1 >> 2] = i8;
  if ((i8 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore11HTMLElement6createERKNS_13QualifiedNameERNS_8DocumentE(i5, __ZN7WebCore9HTMLNames7spanTagE, i2);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i5 | 0;
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i2, __ZN7WebCore9HTMLNames9classAttrE, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i9 = i5 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i3, i6);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 + 8 | 0;
   i3 = i7 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 >> 2] = i2;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22HTMLViewSourceDocument7addBaseERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 __ZN7WebCore15HTMLBaseElement6createERKNS_13QualifiedNameERNS_8DocumentE(i5, __ZN7WebCore9HTMLNames7baseTagE, i2);
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = i5 | 0;
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i7, __ZN7WebCore9HTMLNames8hrefAttrE, i3);
 i3 = HEAP32[i2 + 2336 >> 2] | 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i8 = i5 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i3, i6);
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
 i2 = i6 + 8 | 0;
 i6 = i2 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = i7;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22HTMLViewSourceDocument12createParserEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 + 2332 | 0;
 i4 = i3 | 0;
 do {
  if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 376 | 0) | 0)) {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 352 | 0) | 0) {
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 168 | 0) | 0) {
    break;
   }
   if (__ZN7WebCore17DOMImplementation13isXMLMIMETypeERKN3WTF6StringE(i3) | 0) {
    break;
   }
   i5 = __ZN3WTF10fastMallocEj(2504) | 0;
   __ZN7WebCore20TextViewSourceParserC1ERNS_22HTMLViewSourceDocumentE(i5, i2);
   HEAP32[i1 >> 2] = i5;
   return;
  }
 } while (0);
 i3 = __ZN3WTF10fastMallocEj(2504) | 0;
 __ZN7WebCore20HTMLViewSourceParserC1ERNS_22HTMLViewSourceDocumentE(i3, i2);
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore22HTMLViewSourceDocumentC2EPNS_5FrameERKNS_3URLERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore12HTMLDocumentC2EPNS_5FrameERKNS_3URLEhj(i1, i2, i3, 0, 0);
 HEAP32[i1 >> 2] = H_BASE + 400;
 HEAP32[i1 + 44 >> 2] = H_BASE + 764;
 HEAP32[i1 + 88 >> 2] = H_BASE + 788;
 HEAP32[i1 + 2288 >> 2] = H_BASE + 892;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 2332 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 2336 >> 2] = 0;
 HEAP32[i1 + 2340 >> 2] = 0;
 HEAP32[i1 + 2344 >> 2] = 0;
 i4 = i1;
 HEAP8[i1 + 917 | 0] = 1;
 __ZN7WebCore8Document15setIsViewSourceEb(i4, 1);
 __ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE(i4, 0);
 HEAP8[i1 + 668 | 0] = 1;
 return;
}
function __ZN7WebCore22HTMLViewSourceDocumentC1EPNS_5FrameERKNS_3URLERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore12HTMLDocumentC2EPNS_5FrameERKNS_3URLEhj(i1, i2, i3, 0, 0);
 HEAP32[i1 >> 2] = H_BASE + 400;
 HEAP32[i1 + 44 >> 2] = H_BASE + 764;
 HEAP32[i1 + 88 >> 2] = H_BASE + 788;
 HEAP32[i1 + 2288 >> 2] = H_BASE + 892;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 2332 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 2336 >> 2] = 0;
 HEAP32[i1 + 2340 >> 2] = 0;
 HEAP32[i1 + 2344 >> 2] = 0;
 i4 = i1;
 HEAP8[i1 + 917 | 0] = 1;
 __ZN7WebCore8Document15setIsViewSourceEb(i4, 1);
 __ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE(i4, 0);
 HEAP8[i1 + 668 | 0] = 1;
 return;
}
function __ZN7WebCore22HTMLViewSourceDocument21processCharacterTokenERKN3WTF6StringERNS_9HTMLTokenE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN3WTF12AtomicString3addEPKh(i4, H_BASE + 920 | 0);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore22HTMLViewSourceDocument7addTextERKN3WTF6StringERKNS1_12AtomicStringE(i1, i2, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
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
function viiiii___ZThn88_N7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZThn88_N7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZThn88_N7WebCore8Document27derefScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 2288 + 2200 | 0;
 i1 = i2 + 8 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 16 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2);
 return;
}
function viiiii___ZN7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore8Document27derefScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
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
function v___ZThn88_N7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper() {
 __ZThn88_N7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm();
}
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function v___ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper() {
 __ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm();
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function vii___ZThn88_N7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn88_N7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function vii___ZThn88_N7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn88_N7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function viiii___ZN7WebCore12HTMLDocument13createElementERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore12HTMLDocument13createElementERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function vii___ZN7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function v___ZThn88_N7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE__wrapper() {
 __ZThn88_N7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE();
}
function v___ZN7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE__wrapper() {
 __ZN7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE();
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore8Document15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function viii___ZThn88_NK7WebCore8Document11completeURLERKN3WTF6StringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn88_NK7WebCore8Document11completeURLERKN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function v___ZThn88_N7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper() {
 __ZThn88_N7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE();
}
function viii___ZNK7WebCore8Document11completeURLERKN3WTF6StringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore8Document16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore8Document16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore8Document39scriptedAnimationControllerSetThrottledEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document39scriptedAnimationControllerSetThrottledEb(i1 | 0, i2 | 0);
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
function viii___ZThn88_NK7WebCore8Document9userAgentERKNS_3URLE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn88_NK7WebCore8Document9userAgentERKNS_3URLE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZNK7WebCore12HTMLDocument28cloneDocumentWithoutChildrenEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12HTMLDocument28cloneDocumentWithoutChildrenEv(i1 | 0, i2 | 0);
}
function v___ZN7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper() {
 __ZN7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE();
}
function iii___ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function __ZThn2288_N7WebCore22HTMLViewSourceDocumentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2288 | 0;
 __ZN7WebCore22HTMLViewSourceDocumentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function viii___ZNK7WebCore8Document9userAgentERKNS_3URLE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore8Document9userAgentERKNS_3URLE(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZThn88_N7WebCore8Document11disableEvalERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn88_N7WebCore8Document11disableEvalERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function __ZThn88_N7WebCore22HTMLViewSourceDocumentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 88 | 0;
 __ZN7WebCore22HTMLViewSourceDocumentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn44_N7WebCore22HTMLViewSourceDocumentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 44 | 0;
 __ZN7WebCore22HTMLViewSourceDocumentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore4Node22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return ((i2 | 0) == 0 ? 0 : i2 + 88 | 0) | 0;
}
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function iii___ZN7WebCore4Node13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore4Node11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function __ZThn88_N7WebCore8Document25refScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2288 + 2208 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vii___ZN7WebCore8Document11disableEvalERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document11disableEvalERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore8Document9cloneNodeEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore8Document9cloneNodeEb(i1 | 0, i2 | 0, i3 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function di___ZThn88_NK7WebCore8Document22timerAlignmentIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZThn88_NK7WebCore8Document22timerAlignmentIntervalEv(i1 | 0);
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore8Document25refScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function di___ZThn88_NK7WebCore8Document20minimumTimerIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZThn88_NK7WebCore8Document20minimumTimerIntervalEv(i1 | 0);
}
function ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
}
function ii___ZThn88_NK7WebCore8Document15isContextThreadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn88_NK7WebCore8Document15isContextThreadEv(i1 | 0) | 0;
}
function ii___ZThn88_N7WebCore8Document16errorEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn88_N7WebCore8Document16errorEventTargetEv(i1 | 0) | 0;
}
function di___ZNK7WebCore8Document22timerAlignmentIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore8Document22timerAlignmentIntervalEv(i1 | 0);
}
function __ZN7WebCore22HTMLViewSourceDocumentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22HTMLViewSourceDocumentD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper() {
 __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE();
}
function vi___ZThn88_N7WebCore8Document20stopActiveDOMObjectsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn88_N7WebCore8Document20stopActiveDOMObjectsEv(i1 | 0);
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function di___ZNK7WebCore8Document20minimumTimerIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore8Document20minimumTimerIntervalEv(i1 | 0);
}
function __ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore9TreeScope17applyAuthorStylesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9TreeScope17applyAuthorStylesEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function vi___ZN7WebCore8Document23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document23removeAllEventListenersEv(i1 | 0);
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vii___ZNK7WebCore8Document8nodeNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore8Document8nodeNameEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore8Document15isContextThreadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore8Document15isContextThreadEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12HTMLDocument10isFrameSetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12HTMLDocument10isFrameSetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore8Document16errorEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore8Document16errorEventTargetEv(i1 | 0) | 0;
}
function __ZThn2288_N7WebCore22HTMLViewSourceDocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22HTMLViewSourceDocumentD2Ev(i1 - 2288 | 0);
 return;
}
function vii___ZNK7WebCore8Document7baseURIEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore8Document7baseURIEv(i1 | 0, i2 | 0);
}
function ii___ZThn88_NK7WebCore8Document9topOriginEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn88_NK7WebCore8Document9topOriginEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18offsetInCharactersEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18maxCharacterOffsetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function vi___ZN7WebCore8Document20stopActiveDOMObjectsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document20stopActiveDOMObjectsEv(i1 | 0);
}
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function __ZThn88_N7WebCore22HTMLViewSourceDocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22HTMLViewSourceDocumentD2Ev(i1 - 88 | 0);
 return;
}
function __ZThn44_N7WebCore22HTMLViewSourceDocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22HTMLViewSourceDocumentD2Ev(i1 - 44 | 0);
 return;
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function vi___ZThn44_N7WebCore8Document12dropChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn44_N7WebCore8Document12dropChildrenEv(i1 | 0);
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function ii___ZNK7WebCore8Document9topOriginEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore8Document9topOriginEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node12namespaceURIEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node12namespaceURIEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
}
function ii___ZNK7WebCore8Document8nodeTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore8Document8nodeTypeEv(i1 | 0) | 0;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
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
function vi___ZN7WebCore8Document12dropChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document12dropChildrenEv(i1 | 0);
}
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function __ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function __ZN7WebCore22HTMLViewSourceDocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22HTMLViewSourceDocumentD2Ev(i1);
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
function ii___ZNK7WebCore4Node9localNameEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node9localNameEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore4Node6prefixEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node6prefixEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 127](i2 | 0) | 0;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 15](i2 | 0);
}
function __ZThn88_NK7WebCore8Document10eventQueueEv(i1) {
 i1 = i1 | 0;
 return i1 - 2288 + 3788 | 0;
}
function __ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore20CachedResourceClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZThn88_NK7WebCore8Document22isJSExecutionForbiddenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZThn88_NK7WebCore8Document3urlEv(i1) {
 i1 = i1 | 0;
 return i1 - 2288 + 2556 | 0;
}
function __ZNK7WebCore8Document23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore8Document22isJSExecutionForbiddenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore8Document10eventQueueEv(i1) {
 i1 = i1 | 0;
 return i1 + 1588 | 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZThn88_NK7WebCore8Document10isDocumentEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node21finishParsingChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore8Document3urlEv(i1) {
 i1 = i1 | 0;
 return i1 + 356 | 0;
}
function __ZN7WebCore4Node20beginParsingChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isPluginElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isMediaControlsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isAttributeNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore8Document10isDocumentEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node11sheetLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
 return +0;
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
  var FUNCTION_TABLE_viiiii = [b0,b0,viiiii___ZThn88_N7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper,b0,viiiii___ZN7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_di = [b1,b1,di___ZNK7WebCore8Document20minimumTimerIntervalEv__wrapper,b1,di___ZThn88_NK7WebCore8Document22timerAlignmentIntervalEv__wrapper,b1,di___ZNK7WebCore8Document22timerAlignmentIntervalEv__wrapper,b1,di___ZThn88_NK7WebCore8Document20minimumTimerIntervalEv__wrapper,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore22HTMLViewSourceDocumentD1Ev,b2,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b2,__ZThn88_N7WebCore22HTMLViewSourceDocumentD1Ev,b2,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b2,__ZThn44_N7WebCore22HTMLViewSourceDocumentD0Ev,b2,__ZThn88_N7WebCore8Document25refScriptExecutionContextEv,b2,__ZN7WebCore8Document27derefScriptExecutionContextEv,b2,__ZThn2288_N7WebCore22HTMLViewSourceDocumentD0Ev,b2,__ZThn2288_N7WebCore22HTMLViewSourceDocumentD1Ev,b2,vi___ZN7WebCore8Document12dropChildrenEv__wrapper,b2,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b2,vi___ZN7WebCore8Document23removeAllEventListenersEv__wrapper,b2,__ZThn88_N7WebCore8Document27derefScriptExecutionContextEv,b2,__ZN7WebCore4Node20beginParsingChildrenEv
  ,b2,__ZN7WebCore8Document25refScriptExecutionContextEv,b2,__ZThn44_N7WebCore22HTMLViewSourceDocumentD1Ev,b2,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b2,vi___ZN7WebCore8Document20stopActiveDOMObjectsEv__wrapper,b2,vi___ZThn44_N7WebCore8Document12dropChildrenEv__wrapper,b2,__ZN7WebCore4Node21finishParsingChildrenEv,b2,__ZThn88_N7WebCore22HTMLViewSourceDocumentD0Ev,b2,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b2,__ZN7WebCore22HTMLViewSourceDocumentD0Ev,b2,vi___ZThn88_N7WebCore8Document20stopActiveDOMObjectsEv__wrapper,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZThn88_N7WebCore8Document11disableEvalERKN3WTF6StringE__wrapper,b3,__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE,b3,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b3,vii___ZN7WebCore8Document15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b3,vii___ZThn88_N7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b3,vii___ZN7WebCore4Node11removedFromERNS_13ContainerNodeE__wrapper,b3,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b3,vii___ZNK7WebCore12HTMLDocument28cloneDocumentWithoutChildrenEv__wrapper,b3,vii___ZNK7WebCore8Document7baseURIEv__wrapper,b3,vii___ZThn88_N7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b3,vii___ZN7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b3,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b3,vii___ZN7WebCore8Document11disableEvalERKN3WTF6StringE__wrapper,b3,vii___ZN7WebCore8Document39scriptedAnimationControllerSetThrottledEb__wrapper
  ,b3,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b3,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b3,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b3,vii___ZNK7WebCore8Document8nodeNameEv__wrapper,b3,vii___ZN7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b3,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b3,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b3,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b3,__ZN7WebCore22HTMLViewSourceDocument12createParserEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,ii___ZThn88_N7WebCore8Document16errorEventTargetEv__wrapper,b4,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b4,ii___ZN7WebCore8Document16errorEventTargetEv__wrapper,b4,ii___ZThn88_NK7WebCore8Document9topOriginEv__wrapper,b4,__ZNK7WebCore8Document3urlEv,b4,__ZNK7WebCore4Node19isFrameOwnerElementEv,b4,ii___ZNK7WebCore12HTMLDocument10isFrameSetEv__wrapper,b4,__ZNK7WebCore4Node20isInsertionPointNodeEv,b4,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b4,ii___ZNK7WebCore4Node12namespaceURIEv__wrapper,b4,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b4,__ZNK7WebCore4Node22scriptExecutionContextEv,b4,__ZNK7WebCore8Document10isDocumentEv,b4,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper
  ,b4,__ZThn88_NK7WebCore8Document10eventQueueEv,b4,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b4,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b4,ii___ZThn88_NK7WebCore8Document15isContextThreadEv__wrapper,b4,__ZThn88_NK7WebCore8Document3urlEv,b4,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b4,ii___ZNK7WebCore4Node6prefixEv__wrapper,b4,__ZNK7WebCore4Node16nonRendererStyleEv,b4,__ZNK7WebCore4Node15isPluginElementEv,b4,ii___ZNK7WebCore8Document9topOriginEv__wrapper,b4,__ZNK7WebCore8Document22isJSExecutionForbiddenEv,b4,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b4,__ZNK7WebCore8Document10eventQueueEv,b4,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b4,ii___ZNK7WebCore4Node9localNameEv__wrapper
  ,b4,ii___ZNK7WebCore8Document8nodeTypeEv__wrapper,b4,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b4,__ZNK7WebCore8Document23canContainRangeEndPointEv,b4,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b4,__ZN7WebCore4Node11sheetLoadedEv,b4,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b4,__ZNK7WebCore4Node14customPseudoIdEv,b4,__ZNK7WebCore4Node21isMediaControlElementEv,b4,__ZThn88_NK7WebCore8Document22isJSExecutionForbiddenEv,b4,__ZNK7WebCore4Node19isCharacterDataNodeEv,b4,ii___ZN7WebCore4Node6toNodeEv__wrapper,b4,__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv,b4,ii___ZNK7WebCore8Document15isContextThreadEv__wrapper,b4,ii___ZNK7WebCore9TreeScope17applyAuthorStylesEv__wrapper,b4,__ZNK7WebCore4Node15isMediaControlsEv
  ,b4,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b4,__ZThn88_NK7WebCore8Document10isDocumentEv,b4,__ZNK7WebCore4Node15isAttributeNodeEv,b4,__ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,viii___ZThn88_NK7WebCore8Document11completeURLERKN3WTF6StringE__wrapper,b5,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b5,viii___ZN7WebCore8Document9cloneNodeEb__wrapper,b5,viii___ZThn88_NK7WebCore8Document9userAgentERKNS_3URLE__wrapper,b5,viii___ZNK7WebCore8Document9userAgentERKNS_3URLE__wrapper,b5,viii___ZNK7WebCore8Document11completeURLERKN3WTF6StringE__wrapper,b5,viii___ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi__wrapper,b5];
  var FUNCTION_TABLE_v = [b6,b6,v___ZThn88_N7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE__wrapper,b6,v___ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper,b6,v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b6,v___ZN7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper,b6,v___ZThn88_N7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper,b6,v___ZThn88_N7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper,b6,v___ZN7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE__wrapper,b6];
  var FUNCTION_TABLE_iiiii = [b7,b7,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b7,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,iii___ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE__wrapper,b8,__ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE,b8,iii___ZNK7WebCore8Document16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b8,iii___ZN7WebCore4Node13computedStyleENS_8PseudoIdE__wrapper,b8,b8,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,__ZN7WebCore22HTMLViewSourceDocumentC2EPNS_5FrameERKNS_3URLERKN3WTF6StringE,b9,viiii___ZN7WebCore12HTMLDocument13createElementERKN3WTF12AtomicStringERi__wrapper,b9,b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9classAttrE": __ZN7WebCore9HTMLNames9classAttrE, "__ZN7WebCore9HTMLNames7baseTagE": __ZN7WebCore9HTMLNames7baseTagE, "__ZN7WebCore9HTMLNames8tbodyTagE": __ZN7WebCore9HTMLNames8tbodyTagE, "__ZN7WebCore9HTMLNames10targetAttrE": __ZN7WebCore9HTMLNames10targetAttrE, "__ZN7WebCore9HTMLNames7spanTagE": __ZN7WebCore9HTMLNames7spanTagE, "__ZN7WebCore9HTMLNames7srcAttrE": __ZN7WebCore9HTMLNames7srcAttrE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE, "__ZN7WebCore9HTMLNames5tdTagE": __ZN7WebCore9HTMLNames5tdTagE, "__ZN7WebCore9HTMLNames8hrefAttrE": __ZN7WebCore9HTMLNames8hrefAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZThn88_NK7WebCore8Document3urlEv","__ZThn44_N7WebCore22HTMLViewSourceDocumentD0Ev","__ZN7WebCore22HTMLViewSourceDocument9addSourceERKN3WTF6StringERNS_9HTMLTokenE","__ZNK7WebCore8Document23canContainRangeEndPointEv","__ZNK7WebCore8Document10isDocumentEv","__ZThn88_N7WebCore22HTMLViewSourceDocumentD0Ev","_strlen","__ZNK7WebCore4Node16nonRendererStyleEv","__ZThn2288_N7WebCore22HTMLViewSourceDocumentD1Ev","__ZN7WebCore22HTMLViewSourceDocument21createContainingTableEv","__ZN7WebCore22HTMLViewSourceDocumentD1Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZN7WebCore22HTMLViewSourceDocumentD0Ev","__ZN7WebCore22HTMLViewSourceDocument7addBaseERKN3WTF12AtomicStringE","__ZNK7WebCore8Document3urlEv","__ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE","__ZN7WebCore4Node20beginParsingChildrenEv","__ZN7WebCore22HTMLViewSourceDocumentD2Ev","__ZN7WebCore8Document27derefScriptExecutionContextEv","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZThn88_N7WebCore22HTMLViewSourceDocumentD1Ev","__ZThn88_NK7WebCore8Document22isJSExecutionForbiddenEv","_memset","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore4Node15isPluginElementEv","__ZNK7WebCore8Document22isJSExecutionForbiddenEv","__ZN7WebCore22HTMLViewSourceDocument20addSpanWithClassNameERKN3WTF12AtomicStringE","__ZNK7WebCore8Document10eventQueueEv","__ZThn88_N7WebCore8Document27derefScriptExecutionContextEv","__ZN7WebCore22HTMLViewSourceDocument8addRangeERKN3WTF6StringEiiS4_bbS4_","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore4Node14customPseudoIdEv","__ZN7WebCore22HTMLViewSourceDocument19processDoctypeTokenERKN3WTF6StringERNS_9HTMLTokenE","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv","__ZThn44_N7WebCore22HTMLViewSourceDocumentD1Ev","__ZN7WebCore4Node21finishParsingChildrenEv","__ZN7WebCore22HTMLViewSourceDocumentC2EPNS_5FrameERKNS_3URLERKN3WTF6StringE","__ZN7WebCore22HTMLViewSourceDocument7addLinkERKN3WTF12AtomicStringEb","__ZThn88_NK7WebCore8Document10eventQueueEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore8Document25refScriptExecutionContextEv","__ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv","__ZN7WebCore22HTMLViewSourceDocument7addTextERKN3WTF6StringERKNS1_12AtomicStringE","__ZN7WebCore22HTMLViewSourceDocument19processCommentTokenERKN3WTF6StringERNS_9HTMLTokenE","__ZN7WebCore22HTMLViewSourceDocument15processTagTokenERKN3WTF6StringERNS_9HTMLTokenE","__ZNK7WebCore4Node15isMediaControlsEv","__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE","__ZThn88_NK7WebCore8Document10isDocumentEv","__ZN7WebCore22HTMLViewSourceDocument7addLineERKN3WTF12AtomicStringE","__ZN7WebCore22HTMLViewSourceDocument21processCharacterTokenERKN3WTF6StringERNS_9HTMLTokenE","_memcpy","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZThn88_N7WebCore8Document25refScriptExecutionContextEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZThn2288_N7WebCore22HTMLViewSourceDocumentD0Ev","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZN7WebCore22HTMLViewSourceDocument12createParserEv","__ZN7WebCore22HTMLViewSourceDocument10finishLineEv"]

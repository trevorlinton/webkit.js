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
H_BASE = parentModule["_malloc"](312 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 312;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore16PageRuntimeAgentC1EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_4PageEPNS_18InspectorPageAgentE;
var __ZN7WebCore16PageRuntimeAgentD1Ev;
/* memory initializer */ allocate([105,100,0,0,0,0,0,0,105,115,80,97,103,101,67,111,110,116,101,120,116,0,0,0,110,97,109,101,0,0,0,0,102,114,97,109,101,73,100,0,69,120,101,99,117,116,105,111,110,32,99,111,110,116,101,120,116,32,119,105,116,104,32,103,105,118,101,110,32,105,100,32,110,111,116,32,102,111,117,110,100,46,0,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,58,32,109,97,105,110,32,119,111,114,108,100,32,101,120,101,99,117,116,105,111,110,32,99,111,110,116,101,120,116,32,110,111,116,32,102,111,117,110,100,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  try {
    Module["dynCall_viiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
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
function invoke_viiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  try {
    Module["dynCall_viiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
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
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
  var __ZTVN9Inspector14InjectedScriptE=env.__ZTVN9Inspector14InjectedScriptE|0;
  var __ZTVN9Inspector18InjectedScriptBaseE=env.__ZTVN9Inspector18InjectedScriptBaseE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore16PageRuntimeAgentE=(H_BASE+152)|0;
  var __ZTVN10Deprecated12ScriptObjectE=(H_BASE+288)|0;
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
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_viiii=env.invoke_viiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiiiiiiiiii=env.invoke_viiiiiiiiiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16PageRuntimeAgent20notifyContextCreatedERKN3WTF6StringEPN3JSC9ExecStateEPNS_14SecurityOriginEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
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
 i26 = __ZN9Inspector21InjectedScriptManager19injectedScriptIdForEPN3JSC9ExecStateE(HEAP32[i1 + 20 >> 2] | 0, i3) | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i24, H_BASE + 312 | 0);
 } else {
  __ZNK7WebCore14SecurityOrigin11toRawStringEv(i24, i4);
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 __ZN9Inspector15InspectorObject6createEv(i23);
 i1 = HEAP32[i23 >> 2] | 0;
 i23 = i1 | 0;
 HEAP32[i22 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i22);
 __ZN9Inspector19InspectorBasicValue6createEd(i20, +(i26 | 0));
 i26 = i19 | 0;
 i22 = i20 | 0;
 i20 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i26 >> 2] = i20;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i23, i21, i19);
 i19 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i26 = i19 + 4 | 0;
   i20 = i26 | 0;
   i3 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i20 >> 2] = i3;
    break;
   }
   i3 = i26 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 i19 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i22 = i19 + 4 | 0;
   i3 = i22 | 0;
   i26 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i3 >> 2] = i26;
    break;
   }
   i26 = i22 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 31](i26);
  }
 } while (0);
 i19 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i21 = i19 | 0;
   i26 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i21 >> 2] = i26;
    break;
   }
  }
 } while (0);
 HEAP32[i18 >> 2] = H_BASE + 16;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
 __ZN9Inspector19InspectorBasicValue6createEb(i16, i5);
 i5 = i15 | 0;
 i18 = i16 | 0;
 i16 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i5 >> 2] = i16;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i23, i17, i15);
 i15 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i5 = i15 + 4 | 0;
   i16 = i5 | 0;
   i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i16 >> 2] = i19;
    break;
   }
   i19 = i5 - 4 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 31](i19);
  }
 } while (0);
 i15 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i18 = i15 + 4 | 0;
   i19 = i18 | 0;
   i5 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i19 >> 2] = i5;
    break;
   }
   i5 = i18 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i15 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i17 = i15 | 0;
   i5 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i17 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i14 >> 2] = H_BASE + 32;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i12, i24);
 i14 = i11 | 0;
 i15 = i12 | 0;
 i12 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i14 >> 2] = i12;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i23, i13, i11);
 i11 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i14 = i11 + 4 | 0;
   i12 = i14 | 0;
   i5 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i12 >> 2] = i5;
    break;
   }
   i5 = i14 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i11 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i15 = i11 + 4 | 0;
   i5 = i15 | 0;
   i14 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i5 >> 2] = i14;
    break;
   }
   i14 = i15 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
  }
 } while (0);
 i11 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i13 = i11 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 HEAP32[i10 >> 2] = H_BASE + 40;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i2);
 i2 = i7 | 0;
 i10 = i8 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i23, i9, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i23 = i2 | 0;
   i8 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i23 >> 2] = i8;
    break;
   }
   i8 = i2 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 4 | 0;
   i8 = i10 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i8 >> 2] = i2;
    break;
   }
   i2 = i10 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i9 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i7 = (i1 | 0) == 0;
 if (!i7) {
  i2 = i1 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = i25 | 0;
 HEAP32[i2 >> 2] = i1;
 __ZN9Inspector34InspectorRuntimeFrontendDispatcher23executionContextCreatedEN3WTF10PassRefPtrINS_11TypeBuilder7Runtime27ExecutionContextDescriptionEEE(i4, i25);
 i25 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i25 | 0) != 0) {
   i2 = i25 + 4 | 0;
   i4 = i2 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i4 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 do {
  if (!i7) {
   i25 = i1 + 4 | 0;
   i9 = i25 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i25 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
  }
 } while (0);
 i1 = HEAP32[i24 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i24 = i1 | 0;
 i7 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i24 >> 2] = i7;
  STACKTOP = i6;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
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
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore16PageRuntimeAgent21injectedScriptForEvalEPN3WTF6StringEPKi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 72 | 0;
 if ((i4 | 0) == 0) {
  i12 = __ZN7WebCore18mainWorldExecStateEPNS_5FrameE(HEAP32[(HEAP32[i2 + 28 >> 2] | 0) + 60 >> 2] | 0) | 0;
  __ZN9Inspector21InjectedScriptManager17injectedScriptForEPN3JSC9ExecStateE(i6, HEAP32[i2 + 20 >> 2] | 0, i12);
  i12 = HEAP32[i6 + 12 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i13 = 4;
  } else {
   if ((HEAP32[i12 + 4 >> 2] | 0) == -6) {
    i13 = 4;
   }
  }
  do {
   if ((i13 | 0) == 4) {
    HEAP32[i8 >> 2] = H_BASE + 96;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
    i12 = i7 | 0;
    i14 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    i15 = i3 | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = i14;
    do {
     if ((i16 | 0) != 0) {
      i14 = i16 | 0;
      i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
      if ((i15 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i16);
       break;
      } else {
       HEAP32[i14 >> 2] = i15;
       break;
      }
     }
    } while (0);
    i16 = HEAP32[i12 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break;
    }
    i15 = i16 | 0;
    i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     break;
    } else {
     HEAP32[i15 >> 2] = i14;
     break;
    }
   }
  } while (0);
  i7 = i1 | 0;
  HEAP32[i7 >> 2] = __ZTVN9Inspector18InjectedScriptBaseE + 8;
  i8 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i1 + 4 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i14 = i8 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
  }
  i14 = i1 + 8 | 0;
  HEAP32[i14 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
  __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1 + 12 | 0, i6 + 12 | 0);
  HEAP32[i14 >> 2] = H_BASE + 296;
  HEAP32[i1 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
  HEAP32[i1 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
  HEAP32[i7 >> 2] = __ZTVN9Inspector14InjectedScriptE + 8;
  __ZN9Inspector14InjectedScriptD1Ev(i6);
  STACKTOP = i5;
  return;
 } else {
  __ZN9Inspector21InjectedScriptManager19injectedScriptForIdEi(i9, HEAP32[i2 + 20 >> 2] | 0, HEAP32[i4 >> 2] | 0);
  i4 = HEAP32[i9 + 12 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i13 = 17;
  } else {
   if ((HEAP32[i4 + 4 >> 2] | 0) == -6) {
    i13 = 17;
   }
  }
  do {
   if ((i13 | 0) == 17) {
    HEAP32[i11 >> 2] = H_BASE + 48;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
    i4 = i10 | 0;
    i2 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = 0;
    i6 = i3 | 0;
    i7 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = i2;
    do {
     if ((i7 | 0) != 0) {
      i2 = i7 | 0;
      i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
      if ((i6 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i2 >> 2] = i6;
       break;
      }
     }
    } while (0);
    i7 = HEAP32[i4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    i12 = i7 | 0;
    i6 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i12 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i3 = i1 | 0;
  HEAP32[i3 >> 2] = __ZTVN9Inspector18InjectedScriptBaseE + 8;
  i10 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i1 + 4 >> 2] = i10;
  if ((i10 | 0) != 0) {
   i11 = i10 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
  }
  i11 = i1 + 8 | 0;
  HEAP32[i11 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
  __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1 + 12 | 0, i9 + 12 | 0);
  HEAP32[i11 >> 2] = H_BASE + 296;
  HEAP32[i1 + 16 >> 2] = HEAP32[i9 + 16 >> 2];
  HEAP32[i1 + 20 >> 2] = HEAP32[i9 + 20 >> 2];
  HEAP32[i3 >> 2] = __ZTVN9Inspector14InjectedScriptE + 8;
  __ZN9Inspector14InjectedScriptD1Ev(i9);
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore16PageRuntimeAgent30reportExecutionContextCreationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = HEAP32[(HEAP32[i1 + 28 >> 2] | 0) + 60 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i1 + 32 | 0;
   i10 = i4 | 0;
   i11 = i8;
   while (1) {
    i12 = i11 + 460 | 0;
    do {
     if (__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(HEAP32[i12 >> 2] | 0, 1) | 0) {
      __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i4, HEAP32[i9 >> 2] | 0, i11);
      __ZN7WebCore16PageRuntimeAgent20notifyContextCreatedERKN3WTF6StringEPN3JSC9ExecStateEPNS_14SecurityOriginEb(i1, i4, __ZN7WebCore18mainWorldExecStateEPNS_5FrameE(i11) | 0, 0, 1);
      __ZN7WebCore16ScriptController23collectIsolatedContextsERN3WTF6VectorINSt3__14pairIPN3JSC9ExecStateEPNS_14SecurityOriginEEELj0ENS1_15CrashOnOverflowEEE(HEAP32[i12 >> 2] | 0, i3);
      do {
       if ((HEAP32[i7 >> 2] | 0) != 0) {
        i13 = 0;
        while (1) {
         i14 = HEAP32[i5 >> 2] | 0;
         __ZN7WebCore16PageRuntimeAgent20notifyContextCreatedERKN3WTF6StringEPN3JSC9ExecStateEPNS_14SecurityOriginEb(i1, i4, HEAP32[i14 + (i13 << 3) >> 2] | 0, HEAP32[i14 + (i13 << 3) + 4 >> 2] | 0, 0);
         i13 = i13 + 1 | 0;
         i15 = HEAP32[i7 >> 2] | 0;
         if (i13 >>> 0 >= i15 >>> 0) {
          break;
         }
        }
        if ((HEAP32[i6 >> 2] | 0) == 0) {
         break;
        }
        if ((i15 | 0) != 0) {
         HEAP32[i7 >> 2] = 0;
        }
        i13 = HEAP32[i5 >> 2] | 0;
        if ((i13 | 0) == 0) {
         break;
        }
        HEAP32[i5 >> 2] = 0;
        HEAP32[i6 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i13);
       }
      } while (0);
      i13 = HEAP32[i10 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      i14 = i13 | 0;
      i16 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
      if ((i16 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i13);
       break;
      } else {
       HEAP32[i14 >> 2] = i16;
       break;
      }
     }
    } while (0);
    i11 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i11 + 40 | 0, 0) | 0;
    if ((i11 | 0) == 0) {
     break;
    }
   }
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = 0;
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i2;
 return;
}
function __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(i2 & -4096) + 12 >> 2] | 0;
 if ((HEAP32[i6 + 84 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i2 = i6 + 80 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i6);
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = i8 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i2 = i8 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i6 + 60 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 + 48;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 + 8 >> 2] = i8;
 i10 = i8 | 0;
 HEAP32[i5 >> 2] = i10;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = 0;
  i12 = 0;
  i13 = -6;
  i14 = 0;
 } else {
  i1 = i9 | 0;
  i9 = HEAP32[i1 >> 2] | 0;
  i7 = HEAP32[i1 + 4 >> 2] | 0;
  i11 = i7 & 0;
  i12 = i9 & -1;
  i13 = i7 & -1;
  i14 = i9 & 0;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i12 | i14;
 HEAP32[i9 + 4 >> 2] = i11 | i13;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16PageRuntimeAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __Znwj(4) | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i1 + 36 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i7 | 0) != 0) {
  __ZdlPv(i7);
 }
 __ZN9Inspector33InspectorRuntimeBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_40InspectorRuntimeBackendDispatcherHandlerE(i5, i3, i1 + 12 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i1 + 40 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 4 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
 i6 = i3 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_viiiiiiiiiii + 4;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_viiiiiiiiii + 4;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_viiiiii + 6;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_viiiiii + 8;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_viiiiiiiiiii + 2;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 10;
}
function __ZN7WebCore16PageRuntimeAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 36 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 i5 = i1 + 40 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 4 | 0;
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 15](i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZThn12_N7WebCore16PageRuntimeAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 - 48 + 36 | 0;
 HEAP32[i2 >> 2] = H_BASE + 160;
 HEAP32[i2 + 12 >> 2] = H_BASE + 236;
 HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] = 0;
 i1 = HEAP32[i2 + 40 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 4 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i1 = i2 + 36 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i5 | 0) == 0) {
  i6 = i2;
  __ZN7WebCore21InspectorRuntimeAgentD2Ev(i6);
  i7 = i2;
  __ZdlPv(i7);
  return;
 }
 __ZdlPv(i5);
 i6 = i2;
 __ZN7WebCore21InspectorRuntimeAgentD2Ev(i6);
 i7 = i2;
 __ZdlPv(i7);
 return;
}
function __ZN7WebCore16PageRuntimeAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 160;
 HEAP32[i1 + 12 >> 2] = H_BASE + 236;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i2 = i1 + 36 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i5 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore21InspectorRuntimeAgentD2Ev(i6);
  i7 = i1;
  __ZdlPv(i7);
  return;
 }
 __ZdlPv(i5);
 i6 = i1 | 0;
 __ZN7WebCore21InspectorRuntimeAgentD2Ev(i6);
 i7 = i1;
 __ZdlPv(i7);
 return;
}
function __ZThn12_N7WebCore16PageRuntimeAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 - 48 + 36 | 0;
 HEAP32[i2 >> 2] = H_BASE + 160;
 HEAP32[i2 + 12 >> 2] = H_BASE + 236;
 HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] = 0;
 i1 = HEAP32[i2 + 40 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 4 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i1 = i2 + 36 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i5 | 0) == 0) {
  i6 = i2;
  __ZN7WebCore21InspectorRuntimeAgentD2Ev(i6);
  return;
 }
 __ZdlPv(i5);
 i6 = i2;
 __ZN7WebCore21InspectorRuntimeAgentD2Ev(i6);
 return;
}
function __ZN7WebCore16PageRuntimeAgent25didCreateMainWorldContextEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP8[i1 + 44 | 0] = 1;
 if ((HEAP8[i1 + 16 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i4, HEAP32[i1 + 32 >> 2] | 0, i2);
 __ZN7WebCore16PageRuntimeAgent20notifyContextCreatedERKN3WTF6StringEPN3JSC9ExecStateEPNS_14SecurityOriginEb(i1, i4, __ZN7WebCore18mainWorldExecStateEPNS_5FrameE(i2) | 0, 0, 1);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore16PageRuntimeAgent24didCreateIsolatedContextEPNS_5FrameEPN3JSC9ExecStateEPNS_14SecurityOriginE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if ((HEAP8[i1 + 16 | 0] & 1) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i6, HEAP32[i1 + 32 >> 2] | 0, i2);
 __ZN7WebCore16PageRuntimeAgent20notifyContextCreatedERKN3WTF6StringEPN3JSC9ExecStateEPNS_14SecurityOriginEb(i1, i6, i3, i4, 0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i4 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore16PageRuntimeAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 160;
 HEAP32[i1 + 12 >> 2] = H_BASE + 236;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i2 = i1 + 36 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i5 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore21InspectorRuntimeAgentD2Ev(i6);
  return;
 }
 __ZdlPv(i5);
 i6 = i1 | 0;
 __ZN7WebCore21InspectorRuntimeAgentD2Ev(i6);
 return;
}
function __ZN7WebCore16PageRuntimeAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 160;
 HEAP32[i1 + 12 >> 2] = H_BASE + 236;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i2 = i1 + 36 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i5 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore21InspectorRuntimeAgentD2Ev(i6);
  return;
 }
 __ZdlPv(i5);
 i6 = i1 | 0;
 __ZN7WebCore21InspectorRuntimeAgentD2Ev(i6);
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function viiiiiiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent14callFunctionOnEPN3WTF6StringERKS2_S5_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKbSD_SD_RNS6_INS7_11TypeBuilder7Runtime12RemoteObjectEEEPNSE_9OptOutputIbEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent14callFunctionOnEPN3WTF6StringERKS2_S5_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKbSD_SD_RNS6_INS7_11TypeBuilder7Runtime12RemoteObjectEEEPNSE_9OptOutputIbEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function viiiiiiiiii___ZN7WebCore21InspectorRuntimeAgent14callFunctionOnEPN3WTF6StringERKS2_S5_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKbSD_SD_RNS6_INS7_11TypeBuilder7Runtime12RemoteObjectEEEPNSE_9OptOutputIbEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 __ZN7WebCore21InspectorRuntimeAgent14callFunctionOnEPN3WTF6StringERKS2_S5_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKbSD_SD_RNS6_INS7_11TypeBuilder7Runtime12RemoteObjectEEEPNSE_9OptOutputIbEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function viiiiiiiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent8evaluateEPN3WTF6StringERKS2_PS4_PKbS8_PKiS8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent8evaluateEPN3WTF6StringERKS2_PS4_PKbS8_PKiS8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function viiiiiiiiiii___ZN7WebCore21InspectorRuntimeAgent8evaluateEPN3WTF6StringERKS2_PS4_PKbS8_PKiS8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 __ZN7WebCore21InspectorRuntimeAgent8evaluateEPN3WTF6StringERKS2_PS4_PKbS8_PKiS8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function __ZN7WebCore16PageRuntimeAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_4PageEPNS_18InspectorPageAgentE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore21InspectorRuntimeAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerE(i1 | 0, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 160;
 HEAP32[i1 + 12 >> 2] = H_BASE + 236;
 HEAP32[i1 + 28 >> 2] = i4;
 HEAP32[i1 + 32 >> 2] = i5;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP8[i1 + 44 | 0] = 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] = i1;
 return;
}
function __ZN7WebCore16PageRuntimeAgentC1EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_4PageEPNS_18InspectorPageAgentE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore21InspectorRuntimeAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerE(i1 | 0, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 160;
 HEAP32[i1 + 12 >> 2] = H_BASE + 236;
 HEAP32[i1 + 28 >> 2] = i4;
 HEAP32[i1 + 32 >> 2] = i5;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP8[i1 + 44 | 0] = 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] = i1;
 return;
}
function viiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent13getPropertiesEPN3WTF6StringERKS2_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_7Runtime18PropertyDescriptorEEEEERNS8_INSB_INSC_26InternalPropertyDescriptorEEEEE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent13getPropertiesEPN3WTF6StringERKS2_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_7Runtime18PropertyDescriptorEEEEERNS8_INSB_INSC_26InternalPropertyDescriptorEEEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viiiiii___ZN7WebCore21InspectorRuntimeAgent13getPropertiesEPN3WTF6StringERKS2_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_7Runtime18PropertyDescriptorEEEEERNS8_INSB_INSC_26InternalPropertyDescriptorEEEEE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore21InspectorRuntimeAgent13getPropertiesEPN3WTF6StringERKS2_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_7Runtime18PropertyDescriptorEEEEERNS8_INSB_INSC_26InternalPropertyDescriptorEEEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent5parseEPN3WTF6StringERKS2_PN9Inspector11TypeBuilder7Runtime15SyntaxErrorType4EnumEPNS7_9OptOutputIS2_EERNS1_6RefPtrINS8_10ErrorRangeEEE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent5parseEPN3WTF6StringERKS2_PN9Inspector11TypeBuilder7Runtime15SyntaxErrorType4EnumEPNS7_9OptOutputIS2_EERNS1_6RefPtrINS8_10ErrorRangeEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
function viiiiii___ZN7WebCore21InspectorRuntimeAgent5parseEPN3WTF6StringERKS2_PN9Inspector11TypeBuilder7Runtime15SyntaxErrorType4EnumEPNS7_9OptOutputIS2_EERNS1_6RefPtrINS8_10ErrorRangeEEE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore21InspectorRuntimeAgent5parseEPN3WTF6StringERKS2_PN9Inspector11TypeBuilder7Runtime15SyntaxErrorType4EnumEPNS7_9OptOutputIS2_EERNS1_6RefPtrINS8_10ErrorRangeEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
function dynCall_viiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 FUNCTION_TABLE_viiiiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0);
}
function dynCall_viiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 FUNCTION_TABLE_viiiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function __ZThn12_N7WebCore16PageRuntimeAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 - 48 + 36 | 0;
 i1 = i2 + 16 | 0;
 if ((HEAP8[i1] & 1) != 0) {
  return;
 }
 HEAP8[i1] = 1;
 if ((HEAP8[i2 + 44 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCore16PageRuntimeAgent30reportExecutionContextCreationEv(i2);
 return;
}
function __ZN7WebCore16PageRuntimeAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 16 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 if ((HEAP8[i1 + 44 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCore16PageRuntimeAgent30reportExecutionContextCreationEv(i1);
 return;
}
function viii___ZThn12_N7WebCore21InspectorRuntimeAgent18releaseObjectGroupEPN3WTF6StringERKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent18releaseObjectGroupEPN3WTF6StringERKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZThn12_N7WebCore21InspectorRuntimeAgent13releaseObjectEPN3WTF6StringERKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent13releaseObjectEPN3WTF6StringERKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore21InspectorRuntimeAgent18releaseObjectGroupEPN3WTF6StringERKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore21InspectorRuntimeAgent18releaseObjectGroupEPN3WTF6StringERKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore21InspectorRuntimeAgent13releaseObjectEPN3WTF6StringERKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore21InspectorRuntimeAgent13releaseObjectEPN3WTF6StringERKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b10(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 abort(10);
}
function b8(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 abort(8);
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
function vii___ZThn12_N7WebCore21InspectorRuntimeAgent3runEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent3runEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function __ZThn12_N7WebCore16PageRuntimeAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 - 48 + 52 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 return;
}
function vii___ZN7WebCore21InspectorRuntimeAgent3runEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore21InspectorRuntimeAgent3runEPN3WTF6StringE(i1 | 0, i2 | 0);
}
function __ZN7WebCore16PageRuntimeAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 16 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
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
function b1(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(1);
}
function __ZN10Deprecated12ScriptObjectD0Ev(i1) {
 i1 = i1 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i1 | 0);
 __ZdlPv(i1);
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
function __ZN7WebCore16PageRuntimeAgent13unmuteConsoleEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11PageConsole6unmuteEv();
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN7WebCore16PageRuntimeAgent11muteConsoleEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11PageConsole4muteEv();
 return;
}
function __ZN10Deprecated12ScriptObjectD1Ev(i1) {
 i1 = i1 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i1 | 0);
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
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
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore16PageRuntimeAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_4PageEPNS_18InspectorPageAgentE,b0];
  var FUNCTION_TABLE_viiiiii = [b1,b1,viiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent13getPropertiesEPN3WTF6StringERKS2_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_7Runtime18PropertyDescriptorEEEEERNS8_INSB_INSC_26InternalPropertyDescriptorEEEEE__wrapper,b1,viiiiii___ZN7WebCore21InspectorRuntimeAgent5parseEPN3WTF6StringERKS2_PN9Inspector11TypeBuilder7Runtime15SyntaxErrorType4EnumEPNS7_9OptOutputIS2_EERNS1_6RefPtrINS8_10ErrorRangeEEE__wrapper,b1,viiiiii___ZN7WebCore21InspectorRuntimeAgent13getPropertiesEPN3WTF6StringERKS2_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_7Runtime18PropertyDescriptorEEEEERNS8_INSB_INSC_26InternalPropertyDescriptorEEEEE__wrapper,b1,viiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent5parseEPN3WTF6StringERKS2_PN9Inspector11TypeBuilder7Runtime15SyntaxErrorType4EnumEPNS7_9OptOutputIS2_EERNS1_6RefPtrINS8_10ErrorRangeEEE__wrapper,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_viiii = [b2,b2,__ZN7WebCore16PageRuntimeAgent21injectedScriptForEvalEPN3WTF6StringEPKi,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore16PageRuntimeAgent29willDestroyFrontendAndBackendEv,b3,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b3,__ZThn12_N7WebCore16PageRuntimeAgentD1Ev,b3,__ZN7WebCore16PageRuntimeAgentD2Ev,b3,__ZN10Deprecated12ScriptObjectD0Ev,b3,__ZN7WebCore16PageRuntimeAgent13unmuteConsoleEv,b3,__ZThn12_N7WebCore16PageRuntimeAgentD0Ev,b3,__ZN10Deprecated12ScriptObjectD1Ev,b3,__ZN7WebCore16PageRuntimeAgent11muteConsoleEv,b3,__ZN7WebCore16PageRuntimeAgentD0Ev,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,vii___ZThn12_N7WebCore21InspectorRuntimeAgent3runEPN3WTF6StringE__wrapper,b4,vii___ZN7WebCore21InspectorRuntimeAgent3runEPN3WTF6StringE__wrapper,b4,__ZN7WebCore16PageRuntimeAgent7disableEPN3WTF6StringE,b4,__ZThn12_N7WebCore16PageRuntimeAgent6enableEPN3WTF6StringE,b4,__ZThn12_N7WebCore16PageRuntimeAgent7disableEPN3WTF6StringE,b4,__ZN7WebCore16PageRuntimeAgent6enableEPN3WTF6StringE,b4,b4,b4];
  var FUNCTION_TABLE_ii = [b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,viii___ZThn12_N7WebCore21InspectorRuntimeAgent13releaseObjectEPN3WTF6StringERKS2___wrapper,b6,viii___ZThn12_N7WebCore21InspectorRuntimeAgent18releaseObjectGroupEPN3WTF6StringERKS2___wrapper,b6,viii___ZN7WebCore21InspectorRuntimeAgent13releaseObjectEPN3WTF6StringERKS2___wrapper,b6,viii___ZN7WebCore21InspectorRuntimeAgent18releaseObjectGroupEPN3WTF6StringERKS2___wrapper,b6,__ZN7WebCore16PageRuntimeAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_viiiiiiiiii = [b8,b8,viiiiiiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent14callFunctionOnEPN3WTF6StringERKS2_S5_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKbSD_SD_RNS6_INS7_11TypeBuilder7Runtime12RemoteObjectEEEPNSE_9OptOutputIbEE__wrapper,b8,viiiiiiiiii___ZN7WebCore21InspectorRuntimeAgent14callFunctionOnEPN3WTF6StringERKS2_S5_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKbSD_SD_RNS6_INS7_11TypeBuilder7Runtime12RemoteObjectEEEPNSE_9OptOutputIbEE__wrapper,b8,b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9];
  var FUNCTION_TABLE_viiiiiiiiiii = [b10,b10,viiiiiiiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent8evaluateEPN3WTF6StringERKS2_PS4_PKbS8_PKiS8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE__wrapper,b10,viiiiiiiiiii___ZN7WebCore21InspectorRuntimeAgent8evaluateEPN3WTF6StringERKS2_PS4_PKbS8_PKiS8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE__wrapper,b10,b10,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_viiii: dynCall_viiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_iii: dynCall_iii, dynCall_viiiiiiiiiii: dynCall_viiiiiiiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_viiii": invoke_viiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_iii": invoke_iii, "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE, "__ZTVN9Inspector14InjectedScriptE": __ZTVN9Inspector14InjectedScriptE, "__ZTVN9Inspector18InjectedScriptBaseE": __ZTVN9Inspector18InjectedScriptBaseE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = asm["dynCall_viiiiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore16PageRuntimeAgent30reportExecutionContextCreationEv","_strlen","__ZN7WebCore16PageRuntimeAgent25didCreateMainWorldContextEPNS_5FrameE","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZN7WebCore16PageRuntimeAgent20notifyContextCreatedERKN3WTF6StringEPN3JSC9ExecStateEPNS_14SecurityOriginEb","__ZN7WebCore16PageRuntimeAgent7disableEPN3WTF6StringE","__ZN10Deprecated12ScriptObjectD1Ev","_memset","_memcpy","__ZN7WebCore16PageRuntimeAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_4PageEPNS_18InspectorPageAgentE","__ZN7WebCore16PageRuntimeAgentD2Ev","__ZN10Deprecated12ScriptObjectD0Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZThn12_N7WebCore16PageRuntimeAgent6enableEPN3WTF6StringE","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore16PageRuntimeAgent29willDestroyFrontendAndBackendEv","__ZThn12_N7WebCore16PageRuntimeAgent7disableEPN3WTF6StringE","__ZN7WebCore16PageRuntimeAgent24didCreateIsolatedContextEPNS_5FrameEPN3JSC9ExecStateEPNS_14SecurityOriginE","__ZN7WebCore16PageRuntimeAgent21injectedScriptForEvalEPN3WTF6StringEPKi","__ZN3JSC6StrongINS_7UnknownEEC2ERKS2_","__ZN7WebCore16PageRuntimeAgent13unmuteConsoleEv","__ZThn12_N7WebCore16PageRuntimeAgentD0Ev","__ZThn12_N7WebCore16PageRuntimeAgentD1Ev","__ZN7WebCore16PageRuntimeAgent6enableEPN3WTF6StringE","__ZN7WebCore16PageRuntimeAgent11muteConsoleEv","__ZN7WebCore16PageRuntimeAgentD0Ev","__ZN7WebCore16PageRuntimeAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE"]

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
H_BASE = parentModule["_malloc"](840 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 840;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22HTMLPlugInImageElementD1Ev;
/* memory initializer */ allocate([46,115,110,97,112,115,104,111,116,45,111,118,101,114,108,97,121,0,0,0,0,0,0,0,99,114,101,97,116,101,79,118,101,114,108,97,121,0,0,0,100,97,116,97,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZN7WebCore9HTMLNames8nameAttrE=env.__ZN7WebCore9HTMLNames8nameAttrE|0;
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore5TimerINS_22HTMLPlugInImageElementEEE=(H_BASE+56)|0;
  var __ZTVN7WebCore22DeferrableOneShotTimerINS_22HTMLPlugInImageElementEEE=(H_BASE+752)|0;
  var __ZTVN7WebCore22HTMLPlugInImageElementE=(H_BASE+88)|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
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
function __ZN7WebCore22HTMLPlugInImageElement25didAddUserAgentShadowRootEPNS_10ShadowRootE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 320 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 64 | 0;
 i12 = i3 + 72 | 0;
 i13 = i3 + 80 | 0;
 i14 = i3 + 88 | 0;
 i15 = i3 + 96 | 0;
 i16 = i3 + 112 | 0;
 i17 = i3 + 120 | 0;
 i18 = i3 + 128 | 0;
 i19 = i3 + 136 | 0;
 i20 = i3 + 144 | 0;
 i21 = i3 + 224 | 0;
 i22 = i3 + 232 | 0;
 i23 = i3 + 240 | 0;
 i24 = i3 + 248 | 0;
 i25 = i3 + 256 | 0;
 i26 = i3 + 264 | 0;
 i27 = i3 + 272 | 0;
 i28 = i3 + 280 | 0;
 i29 = i3 + 288 | 0;
 i30 = i3 + 296 | 0;
 i31 = i3 + 304 | 0;
 i32 = i3 + 312 | 0;
 __ZN7WebCore17HTMLPlugInElement25didAddUserAgentShadowRootEPNS_10ShadowRootE(i1 | 0, i2);
 if ((HEAP32[i1 + 140 >> 2] | 0) > 4) {
  STACKTOP = i3;
  return;
 }
 i33 = i1 + 20 | 0;
 i34 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i33 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i34 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore10ShadowRoot24setResetStyleInheritanceEb(i2, 1);
 i35 = HEAP32[i1 + 148 >> 2] | 0;
 if ((i35 | 0) == 0) {
  i36 = 0;
  i37 = 5;
 } else {
  i38 = i35 | 0;
  HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
  if ((HEAP32[i35 + 4 >> 2] | 0) == 0) {
   i36 = i35;
   i37 = 5;
  } else {
   i39 = i35;
  }
 }
 do {
  if ((i37 | 0) == 5) {
   __ZN7WebCore15mimeTypeFromURLERKNS_3URLE(i17, i1 + 156 | 0);
   i35 = i17 | 0;
   i38 = HEAP32[i35 >> 2] | 0;
   HEAP32[i35 >> 2] = 0;
   if ((i36 | 0) == 0) {
    i39 = i38;
    break;
   }
   i40 = i36 | 0;
   i41 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
   if ((i41 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i36);
   } else {
    HEAP32[i40 >> 2] = i41;
   }
   i41 = HEAP32[i35 >> 2] | 0;
   if ((i41 | 0) == 0) {
    i39 = i38;
    break;
   }
   i35 = i41 | 0;
   i40 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
   if ((i40 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i41);
    i39 = i38;
    break;
   } else {
    HEAP32[i35 >> 2] = i40;
    i39 = i38;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 792 | 0] | 0) {
  i42 = HEAP32[H_BASE + 824 >> 2] | 0;
 } else {
  i36 = __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0;
  i17 = __ZN3WTF10fastMallocEj(96) | 0;
  __ZN7WebCore15DOMWrapperWorldC1EPN3JSC2VMEb(i17, i36, 0);
  HEAP32[H_BASE + 824 >> 2] = i17;
  HEAP8[H_BASE + 792 | 0] = 1;
  i42 = i17;
 }
 __ZN7WebCore8Document27ensurePlugInsInjectedScriptERNS_15DOMWrapperWorldE(HEAP32[(HEAP32[i33 >> 2] | 0) + 8 >> 2] | 0, i42);
 i33 = HEAP32[(__ZN7WebCore16ScriptController11windowShellERNS_15DOMWrapperWorldE(HEAP32[(HEAP32[i34 + 60 >> 2] | 0) + 460 >> 2] | 0, i42) | 0) + 12 >> 2] | 0;
 i42 = i33;
 i17 = __ZN3JSC14JSGlobalObject10globalExecEv(i33) | 0;
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i19, i17);
 i36 = i20 | 0;
 HEAP32[i36 >> 2] = 0;
 i38 = i20 + 4 | 0;
 HEAP32[i38 >> 2] = 8;
 i40 = i20 + 72 | 0;
 HEAP32[i40 >> 2] = i20 + 8;
 i35 = i20 + 76 | 0;
 HEAP32[i35 >> 2] = 0;
 i41 = i2 | 0;
 L25 : do {
  if ((i2 | 0) == 0) {
   HEAP32[i21 + 4 >> 2] = -3;
   HEAP32[i21 >> 2] = 0;
   i37 = 34;
  } else {
   i43 = HEAP32[(HEAP32[(HEAP32[HEAP32[i17 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
   do {
    if ((HEAP8[i43 + 92 | 0] & 1) == 0) {
     i37 = 23;
    } else {
     i44 = HEAP32[i2 + 4 >> 2] | 0;
     if ((i44 | 0) == 0) {
      i37 = 23;
      break;
     }
     if ((HEAP32[i44 + 8 >> 2] & 3 | 0) != 0) {
      i37 = 23;
      break;
     }
     i45 = HEAP32[i44 >> 2] | 0;
     if ((i45 | 0) == 0) {
      i37 = 23;
      break;
     }
     i46 = i45 | 0;
     i37 = 32;
    }
   } while (0);
   L33 : do {
    if ((i37 | 0) == 23) {
     i45 = i2;
     i44 = HEAP32[i43 + 12 >> 2] | 0;
     i47 = HEAP32[i43 + 4 >> 2] | 0;
     i48 = i2;
     i49 = i48 + ~(i48 << 15) | 0;
     i48 = (i49 >>> 10 ^ i49) * 9 & -1;
     i49 = i48 >>> 6 ^ i48;
     i48 = i49 + ~(i49 << 11) | 0;
     i49 = i48 >>> 16 ^ i48;
     if ((i47 | 0) == 0) {
      break;
     }
     i48 = i44 & i49;
     i50 = i47 + (i48 << 3) | 0;
     i51 = HEAP32[i50 >> 2] | 0;
     if ((i51 | 0) == (i45 | 0)) {
      i52 = i50;
     } else {
      i50 = (i49 >>> 23) + ~i49 | 0;
      i49 = i50 << 12 ^ i50;
      i50 = i49 >>> 7 ^ i49;
      i49 = i50 << 2 ^ i50;
      i50 = i49 >>> 20 ^ i49 | 1;
      i49 = 0;
      i53 = i48;
      i48 = i51;
      while (1) {
       if ((i48 | 0) == 0) {
        break L33;
       }
       i51 = (i49 | 0) == 0 ? i50 : i49;
       i54 = i51 + i53 & i44;
       i55 = i47 + (i54 << 3) | 0;
       i56 = HEAP32[i55 >> 2] | 0;
       if ((i56 | 0) == (i45 | 0)) {
        i52 = i55;
        break;
       } else {
        i49 = i51;
        i53 = i54;
        i48 = i56;
       }
      }
     }
     if ((i52 | 0) == 0) {
      break;
     }
     i48 = HEAP32[i52 + 4 >> 2] | 0;
     if ((i48 | 0) == 0) {
      break;
     }
     if ((HEAP32[i48 + 8 >> 2] & 3 | 0) != 0) {
      break;
     }
     i46 = HEAP32[i48 >> 2] | 0;
     i37 = 32;
    }
   } while (0);
   do {
    if ((i37 | 0) == 32) {
     if ((i46 | 0) == 0) {
      break;
     }
     HEAP32[i21 + 4 >> 2] = -5;
     HEAP32[i21 >> 2] = i46;
     i37 = 34;
     break L25;
    }
   } while (0);
   __ZN7WebCore13createWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i21, i17, i42, i41);
   i43 = HEAP32[i36 >> 2] | 0;
   i48 = i21 | 0;
   i53 = HEAP32[i48 >> 2] | 0;
   i49 = HEAP32[i48 + 4 >> 2] | 0;
   i48 = i16;
   if ((i43 | 0) < (HEAP32[i38 >> 2] | 0)) {
    i57 = i43;
    i58 = i49;
    i59 = i53;
    i60 = i48;
    i37 = 37;
    break;
   }
   i43 = i16 | 0;
   HEAP32[i43 >> 2] = i53;
   HEAP32[i43 + 4 >> 2] = i49;
   __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i20, i16);
   i61 = i48;
  }
 } while (0);
 if ((i37 | 0) == 34) {
  i41 = i21 | 0;
  i57 = 0;
  i58 = HEAP32[i41 + 4 >> 2] | 0;
  i59 = HEAP32[i41 >> 2] | 0;
  i60 = i16;
  i37 = 37;
 }
 if ((i37 | 0) == 37) {
  i16 = (HEAP32[i40 >> 2] | 0) + (i57 << 3) | 0;
  HEAP32[i16 >> 2] = i59;
  HEAP32[i16 + 4 >> 2] = i58;
  HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
  i61 = i60;
 }
 i60 = i23 | 0;
 HEAP32[i60 >> 2] = i39;
 i61 = (i39 | 0) == 0;
 if (!i61) {
  i58 = i39 | 0;
  HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 2;
 }
 if (HEAP8[H_BASE + 784 | 0] | 0) {
  i62 = HEAP32[H_BASE + 816 >> 2] | 0;
 } else {
  i58 = __ZN3WTF10fastMallocEj(20) | 0;
  i16 = i58;
  _memset(i58 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 816 >> 2] = i16;
  HEAP8[H_BASE + 784 | 0] = 1;
  i62 = i16;
 }
 __ZNK3WTF7HashMapINS_6StringES1_NS_10StringHashENS_10HashTraitsIS1_EES4_E3getERKS1_(i22, i62, i23);
 i62 = i22 | 0;
 i16 = HEAP32[i62 >> 2] | 0;
 i58 = (i16 | 0) == 0;
 if (i58) {
  i37 = 45;
 } else {
  if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
   i37 = 45;
  } else {
   i63 = i16;
  }
 }
 do {
  if ((i37 | 0) == 45) {
   i59 = HEAP32[(HEAP32[i34 + 20 >> 2] | 0) + 8 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i59 >> 2] | 0) + 428 >> 2] & 15](i13, i59, i23);
   i59 = i13 | 0;
   i57 = HEAP32[i59 >> 2] | 0;
   HEAP32[i59 >> 2] = 0;
   HEAP32[i62 >> 2] = i57;
   do {
    if (!i58) {
     i41 = i16 | 0;
     i21 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i41 >> 2] = i21;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i59 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i41 = i21 | 0;
     i42 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
     if ((i42 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i41 >> 2] = i42;
      break;
     }
    }
   } while (0);
   i21 = (i57 | 0) == 0;
   if (i21) {
    i37 = 55;
   } else {
    if ((HEAP32[i57 + 4 >> 2] | 0) == 0) {
     i37 = 55;
    }
   }
   do {
    if ((i37 | 0) == 55) {
     __ZN7WebCore27snapshottedPlugInLabelTitleEv(i14);
     i59 = i14 | 0;
     i42 = HEAP32[i59 >> 2] | 0;
     HEAP32[i59 >> 2] = 0;
     HEAP32[i62 >> 2] = i42;
     do {
      if (!i21) {
       i42 = i57 | 0;
       i41 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
       if ((i41 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i57);
        break;
       } else {
        HEAP32[i42 >> 2] = i41;
        break;
       }
      }
     } while (0);
     i41 = HEAP32[i59 >> 2] | 0;
     if ((i41 | 0) == 0) {
      break;
     }
     i42 = i41 | 0;
     i46 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
     if ((i46 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i41);
      break;
     } else {
      HEAP32[i42 >> 2] = i46;
      break;
     }
    }
   } while (0);
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_RS1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i15, HEAP32[H_BASE + 816 >> 2] | 0, i23, i22);
   if ((HEAP8[i15 + 8 | 0] & 1) != 0) {
    i63 = HEAP32[i62 >> 2] | 0;
    break;
   }
   i57 = HEAP32[i15 >> 2] | 0;
   i21 = HEAP32[i62 >> 2] | 0;
   if ((i21 | 0) != 0) {
    i46 = i21 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 2;
   }
   i46 = i57 + 4 | 0;
   i57 = HEAP32[i46 >> 2] | 0;
   HEAP32[i46 >> 2] = i21;
   if ((i57 | 0) == 0) {
    i63 = i21;
    break;
   }
   i46 = i57 | 0;
   i42 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
   if ((i42 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i57);
    i63 = i21;
    break;
   } else {
    HEAP32[i46 >> 2] = i42;
    i63 = i21;
    break;
   }
  }
 } while (0);
 i62 = i17 + 16 | 0;
 i15 = HEAP32[(HEAP32[i62 >> 2] & -65536) + 1076 >> 2] | 0;
 i22 = (i63 | 0) == 0;
 L104 : do {
  if (i22) {
   i37 = 73;
  } else {
   i23 = HEAP32[i63 + 4 >> 2] | 0;
   do {
    if ((i23 | 0) == 0) {
     i37 = 73;
     break L104;
    } else if ((i23 | 0) == 1) {
     i14 = i63 + 8 | 0;
     if ((HEAP32[i63 + 16 >> 2] & 32 | 0) == 0) {
      i16 = HEAP16[HEAP32[i14 >> 2] >> 1] | 0;
      if ((i16 & 65535) >>> 0 < 256 >>> 0) {
       i64 = i16 & 255;
      } else {
       break;
      }
     } else {
      i64 = HEAP8[HEAP32[i14 >> 2] | 0] | 0;
     }
     i65 = HEAP32[i15 + 20932 + ((i64 & 255) << 2) >> 2] | 0;
     break L104;
    }
   } while (0);
   i23 = i12 | 0;
   HEAP32[i23 >> 2] = i63;
   i14 = i63 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   i14 = __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i15, i12) | 0;
   i16 = HEAP32[i23 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i65 = i14;
    break;
   }
   i23 = i16 | 0;
   i58 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i58 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    i65 = i14;
    break;
   } else {
    HEAP32[i23 >> 2] = i58;
    i65 = i14;
    break;
   }
  }
 } while (0);
 if ((i37 | 0) == 73) {
  i65 = HEAP32[i15 + 20892 >> 2] | 0;
 }
 i15 = (i65 | 0) == 0;
 i12 = HEAP32[i36 >> 2] | 0;
 i64 = (i15 ? 0 : 0) | i65;
 i65 = (i15 ? -6 : -5) | 0;
 if ((i12 | 0) < (HEAP32[i38 >> 2] | 0)) {
  i15 = (HEAP32[i40 >> 2] | 0) + (i12 << 3) | 0;
  HEAP32[i15 >> 2] = i64;
  HEAP32[i15 + 4 >> 2] = i65;
  HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
 } else {
  i15 = i11 | 0;
  HEAP32[i15 >> 2] = i64;
  HEAP32[i15 + 4 >> 2] = i65;
  __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i20, i11);
 }
 do {
  if (!i22) {
   i11 = i63 | 0;
   i65 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i65 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i63);
    break;
   } else {
    HEAP32[i11 >> 2] = i65;
    break;
   }
  }
 } while (0);
 i63 = HEAP32[i60 >> 2] | 0;
 do {
  if ((i63 | 0) != 0) {
   i60 = i63 | 0;
   i22 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i63);
    break;
   } else {
    HEAP32[i60 >> 2] = i22;
    break;
   }
  }
 } while (0);
 i63 = i25 | 0;
 HEAP32[i63 >> 2] = i39;
 if (!i61) {
  i22 = i39 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
 }
 if (HEAP8[H_BASE + 800 | 0] | 0) {
  i66 = HEAP32[H_BASE + 832 >> 2] | 0;
 } else {
  i22 = __ZN3WTF10fastMallocEj(20) | 0;
  i60 = i22;
  _memset(i22 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 832 >> 2] = i60;
  HEAP8[H_BASE + 800 | 0] = 1;
  i66 = i60;
 }
 __ZNK3WTF7HashMapINS_6StringES1_NS_10StringHashENS_10HashTraitsIS1_EES4_E3getERKS1_(i24, i66, i25);
 i66 = i24 | 0;
 i60 = HEAP32[i66 >> 2] | 0;
 i22 = (i60 | 0) == 0;
 if (i22) {
  i37 = 100;
 } else {
  if ((HEAP32[i60 + 4 >> 2] | 0) == 0) {
   i37 = 100;
  } else {
   i67 = i60;
  }
 }
 do {
  if ((i37 | 0) == 100) {
   i65 = HEAP32[(HEAP32[i34 + 20 >> 2] | 0) + 8 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i65 >> 2] | 0) + 432 >> 2] & 15](i8, i65, i25);
   i65 = i8 | 0;
   i11 = HEAP32[i65 >> 2] | 0;
   HEAP32[i65 >> 2] = 0;
   HEAP32[i66 >> 2] = i11;
   do {
    if (!i22) {
     i15 = i60 | 0;
     i64 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i64 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      break;
     } else {
      HEAP32[i15 >> 2] = i64;
      break;
     }
    }
   } while (0);
   i64 = HEAP32[i65 >> 2] | 0;
   do {
    if ((i64 | 0) != 0) {
     i15 = i64 | 0;
     i12 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i64);
      break;
     } else {
      HEAP32[i15 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i64 = (i11 | 0) == 0;
   if (i64) {
    i37 = 110;
   } else {
    if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
     i37 = 110;
    }
   }
   do {
    if ((i37 | 0) == 110) {
     __ZN7WebCore30snapshottedPlugInLabelSubtitleEv(i9);
     i65 = i9 | 0;
     i12 = HEAP32[i65 >> 2] | 0;
     HEAP32[i65 >> 2] = 0;
     HEAP32[i66 >> 2] = i12;
     do {
      if (!i64) {
       i12 = i11 | 0;
       i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i11);
        break;
       } else {
        HEAP32[i12 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i59 = HEAP32[i65 >> 2] | 0;
     if ((i59 | 0) == 0) {
      break;
     }
     i15 = i59 | 0;
     i12 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i59);
      break;
     } else {
      HEAP32[i15 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_RS1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i10, HEAP32[H_BASE + 832 >> 2] | 0, i25, i24);
   if ((HEAP8[i10 + 8 | 0] & 1) != 0) {
    i67 = HEAP32[i66 >> 2] | 0;
    break;
   }
   i11 = HEAP32[i10 >> 2] | 0;
   i64 = HEAP32[i66 >> 2] | 0;
   if ((i64 | 0) != 0) {
    i12 = i64 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   }
   i12 = i11 + 4 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i64;
   if ((i11 | 0) == 0) {
    i67 = i64;
    break;
   }
   i12 = i11 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    i67 = i64;
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    i67 = i64;
    break;
   }
  }
 } while (0);
 i66 = HEAP32[(HEAP32[i62 >> 2] & -65536) + 1076 >> 2] | 0;
 i10 = (i67 | 0) == 0;
 L185 : do {
  if (i10) {
   i37 = 128;
  } else {
   i24 = HEAP32[i67 + 4 >> 2] | 0;
   do {
    if ((i24 | 0) == 0) {
     i37 = 128;
     break L185;
    } else if ((i24 | 0) == 1) {
     i25 = i67 + 8 | 0;
     if ((HEAP32[i67 + 16 >> 2] & 32 | 0) == 0) {
      i9 = HEAP16[HEAP32[i25 >> 2] >> 1] | 0;
      if ((i9 & 65535) >>> 0 < 256 >>> 0) {
       i68 = i9 & 255;
      } else {
       break;
      }
     } else {
      i68 = HEAP8[HEAP32[i25 >> 2] | 0] | 0;
     }
     i69 = HEAP32[i66 + 20932 + ((i68 & 255) << 2) >> 2] | 0;
     break L185;
    }
   } while (0);
   i24 = i7 | 0;
   HEAP32[i24 >> 2] = i67;
   i25 = i67 | 0;
   HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
   i25 = __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i66, i7) | 0;
   i9 = HEAP32[i24 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i69 = i25;
    break;
   }
   i24 = i9 | 0;
   i60 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i60 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i69 = i25;
    break;
   } else {
    HEAP32[i24 >> 2] = i60;
    i69 = i25;
    break;
   }
  }
 } while (0);
 if ((i37 | 0) == 128) {
  i69 = HEAP32[i66 + 20892 >> 2] | 0;
 }
 i66 = (i69 | 0) == 0;
 i37 = HEAP32[i36 >> 2] | 0;
 i7 = (i66 ? 0 : 0) | i69;
 i69 = (i66 ? -6 : -5) | 0;
 if ((i37 | 0) < (HEAP32[i38 >> 2] | 0)) {
  i66 = (HEAP32[i40 >> 2] | 0) + (i37 << 3) | 0;
  HEAP32[i66 >> 2] = i7;
  HEAP32[i66 + 4 >> 2] = i69;
  HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
 } else {
  i66 = i6 | 0;
  HEAP32[i66 >> 2] = i7;
  HEAP32[i66 + 4 >> 2] = i69;
  __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i20, i6);
 }
 do {
  if (!i10) {
   i6 = i67 | 0;
   i69 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i69 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i67);
    break;
   } else {
    HEAP32[i6 >> 2] = i69;
    break;
   }
  }
 } while (0);
 i67 = HEAP32[i63 >> 2] | 0;
 do {
  if ((i67 | 0) != 0) {
   i63 = i67 | 0;
   i10 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i67);
    break;
   } else {
    HEAP32[i63 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i67 = HEAP32[i36 >> 2] | 0;
 i10 = (HEAP32[i1 + 344 >> 2] | 0) == 0 | 0;
 i1 = -2 | 0;
 if ((i67 | 0) < (HEAP32[i38 >> 2] | 0)) {
  i63 = (HEAP32[i40 >> 2] | 0) + (i67 << 3) | 0;
  HEAP32[i63 >> 2] = i10;
  HEAP32[i63 + 4 >> 2] = i1;
  HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
 } else {
  i63 = i5 | 0;
  HEAP32[i63 >> 2] = i10;
  HEAP32[i63 + 4 >> 2] = i1;
  __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i20, i5);
 }
 __ZN3JSC10Identifier3addEPNS_9ExecStateEPKc(i4, i17, H_BASE + 32 | 0);
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i26 >> 2] = i5;
 __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i27, i33, i17, i26);
 if ((HEAP32[i27 + 4 >> 2] | 0) == -5) {
  i70 = __ZNK3JSC6JSCell8toObjectEPNS_9ExecStateEPNS_14JSGlobalObjectE(HEAP32[i27 >> 2] | 0, i17, HEAP32[(HEAP32[HEAP32[i62 >> 2] >> 2] | 0) + 4 >> 2] | 0) | 0;
 } else {
  i70 = __ZNK3JSC7JSValue16toObjectSlowCaseEPNS_9ExecStateEPNS_14JSGlobalObjectE(i27, i17, HEAP32[(HEAP32[HEAP32[i62 >> 2] >> 2] | 0) + 4 >> 2] | 0) | 0;
 }
 do {
  if ((i5 | 0) != 0) {
   i62 = i5 | 0;
   i27 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i62 >> 2] = i27;
    break;
   }
  }
 } while (0);
 i5 = i70 | 0;
 i27 = HEAP32[i70 >> 2] | 0;
 i62 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i62 | 0) != 0) {
   if ((i62 | 0) == (HEAP32[i62 >> 2] | 0)) {
    break;
   }
   _WTFCrash();
  }
 } while (0);
 i62 = i70;
 i26 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[((HEAP32[(i62 & -65536) + 1048 >> 2] | 0) == 2 ? i70 + 8 | 0 : i27 + 32 | 0) >> 2] | 0) + 28 >> 2] & 31](i5, i28) | 0;
 if ((i26 | 0) != 0) {
  HEAP32[i29 + 4 >> 2] = (i70 | 0) == 0 ? -6 : -5;
  HEAP32[i29 >> 2] = i62;
  HEAP32[i30 + 4 >> 2] = (i33 | 0) == 0 ? -6 : -5;
  HEAP32[i30 >> 2] = i33;
  HEAP32[i31 >> 2] = HEAP32[i40 >> 2];
  HEAP32[i31 + 4 >> 2] = HEAP32[i36 >> 2];
  __ZN3JSC4callEPNS_9ExecStateENS_7JSValueENS_8CallTypeERKNS_8CallDataES2_RKNS_7ArgListE(i32, i17, i29, i26, i28, i30, i31);
 }
 i31 = HEAP32[i35 >> 2] | 0;
 if ((i31 | 0) != 0) {
  HEAP32[i18 >> 2] = i20;
  __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i31, i18) | 0;
 }
 do {
  if ((HEAP32[i38 >> 2] | 0) != 8) {
   i18 = HEAP32[i40 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   __ZdaPv(i18);
  }
 } while (0);
 __ZN3JSC12JSLockHolderD1Ev(i19);
 if (i61) {
  STACKTOP = i3;
  return;
 }
 i61 = i39 | 0;
 i19 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i39);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i61 >> 2] = i19;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22HTMLPlugInImageElement30subframeLoaderWillCreatePlugInERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, d34 = +0, d35 = +0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, d52 = +0, d53 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
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
 i15 = i3 + 96 | 0;
 i16 = i3 + 104 | 0;
 i17 = i3 + 112 | 0;
 i18 = i3 + 120 | 0;
 i19 = i3 + 128 | 0;
 i20 = i3 + 136 | 0;
 i21 = i3 + 144 | 0;
 i22 = i3 + 152 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = i24;
 i26 = i1 + 156 | 0;
 i27 = HEAP32[i2 >> 2] | 0;
 if ((i27 | 0) != 0) {
  i28 = i27 | 0;
  HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
 }
 i28 = i26 | 0;
 i29 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = i27;
 do {
  if ((i29 | 0) != 0) {
   i27 = i29 | 0;
   i30 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i27 >> 2] = i30;
    break;
   }
  }
 } while (0);
 i29 = i2 + 4 | 0;
 i30 = i1 + 160 | 0;
 i27 = HEAP8[i30] & -2 | HEAP8[i29] & 1;
 HEAP8[i30] = i27;
 HEAP8[i30] = i27 & -3 | HEAP8[i29] & 2;
 HEAP32[i1 + 164 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 168 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 172 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 176 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 180 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 184 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 188 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 192 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 196 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 200 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP8[i1 + 351 | 0] = 0;
 HEAP8[i1 + 352 | 0] = 0;
 i29 = i1 + 20 | 0;
 do {
  if ((__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0) {
   if ((HEAP8[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0) | 0) + 48 >> 2] | 0) + 188 | 0] & 64) == 0) {
    break;
   }
   i27 = HEAP32[i1 + 140 >> 2] | 0;
   if ((i27 | 0) == 2) {
    HEAP32[i1 + 364 >> 2] = 1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 608 >> 2] & 127](i1, 4);
    STACKTOP = i3;
    return;
   }
   i30 = i1 + 364 | 0;
   if ((i27 | 0) == 3) {
    HEAP32[i30 >> 2] = 1;
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i30 >> 2] | 0) == 1) {
    STACKTOP = i3;
    return;
   }
   i27 = HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0;
   i31 = HEAP32[i27 + 332 >> 2] | 0;
   i32 = (HEAP32[i31 + 28 >> 2] | 0) == (i31 | 0);
   if (!((HEAP8[i27 + 1576 | 0] & 8) == 0 | i32 ^ 1)) {
    HEAP32[i30 >> 2] = 1;
    STACKTOP = i3;
    return;
   }
   if (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) {
    HEAP32[i30 >> 2] = 1;
    STACKTOP = i3;
    return;
   }
   if ((HEAP8[i1 + 348 | 0] & 1) != 0) {
    HEAP32[i30 >> 2] = 1;
    STACKTOP = i3;
    return;
   }
   i27 = HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0;
   d33 = +HEAPF64[i27 + 1968 >> 3];
   i31 = HEAP32[i27 + 332 >> 2] | 0;
   do {
    if ((i31 | 0) == (HEAP32[(__ZNK7WebCore8Document4pageEv(i27) | 0) + 60 >> 2] | 0)) {
     d34 = d33;
    } else {
     if ((HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(i27) | 0) + 60 >> 2] | 0) + 456 >> 2] | 0) == 0) {
      d34 = d33;
      break;
     }
     d35 = +HEAPF64[(HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(i27) | 0) + 60 >> 2] | 0) + 456 >> 2] | 0) + 1968 >> 3];
     d34 = d33 < d35 ? d35 : d33;
    }
   } while (0);
   if (+__ZN3WTF27monotonicallyIncreasingTimeEv() - d34 < +5) {
    HEAP32[i30 >> 2] = 1;
    STACKTOP = i3;
    return;
   }
   if ((HEAP8[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0) | 0) + 48 >> 2] | 0) + 191 | 0] & 4) != 0) {
    HEAP32[i30 >> 2] = 2;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 608 >> 2] & 127](i1, 0);
    STACKTOP = i3;
    return;
   }
   L48 : do {
    if ((HEAP8[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0) | 0) + 48 >> 2] | 0) + 182 | 0] & 64) != 0) {
     if ((HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0) | 0) + 76 >> 2] | 0) == 0) {
      break;
     }
     i27 = HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0) | 0) + 76 >> 2] | 0;
     i31 = HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] | 0;
     __ZNK7WebCore3URL4hostEv(i15, (HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0) | 0) + 60 >> 2] | 0) + 456 >> 2] | 0) + 404 | 0);
     __ZNK7WebCore3URL4hostEv(i16, i2);
     i36 = i17 | 0;
     i37 = HEAP32[i1 + 148 >> 2] | 0;
     HEAP32[i36 >> 2] = i37;
     if ((i37 | 0) == 0) {
      i38 = 0;
      i39 = 32;
     } else {
      i40 = i37 | 0;
      HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
      if ((HEAP32[i37 + 4 >> 2] | 0) == 0) {
       i38 = i37;
       i39 = 32;
      }
     }
     do {
      if ((i39 | 0) == 32) {
       __ZN7WebCore15mimeTypeFromURLERKNS_3URLE(i5, i26);
       i37 = i5 | 0;
       i40 = HEAP32[i37 >> 2] | 0;
       HEAP32[i37 >> 2] = 0;
       HEAP32[i36 >> 2] = i40;
       do {
        if ((i38 | 0) != 0) {
         i40 = i38 | 0;
         i41 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
         if ((i41 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i38);
          break;
         } else {
          HEAP32[i40 >> 2] = i41;
          break;
         }
        }
       } while (0);
       i41 = HEAP32[i37 >> 2] | 0;
       if ((i41 | 0) == 0) {
        break;
       }
       i40 = i41 | 0;
       i42 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
       if ((i42 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i41);
        break;
       } else {
        HEAP32[i40 >> 2] = i42;
        break;
       }
      }
     } while (0);
     i42 = FUNCTION_TABLE_iiiii[i31 & 7](i27, i15, i16, i17) | 0;
     i40 = HEAP32[i36 >> 2] | 0;
     do {
      if ((i40 | 0) != 0) {
       i41 = i40 | 0;
       i43 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
       if ((i43 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i40);
        break;
       } else {
        HEAP32[i41 >> 2] = i43;
        break;
       }
      }
     } while (0);
     i40 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i40 | 0) != 0) {
       i36 = i40 | 0;
       i27 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i40);
        break;
       } else {
        HEAP32[i36 >> 2] = i27;
        break;
       }
      }
     } while (0);
     i40 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i40 | 0) == 0) {
       if (!i42) {
        break L48;
       }
      } else {
       i27 = i40 | 0;
       i36 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
       if ((i36 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i40);
        if (i42) {
         break;
        } else {
         break L48;
        }
       } else {
        HEAP32[i27 >> 2] = i36;
        if (i42) {
         break;
        } else {
         break L48;
        }
       }
      }
     } while (0);
     HEAP32[i30 >> 2] = 1;
     STACKTOP = i3;
     return;
    }
   } while (0);
   i42 = HEAP32[i28 >> 2] | 0;
   if ((i42 | 0) == 0) {
    i39 = 56;
   } else {
    if ((HEAP32[i42 + 4 >> 2] | 0) == 0) {
     i39 = 56;
    }
   }
   do {
    if ((i39 | 0) == 56) {
     i42 = HEAP32[i1 + 148 >> 2] | 0;
     if ((i42 | 0) == 0) {
      i44 = 0;
      i39 = 58;
     } else {
      i40 = i42 | 0;
      i36 = (HEAP32[i40 >> 2] | 0) + 2 | 0;
      HEAP32[i40 >> 2] = i36;
      i40 = HEAP32[i42 + 4 >> 2] | 0;
      if ((i40 | 0) == 0) {
       i44 = i42;
       i39 = 58;
      } else {
       i45 = i42;
       i46 = i40;
       i47 = i36;
      }
     }
     if ((i39 | 0) == 58) {
      __ZN7WebCore15mimeTypeFromURLERKNS_3URLE(i4, i26);
      i36 = i4 | 0;
      i40 = HEAP32[i36 >> 2] | 0;
      HEAP32[i36 >> 2] = 0;
      do {
       if ((i44 | 0) != 0) {
        i42 = i44 | 0;
        i27 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
        if ((i27 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i44);
        } else {
         HEAP32[i42 >> 2] = i27;
        }
        i27 = HEAP32[i36 >> 2] | 0;
        if ((i27 | 0) == 0) {
         break;
        }
        i42 = i27 | 0;
        i31 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
        if ((i31 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i27);
         break;
        } else {
         HEAP32[i42 >> 2] = i31;
         break;
        }
       }
      } while (0);
      if ((i40 | 0) == 0) {
       break;
      }
      i45 = i40;
      i46 = HEAP32[i40 + 4 >> 2] | 0;
      i47 = HEAP32[i40 >> 2] | 0;
     }
     i36 = (i46 | 0) != 0;
     i31 = i47 - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i45);
      if (!i36) {
       break;
      }
     } else {
      HEAP32[i45 >> 2] = i31;
      if (!i36) {
       break;
      }
     }
     HEAP32[i30 >> 2] = 4;
     STACKTOP = i3;
     return;
    }
   } while (0);
   __ZNK7WebCore3URL8protocolEv(i18, i26);
   do {
    if (__ZN7WebCore14SchemeRegistry27shouldTreatURLSchemeAsLocalERKN3WTF6StringE(i18) | 0) {
     i48 = 0;
    } else {
     __ZNK7WebCore3URL4hostEv(i19, i26);
     i36 = i19 | 0;
     i31 = HEAP32[i36 >> 2] | 0;
     if ((i31 | 0) == 0) {
      i48 = 0;
      break;
     }
     do {
      if ((HEAP32[i31 + 4 >> 2] | 0) == 0) {
       i49 = 0;
      } else {
       __ZNK7WebCore3URL4hostEv(i20, i26);
       __ZNK7WebCore3URL4hostEv(i21, (HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0) | 0) + 60 >> 2] | 0) + 456 >> 2] | 0) + 404 | 0);
       i42 = i20 | 0;
       i27 = i21 | 0;
       i43 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i42 >> 2] | 0, HEAP32[i27 >> 2] | 0) | 0;
       i41 = HEAP32[i27 >> 2] | 0;
       do {
        if ((i41 | 0) != 0) {
         i27 = i41 | 0;
         i50 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
         if ((i50 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i41);
          break;
         } else {
          HEAP32[i27 >> 2] = i50;
          break;
         }
        }
       } while (0);
       i41 = HEAP32[i42 >> 2] | 0;
       if ((i41 | 0) == 0) {
        i49 = i43;
        break;
       }
       i37 = i41 | 0;
       i50 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
       if ((i50 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i41);
        i49 = i43;
        break;
       } else {
        HEAP32[i37 >> 2] = i50;
        i49 = i43;
        break;
       }
      }
     } while (0);
     i31 = HEAP32[i36 >> 2] | 0;
     if ((i31 | 0) == 0) {
      i48 = i49;
      break;
     }
     i40 = i31 | 0;
     i50 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i50 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i31);
      i48 = i49;
      break;
     } else {
      HEAP32[i40 >> 2] = i50;
      i48 = i49;
      break;
     }
    }
   } while (0);
   i50 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i50 | 0) != 0) {
     i40 = i50 | 0;
     i31 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i50);
      break;
     } else {
      HEAP32[i40 >> 2] = i31;
      break;
     }
    }
   } while (0);
   if (i48) {
    HEAP32[i30 >> 2] = 1;
    STACKTOP = i3;
    return;
   }
   i50 = i1 + 32 | 0;
   if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
    i51 = i50 | 0;
   } else {
    i51 = HEAP32[i50 >> 2] | 0;
   }
   i50 = HEAP32[i51 >> 2] | 0;
   i31 = i50;
   i40 = i50 + 36 | 0;
   i37 = (HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] | 0) + 4 | 0;
   i41 = HEAP32[i37 >> 2] | 0;
   i27 = HEAP32[i37 + 4 >> 2] | 0;
   HEAP32[i22 >> 2] = i41;
   HEAP32[i22 + 4 >> 2] = i27;
   if ((i41 & 0 | 0) == 0 & (i27 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i23);
   }
   i27 = (HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] | 0) + 12 | 0;
   i40 = HEAP32[i27 >> 2] | 0;
   i41 = HEAP32[i27 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = i40;
   HEAP32[i24 + 4 >> 2] = i41;
   if ((i40 & 0 | 0) == 0 & (i41 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i25);
   }
   i41 = i50;
   i40 = i50;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 744 >> 2] & 255](i41) | 0;
   i27 = i50;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 712 >> 2] & 127](i12, i41);
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 736 >> 2] & 255](i41) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 704 >> 2] & 127](i13, i41);
   __ZNK7WebCore9RenderBox11clientWidthEv(i6, i31);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 712 >> 2] & 127](i7, i41);
   i40 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 716 >> 2] & 127](i8, i41);
   i50 = i40 - (HEAP32[i8 >> 2] | 0) | 0;
   __ZNK7WebCore9RenderBox12clientHeightEv(i9, i31);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 704 >> 2] & 127](i10, i41);
   i31 = (HEAP32[i9 >> 2] | 0) - (HEAP32[i10 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 708 >> 2] & 127](i11, i41);
   i41 = i31 - (HEAP32[i11 >> 2] | 0) | 0;
   i31 = Math_imul(i41, i50) | 0;
   i27 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) + 452 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i27 >> 2] | 0) + 164 >> 2] & 15](i14, i27 | 0, 0);
   i27 = i14 + 8 | 0;
   i40 = Math_imul(HEAP32[i27 + 4 >> 2] | 0, HEAP32[i27 >> 2] | 0) | 0;
   do {
    if (i32) {
     i27 = HEAP8[i23 + 5 | 0] | 0;
     if (!((i27 << 24 >> 24 | 0) == 10 | (i27 << 24 >> 24 | 0) == 2)) {
      i39 = 113;
      break;
     }
     if ((HEAP8[i23 + 6 | 0] & 1) == 0) {
      d52 = +(HEAP32[i22 >> 2] | 0);
     } else {
      d52 = +HEAPF32[i22 >> 2];
     }
     if (d52 != +100) {
      i39 = 113;
      break;
     }
     i27 = HEAP8[i25 + 5 | 0] | 0;
     if (!((i27 << 24 >> 24 | 0) == 10 | (i27 << 24 >> 24 | 0) == 2)) {
      i39 = 113;
      break;
     }
     if ((HEAP8[i25 + 6 | 0] & 1) == 0) {
      d53 = +(HEAP32[i24 >> 2] | 0);
     } else {
      d53 = +HEAPF32[i24 >> 2];
     }
     if (d53 != +100) {
      i39 = 113;
      break;
     }
     if (+(i31 | 0) / +(i40 | 0) <= +.9599999785423279) {
      i39 = 113;
      break;
     }
     HEAP32[i30 >> 2] = 1;
    } else {
     i39 = 113;
    }
   } while (0);
   do {
    if ((i39 | 0) == 113) {
     if ((i50 | 0) < 41 | (i41 | 0) < 41) {
      i40 = i1 + 356 | 0;
      HEAP32[i40 >> 2] = i50;
      HEAP32[i40 + 4 >> 2] = i41;
      HEAP32[i30 >> 2] = 3;
      break;
     }
     if ((HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] | 0) | 0) + 76 >> 2] | 0) == 0) {
      HEAP32[i30 >> 2] = 1;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 608 >> 2] & 127](i1, 0);
      break;
     } else {
      HEAP32[i30 >> 2] = 2;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 608 >> 2] & 127](i1, 0);
      break;
     }
    }
   } while (0);
   if ((HEAP8[i25 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
   }
   if ((HEAP8[i23 + 5 | 0] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i23);
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 + 364 >> 2] = 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement21restartSimilarPlugInsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 48 | 0;
 i9 = i2 + 56 | 0;
 i10 = i2 + 64 | 0;
 i11 = i1 + 156 | 0;
 __ZNK7WebCore3URL4hostEv(i4, i11);
 i12 = i5 | 0;
 i13 = HEAP32[i1 + 148 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 if ((i13 | 0) == 0) {
  i14 = 0;
  i15 = 3;
 } else {
  i16 = i13 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
  if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
   i14 = i13;
   i15 = 3;
  }
 }
 do {
  if ((i15 | 0) == 3) {
   __ZN7WebCore15mimeTypeFromURLERKNS_3URLE(i3, i11);
   i13 = i3 | 0;
   i16 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i12 >> 2] = i16;
   do {
    if ((i14 | 0) != 0) {
     i16 = i14 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i16 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i13 >> 2] | 0;
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
 i14 = i6 | 0;
 HEAP32[i14 >> 2] = 0;
 i3 = i6 + 4 | 0;
 HEAP32[i3 >> 2] = 0;
 i11 = i6 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i18 = i1 + 20 | 0;
 do {
  if ((__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0) {
   i1 = HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0) | 0) + 60 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i16 = i7 | 0;
   i17 = i9 | 0;
   i19 = i10 | 0;
   i20 = i8 | 0;
   i21 = i1;
   while (1) {
    do {
     if ((HEAP8[HEAP32[i21 + 100 >> 2] | 0] & 1) != 0) {
      i1 = i21 + 456 | 0;
      i22 = HEAP32[i1 >> 2] | 0;
      if ((i22 | 0) == 0) {
       break;
      }
      __ZN7WebCore13ContainerNode20getElementsByTagNameERKN3WTF12AtomicStringE(i7, i22 | 0, (HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 | 0);
      i22 = HEAP32[i16 >> 2] | 0;
      HEAP32[i16 >> 2] = 0;
      i23 = (i22 | 0) == 0;
      do {
       if (!i23) {
        HEAP32[i20 >> 2] = i22;
        i24 = i22 + 8 | 0;
        HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
        __ZN7WebCoreL42addPlugInsFromNodeListMatchingPlugInOriginERN3WTF6VectorINS0_6RefPtrINS_22HTMLPlugInImageElementEEELj0ENS0_15CrashOnOverflowEEENS0_10PassRefPtrINS_8NodeListEEERKNS0_6StringESD_(i6, i8, i4, i5);
        i24 = HEAP32[i20 >> 2] | 0;
        if ((i24 | 0) == 0) {
         break;
        }
        i25 = i24 + 8 | 0;
        i24 = i25 | 0;
        i26 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        if ((i26 | 0) != 0) {
         HEAP32[i24 >> 2] = i26;
         break;
        }
        i26 = i25 - 8 | 0;
        if ((i26 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 63](i26);
       }
      } while (0);
      __ZN7WebCore13ContainerNode20getElementsByTagNameERKN3WTF12AtomicStringE(i9, HEAP32[i1 >> 2] | 0, (HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 | 0);
      i26 = HEAP32[i17 >> 2] | 0;
      HEAP32[i17 >> 2] = 0;
      do {
       if (!i23) {
        i25 = i22 + 8 | 0;
        i24 = i25 | 0;
        i27 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        do {
         if ((i27 | 0) == 0) {
          i28 = i25 - 8 | 0;
          if ((i28 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 63](i28);
         } else {
          HEAP32[i24 >> 2] = i27;
         }
        } while (0);
        i27 = HEAP32[i17 >> 2] | 0;
        if ((i27 | 0) == 0) {
         break;
        }
        i24 = i27 + 8 | 0;
        i27 = i24 | 0;
        i25 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
        if ((i25 | 0) != 0) {
         HEAP32[i27 >> 2] = i25;
         break;
        }
        i25 = i24 - 8 | 0;
        if ((i25 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 63](i25);
       }
      } while (0);
      if ((i26 | 0) == 0) {
       break;
      }
      HEAP32[i19 >> 2] = i26;
      i22 = i26 + 8 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
      __ZN7WebCoreL42addPlugInsFromNodeListMatchingPlugInOriginERN3WTF6VectorINS0_6RefPtrINS_22HTMLPlugInImageElementEEELj0ENS0_15CrashOnOverflowEEENS0_10PassRefPtrINS_8NodeListEEERKNS0_6StringESD_(i6, i10, i4, i5);
      i22 = HEAP32[i19 >> 2] | 0;
      do {
       if ((i22 | 0) != 0) {
        i23 = i22 + 8 | 0;
        i1 = i23 | 0;
        i25 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
        if ((i25 | 0) != 0) {
         HEAP32[i1 >> 2] = i25;
         break;
        }
        i25 = i23 - 8 | 0;
        if ((i25 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 63](i25);
       }
      } while (0);
      i22 = i26 + 8 | 0;
      i25 = i22 | 0;
      i23 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      if ((i23 | 0) != 0) {
       HEAP32[i25 >> 2] = i23;
       break;
      }
      i23 = i22 - 8 | 0;
      if ((i23 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 63](i23);
     }
    } while (0);
    i21 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i21 + 40 | 0, 0) | 0;
    if ((i21 | 0) == 0) {
     break;
    }
   }
   i21 = HEAP32[i11 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i19 = HEAP32[i14 >> 2] | 0;
   i17 = 0;
   while (1) {
    if (i21 >>> 0 <= i17 >>> 0) {
     i15 = 46;
     break;
    }
    i20 = HEAP32[i19 + (i17 << 2) >> 2] | 0;
    if ((HEAP32[i20 + 140 >> 2] | 0) < 2) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 608 >> 2] & 127](i20, 2);
     __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i20 | 0, 65536);
    }
    HEAP32[i20 + 364 >> 2] = 1;
    i17 = i17 + 1 | 0;
    if (i17 >>> 0 >= i21 >>> 0) {
     break;
    }
   }
   if ((i15 | 0) == 46) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i21 | 0) == 0) {
    break;
   }
   i17 = HEAP32[i14 >> 2] | 0;
   i19 = i17 + (i21 << 2) | 0;
   i20 = i17;
   while (1) {
    i17 = HEAP32[i20 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i16 = i17 + 8 | 0;
      i13 = i16 | 0;
      i23 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      HEAP32[i13 >> 2] = i23;
      if ((i23 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
     }
    } while (0);
    i20 = i20 + 4 | 0;
    if ((i20 | 0) == (i19 | 0)) {
     break;
    }
   }
   HEAP32[i11 >> 2] = 0;
  }
 } while (0);
 i11 = HEAP32[i14 >> 2] | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i12 = i11 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i12 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i4 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i11 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_did + 2;
}
function __ZN7WebCore22HTMLPlugInImageElement20userDidClickSnapshotEN3WTF10PassRefPtrINS_10MouseEventEEEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 do {
  if (i3) {
   i10 = i2 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i10 = i1 + 208 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i12 | 0) == 0) {
    break;
   }
   i11 = i12 + 8 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
    break;
   } else {
    HEAP32[i11 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i2 = i1 + 156 | 0;
 __ZNK7WebCore3URL4hostEv(i6, i2);
 i10 = i1 | 0;
 i11 = i1 + 20 | 0;
 L8 : do {
  if ((__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0) {
   __ZNK7WebCore3URL8protocolEv(i7, (HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0) | 0) + 60 >> 2] | 0) + 456 >> 2] | 0) + 404 | 0);
   if (__ZN7WebCore14SchemeRegistry27shouldTreatURLSchemeAsLocalERKN3WTF6StringE(i7) | 0) {
    i13 = 0;
   } else {
    i13 = (HEAP8[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0) | 0) + 48 >> 2] | 0) + 182 | 0] & 64) != 0;
   }
   i12 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     if (!i13) {
      break L8;
     }
    } else {
     i14 = i12 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      if (i13) {
       break;
      } else {
       break L8;
      }
     } else {
      HEAP32[i14 >> 2] = i15;
      if (i13) {
       break;
      } else {
       break L8;
      }
     }
    }
   } while (0);
   i12 = HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0) | 0) + 76 >> 2] | 0;
   i15 = HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0;
   __ZNK7WebCore3URL4hostEv(i8, (HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0) | 0) + 60 >> 2] | 0) + 456 >> 2] | 0) + 404 | 0);
   i14 = i9 | 0;
   i16 = HEAP32[i1 + 148 >> 2] | 0;
   HEAP32[i14 >> 2] = i16;
   if ((i16 | 0) == 0) {
    i17 = 0;
    i18 = 16;
   } else {
    i19 = i16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
    if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
     i17 = i16;
     i18 = 16;
    }
   }
   do {
    if ((i18 | 0) == 16) {
     __ZN7WebCore15mimeTypeFromURLERKNS_3URLE(i5, i2);
     i16 = i5 | 0;
     i19 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     HEAP32[i14 >> 2] = i19;
     do {
      if ((i17 | 0) != 0) {
       i19 = i17 | 0;
       i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
       if ((i20 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i17);
        break;
       } else {
        HEAP32[i19 >> 2] = i20;
        break;
       }
      }
     } while (0);
     i20 = HEAP32[i16 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i19 = i20 | 0;
     i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i19 >> 2] = i21;
      break;
     }
    }
   } while (0);
   FUNCTION_TABLE_viiii[i15 & 7](i12, i8, i6, i9);
   i21 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i19 = i21 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i19 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i8 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i14 = i21 | 0;
   i12 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i14 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i1 + 140 >> 2] | 0) <= 2) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 608 >> 2] & 127](i1, 2);
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i10, 65536);
 }
 if (i3) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 608 >> 2] & 127](i1, 3);
 }
 __ZN7WebCore22HTMLPlugInImageElement21restartSimilarPlugInsEv(i1);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i1 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = (i2 | 0) == 0;
 i15 = i13 + 16 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i13 + 20 | 0;
 HEAP32[i16 >> 2] = -1;
 i17 = i13 + 24 | 0;
 HEAP32[i17 >> 2] = (i14 ? 0 : 0) | i2;
 HEAP32[i17 + 4 >> 2] = i14 ? -6 : -5;
 i14 = HEAP32[i4 >> 2] | 0;
 i4 = i3 + 16 | 0;
 i18 = i9 | 0;
 i19 = i11 | 0;
 i20 = i12 | 0;
 i21 = i2;
 while (1) {
  i22 = i21 | 0;
  i2 = HEAP32[i22 >> 2] | 0;
  if ((HEAP8[i2 + 53 | 0] & 32) == 0) {
   i23 = HEAP32[(HEAP32[i4 >> 2] & -65536) + 1076 >> 2] | 0;
   HEAP32[i18 >> 2] = i14;
   i24 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i2, i23, i9, i7, i8) | 0;
   if ((i24 | 0) != -1) {
    i25 = 4;
    break;
   }
   HEAP32[i19 >> 2] = i14;
   if (__ZN3JSC8JSObject22getOwnPropertySlotSlowEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i21, i3, i11, i13) | 0) {
    break;
   }
  } else {
   i23 = HEAP32[i2 >> 2] | 0;
   if ((i23 | 0) != 0) {
    if ((i23 | 0) != (HEAP32[i23 >> 2] | 0)) {
     i25 = 13;
     break;
    }
   }
   i23 = HEAP32[(HEAP32[((HEAP32[(i21 & -65536) + 1048 >> 2] | 0) == 2 ? i21 + 8 | 0 : i2 + 32 | 0) >> 2] | 0) + 52 >> 2] | 0;
   HEAP32[i20 >> 2] = i14;
   if (FUNCTION_TABLE_iiiii[i23 & 7](i21, i3, i12, i13) | 0) {
    break;
   }
  }
  i23 = (HEAP32[i22 >> 2] | 0) + 8 | 0;
  i2 = HEAP32[i23 >> 2] | 0;
  if (!((i2 & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
   i25 = 24;
   break;
  }
  i23 = i2;
  if ((HEAPU8[(HEAP32[i23 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
   i25 = 24;
   break;
  }
  i21 = i23;
 }
 L13 : do {
  if ((i25 | 0) == 13) {
   _WTFCrash();
  } else if ((i25 | 0) == 24) {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  } else if ((i25 | 0) == 4) {
   if ((i24 | 0) < 100) {
    i26 = i21 + (i24 + 1 << 3) | 0;
   } else {
    i26 = (HEAP32[i21 + 4 >> 2] | 0) - 8 + (99 - i24 << 3) | 0;
   }
   i12 = i26 | 0;
   i20 = HEAP32[i12 >> 2] | 0;
   i11 = HEAP32[i12 + 4 >> 2] | 0;
   i12 = i11;
   do {
    if ((HEAP8[(HEAP32[i22 >> 2] | 0) + 58 | 0] & 8) != 0 & ((i12 | 0) == (-5 | 0) & 0 == 0)) {
     if ((HEAP8[(HEAP32[i20 >> 2] | 0) + 52 | 0] | 0) != 8) {
      break;
     }
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i20 & -1;
     HEAP32[i19 + 4 >> 2] = i11 & 0 | -5;
     __ZN3JSC8JSObject22fillGetterPropertySlotERNS_12PropertySlotENS_7JSValueEji(i21, i13, i10, HEAP32[i7 >> 2] | 0, i24);
     break L13;
    }
   } while (0);
   i19 = HEAP32[i7 >> 2] | 0;
   i8 = i13 + 8 | 0;
   HEAP32[i8 >> 2] = i20 & -1;
   HEAP32[i8 + 4 >> 2] = i12 | i11 & 0;
   HEAP32[i13 >> 2] = i19;
   HEAP32[i13 + 32 >> 2] = i21;
   HEAP32[i15 >> 2] = 1;
   HEAP32[i16 >> 2] = i24;
  }
 } while (0);
 i24 = HEAP32[i15 >> 2] | 0;
 if ((i24 | 0) == 2) {
  __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i13, i3);
  STACKTOP = i5;
  return;
 } else if ((i24 | 0) == 1) {
  i15 = i13 + 8 | 0;
  i16 = HEAP32[i15 + 4 >> 2] | 0;
  i21 = i1 | 0;
  HEAP32[i21 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i21 + 4 >> 2] = i16;
  STACKTOP = i5;
  return;
 } else if ((i24 | 0) == 4) {
  i24 = i13 + 8 | 0;
  i16 = HEAP32[i13 + 32 >> 2] | 0;
  i21 = (i16 | 0) == 0;
  i15 = FUNCTION_TABLE_iiiiiii[HEAP32[i24 >> 2] & 1](i3, (i21 ? 0 : 0) | i16, (i21 ? -6 : -5) | 0, HEAP32[i17 >> 2] | 0, HEAP32[i17 + 4 >> 2] | 0, HEAP32[i24 + 4 >> 2] | 0) | 0;
  i24 = i1 | 0;
  HEAP32[i24 >> 2] = i15;
  HEAP32[i24 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 } else {
  i24 = HEAP32[i13 + 8 >> 2] | 0;
  i15 = HEAP32[i13 + 32 >> 2] | 0;
  i13 = (i15 | 0) == 0;
  i21 = HEAP32[i17 >> 2] | 0;
  i16 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i14;
  i14 = FUNCTION_TABLE_iiiiiii[i24 & 1](i3, (i13 ? 0 : 0) | i15, (i13 ? -6 : -5) | 0, i21, i16, i6) | 0;
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i14;
  HEAP32[i6 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i1, i2) {
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
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i14 = i20 | 0;
     i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i14 >> 2] = i13;
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
      i10 = i11 | 0;
      i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i27 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i10 >> 2] = i27;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i27 = i11 | 0;
    i10 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i27 >> 2] = i10;
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
function __ZN7WebCoreL42addPlugInsFromNodeListMatchingPlugInOriginERN3WTF6VectorINS0_6RefPtrINS_22HTMLPlugInImageElementEEELj0ENS0_15CrashOnOverflowEEENS0_10PassRefPtrINS_8NodeListEEERKNS0_6StringESD_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 255](i2) | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = i6 | 0;
 i10 = i3 | 0;
 i3 = i7 | 0;
 i11 = i4 | 0;
 i4 = i1 + 8 | 0;
 i12 = i1 + 4 | 0;
 i13 = i1 | 0;
 i14 = 0;
 while (1) {
  i15 = HEAP32[i8 >> 2] | 0;
  i16 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] & 31](i15, i14) | 0;
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 124 >> 2] & 255](i16) | 0) {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 624 >> 2] & 255](i16) | 0)) {
     break;
    }
    i15 = i16;
    i17 = i16 + 156 | 0;
    i18 = HEAP32[i16 + 148 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i19 = 0;
     i20 = 7;
    } else {
     i21 = i18 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
     if ((HEAP32[i18 + 4 >> 2] | 0) == 0) {
      i19 = i18;
      i20 = 7;
     } else {
      i22 = i18;
     }
    }
    do {
     if ((i20 | 0) == 7) {
      i20 = 0;
      __ZN7WebCore15mimeTypeFromURLERKNS_3URLE(i6, i17);
      i18 = HEAP32[i2 >> 2] | 0;
      HEAP32[i2 >> 2] = 0;
      if ((i19 | 0) == 0) {
       i22 = i18;
       break;
      }
      i21 = i19 | 0;
      i23 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
      if ((i23 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i19);
      } else {
       HEAP32[i21 >> 2] = i23;
      }
      i23 = HEAP32[i2 >> 2] | 0;
      if ((i23 | 0) == 0) {
       i22 = i18;
       break;
      }
      i21 = i23 | 0;
      i24 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       i22 = i18;
       break;
      } else {
       HEAP32[i21 >> 2] = i24;
       i22 = i18;
       break;
      }
     }
    } while (0);
    __ZNK7WebCore3URL4hostEv(i7, i17);
    if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i10 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0) {
     i25 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i11 >> 2] | 0, i22) | 0;
    } else {
     i25 = 0;
    }
    i18 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i18 | 0) != 0) {
      i24 = i18 | 0;
      i21 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
      if ((i21 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i18);
       break;
      } else {
       HEAP32[i24 >> 2] = i21;
       break;
      }
     }
    } while (0);
    do {
     if (i25) {
      i18 = HEAP32[i4 >> 2] | 0;
      if ((i18 | 0) == (HEAP32[i12 >> 2] | 0)) {
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore22HTMLPlugInImageElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i18 + 1 | 0);
       HEAP32[(HEAP32[i13 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) >> 2] = i15;
       if ((i16 | 0) != 0) {
        i17 = i16 + 8 | 0;
        HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
       }
       HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
       break;
      } else {
       HEAP32[(HEAP32[i13 >> 2] | 0) + (i18 << 2) >> 2] = i15;
       if ((i16 | 0) != 0) {
        i18 = i16 + 8 | 0;
        HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
       }
       HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
       break;
      }
     }
    } while (0);
    if ((i22 | 0) == 0) {
     break;
    }
    i15 = i22 | 0;
    i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i22);
     break;
    } else {
     HEAP32[i15 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i14 = i14 + 1 | 0;
  if (i14 >>> 0 >= i9 >>> 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_RS1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, 0) | 0;
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
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
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
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i4 = i13 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i13;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i4 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i4;
 i8 = i2 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i13 | 0)) {
  i19 = i18;
  i20 = i13;
 } else {
  i13 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, i18) | 0;
  i19 = i13;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
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
 i12 = i2 | 0;
 i13 = i2 + 140 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((i14 | 0) > 4) {
  HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
  __ZN7WebCore17HTMLPlugInElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1, i12, i7);
  STACKTOP = i4;
  return;
 }
 i7 = i2 + 206 | 0;
 if ((HEAP8[i7] & 1) == 0) {
  HEAP8[i7] = 1;
  __ZN7WebCore8Document39registerForPageCacheSuspensionCallbacksEPNS_7ElementE(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0, i2 | 0);
  i15 = HEAP32[i13 >> 2] | 0;
 } else {
  i15 = i14;
 }
 if ((i15 | 0) == 1) {
  i15 = __ZN3WTF10fastMallocEj(156) | 0;
  i14 = i15;
  HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
  __ZN7WebCore23RenderSnapshottedPlugInC1ERNS_22HTMLPlugInImageElementEN3WTF7PassRefINS_11RenderStyleEEE(i14, i2, i6);
  i6 = i8 | 0;
  i13 = HEAP32[i2 + 344 >> 2] | 0;
  HEAP32[i6 >> 2] = i13;
  if ((i13 | 0) != 0) {
   i7 = i13 + 4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  }
  __ZN7WebCore23RenderSnapshottedPlugIn14updateSnapshotEN3WTF10PassRefPtrINS_5ImageEEE(i14, i8);
  i8 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i6 = i8 + 4 | 0;
    i14 = i6 | 0;
    i7 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) != 0) {
     HEAP32[i14 >> 2] = i7;
     break;
    }
    i7 = i6 - 4 | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
  } while (0);
  HEAP32[i1 >> 2] = i15;
  STACKTOP = i4;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 628 >> 2] & 255](i12) | 0) {
  HEAP32[i9 >> 2] = HEAP32[i3 >> 2];
  __ZN7WebCore13RenderElement9createForERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2 | 0, i9);
  STACKTOP = i4;
  return;
 }
 if (!(__ZN7WebCore22HTMLPlugInImageElement11isImageTypeEv(i2) | 0)) {
  HEAP32[i11 >> 2] = HEAP32[i3 >> 2];
  __ZN7WebCore17HTMLPlugInElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1, i12, i11);
  STACKTOP = i4;
  return;
 }
 i11 = __ZN3WTF10fastMallocEj(112) | 0;
 i12 = i11;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore11RenderImageC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i12, i2 | 0, i5);
 i5 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore19RenderImageResourceC1Ev(i5);
 i2 = i10 | 0;
 HEAP32[i2 >> 2] = i5;
 __ZN7WebCore11RenderImage16setImageResourceEN3WTF10PassOwnPtrINS_19RenderImageResourceEEE(i12, i10);
 i10 = HEAP32[i2 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
 }
 HEAP32[i1 >> 2] = i11;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement30checkSizeChangeForSnapshottingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, d16 = +0, d17 = +0, i18 = 0, i19 = 0;
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
 i11 = i1 + 350 | 0;
 if ((HEAP8[i11] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i12 = i1 + 364 | 0;
 if ((HEAP32[i12 >> 2] | 0) != 3) {
  STACKTOP = i2;
  return;
 }
 i13 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 d14 = +HEAPF64[i13 + 1968 >> 3];
 i15 = HEAP32[i13 + 332 >> 2] | 0;
 do {
  if ((i15 | 0) == (HEAP32[(__ZNK7WebCore8Document4pageEv(i13) | 0) + 60 >> 2] | 0)) {
   d16 = d14;
  } else {
   if ((HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(i13) | 0) + 60 >> 2] | 0) + 456 >> 2] | 0) == 0) {
    d16 = d14;
    break;
   }
   d17 = +HEAPF64[(HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(i13) | 0) + 60 >> 2] | 0) + 456 >> 2] | 0) + 1968 >> 3];
   d16 = d14 < d17 ? d17 : d14;
  }
 } while (0);
 if (+__ZN3WTF27monotonicallyIncreasingTimeEv() - d16 < +5) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i11] = 0;
 i11 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i18 = i11 | 0;
 } else {
  i18 = HEAP32[i11 >> 2] | 0;
 }
 i11 = HEAP32[i18 >> 2] | 0;
 i18 = i11;
 i13 = i11;
 i15 = i11;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 744 >> 2] & 255](i13) | 0;
 i19 = i11;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 127](i9, i13);
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 736 >> 2] & 255](i13) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 127](i10, i13);
 __ZNK7WebCore9RenderBox11clientWidthEv(i3, i18);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 127](i4, i13);
 i10 = (HEAP32[i3 >> 2] | 0) - (HEAP32[i4 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 716 >> 2] & 127](i5, i13);
 i4 = i10 - (HEAP32[i5 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i6, i18);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 127](i7, i13);
 i18 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 708 >> 2] & 127](i8, i13);
 if ((i4 | 0) < 41 | (i18 - (HEAP32[i8 >> 2] | 0) | 0) < 41) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 608 >> 2] & 127](i1, 0);
 HEAP32[i12 >> 2] = 2;
 i12 = __ZNK7WebCore17HTMLPlugInElement12pluginWidgetEv(i1 | 0) | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] & 255](i12) | 0)) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 144 >> 2] & 63](i12);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i3 = i1 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i4 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 i4 = (i5 | 0) / 2 & -1;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i4 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i4 << 2) | 0;
 if ((i5 | 0) != 0) {
  i4 = 0;
  while (1) {
   i1 = HEAP32[i7 + (i4 << 2) >> 2] | 0;
   i8 = i1;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    i9 = HEAP32[i6 >> 2] | 0;
    i10 = HEAP32[i3 >> 2] | 0;
    i11 = i8 + ~(i8 << 15) | 0;
    i8 = (i11 >>> 10 ^ i11) * 9 & -1;
    i11 = i8 >>> 6 ^ i8;
    i8 = i11 + ~(i11 << 11) | 0;
    i11 = i8 >>> 16 ^ i8;
    i8 = i10 & i11;
    i12 = i9 + (i8 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    L9 : do {
     if ((i13 | 0) == 0) {
      i14 = 0;
      i15 = i12;
      i16 = 6;
     } else {
      i17 = (i11 >>> 23) + ~i11 | 0;
      i18 = i17 << 12 ^ i17;
      i17 = i18 >>> 7 ^ i18;
      i18 = i17 << 2 ^ i17;
      i17 = i18 >>> 20 ^ i18 | 1;
      i18 = 0;
      i19 = 0;
      i20 = i8;
      i21 = i12;
      i22 = i13;
      while (1) {
       if ((i22 | 0) == (i1 | 0)) {
        i23 = i21;
        break L9;
       }
       i24 = (i22 | 0) == -1 ? i21 : i18;
       i25 = (i19 | 0) == 0 ? i17 : i19;
       i26 = i25 + i20 & i10;
       i27 = i9 + (i26 << 2) | 0;
       i28 = HEAP32[i27 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i14 = i24;
        i15 = i27;
        i16 = 6;
        break;
       } else {
        i18 = i24;
        i19 = i25;
        i20 = i26;
        i21 = i27;
        i22 = i28;
       }
      }
     }
    } while (0);
    if ((i16 | 0) == 6) {
     i16 = 0;
     i23 = (i14 | 0) != 0 ? i14 : i15;
    }
    HEAP32[i23 >> 2] = i1;
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement25wouldLoadAsNetscapePluginERKN3WTF6StringES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i6, HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i2);
   i9 = i6 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i11 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i10;
   do {
    if ((i11 | 0) != 0) {
     i10 = i11 | 0;
     i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i10 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i11 = HEAP8[i6 + 4 | 0] | 0;
   i12 = i5 + 4 | 0;
   HEAP8[i12] = HEAP8[i12] & -4 | i11 & 1 | i11 & 2;
   HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i5 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   HEAP32[i5 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i5 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i5 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAP32[i5 + 32 >> 2] = HEAP32[i6 + 32 >> 2];
   HEAP32[i5 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   HEAP32[i5 + 40 >> 2] = HEAP32[i6 + 40 >> 2];
   HEAP32[i5 + 44 >> 2] = HEAP32[i6 + 44 >> 2];
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = i11 | 0;
   i10 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i12 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) + 84 >> 2] | 0;
 i2 = (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 440 >> 2] & 7](i6, i5, i3, (HEAP8[i1 + 205 | 0] & 1) != 0) | 0) == 3;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return i2 | 0;
 }
 i7 = i1 | 0;
 i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return i2 | 0;
 } else {
  HEAP32[i7 >> 2] = i3;
  STACKTOP = i4;
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore22HTMLPlugInImageElementD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 96;
 if ((HEAP8[i1 + 206 | 0] & 1) != 0) {
  __ZN7WebCore8Document41unregisterForPageCacheSuspensionCallbacksEPNS_7ElementE(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i1 | 0);
 }
 i2 = HEAP32[i1 + 344 >> 2] | 0;
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
 __ZN7WebCore9TimerBaseD2Ev(i1 + 288 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 216 | 0);
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 156 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore17HTMLPlugInElementD2Ev(i6);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 i6 = i1 | 0;
 __ZN7WebCore17HTMLPlugInElementD2Ev(i6);
 return;
}
function __ZN7WebCore22HTMLPlugInImageElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 96;
 if ((HEAP8[i1 + 206 | 0] & 1) != 0) {
  __ZN7WebCore8Document41unregisterForPageCacheSuspensionCallbacksEPNS_7ElementE(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i1 | 0);
 }
 i2 = HEAP32[i1 + 344 >> 2] | 0;
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
 __ZN7WebCore9TimerBaseD2Ev(i1 + 288 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 216 | 0);
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 156 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore17HTMLPlugInElementD2Ev(i6);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 i6 = i1 | 0;
 __ZN7WebCore17HTMLPlugInElementD2Ev(i6);
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement11isImageTypeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 148 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 3;
 } else {
  if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
   i8 = 3;
  }
 }
 do {
  if ((i8 | 0) == 3) {
   i7 = i1 + 152 | 0;
   if (!(__ZN7WebCore10protocolIsERKN3WTF6StringEPKc(i7, H_BASE + 48 | 0) | 0)) {
    break;
   }
   __ZN7WebCore19mimeTypeFromDataURLERKN3WTF6StringE(i3, i7);
   i7 = i3 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i10 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i9;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 | 0;
     i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i9 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i7 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i10 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i11 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i3 = HEAP32[i6 + 332 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i12 = __ZN7WebCore5Image12supportsTypeERKN3WTF6StringE(i5) | 0;
  STACKTOP = i2;
  return i12 | 0;
 }
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i4, i6, i1 + 152 | 0);
 i6 = HEAP32[i3 + 84 >> 2] | 0;
 i3 = (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 440 >> 2] & 7](i6, i4, i5, (HEAP8[i1 + 205 | 0] & 1) != 0) | 0) == 1;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i12 = i3;
  STACKTOP = i2;
  return i12 | 0;
 }
 i4 = i1 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  i12 = i3;
  STACKTOP = i2;
  return i12 | 0;
 } else {
  HEAP32[i4 >> 2] = i5;
  i12 = i3;
  STACKTOP = i2;
  return i12 | 0;
 }
 return 0;
}
function __ZN7WebCore22HTMLPlugInImageElement14updateSnapshotEN3WTF10PassRefPtrINS_5ImageEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i1 + 140 >> 2] | 0) > 1) {
  STACKTOP = i3;
  return;
 }
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 344 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i6 = i2 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i6 >> 2] = i8;
    break;
   }
   i8 = i2 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 i7 = i1 + 12 | 0;
 i8 = i1 + 32 | 0;
 if ((HEAP32[i7 >> 2] & 2048 | 0) == 0) {
  i9 = i8 | 0;
 } else {
  i9 = HEAP32[i8 >> 2] | 0;
 }
 i1 = HEAP32[i9 >> 2] | 0;
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 255](i1) | 0;
 if ((HEAP32[i7 >> 2] & 2048 | 0) == 0) {
  i10 = i8 | 0;
 } else {
  i10 = HEAP32[i8 >> 2] | 0;
 }
 i1 = HEAP32[i10 >> 2] | 0;
 if (!i9) {
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 72 >> 2] & 255](i1) | 0)) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i7 >> 2] & 2048 | 0) == 0) {
   i11 = i8 | 0;
  } else {
   i11 = HEAP32[i8 >> 2] | 0;
  }
  __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i11 >> 2] | 0, 0);
  STACKTOP = i3;
  return;
 }
 i11 = i4 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i11 >> 2] = i8;
 __ZN7WebCore23RenderSnapshottedPlugIn14updateSnapshotEN3WTF10PassRefPtrINS_5ImageEEE(i1, i4);
 i4 = HEAP32[i11 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i4 + 4 | 0;
 i4 = i11 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i11 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement13requestObjectERKN3WTF6StringES4_RKNS1_6VectorIS2_Lj0ENS1_15CrashOnOverflowEEES9_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if (__ZN7WebCore17HTMLPlugInElement13requestObjectERKN3WTF6StringES4_RKNS1_6VectorIS2_Lj0ENS1_15CrashOnOverflowEEES9_(i1 | 0, i2, i3, i4, i5) | 0) {
  i6 = 1;
  return i6 | 0;
 }
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) + 100 >> 2] | 0;
 i8 = HEAP32[i1 + 48 >> 2] | 0;
 L4 : do {
  if ((i8 | 0) == 0) {
   i9 = __ZN3WTF8nullAtomE;
  } else {
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i10 & 268435456 | 0) == 0) {
    i9 = __ZN3WTF8nullAtomE;
    break;
   }
   if ((i10 & 1 | 0) == 0) {
    i11 = i10 >>> 1 & 134217727;
    i12 = i8 + 20 | 0;
   } else {
    i10 = i8 + 24 | 0;
    i11 = HEAP32[i10 + 8 >> 2] | 0;
    i12 = HEAP32[i10 >> 2] | 0;
   }
   if ((i11 | 0) == 0) {
    i9 = __ZN3WTF8nullAtomE;
    break;
   }
   i10 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
   i13 = i10 + 12 | 0;
   i14 = i10 + 16 | 0;
   i15 = 0;
   while (1) {
    i16 = i12 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i10 | 0)) {
     break;
    }
    if ((HEAP32[i17 + 12 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
     if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
      break;
     }
    }
    i17 = i15 + 1 | 0;
    if (i17 >>> 0 < i11 >>> 0) {
     i15 = i17;
    } else {
     i9 = __ZN3WTF8nullAtomE;
     break L4;
    }
   }
   i9 = (i16 | 0) == 0 ? __ZN3WTF8nullAtomE : i12 + (i15 << 3) + 4 | 0;
  }
 } while (0);
 i6 = __ZN7WebCore14SubframeLoader13requestObjectERNS_22HTMLPlugInImageElementERKN3WTF6StringERKNS3_12AtomicStringES6_RKNS3_6VectorIS4_Lj0ENS3_15CrashOnOverflowEEESE_(i7, i1, i2, i9, i3, i4, i5) | 0;
 return i6 | 0;
}
function __ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i2 + 16 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 & 3 | 0) == 2) {
  i7 = i2;
  while (1) {
   i8 = HEAP32[i7 + 12 >> 2] | 0;
   i9 = i8 + 16 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 & 3 | 0) == 2) {
    i7 = i8;
   } else {
    i11 = i8;
    i12 = i9;
    i13 = i10;
    break;
   }
  }
 } else {
  i11 = i2;
  i12 = i5;
  i13 = i6;
 }
 if ((i13 & 8 | 0) == 0) {
  HEAP32[i12 >> 2] = i13 | 8;
  i14 = HEAP32[i11 + 4 >> 2] << (i13 >>> 5 & 1 ^ 1);
 } else {
  i14 = 0;
 }
 i13 = i1 + 6840 | 0;
 i11 = i13 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i15 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i13, 16) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i15 = i12;
 }
 i12 = i15;
 HEAP32[i12 >> 2] = 0;
 i11 = i15;
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = HEAP32[i1 + 20772 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 0;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    i16 = 0;
    break;
   }
   i16 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 HEAP32[i12 >> 2] = i16;
 i16 = i15 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i15 + 12 >> 2] = i13;
 HEAP32[i15 + 8 >> 2] = i4;
 HEAP32[i16 >> 2] = (HEAP32[i13 + 16 >> 2] | 0) >>> 5 & 1;
 if (i14 >>> 0 <= 256 >>> 0) {
  i17 = i1 + 24784 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18 + 1 | 0;
  HEAP32[i17 >> 2] = i19;
  return i11 | 0;
 }
 __ZN3JSC4Heap29reportExtraMemoryCostSlowCaseEj((HEAP32[(i15 & -65536) + 1076 >> 2] | 0) + 16 | 0, i14);
 i17 = i1 + 24784 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = i18 + 1 | 0;
 HEAP32[i17 >> 2] = i19;
 return i11 | 0;
}
function __ZN7WebCore16ScriptController11windowShellERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = i2;
  i9 = i8 + ~(i8 << 15) | 0;
  i8 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i8 >>> 6 ^ i8;
  i8 = i9 + ~(i9 << 11) | 0;
  i9 = i8 >>> 16 ^ i8;
  i8 = i4 & i9;
  i10 = i3 + (i8 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i2 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i8;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i2 | 0)) {
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
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i4 << 3) | 0 : i12;
  i6 = i3;
  i7 = i4;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = __ZN7WebCore16ScriptController10initScriptERNS_15DOMWrapperWorldE(i1, i2) | 0;
  return i21 | 0;
 }
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i21 = 0;
  return i21 | 0;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) == -6) {
  i21 = 0;
  return i21 | 0;
 }
 i21 = HEAP32[i2 >> 2] | 0;
 return i21 | 0;
}
function __ZN7WebCore22HTMLPlugInImageElement19defaultEventHandlerEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 72 >> 2] & 255](i5) | 0)) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 624 >> 2] & 255](i1) | 0)) {
    break;
   }
   if ((HEAP32[i1 + 140 >> 2] | 0) != 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2) | 0)) {
    break;
   }
   i6 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i6 + 56 >> 2] | 0)) {
    break;
   }
   i6 = i2;
   if ((HEAP16[i6 + 114 >> 1] | 0) != 0) {
    break;
   }
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = i6;
   if ((i2 | 0) != 0) {
    i6 = i2 + 8 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   }
   __ZN7WebCore22HTMLPlugInImageElement20userDidClickSnapshotEN3WTF10PassRefPtrINS_10MouseEventEEEb(i1, i4, 1);
   i6 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i7 = i6 + 8 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   HEAP8[i2 + 21 | 0] = 1;
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore17HTMLPlugInElement19defaultEventHandlerEPNS_5EventE(i1 | 0, i2);
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
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
  i10 = i3 + (i2 << 2) | 0;
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
     i19 = i3 + (i18 << 2) | 0;
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
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1 | 0, i5);
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore22HTMLPlugInImageElement21partOfSnapshotOverlayEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 if (!(HEAP8[H_BASE + 808 | 0] | 0)) {
  i5 = __Znwj(4) | 0;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 8 | 0, 17);
  i6 = i4 | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 >> 2] = i4;
  HEAP32[H_BASE + 840 >> 2] = i5;
  HEAP8[H_BASE + 808 | 0] = 1;
 }
 i5 = __ZN7WebCore7Element25ensureUserAgentShadowRootEv(i1 | 0) | 0;
 i1 = HEAP32[H_BASE + 840 >> 2] | 0;
 i4 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 i6 = __ZN7WebCore13ContainerNode13querySelectorERKN3WTF12AtomicStringERi(i5, i1, i4) | 0;
 i4 = (i6 | 0) == 0;
 if (!i4) {
  i1 = i6 + 8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 do {
  if ((i2 | 0) == 0) {
   if (i4) {
    i7 = 0;
   } else {
    i8 = 0;
    break;
   }
   STACKTOP = i3;
   return i7 | 0;
  } else {
   if (i4) {
    i7 = 0;
    STACKTOP = i3;
    return i7 | 0;
   }
   i1 = i6 | 0;
   if ((i1 | 0) == (i2 | 0)) {
    i8 = 1;
    break;
   }
   i8 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i2, i1) | 0;
  }
 } while (0);
 i2 = i6 + 8 | 0;
 i6 = i2 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i7 = i8;
  STACKTOP = i3;
  return i7 | 0;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  i7 = i8;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 i7 = i8;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore22HTMLPlugInImageElementC2ERKNS_13QualifiedNameERNS_8DocumentEbNS_28PreferPlugInsForImagesOptionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17HTMLPlugInElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1 | 0, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 96;
 _memset(i1 + 144 | 0, 0, 16) | 0;
 __ZN7WebCore3URL10invalidateEv(i1 + 156 | 0);
 HEAP8[i1 + 204 | 0] = i4 & 1 ^ 1;
 HEAP8[i1 + 205 | 0] = (i5 | 0) == 0 | 0;
 HEAP8[i1 + 206 | 0] = 0;
 HEAP32[i1 + 208 >> 2] = 0;
 i5 = i1 + 216 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i5);
 HEAP32[i5 >> 2] = H_BASE + 760;
 HEAP32[i1 + 260 >> 2] = i1;
 i5 = i1 + 264 | 0;
 HEAP32[i5 >> 2] = F_BASE_vii + 24;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAPF64[i1 + 272 >> 3] = +.75;
 HEAP8[i1 + 280 | 0] = 0;
 i5 = i1 + 288 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i5);
 HEAP32[i5 >> 2] = H_BASE + 64;
 HEAP32[i1 + 332 >> 2] = i1;
 i5 = i1 + 336 | 0;
 HEAP32[i5 >> 2] = F_BASE_vii + 52;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i1 + 344 >> 2] = 0;
 HEAP8[i1 + 348 | 0] = (__ZN7WebCore16ScriptController21processingUserGestureEv() | 0) & 1;
 HEAP32[i1 + 356 >> 2] = 0;
 HEAP32[i1 + 360 >> 2] = 0;
 HEAP32[i1 + 364 >> 2] = 0;
 i5 = i1 + 12 | 0;
 i4 = i1 + 349 | 0;
 tempBigInt = 0;
 HEAP8[i4] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i4 + 1 | 0] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i4 + 2 | 0] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i4 + 3 | 0] = tempBigInt;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 1048576;
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement23updateWidgetIfNecessaryEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0);
 if ((HEAP8[i1 + 204 | 0] & 1) == 0) {
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 255](i1 | 0) | 0) {
  return;
 }
 if (__ZN7WebCore22HTMLPlugInImageElement11isImageTypeEv(i1) | 0) {
  return;
 }
 i2 = i1 + 12 | 0;
 i3 = (HEAP32[i2 >> 2] & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  return;
 }
 if (i3) {
  i6 = i4 | 0;
 } else {
  i6 = HEAP32[i4 >> 2] | 0;
 }
 i3 = HEAP32[i6 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 255](i3) | 0)) {
  return;
 }
 i3 = (HEAP32[i2 >> 2] & 2048 | 0) == 0;
 if (i3) {
  i7 = i4 | 0;
 } else {
  i7 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  return;
 }
 if (i3) {
  i8 = i4 | 0;
 } else {
  i8 = HEAP32[i4 >> 2] | 0;
 }
 i3 = HEAP32[i8 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 255](i3) | 0;
 if ((HEAP32[i2 >> 2] & 2048 | 0) == 0) {
  i9 = i4 | 0;
 } else {
  i9 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP8[(HEAP32[i9 >> 2] | 0) + 128 | 0] & 1) != 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 640 >> 2] & 127](i1, 1);
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement19checkSnapshotStatusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 124 >> 2] & 255](i4) | 0)) {
  if ((HEAP32[i1 + 140 >> 2] | 0) != 4) {
   STACKTOP = i2;
   return;
  }
  __ZN7WebCore22HTMLPlugInImageElement30checkSizeChangeForSnapshottingEv(i1);
  STACKTOP = i2;
  return;
 }
 i4 = __ZN7WebCore7Element25ensureUserAgentShadowRootEv(i1 | 0) | 0;
 i1 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 312 | 0;
 i5 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i5, i1, 1, 0);
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = i5;
 __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i4, i3) | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i3 + 8 | 0;
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
 i4 = i1 - 8 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 STACKTOP = i2;
 return;
}
function __ZNK3WTF7HashMapINS_6StringES1_NS_10StringHashENS_10HashTraitsIS1_EES4_E3getERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i6 = HEAP32[i3 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 L5 : do {
  if ((i5 | 0) != 0) {
   i3 = (i7 >>> 23) + ~i7 | 0;
   i6 = i3 << 12 ^ i3;
   i3 = i6 >>> 7 ^ i6;
   i6 = i3 << 2 ^ i3;
   i3 = i6 >>> 20 ^ i6 | 1;
   i6 = i7;
   i8 = 0;
   while (1) {
    i9 = i6 & i4;
    i10 = i5 + (i9 << 3) | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    i12 = i11;
    if ((i12 | 0) == 0) {
     break L5;
    } else if ((i12 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i2 >> 2] | 0) | 0) {
      break;
     }
    }
    i11 = (i8 | 0) == 0 ? i3 : i8;
    i6 = i11 + i9 | 0;
    i8 = i11;
   }
   if ((i10 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i5 + (i9 << 3) + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) == 0) {
    return;
   }
   i6 = i8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement21allowedToLoadFrameURLERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i4, HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0, i2);
 i2 = i1 | 0;
 do {
  if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
   i6 = 4;
  } else {
   if (!(__ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE(i4 | 0) | 0)) {
    i6 = 4;
    break;
   }
   i7 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) + 100 >> 2] | 0;
   if (__ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(i7, HEAP32[(__ZNK7WebCore21HTMLFrameOwnerElement15contentDocumentEv(i2) | 0) + 100 >> 2] | 0) | 0) {
    i6 = 4;
   } else {
    i8 = 0;
   }
  }
 } while (0);
 if ((i6 | 0) == 4) {
  i8 = __ZNK7WebCore5Frame12isURLAllowedERKNS_3URLE(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0, i4) | 0;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return i8 | 0;
 }
 i4 = i5 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return i8 | 0;
 } else {
  HEAP32[i4 >> 2] = i6;
  STACKTOP = i3;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore22HTMLPlugInImageElement24removeSnapshotTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 344 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 HEAP8[i1 + 349 | 0] = 0;
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1 | 0, 49152);
 i3 = (HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0;
 i5 = i1 + 32 | 0;
 if (i3) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  return;
 }
 if (i3) {
  i7 = i5 | 0;
 } else {
  i7 = HEAP32[i5 >> 2] | 0;
 }
 __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i7 >> 2] | 0, 0);
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement29setIsPrimarySnapshottedPlugInEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 20 | 0;
 if ((__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0) | 0) == 0) {
  return;
 }
 if ((HEAP8[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0) | 0) + 48 >> 2] | 0) + 188 | 0] | 0) >= 0) {
  return;
 }
 if ((HEAP8[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0) | 0) + 48 >> 2] | 0) + 191 | 0] & 4) != 0 | i2 ^ 1) {
  return;
 }
 if ((HEAP8[i1 + 351 | 0] & 1) == 0) {
  HEAP8[i1 + 352 | 0] = 1;
  return;
 }
 if ((HEAP32[i1 + 140 >> 2] | 0) <= 2) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 608 >> 2] & 127](i1, 2);
  __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1 | 0, 65536);
 }
 __ZN7WebCore22HTMLPlugInImageElement21restartSimilarPlugInsEv(i1);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore22HTMLPlugInImageElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore22HTMLPlugInImageElement20didMoveToNewDocumentEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 206 | 0] & 1) != 0) {
  i3 = i1 | 0;
  if ((i2 | 0) != 0) {
   __ZN7WebCore8Document41unregisterForPageCacheSuspensionCallbacksEPNS_7ElementE(i2, i3);
  }
  __ZN7WebCore8Document39registerForPageCacheSuspensionCallbacksEPNS_7ElementE(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i3);
 }
 i3 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i4, i2);
  return;
 }
 __ZN7WebCore11ImageLoader27elementDidMoveToNewDocumentEv(i3 | 0);
 i4 = i1 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i4, i2);
 return;
}
function __ZNK7WebCore22HTMLPlugInImageElement20renderEmbeddedObjectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 12 | 0;
 i3 = (HEAP32[i2 >> 2] & 2048 | 0) == 0;
 i4 = i1 + 32 | 0;
 if (i3) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (i3) {
  i7 = i4 | 0;
 } else {
  i7 = HEAP32[i4 >> 2] | 0;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 255](i3) | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i2 >> 2] & 2048 | 0) == 0) {
  i8 = i4 | 0;
 } else {
  i8 = HEAP32[i4 >> 2] | 0;
 }
 i6 = HEAP32[i8 >> 2] | 0;
 return i6 | 0;
}
function __ZN7WebCore22HTMLPlugInImageElement29simulatedMouseClickTimerFiredEPNS_22DeferrableOneShotTimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 608 >> 2] & 127](i1, 4);
 i2 = i1 + 208 | 0;
 __ZN7WebCore7Element22dispatchSimulatedClickEPNS_5EventENS_31SimulatedClickMouseEventOptionsENS_27SimulatedClickVisualOptionsE(i1 | 0, HEAP32[i2 >> 2] | 0, 2, 0);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 8 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore22HTMLPlugInImageElement15willRecalcStyleENS_5Style6ChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 255](i1 | 0) | 0) {
  return 1;
 }
 if ((HEAP8[i1 + 204 | 0] & 1) == 0) {
  return 1;
 }
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i3 = i2 | 0;
 } else {
  i3 = HEAP32[i2 >> 2] | 0;
 }
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return 1;
 }
 if (__ZN7WebCore22HTMLPlugInImageElement11isImageTypeEv(i1) | 0) {
  return 1;
 }
 if ((HEAP32[i1 + 140 >> 2] | 0) == 1) {
  return 1;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1 | 0, 65536);
 return 1;
}
function __ZN7WebCore22HTMLPlugInImageElement25startLoadingImageCallbackERNS_4NodeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 144 | 0;
 i3 = i2;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(80) | 0;
   i6 = i5;
   __ZN7WebCore15HTMLImageLoaderC1EPNS_7ElementE(i6, i1);
   i7 = HEAP32[i3 >> 2] | 0;
   HEAP32[i2 >> 2] = i5;
   if ((i7 | 0) == 0) {
    i8 = i6;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   i8 = HEAP32[i3 >> 2] | 0;
  } else {
   i8 = i4;
  }
 } while (0);
 __ZN7WebCore11ImageLoader17updateFromElementEv(i8 | 0);
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement18didAttachRenderersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (!(__ZN7WebCore22HTMLPlugInImageElement11isImageTypeEv(i1) | 0)) {
  __ZN7WebCore13ContainerNode23queuePostAttachCallbackEPFvRNS_4NodeEjES2_j(F_BASE_vii + 36 | 0, i1 | 0, 0);
  return;
 }
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i3 = i2 | 0;
 } else {
  i3 = HEAP32[i2 >> 2] | 0;
 }
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 255](i1 | 0) | 0) {
  return;
 }
 __ZN7WebCore13ContainerNode23queuePostAttachCallbackEPFvRNS_4NodeEjES2_j(F_BASE_vii + 54 | 0, i1 | 0, 0);
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement29subframeLoaderDidCreatePlugInEPKNS_6WidgetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 351 | 0] = 1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 255](i2) | 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 140 >> 2] & 255](i2) | 0)) {
    break;
   }
   HEAP32[i1 + 364 >> 2] = 1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 608 >> 2] & 127](i1, 4);
   return;
  }
 } while (0);
 i2 = i1 + 352 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 __ZN7WebCore22HTMLPlugInImageElement29setIsPrimarySnapshottedPlugInEb(i1, 1);
 HEAP8[i2] = 0;
 return;
}
function __ZN7WebCore22HTMLPlugInImageElement17startLoadingImageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 144 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = __ZN3WTF10fastMallocEj(80) | 0;
   __ZN7WebCore15HTMLImageLoaderC1EPNS_7ElementE(i4, i1 | 0);
   i5 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i5 | 0) == 0) {
    i6 = i4;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
   i6 = HEAP32[i2 >> 2] | 0;
  } else {
   i6 = i3;
  }
 } while (0);
 __ZN7WebCore11ImageLoader17updateFromElementEv(i6 | 0);
 return;
}
function __ZN7WebCore22DeferrableOneShotTimerINS_22HTMLPlugInImageElementEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 64 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  HEAP8[i2] = 0;
  __ZN7WebCore9TimerBase5startEdd(i1, +HEAPF64[i1 + 56 >> 3], +0);
  return;
 }
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i5 = i4;
 } else {
  i5 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i5 & 127](i3, i1);
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
function __ZN7WebCore22HTMLPlugInImageElement19willDetachRenderersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i3 = i2 | 0;
 } else {
  i3 = HEAP32[i2 >> 2] | 0;
 }
 i2 = i1 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 255](i2) | 0) {
    break;
   }
   HEAP8[i1 + 204 | 0] = 1;
  }
 } while (0);
 __ZN7WebCore17HTMLPlugInElement19willDetachRenderersEv(i2);
 return;
}
function __ZN7WebCore5TimerINS_22HTMLPlugInImageElementEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 127](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 127](i4, i1);
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
function viiii___ZN7WebCore17HTMLPlugInElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore17HTMLPlugInElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore22HTMLPlugInImageElement21finishParsingChildrenEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element21finishParsingChildrenEv(i1 | 0);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 255](i1 | 0) | 0) {
  return;
 }
 HEAP8[i1 + 204 | 0] = 1;
 if ((HEAP32[i1 + 12 >> 2] & 256 | 0) == 0) {
  return;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1 | 0, 32768);
 return;
}
function viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore22HTMLPlugInImageElement31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i3 = i2 | 0;
 } else {
  i3 = HEAP32[i2 >> 2] | 0;
 }
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore5Style16detachRenderTreeERNS_7ElementE(i1 | 0);
 return;
}
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore22HTMLPlugInImageElement24restartSnapshottedPlugInEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[i1 + 140 >> 2] | 0) > 2) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 608 >> 2] & 127](i1, 2);
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1 | 0, 65536);
 return;
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore22HTMLPlugInImageElement25dispatchPendingMouseClickEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 224 >> 3] != +0) {
  HEAP8[i1 + 280 | 0] = 1;
  return;
 } else {
  __ZN7WebCore9TimerBase5startEdd(i1 + 216 | 0, +HEAPF64[i1 + 272 >> 3], +0);
  return;
 }
}
function iii___ZNK7WebCore17HTMLPlugInElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore17HTMLPlugInElement23isPresentationAttributeERKNS_13QualifiedNameE(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function iii___ZNK7WebCore17HTMLPlugInElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore17HTMLPlugInElement19isKeyboardFocusableEPNS_13KeyboardEventE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore22HTMLPlugInImageElement15setDisplayStateENS_17HTMLPlugInElement12DisplayStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17HTMLPlugInElement15setDisplayStateENS0_12DisplayStateE(i1 | 0, i2);
 return;
}
function vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
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
function iii___ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element5focusEbNS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper() {
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE();
}
function __ZN7WebCore22HTMLPlugInImageElement20updateWidgetCallbackERNS_4NodeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22HTMLPlugInImageElement23updateWidgetIfNecessaryEv(i1);
 return;
}
function ii___ZN7WebCore17HTMLPlugInElement29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore17HTMLPlugInElement29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function iii___ZN7WebCore7Element13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore7Element13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
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
function vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function __ZN7WebCore22HTMLPlugInImageElement30documentDidResumeFromPageCacheEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i1 | 0, 65536);
 return;
}
function ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
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
function viii___ZN7WebCore7Element9setActiveEbb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setActiveEbb(i1 | 0, i2 | 0, i3 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function __ZN7WebCore22DeferrableOneShotTimerINS_22HTMLPlugInImageElementEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function vii___ZN7WebCore7Element22customStyleForRendererEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element22customStyleForRendererEv(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore7Element9cloneNodeEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9cloneNodeEb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element21updateFocusAppearanceEb(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore11HTMLElement15accessKeyActionEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11HTMLElement15accessKeyActionEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element27matchesReadWritePseudoClassEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore17HTMLPlugInElement15isPluginElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17HTMLPlugInElement15isPluginElementEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element25shouldAppearIndeterminateEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore17HTMLPlugInElement13supportsFocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17HTMLPlugInElement13supportsFocusEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv(i1 | 0) | 0;
}
function v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper() {
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv();
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper() {
 __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE();
}
function __ZN7WebCore5TimerINS_22HTMLPlugInImageElementEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function vii___ZNK7WebCore11HTMLElement8nodeNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11HTMLElement8nodeNameEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element13setScrollLeftEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element20shouldUseInputMethodEv(i1 | 0) | 0;
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
function vii___ZNK7WebCore11HTMLElement5titleEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11HTMLElement5titleEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element10setHoveredEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setHoveredEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element23removeAllEventListenersEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZNK7WebCore7Element16isMouseFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element16isMouseFocusableEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11HTMLElement11virtualFormEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement11virtualFormEv(i1 | 0) | 0;
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
function vii___ZNK7WebCore7Element7baseURIEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element7baseURIEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element8setFocusEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element8setFocusEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14shadowPseudoIdEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14imageSourceURLEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function __ZN7WebCore22DeferrableOneShotTimerINS_22HTMLPlugInImageElementEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element20beginParsingChildrenEv(i1 | 0);
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore11HTMLElement9draggableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement9draggableEv(i1 | 0) | 0;
}
function __ZN7WebCore22HTMLPlugInImageElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22HTMLPlugInImageElementD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willAttachRenderersEv(i1 | 0);
}
function ii___ZNK7WebCore11HTMLElement8tabIndexEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement8tabIndexEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element13focusDelegateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element13focusDelegateEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didDetachRenderersEv(i1 | 0);
}
function ii___ZNK7WebCore7Element11isFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element11isFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element12scrollHeightEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function ii___ZN7WebCore13StyledElement5styleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore13StyledElement5styleEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore7Element10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element10scrollLeftEv(i1 | 0) | 0;
}
function __ZNK7WebCore22HTMLPlugInImageElement17isRestartedPluginEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 349 | 0] & 1) != 0 | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
}
function ii___ZNK7WebCore7Element8nodeTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8nodeTypeEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element9scrollTopEv(i1 | 0) | 0;
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
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function b9(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(9);
 return 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function ii___ZN7WebCore7Element7onfocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onfocusEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element7onerrorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onerrorEv(i1 | 0) | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function __ZN7WebCore5TimerINS_22HTMLPlugInImageElementEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore7Element6onloadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onloadEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element6onblurEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onblurEv(i1 | 0) | 0;
}
function __ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZNK7WebCore7Element12namespaceURIEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 16 | 0;
}
function __ZNK7WebCore7Element6targetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
 return 0;
}
function __ZNK7WebCore7Element9localNameEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 12 | 0;
}
function __ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function vi___ZN7WebCore7Element4blurEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element4blurEv(i1 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZNK7WebCore7Element6prefixEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 8 | 0;
}
function __ZNK7WebCore22HTMLPlugInImageElement20isPlugInImageElementEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function __ZNK7WebCore21HTMLFrameOwnerElement19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore17HTMLPlugInElement23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17HTMLPlugInElement23areAuthorShadowsAllowedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore17HTMLPlugInElement18useFallbackContentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore21HTMLFrameOwnerElement13scrollingModeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element30willStopBeingFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element29privateBrowsingStateDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element25isValidFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element26didBecomeFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element22isDefaultButtonForFormEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isRequiredFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isOptionalFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isDisabledFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element20isFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element19isSpinButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element22visibilityStateChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore11HTMLElement15asFormNamedItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element18isFrameElementBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element17isTextFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element20mediaVolumeDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element20buildPendingResourceEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11HTMLElement11isLabelableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12willValidateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12isOutOfRangeEv(i1) {
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
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element9isInRangeEv(i1) {
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
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
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
  var FUNCTION_TABLE_ii = [b0,b0,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b0,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b0,__ZNK7WebCore17HTMLPlugInElement18useFallbackContentEv,b0,__ZNK7WebCore7Element9localNameEv,b0,ii___ZN7WebCore7Element7onerrorEv__wrapper,b0,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b0,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b0,__ZNK7WebCore4Node21isMediaControlElementEv,b0,__ZNK7WebCore17HTMLPlugInElement23areAuthorShadowsAllowedEv,b0,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b0,__ZNK7WebCore21HTMLFrameOwnerElement19isFrameOwnerElementEv,b0,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b0,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b0,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper
  ,b0,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b0,__ZNK7WebCore7Element17isTextFormControlEv,b0,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b0,__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv,b0,__ZNK7WebCore17HTMLPlugInElement23canContainRangeEndPointEv,b0,__ZNK7WebCore7Element6prefixEv,b0,__ZNK7WebCore7Element21isDisabledFormControlEv,b0,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b0,__ZNK7WebCore7Element12namespaceURIEv,b0,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b0,__ZNK7WebCore4Node22scriptExecutionContextEv,b0,__ZNK7WebCore7Element12isOutOfRangeEv,b0,ii___ZNK7WebCore17HTMLPlugInElement15isPluginElementEv__wrapper,b0,__ZN7WebCore11HTMLElement15asFormNamedItemEv,b0,__ZNK7WebCore4Node20isInsertionPointNodeEv
  ,b0,ii___ZN7WebCore7Element6onloadEv__wrapper,b0,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b0,__ZNK7WebCore7Element9isInRangeEv,b0,__ZNK7WebCore7Element20isFormControlElementEv,b0,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b0,__ZNK7WebCore7Element18isFrameElementBaseEv,b0,ii___ZNK7WebCore17HTMLPlugInElement13supportsFocusEv__wrapper,b0,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b0,__ZNK7WebCore7Element21isOptionalFormControlEv,b0,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b0,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b0,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b0,ii___ZNK7WebCore11HTMLElement8tabIndexEv__wrapper,b0,__ZNK7WebCore4Node16nonRendererStyleEv,b0,__ZNK7WebCore7Element21isRequiredFormControlEv
  ,b0,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b0,ii___ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv__wrapper,b0,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b0,ii___ZN7WebCore7Element7onfocusEv__wrapper,b0,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b0,ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper,b0,ii___ZN7WebCore17HTMLPlugInElement29willRespondToMouseClickEventsEv__wrapper,b0,ii___ZNK7WebCore11HTMLElement9draggableEv__wrapper,b0,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b0,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b0,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b0,__ZN7WebCore4Node11sheetLoadedEv,b0,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b0,__ZN7WebCore7Element25isValidFormControlElementEv,b0,ii___ZN7WebCore7Element12scrollHeightEv__wrapper
  ,b0,ii___ZNK7WebCore7Element16isMouseFocusableEv__wrapper,b0,ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper,b0,__ZNK7WebCore4Node14customPseudoIdEv,b0,__ZNK7WebCore7Element19isSpinButtonElementEv,b0,ii___ZNK7WebCore11HTMLElement11virtualFormEv__wrapper,b0,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b0,__ZNK7WebCore4Node19isCharacterDataNodeEv,b0,__ZNK7WebCore21HTMLFrameOwnerElement13scrollingModeEv,b0,__ZNK7WebCore7Element12willValidateEv,b0,ii___ZN7WebCore4Node6toNodeEv__wrapper,b0,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b0,ii___ZN7WebCore7Element6onblurEv__wrapper,b0,__ZNK7WebCore22HTMLPlugInImageElement20isPlugInImageElementEv,b0,__ZNK7WebCore11HTMLElement11isLabelableEv,b0,__ZNK7WebCore4Node15isMediaControlsEv
  ,b0,__ZNK7WebCore22HTMLPlugInImageElement17isRestartedPluginEv,b0,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b0,__ZNK7WebCore4Node15isAttributeNodeEv,b0,__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b2,__ZN7WebCore7Element20buildPendingResourceEv,b2,__ZN7WebCore22HTMLPlugInImageElement30documentDidResumeFromPageCacheEv,b2,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b2,__ZN7WebCore5TimerINS_22HTMLPlugInImageElementEE5firedEv,b2,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b2,__ZN7WebCore22HTMLPlugInImageElement21finishParsingChildrenEv,b2,__ZN7WebCore5TimerINS_22HTMLPlugInImageElementEED1Ev,b2,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b2,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b2,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b2,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b2,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b2,__ZN7WebCore22DeferrableOneShotTimerINS_22HTMLPlugInImageElementEE5firedEv
  ,b2,__ZN7WebCore22HTMLPlugInImageElementD2Ev,b2,__ZN7WebCore5TimerINS_22HTMLPlugInImageElementEED0Ev,b2,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b2,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b2,__ZN7WebCore22DeferrableOneShotTimerINS_22HTMLPlugInImageElementEED1Ev,b2,__ZN7WebCore22DeferrableOneShotTimerINS_22HTMLPlugInImageElementEED0Ev,b2,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b2,__ZN7WebCore22HTMLPlugInImageElementD0Ev,b2,__ZN7WebCore22HTMLPlugInImageElement18didAttachRenderersEv,b2,__ZN7WebCore22HTMLPlugInImageElement25dispatchPendingMouseClickEv,b2,__ZN7WebCore22HTMLPlugInImageElement31documentWillSuspendForPageCacheEv,b2,vi___ZN7WebCore7Element4blurEv__wrapper,b2,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b2,__ZN7WebCore7Element22visibilityStateChangedEv,b2,__ZN7WebCore22HTMLPlugInImageElement19willDetachRenderersEv
  ,b2,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN7WebCore11HTMLElement15accessKeyActionEb__wrapper,b3,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,__ZNK7WebCore7Element6targetEv,b3,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b3,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b3,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b3,__ZN7WebCore22HTMLPlugInImageElement15setDisplayStateENS_17HTMLPlugInElement12DisplayStateE,b3,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b3,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b3,__ZN7WebCore22HTMLPlugInImageElement29simulatedMouseClickTimerFiredEPNS_22DeferrableOneShotTimerIS0_EE,b3,__ZN7WebCore22HTMLPlugInImageElement20didMoveToNewDocumentEPNS_8DocumentE,b3,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE
  ,b3,__ZN7WebCore22HTMLPlugInImageElement19defaultEventHandlerEPNS_5EventE,b3,vii___ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b3,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b3,__ZN7WebCore22HTMLPlugInImageElement20updateWidgetCallbackERNS_4NodeEj,b3,vii___ZN7WebCore7Element11removedFromERNS_13ContainerNodeE__wrapper,b3,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b3,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b3,__ZN7WebCore22HTMLPlugInImageElement14updateSnapshotEN3WTF10PassRefPtrINS_5ImageEEE,b3,vii___ZN7WebCore7Element8setFocusEb__wrapper,b3,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b3,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b3,__ZN7WebCore22HTMLPlugInImageElement24removeSnapshotTimerFiredEPNS_5TimerIS0_EE,b3,__ZN7WebCore22HTMLPlugInImageElement25startLoadingImageCallbackERNS_4NodeEj,b3,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b3,vii___ZNK7WebCore11HTMLElement8nodeNameEv__wrapper
  ,b3,vii___ZN7WebCore7Element22customStyleForRendererEv__wrapper,b3,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b3,vii___ZNK7WebCore11HTMLElement5titleEv__wrapper,b3,__ZN7WebCore22HTMLPlugInImageElement25didAddUserAgentShadowRootEPNS_10ShadowRootE,b3,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_iiiiiii = [b4,b4];
  var FUNCTION_TABLE_iiiii = [b5,b5,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b5,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore22HTMLPlugInImageElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE,b6,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b6,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b6,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b6,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b6,viii___ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE__wrapper,b6,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b6];
  var FUNCTION_TABLE_v = [b7,b7,v____cxa_pure_virtual__wrapper,b7,v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b7,v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b7,v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b7,b7,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b8,iii___ZN7WebCore7Element13computedStyleENS_8PseudoIdE__wrapper,b8,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b8,iii___ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE__wrapper,b8,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b8,iii___ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE__wrapper,b8,__ZN7WebCore22HTMLPlugInImageElement15willRecalcStyleENS_5Style6ChangeE,b8,iii___ZNK7WebCore17HTMLPlugInElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b8,iii___ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE__wrapper,b8,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b8,iii___ZNK7WebCore17HTMLPlugInElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b8,iii___ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE__wrapper,b8,b8,b8,b8
  ,b8,b8,b8];
  var FUNCTION_TABLE_iiiiii = [b9,b9,__ZN7WebCore22HTMLPlugInImageElement13requestObjectERKN3WTF6StringES4_RKNS1_6VectorIS2_Lj0ENS1_15CrashOnOverflowEEES9_,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b10,viiii___ZN7WebCore17HTMLPlugInElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b10,b10,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_iiiii: dynCall_iiiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_iiiii": invoke_iiiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames8nameAttrE": __ZN7WebCore9HTMLNames8nameAttrE, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore22HTMLPlugInImageElement21partOfSnapshotOverlayEPNS_4NodeE","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZNK7WebCore17HTMLPlugInElement18useFallbackContentEv","__ZN7WebCore7Element20buildPendingResourceEv","__ZN7WebCore22HTMLPlugInImageElement17startLoadingImageEv","__ZNK7WebCore7Element6targetEv","__ZN7WebCore22HTMLPlugInImageElement30documentDidResumeFromPageCacheEv","__ZN7WebCore5TimerINS_22HTMLPlugInImageElementEE5firedEv","__ZN7WebCore22HTMLPlugInImageElement20updateWidgetCallbackERNS_4NodeEj","_memcpy","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_RS1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore17HTMLPlugInElement23areAuthorShadowsAllowedEv","__ZN7WebCore22HTMLPlugInImageElement21finishParsingChildrenEv","__ZNK7WebCore21HTMLFrameOwnerElement19isFrameOwnerElementEv","__ZN7WebCore5TimerINS_22HTMLPlugInImageElementEED1Ev","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore22HTMLPlugInImageElement21restartSimilarPlugInsEv","__ZN7WebCore22HTMLPlugInImageElement19checkSnapshotStatusEv","__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore22HTMLPlugInImageElementEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZN7WebCore22HTMLPlugInImageElement29subframeLoaderDidCreatePlugInEPKNS_6WidgetE","__ZN7WebCore16ScriptController11windowShellERNS_15DOMWrapperWorldE","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZNK7WebCore7Element12namespaceURIEv","__ZN7WebCore22HTMLPlugInImageElement15setDisplayStateENS_17HTMLPlugInElement12DisplayStateE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore22HTMLPlugInImageElement11isImageTypeEv","__ZN7WebCore22HTMLPlugInImageElement25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZN7WebCore22HTMLPlugInImageElement15willRecalcStyleENS_5Style6ChangeE","__ZN7WebCore22HTMLPlugInImageElement20userDidClickSnapshotEN3WTF10PassRefPtrINS_10MouseEventEEEb","__ZN7WebCore22HTMLPlugInImageElement21allowedToLoadFrameURLERKN3WTF6StringE","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore7Element12isOutOfRangeEv","__ZN7WebCore22HTMLPlugInImageElement29simulatedMouseClickTimerFiredEPNS_22DeferrableOneShotTimerIS0_EE","__ZNK7WebCore17HTMLPlugInElement23canContainRangeEndPointEv","__ZN7WebCore22HTMLPlugInImageElement20didMoveToNewDocumentEPNS_8DocumentE","__ZN7WebCore11HTMLElement15asFormNamedItemEv","__ZN7WebCore22HTMLPlugInImageElement23updateWidgetIfNecessaryEv","__ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZNK7WebCore7Element6prefixEv","__ZNK7WebCore7Element9isInRangeEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore22HTMLPlugInImageElement19defaultEventHandlerEPNS_5EventE","__ZN7WebCore5TimerINS_22HTMLPlugInImageElementEED0Ev","__ZNK7WebCore22HTMLPlugInImageElement20renderEmbeddedObjectEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZN7WebCore22HTMLPlugInImageElementC2ERKNS_13QualifiedNameERNS_8DocumentEbNS_28PreferPlugInsForImagesOptionE","__ZN7WebCore22HTMLPlugInImageElement30checkSizeChangeForSnapshottingEv","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZNK7WebCore4Node16nonRendererStyleEv","__ZN7WebCore4Node24startLoadingDynamicSheetEv","_memset","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","__ZN7WebCore22HTMLPlugInImageElement14updateSnapshotEN3WTF10PassRefPtrINS_5ImageEEE","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN3JSC8JSString6createERNS_2VMEN3WTF10PassRefPtrINS3_10StringImplEEE","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZN7WebCore22HTMLPlugInImageElement13requestObjectERKN3WTF6StringES4_RKNS1_6VectorIS2_Lj0ENS1_15CrashOnOverflowEEES9_","__ZN7WebCore22HTMLPlugInImageElementD2Ev","__ZN7WebCore22HTMLPlugInImageElement30subframeLoaderWillCreatePlugInERKNS_3URLE","__ZN7WebCore22DeferrableOneShotTimerINS_22HTMLPlugInImageElementEE5firedEv","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element25isValidFormControlElementEv","__ZN7WebCore22DeferrableOneShotTimerINS_22HTMLPlugInImageElementEED1Ev","__ZN7WebCore22HTMLPlugInImageElement24removeSnapshotTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore22DeferrableOneShotTimerINS_22HTMLPlugInImageElementEED0Ev","__ZN7WebCore22HTMLPlugInImageElement25startLoadingImageCallbackERNS_4NodeEj","__ZN7WebCore22HTMLPlugInImageElementD0Ev","__ZNK7WebCore4Node14customPseudoIdEv","__ZN7WebCoreL42addPlugInsFromNodeListMatchingPlugInOriginERN3WTF6VectorINS0_6RefPtrINS_22HTMLPlugInImageElementEEELj0ENS0_15CrashOnOverflowEEENS0_10PassRefPtrINS_8NodeListEEERKNS0_6StringESD_","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_","__ZN7WebCore22HTMLPlugInImageElement18didAttachRenderersEv","__ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE","__ZN7WebCore22HTMLPlugInImageElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZNK3WTF7HashMapINS_6StringES1_NS_10StringHashENS_10HashTraitsIS1_EES4_E3getERKS1_","__ZN7WebCore22HTMLPlugInImageElement25dispatchPendingMouseClickEv","__ZNK7WebCore21HTMLFrameOwnerElement13scrollingModeEv","__ZN7WebCore22HTMLPlugInImageElement31documentWillSuspendForPageCacheEv","__ZN7WebCore22HTMLPlugInImageElement29setIsPrimarySnapshottedPlugInEb","__ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore7Element12willValidateEv","__ZN7WebCore22HTMLPlugInImageElement24restartSnapshottedPlugInEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZNK7WebCore22HTMLPlugInImageElement20isPlugInImageElementEv","__ZNK7WebCore11HTMLElement11isLabelableEv","__ZNK7WebCore4Node15isMediaControlsEv","__ZNK7WebCore22HTMLPlugInImageElement17isRestartedPluginEv","__ZN7WebCore22HTMLPlugInImageElement19willDetachRenderersEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore22HTMLPlugInImageElement25wouldLoadAsNetscapePluginERKN3WTF6StringES4_","__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv"]

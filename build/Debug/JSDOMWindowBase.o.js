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
H_BASE = parentModule["_malloc"](176 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 176;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15JSDOMWindowBaseC1ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_9DOMWindowEEEPNS_16JSDOMWindowShellE;
/* memory initializer */ allocate([87,105,110,100,111,119,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore16JSDOMWindowShell6s_infoE=env.__ZN7WebCore16JSDOMWindowShell6s_infoE|0;
  var __ZN7WebCore17JSDOMGlobalObject6s_infoE=env.__ZN7WebCore17JSDOMGlobalObject6s_infoE|0;
  var __ZN7WebCore11JSDOMWindow6s_infoE=env.__ZN7WebCore11JSDOMWindow6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore15JSDOMWindowBase25s_globalObjectMethodTableE=(H_BASE+144)|0;
  var __ZN7WebCore15JSDOMWindowBase6s_infoE=(H_BASE+40)|0;
  var __ZTVN7WebCore19WebCoreJSClientDataE=(H_BASE+16)|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3JSC28symbolTablePutWithAttributesIN7WebCore15JSDOMWindowBaseEEEbPT_RNS_2VMENS_12PropertyNameENS_7JSValueEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i3 = (HEAP32[i7 + 16 >> 2] & 4 | 0) != 0 ? i7 : 0;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 L1 : do {
  if ((i7 | 0) == 0) {
   i8 = HEAP32[i6 + 8 >> 2] | 0;
   i9 = i8 << 3 | 0;
   i10 = i8;
  } else {
   i8 = HEAP32[i6 + 12 >> 2] | 0;
   i11 = HEAP32[i3 + 16 >> 2] | 0;
   i12 = i11 >>> 7;
   i13 = i12 & i8;
   i14 = i7 + (i13 << 3) | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   L4 : do {
    if ((i15 | 0) == (i3 | 0)) {
     i16 = i14;
    } else {
     i17 = (i11 >>> 30) + ~i12 | 0;
     i18 = i17 << 12 ^ i17;
     i17 = i18 >>> 7 ^ i18;
     i18 = i17 << 2 ^ i17;
     i17 = i18 >>> 20 ^ i18 | 1;
     i18 = 0;
     i19 = i13;
     i20 = i15;
     while (1) {
      if ((i20 | 0) == 0) {
       break;
      }
      i21 = (i18 | 0) == 0 ? i17 : i18;
      i22 = i21 + i19 & i8;
      i23 = i7 + (i22 << 3) | 0;
      i24 = HEAP32[i23 >> 2] | 0;
      if ((i24 | 0) == (i3 | 0)) {
       i16 = i23;
       break L4;
      } else {
       i18 = i21;
       i19 = i22;
       i20 = i24;
      }
     }
     i20 = HEAP32[i6 + 8 >> 2] | 0;
     i9 = i7 + (i20 << 3) | 0;
     i10 = i20;
     break L1;
    }
   } while (0);
   i8 = HEAP32[i6 + 8 >> 2] | 0;
   i9 = (i16 | 0) == 0 ? i7 + (i8 << 3) | 0 : i16;
   i10 = i8;
  }
 } while (0);
 if ((i9 | 0) == (i7 + (i10 << 3) | 0)) {
  i25 = 0;
  STACKTOP = i2;
  return i25 | 0;
 }
 i10 = i9 + 4 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 & 1 | 0) == 0) {
   i7 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i16 = i4 | 0;
   i6 = HEAP32[i16 >> 2] | 0;
   i3 = HEAP32[i16 + 4 >> 2] | 0;
   i16 = i7 | 0;
   ((function() {
   }))();
   i8 = i7 + 4 | 0;
   i15 = HEAP8[i8] | 0;
   ((function() {
   }))();
   if ((i15 | 0) == 0) {
    i13 = i7 + 24 | 0;
    HEAP32[i13 >> 2] = i6;
    HEAP32[i13 + 4 >> 2] = i3;
    HEAP8[i8] = 1;
    break;
   } else if ((i15 | 0) != 1) {
    break;
   }
   i15 = i7 + 24 | 0;
   if ((i6 | 0) == (HEAP32[i15 >> 2] | 0) & (i3 | 0) == (HEAP32[i15 + 4 >> 2] | 0)) {
    break;
   }
   HEAP32[i15 >> 2] = 0;
   HEAP32[i15 + 4 >> 2] = -6;
   ((function() {
   }))();
   i15 = HEAP8[i8] | 0;
   ((function() {
   }))();
   do {
    if (i15 << 24 >> 24 == 1) {
     ((function() {
     }))();
     i3 = HEAP8[i8] | 0;
     ((function() {
     }))();
     if (i3 << 24 >> 24 != 1) {
      break;
     }
     __ZN3JSC13WatchpointSet11fireAllSlowEv(i16);
    }
   } while (0);
   HEAP8[i8] = 2;
  }
 } while (0);
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 & 1 | 0) == 0) {
  i16 = i9 | 0;
  i26 = i16;
  i27 = HEAP32[i16 >> 2] | 0;
 } else {
  i26 = i10;
  i27 = i9;
 }
 HEAP32[i26 >> 2] = i5 & 6 | i27 & -16 | 9;
 i27 = HEAP32[i10 >> 2] | 0;
 if ((i27 & 1 | 0) == 0) {
  i28 = HEAP32[i27 >> 2] | 0;
 } else {
  i28 = i27;
 }
 i27 = i28 >> 4;
 i28 = i27 >>> 4;
 if ((HEAP32[i1 + 28 >> 2] | 0) >>> 0 <= i28 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i10 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + (i28 << 2) >> 2] | 0;
 i28 = i27 & 15;
 if ((HEAP32[i10 + 8 >> 2] | 0) >>> 0 <= i28 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i27 = i4 | 0;
 i4 = HEAP32[i27 + 4 >> 2] | 0;
 i1 = (HEAP32[i10 >> 2] | 0) + (i28 << 3) | 0;
 HEAP32[i1 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i1 + 4 >> 2] = i4;
 i25 = 1;
 STACKTOP = i2;
 return i25 | 0;
}
function __ZN7WebCore15JSDOMWindowBase14updateDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = __ZN3JSC14JSGlobalObject10globalExecEv(i1) | 0;
 i6 = i5 + 16 | 0;
 i7 = HEAP32[(HEAP32[i6 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[(HEAP32[i7 + 20884 >> 2] | 0) + 452 >> 2];
 i8 = i1;
 i9 = __ZNK7WebCore9DOMWindow8documentEv(HEAP32[i1 + 660 >> 2] | 0) | 0;
 i10 = i9 | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i4 + 4 >> 2] = -3;
  HEAP32[i4 >> 2] = 0;
  i11 = __ZN3JSC28symbolTablePutWithAttributesIN7WebCore15JSDOMWindowBaseEEEbPT_RNS_2VMENS_12PropertyNameENS_7JSValueEj(i1, i7, i3, i4, 10) | 0;
  STACKTOP = i2;
  return;
 }
 i12 = HEAP32[(HEAP32[(HEAP32[HEAP32[i6 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
 do {
  if ((HEAP8[i12 + 92 | 0] & 1) == 0) {
   i13 = 8;
  } else {
   i6 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i13 = 8;
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] & 3 | 0) != 0) {
    i13 = 8;
    break;
   }
   i14 = HEAP32[i6 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i13 = 8;
    break;
   }
   i15 = i14 | 0;
   i13 = 17;
  }
 } while (0);
 L10 : do {
  if ((i13 | 0) == 8) {
   i14 = i9;
   i6 = HEAP32[i12 + 12 >> 2] | 0;
   i16 = HEAP32[i12 + 4 >> 2] | 0;
   i17 = i9;
   i18 = i17 + ~(i17 << 15) | 0;
   i17 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i17 >>> 6 ^ i17;
   i17 = i18 + ~(i18 << 11) | 0;
   i18 = i17 >>> 16 ^ i17;
   if ((i16 | 0) == 0) {
    break;
   }
   i17 = i6 & i18;
   i19 = i16 + (i17 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   if ((i20 | 0) == (i14 | 0)) {
    i21 = i19;
   } else {
    i19 = (i18 >>> 23) + ~i18 | 0;
    i18 = i19 << 12 ^ i19;
    i19 = i18 >>> 7 ^ i18;
    i18 = i19 << 2 ^ i19;
    i19 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i22 = i17;
    i17 = i20;
    while (1) {
     if ((i17 | 0) == 0) {
      break L10;
     }
     i20 = (i18 | 0) == 0 ? i19 : i18;
     i23 = i20 + i22 & i6;
     i24 = i16 + (i23 << 3) | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     if ((i25 | 0) == (i14 | 0)) {
      i21 = i24;
      break;
     } else {
      i18 = i20;
      i22 = i23;
      i17 = i25;
     }
    }
   }
   if ((i21 | 0) == 0) {
    break;
   }
   i17 = HEAP32[i21 + 4 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] & 3 | 0) != 0) {
    break;
   }
   i15 = HEAP32[i17 >> 2] | 0;
   i13 = 17;
  }
 } while (0);
 do {
  if ((i13 | 0) == 17) {
   if ((i15 | 0) == 0) {
    break;
   }
   HEAP32[i4 + 4 >> 2] = -5;
   HEAP32[i4 >> 2] = i15;
   i11 = __ZN3JSC28symbolTablePutWithAttributesIN7WebCore15JSDOMWindowBaseEEEbPT_RNS_2VMENS_12PropertyNameENS_7JSValueEj(i1, i7, i3, i4, 10) | 0;
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZN7WebCore13createWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i4, i5, i8, i10);
 i11 = __ZN3JSC28symbolTablePutWithAttributesIN7WebCore15JSDOMWindowBaseEEEbPT_RNS_2VMENS_12PropertyNameENS_7JSValueEj(i1, i7, i3, i4, 10) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore19WebCoreJSClientDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = i1 + 44 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
   } else {
    HEAP32[i4 >> 2] = i5;
   }
   i5 = HEAP32[i2 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i6 = i1 + 8 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i5 = i3 + (i4 * 20 & -1) | 0;
 L15 : do {
  if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
   i7 = i3;
  } else {
   L17 : do {
    if ((i4 | 0) == 0) {
     i8 = i3;
    } else {
     i9 = i3;
     while (1) {
      i10 = HEAP32[i9 >> 2] | 0;
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i8 = i9;
       break L17;
      }
      i10 = i9 + 20 | 0;
      if ((i10 | 0) == (i5 | 0)) {
       i7 = i3;
       break L15;
      } else {
       i9 = i10;
      }
     }
    }
   } while (0);
   if ((i8 | 0) == (i5 | 0)) {
    i7 = i3;
    break;
   } else {
    i11 = i8;
   }
   while (1) {
    __ZNK3JSC9HashTable11deleteTableEv(i11 + 4 | 0);
    i9 = i11 + 20 | 0;
    L24 : do {
     if ((i9 | 0) == (i5 | 0)) {
      i12 = i5;
     } else {
      i10 = i9;
      while (1) {
       i13 = HEAP32[i10 >> 2] | 0;
       if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
        i12 = i10;
        break L24;
       }
       i13 = i10 + 20 | 0;
       if ((i13 | 0) == (i5 | 0)) {
        i12 = i5;
        break;
       } else {
        i10 = i13;
       }
      }
     }
    } while (0);
    i9 = HEAP32[i2 >> 2] | 0;
    if ((i12 | 0) == (i9 + ((HEAP32[i6 >> 2] | 0) * 20 & -1) | 0)) {
     i7 = i9;
     break;
    } else {
     i11 = i12;
    }
   }
  }
 } while (0);
 if ((i7 | 0) == 0) {
  i14 = i1 | 0;
  __ZN3JSC2VM10ClientDataD2Ev(i14);
  return;
 }
 __ZN3WTF8fastFreeEPv(i7);
 i14 = i1 | 0;
 __ZN3JSC2VM10ClientDataD2Ev(i14);
 return;
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
function __ZN7WebCore15JSDOMWindowBase14finishCreationERN3JSC2VMEPNS_16JSDOMWindowShellE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 __ZN7WebCore17JSDOMGlobalObject14finishCreationERN3JSC2VMEPNS1_8JSObjectE(i1, i2, i3 | 0);
 i3 = i2 + 20884 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i2 + 452 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i2;
 } else {
  i2 = i6 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  i7 = HEAP32[i3 >> 2] | 0;
 }
 i3 = i5 + 8 | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = -3;
 HEAP32[i5 + 16 >> 2] = 10;
 i3 = HEAP32[i1 + 664 >> 2] | 0;
 i2 = (i3 | 0) == 0;
 i6 = HEAP32[i7 + 716 >> 2] | 0;
 HEAP32[i5 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i5 + 32 | 0;
 HEAP32[i7 >> 2] = (i2 ? 0 : 0) | i3;
 HEAP32[i7 + 4 >> 2] = i2 ? -6 : -5;
 HEAP32[i5 + 40 >> 2] = 10;
 __ZN3JSC14JSGlobalObject16addStaticGlobalsEPNS0_18GlobalPropertyInfoEi(i1, i5 | 0, 2);
 i1 = HEAP32[i5 + 24 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i2 = i1 | 0;
   i7 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i2 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i1 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 40 >> 2] = H_BASE + 8;
 HEAP32[H_BASE + 44 >> 2] = __ZN7WebCore17JSDOMGlobalObject6s_infoE;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 10;
}
function __ZN7WebCore15JSDOMWindowBase20queueTaskToEventLoopEPKN3JSC14JSGlobalObjectEN3WTF10PassRefPtrINS1_9MicrotaskEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZNK7WebCore9DOMWindow8documentEv(HEAP32[i1 + 660 >> 2] | 0) | 0;
 i7 = (i6 | 0) == 0 ? 0 : i6 + 88 | 0;
 i6 = HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(8) | 0;
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i2;
 __ZN7WebCore18JSGlobalObjectTaskC1EPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrIN3JSC9MicrotaskEEE(i8, i1, i4);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 4 | 0;
   i1 = i9 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i1 >> 2] = i2;
    break;
   }
   i2 = i9 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
  }
 } while (0);
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = i8;
 FUNCTION_TABLE_vii[i6 & 15](i7, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore25initNormalWorldClientDataEPN3JSC2VME(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __ZN3WTF10fastMallocEj(48) | 0;
 HEAP32[i2 >> 2] = H_BASE + 24;
 _memset(i2 + 4 | 0, 0, 44) | 0;
 HEAP32[i1 + 20612 >> 2] = i2;
 i3 = __ZN3WTF10fastMallocEj(96) | 0;
 __ZN7WebCore15DOMWrapperWorldC1EPN3JSC2VMEb(i3, i1, 1);
 i4 = i2 + 44 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore27WebCoreTypedArrayControllerC1Ev(i2);
 i4 = i1 + 24768 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i1 >> 2] = i4;
  return;
 }
 i4 = i2 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
 return;
}
function __ZN7WebCore15JSDOMWindowBaseC2ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_9DOMWindowEEEPNS_16JSDOMWindowShellE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i5 + 16 >> 2] | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore17JSDOMGlobalObjectC2ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_15DOMWrapperWorldEEEPKNS1_23GlobalObjectMethodTableE(i1, i2, i3, i7, H_BASE + 144);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i9 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 660 >> 2] = i4;
 HEAP32[i1 + 664 >> 2] = i5;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore15JSDOMWindowBaseC1ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_9DOMWindowEEEPNS_16JSDOMWindowShellE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i5 + 16 >> 2] | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore17JSDOMGlobalObjectC2ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_15DOMWrapperWorldEEEPKNS1_23GlobalObjectMethodTableE(i1, i2, i3, i7, H_BASE + 144);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i9 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 660 >> 2] = i4;
 HEAP32[i1 + 664 >> 2] = i5;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore15JSDOMWindowBase7destroyEPN3JSC6JSCellE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 660 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 36 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 36 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 7](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 656 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 632 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 612 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1;
  __ZN3JSC14JSGlobalObjectD2Ev(i6);
  return;
 }
 __ZN3WTF8fastFreeEPv(i2);
 i6 = i1;
 __ZN3JSC14JSGlobalObjectD2Ev(i6);
 return;
}
function __ZN7WebCore13toJSDOMWindowEN3JSC7JSValueE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 i3 = i1;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 if ((HEAP32[i1 + 4 >> 2] | 0) != -5) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 if ((HEAPU8[(HEAP32[HEAP32[i1 >> 2] >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = i3;
 if ((HEAP32[(i3 & -65536) + 1048 >> 2] | 0) == 2) {
  i5 = i1 + 8 | 0;
 } else {
  i5 = (HEAP32[i1 >> 2] | 0) + 32 | 0;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == (__ZN7WebCore11JSDOMWindow6s_infoE | 0)) {
  i4 = i3;
  STACKTOP = i2;
  return i4 | 0;
 }
 if ((i1 | 0) != (__ZN7WebCore16JSDOMWindowShell6s_infoE | 0)) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 i4 = HEAP32[i3 + 12 >> 2] | 0;
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore15JSDOMWindowBase8commonVMEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i1 | 0;
 i3 = HEAP32[H_BASE + 176 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  STACKTOP = i1;
  return i4 | 0;
 }
 __ZN7WebCore16ScriptController19initializeThreadingEv();
 __ZN3JSC2VM12createLeakedENS_8HeapTypeE(i2, 1);
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[H_BASE + 176 >> 2] = i2;
 i2 = __ZN3WTF13currentThreadEv() | 0;
 HEAP32[(HEAP32[H_BASE + 176 >> 2] | 0) + 24780 >> 2] = i2;
 __ZN7WebCore25initNormalWorldClientDataEPN3JSC2VME(HEAP32[H_BASE + 176 >> 2] | 0);
 i4 = HEAP32[H_BASE + 176 >> 2] | 0;
 STACKTOP = i1;
 return i4 | 0;
}
function __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_9DOMWindowE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i3 = HEAP32[i4 + 52 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  i4 = __ZN7WebCore16ScriptController11windowShellERNS_15DOMWrapperWorldE(HEAP32[i3 + 460 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i4 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_9DOMWindowE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i4 = HEAP32[i3 + 52 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  i3 = __ZN7WebCore16ScriptController11windowShellERNS_15DOMWrapperWorldE(HEAP32[i4 + 460 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0) | 0;
  HEAP32[i1 + 4 >> 2] = (i3 | 0) == 0 ? -6 : -5;
  HEAP32[i1 >> 2] = i3;
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
function __ZN7WebCore15JSDOMWindowBase17supportsProfilingEPKN3JSC14JSGlobalObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 660 >> 2] | 0) + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore19InspectorController15profilerEnabledEv(HEAP32[i1 + 40 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore15JSDOMWindowBase22supportsRichSourceInfoEPKN3JSC14JSGlobalObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 660 >> 2] | 0) + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore19InspectorController7enabledEv(HEAP32[i1 + 40 >> 2] | 0) | 0;
 return i3 | 0;
}
function iiiiii___ZN3JSC14JSGlobalObject17defineOwnPropertyEPNS_8JSObjectEPNS_9ExecStateENS_12PropertyNameERKNS_18PropertyDescriptorEb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN3JSC14JSGlobalObject17defineOwnPropertyEPNS_8JSObjectEPNS_9ExecStateENS_12PropertyNameERKNS_18PropertyDescriptorEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function viiii___ZN3JSC19JSSymbolTableObject27getOwnNonIndexPropertyNamesEPNS_8JSObjectEPNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC19JSSymbolTableObject27getOwnNonIndexPropertyNamesEPNS_8JSObjectEPNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiiii___ZN3JSC14JSGlobalObject3putEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN3JSC14JSGlobalObject3putEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function iiiii___ZN3JSC14JSGlobalObject18getOwnPropertySlotEPNS_8JSObjectEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN3JSC14JSGlobalObject18getOwnPropertySlotEPNS_8JSObjectEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore15JSDOMWindowBase21shouldInterruptScriptEPKN3JSC14JSGlobalObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 660 >> 2] | 0) + 52 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZN7WebCore6Chrome25shouldInterruptJavaScriptEv(HEAP32[i2 + 20 >> 2] | 0) | 0;
 return i3 | 0;
}
function viiii___ZN3JSC8JSObject19getOwnPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject19getOwnPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZN3JSC8JSObject16getPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject16getPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore13toJSDOMWindowEPNS_5FrameERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(__ZN7WebCore16ScriptController11windowShellERNS_15DOMWrapperWorldE(HEAP32[i1 + 460 >> 2] | 0, i2) | 0) + 12 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore15JSDOMWindowBase28javaScriptExperimentsEnabledEPKN3JSC14JSGlobalObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 660 >> 2] | 0) + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[(HEAP32[i2 + 36 >> 2] | 0) + 186 | 0] & 2) != 0;
 return i3 | 0;
}
function iiiii___ZN3JSC8JSObject25getOwnPropertySlotByIndexEPS0_PNS_9ExecStateEjRNS_12PropertySlotE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN3JSC8JSObject25getOwnPropertySlotByIndexEPS0_PNS_9ExecStateEjRNS_12PropertySlotE(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function viiiii___ZN3JSC8JSObject10putByIndexEPNS_6JSCellEPNS_9ExecStateEjNS_7JSValueEb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN3JSC8JSObject10putByIndexEPNS_6JSCellEPNS_9ExecStateEjNS_7JSValueEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function iiii___ZN3JSC19JSSymbolTableObject14deletePropertyEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN3JSC19JSSymbolTableObject14deletePropertyEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viiii___ZN3JSC8JSObject12defaultValueEPKS0_PNS_9ExecStateENS_22PreferredPrimitiveTypeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject12defaultValueEPKS0_PNS_9ExecStateENS_22PreferredPrimitiveTypeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCoreL21shouldAllowAccessFromEPKN3JSC14JSGlobalObjectEPNS0_9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore15BindingSecurity28shouldAllowAccessToDOMWindowEPN3JSC9ExecStateERNS_9DOMWindowENS_23SecurityReportingOptionE(i2, HEAP32[i1 + 660 >> 2] | 0, 1) | 0;
}
function viiii___ZN3JSC14JSGlobalObject6toThisEPNS_6JSCellEPNS_9ExecStateENS_8ECMAModeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC14JSGlobalObject6toThisEPNS_6JSCellEPNS_9ExecStateENS_8ECMAModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZN3JSC6JSCell17customHasInstanceEPNS_8JSObjectEPNS_9ExecStateENS_7JSValueE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN3JSC6JSCell17customHasInstanceEPNS_8JSObjectEPNS_9ExecStateENS_7JSValueE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN3JSC8JSObject16copyBackingStoreEPNS_6JSCellERNS_11CopyVisitorENS_9CopyTokenE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN3JSC8JSObject16copyBackingStoreEPNS_6JSCellERNS_11CopyVisitorENS_9CopyTokenE(i1 | 0, i2 | 0, i3 | 0);
}
function iiii___ZN3JSC8JSObject21deletePropertyByIndexEPNS_6JSCellEPNS_9ExecStateEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN3JSC8JSObject21deletePropertyByIndexEPNS_6JSCellEPNS_9ExecStateEj(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore15JSDOMWindowBase17printErrorMessageERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25printErrorMessageForFrameEPNS_5FrameERKN3WTF6StringE(HEAP32[(HEAP32[i1 + 660 >> 2] | 0) + 52 >> 2] | 0, i2);
 return;
}
function vii___ZN7WebCore17JSDOMGlobalObject13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17JSDOMGlobalObject13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore15JSDOMWindowBase22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore9DOMWindow8documentEv(HEAP32[i1 + 660 >> 2] | 0) | 0;
 return ((i2 | 0) == 0 ? 0 : i2 + 88 | 0) | 0;
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
function __ZN7WebCore15JSDOMWindowBase34shouldInterruptScriptBeforeTimeoutEPKN3JSC14JSGlobalObjectE(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[(HEAP32[i1 + 660 >> 2] | 0) + 52 >> 2] | 0) + 32 >> 2] | 0) == 0 | 0;
}
function iii___ZN3JSC6JSCell16getConstructDataEPS0_RNS_13ConstructDataE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN3JSC6JSCell16getConstructDataEPS0_RNS_13ConstructDataE(i1 | 0, i2 | 0) | 0;
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
function vii___ZN3JSC6JSCell17getTypedArrayImplEPNS_17JSArrayBufferViewE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3JSC6JSCell17getTypedArrayImplEPNS_17JSArrayBufferViewE(i1 | 0, i2 | 0);
}
function ii___ZN3JSC6JSCell22slowDownAndWasteMemoryEPNS_17JSArrayBufferViewE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN3JSC6JSCell22slowDownAndWasteMemoryEPNS_17JSArrayBufferViewE(i1 | 0) | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function iii___ZN3JSC6JSCell11getCallDataEPS0_RNS_8CallDataE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN3JSC6JSCell11getCallDataEPS0_RNS_8CallDataE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore15JSDOMWindowBase25willRemoveFromWindowShellEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17JSDOMGlobalObject15setCurrentEventEPNS_5EventE(i1, 0);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore19WebCoreJSClientDataD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19WebCoreJSClientDataD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vii___ZN3JSC8JSObject9classNameEPKS0___wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3JSC8JSObject9classNameEPKS0_(i1 | 0, i2 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN7WebCore19WebCoreJSClientDataD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19WebCoreJSClientDataD2Ev(i1);
 return;
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
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
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZNK7WebCore15JSDOMWindowBase5shellEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 664 >> 2] | 0;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
  var FUNCTION_TABLE_iiii = [b0,b0,iiii___ZN3JSC6JSCell17customHasInstanceEPNS_8JSObjectEPNS_9ExecStateENS_7JSValueE__wrapper,b0,iiii___ZN3JSC8JSObject21deletePropertyByIndexEPNS_6JSCellEPNS_9ExecStateEj__wrapper,b0,iiii___ZN3JSC19JSSymbolTableObject14deletePropertyEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameE__wrapper,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,viiiii___ZN3JSC8JSObject10putByIndexEPNS_6JSCellEPNS_9ExecStateEjNS_7JSValueEb__wrapper,b1,__ZN7WebCore15JSDOMWindowBaseC2ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_9DOMWindowEEEPNS_16JSDOMWindowShellE,b1,viiiii___ZN3JSC14JSGlobalObject3putEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE__wrapper,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore19WebCoreJSClientDataD1Ev,b2,__ZN7WebCore19WebCoreJSClientDataD0Ev,b2,__ZN7WebCore15JSDOMWindowBase7destroyEPN3JSC6JSCellE,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN3JSC6JSCell17getTypedArrayImplEPNS_17JSArrayBufferViewE__wrapper,b3,__ZN7WebCore15JSDOMWindowBase20queueTaskToEventLoopEPKN3JSC14JSGlobalObjectEN3WTF10PassRefPtrINS1_9MicrotaskEEE,b3,vii___ZN7WebCore17JSDOMGlobalObject13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE__wrapper,b3,vii___ZN3JSC8JSObject9classNameEPKS0___wrapper,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZN7WebCore15JSDOMWindowBase28javaScriptExperimentsEnabledEPKN3JSC14JSGlobalObjectE,b4,__ZN7WebCore15JSDOMWindowBase17supportsProfilingEPKN3JSC14JSGlobalObjectE,b4,__ZN7WebCore15JSDOMWindowBase21shouldInterruptScriptEPKN3JSC14JSGlobalObjectE,b4,ii___ZN3JSC6JSCell22slowDownAndWasteMemoryEPNS_17JSArrayBufferViewE__wrapper,b4,__ZN7WebCore15JSDOMWindowBase34shouldInterruptScriptBeforeTimeoutEPKN3JSC14JSGlobalObjectE,b4,__ZN7WebCore15JSDOMWindowBase22supportsRichSourceInfoEPKN3JSC14JSGlobalObjectE,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,viii___ZN3JSC8JSObject16copyBackingStoreEPNS_6JSCellERNS_11CopyVisitorENS_9CopyTokenE__wrapper,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iiiii = [b7,b7,iiiii___ZN3JSC14JSGlobalObject18getOwnPropertySlotEPNS_8JSObjectEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE__wrapper,b7,iiiii___ZN3JSC8JSObject25getOwnPropertySlotByIndexEPS0_PNS_9ExecStateEjRNS_12PropertySlotE__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,iii___ZN3JSC6JSCell11getCallDataEPS0_RNS_8CallDataE__wrapper,b8,__ZN7WebCoreL21shouldAllowAccessFromEPKN3JSC14JSGlobalObjectEPNS0_9ExecStateE,b8,iii___ZN3JSC6JSCell16getConstructDataEPS0_RNS_13ConstructDataE__wrapper,b8];
  var FUNCTION_TABLE_iiiiii = [b9,b9,iiiiii___ZN3JSC14JSGlobalObject17defineOwnPropertyEPNS_8JSObjectEPNS_9ExecStateENS_12PropertyNameERKNS_18PropertyDescriptorEb__wrapper,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,viiii___ZN3JSC19JSSymbolTableObject27getOwnNonIndexPropertyNamesEPNS_8JSObjectEPNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper,b10,viiii___ZN3JSC14JSGlobalObject6toThisEPNS_6JSCellEPNS_9ExecStateENS_8ECMAModeE__wrapper,b10,viiii___ZN3JSC8JSObject12defaultValueEPKS0_PNS_9ExecStateENS_22PreferredPrimitiveTypeE__wrapper,b10,viiii___ZN3JSC8JSObject16getPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper,b10,viiii___ZN3JSC8JSObject19getOwnPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper,b10,b10,b10,b10,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore16JSDOMWindowShell6s_infoE": __ZN7WebCore16JSDOMWindowShell6s_infoE, "__ZN7WebCore17JSDOMGlobalObject6s_infoE": __ZN7WebCore17JSDOMGlobalObject6s_infoE, "__ZN7WebCore11JSDOMWindow6s_infoE": __ZN7WebCore11JSDOMWindow6s_infoE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore25initNormalWorldClientDataEPN3JSC2VME","_memset","__ZN7WebCoreL21shouldAllowAccessFromEPKN3JSC14JSGlobalObjectEPNS0_9ExecStateE","__ZN7WebCore15JSDOMWindowBase14updateDocumentEv","__ZN3JSC28symbolTablePutWithAttributesIN7WebCore15JSDOMWindowBaseEEEbPT_RNS_2VMENS_12PropertyNameENS_7JSValueEj","__ZN7WebCore19WebCoreJSClientDataD2Ev","__ZNK7WebCore15JSDOMWindowBase17printErrorMessageERKN3WTF6StringE","__ZN7WebCore19WebCoreJSClientDataD1Ev","_memcpy","__ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_9DOMWindowE","__ZN7WebCore15JSDOMWindowBase17supportsProfilingEPKN3JSC14JSGlobalObjectE","__ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_9DOMWindowE","__ZN7WebCore15JSDOMWindowBase28javaScriptExperimentsEnabledEPKN3JSC14JSGlobalObjectE","__ZN7WebCore15JSDOMWindowBase20queueTaskToEventLoopEPKN3JSC14JSGlobalObjectEN3WTF10PassRefPtrINS1_9MicrotaskEEE","__ZN7WebCore13toJSDOMWindowEN3JSC7JSValueE","__ZN7WebCore16ScriptController11windowShellERNS_15DOMWrapperWorldE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore15JSDOMWindowBaseC2ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_9DOMWindowEEEPNS_16JSDOMWindowShellE","__ZN7WebCore15JSDOMWindowBase8commonVMEv","__ZN7WebCore15JSDOMWindowBase7destroyEPN3JSC6JSCellE","__ZN7WebCore19WebCoreJSClientDataD0Ev","__ZN7WebCore15JSDOMWindowBase14finishCreationERN3JSC2VMEPNS_16JSDOMWindowShellE","__ZNK7WebCore15JSDOMWindowBase22scriptExecutionContextEv","__ZN7WebCore13toJSDOMWindowEPNS_5FrameERNS_15DOMWrapperWorldE","__ZN7WebCore15JSDOMWindowBase21shouldInterruptScriptEPKN3JSC14JSGlobalObjectE","__ZN7WebCore15JSDOMWindowBase25willRemoveFromWindowShellEv","__ZNK7WebCore15JSDOMWindowBase5shellEv","__ZN7WebCore15JSDOMWindowBase34shouldInterruptScriptBeforeTimeoutEPKN3JSC14JSGlobalObjectE","__ZN7WebCore15JSDOMWindowBase22supportsRichSourceInfoEPKN3JSC14JSGlobalObjectE"]

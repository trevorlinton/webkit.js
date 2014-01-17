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
H_BASE = parentModule["_malloc"](224 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 224;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14MouseEventInitC1Ev;
var __ZN7WebCore10MouseEventC1Ev;
var __ZN7WebCore10MouseEventC1ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEENS5_INS_9ClipboardEEEb;
var __ZN7WebCore10MouseEventC1ERKN3WTF12AtomicStringERKNS_14MouseEventInitE;
var __ZN7WebCore10MouseEventD1Ev;
var __ZN7WebCore19SimulatedMouseEventD1Ev;
var __ZN7WebCore19SimulatedMouseEventD2Ev;
var __ZN7WebCore19SimulatedMouseEventC1ERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEENS5_INS_5EventEEEPNS_7ElementE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiidiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19) {
  try {
    Module["dynCall_viiiidiiiiiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore19SimulatedMouseEventE=(H_BASE+8)|0;
  var __ZTVN7WebCore10MouseEventE=(H_BASE+120)|0;
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
  var invoke_viiiidiiiiiiiiiiiiii=env.invoke_viiiidiiiiiiiiiiiiii;
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
function __ZN7WebCore19SimulatedMouseEventC2ERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEENS5_INS_5EventEEEPNS_7ElementE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 48 | 0;
 i13 = i6 + 56 | 0;
 i14 = i4 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 if ((i4 | 0) == 0) {
  d15 = +__ZN3WTF11currentTimeEv();
 } else {
  i16 = i4 + 40 | 0;
  d15 = +((HEAP32[i16 >> 2] | 0) >>> 0) + +((HEAP32[i16 + 4 >> 2] | 0) >>> 0) * +4294967296;
 }
 i16 = i3 | 0;
 i3 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i16 = i1;
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = i3;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 __ZN7WebCore17MouseRelatedEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb(i16, i2, 1, 1, d15, i7, 0, i8, i9, 0, 0, 0, 0, 1);
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 + 36 | 0;
   i8 = i4 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i8 >> 2] = i7;
    break;
   }
   i7 = i4 - 36 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 15](i7);
  }
 } while (0);
 HEAP16[i1 + 114 >> 1] = 0;
 HEAP8[i1 + 116 | 0] = 1;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i9 = __ZN7WebCore21findEventWithKeyStateEPNS_5EventE(HEAP32[i14 >> 2] | 0) | 0;
 if ((i9 | 0) != 0) {
  i7 = i9 + 60 | 0;
  i9 = i1 + 60 | 0;
  i4 = HEAP8[i9] & -2 | HEAP8[i7] & 1;
  HEAP8[i9] = i4;
  i8 = i4 & -3 | HEAP8[i7] & 2;
  HEAP8[i9] = i8;
  i4 = i8 & -5 | HEAP8[i7] & 4;
  HEAP8[i9] = i4;
  HEAP8[i9] = i4 & -9 | HEAP8[i7] & 8;
 }
 i7 = i10 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i7 >> 2] = i4;
 __ZN7WebCore5Event18setUnderlyingEventEN3WTF10PassRefPtrIS0_EE(i1, i10);
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i7 = i10 + 8 | 0;
   i4 = i7 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i4 >> 2] = i14;
    break;
   }
   i14 = i7 - 8 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 15](i14);
  }
 } while (0);
 i10 = i1 + 48 | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 63](i14) | 0)) {
    break;
   }
   i7 = HEAP32[i10 >> 2] | 0;
   i4 = i7 + 64 | 0;
   i9 = i1 + 64 | 0;
   i8 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   __ZN7WebCore17MouseRelatedEvent15initCoordinatesERKNS_11LayoutPointE(i16, i7 + 72 | 0);
   STACKTOP = i6;
   return;
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore7Element10screenRectEv(i11, i5);
 i10 = i1 + 64 | 0;
 i1 = ((HEAP32[i11 + 12 >> 2] | 0) / 2 & -1) + (HEAP32[i11 + 4 >> 2] | 0) | 0;
 HEAP32[i10 >> 2] = ((HEAP32[i11 + 8 >> 2] | 0) / 2 & -1) + (HEAP32[i11 >> 2] | 0);
 HEAP32[i10 + 4 >> 2] = i1;
 __ZNK7WebCore7Element10clientRectEv(i13, i5);
 i5 = ((HEAP32[i13 + 12 >> 2] | 0) / 2 & -1) + (HEAP32[i13 + 4 >> 2] | 0) | 0;
 HEAP32[i12 >> 2] = ((HEAP32[i13 + 8 >> 2] | 0) / 2 & -1) + (HEAP32[i13 >> 2] | 0);
 HEAP32[i12 + 4 >> 2] = i5;
 __ZN7WebCore17MouseRelatedEvent15initCoordinatesERKNS_11LayoutPointE(i16, i12);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore19SimulatedMouseEventC1ERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEENS5_INS_5EventEEEPNS_7ElementE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 48 | 0;
 i13 = i6 + 56 | 0;
 i14 = i4 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 if ((i4 | 0) == 0) {
  d15 = +__ZN3WTF11currentTimeEv();
 } else {
  i16 = i4 + 40 | 0;
  d15 = +((HEAP32[i16 >> 2] | 0) >>> 0) + +((HEAP32[i16 + 4 >> 2] | 0) >>> 0) * +4294967296;
 }
 i16 = i3 | 0;
 i3 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i16 = i1;
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = i3;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 __ZN7WebCore17MouseRelatedEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb(i16, i2, 1, 1, d15, i7, 0, i8, i9, 0, 0, 0, 0, 1);
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 + 36 | 0;
   i8 = i4 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i8 >> 2] = i7;
    break;
   }
   i7 = i4 - 36 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 15](i7);
  }
 } while (0);
 HEAP16[i1 + 114 >> 1] = 0;
 HEAP8[i1 + 116 | 0] = 1;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i9 = __ZN7WebCore21findEventWithKeyStateEPNS_5EventE(HEAP32[i14 >> 2] | 0) | 0;
 if ((i9 | 0) != 0) {
  i7 = i9 + 60 | 0;
  i9 = i1 + 60 | 0;
  i4 = HEAP8[i9] & -2 | HEAP8[i7] & 1;
  HEAP8[i9] = i4;
  i8 = i4 & -3 | HEAP8[i7] & 2;
  HEAP8[i9] = i8;
  i4 = i8 & -5 | HEAP8[i7] & 4;
  HEAP8[i9] = i4;
  HEAP8[i9] = i4 & -9 | HEAP8[i7] & 8;
 }
 i7 = i10 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i7 >> 2] = i4;
 __ZN7WebCore5Event18setUnderlyingEventEN3WTF10PassRefPtrIS0_EE(i1, i10);
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i7 = i10 + 8 | 0;
   i4 = i7 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i4 >> 2] = i14;
    break;
   }
   i14 = i7 - 8 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 15](i14);
  }
 } while (0);
 i10 = i1 + 48 | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 63](i14) | 0)) {
    break;
   }
   i7 = HEAP32[i10 >> 2] | 0;
   i4 = i7 + 64 | 0;
   i9 = i1 + 64 | 0;
   i8 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   __ZN7WebCore17MouseRelatedEvent15initCoordinatesERKNS_11LayoutPointE(i16, i7 + 72 | 0);
   STACKTOP = i6;
   return;
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore7Element10screenRectEv(i11, i5);
 i10 = i1 + 64 | 0;
 i1 = ((HEAP32[i11 + 12 >> 2] | 0) / 2 & -1) + (HEAP32[i11 + 4 >> 2] | 0) | 0;
 HEAP32[i10 >> 2] = ((HEAP32[i11 + 8 >> 2] | 0) / 2 & -1) + (HEAP32[i11 >> 2] | 0);
 HEAP32[i10 + 4 >> 2] = i1;
 __ZNK7WebCore7Element10clientRectEv(i13, i5);
 i5 = ((HEAP32[i13 + 12 >> 2] | 0) / 2 & -1) + (HEAP32[i13 + 4 >> 2] | 0) | 0;
 HEAP32[i12 >> 2] = ((HEAP32[i13 + 8 >> 2] | 0) / 2 & -1) + (HEAP32[i13 >> 2] | 0);
 HEAP32[i12 + 4 >> 2] = i5;
 __ZN7WebCore17MouseRelatedEvent15initCoordinatesERKNS_11LayoutPointE(i16, i12);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore10MouseEvent8cloneForEPNS_17HTMLIFrameElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = __ZN3WTF10fastMallocEj(128) | 0;
 __ZN7WebCore17MouseRelatedEventC2Ev(i9);
 HEAP32[i9 >> 2] = H_BASE + 128;
 HEAP16[i9 + 114 >> 1] = 0;
 HEAP8[i9 + 116 | 0] = 0;
 HEAP32[i9 + 120 >> 2] = 0;
 HEAP32[i9 + 124 >> 2] = 0;
 i10 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i11 = HEAP32[i10 + 332 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i11 + 452 >> 2] | 0;
 }
 i11 = (HEAP8[i2 + 16 | 0] & 1) != 0;
 i13 = (HEAP8[i2 + 17 | 0] & 1) != 0;
 i14 = HEAP32[i10 + 336 >> 2] | 0;
 i10 = i7 | 0;
 HEAP32[i10 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i15 = i14 + 36 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 i15 = HEAP32[i2 + 56 >> 2] | 0;
 i14 = HEAP32[i2 + 64 >> 2] | 0;
 i16 = HEAP32[i2 + 68 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i17 = 0;
  i18 = 0;
 } else {
  i19 = HEAP32[i2 + 72 >> 2] | 0;
  i20 = i3 | 0;
  i3 = __ZN7WebCore7Element10offsetLeftEv(i20) | 0;
  i21 = i12 | 0;
  i22 = i12;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 192 >> 2] & 1](i5, i21);
  i12 = i3 + i19 - (HEAP32[i5 >> 2] | 0) | 0;
  i5 = HEAP32[i2 + 76 >> 2] | 0;
  i19 = __ZN7WebCore7Element9offsetTopEv(i20) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 192 >> 2] & 1](i6, i21);
  i17 = i19 + i5 - (HEAP32[i6 + 4 >> 2] | 0) | 0;
  i18 = i12;
 }
 i12 = HEAP8[i2 + 60 | 0] | 0;
 i6 = HEAP16[i2 + 114 >> 1] | 0;
 i5 = i8 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore10MouseEvent14initMouseEventERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEE(i9, i2 + 12 | 0, i11, i13, i7, i15, i14, i16, i18, i17, (i12 & 1) != 0, (i12 & 2) != 0, (i12 & 4) != 0, (i12 & 8) != 0, i6, i8);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 60 >> 2] & 15](i8);
 }
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i23 = i1 | 0;
  i24 = i9;
  HEAP32[i23 >> 2] = i24;
  STACKTOP = i4;
  return;
 }
 i10 = i8 + 36 | 0;
 i8 = i10 | 0;
 i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i8 >> 2] = i5;
  i23 = i1 | 0;
  i24 = i9;
  HEAP32[i23 >> 2] = i24;
  STACKTOP = i4;
  return;
 }
 i5 = i10 - 36 | 0;
 if ((i5 | 0) == 0) {
  i23 = i1 | 0;
  i24 = i9;
  HEAP32[i23 >> 2] = i24;
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 15](i5);
 i23 = i1 | 0;
 i24 = i9;
 HEAP32[i23 >> 2] = i24;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10MouseEventC2ERKN3WTF12AtomicStringERKNS_14MouseEventInitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1;
 i10 = (HEAP8[i3 | 0] & 1) != 0;
 i11 = (HEAP8[i3 + 1 | 0] & 1) != 0;
 d12 = +__ZN3WTF11currentTimeEv();
 i13 = i5 | 0;
 i14 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i15 = i14 + 36 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 i15 = HEAP32[i3 + 8 >> 2] | 0;
 i14 = HEAP32[i3 + 16 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i6 + 4 >> 2] = i14;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 __ZN7WebCore17MouseRelatedEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb(i9, i2, i10, i11, d12, i5, i15, i6, i7, (HEAP8[i3 + 28 | 0] & 1) != 0, (HEAP8[i3 + 29 | 0] & 1) != 0, (HEAP8[i3 + 30 | 0] & 1) != 0, (HEAP8[i3 + 31 | 0] & 1) != 0, 0);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 + 36 | 0;
   i6 = i13 | 0;
   i15 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i6 >> 2] = i15;
    break;
   }
   i15 = i13 - 36 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] & 15](i15);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 128;
 i7 = i3 + 32 | 0;
 i15 = HEAP16[i7 >> 1] | 0;
 HEAP16[i1 + 114 >> 1] = i15 << 16 >> 16 == -1 ? 0 : i15;
 HEAP8[i1 + 116 | 0] = (HEAP16[i7 >> 1] | 0) != -1 | 0;
 i7 = HEAP32[i3 + 36 >> 2] | 0;
 HEAP32[i1 + 120 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i16 = i1 + 124 | 0;
  HEAP32[i16 >> 2] = 0;
  i17 = i3 + 20 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i3 + 24 | 0;
  i20 = HEAP32[i19 >> 2] | 0;
  i21 = i8 | 0;
  HEAP32[i21 >> 2] = i18;
  i22 = i8 + 4 | 0;
  HEAP32[i22 >> 2] = i20;
  __ZN7WebCore17MouseRelatedEvent15initCoordinatesERKNS_11LayoutPointE(i9, i8);
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 56 >> 2] & 15](i7);
 i16 = i1 + 124 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i3 + 20 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = i3 + 24 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 i21 = i8 | 0;
 HEAP32[i21 >> 2] = i18;
 i22 = i8 + 4 | 0;
 HEAP32[i22 >> 2] = i20;
 __ZN7WebCore17MouseRelatedEvent15initCoordinatesERKNS_11LayoutPointE(i9, i8);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10MouseEventC1ERKN3WTF12AtomicStringERKNS_14MouseEventInitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1;
 i10 = (HEAP8[i3 | 0] & 1) != 0;
 i11 = (HEAP8[i3 + 1 | 0] & 1) != 0;
 d12 = +__ZN3WTF11currentTimeEv();
 i13 = i5 | 0;
 i14 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i15 = i14 + 36 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 i15 = HEAP32[i3 + 8 >> 2] | 0;
 i14 = HEAP32[i3 + 16 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i6 + 4 >> 2] = i14;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 __ZN7WebCore17MouseRelatedEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb(i9, i2, i10, i11, d12, i5, i15, i6, i7, (HEAP8[i3 + 28 | 0] & 1) != 0, (HEAP8[i3 + 29 | 0] & 1) != 0, (HEAP8[i3 + 30 | 0] & 1) != 0, (HEAP8[i3 + 31 | 0] & 1) != 0, 0);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 + 36 | 0;
   i6 = i13 | 0;
   i15 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i6 >> 2] = i15;
    break;
   }
   i15 = i13 - 36 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] & 15](i15);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 128;
 i7 = i3 + 32 | 0;
 i15 = HEAP16[i7 >> 1] | 0;
 HEAP16[i1 + 114 >> 1] = i15 << 16 >> 16 == -1 ? 0 : i15;
 HEAP8[i1 + 116 | 0] = (HEAP16[i7 >> 1] | 0) != -1 | 0;
 i7 = HEAP32[i3 + 36 >> 2] | 0;
 HEAP32[i1 + 120 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i16 = i1 + 124 | 0;
  HEAP32[i16 >> 2] = 0;
  i17 = i3 + 20 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i3 + 24 | 0;
  i20 = HEAP32[i19 >> 2] | 0;
  i21 = i8 | 0;
  HEAP32[i21 >> 2] = i18;
  i22 = i8 + 4 | 0;
  HEAP32[i22 >> 2] = i20;
  __ZN7WebCore17MouseRelatedEvent15initCoordinatesERKNS_11LayoutPointE(i9, i8);
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 56 >> 2] & 15](i7);
 i16 = i1 + 124 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i3 + 20 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = i3 + 24 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 i21 = i8 | 0;
 HEAP32[i21 >> 2] = i18;
 i22 = i8 + 4 | 0;
 HEAP32[i22 >> 2] = i20;
 __ZN7WebCore17MouseRelatedEvent15initCoordinatesERKNS_11LayoutPointE(i9, i8);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore10MouseEvent6createERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEERKNS_18PlatformMouseEventEiNS5_INS_4NodeEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 if ((i12 | 0) == (HEAP32[i11 + 236 >> 2] | 0)) {
  i13 = 0;
 } else {
  i13 = (i12 | 0) != (HEAP32[i11 + 240 >> 2] | 0);
 }
 i11 = (i12 | 0) != (HEAP32[(HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 244 >> 2] | 0) & i13;
 d14 = +HEAPF64[i4 + 8 >> 3];
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = HEAP32[i4 + 24 >> 2] | 0;
 i15 = HEAP32[i4 + 28 >> 2] | 0;
 i16 = HEAP32[i4 + 16 >> 2] | 0;
 i17 = HEAP32[i4 + 20 >> 2] | 0;
 i18 = HEAP32[i4 + 4 >> 2] | 0;
 i19 = HEAP32[i4 + 32 >> 2] & 65535;
 i4 = i6 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i6 | 0;
 i6 = __ZN3WTF10fastMallocEj(128) | 0;
 i20 = i6;
 i21 = i8 | 0;
 HEAP32[i21 >> 2] = i3;
 HEAP32[i9 >> 2] = i12;
 HEAP32[i9 + 4 >> 2] = i15;
 HEAP32[i10 >> 2] = i16;
 HEAP32[i10 + 4 >> 2] = i17;
 __ZN7WebCore17MouseRelatedEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb(i6, i2, i13, i11, d14, i8, i5, i9, i10, (i18 & 2 | 0) != 0, (i18 & 1 | 0) != 0, (i18 & 8 | 0) != 0, (i18 & 4 | 0) != 0, 0);
 i18 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i21 = i18 + 36 | 0;
   i10 = i21 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i10 >> 2] = i9;
    break;
   }
   i9 = i21 - 36 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] & 15](i9);
  }
 } while (0);
 HEAP32[i6 >> 2] = H_BASE + 128;
 HEAP16[i6 + 114 >> 1] = i19 << 16 >> 16 == -1 ? 0 : i19;
 HEAP8[i6 + 116 | 0] = i19 << 16 >> 16 != -1 | 0;
 HEAP32[i6 + 120 >> 2] = i4;
 HEAP32[i6 + 124 >> 2] = 0;
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i7;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 12;
}
function __ZN7WebCore10MouseEvent14initMouseEventERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16) {
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
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 var i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = i17 | 0;
 i19 = i17 + 8 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
  STACKTOP = i17;
  return;
 }
 i20 = i18 | 0;
 i21 = i5 | 0;
 i5 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i20 >> 2] = i5;
 __ZN7WebCore7UIEvent11initUIEventERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEi(i1, i2, i3, i4, i18, i6);
 i6 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i20 = i6 + 36 | 0;
   i18 = i20 | 0;
   i4 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i18 >> 2] = i4;
    break;
   }
   i4 = i20 - 36 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 15](i4);
  }
 } while (0);
 i6 = i1 + 64 | 0;
 HEAP32[i6 >> 2] = i7;
 HEAP32[i6 + 4 >> 2] = i8;
 i8 = i1 + 60 | 0;
 HEAP8[i8] = (i12 & 1) << 1 | i11 & 1 | (i13 & 1) << 2 | (i14 & 1) << 3 | HEAP8[i8] & -16;
 HEAP16[i1 + 114 >> 1] = i15 << 16 >> 16 == -1 ? 0 : i15;
 HEAP8[i1 + 116 | 0] = i15 << 16 >> 16 != -1 | 0;
 i15 = i16 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = i1 + 120 | 0;
 i8 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i16;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 60 >> 2] & 15](i8);
 }
 HEAP32[i19 >> 2] = i9;
 HEAP32[i19 + 4 >> 2] = i10;
 __ZN7WebCore17MouseRelatedEvent15initCoordinatesERKNS_11LayoutPointE(i1, i19);
 STACKTOP = i17;
 return;
}
function __ZN7WebCore10MouseEvent6createERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEENS5_INS_9ClipboardEEEb(i1, i2, i3, i4, d5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 i18 = i18 | 0;
 i19 = i19 | 0;
 var i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i21 = i20 | 0;
 i22 = i20 + 8 | 0;
 i23 = i20 + 16 | 0;
 i24 = __ZN3WTF10fastMallocEj(128) | 0;
 i25 = i24;
 i26 = i6 | 0;
 i6 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = 0;
 i26 = i17 | 0;
 i17 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = 0;
 i26 = i18 | 0;
 i18 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = 0;
 i26 = i21 | 0;
 HEAP32[i26 >> 2] = i6;
 HEAP32[i22 >> 2] = i8;
 HEAP32[i22 + 4 >> 2] = i9;
 HEAP32[i23 >> 2] = i10;
 HEAP32[i23 + 4 >> 2] = i11;
 __ZN7WebCore17MouseRelatedEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb(i24, i2, i3, i4, d5, i21, i7, i22, i23, i12, i13, i14, i15, i19);
 i19 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i26 = i19 + 36 | 0;
   i15 = i26 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i15 >> 2] = i14;
    break;
   }
   i14 = i26 - 36 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] & 15](i14);
  }
 } while (0);
 HEAP32[i24 >> 2] = H_BASE + 128;
 HEAP16[i24 + 114 >> 1] = i16 << 16 >> 16 == -1 ? 0 : i16;
 HEAP8[i24 + 116 | 0] = i16 << 16 >> 16 != -1 | 0;
 HEAP32[i24 + 120 >> 2] = i17;
 HEAP32[i24 + 124 >> 2] = i18;
 HEAP32[i1 >> 2] = i25;
 STACKTOP = i20;
 return;
}
function __ZN7WebCore10MouseEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEENS5_INS_9ClipboardEEEb(i1, i2, i3, i4, d5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 i18 = i18 | 0;
 i19 = i19 | 0;
 var i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i21 = i20 | 0;
 i22 = i20 + 8 | 0;
 i23 = i20 + 16 | 0;
 i24 = i21 | 0;
 i25 = i6 | 0;
 i6 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i24 >> 2] = i6;
 HEAP32[i22 >> 2] = i8;
 HEAP32[i22 + 4 >> 2] = i9;
 HEAP32[i23 >> 2] = i10;
 HEAP32[i23 + 4 >> 2] = i11;
 __ZN7WebCore17MouseRelatedEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb(i1, i2, i3, i4, d5, i21, i7, i22, i23, i12, i13, i14, i15, i19);
 i19 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i24 = i19 + 36 | 0;
   i15 = i24 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i15 >> 2] = i14;
    break;
   }
   i14 = i24 - 36 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] & 15](i14);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP16[i1 + 114 >> 1] = i16 << 16 >> 16 == -1 ? 0 : i16;
 HEAP8[i1 + 116 | 0] = i16 << 16 >> 16 != -1 | 0;
 i16 = i17 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = i17;
 i17 = i18 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = i18;
 STACKTOP = i20;
 return;
}
function __ZN7WebCore10MouseEventC1ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEENS5_INS_9ClipboardEEEb(i1, i2, i3, i4, d5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 i18 = i18 | 0;
 i19 = i19 | 0;
 var i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i21 = i20 | 0;
 i22 = i20 + 8 | 0;
 i23 = i20 + 16 | 0;
 i24 = i21 | 0;
 i25 = i6 | 0;
 i6 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i24 >> 2] = i6;
 HEAP32[i22 >> 2] = i8;
 HEAP32[i22 + 4 >> 2] = i9;
 HEAP32[i23 >> 2] = i10;
 HEAP32[i23 + 4 >> 2] = i11;
 __ZN7WebCore17MouseRelatedEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb(i1, i2, i3, i4, d5, i21, i7, i22, i23, i12, i13, i14, i15, i19);
 i19 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i24 = i19 + 36 | 0;
   i15 = i24 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i15 >> 2] = i14;
    break;
   }
   i14 = i24 - 36 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] & 15](i14);
  }
 } while (0);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP16[i1 + 114 >> 1] = i16 << 16 >> 16 == -1 ? 0 : i16;
 HEAP8[i1 + 116 | 0] = i16 << 16 >> 16 != -1 | 0;
 i16 = i17 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = i17;
 i17 = i18 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = i18;
 STACKTOP = i20;
 return;
}
function __ZN7WebCore10MouseEvent6createERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEE(i1, i2, i3, i4, d5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 var i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i19 = i18 | 0;
 i20 = i18 + 8 | 0;
 i21 = i18 + 16 | 0;
 i22 = i6 | 0;
 i6 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 i22 = i17 | 0;
 i17 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 i22 = __ZN3WTF10fastMallocEj(128) | 0;
 i23 = i22;
 i24 = i19 | 0;
 HEAP32[i24 >> 2] = i6;
 HEAP32[i20 >> 2] = i8;
 HEAP32[i20 + 4 >> 2] = i9;
 HEAP32[i21 >> 2] = i10;
 HEAP32[i21 + 4 >> 2] = i11;
 __ZN7WebCore17MouseRelatedEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiRKNS_8IntPointESA_bbbbb(i22, i2, i3, i4, d5, i19, i7, i20, i21, i12, i13, i14, i15, 0);
 i15 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i24 = i15 + 36 | 0;
   i14 = i24 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i14 >> 2] = i13;
    break;
   }
   i13 = i24 - 36 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] & 15](i13);
  }
 } while (0);
 HEAP32[i22 >> 2] = H_BASE + 128;
 HEAP16[i22 + 114 >> 1] = i16 << 16 >> 16 == -1 ? 0 : i16;
 HEAP8[i22 + 116 | 0] = i16 << 16 >> 16 != -1 | 0;
 HEAP32[i22 + 120 >> 2] = i17;
 HEAP32[i22 + 124 >> 2] = 0;
 HEAP32[i1 >> 2] = i23;
 STACKTOP = i18;
 return;
}
function __ZN7WebCore19SimulatedMouseEvent6createERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEENS5_INS_5EventEEEPNS_7ElementE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = __ZN3WTF10fastMallocEj(128) | 0;
 i10 = i7 | 0;
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 i3 = i8 | 0;
 i11 = i4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i3 >> 2] = i4;
 __ZN7WebCore19SimulatedMouseEventC2ERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEENS5_INS_5EventEEEPNS_7ElementE(i9, i2, i7, i8, i5);
 HEAP32[i1 >> 2] = i9;
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 + 8 | 0;
   i1 = i3 | 0;
   i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i1 >> 2] = i5;
    break;
   }
   i5 = i3 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i9 + 36 | 0;
 i9 = i10 | 0;
 i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i9 >> 2] = i5;
  STACKTOP = i6;
  return;
 }
 i5 = i10 - 36 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 15](i5);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore19SimulatedMouseEventD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore9ClipboardD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore7UIEventD2Ev(i5);
  i6 = i1 | 0;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 15](i2);
 i5 = i1;
 __ZN7WebCore7UIEventD2Ev(i5);
 i6 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZN7WebCore10MouseEventD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore9ClipboardD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore7UIEventD2Ev(i5);
  i6 = i1 | 0;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 15](i2);
 i5 = i1;
 __ZN7WebCore7UIEventD2Ev(i5);
 i6 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZNK7WebCore10MouseEvent11isDragEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i2 + 128 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[i2 + 136 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[i2 + 132 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[i2 + 144 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[i2 + 140 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i3 | 0) == (HEAP32[i2 + 120 >> 2] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = (i3 | 0) == (HEAP32[i2 + 124 >> 2] | 0);
 return i4 | 0;
}
function __ZNK7WebCore10MouseEvent11fromElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != (HEAP32[i2 + 248 >> 2] | 0)) {
   if ((i3 | 0) == (HEAP32[i2 + 240 >> 2] | 0)) {
    break;
   }
   i4 = HEAP32[i1 + 120 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   }
   i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 63](i4) | 0;
   return i5 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2) | 0;
 return i5 | 0;
}
function __ZNK7WebCore10MouseEvent9toElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != (HEAP32[i2 + 248 >> 2] | 0)) {
   if ((i3 | 0) == (HEAP32[i2 + 240 >> 2] | 0)) {
    break;
   }
   i4 = HEAP32[i1 + 32 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   }
   i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 63](i4) | 0;
   return i5 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2) | 0;
 return i5 | 0;
}
function __ZN7WebCore19SimulatedMouseEventD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore9ClipboardD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore7UIEventD2Ev(i5);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 15](i2);
 i5 = i1;
 __ZN7WebCore7UIEventD2Ev(i5);
 return;
}
function __ZN7WebCore19SimulatedMouseEventD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore9ClipboardD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore7UIEventD2Ev(i5);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 15](i2);
 i5 = i1;
 __ZN7WebCore7UIEventD2Ev(i5);
 return;
}
function __ZN7WebCore10MouseEventD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore9ClipboardD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore7UIEventD2Ev(i5);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 15](i2);
 i5 = i1;
 __ZN7WebCore7UIEventD2Ev(i5);
 return;
}
function __ZN7WebCore10MouseEventD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore9ClipboardD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore7UIEventD2Ev(i5);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 15](i2);
 i5 = i1;
 __ZN7WebCore7UIEventD2Ev(i5);
 return;
}
function dynCall_viiiidiiiiiiiiiiiiii(i1, i2, i3, i4, i5, d6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 i18 = i18 | 0;
 i19 = i19 | 0;
 i20 = i20 | 0;
 FUNCTION_TABLE_viiiidiiiiiiiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0, i13 | 0, i14 | 0, i15 | 0, i16 | 0, i17 | 0, i18 | 0, i19 | 0, i20 | 0);
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
function b4(i1, i2, i3, i4, d5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 i18 = i18 | 0;
 i19 = i19 | 0;
 abort(4);
}
function __ZN7WebCore10MouseEvent6createERKN3WTF12AtomicStringERKNS_14MouseEventInitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZN3WTF10fastMallocEj(128) | 0;
 __ZN7WebCore10MouseEventC2ERKN3WTF12AtomicStringERKNS_14MouseEventInitE(i4, i2, i3);
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZN7WebCore10MouseEventC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17MouseRelatedEventC2Ev(i1);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP16[i1 + 114 >> 1] = 0;
 HEAP8[i1 + 116 | 0] = 0;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 return;
}
function __ZN7WebCore10MouseEventC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17MouseRelatedEventC2Ev(i1);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP16[i1 + 114 >> 1] = 0;
 HEAP8[i1 + 116 | 0] = 0;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function __ZNK7WebCore10MouseEvent5whichEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 116 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAPU16[i1 + 114 >> 1] | 0) + 1 | 0;
 return i2 | 0;
}
function __ZN7WebCore14MouseEventInitC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11UIEventInitC2Ev(i1 | 0);
 HEAP32[i1 + 36 >> 2] = 0;
 _memset(i1 + 12 | 0, 0, 22) | 0;
 return;
}
function __ZN7WebCore14MouseEventInitC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11UIEventInitC2Ev(i1 | 0);
 HEAP32[i1 + 36 >> 2] = 0;
 _memset(i1 + 12 | 0, 0, 22) | 0;
 return;
}
function ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event25isBeforeTextInsertedEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore17MouseRelatedEvent12pageLocationEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17MouseRelatedEvent12pageLocationEv(i1 | 0) | 0;
}
function vi___ZN7WebCore17MouseRelatedEvent14receivedTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17MouseRelatedEvent14receivedTargetEv(i1 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event19isBeforeUnloadEventEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZNK7WebCore17MouseRelatedEvent5pageYEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17MouseRelatedEvent5pageYEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore17MouseRelatedEvent5pageXEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17MouseRelatedEvent5pageXEv(i1 | 0) | 0;
}
function ii___ZN7WebCore17MouseRelatedEvent6layerYEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore17MouseRelatedEvent6layerYEv(i1 | 0) | 0;
}
function ii___ZN7WebCore17MouseRelatedEvent6layerXEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore17MouseRelatedEvent6layerXEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event16isClipboardEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event15isKeyboardEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isTouchEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isTouchEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore5Event12isFocusEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Event12isFocusEventEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function ii___ZNK7WebCore7UIEvent9isUIEventEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent9isUIEventEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7UIEvent8charCodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent8charCodeEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore7UIEvent7keyCodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7UIEvent7keyCodeEv(i1 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZNK7WebCore10MouseEvent13relatedTargetEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 120 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 63](i2 | 0) | 0;
}
function __ZNK7WebCore10MouseEvent9clipboardEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 124 >> 2] | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore10MouseEvent14eventInterfaceEv(i1) {
 i1 = i1 | 0;
 return 11;
}
function __ZNK7WebCore10MouseEvent12isMouseEventEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore19SimulatedMouseEventC2ERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEENS5_INS_5EventEEEPNS_7ElementE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore19SimulatedMouseEventD0Ev,b1,__ZN7WebCore10MouseEventC2Ev,b1,__ZN7WebCore14MouseEventInitC2Ev,b1,__ZN7WebCore10MouseEventD2Ev,b1,__ZN7WebCore10MouseEventD0Ev,b1,vi___ZN7WebCore17MouseRelatedEvent14receivedTargetEv__wrapper,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore5Event15isKeyboardEventEv__wrapper,b3,ii___ZN7WebCore17MouseRelatedEvent6layerXEv__wrapper,b3,ii___ZNK7WebCore5Event12isTouchEventEv__wrapper,b3,ii___ZN7WebCore17MouseRelatedEvent6layerYEv__wrapper,b3,ii___ZNK7WebCore5Event25isBeforeTextInsertedEventEv__wrapper,b3,ii___ZNK7WebCore17MouseRelatedEvent12pageLocationEv__wrapper,b3,__ZNK7WebCore10MouseEvent5whichEv,b3,ii___ZNK7WebCore7UIEvent7keyCodeEv__wrapper,b3,ii___ZNK7WebCore5Event12isFocusEventEv__wrapper,b3,__ZNK7WebCore10MouseEvent13relatedTargetEv,b3,__ZNK7WebCore10MouseEvent12isMouseEventEv,b3,__ZNK7WebCore10MouseEvent9clipboardEv,b3,ii___ZNK7WebCore7UIEvent9isUIEventEv__wrapper,b3,ii___ZNK7WebCore5Event16isClipboardEventEv__wrapper
  ,b3,ii___ZNK7WebCore17MouseRelatedEvent5pageXEv__wrapper,b3,ii___ZNK7WebCore5Event19isBeforeUnloadEventEv__wrapper,b3,ii___ZNK7WebCore7UIEvent8charCodeEv__wrapper,b3,__ZNK7WebCore10MouseEvent14eventInterfaceEv,b3,__ZNK7WebCore10MouseEvent11isDragEventEv,b3,ii___ZNK7WebCore17MouseRelatedEvent5pageYEv__wrapper,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viiiidiiiiiiiiiiiiii = [b4,b4,__ZN7WebCore10MouseEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEENS5_INS_9ClipboardEEEb,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZNK7WebCore10MouseEvent8cloneForEPNS_17HTMLIFrameElementE,b5,__ZN7WebCore10MouseEventC2ERKN3WTF12AtomicStringERKNS_14MouseEventInitE,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viiiidiiiiiiiiiiiiii: dynCall_viiiidiiiiiiiiiiiiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viiiidiiiiiiiiiiiiii": invoke_viiiidiiiiiiiiiiiiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiidiiiiiiiiiiiiii = Module["dynCall_viiiidiiiiiiiiiiiiii"] = asm["dynCall_viiiidiiiiiiiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore10MouseEventC2ERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEENS5_INS_9ClipboardEEEb","_strlen","__ZNK7WebCore10MouseEvent12isMouseEventEv","__ZN7WebCore10MouseEventC2Ev","__ZN7WebCore19SimulatedMouseEvent6createERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEENS5_INS_5EventEEEPNS_7ElementE","__ZN7WebCore14MouseEventInitC2Ev","__ZNK7WebCore10MouseEvent11fromElementEv","_memset","__ZN7WebCore10MouseEvent6createERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEENS5_INS_9ClipboardEEEb","__ZN7WebCore10MouseEvent6createERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEERKNS_18PlatformMouseEventEiNS5_INS_4NodeEEE","_memcpy","__ZN7WebCore10MouseEventD2Ev","__ZN7WebCore10MouseEvent6createERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEE","__ZNK7WebCore10MouseEvent5whichEv","__ZN7WebCore19SimulatedMouseEventD0Ev","__ZNK7WebCore10MouseEvent13relatedTargetEv","__ZN7WebCore10MouseEventD0Ev","__ZN7WebCore10MouseEvent6createERKN3WTF12AtomicStringERKNS_14MouseEventInitE","__ZN7WebCore10MouseEvent14initMouseEventERKN3WTF12AtomicStringEbbNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEE","__ZNK7WebCore10MouseEvent8cloneForEPNS_17HTMLIFrameElementE","__ZNK7WebCore10MouseEvent9clipboardEv","__ZNK7WebCore10MouseEvent14eventInterfaceEv","__ZN7WebCore19SimulatedMouseEventC2ERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEENS5_INS_5EventEEEPNS_7ElementE","__ZNK7WebCore10MouseEvent11isDragEventEv","__ZNK7WebCore10MouseEvent9toElementEv","__ZN7WebCore10MouseEventC2ERKN3WTF12AtomicStringERKNS_14MouseEventInitE"]

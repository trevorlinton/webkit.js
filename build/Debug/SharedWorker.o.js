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
var __ZN7WebCore12SharedWorkerD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZTVN7WebCore12SharedWorkerE=(H_BASE+8)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12SharedWorker6createERNS_22ScriptExecutionContextERKN3WTF6StringES6_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 56 | 0;
 i10 = i6 + 64 | 0;
 i11 = i2 - 156 + 68 | 0;
 i12 = i11;
 __ZN7WebCore15FeatureObserver7observeEPNS_9DOMWindowENS0_7FeatureE(HEAP32[i11 + 336 >> 2] | 0, 5);
 i13 = __ZN3WTF10fastMallocEj(56) | 0;
 i14 = i13;
 i15 = i13;
 __ZN7WebCore14AbstractWorkerC2ERNS_22ScriptExecutionContextE(i15, i2);
 HEAP32[i13 >> 2] = H_BASE + 16;
 HEAP32[i13 + 16 >> 2] = H_BASE + 72;
 i16 = i13 + 52 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = __ZN3WTF10fastMallocEj(12) | 0;
 i18 = i17;
 __ZN7WebCore14MessageChannelC1ERNS_22ScriptExecutionContextE(i18, i2);
 i2 = HEAP32[i17 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i19 = i2 + 36 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
 }
 i19 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = i2;
 do {
  if ((i19 | 0) != 0) {
   i2 = i19 + 36 | 0;
   i16 = i2 | 0;
   i20 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i16 >> 2] = i20;
    break;
   }
   i20 = i2 - 36 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 44 >> 2] & 31](i20);
  }
 } while (0);
 __ZN7WebCore11MessagePort11disentangleEv(i7, HEAP32[i17 + 8 >> 2] | 0);
 i19 = i7 | 0;
 i7 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 __ZN7WebCore15ActiveDOMObject15suspendIfNeededEv(i13);
 __ZN7WebCore14AbstractWorker10resolveURLERKN3WTF6StringERi(i8, i15, i3, i5);
 i3 = i8 | 0;
 i15 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i21 = 10;
  } else {
   if ((HEAP32[i15 + 4 >> 2] | 0) == 0) {
    i21 = 10;
    break;
   }
   i19 = HEAP32[i11 + 100 >> 2] | 0;
   if (!(__ZNK7WebCore14SecurityOrigin16canAccessStorageEPKS0_NS0_25ShouldAllowFromThirdPartyE(i19, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 320 >> 2] & 31](i12) | 0, 1) | 0)) {
    HEAP32[i5 >> 2] = 18;
    HEAP32[i1 >> 2] = 0;
    i22 = i7;
    i23 = i14;
    break;
   }
   i19 = i9 | 0;
   HEAP32[i19 >> 2] = i14;
   if ((i13 | 0) != 0) {
    i20 = i13 + 12 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   }
   i20 = i10 | 0;
   HEAP32[i20 >> 2] = i7;
   __ZN7WebCore22SharedWorkerRepository7connectEN3WTF10PassRefPtrINS_12SharedWorkerEEENS1_10PassOwnPtrINS_18MessagePortChannelEEERKNS_3URLERKNS1_6StringERi(i9, i10, i8, i4, i5);
   i2 = HEAP32[i20 >> 2] | 0;
   if ((i2 | 0) != 0) {
    __ZN7WebCore18MessagePortChannelD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
   }
   i2 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i19 = i2 + 12 | 0;
     i20 = i19 | 0;
     i16 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i20 >> 2] = i16;
      break;
     }
     i16 = i19 - 12 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 31](i16);
    }
   } while (0);
   HEAP32[i1 >> 2] = i14;
   i22 = 0;
   i23 = 0;
  }
 } while (0);
 if ((i21 | 0) == 10) {
  HEAP32[i1 >> 2] = 0;
  i22 = i7;
  i23 = i14;
 }
 i14 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i3 = i14 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i3 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i22 | 0) != 0) {
  __ZN7WebCore18MessagePortChannelD1Ev(i22);
  __ZN3WTF8fastFreeEPv(i22);
 }
 do {
  if ((i17 | 0) != 0) {
   i22 = i17;
   i14 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) == 0) {
    __ZN7WebCore14MessageChannelD1Ev(i18);
    __ZN3WTF8fastFreeEPv(i17);
    break;
   } else {
    HEAP32[i22 >> 2] = i14;
    break;
   }
  }
 } while (0);
 if ((i23 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i17 = i23 + 12 | 0;
 i23 = i17 | 0;
 i18 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i23 >> 2] = i18;
  STACKTOP = i6;
  return;
 }
 i18 = i17 - 12 | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 31](i18);
 STACKTOP = i6;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 26;
}
function __ZThn16_N7WebCore12SharedWorkerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 - 56 + 40 | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 - 56 + 56 >> 2] = H_BASE + 72;
 i3 = HEAP32[i1 - 56 + 92 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 + 36 | 0;
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i1 - 36 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore14AbstractWorkerD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn16_N7WebCore12SharedWorkerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 - 56 + 40 | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 - 56 + 56 >> 2] = H_BASE + 72;
 i3 = HEAP32[i1 - 56 + 92 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 + 36 | 0;
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i1 - 36 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore14AbstractWorkerD2Ev(i2);
 return;
}
function __ZN7WebCore12SharedWorkerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 16 >> 2] = H_BASE + 72;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore14AbstractWorkerD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore12SharedWorkerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 16 >> 2] = H_BASE + 72;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore14AbstractWorkerD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore12SharedWorkerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 16 >> 2] = H_BASE + 72;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore14AbstractWorkerD2Ev(i1 | 0);
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
function __ZThn16_N7WebCore14AbstractWorker16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 52 + 48 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 52 + 36 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 31](i3);
 return;
}
function __ZN7WebCore14AbstractWorker16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 12 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 12 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 31](i3);
 return;
}
function iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZThn16_N7WebCore14AbstractWorker14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 52 + 48 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26ContextDestructionObserver16contextDestroyedEv(i1 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function v___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper() {
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE();
}
function ii___ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv(i1 | 0) | 0;
}
function __ZN7WebCore14AbstractWorker14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
}
function ii___ZNK7WebCore15ActiveDOMObject10canSuspendEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore15ActiveDOMObject10canSuspendEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget6toNodeEv(i1 | 0) | 0;
}
function __ZThn16_NK7WebCore14AbstractWorker22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 52 + 40 >> 2] | 0;
}
function vi___ZN7WebCore15ActiveDOMObject6resumeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15ActiveDOMObject6resumeEv(i1 | 0);
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
function vi___ZN7WebCore15ActiveDOMObject4stopEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15ActiveDOMObject4stopEv(i1 | 0);
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZNK7WebCore14AbstractWorker22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 4 >> 2] | 0;
}
function __ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function __ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZThn16_NK7WebCore12SharedWorker20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 16;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore12SharedWorker20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 16;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZN7WebCore15ActiveDOMObject4stopEv__wrapper,b1,__ZN7WebCore12SharedWorkerD2Ev,b1,__ZN7WebCore12SharedWorkerD0Ev,b1,vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,vi___ZN7WebCore15ActiveDOMObject6resumeEv__wrapper,b1,__ZThn16_N7WebCore12SharedWorkerD1Ev,b1,__ZThn16_N7WebCore12SharedWorkerD0Ev,b1,__ZThn16_N7WebCore14AbstractWorker14refEventTargetEv,b1,vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper,b1,__ZN7WebCore14AbstractWorker16derefEventTargetEv,b1,__ZN7WebCore14AbstractWorker14refEventTargetEv,b1,__ZThn16_N7WebCore14AbstractWorker16derefEventTargetEv,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE__wrapper,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore12SharedWorker20eventTargetInterfaceEv,b3,__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv,b3,__ZThn16_NK7WebCore12SharedWorker20eventTargetInterfaceEv,b3,ii___ZNK7WebCore15ActiveDOMObject10canSuspendEv__wrapper,b3,__ZNK7WebCore14AbstractWorker22scriptExecutionContextEv,b3,ii___ZN7WebCore11EventTarget6toNodeEv__wrapper,b3,ii___ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv__wrapper,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZThn16_NK7WebCore14AbstractWorker22scriptExecutionContextEv,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4,v___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv","_strlen","__ZNK7WebCore12SharedWorker20eventTargetInterfaceEv","__ZThn16_N7WebCore14AbstractWorker14refEventTargetEv","__ZN7WebCore14AbstractWorker16derefEventTargetEv","__ZN7WebCore12SharedWorkerD2Ev","_memset","__ZThn16_N7WebCore12SharedWorkerD0Ev","__ZThn16_NK7WebCore14AbstractWorker22scriptExecutionContextEv","_memcpy","__ZNK7WebCore14AbstractWorker22scriptExecutionContextEv","__ZN7WebCore12SharedWorker6createERNS_22ScriptExecutionContextERKN3WTF6StringES6_Ri","__ZN7WebCore14AbstractWorker14refEventTargetEv","__ZThn16_N7WebCore12SharedWorkerD1Ev","__ZN7WebCore12SharedWorkerD0Ev","__ZThn16_N7WebCore14AbstractWorker16derefEventTargetEv","__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv","__ZThn16_NK7WebCore12SharedWorker20eventTargetInterfaceEv"]

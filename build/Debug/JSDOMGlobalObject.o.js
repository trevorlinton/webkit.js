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
H_BASE = parentModule["_malloc"](120 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 120;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17JSDOMGlobalObjectC1ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_15DOMWrapperWorldEEEPKNS1_23GlobalObjectMethodTableE;
/* memory initializer */ allocate([68,79,77,71,108,111,98,97,108,79,98,106,101,99,116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN3JSC14JSGlobalObject6s_infoE=env.__ZN3JSC14JSGlobalObject6s_infoE|0;
  var __ZN7WebCore15JSDOMWindowBase6s_infoE=env.__ZN7WebCore15JSDOMWindowBase6s_infoE|0;
  var __ZN7WebCore23JSWorkerGlobalScopeBase6s_infoE=env.__ZN7WebCore23JSWorkerGlobalScopeBase6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore17JSDOMGlobalObject6s_infoE=(H_BASE+24)|0;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17JSDOMGlobalObject13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 __ZN3JSC14JSGlobalObject13visitChildrenEPNS_6JSCellERNS_11SlotVisitorE(i1, i2);
 i3 = HEAP32[i1 + 612 >> 2] | 0;
 i4 = HEAP32[i1 + 616 >> 2] | 0;
 i5 = i3 + (i4 << 3) | 0;
 L1 : do {
  if ((HEAP32[i1 + 624 >> 2] | 0) != 0) {
   L3 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L3;
      }
      i7 = i7 + 8 | 0;
      if ((i7 | 0) == (i5 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    break;
   }
   i7 = i2 + 40 | 0;
   i8 = i2 + 48 | 0;
   i9 = i2 + 12 | 0;
   i10 = i2 | 0;
   i11 = i2 | 0;
   i12 = i6;
   while (1) {
    i13 = HEAP32[i12 + 4 >> 2] | 0;
    i14 = i13 | 0;
    do {
     if ((i13 | 0) != 0) {
      i15 = i13;
      i16 = i15 & -65536;
      i17 = i16;
      i18 = i15 - i16 | 0;
      i16 = 1 << (i18 >>> 3 & 31);
      i15 = i17 + 20 + (i18 >>> 8 << 2) | 0;
      i18 = HEAP32[i15 >> 2] | 0;
      HEAP32[i15 >> 2] = i18 | i16;
      if ((i18 & i16 | 0) != 0) {
       break;
      }
      if ((HEAP32[i13 >> 2] | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + (HEAP32[i17 + 12 >> 2] << 3);
      HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
      i17 = HEAP32[i9 >> 2] | 0;
      if ((i17 | 0) == 1021) {
       __ZN3JSC14MarkStackArray6expandEv(i10);
       i19 = HEAP32[i9 >> 2] | 0;
      } else {
       i19 = i17;
      }
      HEAP32[i9 >> 2] = i19 + 1;
      HEAP32[(HEAP32[i11 >> 2] | 0) + 12 + (i19 << 2) >> 2] = i14;
     }
    } while (0);
    i14 = i12 + 8 | 0;
    if ((i14 | 0) == (i5 | 0)) {
     break L1;
    } else {
     i20 = i14;
    }
    while (1) {
     i14 = HEAP32[i20 >> 2] | 0;
     if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
      break;
     }
     i14 = i20 + 8 | 0;
     if ((i14 | 0) == (i5 | 0)) {
      break L1;
     } else {
      i20 = i14;
     }
    }
    if ((i20 | 0) == (i5 | 0)) {
     break;
    } else {
     i12 = i20;
    }
   }
  }
 } while (0);
 i20 = HEAP32[i1 + 632 >> 2] | 0;
 i5 = HEAP32[i1 + 636 >> 2] | 0;
 i19 = i20 + (i5 << 3) | 0;
 if ((HEAP32[i1 + 644 >> 2] | 0) == 0) {
  return;
 }
 L27 : do {
  if ((i5 | 0) == 0) {
   i21 = i20;
  } else {
   i1 = i20;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i21 = i1;
     break L27;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i19 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i21 | 0) == (i19 | 0)) {
  return;
 }
 i20 = i2 + 40 | 0;
 i5 = i2 + 48 | 0;
 i1 = i2 + 12 | 0;
 i6 = i2 | 0;
 i3 = i2 | 0;
 i2 = i21;
 L36 : while (1) {
  i21 = HEAP32[i2 + 4 >> 2] | 0;
  i4 = i21 | 0;
  do {
   if ((i21 | 0) != 0) {
    i12 = i21;
    i11 = i12 & -65536;
    i9 = i11;
    i10 = i12 - i11 | 0;
    i11 = 1 << (i10 >>> 3 & 31);
    i12 = i9 + 20 + (i10 >>> 8 << 2) | 0;
    i10 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = i10 | i11;
    if ((i10 & i11 | 0) != 0) {
     break;
    }
    if ((HEAP32[i21 >> 2] | 0) == 0) {
     break;
    }
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i9 + 12 >> 2] << 3);
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    i9 = HEAP32[i1 >> 2] | 0;
    if ((i9 | 0) == 1021) {
     __ZN3JSC14MarkStackArray6expandEv(i6);
     i22 = HEAP32[i1 >> 2] | 0;
    } else {
     i22 = i9;
    }
    HEAP32[i1 >> 2] = i22 + 1;
    HEAP32[(HEAP32[i3 >> 2] | 0) + 12 + (i22 << 2) >> 2] = i4;
   }
  } while (0);
  i4 = i2 + 8 | 0;
  if ((i4 | 0) == (i19 | 0)) {
   i23 = 37;
   break;
  } else {
   i24 = i4;
  }
  while (1) {
   i4 = HEAP32[i24 >> 2] | 0;
   if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
    break;
   }
   i4 = i24 + 8 | 0;
   if ((i4 | 0) == (i19 | 0)) {
    i23 = 39;
    break L36;
   } else {
    i24 = i4;
   }
  }
  if ((i24 | 0) == (i19 | 0)) {
   i23 = 38;
   break;
  } else {
   i2 = i24;
  }
 }
 if ((i23 | 0) == 37) {
  return;
 } else if ((i23 | 0) == 38) {
  return;
 } else if ((i23 | 0) == 39) {
  return;
 }
}
function __ZNK7WebCore17JSDOMGlobalObject22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = (HEAP32[(i1 & -65536) + 1048 >> 2] | 0) == 2;
 if (i2) {
  i3 = i1 + 8 | 0;
 } else {
  i3 = (HEAP32[i1 >> 2] | 0) + 32 | 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 L5 : do {
  if ((i4 | 0) != 0) {
   i3 = i4;
   while (1) {
    if ((i3 | 0) == (__ZN7WebCore15JSDOMWindowBase6s_infoE | 0)) {
     break;
    }
    i3 = HEAP32[i3 + 4 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break L5;
    }
   }
   i5 = __ZNK7WebCore15JSDOMWindowBase22scriptExecutionContextEv(i1) | 0;
   return i5 | 0;
  }
 } while (0);
 if (i2) {
  i6 = i1 + 8 | 0;
 } else {
  i6 = (HEAP32[i1 >> 2] | 0) + 32 | 0;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 } else {
  i7 = i2;
 }
 while (1) {
  if ((i7 | 0) == (__ZN7WebCore23JSWorkerGlobalScopeBase6s_infoE | 0)) {
   break;
  }
  i2 = HEAP32[i7 + 4 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i5 = 0;
   i8 = 18;
   break;
  } else {
   i7 = i2;
  }
 }
 if ((i8 | 0) == 18) {
  return i5 | 0;
 }
 i5 = __ZNK7WebCore23JSWorkerGlobalScopeBase22scriptExecutionContextEv(i1) | 0;
 return i5 | 0;
}
function __ZN7WebCore19toJSDOMGlobalObjectEPNS_22ScriptExecutionContextEPN3JSC9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 3](i1) | 0) {
  i4 = __ZN7WebCore13toJSDOMWindowEPNS_5FrameERNS_15DOMWrapperWorldE(HEAP32[i1 - 156 + 400 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0) | 0;
  return i4 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 3](i1) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i1 + 260 >> 2] | 0;
 i1 = i3 + 8 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = 6;
 } else {
  if ((HEAP32[i2 + 4 >> 2] | 0) == -6) {
   i5 = 6;
  } else {
   i6 = i2;
  }
 }
 do {
  if ((i5 | 0) == 6) {
   __ZN7WebCore22WorkerScriptController10initScriptEv(i3);
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) == -6) {
    i4 = 0;
   } else {
    i6 = i2;
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 return i4 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 24 >> 2] = H_BASE + 8;
 HEAP32[H_BASE + 28 >> 2] = __ZN3JSC14JSGlobalObject6s_infoE;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vii + 2;
}
function __ZN7WebCore19toJSDOMGlobalObjectEPNS_22ScriptExecutionContextERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 3](i1) | 0) {
  i4 = __ZN7WebCore13toJSDOMWindowEPNS_5FrameERNS_15DOMWrapperWorldE(HEAP32[i1 - 156 + 400 >> 2] | 0, i2) | 0;
  return i4 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 3](i1) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i1 + 260 >> 2] | 0;
 i1 = i3 + 8 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = 6;
 } else {
  if ((HEAP32[i2 + 4 >> 2] | 0) == -6) {
   i5 = 6;
  } else {
   i6 = i2;
  }
 }
 do {
  if ((i5 | 0) == 6) {
   __ZN7WebCore22WorkerScriptController10initScriptEv(i3);
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) == -6) {
    i4 = 0;
   } else {
    i6 = i2;
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore17JSDOMGlobalObject14finishCreationERN3JSC2VMEPNS1_8JSObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = i1;
 i5 = i1 + 12 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = i2 + 7060 | 0;
  i7 = i6 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i6, 56) | 0;
  } else {
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   i9 = i8;
  }
  HEAP32[i9 >> 2] = 0;
  __ZN3JSC11SymbolTableC1ERNS_2VME(i9, i2);
  HEAP32[i5 >> 2] = i9;
 }
 HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] = i1;
 HEAP8[i1 + 604 | 0] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 + 608 >> 2] | 0) + 16 >> 2] & 3](i4) | 0) & 1;
 __ZN3JSC14JSGlobalObject4initEPNS_8JSObjectE(i4, i3);
 __ZN3JSC14JSGlobalObject25setRemoteDebuggingEnabledEb(i4, 0);
 return;
}
function __ZN7WebCore17JSDOMGlobalObject14finishCreationERN3JSC2VME(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1;
 i4 = i1 + 12 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i5 = i2 + 7060 | 0;
  i6 = i5 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i5, 56) | 0;
  } else {
   HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
   i8 = i7;
  }
  HEAP32[i8 >> 2] = 0;
  __ZN3JSC11SymbolTableC1ERNS_2VME(i8, i2);
  HEAP32[i4 >> 2] = i8;
 }
 HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] = i1;
 HEAP8[i1 + 604 | 0] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 + 608 >> 2] | 0) + 16 >> 2] & 3](i3) | 0) & 1;
 __ZN3JSC14JSGlobalObject4initEPNS_8JSObjectE(i3, i1);
 __ZN3JSC14JSGlobalObject25setRemoteDebuggingEnabledEb(i3, 0);
 return;
}
function __ZN7WebCore17JSDOMGlobalObject7destroyEPN3JSC6JSCellE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 656 >> 2] | 0;
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
 i2 = HEAP32[i1 + 632 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 612 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3JSC14JSGlobalObjectD2Ev(i5);
  return;
 }
 __ZN3WTF8fastFreeEPv(i2);
 i5 = i1;
 __ZN3JSC14JSGlobalObjectD2Ev(i5);
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
function __ZN7WebCore17JSDOMGlobalObjectC2ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_15DOMWrapperWorldEEEPKNS1_23GlobalObjectMethodTableE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN3JSC14JSGlobalObjectC2ERNS_2VMEPNS_9StructureEPKNS_23GlobalObjectMethodTableE(i1, i2, i3, i5);
 i5 = i4 | 0;
 _memset(i1 + 612 | 0, 0, 44) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 656 >> 2] = i4;
 return;
}
function __ZN7WebCore17JSDOMGlobalObjectC1ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_15DOMWrapperWorldEEEPKNS1_23GlobalObjectMethodTableE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN3JSC14JSGlobalObjectC2ERNS_2VMEPNS_9StructureEPKNS_23GlobalObjectMethodTableE(i1, i2, i3, i5);
 i5 = i4 | 0;
 _memset(i1 + 612 | 0, 0, 44) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 656 >> 2] = i4;
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
function __ZN7WebCore19toJSDOMGlobalObjectEPNS_8DocumentEPN3JSC9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore13toJSDOMWindowEPNS_5FrameERNS_15DOMWrapperWorldE(HEAP32[i1 + 332 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0) | 0;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore19toJSDOMGlobalObjectEPNS_8DocumentERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore13toJSDOMWindowEPNS_5FrameERNS_15DOMWrapperWorldE(HEAP32[i1 + 332 >> 2] | 0, i2) | 0;
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
function vii___ZN3JSC8JSObject9classNameEPKS0___wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3JSC8JSObject9classNameEPKS0_(i1 | 0, i2 | 0);
}
function __ZN7WebCore17JSDOMGlobalObject15setCurrentEventEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 652 >> 2] = i2;
 return;
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function __ZNK7WebCore17JSDOMGlobalObject12currentEventEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 652 >> 2] | 0;
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
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
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
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
  var FUNCTION_TABLE_viiiii = [b1,b1,viiiii___ZN3JSC8JSObject10putByIndexEPNS_6JSCellEPNS_9ExecStateEjNS_7JSValueEb__wrapper,b1,viiiii___ZN3JSC14JSGlobalObject3putEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE__wrapper,b1,__ZN7WebCore17JSDOMGlobalObjectC2ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_15DOMWrapperWorldEEEPKNS1_23GlobalObjectMethodTableE,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore17JSDOMGlobalObject7destroyEPN3JSC6JSCellE,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN3JSC6JSCell17getTypedArrayImplEPNS_17JSArrayBufferViewE__wrapper,b3,__ZN7WebCore17JSDOMGlobalObject13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE,b3,vii___ZN3JSC8JSObject9classNameEPKS0___wrapper,b3];
  var FUNCTION_TABLE_ii = [b4,b4,ii___ZN3JSC6JSCell22slowDownAndWasteMemoryEPNS_17JSArrayBufferViewE__wrapper,b4];
  var FUNCTION_TABLE_viii = [b5,b5,viii___ZN3JSC8JSObject16copyBackingStoreEPNS_6JSCellERNS_11CopyVisitorENS_9CopyTokenE__wrapper,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iiiii = [b7,b7,iiiii___ZN3JSC14JSGlobalObject18getOwnPropertySlotEPNS_8JSObjectEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE__wrapper,b7,iiiii___ZN3JSC8JSObject25getOwnPropertySlotByIndexEPS0_PNS_9ExecStateEjRNS_12PropertySlotE__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,iii___ZN3JSC6JSCell11getCallDataEPS0_RNS_8CallDataE__wrapper,b8,iii___ZN3JSC6JSCell16getConstructDataEPS0_RNS_13ConstructDataE__wrapper,b8,b8,b8];
  var FUNCTION_TABLE_iiiiii = [b9,b9,iiiiii___ZN3JSC14JSGlobalObject17defineOwnPropertyEPNS_8JSObjectEPNS_9ExecStateENS_12PropertyNameERKNS_18PropertyDescriptorEb__wrapper,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,viiii___ZN3JSC19JSSymbolTableObject27getOwnNonIndexPropertyNamesEPNS_8JSObjectEPNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper,b10,viiii___ZN3JSC14JSGlobalObject6toThisEPNS_6JSCellEPNS_9ExecStateENS_8ECMAModeE__wrapper,b10,viiii___ZN3JSC8JSObject12defaultValueEPKS0_PNS_9ExecStateENS_22PreferredPrimitiveTypeE__wrapper,b10,viiii___ZN3JSC8JSObject16getPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper,b10,viiii___ZN3JSC8JSObject19getOwnPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper,b10,b10,b10,b10,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3JSC14JSGlobalObject6s_infoE": __ZN3JSC14JSGlobalObject6s_infoE, "__ZN7WebCore15JSDOMWindowBase6s_infoE": __ZN7WebCore15JSDOMWindowBase6s_infoE, "__ZN7WebCore23JSWorkerGlobalScopeBase6s_infoE": __ZN7WebCore23JSWorkerGlobalScopeBase6s_infoE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore17JSDOMGlobalObject7destroyEPN3JSC6JSCellE","__ZN7WebCore19toJSDOMGlobalObjectEPNS_8DocumentEPN3JSC9ExecStateE","_strlen","_memset","__ZNK7WebCore17JSDOMGlobalObject12currentEventEv","__ZN7WebCore19toJSDOMGlobalObjectEPNS_22ScriptExecutionContextERNS_15DOMWrapperWorldE","__ZN7WebCore17JSDOMGlobalObject15setCurrentEventEPNS_5EventE","__ZN7WebCore19toJSDOMGlobalObjectEPNS_8DocumentERNS_15DOMWrapperWorldE","__ZN7WebCore17JSDOMGlobalObject13visitChildrenEPN3JSC6JSCellERNS1_11SlotVisitorE","_memcpy","__ZN7WebCore17JSDOMGlobalObject14finishCreationERN3JSC2VMEPNS1_8JSObjectE","__ZN7WebCore17JSDOMGlobalObjectC2ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_15DOMWrapperWorldEEEPKNS1_23GlobalObjectMethodTableE","__ZNK7WebCore17JSDOMGlobalObject22scriptExecutionContextEv","__ZN7WebCore17JSDOMGlobalObject14finishCreationERN3JSC2VME","__ZN7WebCore19toJSDOMGlobalObjectEPNS_22ScriptExecutionContextEPN3JSC9ExecStateE"]

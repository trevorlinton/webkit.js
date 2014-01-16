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
H_BASE = parentModule["_malloc"](168 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 168;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9CaretBaseC1ENS0_15CaretVisibilityE;
var __ZN7WebCore19DragCaretControllerC1Ev;
var __ZN7WebCore14FrameSelectionC1EPNS_5FrameE;
/* memory initializer */ allocate([32,32,32,32,35,116,101,120,116,32,58,32,34,37,115,34,10,0,0,0,0,0,0,0,94,10,0,0,0,0,0,0,32,32,32,32,32,32,32,32,32,32,32,0,0,0,0,0,61,61,62,32,35,116,101,120,116,32,58,32,34,37,115,34,32,97,116,32,111,102,102,115,101,116,32,37,100,10,0,0,46,46,46,0,0,0,0,0,37,115,35,116,101,120,116,32,40,101,109,112,116,121,41,10,0,0,0,0,0,0,0,0,32,32,32,32,0,0,0,0,61,61,62,32,0,0,0,0,37,115,37,115,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames7formTagE=env.__ZN7WebCore9HTMLNames7formTagE|0;
  var _stderr=env._stderr|0;
  var __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE=env.__ZN7WebCore15ScrollAlignment19alignCenterIfNeededE|0;
  var __ZN7WebCore15ScrollAlignment14alignTopAlwaysE=env.__ZN7WebCore15ScrollAlignment14alignTopAlwaysE|0;
  var __ZN7WebCore9HTMLNames9selectTagE=env.__ZN7WebCore9HTMLNames9selectTagE|0;
  var __ZN7WebCore9HTMLNames8frameTagE=env.__ZN7WebCore9HTMLNames8frameTagE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore15ScrollAlignment17alignCenterAlwaysE=env.__ZN7WebCore15ScrollAlignment17alignCenterAlwaysE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE=env.__ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore5TimerINS_14FrameSelectionEEE=(H_BASE+144)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _fputc=env._fputc;
  var _malloc=env._malloc;
  var _pwrite=env._pwrite;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var ___setErrNo=env.___setErrNo;
  var _fwrite=env._fwrite;
  var __reallyNegative=env.__reallyNegative;
  var __formatString=env.__formatString;
  var _send=env._send;
  var _write=env._write;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fprintf=env._fprintf;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14FrameSelection19modifyMovingForwardENS_15TextGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 416 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 144 | 0;
 i15 = i4 + 160 | 0;
 i16 = i4 + 176 | 0;
 i17 = i4 + 192 | 0;
 i18 = i4 + 208 | 0;
 i19 = i4 + 216 | 0;
 i20 = i4 + 232 | 0;
 i21 = i4 + 248 | 0;
 i22 = i4 + 256 | 0;
 i23 = i4 + 272 | 0;
 i24 = i4 + 288 | 0;
 i25 = i4 + 304 | 0;
 i26 = i4 + 320 | 0;
 i27 = i4 + 336 | 0;
 i28 = i4 + 352 | 0;
 i29 = i4 + 368 | 0;
 i30 = i4 + 384 | 0;
 i31 = i4 + 400 | 0;
 i32 = i1 | 0;
 HEAP32[i32 >> 2] = 0;
 i33 = i1 + 4 | 0;
 HEAP32[i33 >> 2] = 0;
 i34 = i1 + 8 | 0;
 i35 = i34;
 i36 = HEAP32[i35 >> 2] | 0;
 HEAP32[i35 >> 2] = i36 & -8;
 HEAP8[i34] = i36 & 255 & -16;
 i36 = i1 + 12 | 0;
 HEAP32[i36 >> 2] = 1;
 switch (i3 | 0) {
 case 6:
  {
   i3 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i37 = 158;
    } else {
     if ((HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i37 = 158;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i38 = 0;
     } else {
      i38 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i25, i2 + 68 | 0, i38);
    }
   } while (0);
   do {
    if ((i37 | 0) == 158) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i39 = 1;
      } else {
       i39 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i25, i2 + 56 | 0, i39);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i40 = 0;
      } else {
       i40 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i25, i2 + 68 | 0, i40);
      break;
     }
    }
   } while (0);
   __ZN7WebCore16logicalEndOfLineERKNS_15VisiblePositionE(i24, i25);
   i40 = i24 | 0;
   i39 = HEAP32[i40 >> 2] | 0;
   HEAP32[i40 >> 2] = 0;
   i38 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i39;
   do {
    if ((i38 | 0) != 0) {
     i39 = i38 + 8 | 0;
     i3 = i39 | 0;
     i41 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     HEAP32[i3 >> 2] = i41;
     if ((i41 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i24 + 4 >> 2];
   i38 = HEAP32[i24 + 8 >> 2] | 0;
   i39 = HEAP32[i35 >> 2] & -8 | i38 & 7;
   HEAP32[i35 >> 2] = i39;
   HEAP8[i34] = i39 & 255 & -9 | i38 & 8;
   HEAP32[i36 >> 2] = HEAP32[i24 + 12 >> 2];
   i24 = HEAP32[i40 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i40 = i24 + 8 | 0;
     i38 = i40 | 0;
     i39 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     HEAP32[i38 >> 2] = i39;
     if ((i39 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
    }
   } while (0);
   i24 = HEAP32[i25 >> 2] | 0;
   if ((i24 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i25 = i24 + 8 | 0;
   i24 = i25 | 0;
   i40 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i40;
   if ((i40 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 0:
  {
   if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
    i25 = i6 | 0;
    i40 = HEAP32[i2 + 68 >> 2] | 0;
    HEAP32[i25 >> 2] = i40;
    if ((i40 | 0) == 0) {
     i24 = i6 + 8 | 0;
     i42 = 0;
     i43 = i24;
     i44 = i24;
    } else {
     i24 = i40 + 8 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
     i24 = i6 + 8 | 0;
     i40 = i24;
     i42 = HEAP32[i40 >> 2] & -8;
     i43 = i24;
     i44 = i40;
    }
    HEAP32[i6 + 4 >> 2] = HEAP32[i2 + 72 >> 2];
    i40 = HEAP32[i2 + 76 >> 2] | 0;
    i24 = i42 | i40 & 7;
    HEAP32[i44 >> 2] = i24;
    HEAP8[i43] = i24 & 255 & -9 | i40 & 8;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i6, HEAP32[i2 + 80 >> 2] | 0);
    i6 = i5 | 0;
    i40 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    i24 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = i40;
    do {
     if ((i24 | 0) != 0) {
      i40 = i24 + 8 | 0;
      i43 = i40 | 0;
      i44 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
      HEAP32[i43 >> 2] = i44;
      if ((i44 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
     }
    } while (0);
    HEAP32[i33 >> 2] = HEAP32[i5 + 4 >> 2];
    i24 = HEAP32[i5 + 8 >> 2] | 0;
    i40 = HEAP32[i35 >> 2] & -8 | i24 & 7;
    HEAP32[i35 >> 2] = i40;
    HEAP8[i34] = i40 & 255 & -9 | i24 & 8;
    HEAP32[i36 >> 2] = HEAP32[i5 + 12 >> 2];
    i5 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i5 | 0) != 0) {
      i6 = i5 + 8 | 0;
      i24 = i6 | 0;
      i40 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      HEAP32[i24 >> 2] = i40;
      if ((i40 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    i5 = HEAP32[i25 >> 2] | 0;
    if ((i5 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i25 = i5 + 8 | 0;
    i5 = i25 | 0;
    i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    HEAP32[i5 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
    STACKTOP = i4;
    return;
   }
   i25 = i9 | 0;
   i6 = HEAP32[i2 + 44 >> 2] | 0;
   HEAP32[i25 >> 2] = i6;
   if ((i6 | 0) == 0) {
    i5 = i9 + 8 | 0;
    i45 = 0;
    i46 = i5;
    i47 = i5;
   } else {
    i5 = i6 + 8 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    i5 = i9 + 8 | 0;
    i6 = i5;
    i45 = HEAP32[i6 >> 2] & -8;
    i46 = i5;
    i47 = i6;
   }
   HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 48 >> 2];
   i6 = HEAP32[i2 + 52 >> 2] | 0;
   i5 = i45 | i6 & 7;
   HEAP32[i47 >> 2] = i5;
   HEAP8[i46] = i5 & 255 & -9 | i6 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, HEAP32[i2 + 80 >> 2] | 0);
   __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i7, i8, 1);
   i9 = i7 | 0;
   i6 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i5 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i6;
   do {
    if ((i5 | 0) != 0) {
     i6 = i5 + 8 | 0;
     i46 = i6 | 0;
     i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     HEAP32[i46 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i7 + 4 >> 2];
   i5 = HEAP32[i7 + 8 >> 2] | 0;
   i6 = HEAP32[i35 >> 2] & -8 | i5 & 7;
   HEAP32[i35 >> 2] = i6;
   HEAP8[i34] = i6 & 255 & -9 | i5 & 8;
   HEAP32[i36 >> 2] = HEAP32[i7 + 12 >> 2];
   i7 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i9 = i7 + 8 | 0;
     i5 = i9 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     HEAP32[i5 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   i7 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 + 8 | 0;
     i9 = i8 | 0;
     i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   i7 = HEAP32[i25 >> 2] | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i25 = i7 + 8 | 0;
   i7 = i25 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 5:
  {
   i25 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i25 | 0) == 0) {
     i37 = 134;
    } else {
     if ((HEAP32[(HEAP32[i25 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i37 = 134;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i48 = 0;
     } else {
      i48 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i23, i2 + 68 | 0, i48);
    }
   } while (0);
   do {
    if ((i37 | 0) == 134) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i49 = 1;
      } else {
       i49 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i23, i2 + 56 | 0, i49);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i50 = 0;
      } else {
       i50 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i23, i2 + 68 | 0, i50);
      break;
     }
    }
   } while (0);
   __ZN7WebCore13endOfSentenceERKNS_15VisiblePositionE(i22, i23);
   i50 = i22 | 0;
   i49 = HEAP32[i50 >> 2] | 0;
   HEAP32[i50 >> 2] = 0;
   i48 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i49;
   do {
    if ((i48 | 0) != 0) {
     i49 = i48 + 8 | 0;
     i25 = i49 | 0;
     i8 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i49 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i49 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i22 + 4 >> 2];
   i48 = HEAP32[i22 + 8 >> 2] | 0;
   i49 = HEAP32[i35 >> 2] & -8 | i48 & 7;
   HEAP32[i35 >> 2] = i49;
   HEAP8[i34] = i49 & 255 & -9 | i48 & 8;
   HEAP32[i36 >> 2] = HEAP32[i22 + 12 >> 2];
   i22 = HEAP32[i50 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i50 = i22 + 8 | 0;
     i48 = i50 | 0;
     i49 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     HEAP32[i48 >> 2] = i49;
     if ((i49 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
    }
   } while (0);
   i22 = HEAP32[i23 >> 2] | 0;
   if ((i22 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i23 = i22 + 8 | 0;
   i22 = i23 | 0;
   i50 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i50;
   if ((i50 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 8:
  {
   i23 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i23 | 0) == 0) {
     i37 = 206;
    } else {
     if ((HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i37 = 206;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i51 = 0;
     } else {
      i51 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i28, i2 + 68 | 0, i51);
    }
   } while (0);
   do {
    if ((i37 | 0) == 206) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i52 = 1;
      } else {
       i52 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i28, i2 + 56 | 0, i52);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i53 = 0;
      } else {
       i53 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i28, i2 + 68 | 0, i53);
      break;
     }
    }
   } while (0);
   i53 = i28 | 0;
   i52 = HEAP32[i53 >> 2] | 0;
   HEAP32[i53 >> 2] = 0;
   i51 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i52;
   do {
    if ((i51 | 0) != 0) {
     i52 = i51 + 8 | 0;
     i23 = i52 | 0;
     i50 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i50;
     if ((i50 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i28 + 4 >> 2];
   i51 = HEAP32[i28 + 8 >> 2] | 0;
   i52 = HEAP32[i35 >> 2] & -8 | i51 & 7;
   HEAP32[i35 >> 2] = i52;
   HEAP8[i34] = i52 & 255 & -9 | i51 & 8;
   HEAP32[i36 >> 2] = HEAP32[i28 + 12 >> 2];
   i28 = HEAP32[i53 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i53 = i28 + 8 | 0;
     i51 = i53 | 0;
     i52 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     HEAP32[i51 >> 2] = i52;
     if ((i52 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
    }
   } while (0);
   i28 = i29 | 0;
   i53 = HEAP32[i32 >> 2] | 0;
   HEAP32[i28 >> 2] = i53;
   if ((i53 | 0) != 0) {
    i52 = i53 + 8 | 0;
    HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
   }
   HEAP32[i29 + 4 >> 2] = HEAP32[i33 >> 2];
   i52 = HEAP32[i35 >> 2] | 0;
   i53 = i29 + 8 | 0;
   i51 = i53;
   i50 = HEAP32[i51 >> 2] & -8 | i52 & 7;
   HEAP32[i51 >> 2] = i50;
   HEAP8[i53] = i50 & 255 & -9 | i52 & 8;
   i52 = __ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i29, 0, 0) | 0;
   i29 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i28 = i29 + 8 | 0;
     i50 = i28 | 0;
     i53 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     HEAP32[i50 >> 2] = i53;
     if ((i53 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    }
   } while (0);
   if (i52) {
    __ZN7WebCore20endOfEditableContentERKNS_15VisiblePositionE(i30, i1);
    i52 = i30 | 0;
    i29 = HEAP32[i52 >> 2] | 0;
    HEAP32[i52 >> 2] = 0;
    i28 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = i29;
    do {
     if ((i28 | 0) != 0) {
      i29 = i28 + 8 | 0;
      i53 = i29 | 0;
      i50 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
      HEAP32[i53 >> 2] = i50;
      if ((i50 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    HEAP32[i33 >> 2] = HEAP32[i30 + 4 >> 2];
    i28 = HEAP32[i30 + 8 >> 2] | 0;
    i29 = HEAP32[i35 >> 2] & -8 | i28 & 7;
    HEAP32[i35 >> 2] = i29;
    HEAP8[i34] = i29 & 255 & -9 | i28 & 8;
    HEAP32[i36 >> 2] = HEAP32[i30 + 12 >> 2];
    i30 = HEAP32[i52 >> 2] | 0;
    if ((i30 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i52 = i30 + 8 | 0;
    i30 = i52 | 0;
    i28 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    HEAP32[i30 >> 2] = i28;
    if ((i28 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    STACKTOP = i4;
    return;
   } else {
    __ZN7WebCore13endOfDocumentERKNS_15VisiblePositionE(i31, i1);
    i52 = i31 | 0;
    i28 = HEAP32[i52 >> 2] | 0;
    HEAP32[i52 >> 2] = 0;
    i30 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = i28;
    do {
     if ((i30 | 0) != 0) {
      i28 = i30 + 8 | 0;
      i29 = i28 | 0;
      i50 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i50;
      if ((i50 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
     }
    } while (0);
    HEAP32[i33 >> 2] = HEAP32[i31 + 4 >> 2];
    i30 = HEAP32[i31 + 8 >> 2] | 0;
    i28 = HEAP32[i35 >> 2] & -8 | i30 & 7;
    HEAP32[i35 >> 2] = i28;
    HEAP8[i34] = i28 & 255 & -9 | i30 & 8;
    HEAP32[i36 >> 2] = HEAP32[i31 + 12 >> 2];
    i31 = HEAP32[i52 >> 2] | 0;
    if ((i31 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i52 = i31 + 8 | 0;
    i31 = i52 | 0;
    i30 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
    HEAP32[i31 >> 2] = i30;
    if ((i30 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 7:
  {
   i52 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i52 | 0) == 0) {
     i37 = 182;
    } else {
     if ((HEAP32[(HEAP32[i52 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i37 = 182;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i54 = 0;
     } else {
      i54 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i27, i2 + 68 | 0, i54);
    }
   } while (0);
   do {
    if ((i37 | 0) == 182) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i55 = 1;
      } else {
       i55 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i27, i2 + 56 | 0, i55);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i56 = 0;
      } else {
       i56 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i27, i2 + 68 | 0, i56);
      break;
     }
    }
   } while (0);
   __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i26, i27, 1);
   i56 = i26 | 0;
   i55 = HEAP32[i56 >> 2] | 0;
   HEAP32[i56 >> 2] = 0;
   i54 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i55;
   do {
    if ((i54 | 0) != 0) {
     i55 = i54 + 8 | 0;
     i52 = i55 | 0;
     i30 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     HEAP32[i52 >> 2] = i30;
     if ((i30 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i26 + 4 >> 2];
   i54 = HEAP32[i26 + 8 >> 2] | 0;
   i55 = HEAP32[i35 >> 2] & -8 | i54 & 7;
   HEAP32[i35 >> 2] = i55;
   HEAP8[i34] = i55 & 255 & -9 | i54 & 8;
   HEAP32[i36 >> 2] = HEAP32[i26 + 12 >> 2];
   i26 = HEAP32[i56 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i56 = i26 + 8 | 0;
     i54 = i56 | 0;
     i55 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
     HEAP32[i54 >> 2] = i55;
     if ((i55 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
    }
   } while (0);
   i26 = HEAP32[i27 >> 2] | 0;
   if ((i26 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i27 = i26 + 8 | 0;
   i26 = i27 | 0;
   i56 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   HEAP32[i26 >> 2] = i56;
   if ((i56 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 1:
  {
   i27 = i12 | 0;
   i56 = HEAP32[i2 + 44 >> 2] | 0;
   HEAP32[i27 >> 2] = i56;
   if ((i56 | 0) == 0) {
    i26 = i12 + 8 | 0;
    i57 = 0;
    i58 = i26;
    i59 = i26;
   } else {
    i26 = i56 + 8 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i26 = i12 + 8 | 0;
    i56 = i26;
    i57 = HEAP32[i56 >> 2] & -8;
    i58 = i26;
    i59 = i56;
   }
   HEAP32[i12 + 4 >> 2] = HEAP32[i2 + 48 >> 2];
   i56 = HEAP32[i2 + 52 >> 2] | 0;
   i26 = i57 | i56 & 7;
   HEAP32[i59 >> 2] = i26;
   HEAP8[i58] = i26 & 255 & -9 | i56 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i12, HEAP32[i2 + 80 >> 2] | 0);
   __ZN7WebCore14FrameSelection27nextWordPositionForPlatformERKNS_15VisiblePositionE(i10, i2, i11);
   i12 = i10 | 0;
   i56 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i26 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i56;
   do {
    if ((i26 | 0) != 0) {
     i56 = i26 + 8 | 0;
     i58 = i56 | 0;
     i59 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
     HEAP32[i58 >> 2] = i59;
     if ((i59 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i10 + 4 >> 2];
   i26 = HEAP32[i10 + 8 >> 2] | 0;
   i56 = HEAP32[i35 >> 2] & -8 | i26 & 7;
   HEAP32[i35 >> 2] = i56;
   HEAP8[i34] = i56 & 255 & -9 | i26 & 8;
   HEAP32[i36 >> 2] = HEAP32[i10 + 12 >> 2];
   i10 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i12 = i10 + 8 | 0;
     i26 = i12 | 0;
     i56 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     HEAP32[i26 >> 2] = i56;
     if ((i56 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   i10 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 + 8 | 0;
     i12 = i11 | 0;
     i56 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i56;
     if ((i56 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   i10 = HEAP32[i27 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i27 = i10 + 8 | 0;
   i10 = i27 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 2:
  {
   i27 = i15 | 0;
   i11 = HEAP32[i2 + 44 >> 2] | 0;
   HEAP32[i27 >> 2] = i11;
   if ((i11 | 0) == 0) {
    i10 = i15 + 8 | 0;
    i60 = 0;
    i61 = i10;
    i62 = i10;
   } else {
    i10 = i11 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    i10 = i15 + 8 | 0;
    i11 = i10;
    i60 = HEAP32[i11 >> 2] & -8;
    i61 = i10;
    i62 = i11;
   }
   HEAP32[i15 + 4 >> 2] = HEAP32[i2 + 48 >> 2];
   i11 = HEAP32[i2 + 52 >> 2] | 0;
   i10 = i60 | i11 & 7;
   HEAP32[i62 >> 2] = i10;
   HEAP8[i61] = i10 & 255 & -9 | i11 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i14, i15, HEAP32[i2 + 80 >> 2] | 0);
   __ZN7WebCore20nextSentencePositionERKNS_15VisiblePositionE(i13, i14);
   i15 = i13 | 0;
   i11 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i10 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i11;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 + 8 | 0;
     i61 = i11 | 0;
     i62 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
     HEAP32[i61 >> 2] = i62;
     if ((i62 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i13 + 4 >> 2];
   i10 = HEAP32[i13 + 8 >> 2] | 0;
   i11 = HEAP32[i35 >> 2] & -8 | i10 & 7;
   HEAP32[i35 >> 2] = i11;
   HEAP8[i34] = i11 & 255 & -9 | i10 & 8;
   HEAP32[i36 >> 2] = HEAP32[i13 + 12 >> 2];
   i13 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i15 = i13 + 8 | 0;
     i10 = i15 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 + 8 | 0;
     i15 = i14 | 0;
     i11 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i27 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i27 = i13 + 8 | 0;
   i13 = i27 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 3:
  {
   i27 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i27 | 0) == 0) {
     i37 = 80;
    } else {
     if ((HEAP32[(HEAP32[i27 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i37 = 80;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i63 = 0;
     } else {
      i63 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i2 + 68 | 0, i63);
    }
   } while (0);
   do {
    if ((i37 | 0) == 80) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i64 = 1;
      } else {
       i64 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i2 + 56 | 0, i64);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i65 = 0;
      } else {
       i65 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i2 + 68 | 0, i65);
      break;
     }
    }
   } while (0);
   i65 = i16 | 0;
   i64 = HEAP32[i65 >> 2] | 0;
   HEAP32[i65 >> 2] = 0;
   i63 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i64;
   do {
    if ((i63 | 0) != 0) {
     i64 = i63 + 8 | 0;
     i27 = i64 | 0;
     i14 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     HEAP32[i27 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i64 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i64 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i16 + 4 >> 2];
   i63 = HEAP32[i16 + 8 >> 2] | 0;
   i64 = HEAP32[i35 >> 2] & -8 | i63 & 7;
   HEAP32[i35 >> 2] = i64;
   HEAP8[i34] = i64 & 255 & -9 | i63 & 8;
   HEAP32[i36 >> 2] = HEAP32[i16 + 12 >> 2];
   i16 = HEAP32[i65 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i65 = i16 + 8 | 0;
     i63 = i65 | 0;
     i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
     HEAP32[i63 >> 2] = i64;
     if ((i64 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
    }
   } while (0);
   do {
    if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
     if (!(__ZN7WebCore13isStartOfLineERKNS_15VisiblePositionE(i1) | 0)) {
      break;
     }
     STACKTOP = i4;
     return;
    }
   } while (0);
   __ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE(i18, i2, 0);
   __ZN7WebCore16nextLinePositionERKNS_15VisiblePositionEiNS_12EditableTypeE(i17, i1, HEAP32[i18 >> 2] | 0, 0);
   i18 = i17 | 0;
   i1 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   i16 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i1;
   do {
    if ((i16 | 0) != 0) {
     i1 = i16 + 8 | 0;
     i65 = i1 | 0;
     i64 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
     HEAP32[i65 >> 2] = i64;
     if ((i64 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i17 + 4 >> 2];
   i16 = HEAP32[i17 + 8 >> 2] | 0;
   i1 = HEAP32[i35 >> 2] & -8 | i16 & 7;
   HEAP32[i35 >> 2] = i1;
   HEAP8[i34] = i1 & 255 & -9 | i16 & 8;
   HEAP32[i36 >> 2] = HEAP32[i17 + 12 >> 2];
   i17 = HEAP32[i18 >> 2] | 0;
   if ((i17 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i18 = i17 + 8 | 0;
   i17 = i18 | 0;
   i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 4:
  {
   i18 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i18 | 0) == 0) {
     i37 = 110;
    } else {
     if ((HEAP32[(HEAP32[i18 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i37 = 110;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i66 = 0;
     } else {
      i66 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i2 + 68 | 0, i66);
    }
   } while (0);
   do {
    if ((i37 | 0) == 110) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i67 = 1;
      } else {
       i67 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i2 + 56 | 0, i67);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i68 = 0;
      } else {
       i68 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i2 + 68 | 0, i68);
      break;
     }
    }
   } while (0);
   __ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE(i21, i2, 0);
   __ZN7WebCore21nextParagraphPositionERKNS_15VisiblePositionEi(i19, i20, HEAP32[i21 >> 2] | 0);
   i21 = i19 | 0;
   i2 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i68 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i2;
   do {
    if ((i68 | 0) != 0) {
     i2 = i68 + 8 | 0;
     i32 = i2 | 0;
     i67 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     HEAP32[i32 >> 2] = i67;
     if ((i67 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i19 + 4 >> 2];
   i33 = HEAP32[i19 + 8 >> 2] | 0;
   i68 = HEAP32[i35 >> 2] & -8 | i33 & 7;
   HEAP32[i35 >> 2] = i68;
   HEAP8[i34] = i68 & 255 & -9 | i33 & 8;
   HEAP32[i36 >> 2] = HEAP32[i19 + 12 >> 2];
   i19 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 + 8 | 0;
     i36 = i21 | 0;
     i33 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
     HEAP32[i36 >> 2] = i33;
     if ((i33 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i19 = HEAP32[i20 >> 2] | 0;
   if ((i19 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i20 = i19 + 8 | 0;
   i19 = i20 | 0;
   i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 default:
  {
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore14FrameSelection20modifyMovingBackwardENS_15TextGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 416 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 144 | 0;
 i15 = i4 + 160 | 0;
 i16 = i4 + 176 | 0;
 i17 = i4 + 192 | 0;
 i18 = i4 + 208 | 0;
 i19 = i4 + 216 | 0;
 i20 = i4 + 232 | 0;
 i21 = i4 + 248 | 0;
 i22 = i4 + 256 | 0;
 i23 = i4 + 272 | 0;
 i24 = i4 + 288 | 0;
 i25 = i4 + 304 | 0;
 i26 = i4 + 320 | 0;
 i27 = i4 + 336 | 0;
 i28 = i4 + 352 | 0;
 i29 = i4 + 368 | 0;
 i30 = i4 + 384 | 0;
 i31 = i4 + 400 | 0;
 i32 = i1 | 0;
 HEAP32[i32 >> 2] = 0;
 i33 = i1 + 4 | 0;
 HEAP32[i33 >> 2] = 0;
 i34 = i1 + 8 | 0;
 i35 = i34;
 i36 = HEAP32[i35 >> 2] | 0;
 HEAP32[i35 >> 2] = i36 & -8;
 HEAP8[i34] = i36 & 255 & -16;
 i36 = i1 + 12 | 0;
 HEAP32[i36 >> 2] = 1;
 switch (i3 | 0) {
 case 0:
  {
   if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
    i3 = i6 | 0;
    i37 = HEAP32[i2 + 56 >> 2] | 0;
    HEAP32[i3 >> 2] = i37;
    if ((i37 | 0) == 0) {
     i38 = i6 + 8 | 0;
     i39 = 0;
     i40 = i38;
     i41 = i38;
    } else {
     i38 = i37 + 8 | 0;
     HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
     i38 = i6 + 8 | 0;
     i37 = i38;
     i39 = HEAP32[i37 >> 2] & -8;
     i40 = i38;
     i41 = i37;
    }
    HEAP32[i6 + 4 >> 2] = HEAP32[i2 + 60 >> 2];
    i37 = HEAP32[i2 + 64 >> 2] | 0;
    i38 = i39 | i37 & 7;
    HEAP32[i41 >> 2] = i38;
    HEAP8[i40] = i38 & 255 & -9 | i37 & 8;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i6, HEAP32[i2 + 80 >> 2] | 0);
    i6 = i5 | 0;
    i37 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    i38 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = i37;
    do {
     if ((i38 | 0) != 0) {
      i37 = i38 + 8 | 0;
      i40 = i37 | 0;
      i41 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
      HEAP32[i40 >> 2] = i41;
      if ((i41 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
     }
    } while (0);
    HEAP32[i33 >> 2] = HEAP32[i5 + 4 >> 2];
    i38 = HEAP32[i5 + 8 >> 2] | 0;
    i37 = HEAP32[i35 >> 2] & -8 | i38 & 7;
    HEAP32[i35 >> 2] = i37;
    HEAP8[i34] = i37 & 255 & -9 | i38 & 8;
    HEAP32[i36 >> 2] = HEAP32[i5 + 12 >> 2];
    i5 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i5 | 0) != 0) {
      i6 = i5 + 8 | 0;
      i38 = i6 | 0;
      i37 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
      HEAP32[i38 >> 2] = i37;
      if ((i37 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    i5 = HEAP32[i3 >> 2] | 0;
    if ((i5 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i3 = i5 + 8 | 0;
    i5 = i3 | 0;
    i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    HEAP32[i5 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
    STACKTOP = i4;
    return;
   }
   i3 = i9 | 0;
   i6 = HEAP32[i2 + 44 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) == 0) {
    i5 = i9 + 8 | 0;
    i42 = 0;
    i43 = i5;
    i44 = i5;
   } else {
    i5 = i6 + 8 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    i5 = i9 + 8 | 0;
    i6 = i5;
    i42 = HEAP32[i6 >> 2] & -8;
    i43 = i5;
    i44 = i6;
   }
   HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 48 >> 2];
   i6 = HEAP32[i2 + 52 >> 2] | 0;
   i5 = i42 | i6 & 7;
   HEAP32[i44 >> 2] = i5;
   HEAP8[i43] = i5 & 255 & -9 | i6 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, HEAP32[i2 + 80 >> 2] | 0);
   __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i7, i8, 1);
   i9 = i7 | 0;
   i6 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i5 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i6;
   do {
    if ((i5 | 0) != 0) {
     i6 = i5 + 8 | 0;
     i43 = i6 | 0;
     i44 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
     HEAP32[i43 >> 2] = i44;
     if ((i44 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i7 + 4 >> 2];
   i5 = HEAP32[i7 + 8 >> 2] | 0;
   i6 = HEAP32[i35 >> 2] & -8 | i5 & 7;
   HEAP32[i35 >> 2] = i6;
   HEAP8[i34] = i6 & 255 & -9 | i5 & 8;
   HEAP32[i36 >> 2] = HEAP32[i7 + 12 >> 2];
   i7 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i9 = i7 + 8 | 0;
     i5 = i9 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     HEAP32[i5 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   i7 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 + 8 | 0;
     i9 = i8 | 0;
     i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i6;
     if ((i6 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i3 = i7 + 8 | 0;
   i7 = i3 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 1:
  {
   i3 = i12 | 0;
   i8 = HEAP32[i2 + 44 >> 2] | 0;
   HEAP32[i3 >> 2] = i8;
   if ((i8 | 0) == 0) {
    i7 = i12 + 8 | 0;
    i45 = 0;
    i46 = i7;
    i47 = i7;
   } else {
    i7 = i8 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    i7 = i12 + 8 | 0;
    i8 = i7;
    i45 = HEAP32[i8 >> 2] & -8;
    i46 = i7;
    i47 = i8;
   }
   HEAP32[i12 + 4 >> 2] = HEAP32[i2 + 48 >> 2];
   i8 = HEAP32[i2 + 52 >> 2] | 0;
   i7 = i45 | i8 & 7;
   HEAP32[i47 >> 2] = i7;
   HEAP8[i46] = i7 & 255 & -9 | i8 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i12, HEAP32[i2 + 80 >> 2] | 0);
   __ZN7WebCore20previousWordPositionERKNS_15VisiblePositionE(i10, i11);
   i12 = i10 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i7 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i8;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 + 8 | 0;
     i46 = i8 | 0;
     i47 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     HEAP32[i46 >> 2] = i47;
     if ((i47 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i10 + 4 >> 2];
   i7 = HEAP32[i10 + 8 >> 2] | 0;
   i8 = HEAP32[i35 >> 2] & -8 | i7 & 7;
   HEAP32[i35 >> 2] = i8;
   HEAP8[i34] = i8 & 255 & -9 | i7 & 8;
   HEAP32[i36 >> 2] = HEAP32[i10 + 12 >> 2];
   i10 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i12 = i10 + 8 | 0;
     i7 = i12 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
    }
   } while (0);
   i10 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 + 8 | 0;
     i12 = i11 | 0;
     i8 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   i10 = HEAP32[i3 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i3 = i10 + 8 | 0;
   i10 = i3 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 2:
  {
   i3 = i15 | 0;
   i11 = HEAP32[i2 + 44 >> 2] | 0;
   HEAP32[i3 >> 2] = i11;
   if ((i11 | 0) == 0) {
    i10 = i15 + 8 | 0;
    i48 = 0;
    i49 = i10;
    i50 = i10;
   } else {
    i10 = i11 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    i10 = i15 + 8 | 0;
    i11 = i10;
    i48 = HEAP32[i11 >> 2] & -8;
    i49 = i10;
    i50 = i11;
   }
   HEAP32[i15 + 4 >> 2] = HEAP32[i2 + 48 >> 2];
   i11 = HEAP32[i2 + 52 >> 2] | 0;
   i10 = i48 | i11 & 7;
   HEAP32[i50 >> 2] = i10;
   HEAP8[i49] = i10 & 255 & -9 | i11 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i14, i15, HEAP32[i2 + 80 >> 2] | 0);
   __ZN7WebCore24previousSentencePositionERKNS_15VisiblePositionE(i13, i14);
   i15 = i13 | 0;
   i11 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i10 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i11;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 + 8 | 0;
     i49 = i11 | 0;
     i50 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
     HEAP32[i49 >> 2] = i50;
     if ((i50 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i13 + 4 >> 2];
   i10 = HEAP32[i13 + 8 >> 2] | 0;
   i11 = HEAP32[i35 >> 2] & -8 | i10 & 7;
   HEAP32[i35 >> 2] = i11;
   HEAP8[i34] = i11 & 255 & -9 | i10 & 8;
   HEAP32[i36 >> 2] = HEAP32[i13 + 12 >> 2];
   i13 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i15 = i13 + 8 | 0;
     i10 = i15 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 + 8 | 0;
     i15 = i14 | 0;
     i11 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i11;
     if ((i11 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[i3 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i3 = i13 + 8 | 0;
   i13 = i3 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 3:
  {
   i3 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i51 = 80;
    } else {
     if ((HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i51 = 80;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i52 = 1;
     } else {
      i52 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i2 + 56 | 0, i52);
    }
   } while (0);
   do {
    if ((i51 | 0) == 80) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i53 = 1;
      } else {
       i53 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i2 + 56 | 0, i53);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i54 = 0;
      } else {
       i54 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i2 + 68 | 0, i54);
      break;
     }
    }
   } while (0);
   __ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE(i18, i2, 0);
   __ZN7WebCore20previousLinePositionERKNS_15VisiblePositionEiNS_12EditableTypeE(i16, i17, HEAP32[i18 >> 2] | 0, 0);
   i18 = i16 | 0;
   i54 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   i53 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i54;
   do {
    if ((i53 | 0) != 0) {
     i54 = i53 + 8 | 0;
     i52 = i54 | 0;
     i3 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     HEAP32[i52 >> 2] = i3;
     if ((i3 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i16 + 4 >> 2];
   i53 = HEAP32[i16 + 8 >> 2] | 0;
   i54 = HEAP32[i35 >> 2] & -8 | i53 & 7;
   HEAP32[i35 >> 2] = i54;
   HEAP8[i34] = i54 & 255 & -9 | i53 & 8;
   HEAP32[i36 >> 2] = HEAP32[i16 + 12 >> 2];
   i16 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i18 = i16 + 8 | 0;
     i53 = i18 | 0;
     i54 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
     HEAP32[i53 >> 2] = i54;
     if ((i54 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   i16 = HEAP32[i17 >> 2] | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i17 = i16 + 8 | 0;
   i16 = i17 | 0;
   i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 4:
  {
   i17 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i51 = 104;
    } else {
     if ((HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i51 = 104;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i55 = 1;
     } else {
      i55 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i2 + 56 | 0, i55);
    }
   } while (0);
   do {
    if ((i51 | 0) == 104) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i56 = 1;
      } else {
       i56 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i2 + 56 | 0, i56);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i57 = 0;
      } else {
       i57 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i2 + 68 | 0, i57);
      break;
     }
    }
   } while (0);
   __ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE(i21, i2, 0);
   __ZN7WebCore25previousParagraphPositionERKNS_15VisiblePositionEi(i19, i20, HEAP32[i21 >> 2] | 0);
   i21 = i19 | 0;
   i57 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i56 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i57;
   do {
    if ((i56 | 0) != 0) {
     i57 = i56 + 8 | 0;
     i55 = i57 | 0;
     i17 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     HEAP32[i55 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i19 + 4 >> 2];
   i56 = HEAP32[i19 + 8 >> 2] | 0;
   i57 = HEAP32[i35 >> 2] & -8 | i56 & 7;
   HEAP32[i35 >> 2] = i57;
   HEAP8[i34] = i57 & 255 & -9 | i56 & 8;
   HEAP32[i36 >> 2] = HEAP32[i19 + 12 >> 2];
   i19 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 + 8 | 0;
     i56 = i21 | 0;
     i57 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
     HEAP32[i56 >> 2] = i57;
     if ((i57 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i19 = HEAP32[i20 >> 2] | 0;
   if ((i19 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i20 = i19 + 8 | 0;
   i19 = i20 | 0;
   i21 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i21;
   if ((i21 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 5:
  {
   i20 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i20 | 0) == 0) {
     i51 = 128;
    } else {
     if ((HEAP32[(HEAP32[i20 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i51 = 128;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i58 = 1;
     } else {
      i58 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i23, i2 + 56 | 0, i58);
    }
   } while (0);
   do {
    if ((i51 | 0) == 128) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i59 = 1;
      } else {
       i59 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i23, i2 + 56 | 0, i59);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i60 = 0;
      } else {
       i60 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i23, i2 + 68 | 0, i60);
      break;
     }
    }
   } while (0);
   __ZN7WebCore15startOfSentenceERKNS_15VisiblePositionE(i22, i23);
   i60 = i22 | 0;
   i59 = HEAP32[i60 >> 2] | 0;
   HEAP32[i60 >> 2] = 0;
   i58 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i59;
   do {
    if ((i58 | 0) != 0) {
     i59 = i58 + 8 | 0;
     i20 = i59 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     HEAP32[i20 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i59 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i59 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i22 + 4 >> 2];
   i58 = HEAP32[i22 + 8 >> 2] | 0;
   i59 = HEAP32[i35 >> 2] & -8 | i58 & 7;
   HEAP32[i35 >> 2] = i59;
   HEAP8[i34] = i59 & 255 & -9 | i58 & 8;
   HEAP32[i36 >> 2] = HEAP32[i22 + 12 >> 2];
   i22 = HEAP32[i60 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i60 = i22 + 8 | 0;
     i58 = i60 | 0;
     i59 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
     HEAP32[i58 >> 2] = i59;
     if ((i59 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i60 - 8 | 0);
    }
   } while (0);
   i22 = HEAP32[i23 >> 2] | 0;
   if ((i22 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i23 = i22 + 8 | 0;
   i22 = i23 | 0;
   i60 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i60;
   if ((i60 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 6:
  {
   i23 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i23 | 0) == 0) {
     i51 = 152;
    } else {
     if ((HEAP32[(HEAP32[i23 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i51 = 152;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i61 = 1;
     } else {
      i61 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i25, i2 + 56 | 0, i61);
    }
   } while (0);
   do {
    if ((i51 | 0) == 152) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i62 = 1;
      } else {
       i62 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i25, i2 + 56 | 0, i62);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i63 = 0;
      } else {
       i63 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i25, i2 + 68 | 0, i63);
      break;
     }
    }
   } while (0);
   __ZN7WebCore18logicalStartOfLineERKNS_15VisiblePositionE(i24, i25);
   i63 = i24 | 0;
   i62 = HEAP32[i63 >> 2] | 0;
   HEAP32[i63 >> 2] = 0;
   i61 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i62;
   do {
    if ((i61 | 0) != 0) {
     i62 = i61 + 8 | 0;
     i23 = i62 | 0;
     i60 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i60;
     if ((i60 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i62 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i62 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i24 + 4 >> 2];
   i61 = HEAP32[i24 + 8 >> 2] | 0;
   i62 = HEAP32[i35 >> 2] & -8 | i61 & 7;
   HEAP32[i35 >> 2] = i62;
   HEAP8[i34] = i62 & 255 & -9 | i61 & 8;
   HEAP32[i36 >> 2] = HEAP32[i24 + 12 >> 2];
   i24 = HEAP32[i63 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i63 = i24 + 8 | 0;
     i61 = i63 | 0;
     i62 = (HEAP32[i61 >> 2] | 0) - 1 | 0;
     HEAP32[i61 >> 2] = i62;
     if ((i62 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i63 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i63 - 8 | 0);
    }
   } while (0);
   i24 = HEAP32[i25 >> 2] | 0;
   if ((i24 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i25 = i24 + 8 | 0;
   i24 = i25 | 0;
   i63 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i63;
   if ((i63 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 7:
  {
   i25 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i25 | 0) == 0) {
     i51 = 176;
    } else {
     if ((HEAP32[(HEAP32[i25 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i51 = 176;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i64 = 1;
     } else {
      i64 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i27, i2 + 56 | 0, i64);
    }
   } while (0);
   do {
    if ((i51 | 0) == 176) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i65 = 1;
      } else {
       i65 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i27, i2 + 56 | 0, i65);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i66 = 0;
      } else {
       i66 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i27, i2 + 68 | 0, i66);
      break;
     }
    }
   } while (0);
   __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i26, i27, 1);
   i66 = i26 | 0;
   i65 = HEAP32[i66 >> 2] | 0;
   HEAP32[i66 >> 2] = 0;
   i64 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i65;
   do {
    if ((i64 | 0) != 0) {
     i65 = i64 + 8 | 0;
     i25 = i65 | 0;
     i63 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i63;
     if ((i63 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i65 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i65 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i26 + 4 >> 2];
   i64 = HEAP32[i26 + 8 >> 2] | 0;
   i65 = HEAP32[i35 >> 2] & -8 | i64 & 7;
   HEAP32[i35 >> 2] = i65;
   HEAP8[i34] = i65 & 255 & -9 | i64 & 8;
   HEAP32[i36 >> 2] = HEAP32[i26 + 12 >> 2];
   i26 = HEAP32[i66 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i66 = i26 + 8 | 0;
     i64 = i66 | 0;
     i65 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
     HEAP32[i64 >> 2] = i65;
     if ((i65 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
    }
   } while (0);
   i26 = HEAP32[i27 >> 2] | 0;
   if ((i26 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i27 = i26 + 8 | 0;
   i26 = i27 | 0;
   i66 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   HEAP32[i26 >> 2] = i66;
   if ((i66 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 8:
  {
   i27 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i27 | 0) == 0) {
     i51 = 200;
    } else {
     if ((HEAP32[(HEAP32[i27 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i51 = 200;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i67 = 1;
     } else {
      i67 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i28, i2 + 56 | 0, i67);
    }
   } while (0);
   do {
    if ((i51 | 0) == 200) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i68 = 1;
      } else {
       i68 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i28, i2 + 56 | 0, i68);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i69 = 0;
      } else {
       i69 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i28, i2 + 68 | 0, i69);
      break;
     }
    }
   } while (0);
   i69 = i28 | 0;
   i2 = HEAP32[i69 >> 2] | 0;
   HEAP32[i69 >> 2] = 0;
   i68 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i2;
   do {
    if ((i68 | 0) != 0) {
     i2 = i68 + 8 | 0;
     i51 = i2 | 0;
     i67 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     HEAP32[i51 >> 2] = i67;
     if ((i67 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
    }
   } while (0);
   HEAP32[i33 >> 2] = HEAP32[i28 + 4 >> 2];
   i68 = HEAP32[i28 + 8 >> 2] | 0;
   i2 = HEAP32[i35 >> 2] & -8 | i68 & 7;
   HEAP32[i35 >> 2] = i2;
   HEAP8[i34] = i2 & 255 & -9 | i68 & 8;
   HEAP32[i36 >> 2] = HEAP32[i28 + 12 >> 2];
   i28 = HEAP32[i69 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i69 = i28 + 8 | 0;
     i68 = i69 | 0;
     i2 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
     HEAP32[i68 >> 2] = i2;
     if ((i2 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i69 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i69 - 8 | 0);
    }
   } while (0);
   i28 = i29 | 0;
   i69 = HEAP32[i32 >> 2] | 0;
   HEAP32[i28 >> 2] = i69;
   if ((i69 | 0) != 0) {
    i2 = i69 + 8 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   }
   HEAP32[i29 + 4 >> 2] = HEAP32[i33 >> 2];
   i2 = HEAP32[i35 >> 2] | 0;
   i69 = i29 + 8 | 0;
   i68 = i69;
   i67 = HEAP32[i68 >> 2] & -8 | i2 & 7;
   HEAP32[i68 >> 2] = i67;
   HEAP8[i69] = i67 & 255 & -9 | i2 & 8;
   i2 = __ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i29, 0, 0) | 0;
   i29 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i29 | 0) != 0) {
     i28 = i29 + 8 | 0;
     i67 = i28 | 0;
     i69 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
     HEAP32[i67 >> 2] = i69;
     if ((i69 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    }
   } while (0);
   if (i2) {
    __ZN7WebCore22startOfEditableContentERKNS_15VisiblePositionE(i30, i1);
    i2 = i30 | 0;
    i29 = HEAP32[i2 >> 2] | 0;
    HEAP32[i2 >> 2] = 0;
    i28 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = i29;
    do {
     if ((i28 | 0) != 0) {
      i29 = i28 + 8 | 0;
      i69 = i29 | 0;
      i67 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
      HEAP32[i69 >> 2] = i67;
      if ((i67 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    HEAP32[i33 >> 2] = HEAP32[i30 + 4 >> 2];
    i28 = HEAP32[i30 + 8 >> 2] | 0;
    i29 = HEAP32[i35 >> 2] & -8 | i28 & 7;
    HEAP32[i35 >> 2] = i29;
    HEAP8[i34] = i29 & 255 & -9 | i28 & 8;
    HEAP32[i36 >> 2] = HEAP32[i30 + 12 >> 2];
    i30 = HEAP32[i2 >> 2] | 0;
    if ((i30 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i2 = i30 + 8 | 0;
    i30 = i2 | 0;
    i28 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    HEAP32[i30 >> 2] = i28;
    if ((i28 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
    STACKTOP = i4;
    return;
   } else {
    __ZN7WebCore15startOfDocumentERKNS_15VisiblePositionE(i31, i1);
    i1 = i31 | 0;
    i2 = HEAP32[i1 >> 2] | 0;
    HEAP32[i1 >> 2] = 0;
    i28 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = i2;
    do {
     if ((i28 | 0) != 0) {
      i2 = i28 + 8 | 0;
      i32 = i2 | 0;
      i30 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      HEAP32[i32 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
     }
    } while (0);
    HEAP32[i33 >> 2] = HEAP32[i31 + 4 >> 2];
    i33 = HEAP32[i31 + 8 >> 2] | 0;
    i28 = HEAP32[i35 >> 2] & -8 | i33 & 7;
    HEAP32[i35 >> 2] = i28;
    HEAP8[i34] = i28 & 255 & -9 | i33 & 8;
    HEAP32[i36 >> 2] = HEAP32[i31 + 12 >> 2];
    i31 = HEAP32[i1 >> 2] | 0;
    if ((i31 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i1 = i31 + 8 | 0;
    i31 = i1 | 0;
    i36 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
    HEAP32[i31 >> 2] = i36;
    if ((i36 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
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
function __ZNK7WebCore14FrameSelection13debugRendererEPNS_12RenderObjectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
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
 i18 = i4 + 112 | 0;
 i19 = i4 + 128 | 0;
 i20 = i4 + 144 | 0;
 i21 = i4 + 160 | 0;
 i22 = i4 + 168 | 0;
 i23 = i4 + 176 | 0;
 i24 = i4 + 184 | 0;
 i25 = i4 + 192 | 0;
 i26 = i4 + 200 | 0;
 i27 = i4 + 208 | 0;
 i28 = i4 + 216 | 0;
 i29 = i4 + 224 | 0;
 i30 = i4 + 232 | 0;
 i31 = i2 + 20 | 0;
 i32 = i2 + 4 | 0;
 i33 = HEAP32[i32 >> 2] | 0;
 if ((HEAP32[i33 + 12 >> 2] & 4 | 0) != 0) {
  i34 = HEAP32[_stderr >> 2] | 0;
  i35 = (i3 ? H_BASE + 128 : H_BASE + 120) | 0;
  __ZNK3WTF6String4utf8ENS_14ConversionModeE(i15, (HEAP32[i33 + 44 >> 2] | 0) + 12 | 0, 0);
  i33 = i15 | 0;
  i15 = HEAP32[i33 >> 2] | 0;
  if ((i15 | 0) == 0) {
   i36 = 0;
  } else {
   i36 = i15 + 8 | 0;
  }
  _fprintf(i34 | 0, H_BASE + 136 | 0, (i37 = STACKTOP, STACKTOP = STACKTOP + 16 | 0, HEAP32[i37 >> 2] = i35, HEAP32[i37 + 8 >> 2] = i36, i37) | 0) | 0;
  STACKTOP = i37;
  i36 = HEAP32[i33 >> 2] | 0;
  if ((i36 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i33 = i36 | 0;
  i35 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
  if ((i35 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i36);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i33 >> 2] = i35;
   STACKTOP = i4;
   return;
  }
 }
 if ((HEAP32[i31 >> 2] & 768 | 0) != 256) {
  STACKTOP = i4;
  return;
 }
 i35 = HEAP32[i2 + 44 >> 2] | 0;
 do {
  if ((HEAP32[i35 + 4 >> 2] | 0) != 0) {
   i33 = i2 + 48 | 0;
   if ((HEAP32[i33 >> 2] | 0) == 0) {
    break;
   }
   i36 = i16 | 0;
   HEAP32[i36 >> 2] = i35;
   do {
    if ((i35 | 0) == 0) {
     i38 = 0;
     i39 = 0;
    } else {
     i34 = i35 | 0;
     HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
     i34 = HEAP32[i36 >> 2] | 0;
     if ((i34 | 0) == 0) {
      i38 = 0;
      i39 = 0;
      break;
     }
     i38 = HEAP32[i34 + 4 >> 2] | 0;
     i39 = i34;
    }
   } while (0);
   do {
    if (i3) {
     if ((HEAP32[i31 >> 2] & 128 | 0) == 0) {
      i40 = HEAP32[i32 >> 2] | 0;
     } else {
      i40 = 0;
     }
     i34 = i17 | 0;
     i15 = i1 + 56 | 0;
     i41 = HEAP32[i15 >> 2] | 0;
     HEAP32[i34 >> 2] = i41;
     if ((i41 | 0) != 0) {
      i42 = i41 + 8 | 0;
      HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
     }
     i42 = i1 + 60 | 0;
     HEAP32[i17 + 4 >> 2] = HEAP32[i42 >> 2];
     i41 = i1 + 64 | 0;
     i43 = HEAP32[i41 >> 2] | 0;
     i44 = i17 + 8 | 0;
     i45 = i44;
     i46 = HEAP32[i45 >> 2] & -8 | i43 & 7;
     HEAP32[i45 >> 2] = i46;
     HEAP8[i44] = i46 & 255 & -9 | i43 & 8;
     i43 = (i40 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i17) | 0);
     i46 = HEAP32[i34 >> 2] | 0;
     do {
      if ((i46 | 0) != 0) {
       i34 = i46 + 8 | 0;
       i44 = i34 | 0;
       i45 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
       HEAP32[i44 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
      }
     } while (0);
     do {
      if (i43) {
       i46 = i18 | 0;
       i34 = HEAP32[i15 >> 2] | 0;
       HEAP32[i46 >> 2] = i34;
       if ((i34 | 0) != 0) {
        i45 = i34 + 8 | 0;
        HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
       }
       HEAP32[i18 + 4 >> 2] = HEAP32[i42 >> 2];
       i45 = HEAP32[i41 >> 2] | 0;
       i34 = i18 + 8 | 0;
       i44 = i34;
       i47 = HEAP32[i44 >> 2] & -8 | i45 & 7;
       HEAP32[i44 >> 2] = i47;
       HEAP8[i34] = i47 & 255 & -9 | i45 & 8;
       i45 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i18) | 0;
       i47 = HEAP32[i46 >> 2] | 0;
       if ((i47 | 0) == 0) {
        i48 = i45;
        break;
       }
       i46 = i47 + 8 | 0;
       i47 = i46 | 0;
       i34 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
       HEAP32[i47 >> 2] = i34;
       if ((i34 | 0) >= 1) {
        i48 = i45;
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        i48 = i45;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
       i48 = i45;
      } else {
       if ((HEAP32[i31 >> 2] & 128 | 0) == 0) {
        i49 = HEAP32[i32 >> 2] | 0;
       } else {
        i49 = 0;
       }
       i45 = i19 | 0;
       i46 = i1 + 68 | 0;
       i34 = HEAP32[i46 >> 2] | 0;
       HEAP32[i45 >> 2] = i34;
       if ((i34 | 0) != 0) {
        i47 = i34 + 8 | 0;
        HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
       }
       i47 = i1 + 72 | 0;
       HEAP32[i19 + 4 >> 2] = HEAP32[i47 >> 2];
       i34 = i1 + 76 | 0;
       i44 = HEAP32[i34 >> 2] | 0;
       i50 = i19 + 8 | 0;
       i51 = i50;
       i52 = HEAP32[i51 >> 2] & -8 | i44 & 7;
       HEAP32[i51 >> 2] = i52;
       HEAP8[i50] = i52 & 255 & -9 | i44 & 8;
       i44 = (i49 | 0) == (__ZNK7WebCore8Position13containerNodeEv(i19) | 0);
       i52 = HEAP32[i45 >> 2] | 0;
       do {
        if ((i52 | 0) != 0) {
         i45 = i52 + 8 | 0;
         i50 = i45 | 0;
         i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
         HEAP32[i50 >> 2] = i51;
         if ((i51 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
        }
       } while (0);
       if (!i44) {
        i48 = 0;
        break;
       }
       i52 = i20 | 0;
       i45 = HEAP32[i46 >> 2] | 0;
       HEAP32[i52 >> 2] = i45;
       if ((i45 | 0) != 0) {
        i51 = i45 + 8 | 0;
        HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
       }
       HEAP32[i20 + 4 >> 2] = HEAP32[i47 >> 2];
       i51 = HEAP32[i34 >> 2] | 0;
       i45 = i20 + 8 | 0;
       i50 = i45;
       i53 = HEAP32[i50 >> 2] & -8 | i51 & 7;
       HEAP32[i50 >> 2] = i53;
       HEAP8[i45] = i53 & 255 & -9 | i51 & 8;
       i51 = __ZNK7WebCore8Position28computeOffsetInContainerNodeEv(i20) | 0;
       i53 = HEAP32[i52 >> 2] | 0;
       if ((i53 | 0) == 0) {
        i48 = i51;
        break;
       }
       i52 = i53 + 8 | 0;
       i53 = i52 | 0;
       i45 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
       HEAP32[i53 >> 2] = i45;
       if ((i45 | 0) >= 1) {
        i48 = i51;
        break;
       }
       if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
        i48 = i51;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
       i48 = i51;
      }
     } while (0);
     i41 = __ZNK7WebCore19RenderTextLineBoxes8findNextEiRi(i33, i48, i21) | 0;
     __ZNK3WTF6String9substringEjj(i22, i16, HEAP32[i41 + 44 >> 2] | 0, HEAPU16[i41 + 48 >> 1] | 0);
     i41 = i22 | 0;
     i42 = HEAP32[i41 >> 2] | 0;
     HEAP32[i41 >> 2] = 0;
     i15 = HEAP32[i36 >> 2] | 0;
     HEAP32[i36 >> 2] = i42;
     do {
      if ((i15 | 0) != 0) {
       i42 = i15 | 0;
       i43 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
       if ((i43 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i15);
        break;
       } else {
        HEAP32[i42 >> 2] = i43;
        break;
       }
      }
     } while (0);
     i15 = HEAP32[i41 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i43 = i15 | 0;
       i42 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
       if ((i42 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i15);
        break;
       } else {
        HEAP32[i43 >> 2] = i42;
        break;
       }
      }
     } while (0);
     i15 = i23 | 0;
     HEAP32[i15 >> 2] = 0;
     do {
      if ((i38 | 0) < 36) {
       i41 = HEAP32[i36 >> 2] | 0;
       do {
        if ((i41 | 0) == 0) {
         HEAP32[i15 >> 2] = i41;
        } else {
         i42 = i41 | 0;
         HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
         i42 = HEAP32[i15 >> 2] | 0;
         HEAP32[i15 >> 2] = i41;
         if ((i42 | 0) == 0) {
          break;
         }
         i43 = i42 | 0;
         i51 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
         if ((i51 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i42);
          break;
         } else {
          HEAP32[i43 >> 2] = i51;
          break;
         }
        }
       } while (0);
       i54 = HEAP32[i21 >> 2] | 0;
      } else {
       i41 = HEAP32[i21 >> 2] | 0;
       if ((i41 - 18 | 0) < 0) {
        __ZNK3WTF6String9substringEjj(i24, i16, 0, 33);
        i34 = i24 | 0;
        i47 = HEAP32[i34 >> 2] | 0;
        do {
         if ((i47 | 0) == 0) {
          i55 = 0;
         } else {
          i46 = i47 | 0;
          i44 = HEAP32[i46 >> 2] | 0;
          i51 = i44 + 2 | 0;
          HEAP32[i46 >> 2] = i44 + 4;
          if ((i51 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i47);
           i55 = i47;
           break;
          } else {
           HEAP32[i46 >> 2] = i51;
           i55 = i47;
           break;
          }
         }
        } while (0);
        i47 = i10 | 0;
        HEAP32[i47 >> 2] = i55;
        i51 = (i55 | 0) == 0;
        if (!i51) {
         i46 = i55 | 0;
         HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 2;
        }
        __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i9, i10, H_BASE + 88 | 0);
        i46 = i9 | 0;
        i44 = HEAP32[i46 >> 2] | 0;
        HEAP32[i46 >> 2] = 0;
        i46 = HEAP32[i47 >> 2] | 0;
        do {
         if ((i46 | 0) != 0) {
          i47 = i46 | 0;
          i43 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
          if ((i43 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i46);
           break;
          } else {
           HEAP32[i47 >> 2] = i43;
           break;
          }
         }
        } while (0);
        if ((i44 | 0) == 0) {
         _WTFCrash();
        }
        i46 = HEAP32[i15 >> 2] | 0;
        HEAP32[i15 >> 2] = i44;
        do {
         if ((i46 | 0) != 0) {
          i43 = i46 | 0;
          i47 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
          if ((i47 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i46);
           break;
          } else {
           HEAP32[i43 >> 2] = i47;
           break;
          }
         }
        } while (0);
        do {
         if (!i51) {
          i46 = i55 | 0;
          i44 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
          if ((i44 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i55);
           break;
          } else {
           HEAP32[i46 >> 2] = i44;
           break;
          }
         }
        } while (0);
        i51 = HEAP32[i34 >> 2] | 0;
        do {
         if ((i51 | 0) != 0) {
          i44 = i51 | 0;
          i46 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
          if ((i46 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i51);
           break;
          } else {
           HEAP32[i44 >> 2] = i46;
           break;
          }
         }
        } while (0);
        i54 = HEAP32[i21 >> 2] | 0;
        break;
       }
       if ((i41 + 18 | 0) > (i38 | 0)) {
        i51 = HEAP32[i36 >> 2] | 0;
        if ((i51 | 0) == 0) {
         i56 = -33;
        } else {
         i56 = (HEAP32[i51 + 4 >> 2] | 0) - 33 | 0;
        }
        __ZNK3WTF6String9substringEjj(i26, i16, i56, 33);
        i51 = i26 | 0;
        i34 = HEAP32[i51 >> 2] | 0;
        do {
         if ((i34 | 0) == 0) {
          i57 = 0;
         } else {
          i46 = i34 | 0;
          i44 = HEAP32[i46 >> 2] | 0;
          i47 = i44 + 2 | 0;
          HEAP32[i46 >> 2] = i44 + 4;
          if ((i47 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i34);
           i57 = i34;
           break;
          } else {
           HEAP32[i46 >> 2] = i47;
           i57 = i34;
           break;
          }
         }
        } while (0);
        i34 = i6 | 0;
        HEAP32[i34 >> 2] = i57;
        i47 = (i57 | 0) == 0;
        if (!i47) {
         i46 = i57 | 0;
         HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 2;
        }
        __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i5, H_BASE + 88 | 0, i6);
        i46 = i5 | 0;
        i44 = HEAP32[i46 >> 2] | 0;
        HEAP32[i46 >> 2] = 0;
        i46 = HEAP32[i34 >> 2] | 0;
        do {
         if ((i46 | 0) != 0) {
          i34 = i46 | 0;
          i43 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
          if ((i43 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i46);
           break;
          } else {
           HEAP32[i34 >> 2] = i43;
           break;
          }
         }
        } while (0);
        if ((i44 | 0) == 0) {
         _WTFCrash();
        }
        i46 = HEAP32[i15 >> 2] | 0;
        HEAP32[i15 >> 2] = i44;
        do {
         if ((i46 | 0) != 0) {
          i43 = i46 | 0;
          i34 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
          if ((i34 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i46);
           break;
          } else {
           HEAP32[i43 >> 2] = i34;
           break;
          }
         }
        } while (0);
        do {
         if (!i47) {
          i46 = i57 | 0;
          i44 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
          if ((i44 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i57);
           break;
          } else {
           HEAP32[i46 >> 2] = i44;
           break;
          }
         }
        } while (0);
        i47 = HEAP32[i51 >> 2] | 0;
        do {
         if ((i47 | 0) != 0) {
          i44 = i47 | 0;
          i46 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
          if ((i46 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i47);
           break;
          } else {
           HEAP32[i44 >> 2] = i46;
           break;
          }
         }
        } while (0);
        i47 = HEAP32[i15 >> 2] | 0;
        if ((i47 | 0) == 0) {
         i58 = 0;
        } else {
         i58 = HEAP32[i47 + 4 >> 2] | 0;
        }
        i54 = (HEAP32[i21 >> 2] | 0) - i38 + i58 | 0;
        break;
       }
       __ZNK3WTF6String9substringEjj(i25, i16, i41 - 15 | 0, 30);
       i47 = i25 | 0;
       i51 = HEAP32[i47 >> 2] | 0;
       do {
        if ((i51 | 0) == 0) {
         i59 = 0;
         i60 = 1;
        } else {
         i46 = i51 | 0;
         i44 = HEAP32[i46 >> 2] | 0;
         i34 = i44 + 2 | 0;
         HEAP32[i46 >> 2] = i44 + 4;
         if ((i34 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i51);
          i61 = HEAP32[i46 >> 2] | 0;
         } else {
          HEAP32[i46 >> 2] = i34;
          i61 = i34;
         }
         i34 = i61 + 2 | 0;
         HEAP32[i46 >> 2] = i61 + 4;
         if ((i34 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i51);
          i59 = i51;
          i60 = 0;
          break;
         } else {
          HEAP32[i46 >> 2] = i34;
          i59 = i51;
          i60 = 0;
          break;
         }
        }
       } while (0);
       HEAP32[i8 >> 2] = H_BASE + 88;
       i51 = i8 + 4 | 0;
       HEAP32[i51 >> 2] = i59;
       i41 = (i59 | 0) == 0;
       if (!i41) {
        i34 = i59 | 0;
        HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
       }
       __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i7, i8, H_BASE + 88 | 0);
       i34 = i7 | 0;
       i46 = HEAP32[i34 >> 2] | 0;
       HEAP32[i34 >> 2] = 0;
       i34 = HEAP32[i51 >> 2] | 0;
       do {
        if ((i34 | 0) != 0) {
         i51 = i34 | 0;
         i44 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
         if ((i44 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i34);
          break;
         } else {
          HEAP32[i51 >> 2] = i44;
          break;
         }
        }
       } while (0);
       if ((i46 | 0) == 0) {
        _WTFCrash();
       }
       i34 = HEAP32[i15 >> 2] | 0;
       HEAP32[i15 >> 2] = i46;
       do {
        if ((i34 | 0) != 0) {
         i44 = i34 | 0;
         i51 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
         if ((i51 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i34);
          break;
         } else {
          HEAP32[i44 >> 2] = i51;
          break;
         }
        }
       } while (0);
       do {
        if (!i41) {
         i34 = i59 | 0;
         i46 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
         if ((i46 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i59);
          break;
         } else {
          HEAP32[i34 >> 2] = i46;
          break;
         }
        }
       } while (0);
       do {
        if (!i60) {
         i41 = i59 | 0;
         i46 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
         if ((i46 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i59);
          break;
         } else {
          HEAP32[i41 >> 2] = i46;
          break;
         }
        }
       } while (0);
       i46 = HEAP32[i47 >> 2] | 0;
       if ((i46 | 0) == 0) {
        i54 = 18;
        break;
       }
       i41 = i46 | 0;
       i34 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
       if ((i34 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i46);
        i54 = 18;
        break;
       } else {
        HEAP32[i41 >> 2] = i34;
        i54 = 18;
        break;
       }
      }
     } while (0);
     i34 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i34 | 0) != 0) {
       __ZN3WTF10StringImpl7replaceEtt(i11, i34, 10, 32);
       i41 = HEAP32[i15 >> 2] | 0;
       HEAP32[i15 >> 2] = HEAP32[i11 >> 2];
       if ((i41 | 0) == 0) {
        break;
       }
       i46 = i41 | 0;
       i51 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
       if ((i51 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i41);
        break;
       } else {
        HEAP32[i46 >> 2] = i51;
        break;
       }
      }
     } while (0);
     i34 = HEAP32[i15 >> 2] | 0;
     do {
      if ((i34 | 0) != 0) {
       __ZN3WTF10StringImpl7replaceEtt(i12, i34, 13, 32);
       i51 = HEAP32[i15 >> 2] | 0;
       HEAP32[i15 >> 2] = HEAP32[i12 >> 2];
       if ((i51 | 0) == 0) {
        break;
       }
       i46 = i51 | 0;
       i41 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
       if ((i41 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i51);
        break;
       } else {
        HEAP32[i46 >> 2] = i41;
        break;
       }
      }
     } while (0);
     i34 = HEAP32[_stderr >> 2] | 0;
     __ZNK3WTF6String4utf8ENS_14ConversionModeE(i27, i23, 0);
     i41 = i27 | 0;
     i46 = HEAP32[i41 >> 2] | 0;
     if ((i46 | 0) == 0) {
      i62 = 0;
     } else {
      i62 = i46 + 8 | 0;
     }
     i46 = HEAP32[i21 >> 2] | 0;
     _fprintf(i34 | 0, H_BASE + 56 | 0, (i37 = STACKTOP, STACKTOP = STACKTOP + 16 | 0, HEAP32[i37 >> 2] = i62, HEAP32[i37 + 8 >> 2] = i46, i37) | 0) | 0;
     STACKTOP = i37;
     i46 = HEAP32[i41 >> 2] | 0;
     do {
      if ((i46 | 0) != 0) {
       i41 = i46 | 0;
       i51 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
       if ((i51 | 0) == 0) {
        __ZN3WTF8fastFreeEPv(i46);
        break;
       } else {
        HEAP32[i41 >> 2] = i51;
        break;
       }
      }
     } while (0);
     _fwrite(H_BASE + 40 | 0, 11, 1, i34 | 0) | 0;
     if ((i54 | 0) > 0) {
      i46 = 0;
      while (1) {
       _fputc(32, i34 | 0) | 0;
       i46 = i46 + 1 | 0;
       if ((i46 | 0) >= (i54 | 0)) {
        break;
       }
      }
     }
     _fwrite(H_BASE + 32 | 0, 2, 1, i34 | 0) | 0;
     i46 = HEAP32[i15 >> 2] | 0;
     if ((i46 | 0) == 0) {
      break;
     }
     i51 = i46 | 0;
     i41 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
     if ((i41 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i46);
      break;
     } else {
      HEAP32[i51 >> 2] = i41;
      break;
     }
    } else {
     do {
      if ((i39 | 0) == 0) {
       i63 = 197;
      } else {
       if ((HEAP32[i39 + 4 >> 2] | 0) <= 36) {
        i63 = 197;
        break;
       }
       __ZNK3WTF6String9substringEjj(i28, i16, 0, 33);
       i41 = i28 | 0;
       i51 = HEAP32[i41 >> 2] | 0;
       do {
        if ((i51 | 0) == 0) {
         i64 = 0;
        } else {
         i46 = i51 | 0;
         i44 = HEAP32[i46 >> 2] | 0;
         i43 = i44 + 2 | 0;
         HEAP32[i46 >> 2] = i44 + 4;
         if ((i43 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i51);
          i64 = i51;
          break;
         } else {
          HEAP32[i46 >> 2] = i43;
          i64 = i51;
          break;
         }
        }
       } while (0);
       i51 = i14 | 0;
       HEAP32[i51 >> 2] = i64;
       i47 = (i64 | 0) == 0;
       if (!i47) {
        i43 = i64 | 0;
        HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
       }
       __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i13, i14, H_BASE + 88 | 0);
       i43 = i13 | 0;
       i46 = HEAP32[i43 >> 2] | 0;
       HEAP32[i43 >> 2] = 0;
       i43 = HEAP32[i51 >> 2] | 0;
       do {
        if ((i43 | 0) != 0) {
         i51 = i43 | 0;
         i44 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
         if ((i44 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i43);
          break;
         } else {
          HEAP32[i51 >> 2] = i44;
          break;
         }
        }
       } while (0);
       if ((i46 | 0) == 0) {
        _WTFCrash();
       }
       i43 = HEAP32[i36 >> 2] | 0;
       HEAP32[i36 >> 2] = i46;
       do {
        if ((i43 | 0) != 0) {
         i44 = i43 | 0;
         i51 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
         if ((i51 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i43);
          break;
         } else {
          HEAP32[i44 >> 2] = i51;
          break;
         }
        }
       } while (0);
       do {
        if (!i47) {
         i43 = i64 | 0;
         i46 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
         if ((i46 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i64);
          break;
         } else {
          HEAP32[i43 >> 2] = i46;
          break;
         }
        }
       } while (0);
       i47 = HEAP32[i41 >> 2] | 0;
       if ((i47 | 0) == 0) {
        break;
       }
       i46 = i47 | 0;
       i43 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
       if ((i43 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i47);
        break;
       } else {
        HEAP32[i46 >> 2] = i43;
        break;
       }
      }
     } while (0);
     do {
      if ((i63 | 0) == 197) {
       __ZNK3WTF6String9substringEjj(i29, i16, 0, 36);
       i15 = i29 | 0;
       i34 = HEAP32[i15 >> 2] | 0;
       HEAP32[i15 >> 2] = 0;
       i43 = HEAP32[i36 >> 2] | 0;
       HEAP32[i36 >> 2] = i34;
       do {
        if ((i43 | 0) != 0) {
         i34 = i43 | 0;
         i46 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
         if ((i46 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i43);
          break;
         } else {
          HEAP32[i34 >> 2] = i46;
          break;
         }
        }
       } while (0);
       i43 = HEAP32[i15 >> 2] | 0;
       if ((i43 | 0) == 0) {
        break;
       }
       i41 = i43 | 0;
       i46 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
       if ((i46 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i43);
        break;
       } else {
        HEAP32[i41 >> 2] = i46;
        break;
       }
      }
     } while (0);
     i46 = HEAP32[_stderr >> 2] | 0;
     __ZNK3WTF6String4utf8ENS_14ConversionModeE(i30, i16, 0);
     i41 = i30 | 0;
     i43 = HEAP32[i41 >> 2] | 0;
     if ((i43 | 0) == 0) {
      i65 = 0;
     } else {
      i65 = i43 + 8 | 0;
     }
     _fprintf(i46 | 0, H_BASE + 8 | 0, (i37 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i37 >> 2] = i65, i37) | 0) | 0;
     STACKTOP = i37;
     i46 = HEAP32[i41 >> 2] | 0;
     if ((i46 | 0) == 0) {
      break;
     }
     i41 = i46 | 0;
     i43 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
     if ((i43 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i46);
      break;
     } else {
      HEAP32[i41 >> 2] = i43;
      break;
     }
    }
   } while (0);
   i33 = HEAP32[i36 >> 2] | 0;
   if ((i33 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i43 = i33 | 0;
   i41 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
   if ((i41 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i43 >> 2] = i41;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i65 = (i3 ? H_BASE + 128 : H_BASE + 120) | 0;
 _fprintf(HEAP32[_stderr >> 2] | 0, H_BASE + 96 | 0, (i37 = STACKTOP, STACKTOP = STACKTOP + 8 | 0, HEAP32[i37 >> 2] = i65, i37) | 0) | 0;
 STACKTOP = i37;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection22modifyExtendingForwardENS_15TextGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 104 | 0;
 i13 = i4 + 120 | 0;
 i14 = i4 + 128 | 0;
 i15 = i4 + 144 | 0;
 i16 = i4 + 160 | 0;
 i17 = i4 + 176 | 0;
 i18 = i4 + 192 | 0;
 i19 = i4 + 208 | 0;
 i20 = i4 + 224 | 0;
 i21 = i4 + 240 | 0;
 i22 = i4 + 256 | 0;
 i23 = i4 + 272 | 0;
 i24 = i6 | 0;
 i25 = i2 + 44 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 HEAP32[i24 >> 2] = i26;
 if ((i26 | 0) == 0) {
  i27 = i6 + 8 | 0;
  i28 = 0;
  i29 = i27;
  i30 = i27;
 } else {
  i27 = i26 + 8 | 0;
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
  i27 = i6 + 8 | 0;
  i26 = i27;
  i28 = HEAP32[i26 >> 2] & -8;
  i29 = i27;
  i30 = i26;
 }
 i26 = i2 + 48 | 0;
 HEAP32[i6 + 4 >> 2] = HEAP32[i26 >> 2];
 i27 = i2 + 52 | 0;
 i31 = HEAP32[i27 >> 2] | 0;
 i32 = i28 | i31 & 7;
 HEAP32[i30 >> 2] = i32;
 HEAP8[i29] = i32 & 255 & -9 | i31 & 8;
 i31 = i2 + 80 | 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i6, HEAP32[i31 >> 2] | 0);
 i6 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i24 = i6 + 8 | 0;
   i32 = i24 | 0;
   i29 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   HEAP32[i32 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 L10 : do {
  switch (i3 | 0) {
  case 5:
   {
    i6 = HEAP32[i2 + 24 >> 2] | 0;
    do {
     if ((i6 | 0) == 0) {
      i33 = 54;
     } else {
      if ((HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
       i33 = 54;
       break;
      }
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i34 = 0;
      } else {
       i34 = HEAP32[i31 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i2 + 68 | 0, i34);
     }
    } while (0);
    do {
     if ((i33 | 0) == 54) {
      if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i35 = 1;
       } else {
        i35 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i2 + 56 | 0, i35);
       break;
      } else {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i36 = 0;
       } else {
        i36 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i2 + 68 | 0, i36);
       break;
      }
     }
    } while (0);
    __ZN7WebCore13endOfSentenceERKNS_15VisiblePositionE(i14, i15);
    i6 = i14 | 0;
    i24 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    i29 = i1 | 0;
    i32 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = i24;
    do {
     if ((i32 | 0) != 0) {
      i24 = i32 + 8 | 0;
      i29 = i24 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
    i32 = HEAP32[i14 + 8 >> 2] | 0;
    i24 = i1 + 8 | 0;
    i30 = i24;
    i29 = HEAP32[i30 >> 2] & -8 | i32 & 7;
    HEAP32[i30 >> 2] = i29;
    HEAP8[i24] = i29 & 255 & -9 | i32 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
    i32 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i32 | 0) != 0) {
      i29 = i32 + 8 | 0;
      i24 = i29 | 0;
      i30 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      HEAP32[i24 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    i32 = HEAP32[i15 >> 2] | 0;
    if ((i32 | 0) == 0) {
     break L10;
    }
    i6 = i32 + 8 | 0;
    i32 = i6 | 0;
    i29 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
    HEAP32[i32 >> 2] = i29;
    if ((i29 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
    break;
   }
  case 6:
   {
    i6 = HEAP32[i2 + 24 >> 2] | 0;
    do {
     if ((i6 | 0) == 0) {
      i33 = 78;
     } else {
      if ((HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
       i33 = 78;
       break;
      }
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i37 = 0;
      } else {
       i37 = HEAP32[i31 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i2 + 68 | 0, i37);
     }
    } while (0);
    do {
     if ((i33 | 0) == 78) {
      if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i38 = 1;
       } else {
        i38 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i2 + 56 | 0, i38);
       break;
      } else {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i39 = 0;
       } else {
        i39 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i2 + 68 | 0, i39);
       break;
      }
     }
    } while (0);
    __ZN7WebCore16logicalEndOfLineERKNS_15VisiblePositionE(i16, i17);
    i6 = i16 | 0;
    i29 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    i32 = i1 | 0;
    i30 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = i29;
    do {
     if ((i30 | 0) != 0) {
      i29 = i30 + 8 | 0;
      i32 = i29 | 0;
      i24 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      HEAP32[i32 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
    i30 = HEAP32[i16 + 8 >> 2] | 0;
    i29 = i1 + 8 | 0;
    i24 = i29;
    i32 = HEAP32[i24 >> 2] & -8 | i30 & 7;
    HEAP32[i24 >> 2] = i32;
    HEAP8[i29] = i32 & 255 & -9 | i30 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
    i30 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i30 | 0) != 0) {
      i32 = i30 + 8 | 0;
      i29 = i32 | 0;
      i24 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
     }
    } while (0);
    i30 = HEAP32[i17 >> 2] | 0;
    if ((i30 | 0) == 0) {
     break L10;
    }
    i6 = i30 + 8 | 0;
    i30 = i6 | 0;
    i32 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    HEAP32[i30 >> 2] = i32;
    if ((i32 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
    break;
   }
  case 0:
   {
    __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i7, i1, 1);
    i6 = i7 | 0;
    i32 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    i30 = i1 | 0;
    i24 = HEAP32[i30 >> 2] | 0;
    HEAP32[i30 >> 2] = i32;
    do {
     if ((i24 | 0) != 0) {
      i32 = i24 + 8 | 0;
      i30 = i32 | 0;
      i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    i32 = i1 + 8 | 0;
    i29 = i32;
    i30 = HEAP32[i29 >> 2] & -8 | i24 & 7;
    HEAP32[i29 >> 2] = i30;
    HEAP8[i32] = i30 & 255 & -9 | i24 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
    i24 = HEAP32[i6 >> 2] | 0;
    if ((i24 | 0) == 0) {
     break L10;
    }
    i30 = i24 + 8 | 0;
    i24 = i30 | 0;
    i32 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    HEAP32[i24 >> 2] = i32;
    if ((i32 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
    break;
   }
  case 2:
   {
    __ZN7WebCore20nextSentencePositionERKNS_15VisiblePositionE(i9, i1);
    i30 = i9 | 0;
    i32 = HEAP32[i30 >> 2] | 0;
    HEAP32[i30 >> 2] = 0;
    i24 = i1 | 0;
    i29 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = i32;
    do {
     if ((i29 | 0) != 0) {
      i32 = i29 + 8 | 0;
      i24 = i32 | 0;
      i28 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      HEAP32[i24 >> 2] = i28;
      if ((i28 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
    i29 = HEAP32[i9 + 8 >> 2] | 0;
    i6 = i1 + 8 | 0;
    i32 = i6;
    i28 = HEAP32[i32 >> 2] & -8 | i29 & 7;
    HEAP32[i32 >> 2] = i28;
    HEAP8[i6] = i28 & 255 & -9 | i29 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
    i29 = HEAP32[i30 >> 2] | 0;
    if ((i29 | 0) == 0) {
     break L10;
    }
    i28 = i29 + 8 | 0;
    i29 = i28 | 0;
    i6 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
    HEAP32[i29 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    break;
   }
  case 3:
   {
    __ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE(i11, i2, 3);
    __ZN7WebCore16nextLinePositionERKNS_15VisiblePositionEiNS_12EditableTypeE(i10, i1, HEAP32[i11 >> 2] | 0, 0);
    i28 = i10 | 0;
    i6 = HEAP32[i28 >> 2] | 0;
    HEAP32[i28 >> 2] = 0;
    i29 = i1 | 0;
    i32 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = i6;
    do {
     if ((i32 | 0) != 0) {
      i6 = i32 + 8 | 0;
      i29 = i6 | 0;
      i24 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
    i32 = HEAP32[i10 + 8 >> 2] | 0;
    i30 = i1 + 8 | 0;
    i6 = i30;
    i24 = HEAP32[i6 >> 2] & -8 | i32 & 7;
    HEAP32[i6 >> 2] = i24;
    HEAP8[i30] = i24 & 255 & -9 | i32 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
    i32 = HEAP32[i28 >> 2] | 0;
    if ((i32 | 0) == 0) {
     break L10;
    }
    i24 = i32 + 8 | 0;
    i32 = i24 | 0;
    i30 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
    HEAP32[i32 >> 2] = i30;
    if ((i30 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    break;
   }
  case 1:
   {
    __ZN7WebCore14FrameSelection27nextWordPositionForPlatformERKNS_15VisiblePositionE(i8, i2, i1);
    i24 = i8 | 0;
    i30 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = 0;
    i32 = i1 | 0;
    i6 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = i30;
    do {
     if ((i6 | 0) != 0) {
      i30 = i6 + 8 | 0;
      i32 = i30 | 0;
      i29 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      HEAP32[i32 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
    i6 = HEAP32[i8 + 8 >> 2] | 0;
    i28 = i1 + 8 | 0;
    i30 = i28;
    i29 = HEAP32[i30 >> 2] & -8 | i6 & 7;
    HEAP32[i30 >> 2] = i29;
    HEAP8[i28] = i29 & 255 & -9 | i6 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
    i6 = HEAP32[i24 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break L10;
    }
    i29 = i6 + 8 | 0;
    i6 = i29 | 0;
    i28 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    HEAP32[i6 >> 2] = i28;
    if ((i28 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    break;
   }
  case 4:
   {
    __ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE(i13, i2, 3);
    __ZN7WebCore21nextParagraphPositionERKNS_15VisiblePositionEi(i12, i1, HEAP32[i13 >> 2] | 0);
    i29 = i12 | 0;
    i28 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = 0;
    i6 = i1 | 0;
    i30 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = i28;
    do {
     if ((i30 | 0) != 0) {
      i28 = i30 + 8 | 0;
      i6 = i28 | 0;
      i32 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      HEAP32[i6 >> 2] = i32;
      if ((i32 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
    i30 = HEAP32[i12 + 8 >> 2] | 0;
    i24 = i1 + 8 | 0;
    i28 = i24;
    i32 = HEAP32[i28 >> 2] & -8 | i30 & 7;
    HEAP32[i28 >> 2] = i32;
    HEAP8[i24] = i32 & 255 & -9 | i30 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
    i30 = HEAP32[i29 >> 2] | 0;
    if ((i30 | 0) == 0) {
     break L10;
    }
    i32 = i30 + 8 | 0;
    i30 = i32 | 0;
    i24 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    HEAP32[i30 >> 2] = i24;
    if ((i24 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
    break;
   }
  case 8:
   {
    i32 = HEAP32[i2 + 24 >> 2] | 0;
    do {
     if ((i32 | 0) == 0) {
      i33 = 126;
     } else {
      if ((HEAP32[(HEAP32[i32 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
       i33 = 126;
       break;
      }
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i40 = 0;
      } else {
       i40 = HEAP32[i31 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i2 + 68 | 0, i40);
     }
    } while (0);
    do {
     if ((i33 | 0) == 126) {
      if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i41 = 1;
       } else {
        i41 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i2 + 56 | 0, i41);
       break;
      } else {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i42 = 0;
       } else {
        i42 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i2 + 68 | 0, i42);
       break;
      }
     }
    } while (0);
    i32 = i20 | 0;
    i29 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = 0;
    i24 = i1 | 0;
    i30 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = i29;
    do {
     if ((i30 | 0) != 0) {
      i29 = i30 + 8 | 0;
      i28 = i29 | 0;
      i6 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      HEAP32[i28 >> 2] = i6;
      if ((i6 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    i30 = i1 + 4 | 0;
    HEAP32[i30 >> 2] = HEAP32[i20 + 4 >> 2];
    i29 = HEAP32[i20 + 8 >> 2] | 0;
    i6 = i1 + 8 | 0;
    i28 = i6;
    i43 = HEAP32[i28 >> 2] & -8 | i29 & 7;
    HEAP32[i28 >> 2] = i43;
    HEAP8[i6] = i43 & 255 & -9 | i29 & 8;
    i29 = i1 + 12 | 0;
    HEAP32[i29 >> 2] = HEAP32[i20 + 12 >> 2];
    i43 = HEAP32[i32 >> 2] | 0;
    do {
     if ((i43 | 0) != 0) {
      i44 = i43 + 8 | 0;
      i45 = i44 | 0;
      i46 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
      HEAP32[i45 >> 2] = i46;
      if ((i46 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     }
    } while (0);
    i43 = i21 | 0;
    i32 = HEAP32[i24 >> 2] | 0;
    HEAP32[i43 >> 2] = i32;
    if ((i32 | 0) != 0) {
     i44 = i32 + 8 | 0;
     HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
    }
    HEAP32[i21 + 4 >> 2] = HEAP32[i30 >> 2];
    i44 = HEAP32[i28 >> 2] | 0;
    i32 = i21 + 8 | 0;
    i46 = i32;
    i45 = HEAP32[i46 >> 2] & -8 | i44 & 7;
    HEAP32[i46 >> 2] = i45;
    HEAP8[i32] = i45 & 255 & -9 | i44 & 8;
    i44 = __ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i21, 0, 0) | 0;
    i45 = HEAP32[i43 >> 2] | 0;
    do {
     if ((i45 | 0) != 0) {
      i43 = i45 + 8 | 0;
      i32 = i43 | 0;
      i46 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      HEAP32[i32 >> 2] = i46;
      if ((i46 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
     }
    } while (0);
    if (i44) {
     __ZN7WebCore20endOfEditableContentERKNS_15VisiblePositionE(i22, i1);
     i45 = i22 | 0;
     i43 = HEAP32[i45 >> 2] | 0;
     HEAP32[i45 >> 2] = 0;
     i46 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i43;
     do {
      if ((i46 | 0) != 0) {
       i43 = i46 + 8 | 0;
       i32 = i43 | 0;
       i47 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
       HEAP32[i32 >> 2] = i47;
       if ((i47 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
      }
     } while (0);
     HEAP32[i30 >> 2] = HEAP32[i22 + 4 >> 2];
     i46 = HEAP32[i22 + 8 >> 2] | 0;
     i44 = HEAP32[i28 >> 2] & -8 | i46 & 7;
     HEAP32[i28 >> 2] = i44;
     HEAP8[i6] = i44 & 255 & -9 | i46 & 8;
     HEAP32[i29 >> 2] = HEAP32[i22 + 12 >> 2];
     i46 = HEAP32[i45 >> 2] | 0;
     if ((i46 | 0) == 0) {
      break L10;
     }
     i44 = i46 + 8 | 0;
     i46 = i44 | 0;
     i43 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     HEAP32[i46 >> 2] = i43;
     if ((i43 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     break L10;
    } else {
     __ZN7WebCore13endOfDocumentERKNS_15VisiblePositionE(i23, i1);
     i44 = i23 | 0;
     i43 = HEAP32[i44 >> 2] | 0;
     HEAP32[i44 >> 2] = 0;
     i46 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i43;
     do {
      if ((i46 | 0) != 0) {
       i43 = i46 + 8 | 0;
       i47 = i43 | 0;
       i32 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
       HEAP32[i47 >> 2] = i32;
       if ((i32 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
      }
     } while (0);
     HEAP32[i30 >> 2] = HEAP32[i23 + 4 >> 2];
     i46 = HEAP32[i23 + 8 >> 2] | 0;
     i24 = HEAP32[i28 >> 2] & -8 | i46 & 7;
     HEAP32[i28 >> 2] = i24;
     HEAP8[i6] = i24 & 255 & -9 | i46 & 8;
     HEAP32[i29 >> 2] = HEAP32[i23 + 12 >> 2];
     i46 = HEAP32[i44 >> 2] | 0;
     if ((i46 | 0) == 0) {
      break L10;
     }
     i24 = i46 + 8 | 0;
     i46 = i24 | 0;
     i45 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     HEAP32[i46 >> 2] = i45;
     if ((i45 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     break L10;
    }
    break;
   }
  case 7:
   {
    i24 = HEAP32[i2 + 24 >> 2] | 0;
    do {
     if ((i24 | 0) == 0) {
      i33 = 102;
     } else {
      if ((HEAP32[(HEAP32[i24 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
       i33 = 102;
       break;
      }
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i48 = 0;
      } else {
       i48 = HEAP32[i31 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i2 + 68 | 0, i48);
     }
    } while (0);
    do {
     if ((i33 | 0) == 102) {
      if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i49 = 1;
       } else {
        i49 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i2 + 56 | 0, i49);
       break;
      } else {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i50 = 0;
       } else {
        i50 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i2 + 68 | 0, i50);
       break;
      }
     }
    } while (0);
    __ZN7WebCore14endOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i18, i19, 1);
    i24 = i18 | 0;
    i44 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = 0;
    i29 = i1 | 0;
    i6 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = i44;
    do {
     if ((i6 | 0) != 0) {
      i44 = i6 + 8 | 0;
      i29 = i44 | 0;
      i28 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i28;
      if ((i28 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
    i6 = HEAP32[i18 + 8 >> 2] | 0;
    i44 = i1 + 8 | 0;
    i28 = i44;
    i29 = HEAP32[i28 >> 2] & -8 | i6 & 7;
    HEAP32[i28 >> 2] = i29;
    HEAP8[i44] = i29 & 255 & -9 | i6 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
    i6 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i29 = i6 + 8 | 0;
      i44 = i29 | 0;
      i28 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
      HEAP32[i44 >> 2] = i28;
      if ((i28 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    i6 = HEAP32[i19 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break L10;
    }
    i24 = i6 + 8 | 0;
    i6 = i24 | 0;
    i29 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    HEAP32[i6 >> 2] = i29;
    if ((i29 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    break;
   }
  default:
   {}
  }
 } while (0);
 i19 = i5 | 0;
 i18 = HEAP32[i25 >> 2] | 0;
 HEAP32[i19 >> 2] = i18;
 if ((i18 | 0) == 0) {
  i25 = i5 + 8 | 0;
  i51 = 0;
  i52 = i25;
  i53 = i25;
 } else {
  i25 = i18 + 8 | 0;
  HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
  i25 = i5 + 8 | 0;
  i18 = i25;
  i51 = HEAP32[i18 >> 2] & -8;
  i52 = i25;
  i53 = i18;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i26 >> 2];
 i26 = HEAP32[i27 >> 2] | 0;
 i27 = i26 & 7 | i51;
 HEAP32[i53 >> 2] = i27;
 HEAP8[i52] = i27 & 255 & -9 | i26 & 8;
 i26 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i5) | 0;
 i5 = HEAP32[i19 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i54 = (i26 | 0) == 1;
  __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i54);
  STACKTOP = i4;
  return;
 }
 i19 = i5 + 8 | 0;
 i5 = i19 | 0;
 i27 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i27;
 if ((i27 | 0) >= 1) {
  i54 = (i26 | 0) == 1;
  __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i54);
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
  i54 = (i26 | 0) == 1;
  __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i54);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
 i54 = (i26 | 0) == 1;
 __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i54);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection23modifyExtendingBackwardENS_15TextGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 104 | 0;
 i13 = i4 + 120 | 0;
 i14 = i4 + 128 | 0;
 i15 = i4 + 144 | 0;
 i16 = i4 + 160 | 0;
 i17 = i4 + 176 | 0;
 i18 = i4 + 192 | 0;
 i19 = i4 + 208 | 0;
 i20 = i4 + 224 | 0;
 i21 = i4 + 240 | 0;
 i22 = i4 + 256 | 0;
 i23 = i4 + 272 | 0;
 i24 = i6 | 0;
 i25 = i2 + 44 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 HEAP32[i24 >> 2] = i26;
 if ((i26 | 0) == 0) {
  i27 = i6 + 8 | 0;
  i28 = 0;
  i29 = i27;
  i30 = i27;
 } else {
  i27 = i26 + 8 | 0;
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
  i27 = i6 + 8 | 0;
  i26 = i27;
  i28 = HEAP32[i26 >> 2] & -8;
  i29 = i27;
  i30 = i26;
 }
 i26 = i2 + 48 | 0;
 HEAP32[i6 + 4 >> 2] = HEAP32[i26 >> 2];
 i27 = i2 + 52 | 0;
 i31 = HEAP32[i27 >> 2] | 0;
 i32 = i28 | i31 & 7;
 HEAP32[i30 >> 2] = i32;
 HEAP8[i29] = i32 & 255 & -9 | i31 & 8;
 i31 = i2 + 80 | 0;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i6, HEAP32[i31 >> 2] | 0);
 i6 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i24 = i6 + 8 | 0;
   i32 = i24 | 0;
   i29 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   HEAP32[i32 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 L10 : do {
  switch (i3 | 0) {
  case 3:
   {
    __ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE(i11, i2, 3);
    __ZN7WebCore20previousLinePositionERKNS_15VisiblePositionEiNS_12EditableTypeE(i10, i1, HEAP32[i11 >> 2] | 0, 0);
    i6 = i10 | 0;
    i24 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    i29 = i1 | 0;
    i32 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = i24;
    do {
     if ((i32 | 0) != 0) {
      i24 = i32 + 8 | 0;
      i29 = i24 | 0;
      i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
    i32 = HEAP32[i10 + 8 >> 2] | 0;
    i24 = i1 + 8 | 0;
    i30 = i24;
    i29 = HEAP32[i30 >> 2] & -8 | i32 & 7;
    HEAP32[i30 >> 2] = i29;
    HEAP8[i24] = i29 & 255 & -9 | i32 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
    i32 = HEAP32[i6 >> 2] | 0;
    if ((i32 | 0) == 0) {
     break L10;
    }
    i29 = i32 + 8 | 0;
    i32 = i29 | 0;
    i24 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
    HEAP32[i32 >> 2] = i24;
    if ((i24 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
    break;
   }
  case 1:
   {
    __ZN7WebCore20previousWordPositionERKNS_15VisiblePositionE(i8, i1);
    i29 = i8 | 0;
    i24 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = 0;
    i32 = i1 | 0;
    i30 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = i24;
    do {
     if ((i30 | 0) != 0) {
      i24 = i30 + 8 | 0;
      i32 = i24 | 0;
      i28 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
      HEAP32[i32 >> 2] = i28;
      if ((i28 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
    i30 = HEAP32[i8 + 8 >> 2] | 0;
    i6 = i1 + 8 | 0;
    i24 = i6;
    i28 = HEAP32[i24 >> 2] & -8 | i30 & 7;
    HEAP32[i24 >> 2] = i28;
    HEAP8[i6] = i28 & 255 & -9 | i30 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
    i30 = HEAP32[i29 >> 2] | 0;
    if ((i30 | 0) == 0) {
     break L10;
    }
    i28 = i30 + 8 | 0;
    i30 = i28 | 0;
    i6 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    HEAP32[i30 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    break;
   }
  case 6:
   {
    i28 = HEAP32[i2 + 24 >> 2] | 0;
    do {
     if ((i28 | 0) == 0) {
      i33 = 78;
     } else {
      if ((HEAP32[(HEAP32[i28 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
       i33 = 78;
       break;
      }
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i34 = 1;
      } else {
       i34 = HEAP32[i31 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i2 + 56 | 0, i34);
     }
    } while (0);
    do {
     if ((i33 | 0) == 78) {
      if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i35 = 1;
       } else {
        i35 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i2 + 56 | 0, i35);
       break;
      } else {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i36 = 0;
       } else {
        i36 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i17, i2 + 68 | 0, i36);
       break;
      }
     }
    } while (0);
    __ZN7WebCore18logicalStartOfLineERKNS_15VisiblePositionE(i16, i17);
    i28 = i16 | 0;
    i29 = HEAP32[i28 >> 2] | 0;
    HEAP32[i28 >> 2] = 0;
    i6 = i1 | 0;
    i30 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = i29;
    do {
     if ((i30 | 0) != 0) {
      i29 = i30 + 8 | 0;
      i6 = i29 | 0;
      i24 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      HEAP32[i6 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
    i30 = HEAP32[i16 + 8 >> 2] | 0;
    i29 = i1 + 8 | 0;
    i24 = i29;
    i6 = HEAP32[i24 >> 2] & -8 | i30 & 7;
    HEAP32[i24 >> 2] = i6;
    HEAP8[i29] = i6 & 255 & -9 | i30 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
    i30 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i30 | 0) != 0) {
      i6 = i30 + 8 | 0;
      i29 = i6 | 0;
      i24 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
      HEAP32[i29 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    i30 = HEAP32[i17 >> 2] | 0;
    if ((i30 | 0) == 0) {
     break L10;
    }
    i28 = i30 + 8 | 0;
    i30 = i28 | 0;
    i6 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    HEAP32[i30 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
    break;
   }
  case 0:
   {
    __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i7, i1, 1);
    i28 = i7 | 0;
    i6 = HEAP32[i28 >> 2] | 0;
    HEAP32[i28 >> 2] = 0;
    i30 = i1 | 0;
    i24 = HEAP32[i30 >> 2] | 0;
    HEAP32[i30 >> 2] = i6;
    do {
     if ((i24 | 0) != 0) {
      i6 = i24 + 8 | 0;
      i30 = i6 | 0;
      i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    i6 = i1 + 8 | 0;
    i29 = i6;
    i30 = HEAP32[i29 >> 2] & -8 | i24 & 7;
    HEAP32[i29 >> 2] = i30;
    HEAP8[i6] = i30 & 255 & -9 | i24 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
    i24 = HEAP32[i28 >> 2] | 0;
    if ((i24 | 0) == 0) {
     break L10;
    }
    i30 = i24 + 8 | 0;
    i24 = i30 | 0;
    i6 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    HEAP32[i24 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
    break;
   }
  case 5:
   {
    i30 = HEAP32[i2 + 24 >> 2] | 0;
    do {
     if ((i30 | 0) == 0) {
      i33 = 54;
     } else {
      if ((HEAP32[(HEAP32[i30 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
       i33 = 54;
       break;
      }
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i37 = 1;
      } else {
       i37 = HEAP32[i31 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i2 + 56 | 0, i37);
     }
    } while (0);
    do {
     if ((i33 | 0) == 54) {
      if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i38 = 1;
       } else {
        i38 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i2 + 56 | 0, i38);
       break;
      } else {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i39 = 0;
       } else {
        i39 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i2 + 68 | 0, i39);
       break;
      }
     }
    } while (0);
    __ZN7WebCore15startOfSentenceERKNS_15VisiblePositionE(i14, i15);
    i30 = i14 | 0;
    i28 = HEAP32[i30 >> 2] | 0;
    HEAP32[i30 >> 2] = 0;
    i6 = i1 | 0;
    i24 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = i28;
    do {
     if ((i24 | 0) != 0) {
      i28 = i24 + 8 | 0;
      i6 = i28 | 0;
      i29 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      HEAP32[i6 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
    i24 = HEAP32[i14 + 8 >> 2] | 0;
    i28 = i1 + 8 | 0;
    i29 = i28;
    i6 = HEAP32[i29 >> 2] & -8 | i24 & 7;
    HEAP32[i29 >> 2] = i6;
    HEAP8[i28] = i6 & 255 & -9 | i24 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
    i24 = HEAP32[i30 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i6 = i24 + 8 | 0;
      i28 = i6 | 0;
      i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      HEAP32[i28 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    i24 = HEAP32[i15 >> 2] | 0;
    if ((i24 | 0) == 0) {
     break L10;
    }
    i30 = i24 + 8 | 0;
    i24 = i30 | 0;
    i6 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    HEAP32[i24 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
    break;
   }
  case 2:
   {
    __ZN7WebCore24previousSentencePositionERKNS_15VisiblePositionE(i9, i1);
    i30 = i9 | 0;
    i6 = HEAP32[i30 >> 2] | 0;
    HEAP32[i30 >> 2] = 0;
    i24 = i1 | 0;
    i29 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = i6;
    do {
     if ((i29 | 0) != 0) {
      i6 = i29 + 8 | 0;
      i24 = i6 | 0;
      i28 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      HEAP32[i24 >> 2] = i28;
      if ((i28 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
    i29 = HEAP32[i9 + 8 >> 2] | 0;
    i6 = i1 + 8 | 0;
    i28 = i6;
    i24 = HEAP32[i28 >> 2] & -8 | i29 & 7;
    HEAP32[i28 >> 2] = i24;
    HEAP8[i6] = i24 & 255 & -9 | i29 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
    i29 = HEAP32[i30 >> 2] | 0;
    if ((i29 | 0) == 0) {
     break L10;
    }
    i24 = i29 + 8 | 0;
    i29 = i24 | 0;
    i6 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
    HEAP32[i29 >> 2] = i6;
    if ((i6 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    break;
   }
  case 8:
   {
    i24 = HEAP32[i2 + 24 >> 2] | 0;
    do {
     if ((i24 | 0) == 0) {
      i33 = 126;
     } else {
      if ((HEAP32[(HEAP32[i24 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
       i33 = 126;
       break;
      }
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i40 = 1;
      } else {
       i40 = HEAP32[i31 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i2 + 56 | 0, i40);
     }
    } while (0);
    do {
     if ((i33 | 0) == 126) {
      if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i41 = 1;
       } else {
        i41 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i2 + 56 | 0, i41);
       break;
      } else {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i42 = 0;
       } else {
        i42 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i2 + 68 | 0, i42);
       break;
      }
     }
    } while (0);
    i24 = i20 | 0;
    i30 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = 0;
    i6 = i1 | 0;
    i29 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = i30;
    do {
     if ((i29 | 0) != 0) {
      i30 = i29 + 8 | 0;
      i28 = i30 | 0;
      i32 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      HEAP32[i28 >> 2] = i32;
      if ((i32 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
     }
    } while (0);
    i29 = i1 + 4 | 0;
    HEAP32[i29 >> 2] = HEAP32[i20 + 4 >> 2];
    i30 = HEAP32[i20 + 8 >> 2] | 0;
    i32 = i1 + 8 | 0;
    i28 = i32;
    i43 = HEAP32[i28 >> 2] & -8 | i30 & 7;
    HEAP32[i28 >> 2] = i43;
    HEAP8[i32] = i43 & 255 & -9 | i30 & 8;
    i30 = i1 + 12 | 0;
    HEAP32[i30 >> 2] = HEAP32[i20 + 12 >> 2];
    i43 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i43 | 0) != 0) {
      i44 = i43 + 8 | 0;
      i45 = i44 | 0;
      i46 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
      HEAP32[i45 >> 2] = i46;
      if ((i46 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     }
    } while (0);
    i43 = i21 | 0;
    i24 = HEAP32[i6 >> 2] | 0;
    HEAP32[i43 >> 2] = i24;
    if ((i24 | 0) != 0) {
     i44 = i24 + 8 | 0;
     HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
    }
    HEAP32[i21 + 4 >> 2] = HEAP32[i29 >> 2];
    i44 = HEAP32[i28 >> 2] | 0;
    i24 = i21 + 8 | 0;
    i46 = i24;
    i45 = HEAP32[i46 >> 2] & -8 | i44 & 7;
    HEAP32[i46 >> 2] = i45;
    HEAP8[i24] = i45 & 255 & -9 | i44 & 8;
    i44 = __ZN7WebCore18isEditablePositionERKNS_8PositionENS_12EditableTypeENS_12EUpdateStyleE(i21, 0, 0) | 0;
    i45 = HEAP32[i43 >> 2] | 0;
    do {
     if ((i45 | 0) != 0) {
      i43 = i45 + 8 | 0;
      i24 = i43 | 0;
      i46 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      HEAP32[i24 >> 2] = i46;
      if ((i46 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
     }
    } while (0);
    if (i44) {
     __ZN7WebCore22startOfEditableContentERKNS_15VisiblePositionE(i22, i1);
     i45 = i22 | 0;
     i43 = HEAP32[i45 >> 2] | 0;
     HEAP32[i45 >> 2] = 0;
     i46 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = i43;
     do {
      if ((i46 | 0) != 0) {
       i43 = i46 + 8 | 0;
       i24 = i43 | 0;
       i47 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       HEAP32[i24 >> 2] = i47;
       if ((i47 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
      }
     } while (0);
     HEAP32[i29 >> 2] = HEAP32[i22 + 4 >> 2];
     i46 = HEAP32[i22 + 8 >> 2] | 0;
     i44 = HEAP32[i28 >> 2] & -8 | i46 & 7;
     HEAP32[i28 >> 2] = i44;
     HEAP8[i32] = i44 & 255 & -9 | i46 & 8;
     HEAP32[i30 >> 2] = HEAP32[i22 + 12 >> 2];
     i46 = HEAP32[i45 >> 2] | 0;
     if ((i46 | 0) == 0) {
      break L10;
     }
     i44 = i46 + 8 | 0;
     i46 = i44 | 0;
     i43 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     HEAP32[i46 >> 2] = i43;
     if ((i43 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     break L10;
    } else {
     __ZN7WebCore15startOfDocumentERKNS_15VisiblePositionE(i23, i1);
     i44 = i23 | 0;
     i43 = HEAP32[i44 >> 2] | 0;
     HEAP32[i44 >> 2] = 0;
     i46 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = i43;
     do {
      if ((i46 | 0) != 0) {
       i43 = i46 + 8 | 0;
       i47 = i43 | 0;
       i24 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
       HEAP32[i47 >> 2] = i24;
       if ((i24 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
      }
     } while (0);
     HEAP32[i29 >> 2] = HEAP32[i23 + 4 >> 2];
     i46 = HEAP32[i23 + 8 >> 2] | 0;
     i6 = HEAP32[i28 >> 2] & -8 | i46 & 7;
     HEAP32[i28 >> 2] = i6;
     HEAP8[i32] = i6 & 255 & -9 | i46 & 8;
     HEAP32[i30 >> 2] = HEAP32[i23 + 12 >> 2];
     i46 = HEAP32[i44 >> 2] | 0;
     if ((i46 | 0) == 0) {
      break L10;
     }
     i6 = i46 + 8 | 0;
     i46 = i6 | 0;
     i45 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
     HEAP32[i46 >> 2] = i45;
     if ((i45 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     break L10;
    }
    break;
   }
  case 4:
   {
    __ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE(i13, i2, 3);
    __ZN7WebCore25previousParagraphPositionERKNS_15VisiblePositionEi(i12, i1, HEAP32[i13 >> 2] | 0);
    i6 = i12 | 0;
    i45 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    i46 = i1 | 0;
    i43 = HEAP32[i46 >> 2] | 0;
    HEAP32[i46 >> 2] = i45;
    do {
     if ((i43 | 0) != 0) {
      i45 = i43 + 8 | 0;
      i46 = i45 | 0;
      i24 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      HEAP32[i46 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
    i43 = HEAP32[i12 + 8 >> 2] | 0;
    i44 = i1 + 8 | 0;
    i30 = i44;
    i32 = HEAP32[i30 >> 2] & -8 | i43 & 7;
    HEAP32[i30 >> 2] = i32;
    HEAP8[i44] = i32 & 255 & -9 | i43 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
    i43 = HEAP32[i6 >> 2] | 0;
    if ((i43 | 0) == 0) {
     break L10;
    }
    i32 = i43 + 8 | 0;
    i43 = i32 | 0;
    i44 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
    HEAP32[i43 >> 2] = i44;
    if ((i44 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
    break;
   }
  case 7:
   {
    i32 = HEAP32[i2 + 24 >> 2] | 0;
    do {
     if ((i32 | 0) == 0) {
      i33 = 102;
     } else {
      if ((HEAP32[(HEAP32[i32 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
       i33 = 102;
       break;
      }
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i48 = 1;
      } else {
       i48 = HEAP32[i31 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i2 + 56 | 0, i48);
     }
    } while (0);
    do {
     if ((i33 | 0) == 102) {
      if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i49 = 1;
       } else {
        i49 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i2 + 56 | 0, i49);
       break;
      } else {
       if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
        i50 = 0;
       } else {
        i50 = HEAP32[i31 >> 2] | 0;
       }
       __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i2 + 68 | 0, i50);
       break;
      }
     }
    } while (0);
    __ZN7WebCore16startOfParagraphERKNS_15VisiblePositionENS_27EditingBoundaryCrossingRuleE(i18, i19, 1);
    i32 = i18 | 0;
    i6 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = 0;
    i44 = i1 | 0;
    i43 = HEAP32[i44 >> 2] | 0;
    HEAP32[i44 >> 2] = i6;
    do {
     if ((i43 | 0) != 0) {
      i6 = i43 + 8 | 0;
      i44 = i6 | 0;
      i30 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
      HEAP32[i44 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
    i43 = HEAP32[i18 + 8 >> 2] | 0;
    i6 = i1 + 8 | 0;
    i30 = i6;
    i44 = HEAP32[i30 >> 2] & -8 | i43 & 7;
    HEAP32[i30 >> 2] = i44;
    HEAP8[i6] = i44 & 255 & -9 | i43 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
    i43 = HEAP32[i32 >> 2] | 0;
    do {
     if ((i43 | 0) != 0) {
      i44 = i43 + 8 | 0;
      i6 = i44 | 0;
      i30 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      HEAP32[i6 >> 2] = i30;
      if ((i30 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
     }
    } while (0);
    i43 = HEAP32[i19 >> 2] | 0;
    if ((i43 | 0) == 0) {
     break L10;
    }
    i32 = i43 + 8 | 0;
    i43 = i32 | 0;
    i44 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
    HEAP32[i43 >> 2] = i44;
    if ((i44 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
    break;
   }
  default:
   {}
  }
 } while (0);
 i19 = i5 | 0;
 i18 = HEAP32[i25 >> 2] | 0;
 HEAP32[i19 >> 2] = i18;
 if ((i18 | 0) == 0) {
  i25 = i5 + 8 | 0;
  i51 = 0;
  i52 = i25;
  i53 = i25;
 } else {
  i25 = i18 + 8 | 0;
  HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
  i25 = i5 + 8 | 0;
  i18 = i25;
  i51 = HEAP32[i18 >> 2] & -8;
  i52 = i25;
  i53 = i18;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i26 >> 2];
 i26 = HEAP32[i27 >> 2] | 0;
 i27 = i26 & 7 | i51;
 HEAP32[i53 >> 2] = i27;
 HEAP8[i52] = i27 & 255 & -9 | i26 & 8;
 i26 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i5) | 0;
 i5 = HEAP32[i19 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i54 = (i26 | 0) != 1;
  __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i54);
  STACKTOP = i4;
  return;
 }
 i19 = i5 + 8 | 0;
 i5 = i19 | 0;
 i27 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i27;
 if ((i27 | 0) >= 1) {
  i54 = (i26 | 0) != 1;
  __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i54);
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
  i54 = (i26 | 0) != 1;
  __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i54);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
 i54 = (i26 | 0) != 1;
 __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i54);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 520 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 224 | 0;
 i11 = i6 + 240 | 0;
 i12 = i6 + 256 | 0;
 i13 = i6 + 272 | 0;
 i14 = i6 + 288 | 0;
 i15 = i6 + 304 | 0;
 i16 = i6 + 320 | 0;
 i17 = i6 + 336 | 0;
 i18 = i6 + 352 | 0;
 i19 = i6 + 368 | 0;
 i20 = i6 + 384 | 0;
 i21 = i6 + 400 | 0;
 i22 = i6 + 408 | 0;
 i23 = i6 + 416 | 0;
 i24 = i6 + 480 | 0;
 i25 = i6 + 496 | 0;
 i26 = i6 + 512 | 0;
 i27 = (i5 | 0) == 1;
 L1 : do {
  if (i27) {
   __ZN7WebCore14FrameSelectionC2EPNS_5FrameE(i9, 0);
   i28 = i1 + 32 | 0;
   __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i9, i28, 6, 0, 0);
   __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE(i9, i2, i3, i4, 0) | 0;
   L3 : do {
    if (__ZNK7WebCore6Editor21shouldChangeSelectionERKNS_16VisibleSelectionES3_NS_9EAffinityEb(HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 464 >> 2] | 0, i28, i9 + 32 | 0, HEAP32[i9 + 80 >> 2] | 0, 0) | 0) {
     do {
      if ((HEAP32[i9 + 84 >> 2] | 0) == 2) {
       if ((HEAP32[i1 + 84 >> 2] | 0) != 1) {
        break;
       }
       if (!(__ZN7WebCore14FrameSelection19dispatchSelectStartEv(i1) | 0)) {
        break L3;
       }
      }
     } while (0);
     __ZN7WebCore14FrameSelectionD2Ev(i9);
     i29 = i28;
     break L1;
    }
   } while (0);
   __ZN7WebCore14FrameSelectionD2Ev(i9);
   i30 = 0;
   STACKTOP = i6;
   return i30 | 0;
  } else {
   i29 = i1 + 32 | 0;
  }
 } while (0);
 __ZN7WebCore14FrameSelection14willBeModifiedENS0_11EAlterationENS_18SelectionDirectionE(i1, i2, i3);
 i9 = i1 + 84 | 0;
 i28 = HEAP32[i9 >> 2] | 0;
 i31 = i10 | 0;
 i32 = HEAP32[i1 + 56 >> 2] | 0;
 HEAP32[i31 >> 2] = i32;
 if ((i32 | 0) != 0) {
  i33 = i32 + 8 | 0;
  HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
 }
 HEAP32[i10 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
 i33 = HEAP32[i1 + 64 >> 2] | 0;
 i32 = i10 + 8 | 0;
 i34 = i32;
 i35 = HEAP32[i34 >> 2] & -8 | i33 & 7;
 HEAP32[i34 >> 2] = i35;
 HEAP8[i32] = i35 & 255 & -9 | i33 & 8;
 i33 = i11 | 0;
 HEAP32[i33 >> 2] = 0;
 i35 = i11 + 4 | 0;
 HEAP32[i35 >> 2] = 0;
 i32 = i11 + 8 | 0;
 i34 = i32;
 i36 = HEAP32[i34 >> 2] | 0;
 HEAP32[i34 >> 2] = i36 & -8;
 HEAP8[i32] = i36 & 255 & -16;
 i36 = i11 + 12 | 0;
 HEAP32[i36 >> 2] = 1;
 do {
  if ((i3 | 0) == 0) {
   if ((i2 | 0) == 1) {
    __ZN7WebCore14FrameSelection22modifyExtendingForwardENS_15TextGranularityE(i14, i1, i4);
    i37 = i14 | 0;
    i38 = HEAP32[i37 >> 2] | 0;
    HEAP32[i37 >> 2] = 0;
    i39 = HEAP32[i33 >> 2] | 0;
    HEAP32[i33 >> 2] = i38;
    do {
     if ((i39 | 0) != 0) {
      i38 = i39 + 8 | 0;
      i40 = i38 | 0;
      i41 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
      HEAP32[i40 >> 2] = i41;
      if ((i41 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
     }
    } while (0);
    HEAP32[i35 >> 2] = HEAP32[i14 + 4 >> 2];
    i39 = HEAP32[i14 + 8 >> 2] | 0;
    i38 = HEAP32[i34 >> 2] & -8 | i39 & 7;
    HEAP32[i34 >> 2] = i38;
    HEAP8[i32] = i38 & 255 & -9 | i39 & 8;
    HEAP32[i36 >> 2] = HEAP32[i14 + 12 >> 2];
    i39 = HEAP32[i37 >> 2] | 0;
    if ((i39 | 0) == 0) {
     break;
    }
    i38 = i39 + 8 | 0;
    i39 = i38 | 0;
    i41 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    HEAP32[i39 >> 2] = i41;
    if ((i41 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    break;
   } else {
    __ZN7WebCore14FrameSelection19modifyMovingForwardENS_15TextGranularityE(i15, i1, i4);
    i38 = i15 | 0;
    i41 = HEAP32[i38 >> 2] | 0;
    HEAP32[i38 >> 2] = 0;
    i39 = HEAP32[i33 >> 2] | 0;
    HEAP32[i33 >> 2] = i41;
    do {
     if ((i39 | 0) != 0) {
      i41 = i39 + 8 | 0;
      i40 = i41 | 0;
      i42 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
      HEAP32[i40 >> 2] = i42;
      if ((i42 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
     }
    } while (0);
    HEAP32[i35 >> 2] = HEAP32[i15 + 4 >> 2];
    i39 = HEAP32[i15 + 8 >> 2] | 0;
    i37 = HEAP32[i34 >> 2] & -8 | i39 & 7;
    HEAP32[i34 >> 2] = i37;
    HEAP8[i32] = i37 & 255 & -9 | i39 & 8;
    HEAP32[i36 >> 2] = HEAP32[i15 + 12 >> 2];
    i39 = HEAP32[i38 >> 2] | 0;
    if ((i39 | 0) == 0) {
     break;
    }
    i37 = i39 + 8 | 0;
    i39 = i37 | 0;
    i41 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    HEAP32[i39 >> 2] = i41;
    if ((i41 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
    break;
   }
  } else if ((i3 | 0) == 2) {
   if ((i2 | 0) == 0) {
    __ZN7WebCore14FrameSelection17modifyMovingRightENS_15TextGranularityE(i12, i1, i4);
    i37 = i12 | 0;
    i41 = HEAP32[i37 >> 2] | 0;
    HEAP32[i37 >> 2] = 0;
    i39 = HEAP32[i33 >> 2] | 0;
    HEAP32[i33 >> 2] = i41;
    do {
     if ((i39 | 0) != 0) {
      i41 = i39 + 8 | 0;
      i42 = i41 | 0;
      i40 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
      HEAP32[i42 >> 2] = i40;
      if ((i40 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
     }
    } while (0);
    HEAP32[i35 >> 2] = HEAP32[i12 + 4 >> 2];
    i39 = HEAP32[i12 + 8 >> 2] | 0;
    i38 = HEAP32[i34 >> 2] & -8 | i39 & 7;
    HEAP32[i34 >> 2] = i38;
    HEAP8[i32] = i38 & 255 & -9 | i39 & 8;
    HEAP32[i36 >> 2] = HEAP32[i12 + 12 >> 2];
    i39 = HEAP32[i37 >> 2] | 0;
    if ((i39 | 0) == 0) {
     break;
    }
    i38 = i39 + 8 | 0;
    i39 = i38 | 0;
    i41 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    HEAP32[i39 >> 2] = i41;
    if ((i41 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    break;
   } else {
    __ZN7WebCore14FrameSelection20modifyExtendingRightENS_15TextGranularityE(i13, i1, i4);
    i38 = i13 | 0;
    i41 = HEAP32[i38 >> 2] | 0;
    HEAP32[i38 >> 2] = 0;
    i39 = HEAP32[i33 >> 2] | 0;
    HEAP32[i33 >> 2] = i41;
    do {
     if ((i39 | 0) != 0) {
      i41 = i39 + 8 | 0;
      i40 = i41 | 0;
      i42 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
      HEAP32[i40 >> 2] = i42;
      if ((i42 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
     }
    } while (0);
    HEAP32[i35 >> 2] = HEAP32[i13 + 4 >> 2];
    i39 = HEAP32[i13 + 8 >> 2] | 0;
    i37 = HEAP32[i34 >> 2] & -8 | i39 & 7;
    HEAP32[i34 >> 2] = i37;
    HEAP8[i32] = i37 & 255 & -9 | i39 & 8;
    HEAP32[i36 >> 2] = HEAP32[i13 + 12 >> 2];
    i39 = HEAP32[i38 >> 2] | 0;
    if ((i39 | 0) == 0) {
     break;
    }
    i37 = i39 + 8 | 0;
    i39 = i37 | 0;
    i41 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    HEAP32[i39 >> 2] = i41;
    if ((i41 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
    break;
   }
  } else if ((i3 | 0) == 3) {
   if ((i2 | 0) == 0) {
    __ZN7WebCore14FrameSelection16modifyMovingLeftENS_15TextGranularityE(i16, i1, i4);
    i37 = i16 | 0;
    i41 = HEAP32[i37 >> 2] | 0;
    HEAP32[i37 >> 2] = 0;
    i39 = HEAP32[i33 >> 2] | 0;
    HEAP32[i33 >> 2] = i41;
    do {
     if ((i39 | 0) != 0) {
      i41 = i39 + 8 | 0;
      i42 = i41 | 0;
      i40 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
      HEAP32[i42 >> 2] = i40;
      if ((i40 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
     }
    } while (0);
    HEAP32[i35 >> 2] = HEAP32[i16 + 4 >> 2];
    i39 = HEAP32[i16 + 8 >> 2] | 0;
    i38 = HEAP32[i34 >> 2] & -8 | i39 & 7;
    HEAP32[i34 >> 2] = i38;
    HEAP8[i32] = i38 & 255 & -9 | i39 & 8;
    HEAP32[i36 >> 2] = HEAP32[i16 + 12 >> 2];
    i39 = HEAP32[i37 >> 2] | 0;
    if ((i39 | 0) == 0) {
     break;
    }
    i38 = i39 + 8 | 0;
    i39 = i38 | 0;
    i41 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    HEAP32[i39 >> 2] = i41;
    if ((i41 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    break;
   } else {
    __ZN7WebCore14FrameSelection19modifyExtendingLeftENS_15TextGranularityE(i17, i1, i4);
    i38 = i17 | 0;
    i41 = HEAP32[i38 >> 2] | 0;
    HEAP32[i38 >> 2] = 0;
    i39 = HEAP32[i33 >> 2] | 0;
    HEAP32[i33 >> 2] = i41;
    do {
     if ((i39 | 0) != 0) {
      i41 = i39 + 8 | 0;
      i40 = i41 | 0;
      i42 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
      HEAP32[i40 >> 2] = i42;
      if ((i42 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
     }
    } while (0);
    HEAP32[i35 >> 2] = HEAP32[i17 + 4 >> 2];
    i39 = HEAP32[i17 + 8 >> 2] | 0;
    i37 = HEAP32[i34 >> 2] & -8 | i39 & 7;
    HEAP32[i34 >> 2] = i37;
    HEAP8[i32] = i37 & 255 & -9 | i39 & 8;
    HEAP32[i36 >> 2] = HEAP32[i17 + 12 >> 2];
    i39 = HEAP32[i38 >> 2] | 0;
    if ((i39 | 0) == 0) {
     break;
    }
    i37 = i39 + 8 | 0;
    i39 = i37 | 0;
    i41 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    HEAP32[i39 >> 2] = i41;
    if ((i41 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
    break;
   }
  } else if ((i3 | 0) == 1) {
   if ((i2 | 0) == 1) {
    __ZN7WebCore14FrameSelection23modifyExtendingBackwardENS_15TextGranularityE(i18, i1, i4);
    i37 = i18 | 0;
    i41 = HEAP32[i37 >> 2] | 0;
    HEAP32[i37 >> 2] = 0;
    i39 = HEAP32[i33 >> 2] | 0;
    HEAP32[i33 >> 2] = i41;
    do {
     if ((i39 | 0) != 0) {
      i41 = i39 + 8 | 0;
      i42 = i41 | 0;
      i40 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
      HEAP32[i42 >> 2] = i40;
      if ((i40 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
     }
    } while (0);
    HEAP32[i35 >> 2] = HEAP32[i18 + 4 >> 2];
    i39 = HEAP32[i18 + 8 >> 2] | 0;
    i38 = HEAP32[i34 >> 2] & -8 | i39 & 7;
    HEAP32[i34 >> 2] = i38;
    HEAP8[i32] = i38 & 255 & -9 | i39 & 8;
    HEAP32[i36 >> 2] = HEAP32[i18 + 12 >> 2];
    i39 = HEAP32[i37 >> 2] | 0;
    if ((i39 | 0) == 0) {
     break;
    }
    i38 = i39 + 8 | 0;
    i39 = i38 | 0;
    i41 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    HEAP32[i39 >> 2] = i41;
    if ((i41 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
    break;
   } else {
    __ZN7WebCore14FrameSelection20modifyMovingBackwardENS_15TextGranularityE(i19, i1, i4);
    i38 = i19 | 0;
    i41 = HEAP32[i38 >> 2] | 0;
    HEAP32[i38 >> 2] = 0;
    i39 = HEAP32[i33 >> 2] | 0;
    HEAP32[i33 >> 2] = i41;
    do {
     if ((i39 | 0) != 0) {
      i41 = i39 + 8 | 0;
      i40 = i41 | 0;
      i42 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
      HEAP32[i40 >> 2] = i42;
      if ((i42 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i41 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i41 - 8 | 0);
     }
    } while (0);
    HEAP32[i35 >> 2] = HEAP32[i19 + 4 >> 2];
    i39 = HEAP32[i19 + 8 >> 2] | 0;
    i37 = HEAP32[i34 >> 2] & -8 | i39 & 7;
    HEAP32[i34 >> 2] = i37;
    HEAP8[i32] = i37 & 255 & -9 | i39 & 8;
    HEAP32[i36 >> 2] = HEAP32[i19 + 12 >> 2];
    i39 = HEAP32[i38 >> 2] | 0;
    if ((i39 | 0) == 0) {
     break;
    }
    i37 = i39 + 8 | 0;
    i39 = i37 | 0;
    i41 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    HEAP32[i39 >> 2] = i41;
    if ((i41 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i33 >> 2] | 0) == 0) {
   i43 = 0;
  } else {
   i19 = i1 + 24 | 0;
   L100 : do {
    if (__ZN7WebCore26isSpatialNavigationEnabledEPKNS_5FrameE(HEAP32[i19 >> 2] | 0) | 0) {
     if (!((i28 | 0) != 2 & (i2 | 0) == 0)) {
      i44 = 88;
      break;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i20, i10, 1);
     i18 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i11, i20) | 0;
     i17 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i17 | 0) != 0) {
       i16 = i17 + 8 | 0;
       i13 = i16 | 0;
       i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
       HEAP32[i13 >> 2] = i12;
       if ((i12 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
       if (i18) {
        i45 = 0;
        break L100;
       } else {
        i44 = 88;
        break L100;
       }
      }
     } while (0);
     if (i18) {
      i45 = 0;
     } else {
      i44 = 88;
     }
    } else {
     i44 = 88;
    }
   } while (0);
   if ((i44 | 0) == 88) {
    __ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE(i21, i1, 0);
    i38 = HEAP32[i19 >> 2] | 0;
    if ((i38 | 0) == 0) {
     i46 = 1;
    } else {
     __ZNK7WebCore6Editor8behaviorEv(i7, HEAP32[i38 + 464 >> 2] | 0);
     i46 = (HEAP32[i7 >> 2] | 0) != 0;
    }
    i38 = i1 + 88 | 0;
    HEAP8[i38] = HEAP8[i38] & -3 | ((i46 | (i2 | 0) == 1) & 1) << 1;
    L113 : do {
     if ((i2 | 0) == 0) {
      __ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE(i1, i11, i5, 0);
     } else if ((i2 | 0) == 1) {
      do {
       if ((HEAP32[i9 >> 2] | 0) == 1) {
        i44 = 112;
       } else {
        if (!((i4 | 0) == 4 | (i4 | 0) == 3 | (i4 | 0) == 1)) {
         i44 = 112;
         break;
        }
        i17 = HEAP32[i19 >> 2] | 0;
        if ((i17 | 0) == 0) {
         break;
        }
        __ZNK7WebCore6Editor8behaviorEv(i22, HEAP32[i17 + 464 >> 2] | 0);
        if ((HEAP32[i22 >> 2] | 0) != 0) {
         i44 = 112;
         break;
        }
        __ZN7WebCore16VisibleSelectionC2ERKS0_(i23, i29);
        __ZN7WebCore16VisibleSelection9setExtentERKNS_15VisiblePositionE(i23, i11);
        do {
         if ((HEAP8[i38] & 1) != 0 ^ (HEAP8[i23 + 56 | 0] & 1) != 0) {
          i17 = i25 | 0;
          i16 = HEAP32[i29 >> 2] | 0;
          HEAP32[i17 >> 2] = i16;
          if ((i16 | 0) != 0) {
           i12 = i16 + 8 | 0;
           HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
          }
          HEAP32[i25 + 4 >> 2] = HEAP32[i1 + 36 >> 2];
          i12 = HEAP32[i1 + 40 >> 2] | 0;
          i16 = i25 + 8 | 0;
          i13 = i16;
          i15 = HEAP32[i13 >> 2] & -8 | i12 & 7;
          HEAP32[i13 >> 2] = i15;
          HEAP8[i16] = i15 & 255 & -9 | i12 & 8;
          __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i24, i25, 1);
          i12 = i24 | 0;
          i15 = HEAP32[i12 >> 2] | 0;
          HEAP32[i12 >> 2] = 0;
          i16 = HEAP32[i33 >> 2] | 0;
          HEAP32[i33 >> 2] = i15;
          do {
           if ((i16 | 0) != 0) {
            i15 = i16 + 8 | 0;
            i13 = i15 | 0;
            i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
            HEAP32[i13 >> 2] = i14;
            if ((i14 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
           }
          } while (0);
          HEAP32[i35 >> 2] = HEAP32[i24 + 4 >> 2];
          i16 = HEAP32[i24 + 8 >> 2] | 0;
          i15 = HEAP32[i34 >> 2] & -8 | i16 & 7;
          HEAP32[i34 >> 2] = i15;
          HEAP8[i32] = i15 & 255 & -9 | i16 & 8;
          HEAP32[i36 >> 2] = HEAP32[i24 + 12 >> 2];
          i16 = HEAP32[i12 >> 2] | 0;
          do {
           if ((i16 | 0) != 0) {
            i15 = i16 + 8 | 0;
            i14 = i15 | 0;
            i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
            HEAP32[i14 >> 2] = i13;
            if ((i13 | 0) >= 1) {
             break;
            }
            if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
             break;
            }
            __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
           }
          } while (0);
          i16 = HEAP32[i17 >> 2] | 0;
          if ((i16 | 0) == 0) {
           break;
          }
          i12 = i16 + 8 | 0;
          i16 = i12 | 0;
          i15 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
          HEAP32[i16 >> 2] = i15;
          if ((i15 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
         }
        } while (0);
        __ZN7WebCore16VisibleSelectionD2Ev(i23);
        i44 = 112;
       }
      } while (0);
      do {
       if ((i44 | 0) == 112) {
        i18 = HEAP32[i19 >> 2] | 0;
        if ((i18 | 0) == 0) {
         break;
        }
        __ZNK7WebCore6Editor8behaviorEv(i26, HEAP32[i18 + 464 >> 2] | 0);
        if ((HEAP32[i26 >> 2] | 0) != 0) {
         break;
        }
        if ((HEAP32[i9 >> 2] | 0) == 1) {
         break;
        }
        if ((i4 - 6 | 0) >>> 0 >= 3 >>> 0) {
         break;
        }
        i18 = i8 | 0;
        i12 = HEAP32[i1 + 44 >> 2] | 0;
        HEAP32[i18 >> 2] = i12;
        if ((i12 | 0) == 0) {
         i15 = i8 + 8 | 0;
         i47 = 0;
         i48 = i15;
         i49 = i15;
        } else {
         i15 = i12 + 8 | 0;
         HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
         i15 = i8 + 8 | 0;
         i12 = i15;
         i47 = HEAP32[i12 >> 2] & -8;
         i48 = i15;
         i49 = i12;
        }
        HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 48 >> 2];
        i12 = HEAP32[i1 + 52 >> 2] | 0;
        i15 = i12 & 7 | i47;
        HEAP32[i49 >> 2] = i15;
        HEAP8[i48] = i15 & 255 & -9 | i12 & 8;
        i12 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i8) | 0;
        i15 = HEAP32[i18 >> 2] | 0;
        do {
         if ((i15 | 0) != 0) {
          i18 = i15 + 8 | 0;
          i16 = i18 | 0;
          i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
          HEAP32[i16 >> 2] = i13;
          if ((i13 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
         }
        } while (0);
        do {
         if ((i3 | 0) != 0) {
          if ((i12 | 0) == 1 & (i3 | 0) == 2) {
           break;
          }
          if ((i12 | 0) == 0 & (i3 | 0) == 3) {
           break;
          }
          if ((HEAP8[i38] & 1) == 0) {
           __ZN7WebCore14FrameSelection9setExtentERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i11, i5);
           break L113;
          } else {
           __ZN7WebCore14FrameSelection7setBaseERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i11, i5);
           break L113;
          }
         }
        } while (0);
        if ((HEAP8[i38] & 1) == 0) {
         __ZN7WebCore14FrameSelection7setBaseERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i11, i5);
         break L113;
        } else {
         __ZN7WebCore14FrameSelection9setExtentERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i11, i5);
         break L113;
        }
       }
      } while (0);
      __ZN7WebCore14FrameSelection9setExtentERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i11, i5);
     }
    } while (0);
    if ((i4 - 3 | 0) >>> 0 < 2 >>> 0) {
     HEAP32[i1 + 28 >> 2] = HEAP32[i21 >> 2];
    }
    if (i27) {
     HEAP32[i1 + 108 >> 2] = 0;
    }
    HEAP8[i1 + 16 | 0] = 1;
    i45 = 1;
   }
   i38 = HEAP32[i33 >> 2] | 0;
   if ((i38 | 0) == 0) {
    i43 = i45;
    break;
   }
   i19 = i38 + 8 | 0;
   i38 = i19 | 0;
   i12 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
   HEAP32[i38 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    i43 = i45;
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    i43 = i45;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   i43 = i45;
  }
 } while (0);
 i45 = HEAP32[i31 >> 2] | 0;
 if ((i45 | 0) == 0) {
  i30 = i43;
  STACKTOP = i6;
  return i30 | 0;
 }
 i31 = i45 + 8 | 0;
 i45 = i31 | 0;
 i33 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
 HEAP32[i45 >> 2] = i33;
 if ((i33 | 0) >= 1) {
  i30 = i43;
  STACKTOP = i6;
  return i30 | 0;
 }
 if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
  i30 = i43;
  STACKTOP = i6;
  return i30 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
 i30 = i43;
 STACKTOP = i6;
 return i30 | 0;
}
function __ZN7WebCore14FrameSelection34setNonDirectionalSelectionIfNeededERKNS_16VisibleSelectionENS_15TextGranularityENS0_23EndPointsAdjustmentModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 440 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 48 | 0;
 i9 = i5 + 72 | 0;
 i10 = i5 + 88 | 0;
 i11 = i5 + 104 | 0;
 i12 = i5 + 128 | 0;
 i13 = i5 + 144 | 0;
 i14 = i5 + 160 | 0;
 i15 = i5 + 184 | 0;
 i16 = i5 + 200 | 0;
 i17 = i5 + 216 | 0;
 i18 = i5 + 240 | 0;
 i19 = i5 + 256 | 0;
 i20 = i5 + 272 | 0;
 i21 = i5 + 280 | 0;
 i22 = i5 + 344 | 0;
 i23 = i5 + 360 | 0;
 i24 = i5 + 376 | 0;
 i25 = i5 + 392 | 0;
 i26 = i5 + 408 | 0;
 i27 = i5 + 424 | 0;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i21, i2);
 i2 = i1 + 24 | 0;
 i28 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i28 | 0) == 0) {
   i29 = 2;
  } else {
   __ZNK7WebCore6Editor8behaviorEv(i20, HEAP32[i28 + 464 >> 2] | 0);
   if ((HEAP32[i20 >> 2] | 0) != 0) {
    i29 = 2;
    break;
   }
   i29 = HEAP8[i21 + 56 | 0] & 2;
  }
 } while (0);
 i20 = i1 + 92 | 0;
 i28 = i20 | 0;
 i30 = HEAP32[i28 >> 2] | 0;
 if ((i30 | 0) == 0) {
  if ((HEAP32[i21 + 52 >> 2] | 0) == 2) {
   i31 = HEAP8[i21 + 56 | 0] & 1 ^ 1;
  } else {
   i31 = HEAP32[i21 + 48 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i22, i21 | 0, i31);
  i32 = i22 | 0;
 } else {
  i31 = i22 | 0;
  HEAP32[i31 >> 2] = i30;
  i33 = i30 + 8 | 0;
  HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
  HEAP32[i22 + 4 >> 2] = HEAP32[i1 + 96 >> 2];
  i33 = HEAP32[i1 + 100 >> 2] | 0;
  i30 = i22 + 8 | 0;
  i34 = i30;
  i35 = HEAP32[i34 >> 2] & -8 | i33 & 7;
  HEAP32[i34 >> 2] = i35;
  HEAP8[i30] = i35 & 255 & -9 | i33 & 8;
  HEAP32[i22 + 12 >> 2] = HEAP32[i1 + 104 >> 2];
  i32 = i31;
 }
 i31 = i23 | 0;
 i33 = HEAP32[i32 >> 2] | 0;
 HEAP32[i31 >> 2] = i33;
 if ((i33 | 0) != 0) {
  i35 = i33 + 8 | 0;
  HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
 }
 i35 = i23 + 4 | 0;
 i33 = i22 + 4 | 0;
 HEAP32[i35 >> 2] = HEAP32[i33 >> 2];
 i30 = i22 + 8 | 0;
 i34 = HEAP32[i30 >> 2] | 0;
 i36 = i23 + 8 | 0;
 i37 = i36;
 i38 = HEAP32[i37 >> 2] & -8 | i34 & 7;
 HEAP32[i37 >> 2] = i38;
 HEAP8[i36] = i38 & 255 & -9 | i34 & 8;
 i34 = i23 + 12 | 0;
 i38 = i22 + 12 | 0;
 HEAP32[i34 >> 2] = HEAP32[i38 >> 2];
 if ((HEAP32[i21 + 52 >> 2] | 0) == 2) {
  i39 = HEAP8[i21 + 56 | 0] & 1;
 } else {
  i39 = HEAP32[i21 + 48 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i24, i21 + 12 | 0, i39);
 i39 = i25 | 0;
 i40 = i24 | 0;
 i41 = HEAP32[i40 >> 2] | 0;
 HEAP32[i39 >> 2] = i41;
 if ((i41 | 0) != 0) {
  i42 = i41 + 8 | 0;
  HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
 }
 i42 = i25 + 4 | 0;
 HEAP32[i42 >> 2] = HEAP32[i24 + 4 >> 2];
 i41 = HEAP32[i24 + 8 >> 2] | 0;
 i43 = i25 + 8 | 0;
 i44 = i43;
 i45 = HEAP32[i44 >> 2] & -8 | i41 & 7;
 HEAP32[i44 >> 2] = i45;
 HEAP8[i43] = i45 & 255 & -9 | i41 & 8;
 i41 = i25 + 12 | 0;
 HEAP32[i41 >> 2] = HEAP32[i24 + 12 >> 2];
 L23 : do {
  if ((i4 | 0) == 0) {
   __ZN7WebCore16RenderedPositionC1ERKNS_15VisiblePositionE(i6, i23);
   __ZN7WebCore16RenderedPositionC1ERKNS_15VisiblePositionE(i7, i25);
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    break;
   }
   if (__ZNK7WebCore16RenderedPosition12isEquivalentERKS0_(i6, i7) | 0) {
    break;
   }
   if (__ZNK7WebCore16RenderedPosition23atLeftBoundaryOfBidiRunENS0_20ShouldMatchBidiLevelEh(i6, 1, 0) | 0) {
    if (__ZNK7WebCore16RenderedPosition24atRightBoundaryOfBidiRunENS0_20ShouldMatchBidiLevelEh(i7, 0, __ZNK7WebCore16RenderedPosition16bidiLevelOnRightEv(i6) | 0) | 0) {
     break;
    }
    __ZN7WebCore16RenderedPosition21leftBoundaryOfBidiRunEh(i8, i7, __ZNK7WebCore16RenderedPosition16bidiLevelOnRightEv(i6) | 0);
    if (!(__ZNK7WebCore16RenderedPosition12isEquivalentERKS0_(i6, i8) | 0)) {
     break;
    }
    __ZNK7WebCore16RenderedPosition31positionAtLeftBoundaryOfBiDiRunEv(i10, i6);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i10, 1);
    i45 = i9 | 0;
    i46 = HEAP32[i45 >> 2] | 0;
    HEAP32[i45 >> 2] = 0;
    i47 = HEAP32[i31 >> 2] | 0;
    HEAP32[i31 >> 2] = i46;
    do {
     if ((i47 | 0) != 0) {
      i46 = i47 + 8 | 0;
      i48 = i46 | 0;
      i49 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
      HEAP32[i48 >> 2] = i49;
      if ((i49 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    HEAP32[i35 >> 2] = HEAP32[i9 + 4 >> 2];
    i47 = HEAP32[i9 + 8 >> 2] | 0;
    i46 = HEAP32[i37 >> 2] & -8 | i47 & 7;
    HEAP32[i37 >> 2] = i46;
    HEAP8[i36] = i46 & 255 & -9 | i47 & 8;
    HEAP32[i34 >> 2] = HEAP32[i9 + 12 >> 2];
    i47 = HEAP32[i45 >> 2] | 0;
    do {
     if ((i47 | 0) != 0) {
      i46 = i47 + 8 | 0;
      i49 = i46 | 0;
      i48 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
      HEAP32[i49 >> 2] = i48;
      if ((i48 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    i47 = HEAP32[i10 >> 2] | 0;
    if ((i47 | 0) == 0) {
     break;
    }
    i45 = i47 + 8 | 0;
    i47 = i45 | 0;
    i46 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
    HEAP32[i47 >> 2] = i46;
    if ((i46 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
    break;
   }
   if (__ZNK7WebCore16RenderedPosition24atRightBoundaryOfBidiRunENS0_20ShouldMatchBidiLevelEh(i6, 1, 0) | 0) {
    if (__ZNK7WebCore16RenderedPosition23atLeftBoundaryOfBidiRunENS0_20ShouldMatchBidiLevelEh(i7, 0, __ZNK7WebCore16RenderedPosition15bidiLevelOnLeftEv(i6) | 0) | 0) {
     break;
    }
    __ZN7WebCore16RenderedPosition22rightBoundaryOfBidiRunEh(i11, i7, __ZNK7WebCore16RenderedPosition15bidiLevelOnLeftEv(i6) | 0);
    if (!(__ZNK7WebCore16RenderedPosition12isEquivalentERKS0_(i6, i11) | 0)) {
     break;
    }
    __ZNK7WebCore16RenderedPosition32positionAtRightBoundaryOfBiDiRunEv(i13, i6);
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i12, i13, 1);
    i45 = i12 | 0;
    i46 = HEAP32[i45 >> 2] | 0;
    HEAP32[i45 >> 2] = 0;
    i47 = HEAP32[i31 >> 2] | 0;
    HEAP32[i31 >> 2] = i46;
    do {
     if ((i47 | 0) != 0) {
      i46 = i47 + 8 | 0;
      i48 = i46 | 0;
      i49 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
      HEAP32[i48 >> 2] = i49;
      if ((i49 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    HEAP32[i35 >> 2] = HEAP32[i12 + 4 >> 2];
    i47 = HEAP32[i12 + 8 >> 2] | 0;
    i46 = HEAP32[i37 >> 2] & -8 | i47 & 7;
    HEAP32[i37 >> 2] = i46;
    HEAP8[i36] = i46 & 255 & -9 | i47 & 8;
    HEAP32[i34 >> 2] = HEAP32[i12 + 12 >> 2];
    i47 = HEAP32[i45 >> 2] | 0;
    do {
     if ((i47 | 0) != 0) {
      i46 = i47 + 8 | 0;
      i49 = i46 | 0;
      i48 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
      HEAP32[i49 >> 2] = i48;
      if ((i48 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
     }
    } while (0);
    i47 = HEAP32[i13 >> 2] | 0;
    if ((i47 | 0) == 0) {
     break;
    }
    i45 = i47 + 8 | 0;
    i47 = i45 | 0;
    i46 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
    HEAP32[i47 >> 2] = i46;
    if ((i46 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
    break;
   }
   do {
    if (__ZNK7WebCore16RenderedPosition23atLeftBoundaryOfBidiRunENS0_20ShouldMatchBidiLevelEh(i7, 1, 0) | 0) {
     __ZN7WebCore16RenderedPosition21leftBoundaryOfBidiRunEh(i14, i6, __ZNK7WebCore16RenderedPosition16bidiLevelOnRightEv(i7) | 0);
     if (!(__ZNK7WebCore16RenderedPosition12isEquivalentERKS0_(i7, i14) | 0)) {
      break;
     }
     __ZNK7WebCore16RenderedPosition31positionAtLeftBoundaryOfBiDiRunEv(i16, i7);
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i16, 1);
     i45 = i15 | 0;
     i46 = HEAP32[i45 >> 2] | 0;
     HEAP32[i45 >> 2] = 0;
     i47 = HEAP32[i39 >> 2] | 0;
     HEAP32[i39 >> 2] = i46;
     do {
      if ((i47 | 0) != 0) {
       i46 = i47 + 8 | 0;
       i48 = i46 | 0;
       i49 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
       HEAP32[i48 >> 2] = i49;
       if ((i49 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     HEAP32[i42 >> 2] = HEAP32[i15 + 4 >> 2];
     i47 = HEAP32[i15 + 8 >> 2] | 0;
     i46 = HEAP32[i44 >> 2] & -8 | i47 & 7;
     HEAP32[i44 >> 2] = i46;
     HEAP8[i43] = i46 & 255 & -9 | i47 & 8;
     HEAP32[i41 >> 2] = HEAP32[i15 + 12 >> 2];
     i47 = HEAP32[i45 >> 2] | 0;
     do {
      if ((i47 | 0) != 0) {
       i46 = i47 + 8 | 0;
       i49 = i46 | 0;
       i48 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
       HEAP32[i49 >> 2] = i48;
       if ((i48 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
      }
     } while (0);
     i47 = HEAP32[i16 >> 2] | 0;
     if ((i47 | 0) == 0) {
      break L23;
     }
     i45 = i47 + 8 | 0;
     i47 = i45 | 0;
     i46 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
     HEAP32[i47 >> 2] = i46;
     if ((i46 | 0) >= 1) {
      break L23;
     }
     if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
      break L23;
     }
     __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
     break L23;
    }
   } while (0);
   if (!(__ZNK7WebCore16RenderedPosition24atRightBoundaryOfBidiRunENS0_20ShouldMatchBidiLevelEh(i7, 1, 0) | 0)) {
    break;
   }
   __ZN7WebCore16RenderedPosition22rightBoundaryOfBidiRunEh(i17, i6, __ZNK7WebCore16RenderedPosition15bidiLevelOnLeftEv(i7) | 0);
   if (!(__ZNK7WebCore16RenderedPosition12isEquivalentERKS0_(i7, i17) | 0)) {
    break;
   }
   __ZNK7WebCore16RenderedPosition32positionAtRightBoundaryOfBiDiRunEv(i19, i7);
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i18, i19, 1);
   i45 = i18 | 0;
   i46 = HEAP32[i45 >> 2] | 0;
   HEAP32[i45 >> 2] = 0;
   i47 = HEAP32[i39 >> 2] | 0;
   HEAP32[i39 >> 2] = i46;
   do {
    if ((i47 | 0) != 0) {
     i46 = i47 + 8 | 0;
     i48 = i46 | 0;
     i49 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
     HEAP32[i48 >> 2] = i49;
     if ((i49 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    }
   } while (0);
   HEAP32[i42 >> 2] = HEAP32[i18 + 4 >> 2];
   i47 = HEAP32[i18 + 8 >> 2] | 0;
   i46 = HEAP32[i44 >> 2] & -8 | i47 & 7;
   HEAP32[i44 >> 2] = i46;
   HEAP8[i43] = i46 & 255 & -9 | i47 & 8;
   HEAP32[i41 >> 2] = HEAP32[i18 + 12 >> 2];
   i47 = HEAP32[i45 >> 2] | 0;
   do {
    if ((i47 | 0) != 0) {
     i46 = i47 + 8 | 0;
     i49 = i46 | 0;
     i48 = (HEAP32[i49 >> 2] | 0) - 1 | 0;
     HEAP32[i49 >> 2] = i48;
     if ((i48 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i46 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i46 - 8 | 0);
    }
   } while (0);
   i47 = HEAP32[i19 >> 2] | 0;
   if ((i47 | 0) == 0) {
    break;
   }
   i45 = i47 + 8 | 0;
   i47 = i45 | 0;
   i46 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
   HEAP32[i47 >> 2] = i46;
   if ((i46 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
  }
 } while (0);
 do {
  if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i23, i22) | 0) {
   if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i25, i24) | 0)) {
    i50 = 81;
    break;
   }
   if ((HEAP32[i28 >> 2] | 0) == 0) {
    break;
   }
   i19 = i26 | 0;
   i18 = HEAP32[i1 + 32 >> 2] | 0;
   HEAP32[i19 >> 2] = i18;
   if ((i18 | 0) != 0) {
    i41 = i18 + 8 | 0;
    HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
   }
   i41 = i26 + 4 | 0;
   HEAP32[i41 >> 2] = HEAP32[i1 + 36 >> 2];
   i18 = HEAP32[i1 + 40 >> 2] | 0;
   i43 = i26 + 8 | 0;
   i44 = i43;
   i42 = HEAP32[i44 >> 2] & -8 | i18 & 7;
   HEAP32[i44 >> 2] = i42;
   HEAP8[i43] = i42 & 255 & -9 | i18 & 8;
   i18 = i27 | 0;
   i42 = HEAP32[i21 >> 2] | 0;
   HEAP32[i18 >> 2] = i42;
   if ((i42 | 0) == 0) {
    i51 = 0;
   } else {
    i7 = i42 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    i51 = HEAP32[i18 >> 2] | 0;
   }
   i7 = i27 + 4 | 0;
   HEAP32[i7 >> 2] = HEAP32[i21 + 4 >> 2];
   i42 = HEAP32[i21 + 8 >> 2] | 0;
   i17 = i27 + 8 | 0;
   i6 = i17;
   i16 = HEAP32[i6 >> 2] & -8 | i42 & 7;
   HEAP32[i6 >> 2] = i16;
   i15 = i16 & 255 & -9 | i42 & 8;
   HEAP8[i17] = i15;
   if ((HEAP32[i19 >> 2] | 0) == (i51 | 0)) {
    do {
     if ((HEAP8[i43] & 8) == 0) {
      i42 = HEAP32[i44 >> 2] & 7;
      if (!((i42 | 0) == 2 | (i42 | 0) == 4)) {
       i50 = 96;
       break;
      }
      i42 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i26) | 0;
      i52 = i42;
      i53 = HEAP8[i17] | 0;
     } else {
      i50 = 96;
     }
    } while (0);
    if ((i50 | 0) == 96) {
     i52 = HEAP32[i41 >> 2] | 0;
     i53 = i15;
    }
    do {
     if ((i53 & 8) == 0) {
      i17 = HEAP32[i6 >> 2] & 7;
      if (!((i17 | 0) == 2 | (i17 | 0) == 4)) {
       i50 = 100;
       break;
      }
      i54 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i27) | 0;
     } else {
      i50 = 100;
     }
    } while (0);
    if ((i50 | 0) == 100) {
     i54 = HEAP32[i7 >> 2] | 0;
    }
    if ((i52 | 0) == (i54 | 0)) {
     i55 = ((HEAP32[i6 >> 2] ^ HEAP32[i44 >> 2]) & 7 | 0) == 0;
    } else {
     i55 = 0;
    }
    i56 = i55;
    i57 = HEAP32[i18 >> 2] | 0;
   } else {
    i56 = 0;
    i57 = i51;
   }
   do {
    if ((i57 | 0) != 0) {
     i15 = i57 + 8 | 0;
     i41 = i15 | 0;
     i17 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
     HEAP32[i41 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i18 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i44 = i18 + 8 | 0;
     i6 = i44 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     HEAP32[i6 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i44 - 8 | 0);
    }
   } while (0);
   if (i56) {
    __ZN7WebCore16VisibleSelection7setBaseERKNS_15VisiblePositionE(i21, i20);
   }
   i18 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = 0;
   do {
    if ((i18 | 0) != 0) {
     i19 = i18 + 8 | 0;
     i44 = i19 | 0;
     i7 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     HEAP32[i44 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 96 >> 2] = 0;
   i18 = i1 + 100 | 0;
   i19 = i18;
   i7 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i7 & -8;
   HEAP8[i18] = i7 & 255 & -16;
  } else {
   i50 = 81;
  }
 } while (0);
 if ((i50 | 0) == 81) {
  i50 = HEAP32[i32 >> 2] | 0;
  if ((i50 | 0) != 0) {
   i20 = i50 + 8 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
  }
  i20 = HEAP32[i28 >> 2] | 0;
  HEAP32[i28 >> 2] = i50;
  do {
   if ((i20 | 0) != 0) {
    i50 = i20 + 8 | 0;
    i28 = i50 | 0;
    i56 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
    HEAP32[i28 >> 2] = i56;
    if ((i56 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 96 >> 2] = HEAP32[i33 >> 2];
  i33 = HEAP32[i30 >> 2] | 0;
  i30 = i1 + 100 | 0;
  i20 = i30;
  i50 = HEAP32[i20 >> 2] & -8 | i33 & 7;
  HEAP32[i20 >> 2] = i50;
  HEAP8[i30] = i50 & 255 & -9 | i33 & 8;
  HEAP32[i1 + 104 >> 2] = HEAP32[i38 >> 2];
  __ZN7WebCore16VisibleSelection7setBaseERKNS_15VisiblePositionE(i21, i23);
  __ZN7WebCore16VisibleSelection9setExtentERKNS_15VisiblePositionE(i21, i25);
 }
 i25 = i21 + 56 | 0;
 HEAP8[i25] = HEAP8[i25] & -3 | i29;
 i29 = i1 + 32 | 0;
 do {
  if (!(__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i29, i21) | 0)) {
   if (!(__ZNK7WebCore6Editor21shouldChangeSelectionERKNS_16VisibleSelectionES3_NS_9EAffinityEb(HEAP32[(HEAP32[i2 >> 2] | 0) + 464 >> 2] | 0, i29, i21, HEAP32[i21 + 48 >> 2] | 0, 0) | 0)) {
    break;
   }
   __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i21, 6, 0, i3);
  }
 } while (0);
 i3 = HEAP32[i39 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i39 = i3 + 8 | 0;
   i1 = i39 | 0;
   i29 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i40 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i40 = i3 + 8 | 0;
   i39 = i40 | 0;
   i29 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
   HEAP32[i39 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i31 = i3 + 8 | 0;
   i40 = i31 | 0;
   i29 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
   HEAP32[i40 >> 2] = i29;
   if ((i29 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i21);
  STACKTOP = i5;
  return;
 }
 i32 = i3 + 8 | 0;
 i3 = i32 | 0;
 i31 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i31;
 if ((i31 | 0) >= 1) {
  __ZN7WebCore16VisibleSelectionD2Ev(i21);
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i21);
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i21);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore14FrameSelection15textWasReplacedEPNS_13CharacterDataEjjj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 48 | 0;
 i11 = i6 + 64 | 0;
 i12 = i6 + 80 | 0;
 i13 = i6 + 96 | 0;
 i14 = i6 + 112 | 0;
 i15 = i6 + 128 | 0;
 if ((HEAP32[i1 + 84 >> 2] | 0) == 0 | (i2 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i16 = i2 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 256 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i2 = i7 | 0;
 i17 = i1 + 32 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 HEAP32[i2 >> 2] = i18;
 if ((i18 | 0) == 0) {
  i19 = i7 + 8 | 0;
  i20 = 0;
  i21 = i19;
  i22 = i19;
 } else {
  i19 = i18 + 8 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  i19 = i7 + 8 | 0;
  i18 = i19;
  i20 = HEAP32[i18 >> 2] & -8;
  i21 = i19;
  i22 = i18;
 }
 i18 = i7 + 4 | 0;
 i19 = i1 + 36 | 0;
 HEAP32[i18 >> 2] = HEAP32[i19 >> 2];
 i23 = i1 + 40 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 i25 = i20 | i24 & 7;
 HEAP32[i22 >> 2] = i25;
 HEAP8[i21] = i25 & 255 & -9 | i24 & 8;
 i24 = i8 | 0;
 i25 = i1 + 44 | 0;
 i20 = HEAP32[i25 >> 2] | 0;
 HEAP32[i24 >> 2] = i20;
 if ((i20 | 0) != 0) {
  i26 = i20 + 8 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
 }
 i26 = i8 + 4 | 0;
 i20 = i1 + 48 | 0;
 HEAP32[i26 >> 2] = HEAP32[i20 >> 2];
 i27 = i1 + 52 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 i29 = i8 + 8 | 0;
 i30 = i29;
 i31 = HEAP32[i30 >> 2] & -8 | i28 & 7;
 HEAP32[i30 >> 2] = i31;
 HEAP8[i29] = i31 & 255 & -9 | i28 & 8;
 i28 = i9 | 0;
 i31 = i1 + 56 | 0;
 i32 = HEAP32[i31 >> 2] | 0;
 HEAP32[i28 >> 2] = i32;
 if ((i32 | 0) != 0) {
  i33 = i32 + 8 | 0;
  HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
 }
 i33 = i9 + 4 | 0;
 i32 = i1 + 60 | 0;
 HEAP32[i33 >> 2] = HEAP32[i32 >> 2];
 i34 = i1 + 64 | 0;
 i35 = HEAP32[i34 >> 2] | 0;
 i36 = i9 + 8 | 0;
 i37 = i36;
 i38 = HEAP32[i37 >> 2] & -8 | i35 & 7;
 HEAP32[i37 >> 2] = i38;
 HEAP8[i36] = i38 & 255 & -9 | i35 & 8;
 i35 = i10 | 0;
 i38 = i1 + 68 | 0;
 i39 = HEAP32[i38 >> 2] | 0;
 HEAP32[i35 >> 2] = i39;
 if ((i39 | 0) != 0) {
  i40 = i39 + 8 | 0;
  HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
 }
 i40 = i10 + 4 | 0;
 i39 = i1 + 72 | 0;
 HEAP32[i40 >> 2] = HEAP32[i39 >> 2];
 i41 = i1 + 76 | 0;
 i42 = HEAP32[i41 >> 2] | 0;
 i43 = i10 + 8 | 0;
 i44 = i43;
 i45 = HEAP32[i44 >> 2] & -8 | i42 & 7;
 HEAP32[i44 >> 2] = i45;
 HEAP8[i43] = i45 & 255 & -9 | i42 & 8;
 i42 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i42 | 0) != 0 & (i42 | 0) == (i16 | 0)) {
   if ((HEAP32[i22 >> 2] & 7 | 0) != 0) {
    break;
   }
   i45 = HEAP32[i18 >> 2] | 0;
   i46 = i45 >>> 0 > (i4 + i3 | 0) >>> 0;
   if (!(i45 >>> 0 < i3 >>> 0 | i46)) {
    __ZN7WebCore8Position12moveToOffsetEi(i7, i3);
   }
   if (!i46) {
    break;
   }
   __ZN7WebCore8Position12moveToOffsetEi(i7, i5 - i4 + i45 | 0);
  }
 } while (0);
 i42 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i42 | 0) != 0 & (i42 | 0) == (i16 | 0)) {
   if ((HEAP32[i30 >> 2] & 7 | 0) != 0) {
    break;
   }
   i45 = HEAP32[i26 >> 2] | 0;
   i46 = i45 >>> 0 > (i4 + i3 | 0) >>> 0;
   if (!(i45 >>> 0 < i3 >>> 0 | i46)) {
    __ZN7WebCore8Position12moveToOffsetEi(i8, i3);
   }
   if (!i46) {
    break;
   }
   __ZN7WebCore8Position12moveToOffsetEi(i8, i5 - i4 + i45 | 0);
  }
 } while (0);
 i42 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i42 | 0) != 0 & (i42 | 0) == (i16 | 0)) {
   if ((HEAP32[i37 >> 2] & 7 | 0) != 0) {
    break;
   }
   i45 = HEAP32[i33 >> 2] | 0;
   i46 = i45 >>> 0 > (i4 + i3 | 0) >>> 0;
   if (!(i45 >>> 0 < i3 >>> 0 | i46)) {
    __ZN7WebCore8Position12moveToOffsetEi(i9, i3);
   }
   if (!i46) {
    break;
   }
   __ZN7WebCore8Position12moveToOffsetEi(i9, i5 - i4 + i45 | 0);
  }
 } while (0);
 i42 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i42 | 0) != 0 & (i42 | 0) == (i16 | 0)) {
   if ((HEAP32[i44 >> 2] & 7 | 0) != 0) {
    break;
   }
   i45 = HEAP32[i40 >> 2] | 0;
   i46 = i45 >>> 0 > (i4 + i3 | 0) >>> 0;
   if (!(i45 >>> 0 < i3 >>> 0 | i46)) {
    __ZN7WebCore8Position12moveToOffsetEi(i10, i3);
   }
   if (!i46) {
    break;
   }
   __ZN7WebCore8Position12moveToOffsetEi(i10, i5 - i4 + i45 | 0);
  }
 } while (0);
 i4 = i11 | 0;
 i5 = HEAP32[i17 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i47 = 0;
 } else {
  i17 = i5 + 8 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
  i47 = HEAP32[i4 >> 2] | 0;
 }
 i17 = i11 + 4 | 0;
 HEAP32[i17 >> 2] = HEAP32[i19 >> 2];
 i19 = HEAP32[i23 >> 2] | 0;
 i23 = i11 + 8 | 0;
 i5 = i23;
 i3 = HEAP32[i5 >> 2] & -8 | i19 & 7;
 HEAP32[i5 >> 2] = i3;
 i16 = i3 & 255 & -9 | i19 & 8;
 HEAP8[i23] = i16;
 if ((HEAP32[i2 >> 2] | 0) == (i47 | 0)) {
  do {
   if ((HEAP8[i21] & 8) == 0) {
    i19 = HEAP32[i22 >> 2] & 7;
    if (!((i19 | 0) == 2 | (i19 | 0) == 4)) {
     i48 = 41;
     break;
    }
    i19 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
    i49 = i19;
    i50 = HEAP8[i23] | 0;
   } else {
    i48 = 41;
   }
  } while (0);
  if ((i48 | 0) == 41) {
   i49 = HEAP32[i18 >> 2] | 0;
   i50 = i16;
  }
  do {
   if ((i50 & 8) == 0) {
    i16 = HEAP32[i5 >> 2] & 7;
    if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
     i48 = 45;
     break;
    }
    i51 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i11) | 0;
   } else {
    i48 = 45;
   }
  } while (0);
  if ((i48 | 0) == 45) {
   i51 = HEAP32[i17 >> 2] | 0;
  }
  do {
   if ((i49 | 0) == (i51 | 0)) {
    if (((HEAP32[i5 >> 2] ^ HEAP32[i22 >> 2]) & 7 | 0) != 0) {
     i52 = 1;
     break;
    }
    i17 = i12 | 0;
    i11 = HEAP32[i25 >> 2] | 0;
    HEAP32[i17 >> 2] = i11;
    if ((i11 | 0) == 0) {
     i53 = 0;
    } else {
     i50 = i11 + 8 | 0;
     HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
     i53 = HEAP32[i17 >> 2] | 0;
    }
    i50 = i12 + 4 | 0;
    HEAP32[i50 >> 2] = HEAP32[i20 >> 2];
    i11 = HEAP32[i27 >> 2] | 0;
    i16 = i12 + 8 | 0;
    i23 = i16;
    i19 = HEAP32[i23 >> 2] & -8 | i11 & 7;
    HEAP32[i23 >> 2] = i19;
    i3 = i19 & 255 & -9 | i11 & 8;
    HEAP8[i16] = i3;
    do {
     if ((HEAP32[i24 >> 2] | 0) == (i53 | 0)) {
      do {
       if ((HEAP8[i29] & 8) == 0) {
        i11 = HEAP32[i30 >> 2] & 7;
        if (!((i11 | 0) == 2 | (i11 | 0) == 4)) {
         i48 = 54;
         break;
        }
        i11 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i8) | 0;
        i54 = i11;
        i55 = HEAP8[i16] | 0;
       } else {
        i48 = 54;
       }
      } while (0);
      if ((i48 | 0) == 54) {
       i54 = HEAP32[i26 >> 2] | 0;
       i55 = i3;
      }
      do {
       if ((i55 & 8) == 0) {
        i11 = HEAP32[i23 >> 2] & 7;
        if (!((i11 | 0) == 2 | (i11 | 0) == 4)) {
         i48 = 58;
         break;
        }
        i56 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i12) | 0;
       } else {
        i48 = 58;
       }
      } while (0);
      if ((i48 | 0) == 58) {
       i56 = HEAP32[i50 >> 2] | 0;
      }
      if ((i54 | 0) != (i56 | 0)) {
       i57 = 1;
       break;
      }
      if (((HEAP32[i23 >> 2] ^ HEAP32[i30 >> 2]) & 7 | 0) != 0) {
       i57 = 1;
       break;
      }
      i11 = i13 | 0;
      i19 = HEAP32[i31 >> 2] | 0;
      HEAP32[i11 >> 2] = i19;
      if ((i19 | 0) == 0) {
       i58 = 0;
      } else {
       i42 = i19 + 8 | 0;
       HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
       i58 = HEAP32[i11 >> 2] | 0;
      }
      i42 = i13 + 4 | 0;
      HEAP32[i42 >> 2] = HEAP32[i32 >> 2];
      i19 = HEAP32[i34 >> 2] | 0;
      i45 = i13 + 8 | 0;
      i46 = i45;
      i59 = HEAP32[i46 >> 2] & -8 | i19 & 7;
      HEAP32[i46 >> 2] = i59;
      i60 = i59 & 255 & -9 | i19 & 8;
      HEAP8[i45] = i60;
      do {
       if ((HEAP32[i28 >> 2] | 0) == (i58 | 0)) {
        do {
         if ((HEAP8[i36] & 8) == 0) {
          i19 = HEAP32[i37 >> 2] & 7;
          if (!((i19 | 0) == 2 | (i19 | 0) == 4)) {
           i48 = 67;
           break;
          }
          i19 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i9) | 0;
          i61 = i19;
          i62 = HEAP8[i45] | 0;
         } else {
          i48 = 67;
         }
        } while (0);
        if ((i48 | 0) == 67) {
         i61 = HEAP32[i33 >> 2] | 0;
         i62 = i60;
        }
        do {
         if ((i62 & 8) == 0) {
          i19 = HEAP32[i46 >> 2] & 7;
          if (!((i19 | 0) == 2 | (i19 | 0) == 4)) {
           i48 = 71;
           break;
          }
          i63 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i13) | 0;
         } else {
          i48 = 71;
         }
        } while (0);
        if ((i48 | 0) == 71) {
         i63 = HEAP32[i42 >> 2] | 0;
        }
        if ((i61 | 0) != (i63 | 0)) {
         i64 = 1;
         break;
        }
        if (((HEAP32[i46 >> 2] ^ HEAP32[i37 >> 2]) & 7 | 0) != 0) {
         i64 = 1;
         break;
        }
        i19 = i14 | 0;
        i59 = HEAP32[i38 >> 2] | 0;
        HEAP32[i19 >> 2] = i59;
        if ((i59 | 0) == 0) {
         i65 = 0;
        } else {
         i66 = i59 + 8 | 0;
         HEAP32[i66 >> 2] = (HEAP32[i66 >> 2] | 0) + 1;
         i65 = HEAP32[i19 >> 2] | 0;
        }
        i66 = i14 + 4 | 0;
        HEAP32[i66 >> 2] = HEAP32[i39 >> 2];
        i59 = HEAP32[i41 >> 2] | 0;
        i67 = i14 + 8 | 0;
        i68 = i67;
        i69 = HEAP32[i68 >> 2] & -8 | i59 & 7;
        HEAP32[i68 >> 2] = i69;
        i70 = i69 & 255 & -9 | i59 & 8;
        HEAP8[i67] = i70;
        do {
         if ((HEAP32[i35 >> 2] | 0) == (i65 | 0)) {
          do {
           if ((HEAP8[i43] & 8) == 0) {
            i59 = HEAP32[i44 >> 2] & 7;
            if (!((i59 | 0) == 2 | (i59 | 0) == 4)) {
             i48 = 80;
             break;
            }
            i59 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i10) | 0;
            i71 = i59;
            i72 = HEAP8[i67] | 0;
           } else {
            i48 = 80;
           }
          } while (0);
          if ((i48 | 0) == 80) {
           i71 = HEAP32[i40 >> 2] | 0;
           i72 = i70;
          }
          do {
           if ((i72 & 8) == 0) {
            i59 = HEAP32[i68 >> 2] & 7;
            if (!((i59 | 0) == 2 | (i59 | 0) == 4)) {
             i48 = 84;
             break;
            }
            i73 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i14) | 0;
           } else {
            i48 = 84;
           }
          } while (0);
          if ((i48 | 0) == 84) {
           i73 = HEAP32[i66 >> 2] | 0;
          }
          if ((i71 | 0) != (i73 | 0)) {
           i74 = 1;
           break;
          }
          i74 = ((HEAP32[i68 >> 2] ^ HEAP32[i44 >> 2]) & 7 | 0) != 0;
         } else {
          i74 = 1;
         }
        } while (0);
        i68 = HEAP32[i19 >> 2] | 0;
        if ((i68 | 0) == 0) {
         i64 = i74;
         break;
        }
        i66 = i68 + 8 | 0;
        i68 = i66 | 0;
        i70 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
        HEAP32[i68 >> 2] = i70;
        if ((i70 | 0) >= 1) {
         i64 = i74;
         break;
        }
        if ((HEAP32[i66 + 8 >> 2] | 0) != 0) {
         i64 = i74;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i66 - 8 | 0);
        i64 = i74;
       } else {
        i64 = 1;
       }
      } while (0);
      i46 = HEAP32[i11 >> 2] | 0;
      if ((i46 | 0) == 0) {
       i57 = i64;
       break;
      }
      i42 = i46 + 8 | 0;
      i46 = i42 | 0;
      i60 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
      HEAP32[i46 >> 2] = i60;
      if ((i60 | 0) >= 1) {
       i57 = i64;
       break;
      }
      if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
       i57 = i64;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
      i57 = i64;
     } else {
      i57 = 1;
     }
    } while (0);
    i23 = HEAP32[i17 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i52 = i57;
     break;
    }
    i50 = i23 + 8 | 0;
    i23 = i50 | 0;
    i3 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    HEAP32[i23 >> 2] = i3;
    if ((i3 | 0) >= 1) {
     i52 = i57;
     break;
    }
    if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
     i52 = i57;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
    i52 = i57;
   } else {
    i52 = 1;
   }
  } while (0);
  i75 = i52;
  i76 = HEAP32[i4 >> 2] | 0;
 } else {
  i75 = 1;
  i76 = i47;
 }
 do {
  if ((i76 | 0) != 0) {
   i47 = i76 + 8 | 0;
   i4 = i47 | 0;
   i52 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i52;
   if ((i52 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i47 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i47 - 8 | 0);
  }
 } while (0);
 if (i75) {
  __ZN7WebCore16VisibleSelectionC1Ev(i15);
  do {
   if ((HEAP32[i2 >> 2] | 0) == (HEAP32[i24 >> 2] | 0)) {
    do {
     if ((HEAP8[i21] & 8) == 0) {
      i75 = HEAP32[i22 >> 2] & 7;
      if (!((i75 | 0) == 2 | (i75 | 0) == 4)) {
       i48 = 109;
       break;
      }
      i77 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
     } else {
      i48 = 109;
     }
    } while (0);
    if ((i48 | 0) == 109) {
     i77 = HEAP32[i18 >> 2] | 0;
    }
    do {
     if ((HEAP8[i29] & 8) == 0) {
      i17 = HEAP32[i30 >> 2] & 7;
      if (!((i17 | 0) == 2 | (i17 | 0) == 4)) {
       i48 = 113;
       break;
      }
      i78 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i8) | 0;
     } else {
      i48 = 113;
     }
    } while (0);
    if ((i48 | 0) == 113) {
     i78 = HEAP32[i26 >> 2] | 0;
    }
    if ((i77 | 0) != (i78 | 0)) {
     i48 = 117;
     break;
    }
    if (((HEAP32[i30 >> 2] ^ HEAP32[i22 >> 2]) & 7 | 0) != 0) {
     i48 = 117;
     break;
    }
    if ((HEAP8[i1 + 88 | 0] & 3) == 2) {
     __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i15, i10, i9);
     break;
    } else {
     __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i15, i9, i10);
     break;
    }
   } else {
    i48 = 117;
   }
  } while (0);
  if ((i48 | 0) == 117) {
   __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i15, i7, i8);
  }
  __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 456 >> 2] | 0);
  __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i15, 16, 0, 0);
  __ZN7WebCore16VisibleSelectionD2Ev(i15);
 }
 i15 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i35 = i15 + 8 | 0;
   i1 = i35 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
  }
 } while (0);
 i15 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i28 = i15 + 8 | 0;
   i35 = i28 | 0;
   i8 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   HEAP32[i35 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
  }
 } while (0);
 i15 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i24 = i15 + 8 | 0;
   i28 = i24 | 0;
   i8 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
   HEAP32[i28 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
  }
 } while (0);
 i15 = HEAP32[i2 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i2 = i15 + 8 | 0;
 i15 = i2 | 0;
 i24 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 HEAP32[i15 >> 2] = i24;
 if ((i24 | 0) >= 1) {
  STACKTOP = i6;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationEjNS0_17VerticalDirectionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 416 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i7 + 32 | 0;
 i11 = i7 + 40 | 0;
 i12 = i7 + 240 | 0;
 i13 = i7 + 256 | 0;
 i14 = i7 + 272 | 0;
 i15 = i7 + 288 | 0;
 i16 = i7 + 296 | 0;
 i17 = i7 + 312 | 0;
 i18 = i7 + 328 | 0;
 i19 = i7 + 336 | 0;
 i20 = i7 + 352 | 0;
 i21 = i7 + 368 | 0;
 i22 = i7 + 384 | 0;
 i23 = i7 + 400 | 0;
 if ((i3 | 0) == 0) {
  i24 = 0;
  STACKTOP = i7;
  return i24 | 0;
 }
 i25 = (i5 | 0) == 1;
 do {
  if (i25) {
   __ZN7WebCore14FrameSelectionC2EPNS_5FrameE(i11, 0);
   i26 = i1 + 32 | 0;
   __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i11, i26, 6, 0, 0);
   __ZN7WebCore14FrameSelection6modifyENS0_11EAlterationEjNS0_17VerticalDirectionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE(i11, i2, i3, i4, 0, 0) | 0;
   i27 = __ZNK7WebCore6Editor21shouldChangeSelectionERKNS_16VisibleSelectionES3_NS_9EAffinityEb(HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 464 >> 2] | 0, i26, i11 + 32 | 0, HEAP32[i11 + 80 >> 2] | 0, 0) | 0;
   __ZN7WebCore14FrameSelectionD2Ev(i11);
   if (i27) {
    i27 = i12 + 8 | 0;
    i26 = i27;
    i28 = HEAP32[i26 >> 2] | 0;
    i29 = i27;
    i30 = i26;
    break;
   } else {
    i24 = 0;
    STACKTOP = i7;
    return i24 | 0;
   }
  } else {
   i26 = i12 + 8 | 0;
   i28 = 0;
   i29 = i26;
   i30 = i26;
  }
 } while (0);
 i11 = (i4 | 0) == 0;
 i4 = i11 & 1;
 __ZN7WebCore14FrameSelection14willBeModifiedENS0_11EAlterationENS_18SelectionDirectionE(i1, i2, i4);
 i26 = i12 | 0;
 HEAP32[i26 >> 2] = 0;
 i27 = i12 + 4 | 0;
 HEAP32[i27 >> 2] = 0;
 HEAP32[i30 >> 2] = i28 & -8;
 HEAP8[i29] = i28 & 255 & -16;
 i28 = i12 + 12 | 0;
 HEAP32[i28 >> 2] = 1;
 if ((i2 | 0) == 0) {
  i31 = i14 | 0;
  if (i11) {
   i32 = HEAP32[i1 + 56 >> 2] | 0;
   HEAP32[i31 >> 2] = i32;
   if ((i32 | 0) != 0) {
    i33 = i32 + 8 | 0;
    HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
   }
   HEAP32[i14 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
   i33 = HEAP32[i1 + 64 >> 2] | 0;
   i32 = i14 + 8 | 0;
   i34 = i32;
   i35 = HEAP32[i34 >> 2] & -8 | i33 & 7;
   HEAP32[i34 >> 2] = i35;
   HEAP8[i32] = i35 & 255 & -9 | i33 & 8;
   i36 = 0;
   i37 = 1;
  } else {
   i33 = HEAP32[i1 + 68 >> 2] | 0;
   HEAP32[i31 >> 2] = i33;
   if ((i33 | 0) != 0) {
    i35 = i33 + 8 | 0;
    HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
   }
   HEAP32[i14 + 4 >> 2] = HEAP32[i1 + 72 >> 2];
   i35 = HEAP32[i1 + 76 >> 2] | 0;
   i33 = i14 + 8 | 0;
   i32 = i33;
   i34 = HEAP32[i32 >> 2] & -8 | i35 & 7;
   HEAP32[i32 >> 2] = i34;
   HEAP8[i33] = i34 & 255 & -9 | i35 & 8;
   i36 = 1;
   i37 = 0;
  }
  i35 = i1 + 80 | 0;
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i13, i14, HEAP32[i35 >> 2] | 0);
  i14 = i13 | 0;
  i34 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  i33 = HEAP32[i26 >> 2] | 0;
  HEAP32[i26 >> 2] = i34;
  do {
   if ((i33 | 0) != 0) {
    i34 = i33 + 8 | 0;
    i32 = i34 | 0;
    i38 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
    HEAP32[i32 >> 2] = i38;
    if ((i38 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
   }
  } while (0);
  HEAP32[i27 >> 2] = HEAP32[i13 + 4 >> 2];
  i33 = HEAP32[i13 + 8 >> 2] | 0;
  i34 = HEAP32[i30 >> 2] & -8 | i33 & 7;
  HEAP32[i30 >> 2] = i34;
  HEAP8[i29] = i34 & 255 & -9 | i33 & 8;
  HEAP32[i28 >> 2] = HEAP32[i13 + 12 >> 2];
  i13 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i14 = i13 + 8 | 0;
    i33 = i14 | 0;
    i34 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
    HEAP32[i33 >> 2] = i34;
    if ((i34 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   }
  } while (0);
  do {
   if (i36) {
    i13 = HEAP32[i31 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    i14 = i13 + 8 | 0;
    i13 = i14 | 0;
    i34 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    HEAP32[i13 >> 2] = i34;
    if ((i34 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   }
  } while (0);
  do {
   if (i37) {
    i36 = HEAP32[i31 >> 2] | 0;
    if ((i36 | 0) == 0) {
     break;
    }
    i14 = i36 + 8 | 0;
    i36 = i14 | 0;
    i34 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
    HEAP32[i36 >> 2] = i34;
    if ((i34 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   }
  } while (0);
  i31 = i4 ^ 1;
  __ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE(i15, i1, i31);
  i4 = HEAP32[i15 >> 2] | 0;
  HEAP32[i35 >> 2] = i31;
  i39 = i4;
 } else if ((i2 | 0) == 1) {
  i4 = i17 | 0;
  i31 = HEAP32[i1 + 44 >> 2] | 0;
  HEAP32[i4 >> 2] = i31;
  if ((i31 | 0) != 0) {
   i35 = i31 + 8 | 0;
   HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
  }
  HEAP32[i17 + 4 >> 2] = HEAP32[i1 + 48 >> 2];
  i35 = HEAP32[i1 + 52 >> 2] | 0;
  i31 = i17 + 8 | 0;
  i15 = i31;
  i37 = HEAP32[i15 >> 2] & -8 | i35 & 7;
  HEAP32[i15 >> 2] = i37;
  HEAP8[i31] = i37 & 255 & -9 | i35 & 8;
  i35 = i1 + 80 | 0;
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i16, i17, HEAP32[i35 >> 2] | 0);
  i17 = i16 | 0;
  i37 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = 0;
  i31 = HEAP32[i26 >> 2] | 0;
  HEAP32[i26 >> 2] = i37;
  do {
   if ((i31 | 0) != 0) {
    i37 = i31 + 8 | 0;
    i15 = i37 | 0;
    i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
   }
  } while (0);
  HEAP32[i27 >> 2] = HEAP32[i16 + 4 >> 2];
  i31 = HEAP32[i16 + 8 >> 2] | 0;
  i37 = HEAP32[i30 >> 2] & -8 | i31 & 7;
  HEAP32[i30 >> 2] = i37;
  HEAP8[i29] = i37 & 255 & -9 | i31 & 8;
  HEAP32[i28 >> 2] = HEAP32[i16 + 12 >> 2];
  i16 = HEAP32[i17 >> 2] | 0;
  do {
   if ((i16 | 0) != 0) {
    i17 = i16 + 8 | 0;
    i31 = i17 | 0;
    i37 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
    HEAP32[i31 >> 2] = i37;
    if ((i37 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   }
  } while (0);
  i16 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i16 | 0) != 0) {
    i4 = i16 + 8 | 0;
    i17 = i4 | 0;
    i37 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    HEAP32[i17 >> 2] = i37;
    if ((i37 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
   }
  } while (0);
  __ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE(i18, i1, 3);
  i16 = HEAP32[i18 >> 2] | 0;
  HEAP32[i35 >> 2] = 1;
  i39 = i16;
 } else {
  i39 = 0;
 }
 __ZNK7WebCore15VisiblePosition19absoluteCaretBoundsEv(i8, i12);
 do {
  if ((HEAP32[i8 + 8 >> 2] | 0) < 1) {
   i40 = 0;
  } else {
   i12 = HEAP32[i8 + 12 >> 2] | 0;
   if ((i12 | 0) < 1) {
    i40 = 0;
    break;
   }
   i16 = ((i12 | 0) / 2 & -1) + (HEAP32[i8 + 4 >> 2] | 0) | 0;
   i12 = i11 ? -i16 | 0 : i16;
   i16 = i19 | 0;
   i35 = i19 + 4 | 0;
   i18 = i19 + 8 | 0;
   i4 = i18;
   i37 = i19 + 12 | 0;
   _memset(i19 | 0, 0, 12) | 0;
   HEAP32[i37 >> 2] = 1;
   i17 = i20 | 0;
   HEAP32[i17 >> 2] = 0;
   i31 = i20 + 4 | 0;
   HEAP32[i31 >> 2] = 0;
   i29 = i20 + 8 | 0;
   i14 = i29;
   i15 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i15 & -8;
   HEAP8[i29] = i15 & 255 & -16;
   i15 = i20 + 12 | 0;
   HEAP32[i15 >> 2] = 1;
   i34 = i21 | 0;
   i36 = HEAP32[i26 >> 2] | 0;
   HEAP32[i34 >> 2] = i36;
   if ((i36 | 0) != 0) {
    i13 = i36 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   i13 = i21 + 4 | 0;
   HEAP32[i13 >> 2] = HEAP32[i27 >> 2];
   i36 = HEAP32[i30 >> 2] | 0;
   i33 = i21 + 8 | 0;
   i38 = i33;
   i32 = HEAP32[i38 >> 2] & -8 | i36 & 7;
   HEAP32[i38 >> 2] = i32;
   HEAP8[i33] = i32 & 255 & -9 | i36 & 8;
   i36 = i21 + 12 | 0;
   i32 = i9 + 12 | 0;
   i41 = i9 + 4 | 0;
   i42 = i22 | 0;
   i43 = i22 + 4 | 0;
   i44 = i22 + 8 | 0;
   i45 = i22 + 12 | 0;
   i46 = i9 + 8 | 0;
   i47 = i23 | 0;
   i48 = i23 + 4 | 0;
   i49 = i23 + 8 | 0;
   i50 = i23 + 12 | 0;
   i51 = i12;
   i52 = HEAP32[i28 >> 2] | 0;
   i53 = 0;
   while (1) {
    HEAP32[i36 >> 2] = i52;
    do {
     if (i11) {
      __ZN7WebCore20previousLinePositionERKNS_15VisiblePositionEiNS_12EditableTypeE(i22, i21, i39, 0);
      i54 = HEAP32[i42 >> 2] | 0;
      HEAP32[i42 >> 2] = 0;
      i55 = HEAP32[i17 >> 2] | 0;
      HEAP32[i17 >> 2] = i54;
      do {
       if ((i55 | 0) != 0) {
        i54 = i55 + 8 | 0;
        i56 = i54 | 0;
        i57 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
        HEAP32[i56 >> 2] = i57;
        if ((i57 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
       }
      } while (0);
      HEAP32[i31 >> 2] = HEAP32[i43 >> 2];
      i55 = HEAP32[i44 >> 2] | 0;
      i54 = HEAP32[i14 >> 2] & -8 | i55 & 7;
      HEAP32[i14 >> 2] = i54;
      HEAP8[i29] = i54 & 255 & -9 | i55 & 8;
      HEAP32[i15 >> 2] = HEAP32[i45 >> 2];
      i55 = HEAP32[i42 >> 2] | 0;
      if ((i55 | 0) == 0) {
       break;
      }
      i54 = i55 + 8 | 0;
      i55 = i54 | 0;
      i57 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
      HEAP32[i55 >> 2] = i57;
      if ((i57 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
     } else {
      __ZN7WebCore16nextLinePositionERKNS_15VisiblePositionEiNS_12EditableTypeE(i23, i21, i39, 0);
      i54 = HEAP32[i47 >> 2] | 0;
      HEAP32[i47 >> 2] = 0;
      i57 = HEAP32[i17 >> 2] | 0;
      HEAP32[i17 >> 2] = i54;
      do {
       if ((i57 | 0) != 0) {
        i54 = i57 + 8 | 0;
        i55 = i54 | 0;
        i56 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
        HEAP32[i55 >> 2] = i56;
        if ((i56 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
       }
      } while (0);
      HEAP32[i31 >> 2] = HEAP32[i48 >> 2];
      i57 = HEAP32[i49 >> 2] | 0;
      i54 = HEAP32[i14 >> 2] & -8 | i57 & 7;
      HEAP32[i14 >> 2] = i54;
      HEAP8[i29] = i54 & 255 & -9 | i57 & 8;
      HEAP32[i15 >> 2] = HEAP32[i50 >> 2];
      i57 = HEAP32[i47 >> 2] | 0;
      if ((i57 | 0) == 0) {
       break;
      }
      i54 = i57 + 8 | 0;
      i57 = i54 | 0;
      i56 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
      HEAP32[i57 >> 2] = i56;
      if ((i56 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
     }
    } while (0);
    if ((HEAP32[i17 >> 2] | 0) == 0) {
     break;
    }
    if (__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i20, i21) | 0) {
     break;
    }
    __ZNK7WebCore15VisiblePosition19absoluteCaretBoundsEv(i9, i20);
    if ((HEAP32[i46 >> 2] | 0) < 1) {
     break;
    }
    i54 = HEAP32[i32 >> 2] | 0;
    if ((i54 | 0) < 1) {
     break;
    }
    i56 = ((i54 | 0) / 2 & -1) + (HEAP32[i41 >> 2] | 0) | 0;
    i54 = i11 ? -i56 | 0 : i56;
    if ((i54 - i12 | 0) > (i3 | 0)) {
     break;
    }
    if ((i54 | 0) < (i51 | 0)) {
     i58 = i51;
     i59 = i53;
    } else {
     i56 = HEAP32[i17 >> 2] | 0;
     if ((i56 | 0) != 0) {
      i57 = i56 + 8 | 0;
      HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
     }
     HEAP32[i16 >> 2] = i56;
     do {
      if ((i53 | 0) != 0) {
       i57 = i53 + 8 | 0;
       i55 = i57 | 0;
       i60 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
       HEAP32[i55 >> 2] = i60;
       if ((i60 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
      }
     } while (0);
     HEAP32[i35 >> 2] = HEAP32[i31 >> 2];
     i57 = HEAP32[i14 >> 2] | 0;
     i60 = HEAP32[i4 >> 2] & -8 | i57 & 7;
     HEAP32[i4 >> 2] = i60;
     HEAP8[i18] = i60 & 255 & -9 | i57 & 8;
     HEAP32[i37 >> 2] = HEAP32[i15 >> 2];
     i58 = i54;
     i59 = i56;
    }
    i57 = HEAP32[i17 >> 2] | 0;
    if ((i57 | 0) != 0) {
     i60 = i57 + 8 | 0;
     HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
    }
    i60 = HEAP32[i34 >> 2] | 0;
    HEAP32[i34 >> 2] = i57;
    do {
     if ((i60 | 0) != 0) {
      i57 = i60 + 8 | 0;
      i55 = i57 | 0;
      i61 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
      HEAP32[i55 >> 2] = i61;
      if ((i61 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
     }
    } while (0);
    HEAP32[i13 >> 2] = HEAP32[i31 >> 2];
    i60 = HEAP32[i14 >> 2] | 0;
    i56 = HEAP32[i38 >> 2] & -8 | i60 & 7;
    HEAP32[i38 >> 2] = i56;
    HEAP8[i33] = i56 & 255 & -9 | i60 & 8;
    i51 = i58;
    i52 = HEAP32[i15 >> 2] | 0;
    i53 = i59;
   }
   i15 = HEAP32[i34 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i52 = i15 + 8 | 0;
     i51 = i52 | 0;
     i33 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     HEAP32[i51 >> 2] = i33;
     if ((i33 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
    }
   } while (0);
   if ((i53 | 0) == 0) {
    i62 = 0;
   } else {
    if ((i2 | 0) == 0) {
     __ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE(i1, i19, i5, i6);
    } else if ((i2 | 0) == 1) {
     __ZN7WebCore14FrameSelection9setExtentERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i19, i5);
    }
    if (i25) {
     HEAP32[i1 + 108 >> 2] = 0;
    }
    i15 = HEAP32[i1 + 24 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i63 = 1;
    } else {
     __ZNK7WebCore6Editor8behaviorEv(i10, HEAP32[i15 + 464 >> 2] | 0);
     i63 = (HEAP32[i10 >> 2] | 0) != 0;
    }
    i15 = i1 + 88 | 0;
    HEAP8[i15] = HEAP8[i15] & -3 | ((i63 | (i2 | 0) == 1) & 1) << 1;
    i62 = 1;
   }
   i15 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i34 = i15 + 8 | 0;
     i52 = i34 | 0;
     i33 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
     HEAP32[i52 >> 2] = i33;
     if ((i33 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
    }
   } while (0);
   i15 = HEAP32[i16 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i40 = i62;
    break;
   }
   i17 = i15 + 8 | 0;
   i15 = i17 | 0;
   i53 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i53;
   if ((i53 | 0) >= 1) {
    i40 = i62;
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    i40 = i62;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   i40 = i62;
  }
 } while (0);
 i62 = HEAP32[i26 >> 2] | 0;
 if ((i62 | 0) == 0) {
  i24 = i40;
  STACKTOP = i7;
  return i24 | 0;
 }
 i26 = i62 + 8 | 0;
 i62 = i26 | 0;
 i2 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
 HEAP32[i62 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  i24 = i40;
  STACKTOP = i7;
  return i24 | 0;
 }
 if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
  i24 = i40;
  STACKTOP = i7;
  return i24 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
 i24 = i40;
 STACKTOP = i7;
 return i24 | 0;
}
function __ZN7WebCore14FrameSelection20modifyExtendingRightENS_15TextGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 144 | 0;
 i15 = i4 + 160 | 0;
 i16 = i4 + 176 | 0;
 i17 = i9 | 0;
 i18 = i2 + 44 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 HEAP32[i17 >> 2] = i19;
 if ((i19 | 0) == 0) {
  i20 = i9 + 8 | 0;
  i21 = 0;
  i22 = i20;
  i23 = i20;
 } else {
  i20 = i19 + 8 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
  i20 = i9 + 8 | 0;
  i19 = i20;
  i21 = HEAP32[i19 >> 2] & -8;
  i22 = i20;
  i23 = i19;
 }
 i19 = i2 + 48 | 0;
 HEAP32[i9 + 4 >> 2] = HEAP32[i19 >> 2];
 i20 = i2 + 52 | 0;
 i24 = HEAP32[i20 >> 2] | 0;
 i25 = i21 | i24 & 7;
 HEAP32[i23 >> 2] = i25;
 HEAP8[i22] = i25 & 255 & -9 | i24 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i9, HEAP32[i2 + 80 >> 2] | 0);
 i9 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i17 = i9 + 8 | 0;
   i24 = i17 | 0;
   i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i25;
   if ((i25 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 L10 : do {
  switch (i3 | 0) {
  case 6:
   {
    i9 = i5 | 0;
    i17 = HEAP32[i18 >> 2] | 0;
    HEAP32[i9 >> 2] = i17;
    if ((i17 | 0) == 0) {
     i25 = i5 + 8 | 0;
     i26 = 0;
     i27 = i25;
     i28 = i25;
    } else {
     i25 = i17 + 8 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
     i25 = i5 + 8 | 0;
     i17 = i25;
     i26 = HEAP32[i17 >> 2] & -8;
     i27 = i25;
     i28 = i17;
    }
    HEAP32[i5 + 4 >> 2] = HEAP32[i19 >> 2];
    i17 = HEAP32[i20 >> 2] | 0;
    i25 = i17 & 7 | i26;
    HEAP32[i28 >> 2] = i25;
    HEAP8[i27] = i25 & 255 & -9 | i17 & 8;
    i17 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i5) | 0;
    i25 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i9 = i25 + 8 | 0;
      i24 = i9 | 0;
      i22 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      HEAP32[i24 >> 2] = i22;
      if ((i22 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    if ((i17 | 0) == 1) {
     __ZN7WebCore14FrameSelection22modifyExtendingForwardENS_15TextGranularityE(i14, i2, 6);
     i25 = i14 | 0;
     i9 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = 0;
     i22 = i1 | 0;
     i24 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = i9;
     do {
      if ((i24 | 0) != 0) {
       i9 = i24 + 8 | 0;
       i22 = i9 | 0;
       i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i23;
       if ((i23 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
     i24 = HEAP32[i14 + 8 >> 2] | 0;
     i17 = i1 + 8 | 0;
     i9 = i17;
     i23 = HEAP32[i9 >> 2] & -8 | i24 & 7;
     HEAP32[i9 >> 2] = i23;
     HEAP8[i17] = i23 & 255 & -9 | i24 & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
     i24 = HEAP32[i25 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break L10;
     }
     i23 = i24 + 8 | 0;
     i24 = i23 | 0;
     i17 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     break L10;
    } else {
     __ZN7WebCore14FrameSelection23modifyExtendingBackwardENS_15TextGranularityE(i15, i2, 6);
     i23 = i15 | 0;
     i17 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     i24 = i1 | 0;
     i9 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i17;
     do {
      if ((i9 | 0) != 0) {
       i17 = i9 + 8 | 0;
       i24 = i17 | 0;
       i22 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       HEAP32[i24 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
     i9 = HEAP32[i15 + 8 >> 2] | 0;
     i25 = i1 + 8 | 0;
     i17 = i25;
     i22 = HEAP32[i17 >> 2] & -8 | i9 & 7;
     HEAP32[i17 >> 2] = i22;
     HEAP8[i25] = i22 & 255 & -9 | i9 & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
     i9 = HEAP32[i23 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break L10;
     }
     i22 = i9 + 8 | 0;
     i9 = i22 | 0;
     i25 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
     break L10;
    }
    break;
   }
  case 2:
  case 3:
  case 4:
  case 5:
  case 7:
  case 8:
   {
    __ZN7WebCore14FrameSelection22modifyExtendingForwardENS_15TextGranularityE(i16, i2, i3);
    i22 = i16 | 0;
    i25 = HEAP32[i22 >> 2] | 0;
    HEAP32[i22 >> 2] = 0;
    i9 = i1 | 0;
    i17 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = i25;
    do {
     if ((i17 | 0) != 0) {
      i25 = i17 + 8 | 0;
      i9 = i25 | 0;
      i24 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
    i17 = HEAP32[i16 + 8 >> 2] | 0;
    i23 = i1 + 8 | 0;
    i25 = i23;
    i24 = HEAP32[i25 >> 2] & -8 | i17 & 7;
    HEAP32[i25 >> 2] = i24;
    HEAP8[i23] = i24 & 255 & -9 | i17 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
    i17 = HEAP32[i22 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break L10;
    }
    i24 = i17 + 8 | 0;
    i17 = i24 | 0;
    i23 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    HEAP32[i17 >> 2] = i23;
    if ((i23 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    break;
   }
  case 0:
   {
    i24 = i7 | 0;
    i23 = HEAP32[i18 >> 2] | 0;
    HEAP32[i24 >> 2] = i23;
    if ((i23 | 0) == 0) {
     i17 = i7 + 8 | 0;
     i29 = 0;
     i30 = i17;
     i31 = i17;
    } else {
     i17 = i23 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     i17 = i7 + 8 | 0;
     i23 = i17;
     i29 = HEAP32[i23 >> 2] & -8;
     i30 = i17;
     i31 = i23;
    }
    HEAP32[i7 + 4 >> 2] = HEAP32[i19 >> 2];
    i23 = HEAP32[i20 >> 2] | 0;
    i17 = i23 & 7 | i29;
    HEAP32[i31 >> 2] = i17;
    HEAP8[i30] = i17 & 255 & -9 | i23 & 8;
    i23 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i7) | 0;
    i17 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i24 = i17 + 8 | 0;
      i25 = i24 | 0;
      i9 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i9;
      if ((i9 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    if ((i23 | 0) == 1) {
     __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i10, i1, 1);
     i17 = i10 | 0;
     i22 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = 0;
     i24 = i1 | 0;
     i9 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i22;
     do {
      if ((i9 | 0) != 0) {
       i22 = i9 + 8 | 0;
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
     HEAP32[i1 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
     i9 = HEAP32[i10 + 8 >> 2] | 0;
     i23 = i1 + 8 | 0;
     i22 = i23;
     i25 = HEAP32[i22 >> 2] & -8 | i9 & 7;
     HEAP32[i22 >> 2] = i25;
     HEAP8[i23] = i25 & 255 & -9 | i9 & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
     i9 = HEAP32[i17 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break L10;
     }
     i25 = i9 + 8 | 0;
     i9 = i25 | 0;
     i23 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
     break L10;
    } else {
     __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i11, i1, 1);
     i25 = i11 | 0;
     i23 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = 0;
     i9 = i1 | 0;
     i22 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i23;
     do {
      if ((i22 | 0) != 0) {
       i23 = i22 + 8 | 0;
       i9 = i23 | 0;
       i24 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       HEAP32[i9 >> 2] = i24;
       if ((i24 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
     i22 = HEAP32[i11 + 8 >> 2] | 0;
     i17 = i1 + 8 | 0;
     i23 = i17;
     i24 = HEAP32[i23 >> 2] & -8 | i22 & 7;
     HEAP32[i23 >> 2] = i24;
     HEAP8[i17] = i24 & 255 & -9 | i22 & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
     i22 = HEAP32[i25 >> 2] | 0;
     if ((i22 | 0) == 0) {
      break L10;
     }
     i24 = i22 + 8 | 0;
     i22 = i24 | 0;
     i17 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     break L10;
    }
    break;
   }
  case 1:
   {
    i24 = i6 | 0;
    i17 = HEAP32[i18 >> 2] | 0;
    HEAP32[i24 >> 2] = i17;
    if ((i17 | 0) == 0) {
     i22 = i6 + 8 | 0;
     i32 = 0;
     i33 = i22;
     i34 = i22;
    } else {
     i22 = i17 + 8 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
     i22 = i6 + 8 | 0;
     i17 = i22;
     i32 = HEAP32[i17 >> 2] & -8;
     i33 = i22;
     i34 = i17;
    }
    HEAP32[i6 + 4 >> 2] = HEAP32[i19 >> 2];
    i17 = HEAP32[i20 >> 2] | 0;
    i22 = i17 & 7 | i32;
    HEAP32[i34 >> 2] = i22;
    HEAP8[i33] = i22 & 255 & -9 | i17 & 8;
    i17 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i6) | 0;
    i22 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i24 = i22 + 8 | 0;
      i23 = i24 | 0;
      i9 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
      HEAP32[i23 >> 2] = i9;
      if ((i9 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    if ((i17 | 0) == 1) {
     __ZN7WebCore14FrameSelection27nextWordPositionForPlatformERKNS_15VisiblePositionE(i12, i2, i1);
     i22 = i12 | 0;
     i25 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     i24 = i1 | 0;
     i9 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i25;
     do {
      if ((i9 | 0) != 0) {
       i25 = i9 + 8 | 0;
       i24 = i25 | 0;
       i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       HEAP32[i24 >> 2] = i23;
       if ((i23 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
     i9 = HEAP32[i12 + 8 >> 2] | 0;
     i17 = i1 + 8 | 0;
     i25 = i17;
     i23 = HEAP32[i25 >> 2] & -8 | i9 & 7;
     HEAP32[i25 >> 2] = i23;
     HEAP8[i17] = i23 & 255 & -9 | i9 & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
     i9 = HEAP32[i22 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break L10;
     }
     i23 = i9 + 8 | 0;
     i9 = i23 | 0;
     i17 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     break L10;
    } else {
     __ZN7WebCore20previousWordPositionERKNS_15VisiblePositionE(i13, i1);
     i23 = i13 | 0;
     i17 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     i9 = i1 | 0;
     i25 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i17;
     do {
      if ((i25 | 0) != 0) {
       i17 = i25 + 8 | 0;
       i9 = i17 | 0;
       i24 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
       HEAP32[i9 >> 2] = i24;
       if ((i24 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
     i25 = HEAP32[i13 + 8 >> 2] | 0;
     i22 = i1 + 8 | 0;
     i17 = i22;
     i24 = HEAP32[i17 >> 2] & -8 | i25 & 7;
     HEAP32[i17 >> 2] = i24;
     HEAP8[i22] = i24 & 255 & -9 | i25 & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
     i25 = HEAP32[i23 >> 2] | 0;
     if ((i25 | 0) == 0) {
      break L10;
     }
     i24 = i25 + 8 | 0;
     i25 = i24 | 0;
     i22 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     HEAP32[i25 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     break L10;
    }
    break;
   }
  default:
   {}
  }
 } while (0);
 i13 = i8 | 0;
 i12 = HEAP32[i18 >> 2] | 0;
 HEAP32[i13 >> 2] = i12;
 if ((i12 | 0) == 0) {
  i18 = i8 + 8 | 0;
  i35 = 0;
  i36 = i18;
  i37 = i18;
 } else {
  i18 = i12 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  i18 = i8 + 8 | 0;
  i12 = i18;
  i35 = HEAP32[i12 >> 2] & -8;
  i36 = i18;
  i37 = i12;
 }
 HEAP32[i8 + 4 >> 2] = HEAP32[i19 >> 2];
 i19 = HEAP32[i20 >> 2] | 0;
 i20 = i19 & 7 | i35;
 HEAP32[i37 >> 2] = i20;
 HEAP8[i36] = i20 & 255 & -9 | i19 & 8;
 i19 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i8) | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i38 = (i19 | 0) == 1;
  __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i38);
  STACKTOP = i4;
  return;
 }
 i13 = i8 + 8 | 0;
 i8 = i13 | 0;
 i20 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i20;
 if ((i20 | 0) >= 1) {
  i38 = (i19 | 0) == 1;
  __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i38);
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
  i38 = (i19 | 0) == 1;
  __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i38);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
 i38 = (i19 | 0) == 1;
 __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i38);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection19modifyExtendingLeftENS_15TextGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 144 | 0;
 i15 = i4 + 160 | 0;
 i16 = i4 + 176 | 0;
 i17 = i9 | 0;
 i18 = i2 + 44 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 HEAP32[i17 >> 2] = i19;
 if ((i19 | 0) == 0) {
  i20 = i9 + 8 | 0;
  i21 = 0;
  i22 = i20;
  i23 = i20;
 } else {
  i20 = i19 + 8 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
  i20 = i9 + 8 | 0;
  i19 = i20;
  i21 = HEAP32[i19 >> 2] & -8;
  i22 = i20;
  i23 = i19;
 }
 i19 = i2 + 48 | 0;
 HEAP32[i9 + 4 >> 2] = HEAP32[i19 >> 2];
 i20 = i2 + 52 | 0;
 i24 = HEAP32[i20 >> 2] | 0;
 i25 = i21 | i24 & 7;
 HEAP32[i23 >> 2] = i25;
 HEAP8[i22] = i25 & 255 & -9 | i24 & 8;
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i9, HEAP32[i2 + 80 >> 2] | 0);
 i9 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i17 = i9 + 8 | 0;
   i24 = i17 | 0;
   i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i25;
   if ((i25 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 L10 : do {
  switch (i3 | 0) {
  case 0:
   {
    i9 = i7 | 0;
    i17 = HEAP32[i18 >> 2] | 0;
    HEAP32[i9 >> 2] = i17;
    if ((i17 | 0) == 0) {
     i25 = i7 + 8 | 0;
     i26 = 0;
     i27 = i25;
     i28 = i25;
    } else {
     i25 = i17 + 8 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
     i25 = i7 + 8 | 0;
     i17 = i25;
     i26 = HEAP32[i17 >> 2] & -8;
     i27 = i25;
     i28 = i17;
    }
    HEAP32[i7 + 4 >> 2] = HEAP32[i19 >> 2];
    i17 = HEAP32[i20 >> 2] | 0;
    i25 = i17 & 7 | i26;
    HEAP32[i28 >> 2] = i25;
    HEAP8[i27] = i25 & 255 & -9 | i17 & 8;
    i17 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i7) | 0;
    i25 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i9 = i25 + 8 | 0;
      i24 = i9 | 0;
      i22 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      HEAP32[i24 >> 2] = i22;
      if ((i22 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    if ((i17 | 0) == 1) {
     __ZNK7WebCore15VisiblePosition8previousENS_27EditingBoundaryCrossingRuleE(i10, i1, 1);
     i25 = i10 | 0;
     i9 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = 0;
     i22 = i1 | 0;
     i24 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = i9;
     do {
      if ((i24 | 0) != 0) {
       i9 = i24 + 8 | 0;
       i22 = i9 | 0;
       i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i23;
       if ((i23 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
     i24 = HEAP32[i10 + 8 >> 2] | 0;
     i17 = i1 + 8 | 0;
     i9 = i17;
     i23 = HEAP32[i9 >> 2] & -8 | i24 & 7;
     HEAP32[i9 >> 2] = i23;
     HEAP8[i17] = i23 & 255 & -9 | i24 & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
     i24 = HEAP32[i25 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break L10;
     }
     i23 = i24 + 8 | 0;
     i24 = i23 | 0;
     i17 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
     break L10;
    } else {
     __ZNK7WebCore15VisiblePosition4nextENS_27EditingBoundaryCrossingRuleE(i11, i1, 1);
     i23 = i11 | 0;
     i17 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     i24 = i1 | 0;
     i9 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i17;
     do {
      if ((i9 | 0) != 0) {
       i17 = i9 + 8 | 0;
       i24 = i17 | 0;
       i22 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       HEAP32[i24 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
     i9 = HEAP32[i11 + 8 >> 2] | 0;
     i25 = i1 + 8 | 0;
     i17 = i25;
     i22 = HEAP32[i17 >> 2] & -8 | i9 & 7;
     HEAP32[i17 >> 2] = i22;
     HEAP8[i25] = i22 & 255 & -9 | i9 & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
     i9 = HEAP32[i23 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break L10;
     }
     i22 = i9 + 8 | 0;
     i9 = i22 | 0;
     i25 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
     break L10;
    }
    break;
   }
  case 1:
   {
    i22 = i6 | 0;
    i25 = HEAP32[i18 >> 2] | 0;
    HEAP32[i22 >> 2] = i25;
    if ((i25 | 0) == 0) {
     i9 = i6 + 8 | 0;
     i29 = 0;
     i30 = i9;
     i31 = i9;
    } else {
     i9 = i25 + 8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     i9 = i6 + 8 | 0;
     i25 = i9;
     i29 = HEAP32[i25 >> 2] & -8;
     i30 = i9;
     i31 = i25;
    }
    HEAP32[i6 + 4 >> 2] = HEAP32[i19 >> 2];
    i25 = HEAP32[i20 >> 2] | 0;
    i9 = i25 & 7 | i29;
    HEAP32[i31 >> 2] = i9;
    HEAP8[i30] = i9 & 255 & -9 | i25 & 8;
    i25 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i6) | 0;
    i9 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i22 = i9 + 8 | 0;
      i17 = i22 | 0;
      i24 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
      HEAP32[i17 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
     }
    } while (0);
    if ((i25 | 0) == 1) {
     __ZN7WebCore20previousWordPositionERKNS_15VisiblePositionE(i12, i1);
     i9 = i12 | 0;
     i23 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = 0;
     i22 = i1 | 0;
     i24 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = i23;
     do {
      if ((i24 | 0) != 0) {
       i23 = i24 + 8 | 0;
       i22 = i23 | 0;
       i17 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       HEAP32[i22 >> 2] = i17;
       if ((i17 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
     i24 = HEAP32[i12 + 8 >> 2] | 0;
     i25 = i1 + 8 | 0;
     i23 = i25;
     i17 = HEAP32[i23 >> 2] & -8 | i24 & 7;
     HEAP32[i23 >> 2] = i17;
     HEAP8[i25] = i17 & 255 & -9 | i24 & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
     i24 = HEAP32[i9 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break L10;
     }
     i17 = i24 + 8 | 0;
     i24 = i17 | 0;
     i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     HEAP32[i24 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
     break L10;
    } else {
     __ZN7WebCore14FrameSelection27nextWordPositionForPlatformERKNS_15VisiblePositionE(i13, i2, i1);
     i17 = i13 | 0;
     i25 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = 0;
     i24 = i1 | 0;
     i23 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i25;
     do {
      if ((i23 | 0) != 0) {
       i25 = i23 + 8 | 0;
       i24 = i25 | 0;
       i22 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       HEAP32[i24 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
     i23 = HEAP32[i13 + 8 >> 2] | 0;
     i9 = i1 + 8 | 0;
     i25 = i9;
     i22 = HEAP32[i25 >> 2] & -8 | i23 & 7;
     HEAP32[i25 >> 2] = i22;
     HEAP8[i9] = i22 & 255 & -9 | i23 & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
     i23 = HEAP32[i17 >> 2] | 0;
     if ((i23 | 0) == 0) {
      break L10;
     }
     i22 = i23 + 8 | 0;
     i23 = i22 | 0;
     i9 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
     break L10;
    }
    break;
   }
  case 2:
  case 3:
  case 4:
  case 5:
  case 7:
  case 8:
   {
    __ZN7WebCore14FrameSelection23modifyExtendingBackwardENS_15TextGranularityE(i16, i2, i3);
    i22 = i16 | 0;
    i9 = HEAP32[i22 >> 2] | 0;
    HEAP32[i22 >> 2] = 0;
    i23 = i1 | 0;
    i25 = HEAP32[i23 >> 2] | 0;
    HEAP32[i23 >> 2] = i9;
    do {
     if ((i25 | 0) != 0) {
      i9 = i25 + 8 | 0;
      i23 = i9 | 0;
      i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
      HEAP32[i23 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    HEAP32[i1 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
    i25 = HEAP32[i16 + 8 >> 2] | 0;
    i17 = i1 + 8 | 0;
    i9 = i17;
    i24 = HEAP32[i9 >> 2] & -8 | i25 & 7;
    HEAP32[i9 >> 2] = i24;
    HEAP8[i17] = i24 & 255 & -9 | i25 & 8;
    HEAP32[i1 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
    i25 = HEAP32[i22 >> 2] | 0;
    if ((i25 | 0) == 0) {
     break L10;
    }
    i24 = i25 + 8 | 0;
    i25 = i24 | 0;
    i17 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
    HEAP32[i25 >> 2] = i17;
    if ((i17 | 0) >= 1) {
     break L10;
    }
    if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
     break L10;
    }
    __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    break;
   }
  case 6:
   {
    i24 = i5 | 0;
    i17 = HEAP32[i18 >> 2] | 0;
    HEAP32[i24 >> 2] = i17;
    if ((i17 | 0) == 0) {
     i25 = i5 + 8 | 0;
     i32 = 0;
     i33 = i25;
     i34 = i25;
    } else {
     i25 = i17 + 8 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
     i25 = i5 + 8 | 0;
     i17 = i25;
     i32 = HEAP32[i17 >> 2] & -8;
     i33 = i25;
     i34 = i17;
    }
    HEAP32[i5 + 4 >> 2] = HEAP32[i19 >> 2];
    i17 = HEAP32[i20 >> 2] | 0;
    i25 = i17 & 7 | i32;
    HEAP32[i34 >> 2] = i25;
    HEAP8[i33] = i25 & 255 & -9 | i17 & 8;
    i17 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i5) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i25 | 0) != 0) {
      i24 = i25 + 8 | 0;
      i9 = i24 | 0;
      i23 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      HEAP32[i9 >> 2] = i23;
      if ((i23 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     }
    } while (0);
    if ((i17 | 0) == 1) {
     __ZN7WebCore14FrameSelection23modifyExtendingBackwardENS_15TextGranularityE(i14, i2, 6);
     i25 = i14 | 0;
     i22 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = 0;
     i24 = i1 | 0;
     i23 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i22;
     do {
      if ((i23 | 0) != 0) {
       i22 = i23 + 8 | 0;
       i24 = i22 | 0;
       i9 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       HEAP32[i24 >> 2] = i9;
       if ((i9 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
     i23 = HEAP32[i14 + 8 >> 2] | 0;
     i17 = i1 + 8 | 0;
     i22 = i17;
     i9 = HEAP32[i22 >> 2] & -8 | i23 & 7;
     HEAP32[i22 >> 2] = i9;
     HEAP8[i17] = i9 & 255 & -9 | i23 & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
     i23 = HEAP32[i25 >> 2] | 0;
     if ((i23 | 0) == 0) {
      break L10;
     }
     i9 = i23 + 8 | 0;
     i23 = i9 | 0;
     i17 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     break L10;
    } else {
     __ZN7WebCore14FrameSelection22modifyExtendingForwardENS_15TextGranularityE(i15, i2, 6);
     i9 = i15 | 0;
     i17 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = 0;
     i23 = i1 | 0;
     i22 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = i17;
     do {
      if ((i22 | 0) != 0) {
       i17 = i22 + 8 | 0;
       i23 = i17 | 0;
       i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       HEAP32[i23 >> 2] = i24;
       if ((i24 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
      }
     } while (0);
     HEAP32[i1 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
     i22 = HEAP32[i15 + 8 >> 2] | 0;
     i25 = i1 + 8 | 0;
     i17 = i25;
     i24 = HEAP32[i17 >> 2] & -8 | i22 & 7;
     HEAP32[i17 >> 2] = i24;
     HEAP8[i25] = i24 & 255 & -9 | i22 & 8;
     HEAP32[i1 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
     i22 = HEAP32[i9 >> 2] | 0;
     if ((i22 | 0) == 0) {
      break L10;
     }
     i24 = i22 + 8 | 0;
     i22 = i24 | 0;
     i25 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break L10;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break L10;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     break L10;
    }
    break;
   }
  default:
   {}
  }
 } while (0);
 i15 = i8 | 0;
 i2 = HEAP32[i18 >> 2] | 0;
 HEAP32[i15 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i18 = i8 + 8 | 0;
  i35 = 0;
  i36 = i18;
  i37 = i18;
 } else {
  i18 = i2 + 8 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  i18 = i8 + 8 | 0;
  i2 = i18;
  i35 = HEAP32[i2 >> 2] & -8;
  i36 = i18;
  i37 = i2;
 }
 HEAP32[i8 + 4 >> 2] = HEAP32[i19 >> 2];
 i19 = HEAP32[i20 >> 2] | 0;
 i20 = i19 & 7 | i35;
 HEAP32[i37 >> 2] = i20;
 HEAP8[i36] = i20 & 255 & -9 | i19 & 8;
 i19 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i8) | 0;
 i8 = HEAP32[i15 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i38 = (i19 | 0) != 1;
  __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i38);
  STACKTOP = i4;
  return;
 }
 i15 = i8 + 8 | 0;
 i8 = i15 | 0;
 i20 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i20;
 if ((i20 | 0) >= 1) {
  i38 = (i19 | 0) != 1;
  __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i38);
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
  i38 = (i19 | 0) != 1;
  __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i38);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
 i38 = (i19 | 0) != 1;
 __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i38);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection16updateAppearanceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 80 | 0;
 i6 = i2 + 96 | 0;
 i7 = i2 + 112 | 0;
 i8 = i2 + 128 | 0;
 i9 = i2 + 144 | 0;
 i10 = i2 + 160 | 0;
 i11 = i2 + 176 | 0;
 i12 = i2 + 192 | 0;
 i13 = i1 + 192 | 0;
 do {
  if ((HEAP8[i13] & 16) == 0) {
   i14 = 0;
   i15 = 0;
   i16 = 0;
   i17 = 1;
  } else {
   if ((HEAP32[i1 + 84 >> 2] | 0) != 1) {
    i14 = 0;
    i15 = 0;
    i16 = 0;
    i17 = 1;
    break;
   }
   __ZN7WebCore14FrameSelection22modifyExtendingForwardENS_15TextGranularityE(i3, i1, 0);
   i18 = i3 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   i18 = HEAP32[i3 + 4 >> 2] | 0;
   i20 = HEAP32[i3 + 8 >> 2] & 15;
   i21 = HEAP32[i3 + 12 >> 2] | 0;
   HEAP8[i13] = HEAP8[i13] & -3 | ((i19 | 0) == 0) << 1;
   i14 = i19;
   i15 = i18;
   i16 = i20;
   i17 = i21;
  }
 } while (0);
 i3 = __ZN7WebCore14FrameSelection18recomputeCaretRectEv(i1) | 0;
 i21 = i1 + 24 | 0;
 i20 = (HEAP8[(HEAP32[(HEAP32[i21 >> 2] | 0) + 36 >> 2] | 0) + 183 | 0] & 4) != 0;
 L5 : do {
  if ((HEAP32[i1 + 20 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 84 >> 2] | 0) != 1) {
    i22 = 11;
    break;
   }
   if (!(__ZNK7WebCore16VisibleSelection17isContentEditableEv(i1 + 32 | 0) | 0 | i20)) {
    i22 = 11;
    break;
   }
   i18 = (i14 | 0) == 0;
   do {
    if (i3 | i18 ^ 1) {
     i22 = 12;
    } else {
     i19 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 464 >> 2] | 0) + 4 >> 2] | 0;
     if ((i19 | 0) == 0) {
      if (i18) {
       break;
      } else {
       break L5;
      }
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 52 >> 2] & 1](i19) | 0) {
      i22 = 12;
      break;
     }
     if (!i18) {
      break L5;
     }
    }
   } while (0);
   if ((i22 | 0) == 12) {
    __ZN7WebCore9TimerBase4stopEv(i1 + 120 | 0);
    if (!i18) {
     break;
    }
   }
   if (+HEAPF64[i1 + 128 >> 3] != +0) {
    break;
   }
   i19 = HEAP32[(HEAP32[(HEAP32[i21 >> 2] | 0) + 32 >> 2] | 0) + 68 >> 2] | 0;
   d23 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i19 >> 2] | 0) + 84 >> 2] & 1](i19);
   if (d23 != +0) {
    __ZN7WebCore9TimerBase5startEdd(i1 + 120 | 0, d23, d23);
   }
   i19 = HEAP8[i13] | 0;
   if ((i19 & 2) != 0) {
    break;
   }
   HEAP8[i13] = i19 | 2;
   __ZN7WebCore14FrameSelection19invalidateCaretRectEv(i1);
  } else {
   i22 = 11;
  }
 } while (0);
 if ((i22 | 0) == 11) {
  __ZN7WebCore9TimerBase4stopEv(i1 + 120 | 0);
 }
 i13 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i21 >> 2] | 0) | 0;
 if ((i13 | 0) != 0) {
  i21 = i1 + 84 | 0;
  if ((HEAP32[i21 >> 2] | 0) == 2) {
   i24 = 1;
  } else {
   i24 = HEAP32[i1 + 80 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i1 + 56 | 0, i24);
  do {
   if ((i14 | 0) == 0) {
    if ((HEAP32[i21 >> 2] | 0) == 2) {
     i25 = 0;
    } else {
     i25 = HEAP32[i1 + 80 >> 2] | 0;
    }
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i6, i1 + 68 | 0, i25);
    __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i4, i5, i6, 0);
    i24 = HEAP32[i6 >> 2] | 0;
    if ((i24 | 0) == 0) {
     break;
    }
    i3 = i24 + 8 | 0;
    i24 = i3 | 0;
    i20 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    HEAP32[i24 >> 2] = i20;
    if ((i20 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   } else {
    i3 = i6 | 0;
    HEAP32[i3 >> 2] = i14;
    i20 = i14 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    HEAP32[i6 + 4 >> 2] = i15;
    i20 = i6 + 8 | 0;
    i24 = i20;
    i19 = HEAP32[i24 >> 2] & -8 | i16 & 7;
    HEAP32[i24 >> 2] = i19;
    HEAP8[i20] = i19 & 255 & -9 | i16 & 8;
    HEAP32[i6 + 12 >> 2] = i17;
    __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i4, i5, i6, 0);
    i19 = HEAP32[i3 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break;
    }
    i3 = i19 + 8 | 0;
    i19 = i3 | 0;
    i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
    HEAP32[i19 >> 2] = i20;
    if ((i20 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   }
  } while (0);
  i6 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i5 = i6 + 8 | 0;
    i17 = i5 | 0;
    i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    HEAP32[i17 >> 2] = i16;
    if ((i16 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
   }
  } while (0);
  i6 = i4 + 52 | 0;
  do {
   if ((HEAP32[i6 >> 2] | 0) == 2) {
    i5 = i7 | 0;
    i16 = HEAP32[i4 + 24 >> 2] | 0;
    HEAP32[i5 >> 2] = i16;
    if ((i16 | 0) != 0) {
     i17 = i16 + 8 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    }
    i17 = i7 + 4 | 0;
    HEAP32[i17 >> 2] = HEAP32[i4 + 28 >> 2];
    i16 = HEAP32[i4 + 32 >> 2] | 0;
    i15 = i7 + 8 | 0;
    i25 = i15;
    i1 = HEAP32[i25 >> 2] & -8 | i16 & 7;
    HEAP32[i25 >> 2] = i1;
    HEAP8[i15] = i1 & 255 & -9 | i16 & 8;
    __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i8, i7, 1);
    if (__ZNK7WebCore8Position11isCandidateEv(i8) | 0) {
     i16 = HEAP32[i8 >> 2] | 0;
     if ((i16 | 0) != 0) {
      i1 = i16 + 8 | 0;
      HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
     }
     i1 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i16;
     do {
      if ((i1 | 0) != 0) {
       i16 = i1 + 8 | 0;
       i21 = i16 | 0;
       i3 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
       HEAP32[i21 >> 2] = i3;
       if ((i3 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
      }
     } while (0);
     HEAP32[i17 >> 2] = HEAP32[i8 + 4 >> 2];
     i1 = HEAP32[i8 + 8 >> 2] | 0;
     i18 = HEAP32[i25 >> 2] & -8 | i1 & 7;
     HEAP32[i25 >> 2] = i18;
     HEAP8[i15] = i18 & 255 & -9 | i1 & 8;
    }
    i1 = i9 | 0;
    i18 = HEAP32[i4 + 36 >> 2] | 0;
    HEAP32[i1 >> 2] = i18;
    if ((i18 | 0) != 0) {
     i16 = i18 + 8 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    }
    i16 = i9 + 4 | 0;
    HEAP32[i16 >> 2] = HEAP32[i4 + 40 >> 2];
    i18 = HEAP32[i4 + 44 >> 2] | 0;
    i3 = i9 + 8 | 0;
    i21 = i3;
    i20 = HEAP32[i21 >> 2] & -8 | i18 & 7;
    HEAP32[i21 >> 2] = i20;
    HEAP8[i3] = i20 & 255 & -9 | i18 & 8;
    __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i10, i9, 1);
    i18 = i10 | 0;
    i20 = HEAP32[i18 >> 2] | 0;
    HEAP32[i18 >> 2] = 0;
    i19 = i8 | 0;
    i24 = HEAP32[i19 >> 2] | 0;
    HEAP32[i19 >> 2] = i20;
    do {
     if ((i24 | 0) != 0) {
      i20 = i24 + 8 | 0;
      i26 = i20 | 0;
      i27 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
      HEAP32[i26 >> 2] = i27;
      if ((i27 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
     }
    } while (0);
    i24 = i8 + 4 | 0;
    HEAP32[i24 >> 2] = HEAP32[i10 + 4 >> 2];
    i20 = HEAP32[i10 + 8 >> 2] | 0;
    i27 = i8 + 8 | 0;
    i26 = i27;
    i28 = HEAP32[i26 >> 2] & -8 | i20 & 7;
    HEAP32[i26 >> 2] = i28;
    HEAP8[i27] = i28 & 255 & -9 | i20 & 8;
    i20 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i20 | 0) != 0) {
      i28 = i20 + 8 | 0;
      i27 = i28 | 0;
      i29 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      HEAP32[i27 >> 2] = i29;
      if ((i29 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
     }
    } while (0);
    if (__ZNK7WebCore8Position11isCandidateEv(i8) | 0) {
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) != 0) {
      i18 = i20 + 8 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     }
     i18 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = i20;
     do {
      if ((i18 | 0) != 0) {
       i20 = i18 + 8 | 0;
       i28 = i20 | 0;
       i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       HEAP32[i28 >> 2] = i29;
       if ((i29 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
      }
     } while (0);
     HEAP32[i16 >> 2] = HEAP32[i24 >> 2];
     i18 = HEAP32[i26 >> 2] | 0;
     i20 = HEAP32[i21 >> 2] & -8 | i18 & 7;
     HEAP32[i21 >> 2] = i20;
     HEAP8[i3] = i20 & 255 & -9 | i18 & 8;
    }
    L89 : do {
     if ((HEAP32[i5 >> 2] | 0) == 0) {
      i22 = 97;
     } else {
      if ((HEAP32[i1 >> 2] | 0) == 0) {
       break;
      }
      if ((HEAP32[i6 >> 2] | 0) == 2) {
       i30 = 1;
      } else {
       i30 = HEAP32[i4 + 48 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i4 + 24 | 0, i30);
      if ((HEAP32[i6 >> 2] | 0) == 2) {
       i31 = 0;
      } else {
       i31 = HEAP32[i4 + 48 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i12, i4 + 36 | 0, i31);
      i18 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i11, i12) | 0;
      i20 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i20 | 0) != 0) {
        i29 = i20 + 8 | 0;
        i28 = i29 | 0;
        i27 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
        HEAP32[i28 >> 2] = i27;
        if ((i27 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
       }
      } while (0);
      i20 = HEAP32[i11 >> 2] | 0;
      do {
       if ((i20 | 0) == 0) {
        i22 = 81;
       } else {
        i29 = i20 + 8 | 0;
        i27 = i29 | 0;
        i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
        HEAP32[i27 >> 2] = i28;
        if ((i28 | 0) >= 1) {
         i22 = 81;
         break;
        }
        if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
         i22 = 81;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i29 - 8 | 0);
        if (i18) {
         i22 = 97;
         break L89;
        }
       }
      } while (0);
      if ((i22 | 0) == 81) {
       if (i18) {
        i22 = 97;
        break;
       }
      }
      i20 = HEAP32[i5 >> 2] | 0;
      i29 = i20 + 32 | 0;
      if ((HEAP32[i20 + 12 >> 2] & 2048 | 0) == 0) {
       i32 = i29 | 0;
      } else {
       i32 = HEAP32[i29 >> 2] | 0;
      }
      i29 = HEAP32[i32 >> 2] | 0;
      i20 = HEAP32[i1 >> 2] | 0;
      i28 = i20 + 32 | 0;
      if ((HEAP32[i20 + 12 >> 2] & 2048 | 0) == 0) {
       i33 = i28 | 0;
      } else {
       i33 = HEAP32[i28 >> 2] | 0;
      }
      i28 = HEAP32[i33 >> 2] | 0;
      do {
       if ((HEAP8[i15] & 8) == 0) {
        i20 = HEAP32[i25 >> 2] & 7;
        if (!((i20 | 0) == 2 | (i20 | 0) == 4)) {
         i22 = 90;
         break;
        }
        i34 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
       } else {
        i22 = 90;
       }
      } while (0);
      if ((i22 | 0) == 90) {
       i34 = HEAP32[i17 >> 2] | 0;
      }
      do {
       if ((HEAP8[i3] & 8) == 0) {
        i18 = HEAP32[i21 >> 2] & 7;
        if (!((i18 | 0) == 2 | (i18 | 0) == 4)) {
         i22 = 94;
         break;
        }
        i35 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i9) | 0;
       } else {
        i22 = 94;
       }
      } while (0);
      if ((i22 | 0) == 94) {
       i35 = HEAP32[i16 >> 2] | 0;
      }
      __ZN7WebCore10RenderView12setSelectionEPNS_12RenderObjectEiS2_iNS0_20SelectionRepaintModeE(i13, i29, i34, i28, i35, 0);
      i22 = 97;
     }
    } while (0);
    do {
     if ((i22 | 0) == 97) {
      i16 = HEAP32[i1 >> 2] | 0;
      if ((i16 | 0) == 0) {
       break;
      }
      i21 = i16 + 8 | 0;
      i16 = i21 | 0;
      i3 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
      HEAP32[i16 >> 2] = i3;
      if ((i3 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    i1 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i1 | 0) != 0) {
      i21 = i1 + 8 | 0;
      i3 = i21 | 0;
      i16 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
      HEAP32[i3 >> 2] = i16;
      if ((i16 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    i1 = HEAP32[i5 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i19 = i1 + 8 | 0;
    i1 = i19 | 0;
    i21 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    HEAP32[i1 >> 2] = i21;
    if ((i21 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   } else {
    __ZN7WebCore10RenderView14clearSelectionEv(i13);
   }
  } while (0);
  __ZN7WebCore16VisibleSelectionD2Ev(i4);
 }
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i14 + 8 | 0;
 i14 = i4 | 0;
 i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i13;
 if ((i13 | 0) >= 1) {
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
function __ZN7WebCore14FrameSelection17modifyMovingRightENS_15TextGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 136 | 0;
 i15 = i4 + 152 | 0;
 i16 = i4 + 168 | 0;
 i17 = i4 + 184 | 0;
 i18 = i4 + 200 | 0;
 i19 = i4 + 216 | 0;
 i20 = i1 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i1 + 4 | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i1 + 8 | 0;
 i23 = i22;
 i24 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = i24 & -8;
 HEAP8[i22] = i24 & 255 & -16;
 i24 = i1 + 12 | 0;
 HEAP32[i24 >> 2] = 1;
 switch (i3 | 0) {
 case 2:
 case 3:
 case 4:
 case 5:
 case 7:
 case 8:
  {
   __ZN7WebCore14FrameSelection19modifyMovingForwardENS_15TextGranularityE(i17, i2, i3);
   i3 = i17 | 0;
   i1 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i20 >> 2] = i1;
   HEAP32[i21 >> 2] = HEAP32[i17 + 4 >> 2];
   i1 = HEAP32[i17 + 8 >> 2] | 0;
   i3 = HEAP32[i23 >> 2] & -8 | i1 & 7;
   HEAP32[i23 >> 2] = i3;
   HEAP8[i22] = i3 & 255 & -9 | i1 & 8;
   HEAP32[i24 >> 2] = HEAP32[i17 + 12 >> 2];
   STACKTOP = i4;
   return;
  }
 case 1:
  {
   i17 = HEAP32[i2 + 24 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i25 = 0;
   } else {
    __ZNK7WebCore6Editor8behaviorEv(i13, HEAP32[i17 + 464 >> 2] | 0);
    i25 = (HEAP32[i13 >> 2] | 0) == 1;
   }
   i13 = i16 | 0;
   i17 = HEAP32[i2 + 44 >> 2] | 0;
   HEAP32[i13 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i1 = i17 + 8 | 0;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   }
   HEAP32[i16 + 4 >> 2] = HEAP32[i2 + 48 >> 2];
   i1 = HEAP32[i2 + 52 >> 2] | 0;
   i17 = i16 + 8 | 0;
   i3 = i17;
   i26 = HEAP32[i3 >> 2] & -8 | i1 & 7;
   HEAP32[i3 >> 2] = i26;
   HEAP8[i17] = i26 & 255 & -9 | i1 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i16, HEAP32[i2 + 80 >> 2] | 0);
   __ZN7WebCore17rightWordPositionERKNS_15VisiblePositionEb(i14, i15, i25);
   i25 = i14 | 0;
   i16 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = 0;
   HEAP32[i20 >> 2] = i16;
   HEAP32[i21 >> 2] = HEAP32[i14 + 4 >> 2];
   i16 = HEAP32[i14 + 8 >> 2] | 0;
   i25 = HEAP32[i23 >> 2] & -8 | i16 & 7;
   HEAP32[i23 >> 2] = i25;
   HEAP8[i22] = i25 & 255 & -9 | i16 & 8;
   HEAP32[i24 >> 2] = HEAP32[i14 + 12 >> 2];
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 + 8 | 0;
     i16 = i15 | 0;
     i25 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i25;
     if ((i25 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i13 = i14 + 8 | 0;
   i14 = i13 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 0:
  {
   if ((HEAP32[i2 + 84 >> 2] | 0) != 2) {
    i13 = i12 | 0;
    i15 = HEAP32[i2 + 44 >> 2] | 0;
    HEAP32[i13 >> 2] = i15;
    if ((i15 | 0) == 0) {
     i14 = i12 + 8 | 0;
     i27 = 0;
     i28 = i14;
     i29 = i14;
    } else {
     i14 = i15 + 8 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     i14 = i12 + 8 | 0;
     i15 = i14;
     i27 = HEAP32[i15 >> 2] & -8;
     i28 = i14;
     i29 = i15;
    }
    HEAP32[i12 + 4 >> 2] = HEAP32[i2 + 48 >> 2];
    i15 = HEAP32[i2 + 52 >> 2] | 0;
    i14 = i27 | i15 & 7;
    HEAP32[i29 >> 2] = i14;
    HEAP8[i28] = i14 & 255 & -9 | i15 & 8;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i12, HEAP32[i2 + 80 >> 2] | 0);
    __ZNK7WebCore15VisiblePosition5rightEb(i10, i11, 1);
    i12 = i10 | 0;
    i15 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    HEAP32[i20 >> 2] = i15;
    HEAP32[i21 >> 2] = HEAP32[i10 + 4 >> 2];
    i15 = HEAP32[i10 + 8 >> 2] | 0;
    i12 = HEAP32[i23 >> 2] & -8 | i15 & 7;
    HEAP32[i23 >> 2] = i12;
    HEAP8[i22] = i12 & 255 & -9 | i15 & 8;
    HEAP32[i24 >> 2] = HEAP32[i10 + 12 >> 2];
    i10 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i11 = i10 + 8 | 0;
      i15 = i11 | 0;
      i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
      HEAP32[i15 >> 2] = i12;
      if ((i12 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
     }
    } while (0);
    i10 = HEAP32[i13 >> 2] | 0;
    if ((i10 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i13 = i10 + 8 | 0;
    i10 = i13 | 0;
    i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    HEAP32[i10 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    STACKTOP = i4;
    return;
   }
   if ((__ZN7WebCore14FrameSelection20directionOfSelectionEv(i2) | 0) == 1) {
    i13 = i7 | 0;
    i11 = HEAP32[i2 + 68 >> 2] | 0;
    HEAP32[i13 >> 2] = i11;
    if ((i11 | 0) == 0) {
     i10 = i7 + 8 | 0;
     i30 = 0;
     i31 = i10;
     i32 = i10;
    } else {
     i10 = i11 + 8 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
     i10 = i7 + 8 | 0;
     i11 = i10;
     i30 = HEAP32[i11 >> 2] & -8;
     i31 = i10;
     i32 = i11;
    }
    HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 72 >> 2];
    i11 = HEAP32[i2 + 76 >> 2] | 0;
    i10 = i30 | i11 & 7;
    HEAP32[i32 >> 2] = i10;
    HEAP8[i31] = i10 & 255 & -9 | i11 & 8;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i6, i7, HEAP32[i2 + 80 >> 2] | 0);
    i7 = i6 | 0;
    i11 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i20 >> 2] = i11;
    HEAP32[i21 >> 2] = HEAP32[i6 + 4 >> 2];
    i11 = HEAP32[i6 + 8 >> 2] | 0;
    i7 = HEAP32[i23 >> 2] & -8 | i11 & 7;
    HEAP32[i23 >> 2] = i7;
    HEAP8[i22] = i7 & 255 & -9 | i11 & 8;
    HEAP32[i24 >> 2] = HEAP32[i6 + 12 >> 2];
    i6 = HEAP32[i13 >> 2] | 0;
    if ((i6 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i13 = i6 + 8 | 0;
    i6 = i13 | 0;
    i11 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    HEAP32[i6 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    STACKTOP = i4;
    return;
   } else {
    i13 = i9 | 0;
    i11 = HEAP32[i2 + 56 >> 2] | 0;
    HEAP32[i13 >> 2] = i11;
    if ((i11 | 0) == 0) {
     i6 = i9 + 8 | 0;
     i33 = 0;
     i34 = i6;
     i35 = i6;
    } else {
     i6 = i11 + 8 | 0;
     HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
     i6 = i9 + 8 | 0;
     i11 = i6;
     i33 = HEAP32[i11 >> 2] & -8;
     i34 = i6;
     i35 = i11;
    }
    HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 60 >> 2];
    i11 = HEAP32[i2 + 64 >> 2] | 0;
    i6 = i33 | i11 & 7;
    HEAP32[i35 >> 2] = i6;
    HEAP8[i34] = i6 & 255 & -9 | i11 & 8;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, HEAP32[i2 + 80 >> 2] | 0);
    i9 = i8 | 0;
    i11 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i20 >> 2] = i11;
    HEAP32[i21 >> 2] = HEAP32[i8 + 4 >> 2];
    i11 = HEAP32[i8 + 8 >> 2] | 0;
    i9 = HEAP32[i23 >> 2] & -8 | i11 & 7;
    HEAP32[i23 >> 2] = i9;
    HEAP8[i22] = i9 & 255 & -9 | i11 & 8;
    HEAP32[i24 >> 2] = HEAP32[i8 + 12 >> 2];
    i8 = HEAP32[i13 >> 2] | 0;
    if ((i8 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i13 = i8 + 8 | 0;
    i8 = i13 | 0;
    i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    HEAP32[i8 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 6:
  {
   i13 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i13 | 0) == 0) {
     i36 = 47;
    } else {
     if ((HEAP32[(HEAP32[i13 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i36 = 47;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i37 = 1;
     } else {
      i37 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i2 + 56 | 0, i37);
    }
   } while (0);
   do {
    if ((i36 | 0) == 47) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i38 = 1;
      } else {
       i38 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i2 + 56 | 0, i38);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i39 = 0;
      } else {
       i39 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i2 + 68 | 0, i39);
      break;
     }
    }
   } while (0);
   i39 = i5 | 0;
   i38 = HEAP32[i2 + 44 >> 2] | 0;
   HEAP32[i39 >> 2] = i38;
   if ((i38 | 0) == 0) {
    i36 = i5 + 8 | 0;
    i40 = 0;
    i41 = i36;
    i42 = i36;
   } else {
    i36 = i38 + 8 | 0;
    HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
    i36 = i5 + 8 | 0;
    i38 = i36;
    i40 = HEAP32[i38 >> 2] & -8;
    i41 = i36;
    i42 = i38;
   }
   HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 48 >> 2];
   i38 = HEAP32[i2 + 52 >> 2] | 0;
   i2 = i38 & 7 | i40;
   HEAP32[i42 >> 2] = i2;
   HEAP8[i41] = i2 & 255 & -9 | i38 & 8;
   i38 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i5) | 0;
   i5 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i39 = i5 + 8 | 0;
     i2 = i39 | 0;
     i41 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     HEAP32[i2 >> 2] = i41;
     if ((i41 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore19rightBoundaryOfLineERKNS_15VisiblePositionENS_13TextDirectionE(i18, i19, i38);
   i38 = i18 | 0;
   i5 = HEAP32[i38 >> 2] | 0;
   HEAP32[i38 >> 2] = 0;
   HEAP32[i20 >> 2] = i5;
   HEAP32[i21 >> 2] = HEAP32[i18 + 4 >> 2];
   i21 = HEAP32[i18 + 8 >> 2] | 0;
   i5 = HEAP32[i23 >> 2] & -8 | i21 & 7;
   HEAP32[i23 >> 2] = i5;
   HEAP8[i22] = i5 & 255 & -9 | i21 & 8;
   HEAP32[i24 >> 2] = HEAP32[i18 + 12 >> 2];
   i18 = HEAP32[i19 >> 2] | 0;
   if ((i18 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i19 = i18 + 8 | 0;
   i18 = i19 | 0;
   i24 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 default:
  {
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore14FrameSelection16modifyMovingLeftENS_15TextGranularityE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 96 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 128 | 0;
 i14 = i4 + 136 | 0;
 i15 = i4 + 152 | 0;
 i16 = i4 + 168 | 0;
 i17 = i4 + 184 | 0;
 i18 = i4 + 200 | 0;
 i19 = i4 + 216 | 0;
 i20 = i1 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i1 + 4 | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i1 + 8 | 0;
 i23 = i22;
 i24 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = i24 & -8;
 HEAP8[i22] = i24 & 255 & -16;
 i24 = i1 + 12 | 0;
 HEAP32[i24 >> 2] = 1;
 switch (i3 | 0) {
 case 0:
  {
   if ((HEAP32[i2 + 84 >> 2] | 0) != 2) {
    i1 = i12 | 0;
    i25 = HEAP32[i2 + 44 >> 2] | 0;
    HEAP32[i1 >> 2] = i25;
    if ((i25 | 0) == 0) {
     i26 = i12 + 8 | 0;
     i27 = 0;
     i28 = i26;
     i29 = i26;
    } else {
     i26 = i25 + 8 | 0;
     HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
     i26 = i12 + 8 | 0;
     i25 = i26;
     i27 = HEAP32[i25 >> 2] & -8;
     i28 = i26;
     i29 = i25;
    }
    HEAP32[i12 + 4 >> 2] = HEAP32[i2 + 48 >> 2];
    i25 = HEAP32[i2 + 52 >> 2] | 0;
    i26 = i27 | i25 & 7;
    HEAP32[i29 >> 2] = i26;
    HEAP8[i28] = i26 & 255 & -9 | i25 & 8;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i12, HEAP32[i2 + 80 >> 2] | 0);
    __ZNK7WebCore15VisiblePosition4leftEb(i10, i11, 1);
    i12 = i10 | 0;
    i25 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    HEAP32[i20 >> 2] = i25;
    HEAP32[i21 >> 2] = HEAP32[i10 + 4 >> 2];
    i25 = HEAP32[i10 + 8 >> 2] | 0;
    i12 = HEAP32[i23 >> 2] & -8 | i25 & 7;
    HEAP32[i23 >> 2] = i12;
    HEAP8[i22] = i12 & 255 & -9 | i25 & 8;
    HEAP32[i24 >> 2] = HEAP32[i10 + 12 >> 2];
    i10 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i11 = i10 + 8 | 0;
      i25 = i11 | 0;
      i12 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i12;
      if ((i12 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
     }
    } while (0);
    i10 = HEAP32[i1 >> 2] | 0;
    if ((i10 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i1 = i10 + 8 | 0;
    i10 = i1 | 0;
    i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    HEAP32[i10 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
    STACKTOP = i4;
    return;
   }
   if ((__ZN7WebCore14FrameSelection20directionOfSelectionEv(i2) | 0) == 1) {
    i1 = i7 | 0;
    i11 = HEAP32[i2 + 56 >> 2] | 0;
    HEAP32[i1 >> 2] = i11;
    if ((i11 | 0) == 0) {
     i10 = i7 + 8 | 0;
     i30 = 0;
     i31 = i10;
     i32 = i10;
    } else {
     i10 = i11 + 8 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
     i10 = i7 + 8 | 0;
     i11 = i10;
     i30 = HEAP32[i11 >> 2] & -8;
     i31 = i10;
     i32 = i11;
    }
    HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 60 >> 2];
    i11 = HEAP32[i2 + 64 >> 2] | 0;
    i10 = i30 | i11 & 7;
    HEAP32[i32 >> 2] = i10;
    HEAP8[i31] = i10 & 255 & -9 | i11 & 8;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i6, i7, HEAP32[i2 + 80 >> 2] | 0);
    i7 = i6 | 0;
    i11 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i20 >> 2] = i11;
    HEAP32[i21 >> 2] = HEAP32[i6 + 4 >> 2];
    i11 = HEAP32[i6 + 8 >> 2] | 0;
    i7 = HEAP32[i23 >> 2] & -8 | i11 & 7;
    HEAP32[i23 >> 2] = i7;
    HEAP8[i22] = i7 & 255 & -9 | i11 & 8;
    HEAP32[i24 >> 2] = HEAP32[i6 + 12 >> 2];
    i6 = HEAP32[i1 >> 2] | 0;
    if ((i6 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i1 = i6 + 8 | 0;
    i6 = i1 | 0;
    i11 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    HEAP32[i6 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
    STACKTOP = i4;
    return;
   } else {
    i1 = i9 | 0;
    i11 = HEAP32[i2 + 68 >> 2] | 0;
    HEAP32[i1 >> 2] = i11;
    if ((i11 | 0) == 0) {
     i6 = i9 + 8 | 0;
     i33 = 0;
     i34 = i6;
     i35 = i6;
    } else {
     i6 = i11 + 8 | 0;
     HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
     i6 = i9 + 8 | 0;
     i11 = i6;
     i33 = HEAP32[i11 >> 2] & -8;
     i34 = i6;
     i35 = i11;
    }
    HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 72 >> 2];
    i11 = HEAP32[i2 + 76 >> 2] | 0;
    i6 = i33 | i11 & 7;
    HEAP32[i35 >> 2] = i6;
    HEAP8[i34] = i6 & 255 & -9 | i11 & 8;
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, HEAP32[i2 + 80 >> 2] | 0);
    i9 = i8 | 0;
    i11 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i20 >> 2] = i11;
    HEAP32[i21 >> 2] = HEAP32[i8 + 4 >> 2];
    i11 = HEAP32[i8 + 8 >> 2] | 0;
    i9 = HEAP32[i23 >> 2] & -8 | i11 & 7;
    HEAP32[i23 >> 2] = i9;
    HEAP8[i22] = i9 & 255 & -9 | i11 & 8;
    HEAP32[i24 >> 2] = HEAP32[i8 + 12 >> 2];
    i8 = HEAP32[i1 >> 2] | 0;
    if ((i8 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    i1 = i8 + 8 | 0;
    i8 = i1 | 0;
    i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    HEAP32[i8 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     STACKTOP = i4;
     return;
    }
    if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
    STACKTOP = i4;
    return;
   }
   break;
  }
 case 1:
  {
   i1 = HEAP32[i2 + 24 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i36 = 0;
   } else {
    __ZNK7WebCore6Editor8behaviorEv(i13, HEAP32[i1 + 464 >> 2] | 0);
    i36 = (HEAP32[i13 >> 2] | 0) == 1;
   }
   i13 = i16 | 0;
   i1 = HEAP32[i2 + 44 >> 2] | 0;
   HEAP32[i13 >> 2] = i1;
   if ((i1 | 0) != 0) {
    i11 = i1 + 8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   HEAP32[i16 + 4 >> 2] = HEAP32[i2 + 48 >> 2];
   i11 = HEAP32[i2 + 52 >> 2] | 0;
   i1 = i16 + 8 | 0;
   i8 = i1;
   i9 = HEAP32[i8 >> 2] & -8 | i11 & 7;
   HEAP32[i8 >> 2] = i9;
   HEAP8[i1] = i9 & 255 & -9 | i11 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i15, i16, HEAP32[i2 + 80 >> 2] | 0);
   __ZN7WebCore16leftWordPositionERKNS_15VisiblePositionEb(i14, i15, i36);
   i36 = i14 | 0;
   i16 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = 0;
   HEAP32[i20 >> 2] = i16;
   HEAP32[i21 >> 2] = HEAP32[i14 + 4 >> 2];
   i16 = HEAP32[i14 + 8 >> 2] | 0;
   i36 = HEAP32[i23 >> 2] & -8 | i16 & 7;
   HEAP32[i23 >> 2] = i36;
   HEAP8[i22] = i36 & 255 & -9 | i16 & 8;
   HEAP32[i24 >> 2] = HEAP32[i14 + 12 >> 2];
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 + 8 | 0;
     i16 = i15 | 0;
     i36 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i36;
     if ((i36 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i13 = i14 + 8 | 0;
   i14 = i13 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 case 2:
 case 3:
 case 4:
 case 5:
 case 7:
 case 8:
  {
   __ZN7WebCore14FrameSelection20modifyMovingBackwardENS_15TextGranularityE(i17, i2, i3);
   i3 = i17 | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   HEAP32[i20 >> 2] = i13;
   HEAP32[i21 >> 2] = HEAP32[i17 + 4 >> 2];
   i13 = HEAP32[i17 + 8 >> 2] | 0;
   i3 = HEAP32[i23 >> 2] & -8 | i13 & 7;
   HEAP32[i23 >> 2] = i3;
   HEAP8[i22] = i3 & 255 & -9 | i13 & 8;
   HEAP32[i24 >> 2] = HEAP32[i17 + 12 >> 2];
   STACKTOP = i4;
   return;
  }
 case 6:
  {
   i17 = HEAP32[i2 + 24 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i37 = 47;
    } else {
     if ((HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
      i37 = 47;
      break;
     }
     if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
      i38 = 1;
     } else {
      i38 = HEAP32[i2 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i2 + 56 | 0, i38);
    }
   } while (0);
   do {
    if ((i37 | 0) == 47) {
     if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i39 = 1;
      } else {
       i39 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i2 + 56 | 0, i39);
      break;
     } else {
      if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
       i40 = 0;
      } else {
       i40 = HEAP32[i2 + 80 >> 2] | 0;
      }
      __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i19, i2 + 68 | 0, i40);
      break;
     }
    }
   } while (0);
   i40 = i5 | 0;
   i39 = HEAP32[i2 + 44 >> 2] | 0;
   HEAP32[i40 >> 2] = i39;
   if ((i39 | 0) == 0) {
    i37 = i5 + 8 | 0;
    i41 = 0;
    i42 = i37;
    i43 = i37;
   } else {
    i37 = i39 + 8 | 0;
    HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
    i37 = i5 + 8 | 0;
    i39 = i37;
    i41 = HEAP32[i39 >> 2] & -8;
    i42 = i37;
    i43 = i39;
   }
   HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 48 >> 2];
   i39 = HEAP32[i2 + 52 >> 2] | 0;
   i2 = i39 & 7 | i41;
   HEAP32[i43 >> 2] = i2;
   HEAP8[i42] = i2 & 255 & -9 | i39 & 8;
   i39 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i5) | 0;
   i5 = HEAP32[i40 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i40 = i5 + 8 | 0;
     i2 = i40 | 0;
     i42 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     HEAP32[i2 >> 2] = i42;
     if ((i42 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore18leftBoundaryOfLineERKNS_15VisiblePositionENS_13TextDirectionE(i18, i19, i39);
   i39 = i18 | 0;
   i5 = HEAP32[i39 >> 2] | 0;
   HEAP32[i39 >> 2] = 0;
   HEAP32[i20 >> 2] = i5;
   HEAP32[i21 >> 2] = HEAP32[i18 + 4 >> 2];
   i21 = HEAP32[i18 + 8 >> 2] | 0;
   i5 = HEAP32[i23 >> 2] & -8 | i21 & 7;
   HEAP32[i23 >> 2] = i5;
   HEAP8[i22] = i5 & 255 & -9 | i21 & 8;
   HEAP32[i24 >> 2] = HEAP32[i18 + 12 >> 2];
   i18 = HEAP32[i19 >> 2] | 0;
   if ((i18 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i19 = i18 + 8 | 0;
   i18 = i19 | 0;
   i24 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   STACKTOP = i4;
   return;
  }
 default:
  {
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore14FrameSelection25respondToNodeModificationEPNS_4NodeEbbbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i7 + 32 | 0;
 i11 = i7 + 48 | 0;
 i12 = i7 + 64 | 0;
 i13 = i7 + 80 | 0;
 i14 = i7 + 96 | 0;
 i15 = i7 + 104 | 0;
 i16 = i7 + 112 | 0;
 do {
  if (i5 | i6) {
   i17 = i1 + 32 | 0;
   i18 = i8 | 0;
   i19 = HEAP32[i1 + 56 >> 2] | 0;
   HEAP32[i18 >> 2] = i19;
   if ((i19 | 0) == 0) {
    i20 = i8 + 8 | 0;
    i21 = 0;
    i22 = i20;
    i23 = i20;
   } else {
    i20 = i19 + 8 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    i20 = i8 + 8 | 0;
    i19 = i20;
    i21 = HEAP32[i19 >> 2] & -8;
    i22 = i20;
    i23 = i19;
   }
   HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
   i19 = HEAP32[i1 + 64 >> 2] | 0;
   i20 = i21 | i19 & 7;
   HEAP32[i23 >> 2] = i20;
   HEAP8[i22] = i20 & 255 & -9 | i19 & 8;
   i19 = i9 | 0;
   i20 = HEAP32[i1 + 68 >> 2] | 0;
   HEAP32[i19 >> 2] = i20;
   if ((i20 | 0) != 0) {
    i24 = i20 + 8 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   }
   HEAP32[i9 + 4 >> 2] = HEAP32[i1 + 72 >> 2];
   i24 = HEAP32[i1 + 76 >> 2] | 0;
   i20 = i9 + 8 | 0;
   i25 = i20;
   i26 = HEAP32[i25 >> 2] & -8 | i24 & 7;
   HEAP32[i25 >> 2] = i26;
   HEAP8[i20] = i26 & 255 & -9 | i24 & 8;
   if (i5) {
    __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i8, i2);
   }
   if (i6) {
    __ZN7WebCore28updatePositionForNodeRemovalERNS_8PositionEPNS_4NodeE(i9, i2);
   }
   do {
    if ((HEAP32[i18 >> 2] | 0) == 0) {
     i27 = 1;
     i28 = 16;
    } else {
     if ((HEAP32[i19 >> 2] | 0) == 0) {
      i29 = 1;
      break;
     }
     if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
      __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i17, i9, i8);
      i27 = 0;
      i28 = 16;
      break;
     } else {
      __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i17, i8, i9);
      i27 = 0;
      i28 = 16;
      break;
     }
    }
   } while (0);
   do {
    if ((i28 | 0) == 16) {
     i17 = HEAP32[i19 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i29 = i27;
      break;
     }
     i24 = i17 + 8 | 0;
     i17 = i24 | 0;
     i26 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      i29 = i27;
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      i29 = i27;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
     i29 = i27;
    }
   } while (0);
   i19 = HEAP32[i18 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i30 = i29;
    break;
   }
   i24 = i19 + 8 | 0;
   i19 = i24 | 0;
   i26 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i26;
   if ((i26 | 0) >= 1) {
    i30 = i29;
    break;
   }
   if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
    i30 = i29;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
   i30 = i29;
  } else {
   i24 = i1 + 32 | 0;
   if (!(i3 | i4)) {
    __ZNK7WebCore16VisibleSelection10firstRangeEv(i14, i24);
    i26 = i14 | 0;
    i19 = HEAP32[i26 >> 2] | 0;
    HEAP32[i26 >> 2] = 0;
    if ((i19 | 0) == 0) {
     STACKTOP = i7;
     return;
    }
    HEAP32[i15 >> 2] = 0;
    i26 = __ZNK7WebCore5Range11compareNodeEPNS_4NodeERi(i19, i2, i15) | 0;
    if ((HEAP32[i15 >> 2] | 0) == 0) {
     i31 = (i26 - 2 | 0) >>> 0 < 2 >>> 0;
    } else {
     i31 = 0;
    }
    i26 = i19 | 0;
    i17 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) == 0) {
     __ZN7WebCore5RangeD1Ev(i19);
     __ZN3WTF8fastFreeEPv(i19);
     if (i31) {
      i30 = 0;
      break;
     }
     STACKTOP = i7;
     return;
    } else {
     HEAP32[i26 >> 2] = i17;
     if (i31) {
      i30 = 0;
      break;
     }
     STACKTOP = i7;
     return;
    }
   }
   if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
    i17 = i12 | 0;
    i26 = HEAP32[i1 + 68 >> 2] | 0;
    HEAP32[i17 >> 2] = i26;
    if ((i26 | 0) == 0) {
     i19 = i12 + 8 | 0;
     i32 = 0;
     i33 = i19;
     i34 = i19;
    } else {
     i19 = i26 + 8 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
     i19 = i12 + 8 | 0;
     i26 = i19;
     i32 = HEAP32[i26 >> 2] & -8;
     i33 = i19;
     i34 = i26;
    }
    HEAP32[i12 + 4 >> 2] = HEAP32[i1 + 72 >> 2];
    i26 = HEAP32[i1 + 76 >> 2] | 0;
    i19 = i32 | i26 & 7;
    HEAP32[i34 >> 2] = i19;
    HEAP8[i33] = i19 & 255 & -9 | i26 & 8;
    i26 = i13 | 0;
    i19 = HEAP32[i1 + 56 >> 2] | 0;
    HEAP32[i26 >> 2] = i19;
    if ((i19 | 0) != 0) {
     i20 = i19 + 8 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    }
    HEAP32[i13 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
    i20 = HEAP32[i1 + 64 >> 2] | 0;
    i19 = i13 + 8 | 0;
    i25 = i19;
    i35 = HEAP32[i25 >> 2] & -8 | i20 & 7;
    HEAP32[i25 >> 2] = i35;
    HEAP8[i19] = i35 & 255 & -9 | i20 & 8;
    __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i24, i12, i13);
    i20 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i20 | 0) != 0) {
      i26 = i20 + 8 | 0;
      i35 = i26 | 0;
      i19 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
      HEAP32[i35 >> 2] = i19;
      if ((i19 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
     }
    } while (0);
    i20 = HEAP32[i17 >> 2] | 0;
    if ((i20 | 0) == 0) {
     STACKTOP = i7;
     return;
    }
    i18 = i20 + 8 | 0;
    i20 = i18 | 0;
    i26 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
    HEAP32[i20 >> 2] = i26;
    if ((i26 | 0) >= 1) {
     STACKTOP = i7;
     return;
    }
    if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
     STACKTOP = i7;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    STACKTOP = i7;
    return;
   } else {
    i18 = i10 | 0;
    i26 = HEAP32[i1 + 56 >> 2] | 0;
    HEAP32[i18 >> 2] = i26;
    if ((i26 | 0) == 0) {
     i20 = i10 + 8 | 0;
     i36 = 0;
     i37 = i20;
     i38 = i20;
    } else {
     i20 = i26 + 8 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
     i20 = i10 + 8 | 0;
     i26 = i20;
     i36 = HEAP32[i26 >> 2] & -8;
     i37 = i20;
     i38 = i26;
    }
    HEAP32[i10 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
    i26 = HEAP32[i1 + 64 >> 2] | 0;
    i20 = i36 | i26 & 7;
    HEAP32[i38 >> 2] = i20;
    HEAP8[i37] = i20 & 255 & -9 | i26 & 8;
    i26 = i11 | 0;
    i20 = HEAP32[i1 + 68 >> 2] | 0;
    HEAP32[i26 >> 2] = i20;
    if ((i20 | 0) != 0) {
     i19 = i20 + 8 | 0;
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    }
    HEAP32[i11 + 4 >> 2] = HEAP32[i1 + 72 >> 2];
    i19 = HEAP32[i1 + 76 >> 2] | 0;
    i20 = i11 + 8 | 0;
    i35 = i20;
    i25 = HEAP32[i35 >> 2] & -8 | i19 & 7;
    HEAP32[i35 >> 2] = i25;
    HEAP8[i20] = i25 & 255 & -9 | i19 & 8;
    __ZN7WebCore16VisibleSelection20setWithoutValidationERKNS_8PositionES3_(i24, i10, i11);
    i19 = HEAP32[i26 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i26 = i19 + 8 | 0;
      i25 = i26 | 0;
      i20 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
      HEAP32[i25 >> 2] = i20;
      if ((i20 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
     }
    } while (0);
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == 0) {
     STACKTOP = i7;
     return;
    }
    i24 = i19 + 8 | 0;
    i19 = i24 | 0;
    i17 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
    HEAP32[i19 >> 2] = i17;
    if ((i17 | 0) >= 1) {
     STACKTOP = i7;
     return;
    }
    if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
     STACKTOP = i7;
     return;
    }
    __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    STACKTOP = i7;
    return;
   }
  }
 } while (0);
 i11 = HEAP32[i1 + 56 >> 2] | 0;
 i10 = (i11 | 0) == 0;
 if (!i10) {
  i37 = i11 + 8 | 0;
  HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
 }
 i37 = HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i38 = i37 + 8 | 0;
 HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
 __ZN7WebCore8Document19updateStyleIfNeededEv(i37);
 i38 = HEAP32[i37 + 1584 >> 2] | 0;
 if ((i38 | 0) != 0) {
  __ZN7WebCore10RenderView14clearSelectionEv(i38);
 }
 i38 = i37 + 8 | 0;
 i37 = i38 - 8 | 0;
 i36 = i38 | 0;
 i13 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
 HEAP32[i36 >> 2] = i13;
 do {
  if ((i13 | 0) < 1) {
   if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i37);
  }
 } while (0);
 do {
  if (i10) {
   i28 = 69;
  } else {
   i37 = i11 + 8 | 0;
   i38 = i37 | 0;
   i13 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
   HEAP32[i38 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    i28 = 69;
    break;
   }
   if ((HEAP32[i37 + 8 >> 2] | 0) != 0) {
    i28 = 69;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i37 - 8 | 0);
   if (i30) {
    break;
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 do {
  if ((i28 | 0) == 69) {
   if (i30) {
    break;
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionC1Ev(i16);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i16, 16, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i16);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i7 = i6 | 0;
 i8 = i6 + 64 | 0;
 i9 = i6 + 72 | 0;
 i10 = i6 + 136 | 0;
 i11 = i6 + 200 | 0;
 i12 = i6 + 216 | 0;
 i13 = i6 + 224 | 0;
 i14 = (i3 & 2 | 0) == 0;
 i15 = (i3 & 4 | 0) == 0;
 i16 = i3 & 1;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i9, i2);
 i2 = i1 + 24 | 0;
 i17 = HEAP32[i2 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i18 = 3;
 } else {
  __ZNK7WebCore6Editor8behaviorEv(i8, HEAP32[i17 + 464 >> 2] | 0);
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   i18 = 3;
  }
 }
 if ((i18 | 0) == 3) {
  i8 = i9 + 56 | 0;
  HEAP8[i8] = HEAP8[i8] | 2;
 }
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  __ZN7WebCore16VisibleSelectionaSERKS0_(i1 + 32 | 0, i9) | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i9);
  STACKTOP = i6;
  return;
 }
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i17 = i8 + 8 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   i20 = i8 + 8 | 0;
   i21 = i20 - 8 | 0;
   i22 = i20 | 0;
   HEAP32[i22 >> 2] = i19;
   do {
    if ((i19 | 0) < 1) {
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21);
    }
   } while (0);
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   i19 = HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0;
   i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i23;
   do {
    if ((i23 | 0) < 1) {
     if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21);
    }
   } while (0);
   i21 = i19 + 332 | 0;
   i20 = HEAP32[i21 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i23 = HEAP32[i2 >> 2] | 0;
   if ((i20 | 0) == (i23 | 0)) {
    break;
   }
   if ((i19 | 0) == (HEAP32[i23 + 456 >> 2] | 0)) {
    break;
   }
   i23 = i20 + 4 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(HEAP32[(HEAP32[i21 >> 2] | 0) + 468 >> 2] | 0, i9, i3, i4, i5);
   i21 = i20 + 4 | 0;
   i20 = i21 | 0;
   L23 : do {
    if ((HEAP32[i20 >> 2] | 0) == 1) {
     L25 : do {
      if ((HEAP32[i1 + 84 >> 2] | 0) != 0) {
       i23 = HEAP32[i1 + 56 >> 2] | 0;
       i22 = (i23 | 0) == 0;
       do {
        if (i22) {
         i18 = 21;
        } else {
         i17 = i23 + 8 | 0;
         i24 = (HEAP32[i17 >> 2] | 0) + 1 | 0;
         HEAP32[i17 >> 2] = i24;
         if ((HEAP32[i23 + 12 >> 2] & 256 | 0) != 0) {
          i18 = 21;
          break;
         }
         i17 = i23 + 8 | 0;
         i25 = 0;
         i26 = i24;
         i27 = i17;
         i28 = i17 | 0;
         i18 = 27;
        }
       } while (0);
       do {
        if ((i18 | 0) == 21) {
         i17 = HEAP32[i1 + 68 >> 2] | 0;
         do {
          if ((i17 | 0) == 0) {
           i29 = 1;
          } else {
           i24 = HEAP32[i17 + 8 >> 2] | 0;
           i30 = (HEAP32[i17 + 12 >> 2] & 256 | 0) != 0;
           i31 = i17 + 8 | 0;
           HEAP32[i31 >> 2] = i24;
           if ((i24 | 0) >= 1) {
            i29 = i30;
            break;
           }
           if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
            i29 = i30;
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
           i29 = i30;
          }
         } while (0);
         if (i22) {
          i32 = i29;
          break;
         }
         i17 = i23 + 8 | 0;
         i30 = i17 | 0;
         i25 = i29;
         i26 = HEAP32[i30 >> 2] | 0;
         i27 = i17;
         i28 = i30;
         i18 = 27;
        }
       } while (0);
       do {
        if ((i18 | 0) == 27) {
         i23 = i26 - 1 | 0;
         HEAP32[i28 >> 2] = i23;
         if ((i23 | 0) >= 1) {
          i32 = i25;
          break;
         }
         if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
          i32 = i25;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
         if (i25) {
          break L23;
         } else {
          break L25;
         }
        }
       } while (0);
       if (i32) {
        break L23;
       }
      }
     } while (0);
     HEAP32[i1 + 108 >> 2] = 0;
     __ZN7WebCore16VisibleSelectionC1Ev(i7);
     __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i7, 6, 0, 0);
     __ZN7WebCore16VisibleSelectionD2Ev(i7);
    }
   } while (0);
   i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i20 >> 2] = i19;
    __ZN7WebCore16VisibleSelectionD2Ev(i9);
    STACKTOP = i6;
    return;
   }
   i19 = i21 - 4 | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore16VisibleSelectionD2Ev(i9);
    STACKTOP = i6;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 15](i19);
   __ZN7WebCore16VisibleSelectionD2Ev(i9);
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i1 + 108 >> 2] = i5;
 if (!i14) {
  __ZN7WebCore13TypingCommand11closeTypingEPNS_5FrameE(HEAP32[i2 >> 2] | 0);
 }
 do {
  if (!i15) {
   i14 = i1 + 116 | 0;
   i5 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i14 = i5 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i15 = i1 + 32 | 0;
 if (__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i15, i9) | 0) {
  __ZN7WebCore14FrameSelection31notifyRendererOfSelectionChangeENS_14EUserTriggeredE(i1, i16);
  __ZN7WebCore16VisibleSelectionD2Ev(i9);
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i10, i15);
 __ZN7WebCore16VisibleSelectionaSERKS0_(i15, i9) | 0;
 HEAP8[i1 + 16 | 0] = 1;
 do {
  if ((HEAP32[i9 + 52 >> 2] | 0) != 0) {
   if ((i3 & 16 | 0) != 0) {
    break;
   }
   __ZN7WebCore14FrameSelection25setFocusedElementIfNeededEv(i1);
  }
 } while (0);
 if ((i3 & 64 | 0) == 0) {
  __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0);
  __ZN7WebCore14FrameSelection16updateAppearanceEv(i1);
 }
 HEAP32[i1 + 28 >> 2] = -2147483648;
 __ZN7WebCore14FrameSelection41selectFrameElementInParentIfFullySelectedEv(i1);
 __ZN7WebCore14FrameSelection31notifyRendererOfSelectionChangeENS_14EUserTriggeredE(i1, i16);
 __ZN7WebCore6Editor25respondToChangedSelectionERKNS_16VisibleSelectionEj(HEAP32[(HEAP32[i2 >> 2] | 0) + 464 >> 2] | 0, i10, i3);
 if ((i16 | 0) != 0) {
  __ZNK7WebCore6Editor8behaviorEv(i12, HEAP32[(HEAP32[i2 >> 2] | 0) + 464 >> 2] | 0);
  i16 = (i4 | 0) == 1;
  i4 = i11;
  if ((HEAP32[i12 >> 2] | 0) == 0) {
   i12 = i16 ? __ZN7WebCore15ScrollAlignment17alignCenterAlwaysE : __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE;
   HEAP32[i4 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i4 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i4 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
  } else {
   i12 = i16 ? __ZN7WebCore15ScrollAlignment14alignTopAlwaysE : __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE;
   HEAP32[i4 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i4 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i4 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
  }
  __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(i1, i11, 0);
 }
 i11 = HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0;
 i2 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 332 | 0;
 i1 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i1, i2, 0, 0);
 i2 = i13 | 0;
 HEAP32[i2 >> 2] = i1;
 __ZN7WebCore8Document20enqueueDocumentEventEN3WTF10PassRefPtrINS_5EventEEE(i11, i13);
 i13 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i2 = i13 + 8 | 0;
   i11 = i2 | 0;
   i1 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i11 >> 2] = i1;
    break;
   }
   i1 = i2 - 8 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionD2Ev(i10);
 __ZN7WebCore16VisibleSelectionD2Ev(i9);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore14FrameSelection8containsERKNS_11LayoutPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 248 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 120 | 0;
 i7 = i3 + 136 | 0;
 i8 = i3 + 152 | 0;
 i9 = i3 + 168 | 0;
 i10 = i3 + 184 | 0;
 i11 = i3 + 200 | 0;
 i12 = i3 + 216 | 0;
 i13 = i3 + 232 | 0;
 i14 = i1 + 84 | 0;
 if ((HEAP32[i14 >> 2] | 0) != 2) {
  i15 = 0;
  STACKTOP = i3;
  return i15 | 0;
 }
 i16 = (HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 456 >> 2] | 0) + 1584 | 0;
 if ((HEAP32[i16 >> 2] | 0) == 0) {
  i15 = 0;
  STACKTOP = i3;
  return i15 | 0;
 }
 HEAP32[i4 >> 2] = 262;
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i5, i2);
 __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(HEAP32[i16 >> 2] | 0, i4, i5) | 0;
 i4 = HEAP32[i5 + 72 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i17 = 0;
  } else {
   i16 = (HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0;
   i2 = i4 + 32 | 0;
   if (i16) {
    i18 = i2 | 0;
   } else {
    i18 = HEAP32[i2 >> 2] | 0;
   }
   if ((HEAP32[i18 >> 2] | 0) == 0) {
    i17 = 0;
    break;
   }
   if (i16) {
    i19 = i2 | 0;
   } else {
    i19 = HEAP32[i2 >> 2] | 0;
   }
   i2 = HEAP32[i19 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 464 >> 2] & 1](i6, i2, i5 + 88 | 0);
   i2 = i6 | 0;
   if ((HEAP32[i2 >> 2] | 0) == 0) {
    i17 = 0;
    break;
   }
   i16 = i1 + 56 | 0;
   if ((HEAP32[i14 >> 2] | 0) == 2) {
    i20 = 1;
   } else {
    i20 = HEAP32[i1 + 80 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i16, i20);
   i21 = i7 | 0;
   L22 : do {
    if ((HEAP32[i21 >> 2] | 0) == 0) {
     i22 = 0;
    } else {
     i23 = i1 + 68 | 0;
     if ((HEAP32[i14 >> 2] | 0) == 2) {
      i24 = 0;
     } else {
      i24 = HEAP32[i1 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i23, i24);
     i25 = HEAP32[i8 >> 2] | 0;
     i26 = (i25 | 0) == 0;
     do {
      if (!i26) {
       i27 = i25 + 8 | 0;
       i28 = i27 | 0;
       i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       HEAP32[i28 >> 2] = i29;
       if ((i29 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
      }
     } while (0);
     i25 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i25 | 0) == 0) {
       i30 = 25;
      } else {
       i27 = i25 + 8 | 0;
       i29 = i27 | 0;
       i28 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       HEAP32[i29 >> 2] = i28;
       if ((i28 | 0) >= 1) {
        i30 = 25;
        break;
       }
       if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
        i30 = 25;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
       if (i26) {
        i22 = 0;
        break L22;
       }
      }
     } while (0);
     if ((i30 | 0) == 25) {
      if (i26) {
       i22 = 0;
       break;
      }
     }
     if ((HEAP32[i14 >> 2] | 0) == 2) {
      i31 = 1;
     } else {
      i31 = HEAP32[i1 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i10, i16, i31);
     i25 = i9 | 0;
     i27 = i10 | 0;
     i28 = HEAP32[i27 >> 2] | 0;
     HEAP32[i25 >> 2] = i28;
     if ((i28 | 0) == 0) {
      i32 = 0;
     } else {
      i29 = i28 + 8 | 0;
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
      i32 = HEAP32[i27 >> 2] | 0;
     }
     HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
     i27 = HEAP32[i10 + 8 >> 2] | 0;
     i29 = i9 + 8 | 0;
     i28 = i29;
     i33 = HEAP32[i28 >> 2] & -8 | i27 & 7;
     HEAP32[i28 >> 2] = i33;
     HEAP8[i29] = i33 & 255 & -9 | i27 & 8;
     do {
      if ((i32 | 0) != 0) {
       i27 = i32 + 8 | 0;
       i33 = i27 | 0;
       i29 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
       HEAP32[i33 >> 2] = i29;
       if ((i29 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
      }
     } while (0);
     if ((HEAP32[i14 >> 2] | 0) == 2) {
      i34 = 0;
     } else {
      i34 = HEAP32[i1 + 80 >> 2] | 0;
     }
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i12, i23, i34);
     i26 = i11 | 0;
     i27 = i12 | 0;
     i29 = HEAP32[i27 >> 2] | 0;
     HEAP32[i26 >> 2] = i29;
     if ((i29 | 0) == 0) {
      i35 = 0;
     } else {
      i33 = i29 + 8 | 0;
      HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
      i35 = HEAP32[i27 >> 2] | 0;
     }
     HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
     i27 = HEAP32[i12 + 8 >> 2] | 0;
     i33 = i11 + 8 | 0;
     i29 = i33;
     i28 = HEAP32[i29 >> 2] & -8 | i27 & 7;
     HEAP32[i29 >> 2] = i28;
     HEAP8[i33] = i28 & 255 & -9 | i27 & 8;
     do {
      if ((i35 | 0) != 0) {
       i27 = i35 + 8 | 0;
       i28 = i27 | 0;
       i33 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       HEAP32[i28 >> 2] = i33;
       if ((i33 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i27 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i27 - 8 | 0);
      }
     } while (0);
     i23 = i13 | 0;
     i27 = HEAP32[i2 >> 2] | 0;
     HEAP32[i23 >> 2] = i27;
     if ((i27 | 0) != 0) {
      i33 = i27 + 8 | 0;
      HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
     }
     HEAP32[i13 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
     i33 = HEAP32[i6 + 8 >> 2] | 0;
     i27 = i13 + 8 | 0;
     i28 = i27;
     i29 = HEAP32[i28 >> 2] & -8 | i33 & 7;
     HEAP32[i28 >> 2] = i29;
     HEAP8[i27] = i29 & 255 & -9 | i33 & 8;
     if ((__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i9, i13) | 0) < 1) {
      i36 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i13, i11) | 0) < 1;
     } else {
      i36 = 0;
     }
     i33 = HEAP32[i23 >> 2] | 0;
     do {
      if ((i33 | 0) != 0) {
       i23 = i33 + 8 | 0;
       i29 = i23 | 0;
       i27 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       HEAP32[i29 >> 2] = i27;
       if ((i27 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
      }
     } while (0);
     i33 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i33 | 0) != 0) {
       i23 = i33 + 8 | 0;
       i27 = i23 | 0;
       i29 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       HEAP32[i27 >> 2] = i29;
       if ((i29 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i23 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i23 - 8 | 0);
      }
     } while (0);
     i33 = HEAP32[i25 >> 2] | 0;
     if ((i33 | 0) == 0) {
      i22 = i36;
      break;
     }
     i26 = i33 + 8 | 0;
     i33 = i26 | 0;
     i23 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     HEAP32[i33 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      i22 = i36;
      break;
     }
     if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
      i22 = i36;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
     i22 = i36;
    }
   } while (0);
   i16 = HEAP32[i2 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = i22;
    break;
   }
   i21 = i16 + 8 | 0;
   i16 = i21 | 0;
   i26 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i26;
   if ((i26 | 0) >= 1) {
    i17 = i22;
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    i17 = i22;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
   i17 = i22;
  }
 } while (0);
 __ZN7WebCore13HitTestResultD1Ev(i5);
 i15 = i17;
 STACKTOP = i3;
 return i15 | 0;
}
function __ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i4 | 0;
 i9 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i4 + 8 | 0;
  i11 = 0;
  i12 = i10;
  i13 = i10;
 } else {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i4 + 8 | 0;
  i9 = i10;
  i11 = HEAP32[i9 >> 2] & -8;
  i12 = i10;
  i13 = i9;
 }
 i9 = i4 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i1 + 28 >> 2];
 i10 = HEAP32[i1 + 32 >> 2] | 0;
 i14 = i11 | i10 & 7;
 HEAP32[i13 >> 2] = i14;
 HEAP8[i12] = i14 & 255 & -9 | i10 & 8;
 i10 = i5 | 0;
 i14 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i10 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i15 = 0;
 } else {
  i11 = i14 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i15 = HEAP32[i10 >> 2] | 0;
 }
 i11 = i5 + 4 | 0;
 HEAP32[i11 >> 2] = HEAP32[i2 + 28 >> 2];
 i14 = HEAP32[i2 + 32 >> 2] | 0;
 i16 = i5 + 8 | 0;
 i17 = i16;
 i18 = HEAP32[i17 >> 2] & -8 | i14 & 7;
 HEAP32[i17 >> 2] = i18;
 i19 = i18 & 255 & -9 | i14 & 8;
 HEAP8[i16] = i19;
 if ((HEAP32[i8 >> 2] | 0) == (i15 | 0)) {
  do {
   if ((HEAP8[i12] & 8) == 0) {
    i14 = HEAP32[i13 >> 2] & 7;
    if (!((i14 | 0) == 2 | (i14 | 0) == 4)) {
     i20 = 9;
     break;
    }
    i14 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i21 = i14;
    i22 = HEAP8[i16] | 0;
   } else {
    i20 = 9;
   }
  } while (0);
  if ((i20 | 0) == 9) {
   i21 = HEAP32[i9 >> 2] | 0;
   i22 = i19;
  }
  do {
   if ((i22 & 8) == 0) {
    i19 = HEAP32[i17 >> 2] & 7;
    if (!((i19 | 0) == 2 | (i19 | 0) == 4)) {
     i20 = 13;
     break;
    }
    i23 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i20 = 13;
   }
  } while (0);
  if ((i20 | 0) == 13) {
   i23 = HEAP32[i11 >> 2] | 0;
  }
  do {
   if ((i21 | 0) == (i23 | 0)) {
    if (((HEAP32[i17 >> 2] ^ HEAP32[i13 >> 2]) & 7 | 0) != 0) {
     i24 = 0;
     break;
    }
    i11 = i6 | 0;
    i5 = HEAP32[i1 + 36 >> 2] | 0;
    HEAP32[i11 >> 2] = i5;
    if ((i5 | 0) != 0) {
     i22 = i5 + 8 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
    }
    i22 = i6 + 4 | 0;
    HEAP32[i22 >> 2] = HEAP32[i1 + 40 >> 2];
    i5 = HEAP32[i1 + 44 >> 2] | 0;
    i19 = i6 + 8 | 0;
    i9 = i19;
    i16 = HEAP32[i9 >> 2] & -8 | i5 & 7;
    HEAP32[i9 >> 2] = i16;
    HEAP8[i19] = i16 & 255 & -9 | i5 & 8;
    i5 = i7 | 0;
    i16 = HEAP32[i2 + 36 >> 2] | 0;
    HEAP32[i5 >> 2] = i16;
    if ((i16 | 0) == 0) {
     i25 = 0;
    } else {
     i4 = i16 + 8 | 0;
     HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
     i25 = HEAP32[i5 >> 2] | 0;
    }
    i4 = i7 + 4 | 0;
    HEAP32[i4 >> 2] = HEAP32[i2 + 40 >> 2];
    i16 = HEAP32[i2 + 44 >> 2] | 0;
    i12 = i7 + 8 | 0;
    i14 = i12;
    i18 = HEAP32[i14 >> 2] & -8 | i16 & 7;
    HEAP32[i14 >> 2] = i18;
    i26 = i18 & 255 & -9 | i16 & 8;
    HEAP8[i12] = i26;
    do {
     if ((HEAP32[i11 >> 2] | 0) == (i25 | 0)) {
      do {
       if ((HEAP8[i19] & 8) == 0) {
        i16 = HEAP32[i9 >> 2] & 7;
        if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
         i20 = 24;
         break;
        }
        i16 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
        i27 = i16;
        i28 = HEAP8[i12] | 0;
       } else {
        i20 = 24;
       }
      } while (0);
      if ((i20 | 0) == 24) {
       i27 = HEAP32[i22 >> 2] | 0;
       i28 = i26;
      }
      do {
       if ((i28 & 8) == 0) {
        i16 = HEAP32[i14 >> 2] & 7;
        if (!((i16 | 0) == 2 | (i16 | 0) == 4)) {
         i20 = 28;
         break;
        }
        i29 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i7) | 0;
       } else {
        i20 = 28;
       }
      } while (0);
      if ((i20 | 0) == 28) {
       i29 = HEAP32[i4 >> 2] | 0;
      }
      if ((i27 | 0) != (i29 | 0)) {
       i30 = 0;
       break;
      }
      if (((HEAP32[i14 >> 2] ^ HEAP32[i9 >> 2]) & 7 | 0) != 0) {
       i30 = 0;
       break;
      }
      if ((HEAP32[i1 + 48 >> 2] | 0) != (HEAP32[i2 + 48 >> 2] | 0)) {
       i30 = 0;
       break;
      }
      i16 = HEAP8[i1 + 56 | 0] | 0;
      i18 = HEAP8[i2 + 56 | 0] | 0;
      if ((i16 & 1) != 0 ^ (i18 & 1) != 0) {
       i30 = 0;
       break;
      }
      i30 = (i16 & 2) != 0 ^ (i18 & 2) != 0 ^ 1;
     } else {
      i30 = 0;
     }
    } while (0);
    i9 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i14 = i9 + 8 | 0;
      i4 = i14 | 0;
      i26 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      HEAP32[i4 >> 2] = i26;
      if ((i26 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
     }
    } while (0);
    i9 = HEAP32[i11 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i24 = i30;
     break;
    }
    i5 = i9 + 8 | 0;
    i9 = i5 | 0;
    i14 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i14;
    if ((i14 | 0) >= 1) {
     i24 = i30;
     break;
    }
    if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
     i24 = i30;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    i24 = i30;
   } else {
    i24 = 0;
   }
  } while (0);
  i31 = i24;
  i32 = HEAP32[i10 >> 2] | 0;
 } else {
  i31 = 0;
  i32 = i15;
 }
 do {
  if ((i32 | 0) != 0) {
   i15 = i32 + 8 | 0;
   i10 = i15 | 0;
   i24 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 i32 = HEAP32[i8 >> 2] | 0;
 if ((i32 | 0) == 0) {
  STACKTOP = i3;
  return i31 | 0;
 }
 i8 = i32 + 8 | 0;
 i32 = i8 | 0;
 i15 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
 HEAP32[i32 >> 2] = i15;
 if ((i15 | 0) >= 1) {
  STACKTOP = i3;
  return i31 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i31 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i3;
 return i31 | 0;
}
function __ZN7WebCore14FrameSelection41selectFrameElementInParentIfFullySelectedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 64 | 0;
 i8 = i2 + 72 | 0;
 i9 = i2 + 88 | 0;
 i10 = i2 + 104 | 0;
 i11 = i2 + 112 | 0;
 i12 = i2 + 176 | 0;
 i13 = i1 + 24 | 0;
 i14 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i13 >> 2] | 0) + 40 | 0) | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i15 = HEAP32[(HEAP32[i13 >> 2] | 0) + 32 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i16 = i1 + 84 | 0;
 if ((HEAP32[i16 >> 2] | 0) != 2) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i3, i1 + 56 | 0, 1);
 i17 = __ZN7WebCore17isStartOfDocumentERKNS_15VisiblePositionE(i3) | 0;
 i18 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i3 = i18 + 8 | 0;
   i19 = i3 | 0;
   i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 if (!i17) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i16 >> 2] | 0) == 2) {
  i21 = 0;
 } else {
  i21 = HEAP32[i1 + 80 >> 2] | 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i4, i1 + 68 | 0, i21);
 i21 = __ZN7WebCore15isEndOfDocumentERKNS_15VisiblePositionE(i4) | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 + 8 | 0;
   i16 = i4 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 if (!i21) {
  STACKTOP = i2;
  return;
 }
 i21 = HEAP32[(HEAP32[i13 >> 2] | 0) + 448 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i13 = HEAP32[i21 + 16 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i13 | 0;
 if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i1, 0, 1) | 0)) {
  STACKTOP = i2;
  return;
 }
 i4 = __ZNK7WebCore4Node9nodeIndexEv(i21 | 0) | 0;
 i21 = i7 | 0;
 HEAP32[i21 >> 2] = i1;
 i17 = i13 + 8 | 0;
 HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i6, i7, i4, 0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i6, 1);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 8 | 0;
   i17 = i6 | 0;
   i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i21 = i7 + 8 | 0;
   i6 = i21 | 0;
   i16 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 i7 = i10 | 0;
 HEAP32[i7 >> 2] = i1;
 i1 = i13 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i9, i10, i4 + 1 | 0, 0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i9, 0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 8 | 0;
   i10 = i9 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i9 = i7 | 0;
   i1 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i11, i5, i8, 0);
 i4 = i14 + 468 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 if (__ZNK7WebCore6Editor21shouldChangeSelectionERKNS_16VisibleSelectionES3_NS_9EAffinityEb(HEAP32[(HEAP32[i7 + 24 >> 2] | 0) + 464 >> 2] | 0, i7 + 32 | 0, i11, HEAP32[i11 + 48 >> 2] | 0, 0) | 0) {
  i7 = HEAP32[i15 + 32 >> 2] | 0;
  i15 = i12 | 0;
  HEAP32[i15 >> 2] = i14;
  i1 = i14 + 4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i7, i12);
  i12 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i15 = i12 + 4 | 0;
    i7 = i15 | 0;
    i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i1 | 0) != 0) {
     HEAP32[i7 >> 2] = i1;
     break;
    }
    i1 = i15 - 4 | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
   }
  } while (0);
  __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(HEAP32[i4 >> 2] | 0, i11, 6, 0, 0);
 }
 __ZN7WebCore16VisibleSelectionD2Ev(i11);
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 + 8 | 0;
   i4 = i8 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i11 = HEAP32[i5 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i11 + 8 | 0;
 i11 = i5 | 0;
 i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i8;
 if ((i8 | 0) >= 1) {
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
function __ZN7WebCore14FrameSelection18recomputeCaretRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = i3;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((HEAP8[i1 + 16 | 0] & 1) == 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i11 = i1 + 24 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((__ZNK7WebCore8Document4viewEv(HEAP32[i12 + 456 >> 2] | 0) | 0) == 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i12 = i1 + 32 | 0;
 i13 = HEAP32[i1 + 56 >> 2] | 0;
 i14 = (i13 | 0) == 0;
 do {
  if (!i14) {
   i15 = HEAP32[i13 + 8 >> 2] | 0;
   i16 = i13 + 8 | 0;
   HEAP32[i16 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  }
 } while (0);
 i16 = i1 | 0;
 i15 = i3;
 i17 = i1;
 HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i15 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
 HEAP32[i15 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 __ZN7WebCore14FrameSelection14localCaretRectEv(i8, i1);
 i17 = i1 + 112 | 0;
 do {
  if ((HEAP32[i17 >> 2] | 0) == (i13 | 0)) {
   if (!((HEAP32[i4 >> 2] | 0) == (HEAP32[i7 >> 2] | 0) & (HEAP32[i4 + 4 >> 2] | 0) == (HEAP32[i7 + 4 >> 2] | 0))) {
    break;
   }
   i15 = i3 + 8 | 0;
   i18 = i6 + 8 | 0;
   if ((HEAP32[i15 >> 2] | 0) != (HEAP32[i18 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i15 + 4 >> 2] | 0) != (HEAP32[i18 + 4 >> 2] | 0)) {
    break;
   }
   if ((HEAP8[i1 + 192 | 0] & 1) == 0) {
    i10 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i10 | 0;
  }
 } while (0);
 i6 = i1 + 176 | 0;
 i3 = i6;
 i7 = i6;
 i6 = HEAP32[i7 >> 2] | 0;
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 i18 = i1 + 184 | 0;
 i15 = HEAP32[i18 >> 2] | 0;
 i19 = HEAP32[i18 + 4 >> 2] | 0;
 __ZNK7WebCore9CaretBase26absoluteBoundsForLocalRectEPNS_4NodeERKNS_10LayoutRectE(i9, 0, i13, i16);
 i16 = i9;
 HEAP32[i3 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
 i16 = i1 + 192 | 0;
 HEAP8[i16] = HEAP8[i16] & -2;
 do {
  if ((HEAP32[i17 >> 2] | 0) == (i13 | 0)) {
   if (!((i6 | 0) == (HEAP32[i7 >> 2] | 0) & (i4 | 0) == (HEAP32[i7 + 4 >> 2] | 0))) {
    break;
   }
   if ((i15 | 0) != (HEAP32[i18 >> 2] | 0)) {
    break;
   }
   if ((i19 | 0) == (HEAP32[i18 + 4 >> 2] | 0)) {
    i10 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i10 | 0;
  }
 } while (0);
 i18 = HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 456 >> 2] | 0) + 1584 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i10 = 1;
  STACKTOP = i2;
  return i10 | 0;
 }
 do {
  if (__ZNK7WebCore16VisibleSelection17isContentEditableEv(i12) | 0) {
   i20 = 1;
  } else {
   i11 = HEAP32[i17 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i20 = 0;
    break;
   }
   i20 = __ZN7WebCore4Node17isContentEditableENS0_22UserSelectAllTreatmentE(i11, 0) | 0;
  }
 } while (0);
 i12 = HEAP32[(HEAP32[i18 + 116 >> 2] | 0) + 216 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i21 = 0;
 } else {
  i21 = (HEAP8[(HEAP32[i12 + 36 >> 2] | 0) + 183 | 0] & 4) != 0;
 }
 if (!(i21 | i20)) {
  i10 = 1;
  STACKTOP = i2;
  return i10 | 0;
 }
 i20 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i21 = i20 + 32 | 0;
   if ((HEAP32[i20 + 12 >> 2] & 2048 | 0) == 0) {
    i22 = i21 | 0;
   } else {
    i22 = HEAP32[i21 >> 2] | 0;
   }
   i21 = HEAP32[i22 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[i21 + 20 >> 2] & 768 | 0) == 256) {
     i23 = 33;
    } else {
     if ((HEAP32[i21 + 24 >> 2] & 32 | 0) == 0) {
      i23 = 33;
      break;
     }
     if (__ZN7WebCore14isTableElementEPNS_4NodeE(i20) | 0) {
      i23 = 33;
      break;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 132 >> 2] & 1](i20) | 0) {
      i24 = i21;
     } else {
      i23 = 33;
     }
    }
   } while (0);
   if ((i23 | 0) == 33) {
    i24 = __ZNK7WebCore12RenderObject15containingBlockEv(i21) | 0;
   }
   if ((i24 | 0) == 0) {
    break;
   }
   __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i24, i5, 0);
  }
 } while (0);
 if (!i14) {
  i5 = i13 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = i13;
 do {
  if ((i5 | 0) != 0) {
   i17 = i5 + 8 | 0;
   i24 = i17 | 0;
   i20 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  }
 } while (0);
 if (i14) {
  i10 = 1;
  STACKTOP = i2;
  return i10 | 0;
 }
 i14 = i13 + 32 | 0;
 if ((HEAP32[i13 + 12 >> 2] & 2048 | 0) == 0) {
  i25 = i14 | 0;
 } else {
  i25 = HEAP32[i14 >> 2] | 0;
 }
 i14 = HEAP32[i25 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i10 = 1;
  STACKTOP = i2;
  return i10 | 0;
 }
 do {
  if ((HEAP32[i14 + 20 >> 2] & 768 | 0) == 256) {
   i23 = 51;
  } else {
   if ((HEAP32[i14 + 24 >> 2] & 32 | 0) == 0) {
    i23 = 51;
    break;
   }
   if (__ZN7WebCore14isTableElementEPNS_4NodeE(i13) | 0) {
    i23 = 51;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 132 >> 2] & 1](i13) | 0) {
    i26 = i14;
   } else {
    i23 = 51;
   }
  }
 } while (0);
 if ((i23 | 0) == 51) {
  i26 = __ZNK7WebCore12RenderObject15containingBlockEv(i14) | 0;
 }
 if ((i26 | 0) == 0) {
  i10 = 1;
  STACKTOP = i2;
  return i10 | 0;
 }
 __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i26, i8, 0);
 i10 = 1;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN7WebCore14FrameSelection25setFocusedElementIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 if ((HEAP32[i1 + 84 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i1 + 192 | 0] & 8) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i1 + 24 | 0;
 i9 = (HEAP8[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 183 | 0] & 4) != 0;
 do {
  if (i9) {
   i10 = i3 | 0;
   i11 = HEAP32[i1 + 32 >> 2] | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) == 0) {
    i12 = i3 + 8 | 0;
    i13 = 0;
    i14 = i12;
    i15 = i12;
   } else {
    i12 = i11 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    i12 = i3 + 8 | 0;
    i11 = i12;
    i13 = HEAP32[i11 >> 2] & -8;
    i14 = i12;
    i15 = i11;
   }
   HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 36 >> 2];
   i11 = HEAP32[i1 + 40 >> 2] | 0;
   i12 = i13 | i11 & 7;
   HEAP32[i15 >> 2] = i12;
   HEAP8[i14] = i12 & 255 & -9 | i11 & 8;
   i11 = __ZN7WebCore22enclosingAnchorElementERKNS_8PositionE(i3) | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i10 = i12 + 8 | 0;
     i16 = i10 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[(HEAP32[i12 + 32 >> 2] | 0) + 32 >> 2] | 0;
   i17 = i4 | 0;
   HEAP32[i17 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i16 = i12 + 4 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   }
   __ZN7WebCore15FocusController17setFocusedElementEPNS_7ElementEN3WTF10PassRefPtrINS_5FrameEEENS_14FocusDirectionE(i10, i11, i4, 0) | 0;
   i10 = HEAP32[i17 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i17 = i10 + 4 | 0;
   i10 = i17 | 0;
   i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i10 >> 2] = i16;
    STACKTOP = i2;
    return;
   }
   i16 = i17 - 4 | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 15](i16);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i4 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i1 + 32 | 0) | 0;
 do {
  if ((i4 | 0) != 0) {
   i1 = i4;
   while (1) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 356 >> 2] & 1](i1) | 0) {
     i3 = i1 + 32 | 0;
     if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
      i18 = i3 | 0;
     } else {
      i18 = HEAP32[i3 >> 2] | 0;
     }
     i3 = HEAP32[i18 >> 2] | 0;
     if ((i3 | 0) == 0) {
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 228 >> 2] & 1](i3) | 0)) {
      break;
     }
     i14 = HEAP32[i3 + 108 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] & 1](i14) | 0)) {
      break;
     }
    }
    i14 = __ZNK7WebCore4Node25parentOrShadowHostElementEv(i1 | 0) | 0;
    if ((i14 | 0) == 0) {
     i19 = 36;
     break;
    } else {
     i1 = i14;
    }
   }
   if ((i19 | 0) == 36) {
    i11 = HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0;
    i14 = i6 | 0;
    HEAP32[i14 >> 2] = 0;
    __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i11, i6, 0) | 0;
    i11 = HEAP32[i14 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i14 = i11 + 8 | 0;
    i11 = i14 | 0;
    i3 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    HEAP32[i11 >> 2] = i3;
    if ((i3 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    break;
   }
   i14 = HEAP32[i8 >> 2] | 0;
   i3 = HEAP32[(HEAP32[i14 + 32 >> 2] | 0) + 32 >> 2] | 0;
   i11 = i5 | 0;
   HEAP32[i11 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i15 = i14 + 4 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   __ZN7WebCore15FocusController17setFocusedElementEPNS_7ElementEN3WTF10PassRefPtrINS_5FrameEEENS_14FocusDirectionE(i3, i1, i5, 0) | 0;
   i3 = HEAP32[i11 >> 2] | 0;
   if ((i3 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i11 = i3 + 4 | 0;
   i3 = i11 | 0;
   i15 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i3 >> 2] = i15;
    STACKTOP = i2;
    return;
   }
   i15 = i11 - 4 | 0;
   if ((i15 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 15](i15);
   STACKTOP = i2;
   return;
  }
 } while (0);
 if (!i9) {
  STACKTOP = i2;
  return;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 i8 = HEAP32[(HEAP32[i9 + 32 >> 2] | 0) + 32 >> 2] | 0;
 i5 = i7 | 0;
 HEAP32[i5 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i6 = i9 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN7WebCore15FocusController17setFocusedElementEPNS_7ElementEN3WTF10PassRefPtrINS_5FrameEEENS_14FocusDirectionE(i8, 0, i7, 0) | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i7 + 4 | 0;
 i7 = i5 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i7 >> 2] = i8;
  STACKTOP = i2;
  return;
 }
 i8 = i5 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 64 | 0;
 i10 = i1 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i1 + 8 | 0;
   i13 = i1 + 4 | 0;
   i14 = i12;
   i15 = i12;
   i16 = __ZN7WebCore8Position24rootUserSelectAllForNodeEPNS_4NodeE(i11) | 0;
  } else {
   i12 = i11 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i12 = i1 + 4 | 0;
   i17 = i1 + 8 | 0;
   i18 = i17;
   i19 = __ZN7WebCore8Position24rootUserSelectAllForNodeEPNS_4NodeE(i11) | 0;
   i20 = i11 + 8 | 0;
   i21 = i20 | 0;
   i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    i13 = i12;
    i14 = i17;
    i15 = i18;
    i16 = i19;
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    i13 = i12;
    i14 = i17;
    i15 = i18;
    i16 = i19;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   i13 = i12;
   i14 = i17;
   i15 = i18;
   i16 = i19;
  }
 } while (0);
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (i2) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = i16;
  i11 = i16 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i8, i5, 2);
  i5 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i2 = i5 + 8 | 0;
    i11 = i2 | 0;
    i19 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    HEAP32[i11 >> 2] = i19;
    if ((i19 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
   }
  } while (0);
  __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i7, i8, 0);
  i23 = 0;
  i24 = 1;
 } else {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = i16;
  i2 = i16 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i9, i4, 1);
  i4 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i5 = i4 + 8 | 0;
    i2 = i5 | 0;
    i16 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    HEAP32[i2 >> 2] = i16;
    if ((i16 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
   }
  } while (0);
  __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i7, i9, 0);
  i23 = 1;
  i24 = 0;
 }
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i6, i7, 1);
 i4 = i6 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i16 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i5;
 do {
  if ((i16 | 0) != 0) {
   i5 = i16 + 8 | 0;
   i10 = i5 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i13 >> 2] = HEAP32[i6 + 4 >> 2];
 i13 = HEAP32[i6 + 8 >> 2] | 0;
 i16 = HEAP32[i15 >> 2] & -8 | i13 & 7;
 HEAP32[i15 >> 2] = i16;
 HEAP8[i14] = i16 & 255 & -9 | i13 & 8;
 HEAP32[i1 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 8 | 0;
   i1 = i4 | 0;
   i13 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 do {
  if (i23) {
   i6 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 + 8 | 0;
     i13 = i4 | 0;
     i1 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i1;
     if ((i1 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
    }
   } while (0);
   i6 = HEAP32[i9 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i4 = i6 + 8 | 0;
   i6 = i4 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 if (!i24) {
  STACKTOP = i3;
  return;
 }
 i24 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i7 = i24 + 8 | 0;
   i9 = i7 | 0;
   i23 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i23;
   if ((i23 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i24 = HEAP32[i8 >> 2] | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i24 + 8 | 0;
 i24 = i8 | 0;
 i7 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
 HEAP32[i24 >> 2] = i7;
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
function __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = (i2 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i12 + i9 | 0, i7 | 0) | 0;
 i9 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i11) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i9 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i14 = 42;
      break;
     }
     i12 = i13 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i9 >>> 0 > 2147483637 >>> 0) {
      i14 = 42;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i9 << 1) + 20 | 0);
     i13 = i5 | 0;
     i12 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i14 = 42;
      break;
     }
     i13 = i12 + 20 | 0;
     HEAP32[i12 >> 2] = 2;
     HEAP32[i12 + 4 >> 2] = i9;
     HEAP32[i12 + 8 >> 2] = i13;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 0;
     i15 = i12;
     i16 = i13;
    }
   } while (0);
   if ((i14 | 0) == 42) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i13 = HEAP32[i8 >> 2] | 0;
   i12 = _strlen(i13 | 0) | 0;
   if ((i12 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i17 << 1) >> 1] = HEAPU8[i13 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
   i17 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = 0;
     i19 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    } else {
     i13 = HEAP32[i17 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i21 = 0;
       }
       while (1) {
        HEAP16[i16 + (i21 + i12 << 1) >> 1] = HEAP16[i20 + (i21 << 1) >> 1] | 0;
        i21 = i21 + 1 | 0;
        if (i21 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i22 = 0;
       }
       while (1) {
        HEAP16[i16 + (i22 + i12 << 1) >> 1] = HEAPU8[i20 + i22 | 0] | 0;
        i22 = i22 + 1 | 0;
        if (i22 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i10 >> 2] | 0;
     i20 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
     if ((i13 | 0) == 0) {
      i18 = 0;
      i19 = i20;
      break;
     }
     i18 = HEAP32[i13 + 4 >> 2] | 0;
     i19 = i20;
    }
   } while (0);
   i12 = i18 + i19 | 0;
   if ((i7 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i12 + i17 << 1) >> 1] = HEAPU8[i3 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i9 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 21;
    break;
   }
   i16 = i15 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i23 = i15;
   i24 = 0;
  } else {
   if (i9 >>> 0 > 4294967275 >>> 0) {
    i14 = 21;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i9 + 20 | 0);
   i15 = i6 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i14 = 21;
    break;
   }
   i15 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i9;
   HEAP32[i16 + 8 >> 2] = i15;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i23 = i16;
   i24 = i15;
  }
 } while (0);
 if ((i14 | 0) == 21) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 i9 = _strlen(i14 | 0) | 0;
 _memcpy(i24 | 0, i14 | 0, i9) | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i25 = 0;
   i26 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   i15 = HEAP32[i14 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i27 = i14;
    i28 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   } else {
    i16 = 0;
    while (1) {
     HEAP8[i24 + (i16 + i9) | 0] = HEAP8[i15 + i16 | 0] | 0;
     i16 = i16 + 1 | 0;
     if (i16 >>> 0 >= i6 >>> 0) {
      break;
     }
    }
    i6 = HEAP32[i10 >> 2] | 0;
    i16 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    if ((i6 | 0) == 0) {
     i25 = 0;
     i26 = i16;
     break;
    } else {
     i27 = i6;
     i28 = i16;
    }
   }
   i25 = HEAP32[i27 + 4 >> 2] | 0;
   i26 = i28;
  }
 } while (0);
 _memcpy(i24 + (i25 + i26) | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i23;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = 0;
 if ((HEAP32[i2 + 84 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 | 0;
 i8 = i5 + 4 | 0;
 i9 = i5 + 8 | 0;
 i10 = i9;
 _memset(i5 | 0, 0, 12) | 0;
 if ((i3 | 0) == 0) {
  i11 = HEAP32[i2 + 56 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i12 = 0;
  } else {
   i13 = i11 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i12 = HEAP32[i1 >> 2] | 0;
  }
  i13 = HEAP32[i2 + 60 >> 2] | 0;
  i14 = HEAP32[i2 + 64 >> 2] | 0;
  i15 = i14 & 8;
  HEAP32[i1 >> 2] = i11;
  do {
   if ((i12 | 0) != 0) {
    i11 = i12 + 8 | 0;
    i16 = i11 | 0;
    i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
    HEAP32[i16 >> 2] = i17;
    if ((i17 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
   }
  } while (0);
  HEAP32[i8 >> 2] = i13;
  i13 = HEAP32[i10 >> 2] & -8 | i14 & 7;
  HEAP32[i10 >> 2] = i13;
  HEAP8[i9] = i13 & 255 & -9 | i15;
 } else if ((i3 | 0) == 1) {
  i15 = HEAP32[i2 + 68 >> 2] | 0;
  if ((i15 | 0) == 0) {
   i18 = 0;
  } else {
   i13 = i15 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i18 = HEAP32[i1 >> 2] | 0;
  }
  i13 = HEAP32[i2 + 72 >> 2] | 0;
  i14 = HEAP32[i2 + 76 >> 2] | 0;
  i12 = i14 & 8;
  HEAP32[i1 >> 2] = i15;
  do {
   if ((i18 | 0) != 0) {
    i15 = i18 + 8 | 0;
    i11 = i15 | 0;
    i17 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    HEAP32[i11 >> 2] = i17;
    if ((i17 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
   }
  } while (0);
  HEAP32[i8 >> 2] = i13;
  i13 = HEAP32[i10 >> 2] & -8 | i14 & 7;
  HEAP32[i10 >> 2] = i13;
  HEAP8[i9] = i13 & 255 & -9 | i12;
 } else if ((i3 | 0) == 2) {
  i12 = HEAP32[i2 + 32 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i19 = 0;
  } else {
   i13 = i12 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i19 = HEAP32[i1 >> 2] | 0;
  }
  i13 = HEAP32[i2 + 36 >> 2] | 0;
  i14 = HEAP32[i2 + 40 >> 2] | 0;
  i18 = i14 & 8;
  HEAP32[i1 >> 2] = i12;
  do {
   if ((i19 | 0) != 0) {
    i12 = i19 + 8 | 0;
    i15 = i12 | 0;
    i17 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    HEAP32[i15 >> 2] = i17;
    if ((i17 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   }
  } while (0);
  HEAP32[i8 >> 2] = i13;
  i13 = HEAP32[i10 >> 2] & -8 | i14 & 7;
  HEAP32[i10 >> 2] = i13;
  HEAP8[i9] = i13 & 255 & -9 | i18;
 } else if ((i3 | 0) == 3) {
  i3 = HEAP32[i2 + 44 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i20 = 0;
  } else {
   i18 = i3 + 8 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   i20 = HEAP32[i1 >> 2] | 0;
  }
  i18 = HEAP32[i2 + 48 >> 2] | 0;
  i13 = HEAP32[i2 + 52 >> 2] | 0;
  i14 = i13 & 8;
  HEAP32[i1 >> 2] = i3;
  do {
   if ((i20 | 0) != 0) {
    i3 = i20 + 8 | 0;
    i19 = i3 | 0;
    i12 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
    HEAP32[i19 >> 2] = i12;
    if ((i12 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   }
  } while (0);
  HEAP32[i8 >> 2] = i18;
  i18 = HEAP32[i10 >> 2] & -8 | i13 & 7;
  HEAP32[i10 >> 2] = i18;
  HEAP8[i9] = i18 & 255 & -9 | i14;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) != 0) {
   i14 = i2 + 28 | 0;
   i18 = HEAP32[i14 >> 2] | 0;
   if ((i18 | 0) != -2147483648) {
    HEAP32[i7 >> 2] = i18;
    break;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i6, i5, HEAP32[i2 + 80 >> 2] | 0);
   i18 = i6 | 0;
   if ((HEAP32[i18 >> 2] | 0) == 0) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i14 >> 2] = 0;
    break;
   }
   i9 = __ZNK7WebCore15VisiblePosition45lineDirectionPointForBlockDirectionNavigationEv(i6) | 0;
   i10 = HEAP32[i18 >> 2] | 0;
   HEAP32[i7 >> 2] = i9;
   HEAP32[i14 >> 2] = i9;
   if ((i10 | 0) == 0) {
    break;
   }
   i9 = i10 + 8 | 0;
   i10 = i9 | 0;
   i14 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i7 + 8 | 0;
 i7 = i1 | 0;
 i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection9selectAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i1 + 24 | 0;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0;
 i8 = HEAP32[i7 + 680 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = HEAP32[i8 + 44 >> 2] | 0;
   i10 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
   if ((i9 | 0) != (i10 | 0)) {
    if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i9 + 16 >> 2] | 0) != (HEAP32[i10 + 16 >> 2] | 0)) {
     break;
    }
   }
   i10 = i8;
   if (!(__ZNK7WebCore17HTMLSelectElement12canSelectAllEv(i10) | 0)) {
    break;
   }
   __ZN7WebCore17HTMLSelectElement9selectAllEv(i10);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i8 = i1 + 32 | 0;
 do {
  if (__ZNK7WebCore16VisibleSelection17isContentEditableEv(i8) | 0) {
   i10 = i3 | 0;
   i9 = HEAP32[i1 + 56 >> 2] | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i9 | 0) != 0) {
    i11 = i9 + 8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
   i11 = HEAP32[i1 + 64 >> 2] | 0;
   i9 = i3 + 8 | 0;
   i12 = i9;
   i13 = HEAP32[i12 >> 2] & -8 | i11 & 7;
   HEAP32[i12 >> 2] = i13;
   HEAP8[i9] = i13 & 255 & -9 | i11 & 8;
   i11 = __ZN7WebCore19highestEditableRootERKNS_8PositionENS_12EditableTypeE(i3, 0) | 0;
   if ((i11 | 0) != 0) {
    i13 = i11 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   i13 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i10 = i13 + 8 | 0;
     i9 = i10 | 0;
     i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   i13 = __ZNK7WebCore16VisibleSelection29nonBoundaryShadowTreeRootNodeEv(i8) | 0;
   if ((i13 | 0) == 0) {
    i14 = i11;
    i15 = i11;
    i16 = 23;
    break;
   }
   i14 = __ZNK7WebCore4Node10shadowHostEv(i13) | 0;
   i15 = i11;
   i16 = 23;
  } else {
   i13 = __ZNK7WebCore16VisibleSelection29nonBoundaryShadowTreeRootNodeEv(i8) | 0;
   if ((i13 | 0) != 0) {
    i10 = i13 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
    i17 = i13;
    i18 = __ZNK7WebCore4Node10shadowHostEv(i13) | 0;
    break;
   }
   i13 = HEAP32[i7 + 692 >> 2] | 0;
   if ((i13 | 0) != 0) {
    i10 = i13 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i14 = __ZNK7WebCore8Document4bodyEv(i7) | 0;
   i15 = i13 | 0;
   i16 = 23;
  }
 } while (0);
 do {
  if ((i16 | 0) == 23) {
   if ((i15 | 0) != 0) {
    i17 = i15;
    i18 = i14;
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 L35 : do {
  if ((i18 | 0) == 0) {
   i16 = 31;
  } else {
   i14 = HEAP32[(HEAP32[i18 >> 2] | 0) + 32 >> 2] | 0;
   i15 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 328 | 0;
   i7 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i7, i15, 1, 1);
   i15 = i4 | 0;
   HEAP32[i15 >> 2] = i7;
   i7 = FUNCTION_TABLE_iii[i14 & 1](i18, i4) | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 + 8 | 0;
     i3 = i15 | 0;
     i13 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i3 >> 2] = i13;
      if (i7) {
       i16 = 31;
       break L35;
      } else {
       break L35;
      }
     }
     i13 = i15 - 8 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
     if (i7) {
      i16 = 31;
      break L35;
     } else {
      break L35;
     }
    }
   } while (0);
   if (i7) {
    i16 = 31;
   }
  }
 } while (0);
 if ((i16 | 0) == 31) {
  __ZN7WebCore16VisibleSelection27selectionFromContentsOfNodeEPNS_4NodeE(i5, i17);
  if (__ZNK7WebCore6Editor21shouldChangeSelectionERKNS_16VisibleSelectionES3_NS_9EAffinityEb(HEAP32[(HEAP32[i6 >> 2] | 0) + 464 >> 2] | 0, i8, i5, HEAP32[i5 + 48 >> 2] | 0, 0) | 0) {
   __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i5, 6, 0, 0);
  }
  __ZN7WebCore14FrameSelection41selectFrameElementInParentIfFullySelectedEv(i1);
  __ZN7WebCore14FrameSelection31notifyRendererOfSelectionChangeENS_14EUserTriggeredE(i1, 1);
  __ZN7WebCore16VisibleSelectionD2Ev(i5);
 }
 i5 = i17 + 8 | 0;
 i17 = i5 | 0;
 i1 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 HEAP32[i17 >> 2] = i1;
 if ((i1 | 0) >= 1) {
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
function __ZN7WebCore14FrameSelection16setSelectedRangeEPNS_5RangeENS_9EAffinityEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 72 | 0;
 i14 = i5 + 88 | 0;
 i15 = i5 + 104 | 0;
 if ((i2 | 0) == 0) {
  i16 = 0;
  STACKTOP = i5;
  return i16 | 0;
 }
 i17 = i2 + 8 | 0;
 if ((HEAP32[i17 >> 2] | 0) == 0) {
  i16 = 0;
  STACKTOP = i5;
  return i16 | 0;
 }
 i18 = i2 + 20 | 0;
 if ((HEAP32[i18 >> 2] | 0) == 0) {
  i16 = 0;
  STACKTOP = i5;
  return i16 | 0;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 456 >> 2] | 0);
 HEAP32[i10 >> 2] = 0;
 i19 = __ZNK7WebCore5Range9collapsedERi(i2, i10) | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  i16 = 0;
  STACKTOP = i5;
  return i16 | 0;
 }
 i10 = i2 + 12 | 0;
 i20 = HEAP32[i10 >> 2] | 0;
 if ((i20 | 0) > -1) {
  i21 = i20;
 } else {
  i20 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i10 >> 2] = i20;
  i21 = i20;
 }
 i20 = HEAP32[i17 >> 2] | 0;
 if ((i20 | 0) == 0) {
  i22 = i21;
 } else {
  i21 = i20 + 8 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
  i22 = HEAP32[i10 >> 2] | 0;
 }
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = i20;
 HEAP32[i9 >> 2] = i22;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i12, i8, i9);
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 + 8 | 0;
   i8 = i10 | 0;
   i22 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i22;
   if ((i22 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i11, i12, i19 ? i3 : 1);
 i3 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i12 = i3 + 8 | 0;
   i19 = i12 | 0;
   i9 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   HEAP32[i19 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i3 = i2 + 24 | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 if ((i12 | 0) > -1) {
  i23 = i12;
 } else {
  i12 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
  HEAP32[i3 >> 2] = i12;
  i23 = i12;
 }
 i12 = HEAP32[i18 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i24 = i23;
 } else {
  i23 = i12 + 8 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
  i24 = HEAP32[i3 >> 2] | 0;
 }
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = i12;
 HEAP32[i7 >> 2] = i24;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i14, i6, i7);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 + 8 | 0;
   i6 = i3 | 0;
   i24 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i13, i14, 1);
 i7 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i14 = i7 + 8 | 0;
   i3 = i14 | 0;
   i24 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionES3_b(i15, i11, i13, 0);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i15, i4 ? 6 : 4, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i15);
 i15 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i13 = i15 + 8 | 0;
   i4 = i13 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i15 = HEAP32[i11 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i16 = 1;
  STACKTOP = i5;
  return i16 | 0;
 }
 i11 = i15 + 8 | 0;
 i15 = i11 | 0;
 i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 HEAP32[i15 >> 2] = i13;
 if ((i13 | 0) >= 1) {
  i16 = 1;
  STACKTOP = i5;
  return i16 | 0;
 }
 if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
  i16 = 1;
  STACKTOP = i5;
  return i16 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
 i16 = 1;
 STACKTOP = i5;
 return i16 | 0;
}
function __ZN7WebCore14FrameSelection14localCaretRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i2 | 0;
 L1 : do {
  if ((HEAP8[i2 + 16 | 0] & 1) != 0) {
   L3 : do {
    if ((HEAP32[i2 + 84 >> 2] | 0) == 1) {
     i8 = i2 + 56 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     i10 = (i9 | 0) == 0;
     do {
      if (i10) {
       i11 = 6;
      } else {
       i12 = i9 + 8 | 0;
       i13 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
       HEAP32[i12 >> 2] = i13;
       if ((HEAP32[i9 + 12 >> 2] & 256 | 0) != 0) {
        i11 = 6;
        break;
       }
       i12 = i9 + 8 | 0;
       i14 = 0;
       i15 = i13;
       i16 = i12;
       i17 = i12 | 0;
       i11 = 12;
      }
     } while (0);
     do {
      if ((i11 | 0) == 6) {
       i12 = HEAP32[i2 + 68 >> 2] | 0;
       do {
        if ((i12 | 0) == 0) {
         i18 = 1;
        } else {
         i13 = HEAP32[i12 + 8 >> 2] | 0;
         i19 = (HEAP32[i12 + 12 >> 2] & 256 | 0) != 0;
         i20 = i12 + 8 | 0;
         HEAP32[i20 >> 2] = i13;
         if ((i13 | 0) >= 1) {
          i18 = i19;
          break;
         }
         if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
          i18 = i19;
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
         i18 = i19;
        }
       } while (0);
       if (i10) {
        i21 = i18;
        i11 = 15;
        break;
       }
       i12 = i9 + 8 | 0;
       i19 = i12 | 0;
       i14 = i18;
       i15 = HEAP32[i19 >> 2] | 0;
       i16 = i12;
       i17 = i19;
       i11 = 12;
      }
     } while (0);
     do {
      if ((i11 | 0) == 12) {
       i9 = i15 - 1 | 0;
       HEAP32[i17 >> 2] = i9;
       if ((i9 | 0) >= 1) {
        i21 = i14;
        i11 = 15;
        break;
       }
       if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
        i21 = i14;
        i11 = 15;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
       if (!i14) {
        break L3;
       }
      }
     } while (0);
     if ((i11 | 0) == 15) {
      if (!i21) {
       break;
      }
     }
     i9 = HEAP32[(HEAP32[i2 + 24 >> 2] | 0) + 456 >> 2] | 0;
     i10 = i6 | 0;
     i19 = HEAP32[i8 >> 2] | 0;
     HEAP32[i10 >> 2] = i19;
     if ((i19 | 0) != 0) {
      i12 = i19 + 8 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     }
     HEAP32[i6 + 4 >> 2] = HEAP32[i2 + 60 >> 2];
     i12 = HEAP32[i2 + 64 >> 2] | 0;
     i19 = i6 + 8 | 0;
     i20 = i19;
     i13 = HEAP32[i20 >> 2] & -8 | i12 & 7;
     HEAP32[i20 >> 2] = i13;
     HEAP8[i19] = i13 & 255 & -9 | i12 & 8;
     __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i5, i6, HEAP32[i2 + 80 >> 2] | 0);
     i12 = __ZN7WebCore9CaretBase15updateCaretRectEPNS_8DocumentERKNS_15VisiblePositionE(i7, i9, i5) | 0;
     i9 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i13 = i9 + 8 | 0;
       i19 = i13 | 0;
       i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
       HEAP32[i19 >> 2] = i20;
       if ((i20 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
      }
     } while (0);
     i9 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i8 = i9 + 8 | 0;
       i13 = i8 | 0;
       i20 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
       HEAP32[i13 >> 2] = i20;
       if ((i20 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
      }
     } while (0);
     if (!i12) {
      break L1;
     }
     i9 = i2 + 192 | 0;
     HEAP8[i9] = HEAP8[i9] | 1;
     break L1;
    }
   } while (0);
   i9 = i4;
   _llvm_lifetime_start(16, 0, i9 | 0);
   _memset(i9 | 0, 0, 16) | 0;
   i10 = i2;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   _llvm_lifetime_end(16, 0, i9 | 0);
  }
 } while (0);
 i4 = i1;
 i1 = i2;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14FrameSelection6moveToEPKNS_5RangeENS_9EAffinityENS_14EUserTriggeredE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 96 | 0;
 i12 = i5 + 112 | 0;
 i13 = i5 + 128 | 0;
 i14 = i5 + 144 | 0;
 i15 = i4 | 6;
 do {
  if ((i2 | 0) == 0) {
   i4 = i13 | 0;
   _memset(i13 | 0, 0, 12) | 0;
   _memset(i14 | 0, 0, 12) | 0;
   __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i10, i13, i14, i3, 0);
   i16 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i17 = i16 + 8 | 0;
     i18 = i17 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   i16 = HEAP32[i4 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i17 = i16 + 8 | 0;
   i16 = i17 | 0;
   i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i19;
   if ((i19 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  } else {
   i17 = i2 + 12 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   if ((i19 | 0) > -1) {
    i20 = i19;
   } else {
    i19 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i17 >> 2] = i19;
    i20 = i19;
   }
   i19 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i21 = i20;
   } else {
    i16 = i19 + 8 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    i21 = HEAP32[i17 >> 2] | 0;
   }
   i17 = i8 | 0;
   HEAP32[i17 >> 2] = i19;
   HEAP32[i9 >> 2] = i21;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i11, i8, i9);
   i19 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i17 = i19 + 8 | 0;
     i16 = i17 | 0;
     i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   i19 = i2 + 24 | 0;
   i4 = HEAP32[i19 >> 2] | 0;
   if ((i4 | 0) > -1) {
    i22 = i4;
   } else {
    i4 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i2 + 28 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i19 >> 2] = i4;
    i22 = i4;
   }
   i4 = HEAP32[i2 + 20 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i23 = i22;
   } else {
    i17 = i4 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    i23 = HEAP32[i19 >> 2] | 0;
   }
   i19 = i6 | 0;
   HEAP32[i19 >> 2] = i4;
   HEAP32[i7 >> 2] = i23;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_19LegacyEditingOffsetE(i12, i6, i7);
   i4 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i19 = i4 + 8 | 0;
     i17 = i19 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i10, i11, i12, i3, 0);
   i4 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i19 = i4 + 8 | 0;
     i18 = i19 | 0;
     i17 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
    }
   } while (0);
   i4 = HEAP32[i11 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i19 = i4 + 8 | 0;
   i4 = i19 | 0;
   i17 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i10, i15, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i10);
 STACKTOP = i5;
 return;
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = (i2 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, i7 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i9) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i10 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i12 = 37;
      break;
     }
     i13 = i11 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
     i14 = i11;
     i15 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 37;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i11 = i5 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i13 | 0) == 0) {
      i12 = 37;
      break;
     }
     i11 = i13 + 20 | 0;
     HEAP32[i13 >> 2] = 2;
     HEAP32[i13 + 4 >> 2] = i10;
     HEAP32[i13 + 8 >> 2] = i11;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 0;
     i14 = i13;
     i15 = i11;
    }
   } while (0);
   if ((i12 | 0) == 37) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = 0;
    } else {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i18 = 0;
       }
       while (1) {
        HEAP16[i15 + (i18 << 1) >> 1] = HEAP16[i17 + (i18 << 1) >> 1] | 0;
        i18 = i18 + 1 | 0;
        if (i18 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i19 = 0;
       }
       while (1) {
        HEAP16[i15 + (i19 << 1) >> 1] = HEAPU8[i17 + i19 | 0] | 0;
        i19 = i19 + 1 | 0;
        if (i19 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = 0;
      break;
     }
     i16 = HEAP32[i13 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i15 + (i11 + i16 << 1) >> 1] = HEAPU8[i3 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 0) {
   i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i14 | 0) == 0) {
    i12 = 19;
    break;
   }
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i20 = i14;
   i21 = 0;
  } else {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 19;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i12 = 19;
    break;
   }
   i14 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i10;
   HEAP32[i16 + 8 >> 2] = i14;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i20 = i16;
   i21 = i14;
  }
 } while (0);
 if ((i12 | 0) == 19) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i22 = 0;
  } else {
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   i6 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i23 = i12;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i21 + i14 | 0] = HEAP8[i6 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i23 = i10;
    }
   }
   i22 = HEAP32[i23 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i21 + i22 | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore14FrameSelection31getClippedVisibleTextRectanglesERN3WTF6VectorINS_9FloatRectELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 64 | 0;
 i9 = i3 + 72 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 104 | 0;
 i12 = i1 + 24 | 0;
 if ((__ZNK7WebCore5Frame15contentRendererEv(HEAP32[i12 >> 2] | 0) | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i6, HEAP32[(HEAP32[i12 >> 2] | 0) + 452 >> 2] | 0, 0);
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i5, i6);
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = 0;
 i12 = i7 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i7 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i8, i1 + 32 | 0);
 i1 = i8 | 0;
 __ZNK7WebCore5Range9textQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEbPNS0_20RangeInFixedPositionE(HEAP32[i1 >> 2] | 0, i7, 1, 0);
 i7 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i1 = i7 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i9;
   i1 = i10;
   i14 = i9 + 8 | 0;
   i15 = i9 + 12 | 0;
   i16 = i2 + 8 | 0;
   i17 = i2 + 4 | 0;
   i18 = i2 | 0;
   i19 = i9;
   i20 = 0;
   i21 = i7;
   while (1) {
    if (i21 >>> 0 <= i20 >>> 0) {
     i22 = 9;
     break;
    }
    __ZNK7WebCore9FloatQuad11boundingBoxEv(i4, (HEAP32[i6 >> 2] | 0) + (i20 << 5) | 0);
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i11, i4);
    __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i10, i11);
    HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
    HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
    HEAP32[i8 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
    HEAP32[i8 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
    __ZN7WebCore9FloatRect9intersectERKS0_(i9, i5);
    do {
     if (+HEAPF32[i14 >> 2] > +0) {
      if (+HEAPF32[i15 >> 2] <= +0) {
       break;
      }
      i23 = HEAP32[i16 >> 2] | 0;
      if ((i23 | 0) != (HEAP32[i17 >> 2] | 0)) {
       i24 = (HEAP32[i18 >> 2] | 0) + (i23 << 4) | 0;
       HEAP32[i24 >> 2] = HEAP32[i8 >> 2];
       HEAP32[i24 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
       HEAP32[i24 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
       HEAP32[i24 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
       HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
       break;
      }
      i24 = i23 + 1 | 0;
      i25 = HEAP32[i18 >> 2] | 0;
      do {
       if (i25 >>> 0 > i9 >>> 0) {
        i22 = 16;
       } else {
        if ((i25 + (i23 << 4) | 0) >>> 0 <= i9 >>> 0) {
         i22 = 16;
         break;
        }
        __ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i24);
        i26 = HEAP32[i18 >> 2] | 0;
        i27 = i26 + (i19 - i25 >> 4 << 4) | 0;
        i28 = i26;
       }
      } while (0);
      if ((i22 | 0) == 16) {
       i22 = 0;
       __ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i24);
       i27 = i9;
       i28 = HEAP32[i18 >> 2] | 0;
      }
      i25 = i28 + (HEAP32[i16 >> 2] << 4) | 0;
      i23 = i27;
      HEAP32[i25 >> 2] = HEAP32[i23 >> 2];
      HEAP32[i25 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
      HEAP32[i25 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
      HEAP32[i25 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
      HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     }
    } while (0);
    i20 = i20 + 1 | 0;
    i21 = HEAP32[i13 >> 2] | 0;
    if (i20 >>> 0 >= i7 >>> 0) {
     break;
    }
   }
   if ((i22 | 0) == 9) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i21 | 0) == 0) {
    break;
   }
   HEAP32[i13 >> 2] = 0;
  }
 } while (0);
 i13 = HEAP32[i6 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9CaretBase10paintCaretEPNS_4NodeEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 40 | 0;
 i11 = i6 + 48 | 0;
 i12 = i11 | 0;
 i13 = i11;
 if ((HEAP32[i1 + 20 >> 2] | 0) == 1) {
  STACKTOP = i6;
  return;
 }
 i14 = i7;
 i15 = i1;
 HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i14 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i14 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i14 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
 do {
  if ((i2 | 0) != 0) {
   i15 = i2 + 32 | 0;
   if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
    i16 = i15 | 0;
   } else {
    i16 = HEAP32[i15 >> 2] | 0;
   }
   i15 = HEAP32[i16 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[i15 + 20 >> 2] & 768 | 0) == 256) {
     i17 = 11;
    } else {
     if ((HEAP32[i15 + 24 >> 2] & 32 | 0) == 0) {
      i17 = 11;
      break;
     }
     if (__ZN7WebCore14isTableElementEPNS_4NodeE(i2) | 0) {
      i17 = 11;
      break;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 1](i2) | 0) {
      i18 = i15;
     } else {
      i17 = 11;
     }
    }
   } while (0);
   if ((i17 | 0) == 11) {
    i18 = __ZNK7WebCore12RenderObject15containingBlockEv(i15) | 0;
   }
   if ((i18 | 0) == 0) {
    break;
   }
   if ((HEAP32[i18 + 20 >> 2] & 512 | 0) == 0) {
    break;
   }
   __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i18, i7);
  }
 } while (0);
 i18 = HEAP32[i4 + 4 >> 2] | 0;
 i16 = i7 | 0;
 HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
 i4 = i7 + 4 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + i18;
 i18 = i8;
 HEAP32[i18 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i18 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i18 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i18 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 __ZN7WebCore10LayoutRect9intersectERKS0_(i8, i5);
 i5 = i8 + 8 | 0;
 i14 = HEAP32[i5 >> 2] | 0;
 if ((i14 | 0) < 1) {
  STACKTOP = i6;
  return;
 }
 i18 = i8 + 12 | 0;
 i4 = HEAP32[i18 >> 2] | 0;
 if ((i4 | 0) < 1) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i9 >> 2] = -16777216;
 HEAP8[i9 + 4 | 0] = 1;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
   i7 = HEAP32[i2 + 16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i19 = 0;
    i20 = i14;
    i21 = i4;
    break;
   }
   if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
    i19 = 0;
    i20 = i14;
    i21 = i4;
    break;
   }
   i22 = i7;
   i17 = 22;
  } else {
   i22 = i2;
   i17 = 22;
  }
 } while (0);
 do {
  if ((i17 | 0) == 22) {
   if ((i22 | 0) == 0) {
    i19 = 0;
    i20 = i14;
    i21 = i4;
    break;
   }
   i2 = i22 + 12 | 0;
   i7 = (HEAP32[i2 >> 2] & 2048 | 0) == 0;
   i16 = i22 + 32 | 0;
   if (i7) {
    i23 = i16 | 0;
   } else {
    i23 = HEAP32[i16 >> 2] | 0;
   }
   if ((HEAP32[i23 >> 2] | 0) == 0) {
    i19 = 0;
    i20 = i14;
    i21 = i4;
    break;
   }
   if (i7) {
    i24 = i16 | 0;
   } else {
    i24 = HEAP32[i16 >> 2] | 0;
   }
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i10, HEAP32[(HEAP32[i24 >> 2] | 0) + 36 >> 2] | 0, 1);
   i7 = i9;
   i1 = i10;
   HEAP32[i7 >> 2] = HEAP32[i1 >> 2];
   HEAP8[i7 + 4 | 0] = HEAP8[i1 + 4 | 0] | 0;
   if ((HEAP32[i2 >> 2] & 2048 | 0) == 0) {
    i25 = i16 | 0;
   } else {
    i25 = HEAP32[i16 >> 2] | 0;
   }
   i19 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1;
   i20 = HEAP32[i5 >> 2] | 0;
   i21 = HEAP32[i18 >> 2] | 0;
  }
 } while (0);
 d26 = +(+(HEAP32[i8 >> 2] | 0));
 d27 = +(+(HEAP32[i8 + 4 >> 2] | 0));
 HEAPF32[i12 >> 2] = d26;
 HEAPF32[i12 + 4 >> 2] = d27;
 i12 = i11 + 8 | 0;
 d27 = +(+(i20 | 0));
 d26 = +(+(i21 | 0));
 HEAPF32[i12 >> 2] = d27;
 HEAPF32[i12 + 4 >> 2] = d26;
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i3, i13, i9, i19);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 _memset(i5 | 0, 0, 16) | 0;
 i12 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i12 | 0) == 1) {
   __ZN7WebCore14FrameSelection18recomputeCaretRectEv(i1) | 0;
   i13 = i1 + 176 | 0;
   i14 = i1 + 184 | 0;
   i15 = HEAP32[i13 + 4 >> 2] | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   i17 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i5 + 4 >> 2] = i15;
   HEAP32[i5 + 8 >> 2] = i16;
   HEAP32[i5 + 12 >> 2] = i17;
  } else if ((i12 | 0) == 2) {
   if ((i3 | 0) != 0) {
    __ZNK7WebCore14FrameSelection6boundsEb(i11, i1, 0);
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i8, i11);
    i17 = HEAP32[i7 + 4 >> 2] | 0;
    i16 = i6 + 8 | 0;
    i15 = HEAP32[i16 >> 2] | 0;
    i13 = HEAP32[i16 + 4 >> 2] | 0;
    HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
    HEAP32[i5 + 4 >> 2] = i17;
    HEAP32[i5 + 8 >> 2] = i15;
    HEAP32[i5 + 12 >> 2] = i13;
    break;
   }
   i13 = i10 | 0;
   i15 = HEAP32[i1 + 44 >> 2] | 0;
   HEAP32[i13 >> 2] = i15;
   if ((i15 | 0) == 0) {
    i17 = i10 + 8 | 0;
    i18 = 0;
    i19 = i17;
    i20 = i17;
   } else {
    i17 = i15 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    i17 = i10 + 8 | 0;
    i15 = i17;
    i18 = HEAP32[i15 >> 2] & -8;
    i19 = i17;
    i20 = i15;
   }
   HEAP32[i10 + 4 >> 2] = HEAP32[i1 + 48 >> 2];
   i15 = HEAP32[i1 + 52 >> 2] | 0;
   i17 = i18 | i15 & 7;
   HEAP32[i20 >> 2] = i17;
   HEAP8[i19] = i17 & 255 & -9 | i15 & 8;
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i9, i10, 1);
   __ZNK7WebCore15VisiblePosition19absoluteCaretBoundsEv(i8, i9);
   i15 = HEAP32[i7 + 4 >> 2] | 0;
   i17 = i6 + 8 | 0;
   i16 = HEAP32[i17 >> 2] | 0;
   i14 = HEAP32[i17 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i5 + 4 >> 2] = i15;
   HEAP32[i5 + 8 >> 2] = i16;
   HEAP32[i5 + 12 >> 2] = i14;
   i14 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i16 = i14 + 8 | 0;
     i15 = i16 | 0;
     i17 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i16 = i14 + 8 | 0;
   i14 = i16 | 0;
   i17 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
  } else if ((i12 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
 } while (0);
 i12 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i12 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = (HEAP32[i12 + 12 >> 2] & 2048 | 0) == 0;
 i7 = i12 + 32 | 0;
 if (i9) {
  i21 = i7 | 0;
 } else {
  i21 = HEAP32[i7 >> 2] | 0;
 }
 do {
  if ((HEAP32[i21 >> 2] | 0) != 0) {
   if (i9) {
    i22 = i7 | 0;
   } else {
    i22 = HEAP32[i7 >> 2] | 0;
   }
   if (!(__ZN7WebCore12RenderObject19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(HEAP32[i22 >> 2] | 0, i5, i2, i2) | 0)) {
    break;
   }
   __ZN7WebCore14FrameSelection16updateAppearanceEv(i1);
  }
 } while (0);
 i1 = i12 + 8 | 0;
 i12 = i1 | 0;
 i2 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 HEAP32[i12 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i2 | 0) | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = (i3 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i7 | 0, i10 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (i9) {
   if ((i10 | 0) == 0) {
    i12 = 9;
   } else {
    i12 = 11;
   }
  } else {
   i11 = (i10 | 0) == 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    if (i11) {
     i12 = 9;
     break;
    } else {
     i12 = 11;
     break;
    }
   }
   do {
    if (i11) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i12 = 34;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 34;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i13 = i5 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i12 = 34;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i10;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 0;
     i15 = i14;
     i16 = i13;
    }
   } while (0);
   if ((i12 | 0) == 34) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i16 + (i11 << 1) >> 1] = HEAPU8[i2 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i17 = 0;
      }
      while (1) {
       HEAP16[i16 + (i17 + i7 << 1) >> 1] = HEAP16[i14 + (i17 << 1) >> 1] | 0;
       i17 = i17 + 1 | 0;
       if (i17 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     } else {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i18 = 0;
      }
      while (1) {
       HEAP16[i16 + (i18 + i7 << 1) >> 1] = HEAPU8[i14 + i18 | 0] | 0;
       i18 = i18 + 1 | 0;
       if (i18 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 11) {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 18;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i15 = i6 | 0;
   i18 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i18 | 0) == 0) {
    i12 = 18;
    break;
   }
   i15 = i18 + 20 | 0;
   HEAP32[i18 >> 2] = 2;
   HEAP32[i18 + 4 >> 2] = i10;
   HEAP32[i18 + 8 >> 2] = i15;
   HEAP32[i18 + 12 >> 2] = 0;
   HEAP32[i18 + 16 >> 2] = 32;
   i19 = i18;
   i20 = i15;
  } else if ((i12 | 0) == 9) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i12 = 18;
    break;
   }
   i18 = i15 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i19 = i15;
   i20 = 0;
  }
 } while (0);
 if ((i12 | 0) == 18) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 _memcpy(i20 | 0, i2 | 0, i7) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = HEAP32[i2 + 4 >> 2] | 0;
   i12 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i21 = 0;
   }
   while (1) {
    HEAP8[i20 + (i21 + i7) | 0] = HEAP8[i12 + i21 | 0] | 0;
    i21 = i21 + 1 | 0;
    if (i21 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i19;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection27nextWordPositionForPlatformERKNS_15VisiblePositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 56 | 0;
 __ZN7WebCore16nextWordPositionERKNS_15VisiblePositionE(i1, i3);
 i10 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore6Editor8behaviorEv(i5, HEAP32[i10 + 464 >> 2] | 0);
 if ((HEAP32[i5 >> 2] | 0) != 1) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore16nextWordPositionERKNS_15VisiblePositionE(i6, i1);
 do {
  if (!(__ZN7WebCoreeqERKNS_15VisiblePositionES2_(i6, i1) | 0)) {
   __ZN7WebCore20previousWordPositionERKNS_15VisiblePositionE(i7, i6);
   i5 = i7 | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   i2 = i1 | 0;
   i11 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i10;
   do {
    if ((i11 | 0) != 0) {
     i10 = i11 + 8 | 0;
     i2 = i10 | 0;
     i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     HEAP32[i2 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   i11 = HEAP32[i7 + 8 >> 2] | 0;
   i10 = i1 + 8 | 0;
   i12 = i10;
   i2 = HEAP32[i12 >> 2] & -8 | i11 & 7;
   HEAP32[i12 >> 2] = i2;
   HEAP8[i10] = i2 & 255 & -9 | i11 & 8;
   HEAP32[i1 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
   i11 = HEAP32[i5 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i2 = i11 + 8 | 0;
   i11 = i2 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16nextWordPositionERKNS_15VisiblePositionE(i9, i3);
 __ZN7WebCore20previousWordPositionERKNS_15VisiblePositionE(i8, i9);
 i3 = __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i8) | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 + 8 | 0;
   i2 = i8 | 0;
   i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 8 | 0;
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i7 = i6 | 0;
 if (i3) {
  i3 = HEAP32[i7 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i9 = i3 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  i9 = i1 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i3;
  do {
   if ((i10 | 0) != 0) {
    i3 = i10 + 8 | 0;
    i9 = i3 | 0;
    i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    HEAP32[i9 >> 2] = i8;
    if ((i8 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
   }
  } while (0);
  HEAP32[i1 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  i10 = HEAP32[i6 + 8 >> 2] | 0;
  i3 = i1 + 8 | 0;
  i8 = i3;
  i9 = HEAP32[i8 >> 2] & -8 | i10 & 7;
  HEAP32[i8 >> 2] = i9;
  HEAP8[i3] = i9 & 255 & -9 | i10 & 8;
  HEAP32[i1 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 }
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 8 | 0;
 i6 = i7 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection20directionOfSelectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 56 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 i9 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = i9 + 8 | 0;
   i11 = i10 - 8 | 0;
   i12 = i10 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i13;
   do {
    if ((i13 | 0) < 1) {
     if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11);
    }
   } while (0);
   if ((HEAP32[i1 + 84 >> 2] | 0) == 2) {
    i14 = 1;
   } else {
    i14 = HEAP32[i1 + 80 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i7, i1 + 56 | 0, i14);
   __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i7 | 0, HEAP32[i7 + 12 >> 2] | 0, i4, i6);
   i11 = HEAP32[i7 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i10 = i11 + 8 | 0;
   i11 = i10 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i14 = i7 + 8 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   i14 = i7 + 8 | 0;
   i9 = i14 - 8 | 0;
   i10 = i14 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i13;
   do {
    if ((i13 | 0) < 1) {
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9);
    }
   } while (0);
   if ((HEAP32[i1 + 84 >> 2] | 0) == 2) {
    i15 = 0;
   } else {
    i15 = HEAP32[i1 + 80 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i8, i1 + 68 | 0, i15);
   __ZNK7WebCore8Position21getInlineBoxAndOffsetENS_9EAffinityERPNS_9InlineBoxERi(i8 | 0, HEAP32[i8 + 12 >> 2] | 0, i5, i6);
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i14 = i9 + 8 | 0;
   i9 = i14 | 0;
   i13 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i13;
   if ((i13 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
  }
 } while (0);
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i4 = HEAP32[i5 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i6 = (HEAP32[i8 + 32 >> 2] | 0) >>> 2 & 1;
   if ((i6 | 0) == ((HEAP32[i4 + 32 >> 2] | 0) >>> 2 & 1 | 0)) {
    i16 = i6 ^ 1;
   } else {
    break;
   }
   STACKTOP = i2;
   return i16 | 0;
  }
 } while (0);
 i8 = i3 | 0;
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 HEAP32[i8 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i3 + 8 | 0;
  i17 = 0;
  i18 = i6;
  i19 = i6;
 } else {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i6 = i3 + 8 | 0;
  i5 = i6;
  i17 = HEAP32[i5 >> 2] & -8;
  i18 = i6;
  i19 = i5;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 48 >> 2];
 i5 = HEAP32[i1 + 52 >> 2] | 0;
 i1 = i5 & 7 | i17;
 HEAP32[i19 >> 2] = i1;
 HEAP8[i18] = i1 & 255 & -9 | i5 & 8;
 i5 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i3) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i16 = i5;
  STACKTOP = i2;
  return i16 | 0;
 }
 i8 = i3 + 8 | 0;
 i3 = i8 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  i16 = i5;
  STACKTOP = i2;
  return i16 | 0;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  i16 = i5;
  STACKTOP = i2;
  return i16 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 i16 = i5;
 STACKTOP = i2;
 return i16 | 0;
}
function __ZNK7WebCore14FrameSelection11currentFormEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[(HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 456 >> 2] | 0) + 680 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = i3 | 0;
   i6 = HEAP32[i1 + 56 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) == 0) {
    i7 = i3 + 8 | 0;
    i8 = 0;
    i9 = i7;
    i10 = i7;
   } else {
    i7 = i6 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    i7 = i3 + 8 | 0;
    i6 = i7;
    i8 = HEAP32[i6 >> 2] & -8;
    i9 = i7;
    i10 = i6;
   }
   HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
   i6 = HEAP32[i1 + 64 >> 2] | 0;
   i7 = i8 | i6 & 7;
   HEAP32[i10 >> 2] = i7;
   HEAP8[i9] = i7 & 255 & -9 | i6 & 8;
   i6 = __ZNK7WebCore8Position7elementEv(i3) | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i5 = i7 + 8 | 0;
     i11 = i5 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     HEAP32[i11 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    }
   } while (0);
   if ((i6 | 0) == 0) {
    i13 = 0;
   } else {
    i14 = i6;
    break;
   }
   STACKTOP = i2;
   return i13 | 0;
  } else {
   i14 = i4;
  }
 } while (0);
 do {
  if ((HEAP32[i14 + 12 >> 2] & 16 | 0) == 0) {
   i15 = 13;
  } else {
   if ((HEAP32[(HEAP32[i14 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i15 = 13;
    break;
   }
   i16 = i14;
   i15 = 21;
  }
 } while (0);
 L17 : do {
  if ((i15 | 0) == 13) {
   i4 = HEAP32[i14 + 16 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i4 + 12 >> 2] | 0;
   if ((i3 & 4 | 0) == 0) {
    break;
   }
   i9 = (HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 | 0;
   i10 = i4;
   i4 = i3;
   while (1) {
    if ((i4 & 16 | 0) != 0) {
     if ((HEAP32[(HEAP32[i10 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
      break;
     }
    }
    i3 = HEAP32[i10 + 16 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break L17;
    }
    i8 = HEAP32[i3 + 12 >> 2] | 0;
    if ((i8 & 4 | 0) == 0) {
     break L17;
    } else {
     i10 = i3;
     i4 = i8;
    }
   }
   i16 = i10;
   i15 = 21;
  }
 } while (0);
 do {
  if ((i15 | 0) == 21) {
   if ((i16 | 0) == 0) {
    break;
   } else {
    i13 = i16;
   }
   STACKTOP = i2;
   return i13 | 0;
  }
 } while (0);
 L32 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 448 >> 2] & 1](i14) | 0) {
   i17 = i14;
   i15 = 30;
  } else {
   i16 = HEAP32[i14 + 16 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
    break;
   } else {
    i18 = i16;
   }
   while (1) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 448 >> 2] & 1](i18) | 0) {
     break;
    }
    i16 = HEAP32[i18 + 16 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break L32;
    }
    if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
     break L32;
    } else {
     i18 = i16;
    }
   }
   i17 = i18;
   i15 = 30;
  }
 } while (0);
 do {
  if ((i15 | 0) == 30) {
   if ((i17 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i17 + 60 >> 2] | 0;
   STACKTOP = i2;
   return i13 | 0;
  }
 } while (0);
 i13 = __ZN7WebCoreL11scanForFormEPNS_7ElementE(i14) | 0;
 STACKTOP = i2;
 return i13 | 0;
}
function __ZN7WebCore14FrameSelection17nodeWillBeRemovedEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 if ((HEAP32[i1 + 84 >> 2] | 0) == 0) {
  return;
 }
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 12 >> 2] & 256 | 0) != 0) {
    break;
   }
   return;
  }
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 do {
  if (i4) {
   i5 = 0;
  } else {
   i6 = i3 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   if ((i3 | 0) == (i2 | 0)) {
    i5 = 1;
    break;
   }
   if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
    i5 = 0;
    break;
   }
   i5 = __ZNK7WebCore4Node26containsIncludingShadowDOMEPKS0_(i2, i3) | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 44 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i7) {
   i8 = 0;
  } else {
   i9 = i6 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   if ((i6 | 0) == (i2 | 0)) {
    i8 = 1;
    break;
   }
   if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
    i8 = 0;
    break;
   }
   i8 = __ZNK7WebCore4Node26containsIncludingShadowDOMEPKS0_(i2, i6) | 0;
  }
 } while (0);
 i9 = HEAP32[i1 + 56 >> 2] | 0;
 i10 = (i9 | 0) == 0;
 do {
  if (i10) {
   i11 = 0;
  } else {
   i12 = i9 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   if ((i9 | 0) == (i2 | 0)) {
    i11 = 1;
    break;
   }
   if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
    i11 = 0;
    break;
   }
   i11 = __ZNK7WebCore4Node26containsIncludingShadowDOMEPKS0_(i2, i9) | 0;
  }
 } while (0);
 i12 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   __ZN7WebCore14FrameSelection25respondToNodeModificationEPNS_4NodeEbbbb(i1, i2, i5, i8, i11, 0);
  } else {
   i13 = i12 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   do {
    if ((i12 | 0) == (i2 | 0)) {
     i14 = 1;
    } else {
     if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
      i14 = 0;
      break;
     }
     i14 = __ZNK7WebCore4Node26containsIncludingShadowDOMEPKS0_(i2, i12) | 0;
    }
   } while (0);
   __ZN7WebCore14FrameSelection25respondToNodeModificationEPNS_4NodeEbbbb(i1, i2, i5, i8, i11, i14);
   i13 = i12 + 8 | 0;
   i15 = i13 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   HEAP32[i15 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 do {
  if (!i10) {
   i12 = i9 + 8 | 0;
   i14 = i12 | 0;
   i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 do {
  if (!i7) {
   i9 = i6 + 8 | 0;
   i10 = i9 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 if (i4) {
  return;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 return;
}
function __ZN7WebCore9CaretBase15updateCaretRectEPNS_8DocumentERKNS_15VisiblePositionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 + 16 | 0;
 i6 = i4 + 24 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 __ZN7WebCore8Document19updateStyleIfNeededEv(i2);
 i2 = i4 | 0;
 _memset(i2 | 0, 0, 16) | 0;
 i12 = i1;
 HEAP32[i12 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i12 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i12 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i12 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP8[i1 + 16 | 0] = 0;
 i1 = i3 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 __ZNK7WebCore15VisiblePosition14localCaretRectERPNS_12RenderObjectE(i8, i3, i5);
 i3 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i14 = 0;
  } else {
   i1 = i3 + 8 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   i1 = i3 + 32 | 0;
   if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
    i15 = i1 | 0;
   } else {
    i15 = HEAP32[i1 >> 2] | 0;
   }
   i1 = HEAP32[i15 >> 2] | 0;
   L10 : do {
    if ((i1 | 0) == 0) {
     i16 = 0;
    } else {
     do {
      if ((HEAP32[i1 + 20 >> 2] & 768 | 0) != 256) {
       if ((HEAP32[i1 + 24 >> 2] & 32 | 0) == 0) {
        break;
       }
       if (__ZN7WebCore14isTableElementEPNS_4NodeE(i3) | 0) {
        break;
       }
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 132 >> 2] & 1](i3) | 0) {
        i16 = i1;
        break L10;
       }
      }
     } while (0);
     i16 = __ZNK7WebCore12RenderObject15containingBlockEv(i1) | 0;
    }
   } while (0);
   i1 = i3 + 8 | 0;
   i2 = i1 | 0;
   i17 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    i14 = i16;
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    i14 = i16;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
   i14 = i16;
  }
 } while (0);
 i16 = HEAP32[i5 >> 2] | 0;
 L21 : do {
  if ((i16 | 0) != (i14 | 0)) {
   i3 = i9 | 0;
   i15 = i9 + 4 | 0;
   i1 = i6;
   i17 = i8 + 4 | 0;
   i2 = i16;
   while (1) {
    i18 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i2, 0, 0) | 0;
    i2 = i18 | 0;
    if ((i18 | 0) == 0) {
     i13 = 1;
     break;
    }
    i18 = HEAP32[i5 >> 2] | 0;
    i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + 468 >> 2] | 0;
    i20 = HEAP32[i7 + 4 >> 2] | 0;
    HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
    HEAP32[i10 + 4 >> 2] = i20;
    FUNCTION_TABLE_viiiii[i19 & 1](i9, i18, i2, i11, 0);
    i18 = HEAP32[i15 >> 2] | 0;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + i18;
    HEAP32[i5 >> 2] = i2;
    if ((i2 | 0) == (i14 | 0)) {
     break L21;
    }
   }
   STACKTOP = i4;
   return i13 | 0;
  }
 } while (0);
 i14 = i6;
 HEAP32[i12 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i12 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i12 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i12 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 i13 = 1;
 STACKTOP = i4;
 return i13 | 0;
}
function __ZN7WebCore16VisibleSelectionaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i5 = i2 + 8 | 0;
 i3 = i1 + 8 | 0;
 i6 = i3;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i3] = i4 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 12 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
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
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i3 = i2 + 20 | 0;
 i5 = i1 + 20 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i5 = i2 + 32 | 0;
 i3 = i1 + 32 | 0;
 i6 = i3;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i3] = i4 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 36 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
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
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i3 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i4 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i4;
 HEAP8[i2] = i4 & -3 | HEAP8[i3] & 2;
 return i1 | 0;
}
function __ZN7WebCoreeqERKNS_15VisiblePositionES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i4 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) == 0) {
  i8 = i4 + 8 | 0;
  i9 = 0;
  i10 = i8;
  i11 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i4 + 8 | 0;
  i7 = i8;
  i9 = HEAP32[i7 >> 2] & -8;
  i10 = i8;
  i11 = i7;
 }
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i1 + 4 >> 2];
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i9 | i8 & 7;
 HEAP32[i11 >> 2] = i1;
 HEAP8[i10] = i1 & 255 & -9 | i8 & 8;
 i8 = i5 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 if ((i1 | 0) == 0) {
  i12 = 0;
 } else {
  i9 = i1 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i12 = HEAP32[i8 >> 2] | 0;
 }
 i9 = i5 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 + 4 >> 2];
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i5 + 8 | 0;
 i13 = i2;
 i14 = HEAP32[i13 >> 2] & -8 | i1 & 7;
 HEAP32[i13 >> 2] = i14;
 i15 = i14 & 255 & -9 | i1 & 8;
 HEAP8[i2] = i15;
 if ((HEAP32[i6 >> 2] | 0) == (i12 | 0)) {
  do {
   if ((HEAP8[i10] & 8) == 0) {
    i1 = HEAP32[i11 >> 2] & 7;
    if (!((i1 | 0) == 2 | (i1 | 0) == 4)) {
     i16 = 9;
     break;
    }
    i1 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i4) | 0;
    i17 = i1;
    i18 = HEAP8[i2] | 0;
   } else {
    i16 = 9;
   }
  } while (0);
  if ((i16 | 0) == 9) {
   i17 = HEAP32[i7 >> 2] | 0;
   i18 = i15;
  }
  do {
   if ((i18 & 8) == 0) {
    i15 = HEAP32[i13 >> 2] & 7;
    if (!((i15 | 0) == 2 | (i15 | 0) == 4)) {
     i16 = 13;
     break;
    }
    i19 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i5) | 0;
   } else {
    i16 = 13;
   }
  } while (0);
  if ((i16 | 0) == 13) {
   i19 = HEAP32[i9 >> 2] | 0;
  }
  if ((i17 | 0) == (i19 | 0)) {
   i20 = ((HEAP32[i13 >> 2] ^ HEAP32[i11 >> 2]) & 7 | 0) == 0;
  } else {
   i20 = 0;
  }
  i21 = i20;
  i22 = HEAP32[i8 >> 2] | 0;
 } else {
  i21 = 0;
  i22 = i12;
 }
 do {
  if ((i22 | 0) != 0) {
   i12 = i22 + 8 | 0;
   i8 = i12 | 0;
   i20 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i20;
   if ((i20 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i22 = HEAP32[i6 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 i6 = i22 + 8 | 0;
 i22 = i6 | 0;
 i12 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 HEAP32[i22 >> 2] = i12;
 if ((i12 | 0) >= 1) {
  STACKTOP = i3;
  return i21 | 0;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i21 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return i21 | 0;
}
function __ZN7WebCore14FrameSelection14willBeModifiedENS0_11EAlterationENS_18SelectionDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 if ((i2 | 0) != 1) {
  STACKTOP = i4;
  return;
 }
 i2 = i1 + 32 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i1 + 56 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) == 0) {
  i9 = i5 + 8 | 0;
  i10 = 0;
  i11 = i9;
  i12 = i9;
 } else {
  i9 = i8 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i9 = i5 + 8 | 0;
  i8 = i9;
  i10 = HEAP32[i8 >> 2] & -8;
  i11 = i9;
  i12 = i8;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
 i8 = HEAP32[i1 + 64 >> 2] | 0;
 i9 = i10 | i8 & 7;
 HEAP32[i12 >> 2] = i9;
 HEAP8[i11] = i9 & 255 & -9 | i8 & 8;
 i8 = i6 | 0;
 i9 = HEAP32[i1 + 68 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i11 = i9 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 72 >> 2];
 i11 = HEAP32[i1 + 76 >> 2] | 0;
 i9 = i6 + 8 | 0;
 i12 = i9;
 i10 = HEAP32[i12 >> 2] & -8 | i11 & 7;
 HEAP32[i12 >> 2] = i10;
 HEAP8[i9] = i10 & 255 & -9 | i11 & 8;
 i11 = HEAP8[i1 + 88 | 0] | 0;
 do {
  if ((i11 & 2) == 0) {
   if ((i3 | 0) == 2) {
    if ((__ZN7WebCore14FrameSelection20directionOfSelectionEv(i1) | 0) == 1) {
     i13 = 12;
     break;
    } else {
     i13 = 13;
     break;
    }
   } else if ((i3 | 0) == 3) {
    if ((__ZN7WebCore14FrameSelection20directionOfSelectionEv(i1) | 0) == 1) {
     i13 = 13;
     break;
    } else {
     i13 = 12;
     break;
    }
   } else if ((i3 | 0) == 1) {
    i13 = 13;
    break;
   } else {
    i13 = 12;
    break;
   }
  } else {
   if ((i11 & 1) == 0) {
    i13 = 13;
   } else {
    i13 = 12;
   }
  }
 } while (0);
 if ((i13 | 0) == 12) {
  __ZN7WebCore16VisibleSelection7setBaseERKNS_8PositionE(i2, i5);
  __ZN7WebCore16VisibleSelection9setExtentERKNS_8PositionE(i2, i6);
 } else if ((i13 | 0) == 13) {
  __ZN7WebCore16VisibleSelection7setBaseERKNS_8PositionE(i2, i6);
  __ZN7WebCore16VisibleSelection9setExtentERKNS_8PositionE(i2, i5);
 }
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i2 = i8 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i5 + 8 | 0;
 i5 = i7 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection20setSelectionFromNoneEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 72 | 0;
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 i7 = HEAP32[i6 + 456 >> 2] | 0;
 if ((HEAP32[i1 + 84 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i8 = (HEAP8[(HEAP32[i6 + 36 >> 2] | 0) + 183 | 0] & 4) != 0;
 if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i7 | 0, 0, 1) | 0 | i8)) {
  STACKTOP = i2;
  return;
 }
 i8 = HEAP32[i7 + 692 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i8 | 0;
 L10 : while (1) {
  i8 = HEAP32[i7 + 12 >> 2] | 0;
  do {
   if ((i8 & 4 | 0) != 0) {
    i6 = HEAP32[i7 + 44 >> 2] | 0;
    i9 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
    if ((i6 | 0) == (i9 | 0)) {
     break L10;
    }
    if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0)) {
     break L10;
    }
   }
  } while (0);
  if ((i8 & 2 | 0) != 0) {
   i9 = HEAP32[i7 + 36 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i7 = i9;
    continue;
   }
  }
  i9 = HEAP32[i7 + 28 >> 2] | 0;
  if ((i9 | 0) != 0) {
   i7 = i9;
   continue;
  }
  i9 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeE(i7) | 0;
  if ((i9 | 0) == 0) {
   i10 = 27;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i10 | 0) == 27) {
  STACKTOP = i2;
  return;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 132 >> 2] & 1](i7) | 0) {
   __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i5, i7);
  } else {
   i10 = i3 | 0;
   HEAP32[i10 >> 2] = i7;
   i9 = i7 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i5, i3, 1);
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 + 8 | 0;
   i9 = i10 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i4, i5, 1, 0);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i4, 6, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 + 8 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i1;
 if ((i1 | 0) >= 1) {
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
function __ZN7WebCore19DragCaretController17nodeWillBeRemovedEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 + 24 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 12 >> 2] & 256 | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i7 = i6 + 8 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 HEAP32[i7 >> 2] = i8;
 do {
  if ((i6 | 0) == (i2 | 0)) {
   i9 = 1;
   i10 = i8;
  } else {
   if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
    i9 = 0;
    i10 = i8;
    break;
   }
   i7 = __ZNK7WebCore4Node26containsIncludingShadowDOMEPKS0_(i2, i6) | 0;
   i9 = i7;
   i10 = HEAP32[i6 + 8 >> 2] | 0;
  }
 } while (0);
 i2 = i6 + 8 | 0;
 i6 = i2 - 8 | 0;
 i8 = i10 - 1 | 0;
 HEAP32[i2 >> 2] = i8;
 do {
  if ((i8 | 0) < 1) {
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    i11 = 10;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6);
   if (i9) {
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   i11 = 10;
  }
 } while (0);
 do {
  if ((i11 | 0) == 10) {
   if (i9) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i9 = HEAP32[i5 >> 2] | 0;
 i5 = (i9 | 0) == 0;
 if (!i5) {
  i11 = i9 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i6 = i11 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 __ZN7WebCore8Document19updateStyleIfNeededEv(i11);
 i6 = HEAP32[i11 + 1584 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore10RenderView14clearSelectionEv(i6);
 }
 i6 = i11 + 8 | 0;
 i11 = i6 - 8 | 0;
 i2 = i6 | 0;
 i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i8;
 do {
  if ((i8 | 0) < 1) {
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11);
  }
 } while (0);
 do {
  if (!i5) {
   i11 = i9 + 8 | 0;
   i6 = i11 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 _memset(i4 | 0, 0, 12) | 0;
 HEAP32[i4 + 12 >> 2] = 1;
 __ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE(i1, i4);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 + 8 | 0;
 i1 = i4 | 0;
 i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 + 24 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = i1 + 32 | 0;
  i9 = i8;
  i10 = i8;
 } else {
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i1 + 32 | 0;
  i11 = i7 + 8 | 0;
  i12 = i11 - 8 | 0;
  i13 = i11 | 0;
  i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
  HEAP32[i13 >> 2] = i14;
  do {
   if ((i14 | 0) < 1) {
    if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i12);
   }
  } while (0);
  __ZN7WebCore9CaretBase19invalidateCaretRectEPNS_4NodeEb(i1 | 0, i7, 0);
  i9 = i8;
  i10 = i8;
 }
 i8 = i1 + 28 | 0;
 i7 = i10;
 i10 = HEAP32[i2 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i12 = i10 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i10;
 do {
  if ((i12 | 0) != 0) {
   i10 = i12 + 8 | 0;
   i11 = i10 | 0;
   i14 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 HEAP32[i8 >> 2] = HEAP32[i2 + 4 >> 2];
 i8 = i2 + 8 | 0;
 i12 = HEAP32[i7 >> 2] & -8 | HEAP32[i8 >> 2] & 7;
 HEAP32[i7 >> 2] = i12;
 HEAP8[i9] = i12 & 255 & -9 | HEAP8[i8] & 8;
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 12 >> 2];
 i2 = i1 | 0;
 HEAP8[i1 + 16 | 0] = 1;
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = HEAP32[i8 + 8 >> 2] | 0;
   i9 = i8 + 8 | 0;
   i7 = i9 - 8 | 0;
   HEAP32[i9 >> 2] = i12;
   do {
    if ((i12 | 0) < 1) {
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7);
    }
   } while (0);
   __ZN7WebCore9CaretBase19invalidateCaretRectEPNS_4NodeEb(i2, i8, 0);
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   if ((HEAP32[i7 + 12 >> 2] & 256 | 0) == 0) {
    break;
   }
   __ZN7WebCore9CaretBase15updateCaretRectEPNS_8DocumentERKNS_15VisiblePositionE(i2, HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0, i5) | 0;
   STACKTOP = i3;
   return;
  }
 } while (0);
 i5 = i4;
 _llvm_lifetime_start(16, 0, i5 | 0);
 _memset(i5 | 0, 0, 16) | 0;
 i4 = i1;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 _llvm_lifetime_end(16, 0, i5 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9TraversalINS_11HTMLElementEE4nextEPKNS_13ContainerNodeEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = i1 | 0;
   if ((i4 | 0) == (i2 | 0)) {
    i5 = 0;
    break;
   }
   i6 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i7 = i6;
    i8 = 5;
    break;
   }
   i6 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i4, i2) | 0;
   if ((i6 | 0) == 0) {
    i5 = 0;
   } else {
    i7 = i6;
    i8 = 5;
   }
  } else {
   i7 = i3;
   i8 = 5;
  }
 } while (0);
 L5 : do {
  if ((i8 | 0) == 5) {
   if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
    i3 = i7;
    while (1) {
     if ((i3 | 0) == (i2 | 0)) {
      i5 = 0;
      break L5;
     }
     i1 = HEAP32[i3 + 28 >> 2] | 0;
     if ((i1 | 0) == 0) {
      i6 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i3, i2) | 0;
      if ((i6 | 0) == 0) {
       i5 = 0;
       break L5;
      } else {
       i9 = i6;
      }
     } else {
      i9 = i1;
     }
     if ((HEAP32[i9 + 12 >> 2] & 4 | 0) == 0) {
      i3 = i9;
     } else {
      i10 = i9;
      break;
     }
    }
   } else {
    i10 = i7;
   }
   L14 : while (1) {
    if ((HEAP32[i10 + 12 >> 2] & 16 | 0) != 0) {
     i5 = i10;
     break L5;
    }
    i3 = HEAP32[i10 + 36 >> 2] | 0;
    do {
     if ((i3 | 0) == 0) {
      if ((i10 | 0) == (i2 | 0)) {
       i5 = 0;
       break L5;
      }
      i1 = HEAP32[i10 + 28 >> 2] | 0;
      if ((i1 | 0) != 0) {
       i11 = i1;
       break;
      }
      i1 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i10, i2) | 0;
      if ((i1 | 0) == 0) {
       i5 = 0;
       break L5;
      } else {
       i11 = i1;
      }
     } else {
      i11 = i3;
     }
    } while (0);
    if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
     i12 = i11;
    } else {
     i10 = i11;
     continue;
    }
    while (1) {
     if ((i12 | 0) == (i2 | 0)) {
      i5 = 0;
      break L5;
     }
     i3 = HEAP32[i12 + 28 >> 2] | 0;
     if ((i3 | 0) == 0) {
      i1 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i2) | 0;
      if ((i1 | 0) == 0) {
       i5 = 0;
       break L5;
      } else {
       i13 = i1;
      }
     } else {
      i13 = i3;
     }
     if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
      i12 = i13;
     } else {
      i10 = i13;
      continue L14;
     }
    }
   }
  }
 } while (0);
 return i5 | 0;
}
function __ZNK7WebCore9CaretBase26absoluteBoundsForLocalRectEPNS_4NodeERKNS_10LayoutRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i2 | 0;
 i6 = i2 + 16 | 0;
 i7 = i2 + 32 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = i3 + 32 | 0;
   if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
    i12 = i11 | 0;
   } else {
    i12 = HEAP32[i11 >> 2] | 0;
   }
   i11 = HEAP32[i12 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[i11 + 20 >> 2] & 768 | 0) == 256) {
     i13 = 10;
    } else {
     if ((HEAP32[i11 + 24 >> 2] & 32 | 0) == 0) {
      i13 = 10;
      break;
     }
     if (__ZN7WebCore14isTableElementEPNS_4NodeE(i3) | 0) {
      i13 = 10;
      break;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 132 >> 2] & 1](i3) | 0) {
      i14 = i11;
     } else {
      i13 = 10;
     }
    }
   } while (0);
   if ((i13 | 0) == 10) {
    i14 = __ZNK7WebCore12RenderObject15containingBlockEv(i11) | 0;
   }
   if ((i14 | 0) == 0) {
    break;
   }
   i15 = i6;
   i16 = i4;
   HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i15 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
   HEAP32[i15 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
   HEAP32[i15 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
   if ((HEAP32[i14 + 20 >> 2] & 512 | 0) != 0) {
    __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i14, i6);
   }
   d17 = +(HEAP32[i6 >> 2] | 0);
   d18 = +(HEAP32[i6 + 4 >> 2] | 0);
   d19 = +(HEAP32[i6 + 8 >> 2] | 0);
   d20 = +(HEAP32[i6 + 12 >> 2] | 0);
   d21 = +d17;
   d22 = +d18;
   HEAPF32[i8 >> 2] = d21;
   HEAPF32[i8 + 4 >> 2] = d22;
   d22 = d17 + d19;
   HEAPF32[i7 + 8 >> 2] = d22;
   HEAPF32[i9 + 12 >> 2] = d18;
   d19 = d18 + d20;
   HEAPF32[i7 + 16 >> 2] = d22;
   HEAPF32[i9 + 20 >> 2] = d19;
   HEAPF32[i7 + 24 >> 2] = d17;
   HEAPF32[i9 + 28 >> 2] = d19;
   __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i10, i14, i9, 0, 0, 0);
   __ZNK7WebCore9FloatQuad11boundingBoxEv(i5, i10);
   __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i5);
   STACKTOP = i2;
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 16) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 64 | 0;
 i8 = i5 + 80 | 0;
 i9 = i7 | 0;
 i10 = i2 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i9 >> 2] = i11;
 if ((i11 | 0) == 0) {
  i12 = i7 + 8 | 0;
  i13 = 0;
  i14 = 0;
  i15 = i12;
  i16 = i12;
 } else {
  i12 = i11 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  i12 = i7 + 8 | 0;
  i11 = i12;
  i13 = HEAP32[i11 >> 2] & -8;
  i14 = HEAP32[i10 >> 2] | 0;
  i15 = i12;
  i16 = i11;
 }
 i11 = i2 + 4 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 HEAP32[i7 + 4 >> 2] = i12;
 i10 = i2 + 8 | 0;
 i17 = HEAP32[i10 >> 2] | 0;
 i18 = i13 | i17 & 7;
 HEAP32[i16 >> 2] = i18;
 HEAP8[i15] = i18 & 255 & -9 | i17 & 8;
 i18 = i8 | 0;
 HEAP32[i18 >> 2] = i14;
 if ((i14 | 0) == 0) {
  i19 = i12;
  i20 = i17;
 } else {
  i17 = i14 + 8 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
  i19 = HEAP32[i11 >> 2] | 0;
  i20 = HEAP32[i10 >> 2] | 0;
 }
 HEAP32[i8 + 4 >> 2] = i19;
 i19 = i8 + 8 | 0;
 i10 = i19;
 i11 = HEAP32[i10 >> 2] & -8 | i20 & 7;
 HEAP32[i10 >> 2] = i11;
 HEAP8[i19] = i11 & 255 & -9 | i20 & 8;
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i6, i7, i8, HEAP32[i2 + 12 >> 2] | 0, (HEAP8[i1 + 88 | 0] & 2) != 0);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i6, i3 | 6, i4, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i6);
 i6 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i18 = i6 + 8 | 0;
   i4 = i18 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i6 + 8 | 0;
 i6 = i9 | 0;
 i18 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i18;
 if ((i18 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore14FrameSelection27focusedOrActiveStateChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 192 | 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((HEAP8[i2] & 8) == 0) {
   i4 = 0;
  } else {
   i5 = HEAP32[i3 + 32 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 0;
    break;
   }
   i4 = (HEAP8[(HEAP32[i5 + 32 >> 2] | 0) + 8 | 0] & 1) != 0;
  }
 } while (0);
 i5 = i1 + 24 | 0;
 i6 = HEAP32[i3 + 456 >> 2] | 0;
 i3 = i6 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 __ZN7WebCore8Document19updateStyleIfNeededEv(i6);
 i3 = HEAP32[i6 + 1584 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZNK7WebCore10RenderView16repaintSelectionEv(i3);
 }
 if (i4) {
  __ZN7WebCore14FrameSelection20setSelectionFromNoneEv(i1);
 }
 i3 = i4 & 1 ^ 1;
 i4 = i1 + 20 | 0;
 if ((HEAP32[i4 >> 2] | 0) != (i3 | 0)) {
  __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0);
  i7 = HEAP8[i2] | 0;
  if ((i7 & 2) != 0) {
   HEAP8[i2] = i7 & -3;
   __ZN7WebCore14FrameSelection19invalidateCaretRectEv(i1);
  }
  HEAP32[i4 >> 2] = i3;
  __ZN7WebCore14FrameSelection16updateAppearanceEv(i1);
 }
 __ZN7WebCore12EventHandler27capsLockStateMayHaveChangedEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 472 >> 2] | 0);
 i5 = HEAP32[i6 + 680 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i5 | 0, 32768);
   i1 = i5 + 32 | 0;
   if ((HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0) {
    i8 = i1 | 0;
   } else {
    i8 = HEAP32[i1 >> 2] | 0;
   }
   i1 = HEAP32[i8 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
    i9 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i9 = HEAP32[i1 + 36 >> 2] | 0;
   }
   if ((HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) == 0) {
    break;
   }
   i3 = __ZNK7WebCore12RenderObject5themeEv(i1) | 0;
   FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 1](i3, i1, 4) | 0;
  }
 } while (0);
 i9 = i6 + 8 | 0;
 i6 = i9 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 return;
}
function __ZNK7WebCore14FrameSelection6boundsEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = i9 | 0;
 i11 = i2 + 24 | 0;
 i2 = HEAP32[(HEAP32[i11 >> 2] | 0) + 456 >> 2] | 0;
 if ((i2 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore8Document19updateStyleIfNeededEv(i2);
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i11 >> 2] | 0) | 0;
 i12 = HEAP32[(HEAP32[i11 >> 2] | 0) + 452 >> 2] | 0;
 if ((i2 | 0) == 0 | (i12 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore10RenderView15selectionBoundsEb(i5, i2, i3);
 i2 = HEAP32[i6 >> 2] | 0;
 i11 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = i5 + 8 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 i13 = HEAP32[i6 + 4 >> 2] | 0;
 if (i3) {
  __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i9, i12 | 0, 0);
  i12 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i8 + 4 >> 2] = i12;
  i12 = i9 + 8 | 0;
  i9 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i8 + 8 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i8 + 12 >> 2] = i9;
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = i2;
  i12 = i7 + 4 | 0;
  HEAP32[i12 >> 2] = i11;
  i10 = i7 + 8 | 0;
  HEAP32[i10 >> 2] = i5;
  i3 = i7 + 12 | 0;
  HEAP32[i3 >> 2] = i13;
  __ZN7WebCore10LayoutRect9intersectERKS0_(i7, i8);
  i14 = HEAP32[i9 >> 2] | 0;
  i15 = HEAP32[i12 >> 2] | 0;
  i16 = HEAP32[i10 >> 2] | 0;
  i17 = HEAP32[i3 >> 2] | 0;
 } else {
  HEAP32[i7 >> 2] = i2;
  HEAP32[i7 + 4 >> 2] = i11;
  HEAP32[i7 + 8 >> 2] = i5;
  HEAP32[i7 + 12 >> 2] = i13;
  i14 = i2;
  i15 = i11;
  i16 = i5;
  i17 = i13;
 }
 i13 = i1;
 d18 = +(+(i14 | 0));
 d19 = +(+(i15 | 0));
 HEAPF32[i13 >> 2] = d18;
 HEAPF32[i13 + 4 >> 2] = d19;
 i13 = i1 + 8 | 0;
 d19 = +(+(i16 | 0));
 d18 = +(+(i17 | 0));
 HEAPF32[i13 >> 2] = d19;
 HEAPF32[i13 + 4 >> 2] = d18;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionES3_NS_14EUserTriggeredE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 64 | 0;
 i8 = i5 + 80 | 0;
 i9 = i7 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) == 0) {
  i11 = i7 + 8 | 0;
  i12 = 0;
  i13 = i11;
  i14 = i11;
 } else {
  i11 = i10 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  i11 = i7 + 8 | 0;
  i10 = i11;
  i12 = HEAP32[i10 >> 2] & -8;
  i13 = i11;
  i14 = i10;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i11 = i12 | i10 & 7;
 HEAP32[i14 >> 2] = i11;
 HEAP8[i13] = i11 & 255 & -9 | i10 & 8;
 i10 = i8 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i13 = i11 + 8 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 HEAP32[i8 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 i13 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = i8 + 8 | 0;
 i11 = i3;
 i14 = HEAP32[i11 >> 2] & -8 | i13 & 7;
 HEAP32[i11 >> 2] = i14;
 HEAP8[i3] = i14 & 255 & -9 | i13 & 8;
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i6, i7, i8, HEAP32[i2 + 12 >> 2] | 0, 1);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i6, i4 | 6, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i6);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 8 | 0;
   i4 = i10 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i6 + 8 | 0;
 i6 = i9 | 0;
 i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i10;
 if ((i10 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore14FrameSelection9setExtentERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 80 | 0;
 i8 = i6 | 0;
 i9 = HEAP32[i1 + 32 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i6 + 8 | 0;
  i11 = 0;
  i12 = i10;
  i13 = i10;
 } else {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i6 + 8 | 0;
  i9 = i10;
  i11 = HEAP32[i9 >> 2] & -8;
  i12 = i10;
  i13 = i9;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 36 >> 2];
 i9 = HEAP32[i1 + 40 >> 2] | 0;
 i10 = i11 | i9 & 7;
 HEAP32[i13 >> 2] = i10;
 HEAP8[i12] = i10 & 255 & -9 | i9 & 8;
 i9 = i7 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i12 = i10 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i12 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = i7 + 8 | 0;
 i13 = i10;
 i11 = HEAP32[i13 >> 2] & -8 | i12 & 7;
 HEAP32[i13 >> 2] = i11;
 HEAP8[i10] = i11 & 255 & -9 | i12 & 8;
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i5, i6, i7, HEAP32[i2 + 12 >> 2] | 0, 1);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i5, i3 | 6, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i5);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i3 = i9 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i5 + 8 | 0;
 i5 = i8 | 0;
 i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection7setBaseERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 80 | 0;
 i8 = i6 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i6 + 8 | 0;
  i11 = 0;
  i12 = i10;
  i13 = i10;
 } else {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i6 + 8 | 0;
  i9 = i10;
  i11 = HEAP32[i9 >> 2] & -8;
  i12 = i10;
  i13 = i9;
 }
 HEAP32[i6 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i9 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = i11 | i9 & 7;
 HEAP32[i13 >> 2] = i10;
 HEAP8[i12] = i10 & 255 & -9 | i9 & 8;
 i9 = i7 | 0;
 i10 = HEAP32[i1 + 44 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i12 = i10 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i1 + 48 >> 2];
 i12 = HEAP32[i1 + 52 >> 2] | 0;
 i10 = i7 + 8 | 0;
 i13 = i10;
 i11 = HEAP32[i13 >> 2] & -8 | i12 & 7;
 HEAP32[i13 >> 2] = i11;
 HEAP8[i10] = i11 & 255 & -9 | i12 & 8;
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i5, i6, i7, HEAP32[i2 + 12 >> 2] | 0, 1);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i5, i3 | 6, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i5);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i3 = i9 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i5 + 8 | 0;
 i5 = i8 | 0;
 i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14FrameSelection19dispatchSelectStartEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i3 | 0;
 i6 = HEAP32[i1 + 44 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i3 + 8 | 0;
  i8 = 0;
  i9 = i7;
  i10 = i7;
 } else {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i7 = i3 + 8 | 0;
  i6 = i7;
  i8 = HEAP32[i6 >> 2] & -8;
  i9 = i7;
  i10 = i6;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 48 >> 2];
 i6 = HEAP32[i1 + 52 >> 2] | 0;
 i1 = i8 | i6 & 7;
 HEAP32[i10 >> 2] = i1;
 HEAP8[i9] = i1 & 255 & -9 | i6 & 8;
 i6 = __ZNK7WebCore8Position13containerNodeEv(i3) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i1 = i5 | 0;
   i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  i11 = 1;
  STACKTOP = i2;
  return i11 | 0;
 }
 i3 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
 i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 328 | 0;
 i9 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i9, i5, 1, 1);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i9;
 i9 = FUNCTION_TABLE_iii[i3 & 1](i6, i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i11 = i9;
  STACKTOP = i2;
  return i11 | 0;
 }
 i5 = i4 + 8 | 0;
 i4 = i5 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i4 >> 2] = i6;
  i11 = i9;
  STACKTOP = i2;
  return i11 | 0;
 }
 i6 = i5 - 8 | 0;
 if ((i6 | 0) == 0) {
  i11 = i9;
  STACKTOP = i2;
  return i11 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
 i11 = i9;
 STACKTOP = i2;
 return i11 | 0;
}
function __ZN7WebCoreL11scanForFormEPNS_7ElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i1 + 12 >> 2] & 16 | 0) == 0) {
  i4 = __ZN7WebCore9TraversalINS_11HTMLElementEE4nextEPKNS_13ContainerNodeEPKNS_4NodeE(i3 | 0, i1 | 0) | 0;
 } else {
  i4 = i1;
 }
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = i3 | 0;
 i3 = i4;
 L11 : while (1) {
  if ((HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7formTagE >> 2] | 0) + 12 >> 2] | 0)) {
   i5 = 8;
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 448 >> 2] & 1](i3 | 0) | 0) {
   i5 = 10;
   break;
  }
  do {
   if ((HEAP32[i3 + 12 >> 2] & 16 | 0) != 0) {
    i4 = HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0;
    if ((i4 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0) + 12 >> 2] | 0)) {
     if ((i4 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0) + 12 >> 2] | 0)) {
      break;
     }
    }
    i4 = __ZNK7WebCore21HTMLFrameOwnerElement15contentDocumentEv(i3) | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    i6 = __ZN7WebCoreL11scanForFormEPNS_7ElementE(HEAP32[i4 + 692 >> 2] | 0) | 0;
    if ((i6 | 0) != 0) {
     i2 = i6;
     i5 = 21;
     break L11;
    }
   }
  } while (0);
  i6 = __ZN7WebCore9TraversalINS_11HTMLElementEE4nextEPKNS_13ContainerNodeEPKNS_4NodeE(i3 | 0, i1) | 0;
  if ((i6 | 0) == 0) {
   i2 = 0;
   i5 = 22;
   break;
  } else {
   i3 = i6;
  }
 }
 if ((i5 | 0) == 10) {
  i2 = HEAP32[i3 + 60 >> 2] | 0;
  return i2 | 0;
 } else if ((i5 | 0) == 22) {
  return i2 | 0;
 } else if ((i5 | 0) == 21) {
  return i2 | 0;
 } else if ((i5 | 0) == 8) {
  i2 = i3;
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore16VisibleSelectionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i4 = i2 + 8 | 0;
 i3 = i1 + 8 | 0;
 i5 = i3;
 i6 = HEAP32[i5 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i5 >> 2] = i6;
 HEAP8[i3] = i6 & 255 & -9 | HEAP8[i4] & 8;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i6 = i4 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i6 = i2 + 20 | 0;
 i4 = i1 + 20 | 0;
 i3 = i4;
 i5 = HEAP32[i3 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
 HEAP32[i3 >> 2] = i5;
 HEAP8[i4] = i5 & 255 & -9 | HEAP8[i6] & 8;
 i6 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i5 = i2 + 32 | 0;
 i6 = i1 + 32 | 0;
 i4 = i6;
 i3 = HEAP32[i4 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i4 >> 2] = i3;
 HEAP8[i6] = i3 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i1 + 36 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i3 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i1 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i1;
 HEAP8[i2] = i1 & -3 | HEAP8[i3] & 2;
 return;
}
function __ZN7WebCore14FrameSelectionC2EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 HEAP8[i1 + 16 | 0] = 1;
 HEAP32[i1 + 20 >> 2] = 1;
 i5 = i1 + 24 | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i1 + 28 >> 2] = -2147483648;
 __ZN7WebCore16VisibleSelectionC1Ev(i1 + 32 | 0);
 HEAP32[i1 + 92 >> 2] = 0;
 HEAP32[i1 + 96 >> 2] = 0;
 i6 = i1 + 100 | 0;
 i7 = i6;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i8 & -8;
 HEAP8[i6] = i8 & 255 & -16;
 HEAP32[i1 + 104 >> 2] = 1;
 HEAP32[i1 + 108 >> 2] = 0;
 HEAP32[i1 + 112 >> 2] = 0;
 HEAP32[i1 + 116 >> 2] = 0;
 i8 = i1 + 120 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 152;
 HEAP32[i1 + 164 >> 2] = i1;
 i8 = i1 + 168 | 0;
 HEAP32[i8 >> 2] = F_BASE_vii + 4;
 HEAP32[i8 + 4 >> 2] = 0;
 _memset(i1 + 176 | 0, 0, 16) | 0;
 i8 = i1 + 192 | 0;
 i6 = HEAP8[i8] & -8 | 3;
 HEAP8[i8] = i6;
 do {
  if ((i2 | 0) == 0) {
   i9 = 0;
  } else {
   i7 = HEAP32[i2 + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = ((HEAP32[(HEAP32[i7 + 32 >> 2] | 0) + 4 >> 2] | 0) == (i2 | 0)) << 3;
  }
 } while (0);
 HEAP8[i8] = i6 & -29 | i9;
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   __ZNK7WebCore6Editor8behaviorEv(i4, HEAP32[i9 + 464 >> 2] | 0);
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i4 = i1 + 88 | 0;
 HEAP8[i4] = HEAP8[i4] | 2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14FrameSelectionC1EPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 HEAP8[i1 + 16 | 0] = 1;
 HEAP32[i1 + 20 >> 2] = 1;
 i5 = i1 + 24 | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i1 + 28 >> 2] = -2147483648;
 __ZN7WebCore16VisibleSelectionC1Ev(i1 + 32 | 0);
 HEAP32[i1 + 92 >> 2] = 0;
 HEAP32[i1 + 96 >> 2] = 0;
 i6 = i1 + 100 | 0;
 i7 = i6;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i8 & -8;
 HEAP8[i6] = i8 & 255 & -16;
 HEAP32[i1 + 104 >> 2] = 1;
 HEAP32[i1 + 108 >> 2] = 0;
 HEAP32[i1 + 112 >> 2] = 0;
 HEAP32[i1 + 116 >> 2] = 0;
 i8 = i1 + 120 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 152;
 HEAP32[i1 + 164 >> 2] = i1;
 i8 = i1 + 168 | 0;
 HEAP32[i8 >> 2] = F_BASE_vii + 4;
 HEAP32[i8 + 4 >> 2] = 0;
 _memset(i1 + 176 | 0, 0, 16) | 0;
 i8 = i1 + 192 | 0;
 i6 = HEAP8[i8] & -8 | 3;
 HEAP8[i8] = i6;
 do {
  if ((i2 | 0) == 0) {
   i9 = 0;
  } else {
   i7 = HEAP32[i2 + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = ((HEAP32[(HEAP32[i7 + 32 >> 2] | 0) + 4 >> 2] | 0) == (i2 | 0)) << 3;
  }
 } while (0);
 HEAP8[i8] = i6 & -29 | i9;
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   __ZNK7WebCore6Editor8behaviorEv(i4, HEAP32[i9 + 464 >> 2] | 0);
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i4 = i1 + 88 | 0;
 HEAP8[i4] = HEAP8[i4] | 2;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore19DragCaretController14paintDragCaretEPNS_5FrameEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = i1 + 24 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  i9 = i7 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = (HEAP32[(HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) == (i2 | 0);
 do {
  if (!i8) {
   i2 = i7 + 8 | 0;
   i10 = i2 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 if (!i9) {
  return;
 }
 i9 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZNK7WebCore9CaretBase10paintCaretEPNS_4NodeEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i9, 0, i3, i4, i5);
  return;
 }
 i6 = i1 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 __ZNK7WebCore9CaretBase10paintCaretEPNS_4NodeEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i9, i1, i3, i4, i5);
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 return;
}
function __ZN7WebCore9CaretBase19invalidateCaretRectEPNS_4NodeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP8[i1 + 16 | 0] = 1;
 if (i3) {
  return;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = __ZN7WebCore4Node17isContentEditableENS0_22UserSelectAllTreatmentE(i2, 1) | 0;
 i5 = HEAP32[(HEAP32[i3 + 116 >> 2] | 0) + 216 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = (HEAP8[(HEAP32[i5 + 36 >> 2] | 0) + 183 | 0] & 4) != 0;
 }
 if (!(i6 | i4)) {
  return;
 }
 i4 = i1 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i7 = i1 | 0;
 } else {
  i7 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 do {
  if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
   i8 = 15;
  } else {
   if ((HEAP32[i1 + 24 >> 2] & 32 | 0) == 0) {
    i8 = 15;
    break;
   }
   if (__ZN7WebCore14isTableElementEPNS_4NodeE(i2) | 0) {
    i8 = 15;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 1](i2) | 0) {
    i9 = i1;
   } else {
    i8 = 15;
   }
  }
 } while (0);
 if ((i8 | 0) == 15) {
  i9 = __ZNK7WebCore12RenderObject15containingBlockEv(i1) | 0;
 }
 if ((i9 | 0) == 0) {
  return;
 }
 __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i9, i4, 0);
 return;
}
function __ZN7WebCore14FrameSelection9setExtentERKNS_8PositionENS_9EAffinityENS_14EUserTriggeredE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 64 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i1 + 32 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i7 + 8 | 0;
  i11 = 0;
  i12 = i10;
  i13 = i10;
 } else {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i7 + 8 | 0;
  i9 = i10;
  i11 = HEAP32[i9 >> 2] & -8;
  i12 = i10;
  i13 = i9;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i1 + 36 >> 2];
 i9 = HEAP32[i1 + 40 >> 2] | 0;
 i10 = i11 | i9 & 7;
 HEAP32[i13 >> 2] = i10;
 HEAP8[i12] = i10 & 255 & -9 | i9 & 8;
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i6, i7, i2, i3, 1);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i6, i4 | 6, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i6);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i6 + 8 | 0;
 i6 = i8 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore14FrameSelection7setBaseERKNS_8PositionENS_9EAffinityENS_14EUserTriggeredE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 64 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i1 + 44 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i7 + 8 | 0;
  i11 = 0;
  i12 = i10;
  i13 = i10;
 } else {
  i10 = i9 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i7 + 8 | 0;
  i9 = i10;
  i11 = HEAP32[i9 >> 2] & -8;
  i12 = i10;
  i13 = i9;
 }
 HEAP32[i7 + 4 >> 2] = HEAP32[i1 + 48 >> 2];
 i9 = HEAP32[i1 + 52 >> 2] | 0;
 i10 = i11 | i9 & 7;
 HEAP32[i13 >> 2] = i10;
 HEAP8[i12] = i10 & 255 & -9 | i9 & 8;
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i6, i2, i7, i3, 1);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i6, i4 | 6, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i6);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i6 + 8 | 0;
 i6 = i8 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 1 | 0) == 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i1, i5, 3);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i5 + 8 | 0;
  i5 = i6 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  HEAP32[i5 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 } else {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = i2;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEEiNS0_10AnchorTypeE(i1, i4, 0, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i4 + 8 | 0;
  i4 = i6 | 0;
  i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  HEAP32[i4 >> 2] = i1;
  if ((i1 | 0) >= 1) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore14FrameSelection17isInPasswordFieldEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 56 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i3 + 8 | 0;
  i7 = 0;
  i8 = i6;
  i9 = i6;
 } else {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i6 = i3 + 8 | 0;
  i5 = i6;
  i7 = HEAP32[i5 >> 2] & -8;
  i8 = i6;
  i9 = i5;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
 i5 = HEAP32[i1 + 64 >> 2] | 0;
 i1 = i7 | i5 & 7;
 HEAP32[i9 >> 2] = i1;
 HEAP8[i8] = i1 & 255 & -9 | i5 & 8;
 i5 = __ZN7WebCore24enclosingTextFormControlERKNS_8PositionE(i3) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i1 = i4 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 if ((i5 | 0) == 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP32[(HEAP32[i5 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i10 = __ZNK7WebCore16HTMLInputElement15isPasswordFieldEv(i5) | 0;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN7WebCore16VisibleSelectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
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
function __ZN7WebCore14FrameSelection31notifyRendererOfSelectionChangeENS_14EUserTriggeredE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 456 >> 2] | 0);
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 56 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i4 + 8 | 0;
  i8 = 0;
  i9 = i7;
  i10 = i7;
 } else {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i7 = i4 + 8 | 0;
  i6 = i7;
  i8 = HEAP32[i6 >> 2] & -8;
  i9 = i7;
  i10 = i6;
 }
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 60 >> 2];
 i6 = HEAP32[i1 + 64 >> 2] | 0;
 i1 = i8 | i6 & 7;
 HEAP32[i10 >> 2] = i1;
 HEAP8[i9] = i1 & 255 & -9 | i6 & 8;
 i6 = __ZN7WebCore24enclosingTextFormControlERKNS_8PositionE(i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i1 = i5 | 0;
   i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore26HTMLTextFormControlElement16selectionChangedEb(i6, (i2 | 0) == 1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14FrameSelectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 120 | 0);
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore12EditingStyleD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 8 | 0;
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 + 32 | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i1 + 32 | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i6 = i1 + 32 | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i6 = i1 + 32 | 0;
 __ZN7WebCore16VisibleSelectionD2Ev(i6);
 return;
}
function __ZNK7WebCore14FrameSelection19positionForPlatformEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
    break;
   }
   if (i3) {
    if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
     i5 = 1;
    } else {
     i5 = HEAP32[i2 + 80 >> 2] | 0;
    }
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2 + 56 | 0, i5);
    return;
   } else {
    if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
     i6 = 0;
    } else {
     i6 = HEAP32[i2 + 80 >> 2] | 0;
    }
    __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2 + 68 | 0, i6);
    return;
   }
  }
 } while (0);
 if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
  if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
   i7 = 1;
  } else {
   i7 = HEAP32[i2 + 80 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2 + 56 | 0, i7);
  return;
 } else {
  if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
   i8 = 0;
  } else {
   i8 = HEAP32[i2 + 80 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2 + 68 | 0, i8);
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
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
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 4) | 0;
 if (i5 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i7;
   i8 = i6;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i5 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = i6 + 16 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 16 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore19DragCaretController13caretRendererEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i1 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i1 | 0;
 } else {
  i4 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 L8 : do {
  if ((i1 | 0) == 0) {
   i5 = 0;
  } else {
   do {
    if ((HEAP32[i1 + 20 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[i1 + 24 >> 2] & 32 | 0) == 0) {
      break;
     }
     if (__ZN7WebCore14isTableElementEPNS_4NodeE(i2) | 0) {
      break;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 1](i2) | 0) {
      i5 = i1;
      break L8;
     }
    }
   } while (0);
   i5 = __ZNK7WebCore12RenderObject15containingBlockEv(i1) | 0;
  }
 } while (0);
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i3 = i5;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  i3 = i5;
  return i3 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 i3 = i5;
 return i3 | 0;
}
function __ZNK7WebCore14FrameSelection13caretRendererEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i1 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i1 | 0;
 } else {
  i4 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 L8 : do {
  if ((i1 | 0) == 0) {
   i5 = 0;
  } else {
   do {
    if ((HEAP32[i1 + 20 >> 2] & 768 | 0) != 256) {
     if ((HEAP32[i1 + 24 >> 2] & 32 | 0) == 0) {
      break;
     }
     if (__ZN7WebCore14isTableElementEPNS_4NodeE(i2) | 0) {
      break;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] & 1](i2) | 0) {
      i5 = i1;
      break L8;
     }
    }
   } while (0);
   i5 = __ZNK7WebCore12RenderObject15containingBlockEv(i1) | 0;
  }
 } while (0);
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i3 = i5;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  i3 = i5;
  return i3 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 i3 = i5;
 return i3 | 0;
}
function __ZNK7WebCore19DragCaretController23isContentRichlyEditableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i3 + 8 | 0;
  i7 = 0;
  i8 = i6;
  i9 = i6;
 } else {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i6 = i3 + 8 | 0;
  i5 = i6;
  i7 = HEAP32[i5 >> 2] & -8;
  i8 = i6;
  i9 = i5;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 28 >> 2];
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 i1 = i7 | i5 & 7;
 HEAP32[i9 >> 2] = i1;
 HEAP8[i8] = i1 & 255 & -9 | i5 & 8;
 i5 = __ZN7WebCore24isRichlyEditablePositionERKNS_8PositionENS_12EditableTypeE(i3, 0) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore14FrameSelection25directionOfEnclosingBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 44 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i6 = i3 + 8 | 0;
  i7 = 0;
  i8 = i6;
  i9 = i6;
 } else {
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i6 = i3 + 8 | 0;
  i5 = i6;
  i7 = HEAP32[i5 >> 2] & -8;
  i8 = i6;
  i9 = i5;
 }
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 48 >> 2];
 i5 = HEAP32[i1 + 52 >> 2] | 0;
 i1 = i7 | i5 & 7;
 HEAP32[i9 >> 2] = i1;
 HEAP8[i8] = i1 & 255 & -9 | i5 & 8;
 i5 = __ZN7WebCore25directionOfEnclosingBlockERKNS_8PositionE(i3) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 i4 = i3 + 8 | 0;
 i3 = i4 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore14FrameSelection21prepareForDestructionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 HEAP32[i1 + 108 >> 2] = 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 120 | 0);
 i4 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 24 >> 2] | 0) | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore10RenderView14clearSelectionEv(i4);
 }
 __ZN7WebCore16VisibleSelectionC1Ev(i3);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i3, 70, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i3);
 i3 = i1 + 112 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 + 8 | 0;
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14FrameSelection10paintCaretEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 84 >> 2] | 0) != 1) {
  return;
 }
 if ((HEAP8[i1 + 192 | 0] & 2) == 0) {
  return;
 }
 i5 = i1 | 0;
 i6 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZNK7WebCore9CaretBase10paintCaretEPNS_4NodeEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i5, 0, i2, i3, i4);
  return;
 }
 i1 = i6 + 8 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 __ZNK7WebCore9CaretBase10paintCaretEPNS_4NodeEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i5, i6, i2, i3, i4);
 i4 = i6 + 8 | 0;
 i6 = i4 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 return;
}
function __ZNK7WebCore14FrameSelection16startForPlatformEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
    i4 = 1;
   } else {
    i4 = HEAP32[i2 + 80 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2 + 56 | 0, i4);
   return;
  }
 } while (0);
 if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
  if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
   i5 = 1;
  } else {
   i5 = HEAP32[i2 + 80 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2 + 56 | 0, i5);
  return;
 } else {
  if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
   i6 = 0;
  } else {
   i6 = HEAP32[i2 + 80 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2 + 68 | 0, i6);
  return;
 }
}
function __ZNK7WebCore14FrameSelection14endForPlatformEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 108 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
    i4 = 0;
   } else {
    i4 = HEAP32[i2 + 80 >> 2] | 0;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2 + 68 | 0, i4);
   return;
  }
 } while (0);
 if ((HEAP8[i2 + 88 | 0] & 1) == 0) {
  if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
   i5 = 1;
  } else {
   i5 = HEAP32[i2 + 80 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2 + 56 | 0, i5);
  return;
 } else {
  if ((HEAP32[i2 + 84 >> 2] | 0) == 2) {
   i6 = 0;
  } else {
   i6 = HEAP32[i2 + 80 >> 2] | 0;
  }
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i1, i2 + 68 | 0, i6);
  return;
 }
}
function __ZNK7WebCore14FrameSelection21shouldDeleteSelectionERKNS_16VisibleSelectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZNK7WebCore6Editor6clientEv(HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 464 >> 2] | 0) | 0;
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] | 0;
 __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i4, i2);
 i2 = i4 | 0;
 i4 = FUNCTION_TABLE_iii[i1 & 1](i5, HEAP32[i2 >> 2] | 0) | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return i4 | 0;
 }
 i2 = i5 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i3;
  return i4 | 0;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore14FrameSelection19invalidateCaretRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 84 >> 2] | 0) != 1) {
  return;
 }
 i2 = i1 | 0;
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore9CaretBase19invalidateCaretRectEPNS_4NodeEb(i2, 0, __ZN7WebCore14FrameSelection18recomputeCaretRectEv(i1) | 0);
  return;
 }
 i4 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZN7WebCore9CaretBase19invalidateCaretRectEPNS_4NodeEb(i2, i3, __ZN7WebCore14FrameSelection18recomputeCaretRectEv(i1) | 0);
 i1 = i3 + 8 | 0;
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore14FrameSelection18setCaretVisibilityENS_9CaretBase15CaretVisibilityE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 20 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 456 >> 2] | 0);
 i4 = i1 + 192 | 0;
 i5 = HEAP8[i4] | 0;
 if ((i5 & 2) != 0) {
  HEAP8[i4] = i5 & -3;
  __ZN7WebCore14FrameSelection19invalidateCaretRectEv(i1);
 }
 HEAP32[i3 >> 2] = i2;
 __ZN7WebCore14FrameSelection16updateAppearanceEv(i1);
 return;
}
function __ZN7WebCore14FrameSelection6moveToERKNS_8PositionES3_NS_9EAffinityENS_14EUserTriggeredE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i6 | 0;
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i7, i2, i3, i4, 1);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i7, i5 | 6, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore14FrameSelection6moveToERKNS_8PositionENS_9EAffinityENS_14EUserTriggeredE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionENS_9EAffinityEb(i6, i2, i3, (HEAP8[i1 + 88 | 0] & 2) != 0);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i6, i4 | 6, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i6);
 STACKTOP = i5;
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
function __ZN7WebCore5TimerINS_14FrameSelectionEE5firedEv(i1) {
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
function __ZN7WebCore14FrameSelection5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 HEAP32[i1 + 108 >> 2] = 0;
 __ZN7WebCore16VisibleSelectionC1Ev(i3);
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i1, i3, 6, 0, 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14FrameSelection8setStartERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
  __ZN7WebCore14FrameSelection9setExtentERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i2, i3);
  return;
 } else {
  __ZN7WebCore14FrameSelection7setBaseERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i2, i3);
  return;
 }
}
function __ZN7WebCore14FrameSelection6setEndERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP8[i1 + 88 | 0] & 1) == 0) {
  __ZN7WebCore14FrameSelection7setBaseERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i2, i3);
  return;
 } else {
  __ZN7WebCore14FrameSelection9setExtentERKNS_15VisiblePositionENS_14EUserTriggeredE(i1, i2, i3);
  return;
 }
}
function __ZN7WebCore14FrameSelection20caretBlinkTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i2 = i1 + 192 | 0;
 i3 = HEAP8[i2] | 0;
 i4 = (i3 & 255) >>> 1;
 do {
  if ((i3 & 4) != 0) {
   if ((i4 & 1) == 0) {
    break;
   }
   return;
  }
 } while (0);
 HEAP8[i2] = (i3 & -3 | i4 << 1 & 2) ^ 2;
 __ZN7WebCore14FrameSelection19invalidateCaretRectEv(i1);
 return;
}
function __ZN7WebCore9CaretBase14clearCaretRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 _memset(i3 | 0, 0, 16) | 0;
 i4 = i1;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14FrameSelection19absoluteCaretBoundsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 __ZN7WebCore14FrameSelection18recomputeCaretRectEv(i2) | 0;
 i3 = i1;
 i1 = i2 + 176 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZN7WebCore19DragCaretControllerC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 _memset(i1 | 0, 0, 16) | 0;
 HEAP8[i1 + 16 | 0] = 1;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i2 = i1 + 32 | 0;
 i3 = i2;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4 & -8;
 HEAP8[i2] = i4 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 1;
 return;
}
function __ZN7WebCore19DragCaretControllerC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 _memset(i1 | 0, 0, 16) | 0;
 HEAP8[i1 + 16 | 0] = 1;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 i2 = i1 + 32 | 0;
 i3 = i2;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4 & -8;
 HEAP8[i2] = i4 & 255 & -16;
 HEAP32[i1 + 36 >> 2] = 1;
 return;
}
function __ZNK7WebCore14FrameSelection15copyTypingStyleEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 116 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZNK7WebCore15StyleProperties11mutableCopyEv(i1, i2 | 0);
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore14FrameSelection24setShouldShowBlockCursorEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 192 | 0;
 HEAP8[i3] = HEAP8[i3] & -17 | (i2 & 1) << 4;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 456 >> 2] | 0);
 __ZN7WebCore14FrameSelection16updateAppearanceEv(i1);
 return;
}
function __ZNK7WebCore14FrameSelection18isFocusedAndActiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[i1 + 192 | 0] & 8) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[(HEAP32[i3 + 32 >> 2] | 0) + 8 | 0] & 1) != 0;
 return i2 | 0;
}
function __ZNK7WebCore14FrameSelection36rootEditableElementOrDocumentElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i1 + 32 | 0) | 0;
 if ((i2 | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 456 >> 2] | 0) + 692 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9CaretBase18shouldRepaintCaretEPKNS_10RenderViewEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i1 = HEAP32[(HEAP32[i2 + 116 >> 2] | 0) + 216 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = (HEAP8[(HEAP32[i1 + 36 >> 2] | 0) + 183 | 0] & 4) != 0;
 }
 return i4 | i3 | 0;
}
function __ZN7WebCore14FrameSelection10setFocusedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 192 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 3 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -9 | (i2 & 1) << 3;
 __ZN7WebCore14FrameSelection27focusedOrActiveStateChangedEv(i1);
 return;
}
function __ZNK7WebCore14FrameSelection21shouldChangeSelectionERKNS_16VisibleSelectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore6Editor21shouldChangeSelectionERKNS_16VisibleSelectionES3_NS_9EAffinityEb(HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 464 >> 2] | 0, i1 + 32 | 0, i2, HEAP32[i2 + 48 >> 2] | 0, 0) | 0;
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
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function runPostSets() {
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_did + 2;
}
function __ZN7WebCore9CaretBaseC2ENS0_15CaretVisibilityE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 HEAP8[i1 + 16 | 0] = 1;
 HEAP32[i1 + 20 >> 2] = i2;
 return;
}
function __ZN7WebCore9CaretBaseC1ENS0_15CaretVisibilityE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 HEAP8[i1 + 16 | 0] = 1;
 HEAP32[i1 + 20 >> 2] = i2;
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore14FrameSelection21pageActivationChangedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14FrameSelection27focusedOrActiveStateChangedEv(i1);
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
function __ZN7WebCore5TimerINS_14FrameSelectionEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
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
function __ZN7WebCore5TimerINS_14FrameSelectionEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
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
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 1](i2 | 0);
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
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
 return 0;
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function b2(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(2);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
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
function b8() {
 abort(8);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_di = [b1,b1];
  var FUNCTION_TABLE_did = [b2,b2,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore5TimerINS_14FrameSelectionEED0Ev,b3,__ZN7WebCore19DragCaretControllerC2Ev,b3,__ZN7WebCore5TimerINS_14FrameSelectionEED1Ev,b3,__ZN7WebCore5TimerINS_14FrameSelectionEE5firedEv,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZN7WebCore14FrameSelectionC2EPNS_5FrameE,b4,__ZN7WebCore14FrameSelection20caretBlinkTimerFiredEPNS_5TimerIS0_EE,b4,__ZN7WebCore9CaretBaseC2ENS0_15CaretVisibilityE,b4];
  var FUNCTION_TABLE_ii = [b5,b5];
  var FUNCTION_TABLE_iiii = [b6,b6];
  var FUNCTION_TABLE_viii = [b7,b7];
  var FUNCTION_TABLE_v = [b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_di: dynCall_di, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_di": invoke_di, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_fputc": _fputc, "_malloc": _malloc, "_pwrite": _pwrite, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "___setErrNo": ___setErrNo, "_fwrite": _fwrite, "__reallyNegative": __reallyNegative, "__formatString": __formatString, "_send": _send, "_write": _write, "_llvm_lifetime_start": _llvm_lifetime_start, "_fprintf": _fprintf, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames7formTagE": __ZN7WebCore9HTMLNames7formTagE, "_stderr": _stderr, "__ZN7WebCore15ScrollAlignment19alignCenterIfNeededE": __ZN7WebCore15ScrollAlignment19alignCenterIfNeededE, "__ZN7WebCore15ScrollAlignment14alignTopAlwaysE": __ZN7WebCore15ScrollAlignment14alignTopAlwaysE, "__ZN7WebCore9HTMLNames9selectTagE": __ZN7WebCore9HTMLNames9selectTagE, "__ZN7WebCore9HTMLNames8frameTagE": __ZN7WebCore9HTMLNames8frameTagE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore15ScrollAlignment17alignCenterAlwaysE": __ZN7WebCore15ScrollAlignment17alignCenterAlwaysE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE": __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore14FrameSelection20modifyMovingBackwardENS_15TextGranularityE","_strlen","__ZNK7WebCore19DragCaretController13caretRendererEv","__ZN7WebCore14FrameSelection19absoluteCaretBoundsEv","__ZN7WebCore9CaretBase19invalidateCaretRectEPNS_4NodeEb","__ZN7WebCore14FrameSelection21pageActivationChangedEv","__ZN7WebCore14FrameSelection16setSelectedRangeEPNS_5RangeENS_9EAffinityEb","__ZN7WebCore14FrameSelection15textWasReplacedEPNS_13CharacterDataEjjj","__ZNK7WebCore9CaretBase10paintCaretEPNS_4NodeEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE","__ZNK7WebCore19DragCaretController14paintDragCaretEPNS_5FrameEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE","__ZN7WebCore14FrameSelection24setShouldShowBlockCursorEb","_memcpy","__ZN7WebCore14FrameSelection20caretBlinkTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore14FrameSelection25setFocusedElementIfNeededEv","__ZN7WebCore14FrameSelection19modifyMovingForwardENS_15TextGranularityE","__ZN7WebCore14FrameSelection45lineDirectionPointForBlockDirectionNavigationENS0_13EPositionTypeE","__ZNK7WebCore9CaretBase18shouldRepaintCaretEPKNS_10RenderViewEb","__ZN7WebCore14FrameSelection18recomputeCaretRectEv","__ZN7WebCore14FrameSelection19invalidateCaretRectEv","__ZNK7WebCore19DragCaretController23isContentRichlyEditableEv","__ZN7WebCoreeqERKNS_15VisiblePositionES2_","__ZN7WebCore14FrameSelection7setBaseERKNS_8PositionENS_9EAffinityENS_14EUserTriggeredE","__ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE","__ZN7WebCore14FrameSelection6moveToERKNS_8PositionES3_NS_9EAffinityENS_14EUserTriggeredE","__ZNK7WebCore14FrameSelection36rootEditableElementOrDocumentElementEv","__ZNK7WebCore9CaretBase26absoluteBoundsForLocalRectEPNS_4NodeERKNS_10LayoutRectE","__ZN7WebCore19DragCaretController17nodeWillBeRemovedEPNS_4NodeE","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore14FrameSelection19modifyExtendingLeftENS_15TextGranularityE","__ZN7WebCore14FrameSelection6moveToEPKNS_5RangeENS_9EAffinityENS_14EUserTriggeredE","__ZN7WebCore14FrameSelection23modifyExtendingBackwardENS_15TextGranularityE","__ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZNK7WebCore14FrameSelection13debugRendererEPNS_12RenderObjectEb","__ZN7WebCore16VisibleSelectionaSERKS0_","__ZN7WebCore14FrameSelection17modifyMovingRightENS_15TextGranularityE","__ZN7WebCore5TimerINS_14FrameSelectionEED1Ev","__ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore14FrameSelection27nextWordPositionForPlatformERKNS_15VisiblePositionE","__ZN7WebCore14FrameSelection10setFocusedEb","__ZN7WebCore16VisibleSelectionC2ERKS0_","__ZN7WebCore9TraversalINS_11HTMLElementEE4nextEPKNS_13ContainerNodeEPKNS_4NodeE","__ZN7WebCore14FrameSelection20modifyExtendingRightENS_15TextGranularityE","__ZN7WebCore14FrameSelection8containsERKNS_11LayoutPointE","__ZN7WebCore14FrameSelection9setExtentERKNS_15VisiblePositionENS_14EUserTriggeredE","__ZNK7WebCore14FrameSelection6boundsEb","__ZN7WebCore14FrameSelection6modifyENS0_11EAlterationEjNS0_17VerticalDirectionENS_14EUserTriggeredENS0_19CursorAlignOnScrollE","__ZN7WebCore14FrameSelection7setBaseERKNS_15VisiblePositionENS_14EUserTriggeredE","__ZN7WebCore19DragCaretControllerC2Ev","__ZN7WebCore9CaretBase14clearCaretRectEv","__ZN7WebCore14FrameSelection16updateAppearanceEv","__ZN7WebCore14FrameSelection20setSelectionFromNoneEv","__ZN7WebCoreL11scanForFormEPNS_7ElementE","__ZN7WebCore14FrameSelection15revealSelectionERKNS_15ScrollAlignmentENS_18RevealExtentOptionE","__ZNK7WebCore14FrameSelection21shouldDeleteSelectionERKNS_16VisibleSelectionE","__ZN7WebCore14FrameSelection27focusedOrActiveStateChangedEv","__ZN7WebCore14FrameSelectionC2EPNS_5FrameE","__ZN7WebCore14FrameSelection14willBeModifiedENS0_11EAlterationENS_18SelectionDirectionE","__ZN7WebCore14FrameSelection25directionOfEnclosingBlockEv","__ZN3WTF6VectorIN7WebCore9FloatRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore14FrameSelection19dispatchSelectStartEv","__ZNK7WebCore14FrameSelection13caretRendererEv","__ZNK7WebCore14FrameSelection14endForPlatformEv","__ZN7WebCore5TimerINS_14FrameSelectionEED0Ev","__ZNK7WebCore14FrameSelection18isFocusedAndActiveEv","_memset","__ZN7WebCore14FrameSelection6moveToERKNS_15VisiblePositionES3_NS_14EUserTriggeredE","__ZN7WebCore14FrameSelectionD2Ev","__ZNK7WebCore14FrameSelection15copyTypingStyleEv","__ZN7WebCore9CaretBase15updateCaretRectEPNS_8DocumentERKNS_15VisiblePositionE","__ZN7WebCore14FrameSelection6setEndERKNS_15VisiblePositionENS_14EUserTriggeredE","__ZNK7WebCore14FrameSelection31getClippedVisibleTextRectanglesERN3WTF6VectorINS_9FloatRectELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore14FrameSelection8setStartERKNS_15VisiblePositionENS_14EUserTriggeredE","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore14FrameSelection18setCaretVisibilityENS_9CaretBase15CaretVisibilityE","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore14FrameSelection9setExtentERKNS_8PositionENS_9EAffinityENS_14EUserTriggeredE","__ZN7WebCore14FrameSelection31notifyRendererOfSelectionChangeENS_14EUserTriggeredE","__ZNK7WebCore14FrameSelection16startForPlatformEv","__ZN7WebCore14FrameSelection17nodeWillBeRemovedEPNS_4NodeE","__ZN7WebCore5TimerINS_14FrameSelectionEE5firedEv","__ZN7WebCore14FrameSelection16modifyMovingLeftENS_15TextGranularityE","__ZNK7WebCore14FrameSelection19positionForPlatformEb","__ZN7WebCoreL30adjustPositionForUserSelectAllERNS_15VisiblePositionEb","__ZN7WebCore14FrameSelection21prepareForDestructionEv","__ZN7WebCore14FrameSelection20directionOfSelectionEv","__ZN7WebCoreeqERKNS_16VisibleSelectionES2_","__ZN7WebCore14FrameSelection41selectFrameElementInParentIfFullySelectedEv","__ZN7WebCore14FrameSelection22modifyExtendingForwardENS_15TextGranularityE","__ZN7WebCore14FrameSelection25respondToNodeModificationEPNS_4NodeEbbbb","__ZN7WebCore14FrameSelection34setNonDirectionalSelectionIfNeededERKNS_16VisibleSelectionENS_15TextGranularityENS0_23EndPointsAdjustmentModeE","__ZNK7WebCore14FrameSelection11currentFormEv","__ZN7WebCore14FrameSelection6moveToERKNS_8PositionENS_9EAffinityENS_14EUserTriggeredE","__ZNK7WebCore14FrameSelection17isInPasswordFieldEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE","__ZN7WebCore14FrameSelection10paintCaretEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE","__ZN7WebCore14FrameSelection6modifyENS0_11EAlterationENS_18SelectionDirectionENS_15TextGranularityENS_14EUserTriggeredE","__ZN7WebCore14FrameSelection9selectAllEv","__ZNK7WebCore14FrameSelection21shouldChangeSelectionERKNS_16VisibleSelectionE","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore14FrameSelection14localCaretRectEv","__ZN7WebCore14FrameSelection5clearEv","__ZN7WebCore9CaretBaseC2ENS0_15CaretVisibilityE"]

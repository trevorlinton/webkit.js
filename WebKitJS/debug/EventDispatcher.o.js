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
H_BASE = parentModule["_malloc"](16 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 16;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18WindowEventContextC1EN3WTF10PassRefPtrINS_4NodeEEEPKNS_12EventContextE;
var __ZN7WebCore9EventPathC1ERNS_4NodeERNS_5EventE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore8SVGNames6useTagE=env.__ZN7WebCore8SVGNames6useTagE|0;
  var __ZN7WebCore22ChildNodesLazySnapshot14latestSnapshotE=env.__ZN7WebCore22ChildNodesLazySnapshot14latestSnapshotE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15EventDispatcher13dispatchEventEPNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 160 | 0;
 i8 = i3 + 168 | 0;
 i9 = i3 + 176 | 0;
 i10 = i3 + 184 | 0;
 i11 = i3 + 192 | 0;
 i12 = i2 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i13 = 1;
  STACKTOP = i3;
  return i13 | 0;
 }
 i14 = (i1 | 0) == 0;
 if (i14) {
  i15 = i2;
 } else {
  i2 = i1 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  i15 = HEAP32[i12 >> 2] | 0;
 }
 HEAP32[i12 >> 2] = 0;
 i12 = i1 + 20 | 0;
 i2 = __ZNK7WebCore8Document4viewEv(HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] | 0) | 0;
 i16 = (i2 | 0) != 0;
 if (i16) {
  i17 = i2 + 4 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
 }
 __ZN7WebCore9EventPathC2ERNS_4NodeERNS_5EventE(i6, i1, i15);
 i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 56 >> 2] & 1](i15) | 0;
 L10 : do {
  if ((i17 | 0) != 0) {
   i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 1](i17) | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i19 = HEAP32[i18 + 20 >> 2] | 0;
   i20 = i6 + 8 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i22 = i6 | 0;
   i23 = 0;
   i24 = 0;
   i25 = 0;
   while (1) {
    i26 = HEAP32[(HEAP32[i22 >> 2] | 0) + (i23 << 2) >> 2] | 0;
    i27 = HEAP32[i26 + 4 >> 2] | 0;
    i28 = HEAP32[i27 + 20 >> 2] | 0;
    do {
     if ((i28 | 0) == (i25 | 0)) {
      i29 = i24;
      i30 = i25;
     } else {
      if ((i24 | 0) != 0) {
       i29 = i27;
       i30 = i28;
       break;
      }
      i29 = (i28 | 0) == (i19 | 0) ? i18 : 0;
      i30 = i28;
     }
    } while (0);
    if ((i29 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 56 >> 2] & 1](i29 | 0);
    }
    i28 = i26 + 16 | 0;
    i27 = HEAP32[i28 >> 2] | 0;
    HEAP32[i28 >> 2] = i29;
    if ((i27 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 60 >> 2] & 1](i27);
    }
    i27 = i23 + 1 | 0;
    if (i27 >>> 0 >= i21 >>> 0) {
     break L10;
    }
    if ((HEAP32[i20 >> 2] | 0) >>> 0 > i27 >>> 0) {
     i23 = i27;
     i24 = i29;
     i25 = i30;
    } else {
     break;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
 } while (0);
 i30 = HEAP32[__ZN7WebCore22ChildNodesLazySnapshot14latestSnapshotE >> 2] | 0;
 L29 : do {
  if ((i30 | 0) != 0) {
   i29 = i30;
   while (1) {
    if ((HEAP32[i29 + 8 >> 2] | 0) != 0) {
     break L29;
    }
    __ZN7WebCore22ChildNodesLazySnapshot12takeSnapshotEv(i29);
    i29 = HEAP32[i29 + 12 >> 2] | 0;
    if ((i29 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i30 = i1 + 12 | 0;
 i29 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i29 & 1048580 | 0) == 1048580) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 1](i1) | 0) == 0) {
    i31 = HEAP32[i30 >> 2] | 0;
    i32 = 27;
    break;
   } else {
    i33 = HEAP32[i1 + 52 >> 2] | 0;
    break;
   }
  } else {
   i31 = i29;
   i32 = 27;
  }
 } while (0);
 L39 : do {
  if ((i32 | 0) == 27) {
   if ((i31 & 8388640 | 0) != 8388640) {
    i33 = i1 | 0;
    break;
   }
   i29 = HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] | 0;
   do {
    if ((HEAP32[i29 + 12 >> 2] & 4096 | 0) != 0) {
     if ((HEAP32[(HEAP32[i29 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i29 | 0)) {
      break;
     }
     i17 = HEAP32[i29 + 92 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i25 = HEAP32[i17 + 44 >> 2] | 0;
     i24 = HEAP32[__ZN7WebCore8SVGNames6useTagE >> 2] | 0;
     if ((i25 | 0) != (i24 | 0)) {
      if ((HEAP32[i25 + 12 >> 2] | 0) != (HEAP32[i24 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i25 + 16 >> 2] | 0) != (HEAP32[i24 + 16 >> 2] | 0)) {
       break;
      }
     }
     i24 = __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeE(i17, i1) | 0;
     if ((i24 | 0) == 0) {
      i33 = i1 | 0;
      break L39;
     } else {
      i33 = i24 | 0;
      break L39;
     }
    }
   } while (0);
   i33 = i1 | 0;
  }
 } while (0);
 i31 = i7 | 0;
 HEAP32[i31 >> 2] = i33;
 if ((i33 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 56 >> 2] & 1](i33);
 }
 __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i15, i7);
 i7 = HEAP32[i31 >> 2] | 0;
 if ((i7 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] & 1](i7);
 }
 HEAP32[i8 >> 2] = i1;
 if (!i14) {
  i7 = i1 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i6 + 8 | 0;
 i31 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i31 | 0) == 0) {
   i34 = 0;
  } else {
   i33 = _llvm_uadd_with_overflow_i32(i31 | 0, -1 | 0) | 0;
   if (tempRet0) {
    i34 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i33 << 2) >> 2] | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 i31 = (i34 | 0) != 0;
 i33 = HEAP32[(i31 ? i34 + 4 | 0 : i8) >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i33 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i33 | 0)) {
   i8 = HEAP32[i33 + 336 >> 2] | 0;
   if ((i8 | 0) != 0) {
    i29 = i8 + 36 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   }
   if (i31) {
    i35 = HEAP32[i34 + 12 >> 2] | 0;
   } else {
    i35 = i1 | 0;
   }
   if ((i35 | 0) == 0) {
    i36 = i8;
    i37 = 0;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 56 >> 2] & 1](i35);
   i36 = i8;
   i37 = i35;
  } else {
   i36 = 0;
   i37 = 0;
  }
 } while (0);
 do {
  if (!i14) {
   i35 = i1 + 8 | 0;
   i34 = i35 | 0;
   i31 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
   HEAP32[i34 >> 2] = i31;
   if ((i31 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i35 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i35 - 8 | 0);
  }
 } while (0);
 i35 = i9 | 0;
 HEAP8[i35] = 0;
 HEAP8[i9 + 1 | 0] = 0;
 HEAP8[i9 + 2 | 0] = 0;
 i31 = i9 + 4 | 0;
 HEAP32[i31 >> 2] = 0;
 do {
  if ((HEAP32[i30 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   __ZN7WebCore16HTMLInputElement17willDispatchEventERNS_5EventERNS_22InputElementClickStateE(i1, i15, i9);
  }
 } while (0);
 i34 = i15 + 18 | 0;
 L92 : do {
  if ((HEAP8[i34] & 1) == 0) {
   i33 = i15 + 19 | 0;
   if ((HEAP8[i33] & 1) != 0) {
    break;
   }
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    break;
   }
   i8 = i15 + 24 | 0;
   HEAP16[i8 >> 1] = 1;
   i29 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   i24 = (HEAP32[i15 + 12 >> 2] | 0) != (HEAP32[i29 + 212 >> 2] | 0);
   do {
    if (i24) {
     if ((i36 | 0) == 0) {
      break;
     }
     i29 = i4 | 0;
     HEAP32[i29 >> 2] = i37;
     if ((i37 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 56 >> 2] & 1](i37);
     }
     __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i15, i4);
     i17 = HEAP32[i29 >> 2] | 0;
     if ((i17 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 60 >> 2] & 1](i17);
     }
     i17 = i36 | 0;
     HEAP32[i15 + 28 >> 2] = i17;
     __ZN7WebCore11EventTarget18fireEventListenersEPNS_5EventE(i17, i15) | 0;
     if ((HEAP8[i34] & 1) != 0) {
      break L92;
     }
     if ((HEAP8[i33] & 1) != 0) {
      break L92;
     }
    }
   } while (0);
   i17 = _llvm_uadd_with_overflow_i32(HEAP32[i7 >> 2] | 0, -1 | 0) | 0;
   i29 = i17;
   L107 : do {
    if ((i29 | 0) != 0) {
     i17 = i6 | 0;
     if (tempRet0) {
      i38 = i29;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     }
     while (1) {
      i25 = HEAP32[(HEAP32[i17 >> 2] | 0) + (i38 << 2) >> 2] | 0;
      if ((HEAP32[i25 + 8 >> 2] | 0) != (HEAP32[i25 + 12 >> 2] | 0)) {
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 8 >> 2] & 1](i25, i15);
       if ((HEAP8[i34] & 1) != 0) {
        break L92;
       }
       if ((HEAP8[i33] & 1) != 0) {
        break L92;
       }
      }
      i38 = i38 - 1 | 0;
      if ((i38 | 0) == 0) {
       break L107;
      }
      if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i38 >>> 0) {
       break;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    }
   } while (0);
   HEAP16[i8 >> 1] = 2;
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   i29 = i6 | 0;
   i17 = HEAP32[HEAP32[i29 >> 2] >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 1](i17, i15);
   if ((HEAP8[i34] & 1) != 0) {
    break;
   }
   if ((HEAP8[i33] & 1) != 0) {
    break;
   }
   i17 = HEAP32[i7 >> 2] | 0;
   i26 = i15 + 16 | 0;
   L125 : do {
    if (i17 >>> 0 > 1 >>> 0) {
     i25 = i15 + 22 | 0;
     i23 = 1;
     while (1) {
      i20 = HEAP32[(HEAP32[i29 >> 2] | 0) + (i23 << 2) >> 2] | 0;
      do {
       if ((HEAP32[i20 + 8 >> 2] | 0) == (HEAP32[i20 + 12 >> 2] | 0)) {
        i39 = 2;
        i32 = 93;
       } else {
        if ((HEAP8[i26] & 1) == 0) {
         break;
        }
        if ((HEAP8[i25] & 1) == 0) {
         i39 = 3;
         i32 = 93;
        }
       }
      } while (0);
      if ((i32 | 0) == 93) {
       i32 = 0;
       HEAP16[i8 >> 1] = i39;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 8 >> 2] & 1](i20, i15);
       if ((HEAP8[i34] & 1) != 0) {
        break L92;
       }
       if ((HEAP8[i33] & 1) != 0) {
        break L92;
       }
      }
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i17 >>> 0) {
       break L125;
      }
      if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i23 >>> 0) {
       break;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    }
   } while (0);
   if ((HEAP8[i26] & 1) == 0) {
    break;
   }
   if ((HEAP8[i15 + 22 | 0] & 1) != 0) {
    break;
   }
   HEAP16[i8 >> 1] = 3;
   if (!i24) {
    break;
   }
   if ((i36 | 0) == 0) {
    break;
   }
   i17 = i5 | 0;
   HEAP32[i17 >> 2] = i37;
   if ((i37 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 56 >> 2] & 1](i37);
   }
   __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i15, i5);
   i33 = HEAP32[i17 >> 2] | 0;
   if ((i33 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 60 >> 2] & 1](i33);
   }
   i33 = i36 | 0;
   HEAP32[i15 + 28 >> 2] = i33;
   __ZN7WebCore11EventTarget18fireEventListenersEPNS_5EventE(i33, i15) | 0;
  }
 } while (0);
 i5 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i5 & 1048580 | 0) == 1048580) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 1](i1) | 0) == 0) {
    i40 = HEAP32[i30 >> 2] | 0;
    i32 = 110;
    break;
   } else {
    i41 = HEAP32[i1 + 52 >> 2] | 0;
    break;
   }
  } else {
   i40 = i5;
   i32 = 110;
  }
 } while (0);
 L155 : do {
  if ((i32 | 0) == 110) {
   if ((i40 & 8388640 | 0) != 8388640) {
    i41 = i1 | 0;
    break;
   }
   i5 = HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] | 0;
   do {
    if ((HEAP32[i5 + 12 >> 2] & 4096 | 0) != 0) {
     if ((HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i5 | 0)) {
      break;
     }
     i30 = HEAP32[i5 + 92 >> 2] | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     i34 = HEAP32[i30 + 44 >> 2] | 0;
     i39 = HEAP32[__ZN7WebCore8SVGNames6useTagE >> 2] | 0;
     if ((i34 | 0) != (i39 | 0)) {
      if ((HEAP32[i34 + 12 >> 2] | 0) != (HEAP32[i39 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i34 + 16 >> 2] | 0) != (HEAP32[i39 + 16 >> 2] | 0)) {
       break;
      }
     }
     i39 = __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeE(i30, i1) | 0;
     if ((i39 | 0) == 0) {
      i41 = i1 | 0;
      break L155;
     } else {
      i41 = i39 | 0;
      break L155;
     }
    }
   } while (0);
   i41 = i1 | 0;
  }
 } while (0);
 i12 = i10 | 0;
 HEAP32[i12 >> 2] = i41;
 if ((i41 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i41 >> 2] | 0) + 56 >> 2] & 1](i41);
 }
 __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i15, i10);
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 60 >> 2] & 1](i10);
 }
 i10 = i15 + 28 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP16[i15 + 24 >> 1] = 0;
 if ((HEAP8[i35] & 1) != 0) {
  __ZN7WebCore16HTMLInputElement21didDispatchClickEventERNS_5EventERKNS_22InputElementClickStateE(i1, i15, i9);
 }
 i9 = i15 + 20 | 0;
 L182 : do {
  if ((HEAP8[i9] & 1) == 0) {
   i35 = i15 + 21 | 0;
   if ((HEAP8[i35] & 1) != 0) {
    break;
   }
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   i12 = i6 | 0;
   i41 = HEAP32[(HEAP32[HEAP32[i12 >> 2] >> 2] | 0) + 4 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i41 >> 2] | 0) + 220 >> 2] & 1](i41, i15);
   if ((HEAP8[i35] & 1) != 0) {
    break;
   }
   if ((HEAP8[i15 + 16 | 0] & 1) == 0) {
    break;
   }
   i41 = HEAP32[i7 >> 2] | 0;
   i40 = 1;
   while (1) {
    if (i40 >>> 0 >= i41 >>> 0) {
     break L182;
    }
    if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i40 >>> 0) {
     break;
    }
    i32 = HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + (i40 << 2) >> 2] | 0) + 4 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i32 >> 2] | 0) + 220 >> 2] & 1](i32, i15);
    if ((HEAP8[i35] & 1) == 0) {
     i40 = i40 + 1 | 0;
    } else {
     break L182;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
 } while (0);
 i40 = i11 | 0;
 HEAP32[i40 >> 2] = i37;
 i35 = (i37 | 0) == 0;
 if (!i35) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 56 >> 2] & 1](i37);
 }
 __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i15, i11);
 i11 = HEAP32[i40 >> 2] | 0;
 if ((i11 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 60 >> 2] & 1](i11);
 }
 HEAP32[i10 >> 2] = 0;
 i10 = (HEAP8[i9] & 1) == 0;
 i9 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i31 = i9 + 8 | 0;
   i11 = i31 | 0;
   i40 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i40;
   if ((i40 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
  }
 } while (0);
 if (!i35) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 60 >> 2] & 1](i37);
 }
 do {
  if ((i36 | 0) != 0) {
   i37 = i36 + 36 | 0;
   i35 = i37 | 0;
   i9 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i35 >> 2] = i9;
    break;
   }
   i9 = i37 - 36 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] & 1](i9);
  }
 } while (0);
 i36 = HEAP32[i7 >> 2] | 0;
 i9 = i6 | 0;
 if ((i36 | 0) != 0) {
  i37 = HEAP32[i9 >> 2] | 0;
  i35 = i37 + (i36 << 2) | 0;
  i36 = i37;
  while (1) {
   i37 = i36 | 0;
   i31 = HEAP32[i37 >> 2] | 0;
   HEAP32[i37 >> 2] = 0;
   if ((i31 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 1](i31);
   }
   i36 = i36 + 4 | 0;
   if ((i36 | 0) == (i35 | 0)) {
    break;
   }
  }
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i9 >> 2] | 0;
 if (!((i6 + 12 | 0) == (i7 | 0) | (i7 | 0) == 0)) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 do {
  if (i16) {
   i7 = i2 + 4 | 0;
   i6 = i7 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i6 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 do {
  if ((i15 | 0) != 0) {
   i2 = i15 + 8 | 0;
   i16 = i2 | 0;
   i9 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i16 >> 2] = i9;
    break;
   }
   i9 = i2 - 8 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 if (i14) {
  i13 = i10;
  STACKTOP = i3;
  return i13 | 0;
 }
 i14 = i1 + 8 | 0;
 i1 = i14 | 0;
 i15 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i15;
 if ((i15 | 0) >= 1) {
  i13 = i10;
  STACKTOP = i3;
  return i13 | 0;
 }
 if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
  i13 = i10;
  STACKTOP = i3;
  return i13 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
 i13 = i10;
 STACKTOP = i3;
 return i13 | 0;
}
function __ZN7WebCore15EventDispatcher22dispatchSimulatedClickEPNS_7ElementEPNS_5EventENS_31SimulatedClickMouseEventOptionsENS_27SimulatedClickVisualOptionsE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 72 | 0;
 i15 = i5 + 80 | 0;
 i16 = i5 + 88 | 0;
 i17 = i5 + 96 | 0;
 i18 = i5 + 104 | 0;
 i19 = i5 + 112 | 0;
 i20 = i5 + 120 | 0;
 i21 = i5 + 128 | 0;
 i22 = i5 + 136 | 0;
 i23 = i5 + 144 | 0;
 HEAP32[i6 >> 2] = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 1](i1) | 0) {
  STACKTOP = i5;
  return;
 }
 if (HEAP8[H_BASE + 8 | 0] | 0) {
  i24 = HEAP32[H_BASE + 16 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(20) | 0;
  i25 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 16 >> 2] = i25;
  HEAP8[H_BASE + 8 | 0] = 1;
  i24 = i25;
 }
 __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i7, i24 | 0, i6, i6);
 if ((HEAP8[i7 + 8 | 0] & 1) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) == 2) {
   i24 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 252 | 0;
   i25 = HEAP32[(HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0) + 336 >> 2] | 0;
   i1 = i10 | 0;
   HEAP32[i1 >> 2] = i25;
   if ((i25 | 0) != 0) {
    i26 = i25 + 36 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
   }
   i26 = i11 | 0;
   HEAP32[i26 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i25 = i2 + 8 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
   }
   __ZN7WebCore19SimulatedMouseEvent6createERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEENS5_INS_5EventEEEPNS_7ElementE(i9, i24, i10, i11, i7);
   i24 = i8 | 0;
   i25 = i9 | 0;
   i27 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = 0;
   HEAP32[i24 >> 2] = i27;
   __ZN7WebCore15EventDispatcher13dispatchEventEPNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i7 | 0, i8) | 0;
   i27 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i24 = i27 + 8 | 0;
     i28 = i24 | 0;
     i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i29 | 0) != 0) {
      HEAP32[i28 >> 2] = i29;
      break;
     }
     i29 = i24 - 8 | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 1](i29);
    }
   } while (0);
   i27 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i29 = i27 + 8 | 0;
     i24 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 1](i27);
      break;
     } else {
      HEAP32[i29 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i27 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i25 = i27 + 8 | 0;
     i24 = i25 | 0;
     i29 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i29 | 0) != 0) {
      HEAP32[i24 >> 2] = i29;
      break;
     }
     i29 = i25 - 8 | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 1](i29);
    }
   } while (0);
   i27 = HEAP32[i1 >> 2] | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   i26 = i27 + 36 | 0;
   i27 = i26 | 0;
   i29 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   if ((i29 | 0) != 0) {
    HEAP32[i27 >> 2] = i29;
    break;
   }
   i29 = i26 - 36 | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 44 >> 2] & 1](i29);
  }
 } while (0);
 do {
  if ((i3 | 0) == 0) {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 332 >> 2] & 7](i7, 1, (i4 | 0) == 1);
   i30 = i7 | 0;
   i31 = i7 + 20 | 0;
  } else {
   i8 = i7 | 0;
   i9 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 232 | 0;
   i11 = i7 + 20 | 0;
   i10 = HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0) + 336 >> 2] | 0;
   i29 = i14 | 0;
   HEAP32[i29 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i26 = i10 + 36 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
   }
   i26 = i15 | 0;
   HEAP32[i26 >> 2] = i2;
   i10 = (i2 | 0) == 0;
   if (!i10) {
    i27 = i2 + 8 | 0;
    HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
   }
   __ZN7WebCore19SimulatedMouseEvent6createERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEENS5_INS_5EventEEEPNS_7ElementE(i13, i9, i14, i15, i7);
   i9 = i12 | 0;
   i27 = i13 | 0;
   i25 = HEAP32[i27 >> 2] | 0;
   HEAP32[i27 >> 2] = 0;
   HEAP32[i9 >> 2] = i25;
   __ZN7WebCore15EventDispatcher13dispatchEventEPNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i8, i12) | 0;
   i25 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i9 = i25 + 8 | 0;
     i24 = i9 | 0;
     i28 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) != 0) {
      HEAP32[i24 >> 2] = i28;
      break;
     }
     i28 = i9 - 8 | 0;
     if ((i28 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 1](i28);
    }
   } while (0);
   i25 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i1 = i25 + 8 | 0;
     i28 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 1](i25);
      break;
     } else {
      HEAP32[i1 >> 2] = i28;
      break;
     }
    }
   } while (0);
   i25 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i27 = i25 + 8 | 0;
     i28 = i27 | 0;
     i1 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i1 | 0) != 0) {
      HEAP32[i28 >> 2] = i1;
      break;
     }
     i1 = i27 - 8 | 0;
     if ((i1 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
    }
   } while (0);
   i25 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i26 = i25 + 36 | 0;
     i1 = i26 | 0;
     i27 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     if ((i27 | 0) != 0) {
      HEAP32[i1 >> 2] = i27;
      break;
     }
     i27 = i26 - 36 | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 44 >> 2] & 1](i27);
    }
   } while (0);
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 332 >> 2] & 7](i7, 1, (i4 | 0) == 1);
   i25 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 256 | 0;
   i29 = HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0) + 336 >> 2] | 0;
   i27 = i18 | 0;
   HEAP32[i27 >> 2] = i29;
   if ((i29 | 0) != 0) {
    i26 = i29 + 36 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
   }
   i26 = i19 | 0;
   HEAP32[i26 >> 2] = i2;
   if (!i10) {
    i29 = i2 + 8 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   }
   __ZN7WebCore19SimulatedMouseEvent6createERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEENS5_INS_5EventEEEPNS_7ElementE(i17, i25, i18, i19, i7);
   i25 = i16 | 0;
   i29 = i17 | 0;
   i1 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = 0;
   HEAP32[i25 >> 2] = i1;
   __ZN7WebCore15EventDispatcher13dispatchEventEPNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i8, i16) | 0;
   i1 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i25 = i1 + 8 | 0;
     i28 = i25 | 0;
     i9 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i28 >> 2] = i9;
      break;
     }
     i9 = i25 - 8 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
    }
   } while (0);
   i1 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i10 = i1 + 8 | 0;
     i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
      break;
     } else {
      HEAP32[i10 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i1 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i29 = i1 + 8 | 0;
     i9 = i29 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i29 - 8 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
    }
   } while (0);
   i1 = HEAP32[i27 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i30 = i8;
    i31 = i11;
    break;
   }
   i26 = i1 + 36 | 0;
   i1 = i26 | 0;
   i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i1 >> 2] = i10;
    i30 = i8;
    i31 = i11;
    break;
   }
   i10 = i26 - 36 | 0;
   if ((i10 | 0) == 0) {
    i30 = i8;
    i31 = i11;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 44 >> 2] & 1](i10);
   i30 = i8;
   i31 = i11;
  }
 } while (0);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 332 >> 2] & 7](i7, 0, 0);
 i16 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 56 | 0;
 i17 = HEAP32[(HEAP32[(HEAP32[i31 >> 2] | 0) + 8 >> 2] | 0) + 336 >> 2] | 0;
 i31 = i22 | 0;
 HEAP32[i31 >> 2] = i17;
 if ((i17 | 0) != 0) {
  i19 = i17 + 36 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
 }
 i19 = i23 | 0;
 HEAP32[i19 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i17 = i2 + 8 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
 }
 __ZN7WebCore19SimulatedMouseEvent6createERKN3WTF12AtomicStringENS1_10PassRefPtrINS_9DOMWindowEEENS5_INS_5EventEEEPNS_7ElementE(i21, i16, i22, i23, i7);
 i7 = i20 | 0;
 i23 = i21 | 0;
 i21 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i7 >> 2] = i21;
 __ZN7WebCore15EventDispatcher13dispatchEventEPNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i30, i20) | 0;
 i20 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i7 = i20 + 8 | 0;
   i30 = i7 | 0;
   i21 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i30 >> 2] = i21;
    break;
   }
   i21 = i7 - 8 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
  }
 } while (0);
 i20 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i23 = i20 + 8 | 0;
   i21 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
    break;
   } else {
    HEAP32[i23 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i19 = i20 + 8 | 0;
   i21 = i19 | 0;
   i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i21 >> 2] = i23;
    break;
   }
   i23 = i19 - 8 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 1](i23);
  }
 } while (0);
 i20 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i31 = i20 + 36 | 0;
   i23 = i31 | 0;
   i19 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) != 0) {
    HEAP32[i23 >> 2] = i19;
    break;
   }
   i19 = i31 - 36 | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 44 >> 2] & 1](i19);
  }
 } while (0);
 __ZN3WTF7HashSetIPN7WebCore7ElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(HEAP32[H_BASE + 16 >> 2] | 0, i6) | 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9EventPathC2ERNS_4NodeERNS_5EventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i1 | 0;
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i1 + 12;
 i13 = i1 + 4 | 0;
 HEAP32[i13 >> 2] = 32;
 i14 = i1 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 i1 = i2 + 12 | 0;
 i15 = HEAP32[i1 >> 2] | 0;
 i16 = (i15 & 256 | 0) == 0;
 i17 = i15 & 32;
 i15 = i3;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 16 >> 2] & 1](i3) | 0) {
  i18 = 1;
 } else {
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] & 1](i3) | 0;
 }
 HEAP32[i5 >> 2] = 0;
 do {
  if ((HEAP32[i1 >> 2] & 1048580 | 0) == 1048580) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 232 >> 2] & 1](i2) | 0) == 0) {
    i19 = i2;
    break;
   }
   i19 = HEAP32[i2 + 52 >> 2] | 0;
  } else {
   i19 = i2;
  }
 } while (0);
 HEAP32[i6 >> 2] = i19;
 if ((i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = (i17 | 0) == 0;
 i17 = i3 + 12 | 0;
 i3 = i7 | 0;
 i1 = i9 | 0;
 i15 = i19;
 i19 = 0;
 L11 : while (1) {
  if ((i19 | 0) == 0 | i2) {
   i20 = i15 + 12 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i21 & 1048580 | 0) == 1048580) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 232 >> 2] & 1](i15) | 0) == 0) {
      i22 = HEAP32[i20 >> 2] | 0;
      i23 = 13;
      break;
     } else {
      i24 = HEAP32[i15 + 52 >> 2] | 0;
      break;
     }
    } else {
     i22 = i21;
     i23 = 13;
    }
   } while (0);
   L20 : do {
    if ((i23 | 0) == 13) {
     i23 = 0;
     if ((i22 & 8388640 | 0) != 8388640) {
      i24 = i15 | 0;
      break;
     }
     i21 = HEAP32[(HEAP32[i15 + 20 >> 2] | 0) + 4 >> 2] | 0;
     do {
      if ((HEAP32[i21 + 12 >> 2] & 4096 | 0) != 0) {
       if ((HEAP32[(HEAP32[i21 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i21 | 0)) {
        break;
       }
       i20 = HEAP32[i21 + 92 >> 2] | 0;
       if ((i20 | 0) == 0) {
        break;
       }
       i25 = HEAP32[i20 + 44 >> 2] | 0;
       i26 = HEAP32[__ZN7WebCore8SVGNames6useTagE >> 2] | 0;
       if ((i25 | 0) != (i26 | 0)) {
        if ((HEAP32[i25 + 12 >> 2] | 0) != (HEAP32[i26 + 12 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i25 + 16 >> 2] | 0) != (HEAP32[i26 + 16 >> 2] | 0)) {
         break;
        }
       }
       i26 = __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeE(i20, i15) | 0;
       if ((i26 | 0) == 0) {
        i24 = i15 | 0;
        break L20;
       } else {
        i24 = i26 | 0;
        break L20;
       }
      }
     } while (0);
     i24 = i15 | 0;
    }
   } while (0);
   HEAP32[i5 >> 2] = i24;
  }
  if ((i15 | 0) == 0) {
   i23 = 71;
   break;
  } else {
   i27 = i15;
  }
  while (1) {
   i21 = i27 + 12 | 0;
   i26 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i26 & 1048580 | 0) == 1048580) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 232 >> 2] & 1](i27) | 0) == 0) {
      i28 = HEAP32[i21 >> 2] | 0;
      i23 = 31;
      break;
     } else {
      i29 = HEAP32[i27 + 52 >> 2] | 0;
      break;
     }
    } else {
     i28 = i26;
     i23 = 31;
    }
   } while (0);
   L46 : do {
    if ((i23 | 0) == 31) {
     i23 = 0;
     if ((i28 & 8388640 | 0) != 8388640) {
      i29 = i27 | 0;
      break;
     }
     i26 = HEAP32[(HEAP32[i27 + 20 >> 2] | 0) + 4 >> 2] | 0;
     do {
      if ((HEAP32[i26 + 12 >> 2] & 4096 | 0) != 0) {
       if ((HEAP32[(HEAP32[i26 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i26 | 0)) {
        break;
       }
       i21 = HEAP32[i26 + 92 >> 2] | 0;
       if ((i21 | 0) == 0) {
        break;
       }
       i20 = HEAP32[i21 + 44 >> 2] | 0;
       i25 = HEAP32[__ZN7WebCore8SVGNames6useTagE >> 2] | 0;
       if ((i20 | 0) != (i25 | 0)) {
        if ((HEAP32[i20 + 12 >> 2] | 0) != (HEAP32[i25 + 12 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i20 + 16 >> 2] | 0) != (HEAP32[i25 + 16 >> 2] | 0)) {
         break;
        }
       }
       i25 = __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeE(i21, i27) | 0;
       if ((i25 | 0) == 0) {
        i29 = i27 | 0;
        break L46;
       } else {
        i29 = i25 | 0;
        break L46;
       }
      }
     } while (0);
     i29 = i27 | 0;
    }
   } while (0);
   do {
    if (i18) {
     HEAP32[i8 >> 2] = i29;
     __ZSt11make_uniqueIN7WebCore24MouseOrFocusEventContextEJRPNS0_4NodeEPNS0_11EventTargetERS6_EENSt10_Unique_ifIT_E14_Single_objectEDpOT0_(i7, i6, i8, i5);
     i26 = HEAP32[i14 >> 2] | 0;
     if ((i26 | 0) == (HEAP32[i13 >> 2] | 0)) {
      i25 = i26 + 1 | 0;
      i21 = i25 + (i26 >>> 2) | 0;
      i20 = i21 >>> 0 > 16 >>> 0 ? i21 : 16;
      __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore12EventContextENS1_14default_deleteIS4_EEEELj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i11, i20 >>> 0 > i25 >>> 0 ? i20 : i25);
      i25 = HEAP32[i12 >> 2] | 0;
      i20 = HEAP32[i14 >> 2] | 0;
      i21 = HEAP32[i3 >> 2] | 0;
      HEAP32[i3 >> 2] = 0;
      HEAP32[i25 + (i20 << 2) >> 2] = i21;
     } else {
      i21 = HEAP32[i12 >> 2] | 0;
      i20 = HEAP32[i3 >> 2] | 0;
      HEAP32[i3 >> 2] = 0;
      HEAP32[i21 + (i26 << 2) >> 2] = i20;
     }
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     HEAP32[i3 >> 2] = 0;
    } else {
     HEAP32[i10 >> 2] = i29;
     __ZSt11make_uniqueIN7WebCore12EventContextEJRPNS0_4NodeEPNS0_11EventTargetERS6_EENSt10_Unique_ifIT_E14_Single_objectEDpOT0_(i9, i6, i10, i5);
     i20 = HEAP32[i14 >> 2] | 0;
     if ((i20 | 0) == (HEAP32[i13 >> 2] | 0)) {
      __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore12EventContextENS1_14default_deleteIS4_EEEELj32ENS_15CrashOnOverflowEE14appendSlowCaseIS7_EEvOT_(i11, i9);
     } else {
      i26 = HEAP32[i12 >> 2] | 0;
      i21 = HEAP32[i1 >> 2] | 0;
      HEAP32[i1 >> 2] = 0;
      HEAP32[i26 + (i20 << 2) >> 2] = i21;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     }
     i21 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
    }
   } while (0);
   if (i16) {
    i23 = 73;
    break L11;
   }
   i21 = HEAP32[i6 >> 2] | 0;
   if ((HEAP32[i21 + 12 >> 2] & 4096 | 0) != 0) {
    if ((HEAP32[(HEAP32[i21 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i21 | 0)) {
     i30 = i21;
     break;
    }
   }
   i20 = HEAP32[i21 + 16 >> 2] | 0;
   i21 = i20 | 0;
   HEAP32[i6 >> 2] = i21;
   if ((i20 | 0) == 0) {
    i30 = i21;
    break;
   } else {
    i27 = i21;
   }
  }
  if ((i30 | 0) == 0) {
   i23 = 74;
   break;
  }
  i21 = HEAP32[i5 >> 2] | 0;
  i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] & 1](i21) | 0;
  do {
   if ((i20 | 0) != 0) {
    if ((HEAP32[(HEAP32[i20 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i30 | 0)) {
     break;
    }
    i26 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
    i25 = HEAP32[i17 >> 2] | 0;
    if ((i25 | 0) == (HEAP32[i26 + 4 >> 2] | 0)) {
     i23 = 75;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 40 >> 2] | 0)) {
     i23 = 76;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 148 >> 2] | 0)) {
     i23 = 77;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 212 >> 2] | 0)) {
     i23 = 78;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 308 >> 2] | 0)) {
     i23 = 79;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 312 >> 2] | 0)) {
     i23 = 80;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 316 >> 2] | 0)) {
     i23 = 81;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 324 >> 2] | 0)) {
     i23 = 82;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 328 >> 2] | 0)) {
     i23 = 83;
     break L11;
    }
   }
  } while (0);
  i20 = HEAP32[i30 + 92 >> 2] | 0;
  i26 = i20;
  HEAP32[i6 >> 2] = i26;
  if ((i20 | 0) == 0) {
   i23 = 84;
   break;
  } else {
   i15 = i26;
   i19 = i21;
  }
 }
 if ((i23 | 0) == 71) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 73) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 74) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 75) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 76) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 77) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 78) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 79) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 80) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 81) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 82) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 83) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 84) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore9EventPathC1ERNS_4NodeERNS_5EventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i1 | 0;
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i1 + 12;
 i13 = i1 + 4 | 0;
 HEAP32[i13 >> 2] = 32;
 i14 = i1 + 8 | 0;
 HEAP32[i14 >> 2] = 0;
 i1 = i2 + 12 | 0;
 i15 = HEAP32[i1 >> 2] | 0;
 i16 = (i15 & 256 | 0) == 0;
 i17 = i15 & 32;
 i15 = i3;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 16 >> 2] & 1](i3) | 0) {
  i18 = 1;
 } else {
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 20 >> 2] & 1](i3) | 0;
 }
 HEAP32[i5 >> 2] = 0;
 do {
  if ((HEAP32[i1 >> 2] & 1048580 | 0) == 1048580) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 232 >> 2] & 1](i2) | 0) == 0) {
    i19 = i2;
    break;
   }
   i19 = HEAP32[i2 + 52 >> 2] | 0;
  } else {
   i19 = i2;
  }
 } while (0);
 HEAP32[i6 >> 2] = i19;
 if ((i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = (i17 | 0) == 0;
 i17 = i3 + 12 | 0;
 i3 = i7 | 0;
 i1 = i9 | 0;
 i15 = i19;
 i19 = 0;
 L11 : while (1) {
  if ((i19 | 0) == 0 | i2) {
   i20 = i15 + 12 | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i21 & 1048580 | 0) == 1048580) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 232 >> 2] & 1](i15) | 0) == 0) {
      i22 = HEAP32[i20 >> 2] | 0;
      i23 = 13;
      break;
     } else {
      i24 = HEAP32[i15 + 52 >> 2] | 0;
      break;
     }
    } else {
     i22 = i21;
     i23 = 13;
    }
   } while (0);
   L20 : do {
    if ((i23 | 0) == 13) {
     i23 = 0;
     if ((i22 & 8388640 | 0) != 8388640) {
      i24 = i15 | 0;
      break;
     }
     i21 = HEAP32[(HEAP32[i15 + 20 >> 2] | 0) + 4 >> 2] | 0;
     do {
      if ((HEAP32[i21 + 12 >> 2] & 4096 | 0) != 0) {
       if ((HEAP32[(HEAP32[i21 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i21 | 0)) {
        break;
       }
       i20 = HEAP32[i21 + 92 >> 2] | 0;
       if ((i20 | 0) == 0) {
        break;
       }
       i25 = HEAP32[i20 + 44 >> 2] | 0;
       i26 = HEAP32[__ZN7WebCore8SVGNames6useTagE >> 2] | 0;
       if ((i25 | 0) != (i26 | 0)) {
        if ((HEAP32[i25 + 12 >> 2] | 0) != (HEAP32[i26 + 12 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i25 + 16 >> 2] | 0) != (HEAP32[i26 + 16 >> 2] | 0)) {
         break;
        }
       }
       i26 = __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeE(i20, i15) | 0;
       if ((i26 | 0) == 0) {
        i24 = i15 | 0;
        break L20;
       } else {
        i24 = i26 | 0;
        break L20;
       }
      }
     } while (0);
     i24 = i15 | 0;
    }
   } while (0);
   HEAP32[i5 >> 2] = i24;
  }
  if ((i15 | 0) == 0) {
   i23 = 71;
   break;
  } else {
   i27 = i15;
  }
  while (1) {
   i21 = i27 + 12 | 0;
   i26 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i26 & 1048580 | 0) == 1048580) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 232 >> 2] & 1](i27) | 0) == 0) {
      i28 = HEAP32[i21 >> 2] | 0;
      i23 = 31;
      break;
     } else {
      i29 = HEAP32[i27 + 52 >> 2] | 0;
      break;
     }
    } else {
     i28 = i26;
     i23 = 31;
    }
   } while (0);
   L46 : do {
    if ((i23 | 0) == 31) {
     i23 = 0;
     if ((i28 & 8388640 | 0) != 8388640) {
      i29 = i27 | 0;
      break;
     }
     i26 = HEAP32[(HEAP32[i27 + 20 >> 2] | 0) + 4 >> 2] | 0;
     do {
      if ((HEAP32[i26 + 12 >> 2] & 4096 | 0) != 0) {
       if ((HEAP32[(HEAP32[i26 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i26 | 0)) {
        break;
       }
       i21 = HEAP32[i26 + 92 >> 2] | 0;
       if ((i21 | 0) == 0) {
        break;
       }
       i20 = HEAP32[i21 + 44 >> 2] | 0;
       i25 = HEAP32[__ZN7WebCore8SVGNames6useTagE >> 2] | 0;
       if ((i20 | 0) != (i25 | 0)) {
        if ((HEAP32[i20 + 12 >> 2] | 0) != (HEAP32[i25 + 12 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i20 + 16 >> 2] | 0) != (HEAP32[i25 + 16 >> 2] | 0)) {
         break;
        }
       }
       i25 = __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeE(i21, i27) | 0;
       if ((i25 | 0) == 0) {
        i29 = i27 | 0;
        break L46;
       } else {
        i29 = i25 | 0;
        break L46;
       }
      }
     } while (0);
     i29 = i27 | 0;
    }
   } while (0);
   do {
    if (i18) {
     HEAP32[i8 >> 2] = i29;
     __ZSt11make_uniqueIN7WebCore24MouseOrFocusEventContextEJRPNS0_4NodeEPNS0_11EventTargetERS6_EENSt10_Unique_ifIT_E14_Single_objectEDpOT0_(i7, i6, i8, i5);
     i26 = HEAP32[i14 >> 2] | 0;
     if ((i26 | 0) == (HEAP32[i13 >> 2] | 0)) {
      i25 = i26 + 1 | 0;
      i21 = i25 + (i26 >>> 2) | 0;
      i20 = i21 >>> 0 > 16 >>> 0 ? i21 : 16;
      __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore12EventContextENS1_14default_deleteIS4_EEEELj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i11, i20 >>> 0 > i25 >>> 0 ? i20 : i25);
      i25 = HEAP32[i12 >> 2] | 0;
      i20 = HEAP32[i14 >> 2] | 0;
      i21 = HEAP32[i3 >> 2] | 0;
      HEAP32[i3 >> 2] = 0;
      HEAP32[i25 + (i20 << 2) >> 2] = i21;
     } else {
      i21 = HEAP32[i12 >> 2] | 0;
      i20 = HEAP32[i3 >> 2] | 0;
      HEAP32[i3 >> 2] = 0;
      HEAP32[i21 + (i26 << 2) >> 2] = i20;
     }
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     HEAP32[i3 >> 2] = 0;
    } else {
     HEAP32[i10 >> 2] = i29;
     __ZSt11make_uniqueIN7WebCore12EventContextEJRPNS0_4NodeEPNS0_11EventTargetERS6_EENSt10_Unique_ifIT_E14_Single_objectEDpOT0_(i9, i6, i10, i5);
     i20 = HEAP32[i14 >> 2] | 0;
     if ((i20 | 0) == (HEAP32[i13 >> 2] | 0)) {
      __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore12EventContextENS1_14default_deleteIS4_EEEELj32ENS_15CrashOnOverflowEE14appendSlowCaseIS7_EEvOT_(i11, i9);
     } else {
      i26 = HEAP32[i12 >> 2] | 0;
      i21 = HEAP32[i1 >> 2] | 0;
      HEAP32[i1 >> 2] = 0;
      HEAP32[i26 + (i20 << 2) >> 2] = i21;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     }
     i21 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
    }
   } while (0);
   if (i16) {
    i23 = 73;
    break L11;
   }
   i21 = HEAP32[i6 >> 2] | 0;
   if ((HEAP32[i21 + 12 >> 2] & 4096 | 0) != 0) {
    if ((HEAP32[(HEAP32[i21 + 20 >> 2] | 0) + 4 >> 2] | 0) == (i21 | 0)) {
     i30 = i21;
     break;
    }
   }
   i20 = HEAP32[i21 + 16 >> 2] | 0;
   i21 = i20 | 0;
   HEAP32[i6 >> 2] = i21;
   if ((i20 | 0) == 0) {
    i30 = i21;
    break;
   } else {
    i27 = i21;
   }
  }
  if ((i30 | 0) == 0) {
   i23 = 74;
   break;
  }
  i21 = HEAP32[i5 >> 2] | 0;
  i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] & 1](i21) | 0;
  do {
   if ((i20 | 0) != 0) {
    if ((HEAP32[(HEAP32[i20 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i30 | 0)) {
     break;
    }
    i26 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
    i25 = HEAP32[i17 >> 2] | 0;
    if ((i25 | 0) == (HEAP32[i26 + 4 >> 2] | 0)) {
     i23 = 75;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 40 >> 2] | 0)) {
     i23 = 76;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 148 >> 2] | 0)) {
     i23 = 77;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 212 >> 2] | 0)) {
     i23 = 78;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 308 >> 2] | 0)) {
     i23 = 79;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 312 >> 2] | 0)) {
     i23 = 80;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 316 >> 2] | 0)) {
     i23 = 81;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 324 >> 2] | 0)) {
     i23 = 82;
     break L11;
    }
    if ((i25 | 0) == (HEAP32[i26 + 328 >> 2] | 0)) {
     i23 = 83;
     break L11;
    }
   }
  } while (0);
  i20 = HEAP32[i30 + 92 >> 2] | 0;
  i26 = i20;
  HEAP32[i6 >> 2] = i26;
  if ((i20 | 0) == 0) {
   i23 = 84;
   break;
  } else {
   i15 = i26;
   i19 = i21;
  }
 }
 if ((i23 | 0) == 71) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 73) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 74) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 75) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 76) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 77) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 78) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 79) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 80) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 81) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 82) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 83) {
  STACKTOP = i4;
  return;
 } else if ((i23 | 0) == 84) {
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore15EventDispatcher19dispatchScopedEventERNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = i1 + 12 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 & 1048580 | 0) == 1048580) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 1](i1) | 0) == 0) {
    i9 = HEAP32[i7 >> 2] | 0;
    i10 = 5;
    break;
   } else {
    i11 = HEAP32[i1 + 52 >> 2] | 0;
    break;
   }
  } else {
   i9 = i8;
   i10 = 5;
  }
 } while (0);
 L6 : do {
  if ((i10 | 0) == 5) {
   if ((i9 & 8388640 | 0) != 8388640) {
    i11 = i1 | 0;
    break;
   }
   i8 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2] | 0;
   do {
    if ((HEAP32[i8 + 12 >> 2] & 4096 | 0) != 0) {
     if ((HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i8 | 0)) {
      break;
     }
     i7 = HEAP32[i8 + 92 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i12 = HEAP32[i7 + 44 >> 2] | 0;
     i13 = HEAP32[__ZN7WebCore8SVGNames6useTagE >> 2] | 0;
     if ((i12 | 0) != (i13 | 0)) {
      if ((HEAP32[i12 + 12 >> 2] | 0) != (HEAP32[i13 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i12 + 16 >> 2] | 0) != (HEAP32[i13 + 16 >> 2] | 0)) {
       break;
      }
     }
     i13 = __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeE(i7, i1) | 0;
     if ((i13 | 0) == 0) {
      i11 = i1 | 0;
      break L6;
     } else {
      i11 = i13 | 0;
      break L6;
     }
    }
   } while (0);
   i11 = i1 | 0;
  }
 } while (0);
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = i11;
 if ((i11 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 56 >> 2] & 1](i11);
 }
 __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i2, i4);
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 1](i4);
 }
 i4 = __ZN7WebCore16ScopedEventQueue8instanceEv() | 0;
 i1 = i5 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 __ZN7WebCore16ScopedEventQueue12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i4, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 + 8 | 0;
 i5 = i1 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = i1 - 8 | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore7ElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
  L3 : do {
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
      break L3;
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
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore22ChildNodesLazySnapshot12takeSnapshotEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = i1 + 8 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  return;
 }
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i4 | 0;
  if ((i5 | 0) != 0) {
   i7 = HEAP32[i6 >> 2] | 0;
   i8 = i7 + (i5 << 2) | 0;
   i5 = i7;
   while (1) {
    i7 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i9 = i7 + 8 | 0;
      i10 = i9 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
      HEAP32[i10 >> 2] = i11;
      if ((i11 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
     }
    } while (0);
    i5 = i5 + 4 | 0;
    if ((i5 | 0) == (i8 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i6 >> 2] | 0;
  if ((i3 | 0) != 0) {
   HEAP32[i6 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i12 = i4;
 }
 while (1) {
  i4 = HEAP32[i2 >> 2] | 0;
  i1 = i4 + 8 | 0;
  i3 = HEAP32[i1 >> 2] | 0;
  if ((i3 | 0) == (HEAP32[i4 + 4 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i3 + 1 | 0);
   HEAP32[(HEAP32[i4 >> 2] | 0) + (HEAP32[i1 >> 2] << 2) >> 2] = i12;
   i6 = i12 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  } else {
   HEAP32[(HEAP32[i4 >> 2] | 0) + (i3 << 2) >> 2] = i12;
   i3 = i12 + 8 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  }
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i12 = HEAP32[i12 + 28 >> 2] | 0;
  if ((i12 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore12EventContextENS1_14default_deleteIS4_EEEELj32ENS_15CrashOnOverflowEE14appendSlowCaseIS7_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 << 2) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore12EventContextENS1_14default_deleteIS4_EEEELj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (i2 - i7 >> 2 << 2) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i10 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i15 = i11 + (i12 << 2) | 0;
   HEAP32[i15 >> 2] = i14;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = i16 + 1 | 0;
   HEAP32[i3 >> 2] = i17;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore12EventContextENS1_14default_deleteIS4_EEEELj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i10 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i15 = i11 + (i12 << 2) | 0;
 HEAP32[i15 >> 2] = i14;
 i16 = HEAP32[i3 >> 2] | 0;
 i17 = i16 + 1 | 0;
 HEAP32[i3 >> 2] = i17;
 return;
}
function __ZSt11make_uniqueIN7WebCore24MouseOrFocusEventContextEJRPNS0_4NodeEPNS0_11EventTargetERS6_EENSt10_Unique_ifIT_E14_Single_objectEDpOT0_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = __Znwj(20) | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i11 = i10 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = HEAP32[i3 >> 2] | 0;
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = i11;
 if ((i11 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 56 >> 2] & 1](i11);
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i8 | 0;
 HEAP32[i4 >> 2] = i11;
 if ((i11 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 56 >> 2] & 1](i11);
 }
 __ZN7WebCore24MouseOrFocusEventContextC1EN3WTF10PassRefPtrINS_4NodeEEENS2_INS_11EventTargetEEES6_(i9, i6, i7, i8);
 HEAP32[i1 >> 2] = i9;
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 60 >> 2] & 1](i9);
 }
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 60 >> 2] & 1](i9);
 }
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = i9 + 8 | 0;
 i9 = i2 | 0;
 i3 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i3;
 if ((i3 | 0) >= 1) {
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
function __ZSt11make_uniqueIN7WebCore12EventContextEJRPNS0_4NodeEPNS0_11EventTargetERS6_EENSt10_Unique_ifIT_E14_Single_objectEDpOT0_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = __Znwj(16) | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i11 = i10 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 i11 = HEAP32[i3 >> 2] | 0;
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = i11;
 if ((i11 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 56 >> 2] & 1](i11);
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i8 | 0;
 HEAP32[i4 >> 2] = i11;
 if ((i11 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 56 >> 2] & 1](i11);
 }
 __ZN7WebCore12EventContextC1EN3WTF10PassRefPtrINS_4NodeEEENS2_INS_11EventTargetEEES6_(i9, i6, i7, i8);
 HEAP32[i1 >> 2] = i9;
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 60 >> 2] & 1](i9);
 }
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 60 >> 2] & 1](i9);
 }
 i9 = HEAP32[i2 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = i9 + 8 | 0;
 i9 = i2 | 0;
 i3 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i3;
 if ((i3 | 0) >= 1) {
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
function __ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore12EventContextENS1_14default_deleteIS4_EEEELj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i8 = i5 + (i7 << 2) | 0;
 do {
  if (i2 >>> 0 > 32 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i9 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i9 >>> 2;
    i10 = __ZN3WTF10fastMallocEj(i9) | 0;
    HEAP32[i4 >> 2] = i10;
    i11 = i10;
    break;
   }
  } else {
   i10 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i10;
   HEAP32[i3 >> 2] = 32;
   i11 = i10;
  }
 } while (0);
 if ((i7 | 0) != 0) {
  i7 = i5;
  i2 = i11;
  while (1) {
   i11 = i7 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i2 >> 2] = i10;
   i10 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   if ((i10 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
   }
   i10 = i7 + 4 | 0;
   if ((i10 | 0) == (i8 | 0)) {
    break;
   } else {
    i7 = i10;
    i2 = i2 + 4 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZN7WebCore9EventPath16setRelatedTargetERNS_11EventTargetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 1](i2) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i3 + 20 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i6 = i1 | 0;
 i1 = 0;
 i7 = 0;
 i8 = 0;
 i9 = i5;
 while (1) {
  if (i9 >>> 0 <= i8 >>> 0) {
   i10 = 5;
   break;
  }
  i11 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i8 << 2) >> 2] | 0;
  i12 = HEAP32[i11 + 4 >> 2] | 0;
  i13 = HEAP32[i12 + 20 >> 2] | 0;
  do {
   if ((i13 | 0) == (i1 | 0)) {
    i14 = i7;
    i15 = i1;
   } else {
    if ((i7 | 0) != 0) {
     i14 = i12;
     i15 = i13;
     break;
    }
    i14 = (i13 | 0) == (i2 | 0) ? i3 : 0;
    i15 = i13;
   }
  } while (0);
  if ((i14 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 56 >> 2] & 1](i14 | 0);
  }
  i13 = i11 + 16 | 0;
  i12 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = i14;
  if ((i12 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 60 >> 2] & 1](i12);
  }
  i12 = i8 + 1 | 0;
  if (i12 >>> 0 >= i5 >>> 0) {
   i10 = 16;
   break;
  }
  i1 = i15;
  i7 = i14;
  i8 = i12;
  i9 = HEAP32[i4 >> 2] | 0;
 }
 if ((i10 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i10 | 0) == 16) {
  return;
 }
}
function __ZN7WebCore18WindowEventContextC2EN3WTF10PassRefPtrINS_4NodeEEEPKNS_12EventContextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = (i3 | 0) != 0;
 i6 = i2 | 0;
 i2 = HEAP32[(i1 ? i3 + 4 | 0 : i6) >> 2] | 0;
 if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 i7 = HEAP32[i2 + 336 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i4 >> 2] = i7;
  } else {
   i2 = i7 + 36 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i7;
   if ((i2 | 0) == 0) {
    break;
   }
   i8 = i2 + 36 | 0;
   i2 = i8 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i2 >> 2] = i9;
    break;
   }
   i9 = i8 - 36 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] & 1](i9);
  }
 } while (0);
 if (i1) {
  i10 = HEAP32[i3 + 12 >> 2] | 0;
 } else {
  i10 = HEAP32[i6 >> 2] | 0;
 }
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 56 >> 2] & 1](i10);
 }
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i10;
 if ((i6 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] & 1](i6);
 return;
}
function __ZN7WebCore18WindowEventContextC1EN3WTF10PassRefPtrINS_4NodeEEEPKNS_12EventContextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = (i3 | 0) != 0;
 i6 = i2 | 0;
 i2 = HEAP32[(i1 ? i3 + 4 | 0 : i6) >> 2] | 0;
 if ((HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 i7 = HEAP32[i2 + 336 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i4 >> 2] = i7;
  } else {
   i2 = i7 + 36 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i7;
   if ((i2 | 0) == 0) {
    break;
   }
   i8 = i2 + 36 | 0;
   i2 = i8 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i2 >> 2] = i9;
    break;
   }
   i9 = i8 - 36 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] & 1](i9);
  }
 } while (0);
 if (i1) {
  i10 = HEAP32[i3 + 12 >> 2] | 0;
 } else {
  i10 = HEAP32[i6 >> 2] | 0;
 }
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 56 >> 2] & 1](i10);
 }
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i10;
 if ((i6 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] & 1](i6);
 return;
}
function __ZN7WebCore18WindowEventContext17handleLocalEventsERNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = i7;
 if ((i7 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 56 >> 2] & 1](i7);
 }
 __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i2, i4);
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 1](i4);
 }
 HEAP32[i2 + 28 >> 2] = HEAP32[i5 >> 2];
 __ZN7WebCore11EventTarget18fireEventListenersEPNS_5EventE(HEAP32[i5 >> 2] | 0, i2) | 0;
 i6 = 1;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore9EventPath17hasEventListenersERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 | 0;
 i1 = 0;
 while (1) {
  i6 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + (i1 << 2) >> 2] | 0) + 4 >> 2] | 0;
  i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 48 >> 2] & 1](i6 | 0) | 0;
  if ((i7 | 0) != 0) {
   if (__ZNK7WebCore16EventListenerMap8containsERKN3WTF12AtomicStringE(i7 | 0, i2) | 0) {
    i4 = 1;
    i8 = 8;
    break;
   }
  }
  i7 = i1 + 1 | 0;
  if (i7 >>> 0 < (HEAP32[i3 >> 2] | 0) >>> 0) {
   i1 = i7;
  } else {
   i4 = 0;
   i8 = 9;
   break;
  }
 }
 if ((i8 | 0) == 8) {
  return i4 | 0;
 } else if ((i8 | 0) == 9) {
  return i4 | 0;
 }
 return 0;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
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
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore18WindowEventContextC2EN3WTF10PassRefPtrINS_4NodeEEEPKNS_12EventContextE,b3,__ZN7WebCore9EventPathC2ERNS_4NodeERNS_5EventE,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore8SVGNames6useTagE": __ZN7WebCore8SVGNames6useTagE, "__ZN7WebCore22ChildNodesLazySnapshot14latestSnapshotE": __ZN7WebCore22ChildNodesLazySnapshot14latestSnapshotE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore15EventDispatcher22dispatchSimulatedClickEPNS_7ElementEPNS_5EventENS_31SimulatedClickMouseEventOptionsENS_27SimulatedClickVisualOptionsE","__ZN3WTF7HashSetIPN7WebCore7ElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore18WindowEventContextC2EN3WTF10PassRefPtrINS_4NodeEEEPKNS_12EventContextE","__ZN7WebCore15EventDispatcher13dispatchEventEPNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE","__ZNK7WebCore9EventPath17hasEventListenersERKN3WTF12AtomicStringE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore18WindowEventContext17handleLocalEventsERNS_5EventE","__ZN7WebCore15EventDispatcher19dispatchScopedEventERNS_4NodeEN3WTF10PassRefPtrINS_5EventEEE","_memset","__ZSt11make_uniqueIN7WebCore24MouseOrFocusEventContextEJRPNS0_4NodeEPNS0_11EventTargetERS6_EENSt10_Unique_ifIT_E14_Single_objectEDpOT0_","__ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore12EventContextENS1_14default_deleteIS4_EEEELj32ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZSt11make_uniqueIN7WebCore12EventContextEJRPNS0_4NodeEPNS0_11EventTargetERS6_EENSt10_Unique_ifIT_E14_Single_objectEDpOT0_","_memcpy","_strlen","__ZN7WebCore9EventPath16setRelatedTargetERNS_11EventTargetE","__ZN7WebCore22ChildNodesLazySnapshot12takeSnapshotEv","__ZN3WTF6VectorINSt3__110unique_ptrIN7WebCore12EventContextENS1_14default_deleteIS4_EEEELj32ENS_15CrashOnOverflowEE14appendSlowCaseIS7_EEvOT_","__ZN3WTF9HashTableIPN7WebCore7ElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore9EventPathC2ERNS_4NodeERNS_5EventE"]

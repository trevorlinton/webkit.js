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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore22StorageEventDispatcher26dispatchLocalStorageEventsERKN3WTF6StringES4_S4_PNS_14SecurityOriginEPNS_5FrameE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i5 + 32 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i7 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i8 + 160 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  __ZN7WebCore4Page9initGroupEv(i8);
  i14 = HEAP32[i12 >> 2] | 0;
 } else {
  i14 = i13;
 }
 i13 = HEAP32[i14 + 24 >> 2] | 0;
 i15 = HEAP32[i14 + 28 >> 2] | 0;
 i16 = i13 + (i15 << 2) | 0;
 L7 : do {
  if ((HEAP32[i14 + 36 >> 2] | 0) == 0) {
   i17 = i14;
  } else {
   L9 : do {
    if ((i15 | 0) == 0) {
     i18 = i13;
    } else {
     i19 = i13;
     while (1) {
      i20 = HEAP32[i19 >> 2] | 0;
      if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
       i18 = i19;
       break L9;
      }
      i20 = i19 + 4 | 0;
      if ((i20 | 0) == (i16 | 0)) {
       i17 = i14;
       break L7;
      } else {
       i19 = i20;
      }
     }
    }
   } while (0);
   if ((i18 | 0) == (i16 | 0)) {
    i17 = i14;
    break;
   } else {
    i21 = i18;
    i22 = 0;
    i23 = 0;
    i24 = 0;
   }
   L14 : while (1) {
    i19 = HEAP32[(HEAP32[i21 >> 2] | 0) + 60 >> 2] | 0;
    if ((i19 | 0) == 0) {
     i25 = i22;
     i26 = i23;
     i27 = i24;
    } else {
     i20 = i19;
     i19 = i22;
     i28 = i23;
     i29 = i24;
     while (1) {
      do {
       if ((i20 | 0) == (i5 | 0)) {
        i30 = i19;
        i31 = i28;
        i32 = i29;
       } else {
        if (!(__ZNK7WebCore14SecurityOrigin5equalEPKS0_(HEAP32[(HEAP32[i20 + 456 >> 2] | 0) + 100 >> 2] | 0, i4) | 0)) {
         i30 = i19;
         i31 = i28;
         i32 = i29;
         break;
        }
        if ((i19 | 0) != (i28 | 0)) {
         HEAP32[i29 + (i19 << 2) >> 2] = i20;
         i33 = i20 + 4 | 0;
         HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
         i33 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
         HEAP32[i11 >> 2] = i33;
         i30 = i33;
         i31 = i28;
         i32 = i29;
         break;
        }
        i33 = i28 + 1 | 0;
        i34 = i33 + (i28 >>> 2) | 0;
        i35 = i34 >>> 0 > 16 >>> 0 ? i34 : 16;
        i34 = i35 >>> 0 > i33 >>> 0 ? i35 : i33;
        do {
         if (i28 >>> 0 < i34 >>> 0) {
          if (i34 >>> 0 > 1073741823 >>> 0) {
           i36 = 17;
           break L14;
          }
          i33 = __ZN3WTF18fastMallocGoodSizeEj(i34 << 2) | 0;
          i35 = i33 >>> 2;
          HEAP32[i10 >> 2] = i35;
          i37 = __ZN3WTF10fastMallocEj(i33) | 0;
          i33 = i37;
          HEAP32[i9 >> 2] = i33;
          i38 = i29;
          _memcpy(i37 | 0, i38 | 0, i28 << 2) | 0;
          if ((i29 | 0) == 0) {
           i39 = i35;
           i40 = i33;
           break;
          }
          if ((i33 | 0) == (i29 | 0)) {
           HEAP32[i9 >> 2] = 0;
           HEAP32[i10 >> 2] = 0;
           i41 = 0;
           i42 = 0;
          } else {
           i41 = i35;
           i42 = i33;
          }
          __ZN3WTF8fastFreeEPv(i38);
          i39 = i41;
          i40 = i42;
         } else {
          i39 = i28;
          i40 = i29;
         }
        } while (0);
        HEAP32[i40 + (i28 << 2) >> 2] = i20;
        i34 = i20 + 4 | 0;
        HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
        i34 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
        HEAP32[i11 >> 2] = i34;
        i30 = i34;
        i31 = i39;
        i32 = i40;
       }
      } while (0);
      i34 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i20 + 40 | 0, 0) | 0;
      if ((i34 | 0) == 0) {
       i25 = i30;
       i26 = i31;
       i27 = i32;
       break;
      } else {
       i20 = i34;
       i19 = i30;
       i28 = i31;
       i29 = i32;
      }
     }
    }
    i29 = i21 + 4 | 0;
    if ((i29 | 0) == (i16 | 0)) {
     i36 = 28;
     break;
    } else {
     i43 = i29;
    }
    while (1) {
     i29 = HEAP32[i43 >> 2] | 0;
     if (!((i29 | 0) == (-1 | 0) | (i29 | 0) == 0)) {
      break;
     }
     i29 = i43 + 4 | 0;
     if ((i29 | 0) == (i16 | 0)) {
      i36 = 28;
      break L14;
     } else {
      i43 = i29;
     }
    }
    if ((i43 | 0) == (i16 | 0)) {
     i36 = 28;
     break;
    } else {
     i21 = i43;
     i22 = i25;
     i23 = i26;
     i24 = i27;
    }
   }
   if ((i36 | 0) == 17) {
    _WTFCrash();
   } else if ((i36 | 0) == 28) {
    i17 = HEAP32[i12 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 0) {
  __ZN7WebCore4Page9initGroupEv(i8);
  i44 = HEAP32[i12 >> 2] | 0;
 } else {
  i44 = i17;
 }
 __ZN7WebCore22StorageEventDispatcher34dispatchLocalStorageEventsToFramesERNS_9PageGroupERKN3WTF6VectorINS3_6RefPtrINS_5FrameEEELj0ENS3_15CrashOnOverflowEEERKNS3_6StringESE_SE_SE_PNS_14SecurityOriginE(i44, i7, i1, i2, i3, (HEAP32[i5 + 456 >> 2] | 0) + 356 | 0, i4);
 i4 = HEAP32[i11 >> 2] | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i2 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i1 = i2 + 4 | 0;
     i7 = i1 | 0;
     i44 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i44 | 0) != 0) {
      HEAP32[i7 >> 2] = i44;
      break;
     }
     i44 = i1 - 4 | 0;
     if ((i44 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i44 >> 2] | 0) + 4 >> 2] & 1](i44);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i3 | 0)) {
    break;
   }
  }
  HEAP32[i11 >> 2] = 0;
 }
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore22StorageEventDispatcher34dispatchLocalStorageEventsToFramesERNS_9PageGroupERKN3WTF6VectorINS3_6RefPtrINS_5FrameEEELj0ENS3_15CrashOnOverflowEEERKNS3_6StringESE_SE_SE_PNS_14SecurityOriginE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = HEAP32[i1 + 24 >> 2] | 0;
 i13 = HEAP32[i1 + 28 >> 2] | 0;
 i14 = i12 + (i13 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 36 >> 2] | 0) != 0) {
   L3 : do {
    if ((i13 | 0) == 0) {
     i15 = i12;
    } else {
     i16 = i12;
     while (1) {
      i17 = HEAP32[i16 >> 2] | 0;
      if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
       i15 = i16;
       break L3;
      }
      i16 = i16 + 4 | 0;
      if ((i16 | 0) == (i14 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i15 | 0) == (i14 | 0)) {
    break;
   } else {
    i18 = i15;
   }
   while (1) {
    i16 = HEAP32[i18 >> 2] | 0;
    do {
     if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
      i17 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i16) | 0;
      if ((i17 | 0) == 0) {
       break;
      }
      __ZN7WebCore24InspectorInstrumentation30didDispatchDOMStorageEventImplEPNS_19InstrumentingAgentsERKN3WTF6StringES6_S6_NS_11StorageTypeEPNS_14SecurityOriginEPNS_4PageE(i17, i3, i4, i5, 0, i7, i16);
     }
    } while (0);
    i16 = i18 + 4 | 0;
    if ((i16 | 0) == (i14 | 0)) {
     break L1;
    } else {
     i19 = i16;
    }
    while (1) {
     i16 = HEAP32[i19 >> 2] | 0;
     if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
      break;
     }
     i16 = i19 + 4 | 0;
     if ((i16 | 0) == (i14 | 0)) {
      break L1;
     } else {
      i19 = i16;
     }
    }
    if ((i19 | 0) == (i14 | 0)) {
     break;
    } else {
     i18 = i19;
    }
   }
  }
 } while (0);
 i19 = i2 + 8 | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i14 = i2 | 0;
 i2 = i10 | 0;
 i7 = i11 | 0;
 i15 = 0;
 i12 = i18;
 L22 : while (1) {
  HEAP32[i9 >> 2] = 0;
  if (i12 >>> 0 <= i15 >>> 0) {
   i20 = 16;
   break;
  }
  i18 = __ZNK7WebCore9DOMWindow12localStorageERi(HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + (i15 << 2) >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0, i9) | 0;
  do {
   if ((HEAP32[i9 >> 2] | 0) == 0) {
    if ((HEAP32[i19 >> 2] | 0) >>> 0 <= i15 >>> 0) {
     i20 = 19;
     break L22;
    }
    i13 = HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + (i15 << 2) >> 2] | 0) + 456 >> 2] | 0;
    __ZN7WebCore12StorageEvent6createERKN3WTF12AtomicStringERKNS1_6StringES7_S7_S7_PNS_7StorageE(i11, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 336 | 0, i3, i4, i5, i6, i18);
    i1 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i2 >> 2] = i1;
    __ZN7WebCore8Document18enqueueWindowEventEN3WTF10PassRefPtrINS_5EventEEE(i13, i10);
    i13 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i13 | 0) != 0) {
      i1 = i13 + 8 | 0;
      i16 = i1 | 0;
      i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
      if ((i17 | 0) != 0) {
       HEAP32[i16 >> 2] = i17;
       break;
      }
      i17 = i1 - 8 | 0;
      if ((i17 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 1](i17);
     }
    } while (0);
    i13 = HEAP32[i7 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    i17 = i13 + 8 | 0;
    i1 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    if ((i1 | 0) == 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
     break;
    } else {
     HEAP32[i17 >> 2] = i1;
     break;
    }
   }
  } while (0);
  i18 = i15 + 1 | 0;
  i1 = HEAP32[i19 >> 2] | 0;
  if (i18 >>> 0 < i1 >>> 0) {
   i15 = i18;
   i12 = i1;
  } else {
   i20 = 31;
   break;
  }
 }
 if ((i20 | 0) == 16) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i20 | 0) == 19) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i20 | 0) == 31) {
  STACKTOP = i8;
  return;
 }
}
function __ZN7WebCore22StorageEventDispatcher28dispatchSessionStorageEventsERKN3WTF6StringES4_S4_PNS_14SecurityOriginEPNS_5FrameE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i5 + 32 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i7 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = HEAP32[i8 + 60 >> 2] | 0;
 L4 : do {
  if ((i12 | 0) != 0) {
   i13 = i12;
   i14 = 0;
   i15 = 0;
   i16 = 0;
   L6 : while (1) {
    do {
     if ((i13 | 0) == (i5 | 0)) {
      i17 = i14;
      i18 = i15;
      i19 = i16;
     } else {
      if (!(__ZNK7WebCore14SecurityOrigin5equalEPKS0_(HEAP32[(HEAP32[i13 + 456 >> 2] | 0) + 100 >> 2] | 0, i4) | 0)) {
       i17 = i14;
       i18 = i15;
       i19 = i16;
       break;
      }
      if ((i14 | 0) != (i15 | 0)) {
       HEAP32[i16 + (i14 << 2) >> 2] = i13;
       i20 = i13 + 4 | 0;
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
       i20 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
       HEAP32[i11 >> 2] = i20;
       i17 = i20;
       i18 = i15;
       i19 = i16;
       break;
      }
      i20 = i15 + 1 | 0;
      i21 = i20 + (i15 >>> 2) | 0;
      i22 = i21 >>> 0 > 16 >>> 0 ? i21 : 16;
      i21 = i22 >>> 0 > i20 >>> 0 ? i22 : i20;
      do {
       if (i15 >>> 0 < i21 >>> 0) {
        if (i21 >>> 0 > 1073741823 >>> 0) {
         break L6;
        }
        i20 = __ZN3WTF18fastMallocGoodSizeEj(i21 << 2) | 0;
        i22 = i20 >>> 2;
        HEAP32[i10 >> 2] = i22;
        i23 = __ZN3WTF10fastMallocEj(i20) | 0;
        i20 = i23;
        HEAP32[i9 >> 2] = i20;
        i24 = i16;
        _memcpy(i23 | 0, i24 | 0, i15 << 2) | 0;
        if ((i16 | 0) == 0) {
         i25 = i22;
         i26 = i20;
         break;
        }
        if ((i20 | 0) == (i16 | 0)) {
         HEAP32[i9 >> 2] = 0;
         HEAP32[i10 >> 2] = 0;
         i27 = 0;
         i28 = 0;
        } else {
         i27 = i22;
         i28 = i20;
        }
        __ZN3WTF8fastFreeEPv(i24);
        i25 = i27;
        i26 = i28;
       } else {
        i25 = i15;
        i26 = i16;
       }
      } while (0);
      HEAP32[i26 + (i15 << 2) >> 2] = i13;
      i21 = i13 + 4 | 0;
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
      i21 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
      HEAP32[i11 >> 2] = i21;
      i17 = i21;
      i18 = i25;
      i19 = i26;
     }
    } while (0);
    i21 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i13 + 40 | 0, 0) | 0;
    if ((i21 | 0) == 0) {
     break L4;
    } else {
     i13 = i21;
     i14 = i17;
     i15 = i18;
     i16 = i19;
    }
   }
   _WTFCrash();
  }
 } while (0);
 __ZN7WebCore22StorageEventDispatcher36dispatchSessionStorageEventsToFramesERNS_4PageERKN3WTF6VectorINS3_6RefPtrINS_5FrameEEELj0ENS3_15CrashOnOverflowEEERKNS3_6StringESE_SE_SE_PNS_14SecurityOriginE(i8, i7, i1, i2, i3, (HEAP32[i5 + 456 >> 2] | 0) + 356 | 0, i4);
 i4 = HEAP32[i11 >> 2] | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i2 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i1 = i2 + 4 | 0;
     i7 = i1 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i7 >> 2] = i8;
      break;
     }
     i8 = i1 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i3 | 0)) {
    break;
   }
  }
  HEAP32[i11 >> 2] = 0;
 }
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore22StorageEventDispatcher36dispatchSessionStorageEventsToFramesERNS_4PageERKN3WTF6VectorINS3_6RefPtrINS_5FrameEEELj0ENS3_15CrashOnOverflowEEERKNS3_6StringESE_SE_SE_PNS_14SecurityOriginE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
   i12 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i1) | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation30didDispatchDOMStorageEventImplEPNS_19InstrumentingAgentsERKN3WTF6StringES6_S6_NS_11StorageTypeEPNS_14SecurityOriginEPNS_4PageE(i12, i3, i4, i5, 1, i7, i1);
  }
 } while (0);
 i1 = i2 + 8 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i12 = i2 | 0;
 i2 = i10 | 0;
 i13 = i11 | 0;
 i14 = 0;
 i15 = i7;
 L8 : while (1) {
  HEAP32[i9 >> 2] = 0;
  if (i15 >>> 0 <= i14 >>> 0) {
   i16 = 7;
   break;
  }
  i7 = __ZNK7WebCore9DOMWindow14sessionStorageERi(HEAP32[(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + (i14 << 2) >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0, i9) | 0;
  do {
   if ((HEAP32[i9 >> 2] | 0) == 0) {
    if ((HEAP32[i1 >> 2] | 0) >>> 0 <= i14 >>> 0) {
     i16 = 10;
     break L8;
    }
    i17 = HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + (i14 << 2) >> 2] | 0) + 456 >> 2] | 0;
    __ZN7WebCore12StorageEvent6createERKN3WTF12AtomicStringERKNS1_6StringES7_S7_S7_PNS_7StorageE(i11, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 336 | 0, i3, i4, i5, i6, i7);
    i18 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i2 >> 2] = i18;
    __ZN7WebCore8Document18enqueueWindowEventEN3WTF10PassRefPtrINS_5EventEEE(i17, i10);
    i17 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i18 = i17 + 8 | 0;
      i19 = i18 | 0;
      i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
      if ((i20 | 0) != 0) {
       HEAP32[i19 >> 2] = i20;
       break;
      }
      i20 = i18 - 8 | 0;
      if ((i20 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
     }
    } while (0);
    i17 = HEAP32[i13 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break;
    }
    i20 = i17 + 8 | 0;
    i18 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
    if ((i18 | 0) == 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 1](i17);
     break;
    } else {
     HEAP32[i20 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i7 = i14 + 1 | 0;
  i18 = HEAP32[i1 >> 2] | 0;
  if (i7 >>> 0 < i18 >>> 0) {
   i14 = i7;
   i15 = i18;
  } else {
   i16 = 22;
   break;
  }
 }
 if ((i16 | 0) == 22) {
  STACKTOP = i8;
  return;
 } else if ((i16 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 10) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore22StorageEventDispatcher28dispatchSessionStorageEventsERKN3WTF6StringES4_S4_PNS_14SecurityOriginEPNS_5FrameE","__ZN3WTF15CrashOnOverflow10overflowedEv","_memset","_memcpy","__ZN7WebCore22StorageEventDispatcher36dispatchSessionStorageEventsToFramesERNS_4PageERKN3WTF6VectorINS3_6RefPtrINS_5FrameEEELj0ENS3_15CrashOnOverflowEEERKNS3_6StringESE_SE_SE_PNS_14SecurityOriginE","__ZN7WebCore22StorageEventDispatcher34dispatchLocalStorageEventsToFramesERNS_9PageGroupERKN3WTF6VectorINS3_6RefPtrINS_5FrameEEELj0ENS3_15CrashOnOverflowEEERKNS3_6StringESE_SE_SE_PNS_14SecurityOriginE","__ZN7WebCore22StorageEventDispatcher26dispatchLocalStorageEventsERKN3WTF6StringES4_S4_PNS_14SecurityOriginEPNS_5FrameE"]

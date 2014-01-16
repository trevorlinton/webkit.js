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
H_BASE = parentModule["_malloc"](256 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 256;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12EventHandlerC1ERNS_5FrameE;
var __ZN7WebCore12EventHandlerD1Ev;
/* memory initializer */ allocate([82,105,103,104,116,0,0,0,76,101,102,116,0,0,0,0,85,112,0,0,0,0,0,0,68,111,119,110,0,0,0,0,85,43,48,48,48,56,0,0,115,116,114,105,110,103,58,0,102,105,108,101,58,0,0,0,108,105,110,107,0,0,0,0,109,111,118,101,0,0,0,0,99,111,112,121,0,0,0,0,85,43,48,48,48,57,0,0,80,97,115,116,101,71,108,111,98,97,108,83,101,108,101,99,116,105,111,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiifi(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiifi"](index,a1,a2,a3,a4,a5);
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
function invoke_fi(index,a1) {
  try {
    return Module["dynCall_fi"](index,a1);
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
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore12EventHandler13TextDragDelayE=env.__ZN7WebCore12EventHandler13TextDragDelayE|0;
  var __ZN7WebCore9HTMLNames18webkitdropzoneAttrE=env.__ZN7WebCore9HTMLNames18webkitdropzoneAttrE|0;
  var __ZN7WebCore9HTMLNames8frameTagE=env.__ZN7WebCore9HTMLNames8frameTagE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore8SVGNames6useTagE=env.__ZN7WebCore8SVGNames6useTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore21GeneralDragHysteresisE=(H_BASE+152)|0;
  var __ZN7WebCore18TextDragHysteresisE=(H_BASE+168)|0;
  var __ZN7WebCore19ImageDragHysteresisE=(H_BASE+160)|0;
  var __ZN7WebCore18LinkDragHysteresisE=(H_BASE+176)|0;
  var __ZTVN7WebCore5TimerINS_12EventHandlerEEE=(H_BASE+120)|0;
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
  var invoke_iiiifi=env.invoke_iiiifi;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var _fabsf=env._fabsf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12EventHandler21handleMousePressEventERKNS_18PlatformMouseEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i17 = i1 | 0;
 i18 = HEAP32[(HEAP32[i17 >> 2] | 0) + 452 >> 2] | 0;
 i19 = (i18 | 0) != 0;
 if (i19) {
  i20 = i18 + 4 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
 }
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
   i21 = 10;
  } else {
   i20 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[(HEAP32[i17 >> 2] | 0) + 32 >> 2] | 0) | 0;
   if ((i20 | 0) == 0) {
    i21 = 10;
    break;
   }
   if (!(__ZN7WebCore24InspectorInstrumentation20handleMousePressImplEPNS_19InstrumentingAgentsE(i20) | 0)) {
    i21 = 10;
    break;
   }
   HEAP32[i1 + 252 >> 2] = 0;
   i20 = i1 + 256 | 0;
   i22 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   if ((i22 | 0) == 0) {
    i23 = 1;
    break;
   }
   i20 = i22 + 8 | 0;
   i22 = i20 | 0;
   i24 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   HEAP32[i22 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    i23 = 1;
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    i23 = 1;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   i23 = 1;
  }
 } while (0);
 if ((i21 | 0) == 10) {
  __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i5, 0);
  __ZN7WebCore11FrameLoader37resetMultipleFormSubmissionProtectionEv((HEAP32[i17 >> 2] | 0) + 80 | 0);
  __ZN7WebCore9TimerBase4stopEv(i1 + 152 | 0);
  i20 = i1 + 4 | 0;
  HEAP8[i20] = 1;
  i24 = i1 + 5 | 0;
  HEAP8[i24] = 1;
  HEAP8[i1 + 280 | 0] = 0;
  i22 = i2 + 16 | 0;
  i25 = i22;
  i26 = i1 + 284 | 0;
  i27 = HEAP32[i25 + 4 >> 2] | 0;
  HEAP32[i26 >> 2] = HEAP32[i25 >> 2];
  HEAP32[i26 + 4 >> 2] = i27;
  i27 = i2 + 24 | 0;
  i26 = i1 + 292 | 0;
  i28 = HEAP32[i27 + 4 >> 2] | 0;
  HEAP32[i26 >> 2] = HEAP32[i27 >> 2];
  HEAP32[i26 + 4 >> 2] = i28;
  HEAPF64[i1 + 312 >> 3] = +HEAPF64[i2 + 8 >> 3];
  HEAP8[i1 + 13 | 0] = 0;
  HEAP8[i1 + 12 | 0] = 0;
  HEAP8[i1 + 148 | 0] = 0;
  i28 = HEAP32[(HEAP32[i17 >> 2] | 0) + 452 >> 2] | 0;
  do {
   if ((i28 | 0) == 0) {
    HEAP32[i1 + 252 >> 2] = 0;
    i26 = i1 + 256 | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    HEAP32[i26 >> 2] = 0;
    if ((i27 | 0) == 0) {
     i29 = 0;
     break;
    }
    i26 = i27 + 8 | 0;
    i27 = i26 | 0;
    i30 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
    HEAP32[i27 >> 2] = i30;
    if ((i30 | 0) >= 1) {
     i29 = 0;
     break;
    }
    if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
     i29 = 0;
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
    i29 = 0;
   } else {
    __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i7, i28 | 0, i22);
    i26 = i1 + 300 | 0;
    i30 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i26 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i26 + 4 >> 2] = i30;
    HEAP8[i1 + 149 | 0] = 0;
    HEAP32[i8 >> 2] = 260;
    i30 = HEAP32[i17 >> 2] | 0;
    i26 = HEAP32[i30 + 452 >> 2] | 0;
    i27 = i4;
    if ((i26 | 0) == 0) {
     i31 = HEAP32[i25 >> 2] | 0;
     i32 = HEAP32[i25 + 4 >> 2] | 0;
     HEAP32[i4 >> 2] = i31;
     HEAP32[i4 + 4 >> 2] = i32;
     i33 = i31;
     i34 = i32;
     i35 = i30;
    } else {
     __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i27, i26 | 0, i22);
     i33 = HEAP32[i4 >> 2] | 0;
     i34 = HEAP32[i27 + 4 >> 2] | 0;
     i35 = HEAP32[i17 >> 2] | 0;
    }
    HEAP32[i9 >> 2] = i33;
    HEAP32[i9 + 4 >> 2] = i34;
    __ZN7WebCore8Document17prepareMouseEventERKNS_14HitTestRequestERKNS_11LayoutPointERKNS_18PlatformMouseEventE(i10, HEAP32[i35 + 456 >> 2] | 0, i8, i9, i2);
    i27 = i10 + 48 | 0;
    L19 : do {
     if ((__ZNK7WebCore13HitTestResult10targetNodeEv(i27) | 0) == 0) {
      HEAP32[i1 + 252 >> 2] = 0;
      i26 = i1 + 256 | 0;
      i30 = HEAP32[i26 >> 2] | 0;
      HEAP32[i26 >> 2] = 0;
      if ((i30 | 0) == 0) {
       i36 = 0;
       break;
      }
      i26 = i30 + 8 | 0;
      i30 = i26 | 0;
      i32 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
      HEAP32[i30 >> 2] = i32;
      if ((i32 | 0) >= 1) {
       i36 = 0;
       break;
      }
      if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
       i36 = 0;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
      i36 = 0;
     } else {
      i26 = __ZNK7WebCore13HitTestResult10targetNodeEv(i27) | 0;
      if ((i26 | 0) != 0) {
       i32 = i26 + 8 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      }
      i32 = i1 + 8 | 0;
      i30 = HEAP32[i32 >> 2] | 0;
      HEAP32[i32 >> 2] = i26;
      do {
       if ((i30 | 0) != 0) {
        i26 = i30 + 8 | 0;
        i32 = i26 | 0;
        i31 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
        HEAP32[i32 >> 2] = i31;
        if ((i31 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
       }
      } while (0);
      do {
       if ((HEAP8[i10 + 152 | 0] & 1) == 0) {
        i37 = 1;
        i38 = 0;
        i21 = 52;
       } else {
        i30 = __ZNK7WebCore13HitTestResult10targetNodeEv(i27) | 0;
        if ((i30 | 0) == 0) {
         i37 = 1;
         i38 = 0;
         i21 = 52;
         break;
        }
        i26 = i30 + 32 | 0;
        if ((HEAP32[i30 + 12 >> 2] & 2048 | 0) == 0) {
         i39 = i26 | 0;
        } else {
         i39 = HEAP32[i26 >> 2] | 0;
        }
        i26 = HEAP32[i39 >> 2] | 0;
        if ((i26 | 0) == 0) {
         i37 = 1;
         i38 = 0;
         i21 = 52;
         break;
        }
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 228 >> 2] & 1](i26) | 0)) {
         i37 = 1;
         i38 = 0;
         i21 = 52;
         break;
        }
        i30 = HEAP32[i26 + 108 >> 2] | 0;
        if ((i30 | 0) == 0) {
         i37 = 1;
         i38 = 0;
         i21 = 52;
         break;
        }
        if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 36 >> 2] & 1](i30) | 0)) {
         i37 = 1;
         i38 = 0;
         i21 = 52;
         break;
        }
        i26 = HEAP32[i30 + 216 >> 2] | 0;
        if ((i26 | 0) == 0) {
         i37 = 1;
         i38 = 0;
         i21 = 52;
         break;
        }
        i30 = i26 + 4 | 0;
        HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
        if (!(__ZN7WebCore12EventHandler29passMousePressEventToSubframeERNS_28MouseEventWithHitTestResultsEPNS_5FrameE(i1, i10, i26) | 0)) {
         i37 = 0;
         i38 = i26;
         i21 = 52;
         break;
        }
        i30 = HEAP8[(HEAP32[i26 + 472 >> 2] | 0) + 5 | 0] & 1;
        HEAP8[i24] = i30;
        if ((i30 & HEAP8[i20]) << 24 >> 24 != 0) {
         i30 = HEAP32[i26 + 448 >> 2] | 0;
         if ((i30 | 0) != 0) {
          i31 = i30 + 8 | 0;
          HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
         }
         i31 = i1 + 224 | 0;
         i32 = HEAP32[i31 >> 2] | 0;
         HEAP32[i31 >> 2] = i30;
         do {
          if ((i32 | 0) != 0) {
           i30 = i32 + 8 | 0;
           i31 = i30 | 0;
           i40 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
           HEAP32[i31 >> 2] = i40;
           if ((i40 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i30 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i30 - 8 | 0);
          }
         } while (0);
         HEAP8[i1 + 228 | 0] = 1;
        }
        HEAP32[i1 + 252 >> 2] = 0;
        i32 = i1 + 256 | 0;
        i30 = HEAP32[i32 >> 2] | 0;
        HEAP32[i32 >> 2] = 0;
        if ((i30 | 0) == 0) {
         i41 = i26;
         i42 = 1;
         break;
        }
        i32 = i30 + 8 | 0;
        i30 = i32 | 0;
        i40 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
        HEAP32[i30 >> 2] = i40;
        if ((i40 | 0) >= 1) {
         i41 = i26;
         i42 = 1;
         break;
        }
        if ((HEAP32[i32 + 8 >> 2] | 0) != 0) {
         i41 = i26;
         i42 = 1;
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i32 - 8 | 0);
        i41 = i26;
        i42 = 1;
       }
      } while (0);
      L56 : do {
       if ((i21 | 0) == 52) {
        i32 = i1 + 252 | 0;
        HEAP32[i32 >> 2] = HEAP32[i2 + 36 >> 2];
        i40 = __ZNK7WebCore13HitTestResult10targetNodeEv(i27) | 0;
        if ((i40 | 0) != 0) {
         i30 = i40 + 8 | 0;
         HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
        }
        i30 = i1 + 256 | 0;
        i31 = HEAP32[i30 >> 2] | 0;
        HEAP32[i30 >> 2] = i40;
        if ((i31 | 0) == 0) {
         i43 = i40;
        } else {
         i40 = i31 + 8 | 0;
         i31 = i40 - 8 | 0;
         i44 = i40 | 0;
         i45 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
         HEAP32[i44 >> 2] = i45;
         do {
          if ((i45 | 0) < 1) {
           if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i31);
          }
         } while (0);
         i43 = HEAP32[i30 >> 2] | 0;
        }
        if ((i43 | 0) == 0) {
         HEAP32[i32 >> 2] = 0;
         HEAP32[i30 >> 2] = 0;
         if (i37) {
          i36 = 0;
          break L19;
         } else {
          i41 = i38;
          i42 = 0;
          break;
         }
        }
        i31 = HEAP32[(HEAP32[i17 >> 2] | 0) + 452 >> 2] | 0;
        do {
         if ((i31 | 0) == 0) {
          i21 = 76;
         } else {
          i40 = (HEAP32[i43 + 12 >> 2] & 2048 | 0) == 0;
          i45 = i43 + 32 | 0;
          if (i40) {
           i46 = i45 | 0;
          } else {
           i46 = HEAP32[i45 >> 2] | 0;
          }
          if ((HEAP32[i46 >> 2] | 0) == 0) {
           __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i11, i31 | 0, i22);
           i21 = 76;
           break;
          }
          if (i40) {
           i47 = i45 | 0;
          } else {
           i47 = HEAP32[i45 >> 2] | 0;
          }
          i45 = __ZNK7WebCore12RenderObject14enclosingLayerEv(HEAP32[i47 >> 2] | 0) | 0;
          __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i11, i31 | 0, i22);
          if ((i45 | 0) == 0) {
           i21 = 76;
           break;
          }
          if (!(__ZNK7WebCore11RenderLayer22isPointInResizeControlERKNS_8IntPointE(i45, i11) | 0)) {
           i21 = 76;
           break;
          }
          i40 = i45 + 20 | 0;
          HEAP8[i40] = HEAP8[i40] | 1;
          HEAP32[i1 + 220 >> 2] = i45;
          __ZNK7WebCore11RenderLayer22offsetFromResizeCornerERKNS_8IntPointE(i12, i45, i11);
          i45 = i1 + 272 | 0;
          i40 = HEAP32[i12 + 4 >> 2] | 0;
          HEAP32[i45 >> 2] = HEAP32[i12 >> 2];
          HEAP32[i45 + 4 >> 2] = i40;
          HEAP32[i32 >> 2] = 0;
          i40 = HEAP32[i30 >> 2] | 0;
          HEAP32[i30 >> 2] = 0;
          if ((i40 | 0) == 0) {
           i48 = 1;
           break;
          }
          i45 = i40 + 8 | 0;
          i40 = i45 | 0;
          i26 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
          HEAP32[i40 >> 2] = i26;
          if ((i26 | 0) >= 1) {
           i48 = 1;
           break;
          }
          if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
           i48 = 1;
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
          if (i37) {
           i36 = 1;
           break L19;
          } else {
           i41 = i38;
           i42 = 1;
           break L56;
          }
         }
        } while (0);
        L89 : do {
         if ((i21 | 0) == 76) {
          i30 = (HEAP32[(HEAP32[i17 >> 2] | 0) + 468 >> 2] | 0) + 192 | 0;
          HEAP8[i30] = HEAP8[i30] | 4;
          i30 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 232 | 0;
          i31 = __ZNK7WebCore13HitTestResult10targetNodeEv(i27) | 0;
          i45 = __ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb(i1, i30, i31, 0, HEAP32[i32 >> 2] | 0, i2, 1) | 0;
          i31 = i45 ^ 1;
          i30 = HEAP32[i10 + 148 >> 2] | 0;
          if (i45) {
           i49 = 1;
          } else {
           i49 = (i30 | 0) != 0 | 0;
          }
          HEAP8[i24] = i49;
          i26 = i10 + 148 | 0;
          do {
           if ((i30 | 0) != 0) {
            i40 = i1 + 244 | 0;
            i44 = (i30 | 0) == (HEAP32[i40 >> 2] | 0);
            HEAP32[i13 >> 2] = 262;
            __ZN7WebCore8Document17prepareMouseEventERKNS_14HitTestRequestERKNS_11LayoutPointERKNS_18PlatformMouseEventE(i14, HEAP32[(HEAP32[i17 >> 2] | 0) + 456 >> 2] | 0, i13, i9, i2);
            i50 = i10;
            i51 = i14;
            HEAP32[i50 >> 2] = HEAP32[i51 >> 2];
            HEAP32[i50 + 4 >> 2] = HEAP32[i51 + 4 >> 2];
            HEAP32[i50 + 8 >> 2] = HEAP32[i51 + 8 >> 2];
            HEAP32[i50 + 12 >> 2] = HEAP32[i51 + 12 >> 2];
            HEAP32[i50 + 16 >> 2] = HEAP32[i51 + 16 >> 2];
            HEAP32[i50 + 20 >> 2] = HEAP32[i51 + 20 >> 2];
            HEAP32[i50 + 24 >> 2] = HEAP32[i51 + 24 >> 2];
            HEAP32[i50 + 28 >> 2] = HEAP32[i51 + 28 >> 2];
            HEAP32[i50 + 32 >> 2] = HEAP32[i51 + 32 >> 2];
            HEAP32[i50 + 36 >> 2] = HEAP32[i51 + 36 >> 2];
            HEAP32[i50 + 40 >> 2] = HEAP32[i51 + 40 >> 2];
            i51 = i14 + 48 | 0;
            __ZN7WebCore13HitTestResultaSERKS0_(i27, i51) | 0;
            __ZN7WebCore13HitTestResultD1Ev(i51);
            if (!i44) {
             break;
            }
            i44 = HEAP32[i40 >> 2] | 0;
            if ((HEAP32[i26 >> 2] | 0) == (i44 | 0)) {
             break;
            }
            HEAP32[i40 >> 2] = 0;
            if ((i44 | 0) == 0) {
             break;
            }
            i40 = i44 + 4 | 0;
            i44 = i40 | 0;
            i51 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
            if ((i51 | 0) != 0) {
             HEAP32[i44 >> 2] = i51;
             break;
            }
            i51 = i40 - 4 | 0;
            if ((i51 | 0) == 0) {
             break;
            }
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 15](i51);
           }
          } while (0);
          if (!i45) {
           i30 = HEAP32[i26 >> 2] | 0;
           i51 = i1 + 244 | 0;
           i40 = HEAP32[i51 >> 2] | 0;
           do {
            if ((i40 | 0) != (i30 | 0)) {
             if ((i40 | 0) != 0) {
              __ZN7WebCore9Scrollbar11mouseExitedEv(i40) | 0;
             }
             if ((i30 | 0) != 0) {
              __ZN7WebCore9Scrollbar12mouseEnteredEv(i30);
              i44 = i30 + 4 | 0;
              HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
             }
             i44 = HEAP32[i51 >> 2] | 0;
             HEAP32[i51 >> 2] = i30;
             if ((i44 | 0) == 0) {
              break;
             }
             i50 = i44 + 4 | 0;
             i44 = i50 | 0;
             i52 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
             if ((i52 | 0) != 0) {
              HEAP32[i44 >> 2] = i52;
              break;
             }
             i52 = i50 - 4 | 0;
             if ((i52 | 0) == 0) {
              break;
             }
             FUNCTION_TABLE_vi[HEAP32[(HEAP32[i52 >> 2] | 0) + 4 >> 2] & 15](i52);
            }
           } while (0);
           if ((i30 | 0) == 0) {
            i48 = i31;
            break;
           }
           if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 204 >> 2] & 1](i30) | 0)) {
            i48 = i31;
            break;
           }
           i51 = HEAP32[(HEAP32[i17 >> 2] | 0) + 452 >> 2] | 0;
           if ((i51 | 0) != 0) {
            __ZN7WebCore9FrameView20setWasScrolledByUserEb(i51, 1);
           }
           __ZN7WebCore9Scrollbar9mouseDownERKNS_18PlatformMouseEventE(i30, i10 | 0) | 0;
           if (i37) {
            i36 = i31;
            break L19;
           } else {
            i41 = i38;
            i42 = i31;
            break L56;
           }
          }
          i51 = __ZNK7WebCore13HitTestResult10targetNodeEv(i27) | 0;
          do {
           if ((HEAP32[i51 + 12 >> 2] & 4096 | 0) != 0) {
            if ((HEAP32[(HEAP32[i51 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i51 | 0)) {
             break;
            }
            i40 = HEAP32[(__ZNK7WebCore13HitTestResult10targetNodeEv(i27) | 0) + 92 >> 2] | 0;
            if ((HEAP32[i40 + 12 >> 2] & 16 | 0) == 0) {
             break;
            }
            if ((HEAP32[(HEAP32[i40 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
             break;
            }
            HEAP32[i15 >> 2] = 262;
            __ZN7WebCore8Document17prepareMouseEventERKNS_14HitTestRequestERKNS_11LayoutPointERKNS_18PlatformMouseEventE(i16, HEAP32[(HEAP32[i17 >> 2] | 0) + 456 >> 2] | 0, i15, i9, i2);
            i40 = i10;
            i45 = i16;
            HEAP32[i40 >> 2] = HEAP32[i45 >> 2];
            HEAP32[i40 + 4 >> 2] = HEAP32[i45 + 4 >> 2];
            HEAP32[i40 + 8 >> 2] = HEAP32[i45 + 8 >> 2];
            HEAP32[i40 + 12 >> 2] = HEAP32[i45 + 12 >> 2];
            HEAP32[i40 + 16 >> 2] = HEAP32[i45 + 16 >> 2];
            HEAP32[i40 + 20 >> 2] = HEAP32[i45 + 20 >> 2];
            HEAP32[i40 + 24 >> 2] = HEAP32[i45 + 24 >> 2];
            HEAP32[i40 + 28 >> 2] = HEAP32[i45 + 28 >> 2];
            HEAP32[i40 + 32 >> 2] = HEAP32[i45 + 32 >> 2];
            HEAP32[i40 + 36 >> 2] = HEAP32[i45 + 36 >> 2];
            HEAP32[i40 + 40 >> 2] = HEAP32[i45 + 40 >> 2];
            i45 = i16 + 48 | 0;
            __ZN7WebCore13HitTestResultaSERKS0_(i27, i45) | 0;
            __ZN7WebCore13HitTestResultD1Ev(i45);
           }
          } while (0);
          i51 = HEAP32[(HEAP32[i17 >> 2] | 0) + 452 >> 2] | 0;
          if ((i51 | 0) == 0) {
           i21 = 109;
          } else {
           i31 = __ZN7WebCore10ScrollView16scrollbarAtPointERKNS_8IntPointE(i51 | 0, i22) | 0;
           if ((i31 | 0) == 0) {
            i21 = 109;
           } else {
            i53 = i31;
           }
          }
          if ((i21 | 0) == 109) {
           i53 = HEAP32[i26 >> 2] | 0;
          }
          i31 = i1 + 244 | 0;
          i51 = HEAP32[i31 >> 2] | 0;
          do {
           if ((i51 | 0) != (i53 | 0)) {
            if ((i51 | 0) != 0) {
             __ZN7WebCore9Scrollbar11mouseExitedEv(i51) | 0;
            }
            if ((i53 | 0) != 0) {
             __ZN7WebCore9Scrollbar12mouseEnteredEv(i53);
             i30 = i53 + 4 | 0;
             HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
            }
            i30 = HEAP32[i31 >> 2] | 0;
            HEAP32[i31 >> 2] = i53;
            if ((i30 | 0) == 0) {
             break;
            }
            i45 = i30 + 4 | 0;
            i30 = i45 | 0;
            i40 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
            if ((i40 | 0) != 0) {
             HEAP32[i30 >> 2] = i40;
             break;
            }
            i40 = i45 - 4 | 0;
            if ((i40 | 0) == 0) {
             break;
            }
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] & 15](i40);
           }
          } while (0);
          do {
           if ((i53 | 0) != 0) {
            if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i53 >> 2] | 0) + 204 >> 2] & 1](i53) | 0)) {
             break;
            }
            i31 = HEAP32[(HEAP32[i17 >> 2] | 0) + 452 >> 2] | 0;
            if ((i31 | 0) != 0) {
             __ZN7WebCore9FrameView20setWasScrolledByUserEb(i31, 1);
            }
            if (__ZN7WebCore9Scrollbar9mouseDownERKNS_18PlatformMouseEventE(i53, i10 | 0) | 0) {
             i48 = 1;
             break L89;
            }
           }
          } while (0);
          i31 = __ZN7WebCore12EventHandler21handleMousePressEventERKNS_28MouseEventWithHitTestResultsE(i1, i10) | 0;
          if (i37) {
           i36 = i31;
           break L19;
          } else {
           i41 = i38;
           i42 = i31;
           break L56;
          }
         }
        } while (0);
        if (i37) {
         i36 = i48;
         break L19;
        } else {
         i41 = i38;
         i42 = i48;
        }
       }
      } while (0);
      i32 = i41 + 4 | 0;
      i31 = i32 | 0;
      i51 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
      if ((i51 | 0) != 0) {
       HEAP32[i31 >> 2] = i51;
       i36 = i42;
       break;
      }
      i51 = i32 - 4 | 0;
      if ((i51 | 0) == 0) {
       i36 = i42;
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 15](i51);
      i36 = i42;
     }
    } while (0);
    __ZN7WebCore13HitTestResultD1Ev(i27);
    i29 = i36;
   }
  } while (0);
  __ZN7WebCore20UserGestureIndicatorD1Ev(i5);
  i23 = i29;
 }
 if (!i19) {
  STACKTOP = i3;
  return i23 | 0;
 }
 i19 = i18 + 4 | 0;
 i18 = i19 | 0;
 i29 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
 if ((i29 | 0) != 0) {
  HEAP32[i18 >> 2] = i29;
  STACKTOP = i3;
  return i23 | 0;
 }
 i29 = i19 - 4 | 0;
 if ((i29 | 0) == 0) {
  STACKTOP = i3;
  return i23 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 15](i29);
 STACKTOP = i3;
 return i23 | 0;
}
function __ZN7WebCore12EventHandler27updateSelectionForMouseDragERKNS_13HitTestResultE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, d48 = +0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 448 | 0;
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
 i16 = i3 + 160 | 0;
 i17 = i3 + 224 | 0;
 i18 = i3 + 240 | 0;
 i19 = i3 + 256 | 0;
 i20 = i3 + 272 | 0;
 i21 = i3 + 288 | 0;
 i22 = i3 + 304 | 0;
 i23 = i3 + 320 | 0;
 i24 = i3 + 336 | 0;
 i25 = i3 + 352 | 0;
 i26 = i3 + 368 | 0;
 i27 = i3 + 384 | 0;
 i28 = i3 + 400 | 0;
 i29 = i3 + 416 | 0;
 i30 = i3 + 432 | 0;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 i31 = __ZNK7WebCore13HitTestResult10targetNodeEv(i2) | 0;
 if ((i31 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i32 = i1 | 0;
 i33 = (HEAP32[(HEAP32[i32 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0;
 i34 = i2 + 88 | 0;
 i2 = i10;
 i35 = i34;
 i36 = HEAP32[i35 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i35 >> 2];
 HEAP32[i10 + 4 >> 2] = i36;
 i36 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv(i33) | 0;
 i33 = i31 + 12 | 0;
 i35 = i31 + 32 | 0;
 if ((HEAP32[i33 >> 2] & 2048 | 0) == 0) {
  i37 = i35 | 0;
 } else {
  i37 = HEAP32[i35 >> 2] | 0;
 }
 L11 : do {
  if ((HEAP32[i37 >> 2] | 0) == 0) {
   _memset(i14 | 0, 0, 12) | 0;
   HEAP32[i14 + 12 >> 2] = 1;
   i38 = 1;
  } else {
   do {
    if ((i36 | 0) == 0) {
     i39 = i31;
    } else {
     i40 = i36 | 0;
     if (__ZNK7WebCore4Node8containsEPKS0_(i40, i31) | 0) {
      i39 = i31;
      break;
     }
     i41 = i36 + 12 | 0;
     i42 = i36 + 32 | 0;
     if ((HEAP32[i41 >> 2] & 2048 | 0) == 0) {
      i43 = i42 | 0;
     } else {
      i43 = HEAP32[i42 >> 2] | 0;
     }
     if ((HEAP32[i43 >> 2] | 0) == 0) {
      HEAP32[i14 >> 2] = 0;
      HEAP32[i14 + 4 >> 2] = 0;
      i44 = i14 + 8 | 0;
      i45 = i44;
      i46 = HEAP32[i45 >> 2] | 0;
      HEAP32[i45 >> 2] = i46 & -8;
      HEAP8[i44] = i46 & 255 & -16;
      HEAP32[i14 + 12 >> 2] = 1;
      i38 = 1;
      break L11;
     }
     if ((HEAP32[i33 >> 2] & 2048 | 0) == 0) {
      i47 = i35 | 0;
     } else {
      i47 = HEAP32[i35 >> 2] | 0;
     }
     i46 = HEAP32[i47 >> 2] | 0;
     d48 = +(HEAP32[i2 + 4 >> 2] | 0);
     HEAPF32[i12 >> 2] = +(HEAP32[i10 >> 2] | 0);
     HEAPF32[i12 + 4 >> 2] = d48;
     __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i11, i46, i12, 0);
     if ((HEAP32[i41 >> 2] & 2048 | 0) == 0) {
      i49 = i42 | 0;
     } else {
      i49 = HEAP32[i42 >> 2] | 0;
     }
     __ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj(i13, HEAP32[i49 >> 2] | 0, i11, 0);
     d48 = +_round(+(+HEAPF32[i13 >> 2]));
     do {
      if (d48 < +2147483647) {
       if (d48 <= +-2147483648) {
        i50 = 0;
        i51 = -2147483648;
        break;
       }
       i50 = 0;
       i51 = ~~d48;
      } else {
       i50 = 0;
       i51 = 2147483647;
      }
     } while (0);
     d48 = +_round(+(+HEAPF32[i13 + 4 >> 2]));
     do {
      if (d48 < +2147483647) {
       if (d48 <= +-2147483648) {
        i52 = -2147483648;
        i53 = 0;
        break;
       }
       i52 = ~~d48;
       i53 = 0;
      } else {
       i52 = 2147483647;
       i53 = 0;
      }
     } while (0);
     HEAP32[i10 >> 2] = i53 | i51;
     HEAP32[i10 + 4 >> 2] = i52 | i50;
     i39 = i40;
    }
   } while (0);
   i42 = i39 + 32 | 0;
   if ((HEAP32[i39 + 12 >> 2] & 2048 | 0) == 0) {
    i54 = i42 | 0;
   } else {
    i54 = HEAP32[i42 >> 2] | 0;
   }
   i42 = HEAP32[i54 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i42 >> 2] | 0) + 464 >> 2] & 1](i14, i42, i2);
   i38 = (HEAP32[i14 >> 2] | 0) == 0;
  }
 } while (0);
 i2 = i14 | 0;
 if (i38) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i15, (HEAP32[(HEAP32[i32 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 i38 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i38 | 0) == 0) {
   i55 = 46;
  } else {
   i54 = HEAP32[i38 + 8 >> 2] | 0;
   i39 = i38 + 8 | 0;
   i50 = i39 - 8 | 0;
   HEAP32[i39 >> 2] = i54;
   do {
    if ((i54 | 0) < 1) {
     if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i50);
    }
   } while (0);
   i50 = i38 + 32 | 0;
   if ((HEAP32[i38 + 12 >> 2] & 2048 | 0) == 0) {
    i56 = i50 | 0;
   } else {
    i56 = HEAP32[i50 >> 2] | 0;
   }
   i50 = HEAP32[i56 >> 2] | 0;
   if ((i50 | 0) == 0) {
    i55 = 46;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i50 >> 2] | 0) + 356 >> 2] & 1](i50) | 0)) {
    i55 = 46;
    break;
   }
   if ((HEAP32[i33 >> 2] & 2048 | 0) == 0) {
    i57 = i35 | 0;
   } else {
    i57 = HEAP32[i35 >> 2] | 0;
   }
   i39 = __ZNK7WebCore12RenderObject15containingBlockEv(HEAP32[i57 >> 2] | 0) | 0;
   if ((i39 | 0) == (__ZNK7WebCore12RenderObject15containingBlockEv(i50) | 0)) {
    i55 = 46;
   }
  }
 } while (0);
 L65 : do {
  if ((i55 | 0) == 46) {
   i57 = i1 + 16 | 0;
   i56 = HEAP32[i57 >> 2] | 0;
   if ((i56 | 0) == 0) {
    if ((HEAP32[i33 >> 2] & 2048 | 0) == 0) {
     i58 = i35 | 0;
    } else {
     i58 = HEAP32[i35 >> 2] | 0;
    }
    L73 : do {
     if ((HEAP32[i58 >> 2] | 0) != 0) {
      i38 = HEAP32[(HEAP32[i31 >> 2] | 0) + 32 >> 2] | 0;
      i50 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 328 | 0;
      i39 = __ZN3WTF10fastMallocEj(56) | 0;
      __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i39, i50, 1, 1);
      i50 = i9 | 0;
      HEAP32[i50 >> 2] = i39;
      i39 = FUNCTION_TABLE_iii[i38 & 1](i31, i9) | 0;
      i38 = HEAP32[i50 >> 2] | 0;
      do {
       if ((i38 | 0) != 0) {
        i50 = i38 + 8 | 0;
        i54 = i50 | 0;
        i52 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
        if ((i52 | 0) != 0) {
         HEAP32[i54 >> 2] = i52;
         if (i39) {
          break L73;
         } else {
          break L65;
         }
        }
        i52 = i50 - 8 | 0;
        if ((i52 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i52 >> 2] | 0) + 4 >> 2] & 15](i52);
        if (i39) {
         break L73;
        } else {
         break L65;
        }
       }
      } while (0);
      if (!i39) {
       break L65;
      }
     }
    } while (0);
    i59 = HEAP32[i57 >> 2] | 0;
   } else {
    i59 = i56;
   }
   if ((i59 | 0) != 2) {
    HEAP32[i57 >> 2] = 2;
    __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i16, i14, 0);
    __ZN7WebCore16VisibleSelectionaSEOS0_(i15, i16) | 0;
    __ZN7WebCore16VisibleSelectionD2Ev(i16);
   }
   i38 = i1 + 8 | 0;
   i40 = __ZN7WebCore8Position24rootUserSelectAllForNodeEPNS_4NodeE(HEAP32[i38 >> 2] | 0) | 0;
   L87 : do {
    if ((i40 | 0) == 0) {
     i55 = 113;
    } else {
     if ((i40 | 0) == (__ZN7WebCore8Position24rootUserSelectAllForNodeEPNS_4NodeE(i31) | 0)) {
      i52 = i8 | 0;
      HEAP32[i52 >> 2] = i40;
      i50 = i40 + 8 | 0;
      HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i18, i8, 1);
      i54 = HEAP32[i52 >> 2] | 0;
      do {
       if ((i54 | 0) != 0) {
        i52 = i54 + 8 | 0;
        i10 = i52 | 0;
        i51 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
        HEAP32[i10 >> 2] = i51;
        if ((i51 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
       }
      } while (0);
      __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i17, i18, 0);
      __ZN7WebCore16VisibleSelection7setBaseERKNS_8PositionE(i15, i17);
      i54 = HEAP32[i17 >> 2] | 0;
      do {
       if ((i54 | 0) != 0) {
        i39 = i54 + 8 | 0;
        i52 = i39 | 0;
        i51 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
        HEAP32[i52 >> 2] = i51;
        if ((i51 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
       }
      } while (0);
      i54 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i54 | 0) != 0) {
        i39 = i54 + 8 | 0;
        i51 = i39 | 0;
        i52 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
        HEAP32[i51 >> 2] = i52;
        if ((i52 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
       }
      } while (0);
      i54 = i7 | 0;
      HEAP32[i54 >> 2] = i40;
      HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
      __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i20, i7, 2);
      i39 = HEAP32[i54 >> 2] | 0;
      do {
       if ((i39 | 0) != 0) {
        i54 = i39 + 8 | 0;
        i52 = i54 | 0;
        i51 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
        HEAP32[i52 >> 2] = i51;
        if ((i51 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i54 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i54 - 8 | 0);
       }
      } while (0);
      __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i19, i20, 0);
      __ZN7WebCore16VisibleSelection9setExtentERKNS_8PositionE(i15, i19);
      i39 = HEAP32[i19 >> 2] | 0;
      do {
       if ((i39 | 0) != 0) {
        i50 = i39 + 8 | 0;
        i54 = i50 | 0;
        i51 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
        HEAP32[i54 >> 2] = i51;
        if ((i51 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
       }
      } while (0);
      i39 = HEAP32[i20 >> 2] | 0;
      if ((i39 | 0) == 0) {
       break;
      }
      i50 = i39 + 8 | 0;
      i39 = i50 | 0;
      i51 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
      HEAP32[i39 >> 2] = i51;
      if ((i51 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
      break;
     }
     if ((HEAP32[i33 >> 2] & 2048 | 0) == 0) {
      i60 = i35 | 0;
     } else {
      i60 = HEAP32[i35 >> 2] | 0;
     }
     i50 = HEAP32[i60 >> 2] | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i50 >> 2] | 0) + 464 >> 2] & 1](i21, i50, i34);
     i50 = HEAP32[i38 >> 2] | 0;
     i51 = i50 + 32 | 0;
     if ((HEAP32[i50 + 12 >> 2] & 2048 | 0) == 0) {
      i61 = i51 | 0;
     } else {
      i61 = HEAP32[i51 >> 2] | 0;
     }
     i51 = HEAP32[i61 >> 2] | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i51 >> 2] | 0) + 464 >> 2] & 1](i22, i51, i1 + 20 | 0);
     i51 = (__ZN7WebCore16comparePositionsERKNS_15VisiblePositionES2_(i21, i22) | 0) < 0;
     i50 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i50 | 0) != 0) {
       i39 = i50 + 8 | 0;
       i54 = i39 | 0;
       i52 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
       HEAP32[i54 >> 2] = i52;
       if ((i52 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
      }
     } while (0);
     i50 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i50 | 0) == 0) {
       i55 = 100;
      } else {
       i39 = i50 + 8 | 0;
       i52 = i39 | 0;
       i54 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
       HEAP32[i52 >> 2] = i54;
       if ((i54 | 0) >= 1) {
        i55 = 100;
        break;
       }
       if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
        i55 = 100;
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
       if (!i51) {
        i55 = 113;
        break L87;
       }
      }
     } while (0);
     if ((i55 | 0) == 100) {
      if (!i51) {
       i55 = 113;
       break;
      }
     }
     i50 = i6 | 0;
     HEAP32[i50 >> 2] = i40;
     i39 = i40 + 8 | 0;
     HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
     __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i24, i6, 2);
     i39 = HEAP32[i50 >> 2] | 0;
     do {
      if ((i39 | 0) != 0) {
       i50 = i39 + 8 | 0;
       i54 = i50 | 0;
       i52 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
       HEAP32[i54 >> 2] = i52;
       if ((i52 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i50 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i50 - 8 | 0);
      }
     } while (0);
     __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i23, i24, 0);
     __ZN7WebCore16VisibleSelection7setBaseERKNS_8PositionE(i15, i23);
     i39 = HEAP32[i23 >> 2] | 0;
     do {
      if ((i39 | 0) != 0) {
       i51 = i39 + 8 | 0;
       i50 = i51 | 0;
       i52 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
       HEAP32[i50 >> 2] = i52;
       if ((i52 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
      }
     } while (0);
     i39 = HEAP32[i24 >> 2] | 0;
     if ((i39 | 0) == 0) {
      i55 = 113;
      break;
     }
     i51 = i39 + 8 | 0;
     i39 = i51 | 0;
     i52 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
     HEAP32[i39 >> 2] = i52;
     if ((i52 | 0) >= 1) {
      i55 = 113;
      break;
     }
     if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
      i55 = 113;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
     i55 = 113;
    }
   } while (0);
   L153 : do {
    if ((i55 | 0) == 113) {
     i40 = __ZN7WebCore8Position24rootUserSelectAllForNodeEPNS_4NodeE(i31) | 0;
     do {
      if ((i40 | 0) != 0) {
       i57 = HEAP32[i38 >> 2] | 0;
       i56 = i57 + 32 | 0;
       if ((HEAP32[i57 + 12 >> 2] & 2048 | 0) == 0) {
        i62 = i56 | 0;
       } else {
        i62 = HEAP32[i56 >> 2] | 0;
       }
       L161 : do {
        if ((HEAP32[i62 >> 2] | 0) != 0) {
         if ((HEAP32[i33 >> 2] & 2048 | 0) == 0) {
          i63 = i35 | 0;
         } else {
          i63 = HEAP32[i35 >> 2] | 0;
         }
         i56 = HEAP32[i63 >> 2] | 0;
         FUNCTION_TABLE_viii[HEAP32[(HEAP32[i56 >> 2] | 0) + 464 >> 2] & 1](i25, i56, i34);
         i56 = HEAP32[i38 >> 2] | 0;
         i57 = i56 + 32 | 0;
         if ((HEAP32[i56 + 12 >> 2] & 2048 | 0) == 0) {
          i64 = i57 | 0;
         } else {
          i64 = HEAP32[i57 >> 2] | 0;
         }
         i57 = HEAP32[i64 >> 2] | 0;
         FUNCTION_TABLE_viii[HEAP32[(HEAP32[i57 >> 2] | 0) + 464 >> 2] & 1](i26, i57, i1 + 20 | 0);
         i57 = (__ZN7WebCore16comparePositionsERKNS_15VisiblePositionES2_(i25, i26) | 0) < 0;
         i56 = HEAP32[i26 >> 2] | 0;
         do {
          if ((i56 | 0) != 0) {
           i51 = i56 + 8 | 0;
           i52 = i51 | 0;
           i39 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
           HEAP32[i52 >> 2] = i39;
           if ((i39 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
          }
         } while (0);
         i56 = HEAP32[i25 >> 2] | 0;
         do {
          if ((i56 | 0) == 0) {
           i55 = 132;
          } else {
           i51 = i56 + 8 | 0;
           i39 = i51 | 0;
           i52 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
           HEAP32[i39 >> 2] = i52;
           if ((i52 | 0) >= 1) {
            i55 = 132;
            break;
           }
           if ((HEAP32[i51 + 8 >> 2] | 0) != 0) {
            i55 = 132;
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i51 - 8 | 0);
           if (!i57) {
            break L161;
           }
          }
         } while (0);
         if ((i55 | 0) == 132) {
          if (!i57) {
           break;
          }
         }
         i56 = i4 | 0;
         HEAP32[i56 >> 2] = i40;
         i51 = i40 + 8 | 0;
         HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
         __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i28, i4, 1);
         i51 = HEAP32[i56 >> 2] | 0;
         do {
          if ((i51 | 0) != 0) {
           i56 = i51 + 8 | 0;
           i52 = i56 | 0;
           i39 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
           HEAP32[i52 >> 2] = i39;
           if ((i39 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i56 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i56 - 8 | 0);
          }
         } while (0);
         __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i27, i28, 0);
         __ZN7WebCore16VisibleSelection9setExtentERKNS_8PositionE(i15, i27);
         i51 = HEAP32[i27 >> 2] | 0;
         do {
          if ((i51 | 0) != 0) {
           i57 = i51 + 8 | 0;
           i56 = i57 | 0;
           i39 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
           HEAP32[i56 >> 2] = i39;
           if ((i39 | 0) >= 1) {
            break;
           }
           if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
          }
         } while (0);
         i51 = HEAP32[i28 >> 2] | 0;
         if ((i51 | 0) == 0) {
          break L153;
         }
         i57 = i51 + 8 | 0;
         i51 = i57 | 0;
         i39 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
         HEAP32[i51 >> 2] = i39;
         if ((i39 | 0) >= 1) {
          break L153;
         }
         if ((HEAP32[i57 + 8 >> 2] | 0) != 0) {
          break L153;
         }
         __ZN7WebCore4Node14removedLastRefEv(i57 - 8 | 0);
         break L153;
        }
       } while (0);
       i57 = HEAP32[i38 >> 2] | 0;
       i39 = i57 + 32 | 0;
       if ((HEAP32[i57 + 12 >> 2] & 2048 | 0) == 0) {
        i65 = i39 | 0;
       } else {
        i65 = HEAP32[i39 >> 2] | 0;
       }
       if ((HEAP32[i65 >> 2] | 0) == 0) {
        break;
       }
       i39 = i5 | 0;
       HEAP32[i39 >> 2] = i40;
       i57 = i40 + 8 | 0;
       HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
       __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i30, i5, 2);
       i57 = HEAP32[i39 >> 2] | 0;
       do {
        if ((i57 | 0) != 0) {
         i39 = i57 + 8 | 0;
         i51 = i39 | 0;
         i56 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
         HEAP32[i51 >> 2] = i56;
         if ((i56 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
        }
       } while (0);
       __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i29, i30, 0);
       __ZN7WebCore16VisibleSelection9setExtentERKNS_8PositionE(i15, i29);
       i57 = HEAP32[i29 >> 2] | 0;
       do {
        if ((i57 | 0) != 0) {
         i39 = i57 + 8 | 0;
         i56 = i39 | 0;
         i51 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
         HEAP32[i56 >> 2] = i51;
         if ((i51 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
        }
       } while (0);
       i57 = HEAP32[i30 >> 2] | 0;
       if ((i57 | 0) == 0) {
        break L153;
       }
       i39 = i57 + 8 | 0;
       i57 = i39 | 0;
       i51 = (HEAP32[i57 >> 2] | 0) - 1 | 0;
       HEAP32[i57 >> 2] = i51;
       if ((i51 | 0) >= 1) {
        break L153;
       }
       if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
        break L153;
       }
       __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
       break L153;
      }
     } while (0);
     __ZN7WebCore16VisibleSelection9setExtentERKNS_15VisiblePositionE(i15, i14);
    }
   } while (0);
   i38 = HEAP32[(HEAP32[i32 >> 2] | 0) + 468 >> 2] | 0;
   i40 = HEAP32[i38 + 108 >> 2] | 0;
   if ((i40 | 0) == 0) {
    i66 = i38;
    i67 = 0;
   } else {
    __ZN7WebCore16VisibleSelection22expandUsingGranularityENS_15TextGranularityE(i15, i40) | 0;
    i40 = HEAP32[(HEAP32[i32 >> 2] | 0) + 468 >> 2] | 0;
    i66 = i40;
    i67 = HEAP32[i40 + 108 >> 2] | 0;
   }
   __ZN7WebCore14FrameSelection34setNonDirectionalSelectionIfNeededERKNS_16VisibleSelectionENS_15TextGranularityENS0_23EndPointsAdjustmentModeE(i66, i15, i67, 0);
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionD2Ev(i15);
 i15 = HEAP32[i2 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i15 + 8 | 0;
 i15 = i2 | 0;
 i67 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 HEAP32[i15 >> 2] = i67;
 if ((i67 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12EventHandler32handleMousePressEventSingleClickERKNS_28MouseEventWithHitTestResultsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 56 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i30 = i1 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i30 >> 2] | 0) + 456 >> 2] | 0);
 i31 = __ZNK7WebCore13HitTestResult10targetNodeEv(i2 + 48 | 0) | 0;
 if ((i31 | 0) == 0) {
  i32 = 0;
  STACKTOP = i3;
  return i32 | 0;
 }
 i33 = i31 + 12 | 0;
 i34 = i31 + 32 | 0;
 if ((HEAP32[i33 >> 2] & 2048 | 0) == 0) {
  i35 = i34 | 0;
 } else {
  i35 = HEAP32[i34 >> 2] | 0;
 }
 if ((HEAP32[i35 >> 2] | 0) == 0) {
  i32 = 0;
  STACKTOP = i3;
  return i32 | 0;
 }
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  i32 = 0;
  STACKTOP = i3;
  return i32 | 0;
 }
 i35 = i2 | 0;
 if ((HEAP32[i2 + 4 >> 2] & 8 | 0) == 0) {
  i36 = 0;
 } else {
  i36 = (__ZNK7WebCore28MouseEventWithHitTestResults10isOverLinkEv(i2) | 0) ^ 1;
 }
 i37 = HEAP32[(HEAP32[i30 >> 2] | 0) + 452 >> 2] | 0;
 do {
  if ((i37 | 0) != 0) {
   __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i8, i37 | 0, i2 + 16 | 0);
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   if (i36) {
    break;
   }
   if (!(__ZN7WebCore14FrameSelection8containsERKNS_11LayoutPointE(HEAP32[(HEAP32[i30 >> 2] | 0) + 468 >> 2] | 0, i7) | 0)) {
    break;
   }
   HEAP8[i1 + 15 | 0] = 1;
   i32 = 0;
   STACKTOP = i3;
   return i32 | 0;
  }
 } while (0);
 if ((HEAP32[i33 >> 2] & 2048 | 0) == 0) {
  i38 = i34 | 0;
 } else {
  i38 = HEAP32[i34 >> 2] | 0;
 }
 i34 = HEAP32[i38 >> 2] | 0;
 i38 = HEAP32[(HEAP32[i34 >> 2] | 0) + 464 >> 2] | 0;
 i33 = i2 + 136 | 0;
 i7 = HEAP32[i33 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i33 >> 2];
 HEAP32[i10 + 4 >> 2] = i7;
 FUNCTION_TABLE_viii[i38 & 1](i9, i34, i11);
 i11 = i9 | 0;
 i34 = HEAP32[i11 >> 2] | 0;
 if ((i34 | 0) == 0) {
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 132 >> 2] & 1](i31) | 0) {
    __ZN7WebCore19firstPositionInNodeEPNS_4NodeE(i13, i31);
   } else {
    i38 = i6 | 0;
    HEAP32[i38 >> 2] = i31;
    i7 = i31 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i13, i6, 1);
    i7 = HEAP32[i38 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    i38 = i7 + 8 | 0;
    i7 = i38 | 0;
    i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i10;
    if ((i10 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
   }
  } while (0);
  __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i12, i13, 1);
  i6 = i12 | 0;
  i38 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i10 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = i38;
  do {
   if ((i10 | 0) != 0) {
    i38 = i10 + 8 | 0;
    i7 = i38 | 0;
    i33 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i33;
    if ((i33 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
   }
  } while (0);
  i10 = i9 + 4 | 0;
  HEAP32[i10 >> 2] = HEAP32[i12 + 4 >> 2];
  i38 = HEAP32[i12 + 8 >> 2] | 0;
  i33 = i9 + 8 | 0;
  i7 = i33;
  i8 = HEAP32[i7 >> 2] & -8 | i38 & 7;
  HEAP32[i7 >> 2] = i8;
  HEAP8[i33] = i8 & 255 & -9 | i38 & 8;
  HEAP32[i9 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
  i12 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i6 = i12 + 8 | 0;
    i38 = i6 | 0;
    i8 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
    HEAP32[i38 >> 2] = i8;
    if ((i8 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   }
  } while (0);
  i12 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i13 = i12 + 8 | 0;
    i6 = i13 | 0;
    i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    HEAP32[i6 >> 2] = i8;
    if ((i8 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
   }
  } while (0);
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = i14 | 0;
  HEAP32[i13 >> 2] = i12;
  if ((i12 | 0) == 0) {
   i39 = i13;
   i40 = i10;
   i41 = i7;
  } else {
   i42 = i12;
   i43 = i13;
   i44 = i10;
   i45 = i7;
   i46 = 37;
  }
 } else {
  i7 = i14 | 0;
  HEAP32[i7 >> 2] = i34;
  i42 = i34;
  i43 = i7;
  i44 = i9 + 4 | 0;
  i45 = i9 + 8 | 0;
  i46 = 37;
 }
 if ((i46 | 0) == 37) {
  i7 = i42 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i39 = i43;
  i40 = i44;
  i41 = i45;
 }
 i45 = i14 + 4 | 0;
 HEAP32[i45 >> 2] = HEAP32[i40 >> 2];
 i40 = HEAP32[i41 >> 2] | 0;
 i41 = i14 + 8 | 0;
 i44 = i41;
 i43 = HEAP32[i44 >> 2] & -8 | i40 & 7;
 HEAP32[i44 >> 2] = i43;
 HEAP8[i41] = i43 & 255 & -9 | i40 & 8;
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i15, (HEAP32[(HEAP32[i30 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0);
 do {
  if (i36) {
   if ((HEAP32[i15 + 52 >> 2] | 0) == 0) {
    i46 = 114;
    break;
   }
   __ZN7WebCore15VisiblePositionC1ERKNS_8PositionENS_9EAffinityE(i18, i14, 1);
   __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i17, i18, 0);
   __ZN7WebCoreL37expandSelectionToRespectUserSelectAllEPNS_4NodeERKNS_16VisibleSelectionE(i16, i31, i17);
   __ZN7WebCore16VisibleSelectionD2Ev(i17);
   i40 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i40 | 0) != 0) {
     i43 = i40 + 8 | 0;
     i7 = i43 | 0;
     i42 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i42;
     if ((i42 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
    }
   } while (0);
   do {
    if ((HEAP32[i16 + 52 >> 2] | 0) == 2) {
     i40 = i19 | 0;
     i43 = HEAP32[i16 + 24 >> 2] | 0;
     HEAP32[i40 >> 2] = i43;
     i42 = (i43 | 0) == 0;
     if (!i42) {
      i7 = i43 + 8 | 0;
      HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     }
     i7 = HEAP32[i16 + 28 >> 2] | 0;
     HEAP32[i19 + 4 >> 2] = i7;
     i34 = HEAP32[i16 + 32 >> 2] | 0;
     i10 = i34 & 7;
     i13 = i19 + 8 | 0;
     i12 = i13;
     i8 = HEAP32[i12 >> 2] & -8 | i10;
     HEAP32[i12 >> 2] = i8;
     i12 = i34 & 8;
     HEAP8[i13] = i8 & 255 & -9 | i12;
     i8 = i20 | 0;
     i13 = HEAP32[i15 + 24 >> 2] | 0;
     HEAP32[i8 >> 2] = i13;
     if ((i13 | 0) != 0) {
      i34 = i13 + 8 | 0;
      HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
     }
     HEAP32[i20 + 4 >> 2] = HEAP32[i15 + 28 >> 2];
     i34 = HEAP32[i15 + 32 >> 2] | 0;
     i13 = i20 + 8 | 0;
     i6 = i13;
     i38 = HEAP32[i6 >> 2] & -8 | i34 & 7;
     HEAP32[i6 >> 2] = i38;
     HEAP8[i13] = i38 & 255 & -9 | i34 & 8;
     i34 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i19, i20) | 0) < 0;
     i38 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i38 | 0) != 0) {
       i8 = i38 + 8 | 0;
       i13 = i8 | 0;
       i6 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
       HEAP32[i13 >> 2] = i6;
       if ((i6 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
      }
     } while (0);
     i38 = HEAP32[i40 >> 2] | 0;
     do {
      if ((i38 | 0) != 0) {
       i8 = i38 + 8 | 0;
       i6 = i8 | 0;
       i13 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
       HEAP32[i6 >> 2] = i13;
       if ((i13 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
      }
     } while (0);
     if (i34) {
      if (!i42) {
       i38 = i43 + 8 | 0;
       HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
      }
      i38 = HEAP32[i39 >> 2] | 0;
      HEAP32[i39 >> 2] = i43;
      do {
       if ((i38 | 0) != 0) {
        i40 = i38 + 8 | 0;
        i8 = i40 | 0;
        i13 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
        HEAP32[i8 >> 2] = i13;
        if ((i13 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i40 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i40 - 8 | 0);
       }
      } while (0);
      HEAP32[i45 >> 2] = i7;
      i38 = HEAP32[i44 >> 2] & -8 | i10;
      HEAP32[i44 >> 2] = i38;
      HEAP8[i41] = i38 & 255 & -9 | i12;
      break;
     }
     i38 = i21 | 0;
     i43 = HEAP32[i15 + 36 >> 2] | 0;
     HEAP32[i38 >> 2] = i43;
     if ((i43 | 0) != 0) {
      i42 = i43 + 8 | 0;
      HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
     }
     HEAP32[i21 + 4 >> 2] = HEAP32[i15 + 40 >> 2];
     i42 = HEAP32[i15 + 44 >> 2] | 0;
     i43 = i21 + 8 | 0;
     i34 = i43;
     i40 = HEAP32[i34 >> 2] & -8 | i42 & 7;
     HEAP32[i34 >> 2] = i40;
     HEAP8[i43] = i40 & 255 & -9 | i42 & 8;
     i42 = i22 | 0;
     i40 = HEAP32[i16 + 36 >> 2] | 0;
     HEAP32[i42 >> 2] = i40;
     i43 = (i40 | 0) == 0;
     if (!i43) {
      i34 = i40 + 8 | 0;
      HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
     }
     i34 = HEAP32[i16 + 40 >> 2] | 0;
     HEAP32[i22 + 4 >> 2] = i34;
     i13 = HEAP32[i16 + 44 >> 2] | 0;
     i8 = i13 & 7;
     i6 = i22 + 8 | 0;
     i33 = i6;
     i37 = HEAP32[i33 >> 2] & -8 | i8;
     HEAP32[i33 >> 2] = i37;
     i33 = i13 & 8;
     HEAP8[i6] = i37 & 255 & -9 | i33;
     i37 = (__ZN7WebCore16comparePositionsERKNS_8PositionES2_(i21, i22) | 0) < 0;
     i6 = HEAP32[i42 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i42 = i6 + 8 | 0;
       i13 = i42 | 0;
       i47 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
       HEAP32[i13 >> 2] = i47;
       if ((i47 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i42 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i42 - 8 | 0);
      }
     } while (0);
     i6 = HEAP32[i38 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i12 = i6 + 8 | 0;
       i10 = i12 | 0;
       i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       HEAP32[i10 >> 2] = i7;
       if ((i7 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
      }
     } while (0);
     if (!i37) {
      break;
     }
     if (!i43) {
      i6 = i40 + 8 | 0;
      HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
     }
     i6 = HEAP32[i39 >> 2] | 0;
     HEAP32[i39 >> 2] = i40;
     do {
      if ((i6 | 0) != 0) {
       i38 = i6 + 8 | 0;
       i12 = i38 | 0;
       i7 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       HEAP32[i12 >> 2] = i7;
       if ((i7 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i38 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i38 - 8 | 0);
      }
     } while (0);
     HEAP32[i45 >> 2] = i34;
     i6 = HEAP32[i44 >> 2] & -8 | i8;
     HEAP32[i44 >> 2] = i6;
     HEAP8[i41] = i6 & 255 & -9 | i33;
    }
   } while (0);
   __ZNK7WebCore6Editor8behaviorEv(i23, HEAP32[(HEAP32[i30 >> 2] | 0) + 464 >> 2] | 0);
   do {
    if ((HEAP32[i23 >> 2] | 0) == 0) {
     if ((HEAP32[i39 >> 2] | 0) == 0) {
      i46 = 110;
      break;
     }
     i6 = i24 | 0;
     i40 = HEAP32[i15 + 24 >> 2] | 0;
     HEAP32[i6 >> 2] = i40;
     if ((i40 | 0) != 0) {
      i43 = i40 + 8 | 0;
      HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
     }
     HEAP32[i24 + 4 >> 2] = HEAP32[i15 + 28 >> 2];
     i43 = HEAP32[i15 + 32 >> 2] | 0;
     i40 = i24 + 8 | 0;
     i37 = i40;
     i38 = HEAP32[i37 >> 2] & -8 | i43 & 7;
     HEAP32[i37 >> 2] = i38;
     HEAP8[i40] = i38 & 255 & -9 | i43 & 8;
     i43 = i25 | 0;
     i38 = HEAP32[i15 + 36 >> 2] | 0;
     HEAP32[i43 >> 2] = i38;
     if ((i38 | 0) != 0) {
      i40 = i38 + 8 | 0;
      HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
     }
     HEAP32[i25 + 4 >> 2] = HEAP32[i15 + 40 >> 2];
     i40 = HEAP32[i15 + 44 >> 2] | 0;
     i38 = i25 + 8 | 0;
     i37 = i38;
     i7 = HEAP32[i37 >> 2] & -8 | i40 & 7;
     HEAP32[i37 >> 2] = i7;
     HEAP8[i38] = i7 & 255 & -9 | i40 & 8;
     __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i4, HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i24, i14);
     i40 = i4 | 0;
     i7 = HEAP32[i40 >> 2] | 0;
     HEAP32[i40 >> 2] = 0;
     i40 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i7, 1) | 0;
     do {
      if ((i7 | 0) != 0) {
       i38 = i7 | 0;
       i37 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
       if ((i37 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i7);
        __ZN3WTF8fastFreeEPv(i7);
        break;
       } else {
        HEAP32[i38 >> 2] = i37;
        break;
       }
      }
     } while (0);
     __ZN7WebCore5Range6createERNS_8DocumentERKNS_8PositionES5_(i5, HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i14, i25);
     i7 = i5 | 0;
     i33 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     i7 = __ZN7WebCore12TextIterator11rangeLengthEPKNS_5RangeEb(i33, 1) | 0;
     do {
      if ((i33 | 0) != 0) {
       i8 = i33 | 0;
       i34 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
       if ((i34 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i33);
        __ZN3WTF8fastFreeEPv(i33);
        break;
       } else {
        HEAP32[i8 >> 2] = i34;
        break;
       }
      }
     } while (0);
     if ((i40 | 0) > (i7 | 0)) {
      __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i27, i24, i14, 1, 0);
      __ZN7WebCore16VisibleSelectionaSEOS0_(i15, i27) | 0;
      __ZN7WebCore16VisibleSelectionD2Ev(i27);
     } else {
      __ZN7WebCore16VisibleSelectionC1ERKNS_8PositionES3_NS_9EAffinityEb(i26, i25, i14, 1, 0);
      __ZN7WebCore16VisibleSelectionaSEOS0_(i15, i26) | 0;
      __ZN7WebCore16VisibleSelectionD2Ev(i26);
     }
     i33 = HEAP32[i43 >> 2] | 0;
     do {
      if ((i33 | 0) != 0) {
       i34 = i33 + 8 | 0;
       i8 = i34 | 0;
       i37 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
       HEAP32[i8 >> 2] = i37;
       if ((i37 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i34 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i34 - 8 | 0);
      }
     } while (0);
     i33 = HEAP32[i6 >> 2] | 0;
     if ((i33 | 0) == 0) {
      break;
     }
     i43 = i33 + 8 | 0;
     i33 = i43 | 0;
     i7 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     HEAP32[i33 >> 2] = i7;
     if ((i7 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
    } else {
     i46 = 110;
    }
   } while (0);
   if ((i46 | 0) == 110) {
    __ZN7WebCore16VisibleSelection9setExtentERKNS_8PositionE(i15, i14);
   }
   i43 = HEAP32[(HEAP32[(HEAP32[i30 >> 2] | 0) + 468 >> 2] | 0) + 108 >> 2] | 0;
   if ((i43 | 0) == 0) {
    i48 = 0;
   } else {
    __ZN7WebCore16VisibleSelection22expandUsingGranularityENS_15TextGranularityE(i15, i43) | 0;
    i48 = i43;
   }
   __ZN7WebCore16VisibleSelectionD2Ev(i16);
   i49 = i48;
  } else {
   i46 = 114;
  }
 } while (0);
 if ((i46 | 0) == 114) {
  __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i29, i9, 0);
  __ZN7WebCoreL37expandSelectionToRespectUserSelectAllEPNS_4NodeERKNS_16VisibleSelectionE(i28, i31, i29);
  __ZN7WebCore16VisibleSelectionaSEOS0_(i15, i28) | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i28);
  __ZN7WebCore16VisibleSelectionD2Ev(i29);
  i49 = 0;
 }
 i29 = __ZN7WebCore12EventHandler49updateSelectionForMouseDownDispatchingSelectStartEPNS_4NodeERKNS_16VisibleSelectionENS_15TextGranularityE(i1, i31, i15, i49) | 0;
 if ((HEAP32[i2 + 32 >> 2] | 0) == 1) {
  i50 = __ZN7WebCore12EventHandler26handlePasteGlobalSelectionERKNS_18PlatformMouseEventE(i1, i35) | 0 | i29;
 } else {
  i50 = i29;
 }
 __ZN7WebCore16VisibleSelectionD2Ev(i15);
 i15 = HEAP32[i39 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i39 = i15 + 8 | 0;
   i29 = i39 | 0;
   i35 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
   HEAP32[i29 >> 2] = i35;
   if ((i35 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i39 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i39 - 8 | 0);
  }
 } while (0);
 i15 = HEAP32[i11 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i32 = i50;
  STACKTOP = i3;
  return i32 | 0;
 }
 i11 = i15 + 8 | 0;
 i15 = i11 | 0;
 i39 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 HEAP32[i15 >> 2] = i39;
 if ((i39 | 0) >= 1) {
  i32 = i50;
  STACKTOP = i3;
  return i32 | 0;
 }
 if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
  i32 = i50;
  STACKTOP = i3;
  return i32 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
 i32 = i50;
 STACKTOP = i3;
 return i32 | 0;
}
function __ZN7WebCore12EventHandler8keyEventERKNS_21PlatformKeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 96 | 0;
 i12 = i3 + 104 | 0;
 i13 = i3 + 112 | 0;
 i14 = i3 + 160 | 0;
 i15 = i3 + 168 | 0;
 i16 = i3 + 176 | 0;
 i17 = i1 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[i18 + 452 >> 2] | 0;
 i20 = (i19 | 0) != 0;
 if (i20) {
  i21 = i19 + 4 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
  i22 = HEAP32[i17 >> 2] | 0;
 } else {
  i22 = i18;
 }
 if ((HEAP32[(HEAP32[i22 + 456 >> 2] | 0) + 1688 >> 2] | 0) == 0) {
  i23 = 5;
 } else {
  if (__ZNK7WebCore12EventHandler29isKeyEventAllowedInFullScreenERKNS_21PlatformKeyboardEventE(i1, i2) | 0) {
   i23 = 5;
  } else {
   i24 = 0;
  }
 }
 do {
  if ((i23 | 0) == 5) {
   i22 = i2 + 28 | 0;
   do {
    if ((HEAP32[i22 >> 2] | 0) == 20) {
     i18 = HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 456 >> 2] | 0) + 680 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     i21 = i18 + 32 | 0;
     if ((HEAP32[i18 + 12 >> 2] & 2048 | 0) == 0) {
      i25 = i21 | 0;
     } else {
      i25 = HEAP32[i21 >> 2] | 0;
     }
     i21 = HEAP32[i25 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 216 >> 2] & 1](i21) | 0)) {
      break;
     }
     __ZN7WebCore27RenderTextControlSingleLine27capsLockStateMayHaveChangedEv(i21);
    }
   } while (0);
   i21 = __ZN7WebCore29eventTargetElementForDocumentEPNS_8DocumentE(HEAP32[(HEAP32[i17 >> 2] | 0) + 456 >> 2] | 0) | 0;
   if ((i21 | 0) == 0) {
    i24 = 0;
    break;
   }
   i18 = i21 + 8 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i4, 0);
   __ZN7WebCore26UserTypingGestureIndicatorC1ERNS_5FrameE(i5, HEAP32[i17 >> 2] | 0);
   i18 = HEAP32[i17 >> 2] | 0;
   i26 = HEAP32[i18 + 452 >> 2] | 0;
   if ((i26 | 0) == 0) {
    i27 = i18;
   } else {
    __ZN7WebCore9FrameView25resetDeferredRepaintDelayEv(i26);
    i27 = HEAP32[i17 >> 2] | 0;
   }
   __ZN7WebCore11FrameLoader37resetMultipleFormSubmissionProtectionEv(i27 + 80 | 0);
   i26 = i2 | 0;
   i18 = HEAP32[i26 >> 2] | 0;
   if ((i18 | 0) == 1) {
    i28 = __ZN7WebCore12EventHandler15handleAccessKeyERKNS_21PlatformKeyboardEventE(i1, i2) | 0;
    i29 = i28;
    i30 = HEAP32[i26 >> 2] | 0;
   } else {
    i29 = 0;
    i30 = i18;
   }
   do {
    if ((i30 | 0) == 2 | (i30 | 0) == 4) {
     i31 = (__ZN7WebCore7Element16dispatchKeyEventERKNS_21PlatformKeyboardEventE(i21, i2) | 0) ^ 1;
     i32 = i21;
    } else {
     i18 = i6;
     i28 = i2;
     HEAP32[i18 >> 2] = HEAP32[i28 >> 2];
     HEAP32[i18 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
     HEAP32[i18 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
     HEAP32[i18 + 12 >> 2] = HEAP32[i28 + 12 >> 2];
     i18 = i6 + 16 | 0;
     i33 = i2 + 16 | 0;
     i34 = HEAP32[i33 >> 2] | 0;
     HEAP32[i18 >> 2] = i34;
     if ((i34 | 0) != 0) {
      i35 = i34 | 0;
      HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
     }
     i35 = i6 + 20 | 0;
     i34 = i2 + 20 | 0;
     i36 = HEAP32[i34 >> 2] | 0;
     HEAP32[i35 >> 2] = i36;
     if ((i36 | 0) != 0) {
      i37 = i36 | 0;
      HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 2;
     }
     i37 = i6 + 24 | 0;
     i36 = i2 + 24 | 0;
     i38 = HEAP32[i36 >> 2] | 0;
     HEAP32[i37 >> 2] = i38;
     if ((i38 | 0) != 0) {
      i39 = i38 | 0;
      HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 2;
     }
     i39 = i6 + 28 | 0;
     HEAP32[i39 >> 2] = HEAP32[i22 >> 2];
     i38 = i2 + 32 | 0;
     HEAP32[i6 + 32 >> 2] = HEAP32[i38 >> 2];
     i40 = i2 + 36 | 0;
     HEAP32[i6 + 36 >> 2] = HEAP32[i40 >> 2];
     i41 = i2 + 40 | 0;
     HEAP8[i6 + 40 | 0] = HEAP8[i41] & 1;
     i42 = i2 + 41 | 0;
     HEAP8[i6 + 41 | 0] = HEAP8[i42] & 1;
     i43 = i2 + 42 | 0;
     HEAP8[i6 + 42 | 0] = HEAP8[i43] & 1;
     if ((HEAP32[i6 >> 2] | 0) != 3) {
      __ZN7WebCore21PlatformKeyboardEvent24disambiguateKeyDownEventENS_13PlatformEvent4TypeEb(i6, 3, 0);
     }
     i44 = HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0;
     i45 = __ZN3WTF10fastMallocEj(80) | 0;
     i46 = i45;
     __ZN7WebCore13KeyboardEventC1ERKNS_21PlatformKeyboardEventEPNS_9DOMWindowE(i46, i6, i44);
     if (i29) {
      HEAP8[i45 + 20 | 0] = 1;
     }
     i44 = i45;
     i47 = i7 | 0;
     i48 = i21 | 0;
     HEAP32[i47 >> 2] = i48;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 56 >> 2] & 15](i48);
     __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i44, i7);
     i49 = HEAP32[i47 >> 2] | 0;
     if ((i49 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 60 >> 2] & 15](i49);
     }
     do {
      if ((HEAP32[i26 >> 2] | 0) == 3) {
       i49 = i8 | 0;
       HEAP32[i49 >> 2] = i44;
       if ((i45 | 0) != 0) {
        i47 = i45 + 8 | 0;
        HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
       }
       i47 = i9 | 0;
       HEAP32[i47 >> 2] = 0;
       __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i48, i8, i47) | 0;
       i47 = HEAP32[i49 >> 2] | 0;
       do {
        if ((i47 | 0) != 0) {
         i49 = i47 + 8 | 0;
         i50 = i49 | 0;
         i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
         if ((i51 | 0) != 0) {
          HEAP32[i50 >> 2] = i51;
          break;
         }
         i51 = i49 - 8 | 0;
         if ((i51 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 15](i51);
        }
       } while (0);
       i47 = HEAP32[i17 >> 2] | 0;
       i51 = HEAP32[i47 + 32 >> 2] | 0;
       if ((i51 | 0) == 0) {
        i52 = 0;
       } else {
        i52 = (i47 | 0) != (__ZNK7WebCore15FocusController18focusedOrMainFrameEv(HEAP32[i51 + 32 >> 2] | 0) | 0);
       }
       if ((HEAP8[i45 + 21 | 0] & 1) != 0) {
        i53 = 1;
        i54 = i46;
        i55 = i21;
        i23 = 105;
        break;
       }
       i56 = i21;
       i57 = i46;
       i58 = (HEAP8[i45 + 20 | 0] & 1) != 0 | i52;
       i23 = 106;
      } else {
       __ZN7WebCore6Editor24handleInputMethodKeydownEPNS_13KeyboardEventE(HEAP32[(HEAP32[i17 >> 2] | 0) + 464 >> 2] | 0, i46);
       i51 = (HEAP8[i45 + 21 | 0] & 1) != 0;
       if (i51) {
        HEAP32[i39 >> 2] = 229;
        i47 = HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0;
        i49 = __ZN3WTF10fastMallocEj(80) | 0;
        i50 = i49;
        __ZN7WebCore13KeyboardEventC1ERKNS_21PlatformKeyboardEventEPNS_9DOMWindowE(i50, i6, i47);
        i47 = i45 + 8 | 0;
        i59 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
        if ((i59 | 0) == 0) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 4 >> 2] & 15](i44);
        } else {
         HEAP32[i47 >> 2] = i59;
        }
        i59 = i49;
        i47 = i10 | 0;
        HEAP32[i47 >> 2] = i48;
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 56 >> 2] & 15](i48);
        __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i59, i10);
        i60 = HEAP32[i47 >> 2] | 0;
        if ((i60 | 0) != 0) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i60 >> 2] | 0) + 60 >> 2] & 15](i60);
        }
        HEAP8[i49 + 21 | 0] = 1;
        i60 = i11 | 0;
        HEAP32[i60 >> 2] = i59;
        if ((i49 | 0) == 0) {
         i61 = 0;
         i62 = i60;
         i63 = i59;
        } else {
         i64 = i50;
         i65 = i60;
         i66 = i59;
         i23 = 52;
        }
       } else {
        i59 = i11 | 0;
        HEAP32[i59 >> 2] = i44;
        i64 = i46;
        i65 = i59;
        i66 = i44;
        i23 = 52;
       }
       if ((i23 | 0) == 52) {
        i59 = i64 + 8 | 0;
        HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
        i61 = i64;
        i62 = i65;
        i63 = i66;
       }
       i59 = i12 | 0;
       HEAP32[i59 >> 2] = 0;
       __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i48, i11, i59) | 0;
       i59 = HEAP32[i62 >> 2] | 0;
       do {
        if ((i59 | 0) != 0) {
         i60 = i59 + 8 | 0;
         i50 = i60 | 0;
         i49 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
         if ((i49 | 0) != 0) {
          HEAP32[i50 >> 2] = i49;
          break;
         }
         i49 = i60 - 8 | 0;
         if ((i49 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 4 >> 2] & 15](i49);
        }
       } while (0);
       i59 = HEAP32[i17 >> 2] | 0;
       i49 = HEAP32[i59 + 32 >> 2] | 0;
       if ((i49 | 0) == 0) {
        i67 = 0;
       } else {
        i67 = (i59 | 0) != (__ZNK7WebCore15FocusController18focusedOrMainFrameEv(HEAP32[i49 + 32 >> 2] | 0) | 0);
       }
       if ((HEAP8[i63 + 21 | 0] & 1) != 0) {
        i53 = 1;
        i54 = i61;
        i55 = i21;
        i23 = 105;
        break;
       }
       i49 = (HEAP8[i63 + 20 | 0] & 1) != 0 | i67;
       if (i51 | i49) {
        i53 = i49;
        i54 = i61;
        i55 = i21;
        i23 = 105;
        break;
       }
       i49 = __ZN7WebCore29eventTargetElementForDocumentEPNS_8DocumentE(HEAP32[(HEAP32[i17 >> 2] | 0) + 456 >> 2] | 0) | 0;
       i59 = (i49 | 0) == 0;
       if (!i59) {
        i60 = i49 + 8 | 0;
        HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
       }
       i60 = i21 + 8 | 0;
       i50 = i60 - 8 | 0;
       i47 = i60 | 0;
       i68 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
       HEAP32[i47 >> 2] = i68;
       do {
        if ((i68 | 0) < 1) {
         if ((HEAP32[i60 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i50);
        }
       } while (0);
       if (i59) {
        i53 = 0;
        i54 = i61;
        i55 = 0;
        i23 = 105;
        break;
       }
       i50 = i13;
       HEAP32[i50 >> 2] = HEAP32[i28 >> 2];
       HEAP32[i50 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
       HEAP32[i50 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
       HEAP32[i50 + 12 >> 2] = HEAP32[i28 + 12 >> 2];
       i50 = i13 + 16 | 0;
       i60 = HEAP32[i33 >> 2] | 0;
       HEAP32[i50 >> 2] = i60;
       if ((i60 | 0) != 0) {
        i68 = i60 | 0;
        HEAP32[i68 >> 2] = (HEAP32[i68 >> 2] | 0) + 2;
       }
       i68 = i13 + 20 | 0;
       i60 = HEAP32[i34 >> 2] | 0;
       HEAP32[i68 >> 2] = i60;
       if ((i60 | 0) != 0) {
        i51 = i60 | 0;
        HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 2;
       }
       i51 = i13 + 24 | 0;
       i60 = HEAP32[i36 >> 2] | 0;
       HEAP32[i51 >> 2] = i60;
       if ((i60 | 0) != 0) {
        i47 = i60 | 0;
        HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 2;
       }
       HEAP32[i13 + 28 >> 2] = HEAP32[i22 >> 2];
       HEAP32[i13 + 32 >> 2] = HEAP32[i38 >> 2];
       HEAP32[i13 + 36 >> 2] = HEAP32[i40 >> 2];
       HEAP8[i13 + 40 | 0] = HEAP8[i41] & 1;
       HEAP8[i13 + 41 | 0] = HEAP8[i42] & 1;
       HEAP8[i13 + 42 | 0] = HEAP8[i43] & 1;
       __ZN7WebCore21PlatformKeyboardEvent24disambiguateKeyDownEventENS_13PlatformEvent4TypeEb(i13, 4, 0);
       i47 = HEAP32[i50 >> 2] | 0;
       do {
        if ((i47 | 0) == 0) {
         i69 = 0;
        } else {
         i60 = i47 | 0;
         i70 = HEAP32[i60 >> 2] | 0;
         HEAP32[i60 >> 2] = i70 + 2;
         i71 = (HEAP32[i47 + 4 >> 2] | 0) == 0;
         if ((i70 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i47);
          if (i71) {
           i69 = 0;
           break;
          }
         } else {
          HEAP32[i60 >> 2] = i70;
          if (i71) {
           i69 = 0;
           break;
          }
         }
         i71 = HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0;
         i70 = __ZN3WTF10fastMallocEj(80) | 0;
         __ZN7WebCore13KeyboardEventC1ERKNS_21PlatformKeyboardEventEPNS_9DOMWindowE(i70, i13, i71);
         i71 = i70;
         i60 = i14 | 0;
         i72 = i49 | 0;
         HEAP32[i60 >> 2] = i72;
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i49 >> 2] | 0) + 56 >> 2] & 15](i72);
         __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i71, i14);
         i73 = HEAP32[i60 >> 2] | 0;
         if ((i73 | 0) != 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i73 >> 2] | 0) + 60 >> 2] & 15](i73);
         }
         i73 = i15 | 0;
         HEAP32[i73 >> 2] = i71;
         i60 = (i70 | 0) == 0;
         if (!i60) {
          i74 = i70 + 8 | 0;
          HEAP32[i74 >> 2] = (HEAP32[i74 >> 2] | 0) + 1;
         }
         i74 = i16 | 0;
         HEAP32[i74 >> 2] = 0;
         __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i72, i15, i74) | 0;
         i74 = HEAP32[i73 >> 2] | 0;
         do {
          if ((i74 | 0) != 0) {
           i73 = i74 + 8 | 0;
           i72 = i73 | 0;
           i75 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
           if ((i75 | 0) != 0) {
            HEAP32[i72 >> 2] = i75;
            break;
           }
           i75 = i73 - 8 | 0;
           if ((i75 | 0) == 0) {
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i75 >> 2] | 0) + 4 >> 2] & 15](i75);
          }
         } while (0);
         if ((HEAP8[i70 + 20 | 0] & 1) == 0) {
          i76 = (HEAP8[i70 + 21 | 0] & 1) != 0;
         } else {
          i76 = 1;
         }
         if (i60) {
          i69 = i76;
          break;
         }
         i74 = i70 + 8 | 0;
         i75 = (HEAP32[i74 >> 2] | 0) - 1 | 0;
         if ((i75 | 0) == 0) {
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i70 >> 2] | 0) + 4 >> 2] & 15](i71);
          i69 = i76;
          break;
         } else {
          HEAP32[i74 >> 2] = i75;
          i69 = i76;
          break;
         }
        }
       } while (0);
       i47 = HEAP32[i51 >> 2] | 0;
       do {
        if ((i47 | 0) != 0) {
         i59 = i47 | 0;
         i75 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
         if ((i75 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i47);
          break;
         } else {
          HEAP32[i59 >> 2] = i75;
          break;
         }
        }
       } while (0);
       i47 = HEAP32[i68 >> 2] | 0;
       do {
        if ((i47 | 0) != 0) {
         i51 = i47 | 0;
         i75 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
         if ((i75 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i47);
          break;
         } else {
          HEAP32[i51 >> 2] = i75;
          break;
         }
        }
       } while (0);
       i47 = HEAP32[i50 >> 2] | 0;
       if ((i47 | 0) == 0) {
        i53 = i69;
        i54 = i61;
        i55 = i49;
        i23 = 105;
        break;
       }
       i68 = i47 | 0;
       i75 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
       if ((i75 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i47);
        i53 = i69;
        i54 = i61;
        i55 = i49;
        i23 = 105;
        break;
       } else {
        HEAP32[i68 >> 2] = i75;
        i53 = i69;
        i54 = i61;
        i55 = i49;
        i23 = 105;
        break;
       }
      }
     } while (0);
     if ((i23 | 0) == 105) {
      if ((i54 | 0) == 0) {
       i77 = i55;
       i78 = i53;
      } else {
       i56 = i55;
       i57 = i54;
       i58 = i53;
       i23 = 106;
      }
     }
     do {
      if ((i23 | 0) == 106) {
       i43 = i57 + 8 | 0;
       i42 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
       if ((i42 | 0) != 0) {
        HEAP32[i43 >> 2] = i42;
        i77 = i56;
        i78 = i58;
        break;
       }
       if ((i57 | 0) == 0) {
        i77 = i56;
        i78 = i58;
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 15](i57);
       i77 = i56;
       i78 = i58;
      }
     } while (0);
     i42 = HEAP32[i37 >> 2] | 0;
     do {
      if ((i42 | 0) != 0) {
       i43 = i42 | 0;
       i41 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
       if ((i41 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i42);
        break;
       } else {
        HEAP32[i43 >> 2] = i41;
        break;
       }
      }
     } while (0);
     i42 = HEAP32[i35 >> 2] | 0;
     do {
      if ((i42 | 0) != 0) {
       i37 = i42 | 0;
       i41 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
       if ((i41 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i42);
        break;
       } else {
        HEAP32[i37 >> 2] = i41;
        break;
       }
      }
     } while (0);
     i42 = HEAP32[i18 >> 2] | 0;
     if ((i42 | 0) == 0) {
      i31 = i78;
      i32 = i77;
      break;
     }
     i35 = i42 | 0;
     i41 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
     if ((i41 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i42);
      i31 = i78;
      i32 = i77;
      break;
     } else {
      HEAP32[i35 >> 2] = i41;
      i31 = i78;
      i32 = i77;
      break;
     }
    }
   } while (0);
   __ZN7WebCore26UserTypingGestureIndicatorD1Ev(i5);
   __ZN7WebCore20UserGestureIndicatorD1Ev(i4);
   if ((i32 | 0) == 0) {
    i24 = i31;
    break;
   }
   i22 = i32 + 8 | 0;
   i21 = i22 | 0;
   i26 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   HEAP32[i21 >> 2] = i26;
   if ((i26 | 0) >= 1) {
    i24 = i31;
    break;
   }
   if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
    i24 = i31;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
   i24 = i31;
  }
 } while (0);
 if (!i20) {
  STACKTOP = i3;
  return i24 | 0;
 }
 i20 = i19 + 4 | 0;
 i19 = i20 | 0;
 i31 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
 if ((i31 | 0) != 0) {
  HEAP32[i19 >> 2] = i31;
  STACKTOP = i3;
  return i24 | 0;
 }
 i31 = i20 - 4 | 0;
 if ((i31 | 0) == 0) {
  STACKTOP = i3;
  return i24 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 15](i31);
 STACKTOP = i3;
 return i24 | 0;
}
function __ZN7WebCore12EventHandler10handleDragERKNS_28MouseEventWithHitTestResultsENS_19CheckDragHysteresisE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 136 | 0;
 i10 = i4 + 144 | 0;
 i11 = i4 + 152 | 0;
 i12 = i4 + 160 | 0;
 i13 = i2 | 0;
 do {
  if ((HEAP32[i2 + 32 >> 2] | 0) == 0) {
   if ((HEAP32[i2 >> 2] | 0) != 5) {
    break;
   }
   i14 = i1 + 13 | 0;
   do {
    if ((HEAP8[i14] & 1) != 0) {
     if (HEAP8[H_BASE + 216 | 0] | 0) {
      i15 = HEAP32[H_BASE + 256 >> 2] | 0;
     } else {
      i16 = __Znwj(16) | 0;
      i17 = i16;
      _memset(i16 | 0, 0, 12) | 0;
      HEAP32[i16 >> 2] = 0;
      HEAP32[i16 + 12 >> 2] = 0;
      HEAP32[H_BASE + 256 >> 2] = i17;
      HEAP8[H_BASE + 216 | 0] = 1;
      i15 = i17;
     }
     if ((HEAP32[i15 >> 2] | 0) != 0) {
      break;
     }
     i17 = i1 | 0;
     i16 = HEAP32[i17 >> 2] | 0;
     i18 = HEAP32[i16 + 32 >> 2] | 0;
     do {
      if ((i18 | 0) == 0) {
       i19 = 0;
       i20 = 12;
      } else {
       i21 = HEAP32[i16 + 452 >> 2] | 0;
       if ((i21 | 0) == 0) {
        i19 = 0;
        i20 = 12;
        break;
       }
       i22 = HEAP32[i18 + 28 >> 2] | 0;
       __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i6, i21 | 0, i1 + 300 | 0);
       i21 = (__ZN7WebCore14DragController24delegateDragSourceActionERKNS_8IntPointE(i22, i6) | 0) & 1;
       if (HEAP8[H_BASE + 216 | 0] | 0) {
        i19 = i21;
        i20 = 12;
        break;
       }
       i22 = __Znwj(16) | 0;
       i23 = i22;
       _memset(i22 | 0, 0, 12) | 0;
       HEAP32[i22 >> 2] = 0;
       HEAP32[i22 + 12 >> 2] = 0;
       HEAP32[H_BASE + 256 >> 2] = i23;
       HEAP8[H_BASE + 216 | 0] = 1;
       i24 = i23;
       i25 = i21;
      }
     } while (0);
     if ((i20 | 0) == 12) {
      i24 = HEAP32[H_BASE + 256 >> 2] | 0;
      i25 = i19;
     }
     HEAP8[i24 + 4 | 0] = i25;
     HEAP32[i7 >> 2] = 258;
     i18 = i1 + 300 | 0;
     HEAP32[i9 >> 2] = HEAP32[i18 >> 2];
     HEAP32[i9 + 4 >> 2] = HEAP32[i1 + 304 >> 2];
     __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i8, i9);
     __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(__ZNK7WebCore5Frame15contentRendererEv(HEAP32[i17 >> 2] | 0) | 0, i7, i8) | 0;
     i16 = HEAP32[i17 >> 2] | 0;
     i21 = HEAP32[i16 + 32 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       if (HEAP8[H_BASE + 216 | 0] | 0) {
        i26 = HEAP32[H_BASE + 256 >> 2] | 0;
        i27 = i16;
        i28 = i21;
       } else {
        i23 = __Znwj(16) | 0;
        i22 = i23;
        _memset(i23 | 0, 0, 12) | 0;
        HEAP32[i23 >> 2] = 0;
        HEAP32[i23 + 12 >> 2] = 0;
        HEAP32[H_BASE + 256 >> 2] = i22;
        HEAP8[H_BASE + 216 | 0] = 1;
        i23 = HEAP32[i17 >> 2] | 0;
        i26 = i22;
        i27 = i23;
        i28 = HEAP32[i23 + 32 >> 2] | 0;
       }
       i23 = HEAP32[i28 + 28 >> 2] | 0;
       i22 = __ZNK7WebCore13HitTestResult12innerElementEv(i8) | 0;
       if (HEAP8[H_BASE + 216 | 0] | 0) {
        i29 = HEAP32[H_BASE + 256 >> 2] | 0;
       } else {
        i30 = __Znwj(16) | 0;
        i31 = i30;
        _memset(i30 | 0, 0, 12) | 0;
        HEAP32[i30 >> 2] = 0;
        HEAP32[i30 + 12 >> 2] = 0;
        HEAP32[H_BASE + 256 >> 2] = i31;
        HEAP8[H_BASE + 216 | 0] = 1;
        i29 = i31;
       }
       i31 = __ZNK7WebCore14DragController16draggableElementEPKNS_5FrameEPNS_7ElementERKNS_8IntPointERNS_9DragStateE(i23, i27, i22, i18, i29) | 0;
       if ((i31 | 0) != 0) {
        i22 = i31 + 8 | 0;
        HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
       }
       i22 = i26 | 0;
       i23 = HEAP32[i22 >> 2] | 0;
       HEAP32[i22 >> 2] = i31;
       if ((i23 | 0) == 0) {
        break;
       }
       i31 = i23 + 8 | 0;
       i23 = i31 | 0;
       i22 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       HEAP32[i23 >> 2] = i22;
       if ((i22 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i31 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i31 - 8 | 0);
      }
     } while (0);
     if (HEAP8[H_BASE + 216 | 0] | 0) {
      i32 = HEAP32[H_BASE + 256 >> 2] | 0;
     } else {
      i18 = __Znwj(16) | 0;
      i17 = i18;
      _memset(i18 | 0, 0, 12) | 0;
      HEAP32[i18 >> 2] = 0;
      HEAP32[i18 + 12 >> 2] = 0;
      HEAP32[H_BASE + 256 >> 2] = i17;
      HEAP8[H_BASE + 216 | 0] = 1;
      i32 = i17;
     }
     if ((HEAP32[i32 >> 2] | 0) == 0) {
      HEAP8[i14] = 0;
     } else {
      HEAP8[i1 + 14 | 0] = (HEAP32[i32 + 8 >> 2] | 0) >>> 3 & 1;
     }
     __ZN7WebCore13HitTestResultD1Ev(i8);
    }
   } while (0);
   do {
    if ((HEAP8[i14] & 1) != 0) {
     i17 = i1 + 14 | 0;
     if ((HEAP8[i17] & 1) == 0) {
      break;
     }
     if (HEAP8[H_BASE + 216 | 0] | 0) {
      i33 = HEAP32[H_BASE + 256 >> 2] | 0;
     } else {
      i18 = __Znwj(16) | 0;
      i21 = i18;
      _memset(i18 | 0, 0, 12) | 0;
      HEAP32[i18 >> 2] = 0;
      HEAP32[i18 + 12 >> 2] = 0;
      HEAP32[H_BASE + 256 >> 2] = i21;
      HEAP8[H_BASE + 216 | 0] = 1;
      i33 = i21;
     }
     i21 = i33 + 8 | 0;
     i18 = HEAP32[i21 >> 2] | 0;
     if ((i18 & 8 | 0) == 0) {
      break;
     }
     if (+HEAPF64[i2 + 8 >> 3] - +HEAPF64[i1 + 312 >> 3] >= +HEAPF64[__ZN7WebCore12EventHandler13TextDragDelayE >> 3]) {
      break;
     }
     if ((i18 & 2 | 0) != 0) {
      HEAP32[i21 >> 2] = 2;
      break;
     }
     if ((i18 & 5 | 0) != 0) {
      HEAP8[i17] = 0;
      break;
     }
     HEAP8[i14] = 0;
     if (HEAP8[H_BASE + 216 | 0] | 0) {
      i34 = HEAP32[H_BASE + 256 >> 2] | 0;
     } else {
      i17 = __Znwj(16) | 0;
      i18 = i17;
      _memset(i17 | 0, 0, 12) | 0;
      HEAP32[i17 >> 2] = 0;
      HEAP32[i17 + 12 >> 2] = 0;
      HEAP32[H_BASE + 256 >> 2] = i18;
      HEAP8[H_BASE + 216 | 0] = 1;
      i34 = i18;
     }
     i18 = i34 | 0;
     i17 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = 0;
     do {
      if ((i17 | 0) != 0) {
       i18 = i17 + 8 | 0;
       i21 = i18 | 0;
       i16 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
       HEAP32[i21 >> 2] = i16;
       if ((i16 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     if (!(__ZNK7WebCore12EventHandler18eventActivatedViewERKNS_18PlatformMouseEventE(i1, i13) | 0)) {
      break;
     }
     HEAP8[i1 + 12 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i14] & 1) == 0) {
    if ((HEAP8[i1 + 12 | 0] & 1) != 0) {
     i35 = 0;
     STACKTOP = i4;
     return i35 | 0;
    }
    i35 = (HEAP8[i1 + 148 | 0] & 1) == 0;
    STACKTOP = i4;
    return i35 | 0;
   }
   if (HEAP8[H_BASE + 216 | 0] | 0) {
    i36 = HEAP32[H_BASE + 256 >> 2] | 0;
   } else {
    i17 = __Znwj(16) | 0;
    i18 = i17;
    _memset(i17 | 0, 0, 12) | 0;
    HEAP32[i17 >> 2] = 0;
    HEAP32[i17 + 12 >> 2] = 0;
    HEAP32[H_BASE + 256 >> 2] = i18;
    HEAP8[H_BASE + 216 | 0] = 1;
    i36 = i18;
   }
   i18 = HEAP32[i36 + 8 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i20 = 62;
   } else {
    if ((i18 - 1 & i18 | 0) != 0) {
     i20 = 62;
    }
   }
   if ((i20 | 0) == 62) {
    HEAP32[i36 + 8 >> 2] = 8;
   }
   i18 = i1 | 0;
   i17 = HEAP32[(HEAP32[i18 >> 2] | 0) + 452 >> 2] | 0;
   if ((i17 | 0) != 0) {
    __ZN7WebCore6Widget9setCursorERKNS_6CursorE(i17 | 0, __ZN7WebCore13pointerCursorEv() | 0);
   }
   do {
    if ((i3 | 0) == 0) {
     d37 = +(HEAP32[i2 + 20 >> 2] | 0);
     HEAPF32[i5 >> 2] = +(HEAP32[i2 + 16 >> 2] | 0);
     HEAPF32[i5 + 4 >> 2] = d37;
     if (__ZNK7WebCore12EventHandler22dragHysteresisExceededERKNS_10FloatPointE(i1, i5) | 0) {
      break;
     } else {
      i35 = 1;
     }
     STACKTOP = i4;
     return i35 | 0;
    }
   } while (0);
   HEAP32[i1 + 252 >> 2] = 0;
   i17 = i1 + 256 | 0;
   i16 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   do {
    if ((i16 | 0) != 0) {
     i17 = i16 + 8 | 0;
     i21 = i17 | 0;
     i31 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     HEAP32[i21 >> 2] = i31;
     if ((i31 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore12EventHandler13freeClipboardEv(0);
   if (HEAP8[H_BASE + 216 | 0] | 0) {
    i38 = HEAP32[H_BASE + 256 >> 2] | 0;
   } else {
    i16 = __Znwj(16) | 0;
    i17 = i16;
    _memset(i16 | 0, 0, 12) | 0;
    HEAP32[i16 >> 2] = 0;
    HEAP32[i16 + 12 >> 2] = 0;
    HEAP32[H_BASE + 256 >> 2] = i17;
    HEAP8[H_BASE + 216 | 0] = 1;
    i38 = i17;
   }
   __ZNK7WebCore12EventHandler23createDraggingClipboardEv(i10, i1);
   i17 = i10 | 0;
   i16 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   i31 = i38 + 12 | 0;
   i21 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = i16;
   do {
    if ((i21 | 0) != 0) {
     i16 = i21 | 0;
     i31 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) == 0) {
      __ZN7WebCore9ClipboardD1Ev(i21);
      __ZN3WTF8fastFreeEPv(i21);
      break;
     } else {
      HEAP32[i16 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i31 = i21 | 0;
     i16 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) == 0) {
      __ZN7WebCore9ClipboardD1Ev(i21);
      __ZN3WTF8fastFreeEPv(i21);
      break;
     } else {
      HEAP32[i31 >> 2] = i16;
      break;
     }
    }
   } while (0);
   if (HEAP8[H_BASE + 216 | 0] | 0) {
    i39 = HEAP32[H_BASE + 256 >> 2] | 0;
   } else {
    i21 = __Znwj(16) | 0;
    i17 = i21;
    _memset(i21 | 0, 0, 12) | 0;
    HEAP32[i21 >> 2] = 0;
    HEAP32[i21 + 12 >> 2] = 0;
    HEAP32[H_BASE + 256 >> 2] = i17;
    HEAP8[H_BASE + 216 | 0] = 1;
    i39 = i17;
   }
   do {
    if ((HEAP8[i39 + 4 | 0] & 1) == 0) {
     i40 = 0;
     i20 = 118;
    } else {
     if ((HEAP32[i39 + 8 >> 2] | 0) == 1) {
      i17 = HEAP32[i39 >> 2] | 0;
      i21 = i17 + 32 | 0;
      if ((HEAP32[i17 + 12 >> 2] & 2048 | 0) == 0) {
       i41 = i21 | 0;
      } else {
       i41 = HEAP32[i21 >> 2] | 0;
      }
      i21 = HEAP32[i41 >> 2] | 0;
      if ((i21 | 0) == 0) {
       HEAP8[i14] = 0;
       break;
      }
      HEAPF32[i12 >> 2] = +0;
      HEAPF32[i12 + 4 >> 2] = +0;
      __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i11, i21, i12, 0);
      d37 = +_round(+(+HEAPF32[i11 >> 2]));
      do {
       if (d37 < +2147483647) {
        if (d37 <= +-2147483648) {
         i42 = -2147483648;
         break;
        }
        i42 = ~~d37;
       } else {
        i42 = 2147483647;
       }
      } while (0);
      d37 = +_round(+(+HEAPF32[i11 + 4 >> 2]));
      do {
       if (d37 < +2147483647) {
        if (d37 <= +-2147483648) {
         i43 = -2147483648;
         break;
        }
        i43 = ~~d37;
       } else {
        i43 = 2147483647;
       }
      } while (0);
      i21 = (HEAP32[i1 + 300 >> 2] | 0) - i42 | 0;
      i17 = (HEAP32[i1 + 304 >> 2] | 0) - i43 | 0;
      if (HEAP8[H_BASE + 216 | 0] | 0) {
       i16 = HEAP32[H_BASE + 256 >> 2] | 0;
       i44 = i16;
       i45 = HEAP32[i16 + 12 >> 2] | 0;
      } else {
       i16 = __Znwj(16) | 0;
       i31 = i16;
       _memset(i16 | 0, 0, 12) | 0;
       HEAP32[i16 >> 2] = 0;
       HEAP32[i16 + 12 >> 2] = 0;
       HEAP32[H_BASE + 256 >> 2] = i31;
       HEAP8[H_BASE + 216 | 0] = 1;
       i44 = i31;
       i45 = 0;
      }
      __ZN7WebCore9Clipboard12setDragImageEPNS_7ElementEii(i45, HEAP32[i44 >> 2] | 0, i21, i17);
      i46 = HEAP8[H_BASE + 216 | 0] | 0;
     } else {
      i46 = 1;
     }
     i17 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 140 | 0;
     if (i46) {
      i21 = HEAP32[H_BASE + 256 >> 2] | 0;
      i47 = i21;
      i48 = HEAP32[i21 >> 2] | 0;
     } else {
      i21 = __Znwj(16) | 0;
      i31 = i21;
      _memset(i21 | 0, 0, 12) | 0;
      HEAP32[i21 >> 2] = 0;
      HEAP32[i21 + 12 >> 2] = 0;
      HEAP32[H_BASE + 256 >> 2] = i31;
      HEAP8[H_BASE + 216 | 0] = 1;
      i47 = i31;
      i48 = 0;
     }
     if (__ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, i17, i48, i1 + 320 | 0, HEAP32[i47 + 12 >> 2] | 0) | 0) {
      i49 = 0;
     } else {
      i49 = (__ZNK7WebCore14FrameSelection17isInPasswordFieldEv(HEAP32[(HEAP32[i18 >> 2] | 0) + 468 >> 2] | 0) | 0) & 1 ^ 1;
     }
     HEAP8[i14] = i49;
     if (HEAP8[H_BASE + 216 | 0] | 0) {
      i50 = HEAP32[H_BASE + 256 >> 2] | 0;
     } else {
      i17 = __Znwj(16) | 0;
      i31 = i17;
      _memset(i17 | 0, 0, 12) | 0;
      HEAP32[i17 >> 2] = 0;
      HEAP32[i17 + 12 >> 2] = 0;
      HEAP32[H_BASE + 256 >> 2] = i31;
      HEAP8[H_BASE + 216 | 0] = 1;
      i50 = i31;
     }
     __ZN7WebCore9Clipboard15setAccessPolicyENS_21ClipboardAccessPolicyE(HEAP32[i50 + 12 >> 2] | 0, 1);
     if ((HEAP8[i14] & 1) == 0) {
      i40 = 0;
      i20 = 118;
      break;
     }
     if (HEAP8[H_BASE + 216 | 0] | 0) {
      i51 = HEAP32[H_BASE + 256 >> 2] | 0;
     } else {
      i31 = __Znwj(16) | 0;
      i17 = i31;
      _memset(i31 | 0, 0, 12) | 0;
      HEAP32[i31 >> 2] = 0;
      HEAP32[i31 + 12 >> 2] = 0;
      HEAP32[H_BASE + 256 >> 2] = i17;
      HEAP8[H_BASE + 216 | 0] = 1;
      i51 = i17;
     }
     i17 = __ZNK7WebCore9Clipboard15sourceOperationEv(HEAP32[i51 + 12 >> 2] | 0) | 0;
     if (HEAP8[H_BASE + 216 | 0] | 0) {
      i52 = HEAP32[H_BASE + 256 >> 2] | 0;
     } else {
      i31 = __Znwj(16) | 0;
      i21 = i31;
      _memset(i31 | 0, 0, 12) | 0;
      HEAP32[i31 >> 2] = 0;
      HEAP32[i31 + 12 >> 2] = 0;
      HEAP32[H_BASE + 256 >> 2] = i21;
      HEAP8[H_BASE + 216 | 0] = 1;
      i52 = i21;
     }
     HEAP8[(HEAP32[i52 + 12 >> 2] | 0) + 24 | 0] = 1;
     i40 = i17;
     i20 = 118;
    }
   } while (0);
   do {
    if ((i20 | 0) == 118) {
     if ((HEAP8[i14] & 1) == 0) {
      break;
     }
     i17 = HEAP32[i18 >> 2] | 0;
     i21 = HEAP32[i17 + 32 >> 2] | 0;
     do {
      if ((i21 | 0) == 0) {
       HEAP8[i1 + 412 | 0] = 0;
      } else {
       i31 = HEAP32[i21 + 28 >> 2] | 0;
       if (HEAP8[H_BASE + 216 | 0] | 0) {
        i53 = HEAP32[H_BASE + 256 >> 2] | 0;
       } else {
        i16 = __Znwj(16) | 0;
        i22 = i16;
        _memset(i16 | 0, 0, 12) | 0;
        HEAP32[i16 >> 2] = 0;
        HEAP32[i16 + 12 >> 2] = 0;
        HEAP32[H_BASE + 256 >> 2] = i22;
        HEAP8[H_BASE + 216 | 0] = 1;
        i53 = i22;
       }
       i22 = __ZN7WebCore14DragController9startDragERNS_5FrameERKNS_9DragStateENS_13DragOperationERKNS_18PlatformMouseEventERKNS_8IntPointE(i31, i17, i53, i40, i13, i1 + 300 | 0) | 0;
       HEAP8[i1 + 412 | 0] = i22 & 1;
       if (!i22) {
        break;
       }
       HEAP8[i14] = 0;
       i35 = 1;
       STACKTOP = i4;
       return i35 | 0;
      }
     } while (0);
     if (HEAP8[H_BASE + 216 | 0] | 0) {
      i54 = HEAP32[H_BASE + 256 >> 2] | 0;
     } else {
      i17 = __Znwj(16) | 0;
      i21 = i17;
      _memset(i17 | 0, 0, 12) | 0;
      HEAP32[i17 >> 2] = 0;
      HEAP32[i17 + 12 >> 2] = 0;
      HEAP32[H_BASE + 256 >> 2] = i21;
      HEAP8[H_BASE + 216 | 0] = 1;
      i54 = i21;
     }
     if ((HEAP32[i54 >> 2] | 0) == 0) {
      break;
     }
     if ((HEAP8[i54 + 4 | 0] & 1) == 0) {
      break;
     }
     i21 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 124 | 0;
     __ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, i21, HEAP32[i54 >> 2] | 0, i13, HEAP32[i54 + 12 >> 2] | 0) | 0;
     HEAP8[i14] = 0;
    }
   } while (0);
   if ((HEAP8[i14] & 1) != 0) {
    i35 = 1;
    STACKTOP = i4;
    return i35 | 0;
   }
   __ZN7WebCore12EventHandler13freeClipboardEv(0);
   if (HEAP8[H_BASE + 216 | 0] | 0) {
    i55 = HEAP32[H_BASE + 256 >> 2] | 0;
   } else {
    i18 = __Znwj(16) | 0;
    i21 = i18;
    _memset(i18 | 0, 0, 12) | 0;
    HEAP32[i18 >> 2] = 0;
    HEAP32[i18 + 12 >> 2] = 0;
    HEAP32[H_BASE + 256 >> 2] = i21;
    HEAP8[H_BASE + 216 | 0] = 1;
    i55 = i21;
   }
   i21 = i55 | 0;
   i18 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   if ((i18 | 0) == 0) {
    i35 = 1;
    STACKTOP = i4;
    return i35 | 0;
   }
   i21 = i18 + 8 | 0;
   i18 = i21 | 0;
   i17 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i17;
   if ((i17 | 0) >= 1) {
    i35 = 1;
    STACKTOP = i4;
    return i35 | 0;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    i35 = 1;
    STACKTOP = i4;
    return i35 | 0;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
   i35 = 1;
   STACKTOP = i4;
   return i35 | 0;
  }
 } while (0);
 HEAP8[i1 + 4 | 0] = 0;
 i35 = 0;
 STACKTOP = i4;
 return i35 | 0;
}
function __ZN7WebCoreL12findDropZoneEPNS_4NodeEPNS_9ClipboardE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i3 + 56 | 0;
 i11 = i3 + 64 | 0;
 i12 = i3 + 72 | 0;
 i13 = i3 + 80 | 0;
 i14 = i3 + 88 | 0;
 i15 = i3 + 96 | 0;
 i16 = i3 + 104 | 0;
 i17 = i3 + 112 | 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
   i18 = HEAP32[i1 + 16 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i19 = 0;
    STACKTOP = i3;
    return i19 | 0;
   }
   if ((HEAP32[i18 + 12 >> 2] & 4 | 0) == 0) {
    i19 = 0;
    STACKTOP = i3;
    return i19 | 0;
   } else {
    i20 = i18;
    break;
   }
  } else {
   i20 = i1;
  }
 } while (0);
 if ((i20 | 0) == 0) {
  i19 = 0;
  STACKTOP = i3;
  return i19 | 0;
 }
 i1 = i13 | 0;
 i18 = i14 | 0;
 i21 = i8 | 0;
 i22 = i16 | 0;
 i23 = i15 | 0;
 i24 = i5 | 0;
 i25 = i6 | 0;
 i26 = i7 | 0;
 i27 = i4 + 8 | 0;
 i28 = i4 | 0;
 i29 = i4 + 4 | 0;
 i30 = i12 | 0;
 i31 = i17 | 0;
 i32 = i9 | 0;
 i33 = i10 | 0;
 i34 = i11 | 0;
 i35 = i20;
 L14 : while (1) {
  i20 = HEAP32[i35 + 48 >> 2] | 0;
  L16 : do {
   if ((i20 | 0) == 0) {
    i36 = __ZN3WTF8nullAtomE;
   } else {
    i37 = HEAP32[i20 + 4 >> 2] | 0;
    if ((i37 & 1 | 0) == 0) {
     i38 = i37 >>> 1 & 134217727;
     i39 = i20 + 20 | 0;
    } else {
     i37 = i20 + 24 | 0;
     i38 = HEAP32[i37 + 8 >> 2] | 0;
     i39 = HEAP32[i37 >> 2] | 0;
    }
    if ((i38 | 0) == 0) {
     i36 = __ZN3WTF8nullAtomE;
     break;
    }
    i37 = HEAP32[__ZN7WebCore9HTMLNames18webkitdropzoneAttrE >> 2] | 0;
    i40 = i37 + 12 | 0;
    i41 = i37 + 16 | 0;
    i42 = 0;
    while (1) {
     i43 = i39 + (i42 << 3) | 0;
     i44 = HEAP32[i43 >> 2] | 0;
     if ((i44 | 0) == (i37 | 0)) {
      break;
     }
     if ((HEAP32[i44 + 12 >> 2] | 0) == (HEAP32[i40 >> 2] | 0)) {
      if ((HEAP32[i44 + 16 >> 2] | 0) == (HEAP32[i41 >> 2] | 0)) {
       break;
      }
     }
     i44 = i42 + 1 | 0;
     if (i44 >>> 0 < i38 >>> 0) {
      i42 = i44;
     } else {
      i36 = __ZN3WTF8nullAtomE;
      break L16;
     }
    }
    i36 = (i43 | 0) == 0 ? __ZN3WTF8nullAtomE : i39 + (i42 << 3) + 4 | 0;
   }
  } while (0);
  i20 = HEAP32[i36 >> 2] | 0;
  HEAP32[i1 >> 2] = i20;
  do {
   if ((i20 | 0) != 0) {
    i41 = i20 | 0;
    HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 2;
    i41 = HEAP32[i1 >> 2] | 0;
    if ((i41 | 0) == 0) {
     break;
    }
    do {
     if ((HEAP32[i41 + 4 >> 2] | 0) == 0) {
      i45 = 4;
     } else {
      __ZNK3WTF6String5lowerEv(i14, i13);
      i40 = HEAP32[i18 >> 2] | 0;
      HEAP32[i18 >> 2] = 0;
      i37 = HEAP32[i1 >> 2] | 0;
      HEAP32[i1 >> 2] = i40;
      do {
       if ((i37 | 0) != 0) {
        i40 = i37 | 0;
        i44 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
        if ((i44 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i37);
         break;
        } else {
         HEAP32[i40 >> 2] = i44;
         break;
        }
       }
      } while (0);
      i37 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i37 | 0) != 0) {
        i44 = i37 | 0;
        i40 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
        if ((i40 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i37);
         break;
        } else {
         HEAP32[i44 >> 2] = i40;
         break;
        }
       }
      } while (0);
      i37 = HEAP32[i1 >> 2] | 0;
      do {
       if ((i37 | 0) == 0) {
        HEAP32[i21 >> 2] = 0;
       } else {
        if ((HEAP32[i37 + 16 >> 2] & 16 | 0) == 0) {
         __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i8, i37);
         break;
        } else {
         HEAP32[i21 >> 2] = i37;
         i40 = i37 | 0;
         HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
         break;
        }
       }
      } while (0);
      HEAP32[i22 >> 2] = HEAP32[i21 >> 2];
      HEAP32[i23 >> 2] = 0;
      __ZN7WebCore16SpaceSplitString3setERKN3WTF12AtomicStringEb(i15, i16, 0);
      i37 = HEAP32[i22 >> 2] | 0;
      do {
       if ((i37 | 0) != 0) {
        i40 = i37 | 0;
        i44 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
        if ((i44 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i37);
         break;
        } else {
         HEAP32[i40 >> 2] = i44;
         break;
        }
       }
      } while (0);
      i37 = HEAP32[i23 >> 2] | 0;
      if ((i37 | 0) == 0) {
       i45 = 4;
       break;
      } else {
       i46 = 0;
       i47 = 0;
       i48 = 0;
       i49 = i37;
      }
      while (1) {
       if ((i49 | 0) == 0) {
        i50 = 0;
       } else {
        i50 = HEAP32[i49 + 8 >> 2] | 0;
       }
       if (i46 >>> 0 >= i50 >>> 0) {
        i51 = i47;
        i52 = i48;
        break;
       }
       if ((HEAP32[i49 + 8 >> 2] | 0) >>> 0 <= i46 >>> 0) {
        i53 = 44;
        break L14;
       }
       i37 = i49 + 12 + (i46 << 2) | 0;
       do {
        if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i37 >> 2] | 0, H_BASE + 80 | 0) | 0) {
         i54 = 1;
         i53 = 48;
        } else {
         if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i37 >> 2] | 0, H_BASE + 72 | 0) | 0) {
          i54 = 16;
          i53 = 48;
          break;
         }
         i44 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i37 >> 2] | 0, H_BASE + 64 | 0) | 0;
         if (i44) {
          i54 = i44 ? 2 : 0;
          i53 = 48;
          break;
         }
         if (i48) {
          i55 = i47;
          i56 = 1;
          i53 = 100;
          break;
         }
         i44 = HEAP32[i23 >> 2] | 0;
         if ((HEAP32[i44 + 8 >> 2] | 0) >>> 0 <= i46 >>> 0) {
          i53 = 51;
          break L14;
         }
         i40 = i44 + 12 + (i46 << 2) | 0;
         i44 = i40 | 0;
         i57 = HEAP32[i44 >> 2] | 0;
         if ((i57 | 0) == 0) {
          i58 = 0;
          i59 = i47;
          break;
         }
         if (!(__ZNK3WTF10StringImpl10startsWithEPKcjb(i57, H_BASE + 56 | 0, 5, 1) | 0)) {
          i57 = HEAP32[i44 >> 2] | 0;
          if ((i57 | 0) == 0) {
           i58 = 0;
           i59 = i47;
           break;
          }
          if (!(__ZNK3WTF10StringImpl10startsWithEPKcjb(i57, H_BASE + 48 | 0, 7, 1) | 0)) {
           i58 = 0;
           i59 = i47;
           break;
          }
          __ZNK3WTF6String9substringEjj(i7, i40, 7, -1);
          do {
           if ((HEAP32[i26 >> 2] | 0) == 0) {
            i60 = 0;
           } else {
            __ZNK7WebCore9Clipboard5typesEv(i4, i2);
            i57 = 0;
            while (1) {
             i44 = HEAP32[i27 >> 2] | 0;
             if (i57 >>> 0 >= i44 >>> 0) {
              i61 = -1;
              i62 = i44;
              break;
             }
             if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i28 >> 2] | 0) + (i57 << 2) >> 2] | 0, HEAP32[i26 >> 2] | 0) | 0) {
              i53 = 85;
              break;
             } else {
              i57 = i57 + 1 | 0;
             }
            }
            if ((i53 | 0) == 85) {
             i53 = 0;
             i61 = i57;
             i62 = HEAP32[i27 >> 2] | 0;
            }
            i44 = (i61 | 0) != -1;
            if ((i62 | 0) != 0) {
             i63 = HEAP32[i28 >> 2] | 0;
             i64 = i63 + (i62 << 2) | 0;
             i65 = i63;
             while (1) {
              i63 = HEAP32[i65 >> 2] | 0;
              do {
               if ((i63 | 0) != 0) {
                i66 = i63 | 0;
                i67 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
                if ((i67 | 0) == 0) {
                 __ZN3WTF10StringImpl7destroyEPS0_(i63);
                 break;
                } else {
                 HEAP32[i66 >> 2] = i67;
                 break;
                }
               }
              } while (0);
              i65 = i65 + 4 | 0;
              if ((i65 | 0) == (i64 | 0)) {
               break;
              }
             }
             HEAP32[i27 >> 2] = 0;
            }
            i64 = HEAP32[i28 >> 2] | 0;
            if ((i64 | 0) == 0) {
             i60 = i44;
             break;
            }
            HEAP32[i28 >> 2] = 0;
            HEAP32[i29 >> 2] = 0;
            __ZN3WTF8fastFreeEPv(i64);
            i60 = i44;
           }
          } while (0);
          i64 = HEAP32[i26 >> 2] | 0;
          if ((i64 | 0) == 0) {
           i55 = i47;
           i56 = i60;
           i53 = 100;
           break;
          }
          i65 = i64 | 0;
          i57 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
          if ((i57 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i64);
           i55 = i47;
           i56 = i60;
           i53 = 100;
           break;
          } else {
           HEAP32[i65 >> 2] = i57;
           i55 = i47;
           i56 = i60;
           i53 = 100;
           break;
          }
         }
         __ZNK3WTF6String9substringEjj(i6, i40, 5, -1);
         __ZNK7WebCore9Clipboard5filesEv(i5, i2);
         i57 = HEAP32[i24 >> 2] | 0;
         HEAP32[i24 >> 2] = 0;
         i65 = i57 + 16 | 0;
         i64 = 0;
         while (1) {
          if (i64 >>> 0 >= (HEAP32[i65 >> 2] | 0) >>> 0) {
           i68 = 0;
           i53 = 58;
           break;
          }
          i63 = HEAP32[(__ZNK7WebCore8FileList4itemEj(i57, i64) | 0) + 60 >> 2] | 0;
          if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(i63, HEAP32[i25 >> 2] | 0) | 0) {
           i53 = 57;
           break;
          } else {
           i64 = i64 + 1 | 0;
          }
         }
         if ((i53 | 0) == 57) {
          i53 = 0;
          if ((i57 | 0) == 0) {
           i69 = 1;
          } else {
           i68 = 1;
           i53 = 58;
          }
         }
         do {
          if ((i53 | 0) == 58) {
           i53 = 0;
           i64 = i57 + 4 | 0;
           i65 = i64 | 0;
           i40 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
           if ((i40 | 0) != 0) {
            HEAP32[i65 >> 2] = i40;
            i69 = i68;
            break;
           }
           i40 = i64 - 4 | 0;
           if ((i40 | 0) == 0) {
            i69 = i68;
            break;
           }
           i65 = i64 + 12 | 0;
           i63 = HEAP32[i65 >> 2] | 0;
           i67 = i64 + 4 | 0;
           i66 = i67;
           if ((i63 | 0) != 0) {
            i70 = HEAP32[i66 >> 2] | 0;
            i71 = i70 + (i63 << 2) | 0;
            i63 = i70;
            while (1) {
             i70 = HEAP32[i63 >> 2] | 0;
             do {
              if ((i70 | 0) != 0) {
               i72 = i70 + 8 | 0;
               i73 = i72 | 0;
               i74 = (HEAP32[i73 >> 2] | 0) - 1 | 0;
               if ((i74 | 0) != 0) {
                HEAP32[i73 >> 2] = i74;
                break;
               }
               i74 = i72 - 8 | 0;
               if ((i74 | 0) == 0) {
                break;
               }
               FUNCTION_TABLE_vi[HEAP32[(HEAP32[i74 >> 2] | 0) + 4 >> 2] & 15](i74);
              }
             } while (0);
             i63 = i63 + 4 | 0;
             if ((i63 | 0) == (i71 | 0)) {
              break;
             }
            }
            HEAP32[i65 >> 2] = 0;
           }
           i71 = HEAP32[i66 >> 2] | 0;
           if ((i71 | 0) != 0) {
            HEAP32[i67 >> 2] = 0;
            HEAP32[i64 + 8 >> 2] = 0;
            __ZN3WTF8fastFreeEPv(i71);
           }
           i71 = i40;
           if ((HEAP32[i71 >> 2] | 0) != 0) {
            __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i71);
           }
           __ZN3WTF8fastFreeEPv(i40);
           i69 = i68;
          }
         } while (0);
         i57 = HEAP32[i25 >> 2] | 0;
         if ((i57 | 0) == 0) {
          i55 = i47;
          i56 = i69;
          i53 = 100;
          break;
         }
         i71 = i57 | 0;
         i63 = (HEAP32[i71 >> 2] | 0) - 2 | 0;
         if ((i63 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i57);
          i55 = i47;
          i56 = i69;
          i53 = 100;
          break;
         } else {
          HEAP32[i71 >> 2] = i63;
          i55 = i47;
          i56 = i69;
          i53 = 100;
          break;
         }
        }
       } while (0);
       if ((i53 | 0) == 48) {
        i53 = 0;
        i55 = (i47 | 0) == 0 ? i54 : i47;
        i56 = i48;
        i53 = 100;
       }
       if ((i53 | 0) == 100) {
        i53 = 0;
        if ((i55 | 0) == 0 | i56 ^ 1) {
         i58 = i56;
         i59 = i55;
        } else {
         i51 = i55;
         i52 = i56;
         break;
        }
       }
       i46 = i46 + 1 | 0;
       i47 = i59;
       i48 = i58;
       i49 = HEAP32[i23 >> 2] | 0;
      }
      do {
       if (i52) {
        if ((i51 | 0) == 1) {
         HEAP32[i32 >> 2] = H_BASE + 80;
         __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i9);
        } else if ((i51 | 0) == 16) {
         HEAP32[i33 >> 2] = H_BASE + 72;
         __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i10);
        } else if ((i51 | 0) == 2) {
         HEAP32[i34 >> 2] = H_BASE + 64;
         __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i11);
        } else {
         HEAP32[i30 >> 2] = H_BASE + 80;
         __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i12);
        }
        __ZN7WebCore9Clipboard13setDropEffectERKN3WTF6StringE(i2, i17);
        i37 = HEAP32[i31 >> 2] | 0;
        if ((i37 | 0) == 0) {
         i75 = 1;
         break;
        }
        i63 = i37 | 0;
        i71 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
        if ((i71 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i37);
         i75 = 1;
         break;
        } else {
         HEAP32[i63 >> 2] = i71;
         i75 = 1;
         break;
        }
       } else {
        i75 = 0;
       }
      } while (0);
      i71 = HEAP32[i23 >> 2] | 0;
      if ((i71 | 0) == 0) {
       i45 = i75;
       break;
      }
      i63 = i71 + 4 | 0;
      i37 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
      if ((i37 | 0) == 0) {
       __ZN7WebCore20SpaceSplitStringData7destroyEPS0_(i71);
       i45 = i75;
       break;
      } else {
       HEAP32[i63 >> 2] = i37;
       i45 = i75;
       break;
      }
     }
    } while (0);
    i41 = HEAP32[i1 >> 2] | 0;
    do {
     if ((i41 | 0) != 0) {
      i42 = i41 | 0;
      i37 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
      if ((i37 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i41);
       break;
      } else {
       HEAP32[i42 >> 2] = i37;
       break;
      }
     }
    } while (0);
    if ((i45 | 0) == 1) {
     i19 = 1;
     i53 = 128;
     break L14;
    }
   }
  } while (0);
  i20 = HEAP32[i35 + 16 >> 2] | 0;
  if ((i20 | 0) == 0) {
   i19 = 0;
   i53 = 129;
   break;
  }
  if ((HEAP32[i20 + 12 >> 2] & 4 | 0) == 0) {
   i19 = 0;
   i53 = 131;
   break;
  }
  if ((i20 | 0) == 0) {
   i19 = 0;
   i53 = 130;
   break;
  } else {
   i35 = i20;
  }
 }
 if ((i53 | 0) == 128) {
  STACKTOP = i3;
  return i19 | 0;
 } else if ((i53 | 0) == 129) {
  STACKTOP = i3;
  return i19 | 0;
 } else if ((i53 | 0) == 130) {
  STACKTOP = i3;
  return i19 | 0;
 } else if ((i53 | 0) == 131) {
  STACKTOP = i3;
  return i19 | 0;
 } else if ((i53 | 0) == 51) {
  _WTFCrash();
  return 0;
 } else if ((i53 | 0) == 44) {
  _WTFCrash();
  return 0;
 }
 return 0;
}
function __ZN7WebCore12EventHandler12selectCursorERKNS_13HitTestResultEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, d35 = +0, i36 = 0, i37 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = HEAP32[i2 + 220 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   if ((HEAP8[i14 + 20 | 0] & 1) == 0) {
    break;
   }
   HEAP8[i1 | 0] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i14 = i2 | 0;
 if ((HEAP32[(HEAP32[i14 >> 2] | 0) + 32 >> 2] | 0) == 0) {
  HEAP8[i1 | 0] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i15 = __ZNK7WebCore13HitTestResult10targetNodeEv(i3) | 0;
 if ((i15 | 0) == 0) {
  HEAP8[i1 | 0] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i16 = i15 + 12 | 0;
 i17 = i15 + 32 | 0;
 if ((HEAP32[i16 >> 2] & 2048 | 0) == 0) {
  i18 = i17 | 0;
 } else {
  i18 = HEAP32[i17 >> 2] | 0;
 }
 i17 = HEAP32[i18 >> 2] | 0;
 i18 = (i17 | 0) != 0;
 do {
  if (i18) {
   if ((HEAP32[i17 + 20 >> 2] & 768 | 0) == 256) {
    i19 = HEAP32[(HEAP32[i17 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i19 = HEAP32[i17 + 36 >> 2] | 0;
   }
   if ((i19 | 0) == 0) {
    i20 = 19;
    break;
   }
   i21 = (HEAP32[i19 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    i22 = __ZN7WebCore11iBeamCursorEv() | 0;
   } else {
    i22 = __ZN7WebCore18verticalTextCursorEv() | 0;
   }
   if ((HEAP32[i19 + 40 >> 2] & 536870912 | 0) == 0) {
    i23 = 1;
    i24 = i19;
    i25 = i22;
    i20 = 24;
    break;
   }
   __ZN7WebCore15FeatureObserver7observeEPNS_8DocumentENS0_7FeatureE(HEAP32[(HEAP32[i14 >> 2] | 0) + 456 >> 2] | 0, 56);
   i21 = HEAP32[(HEAP32[i14 >> 2] | 0) + 32 >> 2] | 0;
   if ((i21 | 0) == 0) {
    i26 = 1;
    i27 = i19;
    i28 = i22;
    break;
   }
   __ZN7WebCore9TimerBase5startEdd(i2 + 416 | 0, +HEAPF64[(HEAP32[i21 + 48 >> 2] | 0) + 200 >> 3], +0);
   if (+HEAPF64[i2 + 160 >> 3] == +0) {
    i26 = 1;
    i27 = i19;
    i28 = i22;
    break;
   }
   __ZN7WebCore9TimerBase4stopEv(i2 + 152 | 0);
   i26 = 1;
   i27 = i19;
   i28 = i22;
  } else {
   i20 = 19;
  }
 } while (0);
 if ((i20 | 0) == 19) {
  i23 = 0;
  i24 = 0;
  i25 = __ZN7WebCore11iBeamCursorEv() | 0;
  i20 = 24;
 }
 do {
  if ((i20 | 0) == 24) {
   if (+HEAPF64[i2 + 424 >> 3] == +0) {
    i26 = i23;
    i27 = i24;
    i28 = i25;
    break;
   }
   __ZN7WebCore9TimerBase4stopEv(i2 + 416 | 0);
   i26 = i23;
   i27 = i24;
   i28 = i25;
  }
 } while (0);
 do {
  if (i18) {
   HEAP32[i6 >> 2] = 0;
   i25 = HEAP32[(HEAP32[i17 >> 2] | 0) + 496 >> 2] | 0;
   i24 = HEAP32[i3 + 92 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i3 + 88 >> 2];
   HEAP32[i7 + 4 >> 2] = i24;
   i24 = FUNCTION_TABLE_iiii[i25 & 1](i17, i7, i6) | 0;
   if ((i24 | 0) == 1) {
    HEAP8[i1 | 0] = 1;
    __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
    __ZN7WebCore6CursorD1Ev(i6);
    STACKTOP = i5;
    return;
   } else if ((i24 | 0) == 2) {
    HEAP8[i1 | 0] = 0;
    HEAP32[i1 + 4 >> 2] = 0;
    __ZN7WebCore6CursorD1Ev(i6);
    STACKTOP = i5;
    return;
   } else {
    __ZN7WebCore6CursorD1Ev(i6);
    break;
   }
  }
 } while (0);
 L47 : do {
  if (i26) {
   i6 = HEAP32[(HEAP32[i27 + 24 >> 2] | 0) + 68 >> 2] | 0;
   L49 : do {
    if ((i6 | 0) != 0) {
     i7 = i6 + 12 | 0;
     if ((HEAP32[i7 >> 2] | 0) == 0) {
      break;
     }
     i24 = i6 + 4 | 0;
     i25 = i8;
     i23 = i9 + 4 | 0;
     i22 = i10 | 0;
     i19 = i10 + 4 | 0;
     i21 = 0;
     L52 : while (1) {
      i29 = HEAP32[(HEAP32[i24 >> 2] | 0) + (i21 * 12 & -1) >> 2] | 0;
      do {
       if ((i29 | 0) != 0) {
        i30 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 72 >> 2] & 1](i29) | 0;
        if ((i30 | 0) == 0) {
         break;
        }
        d31 = +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i29 >> 2] | 0) + 64 >> 2] & 1](i29);
        if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i21 >>> 0) {
         i20 = 38;
         break L52;
        }
        i32 = (HEAP32[i24 >> 2] | 0) + (i21 * 12 & -1) + 4 | 0;
        i33 = HEAP32[i32 >> 2] | 0;
        i34 = HEAP32[i32 + 4 >> 2] | 0;
        HEAP32[i8 >> 2] = i33;
        HEAP32[i8 + 4 >> 2] = i34;
        HEAP32[i25 >> 2] = _round(+(d31 * +(i33 | 0))) | 0;
        HEAP32[i23 >> 2] = _round(+(d31 * +(i34 | 0))) | 0;
        i34 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i30, i17) | 0;
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i34 >> 2] | 0) + 48 >> 2] & 15](i10, i34);
        if ((((HEAP32[i30 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
         break;
        }
        d35 = +1 / d31;
        i34 = ~~(d35 * +(HEAP32[i22 >> 2] | 0));
        HEAP32[i22 >> 2] = i34;
        i33 = ~~(d35 * +(HEAP32[i19 >> 2] | 0));
        HEAP32[i19 >> 2] = i33;
        if (!((i34 | 0) > 128 | (i33 | 0) > 128)) {
         break L52;
        }
       }
      } while (0);
      i21 = i21 + 1 | 0;
      if (i21 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
       break L49;
      }
     }
     if ((i20 | 0) == 38) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     __ZN7WebCore6CursorC1EPNS_5ImageERKNS_8IntPointE(i11, __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i30, i17) | 0, i9);
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i11);
     __ZN7WebCore6CursorD1Ev(i11);
     STACKTOP = i5;
     return;
    }
   } while (0);
   switch ((HEAP32[i27 + 40 >> 2] | 0) >>> 23 & 63 | 0) {
   case 0:
    {
     break L47;
     break;
    }
   case 27:
    {
     i6 = __ZN7WebCore15rowResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 28:
    {
     i6 = __ZN7WebCore11iBeamCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 29:
    {
     i6 = __ZN7WebCore10waitCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 30:
    {
     i6 = __ZN7WebCore10helpCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 5:
    {
     i6 = __ZN7WebCore18verticalTextCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 6:
    {
     i6 = __ZN7WebCore10cellCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 7:
    {
     i6 = __ZN7WebCore17contextMenuCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 3:
    {
     i6 = __ZN7WebCore10handCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 4:
    {
     i6 = __ZN7WebCore10moveCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 31:
    {
     i6 = __ZN7WebCore10moveCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 14:
    {
     i6 = __ZN7WebCore16eastResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 21:
    {
     i6 = __ZN7WebCore16westResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 18:
    {
     i6 = __ZN7WebCore21southEastResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 23:
    {
     i6 = __ZN7WebCore22northSouthResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 22:
    {
     i6 = __ZN7WebCore20eastWestResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 24:
    {
     i6 = __ZN7WebCore30northEastSouthWestResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 25:
    {
     i6 = __ZN7WebCore30northWestSouthEastResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 26:
    {
     i6 = __ZN7WebCore18columnResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 1:
    {
     i6 = __ZN7WebCore11crossCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 17:
    {
     i6 = __ZN7WebCore17northResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 20:
    {
     i6 = __ZN7WebCore17southResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 15:
    {
     i6 = __ZN7WebCore21northEastResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 19:
    {
     i6 = __ZN7WebCore21southWestResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 16:
    {
     i6 = __ZN7WebCore21northWestResizeCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 32:
    {
     i6 = __ZN7WebCore10grabCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 33:
    {
     i6 = __ZN7WebCore14grabbingCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 9:
    {
     i6 = __ZN7WebCore14progressCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 10:
    {
     i6 = __ZN7WebCore12noDropCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 8:
    {
     i6 = __ZN7WebCore11aliasCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 34:
    {
     i6 = __ZN7WebCore10copyCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 35:
    {
     i6 = __ZN7WebCore10noneCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 11:
    {
     i6 = __ZN7WebCore16notAllowedCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 2:
    {
     i6 = __ZN7WebCore13pointerCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 12:
    {
     i6 = __ZN7WebCore12zoomInCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   case 13:
    {
     i6 = __ZN7WebCore13zoomOutCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   default:
    {
     i6 = __ZN7WebCore13pointerCursorEv() | 0;
     HEAP8[i1 | 0] = 1;
     __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i6);
     STACKTOP = i5;
     return;
    }
   }
  }
 } while (0);
 i27 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i15, 0, 1) | 0;
 i11 = __ZNK7WebCore13HitTestResult10isOverLinkEv(i3) | 0;
 i9 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i15, 0, 1) | 0;
 do {
  if (i9) {
   i30 = HEAP32[i14 >> 2] | 0;
   i10 = HEAP32[(HEAP32[i30 + 36 >> 2] | 0) + 104 >> 2] | 0;
   if ((i10 | 0) == 4) {
    i36 = 0;
    break;
   } else if ((i10 | 0) == 3) {
    i8 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[i30 + 468 >> 2] | 0) + 32 | 0) | 0;
    i36 = (i8 | 0) != (__ZNK7WebCore4Node19rootEditableElementEv(i15) | 0) | i4;
    break;
   } else if ((i10 | 0) == 2) {
    i36 = i4;
    break;
   } else {
    i36 = 1;
    break;
   }
  } else {
   i36 = 0;
  }
 } while (0);
 do {
  if (i11) {
   i20 = 53;
  } else {
   if ((HEAP32[i16 >> 2] & 16 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i15 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if (__ZNK7WebCore16HTMLInputElement13isImageButtonEv(i15) | 0) {
    i20 = 53;
   }
  }
 } while (0);
 do {
  if ((i20 | 0) == 53) {
   if (!(i36 | i9 ^ 1)) {
    break;
   }
   i16 = __ZN7WebCore10handCursorEv() | 0;
   HEAP8[i1 | 0] = 1;
   __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i16);
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if (i18) {
   i9 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i17) | 0;
   if ((i9 | 0) == 0) {
    i37 = 0;
    break;
   }
   i36 = HEAP32[(HEAP32[i14 >> 2] | 0) + 452 >> 2] | 0;
   if ((i36 | 0) == 0) {
    i37 = 0;
    break;
   }
   i16 = HEAP32[i3 + 92 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i3 + 88 >> 2];
   HEAP32[i13 + 4 >> 2] = i16;
   __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i12, i36 | 0, i13);
   i37 = __ZNK7WebCore11RenderLayer22isPointInResizeControlERKNS_8IntPointE(i9, i12) | 0;
  } else {
   i37 = 0;
  }
 } while (0);
 do {
  if ((HEAP8[i2 + 4 | 0] & 1) != 0) {
   if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
    break;
   }
   if ((HEAP8[i2 + 13 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 468 >> 2] | 0) + 84 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP32[i2 + 224 >> 2] | 0) != 0) {
    break;
   }
   HEAP8[i1 | 0] = 1;
   __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i28);
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if (i27) {
   if (!i37) {
    i20 = 70;
   }
  } else {
   if (!i18) {
    break;
   }
   if ((HEAP32[i17 + 20 >> 2] & 768 | 0) != 256) {
    break;
   }
   if (!(i37 | (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 172 >> 2] & 1](i15) | 0) ^ 1)) {
    i20 = 70;
   }
  }
 } while (0);
 do {
  if ((i20 | 0) == 70) {
   if ((HEAP32[i3 + 100 >> 2] | 0) != 0) {
    break;
   }
   HEAP8[i1 | 0] = 1;
   __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i28);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i28 = __ZN7WebCore13pointerCursorEv() | 0;
 HEAP8[i1 | 0] = 1;
 __ZN7WebCore6CursorC1ERKS0_(i1 + 4 | 0, i28);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12EventHandler26updateMouseEventTargetNodeEPNS_4NodeERKNS_18PlatformMouseEventEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = HEAP32[i1 + 224 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   if ((i2 | 0) == 0) {
    i9 = 0;
    i10 = i1 + 232 | 0;
    break;
   }
   if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
    i11 = __ZNK7WebCore4Node25parentOrShadowHostElementEv(i2) | 0;
   } else {
    i11 = i2;
   }
   i12 = i1 + 232 | 0;
   if ((i11 | 0) == 0) {
    i9 = 0;
    i10 = i12;
   } else {
    i13 = i11;
    i14 = i12;
    i15 = 9;
   }
  } else {
   i13 = i8;
   i14 = i1 + 232 | 0;
   i15 = 9;
  }
 } while (0);
 if ((i15 | 0) == 9) {
  i8 = i13 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i9 = i13;
  i10 = i14;
 }
 i14 = i10 | 0;
 i10 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = i9;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 + 8 | 0;
   i8 = i13 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i10 = i9 | 0;
 do {
  if ((i9 | 0) == 0) {
   i16 = 0;
  } else {
   if ((HEAP32[i9 + 12 >> 2] & 32 | 0) == 0) {
    i16 = 0;
    break;
   }
   i13 = __ZNK7WebCore4Node20containingShadowRootEv(i10) | 0;
   if ((i13 | 0) == 0) {
    i16 = 0;
    break;
   }
   i11 = HEAP32[i13 + 92 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i16 = 0;
    break;
   }
   i13 = HEAP32[i11 + 44 >> 2] | 0;
   i8 = HEAP32[__ZN7WebCore8SVGNames6useTagE >> 2] | 0;
   if ((i13 | 0) != (i8 | 0)) {
    if ((HEAP32[i13 + 12 >> 2] | 0) != (HEAP32[i8 + 12 >> 2] | 0)) {
     i16 = 0;
     break;
    }
    if ((HEAP32[i13 + 16 >> 2] | 0) != (HEAP32[i8 + 16 >> 2] | 0)) {
     i16 = 0;
     break;
    }
   }
   i8 = __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeE(i11, i10) | 0;
   if ((i8 | 0) == 0) {
    i16 = 0;
    break;
   }
   i11 = i8 + 4 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   i16 = i8;
  }
 } while (0);
 i10 = i1 + 212 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i16;
 do {
  if ((i9 | 0) != 0) {
   i16 = i9 + 4 | 0;
   i10 = i16 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i16 + 4 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore18SVGElementInstance14removedLastRefEv(i16 - 4 | 0);
  }
 } while (0);
 i9 = i1 + 216 | 0;
 i16 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i8 = HEAP32[i16 + 20 >> 2] | 0;
   i10 = HEAP32[i16 + 12 >> 2] | 0;
   if ((i8 | 0) == 0 | (i10 | 0) == 0) {
    break;
   }
   i11 = __ZNK7WebCore10SVGElement19instancesForElementEv(i8) | 0;
   i8 = i7 | 0;
   _memset(i7 | 0, 0, 20) | 0;
   i13 = HEAP32[i11 >> 2] | 0;
   i2 = HEAP32[i11 + 4 >> 2] | 0;
   i12 = i13 + (i2 << 2) | 0;
   L38 : do {
    if ((HEAP32[i11 + 12 >> 2] | 0) != 0) {
     L40 : do {
      if ((i2 | 0) == 0) {
       i17 = i13;
      } else {
       i18 = i13;
       while (1) {
        i19 = HEAP32[i18 >> 2] | 0;
        if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
         i17 = i18;
         break L40;
        }
        i18 = i18 + 4 | 0;
        if ((i18 | 0) == (i12 | 0)) {
         break L38;
        }
       }
      }
     } while (0);
     if ((i17 | 0) == (i12 | 0)) {
      break;
     } else {
      i20 = i17;
     }
     while (1) {
      __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i6, i8, i20, i20);
      i18 = i20 + 4 | 0;
      if ((i18 | 0) == (i12 | 0)) {
       break L38;
      } else {
       i21 = i18;
      }
      while (1) {
       i18 = HEAP32[i21 >> 2] | 0;
       if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
        break;
       }
       i18 = i21 + 4 | 0;
       if ((i18 | 0) == (i12 | 0)) {
        break L38;
       } else {
        i21 = i18;
       }
      }
      if ((i21 | 0) == (i12 | 0)) {
       break;
      } else {
       i20 = i21;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   i13 = i12 + (i8 << 2) | 0;
   L52 : do {
    if ((HEAP32[i7 + 12 >> 2] | 0) != 0) {
     L54 : do {
      if ((i8 | 0) == 0) {
       i22 = i12;
      } else {
       i2 = i12;
       while (1) {
        i11 = HEAP32[i2 >> 2] | 0;
        if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
         i22 = i2;
         break L54;
        }
        i2 = i2 + 4 | 0;
        if ((i2 | 0) == (i13 | 0)) {
         break L52;
        }
       }
      }
     } while (0);
     if ((i22 | 0) == (i13 | 0)) {
      break;
     }
     i2 = HEAP32[i9 >> 2] | 0;
     i11 = i1 + 236 | 0;
     i18 = i22;
     L60 : while (1) {
      i23 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i2 | 0) != (i23 | 0)) {
        if ((HEAP32[i23 + 12 >> 2] | 0) != (i10 | 0)) {
         break;
        }
        i24 = HEAP32[i23 + 24 >> 2] | 0;
        if ((HEAP32[i24 + 12 >> 2] & 256 | 0) == 0) {
         break;
        }
        i25 = HEAP32[i11 >> 2] | 0;
        i26 = i24 | 0;
        if ((i25 | 0) != (i26 | 0)) {
         break L60;
        }
       }
      } while (0);
      i19 = i18 + 4 | 0;
      if ((i19 | 0) == (i13 | 0)) {
       break L52;
      } else {
       i27 = i19;
      }
      while (1) {
       i19 = HEAP32[i27 >> 2] | 0;
       if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
        break;
       }
       i19 = i27 + 4 | 0;
       if ((i19 | 0) == (i13 | 0)) {
        break L52;
       } else {
        i27 = i19;
       }
      }
      if ((i27 | 0) == (i13 | 0)) {
       break L52;
      } else {
       i18 = i27;
      }
     }
     if ((i24 | 0) == 0) {
      i28 = i25;
     } else {
      i18 = i24 + 8 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
      i28 = HEAP32[i11 >> 2] | 0;
     }
     HEAP32[i11 >> 2] = i26;
     do {
      if ((i28 | 0) != 0) {
       i18 = i28 + 8 | 0;
       i2 = i18 | 0;
       i19 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
       HEAP32[i2 >> 2] = i19;
       if ((i19 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
      }
     } while (0);
     if ((i23 | 0) != 0) {
      i11 = i23 + 4 | 0;
      HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
     }
     i11 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i23;
     if ((i11 | 0) == 0) {
      break;
     }
     i18 = i11 + 4 | 0;
     i11 = i18 | 0;
     i19 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     HEAP32[i11 >> 2] = i19;
     if ((i19 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 4 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore18SVGElementInstance14removedLastRefEv(i18 - 4 | 0);
    }
   } while (0);
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i12);
  }
 } while (0);
 if (!i4) {
  STACKTOP = i5;
  return;
 }
 i4 = i1 + 236 | 0;
 i23 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i23 | 0) == 0) {
   i29 = 0;
  } else {
   i28 = i23 + 32 | 0;
   if ((HEAP32[i23 + 12 >> 2] & 2048 | 0) == 0) {
    i30 = i28 | 0;
   } else {
    i30 = HEAP32[i28 >> 2] | 0;
   }
   i28 = HEAP32[i30 >> 2] | 0;
   if ((i28 | 0) == 0) {
    i29 = 0;
    break;
   }
   i29 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i28) | 0;
  }
 } while (0);
 i30 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i30 | 0) == 0) {
   i31 = 0;
  } else {
   i23 = i30 + 32 | 0;
   if ((HEAP32[i30 + 12 >> 2] & 2048 | 0) == 0) {
    i32 = i23 | 0;
   } else {
    i32 = HEAP32[i23 >> 2] | 0;
   }
   i23 = HEAP32[i32 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i31 = 0;
    break;
   }
   i31 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i23) | 0;
  }
 } while (0);
 i32 = i1 | 0;
 i30 = HEAP32[i32 >> 2] | 0;
 i23 = HEAP32[i30 + 32 >> 2] | 0;
 i28 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i28 | 0) == 0) {
   i15 = 85;
  } else {
   i26 = HEAP32[i14 >> 2] | 0;
   if ((i26 | 0) != 0) {
    if ((HEAP32[(HEAP32[i26 + 20 >> 2] | 0) + 8 >> 2] | 0) == (HEAP32[i30 + 456 >> 2] | 0)) {
     i15 = 85;
     break;
    }
   }
   i26 = HEAP32[(HEAP32[(HEAP32[i28 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   i24 = HEAP32[i26 + 452 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   __ZNK7WebCore14ScrollableArea22mouseExitedContentAreaEv(i24 + 36 | 0);
  }
 } while (0);
 do {
  if ((i15 | 0) == 85) {
   if ((i23 | 0) == 0 | (i29 | 0) == 0) {
    break;
   }
   if ((i31 | 0) != 0 & (i31 | 0) == (i29 | 0)) {
    break;
   }
   i30 = HEAP32[(HEAP32[(HEAP32[i28 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   i24 = HEAP32[i30 + 452 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i30 = i29 | 0;
   if (!(__ZNK7WebCore9FrameView22containsScrollableAreaEPNS_14ScrollableAreaE(i24, i30) | 0)) {
    break;
   }
   __ZNK7WebCore14ScrollableArea22mouseExitedContentAreaEv(i30);
  }
 } while (0);
 i28 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i28 | 0) == 0) {
   i15 = 97;
  } else {
   i30 = HEAP32[i4 >> 2] | 0;
   if ((i30 | 0) != 0) {
    if ((HEAP32[(HEAP32[i30 + 20 >> 2] | 0) + 8 >> 2] | 0) == (HEAP32[(HEAP32[i32 >> 2] | 0) + 456 >> 2] | 0)) {
     i15 = 97;
     break;
    }
   }
   i30 = HEAP32[(HEAP32[(HEAP32[i28 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   i24 = HEAP32[i30 + 452 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   __ZNK7WebCore14ScrollableArea23mouseEnteredContentAreaEv(i24 + 36 | 0);
  }
 } while (0);
 do {
  if ((i15 | 0) == 97) {
   if ((i23 | 0) == 0 | (i31 | 0) == 0) {
    break;
   }
   if ((i29 | 0) != 0 & (i31 | 0) == (i29 | 0)) {
    break;
   }
   i24 = HEAP32[(HEAP32[(HEAP32[i28 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i30 = HEAP32[i24 + 452 >> 2] | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   i24 = i31 | 0;
   if (!(__ZNK7WebCore9FrameView22containsScrollableAreaEPNS_14ScrollableAreaE(i30, i24) | 0)) {
    break;
   }
   __ZNK7WebCore14ScrollableArea23mouseEnteredContentAreaEv(i24);
  }
 } while (0);
 i31 = HEAP32[i4 >> 2] | 0;
 if ((i31 | 0) == 0) {
  i33 = 0;
 } else {
  do {
   if ((HEAP32[(HEAP32[i31 + 20 >> 2] | 0) + 8 >> 2] | 0) != (HEAP32[(HEAP32[i32 >> 2] | 0) + 456 >> 2] | 0)) {
    HEAP32[i4 >> 2] = 0;
    i28 = i31 + 8 | 0;
    i29 = i28 - 8 | 0;
    i23 = i28 | 0;
    i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    HEAP32[i23 >> 2] = i24;
    do {
     if ((i24 | 0) < 1) {
      if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i29);
     }
    } while (0);
    i29 = i1 + 244 | 0;
    i28 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = 0;
    do {
     if ((i28 | 0) != 0) {
      i29 = i28 + 4 | 0;
      i24 = i29 | 0;
      i12 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      if ((i12 | 0) != 0) {
       HEAP32[i24 >> 2] = i12;
       break;
      }
      i12 = i29 - 4 | 0;
      if ((i12 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
     }
    } while (0);
    i28 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    if ((i28 | 0) == 0) {
     break;
    }
    i12 = i28 + 4 | 0;
    i28 = i12 | 0;
    i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
    HEAP32[i28 >> 2] = i29;
    if ((i29 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i12 + 4 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore18SVGElementInstance14removedLastRefEv(i12 - 4 | 0);
   }
  } while (0);
  i33 = HEAP32[i4 >> 2] | 0;
 }
 i1 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i33 | 0) == (i1 | 0)) {
   i34 = i33;
   i15 = 123;
  } else {
   if ((i33 | 0) == 0) {
    i35 = i1;
   } else {
    __ZN7WebCore7Element18dispatchMouseEventERKNS_18PlatformMouseEventERKN3WTF12AtomicStringEiPS0_(i33, i3, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 248 | 0, 0, i1) | 0;
    i35 = HEAP32[i14 >> 2] | 0;
   }
   if ((i35 | 0) == 0) {
    i36 = 0;
    break;
   }
   i31 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 252 | 0;
   __ZN7WebCore7Element18dispatchMouseEventERKNS_18PlatformMouseEventERKN3WTF12AtomicStringEiPS0_(i35, i3, i31, 0, HEAP32[i4 >> 2] | 0) | 0;
   i34 = HEAP32[i14 >> 2] | 0;
   i15 = 123;
  }
 } while (0);
 do {
  if ((i15 | 0) == 123) {
   if ((i34 | 0) == 0) {
    i36 = 0;
    break;
   }
   i3 = i34 + 8 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   i36 = i34;
  }
 } while (0);
 i34 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i36;
 do {
  if ((i34 | 0) != 0) {
   i36 = i34 + 8 | 0;
   i4 = i36 | 0;
   i15 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i36 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i36 - 8 | 0);
  }
 } while (0);
 i34 = HEAP32[i14 >> 2] | 0;
 i14 = i34 | 0;
 do {
  if ((i34 | 0) == 0) {
   i37 = 0;
  } else {
   if ((HEAP32[i34 + 12 >> 2] & 32 | 0) == 0) {
    i37 = 0;
    break;
   }
   i36 = __ZNK7WebCore4Node20containingShadowRootEv(i14) | 0;
   if ((i36 | 0) == 0) {
    i37 = 0;
    break;
   }
   i15 = HEAP32[i36 + 92 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i37 = 0;
    break;
   }
   i36 = HEAP32[i15 + 44 >> 2] | 0;
   i4 = HEAP32[__ZN7WebCore8SVGNames6useTagE >> 2] | 0;
   if ((i36 | 0) != (i4 | 0)) {
    if ((HEAP32[i36 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
     i37 = 0;
     break;
    }
    if ((HEAP32[i36 + 16 >> 2] | 0) != (HEAP32[i4 + 16 >> 2] | 0)) {
     i37 = 0;
     break;
    }
   }
   i4 = __ZNK7WebCore13SVGUseElement28instanceForShadowTreeElementEPNS_4NodeE(i15, i14) | 0;
   if ((i4 | 0) == 0) {
    i37 = 0;
    break;
   }
   i15 = i4 + 4 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   i37 = i4;
  }
 } while (0);
 i14 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i37;
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i37 = i14 + 4 | 0;
 i14 = i37 | 0;
 i9 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i37 + 4 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore18SVGElementInstance14removedLastRefEv(i37 - 4 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12EventHandler20handleMouseMoveEventERKNS_18PlatformMouseEventEPNS_13HitTestResultEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 200 | 0;
 i13 = i1 | 0;
 i14 = HEAP32[(HEAP32[i13 >> 2] | 0) + 452 >> 2] | 0;
 i15 = (i14 | 0) != 0;
 if (i15) {
  i16 = i14 + 4 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 HEAP8[i1 + 280 | 0] = 0;
 i16 = i1 + 284 | 0;
 i17 = i2 + 16 | 0;
 i18 = i17;
 i19 = i16;
 i20 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i19 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i19 + 4 >> 2] = i20;
 i20 = i2 + 24 | 0;
 i19 = i1 + 292 | 0;
 i21 = HEAP32[i20 + 4 >> 2] | 0;
 HEAP32[i19 >> 2] = HEAP32[i20 >> 2];
 HEAP32[i19 + 4 >> 2] = i21;
 if (+HEAPF64[i1 + 40 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i1 + 32 | 0);
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 88 | 0);
 __ZN7WebCore9TimerBase4stopEv(i1 + 152 | 0);
 L7 : do {
  if ((HEAP8[i1 + 208 | 0] & 1) == 0) {
   i21 = HEAP32[i1 + 268 >> 2] | 0;
   if ((i21 | 0) != 0) {
    i22 = (__ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 244 | 0, i21 | 0, 0, 0, i2, 0) | 0) ^ 1;
    break;
   }
   i21 = i1 + 244 | 0;
   i19 = HEAP32[i21 >> 2] | 0;
   i20 = HEAP8[i1 + 4 | 0] | 0;
   do {
    if ((i19 | 0) != 0) {
     if ((i20 & 1) == 0) {
      break;
     }
     i22 = __ZN7WebCore9Scrollbar10mouseMovedERKNS_18PlatformMouseEventE(i19, i2) | 0;
     break L7;
    }
   } while (0);
   i19 = i1 + 4 | 0;
   if ((i20 & 1) == 0) {
    i23 = i4 ? 778 : 776;
   } else {
    i23 = 780;
   }
   HEAP32[i10 >> 2] = i23;
   i24 = HEAP32[i13 >> 2] | 0;
   i25 = HEAP32[i24 + 456 >> 2] | 0;
   i26 = HEAP32[i24 + 452 >> 2] | 0;
   i24 = i6;
   if ((i26 | 0) == 0) {
    i27 = HEAP32[i18 >> 2] | 0;
    i28 = HEAP32[i18 + 4 >> 2] | 0;
    HEAP32[i6 >> 2] = i27;
    HEAP32[i6 + 4 >> 2] = i28;
    i29 = i27;
    i30 = i28;
   } else {
    __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i24, i26 | 0, i17);
    i29 = HEAP32[i6 >> 2] | 0;
    i30 = HEAP32[i24 + 4 >> 2] | 0;
   }
   HEAP32[i7 >> 2] = i29;
   HEAP32[i7 + 4 >> 2] = i30;
   __ZN7WebCore8Document17prepareMouseEventERKNS_14HitTestRequestERKNS_11LayoutPointERKNS_18PlatformMouseEventE(i11, i25, i10, i7, i2);
   if ((i3 | 0) != 0) {
    __ZN7WebCore13HitTestResultaSERKS0_(i3, i11 + 48 | 0) | 0;
   }
   i25 = HEAP32[i1 + 220 >> 2] | 0;
   do {
    if ((i25 | 0) == 0) {
     i31 = 22;
    } else {
     if ((HEAP8[i25 + 20 | 0] & 1) == 0) {
      i31 = 22;
      break;
     }
     __ZN7WebCore11RenderLayer6resizeERKNS_18PlatformMouseEventERKNS_10LayoutSizeE(i25, i2, i1 + 272 | 0);
     i31 = 37;
    }
   } while (0);
   if ((i31 | 0) == 22) {
    i25 = HEAP32[i11 + 148 >> 2] | 0;
    i20 = (HEAP8[i19] & 1) == 0;
    i24 = HEAP32[i21 >> 2] | 0;
    do {
     if ((i24 | 0) != (i25 | 0)) {
      if ((i24 | 0) != 0) {
       __ZN7WebCore9Scrollbar11mouseExitedEv(i24) | 0;
      }
      if (!((i25 | 0) == 0 | i20 ^ 1)) {
       __ZN7WebCore9Scrollbar12mouseEnteredEv(i25);
      }
      i26 = i20 ? i25 : 0;
      if ((i26 | 0) != 0) {
       i28 = i26 + 4 | 0;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      }
      i28 = HEAP32[i21 >> 2] | 0;
      HEAP32[i21 >> 2] = i26;
      if ((i28 | 0) == 0) {
       break;
      }
      i26 = i28 + 4 | 0;
      i28 = i26 | 0;
      i27 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      if ((i27 | 0) != 0) {
       HEAP32[i28 >> 2] = i27;
       break;
      }
      i27 = i26 - 4 | 0;
      if ((i27 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 15](i27);
     }
    } while (0);
    if (!((HEAP8[i19] & 1) != 0 | (i25 | 0) == 0)) {
     __ZN7WebCore9Scrollbar10mouseMovedERKNS_18PlatformMouseEventE(i25, i2) | 0;
    }
    if (i4) {
     i32 = 1;
    } else {
     i31 = 37;
    }
   }
   L51 : do {
    if ((i31 | 0) == 37) {
     i21 = HEAP32[i1 + 224 >> 2] | 0;
     do {
      if ((i21 | 0) == 0) {
       if ((HEAP8[i11 + 152 | 0] & 1) == 0) {
        i33 = 0;
        i34 = 1;
        break;
       }
       i20 = __ZNK7WebCore13HitTestResult10targetNodeEv(i11 + 48 | 0) | 0;
       if ((i20 | 0) == 0) {
        i33 = 0;
        i34 = 1;
        break;
       }
       i24 = i20 + 32 | 0;
       if ((HEAP32[i20 + 12 >> 2] & 2048 | 0) == 0) {
        i35 = i24 | 0;
       } else {
        i35 = HEAP32[i24 >> 2] | 0;
       }
       i24 = HEAP32[i35 >> 2] | 0;
       if ((i24 | 0) == 0) {
        i33 = 0;
        i34 = 1;
        break;
       }
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 228 >> 2] & 1](i24) | 0)) {
        i33 = 0;
        i34 = 1;
        break;
       }
       i20 = HEAP32[i24 + 108 >> 2] | 0;
       if ((i20 | 0) == 0) {
        i33 = 0;
        i34 = 1;
        break;
       }
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 36 >> 2] & 1](i20) | 0) {
        i36 = i20;
        i31 = 54;
       } else {
        i33 = 0;
        i34 = 1;
       }
      } else {
       i20 = i21 + 32 | 0;
       if ((HEAP32[i21 + 12 >> 2] & 2048 | 0) == 0) {
        i37 = i20 | 0;
       } else {
        i37 = HEAP32[i20 >> 2] | 0;
       }
       i20 = HEAP32[i37 >> 2] | 0;
       if ((i20 | 0) == 0) {
        i33 = 0;
        i34 = 1;
        break;
       }
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 228 >> 2] & 1](i20) | 0)) {
        i33 = 0;
        i34 = 1;
        break;
       }
       i24 = HEAP32[i20 + 108 >> 2] | 0;
       if ((i24 | 0) == 0) {
        i33 = 0;
        i34 = 1;
        break;
       }
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 36 >> 2] & 1](i24) | 0) {
        i36 = i24;
        i31 = 54;
       } else {
        i33 = 0;
        i34 = 1;
       }
      }
     } while (0);
     do {
      if ((i31 | 0) == 54) {
       i21 = HEAP32[i36 + 216 >> 2] | 0;
       if ((i21 | 0) == 0) {
        i33 = 0;
        i34 = 1;
        break;
       }
       i24 = i21 + 4 | 0;
       HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
       i33 = i21;
       i34 = 0;
      }
     } while (0);
     i21 = i1 + 240 | 0;
     i24 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       if (!(__ZNK7WebCore9FrameTree14isDescendantOfEPKNS_5FrameE(i24 + 40 | 0, HEAP32[i13 >> 2] | 0) | 0)) {
        break;
       }
       i20 = HEAP32[i21 >> 2] | 0;
       if ((i20 | 0) == (i33 | 0)) {
        break;
       }
       __ZN7WebCore12EventHandler28passMouseMoveEventToSubframeERNS_28MouseEventWithHitTestResultsEPNS_5FrameEPNS_13HitTestResultE(i1, i11, i20, 0) | 0;
      }
     } while (0);
     do {
      if (i34) {
       i24 = HEAP32[(HEAP32[i13 >> 2] | 0) + 452 >> 2] | 0;
       if ((i24 | 0) == 0) {
        i20 = HEAP32[i21 >> 2] | 0;
        HEAP32[i21 >> 2] = i33;
        if ((i20 | 0) == 0) {
         i38 = 1;
         i31 = 87;
         break;
        }
        i27 = i20 + 4 | 0;
        i20 = i27 | 0;
        i26 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
        if ((i26 | 0) != 0) {
         HEAP32[i20 >> 2] = i26;
         i38 = 1;
         i31 = 87;
         break;
        }
        i26 = i27 - 4 | 0;
        if ((i26 | 0) == 0) {
         i38 = 1;
         i31 = 87;
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 15](i26);
        i38 = 1;
        i31 = 87;
        break;
       }
       __ZN7WebCore12EventHandler12selectCursorERKNS_13HitTestResultEb(i12, i1, i11 + 48 | 0, (HEAP32[i2 + 4 >> 2] & 8 | 0) != 0);
       if ((HEAP8[i12 | 0] & 1) == 0) {
        i39 = i12 + 4 | 0;
       } else {
        i26 = i1 + 248 | 0;
        i27 = i12 + 4 | 0;
        __ZN7WebCore6CursoraSERKS0_(i26, i27) | 0;
        __ZN7WebCore6Widget9setCursorERKNS_6CursorE(i24 | 0, i26);
        i39 = i27;
       }
       __ZN7WebCore6CursorD1Ev(i39);
       i27 = HEAP32[i21 >> 2] | 0;
       HEAP32[i21 >> 2] = i33;
       if ((i27 | 0) == 0) {
        i38 = 1;
        i31 = 87;
        break;
       }
       i26 = i27 + 4 | 0;
       i27 = i26 | 0;
       i24 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       if ((i24 | 0) != 0) {
        HEAP32[i27 >> 2] = i24;
        i38 = 1;
        i31 = 87;
        break;
       }
       i24 = i26 - 4 | 0;
       if ((i24 | 0) == 0) {
        i38 = 1;
        i31 = 87;
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 15](i24);
       i38 = 1;
       i31 = 87;
      } else {
       __ZN7WebCore12EventHandler26updateMouseEventTargetNodeEPNS_4NodeERKNS_18PlatformMouseEventEb(i1, __ZNK7WebCore13HitTestResult10targetNodeEv(i11 + 48 | 0) | 0, i2, 1);
       if ((HEAP32[i33 + 452 >> 2] | 0) == 0) {
        i24 = i33 + 4 | 0;
        HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
        i24 = HEAP32[i21 >> 2] | 0;
        HEAP32[i21 >> 2] = i33;
        if ((i24 | 0) == 0) {
         i38 = 0;
         i31 = 87;
         break;
        }
        i26 = i24 + 4 | 0;
        i24 = i26 | 0;
        i27 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        if ((i27 | 0) != 0) {
         HEAP32[i24 >> 2] = i27;
         i38 = 0;
         i31 = 87;
         break;
        }
        i27 = i26 - 4 | 0;
        if ((i27 | 0) == 0) {
         i38 = 0;
         i31 = 87;
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 15](i27);
        i38 = 0;
        i31 = 87;
        break;
       }
       i27 = __ZN7WebCore12EventHandler28passMouseMoveEventToSubframeERNS_28MouseEventWithHitTestResultsEPNS_5FrameEPNS_13HitTestResultE(i1, i11, i33, i3) | 0;
       i26 = i33 + 4 | 0;
       HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
       i26 = HEAP32[i21 >> 2] | 0;
       HEAP32[i21 >> 2] = i33;
       do {
        if ((i26 | 0) != 0) {
         i24 = i26 + 4 | 0;
         i20 = i24 | 0;
         i28 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
         if ((i28 | 0) != 0) {
          HEAP32[i20 >> 2] = i28;
          break;
         }
         i28 = i24 - 4 | 0;
         if ((i28 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 15](i28);
        }
       } while (0);
       if (i27) {
        i40 = 1;
       } else {
        i38 = 0;
        i31 = 87;
       }
      }
     } while (0);
     do {
      if ((i31 | 0) == 87) {
       i21 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 244 | 0;
       i26 = __ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb(i1, i21, __ZNK7WebCore13HitTestResult10targetNodeEv(i11 + 48 | 0) | 0, 0, 0, i2, 1) | 0;
       i21 = i26 ^ 1;
       if (i26) {
        i26 = __ZN7WebCore12EventHandler23handleMouseDraggedEventERKNS_28MouseEventWithHitTestResultsE(i1, i11) | 0;
        if (i38) {
         i32 = i26;
         break L51;
        } else {
         i40 = i26;
         break;
        }
       } else {
        if (i38) {
         i32 = i21;
         break L51;
        } else {
         i40 = i21;
         break;
        }
       }
      }
     } while (0);
     i21 = i33 + 4 | 0;
     i26 = i21 | 0;
     i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) != 0) {
      HEAP32[i26 >> 2] = i28;
      i32 = i40;
      break;
     }
     i28 = i21 - 4 | 0;
     if ((i28 | 0) == 0) {
      i32 = i40;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 15](i28);
     i32 = i40;
    }
   } while (0);
   __ZN7WebCore13HitTestResultD1Ev(i11 + 48 | 0);
   i22 = i32;
  } else {
   i25 = HEAP32[i13 >> 2] | 0;
   i19 = HEAP32[i25 + 456 >> 2] | 0;
   __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i9, HEAP32[i25 + 452 >> 2] | 0, i16);
   __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i8, i9);
   __ZNK7WebCore11SVGDocument9updatePanERKNS_10FloatPointE(i19, i8);
   i22 = 1;
  }
 } while (0);
 if (!i15) {
  STACKTOP = i5;
  return i22 | 0;
 }
 i15 = i14 + 4 | 0;
 i14 = i15 | 0;
 i8 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i14 >> 2] = i8;
  STACKTOP = i5;
  return i22 | 0;
 }
 i8 = i15 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return i22 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
 STACKTOP = i5;
 return i22 | 0;
}
function __ZN7WebCore12EventHandler23handleMouseReleaseEventERKNS_18PlatformMouseEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i1 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i12 + 452 >> 2] | 0;
 i14 = (i13 | 0) != 0;
 if (i14) {
  i15 = i13 + 4 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  i16 = HEAP32[i11 >> 2] | 0;
 } else {
  i16 = i12;
 }
 i12 = (HEAP32[i16 + 468 >> 2] | 0) + 192 | 0;
 HEAP8[i12] = HEAP8[i12] & -5;
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i6, 0);
 HEAP8[i1 + 4 | 0] = 0;
 HEAP8[i1 + 280 | 0] = 0;
 i12 = i1 + 284 | 0;
 i16 = i2 + 16 | 0;
 i15 = i16;
 i17 = i12;
 i18 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i17 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i17 + 4 >> 2] = i18;
 i18 = i2 + 24 | 0;
 i17 = i1 + 292 | 0;
 i19 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i17 + 4 >> 2] = i19;
 i19 = i1 + 208 | 0;
 do {
  if ((HEAP8[i19] & 1) == 0) {
   i17 = HEAP32[i1 + 268 >> 2] | 0;
   if ((i17 | 0) != 0) {
    i18 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 256 | 0;
    i20 = (__ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb(i1, i18, i17 | 0, 0, HEAP32[i1 + 252 >> 2] | 0, i2, 0) | 0) ^ 1;
    break;
   }
   i17 = i1 + 244 | 0;
   if ((HEAP32[i17 >> 2] | 0) != 0) {
    i18 = i1 + 252 | 0;
    HEAP32[i18 >> 2] = 0;
    i21 = i1 + 256 | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    HEAP32[i21 >> 2] = 0;
    do {
     if ((i22 | 0) != 0) {
      i21 = i22 + 8 | 0;
      i23 = i21 | 0;
      i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
      HEAP32[i23 >> 2] = i24;
      if ((i24 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    __ZN7WebCore9Scrollbar7mouseUpERKNS_18PlatformMouseEventE(HEAP32[i17 >> 2] | 0, i2) | 0;
    i22 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 256 | 0;
    i20 = (__ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb(i1, i22, HEAP32[i1 + 236 >> 2] | 0, 0, HEAP32[i18 >> 2] | 0, i2, 0) | 0) ^ 1;
    break;
   }
   HEAP32[i9 >> 2] = 272;
   i22 = HEAP32[i11 >> 2] | 0;
   i21 = HEAP32[i22 + 456 >> 2] | 0;
   i24 = HEAP32[i22 + 452 >> 2] | 0;
   i22 = i4;
   if ((i24 | 0) == 0) {
    i23 = HEAP32[i15 >> 2] | 0;
    i25 = HEAP32[i15 + 4 >> 2] | 0;
    HEAP32[i4 >> 2] = i23;
    HEAP32[i4 + 4 >> 2] = i25;
    i26 = i23;
    i27 = i25;
   } else {
    __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i22, i24 | 0, i16);
    i26 = HEAP32[i4 >> 2] | 0;
    i27 = HEAP32[i22 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i26;
   HEAP32[i5 + 4 >> 2] = i27;
   __ZN7WebCore8Document17prepareMouseEventERKNS_14HitTestRequestERKNS_11LayoutPointERKNS_18PlatformMouseEventE(i10, i21, i9, i5, i2);
   i21 = i1 + 224 | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i22 | 0) == 0) {
     if ((HEAP8[i10 + 152 | 0] & 1) == 0) {
      i28 = 0;
      break;
     }
     i24 = __ZNK7WebCore13HitTestResult10targetNodeEv(i10 + 48 | 0) | 0;
     if ((i24 | 0) == 0) {
      i28 = 0;
      break;
     }
     i25 = i24 + 32 | 0;
     if ((HEAP32[i24 + 12 >> 2] & 2048 | 0) == 0) {
      i29 = i25 | 0;
     } else {
      i29 = HEAP32[i25 >> 2] | 0;
     }
     i25 = HEAP32[i29 >> 2] | 0;
     if ((i25 | 0) == 0) {
      i28 = 0;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 228 >> 2] & 1](i25) | 0)) {
      i28 = 0;
      break;
     }
     i24 = HEAP32[i25 + 108 >> 2] | 0;
     if ((i24 | 0) == 0) {
      i28 = 0;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 36 >> 2] & 1](i24) | 0)) {
      i28 = 0;
      break;
     }
     i28 = HEAP32[i24 + 216 >> 2] | 0;
    } else {
     i24 = i22 + 32 | 0;
     if ((HEAP32[i22 + 12 >> 2] & 2048 | 0) == 0) {
      i30 = i24 | 0;
     } else {
      i30 = HEAP32[i24 >> 2] | 0;
     }
     i24 = HEAP32[i30 >> 2] | 0;
     if ((i24 | 0) == 0) {
      i28 = 0;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 228 >> 2] & 1](i24) | 0)) {
      i28 = 0;
      break;
     }
     i25 = HEAP32[i24 + 108 >> 2] | 0;
     if ((i25 | 0) == 0) {
      i28 = 0;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 36 >> 2] & 1](i25) | 0)) {
      i28 = 0;
      break;
     }
     i28 = HEAP32[i25 + 216 >> 2] | 0;
    }
   } while (0);
   do {
    if ((HEAP8[i1 + 228 | 0] & 1) != 0) {
     i22 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = 0;
     if ((i22 | 0) == 0) {
      break;
     }
     i18 = i22 + 8 | 0;
     i22 = i18 | 0;
     i17 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i17;
     if ((i17 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i18 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i18 - 8 | 0);
    }
   } while (0);
   do {
    if ((i28 | 0) == 0) {
     i31 = 43;
    } else {
     if (!(__ZN7WebCore12EventHandler31passMouseReleaseEventToSubframeERNS_28MouseEventWithHitTestResultsEPNS_5FrameE(i1, i10, i28) | 0)) {
      i31 = 43;
      break;
     }
     i32 = 1;
     i33 = i10 + 48 | 0;
    }
   } while (0);
   if ((i31 | 0) == 43) {
    i21 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 256 | 0;
    i18 = i10 + 48 | 0;
    i17 = __ZNK7WebCore13HitTestResult10targetNodeEv(i18) | 0;
    i22 = i1 + 252 | 0;
    i25 = __ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb(i1, i21, i17, 0, HEAP32[i22 >> 2] | 0, i2, 0) | 0;
    do {
     if ((HEAP32[i22 >> 2] | 0) < 1 | (HEAP32[i2 + 32 >> 2] | 0) == 2) {
      i34 = 0;
     } else {
      i17 = __ZNK7WebCore13HitTestResult10targetNodeEv(i18) | 0;
      i21 = HEAP32[i1 + 256 >> 2] | 0;
      if ((i17 | 0) != (i21 | 0)) {
       if ((i17 | 0) == 0) {
        i34 = 0;
        break;
       }
       i24 = __ZNK7WebCore4Node20containingShadowRootEv(i17) | 0;
       if ((i24 | 0) == 0) {
        i34 = 0;
        break;
       }
       if ((HEAP32[i24 + 88 >> 2] & 4 | 0) != 0) {
        i34 = 0;
        break;
       }
       i24 = __ZNK7WebCore4Node10shadowHostEv(i17) | 0;
       if ((i21 | 0) == 0) {
        i35 = 0;
       } else {
        i35 = __ZNK7WebCore4Node10shadowHostEv(i21) | 0;
       }
       if ((i24 | 0) != (i35 | 0)) {
        i34 = 0;
        break;
       }
      }
      i24 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 56 | 0;
      i21 = __ZNK7WebCore13HitTestResult10targetNodeEv(i18) | 0;
      i34 = (__ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb(i1, i24, i21, 0, HEAP32[i22 >> 2] | 0, i2, 1) | 0) ^ 1;
     }
    } while (0);
    i21 = i1 + 220 | 0;
    i24 = HEAP32[i21 >> 2] | 0;
    if ((i24 | 0) != 0) {
     i17 = i24 + 20 | 0;
     HEAP8[i17] = HEAP8[i17] & -2;
     HEAP32[i21 >> 2] = 0;
    }
    if (i25) {
     i36 = __ZN7WebCore12EventHandler23handleMouseReleaseEventERKNS_28MouseEventWithHitTestResultsE(i1, i10) | 0;
    } else {
     i36 = 0;
    }
    HEAP32[i22 >> 2] = 0;
    i21 = i1 + 256 | 0;
    i17 = HEAP32[i21 >> 2] | 0;
    HEAP32[i21 >> 2] = 0;
    do {
     if ((i17 | 0) != 0) {
      i21 = i17 + 8 | 0;
      i24 = i21 | 0;
      i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      HEAP32[i24 >> 2] = i23;
      if ((i23 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
     }
    } while (0);
    i32 = i34 | i36 | i25 ^ 1;
    i33 = i18;
   }
   __ZN7WebCore13HitTestResultD1Ev(i33);
   i20 = i32;
  } else {
   HEAP8[i19] = 0;
   i17 = HEAP32[i11 >> 2] | 0;
   i22 = HEAP32[i17 + 456 >> 2] | 0;
   __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i8, HEAP32[i17 + 452 >> 2] | 0, i12);
   __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i7, i8);
   __ZNK7WebCore11SVGDocument9updatePanERKNS_10FloatPointE(i22, i7);
   i20 = 1;
  }
 } while (0);
 __ZN7WebCore20UserGestureIndicatorD1Ev(i6);
 if (!i14) {
  STACKTOP = i3;
  return i20 | 0;
 }
 i14 = i13 + 4 | 0;
 i13 = i14 | 0;
 i6 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i13 >> 2] = i6;
  STACKTOP = i3;
  return i20 | 0;
 }
 i6 = i14 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return i20 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
 STACKTOP = i3;
 return i20 | 0;
}
function __ZN7WebCore12EventHandler17updateDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 i10 = i9 + 452 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  i11 = 0;
  STACKTOP = i4;
  return i11 | 0;
 }
 HEAP32[i7 >> 2] = 258;
 i12 = HEAP32[i9 + 456 >> 2] | 0;
 i9 = i2 + 16 | 0;
 i13 = HEAP32[i10 >> 2] | 0;
 i10 = i5;
 if ((i13 | 0) == 0) {
  i14 = i9;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = HEAP32[i14 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = i15;
  HEAP32[i5 + 4 >> 2] = i16;
  i17 = i15;
  i18 = i16;
 } else {
  __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i10, i13 | 0, i9);
  i17 = HEAP32[i5 >> 2] | 0;
  i18 = HEAP32[i10 + 4 >> 2] | 0;
 }
 HEAP32[i6 >> 2] = i17;
 HEAP32[i6 + 4 >> 2] = i18;
 __ZN7WebCore8Document17prepareMouseEventERKNS_14HitTestRequestERKNS_11LayoutPointERKNS_18PlatformMouseEventE(i8, i12, i7, i6, i2);
 i6 = i8 + 48 | 0;
 i8 = __ZNK7WebCore13HitTestResult10targetNodeEv(i6) | 0;
 do {
  if ((i8 | 0) == 0) {
   i19 = 0;
  } else {
   if ((HEAP32[i8 + 12 >> 2] & 4 | 0) != 0) {
    i7 = i8 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    i19 = i8;
    break;
   }
   i7 = __ZNK7WebCore4Node25parentOrShadowHostElementEv(i8) | 0;
   if ((i7 | 0) == 0) {
    i19 = 0;
    break;
   }
   i12 = i7 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i19 = i7;
  }
 } while (0);
 i8 = i19 | 0;
 __ZN7WebCore20AutoscrollController17updateDragAndDropEPNS_4NodeERKNS_8IntPointEd(HEAP32[i1 + 144 >> 2] | 0, i8, i9, +HEAPF64[i2 + 8 >> 3]);
 i9 = i1 + 260 | 0;
 i7 = (i19 | 0) == 0;
 L15 : do {
  if ((HEAP32[i9 >> 2] | 0) == (i19 | 0)) {
   if (i7) {
    i20 = 0;
    break;
   }
   L65 : do {
    if ((HEAP32[i19 + 12 >> 2] & 4 | 0) != 0) {
     i12 = HEAP32[i8 + 44 >> 2] | 0;
     i18 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
     do {
      if ((i12 | 0) != (i18 | 0)) {
       i17 = HEAP32[i12 + 12 >> 2] | 0;
       if ((i17 | 0) == (HEAP32[i18 + 12 >> 2] | 0)) {
        if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
         break;
        }
       }
       i10 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
       if ((i12 | 0) == (i10 | 0)) {
        break;
       }
       if ((i17 | 0) == (HEAP32[i10 + 12 >> 2] | 0)) {
        if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0)) {
         break;
        }
       }
       if (i7) {
        i20 = 0;
        break L15;
       } else {
        break L65;
       }
      }
     } while (0);
     i12 = HEAP32[i8 + 52 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i20 = 0;
      break L15;
     }
     i20 = __ZN7WebCore12EventHandler17updateDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE(HEAP32[i12 + 472 >> 2] | 0, i2, i3) | 0;
     break L15;
    }
   } while (0);
   i12 = i1 + 264 | 0;
   do {
    if ((HEAP8[i12] & 1) == 0) {
     if (HEAP8[H_BASE + 216 | 0] | 0) {
      i21 = HEAP32[H_BASE + 256 >> 2] | 0;
     } else {
      i18 = __Znwj(16) | 0;
      i10 = i18;
      _memset(i18 | 0, 0, 12) | 0;
      HEAP32[i18 >> 2] = 0;
      HEAP32[i18 + 12 >> 2] = 0;
      HEAP32[H_BASE + 256 >> 2] = i10;
      HEAP8[H_BASE + 216 | 0] = 1;
      i21 = i10;
     }
     if ((HEAP32[i21 >> 2] | 0) == 0) {
      break;
     }
     if ((HEAP8[i21 + 4 | 0] & 1) == 0) {
      break;
     }
     i10 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 120 | 0;
     __ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, i10, HEAP32[i21 >> 2] | 0, i2, HEAP32[i21 + 12 >> 2] | 0) | 0;
    }
   } while (0);
   if (__ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 136 | 0, i19, i2, i3) | 0) {
    i22 = 1;
   } else {
    i22 = __ZN7WebCoreL12findDropZoneEPNS_4NodeEPNS_9ClipboardE(i8, i3) | 0;
   }
   HEAP8[i12] = 0;
   i20 = i22;
  } else {
   L17 : do {
    if (i7) {
     i23 = 0;
    } else {
     L19 : do {
      if ((HEAP32[i19 + 12 >> 2] & 4 | 0) != 0) {
       i10 = HEAP32[i8 + 44 >> 2] | 0;
       i18 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
       do {
        if ((i10 | 0) != (i18 | 0)) {
         i17 = HEAP32[i10 + 12 >> 2] | 0;
         if ((i17 | 0) == (HEAP32[i18 + 12 >> 2] | 0)) {
          if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
           break;
          }
         }
         i5 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
         if ((i10 | 0) == (i5 | 0)) {
          break;
         }
         if ((i17 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
          if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
           break;
          }
         }
         if (i7) {
          i23 = 0;
          break L17;
         } else {
          break L19;
         }
        }
       } while (0);
       i10 = HEAP32[i8 + 52 >> 2] | 0;
       if ((i10 | 0) == 0) {
        i23 = 0;
        break L17;
       }
       i23 = (__ZN7WebCore12EventHandler17updateDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE(HEAP32[i10 + 472 >> 2] | 0, i2, i3) | 0) & 1;
       break L17;
      }
     } while (0);
     if (HEAP8[H_BASE + 216 | 0] | 0) {
      i24 = HEAP32[H_BASE + 256 >> 2] | 0;
     } else {
      i10 = __Znwj(16) | 0;
      i18 = i10;
      _memset(i10 | 0, 0, 12) | 0;
      HEAP32[i10 >> 2] = 0;
      HEAP32[i10 + 12 >> 2] = 0;
      HEAP32[H_BASE + 256 >> 2] = i18;
      HEAP8[H_BASE + 216 | 0] = 1;
      i24 = i18;
     }
     do {
      if ((HEAP32[i24 >> 2] | 0) != 0) {
       if ((HEAP8[i24 + 4 | 0] & 1) == 0) {
        break;
       }
       i18 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 120 | 0;
       __ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, i18, HEAP32[i24 >> 2] | 0, i2, HEAP32[i24 + 12 >> 2] | 0) | 0;
      }
     } while (0);
     i18 = __ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 128 | 0, i19, i2, i3) | 0;
     if (i18) {
      i23 = i18 & 1;
      break;
     } else {
      i23 = (__ZN7WebCoreL12findDropZoneEPNS_4NodeEPNS_9ClipboardE(i8, i3) | 0) & 1;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i9 >> 2] | 0;
   i18 = i12 | 0;
   L45 : do {
    if ((i12 | 0) == 0) {
     i25 = i23;
    } else {
     L47 : do {
      if ((HEAP32[i12 + 12 >> 2] & 4 | 0) != 0) {
       i10 = HEAP32[i18 + 44 >> 2] | 0;
       i5 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
       do {
        if ((i10 | 0) != (i5 | 0)) {
         i17 = HEAP32[i10 + 12 >> 2] | 0;
         if ((i17 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
          if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
           break;
          }
         }
         i13 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
         if ((i10 | 0) == (i13 | 0)) {
          break;
         }
         if ((i17 | 0) == (HEAP32[i13 + 12 >> 2] | 0)) {
          if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i13 + 16 >> 2] | 0)) {
           break;
          }
         }
         if ((i12 | 0) == 0) {
          i25 = i23;
          break L45;
         } else {
          break L47;
         }
        }
       } while (0);
       i10 = HEAP32[i18 + 52 >> 2] | 0;
       if ((i10 | 0) == 0) {
        i25 = i23;
        break L45;
       }
       i25 = (__ZN7WebCore12EventHandler17updateDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE(HEAP32[i10 + 472 >> 2] | 0, i2, i3) | 0) & 1;
       break L45;
      }
     } while (0);
     __ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 132 | 0, i12, i2, i3) | 0;
     i25 = i23;
    }
   } while (0);
   i12 = (i25 & 1) != 0;
   if (i7) {
    i20 = i12;
    break;
   }
   HEAP8[i1 + 264 | 0] = 1;
   i20 = i12;
  }
 } while (0);
 i1 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i19;
 do {
  if ((i1 | 0) != 0) {
   i19 = i1 + 8 | 0;
   i9 = i19 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore13HitTestResultD1Ev(i6);
 i11 = i20;
 STACKTOP = i4;
 return i11 | 0;
}
function __ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i8 = i4 | 0;
 i9 = i4 + 8 | 0;
 i10 = i4 + 120 | 0;
 i11 = i4 + 128 | 0;
 i12 = i4 + 136 | 0;
 i13 = i4 + 144 | 0;
 i14 = i4 + 152 | 0;
 i15 = i1 | 0;
 i16 = HEAP32[(HEAP32[i15 >> 2] | 0) + 452 >> 2] | 0;
 if ((i16 | 0) != 0) {
  __ZN7WebCore9FrameView25resetDeferredRepaintDelayEv(i16);
 }
 __ZN7WebCore12EventHandler26updateMouseEventTargetNodeEPNS_4NodeERKNS_18PlatformMouseEventEb(i1, i3, i6, i7);
 i7 = i1 + 232 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i17 = 5;
 } else {
  if (__ZN7WebCore7Element18dispatchMouseEventERKNS_18PlatformMouseEventERKN3WTF12AtomicStringEiPS0_(i1, i6, i2, i5, 0) | 0) {
   i17 = 5;
  } else {
   i18 = 1;
  }
 }
 L6 : do {
  if ((i17 | 0) == 5) {
   i5 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   if ((HEAP32[i2 >> 2] | 0) != (HEAP32[i5 + 232 >> 2] | 0)) {
    i18 = 0;
    break;
   }
   i5 = HEAP32[i15 >> 2] | 0;
   i1 = HEAP32[i5 + 452 >> 2] | 0;
   do {
    if ((i1 | 0) == 0) {
     i19 = i5;
    } else {
     if ((__ZN7WebCore10ScrollView16scrollbarAtPointERKNS_8IntPointE(i1 | 0, i6 + 16 | 0) | 0) == 0) {
      i19 = HEAP32[i15 >> 2] | 0;
      break;
     } else {
      i20 = 1;
      STACKTOP = i4;
      return i20 | 0;
     }
    }
   } while (0);
   __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[i19 + 456 >> 2] | 0);
   i1 = HEAP32[i7 >> 2] | 0;
   L15 : do {
    if ((i1 | 0) == 0) {
     i21 = 0;
     i22 = 0;
     i17 = 21;
    } else {
     i5 = i1;
     while (1) {
      i23 = i5;
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 356 >> 2] & 1](i5) | 0) {
       break;
      }
      i3 = __ZNK7WebCore4Node25parentOrShadowHostElementEv(i5 | 0) | 0;
      if ((i3 | 0) == 0) {
       i21 = 0;
       i22 = 0;
       i17 = 21;
       break L15;
      } else {
       i5 = i3;
      }
     }
     i3 = HEAP32[(HEAP32[i15 >> 2] | 0) + 468 >> 2] | 0;
     do {
      if ((HEAP32[i3 + 84 >> 2] | 0) == 2) {
       __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i11, i3 + 32 | 0);
       i16 = i11 | 0;
       i24 = HEAP32[i16 >> 2] | 0;
       i25 = i5 | 0;
       i26 = i12 | 0;
       HEAP32[i26 >> 2] = 0;
       if ((__ZNK7WebCore5Range11compareNodeEPNS_4NodeERi(i24, i25, i26) | 0) == 3) {
        i27 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i25, HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 456 >> 2] | 0) + 680 >> 2] | 0) | 0;
       } else {
        i27 = 0;
       }
       i25 = HEAP32[i16 >> 2] | 0;
       if ((i25 | 0) == 0) {
        if (i27) {
         i20 = 1;
        } else {
         break;
        }
        STACKTOP = i4;
        return i20 | 0;
       }
       i16 = i25 | 0;
       i26 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
       if ((i26 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i25);
        __ZN3WTF8fastFreeEPv(i25);
        if (i27) {
         i20 = 1;
        } else {
         break;
        }
        STACKTOP = i4;
        return i20 | 0;
       } else {
        HEAP32[i16 >> 2] = i26;
        if (i27) {
         i20 = 1;
        } else {
         break;
        }
        STACKTOP = i4;
        return i20 | 0;
       }
      }
     } while (0);
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i23 >> 2] | 0) + 356 >> 2] & 1](i5) | 0) {
      i28 = i5;
      i29 = 1;
     } else {
      i21 = i5;
      i22 = 1;
      i17 = 21;
     }
    }
   } while (0);
   do {
    if ((i17 | 0) == 21) {
     i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i15 >> 2] | 0) | 0;
     if ((i1 | 0) == 0) {
      i28 = i21;
      i29 = i22;
      break;
     }
     HEAP32[i8 >> 2] = 258;
     HEAP32[i10 >> 2] = HEAP32[i6 + 16 >> 2];
     HEAP32[i10 + 4 >> 2] = HEAP32[i6 + 20 >> 2];
     __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i9, i10);
     __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(i1, i8, i9) | 0;
     i1 = (HEAP32[i9 + 100 >> 2] | 0) == 0;
     __ZN7WebCore13HitTestResultD1Ev(i9);
     if (i1) {
      i28 = i21;
      i29 = i22;
      break;
     } else {
      i20 = 0;
     }
     STACKTOP = i4;
     return i20 | 0;
    }
   } while (0);
   i1 = HEAP32[(HEAP32[i15 >> 2] | 0) + 32 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i18 = 0;
    break;
   }
   do {
    if (i29) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 356 >> 2] & 1](i28) | 0)) {
      if ((HEAP32[i28 + 12 >> 2] & 1024 | 0) == 0) {
       break;
      }
      if (__ZNK7WebCore7Element26isUserActionElementFocusedEv(i28) | 0) {
       i18 = 0;
       break L6;
      } else {
       break;
      }
     }
     i3 = HEAP32[i1 + 32 >> 2] | 0;
     i26 = HEAP32[i15 >> 2] | 0;
     i16 = i13 | 0;
     HEAP32[i16 >> 2] = i26;
     if ((i26 | 0) != 0) {
      i25 = i26 + 4 | 0;
      HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
     }
     i25 = __ZN7WebCore15FocusController17setFocusedElementEPNS_7ElementEN3WTF10PassRefPtrINS_5FrameEEENS_14FocusDirectionE(i3, i28, i13, 0) | 0;
     i3 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i3 | 0) != 0) {
       i16 = i3 + 4 | 0;
       i26 = i16 | 0;
       i24 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       if ((i24 | 0) != 0) {
        HEAP32[i26 >> 2] = i24;
        break;
       }
       i24 = i16 - 4 | 0;
       if ((i24 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 15](i24);
      }
     } while (0);
     i18 = i25 ^ 1;
     break L6;
    }
   } while (0);
   i3 = HEAP32[i1 + 32 >> 2] | 0;
   i5 = HEAP32[i15 >> 2] | 0;
   i24 = i14 | 0;
   HEAP32[i24 >> 2] = i5;
   if ((i5 | 0) != 0) {
    i16 = i5 + 4 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   }
   i16 = __ZN7WebCore15FocusController17setFocusedElementEPNS_7ElementEN3WTF10PassRefPtrINS_5FrameEEENS_14FocusDirectionE(i3, 0, i14, 0) | 0;
   i3 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i24 = i3 + 4 | 0;
     i5 = i24 | 0;
     i26 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) != 0) {
      HEAP32[i5 >> 2] = i26;
      break;
     }
     i26 = i24 - 4 | 0;
     if ((i26 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 15](i26);
    }
   } while (0);
   i18 = i16 ^ 1;
  }
 } while (0);
 i20 = i18 ^ 1;
 STACKTOP = i4;
 return i20 | 0;
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
function __ZN7WebCore12EventHandler16handleWheelEventERKNS_18PlatformWheelEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 136 | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = (HEAP32[i10 + 456 >> 2] | 0) + 1584 | 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i13 = HEAP32[i10 + 452 >> 2] | 0;
 i10 = (i13 | 0) != 0;
 if (!i10) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i14 = i13 + 4 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 i14 = HEAP32[i9 >> 2] | 0;
 i15 = HEAP32[i14 + 452 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i16 = 0;
  } else {
   i17 = i1 + 414 | 0;
   HEAP8[i17] = 1;
   i18 = HEAP32[i14 + 452 >> 2] | 0;
   if ((i18 | 0) != 0) {
    __ZN7WebCore9FrameView20setWasScrolledByUserEb(i18, 1);
   }
   __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i5, i15 | 0, i2 + 16 | 0);
   HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i4 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
   HEAP32[i6 >> 2] = 258;
   __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i7, i4);
   __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(HEAP32[i11 >> 2] | 0, i6, i7) | 0;
   i18 = __ZNK7WebCore13HitTestResult12innerElementEv(i7) | 0;
   i19 = i1 + 388 | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     HEAP32[i19 >> 2] = 0;
     i21 = i20 + 8 | 0;
     i22 = i21 | 0;
     i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     HEAP32[i22 >> 2] = i23;
     if ((i23 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i20 = i1 + 396 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     HEAP32[i20 >> 2] = 0;
     i21 = i19 + 8 | 0;
     i23 = i21 | 0;
     i22 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     HEAP32[i23 >> 2] = i22;
     if ((i22 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
    }
   } while (0);
   i19 = HEAP8[i7 + 104 | 0] & 1;
   i20 = i8;
   i21 = i2;
   HEAP32[i20 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i20 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
   HEAP32[i20 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
   HEAP32[i20 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
   HEAP32[i20 + 16 >> 2] = HEAP32[i21 + 16 >> 2];
   HEAP32[i20 + 20 >> 2] = HEAP32[i21 + 20 >> 2];
   HEAP32[i20 + 24 >> 2] = HEAP32[i21 + 24 >> 2];
   HEAP32[i20 + 28 >> 2] = HEAP32[i21 + 28 >> 2];
   HEAP32[i20 + 32 >> 2] = HEAP32[i21 + 32 >> 2];
   HEAP32[i20 + 36 >> 2] = HEAP32[i21 + 36 >> 2];
   HEAP32[i20 + 40 >> 2] = HEAP32[i21 + 40 >> 2];
   HEAP32[i20 + 44 >> 2] = HEAP32[i21 + 44 >> 2];
   HEAP32[i20 + 48 >> 2] = HEAP32[i21 + 48 >> 2];
   HEAP32[i20 + 52 >> 2] = HEAP32[i21 + 52 >> 2];
   i21 = i1 + 368 | 0;
   d24 = +HEAPF32[i8 + 32 >> 2];
   d25 = +HEAPF32[i8 + 36 >> 2];
   i20 = i21 | 0;
   i22 = HEAP32[i20 >> 2] | 0;
   i23 = i1 + 372 | 0;
   i26 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i22 | 0) == 0) {
     i27 = HEAP32[i1 + 380 >> 2] | 0;
     if ((i26 | 0) == 0) {
      if ((i27 | 0) == 0) {
       i28 = 19;
       break;
      } else {
       i29 = 0;
       break;
      }
     } else {
      if ((i26 | 0) == (i27 - 1 | 0)) {
       i28 = 19;
       break;
      } else {
       i29 = i26;
       break;
      }
     }
    } else {
     if ((i26 + 1 | 0) == (i22 | 0)) {
      i28 = 19;
     } else {
      i29 = i26;
     }
    }
   } while (0);
   if ((i28 | 0) == 19) {
    __ZN3WTF5DequeIN7WebCore9FloatSizeELj0EE14expandCapacityEv(i21);
    i29 = HEAP32[i23 >> 2] | 0;
   }
   i26 = (HEAP32[i1 + 376 >> 2] | 0) + (i29 << 3) | 0;
   d30 = +d24;
   d31 = +d25;
   HEAPF32[i26 >> 2] = d30;
   HEAPF32[i26 + 4 >> 2] = d31;
   i26 = HEAP32[i23 >> 2] | 0;
   i22 = HEAP32[i1 + 380 >> 2] | 0;
   i27 = i22 - 1 | 0;
   i32 = (i26 | 0) == (i27 | 0) ? 0 : i26 + 1 | 0;
   HEAP32[i23 >> 2] = i32;
   i26 = HEAP32[i20 >> 2] | 0;
   if ((i32 - i26 + (i26 >>> 0 > i32 >>> 0 ? i22 : 0) | 0) >>> 0 > 3 >>> 0) {
    HEAP32[i20 >> 2] = (i26 | 0) == (i27 | 0) ? 0 : i26 + 1 | 0;
   }
   L34 : do {
    if ((i18 | 0) == 0) {
     i28 = 33;
    } else {
     i26 = i18 + 32 | 0;
     if ((HEAP32[i18 + 12 >> 2] & 2048 | 0) == 0) {
      i33 = i26 | 0;
     } else {
      i33 = HEAP32[i26 >> 2] | 0;
     }
     i26 = HEAP32[i33 >> 2] | 0;
     do {
      if (!(i19 << 24 >> 24 == 0 | (i26 | 0) == 0)) {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 228 >> 2] & 1](i26) | 0)) {
        break;
       }
       i27 = HEAP32[i26 + 108 >> 2] | 0;
       if ((i27 | 0) == 0) {
        break;
       }
       if (!(__ZN7WebCore12EventHandler22passWheelEventToWidgetERKNS_18PlatformWheelEventEPNS_6WidgetE(i1, i2, i27) | 0)) {
        break;
       }
       HEAP8[i17] = 0;
       i34 = 1;
       break L34;
      }
     } while (0);
     if (__ZN7WebCore7Element18dispatchWheelEventERKNS_18PlatformWheelEventE(i18, i8) | 0) {
      i28 = 33;
      break;
     }
     HEAP8[i17] = 0;
     i34 = 1;
    }
   } while (0);
   if ((i28 | 0) == 33) {
    i18 = HEAP32[(HEAP32[i9 >> 2] | 0) + 452 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i35 = 0;
    } else {
     i35 = __ZN7WebCore9FrameView10wheelEventERKNS_18PlatformWheelEventE(i18, i8) | 0;
    }
    HEAP8[i17] = 0;
    i34 = i35;
   }
   __ZN7WebCore13HitTestResultD1Ev(i7);
   if (i10) {
    i16 = i34;
    break;
   } else {
    i12 = i34;
   }
   STACKTOP = i3;
   return i12 | 0;
  }
 } while (0);
 i34 = i13 + 4 | 0;
 i13 = i34 | 0;
 i10 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i13 >> 2] = i10;
  i12 = i16;
  STACKTOP = i3;
  return i12 | 0;
 }
 i10 = i34 - 4 | 0;
 if ((i10 | 0) == 0) {
  i12 = i16;
  STACKTOP = i3;
  return i12 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
 i12 = i16;
 STACKTOP = i3;
 return i12 | 0;
}
function __ZN7WebCore12EventHandler27defaultKeyboardEventHandlerEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i11 = i2 + 12 | 0;
 do {
  if ((HEAP32[i11 >> 2] | 0) == (HEAP32[i10 + 196 >> 2] | 0)) {
   i12 = i1 | 0;
   __ZN7WebCore6Editor19handleKeyboardEventEPNS_13KeyboardEventE(HEAP32[(HEAP32[i12 >> 2] | 0) + 464 >> 2] | 0, i2);
   i13 = i2 + 21 | 0;
   if ((HEAP8[i13] & 1) != 0) {
    STACKTOP = i3;
    return;
   }
   i14 = i2 + 68 | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i14 >> 2] | 0, H_BASE + 88 | 0) | 0) {
    i15 = HEAP8[i2 + 60 | 0] | 0;
    if ((i15 & 9) != 0) {
     break;
    }
    if ((HEAP8[i2 + 76 | 0] & 1) != 0) {
     break;
    }
    i16 = HEAP32[i12 >> 2] | 0;
    i17 = HEAP32[i16 + 32 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break;
    }
    if ((HEAP8[i17 + 97 | 0] & 1) == 0) {
     break;
    }
    if (__ZNK7WebCore8Document12inDesignModeEv(HEAP32[i16 + 456 >> 2] | 0) | 0) {
     break;
    }
    if (!(__ZN7WebCore15FocusController12advanceFocusENS_14FocusDirectionEPNS_13KeyboardEventEb(HEAP32[i17 + 32 >> 2] | 0, (i15 & 4) != 0 ? 2 : 1, i2, 0) | 0)) {
     break;
    }
    HEAP8[i13] = 1;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i14 >> 2] | 0, H_BASE + 40 | 0) | 0) {
    i15 = i2 + 60 | 0;
    if ((HEAP8[i15] & 11) != 0) {
     break;
    }
    if ((HEAP8[i2 + 76 | 0] & 1) != 0) {
     break;
    }
    __ZNK7WebCore6Editor8behaviorEv(i9, HEAP32[(HEAP32[i12 >> 2] | 0) + 464 >> 2] | 0);
    if ((HEAP32[i9 >> 2] | 0) == 2) {
     break;
    }
    i17 = HEAP32[i12 >> 2] | 0;
    i16 = HEAP32[i17 + 32 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break;
    }
    if ((HEAP8[(HEAP32[i17 + 36 >> 2] | 0) + 183 | 0] & 1) == 0) {
     break;
    }
    if ((HEAP8[i15] & 4) == 0) {
     if (!(__ZN7WebCore4Page6goBackEv(i16) | 0)) {
      break;
     }
    } else {
     if (!(__ZN7WebCore4Page9goForwardEv(i16) | 0)) {
      break;
     }
    }
    HEAP8[i13] = 1;
    break;
   }
   i16 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i16 | 0) == 0) {
     i14 = i8 | 0;
     HEAP32[i14 >> 2] = 0;
     i18 = i14;
    } else {
     if ((HEAP32[i16 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i8, i16);
      i18 = i8 | 0;
      break;
     } else {
      i14 = i8 | 0;
      HEAP32[i14 >> 2] = i16;
      i15 = i16 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
      i18 = i14;
      break;
     }
    }
   } while (0);
   i16 = HEAP32[i18 >> 2] | 0;
   if (!(HEAP8[H_BASE + 200 | 0] | 0)) {
    i14 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i7, H_BASE + 32 | 0, 4);
    i15 = i7 | 0;
    i17 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = 0;
    HEAP32[i14 >> 2] = i17;
    HEAP32[H_BASE + 240 >> 2] = i14;
    HEAP8[H_BASE + 200 | 0] = 1;
   }
   if (!(HEAP8[H_BASE + 208 | 0] | 0)) {
    i14 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i6, H_BASE + 24 | 0, 2);
    i17 = i6 | 0;
    i15 = HEAP32[i17 >> 2] | 0;
    HEAP32[i17 >> 2] = 0;
    HEAP32[i14 >> 2] = i15;
    HEAP32[H_BASE + 248 >> 2] = i14;
    HEAP8[H_BASE + 208 | 0] = 1;
   }
   if (!(HEAP8[H_BASE + 192 | 0] | 0)) {
    i14 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i5, H_BASE + 16 | 0, 4);
    i15 = i5 | 0;
    i17 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = 0;
    HEAP32[i14 >> 2] = i17;
    HEAP32[H_BASE + 232 >> 2] = i14;
    HEAP8[H_BASE + 192 | 0] = 1;
   }
   if (!(HEAP8[H_BASE + 184 | 0] | 0)) {
    i14 = __Znwj(4) | 0;
    __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 8 | 0, 5);
    i17 = i4 | 0;
    i15 = HEAP32[i17 >> 2] | 0;
    HEAP32[i17 >> 2] = 0;
    HEAP32[i14 >> 2] = i15;
    HEAP32[H_BASE + 224 >> 2] = i14;
    HEAP8[H_BASE + 184 | 0] = 1;
   }
   do {
    if ((i16 | 0) == (HEAP32[HEAP32[H_BASE + 240 >> 2] >> 2] | 0)) {
     i19 = 4;
    } else {
     if ((i16 | 0) == (HEAP32[HEAP32[H_BASE + 248 >> 2] >> 2] | 0)) {
      i19 = 3;
      break;
     }
     if ((i16 | 0) == (HEAP32[HEAP32[H_BASE + 232 >> 2] >> 2] | 0)) {
      i19 = 5;
      break;
     }
     i19 = (i16 | 0) == (HEAP32[HEAP32[H_BASE + 224 >> 2] >> 2] | 0) ? 6 : 0;
    }
   } while (0);
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
   if ((i19 | 0) == 0) {
    break;
   }
   i16 = HEAP8[i2 + 60 | 0] | 0;
   if ((i16 & 9) != 0) {
    break;
   }
   if ((HEAP8[i2 + 76 | 0] & 1) != 0) {
    break;
   }
   if ((i16 & 4) != 0) {
    break;
   }
   i16 = HEAP32[i12 >> 2] | 0;
   i15 = HEAP32[i16 + 32 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   if (!(__ZN7WebCore26isSpatialNavigationEnabledEPKNS_5FrameE(i16) | 0)) {
    break;
   }
   if (__ZNK7WebCore8Document12inDesignModeEv(HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0) | 0) {
    break;
   }
   if (!(__ZN7WebCore15FocusController12advanceFocusENS_14FocusDirectionEPNS_13KeyboardEventEb(HEAP32[i15 + 32 >> 2] | 0, i19, i2, 0) | 0)) {
    break;
   }
   HEAP8[i13] = 1;
  }
 } while (0);
 i19 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) != (HEAP32[i19 + 200 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore6Editor19handleKeyboardEventEPNS_13KeyboardEventE(HEAP32[(HEAP32[i1 >> 2] | 0) + 464 >> 2] | 0, i2);
 if ((HEAP8[i2 + 21 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 68 >> 2] & 1](i2) | 0) != 32) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore12EventHandler24defaultSpaceEventHandlerEPNS_13KeyboardEventE(i1, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12EventHandler21handleMousePressEventERKNS_28MouseEventWithHitTestResultsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if (HEAP8[H_BASE + 216 | 0] | 0) {
  i6 = HEAP32[H_BASE + 256 >> 2] | 0;
 } else {
  i7 = __Znwj(16) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 12) | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i7 + 12 >> 2] = 0;
  HEAP32[H_BASE + 256 >> 2] = i8;
  HEAP8[H_BASE + 216 | 0] = 1;
  i6 = i8;
 }
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 8 | 0;
   i7 = i8 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore9TimerBase4stopEv(i1 + 152 | 0);
 i6 = i1 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0);
 i8 = HEAP32[(HEAP32[i6 >> 2] | 0) + 452 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 216 >> 2] & 1](i8 | 0, i2 + 16 | 0) | 0) {
    i10 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i10 | 0;
  }
 } while (0);
 i8 = i2 + 36 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) < 2;
 i7 = i2 + 48 | 0;
 i11 = __ZNK7WebCore13HitTestResult10targetNodeEv(i7) | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = 17;
  } else {
   i13 = i11 + 32 | 0;
   if ((HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0) {
    i14 = i13 | 0;
   } else {
    i14 = HEAP32[i13 >> 2] | 0;
   }
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    i12 = 17;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 172 >> 2] & 1](i11) | 0) {
    i12 = 17;
    break;
   }
   if (__ZN7WebCore8Position19nodeIsUserSelectAllEPKNS_4NodeE(i11) | 0) {
    i12 = 17;
   } else {
    i15 = 0;
   }
  }
 } while (0);
 if ((i12 | 0) == 17) {
  i15 = (HEAP32[i2 + 148 >> 2] | 0) == 0 | 0;
 }
 i12 = i1 + 12 | 0;
 HEAP8[i12] = i15;
 HEAP8[i1 + 13 | 0] = i9 & 1;
 HEAP8[i1 + 15 | 0] = 0;
 i15 = i1 + 320 | 0;
 i11 = i2;
 HEAP32[i15 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i15 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i15 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 HEAP32[i15 + 16 >> 2] = HEAP32[i11 + 16 >> 2];
 HEAP32[i15 + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i15 + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i15 + 28 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i15 + 32 >> 2] = HEAP32[i11 + 32 >> 2];
 HEAP32[i15 + 36 >> 2] = HEAP32[i11 + 36 >> 2];
 HEAP32[i15 + 40 >> 2] = HEAP32[i11 + 40 >> 2];
 do {
  if ((HEAP8[i2 + 152 | 0] & 1) != 0) {
   if (__ZN7WebCore12EventHandler32passWidgetMouseDownEventToWidgetERKNS_28MouseEventWithHitTestResultsE(i1, i2) | 0) {
    i10 = 1;
   } else {
    break;
   }
   STACKTOP = i3;
   return i10 | 0;
  }
 } while (0);
 i11 = HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if ((HEAP8[i11 + 1576 | 0] & 32) != 0) {
   if (!(__ZNK7WebCore11SVGDocument17zoomAndPanEnabledEv(i11) | 0)) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] & 8 | 0) == 0 | i9 ^ 1) {
    break;
   }
   HEAP8[i1 + 208 | 0] = 1;
   i15 = HEAP32[i6 >> 2] | 0;
   i14 = HEAP32[i15 + 456 >> 2] | 0;
   __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i5, HEAP32[i15 + 452 >> 2] | 0, i2 + 16 | 0);
   __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i4, i5);
   __ZN7WebCore11SVGDocument8startPanERKNS_10FloatPointE(i14, i4);
   i10 = 1;
   STACKTOP = i3;
   return i10 | 0;
  }
 } while (0);
 if (i9) {
  __ZN7WebCore12EventHandler17focusDocumentViewEv(i1);
 }
 i9 = __ZNK7WebCore13HitTestResult10targetNodeEv(i7) | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i11 = i9 | 0;
   i14 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i5 = i1 + 20 | 0;
 i9 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i5 + 4 >> 2] = i9;
 HEAP8[i1 + 4 | 0] = 1;
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) == 2) {
   if ((HEAP32[i2 + 32 >> 2] | 0) != 0) {
    i16 = 0;
    break;
   }
   i8 = HEAP32[i6 >> 2] | 0;
   if ((HEAP32[(HEAP32[i8 + 468 >> 2] | 0) + 84 >> 2] | 0) == 2) {
    HEAP32[i9 >> 2] = 2;
    i16 = 1;
    break;
   }
   if ((HEAP8[i12] & 1) == 0) {
    i16 = 1;
    break;
   }
   __ZN7WebCore12EventHandler34selectClosestWordFromHitTestResultERKNS_13HitTestResultENS_24AppendTrailingWhitespaceE(i1, i7, (__ZN7WebCore6Editor33isSelectTrailingWhitespaceEnabledEv(HEAP32[i8 + 464 >> 2] | 0) | 0) & 1 ^ 1);
   i16 = 1;
  } else {
   if ((i5 | 0) > 2) {
    i16 = __ZN7WebCore12EventHandler32handleMousePressEventTripleClickERKNS_28MouseEventWithHitTestResultsE(i1, i2) | 0;
    break;
   } else {
    i16 = __ZN7WebCore12EventHandler32handleMousePressEventSingleClickERKNS_28MouseEventWithHitTestResultsE(i1, i2) | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i12] & 1) == 0) {
   i2 = HEAP32[i4 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i17 = 0;
    break;
   }
   if ((__ZNK7WebCore4Node9renderBoxEv(i2) | 0) == 0) {
    i17 = 0;
    break;
   }
   i2 = __ZNK7WebCore4Node9renderBoxEv(HEAP32[i4 >> 2] | 0) | 0;
   i17 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 920 >> 2] & 1](i2) | 0) & 1;
  } else {
   i17 = 1;
  }
 } while (0);
 HEAP8[i1 + 148 | 0] = i17;
 i10 = i16;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN7WebCore12EventHandler27handleMouseDoubleClickEventERKNS_18PlatformMouseEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i10 + 452 >> 2] | 0;
 i12 = (i11 | 0) != 0;
 if (i12) {
  i13 = i11 + 4 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  i14 = HEAP32[i9 >> 2] | 0;
 } else {
  i14 = i10;
 }
 i10 = (HEAP32[i14 + 468 >> 2] | 0) + 192 | 0;
 HEAP8[i10] = HEAP8[i10] & -5;
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i6, 0);
 HEAP8[i1 + 4 | 0] = 0;
 HEAP8[i1 + 280 | 0] = 0;
 i10 = i2 + 16 | 0;
 i14 = i10;
 i13 = i1 + 284 | 0;
 i15 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i13 + 4 >> 2] = i15;
 i15 = i2 + 24 | 0;
 i13 = i1 + 292 | 0;
 i16 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i13 + 4 >> 2] = i16;
 HEAP32[i7 >> 2] = 260;
 i16 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i16 + 456 >> 2] | 0;
 i13 = HEAP32[i16 + 452 >> 2] | 0;
 i16 = i4;
 if ((i13 | 0) == 0) {
  i15 = HEAP32[i14 >> 2] | 0;
  i17 = HEAP32[i14 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = i15;
  HEAP32[i4 + 4 >> 2] = i17;
  i18 = i15;
  i19 = i17;
 } else {
  __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i16, i13 | 0, i10);
  i18 = HEAP32[i4 >> 2] | 0;
  i19 = HEAP32[i16 + 4 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = i18;
 HEAP32[i5 + 4 >> 2] = i19;
 __ZN7WebCore8Document17prepareMouseEventERKNS_14HitTestRequestERKNS_11LayoutPointERKNS_18PlatformMouseEventE(i8, i9, i7, i5, i2);
 do {
  if ((HEAP8[i8 + 152 | 0] & 1) == 0) {
   i20 = 0;
  } else {
   i5 = __ZNK7WebCore13HitTestResult10targetNodeEv(i8 + 48 | 0) | 0;
   if ((i5 | 0) == 0) {
    i20 = 0;
    break;
   }
   i7 = i5 + 32 | 0;
   if ((HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0) {
    i21 = i7 | 0;
   } else {
    i21 = HEAP32[i7 >> 2] | 0;
   }
   i7 = HEAP32[i21 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i20 = 0;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 228 >> 2] & 1](i7) | 0)) {
    i20 = 0;
    break;
   }
   i5 = HEAP32[i7 + 108 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i20 = 0;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] & 1](i5) | 0)) {
    i20 = 0;
    break;
   }
   i20 = HEAP32[i5 + 216 >> 2] | 0;
  }
 } while (0);
 do {
  if ((HEAP8[i1 + 228 | 0] & 1) != 0) {
   i21 = i1 + 224 | 0;
   i5 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i21 = i5 + 8 | 0;
   i5 = i21 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
  }
 } while (0);
 do {
  if ((i20 | 0) == 0) {
   i22 = 24;
  } else {
   if (!(__ZN7WebCore12EventHandler29passMousePressEventToSubframeERNS_28MouseEventWithHitTestResultsEPNS_5FrameE(i1, i8, i20) | 0)) {
    i22 = 24;
    break;
   }
   i23 = 1;
   i24 = i8 + 48 | 0;
  }
 } while (0);
 if ((i22 | 0) == 24) {
  i20 = i1 + 252 | 0;
  HEAP32[i20 >> 2] = HEAP32[i2 + 36 >> 2];
  i21 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 256 | 0;
  i7 = i8 + 48 | 0;
  i5 = __ZNK7WebCore13HitTestResult10targetNodeEv(i7) | 0;
  i9 = __ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb(i1, i21, i5, 0, HEAP32[i20 >> 2] | 0, i2, 0) | 0;
  do {
   if ((HEAP32[i2 + 32 >> 2] | 0) == 2) {
    i25 = 0;
   } else {
    i5 = __ZNK7WebCore13HitTestResult10targetNodeEv(i7) | 0;
    if ((HEAP32[i1 + 256 >> 2] | 0) != (i5 | 0)) {
     i25 = 0;
     break;
    }
    i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 56 | 0;
    i21 = __ZNK7WebCore13HitTestResult10targetNodeEv(i7) | 0;
    i25 = (__ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb(i1, i5, i21, 0, HEAP32[i20 >> 2] | 0, i2, 1) | 0) ^ 1;
   }
  } while (0);
  i21 = HEAP32[i1 + 244 >> 2] | 0;
  if ((i21 | 0) == 0) {
   if (i9) {
    i22 = 30;
   } else {
    i26 = 0;
    i27 = 1;
   }
  } else {
   if (__ZN7WebCore9Scrollbar7mouseUpERKNS_18PlatformMouseEventE(i21, i2) | 0) {
    i26 = 0;
    i27 = 1;
   } else {
    i22 = 30;
   }
  }
  if ((i22 | 0) == 30) {
   i26 = __ZN7WebCore12EventHandler23handleMouseReleaseEventERKNS_28MouseEventWithHitTestResultsE(i1, i8) | 0;
   i27 = 0;
  }
  HEAP32[i20 >> 2] = 0;
  i20 = i1 + 256 | 0;
  i1 = HEAP32[i20 >> 2] | 0;
  HEAP32[i20 >> 2] = 0;
  do {
   if ((i1 | 0) != 0) {
    i20 = i1 + 8 | 0;
    i8 = i20 | 0;
    i22 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    HEAP32[i8 >> 2] = i22;
    if ((i22 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
   }
  } while (0);
  i23 = i27 | (i25 | i26);
  i24 = i7;
 }
 __ZN7WebCore13HitTestResultD1Ev(i24);
 __ZN7WebCore20UserGestureIndicatorD1Ev(i6);
 if (!i12) {
  STACKTOP = i3;
  return i23 | 0;
 }
 i12 = i11 + 4 | 0;
 i11 = i12 | 0;
 i6 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i11 >> 2] = i6;
  STACKTOP = i3;
  return i23 | 0;
 }
 i6 = i12 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return i23 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
 STACKTOP = i3;
 return i23 | 0;
}
function __ZN7WebCore12EventHandler5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 32 | 0);
 __ZN7WebCore9TimerBase4stopEv(i1 + 88 | 0);
 __ZN7WebCore9TimerBase4stopEv(i1 + 152 | 0);
 if (+HEAPF64[i1 + 424 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i1 + 416 | 0);
 }
 HEAP32[i1 + 220 >> 2] = 0;
 i2 = i1 + 232 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 236 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
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
 i2 = i1 + 212 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore18SVGElementInstance14removedLastRefEv(i2 - 4 | 0);
  }
 } while (0);
 i3 = i1 + 216 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 4 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore18SVGElementInstance14removedLastRefEv(i3 - 4 | 0);
  }
 } while (0);
 i2 = i1 + 240 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i3 = i1 + 244 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i2 >> 2] = i4;
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 HEAP32[i1 + 252 >> 2] = 0;
 i5 = i1 + 256 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i3 = i5 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i4 = i1 + 268 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i2 = i4 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i5 = i1 + 260 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i3 = i5 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP8[i1 + 264 | 0] = 0;
 HEAP8[i1 + 280 | 0] = 1;
 i4 = i1 + 8 | 0;
 _memset(i1 + 284 | 0, 0, 16) | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i2 = i4 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP8[i1 + 4 | 0] = 0;
 HEAP8[i1 + 5 | 0] = 0;
 i5 = i1 + 224 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 8 | 0;
   i3 = i5 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i4 = i1 + 388 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i2 = i4 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i5 = i1 + 396 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) == 0) {
  i6 = i1 + 400 | 0;
  i7 = i6;
  _memset(i7 | 0, 0, 14) | 0;
  return;
 }
 i5 = i4 + 8 | 0;
 i4 = i5 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  i6 = i1 + 400 | 0;
  i7 = i6;
  _memset(i7 | 0, 0, 14) | 0;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i6 = i1 + 400 | 0;
  i7 = i6;
  _memset(i7 | 0, 0, 14) | 0;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i6 = i1 + 400 | 0;
 i7 = i6;
 _memset(i7 | 0, 0, 14) | 0;
 return;
}
function __ZN7WebCore12EventHandler26sendContextMenuEventForKeyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i19 = i1 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 i21 = HEAP32[i20 + 452 >> 2] | 0;
 if ((i21 | 0) == 0) {
  i22 = 0;
  STACKTOP = i2;
  return i22 | 0;
 }
 i23 = HEAP32[i20 + 456 >> 2] | 0;
 if ((i23 | 0) == 0) {
  i22 = 0;
  STACKTOP = i2;
  return i22 | 0;
 }
 HEAP8[i1 + 4 | 0] = 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 i24 = i23 + 680 | 0;
 i25 = HEAP32[i24 >> 2] | 0;
 i26 = HEAP32[i20 + 468 >> 2] | 0;
 i20 = i26 + 32 | 0;
 i27 = HEAP32[i26 + 56 >> 2] | 0;
 i28 = (i27 | 0) == 0;
 do {
  if (i28) {
   i29 = 10;
  } else {
   i30 = i27 + 8 | 0;
   HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
   if ((__ZNK7WebCore16VisibleSelection19rootEditableElementEv(i20) | 0) == 0) {
    if ((HEAP32[i26 + 84 >> 2] | 0) != 2) {
     i29 = 10;
     break;
    }
   }
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i5, i20);
   i30 = i5 | 0;
   i31 = HEAP32[i30 >> 2] | 0;
   HEAP32[i30 >> 2] = 0;
   __ZNK7WebCore6Editor17firstRectForRangeEPNS_5RangeE(i6, HEAP32[(HEAP32[i19 >> 2] | 0) + 464 >> 2] | 0, i31);
   i30 = (HEAP32[i6 + 12 >> 2] | 0) + (HEAP32[i6 + 4 >> 2] | 0) | 0;
   i32 = (i30 | 0) == 0;
   HEAP32[i3 >> 2] = (i32 ? 0 : 0) | HEAP32[i6 >> 2];
   HEAP32[i3 + 4 >> 2] = i32 ? 0 : i30 - 1 | 0;
   if ((i31 | 0) == 0) {
    i29 = 14;
    break;
   }
   i30 = i31 | 0;
   i32 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i32 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i31);
    __ZN3WTF8fastFreeEPv(i31);
    i29 = 14;
    break;
   } else {
    HEAP32[i30 >> 2] = i32;
    i29 = 14;
    break;
   }
  }
 } while (0);
 do {
  if ((i29 | 0) == 10) {
   if ((i25 | 0) == 0) {
    HEAP32[i3 >> 2] = 1;
    HEAP32[i3 + 4 >> 2] = 1;
    i29 = 14;
    break;
   }
   i6 = __ZNK7WebCore4Node20renderBoxModelObjectEv(i25 | 0) | 0;
   if ((i6 | 0) == 0) {
    i33 = 0;
    break;
   }
   __ZNK7WebCore12RenderObject39pixelSnappedAbsoluteClippedOverflowRectEv(i7, i6 | 0);
   i6 = (HEAP32[i7 + 4 >> 2] | 0) - 1 + (HEAP32[i7 + 12 >> 2] | 0) | 0;
   HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i3 + 4 >> 2] = i6;
   i29 = 14;
  }
 } while (0);
 if ((i29 | 0) == 14) {
  i29 = HEAP32[(HEAP32[i19 >> 2] | 0) + 452 >> 2] | 0;
  __ZN7WebCore6Widget9setCursorERKNS_6CursorE(i29, __ZN7WebCore13pointerCursorEv() | 0);
  __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i9, i21 | 0, i4);
  i4 = __ZNK7WebCore9FrameView10hostWindowEv(i21) | 0;
  i21 = HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0;
  i29 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i11 + 4 >> 2] = i29;
  i29 = i10 + 8 | 0;
  HEAP32[i29 >> 2] = 0;
  HEAP32[i29 + 4 >> 2] = 0;
  FUNCTION_TABLE_viii[i21 & 1](i15, i4, i12);
  i12 = HEAP32[i14 >> 2] | 0;
  i4 = HEAP32[i14 + 4 >> 2] | 0;
  i14 = HEAP32[i24 >> 2] | 0;
  i24 = (i14 | 0) == 0 ? i23 | 0 : i14 | 0;
  HEAP32[i16 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i16 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i13, i16);
  __ZN7WebCore13HitTestResult12setInnerNodeEPNS_4NodeE(i13, i24);
  HEAP32[i17 >> 2] = 260;
  __ZN7WebCore8Document22updateHoverActiveStateERKNS_14HitTestRequestEPNS_7ElementEPKNS_18PlatformMouseEventENS_23StyleResolverUpdateFlagE(i23, i17, __ZNK7WebCore13HitTestResult12innerElementEv(i13) | 0, 0, 2);
  d34 = +__ZN3WTF11currentTimeEv();
  HEAP32[i18 >> 2] = 6;
  HEAP32[i18 + 4 >> 2] = 0;
  HEAPF64[i18 + 8 >> 3] = d34;
  i17 = i18 + 16 | 0;
  i23 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i17 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i17 + 4 >> 2] = i23;
  i23 = i18 + 24 | 0;
  HEAP32[i23 >> 2] = i12;
  HEAP32[i23 + 4 >> 2] = i4;
  HEAP32[i18 + 32 >> 2] = 2;
  HEAP32[i18 + 36 >> 2] = 1;
  HEAP32[i18 + 40 >> 2] = 0;
  i4 = (__ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 84 | 0, i24, 0, 0, i18, 0) | 0) ^ 1;
  __ZN7WebCore13HitTestResultD1Ev(i13);
  i33 = i4;
 }
 if (i28) {
  i22 = i33;
  STACKTOP = i2;
  return i22 | 0;
 }
 i28 = i27 + 8 | 0;
 i27 = i28 | 0;
 i4 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
 HEAP32[i27 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  i22 = i33;
  STACKTOP = i2;
  return i22 | 0;
 }
 if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
  i22 = i33;
  STACKTOP = i2;
  return i22 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
 i22 = i33;
 STACKTOP = i2;
 return i22 | 0;
}
function __ZN7WebCore12EventHandlerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 416 | 0);
 i2 = HEAP32[i1 + 396 >> 2] | 0;
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
 i2 = HEAP32[i1 + 388 >> 2] | 0;
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
 i2 = i1 + 376 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 380 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 268 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 260 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 256 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore6CursorD1Ev(i1 + 248 | 0);
 i3 = HEAP32[i1 + 244 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i5 >> 2] = i4;
    break;
   }
   i4 = i2 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 i3 = HEAP32[i1 + 240 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i2 = i4 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i2 >> 2] = i5;
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i3 = HEAP32[i1 + 236 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 232 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i2 = i5 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 224 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 216 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i2 = i5 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore18SVGElementInstance14removedLastRefEv(i5 - 4 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 212 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore18SVGElementInstance14removedLastRefEv(i5 - 4 | 0);
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 152 | 0);
 i3 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore9TimerBaseD2Ev(i3);
  __ZdlPv(i3 | 0);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 88 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 32 | 0);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 8 | 0;
 i3 = i1 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore12EventHandlerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 416 | 0);
 i2 = HEAP32[i1 + 396 >> 2] | 0;
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
 i2 = HEAP32[i1 + 388 >> 2] | 0;
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
 i2 = i1 + 376 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 380 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 268 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 260 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 256 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore6CursorD1Ev(i1 + 248 | 0);
 i3 = HEAP32[i1 + 244 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i5 >> 2] = i4;
    break;
   }
   i4 = i2 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 i3 = HEAP32[i1 + 240 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i2 = i4 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i2 >> 2] = i5;
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i3 = HEAP32[i1 + 236 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 232 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i2 = i5 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 224 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 8 | 0;
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 216 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i2 = i5 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore18SVGElementInstance14removedLastRefEv(i5 - 4 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 212 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore18SVGElementInstance14removedLastRefEv(i5 - 4 | 0);
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 152 | 0);
 i3 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore9TimerBaseD2Ev(i3);
  __ZdlPv(i3 | 0);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 88 | 0);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 32 | 0);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 8 | 0;
 i3 = i1 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCoreL37expandSelectionToRespectUserSelectAllEPNS_4NodeERKNS_16VisibleSelectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 80 | 0;
 i9 = i4 + 96 | 0;
 i10 = i4 + 112 | 0;
 i11 = i4 + 128 | 0;
 i12 = __ZN7WebCore8Position24rootUserSelectAllForNodeEPNS_4NodeE(i2) | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionC2ERKS0_(i1, i3);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore16VisibleSelectionC2ERKS0_(i7, i3);
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = i12;
 i2 = i12 + 8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i9, i6, 1);
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 + 8 | 0;
   i13 = i3 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   HEAP32[i13 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore8Position8upstreamENS_27EditingBoundaryCrossingRuleE(i8, i9, 0);
 __ZN7WebCore16VisibleSelection7setBaseERKNS_8PositionE(i7, i8);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 8 | 0;
   i3 = i8 | 0;
   i14 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 + 8 | 0;
   i8 = i9 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i12;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 __ZN7WebCore8PositionC1EN3WTF10PassRefPtrINS_4NodeEEENS0_10AnchorTypeE(i11, i5, 2);
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   i2 = i6 | 0;
   i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 __ZNK7WebCore8Position10downstreamENS_27EditingBoundaryCrossingRuleE(i10, i11, 0);
 __ZN7WebCore16VisibleSelection9setExtentERKNS_8PositionE(i7, i10);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 8 | 0;
   i6 = i10 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 + 8 | 0;
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
 i5 = i7 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i11;
 HEAP32[i1 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 i11 = HEAP32[i7 + 8 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i12 = i5;
 i10 = HEAP32[i12 >> 2] & -8 | i11 & 7;
 HEAP32[i12 >> 2] = i10;
 HEAP8[i5] = i10 & 255 & -9 | i11 & 8;
 i11 = i7 + 12 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i10;
 HEAP32[i1 + 16 >> 2] = HEAP32[i7 + 16 >> 2];
 i10 = HEAP32[i7 + 20 >> 2] | 0;
 i11 = i1 + 20 | 0;
 i5 = i11;
 i12 = HEAP32[i5 >> 2] & -8 | i10 & 7;
 HEAP32[i5 >> 2] = i12;
 HEAP8[i11] = i12 & 255 & -9 | i10 & 8;
 i10 = i7 + 24 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 24 >> 2] = i12;
 HEAP32[i1 + 28 >> 2] = HEAP32[i7 + 28 >> 2];
 i12 = HEAP32[i7 + 32 >> 2] | 0;
 i10 = i1 + 32 | 0;
 i11 = i10;
 i5 = HEAP32[i11 >> 2] & -8 | i12 & 7;
 HEAP32[i11 >> 2] = i5;
 HEAP8[i10] = i5 & 255 & -9 | i12 & 8;
 i12 = i7 + 36 | 0;
 i5 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i5;
 HEAP32[i1 + 40 >> 2] = HEAP32[i7 + 40 >> 2];
 i5 = HEAP32[i7 + 44 >> 2] | 0;
 i12 = i1 + 44 | 0;
 i10 = i12;
 i11 = HEAP32[i10 >> 2] & -8 | i5 & 7;
 HEAP32[i10 >> 2] = i11;
 HEAP8[i12] = i11 & 255 & -9 | i5 & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i7 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i7 + 52 >> 2];
 i5 = HEAP8[i7 + 56 | 0] | 0;
 i11 = i1 + 56 | 0;
 HEAP8[i11] = HEAP8[i11] & -4 | i5 & 1 | i5 & 2;
 __ZN7WebCore16VisibleSelectionD2Ev(i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12EventHandler23handleMouseReleaseEventERKNS_28MouseEventWithHitTestResultsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 64 | 0;
 i6 = i3 + 80 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = i1 + 144 | 0;
 if (__ZNK7WebCore20AutoscrollController20autoscrollInProgressEv(HEAP32[i9 >> 2] | 0) | 0) {
  __ZN7WebCore20AutoscrollController19stopAutoscrollTimerEb(HEAP32[i9 >> 2] | 0, 0);
 }
 i9 = i2 | 0;
 if (__ZNK7WebCore12EventHandler18eventActivatedViewERKNS_18PlatformMouseEventE(i1, i9) | 0) {
  i10 = 1;
  STACKTOP = i3;
  return i10 | 0;
 }
 HEAP8[i1 + 4 | 0] = 0;
 HEAP8[i1 + 5 | 0] = 0;
 HEAP8[i1 + 13 | 0] = 0;
 HEAP8[i1 + 12 | 0] = 0;
 HEAP8[i1 + 148 | 0] = 0;
 HEAP8[i1 + 149 | 0] = 0;
 do {
  if ((HEAP8[i1 + 15 | 0] & 1) == 0) {
   i11 = 0;
  } else {
   if ((HEAP32[i1 + 16 >> 2] | 0) == 2) {
    i11 = 0;
    break;
   }
   if ((HEAP32[i1 + 20 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
    i11 = 0;
    break;
   }
   if ((HEAP32[i1 + 24 >> 2] | 0) != (HEAP32[i2 + 20 >> 2] | 0)) {
    i11 = 0;
    break;
   }
   i12 = i1 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 468 >> 2] | 0) + 84 >> 2] | 0) != 2) {
    i11 = 0;
    break;
   }
   if ((HEAP32[i2 + 32 >> 2] | 0) == 2) {
    i11 = 0;
    break;
   }
   __ZN7WebCore16VisibleSelectionC1Ev(i4);
   i13 = __ZNK7WebCore13HitTestResult10targetNodeEv(i2 + 48 | 0) | 0;
   i14 = (HEAP8[(HEAP32[(HEAP32[i12 >> 2] | 0) + 36 >> 2] | 0) + 183 | 0] & 4) == 0;
   do {
    if ((i13 | 0) != 0) {
     i15 = i13 + 12 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     i17 = i13 + 32 | 0;
     if ((i16 & 2048 | 0) == 0) {
      i18 = i17 | 0;
     } else {
      i18 = HEAP32[i17 >> 2] | 0;
     }
     if ((HEAP32[i18 >> 2] | 0) == 0) {
      break;
     }
     if (i14) {
      if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i13, 0, 1) | 0)) {
       break;
      }
      i19 = HEAP32[i15 >> 2] | 0;
     } else {
      i19 = i16;
     }
     if ((i19 & 2048 | 0) == 0) {
      i20 = i17 | 0;
     } else {
      i20 = HEAP32[i17 >> 2] | 0;
     }
     i17 = HEAP32[i20 >> 2] | 0;
     i16 = HEAP32[(HEAP32[i17 >> 2] | 0) + 464 >> 2] | 0;
     i15 = i2 + 136 | 0;
     i21 = HEAP32[i15 + 4 >> 2] | 0;
     HEAP32[i6 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i6 + 4 >> 2] = i21;
     FUNCTION_TABLE_viii[i16 & 1](i5, i17, i7);
     __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i8, i5, 0);
     __ZN7WebCore16VisibleSelectionaSEOS0_(i4, i8) | 0;
     __ZN7WebCore16VisibleSelectionD2Ev(i8);
     i17 = HEAP32[i5 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i16 = i17 + 8 | 0;
     i17 = i16 | 0;
     i21 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     HEAP32[i17 >> 2] = i21;
     if ((i21 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i16 - 8 | 0);
    }
   } while (0);
   i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 468 >> 2] | 0;
   do {
    if (!(__ZN7WebCoreeqERKNS_16VisibleSelectionES2_(i13 + 32 | 0, i4) | 0)) {
     if (!(__ZNK7WebCore14FrameSelection21shouldChangeSelectionERKNS_16VisibleSelectionE(i13, i4) | 0)) {
      break;
     }
     __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i13, i4, 6, 0, 0);
    }
   } while (0);
   __ZN7WebCore16VisibleSelectionD2Ev(i4);
   i11 = 1;
  }
 } while (0);
 i4 = i1 | 0;
 __ZN7WebCore14FrameSelection31notifyRendererOfSelectionChangeENS_14EUserTriggeredE(HEAP32[(HEAP32[i4 >> 2] | 0) + 468 >> 2] | 0, 1);
 __ZN7WebCore14FrameSelection41selectFrameElementInParentIfFullySelectedEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 468 >> 2] | 0);
 if ((HEAP32[i2 + 32 >> 2] | 0) != 1) {
  i10 = i11;
  STACKTOP = i3;
  return i10 | 0;
 }
 i10 = __ZN7WebCore12EventHandler26handlePasteGlobalSelectionERKNS_18PlatformMouseEventE(i1, i9) | 0 | i11;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN7WebCore12EventHandler24defaultWheelEventHandlerEPNS_4NodeEPNS_10WheelEventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, d26 = +0, i27 = 0, i28 = 0, d29 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((i2 | 0) == 0 | (i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i1 + 396 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 i7 = HEAP32[i3 + 160 >> 2] | 0;
 if ((i7 | 0) == 2) {
  i8 = 1;
 } else if ((i7 | 0) == 1) {
  i8 = 0;
 } else if ((i7 | 0) == 0) {
  i8 = 3;
 } else {
  i8 = 3;
 }
 do {
  if ((HEAP8[i1 + 392 | 0] & 1) == 0) {
   i9 = 0;
   i10 = 15;
  } else {
   if (!(__ZN7WebCore19applicationIsITunesEv() | 0)) {
    i9 = 0;
    i10 = 15;
    break;
   }
   i7 = HEAP32[i1 + 368 >> 2] | 0;
   i11 = HEAP32[i1 + 372 >> 2] | 0;
   if (i7 >>> 0 > i11 >>> 0) {
    i12 = (HEAP32[i1 + 380 >> 2] | 0) + i11 | 0;
   } else {
    i12 = i11;
   }
   i13 = (i12 | 0) != (i7 | 0);
   if ((i7 | 0) == (i11 | 0)) {
    i14 = i13;
    i15 = i13;
   } else {
    i16 = HEAP32[i1 + 376 >> 2] | 0;
    i17 = (HEAP32[i1 + 380 >> 2] | 0) - 1 | 0;
    i18 = i7;
    i7 = i13;
    i19 = i13;
    while (1) {
     i13 = +Math_abs(+(+HEAPF32[i16 + (i18 << 3) + 4 >> 2])) > +Math_abs(+(+HEAPF32[i16 + (i18 << 3) >> 2]));
     i20 = i7 & i13;
     i21 = (i18 | 0) == (i17 | 0) ? 0 : i18 + 1 | 0;
     i22 = ((i13 & 1 ^ 1) & (i19 & 1) | 0) != 0;
     if ((i21 | 0) == (i11 | 0)) {
      i14 = i20;
      i15 = i22;
      break;
     } else {
      i18 = i21;
      i7 = i20;
      i19 = i22;
     }
    }
   }
   if (i14) {
    i10 = 28;
    break;
   }
   i9 = i15 ? 2 : 0;
   i10 = 15;
  }
 } while (0);
 if ((i10 | 0) == 15) {
  d23 = +HEAPF64[i3 + 136 >> 3];
  do {
   if (d23 != +0) {
    i15 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
    i14 = i2 + 32 | 0;
    if (i15) {
     i24 = i14 | 0;
    } else {
     i24 = HEAP32[i14 >> 2] | 0;
    }
    if ((HEAP32[i24 >> 2] | 0) == 0) {
     break;
    }
    if (i15) {
     i25 = i14 | 0;
    } else {
     i25 = HEAP32[i14 >> 2] | 0;
    }
    i14 = __ZNK7WebCore12RenderObject12enclosingBoxEv(HEAP32[i25 >> 2] | 0) | 0;
    if (d23 > +0) {
     d26 = d23;
    } else {
     d26 = +-0 - d23;
    }
    if (!(FUNCTION_TABLE_iiiifi[HEAP32[(HEAP32[i14 >> 2] | 0) + 912 >> 2] & 1](i14, d23 < +0 ? 2 : 3, i8, d26, i5) | 0)) {
     break;
    }
    HEAP8[i3 + 21 | 0] = 1;
   }
  } while (0);
  if ((i9 | 0) != 2) {
   i10 = 28;
  }
 }
 do {
  if ((i10 | 0) == 28) {
   d26 = +HEAPF64[i3 + 144 >> 3];
   if (d26 == +0) {
    break;
   }
   i9 = (HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0;
   i25 = i2 + 32 | 0;
   if (i9) {
    i27 = i25 | 0;
   } else {
    i27 = HEAP32[i25 >> 2] | 0;
   }
   if ((HEAP32[i27 >> 2] | 0) == 0) {
    break;
   }
   if (i9) {
    i28 = i25 | 0;
   } else {
    i28 = HEAP32[i25 >> 2] | 0;
   }
   i25 = __ZNK7WebCore12RenderObject12enclosingBoxEv(HEAP32[i28 >> 2] | 0) | 0;
   if (d26 > +0) {
    d29 = d26;
   } else {
    d29 = +-0 - d26;
   }
   if (!(FUNCTION_TABLE_iiiifi[HEAP32[(HEAP32[i25 >> 2] | 0) + 912 >> 2] & 1](i25, d26 >= +0 | 0, i8, d29, i5) | 0)) {
    break;
   }
   HEAP8[i3 + 21 | 0] = 1;
  }
 } while (0);
 if ((HEAP32[i1 + 388 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i5 = i1 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i1;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 + 8 | 0;
 i5 = i1 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i6;
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
function __ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i1 | 0;
 i1 = HEAP32[(HEAP32[i13 >> 2] | 0) + 452 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i14 = 0;
  STACKTOP = i6;
  return i14 | 0;
 }
 __ZN7WebCore9FrameView25resetDeferredRepaintDelayEv(i1);
 d15 = +HEAPF64[i4 + 8 >> 3];
 i1 = HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0;
 i13 = i8 | 0;
 HEAP32[i13 >> 2] = i1;
 if ((i1 | 0) != 0) {
  i16 = i1 + 36 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 i16 = HEAP32[i4 + 24 >> 2] | 0;
 i1 = HEAP32[i4 + 28 >> 2] | 0;
 i17 = HEAP32[i4 + 16 >> 2] | 0;
 i18 = HEAP32[i4 + 20 >> 2] | 0;
 i19 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = i9 | 0;
 HEAP32[i4 >> 2] = 0;
 i20 = i10 | 0;
 HEAP32[i20 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i21 = i5 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 }
 __ZN7WebCore10MouseEvent6createERKN3WTF12AtomicStringEbbdNS1_10PassRefPtrINS_9DOMWindowEEEiiiiibbbbtNS5_INS_11EventTargetEEENS5_INS_9ClipboardEEEb(i7, i2, 1, 1, d15, i8, 0, i16, i1, i17, i18, (i19 & 2 | 0) != 0, (i19 & 1 | 0) != 0, (i19 & 8 | 0) != 0, (i19 & 4 | 0) != 0, 0, i9, i10, 0);
 i10 = i7 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i20 = i10 | 0;
   i9 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore9ClipboardD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    HEAP32[i20 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 60 >> 2] & 15](i10);
 }
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 + 36 | 0;
   i4 = i13 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i4 >> 2] = i9;
    break;
   }
   i9 = i13 - 36 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] & 15](i9);
  }
 } while (0);
 i10 = i7;
 i9 = i11 | 0;
 HEAP32[i9 >> 2] = i10;
 i13 = (i7 | 0) == 0;
 if (!i13) {
  i4 = i7 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i12 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i3 | 0, i11, i4) | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 8 | 0;
   i11 = i9 | 0;
   i3 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i11 >> 2] = i3;
    break;
   }
   i3 = i9 - 8 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
  }
 } while (0);
 i4 = (HEAP8[i7 + 20 | 0] & 1) != 0;
 if (i13) {
  i14 = i4;
  STACKTOP = i6;
  return i14 | 0;
 }
 i13 = i7 + 8 | 0;
 i3 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i10);
  i14 = i4;
  STACKTOP = i6;
  return i14 | 0;
 } else {
  HEAP32[i13 >> 2] = i3;
  i14 = i4;
  STACKTOP = i6;
  return i14 | 0;
 }
 return 0;
}
function __ZN7WebCore12EventHandler37selectClosestWordOrLinkFromMouseEventERKNS_28MouseEventWithHitTestResultsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 64 | 0;
 i6 = i3 + 80 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = i2 + 48 | 0;
 if (!(__ZNK7WebCore13HitTestResult10isLiveLinkEv(i10) | 0)) {
  if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i2 + 36 >> 2] | 0) == 2) {
   i11 = (__ZN7WebCore6Editor33isSelectTrailingWhitespaceEnabledEv(HEAP32[(HEAP32[i1 >> 2] | 0) + 464 >> 2] | 0) | 0) & 1 ^ 1;
  } else {
   i11 = 1;
  }
  __ZN7WebCore12EventHandler34selectClosestWordFromHitTestResultERKNS_13HitTestResultENS_24AppendTrailingWhitespaceE(i1, i10, i11);
  STACKTOP = i3;
  return;
 }
 i11 = __ZNK7WebCore13HitTestResult10targetNodeEv(i10) | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i11 + 12 | 0;
 i12 = i11 + 32 | 0;
 if ((HEAP32[i10 >> 2] & 2048 | 0) == 0) {
  i13 = i12 | 0;
 } else {
  i13 = HEAP32[i12 >> 2] | 0;
 }
 if ((HEAP32[i13 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore16VisibleSelectionC1Ev(i4);
 i13 = HEAP32[i2 + 144 >> 2] | 0;
 if ((HEAP32[i10 >> 2] & 2048 | 0) == 0) {
  i14 = i12 | 0;
 } else {
  i14 = HEAP32[i12 >> 2] | 0;
 }
 i12 = HEAP32[i14 >> 2] | 0;
 i14 = HEAP32[(HEAP32[i12 >> 2] | 0) + 464 >> 2] | 0;
 i10 = i2 + 136 | 0;
 i2 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i6 + 4 >> 2] = i2;
 FUNCTION_TABLE_viii[i14 & 1](i5, i12, i7);
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 L28 : do {
  if ((i5 | 0) != 0) {
   i12 = i5 + 8 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i12 = i13 | 0;
   i14 = __ZNK7WebCore4Node14isDescendantOfEPKS0_(i5, i12) | 0;
   i2 = i5 + 8 | 0;
   i6 = i2 - 8 | 0;
   i10 = i2 | 0;
   i15 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i15;
   do {
    if ((i15 | 0) < 1) {
     if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
      i16 = 19;
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i6);
     if (!i14) {
      break L28;
     }
    } else {
     i16 = 19;
    }
   } while (0);
   if ((i16 | 0) == 19) {
    if (!i14) {
     break;
    }
   }
   __ZN7WebCore16VisibleSelection27selectionFromContentsOfNodeEPNS_4NodeE(i8, i12);
   __ZN7WebCore16VisibleSelectionaSEOS0_(i4, i8) | 0;
   __ZN7WebCore16VisibleSelectionD2Ev(i8);
  }
 } while (0);
 __ZN7WebCoreL37expandSelectionToRespectUserSelectAllEPNS_4NodeERKNS_16VisibleSelectionE(i9, i11, i4);
 __ZN7WebCore12EventHandler49updateSelectionForMouseDownDispatchingSelectStartEPNS_4NodeERKNS_16VisibleSelectionENS_15TextGranularityE(i1, i11, i9, 1) | 0;
 __ZN7WebCore16VisibleSelectionD2Ev(i9);
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 + 8 | 0;
   i11 = i7 | 0;
   i1 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionD2Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12EventHandler17cancelDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = i1 + 260 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 | 0;
 L1 : do {
  if ((i5 | 0) != 0) {
   L3 : do {
    if ((HEAP32[i5 + 12 >> 2] & 4 | 0) != 0) {
     i7 = HEAP32[i6 + 44 >> 2] | 0;
     i8 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
     do {
      if ((i7 | 0) != (i8 | 0)) {
       i9 = HEAP32[i7 + 12 >> 2] | 0;
       if ((i9 | 0) == (HEAP32[i8 + 12 >> 2] | 0)) {
        if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0)) {
         break;
        }
       }
       i10 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
       if ((i7 | 0) == (i10 | 0)) {
        break;
       }
       if ((i9 | 0) == (HEAP32[i10 + 12 >> 2] | 0)) {
        if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0)) {
         break;
        }
       }
       if ((i5 | 0) == 0) {
        break L1;
       } else {
        break L3;
       }
      }
     } while (0);
     i7 = HEAP32[i6 + 52 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break L1;
     }
     __ZN7WebCore12EventHandler17cancelDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE(HEAP32[i7 + 472 >> 2] | 0, i2, i3);
     break L1;
    }
   } while (0);
   if (HEAP8[H_BASE + 216 | 0] | 0) {
    i11 = HEAP32[H_BASE + 256 >> 2] | 0;
   } else {
    i7 = __Znwj(16) | 0;
    i8 = i7;
    _memset(i7 | 0, 0, 12) | 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i7 + 12 >> 2] = 0;
    HEAP32[H_BASE + 256 >> 2] = i8;
    HEAP8[H_BASE + 216 | 0] = 1;
    i11 = i8;
   }
   do {
    if ((HEAP32[i11 >> 2] | 0) != 0) {
     if ((HEAP8[i11 + 4 | 0] & 1) == 0) {
      break;
     }
     i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 120 | 0;
     __ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, i8, HEAP32[i11 >> 2] | 0, i2, HEAP32[i11 + 12 >> 2] | 0) | 0;
    }
   } while (0);
   i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 132 | 0;
   __ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, i8, HEAP32[i4 >> 2] | 0, i2, i3) | 0;
  }
 } while (0);
 __ZN7WebCore20AutoscrollController19stopAutoscrollTimerEb(HEAP32[i1 + 144 >> 2] | 0, 0);
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i2 = i4 | 0;
   i11 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 224 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) == 0) {
  i12 = i1 + 264 | 0;
  HEAP8[i12] = 0;
  return;
 }
 i3 = i4 + 8 | 0;
 i4 = i3 | 0;
 i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i11;
 if ((i11 | 0) >= 1) {
  i12 = i1 + 264 | 0;
  HEAP8[i12] = 0;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i12 = i1 + 264 | 0;
  HEAP8[i12] = 0;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i12 = i1 + 264 | 0;
 HEAP8[i12] = 0;
 return;
}
function __ZN7WebCore12EventHandler20handleTextInputEventERKN3WTF6StringEPNS_5EventENS_18TextEventInputTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = (i3 | 0) == 0;
 if (i11) {
  i12 = __ZN7WebCore29eventTargetElementForDocumentEPNS_8DocumentE(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) | 0;
 } else {
  i12 = HEAP32[i3 + 32 >> 2] | 0;
 }
 if ((i12 | 0) == 0) {
  i13 = 0;
  STACKTOP = i5;
  return i13 | 0;
 }
 i14 = i1 | 0;
 i1 = HEAP32[i14 >> 2] | 0;
 i15 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i16 = i1;
 } else {
  __ZN7WebCore9FrameView25resetDeferredRepaintDelayEv(i15);
  i16 = HEAP32[i14 >> 2] | 0;
 }
 i14 = HEAP32[(HEAP32[i16 + 456 >> 2] | 0) + 336 >> 2] | 0;
 i16 = i7 | 0;
 HEAP32[i16 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i15 = i14 + 36 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 __ZN7WebCore9TextEvent6createEN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringENS_18TextEventInputTypeE(i6, i7, i2, i4);
 i4 = i6 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i16 = i4 + 36 | 0;
   i2 = i16 | 0;
   i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i2 >> 2] = i7;
    break;
   }
   i7 = i16 - 36 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 15](i7);
  }
 } while (0);
 i4 = i6;
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = i3;
 if (!i11) {
  i11 = i3 + 8 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 }
 __ZN7WebCore5Event18setUnderlyingEventEN3WTF10PassRefPtrIS0_EE(i4, i8);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 + 8 | 0;
   i11 = i7 | 0;
   i3 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i11 >> 2] = i3;
    break;
   }
   i3 = i7 - 8 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
  }
 } while (0);
 i8 = i9 | 0;
 HEAP32[i8 >> 2] = i4;
 i3 = (i6 | 0) == 0;
 if (!i3) {
  i7 = i6 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i10 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i12, i9, i7) | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 + 8 | 0;
   i9 = i8 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i9 >> 2] = i12;
    break;
   }
   i12 = i8 - 8 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
  }
 } while (0);
 i7 = (HEAP8[i6 + 21 | 0] & 1) != 0;
 if (i3) {
  i13 = i7;
  STACKTOP = i5;
  return i13 | 0;
 }
 i3 = i6 + 8 | 0;
 i12 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i4);
  i13 = i7;
  STACKTOP = i5;
  return i13 | 0;
 } else {
  HEAP32[i3 >> 2] = i12;
  i13 = i7;
  STACKTOP = i5;
  return i13 | 0;
 }
 return 0;
}
function __ZN7WebCore12EventHandler17dragSourceEndedAtERKNS_18PlatformMouseEventENS_13DragOperationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 HEAP32[i7 >> 2] = 272;
 i9 = HEAP32[i1 >> 2] | 0;
 i10 = HEAP32[i9 + 456 >> 2] | 0;
 i11 = i2 + 16 | 0;
 i12 = HEAP32[i9 + 452 >> 2] | 0;
 i9 = i5;
 if ((i12 | 0) == 0) {
  i13 = i11;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = HEAP32[i13 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = i14;
  HEAP32[i5 + 4 >> 2] = i15;
  i16 = i14;
  i17 = i15;
 } else {
  __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i9, i12 | 0, i11);
  i16 = HEAP32[i5 >> 2] | 0;
  i17 = HEAP32[i9 + 4 >> 2] | 0;
 }
 HEAP32[i6 >> 2] = i16;
 HEAP32[i6 + 4 >> 2] = i17;
 __ZN7WebCore8Document17prepareMouseEventERKNS_14HitTestRequestERKNS_11LayoutPointERKNS_18PlatformMouseEventE(i8, i10, i7, i6, i2);
 __ZN7WebCore13HitTestResultD1Ev(i8 + 48 | 0);
 if (HEAP8[H_BASE + 216 | 0] | 0) {
  i18 = HEAP32[H_BASE + 256 >> 2] | 0;
 } else {
  i8 = __Znwj(16) | 0;
  i6 = i8;
  _memset(i8 | 0, 0, 12) | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i8 + 12 >> 2] = 0;
  HEAP32[H_BASE + 256 >> 2] = i6;
  HEAP8[H_BASE + 216 | 0] = 1;
  i18 = i6;
 }
 do {
  if ((HEAP32[i18 >> 2] | 0) != 0) {
   if ((HEAP8[i18 + 4 | 0] & 1) == 0) {
    break;
   }
   __ZN7WebCore9Clipboard23setDestinationOperationENS_13DragOperationE(HEAP32[i18 + 12 >> 2] | 0, i3);
   i6 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 124 | 0;
   if (HEAP8[H_BASE + 216 | 0] | 0) {
    i8 = HEAP32[H_BASE + 256 >> 2] | 0;
    i19 = i8;
    i20 = HEAP32[i8 >> 2] | 0;
   } else {
    i8 = __Znwj(16) | 0;
    i7 = i8;
    _memset(i8 | 0, 0, 12) | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 12 >> 2] = 0;
    HEAP32[H_BASE + 256 >> 2] = i7;
    HEAP8[H_BASE + 216 | 0] = 1;
    i19 = i7;
    i20 = 0;
   }
   __ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, i6, i20, i2, HEAP32[i19 + 12 >> 2] | 0) | 0;
  }
 } while (0);
 __ZN7WebCore12EventHandler13freeClipboardEv(0);
 if (HEAP8[H_BASE + 216 | 0] | 0) {
  i21 = HEAP32[H_BASE + 256 >> 2] | 0;
 } else {
  i19 = __Znwj(16) | 0;
  i2 = i19;
  _memset(i19 | 0, 0, 12) | 0;
  HEAP32[i19 >> 2] = 0;
  HEAP32[i19 + 12 >> 2] = 0;
  HEAP32[H_BASE + 256 >> 2] = i2;
  HEAP8[H_BASE + 216 | 0] = 1;
  i21 = i2;
 }
 i2 = i21 | 0;
 i21 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i21 | 0) == 0) {
  i22 = i1 + 13 | 0;
  HEAP8[i22] = 0;
  STACKTOP = i4;
  return;
 }
 i2 = i21 + 8 | 0;
 i21 = i2 | 0;
 i19 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
 HEAP32[i21 >> 2] = i19;
 if ((i19 | 0) >= 1) {
  i22 = i1 + 13 | 0;
  HEAP8[i22] = 0;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  i22 = i1 + 13 | 0;
  HEAP8[i22] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 i22 = i1 + 13 | 0;
 HEAP8[i22] = 0;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore12EventHandler17eventMayStartDragERKNS_18PlatformMouseEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 128 | 0;
 i8 = i3 + 136 | 0;
 i9 = i3 + 144 | 0;
 i10 = i3 + 160 | 0;
 i11 = i1 | 0;
 if ((__ZNK7WebCore5Frame15contentRendererEv(HEAP32[i11 >> 2] | 0) | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 if ((HEAP32[(__ZNK7WebCore5Frame15contentRendererEv(HEAP32[i11 >> 2] | 0) | 0) + 20 >> 2] & 32768 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 if ((HEAP32[i2 + 32 >> 2] | 0) != 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 if ((HEAP32[i2 + 36 >> 2] | 0) != 1) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i13 = HEAP32[i11 >> 2] | 0;
 i14 = HEAP32[i13 + 452 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i15 = HEAP32[i13 + 32 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i13 = HEAP32[i15 + 28 >> 2] | 0;
 __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i4, i14 | 0, i1 + 300 | 0);
 __ZN7WebCore14DragController24delegateDragSourceActionERKNS_8IntPointE(i13, i4) | 0;
 HEAP32[i5 >> 2] = 258;
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i8, i14 | 0, i2 + 16 | 0);
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i6, i7);
 __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(__ZNK7WebCore5Frame15contentRendererEv(HEAP32[i11 >> 2] | 0) | 0, i5, i6) | 0;
 i5 = i9 | 0;
 HEAP32[i5 >> 2] = 0;
 i7 = i9 + 12 | 0;
 HEAP32[i7 >> 2] = 0;
 do {
  if ((__ZNK7WebCore13HitTestResult12innerElementEv(i6) | 0) == 0) {
   i16 = 0;
  } else {
   i8 = HEAP32[i15 + 28 >> 2] | 0;
   i2 = HEAP32[i11 >> 2] | 0;
   i14 = __ZNK7WebCore13HitTestResult12innerElementEv(i6) | 0;
   i4 = HEAP32[i6 + 84 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i6 + 80 >> 2];
   HEAP32[i10 + 4 >> 2] = i4;
   i4 = (__ZNK7WebCore14DragController16draggableElementEPKNS_5FrameEPNS_7ElementERKNS_8IntPointERNS_9DragStateE(i8, i2, i14, i10, i9) | 0) != 0;
   i14 = HEAP32[i7 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i16 = i4;
    break;
   }
   i2 = i14 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore9ClipboardD1Ev(i14);
    __ZN3WTF8fastFreeEPv(i14);
    i16 = i4;
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    i16 = i4;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 8 | 0;
   i9 = i5 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore13HitTestResultD1Ev(i6);
 i12 = i16;
 STACKTOP = i3;
 return i12 | 0;
}
function __ZN7WebCore16VisibleSelectionaSEOS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i3 = i4 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i5 = i2 + 8 | 0;
 i4 = i1 + 8 | 0;
 i6 = i4;
 i3 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i3;
 HEAP8[i4] = i3 & 255 & -9 | HEAP8[i5] & 8;
 i5 = i2 + 12 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 12 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 8 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i4 = i2 + 20 | 0;
 i3 = i1 + 20 | 0;
 i6 = i3;
 i5 = HEAP32[i6 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i6 >> 2] = i5;
 HEAP8[i3] = i5 & 255 & -9 | HEAP8[i4] & 8;
 i4 = i2 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 24 | 0;
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
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i3 = i2 + 32 | 0;
 i5 = i1 + 32 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 i3 = i2 + 36 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 36 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i3 = i4 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i5 = i2 + 44 | 0;
 i4 = i1 + 44 | 0;
 i6 = i4;
 i3 = HEAP32[i6 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i6 >> 2] = i3;
 HEAP8[i4] = i3 & 255 & -9 | HEAP8[i5] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i5 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i3 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i3;
 HEAP8[i2] = i3 & -3 | HEAP8[i5] & 2;
 return i1 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
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
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 9) {
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
  i13 = __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
 if ((i6 | 0) == 0) {
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
  i5 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
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
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
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
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
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
function __ZN7WebCore12EventHandler18performDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = i1 + 260 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 | 0;
 L1 : do {
  if ((i5 | 0) == 0) {
   i7 = 0;
  } else {
   L3 : do {
    if ((HEAP32[i5 + 12 >> 2] & 4 | 0) != 0) {
     i8 = HEAP32[i6 + 44 >> 2] | 0;
     i9 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
     do {
      if ((i8 | 0) != (i9 | 0)) {
       i10 = HEAP32[i8 + 12 >> 2] | 0;
       if ((i10 | 0) == (HEAP32[i9 + 12 >> 2] | 0)) {
        if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0)) {
         break;
        }
       }
       i11 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
       if ((i8 | 0) == (i11 | 0)) {
        break;
       }
       if ((i10 | 0) == (HEAP32[i11 + 12 >> 2] | 0)) {
        if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i11 + 16 >> 2] | 0)) {
         break;
        }
       }
       if ((i5 | 0) == 0) {
        i7 = 0;
        break L1;
       } else {
        break L3;
       }
      }
     } while (0);
     i8 = HEAP32[i6 + 52 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break L1;
     }
     i7 = __ZN7WebCore12EventHandler18performDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE(HEAP32[i8 + 472 >> 2] | 0, i2, i3) | 0;
     break L1;
    }
   } while (0);
   i7 = __ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 144 | 0, i5, i2, i3) | 0;
  }
 } while (0);
 __ZN7WebCore20AutoscrollController19stopAutoscrollTimerEb(HEAP32[i1 + 144 >> 2] | 0, 0);
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 8 | 0;
   i2 = i4 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 224 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) == 0) {
  i12 = i1 + 264 | 0;
  HEAP8[i12] = 0;
  return i7 | 0;
 }
 i3 = i4 + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i12 = i1 + 264 | 0;
  HEAP8[i12] = 0;
  return i7 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i12 = i1 + 264 | 0;
  HEAP8[i12] = 0;
  return i7 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i12 = i1 + 264 | 0;
 HEAP8[i12] = 0;
 return i7 | 0;
}
function __ZN7WebCore12EventHandler10mouseMovedERKNS_18PlatformMouseEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 112 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 452 >> 2] | 0;
 i8 = (i7 | 0) != 0;
 if (i8) {
  i9 = i7 + 4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 i9 = i1 + 400 | 0;
 d10 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i4, i5);
 i5 = __ZN7WebCore12EventHandler20handleMouseMoveEventERKNS_18PlatformMouseEventEPNS_13HitTestResultEb(i1, i2, i4, 0) | 0;
 i1 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i11 = HEAP32[i4 + 72 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i12 = i11 + 32 | 0;
    if ((HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0) {
     i13 = i12 | 0;
    } else {
     i13 = HEAP32[i12 >> 2] | 0;
    }
    i12 = HEAP32[i13 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    i14 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i12) | 0;
    if ((i14 | 0) == 0) {
     break;
    }
    i12 = HEAP32[(HEAP32[i6 >> 2] | 0) + 452 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    i15 = i14 | 0;
    if (!(__ZNK7WebCore9FrameView22containsScrollableAreaEPNS_14ScrollableAreaE(i12, i15) | 0)) {
     break;
    }
    __ZNK7WebCore14ScrollableArea23mouseMovedInContentAreaEv(i15);
   }
  } while (0);
  i13 = HEAP32[(HEAP32[i6 >> 2] | 0) + 452 >> 2] | 0;
  if ((i13 | 0) != 0) {
   __ZNK7WebCore14ScrollableArea23mouseMovedInContentAreaEv(i13 + 36 | 0);
  }
  __ZN7WebCore13HitTestResult22setToNonShadowAncestorEv(i4);
  i13 = i1 + 20 | 0;
  __ZN7WebCore6Chrome23mouseDidMoveOverElementERKNS_13HitTestResultEj(HEAP32[i13 >> 2] | 0, i4, HEAP32[i2 + 40 >> 2] | 0);
  __ZN7WebCore6Chrome10setToolTipERKNS_13HitTestResultE(HEAP32[i13 >> 2] | 0, i4);
 }
 __ZN7WebCore13HitTestResultD1Ev(i4);
 d16 = +__ZN3WTF27monotonicallyIncreasingTimeEv() - d10;
 d10 = +HEAPF64[i9 >> 3];
 HEAPF64[i9 >> 3] = d10 < d16 ? d16 : d10;
 if (!i8) {
  STACKTOP = i3;
  return i5 | 0;
 }
 i8 = i7 + 4 | 0;
 i7 = i8 | 0;
 i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i7 >> 2] = i9;
  STACKTOP = i3;
  return i5 | 0;
 }
 i9 = i8 - 4 | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return i5 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCore12EventHandler23handleMouseDraggedEventERKNS_28MouseEventWithHitTestResultsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 120 | 0;
 if ((HEAP8[i1 + 4 | 0] & 1) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 if (__ZN7WebCore12EventHandler10handleDragERKNS_28MouseEventWithHitTestResultsENS_19CheckDragHysteresisE(i1, i2, 0) | 0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i2 + 48 | 0;
 i9 = __ZNK7WebCore13HitTestResult10targetNodeEv(i8) | 0;
 if ((HEAP32[i2 + 32 >> 2] | 0) != 0 | (i9 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i2 = i9 + 32 | 0;
 if ((HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0) {
  i10 = i2 | 0;
 } else {
  i10 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = __ZNK7WebCore4Node25parentOrShadowHostElementEv(i9) | 0;
   if ((i10 | 0) == 0) {
    i7 = 0;
    STACKTOP = i3;
    return i7 | 0;
   }
   i11 = i10 + 32 | 0;
   if ((HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0) {
    i12 = i11 | 0;
   } else {
    i12 = HEAP32[i11 >> 2] | 0;
   }
   i11 = HEAP32[i12 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i7 = 0;
    STACKTOP = i3;
    return i7 | 0;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 100 >> 2] & 1](i11) | 0) {
    i13 = i11;
    break;
   } else {
    i7 = 0;
   }
   STACKTOP = i3;
   return i7 | 0;
  } else {
   i13 = i2;
  }
 } while (0);
 HEAP8[i1 + 13 | 0] = 0;
 i2 = i1 + 148 | 0;
 do {
  if ((HEAP8[i2] & 1) != 0) {
   i12 = i1 + 144 | 0;
   if (__ZNK7WebCore20AutoscrollController19panScrollInProgressEv(HEAP32[i12 >> 2] | 0) | 0) {
    break;
   }
   __ZN7WebCore20AutoscrollController27startAutoscrollForSelectionEPNS_12RenderObjectE(HEAP32[i12 >> 2] | 0, i13);
   HEAP8[i2] = 0;
  }
 } while (0);
 if ((HEAP32[i1 + 16 >> 2] | 0) != 2) {
  HEAP32[i4 >> 2] = 262;
  HEAP32[i6 >> 2] = HEAP32[i1 + 300 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 304 >> 2];
  __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i5, i6);
  __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) + 1584 >> 2] | 0, i4, i5) | 0;
  __ZN7WebCore12EventHandler27updateSelectionForMouseDragERKNS_13HitTestResultE(i1, i5);
  __ZN7WebCore13HitTestResultD1Ev(i5);
 }
 __ZN7WebCore12EventHandler27updateSelectionForMouseDragERKNS_13HitTestResultE(i1, i8);
 i7 = 1;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore12EventHandler32handleMousePressEventTripleClickERKNS_28MouseEventWithHitTestResultsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 64 | 0;
 i6 = i3 + 80 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 if ((HEAP32[i2 + 32 >> 2] | 0) != 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i10 = __ZNK7WebCore13HitTestResult10targetNodeEv(i2 + 48 | 0) | 0;
 if ((i10 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i11 = i10 + 12 | 0;
 i12 = i10 + 32 | 0;
 if ((HEAP32[i11 >> 2] & 2048 | 0) == 0) {
  i13 = i12 | 0;
 } else {
  i13 = HEAP32[i12 >> 2] | 0;
 }
 if ((HEAP32[i13 >> 2] | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 __ZN7WebCore16VisibleSelectionC1Ev(i4);
 if ((HEAP32[i11 >> 2] & 2048 | 0) == 0) {
  i14 = i12 | 0;
 } else {
  i14 = HEAP32[i12 >> 2] | 0;
 }
 i12 = HEAP32[i14 >> 2] | 0;
 i14 = HEAP32[(HEAP32[i12 >> 2] | 0) + 464 >> 2] | 0;
 i11 = i2 + 136 | 0;
 i2 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i6 + 4 >> 2] = i2;
 FUNCTION_TABLE_viii[i14 & 1](i5, i12, i6);
 i6 = i5 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i7, i5, 0);
  __ZN7WebCore16VisibleSelectionaSEOS0_(i4, i7) | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i7);
  __ZN7WebCore16VisibleSelection22expandUsingGranularityENS_15TextGranularityE(i4, 4) | 0;
 }
 __ZN7WebCoreL37expandSelectionToRespectUserSelectAllEPNS_4NodeERKNS_16VisibleSelectionE(i8, i10, i4);
 i7 = __ZN7WebCore12EventHandler49updateSelectionForMouseDownDispatchingSelectStartEPNS_4NodeERKNS_16VisibleSelectionENS_15TextGranularityE(i1, i10, i8, 4) | 0;
 __ZN7WebCore16VisibleSelectionD2Ev(i8);
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 + 8 | 0;
   i10 = i6 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore16VisibleSelectionD2Ev(i4);
 i9 = i7;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore12EventHandler20hitTestResultAtPointERKNS_11LayoutPointEjRKNS_10LayoutSizeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 144 | 0;
 i13 = i2 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 i14 = HEAP32[i2 + 28 >> 2] | 0;
 do {
  if ((i14 | 0) != (i2 | 0)) {
   i15 = HEAP32[i2 + 452 >> 2] | 0;
   i16 = HEAP32[i14 + 452 >> 2] | 0;
   if ((i15 | 0) == 0 | (i16 | 0) == 0) {
    break;
   }
   i17 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i9 + 4 >> 2] = i17;
   __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i8, i15 | 0, i9);
   __ZNK7WebCore10ScrollView18rootViewToContentsERKNS_8IntPointE(i7, i16 | 0, i8);
   i16 = HEAP32[i14 + 472 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   __ZN7WebCore12EventHandler20hitTestResultAtPointERKNS_11LayoutPointEjRKNS_10LayoutSizeE(i1, i16, i10, i4, i5);
   STACKTOP = i6;
   return;
  }
 } while (0);
 i10 = HEAP32[i5 + 4 >> 2] | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointEjjjj(i11, i3, i10, i7, i10, i7);
 if ((__ZNK7WebCore5Frame15contentRendererEv(HEAP32[i13 >> 2] | 0) | 0) == 0) {
  __ZN7WebCore13HitTestResultC1ERKS0_(i1, i11);
 } else {
  i7 = i12 | 0;
  HEAP32[i7 >> 2] = i4 | 1024;
  __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(__ZNK7WebCore5Frame15contentRendererEv(HEAP32[i13 >> 2] | 0) | 0, i12, i11) | 0;
  i4 = HEAP32[i7 >> 2] | 0;
  if ((i4 & 2 | 0) == 0) {
   i10 = HEAP32[(HEAP32[i13 >> 2] | 0) + 456 >> 2] | 0;
   __ZN7WebCore8Document22updateHoverActiveStateERKNS_14HitTestRequestEPNS_7ElementEPKNS_18PlatformMouseEventENS_23StyleResolverUpdateFlagE(i10, i12, __ZNK7WebCore13HitTestResult12innerElementEv(i11) | 0, 0, 2);
   i18 = HEAP32[i7 >> 2] | 0;
  } else {
   i18 = i4;
  }
  if ((i18 & 256 | 0) != 0) {
   __ZN7WebCore13HitTestResult22setToNonShadowAncestorEv(i11);
  }
  __ZN7WebCore13HitTestResultC1ERKS0_(i1, i11);
 }
 __ZN7WebCore13HitTestResultD1Ev(i11);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore12EventHandler34selectClosestWordFromHitTestResultERKNS_13HitTestResultENS_24AppendTrailingWhitespaceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 80 | 0;
 i8 = i4 + 144 | 0;
 i9 = __ZNK7WebCore13HitTestResult10targetNodeEv(i2) | 0;
 __ZN7WebCore16VisibleSelectionC1Ev(i5);
 if ((i9 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 i10 = (HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0;
 i11 = i9 + 32 | 0;
 if (i10) {
  i12 = i11 | 0;
 } else {
  i12 = HEAP32[i11 >> 2] | 0;
 }
 if ((HEAP32[i12 >> 2] | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 if (i10) {
  i13 = i11 | 0;
 } else {
  i13 = HEAP32[i11 >> 2] | 0;
 }
 i11 = HEAP32[i13 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 464 >> 2] & 1](i6, i11, i2 + 88 | 0);
 i2 = i6 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i7, i6, 0);
  __ZN7WebCore16VisibleSelectionaSEOS0_(i5, i7) | 0;
  __ZN7WebCore16VisibleSelectionD2Ev(i7);
  __ZN7WebCore16VisibleSelection22expandUsingGranularityENS_15TextGranularityE(i5, 1) | 0;
 }
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP32[i5 + 52 >> 2] | 0) != 2) {
    break;
   }
   __ZN7WebCore16VisibleSelection24appendTrailingWhitespaceEv(i5);
  }
 } while (0);
 __ZN7WebCoreL37expandSelectionToRespectUserSelectAllEPNS_4NodeERKNS_16VisibleSelectionE(i8, i9, i5);
 __ZN7WebCore12EventHandler49updateSelectionForMouseDownDispatchingSelectStartEPNS_4NodeERKNS_16VisibleSelectionENS_15TextGranularityE(i1, i9, i8, 1) | 0;
 __ZN7WebCore16VisibleSelectionD2Ev(i8);
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 i2 = i8 + 8 | 0;
 i8 = i2 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) >= 1) {
  __ZN7WebCore16VisibleSelectionD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  __ZN7WebCore16VisibleSelectionD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 __ZN7WebCore16VisibleSelectionD2Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN3WTF5DequeIN7WebCore9FloatSizeELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 1 + (i3 >>> 2) | 0;
 i7 = i6 >>> 0 > 16 >>> 0 ? i6 : 16;
 if (i7 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 3) | 0;
 HEAP32[i2 >> 2] = i6 >>> 3;
 i7 = __ZN3WTF10fastMallocEj(i6) | 0;
 HEAP32[i4 >> 2] = i7;
 i6 = i1 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i5 + (i9 << 3) | 0;
 do {
  if (i8 >>> 0 > i9 >>> 0) {
   if ((i9 | 0) == 0) {
    i10 = i8;
   } else {
    i11 = i5;
    i12 = i7;
    while (1) {
     i13 = i11;
     i14 = i12;
     i15 = HEAP32[i13 + 4 >> 2] | 0;
     HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i14 + 4 >> 2] = i15;
     i15 = i11 + 8 | 0;
     if ((i15 | 0) == (i1 | 0)) {
      break;
     } else {
      i11 = i15;
      i12 = i12 + 8 | 0;
     }
    }
    i10 = HEAP32[i6 >> 2] | 0;
   }
   i12 = i10 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
   i11 = i5 + (i3 << 3) | 0;
   if ((i10 | 0) != (i3 | 0)) {
    i15 = i5 + (i10 << 3) | 0;
    i14 = (HEAP32[i4 >> 2] | 0) + (i12 << 3) | 0;
    while (1) {
     i13 = i15;
     i16 = i14;
     i17 = HEAP32[i13 + 4 >> 2] | 0;
     HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i16 + 4 >> 2] = i17;
     i17 = i15 + 8 | 0;
     if ((i17 | 0) == (i11 | 0)) {
      break;
     } else {
      i15 = i17;
      i14 = i14 + 8 | 0;
     }
    }
   }
   HEAP32[i6 >> 2] = i12;
  } else {
   if ((i8 | 0) == (i9 | 0)) {
    break;
   }
   i14 = i5 + (i8 << 3) | 0;
   i15 = i7 + (i8 << 3) | 0;
   while (1) {
    i11 = i14;
    i17 = i15;
    i16 = HEAP32[i11 + 4 >> 2] | 0;
    HEAP32[i17 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i17 + 4 >> 2] = i16;
    i16 = i14 + 8 | 0;
    if ((i16 | 0) == (i1 | 0)) {
     break;
    } else {
     i14 = i16;
     i15 = i15 + 8 | 0;
    }
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore12EventHandler26handlePasteGlobalSelectionERKNS_18PlatformMouseEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 7) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i2 = i1 | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = __ZNK7WebCore15FocusController18focusedOrMainFrameEv(HEAP32[i1 + 32 >> 2] | 0) | 0;
 if ((HEAP32[i2 >> 2] | 0) != (i9 | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i1 = __ZNK7WebCore6Editor6clientEv(HEAP32[i9 + 464 >> 2] | 0) | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 196 >> 2] & 1](i1) | 0)) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 464 >> 2] | 0;
 HEAP32[i6 >> 2] = H_BASE + 96;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 __ZN7WebCore6Editor7commandERKN3WTF6StringE(i4, i1, i5);
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = 0;
 i6 = __ZNK7WebCore6Editor7Command7executeERKN3WTF6StringEPNS_5EventE(i4, i7, 0) | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i1 = i7 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i1 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i4 + 8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 + 4 | 0;
   i2 = i4 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i4 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = i6;
  STACKTOP = i3;
  return i8 | 0;
 }
 i5 = i7 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  i8 = i6;
  STACKTOP = i3;
  return i8 | 0;
 } else {
  HEAP32[i5 >> 2] = i1;
  i8 = i6;
  STACKTOP = i3;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore12EventHandler24logicalScrollRecursivelyENS_22ScrollLogicalDirectionENS_17ScrollGranularityEPNS_4NodeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = i4;
 i4 = i1;
 L1 : while (1) {
  i6 = i4 | 0;
  __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0);
  do {
   if ((i5 | 0) == 0) {
    i1 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0) + 680 >> 2] | 0;
    if ((i1 | 0) != 0) {
     i7 = i1 | 0;
     i8 = 5;
     break;
    }
    i1 = HEAP32[i4 + 8 >> 2] | 0;
    if ((i1 | 0) != 0) {
     i7 = i1;
     i8 = 5;
    }
   } else {
    i7 = i5;
    i8 = 5;
   }
  } while (0);
  do {
   if ((i8 | 0) == 5) {
    i8 = 0;
    i1 = i7 + 32 | 0;
    if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
     i9 = i1 | 0;
    } else {
     i9 = HEAP32[i1 >> 2] | 0;
    }
    i1 = HEAP32[i9 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 100 >> 2] & 1](i1) | 0) {
     break;
    }
    i10 = __ZNK7WebCore12RenderObject12enclosingBoxEv(i1) | 0;
    if (FUNCTION_TABLE_iiiifi[HEAP32[(HEAP32[i10 >> 2] | 0) + 916 >> 2] & 1](i10, i2, i3, +1, 0) | 0) {
     i8 = 11;
     break L1;
    }
   }
  } while (0);
  i10 = HEAP32[i6 >> 2] | 0;
  i1 = HEAP32[i10 + 452 >> 2] | 0;
  if ((i1 | 0) != 0) {
   if (__ZN7WebCore10ScrollView13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityE(i1 | 0, i2, i3) | 0) {
    i11 = 1;
    i8 = 19;
    break;
   }
  }
  i1 = __ZNK7WebCore9FrameTree6parentEv(i10 + 40 | 0) | 0;
  if ((i1 | 0) == 0) {
   i11 = 0;
   i8 = 20;
   break;
  }
  i5 = HEAP32[(HEAP32[i6 >> 2] | 0) + 448 >> 2] | 0;
  i4 = HEAP32[i1 + 472 >> 2] | 0;
 }
 if ((i8 | 0) == 11) {
  i4 = HEAP32[(HEAP32[i6 >> 2] | 0) + 452 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i11 = 1;
   return i11 | 0;
  }
  __ZN7WebCore9FrameView20setWasScrolledByUserEb(i4, 1);
  i11 = 1;
  return i11 | 0;
 } else if ((i8 | 0) == 19) {
  return i11 | 0;
 } else if ((i8 | 0) == 20) {
  return i11 | 0;
 }
 return 0;
}
function __ZN7WebCore12EventHandler20sendContextMenuEventERKNS_18PlatformMouseEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 184 | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i10 + 452 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
  STACKTOP = i3;
  return i12 | 0;
 }
 i13 = HEAP32[i10 + 456 >> 2] | 0;
 HEAP8[i1 + 4 | 0] = 0;
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i5, i11 | 0, i2 + 16 | 0);
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i6 >> 2] = 260;
 __ZN7WebCore8Document17prepareMouseEventERKNS_14HitTestRequestERKNS_11LayoutPointERKNS_18PlatformMouseEventE(i7, i13, i6, i4, i2);
 __ZNK7WebCore6Editor8behaviorEv(i8, HEAP32[(HEAP32[i9 >> 2] | 0) + 464 >> 2] | 0);
 do {
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   if (__ZN7WebCore14FrameSelection8containsERKNS_11LayoutPointE(HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0, i4) | 0) {
    break;
   }
   if ((HEAP32[i7 + 148 >> 2] | 0) != 0) {
    break;
   }
   if (!(__ZNK7WebCore16VisibleSelection17isContentEditableEv((HEAP32[(HEAP32[i9 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0)) {
    i6 = i7 + 48 | 0;
    if ((__ZNK7WebCore13HitTestResult10targetNodeEv(i6) | 0) == 0) {
     break;
    }
    if ((HEAP32[(__ZNK7WebCore13HitTestResult10targetNodeEv(i6) | 0) + 12 >> 2] & 1 | 0) == 0) {
     break;
    }
   }
   HEAP8[i1 + 12 | 0] = 1;
   __ZN7WebCore12EventHandler37selectClosestWordOrLinkFromMouseEventERKNS_28MouseEventWithHitTestResultsE(i1, i7);
  }
 } while (0);
 i9 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 84 | 0;
 i4 = i7 + 48 | 0;
 i7 = (__ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb(i1, i9, __ZNK7WebCore13HitTestResult10targetNodeEv(i4) | 0, 0, 0, i2, 0) | 0) ^ 1;
 __ZN7WebCore13HitTestResultD1Ev(i4);
 i12 = i7;
 STACKTOP = i3;
 return i12 | 0;
}
function __ZN7WebCore12EventHandler17scrollRecursivelyENS_15ScrollDirectionENS_17ScrollGranularityEPNS_4NodeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = i4;
 i4 = i1;
 L1 : while (1) {
  i6 = i4 | 0;
  __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0);
  do {
   if ((i5 | 0) == 0) {
    i1 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0) + 680 >> 2] | 0;
    if ((i1 | 0) != 0) {
     i7 = i1 | 0;
     i8 = 5;
     break;
    }
    i1 = HEAP32[i4 + 8 >> 2] | 0;
    if ((i1 | 0) != 0) {
     i7 = i1;
     i8 = 5;
    }
   } else {
    i7 = i5;
    i8 = 5;
   }
  } while (0);
  do {
   if ((i8 | 0) == 5) {
    i8 = 0;
    i1 = i7 + 32 | 0;
    if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
     i9 = i1 | 0;
    } else {
     i9 = HEAP32[i1 >> 2] | 0;
    }
    i1 = HEAP32[i9 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 100 >> 2] & 1](i1) | 0) {
     break;
    }
    i10 = __ZNK7WebCore12RenderObject12enclosingBoxEv(i1) | 0;
    if (FUNCTION_TABLE_iiiifi[HEAP32[(HEAP32[i10 >> 2] | 0) + 912 >> 2] & 1](i10, i2, i3, +1, 0) | 0) {
     i8 = 11;
     break L1;
    }
   }
  } while (0);
  i10 = HEAP32[i6 >> 2] | 0;
  i1 = HEAP32[i10 + 452 >> 2] | 0;
  if ((i1 | 0) != 0) {
   if (__ZN7WebCore10ScrollView6scrollENS_15ScrollDirectionENS_17ScrollGranularityE(i1 | 0, i2, i3) | 0) {
    i11 = 1;
    i8 = 20;
    break;
   }
  }
  i1 = __ZNK7WebCore9FrameTree6parentEv(i10 + 40 | 0) | 0;
  if ((i1 | 0) == 0) {
   i11 = 0;
   i8 = 21;
   break;
  }
  i5 = HEAP32[(HEAP32[i6 >> 2] | 0) + 448 >> 2] | 0;
  i4 = HEAP32[i1 + 472 >> 2] | 0;
 }
 if ((i8 | 0) == 20) {
  return i11 | 0;
 } else if ((i8 | 0) == 21) {
  return i11 | 0;
 } else if ((i8 | 0) == 11) {
  i8 = HEAP32[(HEAP32[i6 >> 2] | 0) + 452 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i11 = 1;
   return i11 | 0;
  }
  __ZN7WebCore9FrameView20setWasScrolledByUserEb(i8, 1);
  i11 = 1;
  return i11 | 0;
 }
 return 0;
}
function __ZN7WebCore12EventHandler49updateSelectionForMouseDownDispatchingSelectStartEPNS_4NodeERKNS_16VisibleSelectionENS_15TextGranularityE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if (__ZN7WebCore8Position20nodeIsUserSelectNoneEPNS_4NodeE(i2) | 0) {
  i7 = 0;
  STACKTOP = i5;
  return i7 | 0;
 }
 L4 : do {
  if ((i2 | 0) != 0) {
   i8 = i2 + 32 | 0;
   if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
    i9 = i8 | 0;
   } else {
    i9 = HEAP32[i8 >> 2] | 0;
   }
   if ((HEAP32[i9 >> 2] | 0) == 0) {
    break;
   }
   i8 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
   i10 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 328 | 0;
   i11 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i11, i10, 1, 1);
   i10 = i6 | 0;
   HEAP32[i10 >> 2] = i11;
   i11 = FUNCTION_TABLE_iii[i8 & 1](i2, i6) | 0;
   i8 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i10 = i8 + 8 | 0;
     i12 = i10 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i12 >> 2] = i13;
      if (i11) {
       break L4;
      } else {
       i7 = 0;
      }
      STACKTOP = i5;
      return i7 | 0;
     }
     i13 = i10 - 8 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
     if (i11) {
      break L4;
     } else {
      i7 = 0;
     }
     STACKTOP = i5;
     return i7 | 0;
    }
   } while (0);
   if (i11) {
    break;
   } else {
    i7 = 0;
   }
   STACKTOP = i5;
   return i7 | 0;
  }
 } while (0);
 i6 = (HEAP32[i3 + 52 >> 2] | 0) == 2;
 HEAP32[i1 + 16 >> 2] = i6 ? 2 : 1;
 __ZN7WebCore14FrameSelection34setNonDirectionalSelectionIfNeededERKNS_16VisibleSelectionENS_15TextGranularityENS0_23EndPointsAdjustmentModeE(HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0, i3, i6 ? i4 : 0, 1);
 i7 = 1;
 STACKTOP = i5;
 return i7 | 0;
}
function __ZN7WebCore12EventHandler28fakeMouseMoveEventTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if ((HEAP8[(HEAP32[i8 + 36 >> 2] | 0) + 184 | 0] & 2) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i8 + 452 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = HEAP32[i8 + 32 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i9 + 210 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[(HEAP32[i9 + 32 >> 2] | 0) + 8 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore21PlatformKeyboardEvent23getCurrentModifierStateERbS1_S1_S1_(i3, i4, i5, i6);
 i9 = (HEAP8[i3] & 1) == 0;
 i3 = (HEAP8[i4] & 1) == 0;
 i4 = (HEAP8[i5] & 1) == 0;
 i5 = (HEAP8[i6] & 1) == 0;
 d10 = +__ZN3WTF11currentTimeEv();
 HEAP32[i7 >> 2] = 5;
 i6 = i7 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAPF64[i7 + 8 >> 3] = d10;
 if (i9) {
  i11 = 0;
 } else {
  HEAP32[i6 >> 2] = 8;
  i11 = 8;
 }
 if (i3) {
  i12 = i11;
 } else {
  i3 = i11 | 2;
  HEAP32[i6 >> 2] = i3;
  i12 = i3;
 }
 if (i4) {
  i13 = i12;
 } else {
  i4 = i12 | 1;
  HEAP32[i6 >> 2] = i4;
  i13 = i4;
 }
 if (!i5) {
  HEAP32[i6 >> 2] = i13 | 4;
 }
 i13 = i1 + 284 | 0;
 i6 = i7 + 16 | 0;
 i5 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i6 + 4 >> 2] = i5;
 i5 = i1 + 292 | 0;
 i6 = i7 + 24 | 0;
 i13 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = i13;
 HEAP32[i7 + 32 >> 2] = -1;
 HEAP32[i7 + 36 >> 2] = 0;
 HEAP32[i7 + 40 >> 2] = 0;
 __ZN7WebCore12EventHandler10mouseMovedERKNS_18PlatformMouseEventE(i1, i7) | 0;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore12EventHandler29isKeyEventAllowedInFullScreenERKNS_21PlatformKeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if ((HEAP32[i3 + 1688 >> 2] | 0) != 0) {
   if ((HEAP8[i3 + 1684 | 0] & 1) == 0) {
    break;
   } else {
    i4 = 1;
   }
   return i4 | 0;
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) != 4) {
  i3 = HEAP32[i2 + 28 >> 2] | 0;
  if ((i3 - 8 | 0) >>> 0 < 13 >>> 0 | (i3 - 32 | 0) >>> 0 < 15 >>> 0 | (i3 - 186 | 0) >>> 0 < 2 >>> 0) {
   i4 = 1;
   return i4 | 0;
  } else {
   return (i3 - 106 | 0) >>> 0 < 118 >>> 0 | 0;
  }
 }
 i3 = i2 + 16 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i5 + 2;
 i6 = (HEAP32[i2 + 4 >> 2] | 0) == 1;
 do {
  if ((i5 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i2);
   if (i6) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  } else {
   HEAP32[i1 >> 2] = i5;
   if (i6) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = 0;
  } else {
   i3 = i6 | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 2;
   do {
    if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
     i8 = 0;
    } else {
     i1 = i6 + 8 | 0;
     if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
      i8 = HEAP16[HEAP32[i1 >> 2] >> 1] | 0;
      break;
     } else {
      i8 = HEAPU8[HEAP32[i1 >> 2] | 0] | 0;
      break;
     }
    }
   } while (0);
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i7 = i8;
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    i7 = i8;
    break;
   }
  }
 } while (0);
 i4 = i7 << 16 >> 16 == 32;
 return i4 | 0;
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
function __ZNK7WebCore12EventHandler22dragHysteresisExceededERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 452 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i6 | 0;
 d9 = +Math_floor(+HEAPF32[i2 >> 2]);
 do {
  if (d9 < +2147483647) {
   if (d9 <= +-2147483648) {
    i10 = -2147483648;
    break;
   }
   i10 = ~~d9;
  } else {
   i10 = 2147483647;
  }
 } while (0);
 d9 = +Math_floor(+HEAPF32[i2 + 4 >> 2]);
 do {
  if (d9 < +2147483647) {
   if (d9 <= +-2147483648) {
    i11 = -2147483648;
    break;
   }
   i11 = ~~d9;
  } else {
   i11 = 2147483647;
  }
 } while (0);
 HEAP32[i5 >> 2] = i10;
 HEAP32[i5 + 4 >> 2] = i11;
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i4, i8, i5);
 i5 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i1 + 300 >> 2] | 0) | 0;
 i8 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i1 + 304 >> 2] | 0) | 0;
 if (HEAP8[H_BASE + 216 | 0] | 0) {
  i12 = HEAP32[H_BASE + 256 >> 2] | 0;
 } else {
  i1 = __Znwj(16) | 0;
  i4 = i1;
  _memset(i1 | 0, 0, 12) | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  HEAP32[H_BASE + 256 >> 2] = i4;
  HEAP8[H_BASE + 216 | 0] = 1;
  i12 = i4;
 }
 i4 = HEAP32[i12 + 8 >> 2] | 0;
 if ((i4 | 0) == 2) {
  i13 = 5;
 } else if ((i4 | 0) == 4) {
  i13 = 40;
 } else {
  i13 = 3;
 }
 if ((((i5 | 0) > -1 ? i5 : -i5 | 0) | 0) >= (i13 | 0)) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i7 = (((i8 | 0) > -1 ? i8 : -i8 | 0) | 0) >= (i13 | 0);
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore12EventHandler12updateCursorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i3 = i2 | 0;
 i4 = i2 + 32 | 0;
 i5 = i2 + 40 | 0;
 i6 = i2 + 152 | 0;
 i7 = i2 + 160 | 0;
 i8 = i2 + 168 | 0;
 if ((HEAP8[i1 + 280 | 0] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i9 = i1 | 0;
 i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 452 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i11 = __ZNK7WebCore9FrameView10renderViewEv(i10) | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if (!(__ZNK7WebCore9FrameView15shouldSetCursorEv(i10) | 0)) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore21PlatformKeyboardEvent23getCurrentModifierStateERbS1_S1_S1_(i3, i2 + 8 | 0, i2 + 16 | 0, i2 + 24 | 0);
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[i9 >> 2] | 0) + 456 >> 2] | 0);
 HEAP32[i4 >> 2] = 2;
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i7, i10 | 0, i1 + 284 | 0);
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i5, i6);
 __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(i11, i4, i5) | 0;
 __ZN7WebCore12EventHandler12selectCursorERKNS_13HitTestResultEb(i8, i1, i5, (HEAP8[i3] & 1) != 0);
 if ((HEAP8[i8 | 0] & 1) == 0) {
  i12 = i8 + 4 | 0;
 } else {
  i3 = i1 + 248 | 0;
  i1 = i8 + 4 | 0;
  __ZN7WebCore6CursoraSERKS0_(i3, i1) | 0;
  __ZN7WebCore6Widget9setCursorERKNS_6CursorE(i10 | 0, i3);
  i12 = i1;
 }
 __ZN7WebCore6CursorD1Ev(i12);
 __ZN7WebCore13HitTestResultD1Ev(i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12EventHandlerC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP8[i1 + 5 | 0] = 0;
 i2 = i1 + 32 | 0;
 _memset(i1 + 8 | 0, 0, 20) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 128;
 HEAP32[i1 + 76 >> 2] = i1;
 i2 = i1 + 80 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 6;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 88 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 128;
 HEAP32[i1 + 132 >> 2] = i1;
 i2 = i1 + 136 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 2;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = __Znwj(80) | 0;
 __ZN7WebCore20AutoscrollControllerC1Ev(i2);
 HEAP32[i1 + 144 >> 2] = i2;
 HEAP8[i1 + 148 | 0] = 0;
 HEAP8[i1 + 149 | 0] = 0;
 i2 = i1 + 152 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 128;
 HEAP32[i1 + 196 >> 2] = i1;
 i2 = i1 + 200 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 8;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP8[i1 + 208 | 0] = 0;
 HEAP32[i1 + 268 >> 2] = 0;
 HEAP32[i1 + 272 >> 2] = 0;
 HEAP32[i1 + 276 >> 2] = 0;
 _memset(i1 + 212 | 0, 0, 17) | 0;
 _memset(i1 + 232 | 0, 0, 32) | 0;
 HEAP8[i1 + 280 | 0] = 1;
 HEAPF64[i1 + 312 >> 3] = +0;
 _memset(i1 + 284 | 0, 0, 24) | 0;
 HEAP32[i1 + 320 >> 2] = 5;
 _memset(i1 + 324 | 0, 0, 28) | 0;
 HEAP32[i1 + 352 >> 2] = -1;
 HEAP32[i1 + 356 >> 2] = 0;
 HEAP32[i1 + 360 >> 2] = 0;
 i2 = i1 + 416 | 0;
 _memset(i1 + 368 | 0, 0, 26) | 0;
 _memset(i1 + 396 | 0, 0, 19) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 128;
 HEAP32[i1 + 460 >> 2] = i1;
 i2 = i1 + 464 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 10;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore12EventHandlerC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP8[i1 + 5 | 0] = 0;
 i2 = i1 + 32 | 0;
 _memset(i1 + 8 | 0, 0, 20) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 128;
 HEAP32[i1 + 76 >> 2] = i1;
 i2 = i1 + 80 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 6;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 88 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 128;
 HEAP32[i1 + 132 >> 2] = i1;
 i2 = i1 + 136 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 2;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = __Znwj(80) | 0;
 __ZN7WebCore20AutoscrollControllerC1Ev(i2);
 HEAP32[i1 + 144 >> 2] = i2;
 HEAP8[i1 + 148 | 0] = 0;
 HEAP8[i1 + 149 | 0] = 0;
 i2 = i1 + 152 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 128;
 HEAP32[i1 + 196 >> 2] = i1;
 i2 = i1 + 200 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 8;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP8[i1 + 208 | 0] = 0;
 HEAP32[i1 + 268 >> 2] = 0;
 HEAP32[i1 + 272 >> 2] = 0;
 HEAP32[i1 + 276 >> 2] = 0;
 _memset(i1 + 212 | 0, 0, 17) | 0;
 _memset(i1 + 232 | 0, 0, 32) | 0;
 HEAP8[i1 + 280 | 0] = 1;
 HEAPF64[i1 + 312 >> 3] = +0;
 _memset(i1 + 284 | 0, 0, 24) | 0;
 HEAP32[i1 + 320 >> 2] = 5;
 _memset(i1 + 324 | 0, 0, 28) | 0;
 HEAP32[i1 + 352 >> 2] = -1;
 HEAP32[i1 + 356 >> 2] = 0;
 HEAP32[i1 + 360 >> 2] = 0;
 i2 = i1 + 416 | 0;
 _memset(i1 + 368 | 0, 0, 26) | 0;
 _memset(i1 + 396 | 0, 0, 19) | 0;
 __ZN7WebCore9TimerBaseC2Ev(i2);
 HEAP32[i2 >> 2] = H_BASE + 128;
 HEAP32[i1 + 460 >> 2] = i1;
 i2 = i1 + 464 | 0;
 HEAP32[i2 >> 2] = F_BASE_vii + 10;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore12EventHandler24defaultSpaceEventHandlerEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP8[i2 + 60 | 0] | 0;
 if ((i3 & 11) != 0) {
  return;
 }
 if ((HEAP8[i2 + 76 | 0] & 1) != 0) {
  return;
 }
 i4 = (i3 & 255) >>> 2 & 1 ^ 1;
 i3 = i1 | 0;
 i5 = HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 456 >> 2] | 0) + 680 >> 2] | 0;
 i6 = i5 | 0;
 if ((i5 | 0) == 0) {
  i5 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i5 | 0) != 0) {
   i7 = i5;
   i8 = 5;
  }
 } else {
  i7 = i6;
  i8 = 5;
 }
 do {
  if ((i8 | 0) == 5) {
   i6 = i7 + 32 | 0;
   if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
    i9 = i6 | 0;
   } else {
    i9 = HEAP32[i6 >> 2] | 0;
   }
   i6 = HEAP32[i9 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 100 >> 2] & 1](i6) | 0) {
    break;
   }
   i5 = __ZNK7WebCore12RenderObject12enclosingBoxEv(i6) | 0;
   if (!(FUNCTION_TABLE_iiiifi[HEAP32[(HEAP32[i5 >> 2] | 0) + 916 >> 2] & 1](i5, i4, 1, +1, 0) | 0)) {
    break;
   }
   i5 = HEAP32[(HEAP32[i3 >> 2] | 0) + 452 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore9FrameView20setWasScrolledByUserEb(i5, 1);
   }
   HEAP8[i2 + 21 | 0] = 1;
   return;
  }
 } while (0);
 i9 = HEAP32[(HEAP32[i3 >> 2] | 0) + 452 >> 2] | 0;
 if ((i9 | 0) == 0) {
  return;
 }
 if (!(__ZN7WebCore10ScrollView13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityE(i9 | 0, i4, 1) | 0)) {
  return;
 }
 HEAP8[i2 + 21 | 0] = 1;
 return;
}
function __ZN7WebCore12EventHandler15handleAccessKeyERKNS_21PlatformKeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 4 >> 2] & -9;
 if ((i6 | 0) != (__ZN7WebCore12EventHandler18accessKeyModifiersEv() | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i4 | 0;
 i8 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
 __ZNK3WTF6String5lowerEv(i5, i4);
 i4 = __ZN7WebCore8Document21getElementByAccessKeyERKN3WTF6StringE(i2, i5) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  i9 = 0;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 372 >> 2] & 15](i4, 0);
  i9 = 1;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i7 = i9;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i7 = i9;
  STACKTOP = i3;
  return i7 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  i7 = i9;
  STACKTOP = i3;
  return i7 | 0;
 }
 return 0;
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
function __ZN7WebCore12EventHandler21recordWheelEventDeltaERKNS_18PlatformWheelEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0;
 i3 = i1 + 368 | 0;
 d4 = +HEAPF32[i2 + 32 >> 2];
 d5 = +HEAPF32[i2 + 36 >> 2];
 i2 = i3 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = i1 + 372 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i9 = HEAP32[i1 + 380 >> 2] | 0;
   if ((i8 | 0) == 0) {
    if ((i9 | 0) == 0) {
     i10 = 6;
     break;
    } else {
     i11 = 0;
     break;
    }
   } else {
    if ((i8 | 0) == (i9 - 1 | 0)) {
     i10 = 6;
     break;
    } else {
     i11 = i8;
     break;
    }
   }
  } else {
   if ((i8 + 1 | 0) == (i6 | 0)) {
    i10 = 6;
   } else {
    i11 = i8;
   }
  }
 } while (0);
 if ((i10 | 0) == 6) {
  __ZN3WTF5DequeIN7WebCore9FloatSizeELj0EE14expandCapacityEv(i3);
  i11 = HEAP32[i7 >> 2] | 0;
 }
 i3 = (HEAP32[i1 + 376 >> 2] | 0) + (i11 << 3) | 0;
 d12 = +d4;
 d4 = +d5;
 HEAPF32[i3 >> 2] = d12;
 HEAPF32[i3 + 4 >> 2] = d4;
 i3 = HEAP32[i7 >> 2] | 0;
 i11 = HEAP32[i1 + 380 >> 2] | 0;
 i1 = i11 - 1 | 0;
 i10 = (i3 | 0) == (i1 | 0) ? 0 : i3 + 1 | 0;
 HEAP32[i7 >> 2] = i10;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i10 + (i7 >>> 0 > i10 >>> 0 ? i11 : 0) - i7 | 0) >>> 0 <= 3 >>> 0) {
  return;
 }
 HEAP32[i2 >> 2] = (i7 | 0) == (i1 | 0) ? 0 : i7 + 1 | 0;
 return;
}
function __ZN7WebCore12EventHandler13useHandCursorEPNS_4NodeEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((i2 | 0) == 0) {
  return 0;
 }
 i5 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i2, 0, 1) | 0;
 do {
  if (i5) {
   i6 = HEAP32[i1 >> 2] | 0;
   i7 = HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 104 >> 2] | 0;
   if ((i7 | 0) == 4) {
    i8 = 0;
    break;
   } else if ((i7 | 0) == 2) {
    i8 = i4;
    break;
   } else if ((i7 | 0) == 3) {
    i7 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[i6 + 468 >> 2] | 0) + 32 | 0) | 0;
    i8 = (i7 | 0) != (__ZNK7WebCore4Node19rootEditableElementEv(i2) | 0) | i4;
    break;
   } else {
    i8 = 1;
    break;
   }
  } else {
   i8 = 0;
  }
 } while (0);
 if (i3) {
  i9 = i5 ^ 1;
  i10 = i8 | i9;
  return i10 | 0;
 }
 if ((HEAP32[i2 + 12 >> 2] & 16 | 0) == 0) {
  return 0;
 }
 if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
  return 0;
 }
 if (__ZNK7WebCore16HTMLInputElement13isImageButtonEv(i2) | 0) {
  i9 = i5 ^ 1;
  i10 = i8 | i9;
  return i10 | 0;
 } else {
  return 0;
 }
 return 0;
}
function __ZN7WebCore12EventHandler21logicalScrollOverflowENS_22ScrollLogicalDirectionENS_17ScrollGranularityEPNS_4NodeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) + 680 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i6 = i5 | 0;
    break;
   }
   i5 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i7 = 0;
   } else {
    i6 = i5;
    break;
   }
   return i7 | 0;
  } else {
   i6 = i4;
  }
 } while (0);
 i4 = i6 + 32 | 0;
 if ((HEAP32[i6 + 12 >> 2] & 2048 | 0) == 0) {
  i8 = i4 | 0;
 } else {
  i8 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 100 >> 2] & 1](i4) | 0) {
  i7 = 0;
  return i7 | 0;
 }
 i8 = __ZNK7WebCore12RenderObject12enclosingBoxEv(i4) | 0;
 if (!(FUNCTION_TABLE_iiiifi[HEAP32[(HEAP32[i8 >> 2] | 0) + 916 >> 2] & 1](i8, i2, i3, +1, 0) | 0)) {
  i7 = 0;
  return i7 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 452 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i7 = 1;
  return i7 | 0;
 }
 __ZN7WebCore9FrameView20setWasScrolledByUserEb(i3, 1);
 i7 = 1;
 return i7 | 0;
}
function __ZN7WebCore12EventHandler15hoverTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 120 | 0;
 i6 = i2 + 128 | 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 32 | 0);
 i7 = i1 | 0;
 i8 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i7 >> 2] | 0) | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + 452 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = 264;
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i6, i9 | 0, i1 + 284 | 0);
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i4, i5);
 __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(i8, i3, i4) | 0;
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0;
 __ZN7WebCore8Document22updateHoverActiveStateERKNS_14HitTestRequestEPNS_7ElementEPKNS_18PlatformMouseEventENS_23StyleResolverUpdateFlagE(i8, i3, __ZNK7WebCore13HitTestResult12innerElementEv(i4) | 0, 0, 2);
 __ZN7WebCore13HitTestResultD1Ev(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12EventHandler14scrollOverflowENS_15ScrollDirectionENS_17ScrollGranularityEPNS_4NodeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) + 680 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i6 = i5 | 0;
    break;
   }
   i5 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i7 = 0;
   } else {
    i6 = i5;
    break;
   }
   return i7 | 0;
  } else {
   i6 = i4;
  }
 } while (0);
 i4 = i6 + 32 | 0;
 if ((HEAP32[i6 + 12 >> 2] & 2048 | 0) == 0) {
  i8 = i4 | 0;
 } else {
  i8 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 100 >> 2] & 1](i4) | 0) {
  i7 = 0;
  return i7 | 0;
 }
 i8 = __ZNK7WebCore12RenderObject12enclosingBoxEv(i4) | 0;
 if (!(FUNCTION_TABLE_iiiifi[HEAP32[(HEAP32[i8 >> 2] | 0) + 912 >> 2] & 1](i8, i2, i3, +1, 0) | 0)) {
  i7 = 0;
  return i7 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 452 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i7 = 1;
  return i7 | 0;
 }
 __ZN7WebCore9FrameView20setWasScrolledByUserEb(i3, 1);
 i7 = 1;
 return i7 | 0;
}
function __ZN7WebCore12EventHandler36dispatchFakeMouseMoveEventSoonInQuadERKNS_9FloatQuadE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 452 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i5, i7 | 0, i1 + 284 | 0);
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i4, i5);
 if (!(__ZNK7WebCore9FloatQuad13containsPointERKNS_10FloatPointE(i2, i4) | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 4 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 280 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[(HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] | 0) + 184 | 0] & 2) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 152 | 0;
 i4 = +HEAPF64[i1 + 160 >> 3] != +0;
 if (+HEAPF64[i1 + 400 >> 3] > +.01) {
  if (i4) {
   __ZN7WebCore9TimerBase4stopEv(i6);
  }
  __ZN7WebCore9TimerBase5startEdd(i6, +.25, +0);
  STACKTOP = i3;
  return;
 } else {
  if (i4) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore9TimerBase5startEdd(i6, +.1, +0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12EventHandler13freeClipboardEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if (HEAP8[H_BASE + 216 | 0] | 0) {
  i2 = HEAP32[H_BASE + 256 >> 2] | 0;
 } else {
  i1 = __Znwj(16) | 0;
  i3 = i1;
  _memset(i1 | 0, 0, 12) | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  HEAP32[H_BASE + 256 >> 2] = i3;
  HEAP8[H_BASE + 216 | 0] = 1;
  i2 = i3;
 }
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore9Clipboard15setAccessPolicyENS_21ClipboardAccessPolicyE(i3, 0);
 if (HEAP8[H_BASE + 216 | 0] | 0) {
  i4 = HEAP32[H_BASE + 256 >> 2] | 0;
 } else {
  i3 = __Znwj(16) | 0;
  i2 = i3;
  _memset(i3 | 0, 0, 12) | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 12 >> 2] = 0;
  HEAP32[H_BASE + 256 >> 2] = i2;
  HEAP8[H_BASE + 216 | 0] = 1;
  i4 = i2;
 }
 i2 = i4 + 12 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i2 = i4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore9ClipboardD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZNK7WebCore12EventHandler30dominantScrollGestureDirectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = HEAP32[i1 + 368 >> 2] | 0;
 i3 = HEAP32[i1 + 372 >> 2] | 0;
 if (i2 >>> 0 > i3 >>> 0) {
  i4 = HEAP32[i1 + 380 >> 2] | 0;
  i5 = i4 + i3 | 0;
  i6 = i4 + i3 | 0;
 } else {
  i5 = i3;
  i6 = i3;
 }
 i4 = (i6 | 0) != (i2 | 0);
 i6 = (i5 | 0) != (i2 | 0);
 if ((i2 | 0) == (i3 | 0)) {
  i7 = i4;
  i8 = i6;
 } else {
  i5 = HEAP32[i1 + 376 >> 2] | 0;
  i9 = (HEAP32[i1 + 380 >> 2] | 0) - 1 | 0;
  i1 = i2;
  i2 = i4;
  i4 = i6;
  while (1) {
   i6 = +Math_abs(+(+HEAPF32[i5 + (i1 << 3) + 4 >> 2])) > +Math_abs(+(+HEAPF32[i5 + (i1 << 3) >> 2]));
   i10 = i2 & i6;
   i11 = (i1 | 0) == (i9 | 0) ? 0 : i1 + 1 | 0;
   i12 = ((i6 & 1 ^ 1) & (i4 & 1) | 0) != 0;
   if ((i11 | 0) == (i3 | 0)) {
    i7 = i10;
    i8 = i12;
    break;
   } else {
    i1 = i11;
    i2 = i10;
    i4 = i12;
   }
  }
 }
 if (i7) {
  i13 = 1;
  return i13 | 0;
 }
 i13 = i8 ? 2 : 0;
 return i13 | 0;
}
function __ZN7WebCore12EventHandler14clearDragStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore20AutoscrollController19stopAutoscrollTimerEb(HEAP32[i1 + 144 >> 2] | 0, 0);
 i2 = i1 + 260 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 224 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) == 0) {
  i6 = i1 + 264 | 0;
  HEAP8[i6] = 0;
  return;
 }
 i3 = i2 + 8 | 0;
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i1 + 264 | 0;
  HEAP8[i6] = 0;
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  i6 = i1 + 264 | 0;
  HEAP8[i6] = 0;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 i6 = i1 + 264 | 0;
 HEAP8[i6] = 0;
 return;
}
function __ZN7WebCore12EventHandler28defaultBackspaceEventHandlerEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 60 | 0;
 if ((HEAP8[i5] & 11) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i2 + 76 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 __ZNK7WebCore6Editor8behaviorEv(i4, HEAP32[(HEAP32[i6 >> 2] | 0) + 464 >> 2] | 0);
 if ((HEAP32[i4 >> 2] | 0) == 2) {
  STACKTOP = i3;
  return;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[i4 + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[(HEAP32[i4 + 36 >> 2] | 0) + 183 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 do {
  if ((HEAP8[i5] & 4) == 0) {
   if (__ZN7WebCore4Page6goBackEv(i6) | 0) {
    break;
   }
   STACKTOP = i3;
   return;
  } else {
   if (__ZN7WebCore4Page9goForwardEv(i6) | 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP8[i2 + 21 | 0] = 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12EventHandler17prepareMouseEventERKNS_14HitTestRequestERKNS_18PlatformMouseEventE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i8 + 456 >> 2] | 0;
 i9 = i4 + 16 | 0;
 i10 = HEAP32[i8 + 452 >> 2] | 0;
 i8 = i6;
 if ((i10 | 0) == 0) {
  i11 = i9;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i12;
  HEAP32[i6 + 4 >> 2] = i13;
  i14 = i12;
  i15 = i13;
 } else {
  __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i8, i10 | 0, i9);
  i14 = HEAP32[i6 >> 2] | 0;
  i15 = HEAP32[i8 + 4 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i14;
 HEAP32[i7 + 4 >> 2] = i15;
 __ZN7WebCore8Document17prepareMouseEventERKNS_14HitTestRequestERKNS_11LayoutPointERKNS_18PlatformMouseEventE(i1, i2, i3, i7, i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12EventHandler27updateSelectionForMouseDragEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 120 | 0;
 i6 = i2 + 128 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i7 + 452 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = __ZNK7WebCore5Frame15contentRendererEv(i7) | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = 270;
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i6, i8 | 0, i1 + 284 | 0);
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i4, i5);
 __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(i9, i3, i4) | 0;
 __ZN7WebCore12EventHandler27updateSelectionForMouseDragERKNS_13HitTestResultE(i1, i4);
 __ZN7WebCore13HitTestResultD1Ev(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12EventHandler36updateDragStateAfterEditDragIfNeededEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if (HEAP8[H_BASE + 216 | 0] | 0) {
  i3 = HEAP32[H_BASE + 256 >> 2] | 0;
 } else {
  i1 = __Znwj(16) | 0;
  i4 = i1;
  _memset(i1 | 0, 0, 12) | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  HEAP32[H_BASE + 256 >> 2] = i4;
  HEAP8[H_BASE + 216 | 0] = 1;
  i3 = i4;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 + 12 >> 2] & 256 | 0) != 0) {
  return;
 }
 if ((i2 | 0) != 0) {
  i4 = i2 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i3 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = i3 + 8 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 return;
}
function __ZN7WebCore12EventHandler24subframeForHitTestResultERKNS_28MouseEventWithHitTestResultsE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 152 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = __ZNK7WebCore13HitTestResult10targetNodeEv(i1 + 48 | 0) | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = i3 + 32 | 0;
 if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i1 | 0;
 } else {
  i4 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 228 >> 2] & 1](i1) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = HEAP32[i1 + 108 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] & 1](i4) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i4 + 216 >> 2] | 0;
 return i2 | 0;
}
function __ZN7WebCore12EventHandler29updateLastScrollbarUnderMouseEPNS_9ScrollbarEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 + 244 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == (i2 | 0)) {
  return;
 }
 if ((i1 | 0) != 0) {
  __ZN7WebCore9Scrollbar11mouseExitedEv(i1) | 0;
 }
 if (!((i2 | 0) == 0 | i3 ^ 1)) {
  __ZN7WebCore9Scrollbar12mouseEnteredEv(i2);
 }
 i1 = i3 ? i2 : 0;
 if ((i1 | 0) != 0) {
  i2 = i1 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i1;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
 return;
}
function __ZN7WebCore12EventHandler24defaultArrowEventHandlerENS_14FocusDirectionEPNS_13KeyboardEventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP8[i3 + 60 | 0] | 0;
 if ((i4 & 9) != 0) {
  return;
 }
 if ((HEAP8[i3 + 76 | 0] & 1) != 0) {
  return;
 }
 if ((i4 & 4) != 0) {
  return;
 }
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 if (!(__ZN7WebCore26isSpatialNavigationEnabledEPKNS_5FrameE(i1) | 0)) {
  return;
 }
 if (__ZNK7WebCore8Document12inDesignModeEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0) | 0) {
  return;
 }
 if (!(__ZN7WebCore15FocusController12advanceFocusENS_14FocusDirectionEPNS_13KeyboardEventEb(HEAP32[i5 + 32 >> 2] | 0, i2, i3, 0) | 0)) {
  return;
 }
 HEAP8[i3 + 21 | 0] = 1;
 return;
}
function __ZN7WebCore12EventHandler32handleMousePressEventDoubleClickERKNS_28MouseEventWithHitTestResultsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP32[i2 + 32 >> 2] | 0) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[(HEAP32[i4 + 468 >> 2] | 0) + 84 >> 2] | 0) == 2) {
  HEAP32[i1 + 16 >> 2] = 2;
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 36 >> 2] | 0) == 2) {
  i5 = (__ZN7WebCore6Editor33isSelectTrailingWhitespaceEnabledEv(HEAP32[i4 + 464 >> 2] | 0) | 0) & 1 ^ 1;
 } else {
  i5 = 1;
 }
 __ZN7WebCore12EventHandler34selectClosestWordFromHitTestResultERKNS_13HitTestResultENS_24AppendTrailingWhitespaceE(i1, i2 + 48 | 0, i5);
 i3 = 1;
 return i3 | 0;
}
function __ZNK7WebCore12EventHandler17isInsideScrollbarERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 120 | 0;
 i7 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 >> 2] | 0) | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 HEAP32[i4 >> 2] = 258;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i5, i6);
 __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(i7, i4, i5) | 0;
 i4 = (HEAP32[i5 + 100 >> 2] | 0) != 0;
 __ZN7WebCore13HitTestResultD1Ev(i5);
 i8 = i4;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore12EventHandler21subframeForTargetNodeEPNS_4NodeE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i3 | 0;
 } else {
  i4 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 228 >> 2] & 1](i3) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = HEAP32[i3 + 108 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] & 1](i4) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i4 + 216 >> 2] | 0;
 return i2 | 0;
}
function __ZN7WebCore12EventHandler20dispatchDragSrcEventERKN3WTF12AtomicStringERKNS_18PlatformMouseEventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if (HEAP8[H_BASE + 216 | 0] | 0) {
  i4 = HEAP32[H_BASE + 256 >> 2] | 0;
  i5 = i4;
  i6 = HEAP32[i4 >> 2] | 0;
 } else {
  i4 = __Znwj(16) | 0;
  i7 = i4;
  _memset(i4 | 0, 0, 12) | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i4 + 12 >> 2] = 0;
  HEAP32[H_BASE + 256 >> 2] = i7;
  HEAP8[H_BASE + 216 | 0] = 1;
  i5 = i7;
  i6 = 0;
 }
 return (__ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE(i1, i2, i6, i3, HEAP32[i5 + 12 >> 2] | 0) | 0) ^ 1 | 0;
}
function __ZN7WebCore12EventHandler22defaultTabEventHandlerEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP8[i2 + 60 | 0] | 0;
 if ((i3 & 9) != 0) {
  return;
 }
 if ((HEAP8[i2 + 76 | 0] & 1) != 0) {
  return;
 }
 i4 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i4 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 97 | 0] & 1) == 0) {
  return;
 }
 if (__ZNK7WebCore8Document12inDesignModeEv(HEAP32[i4 + 456 >> 2] | 0) | 0) {
  return;
 }
 if (!(__ZN7WebCore15FocusController12advanceFocusENS_14FocusDirectionEPNS_13KeyboardEventEb(HEAP32[i1 + 32 >> 2] | 0, (i3 & 4) != 0 ? 2 : 1, i2, 0) | 0)) {
  return;
 }
 HEAP8[i2 + 21 | 0] = 1;
 return;
}
function __ZNK7WebCore12EventHandler30updateDragSourceActionsAllowedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i4 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i4 + 452 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i4 = HEAP32[i5 + 28 >> 2] | 0;
 __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i3, i7 | 0, i1 + 300 | 0);
 i6 = __ZN7WebCore14DragController24delegateDragSourceActionERKNS_8IntPointE(i4, i3) | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore12EventHandler19isKeyboardOptionTabEPNS_13KeyboardEventE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) != (HEAP32[i3 + 196 >> 2] | 0)) {
   if ((i4 | 0) == (HEAP32[i3 + 200 >> 2] | 0)) {
    break;
   } else {
    i2 = 0;
   }
   return i2 | 0;
  }
 } while (0);
 if ((HEAP8[i1 + 60 | 0] & 2) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i1 + 68 >> 2] | 0, H_BASE + 88 | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore12EventHandler30setCapturingMouseEventsElementEN3WTF10PassRefPtrINS_7ElementEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 224 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 HEAP8[i1 + 228 | 0] = 0;
 return;
}
function __ZN7WebCore12EventHandler15sendScrollEventEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 452 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore9FrameView20setWasScrolledByUserEb(i1, 1);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i1 + 452 >> 2] | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 456 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 304 >> 2] & 1](i3) | 0;
 __ZN7WebCore18DocumentEventQueue28enqueueOrDispatchScrollEventERNS_4NodeE(i1, HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0);
 return;
}
function __ZN7WebCore12EventHandler30dispatchFakeMouseMoveEventSoonEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[i1 + 4 | 0] & 1) != 0) {
  return;
 }
 if ((HEAP8[i1 + 280 | 0] & 1) != 0) {
  return;
 }
 if ((HEAP8[(HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] | 0) + 184 | 0] & 2) == 0) {
  return;
 }
 i2 = i1 + 152 | 0;
 i3 = +HEAPF64[i1 + 160 >> 3] != +0;
 if (+HEAPF64[i1 + 400 >> 3] > +.01) {
  if (i3) {
   __ZN7WebCore9TimerBase4stopEv(i2);
  }
  __ZN7WebCore9TimerBase5startEdd(i2, +.25, +0);
  return;
 } else {
  if (i3) {
   return;
  }
  __ZN7WebCore9TimerBase5startEdd(i2, +.1, +0);
  return;
 }
}
function __ZN7WebCore12EventHandler30passMousePressEventToScrollbarERNS_28MouseEventWithHitTestResultsEPNS_9ScrollbarE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 204 >> 2] & 1](i3) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 452 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore9FrameView20setWasScrolledByUserEb(i5, 1);
 }
 i4 = __ZN7WebCore9Scrollbar9mouseDownERKNS_18PlatformMouseEventE(i3, i2 | 0) | 0;
 return i4 | 0;
}
function __ZN7WebCore12EventHandler27capsLockStateMayHaveChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0) + 680 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i3 = i1 | 0;
 } else {
  i3 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 216 >> 2] & 1](i1) | 0)) {
  return;
 }
 __ZN7WebCore27RenderTextControlSingleLine27capsLockStateMayHaveChangedEv(i1);
 return;
}
function __ZN7WebCore12EventHandler19setResizingFrameSetEPNS_19HTMLFrameSetElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 268 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
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
function __ZN7WebCore12EventHandler17nodeWillBeRemovedEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 256 | 0;
 if (!(__ZNK7WebCore4Node8containsEPKS0_(i2, HEAP32[i3 >> 2] | 0) | 0)) {
  return;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = i2 + 8 | 0;
 i2 = i3 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 return;
}
function __ZN7WebCore12EventHandler31selectClosestWordFromMouseEventERKNS_28MouseEventWithHitTestResultsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  return;
 }
 if ((HEAP32[i2 + 36 >> 2] | 0) == 2) {
  i3 = (__ZN7WebCore6Editor33isSelectTrailingWhitespaceEnabledEv(HEAP32[(HEAP32[i1 >> 2] | 0) + 464 >> 2] | 0) | 0) & 1 ^ 1;
 } else {
  i3 = 1;
 }
 __ZN7WebCore12EventHandler34selectClosestWordFromHitTestResultERKNS_13HitTestResultENS_24AppendTrailingWhitespaceE(i1, i2 + 48 | 0, i3);
 return;
}
function __ZN7WebCore12EventHandler17setMousePressNodeEN3WTF10PassRefPtrINS_4NodeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
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
function __ZN7WebCore12EventHandler15invalidateClickEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 + 252 >> 2] = 0;
 i2 = i1 + 256 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
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
function __ZN7WebCore12EventHandler25setLastKnownMousePositionERKNS_18PlatformMouseEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 HEAP8[i1 + 280 | 0] = 0;
 i3 = i2 + 16 | 0;
 i4 = i1 + 284 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 i5 = i2 + 24 | 0;
 i2 = i1 + 292 | 0;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore12EventHandler31passMouseMovedEventToScrollbarsERKNS_18PlatformMouseEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i4 = i3 | 0;
 __ZN7WebCore13HitTestResultC1Ev(i4);
 i5 = __ZN7WebCore12EventHandler20handleMouseMoveEventERKNS_18PlatformMouseEventEPNS_13HitTestResultEb(i1, i2, i4, 1) | 0;
 __ZN7WebCore13HitTestResultD1Ev(i4);
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCore5TimerINS_12EventHandlerEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 15](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 15](i4, i1);
  return;
 }
}
function __ZN7WebCore12EventHandler24autoHideCursorTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i2 = i1 + 248 | 0;
 __ZN7WebCore6CursoraSERKS0_(i2, __ZN7WebCore10noneCursorEv() | 0) | 0;
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 452 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if (!(__ZNK7WebCore9FrameView8isActiveEv(i3) | 0)) {
  return;
 }
 __ZN7WebCore6Widget9setCursorERKNS_6CursorE(i3 | 0, i2);
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
function __ZNK7WebCore12EventHandler22dragHysteresisExceededERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 d5 = +(HEAP32[i2 + 4 >> 2] | 0);
 HEAPF32[i4 >> 2] = +(HEAP32[i2 >> 2] | 0);
 HEAPF32[i4 + 4 >> 2] = d5;
 i2 = __ZNK7WebCore12EventHandler22dragHysteresisExceededERKNS_10FloatPointE(i1, i4) | 0;
 STACKTOP = i3;
 return i2 | 0;
}
function __ZN7WebCore12EventHandler9dragStateEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 216 | 0] | 0) {
  i1 = HEAP32[H_BASE + 256 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __Znwj(16) | 0;
  i3 = i2;
  _memset(i2 | 0, 0, 12) | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i2 + 12 >> 2] = 0;
  HEAP32[H_BASE + 256 >> 2] = i3;
  HEAP8[H_BASE + 216 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function __ZNK7WebCore12EventHandler11tabsToLinksEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i3 = ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 1](i1) | 0) & 268435456 | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore12EventHandler24startAutoHideCursorTimerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 416 | 0, +HEAPF64[(HEAP32[i2 + 48 >> 2] | 0) + 200 >> 3], +0);
 if (+HEAPF64[i1 + 160 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 152 | 0);
 return;
}
function __ZN7WebCore12EventHandler28defaultTextInputEventHandlerEPNS_9TextEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!(__ZN7WebCore6Editor15handleTextEventEPNS_9TextEventE(HEAP32[(HEAP32[i1 >> 2] | 0) + 464 >> 2] | 0, i2) | 0)) {
  return;
 }
 HEAP8[i2 + 21 | 0] = 1;
 return;
}
function __ZN7WebCore12EventHandler25setFrameWasScrolledByUserEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 452 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore9FrameView20setWasScrolledByUserEb(i2, 1);
 return;
}
function __ZNK7WebCore12EventHandler22lastKnownMousePositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 284 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore12EventHandler13handleMouseUpERKNS_28MouseEventWithHitTestResultsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12EventHandler18eventActivatedViewERKNS_18PlatformMouseEventE(i1, i2 | 0) | 0;
}
function dynCall_iiiifi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiifi[i1 & 1](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0) | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_did + 2;
}
function __ZN7WebCore12EventHandler24scheduleHoverStateUpdateEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 40 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 32 | 0, +0, +0);
 return;
}
function __ZN7WebCore12EventHandler19stopAutoscrollTimerEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20AutoscrollController19stopAutoscrollTimerEb(HEAP32[i1 + 144 >> 2] | 0, i2);
 return;
}
function __ZN7WebCore12EventHandler20scheduleCursorUpdateEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 96 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 88 | 0, +.02, +0);
 return;
}
function __ZNK7WebCore12EventHandler37shouldTurnVerticalTicksIntoHorizontalERKNS_13HitTestResultERKNS_18PlatformWheelEventE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function __ZN7WebCore12EventHandler25cancelAutoHideCursorTimerEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 424 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 416 | 0);
 return;
}
function __ZN7WebCore12EventHandler16lostMouseCaptureEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = (HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0) + 192 | 0;
 HEAP8[i2] = HEAP8[i2] & -5;
 return;
}
function __ZN7WebCore12EventHandler24updateAutoscrollRendererEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20AutoscrollController24updateAutoscrollRendererEv(HEAP32[i1 + 144 >> 2] | 0);
 return;
}
function __ZNK7WebCore12EventHandler20autoscrollInProgressEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20AutoscrollController20autoscrollInProgressEv(HEAP32[i1 + 144 >> 2] | 0) | 0;
}
function __ZNK7WebCore12EventHandler19panScrollInProgressEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20AutoscrollController19panScrollInProgressEv(HEAP32[i1 + 144 >> 2] | 0) | 0;
}
function __ZNK7WebCore12EventHandler18autoscrollRendererEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20AutoscrollController18autoscrollRendererEv(HEAP32[i1 + 144 >> 2] | 0) | 0;
}
function __ZN7WebCore12EventHandler22cursorUpdateTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12EventHandler12updateCursorEv(i1);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore12EventHandler47handleKeyboardSelectionMovementForAccessibilityEPNS_13KeyboardEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function __ZN7WebCore5TimerINS_12EventHandlerEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore12EventHandler24cancelFakeMouseMoveEventEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 152 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore12EventHandler39eventInvertsTabsToLinksClientCallResultEPNS_13KeyboardEventE(i1) {
 i1 = i1 | 0;
 return 0;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(0);
 return 0;
}
function __ZN7WebCore12EventHandler20resizeLayerDestroyedEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 220 >> 2] = 0;
 return;
}
function __ZN7WebCore5TimerINS_12EventHandlerEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZNK7WebCore12EventHandler38needsKeyboardEventDisambiguationQuirksEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12EventHandler14mousePressNodeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 8 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 1](i2 | 0);
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
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
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
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
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
function b8(i1) {
 i1 = i1 | 0;
 abort(8);
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
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiifi = [b0,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore12EventHandlerD2Ev,b2,__ZN7WebCore5TimerINS_12EventHandlerEE5firedEv,b2,__ZN7WebCore5TimerINS_12EventHandlerEED1Ev,b2,__ZN7WebCore5TimerINS_12EventHandlerEED0Ev,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore12EventHandler22cursorUpdateTimerFiredEPNS_5TimerIS0_EE,b3,__ZN7WebCore12EventHandlerC2ERNS_5FrameE,b3,__ZN7WebCore12EventHandler15hoverTimerFiredEPNS_5TimerIS0_EE,b3,__ZN7WebCore12EventHandler28fakeMouseMoveEventTimerFiredEPNS_5TimerIS0_EE,b3,__ZN7WebCore12EventHandler24autoHideCursorTimerFiredEPNS_5TimerIS0_EE,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_fi = [b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiifi: dynCall_iiiifi, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiifi": invoke_iiiifi, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_fabsf": _fabsf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore12EventHandler13TextDragDelayE": __ZN7WebCore12EventHandler13TextDragDelayE, "__ZN7WebCore9HTMLNames18webkitdropzoneAttrE": __ZN7WebCore9HTMLNames18webkitdropzoneAttrE, "__ZN7WebCore9HTMLNames8frameTagE": __ZN7WebCore9HTMLNames8frameTagE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore8SVGNames6useTagE": __ZN7WebCore8SVGNames6useTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiifi = Module["dynCall_iiiifi"] = asm["dynCall_iiiifi"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore12EventHandler24subframeForHitTestResultERKNS_28MouseEventWithHitTestResultsE","_strlen","__ZN7WebCore12EventHandler20resizeLayerDestroyedEv","__ZN7WebCore12EventHandler23handleMouseReleaseEventERKNS_28MouseEventWithHitTestResultsE","__ZN7WebCore12EventHandlerC2ERNS_5FrameE","__ZNK7WebCore12EventHandler20autoscrollInProgressEv","__ZN7WebCore12EventHandler18dispatchMouseEventERKN3WTF12AtomicStringEPNS_4NodeEbiRKNS_18PlatformMouseEventEb","__ZN7WebCore12EventHandlerD2Ev","__ZN7WebCore12EventHandler32handleMousePressEventDoubleClickERKNS_28MouseEventWithHitTestResultsE","__ZN7WebCore12EventHandler16lostMouseCaptureEv","__ZN7WebCore12EventHandler17scrollRecursivelyENS_15ScrollDirectionENS_17ScrollGranularityEPNS_4NodeE","__ZN7WebCore12EventHandler24logicalScrollRecursivelyENS_22ScrollLogicalDirectionENS_17ScrollGranularityEPNS_4NodeE","__ZN7WebCore12EventHandler19stopAutoscrollTimerEb","__ZNK7WebCore12EventHandler11tabsToLinksEPNS_13KeyboardEventE","__ZN7WebCore12EventHandler36updateDragStateAfterEditDragIfNeededEPNS_7ElementE","__ZN7WebCore16VisibleSelectionaSEOS0_","__ZN7WebCore12EventHandler27updateSelectionForMouseDragEv","__ZN7WebCore12EventHandler10handleDragERKNS_28MouseEventWithHitTestResultsENS_19CheckDragHysteresisE","__ZNK7WebCore12EventHandler30dominantScrollGestureDirectionEv","__ZN7WebCore12EventHandler26sendContextMenuEventForKeyEv","__ZN7WebCore12EventHandler14scrollOverflowENS_15ScrollDirectionENS_17ScrollGranularityEPNS_4NodeE","__ZNK7WebCore12EventHandler29isKeyEventAllowedInFullScreenERKNS_21PlatformKeyboardEventE","__ZN7WebCore12EventHandler15handleAccessKeyERKNS_21PlatformKeyboardEventE","__ZN7WebCore12EventHandler27updateSelectionForMouseDragERKNS_13HitTestResultE","__ZN7WebCore12EventHandler25setFrameWasScrolledByUserEv","__ZN7WebCore12EventHandler39eventInvertsTabsToLinksClientCallResultEPNS_13KeyboardEventE","__ZN7WebCore12EventHandler14clearDragStateEv","__ZN7WebCore12EventHandler22cursorUpdateTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore12EventHandler20handleMouseMoveEventERKNS_18PlatformMouseEventEPNS_13HitTestResultEb","__ZN7WebCore12EventHandler17updateDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE","__ZN7WebCore12EventHandler17prepareMouseEventERKNS_14HitTestRequestERKNS_18PlatformMouseEventE","__ZNK7WebCore12EventHandler37shouldTurnVerticalTicksIntoHorizontalERKNS_13HitTestResultERKNS_18PlatformWheelEventE","__ZN7WebCoreL37expandSelectionToRespectUserSelectAllEPNS_4NodeERKNS_16VisibleSelectionE","__ZNK7WebCore12EventHandler22lastKnownMousePositionEv","__ZN7WebCore12EventHandler27defaultKeyboardEventHandlerEPNS_13KeyboardEventE","__ZN7WebCore12EventHandler31passMouseMovedEventToScrollbarsERKNS_18PlatformMouseEventE","__ZN7WebCore12EventHandler32handleMousePressEventTripleClickERKNS_28MouseEventWithHitTestResultsE","__ZN7WebCore12EventHandler17dispatchDragEventERKN3WTF12AtomicStringERNS_7ElementERKNS_18PlatformMouseEventEPNS_9ClipboardE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore12EventHandler24autoHideCursorTimerFiredEPNS_5TimerIS0_EE","__ZNK7WebCore12EventHandler14mousePressNodeEv","__ZNK7WebCore12EventHandler30updateDragSourceActionsAllowedEv","__ZN7WebCore12EventHandler47handleKeyboardSelectionMovementForAccessibilityEPNS_13KeyboardEventE","__ZN7WebCore12EventHandler15invalidateClickEv","__ZN7WebCore16VisibleSelectionC2ERKS0_","__ZNK7WebCore12EventHandler19panScrollInProgressEv","__ZN7WebCore12EventHandler10mouseMovedERKNS_18PlatformMouseEventE","__ZN7WebCore12EventHandler23handleMouseDraggedEventERKNS_28MouseEventWithHitTestResultsE","__ZN7WebCore12EventHandler8keyEventERKNS_21PlatformKeyboardEventE","__ZN7WebCore12EventHandler12updateCursorEv","__ZN7WebCore12EventHandler13useHandCursorEPNS_4NodeEbb","__ZN7WebCore12EventHandler13handleMouseUpERKNS_28MouseEventWithHitTestResultsE","__ZN7WebCore12EventHandler32handleMousePressEventSingleClickERKNS_28MouseEventWithHitTestResultsE","__ZN7WebCore5TimerINS_12EventHandlerEE5firedEv","__ZN7WebCore12EventHandler5clearEv","__ZN7WebCore12EventHandler23handleMouseReleaseEventERKNS_18PlatformMouseEventE","__ZN7WebCore12EventHandler13freeClipboardEv","__ZN7WebCore12EventHandler19setResizingFrameSetEPNS_19HTMLFrameSetElementE","__ZN7WebCore12EventHandler24updateAutoscrollRendererEv","__ZN7WebCore5TimerINS_12EventHandlerEED1Ev","__ZNK7WebCore12EventHandler22dragHysteresisExceededERKNS_10FloatPointE","__ZN7WebCore12EventHandler34selectClosestWordFromHitTestResultERKNS_13HitTestResultENS_24AppendTrailingWhitespaceE","__ZN7WebCore12EventHandler12selectCursorERKNS_13HitTestResultEb","__ZN7WebCore12EventHandler21handleMousePressEventERKNS_28MouseEventWithHitTestResultsE","__ZN7WebCore12EventHandler25setLastKnownMousePositionERKNS_18PlatformMouseEventE","__ZN7WebCore12EventHandler22defaultTabEventHandlerEPNS_13KeyboardEventE","__ZN7WebCore12EventHandler17nodeWillBeRemovedEPNS_4NodeE","__ZN7WebCore12EventHandler28fakeMouseMoveEventTimerFiredEPNS_5TimerIS0_EE","__ZNK7WebCore12EventHandler17isInsideScrollbarERKNS_8IntPointE","__ZN7WebCore12EventHandler30passMousePressEventToScrollbarERNS_28MouseEventWithHitTestResultsEPNS_9ScrollbarE","__ZN7WebCore12EventHandler24defaultSpaceEventHandlerEPNS_13KeyboardEventE","__ZN7WebCoreL12findDropZoneEPNS_4NodeEPNS_9ClipboardE","__ZN7WebCore12EventHandler21logicalScrollOverflowENS_22ScrollLogicalDirectionENS_17ScrollGranularityEPNS_4NodeE","__ZN7WebCore12EventHandler27handleMouseDoubleClickEventERKNS_18PlatformMouseEventE","__ZN7WebCore12EventHandler19isKeyboardOptionTabEPNS_13KeyboardEventE","_memset","__ZN7WebCore12EventHandler17dragSourceEndedAtERKNS_18PlatformMouseEventENS_13DragOperationE","__ZN3WTF5DequeIN7WebCore9FloatSizeELj0EE14expandCapacityEv","__ZN7WebCore19firstPositionInNodeEPNS_4NodeE","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore12EventHandler24startAutoHideCursorTimerEv","__ZN7WebCore12EventHandler24cancelFakeMouseMoveEventEv","__ZN7WebCore12EventHandler16handleWheelEventERKNS_18PlatformWheelEventE","__ZN7WebCore12EventHandler9dragStateEv","__ZN7WebCore12EventHandler29updateLastScrollbarUnderMouseEPNS_9ScrollbarEb","__ZN7WebCore12EventHandler21recordWheelEventDeltaERKNS_18PlatformWheelEventE","__ZN7WebCore12EventHandler24defaultWheelEventHandlerEPNS_4NodeEPNS_10WheelEventE","__ZN7WebCore12EventHandler37selectClosestWordOrLinkFromMouseEventERKNS_28MouseEventWithHitTestResultsE","__ZN7WebCore12EventHandler18performDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE","__ZN7WebCore12EventHandler21handleMousePressEventERKNS_18PlatformMouseEventE","__ZN7WebCore5TimerINS_12EventHandlerEED0Ev","__ZN7WebCore12EventHandler20handleTextInputEventERKN3WTF6StringEPNS_5EventENS_18TextEventInputTypeE","__ZN7WebCore12EventHandler27capsLockStateMayHaveChangedEv","__ZNK7WebCore12EventHandler38needsKeyboardEventDisambiguationQuirksEv","__ZN7WebCoreeqERKNS_16VisibleSelectionES2_","__ZN7WebCore12EventHandler26updateMouseEventTargetNodeEPNS_4NodeERKNS_18PlatformMouseEventEb","__ZN7WebCore12EventHandler20dispatchDragSrcEventERKN3WTF12AtomicStringERKNS_18PlatformMouseEventE","__ZN7WebCore12EventHandler20hitTestResultAtPointERKNS_11LayoutPointEjRKNS_10LayoutSizeE","__ZN7WebCore12EventHandler49updateSelectionForMouseDownDispatchingSelectStartEPNS_4NodeERKNS_16VisibleSelectionENS_15TextGranularityE","__ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore12EventHandler17cancelDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE","__ZN7WebCore12EventHandler25cancelAutoHideCursorTimerEv","__ZN7WebCore12EventHandler15sendScrollEventEv","__ZN7WebCore12EventHandler30dispatchFakeMouseMoveEventSoonEv","__ZN7WebCore12EventHandler21subframeForTargetNodeEPNS_4NodeE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore12EventHandler22dragHysteresisExceededERKNS_8IntPointE","__ZNK7WebCore12EventHandler18autoscrollRendererEv","__ZN7WebCore12EventHandler36dispatchFakeMouseMoveEventSoonInQuadERKNS_9FloatQuadE","__ZN3WTF9HashTableIPN7WebCore18SVGElementInstanceES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_","__ZNK7WebCore12EventHandler17eventMayStartDragERKNS_18PlatformMouseEventE","__ZN7WebCore12EventHandler17setMousePressNodeEN3WTF10PassRefPtrINS_4NodeEEE","__ZN7WebCore12EventHandler24scheduleHoverStateUpdateEv","__ZN7WebCore12EventHandler20scheduleCursorUpdateEv","__ZN7WebCore12EventHandler26handlePasteGlobalSelectionERKNS_18PlatformMouseEventE","__ZN7WebCore12EventHandler31selectClosestWordFromMouseEventERKNS_28MouseEventWithHitTestResultsE","__ZN7WebCore12EventHandler30setCapturingMouseEventsElementEN3WTF10PassRefPtrINS_7ElementEEE","__ZN7WebCore12EventHandler28defaultTextInputEventHandlerEPNS_9TextEventE","_memcpy","__ZN7WebCore12EventHandler20sendContextMenuEventERKNS_18PlatformMouseEventE","__ZN7WebCore12EventHandler24defaultArrowEventHandlerENS_14FocusDirectionEPNS_13KeyboardEventE","__ZN7WebCore12EventHandler28defaultBackspaceEventHandlerEPNS_13KeyboardEventE","__ZN7WebCore12EventHandler15hoverTimerFiredEPNS_5TimerIS0_EE"]

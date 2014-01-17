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
H_BASE = parentModule["_malloc"](816 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 816;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9FrameViewC1ERNS_5FrameE;
var __ZN7WebCore9FrameViewD1Ev;
/* memory initializer */ allocate([41,10,0,0,0,0,0,0,32,0,0,0,0,0,0,0,32,32,40,114,101,99,116,32,0,0,0,0,0,0,0,0,40,114,101,112,97,105,110,116,32,114,101,99,116,115,10,0,116,111,112,0,0,0,0,0,112,114,105,110,116,0,0,0,115,99,114,101,101,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,220,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore9HTMLNames11framesetTagE=env.__ZN7WebCore9HTMLNames11framesetTagE|0;
  var __ZN7WebCore15ScrollAlignment14alignTopAlwaysE=env.__ZN7WebCore15ScrollAlignment14alignTopAlwaysE|0;
  var __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE=env.__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN7WebCore9HTMLNames8frameTagE=env.__ZN7WebCore9HTMLNames8frameTagE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE=env.__ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore9HTMLNames9appletTagE=env.__ZN7WebCore9HTMLNames9appletTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore9FrameView38s_maxDeferredRepaintDelayDuringLoadingE=(H_BASE+776)|0;
  var __ZN7WebCore9FrameView22sCurrentPaintTimeStampE=(H_BASE+792)|0;
  var __ZTVN7WebCore9FrameViewE=(H_BASE+80)|0;
  var __ZGVZN7WebCore9FloatRect12infiniteRectEvE12infiniteRect=(H_BASE+816)|0;
  var __ZN7WebCore9FrameView44s_deferredRepaintDelayIncrementDuringLoadingE=(H_BASE+760)|0;
  var __ZN7WebCore9FrameView28s_normalDeferredRepaintDelayE=(H_BASE+784)|0;
  var __ZZN7WebCore9FloatRect12infiniteRectEvE12infiniteRect=(H_BASE+800)|0;
  var __ZN7WebCore9FrameView42s_initialDeferredRepaintDelayDuringLoadingE=(H_BASE+768)|0;
  var __ZTVN7WebCore5TimerINS_9FrameViewEEE=(H_BASE+728)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore9FrameView6layoutEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, d66 = +0, d67 = +0, i68 = 0, i69 = 0, i70 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
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
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 i20 = i3 + 128 | 0;
 i21 = i3 + 136 | 0;
 i22 = i21;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = i1 + 304 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 if ((i26 | 0) == 3) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i25 >> 2] = 1;
 i27 = i1 + 4 | 0;
 HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
 i28 = i1 + 433 | 0;
 i29 = HEAP8[i28] & 1;
 HEAP8[i28] = 1;
 i30 = __ZNK7WebCore9FrameView33isInChildFrameWithFrameFlatteningEv(i1) | 0;
 if (i30) {
  __ZN7WebCore9FrameView34startLayoutAtMainFrameViewIfNeededEb(i1, i2);
  i31 = HEAP32[i1 + 300 >> 2] | 0;
  if ((i31 | 0) == 0) {
   i32 = HEAP32[(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 456 >> 2] | 0) + 1584 >> 2] | 0;
  } else {
   i32 = i31;
  }
  if ((HEAP32[i32 + 20 >> 2] & 31 | 0) != 0) {
   i33 = 6;
  }
 } else {
  i33 = 6;
 }
 do {
  if ((i33 | 0) == 6) {
   __ZN7WebCore9TimerBase4stopEv(i1 + 240 | 0);
   HEAP8[i1 + 296 | 0] = 0;
   i32 = i1 + 568 | 0;
   HEAP8[i32] = 0;
   if ((HEAP8[i1 + 580 | 0] & 1) != 0) {
    break;
   }
   i31 = i1 + 216 | 0;
   i34 = HEAP32[i31 >> 2] | 0;
   L12 : do {
    if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
     __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i17);
    } else {
     do {
      if ((i34 | 0) != 0) {
       i35 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i34 + 32 >> 2] | 0) | 0;
       if ((i35 | 0) == 0) {
        break;
       }
       __ZN7WebCore24InspectorInstrumentation14willLayoutImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i17, i35, i34);
       break L12;
      }
     } while (0);
     __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i17);
    }
   } while (0);
   do {
    if (!i2) {
     i34 = i1 + 300 | 0;
     i35 = HEAP32[i34 >> 2] | 0;
     if ((i35 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i35 | 0, 0, 0);
     HEAP32[i34 >> 2] = 0;
    }
   } while (0);
   i34 = HEAP32[(HEAP32[i31 >> 2] | 0) + 456 >> 2] | 0;
   i35 = i1 + 308 | 0;
   i36 = HEAP8[i35] & 1;
   HEAP8[i35] = 0;
   i37 = i1 + 316 | 0;
   do {
    if ((HEAP32[i37 >> 2] | 0) == 0) {
     i38 = i1 + 309 | 0;
     if ((HEAP8[i38] & 1) != 0) {
      break;
     }
     if (+HEAPF64[i1 + 328 >> 3] == +0 | i30) {
      break;
     }
     HEAP8[i38] = 1;
     __ZN7WebCore9FrameView22performPostLayoutTasksEv(i1);
     HEAP8[i38] = 0;
    }
   } while (0);
   HEAP32[i25 >> 2] = 2;
   i38 = HEAP32[i34 + 320 >> 2] | 0;
   do {
    if ((i38 | 0) == 0) {
     i33 = 22;
    } else {
     if (__ZNK7WebCore13StyleResolver24affectedByViewportChangeEv(i38) | 0) {
      i33 = 22;
      break;
     }
     __ZN7WebCore8Document22evaluateMediaQueryListEv(i34);
    }
   } while (0);
   do {
    if ((i33 | 0) == 22) {
     __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i34, 1);
     if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i34 | 0) == 0) {
      break;
     }
     i38 = __ZNK7WebCore8Document4pageEv(i34) | 0;
     do {
      if ((i38 | 0) == 0) {
       i39 = HEAP32[i34 + 2204 >> 2] | 0;
       if ((i39 | 0) == 0) {
        i40 = 0;
        break;
       }
       i40 = __ZNK7WebCore8Document4pageEv(i39) | 0;
      } else {
       i40 = i38;
      }
     } while (0);
     i38 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i40) | 0;
     if ((i38 | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation27mediaQueryResultChangedImplEPNS_19InstrumentingAgentsE(i38);
    }
   } while (0);
   __ZN7WebCore9FrameView25applyPaginationToViewportEv(i1);
   __ZN7WebCore8Document19updateStyleIfNeededEv(i34);
   HEAP32[i25 >> 2] = 1;
   i38 = i1 + 300 | 0;
   i39 = HEAP32[i38 >> 2] | 0;
   i41 = (i39 | 0) != 0;
   do {
    if ((HEAP32[i27 >> 2] | 0) == 1) {
     HEAP8[i35] = i36;
    } else {
     if (i41) {
      HEAP8[i35] = i36;
      i42 = i39;
     } else {
      i43 = HEAP32[i34 + 1584 >> 2] | 0;
      HEAP8[i35] = i36;
      if ((i43 | 0) == 0) {
       break;
      } else {
       i42 = i43 | 0;
      }
     }
     i43 = __ZN7WebCore9fontCacheEv() | 0;
     HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
     HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
     i43 = HEAP8[i35] & 1;
     HEAP8[i35] = 0;
     L48 : do {
      if ((HEAP32[i38 >> 2] | 0) == 0) {
       i44 = __ZNK7WebCore8Document4bodyEv(i34) | 0;
       if ((i44 | 0) == 0) {
        break;
       }
       i45 = i44 + 12 | 0;
       i46 = (HEAP32[i45 >> 2] & 2048 | 0) == 0;
       i47 = i44 + 32 | 0;
       if (i46) {
        i48 = i47 | 0;
       } else {
        i48 = HEAP32[i47 >> 2] | 0;
       }
       if ((HEAP32[i48 >> 2] | 0) == 0) {
        break;
       }
       i49 = HEAP32[i44 + 44 >> 2] | 0;
       i44 = HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0;
       do {
        if ((i49 | 0) == (i44 | 0)) {
         i33 = 43;
        } else {
         if ((HEAP32[i49 + 12 >> 2] | 0) != (HEAP32[i44 + 12 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i49 + 16 >> 2] | 0) == (HEAP32[i44 + 16 >> 2] | 0)) {
          i33 = 43;
         }
        }
       } while (0);
       do {
        if ((i33 | 0) == 43) {
         if ((HEAP8[(HEAP32[(HEAP32[i31 >> 2] | 0) + 36 >> 2] | 0) + 185 | 0] & 16) != 0) {
          break;
         }
         if (i46) {
          i50 = i47 | 0;
         } else {
          i50 = HEAP32[i47 >> 2] | 0;
         }
         i44 = HEAP32[i50 >> 2] | 0;
         i51 = i44 + 20 | 0;
         i52 = HEAP32[i51 >> 2] | 0;
         if ((i52 & 4 | 0) != 0) {
          break L48;
         }
         HEAP32[i51 >> 2] = i52 | 4;
         __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i44, 1, 0);
         break L48;
        }
       } while (0);
       i46 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
       if ((i49 | 0) != (i46 | 0)) {
        if ((HEAP32[i49 + 12 >> 2] | 0) != (HEAP32[i46 + 12 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i49 + 16 >> 2] | 0) != (HEAP32[i46 + 16 >> 2] | 0)) {
         break;
        }
       }
       if ((HEAP8[i1 + 377 | 0] & 1) != 0) {
        break;
       }
       i46 = HEAP32[i1 + 200 >> 2] | 0;
       __ZNK7WebCore10ScrollView10layoutSizeEv(i16, i1 | 0);
       if ((i46 | 0) == (HEAP32[i16 + 4 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i45 >> 2] & 2048 | 0) == 0) {
        i53 = i47 | 0;
       } else {
        i53 = HEAP32[i47 >> 2] | 0;
       }
       if (!(__ZNK7WebCore9RenderBox19stretchesToViewportEv(__ZNK7WebCore12RenderObject12enclosingBoxEv(HEAP32[i53 >> 2] | 0) | 0) | 0)) {
        break;
       }
       if ((HEAP32[i45 >> 2] & 2048 | 0) == 0) {
        i54 = i47 | 0;
       } else {
        i54 = HEAP32[i47 >> 2] | 0;
       }
       i46 = HEAP32[i54 >> 2] | 0;
       i44 = i46 + 20 | 0;
       i52 = HEAP32[i44 >> 2] | 0;
       if ((i52 & 4 | 0) != 0) {
        break;
       }
       HEAP32[i44 >> 2] = i52 | 4;
       __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i46, 1, 0);
      }
     } while (0);
     __ZN7WebCore9FrameView17autoSizeIfEnabledEv(i1);
     do {
      if (i41) {
       i46 = i1 + 224 | 0;
       HEAP8[i46] = 0;
       i52 = i42 | 0;
       i44 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i52) | 0;
       i51 = i42 + 4 | 0;
       i55 = __ZNK7WebCore10RenderView34shouldDisableLayoutStateForSubtreeEPNS_12RenderObjectE(HEAP32[(HEAP32[(HEAP32[(HEAP32[i51 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i52) | 0;
       __ZN7WebCore10RenderView15pushLayoutStateERNS_12RenderObjectE(HEAP32[(HEAP32[(HEAP32[(HEAP32[i51 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i52);
       if (!i55) {
        i56 = i44;
        i57 = i52;
        i58 = i46;
        i59 = 1;
        i60 = 0;
        i61 = 1;
        break;
       }
       i55 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i51 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
       if ((i55 | 0) == 0) {
        i56 = i44;
        i57 = i52;
        i58 = i46;
        i59 = 1;
        i60 = 0;
        i61 = 1;
        break;
       }
       i51 = i55 + 196 | 0;
       HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
       i56 = i44;
       i57 = i52;
       i58 = i46;
       i59 = i41;
       i60 = i55;
       i61 = 0;
      } else {
       i55 = i1 + 377 | 0;
       if ((HEAP8[i55] & 1) == 0) {
        i62 = (__ZNK7WebCore10RenderView8printingEv(i42) | 0) & 1;
       } else {
        i62 = 1;
       }
       i46 = i1 + 224 | 0;
       HEAP8[i46] = i62;
       __ZN7WebCore9FrameView32calculateScrollbarModesForLayoutERNS_13ScrollbarModeES2_NS0_33ScrollbarModesCalculationStrategyE(i1, i18, i19, 1);
       do {
        if ((HEAP8[i55] & 1) == 0) {
         i52 = HEAP32[i18 >> 2] | 0;
         i44 = i1 | 0;
         __ZNK7WebCore10ScrollView14scrollbarModesERNS_13ScrollbarModeES2_(i44, i14, i15);
         if ((i52 | 0) != (HEAP32[i14 >> 2] | 0)) {
          i63 = i44;
          i33 = 70;
          break;
         }
         i52 = HEAP32[i19 >> 2] | 0;
         __ZNK7WebCore10ScrollView14scrollbarModesERNS_13ScrollbarModeES2_(i44, i12, i13);
         if ((i52 | 0) != (HEAP32[i13 >> 2] | 0)) {
          i63 = i44;
          i33 = 70;
         }
        } else {
         i63 = i1 | 0;
         i33 = 70;
        }
       } while (0);
       do {
        if ((i33 | 0) == 70) {
         if ((HEAP8[i55] & 1) == 0) {
          __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i63, HEAP32[i18 >> 2] | 0, HEAP32[i19 >> 2] | 0, 0, 0);
          break;
         }
         __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i63, 1, 0);
         HEAP8[i55] = 0;
         HEAP8[i1 + 376 | 0] = 1;
         do {
          if (__ZNK7WebCore10ScrollView14useFixedLayoutEv(i63) | 0) {
           __ZNK7WebCore10ScrollView15fixedLayoutSizeEv(i20, i63);
           if ((HEAP32[i20 >> 2] | 0) < 1) {
            i33 = 76;
            break;
           }
           if ((HEAP32[i20 + 4 >> 2] | 0) < 1) {
            i33 = 76;
            break;
           }
           if ((HEAP8[i1 + 172 | 0] & 1) == 0) {
            i33 = 76;
            break;
           }
           __ZNK7WebCore10ScrollView15fixedLayoutSizeEv(i22, i63);
           i47 = i1 + 388 | 0;
           i45 = HEAP32[i21 + 4 >> 2] | 0;
           HEAP32[i47 >> 2] = HEAP32[i21 >> 2];
           HEAP32[i47 + 4 >> 2] = i45;
          } else {
           i33 = 76;
          }
         } while (0);
         if ((i33 | 0) == 76) {
          __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i23, i63, 1);
          i45 = i23 + 8 | 0;
          i47 = HEAP32[i45 + 4 >> 2] | 0;
          i49 = i1 + 388 | 0;
          HEAP32[i49 >> 2] = HEAP32[i45 >> 2];
          HEAP32[i49 + 4 >> 2] = i47;
         }
         HEAPF32[i1 + 396 >> 2] = +HEAPF32[(HEAP32[(HEAP32[i42 + 36 >> 2] | 0) + 8 >> 2] | 0) + 40 >> 2];
         i47 = HEAP32[i19 >> 2] | 0;
         if ((i47 | 0) == 0) {
          __ZNK7WebCore10ScrollView14scrollbarModesERNS_13ScrollbarModeES2_(i63, i10, i11);
          __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i63, HEAP32[i10 >> 2] | 0, 2, (HEAP8[i1 + 72 | 0] & 1) != 0, 0);
         }
         i49 = HEAP32[i18 >> 2] | 0;
         if ((i49 | 0) == 0) {
          __ZNK7WebCore10ScrollView14scrollbarModesERNS_13ScrollbarModeES2_(i63, i8, i9);
          __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i63, 1, HEAP32[i9 >> 2] | 0, 0, (HEAP8[i1 + 73 | 0] & 1) != 0);
         }
         __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i63, i49, i47, 0, 0);
         __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i63, 0, 1);
        }
       } while (0);
       i47 = i1 + 196 | 0;
       i49 = HEAP32[i47 + 4 >> 2] | 0;
       i45 = HEAP32[i47 >> 2] | 0;
       __ZNK7WebCore10ScrollView10layoutSizeEv(i24, i1 | 0);
       i44 = HEAP32[i24 >> 2] | 0;
       i52 = HEAP32[i24 + 4 >> 2] | 0;
       HEAP32[i47 >> 2] = i44;
       HEAP32[i47 + 4 >> 2] = i52;
       if ((i45 | 0) == (i44 | 0)) {
        if ((i49 | 0) != (i52 | 0)) {
         i33 = 85;
        }
       } else {
        i33 = 85;
       }
       L116 : do {
        if ((i33 | 0) == 85) {
         HEAP8[i46] = 1;
         if ((HEAP8[i55] & 1) != 0) {
          break;
         }
         i52 = HEAP32[i34 + 692 >> 2] | 0;
         if ((i52 | 0) == 0) {
          break;
         }
         i49 = __ZNK7WebCore4Node9renderBoxEv(i52 | 0) | 0;
         if ((i49 | 0) == 0) {
          break;
         }
         do {
          if ((__ZNK7WebCore8Document4bodyEv(i34) | 0) != 0) {
           i52 = __ZNK7WebCore4Node9renderBoxEv(__ZNK7WebCore8Document4bodyEv(i34) | 0) | 0;
           if ((i52 | 0) == 0) {
            break;
           }
           if (!(__ZNK7WebCore9RenderBox19stretchesToViewportEv(i52) | 0)) {
            break;
           }
           i44 = i52 + 20 | 0;
           i45 = HEAP32[i44 >> 2] | 0;
           if ((i45 & 4 | 0) != 0) {
            break L116;
           }
           HEAP32[i44 >> 2] = i45 | 4;
           __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i52 | 0, 1, 0);
           break L116;
          }
         } while (0);
         if (!(__ZNK7WebCore9RenderBox19stretchesToViewportEv(i49) | 0)) {
          break;
         }
         i52 = i49 + 20 | 0;
         i45 = HEAP32[i52 >> 2] | 0;
         if ((i45 & 4 | 0) != 0) {
          break;
         }
         HEAP32[i52 >> 2] = i45 | 4;
         __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i49 | 0, 1, 0);
        }
       } while (0);
       HEAP32[i25 >> 2] = 1;
       i55 = i42 | 0;
       i56 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i55) | 0;
       i57 = i55;
       i58 = i46;
       i59 = 0;
       i60 = 0;
       i61 = 1;
      }
     } while (0);
     HEAP32[i25 >> 2] = 3;
     i55 = HEAP32[i31 >> 2] | 0;
     i45 = HEAP32[i55 + 28 >> 2] | 0;
     if ((i45 | 0) == (i55 | 0)) {
      i64 = i1;
     } else {
      i55 = i45;
      while (1) {
       i45 = HEAP32[i55 + 452 >> 2] | 0;
       i52 = HEAP32[i45 + 216 >> 2] | 0;
       i44 = HEAP32[i52 + 28 >> 2] | 0;
       if ((i44 | 0) == (i52 | 0)) {
        i64 = i45;
        break;
       } else {
        i55 = i44;
       }
      }
     }
     i55 = i64 + 436 | 0;
     HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
     __ZN7WebCore9FrameView29forceLayoutParentViewIfNeededEv(i1);
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i42 >> 2] | 0) + 652 >> 2] & 63](i42);
     i55 = HEAP32[i31 >> 2] | 0;
     i44 = HEAP32[i55 + 28 >> 2] | 0;
     if ((i44 | 0) == (i55 | 0)) {
      i65 = i1;
     } else {
      i55 = i44;
      while (1) {
       i44 = HEAP32[i55 + 452 >> 2] | 0;
       i45 = HEAP32[i44 + 216 >> 2] | 0;
       i52 = HEAP32[i45 + 28 >> 2] | 0;
       if ((i52 | 0) == (i45 | 0)) {
        i65 = i44;
        break;
       } else {
        i55 = i52;
       }
      }
     }
     i55 = i65 + 436 | 0;
     i52 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     HEAP32[i55 >> 2] = i52;
     L142 : do {
      if ((i52 | 0) == 0) {
       i55 = i65 + 456 | 0;
       i44 = i65 + 464 | 0;
       if (+HEAPF64[i44 >> 3] != +0) {
        break;
       }
       i45 = i65 + 512 | 0;
       do {
        if (+HEAPF64[i45 >> 3] != +0) {
         d66 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
         d67 = +HEAPF64[i45 >> 3] - (d66 - +HEAPF64[i65 + 520 >> 3]);
         d66 = d67 > +0 ? d67 : +0;
         if (d66 == +0) {
          break;
         }
         if (+HEAPF64[i44 >> 3] != +0) {
          break L142;
         }
         __ZN7WebCore9TimerBase5startEdd(i55, d66, +0);
         break L142;
        }
       } while (0);
       __ZN7WebCore9FrameView18doDeferredRepaintsEv(i65);
      }
     } while (0);
     if (i59) {
      i52 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i57 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
      i55 = i52 + 192 | 0;
      i44 = (HEAP32[i55 >> 2] | 0) + 12 | 0;
      i45 = HEAP32[i44 >> 2] | 0;
      HEAP32[i44 >> 2] = 0;
      i44 = HEAP32[i55 >> 2] | 0;
      HEAP32[i55 >> 2] = i45;
      if ((i44 | 0) != 0) {
       __ZN7WebCore11LayoutStateD1Ev(i44);
       __ZdlPv(i44 | 0);
      }
      __ZN7WebCore10RenderView34popLayoutStateForCurrentFlowThreadEv(i52);
     }
     HEAP32[i38 >> 2] = 0;
     if (!i61) {
      i52 = i60 + 196 | 0;
      HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) - 1;
     }
     HEAP8[i35] = i43;
     HEAP32[i25 >> 2] = 4;
     i52 = HEAP8[i58] & 1;
     do {
      if (!i41) {
       if (__ZNK7WebCore10RenderView8printingEv(i57) | 0) {
        break;
       }
       __ZN7WebCore9FrameView14adjustViewSizeEv(i1);
      }
     } while (0);
     HEAP32[i25 >> 2] = 5;
     HEAP8[i58] = i52;
     i43 = HEAP32[i31 >> 2] | 0;
     i44 = HEAP32[i43 + 28 >> 2] | 0;
     if ((i44 | 0) == (i43 | 0)) {
      i68 = i1;
     } else {
      i43 = i44;
      while (1) {
       i44 = HEAP32[i43 + 452 >> 2] | 0;
       i45 = HEAP32[i44 + 216 >> 2] | 0;
       i55 = HEAP32[i45 + 28 >> 2] | 0;
       if ((i55 | 0) == (i45 | 0)) {
        i68 = i44;
        break;
       } else {
        i43 = i55;
       }
      }
     }
     i43 = i68 + 436 | 0;
     HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 1;
     if ((HEAP8[i58] & 1) != 0) {
      __ZN7WebCore10RenderView19repaintRootContentsEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i57 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
     }
     i43 = HEAP32[(__ZNK7WebCore5Frame15contentRendererEv(HEAP32[i31 >> 2] | 0) | 0) + 40 >> 2] | 0;
     i52 = (HEAP8[i58] & 1) != 0 ? 14 : 13;
     if (i41) {
      i69 = (HEAP8[i56 + 22 | 0] & 64) != 0 ? i52 | 16 : i52;
     } else {
      i69 = i52;
     }
     __ZN7WebCore11RenderLayer31updateLayerPositionsAfterLayoutEPKS0_j(i56, i43, i69);
     i43 = HEAP32[i31 >> 2] | 0;
     i52 = HEAP32[i43 + 28 >> 2] | 0;
     if ((i52 | 0) == (i43 | 0)) {
      i70 = i1;
     } else {
      i43 = i52;
      while (1) {
       i52 = HEAP32[i43 + 452 >> 2] | 0;
       i55 = HEAP32[i52 + 216 >> 2] | 0;
       i44 = HEAP32[i55 + 28 >> 2] | 0;
       if ((i44 | 0) == (i55 | 0)) {
        i70 = i52;
        break;
       } else {
        i43 = i44;
       }
      }
     }
     i43 = i70 + 436 | 0;
     i44 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
     HEAP32[i43 >> 2] = i44;
     L178 : do {
      if ((i44 | 0) == 0) {
       i43 = i70 + 456 | 0;
       i52 = i70 + 464 | 0;
       if (+HEAPF64[i52 >> 3] != +0) {
        break;
       }
       i55 = i70 + 512 | 0;
       do {
        if (+HEAPF64[i55 >> 3] != +0) {
         d66 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
         d67 = +HEAPF64[i55 >> 3] - (d66 - +HEAPF64[i70 + 520 >> 3]);
         d66 = d67 > +0 ? d67 : +0;
         if (d66 == +0) {
          break;
         }
         if (+HEAPF64[i52 >> 3] != +0) {
          break L178;
         }
         __ZN7WebCore9TimerBase5startEdd(i43, d66, +0);
         break L178;
        }
       } while (0);
       __ZN7WebCore9FrameView18doDeferredRepaintsEv(i70);
      }
     } while (0);
     i44 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i31 >> 2] | 0) | 0;
     if ((i44 | 0) != 0) {
      __ZN7WebCore21RenderLayerCompositor32cacheAcceleratedCompositingFlagsEv(__ZN7WebCore10RenderView10compositorEv(i44) | 0);
      __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(__ZN7WebCore10RenderView10compositorEv(i44) | 0, 1, 0);
     }
     i44 = i1 + 312 | 0;
     HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
     __ZN7WebCore9FrameView22updateAnnotatedRegionsEv(i1);
     i44 = HEAP32[i31 >> 2] | 0;
     if ((i44 | 0) != 0) {
      i43 = i44;
      while (1) {
       i44 = HEAP32[i43 + 452 >> 2] | 0;
       if ((i44 | 0) != 0) {
        __ZN7WebCore10ScrollView18setCanBlitOnScrollEb(i44 | 0, (__ZNK7WebCore9FrameView15useSlowRepaintsEb(i44, 1) | 0) ^ 1);
       }
       i43 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i43 + 40 | 0, HEAP32[i31 >> 2] | 0) | 0;
       if ((i43 | 0) == 0) {
        break;
       }
      }
     }
     if ((HEAP16[i34 + 768 >> 1] & 64) != 0) {
      i43 = i1 | 0;
      __ZNK7WebCore10ScrollView10layoutSizeEv(i7, i43);
      i44 = HEAP32[i7 >> 2] | 0;
      i52 = i1;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i52 >> 2] | 0) + 184 >> 2] & 127](i6, i43);
      i55 = (i44 | 0) < (HEAP32[i6 >> 2] | 0);
      __ZNK7WebCore10ScrollView10layoutSizeEv(i5, i43);
      i44 = HEAP32[i5 + 4 >> 2] | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i52 >> 2] | 0) + 184 >> 2] & 127](i4, i43);
      __ZN7WebCore9FrameView20updateOverflowStatusEbb(i1, i55, (i44 | 0) < (HEAP32[i4 + 4 >> 2] | 0));
     }
     i44 = i1 + 320 | 0;
     i55 = i1 + 328 | 0;
     L200 : do {
      if (+HEAPF64[i55 >> 3] == +0) {
       i43 = i1 + 309 | 0;
       do {
        if ((HEAP8[i43] & 1) == 0) {
         if (i30) {
          __ZN7WebCore9FrameView21updateWidgetPositionsEv(i1);
          break;
         } else {
          HEAP8[i43] = 1;
          __ZN7WebCore9FrameView22performPostLayoutTasksEv(i1);
          HEAP8[i43] = 0;
          break;
         }
        }
       } while (0);
       if (+HEAPF64[i55 >> 3] != +0) {
        break;
       }
       i52 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i31 >> 2] | 0) | 0;
       i45 = i1 + 248 | 0;
       do {
        if (+HEAPF64[i45 >> 3] == +0) {
         if ((i52 | 0) != 0) {
          if ((HEAP32[i52 + 20 >> 2] & 31 | 0) != 0) {
           break;
          }
         }
         if ((HEAP32[i38 >> 2] | 0) != 0) {
          break;
         }
         if ((HEAP32[i1 + 564 >> 2] | 0) != 0) {
          if ((HEAP8[i32] & 1) != 0) {
           break;
          }
         }
         if (!((HEAP8[i43] & 1) != 0 | i30)) {
          break L200;
         }
        }
       } while (0);
       __ZN7WebCore9TimerBase5startEdd(i44, +0, +0);
       i43 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i31 >> 2] | 0) | 0;
       do {
        if (+HEAPF64[i45 >> 3] == +0) {
         if ((i43 | 0) != 0) {
          if ((HEAP32[i43 + 20 >> 2] & 31 | 0) != 0) {
           break;
          }
         }
         if ((HEAP32[i38 >> 2] | 0) != 0) {
          break;
         }
         if ((HEAP32[i1 + 564 >> 2] | 0) == 0) {
          break L200;
         }
         if ((HEAP8[i32] & 1) == 0) {
          break L200;
         }
        }
       } while (0);
       __ZN7WebCore9FrameView6layoutEb(i1, 1);
      }
     } while (0);
     do {
      if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
       if ((HEAP32[i17 >> 2] | 0) == 0) {
        break;
       }
       __ZN7WebCore24InspectorInstrumentation13didLayoutImplERKNS_30InspectorInstrumentationCookieEPNS_12RenderObjectE(i17, i57);
      }
     } while (0);
     i44 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
     HEAP32[i37 >> 2] = i44;
     do {
      if ((i44 | 0) == 0) {
       i55 = HEAP32[i31 >> 2] | 0;
       i43 = HEAP32[i55 + 32 >> 2] | 0;
       if ((i43 | 0) == 0) {
        break;
       }
       i45 = HEAP32[(HEAP32[i43 + 20 >> 2] | 0) + 8 >> 2] | 0;
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i45 >> 2] | 0) + 200 >> 2] & 127](i45, i55);
      }
     } while (0);
     i44 = __ZN7WebCore9fontCacheEv() | 0;
     i55 = i44 | 0;
     i45 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
     HEAP32[i55 >> 2] = i45;
     if ((i45 | 0) != 0) {
      break;
     }
     __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i44);
    }
   } while (0);
   __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i17);
  }
 } while (0);
 HEAP8[i28] = i29;
 i29 = i1 + 4 | 0;
 i1 = i29 | 0;
 i28 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 do {
  if ((i28 | 0) == 0) {
   i17 = i29 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
  } else {
   HEAP32[i1 >> 2] = i28;
  }
 } while (0);
 HEAP32[i25 >> 2] = i26;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView22scrollContentsFastPathERKNS_7IntSizeERKNS_7IntRectES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 672 | 0;
 i6 = i5 | 0;
 i7 = i5 + 296 | 0;
 i8 = i5 + 312 | 0;
 i9 = i5 + 328 | 0;
 i10 = i5 + 344 | 0;
 i11 = i5 + 640 | 0;
 i12 = i5 + 656 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = i1 + 640 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   if ((HEAP32[i19 + 12 >> 2] | 0) == 0) {
    break;
   }
   i20 = i1 + 216 | 0;
   i21 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i20 >> 2] | 0) | 0;
   do {
    if ((i21 | 0) == 0) {
     i22 = 8;
    } else {
     if (!(__ZNK7WebCore12RenderObject12isCompositedEv(i21 | 0) | 0)) {
      i22 = 8;
      break;
     }
     i23 = HEAP32[(HEAP32[(HEAP32[i21 + 40 >> 2] | 0) + 208 >> 2] | 0) + 16 >> 2] | 0;
     if ((i23 | 0) == 0) {
      i22 = 8;
      break;
     }
     if ((HEAP8[i23 + 340 | 0] & 32) == 0) {
      i22 = 8;
     } else {
      i24 = 1;
     }
    }
   } while (0);
   if ((i22 | 0) == 8) {
    i24 = 0;
   }
   __ZN7WebCore6RegionC1Ev(i6);
   i21 = HEAP32[i18 >> 2] | 0;
   i23 = HEAP32[i21 >> 2] | 0;
   i25 = HEAP32[i21 + 4 >> 2] | 0;
   i26 = i23 + (i25 << 2) | 0;
   L11 : do {
    if ((HEAP32[i21 + 12 >> 2] | 0) == 0) {
     i22 = 36;
    } else {
     L13 : do {
      if ((i25 | 0) == 0) {
       i27 = i23;
      } else {
       i28 = i23;
       while (1) {
        i29 = HEAP32[i28 >> 2] | 0;
        if (!((i29 | 0) == (-1 | 0) | (i29 | 0) == 0)) {
         i27 = i28;
         break L13;
        }
        i29 = i28 + 4 | 0;
        if ((i29 | 0) == (i26 | 0)) {
         i22 = 36;
         break L11;
        } else {
         i28 = i29;
        }
       }
      }
     } while (0);
     if ((i27 | 0) == (i26 | 0)) {
      i22 = 36;
      break;
     }
     i28 = i1 | 0;
     i29 = i7;
     i30 = i9;
     i31 = i7 + 8 | 0;
     i32 = i7 + 12 | 0;
     i33 = i10 + 164 | 0;
     i34 = i10 + 156 | 0;
     i35 = i10 + 168 | 0;
     i36 = i10 + 24 | 0;
     i37 = i10 + 16 | 0;
     i38 = i10 + 28 | 0;
     i39 = i10 + 20 | 0;
     i40 = i10 + 160 | 0;
     i41 = i1 + 171 | 0;
     i42 = i27;
     while (1) {
      i43 = HEAP32[i42 >> 2] | 0;
      i44 = (HEAP32[(HEAP32[i43 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
      do {
       if ((i44 | 0) == 6 | (i44 | 0) == 3) {
        if (__ZNK7WebCore12RenderObject12isCompositedEv(i43 | 0) | 0) {
         break;
        }
        i45 = HEAP32[(HEAP32[i42 >> 2] | 0) + 40 >> 2] | 0;
        i46 = (HEAP32[i45 + 20 >> 2] | 0) >>> 29 & 3;
        if ((i46 | 0) == 1 | (i46 | 0) == 3) {
         break;
        }
        if (__ZNK7WebCore11RenderLayer28hasAncestorWithFilterOutsetsEv(i45) | 0) {
         i47 = 0;
         break L11;
        }
        __ZNK7WebCore11RenderLayer45repaintRectIncludingNonCompositingDescendantsEv(i8, i45);
        __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i7, i8);
        __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_7IntRectE(i9, i28, i7);
        HEAP32[i29 >> 2] = HEAP32[i30 >> 2];
        HEAP32[i29 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
        HEAP32[i29 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
        HEAP32[i29 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
        do {
         if (!i24) {
          if ((HEAP8[i41] & 1) == 0) {
           break;
          }
          __ZN7WebCore7IntRect9intersectERKS0_(i7, i3);
         }
        } while (0);
        if ((HEAP32[i31 >> 2] | 0) < 1) {
         break;
        }
        if ((HEAP32[i32 >> 2] | 0) < 1) {
         break;
        }
        __ZN7WebCore6RegionC1ERKNS_7IntRectE(i10, i7);
        __ZN7WebCore6Region5uniteERKS0_(i6, i10);
        if ((HEAP32[i33 >> 2] | 0) != 0) {
         HEAP32[i33 >> 2] = 0;
        }
        i45 = HEAP32[i34 >> 2] | 0;
        if (!((i35 | 0) == (i45 | 0) | (i45 | 0) == 0)) {
         HEAP32[i34 >> 2] = 0;
         HEAP32[i40 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i45);
        }
        if ((HEAP32[i36 >> 2] | 0) != 0) {
         HEAP32[i36 >> 2] = 0;
        }
        i45 = HEAP32[i37 >> 2] | 0;
        if ((i38 | 0) == (i45 | 0) | (i45 | 0) == 0) {
         break;
        }
        HEAP32[i37 >> 2] = 0;
        HEAP32[i39 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i45);
       }
      } while (0);
      i43 = i42 + 4 | 0;
      if ((i43 | 0) == (i26 | 0)) {
       i22 = 36;
       break L11;
      } else {
       i48 = i43;
      }
      while (1) {
       i43 = HEAP32[i48 >> 2] | 0;
       if (!((i43 | 0) == (-1 | 0) | (i43 | 0) == 0)) {
        break;
       }
       i43 = i48 + 4 | 0;
       if ((i43 | 0) == (i26 | 0)) {
        i22 = 36;
        break L11;
       } else {
        i48 = i43;
       }
      }
      if ((i48 | 0) == (i26 | 0)) {
       i22 = 36;
       break;
      } else {
       i42 = i48;
      }
     }
    }
   } while (0);
   do {
    if ((i22 | 0) == 36) {
     i26 = HEAP32[(HEAP32[(HEAP32[i20 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] | 0;
     FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i26 >> 2] | 0) + 16 >> 2] & 31](i26 | 0, i2, i3, i4);
     __ZNK7WebCore6Region5rectsEv(i11, i6);
     i26 = i11 + 8 | 0;
     i23 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i25 = i11 | 0;
       i21 = i12;
       i42 = i15;
       i39 = i2 | 0;
       i37 = i2 + 4 | 0;
       i38 = i15 | 0;
       i36 = i15 + 4 | 0;
       i40 = i1 | 0;
       i34 = i16;
       i35 = i17 | 0;
       i33 = i17 + 4 | 0;
       i32 = i12 + 8 | 0;
       i31 = i17 + 8 | 0;
       i41 = i17 + 12 | 0;
       i30 = i1 + 171 | 0;
       L51 : do {
        if (i24) {
         i29 = 0;
         i28 = i23;
         while (1) {
          if (i28 >>> 0 <= i29 >>> 0) {
           break;
          }
          i43 = (HEAP32[i25 >> 2] | 0) + (i29 << 4) | 0;
          HEAP32[i21 >> 2] = HEAP32[i43 >> 2];
          HEAP32[i21 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
          HEAP32[i21 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
          HEAP32[i21 + 12 >> 2] = HEAP32[i43 + 12 >> 2];
          _memmove(i42 | 0, i43 | 0, 16) | 0;
          i43 = HEAP32[i37 >> 2] | 0;
          HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + (HEAP32[i39 >> 2] | 0);
          HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + i43;
          __ZN7WebCore7IntRect5uniteERKS0_(i14, i15);
          __ZNK7WebCore10ScrollView18rootViewToContentsERKNS_7IntRectE(i16, i40, i14);
          HEAP32[i21 >> 2] = HEAP32[i34 >> 2];
          HEAP32[i21 + 4 >> 2] = HEAP32[i34 + 4 >> 2];
          HEAP32[i21 + 8 >> 2] = HEAP32[i34 + 8 >> 2];
          HEAP32[i21 + 12 >> 2] = HEAP32[i34 + 12 >> 2];
          i43 = HEAP32[(__ZNK7WebCore5Frame15contentRendererEv(HEAP32[i20 >> 2] | 0) | 0) + 40 >> 2] | 0;
          i44 = HEAP32[i13 + 4 >> 2] | 0;
          HEAP32[i35 >> 2] = HEAP32[i13 >> 2];
          HEAP32[i33 >> 2] = i44;
          i44 = HEAP32[i32 + 4 >> 2] | 0;
          HEAP32[i31 >> 2] = HEAP32[i32 >> 2];
          HEAP32[i41 >> 2] = i44;
          __ZN7WebCore11RenderLayer28setBackingNeedsRepaintInRectERKNS_10LayoutRectE(i43, i17);
          i43 = i29 + 1 | 0;
          i44 = HEAP32[i26 >> 2] | 0;
          if (i43 >>> 0 < i23 >>> 0) {
           i29 = i43;
           i28 = i44;
          } else {
           i49 = i44;
           break L51;
          }
         }
         __ZN3WTF15CrashOnOverflow10overflowedEv();
         return 0;
        } else {
         i28 = 0;
         i29 = i23;
         while (1) {
          if (i29 >>> 0 <= i28 >>> 0) {
           break;
          }
          i44 = (HEAP32[i25 >> 2] | 0) + (i28 << 4) | 0;
          HEAP32[i21 >> 2] = HEAP32[i44 >> 2];
          HEAP32[i21 + 4 >> 2] = HEAP32[i44 + 4 >> 2];
          HEAP32[i21 + 8 >> 2] = HEAP32[i44 + 8 >> 2];
          HEAP32[i21 + 12 >> 2] = HEAP32[i44 + 12 >> 2];
          _memmove(i42 | 0, i44 | 0, 16) | 0;
          i44 = HEAP32[i37 >> 2] | 0;
          HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + (HEAP32[i39 >> 2] | 0);
          HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + i44;
          __ZN7WebCore7IntRect5uniteERKS0_(i14, i15);
          if ((HEAP8[i30] & 1) != 0) {
           __ZN7WebCore7IntRect9intersectERKS0_(i14, i3);
          }
          i44 = HEAP32[(HEAP32[(HEAP32[i20 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] | 0;
          FUNCTION_TABLE_viii[HEAP32[(HEAP32[i44 >> 2] | 0) + 12 >> 2] & 63](i44 | 0, i14, 0);
          i44 = i28 + 1 | 0;
          i43 = HEAP32[i26 >> 2] | 0;
          if (i44 >>> 0 < i23 >>> 0) {
           i28 = i44;
           i29 = i43;
          } else {
           i49 = i43;
           break L51;
          }
         }
         __ZN3WTF15CrashOnOverflow10overflowedEv();
         return 0;
        }
       } while (0);
       if ((i49 | 0) == 0) {
        break;
       }
       HEAP32[i26 >> 2] = 0;
      }
     } while (0);
     i26 = i11 | 0;
     i23 = HEAP32[i26 >> 2] | 0;
     if ((i23 | 0) == 0) {
      i47 = 1;
      break;
     }
     HEAP32[i26 >> 2] = 0;
     HEAP32[i11 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i23);
     i47 = 1;
    }
   } while (0);
   i20 = i6 + 164 | 0;
   if ((HEAP32[i20 >> 2] | 0) != 0) {
    HEAP32[i20 >> 2] = 0;
   }
   i20 = i6 + 156 | 0;
   i23 = HEAP32[i20 >> 2] | 0;
   if (!((i6 + 168 | 0) == (i23 | 0) | (i23 | 0) == 0)) {
    HEAP32[i20 >> 2] = 0;
    HEAP32[i6 + 160 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i23);
   }
   i23 = i6 + 24 | 0;
   if ((HEAP32[i23 >> 2] | 0) != 0) {
    HEAP32[i23 >> 2] = 0;
   }
   i23 = i6 + 16 | 0;
   i20 = HEAP32[i23 >> 2] | 0;
   if ((i6 + 28 | 0) == (i20 | 0) | (i20 | 0) == 0) {
    i50 = i47;
    STACKTOP = i5;
    return i50 | 0;
   }
   HEAP32[i23 >> 2] = 0;
   HEAP32[i6 + 20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i20);
   i50 = i47;
   STACKTOP = i5;
   return i50 | 0;
  }
 } while (0);
 i47 = HEAP32[(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i47 >> 2] | 0) + 16 >> 2] & 31](i47 | 0, i2, i3, i4);
 i50 = 1;
 STACKTOP = i5;
 return i50 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_did + 2;
}
function __ZN7WebCore9FrameView17autoSizeIfEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 64 | 0;
 i8 = i2 + 80 | 0;
 i9 = i2 + 96 | 0;
 i10 = i2 + 112 | 0;
 i11 = i2 + 128 | 0;
 i12 = i2 + 144 | 0;
 i13 = i2 + 160 | 0;
 i14 = i2 + 168 | 0;
 i15 = i2 + 184 | 0;
 i16 = i2 + 192 | 0;
 i17 = i2 + 200 | 0;
 i18 = i17;
 if ((HEAP8[i1 + 604 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i19 = i1 + 605 | 0;
 if ((HEAP8[i19] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i19] = 1;
 i20 = i1 + 216 | 0;
 i21 = HEAP32[(HEAP32[i20 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i22 = HEAP32[i21 + 1584 >> 2] | 0;
   if ((i22 | 0) == 0 | (HEAP32[i21 + 692 >> 2] | 0) == 0) {
    break;
   }
   i23 = i1 | 0;
   i24 = i1 + 608 | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   i26 = i1 + 612 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   i28 = i1;
   i29 = HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0;
   __ZNK7WebCore6Widget9frameRectEv(i4, i23);
   i30 = HEAP32[i4 >> 2] | 0;
   __ZNK7WebCore6Widget9frameRectEv(i3, i23);
   i31 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = i30;
   HEAP32[i5 + 4 >> 2] = i31;
   HEAP32[i5 + 8 >> 2] = i25;
   HEAP32[i5 + 12 >> 2] = i27;
   FUNCTION_TABLE_vii[i29 & 127](i23, i5);
   __ZNK7WebCore6Widget9frameRectEv(i12, i23);
   i29 = i12 + 8 | 0;
   i27 = HEAP32[i29 >> 2] | 0;
   i25 = HEAP32[i29 + 4 >> 2] | 0;
   i29 = i22 | 0;
   i31 = i13 | 0;
   i30 = i14 + 12 | 0;
   i32 = i1 + 616 | 0;
   i33 = i1 + 56 | 0;
   i34 = i15 | 0;
   i35 = i1 + 620 | 0;
   i36 = i1 + 606 | 0;
   i37 = i7 | 0;
   i38 = i6 + 4 | 0;
   i39 = i8 | 0;
   i40 = i8 + 4 | 0;
   i41 = i8 + 8 | 0;
   i42 = i8 + 12 | 0;
   i43 = i1 | 0;
   i44 = i1 + 73 | 0;
   i45 = i1 + 72 | 0;
   i46 = i1 + 60 | 0;
   i47 = i16 | 0;
   i48 = 0;
   L10 : while (1) {
    __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i21);
    __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i13, i29);
    i49 = HEAP32[i31 >> 2] | 0;
    __ZNK7WebCore10RenderView12documentRectEv(i14, i22);
    i50 = HEAP32[i30 >> 2] | 0;
    do {
     if ((i49 | 0) > (HEAP32[i32 >> 2] | 0)) {
      i51 = HEAP32[i33 >> 2] | 0;
      if ((i51 | 0) == 0) {
       __ZN7WebCore9FrameView15createScrollbarENS_20ScrollbarOrientationE(i15, i1, 0);
       i52 = HEAP32[i34 >> 2] | 0;
       HEAP32[i34 >> 2] = 0;
       i53 = i52;
      } else {
       i52 = i51 + 4 | 0;
       HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 1;
       i53 = i51;
      }
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i53 >> 2] | 0) + 220 >> 2] & 127](i53) | 0) {
       i54 = i50;
      } else {
       i54 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i53 >> 2] | 0) + 108 >> 2] & 127](i53) | 0) + i50 | 0;
      }
      if ((i53 | 0) == 0) {
       i55 = i49;
       i56 = i54;
       break;
      }
      i51 = i53 + 4 | 0;
      i52 = i51 | 0;
      i57 = (HEAP32[i52 >> 2] | 0) - 1 | 0;
      if ((i57 | 0) != 0) {
       HEAP32[i52 >> 2] = i57;
       i55 = i49;
       i56 = i54;
       break;
      }
      i57 = i51 - 4 | 0;
      if ((i57 | 0) == 0) {
       i55 = i49;
       i56 = i54;
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 63](i57);
      i55 = i49;
      i56 = i54;
     } else {
      if ((i50 | 0) <= (HEAP32[i35 >> 2] | 0)) {
       i55 = i49;
       i56 = i50;
       break;
      }
      i57 = HEAP32[i46 >> 2] | 0;
      if ((i57 | 0) == 0) {
       __ZN7WebCore9FrameView15createScrollbarENS_20ScrollbarOrientationE(i16, i1, 1);
       i51 = HEAP32[i47 >> 2] | 0;
       HEAP32[i47 >> 2] = 0;
       i58 = i51;
      } else {
       i51 = i57 + 4 | 0;
       HEAP32[i51 >> 2] = (HEAP32[i51 >> 2] | 0) + 1;
       i58 = i57;
      }
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 220 >> 2] & 127](i58) | 0) {
       i59 = i49;
      } else {
       i59 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i58 >> 2] | 0) + 104 >> 2] & 127](i58) | 0) + i49 | 0;
      }
      if ((i58 | 0) == 0) {
       i55 = i59;
       i56 = i50;
       break;
      }
      i57 = i58 + 4 | 0;
      i51 = i57 | 0;
      i52 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
      if ((i52 | 0) != 0) {
       HEAP32[i51 >> 2] = i52;
       i55 = i59;
       i56 = i50;
       break;
      }
      i52 = i57 - 4 | 0;
      if ((i52 | 0) == 0) {
       i55 = i59;
       i56 = i50;
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i52 >> 2] | 0) + 4 >> 2] & 63](i52);
      i55 = i59;
      i56 = i50;
     }
    } while (0);
    i50 = HEAP32[i24 >> 2] | 0;
    i49 = (i55 | 0) > (i50 | 0) ? i55 : i50;
    i50 = HEAP32[i26 >> 2] | 0;
    i52 = (i56 | 0) > (i50 | 0) ? i56 : i50;
    i50 = HEAP32[i32 >> 2] | 0;
    i57 = (i49 | 0) > (i50 | 0);
    i51 = i57 ? i50 : i49;
    i49 = i57 ? 2 : 1;
    i57 = HEAP32[i35 >> 2] | 0;
    i60 = (i52 | 0) > (i57 | 0);
    i61 = i60 ? i57 : i52;
    i52 = i60 ? 2 : 1;
    if (!((i51 | 0) == (i27 | 0) & (i61 | 0) == (i25 | 0))) {
     do {
      if (!((HEAP8[i36] & 1) == 0 | (i25 | 0) > (i57 | 0) | (i27 | 0) > (i50 | 0))) {
       if (__ZNK7WebCore11FrameLoader10isCompleteEv((HEAP32[i20 >> 2] | 0) + 80 | 0) | 0) {
        break;
       }
       if ((i61 | 0) < (i25 | 0) | (i51 | 0) < (i27 | 0)) {
        break L10;
       }
      }
     } while (0);
     i50 = HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0;
     __ZNK7WebCore6Widget9frameRectEv(i7, i23);
     i57 = HEAP32[i37 >> 2] | 0;
     __ZNK7WebCore6Widget9frameRectEv(i6, i23);
     i60 = HEAP32[i38 >> 2] | 0;
     HEAP32[i39 >> 2] = i57;
     HEAP32[i40 >> 2] = i60;
     HEAP32[i41 >> 2] = i51;
     HEAP32[i42 >> 2] = i61;
     FUNCTION_TABLE_vii[i50 & 127](i23, i8);
     HEAP8[i44] = 0;
     HEAP8[i45] = 0;
     __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i43, i49, i52, 1, 1);
    }
    i48 = i48 + 1 | 0;
    if ((i48 | 0) >= 2) {
     break;
    }
   }
   __ZNK7WebCore10ScrollView12contentsSizeEv(i18, i43);
   i48 = i1 + 628 | 0;
   i45 = HEAP32[i17 >> 2] | 0;
   i44 = HEAP32[i17 + 4 >> 2] | 0;
   HEAP32[i48 >> 2] = i45;
   HEAP32[i48 + 4 >> 2] = i44;
   i48 = HEAP32[i1 + 624 >> 2] | 0;
   i42 = i44;
   if ((i48 | 0) != 0) {
    i44 = HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] | 0;
    __ZNK7WebCore6Widget9frameRectEv(i10, i23);
    i41 = HEAP32[i10 >> 2] | 0;
    __ZNK7WebCore6Widget9frameRectEv(i9, i23);
    i40 = HEAP32[i9 + 4 >> 2] | 0;
    HEAP32[i11 >> 2] = i41;
    HEAP32[i11 + 4 >> 2] = i40;
    HEAP32[i11 + 8 >> 2] = i45;
    HEAP32[i11 + 12 >> 2] = (i48 | 0) < (i42 | 0) ? i42 : i48;
    FUNCTION_TABLE_vii[i44 & 127](i23, i11);
    __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i21);
   }
   HEAP8[i36] = 1;
  }
 } while (0);
 HEAP8[i19] = 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9FrameView13paintContentsEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i1 + 216 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i10 + 456 >> 2] | 0;
 i12 = __ZNK7WebCore5Frame15contentRendererEv(i10) | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i9 >> 2] | 0) | 0;
 if (+HEAPF64[i1 + 248 >> 3] != +0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((i10 | 0) != 0) {
   if ((HEAP32[i10 + 20 >> 2] & 31 | 0) == 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 300 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((HEAP32[i1 + 564 >> 2] | 0) != 0) {
   if ((HEAP8[i1 + 568 | 0] & 1) == 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if (!(__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0)) {
   i10 = i12 | 0;
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
    break;
   }
   i13 = __ZN7WebCore24InspectorInstrumentation30instrumentingAgentsForRendererEPNS_12RenderObjectE(i10) | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation13willPaintImplEPNS_19InstrumentingAgentsEPNS_12RenderObjectE(i13, i10);
  }
 } while (0);
 i10 = +HEAPF64[H_BASE + 792 >> 3] == +0;
 if (i10) {
  d14 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
  HEAPF64[H_BASE + 792 >> 3] = d14;
 }
 i13 = __ZN7WebCore9fontCacheEv() | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 do {
  if (!(__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0)) {
   if ((HEAP8[i11 + 660 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore9FrameView33flushCompositingStateForThisFrameEPNS_5FrameE(i1, HEAP32[i9 >> 2] | 0) | 0;
  }
 } while (0);
 i13 = i1 + 576 | 0;
 i15 = HEAP32[i13 >> 2] | 0;
 L30 : do {
  if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
   i16 = i15;
   i17 = 23;
  } else {
   i18 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i9 >> 2] | 0) + 40 | 0) | 0;
   do {
    if ((i18 | 0) != 0) {
     i19 = HEAP32[i18 + 452 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     if ((HEAP32[i19 + 576 >> 2] & 4 | 0) == 0) {
      break;
     }
     HEAP32[i13 >> 2] = HEAP32[i13 >> 2] | 4;
     break L30;
    }
   } while (0);
   i16 = HEAP32[i13 >> 2] | 0;
   i17 = 23;
  }
 } while (0);
 do {
  if ((i17 | 0) == 23) {
   if ((i16 | 0) != 0) {
    break;
   }
   i18 = HEAP32[i11 + 1124 >> 2] | 0;
   i19 = i3;
   i20 = HEAP32[i19 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i19 >> 2];
   HEAP32[i5 + 4 >> 2] = i20;
   i20 = i3 + 8 | 0;
   i19 = HEAP32[i20 + 4 >> 2] | 0;
   HEAP32[i5 + 8 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i5 + 12 >> 2] = i19;
   __ZN7WebCore24DocumentMarkerController39invalidateRenderedRectsForMarkersInRectERKNS_10LayoutRectE(i18, i5);
  }
 } while (0);
 i5 = HEAP32[i13 >> 2] | 0;
 if ((HEAP8[i11 + 660 | 0] & 1) == 0) {
  i21 = i5;
 } else {
  i16 = i5 | 4;
  HEAP32[i13 >> 2] = i16;
  i21 = i16;
 }
 i16 = HEAP32[i9 >> 2] | 0;
 i5 = (i21 & 4 | 0) == 0 | (HEAP32[i16 + 448 >> 2] | 0) != 0;
 if (!(i5 | (i16 | 0) == 0)) {
  i21 = i16;
  while (1) {
   i16 = HEAP32[i21 + 452 >> 2] | 0;
   if ((i16 | 0) != 0) {
    __ZN7WebCore9FrameView13notifyWidgetsENS_18WidgetNotificationE(i16, 0);
   }
   i21 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i21 + 40 | 0, HEAP32[i9 >> 2] | 0) | 0;
   if ((i21 | 0) == 0) {
    break;
   }
  }
 }
 i21 = i1 + 580 | 0;
 HEAP8[i21] = 1;
 i16 = HEAP32[i1 + 572 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i22 = 0;
 } else {
  i17 = i16 + 32 | 0;
  if ((HEAP32[i16 + 12 >> 2] & 2048 | 0) == 0) {
   i23 = i17 | 0;
  } else {
   i23 = HEAP32[i17 >> 2] | 0;
  }
  i22 = HEAP32[i23 >> 2] | 0;
 }
 i23 = HEAP32[i12 + 40 >> 2] | 0;
 i17 = i3;
 i16 = HEAP32[i17 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i6 + 4 >> 2] = i16;
 i16 = i3 + 8 | 0;
 i3 = HEAP32[i16 + 4 >> 2] | 0;
 HEAP32[i6 + 8 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i6 + 12 >> 2] = i3;
 __ZN7WebCore11RenderLayer5paintEPNS_15GraphicsContextERKNS_10LayoutRectEjPNS_12RenderObjectEPNS_12RenderRegionEj(i23, i2, i6, HEAP32[i13 >> 2] | 0, i22, 0, 0);
 if ((HEAP8[i23 + 23 | 0] | 0) < 0) {
  i6 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i7 + 4 >> 2] = i6;
  i6 = HEAP32[i16 + 4 >> 2] | 0;
  HEAP32[i7 + 8 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i7 + 12 >> 2] = i6;
  __ZN7WebCore11RenderLayer22paintOverlayScrollbarsEPNS_15GraphicsContextERKNS_10LayoutRectEjPNS_12RenderObjectE(i23, i2, i7, HEAP32[i13 >> 2] | 0, i22);
 }
 HEAP8[i21] = 0;
 do {
  if (!i5) {
   i21 = HEAP32[i9 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   } else {
    i24 = i21;
   }
   while (1) {
    i21 = HEAP32[i24 + 452 >> 2] | 0;
    if ((i21 | 0) != 0) {
     __ZN7WebCore9FrameView13notifyWidgetsENS_18WidgetNotificationE(i21, 1);
    }
    i24 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i24 + 40 | 0, HEAP32[i9 >> 2] | 0) | 0;
    if ((i24 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i15;
 HEAPF64[i1 + 520 >> 3] = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 if ((HEAP8[i11 + 1409 | 0] & 1) != 0) {
  __ZN7WebCore9FrameView22updateAnnotatedRegionsEv(i1);
 }
 if (i10) {
  HEAPF64[H_BASE + 792 >> 3] = +0;
 }
 do {
  if (!(__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0)) {
   i10 = i12 | 0;
   i11 = HEAP32[i17 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i8 + 4 >> 2] = i11;
   i11 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i8 + 8 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i8 + 12 >> 2] = i11;
   do {
    if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
     i11 = __ZN7WebCore24InspectorInstrumentation30instrumentingAgentsForRendererEPNS_12RenderObjectE(i10) | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation12didPaintImplEPNS_19InstrumentingAgentsEPNS_12RenderObjectEPNS_15GraphicsContextERKNS_10LayoutRectE(i11, i10, i2, i8);
    }
   } while (0);
   i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i1 + 652 | 0;
   i15 = HEAP32[i11 >> 2] | 0;
   if ((i15 & 8 | 0) == 0) {
    i25 = 0;
   } else {
    i25 = HEAP32[i10 + 212 >> 2] & 8;
   }
   if ((i15 & 32 | 0) == 0) {
    i26 = i25;
   } else {
    i26 = (HEAP32[i10 + 212 >> 2] & 32 | 0) == 0 ? i25 : i25 | 32;
   }
   HEAP32[i11 >> 2] = 0;
   if ((i26 | 0) == 0) {
    break;
   }
   __ZN7WebCore11FrameLoader9didLayoutEj((HEAP32[i10 + 60 >> 2] | 0) + 80 | 0, i26);
  }
 } while (0);
 i26 = __ZN7WebCore9fontCacheEv() | 0;
 i25 = i26 | 0;
 i1 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
 HEAP32[i25 >> 2] = i1;
 if ((i1 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i26);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9FrameView24forceLayoutForPaginationERKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = i15 | 0;
 i17 = i15;
 i18 = i1 + 216 | 0;
 i19 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i18 >> 2] | 0) | 0;
 do {
  if ((i19 | 0) != 0) {
   i20 = i19 + 36 | 0;
   i21 = (HEAP32[(HEAP32[i20 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    i22 = i2 | 0;
   } else {
    i22 = i2 + 4 | 0;
   }
   d23 = +HEAPF32[i22 >> 2];
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    i24 = i2 + 4 | 0;
   } else {
    i24 = i2 | 0;
   }
   d25 = +HEAPF32[i24 >> 2];
   do {
    if (d23 < +2147483647) {
     if (d23 <= +-2147483648) {
      i26 = -2147483648;
      break;
     }
     i26 = ~~d23;
    } else {
     i26 = 2147483647;
    }
   } while (0);
   do {
    if (d25 < +2147483647) {
     if (d25 <= +-2147483648) {
      i27 = -2147483648;
      break;
     }
     i27 = ~~d25;
    } else {
     i27 = 2147483647;
    }
   } while (0);
   i28 = i19 | 0;
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    HEAP32[i19 + 52 >> 2] = i26;
   } else {
    HEAP32[i19 + 56 >> 2] = i26;
   }
   i29 = i19 + 184 | 0;
   if ((HEAP32[i29 >> 2] | 0) != (i27 | 0)) {
    HEAP32[i29 >> 2] = i27;
    HEAP8[i19 + 188 | 0] = 1;
   }
   i30 = i19 | 0;
   i31 = i19 + 20 | 0;
   i32 = HEAP32[i31 >> 2] | 0;
   do {
    if ((i32 & 1 | 0) == 0) {
     HEAP32[i31 >> 2] = i32 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i30, 1, 0);
     if ((HEAP32[i31 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i30);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i30, 1, 1);
   __ZN7WebCore9FrameView6layoutEb(i1, 0);
   i32 = (HEAP32[(HEAP32[i20 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   __ZNK7WebCore10RenderView12documentRectEv(i8, i19);
   i21 = i7 + 8 | 0;
   i33 = HEAP32[i21 >> 2] | 0;
   i34 = HEAP32[i21 + 4 >> 2] | 0;
   if ((i32 | 0) == 3 | (i32 | 0) == 0) {
    i35 = i33;
   } else {
    i35 = i34;
   }
   if (+(i35 | 0) <= d23) {
    break;
   }
   d25 = +(i33 | 0);
   d36 = +HEAPF32[i2 >> 2] * d4;
   d37 = +(i34 | 0);
   d38 = +HEAPF32[i2 + 4 >> 2] * d4;
   i34 = HEAP32[i18 >> 2] | 0;
   d39 = +HEAPF32[i3 + 4 >> 2];
   HEAPF32[i10 >> 2] = +HEAPF32[i3 >> 2];
   HEAPF32[i10 + 4 >> 2] = d39;
   HEAPF32[i11 >> 2] = +(~~(d36 < d25 ? d36 : d25) | 0);
   HEAPF32[i11 + 4 >> 2] = +(~~(d38 < d37 ? d38 : d37) | 0);
   __ZN7WebCore5Frame27resizePageRectsKeepingRatioERKNS_9FloatSizeES3_(i9, i34, i10, i11);
   if ((i32 | 0) == 3 | (i32 | 0) == 0) {
    d40 = +HEAPF32[i9 + 4 >> 2];
    d41 = +HEAPF32[i9 >> 2];
   } else {
    d40 = +HEAPF32[i9 >> 2];
    d41 = +HEAPF32[i9 + 4 >> 2];
   }
   i34 = d41 < +2147483647;
   do {
    if (i34) {
     if (d41 <= +-2147483648) {
      i42 = -2147483648;
      break;
     }
     i42 = ~~d41;
    } else {
     i42 = 2147483647;
    }
   } while (0);
   do {
    if (d40 < +2147483647) {
     if (d40 <= +-2147483648) {
      i43 = -2147483648;
      break;
     }
     i43 = ~~d40;
    } else {
     i43 = 2147483647;
    }
   } while (0);
   i33 = (HEAP32[(HEAP32[i20 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i33 | 0) == 3 | (i33 | 0) == 0) {
    HEAP32[i19 + 52 >> 2] = i42;
   } else {
    HEAP32[i19 + 56 >> 2] = i42;
   }
   if ((HEAP32[i29 >> 2] | 0) != (i43 | 0)) {
    HEAP32[i29 >> 2] = i43;
    HEAP8[i19 + 188 | 0] = 1;
   }
   i33 = HEAP32[i31 >> 2] | 0;
   do {
    if ((i33 & 1 | 0) == 0) {
     HEAP32[i31 >> 2] = i33 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i30, 1, 0);
     if ((HEAP32[i31 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i30);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i30, 1, 1);
   __ZN7WebCore9FrameView6layoutEb(i1, 0);
   __ZNK7WebCore10RenderView12documentRectEv(i14, i19);
   i31 = HEAP32[i13 >> 2] | 0;
   i33 = HEAP32[i13 + 4 >> 2] | 0;
   i29 = i12 + 8 | 0;
   i21 = HEAP32[i29 >> 2] | 0;
   i44 = HEAP32[i29 + 4 >> 2] | 0;
   if ((i32 | 0) == 3 | (i32 | 0) == 0) {
    i45 = i21 + i31 | 0;
    i46 = i44;
    i47 = i33;
   } else {
    i45 = i44 + i33 | 0;
    i46 = i21;
    i47 = i31;
   }
   do {
    if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
     d23 = +(i45 | 0) - d41;
     if (d23 >= +2147483647) {
      i48 = 2147483647;
      break;
     }
     if (d23 <= +-2147483648) {
      i48 = -2147483648;
      break;
     }
     i48 = ~~d23;
    } else {
     i48 = 0;
    }
   } while (0);
   do {
    if (i34) {
     if (d41 <= +-2147483648) {
      i49 = -2147483648;
      break;
     }
     i49 = ~~d41;
    } else {
     i49 = 2147483647;
    }
   } while (0);
   HEAP32[i15 >> 2] = i48;
   HEAP32[i17 + 4 >> 2] = i47;
   i34 = i15 + 8 | 0;
   HEAP32[i34 >> 2] = i49;
   HEAP32[i17 + 12 >> 2] = i46;
   if (!((i32 | 0) == 3 | (i32 | 0) == 0)) {
    HEAP32[i16 >> 2] = i47;
    HEAP32[i16 + 4 >> 2] = i48;
    HEAP32[i34 >> 2] = i46;
    HEAP32[i34 + 4 >> 2] = i49;
   }
   __ZN7WebCore11RenderBlock19clearLayoutOverflowEv(i19 | 0);
   __ZN7WebCore9RenderBox17addLayoutOverflowERKNS_10LayoutRectE(i28, i17);
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore9FrameView14adjustViewSizeEv(i1);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore9FrameView23repaintContentRectangleERKNS_7IntRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, i20 = 0, d21 = +0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN7WebCore9FrameView21addTrackedRepaintRectERKNS_7IntRectE(i1, i2);
 i14 = i1 + 436 | 0;
 do {
  if ((HEAP32[i14 >> 2] | 0) == 0) {
   i15 = i1 + 512 | 0;
   if (+HEAPF64[i15 >> 3] != +0) {
    d16 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
    d17 = +HEAPF64[i15 >> 3] - (d16 - +HEAPF64[i1 + 520 >> 3]);
    d16 = d17 > +0 ? d17 : +0;
    if ((HEAP32[i14 >> 2] | 0) == 0) {
     d18 = d16;
    } else {
     d19 = d16;
     i20 = 5;
     break;
    }
   } else {
    d18 = +0;
   }
   if (!(d18 == +0 & +HEAPF64[i1 + 464 >> 3] == +0 | i3)) {
    d21 = d18;
    break;
   }
   if (i3) {
    i20 = 39;
    break;
   }
   if (!(__ZNK7WebCore10ScrollView11isOffscreenEv(i1 | 0) | 0)) {
    i20 = 39;
    break;
   }
   if ((HEAP8[i1 + 544 | 0] & 1) != 0) {
    i20 = 39;
    break;
   }
   STACKTOP = i4;
   return;
  } else {
   d19 = +0;
   i20 = 5;
  }
 } while (0);
 if ((i20 | 0) == 5) {
  if (i3) {
   i20 = 39;
  } else {
   d21 = d19;
  }
 }
 if ((i20 | 0) == 39) {
  i15 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 492 >> 2] | 0;
  if ((i15 | 0) == 0) {
   __ZN7WebCore10ScrollView23repaintContentRectangleERKNS_7IntRectEb(i1 | 0, i2, i3);
   STACKTOP = i4;
   return;
  } else {
   __ZN7WebCore17TiledBackingStore10invalidateERKNS_7IntRectE(i15, i2);
   STACKTOP = i4;
   return;
  }
 }
 i15 = i5;
 i3 = i2;
 HEAP32[i15 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i15 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i15 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 i3 = i1 | 0;
 do {
  if ((HEAP8[i1 + 171 | 0] & 1) != 0) {
   if ((HEAP8[i1 + 170 | 0] & 1) != 0) {
    break;
   }
   __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i8, i3, 0);
   __ZN7WebCore7IntRect9intersectERKS0_(i7, i8);
  }
 } while (0);
 i8 = i5 + 8 | 0;
 if ((HEAP32[i8 >> 2] | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 12 >> 2] | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 + 440 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 25) {
  _memset(i9 | 0, 0, 16) | 0;
  i3 = i1 + 444 | 0;
  i15 = i1 + 452 | 0;
  i2 = i3 | 0;
  i22 = 0;
  while (1) {
   if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i22 >>> 0) {
    i20 = 15;
    break;
   }
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i12, (HEAP32[i2 >> 2] | 0) + (i22 << 4) | 0);
   __ZN7WebCore7IntRect5uniteERKS0_(i11, i12);
   i22 = i22 + 1 | 0;
   if (i22 >>> 0 >= 25 >>> 0) {
    break;
   }
  }
  if ((i20 | 0) == 15) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i20 = i1 + 448 | 0;
  i22 = HEAP32[i20 >> 2] | 0;
  do {
   if ((i22 | 0) == 0) {
    i23 = 0;
   } else {
    if ((HEAP32[i15 >> 2] | 0) != 0) {
     HEAP32[i15 >> 2] = 0;
    }
    i12 = HEAP32[i2 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i23 = i22;
     break;
    }
    HEAP32[i2 >> 2] = 0;
    HEAP32[i20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i12);
    i23 = HEAP32[i20 >> 2] | 0;
   }
  } while (0);
  i20 = HEAP32[i15 >> 2] | 0;
  if ((i20 | 0) == (i23 | 0)) {
   __ZN3WTF6VectorIN7WebCore10LayoutRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i23 + 1 | 0);
   i23 = HEAP32[i2 >> 2] | 0;
   i22 = HEAP32[i15 >> 2] | 0;
   i12 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i23 + (i22 << 4) >> 2] = HEAP32[i10 >> 2];
   HEAP32[i23 + (i22 << 4) + 4 >> 2] = i12;
   i12 = i9 + 8 | 0;
   i11 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i23 + (i22 << 4) + 8 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i23 + (i22 << 4) + 12 >> 2] = i11;
  } else {
   i11 = HEAP32[i2 >> 2] | 0;
   i2 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i11 + (i20 << 4) >> 2] = HEAP32[i10 >> 2];
   HEAP32[i11 + (i20 << 4) + 4 >> 2] = i2;
   i2 = i9 + 8 | 0;
   i9 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i11 + (i20 << 4) + 8 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i11 + (i20 << 4) + 12 >> 2] = i9;
  }
  i9 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
  HEAP32[i15 >> 2] = i9;
  i24 = HEAP32[i7 >> 2] | 0;
  i25 = i9;
  i26 = i3;
 } else {
  i24 = i5;
  i25 = HEAP32[i1 + 452 >> 2] | 0;
  i26 = i1 + 444 | 0;
 }
 i5 = i1 + 452 | 0;
 do {
  if (i24 >>> 0 < 25 >>> 0) {
   if ((i25 | 0) == (HEAP32[i1 + 448 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore10LayoutRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i26, i25 + 1 | 0);
    i3 = HEAP32[i26 >> 2] | 0;
    i9 = HEAP32[i5 >> 2] | 0;
    i15 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i3 + (i9 << 4) >> 2] = HEAP32[i6 >> 2];
    HEAP32[i3 + (i9 << 4) + 4 >> 2] = i15;
    i15 = HEAP32[i8 + 4 >> 2] | 0;
    HEAP32[i3 + (i9 << 4) + 8 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i3 + (i9 << 4) + 12 >> 2] = i15;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    break;
   } else {
    i15 = HEAP32[i26 >> 2] | 0;
    i9 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i15 + (i25 << 4) >> 2] = HEAP32[i6 >> 2];
    HEAP32[i15 + (i25 << 4) + 4 >> 2] = i9;
    i9 = HEAP32[i8 + 4 >> 2] | 0;
    HEAP32[i15 + (i25 << 4) + 8 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i15 + (i25 << 4) + 12 >> 2] = i9;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
    break;
   }
  } else {
   if ((i25 | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else {
    i9 = HEAP32[i26 >> 2] | 0;
    i15 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i13 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i13 + 4 >> 2] = i15;
    i15 = HEAP32[i8 + 4 >> 2] | 0;
    HEAP32[i13 + 8 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i13 + 12 >> 2] = i15;
    __ZN7WebCore10LayoutRect5uniteERKS0_(i9, i13);
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 if ((HEAP32[i14 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if (+HEAPF64[i1 + 464 >> 3] != +0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 456 | 0, d21, +0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9FrameView26setFixedVisibleContentRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i2 + 8 | 0;
 i10 = i1 | 0;
 i11 = i1 + 100 | 0;
 i12 = i1 + 108 | 0;
 L1 : do {
  if ((HEAP32[i9 >> 2] | 0) != (HEAP32[i12 >> 2] | 0) | (HEAP32[i9 + 4 >> 2] | 0) != (HEAP32[i12 + 4 >> 2] | 0)) {
   i13 = HEAP32[i1 + 640 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i14 = 1;
    break;
   }
   if ((HEAP32[i13 + 12 >> 2] | 0) <= 0) {
    i14 = 1;
    break;
   }
   i15 = HEAP32[i13 >> 2] | 0;
   i16 = HEAP32[i13 + 4 >> 2] | 0;
   i13 = i15 + (i16 << 2) | 0;
   L5 : do {
    if ((i16 | 0) == 0) {
     i17 = i15;
    } else {
     i18 = i15;
     while (1) {
      i19 = HEAP32[i18 >> 2] | 0;
      if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
       i17 = i18;
       break L5;
      }
      i19 = i18 + 4 | 0;
      if ((i19 | 0) == (i13 | 0)) {
       i14 = 1;
       break L1;
      } else {
       i18 = i19;
      }
     }
    }
   } while (0);
   if ((i17 | 0) == (i13 | 0)) {
    i14 = 1;
    break;
   }
   i15 = i17;
   i16 = HEAP32[i17 >> 2] | 0;
   while (1) {
    i18 = i16 | 0;
    i19 = i16 + 20 | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i20 & 1 | 0) == 0) {
      HEAP32[i19 >> 2] = i20 | 1;
      __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i18, 1, 0);
      if ((HEAP32[i19 >> 2] & 32768 | 0) == 0) {
       break;
      }
      __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i18);
     }
    } while (0);
    i18 = i15 + 4 | 0;
    if ((i18 | 0) == (i13 | 0)) {
     i14 = 1;
     break L1;
    } else {
     i21 = i18;
    }
    while (1) {
     i22 = HEAP32[i21 >> 2] | 0;
     i18 = i22;
     if (!((i18 | 0) == (-1 | 0) | (i18 | 0) == 0)) {
      break;
     }
     i18 = i21 + 4 | 0;
     if ((i18 | 0) == (i13 | 0)) {
      i14 = 1;
      break L1;
     } else {
      i21 = i18;
     }
    }
    if ((i21 | 0) == (i13 | 0)) {
     i14 = 1;
     break;
    } else {
     i15 = i21;
     i16 = i22;
    }
   }
  } else {
   i14 = 0;
  }
 } while (0);
 i22 = i4 | 0;
 i21 = i4;
 i4 = i1;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 63](i21, i10, 0);
 i17 = HEAP32[i22 >> 2] | 0;
 i12 = HEAP32[i22 + 4 >> 2] | 0;
 i9 = i2;
 HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i11 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i11 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 63](i21, i10, 0);
 do {
  if ((i17 | 0) != (HEAP32[i22 >> 2] | 0) | (i12 | 0) != (HEAP32[i22 + 4 >> 2] | 0)) {
   do {
    if ((HEAP32[i1 + 304 >> 2] | 0) != 4) {
     if ((HEAP32[i1 + 316 >> 2] | 0) >>> 0 >= 2 >>> 0) {
      break;
     }
     i9 = HEAP32[i1 + 640 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     if ((HEAP32[i9 + 12 >> 2] | 0) <= 0) {
      break;
     }
     i9 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     __ZN7WebCore9FrameView21updateWidgetPositionsEv(i1);
     __ZN7WebCore11RenderLayer39updateLayerPositionsAfterDocumentScrollEv(HEAP32[i9 + 40 >> 2] | 0);
    }
   } while (0);
   i9 = i1 + 216 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   do {
    if ((HEAP8[(HEAP32[(HEAP32[i11 + 32 >> 2] | 0) + 48 >> 2] | 0) + 180 | 0] & 16) != 0) {
     if ((HEAP32[i1 + 316 >> 2] | 0) >>> 0 >= 2 >>> 0) {
      break;
     }
     i2 = HEAP32[i1 + 640 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     if ((HEAP32[i2 + 12 >> 2] | 0) <= 0) {
      break;
     }
     i2 = __ZNK7WebCore5Frame15contentRendererEv(i11) | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(__ZN7WebCore10RenderView10compositorEv(i2) | 0, 3, 0);
    }
   } while (0);
   i11 = __ZNK7WebCore14ScrollableArea14scrollAnimatorEv(i1 + 36 | 0) | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 63](i21, i10, 0);
   i2 = HEAP32[i22 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i22 >> 2];
   HEAP32[i6 + 4 >> 2] = i2;
   __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i5, i7);
   __ZN7WebCore14ScrollAnimator18setCurrentPositionERKNS_10FloatPointE(i11, i5);
   __ZN7WebCore12EventHandler15sendScrollEventEv(HEAP32[(HEAP32[i9 >> 2] | 0) + 472 >> 2] | 0);
   __ZN7WebCore12EventHandler30dispatchFakeMouseMoveEventSoonEv(HEAP32[(HEAP32[i9 >> 2] | 0) + 472 >> 2] | 0);
   i11 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i9 >> 2] | 0) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore10RenderView15usesCompositingEv(i11) | 0)) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor18frameViewDidScrollEv(__ZN7WebCore10RenderView10compositorEv(i11) | 0);
  }
 } while (0);
 if (!i14) {
  i23 = i1 + 216 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  i25 = i24 + 84 | 0;
  i26 = HEAP32[i25 >> 2] | 0;
  i27 = i26;
  i28 = HEAP32[i27 >> 2] | 0;
  i29 = i28 + 472 | 0;
  i30 = HEAP32[i29 >> 2] | 0;
  FUNCTION_TABLE_vi[i30 & 63](i26);
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 63](i21, i10, 0);
 i21 = HEAP32[i22 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i22 >> 2];
 HEAP32[i8 + 4 >> 2] = i21;
 __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i10, i8);
 i23 = i1 + 216 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 i25 = i24 + 84 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 i27 = i26;
 i28 = HEAP32[i27 >> 2] | 0;
 i29 = i28 + 472 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 FUNCTION_TABLE_vi[i30 & 63](i26);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView18updateScrollCornerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 56 | 0;
 i9 = i2 + 72 | 0;
 i10 = i2 + 80 | 0;
 i11 = i2 + 96 | 0;
 i12 = i1 | 0;
 __ZNK7WebCore10ScrollView16scrollCornerRectEv(i4, i12);
 L1 : do {
  if ((HEAP32[i4 + 8 >> 2] | 0) < 1) {
   i13 = 24;
  } else {
   if ((HEAP32[i4 + 12 >> 2] | 0) < 1) {
    i13 = 24;
    break;
   }
   i14 = i1 + 216 | 0;
   i15 = HEAP32[(HEAP32[i14 >> 2] | 0) + 456 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i16 = 0;
     i13 = 22;
    } else {
     i17 = __ZNK7WebCore8Document4bodyEv(i15) | 0;
     do {
      if ((i17 | 0) == 0) {
       i18 = 0;
       i13 = 13;
      } else {
       i19 = (HEAP32[i17 + 12 >> 2] & 2048 | 0) == 0;
       i20 = i17 + 32 | 0;
       if (i19) {
        i21 = i20 | 0;
       } else {
        i21 = HEAP32[i20 >> 2] | 0;
       }
       if ((HEAP32[i21 >> 2] | 0) == 0) {
        i18 = 0;
        i13 = 13;
        break;
       }
       if (i19) {
        i22 = i20 | 0;
       } else {
        i22 = HEAP32[i20 >> 2] | 0;
       }
       i20 = HEAP32[i22 >> 2] | 0;
       i19 = i20;
       HEAP32[i6 >> 2] = 12;
       HEAP32[i6 + 4 >> 2] = 0;
       HEAP32[i6 + 8 >> 2] = 0;
       __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i5, i20, i6, HEAP32[i20 + 36 >> 2] | 0, 0);
       i20 = i5 | 0;
       i23 = HEAP32[i20 >> 2] | 0;
       HEAP32[i20 >> 2] = 0;
       if ((i23 | 0) == 0) {
        i18 = i19;
        i13 = 13;
       } else {
        i24 = i19;
        i25 = i23;
       }
      }
     } while (0);
     if ((i13 | 0) == 13) {
      i17 = HEAP32[i15 + 692 >> 2] | 0;
      if ((i17 | 0) == 0) {
       i16 = i18;
       i13 = 22;
       break;
      }
      i23 = (HEAP32[i17 + 12 >> 2] & 2048 | 0) == 0;
      i19 = i17 + 32 | 0;
      if (i23) {
       i26 = i19 | 0;
      } else {
       i26 = HEAP32[i19 >> 2] | 0;
      }
      if ((HEAP32[i26 >> 2] | 0) == 0) {
       i16 = i18;
       i13 = 22;
       break;
      }
      if (i23) {
       i27 = i19 | 0;
      } else {
       i27 = HEAP32[i19 >> 2] | 0;
      }
      i19 = HEAP32[i27 >> 2] | 0;
      i23 = i19;
      HEAP32[i8 >> 2] = 12;
      HEAP32[i8 + 4 >> 2] = 0;
      HEAP32[i8 + 8 >> 2] = 0;
      __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i7, i19, i8, HEAP32[i19 + 36 >> 2] | 0, 0);
      i19 = i7 | 0;
      i17 = HEAP32[i19 >> 2] | 0;
      HEAP32[i19 >> 2] = 0;
      if ((i17 | 0) == 0) {
       i16 = i23;
       i13 = 22;
       break;
      } else {
       i24 = i23;
       i25 = i17;
      }
     }
     i28 = i25;
     i29 = i24;
     i30 = i1 + 600 | 0;
    }
   } while (0);
   do {
    if ((i13 | 0) == 22) {
     i15 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i14 >> 2] | 0) | 0;
     if ((i15 | 0) == 0) {
      i31 = i1 + 600 | 0;
      break L1;
     } else {
      HEAP32[i10 >> 2] = 12;
      HEAP32[i10 + 4 >> 2] = 0;
      HEAP32[i10 + 8 >> 2] = 0;
      __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i9, i15 | 0, i10, HEAP32[i15 + 36 >> 2] | 0, 0);
      i15 = i9 | 0;
      i17 = HEAP32[i15 >> 2] | 0;
      HEAP32[i15 >> 2] = 0;
      i15 = i1 + 600 | 0;
      if ((i17 | 0) == 0) {
       i31 = i15;
       break L1;
      } else {
       i28 = i17;
       i29 = i16;
       i30 = i15;
       break;
      }
     }
    }
   } while (0);
   i14 = i30 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i17 = HEAP32[(HEAP32[(HEAP32[i29 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
    i23 = __ZN3WTF10fastMallocEj(104) | 0;
    HEAP32[i3 >> 2] = i28;
    __ZN7WebCore19RenderScrollbarPartC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEPNS_15RenderScrollbarENS_13ScrollbarPartE(i23, i17, i3, 0, 0);
    i17 = HEAP32[i14 >> 2] | 0;
    HEAP32[i14 >> 2] = i23;
    if ((i17 | 0) == 0) {
     i32 = i23;
    } else {
     __ZN7WebCore12RenderObject7destroyEv(i17 | 0);
     i32 = HEAP32[i14 >> 2] | 0;
    }
    __ZN7WebCore13RenderElement15initializeStyleEv(i32 | 0);
   } else {
    HEAP32[i11 >> 2] = i28;
    __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i15 | 0, i11);
   }
   __ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE(i1 + 36 | 0, i4);
   __ZN7WebCore10ScrollView18updateScrollCornerEv(i12);
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i13 | 0) == 24) {
  i31 = i1 + 600 | 0;
 }
 i1 = i31 | 0;
 i31 = HEAP32[i1 >> 2] | 0;
 if ((i31 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore10ScrollView18updateScrollCornerEv(i12);
  STACKTOP = i2;
  return;
 } else {
  __ZN7WebCore12RenderObject7destroyEv(i31 | 0);
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore10ScrollView18updateScrollCornerEv(i12);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore9FrameView23sendResizeEventIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = i1 + 216 | 0;
 i11 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i10 >> 2] | 0) | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if (__ZNK7WebCore10RenderView8printingEv(i11) | 0) {
  STACKTOP = i2;
  return;
 }
 i12 = HEAP32[(HEAP32[i10 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i13 = HEAP32[(HEAP32[i12 + 20 >> 2] | 0) + 8 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 412 >> 2] & 127](i13) | 0)) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i12 = i1 | 0;
 do {
  if (__ZNK7WebCore10ScrollView14useFixedLayoutEv(i12) | 0) {
   __ZNK7WebCore10ScrollView15fixedLayoutSizeEv(i3, i12);
   if ((HEAP32[i3 >> 2] | 0) < 1) {
    i14 = 10;
    break;
   }
   if ((HEAP32[i3 + 4 >> 2] | 0) < 1) {
    i14 = 10;
    break;
   }
   if ((HEAP8[i1 + 172 | 0] & 1) == 0) {
    i14 = 10;
    break;
   }
   __ZNK7WebCore10ScrollView15fixedLayoutSizeEv(i5, i12);
   i15 = i4;
  } else {
   i14 = 10;
  }
 } while (0);
 if ((i14 | 0) == 10) {
  __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i6, i12, 1);
  i15 = i6 + 8 | 0;
 }
 i6 = HEAP32[i15 >> 2] | 0;
 i12 = HEAP32[i15 + 4 >> 2] | 0;
 i15 = i12;
 d16 = +HEAPF32[(HEAP32[(HEAP32[i11 + 36 >> 2] | 0) + 8 >> 2] | 0) + 40 >> 2];
 i11 = i1 + 388 | 0;
 if ((HEAP8[i1 + 377 | 0] & 1) != 0) {
  i4 = i11;
  HEAP32[i4 >> 2] = i6 & -1;
  HEAP32[i4 + 4 >> 2] = i15 | i12 & 0;
  HEAPF32[i1 + 396 >> 2] = d16;
  STACKTOP = i2;
  return;
 }
 do {
  if ((i6 | 0) == (HEAP32[i11 >> 2] | 0)) {
   if ((i15 | 0) != (HEAP32[i1 + 392 >> 2] | 0)) {
    i14 = 15;
    break;
   }
   i4 = i1 + 396 | 0;
   i5 = d16 != +HEAPF32[i4 >> 2];
   i3 = i11;
   HEAP32[i3 >> 2] = i6 & -1;
   HEAP32[i3 + 4 >> 2] = i15 | i12 & 0;
   HEAPF32[i4 >> 2] = d16;
   if (i5) {
    break;
   }
   STACKTOP = i2;
   return;
  } else {
   i14 = 15;
  }
 } while (0);
 if ((i14 | 0) == 15) {
  i14 = i11;
  HEAP32[i14 >> 2] = i6 & -1;
  HEAP32[i14 + 4 >> 2] = i15 | i12 & 0;
  HEAPF32[i1 + 396 >> 2] = d16;
 }
 i12 = HEAP32[i10 >> 2] | 0;
 i15 = (HEAP32[i12 + 28 >> 2] | 0) == (i12 | 0);
 if (i15) {
  i17 = (HEAP32[i1 + 304 >> 2] | 0) != 3;
 } else {
  i17 = 0;
 }
 i1 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 312 | 0;
 i12 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i12, i1, 0, 0);
 i1 = (HEAP32[i10 >> 2] | 0) + 456 | 0;
 i14 = HEAP32[i1 >> 2] | 0;
 do {
  if (i17) {
   i6 = i7 | 0;
   HEAP32[i6 >> 2] = i12;
   i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + 336 >> 2] | 0;
   i5 = i11 | 0;
   i4 = i8 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i11 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 56 >> 2] & 63](i5);
   }
   __ZN7WebCore8Document19dispatchWindowEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i14, i7, i8);
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 63](i5);
   }
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 8 | 0;
   i5 = i6 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i5 >> 2] = i4;
    break;
   }
   i4 = i6 - 8 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  } else {
   i4 = i9 | 0;
   HEAP32[i4 >> 2] = i12;
   __ZN7WebCore8Document18enqueueWindowEventEN3WTF10PassRefPtrINS_5EventEEE(i14, i9);
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i4 = i6 + 8 | 0;
   i6 = i4 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i6 >> 2] = i5;
    break;
   }
   i5 = i4 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i9 = HEAP32[i10 >> 2] | 0;
 i10 = HEAP32[i9 + 32 >> 2] | 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | i15 ^ 1 | (i10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i15 = HEAP32[(HEAP32[i10 + 40 >> 2] | 0) + 64 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 24 >> 2] & 127](i15, i9);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9FrameView22scrollContentsSlowPathERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = i1 + 216 | 0;
 i14 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i13 >> 2] | 0) | 0;
 do {
  if ((i14 | 0) != 0) {
   if (!(__ZNK7WebCore12RenderObject12isCompositedEv(i14 | 0) | 0)) {
    break;
   }
   i15 = HEAP32[(HEAP32[(HEAP32[i14 + 40 >> 2] | 0) + 208 >> 2] | 0) + 16 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   if ((HEAP8[i15 + 340 | 0] & 32) == 0) {
    break;
   }
   __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i8, i1 | 0, 0);
   __ZN7WebCore7IntRect5scaleEf(i8, +1 / +__ZNK7WebCore5Frame16frameScaleFactorEv(HEAP32[i13 >> 2] | 0));
   i15 = HEAP32[(__ZNK7WebCore5Frame15contentRendererEv(HEAP32[i13 >> 2] | 0) | 0) + 40 >> 2] | 0;
   i16 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i9 + 4 >> 2] = i16;
   i16 = i6 + 8 | 0;
   i17 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i9 + 8 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i9 + 12 >> 2] = i17;
   __ZN7WebCore11RenderLayer28setBackingNeedsRepaintInRectERKNS_10LayoutRectE(i15, i9);
  }
 } while (0);
 i9 = HEAP32[i1 + 220 >> 2] | 0;
 L7 : do {
  if ((i9 | 0) != 0) {
   i6 = HEAP32[i9 >> 2] | 0;
   i7 = HEAP32[i9 + 4 >> 2] | 0;
   i8 = i6 + (i7 << 2) | 0;
   if ((HEAP32[i9 + 12 >> 2] | 0) == 0) {
    break;
   }
   L10 : do {
    if ((i7 | 0) == 0) {
     i18 = i6;
    } else {
     i14 = i6;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i18 = i14;
       break L10;
      }
      i14 = i14 + 4 | 0;
      if ((i14 | 0) == (i8 | 0)) {
       break L7;
      }
     }
    }
   } while (0);
   if ((i18 | 0) == (i8 | 0)) {
    break;
   }
   i6 = i18;
   i7 = HEAP32[i18 >> 2] | 0;
   while (1) {
    __ZNK7WebCore12RenderObject7repaintEb(i7 | 0, 0);
    i14 = i6 + 4 | 0;
    if ((i14 | 0) == (i8 | 0)) {
     break L7;
    } else {
     i19 = i14;
    }
    while (1) {
     i20 = HEAP32[i19 >> 2] | 0;
     i14 = i20;
     if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
      break;
     }
     i14 = i19 + 4 | 0;
     if ((i14 | 0) == (i8 | 0)) {
      break L7;
     } else {
      i19 = i14;
     }
    }
    if ((i19 | 0) == (i8 | 0)) {
     break;
    } else {
     i6 = i19;
     i7 = i20;
    }
   }
  }
 } while (0);
 i20 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i13 >> 2] | 0) | 0;
 L23 : do {
  if ((i20 | 0) != 0) {
   i13 = i1;
   while (1) {
    i19 = i13 + 216 | 0;
    i18 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i19 >> 2] | 0) | 0;
    if ((i18 | 0) != 0) {
     if ((__ZNK7WebCore12RenderObject19containerForRepaintEv(i18 | 0) | 0) != 0) {
      break;
     }
    }
    if ((HEAP32[i13 + 8 >> 2] | 0) == 0) {
     break L23;
    }
    i18 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i19 >> 2] | 0) + 40 | 0) | 0;
    if ((i18 | 0) == 0) {
     break L23;
    }
    i13 = HEAP32[i18 + 452 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L23;
    }
   }
   i13 = i20 | 0;
   i18 = i20;
   i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 744 >> 2] & 127](i13) | 0;
   i9 = i20;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 712 >> 2] & 127](i11, i13);
   i7 = (HEAP32[i11 >> 2] | 0) + i19 | 0;
   i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 736 >> 2] & 127](i13) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 704 >> 2] & 127](i12, i13);
   i13 = (HEAP32[i12 >> 2] | 0) + i19 | 0;
   i19 = i1 | 0;
   i9 = i1;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 164 >> 2] & 63](i4, i19, 0);
   i18 = HEAP32[i4 + 8 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 164 >> 2] & 63](i5, i19, 0);
   i19 = HEAP32[i5 + 12 >> 2] | 0;
   HEAP32[i10 >> 2] = i7;
   HEAP32[i10 + 4 >> 2] = i13;
   HEAP32[i10 + 8 >> 2] = i18;
   HEAP32[i10 + 12 >> 2] = i19;
   __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i20 | 0, i10, 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore10ScrollView22scrollContentsSlowPathERKNS_7IntRectE(i1 | 0, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView15createScrollbarENS_20ScrollbarOrientationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 + 216 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((HEAP8[(HEAP32[i9 + 36 >> 2] | 0) + 181 | 0] & 2) == 0) {
   if ((HEAP32[i9 + 28 >> 2] | 0) != (i9 | 0)) {
    break;
   }
   __ZN7WebCore10ScrollView15createScrollbarENS_20ScrollbarOrientationE(i1, i2 | 0, i3);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i10 = HEAP32[i9 + 456 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = __ZNK7WebCore8Document4bodyEv(i10) | 0;
   i11 = i9 | 0;
   do {
    if ((i9 | 0) != 0) {
     i12 = (HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0;
     i13 = i9 + 32 | 0;
     if (i12) {
      i14 = i13 | 0;
     } else {
      i14 = HEAP32[i13 >> 2] | 0;
     }
     if ((HEAP32[i14 >> 2] | 0) == 0) {
      break;
     }
     if (i12) {
      i15 = i13 | 0;
     } else {
      i15 = HEAP32[i13 >> 2] | 0;
     }
     if ((HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 36 >> 2] | 0) + 52 >> 2] & 262144 | 0) == 0) {
      break;
     }
     __ZN7WebCore15RenderScrollbar21createCustomScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE(i5, i2 + 36 | 0, i3, i11, 0);
     i13 = i5 | 0;
     i12 = HEAP32[i13 >> 2] | 0;
     HEAP32[i1 >> 2] = i12;
     if ((i12 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i16 = i12 + 4 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     i16 = HEAP32[i13 >> 2] | 0;
     if ((i16 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     i13 = i16 + 4 | 0;
     i16 = i13 | 0;
     i12 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i16 >> 2] = i12;
      STACKTOP = i4;
      return;
     }
     i12 = i13 - 4 | 0;
     if ((i12 | 0) == 0) {
      STACKTOP = i4;
      return;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
     STACKTOP = i4;
     return;
    }
   } while (0);
   i11 = HEAP32[i10 + 692 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i9 = (HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0;
   i12 = i11 + 32 | 0;
   if (i9) {
    i17 = i12 | 0;
   } else {
    i17 = HEAP32[i12 >> 2] | 0;
   }
   if ((HEAP32[i17 >> 2] | 0) == 0) {
    break;
   }
   if (i9) {
    i18 = i12 | 0;
   } else {
    i18 = HEAP32[i12 >> 2] | 0;
   }
   if ((HEAP32[(HEAP32[(HEAP32[i18 >> 2] | 0) + 36 >> 2] | 0) + 52 >> 2] & 262144 | 0) == 0) {
    break;
   }
   __ZN7WebCore15RenderScrollbar21createCustomScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE(i6, i2 + 36 | 0, i3, i11, 0);
   i11 = i6 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i1 >> 2] = i12;
   if ((i12 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i9 = i12 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = HEAP32[i11 >> 2] | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i11 = i9 + 4 | 0;
   i9 = i11 | 0;
   i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i9 >> 2] = i12;
    STACKTOP = i4;
    return;
   }
   i12 = i11 - 4 | 0;
   if ((i12 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i6 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i8 >> 2] | 0) | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 52 >> 2] & 262144 | 0) == 0) {
    break;
   }
   __ZN7WebCore15RenderScrollbar21createCustomScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE(i7, i2 + 36 | 0, i3, 0, HEAP32[i8 >> 2] | 0);
   i18 = i7 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   HEAP32[i1 >> 2] = i17;
   if ((i17 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i10 = i17 + 4 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = HEAP32[i18 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   i18 = i10 + 4 | 0;
   i10 = i18 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i10 >> 2] = i17;
    STACKTOP = i4;
    return;
   }
   i17 = i18 - 4 | 0;
   if ((i17 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore10ScrollView15createScrollbarENS_20ScrollbarOrientationE(i1, i2 | 0, i3);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore9FrameView15useSlowRepaintsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if (i2) {
  i2 = i1;
  L2 : while (1) {
   i3 = HEAP32[i2 + 220 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i4 = 4;
   } else {
    if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
     i4 = 4;
    } else {
     i5 = 1;
    }
   }
   do {
    if ((i4 | 0) == 4) {
     i4 = 0;
     if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
      i5 = 0;
      break;
     }
     i3 = HEAP32[i2 + 640 >> 2] | 0;
     if ((i3 | 0) == 0) {
      i5 = 0;
      break;
     }
     i5 = (HEAP32[i3 + 12 >> 2] | 0) > 0;
    }
   } while (0);
   i3 = i2 + 216 | 0;
   i6 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i3 >> 2] | 0) | 0;
   do {
    if ((i6 | 0) == 0) {
     i4 = 12;
    } else {
     if (!(__ZNK7WebCore12RenderObject12isCompositedEv(i6 | 0) | 0)) {
      i4 = 12;
      break;
     }
     i7 = HEAP32[(HEAP32[(HEAP32[i6 + 40 >> 2] | 0) + 208 >> 2] | 0) + 16 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i4 = 12;
      break;
     }
     if ((HEAP8[i7 + 340 | 0] & 32) == 0) {
      i4 = 12;
      break;
     }
     i7 = (HEAP32[i2 + 12 >> 2] | 0) == 0;
     if (i7 | i5) {
      i8 = i5 | i7 ^ 1;
      i4 = 35;
      break L2;
     }
    }
   } while (0);
   if ((i4 | 0) == 12) {
    i4 = 0;
    if (i5) {
     i8 = 1;
     i4 = 36;
     break;
    }
   }
   if (((HEAP8[i2 + 226 | 0] | HEAP8[i2 + 227 | 0]) & 1) != 0) {
    i8 = 1;
    i4 = 37;
    break;
   }
   if ((HEAP8[i2 + 228 | 0] & 1) == 0) {
    i8 = 1;
    i4 = 38;
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
    i8 = 0;
    i4 = 39;
    break;
   }
   i6 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i3 >> 2] | 0) + 40 | 0) | 0;
   if ((i6 | 0) == 0) {
    i8 = 0;
    i4 = 40;
    break;
   }
   i7 = HEAP32[i6 + 452 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 0;
    i4 = 41;
    break;
   } else {
    i2 = i7;
   }
  }
  if ((i4 | 0) == 35) {
   return i8 | 0;
  } else if ((i4 | 0) == 36) {
   return i8 | 0;
  } else if ((i4 | 0) == 37) {
   return i8 | 0;
  } else if ((i4 | 0) == 38) {
   return i8 | 0;
  } else if ((i4 | 0) == 39) {
   return i8 | 0;
  } else if ((i4 | 0) == 40) {
   return i8 | 0;
  } else if ((i4 | 0) == 41) {
   return i8 | 0;
  }
 } else {
  i2 = i1;
  L31 : while (1) {
   i1 = HEAP32[i2 + 220 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i4 = 20;
   } else {
    if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
     i4 = 20;
    } else {
     i9 = 1;
    }
   }
   do {
    if ((i4 | 0) == 20) {
     i4 = 0;
     if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
      i9 = 0;
      break;
     }
     i1 = HEAP32[i2 + 640 >> 2] | 0;
     if ((i1 | 0) == 0) {
      i9 = 0;
      break;
     }
     i9 = (HEAP32[i1 + 12 >> 2] | 0) > 0;
    }
   } while (0);
   i3 = i2 + 216 | 0;
   i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i3 >> 2] | 0) | 0;
   do {
    if ((i1 | 0) == 0) {
     i4 = 28;
    } else {
     if (!(__ZNK7WebCore12RenderObject12isCompositedEv(i1 | 0) | 0)) {
      i4 = 28;
      break;
     }
     i5 = HEAP32[(HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0) + 16 >> 2] | 0;
     if ((i5 | 0) == 0) {
      i4 = 28;
      break;
     }
     if ((HEAP8[i5 + 340 | 0] & 32) == 0) {
      i4 = 28;
      break;
     }
     i5 = (HEAP32[i2 + 12 >> 2] | 0) == 0;
     if (i5 | i9) {
      i8 = i9 | i5 ^ 1;
      i4 = 42;
      break L31;
     }
    }
   } while (0);
   if ((i4 | 0) == 28) {
    i4 = 0;
    if (i9) {
     i8 = 1;
     i4 = 43;
     break;
    }
   }
   if ((HEAP8[i2 + 226 | 0] & 1) != 0) {
    i8 = 1;
    i4 = 44;
    break;
   }
   if ((HEAP8[i2 + 228 | 0] & 1) == 0) {
    i8 = 1;
    i4 = 45;
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
    i8 = 0;
    i4 = 46;
    break;
   }
   i1 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i3 >> 2] | 0) + 40 | 0) | 0;
   if ((i1 | 0) == 0) {
    i8 = 0;
    i4 = 47;
    break;
   }
   i5 = HEAP32[i1 + 452 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i8 = 0;
    i4 = 48;
    break;
   } else {
    i2 = i5;
   }
  }
  if ((i4 | 0) == 42) {
   return i8 | 0;
  } else if ((i4 | 0) == 43) {
   return i8 | 0;
  } else if ((i4 | 0) == 44) {
   return i8 | 0;
  } else if ((i4 | 0) == 45) {
   return i8 | 0;
  } else if ((i4 | 0) == 46) {
   return i8 | 0;
  } else if ((i4 | 0) == 47) {
   return i8 | 0;
  } else if ((i4 | 0) == 48) {
   return i8 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore9FrameView25scheduleRelayoutOfSubtreeERNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 216 | 0;
 i4 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i3 >> 2] | 0) | 0;
 if ((HEAP32[i4 + 20 >> 2] & 31 | 0) != 0) {
  __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2 | 0, 0, 0);
  return;
 }
 do {
  if (+HEAPF64[i1 + 248 >> 3] == +0) {
   if ((HEAP8[i1 + 308 | 0] & 1) == 0) {
    break;
   }
   i5 = __ZN7WebCore8Document18minimumLayoutDelayEv(HEAP32[(HEAP32[(HEAP32[i4 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   HEAP32[i1 + 300 >> 2] = i2;
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i6 | 0) == 0)) {
     i7 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i6 + 32 >> 2] | 0) | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation23didInvalidateLayoutImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i7, i6);
    }
   } while (0);
   HEAP8[i1 + 296 | 0] = (i5 | 0) != 0 | 0;
   __ZN7WebCore9TimerBase5startEdd(i1 + 240 | 0, +(i5 | 0) * +.001, +0);
   return;
  }
 } while (0);
 i4 = i1 + 300 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == (i2 | 0)) {
  return;
 }
 if ((i1 | 0) == 0) {
  __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2 | 0, 0, 0);
  i6 = HEAP32[i3 >> 2] | 0;
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i6 | 0) == 0) {
   return;
  }
  i7 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i6 + 32 >> 2] | 0) | 0;
  if ((i7 | 0) == 0) {
   return;
  }
  __ZN7WebCore24InspectorInstrumentation23didInvalidateLayoutImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i7, i6);
  return;
 }
 i6 = i1 | 0;
 i7 = i2 | 0;
 do {
  if ((i2 | 0) == 0) {
   i8 = i1;
   i9 = 19;
  } else {
   i10 = i7;
   while (1) {
    if ((i10 | 0) == (i6 | 0)) {
     break;
    }
    i11 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i10, 0, 0) | 0;
    if ((i11 | 0) == 0) {
     i9 = 18;
     break;
    } else {
     i10 = i11 | 0;
    }
   }
   if ((i9 | 0) == 18) {
    i10 = HEAP32[i4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i12 = 0;
     break;
    } else {
     i8 = i10;
     i9 = 19;
     break;
    }
   }
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i7, 0, HEAP32[i4 >> 2] | 0);
   return;
  }
 } while (0);
 do {
  if ((i9 | 0) == 19) {
   while (1) {
    i9 = 0;
    if ((i8 | 0) == (i2 | 0)) {
     break;
    }
    i6 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i8 | 0, 0, 0) | 0;
    if ((i6 | 0) == 0) {
     i9 = 24;
     break;
    } else {
     i8 = i6;
     i9 = 19;
    }
   }
   if ((i9 | 0) == 24) {
    i12 = HEAP32[i4 >> 2] | 0;
    break;
   }
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(HEAP32[i4 >> 2] | 0, 0, i2);
   HEAP32[i4 >> 2] = i2;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i6 | 0) == 0) {
    return;
   }
   i1 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i6 + 32 >> 2] | 0) | 0;
   if ((i1 | 0) == 0) {
    return;
   }
   __ZN7WebCore24InspectorInstrumentation23didInvalidateLayoutImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i1, i6);
   return;
  }
 } while (0);
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i12 | 0, 0, 0);
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i7, 0, 0);
 i7 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i7 | 0) == 0) {
  return;
 }
 i3 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i7 + 32 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation23didInvalidateLayoutImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i3, i7);
 return;
}
function __ZN7WebCore9FrameView37updateLayoutAndStyleIfNeededRecursiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i1 + 216 | 0;
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0);
 i5 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i4 >> 2] | 0) | 0;
 do {
  if (+HEAPF64[i1 + 248 >> 3] != +0) {
   i6 = 7;
  } else {
   if ((i5 | 0) != 0) {
    if ((HEAP32[i5 + 20 >> 2] & 31 | 0) != 0) {
     i6 = 7;
     break;
    }
   }
   if ((HEAP32[i1 + 300 >> 2] | 0) != 0) {
    i6 = 7;
    break;
   }
   if ((HEAP32[i1 + 564 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP8[i1 + 568 | 0] & 1) != 0) {
    i6 = 7;
   }
  }
 } while (0);
 if ((i6 | 0) == 7) {
  __ZN7WebCore9FrameView6layoutEb(i1, 1);
 }
 i6 = i3 + 12 | 0;
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = i6;
 i4 = i3 + 4 | 0;
 HEAP32[i4 >> 2] = 16;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i3 = i1 + 88 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if (i8 >>> 0 > 16 >>> 0) {
   if (i8 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i9 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
    HEAP32[i4 >> 2] = i9 >>> 2;
    HEAP32[i5 >> 2] = __ZN3WTF10fastMallocEj(i9) | 0;
    i10 = HEAP32[i3 >> 2] | 0;
    break;
   }
  } else {
   i10 = i8;
  }
 } while (0);
 i8 = HEAP32[i1 + 76 >> 2] | 0;
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 i9 = i8 + (i3 << 2) | 0;
 L17 : do {
  if ((i10 | 0) != 0) {
   L19 : do {
    if ((i3 | 0) == 0) {
     i11 = i8;
    } else {
     i12 = i8;
     while (1) {
      i13 = HEAP32[i12 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i11 = i12;
       break L19;
      }
      i12 = i12 + 4 | 0;
      if ((i12 | 0) == (i9 | 0)) {
       break L17;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i9 | 0)) {
    break;
   } else {
    i14 = i11;
   }
   while (1) {
    i12 = i14 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 36 >> 2] & 127](i13) | 0) {
     i13 = HEAP32[i12 >> 2] | 0;
     HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) >> 2] = i13;
     i12 = i13 + 4 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    }
    i12 = i14 + 4 | 0;
    if ((i12 | 0) == (i9 | 0)) {
     break L17;
    } else {
     i15 = i12;
    }
    while (1) {
     i12 = HEAP32[i15 >> 2] | 0;
     if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
      break;
     }
     i12 = i15 + 4 | 0;
     if ((i12 | 0) == (i9 | 0)) {
      break L17;
     } else {
      i15 = i12;
     }
    }
    if ((i15 | 0) == (i9 | 0)) {
     break;
    } else {
     i14 = i15;
    }
   }
  }
 } while (0);
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i16 = 0;
 } else {
  i15 = 0;
  while (1) {
   __ZN7WebCore9FrameView37updateLayoutAndStyleIfNeededRecursiveEv(HEAP32[(HEAP32[i5 >> 2] | 0) + (i15 << 2) >> 2] | 0);
   i14 = i15 + 1 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   if (i14 >>> 0 < i9 >>> 0) {
    i15 = i14;
   } else {
    i16 = i9;
    break;
   }
  }
 }
 if (+HEAPF64[i1 + 464 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i1 + 456 | 0);
  __ZN7WebCore9FrameView18doDeferredRepaintsEv(i1);
  i17 = HEAP32[i7 >> 2] | 0;
 } else {
  i17 = i16;
 }
 if ((i17 | 0) != 0) {
  i16 = HEAP32[i5 >> 2] | 0;
  i1 = i16 + (i17 << 2) | 0;
  i17 = i16;
  while (1) {
   i16 = (HEAP32[i17 >> 2] | 0) + 4 | 0;
   i15 = i16 | 0;
   i9 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   do {
    if ((i9 | 0) == 0) {
     i14 = i16 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
    } else {
     HEAP32[i15 >> 2] = i9;
    }
   } while (0);
   i17 = i17 + 4 | 0;
   if ((i17 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == (i7 | 0) | (i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9FrameView25applyPaginationToViewportEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 216 | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0;
 i6 = HEAP32[i5 + 692 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
 } else {
  i8 = i6 + 32 | 0;
  if ((HEAP32[i6 + 12 >> 2] & 2048 | 0) == 0) {
   i9 = i8 | 0;
  } else {
   i9 = HEAP32[i8 >> 2] | 0;
  }
  i7 = HEAP32[i9 >> 2] | 0;
 }
 i9 = __ZNK7WebCore8Document4bodyEv(i5) | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = i7;
   i11 = 22;
  } else {
   i5 = (HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0;
   i8 = i9 + 32 | 0;
   if (i5) {
    i12 = i8 | 0;
   } else {
    i12 = HEAP32[i8 >> 2] | 0;
   }
   if ((HEAP32[i12 >> 2] | 0) == 0) {
    i10 = i7;
    i11 = 22;
    break;
   }
   i13 = HEAP32[i9 + 44 >> 2] | 0;
   i14 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i13 | 0) != (i14 | 0)) {
    if ((HEAP32[i13 + 12 >> 2] | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
     i10 = i7;
     i11 = 22;
     break;
    }
    if ((HEAP32[i13 + 16 >> 2] | 0) != (HEAP32[i14 + 16 >> 2] | 0)) {
     i10 = i7;
     i11 = 22;
     break;
    }
   }
   if ((HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 48 >> 2] & 7168 | 0) != 0) {
    i15 = i7;
    break;
   }
   i14 = HEAP32[i6 + 44 >> 2] | 0;
   i13 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
   if ((i14 | 0) != (i13 | 0)) {
    if ((HEAP32[i14 + 12 >> 2] | 0) != (HEAP32[i13 + 12 >> 2] | 0)) {
     i10 = i7;
     i11 = 22;
     break;
    }
    if ((HEAP32[i14 + 16 >> 2] | 0) != (HEAP32[i13 + 16 >> 2] | 0)) {
     i10 = i7;
     i11 = 22;
     break;
    }
   }
   if (i5) {
    i16 = i8 | 0;
   } else {
    i16 = HEAP32[i8 >> 2] | 0;
   }
   i10 = HEAP32[i16 >> 2] | 0;
   i11 = 22;
  }
 } while (0);
 do {
  if ((i11 | 0) == 22) {
   if ((i10 | 0) != 0) {
    i15 = i10;
    break;
   }
   i16 = i1 + 416 | 0;
   i7 = i1 + 420 | 0;
   do {
    if ((HEAP32[i16 >> 2] | 0) == 0) {
     if ((HEAP8[i7] & 1) != 0) {
      break;
     }
     if ((HEAP32[i1 + 424 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i1 + 428 >> 2] | 0) != 0) {
      break;
     }
     STACKTOP = i2;
     return;
    }
   } while (0);
   HEAP32[i16 >> 2] = 0;
   HEAP8[i7] = 0;
   i6 = i1 + 421 | 0;
   i9 = i3 | 0;
   HEAP8[i6] = HEAP8[i9] | 0;
   HEAP8[i6 + 1 | 0] = HEAP8[i9 + 1 | 0] | 0;
   HEAP8[i6 + 2 | 0] = HEAP8[i9 + 2 | 0] | 0;
   HEAP32[i1 + 424 >> 2] = 0;
   HEAP32[i1 + 428 >> 2] = 0;
   __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0, 1);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i10 = HEAP32[i15 + 36 >> 2] | 0;
 i15 = (HEAP32[i10 + 48 >> 2] | 0) >>> 13 & 7;
 if ((i15 - 6 | 0) >>> 0 < 2 >>> 0) {
  i11 = (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3;
  i9 = (i11 | 0) == 0;
  i6 = i9 | (i11 | 0) == 3;
  i12 = (HEAP32[i10 + 40 >> 2] | 0) >>> 30 & 1;
  do {
   if ((i15 | 0) == 6) {
    i17 = i6 & (i12 | 0) != 0 | (i11 | 0) == 2 ? 1 : 2;
   } else {
    if (i9) {
     i17 = 3;
     break;
    }
    i17 = (i12 | 0) == 0 & (i6 ^ 1) ? 3 : 4;
   }
  } while (0);
  i18 = i17;
  i19 = ~~+HEAPF32[(HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 68 >> 2] | 0) + 12 >> 2];
 } else {
  i18 = 0;
  i19 = 0;
 }
 i10 = i1 + 416 | 0;
 i17 = i1 + 420 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) == (i18 | 0)) {
   if ((HEAP8[i17] & 1) != 0) {
    break;
   }
   if ((HEAP32[i1 + 424 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i1 + 428 >> 2] | 0) != (i19 | 0)) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAP32[i10 >> 2] = i18;
 HEAP8[i17] = 0;
 i17 = i1 + 421 | 0;
 i18 = i3 | 0;
 HEAP8[i17] = HEAP8[i18] | 0;
 HEAP8[i17 + 1 | 0] = HEAP8[i18 + 1 | 0] | 0;
 HEAP8[i17 + 2 | 0] = HEAP8[i18 + 2 | 0] | 0;
 HEAP32[i1 + 424 >> 2] = 0;
 HEAP32[i1 + 428 >> 2] = i19;
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0, 1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9FrameView32calculateScrollbarModesForLayoutERNS_13ScrollbarModeES2_NS0_33ScrollbarModesCalculationStrategyE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 HEAP32[i1 + 412 >> 2] = 0;
 i7 = i1 + 216 | 0;
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 448 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 604 >> 2] & 127](i8) | 0) != 1) {
    break;
   }
   HEAP32[i2 >> 2] = 1;
   HEAP32[i3 >> 2] = 1;
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if ((HEAP8[i1 + 225 | 0] & 1) != 0 | (i4 | 0) == 0) {
   HEAP32[i2 >> 2] = 0;
   __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i6, i1 | 0, 1);
   i8 = i6 + 8 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i11 = 0;
    break;
   }
   if (!(__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(i8) | 0)) {
    i11 = 0;
    break;
   }
   i8 = 1;
   i11 = (i10 >>> 0 < i8 >>> 0 | i10 >>> 0 == i8 >>> 0 & i9 >>> 0 < 0 >>> 0) & 1;
  } else {
   HEAP32[i2 >> 2] = 1;
   i11 = 1;
  }
 } while (0);
 HEAP32[i3 >> 2] = i11;
 if ((HEAP32[i1 + 300 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i11 = HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0;
 i6 = i11 + 692 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i12 = 0;
 } else {
  i9 = i4 + 32 | 0;
  if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
   i13 = i9 | 0;
  } else {
   i13 = HEAP32[i9 >> 2] | 0;
  }
  i12 = HEAP32[i13 >> 2] | 0;
 }
 i13 = __ZNK7WebCore8Document4bodyEv(i11) | 0;
 do {
  if ((i13 | 0) != 0) {
   i11 = (HEAP32[i13 + 12 >> 2] & 2048 | 0) == 0;
   i9 = i13 + 32 | 0;
   if (i11) {
    i14 = i9 | 0;
   } else {
    i14 = HEAP32[i9 >> 2] | 0;
   }
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    break;
   }
   i4 = HEAP32[i13 + 44 >> 2] | 0;
   i8 = HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0;
   do {
    if ((i4 | 0) == (i8 | 0)) {
     i15 = 23;
    } else {
     if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i8 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0)) {
      i15 = 23;
     }
    }
   } while (0);
   do {
    if ((i15 | 0) == 23) {
     if ((HEAP8[(HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] | 0) + 185 | 0] & 16) != 0) {
      break;
     }
     HEAP32[i3 >> 2] = 1;
     HEAP32[i2 >> 2] = 1;
     STACKTOP = i5;
     return;
    }
   } while (0);
   i8 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   do {
    if ((i4 | 0) != (i8 | 0)) {
     if ((HEAP32[i4 + 12 >> 2] | 0) != (HEAP32[i8 + 12 >> 2] | 0)) {
      STACKTOP = i5;
      return;
     }
     if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0)) {
      break;
     }
     STACKTOP = i5;
     return;
    }
   } while (0);
   do {
    if ((HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 48 >> 2] & 7168 | 0) == 0) {
     i8 = HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] | 0;
     i4 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
     if ((i8 | 0) != (i4 | 0)) {
      if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
       i16 = i12;
       break;
      }
      if ((HEAP32[i8 + 16 >> 2] | 0) != (HEAP32[i4 + 16 >> 2] | 0)) {
       i16 = i12;
       break;
      }
     }
     if (i11) {
      i17 = i9 | 0;
     } else {
      i17 = HEAP32[i9 >> 2] | 0;
     }
     i16 = HEAP32[i17 >> 2] | 0;
    } else {
     i16 = i12;
    }
   } while (0);
   __ZN7WebCore9FrameView23applyOverflowToViewportEPNS_13RenderElementERNS_13ScrollbarModeES4_(i1, i16, i2, i3);
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore9FrameView23applyOverflowToViewportEPNS_13RenderElementERNS_13ScrollbarModeES4_(i1, i12, i2, i3);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9FrameViewD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 88;
 HEAP32[i1 + 36 >> 2] = H_BASE + 512;
 i2 = i1 + 320 | 0;
 if (+HEAPF64[i1 + 328 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i2);
 }
 i3 = i1 + 216 | 0;
 i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 456 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZNK7WebCore8Document21existingAXObjectCacheEv(i4) | 0;
 }
 HEAP8[i1 + 377 | 0] = 1;
 i4 = i1 | 0;
 __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i4, 1, 0);
 if ((HEAP8[i1 + 225 | 0] & 1) == 0) {
  __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i4, 1, 1, 0, 0);
 } else {
  __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i4, 0, 0, 0, 0);
 }
 __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i4, 0, 0);
 __ZN7WebCore10ScrollView25setHasHorizontalScrollbarEbPb(i4, 0, 0) | 0;
 __ZN7WebCore10ScrollView23setHasVerticalScrollbarEbPb(i4, 0, 0) | 0;
 i5 = HEAP32[i1 + 640 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 636 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 600 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i5 | 0);
 }
 i5 = HEAP32[i1 + 596 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i1 + 572 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i5 = i1 + 540 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i1 + 532 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 536 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 456 | 0);
 i6 = i1 + 452 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i1 + 444 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 448 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 404 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 400 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i2);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 240 | 0);
 i2 = HEAP32[i1 + 220 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i2 >> 2] | 0;
  if ((i5 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i5);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS4_EEEEED2Ev(i1 + 212 | 0);
 i2 = HEAP32[i1 + 176 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore10ScrollViewD2Ev(i4);
  return;
 }
 __ZN3WTF8fastFreeEPv(i2);
 __ZN7WebCore10ScrollViewD2Ev(i4);
 return;
}
function __ZN7WebCore9FrameViewD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 88;
 HEAP32[i1 + 36 >> 2] = H_BASE + 512;
 i2 = i1 + 320 | 0;
 if (+HEAPF64[i1 + 328 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i2);
 }
 i3 = i1 + 216 | 0;
 i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 456 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZNK7WebCore8Document21existingAXObjectCacheEv(i4) | 0;
 }
 HEAP8[i1 + 377 | 0] = 1;
 i4 = i1 | 0;
 __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i4, 1, 0);
 if ((HEAP8[i1 + 225 | 0] & 1) == 0) {
  __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i4, 1, 1, 0, 0);
 } else {
  __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i4, 0, 0, 0, 0);
 }
 __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i4, 0, 0);
 __ZN7WebCore10ScrollView25setHasHorizontalScrollbarEbPb(i4, 0, 0) | 0;
 __ZN7WebCore10ScrollView23setHasVerticalScrollbarEbPb(i4, 0, 0) | 0;
 i5 = HEAP32[i1 + 640 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 636 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 600 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i5 | 0);
 }
 i5 = HEAP32[i1 + 596 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i1 + 572 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   i8 = i6 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i5 = i1 + 540 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i1 + 532 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 536 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN7WebCore9TimerBaseD2Ev(i1 + 456 | 0);
 i6 = i1 + 452 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i1 + 444 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 448 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 404 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 400 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore9TimerBaseD2Ev(i2);
 __ZN7WebCore9TimerBaseD2Ev(i1 + 240 | 0);
 i2 = HEAP32[i1 + 220 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i2 >> 2] | 0;
  if ((i5 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i5);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS4_EEEEED2Ev(i1 + 212 | 0);
 i2 = HEAP32[i1 + 176 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore10ScrollViewD2Ev(i4);
  return;
 }
 __ZN3WTF8fastFreeEPv(i2);
 __ZN7WebCore10ScrollViewD2Ev(i4);
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
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
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = (i7 >>> 23) + ~i7 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i7;
 i7 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i10 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i8 | 0)) {
    i18 = 8;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i7 | 0) == 0 ? i9 : i7;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i7 = i15;
 }
 if ((i18 | 0) == 8) {
  i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i10 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i10 = i11 + 4 | 0;
    if ((HEAP8[i10] & 1) != 0) {
     i21 = 0;
     break;
    }
    i7 = i14 + 12 | 0;
    if ((i7 | 0) != (i11 + 3080 | 0)) {
     i21 = i7;
     break;
    }
    HEAP8[i10] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 HEAP32[i20 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i3 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i3;
 i20 = i2 + 4 | 0;
 i14 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i14 | 0)) {
  i22 = i19;
  i23 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i24 = 8;
  } else {
   i21 = i14 << 1;
   i24 = (i3 * 6 & -1 | 0) < (i21 | 0) ? i14 : i21;
  }
  i21 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i2, i24, i19) | 0;
  i22 = i21;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore9FrameView22performPostLayoutTasksEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 320 | 0);
 i2 = i1 + 216 | 0;
 HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0) + 16 | 0] = 1;
 __ZN7WebCore14FrameSelection16updateAppearanceEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 468 >> 2] | 0);
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 32 >> 2] | 0;
 i5 = (i4 | 0) != 0;
 if (i5) {
  i6 = HEAP32[i4 + 212 >> 2] | 0;
 } else {
  i6 = 0;
 }
 do {
  if ((HEAP32[i1 + 316 >> 2] | 0) >>> 0 < 2 >>> 0) {
   if ((HEAP32[(HEAP32[i3 + 456 >> 2] | 0) + 692 >> 2] | 0) == 0) {
    break;
   }
   i7 = i1 + 376 | 0;
   do {
    if ((HEAP8[i7] & 1) == 0) {
     i8 = 0;
    } else {
     HEAP8[i7] = 0;
     __ZN7WebCore11FrameLoader14didFirstLayoutEv(i3 + 80 | 0);
     i9 = i6 & 1;
     i10 = HEAP32[i2 >> 2] | 0;
     if ((HEAP32[i10 + 28 >> 2] | 0) != (i10 | 0)) {
      i8 = i9;
      break;
     }
     __ZN7WebCore4Page37startCountingRelevantRepaintedObjectsEv(i4);
     i8 = i9;
    }
   } while (0);
   i7 = i1 + 592 | 0;
   do {
    if ((HEAP8[i7] & 1) == 0) {
     if (!(__ZNK7WebCore9FrameView27qualifiesAsVisuallyNonEmptyEv(i1) | 0)) {
      break;
     }
     HEAP8[i7] = 1;
     i9 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i10 = HEAP32[(HEAP32[i9 + 40 >> 2] | 0) + 208 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     __ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv(i10);
    }
   } while (0);
   do {
    if ((HEAP8[i7] & 1) == 0) {
     i11 = i8;
    } else {
     if ((HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0) + 328 >> 2] | 0) == 1) {
      i11 = i8;
      break;
     }
     i10 = i1 + 593 | 0;
     if ((HEAP8[i10] & 1) == 0) {
      i11 = i8;
      break;
     }
     HEAP8[i10] = 0;
     i11 = (i6 & 2 | 0) == 0 ? i8 : i8 | 2;
    }
   } while (0);
   if ((i11 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i7 + 28 >> 2] | 0) != (i7 | 0)) {
    break;
   }
   __ZN7WebCore11FrameLoader9didLayoutEj(i7 + 80 | 0, i11);
  }
 } while (0);
 i11 = HEAP32[(HEAP32[i2 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 160 >> 2] & 63](i11);
 __ZN7WebCore9FrameView21updateWidgetPositionsEv(i1);
 i11 = i1 + 4 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 i11 = 0;
 while (1) {
  if (i11 >>> 0 >= 2 >>> 0) {
   break;
  }
  if (__ZN7WebCore9FrameView21updateEmbeddedObjectsEv(i1) | 0) {
   break;
  } else {
   i11 = i11 + 1 | 0;
  }
 }
 do {
  if (i5) {
   i11 = __ZN7WebCore4Page20scrollingCoordinatorEv(i4) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 127](i11, i1);
  }
 } while (0);
 i4 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
 do {
  if ((i4 | 0) != 0) {
   if (!(__ZNK7WebCore10RenderView15usesCompositingEv(i4) | 0)) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor18frameViewDidLayoutEv(__ZN7WebCore10RenderView10compositorEv(i4) | 0);
  }
 } while (0);
 __ZN7WebCore9FrameView14scrollToAnchorEv(i1);
 __ZN7WebCore9FrameView23sendResizeEventIfNeededEv(i1);
 i4 = i1 + 4 | 0;
 i1 = i4 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  return;
 }
 i2 = i4 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 return;
}
function __ZN3WTF12copyToVectorINS_7HashSetIPN7WebCore6WidgetENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEEENS_6VectorINS_6RefPtrIS3_EELj0ENS_15CrashOnOverflowEEEEEvRKT_RT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i6 >>> 0 < i4 >>> 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) >>> 0 < i4 >>> 0) {
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore6WidgetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i4);
   }
   i7 = HEAP32[i2 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i5 >> 2] | 0;
   _memset(i7 + (i8 << 2) | 0, 0, i4 - i8 << 2 | 0) | 0;
  } else {
   i8 = HEAP32[i2 >> 2] | 0;
   i7 = i8 + (i6 << 2) | 0;
   if ((i6 | 0) == (i4 | 0)) {
    break;
   }
   i9 = i8 + (i4 << 2) | 0;
   while (1) {
    i8 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i8 | 0) != 0) {
      i10 = i8 + 4 | 0;
      i11 = i10 | 0;
      i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      if ((i12 | 0) != 0) {
       HEAP32[i11 >> 2] = i12;
       break;
      }
      i12 = i10 - 4 | 0;
      if ((i12 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i7 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = i4;
 i6 = HEAP32[i1 >> 2] | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i6 + (i7 << 2) | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 L22 : do {
  if ((i7 | 0) == 0) {
   i13 = i6;
  } else {
   i3 = i6;
   while (1) {
    i9 = HEAP32[i3 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i13 = i3;
     break L22;
    }
    i3 = i3 + 4 | 0;
    if ((i3 | 0) == (i1 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i13 | 0) == (i1 | 0)) {
  return;
 }
 i6 = i2 | 0;
 i2 = i13;
 i13 = 0;
 i7 = i4;
 L31 : while (1) {
  if (i7 >>> 0 <= i13 >>> 0) {
   i14 = 21;
   break;
  }
  i4 = HEAP32[i6 >> 2] | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i9 = i3 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  i9 = i4 + (i13 << 2) | 0;
  i4 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i3;
  do {
   if ((i4 | 0) != 0) {
    i3 = i4 + 4 | 0;
    i9 = i3 | 0;
    i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) != 0) {
     HEAP32[i9 >> 2] = i8;
     break;
    }
    i8 = i3 - 4 | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
   }
  } while (0);
  i4 = i2 + 4 | 0;
  if ((i4 | 0) == (i1 | 0)) {
   i14 = 37;
   break;
  } else {
   i15 = i4;
  }
  while (1) {
   i4 = HEAP32[i15 >> 2] | 0;
   if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
    break;
   }
   i4 = i15 + 4 | 0;
   if ((i4 | 0) == (i1 | 0)) {
    i14 = 38;
    break L31;
   } else {
    i15 = i4;
   }
  }
  if ((i15 | 0) == (i1 | 0)) {
   i14 = 39;
   break;
  }
  i2 = i15;
  i13 = i13 + 1 | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 }
 if ((i14 | 0) == 21) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i14 | 0) == 37) {
  return;
 } else if ((i14 | 0) == 38) {
  return;
 } else if ((i14 | 0) == 39) {
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore14ScrollableAreaES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore14ScrollableAreaES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
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
  i26 = __ZN3WTF9HashTableIPN7WebCore14ScrollableAreaES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN3WTF9HashTableIPN7WebCore13RenderElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore13RenderElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore13RenderElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN7WebCore9FrameView25serviceScriptedAnimationsEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = i1 + 216 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i4 = i1;
 }
 while (1) {
  __ZN7WebCore14ScrollableArea23serviceScrollAnimationsEv((HEAP32[i4 + 452 >> 2] | 0) + 36 | 0);
  __ZN7WebCore19AnimationController17serviceAnimationsEv(HEAP32[i4 + 476 >> 2] | 0);
  i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, 0) | 0;
  if ((i4 | 0) == 0) {
   break;
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i5 = 0;
  i6 = 0;
  i7 = 0;
  i8 = i4;
 }
 L8 : while (1) {
  i4 = HEAP32[i8 + 456 >> 2] | 0;
  do {
   if ((i5 | 0) == (i6 | 0)) {
    i3 = i6 + 1 | 0;
    i1 = i3 + (i6 >>> 2) | 0;
    i9 = i1 >>> 0 > 16 >>> 0 ? i1 : 16;
    i1 = i9 >>> 0 > i3 >>> 0 ? i9 : i3;
    do {
     if (i6 >>> 0 < i1 >>> 0) {
      if (i1 >>> 0 > 1073741823 >>> 0) {
       i10 = 11;
       break L8;
      }
      i9 = __ZN3WTF18fastMallocGoodSizeEj(i1 << 2) | 0;
      i11 = i9 >>> 2;
      i12 = __ZN3WTF10fastMallocEj(i9) | 0;
      i9 = i12;
      i13 = i7;
      _memcpy(i12 | 0, i13 | 0, i6 << 2) | 0;
      if ((i7 | 0) == 0) {
       i14 = i9;
       i15 = i11;
       break;
      }
      i12 = (i9 | 0) == (i7 | 0);
      __ZN3WTF8fastFreeEPv(i13);
      i14 = i12 ? 0 : i9;
      i15 = i12 ? 0 : i11;
     } else {
      i14 = i7;
      i15 = i6;
     }
    } while (0);
    HEAP32[i14 + (i6 << 2) >> 2] = i4;
    if ((i4 | 0) == 0) {
     i16 = i14;
     i17 = i15;
     i18 = i3;
     break;
    }
    i1 = i4 + 8 | 0;
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
    i16 = i14;
    i17 = i15;
    i18 = i3;
   } else {
    HEAP32[i7 + (i5 << 2) >> 2] = i4;
    if ((i4 | 0) != 0) {
     i1 = i4 + 8 | 0;
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
    }
    i16 = i7;
    i17 = i6;
    i18 = i5 + 1 | 0;
   }
  } while (0);
  i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i8 + 40 | 0, 0) | 0;
  if ((i4 | 0) == 0) {
   break;
  } else {
   i5 = i18;
   i6 = i17;
   i7 = i16;
   i8 = i4;
  }
 }
 if ((i10 | 0) == 11) {
  _WTFCrash();
 }
 i10 = (i18 | 0) == 0;
 do {
  if (!i10) {
   i8 = 0;
   while (1) {
    __ZN7WebCore8Document25serviceScriptedAnimationsEd(HEAP32[i16 + (i8 << 2) >> 2] | 0, d2);
    i8 = i8 + 1 | 0;
    if (i8 >>> 0 >= i18 >>> 0) {
     break;
    }
   }
   if (i10) {
    break;
   }
   i8 = i16 + (i18 << 2) | 0;
   i7 = i16;
   while (1) {
    i17 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i6 = i17 + 8 | 0;
      i5 = i6 | 0;
      i15 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      HEAP32[i5 >> 2] = i15;
      if ((i15 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
     }
    } while (0);
    i7 = i7 + 4 | 0;
    if ((i7 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
 } while (0);
 if ((i16 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i16);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore6WidgetES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore6WidgetES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore6WidgetES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN7WebCore9FrameView18doDeferredRepaintsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 | 0;
 do {
  if (__ZNK7WebCore10ScrollView11isOffscreenEv(i5) | 0) {
   if ((HEAP8[i1 + 544 | 0] & 1) != 0) {
    break;
   }
   i6 = i1 + 448 | 0;
   do {
    if ((HEAP32[i6 >> 2] | 0) != 0) {
     i7 = i1 + 452 | 0;
     if ((HEAP32[i7 >> 2] | 0) != 0) {
      HEAP32[i7 >> 2] = 0;
     }
     i7 = i1 + 444 | 0;
     i8 = HEAP32[i7 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     HEAP32[i7 >> 2] = 0;
     HEAP32[i6 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i8);
    }
   } while (0);
   HEAP32[i1 + 440 >> 2] = 0;
   STACKTOP = i2;
   return;
  }
 } while (0);
 i6 = i1 + 444 | 0;
 i8 = i1 + 452 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 L13 : do {
  if ((i7 | 0) != 0) {
   i9 = i1 + 216 | 0;
   i10 = i6 | 0;
   i11 = 0;
   i12 = i7;
   while (1) {
    i13 = HEAP32[(HEAP32[i9 >> 2] | 0) + 492 >> 2] | 0;
    i14 = i12 >>> 0 > i11 >>> 0;
    if ((i13 | 0) == 0) {
     if (!i14) {
      i15 = 16;
      break;
     }
     __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i4, (HEAP32[i10 >> 2] | 0) + (i11 << 4) | 0);
     __ZN7WebCore10ScrollView23repaintContentRectangleERKNS_7IntRectEb(i5, i4, 0);
    } else {
     if (!i14) {
      i15 = 13;
      break;
     }
     __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i3, (HEAP32[i10 >> 2] | 0) + (i11 << 4) | 0);
     __ZN7WebCore17TiledBackingStore10invalidateERKNS_7IntRectE(i13, i3);
    }
    i13 = i11 + 1 | 0;
    if (i13 >>> 0 >= i7 >>> 0) {
     break L13;
    }
    i11 = i13;
    i12 = HEAP32[i8 >> 2] | 0;
   }
   if ((i15 | 0) == 13) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i15 | 0) == 16) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i15 = i1 + 448 | 0;
 do {
  if ((HEAP32[i15 >> 2] | 0) != 0) {
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
   }
   i7 = i6 | 0;
   i3 = HEAP32[i7 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = 0;
   HEAP32[i15 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 HEAP32[i1 + 440 >> 2] = 0;
 i15 = i1 + 216 | 0;
 do {
  if (!(__ZNK7WebCore11FrameLoader10isCompleteEv((__ZNK7WebCore9FrameTree3topEv((HEAP32[i15 >> 2] | 0) + 40 | 0) | 0) + 80 | 0) | 0)) {
   i6 = HEAP32[(HEAP32[i15 >> 2] | 0) + 456 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if ((HEAP8[i6 + 964 | 0] & 1) == 0) {
    if ((HEAP32[(HEAP32[i6 + 340 >> 2] | 0) + 52 >> 2] | 0) == 0) {
     break;
    }
   }
   i6 = i1 + 512 | 0;
   d16 = +HEAPF64[i6 >> 3] + +HEAPF64[H_BASE + 760 >> 3];
   d17 = +HEAPF64[H_BASE + 776 >> 3];
   HEAPF64[i6 >> 3] = d17 < d16 ? d17 : d16;
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAPF64[i1 + 512 >> 3] = +HEAPF64[H_BASE + 784 >> 3];
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9FrameView28addViewportConstrainedObjectEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 i6 = i1 + 640 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = __ZN3WTF10fastMallocEj(20) | 0;
   i9 = i8;
   _memset(i8 | 0, 0, 20) | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i9;
   if ((i8 | 0) == 0) {
    i10 = i9;
    break;
   }
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i9);
   }
   __ZN3WTF8fastFreeEPv(i8);
   i10 = HEAP32[i6 >> 2] | 0;
  } else {
   i10 = i7;
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 L8 : do {
  if ((i7 | 0) != 0) {
   i6 = HEAP32[i10 + 8 >> 2] | 0;
   i8 = i2;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   i8 = i9 & i6;
   i11 = i7 + (i8 << 2) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == (i2 | 0)) {
    i13 = i11;
   } else {
    i11 = (i9 >>> 23) + ~i9 | 0;
    i9 = i11 << 12 ^ i11;
    i11 = i9 >>> 7 ^ i9;
    i9 = i11 << 2 ^ i11;
    i11 = i9 >>> 20 ^ i9 | 1;
    i9 = 0;
    i14 = i8;
    i8 = i12;
    while (1) {
     if ((i8 | 0) == 0) {
      break L8;
     }
     i12 = (i9 | 0) == 0 ? i11 : i9;
     i15 = i12 + i14 & i6;
     i16 = i7 + (i15 << 2) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i2 | 0)) {
      i13 = i16;
      break;
     } else {
      i9 = i12;
      i14 = i15;
      i8 = i17;
     }
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN3WTF9HashTableIPN7WebCore13RenderElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i5, i10 | 0, i4, i4);
 i4 = i1 + 216 | 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
   i10 = HEAP32[i4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i18 = i10;
   }
   while (1) {
    i10 = HEAP32[i18 + 452 >> 2] | 0;
    if ((i10 | 0) != 0) {
     __ZN7WebCore10ScrollView18setCanBlitOnScrollEb(i10 | 0, (__ZNK7WebCore9FrameView15useSlowRepaintsEb(i10, 1) | 0) ^ 1);
    }
    i18 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i18 + 40 | 0, HEAP32[i4 >> 2] | 0) | 0;
    if ((i18 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i18 = HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = __ZN7WebCore4Page20scrollingCoordinatorEv(i18) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore20ScrollingCoordinator30frameViewFixedObjectsDidChangeEPNS_9FrameViewE(i4, i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView38scrollPositionChangedViaPlatformWidgetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 316 | 0;
 do {
  if ((HEAP32[i1 + 304 >> 2] | 0) != 4) {
   if ((HEAP32[i2 >> 2] | 0) >>> 0 >= 2 >>> 0) {
    break;
   }
   i3 = HEAP32[i1 + 640 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) <= 0) {
    break;
   }
   i3 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   __ZN7WebCore9FrameView21updateWidgetPositionsEv(i1);
   __ZN7WebCore11RenderLayer39updateLayerPositionsAfterDocumentScrollEv(HEAP32[i3 + 40 >> 2] | 0);
  }
 } while (0);
 do {
  if ((HEAP32[i2 >> 2] | 0) >>> 0 < 2 >>> 0) {
   i3 = HEAP32[i1 + 640 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP32[i3 + 12 >> 2] | 0) <= 0) {
    break;
   }
   i3 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(__ZN7WebCore10RenderView10compositorEv(i3) | 0, 3, 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 220 >> 2] | 0;
 L14 : do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i2 >> 2] | 0;
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   i5 = i3 + (i4 << 2) | 0;
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    break;
   }
   L17 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L17;
      }
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i5 | 0)) {
       break L14;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    break;
   }
   i3 = i6;
   i4 = HEAP32[i6 >> 2] | 0;
   while (1) {
    __ZNK7WebCore12RenderObject7repaintEb(i4 | 0, 0);
    i7 = i3 + 4 | 0;
    if ((i7 | 0) == (i5 | 0)) {
     break L14;
    } else {
     i9 = i7;
    }
    while (1) {
     i10 = HEAP32[i9 >> 2] | 0;
     i7 = i10;
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      break;
     }
     i7 = i9 + 4 | 0;
     if ((i7 | 0) == (i5 | 0)) {
      break L14;
     } else {
      i9 = i7;
     }
    }
    if ((i9 | 0) == (i5 | 0)) {
     break;
    } else {
     i3 = i9;
     i4 = i10;
    }
   }
  }
 } while (0);
 i10 = i1 + 216 | 0;
 __ZN7WebCore12EventHandler15sendScrollEventEv(HEAP32[(HEAP32[i10 >> 2] | 0) + 472 >> 2] | 0);
 __ZN7WebCore12EventHandler30dispatchFakeMouseMoveEventSoonEv(HEAP32[(HEAP32[i10 >> 2] | 0) + 472 >> 2] | 0);
 i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i10 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if (!(__ZNK7WebCore10RenderView15usesCompositingEv(i1) | 0)) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor18frameViewDidScrollEv(__ZN7WebCore10RenderView10compositorEv(i1) | 0);
 return;
}
function __ZNK7WebCore9FrameView25trackedRepaintRectsAsTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[(HEAP32[i2 + 216 >> 2] | 0) + 456 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore8Document12updateLayoutEv(i5);
 }
 HEAP32[i4 >> 2] = 0;
 i5 = i4 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP8[i4 + 12 | 0] = 1;
 HEAP32[i4 + 16 >> 2] = 0;
 HEAP32[i4 + 20 >> 2] = 0;
 i7 = i2 + 540 | 0;
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  __ZN7WebCore10TextStreamlsEPKc(i4, H_BASE + 40 | 0) | 0;
  L6 : do {
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    i8 = i2 + 532 | 0;
    i9 = 0;
    while (1) {
     i10 = __ZN7WebCore10TextStreamlsEPKc(i4, H_BASE + 24 | 0) | 0;
     if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i9 >>> 0) {
      i11 = 7;
      break;
     }
     i12 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i10, HEAP32[(HEAP32[i8 >> 2] | 0) + (i9 << 4) >> 2] | 0) | 0, H_BASE + 16 | 0) | 0;
     if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i9 >>> 0) {
      i11 = 9;
      break;
     }
     i10 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i12, HEAP32[(HEAP32[i8 >> 2] | 0) + (i9 << 4) + 4 >> 2] | 0) | 0, H_BASE + 16 | 0) | 0;
     if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i9 >>> 0) {
      i11 = 11;
      break;
     }
     i12 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i10, HEAP32[(HEAP32[i8 >> 2] | 0) + (i9 << 4) + 8 >> 2] | 0) | 0, H_BASE + 16 | 0) | 0;
     if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i9 >>> 0) {
      i11 = 13;
      break;
     }
     __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i12, HEAP32[(HEAP32[i8 >> 2] | 0) + (i9 << 4) + 12 >> 2] | 0) | 0, H_BASE + 8 | 0) | 0;
     i9 = i9 + 1 | 0;
     if (i9 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
      break L6;
     }
    }
    if ((i11 | 0) == 7) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i11 | 0) == 9) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i11 | 0) == 11) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i11 | 0) == 13) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   }
  } while (0);
  __ZN7WebCore10TextStreamlsEPKc(i4, H_BASE + 8 | 0) | 0;
 }
 __ZN7WebCore10TextStream7releaseEv(i1, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore9FrameView23documentBackgroundColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = HEAP32[(HEAP32[i2 + 216 >> 2] | 0) + 456 >> 2] | 0;
 if ((i15 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP8[i1 + 4 | 0] = 0;
  STACKTOP = i3;
  return;
 }
 i16 = HEAP32[i15 + 692 >> 2] | 0;
 i17 = __ZNK7WebCore8Document4bodyEv(i15) | 0;
 HEAP32[i4 >> 2] = 0;
 i15 = i4 + 4 | 0;
 HEAP8[i15] = 0;
 HEAP32[i5 >> 2] = 0;
 i18 = i5 + 4 | 0;
 HEAP8[i18] = 0;
 do {
  if ((i16 | 0) != 0) {
   i19 = (HEAP32[i16 + 12 >> 2] & 2048 | 0) == 0;
   i20 = i16 + 32 | 0;
   if (i19) {
    i21 = i20 | 0;
   } else {
    i21 = HEAP32[i20 >> 2] | 0;
   }
   if ((HEAP32[i21 >> 2] | 0) == 0) {
    break;
   }
   if (i19) {
    i22 = i20 | 0;
   } else {
    i22 = HEAP32[i20 >> 2] | 0;
   }
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i6, HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] | 0, 23);
   i20 = i4;
   i19 = i6;
   HEAP32[i20 >> 2] = HEAP32[i19 >> 2];
   HEAP8[i20 + 4 | 0] = HEAP8[i19 + 4 | 0] | 0;
  }
 } while (0);
 do {
  if ((i17 | 0) != 0) {
   i6 = (HEAP32[i17 + 12 >> 2] & 2048 | 0) == 0;
   i22 = i17 + 32 | 0;
   if (i6) {
    i23 = i22 | 0;
   } else {
    i23 = HEAP32[i22 >> 2] | 0;
   }
   if ((HEAP32[i23 >> 2] | 0) == 0) {
    break;
   }
   if (i6) {
    i24 = i22 | 0;
   } else {
    i24 = HEAP32[i22 >> 2] | 0;
   }
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i7, HEAP32[(HEAP32[i24 >> 2] | 0) + 36 >> 2] | 0, 23);
   i22 = i5;
   i6 = i7;
   HEAP32[i22 >> 2] = HEAP32[i6 >> 2];
   HEAP8[i22 + 4 | 0] = HEAP8[i6 + 4 | 0] | 0;
  }
 } while (0);
 i7 = (HEAP8[i15] & 1) != 0;
 if ((HEAP8[i18] & 1) == 0) {
  if (i7) {
   i18 = i2 + 380 | 0;
   i15 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i8 + 4 >> 2] = i15;
   __ZNK7WebCore5Color5blendERKS0_(i1, i9, i4);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   STACKTOP = i3;
   return;
  }
 } else {
  i9 = i2 + 380 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i15 = HEAP32[i9 + 4 >> 2] | 0;
  if (i7) {
   HEAP32[i12 >> 2] = i2;
   HEAP32[i12 + 4 >> 2] = i15;
   __ZNK7WebCore5Color5blendERKS0_(i14, i13, i4);
   __ZNK7WebCore5Color5blendERKS0_(i1, i14, i5);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i10 >> 2] = i2;
   HEAP32[i10 + 4 >> 2] = i15;
   __ZNK7WebCore5Color5blendERKS0_(i1, i11, i5);
   STACKTOP = i3;
   return;
  }
 }
}
function __ZN7WebCore9FrameView14scrollToAnchorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 216 | 0;
 i6 = __ZNK7WebCore8Document21haveStylesheetsLoadedEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0) | 0;
 i7 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0) + 1083 | 0;
 if (!i6) {
  HEAP8[i7] = 1;
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 HEAP8[i7] = 0;
 i7 = __ZN7WebCore9TreeScope10findAnchorERKN3WTF6StringE((HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0) + 44 | 0, i2) | 0;
 __ZN7WebCore8Document12setCSSTargetEPNS_7ElementE(HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0, i7);
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if ((HEAP8[i6 + 1576 | 0] & 32) == 0) {
   i9 = 6;
  } else {
   i10 = __ZNK7WebCore11SVGDocument11rootElementEv(i6) | 0;
   if ((i10 | 0) == 0) {
    i9 = 6;
    break;
   }
   __ZN7WebCore13SVGSVGElement16setupInitialViewERKN3WTF6StringEPNS_7ElementE(i10, i2, i7);
   if ((i7 | 0) == 0) {
    i8 = 1;
    STACKTOP = i3;
    return i8 | 0;
   } else {
    __ZN7WebCore9FrameView30maintainScrollPositionAtAnchorEPNS_4NodeE(i1, i7 | 0);
    break;
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 6) {
   if ((i7 | 0) != 0) {
    __ZN7WebCore9FrameView30maintainScrollPositionAtAnchorEPNS_4NodeE(i1, i7 | 0);
    break;
   }
   i6 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
      break;
     }
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i6, H_BASE + 56 | 0) | 0) {
      break;
     } else {
      i8 = 0;
     }
     STACKTOP = i3;
     return i8 | 0;
    }
   } while (0);
   __ZN7WebCore9FrameView30maintainScrollPositionAtAnchorEPNS_4NodeE(i1, HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0);
   i8 = 1;
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 348 >> 2] & 127](i7) | 0)) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i2 = i7 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN7WebCore8Document17setFocusedElementEN3WTF10PassRefPtrINS_7ElementEEENS_14FocusDirectionE(i1, i4, 0) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 i5 = i4 + 8 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore9FrameView21updateEmbeddedObjectsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 if ((HEAP32[i1 + 316 >> 2] | 0) >>> 0 > 1 >>> 0) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 i8 = i1 + 212 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = (HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0) + 1;
 i1 = HEAP32[i8 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i4 >> 2] = HEAP32[i1 + 28 >> 2];
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i3, i1 | 0, i6, i4);
 if ((HEAP8[i3 + 8 | 0] & 1) != 0) {
  i4 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
  i3 = i1 + 24 | 0;
  HEAP32[i4 + 4 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i4 + 8 >> 2] = 0;
  i6 = HEAP32[i3 >> 2] | 0;
  if ((i6 | 0) == 0) {
   HEAP32[i1 + 20 >> 2] = i4;
  } else {
   HEAP32[i6 + 8 >> 2] = i4;
  }
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i8 >> 2] | 0;
 L17 : do {
  if ((HEAP32[i4 + 12 >> 2] | 0) == 0) {
   i9 = 1;
  } else {
   i3 = i4;
   while (1) {
    i6 = __ZN3WTF11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS3_EEE9takeFirstEv(i3) | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    __ZN7WebCore9FrameView20updateEmbeddedObjectERNS_20RenderEmbeddedObjectE(0, i6);
    i6 = HEAP32[i8 >> 2] | 0;
    if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
     i9 = 1;
     break L17;
    } else {
     i3 = i6;
    }
   }
   i9 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] | 0) == 0;
  }
 } while (0);
 i8 = HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0;
 if ((i8 | 0) == 1) {
  __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope11moveWidgetsEv(i5);
  i10 = HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] | 0;
 } else {
  i10 = i8;
 }
 HEAP32[__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE >> 2] = i10 - 1;
 i7 = i9;
 STACKTOP = i2;
 return i7 | 0;
}
function __ZN7WebCore9FrameViewC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 __ZN7WebCore10ScrollViewC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 88;
 HEAP32[i1 + 36 >> 2] = H_BASE + 512;
 _memset(i1 + 176 | 0, 0, 40) | 0;
 HEAP32[i1 + 216 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 220 >> 2] = 0;
 HEAP8[i1 + 225 | 0] = 1;
 i3 = i1 + 240 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 736;
 HEAP32[i1 + 284 >> 2] = i1;
 i3 = i1 + 288 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 18;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i1 + 300 >> 2] = 0;
 HEAP32[i1 + 304 >> 2] = 0;
 HEAP8[i1 + 309 | 0] = 0;
 i3 = i1 + 320 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 736;
 HEAP32[i1 + 364 >> 2] = i1;
 i3 = i1 + 368 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 32;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP8[i1 + 378 | 0] = 0;
 HEAP32[i1 + 380 >> 2] = -1;
 HEAP8[i1 + 384 | 0] = 1;
 HEAP32[i1 + 388 >> 2] = 0;
 HEAP32[i1 + 392 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i1 + 400 | 0, H_BASE + 72 | 0);
 HEAP32[i1 + 404 >> 2] = 0;
 HEAP8[i1 + 408 | 0] = 1;
 HEAP32[i1 + 412 >> 2] = 0;
 HEAP32[i1 + 416 >> 2] = 0;
 HEAP8[i1 + 420 | 0] = 0;
 _memset(i1 + 424 | 0, 0, 10) | 0;
 HEAP8[i1 + 434 | 0] = 1;
 HEAP32[i1 + 444 >> 2] = 0;
 HEAP32[i1 + 448 >> 2] = 0;
 HEAP32[i1 + 452 >> 2] = 0;
 i3 = i1 + 456 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 736;
 HEAP32[i1 + 500 >> 2] = i1;
 i3 = i1 + 504 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 62;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP8[i1 + 528 | 0] = 0;
 HEAP32[i1 + 532 >> 2] = 0;
 HEAP32[i1 + 536 >> 2] = 0;
 HEAP32[i1 + 540 >> 2] = 0;
 HEAP8[i1 + 544 | 0] = 1;
 if ((HEAP8[H_BASE + 816 | 0] | 0) == 0) {
  HEAPF32[H_BASE + 800 >> 2] = -1.7014117331926443e+38;
  HEAPF32[H_BASE + 804 >> 2] = -1.7014117331926443e+38;
  HEAPF32[H_BASE + 808 >> 2] = 3.4028234663852886e+38;
  HEAPF32[H_BASE + 812 >> 2] = 3.4028234663852886e+38;
  HEAP32[H_BASE + 816 >> 2] = 1;
  HEAP32[H_BASE + 820 >> 2] = 0;
 }
 i3 = i1 + 548 | 0;
 HEAP32[i3 >> 2] = HEAP32[H_BASE + 800 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[H_BASE + 804 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[H_BASE + 808 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[H_BASE + 812 >> 2];
 HEAP32[i1 + 564 >> 2] = 0;
 HEAP8[i1 + 568 | 0] = 0;
 HEAP32[i1 + 572 >> 2] = 0;
 _memset(i1 + 596 | 0, 0, 11) | 0;
 _memset(i1 + 608 | 0, 0, 48) | 0;
 HEAP8[i1 + 656 | 0] = 1;
 HEAP32[i1 + 660 >> 2] = 0;
 __ZN7WebCore9FrameView4initEv(i1);
 if ((HEAP32[i2 + 28 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 i2 = i1 + 44 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -61 | 8;
 return;
}
function __ZN7WebCore9FrameViewC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 __ZN7WebCore10ScrollViewC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 88;
 HEAP32[i1 + 36 >> 2] = H_BASE + 512;
 _memset(i1 + 176 | 0, 0, 40) | 0;
 HEAP32[i1 + 216 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 220 >> 2] = 0;
 HEAP8[i1 + 225 | 0] = 1;
 i3 = i1 + 240 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 736;
 HEAP32[i1 + 284 >> 2] = i1;
 i3 = i1 + 288 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 18;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i1 + 300 >> 2] = 0;
 HEAP32[i1 + 304 >> 2] = 0;
 HEAP8[i1 + 309 | 0] = 0;
 i3 = i1 + 320 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 736;
 HEAP32[i1 + 364 >> 2] = i1;
 i3 = i1 + 368 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 32;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP8[i1 + 378 | 0] = 0;
 HEAP32[i1 + 380 >> 2] = -1;
 HEAP8[i1 + 384 | 0] = 1;
 HEAP32[i1 + 388 >> 2] = 0;
 HEAP32[i1 + 392 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i1 + 400 | 0, H_BASE + 72 | 0);
 HEAP32[i1 + 404 >> 2] = 0;
 HEAP8[i1 + 408 | 0] = 1;
 HEAP32[i1 + 412 >> 2] = 0;
 HEAP32[i1 + 416 >> 2] = 0;
 HEAP8[i1 + 420 | 0] = 0;
 _memset(i1 + 424 | 0, 0, 10) | 0;
 HEAP8[i1 + 434 | 0] = 1;
 HEAP32[i1 + 444 >> 2] = 0;
 HEAP32[i1 + 448 >> 2] = 0;
 HEAP32[i1 + 452 >> 2] = 0;
 i3 = i1 + 456 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 736;
 HEAP32[i1 + 500 >> 2] = i1;
 i3 = i1 + 504 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 62;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP8[i1 + 528 | 0] = 0;
 HEAP32[i1 + 532 >> 2] = 0;
 HEAP32[i1 + 536 >> 2] = 0;
 HEAP32[i1 + 540 >> 2] = 0;
 HEAP8[i1 + 544 | 0] = 1;
 if ((HEAP8[H_BASE + 816 | 0] | 0) == 0) {
  HEAPF32[H_BASE + 800 >> 2] = -1.7014117331926443e+38;
  HEAPF32[H_BASE + 804 >> 2] = -1.7014117331926443e+38;
  HEAPF32[H_BASE + 808 >> 2] = 3.4028234663852886e+38;
  HEAPF32[H_BASE + 812 >> 2] = 3.4028234663852886e+38;
  HEAP32[H_BASE + 816 >> 2] = 1;
  HEAP32[H_BASE + 820 >> 2] = 0;
 }
 i3 = i1 + 548 | 0;
 HEAP32[i3 >> 2] = HEAP32[H_BASE + 800 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[H_BASE + 804 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[H_BASE + 808 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[H_BASE + 812 >> 2];
 HEAP32[i1 + 564 >> 2] = 0;
 HEAP8[i1 + 568 | 0] = 0;
 HEAP32[i1 + 572 >> 2] = 0;
 _memset(i1 + 596 | 0, 0, 11) | 0;
 _memset(i1 + 608 | 0, 0, 48) | 0;
 HEAP8[i1 + 656 | 0] = 1;
 HEAP32[i1 + 660 >> 2] = 0;
 __ZN7WebCore9FrameView4initEv(i1);
 if ((HEAP32[i2 + 28 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 i2 = i1 + 44 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -61 | 8;
 return;
}
function __ZN7WebCore9FrameView15setIsOverlappedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 227 | 0;
 if ((i2 & 1 | 0) == (HEAP8[i3] & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 i2 = i1 + 216 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i4 = i3;
 }
 while (1) {
  i3 = HEAP32[i4 + 452 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN7WebCore10ScrollView18setCanBlitOnScrollEb(i3 | 0, (__ZNK7WebCore9FrameView15useSlowRepaintsEb(i3, 1) | 0) ^ 1);
  }
  i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, HEAP32[i2 >> 2] | 0) | 0;
  if ((i4 | 0) == 0) {
   break;
  }
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 } else {
  i5 = i4;
 }
 L14 : while (1) {
  i4 = __ZNK7WebCore5Frame15contentRendererEv(i5) | 0;
  do {
   if ((i4 | 0) != 0) {
    i3 = __ZN7WebCore10RenderView10compositorEv(i4) | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    if ((HEAP8[i3 + 88 | 0] & 1) != 0) {
     i6 = 12;
     break L14;
    }
    if (!(__ZN7WebCore21RenderLayerCompositor35allowsIndependentlyCompositedFramesEPKNS_9FrameViewE(i1) | 0)) {
     i6 = 23;
     break L14;
    }
   }
  } while (0);
  i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i5 + 40 | 0, HEAP32[i2 >> 2] | 0) | 0;
  if ((i4 | 0) == 0) {
   i6 = 22;
   break;
  } else {
   i5 = i4;
  }
 }
 if ((i6 | 0) == 12) {
  i5 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i2 >> 2] | 0) + 40 | 0) | 0;
  do {
   if ((i5 | 0) != 0) {
    i4 = __ZNK7WebCore5Frame15contentRendererEv(i5) | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    i3 = __ZN7WebCore10RenderView10compositorEv(i4) | 0;
    __ZN7WebCore21RenderLayerCompositor31setCompositingLayersNeedRebuildEb(i3, 1);
    __ZN7WebCore21RenderLayerCompositor30scheduleCompositingLayerUpdateEv(i3);
   }
  } while (0);
  if (!(__ZN7WebCore21RenderLayerCompositor35allowsIndependentlyCompositedFramesEPKNS_9FrameViewE(i1) | 0)) {
   return;
  }
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i7 = i1;
  }
  while (1) {
   i1 = __ZNK7WebCore5Frame15contentRendererEv(i7) | 0;
   if ((i1 | 0) != 0) {
    i5 = __ZN7WebCore10RenderView10compositorEv(i1) | 0;
    __ZN7WebCore21RenderLayerCompositor31setCompositingLayersNeedRebuildEb(i5, 1);
    __ZN7WebCore21RenderLayerCompositor30scheduleCompositingLayerUpdateEv(i5);
   }
   i7 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i7 + 40 | 0, HEAP32[i2 >> 2] | 0) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
  }
  return;
 } else if ((i6 | 0) == 22) {
  return;
 } else if ((i6 | 0) == 23) {
  return;
 }
}
function __ZN7WebCore9FrameView16scheduleRelayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0;
 i2 = i1 + 300 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i3 | 0, 0, 0);
  HEAP32[i2 >> 2] = 0;
 }
 if ((HEAP8[i1 + 308 | 0] & 1) == 0) {
  return;
 }
 i3 = i1 + 216 | 0;
 i4 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i3 >> 2] | 0) | 0;
 i5 = i1 + 248 | 0;
 do {
  if (+HEAPF64[i5 >> 3] == +0) {
   if ((i4 | 0) != 0) {
    if ((HEAP32[i4 + 20 >> 2] & 31 | 0) != 0) {
     break;
    }
   }
   if ((HEAP32[i2 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i1 + 564 >> 2] | 0) == 0) {
    return;
   }
   if ((HEAP8[i1 + 568 | 0] & 1) != 0) {
    break;
   }
   return;
  }
 } while (0);
 if (!(__ZN7WebCore8Document20shouldScheduleLayoutEv(HEAP32[(HEAP32[i3 >> 2] | 0) + 456 >> 2] | 0) | 0)) {
  return;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i2 | 0) == 0)) {
   i4 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i2 + 32 >> 2] | 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation23didInvalidateLayoutImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i4, i2);
  }
 } while (0);
 do {
  if ((__ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i3 >> 2] | 0) | 0) != 0) {
   if (!(__ZNK7WebCore9FrameView33isInChildFrameWithFrameFlatteningEv(i1) | 0)) {
    break;
   }
   i2 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i3 >> 2] | 0) | 0;
   i4 = i2 | 0;
   i6 = i2 + 20 | 0;
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 & 1 | 0) != 0) {
    break;
   }
   HEAP32[i6 >> 2] = i2 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
   if ((HEAP32[i6 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
  }
 } while (0);
 i4 = __ZN7WebCore8Document18minimumLayoutDelayEv(HEAP32[(HEAP32[i3 >> 2] | 0) + 456 >> 2] | 0) | 0;
 i3 = i1 + 240 | 0;
 d7 = +HEAPF64[i5 >> 3];
 do {
  if (d7 != +0) {
   i6 = i1 + 296 | 0;
   if (!((HEAP8[i6] & 1) != 0 & (i4 | 0) == 0)) {
    d8 = d7;
    break;
   }
   __ZN7WebCore9TimerBase4stopEv(i3);
   HEAP8[i6] = 0;
   d8 = +HEAPF64[i5 >> 3];
  } else {
   d8 = d7;
  }
 } while (0);
 if (d8 != +0) {
  return;
 }
 HEAP8[i1 + 296 | 0] = (i4 | 0) != 0 | 0;
 __ZN7WebCore9TimerBase5startEdd(i3, +(i4 | 0) * +.001, +0);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore14ScrollableAreaES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN3WTF9HashTableIPN7WebCore13RenderElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN3WTF9HashTableIPN7WebCore6WidgetES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   i18 = i17;
   i19 = i18 + ~(i18 << 15) | 0;
   i18 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i18 >>> 6 ^ i18;
   i18 = i19 + ~(i19 << 11) | 0;
   i19 = i18 >>> 16 ^ i18;
   i18 = (i19 >>> 23) + ~i19 | 0;
   i20 = i18 << 12 ^ i18;
   i18 = i20 >>> 7 ^ i20;
   i20 = i18 << 2 ^ i18;
   i18 = i20 >>> 20 ^ i20 | 1;
   i20 = i19;
   i19 = 0;
   i21 = 0;
   while (1) {
    i22 = i20 & i16;
    i23 = i14 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == (-1 | 0)) {
     i26 = i23;
    } else if ((i25 | 0) == 0) {
     i27 = 5;
     break;
    } else {
     if ((HEAP32[i24 >> 2] | 0) == (i17 | 0)) {
      i28 = i23;
      break;
     } else {
      i26 = i21;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i20 = i24 + i22 | 0;
    i19 = i24;
    i21 = i26;
   }
   if ((i27 | 0) == 5) {
    i27 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   HEAP32[i28 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i28 : i12;
  }
  i19 = i11 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i19;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore9FrameView26adjustMediaTypeForPrintingEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 404 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i2) {
  do {
   if (!i8) {
    i2 = i7 | 0;
    HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
    i2 = i1 + 400 | 0;
    i9 = HEAP32[i2 >> 2] | 0;
    HEAP32[i2 >> 2] = i7;
    if ((i9 | 0) == 0) {
     break;
    }
    i2 = i9 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i10 = i7 | 0;
  i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
  if ((i2 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i7);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i10 >> 2] = i2;
   STACKTOP = i3;
   return;
  }
 }
 do {
  if (i8) {
   __ZNK7WebCore9FrameView9mediaTypeEv(i4, i1);
   i2 = i4 | 0;
   i10 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i2 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i10;
   if ((i2 | 0) == 0) {
    break;
   }
   i10 = i2 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i10 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 64 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 400 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore9FrameView22updateAnnotatedRegionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 + 216 | 0;
 i1 = HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0;
 if ((HEAP8[i1 + 1408 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i3 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i3 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore12RenderObject23collectAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(__ZNK7WebCore4Node9renderBoxEv(i1 | 0) | 0, i3);
 i8 = __ZNK7WebCore8Document16annotatedRegionsEv(i1) | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 L4 : do {
  if ((i9 | 0) == (HEAP32[i8 + 8 >> 2] | 0)) {
   i10 = HEAP32[i5 >> 2] | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   i12 = 0;
   while (1) {
    if (i12 >>> 0 >= i9 >>> 0) {
     break L4;
    }
    if (__ZNK7WebCore20AnnotatedRegionValueeqERKS0_(i10 + (i12 * 40 & -1) | 0, i11 + (i12 * 40 & -1) | 0) | 0) {
     i12 = i12 + 1 | 0;
    } else {
     i13 = 6;
     break;
    }
   }
  } else {
   i13 = 6;
  }
 } while (0);
 do {
  if ((i13 | 0) == 6) {
   __ZN7WebCore8Document19setAnnotatedRegionsERKN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1, i3);
   i9 = HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 8 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 244 >> 2] & 63](i8);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP32[i5 >> 2] | 0;
  i1 = i3 + (i4 * 40 & -1) | 0;
  i4 = i3;
  while (1) {
   i3 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i13 = i3 | 0;
     i8 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i13 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i4 = i4 + 40 | 0;
   if ((i4 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i7 >> 2] = 0;
 }
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
function __ZN7WebCore9FrameView10wheelEventERKNS_18PlatformWheelEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 48 | 0;
 if (!(__ZN7WebCore9FrameView12isScrollableEv(i1) | 0)) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i10 = i1 | 0;
 if ((HEAP8[i1 + 172 | 0] & 1) == 0) {
  __ZNK7WebCore10ScrollView14scrollbarModesERNS_13ScrollbarModeES2_(i10, i7, i3 + 40 | 0);
  do {
   if ((HEAP32[i7 >> 2] | 0) == 1) {
    __ZNK7WebCore10ScrollView14scrollbarModesERNS_13ScrollbarModeES2_(i10, i5, i6);
    if ((HEAP32[i6 >> 2] | 0) == 1) {
     i9 = 0;
    } else {
     break;
    }
    STACKTOP = i3;
    return i9 | 0;
   }
  } while (0);
  if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
   i9 = 0;
   STACKTOP = i3;
   return i9 | 0;
  }
  i9 = __ZN7WebCore14ScrollableArea16handleWheelEventERKNS_18PlatformWheelEventE(i1 + 36 | 0, i2) | 0;
  STACKTOP = i3;
  return i9 | 0;
 } else {
  i6 = i4 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 63](i4, i10, 0);
  i4 = HEAP32[i6 >> 2] | 0;
  i5 = HEAP32[i6 + 4 >> 2] | 0;
  i6 = ~~(+(i4 | 0) - +HEAPF32[i2 + 32 >> 2]);
  i7 = ~~(+(i5 | 0) - +HEAPF32[i2 + 36 >> 2]);
  HEAP32[i8 >> 2] = i6;
  HEAP32[i8 + 4 >> 2] = i7;
  if (!((i4 | 0) != (i6 | 0) | (i5 | 0) != (i7 | 0))) {
   i9 = 1;
   STACKTOP = i3;
   return i9 | 0;
  }
  __ZN7WebCore10ScrollView8scrollToERKNS_7IntSizeE(i10, i8);
  i8 = i1 + 216 | 0;
  __ZN7WebCore12EventHandler15sendScrollEventEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 472 >> 2] | 0);
  __ZN7WebCore12EventHandler30dispatchFakeMouseMoveEventSoonEv(HEAP32[(HEAP32[i8 >> 2] | 0) + 472 >> 2] | 0);
  i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i8 >> 2] | 0) | 0;
  do {
   if ((i1 | 0) != 0) {
    if (!(__ZNK7WebCore10RenderView15usesCompositingEv(i1) | 0)) {
     break;
    }
    __ZN7WebCore21RenderLayerCompositor18frameViewDidScrollEv(__ZN7WebCore10RenderView10compositorEv(i1) | 0);
   }
  } while (0);
  i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + 84 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 472 >> 2] & 63](i1);
  i9 = 1;
  STACKTOP = i3;
  return i9 | 0;
 }
 return 0;
}
function __ZNK7WebCore9FrameView27windowClipRectForFrameOwnerEPKNS_21HTMLFrameOwnerElementEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 80 | 0;
 i12 = i5 + 96 | 0;
 i13 = (HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0;
 i14 = i3 + 32 | 0;
 if (i13) {
  i15 = i14 | 0;
 } else {
  i15 = HEAP32[i14 >> 2] | 0;
 }
 if ((HEAP32[i15 >> 2] | 0) == 0) {
  __ZNK7WebCore9FrameView14windowClipRectEb(i1, i2, 1);
  STACKTOP = i5;
  return;
 }
 if (i13) {
  i16 = i14 | 0;
 } else {
  i16 = HEAP32[i14 >> 2] | 0;
 }
 i14 = __ZNK7WebCore12RenderObject14enclosingLayerEv(HEAP32[i16 >> 2] | 0) | 0;
 if ((i14 | 0) == 0) {
  __ZNK7WebCore9FrameView14windowClipRectEb(i1, i2, 1);
  STACKTOP = i5;
  return;
 }
 i16 = i6;
 _memset(i16 | 0, 0, 16) | 0;
 if (i4) {
  __ZNK7WebCore11RenderLayer16childrenClipRectEv(i8, i14);
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i7, i8);
  i8 = i7;
  HEAP32[i16 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i16 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  HEAP32[i16 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
  HEAP32[i16 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 } else {
  __ZNK7WebCore11RenderLayer12selfClipRectEv(i10, i14);
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i9, i10);
  i10 = i9;
  HEAP32[i16 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i16 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i16 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i16 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 }
 __ZNK7WebCore10ScrollView16contentsToWindowERKNS_7IntRectE(i11, i2 | 0, i6);
 i6 = i11;
 HEAP32[i16 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i16 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i16 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i16 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 __ZNK7WebCore9FrameView14windowClipRectEb(i12, i2, 1);
 i2 = i1;
 HEAP32[i2 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
 __ZN7WebCore7IntRect9intersectERKS0_(i1, i12);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9FrameView21addTrackedRepaintRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 if ((HEAP8[i1 + 528 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 i6 = i5;
 i7 = i2;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 i7 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 63](i4, i1 | 0, 0);
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - (HEAP32[i7 >> 2] | 0);
 i7 = i5 + 4 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - i4;
 i4 = i1 + 532 | 0;
 i7 = i1 + 540 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) != (HEAP32[i1 + 536 >> 2] | 0)) {
  i1 = (HEAP32[i4 >> 2] | 0) + (i2 << 4) | 0;
  HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  STACKTOP = i3;
  return;
 }
 i6 = i2 + 1 | 0;
 i1 = i4 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i5 >>> 0) {
   i9 = 8;
  } else {
   if ((i8 + (i2 << 4) | 0) >>> 0 <= i5 >>> 0) {
    i9 = 8;
    break;
   }
   __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i6);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i5 - i8 >> 4 << 4) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 8) {
  __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i6);
  i11 = i5;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i12 + (HEAP32[i7 >> 2] << 4) | 0;
 i12 = i11;
 HEAP32[i1 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView14scrollToAnchorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 + 596 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i6 + 8 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i8 = i6 + 12 | 0;
 i9 = i6 + 32 | 0;
 if ((HEAP32[i8 >> 2] & 2048 | 0) == 0) {
  i10 = i9 | 0;
 } else {
  i10 = HEAP32[i9 >> 2] | 0;
 }
 do {
  if ((HEAP32[i10 >> 2] | 0) != 0) {
   i11 = i3;
   _memset(i11 | 0, 0, 16) | 0;
   i12 = i1 + 216 | 0;
   if ((i6 | 0) != (HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0)) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 156 >> 2] & 127](i4, i6);
    i13 = i4;
    HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i11 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
    HEAP32[i11 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
    HEAP32[i11 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   }
   if ((HEAP32[i8 >> 2] & 2048 | 0) == 0) {
    i14 = i9 | 0;
   } else {
    i14 = HEAP32[i9 >> 2] | 0;
   }
   __ZN7WebCore12RenderObject19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(HEAP32[i14 >> 2] | 0, i3, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, __ZN7WebCore15ScrollAlignment14alignTopAlwaysE) | 0;
   __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0) | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i12 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = i12 + 8 | 0;
   i12 = i13 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i5 = i6 + 8 | 0;
 i6 = i5 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) >= 1) {
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
function __ZN7WebCore9FrameView25addEmbeddedObjectToUpdateERNS_20RenderEmbeddedObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i1 + 212 | 0;
 i1 = i8 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  i9 = __ZN3WTF10fastMallocEj(32) | 0;
  _memset(i9 | 0, 0, 28) | 0;
  i10 = __Znwj(3080) | 0;
  i11 = i10 + 8 | 0;
  HEAP32[i10 >> 2] = i11;
  HEAP8[i10 + 4 | 0] = 0;
  _memset(i11 | 0, 0, 3072) | 0;
  HEAP32[i9 + 28 >> 2] = i10;
  HEAP32[i6 >> 2] = i9;
  __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE(i8, i6) | 0;
  __ZN3WTF10PassOwnPtrINS_11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS4_EEEEED2Ev(i6);
 }
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 i8 = HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0;
 if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i12 = 5;
 } else {
  if ((i8 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 >> 2] | 0)) {
   i12 = 5;
  }
 }
 do {
  if ((i12 | 0) == 5) {
   if ((HEAP8[i6 + 350 | 0] & 1) != 0) {
    break;
   }
   HEAP8[i6 + 204 | 0] = 1;
  }
 } while (0);
 i6 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i5 >> 2] = HEAP32[i6 + 28 >> 2];
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i4, i6 | 0, i7, i5);
 if ((HEAP8[i4 + 8 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
 i4 = i6 + 24 | 0;
 HEAP32[i5 + 4 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 8 >> 2] = 0;
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i6 + 20 >> 2] = i5;
 } else {
  HEAP32[i7 + 8 >> 2] = i5;
 }
 HEAP32[i4 >> 2] = i5;
 STACKTOP = i3;
 return;
}
function __ZN3WTF11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS3_EEE6removeENS_19ListHashSetIteratorIS3_Lj256ES5_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i2 = i1 | 0;
 HEAP32[i5 >> 2] = i6;
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E4findERKS6_(i4, i2, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 i4 = i1 + 4 | 0;
 do {
  if ((i5 | 0) != ((HEAP32[i1 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) | 0)) {
   HEAP32[i5 >> 2] = -1;
   i8 = i1 + 16 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = i1 + 12 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   i8 = HEAP32[i4 >> 2] | 0;
   if (!((i9 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i2, (i8 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i2 = i6 + 4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i6 + 8 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 + 20 >> 2] = i8;
 } else {
  HEAP32[i4 + 8 >> 2] = i8;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 + 24 >> 2] = i4;
 } else {
  HEAP32[i8 + 4 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = i4 + 8 | 0;
 do {
  if (i1 >>> 0 <= i6 >>> 0) {
   if ((i1 + 3072 | 0) >>> 0 <= i6 >>> 0) {
    break;
   }
   i8 = i4 | 0;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i6;
   i7 = 1;
   STACKTOP = i3;
   return i7 | 0;
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i6);
 i7 = 1;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore9FrameView5resetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP8[i1 + 226 | 0] = 0;
 HEAP8[i1 + 227 | 0] = 0;
 HEAP8[i1 + 228 | 0] = 0;
 HEAP32[i1 + 232 >> 2] = 30;
 HEAP32[i1 + 236 >> 2] = 30;
 __ZN7WebCore9TimerBase4stopEv(i1 + 240 | 0);
 HEAP32[i1 + 300 >> 2] = 0;
 HEAP8[i1 + 296 | 0] = 0;
 HEAP8[i1 + 224 | 0] = 1;
 HEAP8[i1 + 308 | 0] = 1;
 HEAP32[i1 + 304 >> 2] = 0;
 HEAP8[i1 + 309 | 0] = 0;
 HEAP32[i1 + 312 >> 2] = 0;
 HEAP32[i1 + 316 >> 2] = 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 320 | 0);
 HEAP8[i1 + 377 | 0] = 1;
 HEAP8[i1 + 376 | 0] = 0;
 HEAP8[i1 + 432 | 0] = 0;
 HEAP8[i1 + 434 | 0] = 1;
 i2 = i1 + 388 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAPF32[i1 + 396 >> 2] = +1;
 HEAP32[i1 + 436 >> 2] = 0;
 HEAP32[i1 + 440 >> 2] = 0;
 i2 = i1 + 448 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i3 = i1 + 452 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i1 + 444 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   HEAP32[i3 >> 2] = 0;
   HEAP32[i2 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 HEAPF64[i1 + 512 >> 3] = +HEAPF64[H_BASE + 768 >> 3];
 __ZN7WebCore9TimerBase4stopEv(i1 + 456 | 0);
 HEAP8[i1 + 528 | 0] = 0;
 i2 = i1 + 536 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i4 = i1 + 540 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i1 + 532 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   HEAP32[i4 >> 2] = 0;
   HEAP32[i2 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 HEAPF64[i1 + 520 >> 3] = +0;
 HEAP32[i1 + 576 >> 2] = 0;
 HEAP8[i1 + 580 | 0] = 0;
 HEAP32[i1 + 584 >> 2] = 0;
 HEAP32[i1 + 588 >> 2] = 0;
 HEAP8[i1 + 592 | 0] = 0;
 HEAP8[i1 + 593 | 0] = 1;
 i2 = i1 + 596 | 0;
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
function __ZN7WebCore9FrameView26adjustPageHeightDeprecatedEPffff(i1, i2, d3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 136 | 0;
 i10 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i10 | 0) == 0) {
  HEAPF32[i2 >> 2] = d4;
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore15GraphicsContextC1EPNS_20PlatformContextCairoE(i8, 0);
 HEAP32[i10 + 148 >> 2] = ~~+Math_floor(d4);
 i1 = i10 + 144 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i10 + 152 >> 2] = 0;
 HEAP8[i10 + 172 | 0] = 0;
 i11 = ~~+Math_floor(d3);
 i12 = i10 | 0;
 i13 = HEAP32[i10 + 88 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = i10 | 0;
  i15 = i10;
  i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 744 >> 2] & 127](i14) | 0;
  FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 736 >> 2] & 127](i14) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i7, i12);
  __ZNK7WebCore9RenderBox12clientHeightEv(i6 + 8 | 0, i12);
  i17 = i16;
  i18 = HEAP32[i7 >> 2] | 0;
 } else {
  i17 = HEAP32[i13 + 4 >> 2] | 0;
  i18 = HEAP32[i13 + 12 >> 2] | 0;
 }
 i13 = i17 + i18 | 0;
 i18 = ~~+Math_ceil(d4 - d3);
 i17 = i10 + 156 | 0;
 i7 = i17;
 i16 = i17;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i16 + 4 >> 2] = i11;
 i16 = i10 + 164 | 0;
 HEAP32[i16 >> 2] = i13;
 HEAP32[i16 + 4 >> 2] = i18;
 i16 = HEAP32[i10 + 40 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = i11;
 HEAP32[i9 + 8 >> 2] = i13;
 HEAP32[i9 + 12 >> 2] = i18;
 __ZN7WebCore11RenderLayer5paintEPNS_15GraphicsContextERKNS_10LayoutRectEjPNS_12RenderObjectEPNS_12RenderRegionEj(i16, i8, i9, 0, 0, 0, 0);
 d3 = +(HEAP32[i1 >> 2] | 0);
 HEAPF32[i2 >> 2] = d3 != +0 ? d3 : d4;
 i2 = i6 + 152 | 0;
 _memset(i2 | 0, 0, 16) | 0;
 HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 __ZN7WebCore15GraphicsContextD1Ev(i8);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore9FrameView20addSlowRepaintObjectEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 220 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = __ZN3WTF10fastMallocEj(20) | 0;
   i8 = i7;
   _memset(i7 | 0, 0, 20) | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i8;
   if ((i7 | 0) == 0) {
    i9 = i8;
   } else {
    i8 = HEAP32[i7 >> 2] | 0;
    if ((i8 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i8);
    }
    __ZN3WTF8fastFreeEPv(i7);
    i9 = HEAP32[i2 >> 2] | 0;
   }
   __ZN3WTF9HashTableIPN7WebCore13RenderElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i5, i9 | 0, i4, i4);
  } else {
   i7 = (HEAP32[i6 + 12 >> 2] | 0) == 0;
   __ZN3WTF9HashTableIPN7WebCore13RenderElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i5, i6 | 0, i4, i4);
   if (i7) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i4 = i1 + 216 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 while (1) {
  i5 = HEAP32[i6 + 452 >> 2] | 0;
  if ((i5 | 0) != 0) {
   __ZN7WebCore10ScrollView18setCanBlitOnScrollEb(i5 | 0, (__ZNK7WebCore9FrameView15useSlowRepaintsEb(i5, 1) | 0) ^ 1);
  }
  i6 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i6 + 40 | 0, HEAP32[i4 >> 2] | 0) | 0;
  if ((i6 | 0) == 0) {
   break;
  }
 }
 i6 = HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = __ZN7WebCore4Page20scrollingCoordinatorEv(i6) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore20ScrollingCoordinator39frameViewHasSlowRepaintObjectsDidChangeEPNS_9FrameViewE(i4, i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView20updateEmbeddedObjectERNS_20RenderEmbeddedObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP8[i2 + 128 | 0] & 1) != 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 124 >> 2] & 127](i2 | 0) | 0) {
  i4 = HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0;
  do {
   if ((i4 | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0)) {
    if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    return;
   }
  } while (0);
  __ZN7WebCore22HTMLPlugInImageElement19checkSnapshotStatusEv(i3);
  return;
 }
 i4 = HEAP32[i2 + 104 >> 2] | 0;
 i2 = (i4 | 0) == 0;
 if (!i2) {
  i5 = i4 | 0;
  tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue + 1, tempValue;
 }
 i5 = HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0;
 do {
  if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0) + 12 >> 2] | 0)) {
   i6 = 11;
  } else {
   if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i6 = 11;
    break;
   }
   if ((i5 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9appletTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i6 = 11;
   } else {
    i6 = 15;
   }
  }
 } while (0);
 do {
  if ((i6 | 0) == 11) {
   i5 = i3;
   if ((HEAP8[i5 + 350 | 0] & 1) != 0) {
    __ZN7WebCore22HTMLPlugInImageElement19checkSnapshotStatusEv(i5);
    break;
   }
   if ((HEAP8[i3 + 204 | 0] & 1) == 0) {
    i6 = 15;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 640 >> 2] & 127](i5, 0);
   i6 = 15;
  }
 } while (0);
 do {
  if ((i6 | 0) == 15) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderWidget20updateWidgetPositionEv(i1);
  }
 } while (0);
 if (i2) {
  return;
 }
 i2 = i4 | 0;
 if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZNK7WebCore9FrameView19hasCustomScrollbarsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 i4 = i2 + (i3 << 2) | 0;
 if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 L4 : do {
  if ((i3 | 0) == 0) {
   i6 = i2;
  } else {
   i1 = i2;
   while (1) {
    i7 = HEAP32[i1 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i1;
     break L4;
    }
    i7 = i1 + 4 | 0;
    if ((i7 | 0) == (i4 | 0)) {
     i5 = 0;
     break;
    } else {
     i1 = i7;
    }
   }
   return i5 | 0;
  }
 } while (0);
 if ((i6 | 0) == (i4 | 0)) {
  i5 = 0;
  return i5 | 0;
 } else {
  i8 = i6;
 }
 L12 : while (1) {
  i6 = i8 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 127](i2) | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  do {
   if (i3) {
    if (__ZNK7WebCore9FrameView19hasCustomScrollbarsEv(i2) | 0) {
     i5 = 1;
     i9 = 22;
     break L12;
    }
   } else {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 127](i2) | 0)) {
     break;
    }
    i1 = HEAP32[i6 >> 2] | 0;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 152 >> 2] & 127](i1) | 0) {
     i5 = 1;
     i9 = 18;
     break L12;
    }
   }
  } while (0);
  i6 = i8 + 4 | 0;
  if ((i6 | 0) == (i4 | 0)) {
   i5 = 0;
   i9 = 21;
   break;
  } else {
   i10 = i6;
  }
  while (1) {
   i6 = HEAP32[i10 >> 2] | 0;
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    break;
   }
   i6 = i10 + 4 | 0;
   if ((i6 | 0) == (i4 | 0)) {
    i5 = 0;
    i9 = 16;
    break L12;
   } else {
    i10 = i6;
   }
  }
  if ((i10 | 0) == (i4 | 0)) {
   i5 = 0;
   i9 = 15;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 18) {
  return i5 | 0;
 } else if ((i9 | 0) == 21) {
  return i5 | 0;
 } else if ((i9 | 0) == 22) {
  return i5 | 0;
 } else if ((i9 | 0) == 16) {
  return i5 | 0;
 } else if ((i9 | 0) == 15) {
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore9FrameView23convertToContainingViewERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = i1;
  i10 = i3;
  HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  STACKTOP = i4;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] & 127](i8 | 0) | 0)) {
  __ZNK7WebCore6Widget23convertToContainingViewERKNS_7IntRectE(i1, i2 | 0, i3);
  STACKTOP = i4;
  return;
 }
 i10 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i2 + 216 >> 2] | 0) | 0;
 if ((i10 | 0) == 0) {
  i2 = i1;
  i9 = i3;
  HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  STACKTOP = i4;
  return;
 } else {
  i9 = i5;
  i2 = i3;
  HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
  i2 = i10 | 0;
  i9 = i10;
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 127](i2) | 0;
  i11 = i10;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 712 >> 2] & 127](i6, i2);
  i12 = (HEAP32[i6 >> 2] | 0) + i3 | 0;
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 736 >> 2] & 127](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 704 >> 2] & 127](i7, i2);
  i2 = (HEAP32[i7 >> 2] | 0) + i3 | 0;
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = i12 + (HEAP32[i3 >> 2] | 0);
  i3 = i5 + 4 | 0;
  HEAP32[i3 >> 2] = i2 + (HEAP32[i3 >> 2] | 0);
  __ZNK7WebCore9FrameView19convertFromRendererEPKNS_13RenderElementERKNS_7IntRectE(i1, i8, i10 | 0, i5);
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF7HashSetIPN7WebCore14ScrollableAreaENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore14ScrollableAreaES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore13RenderElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore13RenderElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZNK7WebCore9FrameView25convertFromContainingViewERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = i1;
  i10 = i3;
  HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  STACKTOP = i4;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] & 127](i8 | 0) | 0)) {
  __ZNK7WebCore6Widget25convertFromContainingViewERKNS_7IntRectE(i1, i2 | 0, i3);
  STACKTOP = i4;
  return;
 }
 i10 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i2 + 216 >> 2] | 0) | 0;
 if ((i10 | 0) == 0) {
  i2 = i1;
  i9 = i3;
  HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  STACKTOP = i4;
  return;
 } else {
  __ZNK7WebCore9FrameView17convertToRendererEPKNS_13RenderElementERKNS_7IntRectE(i5, i8, i10 | 0, i3);
  i3 = i10 | 0;
  i8 = i10;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 744 >> 2] & 127](i3) | 0;
  i2 = i10;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i6, i3);
  i10 = (HEAP32[i6 >> 2] | 0) + i9 | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 736 >> 2] & 127](i3) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i7, i3);
  i3 = (HEAP32[i7 >> 2] | 0) + i9 | 0;
  i9 = i5 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - i10;
  i10 = i5 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - i3;
  i3 = i1;
  i1 = i5;
  HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
  HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
  HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore9FrameView20updateOverflowStatusEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 412 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i1 + 408 | 0;
 i9 = i1 + 409 | 0;
 if ((HEAP8[i8] & 1) != 0) {
  HEAP8[i9] = i2 & 1;
  HEAP8[i1 + 410 | 0] = i3 & 1;
  HEAP8[i8] = 0;
  STACKTOP = i4;
  return;
 }
 i8 = (HEAP8[i9] & 1 | 0) != (i2 & 1 | 0);
 i10 = i1 + 410 | 0;
 i11 = (HEAP8[i10] & 1 | 0) != (i3 & 1 | 0);
 if (!(i8 | i11)) {
  STACKTOP = i4;
  return;
 }
 HEAP8[i9] = i2 & 1;
 HEAP8[i10] = i3 & 1;
 i10 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore13OverflowEventC1Ebbbb(i10, i8, i2, i11, i3);
 i3 = i10;
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP32[i10 + 20 >> 2] & 128 | 0) == 0) {
   i7 = HEAP32[i10 + 4 >> 2] | 0;
   i11 = i7 | 0;
   i2 = i5 | 0;
   HEAP32[i2 >> 2] = i11;
   if ((i7 | 0) == 0) {
    i12 = i2;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 56 >> 2] & 63](i11);
   i12 = i2;
  } else {
   i2 = i5 | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i2;
  }
 } while (0);
 __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i3, i5);
 i5 = HEAP32[i12 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 63](i5);
 }
 i5 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 456 >> 2] | 0;
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = i3;
 __ZN7WebCore8Document20enqueueOverflowEventEN3WTF10PassRefPtrINS_5EventEEE(i5, i6);
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i6 + 8 | 0;
 i6 = i1 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
 i5 = i1 - 8 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 STACKTOP = i4;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore6WidgetENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore6WidgetES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore9FrameView30graphicsLayerForPlatformWidgetEPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i1 + 76 >> 2] | 0;
 i4 = HEAP32[i1 + 80 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 L4 : do {
  if ((i4 | 0) == 0) {
   i7 = i3;
  } else {
   i1 = i3;
   while (1) {
    i8 = HEAP32[i1 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i7 = i1;
     break L4;
    }
    i8 = i1 + 4 | 0;
    if ((i8 | 0) == (i5 | 0)) {
     i6 = 0;
     break;
    } else {
     i1 = i8;
    }
   }
   return i6 | 0;
  }
 } while (0);
 if ((i7 | 0) == (i5 | 0)) {
  i6 = 0;
  return i6 | 0;
 } else {
  i9 = i7;
 }
 L12 : while (1) {
  i10 = HEAP32[i9 >> 2] | 0;
  if ((HEAP32[i10 + 12 >> 2] | 0) == (i2 | 0)) {
   i11 = 11;
   break;
  }
  i7 = i9 + 4 | 0;
  if ((i7 | 0) == (i5 | 0)) {
   i6 = 0;
   i11 = 19;
   break;
  } else {
   i12 = i7;
  }
  while (1) {
   i7 = HEAP32[i12 >> 2] | 0;
   if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
    break;
   }
   i7 = i12 + 4 | 0;
   if ((i7 | 0) == (i5 | 0)) {
    i6 = 0;
    i11 = 25;
    break L12;
   } else {
    i12 = i7;
   }
  }
  if ((i12 | 0) == (i5 | 0)) {
   i6 = 0;
   i11 = 22;
   break;
  } else {
   i9 = i12;
  }
 }
 if ((i11 | 0) == 25) {
  return i6 | 0;
 } else if ((i11 | 0) == 22) {
  return i6 | 0;
 } else if ((i11 | 0) == 11) {
  if ((i10 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  i12 = __ZN7WebCore12RenderWidget4findEPKNS_6WidgetE(i10) | 0;
  if ((i12 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  i10 = HEAP32[i12 + 40 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  i12 = HEAP32[i10 + 208 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  i6 = __ZNK7WebCore18RenderLayerBacking18parentForSublayersEv(i12) | 0;
  return i6 | 0;
 } else if ((i11 | 0) == 19) {
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore9FrameView21updateWidgetPositionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i3 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF12copyToVectorINS_7HashSetIPN7WebCore6WidgetENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEEENS_6VectorINS_6RefPtrIS3_EELj0ENS_15CrashOnOverflowEEEEEvRKT_RT0_(i1 + 176 | 0, i3);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i7 = 9;
  } else {
   i1 = HEAP32[i4 >> 2] | 0;
   i8 = 0;
   while (1) {
    if (i3 >>> 0 <= i8 >>> 0) {
     i7 = 4;
     break;
    }
    i9 = __ZN7WebCore12RenderWidget4findEPKNS_6WidgetE(HEAP32[i1 + (i8 << 2) >> 2] | 0) | 0;
    if ((i9 | 0) != 0) {
     __ZN7WebCore12RenderWidget20updateWidgetPositionEv(i9);
    }
    i8 = i8 + 1 | 0;
    if (i8 >>> 0 >= i3 >>> 0) {
     break;
    }
   }
   if ((i7 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i3 | 0) == 0) {
    i7 = 9;
    break;
   }
   i8 = HEAP32[i4 >> 2] | 0;
   i1 = i8 + (i3 << 2) | 0;
   i9 = i8;
   while (1) {
    i10 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i11 = i10 + 4 | 0;
      i12 = i11 | 0;
      i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
      if ((i13 | 0) != 0) {
       HEAP32[i12 >> 2] = i13;
       break;
      }
      i13 = i11 - 4 | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i1 | 0)) {
     break;
    }
   }
   HEAP32[i6 >> 2] = 0;
   i14 = i8;
  }
 } while (0);
 if ((i7 | 0) == 9) {
  i14 = HEAP32[i4 >> 2] | 0;
 }
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9FrameView13notifyWidgetsENS_18WidgetNotificationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF12copyToVectorINS_7HashSetIPN7WebCore6WidgetENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEEENS_6VectorINS_6RefPtrIS3_EELj0ENS_15CrashOnOverflowEEEEEvRKT_RT0_(i1 + 176 | 0, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i8 = 7;
  } else {
   i1 = HEAP32[i5 >> 2] | 0;
   i9 = 0;
   while (1) {
    if (i4 >>> 0 <= i9 >>> 0) {
     i8 = 4;
     break;
    }
    i10 = HEAP32[i1 + (i9 << 2) >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 64 >> 2] & 127](i10, i2);
    i9 = i9 + 1 | 0;
    if (i9 >>> 0 >= i4 >>> 0) {
     break;
    }
   }
   if ((i8 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i4 | 0) == 0) {
    i8 = 7;
    break;
   }
   i9 = HEAP32[i5 >> 2] | 0;
   i1 = i9 + (i4 << 2) | 0;
   i10 = i9;
   while (1) {
    i11 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i12 = i11 + 4 | 0;
      i13 = i12 | 0;
      i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      if ((i14 | 0) != 0) {
       HEAP32[i13 >> 2] = i14;
       break;
      }
      i14 = i12 - 4 | 0;
      if ((i14 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
     }
    } while (0);
    i10 = i10 + 4 | 0;
    if ((i10 | 0) == (i1 | 0)) {
     break;
    }
   }
   HEAP32[i7 >> 2] = 0;
   i15 = i9;
  }
 } while (0);
 if ((i8 | 0) == 7) {
  i15 = HEAP32[i5 >> 2] | 0;
 }
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9FrameView25convertFromContainingViewERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = i3;
  i11 = i1;
  i12 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i11 + 4 >> 2] = i12;
  STACKTOP = i4;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] & 127](i9 | 0) | 0)) {
  __ZNK7WebCore6Widget25convertFromContainingViewERKNS_8IntPointE(i1, i2 | 0, i3);
  STACKTOP = i4;
  return;
 }
 i12 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i2 + 216 >> 2] | 0) | 0;
 if ((i12 | 0) == 0) {
  i2 = i3;
  i11 = i1;
  i10 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i11 + 4 >> 2] = i10;
  STACKTOP = i4;
  return;
 } else {
  __ZNK7WebCore9FrameView17convertToRendererEPKNS_13RenderElementERKNS_8IntPointE(i6, i9, i12 | 0, i3);
  i3 = i12 | 0;
  i9 = i12;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 127](i3) | 0;
  i11 = i12;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 712 >> 2] & 127](i7, i3);
  i12 = (HEAP32[i7 >> 2] | 0) + i10 | 0;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 736 >> 2] & 127](i3) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 704 >> 2] & 127](i8, i3);
  i3 = (HEAP32[i8 >> 2] | 0) + i10 | 0;
  i10 = i5;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - i12;
  i12 = i6 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - i3;
  i3 = i1;
  i1 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i3 + 4 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore9FrameView34startLayoutAtMainFrameViewIfNeededEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 i3 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i1 + 216 >> 2] | 0) + 40 | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 452 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 316 >> 2] | 0) != 0) {
  return;
 }
 i3 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 do {
  if (+HEAPF64[i1 + 248 >> 3] == +0) {
   if ((i3 | 0) != 0) {
    if ((HEAP32[i3 + 20 >> 2] & 31 | 0) != 0) {
     break;
    }
   }
   if ((HEAP32[i1 + 300 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i1 + 564 >> 2] | 0) == 0) {
    return;
   }
   if ((HEAP8[i1 + 568 | 0] & 1) != 0) {
    break;
   }
   return;
  }
 } while (0);
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  i4 = i1;
  __ZN7WebCore9FrameView6layoutEb(i4, i2);
  return;
 } else {
  i5 = i1;
  i6 = i3;
 }
 while (1) {
  i3 = i5 + 216 | 0;
  i1 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i3 >> 2] | 0) + 40 | 0) | 0;
  if ((i1 | 0) == 0) {
   i4 = i5;
   i7 = 21;
   break;
  }
  if ((HEAP32[i1 + 452 >> 2] | 0) == 0) {
   i4 = i5;
   i7 = 22;
   break;
  }
  do {
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    i8 = 0;
   } else {
    i1 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i3 >> 2] | 0) + 40 | 0) | 0;
    if ((i1 | 0) == 0) {
     i8 = 0;
     break;
    }
    i8 = HEAP32[i1 + 452 >> 2] | 0;
   }
  } while (0);
  i3 = i8 + 8 | 0;
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i4 = i8;
   i7 = 23;
   break;
  } else {
   i5 = i8;
   i6 = i3;
  }
 }
 if ((i7 | 0) == 21) {
  __ZN7WebCore9FrameView6layoutEb(i4, i2);
  return;
 } else if ((i7 | 0) == 22) {
  __ZN7WebCore9FrameView6layoutEb(i4, i2);
  return;
 } else if ((i7 | 0) == 23) {
  __ZN7WebCore9FrameView6layoutEb(i4, i2);
  return;
 }
}
function __ZN3WTF11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS3_EEE9takeFirstEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = i1 + 20 | 0;
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E4findERKS6_(i3, i4, i5);
 i6 = HEAP32[HEAP32[HEAP32[i3 >> 2] >> 2] >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i3 = i1 + 4 | 0;
 do {
  if ((i7 | 0) != ((HEAP32[i1 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) | 0)) {
   HEAP32[i7 >> 2] = -1;
   i8 = i1 + 16 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = i1 + 12 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   i8 = HEAP32[i3 >> 2] | 0;
   if (!((i9 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i4, (i8 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 i3 = i4 + 4 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i4 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i5 >> 2] = i9;
 } else {
  HEAP32[i7 + 8 >> 2] = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i1 + 24 >> 2] = i7;
 } else {
  HEAP32[i9 + 4 >> 2] = i7;
 }
 i7 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = i7 + 8 | 0;
 do {
  if (i1 >>> 0 <= i4 >>> 0) {
   if ((i1 + 3072 | 0) >>> 0 <= i4 >>> 0) {
    break;
   }
   i9 = i7 | 0;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i4;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore9FrameView23convertToContainingViewERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = i3;
  i11 = i1;
  i12 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i11 + 4 >> 2] = i12;
  STACKTOP = i4;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] & 127](i9 | 0) | 0)) {
  __ZNK7WebCore6Widget23convertToContainingViewERKNS_8IntPointE(i1, i2 | 0, i3);
  STACKTOP = i4;
  return;
 }
 i12 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i2 + 216 >> 2] | 0) | 0;
 i2 = i3;
 if ((i12 | 0) == 0) {
  i3 = i1;
  i11 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i3 + 4 >> 2] = i11;
  STACKTOP = i4;
  return;
 } else {
  i11 = HEAP32[i2 >> 2] | 0;
  i3 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = i11;
  HEAP32[i5 + 4 >> 2] = i3;
  i2 = i12 | 0;
  i10 = i12;
  i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 744 >> 2] & 127](i2) | 0;
  i14 = i12;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 712 >> 2] & 127](i7, i2);
  i15 = (HEAP32[i7 >> 2] | 0) + i13 | 0;
  i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 736 >> 2] & 127](i2) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 704 >> 2] & 127](i8, i2);
  i2 = (HEAP32[i8 >> 2] | 0) + i13 | 0;
  HEAP32[i5 >> 2] = i15 + i11;
  HEAP32[i6 + 4 >> 2] = i2 + i3;
  __ZNK7WebCore9FrameView19convertFromRendererEPKNS_13RenderElementERKNS_8IntPointE(i1, i9, i12 | 0, i6);
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore9FrameView19convertFromRendererEPKNS_13RenderElementERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0, d20 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i14, i4);
 i4 = HEAP32[i13 >> 2] | 0;
 i16 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i4;
 HEAP32[i10 + 4 >> 2] = i16;
 d17 = (HEAP32[tempDoublePtr >> 2] = i4, +HEAPF32[tempDoublePtr >> 2]);
 d18 = d17 + +HEAPF32[i12 + 8 >> 2];
 d19 = +HEAPF32[i14 + 4 >> 2];
 HEAPF32[i9 + 8 >> 2] = d18;
 HEAPF32[i11 + 12 >> 2] = d19;
 d20 = d19 + +HEAPF32[i14 + 12 >> 2];
 HEAPF32[i9 + 16 >> 2] = d18;
 HEAPF32[i11 + 20 >> 2] = d20;
 HEAPF32[i9 + 24 >> 2] = d17;
 HEAPF32[i11 + 28 >> 2] = d20;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i15, i3 | 0, i11, 0, 0, 0);
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i8, i15);
 __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i7, i8);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i1, i7);
 if ((HEAP8[i2 + 172 | 0] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 i7 = i6 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 63](i6, i2 | 0, 0);
 i6 = (HEAP32[i2 + 644 >> 2] | 0) - (HEAP32[i7 + 4 >> 2] | 0) | 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - (HEAP32[i7 >> 2] | 0);
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = i6 + (HEAP32[i7 >> 2] | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9FrameView12isScrollableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i3, i1 + 36 | 0);
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i4, i1 | 0, 0);
 i7 = i4 + 8 | 0;
 do {
  if ((HEAP32[i3 + 4 >> 2] | 0) <= (HEAP32[i7 + 4 >> 2] | 0)) {
   if ((HEAP32[i3 >> 2] | 0) > (HEAP32[i7 >> 2] | 0)) {
    break;
   } else {
    i8 = 0;
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 i7 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 448 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = (HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0;
   i4 = i7 + 32 | 0;
   if (i3) {
    i9 = i4 | 0;
   } else {
    i9 = HEAP32[i4 >> 2] | 0;
   }
   if ((HEAP32[i9 >> 2] | 0) == 0) {
    i8 = 0;
    STACKTOP = i2;
    return i8 | 0;
   }
   if (i3) {
    i10 = i4 | 0;
   } else {
    i10 = HEAP32[i4 >> 2] | 0;
   }
   i4 = (HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] | 0) + 40 | 0;
   if ((HEAP32[i4 >> 2] & 6144 | 0) != 0) {
    i8 = 0;
    STACKTOP = i2;
    return i8 | 0;
   }
   if ((HEAP32[i4 + 4 >> 2] & 1920 | 0) == 0) {
    i8 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 __ZN7WebCore9FrameView32calculateScrollbarModesForLayoutERNS_13ScrollbarModeES2_NS0_33ScrollbarModesCalculationStrategyE(i1, i5, i6, 0);
 do {
  if ((HEAP32[i5 >> 2] | 0) == 1) {
   if ((HEAP32[i6 >> 2] | 0) == 1) {
    i8 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 i8 = 1;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore9FrameView4initEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore9FrameView5resetEv(i1);
 i2 = i1 + 204 | 0;
 HEAP32[i2 >> 2] = -1;
 HEAP32[i2 + 4 >> 2] = -1;
 i2 = i1 + 196 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 216 | 0;
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 448 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 + 44 >> 2] | 0;
   i5 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
   do {
    if ((i4 | 0) != (i5 | 0)) {
     i6 = HEAP32[i4 + 12 >> 2] | 0;
     if ((i6 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
      if ((HEAP32[i4 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
       break;
      }
     }
     i7 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
     if ((i4 | 0) == (i7 | 0)) {
      break;
     }
     if ((i6 | 0) != (HEAP32[i7 + 12 >> 2] | 0)) {
      break L1;
     }
     if ((HEAP32[i4 + 16 >> 2] | 0) != (HEAP32[i7 + 16 >> 2] | 0)) {
      break L1;
     }
    }
   } while (0);
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 604 >> 2] & 127](i3) | 0) == 1) {
    HEAP8[i1 + 225 | 0] = 0;
    __ZN7WebCore10ScrollView20setCanHaveScrollbarsEb(i1 | 0, 0);
   }
   i4 = HEAP32[i3 + 72 >> 2] | 0;
   i5 = HEAP32[i3 + 76 >> 2] | 0;
   if ((i4 | 0) != -1) {
    HEAP32[i1 + 204 >> 2] = i4;
   }
   if ((i5 | 0) == -1) {
    break;
   }
   HEAP32[i1 + 208 >> 2] = i5;
  }
 } while (0);
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 292 >> 2] & 127](i2) | 0)) {
  return;
 }
 __ZN7WebCore10ScrollView23setPaintsEntireContentsEb(i1 | 0, 1);
 return;
}
function __ZNK7WebCore9FrameView37viewportConstrainedVisibleContentRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i2 | 0;
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i9, i11, 0);
 i12 = i9 + 8 | 0;
 i9 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i1 + 12 >> 2] = i9;
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i5, i11, 0);
 __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i6, i2 + 36 | 0);
 i9 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 63](i4, i11, 0);
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i7 + 4 >> 2] = i11;
 i11 = i2 + 48 | 0;
 i9 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i8 + 4 >> 2] = i9;
 i9 = i2 + 216 | 0;
 d13 = +__ZNK7WebCore5Frame16frameScaleFactorEv(HEAP32[i9 >> 2] | 0);
 i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] | 0;
 __ZN7WebCore9FrameView28scrollOffsetForFixedPositionERKNS_7IntRectERKNS_7IntSizeERKNS_8IntPointES9_fbNS_30ScrollBehaviorForFixedElementsEii(i10, i5, i6, i7, i8, d13, (HEAP8[i11 + 184 | 0] | 0) < 0, (HEAPU8[i11 + 182 | 0] | 0) >>> 7 & 255, HEAP32[i2 + 644 >> 2] | 0, HEAP32[i2 + 648 >> 2] | 0);
 i2 = i1;
 i1 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9FrameView17convertToRendererEPKNS_13RenderElementERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i1;
 i11 = i4;
 HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 if ((HEAP8[i2 + 172 | 0] & 1) == 0) {
  __ZNK7WebCore10ScrollView32scrollPositionRelativeToDocumentEv(i6, i2 | 0);
  i2 = HEAP32[i6 + 4 >> 2] | 0;
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + (HEAP32[i6 >> 2] | 0);
  i6 = i1 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i2;
 }
 i2 = i1;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i9 + 4 >> 2] = i1;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i8, i9);
 __ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj(i7, i3 | 0, i8, 2);
 d12 = +_round(+(+HEAPF32[i7 >> 2]));
 do {
  if (d12 < +2147483647) {
   if (d12 <= +-2147483648) {
    i13 = 0;
    i14 = -2147483648;
    break;
   }
   i13 = 0;
   i14 = ~~d12;
  } else {
   i13 = 0;
   i14 = 2147483647;
  }
 } while (0);
 d12 = +_round(+(+HEAPF32[i7 + 4 >> 2]));
 do {
  if (d12 < +2147483647) {
   if (d12 <= +-2147483648) {
    i15 = -2147483648;
    i16 = 0;
    break;
   }
   i15 = ~~d12;
   i16 = 0;
  } else {
   i15 = 2147483647;
   i16 = 0;
  }
 } while (0);
 HEAP32[i2 >> 2] = i16 | i14;
 HEAP32[i2 + 4 >> 2] = i15 | i13;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore9FrameView17convertToRendererEPKNS_13RenderElementERKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i4;
 i4 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i6 + 4 >> 2] = i4;
 if ((HEAP8[i2 + 172 | 0] & 1) == 0) {
  __ZNK7WebCore10ScrollView32scrollPositionRelativeToDocumentEv(i8, i2 | 0);
  i2 = (HEAP32[i8 + 4 >> 2] | 0) + (HEAP32[i7 + 4 >> 2] | 0) | 0;
  HEAP32[i6 >> 2] = (HEAP32[i8 >> 2] | 0) + (HEAP32[i6 >> 2] | 0);
  HEAP32[i6 + 4 >> 2] = i2;
 }
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i10, i7);
 __ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj(i9, i3 | 0, i10, 2);
 d12 = +_round(+(+HEAPF32[i9 >> 2]));
 do {
  if (d12 < +2147483647) {
   if (d12 <= +-2147483648) {
    i13 = -2147483648;
    break;
   }
   i13 = ~~d12;
  } else {
   i13 = 2147483647;
  }
 } while (0);
 d12 = +_round(+(+HEAPF32[i9 + 4 >> 2]));
 if (d12 >= +2147483647) {
  i14 = 2147483647;
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i13;
  i16 = i1 + 4 | 0;
  HEAP32[i16 >> 2] = i14;
  STACKTOP = i5;
  return;
 }
 if (d12 <= +-2147483648) {
  i14 = -2147483648;
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i13;
  i16 = i1 + 4 | 0;
  HEAP32[i16 >> 2] = i14;
  STACKTOP = i5;
  return;
 }
 i14 = ~~d12;
 i15 = i1 | 0;
 HEAP32[i15 >> 2] = i13;
 i16 = i1 + 4 | 0;
 HEAP32[i16 >> 2] = i14;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9FrameView18enableAutoSizeModeEbRKNS_7IntSizeES3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1 + 604 | 0;
 do {
  if ((HEAP8[i5] & 1 | 0) == (i2 & 1 | 0)) {
   if ((HEAP32[i1 + 608 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 612 >> 2] | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 616 >> 2] | 0) != (HEAP32[i4 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 620 >> 2] | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 HEAP8[i5] = i2 & 1;
 i2 = i3;
 i3 = i1 + 608 | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = i6;
 i6 = i4;
 i4 = i1 + 616 | 0;
 i3 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i3;
 HEAP8[i1 + 606 | 0] = 0;
 do {
  if ((HEAP32[i1 + 564 >> 2] | 0) == 0) {
   i3 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = i3 | 0;
   i6 = i3 + 20 | 0;
   i3 = HEAP32[i6 >> 2] | 0;
   if ((i3 & 1 | 0) != 0) {
    break;
   }
   HEAP32[i6 >> 2] = i3 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
   if ((HEAP32[i6 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
  } else {
   HEAP8[i1 + 568 | 0] = 1;
  }
 } while (0);
 __ZN7WebCore9FrameView16scheduleRelayoutEv(i1);
 if ((HEAP8[i5] & 1) != 0) {
  return;
 }
 HEAP8[i1 + 73 | 0] = 0;
 HEAP8[i1 + 72 | 0] = 0;
 __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i1 | 0, 0, 0, 0, 0);
 return;
}
function __ZN7WebCore9FrameView23applyOverflowToViewportEPNS_13RenderElementERNS_13ScrollbarModeES4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = HEAP32[i1 + 216 >> 2] | 0;
 do {
  if ((HEAP32[i5 + 28 >> 2] | 0) == (i5 | 0)) {
   if (+__ZNK7WebCore5Frame16frameScaleFactorEv(i5) > +1) {
    i6 = 1;
    break;
   }
   if ((HEAP32[i1 + 644 >> 2] | 0) != 0) {
    i6 = 1;
    break;
   }
   i6 = (HEAP32[i1 + 648 >> 2] | 0) != 0;
  } else {
   i6 = 0;
  }
 } while (0);
 i5 = HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] | 0;
 i7 = i5 >>> 13 & 7;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 324 >> 2] & 127](i2 | 0) | 0) {
   if (__ZNK7WebCore13RenderSVGRoot43isEmbeddedThroughFrameContainingSVGDocumentEv(i2) | 0) {
    i8 = 1;
    i9 = 8;
    break;
   }
   return;
  } else {
   i10 = i5 >>> 10 & 7;
   if ((i10 | 0) == 1) {
    i8 = i7;
    i9 = 8;
    break;
   } else if ((i10 | 0) == 2) {
    HEAP32[i3 >> 2] = 2;
    i11 = i7;
    break;
   } else if ((i10 | 0) == 3) {
    HEAP32[i3 >> 2] = 0;
    i11 = i7;
    break;
   } else {
    i11 = i7;
    break;
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 8) {
   if (i6) {
    HEAP32[i3 >> 2] = 0;
    i11 = i8;
    break;
   } else {
    HEAP32[i3 >> 2] = 1;
    i11 = i8;
    break;
   }
  }
 } while (0);
 do {
  if ((i11 | 0) == 1) {
   if (i6) {
    HEAP32[i4 >> 2] = 0;
    break;
   } else {
    HEAP32[i4 >> 2] = 1;
    break;
   }
  } else if ((i11 | 0) == 2) {
   HEAP32[i4 >> 2] = 2;
  } else if ((i11 | 0) == 3) {
   HEAP32[i4 >> 2] = 0;
  }
 } while (0);
 HEAP32[i1 + 412 >> 2] = i2;
 return;
}
function __ZN7WebCore9FrameView39setViewportConstrainedObjectsNeedLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 640 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) <= 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = i1 + (i3 << 2) | 0;
 L7 : do {
  if ((i3 | 0) == 0) {
   i4 = i1;
  } else {
   i5 = i1;
   while (1) {
    i6 = HEAP32[i5 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i4 = i5;
     break L7;
    }
    i5 = i5 + 4 | 0;
    if ((i5 | 0) == (i2 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i4 | 0) == (i2 | 0)) {
  return;
 } else {
  i7 = i4;
 }
 L15 : while (1) {
  i4 = HEAP32[i7 >> 2] | 0;
  i1 = i4 | 0;
  i3 = i4 + 20 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i4 & 1 | 0) == 0) {
    HEAP32[i3 >> 2] = i4 | 1;
    __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i1, 1, 0);
    if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
     break;
    }
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i1);
   }
  } while (0);
  i1 = i7 + 4 | 0;
  if ((i1 | 0) == (i2 | 0)) {
   i8 = 20;
   break;
  } else {
   i9 = i1;
  }
  while (1) {
   i1 = HEAP32[i9 >> 2] | 0;
   if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
    break;
   }
   i1 = i9 + 4 | 0;
   if ((i1 | 0) == (i2 | 0)) {
    i8 = 15;
    break L15;
   } else {
    i9 = i1;
   }
  }
  if ((i9 | 0) == (i2 | 0)) {
   i8 = 18;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 18) {
  return;
 } else if ((i8 | 0) == 20) {
  return;
 } else if ((i8 | 0) == 15) {
  return;
 }
}
function __ZN3WTF11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS3_EEE4findERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   i6 = i5 << 2 | 0;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = (i10 >>> 23) + ~i10 | 0;
   i11 = i9 << 12 ^ i9;
   i9 = i11 >>> 7 ^ i11;
   i11 = i9 << 2 ^ i9;
   i9 = i11 >>> 20 ^ i11 | 1;
   i11 = i10;
   i10 = 0;
   while (1) {
    i12 = i11 & i5;
    i13 = i4 + (i12 << 2) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    i15 = i14;
    if ((i15 | 0) == 0) {
     i16 = 5;
     break;
    } else if ((i15 | 0) != (-1 | 0)) {
     if ((HEAP32[i14 >> 2] | 0) == (i8 | 0)) {
      i16 = 8;
      break;
     }
    }
    i14 = (i10 | 0) == 0 ? i9 : i10;
    i11 = i14 + i12 | 0;
    i10 = i14;
   }
   if ((i16 | 0) == 8) {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = (i13 | 0) == 0 ? i4 + (i10 << 2) | 0 : i13;
    i7 = i10;
    break;
   } else if ((i16 | 0) == 5) {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = i4 + (i10 << 2) | 0;
    i7 = i10;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == (i4 + (i7 << 2) | 0)) {
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = 0;
  return;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i7;
  return;
 }
}
function __ZNK7WebCore9FrameView21maximumScrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 184 >> 2] & 127](i7, i10);
 i11 = HEAP32[i7 >> 2] | 0;
 i7 = i2;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 164 >> 2] & 63](i6, i10, 0);
 i12 = i11 - (HEAP32[i6 + 8 >> 2] | 0) - (HEAP32[i2 + 48 >> 2] | 0) | 0;
 __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i8, i2 + 36 | 0);
 i6 = HEAP32[i8 + 4 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 164 >> 2] & 63](i5, i10, 0);
 i7 = i6 - (HEAP32[i5 + 12 >> 2] | 0) - (HEAP32[i2 + 52 >> 2] | 0) | 0;
 i5 = i1 + 4 | 0;
 i6 = (i12 | 0) > 0;
 i8 = (i7 | 0) > 0;
 i11 = i1;
 HEAP32[i11 >> 2] = (i8 ? 0 : 0) | (i6 ? i12 : 0);
 HEAP32[i11 + 4 >> 2] = (i8 ? i7 : 0) | (i6 ? 0 : 0);
 i6 = i2 + 216 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i7 + 28 >> 2] | 0) != (i7 | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = i2 + 660 | 0;
 if ((HEAP32[i7 >> 2] | 0) != 1) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore10ScrollView21minimumScrollPositionEv(i9, i10);
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i10 + 28 >> 2] | 0) == (i10 | 0)) {
   if ((HEAP32[i7 >> 2] | 0) != 2) {
    break;
   }
   __ZNK7WebCore9FrameView21maximumScrollPositionEv(i4, i2);
   HEAP32[i9 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
  }
 } while (0);
 HEAP32[i5 >> 2] = HEAP32[i9 + 4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView14setExposedRectENS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0, d8 = +0, i9 = 0, d10 = +0, i11 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 i4 = i1 + 548 | 0;
 i5 = i4;
 d6 = +HEAPF32[i5 >> 2];
 d7 = +HEAPF32[i5 + 4 >> 2];
 i5 = i2;
 d8 = +HEAPF32[i5 >> 2];
 do {
  if (d6 == d8 & d7 == +HEAPF32[i5 + 4 >> 2]) {
   i9 = i1 + 556 | 0;
   d10 = +HEAPF32[i9 >> 2];
   i11 = i2 + 8 | 0;
   if (d10 != +HEAPF32[i11 >> 2]) {
    break;
   }
   d10 = +HEAPF32[i11 + 4 >> 2];
   if (+HEAPF32[i9 + 4 >> 2] != d10) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i5 = i4;
 i4 = i2;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 i4 = HEAP32[i1 + 216 >> 2] | 0;
 if ((HEAP32[i4 + 28 >> 2] | 0) != (i4 | 0)) {
  STACKTOP = i3;
  return;
 }
 i1 = __ZNK7WebCore5Frame15contentRendererEv(i4) | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 284 >> 2] & 127](i1) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 127](i4, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView16scrollToFragmentERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 do {
  if (!(__ZNK7WebCore3URL21hasFragmentIdentifierEv(i2) | 0)) {
   if ((HEAP32[(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 456 >> 2] | 0) + 1240 >> 2] | 0) == 0) {
    i6 = 0;
   } else {
    break;
   }
   STACKTOP = i3;
   return i6 | 0;
  }
 } while (0);
 __ZNK7WebCore3URL18fragmentIdentifierEv(i4, i2);
 do {
  if (__ZN7WebCore9FrameView14scrollToAnchorERKN3WTF6StringE(i1, i4) | 0) {
   i7 = 1;
  } else {
   i2 = HEAP32[(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 456 >> 2] | 0) + 1308 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i7 = 0;
    break;
   }
   __ZN7WebCore24decodeURLEscapeSequencesERKN3WTF6StringERKNS_12TextEncodingE(i5, i4, i2 + 8 | 0);
   i2 = __ZN7WebCore9FrameView14scrollToAnchorERKN3WTF6StringE(i1, i5) | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i7 = i2;
    break;
   }
   i9 = i8 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    i7 = i2;
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i4 >> 2] = i1;
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore9FrameView27updateBackgroundRecursivelyERKNS_5ColorEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 + 216 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i3 & 1;
 i3 = i2 + 4 | 0;
 i11 = i5 + 4 | 0;
 i12 = i5 | 0;
 i13 = i2;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 452 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    HEAP8[i1 + 378 | 0] = i10;
    if ((HEAP8[i3] & 1) == 0) {
     HEAP32[i1 + 380 >> 2] = -1;
     HEAP8[i1 + 384 | 0] = 1;
    } else {
     i14 = i1 + 380 | 0;
     HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
     HEAP8[i14 + 4 | 0] = HEAP8[i13 + 4 | 0] | 0;
    }
    i14 = (HEAP32[i1 + 44 >> 2] | 0) >>> 6 & 3;
    __ZNK7WebCore9FrameView23documentBackgroundColorEv(i5, i1);
    do {
     if ((HEAP8[i11] & 1) == 0) {
      i15 = 0;
     } else {
      __ZNK7WebCore5Color6getHSLERdS1_S1_(i5, i6, i7, i8);
      if (+HEAPF64[i8 >> 3] > +.5) {
       i15 = 0;
       break;
      }
      i15 = (HEAP32[i12 >> 2] | 0) >>> 0 > 16777215 >>> 0 ? 2 : 0;
     }
    } while (0);
    if ((i14 | 0) == (i15 | 0)) {
     break;
    }
    __ZN7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE(i1 | 0, i15);
   }
  } while (0);
  i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, HEAP32[i9 >> 2] | 0) | 0;
  if ((i2 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9FrameView23updateScrollableAreaSetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i1 + 216 >> 2] | 0) + 40 | 0) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[i6 + 452 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 36 | 0;
 if (!(__ZN7WebCore9FrameView12isScrollableEv(i1) | 0)) {
  HEAP32[i5 >> 2] = i6;
  i1 = HEAP32[i7 + 636 >> 2] | 0;
  if ((i1 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  __ZN3WTF7HashSetIPN7WebCore14ScrollableAreaENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i5) | 0;
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i6;
 i6 = i7 + 636 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(20) | 0;
   i1 = i5;
   _memset(i5 | 0, 0, 20) | 0;
   i5 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i1;
   if ((i5 | 0) == 0) {
    i8 = i1;
    break;
   }
   i1 = HEAP32[i5 >> 2] | 0;
   if ((i1 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i1);
   }
   __ZN3WTF8fastFreeEPv(i5);
   i8 = HEAP32[i6 >> 2] | 0;
  } else {
   i8 = i7;
  }
 } while (0);
 __ZN3WTF9HashTableIPN7WebCore14ScrollableAreaES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i4, i8 | 0, i3, i3);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore9FrameView14windowClipRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i2 | 0;
 if ((HEAP8[i2 + 170 | 0] & 1) != 0) {
  __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i5, i2 + 36 | 0);
  i10 = i1;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  i10 = i1 + 8 | 0;
  i11 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i10 + 4 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i7, i9, i3 & 1 ^ 1);
 __ZNK7WebCore10ScrollView16contentsToWindowERKNS_7IntRectE(i6, i9, i7);
 i7 = HEAP32[(HEAP32[i2 + 216 >> 2] | 0) + 448 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i2 = i1;
  i9 = i6;
  HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  STACKTOP = i4;
  return;
 }
 i9 = __ZNK7WebCore8Document4viewEv(HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i9 | 0) != 0) {
  __ZNK7WebCore9FrameView27windowClipRectForFrameOwnerEPKNS_21HTMLFrameOwnerElementEb(i8, i9, i7, 1);
  __ZN7WebCore7IntRect9intersectERKS0_(i6, i8);
 }
 i8 = i1;
 i1 = i6;
 HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9FrameView29forceLayoutParentViewIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 216 | 0;
 i1 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i2 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i3 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] & 512 | 0) == 0) {
  return;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 324 >> 2] & 127](i2) | 0;
 i4 = i3 ? i2 : 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 + 20 >> 2] & 1048607 | 0) == 1048576) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 i3 = i2 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i1 + 20 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 & 1 | 0) == 0) {
   HEAP32[i3 >> 2] = i1 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
   if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i4, 1, 1);
 __ZN7WebCore9FrameView6layoutEb(i2, 1);
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i4 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore9FrameView14invalidateRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i1 + 216 >> 2] | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  i1 = __ZNK7WebCore5Frame13ownerRendererEv(i7) | 0;
  if ((i1 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i8 = i2;
  i9 = HEAP32[i8 >> 2] | 0;
  i10 = HEAP32[i8 + 4 >> 2] | 0;
  i8 = i2 + 8 | 0;
  i11 = HEAP32[i8 >> 2] | 0;
  i12 = HEAP32[i8 + 4 >> 2] | 0;
  i8 = i1 | 0;
  i13 = i1;
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 744 >> 2] & 127](i8) | 0;
  i15 = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 127](i4, i8);
  i16 = HEAP32[i4 >> 2] | 0;
  i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 736 >> 2] & 127](i8) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 704 >> 2] & 127](i5, i8);
  i8 = i4 + i10 + (HEAP32[i5 >> 2] | 0) | 0;
  HEAP32[i6 >> 2] = i14 + i9 + i16;
  HEAP32[i6 + 4 >> 2] = i8;
  HEAP32[i6 + 8 >> 2] = i11;
  HEAP32[i6 + 12 >> 2] = i12;
  __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i1 | 0, i6, 0);
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i7 + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i6 + 20 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 63](i7 | 0, i2, 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView17paintScrollCornerEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if (__ZNK7WebCore15GraphicsContext20updatingControlTintsEv(i2) | 0) {
  __ZN7WebCore9FrameView18updateScrollCornerEv(i1);
  STACKTOP = i4;
  return;
 }
 i9 = i1 + 600 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZN7WebCore10ScrollView17paintScrollCornerEPNS_15GraphicsContextERKNS_7IntRectE(i1 | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 i11 = HEAP32[i1 + 216 >> 2] | 0;
 if ((HEAP32[i11 + 28 >> 2] | 0) == (i11 | 0)) {
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i5, i3);
  i11 = i1 + 380 | 0;
  i1 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i6 + 4 >> 2] = i1;
  __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i2, i5, i6, 0);
  i12 = HEAP32[i9 >> 2] | 0;
 } else {
  i12 = i10;
 }
 i10 = i3;
 i9 = HEAP32[i10 >> 2] | 0;
 i6 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i9;
 HEAP32[i7 + 4 >> 2] = i6;
 HEAP32[i8 >> 2] = i9;
 HEAP32[i8 + 4 >> 2] = i6;
 i6 = i3 + 8 | 0;
 i3 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i8 + 8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i8 + 12 >> 2] = i3;
 __ZN7WebCore19RenderScrollbarPart13paintIntoRectEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i12, i2, i7, i8);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E4findERKS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i2 + 4 >> 2] << 2 | 0;
  HEAP32[i1 >> 2] = i5;
  HEAP32[i1 + 4 >> 2] = i5;
  return;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i6 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
 i3 = i6;
 i7 = i3 + ~(i3 << 15) | 0;
 i3 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i3 >>> 6 ^ i3;
 i3 = i7 + ~(i7 << 11) | 0;
 i7 = i3 >>> 16 ^ i3;
 i3 = (i7 >>> 23) + ~i7 | 0;
 i8 = i3 << 12 ^ i3;
 i3 = i8 >>> 7 ^ i8;
 i8 = i3 << 2 ^ i3;
 i3 = i8 >>> 20 ^ i8 | 1;
 i8 = i7;
 i7 = 0;
 while (1) {
  i9 = i8 & i5;
  i10 = i4 + (i9 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == 0) {
   i13 = 5;
   break;
  } else if ((i12 | 0) != (-1 | 0)) {
   if ((HEAP32[i11 >> 2] | 0) == (i6 | 0)) {
    i13 = 8;
    break;
   }
  }
  i11 = (i7 | 0) == 0 ? i3 : i7;
  i8 = i11 + i9 | 0;
  i7 = i11;
 }
 do {
  if ((i13 | 0) == 5) {
   i14 = i4 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
   i15 = i1 | 0;
  } else if ((i13 | 0) == 8) {
   i7 = i4 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
   i8 = i1 | 0;
   if ((i10 | 0) == 0) {
    i14 = i7;
    i15 = i8;
    break;
   }
   HEAP32[i8 >> 2] = i10;
   HEAP32[i1 + 4 >> 2] = i7;
   return;
  }
 } while (0);
 HEAP32[i15 >> 2] = i14;
 HEAP32[i1 + 4 >> 2] = i14;
 return;
}
function __ZNK7WebCore9FrameView27qualifiesAsVisuallyNonEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 216 >> 2] | 0;
 i6 = HEAP32[i5 + 456 >> 2] | 0;
 i7 = HEAP32[i6 + 692 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i9 = i7 + 32 | 0;
 if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
  i10 = i9 | 0;
 } else {
  i10 = HEAP32[i9 >> 2] | 0;
 }
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 do {
  if ((HEAP8[i6 + 964 | 0] & 1) == 0) {
   if (__ZNK7WebCore23FrameLoaderStateMachine30committedFirstRealDocumentLoadEv(i5 + 104 | 0) | 0) {
    i8 = 1;
   } else {
    break;
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 i5 = __ZNK7WebCore4Node9renderBoxEv(i7 | 0) | 0;
 i7 = HEAP32[i5 + 88 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i6 = i5 | 0;
  i10 = i5;
  FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 744 >> 2] & 127](i6) | 0;
  FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 736 >> 2] & 127](i6) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i3, i5);
  __ZNK7WebCore9RenderBox12clientHeightEv(i4, i5);
  i11 = HEAP32[i4 >> 2] | 0;
 } else {
  i11 = HEAP32[i7 + 16 >> 2] | 0;
 }
 if ((i11 | 0) < 200) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 if ((HEAP32[i1 + 584 >> 2] | 0) >>> 0 > 200 >>> 0) {
  i8 = 1;
  STACKTOP = i2;
  return i8 | 0;
 }
 i8 = (HEAP32[i1 + 588 >> 2] | 0) >>> 0 > 1024 >>> 0;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore9FrameView24paintContentsForSnapshotEPNS_15GraphicsContextERKNS_7IntRectENS0_19SelectionInSnapshotENS0_26CoordinateSpaceForSnapshotE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN7WebCore9FrameView37updateLayoutAndStyleIfNeededRecursiveEv(i1);
 i6 = i1 + 576 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i7 | 4;
 i8 = (i4 | 0) == 1;
 do {
  if (i8) {
   i4 = i1 + 216 | 0;
   i9 = HEAP32[i4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i10 = i9;
   }
   while (1) {
    i9 = __ZNK7WebCore5Frame15contentRendererEv(i10) | 0;
    if ((i9 | 0) != 0) {
     __ZN7WebCore10RenderView14clearSelectionEv(i9);
    }
    i10 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i10 + 40 | 0, HEAP32[i4 >> 2] | 0) | 0;
    if ((i10 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  __ZN7WebCore9FrameView13paintContentsEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3);
 } else {
  __ZN7WebCore10ScrollView5paintEPNS_15GraphicsContextERKNS_7IntRectE(i1 | 0, i2, i3);
 }
 if (!i8) {
  HEAP32[i6 >> 2] = i7;
  return;
 }
 i8 = i1 + 216 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  HEAP32[i6 >> 2] = i7;
  return;
 } else {
  i11 = i1;
 }
 while (1) {
  __ZN7WebCore14FrameSelection16updateAppearanceEv(HEAP32[i11 + 468 >> 2] | 0);
  i11 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i11 + 40 | 0, HEAP32[i8 >> 2] | 0) | 0;
  if ((i11 | 0) == 0) {
   break;
  }
 }
 HEAP32[i6 >> 2] = i7;
 return;
}
function __ZNK7WebCore9FrameView33isInChildFrameWithFrameFlatteningEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 216 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i1 + 448 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i5 = HEAP32[i4 + 44 >> 2] | 0;
 i6 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
 do {
  if ((i5 | 0) == (i6 | 0)) {
   i7 = 6;
  } else {
   if ((HEAP32[i5 + 12 >> 2] | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
    i8 = i1;
    break;
   }
   if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
    i7 = 6;
   } else {
    i8 = i1;
   }
  }
 } while (0);
 do {
  if ((i7 | 0) == 6) {
   i1 = __ZNK7WebCore21HTMLFrameOwnerElement12renderWidgetEv(i4) | 0;
   if (__ZNK7WebCore12RenderIFrame12flattenFrameEv(i1) | 0) {
    i2 = 1;
    return i2 | 0;
   }
   if (__ZNK7WebCore12RenderIFrame10isSeamlessEv(i1) | 0) {
    i2 = 1;
    return i2 | 0;
   } else {
    i8 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((HEAP8[(HEAP32[i8 + 36 >> 2] | 0) + 185 | 0] & 16) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[(HEAP32[i8 + 448 >> 2] | 0) + 44 >> 2] | 0;
 i8 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
 if ((i3 | 0) == (i8 | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) != (HEAP32[i8 + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i8 + 16 >> 2] | 0);
 return i2 | 0;
}
function __ZNK7WebCore9FrameView34notifyPageThatContentAreaWillPaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 32 >> 2] | 0) == 0) {
  return;
 }
 __ZNK7WebCore14ScrollableArea20contentAreaWillPaintEv(i1 + 36 | 0);
 i2 = HEAP32[i1 + 636 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i1 + (i3 << 2) | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  return;
 }
 L10 : do {
  if ((i3 | 0) == 0) {
   i5 = i1;
  } else {
   i2 = i1;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i2;
     break L10;
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L18 : while (1) {
  __ZNK7WebCore14ScrollableArea20contentAreaWillPaintEv(HEAP32[i7 >> 2] | 0);
  i5 = i7 + 4 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 15;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 4 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 19;
    break L18;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 14;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 15) {
  return;
 } else if ((i8 | 0) == 19) {
  return;
 } else if ((i8 | 0) == 14) {
  return;
 }
}
function __ZNK7WebCore9RenderBox19stretchesToViewportEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i3 + 664 >> 2] | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 i6 = (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i7 = (HEAP32[i5 + 4 >> 2] | 0) + 12 | 0;
 } else {
  i7 = (HEAP32[i5 + 4 >> 2] | 0) + 4 | 0;
 }
 if ((HEAP8[i7 + 5 | 0] | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 & 64 | 0) != 0 | (i1 & 25165824 | 0) == 16777216) {
  i4 = 0;
  return i4 | 0;
 }
 do {
  if ((HEAP32[i3 + 692 >> 2] | 0) != (i2 | 0)) {
   if ((i1 & 128 | 0) != 0 | (i2 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   i5 = HEAP32[i2 + 44 >> 2] | 0;
   i6 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(i3) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i7 >> 2] & 1024 | 0) == 0;
 return i4 | 0;
}
function __ZN7WebCore9FrameView28scrollOffsetForFixedPositionERKNS_7IntRectERKNS_7IntSizeERKNS_8IntPointES9_fbNS_30ScrollBehaviorForFixedElementsEii(i1, i2, i3, i4, i5, d6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, d17 = +0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11 | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore14ScrollableArea34constrainScrollPositionForOverhangERKNS_7IntRectERKNS_7IntSizeERKNS_8IntPointES9_ii(i12, i2, i3, i4, i5, i9, i10);
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = HEAP32[i12 + 4 >> 2] | 0;
 } else {
  i12 = i4;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = (HEAP32[i12 + 4 >> 2] | 0) - i9 | 0;
 }
 i9 = i2 + 8 | 0;
 i12 = HEAP32[i9 >> 2] | 0;
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i10 = i9 - i12 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i5 - i4 | 0;
 do {
  if (i7) {
   d15 = +1;
   d16 = +1;
  } else {
   if ((i9 | 0) == (i12 | 0)) {
    d17 = +1;
   } else {
    d17 = (+(i9 | 0) - +(i12 | 0) * d6) / +(i10 | 0);
   }
   if ((i5 | 0) == (i4 | 0)) {
    d15 = +1;
    d16 = d17;
    break;
   }
   d15 = (+(i5 | 0) - +(HEAP32[i2 + 12 >> 2] | 0) * d6) / +(i3 | 0);
   d16 = d17;
  }
 } while (0);
 HEAP32[i1 >> 2] = ~~(+(i13 | 0) * d16 / d6);
 HEAP32[i1 + 4 >> 2] = ~~(+(i14 | 0) * d15 / d6);
 STACKTOP = i11;
 return;
}
function __ZN7WebCore9FrameView17setTracksRepaintsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 528 | 0;
 if ((i2 & 1 | 0) == (HEAP8[i3] & 1 | 0)) {
  return;
 }
 i4 = i1 + 216 | 0;
 do {
  if (i2) {
   i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore8Document12updateLayoutEv(i5);
  }
 } while (0);
 i5 = __ZNK7WebCore9FrameTree3topEv((HEAP32[i4 >> 2] | 0) + 40 | 0) | 0;
 if ((i5 | 0) != 0) {
  i6 = i5;
  while (1) {
   i5 = __ZNK7WebCore5Frame15contentRendererEv(i6) | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore21RenderLayerCompositor17setTracksRepaintsEb(__ZN7WebCore10RenderView10compositorEv(i5) | 0, i2);
   }
   i6 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i6 + 40 | 0, 0) | 0;
   if ((i6 | 0) == 0) {
    break;
   }
  }
 }
 i6 = i1 + 536 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   i5 = i1 + 540 | 0;
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i5 = i1 + 532 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   HEAP32[i5 >> 2] = 0;
   HEAP32[i6 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 i6 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i4 >> 2] | 0) | 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore21RenderLayerCompositor24resetTrackedRepaintRectsEv(__ZN7WebCore10RenderView10compositorEv(i6) | 0);
 }
 HEAP8[i3] = i2 & 1;
 return;
}
function __ZN7WebCore9FrameView17paintControlTintsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i3 = i2 | 0;
 i4 = i2 + 120 | 0;
 i5 = i2 + 136 | 0;
 i6 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 do {
  if (+HEAPF64[i1 + 248 >> 3] != +0) {
   i7 = 7;
  } else {
   if ((i6 | 0) != 0) {
    if ((HEAP32[i6 + 20 >> 2] & 31 | 0) != 0) {
     i7 = 7;
     break;
    }
   }
   if ((HEAP32[i1 + 300 >> 2] | 0) != 0) {
    i7 = 7;
    break;
   }
   if ((HEAP32[i1 + 564 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP8[i1 + 568 | 0] & 1) != 0) {
    i7 = 7;
   }
  }
 } while (0);
 if ((i7 | 0) == 7) {
  __ZN7WebCore9FrameView6layoutEb(i1, 1);
 }
 __ZN7WebCore15GraphicsContextC1EPNS_20PlatformContextCairoE(i3, 0);
 __ZN7WebCore15GraphicsContext23setUpdatingControlTintsEb(i3, 1);
 i7 = i1 | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  __ZNK7WebCore6Widget9frameRectEv(i5, i1 | 0);
  __ZN7WebCore10ScrollView5paintEPNS_15GraphicsContextERKNS_7IntRectE(i7, i3, i5);
  __ZN7WebCore15GraphicsContextD1Ev(i3);
  STACKTOP = i2;
  return;
 } else {
  __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i4, i7, 0);
  __ZN7WebCore9FrameView13paintContentsEPNS_15GraphicsContextERKNS_7IntRectE(i1, i3, i4);
  __ZN7WebCore15GraphicsContextD1Ev(i3);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore9FrameView23removeSlowRepaintObjectEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 220 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF7HashSetIPN7WebCore13RenderElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i5, i4) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i4 + 12 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) != 0) {
  i2 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 216 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 while (1) {
  i5 = HEAP32[i2 + 452 >> 2] | 0;
  if ((i5 | 0) != 0) {
   __ZN7WebCore10ScrollView18setCanBlitOnScrollEb(i5 | 0, (__ZNK7WebCore9FrameView15useSlowRepaintsEb(i5, 1) | 0) ^ 1);
  }
  i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, HEAP32[i4 >> 2] | 0) | 0;
  if ((i2 | 0) == 0) {
   break;
  }
 }
 i2 = HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = __ZN7WebCore4Page20scrollingCoordinatorEv(i2) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore20ScrollingCoordinator39frameViewHasSlowRepaintObjectsDidChangeEPNS_9FrameViewE(i4, i1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9FrameView9mediaTypeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 216 | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 444 >> 2] & 127](i4, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i6 | 0) == 0)) {
   i5 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i6 + 32 >> 2] | 0) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation22applyEmulatedMediaImplEPNS_19InstrumentingAgentsEPN3WTF6StringE(i5, i4);
  }
 } while (0);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i4 = HEAP32[i2 + 400 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore9FrameView8scrollToERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = i4 | 0;
 i7 = i4;
 i4 = i1;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 63](i7, i5, 0);
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = HEAP32[i6 + 4 >> 2] | 0;
 __ZN7WebCore10ScrollView8scrollToERKNS_7IntSizeE(i5, i2);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 63](i7, i5, 0);
 i5 = i1 + 216 | 0;
 do {
  if ((i8 | 0) != (HEAP32[i6 >> 2] | 0) | (i9 | 0) != (HEAP32[i6 + 4 >> 2] | 0)) {
   __ZN7WebCore12EventHandler15sendScrollEventEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 472 >> 2] | 0);
   __ZN7WebCore12EventHandler30dispatchFakeMouseMoveEventSoonEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 472 >> 2] | 0);
   i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i5 >> 2] | 0) | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore10RenderView15usesCompositingEv(i1) | 0)) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor18frameViewDidScrollEv(__ZN7WebCore10RenderView10compositorEv(i1) | 0);
  }
 } while (0);
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 84 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 472 >> 2] & 63](i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView25repaintSlowRepaintObjectsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 220 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i1 + (i3 << 2) | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i3 | 0) == 0) {
   i5 = i1;
  } else {
   i2 = i1;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i2;
     break L7;
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L15 : while (1) {
  __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i7 >> 2] | 0, 0);
  i5 = i7 + 4 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 16;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 4 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 17;
    break L15;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 18;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 17) {
  return;
 } else if ((i8 | 0) == 16) {
  return;
 } else if ((i8 | 0) == 18) {
  return;
 }
}
function __ZNK7WebCore9FrameView28scrollOffsetForFixedPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i2 | 0;
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i5, i9, 0);
 __ZNK7WebCore14ScrollableArea17totalContentsSizeEv(i6, i2 + 36 | 0);
 i10 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 63](i4, i9, 0);
 i9 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i7 + 4 >> 2] = i9;
 i9 = i2 + 48 | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = i10;
 i10 = i2 + 216 | 0;
 d11 = +__ZNK7WebCore5Frame16frameScaleFactorEv(HEAP32[i10 >> 2] | 0);
 i9 = HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] | 0;
 __ZN7WebCore9FrameView28scrollOffsetForFixedPositionERKNS_7IntRectERKNS_7IntSizeERKNS_8IntPointES9_fbNS_30ScrollBehaviorForFixedElementsEii(i1, i5, i6, i7, i8, d11, (HEAP8[i9 + 184 | 0] | 0) < 0, (HEAPU8[i9 + 182 | 0] | 0) >>> 7 & 255, HEAP32[i2 + 644 >> 2] | 0, HEAP32[i2 + 648 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView19scrollElementToRectEPNS_7ElementERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 456 >> 2] | 0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 156 >> 2] & 127](i5, i2 | 0);
 i2 = (HEAP32[i5 + 4 >> 2] | 0) + (((HEAP32[i3 + 12 >> 2] | 0) - (HEAP32[i5 + 12 >> 2] | 0) | 0) / -2 & -1) - (HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i6 >> 2] = (HEAP32[i5 >> 2] | 0) + (((HEAP32[i3 + 8 >> 2] | 0) - (HEAP32[i5 + 8 >> 2] | 0) | 0) / -2 & -1) - (HEAP32[i3 >> 2] | 0);
 HEAP32[i6 + 4 >> 2] = i2;
 i2 = i1 + 433 | 0;
 i3 = HEAP8[i2] & 1;
 HEAP8[i2] = 1;
 i5 = i1 + 596 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 8 | 0;
   i8 = i5 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore10ScrollView17setScrollPositionERKNS_8IntPointE(i1 | 0, i6);
 HEAP8[i2] = i3;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9FrameView12setFrameRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i1 | 0);
 i6 = i2;
 do {
  if ((HEAP32[i6 >> 2] | 0) == (HEAP32[i5 >> 2] | 0) & (HEAP32[i6 + 4 >> 2] | 0) == (HEAP32[i5 + 4 >> 2] | 0)) {
   i7 = i2 + 8 | 0;
   i8 = i4 + 8 | 0;
   if ((HEAP32[i7 >> 2] | 0) != (HEAP32[i8 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i7 + 4 >> 2] | 0) != (HEAP32[i8 + 4 >> 2] | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore10ScrollView12setFrameRectERKNS_7IntRectE(i1 | 0, i2);
 __ZN7WebCore9FrameView23updateScrollableAreaSetEv(i1);
 i2 = i1 + 216 | 0;
 i4 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
 do {
  if ((i4 | 0) != 0) {
   if (!(__ZNK7WebCore10RenderView15usesCompositingEv(i4) | 0)) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor22frameViewDidChangeSizeEv(__ZN7WebCore10RenderView10compositorEv(i4) | 0);
  }
 } while (0);
 if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0) + 185 | 0] & 16) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore9FrameView23sendResizeEventIfNeededEv(i1);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9FrameView19convertFromRendererEPKNS_13RenderElementERKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i8, i4);
 __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i7, i3 | 0, i8, 2);
 d9 = +_round(+(+HEAPF32[i7 >> 2]));
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
 d9 = +_round(+(+HEAPF32[i7 + 4 >> 2]));
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
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = i10;
 i8 = i1 + 4 | 0;
 HEAP32[i8 >> 2] = i11;
 if ((HEAP8[i2 + 172 | 0] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i6 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 63](i6, i2 | 0, 0);
 i6 = (HEAP32[i2 + 644 >> 2] | 0) - (HEAP32[i1 + 4 >> 2] | 0) | 0;
 HEAP32[i7 >> 2] = i10 - (HEAP32[i1 >> 2] | 0);
 HEAP32[i8 >> 2] = i6 + i11;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore9FrameView22containsScrollableAreaEPNS_14ScrollableAreaE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = HEAP32[i1 + 636 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = i2;
 i6 = i3 + ~(i3 << 15) | 0;
 i3 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i3 >>> 6 ^ i3;
 i3 = i6 + ~(i6 << 11) | 0;
 i6 = i3 >>> 16 ^ i3;
 i3 = i5 & i6;
 i7 = i1 + (i3 << 2) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == (i2 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i3;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i9 = 0;
     break L7;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i5;
    i16 = i1 + (i15 << 2) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i2 | 0)) {
     i9 = i16;
     break;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
  }
 } while (0);
 i4 = (i9 | 0) != 0;
 return i4 | 0;
}
function __ZN7WebCore9FrameView31removeViewportConstrainedObjectEPNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = HEAP32[i1 + 640 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (!(__ZN3WTF7HashSetIPN7WebCore13RenderElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i2, i4) | 0)) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 + 216 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = i2;
 } else {
  i2 = __ZN7WebCore4Page20scrollingCoordinatorEv(i5) | 0;
  if ((i2 | 0) != 0) {
   __ZN7WebCore20ScrollingCoordinator30frameViewFixedObjectsDidChangeEPNS_9FrameViewE(i2, i1);
  }
  i6 = HEAP32[i4 >> 2] | 0;
 }
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 } else {
  i7 = i6;
 }
 while (1) {
  i6 = HEAP32[i7 + 452 >> 2] | 0;
  if ((i6 | 0) != 0) {
   __ZN7WebCore10ScrollView18setCanBlitOnScrollEb(i6 | 0, (__ZNK7WebCore9FrameView15useSlowRepaintsEb(i6, 1) | 0) ^ 1);
  }
  i7 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i7 + 40 | 0, HEAP32[i4 >> 2] | 0) | 0;
  if ((i7 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView16prepareForDetachEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 152 >> 2] & 127](i3) | 0)) {
    break;
   }
   __ZN7WebCore10ScrollView25setHasHorizontalScrollbarEbPb(i2, 0, 0) | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 152 >> 2] & 127](i3) | 0)) {
    break;
   }
   __ZN7WebCore10ScrollView23setHasVerticalScrollbarEbPb(i2, 0, 0) | 0;
  }
 } while (0);
 i2 = i1 + 600 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i3 | 0);
 }
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 216 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 456 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i3;
 } else {
  __ZNK7WebCore8Document21existingAXObjectCacheEv(i4) | 0;
  i5 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i5 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i5 = __ZN7WebCore4Page20scrollingCoordinatorEv(i2) | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 80 >> 2] & 127](i5, i1 + 36 | 0);
 return;
}
function __ZN3WTF6VectorIN7WebCore10LayoutRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = HEAP32[i4 + 20 >> 2] | 0;
 i3 = i4 + 28 | 0;
 if ((i2 | 0) != 0) {
  i5 = i2;
  while (1) {
   i2 = i5 + 8 | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   i8 = i7 + 8 | 0;
   do {
    if (i8 >>> 0 > i5 >>> 0) {
     i9 = 6;
    } else {
     if ((i8 + 3072 | 0) >>> 0 <= i5 >>> 0) {
      i9 = 6;
      break;
     }
     i10 = i7 | 0;
     HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i10 >> 2] = i5;
    }
   } while (0);
   if ((i9 | 0) == 6) {
    i9 = 0;
    __ZN3WTF8fastFreeEPv(i5);
   }
   if ((i6 | 0) == 0) {
    break;
   } else {
    i5 = i6;
   }
  }
 }
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN3WTF8fastFreeEPv(i4);
 return i1 | 0;
}
function __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore9FrameView14adjustViewSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i1 + 216 | 0;
 i8 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i7 >> 2] | 0) | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore10RenderView12documentRectEv(i3, i8);
 i8 = i3 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 HEAP32[i4 + 4 >> 2] = i10;
 i8 = i1 | 0;
 i11 = -(HEAP32[i3 + 4 >> 2] | 0) | 0;
 HEAP32[i5 >> 2] = -(HEAP32[i3 >> 2] | 0);
 HEAP32[i5 + 4 >> 2] = i11;
 i11 = (HEAP8[(HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0) + 660 | 0] & 1) == 0;
 __ZNK7WebCore10ScrollView12contentsSizeEv(i6, i8);
 if ((i9 | 0) == (HEAP32[i6 >> 2] | 0)) {
  i12 = (i10 | 0) == (HEAP32[i6 + 4 >> 2] | 0);
 } else {
  i12 = 0;
 }
 __ZN7WebCore10ScrollView15setScrollOriginERKNS_8IntPointEbb(i8, i5, i11, i12);
 __ZN7WebCore9FrameView15setContentsSizeERKNS_7IntSizeE(i1, i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9FrameView33flushCompositingStateForThisFrameEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 216 | 0;
 i4 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i3 >> 2] | 0) | 0;
 if ((i4 | 0) == 0) {
  i5 = 1;
  return i5 | 0;
 }
 i6 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i3 >> 2] | 0) | 0;
 if (+HEAPF64[i1 + 248 >> 3] != +0) {
  i5 = 0;
  return i5 | 0;
 }
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 20 >> 2] & 31 | 0) == 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 if ((HEAP32[i1 + 300 >> 2] | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i1 + 564 >> 2] | 0) != 0) {
   if ((HEAP8[i1 + 568 | 0] & 1) == 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 if (+HEAPF64[i1 + 464 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i1 + 456 | 0);
  __ZN7WebCore9FrameView18doDeferredRepaintsEv(i1);
 }
 i1 = __ZN7WebCore10RenderView10compositorEv(i4) | 0;
 __ZN7WebCore21RenderLayerCompositor24flushPendingLayerChangesEb(i1, (HEAP32[i3 >> 2] | 0) == (i2 | 0));
 i5 = 1;
 return i5 | 0;
}
function __ZN7WebCore9FrameView15setContentsSizeERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 __ZNK7WebCore10ScrollView12contentsSizeEv(i4, i5);
 do {
  if ((HEAP32[i2 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
   if ((HEAP32[i2 + 4 >> 2] | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i4 = i1 + 564 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZN7WebCore10ScrollView15setContentsSizeERKNS_7IntSizeE(i5, i2);
 __ZN7WebCore14ScrollableArea15contentsResizedEv(i1 + 36 | 0);
 i5 = i1 + 216 | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore9FrameView23updateScrollableAreaSetEv(i1);
 __ZNK7WebCore6Chrome19contentsSizeChangedEPNS_5FrameERKNS_7IntSizeE(HEAP32[i6 + 20 >> 2] | 0, HEAP32[i5 >> 2] | 0, i2);
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i1 + 568 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20AnnotatedRegionValueeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP32[i1 + 36 >> 2] | 0) != (HEAP32[i2 + 36 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1;
 i5 = i2;
 if (!((HEAP32[i4 >> 2] | 0) == (HEAP32[i5 >> 2] | 0) & (HEAP32[i4 + 4 >> 2] | 0) == (HEAP32[i5 + 4 >> 2] | 0))) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = i1 + 8 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP32[i5 >> 2] | 0) != (HEAP32[i4 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i5 + 4 >> 2] | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 20 | 0;
 i5 = i2 + 20 | 0;
 if (!((HEAP32[i4 >> 2] | 0) == (HEAP32[i5 >> 2] | 0) & (HEAP32[i4 + 4 >> 2] | 0) == (HEAP32[i5 + 4 >> 2] | 0))) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = i1 + 28 | 0;
 i4 = i2 + 28 | 0;
 if ((HEAP32[i5 >> 2] | 0) != (HEAP32[i4 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i5 + 4 >> 2] | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 + 16 >> 2] | 0, HEAP32[i2 + 16 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore9FrameView14paintScrollbarEPNS_15GraphicsContextEPNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i8;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 152 >> 2] & 127](i3) | 0) {
   i10 = HEAP32[i1 + 216 >> 2] | 0;
   if ((HEAP32[i10 + 28 >> 2] | 0) != (i10 | 0)) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 128 >> 2] & 127](i6, i3);
   __ZN7WebCore7IntRect9intersectERKS0_(i6, i4);
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i7, i6);
   i10 = i1 + 380 | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i8 + 4 >> 2] = i11;
   __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i2, i7, i9, 0);
  }
 } while (0);
 __ZN7WebCore10ScrollView14paintScrollbarEPNS_15GraphicsContextEPNS_9ScrollbarERKNS_7IntRectE(i1 | 0, i2, i3, i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore9FrameView30maintainScrollPositionAtAnchorEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 596 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  i5 = i2;
 } else {
  i2 = i4 + 8 | 0;
  i4 = i2 - 8 | 0;
  i6 = i2 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  HEAP32[i6 >> 2] = i7;
  do {
   if ((i7 | 0) < 1) {
    if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i4);
   }
  } while (0);
  i5 = HEAP32[i3 >> 2] | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 i5 = i1 + 216 | 0;
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 456 >> 2] | 0);
 i3 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i5 >> 2] | 0) | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 20 >> 2] & 31 | 0) == 0) {
    break;
   }
   __ZN7WebCore9FrameView6layoutEb(i1, 1);
   return;
  }
 } while (0);
 __ZN7WebCore9FrameView14scrollToAnchorEv(i1);
 return;
}
function __ZN7WebCore9FrameView19endDeferredRepaintsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0;
 i2 = HEAP32[i1 + 216 >> 2] | 0;
 i3 = HEAP32[i2 + 28 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  i4 = i1;
 } else {
  i1 = i3;
  while (1) {
   i3 = HEAP32[i1 + 452 >> 2] | 0;
   i2 = HEAP32[i3 + 216 >> 2] | 0;
   i5 = HEAP32[i2 + 28 >> 2] | 0;
   if ((i5 | 0) == (i2 | 0)) {
    i4 = i3;
    break;
   } else {
    i1 = i5;
   }
  }
 }
 i1 = i4 + 436 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  return;
 }
 i5 = i4 + 456 | 0;
 i1 = i4 + 464 | 0;
 if (+HEAPF64[i1 >> 3] != +0) {
  return;
 }
 i3 = i4 + 512 | 0;
 do {
  if (+HEAPF64[i3 >> 3] != +0) {
   d6 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
   d7 = +HEAPF64[i3 >> 3] - (d6 - +HEAPF64[i4 + 520 >> 3]);
   d6 = d7 > +0 ? d7 : +0;
   if (d6 == +0) {
    break;
   }
   if (+HEAPF64[i1 >> 3] != +0) {
    return;
   }
   __ZN7WebCore9TimerBase5startEdd(i5, d6, +0);
   return;
  }
 } while (0);
 __ZN7WebCore9FrameView18doDeferredRepaintsEv(i4);
 return;
}
function __ZN7WebCore9FrameView22visibleContentsResizedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 216 | 0;
 if ((HEAP32[(HEAP32[i2 >> 2] | 0) + 452 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if (!(__ZNK7WebCore10ScrollView14useFixedLayoutEv(i1 | 0) | 0)) {
   i3 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
   do {
    if (+HEAPF64[i1 + 248 >> 3] == +0) {
     if ((i3 | 0) != 0) {
      if ((HEAP32[i3 + 20 >> 2] & 31 | 0) != 0) {
       break;
      }
     }
     if ((HEAP32[i1 + 300 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP32[i1 + 564 >> 2] | 0) == 0) {
      break L4;
     }
     if ((HEAP8[i1 + 568 | 0] & 1) == 0) {
      break L4;
     }
    }
   } while (0);
   __ZN7WebCore9FrameView6layoutEb(i1, 1);
  }
 } while (0);
 i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if (!(__ZNK7WebCore10RenderView15usesCompositingEv(i1) | 0)) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor22frameViewDidChangeSizeEv(__ZN7WebCore10RenderView10compositorEv(i1) | 0);
 return;
}
function __ZNK7WebCore9FrameView40hasCompositedContentIncludingDescendantsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 216 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 } else {
  i5 = i3;
 }
 L3 : while (1) {
  i3 = __ZNK7WebCore5Frame15contentRendererEv(i5) | 0;
  do {
   if ((i3 | 0) != 0) {
    i6 = __ZN7WebCore10RenderView10compositorEv(i3) | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    if ((HEAP8[i6 + 88 | 0] & 1) != 0) {
     i4 = 1;
     i7 = 10;
     break L3;
    }
    if (!(__ZN7WebCore21RenderLayerCompositor35allowsIndependentlyCompositedFramesEPKNS_9FrameViewE(i1) | 0)) {
     i4 = 0;
     i7 = 11;
     break L3;
    }
   }
  } while (0);
  i3 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i5 + 40 | 0, HEAP32[i2 >> 2] | 0) | 0;
  if ((i3 | 0) == 0) {
   i4 = 0;
   i7 = 9;
   break;
  } else {
   i5 = i3;
  }
 }
 if ((i7 | 0) == 11) {
  return i4 | 0;
 } else if ((i7 | 0) == 9) {
  return i4 | 0;
 } else if ((i7 | 0) == 10) {
  return i4 | 0;
 }
 return 0;
}
function __ZN3WTF10PassOwnPtrINS_11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS4_EEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 i3 = i2 + 28 | 0;
 if ((i1 | 0) != 0) {
  i4 = i1;
  while (1) {
   i1 = i4 + 8 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i8 = 6;
    } else {
     if ((i7 + 3072 | 0) >>> 0 <= i4 >>> 0) {
      i8 = 6;
      break;
     }
     i9 = i6 | 0;
     HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i4;
    }
   } while (0);
   if ((i8 | 0) == 6) {
    i8 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS4_EEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 i3 = i2 + 28 | 0;
 if ((i1 | 0) != 0) {
  i4 = i1;
  while (1) {
   i1 = i4 + 8 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i8 = 6;
    } else {
     if ((i7 + 3072 | 0) >>> 0 <= i4 >>> 0) {
      i8 = 6;
      break;
     }
     i9 = i6 | 0;
     HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i4;
    }
   } while (0);
   if ((i8 | 0) == 6) {
    i8 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore9FrameView17addScrollableAreaEPNS_14ScrollableAreaE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 636 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i6 = __ZN3WTF10fastMallocEj(20) | 0;
   i7 = i6;
   _memset(i6 | 0, 0, 20) | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i7;
   if ((i6 | 0) == 0) {
    i8 = i7;
    break;
   }
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i7);
   }
   __ZN3WTF8fastFreeEPv(i6);
   i8 = HEAP32[i2 >> 2] | 0;
  } else {
   i8 = i1;
  }
 } while (0);
 __ZN3WTF9HashTableIPN7WebCore14ScrollableAreaES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i5, i8 | 0, i4, i4);
 STACKTOP = i3;
 return (HEAP8[i5 + 8 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore9FrameView22setBaseBackgroundColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 if ((HEAP8[i2 + 4 | 0] & 1) == 0) {
  HEAP32[i1 + 380 >> 2] = -1;
  HEAP8[i1 + 384 | 0] = 1;
 } else {
  i6 = i1 + 380 | 0;
  i7 = i2;
  HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  HEAP8[i6 + 4 | 0] = HEAP8[i7 + 4 | 0] | 0;
 }
 i7 = (HEAP32[i1 + 44 >> 2] | 0) >>> 6 & 3;
 __ZNK7WebCore9FrameView23documentBackgroundColorEv(i4, i1);
 do {
  if ((HEAP8[i4 + 4 | 0] & 1) == 0) {
   i8 = 0;
  } else {
   __ZNK7WebCore5Color6getHSLERdS1_S1_(i4, i3 + 8 | 0, i3 + 16 | 0, i5);
   if (+HEAPF64[i5 >> 3] > +.5) {
    i8 = 0;
    break;
   }
   i8 = (HEAP32[i4 >> 2] | 0) >>> 0 > 16777215 >>> 0 ? 2 : 0;
  }
 } while (0);
 if ((i7 | 0) == (i8 | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE(i1 | 0, i8);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9FrameView34isFrameFlatteningValidForThisFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 216 >> 2] | 0;
 if ((HEAP8[(HEAP32[i2 + 36 >> 2] | 0) + 185 | 0] & 16) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 448 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
 if ((i2 | 0) == (i1 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
 if ((i2 | 0) == (i1 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i4 | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0);
 return i3 | 0;
}
function __ZNK7WebCore9FrameView22avoidScrollbarCreationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 216 >> 2] | 0;
 if ((HEAP8[(HEAP32[i2 + 36 >> 2] | 0) + 185 | 0] & 16) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 448 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
 if ((i2 | 0) == (i1 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
   if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
 if ((i2 | 0) == (i1 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i4 | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i1 + 16 >> 2] | 0);
 return i3 | 0;
}
function __ZN7WebCore9FrameView20setWasScrolledByUserEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP8[i1 + 433 | 0] & 1) != 0) {
  return;
 }
 i3 = i1 + 596 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
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
 i4 = i1 + 432 | 0;
 if ((HEAP8[i4] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i4] = i2 & 1;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv(i1);
 return;
}
function __ZNK7WebCore9FrameView28isEnclosedInCompositingLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1;
 while (1) {
  i1 = i2 + 216 | 0;
  i3 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i1 >> 2] | 0) | 0;
  if ((i3 | 0) != 0) {
   if ((__ZNK7WebCore12RenderObject19containerForRepaintEv(i3 | 0) | 0) != 0) {
    i4 = 1;
    i5 = 9;
    break;
   }
  }
  if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
   i4 = 0;
   i5 = 11;
   break;
  }
  i3 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i1 >> 2] | 0) + 40 | 0) | 0;
  if ((i3 | 0) == 0) {
   i4 = 0;
   i5 = 10;
   break;
  }
  i1 = HEAP32[i3 + 452 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 0;
   i5 = 8;
   break;
  } else {
   i2 = i1;
  }
 }
 if ((i5 | 0) == 11) {
  return i4 | 0;
 } else if ((i5 | 0) == 9) {
  return i4 | 0;
 } else if ((i5 | 0) == 10) {
  return i4 | 0;
 } else if ((i5 | 0) == 8) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore9FrameView20enterCompositingModeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 216 | 0;
 i3 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor21enableCompositingModeEb(__ZN7WebCore10RenderView10compositorEv(i3) | 0, 1);
 i4 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
 if (+HEAPF64[i1 + 248 >> 3] != +0) {
  return;
 }
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 20 >> 2] & 31 | 0) == 0) {
    break;
   }
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 300 >> 2] | 0) != 0) {
  return;
 }
 do {
  if ((HEAP32[i1 + 564 >> 2] | 0) != 0) {
   if ((HEAP8[i1 + 568 | 0] & 1) == 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore21RenderLayerCompositor30scheduleCompositingLayerUpdateEv(__ZN7WebCore10RenderView10compositorEv(i3) | 0);
 return;
}
function __ZNK7WebCore9FrameView22hasCompositingAncestorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i1 + 216 >> 2] | 0) + 40 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 L3 : while (1) {
  i2 = HEAP32[i4 + 452 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 + 216 >> 2] | 0) | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    if ((HEAP8[(__ZN7WebCore10RenderView10compositorEv(i1) | 0) + 88 | 0] & 1) != 0) {
     i3 = 1;
     i5 = 9;
     break L3;
    }
   }
  } while (0);
  i2 = __ZNK7WebCore9FrameTree6parentEv(i4 + 40 | 0) | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 7;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 9) {
  return i3 | 0;
 } else if ((i5 | 0) == 7) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore9FrameView35resetScrollbarsAndClearContentsSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP8[i1 + 377 | 0] = 1;
 i4 = i1 | 0;
 __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i4, 1, 0);
 if ((HEAP8[i1 + 225 | 0] & 1) == 0) {
  __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i4, 1, 1, 0, 0);
 } else {
  __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i4, 0, 0, 0, 0);
 }
 __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i4, 0, 0);
 __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i4, 1, 0);
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN7WebCore9FrameView15setContentsSizeERKNS_7IntSizeE(i1, i3);
 __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i4, 0, 0);
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore6WidgetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZThn36_N7WebCore9FrameView23invalidateScrollbarRectEPNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i5;
 i8 = i3;
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 127](i6, i2);
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + (HEAP32[i6 >> 2] | 0);
 i6 = i5 + 4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i2;
 __ZN7WebCore9FrameView14invalidateRectERKNS_7IntRectE(i1 - 664 + 628 | 0, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9FrameView13setPaginationERKNS_10PaginationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 416 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if (((HEAP8[i2 + 4 | 0] ^ HEAP8[i1 + 420 | 0]) & 1) != 0) {
    break;
   }
   if ((HEAP32[i1 + 424 >> 2] | 0) != (HEAP32[i2 + 8 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 428 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 i4 = i3;
 i3 = i2;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 456 >> 2] | 0, 1);
 return;
}
function __ZN7WebCore9FrameView22detachCustomScrollbarsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 152 >> 2] & 127](i3) | 0)) {
    break;
   }
   __ZN7WebCore10ScrollView25setHasHorizontalScrollbarEbPb(i2, 0, 0) | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 152 >> 2] & 127](i3) | 0)) {
    break;
   }
   __ZN7WebCore10ScrollView23setHasVerticalScrollbarEbPb(i2, 0, 0) | 0;
  }
 } while (0);
 i2 = i1 + 600 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  HEAP32[i2 >> 2] = 0;
  return;
 }
 __ZN7WebCore12RenderObject7destroyEv(i1 | 0);
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore9FrameView6createERNS_5FrameERKNS_7IntSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i6 | 0;
 i8 = __ZN3WTF10fastMallocEj(664) | 0;
 i9 = i8;
 __ZN7WebCore9FrameViewC2ERNS_5FrameE(i9, i2);
 i2 = i8;
 i10 = i5 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i5, i2);
 i5 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i7 + 4 >> 2] = i5;
 i5 = i6 + 8 | 0;
 i7 = i3;
 i3 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i5 + 4 >> 2] = i3;
 __ZN7WebCore6Widget12setFrameRectERKNS_7IntRectE(i2, i6);
 __ZN7WebCore10ScrollView4showEv(i8);
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i4;
 return;
}
function __ZThn36_NK7WebCore9FrameView22isRubberBandInProgressEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 - 664 + 628 | 0;
 if ((HEAP8[i2 + 152 | 0] & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 + 216 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = __ZN7WebCore4Page20scrollingCoordinatorEv(i1) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore20ScrollingCoordinator27synchronousScrollingReasonsEv(i4) | 0) != 0) {
    break;
   }
   i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 72 >> 2] & 127](i4) | 0;
   return i3 | 0;
  }
 } while (0);
 i1 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 112 >> 2] & 127](i1) | 0;
 return i3 | 0;
}
function __ZN7WebCoreL50countRenderedCharactersInRenderObjectWithThresholdERKNS_12RenderObjectEjj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i4 = (HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 4 >> 2] | 0) + i2 | 0;
 } else {
  i4 = i2;
 }
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 127](i1) | 0;
 if ((i2 | 0) != 0 & i4 >>> 0 < i3 >>> 0) {
  i5 = i4;
  i6 = i2;
 } else {
  i7 = i4;
  return i7 | 0;
 }
 while (1) {
  i4 = __ZN7WebCoreL50countRenderedCharactersInRenderObjectWithThresholdERKNS_12RenderObjectEjj(i6, i5, i3) | 0;
  i2 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i2 | 0) != 0 & i4 >>> 0 < i3 >>> 0) {
   i5 = i4;
   i6 = i2;
  } else {
   i7 = i4;
   break;
  }
 }
 return i7 | 0;
}
function __ZN7WebCore9FrameView23invalidateScrollbarRectEPNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i5;
 i8 = i3;
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 127](i6, i2);
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + (HEAP32[i6 >> 2] | 0);
 i6 = i5 + 4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i2;
 __ZN7WebCore9FrameView14invalidateRectERKNS_7IntRectE(i1, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9FrameView39flushCompositingStateIncludingSubframesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 216 | 0;
 i3 = __ZN7WebCore9FrameView33flushCompositingStateForThisFrameEPNS_5FrameE(i1, HEAP32[i2 >> 2] | 0) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i3;
  return i5 | 0;
 } else {
  i6 = i4;
  i7 = i3;
  i8 = i1;
 }
 while (1) {
  i1 = i7 & (__ZN7WebCore9FrameView33flushCompositingStateForThisFrameEPNS_5FrameE(HEAP32[i6 + 452 >> 2] | 0, i8) | 0);
  i3 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i6 + 40 | 0, HEAP32[i2 >> 2] | 0) | 0;
  if ((i3 | 0) == 0) {
   i5 = i1;
   break;
  }
  i6 = i3;
  i7 = i1;
  i8 = HEAP32[i2 >> 2] | 0;
 }
 return i5 | 0;
}
function __ZN7WebCore9FrameView19handleLoadCompletedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore9FrameView17autoSizeIfEnabledEv(i1);
 i2 = i1 + 216 | 0;
 do {
  if (!(__ZNK7WebCore11FrameLoader10isCompleteEv((__ZNK7WebCore9FrameTree3topEv((HEAP32[i2 >> 2] | 0) + 40 | 0) | 0) + 80 | 0) | 0)) {
   i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 964 | 0] & 1) != 0) {
    return;
   }
   if ((HEAP32[(HEAP32[i3 + 340 >> 2] | 0) + 52 >> 2] | 0) == 0) {
    break;
   }
   return;
  }
 } while (0);
 HEAPF64[i1 + 512 >> 3] = +HEAPF64[H_BASE + 784 >> 3];
 if (+HEAPF64[i1 + 464 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 456 | 0);
 __ZN7WebCore9FrameView18doDeferredRepaintsEv(i1);
 return;
}
function __ZN7WebCore9FrameView32recalculateScrollbarOverlayStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = (HEAP32[i1 + 44 >> 2] | 0) >>> 6 & 3;
 __ZNK7WebCore9FrameView23documentBackgroundColorEv(i3, i1);
 do {
  if ((HEAP8[i3 + 4 | 0] & 1) == 0) {
   i6 = 0;
  } else {
   __ZNK7WebCore5Color6getHSLERdS1_S1_(i3, i2 + 8 | 0, i2 + 16 | 0, i4);
   if (+HEAPF64[i4 >> 3] > +.5) {
    i6 = 0;
    break;
   }
   i6 = (HEAP32[i3 >> 2] | 0) >>> 0 > 16777215 >>> 0 ? 2 : 0;
  }
 } while (0);
 if ((i5 | 0) == (i6 | 0)) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE(i1 | 0, i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9FrameView24setScrollPinningBehaviorENS_21ScrollPinningBehaviorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 HEAP32[i1 + 660 >> 2] = i2;
 i6 = __ZN7WebCore4Page20scrollingCoordinatorEv(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 32 >> 2] | 0) | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 76 >> 2] & 127](i6, i2);
 }
 i2 = i1 | 0;
 i6 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 63](i4, i2, 0);
 i4 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i4;
 __ZN7WebCore10ScrollView16updateScrollbarsERKNS_7IntSizeE(i2, i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView38updateDeferredRepaintDelayAfterRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, d5 = +0;
 i2 = i1 + 216 | 0;
 do {
  if (!(__ZNK7WebCore11FrameLoader10isCompleteEv((__ZNK7WebCore9FrameTree3topEv((HEAP32[i2 >> 2] | 0) + 40 | 0) | 0) + 80 | 0) | 0)) {
   i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 964 | 0] & 1) == 0) {
    if ((HEAP32[(HEAP32[i3 + 340 >> 2] | 0) + 52 >> 2] | 0) == 0) {
     break;
    }
   }
   i3 = i1 + 512 | 0;
   d4 = +HEAPF64[i3 >> 3] + +HEAPF64[H_BASE + 760 >> 3];
   d5 = +HEAPF64[H_BASE + 776 >> 3];
   HEAPF64[i3 >> 3] = d5 < d4 ? d5 : d4;
   return;
  }
 } while (0);
 HEAPF64[i1 + 512 >> 3] = +HEAPF64[H_BASE + 784 >> 3];
 return;
}
function __ZNK7WebCore9FrameView22isRubberBandInProgressEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 152 | 0] & 1) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = __ZN7WebCore4Page20scrollingCoordinatorEv(i3) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore20ScrollingCoordinator27synchronousScrollingReasonsEv(i4) | 0) != 0) {
    break;
   }
   i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 72 >> 2] & 127](i4) | 0;
   return i2 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 112 >> 2] & 127](i3) | 0;
 return i2 | 0;
}
function __ZN7WebCore9FrameView29setAutoSizeFixedMinimumHeightEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 624 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 if ((HEAP32[i1 + 564 >> 2] | 0) != 0) {
  HEAP8[i1 + 568 | 0] = 1;
  return;
 }
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = i2 + 20 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 & 1 | 0) != 0) {
  return;
 }
 HEAP32[i3 >> 2] = i2 | 1;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i1, 1, 0);
 if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i1);
 return;
}
function __ZN7WebCore9FrameView18updateControlTintsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 216 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 356 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
  return;
 }
 i3 = __ZNK7WebCore5Frame15contentRendererEv(i2) | 0;
 if ((i3 | 0) == 0) {
  i4 = 5;
 } else {
  i2 = __ZNK7WebCore12RenderObject5themeEv(i3 | 0) | 0;
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 127](i2) | 0)) {
   i4 = 5;
  }
 }
 do {
  if ((i4 | 0) == 5) {
   if (__ZNK7WebCore9FrameView19hasCustomScrollbarsEv(i1) | 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore9FrameView17paintControlTintsEv(i1);
 return;
}
function __ZN7WebCore9FrameView37updateLayerFlushThrottlingInAllFramesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 216 | 0;
 i1 = __ZNK7WebCore15ProgressTracker21isMainLoadProgressingEv(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0) + 52 >> 2] | 0) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i4 = i3;
 }
 while (1) {
  i3 = __ZNK7WebCore5Frame15contentRendererEv(i4) | 0;
  if ((i3 | 0) != 0) {
   __ZN7WebCore21RenderLayerCompositor30setLayerFlushThrottlingEnabledEb(__ZN7WebCore10RenderView10compositorEv(i3) | 0, i1);
  }
  i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, HEAP32[i2 >> 2] | 0) | 0;
  if ((i4 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZThn36_N7WebCore9FrameView15contentsResizedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 664 + 628 | 0;
 __ZN7WebCore14ScrollableArea15contentsResizedEv(i2 + 36 | 0);
 if ((HEAP32[i2 + 564 >> 2] | 0) != 0) {
  HEAP8[i2 + 568 | 0] = 1;
  return;
 }
 i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 + 216 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = i1 + 20 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 & 1 | 0) != 0) {
  return;
 }
 HEAP32[i3 >> 2] = i1 | 1;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2, 1, 0);
 if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i2);
 return;
}
function __ZN7WebCore9FrameView15contentsResizedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore14ScrollableArea15contentsResizedEv(i1 + 36 | 0);
 if ((HEAP32[i1 + 564 >> 2] | 0) != 0) {
  HEAP8[i1 + 568 | 0] = 1;
  return;
 }
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = i2 + 20 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 & 1 | 0) != 0) {
  return;
 }
 HEAP32[i3 >> 2] = i2 | 1;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i1, 1, 0);
 if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i1);
 return;
}
function __ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 433 | 0;
 i4 = HEAP8[i3] & 1;
 HEAP8[i3] = 1;
 i5 = i1 + 596 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 8 | 0;
   i7 = i5 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore10ScrollView17setScrollPositionERKNS_8IntPointE(i1 | 0, i2);
 HEAP8[i3] = i4;
 return;
}
function __ZN7WebCore9FrameView20resetTrackedRepaintsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 536 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i3 = i1 + 540 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i1 + 532 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   HEAP32[i3 >> 2] = 0;
   HEAP32[i2 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor24resetTrackedRepaintRectsEv(__ZN7WebCore10RenderView10compositorEv(i2) | 0);
 return;
}
function __ZN7WebCore9FrameView18setContentIsOpaqueEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 228 | 0;
 if ((i2 & 1 | 0) == (HEAP8[i3] & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 i2 = i1 + 216 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i4 = i1;
 }
 while (1) {
  i1 = HEAP32[i4 + 452 >> 2] | 0;
  if ((i1 | 0) != 0) {
   __ZN7WebCore10ScrollView18setCanBlitOnScrollEb(i1 | 0, (__ZNK7WebCore9FrameView15useSlowRepaintsEb(i1, 1) | 0) ^ 1);
  }
  i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, HEAP32[i2 >> 2] | 0) | 0;
  if ((i4 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore9FrameView39updateCompositingLayersAfterStyleChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i1 + 304 >> 2] | 0) == 2) {
  return;
 }
 if (+HEAPF64[i1 + 248 >> 3] != +0) {
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] & 31 | 0) != 0) {
  return;
 }
 i1 = __ZN7WebCore10RenderView10compositorEv(i2) | 0;
 __ZN7WebCore21RenderLayerCompositor32cacheAcceleratedCompositingFlagsEv(i1);
 __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(i1, 0, 0);
 return;
}
function __ZThn36_NK7WebCore9FrameView25scrollableAreaBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i2 - 664 + 628 | 0;
 i2 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i6 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  __ZNK7WebCore6Widget9frameRectEv(i1, i6);
  STACKTOP = i3;
  return;
 } else {
  __ZNK7WebCore9RenderBox19absoluteContentQuadEv(i5, i2 | 0);
  __ZNK7WebCore9FloatQuad11boundingBoxEv(i4, i5);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore9FrameView27delegatesScrollingDidChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 216 | 0;
 i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if ((HEAP8[(__ZN7WebCore10RenderView10compositorEv(i1) | 0) + 88 | 0] & 1) == 0) {
  return;
 }
 i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = __ZN7WebCore10RenderView10compositorEv(i1) | 0;
 __ZN7WebCore21RenderLayerCompositor21enableCompositingModeEb(i2, 0);
 __ZN7WebCore21RenderLayerCompositor24clearBackingForAllLayersEv(i2);
 return;
}
function __ZN7WebCore9FrameView23updateCanHaveScrollbarsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 __ZNK7WebCore10ScrollView14scrollbarModesERNS_13ScrollbarModeES2_(i5, i3, i4);
 do {
  if ((HEAP32[i3 >> 2] | 0) == 1) {
   if ((HEAP32[i4 >> 2] | 0) != 1) {
    break;
   }
   HEAP8[i1 + 225 | 0] = 0;
   __ZN7WebCore10ScrollView20setCanHaveScrollbarsEb(i5, 0);
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAP8[i1 + 225 | 0] = 1;
 __ZN7WebCore10ScrollView20setCanHaveScrollbarsEb(i5, 1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore9FrameView14setNeedsLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 564 >> 2] | 0) != 0) {
  HEAP8[i1 + 568 | 0] = 1;
  return;
 }
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = i2 + 20 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 & 1 | 0) != 0) {
  return;
 }
 HEAP32[i3 >> 2] = i2 | 1;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i1, 1, 0);
 if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i1);
 return;
}
function __ZN7WebCore9FrameView28removeEmbeddedObjectToUpdateERNS_20RenderEmbeddedObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 212 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = i2;
 __ZN3WTF11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS3_EEE4findERKS3_(i4, i6, i5);
 __ZN3WTF11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS3_EEE6removeENS_19ListHashSetIteratorIS3_Lj256ES5_EE(i6, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView34updateLayerPositionsAfterScrollingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 304 >> 2] | 0) == 4) {
  return;
 }
 if ((HEAP32[i1 + 316 >> 2] | 0) >>> 0 >= 2 >>> 0) {
  return;
 }
 i2 = HEAP32[i1 + 640 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) <= 0) {
  return;
 }
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore9FrameView21updateWidgetPositionsEv(i1);
 __ZN7WebCore11RenderLayer39updateLayerPositionsAfterDocumentScrollEv(HEAP32[i2 + 40 >> 2] | 0);
 return;
}
function __ZN7WebCore9FrameView21scrollPositionChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 216 | 0;
 __ZN7WebCore12EventHandler15sendScrollEventEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 472 >> 2] | 0);
 __ZN7WebCore12EventHandler30dispatchFakeMouseMoveEventSoonEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 472 >> 2] | 0);
 i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if (!(__ZNK7WebCore10RenderView15usesCompositingEv(i1) | 0)) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor18frameViewDidScrollEv(__ZN7WebCore10RenderView10compositorEv(i1) | 0);
 return;
}
function __ZN7WebCore9FrameView25resetDeferredRepaintDelayEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAPF64[i1 + 512 >> 3] = +0;
 do {
  if (+HEAPF64[i1 + 464 >> 3] != +0) {
   __ZN7WebCore9TimerBase4stopEv(i1 + 456 | 0);
   if ((HEAP32[i1 + 436 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore9FrameView18doDeferredRepaintsEv(i1);
  }
 } while (0);
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor52disableLayerFlushThrottlingTemporarilyForInteractionEv(__ZN7WebCore10RenderView10compositorEv(i2) | 0);
 return;
}
function __ZNK7WebCore9FrameView25scrollableAreaBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = __ZNK7WebCore5Frame13ownerRendererEv(HEAP32[i2 + 216 >> 2] | 0) | 0;
 if ((i6 | 0) == 0) {
  __ZNK7WebCore6Widget9frameRectEv(i1, i2 | 0);
  STACKTOP = i3;
  return;
 } else {
  __ZNK7WebCore9RenderBox19absoluteContentQuadEv(i5, i6 | 0);
  __ZNK7WebCore9FloatQuad11boundingBoxEv(i4, i5);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore9FrameView26firePaintRelatedMilestonesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = i1 + 652 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 & 8 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = HEAP32[i2 + 212 >> 2] & 8;
 }
 if ((i1 & 32 | 0) == 0) {
  i5 = i4;
 } else {
  i5 = (HEAP32[i2 + 212 >> 2] & 32 | 0) == 0 ? i4 : i4 | 32;
 }
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore11FrameLoader9didLayoutEj((HEAP32[i2 + 60 >> 2] | 0) + 80 | 0, i5);
 return;
}
function __ZN7WebCore9FrameView11removeChildEPNS_6WidgetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 127](i2) | 0) {
   HEAP32[i4 >> 2] = i2 + 36;
   i5 = HEAP32[i1 + 636 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN3WTF7HashSetIPN7WebCore14ScrollableAreaENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i5, i4) | 0;
  }
 } while (0);
 __ZN7WebCore10ScrollView11removeChildEPNS_6WidgetE(i1 | 0, i2);
 STACKTOP = i3;
 return;
}
function __ZThn36_NK7WebCore9FrameView21minimumScrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 - 664 + 628 | 0;
 __ZNK7WebCore10ScrollView21minimumScrollPositionEv(i1, i5);
 i2 = HEAP32[i5 + 216 >> 2] | 0;
 if ((HEAP32[i2 + 28 >> 2] | 0) != (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 660 >> 2] | 0) != 2) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore9FrameView21maximumScrollPositionEv(i4, i5);
 HEAP32[i1 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView15setHeaderHeightEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 644 >> 2] = i2;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = i2 + 20 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 & 1 | 0) != 0) {
  return;
 }
 HEAP32[i3 >> 2] = i2 | 1;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i1, 1, 0);
 if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i1);
 return;
}
function __ZN7WebCore9FrameView15setFooterHeightEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 648 >> 2] = i2;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = i2 + 20 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 & 1 | 0) != 0) {
  return;
 }
 HEAP32[i3 >> 2] = i2 | 1;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i1, 1, 0);
 if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i1);
 return;
}
function __ZNK7WebCore9FrameView11needsLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if (+HEAPF64[i1 + 248 >> 3] != +0) {
  i3 = 1;
  return i3 | 0;
 }
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 20 >> 2] & 31 | 0) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 if ((HEAP32[i1 + 300 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 564 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i1 + 568 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZN7WebCore9FrameView37updateCompositingLayersAfterScrollingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 316 >> 2] | 0) >>> 0 >= 2 >>> 0) {
  return;
 }
 i2 = HEAP32[i1 + 640 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) <= 0) {
  return;
 }
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(__ZN7WebCore10RenderView10compositorEv(i2) | 0, 3, 0);
 return;
}
function __ZN7WebCore28paginationModeForRenderStyleERKNS_11RenderStyleE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = (HEAP32[i1 + 48 >> 2] | 0) >>> 13 & 7;
 if ((i2 - 6 | 0) >>> 0 > 1 >>> 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
 i5 = (i4 | 0) == 0;
 i6 = i5 | (i4 | 0) == 3;
 i7 = (HEAP32[i1 + 40 >> 2] | 0) >>> 30 & 1;
 if ((i2 | 0) == 6) {
  return (i6 & (i7 | 0) != 0 | (i4 | 0) == 2 ? 1 : 2) | 0;
 }
 if (i5) {
  i3 = 3;
  return i3 | 0;
 }
 i3 = (i7 | 0) == 0 & (i6 ^ 1) ? 3 : 4;
 return i3 | 0;
}
function __ZNK7WebCore9FrameView30isOverlappedIncludingAncestorsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 227 | 0] & 1) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
   i3 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i1 + 216 >> 2] | 0) + 40 | 0) | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i3 + 452 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   if ((HEAP8[i4 + 227 | 0] & 1) == 0) {
    break;
   } else {
    i2 = 1;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = 0;
 return i2 | 0;
}
function __ZN7WebCore9FrameView15resetScrollbarsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP8[i1 + 377 | 0] = 1;
 i2 = i1 | 0;
 __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i2, 1, 0);
 if ((HEAP8[i1 + 225 | 0] & 1) == 0) {
  __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i2, 1, 1, 0, 0);
  __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i2, 0, 0);
  return;
 } else {
  __ZN7WebCore10ScrollView17setScrollbarModesENS_13ScrollbarModeES1_bb(i2, 0, 0, 0, 0);
  __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i2, 0, 0);
  return;
 }
}
function __ZNK7WebCore9FrameView10paginationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 416 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 if ((HEAP8[i1 + 420 | 0] & 1) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 424 >> 2] | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 428 >> 2] | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 216 >> 2] | 0;
 if ((HEAP32[i4 + 28 >> 2] | 0) != (i4 | 0)) {
  i3 = i2;
  return i3 | 0;
 }
 i3 = (HEAP32[i4 + 32 >> 2] | 0) + 124 | 0;
 return i3 | 0;
}
function __ZN7WebCore9FrameView21setCannotBlitToWindowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP8[i1 + 226 | 0] = 1;
 i2 = i1 + 216 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i3 = i1;
 }
 while (1) {
  i1 = HEAP32[i3 + 452 >> 2] | 0;
  if ((i1 | 0) != 0) {
   __ZN7WebCore10ScrollView18setCanBlitOnScrollEb(i1 | 0, (__ZNK7WebCore9FrameView15useSlowRepaintsEb(i1, 1) | 0) ^ 1);
  }
  i3 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i3 + 40 | 0, HEAP32[i2 >> 2] | 0) | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore9FrameView37setScrollingPerformanceLoggingEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i3 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 284 >> 2] & 127](i3) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 127](i1, i2);
 return;
}
function __ZNK7WebCore9FrameView25contentsInCompositedLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 do {
  if ((i2 | 0) != 0) {
   if (!(__ZNK7WebCore12RenderObject12isCompositedEv(i2 | 0) | 0)) {
    break;
   }
   i1 = HEAP32[(HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 208 >> 2] | 0) + 16 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   if ((HEAP8[i1 + 340 | 0] & 32) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 0;
 return i3 | 0;
}
function __ZNK7WebCore9FrameView21minimumScrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore10ScrollView21minimumScrollPositionEv(i1, i2 | 0);
 i5 = HEAP32[i2 + 216 >> 2] | 0;
 if ((HEAP32[i5 + 28 >> 2] | 0) != (i5 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 660 >> 2] | 0) != 2) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore9FrameView21maximumScrollPositionEv(i4, i2);
 HEAP32[i1 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView32updateCanBlitOnScrollRecursivelyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 216 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i3 = i1;
 }
 while (1) {
  i1 = HEAP32[i3 + 452 >> 2] | 0;
  if ((i1 | 0) != 0) {
   __ZN7WebCore10ScrollView18setCanBlitOnScrollEb(i1 | 0, (__ZNK7WebCore9FrameView15useSlowRepaintsEb(i1, 1) | 0) ^ 1);
  }
  i3 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i3 + 40 | 0, HEAP32[i2 >> 2] | 0) | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore9FrameView37shouldUseLoadTimeDeferredRepaintDelayEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 216 | 0;
 if (__ZNK7WebCore11FrameLoader10isCompleteEv((__ZNK7WebCore9FrameTree3topEv((HEAP32[i2 >> 2] | 0) + 40 | 0) | 0) + 80 | 0) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i1 + 964 | 0] & 1) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[i1 + 340 >> 2] | 0) + 52 >> 2] | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore9FrameView13setNodeToDrawEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 572 | 0;
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
function __ZN7WebCore9FrameView24updateIsVisuallyNonEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 592 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 if (!(__ZNK7WebCore9FrameView27qualifiesAsVisuallyNonEmptyEv(i1) | 0)) {
  return;
 }
 HEAP8[i2] = 1;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv(i1);
 return;
}
function __ZN7WebCore9FrameView24notifyWidgetsInAllFramesENS_18WidgetNotificationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 216 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i4 = i1;
 }
 while (1) {
  i1 = HEAP32[i4 + 452 >> 2] | 0;
  if ((i1 | 0) != 0) {
   __ZN7WebCore9FrameView13notifyWidgetsENS_18WidgetNotificationE(i1, i2);
  }
  i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, HEAP32[i3 >> 2] | 0) | 0;
  if ((i4 | 0) == 0) {
   break;
  }
 }
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
function __ZN7WebCore9FrameView21beginDeferredRepaintsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 216 >> 2] | 0;
 i3 = HEAP32[i2 + 28 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  i4 = i1;
 } else {
  i1 = i3;
  while (1) {
   i3 = HEAP32[i1 + 452 >> 2] | 0;
   i2 = HEAP32[i3 + 216 >> 2] | 0;
   i5 = HEAP32[i2 + 28 >> 2] | 0;
   if ((i5 | 0) == (i2 | 0)) {
    i4 = i3;
    break;
   } else {
    i1 = i5;
   }
  }
 }
 i1 = i4 + 436 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZThn36_N7WebCore9FrameView21scrollbarStyleChangedEib(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i1 - 664 + 628 | 0;
 i1 = HEAP32[i4 + 216 >> 2] | 0;
 if ((HEAP32[i1 + 28 >> 2] | 0) != (i1 | 0)) {
  return;
 }
 i5 = HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 400 >> 2] & 127](i5, i2);
 if (!i3) {
  return;
 }
 __ZN7WebCore10ScrollView21scrollbarStyleChangedEib(i4, i2, 1);
 return;
}
function __ZN7WebCore9FrameView34updateCompositingLayersAfterLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor32cacheAcceleratedCompositingFlagsEv(__ZN7WebCore10RenderView10compositorEv(i2) | 0);
 __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(__ZN7WebCore10RenderView10compositorEv(i2) | 0, 1, 0);
 return;
}
function __ZN7WebCore9FrameView24didAddWidgetToRenderTreeERNS_6WidgetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore6WidgetES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 176 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9FrameView13scrollLayerIDEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
   i4 = 0;
  } else {
   i1 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 208 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i3 = 0;
    i4 = 0;
    break;
   }
   i5 = i1 + 56 | 0;
   i3 = HEAP32[i5 + 4 >> 2] | 0;
   i4 = HEAP32[i5 >> 2] | 0;
  }
 } while (0);
 return (tempRet0 = i3, i4) | 0;
}
function __ZN7WebCore9FrameView12setMediaTypeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 400 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore9FrameView18paintOverhangAreasEPNS_15GraphicsContextERKNS_7IntRectES5_S5_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0) {
  return;
 }
 if ((HEAP8[(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 456 >> 2] | 0) + 660 | 0] & 1) != 0) {
  return;
 }
 __ZN7WebCore10ScrollView18paintOverhangAreasEPNS_15GraphicsContextERKNS_7IntRectES5_S5_(i1 | 0, i2, i3, i4, i5);
 return;
}
function __ZN7WebCore9FrameView21scrollbarStyleChangedEib(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i1 + 216 >> 2] | 0;
 if ((HEAP32[i4 + 28 >> 2] | 0) != (i4 | 0)) {
  return;
 }
 i5 = HEAP32[(HEAP32[(HEAP32[i4 + 32 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 400 >> 2] & 127](i5, i2);
 if (!i3) {
  return;
 }
 __ZN7WebCore10ScrollView21scrollbarStyleChangedEib(i1 | 0, i2, 1);
 return;
}
function __ZNK7WebCore9FrameView23mapFromCSSToLayoutUnitsEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, d5 = +0, d6 = +0, i7 = 0;
 i4 = HEAP32[i2 + 216 >> 2] | 0;
 d5 = +(i3 | 0) * +HEAPF32[i4 + 480 >> 2];
 d6 = d5 * +__ZNK7WebCore5Frame16frameScaleFactorEv(i4);
 do {
  if (d6 < +2147483647) {
   if (d6 <= +-2147483648) {
    i7 = -2147483648;
    break;
   }
   i7 = ~~d6;
  } else {
   i7 = 2147483647;
  }
 } while (0);
 HEAP32[i1 >> 2] = i7;
 return;
}
function __ZN7WebCore9FrameView20removeScrollableAreaEPNS_14ScrollableAreaE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = HEAP32[i1 + 636 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 i5 = __ZN3WTF7HashSetIPN7WebCore14ScrollableAreaENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i2, i4) | 0;
 STACKTOP = i3;
 return i5 | 0;
}
function __ZNK7WebCore9FrameView23mapFromLayoutToCSSUnitsENS_10LayoutUnitE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, d6 = +0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = HEAP32[i1 + 216 >> 2] | 0;
 d5 = +HEAPF32[i4 + 480 >> 2];
 d6 = d5 * +__ZNK7WebCore5Frame16frameScaleFactorEv(i4);
 STACKTOP = i3;
 return ~~(+(HEAP32[i2 >> 2] | 0) / d6) | 0;
}
function __ZThn36_N7WebCore9FrameView19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 - 664 + 628 | 0;
 __ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i4 + 36 | 0, i2, i3);
 i3 = HEAP32[(HEAP32[i4 + 216 >> 2] | 0) + 456 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZNK7WebCore8Document21existingAXObjectCacheEv(i3) | 0;
 return;
}
function __ZThn36_N7WebCore9FrameView19willStartLiveResizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 664 + 628 | 0;
 __ZN7WebCore14ScrollableArea19willStartLiveResizeEv(i2 + 36 | 0);
 i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 + 216 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv(i2);
 return;
}
function __ZThn36_N7WebCore9FrameView12tiledBackingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 - 664 + 844 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 284 >> 2] & 127](i2) | 0;
 return i3 | 0;
}
function __ZThn36_NK7WebCore9FrameView23usesCompositedScrollingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 664 + 844 | 0;
 i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0) + 183 | 0] & 8) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[(__ZN7WebCore10RenderView10compositorEv(i1) | 0) + 92 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZThn36_N7WebCore9FrameView17willEndLiveResizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 664 + 628 | 0;
 __ZN7WebCore14ScrollableArea17willEndLiveResizeEv(i2 + 36 | 0);
 i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 + 216 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv(i2);
 return;
}
function __ZThn36_N7WebCore9FrameView15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 - 664 + 628 | 0;
 __ZN7WebCore14ScrollableArea15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i4 + 36 | 0, i2, i3);
 i3 = HEAP32[(HEAP32[i4 + 216 >> 2] | 0) + 456 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZNK7WebCore8Document21existingAXObjectCacheEv(i3) | 0;
 return;
}
function __ZNK7WebCore9FrameView18embeddedContentBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return 0;
 }
 i1 = HEAP32[i2 + 28 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return 0;
 }
 if ((HEAP32[i1 + 20 >> 2] & 512 | 0) == 0) {
  return 0;
 } else {
  i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 324 >> 2] & 127](i1) | 0;
  return (i2 ? i1 : 0) | 0;
 }
 return 0;
}
function __ZN7WebCore9FrameView24renderedCharactersExceedEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 216 | 0;
 if ((__ZNK7WebCore5Frame15contentRendererEv(HEAP32[i3 >> 2] | 0) | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (__ZN7WebCoreL50countRenderedCharactersInRenderObjectWithThresholdERKNS_12RenderObjectEjj(__ZNK7WebCore5Frame15contentRendererEv(HEAP32[i3 >> 2] | 0) | 0, 0, i2) | 0) >>> 0 >= i2 >>> 0;
 return i4 | 0;
}
function __ZN7WebCore9FrameView12tiledBackingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 284 >> 2] & 127](i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore9FrameView23usesCompositedScrollingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 216 | 0;
 i1 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i2 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[(HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0) + 183 | 0] & 8) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[(__ZN7WebCore10RenderView10compositorEv(i1) | 0) + 92 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZN7WebCore9FrameView20restoreBackingStoresEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = __ZN7WebCore10RenderView10compositorEv(i2) | 0;
 __ZN7WebCore21RenderLayerCompositor21enableCompositingModeEb(i1, 1);
 __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(i1, 1, 0);
 return;
}
function __ZThn36_NK7WebCore9FrameView38updatesScrollLayerPositionOnMainThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 - 664 + 844 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = __ZN7WebCore4Page20scrollingCoordinatorEv(i2) | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (__ZNK7WebCore20ScrollingCoordinator27synchronousScrollingReasonsEv(i1) | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore5TimerINS_9FrameViewEE5firedEv(i1) {
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
function __ZNK7WebCore9FrameView38updatesScrollLayerPositionOnMainThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = __ZN7WebCore4Page20scrollingCoordinatorEv(i2) | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (__ZNK7WebCore20ScrollingCoordinator27synchronousScrollingReasonsEv(i1) | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore9FrameView19willStartLiveResizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore14ScrollableArea19willStartLiveResizeEv(i1 + 36 | 0);
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv(i1);
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
function __ZThn36_NK7WebCore10ScrollView14scrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2 - 176 + 140 | 0;
 i2 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 164 >> 2] & 63](i4, i5, 0);
 i5 = i1;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView17willEndLiveResizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore14ScrollableArea17willEndLiveResizeEv(i1 + 36 | 0);
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv(i1);
 return;
}
function __ZN7WebCore9FrameView19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1 + 36 | 0, i2, i3);
 i3 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 456 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZNK7WebCore8Document21existingAXObjectCacheEv(i3) | 0;
 return;
}
function __ZN7WebCore9FrameView15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ScrollableArea15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1 + 36 | 0, i2, i3);
 i3 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 456 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZNK7WebCore8Document21existingAXObjectCacheEv(i3) | 0;
 return;
}
function __ZN7WebCore9FrameView23addedOrRemovedScrollbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if (!(__ZNK7WebCore10RenderView15usesCompositingEv(i2) | 0)) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor33frameViewDidAddOrRemoveScrollbarsEv(__ZN7WebCore10RenderView10compositorEv(i2) | 0);
 return;
}
function __ZNK7WebCore10ScrollView14scrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 164 >> 2] & 63](i4, i2, 0);
 i2 = i1;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView18clearBackingStoresEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = __ZN7WebCore10RenderView10compositorEv(i2) | 0;
 __ZN7WebCore21RenderLayerCompositor21enableCompositingModeEb(i1, 0);
 __ZN7WebCore21RenderLayerCompositor24clearBackingForAllLayersEv(i1);
 return;
}
function __ZThn36_N7WebCore9FrameView17scheduleAnimationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 - 664 + 844 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 63](i1 | 0);
 i3 = 1;
 return i3 | 0;
}
function __ZThn36_N7WebCore9FrameView27setVisibleScrollerThumbRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 - 664 + 844 >> 2] | 0;
 if ((HEAP32[i3 + 28 >> 2] | 0) != (i3 | 0)) {
  return;
 }
 i1 = HEAP32[(HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 396 >> 2] & 127](i1, i2);
 return;
}
function __ZN7WebCore9FrameView17scheduleAnimationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 63](i1 | 0);
 i3 = 1;
 return i3 | 0;
}
function __ZN7WebCore9FrameView27setVisibleScrollerThumbRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 216 >> 2] | 0;
 if ((HEAP32[i3 + 28 >> 2] | 0) != (i3 | 0)) {
  return;
 }
 i1 = HEAP32[(HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 396 >> 2] & 127](i1, i2);
 return;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZN7WebCore9FrameView26adjustTiledBackingCoverageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv(i1);
 return;
}
function __ZNK7WebCore9FrameView25visibleContentScaleFactorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0;
 i2 = HEAP32[i1 + 216 >> 2] | 0;
 if ((HEAP32[i2 + 28 >> 2] | 0) != (i2 | 0)) {
  d3 = +1;
  return +d3;
 }
 if ((HEAP8[(HEAP32[i2 + 36 >> 2] | 0) + 183 | 0] | 0) >= 0) {
  d3 = +1;
  return +d3;
 }
 d3 = +HEAPF32[(HEAP32[i2 + 32 >> 2] | 0) + 112 >> 2];
 return +d3;
}
function __ZThn36_NK7WebCore9FrameView17layerForScrollingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 - 664 + 844 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore21RenderLayerCompositor11scrollLayerEv(__ZN7WebCore10RenderView10compositorEv(i2) | 0) | 0;
 return i3 | 0;
}
function __ZNK7WebCore9FrameView20isSoftwareRenderableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (__ZNK7WebCore21RenderLayerCompositor12has3DContentEv(__ZN7WebCore10RenderView10compositorEv(i2) | 0) | 0) ^ 1;
 return i3 | 0;
}
function __ZN7WebCore9FrameView30willRemoveWidgetFromRenderTreeERNS_6WidgetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore6WidgetENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 176 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9FrameView28adjustedDeferredRepaintDelayEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, d4 = +0, d5 = +0;
 i2 = i1 + 512 | 0;
 if (+HEAPF64[i2 >> 3] == +0) {
  d3 = +0;
  return +d3;
 }
 d4 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
 d5 = +HEAPF64[i2 >> 3] - (d4 - +HEAPF64[i1 + 520 >> 3]);
 d3 = d5 > +0 ? d5 : +0;
 return +d3;
}
function __ZNK7WebCore9FrameView17layerForScrollingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore21RenderLayerCompositor11scrollLayerEv(__ZN7WebCore10RenderView10compositorEv(i2) | 0) | 0;
 return i3 | 0;
}
function __ZNK7WebCore9FrameView18isVerticalDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i3 = (i1 | 0) == 0 | (i1 | 0) == 3;
 return i3 | 0;
}
function __ZNK7WebCore9FrameView15shouldSetCursorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i2 + 210 | 0] & 1) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[(HEAP32[i2 + 32 >> 2] | 0) + 8 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZNK7WebCore9FrameView17isFlippedDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i3 = (i1 | 0) == 1 | (i1 | 0) == 3;
 return i3 | 0;
}
function __ZNK7WebCore9FrameView15parentFrameViewEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = __ZNK7WebCore9FrameTree6parentEv((HEAP32[i1 + 216 >> 2] | 0) + 40 | 0) | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i3 + 452 >> 2] | 0;
 return i2 | 0;
}
function __ZNK7WebCore9FrameView12shouldUpdateEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 do {
  if (!i2) {
   if (!(__ZNK7WebCore10ScrollView11isOffscreenEv(i1 | 0) | 0)) {
    break;
   }
   if ((HEAP8[i1 + 544 | 0] & 1) == 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 1;
 return i3 | 0;
}
function __ZThn36_NK7WebCore9FrameView27layerForHorizontalScrollbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 - 664 + 844 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(__ZN7WebCore10RenderView10compositorEv(i2) | 0) + 156 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore9FrameView31setVisualUpdatesAllowedByClientEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 656 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 __ZN7WebCore8Document31setVisualUpdatesAllowedByClientEb(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 456 >> 2] | 0, i2);
 return;
}
function __ZThn36_NK7WebCore9FrameView25layerForVerticalScrollbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 - 664 + 844 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(__ZN7WebCore10RenderView10compositorEv(i2) | 0) + 160 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore9FrameView36scheduleLayerFlushAllowingThrottlingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor18scheduleLayerFlushEb(__ZN7WebCore10RenderView10compositorEv(i2) | 0, 1);
 return;
}
function viiii___ZThn36_NK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZThn36_NK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZThn36_NK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZThn36_NK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZThn36_NK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZThn36_NK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZThn36_NK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZThn36_NK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZThn36_NK7WebCore9FrameView20layerForScrollCornerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 - 664 + 844 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(__ZN7WebCore10RenderView10compositorEv(i2) | 0) + 164 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore9FrameView37setNeedsOneShotDrawingSynchronizationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 304 >> 2] & 63](i1);
 return;
}
function __ZN7WebCore9FrameView15setMarginHeightENS_10LayoutUnitE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 + 208 >> 2] = HEAP32[i2 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9FrameView14setMarginWidthENS_10LayoutUnitE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 + 204 >> 2] = HEAP32[i2 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9FrameView27layerForHorizontalScrollbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(__ZN7WebCore10RenderView10compositorEv(i2) | 0) + 156 >> 2] | 0;
 return i3 | 0;
}
function viii___ZThn36_NK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn36_NK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9FrameView25layerForVerticalScrollbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(__ZN7WebCore10RenderView10compositorEv(i2) | 0) + 160 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9FrameView20hasCompositedContentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[(__ZN7WebCore10RenderView10compositorEv(i2) | 0) + 88 | 0] & 1) != 0;
 return i3 | 0;
}
function viiii___ZNK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZThn36_NK7WebCore10ScrollView13visibleHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 - 176 + 140 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 63](i3, i4, 0);
 STACKTOP = i2;
 return HEAP32[i3 + 12 >> 2] | 0;
}
function viiii___ZNK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZThn36_NK7WebCore10ScrollView12visibleWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 - 176 + 140 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 164 >> 2] & 63](i3, i4, 0);
 STACKTOP = i2;
 return HEAP32[i3 + 8 >> 2] | 0;
}
function __ZNK7WebCore9FrameView20layerForScrollCornerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(__ZN7WebCore10RenderView10compositorEv(i2) | 0) + 164 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore9FrameView17windowResizerRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i2 + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  return;
 } else {
  __ZNK7WebCore6Chrome17windowResizerRectEv(i1, HEAP32[i3 + 20 >> 2] | 0);
  return;
 }
}
function viii___ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9FrameView10layoutRootEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if (i2) {
  if (+HEAPF64[i1 + 248 >> 3] != +0) {
   i3 = 0;
  } else {
   i4 = 3;
  }
 } else {
  i4 = 3;
 }
 if ((i4 | 0) == 3) {
  i3 = HEAP32[i1 + 300 >> 2] | 0;
 }
 return i3 | 0;
}
function __ZNK7WebCore10ScrollView13visibleHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 63](i3, i1, 0);
 STACKTOP = i2;
 return HEAP32[i3 + 12 >> 2] | 0;
}
function __ZThn36_NK7WebCore9FrameView8isActiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 - 664 + 844 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[(HEAP32[i2 + 32 >> 2] | 0) + 8 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZNK7WebCore10ScrollView12visibleWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 164 >> 2] & 63](i3, i1, 0);
 STACKTOP = i2;
 return HEAP32[i3 + 8 >> 2] | 0;
}
function __ZNK7WebCore9FrameView13axObjectCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 456 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore8Document21existingAXObjectCacheEv(i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore9FrameView6createERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZN3WTF10fastMallocEj(664) | 0;
 i4 = i3;
 __ZN7WebCore9FrameViewC2ERNS_5FrameE(i4, i2);
 __ZN7WebCore10ScrollView4showEv(i3);
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZN7WebCore9FrameView13setIsInWindowEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore10RenderView13setIsInWindowEb(i3, i2);
 return;
}
function __ZNK7WebCore9FrameView8isActiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[(HEAP32[i2 + 32 >> 2] | 0) + 8 | 0] & 1) != 0;
 return i3 | 0;
}
function viii___ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore9FrameView5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 | 0;
 __ZN7WebCore10ScrollView18setCanBlitOnScrollEb(i2, 1);
 __ZN7WebCore9FrameView5resetEv(i1);
 __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i2, 1, 0);
 return;
}
function __ZN7WebCore9FrameView23removeFromAXObjectCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 456 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZNK7WebCore8Document21existingAXObjectCacheEv(i2) | 0;
 return;
}
function __ZN7WebCore11LayoutStateD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 12 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  __ZN7WebCore11LayoutStateD1Ev(i1);
  __ZdlPv(i1 | 0);
  return;
 }
}
function vii___ZThn36_N7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn36_N7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore9FrameView10hostWindowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 return i3 | 0;
}
function viii___ZN7WebCore10ScrollView5paintEPNS_15GraphicsContextERKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10ScrollView5paintEPNS_15GraphicsContextERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9FrameView19baseBackgroundColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 380 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function vii___ZN7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore9FrameView19hasOpaqueBackgroundEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 378 | 0] & 1) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 380 >> 2] & -16777216 | 0) == -16777216;
 return i2 | 0;
}
function __ZN7WebCore9FrameView21flushDeferredRepaintsEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 464 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 456 | 0);
 __ZN7WebCore9FrameView18doDeferredRepaintsEv(i1);
 return;
}
function iii___ZThn36_NK7WebCore10ScrollView10scrollSizeENS_20ScrollbarOrientationE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZThn36_NK7WebCore10ScrollView10scrollSizeENS_20ScrollbarOrientationE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZThn36_NK7WebCore9FrameView22lastKnownMousePositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12EventHandler22lastKnownMousePositionEv(i1, HEAP32[(HEAP32[i2 - 664 + 844 >> 2] | 0) + 472 >> 2] | 0);
 return;
}
function __ZN7WebCore9FrameView22fixedLayoutSizeChangedEv(i1) {
 i1 = i1 | 0;
 if ((HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 452 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore10ScrollView22fixedLayoutSizeChangedEv(i1 | 0);
 return;
}
function vii___ZThn36_N7WebCore10ScrollView26invalidateScrollCornerRectERKNS_7IntRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn36_N7WebCore10ScrollView26invalidateScrollCornerRectERKNS_7IntRectE(i1 | 0, i2 | 0);
}
function iii___ZN7WebCore10ScrollView24isPointInScrollbarCornerERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10ScrollView24isPointInScrollbarCornerERKNS_8IntPointE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore10ScrollView10scrollSizeENS_20ScrollbarOrientationE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10ScrollView10scrollSizeENS_20ScrollbarOrientationE(i1 | 0, i2 | 0) | 0;
}
function __ZNK7WebCore9FrameView22lastKnownMousePositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12EventHandler22lastKnownMousePositionEv(i1, HEAP32[(HEAP32[i2 + 216 >> 2] | 0) + 472 >> 2] | 0);
 return;
}
function iii___ZThn36_NK7WebCore10ScrollView14scrollPositionEPNS_9ScrollbarE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZThn36_NK7WebCore10ScrollView14scrollPositionEPNS_9ScrollbarE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore10ScrollView26invalidateScrollCornerRectERKNS_7IntRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10ScrollView26invalidateScrollCornerRectERKNS_7IntRectE(i1 | 0, i2 | 0);
}
function __ZN7WebCore9FrameView25startDeferredRepaintTimerEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 if (+HEAPF64[i1 + 464 >> 3] != +0) {
  return;
 }
 __ZN7WebCore9TimerBase5startEdd(i1 + 456 | 0, d2, +0);
 return;
}
function vii___ZThn36_N7WebCore10ScrollView15setScrollOffsetERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn36_N7WebCore10ScrollView15setScrollOffsetERKNS_8IntPointE(i1 | 0, i2 | 0);
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
function __ZN7WebCore9FrameView18unscheduleRelayoutEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 248 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 240 | 0);
 HEAP8[i1 + 296 | 0] = 0;
 return;
}
function iii___ZNK7WebCore10ScrollView14scrollPositionEPNS_9ScrollbarE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10ScrollView14scrollPositionEPNS_9ScrollbarE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore9FrameView30flushAnyPendingPostLayoutTasksEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 328 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9FrameView22performPostLayoutTasksEv(i1);
 return;
}
function __ZN7WebCore9FrameView20setCanHaveScrollbarsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 225 | 0] = i2 & 1;
 __ZN7WebCore10ScrollView20setCanHaveScrollbarsEb(i1 | 0, i2);
 return;
}
function vii___ZN7WebCore10ScrollView15setScrollOffsetERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10ScrollView15setScrollOffsetERKNS_8IntPointE(i1 | 0, i2 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore9FrameView30scrollBehaviorForFixedElementsEv(i1) {
 i1 = i1 | 0;
 return (HEAPU8[(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 36 >> 2] | 0) + 182 | 0] | 0) >>> 7 & 255 | 0;
}
function __ZThn36_NK7WebCore9FrameView21maximumScrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9FrameView21maximumScrollPositionEv(i1, i2 - 664 + 628 | 0);
 return;
}
function __ZThn36_NK7WebCore9FrameView20isHandlingWheelEventEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[(HEAP32[i1 - 664 + 844 >> 2] | 0) + 472 >> 2] | 0) + 414 | 0] & 1) != 0 | 0;
}
function __ZNK7WebCore9FrameView34fixedElementsLayoutRelativeToFrameEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 36 >> 2] | 0) + 184 | 0] | 0) < 0 | 0;
}
function vii___ZThn36_NK7WebCore10ScrollView16scrollCornerRectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn36_NK7WebCore10ScrollView16scrollCornerRectEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore9FrameView25addPaintPendingMilestonesEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 652 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | i2;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZThn36_NK7WebCore10ScrollView14overhangAmountEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn36_NK7WebCore10ScrollView14overhangAmountEv(i1 | 0, i2 | 0);
}
function ii___ZThn36_NK7WebCore10ScrollView21isScrollCornerVisibleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn36_NK7WebCore10ScrollView21isScrollCornerVisibleEv(i1 | 0) | 0;
}
function vii___ZThn36_NK7WebCore10ScrollView12contentsSizeEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn36_NK7WebCore10ScrollView12contentsSizeEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore9FrameView25deferredRepaintTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9FrameView18doDeferredRepaintsEv(i1);
 return;
}
function __ZNK7WebCore9FrameView22frameFlatteningEnabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 36 >> 2] | 0) + 185 | 0] & 16) != 0 | 0;
}
function __ZN7WebCore9FrameView20postLayoutTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9FrameView22performPostLayoutTasksEv(i1);
 return;
}
function __ZNK7WebCore9FrameView20isHandlingWheelEventEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 472 >> 2] | 0) + 414 | 0] & 1) != 0 | 0;
}
function vii___ZNK7WebCore10ScrollView16scrollCornerRectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore10ScrollView16scrollCornerRectEv(i1 | 0, i2 | 0);
}
function __ZThn36_N7WebCore9FrameViewD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 664 + 628 | 0;
 __ZN7WebCore9FrameViewD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn36_NK7WebCore9FrameView29shouldSuspendScrollAnimationsEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 - 664 + 844 >> 2] | 0) + 120 >> 2] | 0) != 2 | 0;
}
function vii___ZN7WebCore10ScrollView16setParentVisibleEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10ScrollView16setParentVisibleEb(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore10ScrollView14overhangAmountEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore10ScrollView14overhangAmountEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore10ScrollView22scrollbarCornerPresentEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10ScrollView22scrollbarCornerPresentEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore10ScrollView21isScrollCornerVisibleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10ScrollView21isScrollCornerVisibleEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore10ScrollView12contentsSizeEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore10ScrollView12contentsSizeEv(i1 | 0, i2 | 0);
}
function v___ZN7WebCore10ScrollView8addChildEN3WTF10PassRefPtrINS_6WidgetEEE__wrapper() {
 __ZN7WebCore10ScrollView8addChildEN3WTF10PassRefPtrINS_6WidgetEEE();
}
function vii___ZN7WebCore10ScrollView9setParentEPS0___wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10ScrollView9setParentEPS0_(i1 | 0, i2 | 0);
}
function __ZN7WebCore9FrameView62setRepaintThrottlingDeferredRepaintDelayIncrementDuringLoadingEd(d1) {
 d1 = +d1;
 HEAPF64[H_BASE + 760 >> 3] = d1;
 return;
}
function __ZNK7WebCore9FrameView29shouldSuspendScrollAnimationsEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 216 >> 2] | 0) + 120 >> 2] | 0) != 2 | 0;
}
function __ZN7WebCore9FrameView61setRepaintThrottlingnInitialDeferredRepaintDelayDuringLoadingEd(d1) {
 d1 = +d1;
 HEAPF64[H_BASE + 768 >> 3] = d1;
 return;
}
function __ZN7WebCore9FrameView16layoutTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9FrameView6layoutEb(i1, 1);
 return;
}
function __ZN7WebCore9FrameView56setRepaintThrottlingMaxDeferredRepaintDelayDuringLoadingEd(d1) {
 d1 = +d1;
 HEAPF64[H_BASE + 776 >> 3] = d1;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 63](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore9FrameView30useSlowRepaintsIfNotOverlappedEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9FrameView15useSlowRepaintsEb(i1, 0) | 0;
}
function __ZN7WebCore9FrameView16restoreScrollbarEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10ScrollView23setScrollbarsSuppressedEbb(i1 | 0, 0, 0);
 return;
}
function __ZN7WebCore9FrameView17willMoveOffscreenEv(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore14ScrollableArea18contentAreaDidHideEv(i1 + 36 | 0);
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore9FrameView15didMoveOnscreenEv(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore14ScrollableArea18contentAreaDidShowEv(i1 + 36 | 0);
 return;
}
function __ZNK7WebCore9FrameView10renderViewEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i1 + 216 >> 2] | 0) | 0;
}
function vi___ZN7WebCore10ScrollView17frameRectsChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10ScrollView17frameRectsChangedEv(i1 | 0);
}
function __ZN7WebCore9FrameView29setShouldUpdateWhileOffscreenEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 544 | 0] = i2 & 1;
 return;
}
function __ZN7WebCore5TimerINS_9FrameViewEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function vii___ZN7WebCore6Widget8setFocusEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore6Widget8setFocusEb(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore10ScrollView15clipRectChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10ScrollView15clipRectChangedEv(i1 | 0);
}
function __ZN7WebCore9FrameView40setRepaintThrottlingDeferredRepaintDelayEd(d1) {
 d1 = +d1;
 HEAPF64[H_BASE + 784 >> 3] = d1;
 return;
}
function __ZN7WebCore9FrameView11forceLayoutEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9FrameView6layoutEb(i1, i2);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZThn36_N7WebCore9FrameView27requestScrollPositionUpdateERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function __ZN7WebCore9FrameView16setPaintBehaviorEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 576 >> 2] = i2;
 return;
}
function __ZN7WebCore9FrameView14setTransparentEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 378 | 0] = i2 & 1;
 return;
}
function __ZNK7WebCore9FrameView26shouldUpdateWhileOffscreenEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 544 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore9FrameView27requestScrollPositionUpdateERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function __ZThn36_NK7WebCore10ScrollView19horizontalScrollbarEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 196 >> 2] | 0;
}
function __ZN7WebCore9FrameViewD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9FrameViewD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function __ZThn36_NK7WebCore10ScrollView17verticalScrollbarEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 200 >> 2] | 0;
}
function __ZThn36_N7WebCore9FrameViewD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9FrameViewD2Ev(i1 - 664 + 628 | 0);
 return;
}
function __ZNK7WebCore9FrameView17wasScrolledByUserEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 432 | 0] & 1) != 0 | 0;
}
function __ZThn36_NK7WebCore9FrameView12headerHeightEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 664 + 1272 >> 2] | 0;
}
function __ZThn36_NK7WebCore9FrameView12footerHeightEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 664 + 1276 >> 2] | 0;
}
function vi___ZN7WebCore10ScrollView4showEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10ScrollView4showEv(i1 | 0);
}
function vi___ZN7WebCore10ScrollView4hideEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10ScrollView4hideEv(i1 | 0);
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function __ZNK7WebCore9FrameView14didFirstLayoutEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 377 | 0] & 1) == 0 | 0;
}
function __ZN7WebCore6Widget12notifyWidgetENS_18WidgetNotificationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore9FrameView13isTransparentEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 378 | 0] & 1) != 0 | 0;
}
function __ZNK7WebCore9FrameView13layoutPendingEv(i1) {
 i1 = i1 | 0;
 return +HEAPF64[i1 + 248 >> 3] != +0 | 0;
}
function __ZNK7WebCore10ScrollView19horizontalScrollbarEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 56 >> 2] | 0;
}
function __ZNK7WebCore9FrameView43shouldUpdateCompositingLayersAfterScrollingEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore9FrameView10isPaintingEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 580 | 0] & 1) != 0 | 0;
}
function __ZNK7WebCore10ScrollView17verticalScrollbarEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 60 >> 2] | 0;
}
function __ZN7WebCore5TimerINS_9FrameViewEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 127](i2 | 0) | 0;
}
function __ZNK7WebCore9FrameView13paintBehaviorEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 576 >> 2] | 0;
}
function __ZNK7WebCore9FrameView12headerHeightEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 644 >> 2] | 0;
}
function __ZNK7WebCore9FrameView12footerHeightEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 648 >> 2] | 0;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 3](i2 | 0);
}
function __ZN7WebCore6Widget11handleEventEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function __ZThn36_NK7WebCore9FrameView23enclosingScrollableAreaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZThn36_NK7WebCore9FrameView21scrollAnimatorEnabledEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9FrameView23enclosingScrollableAreaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9FrameView21scrollAnimatorEnabledEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore6Widget25transformsAffectFrameRectEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore10ScrollView12isScrollViewEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore6Widget16isPluginViewBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function __ZNK7WebCore9FrameView11isFrameViewEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore6Widget12isPluginViewEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore6Widget11isScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
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
 FUNCTION_TABLE_v[i1 & 3]();
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
function b8(i1) {
 i1 = i1 | 0;
 abort(8);
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
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,__ZN7WebCore9FrameView22scrollContentsFastPathERKNS_7IntSizeERKNS_7IntRectES6_,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,__ZN7WebCore9FrameView18paintOverhangAreasEPNS_15GraphicsContextERKNS_7IntRectES5_S5_,b1];
  var FUNCTION_TABLE_did = [b2,b2,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore9FrameView22fixedLayoutSizeChangedEv,b3,__ZN7WebCore9FrameViewD2Ev,b3,vi___ZN7WebCore10ScrollView4showEv__wrapper,b3,__ZThn36_N7WebCore9FrameView19willStartLiveResizeEv,b3,__ZN7WebCore9FrameView37updateCompositingLayersAfterScrollingEv,b3,__ZThn36_N7WebCore9FrameViewD1Ev,b3,vi___ZN7WebCore10ScrollView17frameRectsChangedEv__wrapper,b3,__ZN7WebCore5TimerINS_9FrameViewEED0Ev,b3,vi___ZN7WebCore10ScrollView4hideEv__wrapper,b3,__ZN7WebCore9FrameView18updateScrollCornerEv,b3,__ZNK7WebCore9FrameView34notifyPageThatContentAreaWillPaintEv,b3,__ZN7WebCore9FrameView27delegatesScrollingDidChangeEv,b3,__ZN7WebCore9FrameView34updateLayerPositionsAfterScrollingEv,b3,__ZThn36_N7WebCore9FrameViewD0Ev
  ,b3,__ZN7WebCore9FrameView17willEndLiveResizeEv,b3,__ZN7WebCore9FrameView19willStartLiveResizeEv,b3,__ZThn36_N7WebCore9FrameView17willEndLiveResizeEv,b3,__ZThn36_N7WebCore9FrameView15contentsResizedEv,b3,__ZN7WebCore5TimerINS_9FrameViewEED1Ev,b3,__ZN7WebCore9FrameView22visibleContentsResizedEv,b3,vi___ZN7WebCore10ScrollView15clipRectChangedEv__wrapper,b3,__ZN7WebCore9FrameView15contentsResizedEv,b3,__ZN7WebCore5TimerINS_9FrameViewEE5firedEv,b3,__ZN7WebCore9FrameView23addedOrRemovedScrollbarEv,b3,__ZN7WebCore9FrameViewD0Ev,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,vii___ZThn36_N7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE__wrapper,b4,vii___ZThn36_NK7WebCore10ScrollView14overhangAmountEv__wrapper,b4,__ZThn36_NK7WebCore9FrameView21minimumScrollPositionEv,b4,__ZN7WebCore9FrameView20setCanHaveScrollbarsEb,b4,__ZN7WebCore6Widget11handleEventEPNS_5EventE,b4,__ZThn36_NK7WebCore9FrameView22lastKnownMousePositionEv,b4,__ZN7WebCore9FrameView11removeChildEPNS_6WidgetE,b4,vii___ZThn36_N7WebCore10ScrollView15setScrollOffsetERKNS_8IntPointE__wrapper,b4,__ZN7WebCore9FrameView16layoutTimerFiredEPNS_5TimerIS0_EE,b4,vii___ZN7WebCore10ScrollView15setScrollOffsetERKNS_8IntPointE__wrapper,b4,vii___ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE__wrapper,b4,__ZNK7WebCore9FrameView21minimumScrollPositionEv,b4,__ZNK7WebCore9FrameView21maximumScrollPositionEv,b4,__ZN7WebCore9FrameView26setFixedVisibleContentRectERKNS_7IntRectE
  ,b4,vii___ZNK7WebCore10ScrollView16scrollCornerRectEv__wrapper,b4,__ZN7WebCore9FrameView20postLayoutTimerFiredEPNS_5TimerIS0_EE,b4,__ZN7WebCore9FrameView8scrollToERKNS_7IntSizeE,b4,vii___ZThn36_N7WebCore10ScrollView26invalidateScrollCornerRectERKNS_7IntRectE__wrapper,b4,vii___ZN7WebCore6Widget8setFocusEb__wrapper,b4,vii___ZN7WebCore10ScrollView9setParentEPS0___wrapper,b4,__ZN7WebCore6Widget12notifyWidgetENS_18WidgetNotificationE,b4,__ZN7WebCore9FrameView12setFrameRectERKNS_7IntRectE,b4,vii___ZN7WebCore10ScrollView24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE__wrapper,b4,__ZThn36_NK7WebCore9FrameView21maximumScrollPositionEv,b4,vii___ZNK7WebCore10ScrollView14overhangAmountEv__wrapper,b4,__ZNK7WebCore9FrameView17windowResizerRectEv,b4,__ZNK7WebCore9FrameView22lastKnownMousePositionEv,b4,vii___ZNK7WebCore10ScrollView12contentsSizeEv__wrapper,b4,__ZN7WebCore9FrameView14invalidateRectERKNS_7IntRectE
  ,b4,__ZN7WebCore9FrameView27setVisibleScrollerThumbRectERKNS_7IntRectE,b4,__ZN7WebCore9FrameView25deferredRepaintTimerFiredEPNS_5TimerIS0_EE,b4,__ZN7WebCore9FrameViewC2ERNS_5FrameE,b4,__ZThn36_NK7WebCore9FrameView25scrollableAreaBoundingBoxEv,b4,__ZN7WebCore9FrameView22scrollContentsSlowPathERKNS_7IntRectE,b4,__ZNK7WebCore10ScrollView14scrollPositionEv,b4,vii___ZN7WebCore10ScrollView26invalidateScrollCornerRectERKNS_7IntRectE__wrapper,b4,__ZThn36_NK7WebCore10ScrollView14scrollPositionEv,b4,vii___ZThn36_NK7WebCore10ScrollView16scrollCornerRectEv__wrapper,b4,__ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE,b4,__ZThn36_N7WebCore9FrameView27setVisibleScrollerThumbRectERKNS_7IntRectE,b4,__ZN7WebCore9FrameView15setContentsSizeERKNS_7IntSizeE,b4,vii___ZN7WebCore10ScrollView16setParentVisibleEb__wrapper,b4,vii___ZThn36_NK7WebCore10ScrollView12contentsSizeEv__wrapper,b4,__ZNK7WebCore9FrameView25scrollableAreaBoundingBoxEv
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_ii = [b5,b5,__ZNK7WebCore6Widget12isPluginViewEv,b5,__ZNK7WebCore10ScrollView19horizontalScrollbarEv,b5,__ZThn36_NK7WebCore9FrameView20layerForScrollCornerEv,b5,__ZNK7WebCore9FrameView17isFlippedDocumentEv,b5,__ZNK7WebCore9FrameView20isHandlingWheelEventEv,b5,__ZThn36_NK7WebCore10ScrollView19horizontalScrollbarEv,b5,__ZThn36_NK7WebCore9FrameView20isHandlingWheelEventEv,b5,__ZNK7WebCore9FrameView27layerForHorizontalScrollbarEv,b5,__ZThn36_NK7WebCore10ScrollView13visibleHeightEv,b5,__ZNK7WebCore9FrameView25layerForVerticalScrollbarEv,b5,__ZThn36_NK7WebCore10ScrollView17verticalScrollbarEv,b5,__ZNK7WebCore9FrameView22avoidScrollbarCreationEv,b5,__ZThn36_NK7WebCore10ScrollView12visibleWidthEv,b5,__ZNK7WebCore6Widget16isPluginViewBaseEv
  ,b5,__ZNK7WebCore9FrameView11isFrameViewEv,b5,__ZThn36_NK7WebCore9FrameView12footerHeightEv,b5,__ZThn36_N7WebCore9FrameView17scheduleAnimationEv,b5,__ZNK7WebCore10ScrollView13visibleHeightEv,b5,__ZNK7WebCore9FrameView17layerForScrollingEv,b5,__ZNK7WebCore9FrameView23enclosingScrollableAreaEv,b5,__ZNK7WebCore9FrameView18isVerticalDocumentEv,b5,__ZN7WebCore6Widget25transformsAffectFrameRectEv,b5,__ZThn36_NK7WebCore9FrameView21scrollAnimatorEnabledEv,b5,__ZNK7WebCore9FrameView21scrollAnimatorEnabledEv,b5,__ZNK7WebCore10ScrollView12isScrollViewEv,b5,__ZThn36_NK7WebCore9FrameView17layerForScrollingEv,b5,__ZNK7WebCore9FrameView29shouldSuspendScrollAnimationsEv,b5,ii___ZNK7WebCore10ScrollView21isScrollCornerVisibleEv__wrapper,b5,__ZThn36_NK7WebCore9FrameView27layerForHorizontalScrollbarEv
  ,b5,ii___ZThn36_NK7WebCore10ScrollView21isScrollCornerVisibleEv__wrapper,b5,__ZNK7WebCore9FrameView8isActiveEv,b5,__ZN7WebCore9FrameView12tiledBackingEv,b5,__ZN7WebCore9FrameView17scheduleAnimationEv,b5,ii___ZNK7WebCore10ScrollView22scrollbarCornerPresentEv__wrapper,b5,__ZNK7WebCore10ScrollView17verticalScrollbarEv,b5,__ZThn36_NK7WebCore9FrameView25layerForVerticalScrollbarEv,b5,__ZNK7WebCore6Widget11isScrollbarEv,b5,__ZThn36_NK7WebCore9FrameView23usesCompositedScrollingEv,b5,__ZNK7WebCore9FrameView10hostWindowEv,b5,__ZNK7WebCore9FrameView20layerForScrollCornerEv,b5,__ZNK7WebCore9FrameView23usesCompositedScrollingEv,b5,__ZThn36_NK7WebCore9FrameView12headerHeightEv,b5,__ZThn36_NK7WebCore9FrameView38updatesScrollLayerPositionOnMainThreadEv,b5,__ZThn36_NK7WebCore9FrameView22isRubberBandInProgressEv
  ,b5,__ZNK7WebCore9FrameView22isRubberBandInProgressEv,b5,__ZThn36_NK7WebCore9FrameView29shouldSuspendScrollAnimationsEv,b5,__ZNK7WebCore9FrameView12headerHeightEv,b5,__ZThn36_NK7WebCore9FrameView23enclosingScrollableAreaEv,b5,__ZNK7WebCore10ScrollView12visibleWidthEv,b5,__ZNK7WebCore9FrameView38updatesScrollLayerPositionOnMainThreadEv,b5,__ZNK7WebCore9FrameView12footerHeightEv,b5,__ZThn36_NK7WebCore9FrameView8isActiveEv,b5,__ZThn36_N7WebCore9FrameView12tiledBackingEv,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,viii___ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE__wrapper,b6,__ZN7WebCore9FrameView23repaintContentRectangleERKNS_7IntRectEb,b6,viii___ZN7WebCore10ScrollView5paintEPNS_15GraphicsContextERKNS_7IntRectE__wrapper,b6,__ZThn36_N7WebCore9FrameView19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE,b6,__ZNK7WebCore9FrameView14windowClipRectEb,b6,__ZN7WebCore9FrameView19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE,b6,viii___ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE__wrapper,b6,viii___ZThn36_NK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE__wrapper,b6,__ZN7WebCore9FrameView13paintContentsEPNS_15GraphicsContextERKNS_7IntRectE,b6,__ZN7WebCore9FrameView21scrollbarStyleChangedEib,b6,__ZN7WebCore9FrameView17paintScrollCornerEPNS_15GraphicsContextERKNS_7IntRectE,b6,__ZN7WebCore9FrameView15createScrollbarENS_20ScrollbarOrientationE,b6,__ZN7WebCore9FrameView15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE,b6,__ZNK7WebCore9FrameView25convertFromContainingViewERKNS_8IntPointE
  ,b6,__ZNK7WebCore9FrameView23convertToContainingViewERKNS_7IntRectE,b6,__ZNK7WebCore9FrameView25convertFromContainingViewERKNS_7IntRectE,b6,__ZN7WebCore9FrameView23invalidateScrollbarRectEPNS_9ScrollbarERKNS_7IntRectE,b6,__ZNK7WebCore9FrameView23convertToContainingViewERKNS_8IntPointE,b6,__ZThn36_N7WebCore9FrameView15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE,b6,__ZThn36_N7WebCore9FrameView23invalidateScrollbarRectEPNS_9ScrollbarERKNS_7IntRectE,b6,__ZThn36_N7WebCore9FrameView21scrollbarStyleChangedEib,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7,v___ZN7WebCore10ScrollView8addChildEN3WTF10PassRefPtrINS_6WidgetEEE__wrapper,b7];
  var FUNCTION_TABLE_fi = [b8,b8,__ZNK7WebCore9FrameView25visibleContentScaleFactorEv,b8];
  var FUNCTION_TABLE_iii = [b9,b9,iii___ZN7WebCore10ScrollView24isPointInScrollbarCornerERKNS_8IntPointE__wrapper,b9,iii___ZThn36_NK7WebCore10ScrollView10scrollSizeENS_20ScrollbarOrientationE__wrapper,b9,iii___ZNK7WebCore10ScrollView10scrollSizeENS_20ScrollbarOrientationE__wrapper,b9,__ZThn36_N7WebCore9FrameView27requestScrollPositionUpdateERKNS_8IntPointE,b9,__ZN7WebCore9FrameView27requestScrollPositionUpdateERKNS_8IntPointE,b9,iii___ZThn36_NK7WebCore10ScrollView14scrollPositionEPNS_9ScrollbarE__wrapper,b9,iii___ZNK7WebCore10ScrollView14scrollPositionEPNS_9ScrollbarE__wrapper,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,viiii___ZNK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE__wrapper,b10,viiii___ZThn36_NK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE__wrapper,b10,viiii___ZThn36_NK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE__wrapper,b10,viiii___ZThn36_NK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE__wrapper,b10,viiii___ZNK7WebCore10ScrollView36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE__wrapper,b10,viiii___ZNK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE__wrapper,b10,viiii___ZThn36_NK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE__wrapper,b10,viiii___ZNK7WebCore10ScrollView36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE__wrapper,b10,__ZN7WebCore9FrameView14paintScrollbarEPNS_15GraphicsContextEPNS_9ScrollbarERKNS_7IntRectE,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10
  ,b10,b10,b10];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore9HTMLNames11framesetTagE": __ZN7WebCore9HTMLNames11framesetTagE, "__ZN7WebCore15ScrollAlignment14alignTopAlwaysE": __ZN7WebCore15ScrollAlignment14alignTopAlwaysE, "__ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE": __ZN7WebCore37WidgetHierarchyUpdatesSuspensionScope35s_widgetHierarchyUpdateSuspendCountE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN7WebCore9HTMLNames8frameTagE": __ZN7WebCore9HTMLNames8frameTagE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE": __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore9HTMLNames9appletTagE": __ZN7WebCore9HTMLNames9appletTagE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore9FrameView17addScrollableAreaEPNS_14ScrollableAreaE","__ZNK7WebCore10ScrollView19horizontalScrollbarEv","_strlen","__ZN7WebCore9FrameView24renderedCharactersExceedEj","__ZNK7WebCore9FrameView20hasCompositedContentEv","__ZN7WebCore9FrameView22detachCustomScrollbarsEv","__ZNK7WebCore9FrameView25visibleContentScaleFactorEv","__ZN7WebCore9FrameView22fixedLayoutSizeChangedEv","__ZN7WebCore9FrameView23applyOverflowToViewportEPNS_13RenderElementERNS_13ScrollbarModeES4_","__ZThn36_NK7WebCore9FrameView12footerHeightEv","__ZN7WebCore9FrameViewD2Ev","__ZN7WebCore9FrameView20addSlowRepaintObjectEPNS_13RenderElementE","__ZN7WebCore9FrameView22visibleContentsResizedEv","__ZThn36_NK7WebCore9FrameView22lastKnownMousePositionEv","__ZN7WebCore9FrameView24paintContentsForSnapshotEPNS_15GraphicsContextERKNS_7IntRectENS0_19SelectionInSnapshotENS0_26CoordinateSpaceForSnapshotE","__ZNK7WebCore9FrameView11isFrameViewEv","__ZThn36_NK7WebCore9FrameView20layerForScrollCornerEv","__ZN7WebCore9FrameView14setNeedsLayoutEv","__ZN7WebCore9FrameView15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE","__ZN7WebCore9FrameView18setContentIsOpaqueEb","__ZN7WebCore9FrameView23repaintContentRectangleERKNS_7IntRectEb","__ZNK7WebCore9FrameView23enclosingScrollableAreaEv","__ZNK7WebCore9FrameView22lastKnownMousePositionEv","__ZNK7WebCore9FrameView12shouldUpdateEb","__ZNK7WebCore9FrameView11needsLayoutEv","__ZN7WebCore9FrameView6layoutEb","__ZN7WebCore9FrameView21scrollPositionChangedEv","__ZN7WebCore9FrameView19scrollElementToRectEPNS_7ElementERKNS_7IntRectE","__ZThn36_NK7WebCore9FrameView20isHandlingWheelEventEv","__ZN7WebCore9FrameView14scrollToAnchorERKN3WTF6StringE","__ZN7WebCore9FrameView18clearBackingStoresEv","__ZNK7WebCore9FrameView13layoutPendingEv","_memcpy","__ZNK7WebCore20AnnotatedRegionValueeqERKS0_","__ZThn36_NK7WebCore9FrameView21minimumScrollPositionEv","__ZN7WebCore9FrameView13setPaginationERKNS_10PaginationE","__ZNK7WebCore9FrameView23mapFromLayoutToCSSUnitsENS_10LayoutUnitE","__ZNK7WebCore9FrameView28adjustedDeferredRepaintDelayEv","__ZN7WebCore6Widget11handleEventEPNS_5EventE","__ZN7WebCore9FrameView20setCanHaveScrollbarsEb","__ZN7WebCore9FrameView38scrollPositionChangedViaPlatformWidgetEv","__ZN7WebCore9FrameView22updateAnnotatedRegionsEv","__ZNK7WebCore9FrameView22hasCompositingAncestorEv","__ZNK7WebCore9FrameView23documentBackgroundColorEv","__ZN7WebCore9FrameView20restoreBackingStoresEv","__ZN7WebCore9FrameView39updateCompositingLayersAfterStyleChangeEv","__ZN3WTF9HashTableIPN7WebCore13RenderElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZNK7WebCore10ScrollView14scrollPositionEv","__ZN7WebCore9FrameView37updateCompositingLayersAfterScrollingEv","__ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE","__ZN7WebCore9FrameView20removeScrollableAreaEPNS_14ScrollableAreaE","__ZN7WebCore9FrameView19endDeferredRepaintsEv","__ZThn36_N7WebCore9FrameView17willEndLiveResizeEv","__ZN7WebCore5TimerINS_9FrameViewEED1Ev","__ZNK7WebCore9FrameView27layerForHorizontalScrollbarEv","__ZNK7WebCore9FrameView9mediaTypeEv","__ZN7WebCore9FrameView32updateCanBlitOnScrollRecursivelyEv","__ZN7WebCore9FrameView11removeChildEPNS_6WidgetE","__ZThn36_NK7WebCore10ScrollView14scrollPositionEv","__ZNK7WebCore9FrameView25layerForVerticalScrollbarEv","__ZNK7WebCore9FrameView15parentFrameViewEv","__ZN7WebCore9FrameView31setVisualUpdatesAllowedByClientEb","__ZThn36_N7WebCore9FrameViewD1Ev","__ZN7WebCore9FrameView11forceLayoutEb","__ZN7WebCore9FrameView13setNodeToDrawEPNS_4NodeE","__ZN7WebCore9FrameView30flushAnyPendingPostLayoutTasksEv","__ZNK7WebCore6Widget11isScrollbarEv","__ZNK7WebCore9FrameView23mapFromCSSToLayoutUnitsEi","__ZN7WebCore9FrameView37setNeedsOneShotDrawingSynchronizationEv","__ZThn36_N7WebCore9FrameView19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE","__ZNK7WebCore9FrameView17isFlippedDocumentEv","__ZNK7WebCore9FrameView22avoidScrollbarCreationEv","__ZN7WebCore9FrameView17willMoveOffscreenEv","__ZN7WebCore9FrameView16layoutTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore9FrameView17setTracksRepaintsEb","__ZN7WebCore9FrameView21addTrackedRepaintRectERKNS_7IntRectE","__ZNK7WebCore10ScrollView12isScrollViewEv","__ZN7WebCore9FrameView25repaintSlowRepaintObjectsEv","__ZNK7WebCore9FrameView30isOverlappedIncludingAncestorsEv","__ZNK7WebCore9FrameView14windowClipRectEb","__ZThn36_NK7WebCore10ScrollView12visibleWidthEv","__ZNK7WebCore9FrameView18embeddedContentBoxEv","__ZN7WebCore9FrameView21beginDeferredRepaintsEv","__ZNK7WebCore6Widget16isPluginViewBaseEv","__ZThn36_NK7WebCore10ScrollView17verticalScrollbarEv","__ZNK7WebCore9FrameView13paintBehaviorEv","__ZN7WebCore9FrameView40setRepaintThrottlingDeferredRepaintDelayEd","__ZN7WebCore9FrameView19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZNK7WebCore9RenderBox19stretchesToViewportEv","__ZNK7WebCore9FrameView17windowResizerRectEv","__ZN7WebCore9FrameView21updateWidgetPositionsEv","__ZN7WebCore5TimerINS_9FrameViewEE5firedEv","__ZN7WebCore9FrameView28addViewportConstrainedObjectEPNS_13RenderElementE","__ZN7WebCore9FrameView14setMarginWidthENS_10LayoutUnitE","__ZN7WebCore9FrameView23removeFromAXObjectCacheEv","__ZN7WebCore9FrameView28removeEmbeddedObjectToUpdateERNS_20RenderEmbeddedObjectE","__ZNK7WebCore9FrameView17convertToRendererEPKNS_13RenderElementERKNS_8IntPointE","__ZNK7WebCore9FrameView21maximumScrollPositionEv","__ZN7WebCore9FrameView25scheduleRelayoutOfSubtreeERNS_13RenderElementE","__ZNK7WebCore9FrameView34isFrameFlatteningValidForThisFrameEv","__ZNK7WebCore9FrameView33isInChildFrameWithFrameFlatteningEv","__ZN7WebCore9FrameView30willRemoveWidgetFromRenderTreeERNS_6WidgetE","__ZNK7WebCore9FrameView19baseBackgroundColorEv","__ZNK7WebCore9FrameView34fixedElementsLayoutRelativeToFrameEv","__ZN3WTF9HashTableIPN7WebCore14ScrollableAreaES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore5TimerINS_9FrameViewEED0Ev","__ZNK7WebCore9FrameView43shouldUpdateCompositingLayersAfterScrollingEv","__ZNK7WebCore10ScrollView13visibleHeightEv","__ZN7WebCore11LayoutStateD1Ev","__ZN7WebCore6Widget25transformsAffectFrameRectEv","__ZNK7WebCore9FrameView25convertFromContainingViewERKNS_8IntPointE","__ZN7WebCore9FrameView15didMoveOnscreenEv","__ZN7WebCore9FrameView20resetTrackedRepaintsEv","__ZNK7WebCore9FrameView30scrollBehaviorForFixedElementsEv","__ZNK7WebCore9FrameView18isVerticalDocumentEv","__ZN3WTF12copyToVectorINS_7HashSetIPN7WebCore6WidgetENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEEENS_6VectorINS_6RefPtrIS3_EELj0ENS_15CrashOnOverflowEEEEEvRKT_RT0_","__ZNK7WebCore9FrameView17layerForScrollingEv","__ZN7WebCore9FrameView27requestScrollPositionUpdateERKNS_8IntPointE","__ZNK7WebCore10ScrollView12visibleWidthEv","__ZN3WTF11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS3_EEE4findERKS3_","__ZN7WebCore9FrameView24notifyWidgetsInAllFramesENS_18WidgetNotificationE","__ZN7WebCore9FrameView26setFixedVisibleContentRectERKNS_7IntRectE","__ZN7WebCore9FrameView15contentsResizedEv","__ZNK7WebCore9FrameView14didFirstLayoutEv","__ZN3WTF9HashTableIPN7WebCore6WidgetES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore9FrameView12setMediaTypeERKN3WTF6StringE","__ZN7WebCore9FrameView39setViewportConstrainedObjectsNeedLayoutEv","__ZN7WebCore9FrameView13paintContentsEPNS_15GraphicsContextERKNS_7IntRectE","__ZN7WebCore9FrameView24didAddWidgetToRenderTreeERNS_6WidgetE","__ZN7WebCore9FrameView25addEmbeddedObjectToUpdateERNS_20RenderEmbeddedObjectE","__ZN7WebCore9FrameView61setRepaintThrottlingnInitialDeferredRepaintDelayDuringLoadingEd","__ZThn36_N7WebCore9FrameView27requestScrollPositionUpdateERKNS_8IntPointE","__ZThn36_N7WebCore9FrameView15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE","__ZN7WebCore9FrameView18updateScrollCornerEv","__ZN7WebCore9FrameView20postLayoutTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore9FrameView13setIsInWindowEb","__ZNK7WebCore9FrameView20isSoftwareRenderableEv","__ZThn36_NK7WebCore9FrameView21scrollAnimatorEnabledEv","__ZNK7WebCore9FrameView27qualifiesAsVisuallyNonEmptyEv","__ZThn36_N7WebCore9FrameView19willStartLiveResizeEv","__ZN7WebCore9FrameView26adjustTiledBackingCoverageEv","__ZNK7WebCore9FrameView34notifyPageThatContentAreaWillPaintEv","__ZNK7WebCore9FrameView20isHandlingWheelEventEv","__ZN7WebCore9FrameView15setHeaderHeightEi","__ZNK7WebCore9FrameView21scrollAnimatorEnabledEv","__ZNK7WebCore6Widget12isPluginViewEv","__ZN7WebCore9FrameView21updateEmbeddedObjectsEv","__ZN7WebCore9FrameView23updateCanHaveScrollbarsEv","__ZN7WebCore9FrameView8scrollToERKNS_7IntSizeE","__ZN7WebCore9FrameView22setBaseBackgroundColorERKNS_5ColorE","__ZN7WebCore9FrameView37updateLayerFlushThrottlingInAllFramesEv","__ZN7WebCore9FrameView6createERNS_5FrameERKNS_7IntSizeE","__ZN7WebCore9FrameView16restoreScrollbarEv","__ZNK7WebCore9FrameView28scrollOffsetForFixedPositionEv","__ZNK7WebCore9FrameView19hasOpaqueBackgroundEv","__ZThn36_NK7WebCore9FrameView17layerForScrollingEv","__ZThn36_NK7WebCore10ScrollView19horizontalScrollbarEv","__ZN7WebCore9FrameView21scrollbarStyleChangedEib","__ZN3WTF10PassOwnPtrINS_11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS4_EEEEED2Ev","__ZN7WebCore9FrameView62setRepaintThrottlingDeferredRepaintDelayIncrementDuringLoadingEd","__ZNK7WebCore9FrameView29shouldSuspendScrollAnimationsEv","__ZNK7WebCore9FrameView10isPaintingEv","__ZN7WebCore9FrameView29forceLayoutParentViewIfNeededEv","__ZN7WebCore9FrameView25startDeferredRepaintTimerEd","__ZN7WebCore9FrameView34updateLayerPositionsAfterScrollingEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_","__ZN7WebCore9FrameView17paintScrollCornerEPNS_15GraphicsContextERKNS_7IntRectE","__ZThn36_N7WebCore9FrameViewD0Ev","__ZN3WTF11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS3_EEE6removeENS_19ListHashSetIteratorIS3_Lj256ES5_EE","__ZThn36_NK7WebCore9FrameView27layerForHorizontalScrollbarEv","__ZN7WebCore9FrameView56setRepaintThrottlingMaxDeferredRepaintDelayDuringLoadingEd","__ZThn36_N7WebCore9FrameView17scheduleAnimationEv","__ZN7WebCore9FrameView37updateLayoutAndStyleIfNeededRecursiveEv","__ZNK7WebCore9FrameView10paginationEv","__ZN7WebCore9FrameView17autoSizeIfEnabledEv","__ZN7WebCore9FrameView17paintControlTintsEv","__ZNK7WebCore9FrameView26shouldUpdateWhileOffscreenEv","_memset","__ZN3WTF7HashSetIPN7WebCore14ScrollableAreaENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZNK7WebCore9FrameView8isActiveEv","__ZN7WebCore9FrameView39flushCompositingStateIncludingSubframesEv","__ZN3WTF11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS3_EEE9takeFirstEv","__ZN7WebCore9FrameView12tiledBackingEv","__ZN7WebCore9FrameView4initEv","__ZN7WebCore6Widget12notifyWidgetENS_18WidgetNotificationE","__ZN7WebCore9FrameView10wheelEventERKNS_18PlatformWheelEventE","__ZN7WebCore9FrameView12setFrameRectERKNS_7IntRectE","__ZN7WebCore9FrameView15setMarginHeightENS_10LayoutUnitE","__ZN7WebCore9FrameView37setScrollingPerformanceLoggingEnabledEb","__ZN7WebCore9FrameView33flushCompositingStateForThisFrameEPNS_5FrameE","__ZN7WebCore9FrameView19handleLoadCompletedEv","__ZN3WTF9HashTableIPN7WebCore14ScrollableAreaES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZNK7WebCore9FrameView23usesCompositedScrollingEv","__ZThn36_NK7WebCore9FrameView21maximumScrollPositionEv","__ZNK7WebCore9FrameView13isTransparentEv","__ZN7WebCore9FrameView17scheduleAnimationEv","__ZN7WebCore9FrameView22scrollContentsFastPathERKNS_7IntSizeERKNS_7IntRectES6_","__ZN7WebCore28paginationModeForRenderStyleERKNS_11RenderStyleE","__ZN7WebCore9FrameView19willStartLiveResizeEv","__ZN7WebCore9FrameView15createScrollbarENS_20ScrollbarOrientationE","__ZNK7WebCore9FrameView10renderViewEv","__ZN3WTF9HashTableIPN7WebCore6WidgetES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore9FrameView35resetScrollbarsAndClearContentsSizeEv","__ZN7WebCore9FrameView24updateIsVisuallyNonEmptyEv","__ZN7WebCore9FrameView25addPaintPendingMilestonesEj","__ZNK7WebCore9FrameView25trackedRepaintRectsAsTextEv","__ZN7WebCore9FrameView26adjustMediaTypeForPrintingEb","__ZN7WebCore9FrameView16scrollToFragmentERKNS_3URLE","__ZNK7WebCore9FrameView15useSlowRepaintsEb","__ZN7WebCore9FrameView32recalculateScrollbarOverlayStyleEv","__ZN7WebCore9FrameView16setPaintBehaviorEj","__ZNK7WebCore9FrameView22frameFlatteningEnabledEv","__ZN7WebCore9FrameView29setAutoSizeFixedMinimumHeightEi","__ZN7WebCore9FrameView6createERNS_5FrameE","__ZNK7WebCore10ScrollView17verticalScrollbarEv","__ZThn36_NK7WebCore9FrameView25layerForVerticalScrollbarEv","__ZThn36_NK7WebCore9FrameView25scrollableAreaBoundingBoxEv","__ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore20RenderEmbeddedObjectELj256ENS_7PtrHashIS4_EEEEED2Ev","__ZN7WebCore9FrameView24setScrollPinningBehaviorENS_21ScrollPinningBehaviorE","__ZNK7WebCore9FrameView37viewportConstrainedVisibleContentRectEv","__ZN7WebCore9FrameView15setIsOverlappedEb","__ZN7WebCore9FrameView23removeSlowRepaintObjectEPNS_13RenderElementE","__ZThn36_NK7WebCore9FrameView12headerHeightEv","__ZN7WebCore9FrameView14invalidateRectERKNS_7IntRectE","__ZN7WebCore9FrameView14adjustViewSizeEv","__ZN7WebCore9FrameView21flushDeferredRepaintsEv","__ZThn36_NK7WebCore9FrameView23usesCompositedScrollingEv","__ZN7WebCore9FrameView25applyPaginationToViewportEv","__ZThn36_NK7WebCore10ScrollView13visibleHeightEv","__ZN7WebCore9FrameView23sendResizeEventIfNeededEv","__ZN7WebCore9FrameView27setVisibleScrollerThumbRectERKNS_7IntRectE","__ZN7WebCore9FrameView15setFooterHeightEi","__ZN7WebCore9FrameView13notifyWidgetsENS_18WidgetNotificationE","__ZN7WebCore9FrameView26firePaintRelatedMilestonesEv","__ZNK7WebCore9FrameView40hasCompositedContentIncludingDescendantsEv","__ZN7WebCore9FrameView20updateOverflowStatusEbb","__ZNK7WebCore9FrameView10hostWindowEv","__ZN7WebCore9FrameView25deferredRepaintTimerFiredEPNS_5TimerIS0_EE","__ZNK7WebCore9FrameView25convertFromContainingViewERKNS_7IntRectE","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore20RenderEmbeddedObjectELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E4findERKS6_","__ZThn36_N7WebCore9FrameView15contentsResizedEv","_memmove","__ZNK7WebCore9FrameView30useSlowRepaintsIfNotOverlappedEv","__ZNK7WebCore9FrameView27windowClipRectForFrameOwnerEPKNS_21HTMLFrameOwnerElementEb","__ZN7WebCore9FrameViewC2ERNS_5FrameE","__ZN7WebCore9FrameView27delegatesScrollingDidChangeEv","__ZN7WebCore9FrameView15resetScrollbarsEv","__ZNK7WebCore9FrameView20layerForScrollCornerEv","__ZN7WebCore9FrameView20enterCompositingModeEv","__ZNK7WebCore9FrameView17convertToRendererEPKNS_13RenderElementERKNS_7IntRectE","__ZN7WebCore9FrameView34updateCompositingLayersAfterLayoutEv","__ZN7WebCore9FrameView18doDeferredRepaintsEv","__ZNK7WebCore9FrameView13axObjectCacheEv","__ZN7WebCore9FrameView16prepareForDetachEv","__ZN7WebCore9FrameView38updateDeferredRepaintDelayAfterRepaintEv","__ZThn36_NK7WebCore9FrameView38updatesScrollLayerPositionOnMainThreadEv","__ZNK7WebCore9FrameView19hasCustomScrollbarsEv","__ZN3WTF7HashSetIPN7WebCore6WidgetENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore9FrameView23addedOrRemovedScrollbarEv","__ZN7WebCore9FrameView22scrollContentsSlowPathERKNS_7IntRectE","__ZThn36_NK7WebCore9FrameView22isRubberBandInProgressEv","__ZNK7WebCore9FrameView22isRubberBandInProgressEv","__ZN7WebCore9FrameView18enableAutoSizeModeEbRKNS_7IntSizeES3_","__ZN3WTF6VectorINS_6RefPtrIN7WebCore6WidgetEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore9FrameView30graphicsLayerForPlatformWidgetEPv","__ZThn36_NK7WebCore9FrameView29shouldSuspendScrollAnimationsEv","__ZN7WebCore9FrameView25resetDeferredRepaintDelayEv","__ZNK7WebCore9FrameView10layoutRootEb","__ZNK7WebCore9FrameView37shouldUseLoadTimeDeferredRepaintDelayEv","__ZN7WebCore9FrameView20updateEmbeddedObjectERNS_20RenderEmbeddedObjectE","__ZNK7WebCore9FrameView25contentsInCompositedLayerEv","__ZNK7WebCore9FrameView17wasScrolledByUserEv","__ZN7WebCore9FrameView20setWasScrolledByUserEb","__ZN7WebCore9FrameView23invalidateScrollbarRectEPNS_9ScrollbarERKNS_7IntRectE","__ZN7WebCore9FrameView5clearEv","__ZN7WebCore9FrameView14setExposedRectENS_9FloatRectE","__ZNK7WebCore9FrameView23convertToContainingViewERKNS_8IntPointE","__ZNK7WebCore9FrameView25scrollableAreaBoundingBoxEv","__ZN7WebCore9FrameView14paintScrollbarEPNS_15GraphicsContextEPNS_9ScrollbarERKNS_7IntRectE","__ZN7WebCore9FrameView27updateBackgroundRecursivelyERKNS_5ColorEb","__ZN7WebCore9FrameView18unscheduleRelayoutEv","__ZN7WebCore9FrameView14setTransparentEb","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore9FrameView12headerHeightEv","__ZN7WebCore9FrameView36scheduleLayerFlushAllowingThrottlingEv","__ZN7WebCore9FrameView29setShouldUpdateWhileOffscreenEb","__ZN7WebCore9FrameView30maintainScrollPositionAtAnchorEPNS_4NodeE","__ZNK7WebCore9FrameView21minimumScrollPositionEv","__ZN7WebCore9FrameView18paintOverhangAreasEPNS_15GraphicsContextERKNS_7IntRectES5_S5_","__ZNK7WebCore9FrameView13scrollLayerIDEv","__ZN7WebCore9FrameView22performPostLayoutTasksEv","__ZN7WebCore9FrameView34startLayoutAtMainFrameViewIfNeededEb","__ZThn36_NK7WebCore9FrameView23enclosingScrollableAreaEv","__ZNK7WebCore9FrameView19convertFromRendererEPKNS_13RenderElementERKNS_8IntPointE","__ZThn36_N7WebCore9FrameView23invalidateScrollbarRectEPNS_9ScrollbarERKNS_7IntRectE","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore9FrameView24forceLayoutForPaginationERKNS_9FloatSizeES3_fNS_19AdjustViewSizeOrNotE","__ZN7WebCore9FrameView17willEndLiveResizeEv","__ZN3WTF7HashSetIPN7WebCore13RenderElementENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZNK7WebCore9FrameView19convertFromRendererEPKNS_13RenderElementERKNS_7IntRectE","__ZN7WebCore9FrameView26adjustPageHeightDeprecatedEPffff","__ZN7WebCore9FrameView31removeViewportConstrainedObjectEPNS_13RenderElementE","__ZN7WebCore9FrameView23updateScrollableAreaSetEv","__ZNK7WebCore9FrameView38updatesScrollLayerPositionOnMainThreadEv","__ZNK7WebCore9FrameView22containsScrollableAreaEPNS_14ScrollableAreaE","__ZNK7WebCore9FrameView23convertToContainingViewERKNS_7IntRectE","__ZN7WebCore9FrameView16scheduleRelayoutEv","__ZN3WTF9HashTableIPN7WebCore13RenderElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore9FrameView12isScrollableEv","__ZN3WTF6VectorIN7WebCore10LayoutRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore9FrameView28scrollOffsetForFixedPositionERKNS_7IntRectERKNS_7IntSizeERKNS_8IntPointES9_fbNS_30ScrollBehaviorForFixedElementsEii","__ZNK7WebCore9FrameView15shouldSetCursorEv","__ZThn36_N7WebCore9FrameView27setVisibleScrollerThumbRectERKNS_7IntRectE","__ZN7WebCore9FrameView5resetEv","__ZN7WebCore9FrameView15setContentsSizeERKNS_7IntSizeE","__ZThn36_NK7WebCore9FrameView8isActiveEv","__ZThn36_N7WebCore9FrameView12tiledBackingEv","__ZN7WebCore9FrameView32calculateScrollbarModesForLayoutERNS_13ScrollbarModeES2_NS0_33ScrollbarModesCalculationStrategyE","__ZNK7WebCore9FrameView28isEnclosedInCompositingLayerEv","__ZN7WebCore9FrameView18updateControlTintsEv","__ZN7WebCore9FrameView14scrollToAnchorEv","__ZN7WebCoreL50countRenderedCharactersInRenderObjectWithThresholdERKNS_12RenderObjectEjj","__ZN7WebCore9FrameView21setCannotBlitToWindowEv","__ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE","__ZNK7WebCore9FrameView12footerHeightEv","__ZN7WebCore9FrameViewD0Ev","__ZN7WebCore9FrameView25serviceScriptedAnimationsEd","__ZThn36_N7WebCore9FrameView21scrollbarStyleChangedEib"]

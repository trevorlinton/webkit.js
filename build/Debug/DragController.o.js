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
H_BASE = parentModule["_malloc"](24 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 24;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14DragControllerC1ERNS_4PageERNS_10DragClientE;
var __ZN7WebCore14DragControllerD1Ev;
/* memory initializer */ allocate([71,69,84,0,0,0,0,0,117,110,105,110,105,116,105,97,108,105,122,101,100,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZN7WebCore14DragController19LinkDragBorderInsetE=env.__ZN7WebCore14DragController19LinkDragBorderInsetE|0;
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore14DragController18DragIconRightInsetE=env.__ZN7WebCore14DragController18DragIconRightInsetE|0;
  var __ZN7WebCore14DragController14DragImageAlphaE=env.__ZN7WebCore14DragController14DragImageAlphaE|0;
  var __ZN7WebCore14DragController20MaxOriginalImageAreaE=env.__ZN7WebCore14DragController20MaxOriginalImageAreaE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
  var __ZN7WebCore14DragController19DragIconBottomInsetE=env.__ZN7WebCore14DragController19DragIconBottomInsetE|0;
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
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
  var invoke_viii=env.invoke_viii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14DragController16concludeEditDragERNS_8DragDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 376 | 0;
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
 i22 = i3 + 152 | 0;
 i23 = i3 + 168 | 0;
 i24 = i3 + 176 | 0;
 i25 = i3 + 184 | 0;
 i26 = i3 + 192 | 0;
 i27 = i3 + 200 | 0;
 i28 = i3 + 208 | 0;
 i29 = i3 + 216 | 0;
 i30 = i3 + 280 | 0;
 i31 = i3 + 288 | 0;
 i32 = i3 + 296 | 0;
 i33 = i3 + 304 | 0;
 i34 = i3 + 312 | 0;
 i35 = i3 + 320 | 0;
 i36 = i3 + 328 | 0;
 i37 = i3 + 344 | 0;
 i38 = i3 + 352 | 0;
 i39 = i3 + 360 | 0;
 i40 = i3 + 368 | 0;
 i41 = i1 + 16 | 0;
 i42 = HEAP32[i41 >> 2] | 0;
 i43 = (i42 | 0) == 0;
 do {
  if (!i43) {
   i44 = i42 + 8 | 0;
   HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
   i44 = HEAP32[i41 >> 2] | 0;
   if ((i44 | 0) == 0) {
    break;
   }
   __ZN7WebCore16HTMLInputElement25setCanReceiveDroppedFilesEb(i44, 0);
   i44 = HEAP32[i41 >> 2] | 0;
   HEAP32[i41 >> 2] = 0;
   if ((i44 | 0) == 0) {
    break;
   }
   i45 = i44 + 8 | 0;
   i44 = i45 | 0;
   i46 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
   HEAP32[i44 >> 2] = i46;
   if ((i46 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i45 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i45 - 8 | 0);
  }
 } while (0);
 i41 = i1 + 8 | 0;
 i45 = HEAP32[i41 >> 2] | 0;
 do {
  if ((i45 | 0) == 0) {
   i47 = 0;
  } else {
   __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i24, __ZNK7WebCore8Document4viewEv(i45) | 0, i2 | 0);
   i46 = __ZN7WebCoreL17elementUnderMouseEPNS_8DocumentERKNS_8IntPointE(HEAP32[i41 >> 2] | 0, HEAP32[i24 >> 2] | 0, HEAP32[i24 + 4 >> 2] | 0) | 0;
   if ((i46 | 0) == 0) {
    i47 = 0;
    break;
   }
   i44 = HEAP32[(HEAP32[(HEAP32[i46 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
   i46 = (i44 | 0) == 0;
   if (!i46) {
    i48 = i44 + 4 | 0;
    HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
   }
   i48 = i1 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i48 >> 2] | 0) + 24 >> 2] | 0) + 24 >> 2] | 0) == 0) {
    i49 = 13;
   } else {
    if (__ZN7WebCore14DragController25dispatchTextInputEventForEPNS_5FrameERNS_8DragDataE(i1, i44, i2) | 0) {
     i49 = 13;
    } else {
     i50 = 1;
    }
   }
   do {
    if ((i49 | 0) == 13) {
     if (__ZNK7WebCore8DragData13containsColorEv(i2) | 0) {
      __ZNK7WebCore8DragData7asColorEv(i25, i2);
      if ((HEAP8[i25 + 4 | 0] & 1) == 0) {
       i50 = 0;
       break;
      }
      __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i26, (HEAP32[i44 + 468 >> 2] | 0) + 32 | 0);
      i51 = i26 | 0;
      i52 = HEAP32[i51 >> 2] | 0;
      HEAP32[i51 >> 2] = 0;
      __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i27, 0);
      i51 = HEAP32[i27 >> 2] | 0;
      __ZNK7WebCore5Color10serializedEv(i28, i25);
      __ZN7WebCore22MutableStyleProperties11setPropertyENS_13CSSPropertyIDERKN3WTF6StringEbPNS_18StyleSheetContentsE(i51, 1, i28, 0, 0) | 0;
      i53 = HEAP32[i28 >> 2] | 0;
      do {
       if ((i53 | 0) != 0) {
        i54 = i53 | 0;
        i55 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
        if ((i55 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i53);
         break;
        } else {
         HEAP32[i54 >> 2] = i55;
         break;
        }
       }
      } while (0);
      i53 = i44 + 464 | 0;
      i55 = i51 | 0;
      if (__ZN7WebCore6Editor16shouldApplyStyleEPNS_15StylePropertiesEPNS_5RangeE(HEAP32[i53 >> 2] | 0, i55, i52) | 0) {
       i54 = HEAP32[i1 + 4 >> 2] | 0;
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i54 >> 2] | 0) + 4 >> 2] & 3](i54, 2, i2);
       __ZN7WebCore6Editor10applyStyleEPNS_15StylePropertiesENS_10EditActionE(HEAP32[i53 >> 2] | 0, i55, 1);
       i56 = 1;
      } else {
       i56 = 0;
      }
      do {
       if ((i51 | 0) != 0) {
        i55 = i51 | 0;
        i53 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
        if ((i53 | 0) != 0) {
         HEAP32[i55 >> 2] = i53;
         break;
        }
        if ((HEAP32[i51 + 4 >> 2] & 4 | 0) == 0) {
         __ZN7WebCore24ImmutableStylePropertiesD1Ev(i51);
         __ZN3WTF8fastFreeEPv(i51);
         break;
        } else {
         __ZN7WebCore22MutableStylePropertiesD1Ev(i51);
         __ZN3WTF8fastFreeEPv(i51);
         break;
        }
       }
      } while (0);
      if ((i52 | 0) == 0) {
       i50 = i56;
       break;
      }
      i51 = i52 | 0;
      i53 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
      if ((i53 | 0) == 0) {
       __ZN7WebCore5RangeD1Ev(i52);
       __ZN3WTF8fastFreeEPv(i52);
       i50 = i56;
       break;
      } else {
       HEAP32[i51 >> 2] = i53;
       i50 = i56;
       break;
      }
     }
     if (!(i43 | (__ZNK7WebCore8DragData13containsFilesEv(i2) | 0) ^ 1)) {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i42 >> 2] | 0) + 496 >> 2] & 1](i42 | 0) | 0) {
       i50 = 0;
       break;
      }
      i50 = __ZN7WebCore16HTMLInputElement19receiveDroppedFilesERKNS_8DragDataE(i42, i2) | 0;
      break;
     }
     i53 = __ZN7WebCore14DragController14canProcessDragERNS_8DragDataE(HEAP32[(HEAP32[i48 >> 2] | 0) + 28 >> 2] | 0, i2) | 0;
     i51 = HEAP32[(HEAP32[i48 >> 2] | 0) + 24 >> 2] | 0;
     if (!i53) {
      _memset(i22 | 0, 0, 12) | 0;
      HEAP32[i22 + 12 >> 2] = 1;
      __ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE(i51, i22);
      i53 = HEAP32[i22 >> 2] | 0;
      if ((i53 | 0) == 0) {
       i50 = 0;
       break;
      }
      i55 = i53 + 8 | 0;
      i53 = i55 | 0;
      i54 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
      HEAP32[i53 >> 2] = i54;
      if ((i54 | 0) >= 1) {
       i50 = 0;
       break;
      }
      if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
       i50 = 0;
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
      i50 = 0;
      break;
     }
     __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i29, i51 + 24 | 0, 0);
     i51 = HEAP32[(HEAP32[i48 >> 2] | 0) + 24 >> 2] | 0;
     _memset(i21 | 0, 0, 12) | 0;
     HEAP32[i21 + 12 >> 2] = 1;
     __ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE(i51, i21);
     i51 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i51 | 0) != 0) {
       i55 = i51 + 8 | 0;
       i54 = i55 | 0;
       i53 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
       HEAP32[i54 >> 2] = i53;
       if ((i53 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i55 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i55 - 8 | 0);
      }
     } while (0);
     __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i31, i29);
     i51 = i30 | 0;
     i52 = i31 | 0;
     i55 = HEAP32[i52 >> 2] | 0;
     HEAP32[i52 >> 2] = 0;
     HEAP32[i51 >> 2] = i55;
     i52 = i44 + 468 | 0;
     i53 = __ZNK7WebCore16VisibleSelection19rootEditableElementEv((HEAP32[i52 >> 2] | 0) + 32 | 0) | 0;
     i54 = (i53 | 0) == 0;
     if (!i54) {
      i57 = i53 + 8 | 0;
      HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
     }
     do {
      if ((i55 | 0) == 0) {
       i58 = 0;
      } else {
       i57 = i55 + 4 | 0;
       i59 = HEAP32[(HEAP32[i57 >> 2] | 0) + 340 >> 2] | 0;
       i60 = (i59 | 0) == 0;
       if (i60) {
        i61 = 0;
       } else {
        i62 = i59 + 136 | 0;
        i63 = HEAP8[i62] | 0;
        HEAP8[i62] = i63 | 4;
        i61 = i63 & 4;
       }
       i63 = HEAP32[i52 >> 2] | 0;
       i62 = i1 + 12 | 0;
       do {
        if ((HEAP32[i41 >> 2] | 0) == (HEAP32[i62 >> 2] | 0)) {
         if (!(__ZNK7WebCore16VisibleSelection17isContentEditableEv(i63 + 32 | 0) | 0)) {
          i49 = 52;
          break;
         }
         if ((HEAP32[i63 + 84 >> 2] | 0) != 2) {
          i49 = 52;
          break;
         }
         if (__ZN7WebCore14DragController13isCopyKeyDownERNS_8DragDataE(i1, i2) | 0) {
          i49 = 52;
         } else {
          i49 = 53;
         }
        } else {
         i49 = 52;
        }
       } while (0);
       do {
        if ((i49 | 0) == 52) {
         if (__ZNK7WebCore16VisibleSelection23isContentRichlyEditableEv(i29) | 0) {
          i49 = 53;
          break;
         }
         __ZNK7WebCore8DragData11asPlainTextEPNS_5FrameE(i38, i2, i44);
         i63 = i38 | 0;
         i64 = HEAP32[i63 >> 2] | 0;
         if ((i64 | 0) == 0) {
          i65 = 0;
          break;
         }
         do {
          if ((HEAP32[i64 + 4 >> 2] | 0) == 0) {
           i66 = 1;
          } else {
           if (!(__ZNK7WebCore6Editor16shouldInsertTextERKN3WTF6StringEPNS_5RangeENS_18EditorInsertActionE(HEAP32[i44 + 464 >> 2] | 0, i38, i55, 2) | 0)) {
            i66 = 1;
            break;
           }
           i67 = HEAP32[i1 + 4 >> 2] | 0;
           FUNCTION_TABLE_viii[HEAP32[(HEAP32[i67 >> 2] | 0) + 4 >> 2] & 3](i67, 2, i2);
           if (!(__ZN7WebCoreL23setSelectionToDragCaretEPNS_5FrameERNS_16VisibleSelectionERN3WTF6RefPtrINS_5RangeEEERKNS_8IntPointE(i44, i29, i30, i24) | 0)) {
            i66 = 0;
            break;
           }
           i67 = HEAP32[i41 >> 2] | 0;
           __ZN7WebCore22createFragmentFromTextERNS_5RangeERKN3WTF6StringE(i40, HEAP32[i51 >> 2] | 0, i38);
           i68 = __ZN3WTF10fastMallocEj(200) | 0;
           i69 = i23 | 0;
           i70 = i40 | 0;
           i71 = HEAP32[i70 >> 2] | 0;
           HEAP32[i70 >> 2] = 0;
           HEAP32[i69 >> 2] = i71;
           __ZN7WebCore23ReplaceSelectionCommandC1ERNS_8DocumentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEjNS_10EditActionE(i68, i67, i23, 13, 29);
           i67 = HEAP32[i69 >> 2] | 0;
           do {
            if ((i67 | 0) != 0) {
             i69 = i67 + 8 | 0;
             i71 = i69 | 0;
             i72 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
             HEAP32[i71 >> 2] = i72;
             if ((i72 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i69 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i69 - 8 | 0);
            }
           } while (0);
           i67 = i39 | 0;
           HEAP32[i67 >> 2] = i68;
           __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i39);
           i69 = HEAP32[i67 >> 2] | 0;
           do {
            if ((i69 | 0) != 0) {
             i67 = i69 + 4 | 0;
             i72 = i67 | 0;
             i71 = (HEAP32[i72 >> 2] | 0) - 1 | 0;
             if ((i71 | 0) != 0) {
              HEAP32[i72 >> 2] = i71;
              break;
             }
             i71 = i67 - 4 | 0;
             if ((i71 | 0) == 0) {
              break;
             }
             FUNCTION_TABLE_vi[HEAP32[(HEAP32[i71 >> 2] | 0) + 4 >> 2] & 3](i71);
            }
           } while (0);
           i69 = HEAP32[i70 >> 2] | 0;
           if ((i69 | 0) == 0) {
            i66 = 0;
            break;
           }
           i68 = i69 + 8 | 0;
           i69 = i68 | 0;
           i71 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
           HEAP32[i69 >> 2] = i71;
           if ((i71 | 0) >= 1) {
            i66 = 0;
            break;
           }
           if ((HEAP32[i68 + 8 >> 2] | 0) != 0) {
            i66 = 0;
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i68 - 8 | 0);
           i66 = 0;
          }
         } while (0);
         i64 = HEAP32[i63 >> 2] | 0;
         do {
          if ((i64 | 0) != 0) {
           i68 = i64 | 0;
           i71 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
           if ((i71 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i64);
            break;
           } else {
            HEAP32[i68 >> 2] = i71;
            break;
           }
          }
         } while (0);
         i64 = (i66 | 0) != 0;
         if (i64 | i54) {
          i65 = i64 ^ 1;
         } else {
          i49 = 200;
         }
        }
       } while (0);
       do {
        if ((i49 | 0) == 53) {
         HEAP8[i32] = 0;
         i64 = HEAP32[i57 >> 2] | 0;
         do {
          if (__ZNK7WebCore8DragData25containsCompatibleContentEv(i2) | 0) {
           __ZNK7WebCore8DragData10asFragmentEPNS_5FrameERNS_5RangeEbRb(i6, i2, i44, i55, 1, i32);
           i63 = i6 | 0;
           i71 = HEAP32[i63 >> 2] | 0;
           if ((i71 | 0) != 0) {
            HEAP32[i63 >> 2] = 0;
            i73 = i71;
            break;
           }
           if (!(__ZNK7WebCore8DragData11containsURLEPNS_5FrameENS0_24FilenameConversionPolicyE(i2, i44, 0) | 0)) {
            i49 = 120;
            break;
           }
           i71 = i7 | 0;
           HEAP32[i71 >> 2] = 0;
           __ZNK7WebCore8DragData5asURLEPNS_5FrameENS0_24FilenameConversionPolicyEPN3WTF6StringE(i8, i2, i44, 0, i7);
           i63 = i8 | 0;
           i68 = HEAP32[i63 >> 2] | 0;
           do {
            if ((i68 | 0) == 0) {
             i74 = 0;
             i75 = 0;
            } else {
             do {
              if ((HEAP32[i68 + 4 >> 2] | 0) == 0) {
               i76 = 0;
               i77 = 0;
              } else {
               __ZN7WebCore17HTMLAnchorElement6createERNS_8DocumentE(i9, i64);
               i69 = i9 | 0;
               i67 = HEAP32[i69 >> 2] | 0;
               HEAP32[i69 >> 2] = 0;
               i69 = HEAP32[i63 >> 2] | 0;
               do {
                if ((i69 | 0) == 0) {
                 i72 = i5 | 0;
                 HEAP32[i72 >> 2] = 0;
                 i78 = i72;
                } else {
                 if ((HEAP32[i69 + 16 >> 2] & 16 | 0) == 0) {
                  __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i69);
                  i78 = i5 | 0;
                  break;
                 } else {
                  i72 = i5 | 0;
                  HEAP32[i72 >> 2] = i69;
                  i79 = i69 | 0;
                  HEAP32[i79 >> 2] = (HEAP32[i79 >> 2] | 0) + 2;
                  i78 = i72;
                  break;
                 }
                }
               } while (0);
               i69 = i10 | 0;
               HEAP32[i69 >> 2] = HEAP32[i78 >> 2];
               __ZN7WebCore17HTMLAnchorElement7setHrefERKN3WTF12AtomicStringE(i67, i10);
               i72 = HEAP32[i69 >> 2] | 0;
               do {
                if ((i72 | 0) != 0) {
                 i69 = i72 | 0;
                 i79 = (HEAP32[i69 >> 2] | 0) - 2 | 0;
                 if ((i79 | 0) == 0) {
                  __ZN3WTF10StringImpl7destroyEPS0_(i72);
                  break;
                 } else {
                  HEAP32[i69 >> 2] = i79;
                  break;
                 }
                }
               } while (0);
               i72 = HEAP32[i71 >> 2] | 0;
               if ((i72 | 0) == 0) {
                i49 = 70;
               } else {
                if ((HEAP32[i72 + 4 >> 2] | 0) == 0) {
                 i49 = 70;
                }
               }
               do {
                if ((i49 | 0) == 70) {
                 do {
                  if (__ZNK7WebCore8DragData17containsPlainTextEv(i2) | 0) {
                   __ZNK7WebCore8DragData11asPlainTextEPNS_5FrameE(i11, i2, i44);
                   i72 = i11 | 0;
                   i79 = HEAP32[i72 >> 2] | 0;
                   HEAP32[i72 >> 2] = 0;
                   i69 = HEAP32[i71 >> 2] | 0;
                   HEAP32[i71 >> 2] = i79;
                   do {
                    if ((i69 | 0) != 0) {
                     i79 = i69 | 0;
                     i80 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
                     if ((i80 | 0) == 0) {
                      __ZN3WTF10StringImpl7destroyEPS0_(i69);
                      break;
                     } else {
                      HEAP32[i79 >> 2] = i80;
                      break;
                     }
                    }
                   } while (0);
                   i69 = HEAP32[i72 >> 2] | 0;
                   if ((i69 | 0) == 0) {
                    break;
                   }
                   i80 = i69 | 0;
                   i79 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
                   if ((i79 | 0) == 0) {
                    __ZN3WTF10StringImpl7destroyEPS0_(i69);
                    break;
                   } else {
                    HEAP32[i80 >> 2] = i79;
                    break;
                   }
                  }
                 } while (0);
                 i79 = HEAP32[i71 >> 2] | 0;
                 if ((i79 | 0) != 0) {
                  if ((HEAP32[i79 + 4 >> 2] | 0) != 0) {
                   break;
                  }
                 }
                 i80 = HEAP32[i63 >> 2] | 0;
                 if ((i80 | 0) == 0) {
                  i81 = i79;
                 } else {
                  i79 = i80 | 0;
                  HEAP32[i79 >> 2] = (HEAP32[i79 >> 2] | 0) + 2;
                  i81 = HEAP32[i71 >> 2] | 0;
                 }
                 HEAP32[i71 >> 2] = i80;
                 if ((i81 | 0) == 0) {
                  break;
                 }
                 i80 = i81 | 0;
                 i79 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
                 if ((i79 | 0) == 0) {
                  __ZN3WTF10StringImpl7destroyEPS0_(i81);
                  break;
                 } else {
                  HEAP32[i80 >> 2] = i79;
                  break;
                 }
                }
               } while (0);
               __ZN7WebCore8Document14createTextNodeERKN3WTF6StringE(i12, i64, i7);
               i79 = i12 | 0;
               i80 = HEAP32[i79 >> 2] | 0;
               HEAP32[i79 >> 2] = 0;
               i79 = i13 | 0;
               HEAP32[i79 >> 2] = i80;
               i69 = (i80 | 0) == 0;
               if (!i69) {
                i82 = i80 + 8 | 0;
                HEAP32[i82 >> 2] = (HEAP32[i82 >> 2] | 0) + 1;
               }
               i82 = i14 | 0;
               HEAP32[i82 >> 2] = 0;
               __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i67 | 0, i13, i82) | 0;
               i82 = HEAP32[i79 >> 2] | 0;
               do {
                if ((i82 | 0) != 0) {
                 i79 = i82 + 8 | 0;
                 i83 = i79 | 0;
                 i84 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
                 HEAP32[i83 >> 2] = i84;
                 if ((i84 | 0) >= 1) {
                  break;
                 }
                 if ((HEAP32[i79 + 8 >> 2] | 0) != 0) {
                  break;
                 }
                 __ZN7WebCore4Node14removedLastRefEv(i79 - 8 | 0);
                }
               } while (0);
               __ZN7WebCore8Document22createDocumentFragmentEv(i15, i64);
               i82 = i15 | 0;
               i79 = HEAP32[i82 >> 2] | 0;
               HEAP32[i82 >> 2] = 0;
               i82 = i16 | 0;
               HEAP32[i82 >> 2] = i67;
               i84 = (i67 | 0) == 0;
               if (!i84) {
                i83 = i67 + 8 | 0;
                HEAP32[i83 >> 2] = (HEAP32[i83 >> 2] | 0) + 1;
               }
               i83 = i17 | 0;
               HEAP32[i83 >> 2] = 0;
               __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i79 | 0, i16, i83) | 0;
               i83 = HEAP32[i82 >> 2] | 0;
               do {
                if ((i83 | 0) != 0) {
                 i82 = i83 + 8 | 0;
                 i85 = i82 | 0;
                 i86 = (HEAP32[i85 >> 2] | 0) - 1 | 0;
                 HEAP32[i85 >> 2] = i86;
                 if ((i86 | 0) >= 1) {
                  break;
                 }
                 if ((HEAP32[i82 + 8 >> 2] | 0) != 0) {
                  break;
                 }
                 __ZN7WebCore4Node14removedLastRefEv(i82 - 8 | 0);
                }
               } while (0);
               do {
                if ((i79 | 0) != 0) {
                 i83 = HEAP32[i79 + 8 >> 2] | 0;
                 i82 = i79 + 8 | 0;
                 HEAP32[i82 >> 2] = i83;
                 if ((i83 | 0) >= 1) {
                  break;
                 }
                 if ((HEAP32[i82 + 8 >> 2] | 0) != 0) {
                  break;
                 }
                 __ZN7WebCore4Node14removedLastRefEv(i82 - 8 | 0);
                }
               } while (0);
               do {
                if (!i69) {
                 i82 = i80 + 8 | 0;
                 i83 = i82 | 0;
                 i86 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
                 HEAP32[i83 >> 2] = i86;
                 if ((i86 | 0) >= 1) {
                  break;
                 }
                 if ((HEAP32[i82 + 8 >> 2] | 0) != 0) {
                  break;
                 }
                 __ZN7WebCore4Node14removedLastRefEv(i82 - 8 | 0);
                }
               } while (0);
               if (i84) {
                i76 = 1;
                i77 = i79;
                break;
               }
               i80 = i67 + 8 | 0;
               i69 = i80 | 0;
               i82 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
               HEAP32[i69 >> 2] = i82;
               if ((i82 | 0) >= 1) {
                i76 = 1;
                i77 = i79;
                break;
               }
               if ((HEAP32[i80 + 8 >> 2] | 0) != 0) {
                i76 = 1;
                i77 = i79;
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i80 - 8 | 0);
               i76 = 1;
               i77 = i79;
              }
             } while (0);
             i80 = HEAP32[i63 >> 2] | 0;
             if ((i80 | 0) == 0) {
              i74 = i76;
              i75 = i77;
              break;
             }
             i82 = i80 | 0;
             i69 = (HEAP32[i82 >> 2] | 0) - 2 | 0;
             if ((i69 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i80);
              i74 = i76;
              i75 = i77;
              break;
             } else {
              HEAP32[i82 >> 2] = i69;
              i74 = i76;
              i75 = i77;
              break;
             }
            }
           } while (0);
           i63 = HEAP32[i71 >> 2] | 0;
           do {
            if ((i63 | 0) != 0) {
             i68 = i63 | 0;
             i70 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
             if ((i70 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i63);
              break;
             } else {
              HEAP32[i68 >> 2] = i70;
              break;
             }
            }
           } while (0);
           if ((i74 | 0) == 1) {
            i73 = i75;
           } else {
            i49 = 120;
           }
          } else {
           i49 = 120;
          }
         } while (0);
         do {
          if ((i49 | 0) == 120) {
           if (!(__ZNK7WebCore8DragData17containsPlainTextEv(i2) | 0)) {
            i73 = 0;
            break;
           }
           HEAP8[i32] = 1;
           __ZNK7WebCore8DragData11asPlainTextEPNS_5FrameE(i19, i2, i44);
           __ZN7WebCore22createFragmentFromTextERNS_5RangeERKN3WTF6StringE(i18, i55, i19);
           i64 = i18 | 0;
           i63 = HEAP32[i64 >> 2] | 0;
           do {
            if ((i63 | 0) != 0) {
             i71 = i63 + 8 | 0;
             HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
             i71 = HEAP32[i64 >> 2] | 0;
             if ((i71 | 0) == 0) {
              break;
             }
             i70 = i71 + 8 | 0;
             i71 = i70 | 0;
             i68 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
             HEAP32[i71 >> 2] = i68;
             if ((i68 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i70 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i70 - 8 | 0);
            }
           } while (0);
           i64 = HEAP32[i19 >> 2] | 0;
           if ((i64 | 0) == 0) {
            i73 = i63;
            break;
           }
           i70 = i64 | 0;
           i68 = (HEAP32[i70 >> 2] | 0) - 2 | 0;
           if ((i68 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i64);
            i73 = i63;
            break;
           } else {
            HEAP32[i70 >> 2] = i68;
            i73 = i63;
            break;
           }
          }
         } while (0);
         if ((i73 | 0) == 0) {
          i65 = 0;
          break;
         }
         i68 = i44 + 464 | 0;
         i70 = HEAP32[i68 >> 2] | 0;
         i64 = i33 | 0;
         HEAP32[i64 >> 2] = i73;
         i71 = i73 + 8 | 0;
         HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
         i69 = i34 | 0;
         i82 = HEAP32[i51 >> 2] | 0;
         HEAP32[i69 >> 2] = i82;
         if ((i82 | 0) != 0) {
          i80 = i82 | 0;
          HEAP32[i80 >> 2] = (HEAP32[i80 >> 2] | 0) + 1;
         }
         i80 = __ZN7WebCore6Editor20shouldInsertFragmentEN3WTF10PassRefPtrINS_16DocumentFragmentEEENS2_INS_5RangeEEENS_18EditorInsertActionE(i70, i33, i34, 2) | 0;
         i70 = HEAP32[i69 >> 2] | 0;
         do {
          if ((i70 | 0) != 0) {
           i69 = i70 | 0;
           i82 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
           if ((i82 | 0) == 0) {
            __ZN7WebCore5RangeD1Ev(i70);
            __ZN3WTF8fastFreeEPv(i70);
            break;
           } else {
            HEAP32[i69 >> 2] = i82;
            break;
           }
          }
         } while (0);
         i70 = HEAP32[i64 >> 2] | 0;
         do {
          if ((i70 | 0) == 0) {
           i49 = 141;
          } else {
           i82 = i70 + 8 | 0;
           i69 = i82 | 0;
           i86 = (HEAP32[i69 >> 2] | 0) - 1 | 0;
           HEAP32[i69 >> 2] = i86;
           if ((i86 | 0) >= 1) {
            i49 = 141;
            break;
           }
           if ((HEAP32[i82 + 8 >> 2] | 0) != 0) {
            i49 = 141;
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i82 - 8 | 0);
           if (i80) {
            i49 = 142;
           } else {
            i87 = 1;
           }
          }
         } while (0);
         if ((i49 | 0) == 141) {
          if (i80) {
           i49 = 142;
          } else {
           i87 = 1;
          }
         }
         L225 : do {
          if ((i49 | 0) == 142) {
           i70 = HEAP32[i1 + 4 >> 2] | 0;
           FUNCTION_TABLE_viii[HEAP32[(HEAP32[i70 >> 2] | 0) + 4 >> 2] & 3](i70, 2, i2);
           i70 = HEAP32[i52 >> 2] | 0;
           do {
            if ((HEAP32[i41 >> 2] | 0) == (HEAP32[i62 >> 2] | 0)) {
             if (!(__ZNK7WebCore16VisibleSelection17isContentEditableEv(i70 + 32 | 0) | 0)) {
              break;
             }
             if ((HEAP32[i70 + 84 >> 2] | 0) != 2) {
              break;
             }
             if (__ZN7WebCore14DragController13isCopyKeyDownERNS_8DragDataE(i1, i2) | 0) {
              break;
             }
             i64 = __ZN7WebCore6Editor24smartInsertDeleteEnabledEv(HEAP32[i68 >> 2] | 0) | 0;
             do {
              if (i64) {
               if ((HEAP32[(HEAP32[i52 >> 2] | 0) + 108 >> 2] | 0) != 1) {
                i88 = 0;
                break;
               }
               i88 = __ZNK7WebCore8DragData15canSmartReplaceEv(i2) | 0;
              } else {
               i88 = 0;
              }
             } while (0);
             HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
             i82 = i36 | 0;
             i86 = HEAP32[i29 >> 2] | 0;
             HEAP32[i82 >> 2] = i86;
             if ((i86 | 0) != 0) {
              i69 = i86 + 8 | 0;
              HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + 1;
             }
             HEAP32[i36 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
             i69 = HEAP32[i29 + 8 >> 2] | 0;
             i86 = i36 + 8 | 0;
             i83 = i86;
             i85 = HEAP32[i83 >> 2] & -8 | i69 & 7;
             HEAP32[i83 >> 2] = i85;
             HEAP8[i86] = i85 & 255 & -9 | i69 & 8;
             i69 = __ZN3WTF10fastMallocEj(172) | 0;
             i85 = i4 | 0;
             HEAP32[i85 >> 2] = i73;
             __ZN7WebCore20MoveSelectionCommandC1EN3WTF10PassRefPtrINS_16DocumentFragmentEEERKNS_8PositionEbb(i69, i4, i36, i88, i64);
             i86 = HEAP32[i85 >> 2] | 0;
             do {
              if ((i86 | 0) != 0) {
               i85 = i86 + 8 | 0;
               i83 = i85 | 0;
               i89 = (HEAP32[i83 >> 2] | 0) - 1 | 0;
               HEAP32[i83 >> 2] = i89;
               if ((i89 | 0) >= 1) {
                break;
               }
               if ((HEAP32[i85 + 8 >> 2] | 0) != 0) {
                break;
               }
               __ZN7WebCore4Node14removedLastRefEv(i85 - 8 | 0);
              }
             } while (0);
             i86 = i35 | 0;
             HEAP32[i86 >> 2] = i69;
             __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i35);
             i64 = HEAP32[i86 >> 2] | 0;
             do {
              if ((i64 | 0) != 0) {
               i86 = i64 + 4 | 0;
               i85 = i86 | 0;
               i89 = (HEAP32[i85 >> 2] | 0) - 1 | 0;
               if ((i89 | 0) != 0) {
                HEAP32[i85 >> 2] = i89;
                break;
               }
               i89 = i86 - 4 | 0;
               if ((i89 | 0) == 0) {
                break;
               }
               FUNCTION_TABLE_vi[HEAP32[(HEAP32[i89 >> 2] | 0) + 4 >> 2] & 3](i89);
              }
             } while (0);
             i64 = HEAP32[i82 >> 2] | 0;
             if ((i64 | 0) == 0) {
              i87 = 0;
              break L225;
             }
             i69 = i64 + 8 | 0;
             i64 = i69 | 0;
             i89 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
             HEAP32[i64 >> 2] = i89;
             if ((i89 | 0) >= 1) {
              i87 = 0;
              break L225;
             }
             if ((HEAP32[i69 + 8 >> 2] | 0) != 0) {
              i87 = 0;
              break L225;
             }
             __ZN7WebCore4Node14removedLastRefEv(i69 - 8 | 0);
             i87 = 0;
             break L225;
            }
           } while (0);
           if (!(__ZN7WebCoreL23setSelectionToDragCaretEPNS_5FrameERNS_16VisibleSelectionERN3WTF6RefPtrINS_5RangeEEERKNS_8IntPointE(i44, i29, i30, i24) | 0)) {
            i87 = 0;
            break;
           }
           i70 = __ZNK7WebCore8DragData15canSmartReplaceEv(i2) | 0;
           i63 = i70 ? 11 : 9;
           i70 = (HEAP8[i32] & 1) == 0 ? i63 : i63 | 4;
           i63 = HEAP32[i41 >> 2] | 0;
           HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
           i69 = __ZN3WTF10fastMallocEj(200) | 0;
           i89 = i20 | 0;
           HEAP32[i89 >> 2] = i73;
           __ZN7WebCore23ReplaceSelectionCommandC1ERNS_8DocumentEN3WTF10PassRefPtrINS_16DocumentFragmentEEEjNS_10EditActionE(i69, i63, i20, i70, 29);
           i70 = HEAP32[i89 >> 2] | 0;
           do {
            if ((i70 | 0) != 0) {
             i89 = i70 + 8 | 0;
             i63 = i89 | 0;
             i64 = (HEAP32[i63 >> 2] | 0) - 1 | 0;
             HEAP32[i63 >> 2] = i64;
             if ((i64 | 0) >= 1) {
              break;
             }
             if ((HEAP32[i89 + 8 >> 2] | 0) != 0) {
              break;
             }
             __ZN7WebCore4Node14removedLastRefEv(i89 - 8 | 0);
            }
           } while (0);
           i70 = i37 | 0;
           HEAP32[i70 >> 2] = i69;
           __ZN7WebCore12applyCommandEN3WTF10PassRefPtrINS_20CompositeEditCommandEEE(i37);
           i89 = HEAP32[i70 >> 2] | 0;
           if ((i89 | 0) == 0) {
            i87 = 0;
            break;
           }
           i70 = i89 + 4 | 0;
           i89 = i70 | 0;
           i64 = (HEAP32[i89 >> 2] | 0) - 1 | 0;
           if ((i64 | 0) != 0) {
            HEAP32[i89 >> 2] = i64;
            i87 = 0;
            break;
           }
           i64 = i70 - 4 | 0;
           if ((i64 | 0) == 0) {
            i87 = 0;
            break;
           }
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i64 >> 2] | 0) + 4 >> 2] & 3](i64);
           i87 = 0;
          }
         } while (0);
         i71 = i73 + 8 | 0;
         i68 = i71 - 8 | 0;
         i80 = i71 | 0;
         i64 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
         HEAP32[i80 >> 2] = i64;
         do {
          if ((i64 | 0) < 1) {
           if ((HEAP32[i71 + 8 >> 2] | 0) != 0) {
            break;
           }
           __ZN7WebCore4Node14removedLastRefEv(i68);
          }
         } while (0);
         i68 = (i87 | 0) != 0;
         if (i68 | i54) {
          i65 = i68 ^ 1;
         } else {
          i49 = 200;
         }
        }
       } while (0);
       do {
        if ((i49 | 0) == 200) {
         i62 = HEAP32[(HEAP32[(HEAP32[i53 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
         if ((i62 | 0) == 0) {
          i65 = 1;
          break;
         }
         __ZN7WebCore12EventHandler36updateDragStateAfterEditDragIfNeededEPNS_7ElementE(HEAP32[i62 + 472 >> 2] | 0, i53);
         i65 = 1;
        }
       } while (0);
       if (i60) {
        i58 = i65;
        break;
       }
       i62 = i59 + 136 | 0;
       HEAP8[i62] = HEAP8[i62] & -5 | i61;
       i58 = i65;
      }
     } while (0);
     do {
      if (!i54) {
       i52 = i53 + 8 | 0;
       i55 = i52 | 0;
       i62 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
       HEAP32[i55 >> 2] = i62;
       if ((i62 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i52 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i52 - 8 | 0);
      }
     } while (0);
     i53 = HEAP32[i51 >> 2] | 0;
     do {
      if ((i53 | 0) != 0) {
       i54 = i53 | 0;
       i52 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
       if ((i52 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i53);
        __ZN3WTF8fastFreeEPv(i53);
        break;
       } else {
        HEAP32[i54 >> 2] = i52;
        break;
       }
      }
     } while (0);
     __ZN7WebCore16VisibleSelectionD2Ev(i29);
     i50 = i58;
    }
   } while (0);
   if (i46) {
    i47 = i50;
    break;
   }
   i48 = i44 + 4 | 0;
   i53 = i48 | 0;
   i51 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
   if ((i51 | 0) != 0) {
    HEAP32[i53 >> 2] = i51;
    i47 = i50;
    break;
   }
   i51 = i48 - 4 | 0;
   if ((i51 | 0) == 0) {
    i47 = i50;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 3](i51);
   i47 = i50;
  }
 } while (0);
 if (i43) {
  STACKTOP = i3;
  return i47 | 0;
 }
 i43 = i42 + 8 | 0;
 i42 = i43 | 0;
 i50 = (HEAP32[i42 >> 2] | 0) - 1 | 0;
 HEAP32[i42 >> 2] = i50;
 if ((i50 | 0) >= 1) {
  STACKTOP = i3;
  return i47 | 0;
 }
 if ((HEAP32[i43 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i47 | 0;
 }
 __ZN7WebCore4Node14removedLastRefEv(i43 - 8 | 0);
 STACKTOP = i3;
 return i47 | 0;
}
function __ZN7WebCore14DragController9startDragERNS_5FrameERKNS_9DragStateENS_13DragOperationERKNS_18PlatformMouseEventERKNS_8IntPointE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, d90 = +0, i91 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 408 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 24 | 0;
 i11 = i7 + 40 | 0;
 i12 = i7 + 48 | 0;
 i13 = i7 + 56 | 0;
 i14 = i7 + 120 | 0;
 i15 = i7 + 232 | 0;
 i16 = i7 + 240 | 0;
 i17 = i7 + 248 | 0;
 i18 = i7 + 296 | 0;
 i19 = i7 + 344 | 0;
 i20 = i7 + 352 | 0;
 i21 = i7 + 400 | 0;
 i22 = i21;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i24 = i23;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i31 = i30 | 0;
 i32 = i30;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i33 = i30;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i36 = i35;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 60 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i45 = i2 + 452 | 0;
 if ((HEAP32[i45 >> 2] | 0) == 0) {
  i46 = 0;
  STACKTOP = i7;
  return i46 | 0;
 }
 if ((__ZNK7WebCore5Frame15contentRendererEv(i2) | 0) == 0) {
  i46 = 0;
  STACKTOP = i7;
  return i46 | 0;
 }
 i47 = HEAP32[i2 + 472 >> 2] | 0;
 i48 = i6 | 0;
 HEAP32[i15 >> 2] = HEAP32[i48 >> 2];
 i49 = i6 + 4 | 0;
 HEAP32[i15 + 4 >> 2] = HEAP32[i49 >> 2];
 HEAP32[i16 >> 2] = 0;
 HEAP32[i16 + 4 >> 2] = 0;
 __ZN7WebCore12EventHandler20hitTestResultAtPointERKNS_11LayoutPointEjRKNS_10LayoutSizeE(i14, i47, i15, 6, i16);
 i16 = i3 | 0;
 do {
  if (__ZNK7WebCore4Node8containsEPKS0_(HEAP32[i16 >> 2] | 0, HEAP32[i14 + 72 >> 2] | 0) | 0) {
   __ZNK7WebCore13HitTestResult15absoluteLinkURLEv(i17, i14);
   __ZNK7WebCore13HitTestResult16absoluteImageURLEv(i18, i14);
   __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i19, HEAP32[i45 >> 2] | 0, i5 + 16 | 0);
   i15 = i20 | 0;
   HEAP32[i15 >> 2] = 0;
   __ZN7WebCore3URL10invalidateEv(i20);
   i47 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i50 = i1 + 48 | 0;
   i51 = HEAP32[i50 >> 2] | 0;
   HEAP32[i50 >> 2] = i47;
   do {
    if ((i51 | 0) != 0) {
     i47 = i51 | 0;
     i52 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
     if ((i52 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i51);
      break;
     } else {
      HEAP32[i47 >> 2] = i52;
      break;
     }
    }
   } while (0);
   i51 = HEAP8[i20 + 4 | 0] | 0;
   i52 = i1 + 52 | 0;
   HEAP8[i52] = HEAP8[i52] & -4 | i51 & 1 | i51 & 2;
   i51 = i1 + 56 | 0;
   HEAP32[i51 >> 2] = HEAP32[i20 + 8 >> 2];
   i47 = i1 + 60 | 0;
   HEAP32[i47 >> 2] = HEAP32[i20 + 12 >> 2];
   i53 = i1 + 64 | 0;
   HEAP32[i53 >> 2] = HEAP32[i20 + 16 >> 2];
   i54 = i1 + 68 | 0;
   HEAP32[i54 >> 2] = HEAP32[i20 + 20 >> 2];
   i55 = i1 + 72 | 0;
   HEAP32[i55 >> 2] = HEAP32[i20 + 24 >> 2];
   i56 = i1 + 76 | 0;
   HEAP32[i56 >> 2] = HEAP32[i20 + 28 >> 2];
   i57 = i1 + 80 | 0;
   HEAP32[i57 >> 2] = HEAP32[i20 + 32 >> 2];
   i58 = i1 + 84 | 0;
   HEAP32[i58 >> 2] = HEAP32[i20 + 36 >> 2];
   i59 = i1 + 88 | 0;
   HEAP32[i59 >> 2] = HEAP32[i20 + 40 >> 2];
   i60 = i1 + 92 | 0;
   HEAP32[i60 >> 2] = HEAP32[i20 + 44 >> 2];
   i61 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i61 | 0) != 0) {
     i62 = i61 | 0;
     i63 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
     if ((i63 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i61);
      break;
     } else {
      HEAP32[i62 >> 2] = i63;
      break;
     }
    }
   } while (0);
   i61 = i1 + 36 | 0;
   HEAP32[i61 >> 2] = i4;
   HEAP32[i21 >> 2] = 0;
   HEAP32[i22 + 4 >> 2] = 0;
   i15 = i23;
   HEAP32[i15 >> 2] = 0;
   i63 = i24 + 4 | 0;
   HEAP32[i63 >> 2] = 0;
   i62 = HEAP32[i3 + 12 >> 2] | 0;
   i64 = i3 + 8 | 0;
   i65 = HEAP32[i64 >> 2] | 0;
   if ((i65 | 0) == 1) {
    i66 = __ZNK7WebCore9Clipboard15createDragImageERNS_8IntPointE(i62, i24) | 0;
    i67 = i66;
    i68 = HEAP32[i64 >> 2] | 0;
   } else {
    i67 = 0;
    i68 = i65;
   }
   do {
    if ((i68 | 0) == 8) {
     i69 = 19;
    } else {
     i65 = HEAP32[i18 >> 2] | 0;
     if ((i65 | 0) != 0) {
      if ((HEAP32[i65 + 4 >> 2] | 0) != 0) {
       i69 = 19;
       break;
      }
     }
     i65 = HEAP32[i17 >> 2] | 0;
     if ((i65 | 0) == 0) {
      break;
     }
     if ((HEAP32[i65 + 4 >> 2] | 0) != 0) {
      i69 = 19;
     }
    }
   } while (0);
   if ((i69 | 0) == 19) {
    HEAP32[i61 >> 2] = HEAP32[i61 >> 2] | 5;
   }
   i65 = (i67 | 0) != 0;
   if (i65) {
    i66 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i66 | 0) == 0) {
      i70 = HEAP32[i63 >> 2] | 0;
      i69 = 25;
     } else {
      i71 = HEAP32[i63 >> 2] | 0;
      if ((HEAP32[i66 + 4 >> 2] | 0) == 0) {
       i70 = i71;
       i69 = 25;
       break;
      }
      i72 = (HEAP32[i19 >> 2] | 0) - (HEAP32[i15 >> 2] | 0) | 0;
      i73 = (HEAP32[i19 + 4 >> 2] | 0) - i71 | 0;
     }
    } while (0);
    if ((i69 | 0) == 25) {
     i72 = (HEAP32[i48 >> 2] | 0) - (HEAP32[i15 >> 2] | 0) | 0;
     i73 = (HEAP32[i49 >> 2] | 0) - i70 | 0;
    }
    HEAP32[i21 >> 2] = i72;
    HEAP32[i21 + 4 >> 2] = i73;
    i66 = i1 + 40 | 0;
    i63 = HEAP32[i23 + 4 >> 2] | 0;
    HEAP32[i66 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i66 + 4 >> 2] = i63;
   }
   i63 = HEAP32[i16 >> 2] | 0;
   i66 = i63 + 32 | 0;
   if ((HEAP32[i63 + 12 >> 2] & 2048 | 0) == 0) {
    i74 = i66 | 0;
   } else {
    i74 = HEAP32[i66 >> 2] | 0;
   }
   i66 = HEAP32[i74 >> 2] | 0;
   do {
    if ((i66 | 0) == 0) {
     i75 = 0;
    } else {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i66 >> 2] | 0) + 92 >> 2] & 1](i66) | 0)) {
      i75 = 0;
      break;
     }
     i61 = HEAP32[i66 + 104 >> 2] | 0;
     if ((i61 | 0) == 0) {
      i75 = 0;
      break;
     }
     i71 = HEAP32[i61 + 8 >> 2] | 0;
     if ((i71 | 0) == 0) {
      i75 = 0;
      break;
     }
     if ((((HEAP32[i71 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
      i75 = 0;
      break;
     }
     i75 = __ZN7WebCore11CachedImage5imageEv(i71) | 0;
    }
   } while (0);
   L54 : do {
    if ((HEAP32[i64 >> 2] | 0) == 8) {
     i66 = i62 + 8 | 0;
     do {
      if (!(__ZN7WebCore10Pasteboard7hasDataEv(HEAP32[i66 >> 2] | 0) | 0)) {
       i15 = i2 + 468 | 0;
       __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i25, (HEAP32[i15 >> 2] | 0) + 32 | 0);
       i71 = i25 | 0;
       i61 = HEAP32[i71 >> 2] | 0;
       HEAP32[i71 >> 2] = 0;
       i71 = i2 + 464 | 0;
       i76 = HEAP32[i71 >> 2] | 0;
       i77 = i26 | 0;
       HEAP32[i77 >> 2] = i61;
       i78 = (i61 | 0) == 0;
       if (!i78) {
        i79 = i61 | 0;
        HEAP32[i79 >> 2] = (HEAP32[i79 >> 2] | 0) + 1;
       }
       __ZN7WebCore6Editor30willWriteSelectionToPasteboardEN3WTF10PassRefPtrINS_5RangeEEE(i76, i26);
       i76 = HEAP32[i77 >> 2] | 0;
       do {
        if ((i76 | 0) != 0) {
         i77 = i76 | 0;
         i79 = (HEAP32[i77 >> 2] | 0) - 1 | 0;
         if ((i79 | 0) == 0) {
          __ZN7WebCore5RangeD1Ev(i76);
          __ZN3WTF8fastFreeEPv(i76);
          break;
         } else {
          HEAP32[i77 >> 2] = i79;
          break;
         }
        }
       } while (0);
       i76 = HEAP32[i15 >> 2] | 0;
       i79 = i27 | 0;
       i77 = HEAP32[i76 + 56 >> 2] | 0;
       HEAP32[i79 >> 2] = i77;
       if ((i77 | 0) != 0) {
        i80 = i77 + 8 | 0;
        HEAP32[i80 >> 2] = (HEAP32[i80 >> 2] | 0) + 1;
       }
       HEAP32[i27 + 4 >> 2] = HEAP32[i76 + 60 >> 2];
       i80 = HEAP32[i76 + 64 >> 2] | 0;
       i76 = i27 + 8 | 0;
       i77 = i76;
       i81 = HEAP32[i77 >> 2] & -8 | i80 & 7;
       HEAP32[i77 >> 2] = i81;
       HEAP8[i76] = i81 & 255 & -9 | i80 & 8;
       i80 = (__ZN7WebCore24enclosingTextFormControlERKNS_8PositionE(i27) | 0) == 0;
       i81 = HEAP32[i79 >> 2] | 0;
       do {
        if ((i81 | 0) != 0) {
         i79 = i81 + 8 | 0;
         i76 = i79 | 0;
         i77 = (HEAP32[i76 >> 2] | 0) - 1 | 0;
         HEAP32[i76 >> 2] = i77;
         if ((i77 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i79 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i79 - 8 | 0);
        }
       } while (0);
       do {
        if (!i80) {
         i81 = HEAP32[i66 >> 2] | 0;
         __ZNK7WebCore6Editor24selectedTextForClipboardEv(i28, HEAP32[i71 >> 2] | 0);
         __ZN7WebCore10Pasteboard14writePlainTextERKN3WTF6StringENS0_18SmartReplaceOptionE(i81, i28, 1);
         i81 = HEAP32[i28 >> 2] | 0;
         if ((i81 | 0) == 0) {
          break;
         }
         i15 = i81 | 0;
         i79 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
         if ((i79 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i81);
          break;
         } else {
          HEAP32[i15 >> 2] = i79;
          break;
         }
        }
       } while (0);
       __ZN7WebCore6Editor29didWriteSelectionToPasteboardEv(HEAP32[i71 >> 2] | 0);
       if (i78) {
        break;
       }
       i80 = i61 | 0;
       i79 = (HEAP32[i80 >> 2] | 0) - 1 | 0;
       if ((i79 | 0) == 0) {
        __ZN7WebCore5RangeD1Ev(i61);
        __ZN3WTF8fastFreeEPv(i61);
        break;
       } else {
        HEAP32[i80 >> 2] = i79;
        break;
       }
      }
     } while (0);
     i66 = HEAP32[i1 + 4 >> 2] | 0;
     FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i66 >> 2] | 0) + 8 >> 2] & 1](i66, 8, i6, i62);
     if (i65) {
      i82 = i67;
     } else {
      i66 = __ZN7WebCore27createDragImageForSelectionERNS_5FrameEb(i2, 0) | 0;
      i79 = __ZN7WebCore27dissolveDragImageToFractionEPvf(i66, +HEAPF32[__ZN7WebCore14DragController14DragImageAlphaE >> 2]) | 0;
      __ZNK7WebCore14FrameSelection6boundsEb(i10, HEAP32[i2 + 468 >> 2] | 0, 1);
      __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i9, i10);
      i66 = HEAP32[i9 >> 2] | 0;
      i80 = (HEAP32[i9 + 8 >> 2] | 0) + i66 | 0;
      i15 = (i66 | 0) < (i80 | 0) ? i66 : i80;
      i80 = HEAP32[i9 + 4 >> 2] | 0;
      i66 = (HEAP32[i9 + 12 >> 2] | 0) + i80 | 0;
      i81 = (i80 | 0) < (i66 | 0) ? i80 : i66;
      HEAP32[i21 >> 2] = i15;
      HEAP32[i21 + 4 >> 2] = i81;
      i66 = i1 + 40 | 0;
      i80 = (HEAP32[i49 >> 2] | 0) - i81 | 0;
      HEAP32[i66 >> 2] = (HEAP32[i48 >> 2] | 0) - i15;
      HEAP32[i66 + 4 >> 2] = i80;
      i82 = i79;
     }
     __ZN7WebCore14DragController12doSystemDragEPvRKNS_8IntPointES4_RNS_9ClipboardERNS_5FrameEb(i1, i82, i22, i6, i62, i2, 0);
     i83 = i82;
     i84 = 1;
     i69 = 119;
    } else {
     i79 = i18 | 0;
     i80 = HEAP32[i79 >> 2] | 0;
     do {
      if ((i80 | 0) != 0) {
       if ((HEAP32[i80 + 4 >> 2] | 0) == 0 | (i75 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vii[HEAP32[(HEAP32[i75 >> 2] | 0) + 48 >> 2] & 1](i8, i75);
       if ((HEAP32[i8 >> 2] | 0) < 1) {
        break;
       }
       if ((HEAP32[i8 + 4 >> 2] | 0) < 1) {
        break;
       }
       if ((HEAP32[i1 + 28 >> 2] & 2 | 0) == 0) {
        break;
       }
       do {
        if (!(__ZN7WebCore10Pasteboard7hasDataEv(HEAP32[i62 + 8 >> 2] | 0) | 0)) {
         i66 = HEAP32[i79 >> 2] | 0;
         if ((i66 | 0) != 0) {
          i15 = i66 | 0;
          HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
         }
         i15 = HEAP32[i50 >> 2] | 0;
         HEAP32[i50 >> 2] = i66;
         do {
          if ((i15 | 0) != 0) {
           i66 = i15 | 0;
           i81 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
           if ((i81 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i15);
            break;
           } else {
            HEAP32[i66 >> 2] = i81;
            break;
           }
          }
         } while (0);
         i15 = HEAP8[i18 + 4 | 0] | 0;
         HEAP8[i52] = HEAP8[i52] & -4 | i15 & 1 | i15 & 2;
         HEAP32[i51 >> 2] = HEAP32[i18 + 8 >> 2];
         HEAP32[i47 >> 2] = HEAP32[i18 + 12 >> 2];
         HEAP32[i53 >> 2] = HEAP32[i18 + 16 >> 2];
         HEAP32[i54 >> 2] = HEAP32[i18 + 20 >> 2];
         HEAP32[i55 >> 2] = HEAP32[i18 + 24 >> 2];
         HEAP32[i56 >> 2] = HEAP32[i18 + 28 >> 2];
         HEAP32[i57 >> 2] = HEAP32[i18 + 32 >> 2];
         HEAP32[i58 >> 2] = HEAP32[i18 + 36 >> 2];
         HEAP32[i59 >> 2] = HEAP32[i18 + 40 >> 2];
         HEAP32[i60 >> 2] = HEAP32[i18 + 44 >> 2];
         i15 = i63 | 0;
         do {
          if (__ZN7WebCore4Node23isContentRichlyEditableEv(i15) | 0) {
           i81 = i63 + 20 | 0;
           __ZN7WebCore8Document11createRangeEv(i11, HEAP32[(HEAP32[i81 >> 2] | 0) + 8 >> 2] | 0);
           i66 = i11 | 0;
           i77 = HEAP32[i66 >> 2] | 0;
           HEAP32[i66 >> 2] = 0;
           i66 = i12 | 0;
           HEAP32[i66 >> 2] = 0;
           __ZN7WebCore5Range10selectNodeEPNS_4NodeERi(i77, i15, i66);
           i66 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i81 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) + 468 >> 2] | 0;
           __ZN7WebCore16VisibleSelectionC1EPKNS_5RangeENS_9EAffinityEb(i13, i77, 1, 0);
           __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i66, i13, 6, 0, 0);
           __ZN7WebCore16VisibleSelectionD2Ev(i13);
           if ((i77 | 0) == 0) {
            break;
           }
           i66 = i77 | 0;
           i81 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
           if ((i81 | 0) == 0) {
            __ZN7WebCore5RangeD1Ev(i77);
            __ZN3WTF8fastFreeEPv(i77);
            break;
           } else {
            HEAP32[i66 >> 2] = i81;
            break;
           }
          }
         } while (0);
         i15 = HEAP32[i17 >> 2] | 0;
         if ((i15 | 0) == 0) {
          i85 = i18;
         } else {
          i85 = (HEAP32[i15 + 4 >> 2] | 0) == 0 ? i18 : i17;
         }
         __ZNK7WebCore13HitTestResult16altDisplayStringEv(i29, i14);
         __ZN7WebCore14DragController24declareAndWriteDragImageERNS_9ClipboardERNS_7ElementERKNS_3URLERKN3WTF6StringE(i1, i62, i63, i85, i29);
         i15 = HEAP32[i29 >> 2] | 0;
         if ((i15 | 0) == 0) {
          break;
         }
         i81 = i15 | 0;
         i66 = (HEAP32[i81 >> 2] | 0) - 2 | 0;
         if ((i66 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i15);
          break;
         } else {
          HEAP32[i81 >> 2] = i66;
          break;
         }
        }
       } while (0);
       i61 = HEAP32[i1 + 4 >> 2] | 0;
       FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i61 >> 2] | 0) + 8 >> 2] & 1](i61, 2, i6, i62);
       if (i65) {
        __ZN7WebCore14DragController12doSystemDragEPvRKNS_8IntPointES4_RNS_9ClipboardERNS_5FrameEb(i1, i67, i22, i6, i62, i2, 0);
        i86 = 1;
        i87 = i67;
        i69 = 120;
        break L54;
       } else {
        __ZNK7WebCore13HitTestResult9imageRectEv(i32, i14);
        i61 = HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0) + 452 >> 2] | 0;
        i78 = HEAP32[i45 >> 2] | 0;
        i71 = HEAP32[i31 + 4 >> 2] | 0;
        HEAP32[i35 >> 2] = HEAP32[i31 >> 2];
        HEAP32[i35 + 4 >> 2] = i71;
        __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i34, i78, i36);
        __ZNK7WebCore10ScrollView18rootViewToContentsERKNS_8IntPointE(i33, i61, i34);
        i61 = HEAP32[i30 + 4 >> 2] | 0;
        HEAP32[i31 >> 2] = HEAP32[i30 >> 2];
        HEAP32[i31 + 4 >> 2] = i61;
        __ZNK7WebCore13HitTestResult9imageRectEv(i37, i14);
        __ZN7WebCore14DragController11doImageDragERNS_7ElementERKNS_8IntPointERKNS_7IntRectERNS_9ClipboardERNS_5FrameERS3_(i1, i63, i6, i37, i62, i2, i1 + 40 | 0);
        i88 = 1;
        break L54;
       }
      }
     } while (0);
     i79 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i79 | 0) != 0) {
       if ((HEAP32[i79 + 4 >> 2] | 0) == 0) {
        break;
       }
       if ((HEAP32[i1 + 28 >> 2] & 4 | 0) == 0) {
        break;
       }
       i80 = i62 + 8 | 0;
       do {
        if (!(__ZN7WebCore10Pasteboard7hasDataEv(HEAP32[i80 >> 2] | 0) | 0)) {
         i61 = HEAP32[i2 + 464 >> 2] | 0;
         __ZNK7WebCore13HitTestResult11textContentEv(i39, i14);
         __ZNK3WTF6String18simplifyWhiteSpaceEv(i38, i39);
         __ZN7WebCore6Editor7copyURLERKNS_3URLERKN3WTF6StringERNS_10PasteboardE(i61, i17, i38, HEAP32[i80 >> 2] | 0);
         i61 = HEAP32[i38 >> 2] | 0;
         do {
          if ((i61 | 0) != 0) {
           i78 = i61 | 0;
           i71 = (HEAP32[i78 >> 2] | 0) - 2 | 0;
           if ((i71 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i61);
            break;
           } else {
            HEAP32[i78 >> 2] = i71;
            break;
           }
          }
         } while (0);
         i61 = HEAP32[i39 >> 2] | 0;
         if ((i61 | 0) == 0) {
          break;
         }
         i71 = i61 | 0;
         i78 = (HEAP32[i71 >> 2] | 0) - 2 | 0;
         if ((i78 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i61);
          break;
         } else {
          HEAP32[i71 >> 2] = i78;
          break;
         }
        }
       } while (0);
       i80 = i2 + 468 | 0;
       i78 = HEAP32[i80 >> 2] | 0;
       do {
        if ((HEAP32[i78 + 84 >> 2] | 0) == 1) {
         if (!(__ZNK7WebCore16VisibleSelection17isContentEditableEv(i78 + 32 | 0) | 0)) {
          break;
         }
         i71 = HEAP32[i80 >> 2] | 0;
         i61 = i40 | 0;
         i66 = HEAP32[i71 + 32 >> 2] | 0;
         HEAP32[i61 >> 2] = i66;
         if ((i66 | 0) != 0) {
          i81 = i66 + 8 | 0;
          HEAP32[i81 >> 2] = (HEAP32[i81 >> 2] | 0) + 1;
         }
         HEAP32[i40 + 4 >> 2] = HEAP32[i71 + 36 >> 2];
         i81 = HEAP32[i71 + 40 >> 2] | 0;
         i71 = i40 + 8 | 0;
         i66 = i71;
         i15 = HEAP32[i66 >> 2] & -8 | i81 & 7;
         HEAP32[i66 >> 2] = i15;
         HEAP8[i71] = i15 & 255 & -9 | i81 & 8;
         i81 = __ZN7WebCore22enclosingAnchorElementERKNS_8PositionE(i40) | 0;
         if ((i81 | 0) != 0) {
          i15 = HEAP32[i80 >> 2] | 0;
          __ZN7WebCore16VisibleSelection27selectionFromContentsOfNodeEPNS_4NodeE(i41, i81 | 0);
          __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(i15, i41, 6, 0, 0);
          __ZN7WebCore16VisibleSelectionD2Ev(i41);
         }
         i15 = HEAP32[i61 >> 2] | 0;
         if ((i15 | 0) == 0) {
          break;
         }
         i61 = i15 + 8 | 0;
         i15 = i61 | 0;
         i81 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
         HEAP32[i15 >> 2] = i81;
         if ((i81 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i61 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i61 - 8 | 0);
        }
       } while (0);
       i80 = HEAP32[i1 + 4 >> 2] | 0;
       FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i80 >> 2] | 0) + 8 >> 2] & 1](i80, 4, i6, i62);
       if (i65) {
        i89 = i67;
       } else {
        __ZNK7WebCore13HitTestResult11textContentEv(i42, i14);
        i80 = __ZN7WebCore22createDragImageForLinkERNS_3URLERKN3WTF6StringENS_17FontRenderingModeE(i17, i42, __ZNK7WebCore8Settings17fontRenderingModeEv(HEAP32[i2 + 36 >> 2] | 0) | 0) | 0;
        i78 = HEAP32[i42 >> 2] | 0;
        do {
         if ((i78 | 0) != 0) {
          i61 = i78 | 0;
          i81 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
          if ((i81 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i78);
           break;
          } else {
           HEAP32[i61 >> 2] = i81;
           break;
          }
         }
        } while (0);
        __ZN7WebCore13dragImageSizeEPv(i43, i80);
        i78 = (HEAP32[i43 >> 2] | 0) / -2 & -1;
        i81 = HEAP32[__ZN7WebCore14DragController19LinkDragBorderInsetE >> 2] | 0;
        i61 = i1 + 40 | 0;
        HEAP32[i61 >> 2] = i78;
        HEAP32[i61 + 4 >> 2] = -i81;
        i61 = (HEAP32[i19 + 4 >> 2] | 0) - i81 | 0;
        HEAP32[i21 >> 2] = i78 + (HEAP32[i19 >> 2] | 0);
        HEAP32[i21 + 4 >> 2] = i61;
        d90 = +HEAPF32[(HEAP32[i1 >> 2] | 0) + 116 >> 2];
        HEAPF32[i44 >> 2] = d90;
        HEAPF32[i44 + 4 >> 2] = d90;
        i89 = __ZN7WebCore14scaleDragImageEPvNS_9FloatSizeE(i80, i44) | 0;
       }
       __ZN7WebCore14DragController12doSystemDragEPvRKNS_8IntPointES4_RNS_9ClipboardERNS_5FrameEb(i1, i89, i22, i19, i62, i2, 1);
       i83 = i89;
       i84 = 1;
       i69 = 119;
       break L54;
      }
     } while (0);
     if ((HEAP32[i64 >> 2] | 0) != 1 | i65 ^ 1) {
      i83 = i67;
      i84 = 0;
      i69 = 119;
      break;
     }
     i79 = HEAP32[i1 + 4 >> 2] | 0;
     FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i79 >> 2] | 0) + 8 >> 2] & 1](i79, 1, i6, i62);
     __ZN7WebCore14DragController12doSystemDragEPvRKNS_8IntPointES4_RNS_9ClipboardERNS_5FrameEb(i1, i67, i22, i6, i62, i2, 0);
     i83 = i67;
     i84 = 1;
     i69 = 119;
    }
   } while (0);
   if ((i69 | 0) == 119) {
    if ((i83 | 0) == 0) {
     i88 = i84;
    } else {
     i86 = i84;
     i87 = i83;
     i69 = 120;
    }
   }
   if ((i69 | 0) == 120) {
    __ZN7WebCore15deleteDragImageEPv(i87);
    i88 = i86;
   }
   i62 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i62 | 0) != 0) {
     i65 = i62 | 0;
     i64 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
     if ((i64 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i62);
      break;
     } else {
      HEAP32[i65 >> 2] = i64;
      break;
     }
    }
   } while (0);
   i62 = HEAP32[i17 >> 2] | 0;
   if ((i62 | 0) == 0) {
    i91 = i88;
    break;
   }
   i64 = i62 | 0;
   i65 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
   if ((i65 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i62);
    i91 = i88;
    break;
   } else {
    HEAP32[i64 >> 2] = i65;
    i91 = i88;
    break;
   }
  } else {
   i91 = 0;
  }
 } while (0);
 __ZN7WebCore13HitTestResultD1Ev(i14);
 i46 = i91;
 STACKTOP = i7;
 return i46 | 0;
}
function __ZN7WebCore14DragController15tryDocumentDragERNS_8DragDataENS_21DragDestinationActionERNS_11DragSessionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 40 | 0;
 i10 = i1 + 8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
  STACKTOP = i5;
  return i12 | 0;
 }
 i13 = i1 + 12 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   if (__ZNK7WebCore14SecurityOrigin18canReceiveDragDataEPKS0_(HEAP32[i11 + 100 >> 2] | 0, HEAP32[i14 + 100 >> 2] | 0) | 0) {
    break;
   } else {
    i12 = 0;
   }
   STACKTOP = i5;
   return i12 | 0;
  }
 } while (0);
 do {
  if ((i3 & 1 | 0) == 0) {
   i15 = 0;
   i16 = HEAP32[i10 >> 2] | 0;
  } else {
   i14 = __ZN7WebCore14DragController12tryDHTMLDragERNS_8DragDataERNS_13DragOperationE(i1, i2, i4 | 0) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i12 = 0;
   } else {
    i15 = i14;
    i16 = i11;
    break;
   }
   STACKTOP = i5;
   return i12 | 0;
  }
 } while (0);
 i11 = __ZNK7WebCore8Document4viewEv(i16) | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
  STACKTOP = i5;
  return i12 | 0;
 }
 i16 = i11 + 4 | 0;
 HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 L16 : do {
  if (i15) {
   i16 = HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] | 0;
   _memset(i6 | 0, 0, 12) | 0;
   HEAP32[i6 + 12 >> 2] = 1;
   __ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE(i16, i6);
   i16 = HEAP32[i6 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = 1;
    break;
   }
   i14 = i16 + 8 | 0;
   i16 = i14 | 0;
   i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   HEAP32[i16 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    i17 = 1;
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    i17 = 1;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   i17 = 1;
  } else {
   do {
    if ((i3 & 2 | 0) != 0) {
     if (!(__ZN7WebCore14DragController14canProcessDragERNS_8DragDataE(i1, i2) | 0)) {
      break;
     }
     if (__ZNK7WebCore8DragData13containsColorEv(i2) | 0) {
      HEAP32[i4 >> 2] = 4;
      i17 = 1;
      break L16;
     }
     __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i8, i11 | 0, i2 | 0);
     i14 = __ZN7WebCoreL17elementUnderMouseEPNS_8DocumentERKNS_8IntPointE(HEAP32[i10 >> 2] | 0, HEAP32[i8 >> 2] | 0, HEAP32[i8 + 4 >> 2] | 0) | 0;
     if ((i14 | 0) == 0) {
      i17 = 0;
      break L16;
     }
     i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 208 >> 2] & 1](i14 | 0) | 0;
     do {
      if ((i18 | 0) == 0) {
       i19 = 0;
      } else {
       if (__ZNK7WebCore16HTMLInputElement12isTextButtonEv(i18) | 0) {
        i16 = HEAP32[(HEAP32[i18 + 20 >> 2] | 0) + 4 >> 2] | 0;
        do {
         if ((HEAP32[i16 + 12 >> 2] & 4096 | 0) == 0) {
          i20 = i18;
         } else {
          if ((HEAP32[(HEAP32[i16 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i16 | 0)) {
           i20 = i18;
           break;
          }
          i21 = HEAP32[i16 + 92 >> 2] | 0;
          i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 208 >> 2] & 1](i21 | 0) | 0;
         }
        } while (0);
        if ((i20 | 0) == 0) {
         i19 = 0;
         break;
        } else {
         i22 = i20;
        }
       } else {
        i22 = i18;
       }
       i16 = __ZNK7WebCore16HTMLInputElement12isFileUploadEv(i22) | 0;
       i19 = i16 ? i22 : 0;
      }
     } while (0);
     i18 = i1 + 16 | 0;
     i16 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i16 | 0) == (i19 | 0)) {
       i23 = i19;
      } else {
       if ((i16 | 0) != 0) {
        __ZN7WebCore16HTMLInputElement25setCanReceiveDroppedFilesEb(i16, 0);
       }
       if ((i19 | 0) != 0) {
        i21 = i19 + 8 | 0;
        HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
       }
       i21 = HEAP32[i18 >> 2] | 0;
       HEAP32[i18 >> 2] = i19;
       if ((i21 | 0) == 0) {
        i23 = i19;
        break;
       }
       i24 = i21 + 8 | 0;
       i21 = i24 - 8 | 0;
       i25 = i24 | 0;
       i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       HEAP32[i25 >> 2] = i26;
       do {
        if ((i26 | 0) < 1) {
         if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i21);
        }
       } while (0);
       i23 = HEAP32[i18 >> 2] | 0;
      }
     } while (0);
     do {
      if ((i23 | 0) == 0) {
       i16 = HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] | 0;
       __ZN7WebCore5Frame23visiblePositionForPointERKNS_8IntPointE(i9, HEAP32[(HEAP32[i10 >> 2] | 0) + 332 >> 2] | 0, i8);
       __ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE(i16, i9);
       i16 = HEAP32[i9 >> 2] | 0;
       if ((i16 | 0) == 0) {
        break;
       }
       i21 = i16 + 8 | 0;
       i16 = i21 | 0;
       i24 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
       HEAP32[i16 >> 2] = i24;
       if ((i24 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
      }
     } while (0);
     i21 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) + 468 >> 2] | 0;
     do {
      if ((HEAP32[i10 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
       if (!(__ZNK7WebCore16VisibleSelection17isContentEditableEv(i21 + 32 | 0) | 0)) {
        i27 = 1;
        break;
       }
       if ((HEAP32[i21 + 84 >> 2] | 0) != 2) {
        i27 = 1;
        break;
       }
       i24 = __ZN7WebCore14DragController13isCopyKeyDownERNS_8DragDataE(i1, i2) | 0;
       i27 = i24 ? 1 : 16;
      } else {
       i27 = 1;
      }
     } while (0);
     i21 = i4 | 0;
     HEAP32[i21 >> 2] = i27;
     HEAP8[i4 + 4 | 0] = (HEAP32[i18 >> 2] | 0) != 0 | 0;
     i14 = i4 + 8 | 0;
     HEAP32[i14 >> 2] = 0;
     i24 = __ZNK7WebCore8DragData13numberOfFilesEv(i2) | 0;
     i16 = HEAP32[i18 >> 2] | 0;
     if ((i16 | 0) == 0) {
      HEAP32[i14 >> 2] = (i24 | 0) == 1;
      i17 = 1;
      break L16;
     }
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 496 >> 2] & 1](i16 | 0) | 0) {
       HEAP32[i14 >> 2] = 0;
       i28 = 52;
      } else {
       if (__ZNK7WebCore16HTMLInputElement8multipleEv(HEAP32[i18 >> 2] | 0) | 0) {
        HEAP32[i14 >> 2] = i24;
        if ((i24 | 0) == 0) {
         i28 = 52;
         break;
        } else {
         i29 = i24;
         break;
        }
       }
       if (i24 >>> 0 > 1 >>> 0) {
        HEAP32[i14 >> 2] = 0;
        i28 = 52;
        break;
       } else {
        HEAP32[i14 >> 2] = 1;
        i29 = 1;
        break;
       }
      }
     } while (0);
     if ((i28 | 0) == 52) {
      HEAP32[i21 >> 2] = 0;
      i29 = 0;
     }
     __ZN7WebCore16HTMLInputElement25setCanReceiveDroppedFilesEb(HEAP32[i18 >> 2] | 0, (i29 | 0) != 0);
     i17 = 1;
     break L16;
    }
   } while (0);
   i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] | 0;
   _memset(i7 | 0, 0, 12) | 0;
   HEAP32[i7 + 12 >> 2] = 1;
   __ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE(i14, i7);
   i14 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i24 = i14 + 8 | 0;
     i16 = i24 | 0;
     i26 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i26;
     if ((i26 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
    }
   } while (0);
   i14 = i1 + 16 | 0;
   i24 = HEAP32[i14 >> 2] | 0;
   if ((i24 | 0) == 0) {
    HEAP32[i14 >> 2] = 0;
    i17 = 0;
    break;
   }
   __ZN7WebCore16HTMLInputElement25setCanReceiveDroppedFilesEb(i24, 0);
   i24 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i24 | 0) == 0) {
    i17 = 0;
    break;
   }
   i14 = i24 + 8 | 0;
   i24 = i14 | 0;
   i26 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   HEAP32[i24 >> 2] = i26;
   if ((i26 | 0) >= 1) {
    i17 = 0;
    break;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    i17 = 0;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
   i17 = 0;
  }
 } while (0);
 i1 = i11 + 4 | 0;
 i11 = i1 | 0;
 i7 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i11 >> 2] = i7;
  i12 = i17;
  STACKTOP = i5;
  return i12 | 0;
 }
 i7 = i1 - 4 | 0;
 if ((i7 | 0) == 0) {
  i12 = i17;
  STACKTOP = i5;
  return i12 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
 i12 = i17;
 STACKTOP = i5;
 return i12 | 0;
}
function __ZN7WebCore14DragController11performDragERNS_8DragDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 672 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 368 | 0;
 i8 = i3 + 552 | 0;
 i9 = i3 + 560 | 0;
 i10 = i1 | 0;
 i11 = __ZN7WebCore5Frame15documentAtPointERKNS_8IntPointE(HEAP32[(HEAP32[i10 >> 2] | 0) + 60 >> 2] | 0, i2 | 0) | 0;
 if ((i11 | 0) != 0) {
  i12 = i11 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = i1 + 8 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i11;
 do {
  if ((i13 | 0) != 0) {
   i11 = i13 + 8 | 0;
   i14 = i11 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i13 = i1 + 24 | 0;
 do {
  if ((HEAP32[i13 >> 2] & 1 | 0) != 0) {
   if ((HEAP8[i1 + 20 | 0] & 1) == 0) {
    break;
   }
   i11 = HEAP32[i1 + 4 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 3](i11, 1, i2);
   i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + 60 >> 2] | 0;
   i15 = i11 + 4 | 0;
   i14 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
   HEAP32[i15 >> 2] = i14;
   i16 = i11;
   do {
    if ((HEAP32[i11 + 452 >> 2] | 0) == 0) {
     i17 = i14;
    } else {
     __ZN7WebCore9Clipboard20createForDragAndDropENS_21ClipboardAccessPolicyERKNS_8DragDataE(i4, 4, i2);
     i18 = i4 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = 0;
     __ZN7WebCore9Clipboard18setSourceOperationENS_13DragOperationE(i19, HEAP32[i2 + 20 >> 2] | 0);
     i18 = HEAP32[i11 + 472 >> 2] | 0;
     i20 = __ZNK7WebCore8DragData16modifierKeyStateEv(i2) | 0;
     d21 = +__ZN3WTF11currentTimeEv();
     HEAP32[i5 >> 2] = 5;
     i22 = i5 + 4 | 0;
     HEAP32[i22 >> 2] = 0;
     HEAPF64[i5 + 8 >> 3] = d21;
     if ((i20 & 8 | 0) == 0) {
      i23 = 0;
     } else {
      HEAP32[i22 >> 2] = 8;
      i23 = 8;
     }
     if ((i20 & 2 | 0) == 0) {
      i24 = i23;
     } else {
      i25 = i23 | 2;
      HEAP32[i22 >> 2] = i25;
      i24 = i25;
     }
     if ((i20 & 1 | 0) == 0) {
      i26 = i24;
     } else {
      i25 = i24 | 1;
      HEAP32[i22 >> 2] = i25;
      i26 = i25;
     }
     if ((i20 & 4 | 0) != 0) {
      HEAP32[i22 >> 2] = i26 | 4;
     }
     i22 = i2;
     i20 = i5 + 16 | 0;
     i25 = HEAP32[i22 + 4 >> 2] | 0;
     HEAP32[i20 >> 2] = HEAP32[i22 >> 2];
     HEAP32[i20 + 4 >> 2] = i25;
     i25 = i2 + 8 | 0;
     i20 = i5 + 24 | 0;
     i22 = HEAP32[i25 + 4 >> 2] | 0;
     HEAP32[i20 >> 2] = HEAP32[i25 >> 2];
     HEAP32[i20 + 4 >> 2] = i22;
     HEAP32[i5 + 32 >> 2] = 0;
     HEAP32[i5 + 36 >> 2] = 0;
     HEAP32[i5 + 40 >> 2] = 0;
     i22 = __ZN7WebCore12EventHandler18performDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE(i18, i5, i19) | 0;
     __ZN7WebCore9Clipboard15setAccessPolicyENS_21ClipboardAccessPolicyE(i19, 0);
     do {
      if ((i19 | 0) != 0) {
       i18 = i19 | 0;
       i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       if ((i20 | 0) == 0) {
        __ZN7WebCore9ClipboardD1Ev(i19);
        __ZN3WTF8fastFreeEPv(i19);
        break;
       } else {
        HEAP32[i18 >> 2] = i20;
        break;
       }
      }
     } while (0);
     if (!i22) {
      i17 = HEAP32[i15 >> 2] | 0;
      break;
     }
     i19 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     do {
      if ((i19 | 0) != 0) {
       i20 = i19 + 8 | 0;
       i18 = i20 | 0;
       i25 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
       HEAP32[i18 >> 2] = i25;
       if ((i25 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
      }
     } while (0);
     i19 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i15 >> 2] = i19;
      i27 = 1;
      STACKTOP = i3;
      return i27 | 0;
     }
     if ((i11 | 0) == 0) {
      i27 = 1;
      STACKTOP = i3;
      return i27 | 0;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 3](i16);
     i27 = 1;
     STACKTOP = i3;
     return i27 | 0;
    }
   } while (0);
   i14 = i17 - 1 | 0;
   if ((i14 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 3](i16);
    break;
   } else {
    HEAP32[i15 >> 2] = i14;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i13 >> 2] & 2 | 0) != 0) {
   if (!(__ZN7WebCore14DragController16concludeEditDragERNS_8DragDataE(i1, i2) | 0)) {
    break;
   }
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   if ((i17 | 0) == 0) {
    i27 = 1;
    STACKTOP = i3;
    return i27 | 0;
   }
   i5 = i17 + 8 | 0;
   i17 = i5 | 0;
   i26 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i26;
   if ((i26 | 0) >= 1) {
    i27 = 1;
    STACKTOP = i3;
    return i27 | 0;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    i27 = 1;
    STACKTOP = i3;
    return i27 | 0;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
   i27 = 1;
   STACKTOP = i3;
   return i27 | 0;
  }
 } while (0);
 i13 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 do {
  if ((i13 | 0) != 0) {
   i12 = i13 + 8 | 0;
   i5 = i12 | 0;
   i26 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i26;
   if ((i26 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 if ((__ZN7WebCore14DragController16operationForLoadERNS_8DragDataE(i1, i2) | 0) == 0) {
  i27 = 0;
  STACKTOP = i3;
  return i27 | 0;
 }
 i13 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 3](i13, 4, i2);
 i13 = HEAP32[(HEAP32[i10 >> 2] | 0) + 60 >> 2] | 0;
 i10 = i13;
 __ZNK7WebCore8DragData5asURLEPNS_5FrameENS0_24FilenameConversionPolicyEPN3WTF6StringE(i8, i2, i10, 1, 0);
 __ZN7WebCore15ResourceRequestC2ERKN3WTF6StringE(i7, i8);
 _memset(i9 | 0, 0, 16) | 0;
 __ZN7WebCore3URL10invalidateEv(i9 + 12 | 0);
 i2 = i9 + 60 | 0;
 HEAP32[i2 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i2);
 HEAP8[i9 + 108 | 0] = 0;
 __ZN7WebCore16FrameLoadRequestC1EPNS_5FrameERKNS_15ResourceRequestERKNS_14SubstituteDataE(i6, i10, i7, i9);
 __ZN7WebCore11FrameLoader4loadERKNS_16FrameLoadRequestE(i13 + 80 | 0, i6);
 __ZN7WebCore14SubstituteDataD2Ev(i6 + 200 | 0);
 i13 = HEAP32[i6 + 192 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i10 = i13 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i6 + 8 | 0);
 i13 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i6 = i13 | 0;
   if (((tempValue = HEAP32[i6 >> 2] | 0, HEAP32[i6 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i13);
   __ZN3WTF8fastFreeEPv(i13);
  }
 } while (0);
 __ZN7WebCore14SubstituteDataD2Ev(i9);
 __ZN7WebCore15ResourceRequestD2Ev(i7);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i27 = 1;
  STACKTOP = i3;
  return i27 | 0;
 }
 i8 = i7 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  i27 = 1;
  STACKTOP = i3;
  return i27 | 0;
 } else {
  HEAP32[i8 >> 2] = i9;
  i27 = 1;
  STACKTOP = i3;
  return i27 | 0;
 }
 return 0;
}
function __ZN7WebCore14DragController11doImageDragERNS_7ElementERKNS_8IntPointERKNS_7IntRectERNS_9ClipboardERNS_5FrameERS3_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = i3;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = HEAP32[i18 + 4 >> 2] | 0;
 i18 = i2 + 12 | 0;
 i21 = (HEAP32[i18 >> 2] & 2048 | 0) == 0;
 i22 = i2 + 32 | 0;
 if (i21) {
  i23 = i22 | 0;
 } else {
  i23 = HEAP32[i22 >> 2] | 0;
 }
 if ((HEAP32[i23 >> 2] | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 if (i21) {
  i24 = i22 | 0;
 } else {
  i24 = HEAP32[i22 >> 2] | 0;
 }
 i21 = __ZNK7WebCore12RenderObject29shouldRespectImageOrientationEv(HEAP32[i24 >> 2] | 0) | 0;
 if ((HEAP32[i18 >> 2] & 2048 | 0) == 0) {
  i25 = i22 | 0;
 } else {
  i25 = HEAP32[i22 >> 2] | 0;
 }
 i24 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i24 | 0) == 0) {
   i26 = 26;
  } else {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 92 >> 2] & 1](i24) | 0)) {
    i26 = 26;
    break;
   }
   i25 = HEAP32[i24 + 104 >> 2] | 0;
   if ((i25 | 0) == 0) {
    i26 = 26;
    break;
   }
   i23 = HEAP32[i25 + 8 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i26 = 26;
    break;
   }
   if ((((HEAP32[i23 + 588 >> 2] | 0) >>> 11 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    i26 = 26;
    break;
   }
   i25 = __ZN7WebCore11CachedImage5imageEv(i23) | 0;
   if ((i25 | 0) == 0) {
    i26 = 26;
    break;
   }
   i23 = i25;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 48 >> 2] & 1](i9, i25);
   i2 = HEAP32[i9 + 4 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 48 >> 2] & 1](i10, i25);
   i23 = Math_imul(HEAP32[i10 >> 2] | 0, i2) | 0;
   if ((i23 | 0) > (HEAP32[__ZN7WebCore14DragController20MaxOriginalImageAreaE >> 2] | 0)) {
    i26 = 26;
    break;
   }
   if ((HEAP32[i18 >> 2] & 2048 | 0) == 0) {
    i27 = i22 | 0;
   } else {
    i27 = HEAP32[i22 >> 2] | 0;
   }
   if ((HEAP32[i27 >> 2] | 0) == 0) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i12 + 4 >> 2] = 1;
   } else {
    HEAP32[i11 >> 2] = i21;
    HEAP32[i11 + 4 >> 2] = 1;
   }
   i23 = __ZN7WebCore24createDragImageFromImageEPNS_5ImageENS_27ImageOrientationDescriptionE(i25, i12) | 0;
   if ((i23 | 0) == 0) {
    i26 = 26;
    break;
   }
   i25 = i4 + 8 | 0;
   i2 = HEAP32[i25 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i13 + 4 >> 2] = i2;
   i2 = __ZN7WebCore21fitDragImageToMaxSizeEPvRKNS_7IntSizeES3_(i23, i14, __ZN7WebCore14DragController16maxDragImageSizeEv() | 0) | 0;
   __ZN7WebCore13dragImageSizeEPv(i15, i2);
   d28 = +HEAPF32[(HEAP32[i1 >> 2] | 0) + 116 >> 2];
   HEAPF32[i16 >> 2] = d28;
   HEAPF32[i16 + 4 >> 2] = d28;
   i23 = __ZN7WebCore14scaleDragImageEPvNS_9FloatSizeE(i2, i16) | 0;
   i2 = __ZN7WebCore27dissolveDragImageToFractionEPvf(i23, +HEAPF32[__ZN7WebCore14DragController14DragImageAlphaE >> 2]) | 0;
   d28 = +(HEAP32[i15 >> 2] | 0) / +(HEAP32[i4 + 8 >> 2] | 0);
   i29 = i2;
   i30 = ~~(d28 * +((HEAP32[i4 >> 2] | 0) - i19 | 0) + +.5);
   i31 = ~~(d28 * (+(HEAP32[i4 + 4 >> 2] | 0) - +(i20 | 0)) + +.5);
  }
 } while (0);
 do {
  if ((i26 | 0) == 26) {
   if ((HEAP32[i18 >> 2] & 2048 | 0) == 0) {
    i32 = i22 | 0;
   } else {
    i32 = HEAP32[i22 >> 2] | 0;
   }
   i4 = HEAP32[i32 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i29 = 0;
    i30 = 0;
    i31 = 0;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 92 >> 2] & 1](i4) | 0)) {
    i29 = 0;
    i30 = 0;
    i31 = 0;
    break;
   }
   i15 = HEAP32[i4 + 104 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i29 = 0;
    i30 = 0;
    i31 = 0;
    break;
   }
   i4 = HEAP32[i15 + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i29 = 0;
    i30 = 0;
    i31 = 0;
    break;
   }
   i15 = __ZN7WebCore41createDragImageIconForCachedImageFilenameERKN3WTF6StringE(__ZNK7WebCore20ResourceResponseBase17suggestedFilenameEv(i4 + 272 | 0) | 0) | 0;
   if ((i15 | 0) == 0) {
    i29 = 0;
    i30 = 0;
    i31 = 0;
    break;
   }
   i4 = HEAP32[__ZN7WebCore14DragController18DragIconRightInsetE >> 2] | 0;
   __ZN7WebCore13dragImageSizeEPv(i17, i15);
   i29 = i15;
   i30 = i4 - (HEAP32[i17 >> 2] | 0) | 0;
   i31 = HEAP32[__ZN7WebCore14DragController19DragIconBottomInsetE >> 2] | 0;
  }
 } while (0);
 i17 = i7;
 HEAP32[i17 >> 2] = i30 + i19;
 HEAP32[i17 + 4 >> 2] = i31 + i20;
 __ZN7WebCore14DragController12doSystemDragEPvRKNS_8IntPointES4_RNS_9ClipboardERNS_5FrameEb(i1, i29, i7, i3, i5, i6, 0);
 __ZN7WebCore15deleteDragImageEPv(i29);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore14DragController12tryDHTMLDragERNS_8DragDataERNS_13DragOperationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i8 = i7 + 4 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i9 = i7;
 i10 = HEAP32[i7 + 452 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = 0;
  } else {
   i12 = i10 + 4 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i12 = __ZNK7WebCore14SecurityOrigin7isLocalEv(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 100 >> 2] | 0) | 0;
   __ZN7WebCore9Clipboard20createForDragAndDropENS_21ClipboardAccessPolicyERKNS_8DragDataE(i5, i12 ? 4 : 3, i2);
   i12 = i5 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i12 = HEAP32[i2 + 20 >> 2] | 0;
   __ZN7WebCore9Clipboard18setSourceOperationENS_13DragOperationE(i13, i12);
   i14 = __ZNK7WebCore8DragData16modifierKeyStateEv(i2) | 0;
   d15 = +__ZN3WTF11currentTimeEv();
   HEAP32[i6 >> 2] = 5;
   i16 = i6 + 4 | 0;
   HEAP32[i16 >> 2] = 0;
   HEAPF64[i6 + 8 >> 3] = d15;
   if ((i14 & 8 | 0) == 0) {
    i17 = 0;
   } else {
    HEAP32[i16 >> 2] = 8;
    i17 = 8;
   }
   if ((i14 & 2 | 0) == 0) {
    i18 = i17;
   } else {
    i19 = i17 | 2;
    HEAP32[i16 >> 2] = i19;
    i18 = i19;
   }
   if ((i14 & 1 | 0) == 0) {
    i20 = i18;
   } else {
    i19 = i18 | 1;
    HEAP32[i16 >> 2] = i19;
    i20 = i19;
   }
   if ((i14 & 4 | 0) != 0) {
    HEAP32[i16 >> 2] = i20 | 4;
   }
   i16 = i2;
   i14 = i6 + 16 | 0;
   i19 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i14 + 4 >> 2] = i19;
   i19 = i2 + 8 | 0;
   i14 = i6 + 24 | 0;
   i16 = HEAP32[i19 + 4 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i19 >> 2];
   HEAP32[i14 + 4 >> 2] = i16;
   HEAP32[i6 + 32 >> 2] = 0;
   HEAP32[i6 + 36 >> 2] = 0;
   HEAP32[i6 + 40 >> 2] = 0;
   if (__ZN7WebCore12EventHandler17updateDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE(HEAP32[i7 + 472 >> 2] | 0, i6, i13) | 0) {
    HEAP32[i3 >> 2] = __ZNK7WebCore9Clipboard20destinationOperationEv(i13) | 0;
    do {
     if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i13 + 16 >> 2] | 0, H_BASE + 16 | 0) | 0) {
      do {
       if ((i12 | 0) == 0) {
        i21 = 0;
       } else if ((i12 | 0) == (-1 | 0)) {
        i21 = 1;
       } else {
        if ((i12 & 20 | 0) != 0) {
         i21 = 16;
         break;
        }
        if ((i12 & 1 | 0) != 0) {
         i21 = 1;
         break;
        }
        i21 = (i12 & 2 ^ 2) + 2 | 0;
       }
      } while (0);
      HEAP32[i3 >> 2] = i21;
     } else {
      if ((HEAP32[i3 >> 2] & i12 | 0) != 0) {
       break;
      }
      HEAP32[i3 >> 2] = 0;
     }
    } while (0);
    __ZN7WebCore9Clipboard15setAccessPolicyENS_21ClipboardAccessPolicyE(i13, 0);
    i22 = 1;
   } else {
    __ZN7WebCore9Clipboard15setAccessPolicyENS_21ClipboardAccessPolicyE(i13, 0);
    i22 = 0;
   }
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 | 0;
     i16 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) == 0) {
      __ZN7WebCore9ClipboardD1Ev(i13);
      __ZN3WTF8fastFreeEPv(i13);
      break;
     } else {
      HEAP32[i12 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i13 = i10 + 4 | 0;
   i16 = i13 | 0;
   i12 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i16 >> 2] = i12;
    i11 = i22;
    break;
   }
   i12 = i13 - 4 | 0;
   if ((i12 | 0) == 0) {
    i11 = i22;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 3](i12);
   i11 = i22;
  }
 } while (0);
 i22 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i22 | 0) != 0) {
  HEAP32[i8 >> 2] = i22;
  STACKTOP = i4;
  return i11 | 0;
 }
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return i11 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i9);
 STACKTOP = i4;
 return i11 | 0;
}
function __ZNK7WebCore14DragController16draggableElementEPKNS_5FrameEPNS_7ElementERKNS_8IntPointERNS_9DragStateE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i2 + 468 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = __ZN7WebCore14FrameSelection8containsERKNS_11LayoutPointE(i8, i7) | 0;
 i7 = i4 ? 8 : 0;
 i4 = i5 + 8 | 0;
 HEAP32[i4 >> 2] = i7;
 if ((i3 | 0) == 0) {
  i9 = 0;
  STACKTOP = i6;
  return i9 | 0;
 }
 i5 = i3 + 32 | 0;
 if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
  i10 = i5 | 0;
 } else {
  i10 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i11 = i7;
  } else {
   i10 = i1 + 28 | 0;
   i8 = i2 + 36 | 0;
   i12 = i5;
   L10 : while (1) {
    i13 = i12 + 20 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i14 & 128 | 0) == 0) {
      i15 = HEAP32[i12 + 4 >> 2] | 0;
      if ((i15 | 0) == 0) {
       i16 = i14;
       i17 = 12;
       break;
      }
      if ((HEAP32[i15 + 12 >> 2] & 1048580 | 0) != 1048580) {
       i16 = i14;
       i17 = 12;
       break;
      }
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 232 >> 2] & 1](i15) | 0) != 0) {
       break;
      }
      i16 = HEAP32[i13 >> 2] | 0;
      i17 = 12;
     } else {
      i16 = i14;
      i17 = 12;
     }
    } while (0);
    do {
     if ((i17 | 0) == 12) {
      i17 = 0;
      if ((i16 & 128 | 0) != 0) {
       break;
      }
      i14 = HEAP32[i12 + 4 >> 2] | 0;
      i18 = i14;
      if ((i14 | 0) == 0) {
       break;
      }
      i13 = (HEAP32[(HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] | 0) >>> 23 & 3;
      i15 = HEAP32[i10 >> 2] | 0;
      if ((i15 & 1 | 0) != 0 & (i13 | 0) == 2) {
       i17 = 15;
       break L10;
      }
      if ((i13 | 0) != 0) {
       break;
      }
      do {
       if ((i15 & 2 | 0) != 0) {
        if ((HEAP32[i14 + 12 >> 2] & 16 | 0) == 0) {
         break;
        }
        if ((HEAP32[(HEAP32[i14 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
         break;
        }
        if ((HEAP8[(HEAP32[i8 >> 2] | 0) + 194 | 0] & 32) != 0) {
         i17 = 21;
         break L10;
        }
       }
      } while (0);
      if ((i15 & 4 | 0) == 0) {
       break;
      }
      if ((HEAP32[i14 + 12 >> 2] & 16 | 0) == 0) {
       break;
      }
      if ((HEAP32[(HEAP32[i14 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
       break;
      }
      if (__ZNK7WebCore17HTMLAnchorElement10isLiveLinkEv(i14) | 0) {
       i17 = 26;
       break L10;
      }
     }
    } while (0);
    i13 = HEAP32[i12 + 8 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i17 = 28;
     break;
    } else {
     i12 = i13;
    }
   }
   if ((i17 | 0) == 15) {
    HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | 1;
    i9 = i18;
    STACKTOP = i6;
    return i9 | 0;
   } else if ((i17 | 0) == 21) {
    HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | 2;
    i9 = i18;
    STACKTOP = i6;
    return i9 | 0;
   } else if ((i17 | 0) == 26) {
    HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | 4;
    i9 = i18;
    STACKTOP = i6;
    return i9 | 0;
   } else if ((i17 | 0) == 28) {
    i11 = HEAP32[i4 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i9 = (i11 & 8 | 0) != 0 ? i3 : 0;
 STACKTOP = i6;
 return i9 | 0;
}
function __ZN7WebCore14DragController14canProcessDragERNS_8DragDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 120 | 0;
 i7 = i3 + 128 | 0;
 i8 = i3 + 240 | 0;
 i9 = i3 + 248 | 0;
 if (!(__ZNK7WebCore8DragData25containsCompatibleContentEv(i2) | 0)) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i11 = i1 | 0;
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i4, HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 60 >> 2] | 0) + 452 >> 2] | 0, i2 | 0);
 i12 = i4 | 0;
 HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
 i13 = i4 + 4 | 0;
 HEAP32[i6 + 4 >> 2] = HEAP32[i13 >> 2];
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i5, i6);
 L4 : do {
  if ((__ZNK7WebCore5Frame15contentRendererEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 60 >> 2] | 0) | 0) == 0) {
   i14 = 0;
  } else {
   i6 = HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 60 >> 2] | 0) + 472 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i9 >> 2] = 0;
   HEAP32[i9 + 4 >> 2] = 0;
   __ZN7WebCore12EventHandler20hitTestResultAtPointERKNS_11LayoutPointEjRKNS_10LayoutSizeE(i7, i6, i8, 6, i9);
   __ZN7WebCore13HitTestResultaSERKS0_(i5, i7) | 0;
   __ZN7WebCore13HitTestResultD1Ev(i7);
   i6 = i5 + 76 | 0;
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    i14 = 0;
    break;
   }
   do {
    if (__ZNK7WebCore8DragData13containsFilesEv(i2) | 0) {
     i4 = HEAP32[i6 >> 2] | 0;
     i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 208 >> 2] & 1](i4) | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     if (__ZNK7WebCore16HTMLInputElement12isTextButtonEv(i15) | 0) {
      i4 = HEAP32[(HEAP32[i15 + 20 >> 2] | 0) + 4 >> 2] | 0;
      do {
       if ((HEAP32[i4 + 12 >> 2] & 4096 | 0) == 0) {
        i16 = i15;
       } else {
        if ((HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i4 | 0)) {
         i16 = i15;
         break;
        }
        i17 = HEAP32[i4 + 92 >> 2] | 0;
        i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 208 >> 2] & 1](i17 | 0) | 0;
       }
      } while (0);
      if ((i16 | 0) == 0) {
       break;
      } else {
       i18 = i16;
      }
     } else {
      i18 = i15;
     }
     if (!((i18 | 0) == 0 | (__ZNK7WebCore16HTMLInputElement12isFileUploadEv(i18) | 0) ^ 1)) {
      i14 = 1;
      break L4;
     }
    }
   } while (0);
   i4 = HEAP32[i6 >> 2] | 0;
   i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 124 >> 2] & 1](i4) | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   do {
    if (i17) {
     if (__ZNK7WebCore17HTMLPlugInElement14canProcessDragEv(i4) | 0) {
      break;
     }
     if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(HEAP32[i6 >> 2] | 0, 0, 1) | 0)) {
      i14 = 0;
      break L4;
     }
    } else {
     if (!(__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i4, 0, 1) | 0)) {
      i14 = 0;
      break L4;
     }
    }
   } while (0);
   do {
    if ((HEAP8[i1 + 32 | 0] & 1) != 0) {
     if ((HEAP32[i1 + 8 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
      break;
     }
     if (__ZNK7WebCore13HitTestResult10isSelectedEv(i5) | 0) {
      i14 = 0;
      break L4;
     }
    }
   } while (0);
   i14 = 1;
  }
 } while (0);
 __ZN7WebCore13HitTestResultD1Ev(i5);
 i10 = i14;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN7WebCore14DragController10dragExitedERNS_8DragDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] | 0) + 452 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 + 4 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i9 = 4;
   } else {
    i10 = __ZNK7WebCore14SecurityOrigin7isLocalEv(HEAP32[i8 + 100 >> 2] | 0) | 0;
    i9 = i10 ? 4 : 3;
   }
   __ZN7WebCore9Clipboard20createForDragAndDropENS_21ClipboardAccessPolicyERKNS_8DragDataE(i4, i9, i2);
   i10 = i4 | 0;
   i8 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   __ZN7WebCore9Clipboard18setSourceOperationENS_13DragOperationE(i8, HEAP32[i2 + 20 >> 2] | 0);
   i10 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] | 0) + 472 >> 2] | 0;
   i11 = __ZNK7WebCore8DragData16modifierKeyStateEv(i2) | 0;
   d12 = +__ZN3WTF11currentTimeEv();
   HEAP32[i5 >> 2] = 5;
   i13 = i5 + 4 | 0;
   HEAP32[i13 >> 2] = 0;
   HEAPF64[i5 + 8 >> 3] = d12;
   if ((i11 & 8 | 0) == 0) {
    i14 = 0;
   } else {
    HEAP32[i13 >> 2] = 8;
    i14 = 8;
   }
   if ((i11 & 2 | 0) == 0) {
    i15 = i14;
   } else {
    i16 = i14 | 2;
    HEAP32[i13 >> 2] = i16;
    i15 = i16;
   }
   if ((i11 & 1 | 0) == 0) {
    i17 = i15;
   } else {
    i16 = i15 | 1;
    HEAP32[i13 >> 2] = i16;
    i17 = i16;
   }
   if ((i11 & 4 | 0) != 0) {
    HEAP32[i13 >> 2] = i17 | 4;
   }
   i13 = i2;
   i11 = i5 + 16 | 0;
   i16 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i11 + 4 >> 2] = i16;
   i16 = i2 + 8 | 0;
   i11 = i5 + 24 | 0;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i11 + 4 >> 2] = i13;
   HEAP32[i5 + 32 >> 2] = 0;
   HEAP32[i5 + 36 >> 2] = 0;
   HEAP32[i5 + 40 >> 2] = 0;
   __ZN7WebCore12EventHandler17cancelDragAndDropERKNS_18PlatformMouseEventEPNS_9ClipboardE(i10, i5, i8);
   __ZN7WebCore9Clipboard15setAccessPolicyENS_21ClipboardAccessPolicyE(i8, 0);
   do {
    if ((i8 | 0) != 0) {
     i10 = i8 | 0;
     i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN7WebCore9ClipboardD1Ev(i8);
      __ZN3WTF8fastFreeEPv(i8);
      break;
     } else {
      HEAP32[i10 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i8 = i7 + 4 | 0;
   i13 = i8 | 0;
   i10 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i13 >> 2] = i10;
    break;
   }
   i10 = i8 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 3](i10);
  }
 } while (0);
 __ZN7WebCore14DragController22mouseMovedIntoDocumentEPNS_8DocumentE(i1, 0);
 i7 = i1 + 16 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  HEAP32[i7 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore16HTMLInputElement25setCanReceiveDroppedFilesEb(i1, 0);
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 8 | 0;
 i1 = i7 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14DragController25dispatchTextInputEventForEPNS_5FrameERNS_8DragDataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 72 | 0;
 i8 = i4 + 80 | 0;
 i9 = i4 + 88 | 0;
 i10 = i4 + 96 | 0;
 i11 = i1 | 0;
 do {
  if (__ZNK7WebCore19DragCaretController23isContentRichlyEditableEv(HEAP32[(HEAP32[i11 >> 2] | 0) + 24 >> 2] | 0) | 0) {
   i1 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i5 >> 2] = i1;
   if ((i1 | 0) == 0) {
    break;
   }
   i12 = i1 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  } else {
   __ZNK7WebCore8DragData11asPlainTextEPNS_5FrameE(i5, i3, i2);
  }
 } while (0);
 i3 = HEAP32[i2 + 464 >> 2] | 0;
 __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i6, (HEAP32[(HEAP32[i11 >> 2] | 0) + 24 >> 2] | 0) + 24 | 0, 0);
 i11 = __ZNK7WebCore6Editor19findEventTargetFromERKNS_16VisibleSelectionE(i3, i6) | 0;
 __ZN7WebCore16VisibleSelectionD2Ev(i6);
 i6 = HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 336 >> 2] | 0;
 i2 = i9 | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i3 = i6 + 36 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN7WebCore9TextEvent13createForDropEN3WTF10PassRefPtrINS_9DOMWindowEEERKNS1_6StringE(i8, i9, i5);
 i9 = i7 | 0;
 i3 = i8 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i9 >> 2] = i8;
 i8 = i10 | 0;
 HEAP32[i8 >> 2] = 0;
 i10 = __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEERi(i11 | 0, i7, i8) | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 + 8 | 0;
   i7 = i9 | 0;
   i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i7 >> 2] = i11;
    break;
   }
   i11 = i9 - 8 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 3](i11);
  }
 } while (0);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 8 | 0;
   i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
    break;
   } else {
    HEAP32[i3 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 + 36 | 0;
   i11 = i2 | 0;
   i3 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i11 >> 2] = i3;
    break;
   }
   i3 = i2 - 36 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 3](i3);
  }
 } while (0);
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return i10 | 0;
 }
 i5 = i8 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i4;
  return i10 | 0;
 } else {
  HEAP32[i5 >> 2] = i3;
  STACKTOP = i4;
  return i10 | 0;
 }
 return 0;
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
function __ZN7WebCore14DragController12doSystemDragEPvRKNS_8IntPointES4_RNS_9ClipboardERNS_5FrameEb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 HEAP8[i1 + 32 | 0] = 1;
 i13 = HEAP32[i6 + 456 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i14 = i13 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 i14 = i1 + 12 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = i13;
 do {
  if ((i15 | 0) != 0) {
   i13 = i15 + 8 | 0;
   i14 = i13 | 0;
   i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 i15 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i13 = i15 + 4 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 i16 = i15;
 i14 = HEAP32[i15 + 452 >> 2] | 0;
 i17 = (i14 | 0) != 0;
 if (i17) {
  i18 = i14 + 4 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 }
 i18 = HEAP32[i1 + 4 >> 2] | 0;
 i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] | 0;
 i20 = i14 | 0;
 i21 = i6 + 452 | 0;
 __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i10, HEAP32[i21 >> 2] | 0, i3);
 __ZNK7WebCore10ScrollView18rootViewToContentsERKNS_8IntPointE(i9, i20, i10);
 __ZNK7WebCore10ScrollView18contentsToRootViewERKNS_8IntPointE(i12, HEAP32[i21 >> 2] | 0, i4);
 __ZNK7WebCore10ScrollView18rootViewToContentsERKNS_8IntPointE(i11, i20, i12);
 FUNCTION_TABLE_viiiiiii[i19 & 1](i18, i2, i9, i11, i5, i16, i7);
 if ((HEAP32[i15 + 32 >> 2] | 0) != 0) {
  __ZN7WebCore14DragController22cleanupAfterSystemDragEv(i1);
 }
 do {
  if (i17) {
   i1 = i14 + 4 | 0;
   i7 = i1 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i7 >> 2] = i5;
    break;
   }
   i5 = i1 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
  }
 } while (0);
 i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i13 >> 2] = i14;
  STACKTOP = i8;
  return;
 }
 if ((i15 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 3](i16);
 STACKTOP = i8;
 return;
}
function __ZN7WebCoreL23setSelectionToDragCaretEPNS_5FrameERNS_16VisibleSelectionERN3WTF6RefPtrINS_5RangeEEERKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i6 = i5 | 0;
 i7 = i5 + 64 | 0;
 i8 = i5 + 80 | 0;
 i9 = i1 + 468 | 0;
 __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(HEAP32[i9 >> 2] | 0, i2, 6, 0, 0);
 do {
  if ((HEAP32[(HEAP32[i9 >> 2] | 0) + 84 >> 2] | 0) == 0) {
   __ZN7WebCore5Frame23visiblePositionForPointERKNS_8IntPointE(i7, i1, i4);
   __ZN7WebCore16VisibleSelectionC1ERKNS_15VisiblePositionEb(i6, i7, 0);
   __ZN7WebCore16VisibleSelectionaSEOS0_(i2, i6) | 0;
   __ZN7WebCore16VisibleSelectionD2Ev(i6);
   i10 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 + 8 | 0;
     i12 = i11 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     HEAP32[i12 >> 2] = i13;
     if ((i13 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore14FrameSelection12setSelectionERKNS_16VisibleSelectionEjNS0_19CursorAlignOnScrollENS_15TextGranularityE(HEAP32[i9 >> 2] | 0, i2, 6, 0, 0);
   __ZNK7WebCore16VisibleSelection17toNormalizedRangeEv(i8, i2);
   i10 = i8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i13 = i3 | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i11;
   do {
    if ((i12 | 0) != 0) {
     i11 = i12 | 0;
     i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN7WebCore5RangeD1Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
      break;
     } else {
      HEAP32[i11 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = i12 | 0;
   i11 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore5RangeD1Ev(i12);
    __ZN3WTF8fastFreeEPv(i12);
    break;
   } else {
    HEAP32[i13 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i3 + 84 >> 2] | 0) == 0) {
  i14 = 0;
  STACKTOP = i5;
  return i14 | 0;
 }
 i14 = __ZNK7WebCore16VisibleSelection17isContentEditableEv(i3 + 32 | 0) | 0;
 STACKTOP = i5;
 return i14 | 0;
}
function __ZN7WebCore15ResourceRequestC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i5, 0, i2);
 i2 = i5 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP8[i5 + 4 | 0] | 0;
 i6 = i1 + 4 | 0;
 HEAP8[i6] = HEAP8[i6] & -4 | i7 & 1 | i7 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i5 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i5 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i5 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i5 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i5 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i5 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i5 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i5 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = 0;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i5 = i1 + 64 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 HEAP32[i4 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i4);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19ResourceRequestBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 116 | 0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore14DragController20dragEnteredOrUpdatedERNS_8DragDataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 | 0;
 __ZN7WebCore14DragController22mouseMovedIntoDocumentEPNS_8DocumentE(i2, __ZN7WebCore5Frame15documentAtPointERKNS_8IntPointE(HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] | 0, i3 | 0) | 0);
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 i9 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 1](i8, i3) | 0;
 i8 = i2 + 24 | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i6 | 0;
  HEAP32[i10 >> 2] = 0;
  HEAP8[i6 + 4 | 0] = 0;
  HEAP32[i6 + 8 >> 2] = 0;
  i11 = __ZN7WebCore14DragController15tryDocumentDragERNS_8DragDataENS_21DragDestinationActionERNS_11DragSessionE(i2, i3, i9, i6) | 0;
  HEAP8[i2 + 20 | 0] = i11 & 1;
  do {
   if (!i11) {
    if ((HEAP32[i8 >> 2] & 4 | 0) == 0) {
     break;
    }
    HEAP32[i10 >> 2] = __ZN7WebCore14DragController16operationForLoadERNS_8DragDataE(i2, i3) | 0;
   }
  } while (0);
  i3 = i1;
  i2 = i6;
  HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i3 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i3 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[(HEAP32[i7 >> 2] | 0) + 24 >> 2] | 0;
 _memset(i5 | 0, 0, 12) | 0;
 HEAP32[i5 + 12 >> 2] = 1;
 __ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE(i2, i5);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i7 = i5 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL17elementUnderMouseEPNS_8DocumentERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = HEAP32[i1 + 332 >> 2] | 0;
 if ((i8 | 0) == 0) {
  d9 = +1;
 } else {
  d9 = +HEAPF32[i8 + 480 >> 2];
 }
 d10 = +(i3 | 0) * d9;
 d11 = +_round(+(+(i2 | 0) * d9));
 do {
  if (d11 < +2147483647) {
   if (d11 <= +-2147483648) {
    i12 = -2147483648;
    break;
   }
   i12 = ~~d11;
  } else {
   i12 = 2147483647;
  }
 } while (0);
 d11 = +_round(+d10);
 do {
  if (d11 < +2147483647) {
   if (d11 <= +-2147483648) {
    i13 = -2147483648;
    break;
   }
   i13 = ~~d11;
  } else {
   i13 = 2147483647;
  }
 } while (0);
 HEAP32[i5 >> 2] = i12;
 HEAP32[i5 + 4 >> 2] = i13;
 HEAP32[i6 >> 2] = 262;
 __ZN7WebCore13HitTestResultC1ERKNS_11LayoutPointE(i7, i5);
 __ZN7WebCore10RenderView7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(HEAP32[i1 + 1584 >> 2] | 0, i6, i7) | 0;
 i6 = HEAP32[i7 + 72 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i14 = 0;
  __ZN7WebCore13HitTestResultD1Ev(i7);
  STACKTOP = i4;
  return i14 | 0;
 } else {
  i15 = i6;
 }
 while (1) {
  if ((HEAP32[i15 + 12 >> 2] & 4 | 0) != 0) {
   break;
  }
  i6 = HEAP32[i15 + 16 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i14 = 0;
   i16 = 15;
   break;
  } else {
   i15 = i6 | 0;
  }
 }
 if ((i16 | 0) == 15) {
  __ZN7WebCore13HitTestResultD1Ev(i7);
  STACKTOP = i4;
  return i14 | 0;
 }
 i14 = __ZNK7WebCore4Node28deprecatedShadowAncestorNodeEv(i15) | 0;
 __ZN7WebCore13HitTestResultD1Ev(i7);
 STACKTOP = i4;
 return i14 | 0;
}
function __ZN7WebCore14DragControllerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[HEAP32[i2 >> 2] >> 2] & 3](i2);
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 8 | 0;
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore14DragControllerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[HEAP32[i2 >> 2] >> 2] & 3](i2);
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 8 | 0;
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN7WebCore14SubstituteDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12SharedBufferD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore14DragController22mouseMovedIntoDocumentEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 do {
  if ((i6 | 0) != 0) {
   i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] | 0;
   _memset(i4 | 0, 0, 12) | 0;
   HEAP32[i4 + 12 >> 2] = 1;
   __ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE(i7, i4);
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i7 + 8 | 0;
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
 if ((i2 | 0) != 0) {
  i4 = i2 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 + 8 | 0;
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i5 | 0) >= 1) {
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
function __ZN7WebCore15ResourceRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 172 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 168 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 164 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
}
function __ZN7WebCore14DragController14placeDragCaretERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 __ZN7WebCore14DragController22mouseMovedIntoDocumentEPNS_8DocumentE(i1, __ZN7WebCore5Frame15documentAtPointERKNS_8IntPointE(HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] | 0, i2) | 0);
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i7 + 332 >> 2] | 0;
 i7 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i4, i7 | 0, i2);
 i2 = HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] | 0;
 __ZN7WebCore5Frame23visiblePositionForPointERKNS_8IntPointE(i5, i1, i4);
 __ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE(i2, i5);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i2 + 8 | 0;
 i2 = i5 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14DragController9dragEndedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i6 = i4 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 HEAP8[i1 + 32 | 0] = 0;
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] | 0;
 _memset(i3 | 0, 0, 12) | 0;
 HEAP32[i3 + 12 >> 2] = 1;
 __ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE(i5, i3);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 8 | 0;
   i4 = i3 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 3](i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14DragController16operationForLoadERNS_8DragDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = __ZN7WebCore5Frame15documentAtPointERKNS_8IntPointE(HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0, i2 | 0) | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 1576 | 0;
   do {
    if ((HEAP8[i4] & 8) == 0) {
     i5 = 0;
    } else {
     i6 = __ZN7WebCore14PluginDocument12pluginWidgetEv(i3) | 0;
     if ((i6 | 0) == 0) {
      i5 = 0;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 1](i6) | 0)) {
      i5 = 0;
      break;
     }
     i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 148 >> 2] & 1](i6) | 0;
    }
   } while (0);
   if ((HEAP8[i1 + 32 | 0] & 1) != 0) {
    i7 = 0;
    return i7 | 0;
   }
   if (!((HEAP8[i4] & 8) == 0 | i5)) {
    i7 = 0;
    return i7 | 0;
   }
   if (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i3 | 0, 0, 1) | 0) {
    i7 = 0;
   } else {
    break;
   }
   return i7 | 0;
  }
 } while (0);
 i7 = __ZN7WebCore14DragController13dragOperationERNS_8DragDataE(i1, i2) | 0;
 return i7 | 0;
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore14DragController10cancelDragEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] | 0;
 _memset(i3 | 0, 0, 12) | 0;
 HEAP32[i3 + 12 >> 2] = 1;
 __ZN7WebCore19DragCaretController16setCaretPositionERKNS_15VisiblePositionE(i4, i3);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i4 + 8 | 0;
 i4 = i3 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i1;
 if ((i1 | 0) >= 1) {
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
function __ZN7WebCore14DragController10dragIsMoveERNS_14FrameSelectionERNS_8DragDataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(__ZNK7WebCore16VisibleSelection17isContentEditableEv(i2 + 32 | 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 + 84 >> 2] | 0) != 2) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (__ZN7WebCore14DragController13isCopyKeyDownERNS_8DragDataE(i1, i3) | 0) ^ 1;
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
function __ZN7WebCore14DragControllerC2ERNS_4PageERNS_10DragClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP8[i1 + 32 | 0] = 0;
 _memset(i1 + 8 | 0, 0, 13) | 0;
 _memset(i1 + 36 | 0, 0, 16) | 0;
 __ZN7WebCore3URL10invalidateEv(i1 + 48 | 0);
 return;
}
function __ZN7WebCore14DragControllerC1ERNS_4PageERNS_10DragClientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i3;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP8[i1 + 32 | 0] = 0;
 _memset(i1 + 8 | 0, 0, 13) | 0;
 _memset(i1 + 36 | 0, 0, 16) | 0;
 __ZN7WebCore3URL10invalidateEv(i1 + 48 | 0);
 return;
}
function __ZN7WebCore14DragController24delegateDragSourceActionERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 1](i3, i2) | 0;
 HEAP32[i1 + 28 >> 2] = i4;
 return i4 | 0;
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore14DragController11dragUpdatedERNS_8DragDataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14DragController20dragEnteredOrUpdatedERNS_8DragDataE(i1, i2, i3);
 return;
}
function __ZN7WebCore14DragController11dragEnteredERNS_8DragDataE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14DragController20dragEnteredOrUpdatedERNS_8DragDataE(i1, i2, i3);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function b4(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(4);
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
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
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
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
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
function b5() {
 abort(5);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viii = [b0,b0,__ZN7WebCore14DragControllerC2ERNS_4PageERNS_10DragClientE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore14DragControllerD2Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viiiiiii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viii: dynCall_viii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viii": invoke_viii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore14DragController19LinkDragBorderInsetE": __ZN7WebCore14DragController19LinkDragBorderInsetE, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore14DragController18DragIconRightInsetE": __ZN7WebCore14DragController18DragIconRightInsetE, "__ZN7WebCore14DragController14DragImageAlphaE": __ZN7WebCore14DragController14DragImageAlphaE, "__ZN7WebCore14DragController20MaxOriginalImageAreaE": __ZN7WebCore14DragController20MaxOriginalImageAreaE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE, "__ZN7WebCore14DragController19DragIconBottomInsetE": __ZN7WebCore14DragController19DragIconBottomInsetE, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore14DragController9startDragERNS_5FrameERKNS_9DragStateENS_13DragOperationERKNS_18PlatformMouseEventERKNS_8IntPointE","__ZN7WebCore14DragController10dragIsMoveERNS_14FrameSelectionERNS_8DragDataE","__ZN7WebCore14DragController24delegateDragSourceActionERKNS_8IntPointE","__ZN7WebCore14DragController14canProcessDragERNS_8DragDataE","__ZN7WebCore14DragController16operationForLoadERNS_8DragDataE","__ZN7WebCore14DragControllerD2Ev","__ZN7WebCore14DragController20dragEnteredOrUpdatedERNS_8DragDataE","__ZN7WebCore14DragController22mouseMovedIntoDocumentEPNS_8DocumentE","__ZN7WebCore14DragController11performDragERNS_8DragDataE","_memset","__ZN7WebCore14DragController16concludeEditDragERNS_8DragDataE","__ZN7WebCore14DragController11dragEnteredERNS_8DragDataE","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore14DragController11dragUpdatedERNS_8DragDataE","__ZN7WebCore14SubstituteDataD2Ev","__ZN7WebCore15ResourceRequestC2ERKN3WTF6StringE","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCoreL17elementUnderMouseEPNS_8DocumentERKNS_8IntPointE","__ZN7WebCore14DragController9dragEndedEv","__ZN7WebCore16VisibleSelectionaSEOS0_","__ZN7WebCore14DragController11doImageDragERNS_7ElementERKNS_8IntPointERKNS_7IntRectERNS_9ClipboardERNS_5FrameERS3_","__ZN7WebCore14DragController10cancelDragEv","__ZNK7WebCore14DragController16draggableElementEPKNS_5FrameEPNS_7ElementERKNS_8IntPointERNS_9DragStateE","__ZN7WebCore14DragController10dragExitedERNS_8DragDataE","__ZN7WebCore14DragController12tryDHTMLDragERNS_8DragDataERNS_13DragOperationE","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore14DragControllerC2ERNS_4PageERNS_10DragClientE","__ZN7WebCoreL23setSelectionToDragCaretEPNS_5FrameERNS_16VisibleSelectionERN3WTF6RefPtrINS_5RangeEEERKNS_8IntPointE","_memcpy","__ZN7WebCore14DragController12doSystemDragEPvRKNS_8IntPointES4_RNS_9ClipboardERNS_5FrameEb","__ZN7WebCore14DragController15tryDocumentDragERNS_8DragDataENS_21DragDestinationActionERNS_11DragSessionE","__ZN7WebCore14DragController14placeDragCaretERKNS_8IntPointE","__ZN7WebCore14DragController25dispatchTextInputEventForEPNS_5FrameERNS_8DragDataE"]

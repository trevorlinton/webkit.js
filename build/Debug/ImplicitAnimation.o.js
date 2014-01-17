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
H_BASE = parentModule["_malloc"](88 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 88;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17ImplicitAnimationC1ERKNS_9AnimationENS_13CSSPropertyIDEPNS_13RenderElementEPNS_18CompositeAnimationEPNS_11RenderStyleE;
var __ZN7WebCore17ImplicitAnimationD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vid(index,a1,a2) {
  try {
    Module["dynCall_vid"](index,a1,a2);
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
function invoke_iid(index,a1,a2) {
  try {
    return Module["dynCall_iid"](index,a1,a2);
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZTVN7WebCore13AnimationBaseE=env.__ZTVN7WebCore13AnimationBaseE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore17ImplicitAnimationE=(H_BASE+8)|0;
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
  var invoke_vid=env.invoke_vid;
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iid=env.invoke_iid;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17ImplicitAnimation19sendTransitionEventERKN3WTF12AtomicStringEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i8 = i2 | 0;
 if ((HEAP32[i8 >> 2] | 0) != (HEAP32[i7 + 620 >> 2] | 0)) {
  i9 = 0;
  STACKTOP = i4;
  return i9 | 0;
 }
 i7 = i1 + 56 | 0;
 if ((HEAP16[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 768 >> 1] & 1024) == 0) {
  i9 = 0;
  STACKTOP = i4;
  return i9 | 0;
 }
 __ZN7WebCore21getPropertyNameStringENS_13CSSPropertyIDE(i5, HEAP32[i1 + 72 >> 2] | 0);
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP32[i10 + 20 >> 2] & 128 | 0) == 0) {
   i7 = HEAP32[i10 + 4 >> 2] | 0;
   i11 = i7;
   if ((i7 | 0) == 0) {
    i12 = 0;
    break;
   }
   i13 = i7 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i14 = HEAP32[(HEAP32[i1 + 64 >> 2] | 0) + 4 >> 2] | 0;
   i15 = i6 | 0;
   HEAP32[i15 >> 2] = i11;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   __ZN7WebCore26AnimationControllerPrivate18addEventToDispatchEN3WTF10PassRefPtrINS_7ElementEEERKNS1_12AtomicStringERKNS1_6StringEd(i14, i6, i2, i5, d3);
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 + 8 | 0;
     i13 = i15 | 0;
     i16 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i16;
     if ((i16 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
    }
   } while (0);
   i14 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
   do {
    if ((HEAP32[i8 >> 2] | 0) == (HEAP32[i14 + 620 >> 2] | 0)) {
     i15 = i7 + 32 | 0;
     if ((HEAP32[i7 + 12 >> 2] & 2048 | 0) == 0) {
      i17 = i15 | 0;
     } else {
      i17 = HEAP32[i15 >> 2] | 0;
     }
     if ((HEAP32[i17 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore13AnimationBase19setNeedsStyleRecalcEPNS_7ElementE(i11);
    }
   } while (0);
   i11 = i7 + 8 | 0;
   i14 = i11 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   HEAP32[i14 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    i12 = 1;
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    i12 = 1;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
   i12 = 1;
  } else {
   i12 = 0;
  }
 } while (0);
 i17 = HEAP32[i5 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i9 = i12;
  STACKTOP = i4;
  return i9 | 0;
 }
 i5 = i17 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i17);
  i9 = i12;
  STACKTOP = i4;
  return i9 | 0;
 } else {
  HEAP32[i5 >> 2] = i8;
  i9 = i12;
  STACKTOP = i4;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore14SVGRenderStyleD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = i4 | 0;
  if ((i2 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i2 << 2) | 0;
   i2 = i6;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if (!((i4 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17StyleSurroundDataD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore15StyleVisualDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12StyleBoxDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore17ImplicitAnimation5resetEPNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 84 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = i1 + 80 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 L10 : do {
  if ((i5 | 0) == 0) {
   HEAP8[i1 + 13 | 0] = 0;
  } else {
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    i2 = i1 + 13 | 0;
    HEAP8[i2] = 0;
    i6 = i5;
    i7 = i2;
   } else {
    __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, 2, +-1);
    i2 = HEAP32[i4 >> 2] | 0;
    i8 = i1 + 13 | 0;
    HEAP8[i8] = 0;
    if ((i2 | 0) == 0) {
     break;
    } else {
     i6 = i2;
     i7 = i8;
    }
   }
   i8 = HEAP32[i3 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i2 = HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 72 >> 2] | 0;
   i9 = HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 72 >> 2] | 0;
   i8 = i9 + 4 | 0;
   i10 = (HEAP32[i2 + 12 >> 2] | 0) == 0 ? i8 : i2 + 4 | 0;
   if ((HEAP32[i10 + 8 >> 2] | 0) == 0) {
    break;
   }
   do {
    if ((i10 | 0) != (i8 | 0)) {
     if ((HEAP32[i9 + 12 >> 2] | 0) == 0) {
      break;
     }
     if (!(__ZNK7WebCore19TransformOperations15operationsMatchERKS0_(i10, i8) | 0)) {
      break L10;
     }
    }
   } while (0);
   HEAP8[i7] = 1;
  }
 } while (0);
 i7 = i1 + 14 | 0;
 HEAP8[i7] = 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 76 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 76 >> 2] | 0;
 i4 = i1 + 4 | 0;
 i6 = (HEAP32[i3 + 12 >> 2] | 0) == 0 ? i4 : i3 + 4 | 0;
 if ((HEAP32[i6 + 8 >> 2] | 0) == 0) {
  return;
 }
 do {
  if ((i6 | 0) != (i4 | 0)) {
   if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
    break;
   }
   if (__ZNK7WebCore16FilterOperations15operationsMatchERKS0_(i6, i4) | 0) {
    break;
   }
   return;
  }
 } while (0);
 HEAP8[i7] = 1;
 return;
}
function __ZN7WebCore17ImplicitAnimation7animateEPNS_18CompositeAnimationEPNS_13RenderElementEPKNS_11RenderStyleEPS5_RN3WTF6RefPtrIS5_EE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i4 | 0;
 i2 = i4 + 8 | 0;
 i7 = i1;
 i8 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i8 | 0) == 6 | (i8 | 0) == 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 64 >> 2] & 7](i1, i5);
 } else if ((i8 | 0) == 11) {
  STACKTOP = i4;
  return;
 }
 i8 = i6 | 0;
 do {
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   __ZN7WebCore11RenderStyle5cloneEPKS0_(i2, i5);
   i6 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
   if ((i6 | 0) == 0) {
    break;
   }
   i9 = i6 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i1 + 80 >> 2] | 0;
 i9 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if (!(__ZN7WebCore20CSSPropertyAnimation15blendPropertiesEPKNS_13AnimationBaseENS_13CSSPropertyIDEPNS_11RenderStyleEPKS5_S8_d(i7, i2, i5, i10, i9, +__ZNK7WebCore13AnimationBase8progressEddPKNS_14TimingFunctionE(i7, +1, +0, 0)) | 0)) {
   i1 = (HEAP32[i8 >> 2] | 0) + 20 | 0;
   i6 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[i6 + 296 >> 2] & 32768 | 0) != 0) {
    break;
   }
   if ((HEAP32[i6 >> 2] | 0) == 1) {
    i11 = i6;
   } else {
    __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i3, i6);
    i6 = HEAP32[i3 >> 2] | 0;
    i12 = HEAP32[i1 >> 2] | 0;
    i13 = i12 | 0;
    i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    if ((i14 | 0) == 0) {
     __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i12);
     __ZN3WTF8fastFreeEPv(i12);
    } else {
     HEAP32[i13 >> 2] = i14;
    }
    HEAP32[i1 >> 2] = i6;
    i11 = i6;
   }
   i6 = i11 + 296 | 0;
   HEAP32[i6 >> 2] = HEAP32[i6 >> 2] | 32768;
  }
 } while (0);
 __ZN7WebCore13AnimationBase27fireAnimationEventsIfNeededEv(i7);
 STACKTOP = i4;
 return;
}
function __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 76 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 100 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 44 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 12 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
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
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore17ImplicitAnimation14onAnimationEndEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore18CompositeAnimation23getAnimationForPropertyENS_13CSSPropertyIDE(i4, HEAP32[i1 + 64 >> 2] | 0, HEAP32[i1 + 72 >> 2] | 0);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17ImplicitAnimation19sendTransitionEventERKN3WTF12AtomicStringEd(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 620 | 0, d2) | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] & 15](i1);
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i4 + 112 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore17ImplicitAnimation19sendTransitionEventERKN3WTF12AtomicStringEd(i1, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 620 | 0, d2) | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] & 15](i1);
 i1 = i4 + 4 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17ImplicitAnimationD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) != 11) {
   i2 = i1 + 56 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore12RenderObject12isCompositedEv(i3 | 0) | 0)) {
    break;
   }
   __ZN7WebCore20RenderBoxModelObject18transitionFinishedENS_13CSSPropertyIDE(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 72 >> 2] | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = __ZTVN7WebCore13AnimationBaseE + 8;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore9AnimationD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore17ImplicitAnimationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) != 11) {
   i2 = i1 + 56 | 0;
   i3 = HEAP32[i2 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore12RenderObject12isCompositedEv(i3 | 0) | 0)) {
    break;
   }
   __ZN7WebCore20RenderBoxModelObject18transitionFinishedENS_13CSSPropertyIDE(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 72 >> 2] | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = __ZTVN7WebCore13AnimationBaseE + 8;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore9AnimationD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore17StyleSurroundDataD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10BorderDataD2Ev(i1 + 100 | 0);
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore10BorderDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) != 10) {
  i2 = i1 + 32 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = i3 | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
 return;
}
function __ZN7WebCore17ImplicitAnimation16getAnimatedStyleERN3WTF6RefPtrINS_11RenderStyleEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = i1 + 84 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   __ZN7WebCore11RenderStyle5cloneEPKS0_(i4, HEAP32[i2 >> 2] | 0);
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i4 = i1;
 i8 = HEAP32[i1 + 72 >> 2] | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i1 + 80 >> 2] | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 __ZN7WebCore20CSSPropertyAnimation15blendPropertiesEPKNS_13AnimationBaseENS_13CSSPropertyIDEPNS_11RenderStyleEPKS5_S8_d(i4, i8, i7, i5, i1, +__ZNK7WebCore13AnimationBase8progressEddPKNS_14TimingFunctionE(i4, +1, +0, 0)) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17ImplicitAnimation17timeToNextServiceEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1;
 d6 = +__ZN7WebCore13AnimationBase17timeToNextServiceEv(i5);
 HEAPF64[i3 >> 3] = d6;
 do {
  if (d6 != +0) {
   d7 = d6;
  } else {
   if ((HEAP32[i1 + 8 >> 2] | 0) >>> 0 < 4 >>> 0) {
    d7 = d6;
    break;
   }
   if (!(__ZN7WebCore20CSSPropertyAnimation32animationOfPropertyIsAcceleratedENS_13CSSPropertyIDE(HEAP32[i1 + 72 >> 2] | 0) | 0)) {
    d7 = d6;
    break;
   }
   if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
    d7 = d6;
    break;
   }
   __ZNK7WebCore13AnimationBase18getTimeToNextEventERdRb(i5, i3, i4);
   d7 = +HEAPF64[i3 >> 3];
  }
 } while (0);
 STACKTOP = i2;
 return +d7;
}
function __ZN7WebCore12StyleBoxDataD2Ev(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore17ImplicitAnimation35checkForMatchingFilterFunctionListsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 14 | 0;
 HEAP8[i2] = 0;
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 76 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 76 >> 2] | 0;
 i4 = i3 + 4 | 0;
 i5 = (HEAP32[i1 + 12 >> 2] | 0) == 0 ? i4 : i1 + 4 | 0;
 if ((HEAP32[i5 + 8 >> 2] | 0) == 0) {
  return;
 }
 do {
  if ((i5 | 0) != (i4 | 0)) {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    break;
   }
   if (__ZNK7WebCore16FilterOperations15operationsMatchERKS0_(i5, i4) | 0) {
    break;
   }
   return;
  }
 } while (0);
 HEAP8[i2] = 1;
 return;
}
function __ZN7WebCore17ImplicitAnimation29validateTransformFunctionListEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 13 | 0;
 HEAP8[i2] = 0;
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 72 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 72 >> 2] | 0;
 i4 = i3 + 4 | 0;
 i5 = (HEAP32[i1 + 12 >> 2] | 0) == 0 ? i4 : i1 + 4 | 0;
 if ((HEAP32[i5 + 8 >> 2] | 0) == 0) {
  return;
 }
 do {
  if ((i5 | 0) != (i4 | 0)) {
   if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
    break;
   }
   if (__ZNK7WebCore19TransformOperations15operationsMatchERKS0_(i5, i4) | 0) {
    break;
   }
   return;
  }
 } while (0);
 HEAP8[i2] = 1;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vid + 8;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vid + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vid + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_iid + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vid + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 2;
}
function __ZN7WebCore17ImplicitAnimationC2ERKNS_9AnimationENS_13CSSPropertyIDEPNS_13RenderElementEPNS_18CompositeAnimationEPNS_11RenderStyleE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0;
 __ZN7WebCore13AnimationBaseC2ERKNS_9AnimationEPNS_13RenderElementEPNS_18CompositeAnimationE(i1, i2, i4, i5);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 72 >> 2] = i3;
 HEAP8[i1 + 76 | 0] = 0;
 HEAP8[i1 + 77 | 0] = 1;
 HEAP32[i1 + 80 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i1 + 84 | 0;
  HEAP32[i7 >> 2] = 0;
  return;
 }
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i7 = i1 + 84 | 0;
 HEAP32[i7 >> 2] = 0;
 return;
}
function __ZN7WebCore17ImplicitAnimationC1ERKNS_9AnimationENS_13CSSPropertyIDEPNS_13RenderElementEPNS_18CompositeAnimationEPNS_11RenderStyleE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0;
 __ZN7WebCore13AnimationBaseC2ERKNS_9AnimationEPNS_13RenderElementEPNS_18CompositeAnimationE(i1, i2, i4, i5);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 72 >> 2] = i3;
 HEAP8[i1 + 76 | 0] = 0;
 HEAP8[i1 + 77 | 0] = 1;
 HEAP32[i1 + 80 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i1 + 84 | 0;
  HEAP32[i7 >> 2] = 0;
  return;
 }
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i7 = i1 + 84 | 0;
 HEAP32[i7 >> 2] = 0;
 return;
}
function __ZN7WebCore17ImplicitAnimation14pauseAnimationEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 56 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if (__ZNK7WebCore12RenderObject12isCompositedEv(i4 | 0) | 0) {
  __ZN7WebCore20RenderBoxModelObject16transitionPausedEdNS_13CSSPropertyIDE(HEAP32[i3 >> 2] | 0, d2, HEAP32[i1 + 72 >> 2] | 0);
 }
 if (+HEAPF64[i1 + 24 >> 3] >= +0) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) == 6) {
  return;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
 } else {
  i5 = 0;
 }
 __ZN7WebCore13AnimationBase19setNeedsStyleRecalcEPNS_7ElementE(i5);
 return;
}
function __ZN7WebCore17ImplicitAnimation14startAnimationEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 56 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if (!(__ZNK7WebCore12RenderObject12isCompositedEv(i4 | 0) | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = __ZN7WebCore20RenderBoxModelObject15startTransitionEdNS_13CSSPropertyIDEPKNS_11RenderStyleES4_(HEAP32[i3 >> 2] | 0, d2, HEAP32[i1 + 72 >> 2] | 0, HEAP32[i1 + 80 >> 2] | 0, HEAP32[i1 + 84 >> 2] | 0) | 0;
 return i5 | 0;
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
function __ZN7WebCore17ImplicitAnimation25blendPropertyValueInStyleENS_13CSSPropertyIDEPNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1;
 i6 = HEAP32[i1 + 80 >> 2] | 0;
 __ZN7WebCore20CSSPropertyAnimation15blendPropertiesEPKNS_13AnimationBaseENS_13CSSPropertyIDEPNS_11RenderStyleEPKS5_S8_d(i5, i2, i3, i6, i4, +__ZNK7WebCore13AnimationBase8progressEddPKNS_14TimingFunctionE(i5, +1, +0, 0)) | 0;
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
function __ZN7WebCore17ImplicitAnimation21isTargetPropertyEqualENS_13CSSPropertyIDEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = __ZN7WebCore20CSSPropertyAnimation15propertiesEqualENS_13CSSPropertyIDEPKNS_11RenderStyleES4_(i2, i4, i3) | 0;
 return i5 | 0;
}
function __ZN7WebCore17ImplicitAnimation12endAnimationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 56 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if (!(__ZNK7WebCore12RenderObject12isCompositedEv(i3 | 0) | 0)) {
  return;
 }
 __ZN7WebCore20RenderBoxModelObject18transitionFinishedENS_13CSSPropertyIDE(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 72 >> 2] | 0);
 return;
}
function __ZN7WebCore17ImplicitAnimation13setOverriddenEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 76 | 0;
 if ((i2 & 1 | 0) == (HEAP8[i3] & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 __ZN7WebCore13AnimationBase18updateStateMachineENS0_14AnimStateInputEd(i1, i2 ? 8 : 9, +-1);
 return;
}
function __ZNK7WebCore17ImplicitAnimation26shouldSendEventForListenerENS_8Document12ListenerTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return ((HEAPU16[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 56 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 768 >> 1] | 0) & i2 | 0) != 0 | 0;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore17ImplicitAnimation15affectsPropertyENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (HEAP32[i1 + 72 >> 2] | 0) == (i2 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore17ImplicitAnimationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17ImplicitAnimationD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function b7(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(7);
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
function dynCall_iid(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return FUNCTION_TABLE_iid[i1 & 3](i2 | 0, +d3) | 0;
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
function __ZNK7WebCore17ImplicitAnimation10overriddenEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 76 | 0] & 1) != 0 | 0;
}
function dynCall_vid(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vid[i1 & 15](i2 | 0, +d3);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore13AnimationBase20onAnimationIterationEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 3](i2 | 0);
}
function __ZN7WebCore13AnimationBase16onAnimationStartEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return;
}
function __ZN7WebCore13AnimationBase26resumeOverriddenAnimationsEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore13AnimationBase16shouldFireEventsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore13AnimationBase18overrideAnimationsEv(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function b5(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(5);
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
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
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
  var FUNCTION_TABLE_vid = [b0,b0,__ZN7WebCore13AnimationBase20onAnimationIterationEd,b0,__ZN7WebCore17ImplicitAnimation14onAnimationEndEd,b0,__ZN7WebCore17ImplicitAnimation14pauseAnimationEd,b0,__ZN7WebCore13AnimationBase16onAnimationStartEd,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_di = [b1,b1,__ZN7WebCore17ImplicitAnimation17timeToNextServiceEv,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore13AnimationBase26resumeOverriddenAnimationsEv,b2,__ZN7WebCore17ImplicitAnimation12endAnimationEv,b2,__ZN7WebCore17ImplicitAnimationD2Ev,b2,__ZN7WebCore13AnimationBase18overrideAnimationsEv,b2,__ZN7WebCore17ImplicitAnimationD0Ev,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore17ImplicitAnimation5resetEPNS_11RenderStyleE,b3,__ZN7WebCore17ImplicitAnimation16getAnimatedStyleERN3WTF6RefPtrINS_11RenderStyleEEE,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore13AnimationBase16shouldFireEventsEv,b4,__ZNK7WebCore17ImplicitAnimation10overriddenEv,b4,b4,b4];
  var FUNCTION_TABLE_iid = [b5,b5,__ZN7WebCore17ImplicitAnimation14startAnimationEd,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viiiiii = [b7,b7,__ZN7WebCore17ImplicitAnimation7animateEPNS_18CompositeAnimationEPNS_13RenderElementEPKNS_11RenderStyleEPS5_RN3WTF6RefPtrIS5_EE,b7,__ZN7WebCore17ImplicitAnimationC2ERKNS_9AnimationENS_13CSSPropertyIDEPNS_13RenderElementEPNS_18CompositeAnimationEPNS_11RenderStyleE,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,__ZNK7WebCore17ImplicitAnimation15affectsPropertyENS_13CSSPropertyIDE,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vid: dynCall_vid, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iid: dynCall_iid, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vid": invoke_vid, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iid": invoke_iid, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore13AnimationBaseE": __ZTVN7WebCore13AnimationBaseE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vid = Module["dynCall_vid"] = asm["dynCall_vid"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iid = Module["dynCall_iid"] = asm["dynCall_iid"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore17ImplicitAnimation15affectsPropertyENS_13CSSPropertyIDE","_memset","__ZN7WebCore17ImplicitAnimation7animateEPNS_18CompositeAnimationEPNS_13RenderElementEPKNS_11RenderStyleEPS5_RN3WTF6RefPtrIS5_EE","__ZN7WebCore17ImplicitAnimation14pauseAnimationEd","__ZNK7WebCore13AnimationBase16shouldFireEventsEv","__ZN7WebCore17ImplicitAnimation14onAnimationEndEd","__ZN7WebCore17ImplicitAnimation29validateTransformFunctionListEv","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZN7WebCore17ImplicitAnimation12endAnimationEv","__ZNK7WebCore17ImplicitAnimation26shouldSendEventForListenerENS_8Document12ListenerTypeE","_memcpy","__ZN7WebCore17ImplicitAnimation19sendTransitionEventERKN3WTF12AtomicStringEd","__ZN7WebCore17ImplicitAnimation5resetEPNS_11RenderStyleE","__ZN7WebCore17ImplicitAnimation16getAnimatedStyleERN3WTF6RefPtrINS_11RenderStyleEEE","__ZN7WebCore12StyleBoxDataD2Ev","__ZN7WebCore17ImplicitAnimationD0Ev","__ZN7WebCore13AnimationBase26resumeOverriddenAnimationsEv","__ZN7WebCore17ImplicitAnimation21isTargetPropertyEqualENS_13CSSPropertyIDEPKNS_11RenderStyleE","__ZN7WebCore17ImplicitAnimation13setOverriddenEb","__ZN7WebCore11RenderStyleD2Ev","__ZN7WebCore13AnimationBase20onAnimationIterationEd","__ZN7WebCore17ImplicitAnimationD2Ev","__ZN7WebCore10BorderDataD2Ev","__ZN7WebCore13AnimationBase18overrideAnimationsEv","__ZN7WebCore13AnimationBase16onAnimationStartEd","__ZN7WebCore17ImplicitAnimation14startAnimationEd","__ZN7WebCore17ImplicitAnimation35checkForMatchingFilterFunctionListsEv","__ZN7WebCore17ImplicitAnimationC2ERKNS_9AnimationENS_13CSSPropertyIDEPNS_13RenderElementEPNS_18CompositeAnimationEPNS_11RenderStyleE","__ZN7WebCore17StyleSurroundDataD2Ev","__ZN7WebCore17ImplicitAnimation17timeToNextServiceEv","__ZNK7WebCore17ImplicitAnimation10overriddenEv","__ZN7WebCore17ImplicitAnimation25blendPropertyValueInStyleENS_13CSSPropertyIDEPNS_11RenderStyleE"]

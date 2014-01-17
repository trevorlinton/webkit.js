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
H_BASE = parentModule["_malloc"](424 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 424;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore20InspectorCanvasAgentC1EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPN9Inspector21InjectedScriptManagerE;
var __ZN7WebCore20InspectorCanvasAgentD1Ev;
/* memory initializer */ allocate([67,97,110,118,97,115,32,97,103,101,110,116,32,105,115,32,110,111,116,32,101,110,97,98,108,101,100,0,0,0,0,0,73,110,115,112,101,99,116,101,100,32,102,114,97,109,101,32,104,97,115,32,103,111,110,101,0,0,0,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,58,32,111,114,105,103,105,110,97,108,32,68,101,112,114,101,99,97,116,101,100,58,58,83,99,114,105,112,116,79,98,106,101,99,116,32,104,97,115,32,110,111,32,118,97,108,117,101,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,58,32,110,111,32,67,97,110,118,97,115,32,109,111,100,117,108,101,0,0,0,0,0,0,0,0,67,97,110,118,97,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN9Inspector18InjectedScriptBaseE=env.__ZTVN9Inspector18InjectedScriptBaseE|0;
  var __ZN7WebCore9HTMLNames9canvasTagE=env.__ZN7WebCore9HTMLNames9canvasTagE|0;
  var __ZTVN7WebCore26InjectedScriptCanvasModuleE=env.__ZTVN7WebCore26InjectedScriptCanvasModuleE|0;
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+368)|0;
  var __ZTVN10Deprecated12ScriptObjectE=(H_BASE+408)|0;
  var __ZTVN7WebCore20InspectorCanvasAgentE=(H_BASE+224)|0;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+184)|0;
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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore20InspectorCanvasAgent14frameNavigatedEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 56 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i1 + 16 | 0;
 if ((__ZN7WebCore18InspectorPageAgent9mainFrameEv(HEAP32[i10 >> 2] | 0) | 0) == (i2 | 0)) {
  i11 = i1 + 36 | 0;
  i12 = i11 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i1 + 40 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i13 + (i15 << 3) | 0;
  L6 : do {
   if ((HEAP32[i1 + 48 >> 2] | 0) != 0) {
    L8 : do {
     if ((i15 | 0) == 0) {
      i17 = i13;
     } else {
      i18 = i13;
      while (1) {
       i19 = HEAP32[i18 >> 2] | 0;
       if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
        i17 = i18;
        break L8;
       }
       i18 = i18 + 8 | 0;
       if ((i18 | 0) == (i16 | 0)) {
        break L6;
       }
      }
     }
    } while (0);
    if ((i17 | 0) == (i16 | 0)) {
     break;
    }
    i18 = i11 | 0;
    i19 = i6 + 8 | 0;
    i20 = i6 | 0;
    i21 = i17;
    while (1) {
     HEAP8[i5] = 0;
     __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_bEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_bS9_NS_10HashTraitsIS3_EENSB_IbEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_bEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i6, i18, i21 | 0, i5);
     if ((HEAP8[i19] & 1) == 0) {
      HEAP8[(HEAP32[i20 >> 2] | 0) + 4 | 0] = HEAP8[i5] & 1;
     }
     i22 = i21 + 8 | 0;
     L19 : do {
      if ((i22 | 0) == (i16 | 0)) {
       i23 = i16;
      } else {
       i24 = i22;
       while (1) {
        i25 = HEAP32[i24 >> 2] | 0;
        if (!((i25 | 0) == (-1 | 0) | (i25 | 0) == 0)) {
         i23 = i24;
         break L19;
        }
        i25 = i24 + 8 | 0;
        if ((i25 | 0) == (i16 | 0)) {
         i23 = i16;
         break;
        } else {
         i24 = i25;
        }
       }
      }
     } while (0);
     if ((i23 | 0) == ((HEAP32[i12 >> 2] | 0) + (HEAP32[i14 >> 2] << 3) | 0)) {
      break;
     } else {
      i21 = i23;
     }
    }
   }
  } while (0);
  __ZN9Inspector33InspectorCanvasFrontendDispatcher16traceLogsRemovedEPKN3WTF6StringES4_(HEAP32[i1 + 24 >> 2] | 0, 0, 0);
  STACKTOP = i3;
  return;
 }
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i23 = i1 + 36 | 0;
 i14 = i23 | 0;
 i12 = i1 + 24 | 0;
 i16 = i9 | 0;
 i5 = i1 + 44 | 0;
 i1 = i23 | 0;
 i23 = i8 + 8 | 0;
 i6 = i8 | 0;
 i17 = i2;
 while (1) {
  i2 = HEAP32[i14 >> 2] | 0;
  L32 : do {
   if ((i2 | 0) != 0) {
    i11 = HEAP32[i5 >> 2] | 0;
    i13 = i17;
    i15 = i13 + ~(i13 << 15) | 0;
    i13 = (i15 >>> 10 ^ i15) * 9 & -1;
    i15 = i13 >>> 6 ^ i13;
    i13 = i15 + ~(i15 << 11) | 0;
    i15 = i13 >>> 16 ^ i13;
    i13 = i11 & i15;
    i21 = i2 + (i13 << 3) | 0;
    i20 = HEAP32[i21 >> 2] | 0;
    if ((i20 | 0) == (i17 | 0)) {
     i26 = i21;
    } else {
     i21 = (i15 >>> 23) + ~i15 | 0;
     i15 = i21 << 12 ^ i21;
     i21 = i15 >>> 7 ^ i15;
     i15 = i21 << 2 ^ i21;
     i21 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i19 = i13;
     i13 = i20;
     while (1) {
      if ((i13 | 0) == 0) {
       break L32;
      }
      i20 = (i15 | 0) == 0 ? i21 : i15;
      i18 = i20 + i19 & i11;
      i22 = i2 + (i18 << 3) | 0;
      i24 = HEAP32[i22 >> 2] | 0;
      if ((i24 | 0) == (i17 | 0)) {
       i26 = i22;
       break;
      } else {
       i15 = i20;
       i19 = i18;
       i13 = i24;
      }
     }
    }
    if ((i26 | 0) == 0) {
     break;
    }
    HEAP8[i7] = 0;
    __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_bEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_bS9_NS_10HashTraitsIS3_EENSB_IbEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_bEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i8, i1, i4, i7);
    if ((HEAP8[i23] & 1) != 0) {
     break;
    }
    HEAP8[(HEAP32[i6 >> 2] | 0) + 4 | 0] = HEAP8[i7] & 1;
   }
  } while (0);
  i2 = HEAP32[i4 >> 2] | 0;
  do {
   if (__ZNK7WebCore18InspectorPageAgent13hasIdForFrameEPNS_5FrameE(HEAP32[i10 >> 2] | 0, i2) | 0) {
    __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i9, HEAP32[i10 >> 2] | 0, i2);
    __ZN9Inspector33InspectorCanvasFrontendDispatcher16traceLogsRemovedEPKN3WTF6StringES4_(HEAP32[i12 >> 2] | 0, i9, 0);
    i13 = HEAP32[i16 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    i19 = i13 | 0;
    i15 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i15 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i19 >> 2] = i15;
     break;
    }
   }
  } while (0);
  i17 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, 0) | 0;
  HEAP32[i4 >> 2] = i17;
  if ((i17 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent36findFramesWithUninstrumentedCanvasesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 40 | 0;
 i8 = i1 + 36 | 0;
 i9 = i8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i10);
  _memset(i8 | 0, 0, 16) | 0;
 }
 i10 = i1 + 16 | 0;
 i11 = HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] | 0) + 60 >> 2] | 0;
 i12 = i11;
 HEAP32[i3 >> 2] = i12;
 if ((i11 | 0) == 0) {
  i13 = 0;
 } else {
  i11 = i4 | 0;
  i14 = i8 | 0;
  i8 = i6 + 8 | 0;
  i15 = i6 | 0;
  i16 = i12;
  while (1) {
   i12 = HEAP32[i16 + 456 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     __ZN7WebCore13ContainerNode20getElementsByTagNameERKN3WTF12AtomicStringE(i4, i12 | 0, (HEAP32[__ZN7WebCore9HTMLNames9canvasTagE >> 2] | 0) + 12 | 0);
     i17 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 1](i17) | 0;
     i19 = i17;
     i20 = 0;
     while (1) {
      if (i20 >>> 0 >= i18 >>> 0) {
       break;
      }
      if ((HEAP32[(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i19 >> 2] | 0) + 12 >> 2] & 1](i17, i20) | 0) + 80 >> 2] | 0) == 0) {
       i20 = i20 + 1 | 0;
      } else {
       i21 = 10;
       break;
      }
     }
     do {
      if ((i21 | 0) == 10) {
       i21 = 0;
       HEAP8[i5] = 1;
       __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_bEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_bS9_NS_10HashTraitsIS3_EENSB_IbEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_bEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i6, i14, i3, i5);
       if ((HEAP8[i8] & 1) != 0) {
        break;
       }
       HEAP8[(HEAP32[i15 >> 2] | 0) + 4 | 0] = HEAP8[i5] & 1;
      }
     } while (0);
     i20 = i17 + 8 | 0;
     i19 = i20 | 0;
     i18 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i19 >> 2] = i18;
      break;
     }
     i18 = i20 - 8 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
    }
   } while (0);
   i16 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE((HEAP32[i3 >> 2] | 0) + 40 | 0, 0) | 0;
   HEAP32[i3 >> 2] = i16;
   if ((i16 | 0) == 0) {
    break;
   }
  }
  i13 = HEAP32[i9 >> 2] | 0;
 }
 i16 = i1 + 40 | 0;
 i3 = HEAP32[i16 >> 2] | 0;
 i5 = i13 + (i3 << 3) | 0;
 L25 : do {
  if ((HEAP32[i1 + 48 >> 2] | 0) == 0) {
   i22 = i5;
  } else {
   if ((i3 | 0) == 0) {
    i22 = i13;
    break;
   } else {
    i23 = i13;
   }
   while (1) {
    i15 = HEAP32[i23 >> 2] | 0;
    if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
     i22 = i23;
     break L25;
    }
    i15 = i23 + 8 | 0;
    if ((i15 | 0) == (i5 | 0)) {
     i22 = i5;
     break;
    } else {
     i23 = i15;
    }
   }
  }
 } while (0);
 if ((i22 | 0) == (i13 + (i3 << 3) | 0)) {
  STACKTOP = i2;
  return;
 }
 i3 = i7 | 0;
 i13 = i1 + 24 | 0;
 i1 = i22;
 while (1) {
  __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i7, HEAP32[i10 >> 2] | 0, HEAP32[i1 >> 2] | 0);
  i22 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i22 | 0) != 0) {
    if ((HEAP32[i22 + 4 >> 2] | 0) == 0) {
     i24 = i22;
    } else {
     __ZN9Inspector33InspectorCanvasFrontendDispatcher14contextCreatedERKN3WTF6StringE(HEAP32[i13 >> 2] | 0, i7);
     i23 = HEAP32[i3 >> 2] | 0;
     if ((i23 | 0) == 0) {
      break;
     } else {
      i24 = i23;
     }
    }
    i23 = i24 | 0;
    i15 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
    if ((i15 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i24);
     break;
    } else {
     HEAP32[i23 >> 2] = i15;
     break;
    }
   }
  } while (0);
  i22 = i1 + 8 | 0;
  L45 : do {
   if ((i22 | 0) == (i5 | 0)) {
    i25 = i5;
   } else {
    i15 = i22;
    while (1) {
     i23 = HEAP32[i15 >> 2] | 0;
     if (!((i23 | 0) == (-1 | 0) | (i23 | 0) == 0)) {
      i25 = i15;
      break L45;
     }
     i23 = i15 + 8 | 0;
     if ((i23 | 0) == (i5 | 0)) {
      i25 = i5;
      break;
     } else {
      i15 = i23;
     }
    }
   }
  } while (0);
  if ((i25 | 0) == ((HEAP32[i9 >> 2] | 0) + (HEAP32[i16 >> 2] << 3) | 0)) {
   break;
  } else {
   i1 = i25;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_bEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_bS9_NS_10HashTraitsIS3_EENSB_IbEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_bEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_bEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_bS9_NS_10HashTraitsIS3_EENSB_IbEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i8, 0) | 0;
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
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP8[i26 + 4 | 0] = HEAP8[i4] & 1;
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_bEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_bS9_NS_10HashTraitsIS3_EENSB_IbEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent32notifyRenderingContextWasWrappedERKN10Deprecated12ScriptObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i3 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == 0) {
   i11 = 3;
  } else {
   i12 = __ZN7WebCore22domWindowFromExecStateEPN3JSC9ExecStateE(i10) | 0;
   if ((i12 | 0) == 0) {
    i11 = 3;
    break;
   }
   i13 = HEAP32[i12 + 52 >> 2] | 0;
   HEAP32[i5 >> 2] = i13;
   if ((i13 | 0) == 0) {
    break;
   }
   i12 = i2 + 36 | 0;
   i14 = HEAP32[i12 >> 2] | 0;
   L5 : do {
    if ((i14 | 0) != 0) {
     i15 = HEAP32[i2 + 44 >> 2] | 0;
     i16 = i13;
     i17 = i16 + ~(i16 << 15) | 0;
     i16 = (i17 >>> 10 ^ i17) * 9 & -1;
     i17 = i16 >>> 6 ^ i16;
     i16 = i17 + ~(i17 << 11) | 0;
     i17 = i16 >>> 16 ^ i16;
     i16 = i15 & i17;
     i18 = i14 + (i16 << 3) | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == (i13 | 0)) {
      i20 = i18;
     } else {
      i18 = (i17 >>> 23) + ~i17 | 0;
      i17 = i18 << 12 ^ i18;
      i18 = i17 >>> 7 ^ i17;
      i17 = i18 << 2 ^ i18;
      i18 = i17 >>> 20 ^ i17 | 1;
      i17 = 0;
      i21 = i16;
      i16 = i19;
      while (1) {
       if ((i16 | 0) == 0) {
        break L5;
       }
       i19 = (i17 | 0) == 0 ? i18 : i17;
       i22 = i19 + i21 & i15;
       i23 = i14 + (i22 << 3) | 0;
       i24 = HEAP32[i23 >> 2] | 0;
       if ((i24 | 0) == (i13 | 0)) {
        i20 = i23;
        break;
       } else {
        i17 = i19;
        i21 = i22;
        i16 = i24;
       }
      }
     }
     if ((i20 | 0) != 0) {
      break L1;
     }
    }
   } while (0);
   HEAP8[i6] = 0;
   __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_bEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_bS9_NS_10HashTraitsIS3_EENSB_IbEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_bEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_(i7, i12 | 0, i5, i6);
   if ((HEAP8[i7 + 8 | 0] & 1) != 0) {
    break;
   }
   HEAP8[(HEAP32[i7 >> 2] | 0) + 4 | 0] = HEAP8[i6] & 1;
  }
 } while (0);
 if ((i11 | 0) == 3) {
  HEAP32[i5 >> 2] = 0;
 }
 __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i8, HEAP32[i2 + 16 >> 2] | 0, HEAP32[i5 >> 2] | 0);
 i5 = i8 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN9Inspector33InspectorCanvasFrontendDispatcher14contextCreatedERKN3WTF6StringE(HEAP32[i2 + 24 >> 2] | 0, i8);
  }
 } while (0);
 i8 = i1 | 0;
 HEAP32[i8 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1 + 4 | 0, i3 + 4 | 0);
 HEAP32[i8 >> 2] = H_BASE + 416;
 HEAP32[i1 + 8 >> 2] = HEAP32[i9 >> 2];
 i9 = HEAP32[i5 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i9 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringEPN3JSC9ExecStateE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 32 | 0;
 if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
  __ZN3WTF6StringC1EPKc(i6, H_BASE + 8 | 0);
  i9 = i6 | 0;
  i6 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i3 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i6;
  do {
   if ((i11 | 0) != 0) {
    i6 = i11 | 0;
    i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i6 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i11 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i9 = i11 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i9 >> 2] = i10;
     break;
    }
   }
  } while (0);
  __ZN7WebCore26InjectedScriptCanvasModuleC1Ev(i1);
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore26InjectedScriptCanvasModule14moduleForStateEPN9Inspector21InjectedScriptManagerEPN3JSC9ExecStateE(i7, HEAP32[i2 + 20 >> 2] | 0, i4);
 i4 = HEAP32[i7 + 12 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i12 = 13;
 } else {
  if ((HEAP32[i4 + 4 >> 2] | 0) == -6) {
   i12 = 13;
  }
 }
 do {
  if ((i12 | 0) == 13) {
   __ZN3WTF6StringC1EPKc(i8, H_BASE + 136 | 0);
   i4 = i8 | 0;
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   i11 = i3 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i2;
   do {
    if ((i10 | 0) != 0) {
     i2 = i10 | 0;
     i11 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i2 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i10 | 0;
   i2 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i11 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = __ZTVN9Inspector18InjectedScriptBaseE + 8;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i12 = i8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i1 + 8 | 0;
 HEAP32[i12 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1 + 12 | 0, i7 + 12 | 0);
 HEAP32[i12 >> 2] = H_BASE + 416;
 HEAP32[i1 + 16 >> 2] = HEAP32[i7 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i7 + 20 >> 2];
 HEAP32[i3 >> 2] = __ZTVN7WebCore26InjectedScriptCanvasModuleE + 8;
 __ZN9Inspector20InjectedScriptModuleD2Ev(i7 | 0);
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_bEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_bS9_NS_10HashTraitsIS3_EENSB_IbEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
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
  i2 = i7 + (i11 << 3) | 0;
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
   i19 = i16 + (i14 << 3) | 0;
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
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i2;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 32 | 0;
 if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
  __ZN3WTF6StringC1EPKc(i6, H_BASE + 8 | 0);
  i9 = i6 | 0;
  i6 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i3 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i6;
  do {
   if ((i11 | 0) != 0) {
    i6 = i11 | 0;
    i10 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i6 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i11 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i9 = i11 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i9 >> 2] = i10;
     break;
    }
   }
  } while (0);
  __ZN7WebCore26InjectedScriptCanvasModuleC1Ev(i1);
  STACKTOP = i5;
  return;
 }
 __ZN9Inspector21InjectedScriptManager25injectedScriptForObjectIdERKN3WTF6StringE(i7, HEAP32[i2 + 20 >> 2] | 0, i4);
 i4 = HEAP32[i7 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i12 = 13;
  } else {
   if ((HEAP32[i4 + 4 >> 2] | 0) == -6) {
    i12 = 13;
    break;
   }
   __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringEPN3JSC9ExecStateE(i1, i2, i3, HEAP32[i7 + 16 >> 2] | 0);
  }
 } while (0);
 if ((i12 | 0) == 13) {
  __ZN3WTF6StringC1EPKc(i8, H_BASE + 40 | 0);
  i12 = i8 | 0;
  i8 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  i2 = i3 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i8;
  do {
   if ((i3 | 0) != 0) {
    i8 = i3 | 0;
    i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i2 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i8 >> 2] = i2;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i12 = i3 | 0;
    i2 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i2 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i12 >> 2] = i2;
     break;
    }
   }
  } while (0);
  __ZN7WebCore26InjectedScriptCanvasModuleC1Ev(i1);
 }
 __ZN9Inspector14InjectedScriptD1Ev(i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent13didBeginFrameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 36 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 40 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i7 + (i9 << 3) | 0;
 if ((HEAP32[i1 + 48 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 L7 : do {
  if ((i9 | 0) == 0) {
   i11 = i7;
  } else {
   i12 = i7;
   while (1) {
    i13 = HEAP32[i12 >> 2] | 0;
    if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
     i11 = i12;
     break L7;
    }
    i12 = i12 + 8 | 0;
    if ((i12 | 0) == (i10 | 0)) {
     break;
    }
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i11 | 0) == (i10 | 0)) {
  STACKTOP = i2;
  return;
 }
 i7 = i4 + 12 | 0;
 i9 = i4 | 0;
 i12 = i11;
 while (1) {
  __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringEPN3JSC9ExecStateE(i4, i1, i3, __ZN7WebCore18mainWorldExecStateEPNS_5FrameE(HEAP32[i12 >> 2] | 0) | 0);
  i11 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    if ((HEAP32[i11 + 4 >> 2] | 0) == -6) {
     break;
    }
    __ZN7WebCore26InjectedScriptCanvasModule12markFrameEndEv(i4);
   }
  } while (0);
  __ZN9Inspector20InjectedScriptModuleD2Ev(i9);
  i11 = i12 + 8 | 0;
  L22 : do {
   if ((i11 | 0) == (i10 | 0)) {
    i14 = i10;
   } else {
    i13 = i11;
    while (1) {
     i15 = HEAP32[i13 >> 2] | 0;
     if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
      i14 = i13;
      break L22;
     }
     i15 = i13 + 8 | 0;
     if ((i15 | 0) == (i10 | 0)) {
      i14 = i10;
      break;
     } else {
      i13 = i15;
     }
    }
   }
  } while (0);
  if ((i14 | 0) == ((HEAP32[i6 >> 2] | 0) + (HEAP32[i8 >> 2] << 3) | 0)) {
   break;
  } else {
   i12 = i14;
  }
 }
 i14 = HEAP32[i5 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i14 | 0;
 i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i12;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore20InspectorCanvasAgent25hasUninstrumentedCanvasesEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
  __ZN3WTF6StringC1EPKc(i5, H_BASE + 8 | 0);
  i6 = i5 | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i7 = i2 | 0;
  i2 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i5;
  do {
   if ((i2 | 0) != 0) {
    i5 = i2 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i5 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i2 = HEAP32[i6 >> 2] | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i6 = i2 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
  if ((i7 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i2);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i6 >> 2] = i7;
   STACKTOP = i4;
   return;
  }
 }
 i7 = HEAP32[i1 + 36 >> 2] | 0;
 i6 = HEAP32[i1 + 40 >> 2] | 0;
 i2 = i7 + (i6 << 3) | 0;
 L18 : do {
  if ((HEAP32[i1 + 48 >> 2] | 0) != 0) {
   L20 : do {
    if ((i6 | 0) == 0) {
     i8 = i7;
    } else {
     i5 = i7;
     while (1) {
      i9 = HEAP32[i5 >> 2] | 0;
      if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
       i8 = i5;
       break L20;
      }
      i5 = i5 + 8 | 0;
      if ((i5 | 0) == (i2 | 0)) {
       break L18;
      }
     }
    }
   } while (0);
   if ((i8 | 0) == (i2 | 0)) {
    break;
   } else {
    i10 = i8;
   }
   while (1) {
    if ((HEAP8[i10 + 4 | 0] & 1) != 0) {
     break;
    }
    i5 = i10 + 8 | 0;
    if ((i5 | 0) == (i2 | 0)) {
     break L18;
    } else {
     i11 = i5;
    }
    while (1) {
     i5 = HEAP32[i11 >> 2] | 0;
     if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
      break;
     }
     i5 = i11 + 8 | 0;
     if ((i5 | 0) == (i2 | 0)) {
      break L18;
     } else {
      i11 = i5;
     }
    }
    if ((i11 | 0) == (i2 | 0)) {
     break L18;
    } else {
     i10 = i11;
    }
   }
   HEAP8[i3] = 1;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP8[i3] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKN10Deprecated12ScriptObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if ((HEAP8[i2 + 32 | 0] & 1) == 0) {
  __ZN3WTF6StringC1EPKc(i6, H_BASE + 8 | 0);
  i8 = i6 | 0;
  i6 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  i9 = i3 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i6;
  do {
   if ((i10 | 0) != 0) {
    i6 = i10 | 0;
    i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i10);
     break;
    } else {
     HEAP32[i6 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i10 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i8 = i10 | 0;
    i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i10);
     break;
    } else {
     HEAP32[i8 >> 2] = i9;
     break;
    }
   }
  } while (0);
  __ZN7WebCore26InjectedScriptCanvasModuleC1Ev(i1);
  STACKTOP = i5;
  return;
 }
 i10 = HEAP32[i4 + 4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   if ((HEAP32[i10 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringEPN3JSC9ExecStateE(i1, i2, i3, HEAP32[i4 + 8 >> 2] | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 72 | 0);
 i4 = i7 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i7;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore26InjectedScriptCanvasModuleC1Ev(i1);
 STACKTOP = i5;
 return;
}
function __ZN3WTF7HashMapIPN7WebCore5FrameEbNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IbEEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
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
  i10 = i3 + (i2 << 3) | 0;
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
     i19 = i3 + (i18 << 3) | 0;
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
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 3) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
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
 __ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_bEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_bS9_NS_10HashTraitsIS3_EENSB_IbEEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vi + 18;
}
function __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(i2 & -4096) + 12 >> 2] | 0;
 if ((HEAP32[i6 + 84 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i2 = i6 + 80 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i6);
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = i8 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i2 = i8 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i6 + 60 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 + 48;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 + 8 >> 2] = i8;
 i10 = i8 | 0;
 HEAP32[i5 >> 2] = i10;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = 0;
  i12 = 0;
  i13 = -6;
  i14 = 0;
 } else {
  i1 = i9 | 0;
  i9 = HEAP32[i1 >> 2] | 0;
  i7 = HEAP32[i1 + 4 >> 2] | 0;
  i11 = i7 & 0;
  i12 = i9 & -1;
  i13 = i7 & -1;
  i14 = i9 & 0;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i12 | i14;
 HEAP32[i9 + 4 >> 2] = i11 | i13;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __Znwj(4) | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i1 + 24 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i7 | 0) != 0) {
  __ZdlPv(i7);
 }
 __ZN9Inspector32InspectorCanvasBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_39InspectorCanvasBackendDispatcherHandlerE(i5, i3, i1 + 12 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i1 + 28 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 4 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
 i6 = i3 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent46wrapCanvas2DRenderingContextForInstrumentationERKN10Deprecated12ScriptObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 32 | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKN10Deprecated12ScriptObjectE(i6, i2, i5, i3);
 i5 = HEAP32[i6 + 12 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i5 + 4 >> 2] | 0) == -6) {
    i9 = 3;
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule19wrapCanvas2DContextERKN10Deprecated12ScriptObjectE(i7, i6, i3);
   __ZN7WebCore20InspectorCanvasAgent32notifyRenderingContextWasWrappedERKN10Deprecated12ScriptObjectE(i1, i2, i7);
   __ZN10Deprecated11ScriptValueD2Ev(i7 | 0);
  }
 } while (0);
 if ((i9 | 0) == 3) {
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 >> 2] = H_BASE + 416;
  HEAP32[i1 + 8 >> 2] = 0;
 }
 __ZN9Inspector20InjectedScriptModuleD2Ev(i6 | 0);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i6 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore20InspectorCanvasAgent43wrapWebGLRenderingContextForInstrumentationERKN10Deprecated12ScriptObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 32 | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKN10Deprecated12ScriptObjectE(i6, i2, i5, i3);
 i5 = HEAP32[i6 + 12 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i9 = 3;
  } else {
   if ((HEAP32[i5 + 4 >> 2] | 0) == -6) {
    i9 = 3;
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule16wrapWebGLContextERKN10Deprecated12ScriptObjectE(i7, i6, i3);
   __ZN7WebCore20InspectorCanvasAgent32notifyRenderingContextWasWrappedERKN10Deprecated12ScriptObjectE(i1, i2, i7);
   __ZN10Deprecated11ScriptValueD2Ev(i7 | 0);
  }
 } while (0);
 if ((i9 | 0) == 3) {
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 >> 2] = H_BASE + 416;
  HEAP32[i1 + 8 >> 2] = 0;
 }
 __ZN9Inspector20InjectedScriptModuleD2Ev(i6 | 0);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i6 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore20InspectorCanvasAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPN9Inspector21InjectedScriptManagerE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = H_BASE + 176;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = H_BASE + 192;
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i6;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i7 >> 2] = H_BASE + 376;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i7 >> 2] = H_BASE + 376;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = H_BASE + 232;
 HEAP32[i1 + 12 >> 2] = H_BASE + 304;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP8[i1 + 32 | 0] = 0;
 _memset(i1 + 36 | 0, 0, 20) | 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20InspectorCanvasAgentC1EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPN9Inspector21InjectedScriptManagerE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = H_BASE + 176;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = H_BASE + 192;
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i6;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i7 >> 2] = H_BASE + 376;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i7 >> 2] = H_BASE + 376;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = H_BASE + 232;
 HEAP32[i1 + 12 >> 2] = H_BASE + 304;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP8[i1 + 32 | 0] = 0;
 _memset(i1 + 36 | 0, 0, 20) | 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20InspectorCanvasAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 232;
 HEAP32[i1 + 12 >> 2] = H_BASE + 304;
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i3 = i1 + 24 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZdlPv(i6);
 }
 __ZN9Inspector39InspectorCanvasBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 192;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN7WebCore20InspectorCanvasAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 232;
 HEAP32[i1 + 12 >> 2] = H_BASE + 304;
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i3 = i1 + 24 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZdlPv(i6);
 }
 __ZN9Inspector39InspectorCanvasBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 192;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZNK7WebCore20InspectorCanvasAgent14checkIsEnabledEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 32 | 0] & 1) != 0) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 8 | 0);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 } else {
  HEAP32[i1 >> 2] = i6;
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore20InspectorCanvasAgent14startCapturingEPN3WTF6StringEPKS2_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = __ZN7WebCore18InspectorPageAgent9mainFrameEv(i7) | 0;
 } else {
  i8 = __ZN7WebCore18InspectorPageAgent11assertFrameEPN3WTF6StringERKS2_(i7, i2, i3) | 0;
 }
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringEPN3JSC9ExecStateE(i6, i1, i2, __ZN7WebCore18mainWorldExecStateEPNS_5FrameE(i8) | 0);
 i8 = HEAP32[i6 + 12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule14startCapturingEPN3WTF6StringES3_(i6, i2, i4);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i6 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent12captureFrameEPN3WTF6StringEPKS2_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = __ZN7WebCore18InspectorPageAgent9mainFrameEv(i7) | 0;
 } else {
  i8 = __ZN7WebCore18InspectorPageAgent11assertFrameEPN3WTF6StringERKS2_(i7, i2, i3) | 0;
 }
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringEPN3JSC9ExecStateE(i6, i1, i2, __ZN7WebCore18mainWorldExecStateEPNS_5FrameE(i8) | 0);
 i8 = HEAP32[i6 + 12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule12captureFrameEPN3WTF6StringES3_(i6, i2, i4);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i6 | 0);
 STACKTOP = i5;
 return;
}
function __ZThn12_N7WebCore20InspectorCanvasAgent11getTraceLogEPN3WTF6StringERKS2_PKiS7_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas8TraceLogEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i8, i1 - 56 + 44 | 0, i2, i3);
 i1 = HEAP32[i8 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule8traceLogEPN3WTF6StringERKS2_PKiS7_PNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas8TraceLogEEE(i8, i2, i3, i4, i5, i6);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i8 | 0);
 STACKTOP = i7;
 return;
}
function __ZThn12_N7WebCore20InspectorCanvasAgent16getResourceStateEPN3WTF6StringERKS2_S5_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i7, i1 - 56 + 44 | 0, i2, i3);
 i1 = HEAP32[i7 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule13resourceStateEPN3WTF6StringERKS2_S5_PNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE(i7, i2, i3, i4, i5);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i7 | 0);
 STACKTOP = i6;
 return;
}
function __ZThn12_N7WebCore20InspectorCanvasAgent14replayTraceLogEPN3WTF6StringERKS2_iRNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i7, i1 - 56 + 44 | 0, i2, i3);
 i1 = HEAP32[i7 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule14replayTraceLogEPN3WTF6StringERKS2_iPNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE(i7, i2, i3, i4, i5);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i7 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent11getTraceLogEPN3WTF6StringERKS2_PKiS7_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas8TraceLogEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i8, i1, i2, i3);
 i1 = HEAP32[i8 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule8traceLogEPN3WTF6StringERKS2_PKiS7_PNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas8TraceLogEEE(i8, i2, i3, i4, i5, i6);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i8 | 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent16getResourceStateEPN3WTF6StringERKS2_S5_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i7, i1, i2, i3);
 i1 = HEAP32[i7 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule13resourceStateEPN3WTF6StringERKS2_S5_PNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE(i7, i2, i3, i4, i5);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i7 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent14replayTraceLogEPN3WTF6StringERKS2_iRNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i7, i1, i2, i3);
 i1 = HEAP32[i7 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule14replayTraceLogEPN3WTF6StringERKS2_iPNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE(i7, i2, i3, i4, i5);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i7 | 0);
 STACKTOP = i6;
 return;
}
function __ZThn12_N7WebCore20InspectorCanvasAgent15getResourceInfoEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas12ResourceInfoEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i6, i1 - 56 + 44 | 0, i2, i3);
 i1 = HEAP32[i6 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule12resourceInfoEPN3WTF6StringERKS2_PNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas12ResourceInfoEEE(i6, i2, i3, i4);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i6 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent15getResourceInfoEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas12ResourceInfoEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i6, i1, i2, i3);
 i1 = HEAP32[i6 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule12resourceInfoEPN3WTF6StringERKS2_PNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas12ResourceInfoEEE(i6, i2, i3, i4);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i6 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3);
 }
 i3 = i1 + 28 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 15](i1, 0);
 return;
}
function __ZThn12_N7WebCore20InspectorCanvasAgent13stopCapturingEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i5, i1 - 56 + 44 | 0, i2, i3);
 i1 = HEAP32[i5 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule13stopCapturingEPN3WTF6StringERKS2_(i5, i2, i3);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i5 | 0);
 STACKTOP = i4;
 return;
}
function __ZThn12_N7WebCore20InspectorCanvasAgent12dropTraceLogEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i5, i1 - 56 + 44 | 0, i2, i3);
 i1 = HEAP32[i5 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule12dropTraceLogEPN3WTF6StringERKS2_(i5, i2, i3);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i5 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent13stopCapturingEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i5, i1, i2, i3);
 i1 = HEAP32[i5 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule13stopCapturingEPN3WTF6StringERKS2_(i5, i2, i3);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i5 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent12dropTraceLogEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_(i5, i1, i2, i3);
 i1 = HEAP32[i5 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN7WebCore26InjectedScriptCanvasModule12dropTraceLogEPN3WTF6StringERKS2_(i5, i2, i3);
  }
 } while (0);
 __ZN9Inspector20InjectedScriptModuleD2Ev(i5 | 0);
 STACKTOP = i4;
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
function __ZN7WebCore20InspectorCanvasAgent13frameDetachedEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF7HashMapIPN7WebCore5FrameEbNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IbEEE6removeERKS3_(i1 + 36 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN9Inspector18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 __ZdlPv(i1);
 return;
}
function __ZThn12_N7WebCore20InspectorCanvasAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i2 = i1 - 56 + 44 | 0;
 i1 = i2;
 i3 = i2 + 32 | 0;
 if ((HEAP8[i3] & 1) != 0) {
  return;
 }
 HEAP8[i3] = 1;
 HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 84 >> 2] = i1;
 __ZN7WebCore20InspectorCanvasAgent36findFramesWithUninstrumentedCanvasesEv(i1);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
function __ZN7WebCore18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
function __ZThn12_N7WebCore20InspectorCanvasAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 - 56 + 44 | 0;
 HEAP8[i2 + 32 | 0] = 0;
 HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 84 >> 2] = 0;
 i1 = i2 + 36 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i2);
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 32 | 0] = 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 84 >> 2] = 0;
 i2 = i1 + 36 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i1);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore20InspectorCanvasAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 32 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 84 >> 2] = i1;
 __ZN7WebCore20InspectorCanvasAgent36findFramesWithUninstrumentedCanvasesEv(i1);
 return;
}
function __ZThn12_N7WebCore20InspectorCanvasAgent14startCapturingEPN3WTF6StringEPKS2_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20InspectorCanvasAgent14startCapturingEPN3WTF6StringEPKS2_S3_(i1 - 56 + 44 | 0, i2, i3, i4);
 return;
}
function __ZThn12_N7WebCore20InspectorCanvasAgent12captureFrameEPN3WTF6StringEPKS2_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20InspectorCanvasAgent12captureFrameEPN3WTF6StringEPKS2_S3_(i1 - 56 + 44 | 0, i2, i3, i4);
 return;
}
function __ZThn12_N7WebCore20InspectorCanvasAgent25hasUninstrumentedCanvasesEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20InspectorCanvasAgent25hasUninstrumentedCanvasesEPN3WTF6StringEPb(i1 - 56 + 44 | 0, i2, i3);
 return;
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
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZThn12_N7WebCore20InspectorCanvasAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 56 + 44 | 0;
 __ZN7WebCore20InspectorCanvasAgentD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZThn12_N7WebCore20InspectorCanvasAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20InspectorCanvasAgentD2Ev(i1 - 56 + 44 | 0);
 return;
}
function __ZN7WebCore20InspectorCanvasAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20InspectorCanvasAgentD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b6(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(6);
}
function __ZN10Deprecated12ScriptObjectD0Ev(i1) {
 i1 = i1 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN10Deprecated12ScriptObjectD1Ev(i1) {
 i1 = i1 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i1 | 0);
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
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore20InspectorCanvasAgent14replayTraceLogEPN3WTF6StringERKS2_iRNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE,b0,__ZThn12_N7WebCore20InspectorCanvasAgent14replayTraceLogEPN3WTF6StringERKS2_iRNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE,b0,__ZN7WebCore20InspectorCanvasAgent16getResourceStateEPN3WTF6StringERKS2_S5_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE,b0,__ZThn12_N7WebCore20InspectorCanvasAgent16getResourceStateEPN3WTF6StringERKS2_S5_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore20InspectorCanvasAgentD2Ev,b1,__ZN7WebCore20InspectorCanvasAgentD0Ev,b1,__ZThn12_N7WebCore20InspectorCanvasAgentD0Ev,b1,__ZN7WebCore18InspectorAgentBaseD0Ev,b1,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b1,__ZN7WebCore18InspectorAgentBaseD1Ev,b1,__ZN7WebCore20InspectorCanvasAgent29willDestroyFrontendAndBackendEv,b1,__ZThn12_N7WebCore20InspectorCanvasAgentD1Ev,b1,__ZN10Deprecated12ScriptObjectD0Ev,b1,__ZN9Inspector18InspectorAgentBaseD0Ev,b1,__ZN9Inspector18InspectorAgentBaseD1Ev,b1,__ZN10Deprecated12ScriptObjectD1Ev,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore20InspectorCanvasAgent6enableEPN3WTF6StringE,b2,__ZThn12_N7WebCore20InspectorCanvasAgent7disableEPN3WTF6StringE,b2,__ZThn12_N7WebCore20InspectorCanvasAgent6enableEPN3WTF6StringE,b2,__ZN7WebCore20InspectorCanvasAgent7disableEPN3WTF6StringE,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore20InspectorCanvasAgent13stopCapturingEPN3WTF6StringERKS2_,b4,__ZThn12_N7WebCore20InspectorCanvasAgent12dropTraceLogEPN3WTF6StringERKS2_,b4,__ZThn12_N7WebCore20InspectorCanvasAgent25hasUninstrumentedCanvasesEPN3WTF6StringEPb,b4,__ZN7WebCore20InspectorCanvasAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b4,__ZN7WebCore20InspectorCanvasAgent12dropTraceLogEPN3WTF6StringERKS2_,b4,__ZThn12_N7WebCore20InspectorCanvasAgent13stopCapturingEPN3WTF6StringERKS2_,b4,__ZN7WebCore20InspectorCanvasAgent25hasUninstrumentedCanvasesEPN3WTF6StringEPb,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_viiiiii = [b6,b6,__ZThn12_N7WebCore20InspectorCanvasAgent11getTraceLogEPN3WTF6StringERKS2_PKiS7_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas8TraceLogEEE,b6,__ZN7WebCore20InspectorCanvasAgent11getTraceLogEPN3WTF6StringERKS2_PKiS7_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas8TraceLogEEE,b6,b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,__ZN7WebCore20InspectorCanvasAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPN9Inspector21InjectedScriptManagerE,b8,__ZThn12_N7WebCore20InspectorCanvasAgent14startCapturingEPN3WTF6StringEPKS2_S3_,b8,__ZThn12_N7WebCore20InspectorCanvasAgent15getResourceInfoEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas12ResourceInfoEEE,b8,__ZN7WebCore20InspectorCanvasAgent15getResourceInfoEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas12ResourceInfoEEE,b8,__ZN7WebCore20InspectorCanvasAgent12captureFrameEPN3WTF6StringEPKS2_S3_,b8,__ZThn12_N7WebCore20InspectorCanvasAgent12captureFrameEPN3WTF6StringEPKS2_S3_,b8,__ZN7WebCore20InspectorCanvasAgent14startCapturingEPN3WTF6StringEPKS2_S3_,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN9Inspector18InjectedScriptBaseE": __ZTVN9Inspector18InjectedScriptBaseE, "__ZN7WebCore9HTMLNames9canvasTagE": __ZN7WebCore9HTMLNames9canvasTagE, "__ZTVN7WebCore26InjectedScriptCanvasModuleE": __ZTVN7WebCore26InjectedScriptCanvasModuleE, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZThn12_N7WebCore20InspectorCanvasAgent13stopCapturingEPN3WTF6StringERKS2_","__ZN7WebCore20InspectorCanvasAgent32notifyRenderingContextWasWrappedERKN10Deprecated12ScriptObjectE","__ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringEPN3JSC9ExecStateE","__ZN7WebCore20InspectorCanvasAgent14replayTraceLogEPN3WTF6StringERKS2_iRNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE","__ZThn12_N7WebCore20InspectorCanvasAgent14startCapturingEPN3WTF6StringEPKS2_S3_","__ZN7WebCore20InspectorCanvasAgentD2Ev","__ZThn12_N7WebCore20InspectorCanvasAgent11getTraceLogEPN3WTF6StringERKS2_PKiS7_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas8TraceLogEEE","__ZThn12_N7WebCore20InspectorCanvasAgent6enableEPN3WTF6StringE","_strlen","__ZN7WebCore20InspectorCanvasAgentD0Ev","__ZN7WebCore20InspectorCanvasAgent43wrapWebGLRenderingContextForInstrumentationERKN10Deprecated12ScriptObjectE","__ZThn12_N7WebCore20InspectorCanvasAgentD0Ev","__ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKN10Deprecated12ScriptObjectE","__ZThn12_N7WebCore20InspectorCanvasAgent14replayTraceLogEPN3WTF6StringERKS2_iRNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE","__ZThn12_N7WebCore20InspectorCanvasAgent15getResourceInfoEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas12ResourceInfoEEE","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZN7WebCore20InspectorCanvasAgent16getResourceStateEPN3WTF6StringERKS2_S5_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE","__ZNK7WebCore20InspectorCanvasAgent14checkIsEnabledEPN3WTF6StringE","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZN7WebCore20InspectorCanvasAgent13stopCapturingEPN3WTF6StringERKS2_","__ZN10Deprecated12ScriptObjectD0Ev","__ZN7WebCore20InspectorCanvasAgent26injectedScriptCanvasModuleEPN3WTF6StringERKS2_","_memset","__ZN7WebCore20InspectorCanvasAgent15getResourceInfoEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas12ResourceInfoEEE","__ZThn12_N7WebCore20InspectorCanvasAgent12dropTraceLogEPN3WTF6StringERKS2_","__ZThn12_N7WebCore20InspectorCanvasAgent25hasUninstrumentedCanvasesEPN3WTF6StringEPb","__ZN7WebCore20InspectorCanvasAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZN7WebCore20InspectorCanvasAgent12dropTraceLogEPN3WTF6StringERKS2_","__ZN3WTF7HashMapIPN7WebCore5FrameEbNS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS6_IbEEE6removeERKS3_","__ZN7WebCore20InspectorCanvasAgent29willDestroyFrontendAndBackendEv","__ZThn12_N7WebCore20InspectorCanvasAgentD1Ev","__ZN7WebCore20InspectorCanvasAgent6enableEPN3WTF6StringE","__ZN7WebCore20InspectorCanvasAgent46wrapCanvas2DRenderingContextForInstrumentationERKN10Deprecated12ScriptObjectE","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_bEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_bS9_NS_10HashTraitsIS3_EENSB_IbEEE18KeyValuePairTraitsESC_E6rehashEiPS5_","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZN7WebCore20InspectorCanvasAgent12captureFrameEPN3WTF6StringEPKS2_S3_","__ZN7WebCore20InspectorCanvasAgent36findFramesWithUninstrumentedCanvasesEv","__ZThn12_N7WebCore20InspectorCanvasAgent16getResourceStateEPN3WTF6StringERKS2_S5_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas13ResourceStateEEE","__ZThn12_N7WebCore20InspectorCanvasAgent12captureFrameEPN3WTF6StringEPKS2_S3_","__ZN7WebCore20InspectorCanvasAgent14startCapturingEPN3WTF6StringEPKS2_S3_","_memcpy","__ZN3WTF9HashTableIPN7WebCore5FrameENS_12KeyValuePairIS3_bEENS_24KeyValuePairKeyExtractorIS5_EENS_7PtrHashIS3_EENS_7HashMapIS3_bS9_NS_10HashTraitsIS3_EENSB_IbEEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS3_bEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore20InspectorCanvasAgentC2EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPN9Inspector21InjectedScriptManagerE","__ZN3JSC6StrongINS_7UnknownEEC2ERKS2_","__ZThn12_N7WebCore20InspectorCanvasAgent7disableEPN3WTF6StringE","__ZN10Deprecated12ScriptObjectD1Ev","__ZN7WebCore20InspectorCanvasAgent13didBeginFrameEv","__ZN7WebCore20InspectorCanvasAgent25hasUninstrumentedCanvasesEPN3WTF6StringEPb","__ZN7WebCore20InspectorCanvasAgent7disableEPN3WTF6StringE","__ZN7WebCore20InspectorCanvasAgent14frameNavigatedEPNS_5FrameE","__ZN7WebCore20InspectorCanvasAgent13frameDetachedEPNS_5FrameE","__ZN7WebCore20InspectorCanvasAgent11getTraceLogEPN3WTF6StringERKS2_PKiS7_RNS1_6RefPtrIN9Inspector11TypeBuilder6Canvas8TraceLogEEE"]

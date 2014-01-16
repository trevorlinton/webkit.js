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
H_BASE = parentModule["_malloc"](1256 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1256;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17XMLDocumentParserC1ERNS_8DocumentEPNS_9FrameViewE;
var __ZN7WebCore17XMLDocumentParserC1ERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE;
var __ZN7WebCore16XMLParserContextD1Ev;
var __ZN7WebCore17XMLDocumentParserD1Ev;
/* memory initializer */ allocate([58,0,0,0,0,0,0,0,97,116,116,114,115,0,0,0,32,47,62,0,0,0,0,0,60,63,120,109,108,32,118,101,114,115,105,111,110,61,34,49,46,48,34,63,62,60,97,116,116,114,115,32,0,0,0,0,105,115,111,45,56,56,53,57,45,49,0,0,0,0,0,0,69,110,99,111,100,105,110,103,32,101,114,114,111,114,0,0,49,46,48,0,0,0,0,0,104,116,116,112,58,47,47,119,119,119,46,119,51,46,111,114,103,47,71,114,97,112,104,105,99,115,47,83,86,71,0,0,104,116,116,112,58,47,47,119,119,119,46,119,51,46,111,114,103,47,84,82,47,120,104,116,109,108,0,0,0,0,0,0,47,101,116,99,47,99,97,116,97,108,111,103,0,0,0,0,102,105,108,101,58,47,47,47,0,0,0,0,0,0,0,0,102,105,108,101,58,47,47,47,101,116,99,47,120,109,108,47,99,97,116,97,108,111,103,0,71,69,84,0,0,0,0,0,120,109,108,110,115,58,0,0,45,47,47,87,65,80,70,79,82,85,77,47,47,68,84,68,32,88,72,84,77,76,32,77,111,98,105,108,101,32,49,46,50,47,47,69,78,0,0,0,45,47,47,87,65,80,70,79,82,85,77,47,47,68,84,68,32,88,72,84,77,76,32,77,111,98,105,108,101,32,49,46,49,47,47,69,78,0,0,0,104,116,116,112,58,47,47,119,119,119,46,119,51,46,111,114,103,47,88,77,76,47,49,57,57,56,47,110,97,109,101,115,112,97,99,101,0,0,0,0,45,47,47,87,65,80,70,79,82,85,77,47,47,68,84,68,32,88,72,84,77,76,32,77,111,98,105,108,101,32,49,46,48,47,47,69,78,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,88,72,84,77,76,32,49,46,49,32,112,108,117,115,32,77,97,116,104,77,76,32,50,46,48,32,112,108,117,115,32,83,86,71,32,49,46,49,47,47,69,78,0,0,45,47,47,87,51,67,47,47,68,84,68,32,88,72,84,77,76,32,49,46,49,32,112,108,117,115,32,77,97,116,104,77,76,32,50,46,48,47,47,69,78,0,0,0,0,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,88,72,84,77,76,32,66,97,115,105,99,32,49,46,48,47,47,69,78,0,45,47,47,87,51,67,47,47,68,84,68,32,88,72,84,77,76,32,49,46,48,32,70,114,97,109,101,115,101,116,47,47,69,78,0,0,0,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,88,72,84,77,76,32,49,46,48,32,83,116,114,105,99,116,47,47,69,78,0,0,0,0,0,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,88,72,84,77,76,32,49,46,49,47,47,69,78,0,0,0,0,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,88,72,84,77,76,32,49,46,48,32,84,114,97,110,115,105,116,105,111,110,97,108,47,47,69,78,0,0,85,84,70,45,49,54,76,69,0,0,0,0,0,0,0,0,120,109,108,110,115,0,0,0,120,109,108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,228,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
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
  var __ZN7WebCore9HTMLNames11templateTagE=env.__ZN7WebCore9HTMLNames11templateTagE|0;
  var _xmlMalloc=env._xmlMalloc|0;
  var __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE=env.__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var __ZN7WebCore22XMLDocumentParserScope27currentCachedResourceLoaderE=env.__ZN7WebCore22XMLDocumentParserScope27currentCachedResourceLoaderE|0;
  var __ZN3WTF9emptyAtomE=env.__ZN3WTF9emptyAtomE|0;
  var __ZN7WebCore7anyNameE=env.__ZN7WebCore7anyNameE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZN3WTF9xmlnsAtomE=env.__ZN3WTF9xmlnsAtomE|0;
  var _xmlFree=env._xmlFree|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore16PendingCallbacks36PendingProcessingInstructionCallbackE=(H_BASE+856)|0;
  var __ZTVN7WebCore16PendingCallbacks25PendingCharactersCallbackE=(H_BASE+984)|0;
  var __ZTVN7WebCore16PendingCallbacks29PendingInternalSubsetCallbackE=(H_BASE+920)|0;
  var __ZTVN7WebCore16PendingCallbacks29PendingStartElementNSCallbackE=(H_BASE+888)|0;
  var __ZTVN7WebCore17XMLDocumentParserE=(H_BASE+720)|0;
  var __ZTVN3JSC20StringSourceProviderE=(H_BASE+1112)|0;
  var __ZTVN7WebCore16PendingCallbacks27PendingEndElementNSCallbackE=(H_BASE+952)|0;
  var __ZTVN7WebCore16PendingCallbacks22PendingCommentCallbackE=(H_BASE+1048)|0;
  var __ZTVN7WebCore16PendingCallbacks25PendingCDATABlockCallbackE=(H_BASE+1016)|0;
  var __ZTVN7WebCore16PendingCallbacks20PendingErrorCallbackE=(H_BASE+1080)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _strncmp=env._strncmp;
  var _llvm_va_end=env._llvm_va_end;
  var _malloc=env._malloc;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _vasprintf=env._vasprintf;
  var _snprintf=env._snprintf;
  var ___setErrNo=env.___setErrNo;
  var _asprintf=env._asprintf;
  var __reallyNegative=env.__reallyNegative;
  var __formatString=env.__formatString;
  var _free=env._free;
  var _strcmp=env._strcmp;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _sprintf=env._sprintf;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17XMLDocumentParser14startElementNsEPKhS2_S2_iPS2_iiS3_(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 216 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = i10 + 16 | 0;
 i14 = i10 + 24 | 0;
 i15 = i10 + 32 | 0;
 i16 = i10 + 40 | 0;
 i17 = i10 + 48 | 0;
 i18 = i10 + 64 | 0;
 i19 = i10 + 72 | 0;
 i20 = i10 + 80 | 0;
 i21 = i10 + 88 | 0;
 i22 = i10 + 96 | 0;
 i23 = i10 + 104 | 0;
 i24 = i10 + 112 | 0;
 i25 = i10 + 120 | 0;
 i26 = i10 + 128 | 0;
 i27 = i10 + 136 | 0;
 i28 = i10 + 144 | 0;
 i29 = i10 + 152 | 0;
 i30 = i10 + 160 | 0;
 i31 = i10 + 168 | 0;
 i32 = i10 + 176 | 0;
 i33 = i10 + 184 | 0;
 i34 = i10 + 200 | 0;
 i35 = i10 + 208 | 0;
 i36 = i35;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 if ((HEAP32[i1 + 8 >> 2] | 0) > 1) {
  STACKTOP = i10;
  return;
 }
 if ((HEAP8[i1 + 165 | 0] & 1) != 0) {
  __ZN7WebCore16PendingCallbacks28appendStartElementNSCallbackEPKhS2_S2_iPS2_iiS3_(HEAP32[i1 + 116 >> 2] | 0, i2, i3, i4, i5, i6, i7, i8, i9);
  STACKTOP = i10;
  return;
 }
 __ZN7WebCore17XMLDocumentParser8exitTextEv(i1);
 do {
  if ((i2 | 0) == 0) {
   i8 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
   HEAP32[i28 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   i38 = i8 | 0;
   HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
  } else {
   if ((HEAP8[i2] | 0) != 0) {
    __ZN3WTF12AtomicString16fromUTF8InternalEPKcS2_(i28, i2, 0);
    break;
   }
   i38 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
   HEAP32[i28 >> 2] = i38;
   if ((i38 | 0) == 0) {
    break;
   }
   i8 = i38 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
 } while (0);
 do {
  if ((i4 | 0) == 0) {
   i2 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
   HEAP32[i29 >> 2] = i2;
   if ((i2 | 0) == 0) {
    break;
   }
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  } else {
   if ((HEAP8[i4] | 0) != 0) {
    __ZN3WTF12AtomicString16fromUTF8InternalEPKcS2_(i29, i4, 0);
    break;
   }
   i8 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
   HEAP32[i29 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   i2 = i8 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  }
 } while (0);
 do {
  if ((i3 | 0) == 0) {
   i4 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
   HEAP32[i30 >> 2] = i4;
   if ((i4 | 0) == 0) {
    break;
   }
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  } else {
   if ((HEAP8[i3] | 0) != 0) {
    __ZN3WTF12AtomicString16fromUTF8InternalEPKcS2_(i30, i3, 0);
    break;
   }
   i2 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
   HEAP32[i30 >> 2] = i2;
   if ((i2 | 0) == 0) {
    break;
   }
   i4 = i2 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  }
 } while (0);
 i3 = i1 + 188 | 0;
 L35 : do {
  if ((HEAP8[i3] & 1) != 0) {
   i4 = i29 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    break;
   }
   i2 = HEAP32[i30 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i8 = HEAP32[i1 + 192 >> 2] | 0;
    if ((i8 | 0) == 0) {
     HEAP32[i4 >> 2] = i8;
     break;
    }
    i38 = i8 | 0;
    HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
    i38 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = i8;
    if ((i38 | 0) == 0) {
     break;
    }
    i8 = i38 | 0;
    i39 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i39 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i38);
     break;
    } else {
     HEAP32[i8 >> 2] = i39;
     break;
    }
   }
   i39 = HEAP32[i1 + 204 >> 2] | 0;
   i8 = HEAP32[i1 + 196 >> 2] | 0;
   i38 = HEAP32[i2 + 16 >> 2] | 0;
   i40 = i38 >>> 7;
   L48 : do {
    if ((i8 | 0) != 0) {
     i41 = (i38 >>> 30) + ~i40 | 0;
     i42 = i41 << 12 ^ i41;
     i41 = i42 >>> 7 ^ i42;
     i42 = i41 << 2 ^ i41;
     i41 = i42 >>> 20 ^ i42 | 1;
     i42 = i40;
     i43 = 0;
     while (1) {
      i44 = i42 & i39;
      i45 = i8 + (i44 << 3) | 0;
      i46 = HEAP32[i45 >> 2] | 0;
      i47 = i46;
      if ((i47 | 0) == 0) {
       break L48;
      } else if ((i47 | 0) != (-1 | 0)) {
       if ((i46 | 0) == (i2 | 0)) {
        break;
       }
      }
      i46 = (i43 | 0) == 0 ? i41 : i43;
      i42 = i46 + i44 | 0;
      i43 = i46;
     }
     if ((i45 | 0) == 0) {
      break;
     }
     i43 = HEAP32[i8 + (i44 << 3) + 4 >> 2] | 0;
     if ((i43 | 0) == 0) {
      break;
     }
     i42 = i43 | 0;
     HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
     i42 = HEAP32[i4 >> 2] | 0;
     HEAP32[i4 >> 2] = i43;
     if ((i42 | 0) == 0) {
      break L35;
     }
     i43 = i42 | 0;
     i41 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
     if ((i41 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i42);
      break L35;
     } else {
      HEAP32[i43 >> 2] = i41;
      break L35;
     }
    }
   } while (0);
   HEAP32[i4 >> 2] = 0;
  }
 } while (0);
 i44 = i1 + 163 | 0;
 i45 = HEAP8[i44] | 0;
 HEAP8[i44] = 1;
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i31, i30, i28, i29);
 i44 = i1 + 140 | 0;
 __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i32, HEAP32[(HEAP32[(HEAP32[i44 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i31, 1);
 i8 = i32 | 0;
 i32 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 do {
  if ((i32 | 0) == 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 127](i1);
  } else {
   i8 = i33 | 0;
   HEAP32[i8 >> 2] = 0;
   i2 = i33 + 4 | 0;
   HEAP32[i2 >> 2] = 0;
   i39 = i33 + 8 | 0;
   HEAP32[i39 >> 2] = 0;
   HEAP32[i34 >> 2] = 0;
   i40 = i6;
   L67 : do {
    if ((i5 | 0) > 0) {
     i38 = i21 | 0;
     i41 = i22 | 0;
     i43 = i26 | 0;
     i42 = i27 | 0;
     i46 = i27 + 4 | 0;
     i47 = i27 | 0;
     i48 = i25 | 0;
     i49 = i24 | 0;
     i50 = i24 + 4 | 0;
     i51 = i23 | 0;
     i52 = 0;
     while (1) {
      i53 = HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0;
      HEAP32[i38 >> 2] = i53;
      if ((i53 | 0) != 0) {
       i54 = i53 | 0;
       HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 2;
      }
      i54 = HEAP32[i40 + (i52 << 3) + 4 >> 2] | 0;
      do {
       if ((i54 | 0) == 0) {
        i53 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
        HEAP32[i41 >> 2] = i53;
        if ((i53 | 0) == 0) {
         break;
        }
        i55 = i53 | 0;
        HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 2;
       } else {
        if ((HEAP8[i54] | 0) != 0) {
         __ZN3WTF12AtomicString16fromUTF8InternalEPKcS2_(i22, i54, 0);
         break;
        }
        i55 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
        HEAP32[i41 >> 2] = i55;
        if ((i55 | 0) == 0) {
         break;
        }
        i53 = i55 | 0;
        HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 2;
       }
      } while (0);
      i54 = HEAP32[i40 + (i52 << 3) >> 2] | 0;
      do {
       if ((i54 | 0) != 0) {
        __ZN3WTF6String8fromUTF8EPKh(i25, i54);
        i53 = HEAP32[i48 >> 2] | 0;
        do {
         if ((i53 | 0) == 0) {
          HEAP32[i49 >> 2] = H_BASE + 232;
          HEAP32[i50 >> 2] = 0;
         } else {
          i55 = i53 | 0;
          i56 = HEAP32[i55 >> 2] | 0;
          i57 = i56 + 2 | 0;
          HEAP32[i49 >> 2] = H_BASE + 232;
          HEAP32[i50 >> 2] = i53;
          HEAP32[i55 >> 2] = i56 + 4;
          if ((i57 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i53);
           break;
          } else {
           HEAP32[i55 >> 2] = i57;
           break;
          }
         }
        } while (0);
        __ZNK3WTF12StringAppendIPKcNS_6StringEEcvNS_12AtomicStringEEv(i23, i24);
        i53 = HEAP32[i51 >> 2] | 0;
        HEAP32[i51 >> 2] = 0;
        i57 = HEAP32[i38 >> 2] | 0;
        HEAP32[i38 >> 2] = i53;
        do {
         if ((i57 | 0) != 0) {
          i53 = i57 | 0;
          i55 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
          if ((i55 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i57);
           break;
          } else {
           HEAP32[i53 >> 2] = i55;
           break;
          }
         }
        } while (0);
        i57 = HEAP32[i50 >> 2] | 0;
        do {
         if ((i57 | 0) != 0) {
          i55 = i57 | 0;
          i53 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
          if ((i53 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i57);
           break;
          } else {
           HEAP32[i55 >> 2] = i53;
           break;
          }
         }
        } while (0);
        i57 = HEAP32[i48 >> 2] | 0;
        if ((i57 | 0) == 0) {
         break;
        }
        i53 = i57 | 0;
        i55 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
        if ((i55 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i57);
         break;
        } else {
         HEAP32[i53 >> 2] = i55;
         break;
        }
       }
      } while (0);
      i54 = HEAP32[__ZN7WebCore7anyNameE >> 2] | 0;
      HEAP32[i43 >> 2] = i54;
      i55 = i54 | 0;
      HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
      if (!(__ZN7WebCore7Element18parseAttributeNameERNS_13QualifiedNameERKN3WTF12AtomicStringES6_Ri(i26, __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE, i21, i34) | 0)) {
       break;
      }
      i55 = HEAP32[i43 >> 2] | 0;
      HEAP32[i42 >> 2] = i55;
      i54 = i55 | 0;
      HEAP32[i54 >> 2] = (HEAP32[i54 >> 2] | 0) + 1;
      i54 = HEAP32[i41 >> 2] | 0;
      HEAP32[i46 >> 2] = i54;
      if ((i54 | 0) != 0) {
       i55 = i54 | 0;
       HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 2;
      }
      i55 = HEAP32[i39 >> 2] | 0;
      if ((i55 | 0) == (HEAP32[i2 >> 2] | 0)) {
       __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i33, i27);
      } else {
       i54 = HEAP32[i8 >> 2] | 0;
       i53 = HEAP32[i42 >> 2] | 0;
       HEAP32[i54 + (i55 << 3) >> 2] = i53;
       i57 = i53 | 0;
       HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 1;
       i57 = HEAP32[i46 >> 2] | 0;
       HEAP32[i54 + (i55 << 3) + 4 >> 2] = i57;
       if ((i57 | 0) != 0) {
        i55 = i57 | 0;
        HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 2;
       }
       HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
      }
      i55 = HEAP32[i46 >> 2] | 0;
      do {
       if ((i55 | 0) != 0) {
        i57 = i55 | 0;
        i54 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
        if ((i54 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i55);
         break;
        } else {
         HEAP32[i57 >> 2] = i54;
         break;
        }
       }
      } while (0);
      __ZN7WebCore13QualifiedNameD1Ev(i47);
      __ZN7WebCore13QualifiedNameD1Ev(i26);
      i55 = HEAP32[i41 >> 2] | 0;
      do {
       if ((i55 | 0) != 0) {
        i54 = i55 | 0;
        i57 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
        if ((i57 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i55);
         break;
        } else {
         HEAP32[i54 >> 2] = i57;
         break;
        }
       }
      } while (0);
      i55 = HEAP32[i38 >> 2] | 0;
      do {
       if ((i55 | 0) != 0) {
        i57 = i55 | 0;
        i54 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
        if ((i54 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i55);
         break;
        } else {
         HEAP32[i57 >> 2] = i54;
         break;
        }
       }
      } while (0);
      i52 = i52 + 1 | 0;
      if ((i52 | 0) >= (i5 | 0)) {
       break L67;
      }
     }
     __ZN7WebCore13QualifiedNameD1Ev(i26);
     i52 = HEAP32[i41 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i47 = i52 | 0;
       i46 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
       if ((i46 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i52);
        break;
       } else {
        HEAP32[i47 >> 2] = i46;
        break;
       }
      }
     } while (0);
     i52 = HEAP32[i38 >> 2] | 0;
     if ((i52 | 0) == 0) {
      break;
     }
     i41 = i52 | 0;
     i46 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
     if ((i46 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i52);
      break;
     } else {
      HEAP32[i41 >> 2] = i46;
      break;
     }
    }
   } while (0);
   do {
    if ((HEAP32[i34 >> 2] | 0) == 0) {
     i40 = i9;
     i4 = i13 | 0;
     i46 = i14 | 0;
     i41 = i15 | 0;
     i52 = i16 | 0;
     i47 = i19 | 0;
     i42 = i20 | 0;
     i43 = i20 + 4 | 0;
     i48 = i20 | 0;
     i50 = i18 | 0;
     i51 = i17 | 0;
     i49 = i17 + 4 | 0;
     i55 = i17 + 8 | 0;
     i54 = i12 | 0;
     i57 = i11 | 0;
     i53 = 0;
     while (1) {
      if ((i53 | 0) >= (i7 | 0)) {
       break;
      }
      i56 = i40 + (i53 * 20 & -1) | 0;
      i58 = HEAP32[i40 + (i53 * 20 & -1) + 16 >> 2] | 0;
      i59 = HEAP32[i40 + (i53 * 20 & -1) + 12 >> 2] | 0;
      i60 = i58 - i59 | 0;
      do {
       if ((i59 | 0) == 0) {
        i61 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
        HEAP32[i4 >> 2] = i61;
        if ((i61 | 0) == 0) {
         break;
        }
        i62 = i61 | 0;
        HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 2;
       } else {
        if ((i58 | 0) != (i59 | 0)) {
         __ZN3WTF12AtomicString16fromUTF8InternalEPKcS2_(i13, i59, i59 + i60 | 0);
         break;
        }
        i62 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
        HEAP32[i4 >> 2] = i62;
        if ((i62 | 0) == 0) {
         break;
        }
        i61 = i62 | 0;
        HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
       }
      } while (0);
      __ZN3WTF6String8fromUTF8EPKh(i14, HEAP32[i40 + (i53 * 20 & -1) + 4 >> 2] | 0);
      i60 = HEAP32[i46 >> 2] | 0;
      do {
       if ((i60 | 0) == 0) {
        i63 = 121;
       } else {
        if ((HEAP32[i60 + 4 >> 2] | 0) == 0) {
         i63 = 121;
         break;
        }
        i59 = HEAP32[i40 + (i53 * 20 & -1) + 8 >> 2] | 0;
        if ((i59 | 0) == 0) {
         i58 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
         HEAP32[i41 >> 2] = i58;
         if ((i58 | 0) == 0) {
          break;
         }
         i61 = i58 | 0;
         HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
         break;
        }
        if ((HEAP8[i59] | 0) != 0) {
         __ZN3WTF12AtomicString16fromUTF8InternalEPKcS2_(i15, i59, 0);
         break;
        }
        i59 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
        HEAP32[i41 >> 2] = i59;
        if ((i59 | 0) == 0) {
         break;
        }
        i61 = i59 | 0;
        HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
       }
      } while (0);
      if ((i63 | 0) == 121) {
       i63 = 0;
       HEAP32[i41 >> 2] = 0;
      }
      i60 = HEAP32[i46 >> 2] | 0;
      do {
       if ((i60 | 0) == 0) {
        i63 = 131;
       } else {
        if ((HEAP32[i60 + 4 >> 2] | 0) == 0) {
         i63 = 131;
         break;
        }
        i61 = i60 | 0;
        i59 = HEAP32[i61 >> 2] | 0;
        i58 = i59 + 2 | 0;
        HEAP32[i61 >> 2] = i59 + 4;
        if ((i58 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i60);
        } else {
         HEAP32[i61 >> 2] = i58;
        }
        __ZN3WTF6String8fromUTF8EPKh(i18, HEAP32[i56 >> 2] | 0);
        HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
        i58 = HEAP32[i50 >> 2] | 0;
        do {
         if ((i58 | 0) == 0) {
          HEAP32[i51 >> 2] = i60;
          HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
          HEAP32[i49 >> 2] = H_BASE + 8;
          HEAP32[i55 >> 2] = i58;
         } else {
          i59 = i58 | 0;
          HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 2;
          HEAP32[i51 >> 2] = i60;
          HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
          HEAP32[i49 >> 2] = H_BASE + 8;
          HEAP32[i55 >> 2] = i58;
          i59 = i58 | 0;
          i62 = HEAP32[i59 >> 2] | 0;
          HEAP32[i59 >> 2] = i62 + 2;
          if ((i62 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i58);
           break;
          } else {
           HEAP32[i59 >> 2] = i62;
           break;
          }
         }
        } while (0);
        i58 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
        if ((i58 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i60);
        } else {
         HEAP32[i61 >> 2] = i58;
        }
        __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i12, i17);
        i58 = HEAP32[i54 >> 2] | 0;
        do {
         if ((i58 | 0) == 0) {
          HEAP32[i57 >> 2] = 0;
          HEAP32[i52 >> 2] = 0;
         } else {
          if ((HEAP32[i58 + 16 >> 2] & 16 | 0) == 0) {
           __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i11, i58);
           HEAP32[i52 >> 2] = HEAP32[i57 >> 2];
           i64 = i58 | 0;
          } else {
           HEAP32[i57 >> 2] = i58;
           i62 = i58 | 0;
           HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 2;
           HEAP32[i52 >> 2] = HEAP32[i57 >> 2];
           i64 = i62;
          }
          i62 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
          if ((i62 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i58);
           break;
          } else {
           HEAP32[i64 >> 2] = i62;
           break;
          }
         }
        } while (0);
        i58 = HEAP32[i55 >> 2] | 0;
        do {
         if ((i58 | 0) != 0) {
          i62 = i58 | 0;
          i59 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
          if ((i59 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i58);
           break;
          } else {
           HEAP32[i62 >> 2] = i59;
           break;
          }
         }
        } while (0);
        i58 = HEAP32[i51 >> 2] | 0;
        do {
         if ((i58 | 0) != 0) {
          i59 = i58 | 0;
          i62 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
          if ((i62 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i58);
           break;
          } else {
           HEAP32[i59 >> 2] = i62;
           break;
          }
         }
        } while (0);
        i58 = HEAP32[i50 >> 2] | 0;
        do {
         if ((i58 | 0) != 0) {
          i62 = i58 | 0;
          i59 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
          if ((i59 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i58);
           break;
          } else {
           HEAP32[i62 >> 2] = i59;
           break;
          }
         }
        } while (0);
        i58 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
        if ((i58 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i60);
         break;
        } else {
         HEAP32[i61 >> 2] = i58;
         break;
        }
       }
      } while (0);
      do {
       if ((i63 | 0) == 131) {
        i63 = 0;
        i60 = HEAP32[i56 >> 2] | 0;
        if ((i60 | 0) == 0) {
         i58 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
         HEAP32[i52 >> 2] = i58;
         if ((i58 | 0) == 0) {
          break;
         }
         i59 = i58 | 0;
         HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 2;
         break;
        }
        if ((HEAP8[i60] | 0) != 0) {
         __ZN3WTF12AtomicString16fromUTF8InternalEPKcS2_(i16, i60, 0);
         break;
        }
        i60 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
        HEAP32[i52 >> 2] = i60;
        if ((i60 | 0) == 0) {
         break;
        }
        i59 = i60 | 0;
        HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 2;
       }
      } while (0);
      i56 = HEAP32[__ZN7WebCore7anyNameE >> 2] | 0;
      HEAP32[i47 >> 2] = i56;
      i59 = i56 | 0;
      HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
      if (__ZN7WebCore7Element18parseAttributeNameERNS_13QualifiedNameERKN3WTF12AtomicStringES6_Ri(i19, i15, i16, i34) | 0) {
       i59 = HEAP32[i47 >> 2] | 0;
       HEAP32[i42 >> 2] = i59;
       i56 = i59 | 0;
       HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 1;
       i56 = HEAP32[i4 >> 2] | 0;
       HEAP32[i43 >> 2] = i56;
       if ((i56 | 0) != 0) {
        i59 = i56 | 0;
        HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 2;
       }
       i59 = HEAP32[i39 >> 2] | 0;
       if ((i59 | 0) == (HEAP32[i2 >> 2] | 0)) {
        __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i33, i20);
       } else {
        i56 = HEAP32[i8 >> 2] | 0;
        i60 = HEAP32[i42 >> 2] | 0;
        HEAP32[i56 + (i59 << 3) >> 2] = i60;
        i58 = i60 | 0;
        HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 1;
        i58 = HEAP32[i43 >> 2] | 0;
        HEAP32[i56 + (i59 << 3) + 4 >> 2] = i58;
        if ((i58 | 0) != 0) {
         i59 = i58 | 0;
         HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 2;
        }
        HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
       }
       i59 = HEAP32[i43 >> 2] | 0;
       do {
        if ((i59 | 0) != 0) {
         i58 = i59 | 0;
         i56 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
         if ((i56 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i59);
          break;
         } else {
          HEAP32[i58 >> 2] = i56;
          break;
         }
        }
       } while (0);
       __ZN7WebCore13QualifiedNameD1Ev(i48);
       i65 = 0;
      } else {
       i65 = 1;
      }
      __ZN7WebCore13QualifiedNameD1Ev(i19);
      i59 = HEAP32[i52 >> 2] | 0;
      do {
       if ((i59 | 0) != 0) {
        i56 = i59 | 0;
        i58 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
        if ((i58 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i59);
         break;
        } else {
         HEAP32[i56 >> 2] = i58;
         break;
        }
       }
      } while (0);
      i59 = HEAP32[i41 >> 2] | 0;
      do {
       if ((i59 | 0) != 0) {
        i58 = i59 | 0;
        i56 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
        if ((i56 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i59);
         break;
        } else {
         HEAP32[i58 >> 2] = i56;
         break;
        }
       }
      } while (0);
      i59 = HEAP32[i46 >> 2] | 0;
      do {
       if ((i59 | 0) != 0) {
        i56 = i59 | 0;
        i58 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
        if ((i58 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i59);
         break;
        } else {
         HEAP32[i56 >> 2] = i58;
         break;
        }
       }
      } while (0);
      i59 = HEAP32[i4 >> 2] | 0;
      do {
       if ((i59 | 0) != 0) {
        i58 = i59 | 0;
        i56 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
        if ((i56 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i59);
         break;
        } else {
         HEAP32[i58 >> 2] = i56;
         break;
        }
       }
      } while (0);
      if ((i65 | 0) == 1) {
       break;
      } else {
       i53 = i53 + 1 | 0;
      }
     }
     if (((HEAP32[i1 + 24 >> 2] | 0) - 2 | 0) >>> 0 >= 2 >>> 0) {
      __ZNK7WebCore7Element24stripScriptingAttributesERN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i32, i33);
     }
     __ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i32, i33);
     if ((HEAP32[i34 >> 2] | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 127](i1);
      break;
     }
     __ZN7WebCore7Element20beginParsingChildrenEv(i32);
     if ((__ZN7WebCore25toScriptElementIfPossibleEPNS_7ElementE(i32) | 0) != 0) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] & 63](i36, i1);
      i53 = i1 + 180 | 0;
      i4 = HEAP32[i35 + 4 >> 2] | 0;
      HEAP32[i53 >> 2] = HEAP32[i35 >> 2];
      HEAP32[i53 + 4 >> 2] = i4;
     }
     i4 = HEAP32[i44 >> 2] | 0;
     i53 = i37 | 0;
     HEAP32[i53 >> 2] = i32;
     i46 = i32 + 8 | 0;
     HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
     __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i4, i37);
     i4 = HEAP32[i53 >> 2] | 0;
     do {
      if ((i4 | 0) != 0) {
       i53 = i4 + 8 | 0;
       i46 = i53 | 0;
       i41 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
       HEAP32[i46 >> 2] = i41;
       if ((i41 | 0) >= 1) {
        break;
       }
       if ((HEAP32[i53 + 8 >> 2] | 0) != 0) {
        break;
       }
       __ZN7WebCore4Node14removedLastRefEv(i53 - 8 | 0);
      }
     } while (0);
     if ((HEAP32[i44 >> 2] | 0) == 0) {
      break;
     }
     i4 = i32 + 44 | 0;
     i53 = HEAP32[i4 >> 2] | 0;
     i41 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
     do {
      if ((i53 | 0) == (i41 | 0)) {
       i63 = 216;
      } else {
       if ((HEAP32[i53 + 12 >> 2] | 0) == (HEAP32[i41 + 12 >> 2] | 0)) {
        if ((HEAP32[i53 + 16 >> 2] | 0) == (HEAP32[i41 + 16 >> 2] | 0)) {
         i63 = 216;
         break;
        }
       }
       __ZN7WebCore17XMLDocumentParser15pushCurrentNodeEPNS_13ContainerNodeE(i1, i32 | 0);
      }
     } while (0);
     if ((i63 | 0) == 216) {
      __ZN7WebCore17XMLDocumentParser15pushCurrentNodeEPNS_13ContainerNodeE(i1, __ZNK7WebCore19HTMLTemplateElement7contentEv(i32) | 0);
     }
     i41 = HEAP32[i4 >> 2] | 0;
     i53 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
     do {
      if ((i41 | 0) == (i53 | 0)) {
       i63 = 221;
      } else {
       if ((HEAP32[i41 + 12 >> 2] | 0) != (HEAP32[i53 + 12 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i41 + 16 >> 2] | 0) == (HEAP32[i53 + 16 >> 2] | 0)) {
        i63 = 221;
       }
      }
     } while (0);
     if ((i63 | 0) == 221) {
      __ZN7WebCore15HTMLHtmlElement16insertedByParserEv(i32);
     }
     if (((HEAP8[i3] | i45) & 1) != 0) {
      break;
     }
     i53 = HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 332 >> 2] | 0;
     if ((i53 | 0) == 0) {
      break;
     }
     __ZN7WebCore11FrameLoader32dispatchDocumentElementAvailableEv(i53 + 80 | 0);
    } else {
     if (((HEAP32[i1 + 24 >> 2] | 0) - 2 | 0) >>> 0 >= 2 >>> 0) {
      __ZNK7WebCore7Element24stripScriptingAttributesERN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i32, i33);
     }
     __ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i32, i33);
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 127](i1);
    }
   } while (0);
   i53 = HEAP32[i39 >> 2] | 0;
   if ((i53 | 0) != 0) {
    i41 = HEAP32[i8 >> 2] | 0;
    i4 = i41 + (i53 << 3) | 0;
    i53 = i41;
    while (1) {
     i41 = HEAP32[i53 + 4 >> 2] | 0;
     do {
      if ((i41 | 0) != 0) {
       i46 = i41 | 0;
       i52 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
       if ((i52 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i41);
        break;
       } else {
        HEAP32[i46 >> 2] = i52;
        break;
       }
      }
     } while (0);
     __ZN7WebCore13QualifiedNameD1Ev(i53 | 0);
     i53 = i53 + 8 | 0;
     if ((i53 | 0) == (i4 | 0)) {
      break;
     }
    }
    HEAP32[i39 >> 2] = 0;
   }
   i4 = HEAP32[i8 >> 2] | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i2 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   i4 = i32 + 8 | 0;
   i53 = i4 | 0;
   i41 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
   HEAP32[i53 >> 2] = i41;
   if ((i41 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i31);
 i31 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i30 = i31 | 0;
   i32 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    break;
   } else {
    HEAP32[i30 >> 2] = i32;
    break;
   }
  }
 } while (0);
 i31 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i31 | 0) != 0) {
   i29 = i31 | 0;
   i32 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    break;
   } else {
    HEAP32[i29 >> 2] = i32;
    break;
   }
  }
 } while (0);
 i31 = HEAP32[i28 >> 2] | 0;
 if ((i31 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i28 = i31 | 0;
 i32 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
 if ((i32 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i31);
  STACKTOP = i10;
  return;
 } else {
  HEAP32[i28 >> 2] = i32;
  STACKTOP = i10;
  return;
 }
}
function __ZN7WebCore17XMLDocumentParserC2ERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCore24ScriptableDocumentParserC2ERNS_8DocumentENS_19ParserContentPolicyE(i1 | 0, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0, i4);
 HEAP32[i1 >> 2] = H_BASE + 728;
 HEAP32[i1 + 28 >> 2] = H_BASE + 828;
 HEAP32[i1 + 44 >> 2] = 0;
 i4 = i1 + 32 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP8[i1 + 48 | 0] = 1;
 HEAP8[i1 + 49 | 0] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP16[i1 + 56 >> 1] = 0;
 _memset(i1 + 60 | 0, 0, 33) | 0;
 HEAP8[i1 + 93 | 0] = 1;
 HEAP8[i1 + 94 | 0] = 0;
 i4 = i1 + 96 | 0;
 HEAP32[i4 >> 2] = F_BASE_vi + 2;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i1 + 104 | 0;
 HEAP32[i4 >> 2] = F_BASE_vi + 2;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i1 + 112 >> 2] = 0;
 i4 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i4 | 0, 0, 20) | 0;
 HEAP32[i1 + 116 >> 2] = i4;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 + 128 >> 2] = 0;
 HEAP32[i1 + 132 >> 2] = -1;
 HEAP8[i1 + 136 | 0] = 0;
 HEAP32[i1 + 140 >> 2] = i2;
 _memset(i1 + 144 | 0, 0, 28) | 0;
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 + 172 | 0, 0);
 HEAP32[i1 + 176 >> 2] = 0;
 HEAP32[i1 + 180 >> 2] = -1;
 HEAP32[i1 + 184 >> 2] = -1;
 HEAP8[i1 + 188 | 0] = 1;
 i4 = i1 + 192 | 0;
 HEAP32[i1 + 224 >> 2] = 0;
 _memset(i4 | 0, 0, 28) | 0;
 HEAP8[i1 + 228 | 0] = 1;
 HEAP8[i1 + 229 | 0] = 0;
 HEAP32[i1 + 232 >> 2] = 0;
 HEAP32[i1 + 220 >> 2] = 0;
 HEAP16[i1 + 236 >> 1] = 0;
 _memset(i1 + 240 | 0, 0, 33) | 0;
 HEAP8[i1 + 273 | 0] = 1;
 HEAP8[i1 + 274 | 0] = 0;
 i8 = i1 + 276 | 0;
 HEAP32[i8 >> 2] = F_BASE_vi + 2;
 HEAP32[i8 + 4 >> 2] = 0;
 i8 = i1 + 284 | 0;
 HEAP32[i8 >> 2] = F_BASE_vi + 2;
 HEAP32[i8 + 4 >> 2] = 0;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i6;
 i2 = i3;
 i3 = 0;
 i9 = 0;
 i10 = 0;
 L4 : while (1) {
  if ((i3 | 0) == (i9 | 0)) {
   i11 = i9 + 1 | 0;
   do {
    if (i10 >>> 0 > i6 >>> 0) {
     i12 = 7;
    } else {
     if ((i10 + (i9 << 2) | 0) >>> 0 <= i6 >>> 0) {
      i12 = 7;
      break;
     }
     i13 = i8 - i10 >> 2;
     i14 = i11 + (i9 >>> 2) | 0;
     i15 = i14 >>> 0 > 16 >>> 0 ? i14 : 16;
     i14 = i15 >>> 0 > i11 >>> 0 ? i15 : i11;
     do {
      if (i9 >>> 0 < i14 >>> 0) {
       if (i14 >>> 0 > 1073741823 >>> 0) {
        i12 = 14;
        break L4;
       }
       i15 = __ZN3WTF18fastMallocGoodSizeEj(i14 << 2) | 0;
       i16 = i15 >>> 2;
       i17 = __ZN3WTF10fastMallocEj(i15) | 0;
       i15 = i17;
       i18 = i10;
       _memcpy(i17 | 0, i18 | 0, i9 << 2) | 0;
       if ((i10 | 0) == 0) {
        i19 = i15;
        i20 = i16;
        break;
       }
       i17 = (i15 | 0) == (i10 | 0);
       __ZN3WTF8fastFreeEPv(i18);
       i19 = i17 ? 0 : i15;
       i20 = i17 ? 0 : i16;
      } else {
       i19 = i10;
       i20 = i9;
      }
     } while (0);
     i21 = i19 + (i13 << 2) | 0;
     i22 = i19;
     i23 = i20;
    }
   } while (0);
   do {
    if ((i12 | 0) == 7) {
     i12 = 0;
     i14 = i11 + (i9 >>> 2) | 0;
     i16 = i14 >>> 0 > 16 >>> 0 ? i14 : 16;
     i14 = i16 >>> 0 > i11 >>> 0 ? i16 : i11;
     if (i9 >>> 0 >= i14 >>> 0) {
      i21 = i6;
      i22 = i10;
      i23 = i9;
      break;
     }
     if (i14 >>> 0 > 1073741823 >>> 0) {
      i12 = 9;
      break L4;
     }
     i16 = __ZN3WTF18fastMallocGoodSizeEj(i14 << 2) | 0;
     i14 = i16 >>> 2;
     i17 = __ZN3WTF10fastMallocEj(i16) | 0;
     i16 = i17;
     i15 = i10;
     _memcpy(i17 | 0, i15 | 0, i9 << 2) | 0;
     if ((i10 | 0) == 0) {
      i21 = i6;
      i22 = i16;
      i23 = i14;
      break;
     }
     i17 = (i16 | 0) == (i10 | 0);
     __ZN3WTF8fastFreeEPv(i15);
     i21 = i6;
     i22 = i17 ? 0 : i16;
     i23 = i17 ? 0 : i14;
    }
   } while (0);
   HEAP32[i22 + (i9 << 2) >> 2] = HEAP32[i21 >> 2];
   i24 = i22;
   i25 = i23;
   i26 = i11;
  } else {
   HEAP32[i10 + (i3 << 2) >> 2] = i2;
   i24 = i10;
   i25 = i9;
   i26 = i3 + 1 | 0;
  }
  i14 = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0;
  if ((i14 | 0) == 0) {
   i12 = 22;
   break;
  }
  if ((HEAP32[i14 + 12 >> 2] & 4 | 0) == 0) {
   i12 = 22;
   break;
  }
  i17 = i14;
  HEAP32[i6 >> 2] = i17;
  i2 = i17;
  i3 = i26;
  i9 = i25;
  i10 = i24;
 }
 if ((i12 | 0) == 9) {
  _WTFCrash();
 } else if ((i12 | 0) == 14) {
  _WTFCrash();
 } else if ((i12 | 0) == 22) {
  do {
   if ((i26 | 0) != 0) {
    i10 = i1 + 196 | 0;
    i25 = i7 + 8 | 0;
    i9 = i7 | 0;
    i3 = i26;
    L32 : while (1) {
     if ((i3 | 0) == 0) {
      i12 = 57;
      break;
     }
     i2 = _llvm_uadd_with_overflow_i32(i3 | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i12 = 26;
      break;
     }
     i23 = i2;
     i2 = HEAP32[i24 + (i23 << 2) >> 2] | 0;
     if (!(__ZNK7WebCore7Element13hasAttributesEv(i2) | 0)) {
      i3 = i23;
      continue;
     }
     i22 = i2 + 48 | 0;
     i2 = 0;
     while (1) {
      i21 = HEAP32[i22 >> 2] | 0;
      i20 = HEAP32[i21 + 4 >> 2] | 0;
      i19 = (i20 & 1 | 0) == 0;
      if (i19) {
       i27 = i20 >>> 1 & 134217727;
      } else {
       i27 = HEAP32[i21 + 32 >> 2] | 0;
      }
      if (i2 >>> 0 >= i27 >>> 0) {
       i3 = i23;
       continue L32;
      }
      if (i19) {
       i28 = i20 >>> 1 & 134217727;
      } else {
       i28 = HEAP32[i21 + 32 >> 2] | 0;
      }
      if (i28 >>> 0 <= i2 >>> 0) {
       i12 = 37;
       break L32;
      }
      if (i19) {
       i29 = i21 + 20 | 0;
      } else {
       i29 = HEAP32[i21 + 24 >> 2] | 0;
      }
      i21 = HEAP32[i29 + (i2 << 3) >> 2] | 0;
      i19 = i21 + 12 | 0;
      i20 = HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0;
      do {
       if ((HEAP32[i19 >> 2] | 0) == (i20 | 0)) {
        i8 = HEAP32[i29 + (i2 << 3) + 4 >> 2] | 0;
        if ((i8 | 0) != 0) {
         i17 = i8 | 0;
         HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
        }
        i17 = HEAP32[i4 >> 2] | 0;
        HEAP32[i4 >> 2] = i8;
        if ((i17 | 0) == 0) {
         break;
        }
        i8 = i17 | 0;
        i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
        if ((i14 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i17);
         break;
        } else {
         HEAP32[i8 >> 2] = i14;
         break;
        }
       } else {
        if ((HEAP32[i21 + 8 >> 2] | 0) != (i20 | 0)) {
         break;
        }
        i14 = i29 + (i2 << 3) + 4 | 0;
        __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i7, i10, i19, i14);
        if ((HEAP8[i25] & 1) != 0) {
         break;
        }
        i8 = HEAP32[i9 >> 2] | 0;
        i17 = HEAP32[i14 >> 2] | 0;
        if ((i17 | 0) != 0) {
         i14 = i17 | 0;
         HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
        }
        i14 = i8 + 4 | 0;
        i8 = HEAP32[i14 >> 2] | 0;
        HEAP32[i14 >> 2] = i17;
        if ((i8 | 0) == 0) {
         break;
        }
        i17 = i8 | 0;
        i14 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
        if ((i14 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i8);
         break;
        } else {
         HEAP32[i17 >> 2] = i14;
         break;
        }
       }
      } while (0);
      i2 = i2 + 1 | 0;
     }
    }
    if ((i12 | 0) == 37) {
     _WTFCrash();
    } else if ((i12 | 0) == 26) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i12 | 0) == 57) {
     if ((HEAP32[i4 >> 2] | 0) != 0) {
      break;
     }
     i9 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] | 0) + 16 >> 2] | 0;
     if ((i9 | 0) == 0) {
      HEAP32[i4 >> 2] = i9;
      break;
     }
     i25 = i9 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
     i25 = HEAP32[i4 >> 2] | 0;
     HEAP32[i4 >> 2] = i9;
     if ((i25 | 0) == 0) {
      break;
     }
     i9 = i25 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i9 >> 2] = i10;
      break;
     }
    }
   }
  } while (0);
  if ((i24 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  __ZN3WTF8fastFreeEPv(i24);
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore17XMLDocumentParserC1ERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i6 >> 2] = i3;
 __ZN7WebCore24ScriptableDocumentParserC2ERNS_8DocumentENS_19ParserContentPolicyE(i1 | 0, HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0, i4);
 HEAP32[i1 >> 2] = H_BASE + 728;
 HEAP32[i1 + 28 >> 2] = H_BASE + 828;
 HEAP32[i1 + 44 >> 2] = 0;
 i4 = i1 + 32 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP8[i1 + 48 | 0] = 1;
 HEAP8[i1 + 49 | 0] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP16[i1 + 56 >> 1] = 0;
 _memset(i1 + 60 | 0, 0, 33) | 0;
 HEAP8[i1 + 93 | 0] = 1;
 HEAP8[i1 + 94 | 0] = 0;
 i4 = i1 + 96 | 0;
 HEAP32[i4 >> 2] = F_BASE_vi + 2;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i1 + 104 | 0;
 HEAP32[i4 >> 2] = F_BASE_vi + 2;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i1 + 112 >> 2] = 0;
 i4 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i4 | 0, 0, 20) | 0;
 HEAP32[i1 + 116 >> 2] = i4;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 + 128 >> 2] = 0;
 HEAP32[i1 + 132 >> 2] = -1;
 HEAP8[i1 + 136 | 0] = 0;
 HEAP32[i1 + 140 >> 2] = i2;
 _memset(i1 + 144 | 0, 0, 28) | 0;
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 + 172 | 0, 0);
 HEAP32[i1 + 176 >> 2] = 0;
 HEAP32[i1 + 180 >> 2] = -1;
 HEAP32[i1 + 184 >> 2] = -1;
 HEAP8[i1 + 188 | 0] = 1;
 i4 = i1 + 192 | 0;
 HEAP32[i1 + 224 >> 2] = 0;
 _memset(i4 | 0, 0, 28) | 0;
 HEAP8[i1 + 228 | 0] = 1;
 HEAP8[i1 + 229 | 0] = 0;
 HEAP32[i1 + 232 >> 2] = 0;
 HEAP32[i1 + 220 >> 2] = 0;
 HEAP16[i1 + 236 >> 1] = 0;
 _memset(i1 + 240 | 0, 0, 33) | 0;
 HEAP8[i1 + 273 | 0] = 1;
 HEAP8[i1 + 274 | 0] = 0;
 i8 = i1 + 276 | 0;
 HEAP32[i8 >> 2] = F_BASE_vi + 2;
 HEAP32[i8 + 4 >> 2] = 0;
 i8 = i1 + 284 | 0;
 HEAP32[i8 >> 2] = F_BASE_vi + 2;
 HEAP32[i8 + 4 >> 2] = 0;
 i8 = i2 + 8 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i6;
 i2 = i3;
 i3 = 0;
 i9 = 0;
 i10 = 0;
 L4 : while (1) {
  if ((i3 | 0) == (i9 | 0)) {
   i11 = i9 + 1 | 0;
   do {
    if (i10 >>> 0 > i6 >>> 0) {
     i12 = 7;
    } else {
     if ((i10 + (i9 << 2) | 0) >>> 0 <= i6 >>> 0) {
      i12 = 7;
      break;
     }
     i13 = i8 - i10 >> 2;
     i14 = i11 + (i9 >>> 2) | 0;
     i15 = i14 >>> 0 > 16 >>> 0 ? i14 : 16;
     i14 = i15 >>> 0 > i11 >>> 0 ? i15 : i11;
     do {
      if (i9 >>> 0 < i14 >>> 0) {
       if (i14 >>> 0 > 1073741823 >>> 0) {
        i12 = 14;
        break L4;
       }
       i15 = __ZN3WTF18fastMallocGoodSizeEj(i14 << 2) | 0;
       i16 = i15 >>> 2;
       i17 = __ZN3WTF10fastMallocEj(i15) | 0;
       i15 = i17;
       i18 = i10;
       _memcpy(i17 | 0, i18 | 0, i9 << 2) | 0;
       if ((i10 | 0) == 0) {
        i19 = i15;
        i20 = i16;
        break;
       }
       i17 = (i15 | 0) == (i10 | 0);
       __ZN3WTF8fastFreeEPv(i18);
       i19 = i17 ? 0 : i15;
       i20 = i17 ? 0 : i16;
      } else {
       i19 = i10;
       i20 = i9;
      }
     } while (0);
     i21 = i19 + (i13 << 2) | 0;
     i22 = i19;
     i23 = i20;
    }
   } while (0);
   do {
    if ((i12 | 0) == 7) {
     i12 = 0;
     i14 = i11 + (i9 >>> 2) | 0;
     i16 = i14 >>> 0 > 16 >>> 0 ? i14 : 16;
     i14 = i16 >>> 0 > i11 >>> 0 ? i16 : i11;
     if (i9 >>> 0 >= i14 >>> 0) {
      i21 = i6;
      i22 = i10;
      i23 = i9;
      break;
     }
     if (i14 >>> 0 > 1073741823 >>> 0) {
      i12 = 9;
      break L4;
     }
     i16 = __ZN3WTF18fastMallocGoodSizeEj(i14 << 2) | 0;
     i14 = i16 >>> 2;
     i17 = __ZN3WTF10fastMallocEj(i16) | 0;
     i16 = i17;
     i15 = i10;
     _memcpy(i17 | 0, i15 | 0, i9 << 2) | 0;
     if ((i10 | 0) == 0) {
      i21 = i6;
      i22 = i16;
      i23 = i14;
      break;
     }
     i17 = (i16 | 0) == (i10 | 0);
     __ZN3WTF8fastFreeEPv(i15);
     i21 = i6;
     i22 = i17 ? 0 : i16;
     i23 = i17 ? 0 : i14;
    }
   } while (0);
   HEAP32[i22 + (i9 << 2) >> 2] = HEAP32[i21 >> 2];
   i24 = i22;
   i25 = i23;
   i26 = i11;
  } else {
   HEAP32[i10 + (i3 << 2) >> 2] = i2;
   i24 = i10;
   i25 = i9;
   i26 = i3 + 1 | 0;
  }
  i14 = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0;
  if ((i14 | 0) == 0) {
   i12 = 22;
   break;
  }
  if ((HEAP32[i14 + 12 >> 2] & 4 | 0) == 0) {
   i12 = 22;
   break;
  }
  i17 = i14;
  HEAP32[i6 >> 2] = i17;
  i2 = i17;
  i3 = i26;
  i9 = i25;
  i10 = i24;
 }
 if ((i12 | 0) == 9) {
  _WTFCrash();
 } else if ((i12 | 0) == 14) {
  _WTFCrash();
 } else if ((i12 | 0) == 22) {
  do {
   if ((i26 | 0) != 0) {
    i10 = i1 + 196 | 0;
    i25 = i7 + 8 | 0;
    i9 = i7 | 0;
    i3 = i26;
    L32 : while (1) {
     if ((i3 | 0) == 0) {
      i12 = 57;
      break;
     }
     i2 = _llvm_uadd_with_overflow_i32(i3 | 0, -1 | 0) | 0;
     if (!tempRet0) {
      i12 = 26;
      break;
     }
     i23 = i2;
     i2 = HEAP32[i24 + (i23 << 2) >> 2] | 0;
     if (!(__ZNK7WebCore7Element13hasAttributesEv(i2) | 0)) {
      i3 = i23;
      continue;
     }
     i22 = i2 + 48 | 0;
     i2 = 0;
     while (1) {
      i21 = HEAP32[i22 >> 2] | 0;
      i20 = HEAP32[i21 + 4 >> 2] | 0;
      i19 = (i20 & 1 | 0) == 0;
      if (i19) {
       i27 = i20 >>> 1 & 134217727;
      } else {
       i27 = HEAP32[i21 + 32 >> 2] | 0;
      }
      if (i2 >>> 0 >= i27 >>> 0) {
       i3 = i23;
       continue L32;
      }
      if (i19) {
       i28 = i20 >>> 1 & 134217727;
      } else {
       i28 = HEAP32[i21 + 32 >> 2] | 0;
      }
      if (i28 >>> 0 <= i2 >>> 0) {
       i12 = 37;
       break L32;
      }
      if (i19) {
       i29 = i21 + 20 | 0;
      } else {
       i29 = HEAP32[i21 + 24 >> 2] | 0;
      }
      i21 = HEAP32[i29 + (i2 << 3) >> 2] | 0;
      i19 = i21 + 12 | 0;
      i20 = HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0;
      do {
       if ((HEAP32[i19 >> 2] | 0) == (i20 | 0)) {
        i8 = HEAP32[i29 + (i2 << 3) + 4 >> 2] | 0;
        if ((i8 | 0) != 0) {
         i17 = i8 | 0;
         HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
        }
        i17 = HEAP32[i4 >> 2] | 0;
        HEAP32[i4 >> 2] = i8;
        if ((i17 | 0) == 0) {
         break;
        }
        i8 = i17 | 0;
        i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
        if ((i14 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i17);
         break;
        } else {
         HEAP32[i8 >> 2] = i14;
         break;
        }
       } else {
        if ((HEAP32[i21 + 8 >> 2] | 0) != (i20 | 0)) {
         break;
        }
        i14 = i29 + (i2 << 3) + 4 | 0;
        __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i7, i10, i19, i14);
        if ((HEAP8[i25] & 1) != 0) {
         break;
        }
        i8 = HEAP32[i9 >> 2] | 0;
        i17 = HEAP32[i14 >> 2] | 0;
        if ((i17 | 0) != 0) {
         i14 = i17 | 0;
         HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
        }
        i14 = i8 + 4 | 0;
        i8 = HEAP32[i14 >> 2] | 0;
        HEAP32[i14 >> 2] = i17;
        if ((i8 | 0) == 0) {
         break;
        }
        i17 = i8 | 0;
        i14 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
        if ((i14 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i8);
         break;
        } else {
         HEAP32[i17 >> 2] = i14;
         break;
        }
       }
      } while (0);
      i2 = i2 + 1 | 0;
     }
    }
    if ((i12 | 0) == 37) {
     _WTFCrash();
    } else if ((i12 | 0) == 26) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i12 | 0) == 57) {
     if ((HEAP32[i4 >> 2] | 0) != 0) {
      break;
     }
     i9 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] | 0) + 16 >> 2] | 0;
     if ((i9 | 0) == 0) {
      HEAP32[i4 >> 2] = i9;
      break;
     }
     i25 = i9 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
     i25 = HEAP32[i4 >> 2] | 0;
     HEAP32[i4 >> 2] = i9;
     if ((i25 | 0) == 0) {
      break;
     }
     i9 = i25 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i9 >> 2] = i10;
      break;
     }
    }
   }
  } while (0);
  if ((i24 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  __ZN3WTF8fastFreeEPv(i24);
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore17XMLDocumentParser12endElementNsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 88 | 0;
 i6 = i2 + 96 | 0;
 i7 = i1 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) > 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i1 + 165 | 0] & 1) != 0) {
  i8 = HEAP32[i1 + 116 >> 2] | 0;
  i9 = i8 | 0;
  i10 = __Znwj(4) | 0;
  HEAP32[i10 >> 2] = H_BASE + 960;
  i11 = HEAP32[i8 >> 2] | 0;
  i12 = i8 + 4 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i11 | 0) == 0) {
    i14 = HEAP32[i8 + 12 >> 2] | 0;
    if ((i13 | 0) == 0) {
     if ((i14 | 0) == 0) {
      i15 = 8;
      break;
     } else {
      i16 = 0;
      break;
     }
    } else {
     if ((i13 | 0) == (i14 - 1 | 0)) {
      i15 = 8;
      break;
     } else {
      i16 = i13;
      break;
     }
    }
   } else {
    if ((i13 + 1 | 0) == (i11 | 0)) {
     i15 = 8;
    } else {
     i16 = i13;
    }
   }
  } while (0);
  if ((i15 | 0) == 8) {
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore16PendingCallbacks15PendingCallbackENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv(i9);
   i16 = HEAP32[i12 >> 2] | 0;
  }
  HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + (i16 << 2) >> 2] = i10;
  i10 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = (i10 | 0) == ((HEAP32[i8 + 12 >> 2] | 0) - 1 | 0) ? 0 : i10 + 1 | 0;
  STACKTOP = i2;
  return;
 }
 i10 = i1 + 4 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 __ZN7WebCore17XMLDocumentParser8exitTextEv(i1);
 i10 = HEAP32[i1 + 140 >> 2] | 0;
 i8 = (i10 | 0) == 0;
 if (!i8) {
  i12 = i10 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = i10 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 136 >> 2] & 127](i12);
 i16 = i10 + 12 | 0;
 do {
  if (((HEAP32[i1 + 24 >> 2] | 0) - 2 | 0) >>> 0 < 2 >>> 0) {
   i15 = 16;
  } else {
   if ((HEAP32[i16 >> 2] & 4 | 0) == 0) {
    i15 = 16;
    break;
   }
   if ((__ZN7WebCore25toScriptElementIfPossibleEPNS_7ElementE(i10) | 0) == 0) {
    i15 = 16;
    break;
   }
   __ZN7WebCore17XMLDocumentParser14popCurrentNodeEv(i1);
   i9 = i3 | 0;
   HEAP32[i9 >> 2] = 0;
   __ZN7WebCore4Node6removeERi(i12, i9);
  }
 } while (0);
 L24 : do {
  if ((i15 | 0) == 16) {
   i12 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i12 & 4 | 0) != 0) {
     if ((HEAP32[i1 + 32 >> 2] | 0) == 0) {
      break;
     }
     i3 = i10;
     if ((i12 & 256 | 0) == 0) {
      __ZN7WebCore17XMLDocumentParser14popCurrentNodeEv(i1);
      break L24;
     }
     i9 = __ZN7WebCore25toScriptElementIfPossibleEPNS_7ElementE(i3) | 0;
     if ((i9 | 0) == 0) {
      __ZN7WebCore17XMLDocumentParser14popCurrentNodeEv(i1);
      break L24;
     }
     i13 = i1 + 166 | 0;
     HEAP8[i13] = 1;
     i11 = i1 + 180 | 0;
     if (__ZN7WebCore13ScriptElement13prepareScriptERKN3WTF12TextPositionENS0_17LegacyTypeSupportE(i9, i11, 1) | 0) {
      i14 = HEAP8[i9 + 16 | 0] | 0;
      do {
       if ((i14 & 32) == 0) {
        if ((i14 & 16) == 0) {
         i17 = i1 + 176 | 0;
         i18 = HEAP32[i17 >> 2] | 0;
         HEAP32[i17 >> 2] = 0;
         if ((i18 | 0) == 0) {
          break;
         }
         i17 = i18 + 8 | 0;
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
         break;
        }
        i17 = i1 + 172 | 0;
        i19 = i6 | 0;
        __ZN7WebCore24CachedResourceHandleBaseC2ERKS0_(i19, i9 + 8 | 0);
        __ZN7WebCore24CachedResourceHandleBase11setResourceEPNS_14CachedResourceE(i17 | 0, HEAP32[i6 >> 2] | 0);
        __ZN7WebCore24CachedResourceHandleBaseD2Ev(i19);
        if (!i8) {
         i19 = i10 + 8 | 0;
         HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
        }
        i19 = i1 + 176 | 0;
        i18 = HEAP32[i19 >> 2] | 0;
        HEAP32[i19 >> 2] = i3;
        do {
         if ((i18 | 0) != 0) {
          i19 = i18 + 8 | 0;
          i20 = i19 | 0;
          i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
          HEAP32[i20 >> 2] = i21;
          if ((i21 | 0) >= 1) {
           break;
          }
          if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
           break;
          }
          __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
         }
        } while (0);
        i18 = i17 | 0;
        __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(HEAP32[i18 >> 2] | 0, i1 + 28 | 0);
        if ((HEAP32[i18 >> 2] | 0) == 0) {
         break;
        }
        __ZN7WebCore17XMLDocumentParser12pauseParsingEv(i1);
       } else {
        __ZNK7WebCore13ScriptElement13scriptContentEv(i5, i9);
        __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i4, i5, (HEAP32[i1 + 16 >> 2] | 0) + 356 | 0, i11);
        __ZN7WebCore13ScriptElement13executeScriptERKNS_16ScriptSourceCodeE(i9, i4);
        i18 = HEAP32[i4 + 28 >> 2] | 0;
        do {
         if ((i18 | 0) != 0) {
          i19 = i18 | 0;
          i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
          if ((i21 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i18);
           break;
          } else {
           HEAP32[i19 >> 2] = i21;
           break;
          }
         }
        } while (0);
        __ZN7WebCore24CachedResourceHandleBaseD2Ev(i4 + 24 | 0);
        i18 = HEAP32[i4 + 4 >> 2] | 0;
        do {
         if ((i18 | 0) != 0) {
          i17 = i18 + 4 | 0;
          i21 = i17 | 0;
          i19 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
          if ((i19 | 0) != 0) {
           HEAP32[i21 >> 2] = i19;
           break;
          }
          i19 = i17 - 4 | 0;
          if ((i19 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 127](i19);
         }
        } while (0);
        i18 = HEAP32[i4 >> 2] | 0;
        do {
         if ((i18 | 0) != 0) {
          i19 = i18 + 4 | 0;
          i17 = i19 | 0;
          i21 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
          if ((i21 | 0) != 0) {
           HEAP32[i17 >> 2] = i21;
           break;
          }
          i21 = i19 - 4 | 0;
          if ((i21 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 127](i21);
         }
        } while (0);
        i18 = HEAP32[i5 >> 2] | 0;
        if ((i18 | 0) == 0) {
         break;
        }
        i21 = i18 | 0;
        i19 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
        if ((i19 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i18);
         break;
        } else {
         HEAP32[i21 >> 2] = i19;
         break;
        }
       }
      } while (0);
      if ((HEAP32[i7 >> 2] | 0) == 3) {
       break L24;
      }
     }
     HEAP8[i13] = 0;
     __ZN7WebCore17XMLDocumentParser14popCurrentNodeEv(i1);
     break L24;
    }
   } while (0);
   __ZN7WebCore17XMLDocumentParser14popCurrentNodeEv(i1);
  }
 } while (0);
 do {
  if (!i8) {
   i7 = i10 + 8 | 0;
   i5 = i7 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
  }
 } while (0);
 i10 = i1 + 4 | 0;
 i1 = i10 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i2;
  return;
 }
 i8 = i10 - 4 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17XMLDocumentParserD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 HEAP32[i1 >> 2] = H_BASE + 728;
 i2 = i1 + 28 | 0;
 HEAP32[i2 >> 2] = H_BASE + 828;
 i3 = i1 + 172 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i5, i2);
 }
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1 + 252 | 0);
 i2 = i1 + 260 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 264 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 232 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 196 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i3 = HEAP32[i1 + 200 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i2 = 0;
   while (1) {
    i6 = i5 + (i2 << 3) | 0;
    do {
     if ((HEAP32[i6 >> 2] | 0) != -1) {
      i7 = HEAP32[i5 + (i2 << 3) + 4 >> 2] | 0;
      do {
       if ((i7 | 0) != 0) {
        i8 = i7 | 0;
        i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
        if ((i9 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i7);
         break;
        } else {
         HEAP32[i8 >> 2] = i9;
         break;
        }
       }
      } while (0);
      i7 = HEAP32[i6 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i9 = i7 | 0;
      i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i9 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i2 = i2 + 1 | 0;
    if ((i2 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 192 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 176 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 8 | 0;
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i4);
 i4 = i1 + 168 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i5 + 24 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i2 = i4 | 0;
    i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i4);
     break;
    } else {
     HEAP32[i2 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i4 = HEAP32[i5 + 20 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i6 = i4 | 0;
    i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i2 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i4);
     break;
    } else {
     HEAP32[i6 >> 2] = i2;
     break;
    }
   }
  } while (0);
  __ZdlPv(i5);
 }
 i5 = HEAP32[i1 + 156 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i2 = i4 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i5 = i1 + 152 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i1 + 144 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 148 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 128 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i1 + 120 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 124 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = i1 + 116 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  i2 = HEAP32[i4 + 4 >> 2] | 0;
  i3 = i4 + 8 | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  i9 = i8 + (i2 << 2) | 0;
  do {
   if (i6 >>> 0 > i2 >>> 0) {
    if ((i2 | 0) == 0) {
     i10 = i8;
     i11 = i6;
    } else {
     i7 = i8;
     while (1) {
      i12 = i7 | 0;
      i13 = HEAP32[i12 >> 2] | 0;
      HEAP32[i12 >> 2] = 0;
      if ((i13 | 0) != 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
      }
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i9 | 0)) {
       break;
      }
     }
     i10 = HEAP32[i3 >> 2] | 0;
     i11 = HEAP32[i5 >> 2] | 0;
    }
    i7 = HEAP32[i4 + 12 >> 2] | 0;
    i13 = i10 + (i7 << 2) | 0;
    if ((i11 | 0) == (i7 | 0)) {
     break;
    }
    i7 = i10 + (i11 << 2) | 0;
    while (1) {
     i12 = i7 | 0;
     i14 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     if ((i14 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
     }
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i13 | 0)) {
      break;
     }
    }
   } else {
    if ((i6 | 0) == (i2 | 0)) {
     break;
    }
    i13 = i8 + (i6 << 2) | 0;
    while (1) {
     i7 = i13 | 0;
     i14 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     if ((i14 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
     }
     i13 = i13 + 4 | 0;
     if ((i13 | 0) == (i9 | 0)) {
      break;
     }
    }
   }
  } while (0);
  i9 = HEAP32[i3 >> 2] | 0;
  if ((i9 | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i4 + 12 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i9);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i9 >> 2] = i3;
    break;
   }
   i3 = i4 + 4 | 0;
   i9 = HEAP32[i3 >> 2] | 0;
   i6 = HEAP32[i9 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i15 = i9;
   } else {
    _xmlFreeDoc(i6);
    i15 = HEAP32[i3 >> 2] | 0;
   }
   _xmlFreeParserCtxt(i15);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1 + 72 | 0);
 i4 = i1 + 80 | 0;
 i15 = HEAP32[i4 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 84 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i16 = i1 | 0;
  __ZN7WebCore14DocumentParserD2Ev(i16);
  return;
 }
 i4 = i15 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  i16 = i1 | 0;
  __ZN7WebCore14DocumentParserD2Ev(i16);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i16 = i1 | 0;
  __ZN7WebCore14DocumentParserD2Ev(i16);
  return;
 }
}
function __ZN7WebCore17XMLDocumentParserD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 HEAP32[i1 >> 2] = H_BASE + 728;
 i2 = i1 + 28 | 0;
 HEAP32[i2 >> 2] = H_BASE + 828;
 i3 = i1 + 172 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i5, i2);
 }
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1 + 252 | 0);
 i2 = i1 + 260 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 264 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 232 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 196 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i3 = HEAP32[i1 + 200 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i2 = 0;
   while (1) {
    i6 = i5 + (i2 << 3) | 0;
    do {
     if ((HEAP32[i6 >> 2] | 0) != -1) {
      i7 = HEAP32[i5 + (i2 << 3) + 4 >> 2] | 0;
      do {
       if ((i7 | 0) != 0) {
        i8 = i7 | 0;
        i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
        if ((i9 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i7);
         break;
        } else {
         HEAP32[i8 >> 2] = i9;
         break;
        }
       }
      } while (0);
      i7 = HEAP32[i6 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i9 = i7 | 0;
      i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i9 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i2 = i2 + 1 | 0;
    if ((i2 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 192 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 176 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 8 | 0;
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i4);
 i4 = i1 + 168 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i5 + 24 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i2 = i4 | 0;
    i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i4);
     break;
    } else {
     HEAP32[i2 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i4 = HEAP32[i5 + 20 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i6 = i4 | 0;
    i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i2 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i4);
     break;
    } else {
     HEAP32[i6 >> 2] = i2;
     break;
    }
   }
  } while (0);
  __ZdlPv(i5);
 }
 i5 = HEAP32[i1 + 156 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i2 = i4 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i5 = i1 + 152 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
 }
 i5 = i1 + 144 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 148 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 128 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i1 + 120 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 124 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = i1 + 116 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  i2 = HEAP32[i4 + 4 >> 2] | 0;
  i3 = i4 + 8 | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  i9 = i8 + (i2 << 2) | 0;
  do {
   if (i6 >>> 0 > i2 >>> 0) {
    if ((i2 | 0) == 0) {
     i10 = i8;
     i11 = i6;
    } else {
     i7 = i8;
     while (1) {
      i12 = i7 | 0;
      i13 = HEAP32[i12 >> 2] | 0;
      HEAP32[i12 >> 2] = 0;
      if ((i13 | 0) != 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
      }
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i9 | 0)) {
       break;
      }
     }
     i10 = HEAP32[i3 >> 2] | 0;
     i11 = HEAP32[i5 >> 2] | 0;
    }
    i7 = HEAP32[i4 + 12 >> 2] | 0;
    i13 = i10 + (i7 << 2) | 0;
    if ((i11 | 0) == (i7 | 0)) {
     break;
    }
    i7 = i10 + (i11 << 2) | 0;
    while (1) {
     i12 = i7 | 0;
     i14 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     if ((i14 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
     }
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i13 | 0)) {
      break;
     }
    }
   } else {
    if ((i6 | 0) == (i2 | 0)) {
     break;
    }
    i13 = i8 + (i6 << 2) | 0;
    while (1) {
     i7 = i13 | 0;
     i14 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     if ((i14 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
     }
     i13 = i13 + 4 | 0;
     if ((i13 | 0) == (i9 | 0)) {
      break;
     }
    }
   }
  } while (0);
  i9 = HEAP32[i3 >> 2] | 0;
  if ((i9 | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i4 + 12 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i9);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i9 >> 2] = i3;
    break;
   }
   i3 = i4 + 4 | 0;
   i9 = HEAP32[i3 >> 2] | 0;
   i6 = HEAP32[i9 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i15 = i9;
   } else {
    _xmlFreeDoc(i6);
    i15 = HEAP32[i3 >> 2] | 0;
   }
   _xmlFreeParserCtxt(i15);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1 + 72 | 0);
 i4 = i1 + 80 | 0;
 i15 = HEAP32[i4 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 84 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i16 = i1 | 0;
  __ZN7WebCore14DocumentParserD2Ev(i16);
  return;
 }
 i4 = i15 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  i16 = i1 | 0;
  __ZN7WebCore14DocumentParserD2Ev(i16);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i16 = i1 | 0;
  __ZN7WebCore14DocumentParserD2Ev(i16);
  return;
 }
}
function __ZN7WebCoreL31attributesStartElementNsHandlerEPvPKhS2_S2_iPS2_iiS3_(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i8 | 0;
 i5 = i8 + 8 | 0;
 i4 = i8 + 16 | 0;
 i3 = i8 + 24 | 0;
 i10 = i8 + 32 | 0;
 i11 = i8 + 48 | 0;
 if ((_strcmp(i2 | 0, H_BASE + 16 | 0) | 0) != 0) {
  STACKTOP = i8;
  return;
 }
 i2 = HEAP32[i1 + 272 >> 2] | 0;
 HEAP8[i2 + 20 | 0] = 1;
 i1 = i9;
 if ((i7 | 0) <= 0) {
  STACKTOP = i8;
  return;
 }
 i9 = i4 | 0;
 i12 = i3 | 0;
 i13 = i6 | 0;
 i14 = i2;
 i2 = i11 + 8 | 0;
 i15 = i11 | 0;
 i16 = i5 | 0;
 i17 = i10 | 0;
 i18 = i10 + 4 | 0;
 i19 = i10 + 8 | 0;
 i20 = 0;
 while (1) {
  __ZN3WTF6String8fromUTF8EPKh(i6, HEAP32[i1 + (i20 * 20 & -1) >> 2] | 0);
  i21 = HEAP32[i1 + (i20 * 20 & -1) + 12 >> 2] | 0;
  __ZN3WTF6String8fromUTF8EPKhj(i5, i21, (HEAP32[i1 + (i20 * 20 & -1) + 16 >> 2] | 0) - i21 | 0);
  __ZN3WTF6String8fromUTF8EPKh(i4, HEAP32[i1 + (i20 * 20 & -1) + 4 >> 2] | 0);
  i21 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i21 | 0) == 0) {
    i22 = 6;
   } else {
    if ((HEAP32[i21 + 4 >> 2] | 0) == 0) {
     i22 = 6;
     break;
    }
    i23 = i21 | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24 + 2 | 0;
    HEAP32[i23 >> 2] = i24 + 4;
    if ((i25 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i21);
    } else {
     HEAP32[i23 >> 2] = i25;
    }
    i25 = HEAP32[i13 >> 2] | 0;
    i23 = (i25 | 0) == 0;
    if (!i23) {
     i24 = i25 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
    }
    i24 = (i21 | 0) == 0;
    if (!i24) {
     i26 = i21 | 0;
     HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
    }
    if (!i23) {
     i26 = i25 | 0;
     HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
    }
    HEAP32[i17 >> 2] = i21;
    if (!i24) {
     i26 = i21 | 0;
     HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
    }
    HEAP32[i18 >> 2] = H_BASE + 8;
    HEAP32[i19 >> 2] = i25;
    do {
     if (!i23) {
      i26 = i25 | 0;
      i27 = HEAP32[i26 >> 2] | 0;
      HEAP32[i26 >> 2] = i27 + 2;
      if ((i27 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i25);
       break;
      } else {
       HEAP32[i26 >> 2] = i27;
       break;
      }
     }
    } while (0);
    do {
     if (!i24) {
      i27 = i21 | 0;
      i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i26 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i21);
       break;
      } else {
       HEAP32[i27 >> 2] = i26;
       break;
      }
     }
    } while (0);
    __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i3, i10);
    i26 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i26 | 0) != 0) {
      i27 = i26 | 0;
      i28 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i28 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i26);
       break;
      } else {
       HEAP32[i27 >> 2] = i28;
       break;
      }
     }
    } while (0);
    i26 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i26 | 0) != 0) {
      i28 = i26 | 0;
      i27 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
      if ((i27 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i26);
       break;
      } else {
       HEAP32[i28 >> 2] = i27;
       break;
      }
     }
    } while (0);
    do {
     if (!i23) {
      i26 = i25 | 0;
      i27 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
      if ((i27 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i25);
       break;
      } else {
       HEAP32[i26 >> 2] = i27;
       break;
      }
     }
    } while (0);
    if (i24) {
     break;
    }
    i25 = i21 | 0;
    i23 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
    if ((i23 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i21);
     break;
    } else {
     HEAP32[i25 >> 2] = i23;
     break;
    }
   }
  } while (0);
  do {
   if ((i22 | 0) == 6) {
    i22 = 0;
    i21 = HEAP32[i13 >> 2] | 0;
    HEAP32[i12 >> 2] = i21;
    if ((i21 | 0) == 0) {
     break;
    }
    i23 = i21 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   }
  } while (0);
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_RS1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i11, i14, i3, i5);
  do {
   if ((HEAP8[i2] & 1) == 0) {
    i23 = HEAP32[i15 >> 2] | 0;
    i21 = HEAP32[i16 >> 2] | 0;
    if ((i21 | 0) != 0) {
     i25 = i21 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
    }
    i25 = i23 + 4 | 0;
    i23 = HEAP32[i25 >> 2] | 0;
    HEAP32[i25 >> 2] = i21;
    if ((i23 | 0) == 0) {
     break;
    }
    i21 = i23 | 0;
    i25 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
    if ((i25 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i23);
     break;
    } else {
     HEAP32[i21 >> 2] = i25;
     break;
    }
   }
  } while (0);
  i25 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i25 | 0) != 0) {
    i21 = i25 | 0;
    i23 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
    if ((i23 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     break;
    } else {
     HEAP32[i21 >> 2] = i23;
     break;
    }
   }
  } while (0);
  i25 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i25 | 0) != 0) {
    i23 = i25 | 0;
    i21 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
    if ((i21 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     break;
    } else {
     HEAP32[i23 >> 2] = i21;
     break;
    }
   }
  } while (0);
  i25 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i25 | 0) != 0) {
    i21 = i25 | 0;
    i23 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
    if ((i23 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     break;
    } else {
     HEAP32[i21 >> 2] = i23;
     break;
    }
   }
  } while (0);
  i25 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i25 | 0) != 0) {
    i23 = i25 | 0;
    i21 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
    if ((i21 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     break;
    } else {
     HEAP32[i23 >> 2] = i21;
     break;
    }
   }
  } while (0);
  i20 = i20 + 1 | 0;
  if ((i20 | 0) >= (i7 | 0)) {
   break;
  }
 }
 STACKTOP = i8;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 4 | 0;
 i8 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = (i2 | 0) == 0;
 if (i10) {
  i11 = 0;
 } else {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 i13 = (i3 | 0) == 0;
 if (i13) {
  i14 = 0;
 } else {
  i14 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i15 = _llvm_uadd_with_overflow_i32(i11 + i8 | 0, i14 | 0) | 0;
 i14 = i15;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i10) {
  i16 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i16 = 9;
  }
 }
 do {
  if ((i16 | 0) == 9) {
   if (!i13) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i14 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i16 = 28;
      break;
     }
     i10 = i2 | 0;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
     i17 = i2;
     i18 = 0;
    } else {
     if (i14 >>> 0 > 4294967275 >>> 0) {
      i16 = 28;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i14 + 20 | 0);
     i2 = i6 | 0;
     i10 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i10 | 0) == 0) {
      i16 = 28;
      break;
     }
     i2 = i10 + 20 | 0;
     HEAP32[i10 >> 2] = 2;
     HEAP32[i10 + 4 >> 2] = i14;
     HEAP32[i10 + 8 >> 2] = i2;
     HEAP32[i10 + 12 >> 2] = 0;
     HEAP32[i10 + 16 >> 2] = 32;
     i17 = i10;
     i18 = i2;
    }
   } while (0);
   if ((i16 | 0) == 28) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   i10 = _strlen(i2 | 0) | 0;
   i15 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i19 = 0;
    } else {
     i8 = HEAP32[i15 + 4 >> 2] | 0;
     i11 = HEAP32[i15 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i19 = 0;
      break;
     } else {
      i20 = 0;
     }
     while (1) {
      HEAP8[i18 + i20 | 0] = HEAP8[i11 + i20 | 0] | 0;
      i20 = i20 + 1 | 0;
      if (i20 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
     i8 = HEAP32[i9 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i19 = 0;
      break;
     }
     i19 = HEAP32[i8 + 4 >> 2] | 0;
    }
   } while (0);
   _memcpy(i18 + i19 | 0, i2 | 0, i10) | 0;
   i15 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i21 = 0;
   } else {
    i21 = HEAP32[i8 + 4 >> 2] | 0;
   }
   i8 = i21 + i15 | 0;
   i15 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i11 = HEAP32[i15 + 4 >> 2] | 0;
     i22 = HEAP32[i15 + 8 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP8[i18 + (i8 + i23) | 0] = HEAP8[i22 + i23 | 0] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i11 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i14 | 0) == 0) {
   i17 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i17 | 0) == 0) {
    i16 = 55;
    break;
   }
   i23 = i17 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   i24 = i17;
   i25 = 0;
  } else {
   if (i14 >>> 0 > 2147483637 >>> 0) {
    i16 = 55;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i14 << 1) + 20 | 0);
   i17 = i5 | 0;
   i23 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   if ((i23 | 0) == 0) {
    i16 = 55;
    break;
   }
   i17 = i23 + 20 | 0;
   HEAP32[i23 >> 2] = 2;
   HEAP32[i23 + 4 >> 2] = i14;
   HEAP32[i23 + 8 >> 2] = i17;
   HEAP32[i23 + 12 >> 2] = 0;
   HEAP32[i23 + 16 >> 2] = 0;
   i24 = i23;
   i25 = i17;
  }
 } while (0);
 if ((i16 | 0) == 55) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i16 = HEAP32[i7 >> 2] | 0;
 i14 = _strlen(i16 | 0) | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i26 = 0;
   i27 = 0;
  } else {
   i17 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
     i23 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     } else {
      i28 = 0;
     }
     while (1) {
      HEAP16[i25 + (i28 << 1) >> 1] = HEAP16[i23 + (i28 << 1) >> 1] | 0;
      i28 = i28 + 1 | 0;
      if (i28 >>> 0 >= i17 >>> 0) {
       break;
      }
     }
    } else {
     i23 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     } else {
      i29 = 0;
     }
     while (1) {
      HEAP16[i25 + (i29 << 1) >> 1] = HEAPU8[i23 + i29 | 0] | 0;
      i29 = i29 + 1 | 0;
      if (i29 >>> 0 >= i17 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i17 = HEAP32[i9 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i26 = 0;
    i27 = 0;
    break;
   }
   i26 = HEAP32[i17 + 4 >> 2] | 0;
   i27 = i17;
  }
 } while (0);
 if ((i14 | 0) == 0) {
  i30 = i27;
 } else {
  i27 = 0;
  while (1) {
   HEAP16[i25 + (i27 + i26 << 1) >> 1] = HEAPU8[i16 + i27 | 0] | 0;
   i27 = i27 + 1 | 0;
   if (i27 >>> 0 >= i14 >>> 0) {
    break;
   }
  }
  i30 = HEAP32[i9 >> 2] | 0;
 }
 i9 = _strlen(HEAP32[i7 >> 2] | 0) | 0;
 if ((i30 | 0) == 0) {
  i31 = 0;
 } else {
  i31 = HEAP32[i30 + 4 >> 2] | 0;
 }
 i30 = i31 + i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = HEAP32[i9 + 4 >> 2] | 0;
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i31 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i32 = 0;
    }
    while (1) {
     HEAP16[i25 + (i32 + i30 << 1) >> 1] = HEAP16[i31 + (i32 << 1) >> 1] | 0;
     i32 = i32 + 1 | 0;
     if (i32 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   } else {
    i31 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i33 = 0;
    }
    while (1) {
     HEAP16[i25 + (i33 + i30 << 1) >> 1] = HEAPU8[i31 + i33 | 0] | 0;
     i33 = i33 + 1 | 0;
     if (i33 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i24;
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL8openFuncEPKc(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 520 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 56 | 0;
 i6 = i2 + 104 | 0;
 i7 = i2 + 112 | 0;
 i8 = i2 + 136 | 0;
 i9 = i2 + 304 | 0;
 i10 = i2 + 320 | 0;
 i11 = i2 + 336 | 0;
 i12 = i5 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 __ZN3WTF6StringC1EPKc(i6, i1);
 __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i4, i5, i6);
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i5 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i12 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (__ZN7WebCoreL23shouldAllowExternalLoadERKNS_3URLE(i4) | 0) {
   _memset(i7 | 0, 0, 16) | 0;
   HEAP8[i7 + 16 | 0] = 1;
   HEAP8[i7 + 17 | 0] = 0;
   HEAP8[i7 + 18 | 0] = 0;
   i5 = i8 | 0;
   __ZN7WebCore20ResourceResponseBaseC2Ev(i5);
   HEAP8[i8 + 160 | 0] = 0;
   i1 = i9 | 0;
   HEAP32[i1 >> 2] = 0;
   i12 = i9 + 4 | 0;
   HEAP32[i12 >> 2] = 0;
   i6 = i9 + 8 | 0;
   HEAP32[i6 >> 2] = 0;
   i13 = HEAP32[__ZN7WebCore22XMLDocumentParserScope27currentCachedResourceLoaderE >> 2] | 0;
   __ZN7WebCore22XMLDocumentParserScopeC1EPNS_20CachedResourceLoaderE(i10, 0);
   if ((__ZNK7WebCore20CachedResourceLoader5frameEv(i13) | 0) != 0) {
    i14 = (__ZNK7WebCore20CachedResourceLoader5frameEv(i13) | 0) + 80 | 0;
    i13 = HEAP32[i4 >> 2] | 0;
    HEAP32[i11 >> 2] = i13;
    if ((i13 | 0) != 0) {
     i15 = i13 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
    }
    i15 = HEAP8[i4 + 4 | 0] | 0;
    i13 = i11 + 4 | 0;
    HEAP8[i13] = HEAP8[i13] & -4 | i15 & 1 | i15 & 2;
    HEAP32[i11 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
    HEAP32[i11 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
    HEAP32[i11 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
    HEAP32[i11 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
    HEAP32[i11 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
    HEAP32[i11 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
    HEAP32[i11 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
    HEAP32[i11 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
    HEAP32[i11 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
    HEAP32[i11 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
    HEAP32[i11 + 48 >> 2] = 0;
    HEAPF64[i11 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
    i15 = i11 + 64 | 0;
    HEAP32[i15 >> 2] = 0;
    __ZN7WebCore3URL10invalidateEv(i15);
    HEAP32[i3 >> 2] = H_BASE + 224;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11 + 112 | 0, i3);
    __ZN7WebCore13HTTPHeaderMapC1Ev(i11 + 116 | 0);
    _memset(i11 + 136 | 0, 0, 16) | 0;
    HEAP8[i11 + 152 | 0] = 11;
    HEAP32[i11 + 156 >> 2] = 1;
    _memset(i11 + 160 | 0, 0, 19) | 0;
    HEAP32[i11 + 180 >> 2] = 15;
    __ZN7WebCore11FrameLoader25loadResourceSynchronouslyERKNS_15ResourceRequestENS_17StoredCredentialsENS_22ClientCredentialPolicyERNS_13ResourceErrorERNS_16ResourceResponseERN3WTF6VectorIcLj0ENSA_15CrashOnOverflowEEE(i14, i11, 0, 1, i7, i8, i9) | 0;
    __ZN7WebCore15ResourceRequestD2Ev(i11);
   }
   __ZN7WebCore22XMLDocumentParserScopeD1Ev(i10);
   if (__ZN7WebCoreL23shouldAllowExternalLoadERKNS_3URLE(__ZNK7WebCore20ResourceResponseBase3urlEv(i5) | 0) | 0) {
    i14 = __ZN3WTF10fastMallocEj(16) | 0;
    i15 = HEAP32[i12 >> 2] | 0;
    i13 = HEAP32[i6 >> 2] | 0;
    i16 = i14;
    HEAP32[i16 >> 2] = 0;
    i17 = i14 + 4 | 0;
    HEAP32[i17 >> 2] = 0;
    HEAP32[i14 + 8 >> 2] = i13;
    do {
     if ((i15 | 0) != 0) {
      i13 = __ZN3WTF18fastMallocGoodSizeEj(i15) | 0;
      HEAP32[i17 >> 2] = i13;
      i18 = __ZN3WTF10fastMallocEj(i13) | 0;
      HEAP32[i16 >> 2] = i18;
      if ((i18 | 0) == 0) {
       break;
      }
      _memcpy(i18 | 0, HEAP32[i1 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
     }
    } while (0);
    HEAP32[i14 + 12 >> 2] = 0;
    i19 = i14;
   } else {
    i19 = H_BASE + 1256;
   }
   if ((HEAP32[i6 >> 2] | 0) != 0) {
    HEAP32[i6 >> 2] = 0;
   }
   i16 = HEAP32[i1 >> 2] | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i12 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i16);
   }
   __ZN7WebCore20ResourceResponseBaseD2Ev(i5);
   i16 = HEAP32[i7 + 12 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i17 = i16 | 0;
     i15 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i17 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i16 = HEAP32[i7 + 8 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i5 = i16 | 0;
     i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i5 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i16 = HEAP32[i7 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i20 = i19;
    break;
   }
   i12 = i16 | 0;
   i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    i20 = i19;
    break;
   } else {
    HEAP32[i12 >> 2] = i5;
    i20 = i19;
    break;
   }
  } else {
   i20 = H_BASE + 1256;
  }
 } while (0);
 i19 = HEAP32[i4 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i2;
  return i20 | 0;
 }
 i4 = i19 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i19);
  STACKTOP = i2;
  return i20 | 0;
 } else {
  HEAP32[i4 >> 2] = i7;
  STACKTOP = i2;
  return i20 | 0;
 }
 return 0;
}
function __ZN7WebCore15parseAttributesERKN3WTF6StringERb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 184 | 0;
 i11 = i8 + 20 | 0;
 _memset(i8 | 0, 0, 21) | 0;
 _memset(i9 | 0, 0, 128) | 0;
 HEAP32[i9 + 116 >> 2] = F_BASE_viiiiiiiii + 2;
 HEAP32[i9 + 108 >> 2] = -554844497;
 __ZN7WebCore16XMLParserContext18createStringParserEP14_xmlSAXHandlerPv(i10, i9, i8);
 i9 = i10 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i12 = 0;
   i13 = 1;
  } else {
   i2 = i9 | 0;
   i14 = HEAP32[i2 >> 2] | 0;
   i15 = i14 + 2 | 0;
   HEAP32[i2 >> 2] = i14 + 4;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i16 = HEAP32[i2 >> 2] | 0;
   } else {
    HEAP32[i2 >> 2] = i15;
    i16 = i15;
   }
   i15 = i16 + 2 | 0;
   HEAP32[i2 >> 2] = i16 + 4;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i12 = i9;
    i13 = 0;
    break;
   } else {
    HEAP32[i2 >> 2] = i15;
    i12 = i9;
    i13 = 0;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = H_BASE + 32;
 i9 = i7 + 4 | 0;
 HEAP32[i9 >> 2] = i12;
 i16 = (i12 | 0) == 0;
 if (!i16) {
  i15 = i12 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i6, i7, H_BASE + 24 | 0);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 | 0;
   i15 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i9 >> 2] = i15;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == 0) {
  _WTFCrash();
 }
 do {
  if (!i16) {
   i7 = i12 | 0;
   i15 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i7 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if (!i13) {
   i16 = i12 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i16 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i10 + 4 >> 2] | 0;
 if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
  i17 = HEAP32[i6 + 8 >> 2] | 0;
 } else {
  i17 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i6) | 0;
 }
 _xmlParseChunk(i12, i17, HEAP32[i6 + 4 >> 2] << 1, 1) | 0;
 HEAP8[i3] = HEAP8[i11] & 1;
 i11 = i1 | 0;
 i3 = i8 | 0;
 _memset(i1 | 0, 0, 20) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i17 = i8 + 4 | 0;
 i12 = HEAP32[i17 >> 2] | 0;
 i13 = i1 + (i12 << 3) | 0;
 L39 : do {
  if ((HEAP32[i8 + 12 >> 2] | 0) != 0) {
   L41 : do {
    if ((i12 | 0) == 0) {
     i18 = i1;
    } else {
     i15 = i1;
     while (1) {
      i16 = HEAP32[i15 >> 2] | 0;
      if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
       i18 = i15;
       break L41;
      }
      i15 = i15 + 8 | 0;
      if ((i15 | 0) == (i13 | 0)) {
       break L39;
      }
     }
    }
   } while (0);
   if ((i18 | 0) == (i13 | 0)) {
    break;
   } else {
    i19 = i18;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_22IdentityHashTranslatorIS6_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i5, i11, i19 | 0, i19);
    i15 = i19 + 8 | 0;
    if ((i15 | 0) == (i13 | 0)) {
     break L39;
    } else {
     i20 = i15;
    }
    while (1) {
     i15 = HEAP32[i20 >> 2] | 0;
     if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
      break;
     }
     i15 = i20 + 8 | 0;
     if ((i15 | 0) == (i13 | 0)) {
      break L39;
     } else {
      i20 = i15;
     }
    }
    if ((i20 | 0) == (i13 | 0)) {
     break;
    } else {
     i19 = i20;
    }
   }
  }
 } while (0);
 i20 = i6 | 0;
 i19 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
 } else {
  HEAP32[i20 >> 2] = i19;
 }
 do {
  if ((i10 | 0) != 0) {
   i19 = i10 | 0;
   i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i19 >> 2] = i20;
    break;
   }
   i20 = i10 + 4 | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   i6 = HEAP32[i19 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i21 = i19;
   } else {
    _xmlFreeDoc(i6);
    i21 = HEAP32[i20 >> 2] | 0;
   }
   _xmlFreeParserCtxt(i21);
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i10 = HEAP32[i3 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i17 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i17 = 0;
  while (1) {
   i21 = i10 + (i17 << 3) | 0;
   do {
    if ((HEAP32[i21 >> 2] | 0) != -1) {
     i20 = HEAP32[i10 + (i17 << 3) + 4 >> 2] | 0;
     do {
      if ((i20 | 0) != 0) {
       i6 = i20 | 0;
       i19 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
       if ((i19 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i20);
        break;
       } else {
        HEAP32[i6 >> 2] = i19;
        break;
       }
      }
     } while (0);
     i20 = HEAP32[i21 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i19 = i20 | 0;
     i6 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i19 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i17 = i17 + 1 | 0;
   if ((i17 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i4;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i14 = i20 | 0;
     i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i14 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i27 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i10 >> 2] = i27;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i27 = i11 | 0;
    i10 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i27 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
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
  if ((i12 | 0) == 9) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i12 = 18;
    break;
   }
   i18 = i15 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i19 = i15;
   i20 = 0;
  } else if ((i12 | 0) == 11) {
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
function __ZN7WebCore17XMLDocumentParser5doEndEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 i8 = i1 | 0;
 i9 = i1 + 8 | 0;
 do {
  if ((HEAP32[i9 >> 2] | 0) <= 1) {
   i10 = i1 + 112 | 0;
   if ((HEAP32[i10 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore22XMLDocumentParserScopeC1EPNS_20CachedResourceLoaderE(i3, HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 340 >> 2] | 0);
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i12 = 0;
   } else {
    i12 = HEAP32[i11 + 4 >> 2] | 0;
   }
   _xmlParseChunk(i12, 0, 0, 1) | 0;
   __ZN7WebCore22XMLDocumentParserScopeD1Ev(i3);
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i10 = i11 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i10 >> 2] = i13;
    break;
   }
   i13 = i11 + 4 | 0;
   i10 = HEAP32[i13 >> 2] | 0;
   i14 = HEAP32[i10 + 8 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i15 = i10;
   } else {
    _xmlFreeDoc(i14);
    i15 = HEAP32[i13 >> 2] | 0;
   }
   _xmlFreeParserCtxt(i15);
   __ZN3WTF8fastFreeEPv(i11);
  }
 } while (0);
 do {
  if ((HEAP8[i1 + 160 | 0] & 1) == 0) {
   if ((HEAP8[i1 + 161 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP8[i1 + 162 | 0] & 1) != 0) {
    break;
   }
   i15 = i1 + 16 | 0;
   i3 = HEAP32[i15 >> 2] | 0;
   if ((HEAP8[i3 + 1580 | 0] & 1) != 0) {
    break;
   }
   i12 = HEAP32[i3 + 1288 >> 2] | 0;
   if ((i12 | 0) != 0) {
    i11 = HEAP32[i12 + 8 >> 2] | 0;
    i13 = i12 + 8 | 0;
    HEAP32[i13 >> 2] = i11;
    if ((i11 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    break;
   }
   i13 = HEAP32[i3 + 332 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i13 + 32 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[(HEAP32[i3 + 48 >> 2] | 0) + 184 | 0] & 1) == 0) {
    break;
   }
   if ((__ZNK7WebCore9FrameTree6parentEv(i13 + 40 | 0) | 0) != 0) {
    break;
   }
   __ZN7WebCore13XMLTreeViewerC1EPNS_8DocumentE(i4, HEAP32[i15 >> 2] | 0);
   __ZN7WebCore13XMLTreeViewer27transformDocumentToTreeViewEv(i4);
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((HEAP8[i1 + 162 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 16 | 0;
 i15 = HEAP32[(HEAP32[i4 >> 2] | 0) + 340 >> 2] | 0;
 __ZNK7WebCore15SegmentedString8toStringEv(i6, i1 + 36 | 0);
 i1 = __ZN7WebCore18xmlDocPtrForStringEPNS_20CachedResourceLoaderERKN3WTF6StringES5_(i15, i6, (HEAP32[i4 >> 2] | 0) + 356 | 0) | 0;
 i15 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i6 = i15 | 0;
   i13 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i6 >> 2] = i13;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = i1;
 i1 = HEAP32[i4 >> 2] | 0;
 i15 = __ZN3WTF10fastMallocEj(4) | 0;
 __ZN7WebCore15TransformSourceC1ERKPv(i15, i5);
 i5 = i7 | 0;
 HEAP32[i5 >> 2] = i15;
 __ZN7WebCore8Document18setTransformSourceEN3WTF10PassOwnPtrINS_15TransformSourceEEE(i1, i7);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore15TransformSourceD1Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
 }
 __ZN7WebCore8Document10setParsingEb(HEAP32[i4 >> 2] | 0, 0);
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(HEAP32[i4 >> 2] | 0, 0);
 if ((HEAP32[i9 >> 2] | 0) == 3) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore8Document10setParsingEb(HEAP32[i4 >> 2] | 0, 1);
 __ZN7WebCore14DocumentParser11stopParsingEv(i8);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_22IdentityHashTranslatorIS6_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i13 = i9 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = i18 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i9;
 do {
  if ((i17 | 0) != 0) {
   i9 = i17 | 0;
   i13 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i9 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i4 = i17 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i17;
 do {
  if ((i13 | 0) != 0) {
   i17 = i13 | 0;
   i4 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i17 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i17 | 0)) {
  i19 = i18;
  i20 = i17;
 } else {
  i17 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore17XMLDocumentParser7doWriteERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i6;
 i8 = i1 + 112 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = i4 | 0;
  HEAP32[i10 >> 2] = 0;
  __ZN7WebCore17XMLDocumentParser23initializeParserContextERKN3WTF7CStringE(i1, i4);
  i4 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i10 = i4 | 0;
    i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF8fastFreeEPv(i4);
     break;
    } else {
     HEAP32[i10 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i4 = HEAP32[i8 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i12 = 0;
   i13 = 0;
  } else {
   i14 = i4;
   i15 = 7;
  }
 } else {
  i14 = i9;
  i15 = 7;
 }
 if ((i15 | 0) == 7) {
  i9 = i14 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i12 = i14;
  i13 = 1;
 }
 i14 = i2 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i15 = 21;
  } else {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    i15 = 21;
    break;
   }
   i9 = i1 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i12 + 4 | 0;
   _xmlSwitchEncoding(HEAP32[i9 >> 2] | 0, 2) | 0;
   __ZN7WebCore22XMLDocumentParserScopeC1EPNS_20CachedResourceLoaderE(i5, HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 340 >> 2] | 0);
   i4 = HEAP32[i9 >> 2] | 0;
   i9 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i16 = 0;
     i17 = 0;
    } else {
     if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
      i18 = HEAP32[i9 + 8 >> 2] | 0;
      i19 = i9;
     } else {
      i8 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i9) | 0;
      i18 = i8;
      i19 = HEAP32[i14 >> 2] | 0;
     }
     i8 = i18;
     if ((i19 | 0) == 0) {
      i16 = 0;
      i17 = i8;
      break;
     }
     i16 = HEAP32[i19 + 4 >> 2] << 1;
     i17 = i8;
    }
   } while (0);
   _xmlParseChunk(i4, i17, i16, 0) | 0;
   i9 = (HEAP32[i1 + 8 >> 2] | 0) < 2;
   __ZN7WebCore22XMLDocumentParserScopeD1Ev(i5);
   i8 = i1 + 4 | 0;
   i11 = i8 | 0;
   i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   do {
    if ((i10 | 0) == 0) {
     i20 = i8 - 4 | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 127](i20);
    } else {
     HEAP32[i11 >> 2] = i10;
    }
   } while (0);
   if (i9) {
    i15 = 21;
   }
  }
 } while (0);
 do {
  if ((i15 | 0) == 21) {
   i5 = HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 1308 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   if ((HEAP8[i5 + 44 | 0] & 1) == 0) {
    break;
   }
   i5 = HEAP32[(HEAP32[i12 + 4 >> 2] | 0) + 36 >> 2] | 0;
   i16 = (HEAP32[i5 + 32 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i5 + 28 >> 2] | 0) - 1;
   HEAP32[i6 + 4 >> 2] = i16;
   __ZN7WebCore17XMLDocumentParser11handleErrorENS_9XMLErrors9ErrorTypeEPKcN3WTF12TextPositionE(i1, 2, H_BASE + 80 | 0, i7);
  }
 } while (0);
 if (!i13) {
  STACKTOP = i3;
  return;
 }
 i13 = i12 | 0;
 i7 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i13 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
 i7 = i12 + 4 | 0;
 i13 = HEAP32[i7 >> 2] | 0;
 i1 = HEAP32[i13 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i21 = i13;
 } else {
  _xmlFreeDoc(i1);
  i21 = HEAP32[i7 >> 2] | 0;
 }
 _xmlFreeParserCtxt(i21);
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_RS1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i4 = i13 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i13;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i4 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i4;
 i8 = i2 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i13 | 0)) {
  i19 = i18;
  i20 = i13;
 } else {
  i13 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, i18) | 0;
  i19 = i13;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 i10 = i9 >>> 7;
 i11 = (i9 >>> 30) + ~i10 | 0;
 i9 = i11 << 12 ^ i11;
 i11 = i9 >>> 7 ^ i9;
 i9 = i11 << 2 ^ i11;
 i11 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i12 = i10;
 i10 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i7 + (i13 << 3) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if ((i15 | 0) == (i3 | 0)) {
    i18 = 6;
    break;
   } else {
    i17 = i9;
   }
  }
  i15 = (i10 | 0) == 0 ? i11 : i10;
  i9 = i17;
  i12 = i15 + i13 | 0;
  i10 = i15;
 }
 if ((i18 | 0) == 6) {
  i18 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i7 = i1;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i7 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i19 = i14;
  i20 = i3;
 } else {
  i3 = i9;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  i3 = i2 + 16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
  i19 = i9;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 if ((i20 | 0) != 0) {
  i8 = i20 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i19 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i20;
 do {
  if ((i9 | 0) != 0) {
   i20 = i9 | 0;
   i8 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i20 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i19 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i4;
 i8 = i2 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i9 | 0)) {
  i21 = i19;
  i22 = i9;
 } else {
  i9 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i2, i19) | 0;
  i21 = i9;
  i22 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i22 << 3) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore17XMLDocumentParser21processingInstructionEPKhS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) > 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[i1 + 165 | 0] & 1) != 0) {
  __ZN7WebCore16PendingCallbacks35appendProcessingInstructionCallbackEPKhS2_(HEAP32[i1 + 116 >> 2] | 0, i2, i3);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore17XMLDocumentParser8exitTextEv(i1);
 HEAP32[i5 >> 2] = 0;
 i10 = i1 + 140 | 0;
 i11 = HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN3WTF6String8fromUTF8EPKh(i7, i2);
 __ZN3WTF6String8fromUTF8EPKh(i8, i3);
 __ZN7WebCore8Document27createProcessingInstructionERKN3WTF6StringES4_Ri(i6, i11, i7, i8, i5);
 i11 = i6 | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i11 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i7 = i11 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   HEAP8[i6 + 70 | 0] = 1;
   i11 = HEAP32[i10 >> 2] | 0;
   i3 = i9 | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i6 | 0) != 0) {
    i7 = i6 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   }
   __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i11, i9);
   i11 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i3 = i11 + 8 | 0;
     i7 = i3 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     HEAP32[i7 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
    }
   } while (0);
   __ZN7WebCore21ProcessingInstruction21finishParsingChildrenEv(i6);
   if ((HEAP8[i6 + 71 | 0] & 1) != 0) {
    HEAP8[i1 + 161 | 0] = 1;
   }
   if ((HEAP8[i1 + 163 | 0] & 1) != 0) {
    HEAP8[i1 + 162 | 0] = 0;
    break;
   }
   i11 = HEAP8[i6 + 72 | 0] & 1;
   HEAP8[i1 + 162 | 0] = i11;
   if (i11 << 24 >> 24 == 0) {
    break;
   }
   i11 = HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 1288 >> 2] | 0;
   if ((i11 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 127](i1);
    break;
   }
   i3 = HEAP32[i11 + 8 >> 2] | 0;
   i8 = i11 + 8 | 0;
   HEAP32[i8 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i6 + 8 | 0;
 i6 = i1 | 0;
 i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i9;
 if ((i9 | 0) >= 1) {
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
function __ZN7WebCore17XMLDocumentParser23initializeParserContextERKN3WTF7CStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i4 = i3 | 0;
 i5 = i3 + 128 | 0;
 i6 = i3 + 144 | 0;
 i7 = i3 + 152 | 0;
 _memset(i4 | 0, 0, 128) | 0;
 HEAP32[i4 + 88 >> 2] = F_BASE_viii + 8;
 HEAP32[i4 + 92 >> 2] = F_BASE_viii + 12;
 HEAP32[i4 + 68 >> 2] = F_BASE_viii + 16;
 HEAP32[i4 + 76 >> 2] = F_BASE_viii + 4;
 HEAP32[i4 + 100 >> 2] = F_BASE_viii + 2;
 HEAP32[i4 + 80 >> 2] = F_BASE_vii + 18;
 HEAP32[i4 + 84 >> 2] = F_BASE_viii + 10;
 HEAP32[i4 + 116 >> 2] = F_BASE_viiiiiiiii + 4;
 HEAP32[i4 + 120 >> 2] = F_BASE_viiii + 6;
 HEAP32[i4 + 20 >> 2] = F_BASE_iii + 2;
 HEAP32[i4 + 48 >> 2] = F_BASE_vi + 10;
 HEAP32[i4 + 52 >> 2] = F_BASE_vi + 52;
 HEAP32[i4 >> 2] = F_BASE_viiii + 4;
 HEAP32[i4 + 104 >> 2] = F_BASE_viiii + 8;
 HEAP32[i4 + 72 >> 2] = F_BASE_viii + 18;
 HEAP32[i4 + 24 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[i4 + 108 >> 2] = -554844497;
 __ZN7WebCore14DocumentParser12startParsingEv(i1 | 0);
 i8 = i1 + 160 | 0;
 tempBigInt = 0;
 HEAP8[i8] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i8 + 1 | 0] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i8 + 2 | 0] = tempBigInt;
 tempBigInt = tempBigInt >> 8;
 HEAP8[i8 + 3 | 0] = tempBigInt;
 __ZN7WebCore22XMLDocumentParserScopeC1EPNS_20CachedResourceLoaderE(i5, HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 340 >> 2] | 0);
 i8 = i1 + 112 | 0;
 i9 = i1;
 if ((HEAP8[i1 + 188 | 0] & 1) == 0) {
  __ZN7WebCore16XMLParserContext18createStringParserEP14_xmlSAXHandlerPv(i7, i4, i9);
  i1 = i7 | 0;
  i7 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  i1 = i8 | 0;
  i10 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i7;
  if ((i10 | 0) == 0) {
   __ZN7WebCore22XMLDocumentParserScopeD1Ev(i5);
   STACKTOP = i3;
   return;
  }
  i7 = i10 | 0;
  i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i1 | 0) != 0) {
   HEAP32[i7 >> 2] = i1;
   __ZN7WebCore22XMLDocumentParserScopeD1Ev(i5);
   STACKTOP = i3;
   return;
  }
  i1 = i10 + 4 | 0;
  i7 = HEAP32[i1 >> 2] | 0;
  i11 = HEAP32[i7 + 8 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i12 = i7;
  } else {
   _xmlFreeDoc(i11);
   i12 = HEAP32[i1 >> 2] | 0;
  }
  _xmlFreeParserCtxt(i12);
  __ZN3WTF8fastFreeEPv(i10);
  __ZN7WebCore22XMLDocumentParserScopeD1Ev(i5);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore16XMLParserContext18createMemoryParserEP14_xmlSAXHandlerPvRKN3WTF7CStringE(i6, i4, i9, i2);
  i2 = i6 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  i2 = i8 | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i6;
  if ((i8 | 0) == 0) {
   __ZN7WebCore22XMLDocumentParserScopeD1Ev(i5);
   STACKTOP = i3;
   return;
  }
  i6 = i8 | 0;
  i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i2 | 0) != 0) {
   HEAP32[i6 >> 2] = i2;
   __ZN7WebCore22XMLDocumentParserScopeD1Ev(i5);
   STACKTOP = i3;
   return;
  }
  i2 = i8 + 4 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  i9 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i13 = i6;
  } else {
   _xmlFreeDoc(i9);
   i13 = HEAP32[i2 >> 2] | 0;
  }
  _xmlFreeParserCtxt(i13);
  __ZN3WTF8fastFreeEPv(i8);
  __ZN7WebCore22XMLDocumentParserScopeD1Ev(i5);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17XMLDocumentParser13resumeParsingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i2 | 0;
 i4 = i2 + 80 | 0;
 i5 = i2 + 88 | 0;
 i6 = i1 + 165 | 0;
 HEAP8[i6] = 0;
 i7 = i1 + 116 | 0;
 while (1) {
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i8 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  if ((i10 | 0) == (HEAP32[i8 + 4 >> 2] | 0)) {
   break;
  }
  i11 = i8 + 8 | 0;
  i12 = (HEAP32[i11 >> 2] | 0) + (i10 << 2) | 0;
  i10 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  i12 = (HEAP32[i11 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) | 0;
  i11 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  if ((i11 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
  }
  i11 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = (i11 | 0) == ((HEAP32[i8 + 12 >> 2] | 0) - 1 | 0) ? 0 : i11 + 1 | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 63](i10, i1);
  if ((i10 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
  }
  if ((HEAP8[i6] & 1) != 0) {
   i13 = 29;
   break;
  }
 }
 if ((i13 | 0) == 29) {
  STACKTOP = i2;
  return;
 }
 i13 = i1 + 216 | 0;
 __ZN7WebCore15SegmentedStringC1ERKS0_(i3, i13);
 __ZN7WebCore15SegmentedString5clearEv(i13);
 i13 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 __ZNK7WebCore15SegmentedString8toStringEv(i5, i3);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i11 = i5 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 FUNCTION_TABLE_vii[i13 & 63](i1, i4);
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i13 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i13;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP8[i1 + 167 | 0] & 1) != 0) {
   i4 = HEAP32[i7 >> 2] | 0;
   if ((HEAP32[i4 >> 2] | 0) != (HEAP32[i4 + 4 >> 2] | 0)) {
    break;
   }
   __ZN7WebCore17XMLDocumentParser3endEv(i1);
  }
 } while (0);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i3 + 36 | 0);
 i1 = i3 + 44 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i3 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 i7 = HEAP32[i3 + 16 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i7 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i3 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i9 >> 2] = 0;
  i10 = 0;
  i11 = 1;
 } else {
  HEAP32[i9 >> 2] = i8;
  i12 = i8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  i10 = 1;
  i11 = 0;
 }
 i12 = __ZN3WTF10fastMallocEj(28) | 0;
 i8 = i12;
 __ZN3JSC14SourceProviderC2ERKN3WTF6StringERKNS1_12TextPositionE(i8, i6, i4);
 HEAP32[i12 >> 2] = H_BASE + 1120;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i12 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i12 = i6 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i8;
 do {
  if (i10) {
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (i11) {
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i2 = i10 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i2 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i12 = i9 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 i11 = (HEAP32[i4 + 4 >> 2] | 0) + 1 | 0;
 HEAP32[i1 + 4 >> 2] = i9;
 HEAP32[i1 + 8 >> 2] = 0;
 i4 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0) >> 2] | 0;
 if ((i4 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i4 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 12 >> 2] = i13;
 HEAP32[i1 + 16 >> 2] = (i12 | 0) < 1 ? 1 : i12;
 HEAP32[i1 + 20 >> 2] = (i11 | 0) < 1 ? 1 : i11;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i1 + 24 | 0);
 i11 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i7 = i11 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i3 + 4 | 0;
 i11 = i1 + 32 | 0;
 i12 = HEAP8[i11] & -2 | HEAP8[i7] & 1;
 HEAP8[i11] = i12;
 HEAP8[i11] = i12 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i3 + 44 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN7WebCore16PendingCallbacks28appendStartElementNSCallbackEPKhS2_S2_iPS2_iiS3_(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i10 = __Znwj(36) | 0;
 _memset(i10 | 0, 0, 36) | 0;
 HEAP32[i10 >> 2] = H_BASE + 896;
 HEAP32[i10 + 4 >> 2] = _xmlStrdup(i2) | 0;
 HEAP32[i10 + 8 >> 2] = _xmlStrdup(i3) | 0;
 HEAP32[i10 + 12 >> 2] = _xmlStrdup(i4) | 0;
 HEAP32[i10 + 16 >> 2] = i5;
 i4 = i10 + 20 | 0;
 HEAP32[i4 >> 2] = FUNCTION_TABLE_ii[HEAP32[_xmlMalloc >> 2] & 31](i5 << 3) | 0;
 i3 = i5 << 1;
 if ((i3 | 0) > 0) {
  i5 = 0;
  while (1) {
   i2 = _xmlStrdup(HEAP32[i6 + (i5 << 2) >> 2] | 0) | 0;
   HEAP32[(HEAP32[i4 >> 2] | 0) + (i5 << 2) >> 2] = i2;
   i5 = i5 + 1 | 0;
   if ((i5 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 HEAP32[i10 + 24 >> 2] = i7;
 HEAP32[i10 + 28 >> 2] = i8;
 i8 = i10 + 32 | 0;
 HEAP32[i8 >> 2] = FUNCTION_TABLE_ii[HEAP32[_xmlMalloc >> 2] & 31](i7 * 20 & -1) | 0;
 if ((i7 | 0) > 0) {
  i3 = 0;
  while (1) {
   i5 = i3 * 5 & -1;
   i4 = _xmlStrdup(HEAP32[i9 + (i5 << 2) >> 2] | 0) | 0;
   HEAP32[(HEAP32[i8 >> 2] | 0) + (i5 << 2) >> 2] = i4;
   i4 = i5 + 1 | 0;
   i6 = _xmlStrdup(HEAP32[i9 + (i4 << 2) >> 2] | 0) | 0;
   HEAP32[(HEAP32[i8 >> 2] | 0) + (i4 << 2) >> 2] = i6;
   i6 = i5 + 2 | 0;
   i4 = _xmlStrdup(HEAP32[i9 + (i6 << 2) >> 2] | 0) | 0;
   HEAP32[(HEAP32[i8 >> 2] | 0) + (i6 << 2) >> 2] = i4;
   i4 = i5 + 4 | 0;
   i6 = i5 + 3 | 0;
   i5 = HEAP32[i9 + (i6 << 2) >> 2] | 0;
   i2 = (HEAP32[i9 + (i4 << 2) >> 2] | 0) - i5 | 0;
   i11 = _xmlStrndup(i5, i2) | 0;
   HEAP32[(HEAP32[i8 >> 2] | 0) + (i6 << 2) >> 2] = i11;
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i11 + (i4 << 2) >> 2] = (HEAP32[i11 + (i6 << 2) >> 2] | 0) + i2;
   i3 = i3 + 1 | 0;
   if ((i3 | 0) >= (i7 | 0)) {
    break;
   }
  }
 }
 i7 = i1 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i8 = i1 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i2 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    if ((i2 | 0) == 0) {
     i12 = 10;
     break;
    } else {
     i13 = 0;
     break;
    }
   } else {
    if ((i9 | 0) == (i2 - 1 | 0)) {
     i12 = 10;
     break;
    } else {
     i13 = i9;
     break;
    }
   }
  } else {
   if ((i9 + 1 | 0) == (i3 | 0)) {
    i12 = 10;
   } else {
    i13 = i9;
   }
  }
 } while (0);
 if ((i12 | 0) == 10) {
  __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore16PendingCallbacks15PendingCallbackENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv(i7);
  i13 = HEAP32[i8 >> 2] | 0;
 }
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + (i13 << 2) >> 2] = i10;
 i10 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = (i10 | 0) == ((HEAP32[i1 + 12 >> 2] | 0) - 1 | 0) ? 0 : i10 + 1 | 0;
 return;
}
function __ZN7WebCore17XMLDocumentParser10cdataBlockEPKhi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) > 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[i1 + 165 | 0] & 1) != 0) {
  i8 = HEAP32[i1 + 116 >> 2] | 0;
  i9 = __Znwj(12) | 0;
  i10 = i9;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i10 + 4 >> 2] = 0;
  HEAP32[i9 >> 2] = H_BASE + 1024;
  HEAP32[i9 + 4 >> 2] = _xmlStrndup(i2, i3) | 0;
  HEAP32[i9 + 8 >> 2] = i3;
  i10 = i8 | 0;
  i11 = HEAP32[i8 >> 2] | 0;
  i12 = i8 + 4 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i11 | 0) == 0) {
    i14 = HEAP32[i8 + 12 >> 2] | 0;
    if ((i13 | 0) == 0) {
     if ((i14 | 0) == 0) {
      i15 = 8;
      break;
     } else {
      i16 = 0;
      break;
     }
    } else {
     if ((i13 | 0) == (i14 - 1 | 0)) {
      i15 = 8;
      break;
     } else {
      i16 = i13;
      break;
     }
    }
   } else {
    if ((i13 + 1 | 0) == (i11 | 0)) {
     i15 = 8;
    } else {
     i16 = i13;
    }
   }
  } while (0);
  if ((i15 | 0) == 8) {
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore16PendingCallbacks15PendingCallbackENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv(i10);
   i16 = HEAP32[i12 >> 2] | 0;
  }
  HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + (i16 << 2) >> 2] = i9;
  i9 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = (i9 | 0) == ((HEAP32[i8 + 12 >> 2] | 0) - 1 | 0) ? 0 : i9 + 1 | 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore17XMLDocumentParser8exitTextEv(i1);
 i9 = i1 + 140 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN3WTF6String8fromUTF8EPKhj(i6, i2, i3);
 __ZN7WebCore12CDATASection6createERNS_8DocumentERKN3WTF6StringE(i5, i1, i6);
 i1 = i5 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i9 >> 2] | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i5;
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i1, i7);
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i7 + 8 | 0;
 i7 = i9 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore16PendingCallbacks15PendingCallbackENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 i7 = i3 + 1 + (i3 >>> 2) | 0;
 i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
 if (i8 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
 HEAP32[i2 >> 2] = i7 >>> 2;
 i8 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i8;
 i7 = i1 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i5 + (i10 << 2) | 0;
 do {
  if (i9 >>> 0 > i10 >>> 0) {
   if ((i10 | 0) == 0) {
    i11 = i9;
   } else {
    i12 = i5;
    i13 = i8;
    while (1) {
     i14 = i12 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i13 >> 2] = i15;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     if ((i15 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 127](i15);
     }
     i15 = i12 + 4 | 0;
     if ((i15 | 0) == (i1 | 0)) {
      break;
     } else {
      i12 = i15;
      i13 = i13 + 4 | 0;
     }
    }
    i11 = HEAP32[i7 >> 2] | 0;
   }
   i13 = i11 - i3 + (HEAP32[i2 >> 2] | 0) | 0;
   i12 = i5 + (i3 << 2) | 0;
   if ((i11 | 0) != (i3 | 0)) {
    i15 = i5 + (i11 << 2) | 0;
    i14 = (HEAP32[i4 >> 2] | 0) + (i13 << 2) | 0;
    while (1) {
     i16 = i15 | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     HEAP32[i14 >> 2] = i17;
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     if ((i17 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 127](i17);
     }
     i17 = i15 + 4 | 0;
     if ((i17 | 0) == (i12 | 0)) {
      break;
     } else {
      i15 = i17;
      i14 = i14 + 4 | 0;
     }
    }
   }
   HEAP32[i7 >> 2] = i13;
  } else {
   if ((i9 | 0) == (i10 | 0)) {
    break;
   }
   i14 = i5 + (i9 << 2) | 0;
   i15 = i8 + (i9 << 2) | 0;
   while (1) {
    i12 = i14 | 0;
    i17 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    HEAP32[i15 >> 2] = i17;
    i17 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    if ((i17 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 127](i17);
    }
    i17 = i14 + 4 | 0;
    if ((i17 | 0) == (i1 | 0)) {
     break;
    } else {
     i14 = i17;
     i15 = i15 + 4 | 0;
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
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZN7WebCore17XMLDocumentParser7commentEPKh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) > 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 165 | 0] & 1) != 0) {
  i7 = HEAP32[i1 + 116 >> 2] | 0;
  i8 = __Znwj(8) | 0;
  i9 = i8;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  HEAP32[i8 >> 2] = H_BASE + 1056;
  HEAP32[i8 + 4 >> 2] = _xmlStrdup(i2) | 0;
  i9 = i7 | 0;
  i10 = HEAP32[i7 >> 2] | 0;
  i11 = i7 + 4 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i10 | 0) == 0) {
    i13 = HEAP32[i7 + 12 >> 2] | 0;
    if ((i12 | 0) == 0) {
     if ((i13 | 0) == 0) {
      i14 = 8;
      break;
     } else {
      i15 = 0;
      break;
     }
    } else {
     if ((i12 | 0) == (i13 - 1 | 0)) {
      i14 = 8;
      break;
     } else {
      i15 = i12;
      break;
     }
    }
   } else {
    if ((i12 + 1 | 0) == (i10 | 0)) {
     i14 = 8;
    } else {
     i15 = i12;
    }
   }
  } while (0);
  if ((i14 | 0) == 8) {
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore16PendingCallbacks15PendingCallbackENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv(i9);
   i15 = HEAP32[i11 >> 2] | 0;
  }
  HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + (i15 << 2) >> 2] = i8;
  i8 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = (i8 | 0) == ((HEAP32[i7 + 12 >> 2] | 0) - 1 | 0) ? 0 : i8 + 1 | 0;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore17XMLDocumentParser8exitTextEv(i1);
 i8 = i1 + 140 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN3WTF6String8fromUTF8EPKh(i5, i2);
 __ZN7WebCore7Comment6createERNS_8DocumentERKN3WTF6StringE(i4, i1, i5);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = i4;
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i1, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i6 + 8 | 0;
 i6 = i8 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i1;
 if ((i1 | 0) >= 1) {
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
function __ZN7WebCore17XMLDocumentParser10charactersEPKhi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) > 1) {
  return;
 }
 if ((HEAP8[i1 + 165 | 0] & 1) != 0) {
  i4 = HEAP32[i1 + 116 >> 2] | 0;
  i5 = __Znwj(12) | 0;
  i6 = i5;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  HEAP32[i5 >> 2] = H_BASE + 992;
  HEAP32[i5 + 4 >> 2] = _xmlStrndup(i2, i3) | 0;
  HEAP32[i5 + 8 >> 2] = i3;
  i6 = i4 | 0;
  i7 = HEAP32[i4 >> 2] | 0;
  i8 = i4 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i7 | 0) == 0) {
    i10 = HEAP32[i4 + 12 >> 2] | 0;
    if ((i9 | 0) == 0) {
     if ((i10 | 0) == 0) {
      i11 = 8;
      break;
     } else {
      i12 = 0;
      break;
     }
    } else {
     if ((i9 | 0) == (i10 - 1 | 0)) {
      i11 = 8;
      break;
     } else {
      i12 = i9;
      break;
     }
    }
   } else {
    if ((i9 + 1 | 0) == (i7 | 0)) {
     i11 = 8;
    } else {
     i12 = i9;
    }
   }
  } while (0);
  if ((i11 | 0) == 8) {
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore16PendingCallbacks15PendingCallbackENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv(i6);
   i12 = HEAP32[i8 >> 2] | 0;
  }
  HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + (i12 << 2) >> 2] = i5;
  i5 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = (i5 | 0) == ((HEAP32[i4 + 12 >> 2] | 0) - 1 | 0) ? 0 : i5 + 1 | 0;
  return;
 }
 if ((HEAP32[i1 + 156 >> 2] | 0) == 0) {
  __ZN7WebCore17XMLDocumentParser9enterTextEv(i1);
 }
 i5 = i1 + 120 | 0;
 i4 = i1 + 128 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i12 = i8 + i3 | 0;
 i6 = i1 + 124 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if (i12 >>> 0 > i1 >>> 0) {
  i11 = i1 + 1 + (i1 >>> 2) | 0;
  i9 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  i11 = i9 >>> 0 > i12 >>> 0 ? i9 : i12;
  do {
   if (i1 >>> 0 < i11 >>> 0) {
    i9 = i5 | 0;
    i7 = HEAP32[i9 >> 2] | 0;
    i10 = __ZN3WTF18fastMallocGoodSizeEj(i11) | 0;
    HEAP32[i6 >> 2] = i10;
    i13 = __ZN3WTF10fastMallocEj(i10) | 0;
    HEAP32[i9 >> 2] = i13;
    _memcpy(i13 | 0, i7 | 0, i8) | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    if ((HEAP32[i9 >> 2] | 0) == (i7 | 0)) {
     HEAP32[i9 >> 2] = 0;
     HEAP32[i6 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i7);
   }
  } while (0);
  i14 = HEAP32[i4 >> 2] | 0;
 } else {
  i14 = i8;
 }
 if (i12 >>> 0 < i14 >>> 0) {
  _WTFCrash();
 }
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = 0;
  while (1) {
   HEAP8[i8 + (i5 + i14) | 0] = HEAP8[i2 + i5 | 0] | 0;
   i5 = i5 + 1 | 0;
   if (i5 >>> 0 >= i3 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i4 >> 2] = i12;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_ii + 4;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
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
 HEAP32[i1 + 8 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i5 = i7 + (i10 << 3) | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  if ((i4 | 0) == (-1 | 0) | (i4 | 0) == 0) {
   i12 = i11;
  } else {
   i4 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E8reinsertEOS3_(i1, i5) | 0;
   i12 = (i5 | 0) == (i2 | 0) ? i4 : i11;
  }
  i4 = i10 + 1 | 0;
  if ((i4 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i4;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i13 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i2 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i10 >> 2] = i2;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore17XMLDocumentParser14internalSubsetEPKhS2_S2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) > 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i1 + 165 | 0] & 1) != 0) {
  __ZN7WebCore16PendingCallbacks28appendInternalSubsetCallbackEPKhS2_S2_(HEAP32[i1 + 116 >> 2] | 0, i2, i3, i4);
  STACKTOP = i5;
  return;
 }
 i10 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN3WTF6String8fromUTF8EPKh(i7, i2);
 __ZN3WTF6String8fromUTF8EPKh(i8, i3);
 __ZN3WTF6String8fromUTF8EPKh(i9, i4);
 i4 = __Znwj(60) | 0;
 __ZN7WebCore12DocumentTypeC1ERNS_8DocumentERKN3WTF6StringES6_S6_(i4, i10, i7, i8, i9);
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = i4;
 __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i10 | 0, i6);
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 + 8 | 0;
   i10 = i3 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = i6 | 0;
 i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i7 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore17XMLDocumentParser5errorENS_9XMLErrors9ErrorTypeEPKcPi(i1, i2, i3, i4) {
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
 if ((HEAP32[i1 + 8 >> 2] | 0) > 1) {
  STACKTOP = i5;
  return;
 }
 if ((_vasprintf(i6 | 0, i3 | 0, i4 | 0) | 0) == -1) {
  STACKTOP = i5;
  return;
 }
 i4 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] & 63](i7, i1);
 if ((HEAP8[i1 + 165 | 0] & 1) == 0) {
  i3 = HEAP32[i6 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] & 63](i8, i1);
  __ZN7WebCore17XMLDocumentParser11handleErrorENS_9XMLErrors9ErrorTypeEPKcN3WTF12TextPositionE(i1, i2, i3, i8);
 } else {
  i8 = HEAP32[i1 + 116 >> 2] | 0;
  i1 = HEAP32[i6 >> 2] | 0;
  i3 = HEAP32[i7 >> 2] | 0;
  i4 = HEAP32[i7 + 4 >> 2] | 0;
  i7 = __Znwj(20) | 0;
  HEAP32[i7 >> 2] = H_BASE + 1088;
  HEAP32[i7 + 8 >> 2] = _xmlStrdup(i1) | 0;
  HEAP32[i7 + 4 >> 2] = i2;
  HEAP32[i7 + 12 >> 2] = i3;
  HEAP32[i7 + 16 >> 2] = i4;
  i4 = i8 | 0;
  i3 = HEAP32[i8 >> 2] | 0;
  i2 = i8 + 4 | 0;
  i1 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i3 | 0) == 0) {
    i9 = HEAP32[i8 + 12 >> 2] | 0;
    if ((i1 | 0) == 0) {
     if ((i9 | 0) == 0) {
      i10 = 9;
      break;
     } else {
      i11 = 0;
      break;
     }
    } else {
     if ((i1 | 0) == (i9 - 1 | 0)) {
      i10 = 9;
      break;
     } else {
      i11 = i1;
      break;
     }
    }
   } else {
    if ((i1 + 1 | 0) == (i3 | 0)) {
     i10 = 9;
    } else {
     i11 = i1;
    }
   }
  } while (0);
  if ((i10 | 0) == 9) {
   __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore16PendingCallbacks15PendingCallbackENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv(i4);
   i11 = HEAP32[i2 >> 2] | 0;
  }
  HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + (i11 << 2) >> 2] = i7;
  i7 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = (i7 | 0) == ((HEAP32[i8 + 12 >> 2] | 0) - 1 | 0) ? 0 : i7 + 1 | 0;
 }
 _free(HEAP32[i6 >> 2] | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17XMLDocumentParser13startDocumentEPKhS2_i(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 if ((i4 | 0) == -1) {
  i9 = (HEAP32[i1 + 16 >> 2] | 0) + 1300 | 0;
  HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -5;
  STACKTOP = i5;
  return;
 }
 do {
  if ((i2 | 0) != 0) {
   i9 = HEAP32[i1 + 16 >> 2] | 0;
   __ZN3WTF6String8fromUTF8EPKh(i6, i2);
   i10 = i5 + 8 | 0;
   HEAP32[i10 >> 2] = 0;
   __ZN7WebCore8Document13setXMLVersionERKN3WTF6StringERi(i9, i6, i10);
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i9 = i10 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i11;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) != -2) {
  i6 = HEAP32[i1 + 16 >> 2] | 0;
  i2 = i7 | 0;
  HEAP32[i2 >> 2] = 0;
  __ZN7WebCore8Document16setXMLStandaloneEbRi(i6, (i4 | 0) == 1, i2);
 }
 i2 = i1 + 16 | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = HEAP32[i2 >> 2] | 0;
   __ZN3WTF6String8fromUTF8EPKh(i8, i3);
   i4 = i8 | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i7 = i6 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   i7 = i1 + 1292 | 0;
   i1 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i6;
   do {
    if ((i1 | 0) != 0) {
     i6 = i1 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i1 = HEAP32[i4 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i7 = i1 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i8 = (HEAP32[i2 >> 2] | 0) + 1300 | 0;
 HEAP32[i8 >> 2] = HEAP32[i8 >> 2] | 4;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore16PendingCallbacks29PendingStartElementNSCallbackD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 HEAP32[i1 >> 2] = H_BASE + 896;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 4 >> 2] | 0);
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 8 >> 2] | 0);
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 12 >> 2] | 0);
 i2 = i1 + 16 | 0;
 i3 = HEAP32[_xmlFree >> 2] | 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i2 >> 2] << 1 | 0) > 0) {
  i6 = 0;
  i7 = i3;
  i8 = i5;
  while (1) {
   FUNCTION_TABLE_vi[i7 & 127](HEAP32[i8 + (i6 << 2) >> 2] | 0);
   i9 = i6 + 1 | 0;
   i10 = HEAP32[_xmlFree >> 2] | 0;
   i11 = HEAP32[i4 >> 2] | 0;
   if ((i9 | 0) < (HEAP32[i2 >> 2] << 1 | 0)) {
    i6 = i9;
    i7 = i10;
    i8 = i11;
   } else {
    i12 = i10;
    i13 = i11;
    break;
   }
  }
 } else {
  i12 = i3;
  i13 = i5;
 }
 FUNCTION_TABLE_vi[i12 & 127](i13);
 i13 = i1 + 24 | 0;
 i12 = i1 + 32 | 0;
 if ((HEAP32[i13 >> 2] | 0) > 0) {
  i14 = 0;
 } else {
  i15 = HEAP32[_xmlFree >> 2] | 0;
  i16 = HEAP32[i12 >> 2] | 0;
  i17 = i16;
  FUNCTION_TABLE_vi[i15 & 127](i17);
  return;
 }
 while (1) {
  i1 = i14 * 5 & -1;
  FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[(HEAP32[i12 >> 2] | 0) + (i1 << 2) >> 2] | 0);
  FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[(HEAP32[i12 >> 2] | 0) + (i1 + 1 << 2) >> 2] | 0);
  FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[(HEAP32[i12 >> 2] | 0) + (i1 + 2 << 2) >> 2] | 0);
  FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[(HEAP32[i12 >> 2] | 0) + (i1 + 3 << 2) >> 2] | 0);
  i14 = i14 + 1 | 0;
  if ((i14 | 0) >= (HEAP32[i13 >> 2] | 0)) {
   break;
  }
 }
 i15 = HEAP32[_xmlFree >> 2] | 0;
 i16 = HEAP32[i12 >> 2] | 0;
 i17 = i16;
 FUNCTION_TABLE_vi[i15 & 127](i17);
 return;
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
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E8reinsertEOS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 i7 = i6 >>> 7;
 i8 = (i6 >>> 30) + ~i7 | 0;
 i6 = i8 << 12 ^ i8;
 i8 = i6 >>> 7 ^ i6;
 i6 = i8 << 2 ^ i8;
 i8 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i9 = 0;
 while (1) {
  i10 = i6 & i4;
  i11 = i3 + (i10 << 3) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = i12;
  if ((i13 | 0) == 0) {
   i14 = 3;
   break;
  } else if ((i13 | 0) == (-1 | 0)) {
   i15 = i11;
  } else {
   if ((i12 | 0) == (i5 | 0)) {
    i16 = i11;
    break;
   } else {
    i15 = i9;
   }
  }
  i12 = (i7 | 0) == 0 ? i8 : i7;
  i6 = i12 + i10 | 0;
  i7 = i12;
  i9 = i15;
 }
 if ((i14 | 0) == 3) {
  i16 = (i9 | 0) != 0 ? i9 : i11;
 }
 i11 = i16 + 4 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = i16 | 0;
 i15 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i14 = i15 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i9 >> 2] = i15;
 i15 = i2 + 4 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i11 >> 2] = i2;
 return i16 | 0;
}
function __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + (i4 << 4) | 0;
 if (i3 >>> 0 <= i4 >>> 0) {
  if ((i3 | 0) == (i4 | 0)) {
   return;
  }
  i8 = i6 + (i3 << 4) | 0;
  while (1) {
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
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
   i8 = i8 + 16 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  return;
 }
 if ((i4 | 0) == 0) {
  i12 = i6;
  i13 = i3;
 } else {
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 + 12 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i6 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i4 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 16 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i12 + (i2 << 4) | 0;
 if ((i13 | 0) == (i2 | 0)) {
  return;
 }
 i2 = i12 + (i13 << 4) | 0;
 while (1) {
  i13 = HEAP32[i2 + 12 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i12 = i13 | 0;
    i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i12 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i2 = i2 + 16 | 0;
  if ((i2 | 0) == (i1 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCoreL21externalSubsetHandlerEPvPKhS2_S2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i4 | 0;
 __ZN3WTF6String8fromUTF8EPKh(i2, i3);
 i3 = i2 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 648 | 0) | 0) {
   i5 = 11;
  } else {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 616 | 0) | 0) {
    i5 = 11;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 576 | 0) | 0) {
    i5 = 11;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 536 | 0) | 0) {
    i5 = 11;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 504 | 0) | 0) {
    i5 = 11;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 456 | 0) | 0) {
    i5 = 11;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 400 | 0) | 0) {
    i5 = 11;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 360 | 0) | 0) {
    i5 = 11;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 280 | 0) | 0) {
    i5 = 11;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 240 | 0) | 0) {
    i5 = 11;
   }
  }
 } while (0);
 if ((i5 | 0) == 11) {
  HEAP8[(HEAP32[i1 + 272 >> 2] | 0) + 164 | 0] = 1;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore17XMLDocumentParser20appendFragmentSourceERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i4, i2, 0);
 i2 = i4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 3;
 } else {
  if ((HEAP32[i5 + 4 >> 2] | 0) < 0) {
   i7 = 0;
  } else {
   i6 = 3;
  }
 }
 do {
  if ((i6 | 0) == 3) {
   __ZN7WebCore17XMLDocumentParser23initializeParserContextERKN3WTF7CStringE(i1, i4);
   i5 = i1 + 112 | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i9 = 0;
   } else {
    i9 = HEAP32[i8 + 4 >> 2] | 0;
   }
   _xmlParseContent(i9);
   __ZN7WebCore17XMLDocumentParser8exitTextEv(i1);
   i8 = HEAP32[i5 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i8 + 4 >> 2] | 0;
   }
   i8 = _xmlByteConsumed(i10) | 0;
   if ((i8 | 0) == -1) {
    i7 = 0;
    break;
   }
   i11 = HEAP32[i2 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i12 = 0;
   } else {
    i12 = HEAP32[i11 + 4 >> 2] | 0;
   }
   if ((i8 | 0) != (i12 | 0)) {
    i7 = 0;
    break;
   }
   i8 = HEAP32[i5 >> 2] | 0;
   i5 = HEAP32[i8 + 4 >> 2] | 0;
   if ((HEAP32[i5 + 12 >> 2] | 0) != 0) {
    i7 = 1;
    break;
   }
   if ((i8 | 0) == 0) {
    i13 = 0;
   } else {
    i13 = i5;
   }
   i7 = (_xmlCtxtGetLastError(i13) | 0) == 0;
  }
 } while (0);
 i13 = HEAP32[i2 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return i7 | 0;
 }
 i2 = i13 | 0;
 i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i13);
  STACKTOP = i3;
  return i7 | 0;
 } else {
  HEAP32[i2 >> 2] = i12;
  STACKTOP = i3;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore17XMLDocumentParserC2ERNS_8DocumentEPNS_9FrameViewE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore24ScriptableDocumentParserC2ERNS_8DocumentENS_19ParserContentPolicyE(i1 | 0, i2, 2);
 HEAP32[i1 >> 2] = H_BASE + 728;
 HEAP32[i1 + 28 >> 2] = H_BASE + 828;
 HEAP32[i1 + 32 >> 2] = i3;
 HEAP16[i1 + 36 >> 1] = 0;
 HEAP16[i1 + 38 >> 1] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 HEAP8[i1 + 48 | 0] = 1;
 HEAP8[i1 + 49 | 0] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP16[i1 + 56 >> 1] = 0;
 _memset(i1 + 60 | 0, 0, 33) | 0;
 HEAP8[i1 + 93 | 0] = 1;
 HEAP8[i1 + 94 | 0] = 0;
 i3 = i1 + 96 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 2;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i1 + 104 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 2;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i1 + 112 >> 2] = 0;
 i3 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i3 | 0, 0, 20) | 0;
 HEAP32[i1 + 116 >> 2] = i3;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 + 128 >> 2] = 0;
 HEAP32[i1 + 132 >> 2] = -1;
 HEAP8[i1 + 136 | 0] = 0;
 HEAP32[i1 + 140 >> 2] = i2;
 _memset(i1 + 144 | 0, 0, 28) | 0;
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 + 172 | 0, 0);
 HEAP32[i1 + 176 >> 2] = 0;
 HEAP32[i1 + 180 >> 2] = -1;
 HEAP32[i1 + 184 >> 2] = -1;
 HEAP8[i1 + 188 | 0] = 0;
 HEAP32[i1 + 224 >> 2] = 0;
 _memset(i1 + 192 | 0, 0, 28) | 0;
 HEAP8[i1 + 228 | 0] = 1;
 HEAP8[i1 + 229 | 0] = 0;
 HEAP32[i1 + 232 >> 2] = 0;
 HEAP32[i1 + 220 >> 2] = 0;
 HEAP16[i1 + 236 >> 1] = 0;
 _memset(i1 + 240 | 0, 0, 33) | 0;
 HEAP8[i1 + 273 | 0] = 1;
 HEAP8[i1 + 274 | 0] = 0;
 i2 = i1 + 276 | 0;
 HEAP32[i2 >> 2] = F_BASE_vi + 2;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 284 | 0;
 HEAP32[i2 >> 2] = F_BASE_vi + 2;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore17XMLDocumentParserC1ERNS_8DocumentEPNS_9FrameViewE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore24ScriptableDocumentParserC2ERNS_8DocumentENS_19ParserContentPolicyE(i1 | 0, i2, 2);
 HEAP32[i1 >> 2] = H_BASE + 728;
 HEAP32[i1 + 28 >> 2] = H_BASE + 828;
 HEAP32[i1 + 32 >> 2] = i3;
 HEAP16[i1 + 36 >> 1] = 0;
 HEAP16[i1 + 38 >> 1] = 0;
 HEAP32[i1 + 44 >> 2] = 0;
 HEAP8[i1 + 48 | 0] = 1;
 HEAP8[i1 + 49 | 0] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP16[i1 + 56 >> 1] = 0;
 _memset(i1 + 60 | 0, 0, 33) | 0;
 HEAP8[i1 + 93 | 0] = 1;
 HEAP8[i1 + 94 | 0] = 0;
 i3 = i1 + 96 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 2;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i1 + 104 | 0;
 HEAP32[i3 >> 2] = F_BASE_vi + 2;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i1 + 112 >> 2] = 0;
 i3 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i3 | 0, 0, 20) | 0;
 HEAP32[i1 + 116 >> 2] = i3;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 + 128 >> 2] = 0;
 HEAP32[i1 + 132 >> 2] = -1;
 HEAP8[i1 + 136 | 0] = 0;
 HEAP32[i1 + 140 >> 2] = i2;
 _memset(i1 + 144 | 0, 0, 28) | 0;
 __ZN7WebCore24CachedResourceHandleBaseC2EPNS_14CachedResourceE(i1 + 172 | 0, 0);
 HEAP32[i1 + 176 >> 2] = 0;
 HEAP32[i1 + 180 >> 2] = -1;
 HEAP32[i1 + 184 >> 2] = -1;
 HEAP8[i1 + 188 | 0] = 0;
 HEAP32[i1 + 224 >> 2] = 0;
 _memset(i1 + 192 | 0, 0, 28) | 0;
 HEAP8[i1 + 228 | 0] = 1;
 HEAP8[i1 + 229 | 0] = 0;
 HEAP32[i1 + 232 >> 2] = 0;
 HEAP32[i1 + 220 >> 2] = 0;
 HEAP16[i1 + 236 >> 1] = 0;
 _memset(i1 + 240 | 0, 0, 33) | 0;
 HEAP8[i1 + 273 | 0] = 1;
 HEAP8[i1 + 274 | 0] = 0;
 i2 = i1 + 276 | 0;
 HEAP32[i2 >> 2] = F_BASE_vi + 2;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 284 | 0;
 HEAP32[i2 >> 2] = F_BASE_vi + 2;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore20ResourceResponseBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 80 | 0);
 i2 = HEAP32[i1 + 76 >> 2] | 0;
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
 i2 = HEAP32[i1 + 68 >> 2] | 0;
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
 i2 = HEAP32[i1 + 64 >> 2] | 0;
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
 i2 = HEAP32[i1 >> 2] | 0;
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
function __ZN7WebCoreL23shouldAllowExternalLoadERKNS_3URLE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(i2, H_BASE + 200 | 0) | 0) {
   i5 = 0;
   i6 = 11;
  } else {
   if (!i3) {
    if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i2, H_BASE + 184 | 0, 8, 0) | 0) {
     if (__ZNK3WTF10StringImpl8endsWithEPKcjb(i2, H_BASE + 168 | 0, 12, 0) | 0) {
      i7 = 0;
      break;
     }
    }
    if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i2, H_BASE + 136 | 0, 26, 0) | 0) {
     i5 = 0;
     i6 = 11;
     break;
    }
    if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i2, H_BASE + 104 | 0, 30, 0) | 0) {
     i7 = 0;
     break;
    }
   }
   if (__ZNK7WebCore14SecurityOrigin10canRequestERKNS_3URLE(HEAP32[(HEAP32[(HEAP32[__ZN7WebCore22XMLDocumentParserScope27currentCachedResourceLoaderE >> 2] | 0) + 44 >> 2] | 0) + 100 >> 2] | 0, i1) | 0) {
    i5 = 1;
    i6 = 11;
    break;
   }
   __ZNK7WebCore20CachedResourceLoader24printAccessDeniedMessageERKNS_3URLE(HEAP32[__ZN7WebCore22XMLDocumentParserScope27currentCachedResourceLoaderE >> 2] | 0, i1);
   i5 = 0;
   i6 = 11;
  }
 } while (0);
 do {
  if ((i6 | 0) == 11) {
   if (i3) {
    i8 = i5;
   } else {
    i7 = i5;
    break;
   }
   return i8 | 0;
  }
 } while (0);
 i5 = i2 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i8 = i7;
  return i8 | 0;
 } else {
  HEAP32[i5 >> 2] = i3;
  i8 = i7;
  return i8 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 3) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 3 << 3) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (i6 << 3) >> 2] = i2;
 i5 = i2 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i12 + (i6 << 3) + 4 >> 2] = i5;
 if ((i5 | 0) == 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 }
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 i13 = HEAP32[i3 >> 2] | 0;
 i14 = i13 + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 return;
}
function __ZN7WebCoreL16getEntityHandlerEPvPKh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i1 + 272 >> 2] | 0;
 i8 = _xmlGetPredefinedEntity(i2) | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i8 + 48 >> 2] = 6;
  i9 = i8;
  STACKTOP = i3;
  return i9 | 0;
 }
 i8 = _xmlGetDocEntity(HEAP32[i1 + 8 >> 2] | 0, i2) | 0;
 if ((i8 | 0) != 0) {
  i9 = i8;
  STACKTOP = i3;
  return i9 | 0;
 }
 if ((HEAP8[i7 + 164 | 0] & 1) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i7 = i6 | 0;
 i8 = __ZN7WebCore29decodeNamedEntityToUCharArrayEPKcPt(i2, i7) | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 HEAP32[i4 >> 2] = i7;
 HEAP32[i5 >> 2] = H_BASE + 1232;
 if ((__ZN3WTF7Unicode18convertUTF16ToUTF8EPPKtS2_PPcS4_b(i4, i6 + (i8 << 1) | 0, i5, H_BASE + 1241 | 0, 1) | 0) != 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 HEAP8[HEAP32[i5 >> 2] | 0] = 0;
 i8 = HEAP32[i5 >> 2] | 0;
 i5 = i8 - (H_BASE + 1232) | 0;
 if ((i8 | 0) == (H_BASE + 1232 | 0)) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 if ((HEAP32[H_BASE + 1156 >> 2] | 0) == 0) {
  HEAP32[H_BASE + 1156 >> 2] = 17;
  HEAP32[H_BASE + 1188 >> 2] = H_BASE + 1232;
  HEAP32[H_BASE + 1192 >> 2] = H_BASE + 1232;
  HEAP32[H_BASE + 1200 >> 2] = 6;
 }
 HEAP32[H_BASE + 1196 >> 2] = i5;
 HEAP32[H_BASE + 1160 >> 2] = i2;
 HEAP32[H_BASE + 1200 >> 2] = 1;
 i9 = H_BASE + 1152;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 3) | 0;
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   HEAP32[i7 >> 2] = i2;
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = i6 + 4 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i7 + 4 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i9 = i2 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i2;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i6 | 0);
   i9 = i6 + 8 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 8 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore16XMLParserContext18createMemoryParserEP14_xmlSAXHandlerPvRKN3WTF7CStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 if (!(HEAP8[H_BASE + 1144 | 0] | 0)) {
  _xmlInitParser();
  _xmlRegisterInputCallbacks(F_BASE_ii + 12 | 0, F_BASE_ii + 14 | 0, F_BASE_iiii + 2 | 0, F_BASE_ii + 10 | 0) | 0;
  _xmlRegisterOutputCallbacks(F_BASE_ii + 12 | 0, F_BASE_ii + 14 | 0, F_BASE_iiii + 4 | 0, F_BASE_ii + 10 | 0) | 0;
  i5 = __ZN3WTF13currentThreadEv() | 0;
  HEAP32[H_BASE + 1248 >> 2] = i5;
  HEAP8[H_BASE + 1144 | 0] = 1;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  i7 = 0;
 } else {
  i6 = HEAP32[i5 + 4 >> 2] | 0;
  i7 = i5 + 8 | 0;
 }
 i5 = _xmlCreateMemoryParserCtxt(i7, i6) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  _memcpy(HEAP32[i5 >> 2] | 0, i2 | 0, 128) | 0;
  _xmlCtxtUseOptions(i5, 4098) | 0;
  HEAP32[i5 + 324 >> 2] = 1;
  HEAP32[i5 + 172 >> 2] = 7;
  HEAP32[i5 + 248 >> 2] = 0;
  i2 = i5 + 296 | 0;
  HEAP32[i5 + 312 >> 2] = _xmlDictLookup(HEAP32[i2 >> 2] | 0, H_BASE + 712 | 0, 3) | 0;
  HEAP32[i5 + 316 >> 2] = _xmlDictLookup(HEAP32[i2 >> 2] | 0, H_BASE + 704 | 0, 5) | 0;
  HEAP32[i5 + 320 >> 2] = _xmlDictLookup(HEAP32[i2 >> 2] | 0, H_BASE + 320 | 0, 36) | 0;
  HEAP32[i5 + 272 >> 2] = i3;
  i3 = __ZN3WTF10fastMallocEj(8) | 0;
  HEAP32[i3 >> 2] = 1;
  HEAP32[i3 + 4 >> 2] = i5;
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZNK3WTF12StringAppendIPKcNS_6StringEEcvNS_12AtomicStringEEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i8 = i5 | 0;
 i9 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i2 = i9 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i7, i5);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 }
 if ((HEAP32[i4 + 16 >> 2] & 16 | 0) == 0) {
  __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i4);
  HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
  i10 = i4 | 0;
 } else {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = i4;
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
  i10 = i6;
 }
 i6 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore18xmlDocPtrForStringEPNS_20CachedResourceLoaderERKN3WTF6StringES5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i2 = HEAP32[i7 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i9 = HEAP32[i7 + 16 >> 2] & 32;
 i10 = (i9 | 0) != 0;
 if (i10) {
  i11 = HEAP32[i7 + 8 >> 2] | 0;
 } else {
  i11 = HEAP32[i7 + 8 >> 2] | 0;
 }
 i7 = Math_imul(i2, 2 - (i9 >>> 5) | 0) | 0;
 i9 = i10 ? H_BASE + 64 | 0 : H_BASE + 688 | 0;
 __ZN7WebCore22XMLDocumentParserScopeC1EPNS_20CachedResourceLoaderEPFvPvPKczEPFvS3_P9_xmlErrorES3_(i5, i1, F_BASE_viii + 6 | 0, 0, 0);
 __ZNK3WTF6String6latin1Ev(i6, i3);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = i6 + 8 | 0;
 }
 i6 = _xmlReadMemory(i11, i7, i12, i9, 16398) | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 | 0;
   i12 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i3 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22XMLDocumentParserScopeD1Ev(i5);
 i8 = i6;
 STACKTOP = i4;
 return i8 | 0;
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
function __ZN7WebCore16PendingCallbacks28appendInternalSubsetCallbackEPKhS2_S2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = __Znwj(16) | 0;
 _memset(i5 | 0, 0, 12) | 0;
 HEAP32[i5 >> 2] = H_BASE + 928;
 HEAP32[i5 + 4 >> 2] = _xmlStrdup(i2) | 0;
 HEAP32[i5 + 8 >> 2] = _xmlStrdup(i3) | 0;
 HEAP32[i5 + 12 >> 2] = _xmlStrdup(i4) | 0;
 i4 = i1 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i2 = i1 + 4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i7 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i6 | 0) == 0) {
    if ((i7 | 0) == 0) {
     i8 = 6;
     break;
    } else {
     i9 = 0;
     break;
    }
   } else {
    if ((i6 | 0) == (i7 - 1 | 0)) {
     i8 = 6;
     break;
    } else {
     i9 = i6;
     break;
    }
   }
  } else {
   if ((i6 + 1 | 0) == (i3 | 0)) {
    i8 = 6;
   } else {
    i9 = i6;
   }
  }
 } while (0);
 if ((i8 | 0) == 6) {
  __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore16PendingCallbacks15PendingCallbackENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv(i4);
  i9 = HEAP32[i2 >> 2] | 0;
 }
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + (i9 << 2) >> 2] = i5;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = (i5 | 0) == ((HEAP32[i1 + 12 >> 2] | 0) - 1 | 0) ? 0 : i5 + 1 | 0;
 return;
}
function __ZN7WebCore16PendingCallbacks35appendProcessingInstructionCallbackEPKhS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = __Znwj(12) | 0;
 i5 = i4;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i4 >> 2] = H_BASE + 864;
 HEAP32[i4 + 4 >> 2] = _xmlStrdup(i2) | 0;
 HEAP32[i4 + 8 >> 2] = _xmlStrdup(i3) | 0;
 i3 = i1 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i7 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i6 | 0) == 0) {
    if ((i7 | 0) == 0) {
     i8 = 6;
     break;
    } else {
     i9 = 0;
     break;
    }
   } else {
    if ((i6 | 0) == (i7 - 1 | 0)) {
     i8 = 6;
     break;
    } else {
     i9 = i6;
     break;
    }
   }
  } else {
   if ((i6 + 1 | 0) == (i2 | 0)) {
    i8 = 6;
   } else {
    i9 = i6;
   }
  }
 } while (0);
 if ((i8 | 0) == 6) {
  __ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore16PendingCallbacks15PendingCallbackENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv(i3);
  i9 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + (i9 << 2) >> 2] = i4;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = (i4 | 0) == ((HEAP32[i1 + 12 >> 2] | 0) - 1 | 0) ? 0 : i4 + 1 | 0;
 return;
}
function __ZN7WebCore16XMLParserContext18createStringParserEP14_xmlSAXHandlerPv(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if (!(HEAP8[H_BASE + 1144 | 0] | 0)) {
  _xmlInitParser();
  _xmlRegisterInputCallbacks(F_BASE_ii + 12 | 0, F_BASE_ii + 14 | 0, F_BASE_iiii + 2 | 0, F_BASE_ii + 10 | 0) | 0;
  _xmlRegisterOutputCallbacks(F_BASE_ii + 12 | 0, F_BASE_ii + 14 | 0, F_BASE_iiii + 4 | 0, F_BASE_ii + 10 | 0) | 0;
  i4 = __ZN3WTF13currentThreadEv() | 0;
  HEAP32[H_BASE + 1248 >> 2] = i4;
  HEAP8[H_BASE + 1144 | 0] = 1;
 }
 i4 = _xmlCreatePushParserCtxt(i2, 0, 0, 0, 0) | 0;
 HEAP32[i4 + 272 >> 2] = i3;
 _xmlCtxtUseOptions(i4, 2) | 0;
 _xmlSwitchEncoding(i4, 2) | 0;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i3 >> 2] = 1;
 HEAP32[i3 + 4 >> 2] = i4;
 HEAP32[i1 >> 2] = i3;
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
function __ZN7WebCore16PendingCallbacks20PendingErrorCallback4callEPNS_17XMLDocumentParserE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 + 12 >> 2];
 HEAP32[i4 + 4 >> 2] = i7;
 __ZN7WebCore17XMLDocumentParser11handleErrorENS_9XMLErrors9ErrorTypeEPKcN3WTF12TextPositionE(i2, i5, i6, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL8readFuncEPvPci(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((i1 | 0) == (H_BASE + 1256 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 + 12 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = (HEAP32[i1 + 8 >> 2] | 0) - i6 | 0;
 i8 = i7 >>> 0 < i3 >>> 0 ? i7 : i3;
 if ((i8 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 _memcpy(i2 | 0, (HEAP32[i1 >> 2] | 0) + i6 | 0, i8) | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i8;
 i4 = i8;
 return i4 | 0;
}
function __ZNK7WebCore17XMLDocumentParser12textPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 112 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i2 + 36 >> 2] | 0;
   i2 = (HEAP32[i4 + 32 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i4 + 28 >> 2] | 0) - 1;
   HEAP32[i1 + 4 >> 2] = i2;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN3JSC20StringSourceProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1120;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3JSC20StringSourceProviderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1120;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
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
function __ZN7WebCore16PendingCallbacks29PendingStartElementNSCallback4callEPNS_17XMLDocumentParserE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17XMLDocumentParser14startElementNsEPKhS2_S2_iPS2_iiS3_(i2, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0, HEAP32[i1 + 16 >> 2] | 0, HEAP32[i1 + 20 >> 2] | 0, HEAP32[i1 + 24 >> 2] | 0, HEAP32[i1 + 28 >> 2] | 0, HEAP32[i1 + 32 >> 2] | 0);
 return;
}
function __ZN7WebCoreL18normalErrorHandlerEPvPKcz(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5;
 HEAP32[i6 >> 2] = i3;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN7WebCore17XMLDocumentParser5errorENS_9XMLErrors9ErrorTypeEPKcPi(HEAP32[i1 + 272 >> 2] | 0, 1, i2, i5 | 0);
 _llvm_va_end(i6 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL17fatalErrorHandlerEPvPKcz(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5;
 HEAP32[i6 >> 2] = i3;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN7WebCore17XMLDocumentParser5errorENS_9XMLErrors9ErrorTypeEPKcPi(HEAP32[i1 + 272 >> 2] | 0, 2, i2, i5 | 0);
 _llvm_va_end(i6 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL14warningHandlerEPvPKcz(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5;
 HEAP32[i6 >> 2] = i3;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN7WebCore17XMLDocumentParser5errorENS_9XMLErrors9ErrorTypeEPKcPi(HEAP32[i1 + 272 >> 2] | 0, 0, i2, i5 | 0);
 _llvm_va_end(i6 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL9closeFuncEPv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((i1 | 0) == (H_BASE + 1256 | 0) | (i1 | 0) == 0) {
  return 0;
 }
 i2 = i1 + 8 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return 0;
}
function __ZN7WebCore16PendingCallbacks29PendingInternalSubsetCallbackD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 928;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 4 >> 2] | 0);
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 8 >> 2] | 0);
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 12 >> 2] | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCoreL21startElementNsHandlerEPvPKhS2_S2_iPS2_iiS3_(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 __ZN7WebCore17XMLDocumentParser14startElementNsEPKhS2_S2_iPS2_iiS3_(HEAP32[i1 + 272 >> 2] | 0, i2, i3, i4, i5, i6, i7, i8, i9);
 return;
}
function __ZN7WebCore16PendingCallbacks29PendingInternalSubsetCallbackD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 928;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 4 >> 2] | 0);
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 8 >> 2] | 0);
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 12 >> 2] | 0);
 return;
}
function dynCall_viiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 FUNCTION_TABLE_viiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function __ZN7WebCore16XMLParserContextD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1;
  _xmlFreeParserCtxt(i4);
  return;
 }
 _xmlFreeDoc(i3);
 i4 = HEAP32[i2 >> 2] | 0;
 _xmlFreeParserCtxt(i4);
 return;
}
function __ZN7WebCore16XMLParserContextD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1;
  _xmlFreeParserCtxt(i4);
  return;
 }
 _xmlFreeDoc(i3);
 i4 = HEAP32[i2 >> 2] | 0;
 _xmlFreeParserCtxt(i4);
 return;
}
function __ZN7WebCoreL9matchFuncEPKc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[__ZN7WebCore22XMLDocumentParserScope27currentCachedResourceLoaderE >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = __ZN3WTF13currentThreadEv() | 0;
 i2 = (i1 | 0) == (HEAP32[H_BASE + 1248 >> 2] | 0) | 0;
 return i2 | 0;
}
function __ZN7WebCore17XMLDocumentParser11stopParsingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore14DocumentParser11stopParsingEv(i1 | 0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 _xmlStopParser(i1);
 return;
}
function __ZN7WebCore16PendingCallbacks36PendingProcessingInstructionCallbackD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 864;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 4 >> 2] | 0);
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 8 >> 2] | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCoreL20startDocumentHandlerEPv(i1) {
 i1 = i1 | 0;
 _xmlSwitchEncoding(i1, 2) | 0;
 __ZN7WebCore17XMLDocumentParser13startDocumentEPKhS2_i(HEAP32[i1 + 272 >> 2] | 0, HEAP32[i1 + 20 >> 2] | 0, HEAP32[i1 + 24 >> 2] | 0, HEAP32[i1 + 28 >> 2] | 0);
 _xmlSAX2StartDocument(i1);
 return;
}
function __ZN7WebCore16PendingCallbacks36PendingProcessingInstructionCallbackD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 864;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 4 >> 2] | 0);
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 8 >> 2] | 0);
 return;
}
function viiii___ZN7WebCore25DecodedDataDocumentParser11appendBytesERNS_14DocumentWriterEPKcj__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore25DecodedDataDocumentParser11appendBytesERNS_14DocumentWriterEPKcj(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore16PendingCallbacks29PendingInternalSubsetCallback4callEPNS_17XMLDocumentParserE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17XMLDocumentParser14internalSubsetEPKhS2_S2_(i2, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0);
 return;
}
function __ZN7WebCoreL21internalSubsetHandlerEPvPKhS2_S2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore17XMLDocumentParser14internalSubsetEPKhS2_S2_(HEAP32[i1 + 272 >> 2] | 0, i2, i3, i4);
 _xmlSAX2InternalSubset(i1, i2, i3, i4);
 return;
}
function __ZN7WebCore16PendingCallbacks36PendingProcessingInstructionCallback4callEPNS_17XMLDocumentParserE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17XMLDocumentParser21processingInstructionEPKhS2_(i2, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0);
 return;
}
function __ZN7WebCore16PendingCallbacks25PendingCharactersCallback4callEPNS_17XMLDocumentParserE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17XMLDocumentParser10charactersEPKhi(i2, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0);
 return;
}
function __ZN7WebCore16PendingCallbacks25PendingCDATABlockCallback4callEPNS_17XMLDocumentParserE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17XMLDocumentParser10cdataBlockEPKhi(i2, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0);
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
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function vii___ZN7WebCore17XMLDocumentParser6appendEN3WTF10PassRefPtrINS1_10StringImplEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17XMLDocumentParser6appendEN3WTF10PassRefPtrINS1_10StringImplEEE(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZThn28_N7WebCore17XMLDocumentParser14notifyFinishedEPNS_14CachedResourceE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn28_N7WebCore17XMLDocumentParser14notifyFinishedEPNS_14CachedResourceE(i1 | 0, i2 | 0);
}
function __ZN7WebCoreL24entityDeclarationHandlerEPvPKhiS2_S2_Ph(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 _xmlSAX2EntityDecl(i1, i2, i3, i4, i5, i6);
 return;
}
function __ZN7WebCoreL28processingInstructionHandlerEPvPKhS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore17XMLDocumentParser21processingInstructionEPKhS2_(HEAP32[i1 + 272 >> 2] | 0, i2, i3);
 return;
}
function __ZN7WebCore16PendingCallbacks25PendingCDATABlockCallbackD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 1024;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 4 >> 2] | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore16PendingCallbacks25PendingCharactersCallbackD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 992;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 4 >> 2] | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore16PendingCallbacks22PendingCommentCallbackD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 1056;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 4 >> 2] | 0);
 __ZdlPv(i1);
 return;
}
function vii___ZN7WebCore17XMLDocumentParser14notifyFinishedEPNS_14CachedResourceE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17XMLDocumentParser14notifyFinishedEPNS_14CachedResourceE(i1 | 0, i2 | 0);
}
function __ZN7WebCore16PendingCallbacks20PendingErrorCallbackD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 1088;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 8 >> 2] | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCoreL19endElementNsHandlerEPvPKhS2_S2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore17XMLDocumentParser12endElementNsEv(HEAP32[i1 + 272 >> 2] | 0);
 return;
}
function __ZN7WebCore16PendingCallbacks22PendingCommentCallback4callEPNS_17XMLDocumentParserE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17XMLDocumentParser7commentEPKh(i2, HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function vii___ZN7WebCore25DecodedDataDocumentParser5flushERNS_14DocumentWriterE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25DecodedDataDocumentParser5flushERNS_14DocumentWriterE(i1 | 0, i2 | 0);
}
function __ZN7WebCore16PendingCallbacks25PendingCDATABlockCallbackD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 1024;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore16PendingCallbacks25PendingCharactersCallbackD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 992;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore16PendingCallbacks22PendingCommentCallbackD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 1056;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function vii___ZN7WebCore17XMLDocumentParser6insertERKNS_15SegmentedStringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17XMLDocumentParser6insertERKNS_15SegmentedStringE(i1 | 0, i2 | 0);
}
function __ZN7WebCore16PendingCallbacks20PendingErrorCallbackD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 1088;
 FUNCTION_TABLE_vi[HEAP32[_xmlFree >> 2] & 127](HEAP32[i1 + 8 >> 2] | 0);
 return;
}
function __ZN7WebCoreL17charactersHandlerEPvPKhi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore17XMLDocumentParser10charactersEPKhi(HEAP32[i1 + 272 >> 2] | 0, i2, i3);
 return;
}
function __ZN7WebCoreL17cdataBlockHandlerEPvPKhi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore17XMLDocumentParser10cdataBlockEPKhi(HEAP32[i1 + 272 >> 2] | 0, i2, i3);
 return;
}
function __ZN7WebCore16PendingCallbacks27PendingEndElementNSCallback4callEPNS_17XMLDocumentParserE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17XMLDocumentParser12endElementNsEv(i2);
 return;
}
function __ZN7WebCore16PendingCallbacks29PendingStartElementNSCallbackD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16PendingCallbacks29PendingStartElementNSCallbackD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function __ZThn28_N7WebCore17XMLDocumentParserD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 292 + 264 | 0;
 __ZN7WebCore17XMLDocumentParserD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function b6(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(6);
}
function __ZN7WebCore17XMLDocumentParser18supportsXMLVersionERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 return __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 96 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore16PendingCallbacks29PendingStartElementNSCallbackD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16PendingCallbacks29PendingStartElementNSCallbackD2Ev(i1);
 return;
}
function ii___ZNK7WebCore17XMLDocumentParser19isWaitingForScriptsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17XMLDocumentParser19isWaitingForScriptsEv(i1 | 0) | 0;
}
function __ZN7WebCoreL18endDocumentHandlerEPv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17XMLDocumentParser8exitTextEv(HEAP32[i1 + 272 >> 2] | 0);
 _xmlSAX2EndDocument(i1);
 return;
}
function __ZN7WebCoreL14commentHandlerEPvPKh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17XMLDocumentParser7commentEPKh(HEAP32[i1 + 272 >> 2] | 0, i2);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function vi___ZN7WebCore14DocumentParser21suspendScheduledTasksEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14DocumentParser21suspendScheduledTasksEv(i1 | 0);
}
function vi___ZN7WebCore14DocumentParser20resumeScheduledTasksEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14DocumentParser20resumeScheduledTasksEv(i1 | 0);
}
function vi___ZN7WebCore14DocumentParser20prepareToStopParsingEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14DocumentParser20prepareToStopParsingEv(i1 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString12advanceEmptyEv(i1 | 0);
}
function __ZN7WebCore17XMLDocumentParserD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17XMLDocumentParserD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vi___ZN7WebCore14DocumentParser12startParsingEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14DocumentParser12startParsingEv(i1 | 0);
}
function __ZThn28_N7WebCore17XMLDocumentParserD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17XMLDocumentParserD2Ev(i1 - 292 + 264 | 0);
 return;
}
function __ZN7WebCore17XMLDocumentParser11endDocumentEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17XMLDocumentParser8exitTextEv(i1);
 return;
}
function vi___ZN7WebCore17XMLDocumentParser6finishEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17XMLDocumentParser6finishEv(i1 | 0);
}
function vi___ZN7WebCore17XMLDocumentParser6detachEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17XMLDocumentParser6detachEv(i1 | 0);
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
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZN7WebCoreL26ignorableWhitespaceHandlerEPvPKhi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZNK7WebCore17XMLDocumentParser10wellFormedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 160 | 0] & 1) == 0 | 0;
}
function __ZN7WebCore24ScriptableDocumentParser35executeScriptsWaitingForStylesheetsEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore16PendingCallbacks27PendingEndElementNSCallbackD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore24ScriptableDocumentParser26asScriptableDocumentParserEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function __ZN7WebCoreL9writeFuncEPvPKci(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZN7WebCoreL9errorFuncEPvPKcz(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore16PendingCallbacks27PendingEndElementNSCallbackD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore24ScriptableDocumentParser17isExecutingScriptEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore20CachedResourceClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 127](i2 | 0);
}
function __ZNK3JSC20StringSourceProvider6sourceEv(i1) {
 i1 = i1 | 0;
 return i1 + 24 | 0;
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function __ZN7WebCore14DocumentParser17hasInsertionPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore14DocumentParser14processingDataEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14DocumentParser15pinToMainThreadEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
  var FUNCTION_TABLE_iiii = [b0,b0,__ZN7WebCoreL8readFuncEPvPci,b0,__ZN7WebCoreL9writeFuncEPvPKci,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper,b1,__ZThn28_N7WebCore17XMLDocumentParserD0Ev,b1,__ZN7WebCore16PendingCallbacks29PendingStartElementNSCallbackD0Ev,b1,__ZN7WebCore17XMLDocumentParserD2Ev,b1,__ZN7WebCoreL20startDocumentHandlerEPv,b1,__ZN7WebCore16PendingCallbacks20PendingErrorCallbackD1Ev,b1,__ZN7WebCore16PendingCallbacks25PendingCharactersCallbackD1Ev,b1,__ZThn28_N7WebCore17XMLDocumentParserD1Ev,b1,vi___ZN7WebCore14DocumentParser20prepareToStopParsingEv__wrapper,b1,__ZN7WebCore16PendingCallbacks20PendingErrorCallbackD0Ev,b1,__ZN7WebCore17XMLDocumentParser11stopParsingEv,b1,__ZN7WebCore14DocumentParser15pinToMainThreadEv,b1,__ZN7WebCore24ScriptableDocumentParser35executeScriptsWaitingForStylesheetsEv,b1,__ZN7WebCore16PendingCallbacks25PendingCharactersCallbackD0Ev
  ,b1,__ZN7WebCore16PendingCallbacks27PendingEndElementNSCallbackD1Ev,b1,vi___ZN7WebCore14DocumentParser12startParsingEv__wrapper,b1,__ZN7WebCore16PendingCallbacks27PendingEndElementNSCallbackD0Ev,b1,__ZN3JSC20StringSourceProviderD0Ev,b1,vi___ZN7WebCore14DocumentParser20resumeScheduledTasksEv__wrapper,b1,vi___ZN7WebCore17XMLDocumentParser6detachEv__wrapper,b1,__ZN7WebCore16XMLParserContextD2Ev,b1,__ZN7WebCore16PendingCallbacks25PendingCDATABlockCallbackD1Ev,b1,vi___ZN7WebCore17XMLDocumentParser6finishEv__wrapper,b1,__ZN7WebCore17XMLDocumentParserD0Ev,b1,__ZN3JSC20StringSourceProviderD1Ev,b1,__ZN7WebCoreL18endDocumentHandlerEPv,b1,vi___ZN7WebCore14DocumentParser21suspendScheduledTasksEv__wrapper,b1,__ZN7WebCore16PendingCallbacks22PendingCommentCallbackD1Ev,b1,__ZN7WebCore16PendingCallbacks29PendingInternalSubsetCallbackD1Ev
  ,b1,__ZN7WebCore16PendingCallbacks36PendingProcessingInstructionCallbackD1Ev,b1,__ZN7WebCore16PendingCallbacks29PendingInternalSubsetCallbackD0Ev,b1,__ZN7WebCore16PendingCallbacks36PendingProcessingInstructionCallbackD0Ev,b1,__ZN7WebCore16PendingCallbacks25PendingCDATABlockCallbackD0Ev,b1,__ZN7WebCore16PendingCallbacks22PendingCommentCallbackD0Ev,b1,__ZN7WebCore16PendingCallbacks29PendingStartElementNSCallbackD1Ev,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore17XMLDocumentParser14notifyFinishedEPNS_14CachedResourceE__wrapper,b2,vii___ZN7WebCore25DecodedDataDocumentParser5flushERNS_14DocumentWriterE__wrapper,b2,__ZN7WebCore16PendingCallbacks29PendingStartElementNSCallback4callEPNS_17XMLDocumentParserE,b2,__ZN7WebCore16PendingCallbacks27PendingEndElementNSCallback4callEPNS_17XMLDocumentParserE,b2,vii___ZN7WebCore17XMLDocumentParser6insertERKNS_15SegmentedStringE__wrapper,b2,__ZN7WebCore16PendingCallbacks29PendingInternalSubsetCallback4callEPNS_17XMLDocumentParserE,b2,__ZN7WebCore16PendingCallbacks20PendingErrorCallback4callEPNS_17XMLDocumentParserE,b2,vii___ZThn28_N7WebCore17XMLDocumentParser14notifyFinishedEPNS_14CachedResourceE__wrapper,b2,__ZN7WebCoreL14commentHandlerEPvPKh,b2,__ZN7WebCore16PendingCallbacks36PendingProcessingInstructionCallback4callEPNS_17XMLDocumentParserE,b2,vii___ZN7WebCore17XMLDocumentParser6appendEN3WTF10PassRefPtrINS1_10StringImplEEE__wrapper,b2,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b2,__ZNK7WebCore17XMLDocumentParser12textPositionEv,b2,__ZN7WebCore16PendingCallbacks25PendingCDATABlockCallback4callEPNS_17XMLDocumentParserE
  ,b2,__ZN7WebCore16PendingCallbacks22PendingCommentCallback4callEPNS_17XMLDocumentParserE,b2,__ZN7WebCore16PendingCallbacks25PendingCharactersCallback4callEPNS_17XMLDocumentParserE,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore17XMLDocumentParser10wellFormedEv,b3,__ZNK3JSC20StringSourceProvider6sourceEv,b3,ii___ZNK7WebCore17XMLDocumentParser19isWaitingForScriptsEv__wrapper,b3,__ZN7WebCore24ScriptableDocumentParser26asScriptableDocumentParserEv,b3,__ZN7WebCoreL9closeFuncEPv,b3,__ZN7WebCoreL9matchFuncEPKc,b3,__ZN7WebCoreL8openFuncEPKc,b3,__ZN7WebCore14DocumentParser17hasInsertionPointEv,b3,__ZNK7WebCore24ScriptableDocumentParser17isExecutingScriptEv,b3,__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv,b3,__ZNK7WebCore14DocumentParser14processingDataEv,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCoreL17cdataBlockHandlerEPvPKhi,b4,__ZN7WebCoreL28processingInstructionHandlerEPvPKhS2_,b4,__ZN7WebCoreL9errorFuncEPvPKcz,b4,__ZN7WebCoreL18normalErrorHandlerEPvPKcz,b4,__ZN7WebCoreL14warningHandlerEPvPKcz,b4,__ZN7WebCoreL17fatalErrorHandlerEPvPKcz,b4,__ZN7WebCore17XMLDocumentParserC2ERNS_8DocumentEPNS_9FrameViewE,b4,__ZN7WebCoreL17charactersHandlerEPvPKhi,b4,__ZN7WebCoreL26ignorableWhitespaceHandlerEPvPKhi,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_viiiiiiiii = [b6,b6,__ZN7WebCoreL31attributesStartElementNsHandlerEPvPKhS2_S2_iPS2_iiS3_,b6,__ZN7WebCoreL21startElementNsHandlerEPvPKhS2_S2_iPS2_iiS3_,b6,b6,b6];
  var FUNCTION_TABLE_viiiiii = [b7,b7,__ZN7WebCoreL24entityDeclarationHandlerEPvPKhiS2_S2_Ph,b7];
  var FUNCTION_TABLE_iii = [b8,b8,__ZN7WebCoreL16getEntityHandlerEPvPKh,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,__ZN7WebCore17XMLDocumentParserC2ERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE,b9,__ZN7WebCoreL21internalSubsetHandlerEPvPKhS2_S2_,b9,__ZN7WebCoreL19endElementNsHandlerEPvPKhS2_S2_,b9,__ZN7WebCoreL21externalSubsetHandlerEPvPKhS2_S2_,b9,viiii___ZN7WebCore25DecodedDataDocumentParser11appendBytesERNS_14DocumentWriterEPKcj__wrapper,b9,b9,b9,b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_strncmp": _strncmp, "_llvm_va_end": _llvm_va_end, "_malloc": _malloc, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_vasprintf": _vasprintf, "_snprintf": _snprintf, "___setErrNo": ___setErrNo, "_asprintf": _asprintf, "__reallyNegative": __reallyNegative, "__formatString": __formatString, "_free": _free, "_strcmp": _strcmp, "_llvm_lifetime_start": _llvm_lifetime_start, "_sprintf": _sprintf, "_llvm_lifetime_end": _llvm_lifetime_end, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames11templateTagE": __ZN7WebCore9HTMLNames11templateTagE, "_xmlMalloc": _xmlMalloc, "__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE": __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE, "__ZN7WebCore22XMLDocumentParserScope27currentCachedResourceLoaderE": __ZN7WebCore22XMLDocumentParserScope27currentCachedResourceLoaderE, "__ZN3WTF9emptyAtomE": __ZN3WTF9emptyAtomE, "__ZN7WebCore7anyNameE": __ZN7WebCore7anyNameE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZN3WTF9xmlnsAtomE": __ZN3WTF9xmlnsAtomE, "_xmlFree": _xmlFree }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore16PendingCallbacks28appendStartElementNSCallbackEPKhS2_S2_iPS2_iiS3_","_strlen","__ZN7WebCore16PendingCallbacks35appendProcessingInstructionCallbackEPKhS2_","__ZN7WebCoreL28processingInstructionHandlerEPvPKhS2_","__ZN7WebCore16PendingCallbacks25PendingCharactersCallbackD1Ev","__ZN7WebCore17XMLDocumentParserC2ERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE","__ZThn28_N7WebCore17XMLDocumentParserD1Ev","__ZN7WebCore16PendingCallbacks20PendingErrorCallbackD1Ev","__ZN7WebCoreL19endElementNsHandlerEPvPKhS2_S2_","__ZN7WebCore20ResourceResponseBaseD2Ev","__ZN7WebCore17XMLDocumentParser14startElementNsEPKhS2_S2_iPS2_iiS3_","__ZN7WebCore18xmlDocPtrForStringEPNS_20CachedResourceLoaderERKN3WTF6StringES5_","__ZN7WebCore14DocumentParser15pinToMainThreadEv","__ZN7WebCore15parseAttributesERKN3WTF6StringERb","__ZN7WebCoreL9closeFuncEPv","__ZN7WebCoreL9writeFuncEPvPKci","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_","__ZN7WebCore16PendingCallbacks29PendingInternalSubsetCallback4callEPNS_17XMLDocumentParserE","__ZN7WebCore14DocumentParser17hasInsertionPointEv","__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv","__ZN7WebCore16XMLParserContext18createMemoryParserEP14_xmlSAXHandlerPvRKN3WTF7CStringE","__ZN7WebCoreL8readFuncEPvPci","__ZN7WebCoreL23shouldAllowExternalLoadERKNS_3URLE","__ZN7WebCoreL18endDocumentHandlerEPv","__ZN7WebCore17XMLDocumentParser14internalSubsetEPKhS2_S2_","__ZN7WebCoreL9errorFuncEPvPKcz","__ZNK7WebCore14DocumentParser14processingDataEv","__ZN7WebCore16PendingCallbacks25PendingCDATABlockCallbackD0Ev","__ZN7WebCore16PendingCallbacks36PendingProcessingInstructionCallbackD0Ev","__ZNK7WebCore17XMLDocumentParser12textPositionEv","__ZN7WebCore17XMLDocumentParserD2Ev","__ZN7WebCore16PendingCallbacks36PendingProcessingInstructionCallback4callEPNS_17XMLDocumentParserE","__ZN7WebCore16XMLParserContext18createStringParserEP14_xmlSAXHandlerPv","__ZN7WebCore16PendingCallbacks25PendingCharactersCallbackD0Ev","__ZN7WebCore16PendingCallbacks25PendingCharactersCallback4callEPNS_17XMLDocumentParserE","__ZThn28_N7WebCore17XMLDocumentParserD0Ev","__ZN7WebCore16PendingCallbacks29PendingStartElementNSCallbackD0Ev","__ZNK3WTF12StringAppendINS0_INS_6StringEPKcEES1_EcvS1_Ev","__ZN7WebCore17XMLDocumentParserC2ERNS_8DocumentEPNS_9FrameViewE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_22IdentityHashTranslatorIS6_EERKS1_RKS3_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_","__ZN7WebCore17XMLDocumentParser7doWriteERKN3WTF6StringE","__ZN7WebCoreL17cdataBlockHandlerEPvPKhi","__ZNK3JSC20StringSourceProvider6sourceEv","__ZN7WebCoreL17charactersHandlerEPvPKhi","__ZN7WebCoreL21externalSubsetHandlerEPvPKhS2_S2_","__ZN3WTF5DequeINSt3__110unique_ptrIN7WebCore16PendingCallbacks15PendingCallbackENS1_14default_deleteIS5_EEEELj0EE14expandCapacityEv","__ZN7WebCore17XMLDocumentParser10cdataBlockEPKhi","__ZN7WebCore17XMLDocumentParser18supportsXMLVersionERKN3WTF6StringE","__ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE","__ZN7WebCore17XMLDocumentParser10charactersEPKhi","__ZN7WebCoreL9matchFuncEPKc","__ZN7WebCore17XMLDocumentParser20appendFragmentSourceERKN3WTF6StringE","__ZN7WebCoreL31attributesStartElementNsHandlerEPvPKhS2_S2_iPS2_iiS3_","__ZN7WebCore16PendingCallbacks20PendingErrorCallback4callEPNS_17XMLDocumentParserE","__ZNK7WebCore24ScriptableDocumentParser17isExecutingScriptEv","__ZN7WebCore16PendingCallbacks22PendingCommentCallbackD0Ev","__ZN7WebCoreL14commentHandlerEPvPKh","__ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCoreL21startElementNsHandlerEPvPKhS2_S2_iPS2_iiS3_","__ZN7WebCore17XMLDocumentParser5doEndEv","__ZN7WebCore16PendingCallbacks36PendingProcessingInstructionCallbackD1Ev","__ZN7WebCoreL8openFuncEPKc","__ZN7WebCore17XMLDocumentParser7commentEPKh","__ZN7WebCore16PendingCallbacks25PendingCDATABlockCallbackD1Ev","__ZN7WebCore17XMLDocumentParser11endDocumentEv","__ZN7WebCore16PendingCallbacks29PendingStartElementNSCallbackD2Ev","__ZN7WebCore17XMLDocumentParser5errorENS_9XMLErrors9ErrorTypeEPKcPi","__ZN7WebCore16PendingCallbacks29PendingStartElementNSCallback4callEPNS_17XMLDocumentParserE","__ZN7WebCoreL20startDocumentHandlerEPv","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_SH_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_","__ZN7WebCore16PendingCallbacks27PendingEndElementNSCallback4callEPNS_17XMLDocumentParserE","_memset","_memcpy","__ZN7WebCore24ScriptableDocumentParser26asScriptableDocumentParserEv","__ZN7WebCoreL14warningHandlerEPvPKcz","__ZN7WebCoreL17fatalErrorHandlerEPvPKcz","__ZN3WTF13tryMakeStringINS_12StringAppendINS_6StringEPKcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore16PendingCallbacks27PendingEndElementNSCallbackD1Ev","__ZN3JSC20StringSourceProviderD0Ev","__ZN7WebCore16PendingCallbacks29PendingInternalSubsetCallbackD0Ev","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore17XMLDocumentParserD0Ev","__ZN7WebCore16PendingCallbacks22PendingCommentCallbackD1Ev","__ZN7WebCore15ResourceRequestD2Ev","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZN7WebCoreL26ignorableWhitespaceHandlerEPvPKhi","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISB_S6_EERKS1_RS1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SB_S9_EEEEOT0_OT1_","__ZN7WebCore16PendingCallbacks28appendInternalSubsetCallbackEPKhS2_S2_","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E8reinsertEOS3_","__ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv","__ZNK7WebCore17XMLDocumentParser10wellFormedEv","__ZNK3WTF12StringAppendIPKcNS_6StringEEcvNS_12AtomicStringEEv","__ZN7WebCore16PendingCallbacks20PendingErrorCallbackD0Ev","__ZN7WebCore17XMLDocumentParser23initializeParserContextERKN3WTF7CStringE","__ZN7WebCore17XMLDocumentParser11stopParsingEv","__ZN7WebCore24ScriptableDocumentParser35executeScriptsWaitingForStylesheetsEv","__ZN7WebCoreL24entityDeclarationHandlerEPvPKhiS2_S2_Ph","__ZN7WebCore17XMLDocumentParser13startDocumentEPKhS2_i","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_S1_EENS_24KeyValuePairKeyExtractorIS3_EENS_16AtomicStringHashENS_7HashMapIS1_S1_S6_NS_10HashTraitsIS1_EES9_E18KeyValuePairTraitsES9_E6expandEPS3_","__ZN7WebCore16PendingCallbacks25PendingCDATABlockCallback4callEPNS_17XMLDocumentParserE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore17XMLDocumentParser21processingInstructionEPKhS2_","__ZN7WebCore16PendingCallbacks27PendingEndElementNSCallbackD0Ev","__ZN7WebCore17XMLDocumentParser12endElementNsEv","__ZN7WebCore16XMLParserContextD2Ev","__ZN3JSC20StringSourceProviderD1Ev","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN7WebCore16PendingCallbacks29PendingStartElementNSCallbackD1Ev","__ZN7WebCore16PendingCallbacks29PendingInternalSubsetCallbackD1Ev","__ZN7WebCoreL21internalSubsetHandlerEPvPKhS2_S2_","__ZN7WebCoreL18normalErrorHandlerEPvPKcz","__ZN7WebCore17XMLDocumentParser13resumeParsingEv","__ZN7WebCore16PendingCallbacks22PendingCommentCallback4callEPNS_17XMLDocumentParserE","__ZN7WebCoreL16getEntityHandlerEPvPKh"]

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
H_BASE = parentModule["_malloc"](200 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 200;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18HTMLDocumentParserC1ERNS_12HTMLDocumentE;
var __ZN7WebCore18HTMLDocumentParserC1ERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE;
var __ZN7WebCore18HTMLDocumentParserD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,228,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,224,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames11noframesTagE=env.__ZN7WebCore9HTMLNames11noframesTagE|0;
  var __ZN7WebCore9HTMLNames12plaintextTagE=env.__ZN7WebCore9HTMLNames12plaintextTagE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN7WebCore9HTMLNames11textareaTagE=env.__ZN7WebCore9HTMLNames11textareaTagE|0;
  var __ZN7WebCore9HTMLNames8titleTagE=env.__ZN7WebCore9HTMLNames8titleTagE|0;
  var __ZN7WebCore9HTMLNames11noscriptTagE=env.__ZN7WebCore9HTMLNames11noscriptTagE|0;
  var __ZN7WebCore9HTMLNames6xmpTagE=env.__ZN7WebCore9HTMLNames6xmpTagE|0;
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames10noembedTagE=env.__ZN7WebCore9HTMLNames10noembedTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18HTMLDocumentParserE=(H_BASE+8)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore18HTMLDocumentParserC2ERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = i2 + 20 | 0;
 __ZN7WebCore24ScriptableDocumentParserC2ERNS_8DocumentENS_19ParserContentPolicyE(i1 | 0, HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0, i4);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 28 >> 2] = H_BASE + 136;
 HEAP32[i1 + 32 >> 2] = H_BASE + 172;
 i4 = i1 + 36 | 0;
 __ZN7WebCore17HTMLParserOptionsC1ERNS_8DocumentE(i4, HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0);
 i6 = i1 + 44 | 0;
 HEAP16[i6 >> 1] = 0;
 HEAP16[i1 + 46 >> 1] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP8[i1 + 56 | 0] = 1;
 HEAP8[i1 + 57 | 0] = 0;
 HEAP32[i1 + 60 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP16[i1 + 64 >> 1] = 0;
 _memset(i1 + 68 | 0, 0, 33) | 0;
 HEAP8[i1 + 101 | 0] = 1;
 HEAP8[i1 + 102 | 0] = 0;
 i7 = i1 + 104 | 0;
 HEAP32[i7 >> 2] = F_BASE_vi + 2;
 HEAP32[i7 + 4 >> 2] = 0;
 i7 = i1 + 112 | 0;
 HEAP32[i7 >> 2] = F_BASE_vi + 2;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = i6;
 i6 = __ZN3WTF10fastMallocEj(2244) | 0;
 i7 = i6 + 28 | 0;
 i8 = i7;
 i9 = i6 + 16 | 0;
 HEAP32[i9 >> 2] = i8;
 i10 = i6 + 20 | 0;
 HEAP32[i10 >> 2] = 256;
 HEAP32[i6 + 24 >> 2] = 0;
 HEAP32[i6 + 544 >> 2] = i6 + 556;
 HEAP32[i6 + 548 >> 2] = 10;
 HEAP32[i6 + 552 >> 2] = 0;
 HEAP32[i6 + 2240 >> 2] = 0;
 _memset(i6 | 0, 0, 16) | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i9 >> 2] = i8;
  HEAP32[i10 >> 2] = 256;
 }
 HEAP16[i6 + 540 >> 1] = 0;
 HEAP32[i1 + 124 >> 2] = i6;
 i6 = __ZN3WTF10fastMallocEj(196) | 0;
 __ZN7WebCore13HTMLTokenizerC1ERKNS_17HTMLParserOptionsE(i6, i4);
 i10 = i1 + 128 | 0;
 HEAP32[i10 >> 2] = i6;
 HEAP32[i1 + 132 >> 2] = 0;
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 i8 = __ZN3WTF10fastMallocEj(176) | 0;
 __ZN7WebCore15HTMLTreeBuilderC1ERNS_18HTMLDocumentParserERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE(i8, i1, i2, i3, i6, i4);
 HEAP32[i1 + 136 >> 2] = i8;
 HEAP32[i1 + 140 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP32[i1 + 148 >> 2] = 0;
 __ZN7WebCore17HTMLSourceTrackerC1Ev(i1 + 152 | 0);
 HEAP32[i1 + 308 >> 2] = 0;
 HEAP32[i1 + 312 >> 2] = 0;
 i8 = i1 + 316 | 0;
 __ZN7WebCore10XSSAuditorC1Ev(i8);
 __ZN7WebCore18XSSAuditorDelegateC1ERNS_8DocumentE(i1 + 408 | 0, HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0);
 HEAP32[i1 + 464 >> 2] = 0;
 HEAP8[i1 + 468 | 0] = 1;
 HEAP8[i1 + 469 | 0] = 0;
 HEAP8[i1 + 470 | 0] = 0;
 HEAP32[i1 + 472 >> 2] = 0;
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i11 = 0;
  } else {
   i10 = HEAP32[i3 + 44 >> 2] | 0;
   i6 = HEAP32[__ZN7WebCore9HTMLNames8titleTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 2;
    break;
   }
   i2 = HEAP32[i10 + 12 >> 2] | 0;
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 2;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 2;
    break;
   }
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 2;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 6;
    break;
   }
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames6xmpTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 6;
    break;
   }
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 6;
    break;
   }
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames10noembedTagE >> 2] | 0;
   do {
    if ((i10 | 0) == (i6 | 0)) {
     i12 = 22;
    } else {
     if ((i2 | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
      i12 = 22;
     }
    }
   } while (0);
   if ((i12 | 0) == 22) {
    if ((HEAP8[i1 + 37 | 0] & 1) != 0) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames11noscriptTagE >> 2] | 0;
   do {
    if ((i10 | 0) == (i6 | 0)) {
     i12 = 26;
    } else {
     if ((i2 | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
      i12 = 26;
     }
    }
   } while (0);
   if ((i12 | 0) == 26) {
    if ((HEAP8[i4 | 0] & 1) != 0) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames11noframesTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 6;
    break;
   }
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 6;
    break;
   }
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames12plaintextTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 6;
    break;
   }
   if ((i2 | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
    i11 = 0;
    break;
   }
   i11 = (HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0) ? 6 : 0;
  }
 } while (0);
 HEAP32[i5 >> 2] = i11;
 __ZN7WebCore10XSSAuditor15initForFragmentEv(i8);
 return;
}
function __ZN7WebCore18HTMLDocumentParserC1ERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = i2 + 20 | 0;
 __ZN7WebCore24ScriptableDocumentParserC2ERNS_8DocumentENS_19ParserContentPolicyE(i1 | 0, HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0, i4);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 28 >> 2] = H_BASE + 136;
 HEAP32[i1 + 32 >> 2] = H_BASE + 172;
 i4 = i1 + 36 | 0;
 __ZN7WebCore17HTMLParserOptionsC1ERNS_8DocumentE(i4, HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0);
 i6 = i1 + 44 | 0;
 HEAP16[i6 >> 1] = 0;
 HEAP16[i1 + 46 >> 1] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP8[i1 + 56 | 0] = 1;
 HEAP8[i1 + 57 | 0] = 0;
 HEAP32[i1 + 60 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP16[i1 + 64 >> 1] = 0;
 _memset(i1 + 68 | 0, 0, 33) | 0;
 HEAP8[i1 + 101 | 0] = 1;
 HEAP8[i1 + 102 | 0] = 0;
 i7 = i1 + 104 | 0;
 HEAP32[i7 >> 2] = F_BASE_vi + 2;
 HEAP32[i7 + 4 >> 2] = 0;
 i7 = i1 + 112 | 0;
 HEAP32[i7 >> 2] = F_BASE_vi + 2;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = i6;
 i6 = __ZN3WTF10fastMallocEj(2244) | 0;
 i7 = i6 + 28 | 0;
 i8 = i7;
 i9 = i6 + 16 | 0;
 HEAP32[i9 >> 2] = i8;
 i10 = i6 + 20 | 0;
 HEAP32[i10 >> 2] = 256;
 HEAP32[i6 + 24 >> 2] = 0;
 HEAP32[i6 + 544 >> 2] = i6 + 556;
 HEAP32[i6 + 548 >> 2] = 10;
 HEAP32[i6 + 552 >> 2] = 0;
 HEAP32[i6 + 2240 >> 2] = 0;
 _memset(i6 | 0, 0, 16) | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i9 >> 2] = i8;
  HEAP32[i10 >> 2] = 256;
 }
 HEAP16[i6 + 540 >> 1] = 0;
 HEAP32[i1 + 124 >> 2] = i6;
 i6 = __ZN3WTF10fastMallocEj(196) | 0;
 __ZN7WebCore13HTMLTokenizerC1ERKNS_17HTMLParserOptionsE(i6, i4);
 i10 = i1 + 128 | 0;
 HEAP32[i10 >> 2] = i6;
 HEAP32[i1 + 132 >> 2] = 0;
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 i8 = __ZN3WTF10fastMallocEj(176) | 0;
 __ZN7WebCore15HTMLTreeBuilderC1ERNS_18HTMLDocumentParserERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE(i8, i1, i2, i3, i6, i4);
 HEAP32[i1 + 136 >> 2] = i8;
 HEAP32[i1 + 140 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP32[i1 + 148 >> 2] = 0;
 __ZN7WebCore17HTMLSourceTrackerC1Ev(i1 + 152 | 0);
 HEAP32[i1 + 308 >> 2] = 0;
 HEAP32[i1 + 312 >> 2] = 0;
 i8 = i1 + 316 | 0;
 __ZN7WebCore10XSSAuditorC1Ev(i8);
 __ZN7WebCore18XSSAuditorDelegateC1ERNS_8DocumentE(i1 + 408 | 0, HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0);
 HEAP32[i1 + 464 >> 2] = 0;
 HEAP8[i1 + 468 | 0] = 1;
 HEAP8[i1 + 469 | 0] = 0;
 HEAP8[i1 + 470 | 0] = 0;
 HEAP32[i1 + 472 >> 2] = 0;
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i11 = 0;
  } else {
   i10 = HEAP32[i3 + 44 >> 2] | 0;
   i6 = HEAP32[__ZN7WebCore9HTMLNames8titleTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 2;
    break;
   }
   i2 = HEAP32[i10 + 12 >> 2] | 0;
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 2;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames11textareaTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 2;
    break;
   }
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 2;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 6;
    break;
   }
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames6xmpTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 6;
    break;
   }
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 6;
    break;
   }
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames10noembedTagE >> 2] | 0;
   do {
    if ((i10 | 0) == (i6 | 0)) {
     i12 = 22;
    } else {
     if ((i2 | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
      i12 = 22;
     }
    }
   } while (0);
   if ((i12 | 0) == 22) {
    if ((HEAP8[i1 + 37 | 0] & 1) != 0) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames11noscriptTagE >> 2] | 0;
   do {
    if ((i10 | 0) == (i6 | 0)) {
     i12 = 26;
    } else {
     if ((i2 | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
      i12 = 26;
     }
    }
   } while (0);
   if ((i12 | 0) == 26) {
    if ((HEAP8[i4 | 0] & 1) != 0) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames11noframesTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 6;
    break;
   }
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 6;
    break;
   }
   if ((i2 | 0) == (HEAP32[i6 + 12 >> 2] | 0)) {
    if ((HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
     i11 = 6;
     break;
    }
   }
   i6 = HEAP32[__ZN7WebCore9HTMLNames12plaintextTagE >> 2] | 0;
   if ((i10 | 0) == (i6 | 0)) {
    i11 = 6;
    break;
   }
   if ((i2 | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
    i11 = 0;
    break;
   }
   i11 = (HEAP32[i10 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0) ? 6 : 0;
  }
 } while (0);
 HEAP32[i5 >> 2] = i11;
 __ZN7WebCore10XSSAuditor15initForFragmentEv(i8);
 return;
}
function __ZN7WebCore15AtomicHTMLToken20initializeAttributesERKN3WTF6VectorINS_9HTMLToken9AttributeELj10ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i1 + 32 | 0;
 __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i9, 0);
 if (i8 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i10 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 3) | 0;
 i11 = i1 + 36 | 0;
 HEAP32[i11 >> 2] = i10 >>> 3;
 i12 = i9 | 0;
 HEAP32[i12 >> 2] = __ZN3WTF10fastMallocEj(i10) | 0;
 i10 = i2 | 0;
 i2 = i4 | 0;
 i13 = i5 | 0;
 i14 = i1 + 40 | 0;
 i15 = i6 | 0;
 i16 = i6 + 4 | 0;
 i17 = i6;
 i18 = i6 | 0;
 i19 = 0;
 L7 : while (1) {
  if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i19 >>> 0) {
   i20 = 6;
   break;
  }
  i21 = HEAP32[i10 >> 2] | 0;
  do {
   if ((HEAP32[i21 + (i19 * 168 & -1) + 24 >> 2] | 0) != 0) {
    __ZN3WTF12AtomicString3addEPKtj(i4, HEAP32[i21 + (i19 * 168 & -1) + 92 >> 2] | 0, HEAP32[i21 + (i19 * 168 & -1) + 100 >> 2] | 0);
    i22 = HEAP32[i2 >> 2] | 0;
    __ZNK7WebCore15AtomicHTMLToken16nameForAttributeERKNS_9HTMLToken9AttributeE(i5, i1, i21 + (i19 * 168 & -1) | 0);
    i23 = HEAP32[i13 >> 2] | 0;
    i24 = HEAP32[i14 >> 2] | 0;
    L12 : do {
     if ((i24 | 0) == 0) {
      i20 = 17;
     } else {
      i25 = HEAP32[i12 >> 2] | 0;
      i26 = i23 + 12 | 0;
      i27 = i23 + 16 | 0;
      i28 = 0;
      while (1) {
       i29 = HEAP32[i25 + (i28 << 3) >> 2] | 0;
       if ((i29 | 0) == (i23 | 0)) {
        break;
       }
       if ((HEAP32[i29 + 12 >> 2] | 0) == (HEAP32[i26 >> 2] | 0)) {
        if ((HEAP32[i29 + 16 >> 2] | 0) == (HEAP32[i27 >> 2] | 0)) {
         break;
        }
       }
       i29 = i28 + 1 | 0;
       if (i29 >>> 0 < i24 >>> 0) {
        i28 = i29;
       } else {
        i20 = 17;
        break L12;
       }
      }
      if (i24 >>> 0 <= i28 >>> 0) {
       i20 = 14;
       break L7;
      }
      if ((i25 + (i28 << 3) | 0) == 0) {
       i20 = 17;
      }
     }
    } while (0);
    if ((i20 | 0) == 17) {
     i20 = 0;
     HEAP32[i15 >> 2] = i23;
     i24 = i23 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
     HEAP32[i16 >> 2] = i22;
     if ((i22 | 0) != 0) {
      i24 = i22 | 0;
      HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
     }
     i24 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i24 | 0) == (HEAP32[i11 >> 2] | 0)) {
       i27 = i24 + 1 | 0;
       i26 = HEAP32[i12 >> 2] | 0;
       do {
        if (i26 >>> 0 > i6 >>> 0) {
         i20 = 24;
        } else {
         if ((i26 + (i24 << 3) | 0) >>> 0 <= i6 >>> 0) {
          i20 = 24;
          break;
         }
         i29 = i27 + (i24 >>> 2) | 0;
         i30 = i29 >>> 0 > 16 >>> 0 ? i29 : 16;
         __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i9, i30 >>> 0 > i27 >>> 0 ? i30 : i27);
         i30 = HEAP32[i12 >> 2] | 0;
         i31 = i30 + (i17 - i26 >> 3 << 3) | 0;
         i32 = i30;
        }
       } while (0);
       if ((i20 | 0) == 24) {
        i20 = 0;
        i26 = i27 + (i24 >>> 2) | 0;
        i28 = i26 >>> 0 > 16 >>> 0 ? i26 : 16;
        __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i9, i28 >>> 0 > i27 >>> 0 ? i28 : i27);
        i31 = i6;
        i32 = HEAP32[i12 >> 2] | 0;
       }
       i28 = HEAP32[i14 >> 2] | 0;
       i26 = HEAP32[i31 >> 2] | 0;
       HEAP32[i32 + (i28 << 3) >> 2] = i26;
       i25 = i26 | 0;
       HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
       i25 = HEAP32[i31 + 4 >> 2] | 0;
       HEAP32[i32 + (i28 << 3) + 4 >> 2] = i25;
       if ((i25 | 0) == 0) {
        break;
       }
       i28 = i25 | 0;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
      } else {
       i28 = HEAP32[i12 >> 2] | 0;
       i25 = HEAP32[i15 >> 2] | 0;
       HEAP32[i28 + (i24 << 3) >> 2] = i25;
       i26 = i25 | 0;
       HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
       i26 = HEAP32[i16 >> 2] | 0;
       HEAP32[i28 + (i24 << 3) + 4 >> 2] = i26;
       if ((i26 | 0) == 0) {
        break;
       }
       i28 = i26 | 0;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
      }
     } while (0);
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     i24 = HEAP32[i16 >> 2] | 0;
     do {
      if ((i24 | 0) != 0) {
       i23 = i24 | 0;
       i28 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
       if ((i28 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i23 >> 2] = i28;
        break;
       }
      }
     } while (0);
     __ZN7WebCore13QualifiedNameD1Ev(i18);
    }
    __ZN7WebCore13QualifiedNameD1Ev(i5);
    if ((i22 | 0) == 0) {
     break;
    }
    i24 = i22 | 0;
    i28 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
    if ((i28 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i22);
     break;
    } else {
     HEAP32[i24 >> 2] = i28;
     break;
    }
   }
  } while (0);
  i21 = i19 + 1 | 0;
  if (i21 >>> 0 < i8 >>> 0) {
   i19 = i21;
  } else {
   i20 = 40;
   break;
  }
 }
 if ((i20 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i20 | 0) == 14) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i20 | 0) == 40) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore18HTMLDocumentParser13pumpTokenizerENS0_15SynchronousModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 32 | 0;
 i6 = i3 + 40 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 56 | 0;
 i9 = i3 + 72 | 0;
 i10 = i1 + 136 | 0;
 i11 = i1 + 16 | 0;
 if ((HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0) == 0) {
  i12 = HEAP32[i11 >> 2] | 0;
 } else {
  i12 = 0;
 }
 __ZN7WebCore11PumpSessionC1ERjPNS_8DocumentE(i4, i1 + 472 | 0, i12);
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i1 + 44 | 0;
 __ZNK7WebCore15SegmentedString11currentLineEv(i6, i13);
 i14 = HEAP32[i6 >> 2] | 0;
 L4 : do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i5);
  } else {
   do {
    if ((i12 | 0) != 0) {
     i6 = __ZNK7WebCore8Document4pageEv(i12) | 0;
     do {
      if ((i6 | 0) == 0) {
       i15 = HEAP32[i12 + 2204 >> 2] | 0;
       if ((i15 | 0) == 0) {
        i16 = 0;
        break;
       }
       i16 = __ZNK7WebCore8Document4pageEv(i15) | 0;
      } else {
       i16 = i6;
      }
     } while (0);
     i6 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(i16) | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation17willWriteHTMLImplEPNS_19InstrumentingAgentsEjPNS_5FrameE(i5, i6, i14, HEAP32[i12 + 332 >> 2] | 0);
     break L4;
    }
   } while (0);
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i5);
  }
 } while (0);
 i12 = i1 + 316 | 0;
 i14 = i1 + 408 | 0;
 __ZN7WebCore10XSSAuditor4initEPNS_8DocumentEPNS_18XSSAuditorDelegateE(i12, HEAP32[i11 >> 2] | 0, i14);
 i16 = i4 + 24 | 0;
 L16 : do {
  if (__ZN7WebCore18HTMLDocumentParser16canTakeNextTokenENS0_15SynchronousModeERNS_11PumpSessionE(i1, i2, i4) | 0) {
   i6 = i1 + 152 | 0;
   i15 = i1 + 128 | 0;
   i17 = i1 + 124 | 0;
   i18 = i8 | 0;
   i19 = i8 + 4 | 0;
   i20 = i8 + 8 | 0;
   i21 = i7 | 0;
   while (1) {
    if ((HEAP8[i16] & 1) != 0) {
     break L16;
    }
    if ((HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0) == 0) {
     __ZN7WebCore17HTMLSourceTracker5startERNS_15SegmentedStringEPNS_13HTMLTokenizerERNS_9HTMLTokenE(i6, i13, HEAP32[i15 >> 2] | 0, HEAP32[i17 >> 2] | 0);
    }
    if (!(__ZN7WebCore13HTMLTokenizer9nextTokenERNS_15SegmentedStringERNS_9HTMLTokenE(HEAP32[i15 >> 2] | 0, i13, HEAP32[i17 >> 2] | 0) | 0)) {
     break L16;
    }
    do {
     if ((HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0) == 0) {
      __ZN7WebCore17HTMLSourceTracker3endERNS_15SegmentedStringEPNS_13HTMLTokenizerERNS_9HTMLTokenE(i6, i13, HEAP32[i15 >> 2] | 0, HEAP32[i17 >> 2] | 0);
      i22 = HEAP8[(HEAP32[i15 >> 2] | 0) + 5 | 0] & 1;
      HEAP32[i18 >> 2] = HEAP32[i17 >> 2];
      HEAP32[i19 >> 2] = i6;
      HEAP8[i20] = i22;
      __ZN7WebCore10XSSAuditor11filterTokenERKNS_18FilterTokenRequestE(i7, i12, i8);
      i22 = HEAP32[i21 >> 2] | 0;
      if ((i22 | 0) == 0) {
       break;
      }
      __ZN7WebCore18XSSAuditorDelegate14didBlockScriptERKNS_7XSSInfoE(i14, i22);
      i22 = HEAP32[i21 >> 2] | 0;
      if ((i22 | 0) == 0) {
       break;
      }
      __ZdlPv(i22 | 0);
     }
    } while (0);
    __ZN7WebCore18HTMLDocumentParser26constructTreeFromHTMLTokenERNS_9HTMLTokenE(i1, HEAP32[i17 >> 2] | 0);
    if (!(__ZN7WebCore18HTMLDocumentParser16canTakeNextTokenENS0_15SynchronousModeERNS_11PumpSessionE(i1, i2, i4) | 0)) {
     break;
    }
   }
  }
 } while (0);
 if ((HEAP32[i1 + 8 >> 2] | 0) > 1) {
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i5);
  __ZN7WebCore11PumpSessionD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i16] & 1) != 0) {
  __ZN7WebCore19HTMLParserScheduler17scheduleForResumeEv(HEAP32[i1 + 148 >> 2] | 0);
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
  i16 = i1 + 140 | 0;
  i2 = HEAP32[i16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i14 = __ZN3WTF10fastMallocEj(2476) | 0;
   i8 = HEAP32[i11 >> 2] | 0;
   __ZN7WebCore18HTMLPreloadScannerC1ERKNS_17HTMLParserOptionsERKNS_3URLEf(i14, i1 + 36 | 0, i8 + 356 | 0, +__ZNK7WebCore8Document17deviceScaleFactorEv(i8));
   i8 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i14;
   if ((i8 | 0) == 0) {
    i23 = i14;
   } else {
    __ZN7WebCore18HTMLPreloadScannerD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    i23 = HEAP32[i16 >> 2] | 0;
   }
   __ZN7WebCore18HTMLPreloadScanner11appendToEndERKNS_15SegmentedStringE(i23, i13);
   i24 = HEAP32[i16 >> 2] | 0;
  } else {
   i24 = i2;
  }
  __ZN7WebCore18HTMLPreloadScanner4scanEPNS_21HTMLResourcePreloaderERKNS_3URLE(i24, HEAP32[i1 + 464 >> 2] | 0, (HEAP32[i11 >> 2] | 0) + 500 | 0);
 }
 __ZNK7WebCore15SegmentedString11currentLineEv(i9, i13);
 i13 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i5);
  __ZN7WebCore11PumpSessionD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i5);
  __ZN7WebCore11PumpSessionD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore24InspectorInstrumentation16didWriteHTMLImplERKNS_30InspectorInstrumentationCookieEj(i5, i13);
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i5);
 __ZN7WebCore11PumpSessionD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18HTMLDocumentParser6appendEN3WTF10PassRefPtrINS1_10StringImplEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 88 | 0;
 i7 = i1 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) > 1) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 4 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = i2;
 i2 = i1 + 140 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 L4 : do {
  if ((i9 | 0) != 0) {
   do {
    if ((HEAP8[i1 + 101 | 0] & 1) == 0) {
     i10 = i9;
    } else {
     i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0;
     i12 = HEAP32[i2 >> 2] | 0;
     if (i11) {
      i10 = i12;
      break;
     }
     HEAP32[i2 >> 2] = 0;
     if ((i12 | 0) == 0) {
      break L4;
     }
     __ZN7WebCore18HTMLPreloadScannerD1Ev(i12);
     __ZN3WTF8fastFreeEPv(i12);
     break L4;
    }
   } while (0);
   __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i5, i4);
   __ZN7WebCore18HTMLPreloadScanner11appendToEndERKNS_15SegmentedStringE(i10, i5);
   __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i5 + 36 | 0);
   i12 = i5 + 44 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
    HEAP32[i5 + 48 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i11);
   }
   i11 = HEAP32[i5 + 16 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i12 >> 2] = i13;
      break;
     }
    }
   } while (0);
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
    break;
   }
   __ZN7WebCore18HTMLPreloadScanner4scanEPNS_21HTMLResourcePreloaderERKNS_3URLE(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 464 >> 2] | 0, (HEAP32[i1 + 16 >> 2] | 0) + 500 | 0);
  }
 } while (0);
 __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i6, i4);
 __ZN7WebCore15SegmentedString6appendERKS0_(HEAP32[i1 + 120 >> 2] | 0, i6);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i6 + 36 | 0);
 i4 = i6 + 44 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i6 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 472 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i4 = HEAP32[i7 >> 2] | 0;
   if ((i4 | 0) > 1) {
    i14 = i4;
   } else {
    do {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
      i4 = HEAP32[i1 + 148 >> 2] | 0;
      if ((i4 | 0) != 0) {
       if ((HEAP8[i4 + 80 | 0] & 1) != 0) {
        break;
       }
       if (+HEAPF64[i4 + 32 >> 3] != +0) {
        break;
       }
      }
      __ZN7WebCore18HTMLDocumentParser13pumpTokenizerENS0_15SynchronousModeE(i1, 0);
     }
    } while (0);
    i14 = HEAP32[i7 >> 2] | 0;
   }
   if ((i14 | 0) == 3) {
    break;
   }
   i4 = i1 + 469 | 0;
   if ((HEAP8[i4] & 1) == 0) {
    break;
   }
   if ((HEAP32[i2 >> 2] | 0) != 0) {
    break;
   }
   i6 = i1;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
    break;
   }
   i5 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i5 | 0) != 0) {
    if ((HEAP8[i5 + 80 | 0] & 1) != 0) {
     break;
    }
    if (+HEAPF64[i5 + 32 >> 3] != +0) {
     break;
    }
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 72 >> 2] & 31](i1) | 0) {
    break;
   }
   HEAP8[i4] = 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 63](i1);
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i14 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i1 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i14 = i2 - 4 | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15AtomicHTMLTokenC2ERNS_9HTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i8;
 i9 = i1 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i1 + 24 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 switch (i8 | 0) {
 case 1:
  {
   __ZN3WTF12AtomicString3addEPKtj(i5, HEAP32[i2 + 16 >> 2] | 0, HEAP32[i2 + 24 >> 2] | 0);
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
   do {
    if ((i8 | 0) != 0) {
     i5 = i8 | 0;
     i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i5 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i8 = i2 + 2240 | 0;
   i12 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i8 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i12 = i8 + 24 | 0;
   if ((HEAP32[i12 >> 2] | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
   }
   i12 = i8 + 16 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i12 >> 2] = 0;
    HEAP32[i8 + 20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i11);
   }
   i11 = i8 + 12 | 0;
   if ((HEAP32[i11 >> 2] | 0) != 0) {
    HEAP32[i11 >> 2] = 0;
   }
   i11 = i8 + 4 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i8 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i12);
   }
   __ZdlPv(i8 | 0);
   STACKTOP = i3;
   return;
  }
 case 2:
 case 3:
  {
   HEAP8[i1 + 28 | 0] = HEAP8[i2 + 542 | 0] & 1;
   __ZN3WTF12AtomicString3addEPKtj(i4, HEAP32[i2 + 16 >> 2] | 0, HEAP32[i2 + 24 >> 2] | 0);
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
   do {
    if ((i8 | 0) != 0) {
     i4 = i8 | 0;
     i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i4 >> 2] = i9;
      break;
     }
    }
   } while (0);
   __ZN7WebCore15AtomicHTMLToken20initializeAttributesERKN3WTF6VectorINS_9HTMLToken9AttributeELj10ENS1_15CrashOnOverflowEEE(i1, i2 + 544 | 0);
   STACKTOP = i3;
   return;
  }
 case 4:
  {
   i8 = i2 + 16 | 0;
   if ((HEAPU16[i2 + 540 >> 1] | 0) >>> 0 >= 256 >>> 0) {
    i9 = HEAP32[i2 + 24 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i4 = __ZN3WTF10StringImpl5emptyEv() | 0;
     i12 = i6 | 0;
     HEAP32[i12 >> 2] = i4;
     i11 = i4 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     i13 = i12;
    } else {
     __ZN3WTF10StringImpl6createEPKtj(i6, HEAP32[i8 >> 2] | 0, i9);
     i13 = i6 | 0;
    }
    i6 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
    if ((i6 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    i13 = i6 | 0;
    i9 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     STACKTOP = i3;
     return;
    } else {
     HEAP32[i13 >> 2] = i9;
     STACKTOP = i3;
     return;
    }
   }
   __ZN3WTF6String23make8BitFrom16BitSourceEPKtj(i7, HEAP32[i8 >> 2] | 0, HEAP32[i2 + 24 >> 2] | 0);
   i8 = i7 | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i7;
   do {
    if ((i9 | 0) != 0) {
     i7 = i9 | 0;
     i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i7 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i8 >> 2] = i10;
    STACKTOP = i3;
    return;
   }
   break;
  }
 case 5:
  {
   HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 16 >> 2];
   HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 24 >> 2];
   HEAP8[i1 + 20 | 0] = (HEAPU16[i2 + 540 >> 1] | 0) >>> 0 < 256 >>> 0 | 0;
   STACKTOP = i3;
   return;
  }
 default:
  {
   STACKTOP = i3;
   return;
  }
 }
}
function __ZN7WebCore18HTMLDocumentParser6insertERKNS_15SegmentedStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 if ((HEAP32[i5 >> 2] | 0) > 1) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 __ZN7WebCore15SegmentedStringC1ERKS0_(i4, i2);
 __ZN7WebCore15SegmentedString21setExcludeLineNumbersEv(i4);
 __ZN7WebCore15SegmentedString6appendERKS0_(i1 + 44 | 0, i4);
 i6 = i1;
 do {
  if ((HEAP32[i5 >> 2] | 0) <= 1) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
    break;
   }
   i7 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i7 | 0) != 0) {
    if ((HEAP8[i7 + 80 | 0] & 1) != 0) {
     break;
    }
    if (+HEAPF64[i7 + 32 >> 3] != +0) {
     break;
    }
   }
   __ZN7WebCore18HTMLDocumentParser13pumpTokenizerENS0_15SynchronousModeE(i1, 1);
  }
 } while (0);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
  i7 = i1 + 144 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    i9 = __ZN3WTF10fastMallocEj(2476) | 0;
    i10 = i1 + 16 | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    __ZN7WebCore18HTMLPreloadScannerC1ERKNS_17HTMLParserOptionsERKNS_3URLEf(i9, i1 + 36 | 0, i11 + 356 | 0, +__ZNK7WebCore8Document17deviceScaleFactorEv(i11));
    i11 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = i9;
    if ((i11 | 0) == 0) {
     i12 = i9;
     i13 = i10;
     break;
    }
    __ZN7WebCore18HTMLPreloadScannerD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    i12 = HEAP32[i7 >> 2] | 0;
    i13 = i10;
   } else {
    i12 = i8;
    i13 = i1 + 16 | 0;
   }
  } while (0);
  __ZN7WebCore18HTMLPreloadScanner11appendToEndERKNS_15SegmentedStringE(i12, i2);
  __ZN7WebCore18HTMLPreloadScanner4scanEPNS_21HTMLResourcePreloaderERKNS_3URLE(HEAP32[i7 >> 2] | 0, HEAP32[i1 + 464 >> 2] | 0, (HEAP32[i13 >> 2] | 0) + 500 | 0);
 }
 do {
  if ((HEAP32[i5 >> 2] | 0) != 3) {
   i13 = i1 + 469 | 0;
   if ((HEAP8[i13] & 1) == 0) {
    break;
   }
   if ((HEAP32[i1 + 472 >> 2] | 0) != 0) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
    break;
   }
   i7 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i7 | 0) != 0) {
    if ((HEAP8[i7 + 80 | 0] & 1) != 0) {
     break;
    }
    if (+HEAPF64[i7 + 32 >> 3] != +0) {
     break;
    }
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 72 >> 2] & 31](i1) | 0) {
    break;
   }
   HEAP8[i13] = 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 63](i1);
  }
 } while (0);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i4 + 36 | 0);
 i6 = i4 + 44 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i4 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i4 + 16 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = i1 + 4 | 0;
 i1 = i5 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i6 = i5 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18HTMLDocumentParserC2ERNS_12HTMLDocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i2 | 0;
 __ZN7WebCore24ScriptableDocumentParserC2ERNS_8DocumentENS_19ParserContentPolicyE(i1 | 0, i3, 2);
 i4 = i1 + 28 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i4 >> 2] = H_BASE + 136;
 HEAP32[i1 + 32 >> 2] = H_BASE + 172;
 i5 = i1 + 36 | 0;
 __ZN7WebCore17HTMLParserOptionsC1ERNS_8DocumentE(i5, i3);
 i6 = i1 + 44 | 0;
 HEAP16[i6 >> 1] = 0;
 HEAP16[i1 + 46 >> 1] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP8[i1 + 56 | 0] = 1;
 HEAP8[i1 + 57 | 0] = 0;
 HEAP32[i1 + 60 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP16[i1 + 64 >> 1] = 0;
 _memset(i1 + 68 | 0, 0, 33) | 0;
 HEAP8[i1 + 101 | 0] = 1;
 HEAP8[i1 + 102 | 0] = 0;
 i7 = i1 + 104 | 0;
 HEAP32[i7 >> 2] = F_BASE_vi + 2;
 HEAP32[i7 + 4 >> 2] = 0;
 i7 = i1 + 112 | 0;
 HEAP32[i7 >> 2] = F_BASE_vi + 2;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = i6;
 i6 = i1 + 124 | 0;
 i7 = i1 + 39 | 0;
 i8 = HEAP8[i7] | 0;
 if ((i8 & 1) == 0) {
  i9 = __ZN3WTF10fastMallocEj(2244) | 0;
  i10 = i9 + 28 | 0;
  i11 = i10;
  i12 = i9 + 16 | 0;
  HEAP32[i12 >> 2] = i11;
  i13 = i9 + 20 | 0;
  HEAP32[i13 >> 2] = 256;
  HEAP32[i9 + 24 >> 2] = 0;
  HEAP32[i9 + 544 >> 2] = i9 + 556;
  HEAP32[i9 + 548 >> 2] = 10;
  HEAP32[i9 + 552 >> 2] = 0;
  HEAP32[i9 + 2240 >> 2] = 0;
  _memset(i9 | 0, 0, 16) | 0;
  if ((i10 | 0) == 0) {
   HEAP32[i12 >> 2] = i11;
   HEAP32[i13 >> 2] = 256;
  }
  HEAP16[i9 + 540 >> 1] = 0;
  HEAP32[i6 >> 2] = i9;
  i14 = HEAP8[i7] | 0;
 } else {
  HEAP32[i6 >> 2] = 0;
  i14 = i8;
 }
 i8 = i1 + 128 | 0;
 if ((i14 & 1) == 0) {
  i14 = __ZN3WTF10fastMallocEj(196) | 0;
  __ZN7WebCore13HTMLTokenizerC1ERKNS_17HTMLParserOptionsE(i14, i5);
  HEAP32[i8 >> 2] = i14;
 } else {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = __ZN3WTF10fastMallocEj(60) | 0;
 __ZN7WebCore16HTMLScriptRunnerC1ERNS_8DocumentERNS_20HTMLScriptRunnerHostE(i8, i3, i4);
 HEAP32[i1 + 132 >> 2] = i8;
 i8 = HEAP32[i1 + 24 >> 2] | 0;
 i4 = __ZN3WTF10fastMallocEj(176) | 0;
 __ZN7WebCore15HTMLTreeBuilderC1ERNS_18HTMLDocumentParserERNS_12HTMLDocumentENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE(i4, i1, i2, i8, i5);
 HEAP32[i1 + 136 >> 2] = i4;
 HEAP32[i1 + 140 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = 0;
 i4 = __ZN3WTF10fastMallocEj(88) | 0;
 __ZN7WebCore19HTMLParserSchedulerC1ERNS_18HTMLDocumentParserE(i4, i1);
 HEAP32[i1 + 148 >> 2] = i4;
 __ZN7WebCore17HTMLSourceTrackerC1Ev(i1 + 152 | 0);
 HEAP32[i1 + 308 >> 2] = 0;
 HEAP32[i1 + 312 >> 2] = 0;
 __ZN7WebCore10XSSAuditorC1Ev(i1 + 316 | 0);
 __ZN7WebCore18XSSAuditorDelegateC1ERNS_8DocumentE(i1 + 408 | 0, i3);
 i4 = __ZN3WTF10fastMallocEj(8) | 0;
 i5 = i4;
 HEAP32[i4 >> 2] = i3;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i3 >> 2] = 1;
 HEAP32[i3 + 4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = i3;
 HEAP32[i1 + 464 >> 2] = i5;
 HEAP8[i1 + 468 | 0] = 0;
 HEAP8[i1 + 469 | 0] = 0;
 HEAP8[i1 + 470 | 0] = 0;
 HEAP32[i1 + 472 >> 2] = 0;
 return;
}
function __ZN7WebCore18HTMLDocumentParserC1ERNS_12HTMLDocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i2 | 0;
 __ZN7WebCore24ScriptableDocumentParserC2ERNS_8DocumentENS_19ParserContentPolicyE(i1 | 0, i3, 2);
 i4 = i1 + 28 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i4 >> 2] = H_BASE + 136;
 HEAP32[i1 + 32 >> 2] = H_BASE + 172;
 i5 = i1 + 36 | 0;
 __ZN7WebCore17HTMLParserOptionsC1ERNS_8DocumentE(i5, i3);
 i6 = i1 + 44 | 0;
 HEAP16[i6 >> 1] = 0;
 HEAP16[i1 + 46 >> 1] = 0;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP8[i1 + 56 | 0] = 1;
 HEAP8[i1 + 57 | 0] = 0;
 HEAP32[i1 + 60 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP16[i1 + 64 >> 1] = 0;
 _memset(i1 + 68 | 0, 0, 33) | 0;
 HEAP8[i1 + 101 | 0] = 1;
 HEAP8[i1 + 102 | 0] = 0;
 i7 = i1 + 104 | 0;
 HEAP32[i7 >> 2] = F_BASE_vi + 2;
 HEAP32[i7 + 4 >> 2] = 0;
 i7 = i1 + 112 | 0;
 HEAP32[i7 >> 2] = F_BASE_vi + 2;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = i6;
 i6 = i1 + 124 | 0;
 i7 = i1 + 39 | 0;
 i8 = HEAP8[i7] | 0;
 if ((i8 & 1) == 0) {
  i9 = __ZN3WTF10fastMallocEj(2244) | 0;
  i10 = i9 + 28 | 0;
  i11 = i10;
  i12 = i9 + 16 | 0;
  HEAP32[i12 >> 2] = i11;
  i13 = i9 + 20 | 0;
  HEAP32[i13 >> 2] = 256;
  HEAP32[i9 + 24 >> 2] = 0;
  HEAP32[i9 + 544 >> 2] = i9 + 556;
  HEAP32[i9 + 548 >> 2] = 10;
  HEAP32[i9 + 552 >> 2] = 0;
  HEAP32[i9 + 2240 >> 2] = 0;
  _memset(i9 | 0, 0, 16) | 0;
  if ((i10 | 0) == 0) {
   HEAP32[i12 >> 2] = i11;
   HEAP32[i13 >> 2] = 256;
  }
  HEAP16[i9 + 540 >> 1] = 0;
  HEAP32[i6 >> 2] = i9;
  i14 = HEAP8[i7] | 0;
 } else {
  HEAP32[i6 >> 2] = 0;
  i14 = i8;
 }
 i8 = i1 + 128 | 0;
 if ((i14 & 1) == 0) {
  i14 = __ZN3WTF10fastMallocEj(196) | 0;
  __ZN7WebCore13HTMLTokenizerC1ERKNS_17HTMLParserOptionsE(i14, i5);
  HEAP32[i8 >> 2] = i14;
 } else {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = __ZN3WTF10fastMallocEj(60) | 0;
 __ZN7WebCore16HTMLScriptRunnerC1ERNS_8DocumentERNS_20HTMLScriptRunnerHostE(i8, i3, i4);
 HEAP32[i1 + 132 >> 2] = i8;
 i8 = HEAP32[i1 + 24 >> 2] | 0;
 i4 = __ZN3WTF10fastMallocEj(176) | 0;
 __ZN7WebCore15HTMLTreeBuilderC1ERNS_18HTMLDocumentParserERNS_12HTMLDocumentENS_19ParserContentPolicyERKNS_17HTMLParserOptionsE(i4, i1, i2, i8, i5);
 HEAP32[i1 + 136 >> 2] = i4;
 HEAP32[i1 + 140 >> 2] = 0;
 HEAP32[i1 + 144 >> 2] = 0;
 i4 = __ZN3WTF10fastMallocEj(88) | 0;
 __ZN7WebCore19HTMLParserSchedulerC1ERNS_18HTMLDocumentParserE(i4, i1);
 HEAP32[i1 + 148 >> 2] = i4;
 __ZN7WebCore17HTMLSourceTrackerC1Ev(i1 + 152 | 0);
 HEAP32[i1 + 308 >> 2] = 0;
 HEAP32[i1 + 312 >> 2] = 0;
 __ZN7WebCore10XSSAuditorC1Ev(i1 + 316 | 0);
 __ZN7WebCore18XSSAuditorDelegateC1ERNS_8DocumentE(i1 + 408 | 0, i3);
 i4 = __ZN3WTF10fastMallocEj(8) | 0;
 i5 = i4;
 HEAP32[i4 >> 2] = i3;
 i3 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i3 >> 2] = 1;
 HEAP32[i3 + 4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = i3;
 HEAP32[i1 + 464 >> 2] = i5;
 HEAP8[i1 + 468 | 0] = 0;
 HEAP8[i1 + 469 | 0] = 0;
 HEAP8[i1 + 470 | 0] = 0;
 HEAP32[i1 + 472 >> 2] = 0;
 return;
}
function __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 | 0;
 HEAP16[i3 >> 1] = 0;
 HEAP16[i1 + 2 >> 1] = 0;
 i4 = i1 + 4 | 0;
 i5 = i1 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP32[i5 >> 2] = i7;
 i2 = i1 + 12 | 0;
 HEAP8[i2] = 1;
 i8 = i1 + 16 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 if ((i9 | 0) == 0) {
  i10 = i7;
 } else {
  i7 = i9 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  i10 = HEAP32[i5 >> 2] | 0;
 }
 i5 = (i10 | 0) == 0;
 do {
  if (i5) {
   HEAP8[i1 + 13 | 0] = 0;
   i11 = 0;
  } else {
   i7 = HEAP32[i8 >> 2] | 0;
   i9 = i1 + 13 | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    HEAP8[i9] = 0;
    if ((i7 | 0) == 0) {
     i12 = 0;
    } else {
     i12 = HEAP32[i7 + 8 >> 2] | 0;
    }
    HEAP32[i4 >> 2] = i12;
    i11 = 0;
    break;
   } else {
    HEAP8[i9] = 1;
    if ((i7 | 0) == 0) {
     i13 = 0;
    } else {
     i13 = HEAP32[i7 + 8 >> 2] | 0;
    }
    HEAP32[i4 >> 2] = i13;
    i11 = 1;
    break;
   }
  }
 } while (0);
 i13 = i1 + 20 | 0;
 HEAP16[i13 >> 1] = 0;
 _memset(i1 + 24 | 0, 0, 33) | 0;
 i12 = HEAP32[i6 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i14 = 1;
 } else {
  i14 = (HEAP32[i12 + 4 >> 2] | 0) == 0 | 0;
 }
 HEAP8[i1 + 57 | 0] = i14;
 i14 = i1 + 58 | 0;
 HEAP8[i14] = 0;
 do {
  if (i5) {
   i12 = i1 + 60 | 0;
   HEAP32[i12 >> 2] = F_BASE_vi + 2;
   HEAP32[i12 + 4 >> 2] = 0;
   HEAP8[i14] = 0;
   i12 = i1 + 68 | 0;
   HEAP32[i12 >> 2] = F_BASE_vi + 2;
   HEAP32[i12 + 4 >> 2] = 0;
  } else {
   i12 = i11 << 24 >> 24 == 0;
   do {
    if (i12) {
     i6 = HEAP32[i4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      i15 = 0;
      break;
     }
     i15 = HEAP16[i6 >> 1] | 0;
    } else {
     i15 = HEAPU8[HEAP32[i4 >> 2] | 0] | 0;
    }
   } while (0);
   HEAP16[i13 >> 1] = i15;
   if ((i10 | 0) <= 1) {
    break;
   }
   if ((HEAP16[i3 >> 1] | 0) != 0) {
    break;
   }
   i6 = i1 + 60 | 0;
   if (i12) {
    HEAP32[i6 >> 2] = F_BASE_vi + 16;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP8[i14] = 0;
    i8 = i1 + 68 | 0;
    if ((HEAP8[i2] & 1) == 0) {
     HEAP32[i8 >> 2] = F_BASE_vi + 16;
     HEAP32[i8 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i8 >> 2] = F_BASE_vi + 42;
     HEAP32[i8 + 4 >> 2] = 0;
     return;
    }
   } else {
    HEAP32[i6 >> 2] = F_BASE_vi + 40;
    HEAP32[i6 + 4 >> 2] = 0;
    HEAP8[i14] = 2;
    i6 = i1 + 68 | 0;
    if ((HEAP8[i2] & 1) == 0) {
     HEAP32[i6 >> 2] = F_BASE_vi + 40;
     HEAP32[i6 + 4 >> 2] = 0;
     return;
    } else {
     HEAP32[i6 >> 2] = F_BASE_vi + 30;
     HEAP32[i6 + 4 >> 2] = 0;
     HEAP8[i14] = 3;
     return;
    }
   }
  }
 } while (0);
 __ZN7WebCore15SegmentedString30updateSlowCaseFunctionPointersEv(i1);
 return;
}
function __ZN7WebCore18HTMLDocumentParserD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 28 >> 2] = H_BASE + 136;
 HEAP32[i1 + 32 >> 2] = H_BASE + 172;
 i2 = HEAP32[i1 + 464 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 4 | 0;
  HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] = 0;
  i4 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i3 = i4 | 0;
    if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
     break;
    }
    __ZN3WTF8fastFreeEPv(i4);
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 416 >> 2] | 0;
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
 __ZN7WebCore10XSSAuditorD2Ev(i1 + 316 | 0);
 __ZN7WebCore17HTMLSourceTrackerD2Ev(i1 + 152 | 0);
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore19HTMLParserSchedulerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore18HTMLPreloadScannerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 140 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore18HTMLPreloadScannerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 136 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15HTMLTreeBuilderD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore16HTMLScriptRunnerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore13HTMLTokenizerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore9HTMLTokenD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1 + 80 | 0);
 i2 = i1 + 88 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 92 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore14DocumentParserD2Ev(i5);
  return;
 }
 i2 = i3 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i5 = i1 | 0;
  __ZN7WebCore14DocumentParserD2Ev(i5);
  return;
 } else {
  HEAP32[i2 >> 2] = i4;
  i5 = i1 | 0;
  __ZN7WebCore14DocumentParserD2Ev(i5);
  return;
 }
}
function __ZN7WebCore18HTMLDocumentParserD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 28 >> 2] = H_BASE + 136;
 HEAP32[i1 + 32 >> 2] = H_BASE + 172;
 i2 = HEAP32[i1 + 464 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 4 | 0;
  HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] = 0;
  i4 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i3 = i4 | 0;
    if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
     break;
    }
    __ZN3WTF8fastFreeEPv(i4);
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 416 >> 2] | 0;
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
 __ZN7WebCore10XSSAuditorD2Ev(i1 + 316 | 0);
 __ZN7WebCore17HTMLSourceTrackerD2Ev(i1 + 152 | 0);
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore19HTMLParserSchedulerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore18HTMLPreloadScannerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 140 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore18HTMLPreloadScannerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 136 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore15HTMLTreeBuilderD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore16HTMLScriptRunnerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore13HTMLTokenizerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore9HTMLTokenD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1 + 80 | 0);
 i2 = i1 + 88 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 92 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore14DocumentParserD2Ev(i5);
  return;
 }
 i2 = i3 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i5 = i1 | 0;
  __ZN7WebCore14DocumentParserD2Ev(i5);
  return;
 } else {
  HEAP32[i2 >> 2] = i4;
  i5 = i1 | 0;
  __ZN7WebCore14DocumentParserD2Ev(i5);
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 if (i5 >>> 0 > i2 >>> 0) {
  i1 = HEAP32[i6 >> 2] | 0;
  i7 = i1 + (i5 << 3) | 0;
  if ((i5 | 0) != (i2 | 0)) {
   i8 = i1 + (i2 << 3) | 0;
   while (1) {
    i1 = HEAP32[i8 + 4 >> 2] | 0;
    do {
     if ((i1 | 0) != 0) {
      i9 = i1 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i1);
       break;
      } else {
       HEAP32[i9 >> 2] = i10;
       break;
      }
     }
    } while (0);
    __ZN7WebCore13QualifiedNameD1Ev(i8 | 0);
    i8 = i8 + 8 | 0;
    if ((i8 | 0) == (i7 | 0)) {
     break;
    }
   }
  }
  HEAP32[i4 >> 2] = i2;
  i11 = i2;
 } else {
  i11 = i5;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i5 + (i11 << 3) | 0;
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   }
   i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
   HEAP32[i3 >> 2] = i7 >>> 3;
   i8 = __ZN3WTF10fastMallocEj(i7) | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) == (i5 | 0) | (i11 | 0) == 0) {
    break;
   } else {
    i12 = i5;
    i13 = i8;
   }
   while (1) {
    i8 = HEAP32[i12 >> 2] | 0;
    HEAP32[i13 >> 2] = i8;
    i7 = i8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    i7 = i12 + 4 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    HEAP32[i13 + 4 >> 2] = i8;
    if ((i8 | 0) != 0) {
     i1 = i8 | 0;
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
    }
    i1 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i1 | 0) != 0) {
      i7 = i1 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i1);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    __ZN7WebCore13QualifiedNameD1Ev(i12 | 0);
    i1 = i12 + 8 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    } else {
     i12 = i1;
     i13 = i13 + 8 | 0;
    }
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i6 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore9HTMLTokenD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 2240 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 24 | 0;
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
  }
  i3 = i2 + 16 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i2 + 20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  i4 = i2 + 12 | 0;
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   HEAP32[i4 >> 2] = 0;
  }
  i4 = i2 + 4 | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  if ((i3 | 0) != 0) {
   HEAP32[i4 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZdlPv(i2 | 0);
 }
 i2 = i1 + 552 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 544 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 168 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 + 100 | 0;
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
   }
   i5 = i3 + 92 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if (!((i3 + 104 | 0) == (i7 | 0) | (i7 | 0) == 0)) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i3 + 96 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i7);
   }
   i7 = i3 + 24 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
   }
   i7 = i3 + 16 | 0;
   i5 = HEAP32[i7 >> 2] | 0;
   if (!((i3 + 28 | 0) == (i5 | 0) | (i5 | 0) == 0)) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i3 + 20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i5);
   }
   i3 = i3 + 168 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if (!((i1 + 556 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 548 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 24 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 16 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i1 + 28 | 0) == (i4 | 0) | (i4 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore18HTMLDocumentParser16canTakeNextTokenENS0_15SynchronousModeERNS_11PumpSessionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0;
 i4 = i1 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) > 1) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = i1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
   if ((i2 | 0) == 0) {
    __ZN7WebCore19HTMLParserScheduler25checkForYieldBeforeScriptERNS_11PumpSessionE(HEAP32[i1 + 148 >> 2] | 0, i3);
   }
   if ((HEAP8[i3 + 24 | 0] & 1) != 0) {
    i5 = 0;
    return i5 | 0;
   }
   __ZN7WebCore18HTMLDocumentParser30runScriptsForPausedTreeBuilderEv(i1);
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
    i5 = 0;
    return i5 | 0;
   }
   if ((HEAP32[i4 >> 2] | 0) > 1) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[i1 + 136 >> 2] | 0) + 4 >> 2] | 0) == 0) {
   i4 = HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 332 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   if (__ZN7WebCore19NavigationScheduler21locationChangePendingEv(i4 + 376 | 0) | 0) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 if ((i2 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 i1 = i3 + 8 | 0;
 if ((HEAP32[i1 >> 2] | 0) > (HEAP32[i2 + 16 >> 2] | 0)) {
  i7 = 14;
 } else {
  if ((HEAP8[i3 + 25 | 0] & 1) != 0) {
   i7 = 14;
  }
 }
 do {
  if ((i7 | 0) == 14) {
   i4 = i3 + 16 | 0;
   if (+HEAPF64[i4 >> 3] == +0) {
    HEAPF64[i4 >> 3] = +__ZN3WTF27monotonicallyIncreasingTimeEv();
   }
   HEAP32[i1 >> 2] = 0;
   HEAP8[i3 + 25 | 0] = 0;
   d8 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
   if (d8 - +HEAPF64[i4 >> 3] <= +HEAPF64[i2 + 8 >> 3]) {
    break;
   }
   HEAP8[i3 + 24 | 0] = 1;
  }
 } while (0);
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i5 = 1;
 return i5 | 0;
}
function __ZN7WebCore15AtomicHTMLTokenD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 32 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
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
   __ZN7WebCore13QualifiedNameD1Ev(i3 | 0);
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 36 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 + 24 | 0;
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   HEAP32[i4 >> 2] = 0;
  }
  i4 = i2 + 16 | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) != 0) {
   HEAP32[i4 >> 2] = 0;
   HEAP32[i2 + 20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  }
  i6 = i2 + 12 | 0;
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   HEAP32[i6 >> 2] = 0;
  }
  i6 = i2 + 4 | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i6 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZdlPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
function __ZN7WebCore18HTMLDocumentParser26constructTreeFromHTMLTokenERNS_9HTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 __ZN7WebCore15AtomicHTMLTokenC2ERNS_9HTMLTokenE(i4, i2);
 i5 = i2 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 5) {
  i6 = i2 + 20 | 0;
  _memset(i2 | 0, 0, 16) | 0;
  do {
   if ((HEAP32[i6 >> 2] | 0) != 0) {
    i7 = i2 + 24 | 0;
    if ((HEAP32[i7 >> 2] | 0) != 0) {
     HEAP32[i7 >> 2] = 0;
    }
    i7 = i2 + 16 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    i9 = i2 + 28 | 0;
    if ((i9 | 0) == (i8 | 0) | (i8 | 0) == 0) {
     i10 = i8;
    } else {
     HEAP32[i7 >> 2] = 0;
     HEAP32[i6 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i8);
     i10 = HEAP32[i7 >> 2] | 0;
    }
    if ((i10 | 0) != 0) {
     break;
    }
    HEAP32[i7 >> 2] = i9;
    HEAP32[i6 >> 2] = 256;
   }
  } while (0);
  HEAP16[i2 + 540 >> 1] = 0;
 }
 __ZN7WebCore15HTMLTreeBuilder13constructTreeEPNS_15AtomicHTMLTokenE(HEAP32[i1 + 136 >> 2] | 0, i4);
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  __ZN7WebCore15AtomicHTMLTokenD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 i5 = i2 + 20 | 0;
 _memset(i2 | 0, 0, 16) | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   i1 = i2 + 24 | 0;
   if ((HEAP32[i1 >> 2] | 0) != 0) {
    HEAP32[i1 >> 2] = 0;
   }
   i1 = i2 + 16 | 0;
   i6 = HEAP32[i1 >> 2] | 0;
   i10 = i2 + 28 | 0;
   if ((i10 | 0) == (i6 | 0) | (i6 | 0) == 0) {
    i11 = i6;
   } else {
    HEAP32[i1 >> 2] = 0;
    HEAP32[i5 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i6);
    i11 = HEAP32[i1 >> 2] | 0;
   }
   if ((i11 | 0) != 0) {
    break;
   }
   HEAP32[i1 >> 2] = i10;
   HEAP32[i5 >> 2] = 256;
  }
 } while (0);
 HEAP16[i2 + 540 >> 1] = 0;
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i4);
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 18;
}
function __ZN7WebCore18HTMLDocumentParser21parseDocumentFragmentERKN3WTF6StringERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = __ZN3WTF10fastMallocEj(476) | 0;
 i8 = i7;
 __ZN7WebCore18HTMLDocumentParserC2ERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE(i8, i2, i3, i4);
 i4 = HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] | 0;
 __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i6, i1);
 FUNCTION_TABLE_vii[i4 & 31](i8, i6);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i6 + 36 | 0);
 i4 = i6 + 44 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i6 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 i1 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = i7;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] & 63](i8);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] & 63](i8);
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i7 + 4 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
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
function __ZN7WebCore18HTMLDocumentParser20prepareToStopParsingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 4 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i1 + 8 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) <= 1) {
   do {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
     i3 = HEAP32[i1 + 148 >> 2] | 0;
     if ((i3 | 0) != 0) {
      if ((HEAP8[i3 + 80 | 0] & 1) != 0) {
       break;
      }
      if (+HEAPF64[i3 + 32 >> 3] != +0) {
       break;
      }
     }
     __ZN7WebCore18HTMLDocumentParser13pumpTokenizerENS0_15SynchronousModeE(i1, 1);
    }
   } while (0);
   if ((HEAP32[i2 >> 2] | 0) > 1) {
    break;
   }
   __ZN7WebCore14DocumentParser20prepareToStopParsingEv(i1 | 0);
   i3 = i1 + 132 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    __ZN7WebCore8Document13setReadyStateENS0_10ReadyStateE(HEAP32[i1 + 16 >> 2] | 0, 1);
   }
   if ((HEAP32[i2 >> 2] | 0) == 3) {
    break;
   }
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) != 0) {
    if (!(__ZN7WebCore16HTMLScriptRunner31executeScriptsWaitingForParsingEv(i4) | 0)) {
     break;
    }
   }
   __ZN7WebCore15HTMLTreeBuilder8finishedEv(HEAP32[i1 + 136 >> 2] | 0);
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i1 >> 2] = i4;
  return;
 }
 i4 = i2 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 return;
}
function __ZN7WebCore18HTMLDocumentParser33resumeParsingAfterScriptExecutionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 144 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore18HTMLPreloadScannerD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 8 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) > 1) {
  i4 = i2;
 } else {
  do {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
    i2 = HEAP32[i1 + 148 >> 2] | 0;
    if ((i2 | 0) != 0) {
     if ((HEAP8[i2 + 80 | 0] & 1) != 0) {
      break;
     }
     if (+HEAPF64[i2 + 32 >> 3] != +0) {
      break;
     }
    }
    __ZN7WebCore18HTMLDocumentParser13pumpTokenizerENS0_15SynchronousModeE(i1, 0);
   }
  } while (0);
  i4 = HEAP32[i3 >> 2] | 0;
 }
 if ((i4 | 0) == 3) {
  return;
 }
 i4 = i1 + 469 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  return;
 }
 if ((HEAP32[i1 + 472 >> 2] | 0) != 0) {
  return;
 }
 i3 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
  return;
 }
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 80 | 0] & 1) != 0) {
    return;
   }
   if (+HEAPF64[i2 + 32 >> 3] == +0) {
    break;
   }
   return;
  }
 } while (0);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 31](i1) | 0) {
  return;
 }
 HEAP8[i4] = 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 63](i1);
 return;
}
function __ZN7WebCore18HTMLDocumentParser30runScriptsForPausedTreeBuilderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 HEAP32[i3 >> 2] = -1;
 HEAP32[i3 + 4 >> 2] = -1;
 __ZN7WebCore15HTMLTreeBuilder19takeScriptToProcessERN3WTF12TextPositionE(i4, HEAP32[i1 + 136 >> 2] | 0, i3);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i6 | 0) == 0) {
  if ((i4 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i1 = i4 + 8 | 0;
  i7 = i1 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  HEAP32[i7 >> 2] = i8;
  if ((i8 | 0) >= 1) {
   STACKTOP = i2;
   return;
  }
  if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
   STACKTOP = i2;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  STACKTOP = i2;
  return;
 } else {
  i1 = i5 | 0;
  HEAP32[i1 >> 2] = i4;
  __ZN7WebCore16HTMLScriptRunner7executeEN3WTF10PassRefPtrINS_7ElementEEERKNS1_12TextPositionE(i6, i5, i3);
  i3 = HEAP32[i1 >> 2] | 0;
  if ((i3 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i1 = i3 + 8 | 0;
  i3 = i1 | 0;
  i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
  HEAP32[i3 >> 2] = i5;
  if ((i5 | 0) >= 1) {
   STACKTOP = i2;
   return;
  }
  if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
   STACKTOP = i2;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore15HTMLInputStream13markEndOfFileEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i2 | 0;
 i4 = i2 + 80 | 0;
 i5 = i1 + 76 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 __ZN3WTF6StringC1EPKhj(i4, H_BASE + 200, 1);
 __ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE(i3, i4);
 __ZN7WebCore15SegmentedString6appendERKS0_(i1, i3);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i3 + 36 | 0);
 i1 = i3 + 44 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i3 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i3 + 16 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 | 0;
   i1 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i3 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i5 >> 2] | 0;
  __ZN7WebCore15SegmentedString5closeEv(i7);
  STACKTOP = i2;
  return;
 }
 i4 = i6 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i7 = HEAP32[i5 >> 2] | 0;
  __ZN7WebCore15SegmentedString5closeEv(i7);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  i7 = HEAP32[i5 >> 2] | 0;
  __ZN7WebCore15SegmentedString5closeEv(i7);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore17HTMLSourceTrackerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 152 >> 2] | 0;
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
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1 + 112 | 0);
 i2 = i1 + 120 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 124 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv(i1 + 36 | 0);
 i4 = i1 + 44 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 48 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore10XSSAuditorD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 76 >> 2] | 0;
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
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE4NodeD2Ev(i2 + 532 | 0);
  __ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE4NodeD2Ev(i2 | 0);
  __ZdlPv(i2);
 }
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
function __ZN7WebCore18HTMLDocumentParser23resumeParsingAfterYieldEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 4 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 __ZN7WebCore18HTMLDocumentParser13pumpTokenizerENS0_15SynchronousModeE(i1, 0);
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) != 3) {
   i2 = i1 + 469 | 0;
   if ((HEAP8[i2] & 1) == 0) {
    break;
   }
   if ((HEAP32[i1 + 472 >> 2] | 0) != 0) {
    break;
   }
   i3 = i1;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
    break;
   }
   i4 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i4 | 0) != 0) {
    if ((HEAP8[i4 + 80 | 0] & 1) != 0) {
     break;
    }
    if (+HEAPF64[i4 + 32 >> 3] != +0) {
     break;
    }
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 31](i1) | 0) {
    break;
   }
   HEAP8[i2] = 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 63](i1);
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[i1 + 132 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) == 1) {
   if ((i3 | 0) != 0) {
    if (!(__ZN7WebCore16HTMLScriptRunner31executeScriptsWaitingForParsingEv(i3) | 0)) {
     break;
    }
   }
   __ZN7WebCore15HTMLTreeBuilder8finishedEv(HEAP32[i1 + 136 >> 2] | 0);
  } else {
   __ZN7WebCore16HTMLScriptRunner28executeScriptsWaitingForLoadEPNS_14CachedResourceE(i3, i2);
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
    break;
   }
   __ZN7WebCore18HTMLDocumentParser33resumeParsingAfterScriptExecutionEv(i1);
  }
 } while (0);
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE4NodeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i1 | 0;
   i5 = 0;
   i6 = i3;
   while (1) {
    i7 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i5 << 2) >> 2] | 0;
    do {
     if ((i7 | 0) == 0) {
      i8 = i6;
     } else {
      if ((HEAP8[i7 + 524 | 0] & 1) != 0) {
       i8 = i6;
       break;
      }
      __ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE4NodeD2Ev(i7);
      __ZdlPv(i7);
      i8 = HEAP32[i2 >> 2] | 0;
     }
    } while (0);
    i7 = i5 + 1 | 0;
    if (i7 >>> 0 < i8 >>> 0) {
     i5 = i7;
     i6 = i8;
    } else {
     break;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   HEAP32[i2 >> 2] = 0;
  }
 } while (0);
 i2 = i1 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i1 + 12 | 0) == (i8 | 0) | (i8 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 return;
}
function __ZN7WebCore18HTMLDocumentParser6detachEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 __ZN7WebCore14DocumentParser6detachEv(i1 | 0);
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore16HTMLScriptRunner6detachEv(i2);
 }
 __ZN7WebCore15HTMLTreeBuilder6detachEv(HEAP32[i1 + 136 >> 2] | 0);
 i2 = i1 + 140 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore18HTMLPreloadScannerD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 144 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore18HTMLPreloadScannerD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 148 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore19HTMLParserSchedulerD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore18HTMLDocumentParser6finishEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[(HEAP32[i1 + 120 >> 2] | 0) + 56 | 0] & 1) == 0) {
  __ZN7WebCore15HTMLInputStream13markEndOfFileEv(i1 + 44 | 0);
 }
 do {
  if ((HEAP32[i1 + 472 >> 2] | 0) == 0) {
   i2 = i1;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
    break;
   }
   i3 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i3 | 0) != 0) {
    if ((HEAP8[i3 + 80 | 0] & 1) != 0) {
     break;
    }
    if (+HEAPF64[i3 + 32 >> 3] != +0) {
     break;
    }
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 72 >> 2] & 31](i1) | 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 63](i1);
   return;
  }
 } while (0);
 HEAP8[i1 + 469 | 0] = 1;
 return;
}
function __ZN7WebCore18HTMLDocumentParser12endIfDelayedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 3) {
  return;
 }
 i2 = i1 + 469 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 if ((HEAP32[i1 + 472 >> 2] | 0) != 0) {
  return;
 }
 i3 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
  return;
 }
 i4 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP8[i4 + 80 | 0] & 1) != 0) {
    return;
   }
   if (+HEAPF64[i4 + 32 >> 3] == +0) {
    break;
   }
   return;
  }
 } while (0);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 31](i1) | 0) {
  return;
 }
 HEAP8[i2] = 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 63](i1);
 return;
}
function __ZN7WebCore18HTMLDocumentParser35executeScriptsWaitingForStylesheetsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 if ((HEAP8[i2 + 56 | 0] & 1) == 0) {
  return;
 }
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 __ZN7WebCore16HTMLScriptRunner35executeScriptsWaitingForStylesheetsEv(i2);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0)) {
  __ZN7WebCore18HTMLDocumentParser33resumeParsingAfterScriptExecutionEv(i1);
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore18HTMLDocumentParser12attemptToEndEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 do {
  if ((HEAP32[i1 + 472 >> 2] | 0) == 0) {
   i2 = i1;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
    break;
   }
   i3 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i3 | 0) != 0) {
    if ((HEAP8[i3 + 80 | 0] & 1) != 0) {
     break;
    }
    if (+HEAPF64[i3 + 32 >> 3] != +0) {
     break;
    }
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 72 >> 2] & 31](i1) | 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 63](i1);
   return;
  }
 } while (0);
 HEAP8[i1 + 469 | 0] = 1;
 return;
}
function __ZN7WebCore18HTMLDocumentParser23pumpTokenizerIfPossibleENS0_15SynchronousModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) > 1) {
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 31](i1) | 0) {
  return;
 }
 i3 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i3 + 80 | 0] & 1) != 0) {
    return;
   }
   if (+HEAPF64[i3 + 32 >> 3] == +0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore18HTMLDocumentParser13pumpTokenizerENS0_15SynchronousModeE(i1, i2);
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
function __ZNK7WebCore18HTMLDocumentParser14processingDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 80 | 0] & 1) != 0) {
    i3 = 1;
    return i3 | 0;
   }
   if (+HEAPF64[i2 + 32 >> 3] != +0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 if ((HEAP32[i1 + 472 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP8[i1 + 470 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZNK7WebCore18HTMLDocumentParser12textPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 44 | 0;
 __ZNK7WebCore15SegmentedString11currentLineEv(i4, i6);
 __ZNK7WebCore15SegmentedString13currentColumnEv(i5, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 + 4 >> 2] = i6;
 STACKTOP = i3;
 return;
}
function __ZThn28_N7WebCore18HTMLDocumentParser47appendCurrentInputStreamToPreloadScannerAndScanEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 476 + 448 | 0;
 i1 = i2 + 140 | 0;
 __ZN7WebCore18HTMLPreloadScanner11appendToEndERKNS_15SegmentedStringE(HEAP32[i1 >> 2] | 0, i2 + 44 | 0);
 __ZN7WebCore18HTMLPreloadScanner4scanEPNS_21HTMLResourcePreloaderERKNS_3URLE(HEAP32[i1 >> 2] | 0, HEAP32[i2 + 464 >> 2] | 0, (HEAP32[i2 + 16 >> 2] | 0) + 500 | 0);
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
function __ZN7WebCore18HTMLDocumentParser47appendCurrentInputStreamToPreloadScannerAndScanEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 140 | 0;
 __ZN7WebCore18HTMLPreloadScanner11appendToEndERKNS_15SegmentedStringE(HEAP32[i2 >> 2] | 0, i1 + 44 | 0);
 __ZN7WebCore18HTMLPreloadScanner4scanEPNS_21HTMLResourcePreloaderERKNS_3URLE(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 464 >> 2] | 0, (HEAP32[i1 + 16 >> 2] | 0) + 500 | 0);
 return;
}
function __ZNK7WebCore18HTMLDocumentParser19isWaitingForScriptsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = (HEAP32[(HEAP32[i1 + 136 >> 2] | 0) + 156 >> 2] | 0) != 0;
 i3 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  i5 = i2 | i4;
  return i5 | 0;
 }
 i4 = __ZNK7WebCore16HTMLScriptRunner23hasParserBlockingScriptEv(i3) | 0;
 i5 = i2 | i4;
 return i5 | 0;
}
function __ZN7WebCore18HTMLDocumentParser33attemptToRunDeferredScriptsAndEndEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if (__ZN7WebCore16HTMLScriptRunner31executeScriptsWaitingForParsingEv(i2) | 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore15HTMLTreeBuilder8finishedEv(HEAP32[i1 + 136 >> 2] | 0);
 return;
}
function __ZThn28_NK7WebCore18HTMLDocumentParser17hasPreloadScannerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 476 + 448 | 0;
 if ((HEAP32[i2 + 140 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i2 + 39 | 0] & 1) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP8[i2 + 468 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZN7WebCore18HTMLDocumentParser11stopParsingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore14DocumentParser11stopParsingEv(i1 | 0);
 i2 = i1 + 148 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore19HTMLParserSchedulerD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore18HTMLDocumentParser20isScheduledForResumeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i2 + 80 | 0] & 1) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = +HEAPF64[i2 + 32 >> 3] != +0;
 return i3 | 0;
}
function __ZN7WebCore18HTMLDocumentParser17hasInsertionPointEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 + 44 | 0) != (HEAP32[i1 + 120 >> 2] | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP8[i1 + 20 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 100 | 0] & 1) == 0;
 return i2 | 0;
}
function viiii___ZN7WebCore25DecodedDataDocumentParser11appendBytesERNS_14DocumentWriterEPKcj__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore25DecodedDataDocumentParser11appendBytesERNS_14DocumentWriterEPKcj(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore18HTMLDocumentParser17hasPreloadScannerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 140 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP8[i1 + 39 | 0] & 1) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 468 | 0] & 1) != 0;
 return i2 | 0;
}
function __ZNK7WebCore18HTMLDocumentParser17isExecutingScriptEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 52 >> 2] | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore18HTMLDocumentParser24contextForParsingSessionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[(HEAP32[i1 + 136 >> 2] | 0) + 4 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 return i2 | 0;
}
function __ZThn28_N7WebCore18HTMLDocumentParser19stopWatchingForLoadEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i2, i1 - 476 + 480 | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZThn32_N7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE(i1 - 476 + 444 | 0, i2);
 return;
}
function __ZN7WebCore18HTMLDocumentParser21suspendScheduledTasksEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore19HTMLParserScheduler7suspendEv(i2);
 return;
}
function __ZN7WebCore18HTMLDocumentParser20resumeScheduledTasksEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore19HTMLParserScheduler6resumeEv(i2);
 return;
}
function __ZThn28_N7WebCore18HTMLDocumentParser12watchForLoadEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(i2, i1 - 476 + 480 | 0);
 return;
}
function __ZN7WebCore18HTMLDocumentParser19stopWatchingForLoadEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14CachedResource12removeClientEPNS_20CachedResourceClientE(i2, i1 + 32 | 0);
 return;
}
function vii___ZN7WebCore25DecodedDataDocumentParser5flushERNS_14DocumentWriterE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25DecodedDataDocumentParser5flushERNS_14DocumentWriterE(i1 | 0, i2 | 0);
}
function __ZN7WebCore18HTMLDocumentParser12watchForLoadEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14CachedResource9addClientEPNS_20CachedResourceClientE(i2, i1 + 32 | 0);
 return;
}
function __ZThn32_N7WebCore18HTMLDocumentParserD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 476 + 444 | 0;
 __ZN7WebCore18HTMLDocumentParserD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn28_N7WebCore18HTMLDocumentParserD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 476 + 448 | 0;
 __ZN7WebCore18HTMLDocumentParserD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vi___ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev(i1 | 0);
}
function __ZNK7WebCore18HTMLDocumentParser17isParsingFragmentEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 136 >> 2] | 0) + 4 >> 2] | 0) != 0 | 0;
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
function __ZN7WebCore18HTMLDocumentParser3endEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15HTMLTreeBuilder8finishedEv(HEAP32[i1 + 136 >> 2] | 0);
 return;
}
function __ZN7WebCore18HTMLDocumentParserD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParserD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore18HTMLDocumentParser29forcePlaintextForTextDocumentEv(i1) {
 i1 = i1 | 0;
 HEAP32[HEAP32[i1 + 128 >> 2] >> 2] = 6;
 return;
}
function vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString12advanceEmptyEv(i1 | 0);
}
function vi___ZN7WebCore14DocumentParser12startParsingEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14DocumentParser12startParsingEv(i1 | 0);
}
function __ZThn32_N7WebCore18HTMLDocumentParserD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParserD2Ev(i1 - 476 + 444 | 0);
 return;
}
function __ZThn28_N7WebCore18HTMLDocumentParserD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParserD2Ev(i1 - 476 + 448 | 0);
 return;
}
function vi___ZN7WebCore15SegmentedString9advance16Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString9advance16Ev(i1 | 0);
}
function vi___ZN7WebCore15SegmentedString8advance8Ev__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15SegmentedString8advance8Ev(i1 | 0);
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore24ScriptableDocumentParser26asScriptableDocumentParserEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function __ZThn28_N7WebCore18HTMLDocumentParser11inputStreamEv(i1) {
 i1 = i1 | 0;
 return i1 - 476 + 492 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore20CachedResourceClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore18HTMLDocumentParser11inputStreamEv(i1) {
 i1 = i1 | 0;
 return i1 + 44 | 0;
}
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore25DecodedDataDocumentParser10wellFormedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore14DocumentParser15pinToMainThreadEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,vi___ZN7WebCore15SegmentedString12advanceEmptyEv__wrapper,b0,__ZN7WebCore18HTMLDocumentParser6finishEv,b0,__ZN7WebCore18HTMLDocumentParserD0Ev,b0,__ZN7WebCore18HTMLDocumentParser47appendCurrentInputStreamToPreloadScannerAndScanEv,b0,__ZThn28_N7WebCore18HTMLDocumentParser47appendCurrentInputStreamToPreloadScannerAndScanEv,b0,__ZN7WebCore18HTMLDocumentParser20prepareToStopParsingEv,b0,__ZThn32_N7WebCore18HTMLDocumentParserD0Ev,b0,vi___ZN7WebCore15SegmentedString9advance16Ev__wrapper,b0,__ZN7WebCore14DocumentParser15pinToMainThreadEv,b0,vi___ZN7WebCore14DocumentParser12startParsingEv__wrapper,b0,__ZN7WebCore18HTMLDocumentParser6detachEv,b0,__ZN7WebCore18HTMLDocumentParser35executeScriptsWaitingForStylesheetsEv,b0,__ZN7WebCore18HTMLDocumentParser11stopParsingEv,b0,__ZThn32_N7WebCore18HTMLDocumentParserD1Ev
  ,b0,vi___ZN7WebCore15SegmentedString27advanceAndUpdateLineNumber8Ev__wrapper,b0,__ZN7WebCore18HTMLDocumentParser21suspendScheduledTasksEv,b0,__ZN7WebCore18HTMLDocumentParserD2Ev,b0,__ZThn28_N7WebCore18HTMLDocumentParserD0Ev,b0,__ZN7WebCore18HTMLDocumentParser20resumeScheduledTasksEv,b0,vi___ZN7WebCore15SegmentedString8advance8Ev__wrapper,b0,vi___ZN7WebCore15SegmentedString28advanceAndUpdateLineNumber16Ev__wrapper,b0,__ZThn28_N7WebCore18HTMLDocumentParserD1Ev,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN7WebCore25DecodedDataDocumentParser5flushERNS_14DocumentWriterE__wrapper,b1,__ZN7WebCore18HTMLDocumentParser12watchForLoadEPNS_14CachedResourceE,b1,__ZThn32_N7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE,b1,__ZNK7WebCore18HTMLDocumentParser12textPositionEv,b1,__ZThn28_N7WebCore18HTMLDocumentParser12watchForLoadEPNS_14CachedResourceE,b1,__ZN7WebCore18HTMLDocumentParser19stopWatchingForLoadEPNS_14CachedResourceE,b1,__ZThn28_N7WebCore18HTMLDocumentParser19stopWatchingForLoadEPNS_14CachedResourceE,b1,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b1,__ZN7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE,b1,__ZN7WebCore18HTMLDocumentParser6insertERKNS_15SegmentedStringE,b1,__ZN7WebCore18HTMLDocumentParserC2ERNS_12HTMLDocumentE,b1,__ZN7WebCore18HTMLDocumentParser6appendEN3WTF10PassRefPtrINS1_10StringImplEEE,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore18HTMLDocumentParser17isExecutingScriptEv,b2,__ZNK7WebCore18HTMLDocumentParser17hasPreloadScannerEv,b2,__ZN7WebCore18HTMLDocumentParser17hasInsertionPointEv,b2,__ZThn28_NK7WebCore18HTMLDocumentParser17hasPreloadScannerEv,b2,__ZN7WebCore24ScriptableDocumentParser26asScriptableDocumentParserEv,b2,__ZNK7WebCore18HTMLDocumentParser14processingDataEv,b2,__ZN7WebCore18HTMLDocumentParser11inputStreamEv,b2,__ZNK7WebCore25DecodedDataDocumentParser10wellFormedEv,b2,__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv,b2,__ZThn28_N7WebCore18HTMLDocumentParser11inputStreamEv,b2,__ZNK7WebCore18HTMLDocumentParser19isWaitingForScriptsEv,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  var FUNCTION_TABLE_viiii = [b5,b5,viiii___ZN7WebCore25DecodedDataDocumentParser11appendBytesERNS_14DocumentWriterEPKcj__wrapper,b5,__ZN7WebCore18HTMLDocumentParserC2ERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE,b5,b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames11noframesTagE": __ZN7WebCore9HTMLNames11noframesTagE, "__ZN7WebCore9HTMLNames12plaintextTagE": __ZN7WebCore9HTMLNames12plaintextTagE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN7WebCore9HTMLNames11textareaTagE": __ZN7WebCore9HTMLNames11textareaTagE, "__ZN7WebCore9HTMLNames8titleTagE": __ZN7WebCore9HTMLNames8titleTagE, "__ZN7WebCore9HTMLNames11noscriptTagE": __ZN7WebCore9HTMLNames11noscriptTagE, "__ZN7WebCore9HTMLNames6xmpTagE": __ZN7WebCore9HTMLNames6xmpTagE, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames10noembedTagE": __ZN7WebCore9HTMLNames10noembedTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj","__ZN7WebCore18HTMLDocumentParser30runScriptsForPausedTreeBuilderEv","_strlen","__ZN7WebCore18HTMLDocumentParser23pumpTokenizerIfPossibleENS0_15SynchronousModeE","__ZN7WebCore15HTMLInputStream13markEndOfFileEv","__ZNK7WebCore18HTMLDocumentParser17isParsingFragmentEv","__ZN7WebCore18HTMLDocumentParserD0Ev","__ZN7WebCore18HTMLDocumentParserD2Ev","__ZNK7WebCore18HTMLDocumentParser17hasPreloadScannerEv","__ZN7WebCore18HTMLDocumentParser33attemptToRunDeferredScriptsAndEndEv","__ZN7WebCore18HTMLDocumentParser12watchForLoadEPNS_14CachedResourceE","__ZN7WebCore18HTMLDocumentParser17hasInsertionPointEv","__ZThn32_N7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore15SegmentedStringC2ERKN3WTF6StringE","__ZN7WebCore18HTMLDocumentParser13pumpTokenizerENS0_15SynchronousModeE","__ZN7WebCore18HTMLDocumentParser20prepareToStopParsingEv","__ZThn32_N7WebCore18HTMLDocumentParserD0Ev","__ZN7WebCore17HTMLSourceTrackerD2Ev","__ZNK7WebCore18HTMLDocumentParser19isWaitingForScriptsEv","__ZN7WebCore15AtomicHTMLTokenD2Ev","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZThn28_NK7WebCore18HTMLDocumentParser17hasPreloadScannerEv","__ZNK7WebCore18HTMLDocumentParser12textPositionEv","__ZThn28_N7WebCore18HTMLDocumentParser12watchForLoadEPNS_14CachedResourceE","__ZN7WebCore18HTMLDocumentParser6detachEv","__ZN7WebCore18HTMLDocumentParser12endIfDelayedEv","__ZN7WebCore24ScriptableDocumentParser26asScriptableDocumentParserEv","__ZNK7WebCore18HTMLDocumentParser20isScheduledForResumeEv","__ZThn28_N7WebCore18HTMLDocumentParser47appendCurrentInputStreamToPreloadScannerAndScanEv","__ZN7WebCore18HTMLDocumentParser35executeScriptsWaitingForStylesheetsEv","__ZN7WebCore18HTMLDocumentParser11stopParsingEv","__ZThn28_N7WebCore18HTMLDocumentParser19stopWatchingForLoadEPNS_14CachedResourceE","__ZN3WTF5DequeIN7WebCore18SegmentedSubstringELj0EE10destroyAllEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore18HTMLDocumentParser14processingDataEv","__ZN7WebCore18HTMLDocumentParser29forcePlaintextForTextDocumentEv","__ZN7WebCore18HTMLDocumentParser24contextForParsingSessionEv","__ZThn32_N7WebCore18HTMLDocumentParserD1Ev","__ZN7WebCore18HTMLDocumentParser23resumeParsingAfterYieldEv","__ZN7WebCore18HTMLDocumentParser11inputStreamEv","__ZN7WebCore18HTMLDocumentParser21suspendScheduledTasksEv","__ZNK7WebCore18HTMLDocumentParser17isExecutingScriptEv","__ZNK7WebCore25DecodedDataDocumentParser10wellFormedEv","__ZN7WebCore18HTMLDocumentParserC2ERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE","__ZN7WebCore10SuffixTreeINS_13ASCIICodebookEE4NodeD2Ev","__ZThn28_N7WebCore18HTMLDocumentParserD1Ev","__ZN7WebCore18HTMLDocumentParser16canTakeNextTokenENS0_15SynchronousModeERNS_11PumpSessionE","__ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore15AtomicHTMLToken20initializeAttributesERKN3WTF6VectorINS_9HTMLToken9AttributeELj10ENS1_15CrashOnOverflowEEE","__ZN7WebCore9HTMLTokenD2Ev","__ZN7WebCore18HTMLDocumentParser26constructTreeFromHTMLTokenERNS_9HTMLTokenE","__ZN7WebCore18HTMLDocumentParser21parseDocumentFragmentERKN3WTF6StringERNS_16DocumentFragmentEPNS_7ElementENS_19ParserContentPolicyE","_memset","__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv","__ZN7WebCore18HTMLDocumentParser33resumeParsingAfterScriptExecutionEv","__ZThn28_N7WebCore18HTMLDocumentParser11inputStreamEv","__ZN7WebCore18HTMLDocumentParser12attemptToEndEv","__ZN7WebCore10XSSAuditorD2Ev","__ZN7WebCore18HTMLDocumentParser3endEv","_memcpy","__ZN7WebCore18HTMLDocumentParser47appendCurrentInputStreamToPreloadScannerAndScanEv","__ZN7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore18HTMLDocumentParser6finishEv","__ZN7WebCore15AtomicHTMLTokenC2ERNS_9HTMLTokenE","__ZN7WebCore18HTMLDocumentParser6insertERKNS_15SegmentedStringE","__ZThn28_N7WebCore18HTMLDocumentParserD0Ev","__ZN7WebCore18HTMLDocumentParser19stopWatchingForLoadEPNS_14CachedResourceE","__ZN7WebCore18HTMLDocumentParserC2ERNS_12HTMLDocumentE","__ZN7WebCore14DocumentParser15pinToMainThreadEv","__ZN7WebCore18HTMLDocumentParser6appendEN3WTF10PassRefPtrINS1_10StringImplEEE","__ZN7WebCore18HTMLDocumentParser20resumeScheduledTasksEv"]

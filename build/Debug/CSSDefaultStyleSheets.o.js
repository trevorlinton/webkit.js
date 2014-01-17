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
H_BASE = parentModule["_malloc"](400 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 400;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([104,116,109,108,44,98,111,100,121,44,100,105,118,123,100,105,115,112,108,97,121,58,98,108,111,99,107,125,104,101,97,100,123,100,105,115,112,108,97,121,58,110,111,110,101,125,98,111,100,121,123,109,97,114,103,105,110,58,56,112,120,125,100,105,118,58,102,111,99,117,115,44,115,112,97,110,58,102,111,99,117,115,44,97,58,102,111,99,117,115,123,111,117,116,108,105,110,101,58,97,117,116,111,32,53,112,120,32,45,119,101,98,107,105,116,45,102,111,99,117,115,45,114,105,110,103,45,99,111,108,111,114,125,97,58,45,119,101,98,107,105,116,45,97,110,121,45,108,105,110,107,123,99,111,108,111,114,58,45,119,101,98,107,105,116,45,108,105,110,107,59,116,101,120,116,45,100,101,99,111,114,97,116,105,111,110,58,117,110,100,101,114,108,105,110,101,125,97,58,45,119,101,98,107,105,116,45,97,110,121,45,108,105,110,107,58,97,99,116,105,118,101,123,99,111,108,111,114,58,45,119,101,98,107,105,116,45,97,99,116,105,118,101,108,105,110,107,125,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore25sourceUserAgentStyleSheetE=env.__ZN7WebCore25sourceUserAgentStyleSheetE|0;
  var __ZN7WebCore9HTMLNames6divTagE=env.__ZN7WebCore9HTMLNames6divTagE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore25mathmlUserAgentStyleSheetE=env.__ZN7WebCore25mathmlUserAgentStyleSheetE|0;
  var __ZN7WebCore9HTMLNames5brTagE=env.__ZN7WebCore9HTMLNames5brTagE|0;
  var __ZN7WebCore9HTMLNames8embedTagE=env.__ZN7WebCore9HTMLNames8embedTagE|0;
  var __ZN7WebCore22svgUserAgentStyleSheetE=env.__ZN7WebCore22svgUserAgentStyleSheetE|0;
  var __ZN7WebCore9HTMLNames7spanTagE=env.__ZN7WebCore9HTMLNames7spanTagE|0;
  var __ZN7WebCore25quirksUserAgentStyleSheetE=env.__ZN7WebCore25quirksUserAgentStyleSheetE|0;
  var __ZN7WebCore9HTMLNames7headTagE=env.__ZN7WebCore9HTMLNames7headTagE|0;
  var __ZN7WebCore9HTMLNames9objectTagE=env.__ZN7WebCore9HTMLNames9objectTagE|0;
  var __ZN7WebCore9HTMLNames7htmlTagE=env.__ZN7WebCore9HTMLNames7htmlTagE|0;
  var __ZN7WebCore9HTMLNames4aTagE=env.__ZN7WebCore9HTMLNames4aTagE|0;
  var __ZN7WebCore29fullscreenUserAgentStyleSheetE=env.__ZN7WebCore29fullscreenUserAgentStyleSheetE|0;
  var __ZN7WebCore26plugInsUserAgentStyleSheetE=env.__ZN7WebCore26plugInsUserAgentStyleSheetE|0;
  var __ZN7WebCore23htmlUserAgentStyleSheetE=env.__ZN7WebCore23htmlUserAgentStyleSheetE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore21CSSDefaultStyleSheets17plugInsStyleSheetE=(H_BASE+352)|0;
  var __ZN7WebCore21CSSDefaultStyleSheets23simpleDefaultStyleSheetE=(H_BASE+312)|0;
  var __ZN7WebCore21CSSDefaultStyleSheets17defaultStyleSheetE=(H_BASE+360)|0;
  var __ZN7WebCore21CSSDefaultStyleSheets17defaultPrintStyleE=(H_BASE+368)|0;
  var __ZN7WebCore21CSSDefaultStyleSheets16quirksStyleSheetE=(H_BASE+376)|0;
  var __ZN7WebCore21CSSDefaultStyleSheets20fullscreenStyleSheetE=(H_BASE+336)|0;
  var __ZN7WebCore21CSSDefaultStyleSheets22defaultViewSourceStyleE=(H_BASE+328)|0;
  var __ZN7WebCore21CSSDefaultStyleSheets23mediaControlsStyleSheetE=(H_BASE+320)|0;
  var __ZN7WebCore21CSSDefaultStyleSheets13svgStyleSheetE=(H_BASE+392)|0;
  var __ZN7WebCore21CSSDefaultStyleSheets16mathMLStyleSheetE=(H_BASE+384)|0;
  var __ZN7WebCore21CSSDefaultStyleSheets12defaultStyleE=(H_BASE+400)|0;
  var __ZN7WebCore21CSSDefaultStyleSheets18defaultQuirksStyleE=(H_BASE+344)|0;
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore21CSSDefaultStyleSheets34ensureDefaultStyleSheetsForElementEPNS_7ElementERb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
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
 do {
  if ((HEAP32[H_BASE + 312 >> 2] | 0) != 0) {
   i17 = HEAP32[i1 + 44 >> 2] | 0;
   i18 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
   if ((i17 | 0) == (i18 | 0)) {
    break;
   }
   i19 = HEAP32[i17 + 12 >> 2] | 0;
   if ((i19 | 0) == (HEAP32[i18 + 12 >> 2] | 0)) {
    if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
     break;
    }
   }
   i18 = HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0;
   if ((i17 | 0) == (i18 | 0)) {
    break;
   }
   if ((i19 | 0) == (HEAP32[i18 + 12 >> 2] | 0)) {
    if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
     break;
    }
   }
   i18 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i17 | 0) == (i18 | 0)) {
    break;
   }
   if ((i19 | 0) == (HEAP32[i18 + 12 >> 2] | 0)) {
    if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
     break;
    }
   }
   i18 = HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0;
   if ((i17 | 0) == (i18 | 0)) {
    break;
   }
   if ((i19 | 0) == (HEAP32[i18 + 12 >> 2] | 0)) {
    if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
     break;
    }
   }
   i18 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
   if ((i17 | 0) == (i18 | 0)) {
    break;
   }
   if ((i19 | 0) == (HEAP32[i18 + 12 >> 2] | 0)) {
    if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
     break;
    }
   }
   i18 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i17 | 0) == (i18 | 0)) {
    break;
   }
   if ((i19 | 0) == (HEAP32[i18 + 12 >> 2] | 0)) {
    if ((HEAP32[i17 + 16 >> 2] | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
     break;
    }
   }
   if ((HEAP32[i1 + 12 >> 2] & 16 | 0) != 0) {
    if ((i19 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
   }
   __ZN7WebCore21CSSDefaultStyleSheets20loadFullDefaultStyleEv();
   HEAP8[i2] = 1;
  }
 } while (0);
 i19 = i1 + 12 | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 if ((HEAP32[H_BASE + 392 >> 2] | 0) != 0 | (i18 & 32 | 0) == 0) {
  i20 = i18;
 } else {
  __ZN3WTF6StringC1EPKcj(i5, __ZN7WebCore22svgUserAgentStyleSheetE | 0, 399);
  i18 = __ZN7WebCoreL12parseUASheetERKN3WTF6StringE(i5) | 0;
  i17 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i17 | 0) != 0) {
    i5 = i17 | 0;
    i21 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i21 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i5 >> 2] = i21;
     break;
    }
   }
  } while (0);
  HEAP32[H_BASE + 392 >> 2] = i18;
  i17 = HEAP32[H_BASE + 400 >> 2] | 0;
  if (HEAP8[H_BASE + 272 | 0] | 0) {
   i22 = HEAP32[H_BASE + 296 >> 2] | 0;
  } else {
   i21 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore19MediaQueryEvaluatorC1Eb(i21, 1);
   HEAP32[H_BASE + 296 >> 2] = i21;
   HEAP8[H_BASE + 272 | 0] = 1;
   i22 = i21;
  }
  __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i17, i18, i22, 0, 0);
  i22 = HEAP32[H_BASE + 368 >> 2] | 0;
  i18 = HEAP32[H_BASE + 392 >> 2] | 0;
  if (HEAP8[H_BASE + 264 | 0] | 0) {
   i23 = HEAP32[H_BASE + 288 >> 2] | 0;
  } else {
   i17 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore19MediaQueryEvaluatorC1Eb(i17, 1);
   HEAP32[H_BASE + 288 >> 2] = i17;
   HEAP8[H_BASE + 264 | 0] = 1;
   i23 = i17;
  }
  __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i22, i18, i23, 0, 0);
  HEAP8[i2] = 1;
  i20 = HEAP32[i19 >> 2] | 0;
 }
 if (!((HEAP32[H_BASE + 384 >> 2] | 0) != 0 | (i20 & 16777216 | 0) == 0)) {
  __ZN3WTF6StringC1EPKcj(i4, __ZN7WebCore25mathmlUserAgentStyleSheetE | 0, 5960);
  i20 = __ZN7WebCoreL12parseUASheetERKN3WTF6StringE(i4) | 0;
  i19 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i19 | 0) != 0) {
    i4 = i19 | 0;
    i23 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i23 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i19);
     break;
    } else {
     HEAP32[i4 >> 2] = i23;
     break;
    }
   }
  } while (0);
  HEAP32[H_BASE + 384 >> 2] = i20;
  i19 = HEAP32[H_BASE + 400 >> 2] | 0;
  if (HEAP8[H_BASE + 272 | 0] | 0) {
   i24 = HEAP32[H_BASE + 296 >> 2] | 0;
  } else {
   i23 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore19MediaQueryEvaluatorC1Eb(i23, 1);
   HEAP32[H_BASE + 296 >> 2] = i23;
   HEAP8[H_BASE + 272 | 0] = 1;
   i24 = i23;
  }
  __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i19, i20, i24, 0, 0);
  i24 = HEAP32[H_BASE + 368 >> 2] | 0;
  i20 = HEAP32[H_BASE + 384 >> 2] | 0;
  if (HEAP8[H_BASE + 264 | 0] | 0) {
   i25 = HEAP32[H_BASE + 288 >> 2] | 0;
  } else {
   i19 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore19MediaQueryEvaluatorC1Eb(i19, 1);
   HEAP32[H_BASE + 288 >> 2] = i19;
   HEAP8[H_BASE + 264 | 0] = 1;
   i25 = i19;
  }
  __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i24, i20, i25, 0, 0);
  HEAP8[i2] = 1;
 }
 do {
  if ((HEAP32[H_BASE + 336 >> 2] | 0) == 0) {
   if ((HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1688 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF6StringC1EPKcj(i8, __ZN7WebCore29fullscreenUserAgentStyleSheetE | 0, 1321);
   __ZN7WebCore11RenderTheme12themeForPageEPNS_4PageE(i10, 0);
   i25 = i10 | 0;
   i20 = HEAP32[i25 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 20 >> 2] & 1](i9, i20);
   i20 = i8 | 0;
   i24 = HEAP32[i20 >> 2] | 0;
   i19 = (i24 | 0) == 0;
   if (!i19) {
    i23 = i24 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   }
   i23 = i9 | 0;
   i4 = HEAP32[i23 >> 2] | 0;
   i18 = (i4 | 0) == 0;
   if (!i18) {
    i22 = i4 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   }
   i22 = i7 | 0;
   HEAP32[i22 >> 2] = i24;
   if (!i19) {
    i17 = i24 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   }
   i17 = i7 + 4 | 0;
   HEAP32[i17 >> 2] = i4;
   do {
    if (!i18) {
     i21 = i4 | 0;
     i5 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i5 + 2;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i21 >> 2] = i5;
      break;
     }
    }
   } while (0);
   do {
    if (!i19) {
     i4 = i24 | 0;
     i18 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i4 >> 2] = i18;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i6, i7);
   i24 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i19 = i24 | 0;
     i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i19 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i24 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i17 = i24 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i17 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i24 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i22 = i24 | 0;
     i18 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i22 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i24 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i23 = i24 + 4 | 0;
     i18 = i23 | 0;
     i22 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) != 0) {
      HEAP32[i18 >> 2] = i22;
      break;
     }
     i22 = i23 - 4 | 0;
     if ((i22 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 1](i22);
    }
   } while (0);
   i24 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i25 = i24 | 0;
     i22 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i25 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i24 = __ZN7WebCoreL12parseUASheetERKN3WTF6StringE(i6) | 0;
   HEAP32[H_BASE + 336 >> 2] = i24;
   i20 = HEAP32[H_BASE + 400 >> 2] | 0;
   if (HEAP8[H_BASE + 272 | 0] | 0) {
    i26 = HEAP32[H_BASE + 296 >> 2] | 0;
   } else {
    i22 = __ZN3WTF10fastMallocEj(16) | 0;
    __ZN7WebCore19MediaQueryEvaluatorC1Eb(i22, 1);
    HEAP32[H_BASE + 296 >> 2] = i22;
    HEAP8[H_BASE + 272 | 0] = 1;
    i26 = i22;
   }
   __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i20, i24, i26, 0, 0);
   i24 = HEAP32[H_BASE + 344 >> 2] | 0;
   i20 = HEAP32[H_BASE + 336 >> 2] | 0;
   if (HEAP8[H_BASE + 272 | 0] | 0) {
    i27 = HEAP32[H_BASE + 296 >> 2] | 0;
   } else {
    i22 = __ZN3WTF10fastMallocEj(16) | 0;
    __ZN7WebCore19MediaQueryEvaluatorC1Eb(i22, 1);
    HEAP32[H_BASE + 296 >> 2] = i22;
    HEAP8[H_BASE + 272 | 0] = 1;
    i27 = i22;
   }
   __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i24, i20, i27, 0, 0);
   HEAP8[i2] = 1;
   i20 = HEAP32[i6 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i24 = i20 | 0;
   i22 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i24 >> 2] = i22;
    break;
   }
  }
 } while (0);
 if ((HEAP32[H_BASE + 352 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i1 + 44 >> 2] | 0;
 i27 = HEAP32[__ZN7WebCore9HTMLNames9objectTagE >> 2] | 0;
 do {
  if ((i6 | 0) != (i27 | 0)) {
   i26 = HEAP32[i6 + 12 >> 2] | 0;
   if ((i26 | 0) == (HEAP32[i27 + 12 >> 2] | 0)) {
    if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i27 + 16 >> 2] | 0)) {
     break;
    }
   }
   i7 = HEAP32[__ZN7WebCore9HTMLNames8embedTagE >> 2] | 0;
   if ((i6 | 0) == (i7 | 0)) {
    break;
   }
   if ((i26 | 0) != (HEAP32[i7 + 12 >> 2] | 0)) {
    STACKTOP = i3;
    return;
   }
   if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i7 + 16 >> 2] | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i6 = i1 + 20 | 0;
 __ZN7WebCore11RenderTheme12themeForPageEPNS_4PageE(i14, __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) | 0);
 i1 = i14 | 0;
 i14 = HEAP32[i1 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 1](i13, i14);
 i14 = HEAP32[(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0) | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 436 >> 2] & 1](i15, i14);
 i14 = i13 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 i6 = (i13 | 0) == 0;
 if (!i6) {
  i27 = i13 | 0;
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
 }
 i27 = i15 | 0;
 i15 = HEAP32[i27 >> 2] | 0;
 i7 = (i15 | 0) == 0;
 if (!i7) {
  i26 = i15 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
 }
 i26 = i12 | 0;
 HEAP32[i26 >> 2] = i13;
 if (!i6) {
  i9 = i13 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i12 + 4 | 0;
 HEAP32[i9 >> 2] = i15;
 do {
  if (!i7) {
   i8 = i15 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i10 + 2;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i8 >> 2] = i10;
    break;
   }
  }
 } while (0);
 do {
  if (!i6) {
   i15 = i13 | 0;
   i7 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i15 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i11, i12);
 i12 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i9 = i12 | 0;
   i13 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i9 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i26 = i12 | 0;
   i13 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i26 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i27 = i12 | 0;
   i13 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i27 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i14 = i12 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i1 = i12 + 4 | 0;
   i13 = i1 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i13 >> 2] = i14;
    break;
   }
   i14 = i1 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
  }
 } while (0);
 i12 = i11 | 0;
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i28 = 138;
 } else {
  if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
   i28 = 138;
  }
 }
 do {
  if ((i28 | 0) == 138) {
   __ZN3WTF6StringC1EPKcj(i16, __ZN7WebCore26plugInsUserAgentStyleSheetE | 0, 1413);
   i14 = i16 | 0;
   i1 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   do {
    if ((i13 | 0) != 0) {
     i1 = i13 | 0;
     i27 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i1 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i14 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i27 = i13 | 0;
   i1 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i27 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i16 = __ZN7WebCoreL12parseUASheetERKN3WTF6StringE(i11) | 0;
 HEAP32[H_BASE + 352 >> 2] = i16;
 i11 = HEAP32[H_BASE + 400 >> 2] | 0;
 if (HEAP8[H_BASE + 272 | 0] | 0) {
  i29 = HEAP32[H_BASE + 296 >> 2] | 0;
 } else {
  i28 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore19MediaQueryEvaluatorC1Eb(i28, 1);
  HEAP32[H_BASE + 296 >> 2] = i28;
  HEAP8[H_BASE + 272 | 0] = 1;
  i29 = i28;
 }
 __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i11, i16, i29, 0, 0);
 HEAP8[i2] = 1;
 i2 = HEAP32[i12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i2 | 0;
 i29 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i29 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i12 >> 2] = i29;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21CSSDefaultStyleSheets20loadFullDefaultStyleEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i2 = i1 | 0;
 i3 = i1 + 8 | 0;
 i4 = i1 + 16 | 0;
 i5 = i1 + 24 | 0;
 i6 = i1 + 32 | 0;
 i7 = i1 + 40 | 0;
 i8 = i1 + 48 | 0;
 i9 = i1 + 56 | 0;
 i10 = i1 + 64 | 0;
 i11 = i1 + 72 | 0;
 i12 = HEAP32[H_BASE + 312 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3WTF10fastMallocEj(236) | 0;
  _memset(i13 | 0, 0, 132) | 0;
  HEAP8[i13 + 132 | 0] = 1;
  _memset(i13 + 136 | 0, 0, 86) | 0;
  HEAP32[i13 + 224 >> 2] = 0;
  HEAP32[i13 + 228 >> 2] = 0;
  HEAP32[i13 + 232 >> 2] = 0;
  HEAP32[H_BASE + 400 >> 2] = i13;
  i13 = __ZN3WTF10fastMallocEj(236) | 0;
  _memset(i13 | 0, 0, 132) | 0;
  HEAP8[i13 + 132 | 0] = 1;
  _memset(i13 + 136 | 0, 0, 86) | 0;
  HEAP32[i13 + 224 >> 2] = 0;
  HEAP32[i13 + 228 >> 2] = 0;
  HEAP32[i13 + 232 >> 2] = 0;
  HEAP32[H_BASE + 368 >> 2] = i13;
  i13 = __ZN3WTF10fastMallocEj(236) | 0;
  _memset(i13 | 0, 0, 132) | 0;
  HEAP8[i13 + 132 | 0] = 1;
  _memset(i13 + 136 | 0, 0, 86) | 0;
  HEAP32[i13 + 224 >> 2] = 0;
  HEAP32[i13 + 228 >> 2] = 0;
  HEAP32[i13 + 232 >> 2] = 0;
  HEAP32[H_BASE + 344 >> 2] = i13;
 } else {
  i13 = HEAP32[H_BASE + 400 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = i12;
  } else {
   __ZN7WebCore7RuleSetD2Ev(i13);
   __ZN3WTF8fastFreeEPv(i13);
   i14 = HEAP32[H_BASE + 312 >> 2] | 0;
  }
  i13 = i14 | 0;
  i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
  if ((i12 | 0) == 0) {
   __ZN7WebCore18StyleSheetContentsD1Ev(i14);
   __ZN3WTF8fastFreeEPv(i14);
  } else {
   HEAP32[i13 >> 2] = i12;
  }
  i12 = __ZN3WTF10fastMallocEj(236) | 0;
  _memset(i12 | 0, 0, 132) | 0;
  HEAP8[i12 + 132 | 0] = 1;
  _memset(i12 + 136 | 0, 0, 86) | 0;
  HEAP32[i12 + 224 >> 2] = 0;
  HEAP32[i12 + 228 >> 2] = 0;
  HEAP32[i12 + 232 >> 2] = 0;
  HEAP32[H_BASE + 400 >> 2] = i12;
  i12 = __ZN3WTF10fastMallocEj(236) | 0;
  _memset(i12 | 0, 0, 132) | 0;
  HEAP8[i12 + 132 | 0] = 1;
  _memset(i12 + 136 | 0, 0, 86) | 0;
  HEAP32[i12 + 224 >> 2] = 0;
  HEAP32[i12 + 228 >> 2] = 0;
  HEAP32[i12 + 232 >> 2] = 0;
  HEAP32[H_BASE + 368 >> 2] = i12;
  HEAP32[H_BASE + 312 >> 2] = 0;
 }
 __ZN3WTF6StringC1EPKcj(i4, __ZN7WebCore23htmlUserAgentStyleSheetE | 0, 17883);
 __ZN7WebCore11RenderTheme12themeForPageEPNS_4PageE(i6, 0);
 i12 = i6 | 0;
 i6 = HEAP32[i12 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 1](i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i13 = (i4 | 0) == 0;
 if (!i13) {
  i14 = i4 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 i14 = i5 | 0;
 i5 = HEAP32[i14 >> 2] | 0;
 i15 = (i5 | 0) == 0;
 if (!i15) {
  i16 = i5 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
 }
 i16 = i3 | 0;
 HEAP32[i16 >> 2] = i4;
 if (!i13) {
  i17 = i4 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 i17 = i3 + 4 | 0;
 HEAP32[i17 >> 2] = i5;
 do {
  if (!i15) {
   i18 = i5 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i19 + 2;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i18 >> 2] = i19;
    break;
   }
  }
 } while (0);
 do {
  if (!i13) {
   i5 = i4 | 0;
   i15 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i2, i3);
 i3 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i17 = i3 | 0;
   i4 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i17 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i16 = i3 | 0;
   i4 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i16 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i12 = i3 + 4 | 0;
   i4 = i12 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i4 >> 2] = i14;
    break;
   }
   i14 = i12 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i14 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i3 = __ZN7WebCoreL12parseUASheetERKN3WTF6StringE(i2) | 0;
 HEAP32[H_BASE + 360 >> 2] = i3;
 i14 = HEAP32[H_BASE + 400 >> 2] | 0;
 if (HEAP8[H_BASE + 272 | 0] | 0) {
  i20 = HEAP32[H_BASE + 296 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore19MediaQueryEvaluatorC1Eb(i6, 1);
  HEAP32[H_BASE + 296 >> 2] = i6;
  HEAP8[H_BASE + 272 | 0] = 1;
  i20 = i6;
 }
 __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i14, i3, i20, 0, 0);
 i20 = HEAP32[H_BASE + 368 >> 2] | 0;
 i3 = HEAP32[H_BASE + 360 >> 2] | 0;
 if (HEAP8[H_BASE + 264 | 0] | 0) {
  i21 = HEAP32[H_BASE + 288 >> 2] | 0;
 } else {
  i14 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore19MediaQueryEvaluatorC1Eb(i14, 1);
  HEAP32[H_BASE + 288 >> 2] = i14;
  HEAP8[H_BASE + 264 | 0] = 1;
  i21 = i14;
 }
 __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i20, i3, i21, 0, 0);
 __ZN3WTF6StringC1EPKcj(i9, __ZN7WebCore25quirksUserAgentStyleSheetE | 0, 345);
 __ZN7WebCore11RenderTheme12themeForPageEPNS_4PageE(i11, 0);
 i21 = i11 | 0;
 i11 = HEAP32[i21 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 1](i10, i11);
 i11 = i9 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 i3 = (i9 | 0) == 0;
 if (!i3) {
  i20 = i9 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
 }
 i20 = i10 | 0;
 i10 = HEAP32[i20 >> 2] | 0;
 i14 = (i10 | 0) == 0;
 if (!i14) {
  i6 = i10 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i8 | 0;
 HEAP32[i6 >> 2] = i9;
 if (!i3) {
  i12 = i9 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i8 + 4 | 0;
 HEAP32[i12 >> 2] = i10;
 do {
  if (!i14) {
   i4 = i10 | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i16 + 2;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i4 >> 2] = i16;
    break;
   }
  }
 } while (0);
 do {
  if (!i3) {
   i10 = i9 | 0;
   i14 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i7, i8);
 i8 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = i8 | 0;
   i9 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i12 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i20 = i8 | 0;
   i9 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i20 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i21 = i8 + 4 | 0;
   i9 = i21 | 0;
   i20 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i9 >> 2] = i20;
    break;
   }
   i20 = i21 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
  }
 } while (0);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 | 0;
   i20 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i8 = __ZN7WebCoreL12parseUASheetERKN3WTF6StringE(i7) | 0;
 HEAP32[H_BASE + 376 >> 2] = i8;
 i20 = HEAP32[H_BASE + 344 >> 2] | 0;
 if (HEAP8[H_BASE + 272 | 0] | 0) {
  i22 = HEAP32[H_BASE + 296 >> 2] | 0;
 } else {
  i11 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore19MediaQueryEvaluatorC1Eb(i11, 1);
  HEAP32[H_BASE + 296 >> 2] = i11;
  HEAP8[H_BASE + 272 | 0] = 1;
  i22 = i11;
 }
 __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i20, i8, i22, 0, 0);
 i22 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i22 | 0) != 0) {
   i7 = i22 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i22 = HEAP32[i2 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i2 = i22 | 0;
 i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i22);
  STACKTOP = i1;
  return;
 } else {
  HEAP32[i2 >> 2] = i8;
  STACKTOP = i1;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if (i8) {
  i9 = 0;
 } else {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = (i3 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i9 | 0, i12 | 0) | 0;
 i12 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i8) {
  i14 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i14 = 9;
  }
 }
 do {
  if ((i14 | 0) == 9) {
   if (!i11) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i12 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i14 = 26;
      break;
     }
     i8 = i2 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
     i15 = i2;
     i16 = 0;
    } else {
     if (i12 >>> 0 > 4294967275 >>> 0) {
      i14 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i12 + 20 | 0);
     i2 = i6 | 0;
     i8 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i14 = 26;
      break;
     }
     i2 = i8 + 20 | 0;
     HEAP32[i8 >> 2] = 2;
     HEAP32[i8 + 4 >> 2] = i12;
     HEAP32[i8 + 8 >> 2] = i2;
     HEAP32[i8 + 12 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 32;
     i15 = i8;
     i16 = i2;
    }
   } while (0);
   if ((i14 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i17 = 0;
    } else {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i13 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i18 = i2;
     } else {
      i9 = 0;
      while (1) {
       HEAP8[i16 + i9 | 0] = HEAP8[i13 + i9 | 0] | 0;
       i9 = i9 + 1 | 0;
       if (i9 >>> 0 >= i8 >>> 0) {
        break;
       }
      }
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i17 = 0;
       break;
      } else {
       i18 = i8;
      }
     }
     i17 = HEAP32[i18 + 4 >> 2] | 0;
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i9 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i16 + (i19 + i17) | 0] = HEAP8[i9 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i8 >>> 0) {
       break;
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
  if ((i12 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 48;
    break;
   }
   i19 = i15 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i20 = i15;
   i21 = 0;
  } else {
   if (i12 >>> 0 > 2147483637 >>> 0) {
    i14 = 48;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i12 << 1) + 20 | 0);
   i15 = i5 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i19 | 0) == 0) {
    i14 = 48;
    break;
   }
   i15 = i19 + 20 | 0;
   HEAP32[i19 >> 2] = 2;
   HEAP32[i19 + 4 >> 2] = i12;
   HEAP32[i19 + 8 >> 2] = i15;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   i20 = i19;
   i21 = i15;
  }
 } while (0);
 if ((i14 | 0) == 48) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i22 = 0;
  } else {
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP16[i21 + (i23 << 1) >> 1] = HEAP16[i5 + (i23 << 1) >> 1] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP16[i21 + (i24 << 1) >> 1] = HEAPU8[i5 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
    break;
   }
   i22 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i25 = 0;
    }
    while (1) {
     HEAP16[i21 + (i25 + i22 << 1) >> 1] = HEAP16[i24 + (i25 << 1) >> 1] | 0;
     i25 = i25 + 1 | 0;
     if (i25 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   } else {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i26 = 0;
    }
    while (1) {
     HEAP16[i21 + (i26 + i22 << 1) >> 1] = HEAPU8[i24 + i26 | 0] | 0;
     i26 = i26 + 1 | 0;
     if (i26 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore7RuleSetD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 232 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 224 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore7RuleSetD2Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
   }
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
  HEAP32[i1 + 228 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore14RuleFeatureSetD2Ev(i1 + 136 | 0);
 i2 = i1 + 124 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 116 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 120 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 112 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i1 + 104 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 108 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 100 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 92 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 96 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 88 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i1 + 80 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 84 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 64 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i6 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i6 << 3) >> 2] | 0) != -1) {
      i3 = HEAP32[i2 + (i6 << 3) + 4 >> 2] | 0;
      if ((i3 | 0) == 0) {
       break;
      }
      i5 = i3 + 8 | 0;
      if ((HEAP32[i5 >> 2] | 0) != 0) {
       HEAP32[i5 >> 2] = 0;
      }
      i5 = i3 | 0;
      i7 = HEAP32[i5 >> 2] | 0;
      if ((i7 | 0) != 0) {
       HEAP32[i5 >> 2] = 0;
       HEAP32[i3 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i7);
      }
      __ZN3WTF8fastFreeEPv(i3);
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i6 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i6 << 3) >> 2] | 0) != -1) {
      i3 = HEAP32[i2 + (i6 << 3) + 4 >> 2] | 0;
      if ((i3 | 0) == 0) {
       break;
      }
      i7 = i3 + 8 | 0;
      if ((HEAP32[i7 >> 2] | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
      }
      i7 = i3 | 0;
      i5 = HEAP32[i7 >> 2] | 0;
      if ((i5 | 0) != 0) {
       HEAP32[i7 >> 2] = 0;
       HEAP32[i3 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i5);
      }
      __ZN3WTF8fastFreeEPv(i3);
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 24 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i6 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i6 << 3) >> 2] | 0) != -1) {
      i3 = HEAP32[i2 + (i6 << 3) + 4 >> 2] | 0;
      if ((i3 | 0) == 0) {
       break;
      }
      i5 = i3 + 8 | 0;
      if ((HEAP32[i5 >> 2] | 0) != 0) {
       HEAP32[i5 >> 2] = 0;
      }
      i5 = i3 | 0;
      i7 = HEAP32[i5 >> 2] | 0;
      if ((i7 | 0) != 0) {
       HEAP32[i5 >> 2] = 0;
       HEAP32[i3 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i7);
      }
      __ZN3WTF8fastFreeEPv(i3);
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i1 << 3) >> 2] | 0) != -1) {
     i6 = HEAP32[i2 + (i1 << 3) + 4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     i3 = i6 + 8 | 0;
     if ((HEAP32[i3 >> 2] | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i3 = i6 | 0;
     i7 = HEAP32[i3 >> 2] | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
      HEAP32[i6 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i7);
     }
     __ZN3WTF8fastFreeEPv(i6);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore21CSSDefaultStyleSheets16initDefaultStyleEPNS_7ElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP32[H_BASE + 400 >> 2] | 0) != 0) {
  return;
 }
 do {
  if ((i1 | 0) != 0) {
   i2 = HEAP32[i1 + 44 >> 2] | 0;
   i3 = HEAP32[__ZN7WebCore9HTMLNames7htmlTagE >> 2] | 0;
   if ((i2 | 0) == (i3 | 0)) {
    break;
   }
   i4 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i4 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
     break;
    }
   }
   i3 = HEAP32[__ZN7WebCore9HTMLNames7headTagE >> 2] | 0;
   if ((i2 | 0) == (i3 | 0)) {
    break;
   }
   if ((i4 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
     break;
    }
   }
   i3 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i2 | 0) == (i3 | 0)) {
    break;
   }
   if ((i4 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
     break;
    }
   }
   i3 = HEAP32[__ZN7WebCore9HTMLNames6divTagE >> 2] | 0;
   if ((i2 | 0) == (i3 | 0)) {
    break;
   }
   if ((i4 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
     break;
    }
   }
   i3 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
   if ((i2 | 0) == (i3 | 0)) {
    break;
   }
   if ((i4 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
     break;
    }
   }
   i3 = HEAP32[__ZN7WebCore9HTMLNames5brTagE >> 2] | 0;
   if ((i2 | 0) == (i3 | 0)) {
    break;
   }
   if ((i4 | 0) == (HEAP32[i3 + 12 >> 2] | 0)) {
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i3 + 16 >> 2] | 0)) {
     break;
    }
   }
   if ((HEAP32[i1 + 12 >> 2] & 16 | 0) != 0) {
    if ((i4 | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames4aTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
   }
   __ZN7WebCore21CSSDefaultStyleSheets20loadFullDefaultStyleEv();
   return;
  }
 } while (0);
 __ZN7WebCore21CSSDefaultStyleSheets22loadSimpleDefaultStyleEv();
 return;
}
function __ZN7WebCoreL12parseUASheetERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 80 | 0;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 __ZN7WebCore16CSSParserContextC1ENS_13CSSParserModeERKNS_3URLE(i4, 1, i5);
 i5 = __ZN3WTF10fastMallocEj(144) | 0;
 i7 = i3 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore18StyleSheetContentsC1EPNS_15StyleRuleImportERKN3WTF6StringERKNS_16CSSParserContextE(i5, 0, i3, i4);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i4 + 48 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i9 = __ZN7WebCore18StyleSheetContents11parseStringERKN3WTF6StringE(i5, i1) | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i6 = i3 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i9 = __ZN7WebCore18StyleSheetContents11parseStringERKN3WTF6StringE(i5, i1) | 0;
  STACKTOP = i2;
  return i5 | 0;
 } else {
  HEAP32[i6 >> 2] = i7;
  i9 = __ZN7WebCore18StyleSheetContents11parseStringERKN3WTF6StringE(i5, i1) | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore21CSSDefaultStyleSheets22loadSimpleDefaultStyleEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i1 | 0;
 i3 = __ZN3WTF10fastMallocEj(236) | 0;
 i4 = i3;
 _memset(i3 | 0, 0, 132) | 0;
 HEAP8[i3 + 132 | 0] = 1;
 _memset(i3 + 136 | 0, 0, 86) | 0;
 HEAP32[i3 + 224 >> 2] = 0;
 HEAP32[i3 + 228 >> 2] = 0;
 HEAP32[i3 + 232 >> 2] = 0;
 HEAP32[H_BASE + 400 >> 2] = i4;
 HEAP32[H_BASE + 368 >> 2] = i4;
 i4 = __ZN3WTF10fastMallocEj(236) | 0;
 _memset(i4 | 0, 0, 132) | 0;
 HEAP8[i4 + 132 | 0] = 1;
 _memset(i4 + 136 | 0, 0, 86) | 0;
 HEAP32[i4 + 224 >> 2] = 0;
 HEAP32[i4 + 228 >> 2] = 0;
 HEAP32[i4 + 232 >> 2] = 0;
 HEAP32[H_BASE + 344 >> 2] = i4;
 __ZN3WTF6StringC1EPKcj(i2, H_BASE + 8 | 0, 248);
 i4 = __ZN7WebCoreL12parseUASheetERKN3WTF6StringE(i2) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[H_BASE + 312 >> 2] = i4;
 i3 = HEAP32[H_BASE + 400 >> 2] | 0;
 if (HEAP8[H_BASE + 272 | 0] | 0) {
  i6 = HEAP32[H_BASE + 296 >> 2] | 0;
  __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i3, i4, i6, 0, 0);
  STACKTOP = i1;
  return;
 } else {
  i5 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore19MediaQueryEvaluatorC1Eb(i5, 1);
  HEAP32[H_BASE + 296 >> 2] = i5;
  HEAP8[H_BASE + 272 | 0] = 1;
  i6 = i5;
  __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i3, i4, i6, 0, 0);
  STACKTOP = i1;
  return;
 }
}
function __ZN7WebCore21CSSDefaultStyleSheets15viewSourceStyleEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i1 | 0;
 i3 = HEAP32[H_BASE + 328 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  STACKTOP = i1;
  return i4 | 0;
 }
 if (!(HEAP8[H_BASE + 280 | 0] | 0)) {
  __ZN3WTF6StringC1EPKcj(i2, __ZN7WebCore25sourceUserAgentStyleSheetE | 0, 2067);
  i3 = __ZN7WebCoreL12parseUASheetERKN3WTF6StringE(i2) | 0;
  i5 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i2 = i5 | 0;
    i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i2 >> 2] = i6;
     break;
    }
   }
  } while (0);
  HEAP32[H_BASE + 304 >> 2] = i3;
  HEAP8[H_BASE + 280 | 0] = 1;
 }
 i3 = __ZN3WTF10fastMallocEj(236) | 0;
 i5 = i3;
 _memset(i3 | 0, 0, 132) | 0;
 HEAP8[i3 + 132 | 0] = 1;
 _memset(i3 + 136 | 0, 0, 86) | 0;
 HEAP32[i3 + 224 >> 2] = 0;
 HEAP32[i3 + 228 >> 2] = 0;
 HEAP32[i3 + 232 >> 2] = 0;
 HEAP32[H_BASE + 328 >> 2] = i5;
 i3 = HEAP32[H_BASE + 304 >> 2] | 0;
 if (HEAP8[H_BASE + 272 | 0] | 0) {
  i7 = HEAP32[H_BASE + 296 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore19MediaQueryEvaluatorC1Eb(i6, 1);
  HEAP32[H_BASE + 296 >> 2] = i6;
  HEAP8[H_BASE + 272 | 0] = 1;
  i7 = i6;
 }
 __ZN7WebCore7RuleSet17addRulesFromSheetEPNS_18StyleSheetContentsERKNS_19MediaQueryEvaluatorEPNS_13StyleResolverEPKNS_13ContainerNodeE(i5, i3, i7, 0, 0);
 i4 = HEAP32[H_BASE + 328 >> 2] | 0;
 STACKTOP = i1;
 return i4 | 0;
}
function __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i2) {
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
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
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
function __ZN7WebCore14RuleFeatureSetD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 80 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 72 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 76 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 68 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 60 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 64 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i2);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore25sourceUserAgentStyleSheetE": __ZN7WebCore25sourceUserAgentStyleSheetE, "__ZN7WebCore9HTMLNames6divTagE": __ZN7WebCore9HTMLNames6divTagE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore25mathmlUserAgentStyleSheetE": __ZN7WebCore25mathmlUserAgentStyleSheetE, "__ZN7WebCore9HTMLNames5brTagE": __ZN7WebCore9HTMLNames5brTagE, "__ZN7WebCore9HTMLNames8embedTagE": __ZN7WebCore9HTMLNames8embedTagE, "__ZN7WebCore22svgUserAgentStyleSheetE": __ZN7WebCore22svgUserAgentStyleSheetE, "__ZN7WebCore9HTMLNames7spanTagE": __ZN7WebCore9HTMLNames7spanTagE, "__ZN7WebCore25quirksUserAgentStyleSheetE": __ZN7WebCore25quirksUserAgentStyleSheetE, "__ZN7WebCore9HTMLNames7headTagE": __ZN7WebCore9HTMLNames7headTagE, "__ZN7WebCore9HTMLNames9objectTagE": __ZN7WebCore9HTMLNames9objectTagE, "__ZN7WebCore9HTMLNames7htmlTagE": __ZN7WebCore9HTMLNames7htmlTagE, "__ZN7WebCore9HTMLNames4aTagE": __ZN7WebCore9HTMLNames4aTagE, "__ZN7WebCore29fullscreenUserAgentStyleSheetE": __ZN7WebCore29fullscreenUserAgentStyleSheetE, "__ZN7WebCore26plugInsUserAgentStyleSheetE": __ZN7WebCore26plugInsUserAgentStyleSheetE, "__ZN7WebCore23htmlUserAgentStyleSheetE": __ZN7WebCore23htmlUserAgentStyleSheetE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore21CSSDefaultStyleSheets34ensureDefaultStyleSheetsForElementEPNS_7ElementERb","__ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore21CSSDefaultStyleSheets22loadSimpleDefaultStyleEv","__ZN7WebCore21CSSDefaultStyleSheets15viewSourceStyleEv","_memset","__ZN7WebCore7RuleSetD2Ev","_memcpy","__ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev","__ZN7WebCore14RuleFeatureSetD2Ev","__ZN7WebCore21CSSDefaultStyleSheets16initDefaultStyleEPNS_7ElementE","__ZN7WebCoreL12parseUASheetERKN3WTF6StringE","__ZN7WebCore21CSSDefaultStyleSheets20loadFullDefaultStyleEv"]

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
H_BASE = parentModule["_malloc"](560 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 560;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12HTMLDocumentC1EPNS_5FrameERKNS_3URLEhj;
var __ZN7WebCore12HTMLDocumentD1Ev;
/* memory initializer */ allocate([111,102,102,0,0,0,0,0,111,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,212,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,247,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore9HTMLNames12multipleAttrE=env.__ZN7WebCore9HTMLNames12multipleAttrE|0;
  var __ZN7WebCore9HTMLNames9rulesAttrE=env.__ZN7WebCore9HTMLNames9rulesAttrE|0;
  var __ZN7WebCore9HTMLNames9alinkAttrE=env.__ZN7WebCore9HTMLNames9alinkAttrE|0;
  var __ZN7WebCore9HTMLNames7revAttrE=env.__ZN7WebCore9HTMLNames7revAttrE|0;
  var __ZN7WebCore9HTMLNames9mediaAttrE=env.__ZN7WebCore9HTMLNames9mediaAttrE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames10acceptAttrE=env.__ZN7WebCore9HTMLNames10acceptAttrE|0;
  var __ZN7WebCore9HTMLNames14http_equivAttrE=env.__ZN7WebCore9HTMLNames14http_equivAttrE|0;
  var __ZN7WebCore9HTMLNames11framesetTagE=env.__ZN7WebCore9HTMLNames11framesetTagE|0;
  var __ZN7WebCore9HTMLNames11enctypeAttrE=env.__ZN7WebCore9HTMLNames11enctypeAttrE|0;
  var __ZN7WebCore9HTMLNames9colorAttrE=env.__ZN7WebCore9HTMLNames9colorAttrE|0;
  var __ZN7WebCore9HTMLNames11bgcolorAttrE=env.__ZN7WebCore9HTMLNames11bgcolorAttrE|0;
  var __ZN7WebCore9HTMLNames12disabledAttrE=env.__ZN7WebCore9HTMLNames12disabledAttrE|0;
  var __ZN7WebCore9HTMLNames10methodAttrE=env.__ZN7WebCore9HTMLNames10methodAttrE|0;
  var __ZN7WebCore9HTMLNames18accept_charsetAttrE=env.__ZN7WebCore9HTMLNames18accept_charsetAttrE|0;
  var __ZN7WebCore9HTMLNames9shapeAttrE=env.__ZN7WebCore9HTMLNames9shapeAttrE|0;
  var __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE=env.__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames12hreflangAttrE=env.__ZN7WebCore9HTMLNames12hreflangAttrE|0;
  var __ZN7WebCore9HTMLNames13scrollingAttrE=env.__ZN7WebCore9HTMLNames13scrollingAttrE|0;
  var __ZN7WebCore9HTMLNames10targetAttrE=env.__ZN7WebCore9HTMLNames10targetAttrE|0;
  var __ZN7WebCore9HTMLNames12selectedAttrE=env.__ZN7WebCore9HTMLNames12selectedAttrE|0;
  var __ZN7WebCore9HTMLNames7relAttrE=env.__ZN7WebCore9HTMLNames7relAttrE|0;
  var __ZN7WebCore9HTMLNames8axisAttrE=env.__ZN7WebCore9HTMLNames8axisAttrE|0;
  var __ZN7WebCore9HTMLNames9alignAttrE=env.__ZN7WebCore9HTMLNames9alignAttrE|0;
  var __ZN7WebCore9HTMLNames11charsetAttrE=env.__ZN7WebCore9HTMLNames11charsetAttrE|0;
  var __ZN7WebCore9HTMLNames9clearAttrE=env.__ZN7WebCore9HTMLNames9clearAttrE|0;
  var __ZN7WebCore9HTMLNames8textAttrE=env.__ZN7WebCore9HTMLNames8textAttrE|0;
  var __ZN7WebCore9HTMLNames8langAttrE=env.__ZN7WebCore9HTMLNames8langAttrE|0;
  var __ZN7WebCore9HTMLNames7dirAttrE=env.__ZN7WebCore9HTMLNames7dirAttrE|0;
  var __ZN7WebCore9HTMLNames10valignAttrE=env.__ZN7WebCore9HTMLNames10valignAttrE|0;
  var __ZN7WebCore9HTMLNames9deferAttrE=env.__ZN7WebCore9HTMLNames9deferAttrE|0;
  var __ZN7WebCore9HTMLNames10nohrefAttrE=env.__ZN7WebCore9HTMLNames10nohrefAttrE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames11declareAttrE=env.__ZN7WebCore9HTMLNames11declareAttrE|0;
  var __ZN7WebCore9HTMLNames9frameAttrE=env.__ZN7WebCore9HTMLNames9frameAttrE|0;
  var __ZN7WebCore9HTMLNames13valuetypeAttrE=env.__ZN7WebCore9HTMLNames13valuetypeAttrE|0;
  var __ZN3WTF9emptyAtomE=env.__ZN3WTF9emptyAtomE|0;
  var __ZN7WebCore9HTMLNames12languageAttrE=env.__ZN7WebCore9HTMLNames12languageAttrE|0;
  var __ZN7WebCore9HTMLNames10nowrapAttrE=env.__ZN7WebCore9HTMLNames10nowrapAttrE|0;
  var __ZN7WebCore9HTMLNames12readonlyAttrE=env.__ZN7WebCore9HTMLNames12readonlyAttrE|0;
  var __ZN7WebCore9HTMLNames8faceAttrE=env.__ZN7WebCore9HTMLNames8faceAttrE|0;
  var __ZN7WebCore9HTMLNames8typeAttrE=env.__ZN7WebCore9HTMLNames8typeAttrE|0;
  var __ZN7WebCore9HTMLNames12noresizeAttrE=env.__ZN7WebCore9HTMLNames12noresizeAttrE|0;
  var __ZN7WebCore9HTMLNames11compactAttrE=env.__ZN7WebCore9HTMLNames11compactAttrE|0;
  var __ZN7WebCore9HTMLNames11checkedAttrE=env.__ZN7WebCore9HTMLNames11checkedAttrE|0;
  var __ZN7WebCore9HTMLNames8linkAttrE=env.__ZN7WebCore9HTMLNames8linkAttrE|0;
  var __ZN7WebCore9HTMLNames9scopeAttrE=env.__ZN7WebCore9HTMLNames9scopeAttrE|0;
  var __ZN7WebCore9HTMLNames9vlinkAttrE=env.__ZN7WebCore9HTMLNames9vlinkAttrE|0;
  var __ZN7WebCore9HTMLNames12codetypeAttrE=env.__ZN7WebCore9HTMLNames12codetypeAttrE|0;
  var __ZN7WebCore9HTMLNames11noshadeAttrE=env.__ZN7WebCore9HTMLNames11noshadeAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore12HTMLDocumentE=(H_BASE+24)|0;
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
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
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
function __ZN7WebCore12HTMLDocument24isCaseSensitiveAttributeERKNS_13QualifiedNameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 1080 | 0;
 i3 = i2 | 0;
 i4 = i2 + 24 | 0;
 i5 = i2 + 48 | 0;
 i6 = i2 + 72 | 0;
 i7 = i2 + 96 | 0;
 i8 = i2 + 120 | 0;
 i9 = i2 + 144 | 0;
 i10 = i2 + 168 | 0;
 i11 = i2 + 192 | 0;
 i12 = i2 + 216 | 0;
 i13 = i2 + 240 | 0;
 i14 = i2 + 264 | 0;
 i15 = i2 + 288 | 0;
 i16 = i2 + 312 | 0;
 i17 = i2 + 336 | 0;
 i18 = i2 + 360 | 0;
 i19 = i2 + 384 | 0;
 i20 = i2 + 408 | 0;
 i21 = i2 + 432 | 0;
 i22 = i2 + 456 | 0;
 i23 = i2 + 480 | 0;
 i24 = i2 + 504 | 0;
 i25 = i2 + 528 | 0;
 i26 = i2 + 552 | 0;
 i27 = i2 + 576 | 0;
 i28 = i2 + 600 | 0;
 i29 = i2 + 624 | 0;
 i30 = i2 + 648 | 0;
 i31 = i2 + 672 | 0;
 i32 = i2 + 696 | 0;
 i33 = i2 + 720 | 0;
 i34 = i2 + 744 | 0;
 i35 = i2 + 768 | 0;
 i36 = i2 + 792 | 0;
 i37 = i2 + 816 | 0;
 i38 = i2 + 840 | 0;
 i39 = i2 + 864 | 0;
 i40 = i2 + 888 | 0;
 i41 = i2 + 912 | 0;
 i42 = i2 + 936 | 0;
 i43 = i2 + 960 | 0;
 i44 = i2 + 984 | 0;
 i45 = i2 + 1008 | 0;
 i46 = i2 + 1032 | 0;
 i47 = i2 + 1056 | 0;
 if (!(HEAP8[H_BASE + 552 | 0] | 0)) {
  i48 = __ZN3WTF10fastMallocEj(20) | 0;
  _memset(i48 | 0, 0, 20) | 0;
  HEAP32[i46 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames18accept_charsetAttrE >> 2] | 0) + 12 >> 2];
  i49 = i48;
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 1040 | 0, i49, i46, i46);
  HEAP32[i45 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10acceptAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 1016 | 0, i49, i45, i45);
  HEAP32[i44 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9alignAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 992 | 0, i49, i44, i44);
  HEAP32[i43 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9alinkAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 968 | 0, i49, i43, i43);
  HEAP32[i42 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8axisAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 944 | 0, i49, i42, i42);
  HEAP32[i41 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11bgcolorAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 920 | 0, i49, i41, i41);
  HEAP32[i40 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11charsetAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 896 | 0, i49, i40, i40);
  HEAP32[i39 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11checkedAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 872 | 0, i49, i39, i39);
  HEAP32[i38 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9clearAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 848 | 0, i49, i38, i38);
  HEAP32[i37 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames12codetypeAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 824 | 0, i49, i37, i37);
  HEAP32[i36 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9colorAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 800 | 0, i49, i36, i36);
  HEAP32[i35 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11compactAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 776 | 0, i49, i35, i35);
  HEAP32[i34 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11declareAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 752 | 0, i49, i34, i34);
  HEAP32[i33 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9deferAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 728 | 0, i49, i33, i33);
  HEAP32[i32 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7dirAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 704 | 0, i49, i32, i32);
  HEAP32[i31 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames12disabledAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 680 | 0, i49, i31, i31);
  HEAP32[i30 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11enctypeAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 656 | 0, i49, i30, i30);
  HEAP32[i29 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8faceAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 632 | 0, i49, i29, i29);
  HEAP32[i28 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9frameAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 608 | 0, i49, i28, i28);
  HEAP32[i27 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames12hreflangAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 584 | 0, i49, i27, i27);
  HEAP32[i26 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames14http_equivAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 560 | 0, i49, i26, i26);
  HEAP32[i25 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8langAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 536 | 0, i49, i25, i25);
  HEAP32[i24 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames12languageAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 512 | 0, i49, i24, i24);
  HEAP32[i23 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8linkAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 488 | 0, i49, i23, i23);
  HEAP32[i22 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9mediaAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 464 | 0, i49, i22, i22);
  HEAP32[i21 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10methodAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 440 | 0, i49, i21, i21);
  HEAP32[i20 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames12multipleAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 416 | 0, i49, i20, i20);
  HEAP32[i19 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10nohrefAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 392 | 0, i49, i19, i19);
  HEAP32[i18 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames12noresizeAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 368 | 0, i49, i18, i18);
  HEAP32[i17 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11noshadeAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 344 | 0, i49, i17, i17);
  HEAP32[i16 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10nowrapAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 320 | 0, i49, i16, i16);
  HEAP32[i15 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames12readonlyAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 296 | 0, i49, i15, i15);
  HEAP32[i14 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7relAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 272 | 0, i49, i14, i14);
  HEAP32[i13 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7revAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 248 | 0, i49, i13, i13);
  HEAP32[i12 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9rulesAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 224 | 0, i49, i12, i12);
  HEAP32[i11 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9scopeAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 200 | 0, i49, i11, i11);
  HEAP32[i10 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames13scrollingAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 176 | 0, i49, i10, i10);
  HEAP32[i9 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames12selectedAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 152 | 0, i49, i9, i9);
  HEAP32[i8 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9shapeAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 128 | 0, i49, i8, i8);
  HEAP32[i7 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10targetAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 104 | 0, i49, i7, i7);
  HEAP32[i6 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8textAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 80 | 0, i49, i6, i6);
  HEAP32[i5 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8typeAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 56 | 0, i49, i5, i5);
  HEAP32[i4 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames10valignAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 32 | 0, i49, i4, i4);
  HEAP32[i3 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames13valuetypeAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 8 | 0, i49, i3, i3);
  HEAP32[i47 >> 2] = HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9vlinkAttrE >> 2] | 0) + 12 >> 2];
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i2 + 1064 | 0, i49, i47, i47);
  HEAP32[H_BASE + 560 >> 2] = i48;
  HEAP8[H_BASE + 552 | 0] = 1;
 }
 i48 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i48 + 8 >> 2] | 0;
 if ((i1 | 0) != (HEAP32[__ZN3WTF8nullAtomE >> 2] | 0)) {
  i50 = 1;
  STACKTOP = i2;
  return i50 | 0;
 }
 if ((HEAP32[i48 + 16 >> 2] | 0) != (i1 | 0)) {
  i50 = 1;
  STACKTOP = i2;
  return i50 | 0;
 }
 i1 = HEAP32[H_BASE + 560 >> 2] | 0;
 i47 = HEAP32[i48 + 12 >> 2] | 0;
 i48 = i47;
 i49 = HEAP32[i1 >> 2] | 0;
 if ((i49 | 0) == 0) {
  i50 = 1;
  STACKTOP = i2;
  return i50 | 0;
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i47;
 i47 = i1 + ~(i1 << 15) | 0;
 i1 = (i47 >>> 10 ^ i47) * 9 & -1;
 i47 = i1 >>> 6 ^ i1;
 i1 = i47 + ~(i47 << 11) | 0;
 i47 = i1 >>> 16 ^ i1;
 i1 = i3 & i47;
 i4 = i49 + (i1 << 2) | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 L13 : do {
  if ((i5 | 0) == (i48 | 0)) {
   i51 = i4;
  } else {
   i6 = (i47 >>> 23) + ~i47 | 0;
   i7 = i6 << 12 ^ i6;
   i6 = i7 >>> 7 ^ i7;
   i7 = i6 << 2 ^ i6;
   i6 = i7 >>> 20 ^ i7 | 1;
   i7 = 0;
   i8 = i1;
   i9 = i5;
   while (1) {
    if ((i9 | 0) == 0) {
     i51 = 0;
     break L13;
    }
    i10 = (i7 | 0) == 0 ? i6 : i7;
    i11 = i10 + i8 & i3;
    i12 = i49 + (i11 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    if ((i13 | 0) == (i48 | 0)) {
     i51 = i12;
     break;
    } else {
     i7 = i10;
     i8 = i11;
     i9 = i13;
    }
   }
  }
 } while (0);
 i50 = (i51 | 0) == 0;
 STACKTOP = i2;
 return i50 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_v + 12;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_di + 6;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_di + 8;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_di + 4;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 82;
}
function __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E6expandEPS2_(i2, 0) | 0;
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
  i13 = __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E6expandEPS2_(i2, i25) | 0;
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
function __ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E6expandEPS2_(i1, i2) {
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
function __ZN7WebCore12HTMLDocumentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 44 >> 2] = H_BASE + 396;
 HEAP32[i1 + 88 >> 2] = H_BASE + 420;
 HEAP32[i1 + 2288 >> 2] = H_BASE + 524;
 i2 = HEAP32[i1 + 2312 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 2316 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 * 24 & -1) >> 2] | 0) != -1) {
      i5 = i2 + (i4 * 24 & -1) + 20 | 0;
      if ((HEAP32[i5 >> 2] | 0) != 0) {
       HEAP32[i5 >> 2] = 0;
      }
      i5 = i2 + (i4 * 24 & -1) + 12 | 0;
      i6 = HEAP32[i5 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      HEAP32[i5 >> 2] = 0;
      HEAP32[i2 + (i4 * 24 & -1) + 16 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i6);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 2292 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1 | 0;
  __ZN7WebCore8DocumentD2Ev(i7);
  return;
 }
 i3 = HEAP32[i1 + 2296 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i4 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i4 * 24 & -1) >> 2] | 0) != -1) {
     i6 = i2 + (i4 * 24 & -1) + 20 | 0;
     if ((HEAP32[i6 >> 2] | 0) != 0) {
      HEAP32[i6 >> 2] = 0;
     }
     i6 = i2 + (i4 * 24 & -1) + 12 | 0;
     i5 = HEAP32[i6 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     HEAP32[i6 >> 2] = 0;
     HEAP32[i2 + (i4 * 24 & -1) + 16 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i5);
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i7 = i1 | 0;
 __ZN7WebCore8DocumentD2Ev(i7);
 return;
}
function __ZN7WebCore12HTMLDocumentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 44 >> 2] = H_BASE + 396;
 HEAP32[i1 + 88 >> 2] = H_BASE + 420;
 HEAP32[i1 + 2288 >> 2] = H_BASE + 524;
 i2 = HEAP32[i1 + 2312 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 2316 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i4 * 24 & -1) >> 2] | 0) != -1) {
      i5 = i2 + (i4 * 24 & -1) + 20 | 0;
      if ((HEAP32[i5 >> 2] | 0) != 0) {
       HEAP32[i5 >> 2] = 0;
      }
      i5 = i2 + (i4 * 24 & -1) + 12 | 0;
      i6 = HEAP32[i5 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      HEAP32[i5 >> 2] = 0;
      HEAP32[i2 + (i4 * 24 & -1) + 16 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i6);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 2292 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1 | 0;
  __ZN7WebCore8DocumentD2Ev(i7);
  return;
 }
 i3 = HEAP32[i1 + 2296 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i4 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i4 * 24 & -1) >> 2] | 0) != -1) {
     i6 = i2 + (i4 * 24 & -1) + 20 | 0;
     if ((HEAP32[i6 >> 2] | 0) != 0) {
      HEAP32[i6 >> 2] = 0;
     }
     i6 = i2 + (i4 * 24 & -1) + 12 | 0;
     i5 = HEAP32[i6 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     HEAP32[i6 >> 2] = 0;
     HEAP32[i2 + (i4 * 24 & -1) + 16 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i5);
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i7 = i1 | 0;
 __ZN7WebCore8DocumentD2Ev(i7);
 return;
}
function __ZNK7WebCore12HTMLDocument10vlinkColorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = __ZN3WTF9emptyAtomE;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = __ZN3WTF9emptyAtomE;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i4 = i2 >>> 1 & 134217727;
  i5 = i1 + 20 | 0;
 } else {
  i2 = i1 + 24 | 0;
  i4 = HEAP32[i2 + 8 >> 2] | 0;
  i5 = HEAP32[i2 >> 2] | 0;
 }
 if ((i4 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 i2 = HEAP32[__ZN7WebCore9HTMLNames9vlinkAttrE >> 2] | 0;
 i1 = i2 + 12 | 0;
 i6 = i2 + 16 | 0;
 i7 = 0;
 while (1) {
  i8 = i5 + (i7 << 3) | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i9 | 0) == (i2 | 0)) {
   break;
  }
  if ((HEAP32[i9 + 12 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
    break;
   }
  }
  i9 = i7 + 1 | 0;
  if (i9 >>> 0 < i4 >>> 0) {
   i7 = i9;
  } else {
   i3 = __ZN3WTF8nullAtomE;
   i10 = 19;
   break;
  }
 }
 if ((i10 | 0) == 19) {
  return i3 | 0;
 }
 i3 = (i8 | 0) == 0 ? __ZN3WTF8nullAtomE : i5 + (i7 << 3) + 4 | 0;
 return i3 | 0;
}
function __ZNK7WebCore12HTMLDocument10alinkColorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = __ZN3WTF9emptyAtomE;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = __ZN3WTF9emptyAtomE;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i4 = i2 >>> 1 & 134217727;
  i5 = i1 + 20 | 0;
 } else {
  i2 = i1 + 24 | 0;
  i4 = HEAP32[i2 + 8 >> 2] | 0;
  i5 = HEAP32[i2 >> 2] | 0;
 }
 if ((i4 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 i2 = HEAP32[__ZN7WebCore9HTMLNames9alinkAttrE >> 2] | 0;
 i1 = i2 + 12 | 0;
 i6 = i2 + 16 | 0;
 i7 = 0;
 while (1) {
  i8 = i5 + (i7 << 3) | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i9 | 0) == (i2 | 0)) {
   break;
  }
  if ((HEAP32[i9 + 12 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
    break;
   }
  }
  i9 = i7 + 1 | 0;
  if (i9 >>> 0 < i4 >>> 0) {
   i7 = i9;
  } else {
   i3 = __ZN3WTF8nullAtomE;
   i10 = 17;
   break;
  }
 }
 if ((i10 | 0) == 17) {
  return i3 | 0;
 }
 i3 = (i8 | 0) == 0 ? __ZN3WTF8nullAtomE : i5 + (i7 << 3) + 4 | 0;
 return i3 | 0;
}
function __ZNK7WebCore12HTMLDocument7bgColorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = __ZN3WTF9emptyAtomE;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = __ZN3WTF9emptyAtomE;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i4 = i2 >>> 1 & 134217727;
  i5 = i1 + 20 | 0;
 } else {
  i2 = i1 + 24 | 0;
  i4 = HEAP32[i2 + 8 >> 2] | 0;
  i5 = HEAP32[i2 >> 2] | 0;
 }
 if ((i4 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 i2 = HEAP32[__ZN7WebCore9HTMLNames11bgcolorAttrE >> 2] | 0;
 i1 = i2 + 12 | 0;
 i6 = i2 + 16 | 0;
 i7 = 0;
 while (1) {
  i8 = i5 + (i7 << 3) | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i9 | 0) == (i2 | 0)) {
   break;
  }
  if ((HEAP32[i9 + 12 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
    break;
   }
  }
  i9 = i7 + 1 | 0;
  if (i9 >>> 0 < i4 >>> 0) {
   i7 = i9;
  } else {
   i3 = __ZN3WTF8nullAtomE;
   i10 = 19;
   break;
  }
 }
 if ((i10 | 0) == 19) {
  return i3 | 0;
 }
 i3 = (i8 | 0) == 0 ? __ZN3WTF8nullAtomE : i5 + (i7 << 3) + 4 | 0;
 return i3 | 0;
}
function __ZNK7WebCore12HTMLDocument9linkColorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = __ZN3WTF9emptyAtomE;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = __ZN3WTF9emptyAtomE;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i4 = i2 >>> 1 & 134217727;
  i5 = i1 + 20 | 0;
 } else {
  i2 = i1 + 24 | 0;
  i4 = HEAP32[i2 + 8 >> 2] | 0;
  i5 = HEAP32[i2 >> 2] | 0;
 }
 if ((i4 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 i2 = HEAP32[__ZN7WebCore9HTMLNames8linkAttrE >> 2] | 0;
 i1 = i2 + 12 | 0;
 i6 = i2 + 16 | 0;
 i7 = 0;
 while (1) {
  i8 = i5 + (i7 << 3) | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i9 | 0) == (i2 | 0)) {
   break;
  }
  if ((HEAP32[i9 + 12 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
    break;
   }
  }
  i9 = i7 + 1 | 0;
  if (i9 >>> 0 < i4 >>> 0) {
   i7 = i9;
  } else {
   i3 = __ZN3WTF8nullAtomE;
   i10 = 20;
   break;
  }
 }
 if ((i10 | 0) == 20) {
  return i3 | 0;
 }
 i3 = (i8 | 0) == 0 ? __ZN3WTF8nullAtomE : i5 + (i7 << 3) + 4 | 0;
 return i3 | 0;
}
function __ZNK7WebCore12HTMLDocument7fgColorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = __ZN3WTF9emptyAtomE;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i3 = __ZN3WTF9emptyAtomE;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i4 = i2 >>> 1 & 134217727;
  i5 = i1 + 20 | 0;
 } else {
  i2 = i1 + 24 | 0;
  i4 = HEAP32[i2 + 8 >> 2] | 0;
  i5 = HEAP32[i2 >> 2] | 0;
 }
 if ((i4 | 0) == 0) {
  i3 = __ZN3WTF8nullAtomE;
  return i3 | 0;
 }
 i2 = HEAP32[__ZN7WebCore9HTMLNames8textAttrE >> 2] | 0;
 i1 = i2 + 12 | 0;
 i6 = i2 + 16 | 0;
 i7 = 0;
 while (1) {
  i8 = i5 + (i7 << 3) | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i9 | 0) == (i2 | 0)) {
   break;
  }
  if ((HEAP32[i9 + 12 >> 2] | 0) == (HEAP32[i1 >> 2] | 0)) {
   if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
    break;
   }
  }
  i9 = i7 + 1 | 0;
  if (i9 >>> 0 < i4 >>> 0) {
   i7 = i9;
  } else {
   i3 = __ZN3WTF8nullAtomE;
   i10 = 17;
   break;
  }
 }
 if ((i10 | 0) == 17) {
  return i3 | 0;
 }
 i3 = (i8 | 0) == 0 ? __ZN3WTF8nullAtomE : i5 + (i7 << 3) + 4 | 0;
 return i3 | 0;
}
function __ZN7WebCore12HTMLDocument13setVlinkColorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 i1 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = 0;
   i7 = i2;
  } else {
   if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i6);
    i7 = i4 | 0;
    break;
   } else {
    i2 = i4 | 0;
    HEAP32[i2 >> 2] = i6;
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, __ZN7WebCore9HTMLNames9vlinkAttrE, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12HTMLDocument13setAlinkColorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 i1 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = 0;
   i7 = i2;
  } else {
   if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i6);
    i7 = i4 | 0;
    break;
   } else {
    i2 = i4 | 0;
    HEAP32[i2 >> 2] = i6;
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, __ZN7WebCore9HTMLNames9alinkAttrE, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12HTMLDocument10setBgColorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 i1 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = 0;
   i7 = i2;
  } else {
   if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i6);
    i7 = i4 | 0;
    break;
   } else {
    i2 = i4 | 0;
    HEAP32[i2 >> 2] = i6;
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, __ZN7WebCore9HTMLNames11bgcolorAttrE, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12HTMLDocument12setLinkColorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 i1 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = 0;
   i7 = i2;
  } else {
   if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i6);
    i7 = i4 | 0;
    break;
   } else {
    i2 = i4 | 0;
    HEAP32[i2 >> 2] = i6;
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, __ZN7WebCore9HTMLNames8linkAttrE, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12HTMLDocument10setFgColorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 i1 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = 0;
   i7 = i2;
  } else {
   if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i6);
    i7 = i4 | 0;
    break;
   } else {
    i2 = i4 | 0;
    HEAP32[i2 >> 2] = i6;
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, __ZN7WebCore9HTMLNames8textAttrE, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12HTMLDocument6setDirERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = 0;
   i7 = i2;
  } else {
   if ((HEAP32[i6 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i6);
    i7 = i4 | 0;
    break;
   } else {
    i2 = i4 | 0;
    HEAP32[i2 >> 2] = i6;
    i8 = i6 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, __ZN7WebCore9HTMLNames7dirAttrE, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i5 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore12HTMLDocument13createElementERKN3WTF12AtomicStringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 if (!(__ZN7WebCore8Document11isValidNameERKN3WTF6StringE(i3 | 0) | 0)) {
  HEAP32[i4 >> 2] = 5;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 __ZNK3WTF12AtomicString5lowerEv(i8, i3);
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i7, __ZN3WTF8nullAtomE, i8, __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE);
 __ZN7WebCore18HTMLElementFactory13createElementERKNS_13QualifiedNameERNS_8DocumentEPNS_15HTMLFormElementEb(i6, i7, i2 | 0, 0, 0);
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 >> 2] = i6;
 __ZN7WebCore13QualifiedNameD1Ev(i7);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i7 | 0;
 i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i7);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i8 >> 2] = i6;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore12HTMLDocument28cloneDocumentWithoutChildrenEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = __ZN3WTF10fastMallocEj(2336) | 0;
 i4 = i3;
 __ZN7WebCore8DocumentC2EPNS_5FrameERKNS_3URLEjj(i4, 0, i2 + 356 | 0, 1, 0);
 HEAP32[i3 >> 2] = H_BASE + 32;
 HEAP32[i3 + 44 >> 2] = H_BASE + 396;
 HEAP32[i3 + 88 >> 2] = H_BASE + 420;
 HEAP32[i3 + 2288 >> 2] = H_BASE + 524;
 i2 = i3 + 1296 | 0;
 _memset(i3 + 2292 | 0, 0, 40) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i5 = i1 | 0;
  HEAP32[i5 >> 2] = i4;
  return;
 }
 i2 = i3 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i5 = i1 | 0;
  HEAP32[i5 >> 2] = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i6;
  i5 = i1 | 0;
  HEAP32[i5 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore12HTMLDocument20addDocumentNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore18DocumentOrderedMap3addERKN3WTF16AtomicStringImplERNS_7ElementERKNS_9TreeScopeE(i1 + 2292 | 0, i2, i3, i1 + 44 | 0);
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 __ZN7WebCore17addImpurePropertyERKN3WTF12AtomicStringE(i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore12HTMLDocumentC2EPNS_5FrameERKNS_3URLEhj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore8DocumentC2EPNS_5FrameERKNS_3URLEjj(i1 | 0, i2, i3, i4 & 255 | 1, i5);
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 44 >> 2] = H_BASE + 396;
 HEAP32[i1 + 88 >> 2] = H_BASE + 420;
 HEAP32[i1 + 2288 >> 2] = H_BASE + 524;
 i5 = i1 + 1296 | 0;
 _memset(i1 + 2292 | 0, 0, 40) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore12HTMLDocumentC1EPNS_5FrameERKNS_3URLEhj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore8DocumentC2EPNS_5FrameERKNS_3URLEjj(i1 | 0, i2, i3, i4 & 255 | 1, i5);
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 44 >> 2] = H_BASE + 396;
 HEAP32[i1 + 88 >> 2] = H_BASE + 420;
 HEAP32[i1 + 2288 >> 2] = H_BASE + 524;
 i5 = i1 + 1296 | 0;
 _memset(i1 + 2292 | 0, 0, 40) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore12HTMLDocument8hasFocusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __ZNK7WebCore8Document4pageEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP8[i4 + 8 | 0] & 1) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if (__ZNK7WebCore9FrameTree14isDescendantOfEPKNS_5FrameE(i2 + 40 | 0, HEAP32[i1 + 332 >> 2] | 0) | 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 0;
 return i3 | 0;
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
function __ZN7WebCore12HTMLDocument6heightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i4);
 i1 = __ZNK7WebCore8Document4viewEv(i4) | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 63](i3, i1 | 0);
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore12HTMLDocument5widthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i4);
 i1 = __ZNK7WebCore8Document4viewEv(i4) | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 63](i3, i1 | 0);
 i5 = HEAP32[i3 >> 2] | 0;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore12HTMLDocument13setDesignModeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2 | 0;
 if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 16 | 0) | 0) {
  i4 = 1;
 } else {
  i2 = __ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 8 | 0) | 0;
  i4 = i2 ? 0 : 2;
 }
 __ZN7WebCore8Document13setDesignModeENS0_13InheritedBoolE(i1 | 0, i4);
 return;
}
function __ZN7WebCore12HTMLDocument3dirEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZNK7WebCore8Document4bodyEv(i2 | 0) | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i2 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i3 | 0, __ZN7WebCore9HTMLNames7dirAttrE) | 0) >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
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
function __ZN7WebCore12HTMLDocument13activeElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 20 | 0;
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0);
 i3 = __ZN7WebCore9TreeScope14focusedElementEv(HEAP32[i2 >> 2] | 0) | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 return i4 | 0;
}
function viiiii___ZThn88_N7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZThn88_N7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZThn88_N7WebCore8Document27derefScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 2288 + 2200 | 0;
 i1 = i2 + 8 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 16 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2);
 return;
}
function __ZNK7WebCore12HTMLDocument10isFrameSetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore8Document4bodyEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 >> 2] | 0);
 return i3 | 0;
}
function viiiii___ZN7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore8Document27derefScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
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
function v___ZThn88_N7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper() {
 __ZThn88_N7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm();
}
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function v___ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper() {
 __ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm();
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore12HTMLDocument18addWindowNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18DocumentOrderedMap3addERKN3WTF16AtomicStringImplERNS_7ElementERKNS_9TreeScopeE(i1 + 2312 | 0, i2, i3, i1 + 44 | 0);
 return;
}
function __ZN7WebCore12HTMLDocument23removeDocumentNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18DocumentOrderedMap6removeERKN3WTF16AtomicStringImplERNS_7ElementE(i1 + 2292 | 0, i2, i3);
 return;
}
function vii___ZThn88_N7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn88_N7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function __ZN7WebCore12HTMLDocument21removeWindowNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore18DocumentOrderedMap6removeERKN3WTF16AtomicStringImplERNS_7ElementE(i1 + 2312 | 0, i2, i3);
 return;
}
function vii___ZThn88_N7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn88_N7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function v___ZThn88_N7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE__wrapper() {
 __ZThn88_N7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE();
}
function v___ZN7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE__wrapper() {
 __ZN7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE();
}
function __ZN7WebCore12HTMLDocument12createParserEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(476) | 0;
 __ZN7WebCore18HTMLDocumentParserC1ERNS_12HTMLDocumentE(i3, i2);
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZNK7WebCore12HTMLDocument10designModeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZNK7WebCore8Document12inDesignModeEv(i2 | 0) | 0;
 __ZN3WTF6StringC1EPKc(i1, i3 ? H_BASE + 16 | 0 : H_BASE + 8 | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore8Document15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function viii___ZThn88_NK7WebCore8Document11completeURLERKN3WTF6StringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn88_NK7WebCore8Document11completeURLERKN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function v___ZThn88_N7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper() {
 __ZThn88_N7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE();
}
function viii___ZNK7WebCore8Document11completeURLERKN3WTF6StringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore8Document16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore8Document16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore8Document39scriptedAnimationControllerSetThrottledEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document39scriptedAnimationControllerSetThrottledEb(i1 | 0, i2 | 0);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viii___ZThn88_NK7WebCore8Document9userAgentERKNS_3URLE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn88_NK7WebCore8Document9userAgentERKNS_3URLE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function v___ZN7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper() {
 __ZN7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE();
}
function iii___ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZNK7WebCore8Document9userAgentERKNS_3URLE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore8Document9userAgentERKNS_3URLE(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZThn88_N7WebCore8Document11disableEvalERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn88_N7WebCore8Document11disableEvalERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore4Node22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return ((i2 | 0) == 0 ? 0 : i2 + 88 | 0) | 0;
}
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function iii___ZN7WebCore4Node13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore4Node11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function __ZThn88_N7WebCore8Document25refScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2288 + 2208 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vii___ZN7WebCore8Document11disableEvalERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document11disableEvalERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function __ZThn88_N7WebCore12HTMLDocumentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2336 + 2248 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn44_N7WebCore12HTMLDocumentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2336 + 2292 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn2288_N7WebCore12HTMLDocumentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2336 + 48 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore8Document9cloneNodeEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore8Document9cloneNodeEb(i1 | 0, i2 | 0, i3 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function di___ZThn88_NK7WebCore8Document22timerAlignmentIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZThn88_NK7WebCore8Document22timerAlignmentIntervalEv(i1 | 0);
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore8Document25refScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function di___ZThn88_NK7WebCore8Document20minimumTimerIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZThn88_NK7WebCore8Document20minimumTimerIntervalEv(i1 | 0);
}
function ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
}
function ii___ZThn88_NK7WebCore8Document15isContextThreadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn88_NK7WebCore8Document15isContextThreadEv(i1 | 0) | 0;
}
function ii___ZThn88_N7WebCore8Document16errorEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn88_N7WebCore8Document16errorEventTargetEv(i1 | 0) | 0;
}
function di___ZNK7WebCore8Document22timerAlignmentIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore8Document22timerAlignmentIntervalEv(i1 | 0);
}
function vi___ZThn88_N7WebCore8Document20stopActiveDOMObjectsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn88_N7WebCore8Document20stopActiveDOMObjectsEv(i1 | 0);
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function di___ZNK7WebCore8Document20minimumTimerIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore8Document20minimumTimerIntervalEv(i1 | 0);
}
function __ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore9TreeScope17applyAuthorStylesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9TreeScope17applyAuthorStylesEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function vi___ZN7WebCore8Document23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document23removeAllEventListenersEv(i1 | 0);
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vii___ZNK7WebCore8Document8nodeNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore8Document8nodeNameEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore8Document15isContextThreadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore8Document15isContextThreadEv(i1 | 0) | 0;
}
function ii___ZN7WebCore8Document16errorEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore8Document16errorEventTargetEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore8Document7baseURIEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore8Document7baseURIEv(i1 | 0, i2 | 0);
}
function ii___ZThn88_NK7WebCore8Document9topOriginEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn88_NK7WebCore8Document9topOriginEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18offsetInCharactersEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18maxCharacterOffsetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function vi___ZN7WebCore8Document20stopActiveDOMObjectsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document20stopActiveDOMObjectsEv(i1 | 0);
}
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function vi___ZThn44_N7WebCore8Document12dropChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn44_N7WebCore8Document12dropChildrenEv(i1 | 0);
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore12HTMLDocumentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZNK7WebCore8Document9topOriginEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore8Document9topOriginEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node12namespaceURIEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node12namespaceURIEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
}
function ii___ZNK7WebCore8Document8nodeTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore8Document8nodeTypeEv(i1 | 0) | 0;
}
function __ZThn88_N7WebCore12HTMLDocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i1 - 2336 + 2248 | 0);
 return;
}
function __ZThn44_N7WebCore12HTMLDocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i1 - 2336 + 2292 | 0);
 return;
}
function __ZThn2288_N7WebCore12HTMLDocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i1 - 2336 + 48 | 0);
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function vi___ZN7WebCore8Document12dropChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document12dropChildrenEv(i1 | 0);
}
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function __ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function ii___ZNK7WebCore4Node9localNameEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node9localNameEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore4Node6prefixEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node6prefixEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 127](i2 | 0) | 0;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 15](i2 | 0);
}
function __ZThn88_NK7WebCore8Document10eventQueueEv(i1) {
 i1 = i1 | 0;
 return i1 - 2288 + 3788 | 0;
}
function __ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv(i1) {
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
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZThn88_NK7WebCore8Document22isJSExecutionForbiddenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZThn88_NK7WebCore8Document3urlEv(i1) {
 i1 = i1 | 0;
 return i1 - 2288 + 2556 | 0;
}
function __ZNK7WebCore8Document23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore8Document22isJSExecutionForbiddenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore8Document10eventQueueEv(i1) {
 i1 = i1 | 0;
 return i1 + 1588 | 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZThn88_NK7WebCore8Document10isDocumentEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12HTMLDocument13releaseEventsEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12HTMLDocument13captureEventsEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore4Node21finishParsingChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore8Document3urlEv(i1) {
 i1 = i1 | 0;
 return i1 + 356 | 0;
}
function __ZN7WebCore4Node20beginParsingChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isPluginElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isMediaControlsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isAttributeNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore8Document10isDocumentEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node11sheetLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore12HTMLDocument5clearEv(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
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
  var FUNCTION_TABLE_viiiii = [b0,b0,viiiii___ZThn88_N7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper,b0,viiiii___ZN7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper,b0,__ZN7WebCore12HTMLDocumentC2EPNS_5FrameERKNS_3URLEhj,b0];
  var FUNCTION_TABLE_di = [b1,b1,di___ZNK7WebCore8Document20minimumTimerIntervalEv__wrapper,b1,di___ZThn88_NK7WebCore8Document22timerAlignmentIntervalEv__wrapper,b1,di___ZNK7WebCore8Document22timerAlignmentIntervalEv__wrapper,b1,di___ZThn88_NK7WebCore8Document20minimumTimerIntervalEv__wrapper,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b2,__ZThn88_N7WebCore12HTMLDocumentD0Ev,b2,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b2,__ZThn88_N7WebCore12HTMLDocumentD1Ev,b2,__ZThn88_N7WebCore8Document25refScriptExecutionContextEv,b2,__ZN7WebCore8Document27derefScriptExecutionContextEv,b2,__ZThn2288_N7WebCore12HTMLDocumentD0Ev,b2,vi___ZN7WebCore8Document12dropChildrenEv__wrapper,b2,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b2,__ZN7WebCore12HTMLDocumentD2Ev,b2,vi___ZN7WebCore8Document23removeAllEventListenersEv__wrapper,b2,__ZThn88_N7WebCore8Document27derefScriptExecutionContextEv,b2,__ZN7WebCore4Node20beginParsingChildrenEv,b2,__ZN7WebCore8Document25refScriptExecutionContextEv
  ,b2,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b2,vi___ZN7WebCore8Document20stopActiveDOMObjectsEv__wrapper,b2,vi___ZThn44_N7WebCore8Document12dropChildrenEv__wrapper,b2,__ZThn44_N7WebCore12HTMLDocumentD1Ev,b2,__ZN7WebCore4Node21finishParsingChildrenEv,b2,__ZThn44_N7WebCore12HTMLDocumentD0Ev,b2,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b2,vi___ZThn88_N7WebCore8Document20stopActiveDOMObjectsEv__wrapper,b2,__ZN7WebCore12HTMLDocumentD0Ev,b2,__ZThn2288_N7WebCore12HTMLDocumentD1Ev,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZThn88_N7WebCore8Document11disableEvalERKN3WTF6StringE__wrapper,b3,__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE,b3,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b3,vii___ZN7WebCore8Document15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b3,vii___ZThn88_N7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b3,vii___ZN7WebCore4Node11removedFromERNS_13ContainerNodeE__wrapper,b3,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b3,__ZNK7WebCore12HTMLDocument28cloneDocumentWithoutChildrenEv,b3,vii___ZNK7WebCore8Document7baseURIEv__wrapper,b3,vii___ZThn88_N7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b3,vii___ZN7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b3,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b3,vii___ZN7WebCore8Document11disableEvalERKN3WTF6StringE__wrapper,b3,vii___ZN7WebCore8Document39scriptedAnimationControllerSetThrottledEb__wrapper
  ,b3,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b3,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b3,__ZN7WebCore12HTMLDocument12createParserEv,b3,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b3,vii___ZNK7WebCore8Document8nodeNameEv__wrapper,b3,vii___ZN7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b3,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b3,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b3,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,ii___ZThn88_N7WebCore8Document16errorEventTargetEv__wrapper,b4,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b4,ii___ZN7WebCore8Document16errorEventTargetEv__wrapper,b4,ii___ZThn88_NK7WebCore8Document9topOriginEv__wrapper,b4,__ZNK7WebCore8Document3urlEv,b4,__ZNK7WebCore4Node19isFrameOwnerElementEv,b4,__ZNK7WebCore12HTMLDocument10isFrameSetEv,b4,__ZNK7WebCore4Node20isInsertionPointNodeEv,b4,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b4,ii___ZNK7WebCore4Node12namespaceURIEv__wrapper,b4,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b4,__ZNK7WebCore4Node22scriptExecutionContextEv,b4,__ZNK7WebCore8Document10isDocumentEv,b4,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper
  ,b4,__ZThn88_NK7WebCore8Document10eventQueueEv,b4,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b4,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b4,ii___ZThn88_NK7WebCore8Document15isContextThreadEv__wrapper,b4,__ZThn88_NK7WebCore8Document3urlEv,b4,ii___ZNK7WebCore4Node6prefixEv__wrapper,b4,__ZNK7WebCore4Node16nonRendererStyleEv,b4,__ZNK7WebCore4Node15isPluginElementEv,b4,ii___ZNK7WebCore8Document9topOriginEv__wrapper,b4,__ZNK7WebCore8Document22isJSExecutionForbiddenEv,b4,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b4,ii___ZNK7WebCore8Document8nodeTypeEv__wrapper,b4,__ZNK7WebCore8Document10eventQueueEv,b4,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b4,ii___ZNK7WebCore4Node9localNameEv__wrapper
  ,b4,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b4,__ZNK7WebCore8Document23canContainRangeEndPointEv,b4,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b4,__ZN7WebCore4Node11sheetLoadedEv,b4,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b4,__ZNK7WebCore4Node14customPseudoIdEv,b4,__ZNK7WebCore4Node21isMediaControlElementEv,b4,__ZThn88_NK7WebCore8Document22isJSExecutionForbiddenEv,b4,__ZNK7WebCore4Node19isCharacterDataNodeEv,b4,ii___ZN7WebCore4Node6toNodeEv__wrapper,b4,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b4,__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv,b4,ii___ZNK7WebCore8Document15isContextThreadEv__wrapper,b4,ii___ZNK7WebCore9TreeScope17applyAuthorStylesEv__wrapper,b4,__ZNK7WebCore4Node15isMediaControlsEv
  ,b4,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b4,__ZThn88_NK7WebCore8Document10isDocumentEv,b4,__ZNK7WebCore4Node15isAttributeNodeEv,b4,__ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,viii___ZThn88_NK7WebCore8Document11completeURLERKN3WTF6StringE__wrapper,b5,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b5,viii___ZN7WebCore8Document9cloneNodeEb__wrapper,b5,viii___ZThn88_NK7WebCore8Document9userAgentERKNS_3URLE__wrapper,b5,viii___ZNK7WebCore8Document9userAgentERKNS_3URLE__wrapper,b5,viii___ZNK7WebCore8Document11completeURLERKN3WTF6StringE__wrapper,b5,viii___ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi__wrapper,b5];
  var FUNCTION_TABLE_v = [b6,b6,v___ZThn88_N7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE__wrapper,b6,v___ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper,b6,v___ZN7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper,b6,v___ZThn88_N7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper,b6,v___ZThn88_N7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper,b6,v___ZN7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE__wrapper,b6,b6,b6];
  var FUNCTION_TABLE_iiiii = [b7,b7,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b7,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,iii___ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE__wrapper,b8,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b8,__ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE,b8,iii___ZNK7WebCore8Document16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b8,iii___ZN7WebCore4Node13computedStyleENS_8PseudoIdE__wrapper,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,__ZN7WebCore12HTMLDocument13createElementERKN3WTF12AtomicStringERi,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames12multipleAttrE": __ZN7WebCore9HTMLNames12multipleAttrE, "__ZN7WebCore9HTMLNames9rulesAttrE": __ZN7WebCore9HTMLNames9rulesAttrE, "__ZN7WebCore9HTMLNames9alinkAttrE": __ZN7WebCore9HTMLNames9alinkAttrE, "__ZN7WebCore9HTMLNames7revAttrE": __ZN7WebCore9HTMLNames7revAttrE, "__ZN7WebCore9HTMLNames9mediaAttrE": __ZN7WebCore9HTMLNames9mediaAttrE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames10acceptAttrE": __ZN7WebCore9HTMLNames10acceptAttrE, "__ZN7WebCore9HTMLNames14http_equivAttrE": __ZN7WebCore9HTMLNames14http_equivAttrE, "__ZN7WebCore9HTMLNames11framesetTagE": __ZN7WebCore9HTMLNames11framesetTagE, "__ZN7WebCore9HTMLNames11enctypeAttrE": __ZN7WebCore9HTMLNames11enctypeAttrE, "__ZN7WebCore9HTMLNames9colorAttrE": __ZN7WebCore9HTMLNames9colorAttrE, "__ZN7WebCore9HTMLNames11bgcolorAttrE": __ZN7WebCore9HTMLNames11bgcolorAttrE, "__ZN7WebCore9HTMLNames12disabledAttrE": __ZN7WebCore9HTMLNames12disabledAttrE, "__ZN7WebCore9HTMLNames10methodAttrE": __ZN7WebCore9HTMLNames10methodAttrE, "__ZN7WebCore9HTMLNames18accept_charsetAttrE": __ZN7WebCore9HTMLNames18accept_charsetAttrE, "__ZN7WebCore9HTMLNames9shapeAttrE": __ZN7WebCore9HTMLNames9shapeAttrE, "__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE": __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE, "__ZN7WebCore9HTMLNames12hreflangAttrE": __ZN7WebCore9HTMLNames12hreflangAttrE, "__ZN7WebCore9HTMLNames13scrollingAttrE": __ZN7WebCore9HTMLNames13scrollingAttrE, "__ZN7WebCore9HTMLNames10targetAttrE": __ZN7WebCore9HTMLNames10targetAttrE, "__ZN7WebCore9HTMLNames12selectedAttrE": __ZN7WebCore9HTMLNames12selectedAttrE, "__ZN7WebCore9HTMLNames7relAttrE": __ZN7WebCore9HTMLNames7relAttrE, "__ZN7WebCore9HTMLNames8axisAttrE": __ZN7WebCore9HTMLNames8axisAttrE, "__ZN7WebCore9HTMLNames9alignAttrE": __ZN7WebCore9HTMLNames9alignAttrE, "__ZN7WebCore9HTMLNames11charsetAttrE": __ZN7WebCore9HTMLNames11charsetAttrE, "__ZN7WebCore9HTMLNames9clearAttrE": __ZN7WebCore9HTMLNames9clearAttrE, "__ZN7WebCore9HTMLNames8textAttrE": __ZN7WebCore9HTMLNames8textAttrE, "__ZN7WebCore9HTMLNames8langAttrE": __ZN7WebCore9HTMLNames8langAttrE, "__ZN7WebCore9HTMLNames7dirAttrE": __ZN7WebCore9HTMLNames7dirAttrE, "__ZN7WebCore9HTMLNames10valignAttrE": __ZN7WebCore9HTMLNames10valignAttrE, "__ZN7WebCore9HTMLNames9deferAttrE": __ZN7WebCore9HTMLNames9deferAttrE, "__ZN7WebCore9HTMLNames10nohrefAttrE": __ZN7WebCore9HTMLNames10nohrefAttrE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames11declareAttrE": __ZN7WebCore9HTMLNames11declareAttrE, "__ZN7WebCore9HTMLNames9frameAttrE": __ZN7WebCore9HTMLNames9frameAttrE, "__ZN7WebCore9HTMLNames13valuetypeAttrE": __ZN7WebCore9HTMLNames13valuetypeAttrE, "__ZN3WTF9emptyAtomE": __ZN3WTF9emptyAtomE, "__ZN7WebCore9HTMLNames12languageAttrE": __ZN7WebCore9HTMLNames12languageAttrE, "__ZN7WebCore9HTMLNames10nowrapAttrE": __ZN7WebCore9HTMLNames10nowrapAttrE, "__ZN7WebCore9HTMLNames12readonlyAttrE": __ZN7WebCore9HTMLNames12readonlyAttrE, "__ZN7WebCore9HTMLNames8faceAttrE": __ZN7WebCore9HTMLNames8faceAttrE, "__ZN7WebCore9HTMLNames8typeAttrE": __ZN7WebCore9HTMLNames8typeAttrE, "__ZN7WebCore9HTMLNames12noresizeAttrE": __ZN7WebCore9HTMLNames12noresizeAttrE, "__ZN7WebCore9HTMLNames11compactAttrE": __ZN7WebCore9HTMLNames11compactAttrE, "__ZN7WebCore9HTMLNames11checkedAttrE": __ZN7WebCore9HTMLNames11checkedAttrE, "__ZN7WebCore9HTMLNames8linkAttrE": __ZN7WebCore9HTMLNames8linkAttrE, "__ZN7WebCore9HTMLNames9scopeAttrE": __ZN7WebCore9HTMLNames9scopeAttrE, "__ZN7WebCore9HTMLNames9vlinkAttrE": __ZN7WebCore9HTMLNames9vlinkAttrE, "__ZN7WebCore9HTMLNames12codetypeAttrE": __ZN7WebCore9HTMLNames12codetypeAttrE, "__ZN7WebCore9HTMLNames11noshadeAttrE": __ZN7WebCore9HTMLNames11noshadeAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZThn88_NK7WebCore8Document3urlEv","__ZN7WebCore12HTMLDocument24isCaseSensitiveAttributeERKNS_13QualifiedNameE","__ZN7WebCore12HTMLDocument6heightEv","__ZNK7WebCore8Document23canContainRangeEndPointEv","__ZThn44_N7WebCore12HTMLDocumentD1Ev","__ZNK7WebCore12HTMLDocument10alinkColorEv","__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv","__ZNK7WebCore12HTMLDocument10designModeEv","__ZN7WebCore12HTMLDocument12createParserEv","__ZNK7WebCore4Node14customPseudoIdEv","__ZN7WebCore12HTMLDocument13setVlinkColorERKN3WTF6StringE","__ZNK7WebCore12HTMLDocument10vlinkColorEv","__ZN7WebCore12HTMLDocument13activeElementEv","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore12HTMLDocument7bgColorEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZN7WebCore12HTMLDocument5widthEv","__ZNK7WebCore4Node15isPluginElementEv","__ZNK7WebCore8Document3urlEv","__ZN7WebCore12HTMLDocument12setLinkColorERKN3WTF6StringE","__ZN7WebCore4Node20beginParsingChildrenEv","__ZN7WebCore8Document27derefScriptExecutionContextEv","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZThn88_NK7WebCore8Document22isJSExecutionForbiddenEv","_memset","__ZN7WebCore12HTMLDocumentD0Ev","__ZN7WebCore12HTMLDocument18addWindowNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE","__ZN7WebCore12HTMLDocumentD2Ev","__ZN7WebCore12HTMLDocument3dirEv","__ZNK7WebCore8Document22isJSExecutionForbiddenEv","_strlen","__ZNK7WebCore12HTMLDocument7fgColorEv","__ZNK7WebCore8Document10eventQueueEv","__ZN7WebCore12HTMLDocument21removeWindowNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE","__ZN7WebCore12HTMLDocument20addDocumentNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE","__ZThn44_N7WebCore12HTMLDocumentD0Ev","__ZThn88_N7WebCore8Document27derefScriptExecutionContextEv","__ZN7WebCore12HTMLDocument13releaseEventsEv","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE","__ZN7WebCore12HTMLDocument10setBgColorERKN3WTF6StringE","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZN7WebCore12HTMLDocument13createElementERKN3WTF12AtomicStringERi","__ZN7WebCore12HTMLDocument23removeDocumentNamedItemERKN3WTF16AtomicStringImplERNS_7ElementE","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZThn2288_N7WebCore12HTMLDocumentD1Ev","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZNK7WebCore12HTMLDocument28cloneDocumentWithoutChildrenEv","__ZN7WebCore12HTMLDocument13setDesignModeERKN3WTF6StringE","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZN7WebCore12HTMLDocument5clearEv","__ZThn88_N7WebCore12HTMLDocumentD1Ev","__ZN7WebCore4Node21finishParsingChildrenEv","__ZN7WebCore12HTMLDocument6setDirERKN3WTF6StringE","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore12HTMLDocument10setFgColorERKN3WTF6StringE","__ZThn88_NK7WebCore8Document10eventQueueEv","__ZNK7WebCore12HTMLDocument10isFrameSetEv","__ZN7WebCore8Document25refScriptExecutionContextEv","__ZThn88_N7WebCore12HTMLDocumentD0Ev","__ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E6expandEPS2_","__ZNK7WebCore12HTMLDocument9linkColorEv","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore12HTMLDocumentC2EPNS_5FrameERKNS_3URLEhj","__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE","__ZThn88_NK7WebCore8Document10isDocumentEv","__ZN7WebCore12HTMLDocument8hasFocusEv","__ZN7WebCore12HTMLDocument13captureEventsEv","_memcpy","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZThn88_N7WebCore8Document25refScriptExecutionContextEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZNK7WebCore8Document10isDocumentEv","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZN7WebCore12HTMLDocument13setAlinkColorERKN3WTF6StringE","__ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv","__ZThn2288_N7WebCore12HTMLDocumentD0Ev","__ZN3WTF9HashTableIPNS_16AtomicStringImplES2_NS_17IdentityExtractorENS_7PtrHashIS2_EENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_"]

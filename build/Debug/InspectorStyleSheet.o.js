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
H_BASE = parentModule["_malloc"](1208 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1208;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN16ParsedStyleSheetC1Ev;
var __ZN7WebCore14InspectorStyleC1ERKNS_14InspectorCSSIdEN3WTF10PassRefPtrINS_19CSSStyleDeclarationEEEPNS_19InspectorStyleSheetE;
var __ZN7WebCore14InspectorStyleD1Ev;
var __ZN7WebCore19InspectorStyleSheetC1EPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_13CSSStyleSheetEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumES6_PNS0_8ListenerE;
var __ZN7WebCore19InspectorStyleSheetD1Ev;
var __ZN7WebCore33InspectorStyleSheetForInlineStyleC1EPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_7ElementEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumEPNS_19InspectorStyleSheet8ListenerE;
/* memory initializer */ allocate([10,0,0,0,0,0,0,0,32,32,32,32,0,0,0,0,105,110,105,116,105,97,108,0,105,110,97,99,116,105,118,101,0,0,0,0,0,0,0,0,105,109,112,111,114,116,97,110,116,0,0,0,0,0,0,0,115,116,121,108,101,73,100,0,115,116,97,114,116,76,105,110,101,0,0,0,0,0,0,0,115,116,97,114,116,67,111,108,117,109,110,0,0,0,0,0,101,110,100,76,105,110,101,0,58,32,110,111,110,101,0,0,101,110,100,67,111,108,117,109,110,0,0,0,0,0,0,0,112,97,114,115,101,100,79,107,0,0,0,0,0,0,0,0,112,114,105,111,114,105,116,121,0,0,0,0,0,0,0,0,105,109,112,108,105,99,105,116,0,0,0,0,0,0,0,0,115,116,97,116,117,115,0,0,47,92,42,91,94,93,42,63,92,42,47,0,0,0,0,0,114,97,110,103,101,0,0,0,114,117,108,101,73,100,0,0,115,111,117,114,99,101,0,0,109,101,100,105,97,0,0,0,32,0,0,0,0,0,0,0,99,115,115,84,101,120,116,0,110,97,109,101,0,0,0,0,118,97,108,117,101,0,0,0,99,115,115,80,114,111,112,101,114,116,105,101,115,0,0,0,115,104,111,114,116,104,97,110,100,69,110,116,114,105,101,115,0,0,0,0,0,0,0,0,114,117,108,101,115,0,0,0,100,105,115,97,98,108,101,100,0,0,0,0,0,0,0,0,115,111,117,114,99,101,85,82,76,0,0,0,0,0,0,0,116,105,116,108,101,0,0,0,102,114,97,109,101,73,100,0,45,119,101,98,107,105,116,45,98,111,103,117,122,45,112,114,111,112,101,114,116,101,101,0,115,101,108,101,99,116,111,114,115,0,0,0,0,0,0,0,116,101,120,116,0,0,0,0,115,101,108,101,99,116,111,114,76,105,115,116,0,0,0,0,115,111,117,114,99,101,76,105,110,101,0,0,0,0,0,0,111,114,105,103,105,110,0,0,115,116,121,108,101,83,104,101,101,116,73,100,0,0,0,0,111,114,100,105,110,97,108,0,115,116,121,108,101,0,0,0,32,123,125,0,0,0,0,0,104,101,105,103,104,116,0,0,119,105,100,116,104,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZN9Inspector11TypeBuilder3CSS11CSSProperty8PriorityE=env.__ZN9Inspector11TypeBuilder3CSS11CSSProperty8PriorityE|0;
  var __ZN7WebCore8SVGNames8styleTagE=env.__ZN7WebCore8SVGNames8styleTagE|0;
  var __ZN9Inspector11TypeBuilder3CSS11CSSProperty6StatusE=env.__ZN9Inspector11TypeBuilder3CSS11CSSProperty6StatusE|0;
  var __ZN9Inspector11TypeBuilder3CSS11CSSProperty8ParsedOkE=env.__ZN9Inspector11TypeBuilder3CSS11CSSProperty8ParsedOkE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_3CSS8CSSMediaEEE=(H_BASE+512)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayIN3WTF6StringEEE=(H_BASE+912)|0;
  var __ZTVN7WebCore14InspectorStyleE=(H_BASE+1136)|0;
  var __ZTVN7WebCore33InspectorStyleSheetForInlineStyleE=(H_BASE+992)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_3CSS11CSSPropertyEEE=(H_BASE+832)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_3CSS24CSSComputedStylePropertyEEE=(H_BASE+672)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_3CSS7CSSRuleEEE=(H_BASE+592)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_3CSS14ShorthandEntryEEE=(H_BASE+752)|0;
  var __ZTVN7WebCore19InspectorStyleSheetE=(H_BASE+1064)|0;
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
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore14InspectorStyle19styleWithPropertiesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0, i149 = 0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, i159 = 0, i160 = 0, i161 = 0, i162 = 0, i163 = 0, i164 = 0, i165 = 0, i166 = 0, i167 = 0, i168 = 0, i169 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 440 | 0;
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
 i22 = i3 + 144 | 0;
 i23 = i3 + 152 | 0;
 i24 = i3 + 160 | 0;
 i25 = i3 + 168 | 0;
 i26 = i3 + 176 | 0;
 i27 = i3 + 184 | 0;
 i28 = i3 + 192 | 0;
 i29 = i3 + 200 | 0;
 i30 = i3 + 208 | 0;
 i31 = i3 + 216 | 0;
 i32 = i3 + 224 | 0;
 i33 = i3 + 232 | 0;
 i34 = i3 + 240 | 0;
 i35 = i3 + 248 | 0;
 i36 = i3 + 256 | 0;
 i37 = i3 + 264 | 0;
 i38 = i3 + 272 | 0;
 i39 = i3 + 280 | 0;
 i40 = i3 + 288 | 0;
 i41 = i3 + 296 | 0;
 i42 = i3 + 304 | 0;
 i43 = i3 + 312 | 0;
 i44 = i3 + 320 | 0;
 i45 = i3 + 328 | 0;
 i46 = i3 + 344 | 0;
 i47 = i3 + 368 | 0;
 i48 = i3 + 392 | 0;
 i49 = i3 + 400 | 0;
 i50 = i3 + 408 | 0;
 i51 = i3 + 416 | 0;
 i52 = i3 + 424 | 0;
 i53 = i3 + 432 | 0;
 i54 = i53;
 i55 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i56 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i57 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i58 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i59 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i60 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i61 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i62 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i63 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i64 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i65 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i66 = i45 | 0;
 HEAP32[i66 >> 2] = 0;
 i67 = i45 + 4 | 0;
 HEAP32[i67 >> 2] = 0;
 i68 = i45 + 8 | 0;
 HEAP32[i68 >> 2] = 0;
 __ZNK7WebCore14InspectorStyle21populateAllPropertiesEPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEE(i2, i45) | 0;
 i69 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i69);
 HEAP32[i69 >> 2] = H_BASE + 840;
 i70 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i70);
 HEAP32[i70 >> 2] = H_BASE + 760;
 _memset(i46 | 0, 0, 20) | 0;
 _memset(i47 | 0, 0, 20) | 0;
 i71 = i48 | 0;
 HEAP32[i71 >> 2] = 0;
 i72 = i49 | 0;
 HEAP32[i72 >> 2] = 0;
 i73 = i2 + 20 | 0;
 i74 = HEAP32[i73 >> 2] | 0;
 do {
  if ((i74 | 0) == 0) {
   HEAP32[i50 >> 2] = 0;
   i75 = 0;
   i76 = 0;
   i77 = 1;
   i78 = 0;
  } else {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i74 >> 2] | 0) + 48 >> 2] & 31](i50, i74);
   i79 = i50 | 0;
   i80 = HEAP32[i79 >> 2] | 0;
   HEAP32[i79 >> 2] = 0;
   i79 = HEAP32[i73 >> 2] | 0;
   if ((i79 | 0) == 0) {
    i75 = 0;
    i76 = 0;
    i77 = 1;
    i78 = i80;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i79 >> 2] | 0) + 28 >> 2] & 15](i79) | 0)) {
    i75 = 0;
    i76 = 0;
    i77 = 1;
    i78 = i80;
    break;
   }
   i79 = HEAP32[i73 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i79 >> 2] | 0) + 20 >> 2] & 15](i44, i79, HEAP32[i2 + 16 >> 2] | 0);
   i79 = i44 | 0;
   i81 = HEAP32[i79 >> 2] | 0;
   if ((i81 | 0) == 0) {
    i75 = 0;
    i76 = 0;
    i77 = 1;
    i78 = i80;
    break;
   }
   i82 = i81 | 0;
   HEAP32[i82 >> 2] = (HEAP32[i82 >> 2] | 0) + 1;
   i82 = HEAP32[i79 >> 2] | 0;
   do {
    if ((i82 | 0) != 0) {
     i79 = i82 | 0;
     i83 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
     if ((i83 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i82);
      __ZN3WTF8fastFreeEPv(i82);
      break;
     } else {
      HEAP32[i79 >> 2] = i83;
      break;
     }
    }
   } while (0);
   i75 = HEAP32[i81 + 16 >> 2] | 0;
   i76 = i81;
   i77 = 0;
   i78 = i80;
  }
 } while (0);
 i44 = HEAP32[i66 >> 2] | 0;
 i73 = HEAP32[i68 >> 2] | 0;
 i50 = i44 + (i73 * 28 & -1) | 0;
 if ((i73 | 0) != 0) {
  i73 = i43 | 0;
  i74 = i42 | 0;
  i82 = i39 | 0;
  i83 = i40 | 0;
  i79 = i41 | 0;
  i84 = i38 | 0;
  i85 = i35 | 0;
  i86 = i36 | 0;
  i87 = i37 | 0;
  i88 = i51 | 0;
  i89 = i69 + 12 | 0;
  i90 = i69 + 20 | 0;
  i91 = i69 + 16 | 0;
  i92 = i89;
  i93 = i89;
  i89 = i34 | 0;
  i94 = i31 | 0;
  i95 = i32 | 0;
  i96 = i33 | 0;
  i97 = i2 + 16 | 0;
  i98 = i63 | 0;
  i99 = i47 | 0;
  i100 = i47 | 0;
  i101 = i19 | 0;
  i102 = i18 | 0;
  i103 = i15 | 0;
  i104 = i16 | 0;
  i105 = i17 | 0;
  i106 = i14 | 0;
  i107 = i11 | 0;
  i108 = i12 | 0;
  i109 = i13 | 0;
  i110 = i65 | 0;
  i111 = i70 + 12 | 0;
  i112 = i70 + 20 | 0;
  i113 = i70 + 16 | 0;
  i114 = i111;
  i115 = i111;
  i111 = i47 + 8 | 0;
  i116 = i53;
  i117 = i54 + 4 | 0;
  i118 = i21 | 0;
  i119 = i22 | 0;
  i120 = i55 | 0;
  i121 = i20 | 0;
  i122 = i56 | 0;
  i123 = i46 | 0;
  i124 = i46 + 4 | 0;
  i125 = i46 | 0;
  i126 = i61 + 8 | 0;
  i127 = i61 | 0;
  i128 = i60 | 0;
  i129 = i62 + 8 | 0;
  i130 = i62 | 0;
  i131 = i57 | 0;
  i132 = i58 | 0;
  i133 = i46 + 8 | 0;
  i134 = i26 | 0;
  i135 = i23 | 0;
  i136 = i24 | 0;
  i137 = i25 | 0;
  i138 = i52 | 0;
  i139 = i30 | 0;
  i140 = i27 | 0;
  i141 = i28 | 0;
  i142 = i29 | 0;
  i143 = i44;
  while (1) {
   i44 = i143 | 0;
   i144 = i143 + 21 | 0;
   i145 = (HEAP8[i144] & 1) != 0;
   i146 = i145 ? 16 : 14;
   __ZN9Inspector15InspectorObject6createEv(i43);
   i147 = HEAP32[i73 >> 2] | 0;
   i148 = i147 | 0;
   HEAP32[i74 >> 2] = H_BASE + 256;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i41, i42);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i40, i44);
   i149 = HEAP32[i83 >> 2] | 0;
   HEAP32[i83 >> 2] = 0;
   HEAP32[i82 >> 2] = i149;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i148, i41, i39);
   i149 = HEAP32[i82 >> 2] | 0;
   do {
    if ((i149 | 0) != 0) {
     i150 = i149 + 4 | 0;
     i151 = i150 | 0;
     i152 = (HEAP32[i151 >> 2] | 0) - 1 | 0;
     if ((i152 | 0) != 0) {
      HEAP32[i151 >> 2] = i152;
      break;
     }
     i152 = i150 - 4 | 0;
     if ((i152 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i152 >> 2] | 0) + 4 >> 2] & 63](i152);
    }
   } while (0);
   i149 = HEAP32[i83 >> 2] | 0;
   do {
    if ((i149 | 0) != 0) {
     i80 = i149 + 4 | 0;
     i81 = i80 | 0;
     i152 = (HEAP32[i81 >> 2] | 0) - 1 | 0;
     if ((i152 | 0) != 0) {
      HEAP32[i81 >> 2] = i152;
      break;
     }
     i152 = i80 - 4 | 0;
     if ((i152 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i152 >> 2] | 0) + 4 >> 2] & 63](i152);
    }
   } while (0);
   i149 = HEAP32[i79 >> 2] | 0;
   do {
    if ((i149 | 0) != 0) {
     i152 = i149 | 0;
     i80 = (HEAP32[i152 >> 2] | 0) - 2 | 0;
     if ((i80 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i149);
      break;
     } else {
      HEAP32[i152 >> 2] = i80;
      break;
     }
    }
   } while (0);
   HEAP32[i84 >> 2] = H_BASE + 264;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i37, i38);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i36, i143 + 4 | 0);
   i149 = HEAP32[i86 >> 2] | 0;
   HEAP32[i86 >> 2] = 0;
   HEAP32[i85 >> 2] = i149;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i148, i37, i35);
   i149 = HEAP32[i85 >> 2] | 0;
   do {
    if ((i149 | 0) != 0) {
     i80 = i149 + 4 | 0;
     i152 = i80 | 0;
     i81 = (HEAP32[i152 >> 2] | 0) - 1 | 0;
     if ((i81 | 0) != 0) {
      HEAP32[i152 >> 2] = i81;
      break;
     }
     i81 = i80 - 4 | 0;
     if ((i81 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i81 >> 2] | 0) + 4 >> 2] & 63](i81);
    }
   } while (0);
   i149 = HEAP32[i86 >> 2] | 0;
   do {
    if ((i149 | 0) != 0) {
     i148 = i149 + 4 | 0;
     i81 = i148 | 0;
     i80 = (HEAP32[i81 >> 2] | 0) - 1 | 0;
     if ((i80 | 0) != 0) {
      HEAP32[i81 >> 2] = i80;
      break;
     }
     i80 = i148 - 4 | 0;
     if ((i80 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i80 >> 2] | 0) + 4 >> 2] & 63](i80);
    }
   } while (0);
   i149 = HEAP32[i87 >> 2] | 0;
   do {
    if ((i149 | 0) != 0) {
     i80 = i149 | 0;
     i148 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
     if ((i148 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i149);
      break;
     } else {
      HEAP32[i80 >> 2] = i148;
      break;
     }
    }
   } while (0);
   i149 = i147;
   HEAP32[i88 >> 2] = i149;
   if ((i147 | 0) != 0) {
    i148 = i147 + 4 | 0;
    i80 = HEAP32[i148 >> 2] | 0;
    HEAP32[i148 >> 2] = i80 + 1;
    i148 = i147 + 4 | 0;
    do {
     if ((i80 | 0) == 0) {
      i81 = i148 - 4 | 0;
      if ((i81 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i81 >> 2] | 0) + 4 >> 2] & 63](i81);
     } else {
      HEAP32[i148 >> 2] = i80;
     }
    } while (0);
    i80 = i147 + 4 | 0;
    HEAP32[i80 >> 2] = (HEAP32[i80 >> 2] | 0) + 1;
   }
   i80 = i147 | 0;
   i148 = HEAP32[i90 >> 2] | 0;
   if ((i148 | 0) == (HEAP32[i91 >> 2] | 0)) {
    __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i92, i148 + 1 | 0);
    HEAP32[(HEAP32[i93 >> 2] | 0) + (HEAP32[i90 >> 2] << 2) >> 2] = i80;
   } else {
    HEAP32[(HEAP32[i93 >> 2] | 0) + (i148 << 2) >> 2] = i80;
   }
   HEAP32[i90 >> 2] = (HEAP32[i90 >> 2] | 0) + 1;
   i80 = i143 + 9 | 0;
   do {
    if ((HEAP8[i80] & 1) == 0) {
     HEAP32[i89 >> 2] = H_BASE + 136;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i33, i34);
     __ZN9Inspector19InspectorBasicValue6createEb(i32, 0);
     i148 = HEAP32[i95 >> 2] | 0;
     HEAP32[i95 >> 2] = 0;
     HEAP32[i94 >> 2] = i148;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i147 | 0, i33, i31);
     i148 = HEAP32[i94 >> 2] | 0;
     do {
      if ((i148 | 0) != 0) {
       i81 = i148 + 4 | 0;
       i152 = i81 | 0;
       i150 = (HEAP32[i152 >> 2] | 0) - 1 | 0;
       if ((i150 | 0) != 0) {
        HEAP32[i152 >> 2] = i150;
        break;
       }
       i150 = i81 - 4 | 0;
       if ((i150 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i150 >> 2] | 0) + 4 >> 2] & 63](i150);
      }
     } while (0);
     i148 = HEAP32[i95 >> 2] | 0;
     do {
      if ((i148 | 0) != 0) {
       i150 = i148 + 4 | 0;
       i81 = i150 | 0;
       i152 = (HEAP32[i81 >> 2] | 0) - 1 | 0;
       if ((i152 | 0) != 0) {
        HEAP32[i81 >> 2] = i152;
        break;
       }
       i152 = i150 - 4 | 0;
       if ((i152 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i152 >> 2] | 0) + 4 >> 2] & 63](i152);
      }
     } while (0);
     i148 = HEAP32[i96 >> 2] | 0;
     if ((i148 | 0) == 0) {
      break;
     }
     i152 = i148 | 0;
     i150 = (HEAP32[i152 >> 2] | 0) - 2 | 0;
     if ((i150 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i148);
      break;
     } else {
      HEAP32[i152 >> 2] = i150;
      break;
     }
    }
   } while (0);
   i150 = HEAP32[i143 + 24 >> 2] | 0;
   do {
    if ((i150 | 0) != 0) {
     if ((HEAP32[i150 + 4 >> 2] | 0) == 0) {
      break;
     }
     HEAP32[i139 >> 2] = H_BASE + 408;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i29, i30);
     __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i28, i143 + 24 | 0);
     i152 = HEAP32[i141 >> 2] | 0;
     HEAP32[i141 >> 2] = 0;
     HEAP32[i140 >> 2] = i152;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i147 | 0, i29, i27);
     i152 = HEAP32[i140 >> 2] | 0;
     do {
      if ((i152 | 0) != 0) {
       i148 = i152 + 4 | 0;
       i81 = i148 | 0;
       i151 = (HEAP32[i81 >> 2] | 0) - 1 | 0;
       if ((i151 | 0) != 0) {
        HEAP32[i81 >> 2] = i151;
        break;
       }
       i151 = i148 - 4 | 0;
       if ((i151 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i151 >> 2] | 0) + 4 >> 2] & 63](i151);
      }
     } while (0);
     i152 = HEAP32[i141 >> 2] | 0;
     do {
      if ((i152 | 0) != 0) {
       i151 = i152 + 4 | 0;
       i148 = i151 | 0;
       i81 = (HEAP32[i148 >> 2] | 0) - 1 | 0;
       if ((i81 | 0) != 0) {
        HEAP32[i148 >> 2] = i81;
        break;
       }
       i81 = i151 - 4 | 0;
       if ((i81 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i81 >> 2] | 0) + 4 >> 2] & 63](i81);
      }
     } while (0);
     i152 = HEAP32[i142 >> 2] | 0;
     if ((i152 | 0) == 0) {
      break;
     }
     i81 = i152 | 0;
     i151 = (HEAP32[i81 >> 2] | 0) - 2 | 0;
     if ((i151 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i152);
      break;
     } else {
      HEAP32[i81 >> 2] = i151;
      break;
     }
    }
   } while (0);
   i150 = i143 + 8 | 0;
   do {
    if ((HEAP8[i150] & 1) != 0) {
     __ZN3WTF6StringC1EPKc(i52, H_BASE + 48 | 0);
     HEAP32[i134 >> 2] = H_BASE + 152;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
     __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i24, i52);
     i151 = HEAP32[i136 >> 2] | 0;
     HEAP32[i136 >> 2] = 0;
     HEAP32[i135 >> 2] = i151;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i147 | 0, i25, i23);
     i151 = HEAP32[i135 >> 2] | 0;
     do {
      if ((i151 | 0) != 0) {
       i81 = i151 + 4 | 0;
       i152 = i81 | 0;
       i148 = (HEAP32[i152 >> 2] | 0) - 1 | 0;
       if ((i148 | 0) != 0) {
        HEAP32[i152 >> 2] = i148;
        break;
       }
       i148 = i81 - 4 | 0;
       if ((i148 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i148 >> 2] | 0) + 4 >> 2] & 63](i148);
      }
     } while (0);
     i151 = HEAP32[i136 >> 2] | 0;
     do {
      if ((i151 | 0) != 0) {
       i148 = i151 + 4 | 0;
       i81 = i148 | 0;
       i152 = (HEAP32[i81 >> 2] | 0) - 1 | 0;
       if ((i152 | 0) != 0) {
        HEAP32[i81 >> 2] = i152;
        break;
       }
       i152 = i148 - 4 | 0;
       if ((i152 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i152 >> 2] | 0) + 4 >> 2] & 63](i152);
      }
     } while (0);
     i151 = HEAP32[i137 >> 2] | 0;
     do {
      if ((i151 | 0) != 0) {
       i152 = i151 | 0;
       i148 = (HEAP32[i152 >> 2] | 0) - 2 | 0;
       if ((i148 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i151);
        break;
       } else {
        HEAP32[i152 >> 2] = i148;
        break;
       }
      }
     } while (0);
     i151 = HEAP32[i138 >> 2] | 0;
     if ((i151 | 0) == 0) {
      break;
     }
     i148 = i151 | 0;
     i152 = (HEAP32[i148 >> 2] | 0) - 2 | 0;
     if ((i152 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i151);
      break;
     } else {
      HEAP32[i148 >> 2] = i152;
      break;
     }
    }
   } while (0);
   do {
    if ((HEAP8[i144] & 1) == 0) {
     if ((HEAP8[i143 + 20 | 0] & 1) != 0) {
      __ZN9Inspector11TypeBuilder3CSS11CSSProperty11setImplicitEb(i149, 0);
      i147 = i143 + 12 | 0;
      i152 = HEAP32[i147 >> 2] | 0;
      i148 = HEAP32[i147 + 4 >> 2] | 0;
      HEAP32[i53 >> 2] = i152;
      HEAP32[i53 + 4 >> 2] = i148;
      HEAP32[i116 >> 2] = i152 + i75;
      HEAP32[i117 >> 2] = i148 + i75;
      i148 = HEAP32[i88 >> 2] | 0;
      __ZN7WebCoreL22buildSourceRangeObjectERKNS_11SourceRangeEPN3WTF6VectorIjLj0ENS3_15CrashOnOverflowEEE(i55, i54, i78);
      HEAP32[i118 >> 2] = H_BASE + 208;
      __ZN3WTF6StringC1ENS_12ASCIILiteralE(i20, i21);
      i152 = HEAP32[i120 >> 2] | 0;
      HEAP32[i120 >> 2] = 0;
      HEAP32[i119 >> 2] = i152;
      __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i148 | 0, i20, i22);
      i148 = HEAP32[i119 >> 2] | 0;
      do {
       if ((i148 | 0) != 0) {
        i152 = i148 + 4 | 0;
        i147 = i152 | 0;
        i151 = (HEAP32[i147 >> 2] | 0) - 1 | 0;
        if ((i151 | 0) != 0) {
         HEAP32[i147 >> 2] = i151;
         break;
        }
        i151 = i152 - 4 | 0;
        if ((i151 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i151 >> 2] | 0) + 4 >> 2] & 63](i151);
       }
      } while (0);
      i148 = HEAP32[i121 >> 2] | 0;
      do {
       if ((i148 | 0) != 0) {
        i151 = i148 | 0;
        i152 = (HEAP32[i151 >> 2] | 0) - 2 | 0;
        if ((i152 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i148);
         break;
        } else {
         HEAP32[i151 >> 2] = i152;
         break;
        }
       }
      } while (0);
      i148 = __ZN7WebCore13cssPropertyIDERKN3WTF6StringE(i44) | 0;
      do {
       if ((i148 | 0) == 0) {
        i152 = HEAP32[i143 >> 2] | 0;
        HEAP32[i122 >> 2] = i152;
        if ((i152 | 0) == 0) {
         break;
        }
        i151 = i152 | 0;
        HEAP32[i151 >> 2] = (HEAP32[i151 >> 2] | 0) + 2;
       } else {
        __ZN7WebCore21getPropertyNameStringENS_13CSSPropertyIDE(i56, i148);
       }
      } while (0);
      i148 = HEAP32[i123 >> 2] | 0;
      if ((i148 | 0) == 0) {
       i151 = HEAP32[i124 >> 2] | 0;
       i153 = i151 << 3 | 0;
       i154 = 0;
       i155 = i151;
      } else {
       i151 = HEAP32[i133 >> 2] | 0;
       i152 = HEAP32[i122 >> 2] | 0;
       i147 = HEAP32[i152 + 16 >> 2] | 0;
       if (i147 >>> 0 > 127 >>> 0) {
        i156 = i147 >>> 7;
       } else {
        i156 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i152) | 0;
       }
       i152 = (i156 >>> 23) + ~i156 | 0;
       i147 = i152 << 12 ^ i152;
       i152 = i147 >>> 7 ^ i147;
       i147 = i152 << 2 ^ i152;
       i152 = i147 >>> 20 ^ i147 | 1;
       i147 = i156;
       i81 = 0;
       while (1) {
        i157 = i147 & i151;
        i158 = i148 + (i157 << 3) | 0;
        i159 = HEAP32[i158 >> 2] | 0;
        i160 = i159;
        if ((i160 | 0) == 0) {
         i161 = 0;
         break;
        } else if ((i160 | 0) != (-1 | 0)) {
         if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i159, HEAP32[i122 >> 2] | 0) | 0) {
          i161 = i158;
          break;
         }
        }
        i158 = (i81 | 0) == 0 ? i152 : i81;
        i147 = i158 + i157 | 0;
        i81 = i158;
       }
       i81 = HEAP32[i124 >> 2] | 0;
       i153 = (i161 | 0) == 0 ? i148 + (i81 << 3) | 0 : i161;
       i154 = i148;
       i155 = i81;
      }
      L176 : do {
       if ((i153 | 0) == (i154 + (i155 << 3) | 0)) {
        __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector11TypeBuilder3CSS11CSSPropertyEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_10StringHashENS_7HashMapIS1_S8_SC_NS_10HashTraitsIS1_EENSE_IS8_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS1_RS8_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S9_SB_SC_SI_SF_EEEEOT0_OT1_(i61, i125, i56, i51);
        if ((HEAP8[i126] & 1) != 0) {
         i162 = i146;
         break;
        }
        i81 = HEAP32[i127 >> 2] | 0;
        i147 = HEAP32[i88 >> 2] | 0;
        if ((i147 | 0) != 0) {
         i152 = i147 + 4 | 0;
         HEAP32[i152 >> 2] = (HEAP32[i152 >> 2] | 0) + 1;
        }
        i152 = i81 + 4 | 0;
        i81 = HEAP32[i152 >> 2] | 0;
        HEAP32[i152 >> 2] = i147;
        if ((i81 | 0) == 0) {
         i162 = i146;
         break;
        }
        i147 = i81 + 4 | 0;
        i81 = i147 | 0;
        i152 = (HEAP32[i81 >> 2] | 0) - 1 | 0;
        if ((i152 | 0) != 0) {
         HEAP32[i81 >> 2] = i152;
         i162 = i146;
         break;
        }
        i152 = i147 - 4 | 0;
        if ((i152 | 0) == 0) {
         i162 = i146;
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i152 >> 2] | 0) + 4 >> 2] & 63](i152);
        i162 = i146;
       } else {
        i152 = i153 + 4 | 0;
        i147 = HEAP32[i152 >> 2] | 0;
        do {
         if ((HEAP8[i80] & 1) == 0) {
          __ZN3WTF6StringC1EPKc(i60, HEAP32[__ZN9Inspector11TypeBuilder3CSS11CSSProperty8ParsedOkE >> 2] | 0);
          i81 = __ZNK9Inspector19InspectorObjectBase10getBooleanERKN3WTF6StringEPb(i147, i60, i59) | 0;
          i151 = HEAP32[i128 >> 2] | 0;
          do {
           if ((i151 | 0) != 0) {
            i158 = i151 | 0;
            i157 = (HEAP32[i158 >> 2] | 0) - 2 | 0;
            if ((i157 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i151);
             break;
            } else {
             HEAP32[i158 >> 2] = i157;
             break;
            }
           }
          } while (0);
          if (!i81) {
           i162 = i146;
           break L176;
          }
          if ((HEAP8[i59] & 1) != 0) {
           i162 = i146;
           break L176;
          }
         } else {
          __ZN3WTF6StringC1EPKc(i57, HEAP32[__ZN9Inspector11TypeBuilder3CSS11CSSProperty8PriorityE >> 2] | 0);
          i151 = __ZNK9Inspector19InspectorObjectBase9getStringERKN3WTF6StringEPS2_(i147, i57, i48) | 0;
          i157 = HEAP32[i131 >> 2] | 0;
          do {
           if ((i157 | 0) != 0) {
            i158 = i157 | 0;
            i159 = (HEAP32[i158 >> 2] | 0) - 2 | 0;
            if ((i159 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i157);
             break;
            } else {
             HEAP32[i158 >> 2] = i159;
             break;
            }
           }
          } while (0);
          i157 = HEAP32[i152 >> 2] | 0;
          __ZN3WTF6StringC1EPKc(i58, HEAP32[__ZN9Inspector11TypeBuilder3CSS11CSSProperty6StatusE >> 2] | 0);
          i81 = __ZNK9Inspector19InspectorObjectBase9getStringERKN3WTF6StringEPS2_(i157, i58, i49) | 0;
          i157 = HEAP32[i132 >> 2] | 0;
          do {
           if ((i157 | 0) != 0) {
            i159 = i157 | 0;
            i158 = (HEAP32[i159 >> 2] | 0) - 2 | 0;
            if ((i158 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i157);
             break;
            } else {
             HEAP32[i159 >> 2] = i158;
             break;
            }
           }
          } while (0);
          if (!i81) {
           i162 = i146;
           break L176;
          }
          if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i72 >> 2] | 0, H_BASE + 32 | 0) | 0) {
           i162 = i146;
           break L176;
          }
          if ((HEAP8[i150] & 1) != 0 | i151 ^ 1) {
           break;
          }
          i162 = i145 ? 16 : 15;
          break L176;
         }
        } while (0);
        __ZN9Inspector11TypeBuilder3CSS11CSSProperty9setStatusENS2_6Status4EnumE(HEAP32[i152 >> 2] | 0, 15);
        __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector11TypeBuilder3CSS11CSSPropertyEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_10StringHashENS_7HashMapIS1_S8_SC_NS_10HashTraitsIS1_EENSE_IS8_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS1_RS8_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S9_SB_SC_SI_SF_EEEEOT0_OT1_(i62, i125, i56, i51);
        if ((HEAP8[i129] & 1) != 0) {
         i162 = i146;
         break;
        }
        i147 = HEAP32[i130 >> 2] | 0;
        i157 = HEAP32[i88 >> 2] | 0;
        if ((i157 | 0) != 0) {
         i158 = i157 + 4 | 0;
         HEAP32[i158 >> 2] = (HEAP32[i158 >> 2] | 0) + 1;
        }
        i158 = i147 + 4 | 0;
        i147 = HEAP32[i158 >> 2] | 0;
        HEAP32[i158 >> 2] = i157;
        if ((i147 | 0) == 0) {
         i162 = i146;
         break;
        }
        i157 = i147 + 4 | 0;
        i147 = i157 | 0;
        i158 = (HEAP32[i147 >> 2] | 0) - 1 | 0;
        if ((i158 | 0) != 0) {
         HEAP32[i147 >> 2] = i158;
         i162 = i146;
         break;
        }
        i158 = i157 - 4 | 0;
        if ((i158 | 0) == 0) {
         i162 = i146;
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i158 >> 2] | 0) + 4 >> 2] & 63](i158);
        i162 = i146;
       }
      } while (0);
      i148 = HEAP32[i122 >> 2] | 0;
      if ((i148 | 0) == 0) {
       i163 = i162;
       i164 = 230;
       break;
      }
      i158 = i148 | 0;
      i157 = (HEAP32[i158 >> 2] | 0) - 2 | 0;
      if ((i157 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i148);
       i163 = i162;
       i164 = 230;
       break;
      } else {
       HEAP32[i158 >> 2] = i157;
       i163 = i162;
       i164 = 230;
       break;
      }
     }
     i157 = HEAP32[i97 >> 2] | 0;
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i157 >> 2] | 0) + 52 >> 2] & 63](i157, i44) | 0) {
      __ZN9Inspector11TypeBuilder3CSS11CSSProperty11setImplicitEb(i149, 1);
     }
     i157 = HEAP32[i97 >> 2] | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i157 >> 2] | 0) + 48 >> 2] & 15](i63, i157, i44);
     i157 = HEAP32[i98 >> 2] | 0;
     if ((i157 | 0) == 0) {
      break;
     }
     L233 : do {
      if ((HEAP32[i157 + 4 >> 2] | 0) != 0) {
       i158 = HEAP32[i99 >> 2] | 0;
       L235 : do {
        if ((i158 | 0) != 0) {
         i148 = HEAP32[i111 >> 2] | 0;
         i147 = HEAP32[i157 + 16 >> 2] | 0;
         if (i147 >>> 0 > 127 >>> 0) {
          i165 = i147 >>> 7;
         } else {
          i165 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i157) | 0;
         }
         i147 = (i165 >>> 23) + ~i165 | 0;
         i159 = i147 << 12 ^ i147;
         i147 = i159 >>> 7 ^ i159;
         i159 = i147 << 2 ^ i147;
         i147 = i159 >>> 20 ^ i159 | 1;
         i159 = i165;
         i160 = 0;
         while (1) {
          i166 = i159 & i148;
          i167 = i158 + (i166 << 2) | 0;
          i168 = HEAP32[i167 >> 2] | 0;
          i169 = i168;
          if ((i169 | 0) == 0) {
           break L235;
          } else if ((i169 | 0) != (-1 | 0)) {
           if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i168, HEAP32[i98 >> 2] | 0) | 0) {
            break;
           }
          }
          i168 = (i160 | 0) == 0 ? i147 : i160;
          i159 = i168 + i166 | 0;
          i160 = i168;
         }
         if ((i167 | 0) != 0) {
          break L233;
         }
        }
       } while (0);
       __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i64, i100, i63, i63);
       __ZN9Inspector15InspectorObject6createEv(i19);
       i158 = HEAP32[i101 >> 2] | 0;
       i152 = i158 | 0;
       HEAP32[i102 >> 2] = H_BASE + 256;
       __ZN3WTF6StringC1ENS_12ASCIILiteralE(i17, i18);
       __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i16, i63);
       i160 = HEAP32[i104 >> 2] | 0;
       HEAP32[i104 >> 2] = 0;
       HEAP32[i103 >> 2] = i160;
       __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i152, i17, i15);
       i160 = HEAP32[i103 >> 2] | 0;
       do {
        if ((i160 | 0) != 0) {
         i159 = i160 + 4 | 0;
         i147 = i159 | 0;
         i148 = (HEAP32[i147 >> 2] | 0) - 1 | 0;
         if ((i148 | 0) != 0) {
          HEAP32[i147 >> 2] = i148;
          break;
         }
         i148 = i159 - 4 | 0;
         if ((i148 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i148 >> 2] | 0) + 4 >> 2] & 63](i148);
        }
       } while (0);
       i160 = HEAP32[i104 >> 2] | 0;
       do {
        if ((i160 | 0) != 0) {
         i148 = i160 + 4 | 0;
         i159 = i148 | 0;
         i147 = (HEAP32[i159 >> 2] | 0) - 1 | 0;
         if ((i147 | 0) != 0) {
          HEAP32[i159 >> 2] = i147;
          break;
         }
         i147 = i148 - 4 | 0;
         if ((i147 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i147 >> 2] | 0) + 4 >> 2] & 63](i147);
        }
       } while (0);
       i160 = HEAP32[i105 >> 2] | 0;
       do {
        if ((i160 | 0) != 0) {
         i147 = i160 | 0;
         i148 = (HEAP32[i147 >> 2] | 0) - 2 | 0;
         if ((i148 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i160);
          break;
         } else {
          HEAP32[i147 >> 2] = i148;
          break;
         }
        }
       } while (0);
       __ZNK7WebCore14InspectorStyle14shorthandValueERKN3WTF6StringE(i65, i2, i63);
       HEAP32[i106 >> 2] = H_BASE + 264;
       __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
       __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i12, i65);
       i160 = HEAP32[i108 >> 2] | 0;
       HEAP32[i108 >> 2] = 0;
       HEAP32[i107 >> 2] = i160;
       __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i152, i13, i11);
       i160 = HEAP32[i107 >> 2] | 0;
       do {
        if ((i160 | 0) != 0) {
         i148 = i160 + 4 | 0;
         i147 = i148 | 0;
         i159 = (HEAP32[i147 >> 2] | 0) - 1 | 0;
         if ((i159 | 0) != 0) {
          HEAP32[i147 >> 2] = i159;
          break;
         }
         i159 = i148 - 4 | 0;
         if ((i159 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i159 >> 2] | 0) + 4 >> 2] & 63](i159);
        }
       } while (0);
       i160 = HEAP32[i108 >> 2] | 0;
       do {
        if ((i160 | 0) != 0) {
         i152 = i160 + 4 | 0;
         i159 = i152 | 0;
         i148 = (HEAP32[i159 >> 2] | 0) - 1 | 0;
         if ((i148 | 0) != 0) {
          HEAP32[i159 >> 2] = i148;
          break;
         }
         i148 = i152 - 4 | 0;
         if ((i148 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i148 >> 2] | 0) + 4 >> 2] & 63](i148);
        }
       } while (0);
       i160 = HEAP32[i109 >> 2] | 0;
       do {
        if ((i160 | 0) != 0) {
         i148 = i160 | 0;
         i152 = (HEAP32[i148 >> 2] | 0) - 2 | 0;
         if ((i152 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i160);
          break;
         } else {
          HEAP32[i148 >> 2] = i152;
          break;
         }
        }
       } while (0);
       i160 = (i158 | 0) == 0;
       if (!i160) {
        i152 = i158 + 4 | 0;
        HEAP32[i152 >> 2] = (HEAP32[i152 >> 2] | 0) + 1;
       }
       i152 = HEAP32[i110 >> 2] | 0;
       do {
        if ((i152 | 0) != 0) {
         i148 = i152 | 0;
         i159 = (HEAP32[i148 >> 2] | 0) - 2 | 0;
         if ((i159 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i152);
          break;
         } else {
          HEAP32[i148 >> 2] = i159;
          break;
         }
        }
       } while (0);
       if (!i160) {
        i152 = i158 + 4 | 0;
        i159 = i152 | 0;
        i148 = (HEAP32[i159 >> 2] | 0) - 1 | 0;
        do {
         if ((i148 | 0) == 0) {
          i147 = i152 - 4 | 0;
          if ((i147 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i147 >> 2] | 0) + 4 >> 2] & 63](i147);
         } else {
          HEAP32[i159 >> 2] = i148;
         }
        } while (0);
        i148 = i158 + 4 | 0;
        HEAP32[i148 >> 2] = (HEAP32[i148 >> 2] | 0) + 1;
       }
       i148 = i158 | 0;
       i159 = HEAP32[i112 >> 2] | 0;
       if ((i159 | 0) == (HEAP32[i113 >> 2] | 0)) {
        __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i114, i159 + 1 | 0);
        HEAP32[(HEAP32[i115 >> 2] | 0) + (HEAP32[i112 >> 2] << 2) >> 2] = i148;
       } else {
        HEAP32[(HEAP32[i115 >> 2] | 0) + (i159 << 2) >> 2] = i148;
       }
       HEAP32[i112 >> 2] = (HEAP32[i112 >> 2] | 0) + 1;
       if (i160) {
        break;
       }
       i148 = i158 + 4 | 0;
       i159 = i148 | 0;
       i152 = (HEAP32[i159 >> 2] | 0) - 1 | 0;
       if ((i152 | 0) != 0) {
        HEAP32[i159 >> 2] = i152;
        break;
       }
       i152 = i148 - 4 | 0;
       if ((i152 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i152 >> 2] | 0) + 4 >> 2] & 63](i152);
      }
     } while (0);
     i157 = HEAP32[i98 >> 2] | 0;
     if ((i157 | 0) == 0) {
      break;
     }
     i152 = i157 | 0;
     i148 = (HEAP32[i152 >> 2] | 0) - 2 | 0;
     if ((i148 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i157);
      break;
     } else {
      HEAP32[i152 >> 2] = i148;
      break;
     }
    } else {
     i163 = i146;
     i164 = 230;
    }
   } while (0);
   if ((i164 | 0) == 230) {
    i164 = 0;
    __ZN9Inspector11TypeBuilder3CSS11CSSProperty9setStatusENS2_6Status4EnumE(HEAP32[i88 >> 2] | 0, i163);
   }
   i146 = HEAP32[i88 >> 2] | 0;
   do {
    if ((i146 | 0) != 0) {
     i44 = i146 + 4 | 0;
     i149 = i44 | 0;
     i145 = (HEAP32[i149 >> 2] | 0) - 1 | 0;
     if ((i145 | 0) != 0) {
      HEAP32[i149 >> 2] = i145;
      break;
     }
     i145 = i44 - 4 | 0;
     if ((i145 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i145 >> 2] | 0) + 4 >> 2] & 63](i145);
    }
   } while (0);
   i143 = i143 + 28 | 0;
   if ((i143 | 0) == (i50 | 0)) {
    break;
   }
  }
 }
 __ZN9Inspector15InspectorObject6createEv(i10);
 i50 = HEAP32[i10 >> 2] | 0;
 i10 = (i69 | 0) == 0;
 if (!i10) {
  i143 = i69 + 4 | 0;
  HEAP32[i143 >> 2] = (HEAP32[i143 >> 2] | 0) + 1;
 }
 i143 = i50 | 0;
 HEAP32[i8 >> 2] = H_BASE + 272;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 i8 = i9 | 0;
 i88 = i69;
 HEAP32[i8 >> 2] = i88;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i143, i7, i9);
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 + 4 | 0;
   i163 = i8 | 0;
   i164 = (HEAP32[i163 >> 2] | 0) - 1 | 0;
   if ((i164 | 0) != 0) {
    HEAP32[i163 >> 2] = i164;
    break;
   }
   i164 = i8 - 4 | 0;
   if ((i164 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i164 >> 2] | 0) + 4 >> 2] & 63](i164);
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 | 0;
   i164 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i164 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i7 >> 2] = i164;
    break;
   }
  }
 } while (0);
 i9 = (i70 | 0) == 0;
 if (!i9) {
  i164 = i70 + 4 | 0;
  HEAP32[i164 >> 2] = (HEAP32[i164 >> 2] | 0) + 1;
 }
 HEAP32[i5 >> 2] = H_BASE + 288;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 i5 = i6 | 0;
 i164 = i70;
 HEAP32[i5 >> 2] = i164;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i143, i4, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 4 | 0;
   i143 = i5 | 0;
   i7 = (HEAP32[i143 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i143 >> 2] = i7;
    break;
   }
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = i50;
 do {
  if ((i50 | 0) != 0) {
   i7 = i50 + 4 | 0;
   i4 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i4 + 1;
   i7 = i50 + 4 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = i7 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 HEAP32[i1 >> 2] = i6;
 do {
  if (!i77) {
   i6 = i76 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    __ZN7WebCore17CSSRuleSourceDataD2Ev(i76);
    __ZN3WTF8fastFreeEPv(i76);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i78 | 0) != 0) {
  i76 = i78 + 8 | 0;
  if ((HEAP32[i76 >> 2] | 0) != 0) {
   HEAP32[i76 >> 2] = 0;
  }
  i76 = i78 | 0;
  i77 = HEAP32[i76 >> 2] | 0;
  if ((i77 | 0) != 0) {
   HEAP32[i76 >> 2] = 0;
   HEAP32[i78 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i77);
  }
  __ZN3WTF8fastFreeEPv(i78);
 }
 i78 = HEAP32[i72 >> 2] | 0;
 do {
  if ((i78 | 0) != 0) {
   i72 = i78 | 0;
   i77 = (HEAP32[i72 >> 2] | 0) - 2 | 0;
   if ((i77 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i78);
    break;
   } else {
    HEAP32[i72 >> 2] = i77;
    break;
   }
  }
 } while (0);
 i78 = HEAP32[i71 >> 2] | 0;
 do {
  if ((i78 | 0) != 0) {
   i71 = i78 | 0;
   i77 = (HEAP32[i71 >> 2] | 0) - 2 | 0;
   if ((i77 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i78);
    break;
   } else {
    HEAP32[i71 >> 2] = i77;
    break;
   }
  }
 } while (0);
 i78 = HEAP32[i47 >> 2] | 0;
 if ((i78 | 0) != 0) {
  i77 = HEAP32[i47 + 4 >> 2] | 0;
  if ((i77 | 0) > 0) {
   i47 = 0;
   while (1) {
    i71 = HEAP32[i78 + (i47 << 2) >> 2] | 0;
    i72 = i71;
    do {
     if (!((i72 | 0) == (-1 | 0) | (i72 | 0) == 0)) {
      i76 = i71 | 0;
      i1 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
      if ((i1 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i71);
       break;
      } else {
       HEAP32[i76 >> 2] = i1;
       break;
      }
     }
    } while (0);
    i47 = i47 + 1 | 0;
    if ((i47 | 0) >= (i77 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i78);
 }
 i78 = HEAP32[i46 >> 2] | 0;
 if ((i78 | 0) != 0) {
  i77 = HEAP32[i46 + 4 >> 2] | 0;
  if ((i77 | 0) > 0) {
   i46 = 0;
   while (1) {
    i47 = i78 + (i46 << 3) | 0;
    do {
     if ((HEAP32[i47 >> 2] | 0) != -1) {
      i71 = HEAP32[i78 + (i46 << 3) + 4 >> 2] | 0;
      do {
       if ((i71 | 0) != 0) {
        i72 = i71 + 4 | 0;
        i1 = i72 | 0;
        i76 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
        if ((i76 | 0) != 0) {
         HEAP32[i1 >> 2] = i76;
         break;
        }
        i76 = i72 - 4 | 0;
        if ((i76 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i76 >> 2] | 0) + 4 >> 2] & 63](i76);
       }
      } while (0);
      i71 = HEAP32[i47 >> 2] | 0;
      if ((i71 | 0) == 0) {
       break;
      }
      i76 = i71 | 0;
      i72 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
      if ((i72 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i71);
       break;
      } else {
       HEAP32[i76 >> 2] = i72;
       break;
      }
     }
    } while (0);
    i46 = i46 + 1 | 0;
    if ((i46 | 0) >= (i77 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i78);
 }
 do {
  if (!i9) {
   i78 = i70 + 4 | 0;
   i77 = (HEAP32[i78 >> 2] | 0) - 1 | 0;
   if ((i77 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i70 >> 2] | 0) + 4 >> 2] & 63](i164);
    break;
   } else {
    HEAP32[i78 >> 2] = i77;
    break;
   }
  }
 } while (0);
 do {
  if (!i10) {
   i164 = i69 + 4 | 0;
   i70 = (HEAP32[i164 >> 2] | 0) - 1 | 0;
   if ((i70 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i69 >> 2] | 0) + 4 >> 2] & 63](i88);
    break;
   } else {
    HEAP32[i164 >> 2] = i70;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i68 >> 2] | 0) != 0) {
  __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6shrinkEj(i45, 0);
 }
 i45 = HEAP32[i66 >> 2] | 0;
 if ((i45 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i66 >> 2] = 0;
 HEAP32[i67 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i45);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19InspectorStyleSheet18buildObjectForRuleEPNS_12CSSStyleRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 240 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 160 | 0;
 i26 = i4 + 168 | 0;
 i27 = i4 + 176 | 0;
 i28 = i4 + 184 | 0;
 i29 = i4 + 192 | 0;
 i30 = i4 + 200 | 0;
 i31 = i4 + 208 | 0;
 i32 = i4 + 216 | 0;
 i33 = i4 + 224 | 0;
 i34 = i4 + 232 | 0;
 if ((HEAP32[i2 + 16 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN9Inspector15InspectorObject6createEv(i28);
 i35 = i29 | 0;
 i36 = HEAP32[i28 >> 2] | 0;
 HEAP32[i35 >> 2] = i36;
 __ZN7WebCore19InspectorStyleSheet26buildObjectForSelectorListEPNS_12CSSStyleRuleE(i30, i2, i3);
 HEAP32[i26 >> 2] = H_BASE + 416;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i25, i26);
 i26 = i27 | 0;
 i28 = i30 | 0;
 i30 = HEAP32[i28 >> 2] | 0;
 HEAP32[i28 >> 2] = 0;
 HEAP32[i26 >> 2] = i30;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i36 | 0, i25, i27);
 i27 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i26 = i27 + 4 | 0;
   i36 = i26 | 0;
   i30 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i36 >> 2] = i30;
    break;
   }
   i30 = i26 - 4 | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 63](i30);
  }
 } while (0);
 i27 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i25 = i27 | 0;
   i30 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i30 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i25 >> 2] = i30;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[(HEAP32[i3 + 16 >> 2] | 0) + 4 >> 2] >> 5;
 i30 = HEAP32[i35 >> 2] | 0;
 HEAP32[i24 >> 2] = H_BASE + 432;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i23, i24);
 __ZN9Inspector19InspectorBasicValue6createEd(i22, +(i27 | 0));
 i27 = i21 | 0;
 i24 = i22 | 0;
 i22 = HEAP32[i24 >> 2] | 0;
 HEAP32[i24 >> 2] = 0;
 HEAP32[i27 >> 2] = i22;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i30, i23, i21);
 i21 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i27 = i21 + 4 | 0;
   i30 = i27 | 0;
   i22 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i30 >> 2] = i22;
    break;
   }
   i22 = i27 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
  }
 } while (0);
 i21 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i24 = i21 + 4 | 0;
   i22 = i24 | 0;
   i27 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i27 | 0) != 0) {
    HEAP32[i22 >> 2] = i27;
    break;
   }
   i27 = i24 - 4 | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 63](i27);
  }
 } while (0);
 i21 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i23 = i21 | 0;
   i27 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i27 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i23 >> 2] = i27;
    break;
   }
  }
 } while (0);
 i21 = i2 + 20 | 0;
 i27 = __ZN9Inspector11TypeBuilder3CSS7CSSRule7BuilderILi3EE9setOriginENS1_16StyleSheetOrigin4EnumE(i29, HEAP32[i21 >> 2] | 0) | 0;
 __ZN7WebCore19InspectorStyleSheet19buildObjectForStyleEPNS_19CSSStyleDeclarationE(i31, i2, __ZN7WebCore12CSSStyleRule5styleEv(i3) | 0);
 i29 = HEAP32[(__ZN9Inspector11TypeBuilder3CSS7CSSRule7BuilderILi7EE8setStyleEN3WTF10PassRefPtrINS1_8CSSStyleEEE(i27, i31) | 0) >> 2] | 0;
 if ((i29 | 0) != 0) {
  i27 = i29 + 4 | 0;
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
 }
 i27 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i31 = i27 + 4 | 0;
   i23 = i31 | 0;
   i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i23 >> 2] = i24;
    break;
   }
   i24 = i31 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 63](i24);
  }
 } while (0);
 i27 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i35 = i27 + 4 | 0;
   i24 = i35 | 0;
   i31 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i31 | 0) != 0) {
    HEAP32[i24 >> 2] = i31;
    break;
   }
   i31 = i35 - 4 | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 63](i31);
  }
 } while (0);
 do {
  if ((HEAP32[i21 >> 2] | 0) == 13) {
   __ZNK7WebCore19InspectorStyleSheet8finalURLEv(i32, i2);
   HEAP32[i20 >> 2] = H_BASE + 336;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i18, i32);
   i27 = i17 | 0;
   i31 = i18 | 0;
   i35 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = 0;
   HEAP32[i27 >> 2] = i35;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i29 | 0, i19, i17);
   i35 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i27 = i35 + 4 | 0;
     i24 = i27 | 0;
     i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) != 0) {
      HEAP32[i24 >> 2] = i23;
      break;
     }
     i23 = i27 - 4 | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 63](i23);
    }
   } while (0);
   i35 = HEAP32[i31 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i23 = i35 + 4 | 0;
     i27 = i23 | 0;
     i24 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) != 0) {
      HEAP32[i27 >> 2] = i24;
      break;
     }
     i24 = i23 - 4 | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 63](i24);
    }
   } while (0);
   i35 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i31 = i35 | 0;
     i24 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i35);
      break;
     } else {
      HEAP32[i31 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i35 = HEAP32[i32 >> 2] | 0;
   if ((i35 | 0) == 0) {
    break;
   }
   i24 = i35 | 0;
   i31 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i35);
    break;
   } else {
    HEAP32[i24 >> 2] = i31;
    break;
   }
  }
 } while (0);
 do {
  if (((HEAP32[i21 >> 2] | 0) - 10 | 0) >>> 0 > 1 >>> 0) {
   i32 = __ZN7WebCore12CSSStyleRule5styleEv(i3) | 0;
   i19 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 63](i2, i32) | 0;
   do {
    if ((i19 | 0) == -1) {
     HEAP32[i33 >> 2] = 0;
     HEAP32[i33 + 4 >> 2] = 0;
    } else {
     i32 = HEAP32[i2 + 12 >> 2] | 0;
     if ((i32 | 0) == 0) {
      HEAP32[i33 >> 2] = 0;
      HEAP32[i33 + 4 >> 2] = i19;
      break;
     }
     i17 = i32 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     i20 = i18 + 2 | 0;
     HEAP32[i33 >> 2] = i32;
     HEAP32[i17 >> 2] = i18 + 4;
     HEAP32[i33 + 4 >> 2] = i19;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i17 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i19 = i33 | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[i20 + 4 >> 2] | 0) != 0) {
     __ZNK7WebCore14InspectorCSSId15asProtocolValueIN9Inspector11TypeBuilder3CSS9CSSRuleIdEEEN3WTF10PassRefPtrIT_EEv(i34, i33);
     HEAP32[i15 >> 2] = H_BASE + 216;
     __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
     i17 = i16 | 0;
     i32 = i34 | 0;
     i18 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = 0;
     HEAP32[i17 >> 2] = i18;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i29 | 0, i14, i16);
     i18 = HEAP32[i17 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i17 = i18 + 4 | 0;
       i32 = i17 | 0;
       i31 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
       if ((i31 | 0) != 0) {
        HEAP32[i32 >> 2] = i31;
        break;
       }
       i31 = i17 - 4 | 0;
       if ((i31 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 63](i31);
      }
     } while (0);
     i18 = HEAP32[i14 >> 2] | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     i31 = i18 | 0;
     i17 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i31 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i19 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   i17 = i20 | 0;
   i31 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i17 >> 2] = i31;
    break;
   }
  }
 } while (0);
 i14 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i14);
 HEAP32[i14 >> 2] = H_BASE + 520;
 i16 = i8 | 0;
 HEAP32[i16 >> 2] = 0;
 do {
  if ((i3 | 0) == 0) {
   i37 = i14 + 20 | 0;
  } else {
   i34 = i9 | 0;
   i15 = i10 | 0;
   i33 = i12 | 0;
   i2 = i13 | 0;
   i21 = i14 + 12 | 0;
   i31 = i21;
   i17 = i14 + 20 | 0;
   i20 = i14 + 16 | 0;
   i18 = i21;
   i21 = i11 | 0;
   i32 = i3 | 0;
   L117 : while (1) {
    i24 = i32;
    L119 : do {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 8 >> 2] & 15](i32) | 0) == 4) {
      i35 = __ZNK7WebCore12CSSMediaRule5mediaEv(i32) | 0;
      i23 = i32;
      while (1) {
       i27 = i23 + 12 | 0;
       if ((HEAP8[i23 + 8 | 0] & 2) == 0) {
        i38 = i35;
        i39 = i27;
        i40 = 2;
        i41 = 91;
        break L119;
       }
       i22 = HEAP32[i27 >> 2] | 0;
       if ((i22 | 0) == 0) {
        i42 = 2;
        i43 = i35;
        i41 = 109;
        break;
       } else {
        i23 = i22;
       }
      }
     } else {
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 8 >> 2] & 15](i32) | 0) != 3) {
       i42 = 2;
       i43 = 0;
       i41 = 109;
       break;
      }
      i23 = __ZNK7WebCore13CSSImportRule5mediaEv(i32) | 0;
      i35 = i32;
      while (1) {
       i22 = i35 + 12 | 0;
       if ((HEAP8[i35 + 8 | 0] & 2) == 0) {
        i38 = i23;
        i39 = i22;
        i40 = 3;
        i41 = 91;
        break L119;
       }
       i27 = HEAP32[i22 >> 2] | 0;
       if ((i27 | 0) == 0) {
        i42 = 3;
        i43 = i23;
        i41 = 109;
        break;
       } else {
        i35 = i27;
       }
      }
     }
    } while (0);
    do {
     if ((i41 | 0) == 91) {
      i41 = 0;
      i24 = HEAP32[i39 >> 2] | 0;
      if ((i24 | 0) == 0) {
       i42 = i40;
       i43 = i38;
       i41 = 109;
       break;
      }
      i35 = HEAP32[(HEAP32[i24 + 8 >> 2] | 0) + 64 >> 2] | 0;
      if ((i35 | 0) != 0) {
       i23 = i35 | 0;
       HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
      }
      i23 = HEAP32[i16 >> 2] | 0;
      HEAP32[i16 >> 2] = i35;
      if ((i23 | 0) == 0) {
       i44 = i35;
      } else {
       i35 = i23 | 0;
       i27 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i23);
       } else {
        HEAP32[i35 >> 2] = i27;
       }
       i44 = HEAP32[i16 >> 2] | 0;
      }
      if ((i44 | 0) != 0) {
       if ((HEAP32[i44 + 4 >> 2] | 0) != 0) {
        i45 = i40;
        i46 = i38;
        break;
       }
      }
      __ZN7WebCore17InspectorDOMAgent17documentURLStringEPNS_8DocumentE(i9, __ZNK7WebCore13CSSStyleSheet13ownerDocumentEv(i24) | 0);
      i24 = HEAP32[i34 >> 2] | 0;
      HEAP32[i34 >> 2] = 0;
      i27 = HEAP32[i16 >> 2] | 0;
      HEAP32[i16 >> 2] = i24;
      do {
       if ((i27 | 0) != 0) {
        i24 = i27 | 0;
        i35 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
        if ((i35 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i27);
         break;
        } else {
         HEAP32[i24 >> 2] = i35;
         break;
        }
       }
      } while (0);
      i27 = HEAP32[i34 >> 2] | 0;
      if ((i27 | 0) == 0) {
       i45 = i40;
       i46 = i38;
       break;
      }
      i35 = i27 | 0;
      i24 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i27);
       i45 = i40;
       i46 = i38;
       break;
      } else {
       HEAP32[i35 >> 2] = i24;
       i45 = i40;
       i46 = i38;
       break;
      }
     }
    } while (0);
    do {
     if ((i41 | 0) == 109) {
      i41 = 0;
      __ZN3WTF6StringC1EPKc(i10, H_BASE + 1184 | 0);
      i24 = HEAP32[i15 >> 2] | 0;
      HEAP32[i15 >> 2] = 0;
      i35 = HEAP32[i16 >> 2] | 0;
      HEAP32[i16 >> 2] = i24;
      do {
       if ((i35 | 0) != 0) {
        i24 = i35 | 0;
        i27 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
        if ((i27 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i35);
         break;
        } else {
         HEAP32[i24 >> 2] = i27;
         break;
        }
       }
      } while (0);
      i35 = HEAP32[i15 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i45 = i42;
       i46 = i43;
       break;
      }
      i27 = i35 | 0;
      i24 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i35);
       i45 = i42;
       i46 = i43;
       break;
      } else {
       HEAP32[i27 >> 2] = i24;
       i45 = i42;
       i46 = i43;
       break;
      }
     }
    } while (0);
    do {
     if ((i46 | 0) != 0) {
      if ((HEAP32[(HEAP32[i46 + 4 >> 2] | 0) + 16 >> 2] | 0) == 0) {
       break;
      }
      __ZN7WebCoreL16buildMediaObjectEPKNS_9MediaListENS_15MediaListSourceERKN3WTF6StringE(i11, i46, i45, i8);
      i24 = HEAP32[i21 >> 2] | 0;
      HEAP32[i21 >> 2] = 0;
      i27 = i24 | 0;
      i24 = HEAP32[i17 >> 2] | 0;
      if ((i24 | 0) == (HEAP32[i20 >> 2] | 0)) {
       __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i24 + 1 | 0);
       HEAP32[(HEAP32[i18 >> 2] | 0) + (HEAP32[i17 >> 2] << 2) >> 2] = i27;
      } else {
       HEAP32[(HEAP32[i18 >> 2] | 0) + (i24 << 2) >> 2] = i27;
      }
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     }
    } while (0);
    L176 : do {
     if ((HEAP8[i32 + 8 | 0] & 2) == 0) {
      i47 = i32 + 12 | 0;
      i41 = 130;
     } else {
      i27 = HEAP32[i32 + 12 >> 2] | 0;
      if ((i27 | 0) != 0) {
       i32 = i27;
       continue L117;
      }
      i27 = i32 + 12 | 0;
      while (1) {
       i24 = HEAP32[i27 >> 2] | 0;
       if ((i24 | 0) == 0) {
        i48 = i32;
        break L176;
       }
       i35 = i24 + 12 | 0;
       if ((HEAP8[i24 + 8 | 0] & 2) == 0) {
        i47 = i35;
        i41 = 130;
        break;
       } else {
        i27 = i35;
       }
      }
     }
    } while (0);
    L183 : do {
     if ((i41 | 0) == 130) {
      i41 = 0;
      i27 = HEAP32[i47 >> 2] | 0;
      if ((i27 | 0) == 0) {
       i48 = i32;
       break;
      } else {
       i49 = i27;
      }
      while (1) {
       i27 = __ZNK7WebCore13CSSStyleSheet5mediaEv(i49) | 0;
       do {
        if ((i27 | 0) != 0) {
         if ((HEAP32[(HEAP32[i27 + 4 >> 2] | 0) + 16 >> 2] | 0) == 0) {
          break;
         }
         i35 = __ZNK7WebCore13CSSStyleSheet13ownerDocumentEv(i49) | 0;
         L190 : do {
          if ((i35 | 0) == 0) {
           i24 = HEAP32[(HEAP32[i49 + 8 >> 2] | 0) + 64 >> 2] | 0;
           do {
            if ((i24 | 0) != 0) {
             if ((HEAP32[i24 + 4 >> 2] | 0) == 0) {
              break;
             }
             i23 = i24 | 0;
             HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
             i23 = HEAP32[i16 >> 2] | 0;
             HEAP32[i16 >> 2] = i24;
             if ((i23 | 0) == 0) {
              break L190;
             }
             i22 = i23 | 0;
             i30 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
             if ((i30 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i23);
              break L190;
             } else {
              HEAP32[i22 >> 2] = i30;
              break L190;
             }
            }
           } while (0);
           __ZN3WTF6StringC1EPKc(i12, H_BASE + 1184 | 0);
           i24 = HEAP32[i33 >> 2] | 0;
           HEAP32[i33 >> 2] = 0;
           i30 = HEAP32[i16 >> 2] | 0;
           HEAP32[i16 >> 2] = i24;
           do {
            if ((i30 | 0) != 0) {
             i24 = i30 | 0;
             i22 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
             if ((i22 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i30);
              break;
             } else {
              HEAP32[i24 >> 2] = i22;
              break;
             }
            }
           } while (0);
           i30 = HEAP32[i33 >> 2] | 0;
           if ((i30 | 0) == 0) {
            break;
           }
           i22 = i30 | 0;
           i24 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
           if ((i24 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i30);
            break;
           } else {
            HEAP32[i22 >> 2] = i24;
            break;
           }
          } else {
           i24 = HEAP32[i35 + 356 >> 2] | 0;
           if ((i24 | 0) != 0) {
            i22 = i24 | 0;
            HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
           }
           i22 = HEAP32[i16 >> 2] | 0;
           HEAP32[i16 >> 2] = i24;
           if ((i22 | 0) == 0) {
            break;
           }
           i24 = i22 | 0;
           i30 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
           if ((i30 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i22);
            break;
           } else {
            HEAP32[i24 >> 2] = i30;
            break;
           }
          }
         } while (0);
         __ZN7WebCoreL16buildMediaObjectEPKNS_9MediaListENS_15MediaListSourceERKN3WTF6StringE(i13, i27, (HEAP32[i49 + 24 >> 2] | 0) == 0 | 0, i8);
         i35 = HEAP32[i2 >> 2] | 0;
         HEAP32[i2 >> 2] = 0;
         i30 = i35 | 0;
         i35 = HEAP32[i17 >> 2] | 0;
         if ((i35 | 0) == (HEAP32[i20 >> 2] | 0)) {
          __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i31, i35 + 1 | 0);
          HEAP32[(HEAP32[i18 >> 2] | 0) + (HEAP32[i17 >> 2] << 2) >> 2] = i30;
         } else {
          HEAP32[(HEAP32[i18 >> 2] | 0) + (i35 << 2) >> 2] = i30;
         }
         HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
        }
       } while (0);
       i27 = HEAP32[i49 + 28 >> 2] | 0;
       i30 = i27 | 0;
       if ((i27 | 0) != 0) {
        i48 = i30;
        break L183;
       }
       i27 = __ZNK7WebCore13CSSStyleSheet16parentStyleSheetEv(i49) | 0;
       if ((i27 | 0) == 0) {
        i48 = i30;
        break;
       } else {
        i49 = i27;
       }
      }
     }
    } while (0);
    if ((i48 | 0) == 0) {
     break;
    } else {
     i32 = i48;
    }
   }
   i32 = HEAP32[i16 >> 2] | 0;
   if ((i32 | 0) == 0) {
    i37 = i17;
    break;
   }
   i18 = i32 | 0;
   i31 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    i37 = i17;
    break;
   } else {
    HEAP32[i18 >> 2] = i31;
    i37 = i17;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i37 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = i29;
  if ((i14 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i37 = i14 + 4 | 0;
  i16 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) == 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i37 >> 2] = i16;
   STACKTOP = i4;
   return;
  }
 }
 HEAP32[i6 >> 2] = H_BASE + 232;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = i14;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i29 | 0, i5, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 4 | 0;
   i14 = i6 | 0;
   i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i14 >> 2] = i16;
    break;
   }
   i16 = i6 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 | 0;
   i16 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i5 >> 2] = i16;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i29;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore14InspectorStyle21populateAllPropertiesEPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 280 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 112 | 0;
 i11 = i3 + 136 | 0;
 i12 = i3 + 144 | 0;
 i13 = i3 + 160 | 0;
 i14 = i3 + 168 | 0;
 i15 = i3 + 176 | 0;
 i16 = i3 + 184 | 0;
 i17 = i3 + 200 | 0;
 i18 = i3 + 232 | 0;
 i19 = i3 + 256 | 0;
 i20 = i3 + 264 | 0;
 i21 = i3 + 272 | 0;
 _memset(i6 | 0, 0, 20) | 0;
 i22 = i1 + 24 | 0;
 i23 = i1 + 32 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 i25 = i7 | 0;
 __ZN7WebCore21CSSPropertySourceDataC1Ev(i25);
 i26 = i7 + 20 | 0;
 HEAP8[i26] = 0;
 i27 = i7 + 21 | 0;
 HEAP8[i27] = 0;
 i28 = i7 + 24 | 0;
 HEAP32[i28 >> 2] = 0;
 do {
  if ((i24 | 0) != 0) {
   if ((HEAP32[i23 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else {
    __ZN7WebCore22InspectorStylePropertyaSERKS0_(i7, HEAP32[i22 >> 2] | 0) | 0;
    break;
   }
  }
 } while (0);
 i29 = i1 + 20 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i30 | 0) == 0) {
   i31 = 0;
   i32 = 1;
   i33 = 0;
  } else {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 28 >> 2] & 15](i30) | 0)) {
    i31 = 0;
    i32 = 1;
    i33 = 0;
    break;
   }
   i34 = HEAP32[i29 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i34 >> 2] | 0) + 20 >> 2] & 15](i5, i34, HEAP32[i1 + 16 >> 2] | 0);
   i34 = i5 | 0;
   i35 = HEAP32[i34 >> 2] | 0;
   if ((i35 | 0) == 0) {
    i31 = 0;
    i32 = 1;
    i33 = 0;
    break;
   }
   i36 = i35 | 0;
   HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
   i36 = HEAP32[i34 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i34 = i36 | 0;
     i37 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     if ((i37 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i36);
      __ZN3WTF8fastFreeEPv(i36);
      break;
     } else {
      HEAP32[i34 >> 2] = i37;
      break;
     }
    }
   } while (0);
   i36 = HEAP32[i35 + 36 >> 2] | 0;
   i37 = i36 + 4 | 0;
   if ((i37 | 0) == 0) {
    i31 = 0;
    i32 = 0;
    i33 = i35;
    break;
   }
   i34 = i8 | 0;
   HEAP32[i34 >> 2] = 0;
   __ZNK7WebCore14InspectorStyle7getTextEPN3WTF6StringE(i1, i8) | 0;
   i38 = i37 | 0;
   i37 = i36 + 12 | 0;
   L18 : do {
    if ((HEAP32[i37 >> 2] | 0) == 0) {
     i39 = 0;
    } else {
     i36 = i9 | 0;
     i40 = i9 + 20 | 0;
     i41 = i9 + 21 | 0;
     i42 = i9 + 24 | 0;
     i43 = i10 + 4 | 0;
     i44 = i10 | 0;
     i45 = i9 + 12 | 0;
     i46 = i9 + 16 | 0;
     i47 = i4 | 0;
     i48 = i2 + 8 | 0;
     i49 = i2 + 4 | 0;
     i50 = i6 | 0;
     i51 = i11 | 0;
     i52 = i9 + 4 | 0;
     i53 = i9 | 0;
     i54 = i2 | 0;
     i55 = i7 + 12 | 0;
     i56 = i22 | 0;
     i57 = HEAP32[i38 >> 2] | 0;
     i58 = 0;
     L20 : while (1) {
      L22 : do {
       if (i58 >>> 0 < i24 >>> 0) {
        i59 = i57 + 12 | 0;
        i60 = i58;
        while (1) {
         if ((HEAP32[i55 >> 2] | 0) >>> 0 > (HEAP32[i59 >> 2] | 0) >>> 0) {
          i61 = i60;
          break L22;
         }
         i62 = HEAP32[i48 >> 2] | 0;
         if ((i62 | 0) == (HEAP32[i49 >> 2] | 0)) {
          __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i2, i7);
         } else {
          i63 = HEAP32[i54 >> 2] | 0;
          __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i63 + (i62 * 28 & -1) | 0, i25);
          HEAP8[i63 + (i62 * 28 & -1) + 20 | 0] = HEAP8[i26] & 1;
          HEAP8[i63 + (i62 * 28 & -1) + 21 | 0] = HEAP8[i27] & 1;
          i64 = HEAP32[i28 >> 2] | 0;
          HEAP32[i63 + (i62 * 28 & -1) + 24 >> 2] = i64;
          if ((i64 | 0) != 0) {
           i62 = i64 | 0;
           HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 2;
          }
          HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
         }
         i62 = i60 + 1 | 0;
         if (i62 >>> 0 >= i24 >>> 0) {
          i61 = i62;
          break L22;
         }
         if ((HEAP32[i23 >> 2] | 0) >>> 0 <= i62 >>> 0) {
          break L20;
         }
         __ZN7WebCore22InspectorStylePropertyaSERKS0_(i7, (HEAP32[i56 >> 2] | 0) + (i62 * 28 & -1) | 0) | 0;
         i60 = i62;
        }
       } else {
        i61 = i58;
       }
      } while (0);
      __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i10, i57);
      __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i36, i10);
      HEAP8[i40] = 1;
      HEAP8[i41] = 0;
      HEAP32[i42 >> 2] = 0;
      i60 = HEAP32[i43 >> 2] | 0;
      do {
       if ((i60 | 0) != 0) {
        i59 = i60 | 0;
        i62 = (HEAP32[i59 >> 2] | 0) - 2 | 0;
        if ((i62 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i60);
         break;
        } else {
         HEAP32[i59 >> 2] = i62;
         break;
        }
       }
      } while (0);
      i60 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i60 | 0) != 0) {
        i62 = i60 | 0;
        i59 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
        if ((i59 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i60);
         break;
        } else {
         HEAP32[i62 >> 2] = i59;
         break;
        }
       }
      } while (0);
      i60 = HEAP32[i45 >> 2] | 0;
      __ZNK3WTF6String9substringEjj(i4, i8, i60, (HEAP32[i46 >> 2] | 0) - i60 | 0);
      i60 = HEAP32[i47 >> 2] | 0;
      HEAP32[i47 >> 2] = 0;
      i59 = HEAP32[i42 >> 2] | 0;
      HEAP32[i42 >> 2] = i60;
      do {
       if ((i59 | 0) != 0) {
        i60 = i59 | 0;
        i62 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
        if ((i62 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i59);
         break;
        } else {
         HEAP32[i60 >> 2] = i62;
         break;
        }
       }
      } while (0);
      i59 = HEAP32[i47 >> 2] | 0;
      do {
       if ((i59 | 0) != 0) {
        i62 = i59 | 0;
        i60 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
        if ((i60 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i59);
         break;
        } else {
         HEAP32[i62 >> 2] = i60;
         break;
        }
       }
      } while (0);
      i59 = HEAP32[i48 >> 2] | 0;
      if ((i59 | 0) == (HEAP32[i49 >> 2] | 0)) {
       __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i2, i9);
      } else {
       i60 = HEAP32[i54 >> 2] | 0;
       __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i60 + (i59 * 28 & -1) | 0, i36);
       HEAP8[i60 + (i59 * 28 & -1) + 20 | 0] = HEAP8[i40] & 1;
       HEAP8[i60 + (i59 * 28 & -1) + 21 | 0] = HEAP8[i41] & 1;
       i62 = HEAP32[i42 >> 2] | 0;
       HEAP32[i60 + (i59 * 28 & -1) + 24 >> 2] = i62;
       if ((i62 | 0) != 0) {
        i59 = i62 | 0;
        HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 2;
       }
       HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + 1;
      }
      __ZNK3WTF6String5lowerEv(i11, i57 | 0);
      __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i12, i50, i11, i11);
      i59 = HEAP32[i51 >> 2] | 0;
      do {
       if ((i59 | 0) != 0) {
        i62 = i59 | 0;
        i60 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
        if ((i60 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i59);
         break;
        } else {
         HEAP32[i62 >> 2] = i60;
         break;
        }
       }
      } while (0);
      i59 = HEAP32[i42 >> 2] | 0;
      do {
       if ((i59 | 0) != 0) {
        i60 = i59 | 0;
        i62 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
        if ((i62 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i59);
         break;
        } else {
         HEAP32[i60 >> 2] = i62;
         break;
        }
       }
      } while (0);
      i59 = HEAP32[i52 >> 2] | 0;
      do {
       if ((i59 | 0) != 0) {
        i62 = i59 | 0;
        i60 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
        if ((i60 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i59);
         break;
        } else {
         HEAP32[i62 >> 2] = i60;
         break;
        }
       }
      } while (0);
      i59 = HEAP32[i53 >> 2] | 0;
      do {
       if ((i59 | 0) != 0) {
        i60 = i59 | 0;
        i62 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
        if ((i62 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i59);
         break;
        } else {
         HEAP32[i60 >> 2] = i62;
         break;
        }
       }
      } while (0);
      i59 = i57 + 20 | 0;
      if ((i59 | 0) == ((HEAP32[i38 >> 2] | 0) + ((HEAP32[i37 >> 2] | 0) * 20 & -1) | 0)) {
       i39 = i61;
       break L18;
      } else {
       i57 = i59;
       i58 = i61;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    }
   } while (0);
   i37 = HEAP32[i34 >> 2] | 0;
   if ((i37 | 0) == 0) {
    i31 = i39;
    i32 = 0;
    i33 = i35;
    break;
   }
   i38 = i37 | 0;
   i58 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
   if ((i58 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i37);
    i31 = i39;
    i32 = 0;
    i33 = i35;
    break;
   } else {
    HEAP32[i38 >> 2] = i58;
    i31 = i39;
    i32 = 0;
    i33 = i35;
    break;
   }
  }
 } while (0);
 L99 : do {
  if (i31 >>> 0 < i24 >>> 0) {
   i39 = i22 | 0;
   i61 = i2 + 8 | 0;
   i11 = i2 + 4 | 0;
   i12 = i2 | 0;
   i9 = i31;
   while (1) {
    i8 = i9 + 1 | 0;
    if ((HEAP32[i23 >> 2] | 0) >>> 0 <= i9 >>> 0) {
     break;
    }
    __ZN7WebCore22InspectorStylePropertyaSERKS0_(i7, (HEAP32[i39 >> 2] | 0) + (i9 * 28 & -1) | 0) | 0;
    i4 = HEAP32[i61 >> 2] | 0;
    if ((i4 | 0) == (HEAP32[i11 >> 2] | 0)) {
     __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i2, i7);
    } else {
     i10 = HEAP32[i12 >> 2] | 0;
     __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i10 + (i4 * 28 & -1) | 0, i25);
     HEAP8[i10 + (i4 * 28 & -1) + 20 | 0] = HEAP8[i26] & 1;
     HEAP8[i10 + (i4 * 28 & -1) + 21 | 0] = HEAP8[i27] & 1;
     i5 = HEAP32[i28 >> 2] | 0;
     HEAP32[i10 + (i4 * 28 & -1) + 24 >> 2] = i5;
     if ((i5 | 0) != 0) {
      i4 = i5 | 0;
      HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
     }
     HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 1;
    }
    if (i8 >>> 0 < i24 >>> 0) {
     i9 = i8;
    } else {
     break L99;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  }
 } while (0);
 i24 = i1 + 16 | 0;
 i1 = HEAP32[i24 >> 2] | 0;
 i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 15](i1) | 0;
 if ((i27 | 0) > 0) {
  i1 = i6 | 0;
  i26 = i14 | 0;
  i25 = i13 | 0;
  i23 = i6 | 0;
  i31 = i15 | 0;
  i22 = i20 | 0;
  i9 = i17 | 0;
  i61 = i17 + 20 | 0;
  i12 = i17 + 21 | 0;
  i11 = i17 + 24 | 0;
  i39 = i2 + 8 | 0;
  i35 = i2 + 4 | 0;
  i34 = i17 + 4 | 0;
  i8 = i17 | 0;
  i4 = i18 + 4 | 0;
  i5 = i18 | 0;
  i10 = i19 | 0;
  i29 = i2 | 0;
  i30 = i6 + 8 | 0;
  i58 = 0;
  while (1) {
   i38 = HEAP32[i24 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i38 >> 2] | 0) + 32 >> 2] & 15](i13, i38, i58);
   __ZNK3WTF6String5lowerEv(i14, i13);
   i38 = HEAP32[i1 >> 2] | 0;
   if ((i38 | 0) == 0) {
    i65 = 0;
   } else {
    i37 = HEAP32[i30 >> 2] | 0;
    i57 = HEAP32[i26 >> 2] | 0;
    i53 = HEAP32[i57 + 16 >> 2] | 0;
    if (i53 >>> 0 > 127 >>> 0) {
     i66 = i53 >>> 7;
    } else {
     i66 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i57) | 0;
    }
    i57 = (i66 >>> 23) + ~i66 | 0;
    i53 = i57 << 12 ^ i57;
    i57 = i53 >>> 7 ^ i53;
    i53 = i57 << 2 ^ i57;
    i57 = i53 >>> 20 ^ i53 | 1;
    i53 = i66;
    i52 = 0;
    while (1) {
     i42 = i53 & i37;
     i51 = i38 + (i42 << 2) | 0;
     i50 = HEAP32[i51 >> 2] | 0;
     i48 = i50;
     if ((i48 | 0) == 0) {
      i67 = 0;
      break;
     } else if ((i48 | 0) != (-1 | 0)) {
      if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i50, HEAP32[i26 >> 2] | 0) | 0) {
       i67 = i51;
       break;
      }
     }
     i51 = (i52 | 0) == 0 ? i57 : i52;
     i53 = i51 + i42 | 0;
     i52 = i51;
    }
    i65 = (i67 | 0) != 0;
   }
   i52 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i52 | 0) != 0) {
     i53 = i52 | 0;
     i57 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
     if ((i57 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i52);
      break;
     } else {
      HEAP32[i53 >> 2] = i57;
      break;
     }
    }
   } while (0);
   do {
    if (!i65) {
     __ZNK3WTF6String5lowerEv(i15, i13);
     __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i16, i23, i15, i15);
     i52 = HEAP32[i31 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i57 = i52 | 0;
       i53 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
       if ((i53 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i52);
        break;
       } else {
        HEAP32[i57 >> 2] = i53;
        break;
       }
      }
     } while (0);
     i52 = HEAP32[i24 >> 2] | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i52 >> 2] | 0) + 40 >> 2] & 15](i19, i52, i13);
     i52 = HEAP32[i24 >> 2] | 0;
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i52 >> 2] | 0) + 44 >> 2] & 15](i20, i52, i13);
     i52 = HEAP32[i22 >> 2] | 0;
     if ((i52 | 0) == 0) {
      i68 = 0;
     } else {
      i68 = (HEAP32[i52 + 4 >> 2] | 0) != 0;
     }
     __ZN7WebCore11SourceRangeC1Ev(i21);
     __ZN7WebCore21CSSPropertySourceDataC1ERKN3WTF6StringES4_bbRKNS_11SourceRangeE(i18, i13, i19, i68, 1, i21);
     __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i9, i18);
     HEAP8[i61] = 0;
     HEAP8[i12] = 0;
     HEAP32[i11 >> 2] = 0;
     i52 = HEAP32[i39 >> 2] | 0;
     if ((i52 | 0) == (HEAP32[i35 >> 2] | 0)) {
      __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i2, i17);
     } else {
      i53 = HEAP32[i29 >> 2] | 0;
      __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i53 + (i52 * 28 & -1) | 0, i9);
      HEAP8[i53 + (i52 * 28 & -1) + 20 | 0] = HEAP8[i61] & 1;
      HEAP8[i53 + (i52 * 28 & -1) + 21 | 0] = HEAP8[i12] & 1;
      i57 = HEAP32[i11 >> 2] | 0;
      HEAP32[i53 + (i52 * 28 & -1) + 24 >> 2] = i57;
      if ((i57 | 0) != 0) {
       i52 = i57 | 0;
       HEAP32[i52 >> 2] = (HEAP32[i52 >> 2] | 0) + 2;
      }
      HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
     }
     i52 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i57 = i52 | 0;
       i53 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
       if ((i53 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i52);
        break;
       } else {
        HEAP32[i57 >> 2] = i53;
        break;
       }
      }
     } while (0);
     i52 = HEAP32[i34 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i53 = i52 | 0;
       i57 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
       if ((i57 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i52);
        break;
       } else {
        HEAP32[i53 >> 2] = i57;
        break;
       }
      }
     } while (0);
     i52 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i57 = i52 | 0;
       i53 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
       if ((i53 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i52);
        break;
       } else {
        HEAP32[i57 >> 2] = i53;
        break;
       }
      }
     } while (0);
     i52 = HEAP32[i4 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i53 = i52 | 0;
       i57 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
       if ((i57 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i52);
        break;
       } else {
        HEAP32[i53 >> 2] = i57;
        break;
       }
      }
     } while (0);
     i52 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i57 = i52 | 0;
       i53 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
       if ((i53 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i52);
        break;
       } else {
        HEAP32[i57 >> 2] = i53;
        break;
       }
      }
     } while (0);
     i52 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i52 | 0) != 0) {
       i53 = i52 | 0;
       i57 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
       if ((i57 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i52);
        break;
       } else {
        HEAP32[i53 >> 2] = i57;
        break;
       }
      }
     } while (0);
     i52 = HEAP32[i10 >> 2] | 0;
     if ((i52 | 0) == 0) {
      break;
     }
     i57 = i52 | 0;
     i53 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
     if ((i53 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i52);
      break;
     } else {
      HEAP32[i57 >> 2] = i53;
      break;
     }
    }
   } while (0);
   i53 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i53 | 0) != 0) {
     i57 = i53 | 0;
     i52 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
     if ((i52 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i53);
      break;
     } else {
      HEAP32[i57 >> 2] = i52;
      break;
     }
    }
   } while (0);
   i58 = i58 + 1 | 0;
   if ((i58 | 0) >= (i27 | 0)) {
    break;
   }
  }
 }
 do {
  if (!i32) {
   i27 = i33 | 0;
   i58 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   if ((i58 | 0) == 0) {
    __ZN7WebCore17CSSRuleSourceDataD2Ev(i33);
    __ZN3WTF8fastFreeEPv(i33);
    break;
   } else {
    HEAP32[i27 >> 2] = i58;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i28 = i33 | 0;
   i32 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i28 >> 2] = i32;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i7 + 4 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i32 = i33 | 0;
   i28 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i32 >> 2] = i28;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i7 = i33 | 0;
   i28 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i7 >> 2] = i28;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i6 >> 2] | 0;
 if ((i33 | 0) == 0) {
  STACKTOP = i3;
  return 1;
 }
 i28 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i28 | 0) > 0) {
  i6 = 0;
  while (1) {
   i7 = HEAP32[i33 + (i6 << 2) >> 2] | 0;
   i32 = i7;
   do {
    if (!((i32 | 0) == (-1 | 0) | (i32 | 0) == 0)) {
     i58 = i7 | 0;
     i27 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i58 >> 2] = i27;
      break;
     }
    }
   } while (0);
   i6 = i6 + 1 | 0;
   if ((i6 | 0) >= (i28 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i33);
 STACKTOP = i3;
 return 1;
}
function __ZNK7WebCore14InspectorStyle30newLineAndWhitespaceDelimitersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 72 | 0;
 if (!(HEAP8[H_BASE + 1160 | 0] | 0)) {
  i11 = __Znwj(4) | 0;
  HEAP32[i6 >> 2] = H_BASE + 16;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i6);
  HEAP32[H_BASE + 1192 >> 2] = i11;
  HEAP8[H_BASE + 1160 | 0] = 1;
 }
 i11 = i1 + 44 | 0;
 if ((HEAP8[i11] & 1) != 0) {
  i12 = i1 + 36 | 0;
  STACKTOP = i2;
  return i12 | 0;
 }
 i6 = i1 + 20 | 0;
 i13 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i14 = 1;
   i15 = 0;
   i16 = 14;
  } else {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 28 >> 2] & 15](i13) | 0)) {
    i14 = 1;
    i15 = 0;
    i16 = 14;
    break;
   }
   i17 = HEAP32[i6 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 15](i5, i17, HEAP32[i1 + 16 >> 2] | 0);
   i17 = i5 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i14 = 1;
    i15 = 0;
    i16 = 14;
    break;
   }
   i19 = i18 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   i19 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i17 = i19 | 0;
     i20 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i19);
      __ZN3WTF8fastFreeEPv(i19);
      break;
     } else {
      HEAP32[i17 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i18 + 36 >> 2] | 0;
   i20 = i19 + 4 | 0;
   if ((i20 | 0) == 0) {
    i14 = 0;
    i15 = i18;
    i16 = 14;
    break;
   }
   i17 = i19 + 12 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i14 = 0;
    i15 = i18;
    i16 = 14;
    break;
   }
   i21 = i8 | 0;
   HEAP32[i21 >> 2] = 0;
   __ZNK7WebCore14InspectorStyle7getTextEPN3WTF6StringE(i1, i8) | 0;
   HEAP8[i11] = 1;
   i22 = HEAP32[HEAP32[H_BASE + 1192 >> 2] >> 2] | 0;
   if ((i22 | 0) != 0) {
    i23 = i22 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   }
   i23 = i9 | 0;
   HEAP32[i23 >> 2] = 0;
   i24 = i9 + 4 | 0;
   HEAP32[i24 >> 2] = 0;
   i25 = i9 + 8 | 0;
   HEAP32[i25 >> 2] = 0;
   i26 = i9 + 12 | 0;
   HEAP8[i26] = 1;
   HEAP32[i9 + 16 >> 2] = 0;
   i27 = i9 + 20 | 0;
   HEAP32[i27 >> 2] = 0;
   i28 = i10 | 0;
   HEAP32[i28 >> 2] = 0;
   i29 = i10 + 4 | 0;
   HEAP32[i29 >> 2] = 0;
   i30 = i10 + 8 | 0;
   HEAP32[i30 >> 2] = 0;
   i31 = i10 + 12 | 0;
   HEAP8[i31] = 1;
   i32 = i10 + 16 | 0;
   HEAP32[i32 >> 2] = 0;
   i33 = i10 + 20 | 0;
   HEAP32[i33 >> 2] = 0;
   i34 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i34 | 0) == 0) {
     i35 = 0;
    } else {
     if ((HEAP32[i34 + 16 >> 2] & 32 | 0) == 0) {
      i35 = HEAP32[i34 + 8 >> 2] | 0;
      break;
     } else {
      i35 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i34) | 0;
      break;
     }
    }
   } while (0);
   L29 : do {
    if ((i19 | 0) > 0) {
     i34 = i20 | 0;
     i36 = i9 + 20 | 0;
     i37 = i10 + 20 | 0;
     i38 = i22;
     i39 = 0;
     i40 = 0;
     i41 = 0;
     while (1) {
      if ((HEAP32[i17 >> 2] | 0) >>> 0 <= i40 >>> 0) {
       break;
      }
      i42 = HEAP32[i34 >> 2] | 0;
      i43 = HEAP32[i42 + (i40 * 20 & -1) + 12 >> 2] | 0;
      if ((i41 | 0) < (i43 | 0)) {
       i44 = i39;
       i45 = i41;
      } else {
       i46 = 1;
       i47 = i38;
       break L29;
      }
      L34 : while (1) {
       i48 = HEAP16[i35 + (i45 << 1) >> 1] | 0;
       do {
        if ((i48 & 65535) >>> 0 < 14 >>> 0) {
         if ((i48 << 16 >> 16 | 0) == 12 | (i48 << 16 >> 16 | 0) == 9) {
          i16 = 59;
          break;
         } else if (!((i48 << 16 >> 16 | 0) == 13 | (i48 << 16 >> 16 | 0) == 10)) {
          break L34;
         }
         L39 : do {
          if (!i44) {
           HEAP16[i4 >> 1] = i48;
           i49 = HEAP32[i25 >> 2] | 0;
           do {
            if ((i49 | 0) != 0) {
             i50 = HEAP32[i23 >> 2] | 0;
             if (i50 >>> 0 >= (HEAP32[i49 + 4 >> 2] | 0) >>> 0) {
              break;
             }
             if ((HEAP32[i24 >> 2] | 0) != 0) {
              break;
             }
             if ((HEAP8[i26] & 1) == 0) {
              HEAP32[i23 >> 2] = i50 + 1;
              HEAP16[(HEAP32[i36 >> 2] | 0) + (i50 << 1) >> 1] = i48;
              break L39;
             }
             if ((i48 & 65535) >>> 0 > 255 >>> 0) {
              break;
             }
             HEAP32[i23 >> 2] = i50 + 1;
             HEAP8[(HEAP32[i27 >> 2] | 0) + i50 | 0] = i48;
             break L39;
            }
           } while (0);
           __ZN3WTF13StringBuilder6appendEPKtj(i9, i4, 1);
          }
         } while (0);
         HEAP32[i28 >> 2] = 0;
         i49 = HEAP32[i29 >> 2] | 0;
         HEAP32[i29 >> 2] = 0;
         do {
          if ((i49 | 0) != 0) {
           i50 = i49 | 0;
           i51 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
           if ((i51 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i49);
            break;
           } else {
            HEAP32[i50 >> 2] = i51;
            break;
           }
          }
         } while (0);
         i49 = HEAP32[i30 >> 2] | 0;
         HEAP32[i30 >> 2] = 0;
         do {
          if ((i49 | 0) != 0) {
           i51 = i49 | 0;
           i50 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
           if ((i50 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i49);
            break;
           } else {
            HEAP32[i51 >> 2] = i50;
            break;
           }
          }
         } while (0);
         HEAP32[i33 >> 2] = 0;
         HEAP8[i31] = 1;
         HEAP32[i32 >> 2] = 0;
         if ((i48 << 16 >> 16 | 0) == 13 | (i48 << 16 >> 16 | 0) == 10) {
          i52 = i44;
         } else {
          i16 = 84;
         }
        } else {
         if (i48 << 16 >> 16 == 32) {
          i16 = 59;
         } else {
          break L34;
         }
        }
       } while (0);
       L64 : do {
        if ((i16 | 0) == 59) {
         i16 = 0;
         HEAP16[i3 >> 1] = i48;
         i49 = HEAP32[i30 >> 2] | 0;
         do {
          if ((i49 | 0) != 0) {
           i50 = HEAP32[i28 >> 2] | 0;
           if (i50 >>> 0 >= (HEAP32[i49 + 4 >> 2] | 0) >>> 0) {
            break;
           }
           if ((HEAP32[i29 >> 2] | 0) != 0) {
            break;
           }
           if ((HEAP8[i31] & 1) == 0) {
            HEAP32[i28 >> 2] = i50 + 1;
            HEAP16[(HEAP32[i37 >> 2] | 0) + (i50 << 1) >> 1] = i48;
            i16 = 84;
            break L64;
           }
           if ((i48 & 65535) >>> 0 > 255 >>> 0) {
            break;
           }
           HEAP32[i28 >> 2] = i50 + 1;
           HEAP8[(HEAP32[i33 >> 2] | 0) + i50 | 0] = i48;
           i16 = 84;
           break L64;
          }
         } while (0);
         __ZN3WTF13StringBuilder6appendEPKtj(i10, i3, 1);
         i16 = 84;
        }
       } while (0);
       if ((i16 | 0) == 84) {
        i16 = 0;
        i52 = i44 | (HEAP32[i23 >> 2] | 0) != 0;
       }
       i48 = i45 + 1 | 0;
       if ((i48 | 0) < (i43 | 0)) {
        i44 = i52;
        i45 = i48;
       } else {
        i46 = 1;
        i47 = i38;
        break L29;
       }
      }
      __ZN3WTF13StringBuilder11shrinkToFitEv(i10);
      i43 = HEAP32[i29 >> 2] | 0;
      if ((i43 | 0) == 0) {
       __ZNK3WTF13StringBuilder11reifyStringEv(i10);
       i48 = HEAP32[i29 >> 2] | 0;
       if ((i48 | 0) == 0) {
        i53 = 0;
       } else {
        i54 = i48;
        i16 = 69;
       }
      } else {
       i54 = i43;
       i16 = 69;
      }
      if ((i16 | 0) == 69) {
       i16 = 0;
       i43 = i54 | 0;
       HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
       i53 = i54;
      }
      do {
       if ((i38 | 0) != 0) {
        i43 = i38 | 0;
        i48 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
        if ((i48 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i38);
         break;
        } else {
         HEAP32[i43 >> 2] = i48;
         break;
        }
       }
      } while (0);
      HEAP32[i28 >> 2] = 0;
      i48 = HEAP32[i29 >> 2] | 0;
      HEAP32[i29 >> 2] = 0;
      do {
       if ((i48 | 0) != 0) {
        i43 = i48 | 0;
        i49 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
        if ((i49 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i48);
         break;
        } else {
         HEAP32[i43 >> 2] = i49;
         break;
        }
       }
      } while (0);
      i48 = HEAP32[i30 >> 2] | 0;
      HEAP32[i30 >> 2] = 0;
      do {
       if ((i48 | 0) != 0) {
        i49 = i48 | 0;
        i43 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
        if ((i43 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i48);
         break;
        } else {
         HEAP32[i49 >> 2] = i43;
         break;
        }
       }
      } while (0);
      HEAP32[i33 >> 2] = 0;
      HEAP8[i31] = 1;
      HEAP32[i32 >> 2] = 0;
      i48 = HEAP32[i42 + (i40 * 20 & -1) + 16 >> 2] | 0;
      i43 = i40 + 2 | 0;
      if ((i43 | 0) < (i19 | 0)) {
       i38 = i53;
       i39 = i44;
       i40 = i43;
       i41 = i48;
      } else {
       i46 = 0;
       i47 = i53;
       break L29;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
     return 0;
    } else {
     i46 = 0;
     i47 = i22;
    }
   } while (0);
   i22 = i1 + 36 | 0;
   __ZN3WTF13StringBuilder11shrinkToFitEv(i9);
   i19 = HEAP32[i24 >> 2] | 0;
   if ((i19 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i9);
    i32 = HEAP32[i24 >> 2] | 0;
    if ((i32 | 0) == 0) {
     i55 = 0;
    } else {
     i56 = i32;
     i16 = 88;
    }
   } else {
    i56 = i19;
    i16 = 88;
   }
   if ((i16 | 0) == 88) {
    i19 = i56 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
    i55 = i56;
   }
   i19 = i22 | 0;
   i32 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = i55;
   do {
    if ((i32 | 0) != 0) {
     i19 = i32 | 0;
     i31 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i19 >> 2] = i31;
      break;
     }
    }
   } while (0);
   do {
    if (i46) {
     __ZN3WTF13StringBuilder11shrinkToFitEv(i10);
     i32 = HEAP32[i29 >> 2] | 0;
     if ((i32 | 0) == 0) {
      __ZNK3WTF13StringBuilder11reifyStringEv(i10);
      i31 = HEAP32[i29 >> 2] | 0;
      if ((i31 | 0) == 0) {
       i57 = 0;
       break;
      } else {
       i58 = i31;
      }
     } else {
      i58 = i32;
     }
     i32 = i58 | 0;
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
     i57 = i58;
    } else {
     if ((i47 | 0) == 0) {
      i57 = 0;
      break;
     }
     i32 = i47 | 0;
     HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
     i57 = i47;
    }
   } while (0);
   i32 = i1 + 40 | 0;
   i31 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i57;
   do {
    if ((i31 | 0) != 0) {
     i32 = i31 | 0;
     i19 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i31);
      break;
     } else {
      HEAP32[i32 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i31 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i31 | 0) != 0) {
     i19 = i31 | 0;
     i32 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i31);
      break;
     } else {
      HEAP32[i19 >> 2] = i32;
      break;
     }
    }
   } while (0);
   i31 = HEAP32[i29 >> 2] | 0;
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
   i31 = HEAP32[i25 >> 2] | 0;
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
   i31 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i31 | 0) != 0) {
     i25 = i31 | 0;
     i32 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i31);
      break;
     } else {
      HEAP32[i25 >> 2] = i32;
      break;
     }
    }
   } while (0);
   do {
    if ((i47 | 0) != 0) {
     i31 = i47 | 0;
     i24 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i47);
      break;
     } else {
      HEAP32[i31 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i24 = HEAP32[i21 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i59 = i18;
    i60 = i22;
    break;
   }
   i31 = i24 | 0;
   i32 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    i59 = i18;
    i60 = i22;
    break;
   } else {
    HEAP32[i31 >> 2] = i32;
    i59 = i18;
    i60 = i22;
    break;
   }
  }
 } while (0);
 do {
  if ((i16 | 0) == 14) {
   i47 = i1 + 36 | 0;
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 8 | 0);
   i57 = i7 | 0;
   i58 = HEAP32[i57 >> 2] | 0;
   HEAP32[i57 >> 2] = 0;
   i10 = i47 | 0;
   i46 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i58;
   do {
    if ((i46 | 0) != 0) {
     i58 = i46 | 0;
     i10 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i46);
      break;
     } else {
      HEAP32[i58 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i46 = HEAP32[i57 >> 2] | 0;
   do {
    if ((i46 | 0) != 0) {
     i22 = i46 | 0;
     i18 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i46);
      break;
     } else {
      HEAP32[i22 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i46 = HEAP32[HEAP32[H_BASE + 1192 >> 2] >> 2] | 0;
   if ((i46 | 0) != 0) {
    i57 = i46 | 0;
    HEAP32[i57 >> 2] = (HEAP32[i57 >> 2] | 0) + 2;
   }
   i57 = i1 + 40 | 0;
   i18 = HEAP32[i57 >> 2] | 0;
   HEAP32[i57 >> 2] = i46;
   if ((i18 | 0) == 0) {
    if (i14) {
     i12 = i47;
    } else {
     i59 = i15;
     i60 = i47;
     break;
    }
    STACKTOP = i2;
    return i12 | 0;
   }
   i46 = i18 | 0;
   i57 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
   if ((i57 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    if (i14) {
     i12 = i47;
    } else {
     i59 = i15;
     i60 = i47;
     break;
    }
    STACKTOP = i2;
    return i12 | 0;
   } else {
    HEAP32[i46 >> 2] = i57;
    if (i14) {
     i12 = i47;
    } else {
     i59 = i15;
     i60 = i47;
     break;
    }
    STACKTOP = i2;
    return i12 | 0;
   }
  }
 } while (0);
 i15 = i59 | 0;
 i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) == 0) {
  __ZN7WebCore17CSSRuleSourceDataD2Ev(i59);
  __ZN3WTF8fastFreeEPv(i59);
  i12 = i60;
  STACKTOP = i2;
  return i12 | 0;
 } else {
  HEAP32[i15 >> 2] = i14;
  i12 = i60;
  STACKTOP = i2;
  return i12 | 0;
 }
 return 0;
}
function __ZN7WebCore14InspectorStyle15setPropertyTextEjRKN3WTF6StringEbPS2_Ri(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i7 + 80 | 0;
 i18 = i7 + 88 | 0;
 i19 = i7 + 96 | 0;
 i20 = i7 + 112 | 0;
 if (!(HEAP8[H_BASE + 1176 | 0] | 0)) {
  i21 = __Znwj(4) | 0;
  HEAP32[i10 >> 2] = H_BASE + 368;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i21, i10);
  HEAP32[H_BASE + 1208 >> 2] = i21;
  HEAP8[H_BASE + 1176 | 0] = 1;
 }
 i21 = i1 + 20 | 0;
 i10 = HEAP32[i21 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 28 >> 2] & 15](i10) | 0)) {
  HEAP32[i6 >> 2] = 8;
  i22 = 0;
  STACKTOP = i7;
  return i22 | 0;
 }
 __ZNK3WTF6String15stripWhiteSpaceEv(i11, i3);
 i10 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i11 = (HEAP32[i10 + 4 >> 2] | 0) == 0;
   i23 = i10 | 0;
   i24 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i24 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    if (i11) {
     break;
    }
   } else {
    HEAP32[i23 >> 2] = i24;
    if (i11) {
     break;
    }
   }
   __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i12, 0);
   i11 = HEAP32[i12 >> 2] | 0;
   __ZN7WebCore17CSSRuleSourceData6createENS0_4TypeE(i13, 1);
   i24 = i13 | 0;
   i23 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   i24 = HEAP32[(HEAP32[i21 >> 2] | 0) + 16 >> 2] | 0;
   if ((i24 | 0) == 0) {
    i25 = 0;
   } else {
    i25 = __ZNK7WebCore13CSSStyleSheet13ownerDocumentEv(i24) | 0;
   }
   __ZN7WebCoreL15createCSSParserEPNS_8DocumentE(i14, i25);
   i24 = HEAP32[i14 >> 2] | 0;
   i26 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i26 | 0) == 0) {
     i27 = 0;
    } else {
     i28 = i26 | 0;
     i29 = HEAP32[i28 >> 2] | 0;
     i30 = i29 + 2 | 0;
     HEAP32[i28 >> 2] = i29 + 4;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      i27 = i26;
      break;
     } else {
      HEAP32[i28 >> 2] = i30;
      i27 = i26;
      break;
     }
    }
   } while (0);
   i26 = HEAP32[HEAP32[H_BASE + 1208 >> 2] >> 2] | 0;
   i30 = (i26 | 0) == 0;
   if (!i30) {
    i28 = i26 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
   }
   i28 = (i27 | 0) == 0;
   if (!i28) {
    i29 = i27 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
   }
   if (!i30) {
    i29 = i26 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
   }
   if (!i28) {
    i29 = i27 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
   }
   do {
    if (!i30) {
     i29 = i26 | 0;
     i31 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = i31 + 2;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i29 >> 2] = i31;
      break;
     }
    }
   } while (0);
   if (!i28) {
    i31 = i27 | 0;
    i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
    if ((i29 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i27);
     i32 = HEAP32[i31 >> 2] | 0;
    } else {
     HEAP32[i31 >> 2] = i29;
     i32 = i29;
    }
    HEAP32[i31 >> 2] = i32 + 2;
   }
   if (!i30) {
    i31 = i26 | 0;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
   }
   i31 = i16 | 0;
   HEAP32[i31 >> 2] = i27;
   if (!i28) {
    i29 = i27 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
   }
   HEAP32[i16 + 4 >> 2] = H_BASE + 240;
   i29 = i16 + 8 | 0;
   HEAP32[i29 >> 2] = i26;
   do {
    if (i30) {
     HEAP32[i16 + 12 >> 2] = H_BASE + 112;
    } else {
     i33 = i26 | 0;
     i34 = HEAP32[i33 >> 2] | 0;
     HEAP32[i33 >> 2] = i34 + 2;
     HEAP32[i16 + 12 >> 2] = H_BASE + 112;
     if ((i34 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i33 >> 2] = i34;
      break;
     }
    }
   } while (0);
   do {
    if (!i28) {
     i34 = i27 | 0;
     i33 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i34 >> 2] = i33;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS0_INS0_INS_6StringEPKcEES1_EES3_EcvS1_Ev(i15, i16);
   i33 = i17 | 0;
   HEAP32[i33 >> 2] = i23;
   i34 = (i23 | 0) == 0;
   if (!i34) {
    i35 = i23 | 0;
    HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
   }
   i35 = HEAP32[i1 + 16 >> 2] | 0;
   __ZN7WebCore9CSSParser16parseDeclarationEPNS_22MutableStylePropertiesERKN3WTF6StringENS3_10PassRefPtrINS_17CSSRuleSourceDataEEEPNS_18StyleSheetContentsE(i24, i11, i15, i17, HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 80 >> 2] & 15](i35) | 0) + 8 >> 2] | 0) | 0;
   i35 = HEAP32[i33 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i33 = i35 | 0;
     i36 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i36 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i35);
      __ZN3WTF8fastFreeEPv(i35);
      break;
     } else {
      HEAP32[i33 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i35 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i36 = i35 | 0;
     i33 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i35);
      break;
     } else {
      HEAP32[i36 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i35 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i33 = i35 | 0;
     i36 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i36 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i35);
      break;
     } else {
      HEAP32[i33 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i35 = HEAP32[i31 >> 2] | 0;
   do {
    if ((i35 | 0) != 0) {
     i29 = i35 | 0;
     i36 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i36 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i35);
      break;
     } else {
      HEAP32[i29 >> 2] = i36;
      break;
     }
    }
   } while (0);
   do {
    if (!i30) {
     i35 = i26 | 0;
     i31 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i35 >> 2] = i31;
      break;
     }
    }
   } while (0);
   do {
    if (!i28) {
     i31 = i27 | 0;
     i35 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
     if ((i35 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i31 >> 2] = i35;
      break;
     }
    }
   } while (0);
   do {
    if (!i30) {
     i35 = i26 | 0;
     i31 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i35 >> 2] = i31;
      break;
     }
    }
   } while (0);
   do {
    if (!i28) {
     i26 = i27 | 0;
     i30 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i26 >> 2] = i30;
      break;
     }
    }
   } while (0);
   if ((i24 | 0) != 0) {
    __ZN7WebCore9CSSParserD1Ev(i24);
    __ZdlPv(i24);
   }
   i28 = HEAP32[i23 + 36 >> 2] | 0;
   i30 = HEAP32[i28 + 12 >> 2] | 0;
   do {
    if (i30 >>> 0 < 2 >>> 0) {
     HEAP32[i6 >> 2] = 12;
     i37 = 1;
    } else {
     i26 = _llvm_uadd_with_overflow_i32(i30 | 0, -1 | 0) | 0;
     if (!tempRet0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
      return 0;
     }
     if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i28 + 4 >> 2] | 0) + (i26 * 20 & -1) >> 2] | 0, HEAP32[HEAP32[H_BASE + 1208 >> 2] >> 2] | 0) | 0) {
      i37 = 0;
      break;
     }
     HEAP32[i6 >> 2] = 12;
     i37 = 1;
    }
   } while (0);
   do {
    if (!i34) {
     i28 = i23 | 0;
     i30 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i23);
      __ZN3WTF8fastFreeEPv(i23);
      break;
     } else {
      HEAP32[i28 >> 2] = i30;
      break;
     }
    }
   } while (0);
   do {
    if ((i11 | 0) != 0) {
     i23 = i11 | 0;
     i34 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i34 | 0) != 0) {
      HEAP32[i23 >> 2] = i34;
      break;
     }
     if ((HEAP32[i11 + 4 >> 2] & 4 | 0) == 0) {
      __ZN7WebCore24ImmutableStylePropertiesD1Ev(i11);
      __ZN3WTF8fastFreeEPv(i11);
      break;
     } else {
      __ZN7WebCore22MutableStylePropertiesD1Ev(i11);
      __ZN3WTF8fastFreeEPv(i11);
      break;
     }
    }
   } while (0);
   if ((i37 | 0) == 1) {
    i22 = 0;
   } else {
    break;
   }
   STACKTOP = i7;
   return i22 | 0;
  }
 } while (0);
 i37 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i37 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 28 >> 2] & 15](i37) | 0)) {
    break;
   }
   i27 = HEAP32[i21 >> 2] | 0;
   i15 = i1 + 16 | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i27 >> 2] | 0) + 20 >> 2] & 15](i9, i27, HEAP32[i15 >> 2] | 0);
   i27 = i9 | 0;
   i17 = HEAP32[i27 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i16 = i17 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   i32 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i27 = i32 | 0;
     i14 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i32);
      __ZN3WTF8fastFreeEPv(i32);
      break;
     } else {
      HEAP32[i27 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i32 = i18 | 0;
   HEAP32[i32 >> 2] = 0;
   do {
    if (__ZNK7WebCore14InspectorStyle7getTextEPN3WTF6StringE(i1, i18) | 0) {
     i14 = i19 | 0;
     HEAP32[i14 >> 2] = 0;
     i27 = i19 + 4 | 0;
     HEAP32[i27 >> 2] = 0;
     i25 = i19 + 8 | 0;
     HEAP32[i25 >> 2] = 0;
     __ZNK7WebCore14InspectorStyle21populateAllPropertiesEPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEE(i1, i19) | 0;
     __ZN7WebCore24InspectorStyleTextEditorC1EPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEES6_RKNS1_6StringERKNSt3__14pairIS7_S7_EE(i20, i19, i1 + 24 | 0, i18, __ZNK7WebCore14InspectorStyle30newLineAndWhitespaceDelimitersEv(i1) | 0);
     do {
      if (i4) {
       if ((HEAP32[i25 >> 2] | 0) >>> 0 <= i2 >>> 0) {
        HEAP32[i6 >> 2] = 1;
        i38 = 0;
        break;
       }
       i13 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i2 * 28 & -1) + 24 >> 2] | 0;
       if ((i13 | 0) != 0) {
        i12 = i13 | 0;
        HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
       }
       i12 = i5 | 0;
       i10 = HEAP32[i12 >> 2] | 0;
       HEAP32[i12 >> 2] = i13;
       do {
        if ((i10 | 0) != 0) {
         i13 = i10 | 0;
         i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
         if ((i12 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i10);
          break;
         } else {
          HEAP32[i13 >> 2] = i12;
          break;
         }
        }
       } while (0);
       __ZN7WebCore24InspectorStyleTextEditor15replacePropertyEjRKN3WTF6StringE(i20, i2, i3);
       i39 = 119;
      } else {
       __ZN7WebCore24InspectorStyleTextEditor14insertPropertyEjRKN3WTF6StringEj(i20, i2, i3, __ZNK7WebCore11SourceRange6lengthEv(i17 + 16 | 0) | 0);
       i39 = 119;
      }
     } while (0);
     if ((i39 | 0) == 119) {
      HEAP32[i8 >> 2] = 0;
      i10 = HEAP32[i21 >> 2] | 0;
      i38 = FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i10 >> 2] | 0) + 44 >> 2] & 7](i10, HEAP32[i15 >> 2] | 0, i20 + 8 | 0, i8) | 0;
     }
     i10 = HEAP32[i20 + 16 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i12 = i10 | 0;
       i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
       if ((i13 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i10);
        break;
       } else {
        HEAP32[i12 >> 2] = i13;
        break;
       }
      }
     } while (0);
     i10 = HEAP32[i20 + 12 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i13 = i10 | 0;
       i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i10);
        break;
       } else {
        HEAP32[i13 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i10 = HEAP32[i20 + 8 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i12 = i10 | 0;
       i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
       if ((i13 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i10);
        break;
       } else {
        HEAP32[i12 >> 2] = i13;
        break;
       }
      }
     } while (0);
     if ((HEAP32[i25 >> 2] | 0) != 0) {
      __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6shrinkEj(i19, 0);
     }
     i10 = HEAP32[i14 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i40 = i38;
      break;
     }
     HEAP32[i14 >> 2] = 0;
     HEAP32[i27 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i10);
     i40 = i38;
    } else {
     HEAP32[i6 >> 2] = 8;
     i40 = 0;
    }
   } while (0);
   i15 = HEAP32[i32 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i10 = i15 | 0;
     i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i10 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i15 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore17CSSRuleSourceDataD2Ev(i17);
    __ZN3WTF8fastFreeEPv(i17);
    i22 = i40;
    STACKTOP = i7;
    return i22 | 0;
   } else {
    HEAP32[i16 >> 2] = i15;
    i22 = i40;
    STACKTOP = i7;
    return i22 | 0;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = 8;
 i22 = 0;
 STACKTOP = i7;
 return i22 | 0;
}
function __ZN7WebCore19InspectorStyleSheet26buildObjectForSelectorListEPNS_12CSSStyleRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 160 | 0;
 i26 = i4 + 168 | 0;
 i27 = i4 + 176 | 0;
 L1 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 15](i2) | 0) {
   i28 = HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0;
   i29 = __ZN7WebCore12CSSStyleRule5styleEv(i3) | 0;
   FUNCTION_TABLE_viii[i28 & 15](i22, i2, i29);
   i29 = i22 | 0;
   i28 = HEAP32[i29 >> 2] | 0;
   HEAP32[i29 >> 2] = 0;
   __ZNK7WebCore12CSSStyleRule12selectorTextEv(i23, i3);
   if ((i28 | 0) == 0) {
    i30 = 35;
    break;
   }
   i29 = HEAP32[i2 + 32 >> 2] | 0;
   if (!(HEAP8[H_BASE + 1168 | 0] | 0)) {
    i31 = __ZN3WTF10fastMallocEj(4) | 0;
    __ZN3WTF6StringC1EPKc(i18, H_BASE + 192 | 0);
    __ZN7WebCore17RegularExpressionC1ERKN3WTF6StringENS1_19TextCaseSensitivityENS_13MultilineModeE(i31, i18, 0, 1);
    i32 = HEAP32[i18 >> 2] | 0;
    do {
     if ((i32 | 0) != 0) {
      i33 = i32 | 0;
      i34 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
      if ((i34 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i32);
       break;
      } else {
       HEAP32[i33 >> 2] = i34;
       break;
      }
     }
    } while (0);
    HEAP32[H_BASE + 1200 >> 2] = i31;
    HEAP8[H_BASE + 1168 | 0] = 1;
   }
   i32 = __ZN3WTF10fastMallocEj(24) | 0;
   i34 = i32;
   __ZN9Inspector18InspectorArrayBaseC2Ev(i32);
   HEAP32[i32 >> 2] = H_BASE + 920;
   i33 = i28 + 32 | 0;
   i35 = HEAP32[i33 >> 2] | 0;
   if ((i35 | 0) == 0) {
    i36 = i34;
    i37 = i28;
    i38 = 0;
    break;
   }
   i39 = i28 + 24 | 0;
   i40 = i20 | 0;
   i41 = i32 + 12 | 0;
   i42 = i32 + 20 | 0;
   i43 = i32 + 16 | 0;
   i32 = i41;
   i44 = i41;
   i41 = i17 | 0;
   i45 = i21 | 0;
   i46 = i19 | 0;
   i47 = 0;
   while (1) {
    i48 = (HEAP32[i39 >> 2] | 0) + (i47 << 3) | 0;
    i49 = HEAP32[i48 >> 2] | 0;
    __ZNK3WTF6String9substringEjj(i19, i29, i49, __ZNK7WebCore11SourceRange6lengthEv(i48) | 0);
    i48 = HEAP32[H_BASE + 1200 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i20, H_BASE + 1184 | 0);
    __ZN7WebCore7replaceERN3WTF6StringERKNS_17RegularExpressionERKS1_(i19, i48, i20);
    i48 = HEAP32[i40 >> 2] | 0;
    do {
     if ((i48 | 0) != 0) {
      i49 = i48 | 0;
      i50 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
      if ((i50 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i48);
       break;
      } else {
       HEAP32[i49 >> 2] = i50;
       break;
      }
     }
    } while (0);
    __ZNK3WTF6String15stripWhiteSpaceEv(i21, i19);
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i17, i21);
    i48 = HEAP32[i42 >> 2] | 0;
    if ((i48 | 0) == (HEAP32[i43 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i32, i48 + 1 | 0);
     i50 = (HEAP32[i44 >> 2] | 0) + (HEAP32[i42 >> 2] << 2) | 0;
     i49 = HEAP32[i41 >> 2] | 0;
     HEAP32[i41 >> 2] = 0;
     HEAP32[i50 >> 2] = i49;
    } else {
     i49 = (HEAP32[i44 >> 2] | 0) + (i48 << 2) | 0;
     i48 = HEAP32[i41 >> 2] | 0;
     HEAP32[i41 >> 2] = 0;
     HEAP32[i49 >> 2] = i48;
    }
    HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 1;
    i48 = HEAP32[i41 >> 2] | 0;
    do {
     if ((i48 | 0) != 0) {
      i49 = i48 + 4 | 0;
      i50 = i49 | 0;
      i51 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
      if ((i51 | 0) != 0) {
       HEAP32[i50 >> 2] = i51;
       break;
      }
      i51 = i49 - 4 | 0;
      if ((i51 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 63](i51);
     }
    } while (0);
    i48 = HEAP32[i45 >> 2] | 0;
    do {
     if ((i48 | 0) != 0) {
      i51 = i48 | 0;
      i49 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
      if ((i49 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i48);
       break;
      } else {
       HEAP32[i51 >> 2] = i49;
       break;
      }
     }
    } while (0);
    i48 = HEAP32[i46 >> 2] | 0;
    do {
     if ((i48 | 0) != 0) {
      i49 = i48 | 0;
      i51 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
      if ((i51 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i48);
       break;
      } else {
       HEAP32[i49 >> 2] = i51;
       break;
      }
     }
    } while (0);
    i47 = i47 + 1 | 0;
    if (i47 >>> 0 >= i35 >>> 0) {
     i36 = i34;
     i37 = i28;
     i38 = 0;
     break L1;
    }
    if ((HEAP32[i33 >> 2] | 0) >>> 0 <= i47 >>> 0) {
     break;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else {
   __ZNK7WebCore12CSSStyleRule12selectorTextEv(i23, i3);
   i30 = 35;
  }
 } while (0);
 do {
  if ((i30 | 0) == 35) {
   i21 = __ZN3WTF10fastMallocEj(24) | 0;
   i17 = i21;
   __ZN9Inspector18InspectorArrayBaseC2Ev(i21);
   HEAP32[i21 >> 2] = H_BASE + 920;
   i19 = HEAP32[(HEAP32[i3 + 16 >> 2] | 0) + 12 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i36 = i17;
    i37 = 0;
    i38 = 1;
    break;
   }
   i20 = i21 + 12 | 0;
   i18 = i21 + 20 | 0;
   i22 = i21 + 16 | 0;
   i21 = i20;
   i47 = i20;
   i20 = i16 | 0;
   i33 = i24 | 0;
   i28 = i25 | 0;
   i34 = i19;
   while (1) {
    __ZN3WTF6StringC1EPKc(i25, H_BASE + 1184 | 0);
    __ZNK7WebCore11CSSSelector12selectorTextERKN3WTF6StringE(i24, i34, i25);
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i16, i24);
    i19 = HEAP32[i18 >> 2] | 0;
    if ((i19 | 0) == (HEAP32[i22 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i21, i19 + 1 | 0);
     i35 = (HEAP32[i47 >> 2] | 0) + (HEAP32[i18 >> 2] << 2) | 0;
     i46 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = 0;
     HEAP32[i35 >> 2] = i46;
    } else {
     i46 = (HEAP32[i47 >> 2] | 0) + (i19 << 2) | 0;
     i19 = HEAP32[i20 >> 2] | 0;
     HEAP32[i20 >> 2] = 0;
     HEAP32[i46 >> 2] = i19;
    }
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
    i19 = HEAP32[i20 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i46 = i19 + 4 | 0;
      i35 = i46 | 0;
      i45 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
      if ((i45 | 0) != 0) {
       HEAP32[i35 >> 2] = i45;
       break;
      }
      i45 = i46 - 4 | 0;
      if ((i45 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 4 >> 2] & 63](i45);
     }
    } while (0);
    i19 = HEAP32[i33 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i45 = i19 | 0;
      i46 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
      if ((i46 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i19);
       break;
      } else {
       HEAP32[i45 >> 2] = i46;
       break;
      }
     }
    } while (0);
    i19 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i19 | 0) == 0) {
      i52 = i34;
     } else {
      i46 = i19 | 0;
      i45 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
      if ((i45 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i19);
       i52 = i34;
       break;
      } else {
       HEAP32[i46 >> 2] = i45;
       i52 = i34;
       break;
      }
     }
    } while (0);
    while (1) {
     i53 = HEAP8[i52 + 2 | 0] | 0;
     i52 = i52 + 8 | 0;
     if ((i53 & 2) != 0) {
      break;
     }
    }
    i19 = (i53 & 1) != 0 ? 0 : i52;
    if ((i19 | 0) == 0) {
     i36 = i17;
     i37 = 0;
     i38 = 1;
     break;
    } else {
     i34 = i19;
    }
   }
  }
 } while (0);
 __ZN9Inspector15InspectorObject6createEv(i15);
 i52 = HEAP32[i15 >> 2] | 0;
 i15 = (i36 | 0) == 0;
 if (!i15) {
  i53 = i36 + 4 | 0;
  HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
 }
 i53 = i52 | 0;
 HEAP32[i13 >> 2] = H_BASE + 392;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 i13 = i14 | 0;
 HEAP32[i13 >> 2] = i36;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i53, i12, i14);
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 + 4 | 0;
   i24 = i13 | 0;
   i16 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i24 >> 2] = i16;
    break;
   }
   i16 = i13 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
  }
 } while (0);
 i14 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i12 = i14 | 0;
   i16 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i12 >> 2] = i16;
    break;
   }
  }
 } while (0);
 HEAP32[i11 >> 2] = H_BASE + 408;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i23);
 i11 = i8 | 0;
 i14 = i9 | 0;
 i9 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i11 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i53, i10, i8);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 + 4 | 0;
   i9 = i11 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i9 >> 2] = i16;
    break;
   }
   i16 = i11 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
  }
 } while (0);
 i8 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 + 4 | 0;
   i16 = i14 | 0;
   i11 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i16 >> 2] = i11;
    break;
   }
   i11 = i14 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i8 = i52;
 do {
  if ((i52 | 0) != 0) {
   i11 = i52 + 4 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i10 + 1;
   i11 = i52 + 4 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i11 >> 2] = i10;
    break;
   }
   i10 = i11 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
  }
 } while (0);
 do {
  if (!i38) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 31](i27, i2);
   i52 = i27 | 0;
   __ZN7WebCoreL22buildSourceRangeObjectERKNS_11SourceRangeEPN3WTF6VectorIjLj0ENS3_15CrashOnOverflowEEE(i26, i37 + 8 | 0, HEAP32[i52 >> 2] | 0);
   HEAP32[i6 >> 2] = H_BASE + 208;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
   i10 = i7 | 0;
   i11 = i26 | 0;
   i14 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i10 >> 2] = i14;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i53, i5, i7);
   i14 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i10 = i14 + 4 | 0;
     i11 = i10 | 0;
     i16 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i11 >> 2] = i16;
      break;
     }
     i16 = i10 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    }
   } while (0);
   i14 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i16 = i14 | 0;
     i10 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i16 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i52 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i10 = i14 + 8 | 0;
   if ((HEAP32[i10 >> 2] | 0) != 0) {
    HEAP32[i10 >> 2] = 0;
   }
   i10 = i14 | 0;
   i16 = HEAP32[i10 >> 2] | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i10 >> 2] = 0;
    HEAP32[i14 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i16);
   }
   __ZN3WTF8fastFreeEPv(i14);
  }
 } while (0);
 HEAP32[i1 >> 2] = i8;
 i8 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i23 = i8 | 0;
   i1 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i23 >> 2] = i1;
    break;
   }
  }
 } while (0);
 do {
  if (!i15) {
   i8 = i36 + 4 | 0;
   i1 = i8 | 0;
   i23 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) != 0) {
    HEAP32[i1 >> 2] = i23;
    break;
   }
   i23 = i8 - 4 | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 63](i23);
  }
 } while (0);
 if (i38) {
  STACKTOP = i4;
  return;
 }
 i38 = i37 | 0;
 i36 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
 if ((i36 | 0) == 0) {
  __ZN7WebCore17CSSRuleSourceDataD2Ev(i37);
  __ZN3WTF8fastFreeEPv(i37);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i38 >> 2] = i36;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheet28buildObjectForStyleSheetInfoEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
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
 i22 = i3 + 144 | 0;
 i23 = i3 + 152 | 0;
 i24 = i3 + 160 | 0;
 i25 = i3 + 168 | 0;
 i26 = i3 + 176 | 0;
 i27 = i3 + 184 | 0;
 i28 = i3 + 192 | 0;
 i29 = i3 + 200 | 0;
 i30 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i30 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i31 = __ZNK7WebCore13CSSStyleSheet13ownerDocumentEv(i30) | 0;
 if ((i31 | 0) == 0) {
  i32 = 0;
 } else {
  i32 = HEAP32[i31 + 332 >> 2] | 0;
 }
 __ZN9Inspector15InspectorObject6createEv(i24);
 i31 = i25 | 0;
 i33 = HEAP32[i24 >> 2] | 0;
 HEAP32[i31 >> 2] = i33;
 i24 = i26 | 0;
 i34 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i24 >> 2] = i34;
 if ((i34 | 0) == 0) {
  i35 = i33;
 } else {
  i33 = i34 | 0;
  HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 2;
  i35 = HEAP32[i31 >> 2] | 0;
 }
 HEAP32[i23 >> 2] = H_BASE + 456;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i22, i23);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i21, i26);
 i26 = i20 | 0;
 i23 = i21 | 0;
 i21 = HEAP32[i23 >> 2] | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i26 >> 2] = i21;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i35 | 0, i22, i20);
 i20 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i26 = i20 + 4 | 0;
   i35 = i26 | 0;
   i21 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i35 >> 2] = i21;
    break;
   }
   i21 = i26 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
  }
 } while (0);
 i20 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i23 = i20 + 4 | 0;
   i21 = i23 | 0;
   i26 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i26 | 0) != 0) {
    HEAP32[i21 >> 2] = i26;
    break;
   }
   i26 = i23 - 4 | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 63](i26);
  }
 } while (0);
 i20 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i22 = i20 | 0;
   i26 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i22 >> 2] = i26;
    break;
   }
  }
 } while (0);
 i20 = __ZN9Inspector11TypeBuilder3CSS19CSSStyleSheetHeader7BuilderILi1EE9setOriginENS1_16StyleSheetOrigin4EnumE(i25, HEAP32[i2 + 20 >> 2] | 0) | 0;
 i25 = (HEAP8[i30 + 13 | 0] & 1) != 0;
 i26 = i20 | 0;
 i22 = HEAP32[i26 >> 2] | 0;
 HEAP32[i19 >> 2] = H_BASE + 320;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
 __ZN9Inspector19InspectorBasicValue6createEb(i17, i25);
 i25 = i16 | 0;
 i19 = i17 | 0;
 i17 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 HEAP32[i25 >> 2] = i17;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i22, i18, i16);
 i16 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i25 = i16 + 4 | 0;
   i22 = i25 | 0;
   i17 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i22 >> 2] = i17;
    break;
   }
   i17 = i25 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
  }
 } while (0);
 i16 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i19 = i16 + 4 | 0;
   i17 = i19 | 0;
   i25 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i25 | 0) != 0) {
    HEAP32[i17 >> 2] = i25;
    break;
   }
   i25 = i19 - 4 | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 63](i25);
  }
 } while (0);
 i16 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i18 = i16 | 0;
   i25 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i18 >> 2] = i25;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore19InspectorStyleSheet8finalURLEv(i27, i2);
 i16 = HEAP32[i26 >> 2] | 0;
 HEAP32[i15 >> 2] = H_BASE + 336;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i27);
 i15 = i12 | 0;
 i25 = i13 | 0;
 i13 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i15 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i14, i12);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 + 4 | 0;
   i16 = i15 | 0;
   i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i16 >> 2] = i13;
    break;
   }
   i13 = i15 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 i12 = HEAP32[i25 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i25 = i12 + 4 | 0;
   i13 = i25 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i13 >> 2] = i15;
    break;
   }
   i15 = i25 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
  }
 } while (0);
 i12 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i14 = i12 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i12 = i28 | 0;
 i15 = HEAP32[i30 + 16 >> 2] | 0;
 HEAP32[i12 >> 2] = i15;
 if ((i15 | 0) != 0) {
  i30 = i15 | 0;
  HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
 }
 i30 = HEAP32[i26 >> 2] | 0;
 HEAP32[i11 >> 2] = H_BASE + 352;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i28);
 i28 = i8 | 0;
 i11 = i9 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i28 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i30, i10, i8);
 i8 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i28 = i8 + 4 | 0;
   i30 = i28 | 0;
   i9 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i30 >> 2] = i9;
    break;
   }
   i9 = i28 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 + 4 | 0;
   i9 = i11 | 0;
   i28 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i9 >> 2] = i28;
    break;
   }
   i28 = i11 - 4 | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 63](i28);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i28 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i28;
    break;
   }
  }
 } while (0);
 __ZN7WebCore18InspectorPageAgent7frameIdEPNS_5FrameE(i29, HEAP32[i2 + 8 >> 2] | 0, i32);
 i32 = HEAP32[i26 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 360;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i29);
 i7 = i4 | 0;
 i26 = i5 | 0;
 i5 = HEAP32[i26 >> 2] | 0;
 HEAP32[i26 >> 2] = 0;
 HEAP32[i7 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i32, i6, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i32 = i7 | 0;
   i5 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i32 >> 2] = i5;
    break;
   }
   i5 = i7 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i4 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i26 = i4 + 4 | 0;
   i5 = i26 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i26 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i20 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i20 = i4 + 4 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
 }
 i20 = HEAP32[i29 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i29 = i20 | 0;
   i7 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i29 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i12 = i20 | 0;
   i7 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i12 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i27 = i20 | 0;
   i7 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i27 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i24 = i20 | 0;
   i7 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i24 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i31 = i20 + 4 | 0;
   i7 = i31 | 0;
   i24 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i7 >> 2] = i24;
    break;
   }
   i24 = i31 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 63](i24);
  }
 } while (0);
 HEAP32[i1 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14InspectorStyle19buildObjectForStyleEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
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
 i22 = i3 + 144 | 0;
 i23 = i3 + 152 | 0;
 i24 = i3 + 160 | 0;
 i25 = i3 + 168 | 0;
 i26 = i3 + 176 | 0;
 __ZNK7WebCore14InspectorStyle19styleWithPropertiesEv(i19, i2);
 i27 = i19 | 0;
 i19 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = 0;
 i27 = i2 + 8 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   if ((HEAP32[i28 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore14InspectorCSSId15asProtocolValueIN9Inspector11TypeBuilder3CSS10CSSStyleIdEEEN3WTF10PassRefPtrIT_EEv(i20, i27);
   HEAP32[i17 >> 2] = H_BASE + 64;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
   i29 = i18 | 0;
   i30 = i20 | 0;
   i31 = HEAP32[i30 >> 2] | 0;
   HEAP32[i30 >> 2] = 0;
   HEAP32[i29 >> 2] = i31;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i19 | 0, i16, i18);
   i31 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i31 | 0) != 0) {
     i29 = i31 + 4 | 0;
     i30 = i29 | 0;
     i32 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     if ((i32 | 0) != 0) {
      HEAP32[i30 >> 2] = i32;
      break;
     }
     i32 = i29 - 4 | 0;
     if ((i32 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 63](i32);
    }
   } while (0);
   i31 = HEAP32[i16 >> 2] | 0;
   if ((i31 | 0) == 0) {
    break;
   }
   i32 = i31 | 0;
   i29 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i29 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i31);
    break;
   } else {
    HEAP32[i32 >> 2] = i29;
    break;
   }
  }
 } while (0);
 i16 = i2 + 16 | 0;
 i18 = HEAP32[i16 >> 2] | 0;
 i20 = HEAP32[(HEAP32[i18 >> 2] | 0) + 40 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i22, H_BASE + 504 | 0);
 FUNCTION_TABLE_viii[i20 & 15](i21, i18, i22);
 i18 = i19 | 0;
 HEAP32[i15 >> 2] = H_BASE + 504;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i13, i21);
 i15 = i12 | 0;
 i20 = i13 | 0;
 i13 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i15 >> 2] = i13;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i18, i14, i12);
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 + 4 | 0;
   i13 = i15 | 0;
   i17 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i13 >> 2] = i17;
    break;
   }
   i17 = i15 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
  }
 } while (0);
 i12 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i20 = i12 + 4 | 0;
   i17 = i20 | 0;
   i15 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i17 >> 2] = i15;
    break;
   }
   i15 = i20 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
  }
 } while (0);
 i12 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i14 = i12 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i21 = i12 | 0;
   i15 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i21 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i22 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i22 = i12 | 0;
   i15 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i22 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i16 >> 2] | 0;
 i15 = HEAP32[(HEAP32[i12 >> 2] | 0) + 40 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i24, H_BASE + 496 | 0);
 FUNCTION_TABLE_viii[i15 & 15](i23, i12, i24);
 HEAP32[i11 >> 2] = H_BASE + 496;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i23);
 i11 = i8 | 0;
 i12 = i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i11 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i18, i10, i8);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 + 4 | 0;
   i9 = i11 | 0;
   i15 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i9 >> 2] = i15;
    break;
   }
   i15 = i11 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
  }
 } while (0);
 i8 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = i8 + 4 | 0;
   i15 = i12 | 0;
   i11 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i15 >> 2] = i11;
    break;
   }
   i11 = i12 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i23 = i8 | 0;
   i11 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i23 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i24 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i24 = i8 | 0;
   i11 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i24 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i8 = i2 + 20 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 15](i2) | 0)) {
    break;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 15](i7, i11, HEAP32[i16 >> 2] | 0);
   i11 = i7 | 0;
   i24 = HEAP32[i11 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   i23 = i24 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   i10 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i10);
      __ZN3WTF8fastFreeEPv(i10);
      break;
     } else {
      HEAP32[i11 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i8 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 48 >> 2] & 31](i26, i10);
   i10 = i26 | 0;
   __ZN7WebCoreL22buildSourceRangeObjectERKNS_11SourceRangeEPN3WTF6VectorIjLj0ENS3_15CrashOnOverflowEEE(i25, i24 + 16 | 0, HEAP32[i10 >> 2] | 0);
   HEAP32[i5 >> 2] = H_BASE + 208;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
   i12 = i6 | 0;
   i11 = i25 | 0;
   i15 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i12 >> 2] = i15;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i18, i4, i6);
   i15 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i12 = i15 + 4 | 0;
     i11 = i12 | 0;
     i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i11 >> 2] = i9;
      break;
     }
     i9 = i12 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
    }
   } while (0);
   i15 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i9 = i15 | 0;
     i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i9 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[i10 >> 2] | 0;
   if ((i15 | 0) == 0) {
    HEAP32[i1 >> 2] = i19;
   } else {
    i12 = i15 + 8 | 0;
    if ((HEAP32[i12 >> 2] | 0) != 0) {
     HEAP32[i12 >> 2] = 0;
    }
    i12 = i15 | 0;
    i9 = HEAP32[i12 >> 2] | 0;
    if ((i9 | 0) != 0) {
     HEAP32[i12 >> 2] = 0;
     HEAP32[i15 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i9);
    }
    __ZN3WTF8fastFreeEPv(i15);
    HEAP32[i1 >> 2] = i19;
   }
   i15 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore17CSSRuleSourceDataD2Ev(i24);
    __ZN3WTF8fastFreeEPv(i24);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i23 >> 2] = i15;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i19;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19InspectorStyleSheet19buildObjectForStyleEPNS_19CSSStyleDeclarationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 15](i2) | 0) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 15](i16, i2, i3);
  i22 = i16 | 0;
  i16 = HEAP32[i22 >> 2] | 0;
  HEAP32[i22 >> 2] = 0;
  i23 = i16;
 } else {
  i23 = 0;
 }
 i16 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 63](i2, i3) | 0;
 do {
  if ((i16 | 0) == -1) {
   HEAP32[i17 >> 2] = 0;
   HEAP32[i17 + 4 >> 2] = 0;
  } else {
   i3 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i3 | 0) == 0) {
    HEAP32[i17 >> 2] = 0;
    HEAP32[i17 + 4 >> 2] = i16;
    break;
   }
   i22 = i3 | 0;
   i24 = HEAP32[i22 >> 2] | 0;
   i25 = i24 + 2 | 0;
   HEAP32[i17 >> 2] = i3;
   HEAP32[i22 >> 2] = i24 + 4;
   HEAP32[i17 + 4 >> 2] = i16;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i22 >> 2] = i25;
    break;
   }
  }
 } while (0);
 i16 = i17 | 0;
 i25 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i25 | 0) == 0) {
   i26 = 12;
  } else {
   if ((HEAP32[i25 + 4 >> 2] | 0) == 0) {
    i26 = 12;
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 15](i18, i2, i17);
   i22 = i18 | 0;
   i3 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   __ZNK7WebCore14InspectorStyle19buildObjectForStyleEv(i19, i3);
   i22 = i19 | 0;
   i24 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   do {
    if ((i23 | 0) != 0) {
     i22 = i20 | 0;
     HEAP32[i22 >> 2] = 0;
     do {
      if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2, i20) | 0) {
       i27 = HEAP32[i23 + 16 >> 2] | 0;
       __ZNK3WTF6String9substringEjj(i21, i20, i27, (HEAP32[i23 + 20 >> 2] | 0) - i27 | 0);
       HEAP32[i8 >> 2] = H_BASE + 248;
       __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
       __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i21);
       i27 = i5 | 0;
       i28 = i6 | 0;
       i29 = HEAP32[i28 >> 2] | 0;
       HEAP32[i28 >> 2] = 0;
       HEAP32[i27 >> 2] = i29;
       __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i24 | 0, i7, i5);
       i29 = HEAP32[i27 >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         i27 = i29 + 4 | 0;
         i30 = i27 | 0;
         i31 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
         if ((i31 | 0) != 0) {
          HEAP32[i30 >> 2] = i31;
          break;
         }
         i31 = i27 - 4 | 0;
         if ((i31 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 63](i31);
        }
       } while (0);
       i29 = HEAP32[i28 >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         i31 = i29 + 4 | 0;
         i27 = i31 | 0;
         i30 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
         if ((i30 | 0) != 0) {
          HEAP32[i27 >> 2] = i30;
          break;
         }
         i30 = i31 - 4 | 0;
         if ((i30 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 63](i30);
        }
       } while (0);
       i29 = HEAP32[i7 >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         i28 = i29 | 0;
         i30 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
         if ((i30 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i29);
          break;
         } else {
          HEAP32[i28 >> 2] = i30;
          break;
         }
        }
       } while (0);
       i29 = HEAP32[i21 >> 2] | 0;
       if ((i29 | 0) == 0) {
        break;
       }
       i30 = i29 | 0;
       i28 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
       if ((i28 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i29);
        break;
       } else {
        HEAP32[i30 >> 2] = i28;
        break;
       }
      }
     } while (0);
     i28 = HEAP32[i22 >> 2] | 0;
     if ((i28 | 0) == 0) {
      break;
     }
     i30 = i28 | 0;
     i29 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i30 >> 2] = i29;
      break;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i24;
   if ((i3 | 0) == 0) {
    break;
   }
   i29 = i3 + 4 | 0;
   i30 = i29 | 0;
   i28 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
   if ((i28 | 0) != 0) {
    HEAP32[i30 >> 2] = i28;
    break;
   }
   i28 = i29 - 4 | 0;
   if ((i28 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 63](i28);
  }
 } while (0);
 if ((i26 | 0) == 12) {
  __ZN9Inspector15InspectorObject6createEv(i15);
  i26 = HEAP32[i15 >> 2] | 0;
  i15 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN9Inspector18InspectorArrayBaseC2Ev(i15);
  HEAP32[i15 >> 2] = H_BASE + 840;
  i21 = i26 | 0;
  HEAP32[i13 >> 2] = H_BASE + 272;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
  i13 = i14 | 0;
  HEAP32[i13 >> 2] = i15;
  __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i21, i12, i14);
  i14 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i13 = i14 + 4 | 0;
    i15 = i13 | 0;
    i7 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) != 0) {
     HEAP32[i15 >> 2] = i7;
     break;
    }
    i7 = i13 - 4 | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
   }
  } while (0);
  i14 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i12 = i14 | 0;
    i7 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i12 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i14 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN9Inspector18InspectorArrayBaseC2Ev(i14);
  HEAP32[i14 >> 2] = H_BASE + 760;
  HEAP32[i10 >> 2] = H_BASE + 288;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = i14;
  __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i21, i9, i11);
  i11 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i10 = i11 + 4 | 0;
    i21 = i10 | 0;
    i14 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    if ((i14 | 0) != 0) {
     HEAP32[i21 >> 2] = i14;
     break;
    }
    i14 = i10 - 4 | 0;
    if ((i14 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
   }
  } while (0);
  i11 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i9 = i11 | 0;
    i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i9 >> 2] = i14;
     break;
    }
   }
  } while (0);
  i11 = i26;
  do {
   if ((i26 | 0) != 0) {
    i14 = i26 + 4 | 0;
    i9 = HEAP32[i14 >> 2] | 0;
    HEAP32[i14 >> 2] = i9 + 1;
    i14 = i26 + 4 | 0;
    if ((i9 | 0) != 0) {
     HEAP32[i14 >> 2] = i9;
     break;
    }
    i9 = i14 - 4 | 0;
    if ((i9 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
   }
  } while (0);
  HEAP32[i1 >> 2] = i11;
 }
 i11 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i16 = i11 | 0;
   i1 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i16 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i23 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = i23 | 0;
 i1 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore17CSSRuleSourceDataD2Ev(i23);
  __ZN3WTF8fastFreeEPv(i23);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i11 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCoreL22buildSourceRangeObjectERKNS_11SourceRangeEPN3WTF6VectorIjLj0ENS3_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore18ContentSearchUtils22textPositionFromOffsetEjRKN3WTF6VectorIjLj0ENS1_15CrashOnOverflowEEE(i22, HEAP32[i2 >> 2] | 0, i3);
 __ZN7WebCore18ContentSearchUtils22textPositionFromOffsetEjRKN3WTF6VectorIjLj0ENS1_15CrashOnOverflowEEE(i23, HEAP32[i2 + 4 >> 2] | 0, i3);
 __ZN9Inspector15InspectorObject6createEv(i21);
 i3 = HEAP32[i21 >> 2] | 0;
 i21 = HEAP32[i22 >> 2] | 0;
 i2 = i3 | 0;
 HEAP32[i20 >> 2] = H_BASE + 72;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i19, i20);
 __ZN9Inspector19InspectorBasicValue6createEd(i18, +(i21 | 0));
 i21 = i17 | 0;
 i20 = i18 | 0;
 i18 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 HEAP32[i21 >> 2] = i18;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i2, i19, i17);
 i17 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i21 = i17 + 4 | 0;
   i18 = i21 | 0;
   i24 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i18 >> 2] = i24;
    break;
   }
   i24 = i21 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 63](i24);
  }
 } while (0);
 i17 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i20 = i17 + 4 | 0;
   i24 = i20 | 0;
   i21 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i24 >> 2] = i21;
    break;
   }
   i21 = i20 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
  }
 } while (0);
 i17 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i19 = i17 | 0;
   i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i19 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i22 + 4 >> 2] | 0;
 HEAP32[i16 >> 2] = H_BASE + 88;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i15, i16);
 __ZN9Inspector19InspectorBasicValue6createEd(i14, +(i17 | 0));
 i17 = i13 | 0;
 i16 = i14 | 0;
 i14 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i17 >> 2] = i14;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i2, i15, i13);
 i13 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i17 = i13 + 4 | 0;
   i14 = i17 | 0;
   i22 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i14 >> 2] = i22;
    break;
   }
   i22 = i17 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
  }
 } while (0);
 i13 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i16 = i13 + 4 | 0;
   i22 = i16 | 0;
   i17 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i22 >> 2] = i17;
    break;
   }
   i17 = i16 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
  }
 } while (0);
 i13 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i15 = i13 | 0;
   i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i15 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i23 >> 2] | 0;
 HEAP32[i12 >> 2] = H_BASE + 104;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i11, i12);
 __ZN9Inspector19InspectorBasicValue6createEd(i10, +(i13 | 0));
 i13 = i9 | 0;
 i12 = i10 | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i13 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i2, i11, i9);
 i9 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 + 4 | 0;
   i10 = i13 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i10 >> 2] = i17;
    break;
   }
   i17 = i13 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 + 4 | 0;
   i17 = i12 | 0;
   i13 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i17 >> 2] = i13;
    break;
   }
   i13 = i12 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 i9 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i11 = i9 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i11 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i23 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = H_BASE + 120;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +(i9 | 0));
 i9 = i5 | 0;
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i2, i7, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 4 | 0;
   i2 = i9 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i2 >> 2] = i6;
    break;
   }
   i6 = i9 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 4 | 0;
   i6 = i8 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i6 >> 2] = i9;
    break;
   }
   i9 = i8 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i5 = i3;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 + 4 | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i7 + 1;
   i9 = i3 + 4 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i9 >> 2] = i7;
    break;
   }
   i7 = i9 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 HEAP32[i1 >> 2] = i5;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore14InspectorStyle26buildArrayForComputedStyleEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
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
 i14 = __ZN3WTF10fastMallocEj(24) | 0;
 i15 = i14;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i14);
 HEAP32[i14 >> 2] = H_BASE + 680;
 i16 = i13 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i13 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i13 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 __ZNK7WebCore14InspectorStyle21populateAllPropertiesEPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEE(i2, i13) | 0;
 i2 = HEAP32[i16 >> 2] | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 i20 = i2 + (i19 * 28 & -1) | 0;
 do {
  if ((i19 | 0) == 0) {
   HEAP32[i1 >> 2] = i15;
  } else {
   i21 = i12 | 0;
   i22 = i11 | 0;
   i23 = i8 | 0;
   i24 = i9 | 0;
   i25 = i10 | 0;
   i26 = i7 | 0;
   i27 = i4 | 0;
   i28 = i5 | 0;
   i29 = i6 | 0;
   i30 = i14 + 12 | 0;
   i31 = i14 + 20 | 0;
   i32 = i14 + 16 | 0;
   i33 = i30;
   i34 = i30;
   i30 = i2;
   while (1) {
    __ZN9Inspector15InspectorObject6createEv(i12);
    i35 = HEAP32[i21 >> 2] | 0;
    i36 = i35 | 0;
    HEAP32[i22 >> 2] = H_BASE + 256;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i30 | 0);
    i37 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = 0;
    HEAP32[i23 >> 2] = i37;
    __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i36, i10, i8);
    i37 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i37 | 0) != 0) {
      i38 = i37 + 4 | 0;
      i39 = i38 | 0;
      i40 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
      if ((i40 | 0) != 0) {
       HEAP32[i39 >> 2] = i40;
       break;
      }
      i40 = i38 - 4 | 0;
      if ((i40 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] & 63](i40);
     }
    } while (0);
    i37 = HEAP32[i24 >> 2] | 0;
    do {
     if ((i37 | 0) != 0) {
      i40 = i37 + 4 | 0;
      i38 = i40 | 0;
      i39 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
      if ((i39 | 0) != 0) {
       HEAP32[i38 >> 2] = i39;
       break;
      }
      i39 = i40 - 4 | 0;
      if ((i39 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 4 >> 2] & 63](i39);
     }
    } while (0);
    i37 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i37 | 0) != 0) {
      i39 = i37 | 0;
      i40 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
      if ((i40 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i37);
       break;
      } else {
       HEAP32[i39 >> 2] = i40;
       break;
      }
     }
    } while (0);
    HEAP32[i26 >> 2] = H_BASE + 264;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
    __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i30 + 4 | 0);
    i37 = HEAP32[i28 >> 2] | 0;
    HEAP32[i28 >> 2] = 0;
    HEAP32[i27 >> 2] = i37;
    __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i36, i6, i4);
    i37 = HEAP32[i27 >> 2] | 0;
    do {
     if ((i37 | 0) != 0) {
      i40 = i37 + 4 | 0;
      i39 = i40 | 0;
      i38 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
      if ((i38 | 0) != 0) {
       HEAP32[i39 >> 2] = i38;
       break;
      }
      i38 = i40 - 4 | 0;
      if ((i38 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 63](i38);
     }
    } while (0);
    i37 = HEAP32[i28 >> 2] | 0;
    do {
     if ((i37 | 0) != 0) {
      i36 = i37 + 4 | 0;
      i38 = i36 | 0;
      i40 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
      if ((i40 | 0) != 0) {
       HEAP32[i38 >> 2] = i40;
       break;
      }
      i40 = i36 - 4 | 0;
      if ((i40 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] & 63](i40);
     }
    } while (0);
    i37 = HEAP32[i29 >> 2] | 0;
    do {
     if ((i37 | 0) != 0) {
      i40 = i37 | 0;
      i36 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
      if ((i36 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i37);
       break;
      } else {
       HEAP32[i40 >> 2] = i36;
       break;
      }
     }
    } while (0);
    i37 = (i35 | 0) == 0;
    if (!i37) {
     i36 = i35 + 4 | 0;
     i40 = HEAP32[i36 >> 2] | 0;
     HEAP32[i36 >> 2] = i40 + 1;
     i36 = i35 + 4 | 0;
     do {
      if ((i40 | 0) == 0) {
       i38 = i36 - 4 | 0;
       if ((i38 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 63](i38);
      } else {
       HEAP32[i36 >> 2] = i40;
      }
     } while (0);
     i40 = i35 + 4 | 0;
     HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
    }
    i40 = i35 | 0;
    i36 = HEAP32[i31 >> 2] | 0;
    if ((i36 | 0) == (HEAP32[i32 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i33, i36 + 1 | 0);
     HEAP32[(HEAP32[i34 >> 2] | 0) + (HEAP32[i31 >> 2] << 2) >> 2] = i40;
    } else {
     HEAP32[(HEAP32[i34 >> 2] | 0) + (i36 << 2) >> 2] = i40;
    }
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
    do {
     if (!i37) {
      i40 = i35 + 4 | 0;
      i36 = i40 | 0;
      i38 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
      if ((i38 | 0) != 0) {
       HEAP32[i36 >> 2] = i38;
       break;
      }
      i38 = i40 - 4 | 0;
      if ((i38 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 63](i38);
     }
    } while (0);
    i30 = i30 + 28 | 0;
    if ((i30 | 0) == (i20 | 0)) {
     break;
    }
   }
   i30 = (HEAP32[i18 >> 2] | 0) == 0;
   HEAP32[i1 >> 2] = i15;
   if (i30) {
    break;
   }
   __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6shrinkEj(i13, 0);
  }
 } while (0);
 i13 = HEAP32[i16 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i16 >> 2] = 0;
 HEAP32[i17 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL16buildMediaObjectEPKNS_9MediaListENS_15MediaListSourceERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 if ((i3 | 0) == 2) {
  i21 = 18;
 } else if ((i3 | 0) == 0) {
  i21 = 20;
 } else if ((i3 | 0) == 3) {
  i21 = 19;
 } else {
  i21 = 21;
 }
 __ZN9Inspector15InspectorObject6createEv(i18);
 i3 = i19 | 0;
 i22 = HEAP32[i18 >> 2] | 0;
 HEAP32[i3 >> 2] = i22;
 i18 = i2 + 4 | 0;
 __ZNK7WebCore13MediaQuerySet9mediaTextEv(i20, HEAP32[i18 >> 2] | 0);
 HEAP32[i17 >> 2] = H_BASE + 408;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i16, i17);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i15, i20);
 i17 = i14 | 0;
 i2 = i15 | 0;
 i15 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i17 >> 2] = i15;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i22 | 0, i16, i14);
 i14 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i17 = i14 + 4 | 0;
   i22 = i17 | 0;
   i15 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i22 >> 2] = i15;
    break;
   }
   i15 = i17 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
  }
 } while (0);
 i14 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i2 = i14 + 4 | 0;
   i15 = i2 | 0;
   i17 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i15 >> 2] = i17;
    break;
   }
   i17 = i2 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
  }
 } while (0);
 i14 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i16 = i14 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i16 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[(__ZN9Inspector11TypeBuilder3CSS8CSSMedia7BuilderILi1EE9setSourceENS2_6Source4EnumE(i19, i21) | 0) >> 2] | 0;
 if ((i14 | 0) != 0) {
  i21 = i14 + 4 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 }
 i21 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i20 = i21 | 0;
   i19 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i20 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i21 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i3 = i21 + 4 | 0;
   i19 = i3 | 0;
   i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i19 >> 2] = i20;
    break;
   }
   i20 = i3 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
  }
 } while (0);
 i21 = HEAP32[i4 >> 2] | 0;
 if ((i21 | 0) == 0) {
  i23 = i1 | 0;
  HEAP32[i23 >> 2] = i14;
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i21 + 4 >> 2] | 0) == 0) {
  i23 = i1 | 0;
  HEAP32[i23 >> 2] = i14;
  STACKTOP = i5;
  return;
 }
 i21 = i14 | 0;
 HEAP32[i13 >> 2] = H_BASE + 336;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i11, i4);
 i4 = i10 | 0;
 i13 = i11 | 0;
 i11 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i4 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i21, i12, i10);
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 + 4 | 0;
   i11 = i4 | 0;
   i20 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) != 0) {
    HEAP32[i11 >> 2] = i20;
    break;
   }
   i20 = i4 - 4 | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 + 4 | 0;
   i20 = i13 | 0;
   i4 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i20 >> 2] = i4;
    break;
   }
   i4 = i13 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 i10 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i12 = i10 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] >> 1;
 HEAP32[i9 >> 2] = H_BASE + 432;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i8, i9);
 __ZN9Inspector19InspectorBasicValue6createEd(i7, +(i10 | 0));
 i10 = i6 | 0;
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i21, i8, i6);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 4 | 0;
   i21 = i10 | 0;
   i7 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i21 >> 2] = i7;
    break;
   }
   i7 = i10 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 + 4 | 0;
   i7 = i9 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i7 >> 2] = i10;
    break;
   }
   i10 = i9 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i23 = i1 | 0;
  HEAP32[i23 >> 2] = i14;
  STACKTOP = i5;
  return;
 }
 i8 = i6 | 0;
 i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i23 = i1 | 0;
  HEAP32[i23 >> 2] = i14;
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i8 >> 2] = i10;
  i23 = i1 | 0;
  HEAP32[i23 >> 2] = i14;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheet24buildObjectForStyleSheetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
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
 i20 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i20 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCoreL13asCSSRuleListEPNS_13CSSStyleSheetE(i16, i20);
 i20 = i16 | 0;
 i16 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 __ZN9Inspector15InspectorObject6createEv(i15);
 i20 = HEAP32[i15 >> 2] | 0;
 i15 = i17 | 0;
 i21 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i15 >> 2] = i21;
 if ((i21 | 0) != 0) {
  i22 = i21 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
 }
 i22 = i20 | 0;
 HEAP32[i10 >> 2] = H_BASE + 456;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i17);
 i17 = i7 | 0;
 i10 = i8 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i17 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i22, i9, i7);
 i7 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i17 = i7 + 4 | 0;
   i8 = i17 | 0;
   i21 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i8 >> 2] = i21;
    break;
   }
   i21 = i17 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 4 | 0;
   i21 = i10 | 0;
   i17 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i21 >> 2] = i17;
    break;
   }
   i17 = i10 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 | 0;
   i17 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i9 >> 2] = i17;
    break;
   }
  }
 } while (0);
 __ZN7WebCore19InspectorStyleSheet21buildArrayForRuleListEPNS_11CSSRuleListE(i18, i2, i16);
 HEAP32[i5 >> 2] = H_BASE + 312;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 i5 = i6 | 0;
 i7 = i18 | 0;
 i18 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i5 >> 2] = i18;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i22, i4, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 4 | 0;
   i18 = i5 | 0;
   i7 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i18 >> 2] = i7;
    break;
   }
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = i20;
 i7 = (i20 | 0) == 0;
 if (!i7) {
  i4 = i20 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 | 0;
   i5 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i15 >> 2] = i5;
    break;
   }
  }
 } while (0);
 do {
  if (!i7) {
   i4 = i20 + 4 | 0;
   i5 = i4 | 0;
   i15 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i5 >> 2] = i15;
    break;
   }
   i15 = i4 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
  }
 } while (0);
 i20 = i19 | 0;
 HEAP32[i20 >> 2] = 0;
 do {
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2, i19) | 0) {
   HEAP32[i14 >> 2] = H_BASE + 408;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i13, i14);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i12, i19);
   i7 = i11 | 0;
   i15 = i12 | 0;
   i4 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i7 >> 2] = i4;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i22, i13, i11);
   i4 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 + 4 | 0;
     i5 = i7 | 0;
     i18 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i5 >> 2] = i18;
      break;
     }
     i18 = i7 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
    }
   } while (0);
   i4 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i18 = i4 + 4 | 0;
     i7 = i18 | 0;
     i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) != 0) {
      HEAP32[i7 >> 2] = i5;
      break;
     }
     i5 = i18 - 4 | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
    }
   } while (0);
   i4 = HEAP32[i13 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i15 = i4 | 0;
   i5 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i15 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i6;
 i6 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i20 = i6 | 0;
   i1 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i20 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if ((i16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 12 >> 2] & 63](i16);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19InspectorStyleSheet7addRuleERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 56 | 0;
 i11 = i4 + 64 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 80 | 0;
 i14 = i1 + 16 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((i15 | 0) == 0) {
  HEAP32[i3 >> 2] = 9;
  i16 = 0;
  STACKTOP = i4;
  return i16 | 0;
 }
 i17 = __ZNK7WebCore13CSSStyleSheet13ownerDocumentEv(i15) | 0;
 i15 = i6 | 0;
 HEAP32[i15 >> 2] = 0;
 __ZN7WebCoreL15createCSSParserEPNS_8DocumentE(i7, i17);
 i17 = HEAP32[i7 >> 2] | 0;
 __ZN7WebCore9CSSParser13parseSelectorERKN3WTF6StringERNS_15CSSSelectorListE(i17, i2, i6);
 if ((i17 | 0) != 0) {
  __ZN7WebCore9CSSParserD1Ev(i17);
  __ZdlPv(i17);
 }
 i17 = (HEAP32[i15 >> 2] | 0) == 0;
 __ZN7WebCore15CSSSelectorListD1Ev(i6);
 if (i17) {
  HEAP32[i3 >> 2] = 12;
  i16 = 0;
  STACKTOP = i4;
  return i16 | 0;
 }
 i17 = i8 | 0;
 HEAP32[i17 >> 2] = 0;
 do {
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 63](i1, i8) | 0) {
   i6 = i9 | 0;
   HEAP32[i6 >> 2] = 0;
   i15 = i9 + 4 | 0;
   HEAP32[i15 >> 2] = 0;
   i7 = i9 + 8 | 0;
   HEAP32[i7 >> 2] = 0;
   i18 = i9 + 12 | 0;
   HEAP8[i18] = 1;
   HEAP32[i9 + 16 >> 2] = 0;
   i19 = i9 + 20 | 0;
   HEAP32[i19 >> 2] = 0;
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i9, i8);
   i20 = HEAP32[i14 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 1184 | 0);
   __ZN7WebCore13CSSStyleSheet7addRuleERKN3WTF6StringES4_Ri(i20, i2, i10, i3) | 0;
   i20 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i21 = i20 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i21 >> 2] = i22;
      break;
     }
    }
   } while (0);
   do {
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     i20 = (__ZNK7WebCore13CSSStyleSheet6lengthEv(HEAP32[i14 >> 2] | 0) | 0) - 1 | 0;
     i22 = __ZN7WebCore17InspectorCSSAgent14asCSSStyleRuleEPNS_7CSSRuleE(__ZN7WebCore13CSSStyleSheet4itemEj(HEAP32[i14 >> 2] | 0, i20) | 0) | 0;
     if ((i22 | 0) == 0) {
      i21 = HEAP32[i14 >> 2] | 0;
      i23 = i11 | 0;
      HEAP32[i23 >> 2] = 0;
      __ZN7WebCore13CSSStyleSheet10deleteRuleEjRi(i21, i20, i23);
      HEAP32[i3 >> 2] = 12;
      i24 = 0;
      break;
     }
     i23 = HEAP32[i6 >> 2] | 0;
     L26 : do {
      if ((i23 | 0) != 0) {
       HEAP8[i5] = 10;
       i20 = HEAP32[i7 >> 2] | 0;
       do {
        if ((i20 | 0) != 0) {
         if (i23 >>> 0 >= (HEAP32[i20 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         if ((HEAP32[i15 >> 2] | 0) != 0) {
          break;
         }
         i21 = (HEAP8[i18] & 1) == 0;
         HEAP32[i6 >> 2] = i23 + 1;
         if (i21) {
          HEAP16[(HEAP32[i9 + 20 >> 2] | 0) + (i23 << 1) >> 1] = 10;
          break L26;
         } else {
          HEAP8[(HEAP32[i19 >> 2] | 0) + i23 | 0] = 10;
          break L26;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i9, i5, 1);
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i9, i2);
     __ZN3WTF13StringBuilder6appendEPKhj(i9, H_BASE + 488 | 0, 3);
     __ZN3WTF13StringBuilder11shrinkToFitEv(i9);
     i23 = HEAP32[i15 >> 2] | 0;
     if ((i23 | 0) == 0) {
      __ZNK3WTF13StringBuilder11reifyStringEv(i9);
      i20 = HEAP32[i15 >> 2] | 0;
      i21 = i12 | 0;
      HEAP32[i21 >> 2] = i20;
      if ((i20 | 0) == 0) {
       i25 = i21;
      } else {
       i26 = i20;
       i27 = 27;
      }
     } else {
      HEAP32[i12 >> 2] = i23;
      i26 = i23;
      i27 = 27;
     }
     if ((i27 | 0) == 27) {
      i23 = i26 | 0;
      HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
      i25 = i12 | 0;
     }
     i23 = i13 | 0;
     HEAP32[i23 >> 2] = 0;
     __ZN7WebCore19InspectorStyleSheet7setTextERKN3WTF6StringERi(i1, i12, i23) | 0;
     i23 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i20 = i23 | 0;
       i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
       if ((i21 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i23);
        break;
       } else {
        HEAP32[i20 >> 2] = i21;
        break;
       }
      }
     } while (0);
     i23 = HEAP32[i1 + 68 >> 2] | 0;
     if ((i23 | 0) == 0) {
      i24 = i22;
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] & 31](i23, i1);
     i24 = i22;
    } else {
     i24 = 0;
    }
   } while (0);
   i19 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i6 = i19 | 0;
     i18 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i6 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i15 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i28 = i24;
    break;
   }
   i7 = i19 | 0;
   i18 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    i28 = i24;
    break;
   } else {
    HEAP32[i7 >> 2] = i18;
    i28 = i24;
    break;
   }
  } else {
   HEAP32[i3 >> 2] = 8;
   i28 = 0;
  }
 } while (0);
 i3 = HEAP32[i17 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i16 = i28;
  STACKTOP = i4;
  return i16 | 0;
 }
 i17 = i3 | 0;
 i24 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
 if ((i24 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i16 = i28;
  STACKTOP = i4;
  return i16 | 0;
 } else {
  HEAP32[i17 >> 2] = i24;
  i16 = i28;
  STACKTOP = i4;
  return i16 | 0;
 }
 return 0;
}
function __ZNK7WebCore14InspectorStyle18longhandPropertiesERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 40 | 0;
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i1 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 _memset(i5 | 0, 0, 20) | 0;
 i12 = i2 + 16 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 15](i2) | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i5 | 0;
 i13 = i7 | 0;
 i14 = i3 | 0;
 i3 = i5 | 0;
 i15 = i6;
 i16 = i6 | 0;
 i17 = i5 + 8 | 0;
 i18 = 0;
 i19 = 0;
 i20 = 0;
 i21 = 0;
 while (1) {
  i22 = HEAP32[i12 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i22 >> 2] | 0) + 32 >> 2] & 15](i6, i22, i18);
  L6 : do {
   if ((i21 | 0) == 0) {
    i23 = 12;
   } else {
    i22 = HEAP32[i17 >> 2] | 0;
    i24 = HEAP32[i16 >> 2] | 0;
    i25 = HEAP32[i24 + 16 >> 2] | 0;
    if (i25 >>> 0 > 127 >>> 0) {
     i26 = i25 >>> 7;
    } else {
     i26 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i24) | 0;
    }
    i24 = (i26 >>> 23) + ~i26 | 0;
    i25 = i24 << 12 ^ i24;
    i24 = i25 >>> 7 ^ i25;
    i25 = i24 << 2 ^ i24;
    i24 = i25 >>> 20 ^ i25 | 1;
    i25 = i26;
    i27 = 0;
    while (1) {
     i28 = i25 & i22;
     i29 = i21 + (i28 << 2) | 0;
     i30 = HEAP32[i29 >> 2] | 0;
     i31 = i30;
     if ((i31 | 0) == 0) {
      i23 = 12;
      break L6;
     } else if ((i31 | 0) != (-1 | 0)) {
      if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i30, HEAP32[i16 >> 2] | 0) | 0) {
       break;
      }
     }
     i30 = (i27 | 0) == 0 ? i24 : i27;
     i25 = i30 + i28 | 0;
     i27 = i30;
    }
    if ((i29 | 0) == 0) {
     i23 = 12;
    } else {
     i32 = i19;
     i33 = i20;
    }
   }
  } while (0);
  L18 : do {
   if ((i23 | 0) == 12) {
    i23 = 0;
    i27 = HEAP32[i12 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i27 >> 2] | 0) + 48 >> 2] & 15](i7, i27, i6);
    i27 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i13 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0;
    i25 = HEAP32[i13 >> 2] | 0;
    do {
     if ((i25 | 0) == 0) {
      if (!i27) {
       i32 = i19;
       i33 = i20;
       break L18;
      }
     } else {
      i24 = i25 | 0;
      i22 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
      if ((i22 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i25);
       if (i27) {
        break;
       } else {
        i32 = i19;
        i33 = i20;
        break L18;
       }
      } else {
       HEAP32[i24 >> 2] = i22;
       if (i27) {
        break;
       } else {
        i32 = i19;
        i33 = i20;
        break L18;
       }
      }
     }
    } while (0);
    __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i8, i3, i6, i6);
    if ((i19 | 0) != (HEAP32[i10 >> 2] | 0)) {
     i27 = HEAP32[i16 >> 2] | 0;
     HEAP32[i20 + (i19 << 2) >> 2] = i27;
     if ((i27 | 0) != 0) {
      i25 = i27 | 0;
      HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
     }
     i25 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
     HEAP32[i11 >> 2] = i25;
     i32 = i25;
     i33 = i20;
     break;
    }
    i25 = i19 + 1 | 0;
    do {
     if (i20 >>> 0 > i6 >>> 0) {
      i23 = 23;
     } else {
      if ((i20 + (i19 << 2) | 0) >>> 0 <= i6 >>> 0) {
       i23 = 23;
       break;
      }
      __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i25);
      i27 = HEAP32[i9 >> 2] | 0;
      i34 = i27 + (i15 - i20 >> 2 << 2) | 0;
      i35 = i27;
     }
    } while (0);
    if ((i23 | 0) == 23) {
     i23 = 0;
     __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i25);
     i34 = i6;
     i35 = HEAP32[i9 >> 2] | 0;
    }
    i27 = HEAP32[i11 >> 2] | 0;
    i22 = HEAP32[i34 >> 2] | 0;
    HEAP32[i35 + (i27 << 2) >> 2] = i22;
    if ((i22 | 0) != 0) {
     i24 = i22 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
    }
    i24 = i27 + 1 | 0;
    HEAP32[i11 >> 2] = i24;
    i32 = i24;
    i33 = i35;
   }
  } while (0);
  i24 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i24 | 0) != 0) {
    i27 = i24 | 0;
    i22 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i24);
     break;
    } else {
     HEAP32[i27 >> 2] = i22;
     break;
    }
   }
  } while (0);
  i24 = i18 + 1 | 0;
  i22 = HEAP32[i12 >> 2] | 0;
  i27 = i24 >>> 0 < (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 28 >> 2] & 15](i22) | 0) >>> 0;
  i36 = HEAP32[i2 >> 2] | 0;
  if (i27) {
   i18 = i24;
   i19 = i32;
   i20 = i33;
   i21 = i36;
  } else {
   break;
  }
 }
 if ((i36 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i21 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i21 | 0) > 0) {
  i5 = 0;
  while (1) {
   i33 = HEAP32[i36 + (i5 << 2) >> 2] | 0;
   i20 = i33;
   do {
    if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
     i32 = i33 | 0;
     i19 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      break;
     } else {
      HEAP32[i32 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i5 = i5 + 1 | 0;
   if ((i5 | 0) >= (i21 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i36);
 STACKTOP = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_iii + 30;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iii + 30;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_iii + 30;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_iii + 30;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_iii + 30;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_iii + 30;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_iii + 26;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_iii + 32;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_iii + 28;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_vi + 2;
}
function __ZN7WebCore14InspectorStyle14togglePropertyEjbRi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 40 | 0;
 i11 = i1 + 20 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 28 >> 2] & 15](i12) | 0)) {
  HEAP32[i4 >> 2] = 7;
  i13 = 0;
  STACKTOP = i5;
  return i13 | 0;
 }
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 28 >> 2] & 15](i12) | 0)) {
    break;
   }
   i14 = HEAP32[i11 >> 2] | 0;
   i15 = i1 + 16 | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 15](i7, i14, HEAP32[i15 >> 2] | 0);
   i14 = i7 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i17 = i16 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   i18 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i14 = i18 | 0;
     i19 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i14 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i18 = i8 | 0;
   HEAP32[i18 >> 2] = 0;
   do {
    if (__ZNK7WebCore14InspectorStyle7getTextEPN3WTF6StringE(i1, i8) | 0) {
     i19 = i9 | 0;
     HEAP32[i19 >> 2] = 0;
     i14 = i9 + 4 | 0;
     HEAP32[i14 >> 2] = 0;
     i20 = i9 + 8 | 0;
     HEAP32[i20 >> 2] = 0;
     __ZNK7WebCore14InspectorStyle21populateAllPropertiesEPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEE(i1, i9) | 0;
     do {
      if ((HEAP32[i20 >> 2] | 0) >>> 0 > i2 >>> 0) {
       if ((HEAP8[(HEAP32[i19 >> 2] | 0) + (i2 * 28 & -1) + 21 | 0] & 1 | 0) == (i3 & 1 | 0)) {
        i21 = 1;
        break;
       }
       __ZN7WebCore24InspectorStyleTextEditorC1EPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEES6_RKNS1_6StringERKNSt3__14pairIS7_S7_EE(i10, i9, i1 + 24 | 0, i8, __ZNK7WebCore14InspectorStyle30newLineAndWhitespaceDelimitersEv(i1) | 0);
       if (i3) {
        __ZN7WebCore24InspectorStyleTextEditor15disablePropertyEj(i10, i2);
       } else {
        __ZN7WebCore24InspectorStyleTextEditor14enablePropertyEj(i10, i2);
       }
       HEAP32[i6 >> 2] = 0;
       i22 = HEAP32[i11 >> 2] | 0;
       i23 = FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i22 >> 2] | 0) + 44 >> 2] & 7](i22, HEAP32[i15 >> 2] | 0, i10 + 8 | 0, i6) | 0;
       i22 = HEAP32[i10 + 16 >> 2] | 0;
       do {
        if ((i22 | 0) != 0) {
         i24 = i22 | 0;
         i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
         if ((i25 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i22);
          break;
         } else {
          HEAP32[i24 >> 2] = i25;
          break;
         }
        }
       } while (0);
       i22 = HEAP32[i10 + 12 >> 2] | 0;
       do {
        if ((i22 | 0) != 0) {
         i25 = i22 | 0;
         i24 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
         if ((i24 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i22);
          break;
         } else {
          HEAP32[i25 >> 2] = i24;
          break;
         }
        }
       } while (0);
       i22 = HEAP32[i10 + 8 >> 2] | 0;
       if ((i22 | 0) == 0) {
        i21 = i23;
        break;
       }
       i24 = i22 | 0;
       i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
       if ((i25 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        i21 = i23;
        break;
       } else {
        HEAP32[i24 >> 2] = i25;
        i21 = i23;
        break;
       }
      } else {
       HEAP32[i4 >> 2] = 1;
       i21 = 0;
      }
     } while (0);
     if ((HEAP32[i20 >> 2] | 0) != 0) {
      __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6shrinkEj(i9, 0);
     }
     i25 = HEAP32[i19 >> 2] | 0;
     if ((i25 | 0) == 0) {
      i26 = i21;
      break;
     }
     HEAP32[i19 >> 2] = 0;
     HEAP32[i14 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i25);
     i26 = i21;
    } else {
     HEAP32[i4 >> 2] = 8;
     i26 = 0;
    }
   } while (0);
   i15 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i25 = i15 | 0;
     i24 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i25 >> 2] = i24;
      break;
     }
    }
   } while (0);
   i15 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore17CSSRuleSourceDataD2Ev(i16);
    __ZN3WTF8fastFreeEPv(i16);
    i13 = i26;
    STACKTOP = i5;
    return i13 | 0;
   } else {
    HEAP32[i17 >> 2] = i15;
    i13 = i26;
    STACKTOP = i5;
    return i13 | 0;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = 8;
 i13 = 0;
 STACKTOP = i5;
 return i13 | 0;
}
function __ZN7WebCore19InspectorStyleSheet15setRuleSelectorERKNS_14InspectorCSSIdERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i10 | 0) == 0) {
  HEAP32[i4 >> 2] = 9;
  i11 = 0;
  STACKTOP = i5;
  return i11 | 0;
 }
 i12 = i1 + 64 | 0;
 do {
  if ((HEAP32[i12 >> 2] | 0) == 0) {
   __ZN7WebCoreL13asCSSRuleListEPNS_13CSSStyleSheetE(i8, i10);
   __ZN7WebCore19InspectorStyleSheet16collectFlatRulesEN3WTF10PassRefPtrINS_11CSSRuleListEEEPNS1_6VectorINS1_6RefPtrINS_12CSSStyleRuleEEELj0ENS1_15CrashOnOverflowEEE(i8, i1 + 56 | 0);
   i13 = HEAP32[i8 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 63](i13);
  }
 } while (0);
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if (i8 >>> 0 < (HEAP32[i12 >> 2] | 0) >>> 0) {
   i2 = HEAP32[(HEAP32[i1 + 56 >> 2] | 0) + (i8 << 2) >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i10 = i2 | 0;
   while (1) {
    i14 = i10 + 12 | 0;
    if ((HEAP8[i10 + 8 | 0] & 2) == 0) {
     i15 = 12;
     break;
    }
    i10 = HEAP32[i14 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i15 | 0) == 12) {
     if ((HEAP32[i14 >> 2] | 0) == 0) {
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 15](i1) | 0)) {
      break;
     }
     __ZN7WebCore12CSSStyleRule15setSelectorTextERKN3WTF6StringE(i2, i3);
     i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0;
     i13 = __ZN7WebCore12CSSStyleRule5styleEv(i2) | 0;
     FUNCTION_TABLE_viii[i10 & 15](i9, i1, i13);
     i13 = i9 | 0;
     i10 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i10 | 0) == 0) {
       HEAP32[i4 >> 2] = 8;
       i16 = 0;
      } else {
       i17 = i1 + 32 | 0;
       i18 = HEAP32[HEAP32[i17 >> 2] >> 2] | 0;
       i19 = (i18 | 0) == 0;
       if (i19) {
        i20 = i10;
       } else {
        i21 = i18 | 0;
        HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
        i20 = HEAP32[i13 >> 2] | 0;
       }
       i21 = i20 + 8 | 0;
       i22 = HEAP32[i21 >> 2] | 0;
       i23 = __ZNK7WebCore11SourceRange6lengthEv(i21) | 0;
       do {
        if (i19) {
         i24 = 0;
        } else {
         __ZN3WTF10StringImpl7replaceEjjPS0_(i7, i18, i22, i23, HEAP32[i3 >> 2] | 0);
         i21 = HEAP32[i7 >> 2] | 0;
         i25 = i18 | 0;
         i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
         if ((i26 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i18);
          i24 = i21;
          break;
         } else {
          HEAP32[i25 >> 2] = i26;
          i24 = i21;
          break;
         }
        }
       } while (0);
       i18 = HEAP32[i17 >> 2] | 0;
       HEAP8[i18 + 4 | 0] = 1;
       i23 = (i24 | 0) == 0;
       if (!i23) {
        i22 = i24 | 0;
        HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
       }
       i22 = i18 | 0;
       i19 = HEAP32[i22 >> 2] | 0;
       HEAP32[i22 >> 2] = i24;
       do {
        if ((i19 | 0) != 0) {
         i22 = i19 | 0;
         i21 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
         if ((i21 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i19);
          break;
         } else {
          HEAP32[i22 >> 2] = i21;
          break;
         }
        }
       } while (0);
       HEAP32[i6 >> 2] = 0;
       __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEE5clearEv(i18 + 8 | 0);
       __ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i6);
       i19 = HEAP32[i1 + 68 >> 2] | 0;
       if ((i19 | 0) != 0) {
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 8 >> 2] & 31](i19, i1);
       }
       if (i23) {
        i16 = 1;
        break;
       }
       i19 = i24 | 0;
       i17 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        i16 = 1;
        break;
       } else {
        HEAP32[i19 >> 2] = i17;
        i16 = 1;
        break;
       }
      }
     } while (0);
     i10 = HEAP32[i13 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i11 = i16;
      STACKTOP = i5;
      return i11 | 0;
     }
     i17 = i10 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i10);
      __ZN3WTF8fastFreeEPv(i10);
      i11 = i16;
      STACKTOP = i5;
      return i11 | 0;
     } else {
      HEAP32[i17 >> 2] = i19;
      i11 = i16;
      STACKTOP = i5;
      return i11 | 0;
     }
    }
   } while (0);
   HEAP32[i4 >> 2] = 8;
   i11 = 0;
   STACKTOP = i5;
   return i11 | 0;
  }
 } while (0);
 HEAP32[i4 >> 2] = 8;
 i11 = 0;
 STACKTOP = i5;
 return i11 | 0;
}
function __ZN7WebCore33InspectorStyleSheetForInlineStyleC2EPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_7ElementEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumEPNS_19InspectorStyleSheet8ListenerE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i1 | 0;
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 1184 | 0);
 HEAP32[i1 + 4 >> 2] = 1;
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = H_BASE + 1072;
 HEAP32[i1 + 8 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i13 = i3 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = i5;
 i5 = i9 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i13 = i9 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 28 | 0] = 0;
 _memset(i1 + 36 | 0, 0, 32) | 0;
 HEAP32[i1 + 68 >> 2] = i6;
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP8[i6 + 4 | 0] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i6;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i13;
    break;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = H_BASE + 1e3;
 i12 = i1 + 72 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i12 >> 2] = i4;
 i6 = i1 + 80 | 0;
 i13 = i1 + 84 | 0;
 _memset(i1 + 76 | 0, 0, 13) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = (i1 | 0) == 0;
 if (i2) {
  i14 = i4;
 } else {
  i4 = i1 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  i14 = HEAP32[i12 >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 304 >> 2] & 15](i14) | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 63](i4);
 }
 i14 = __ZN3WTF10fastMallocEj(48) | 0;
 HEAP32[i14 + 4 >> 2] = 1;
 HEAP32[i14 >> 2] = H_BASE + 1144;
 HEAP32[i14 + 8 >> 2] = i1;
 if (!i2) {
  i5 = i1 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAP32[i14 + 12 >> 2] = 0;
 HEAP32[i14 + 16 >> 2] = i4;
 HEAP32[i14 + 20 >> 2] = i11;
 _memset(i14 + 24 | 0, 0, 21) | 0;
 i11 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i14;
 do {
  if ((i11 | 0) != 0) {
   i14 = i11 + 4 | 0;
   i6 = i14 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i6 >> 2] = i4;
    break;
   }
   i4 = i14 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 do {
  if (!i2) {
   i11 = i1 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i11 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i12 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 8 | 0) == 0) {
   i15 = 0;
   i16 = 0;
   i17 = 1;
  } else {
   __ZN3WTF12AtomicString3addEPKh(i8, H_BASE + 480 | 0);
   HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
   i12 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKN3WTF12AtomicStringE(i1, i10) | 0) >> 2] | 0;
   if ((i12 | 0) == 0) {
    i15 = 0;
    i16 = 1;
    i17 = 1;
    break;
   }
   i2 = i12 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 4;
   i15 = i12;
   i16 = 1;
   i17 = 0;
  }
 } while (0);
 i1 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i15;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!(i16 | i17)) {
   i1 = i15 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (!i16) {
  STACKTOP = i7;
  return;
 }
 do {
  if (!i17) {
   i16 = i15 | 0;
   i8 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i16 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i10 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i10 = i15 | 0;
 i17 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i10 >> 2] = i17;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore33InspectorStyleSheetForInlineStyleC1EPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_7ElementEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumEPNS_19InspectorStyleSheet8ListenerE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i1 | 0;
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 1184 | 0);
 HEAP32[i1 + 4 >> 2] = 1;
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = H_BASE + 1072;
 HEAP32[i1 + 8 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i13 = i3 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = i5;
 i5 = i9 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i13 = i9 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 28 | 0] = 0;
 _memset(i1 + 36 | 0, 0, 32) | 0;
 HEAP32[i1 + 68 >> 2] = i6;
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP8[i6 + 4 | 0] = 0;
 HEAP32[i6 + 8 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i6;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i13 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i13;
    break;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = H_BASE + 1e3;
 i12 = i1 + 72 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i12 >> 2] = i4;
 i6 = i1 + 80 | 0;
 i13 = i1 + 84 | 0;
 _memset(i1 + 76 | 0, 0, 13) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = (i1 | 0) == 0;
 if (i2) {
  i14 = i4;
 } else {
  i4 = i1 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  i14 = HEAP32[i12 >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 304 >> 2] & 15](i14) | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 63](i4);
 }
 i14 = __ZN3WTF10fastMallocEj(48) | 0;
 HEAP32[i14 + 4 >> 2] = 1;
 HEAP32[i14 >> 2] = H_BASE + 1144;
 HEAP32[i14 + 8 >> 2] = i1;
 if (!i2) {
  i5 = i1 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAP32[i14 + 12 >> 2] = 0;
 HEAP32[i14 + 16 >> 2] = i4;
 HEAP32[i14 + 20 >> 2] = i11;
 _memset(i14 + 24 | 0, 0, 21) | 0;
 i11 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i14;
 do {
  if ((i11 | 0) != 0) {
   i14 = i11 + 4 | 0;
   i6 = i14 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i6 >> 2] = i4;
    break;
   }
   i4 = i14 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 do {
  if (!i2) {
   i11 = i1 | 0;
   i4 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i11 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i12 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 12 >> 2] & 8 | 0) == 0) {
   i15 = 0;
   i16 = 0;
   i17 = 1;
  } else {
   __ZN3WTF12AtomicString3addEPKh(i8, H_BASE + 480 | 0);
   HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
   i12 = HEAP32[(__ZNK7WebCore7Element12getAttributeERKN3WTF12AtomicStringE(i1, i10) | 0) >> 2] | 0;
   if ((i12 | 0) == 0) {
    i15 = 0;
    i16 = 1;
    i17 = 1;
    break;
   }
   i2 = i12 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 4;
   i15 = i12;
   i16 = 1;
   i17 = 0;
  }
 } while (0);
 i1 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i15;
 do {
  if ((i1 | 0) != 0) {
   i13 = i1 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i13 >> 2] = i8;
    break;
   }
  }
 } while (0);
 do {
  if (!(i16 | i17)) {
   i1 = i15 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (!i16) {
  STACKTOP = i7;
  return;
 }
 do {
  if (!i17) {
   i16 = i15 | 0;
   i8 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i16 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i10 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i10 = i15 | 0;
 i17 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i10 >> 2] = i17;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheet15revalidateStyleEPNS_19CSSStyleDeclarationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 HEAP32[i6 >> 2] = i2;
 i11 = i1 + 28 | 0;
 if ((HEAP8[i11] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i11] = 1;
 i12 = i1 + 64 | 0;
 do {
  if ((HEAP32[i12 >> 2] | 0) == 0) {
   __ZN7WebCoreL13asCSSRuleListEPNS_13CSSStyleSheetE(i5, HEAP32[i1 + 16 >> 2] | 0);
   __ZN7WebCore19InspectorStyleSheet16collectFlatRulesEN3WTF10PassRefPtrINS_11CSSRuleListEEEPNS1_6VectorINS1_6RefPtrINS_12CSSStyleRuleEEELj0ENS1_15CrashOnOverflowEEE(i5, i1 + 56 | 0);
   i13 = HEAP32[i5 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 63](i13);
  }
 } while (0);
 i5 = HEAP32[i12 >> 2] | 0;
 i13 = i1 + 56 | 0;
 i14 = 0;
 while (1) {
  if (i14 >>> 0 >= i5 >>> 0) {
   break;
  }
  if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i14 >>> 0) {
   i15 = 8;
   break;
  }
  i16 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i14 << 2) >> 2] | 0;
  if ((__ZN7WebCore12CSSStyleRule5styleEv(i16) | 0) == (i2 | 0)) {
   i15 = 10;
   break;
  } else {
   i14 = i14 + 1 | 0;
  }
 }
 if ((i15 | 0) == 8) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 do {
  if ((i15 | 0) == 10) {
   __ZNK7WebCore15StyleProperties6asTextEv(i7, HEAP32[(HEAP32[i16 + 16 >> 2] | 0) + 8 >> 2] | 0);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 31](i8, i2);
   i14 = i7 | 0;
   i13 = i8 | 0;
   i12 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i14 >> 2] | 0, HEAP32[i13 >> 2] | 0) | 0;
   i5 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i13 = i5 | 0;
     i17 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i13 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i17 = i5 | 0;
     i13 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i17 >> 2] = i13;
      break;
     }
    }
   } while (0);
   if (i12) {
    break;
   }
   i5 = i1 + 36 | 0;
   __ZN3WTF7HashMapIPN7WebCore19CSSStyleDeclarationENS_6RefPtrINS1_14InspectorStyleEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i4, i5, i6);
   i14 = HEAP32[i4 >> 2] | 0;
   i13 = i5 | 0;
   i17 = i1 + 40 | 0;
   do {
    if ((i14 | 0) != ((HEAP32[i5 >> 2] | 0) + (HEAP32[i17 >> 2] << 3) | 0)) {
     i18 = HEAP32[i14 + 4 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i19 = i18 + 4 | 0;
       i20 = i19 | 0;
       i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
       if ((i21 | 0) != 0) {
        HEAP32[i20 >> 2] = i21;
        break;
       }
       i21 = i19 - 4 | 0;
       if ((i21 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
      }
     } while (0);
     HEAP32[i14 >> 2] = -1;
     i18 = i1 + 52 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     i18 = i1 + 48 | 0;
     i21 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     HEAP32[i18 >> 2] = i21;
     i18 = HEAP32[i17 >> 2] | 0;
     if (!((i21 * 6 & -1 | 0) < (i18 | 0) & (i18 | 0) > 8)) {
      break;
     }
     __ZN3WTF9HashTableIPN7WebCore19CSSStyleDeclarationENS_12KeyValuePairIS3_NS_6RefPtrINS1_14InspectorStyleEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i13, (i18 | 0) / 2 & -1, 0) | 0;
    }
   } while (0);
   HEAP32[i9 >> 2] = 0;
   i13 = HEAP32[(HEAP32[i1 >> 2] | 0) + 44 >> 2] | 0;
   i17 = HEAP32[i6 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 31](i10, i17);
   FUNCTION_TABLE_iiiii[i13 & 7](i1, i17, i10, i9) | 0;
   i17 = HEAP32[i10 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
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
 HEAP8[i11] = 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector11TypeBuilder3CSS11CSSPropertyEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_10StringHashENS_7HashMapIS1_S8_SC_NS_10HashTraitsIS1_EENSE_IS8_EEE18KeyValuePairTraitsESF_E6expandEPS9_(i1, i2) {
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
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 11;
     break;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 11) {
    i26 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
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
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
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
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 11;
     break;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 11) {
    i26 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
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
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
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
function __ZN7WebCore19InspectorStyleSheet10deleteRuleERKNS_14InspectorCSSIdERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i3 >> 2] = 9;
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 i11 = i1 + 64 | 0;
 do {
  if ((HEAP32[i11 >> 2] | 0) == 0) {
   __ZN7WebCoreL13asCSSRuleListEPNS_13CSSStyleSheetE(i5, i9);
   __ZN7WebCore19InspectorStyleSheet16collectFlatRulesEN3WTF10PassRefPtrINS_11CSSRuleListEEEPNS1_6VectorINS1_6RefPtrINS_12CSSStyleRuleEEELj0ENS1_15CrashOnOverflowEEE(i5, i1 + 56 | 0);
   i12 = HEAP32[i5 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 63](i12);
  }
 } while (0);
 i5 = i2 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if (i2 >>> 0 < (HEAP32[i11 >> 2] | 0) >>> 0) {
   i9 = HEAP32[(HEAP32[i1 + 56 >> 2] | 0) + (i2 << 2) >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i12 = i9 + 4 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i12 = i9 | 0;
   while (1) {
    i13 = i12 + 12 | 0;
    if ((HEAP8[i12 + 8 | 0] & 2) == 0) {
     i14 = 12;
     break;
    }
    i15 = HEAP32[i13 >> 2] | 0;
    if ((i15 | 0) == 0) {
     i14 = 14;
     break;
    } else {
     i12 = i15;
    }
   }
   do {
    if ((i14 | 0) == 12) {
     i12 = HEAP32[i13 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i14 = 14;
      break;
     }
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 15](i1) | 0)) {
      i14 = 14;
      break;
     }
     i15 = HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] | 0;
     i16 = __ZN7WebCore12CSSStyleRule5styleEv(i9) | 0;
     FUNCTION_TABLE_viii[i15 & 15](i6, i1, i16);
     i16 = i6 | 0;
     do {
      if ((HEAP32[i16 >> 2] | 0) == 0) {
       HEAP32[i3 >> 2] = 8;
       i17 = 0;
      } else {
       __ZN7WebCore13CSSStyleSheet10deleteRuleEjRi(i12, HEAP32[i5 >> 2] | 0, i3);
       if ((HEAP32[i3 >> 2] | 0) != 0) {
        i17 = 0;
        break;
       }
       i15 = i7 | 0;
       i18 = HEAP32[HEAP32[i1 + 32 >> 2] >> 2] | 0;
       HEAP32[i15 >> 2] = i18;
       if ((i18 | 0) != 0) {
        i19 = i18 | 0;
        HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
       }
       i19 = HEAP32[i16 >> 2] | 0;
       i18 = HEAP32[i19 + 8 >> 2] | 0;
       __ZN3WTF6String6removeEji(i7, i18, 1 - i18 + (HEAP32[i19 + 20 >> 2] | 0) | 0);
       i19 = i8 | 0;
       HEAP32[i19 >> 2] = 0;
       __ZN7WebCore19InspectorStyleSheet7setTextERKN3WTF6StringERi(i1, i7, i19) | 0;
       i19 = HEAP32[i1 + 68 >> 2] | 0;
       if ((i19 | 0) != 0) {
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 8 >> 2] & 31](i19, i1);
       }
       i19 = HEAP32[i15 >> 2] | 0;
       if ((i19 | 0) == 0) {
        i17 = 1;
        break;
       }
       i15 = i19 | 0;
       i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i19);
        i17 = 1;
        break;
       } else {
        HEAP32[i15 >> 2] = i18;
        i17 = 1;
        break;
       }
      }
     } while (0);
     i12 = HEAP32[i16 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i20 = i17;
      break;
     }
     i18 = i12 | 0;
     i15 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
      i20 = i17;
      break;
     } else {
      HEAP32[i18 >> 2] = i15;
      i20 = i17;
      break;
     }
    }
   } while (0);
   if ((i14 | 0) == 14) {
    HEAP32[i3 >> 2] = 8;
    i20 = 0;
   }
   i15 = i9 + 4 | 0;
   i18 = i15 | 0;
   i12 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i18 >> 2] = i12;
    i10 = i20;
    STACKTOP = i4;
    return i10 | 0;
   }
   i12 = i15 - 4 | 0;
   if ((i12 | 0) == 0) {
    i10 = i20;
    STACKTOP = i4;
    return i10 | 0;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
   i10 = i20;
   STACKTOP = i4;
   return i10 | 0;
  }
 } while (0);
 HEAP32[i3 >> 2] = 8;
 i10 = 0;
 STACKTOP = i4;
 return i10 | 0;
}
function __ZNK7WebCore14InspectorCSSId15asProtocolValueIN9Inspector11TypeBuilder3CSS10CSSStyleIdEEEN3WTF10PassRefPtrIT_EEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN9Inspector15InspectorObject6createEv(i12);
   i14 = HEAP32[i12 >> 2] | 0;
   i15 = i14 | 0;
   HEAP32[i11 >> 2] = H_BASE + 456;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i2 | 0);
   i16 = i8 | 0;
   i17 = i9 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i18;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i10, i8);
   i18 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i16 = i18 + 4 | 0;
     i19 = i16 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i19 >> 2] = i20;
      break;
     }
     i20 = i16 - 4 | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
    }
   } while (0);
   i18 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i20 = i18 + 4 | 0;
     i16 = i20 | 0;
     i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i16 >> 2] = i19;
      break;
     }
     i19 = i20 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
    }
   } while (0);
   i18 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i17 = i18 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = H_BASE + 472;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
   __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i18 | 0));
   i18 = i4 | 0;
   i19 = i5 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i18 >> 2] = i17;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i6, i4);
   i17 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i18 = i17 + 4 | 0;
     i20 = i18 | 0;
     i16 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i20 >> 2] = i16;
      break;
     }
     i16 = i18 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    }
   } while (0);
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i15 = i17 + 4 | 0;
     i16 = i15 | 0;
     i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i16 >> 2] = i18;
      break;
     }
     i18 = i15 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
    }
   } while (0);
   i17 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i19 = i17 | 0;
     i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i19 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i17 = i14;
   do {
    if ((i14 | 0) != 0) {
     i18 = i14 + 4 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = i19 + 1;
     i18 = i14 + 4 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i18 >> 2] = i19;
      break;
     }
     i19 = i18 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
    }
   } while (0);
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14InspectorCSSId15asProtocolValueIN9Inspector11TypeBuilder3CSS9CSSRuleIdEEEN3WTF10PassRefPtrIT_EEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   if ((HEAP32[i13 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN9Inspector15InspectorObject6createEv(i12);
   i14 = HEAP32[i12 >> 2] | 0;
   i15 = i14 | 0;
   HEAP32[i11 >> 2] = H_BASE + 456;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i10, i11);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i9, i2 | 0);
   i16 = i8 | 0;
   i17 = i9 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i18;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i10, i8);
   i18 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i16 = i18 + 4 | 0;
     i19 = i16 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i19 >> 2] = i20;
      break;
     }
     i20 = i16 - 4 | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
    }
   } while (0);
   i18 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i20 = i18 + 4 | 0;
     i16 = i20 | 0;
     i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i16 >> 2] = i19;
      break;
     }
     i19 = i20 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
    }
   } while (0);
   i18 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i17 = i18 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = H_BASE + 472;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
   __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i18 | 0));
   i18 = i4 | 0;
   i19 = i5 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i18 >> 2] = i17;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i6, i4);
   i17 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i18 = i17 + 4 | 0;
     i20 = i18 | 0;
     i16 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i20 >> 2] = i16;
      break;
     }
     i16 = i18 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    }
   } while (0);
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i15 = i17 + 4 | 0;
     i16 = i15 | 0;
     i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i16 >> 2] = i18;
      break;
     }
     i18 = i15 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
    }
   } while (0);
   i17 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i19 = i17 | 0;
     i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i19 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i17 = i14;
   do {
    if ((i14 | 0) != 0) {
     i18 = i14 + 4 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = i19 + 1;
     i18 = i14 + 4 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i18 >> 2] = i19;
      break;
     }
     i19 = i18 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
    }
   } while (0);
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19InspectorStyleSheet16ensureSourceDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 88 | 0;
 i7 = i2 + 136 | 0;
 i8 = i2 + 144 | 0;
 i9 = i2 + 152 | 0;
 i10 = i2 + 160 | 0;
 i11 = i1 + 32 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
  i13 = 1;
  STACKTOP = i2;
  return i13 | 0;
 }
 if ((HEAP8[i12 + 4 | 0] & 1) == 0) {
  i13 = 0;
  STACKTOP = i2;
  return i13 | 0;
 }
 i12 = i6 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 __ZN7WebCore16CSSParserContextC1ENS_13CSSParserModeERKNS_3URLE(i5, 1, i6);
 i6 = __ZN3WTF10fastMallocEj(144) | 0;
 i14 = i6;
 i15 = i4 | 0;
 HEAP32[i15 >> 2] = 0;
 __ZN7WebCore18StyleSheetContentsC1EPNS_15StyleRuleImportERKN3WTF6StringERKNS_16CSSParserContextE(i14, 0, i4, i5);
 i4 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i15 = i4 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i5 + 48 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i16 = i4 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i16 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
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
 i4 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i12 = i4 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i4 = __ZN3WTF10fastMallocEj(12) | 0;
 i15 = i4;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 i12 = i7 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i12 >> 2] = i15;
 __ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i8);
 __ZN7WebCoreL15createCSSParserEPNS_8DocumentE(i9, __ZNK7WebCore13CSSStyleSheet13ownerDocumentEv(HEAP32[i1 + 16 >> 2] | 0) | 0);
 i1 = HEAP32[i9 >> 2] | 0;
 __ZN7WebCore9CSSParser10parseSheetEPNS_18StyleSheetContentsERKN3WTF6StringEiPNS3_6VectorINS3_6RefPtrINS_17CSSRuleSourceDataEEELj0ENS3_15CrashOnOverflowEEEb(i1, i14, HEAP32[i11 >> 2] | 0, 0, i15, 0);
 if ((i1 | 0) != 0) {
  __ZN7WebCore9CSSParserD1Ev(i1);
  __ZdlPv(i1);
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i10 >> 2] = i15;
 i12 = i1 + 8 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEE5clearEv(i12);
 } else {
  i4 = __ZN3WTF10fastMallocEj(12) | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 0;
  HEAP32[i4 + 8 >> 2] = 0;
  HEAP32[i3 >> 2] = i4;
  __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEEaSERKNS_10PassOwnPtrIS7_EE(i12, i3) | 0;
  __ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i3);
  __ZL17flattenSourceDataPN3WTF6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEES7_(i15, HEAP32[i12 >> 2] | 0);
 }
 __ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i10);
 i10 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0) != 0;
 __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i7);
 if ((i6 | 0) == 0) {
  i13 = i10;
  STACKTOP = i2;
  return i13 | 0;
 }
 i7 = i6;
 i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore18StyleSheetContentsD1Ev(i14);
  __ZN3WTF8fastFreeEPv(i6);
  i13 = i10;
  STACKTOP = i2;
  return i13 | 0;
 } else {
  HEAP32[i7 >> 2] = i11;
  i13 = i10;
  STACKTOP = i2;
  return i13 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPN7WebCore19CSSStyleDeclarationENS_12KeyValuePairIS3_NS_6RefPtrINS1_14InspectorStyleEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore19CSSStyleDeclarationENS_12KeyValuePairIS3_NS_6RefPtrINS1_14InspectorStyleEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
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
   i14 = i8;
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
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i4 = i14 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 + 4 | 0;
   i4 = i14 | 0;
   i22 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i4 >> 2] = i22;
    break;
   }
   i22 = i14 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i22 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i22;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i22 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i4 = i14 << 1;
   i29 = (i22 * 6 & -1 | 0) < (i4 | 0) ? i14 : i4;
  }
  i4 = __ZN3WTF9HashTableIPN7WebCore19CSSStyleDeclarationENS_12KeyValuePairIS3_NS_6RefPtrINS1_14InspectorStyleEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
  i27 = i4;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 + 4 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (i12) {
  i13 = 0;
 } else {
  i13 = HEAP32[i11 + 4 >> 2] | 0;
 }
 i14 = i2 + 8 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = (i15 | 0) == 0;
 if (i16) {
  i17 = 0;
 } else {
  i17 = HEAP32[i15 + 4 >> 2] | 0;
 }
 i18 = _llvm_uadd_with_overflow_i32(i13 + i9 + i17 | 0, i7 | 0) | 0;
 i17 = i18;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i12) {
  i19 = 9;
 } else {
  if ((HEAP32[i11 + 16 >> 2] & 32 | 0) != 0) {
   i19 = 9;
  }
 }
 do {
  if ((i19 | 0) == 9) {
   if (!i16) {
    if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i17 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i19 = 22;
      break;
     }
     i12 = i11 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i20 = i11;
     i21 = 0;
    } else {
     if (i17 >>> 0 > 4294967275 >>> 0) {
      i19 = 22;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i17 + 20 | 0);
     i11 = i6 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i19 = 22;
      break;
     }
     i11 = i12 + 20 | 0;
     HEAP32[i12 >> 2] = 2;
     HEAP32[i12 + 4 >> 2] = i17;
     HEAP32[i12 + 8 >> 2] = i11;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 32;
     i20 = i12;
     i21 = i11;
    }
   } while (0);
   if ((i19 | 0) == 22) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh(i2, i21);
   i11 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
   } else {
    i22 = HEAP32[i12 + 4 >> 2] | 0;
   }
   i12 = HEAP32[i14 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i23 = 0;
   } else {
    i23 = HEAP32[i12 + 4 >> 2] | 0;
   }
   _memcpy(i21 + (i22 + i11 + i23) | 0, i3 | 0, i7) | 0;
   HEAP32[i1 >> 2] = i20;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i17 | 0) == 0) {
   i20 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i20 | 0) == 0) {
    i19 = 36;
    break;
   }
   i23 = i20 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
   i24 = i20;
   i25 = 0;
  } else {
   if (i17 >>> 0 > 2147483637 >>> 0) {
    i19 = 36;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i17 << 1) + 20 | 0);
   i20 = i5 | 0;
   i23 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   if ((i23 | 0) == 0) {
    i19 = 36;
    break;
   }
   i20 = i23 + 20 | 0;
   HEAP32[i23 >> 2] = 2;
   HEAP32[i23 + 4 >> 2] = i17;
   HEAP32[i23 + 8 >> 2] = i20;
   HEAP32[i23 + 12 >> 2] = 0;
   HEAP32[i23 + 16 >> 2] = 0;
   i24 = i23;
   i25 = i20;
  }
 } while (0);
 if ((i19 | 0) == 36) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt(i2, i25);
 i2 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i26 = 0;
 } else {
  i26 = HEAP32[i8 + 4 >> 2] | 0;
 }
 i8 = HEAP32[i14 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i27 = 0;
 } else {
  i27 = HEAP32[i8 + 4 >> 2] | 0;
 }
 i8 = i26 + i2 + i27 | 0;
 if ((i7 | 0) != 0) {
  i27 = 0;
  while (1) {
   HEAP16[i25 + (i8 + i27 << 1) >> 1] = HEAPU8[i3 + i27 | 0] | 0;
   i27 = i27 + 1 | 0;
   if (i27 >>> 0 >= i7 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i24;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore19CSSStyleDeclarationENS_12KeyValuePairIS3_NS_6RefPtrINS1_14InspectorStyleEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
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
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i20 = i13 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i20 >> 2] = i19;
      break;
     }
     i19 = i13 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i17 = i7 + (i10 << 3) + 4 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i19;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i19 = i10 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i19;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 + 4 | 0;
    i1 = i11 | 0;
    i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i1 >> 2] = i10;
     break;
    }
    i10 = i11 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector11TypeBuilder3CSS11CSSPropertyEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_10StringHashENS_7HashMapIS1_S8_SC_NS_10HashTraitsIS1_EENSE_IS8_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS1_RS8_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S9_SB_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector11TypeBuilder3CSS11CSSPropertyEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_10StringHashENS_7HashMapIS1_S8_SC_NS_10HashTraitsIS1_EENSE_IS8_EEE18KeyValuePairTraitsESF_E6expandEPS9_(i2, 0) | 0;
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
  i4 = i13 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i18 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i13;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 + 4 | 0;
   i4 = i13 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i4 >> 2] = i9;
    break;
   }
   i9 = i13 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i13 | 0)) {
  i19 = i18;
  i20 = i13;
 } else {
  i13 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector11TypeBuilder3CSS11CSSPropertyEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_10StringHashENS_7HashMapIS1_S8_SC_NS_10HashTraitsIS1_EENSE_IS8_EEE18KeyValuePairTraitsESF_E6expandEPS9_(i2, i18) | 0;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
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
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZNK7WebCore14InspectorStyle14shorthandValueERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i2 + 16 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] & 15](i1, i2, i3);
 i2 = i1 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i10 = HEAP32[i9 >> 2] | 0;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 28 >> 2] & 15](i10) | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i6 | 0;
 i11 = i3 | 0;
 i3 = i7 | 0;
 i12 = i8 | 0;
 i13 = i5 | 0;
 i14 = 0;
 while (1) {
  i15 = HEAP32[i9 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i15 >> 2] | 0) + 32 >> 2] & 15](i5, i15, i14);
  i15 = HEAP32[i9 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i15 >> 2] | 0) + 48 >> 2] & 15](i6, i15, i5);
  i15 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i10 >> 2] | 0, HEAP32[i11 >> 2] | 0) | 0;
  i16 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i16 | 0) != 0) {
    i17 = i16 | 0;
    i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     break;
    } else {
     HEAP32[i17 >> 2] = i18;
     break;
    }
   }
  } while (0);
  do {
   if (i15) {
    i16 = HEAP32[i9 >> 2] | 0;
    if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i16 >> 2] | 0) + 52 >> 2] & 63](i16, i5) | 0) {
     break;
    }
    i16 = HEAP32[i9 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i16 >> 2] | 0) + 40 >> 2] & 15](i7, i16, i5);
    if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 24 | 0) | 0)) {
     i16 = HEAP32[i2 >> 2] | 0;
     do {
      if ((i16 | 0) != 0) {
       if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
        break;
       }
       __ZN3WTF6StringC1EPKc(i8, H_BASE + 240 | 0);
       __ZN3WTF6String6appendERKS0_(i1, i8);
       i18 = HEAP32[i12 >> 2] | 0;
       if ((i18 | 0) == 0) {
        break;
       }
       i17 = i18 | 0;
       i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i19 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        break;
       } else {
        HEAP32[i17 >> 2] = i19;
        break;
       }
      }
     } while (0);
     __ZN3WTF6String6appendERKS0_(i1, i7);
    }
    i16 = HEAP32[i3 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break;
    }
    i19 = i16 | 0;
    i17 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     break;
    } else {
     HEAP32[i19 >> 2] = i17;
     break;
    }
   }
  } while (0);
  i15 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i17 = i15 | 0;
    i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i19 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i17 >> 2] = i19;
     break;
    }
   }
  } while (0);
  i14 = i14 + 1 | 0;
  i15 = HEAP32[i9 >> 2] | 0;
  if (i14 >>> 0 >= (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 28 >> 2] & 15](i15) | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19InspectorStyleSheet21buildArrayForRuleListEPNS_11CSSRuleListE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 i9 = i8;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i8);
 HEAP32[i8 >> 2] = H_BASE + 600;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 i10 = i3;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 63](i3);
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i5 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i5 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i6 | 0;
 HEAP32[i14 >> 2] = i3;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 63](i3);
 __ZN7WebCore19InspectorStyleSheet16collectFlatRulesEN3WTF10PassRefPtrINS_11CSSRuleListEEEPNS1_6VectorINS1_6RefPtrINS_12CSSStyleRuleEEELj0ENS1_15CrashOnOverflowEEE(i6, i5);
 i5 = HEAP32[i14 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 63](i5);
 }
 i5 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i1 >> 2] = i9;
   i15 = 15;
  } else {
   i14 = HEAP32[i11 >> 2] | 0;
   i6 = i7 | 0;
   i16 = i8 + 12 | 0;
   i17 = i8 + 20 | 0;
   i18 = i8 + 16 | 0;
   i19 = i16;
   i20 = i16;
   i16 = 0;
   while (1) {
    if (i5 >>> 0 <= i16 >>> 0) {
     i15 = 9;
     break;
    }
    __ZN7WebCore19InspectorStyleSheet18buildObjectForRuleEPNS_12CSSStyleRuleE(i7, i2, HEAP32[i14 + (i16 << 2) >> 2] | 0);
    i21 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    i22 = i21 | 0;
    i21 = HEAP32[i17 >> 2] | 0;
    if ((i21 | 0) == (HEAP32[i18 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i19, i21 + 1 | 0);
     HEAP32[(HEAP32[i20 >> 2] | 0) + (HEAP32[i17 >> 2] << 2) >> 2] = i22;
    } else {
     HEAP32[(HEAP32[i20 >> 2] | 0) + (i21 << 2) >> 2] = i22;
    }
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
    i16 = i16 + 1 | 0;
    if (i16 >>> 0 >= i5 >>> 0) {
     break;
    }
   }
   if ((i15 | 0) == 9) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   HEAP32[i1 >> 2] = i9;
   if ((i5 | 0) == 0) {
    i15 = 15;
    break;
   }
   i16 = HEAP32[i11 >> 2] | 0;
   i17 = i16 + (i5 << 2) | 0;
   i20 = i16;
   while (1) {
    i19 = HEAP32[i20 >> 2] | 0;
    do {
     if ((i19 | 0) != 0) {
      i18 = i19 + 4 | 0;
      i6 = i18 | 0;
      i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i14 | 0) != 0) {
       HEAP32[i6 >> 2] = i14;
       break;
      }
      i14 = i18 - 4 | 0;
      if ((i14 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
     }
    } while (0);
    i20 = i20 + 4 | 0;
    if ((i20 | 0) == (i17 | 0)) {
     break;
    }
   }
   HEAP32[i13 >> 2] = 0;
   i23 = i16;
  }
 } while (0);
 if ((i15 | 0) == 15) {
  i23 = HEAP32[i11 >> 2] | 0;
 }
 if ((i23 | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
  HEAP32[i12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i23);
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 63](i3);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
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
  i2 = i7 + (i10 << 2) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
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
    i22 = i14 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 9;
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
   if ((i25 | 0) == 9) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
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
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
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
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i9 | 0)) {
  i19 = i18;
  i20 = i9;
 } else {
  if ((i9 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i9 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i9 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = i4 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i18 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i4;
 do {
  if ((i13 | 0) != 0) {
   i4 = i13 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i4 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i9 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i9;
 i13 = i2 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i4 << 1;
   i21 = (i9 * 6 & -1 | 0) < (i17 | 0) ? i4 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore19InspectorStyleSheetD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1072;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i2 + 8 | 0);
  i3 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i4 = i3 | 0;
    i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 64 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i5 = i1 + 56 | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 + (i3 << 2) | 0;
  i3 = i4;
  while (1) {
   i4 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 60 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i1 + 40 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i6 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i6 << 3) >> 2] | 0) != -1) {
      i3 = HEAP32[i2 + (i6 << 3) + 4 >> 2] | 0;
      if ((i3 | 0) == 0) {
       break;
      }
      i4 = i3 + 4 | 0;
      i3 = i4 | 0;
      i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) != 0) {
       HEAP32[i3 >> 2] = i9;
       break;
      }
      i9 = i4 - 4 | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i5 = i6 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i9 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i9;
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheetD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1072;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i2 + 8 | 0);
  i3 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i4 = i3 | 0;
    i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 64 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i5 = i1 + 56 | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 + (i3 << 2) | 0;
  i3 = i4;
  while (1) {
   i4 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 60 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i1 + 40 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i6 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i6 << 3) >> 2] | 0) != -1) {
      i3 = HEAP32[i2 + (i6 << 3) + 4 >> 2] | 0;
      if ((i3 | 0) == 0) {
       break;
      }
      i4 = i3 + 4 | 0;
      i3 = i4 | 0;
      i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) != 0) {
       HEAP32[i3 >> 2] = i9;
       break;
      }
      i9 = i4 - 4 | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
     }
    } while (0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i5 = i6 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i9 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i9;
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheet12setStyleTextEPNS_19CSSStyleDeclarationERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 15](i1) | 0)) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = 0;
 do {
  if (__ZN7WebCore19InspectorStyleSheet30styleSheetTextWithChangedStyleEPNS_19CSSStyleDeclarationERKN3WTF6StringEPS4_(i1, i2, i3, i7) | 0) {
   if ((FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 63](i1, i2) | 0) == -1) {
    i10 = 0;
    break;
   }
   i11 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i10 = 0;
    break;
   }
   i12 = i11 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   i14 = i13 + 2 | 0;
   HEAP32[i12 >> 2] = i13 + 4;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
   } else {
    HEAP32[i12 >> 2] = i14;
   }
   if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
    i15 = 0;
   } else {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 15](i2, i3, i4);
    i14 = HEAP32[i4 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i13 = HEAP32[i1 + 32 >> 2] | 0;
     HEAP8[i13 + 4 | 0] = 1;
     i16 = HEAP32[i9 >> 2] | 0;
     if ((i16 | 0) != 0) {
      i17 = i16 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
     }
     i17 = i13 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i16;
     do {
      if ((i18 | 0) != 0) {
       i16 = i18 | 0;
       i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
       if ((i17 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        break;
       } else {
        HEAP32[i16 >> 2] = i17;
        break;
       }
      }
     } while (0);
     HEAP32[i6 >> 2] = 0;
     __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEE5clearEv(i13 + 8 | 0);
     __ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i6);
     i19 = HEAP32[i4 >> 2] | 0;
    } else {
     i19 = i14;
    }
    i15 = (i19 | 0) == 0;
   }
   i18 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    i10 = i15;
    break;
   } else {
    HEAP32[i12 >> 2] = i18;
    i10 = i15;
    break;
   }
  } else {
   i10 = 0;
  }
 } while (0);
 i15 = HEAP32[i9 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i8 = i10;
  STACKTOP = i5;
  return i8 | 0;
 }
 i9 = i15 | 0;
 i19 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  i8 = i10;
  STACKTOP = i5;
  return i8 | 0;
 } else {
  HEAP32[i9 >> 2] = i19;
  i8 = i10;
  STACKTOP = i5;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore33InspectorStyleSheetForInlineStyle12setStyleTextEPNS_19CSSStyleDeclarationERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i2 | 0;
 i6 = i2 + 8 | 0;
 i7 = i2 + 16 | 0;
 i8 = i2 + 24 | 0;
 i9 = i1 + 72 | 0;
 i10 = HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i11 = HEAP32[((i10 | 0) == 0 ? 0 : i10 + 88 | 0) + 16 >> 2] | 0;
 __ZN7WebCore21ContentSecurityPolicy27setOverrideAllowInlineStyleEb(i11, 1);
 i10 = HEAP32[i9 >> 2] | 0;
 __ZN3WTF12AtomicString3addEPKh(i6, H_BASE + 480 | 0);
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i12 = i5 | 0;
   HEAP32[i12 >> 2] = 0;
   i13 = i12;
  } else {
   if ((HEAP32[i3 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i3);
    i13 = i5 | 0;
    break;
   } else {
    i12 = i5 | 0;
    HEAP32[i12 >> 2] = i3;
    i14 = i3 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
    i13 = i12;
    break;
   }
  }
 } while (0);
 i3 = i8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i13 >> 2];
 __ZN7WebCore7Element12setAttributeERKN3WTF12AtomicStringES4_Ri(i10, i7, i8, i4);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 | 0;
   i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i3 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21ContentSecurityPolicy27setOverrideAllowInlineStyleEb(i11, 0);
 i11 = HEAP32[i6 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i6 = i11 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i1 + 84 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i11;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 | 0;
   i6 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i6;
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 88 | 0] = 1;
 i8 = i1 + 76 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i1 | 0) == 0) {
  i15 = HEAP32[i4 >> 2] | 0;
  i16 = (i15 | 0) == 0;
  STACKTOP = i2;
  return i16 | 0;
 }
 i8 = i1 | 0;
 i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore17CSSRuleSourceDataD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  i15 = HEAP32[i4 >> 2] | 0;
  i16 = (i15 | 0) == 0;
  STACKTOP = i2;
  return i16 | 0;
 } else {
  HEAP32[i8 >> 2] = i6;
  i15 = HEAP32[i4 >> 2] | 0;
  i16 = (i15 | 0) == 0;
  STACKTOP = i2;
  return i16 | 0;
 }
 return 0;
}
function __ZN7WebCore19InspectorStyleSheet16collectFlatRulesEN3WTF10PassRefPtrINS_11CSSRuleListEEEPNS1_6VectorINS1_6RefPtrINS_12CSSStyleRuleEEELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 15](i1) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i4 | 0;
 i7 = i2 + 8 | 0;
 i8 = i2 + 4 | 0;
 i9 = i2 | 0;
 i10 = 0;
 while (1) {
  i11 = HEAP32[i5 >> 2] | 0;
  i12 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 63](i11, i10) | 0;
  i11 = __ZN7WebCore17InspectorCSSAgent14asCSSStyleRuleEPNS_7CSSRuleE(i12) | 0;
  do {
   if ((i11 | 0) == 0) {
    if ((i12 | 0) == 0) {
     break;
    }
    i13 = i12;
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 15](i12) | 0) == 4) {
     i14 = __ZNK7WebCore15CSSGroupingRule8cssRulesEv(i12) | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] & 63](i14);
     i15 = i14;
    } else {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 15](i12) | 0) != 7) {
      break;
     }
     i13 = __ZN7WebCore22WebKitCSSKeyframesRule8cssRulesEv(i12) | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 63](i13);
     i15 = i13;
    }
    HEAP32[i1 >> 2] = i15;
    i13 = i15;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 63](i15);
    __ZN7WebCore19InspectorStyleSheet16collectFlatRulesEN3WTF10PassRefPtrINS_11CSSRuleListEEEPNS1_6VectorINS1_6RefPtrINS_12CSSStyleRuleEEELj0ENS1_15CrashOnOverflowEEE(i4, i2);
    i14 = HEAP32[i1 >> 2] | 0;
    if ((i14 | 0) == 0) {
     if ((i15 | 0) == 0) {
      break;
     }
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] & 63](i14);
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 63](i15);
   } else {
    i13 = HEAP32[i7 >> 2] | 0;
    if ((i13 | 0) == (HEAP32[i8 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore12CSSStyleRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i13 + 1 | 0);
     HEAP32[(HEAP32[i9 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) >> 2] = i11;
     i14 = i11 + 4 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     break;
    } else {
     HEAP32[(HEAP32[i9 >> 2] | 0) + (i13 << 2) >> 2] = i11;
     i13 = i11 + 4 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     break;
    }
   }
  } while (0);
  i10 = i10 + 1 | 0;
  if (i10 >>> 0 >= i6 >>> 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14InspectorStyle17shorthandPriorityERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 + 16 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 15](i1, i2, i3);
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i1 = i6 | 0;
 i9 = i3 | 0;
 i3 = i7 | 0;
 i10 = i5 | 0;
 i11 = 0;
 while (1) {
  i12 = HEAP32[i8 >> 2] | 0;
  if (i11 >>> 0 >= (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 28 >> 2] & 15](i12) | 0) >>> 0) {
   i13 = 24;
   break;
  }
  i12 = HEAP32[i8 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 32 >> 2] & 15](i5, i12, i11);
  i12 = HEAP32[i8 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 48 >> 2] & 15](i6, i12, i5);
  i12 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i1 >> 2] | 0, HEAP32[i9 >> 2] | 0) | 0;
  i14 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i15 = i14 | 0;
    i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i16 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i14);
     break;
    } else {
     HEAP32[i15 >> 2] = i16;
     break;
    }
   }
  } while (0);
  do {
   if (i12) {
    i14 = HEAP32[i8 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] & 15](i7, i14, i5);
    i14 = HEAP32[i3 >> 2] | 0;
    HEAP32[i3 >> 2] = 0;
    i16 = HEAP32[i2 >> 2] | 0;
    HEAP32[i2 >> 2] = i14;
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
    i16 = HEAP32[i3 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i17 = 2;
     break;
    }
    i15 = i16 | 0;
    i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     i17 = 2;
     break;
    } else {
     HEAP32[i15 >> 2] = i14;
     i17 = 2;
     break;
    }
   } else {
    i17 = 4;
   }
  } while (0);
  i12 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i14 = i12 | 0;
    i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
    if ((i15 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i14 >> 2] = i15;
     break;
    }
   }
  } while (0);
  if ((i17 | 0) == 2) {
   i13 = 26;
   break;
  } else {
   i11 = i11 + 1 | 0;
  }
 }
 if ((i13 | 0) == 24) {
  STACKTOP = i4;
  return;
 } else if ((i13 | 0) == 26) {
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore14InspectorStyle7getTextEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 28 >> 2] & 15](i8) | 0)) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 15](i4, i8, HEAP32[i1 + 16 >> 2] | 0);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i10 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i1 = i10 | 0;
   i11 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore17CSSRuleSourceDataD2Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    HEAP32[i1 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 63](i11, i5) | 0) {
   i7 = HEAP32[i4 + 16 >> 2] | 0;
   __ZNK3WTF6String9substringEjj(i6, i5, i7, (HEAP32[i4 + 20 >> 2] | 0) - i7 | 0);
   i7 = i6 | 0;
   i1 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i12 = i2 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   do {
    if ((i13 | 0) != 0) {
     i1 = i13 | 0;
     i12 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i1 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i7 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i14 = 1;
    break;
   }
   i12 = i13 | 0;
   i1 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    i14 = 1;
    break;
   } else {
    HEAP32[i12 >> 2] = i1;
    i14 = 1;
    break;
   }
  } else {
   i14 = 0;
  }
 } while (0);
 i2 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i10 = i2 | 0;
   i6 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i10 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore17CSSRuleSourceDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  i9 = i14;
  STACKTOP = i3;
  return i9 | 0;
 } else {
  HEAP32[i8 >> 2] = i2;
  i9 = i14;
  STACKTOP = i3;
  return i9 | 0;
 }
 return 0;
}
function __ZNK7WebCore33InspectorStyleSheetForInlineStyle23getStyleAttributeRangesEPNS_17CSSRuleSourceDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 72 | 0;
 if ((HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 8 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = i1 + 84 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i4, 0);
   i10 = HEAP32[i4 >> 2] | 0;
   __ZN7WebCoreL15createCSSParserEPNS_8DocumentE(i5, HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
   i11 = HEAP32[i5 >> 2] | 0;
   i12 = i6 | 0;
   HEAP32[i12 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i13 = i2 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   __ZN7WebCore9CSSParser16parseDeclarationEPNS_22MutableStylePropertiesERKN3WTF6StringENS3_10PassRefPtrINS_17CSSRuleSourceDataEEEPNS_18StyleSheetContentsE(i11, i10, i9, i6, HEAP32[(__ZN7WebCore8Document12elementSheetEv(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 8 >> 2] | 0) | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i13);
      __ZN3WTF8fastFreeEPv(i13);
      break;
     } else {
      HEAP32[i12 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if ((i11 | 0) != 0) {
    __ZN7WebCore9CSSParserD1Ev(i11);
    __ZdlPv(i11);
   }
   if ((i10 | 0) == 0) {
    i8 = 1;
    STACKTOP = i3;
    return i8 | 0;
   }
   i13 = i10 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i13 >> 2] = i14;
    i8 = 1;
    STACKTOP = i3;
    return i8 | 0;
   }
   if ((HEAP32[i10 + 4 >> 2] & 4 | 0) == 0) {
    __ZN7WebCore24ImmutableStylePropertiesD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    i8 = 1;
    STACKTOP = i3;
    return i8 | 0;
   } else {
    __ZN7WebCore22MutableStylePropertiesD1Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    i8 = 1;
    STACKTOP = i3;
    return i8 | 0;
   }
  }
 } while (0);
 HEAP32[i2 + 16 >> 2] = 0;
 HEAP32[i2 + 20 >> 2] = 0;
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore33InspectorStyleSheetForInlineStyle21ensureParsedDataReadyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = HEAP32[i1 + 72 >> 2] | 0;
 __ZN3WTF12AtomicString3addEPKh(i3, H_BASE + 480 | 0);
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
 i3 = __ZNK7WebCore7Element12getAttributeERKN3WTF12AtomicStringE(i6, i4) | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i4 = i1 + 84 | 0;
 i6 = i3 | 0;
 i3 = i1 + 76 | 0;
 if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0)) {
  i7 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  do {
   if ((i7 | 0) != 0) {
    i8 = i7 | 0;
    i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    if ((i9 | 0) == 0) {
     __ZN7WebCore17CSSRuleSourceDataD2Ev(i7);
     __ZN3WTF8fastFreeEPv(i7);
     break;
    } else {
     HEAP32[i8 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  }
  i6 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = i7;
  do {
   if ((i6 | 0) != 0) {
    i7 = i6 | 0;
    i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i4 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i7 >> 2] = i4;
     break;
    }
   }
  } while (0);
  HEAP8[i1 + 88 | 0] = 1;
 }
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  i10 = 1;
  STACKTOP = i2;
  return i10 | 0;
 }
 __ZN7WebCore17CSSRuleSourceData6createENS0_4TypeE(i5, 1);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore17CSSRuleSourceDataD2Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i10 = __ZNK7WebCore33InspectorStyleSheetForInlineStyle23getStyleAttributeRangesEPNS_17CSSRuleSourceDataE(i1, HEAP32[i3 >> 2] | 0) | 0;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
   i9 = 0;
  } else {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
     i11 = HEAP32[i7 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     } else {
      i12 = 0;
     }
     while (1) {
      HEAP16[i2 + (i12 << 1) >> 1] = HEAP16[i11 + (i12 << 1) >> 1] | 0;
      i12 = i12 + 1 | 0;
      if (i12 >>> 0 >= i10 >>> 0) {
       break;
      }
     }
    } else {
     i11 = HEAP32[i7 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     } else {
      i13 = 0;
     }
     while (1) {
      HEAP16[i2 + (i13 << 1) >> 1] = HEAPU8[i11 + i13 | 0] | 0;
      i13 = i13 + 1 | 0;
      if (i13 >>> 0 >= i10 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i8 = 0;
    i9 = 0;
    break;
   }
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   i9 = i10;
  }
 } while (0);
 if ((i5 | 0) == 0) {
  i14 = i9;
 } else {
  i9 = 0;
  while (1) {
   HEAP16[i2 + (i9 + i8 << 1) >> 1] = HEAPU8[i4 + i9 | 0] | 0;
   i9 = i9 + 1 | 0;
   if (i9 >>> 0 >= i5 >>> 0) {
    break;
   }
  }
  i14 = HEAP32[i6 >> 2] | 0;
 }
 i6 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 if ((i14 | 0) == 0) {
  i15 = 0;
 } else {
  i15 = HEAP32[i14 + 4 >> 2] | 0;
 }
 i14 = i15 + i6 | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
  i15 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i16 = 0;
  }
  while (1) {
   HEAP16[i2 + (i16 + i14 << 1) >> 1] = HEAP16[i15 + (i16 << 1) >> 1] | 0;
   i16 = i16 + 1 | 0;
   if (i16 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i16 = HEAP32[i6 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i17 = 0;
  }
  while (1) {
   HEAP16[i2 + (i17 + i14 << 1) >> 1] = HEAPU8[i16 + i17 | 0] | 0;
   i17 = i17 + 1 | 0;
   if (i17 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZN7WebCore33InspectorStyleSheetForInlineStyle25didModifyElementAttributeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP8[i1 + 88 | 0] = 0;
 i2 = i1 + 72 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((HEAP32[i3 + 12 >> 2] & 8 | 0) != 0) {
   i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 304 >> 2] & 15](i3) | 0;
   i5 = i1 + 80 | 0;
   if ((i4 | 0) == (HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] | 0)) {
    break;
   }
   i4 = HEAP32[i1 + 12 >> 2] | 0;
   i6 = (i4 | 0) == 0;
   if (!i6) {
    i7 = i4 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 4;
   }
   i7 = HEAP32[i2 >> 2] | 0;
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 304 >> 2] & 15](i7) | 0;
   if ((i8 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 63](i8);
   }
   i7 = __ZN3WTF10fastMallocEj(48) | 0;
   HEAP32[i7 + 4 >> 2] = 1;
   HEAP32[i7 >> 2] = H_BASE + 1144;
   HEAP32[i7 + 8 >> 2] = i4;
   if (!i6) {
    i9 = i4 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   HEAP32[i7 + 12 >> 2] = 0;
   HEAP32[i7 + 16 >> 2] = i8;
   HEAP32[i7 + 20 >> 2] = i1;
   _memset(i7 + 24 | 0, 0, 21) | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i7;
   do {
    if ((i8 | 0) != 0) {
     i7 = i8 + 4 | 0;
     i5 = i7 | 0;
     i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i5 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
    }
   } while (0);
   if (i6) {
    break;
   }
   i8 = i4 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    i10 = HEAP32[i8 >> 2] | 0;
   } else {
    HEAP32[i8 >> 2] = i9;
    i10 = i9;
   }
   i9 = i10 - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i10 = i1 + 76 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i10 = i1 | 0;
 i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore17CSSRuleSourceDataD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i10 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheet30styleSheetTextWithChangedStyleEPNS_19CSSStyleDeclarationERKN3WTF6StringEPS4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if ((i2 | 0) == 0) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 15](i1) | 0)) {
  i8 = 0;
  STACKTOP = i5;
  return i8 | 0;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 15](i7, i1, i2);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 i9 = HEAP32[i7 + 16 >> 2] | 0;
 i10 = HEAP32[HEAP32[i1 + 32 >> 2] >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = 0;
   i12 = 1;
  } else {
   i1 = HEAP32[i7 + 20 >> 2] | 0;
   i13 = i10 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   __ZN3WTF10StringImpl7replaceEjjPS0_(i6, i10, i9, i1 - i9 | 0, HEAP32[i3 >> 2] | 0);
   i1 = HEAP32[i6 >> 2] | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
   } else {
    HEAP32[i13 >> 2] = i14;
   }
   if ((i1 | 0) == 0) {
    i11 = 0;
    i12 = 1;
    break;
   }
   i14 = i1 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   i11 = i1;
   i12 = 0;
  }
 } while (0);
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 | 0;
   i6 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i10 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i12) {
   i4 = i11 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i2 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i8 = 1;
  STACKTOP = i5;
  return i8 | 0;
 }
 i2 = i11 | 0;
 i12 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore17CSSRuleSourceDataD2Ev(i11);
  __ZN3WTF8fastFreeEPv(i11);
  i8 = 1;
  STACKTOP = i5;
  return i8 | 0;
 } else {
  HEAP32[i2 >> 2] = i12;
  i8 = 1;
  STACKTOP = i5;
  return i8 | 0;
 }
 return 0;
}
function __ZNK7WebCore19InspectorStyleSheet22resourceStyleSheetTextEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 64 | 0;
 if (((HEAP32[i1 + 20 >> 2] | 0) - 10 | 0) >>> 0 < 2 >>> 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = i1 + 16 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i10 = i1;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 15](i1) | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 15](i1) | 0) + 332 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i11 = i4 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 16 >> 2] & 15](i1) | 0) + 332 >> 2] | 0;
 __ZNK7WebCore13CSSStyleSheet4hrefEv(i7, HEAP32[i9 >> 2] | 0);
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i6, 0, i7);
 __ZN7WebCore18InspectorPageAgent15resourceContentEPN3WTF6StringEPNS_5FrameERKNS_3URLES3_Pb(i4, i12, i6, i2, i5);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i12 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i11 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = (HEAP8[i5] & 1) == 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
  i13 = (HEAP8[i5] & 1) == 0;
 } else {
  i13 = 0;
 }
 i5 = i2 | 0;
 i11 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i8 = i13;
  STACKTOP = i3;
  return i8 | 0;
 } else {
  HEAP32[i5 >> 2] = i11;
  i8 = i13;
  STACKTOP = i3;
  return i8 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 * 28 & -1) | 0;
 if (i2 >>> 0 > 153391689 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 28 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 28 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i7 | 0, i6 | 0);
   HEAP8[i7 + 20 | 0] = HEAP8[i6 + 20 | 0] & 1;
   HEAP8[i7 + 21 | 0] = HEAP8[i6 + 21 | 0] & 1;
   i2 = i6 + 24 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i7 + 24 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i9 = i8 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i2 = i9 | 0;
     i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i2 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i6 + 4 >> 2] | 0;
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
   i9 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i2 = i9 | 0;
     i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i2 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i9 = i6 + 28 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 28 | 0;
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
function __ZN7WebCoreL15createCSSParserEPNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 72 | 0;
 i6 = __Znwj(2284) | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore16CSSParserContextC2ERKS0_(i4, __ZN7WebCore22strictCSSParserContextEv() | 0);
  __ZN7WebCore9CSSParserC1ERKNS_16CSSParserContextE(i6, i4);
  HEAP32[i1 >> 2] = i6;
  i7 = HEAP32[i4 + 48 >> 2] | 0;
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
  i7 = HEAP32[i4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i9 = i7 | 0;
  i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
  if ((i8 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i7);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i9 >> 2] = i8;
   STACKTOP = i3;
   return;
  }
 }
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i5);
 __ZN7WebCore16CSSParserContextC1ERNS_8DocumentERKNS_3URLERKN3WTF6StringE(i4, i2, i5, __ZN3WTF11emptyStringEv() | 0);
 __ZN7WebCore9CSSParserC1ERKNS_16CSSParserContextE(i6, i4);
 HEAP32[i1 >> 2] = i6;
 i6 = HEAP32[i4 + 48 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i1 = i6 | 0;
   i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i1 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i6 | 0;
 i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheet7setTextERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = 9;
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 HEAP8[i3 + 4 | 0] = 1;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i2 = i7 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i3 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i7;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = 0;
 __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEE5clearEv(i3 + 8 | 0);
 __ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i5);
 i5 = i1 + 60 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i6 = 1;
  STACKTOP = i4;
  return i6 | 0;
 }
 i3 = i1 + 64 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i2 = i1 + 56 | 0;
 if ((i8 | 0) != 0) {
  i1 = HEAP32[i2 >> 2] | 0;
  i7 = i1 + (i8 << 2) | 0;
  i8 = i1;
  while (1) {
   i1 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i9 = i1 + 4 | 0;
     i10 = i9 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i10 >> 2] = i11;
      break;
     }
     i11 = i9 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = 1;
  STACKTOP = i4;
  return i6 | 0;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i6 = 1;
 STACKTOP = i4;
 return i6 | 0;
}
function __ZN9Inspector11TypeBuilder3CSS19CSSStyleSheetHeader7BuilderILi1EE9setOriginENS1_16StyleSheetOrigin4EnumE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 448;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector11TypeBuilder23getWebEnumConstantValueEi(i8, i2);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i8);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN9Inspector11TypeBuilder3CSS7CSSRule7BuilderILi3EE9setOriginENS1_16StyleSheetOrigin4EnumE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 448;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector11TypeBuilder23getWebEnumConstantValueEi(i8, i2);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i8);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN9Inspector11TypeBuilder3CSS8CSSMedia7BuilderILi1EE9setSourceENS2_6Source4EnumE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 224;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector11TypeBuilder23getWebEnumConstantValueEi(i8, i2);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i8);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZL17flattenSourceDataPN3WTF6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEES7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 i4 = i1 | 0;
 i1 = i2 + 8 | 0;
 i5 = i2 + 4 | 0;
 i6 = i2 | 0;
 i7 = 0;
 while (1) {
  i8 = (HEAP32[i4 >> 2] | 0) + (i7 << 2) | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  i10 = HEAP32[i9 + 4 >> 2] | 0;
  do {
   if ((i10 | 0) == 1) {
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) != (HEAP32[i5 >> 2] | 0)) {
     HEAP32[(HEAP32[i6 >> 2] | 0) + (i11 << 2) >> 2] = i9;
     if ((i9 | 0) != 0) {
      i12 = i9 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     }
     HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
     break;
    }
    i12 = i11 + 1 | 0;
    i13 = HEAP32[i6 >> 2] | 0;
    do {
     if (i13 >>> 0 > i8 >>> 0) {
      i14 = 10;
     } else {
      if ((i13 + (i11 << 2) | 0) >>> 0 <= i8 >>> 0) {
       i14 = 10;
       break;
      }
      __ZN3WTF6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i12);
      i15 = HEAP32[i6 >> 2] | 0;
      i16 = i15 + (i8 - i13 >> 2 << 2) | 0;
      i17 = i15;
     }
    } while (0);
    if ((i14 | 0) == 10) {
     i14 = 0;
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i12);
     i16 = i8;
     i17 = HEAP32[i6 >> 2] | 0;
    }
    i13 = HEAP32[i16 >> 2] | 0;
    HEAP32[i17 + (HEAP32[i1 >> 2] << 2) >> 2] = i13;
    if ((i13 | 0) != 0) {
     i11 = i13 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    }
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   } else if ((i10 | 0) == 4) {
    __ZL17flattenSourceDataPN3WTF6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEES7_(i9 + 40 | 0, i2);
   }
  } while (0);
  i7 = i7 + 1 | 0;
  if (i7 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore19InspectorStyleSheet14togglePropertyERKNS_14InspectorCSSIdEjbRi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 15](i7, i1, i2);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i7 | 0) == 0) {
  HEAP32[i5 >> 2] = 8;
  i9 = 0;
  STACKTOP = i6;
  return i9 | 0;
 }
 do {
  if (__ZN7WebCore14InspectorStyle14togglePropertyEjbRi(i7, i3, i4, i5) | 0) {
   do {
    if (i4) {
     i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] | 0;
     i10 = i8 | 0;
     HEAP32[i10 >> 2] = i7;
     i11 = i7 + 4 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
     FUNCTION_TABLE_vii[i2 & 31](i1, i8);
     i2 = HEAP32[i10 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     i10 = i2 + 4 | 0;
     i2 = i10 | 0;
     i11 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i2 >> 2] = i11;
      break;
     }
     i11 = i10 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
    } else {
     if ((HEAP32[i7 + 32 >> 2] | 0) != 0) {
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 40 >> 2] & 31](i1, HEAP32[i7 + 16 >> 2] | 0);
    }
   } while (0);
   i11 = HEAP32[i1 + 68 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i12 = 1;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 31](i11, i1);
   i12 = 1;
  } else {
   i12 = 0;
  }
 } while (0);
 i1 = i7 + 4 | 0;
 i7 = i1 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i7 >> 2] = i8;
  i9 = i12;
  STACKTOP = i6;
  return i9 | 0;
 }
 i8 = i1 - 4 | 0;
 if ((i8 | 0) == 0) {
  i9 = i12;
  STACKTOP = i6;
  return i9 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
 i9 = i12;
 STACKTOP = i6;
 return i9 | 0;
}
function __ZN7WebCore19InspectorStyleSheet17reparseStyleSheetERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i1 + 16 | 0;
 __ZN7WebCore13CSSStyleSheet17RuleMutationScopeC1EPS0_NS0_16RuleMutationTypeEPNS_18StyleRuleKeyframesE(i4, HEAP32[i6 >> 2] | 0, 0, 0);
 __ZN7WebCore18StyleSheetContents10clearRulesEv(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0);
 __ZN7WebCore13CSSStyleSheet17RuleMutationScopeD1Ev(i4);
 __ZN7WebCore13CSSStyleSheet17RuleMutationScopeC1EPS0_NS0_16RuleMutationTypeEPNS_18StyleRuleKeyframesE(i5, HEAP32[i6 >> 2] | 0, 0, 0);
 __ZN7WebCore18StyleSheetContents11parseStringERKN3WTF6StringE(HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] | 0, i2) | 0;
 __ZN7WebCore13CSSStyleSheet27clearChildRuleCSSOMWrappersEv(HEAP32[i6 >> 2] | 0);
 i6 = i1 + 36 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 40 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i7 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i7 << 3) >> 2] | 0) != -1) {
      i8 = HEAP32[i2 + (i7 << 3) + 4 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      i9 = i8 + 4 | 0;
      i8 = i9 | 0;
      i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) != 0) {
       HEAP32[i8 >> 2] = i10;
       break;
      }
      i10 = i9 - 4 | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
     }
    } while (0);
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
  _memset(i6 | 0, 0, 16) | 0;
 }
 i6 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore13CSSStyleSheet17RuleMutationScopeD1Ev(i5);
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 31](i6, i1);
 __ZN7WebCore13CSSStyleSheet17RuleMutationScopeD1Ev(i5);
 STACKTOP = i3;
 return;
}
function __ZN9Inspector11TypeBuilder3CSS11CSSProperty9setStatusENS2_6Status4EnumE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 HEAP32[i7 >> 2] = H_BASE + 184;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector11TypeBuilder23getWebEnumConstantValueEi(i8, i2);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i8);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1 | 0, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i1 = i2 | 0;
   i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i1 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore19InspectorStyleSheet20inlineStyleSheetTextEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i1 = HEAP32[i5 + 24 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i5 & 4 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i5 & 16 | 0) == 0) {
  i8 = 6;
 } else {
  if ((HEAP32[i7 + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) + 12 >> 2] | 0)) {
   i8 = 6;
  }
 }
 do {
  if ((i8 | 0) == 6) {
   i5 = HEAP32[__ZN7WebCore8SVGNames8styleTagE >> 2] | 0;
   if ((i7 | 0) == (i5 | 0)) {
    break;
   }
   if ((HEAP32[i7 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
    i6 = 0;
    STACKTOP = i3;
    return i6 | 0;
   }
   if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    break;
   } else {
    i6 = 0;
   }
   STACKTOP = i3;
   return i6 | 0;
  }
 } while (0);
 __ZNK7WebCore4Node11textContentEb(i4, i1, 0);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i4;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 i1 = i2 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  HEAP32[i1 >> 2] = i7;
  i6 = 1;
  STACKTOP = i3;
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore19InspectorStyleSheet10ensureTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i2;
  return i7 | 0;
 }
 if ((HEAP8[i6 + 4 | 0] & 1) != 0) {
  i7 = 1;
  STACKTOP = i2;
  return i7 | 0;
 }
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = 0;
 if (__ZNK7WebCore19InspectorStyleSheet20inlineStyleSheetTextEPN3WTF6StringE(i1, i4) | 0) {
  i8 = 5;
 } else {
  if (__ZNK7WebCore19InspectorStyleSheet22resourceStyleSheetTextEPN3WTF6StringE(i1, i4) | 0) {
   i8 = 5;
  } else {
   i9 = 0;
  }
 }
 if ((i8 | 0) == 5) {
  i8 = HEAP32[i5 >> 2] | 0;
  HEAP8[i8 + 4 | 0] = 1;
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  }
  i4 = i8 | 0;
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
  HEAP32[i3 >> 2] = 0;
  __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEE5clearEv(i8 + 8 | 0);
  __ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i3);
  i9 = 1;
 }
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i7 = i9;
  STACKTOP = i2;
  return i7 | 0;
 }
 i6 = i3 | 0;
 i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i7 = i9;
  STACKTOP = i2;
  return i7 | 0;
 } else {
  HEAP32[i6 >> 2] = i8;
  i7 = i9;
  STACKTOP = i2;
  return i7 | 0;
 }
 return 0;
}
function __ZNK7WebCore33InspectorStyleSheetForInlineStyle7getTextEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 88 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  i7 = HEAP32[i1 + 72 >> 2] | 0;
  __ZN3WTF12AtomicString3addEPKh(i4, H_BASE + 480 | 0);
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
  i4 = __ZNK7WebCore7Element12getAttributeERKN3WTF12AtomicStringE(i7, i5) | 0;
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
  i5 = HEAP32[i4 >> 2] | 0;
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
  }
  i4 = i1 + 84 | 0;
  i7 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = i5;
  do {
   if ((i7 | 0) != 0) {
    i5 = i7 | 0;
    i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i5 >> 2] = i8;
     break;
    }
   }
  } while (0);
  HEAP8[i6] = 1;
  i9 = i4;
 } else {
  i9 = i1 + 84 | 0;
 }
 i1 = HEAP32[i9 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i1;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return 1;
 }
 i1 = i2 | 0;
 i9 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return 1;
 } else {
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i3;
  return 1;
 }
 return 0;
}
function __ZN3WTF7HashMapIPN7WebCore19CSSStyleDeclarationENS_6RefPtrINS1_14InspectorStyleEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
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
   i9 = i10 & i5;
   i11 = i4 + (i9 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L4 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i10 >>> 23) + ~i10 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i9;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 << 3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L4;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 * 28 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 28 & -1) * 28 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i12 + (i6 * 28 & -1) | 0, i11 | 0);
 HEAP8[i12 + (i6 * 28 & -1) + 20 | 0] = HEAP8[i11 + 20 | 0] & 1;
 HEAP8[i12 + (i6 * 28 & -1) + 21 | 0] = HEAP8[i11 + 21 | 0] & 1;
 i2 = HEAP32[i11 + 24 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) + 24 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 }
 i6 = i2 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 i13 = HEAP32[i3 >> 2] | 0;
 i14 = i13 + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 return;
}
function __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 * 28 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 28 & -1) * 28 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 __ZN7WebCore21CSSPropertySourceDataC1ERKS0_(i12 + (i6 * 28 & -1) | 0, i11 | 0);
 HEAP8[i12 + (i6 * 28 & -1) + 20 | 0] = HEAP8[i11 + 20 | 0] & 1;
 HEAP8[i12 + (i6 * 28 & -1) + 21 | 0] = HEAP8[i11 + 21 | 0] & 1;
 i2 = HEAP32[i11 + 24 >> 2] | 0;
 HEAP32[i12 + (i6 * 28 & -1) + 24 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  i14 = i13 + 1 | 0;
  HEAP32[i3 >> 2] = i14;
  return;
 }
 i6 = i2 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 i13 = HEAP32[i3 >> 2] | 0;
 i14 = i13 + 1 | 0;
 HEAP32[i3 >> 2] = i14;
 return;
}
function __ZN7WebCore22InspectorStylePropertyaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 8 | 0] = HEAP8[i2 + 8 | 0] & 1;
 HEAP8[i1 + 9 | 0] = HEAP8[i2 + 9 | 0] & 1;
 i3 = i2 + 12 | 0;
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 HEAP8[i1 + 20 | 0] = HEAP8[i2 + 20 | 0] & 1;
 HEAP8[i1 + 21 | 0] = HEAP8[i2 + 21 | 0] & 1;
 i5 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 24 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i5 = i4 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return i1 | 0;
 } else {
  HEAP32[i5 >> 2] = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore33InspectorStyleSheetForInlineStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1e3;
 i2 = HEAP32[i1 + 84 >> 2] | 0;
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
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 4 | 0;
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore17CSSRuleSourceDataD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore19InspectorStyleSheetD2Ev(i6);
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  i6 = i1 | 0;
  __ZN7WebCore19InspectorStyleSheetD2Ev(i6);
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  i6 = i1 | 0;
  __ZN7WebCore19InspectorStyleSheetD2Ev(i6);
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 i6 = i1 | 0;
 __ZN7WebCore19InspectorStyleSheetD2Ev(i6);
 return;
}
function __ZN9Inspector11TypeBuilder3CSS11CSSProperty11setImplicitEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 HEAP32[i7 >> 2] = H_BASE + 168;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector19InspectorBasicValue6createEb(i5, i2);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1 | 0, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i1 = i2 | 0;
   i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i1 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheet20forgetInspectorStyleEPNS_19CSSStyleDeclarationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = i2;
 i2 = i1 + 36 | 0;
 __ZN3WTF7HashMapIPN7WebCore19CSSStyleDeclarationENS_6RefPtrINS1_14InspectorStyleEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i4, i2, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 i4 = i2 | 0;
 i6 = i1 + 40 | 0;
 if ((i5 | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 + 4 | 0;
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 52 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 48 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i1;
 i5 = HEAP32[i6 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF9HashTableIPN7WebCore19CSSStyleDeclarationENS_12KeyValuePairIS3_NS_6RefPtrINS1_14InspectorStyleEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i4, (i5 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL13asCSSRuleListEPNS_13CSSStyleSheetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i3 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore17StaticCSSRuleListC1Ev(i3);
 i4 = i3 + 4 | 0;
 i5 = i4;
 i6 = __ZNK7WebCore13CSSStyleSheet6lengthEv(i2) | 0;
 if ((i6 | 0) != 0) {
  i7 = i3 + 12 | 0;
  i8 = i3 + 8 | 0;
  i9 = i4;
  i4 = 0;
  while (1) {
   i10 = __ZN7WebCore13CSSStyleSheet4itemEj(i2, i4) | 0;
   do {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 15](i10) | 0) != 2) {
     i11 = HEAP32[i7 >> 2] | 0;
     if ((i11 | 0) == (HEAP32[i8 >> 2] | 0)) {
      __ZN3WTF6VectorINS_6RefPtrIN7WebCore7CSSRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i11 + 1 | 0);
      HEAP32[(HEAP32[i9 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) >> 2] = i10;
      if ((i10 | 0) != 0) {
       i12 = i10 + 4 | 0;
       HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
      }
      HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
      break;
     } else {
      HEAP32[(HEAP32[i9 >> 2] | 0) + (i11 << 2) >> 2] = i10;
      if ((i10 | 0) != 0) {
       i11 = i10 + 4 | 0;
       HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
      }
      HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
      break;
     }
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if (i4 >>> 0 >= i6 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore19InspectorStyleSheet19inspectorStyleForIdERKNS_14InspectorCSSIdE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2, i3) | 0;
 HEAP32[i5 >> 2] = i7;
 if ((i7 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i7 = i2 + 36 | 0;
 __ZN3WTF7HashMapIPN7WebCore19CSSStyleDeclarationENS_6RefPtrINS1_14InspectorStyleEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i6, i7, i5);
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) != ((HEAP32[i7 >> 2] | 0) + (HEAP32[i2 + 40 >> 2] << 3) | 0)) {
  i7 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = i7;
  if ((i7 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i8 = i7 + 4 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 63](i8);
 }
 i5 = __ZN3WTF10fastMallocEj(48) | 0;
 HEAP32[i5 + 4 >> 2] = 1;
 HEAP32[i5 >> 2] = H_BASE + 1144;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i5 + 8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 12 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i5 + 16 >> 2] = i8;
 HEAP32[i5 + 20 >> 2] = i2;
 _memset(i5 + 24 | 0, 0, 21) | 0;
 HEAP32[i1 >> 2] = i5;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19InspectorStyleSheet12setStyleTextERKNS_14InspectorCSSIdERKN3WTF6StringEPS5_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 15](i7, i1, i2);
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i7 | 0) == 0) {
  HEAP32[i5 >> 2] = 8;
  i8 = 0;
  STACKTOP = i6;
  return i8 | 0;
 }
 if ((i4 | 0) == 0) {
  i9 = 5;
 } else {
  if (__ZNK7WebCore14InspectorStyle7getTextEPN3WTF6StringE(i7, i4) | 0) {
   i9 = 5;
  } else {
   i10 = 0;
  }
 }
 do {
  if ((i9 | 0) == 5) {
   i4 = HEAP32[i7 + 20 >> 2] | 0;
   if (!(FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 7](i4, HEAP32[i7 + 16 >> 2] | 0, i3, i5) | 0)) {
    i10 = 0;
    break;
   }
   i4 = HEAP32[i1 + 68 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i10 = 1;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 31](i4, i1);
   i10 = 1;
  }
 } while (0);
 i1 = i7 + 4 | 0;
 i7 = i1 | 0;
 i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i7 >> 2] = i5;
  i8 = i10;
  STACKTOP = i6;
  return i8 | 0;
 }
 i5 = i1 - 4 | 0;
 if ((i5 | 0) == 0) {
  i8 = i10;
  STACKTOP = i6;
  return i8 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 i8 = i10;
 STACKTOP = i6;
 return i8 | 0;
}
function __ZN7WebCore16CSSParserContextC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i2 + 4 | 0;
 i3 = i1 + 4 | 0;
 i5 = HEAP8[i3] & -2 | HEAP8[i4] & 1;
 HEAP8[i3] = i5;
 HEAP8[i3] = i5 & -3 | HEAP8[i4] & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 i4 = HEAP32[i2 + 48 >> 2] | 0;
 HEAP32[i1 + 48 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 HEAP8[i1 + 56 | 0] = HEAP8[i2 + 56 | 0] & 1;
 HEAP8[i1 + 57 | 0] = HEAP8[i2 + 57 | 0] & 1;
 HEAP8[i1 + 58 | 0] = HEAP8[i2 + 58 | 0] & 1;
 HEAP8[i1 + 59 | 0] = HEAP8[i2 + 59 | 0] & 1;
 HEAP8[i1 + 60 | 0] = HEAP8[i2 + 60 | 0] & 1;
 HEAP8[i1 + 61 | 0] = HEAP8[i2 + 61 | 0] & 1;
 HEAP8[i1 + 62 | 0] = HEAP8[i2 + 62 | 0] & 1;
 HEAP8[i1 + 63 | 0] = HEAP8[i2 + 63 | 0] & 1;
 HEAP8[i1 + 64 | 0] = HEAP8[i2 + 64 | 0] & 1;
 return;
}
function __ZNK7WebCore19InspectorStyleSheet16ruleIndexByStyleEPNS_19CSSStyleDeclarationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 64 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   __ZN7WebCoreL13asCSSRuleListEPNS_13CSSStyleSheetE(i4, HEAP32[i1 + 16 >> 2] | 0);
   __ZN7WebCore19InspectorStyleSheet16collectFlatRulesEN3WTF10PassRefPtrINS_11CSSRuleListEEEPNS1_6VectorINS1_6RefPtrINS_12CSSStyleRuleEEELj0ENS1_15CrashOnOverflowEEE(i4, i1 + 56 | 0);
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 63](i6);
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i7 = -1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i1 + 56 | 0;
 i1 = 0;
 i8 = i4;
 while (1) {
  if (i8 >>> 0 <= i1 >>> 0) {
   i9 = 7;
   break;
  }
  if ((__ZN7WebCore12CSSStyleRule5styleEv(HEAP32[(HEAP32[i6 >> 2] | 0) + (i1 << 2) >> 2] | 0) | 0) == (i2 | 0)) {
   i7 = i1;
   i9 = 12;
   break;
  }
  i10 = i1 + 1 | 0;
  if (i10 >>> 0 >= i4 >>> 0) {
   i7 = -1;
   i9 = 14;
   break;
  }
  i1 = i10;
  i8 = HEAP32[i5 >> 2] | 0;
 }
 if ((i9 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i9 | 0) == 12) {
  STACKTOP = i3;
  return i7 | 0;
 } else if ((i9 | 0) == 14) {
  STACKTOP = i3;
  return i7 | 0;
 }
 return 0;
}
function __ZNK3WTF12StringAppendINS0_INS0_INS_6StringEPKcEES1_EES3_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i8 = i5 + 8 | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, HEAP32[i2 + 12 >> 2] | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
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
function __ZN7WebCore17CSSRuleSourceDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 48 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 40 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF6VectorIN7WebCore21CSSPropertySourceDataELj0ENS_15CrashOnOverflowEED2Ev(i2 + 4 | 0);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = i1 + 32 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 24 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZNK7WebCore19InspectorStyleSheet8finalURLEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 4;
  } else {
   i7 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 64 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i6 = 4;
    break;
   }
   if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
    i6 = 4;
    break;
   }
   HEAP32[i4 >> 2] = i7;
   i8 = i7 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   i9 = i7;
   i6 = 7;
  }
 } while (0);
 do {
  if ((i6 | 0) == 4) {
   i5 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) == 0) {
    i10 = 1;
    i11 = 0;
    break;
   }
   i7 = i5 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   i9 = i5;
   i6 = 7;
  }
 } while (0);
 if ((i6 | 0) == 7) {
  i10 = (HEAP32[i9 + 4 >> 2] | 0) == 0;
  i11 = i9;
 }
 i9 = HEAP32[(i10 ? i2 + 24 | 0 : i4) >> 2] | 0;
 HEAP32[i1 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i1 = i9 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i11 | 0;
 i9 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheet22rememberInspectorStyleEN3WTF6RefPtrINS_14InspectorStyleEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 HEAP32[i4 >> 2] = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2];
 __ZN3WTF9HashTableIPN7WebCore19CSSStyleDeclarationENS_12KeyValuePairIS3_NS_6RefPtrINS1_14InspectorStyleEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i5, i1 + 36 | 0, i4, i2);
 if ((HEAP8[i5 + 8 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = i5 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i2 + 4 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i2 + 4 | 0;
 i2 = i5 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i2 >> 2] = i6;
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
function __ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _strlen(i4 | 0) | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 0;
  } else {
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = HEAP32[i7 + 8 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i8 = 0;
    break;
   } else {
    i11 = 0;
   }
   while (1) {
    HEAP8[i2 + i11 | 0] = HEAP8[i10 + i11 | 0] | 0;
    i11 = i11 + 1 | 0;
    if (i11 >>> 0 >= i9 >>> 0) {
     break;
    }
   }
   i9 = HEAP32[i6 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i8 = 0;
    break;
   }
   i8 = HEAP32[i9 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i2 + i8 | 0, i4 | 0, i5) | 0;
 i5 = _strlen(HEAP32[i3 >> 2] | 0) | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i3 = i12 + i5 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 i12 = HEAP32[i5 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i13 = 0;
 }
 while (1) {
  HEAP8[i2 + (i3 + i13) | 0] = HEAP8[i12 + i13 | 0] | 0;
  i13 = i13 + 1 | 0;
  if (i13 >>> 0 >= i1 >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore14InspectorStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1144;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
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
 i2 = HEAP32[i1 + 36 >> 2] | 0;
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
 i2 = i1 + 24 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
  __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6shrinkEj(i2, 0);
 }
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
function __ZN7WebCore14InspectorStyleD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 1144;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
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
 i2 = HEAP32[i1 + 36 >> 2] | 0;
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
 i2 = i1 + 24 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
  __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6shrinkEj(i2, 0);
 }
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
function __ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6shrinkEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i1 + 8 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = i3 + (i1 * 28 & -1) | 0;
 if ((i1 | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = i2;
  return;
 }
 i1 = i3 + (i2 * 28 & -1) | 0;
 while (1) {
  i3 = HEAP32[i1 + 24 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i6 = i3 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i7 = i3 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i6 = i3 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i1 = i1 + 28 | 0;
  if ((i1 | 0) == (i5 | 0)) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i2;
 return;
}
function __ZN9Inspector11TypeBuilder3CSS7CSSRule7BuilderILi7EE8setStyleEN3WTF10PassRefPtrINS1_8CSSStyleEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i5 >> 2] = H_BASE + 480;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 i5 = i6 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i5 >> 2] = i2;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i7, i4, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 4 | 0;
   i7 = i5 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i7 >> 2] = i2;
    break;
   }
   i2 = i5 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 }
 i4 = i6 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 } else {
  HEAP32[i4 >> 2] = i2;
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 }
 return 0;
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
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
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheet15setPropertyTextERKNS_14InspectorCSSIdEjRKN3WTF6StringEbPS5_Ri(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 15](i9, i1, i2);
 i2 = i9 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i9 | 0) == 0) {
  HEAP32[i7 >> 2] = 8;
  i10 = 0;
  STACKTOP = i8;
  return i10 | 0;
 }
 do {
  if (__ZN7WebCore14InspectorStyle15setPropertyTextEjRKN3WTF6StringEbPS2_Ri(i9, i3, i4, i5, i6, i7) | 0) {
   i2 = HEAP32[i1 + 68 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i11 = 1;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 31](i2, i1);
   i11 = 1;
  } else {
   i11 = 0;
  }
 } while (0);
 i1 = i9 + 4 | 0;
 i9 = i1 | 0;
 i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i9 >> 2] = i7;
  i10 = i11;
  STACKTOP = i8;
  return i10 | 0;
 }
 i7 = i1 - 4 | 0;
 if ((i7 | 0) == 0) {
  i10 = i11;
  STACKTOP = i8;
  return i10 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
 i10 = i11;
 STACKTOP = i8;
 return i10 | 0;
}
function __ZN7WebCore19InspectorStyleSheet12ruleSelectorERKNS_14InspectorCSSIdERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i2 + 64 | 0;
   do {
    if ((HEAP32[i8 >> 2] | 0) == 0) {
     __ZN7WebCoreL13asCSSRuleListEPNS_13CSSStyleSheetE(i6, i7);
     __ZN7WebCore19InspectorStyleSheet16collectFlatRulesEN3WTF10PassRefPtrINS_11CSSRuleListEEEPNS1_6VectorINS1_6RefPtrINS_12CSSStyleRuleEEELj0ENS1_15CrashOnOverflowEEE(i6, i2 + 56 | 0);
     i9 = HEAP32[i6 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 63](i9);
    }
   } while (0);
   i9 = HEAP32[i3 + 4 >> 2] | 0;
   if (i9 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
    break;
   }
   i10 = HEAP32[(HEAP32[i2 + 56 >> 2] | 0) + (i9 << 2) >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   __ZNK7WebCore12CSSStyleRule12selectorTextEv(i1, i10);
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i4 >> 2] = 8;
 __ZN3WTF6StringC1EPKc(i1, H_BASE + 1184 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore33InspectorStyleSheetForInlineStyle6createEPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_7ElementEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumEPNS_19InspectorStyleSheet8ListenerE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = __ZN3WTF10fastMallocEj(92) | 0;
 i10 = i8 | 0;
 i11 = i4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i10 >> 2] = i4;
 __ZN7WebCore33InspectorStyleSheetForInlineStyleC2EPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_7ElementEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumEPNS_19InspectorStyleSheet8ListenerE(i9, i2, i3, i8, i5, i6);
 HEAP32[i1 >> 2] = i9;
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i10 = i9 + 8 | 0;
 i9 = i10 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 HEAP32[i9 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i7;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 STACKTOP = i7;
 return;
}
function __ZN3WTF6VectorIN7WebCore21CSSPropertySourceDataELj0ENS_15CrashOnOverflowEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 20 & -1) | 0;
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
   i5 = HEAP32[i3 >> 2] | 0;
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
   i3 = i3 + 20 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEEaSERKNS_10PassOwnPtrIS7_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = i4 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i5 = i4 | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i3 << 2) | 0;
  i3 = i6;
  while (1) {
   i6 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i8 = i6 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i4);
 return i1 | 0;
}
function __ZNK7WebCore19InspectorStyleSheet10styleForIdERKNS_14InspectorCSSIdE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = i1 + 64 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   __ZN7WebCoreL13asCSSRuleListEPNS_13CSSStyleSheetE(i4, i5);
   __ZN7WebCore19InspectorStyleSheet16collectFlatRulesEN3WTF10PassRefPtrINS_11CSSRuleListEEEPNS1_6VectorINS1_6RefPtrINS_12CSSStyleRuleEEELj0ENS1_15CrashOnOverflowEEE(i4, i1 + 56 | 0);
   i8 = HEAP32[i4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 63](i8);
  }
 } while (0);
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if (i4 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = HEAP32[(HEAP32[i1 + 56 >> 2] | 0) + (i4 << 2) >> 2] | 0;
 if ((i7 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i6 = __ZN7WebCore12CSSStyleRule5styleEv(i7) | 0;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZNK7WebCore14InspectorStyle17extractSourceDataEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 20 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 28 >> 2] & 15](i6) | 0)) {
    break;
   }
   i7 = HEAP32[i5 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 15](i4, i7, HEAP32[i2 + 16 >> 2] | 0);
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i9 = i8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i7 = i9 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore17CSSRuleSourceDataD2Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i7 >> 2] = i8;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17CSSRuleSourceData6createENS0_4TypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = __ZN3WTF10fastMallocEj(52) | 0;
 i4 = i3;
 HEAP32[i3 >> 2] = 1;
 HEAP32[i3 + 4 >> 2] = i2;
 __ZN7WebCore11SourceRangeC1Ev(i3 + 8 | 0);
 __ZN7WebCore11SourceRangeC1Ev(i3 + 16 | 0);
 i5 = i3 + 36 | 0;
 _memset(i3 + 24 | 0, 0, 28) | 0;
 if (!((i2 | 0) == 6 | (i2 | 0) == 5 | (i2 | 0) == 1)) {
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i4;
  return;
 }
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 i3 = i2;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i2 >> 2] = 1;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAP32[i2 + 8 >> 2] = 0;
 HEAP32[i2 + 12 >> 2] = 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i3 | 0) == 0) {
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i4;
  return;
 }
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF6VectorIN7WebCore21CSSPropertySourceDataELj0ENS_15CrashOnOverflowEED2Ev(i3 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i3);
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheet6createEPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_13CSSStyleSheetEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumES6_PNS0_8ListenerE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0;
 i8 = __ZN3WTF10fastMallocEj(72) | 0;
 i9 = i4 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 1;
 HEAP32[i8 >> 2] = H_BASE + 1072;
 HEAP32[i8 + 8 >> 2] = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i8 + 12 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i8 + 16 >> 2] = i4;
 HEAP32[i8 + 20 >> 2] = i5;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i8 + 24 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP8[i8 + 28 | 0] = 0;
 _memset(i8 + 36 | 0, 0, 32) | 0;
 HEAP32[i8 + 68 >> 2] = i7;
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP8[i7 + 4 | 0] = 0;
 HEAP32[i7 + 8 >> 2] = 0;
 HEAP32[i8 + 32 >> 2] = i7;
 HEAP32[i1 >> 2] = i8;
 return;
}
function __ZN16ParsedStyleSheet13setSourceDataEN3WTF10PassOwnPtrINS0_6VectorINS0_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS0_15CrashOnOverflowEEEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = i1 + 8 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEE5clearEv(i2);
  STACKTOP = i3;
  return;
 } else {
  i1 = __ZN3WTF10fastMallocEj(12) | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  HEAP32[i4 >> 2] = i1;
  __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEEaSERKNS_10PassOwnPtrIS7_EE(i2, i4) | 0;
  __ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i4);
  __ZL17flattenSourceDataPN3WTF6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEES7_(HEAP32[i5 >> 2] | 0, HEAP32[i2 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheetC2EPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_13CSSStyleSheetEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumES6_PNS0_8ListenerE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 1072;
 HEAP32[i1 + 8 >> 2] = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i4;
 HEAP32[i1 + 20 >> 2] = i5;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 28 | 0] = 0;
 _memset(i1 + 36 | 0, 0, 32) | 0;
 HEAP32[i1 + 68 >> 2] = i7;
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP8[i7 + 4 | 0] = 0;
 HEAP32[i7 + 8 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i7;
 return;
}
function __ZN7WebCore19InspectorStyleSheetC1EPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_13CSSStyleSheetEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumES6_PNS0_8ListenerE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 1072;
 HEAP32[i1 + 8 >> 2] = i2;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i4;
 HEAP32[i1 + 20 >> 2] = i5;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 28 | 0] = 0;
 _memset(i1 + 36 | 0, 0, 32) | 0;
 HEAP32[i1 + 68 >> 2] = i7;
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP8[i7 + 4 | 0] = 0;
 HEAP32[i7 + 8 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = i7;
 return;
}
function __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEE5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore19InspectorStyleSheet9ruleForIdERKNS_14InspectorCSSIdE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = i1 + 64 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   __ZN7WebCoreL13asCSSRuleListEPNS_13CSSStyleSheetE(i4, i5);
   __ZN7WebCore19InspectorStyleSheet16collectFlatRulesEN3WTF10PassRefPtrINS_11CSSRuleListEEEPNS1_6VectorINS1_6RefPtrINS_12CSSStyleRuleEEELj0ENS1_15CrashOnOverflowEEE(i4, i1 + 56 | 0);
   i8 = HEAP32[i4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 63](i8);
  }
 } while (0);
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if (i4 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i6 = HEAP32[(HEAP32[i1 + 56 >> 2] | 0) + (i4 << 2) >> 2] | 0;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i2 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i2 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      __ZN7WebCore17CSSRuleSourceDataD2Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN16ParsedStyleSheet7setTextERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP8[i1 + 4 | 0] = 1;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i5;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEE5clearEv(i1 + 8 | 0);
 __ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore12CSSStyleRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore7CSSRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore33InspectorStyleSheetForInlineStyle11lineEndingsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 72 >> 2] | 0;
 __ZN3WTF12AtomicString3addEPKh(i4, H_BASE + 480 | 0);
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = __ZNK7WebCore7Element12getAttributeERKN3WTF12AtomicStringE(i6, i5) | 0;
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
 __ZN7WebCore18ContentSearchUtils11lineEndingsERKN3WTF6StringE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore19InspectorStyleSheet6ruleIdEPNS_12CSSStyleRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = __ZN7WebCore12CSSStyleRule5styleEv(i3) | 0;
 i3 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 63](i2, i4) | 0;
 if ((i3 | 0) == -1) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  return;
 }
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = i3;
  return;
 }
 i2 = i4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i6 = i5 + 2 | 0;
 HEAP32[i1 >> 2] = i4;
 HEAP32[i2 >> 2] = i5 + 4;
 HEAP32[i1 + 4 >> 2] = i3;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i2 >> 2] = i6;
  return;
 }
}
function __ZNK7WebCore33InspectorStyleSheetForInlineStyle16elementStyleTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 72 >> 2] | 0;
 __ZN3WTF12AtomicString3addEPKh(i3, H_BASE + 480 | 0);
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
 i3 = __ZNK7WebCore7Element12getAttributeERKN3WTF12AtomicStringE(i5, i4) | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return i3 | 0;
 }
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return i3 | 0;
 } else {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i2;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore19InspectorStyleSheet13ruleOrStyleIdEPNS_19CSSStyleDeclarationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 63](i2, i3) | 0;
 if ((i4 | 0) == -1) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  return;
 }
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = i4;
  return;
 }
 i2 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i6 = i5 + 2 | 0;
 HEAP32[i1 >> 2] = i3;
 HEAP32[i2 >> 2] = i5 + 4;
 HEAP32[i1 + 4 >> 2] = i4;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  return;
 } else {
  HEAP32[i2 >> 2] = i6;
  return;
 }
}
function __ZN7WebCore14InspectorStyle6createERKNS_14InspectorCSSIdEN3WTF10PassRefPtrINS_19CSSStyleDeclarationEEEPNS_19InspectorStyleSheetE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = __ZN3WTF10fastMallocEj(48) | 0;
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 1;
 HEAP32[i5 >> 2] = H_BASE + 1144;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i5 + 8 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 12 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i5 + 16 >> 2] = i3;
 HEAP32[i5 + 20 >> 2] = i4;
 _memset(i5 + 24 | 0, 0, 21) | 0;
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZNK7WebCore19InspectorStyleSheet17ruleSourceDataForEPNS_19CSSStyleDeclarationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = HEAP32[i2 + 32 >> 2] | 0;
 i5 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 63](i2, i3) | 0;
 i3 = HEAP32[i4 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i6 = 0;
  } else {
   if ((HEAP32[i3 + 8 >> 2] | 0) >>> 0 <= i5 >>> 0) {
    i6 = 0;
    break;
   }
   i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 << 2) >> 2] | 0;
   if ((i4 | 0) == 0) {
    i6 = 0;
    break;
   }
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
   i6 = i4;
  }
 } while (0);
 HEAP32[i1 >> 2] = i6;
 return;
}
function __ZNK7WebCore19InspectorStyleSheet7getTextEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if (!(__ZNK7WebCore19InspectorStyleSheet10ensureTextEv(i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[HEAP32[i1 + 32 >> 2] >> 2] | 0;
 if ((i4 | 0) != 0) {
  i1 = i4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i3 = 1;
  return i3 | 0;
 } else {
  HEAP32[i4 >> 2] = i1;
  i3 = 1;
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore19InspectorStyleSheet15ensureFlatRulesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 64 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCoreL13asCSSRuleListEPNS_13CSSStyleSheetE(i3, HEAP32[i1 + 16 >> 2] | 0);
 __ZN7WebCore19InspectorStyleSheet16collectFlatRulesEN3WTF10PassRefPtrINS_11CSSRuleListEEEPNS1_6VectorINS1_6RefPtrINS_12CSSStyleRuleEEELj0ENS1_15CrashOnOverflowEEE(i3, i1 + 56 | 0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 63](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14InspectorStyleC2ERKNS_14InspectorCSSIdEN3WTF10PassRefPtrINS_19CSSStyleDeclarationEEEPNS_19InspectorStyleSheetE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 1144;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 4 >> 2];
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 _memset(i1 + 24 | 0, 0, 21) | 0;
 return;
}
function __ZN7WebCore14InspectorStyleC1ERKNS_14InspectorCSSIdEN3WTF10PassRefPtrINS_19CSSStyleDeclarationEEEPNS_19InspectorStyleSheetE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 1144;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 4 >> 2];
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 _memset(i1 + 24 | 0, 0, 21) | 0;
 return;
}
function __ZN7WebCore19InspectorStyleSheet13styleSheetURLEPNS_13CSSStyleSheetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 64 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[i1 >> 2] = i3;
   i4 = i3 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
   return;
  }
 } while (0);
 i2 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
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
function __ZNK16ParsedStyleSheet16ruleSourceDataAtEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 8 >> 2] | 0) >>> 0 <= i3 >>> 0) {
    break;
   }
   i2 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i3 << 2) >> 2] | 0;
   HEAP32[i1 >> 2] = i2;
   if ((i2 | 0) == 0) {
    return;
   }
   i5 = i2 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
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
function __ZNK7WebCore19InspectorStyleSheet22originalStyleSheetTextEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (__ZNK7WebCore19InspectorStyleSheet20inlineStyleSheetTextEPN3WTF6StringE(i1, i2) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore19InspectorStyleSheet22resourceStyleSheetTextEPN3WTF6StringE(i1, i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore33InspectorStyleSheetForInlineStyle19inspectorStyleForIdERKNS_14InspectorCSSIdE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = HEAP32[i2 + 80 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore33InspectorStyleSheetForInlineStyle17ruleSourceDataForEPNS_19CSSStyleDeclarationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = HEAP32[i2 + 76 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore19InspectorStyleSheet11lineEndingsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP8[i3 + 4 | 0] & 1) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZN7WebCore18ContentSearchUtils11lineEndingsERKN3WTF6StringE(i1, i3 | 0);
  return;
 }
}
function __ZN7WebCore19InspectorStyleSheet21ensureParsedDataReadyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (!(__ZNK7WebCore19InspectorStyleSheet10ensureTextEv(i1) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZN7WebCore19InspectorStyleSheet16ensureSourceDataEv(i1) | 0;
 return i2 | 0;
}
function __ZN7WebCore14InspectorStyle7setTextERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 return FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 7](i4, HEAP32[i1 + 16 >> 2] | 0, i2, i3) | 0;
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
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function __ZN7WebCore19InspectorStyleSheet21fireStyleSheetChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 31](i2, i1);
 return;
}
function iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE(i1 | 0, i2 | 0) | 0;
}
function __ZNK7WebCore33InspectorStyleSheetForInlineStyle10styleForIdERKNS_14InspectorCSSIdE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 304 >> 2] & 15](i2) | 0;
}
function __ZNK7WebCore19InspectorStyleSheet19checkPageStyleSheetERi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = 9;
 i3 = 0;
 return i3 | 0;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore33InspectorStyleSheetForInlineStyle11inlineStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 304 >> 2] & 15](i2) | 0;
}
function vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE(i1 | 0, i2 | 0);
}
function iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3CSS24CSSComputedStylePropertyEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue9asBooleanEPb(i1 | 0, i2 | 0) | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3CSS14ShorthandEntryEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
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
function iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPm(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPl(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPj(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPi(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPd(i1 | 0, i2 | 0) | 0;
}
function __ZNK7WebCore33InspectorStyleSheetForInlineStyle13ownerDocumentEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[(HEAP32[i1 + 72 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3CSS11CSSPropertyEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore33InspectorStyleSheetForInlineStyleD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore33InspectorStyleSheetForInlineStyleD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3CSS8CSSMediaEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3CSS7CSSRuleEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector18InspectorArrayBase7asArrayEv(i1 | 0, i2 | 0);
}
function __ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore19InspectorStyleSheet13ownerDocumentEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore13CSSStyleSheet13ownerDocumentEv(HEAP32[i1 + 16 >> 2] | 0) | 0;
}
function __ZN7WebCore33InspectorStyleSheetForInlineStyle22rememberInspectorStyleEN3WTF6RefPtrINS_14InspectorStyleEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector14InspectorValue8asObjectEv(i1 | 0, i2 | 0);
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3CSS24CSSComputedStylePropertyEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore33InspectorStyleSheetForInlineStyle20forgetInspectorStyleEPNS_19CSSStyleDeclarationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore33InspectorStyleSheetForInlineStyle16ruleIndexByStyleEPNS_19CSSStyleDeclarationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3CSS14ShorthandEntryEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function b1(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(1);
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3CSS11CSSPropertyEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore33InspectorStyleSheetForInlineStyleD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore33InspectorStyleSheetForInlineStyleD2Ev(i1);
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
function __ZN7WebCore19InspectorStyleSheetD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19InspectorStyleSheetD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3CSS8CSSMediaEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_3CSS7CSSRuleEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore14InspectorStyleD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14InspectorStyleD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN16ParsedStyleSheetC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function __ZN16ParsedStyleSheetC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 63](i2 | 0, i3 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function b4(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(4);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
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
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
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
  var FUNCTION_TABLE_ii = [b0,b0,__ZN7WebCore33InspectorStyleSheetForInlineStyle21ensureParsedDataReadyEv,b0,__ZN7WebCore19InspectorStyleSheet21ensureParsedDataReadyEv,b0,__ZNK7WebCore33InspectorStyleSheetForInlineStyle13ownerDocumentEv,b0,__ZNK7WebCore19InspectorStyleSheet13ownerDocumentEv,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiii = [b1,b1,__ZN7WebCore19InspectorStyleSheetC2EPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_13CSSStyleSheetEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumES6_PNS0_8ListenerE,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore14InspectorStyleD0Ev,b2,__ZN16ParsedStyleSheetC2Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS8CSSMediaEED1Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS14ShorthandEntryEED1Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS7CSSRuleEED1Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS7CSSRuleEED0Ev,b2,__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED0Ev,b2,__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED1Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS11CSSPropertyEED0Ev,b2,__ZN7WebCore33InspectorStyleSheetForInlineStyleD1Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS8CSSMediaEED0Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS11CSSPropertyEED1Ev,b2,__ZN7WebCore19InspectorStyleSheetD0Ev,b2,__ZN7WebCore33InspectorStyleSheetForInlineStyleD0Ev
  ,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS24CSSComputedStylePropertyEED0Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS24CSSComputedStylePropertyEED1Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS14ShorthandEntryEED0Ev,b2,__ZN7WebCore19InspectorStyleSheetD2Ev,b2,__ZN7WebCore14InspectorStyleD2Ev,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper,b3,vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper,b3,__ZN7WebCore19InspectorStyleSheet20forgetInspectorStyleEPNS_19CSSStyleDeclarationE,b3,__ZN7WebCore19InspectorStyleSheet22rememberInspectorStyleEN3WTF6RefPtrINS_14InspectorStyleEEE,b3,__ZN7WebCore33InspectorStyleSheetForInlineStyle22rememberInspectorStyleEN3WTF6RefPtrINS_14InspectorStyleEEE,b3,__ZNK7WebCore19InspectorStyleSheet11lineEndingsEv,b3,__ZN7WebCore33InspectorStyleSheetForInlineStyle20forgetInspectorStyleEPNS_19CSSStyleDeclarationE,b3,__ZNK7WebCore33InspectorStyleSheetForInlineStyle11lineEndingsEv,b3,vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_iiiii = [b4,b4,__ZN7WebCore33InspectorStyleSheetForInlineStyle12setStyleTextEPNS_19CSSStyleDeclarationERKN3WTF6StringERi,b4,__ZN7WebCore19InspectorStyleSheet12setStyleTextEPNS_19CSSStyleDeclarationERKN3WTF6StringERi,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZNK7WebCore33InspectorStyleSheetForInlineStyle17ruleSourceDataForEPNS_19CSSStyleDeclarationE,b5,__ZN7WebCore19InspectorStyleSheet19inspectorStyleForIdERKNS_14InspectorCSSIdE,b5,__ZN7WebCore33InspectorStyleSheetForInlineStyle19inspectorStyleForIdERKNS_14InspectorCSSIdE,b5,__ZNK7WebCore19InspectorStyleSheet17ruleSourceDataForEPNS_19CSSStyleDeclarationE,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viiiiii = [b7,b7,__ZN7WebCore33InspectorStyleSheetForInlineStyleC2EPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_7ElementEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumEPNS_19InspectorStyleSheet8ListenerE,b7];
  var FUNCTION_TABLE_iii = [b8,b8,__ZNK7WebCore19InspectorStyleSheet10styleForIdERKNS_14InspectorCSSIdE,b8,iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper,b8,iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper,b8,__ZNK7WebCore19InspectorStyleSheet16ruleIndexByStyleEPNS_19CSSStyleDeclarationE,b8,iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper,b8,iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper,b8,iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper,b8,iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper,b8,iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper,b8,iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper,b8,__ZNK7WebCore33InspectorStyleSheetForInlineStyle16ruleIndexByStyleEPNS_19CSSStyleDeclarationE,b8,iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper,b8,__ZNK7WebCore33InspectorStyleSheetForInlineStyle7getTextEPN3WTF6StringE,b8,__ZNK7WebCore19InspectorStyleSheet7getTextEPN3WTF6StringE
  ,b8,iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper,b8,__ZNK7WebCore33InspectorStyleSheetForInlineStyle10styleForIdERKNS_14InspectorCSSIdE,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,__ZN7WebCore14InspectorStyleC2ERKNS_14InspectorCSSIdEN3WTF10PassRefPtrINS_19CSSStyleDeclarationEEEPNS_19InspectorStyleSheetE,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiii: dynCall_iiiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiii": invoke_iiiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN9Inspector11TypeBuilder3CSS11CSSProperty8PriorityE": __ZN9Inspector11TypeBuilder3CSS11CSSProperty8PriorityE, "__ZN7WebCore8SVGNames8styleTagE": __ZN7WebCore8SVGNames8styleTagE, "__ZN9Inspector11TypeBuilder3CSS11CSSProperty6StatusE": __ZN9Inspector11TypeBuilder3CSS11CSSProperty6StatusE, "__ZN9Inspector11TypeBuilder3CSS11CSSProperty8ParsedOkE": __ZN9Inspector11TypeBuilder3CSS11CSSProperty8ParsedOkE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore19InspectorStyleSheet7setTextERKN3WTF6StringERi","_strlen","__ZN16ParsedStyleSheetC2Ev","__ZN3WTF9HashTableIPN7WebCore19CSSStyleDeclarationENS_12KeyValuePairIS3_NS_6RefPtrINS1_14InspectorStyleEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZNK16ParsedStyleSheet16ruleSourceDataAtEj","__ZNK7WebCore33InspectorStyleSheetForInlineStyle23getStyleAttributeRangesEPNS_17CSSRuleSourceDataE","__ZN7WebCore19InspectorStyleSheet18buildObjectForRuleEPNS_12CSSStyleRuleE","__ZN7WebCore19InspectorStyleSheet30styleSheetTextWithChangedStyleEPNS_19CSSStyleDeclarationERKN3WTF6StringEPS4_","__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS11CSSPropertyEED0Ev","__ZN3WTF9HashTableIPN7WebCore19CSSStyleDeclarationENS_12KeyValuePairIS3_NS_6RefPtrINS1_14InspectorStyleEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN7WebCore19InspectorStyleSheet15setPropertyTextERKNS_14InspectorCSSIdEjRKN3WTF6StringEbPS5_Ri","__ZNK7WebCore19InspectorStyleSheet8finalURLEv","__ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore19InspectorStyleSheet20forgetInspectorStyleEPNS_19CSSStyleDeclarationE","__ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZN7WebCore19InspectorStyleSheet16ensureSourceDataEv","__ZN7WebCore19InspectorStyleSheet21fireStyleSheetChangedEv","__ZNK7WebCore19InspectorStyleSheet16ruleIndexByStyleEPNS_19CSSStyleDeclarationE","__ZN7WebCoreL22buildSourceRangeObjectERKNS_11SourceRangeEPN3WTF6VectorIjLj0ENS3_15CrashOnOverflowEEE","_memcpy","__ZNK3WTF12StringAppendINS0_INS0_INS_6StringEPKcEES1_EES3_EcvS1_Ev","__ZN7WebCore16CSSParserContextC2ERKS0_","__ZNK7WebCore19InspectorStyleSheet17ruleSourceDataForEPNS_19CSSStyleDeclarationE","__ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEE5clearEv","__ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE6shrinkEj","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_S1_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNK7WebCore33InspectorStyleSheetForInlineStyle13ownerDocumentEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore19InspectorStyleSheet21buildArrayForRuleListEPNS_11CSSRuleListE","__ZNK7WebCore14InspectorStyle7getTextEPN3WTF6StringE","__ZN3WTF6VectorIN7WebCore22InspectorStylePropertyELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZNK7WebCore33InspectorStyleSheetForInlineStyle11lineEndingsEv","__ZNK7WebCore33InspectorStyleSheetForInlineStyle11inlineStyleEv","__ZNK7WebCore14InspectorStyle19buildObjectForStyleEv","__ZN7WebCore33InspectorStyleSheetForInlineStyle6createEPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_7ElementEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumEPNS_19InspectorStyleSheet8ListenerE","__ZN7WebCore19InspectorStyleSheet21ensureParsedDataReadyEv","__ZNK7WebCore19InspectorStyleSheet13ownerDocumentEv","__ZNK7WebCore14InspectorStyle26buildArrayForComputedStyleEv","__ZNK7WebCore33InspectorStyleSheetForInlineStyle10styleForIdERKNS_14InspectorCSSIdE","__ZNK7WebCore19InspectorStyleSheet6ruleIdEPNS_12CSSStyleRuleE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector11TypeBuilder3CSS11CSSPropertyEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_10StringHashENS_7HashMapIS1_S8_SC_NS_10HashTraitsIS1_EENSE_IS8_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS1_RS8_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S9_SB_SC_SI_SF_EEEEOT0_OT1_","__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS14ShorthandEntryEED0Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS11CSSPropertyEED1Ev","__ZN7WebCore33InspectorStyleSheetForInlineStyle21ensureParsedDataReadyEv","__ZN7WebCore19InspectorStyleSheet6createEPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_13CSSStyleSheetEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumES6_PNS0_8ListenerE","__ZN7WebCore33InspectorStyleSheetForInlineStyleD2Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS7CSSRuleEED0Ev","__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED0Ev","__ZNK7WebCore14InspectorStyle17shorthandPriorityERKN3WTF6StringE","__ZN7WebCore19InspectorStyleSheet14togglePropertyERKNS_14InspectorCSSIdEjbRi","__ZN3WTF6VectorINS_6RefPtrIN7WebCore7CSSRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore14InspectorStyle6createERKNS_14InspectorCSSIdEN3WTF10PassRefPtrINS_19CSSStyleDeclarationEEEPNS_19InspectorStyleSheetE","__ZN9Inspector11TypeBuilder3CSS7CSSRule7BuilderILi7EE8setStyleEN3WTF10PassRefPtrINS1_8CSSStyleEEE","__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS24CSSComputedStylePropertyEED1Ev","__ZN7WebCore19InspectorStyleSheet10deleteRuleERKNS_14InspectorCSSIdERi","__ZNK7WebCore33InspectorStyleSheetForInlineStyle17ruleSourceDataForEPNS_19CSSStyleDeclarationE","__ZN7WebCore14InspectorStyle15setPropertyTextEjRKN3WTF6StringEbPS2_Ri","__ZN7WebCore19InspectorStyleSheetD0Ev","__ZNK7WebCore19InspectorStyleSheet11lineEndingsEv","__ZN7WebCore19InspectorStyleSheet28buildObjectForStyleSheetInfoEv","__ZNK7WebCore14InspectorStyle18longhandPropertiesERKN3WTF6StringE","__ZN7WebCore22InspectorStylePropertyaSERKS0_","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF6VectorINS_6RefPtrIN7WebCore12CSSStyleRuleEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF7HashMapIPN7WebCore19CSSStyleDeclarationENS_6RefPtrINS1_14InspectorStyleEEENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_","__ZN7WebCore19InspectorStyleSheet13styleSheetURLEPNS_13CSSStyleSheetE","__ZN7WebCore19InspectorStyleSheet12setStyleTextEPNS_19CSSStyleDeclarationERKN3WTF6StringERi","__ZNK7WebCore19InspectorStyleSheet20inlineStyleSheetTextEPN3WTF6StringE","__ZNK7WebCore19InspectorStyleSheet22resourceStyleSheetTextEPN3WTF6StringE","__ZN3WTF6VectorIN7WebCore21CSSPropertySourceDataELj0ENS_15CrashOnOverflowEED2Ev","__ZN9Inspector11TypeBuilder3CSS11CSSProperty11setImplicitEb","__ZNK7WebCore14InspectorStyle19styleWithPropertiesEv","__ZN7WebCore19InspectorStyleSheet17reparseStyleSheetERKN3WTF6StringE","__ZN7WebCore33InspectorStyleSheetForInlineStyle19inspectorStyleForIdERKNS_14InspectorCSSIdE","__ZN7WebCore19InspectorStyleSheet12ruleSelectorERKNS_14InspectorCSSIdERi","__ZN9Inspector11TypeBuilder3CSS19CSSStyleSheetHeader7BuilderILi1EE9setOriginENS1_16StyleSheetOrigin4EnumE","__ZNK7WebCore19InspectorStyleSheet10styleForIdERKNS_14InspectorCSSIdE","__ZNK7WebCore33InspectorStyleSheetForInlineStyle16elementStyleTextEv","__ZNK7WebCore14InspectorCSSId15asProtocolValueIN9Inspector11TypeBuilder3CSS10CSSStyleIdEEEN3WTF10PassRefPtrIT_EEv","__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS14ShorthandEntryEED1Ev","__ZN9Inspector11TypeBuilder5ArrayIN3WTF6StringEED1Ev","__ZNK7WebCore19InspectorStyleSheet19checkPageStyleSheetERi","__ZN7WebCore33InspectorStyleSheetForInlineStyleD1Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS8CSSMediaEED0Ev","__ZN7WebCore19InspectorStyleSheet22rememberInspectorStyleEN3WTF6RefPtrINS_14InspectorStyleEEE","_memset","__ZN7WebCore33InspectorStyleSheetForInlineStyle22rememberInspectorStyleEN3WTF6RefPtrINS_14InspectorStyleEEE","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore14InspectorStyleC2ERKNS_14InspectorCSSIdEN3WTF10PassRefPtrINS_19CSSStyleDeclarationEEEPNS_19InspectorStyleSheetE","__ZN7WebCore19InspectorStyleSheet24buildObjectForStyleSheetEv","__ZN9Inspector11TypeBuilder3CSS8CSSMedia7BuilderILi1EE9setSourceENS2_6Source4EnumE","__ZN7WebCore33InspectorStyleSheetForInlineStyle12setStyleTextEPNS_19CSSStyleDeclarationERKN3WTF6StringERi","__ZNK7WebCore19InspectorStyleSheet9ruleForIdERKNS_14InspectorCSSIdE","__ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev","__ZN16ParsedStyleSheet13setSourceDataEN3WTF10PassOwnPtrINS0_6VectorINS0_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS0_15CrashOnOverflowEEEEE","__ZL17flattenSourceDataPN3WTF6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEES7_","__ZN7WebCore19InspectorStyleSheet12setStyleTextERKNS_14InspectorCSSIdERKN3WTF6StringEPS5_Ri","__ZNK7WebCore19InspectorStyleSheet22originalStyleSheetTextEPN3WTF6StringE","__ZNK7WebCore33InspectorStyleSheetForInlineStyle7getTextEPN3WTF6StringE","__ZN7WebCore19InspectorStyleSheet16collectFlatRulesEN3WTF10PassRefPtrINS_11CSSRuleListEEEPNS1_6VectorINS1_6RefPtrINS_12CSSStyleRuleEEELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore14InspectorStyle21populateAllPropertiesEPN3WTF6VectorINS_22InspectorStylePropertyELj0ENS1_15CrashOnOverflowEEE","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore19InspectorStyleSheet7addRuleERKN3WTF6StringERi","__ZNK7WebCore19InspectorStyleSheet7getTextEPN3WTF6StringE","__ZN7WebCore19InspectorStyleSheetC2EPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_13CSSStyleSheetEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumES6_PNS0_8ListenerE","__ZN7WebCore19InspectorStyleSheet15revalidateStyleEPNS_19CSSStyleDeclarationE","__ZN7WebCore19InspectorStyleSheet19inspectorStyleForIdERKNS_14InspectorCSSIdE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector11TypeBuilder3CSS11CSSPropertyEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_10StringHashENS_7HashMapIS1_S8_SC_NS_10HashTraitsIS1_EENSE_IS8_EEE18KeyValuePairTraitsESF_E6expandEPS9_","__ZN7WebCore17CSSRuleSourceData6createENS0_4TypeE","__ZN7WebCore14InspectorStyleD2Ev","__ZN7WebCore14InspectorStyleD0Ev","__ZNK7WebCore19InspectorStyleSheet13ruleOrStyleIdEPNS_19CSSStyleDeclarationE","__ZN7WebCoreL13asCSSRuleListEPNS_13CSSStyleSheetE","__ZN7WebCoreL16buildMediaObjectEPKNS_9MediaListENS_15MediaListSourceERKN3WTF6StringE","__ZN7WebCore14InspectorStyle7setTextERKN3WTF6StringERi","__ZN9Inspector11TypeBuilder3CSS11CSSProperty9setStatusENS2_6Status4EnumE","__ZN7WebCore33InspectorStyleSheetForInlineStyleD0Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS7CSSRuleEED1Ev","__ZNK7WebCore14InspectorCSSId15asProtocolValueIN9Inspector11TypeBuilder3CSS9CSSRuleIdEEEN3WTF10PassRefPtrIT_EEv","__ZN7WebCore33InspectorStyleSheetForInlineStyleC2EPNS_18InspectorPageAgentERKN3WTF6StringENS3_10PassRefPtrINS_7ElementEEEN9Inspector11TypeBuilder3CSS16StyleSheetOrigin4EnumEPNS_19InspectorStyleSheet8ListenerE","__ZNK7WebCore14InspectorStyle30newLineAndWhitespaceDelimitersEv","__ZNK7WebCore19InspectorStyleSheet10ensureTextEv","__ZNK7WebCore19InspectorStyleSheet15ensureFlatRulesEv","__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS8CSSMediaEED1Ev","__ZN7WebCore19InspectorStyleSheet26buildObjectForSelectorListEPNS_12CSSStyleRuleE","__ZN7WebCoreL15createCSSParserEPNS_8DocumentE","__ZNK7WebCore33InspectorStyleSheetForInlineStyle16ruleIndexByStyleEPNS_19CSSStyleDeclarationE","__ZN7WebCore17CSSRuleSourceDataD2Ev","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore19InspectorStyleSheet19buildObjectForStyleEPNS_19CSSStyleDeclarationE","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS_6StringEPKcEES2_EES4_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZNK7WebCore14InspectorStyle17extractSourceDataEv","__ZN7WebCore33InspectorStyleSheetForInlineStyle20forgetInspectorStyleEPNS_19CSSStyleDeclarationE","__ZN9Inspector11TypeBuilder3CSS7CSSRule7BuilderILi3EE9setOriginENS1_16StyleSheetOrigin4EnumE","__ZN7WebCore14InspectorStyle14togglePropertyEjbRi","__ZN3WTF10PassOwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEED2Ev","__ZN3WTF6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN9Inspector11TypeBuilder5ArrayINS0_3CSS24CSSComputedStylePropertyEED0Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPt","__ZNK7WebCore14InspectorStyle14shorthandValueERKN3WTF6StringE","__ZN7WebCore19InspectorStyleSheet15setRuleSelectorERKNS_14InspectorCSSIdERKN3WTF6StringERi","__ZN3WTF12StringAppendINS0_INS_6StringEPKcEES1_E7writeToEPh","__ZN7WebCore33InspectorStyleSheetForInlineStyle25didModifyElementAttributeEv","__ZN16ParsedStyleSheet7setTextERKN3WTF6StringE","__ZN7WebCore19InspectorStyleSheetD2Ev","__ZN3WTF6OwnPtrINS_6VectorINS_6RefPtrIN7WebCore17CSSRuleSourceDataEEELj0ENS_15CrashOnOverflowEEEEaSERKNS_10PassOwnPtrIS7_EE"]
